(window["webpackJsonp_yves_default"] = window["webpackJsonp_yves_default"] || []).push([[14],{

/***/ "./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/components/molecules/action-single-click-enforcer/action-single-click-enforcer.ts":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/components/molecules/action-single-click-enforcer/action-single-click-enforcer.ts ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models/component */ "./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/models/component.ts");
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

var ActionSingleClickEnforcer = (function (_super) {
    __extends(ActionSingleClickEnforcer, _super);
    function ActionSingleClickEnforcer() {
        var _this = _super.call(this) || this;
        _this.targets = Array.from(document.querySelectorAll(_this.targetSelector));
        return _this;
    }
    ActionSingleClickEnforcer.prototype.readyCallback = function () {
        this.mapEvents();
    };
    ActionSingleClickEnforcer.prototype.mapEvents = function () {
        var _this = this;
        this.targets.forEach(function (element) {
            element.addEventListener('click', function (event) { return _this.onTargetClick(event); });
        });
    };
    ActionSingleClickEnforcer.prototype.onTargetClick = function (event) {
        var targetElement = event.currentTarget;
        var isDisabled = targetElement.hasAttribute('disabled');
        if (isDisabled) {
            event.preventDefault();
            return;
        }
        targetElement.setAttribute('disabled', 'disabled');
    };
    Object.defineProperty(ActionSingleClickEnforcer.prototype, "targetSelector", {
        get: function () {
            return this.getAttribute('target-selector') || '';
        },
        enumerable: true,
        configurable: true
    });
    return ActionSingleClickEnforcer;
}(_models_component__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (ActionSingleClickEnforcer);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi92ZW5kb3Ivc3ByeWtlci1zaG9wL3Nob3AtdWkvc3JjL1NwcnlrZXJTaG9wL1l2ZXMvU2hvcFVpL1RoZW1lL2RlZmF1bHQvY29tcG9uZW50cy9tb2xlY3VsZXMvYWN0aW9uLXNpbmdsZS1jbGljay1lbmZvcmNlci9hY3Rpb24tc2luZ2xlLWNsaWNrLWVuZm9yY2VyLnRzIiwid2VicGFjazovLy8uL3ZlbmRvci9zcHJ5a2VyLXNob3Avc2hvcC11aS9zcmMvU3ByeWtlclNob3AvWXZlcy9TaG9wVWkvVGhlbWUvZGVmYXVsdC9tb2RlbHMvY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBa0Q7QUFFbEQ7SUFBdUQsNkNBQVM7SUFHNUQ7UUFBQSxZQUNJLGlCQUFPLFNBRVY7UUFERyxLQUFJLENBQUMsT0FBTyxHQUFrQixLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQzs7SUFDN0YsQ0FBQztJQUVTLGlEQUFhLEdBQXZCO1FBQ0ksSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFUyw2Q0FBUyxHQUFuQjtRQUFBLGlCQUlDO1FBSEcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQyxPQUFvQjtZQUN0QyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQUMsS0FBWSxJQUFLLFlBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEVBQXpCLENBQXlCLENBQUMsQ0FBQztRQUNuRixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFUyxpREFBYSxHQUF2QixVQUF3QixLQUFZO1FBQ2hDLElBQU0sYUFBYSxHQUFpQixLQUFLLENBQUMsYUFBYSxDQUFDO1FBQ3hELElBQU0sVUFBVSxHQUFZLGFBQWEsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFbkUsSUFBSSxVQUFVLEVBQUU7WUFDWixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDdkIsT0FBTztTQUNWO1FBRUQsYUFBYSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVELHNCQUFJLHFEQUFjO2FBQWxCO1lBQ0ksT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3RELENBQUM7OztPQUFBO0lBQ0wsZ0NBQUM7QUFBRCxDQUFDLENBakNzRCx5REFBUyxHQWlDL0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkM2QztBQVU5QztJQUFnRCw2QkFBVztJQUl2RDtRQUFBLFlBQ0ksaUJBQU8sU0FRVjtRQVBHLEtBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN2QyxLQUFJLENBQUMsTUFBTSxHQUFHLFFBQU0sS0FBSSxDQUFDLElBQU0sQ0FBQztRQUVoQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsdURBQU0sRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsY0FBTSxZQUFJLENBQUMsYUFBYSxFQUFFLEVBQXBCLENBQW9CLEVBQUU7WUFDekUsT0FBTyxFQUFFLEtBQUs7WUFDZCxJQUFJLEVBQUUsSUFBSTtTQUNiLENBQUMsQ0FBQzs7SUFDUCxDQUFDO0lBR0wsZ0JBQUM7QUFBRCxDQUFDLENBaEIrQyxXQUFXLEdBZ0IxRCIsImZpbGUiOiIuL2pzL3l2ZXNfZGVmYXVsdC4xNC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vLi4vLi4vbW9kZWxzL2NvbXBvbmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjdGlvblNpbmdsZUNsaWNrRW5mb3JjZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHJlYWRvbmx5IHRhcmdldHM6IEhUTUxFbGVtZW50W11cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnRhcmdldHMgPSA8SFRNTEVsZW1lbnRbXT5BcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy50YXJnZXRTZWxlY3RvcikpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCByZWFkeUNhbGxiYWNrKCk6IHZvaWQge1xuICAgICAgICB0aGlzLm1hcEV2ZW50cygpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBtYXBFdmVudHMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMudGFyZ2V0cy5mb3JFYWNoKChlbGVtZW50OiBIVE1MRWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudDogRXZlbnQpID0+IHRoaXMub25UYXJnZXRDbGljayhldmVudCkpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25UYXJnZXRDbGljayhldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0RWxlbWVudCA9IDxIVE1MRWxlbWVudD4gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICAgICAgY29uc3QgaXNEaXNhYmxlZDogYm9vbGVhbiA9IHRhcmdldEVsZW1lbnQuaGFzQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuXG4gICAgICAgIGlmIChpc0Rpc2FibGVkKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGFyZ2V0RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XG4gICAgfVxuXG4gICAgZ2V0IHRhcmdldFNlbGVjdG9yKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgndGFyZ2V0LXNlbGVjdG9yJykgfHwgJyc7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgZ2V0IGFzIGNvbmZpZyB9IGZyb20gJy4uL2FwcC9jb25maWcnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElDb21wb25lbnRDb250cnVjdG9yIHtcbiAgICBuZXcoKTogQ29tcG9uZW50XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNvbXBvbmVudEltcG9ydGVyIHtcbiAgICAoKTogUHJvbWlzZTx7IGRlZmF1bHQ6IElDb21wb25lbnRDb250cnVjdG9yIH0+XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIENvbXBvbmVudCBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgICByZWFkb25seSBuYW1lOiBzdHJpbmdcbiAgICByZWFkb25seSBqc05hbWU6IHN0cmluZ1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubmFtZSA9IHRoaXMudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB0aGlzLmpzTmFtZSA9IGBqcy0ke3RoaXMubmFtZX1gO1xuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoY29uZmlnKCkuZXZlbnRzLnJlYWR5LCAoKSA9PiB0aGlzLnJlYWR5Q2FsbGJhY2soKSwge1xuICAgICAgICAgICAgY2FwdHVyZTogZmFsc2UsXG4gICAgICAgICAgICBvbmNlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCByZWFkeUNhbGxiYWNrKCk6IHZvaWRcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=