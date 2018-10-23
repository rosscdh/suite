(window["webpackJsonp_yves_default"] = window["webpackJsonp_yves_default"] || []).push([[2],{

/***/ "./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/components/molecules/toggler-checkbox/toggler-checkbox.ts":
/*!*****************************************************************************************************************************************!*\
  !*** ./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/components/molecules/toggler-checkbox/toggler-checkbox.ts ***!
  \*****************************************************************************************************************************************/
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

var TogglerCheckbox = (function (_super) {
    __extends(TogglerCheckbox, _super);
    function TogglerCheckbox() {
        var _this = _super.call(this) || this;
        _this.trigger = _this.querySelector("." + _this.jsName + "__trigger");
        _this.targets = Array.from(document.querySelectorAll(_this.targetSelector));
        return _this;
    }
    TogglerCheckbox.prototype.readyCallback = function () {
        this.toggle();
        this.fireToggleEvent();
        this.mapEvents();
    };
    TogglerCheckbox.prototype.mapEvents = function () {
        var _this = this;
        this.trigger.addEventListener('change', function (event) { return _this.onTriggerClick(event); });
    };
    TogglerCheckbox.prototype.onTriggerClick = function (event) {
        event.preventDefault();
        this.toggle();
        this.fireToggleEvent();
    };
    TogglerCheckbox.prototype.toggle = function (addClass) {
        var _this = this;
        if (addClass === void 0) { addClass = this.addClass; }
        this.targets.forEach(function (element) { return element.classList.toggle(_this.classToToggle, addClass); });
    };
    TogglerCheckbox.prototype.fireToggleEvent = function () {
        var event = new CustomEvent('toggle');
        this.dispatchEvent(event);
    };
    Object.defineProperty(TogglerCheckbox.prototype, "addClass", {
        get: function () {
            return this.addClassWhenChecked ? this.trigger.checked : !this.trigger.checked;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TogglerCheckbox.prototype, "targetSelector", {
        get: function () {
            return this.trigger.getAttribute('target-selector');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TogglerCheckbox.prototype, "classToToggle", {
        get: function () {
            return this.trigger.getAttribute('class-to-toggle');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TogglerCheckbox.prototype, "addClassWhenChecked", {
        get: function () {
            return this.trigger.hasAttribute('add-class-when-checked');
        },
        enumerable: true,
        configurable: true
    });
    return TogglerCheckbox;
}(_models_component__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (TogglerCheckbox);


/***/ }),

/***/ "./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/components/molecules/toggler-radio/toggler-radio.ts":
/*!***********************************************************************************************************************************!*\
  !*** ./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/components/molecules/toggler-radio/toggler-radio.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _toggler_checkbox_toggler_checkbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toggler-checkbox/toggler-checkbox */ "./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/components/molecules/toggler-checkbox/toggler-checkbox.ts");
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

var TogglerRadio = (function (_super) {
    __extends(TogglerRadio, _super);
    function TogglerRadio() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TogglerRadio.prototype.readyCallback = function () {
        this.togglers = Array.from(document.querySelectorAll(this.name + "[group-name=\"" + this.groupName + "\"]"));
        _super.prototype.readyCallback.call(this);
    };
    TogglerRadio.prototype.onTriggerClick = function (event) {
        event.preventDefault();
        this.toggleAll();
    };
    TogglerRadio.prototype.toggleAll = function () {
        this.togglers.forEach(function (toggler) {
            toggler.toggle(toggler.addClass);
        });
    };
    Object.defineProperty(TogglerRadio.prototype, "groupName", {
        get: function () {
            return this.getAttribute('group-name');
        },
        enumerable: true,
        configurable: true
    });
    return TogglerRadio;
}(_toggler_checkbox_toggler_checkbox__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (TogglerRadio);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi92ZW5kb3Ivc3ByeWtlci1zaG9wL3Nob3AtdWkvc3JjL1NwcnlrZXJTaG9wL1l2ZXMvU2hvcFVpL1RoZW1lL2RlZmF1bHQvY29tcG9uZW50cy9tb2xlY3VsZXMvdG9nZ2xlci1jaGVja2JveC90b2dnbGVyLWNoZWNrYm94LnRzIiwid2VicGFjazovLy8uL3ZlbmRvci9zcHJ5a2VyLXNob3Avc2hvcC11aS9zcmMvU3ByeWtlclNob3AvWXZlcy9TaG9wVWkvVGhlbWUvZGVmYXVsdC9jb21wb25lbnRzL21vbGVjdWxlcy90b2dnbGVyLXJhZGlvL3RvZ2dsZXItcmFkaW8udHMiLCJ3ZWJwYWNrOi8vLy4vdmVuZG9yL3NwcnlrZXItc2hvcC9zaG9wLXVpL3NyYy9TcHJ5a2VyU2hvcC9ZdmVzL1Nob3BVaS9UaGVtZS9kZWZhdWx0L21vZGVscy9jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFrRDtBQUVsRDtJQUE2QyxtQ0FBUztJQUlsRDtRQUFBLFlBQ0ksaUJBQU8sU0FHVjtRQUZHLEtBQUksQ0FBQyxPQUFPLEdBQXFCLEtBQUksQ0FBQyxhQUFhLENBQUMsTUFBSSxLQUFJLENBQUMsTUFBTSxjQUFXLENBQUMsQ0FBQztRQUNoRixLQUFJLENBQUMsT0FBTyxHQUFrQixLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQzs7SUFDN0YsQ0FBQztJQUVTLHVDQUFhLEdBQXZCO1FBQ0ksSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2QsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRVMsbUNBQVMsR0FBbkI7UUFBQSxpQkFFQztRQURHLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFVBQUMsS0FB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LEdBQUcsUUFBTSxLQUFJLENBQUMsSUFBTSxDQUFDO1FBRWhDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyx1REFBTSxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxjQUFNLFlBQUksQ0FBQyxhQUFhLEVBQUUsRUFBcEIsQ0FBb0IsRUFBRTtZQUN6RSxPQUFPLEVBQUUsS0FBSztZQUNkLElBQUksRUFBRSxJQUFJO1NBQ2IsQ0FBQyxDQUFDOztJQUNQLENBQUM7SUFHTCxnQkFBQztBQUFELENBQUMsQ0FoQitDLFdBQVcsR0FnQjFEIiwiZmlsZSI6Ii4vanMveXZlc19kZWZhdWx0LjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uLy4uLy4uL21vZGVscy9jb21wb25lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2dnbGVyQ2hlY2tib3ggZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHJlYWRvbmx5IHRyaWdnZXI6IEhUTUxJbnB1dEVsZW1lbnRcbiAgICByZWFkb25seSB0YXJnZXRzOiBIVE1MRWxlbWVudFtdXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy50cmlnZ2VyID0gPEhUTUxJbnB1dEVsZW1lbnQ+dGhpcy5xdWVyeVNlbGVjdG9yKGAuJHt0aGlzLmpzTmFtZX1fX3RyaWdnZXJgKTtcbiAgICAgICAgdGhpcy50YXJnZXRzID0gPEhUTUxFbGVtZW50W10+QXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMudGFyZ2V0U2VsZWN0b3IpKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgcmVhZHlDYWxsYmFjaygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy50b2dnbGUoKTtcbiAgICAgICAgdGhpcy5maXJlVG9nZ2xlRXZlbnQoKTtcbiAgICAgICAgdGhpcy5tYXBFdmVudHMoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgbWFwRXZlbnRzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGV2ZW50OiBFdmVudCkgPT4gdGhpcy5vblRyaWdnZXJDbGljayhldmVudCkpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvblRyaWdnZXJDbGljayhldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy50b2dnbGUoKTtcbiAgICAgICAgdGhpcy5maXJlVG9nZ2xlRXZlbnQoKTtcbiAgICB9XG5cbiAgICB0b2dnbGUoYWRkQ2xhc3M6IGJvb2xlYW4gPSB0aGlzLmFkZENsYXNzKTogdm9pZCB7XG4gICAgICAgIHRoaXMudGFyZ2V0cy5mb3JFYWNoKChlbGVtZW50OiBIVE1MRWxlbWVudCkgPT4gZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKHRoaXMuY2xhc3NUb1RvZ2dsZSwgYWRkQ2xhc3MpKTtcbiAgICB9XG5cbiAgICBmaXJlVG9nZ2xlRXZlbnQoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCd0b2dnbGUnKTtcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICB9XG5cbiAgICBnZXQgYWRkQ2xhc3MoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmFkZENsYXNzV2hlbkNoZWNrZWQgPyB0aGlzLnRyaWdnZXIuY2hlY2tlZCA6ICF0aGlzLnRyaWdnZXIuY2hlY2tlZDtcbiAgICB9XG5cbiAgICBnZXQgdGFyZ2V0U2VsZWN0b3IoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHJpZ2dlci5nZXRBdHRyaWJ1dGUoJ3RhcmdldC1zZWxlY3RvcicpO1xuICAgIH1cblxuICAgIGdldCBjbGFzc1RvVG9nZ2xlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnRyaWdnZXIuZ2V0QXR0cmlidXRlKCdjbGFzcy10by10b2dnbGUnKTtcbiAgICB9XG5cbiAgICBnZXQgYWRkQ2xhc3NXaGVuQ2hlY2tlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHJpZ2dlci5oYXNBdHRyaWJ1dGUoJ2FkZC1jbGFzcy13aGVuLWNoZWNrZWQnKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgVG9nZ2xlckNoZWNrYm94IGZyb20gJy4uL3RvZ2dsZXItY2hlY2tib3gvdG9nZ2xlci1jaGVja2JveCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZ2dsZXJSYWRpbyBleHRlbmRzIFRvZ2dsZXJDaGVja2JveCB7XG4gICAgdG9nZ2xlcnM6IFRvZ2dsZXJSYWRpb1tdXG5cbiAgICBwcm90ZWN0ZWQgcmVhZHlDYWxsYmFjaygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy50b2dnbGVycyA9IDxUb2dnbGVyUmFkaW9bXT5BcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYCR7dGhpcy5uYW1lfVtncm91cC1uYW1lPVwiJHt0aGlzLmdyb3VwTmFtZX1cIl1gKSk7XG4gICAgICAgIHN1cGVyLnJlYWR5Q2FsbGJhY2soKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25UcmlnZ2VyQ2xpY2soZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMudG9nZ2xlQWxsKCk7XG4gICAgfVxuXG4gICAgdG9nZ2xlQWxsKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnRvZ2dsZXJzLmZvckVhY2goKHRvZ2dsZXI6IFRvZ2dsZXJSYWRpbykgPT4ge1xuICAgICAgICAgICAgdG9nZ2xlci50b2dnbGUodG9nZ2xlci5hZGRDbGFzcyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldCBncm91cE5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdncm91cC1uYW1lJyk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgZ2V0IGFzIGNvbmZpZyB9IGZyb20gJy4uL2FwcC9jb25maWcnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElDb21wb25lbnRDb250cnVjdG9yIHtcbiAgICBuZXcoKTogQ29tcG9uZW50XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNvbXBvbmVudEltcG9ydGVyIHtcbiAgICAoKTogUHJvbWlzZTx7IGRlZmF1bHQ6IElDb21wb25lbnRDb250cnVjdG9yIH0+XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIENvbXBvbmVudCBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgICByZWFkb25seSBuYW1lOiBzdHJpbmdcbiAgICByZWFkb25seSBqc05hbWU6IHN0cmluZ1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubmFtZSA9IHRoaXMudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB0aGlzLmpzTmFtZSA9IGBqcy0ke3RoaXMubmFtZX1gO1xuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoY29uZmlnKCkuZXZlbnRzLnJlYWR5LCAoKSA9PiB0aGlzLnJlYWR5Q2FsbGJhY2soKSwge1xuICAgICAgICAgICAgY2FwdHVyZTogZmFsc2UsXG4gICAgICAgICAgICBvbmNlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCByZWFkeUNhbGxiYWNrKCk6IHZvaWRcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=