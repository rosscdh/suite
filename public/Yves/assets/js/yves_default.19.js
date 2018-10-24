(window["webpackJsonp_yves_default"] = window["webpackJsonp_yves_default"] || []).push([[19],{

/***/ "./vendor/spryker-shop/product-packaging-unit-widget/src/SprykerShop/Yves/ProductPackagingUnitWidget/Theme/default/components/molecules/packaging-unit-quantity-selector/packaging-unit-quantity-selector.ts":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./vendor/spryker-shop/product-packaging-unit-widget/src/SprykerShop/Yves/ProductPackagingUnitWidget/Theme/default/components/molecules/packaging-unit-quantity-selector/packaging-unit-quantity-selector.ts ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ShopUi_models_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ShopUi/models/component */ "./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/models/component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var PackagingUnitQuantitySelector = (function (_super) {
    __extends(PackagingUnitQuantitySelector, _super);
    function PackagingUnitQuantitySelector() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PackagingUnitQuantitySelector.prototype.readyCallback = function (event) {
        this.qtyInSalesUnitInput = document.querySelector('#sales-unit-quantity');
        this.qtyInBaseUnitInput = document.querySelector('#base-unit-quantity');
        this.measurementUnitInput = document.querySelector('.select-measurement-unit');
        this.addToCartButton = document.getElementById('add-to-cart-button');
        this.leadSalesUnitSelect = document.querySelector('.select-lead-measurement-unit');
        this.amountInSalesUnitInput = document.querySelector('#user-amount');
        this.amountDefaultInBaseUnitInput = document.querySelector('#default-amount');
        this.amountInBaseUnitInput = document.querySelector('#amount');
        this.packagingUnitAmountInput = document.querySelector('#packaging-unit-amount');
        this.productPackagingNewPriceBlock = document.querySelector('#product-packaging-new-price-block');
        this.productPackagingNewPriceValueBlock = document.querySelector('#product-packaging-new-price-value-block');
        this.itemBasePriceInput = document.querySelector('#item-base-price');
        this.itemMoneySymbolInput = document.querySelector('#item-money-symbol');
        this.quantityBetweenElement = document.getElementById('quantity-between-units');
        this.quantityMinElement = document.getElementById('minimum-quantity');
        this.quantityMaxElement = document.getElementById('maximum-quantity');
        this.muChoiceNotificationElement = document.querySelector('.measurement-unit-choice');
        this.muBetweenNotificationElement = document.getElementById('quantity-between-units');
        this.muMinNotificationElement = document.getElementById('minimum-quantity');
        this.muMaxNotificationElement = document.getElementById('maximum-quantity');
        this.muTranslationsElement = document.getElementById('measurement-unit-translation');
        this.muChoiceListElement = document.querySelector('#measurement-unit-choices .list');
        this.muCurrentChoiceElement = document.querySelector('.measurement-unit-choice #current-choice');
        this.puChoiceElement = document.querySelector('.packaging-unit-choice');
        this.puMinNotificationElement = document.getElementById('packaging-amount-min');
        this.puMaxNotificationElement = document.getElementById('packaging-amount-max');
        this.puIntervalNotificationElement = document.getElementById('packaging-amount-interval');
        this.puChoiceListElement = document.querySelector('#packaging-unit-choices .list');
        this.puCurrentChoiceElement = document.querySelector('.packaging-unit-choice #amount-current-choice');
        this.puError = false;
        this.muError = false;
        this.initJson();
        this.initTranslations();
        this.initCurrentSalesUnit();
        this.initCurrentLeadSalesUnit();
        this.initFormDefaultValues();
        this.mapEvents();
        if (this.amountInBaseUnitInput) {
            this.amountInputChange();
        }
    };
    PackagingUnitQuantitySelector.prototype.initJson = function () {
        var jsonSchemaContainer = document.getElementsByClassName(this.name + '__json')[0];
        if (jsonSchemaContainer.hasAttribute('json')) {
            var jsonString = jsonSchemaContainer.getAttribute('json');
            var jsonData = JSON.parse(jsonString);
            if (jsonData.hasOwnProperty('baseUnit')) {
                this.baseUnit = jsonData.baseUnit;
            }
            if (jsonData.hasOwnProperty('salesUnits')) {
                this.salesUnits = jsonData.salesUnits;
            }
            if (jsonData.hasOwnProperty('leadSalesUnits')) {
                this.leadSalesUnits = jsonData.leadSalesUnits;
            }
            if (jsonData.hasOwnProperty('isAmountBlockEnabled')) {
                this.isAmountBlockEnabled = jsonData.isAmountBlockEnabled;
            }
            if (jsonData.hasOwnProperty('isAddToCartDisabled')) {
                this.isAddToCartDisabled = jsonData.isAddToCartDisabled;
            }
            if (jsonData.hasOwnProperty('productPackagingUnitStorage')) {
                this.productPackagingUnitStorage = jsonData.productPackagingUnitStorage;
            }
            if (jsonData.hasOwnProperty('productQuantityStorage')) {
                this.productQuantityStorage = jsonData.productQuantityStorage;
            }
        }
    };
    PackagingUnitQuantitySelector.prototype.initFormDefaultValues = function () {
        if (this.amountInBaseUnitInput) {
            this.qtyInSalesUnitInput.value = this.getMinQuantity();
            this.amountInSalesUnitInput.value = this.getDefaultAmount();
            this.amountDefaultInBaseUnitInput.value = this.getDefaultAmount();
            this.amountInBaseUnitInput.value = this.getDefaultAmount();
            this.leadSalesUnitSelect.value = this.currentLeadSalesUnit.id_product_measurement_sales_unit;
            this.measurementUnitInput.value = this.currentSalesUnit.id_product_measurement_sales_unit;
        }
    };
    PackagingUnitQuantitySelector.prototype.initTranslations = function () {
        this.translations = JSON.parse(this.muTranslationsElement.innerHTML);
    };
    PackagingUnitQuantitySelector.prototype.initCurrentSalesUnit = function () {
        for (var key in this.salesUnits) {
            if (this.salesUnits.hasOwnProperty(key)) {
                if (this.salesUnits[key].is_default) {
                    this.currentSalesUnit = this.salesUnits[key];
                }
            }
        }
    };
    PackagingUnitQuantitySelector.prototype.mapEvents = function () {
        var _this = this;
        this.qtyInSalesUnitInput.addEventListener('input', function (event) { return _this.qtyInputChange(); });
        this.measurementUnitInput.addEventListener('change', function (event) { return _this.measurementUnitInputChange(event); });
        if (this.isAmountBlockEnabled) {
            this.amountInSalesUnitInput.addEventListener('input', function (event) { return _this.amountInputChange(); });
            this.leadSalesUnitSelect.addEventListener('change', function (event) { return _this.leadSalesUnitSelectChange(event); });
        }
    };
    PackagingUnitQuantitySelector.prototype.qtyInputChange = function (qtyInSalesUnits) {
        if (typeof qtyInSalesUnits === 'undefined') {
            qtyInSalesUnits = +this.qtyInSalesUnitInput.value;
        }
        this.muError = false;
        var qtyInBaseUnits = this.multiply(qtyInSalesUnits, +this.currentSalesUnit.conversion);
        if ((qtyInBaseUnits - this.getMinQuantity()) % this.getQuantityInterval() !== 0) {
            this.muError = true;
            this.hideNotifications();
            this.quantityBetweenElement.classList.remove('is-hidden');
        }
        else if (qtyInBaseUnits < this.getMinQuantity()) {
            this.muError = true;
            this.hideNotifications();
            this.quantityMinElement.classList.remove('is-hidden');
        }
        else if (this.getMaxQuantity() > 0 && qtyInBaseUnits > this.getMaxQuantity()) {
            this.muError = true;
            this.hideNotifications();
            this.quantityMaxElement.classList.remove('is-hidden');
        }
        if (this.muError || this.puError || this.isAddToCartDisabled) {
            this.addToCartButton.setAttribute("disabled", "disabled");
            this.askCustomerForCorrectInput(qtyInSalesUnits);
            return;
        }
        this.qtyInBaseUnitInput.value = qtyInBaseUnits.toString();
        if (this.amountInBaseUnitInput) {
            this.amountInputChange();
        }
        this.addToCartButton.removeAttribute("disabled");
        this.hideNotifications();
        return;
    };
    PackagingUnitQuantitySelector.prototype.hideNotifications = function () {
        this.muChoiceNotificationElement.classList.add('is-hidden');
        this.muBetweenNotificationElement.classList.add('is-hidden');
        this.muMinNotificationElement.classList.add('is-hidden');
        this.muMaxNotificationElement.classList.add('is-hidden');
    };
    PackagingUnitQuantitySelector.prototype.askCustomerForCorrectInput = function (qtyInSalesUnits) {
        var _this = this;
        if (this.muError) {
            var minChoice = this.getMinChoice(qtyInSalesUnits);
            var maxChoice = this.getMaxChoice(qtyInSalesUnits, minChoice);
            this.muChoiceListElement.innerHTML = '';
            this.muCurrentChoiceElement.innerHTML = '';
            this.muCurrentChoiceElement.textContent = this.round(qtyInSalesUnits, 4) + " " + this.getUnitName(this.currentSalesUnit.product_measurement_unit.code);
            var choiceElements = [];
            choiceElements.push(this.createChoiceElement(minChoice));
            if (maxChoice != minChoice) {
                choiceElements.push(this.createChoiceElement(maxChoice));
            }
            choiceElements.forEach(function (element) { return (element !== null) ? _this.muChoiceListElement.appendChild(element) : null; });
            this.muChoiceNotificationElement.classList.remove('is-hidden');
        }
    };
    PackagingUnitQuantitySelector.prototype.createChoiceElement = function (qtyInBaseUnits) {
        if (qtyInBaseUnits > 0) {
            var choiceElem = document.createElement('span');
            var qtyInSalesUnits = qtyInBaseUnits / this.currentSalesUnit.conversion;
            var measurementSalesUnitName = this.getUnitName(this.currentSalesUnit.product_measurement_unit.code);
            var measurementBaseUnitName = this.getUnitName(this.baseUnit.code);
            choiceElem.classList.add('link');
            choiceElem.setAttribute('data-base-unit-qty', qtyInBaseUnits.toString());
            choiceElem.setAttribute('data-sales-unit-qty', qtyInSalesUnits.toString());
            choiceElem.textContent = "(" + this.round(qtyInSalesUnits, 4).toString().toString() + " " + measurementSalesUnitName + ") = (" + qtyInBaseUnits + " " + measurementBaseUnitName + ")";
            choiceElem.onclick = function (event) {
                var element = event.srcElement;
                var qtyInBaseUnits = parseFloat(element.dataset.baseUnitQty);
                var qtyInSalesUnits = parseFloat(element.dataset.salesUnitQty);
                this.muError = false;
                this.selectQty(qtyInBaseUnits, qtyInSalesUnits);
            }.bind(this);
            choiceElem.style.display = 'block';
            return choiceElem;
        }
        return null;
    };
    PackagingUnitQuantitySelector.prototype.selectQty = function (qtyInBaseUnits, qtyInSalesUnits) {
        this.qtyInBaseUnitInput.value = qtyInBaseUnits.toString();
        this.qtyInSalesUnitInput.value = this.round(qtyInSalesUnits, 4).toString().toString();
        if (!this.puError && !this.isAddToCartDisabled) {
            this.addToCartButton.removeAttribute("disabled");
        }
        this.muChoiceNotificationElement.classList.add('is-hidden');
    };
    PackagingUnitQuantitySelector.prototype.getMinChoice = function (qtyInSalesUnits) {
        var qtyInBaseUnits = this.floor(this.multiply(qtyInSalesUnits, this.currentSalesUnit.conversion));
        if (qtyInBaseUnits < this.getMinQuantity()) {
            return this.getMinQuantity();
        }
        if ((qtyInBaseUnits - this.getMinQuantity()) % this.getQuantityInterval() !== 0 || (this.getMaxQuantity() > 0 && qtyInBaseUnits > this.getMaxQuantity())) {
            return this.getMinChoice((qtyInBaseUnits - 1) / this.currentSalesUnit.conversion);
        }
        return qtyInBaseUnits;
    };
    PackagingUnitQuantitySelector.prototype.getMaxChoice = function (qtyInSalesUnits, minChoice) {
        var qtyInBaseUnits = this.ceil(this.multiply(qtyInSalesUnits, this.currentSalesUnit.conversion));
        if (this.getMaxQuantity() > 0 && qtyInBaseUnits > this.getMaxQuantity()) {
            qtyInBaseUnits = this.getMaxQuantity();
            if ((qtyInBaseUnits - this.getMinQuantity()) % this.getQuantityInterval() !== 0) {
                qtyInBaseUnits = qtyInBaseUnits - ((qtyInBaseUnits - this.getMinQuantity()) % this.getQuantityInterval());
            }
            return qtyInBaseUnits;
        }
        if ((qtyInBaseUnits - this.getMinQuantity()) % this.getQuantityInterval() !== 0 || qtyInBaseUnits <= minChoice) {
            return this.getMaxChoice((qtyInBaseUnits + 1) / this.currentSalesUnit.conversion, minChoice);
        }
        return qtyInBaseUnits;
    };
    PackagingUnitQuantitySelector.prototype.floor = function (value) {
        if (Math.floor(value) > 0) {
            return Math.floor(value);
        }
        return Math.ceil(value);
    };
    PackagingUnitQuantitySelector.prototype.ceil = function (value) {
        return Math.ceil(value);
    };
    PackagingUnitQuantitySelector.prototype.round = function (value, decimals) {
        return Number(Math.round(parseFloat(value + 'e' + decimals)) + 'e-' + decimals);
    };
    PackagingUnitQuantitySelector.prototype.multiply = function (a, b) {
        var result = ((a * 10) * (b * 10)) / 100;
        return Math.floor(result * 1000) / 1000;
    };
    PackagingUnitQuantitySelector.prototype.getMinQuantity = function () {
        if (typeof this.productQuantityStorage !== 'undefined'
            && this.productQuantityStorage.hasOwnProperty('quantity_min')) {
            return this.productQuantityStorage.quantity_min;
        }
        return 1;
    };
    PackagingUnitQuantitySelector.prototype.getMaxQuantity = function () {
        if (typeof this.productQuantityStorage !== 'undefined'
            && this.productQuantityStorage.hasOwnProperty('quantity_max')
            && this.productQuantityStorage.quantity_max !== null) {
            return this.productQuantityStorage.quantity_max;
        }
        return 0;
    };
    PackagingUnitQuantitySelector.prototype.getQuantityInterval = function () {
        if (typeof this.productQuantityStorage !== 'undefined'
            && this.productQuantityStorage.hasOwnProperty('quantity_interval')) {
            return this.productQuantityStorage.quantity_interval;
        }
        return 1;
    };
    PackagingUnitQuantitySelector.prototype.measurementUnitInputChange = function (event) {
        var salesUnitId = parseInt(event.srcElement.value);
        var salesUnit = this.getSalesUnitById(salesUnitId);
        var qtyInSalesUnits = +this.qtyInSalesUnitInput.value;
        var qtyInBaseUnits = this.multiply(qtyInSalesUnits, this.currentSalesUnit.conversion);
        qtyInSalesUnits = qtyInBaseUnits / salesUnit.conversion;
        this.currentSalesUnit = salesUnit;
        this.qtyInSalesUnitInput.value = this.round(qtyInSalesUnits, 4).toString();
        this.qtyInputChange(qtyInSalesUnits);
    };
    PackagingUnitQuantitySelector.prototype.getSalesUnitById = function (salesUnitId) {
        for (var key in this.salesUnits) {
            if (this.salesUnits.hasOwnProperty(key)) {
                if (salesUnitId == this.salesUnits[key].id_product_measurement_sales_unit) {
                    return this.salesUnits[key];
                }
            }
        }
    };
    PackagingUnitQuantitySelector.prototype.getUnitName = function (key) {
        if (this.translations.hasOwnProperty(key)) {
            return this.translations[key];
        }
        return key;
    };
    PackagingUnitQuantitySelector.prototype.amountInputChange = function (amountInSalesUnitInput) {
        if (typeof amountInSalesUnitInput === 'undefined') {
            amountInSalesUnitInput = +this.amountInSalesUnitInput.value;
        }
        this.productPackagingNewPriceBlock.classList.add('is-hidden');
        this.puError = false;
        var amountInBaseUnits = this.multiply(amountInSalesUnitInput, +this.currentLeadSalesUnit.conversion);
        amountInBaseUnits = Math.round(amountInBaseUnits);
        if ((amountInBaseUnits - this.getMinAmount()) % this.getAmountInterval() !== 0) {
            this.puError = true;
            this.puIntervalNotificationElement.classList.remove('is-hidden');
        }
        else if (amountInBaseUnits < this.getMinAmount()) {
            this.puError = true;
            this.puMinNotificationElement.classList.remove('is-hidden');
        }
        else if (this.getMaxAmount() > 0 && amountInBaseUnits > this.getMaxAmount()) {
            this.puError = true;
            this.puMaxNotificationElement.classList.remove('is-hidden');
        }
        if (this.puError || this.muError || this.isAddToCartDisabled) {
            this.askCustomerForCorrectAmountInput(amountInSalesUnitInput);
            this.addToCartButton.setAttribute("disabled", "disabled");
            return;
        }
        var quantity = +this.qtyInBaseUnitInput.value;
        var totalAmount = amountInBaseUnits * quantity;
        this.amountInBaseUnitInput.value = totalAmount.toString();
        this.addToCartButton.removeAttribute("disabled");
        this.hidePackagingUnitRestrictionNotifications();
        if (this.amountDefaultInBaseUnitInput.value != amountInBaseUnits) {
            var newPrice = (amountInBaseUnits / this.amountDefaultInBaseUnitInput.value) * this.itemBasePriceInput.value;
            newPrice = newPrice / 100;
            this.productPackagingNewPriceValueBlock.innerHTML = this.itemMoneySymbolInput.value + newPrice.toFixed(2);
            this.productPackagingNewPriceBlock.classList.remove('is-hidden');
        }
        return;
    };
    PackagingUnitQuantitySelector.prototype.askCustomerForCorrectAmountInput = function (amountInSalesUnits) {
        var _this = this;
        if (this.puError) {
            var minChoice = this.getMinAmountChoice(amountInSalesUnits);
            var maxChoice = this.getMaxAmountChoice(amountInSalesUnits, minChoice);
            this.puChoiceListElement.innerHTML = '';
            this.puCurrentChoiceElement.innerHTML = '';
            this.puCurrentChoiceElement.textContent = this.round(amountInSalesUnits, 4) + " " + this.getUnitName(this.currentLeadSalesUnit.product_measurement_unit.code);
            var choiceElements = [];
            if (minChoice) {
                choiceElements.push(this.createAmountChoiceElement(minChoice));
            }
            if (maxChoice != minChoice) {
                choiceElements.push(this.createAmountChoiceElement(maxChoice));
            }
            choiceElements.forEach(function (element) { return (element !== null) ? _this.puChoiceListElement.appendChild(element) : null; });
            this.puChoiceElement.classList.remove('is-hidden');
        }
    };
    PackagingUnitQuantitySelector.prototype.initCurrentLeadSalesUnit = function () {
        for (var key in this.leadSalesUnits) {
            if (this.leadSalesUnits.hasOwnProperty(key)) {
                if (this.leadSalesUnits[key].is_default) {
                    this.currentLeadSalesUnit = this.leadSalesUnits[key];
                }
            }
        }
    };
    PackagingUnitQuantitySelector.prototype.createAmountChoiceElement = function (amountInBaseUnits) {
        if (amountInBaseUnits > 0) {
            var choiceElem = document.createElement('span');
            var amountInSalesUnits = amountInBaseUnits / this.currentLeadSalesUnit.conversion;
            var measurementSalesUnitName = this.getUnitName(this.currentLeadSalesUnit.product_measurement_unit.code);
            var measurementBaseUnitName = this.getUnitName(this.baseUnit.code);
            choiceElem.classList.add('link');
            choiceElem.setAttribute('data-base-unit-amount', amountInBaseUnits.toString());
            choiceElem.setAttribute('data-sales-unit-amount', amountInSalesUnits.toString());
            choiceElem.textContent = "(" + this.round(amountInSalesUnits, 4).toString().toString() + " " + measurementSalesUnitName + ") = (" + amountInBaseUnits + " " + measurementBaseUnitName + ")";
            choiceElem.onclick = function (event) {
                var element = event.srcElement;
                var amountInBaseUnits = parseFloat(element.dataset.baseUnitAmount);
                var amountInSalesUnits = parseFloat(element.dataset.salesUnitAmount);
                this.puError = false;
                this.selectAmount(amountInBaseUnits, amountInSalesUnits);
            }.bind(this);
            choiceElem.style.display = 'block';
            return choiceElem;
        }
        return null;
    };
    PackagingUnitQuantitySelector.prototype.selectAmount = function (amountInBaseUnits, amountInSalesUnits) {
        this.amountInSalesUnitInput.value = amountInSalesUnits.toString();
        this.amountInBaseUnitInput.value = this.round(amountInBaseUnits, 4).toString().toString();
        if (!this.muError && !this.isAddToCartDisabled) {
            this.addToCartButton.removeAttribute("disabled");
        }
        this.puChoiceElement.classList.add('is-hidden');
        this.amountInputChange();
    };
    PackagingUnitQuantitySelector.prototype.leadSalesUnitSelectChange = function (event) {
        var salesUnitId = parseInt(event.srcElement.value);
        var salesUnit = this.getLeadSalesUnitById(salesUnitId);
        var amountInSalesUnits = +this.amountInSalesUnitInput.value;
        var amountInBaseUnits = this.multiply(amountInSalesUnits, this.currentLeadSalesUnit.conversion);
        amountInSalesUnits = amountInBaseUnits / salesUnit.conversion;
        this.currentLeadSalesUnit = salesUnit;
        this.amountInSalesUnitInput.value = this.round(amountInSalesUnits, 4).toString();
        this.amountInputChange(amountInSalesUnits);
    };
    PackagingUnitQuantitySelector.prototype.hidePackagingUnitRestrictionNotifications = function () {
        this.puChoiceElement.classList.add('is-hidden');
        this.puMinNotificationElement.classList.add('is-hidden');
        this.puMaxNotificationElement.classList.add('is-hidden');
        this.puIntervalNotificationElement.classList.add('is-hidden');
    };
    PackagingUnitQuantitySelector.prototype.getLeadSalesUnitById = function (salesUnitId) {
        for (var key in this.leadSalesUnits) {
            if (this.leadSalesUnits.hasOwnProperty(key)) {
                if (salesUnitId == this.leadSalesUnits[key].id_product_measurement_sales_unit) {
                    return this.leadSalesUnits[key];
                }
            }
        }
    };
    PackagingUnitQuantitySelector.prototype.getMinAmount = function () {
        if (typeof this.productPackagingUnitStorage !== 'undefined'
            && this.productPackagingUnitStorage.hasOwnProperty('amount_min')
            && this.productPackagingUnitStorage.amount_min !== null) {
            return this.productPackagingUnitStorage.amount_min;
        }
        return 1;
    };
    PackagingUnitQuantitySelector.prototype.getMaxAmount = function () {
        if (typeof this.productPackagingUnitStorage !== 'undefined'
            && this.productPackagingUnitStorage.hasOwnProperty('amount_max')
            && this.productPackagingUnitStorage.amount_max !== null) {
            return this.productPackagingUnitStorage.amount_max;
        }
        return 0;
    };
    PackagingUnitQuantitySelector.prototype.getAmountInterval = function () {
        if (typeof this.productPackagingUnitStorage !== 'undefined'
            && this.productPackagingUnitStorage.hasOwnProperty('amount_interval')
            && this.productPackagingUnitStorage.amount_interval !== null) {
            return this.productPackagingUnitStorage.amount_interval;
        }
        return 1;
    };
    PackagingUnitQuantitySelector.prototype.getDefaultAmount = function () {
        if (typeof this.productPackagingUnitStorage !== 'undefined'
            && this.productPackagingUnitStorage.hasOwnProperty('default_amount')
            && this.productPackagingUnitStorage.default_amount !== null) {
            return this.productPackagingUnitStorage.default_amount;
        }
    };
    PackagingUnitQuantitySelector.prototype.getMinAmountChoice = function (amountInSalesUnits) {
        var amountInBaseUnits = this.floor(this.multiply(amountInSalesUnits, this.currentLeadSalesUnit.conversion));
        if (amountInBaseUnits < this.getMinAmount()) {
            return this.getMinAmount();
        }
        if (this.isAmountGreaterThanMaxAmount(amountInBaseUnits)) {
            return 0;
        }
        if (this.isAmountMultipleToInterval(amountInBaseUnits)) {
            return this.getMinAmountChoice((amountInBaseUnits - 1) / this.currentLeadSalesUnit.conversion);
        }
        return amountInBaseUnits;
    };
    PackagingUnitQuantitySelector.prototype.getMaxAmountChoice = function (amountInSalesUnits, minChoice) {
        var amountInBaseUnits = this.ceil(this.multiply(amountInSalesUnits, this.currentLeadSalesUnit.conversion));
        if (this.isAmountGreaterThanMaxAmount(amountInBaseUnits)) {
            amountInBaseUnits = this.getMaxAmount();
            if (this.isAmountMultipleToInterval(amountInBaseUnits)) {
                amountInBaseUnits = amountInBaseUnits - ((amountInBaseUnits - this.getMinAmount()) % this.getAmountInterval());
            }
            return amountInBaseUnits;
        }
        if (amountInBaseUnits <= minChoice) {
            return 0;
        }
        if (this.isAmountMultipleToInterval(amountInBaseUnits)) {
            return minChoice + this.getAmountInterval();
        }
        return amountInBaseUnits;
    };
    PackagingUnitQuantitySelector.prototype.isAmountGreaterThanMaxAmount = function (amountInBaseUnits) {
        return this.getMaxAmount() > 0 && amountInBaseUnits > this.getMaxAmount();
    };
    PackagingUnitQuantitySelector.prototype.isAmountMultipleToInterval = function (amountInBaseUnits) {
        return (amountInBaseUnits - this.getMinAmount()) % this.getAmountInterval() !== 0;
    };
    return PackagingUnitQuantitySelector;
}(ShopUi_models_component__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (PackagingUnitQuantitySelector);


/***/ }),

/***/ "./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/models/component.ts":
/*!***************************************************************************************************!*\
  !*** ./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/models/component.ts ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app/config */ "./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/app/config.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Component = (function (_super) {
    __extends(Component, _super);
    function Component() {
        var _this = _super.call(this) || this;
        _this.name = _this.tagName.toLowerCase();
        _this.jsName = "js-" + _this.name;
        document.addEventListener(Object(_app_config__WEBPACK_IMPORTED_MODULE_0__["get"])().events.ready, function () { return _this.readyCallback(); }, {
            capture: false,
            once: true
        });
        return _this;
    }
    return Component;
}(HTMLElement));
/* harmony default export */ __webpack_exports__["default"] = (Component);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi92ZW5kb3Ivc3ByeWtlci1zaG9wL3Byb2R1Y3QtcGFja2FnaW5nLXVuaXQtd2lkZ2V0L3NyYy9TcHJ5a2VyU2hvcC9ZdmVzL1Byb2R1Y3RQYWNrYWdpbmdVbml0V2lkZ2V0L1RoZW1lL2RlZmF1bHQvY29tcG9uZW50cy9tb2xlY3VsZXMvcGFja2FnaW5nLXVuaXQtcXVhbnRpdHktc2VsZWN0b3IvcGFja2FnaW5nLXVuaXQtcXVhbnRpdHktc2VsZWN0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vdmVuZG9yL3NwcnlrZXItc2hvcC9zaG9wLXVpL3NyYy9TcHJ5a2VyU2hvcC9ZdmVzL1Nob3BVaS9UaGVtZS9kZWZhdWx0L21vZGVscy9jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFnRDtBQUVoRDtJQUEyRCxpREFBUztJQUFwRTs7SUFrbkJBLENBQUM7SUEvakJhLHFEQUFhLEdBQXZCLFVBQXdCLEtBQWE7UUFDakMsSUFBSSxDQUFDLG1CQUFtQixHQUFxQixRQUFRLENBQUMsYUFBYSxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDNUYsSUFBSSxDQUFDLGtCQUFrQixHQUFxQixRQUFRLENBQUMsYUFBYSxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDMUYsSUFBSSxDQUFDLG9CQUFvQixHQUFzQixRQUFRLENBQUMsYUFBYSxDQUFDLDBCQUEwQixDQUFDLENBQUM7UUFDbEcsSUFBSSxDQUFDLGVBQWUsR0FBc0IsUUFBUSxDQUFDLGNBQWMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQ3hGLElBQUksQ0FBQyxtQkFBbUIsR0FBc0IsUUFBUSxDQUFDLGFBQWEsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO1FBQ3RHLElBQUksQ0FBQyxzQkFBc0IsR0FBcUIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUN2RixJQUFJLENBQUMsNEJBQTRCLEdBQXFCLFFBQVEsQ0FBQyxhQUFh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QUNwbkI2QztBQVU5QztJQUFnRCw2QkFBVztJQUl2RDtRQUFBLFlBQ0ksaUJBQU8sU0FRVjtRQVBHLEtBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN2QyxLQUFJLENBQUMsTUFBTSxHQUFHLFFBQU0sS0FBSSxDQUFDLElBQU0sQ0FBQztRQUVoQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsdURBQU0sRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsY0FBTSxZQUFJLENBQUMsYUFBYSxFQUFFLEVBQXBCLENBQW9CLEVBQUU7WUFDekUsT0FBTyxFQUFFLEtBQUs7WUFDZCxJQUFJLEVBQUUsSUFBSTtTQUNiLENBQUMsQ0FBQzs7SUFDUCxDQUFDO0lBR0wsZ0JBQUM7QUFBRCxDQUFDLENBaEIrQyxXQUFXLEdBZ0IxRCIsImZpbGUiOiIuL2pzL3l2ZXNfZGVmYXVsdC4xOS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb21wb25lbnQgZnJvbSAnU2hvcFVpL21vZGVscy9jb21wb25lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWNrYWdpbmdVbml0UXVhbnRpdHlTZWxlY3RvciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgcXR5SW5TYWxlc1VuaXRJbnB1dDogSFRNTElucHV0RWxlbWVudDtcbiAgICBxdHlJbkJhc2VVbml0SW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgbWVhc3VyZW1lbnRVbml0SW5wdXQ6IEhUTUxTZWxlY3RFbGVtZW50O1xuICAgIGFkZFRvQ2FydEJ1dHRvbjogSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gICAgbGVhZFNhbGVzVW5pdFNlbGVjdDogSFRNTFNlbGVjdEVsZW1lbnQ7XG5cbiAgICBiYXNlVW5pdDogYW55O1xuICAgIHNhbGVzVW5pdHM6IGFueTtcbiAgICBjdXJyZW50U2FsZXNVbml0OiBhbnk7XG4gICAgcHJvZHVjdFF1YW50aXR5U3RvcmFnZTogYW55O1xuICAgIGN1cnJlbnRWYWx1ZTogTnVtYmVyO1xuICAgIHRyYW5zbGF0aW9uczogYW55O1xuICAgIGxlYWRTYWxlc1VuaXRzOiBhbnk7XG4gICAgcHJvZHVjdFBhY2thZ2luZ1VuaXRTdG9yYWdlOiBhbnk7XG4gICAgYW1vdW50SW5TYWxlc1VuaXRJbnB1dDogYW55O1xuICAgIGFtb3VudERlZmF1bHRJbkJhc2VVbml0SW5wdXQ6IGFueTtcbiAgICBwYWNrYWdpbmdVbml0QW1vdW50SW5wdXQ6IGFueTtcbiAgICBpdGVtQmFzZVByaWNlSW5wdXQ6IGFueTtcbiAgICBpdGVtTW9uZXlTeW1ib2xJbnB1dDogYW55O1xuICAgIGFtb3VudEluQmFzZVVuaXRJbnB1dDogYW55O1xuICAgIGlzQW1vdW50QmxvY2tFbmFibGVkOiBib29sZWFuO1xuICAgIGlzQWRkVG9DYXJ0RGlzYWJsZWQ6IGJvb2xlYW47XG4gICAgY3VycmVudExlYWRTYWxlc1VuaXQ6IGFueTtcbiAgICBkZWZhdWx0QW1vdW50OiBhbnk7XG5cbiAgICBwcm9kdWN0UGFja2FnaW5nTmV3UHJpY2VCbG9jazogYW55O1xuICAgIHByb2R1Y3RQYWNrYWdpbmdOZXdQcmljZVZhbHVlQmxvY2s6IGFueTtcblxuICAgIHF1YW50aXR5QmV0d2VlbkVsZW1lbnQ6IEhUTUxEaXZFbGVtZW50O1xuICAgIHF1YW50aXR5TWluRWxlbWVudDogSFRNTERpdkVsZW1lbnQ7XG4gICAgcXVhbnRpdHlNYXhFbGVtZW50OiBIVE1MRGl2RWxlbWVudDtcblxuICAgIG11Q2hvaWNlTm90aWZpY2F0aW9uRWxlbWVudDogSFRNTERpdkVsZW1lbnQ7XG4gICAgbXVCZXR3ZWVuTm90aWZpY2F0aW9uRWxlbWVudDogSFRNTERpdkVsZW1lbnQ7XG4gICAgbXVNaW5Ob3RpZmljYXRpb25FbGVtZW50OiBIVE1MRGl2RWxlbWVudDtcbiAgICBtdU1heE5vdGlmaWNhdGlvbkVsZW1lbnQ6IEhUTUxEaXZFbGVtZW50O1xuICAgIG11VHJhbnNsYXRpb25zRWxlbWVudDogSFRNTFNjcmlwdEVsZW1lbnQ7XG4gICAgbXVDaG9pY2VMaXN0RWxlbWVudDogSFRNTFVMaXN0RWxlbWVudDtcbiAgICBtdUN1cnJlbnRDaG9pY2VFbGVtZW50OiBIVE1MU3BhbkVsZW1lbnQ7XG5cbiAgICBwdUNob2ljZUVsZW1lbnQ6IEhUTUxEaXZFbGVtZW50O1xuICAgIHB1TWluTm90aWZpY2F0aW9uRWxlbWVudDogSFRNTERpdkVsZW1lbnQ7XG4gICAgcHVNYXhOb3RpZmljYXRpb25FbGVtZW50OiBIVE1MRGl2RWxlbWVudDtcbiAgICBwdUludGVydmFsTm90aWZpY2F0aW9uRWxlbWVudDogSFRNTERpdkVsZW1lbnQ7XG4gICAgcHVDaG9pY2VMaXN0RWxlbWVudDogSFRNTFVMaXN0RWxlbWVudDtcbiAgICBwdUN1cnJlbnRDaG9pY2VFbGVtZW50OiBIVE1MU3BhbkVsZW1lbnQ7XG5cbiAgICBtdUVycm9yOiBib29sZWFuO1xuICAgIHB1RXJyb3I6IGJvb2xlYW47XG5cbiAgICBwcm90ZWN0ZWQgcmVhZHlDYWxsYmFjayhldmVudD86IEV2ZW50KTogdm9pZCB7XG4gICAgICAgIHRoaXMucXR5SW5TYWxlc1VuaXRJbnB1dCA9IDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzYWxlcy11bml0LXF1YW50aXR5Jyk7XG4gICAgICAgIHRoaXMucXR5SW5CYXNlVW5pdElucHV0ID0gPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Jhc2UtdW5pdC1xdWFudGl0eScpO1xuICAgICAgICB0aGlzLm1lYXN1cmVtZW50VW5pdElucHV0ID0gPEhUTUxTZWxlY3RFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3QtbWVhc3VyZW1lbnQtdW5pdCcpO1xuICAgICAgICB0aGlzLmFkZFRvQ2FydEJ1dHRvbiA9IDxIVE1MQnV0dG9uRWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXRvLWNhcnQtYnV0dG9uJyk7XG4gICAgICAgIHRoaXMubGVhZFNhbGVzVW5pdFNlbGVjdCA9IDxIVE1MU2VsZWN0RWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0LWxlYWQtbWVhc3VyZW1lbnQtdW5pdCcpO1xuICAgICAgICB0aGlzLmFtb3VudEluU2FsZXNVbml0SW5wdXQgPSA8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdXNlci1hbW91bnQnKTtcbiAgICAgICAgdGhpcy5hbW91bnREZWZhdWx0SW5CYXNlVW5pdElucHV0ID0gPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RlZmF1bHQtYW1vdW50Jyk7XG4gICAgICAgIHRoaXMuYW1vdW50SW5CYXNlVW5pdElucHV0ID0gPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Ftb3VudCcpO1xuICAgICAgICB0aGlzLnBhY2thZ2luZ1VuaXRBbW91bnRJbnB1dCA9IDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwYWNrYWdpbmctdW5pdC1hbW91bnQnKTtcbiAgICAgICAgdGhpcy5wcm9kdWN0UGFja2FnaW5nTmV3UHJpY2VCbG9jayA9IDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9kdWN0LXBhY2thZ2luZy1uZXctcHJpY2UtYmxvY2snKTtcbiAgICAgICAgdGhpcy5wcm9kdWN0UGFja2FnaW5nTmV3UHJpY2VWYWx1ZUJsb2NrID0gPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2R1Y3QtcGFja2FnaW5nLW5ldy1wcmljZS12YWx1ZS1ibG9jaycpO1xuICAgICAgICB0aGlzLml0ZW1CYXNlUHJpY2VJbnB1dCA9IDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpdGVtLWJhc2UtcHJpY2UnKTtcbiAgICAgICAgdGhpcy5pdGVtTW9uZXlTeW1ib2xJbnB1dCA9IDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpdGVtLW1vbmV5LXN5bWJvbCcpO1xuICAgICAgICB0aGlzLnF1YW50aXR5QmV0d2VlbkVsZW1lbnQgPSA8SFRNTERpdkVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3F1YW50aXR5LWJldHdlZW4tdW5pdHMnKTtcbiAgICAgICAgdGhpcy5xdWFudGl0eU1pbkVsZW1lbnQgPSA8SFRNTERpdkVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21pbmltdW0tcXVhbnRpdHknKTtcbiAgICAgICAgdGhpcy5xdWFudGl0eU1heEVsZW1lbnQgPSA8SFRNTERpdkVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21heGltdW0tcXVhbnRpdHknKTtcbiAgICAgICAgdGhpcy5tdUNob2ljZU5vdGlmaWNhdGlvbkVsZW1lbnQgPSA8SFRNTERpdkVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lYXN1cmVtZW50LXVuaXQtY2hvaWNlJyk7XG4gICAgICAgIHRoaXMubXVCZXR3ZWVuTm90aWZpY2F0aW9uRWxlbWVudCA9IDxIVE1MRGl2RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncXVhbnRpdHktYmV0d2Vlbi11bml0cycpO1xuICAgICAgICB0aGlzLm11TWluTm90aWZpY2F0aW9uRWxlbWVudCA9IDxIVE1MRGl2RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWluaW11bS1xdWFudGl0eScpO1xuICAgICAgICB0aGlzLm11TWF4Tm90aWZpY2F0aW9uRWxlbWVudCA9IDxIVE1MRGl2RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWF4aW11bS1xdWFudGl0eScpO1xuICAgICAgICB0aGlzLm11VHJhbnNsYXRpb25zRWxlbWVudCA9IDxIVE1MU2NyaXB0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVhc3VyZW1lbnQtdW5pdC10cmFuc2xhdGlvbicpO1xuICAgICAgICB0aGlzLm11Q2hvaWNlTGlzdEVsZW1lbnQgPSA8SFRNTFVMaXN0RWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVhc3VyZW1lbnQtdW5pdC1jaG9pY2VzIC5saXN0Jyk7XG4gICAgICAgIHRoaXMubXVDdXJyZW50Q2hvaWNlRWxlbWVudCA9IDxIVE1MU3BhbkVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lYXN1cmVtZW50LXVuaXQtY2hvaWNlICNjdXJyZW50LWNob2ljZScpO1xuICAgICAgICB0aGlzLnB1Q2hvaWNlRWxlbWVudCA9IDxIVE1MRGl2RWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFja2FnaW5nLXVuaXQtY2hvaWNlJyk7XG4gICAgICAgIHRoaXMucHVNaW5Ob3RpZmljYXRpb25FbGVtZW50ID0gPEhUTUxEaXZFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWNrYWdpbmctYW1vdW50LW1pbicpO1xuICAgICAgICB0aGlzLnB1TWF4Tm90aWZpY2F0aW9uRWxlbWVudCA9IDxIVE1MRGl2RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFja2FnaW5nLWFtb3VudC1tYXgnKTtcbiAgICAgICAgdGhpcy5wdUludGVydmFsTm90aWZpY2F0aW9uRWxlbWVudCA9IDxIVE1MRGl2RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFja2FnaW5nLWFtb3VudC1pbnRlcnZhbCcpO1xuICAgICAgICB0aGlzLnB1Q2hvaWNlTGlzdEVsZW1lbnQgPSA8SFRNTFVMaXN0RWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGFja2FnaW5nLXVuaXQtY2hvaWNlcyAubGlzdCcpO1xuICAgICAgICB0aGlzLnB1Q3VycmVudENob2ljZUVsZW1lbnQgPSA8SFRNTFNwYW5FbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWNrYWdpbmctdW5pdC1jaG9pY2UgI2Ftb3VudC1jdXJyZW50LWNob2ljZScpO1xuICAgICAgICB0aGlzLnB1RXJyb3IgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5tdUVycm9yID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5pbml0SnNvbigpO1xuICAgICAgICB0aGlzLmluaXRUcmFuc2xhdGlvbnMoKTtcbiAgICAgICAgdGhpcy5pbml0Q3VycmVudFNhbGVzVW5pdCgpO1xuICAgICAgICB0aGlzLmluaXRDdXJyZW50TGVhZFNhbGVzVW5pdCgpO1xuICAgICAgICB0aGlzLmluaXRGb3JtRGVmYXVsdFZhbHVlcygpO1xuICAgICAgICB0aGlzLm1hcEV2ZW50cygpO1xuICAgICAgICBpZih0aGlzLmFtb3VudEluQmFzZVVuaXRJbnB1dCkge1xuICAgICAgICAgICAgdGhpcy5hbW91bnRJbnB1dENoYW5nZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbml0SnNvbigpIHtcbiAgICAgICAgbGV0IGpzb25TY2hlbWFDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKHRoaXMubmFtZSArICdfX2pzb24nKVswXTtcbiAgICAgICAgaWYgKGpzb25TY2hlbWFDb250YWluZXIuaGFzQXR0cmlidXRlKCdqc29uJykpIHtcbiAgICAgICAgICAgIGxldCBqc29uU3RyaW5nID0ganNvblNjaGVtYUNvbnRhaW5lci5nZXRBdHRyaWJ1dGUoJ2pzb24nKTtcbiAgICAgICAgICAgIGxldCBqc29uRGF0YSA9IEpTT04ucGFyc2UoanNvblN0cmluZyk7XG5cbiAgICAgICAgICAgIGlmIChqc29uRGF0YS5oYXNPd25Qcm9wZXJ0eSgnYmFzZVVuaXQnKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYmFzZVVuaXQgPSBqc29uRGF0YS5iYXNlVW5pdDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGpzb25EYXRhLmhhc093blByb3BlcnR5KCdzYWxlc1VuaXRzJykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNhbGVzVW5pdHMgPSBqc29uRGF0YS5zYWxlc1VuaXRzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZihqc29uRGF0YS5oYXNPd25Qcm9wZXJ0eSgnbGVhZFNhbGVzVW5pdHMnKSkge1xuICAgICAgICAgICAgICAgIHRoaXMubGVhZFNhbGVzVW5pdHMgPSBqc29uRGF0YS5sZWFkU2FsZXNVbml0cztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGpzb25EYXRhLmhhc093blByb3BlcnR5KCdpc0Ftb3VudEJsb2NrRW5hYmxlZCcpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0Ftb3VudEJsb2NrRW5hYmxlZCA9IGpzb25EYXRhLmlzQW1vdW50QmxvY2tFbmFibGVkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoanNvbkRhdGEuaGFzT3duUHJvcGVydHkoJ2lzQWRkVG9DYXJ0RGlzYWJsZWQnKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNBZGRUb0NhcnREaXNhYmxlZCA9IGpzb25EYXRhLmlzQWRkVG9DYXJ0RGlzYWJsZWQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChqc29uRGF0YS5oYXNPd25Qcm9wZXJ0eSgncHJvZHVjdFBhY2thZ2luZ1VuaXRTdG9yYWdlJykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3RQYWNrYWdpbmdVbml0U3RvcmFnZSA9IGpzb25EYXRhLnByb2R1Y3RQYWNrYWdpbmdVbml0U3RvcmFnZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGpzb25EYXRhLmhhc093blByb3BlcnR5KCdwcm9kdWN0UXVhbnRpdHlTdG9yYWdlJykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3RRdWFudGl0eVN0b3JhZ2UgPSBqc29uRGF0YS5wcm9kdWN0UXVhbnRpdHlTdG9yYWdlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbml0Rm9ybURlZmF1bHRWYWx1ZXMoKSB7XG4gICAgICAgIGlmKHRoaXMuYW1vdW50SW5CYXNlVW5pdElucHV0KSB7XG4gICAgICAgICAgICB0aGlzLnF0eUluU2FsZXNVbml0SW5wdXQudmFsdWUgPSB0aGlzLmdldE1pblF1YW50aXR5KCk7XG4gICAgICAgICAgICB0aGlzLmFtb3VudEluU2FsZXNVbml0SW5wdXQudmFsdWUgPSB0aGlzLmdldERlZmF1bHRBbW91bnQoKTtcbiAgICAgICAgICAgIHRoaXMuYW1vdW50RGVmYXVsdEluQmFzZVVuaXRJbnB1dC52YWx1ZSA9IHRoaXMuZ2V0RGVmYXVsdEFtb3VudCgpO1xuICAgICAgICAgICAgdGhpcy5hbW91bnRJbkJhc2VVbml0SW5wdXQudmFsdWUgPSB0aGlzLmdldERlZmF1bHRBbW91bnQoKTtcbiAgICAgICAgICAgIHRoaXMubGVhZFNhbGVzVW5pdFNlbGVjdC52YWx1ZSA9IHRoaXMuY3VycmVudExlYWRTYWxlc1VuaXQuaWRfcHJvZHVjdF9tZWFzdXJlbWVudF9zYWxlc191bml0O1xuICAgICAgICAgICAgdGhpcy5tZWFzdXJlbWVudFVuaXRJbnB1dC52YWx1ZSA9IHRoaXMuY3VycmVudFNhbGVzVW5pdC5pZF9wcm9kdWN0X21lYXN1cmVtZW50X3NhbGVzX3VuaXQ7XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgaW5pdFRyYW5zbGF0aW9ucygpIHtcbiAgICAgICAgdGhpcy50cmFuc2xhdGlvbnMgPSBKU09OLnBhcnNlKHRoaXMubXVUcmFuc2xhdGlvbnNFbGVtZW50LmlubmVySFRNTClcbiAgICB9XG5cbiAgICBwcml2YXRlIGluaXRDdXJyZW50U2FsZXNVbml0KCkge1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5zYWxlc1VuaXRzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zYWxlc1VuaXRzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zYWxlc1VuaXRzW2tleV0uaXNfZGVmYXVsdCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTYWxlc1VuaXQgPSB0aGlzLnNhbGVzVW5pdHNba2V5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIG1hcEV2ZW50cygpIHtcbiAgICAgICAgdGhpcy5xdHlJblNhbGVzVW5pdElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGV2ZW50OiBFdmVudCkgPT4gdGhpcy5xdHlJbnB1dENoYW5nZSgpKTtcbiAgICAgICAgdGhpcy5tZWFzdXJlbWVudFVuaXRJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXZlbnQ6IEV2ZW50KSA9PiB0aGlzLm1lYXN1cmVtZW50VW5pdElucHV0Q2hhbmdlKGV2ZW50KSk7XG5cbiAgICAgICAgaWYodGhpcy5pc0Ftb3VudEJsb2NrRW5hYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5hbW91bnRJblNhbGVzVW5pdElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGV2ZW50OiBFdmVudCkgPT4gdGhpcy5hbW91bnRJbnB1dENoYW5nZSgpKTtcbiAgICAgICAgICAgIHRoaXMubGVhZFNhbGVzVW5pdFNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXZlbnQ6IEV2ZW50KSA9PiB0aGlzLmxlYWRTYWxlc1VuaXRTZWxlY3RDaGFuZ2UoZXZlbnQpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgcXR5SW5wdXRDaGFuZ2UocXR5SW5TYWxlc1VuaXRzPzogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0eXBlb2YgcXR5SW5TYWxlc1VuaXRzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcXR5SW5TYWxlc1VuaXRzID0gK3RoaXMucXR5SW5TYWxlc1VuaXRJbnB1dC52YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubXVFcnJvciA9IGZhbHNlO1xuICAgICAgICBsZXQgcXR5SW5CYXNlVW5pdHMgPSB0aGlzLm11bHRpcGx5KHF0eUluU2FsZXNVbml0cywgK3RoaXMuY3VycmVudFNhbGVzVW5pdC5jb252ZXJzaW9uKTtcblxuICAgICAgICBpZiAoKHF0eUluQmFzZVVuaXRzIC0gdGhpcy5nZXRNaW5RdWFudGl0eSgpKSAlIHRoaXMuZ2V0UXVhbnRpdHlJbnRlcnZhbCgpICE9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLm11RXJyb3IgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5oaWRlTm90aWZpY2F0aW9ucygpO1xuICAgICAgICAgICAgdGhpcy5xdWFudGl0eUJldHdlZW5FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWhpZGRlbicpO1xuICAgICAgICB9IGVsc2UgaWYgKHF0eUluQmFzZVVuaXRzIDwgdGhpcy5nZXRNaW5RdWFudGl0eSgpKSB7XG4gICAgICAgICAgICB0aGlzLm11RXJyb3IgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5oaWRlTm90aWZpY2F0aW9ucygpO1xuICAgICAgICAgICAgdGhpcy5xdWFudGl0eU1pbkVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaXMtaGlkZGVuJyk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5nZXRNYXhRdWFudGl0eSgpID4gMCAmJiBxdHlJbkJhc2VVbml0cyA+IHRoaXMuZ2V0TWF4UXVhbnRpdHkoKSkge1xuICAgICAgICAgICAgdGhpcy5tdUVycm9yID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuaGlkZU5vdGlmaWNhdGlvbnMoKTtcbiAgICAgICAgICAgIHRoaXMucXVhbnRpdHlNYXhFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWhpZGRlbicpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMubXVFcnJvciB8fCB0aGlzLnB1RXJyb3IgfHwgdGhpcy5pc0FkZFRvQ2FydERpc2FibGVkKSB7XG4gICAgICAgICAgICB0aGlzLmFkZFRvQ2FydEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcImRpc2FibGVkXCIpO1xuICAgICAgICAgICAgdGhpcy5hc2tDdXN0b21lckZvckNvcnJlY3RJbnB1dChxdHlJblNhbGVzVW5pdHMpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5xdHlJbkJhc2VVbml0SW5wdXQudmFsdWUgPSBxdHlJbkJhc2VVbml0cy50b1N0cmluZygpO1xuXG4gICAgICAgIGlmKHRoaXMuYW1vdW50SW5CYXNlVW5pdElucHV0KSB7XG4gICAgICAgICAgICB0aGlzLmFtb3VudElucHV0Q2hhbmdlKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmFkZFRvQ2FydEJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcbiAgICAgICAgdGhpcy5oaWRlTm90aWZpY2F0aW9ucygpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBwcml2YXRlIGhpZGVOb3RpZmljYXRpb25zKCkge1xuICAgICAgICB0aGlzLm11Q2hvaWNlTm90aWZpY2F0aW9uRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdpcy1oaWRkZW4nKTtcbiAgICAgICAgdGhpcy5tdUJldHdlZW5Ob3RpZmljYXRpb25FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2lzLWhpZGRlbicpO1xuICAgICAgICB0aGlzLm11TWluTm90aWZpY2F0aW9uRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdpcy1oaWRkZW4nKTtcbiAgICAgICAgdGhpcy5tdU1heE5vdGlmaWNhdGlvbkVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaXMtaGlkZGVuJyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc2tDdXN0b21lckZvckNvcnJlY3RJbnB1dChxdHlJblNhbGVzVW5pdHM6IG51bWJlcikge1xuXG4gICAgICAgIGlmKHRoaXMubXVFcnJvcikge1xuICAgICAgICAgICAgbGV0IG1pbkNob2ljZSA9IHRoaXMuZ2V0TWluQ2hvaWNlKHF0eUluU2FsZXNVbml0cyk7XG4gICAgICAgICAgICBsZXQgbWF4Q2hvaWNlID0gdGhpcy5nZXRNYXhDaG9pY2UocXR5SW5TYWxlc1VuaXRzLCBtaW5DaG9pY2UpO1xuXG4gICAgICAgICAgICB0aGlzLm11Q2hvaWNlTGlzdEVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICB0aGlzLm11Q3VycmVudENob2ljZUVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICB0aGlzLm11Q3VycmVudENob2ljZUVsZW1lbnQudGV4dENvbnRlbnQgPSBgJHt0aGlzLnJvdW5kKHF0eUluU2FsZXNVbml0cywgNCl9ICR7dGhpcy5nZXRVbml0TmFtZSh0aGlzLmN1cnJlbnRTYWxlc1VuaXQucHJvZHVjdF9tZWFzdXJlbWVudF91bml0LmNvZGUpfWA7XG5cbiAgICAgICAgICAgIGxldCBjaG9pY2VFbGVtZW50cyA9IFtdO1xuICAgICAgICAgICAgY2hvaWNlRWxlbWVudHMucHVzaCh0aGlzLmNyZWF0ZUNob2ljZUVsZW1lbnQobWluQ2hvaWNlKSk7XG5cbiAgICAgICAgICAgIGlmIChtYXhDaG9pY2UgIT0gbWluQ2hvaWNlKSB7XG4gICAgICAgICAgICAgICAgY2hvaWNlRWxlbWVudHMucHVzaCh0aGlzLmNyZWF0ZUNob2ljZUVsZW1lbnQobWF4Q2hvaWNlKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNob2ljZUVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IChlbGVtZW50ICE9PSBudWxsKSA/IHRoaXMubXVDaG9pY2VMaXN0RWxlbWVudC5hcHBlbmRDaGlsZChlbGVtZW50KSA6IG51bGwpO1xuXG4gICAgICAgICAgICB0aGlzLm11Q2hvaWNlTm90aWZpY2F0aW9uRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1oaWRkZW4nKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgY3JlYXRlQ2hvaWNlRWxlbWVudChxdHlJbkJhc2VVbml0czogbnVtYmVyKSB7XG4gICAgICAgIGlmIChxdHlJbkJhc2VVbml0cyA+IDApIHtcbiAgICAgICAgICAgIGxldCBjaG9pY2VFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgbGV0IHF0eUluU2FsZXNVbml0cyA9IHF0eUluQmFzZVVuaXRzIC8gdGhpcy5jdXJyZW50U2FsZXNVbml0LmNvbnZlcnNpb247XG4gICAgICAgICAgICBsZXQgbWVhc3VyZW1lbnRTYWxlc1VuaXROYW1lID0gdGhpcy5nZXRVbml0TmFtZSh0aGlzLmN1cnJlbnRTYWxlc1VuaXQucHJvZHVjdF9tZWFzdXJlbWVudF91bml0LmNvZGUpO1xuICAgICAgICAgICAgbGV0IG1lYXN1cmVtZW50QmFzZVVuaXROYW1lID0gdGhpcy5nZXRVbml0TmFtZSh0aGlzLmJhc2VVbml0LmNvZGUpO1xuXG4gICAgICAgICAgICBjaG9pY2VFbGVtLmNsYXNzTGlzdC5hZGQoJ2xpbmsnKTtcbiAgICAgICAgICAgIGNob2ljZUVsZW0uc2V0QXR0cmlidXRlKCdkYXRhLWJhc2UtdW5pdC1xdHknLCBxdHlJbkJhc2VVbml0cy50b1N0cmluZygpKTtcbiAgICAgICAgICAgIGNob2ljZUVsZW0uc2V0QXR0cmlidXRlKCdkYXRhLXNhbGVzLXVuaXQtcXR5JywgcXR5SW5TYWxlc1VuaXRzLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgY2hvaWNlRWxlbS50ZXh0Q29udGVudCA9IGAoJHt0aGlzLnJvdW5kKHF0eUluU2FsZXNVbml0cywgNCkudG9TdHJpbmcoKS50b1N0cmluZygpfSAke21lYXN1cmVtZW50U2FsZXNVbml0TmFtZX0pID0gKCR7cXR5SW5CYXNlVW5pdHN9ICR7bWVhc3VyZW1lbnRCYXNlVW5pdE5hbWV9KWA7XG4gICAgICAgICAgICBjaG9pY2VFbGVtLm9uY2xpY2sgPSBmdW5jdGlvbiAoZXZlbnQ6IEV2ZW50KSB7XG4gICAgICAgICAgICAgICAgbGV0IGVsZW1lbnQgPSBldmVudC5zcmNFbGVtZW50IGFzIEhUTUxTZWxlY3RFbGVtZW50O1xuICAgICAgICAgICAgICAgIGxldCBxdHlJbkJhc2VVbml0cyA9IHBhcnNlRmxvYXQoZWxlbWVudC5kYXRhc2V0LmJhc2VVbml0UXR5KTtcbiAgICAgICAgICAgICAgICBsZXQgcXR5SW5TYWxlc1VuaXRzID0gcGFyc2VGbG9hdChlbGVtZW50LmRhdGFzZXQuc2FsZXNVbml0UXR5KTtcbiAgICAgICAgICAgICAgICB0aGlzLm11RXJyb3IgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdFF0eShxdHlJbkJhc2VVbml0cywgcXR5SW5TYWxlc1VuaXRzKTtcbiAgICAgICAgICAgIH0uYmluZCh0aGlzKTtcblxuICAgICAgICAgICAgY2hvaWNlRWxlbS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblxuICAgICAgICAgICAgcmV0dXJuIGNob2ljZUVsZW07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNlbGVjdFF0eShxdHlJbkJhc2VVbml0czogbnVtYmVyLCBxdHlJblNhbGVzVW5pdHM6IG51bWJlcikge1xuICAgICAgICB0aGlzLnF0eUluQmFzZVVuaXRJbnB1dC52YWx1ZSA9IHF0eUluQmFzZVVuaXRzLnRvU3RyaW5nKCk7XG4gICAgICAgIHRoaXMucXR5SW5TYWxlc1VuaXRJbnB1dC52YWx1ZSA9IHRoaXMucm91bmQocXR5SW5TYWxlc1VuaXRzLCA0KS50b1N0cmluZygpLnRvU3RyaW5nKCk7XG4gICAgICAgIGlmICghdGhpcy5wdUVycm9yICYmICF0aGlzLmlzQWRkVG9DYXJ0RGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkVG9DYXJ0QnV0dG9uLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubXVDaG9pY2VOb3RpZmljYXRpb25FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2lzLWhpZGRlbicpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0TWluQ2hvaWNlKHF0eUluU2FsZXNVbml0czogbnVtYmVyKSB7XG4gICAgICAgIGxldCBxdHlJbkJhc2VVbml0cyA9IHRoaXMuZmxvb3IodGhpcy5tdWx0aXBseShxdHlJblNhbGVzVW5pdHMsIHRoaXMuY3VycmVudFNhbGVzVW5pdC5jb252ZXJzaW9uKSk7XG5cbiAgICAgICAgaWYgKHF0eUluQmFzZVVuaXRzIDwgdGhpcy5nZXRNaW5RdWFudGl0eSgpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRNaW5RdWFudGl0eSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKChxdHlJbkJhc2VVbml0cyAtIHRoaXMuZ2V0TWluUXVhbnRpdHkoKSkgJSB0aGlzLmdldFF1YW50aXR5SW50ZXJ2YWwoKSAhPT0gMCB8fCAodGhpcy5nZXRNYXhRdWFudGl0eSgpID4gMCAmJiBxdHlJbkJhc2VVbml0cyA+IHRoaXMuZ2V0TWF4UXVhbnRpdHkoKSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldE1pbkNob2ljZSgocXR5SW5CYXNlVW5pdHMgLSAxKSAvIHRoaXMuY3VycmVudFNhbGVzVW5pdC5jb252ZXJzaW9uKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHF0eUluQmFzZVVuaXRzO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0TWF4Q2hvaWNlKHF0eUluU2FsZXNVbml0czogbnVtYmVyLCBtaW5DaG9pY2U6IG51bWJlcikge1xuICAgICAgICBsZXQgcXR5SW5CYXNlVW5pdHMgPSB0aGlzLmNlaWwodGhpcy5tdWx0aXBseShxdHlJblNhbGVzVW5pdHMsIHRoaXMuY3VycmVudFNhbGVzVW5pdC5jb252ZXJzaW9uKSk7XG5cbiAgICAgICAgaWYgKHRoaXMuZ2V0TWF4UXVhbnRpdHkoKSA+IDAgJiYgcXR5SW5CYXNlVW5pdHMgPiB0aGlzLmdldE1heFF1YW50aXR5KCkpIHtcbiAgICAgICAgICAgIHF0eUluQmFzZVVuaXRzID0gdGhpcy5nZXRNYXhRdWFudGl0eSgpO1xuXG4gICAgICAgICAgICBpZiAoKHF0eUluQmFzZVVuaXRzIC0gdGhpcy5nZXRNaW5RdWFudGl0eSgpKSAlIHRoaXMuZ2V0UXVhbnRpdHlJbnRlcnZhbCgpICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgcXR5SW5CYXNlVW5pdHMgPSBxdHlJbkJhc2VVbml0cyAtICgocXR5SW5CYXNlVW5pdHMgLSB0aGlzLmdldE1pblF1YW50aXR5KCkpICUgdGhpcy5nZXRRdWFudGl0eUludGVydmFsKCkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcXR5SW5CYXNlVW5pdHM7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoKHF0eUluQmFzZVVuaXRzIC0gdGhpcy5nZXRNaW5RdWFudGl0eSgpKSAlIHRoaXMuZ2V0UXVhbnRpdHlJbnRlcnZhbCgpICE9PSAwIHx8IHF0eUluQmFzZVVuaXRzIDw9IG1pbkNob2ljZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0TWF4Q2hvaWNlKChxdHlJbkJhc2VVbml0cyArIDEpIC8gdGhpcy5jdXJyZW50U2FsZXNVbml0LmNvbnZlcnNpb24sIG1pbkNob2ljZSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBxdHlJbkJhc2VVbml0cztcbiAgICB9XG5cbiAgICBwcml2YXRlIGZsb29yKHZhbHVlOiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICBpZiAoTWF0aC5mbG9vcih2YWx1ZSkgPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcih2YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gTWF0aC5jZWlsKHZhbHVlKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNlaWwodmFsdWU6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBNYXRoLmNlaWwodmFsdWUpO1xuICAgIH1cblxuICAgIHByaXZhdGUgcm91bmQodmFsdWU6IG51bWJlciwgZGVjaW1hbHM6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBOdW1iZXIoTWF0aC5yb3VuZChwYXJzZUZsb2F0KHZhbHVlICsgJ2UnICsgZGVjaW1hbHMpKSArICdlLScgKyBkZWNpbWFscyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBtdWx0aXBseShhOiBudW1iZXIsIGI6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIGxldCByZXN1bHQgPSAoKGEgKiAxMCkgKiAoYiAqIDEwKSkgLyAxMDA7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKHJlc3VsdCAqIDEwMDApIC8gMTAwMDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldE1pblF1YW50aXR5KCkge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMucHJvZHVjdFF1YW50aXR5U3RvcmFnZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgICYmIHRoaXMucHJvZHVjdFF1YW50aXR5U3RvcmFnZS5oYXNPd25Qcm9wZXJ0eSgncXVhbnRpdHlfbWluJylcbiAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9kdWN0UXVhbnRpdHlTdG9yYWdlLnF1YW50aXR5X21pbjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAxO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0TWF4UXVhbnRpdHkoKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5wcm9kdWN0UXVhbnRpdHlTdG9yYWdlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgJiYgdGhpcy5wcm9kdWN0UXVhbnRpdHlTdG9yYWdlLmhhc093blByb3BlcnR5KCdxdWFudGl0eV9tYXgnKVxuICAgICAgICAgICAgJiYgdGhpcy5wcm9kdWN0UXVhbnRpdHlTdG9yYWdlLnF1YW50aXR5X21heCAhPT0gbnVsbFxuICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb2R1Y3RRdWFudGl0eVN0b3JhZ2UucXVhbnRpdHlfbWF4O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRRdWFudGl0eUludGVydmFsKCkge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMucHJvZHVjdFF1YW50aXR5U3RvcmFnZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgICYmIHRoaXMucHJvZHVjdFF1YW50aXR5U3RvcmFnZS5oYXNPd25Qcm9wZXJ0eSgncXVhbnRpdHlfaW50ZXJ2YWwnKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb2R1Y3RRdWFudGl0eVN0b3JhZ2UucXVhbnRpdHlfaW50ZXJ2YWw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gMTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG1lYXN1cmVtZW50VW5pdElucHV0Q2hhbmdlKGV2ZW50OiBFdmVudCkge1xuICAgICAgICBsZXQgc2FsZXNVbml0SWQgPSBwYXJzZUludCgoZXZlbnQuc3JjRWxlbWVudCBhcyBIVE1MU2VsZWN0RWxlbWVudCkudmFsdWUpO1xuICAgICAgICBsZXQgc2FsZXNVbml0ID0gdGhpcy5nZXRTYWxlc1VuaXRCeUlkKHNhbGVzVW5pdElkKTtcbiAgICAgICAgbGV0IHF0eUluU2FsZXNVbml0cyA9ICt0aGlzLnF0eUluU2FsZXNVbml0SW5wdXQudmFsdWU7XG4gICAgICAgIGxldCBxdHlJbkJhc2VVbml0cyA9IHRoaXMubXVsdGlwbHkocXR5SW5TYWxlc1VuaXRzLCB0aGlzLmN1cnJlbnRTYWxlc1VuaXQuY29udmVyc2lvbik7XG4gICAgICAgIHF0eUluU2FsZXNVbml0cyA9IHF0eUluQmFzZVVuaXRzIC8gc2FsZXNVbml0LmNvbnZlcnNpb247XG4gICAgICAgIHRoaXMuY3VycmVudFNhbGVzVW5pdCA9IHNhbGVzVW5pdDtcbiAgICAgICAgdGhpcy5xdHlJblNhbGVzVW5pdElucHV0LnZhbHVlID0gdGhpcy5yb3VuZChxdHlJblNhbGVzVW5pdHMsIDQpLnRvU3RyaW5nKCk7XG4gICAgICAgIHRoaXMucXR5SW5wdXRDaGFuZ2UocXR5SW5TYWxlc1VuaXRzKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldFNhbGVzVW5pdEJ5SWQoc2FsZXNVbml0SWQ6IG51bWJlcikge1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5zYWxlc1VuaXRzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zYWxlc1VuaXRzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2FsZXNVbml0SWQgPT0gdGhpcy5zYWxlc1VuaXRzW2tleV0uaWRfcHJvZHVjdF9tZWFzdXJlbWVudF9zYWxlc191bml0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNhbGVzVW5pdHNba2V5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGdldFVuaXROYW1lKGtleSkge1xuICAgICAgICBpZiAodGhpcy50cmFuc2xhdGlvbnMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNsYXRpb25zW2tleV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ga2V5O1xuICAgIH1cblxuICAgIHByaXZhdGUgYW1vdW50SW5wdXRDaGFuZ2UoYW1vdW50SW5TYWxlc1VuaXRJbnB1dD86IG51bWJlcikge1xuICAgICAgICBpZiAodHlwZW9mIGFtb3VudEluU2FsZXNVbml0SW5wdXQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBhbW91bnRJblNhbGVzVW5pdElucHV0ID0gK3RoaXMuYW1vdW50SW5TYWxlc1VuaXRJbnB1dC52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByb2R1Y3RQYWNrYWdpbmdOZXdQcmljZUJsb2NrLmNsYXNzTGlzdC5hZGQoJ2lzLWhpZGRlbicpO1xuICAgICAgICB0aGlzLnB1RXJyb3IgPSBmYWxzZTtcbiAgICAgICAgbGV0IGFtb3VudEluQmFzZVVuaXRzID0gdGhpcy5tdWx0aXBseShhbW91bnRJblNhbGVzVW5pdElucHV0LCArdGhpcy5jdXJyZW50TGVhZFNhbGVzVW5pdC5jb252ZXJzaW9uKTtcbiAgICAgICAgYW1vdW50SW5CYXNlVW5pdHMgPSBNYXRoLnJvdW5kKGFtb3VudEluQmFzZVVuaXRzKTtcblxuICAgICAgICBpZiAoKGFtb3VudEluQmFzZVVuaXRzIC0gdGhpcy5nZXRNaW5BbW91bnQoKSkgJSB0aGlzLmdldEFtb3VudEludGVydmFsKCkgIT09IDApIHtcbiAgICAgICAgICAgIHRoaXMucHVFcnJvciA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnB1SW50ZXJ2YWxOb3RpZmljYXRpb25FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWhpZGRlbicpO1xuICAgICAgICB9IGVsc2UgaWYgKGFtb3VudEluQmFzZVVuaXRzIDwgdGhpcy5nZXRNaW5BbW91bnQoKSkge1xuICAgICAgICAgICAgdGhpcy5wdUVycm9yID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMucHVNaW5Ob3RpZmljYXRpb25FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWhpZGRlbicpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZ2V0TWF4QW1vdW50KCkgPiAwICYmIGFtb3VudEluQmFzZVVuaXRzID4gdGhpcy5nZXRNYXhBbW91bnQoKSkge1xuICAgICAgICAgICAgdGhpcy5wdUVycm9yID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMucHVNYXhOb3RpZmljYXRpb25FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWhpZGRlbicpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucHVFcnJvciB8fCB0aGlzLm11RXJyb3IgfHwgdGhpcy5pc0FkZFRvQ2FydERpc2FibGVkKSB7XG4gICAgICAgICAgICB0aGlzLmFza0N1c3RvbWVyRm9yQ29ycmVjdEFtb3VudElucHV0KGFtb3VudEluU2FsZXNVbml0SW5wdXQpO1xuICAgICAgICAgICAgdGhpcy5hZGRUb0NhcnRCdXR0b24uc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJkaXNhYmxlZFwiKTtcblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHF1YW50aXR5ID0gK3RoaXMucXR5SW5CYXNlVW5pdElucHV0LnZhbHVlO1xuICAgICAgICBsZXQgdG90YWxBbW91bnQgPSBhbW91bnRJbkJhc2VVbml0cyAqIHF1YW50aXR5O1xuXG4gICAgICAgIHRoaXMuYW1vdW50SW5CYXNlVW5pdElucHV0LnZhbHVlID0gdG90YWxBbW91bnQudG9TdHJpbmcoKTtcbiAgICAgICAgdGhpcy5hZGRUb0NhcnRCdXR0b24ucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XG4gICAgICAgIHRoaXMuaGlkZVBhY2thZ2luZ1VuaXRSZXN0cmljdGlvbk5vdGlmaWNhdGlvbnMoKTtcblxuICAgICAgICBpZiAodGhpcy5hbW91bnREZWZhdWx0SW5CYXNlVW5pdElucHV0LnZhbHVlICE9IGFtb3VudEluQmFzZVVuaXRzKSB7XG4gICAgICAgICAgICBsZXQgbmV3UHJpY2UgPSAoYW1vdW50SW5CYXNlVW5pdHMgLyB0aGlzLmFtb3VudERlZmF1bHRJbkJhc2VVbml0SW5wdXQudmFsdWUpICogdGhpcy5pdGVtQmFzZVByaWNlSW5wdXQudmFsdWU7XG4gICAgICAgICAgICBuZXdQcmljZSA9IG5ld1ByaWNlIC8gMTAwO1xuICAgICAgICAgICAgdGhpcy5wcm9kdWN0UGFja2FnaW5nTmV3UHJpY2VWYWx1ZUJsb2NrLmlubmVySFRNTCA9IHRoaXMuaXRlbU1vbmV5U3ltYm9sSW5wdXQudmFsdWUgKyBuZXdQcmljZS50b0ZpeGVkKDIpO1xuXG4gICAgICAgICAgICB0aGlzLnByb2R1Y3RQYWNrYWdpbmdOZXdQcmljZUJsb2NrLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWhpZGRlbicpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXNrQ3VzdG9tZXJGb3JDb3JyZWN0QW1vdW50SW5wdXQoYW1vdW50SW5TYWxlc1VuaXRzKSB7XG5cbiAgICAgICAgaWYodGhpcy5wdUVycm9yKSB7XG4gICAgICAgICAgICBsZXQgbWluQ2hvaWNlID0gdGhpcy5nZXRNaW5BbW91bnRDaG9pY2UoYW1vdW50SW5TYWxlc1VuaXRzKTtcbiAgICAgICAgICAgIGxldCBtYXhDaG9pY2UgPSB0aGlzLmdldE1heEFtb3VudENob2ljZShhbW91bnRJblNhbGVzVW5pdHMsIG1pbkNob2ljZSk7XG5cbiAgICAgICAgICAgIHRoaXMucHVDaG9pY2VMaXN0RWxlbWVudC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgIHRoaXMucHVDdXJyZW50Q2hvaWNlRWxlbWVudC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgIHRoaXMucHVDdXJyZW50Q2hvaWNlRWxlbWVudC50ZXh0Q29udGVudCA9IGAke3RoaXMucm91bmQoYW1vdW50SW5TYWxlc1VuaXRzLCA0KX0gJHt0aGlzLmdldFVuaXROYW1lKHRoaXMuY3VycmVudExlYWRTYWxlc1VuaXQucHJvZHVjdF9tZWFzdXJlbWVudF91bml0LmNvZGUpfWA7XG5cbiAgICAgICAgICAgIGxldCBjaG9pY2VFbGVtZW50cyA9IFtdO1xuXG4gICAgICAgICAgICBpZiAobWluQ2hvaWNlKSB7XG4gICAgICAgICAgICAgICAgY2hvaWNlRWxlbWVudHMucHVzaCh0aGlzLmNyZWF0ZUFtb3VudENob2ljZUVsZW1lbnQobWluQ2hvaWNlKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChtYXhDaG9pY2UgIT0gbWluQ2hvaWNlKSB7XG4gICAgICAgICAgICAgICAgY2hvaWNlRWxlbWVudHMucHVzaCh0aGlzLmNyZWF0ZUFtb3VudENob2ljZUVsZW1lbnQobWF4Q2hvaWNlKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNob2ljZUVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IChlbGVtZW50ICE9PSBudWxsKSA/IHRoaXMucHVDaG9pY2VMaXN0RWxlbWVudC5hcHBlbmRDaGlsZChlbGVtZW50KSA6IG51bGwpO1xuXG4gICAgICAgICAgICB0aGlzLnB1Q2hvaWNlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1oaWRkZW4nKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgaW5pdEN1cnJlbnRMZWFkU2FsZXNVbml0KCkge1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5sZWFkU2FsZXNVbml0cykge1xuICAgICAgICAgICAgaWYgKHRoaXMubGVhZFNhbGVzVW5pdHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxlYWRTYWxlc1VuaXRzW2tleV0uaXNfZGVmYXVsdCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRMZWFkU2FsZXNVbml0ID0gdGhpcy5sZWFkU2FsZXNVbml0c1trZXldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgY3JlYXRlQW1vdW50Q2hvaWNlRWxlbWVudChhbW91bnRJbkJhc2VVbml0czogbnVtYmVyKSB7XG4gICAgICAgIGlmIChhbW91bnRJbkJhc2VVbml0cyA+IDApIHtcbiAgICAgICAgICAgIGxldCBjaG9pY2VFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgbGV0IGFtb3VudEluU2FsZXNVbml0cyA9IGFtb3VudEluQmFzZVVuaXRzIC8gdGhpcy5jdXJyZW50TGVhZFNhbGVzVW5pdC5jb252ZXJzaW9uO1xuICAgICAgICAgICAgbGV0IG1lYXN1cmVtZW50U2FsZXNVbml0TmFtZSA9IHRoaXMuZ2V0VW5pdE5hbWUodGhpcy5jdXJyZW50TGVhZFNhbGVzVW5pdC5wcm9kdWN0X21lYXN1cmVtZW50X3VuaXQuY29kZSk7XG4gICAgICAgICAgICBsZXQgbWVhc3VyZW1lbnRCYXNlVW5pdE5hbWUgPSB0aGlzLmdldFVuaXROYW1lKHRoaXMuYmFzZVVuaXQuY29kZSk7XG5cbiAgICAgICAgICAgIGNob2ljZUVsZW0uY2xhc3NMaXN0LmFkZCgnbGluaycpO1xuICAgICAgICAgICAgY2hvaWNlRWxlbS5zZXRBdHRyaWJ1dGUoJ2RhdGEtYmFzZS11bml0LWFtb3VudCcsIGFtb3VudEluQmFzZVVuaXRzLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgY2hvaWNlRWxlbS5zZXRBdHRyaWJ1dGUoJ2RhdGEtc2FsZXMtdW5pdC1hbW91bnQnLCBhbW91bnRJblNhbGVzVW5pdHMudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICBjaG9pY2VFbGVtLnRleHRDb250ZW50ID0gYCgke3RoaXMucm91bmQoYW1vdW50SW5TYWxlc1VuaXRzLCA0KS50b1N0cmluZygpLnRvU3RyaW5nKCl9ICR7bWVhc3VyZW1lbnRTYWxlc1VuaXROYW1lfSkgPSAoJHthbW91bnRJbkJhc2VVbml0c30gJHttZWFzdXJlbWVudEJhc2VVbml0TmFtZX0pYDtcbiAgICAgICAgICAgIGNob2ljZUVsZW0ub25jbGljayA9IGZ1bmN0aW9uIChldmVudDogRXZlbnQpIHtcbiAgICAgICAgICAgICAgICBsZXQgZWxlbWVudCA9IGV2ZW50LnNyY0VsZW1lbnQgYXMgSFRNTFNlbGVjdEVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgbGV0IGFtb3VudEluQmFzZVVuaXRzID0gcGFyc2VGbG9hdChlbGVtZW50LmRhdGFzZXQuYmFzZVVuaXRBbW91bnQpO1xuICAgICAgICAgICAgICAgIGxldCBhbW91bnRJblNhbGVzVW5pdHMgPSBwYXJzZUZsb2F0KGVsZW1lbnQuZGF0YXNldC5zYWxlc1VuaXRBbW91bnQpO1xuICAgICAgICAgICAgICAgIHRoaXMucHVFcnJvciA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0QW1vdW50KGFtb3VudEluQmFzZVVuaXRzLCBhbW91bnRJblNhbGVzVW5pdHMpO1xuICAgICAgICAgICAgfS5iaW5kKHRoaXMpO1xuXG4gICAgICAgICAgICBjaG9pY2VFbGVtLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXG4gICAgICAgICAgICByZXR1cm4gY2hvaWNlRWxlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2VsZWN0QW1vdW50KGFtb3VudEluQmFzZVVuaXRzOiBudW1iZXIsIGFtb3VudEluU2FsZXNVbml0czogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuYW1vdW50SW5TYWxlc1VuaXRJbnB1dC52YWx1ZSA9IGFtb3VudEluU2FsZXNVbml0cy50b1N0cmluZygpO1xuICAgICAgICB0aGlzLmFtb3VudEluQmFzZVVuaXRJbnB1dC52YWx1ZSA9IHRoaXMucm91bmQoYW1vdW50SW5CYXNlVW5pdHMsIDQpLnRvU3RyaW5nKCkudG9TdHJpbmcoKTtcbiAgICAgICAgaWYgKCF0aGlzLm11RXJyb3IgJiYgIXRoaXMuaXNBZGRUb0NhcnREaXNhYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5hZGRUb0NhcnRCdXR0b24ucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wdUNob2ljZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaXMtaGlkZGVuJyk7XG4gICAgICAgIHRoaXMuYW1vdW50SW5wdXRDaGFuZ2UoKTtcbiAgICB9XG5cblxuICAgIHByaXZhdGUgbGVhZFNhbGVzVW5pdFNlbGVjdENoYW5nZShldmVudDogRXZlbnQpIHtcbiAgICAgICAgbGV0IHNhbGVzVW5pdElkID0gcGFyc2VJbnQoKGV2ZW50LnNyY0VsZW1lbnQgYXMgSFRNTFNlbGVjdEVsZW1lbnQpLnZhbHVlKTtcbiAgICAgICAgbGV0IHNhbGVzVW5pdCA9IHRoaXMuZ2V0TGVhZFNhbGVzVW5pdEJ5SWQoc2FsZXNVbml0SWQpO1xuICAgICAgICBsZXQgYW1vdW50SW5TYWxlc1VuaXRzID0gK3RoaXMuYW1vdW50SW5TYWxlc1VuaXRJbnB1dC52YWx1ZTtcbiAgICAgICAgbGV0IGFtb3VudEluQmFzZVVuaXRzID0gdGhpcy5tdWx0aXBseShhbW91bnRJblNhbGVzVW5pdHMsIHRoaXMuY3VycmVudExlYWRTYWxlc1VuaXQuY29udmVyc2lvbik7XG4gICAgICAgIGFtb3VudEluU2FsZXNVbml0cyA9IGFtb3VudEluQmFzZVVuaXRzIC8gc2FsZXNVbml0LmNvbnZlcnNpb247XG4gICAgICAgIHRoaXMuY3VycmVudExlYWRTYWxlc1VuaXQgPSBzYWxlc1VuaXQ7XG4gICAgICAgIHRoaXMuYW1vdW50SW5TYWxlc1VuaXRJbnB1dC52YWx1ZSA9IHRoaXMucm91bmQoYW1vdW50SW5TYWxlc1VuaXRzLCA0KS50b1N0cmluZygpO1xuICAgICAgICB0aGlzLmFtb3VudElucHV0Q2hhbmdlKGFtb3VudEluU2FsZXNVbml0cyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBoaWRlUGFja2FnaW5nVW5pdFJlc3RyaWN0aW9uTm90aWZpY2F0aW9ucygpIHtcbiAgICAgICAgdGhpcy5wdUNob2ljZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaXMtaGlkZGVuJyk7XG4gICAgICAgIHRoaXMucHVNaW5Ob3RpZmljYXRpb25FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2lzLWhpZGRlbicpO1xuICAgICAgICB0aGlzLnB1TWF4Tm90aWZpY2F0aW9uRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdpcy1oaWRkZW4nKTtcbiAgICAgICAgdGhpcy5wdUludGVydmFsTm90aWZpY2F0aW9uRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdpcy1oaWRkZW4nKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldExlYWRTYWxlc1VuaXRCeUlkKHNhbGVzVW5pdElkOiBudW1iZXIpIHtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHRoaXMubGVhZFNhbGVzVW5pdHMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmxlYWRTYWxlc1VuaXRzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2FsZXNVbml0SWQgPT0gdGhpcy5sZWFkU2FsZXNVbml0c1trZXldLmlkX3Byb2R1Y3RfbWVhc3VyZW1lbnRfc2FsZXNfdW5pdCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5sZWFkU2FsZXNVbml0c1trZXldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0TWluQW1vdW50KCkge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMucHJvZHVjdFBhY2thZ2luZ1VuaXRTdG9yYWdlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgJiYgdGhpcy5wcm9kdWN0UGFja2FnaW5nVW5pdFN0b3JhZ2UuaGFzT3duUHJvcGVydHkoJ2Ftb3VudF9taW4nKVxuICAgICAgICAgICAgJiYgdGhpcy5wcm9kdWN0UGFja2FnaW5nVW5pdFN0b3JhZ2UuYW1vdW50X21pbiAhPT0gbnVsbFxuICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb2R1Y3RQYWNrYWdpbmdVbml0U3RvcmFnZS5hbW91bnRfbWluO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIDE7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRNYXhBbW91bnQoKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5wcm9kdWN0UGFja2FnaW5nVW5pdFN0b3JhZ2UgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICAmJiB0aGlzLnByb2R1Y3RQYWNrYWdpbmdVbml0U3RvcmFnZS5oYXNPd25Qcm9wZXJ0eSgnYW1vdW50X21heCcpXG4gICAgICAgICAgICAmJiB0aGlzLnByb2R1Y3RQYWNrYWdpbmdVbml0U3RvcmFnZS5hbW91bnRfbWF4ICE9PSBudWxsXG4gICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvZHVjdFBhY2thZ2luZ1VuaXRTdG9yYWdlLmFtb3VudF9tYXg7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldEFtb3VudEludGVydmFsKCkge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMucHJvZHVjdFBhY2thZ2luZ1VuaXRTdG9yYWdlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgJiYgdGhpcy5wcm9kdWN0UGFja2FnaW5nVW5pdFN0b3JhZ2UuaGFzT3duUHJvcGVydHkoJ2Ftb3VudF9pbnRlcnZhbCcpXG4gICAgICAgICAgICAmJiB0aGlzLnByb2R1Y3RQYWNrYWdpbmdVbml0U3RvcmFnZS5hbW91bnRfaW50ZXJ2YWwgIT09IG51bGxcbiAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9kdWN0UGFja2FnaW5nVW5pdFN0b3JhZ2UuYW1vdW50X2ludGVydmFsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIDE7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXREZWZhdWx0QW1vdW50KCkge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMucHJvZHVjdFBhY2thZ2luZ1VuaXRTdG9yYWdlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgJiYgdGhpcy5wcm9kdWN0UGFja2FnaW5nVW5pdFN0b3JhZ2UuaGFzT3duUHJvcGVydHkoJ2RlZmF1bHRfYW1vdW50JylcbiAgICAgICAgICAgICYmIHRoaXMucHJvZHVjdFBhY2thZ2luZ1VuaXRTdG9yYWdlLmRlZmF1bHRfYW1vdW50ICE9PSBudWxsXG4gICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvZHVjdFBhY2thZ2luZ1VuaXRTdG9yYWdlLmRlZmF1bHRfYW1vdW50O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRNaW5BbW91bnRDaG9pY2UoYW1vdW50SW5TYWxlc1VuaXRzOiBudW1iZXIpIHtcbiAgICAgICAgbGV0IGFtb3VudEluQmFzZVVuaXRzID0gdGhpcy5mbG9vcih0aGlzLm11bHRpcGx5KGFtb3VudEluU2FsZXNVbml0cywgdGhpcy5jdXJyZW50TGVhZFNhbGVzVW5pdC5jb252ZXJzaW9uKSk7XG5cbiAgICAgICAgaWYgKGFtb3VudEluQmFzZVVuaXRzIDwgdGhpcy5nZXRNaW5BbW91bnQoKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0TWluQW1vdW50KCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZih0aGlzLmlzQW1vdW50R3JlYXRlclRoYW5NYXhBbW91bnQoYW1vdW50SW5CYXNlVW5pdHMpKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmlzQW1vdW50TXVsdGlwbGVUb0ludGVydmFsKGFtb3VudEluQmFzZVVuaXRzKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0TWluQW1vdW50Q2hvaWNlKChhbW91bnRJbkJhc2VVbml0cyAtIDEpIC8gdGhpcy5jdXJyZW50TGVhZFNhbGVzVW5pdC5jb252ZXJzaW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhbW91bnRJbkJhc2VVbml0cztcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldE1heEFtb3VudENob2ljZShhbW91bnRJblNhbGVzVW5pdHM6IG51bWJlciwgbWluQ2hvaWNlOiBudW1iZXIpIHtcbiAgICAgICAgbGV0IGFtb3VudEluQmFzZVVuaXRzID0gdGhpcy5jZWlsKHRoaXMubXVsdGlwbHkoYW1vdW50SW5TYWxlc1VuaXRzLCB0aGlzLmN1cnJlbnRMZWFkU2FsZXNVbml0LmNvbnZlcnNpb24pKTtcblxuICAgICAgICBpZiAodGhpcy5pc0Ftb3VudEdyZWF0ZXJUaGFuTWF4QW1vdW50KGFtb3VudEluQmFzZVVuaXRzKSkge1xuICAgICAgICAgICAgYW1vdW50SW5CYXNlVW5pdHMgPSB0aGlzLmdldE1heEFtb3VudCgpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5pc0Ftb3VudE11bHRpcGxlVG9JbnRlcnZhbChhbW91bnRJbkJhc2VVbml0cykpIHtcbiAgICAgICAgICAgICAgICBhbW91bnRJbkJhc2VVbml0cyA9IGFtb3VudEluQmFzZVVuaXRzIC0gKChhbW91bnRJbkJhc2VVbml0cyAtIHRoaXMuZ2V0TWluQW1vdW50KCkpICUgdGhpcy5nZXRBbW91bnRJbnRlcnZhbCgpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGFtb3VudEluQmFzZVVuaXRzO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFtb3VudEluQmFzZVVuaXRzIDw9IG1pbkNob2ljZSkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5pc0Ftb3VudE11bHRpcGxlVG9JbnRlcnZhbChhbW91bnRJbkJhc2VVbml0cykpIHtcbiAgICAgICAgICAgIHJldHVybiBtaW5DaG9pY2UgKyB0aGlzLmdldEFtb3VudEludGVydmFsKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYW1vdW50SW5CYXNlVW5pdHM7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpc0Ftb3VudEdyZWF0ZXJUaGFuTWF4QW1vdW50KGFtb3VudEluQmFzZVVuaXRzOiBudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0TWF4QW1vdW50KCkgPiAwICYmIGFtb3VudEluQmFzZVVuaXRzID4gdGhpcy5nZXRNYXhBbW91bnQoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGlzQW1vdW50TXVsdGlwbGVUb0ludGVydmFsKGFtb3VudEluQmFzZVVuaXRzOiBudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIChhbW91bnRJbkJhc2VVbml0cyAtIHRoaXMuZ2V0TWluQW1vdW50KCkpICUgdGhpcy5nZXRBbW91bnRJbnRlcnZhbCgpICE9PSAwO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IGdldCBhcyBjb25maWcgfSBmcm9tICcuLi9hcHAvY29uZmlnJztcblxuZXhwb3J0IGludGVyZmFjZSBJQ29tcG9uZW50Q29udHJ1Y3RvciB7XG4gICAgbmV3KCk6IENvbXBvbmVudFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElDb21wb25lbnRJbXBvcnRlciB7XG4gICAgKCk6IFByb21pc2U8eyBkZWZhdWx0OiBJQ29tcG9uZW50Q29udHJ1Y3RvciB9PlxufVxuXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBDb21wb25lbnQgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gICAgcmVhZG9ubHkgbmFtZTogc3RyaW5nXG4gICAgcmVhZG9ubHkganNOYW1lOiBzdHJpbmdcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm5hbWUgPSB0aGlzLnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgdGhpcy5qc05hbWUgPSBganMtJHt0aGlzLm5hbWV9YDtcblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKGNvbmZpZygpLmV2ZW50cy5yZWFkeSwgKCkgPT4gdGhpcy5yZWFkeUNhbGxiYWNrKCksIHtcbiAgICAgICAgICAgIGNhcHR1cmU6IGZhbHNlLFxuICAgICAgICAgICAgb25jZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgcmVhZHlDYWxsYmFjaygpOiB2b2lkXG59XG4iXSwic291cmNlUm9vdCI6IiJ9