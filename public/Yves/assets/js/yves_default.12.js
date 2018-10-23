(window["webpackJsonp_yves_default"] = window["webpackJsonp_yves_default"] || []).push([[12],{

/***/ "./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/components/molecules/ajax-provider/ajax-provider.ts":
/*!***********************************************************************************************************************************!*\
  !*** ./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/components/molecules/ajax-provider/ajax-provider.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../app/logger */ "./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/app/logger.ts");
/* harmony import */ var _models_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/component */ "./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/models/component.ts");
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
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var EVENT_FETCHING = 'fetching';
var EVENT_FETCHED = 'fetched';
var AjaxProvider = (function (_super) {
    __extends(AjaxProvider, _super);
    function AjaxProvider() {
        var _this = _super.call(this) || this;
        _this.isFetchingRequest = false;
        _this.queryParams = new Map();
        _this.headers = new Map();
        _this.xhr = new XMLHttpRequest();
        return _this;
    }
    AjaxProvider.prototype.readyCallback = function () {
        if (this.fetchOnLoad) {
            this.fetch();
        }
    };
    AjaxProvider.prototype.fetch = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                Object(_app_logger__WEBPACK_IMPORTED_MODULE_0__["debug"])(this.method, this.url, 'fetching...');
                this.isFetchingRequest = true;
                this.fireEvent(EVENT_FETCHING);
                return [2, new Promise(function (resolve, reject) {
                        _this.xhr.open(_this.method, _this.url);
                        _this.xhr.responseType = _this.responseType;
                        _this.xhr.addEventListener('load', function (event) { return _this.onRequestLoad(resolve, reject, event); });
                        _this.xhr.addEventListener('error', function (event) { return _this.onRequestError(reject, event); });
                        _this.xhr.addEventListener('abort', function (event) { return _this.onRequestAbort(reject, event); });
                        _this.xhr.send(data);
                    })];
            });
        });
    };
    AjaxProvider.prototype.onRequestLoad = function (resolve, reject, loadEvent) {
        Object(_app_logger__WEBPACK_IMPORTED_MODULE_0__["debug"])(this.method, this.xhr.status, this.url);
        this.isFetchingRequest = false;
        this.fireEvent(EVENT_FETCHED);
        if (this.xhr.status === 200) {
            return resolve(this.xhr.response);
        }
        var message = this.method + " " + this.xhr.status + " " + this.url + " server error";
        return reject(new Error(message));
    };
    AjaxProvider.prototype.onRequestError = function (reject, errorEvent) {
        var message = this.method + " " + this.url + " request error";
        Object(_app_logger__WEBPACK_IMPORTED_MODULE_0__["error"])(message);
        this.isFetchingRequest = false;
        this.fireEvent(EVENT_FETCHED);
        reject(new Error(message));
    };
    AjaxProvider.prototype.onRequestAbort = function (reject, abortEvent) {
        var message = this.method + " " + this.url + " request aborted";
        Object(_app_logger__WEBPACK_IMPORTED_MODULE_0__["error"])(message);
        this.isFetchingRequest = false;
        this.fireEvent(EVENT_FETCHED);
        reject(new Error(message));
    };
    AjaxProvider.prototype.fireEvent = function (name) {
        var event = new CustomEvent(name);
        this.dispatchEvent(event);
    };
    Object.defineProperty(AjaxProvider.prototype, "url", {
        get: function () {
            var url = this.getAttribute('url');
            if (this.queryParams.size === 0) {
                return url;
            }
            var queryStringParams = [];
            this.queryParams.forEach(function (value, key) {
                queryStringParams.push(key + "=" + value);
            });
            return url + '?' + queryStringParams.join('&');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AjaxProvider.prototype, "method", {
        get: function () {
            return this.getAttribute('method').toUpperCase();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AjaxProvider.prototype, "responseType", {
        get: function () {
            return this.getAttribute('response-type');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AjaxProvider.prototype, "fetchOnLoad", {
        get: function () {
            return this.hasAttribute('fetch-on-load');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AjaxProvider.prototype, "isFetching", {
        get: function () {
            return this.isFetchingRequest;
        },
        enumerable: true,
        configurable: true
    });
    return AjaxProvider;
}(_models_component__WEBPACK_IMPORTED_MODULE_1__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (AjaxProvider);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi92ZW5kb3Ivc3ByeWtlci1zaG9wL3Nob3AtdWkvc3JjL1NwcnlrZXJTaG9wL1l2ZXMvU2hvcFVpL1RoZW1lL2RlZmF1bHQvY29tcG9uZW50cy9tb2xlY3VsZXMvYWpheC1wcm92aWRlci9hamF4LXByb3ZpZGVyLnRzIiwid2VicGFjazovLy8uL3ZlbmRvci9zcHJ5a2VyLXNob3Avc2hvcC11aS9zcmMvU3ByeWtlclNob3AvWXZlcy9TaG9wVWkvVGhlbWUvZGVmYXVsdC9tb2RlbHMvY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBaUQ7QUFDQztBQUVsRCxJQUFNLGNBQWMsR0FBRyxVQUFVLENBQUM7QUFDbEMsSUFBTSxhQUFhLEdBQUcsU0FBUyxDQUFDO0FBRWhDO0lBQTBDLGdDQUFTO0lBTy9DO1FBQUEsWUFDSSxpQkFBTyxTQUVWO1FBVFMsdUJBQWlCLEdBQVksS0FBSztRQUNuQyxpQkFBVyxHQUF3QixJQUFJLEdBQUcsRUFBa0I7UUFDNUQsYUFBTyxHQUF3QixJQUFJLEdBQUcsRUFBa0I7UUFNN0QsS0FBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLGNBQWMsRUFBRSxDQUFDOztJQUNwQyxDQUFDO0lBRVMsb0NBQWEsR0FBdkI7UUFDSSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDbEIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2hCO0lBQ0wsQ0FBQztJQUVLLDRCQUFLLEdBQVgsVUFBd0IsSUFBVTs7OztnQkFDOUIseURBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsYUFBYSxDQUFDLENBQUM7Z0JBQzVDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUM7Z0JBQzlCLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLENBQUM7Z0JBRS9CLFdB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UUFQRyxLQUFJLENBQUMsSUFBSSxHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDdkMsS0FBSSxDQUFDLE1BQU0sR0FBRyxRQUFNLEtBQUksQ0FBQyxJQUFNLENBQUM7UUFFaEMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLHVEQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLGNBQU0sWUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFwQixDQUFvQixFQUFFO1lBQ3pFLE9BQU8sRUFBRSxLQUFLO1lBQ2QsSUFBSSxFQUFFLElBQUk7U0FDYixDQUFDLENBQUM7O0lBQ1AsQ0FBQztJQUdMLGdCQUFDO0FBQUQsQ0FBQyxDQWhCK0MsV0FBVyxHQWdCMUQiLCJmaWxlIjoiLi9qcy95dmVzX2RlZmF1bHQuMTIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2RlYnVnLCBlcnJvcn0gZnJvbSAnLi4vLi4vLi4vYXBwL2xvZ2dlcic7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uLy4uLy4uL21vZGVscy9jb21wb25lbnQnO1xuXG5jb25zdCBFVkVOVF9GRVRDSElORyA9ICdmZXRjaGluZyc7XG5jb25zdCBFVkVOVF9GRVRDSEVEID0gJ2ZldGNoZWQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBamF4UHJvdmlkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHByb3RlY3RlZCBpc0ZldGNoaW5nUmVxdWVzdDogYm9vbGVhbiA9IGZhbHNlXG4gICAgcmVhZG9ubHkgcXVlcnlQYXJhbXM6IE1hcDxTdHJpbmcsIFN0cmluZz4gPSBuZXcgTWFwPFN0cmluZywgU3RyaW5nPigpXG4gICAgcmVhZG9ubHkgaGVhZGVyczogTWFwPFN0cmluZywgU3RyaW5nPiA9IG5ldyBNYXA8U3RyaW5nLCBTdHJpbmc+KClcblxuICAgIHJlYWRvbmx5IHhocjogWE1MSHR0cFJlcXVlc3RcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCByZWFkeUNhbGxiYWNrKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5mZXRjaE9uTG9hZCkge1xuICAgICAgICAgICAgdGhpcy5mZXRjaCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgZmV0Y2g8VCA9IHN0cmluZz4oZGF0YT86IGFueSk6IFByb21pc2U8VD4ge1xuICAgICAgICBkZWJ1Zyh0aGlzLm1ldGhvZCwgdGhpcy51cmwsICdmZXRjaGluZy4uLicpO1xuICAgICAgICB0aGlzLmlzRmV0Y2hpbmdSZXF1ZXN0ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5maXJlRXZlbnQoRVZFTlRfRkVUQ0hJTkcpO1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxUPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnhoci5vcGVuKHRoaXMubWV0aG9kLCB0aGlzLnVybCk7XG4gICAgICAgICAgICB0aGlzLnhoci5yZXNwb25zZVR5cGUgPSB0aGlzLnJlc3BvbnNlVHlwZTtcbiAgICAgICAgICAgIHRoaXMueGhyLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoZXZlbnQ6IEV2ZW50KSA9PiB0aGlzLm9uUmVxdWVzdExvYWQocmVzb2x2ZSwgcmVqZWN0LCBldmVudCkpO1xuICAgICAgICAgICAgdGhpcy54aHIuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCAoZXZlbnQ6IEV2ZW50KSA9PiB0aGlzLm9uUmVxdWVzdEVycm9yKHJlamVjdCwgZXZlbnQpKTtcbiAgICAgICAgICAgIHRoaXMueGhyLmFkZEV2ZW50TGlzdGVuZXIoJ2Fib3J0JywgKGV2ZW50OiBFdmVudCkgPT4gdGhpcy5vblJlcXVlc3RBYm9ydChyZWplY3QsIGV2ZW50KSk7XG4gICAgICAgICAgICB0aGlzLnhoci5zZW5kKGRhdGEpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25SZXF1ZXN0TG9hZChyZXNvbHZlOiBGdW5jdGlvbiwgcmVqZWN0OiBGdW5jdGlvbiwgbG9hZEV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgICAgICBkZWJ1Zyh0aGlzLm1ldGhvZCwgdGhpcy54aHIuc3RhdHVzLCB0aGlzLnVybCk7XG4gICAgICAgIHRoaXMuaXNGZXRjaGluZ1JlcXVlc3QgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5maXJlRXZlbnQoRVZFTlRfRkVUQ0hFRCk7XG5cbiAgICAgICAgaWYgKHRoaXMueGhyLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh0aGlzLnhoci5yZXNwb25zZSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBtZXNzYWdlID0gYCR7dGhpcy5tZXRob2R9ICR7dGhpcy54aHIuc3RhdHVzfSAke3RoaXMudXJsfSBzZXJ2ZXIgZXJyb3JgO1xuICAgICAgICByZXR1cm4gcmVqZWN0KG5ldyBFcnJvcihtZXNzYWdlKSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uUmVxdWVzdEVycm9yKHJlamVjdDogRnVuY3Rpb24sIGVycm9yRXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgJHt0aGlzLm1ldGhvZH0gJHt0aGlzLnVybH0gcmVxdWVzdCBlcnJvcmA7XG4gICAgICAgIGVycm9yKG1lc3NhZ2UpO1xuICAgICAgICB0aGlzLmlzRmV0Y2hpbmdSZXF1ZXN0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZmlyZUV2ZW50KEVWRU5UX0ZFVENIRUQpO1xuICAgICAgICByZWplY3QobmV3IEVycm9yKG1lc3NhZ2UpKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25SZXF1ZXN0QWJvcnQocmVqZWN0OiBGdW5jdGlvbiwgYWJvcnRFdmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGAke3RoaXMubWV0aG9kfSAke3RoaXMudXJsfSByZXF1ZXN0IGFib3J0ZWRgO1xuICAgICAgICBlcnJvcihtZXNzYWdlKTtcbiAgICAgICAgdGhpcy5pc0ZldGNoaW5nUmVxdWVzdCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmZpcmVFdmVudChFVkVOVF9GRVRDSEVEKTtcbiAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihtZXNzYWdlKSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGZpcmVFdmVudChuYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQobmFtZSk7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgfVxuXG4gICAgZ2V0IHVybCgpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCB1cmwgPSB0aGlzLmdldEF0dHJpYnV0ZSgndXJsJyk7XG4gICAgICAgIGlmICh0aGlzLnF1ZXJ5UGFyYW1zLnNpemUgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiB1cmw7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcXVlcnlTdHJpbmdQYXJhbXMgPSBbXTtcbiAgICAgICAgdGhpcy5xdWVyeVBhcmFtcy5mb3JFYWNoKCh2YWx1ZTogU3RyaW5nLCBrZXk6IFN0cmluZykgPT4ge1xuICAgICAgICAgICAgcXVlcnlTdHJpbmdQYXJhbXMucHVzaChgJHtrZXl9PSR7dmFsdWV9YCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdXJsICsgJz8nICsgcXVlcnlTdHJpbmdQYXJhbXMuam9pbignJicpO1xuICAgIH1cblxuICAgIGdldCBtZXRob2QoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdtZXRob2QnKS50b1VwcGVyQ2FzZSgpO1xuICAgIH1cblxuICAgIGdldCByZXNwb25zZVR5cGUoKTogWE1MSHR0cFJlcXVlc3RSZXNwb25zZVR5cGUge1xuICAgICAgICByZXR1cm4gPFhNTEh0dHBSZXF1ZXN0UmVzcG9uc2VUeXBlPnRoaXMuZ2V0QXR0cmlidXRlKCdyZXNwb25zZS10eXBlJyk7XG4gICAgfVxuXG4gICAgZ2V0IGZldGNoT25Mb2FkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5oYXNBdHRyaWJ1dGUoJ2ZldGNoLW9uLWxvYWQnKTtcbiAgICB9XG5cbiAgICBnZXQgaXNGZXRjaGluZygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNGZXRjaGluZ1JlcXVlc3Q7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgZ2V0IGFzIGNvbmZpZyB9IGZyb20gJy4uL2FwcC9jb25maWcnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElDb21wb25lbnRDb250cnVjdG9yIHtcbiAgICBuZXcoKTogQ29tcG9uZW50XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNvbXBvbmVudEltcG9ydGVyIHtcbiAgICAoKTogUHJvbWlzZTx7IGRlZmF1bHQ6IElDb21wb25lbnRDb250cnVjdG9yIH0+XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIENvbXBvbmVudCBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgICByZWFkb25seSBuYW1lOiBzdHJpbmdcbiAgICByZWFkb25seSBqc05hbWU6IHN0cmluZ1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubmFtZSA9IHRoaXMudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB0aGlzLmpzTmFtZSA9IGBqcy0ke3RoaXMubmFtZX1gO1xuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoY29uZmlnKCkuZXZlbnRzLnJlYWR5LCAoKSA9PiB0aGlzLnJlYWR5Q2FsbGJhY2soKSwge1xuICAgICAgICAgICAgY2FwdHVyZTogZmFsc2UsXG4gICAgICAgICAgICBvbmNlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCByZWFkeUNhbGxiYWNrKCk6IHZvaWRcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=