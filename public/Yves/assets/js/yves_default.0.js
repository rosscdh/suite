(window["webpackJsonp_yves_default"] = window["webpackJsonp_yves_default"] || []).push([[0],{

/***/ "./src/Pyz/Yves/ExampleProductColorGroupWidget/Theme/default/components/molecules/color-selector/color-selector.ts":
/*!*************************************************************************************************************************!*\
  !*** ./src/Pyz/Yves/ExampleProductColorGroupWidget/Theme/default/components/molecules/color-selector/color-selector.ts ***!
  \*************************************************************************************************************************/
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

var ColorSelector = (function (_super) {
    __extends(ColorSelector, _super);
    function ColorSelector() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ColorSelector.prototype.readyCallback = function () {
        this.colors = Array.from(this.getElementsByClassName(this.jsName + "__color"));
        this.images = Array.from(document.querySelectorAll(this.targetImageSelector));
        this.mapEvents();
    };
    ColorSelector.prototype.mapEvents = function () {
        var _this = this;
        this.colors.forEach(function (color) {
            color.addEventListener('mouseenter', function (event) { return _this.onColorSelection(event); });
        });
    };
    ColorSelector.prototype.onColorSelection = function (event) {
        event.preventDefault();
        var color = event.currentTarget;
        var imageSrc = color.getAttribute('data-image-src');
        this.changeActiveColor(color);
        this.changeImage(imageSrc);
    };
    ColorSelector.prototype.changeActiveColor = function (newColor) {
        var _this = this;
        this.colors.forEach(function (color) {
            color.classList.remove(_this.name + "__color--active");
        });
        newColor.classList.add(this.name + "__color--active");
    };
    ColorSelector.prototype.changeImage = function (newImageSrc) {
        this.images.forEach(function (image) {
            if (image.src !== newImageSrc) {
                image.src = newImageSrc;
            }
        });
    };
    Object.defineProperty(ColorSelector.prototype, "targetImageSelector", {
        get: function () {
            return this.getAttribute('target-image-selector');
        },
        enumerable: true,
        configurable: true
    });
    return ColorSelector;
}(ShopUi_models_component__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (ColorSelector);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvUHl6L1l2ZXMvRXhhbXBsZVByb2R1Y3RDb2xvckdyb3VwV2lkZ2V0L1RoZW1lL2RlZmF1bHQvY29tcG9uZW50cy9tb2xlY3VsZXMvY29sb3Itc2VsZWN0b3IvY29sb3Itc2VsZWN0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vdmVuZG9yL3NwcnlrZXItc2hvcC9zaG9wLXVpL3NyYy9TcHJ5a2VyU2hvcC9ZdmVzL1Nob3BVaS9UaGVtZS9kZWZhdWx0L21vZGVscy9jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFnRDtBQUVoRDtJQUEyQyxpQ0FBUztJQUFwRDs7SUEyQ0EsQ0FBQztJQXZDYSxxQ0FBYSxHQUF2QjtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQXdCLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFJLElBQUksQ0FBQyxNQUFNLFlBQVMsQ0FBQyxDQUFDLENBQUM7UUFDcEcsSUFBSSxDQUFDLE1BQU0sR0FBdUIsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztRQUNsRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVTLGlDQUFTLEdBQW5CO1FBQUEsaUJBSUM7UUFIRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFDLEtBQXdCO1lBQ3pDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsVUFBQyxLQUFZLElBQUssWUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxFQUE1QixDQUE0QixDQUFDLENBQUM7UUFDekYsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRVMsd0NBQWdCLEdBQTFCLFVBQTJCLEtBQVk7UUFDbkMsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLElBQU0sS0FBSyxHQUFzQixLQUFLLENBQUMsYUFBYSxDQUFDO1FBQ3JELElBQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQseUNBQWlCLEdBQWpCLFVBQWtCLFFBQTJCO1FBQTdDLGlCQU1DO1FBTEcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBQyxLQUF3QjtZQUN6QyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBSSxLQUFJLENBQUMsSUFBSSxvQkFBaUIsQ0FBQyxDQUFDO1FBQzFELENBQUMsQ0FBQyxDQUFDO1FBRUgsUUFBUSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUksSUFBSSxDQUFDLElBQUksb0JBQWlCLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUQsbUNBQVcsR0FBWCxVQUFZLFdBQW1CO1FBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUMsS0FBdUI7WUFDeEMsSUFBSSxLQUFLLENBQUMsR0FBRyxLQUFLLFdBQVcsRUFBRTtnQkFDM0IsS0FBSyxDQUFDLEdBQUcsR0FBRyxXQUFXLENBQUM7YUFDM0I7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxzQkFBSSw4Q0FBbUI7YUFBdkI7WUFDSSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUN0RCxDQUFDOzs7T0FBQTtJQUNMLG9CQUFDO0FBQUQsQ0FBQyxDQTNDMEMsK0RBQVMsR0EyQ25EOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdDNkM7QUFVOUM7SUFBZ0QsNkJBQVc7SUFJdkQ7UUFBQSxZQUNJLGlCQUFPLFNBUVY7UUFQRyxLQUFJLENBQUMsSUFBSSxHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDdkMsS0FBSSxDQUFDLE1BQU0sR0FBRyxRQUFNLEtBQUksQ0FBQyxJQUFNLENBQUM7UUFFaEMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLHVEQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLGNBQU0sWUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFwQixDQUFvQixFQUFFO1lBQ3pFLE9BQU8sRUFBRSxLQUFLO1lBQ2QsSUFBSSxFQUFFLElBQUk7U0FDYixDQUFDLENBQUM7O0lBQ1AsQ0FBQztJQUdMLGdCQUFDO0FBQUQsQ0FBQyxDQWhCK0MsV0FBVyxHQWdCMUQiLCJmaWxlIjoiLi9qcy95dmVzX2RlZmF1bHQuMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb21wb25lbnQgZnJvbSAnU2hvcFVpL21vZGVscy9jb21wb25lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2xvclNlbGVjdG9yIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb2xvcnM6IEhUTUxBbmNob3JFbGVtZW50W11cbiAgICBpbWFnZXM6IEhUTUxJbWFnZUVsZW1lbnRbXVxuXG4gICAgcHJvdGVjdGVkIHJlYWR5Q2FsbGJhY2soKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY29sb3JzID0gPEhUTUxBbmNob3JFbGVtZW50W10+QXJyYXkuZnJvbSh0aGlzLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7dGhpcy5qc05hbWV9X19jb2xvcmApKTtcbiAgICAgICAgdGhpcy5pbWFnZXMgPSA8SFRNTEltYWdlRWxlbWVudFtdPkFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLnRhcmdldEltYWdlU2VsZWN0b3IpKTtcbiAgICAgICAgdGhpcy5tYXBFdmVudHMoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgbWFwRXZlbnRzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNvbG9ycy5mb3JFYWNoKChjb2xvcjogSFRNTEFuY2hvckVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbG9yLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoZXZlbnQ6IEV2ZW50KSA9PiB0aGlzLm9uQ29sb3JTZWxlY3Rpb24oZXZlbnQpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uQ29sb3JTZWxlY3Rpb24oZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGNvbG9yID0gPEhUTUxBbmNob3JFbGVtZW50PmV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgICAgIGNvbnN0IGltYWdlU3JjID0gY29sb3IuZ2V0QXR0cmlidXRlKCdkYXRhLWltYWdlLXNyYycpO1xuICAgICAgICB0aGlzLmNoYW5nZUFjdGl2ZUNvbG9yKGNvbG9yKTtcbiAgICAgICAgdGhpcy5jaGFuZ2VJbWFnZShpbWFnZVNyYyk7XG4gICAgfVxuXG4gICAgY2hhbmdlQWN0aXZlQ29sb3IobmV3Q29sb3I6IEhUTUxBbmNob3JFbGVtZW50KTogdm9pZCB7XG4gICAgICAgIHRoaXMuY29sb3JzLmZvckVhY2goKGNvbG9yOiBIVE1MQW5jaG9yRWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgY29sb3IuY2xhc3NMaXN0LnJlbW92ZShgJHt0aGlzLm5hbWV9X19jb2xvci0tYWN0aXZlYCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG5ld0NvbG9yLmNsYXNzTGlzdC5hZGQoYCR7dGhpcy5uYW1lfV9fY29sb3ItLWFjdGl2ZWApO1xuICAgIH1cblxuICAgIGNoYW5nZUltYWdlKG5ld0ltYWdlU3JjOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pbWFnZXMuZm9yRWFjaCgoaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChpbWFnZS5zcmMgIT09IG5ld0ltYWdlU3JjKSB7XG4gICAgICAgICAgICAgICAgaW1hZ2Uuc3JjID0gbmV3SW1hZ2VTcmM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldCB0YXJnZXRJbWFnZVNlbGVjdG9yKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgndGFyZ2V0LWltYWdlLXNlbGVjdG9yJyk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgZ2V0IGFzIGNvbmZpZyB9IGZyb20gJy4uL2FwcC9jb25maWcnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElDb21wb25lbnRDb250cnVjdG9yIHtcbiAgICBuZXcoKTogQ29tcG9uZW50XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNvbXBvbmVudEltcG9ydGVyIHtcbiAgICAoKTogUHJvbWlzZTx7IGRlZmF1bHQ6IElDb21wb25lbnRDb250cnVjdG9yIH0+XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIENvbXBvbmVudCBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgICByZWFkb25seSBuYW1lOiBzdHJpbmdcbiAgICByZWFkb25seSBqc05hbWU6IHN0cmluZ1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubmFtZSA9IHRoaXMudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB0aGlzLmpzTmFtZSA9IGBqcy0ke3RoaXMubmFtZX1gO1xuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoY29uZmlnKCkuZXZlbnRzLnJlYWR5LCAoKSA9PiB0aGlzLnJlYWR5Q2FsbGJhY2soKSwge1xuICAgICAgICAgICAgY2FwdHVyZTogZmFsc2UsXG4gICAgICAgICAgICBvbmNlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCByZWFkeUNhbGxiYWNrKCk6IHZvaWRcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=