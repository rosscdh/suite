/* This code has been generated from your interaction model by skillinator.io

/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/

// There are three sections, Text Strings, Skill Code, and Helper Function(s).
// You can copy and paste the contents as the code for a new Lambda function, using the alexa-skill-kit-sdk-factskill template.
// This code includes helper functions for compatibility with versions of the SDK prior to 1.0.9, which includes the dialog directives.



// 1. Text strings =====================================================================================================
//    Modify these strings and messages to change the behavior of your Lambda function


let speechOutput;
let speechReprompt;
let reprompt;
let welcomeOutput = "Would you like to have some popcorn or some nachos?";
let welcomeReprompt = "You have not yet placed an order. Can Spryker bring you popcorn or nachos?";
// 2. Skill Code =======================================================================================================
"use strict";
const Alexa = require('alexa-sdk');
const APP_ID = 'amzn1.ask.skill.dad39de8-9c2c-4e3b-b706-ea336367739d';
const globalHostname = 'www.dmexco.demo-spryker.com';

const http = require('http');
const zlib = require('zlib');

speechOutput = '';
const handlers = {
    'LaunchRequest': function () {
        this.emit(':ask', welcomeOutput, welcomeReprompt);
    },
    'AMAZON.HelpIntent': function () {
        speechOutput = 'You can order Nachos or Popcorn. For example, just say: I want to eat Nachos';
        this.emit(':ask', speechOutput, welcomeOutput);
    },
    'AMAZON.CancelIntent': function () {
        speechOutput = 'Ok, your order is canceled.';
        speechReprompt = 'Do you want to order something else?';
        this.emit(':ask', speechOutput, speechReprompt);
    },
    'AMAZON.StopIntent': function () {
        speechOutput = "Ok, I'll be here if you get hungry";
        this.emit(':tell', speechOutput);
    },
    'SessionEndedRequest': function () {
        speechOutput = '';
        //this.emit(':saveState', true);//uncomment to save attributes to db on session end
        this.emit(':tell', speechOutput);
    },
    'fallback_one': function () {
        speechOutput = "I didn't understand your request. Would you like Nachos or Popcorn?";
        this.emit(":ask", speechOutput, welcomeOutput);
    },
    'fallback_two': function () {
        speechOutput = "Please choose only one variant";
        speechReprompt = "I didn't quite understand what you wanted. Can you repeat?";
        this.emit(":ask", speechOutput, speechReprompt);
    },
    'payment': function () {
        speechOutput = "";
        let self = this;
        var localHostname = getHostName(this.event.context.System.device.deviceId);

        // Request options
        const options = {
            hostname: localHostname,
            port: 80,
            path: '/alexa/checkout-and-order',
            method: 'GET',
            headers: {
                'Accept-Encoding': 'gzip, deflate'
            }
        };

        // Do the API call and parse Response
        http.get(options, function (response) {
            let str = '';
            let gunzip = zlib.createGunzip();

            response.pipe(gunzip);

            gunzip.on('data', function (chunk) {
                chunk = chunk.toString('utf-8');
                str += chunk;
            });

            gunzip.on('end', function () {
                let jsonResponse = JSON.parse(str);
                speechOutput = jsonResponse.response;
                let SpeechReprompt = "It will be with you in a minute";
                self.emit(':ask', speechOutput, SpeechReprompt);
            });
        });
    },
    'select_abstract': function () {
        speechOutput = '';
        let self = this;

        let foodSlotRaw = this.event.request.intent.slots.food.value;
        let foodSlot = resolveCanonical(this.event.request.intent.slots.food);
        console.log("selected abstract is: " + foodSlot);
        var localHostname = getHostName(this.event.context.System.device.deviceId);

        // Request options
        const options = {
            hostname: localHostname,
            port: 80,
            path: '/alexa/product?snack=' + foodSlot,
            headers: {
                'Accept-Encoding': 'gzip, deflate'
            }
        };

        // Do the API call and parse Response
        http.get(options, function (response) {
            let str = '';
            let gunzip = zlib.createGunzip();

            response.pipe(gunzip);

            gunzip.on('data', function (chunk) {
                chunk = chunk.toString('utf-8');
                str += chunk;
            });

            gunzip.on('end', function () {
                let jsonResponse = JSON.parse(str);
                speechOutput = jsonResponse.response;
                let SpeechReprompt = "So, which variant would you like to order?";
                self.emit(':ask', speechOutput, SpeechReprompt);
            });
        });

    },
    'select_concrete': function () {
        speechOutput = "";
        let self = this;

        let foodSlotRaw = this.event.request.intent.slots.food.value;
        let foodSlot = resolveCanonical(this.event.request.intent.slots.food);

        let variantSlotRaw = this.event.request.intent.slots.variant.value;
        let variantSlot = resolveCanonical(this.event.request.intent.slots.variant);
        console.log("selected concrete is: " + foodSlot);
        var localHostname = getHostName(this.event.context.System.device.deviceId);

        // Request options
        const options = {
            hostname: localHostname,
            port: 80,
            path: '/alexa/cart?variant=' + variantSlot,
            headers: {
                'Accept-Encoding': 'gzip, deflate'
            }
        };

        // Do the API call and parse Response
        http.get(options, function (response) {
            let str = '';
            let gunzip = zlib.createGunzip();

            response.pipe(gunzip);

            gunzip.on('data', function (chunk) {
                chunk = chunk.toString('utf-8');
                str += chunk;
            });

            gunzip.on('end', function () {
                var jsonResponse = JSON.parse(str);
                speechOutput = jsonResponse.response;
                var SpeechReprompt = "It will be with you in a minute";
                self.emit(':ask', speechOutput, SpeechReprompt);
            });
        });
    },
    'Unhandled': function () {
        speechOutput = "I didn't quite understand what you wanted. Can you repeat?";
        speechReprompt = "Do you want Nachos or Popcorn?";
        this.emit(':ask', speechOutput, speechReprompt);
    }
};

exports.handler = (event, context) => {
    const alexa = Alexa.handler(event, context);
    alexa.appId = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    //alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    //alexa.dynamoDBTableName = 'DYNAMODB_TABLE_NAME'; //uncomment this line to save attributes to DB
    alexa.execute();
};

//    END of Intent Handlers {} ========================================================================================
// 3. Helper Function  =================================================================================================

function resolveCanonical(slot){
    //this function looks at the entity resolution part of request and returns the slot value if a synonyms is provided
    let canonical;
    try{
        canonical = slot.resolutions.resolutionsPerAuthority[0].values[0].value.name;
    }catch(err){
        console.log(err.message);
        canonical = slot.value;
    };
    return canonical;
};

function delegateSlotCollection(){
    if (this.event.request.dialogState === "STARTED") {
        let updatedIntent= null;
        // updatedIntent=this.event.request.intent;
        //optionally pre-fill slots: update the intent object with slot values for which
        //you have defaults, then return Dialog.Delegate with this updated intent
        // in the updatedIntent property
        //this.emit(":delegate", updatedIntent); //uncomment this is using ASK SDK 1.0.9 or newer

        //this code is necessary if using ASK SDK versions prior to 1.0.9
        if(this.isOverridden()) {
            return;
        }
        this.handler.response = buildSpeechletResponse({
            sessionAttributes: this.attributes,
            directives: getDialogDirectives('Dialog.Delegate', updatedIntent, null),
            shouldEndSession: false
        });
        this.emit(':responseReady', updatedIntent);

    } else if (this.event.request.dialogState !== "COMPLETED") {
        // return a Dialog.Delegate directive with no updatedIntent property.
        //this.emit(":delegate"); //uncomment this is using ASK SDK 1.0.9 or newer

        //this code necessary is using ASK SDK versions prior to 1.0.9
        if(this.isOverridden()) {
            return;
        }
        this.handler.response = buildSpeechletResponse({
            sessionAttributes: this.attributes,
            directives: getDialogDirectives('Dialog.Delegate', null, null),
            shouldEndSession: false
        });
        this.emit(':responseReady');

    } else {
        // Dialog is now complete and all required slots should be filled,
        // so call your normal intent handler.
        return this.event.request.intent;
    }
}


function randomPhrase(array) {
    // the argument is an array [] of words or phrases
    let i = 0;
    i = Math.floor(Math.random() * array.length);
    return(array[i]);
}
function isSlotValid(request, slotName){
    let slot = request.intent.slots[slotName];
    //console.log("request = "+JSON.stringify(request)); //uncomment if you want to see the request
    let slotValue;

    //if we have a slot, get the text and store it into speechOutput
    if (slot && slot.value) {
        //we have a value in the slot
        slotValue = slot.value.toLowerCase();
        return slotValue;
    } else {
        //we didn't get a value in the slot.
        return false;
    }
}

//These functions are here to allow dialog directives to work with SDK versions prior to 1.0.9
//will be removed once Lambda templates are updated with the latest SDK

function createSpeechObject(optionsParam) {
    if (optionsParam && optionsParam.type === 'SSML') {
        return {
            type: optionsParam.type,
            ssml: optionsParam['speech']
        };
    } else {
        return {
            type: optionsParam.type || 'PlainText',
            text: optionsParam['speech'] || optionsParam
        };
    }
}

function buildSpeechletResponse(options) {
    let alexaResponse = {
        shouldEndSession: options.shouldEndSession
    };

    if (options.output) {
        alexaResponse.outputSpeech = createSpeechObject(options.output);
    }

    if (options.reprompt) {
        alexaResponse.reprompt = {
            outputSpeech: createSpeechObject(options.reprompt)
        };
    }

    if (options.directives) {
        alexaResponse.directives = options.directives;
    }

    if (options.cardTitle && options.cardContent) {
        alexaResponse.card = {
            type: 'Simple',
            title: options.cardTitle,
            content: options.cardContent
        };

        if(options.cardImage && (options.cardImage.smallImageUrl || options.cardImage.largeImageUrl)) {
            alexaResponse.card.type = 'Standard';
            alexaResponse.card['image'] = {};

            delete alexaResponse.card.content;
            alexaResponse.card.text = options.cardContent;

            if(options.cardImage.smallImageUrl) {
                alexaResponse.card.image['smallImageUrl'] = options.cardImage.smallImageUrl;
            }

            if(options.cardImage.largeImageUrl) {
                alexaResponse.card.image['largeImageUrl'] = options.cardImage.largeImageUrl;
            }
        }
    } else if (options.cardType === 'LinkAccount') {
        alexaResponse.card = {
            type: 'LinkAccount'
        };
    } else if (options.cardType === 'AskForPermissionsConsent') {
        alexaResponse.card = {
            type: 'AskForPermissionsConsent',
            permissions: options.permissions
        };
    }

    let returnResult = {
        version: '1.0',
        response: alexaResponse
    };

    if (options.sessionAttributes) {
        returnResult.sessionAttributes = options.sessionAttributes;
    }
    return returnResult;
}

function getDialogDirectives(dialogType, updatedIntent, slotName) {
    let directive = {
        type: dialogType
    };

    if (dialogType === 'Dialog.ElicitSlot') {
        directive.slotToElicit = slotName;
    } else if (dialogType === 'Dialog.ConfirmSlot') {
        directive.slotToConfirm = slotName;
    }

    if (updatedIntent) {
        directive.updatedIntent = updatedIntent;
    }
    return [directive];
}

function getHostName(currentDevice)
{
    console.log('DEVICE ID: ' + currentDevice);

    // // Spryker Alexa 01
    if (currentDevice === 'amzn1.ask.device.AH67WTOFPOC5RBT4W5U2HIJRLHIZQ2H2ROUB6L42NLEXIEMOYAWWI2HJQMA75KXYTM5UA2S4YLBPEJ4CTBF7QFHQRVDCDPXSALWHKJW4STLCD6U3BPCUBRTRN4LCAKQG67D43F5DDA4U2RDGWBOPGKFJO7HS4D2ZEM4E2LFVQ6QG6N535SJLQ')
    {
        return '59fb3d7f.eu.ngrok.io';
    }

    // Spryker Alexa 02
    if (currentDevice === 'amzn1.ask.device.AH67WTOFPOC5RBT4W5U2HIJRLHIX3TKFC7OGLSZXBQO4IKQ7WNP63YYWWKRGZL3KJHFCKH7YYMCOQ6GNBN65PBXTOY27XQOHMAGQGND3IRGQFRCTBBNBUZOUFSNGP24SVAPE2OZPSNPZTLQHEMU5DEGE5PPQ')
    {
        return 'e01ad2eb.eu.ngrok.io';
    }

    // Spryker Alexa 03
    if (currentDevice === 'amzn1.ask.device.AH67WTOFPOC5RBT4W5U2HIJRLHIQHF4CSWSOIFMI4PL3E6NYFGEWHIB2UEDW26SRLUSREEJAFOKKZ2VFNV7HSH5M6B7N7C72NOKWWCMHFE4UC5VDZDUD7OX4N5ZCRFCSY7SPVTDNOSGMH2NOA3T7MRPTT2PTKKW6CM5IQR2K5A5OZOXUPFC4E')
    {
        return '60488fca.eu.ngrok.io';
    }

    // Spryker Alexa 04
    if (currentDevice === 'amzn1.ask.device.AH67WTOFPOC5RBT4W5U2HIJRLHI4VJUY74GFUDSAAMTE74RFIUY3OO67YOOCDZNOTJKV6QBIY6LEAHAV7RIRAHWGCRFIAQJ63SN3QRCPYTFYQEQI34URLWWUGCAPFGTMB2FKLBVRYDX3U72RFPBPJZN6BWMQ')
    {
        return '59fb3d7f.eu.ngrok.io';
    }

    // Spryker Alexa 05
    if (currentDevice === 'amzn1.ask.device.AH67WTOFPOC5RBT4W5U2HIJRLHIYPTERDDJPZ3A37JCRROWW3EJZCIP2GCCE6L6C3GY3C4ASXB2A4RLNT3EV5IFBUDX4L3WIH3NH3LMH64BQIV5GBZXEIHJJJCX6YXRBOVB6YYTLKGZG25DYKQJ4LESIQYAA')
    {
        return '59fb3d7f.eu.ngrok.io';
    }

    // Spryker Alexa 06
    if (currentDevice === 'amzn1.ask.device.AH67WTOFPOC5RBT4W5U2HIJRLHITPOUVOWT3OLRDMOYWBPRACFIXV4E2O3M5ASF2XFVM52NN3NOPSSBLOG5T2JF6R66L5URDRSMBT3AGVBMUXRY7GM5EHFZTAUPYVE4EIOQBWFITBNW3KN2QGSP7E7KFJ5LQ')
    {
        return '59fb3d7f.eu.ngrok.io';
    }

    // Spryker Alexa 07
    if (currentDevice === 'amzn1.ask.device.AEIVDWONJ2C366ZKAJEP6H5MW2ARGBA44MEULXA656S35A54T4TUPNICYZVOY6PJWCXTCWTIRDFTHJQYN6A2JORKNDNB7OA5XLROGXNGNOSBAM4IBMIVPINSOXAKCBVZRUM4WRAJJMJE6P6AWTBAYD4DCG53TPXZ5GALPFPEHA3HSL6FSLEYW')
    {
        return 'e02880a3.eu.ngrok.io';
    }

    // Spryker Alexa 08
    if (currentDevice === 'amzn1.ask.device.AEIVDWONJ2C366ZKAJEP6H5MW2A3C77ZJDPVT4R4WLKPGJECOLUWUM35KDPHTREUP5NAN5ON7VRKCJ5FGQT26AQTV3BA6DGJSUVFQNZJ7K2UUH5MDHMTL55DFDMOZULRHSEQVTQARSSQ7GDXOHGNWUPETDWA')
    {
        return '67853c67.eu.ngrok.io';
    }

    // Spryker Alexa 09
    if (currentDevice === 'amzn1.ask.device.AH67WTOFPOC5RBT4W5U2HIJRLHI6VHLKLKSQKXKYHESCNGIMB3ZYTWVENPNARWO6TDEN3W2FZARZQOL2Y6J4ARR6BQTGXEVL2X2IAC3TE5MSSVGBNBOKQGVWHYYXS5U4WPCT5SJJ6NULKJQC3EI3OJUIVBIXBOCIFINM6C4U2VJQ6SCSTL5GC')
    {
        return 'f82cd463.eu.ngrok.io';
    }

    // Spryker Alexa 10
    if (currentDevice === 'amzn1.ask.device.AH67WTOFPOC5RBT4W5U2HIJRLHIYGD7E6CZKWFOTGNXTF4Q5UYORY7LCBJ6I2VL6RQGLBC3BX5QEOD4VBFNXGHEJ2MBKS5GW7EQCX6L4NJL4I6XG4EDMWI2DVVXSRDEHQGBTWD6NW34RWJ2CSVSMK3DFJNQA')
    {
        return '3bb7dbes.eu.ngrok.io';
    }

    // Spryker Alexa 11
    if (currentDevice === 'amzn1.ask.device.AH67WTOFPOC5RBT4W5U2HIJRLHIUBMOQHKXAGQNBU45MUZGBASUGMY7WVBM3SEXTIKPWPB6SJSISDC7IYBLRPLNJKOORCVZLCWZ63W7RC4KVSUDSKMPI2XALRJ2I3SIG667OZOLPK6GNU3KI5HVSNGOTUQWQ')
    {
        return '59fb3d7f.eu.ngrok.io';
    }

    // Spryker Alexa 12
    if (currentDevice === 'amzn1.ask.device.AH67WTOFPOC5RBT4W5U2HIJRLHI43UGDBDH7G4HSNJFIWIOLBH26N5M4MTQFOLAZS6AMXILPHT72TGAWYBESNQNAPWJQ3QNCD2NNPZB2JBWRCTHHSJRDXXQHNIDGGKKFPGO53KR4CALPR7IGBWXSKZ5KO64653YXH2MTG272SHZRJGJQKMFPC')
    {
        return '59fb3d7f.eu.ngrok.io';
    }

    // Spryker Alexa 13
    if (currentDevice === 'amzn1.ask.device.AH67WTOFPOC5RBT4W5U2HIJRLHIZP5DSGFSJWFLEHMO4EIC7X4POURUOOYEMRW7DFKJ4TYQTX22ATUOURAZ2ILJZLYCTDS5WVWSZ6FUBVBYMLRT3DL7A6YH2JQ7FATCR3K5MHTDR4JYNUDP3OY2UF6HZ7XE35KVB4JBQBVMZLCDJWMXEVF3R4')
    {
        return '4849d55b.eu.ngrok.io';
    }

    // Spryker Alexa 14
    if (currentDevice === 'amzn1.ask.device.AH67WTOFPOC5RBT4W5U2HIJRLHIXZAJ47REU6KLI5S24NTDYJIBD5FU6LR5QM227HXTXAHSXMTLWQDTQPLQ6TEJLGUBTMT7DI5UV5KNDPF6PZUBDQPASQOPZY4XP3QTDJIHMXMUJMGYC5SFL6UNYKO5XQ5YAFXRCA362IKIAOFEDEZIWNFWGI')
    {
        return '59fb3d7f.eu.ngrok.io';
    }

    // Spryker Alexa 15
    if (currentDevice === 'amzn1.ask.device.AH67WTOFPOC5RBT4W5U2HIJRLHIRZZGLBHLDB65YU662FT6DM2XPV2TXWEEUM73BSKICNLGGTUQI4XB6YGLGNJHNIZGIA47YMOT3NZ67AVKVBK2J4VZ5DO5RMEGEEXSGOQV6B4FDRMIEBE3IAL544ERG2YGQ')
    {
        return '59fb3d7f.eu.ngrok.io';
    }

    return globalHostname;
}
