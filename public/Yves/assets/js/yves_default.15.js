(window["webpackJsonp_yves_default"] = window["webpackJsonp_yves_default"] || []).push([[15],{

/***/ "./vendor/spryker-shop/product-measurement-unit-widget/src/SprykerShop/Yves/ProductMeasurementUnitWidget/Theme/default/components/molecules/measurement-quantity-selector/measurement-quantity-selector.ts":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./vendor/spryker-shop/product-measurement-unit-widget/src/SprykerShop/Yves/ProductMeasurementUnitWidget/Theme/default/components/molecules/measurement-quantity-selector/measurement-quantity-selector.ts ***!
  \*****************************************************************************************************************************************************************************************************************/
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

var MeasurementQuantitySelector = (function (_super) {
    __extends(MeasurementQuantitySelector, _super);
    function MeasurementQuantitySelector() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MeasurementQuantitySelector.prototype.readyCallback = function (event) {
        this.qtyInSalesUnitInput = document.querySelector('#sales-unit-quantity');
        this.qtyInBaseUnitInput = document.querySelector('#base-unit-quantity');
        this.measurementUnitInput = document.querySelector('.select-measurement-unit');
        this.addToCartButton = document.getElementById('add-to-cart-button');
        this.initJson();
        this.initTranslations();
        this.initCurrentSalesUnit();
        this.mapEvents();
    };
    MeasurementQuantitySelector.prototype.initJson = function () {
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
            if (jsonData.hasOwnProperty('productQuantityStorage')) {
                this.productQuantityStorage = jsonData.productQuantityStorage;
            }
        }
    };
    MeasurementQuantitySelector.prototype.initTranslations = function () {
        this.translations = JSON.parse(document.getElementById('measurement-unit-translation').innerHTML);
    };
    MeasurementQuantitySelector.prototype.initCurrentSalesUnit = function () {
        for (var key in this.salesUnits) {
            if (this.salesUnits.hasOwnProperty(key)) {
                if (this.salesUnits[key].is_default) {
                    this.currentSalesUnit = this.salesUnits[key];
                }
            }
        }
    };
    MeasurementQuantitySelector.prototype.mapEvents = function () {
        var _this = this;
        this.qtyInSalesUnitInput.addEventListener('change', function (event) { return _this.qtyInputChange(); });
        this.measurementUnitInput.addEventListener('change', function (event) { return _this.measurementUnitInputChange(event); });
    };
    MeasurementQuantitySelector.prototype.qtyInputChange = function (qtyInSalesUnits) {
        if (typeof qtyInSalesUnits === 'undefined') {
            qtyInSalesUnits = +this.qtyInSalesUnitInput.value;
        }
        var error = false;
        var qtyInBaseUnits = this.multiply(qtyInSalesUnits, +this.currentSalesUnit.conversion);
        if ((qtyInBaseUnits - this.getMinQuantity()) % this.getQuantityInterval() !== 0) {
            error = true;
            this.hideNotifications();
            document.getElementById('quantity-between-units').classList.remove('is-hidden');
        }
        else if (qtyInBaseUnits < this.getMinQuantity()) {
            error = true;
            this.hideNotifications();
            document.getElementById('minimum-quantity').classList.remove('is-hidden');
        }
        else if (this.getMaxQuantity() > 0 && qtyInBaseUnits > this.getMaxQuantity()) {
            error = true;
            this.hideNotifications();
            document.getElementById('maximum-quantity').classList.remove('is-hidden');
        }
        if (error) {
            this.addToCartButton.setAttribute("disabled", "disabled");
            this.askCustomerForCorrectInput(qtyInSalesUnits);
            return;
        }
        this.qtyInBaseUnitInput.value = qtyInBaseUnits.toString();
        this.addToCartButton.removeAttribute("disabled");
        this.hideNotifications();
        return;
    };
    MeasurementQuantitySelector.prototype.hideNotifications = function () {
        document.querySelector('.measurement-unit-choice').classList.add('is-hidden');
        document.getElementById('quantity-between-units').classList.add('is-hidden');
        document.getElementById('minimum-quantity').classList.add('is-hidden');
        document.getElementById('maximum-quantity').classList.add('is-hidden');
    };
    MeasurementQuantitySelector.prototype.askCustomerForCorrectInput = function (qtyInSalesUnits) {
        var choicesList = document.querySelector('#measurement-unit-choices .list');
        var currentChoice = document.querySelector('.measurement-unit-choice #current-choice');
        var minChoice = this.getMinChoice(qtyInSalesUnits);
        var maxChoice = this.getMaxChoice(qtyInSalesUnits, minChoice);
        choicesList.innerHTML = '';
        currentChoice.innerHTML = '';
        currentChoice.textContent = this.round(qtyInSalesUnits, 4) + " " + this.getUnitName(this.currentSalesUnit.product_measurement_unit.code);
        var choiceElements = [];
        choiceElements.push(this.createChoiceElement(minChoice));
        if (maxChoice != minChoice) {
            choiceElements.push(this.createChoiceElement(maxChoice));
        }
        choiceElements.forEach(function (element) { return (element !== null) ? choicesList.appendChild(element) : null; });
        document.querySelector('.measurement-unit-choice').classList.remove('is-hidden');
    };
    MeasurementQuantitySelector.prototype.createChoiceElement = function (qtyInBaseUnits) {
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
                this.selectQty(qtyInBaseUnits, qtyInSalesUnits);
            }.bind(this);
            choiceElem.style.display = 'block';
            return choiceElem;
        }
        return null;
    };
    MeasurementQuantitySelector.prototype.selectQty = function (qtyInBaseUnits, qtyInSalesUnits) {
        this.qtyInBaseUnitInput.value = qtyInBaseUnits.toString();
        this.qtyInSalesUnitInput.value = this.round(qtyInSalesUnits, 4).toString().toString();
        this.addToCartButton.removeAttribute("disabled");
        document.querySelector('.measurement-unit-choice').classList.add('is-hidden');
    };
    MeasurementQuantitySelector.prototype.getMinChoice = function (qtyInSalesUnits) {
        var qtyInBaseUnits = this.floor(this.multiply(qtyInSalesUnits, this.currentSalesUnit.conversion));
        if (qtyInBaseUnits < this.getMinQuantity()) {
            return this.getMinQuantity();
        }
        if ((qtyInBaseUnits - this.getMinQuantity()) % this.getQuantityInterval() !== 0 || (this.getMaxQuantity() > 0 && qtyInBaseUnits > this.getMaxQuantity())) {
            return this.getMinChoice((qtyInBaseUnits - 1) / this.currentSalesUnit.conversion);
        }
        return qtyInBaseUnits;
    };
    MeasurementQuantitySelector.prototype.getMaxChoice = function (qtyInSalesUnits, minChoice) {
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
    MeasurementQuantitySelector.prototype.floor = function (value) {
        if (Math.floor(value) > 0) {
            return Math.floor(value);
        }
        return Math.ceil(value);
    };
    MeasurementQuantitySelector.prototype.ceil = function (value) {
        return Math.ceil(value);
    };
    MeasurementQuantitySelector.prototype.round = function (value, decimals) {
        return Number(Math.round(parseFloat(value + 'e' + decimals)) + 'e-' + decimals);
    };
    MeasurementQuantitySelector.prototype.multiply = function (a, b) {
        var result = ((a * 10) * (b * 10)) / 100;
        return Math.floor(result * 1000) / 1000;
    };
    MeasurementQuantitySelector.prototype.getMinQuantity = function () {
        if (typeof this.productQuantityStorage !== 'undefined'
            && this.productQuantityStorage.hasOwnProperty('quantity_min')) {
            return this.productQuantityStorage.quantity_min;
        }
        return 1;
    };
    MeasurementQuantitySelector.prototype.getMaxQuantity = function () {
        if (typeof this.productQuantityStorage !== 'undefined'
            && this.productQuantityStorage.hasOwnProperty('quantity_max')
            && this.productQuantityStorage.quantity_max !== null) {
            return this.productQuantityStorage.quantity_max;
        }
        return 0;
    };
    MeasurementQuantitySelector.prototype.getQuantityInterval = function () {
        if (typeof this.productQuantityStorage !== 'undefined'
            && this.productQuantityStorage.hasOwnProperty('quantity_interval')) {
            return this.productQuantityStorage.quantity_interval;
        }
        return 1;
    };
    MeasurementQuantitySelector.prototype.measurementUnitInputChange = function (event) {
        var salesUnitId = parseInt(event.srcElement.value);
        var salesUnit = this.getSalesUnitById(salesUnitId);
        var qtyInSalesUnits = +this.qtyInSalesUnitInput.value;
        var qtyInBaseUnits = this.multiply(qtyInSalesUnits, this.currentSalesUnit.conversion);
        qtyInSalesUnits = qtyInBaseUnits / salesUnit.conversion;
        this.currentSalesUnit = salesUnit;
        this.qtyInSalesUnitInput.value = this.round(qtyInSalesUnits, 4).toString();
        this.qtyInputChange(qtyInSalesUnits);
    };
    MeasurementQuantitySelector.prototype.getSalesUnitById = function (salesUnitId) {
        for (var key in this.salesUnits) {
            if (this.salesUnits.hasOwnProperty(key)) {
                if (salesUnitId == this.salesUnits[key].id_product_measurement_sales_unit) {
                    return this.salesUnits[key];
                }
            }
        }
    };
    MeasurementQuantitySelector.prototype.getBaseSalesUnit = function () {
        for (var key in this.salesUnits) {
            if (this.salesUnits.hasOwnProperty(key)) {
                if (this.baseUnit.id_product_measurement_unit == this.salesUnits[key].product_measurement_unit.id_product_measurement_unit) {
                    return this.salesUnits[key];
                }
            }
        }
    };
    MeasurementQuantitySelector.prototype.getUnitName = function (key) {
        if (this.translations.hasOwnProperty(key)) {
            return this.translations[key];
        }
        return key;
    };
    return MeasurementQuantitySelector;
}(ShopUi_models_component__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (MeasurementQuantitySelector);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi92ZW5kb3Ivc3ByeWtlci1zaG9wL3Byb2R1Y3QtbWVhc3VyZW1lbnQtdW5pdC13aWRnZXQvc3JjL1NwcnlrZXJTaG9wL1l2ZXMvUHJvZHVjdE1lYXN1cmVtZW50VW5pdFdpZGdldC9UaGVtZS9kZWZhdWx0L2NvbXBvbmVudHMvbW9sZWN1bGVzL21lYXN1cmVtZW50LXF1YW50aXR5LXNlbGVjdG9yL21lYXN1cmVtZW50LXF1YW50aXR5LXNlbGVjdG9yLnRzIiwid2VicGFjazovLy8uL3ZlbmRvci9zcHJ5a2VyLXNob3Avc2hvcC11aS9zcmMvU3ByeWtlclNob3AvWXZlcy9TaG9wVWkvVGhlbWUvZGVmYXVsdC9tb2RlbHMvY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZ0Q7QUFFaEQ7SUFBeUQsK0NBQVM7SUFBbEU7O0lBd1JBLENBQUM7SUExUWEsbURBQWEsR0FBdkIsVUFBd0IsS0FBYTtRQUNqQyxJQUFJLENBQUMsbUJBQW1CLEdBQXFCLFFBQVEsQ0FBQyxhQUFhLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUM1RixJQUFJLENBQUMsa0JBQWtCLEdBQXFCLFFBQVEsQ0FBQyxhQUFhLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUMxRixJQUFJLENBQUMsb0JBQW9CLEdBQXNCLFFBQVEsQ0FBQyxhQUFhLENBQUMsMEJBQTBCLENBQUMsQ0FBQztRQUNsRyxJQUFJLENBQUMsZUFBZSxHQUFzQixRQUFRLENBQUMsY0FBYyxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFFeEYsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRU8sOENBQVEsR0FBaEI7UUFDSSxJQUFJLG1CQUFtQixHQUFH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Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMVI2QztBQVU5QztJQUFnRCw2QkFBVztJQUl2RDtRQUFBLFlBQ0ksaUJBQU8sU0FRVjtRQVBHLEtBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN2QyxLQUFJLENBQUMsTUFBTSxHQUFHLFFBQU0sS0FBSSxDQUFDLElBQU0sQ0FBQztRQUVoQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsdURBQU0sRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsY0FBTSxZQUFJLENBQUMsYUFBYSxFQUFFLEVBQXBCLENBQW9CLEVBQUU7WUFDekUsT0FBTyxFQUFFLEtBQUs7WUFDZCxJQUFJLEVBQUUsSUFBSTtTQUNiLENBQUMsQ0FBQzs7SUFDUCxDQUFDO0lBR0wsZ0JBQUM7QUFBRCxDQUFDLENBaEIrQyxXQUFXLEdBZ0IxRCIsImZpbGUiOiIuL2pzL3l2ZXNfZGVmYXVsdC4xNS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb21wb25lbnQgZnJvbSAnU2hvcFVpL21vZGVscy9jb21wb25lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZWFzdXJlbWVudFF1YW50aXR5U2VsZWN0b3IgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHF0eUluU2FsZXNVbml0SW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgcXR5SW5CYXNlVW5pdElucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xuICAgIG1lYXN1cmVtZW50VW5pdElucHV0OiBIVE1MU2VsZWN0RWxlbWVudDtcbiAgICBhZGRUb0NhcnRCdXR0b246IEhUTUxCdXR0b25FbGVtZW50O1xuXG4gICAgYmFzZVVuaXQ6IGFueTtcbiAgICBzYWxlc1VuaXRzOiBhbnk7XG4gICAgY3VycmVudFNhbGVzVW5pdDogYW55O1xuICAgIHByb2R1Y3RRdWFudGl0eVN0b3JhZ2U6IGFueTtcbiAgICBjdXJyZW50VmFsdWU6IE51bWJlcjtcbiAgICB0cmFuc2xhdGlvbnM6IGFueTtcblxuXG4gICAgcHJvdGVjdGVkIHJlYWR5Q2FsbGJhY2soZXZlbnQ/OiBFdmVudCk6IHZvaWQge1xuICAgICAgICB0aGlzLnF0eUluU2FsZXNVbml0SW5wdXQgPSA8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2FsZXMtdW5pdC1xdWFudGl0eScpO1xuICAgICAgICB0aGlzLnF0eUluQmFzZVVuaXRJbnB1dCA9IDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNiYXNlLXVuaXQtcXVhbnRpdHknKTtcbiAgICAgICAgdGhpcy5tZWFzdXJlbWVudFVuaXRJbnB1dCA9IDxIVE1MU2VsZWN0RWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0LW1lYXN1cmVtZW50LXVuaXQnKTtcbiAgICAgICAgdGhpcy5hZGRUb0NhcnRCdXR0b24gPSA8SFRNTEJ1dHRvbkVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC10by1jYXJ0LWJ1dHRvbicpO1xuXG4gICAgICAgIHRoaXMuaW5pdEpzb24oKTtcbiAgICAgICAgdGhpcy5pbml0VHJhbnNsYXRpb25zKCk7XG4gICAgICAgIHRoaXMuaW5pdEN1cnJlbnRTYWxlc1VuaXQoKTtcbiAgICAgICAgdGhpcy5tYXBFdmVudHMoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGluaXRKc29uKCkge1xuICAgICAgICBsZXQganNvblNjaGVtYUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUodGhpcy5uYW1lICsgJ19fanNvbicpWzBdO1xuICAgICAgICBpZiAoanNvblNjaGVtYUNvbnRhaW5lci5oYXNBdHRyaWJ1dGUoJ2pzb24nKSkge1xuICAgICAgICAgICAgbGV0IGpzb25TdHJpbmcgPSBqc29uU2NoZW1hQ29udGFpbmVyLmdldEF0dHJpYnV0ZSgnanNvbicpO1xuICAgICAgICAgICAgbGV0IGpzb25EYXRhID0gSlNPTi5wYXJzZShqc29uU3RyaW5nKTtcblxuICAgICAgICAgICAgaWYgKGpzb25EYXRhLmhhc093blByb3BlcnR5KCdiYXNlVW5pdCcpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5iYXNlVW5pdCA9IGpzb25EYXRhLmJhc2VVbml0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoanNvbkRhdGEuaGFzT3duUHJvcGVydHkoJ3NhbGVzVW5pdHMnKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2FsZXNVbml0cyA9IGpzb25EYXRhLnNhbGVzVW5pdHM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChqc29uRGF0YS5oYXNPd25Qcm9wZXJ0eSgncHJvZHVjdFF1YW50aXR5U3RvcmFnZScpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0UXVhbnRpdHlTdG9yYWdlID0ganNvbkRhdGEucHJvZHVjdFF1YW50aXR5U3RvcmFnZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgaW5pdFRyYW5zbGF0aW9ucygpIHtcbiAgICAgICAgdGhpcy50cmFuc2xhdGlvbnMgPSBKU09OLnBhcnNlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZWFzdXJlbWVudC11bml0LXRyYW5zbGF0aW9uJykuaW5uZXJIVE1MKVxuICAgIH1cblxuICAgIHByaXZhdGUgaW5pdEN1cnJlbnRTYWxlc1VuaXQoKSB7XG4gICAgICAgIGZvciAobGV0IGtleSBpbiB0aGlzLnNhbGVzVW5pdHMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNhbGVzVW5pdHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNhbGVzVW5pdHNba2V5XS5pc19kZWZhdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFNhbGVzVW5pdCA9IHRoaXMuc2FsZXNVbml0c1trZXldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgbWFwRXZlbnRzKCkge1xuICAgICAgICB0aGlzLnF0eUluU2FsZXNVbml0SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGV2ZW50OiBFdmVudCkgPT4gdGhpcy5xdHlJbnB1dENoYW5nZSgpKTtcbiAgICAgICAgdGhpcy5tZWFzdXJlbWVudFVuaXRJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXZlbnQ6IEV2ZW50KSA9PiB0aGlzLm1lYXN1cmVtZW50VW5pdElucHV0Q2hhbmdlKGV2ZW50KSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBxdHlJbnB1dENoYW5nZShxdHlJblNhbGVzVW5pdHM/OiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBxdHlJblNhbGVzVW5pdHMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBxdHlJblNhbGVzVW5pdHMgPSArdGhpcy5xdHlJblNhbGVzVW5pdElucHV0LnZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGxldCBlcnJvciA9IGZhbHNlO1xuICAgICAgICBsZXQgcXR5SW5CYXNlVW5pdHMgPSB0aGlzLm11bHRpcGx5KHF0eUluU2FsZXNVbml0cywgK3RoaXMuY3VycmVudFNhbGVzVW5pdC5jb252ZXJzaW9uKTtcbiAgICAgICAgaWYgKChxdHlJbkJhc2VVbml0cyAtIHRoaXMuZ2V0TWluUXVhbnRpdHkoKSkgJSB0aGlzLmdldFF1YW50aXR5SW50ZXJ2YWwoKSAhPT0gMCkge1xuICAgICAgICAgICAgZXJyb3IgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5oaWRlTm90aWZpY2F0aW9ucygpO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3F1YW50aXR5LWJldHdlZW4tdW5pdHMnKS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1oaWRkZW4nKTtcbiAgICAgICAgfSBlbHNlIGlmIChxdHlJbkJhc2VVbml0cyA8IHRoaXMuZ2V0TWluUXVhbnRpdHkoKSkge1xuICAgICAgICAgICAgZXJyb3IgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5oaWRlTm90aWZpY2F0aW9ucygpO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21pbmltdW0tcXVhbnRpdHknKS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1oaWRkZW4nKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmdldE1heFF1YW50aXR5KCkgPiAwICYmIHF0eUluQmFzZVVuaXRzID4gdGhpcy5nZXRNYXhRdWFudGl0eSgpKSB7XG4gICAgICAgICAgICBlcnJvciA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmhpZGVOb3RpZmljYXRpb25zKCk7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWF4aW11bS1xdWFudGl0eScpLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWhpZGRlbicpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICB0aGlzLmFkZFRvQ2FydEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcImRpc2FibGVkXCIpO1xuICAgICAgICAgICAgdGhpcy5hc2tDdXN0b21lckZvckNvcnJlY3RJbnB1dChxdHlJblNhbGVzVW5pdHMpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucXR5SW5CYXNlVW5pdElucHV0LnZhbHVlID0gcXR5SW5CYXNlVW5pdHMudG9TdHJpbmcoKTtcbiAgICAgICAgdGhpcy5hZGRUb0NhcnRCdXR0b24ucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XG4gICAgICAgIHRoaXMuaGlkZU5vdGlmaWNhdGlvbnMoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHByaXZhdGUgaGlkZU5vdGlmaWNhdGlvbnMoKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZWFzdXJlbWVudC11bml0LWNob2ljZScpLmNsYXNzTGlzdC5hZGQoJ2lzLWhpZGRlbicpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncXVhbnRpdHktYmV0d2Vlbi11bml0cycpLmNsYXNzTGlzdC5hZGQoJ2lzLWhpZGRlbicpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWluaW11bS1xdWFudGl0eScpLmNsYXNzTGlzdC5hZGQoJ2lzLWhpZGRlbicpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWF4aW11bS1xdWFudGl0eScpLmNsYXNzTGlzdC5hZGQoJ2lzLWhpZGRlbicpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXNrQ3VzdG9tZXJGb3JDb3JyZWN0SW5wdXQocXR5SW5TYWxlc1VuaXRzOiBudW1iZXIpIHtcbiAgICAgICAgbGV0IGNob2ljZXNMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21lYXN1cmVtZW50LXVuaXQtY2hvaWNlcyAubGlzdCcpO1xuICAgICAgICBsZXQgY3VycmVudENob2ljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZWFzdXJlbWVudC11bml0LWNob2ljZSAjY3VycmVudC1jaG9pY2UnKTtcbiAgICAgICAgbGV0IG1pbkNob2ljZSA9IHRoaXMuZ2V0TWluQ2hvaWNlKHF0eUluU2FsZXNVbml0cyk7XG4gICAgICAgIGxldCBtYXhDaG9pY2UgPSB0aGlzLmdldE1heENob2ljZShxdHlJblNhbGVzVW5pdHMsIG1pbkNob2ljZSk7XG4gICAgICAgIGNob2ljZXNMaXN0LmlubmVySFRNTCA9ICcnO1xuICAgICAgICBjdXJyZW50Q2hvaWNlLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBjdXJyZW50Q2hvaWNlLnRleHRDb250ZW50ID0gYCR7dGhpcy5yb3VuZChxdHlJblNhbGVzVW5pdHMsIDQpfSAke3RoaXMuZ2V0VW5pdE5hbWUodGhpcy5jdXJyZW50U2FsZXNVbml0LnByb2R1Y3RfbWVhc3VyZW1lbnRfdW5pdC5jb2RlKX1gO1xuXG4gICAgICAgIGxldCBjaG9pY2VFbGVtZW50cyA9IFtdO1xuICAgICAgICBjaG9pY2VFbGVtZW50cy5wdXNoKHRoaXMuY3JlYXRlQ2hvaWNlRWxlbWVudChtaW5DaG9pY2UpKTtcbiAgICAgICAgaWYgKG1heENob2ljZSAhPSBtaW5DaG9pY2UpIHtcbiAgICAgICAgICAgIGNob2ljZUVsZW1lbnRzLnB1c2godGhpcy5jcmVhdGVDaG9pY2VFbGVtZW50KG1heENob2ljZSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgY2hvaWNlRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4gKGVsZW1lbnQgIT09IG51bGwpID8gY2hvaWNlc0xpc3QuYXBwZW5kQ2hpbGQoZWxlbWVudCkgOiBudWxsKTtcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVhc3VyZW1lbnQtdW5pdC1jaG9pY2UnKS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1oaWRkZW4nKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZUNob2ljZUVsZW1lbnQocXR5SW5CYXNlVW5pdHM6IG51bWJlcikge1xuICAgICAgICBpZiAocXR5SW5CYXNlVW5pdHMgPiAwKSB7XG4gICAgICAgICAgICBsZXQgY2hvaWNlRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIGxldCBxdHlJblNhbGVzVW5pdHMgPSBxdHlJbkJhc2VVbml0cyAvIHRoaXMuY3VycmVudFNhbGVzVW5pdC5jb252ZXJzaW9uO1xuICAgICAgICAgICAgbGV0IG1lYXN1cmVtZW50U2FsZXNVbml0TmFtZSA9IHRoaXMuZ2V0VW5pdE5hbWUodGhpcy5jdXJyZW50U2FsZXNVbml0LnByb2R1Y3RfbWVhc3VyZW1lbnRfdW5pdC5jb2RlKTtcbiAgICAgICAgICAgIGxldCBtZWFzdXJlbWVudEJhc2VVbml0TmFtZSA9IHRoaXMuZ2V0VW5pdE5hbWUodGhpcy5iYXNlVW5pdC5jb2RlKTtcblxuICAgICAgICAgICAgY2hvaWNlRWxlbS5jbGFzc0xpc3QuYWRkKCdsaW5rJyk7XG4gICAgICAgICAgICBjaG9pY2VFbGVtLnNldEF0dHJpYnV0ZSgnZGF0YS1iYXNlLXVuaXQtcXR5JywgcXR5SW5CYXNlVW5pdHMudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICBjaG9pY2VFbGVtLnNldEF0dHJpYnV0ZSgnZGF0YS1zYWxlcy11bml0LXF0eScsIHF0eUluU2FsZXNVbml0cy50b1N0cmluZygpKTtcbiAgICAgICAgICAgIGNob2ljZUVsZW0udGV4dENvbnRlbnQgPSBgKCR7dGhpcy5yb3VuZChxdHlJblNhbGVzVW5pdHMsIDQpLnRvU3RyaW5nKCkudG9TdHJpbmcoKX0gJHttZWFzdXJlbWVudFNhbGVzVW5pdE5hbWV9KSA9ICgke3F0eUluQmFzZVVuaXRzfSAke21lYXN1cmVtZW50QmFzZVVuaXROYW1lfSlgO1xuICAgICAgICAgICAgY2hvaWNlRWxlbS5vbmNsaWNrID0gZnVuY3Rpb24gKGV2ZW50OiBFdmVudCkge1xuICAgICAgICAgICAgICAgIGxldCBlbGVtZW50ID0gZXZlbnQuc3JjRWxlbWVudCBhcyBIVE1MU2VsZWN0RWxlbWVudDtcbiAgICAgICAgICAgICAgICBsZXQgcXR5SW5CYXNlVW5pdHMgPSBwYXJzZUZsb2F0KGVsZW1lbnQuZGF0YXNldC5iYXNlVW5pdFF0eSk7XG4gICAgICAgICAgICAgICAgbGV0IHF0eUluU2FsZXNVbml0cyA9IHBhcnNlRmxvYXQoZWxlbWVudC5kYXRhc2V0LnNhbGVzVW5pdFF0eSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RRdHkocXR5SW5CYXNlVW5pdHMsIHF0eUluU2FsZXNVbml0cyk7XG4gICAgICAgICAgICB9LmJpbmQodGhpcyk7XG5cbiAgICAgICAgICAgIGNob2ljZUVsZW0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cbiAgICAgICAgICAgIHJldHVybiBjaG9pY2VFbGVtO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZWxlY3RRdHkocXR5SW5CYXNlVW5pdHM6IG51bWJlciwgcXR5SW5TYWxlc1VuaXRzOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5xdHlJbkJhc2VVbml0SW5wdXQudmFsdWUgPSBxdHlJbkJhc2VVbml0cy50b1N0cmluZygpO1xuICAgICAgICB0aGlzLnF0eUluU2FsZXNVbml0SW5wdXQudmFsdWUgPSB0aGlzLnJvdW5kKHF0eUluU2FsZXNVbml0cywgNCkudG9TdHJpbmcoKS50b1N0cmluZygpO1xuICAgICAgICB0aGlzLmFkZFRvQ2FydEJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lYXN1cmVtZW50LXVuaXQtY2hvaWNlJykuY2xhc3NMaXN0LmFkZCgnaXMtaGlkZGVuJyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRNaW5DaG9pY2UocXR5SW5TYWxlc1VuaXRzOiBudW1iZXIpIHtcbiAgICAgICAgbGV0IHF0eUluQmFzZVVuaXRzID0gdGhpcy5mbG9vcih0aGlzLm11bHRpcGx5KHF0eUluU2FsZXNVbml0cywgdGhpcy5jdXJyZW50U2FsZXNVbml0LmNvbnZlcnNpb24pKTtcblxuICAgICAgICBpZiAocXR5SW5CYXNlVW5pdHMgPCB0aGlzLmdldE1pblF1YW50aXR5KCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldE1pblF1YW50aXR5KCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoKHF0eUluQmFzZVVuaXRzIC0gdGhpcy5nZXRNaW5RdWFudGl0eSgpKSAlIHRoaXMuZ2V0UXVhbnRpdHlJbnRlcnZhbCgpICE9PSAwIHx8ICh0aGlzLmdldE1heFF1YW50aXR5KCkgPiAwICYmIHF0eUluQmFzZVVuaXRzID4gdGhpcy5nZXRNYXhRdWFudGl0eSgpKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0TWluQ2hvaWNlKChxdHlJbkJhc2VVbml0cyAtIDEpIC8gdGhpcy5jdXJyZW50U2FsZXNVbml0LmNvbnZlcnNpb24pXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcXR5SW5CYXNlVW5pdHM7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRNYXhDaG9pY2UocXR5SW5TYWxlc1VuaXRzOiBudW1iZXIsIG1pbkNob2ljZTogbnVtYmVyKSB7XG4gICAgICAgIGxldCBxdHlJbkJhc2VVbml0cyA9IHRoaXMuY2VpbCh0aGlzLm11bHRpcGx5KHF0eUluU2FsZXNVbml0cywgdGhpcy5jdXJyZW50U2FsZXNVbml0LmNvbnZlcnNpb24pKTtcblxuICAgICAgICBpZiAodGhpcy5nZXRNYXhRdWFudGl0eSgpID4gMCAmJiBxdHlJbkJhc2VVbml0cyA+IHRoaXMuZ2V0TWF4UXVhbnRpdHkoKSkge1xuICAgICAgICAgICAgcXR5SW5CYXNlVW5pdHMgPSB0aGlzLmdldE1heFF1YW50aXR5KCk7XG5cbiAgICAgICAgICAgIGlmICgocXR5SW5CYXNlVW5pdHMgLSB0aGlzLmdldE1pblF1YW50aXR5KCkpICUgdGhpcy5nZXRRdWFudGl0eUludGVydmFsKCkgIT09IDApIHtcbiAgICAgICAgICAgICAgICBxdHlJbkJhc2VVbml0cyA9IHF0eUluQmFzZVVuaXRzIC0gKChxdHlJbkJhc2VVbml0cyAtIHRoaXMuZ2V0TWluUXVhbnRpdHkoKSkgJSB0aGlzLmdldFF1YW50aXR5SW50ZXJ2YWwoKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBxdHlJbkJhc2VVbml0cztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgocXR5SW5CYXNlVW5pdHMgLSB0aGlzLmdldE1pblF1YW50aXR5KCkpICUgdGhpcy5nZXRRdWFudGl0eUludGVydmFsKCkgIT09IDAgfHwgcXR5SW5CYXNlVW5pdHMgPD0gbWluQ2hvaWNlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRNYXhDaG9pY2UoKHF0eUluQmFzZVVuaXRzICsgMSkgLyB0aGlzLmN1cnJlbnRTYWxlc1VuaXQuY29udmVyc2lvbiwgbWluQ2hvaWNlKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHF0eUluQmFzZVVuaXRzO1xuICAgIH1cblxuICAgIHByaXZhdGUgZmxvb3IodmFsdWU6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIGlmIChNYXRoLmZsb29yKHZhbHVlKSA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmZsb29yKHZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBNYXRoLmNlaWwodmFsdWUpO1xuICAgIH1cblxuICAgIHByaXZhdGUgY2VpbCh2YWx1ZTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIE1hdGguY2VpbCh2YWx1ZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByb3VuZCh2YWx1ZTogbnVtYmVyLCBkZWNpbWFsczogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIE51bWJlcihNYXRoLnJvdW5kKHBhcnNlRmxvYXQodmFsdWUgKyAnZScgKyBkZWNpbWFscykpICsgJ2UtJyArIGRlY2ltYWxzKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG11bHRpcGx5KGE6IG51bWJlciwgYjogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9ICgoYSAqIDEwKSAqIChiICogMTApKSAvIDEwMDtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IocmVzdWx0ICogMTAwMCkgLyAxMDAwO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0TWluUXVhbnRpdHkoKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5wcm9kdWN0UXVhbnRpdHlTdG9yYWdlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgJiYgdGhpcy5wcm9kdWN0UXVhbnRpdHlTdG9yYWdlLmhhc093blByb3BlcnR5KCdxdWFudGl0eV9taW4nKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb2R1Y3RRdWFudGl0eVN0b3JhZ2UucXVhbnRpdHlfbWluO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIDE7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRNYXhRdWFudGl0eSgpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnByb2R1Y3RRdWFudGl0eVN0b3JhZ2UgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICAmJiB0aGlzLnByb2R1Y3RRdWFudGl0eVN0b3JhZ2UuaGFzT3duUHJvcGVydHkoJ3F1YW50aXR5X21heCcpXG4gICAgICAgICAgICAmJiB0aGlzLnByb2R1Y3RRdWFudGl0eVN0b3JhZ2UucXVhbnRpdHlfbWF4ICE9PSBudWxsXG4gICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvZHVjdFF1YW50aXR5U3RvcmFnZS5xdWFudGl0eV9tYXg7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldFF1YW50aXR5SW50ZXJ2YWwoKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5wcm9kdWN0UXVhbnRpdHlTdG9yYWdlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgJiYgdGhpcy5wcm9kdWN0UXVhbnRpdHlTdG9yYWdlLmhhc093blByb3BlcnR5KCdxdWFudGl0eV9pbnRlcnZhbCcpXG4gICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvZHVjdFF1YW50aXR5U3RvcmFnZS5xdWFudGl0eV9pbnRlcnZhbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAxO1xuICAgIH1cblxuICAgIHByaXZhdGUgbWVhc3VyZW1lbnRVbml0SW5wdXRDaGFuZ2UoZXZlbnQ6IEV2ZW50KSB7XG4gICAgICAgIGxldCBzYWxlc1VuaXRJZCA9IHBhcnNlSW50KChldmVudC5zcmNFbGVtZW50IGFzIEhUTUxTZWxlY3RFbGVtZW50KS52YWx1ZSk7XG4gICAgICAgIGxldCBzYWxlc1VuaXQgPSB0aGlzLmdldFNhbGVzVW5pdEJ5SWQoc2FsZXNVbml0SWQpO1xuICAgICAgICBsZXQgcXR5SW5TYWxlc1VuaXRzID0gK3RoaXMucXR5SW5TYWxlc1VuaXRJbnB1dC52YWx1ZTtcbiAgICAgICAgbGV0IHF0eUluQmFzZVVuaXRzID0gdGhpcy5tdWx0aXBseShxdHlJblNhbGVzVW5pdHMsIHRoaXMuY3VycmVudFNhbGVzVW5pdC5jb252ZXJzaW9uKTtcbiAgICAgICAgcXR5SW5TYWxlc1VuaXRzID0gcXR5SW5CYXNlVW5pdHMgLyBzYWxlc1VuaXQuY29udmVyc2lvbjtcbiAgICAgICAgdGhpcy5jdXJyZW50U2FsZXNVbml0ID0gc2FsZXNVbml0O1xuICAgICAgICB0aGlzLnF0eUluU2FsZXNVbml0SW5wdXQudmFsdWUgPSB0aGlzLnJvdW5kKHF0eUluU2FsZXNVbml0cywgNCkudG9TdHJpbmcoKTtcbiAgICAgICAgdGhpcy5xdHlJbnB1dENoYW5nZShxdHlJblNhbGVzVW5pdHMpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0U2FsZXNVbml0QnlJZChzYWxlc1VuaXRJZDogbnVtYmVyKSB7XG4gICAgICAgIGZvciAobGV0IGtleSBpbiB0aGlzLnNhbGVzVW5pdHMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNhbGVzVW5pdHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIGlmIChzYWxlc1VuaXRJZCA9PSB0aGlzLnNhbGVzVW5pdHNba2V5XS5pZF9wcm9kdWN0X21lYXN1cmVtZW50X3NhbGVzX3VuaXQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2FsZXNVbml0c1trZXldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0QmFzZVNhbGVzVW5pdCgpIHtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHRoaXMuc2FsZXNVbml0cykge1xuICAgICAgICAgICAgaWYgKHRoaXMuc2FsZXNVbml0cy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYmFzZVVuaXQuaWRfcHJvZHVjdF9tZWFzdXJlbWVudF91bml0ID09IHRoaXMuc2FsZXNVbml0c1trZXldLnByb2R1Y3RfbWVhc3VyZW1lbnRfdW5pdC5pZF9wcm9kdWN0X21lYXN1cmVtZW50X3VuaXQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2FsZXNVbml0c1trZXldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0VW5pdE5hbWUoa2V5KSB7XG4gICAgICAgIGlmICh0aGlzLnRyYW5zbGF0aW9ucy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50cmFuc2xhdGlvbnNba2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBrZXk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgZ2V0IGFzIGNvbmZpZyB9IGZyb20gJy4uL2FwcC9jb25maWcnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElDb21wb25lbnRDb250cnVjdG9yIHtcbiAgICBuZXcoKTogQ29tcG9uZW50XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNvbXBvbmVudEltcG9ydGVyIHtcbiAgICAoKTogUHJvbWlzZTx7IGRlZmF1bHQ6IElDb21wb25lbnRDb250cnVjdG9yIH0+XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIENvbXBvbmVudCBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgICByZWFkb25seSBuYW1lOiBzdHJpbmdcbiAgICByZWFkb25seSBqc05hbWU6IHN0cmluZ1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubmFtZSA9IHRoaXMudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB0aGlzLmpzTmFtZSA9IGBqcy0ke3RoaXMubmFtZX1gO1xuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoY29uZmlnKCkuZXZlbnRzLnJlYWR5LCAoKSA9PiB0aGlzLnJlYWR5Q2FsbGJhY2soKSwge1xuICAgICAgICAgICAgY2FwdHVyZTogZmFsc2UsXG4gICAgICAgICAgICBvbmNlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCByZWFkeUNhbGxiYWNrKCk6IHZvaWRcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=