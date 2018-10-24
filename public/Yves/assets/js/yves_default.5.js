(window["webpackJsonp_yves_default"] = window["webpackJsonp_yves_default"] || []).push([[5],{

/***/ "./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/components/molecules/toggler-hash/toggler-hash.ts":
/*!*********************************************************************************************************************************!*\
  !*** ./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/components/molecules/toggler-hash/toggler-hash.ts ***!
  \*********************************************************************************************************************************/
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

var TogglerHash = (function (_super) {
    __extends(TogglerHash, _super);
    function TogglerHash() {
        var _this = _super.call(this) || this;
        _this.targets = Array.from(document.querySelectorAll(_this.targetSelector));
        return _this;
    }
    TogglerHash.prototype.readyCallback = function () {
        this.checkHash();
        this.mapEvents();
    };
    TogglerHash.prototype.mapEvents = function () {
        var _this = this;
        window.addEventListener('hashchange', function (event) { return _this.onHashChange(event); });
    };
    TogglerHash.prototype.onHashChange = function (event) {
        this.checkHash();
    };
    TogglerHash.prototype.checkHash = function () {
        if (this.triggerHash === this.hash) {
            this.toggle(this.addClassWhenHashInUrl);
            return;
        }
        this.toggle(!this.addClassWhenHashInUrl);
    };
    TogglerHash.prototype.toggle = function (addClass) {
        var _this = this;
        this.targets.forEach(function (target) { return target.classList.toggle(_this.classToToggle, addClass); });
    };
    Object.defineProperty(TogglerHash.prototype, "hash", {
        get: function () {
            return window.location.hash;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TogglerHash.prototype, "triggerHash", {
        get: function () {
            return this.getAttribute('trigger-hash');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TogglerHash.prototype, "targetSelector", {
        get: function () {
            return this.getAttribute('target-selector');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TogglerHash.prototype, "classToToggle", {
        get: function () {
            return this.getAttribute('class-to-toggle');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TogglerHash.prototype, "addClassWhenHashInUrl", {
        get: function () {
            return this.hasAttribute('add-class-when-hash-in-url');
        },
        enumerable: true,
        configurable: true
    });
    return TogglerHash;
}(_models_component__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (TogglerHash);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi92ZW5kb3Ivc3ByeWtlci1zaG9wL3Nob3AtdWkvc3JjL1NwcnlrZXJTaG9wL1l2ZXMvU2hvcFVpL1RoZW1lL2RlZmF1bHQvY29tcG9uZW50cy9tb2xlY3VsZXMvdG9nZ2xlci1oYXNoL3RvZ2dsZXItaGFzaC50cyIsIndlYnBhY2s6Ly8vLi92ZW5kb3Ivc3ByeWtlci1zaG9wL3Nob3AtdWkvc3JjL1NwcnlrZXJTaG9wL1l2ZXMvU2hvcFVpL1RoZW1lL2RlZmF1bHQvbW9kZWxzL2NvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWtEO0FBRWxEO0lBQXlDLCtCQUFTO0lBRzlDO1FBQUEsWUFDSSxpQkFBTyxTQUVWO1FBREcsS0FBSSxDQUFDLE9BQU8sR0FBa0IsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7O0lBQzdGLENBQUM7SUFFUyxtQ0FBYSxHQUF2QjtRQUNJLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVTLCtCQUFTLEdBQW5CO1FBQUEsaUJBRUM7UUFERyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLFVBQUMsS0FBWSxJQUFLLFlBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEVBQXhCLENBQXdCLENBQUMsQ0FBQztJQUN0RixDQUFDO0lBRVMsa0NBQVksR0FBdEIsVUFBdUIsS0FBWTtRQUMvQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELCtCQUFTLEdBQVQ7UUFDSSxJQUFJLElBQUksQ0FBQyxXQUFXLEtBQUssSUFBSSxDQUFDLElBQUksRUFBRTtZQUNoQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1lBQ3hDLE9BQU87U0FDVjtRQUVELElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQsNEJBQU0sR0FBTixVQUFPLFFBQWlCO1FBQXhCLGlCQUVDO1FBREcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQyxNQUFtQixJQUFLLGFBQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUksQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDLEVBQXJELENBQXFELENBQUMsQ0FBQztJQUN6RyxDQUFDO0lBRUQsc0JBQUksNkJBQUk7YUFBUjtZQUNJLE9BQU8sTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7UUFDaEMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxvQ0FBVzthQUFmO1lBQ0ksT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzdDLENBQUM7OztPQUFBO0lBRUQsc0JBQUksdUNBQWM7YUFBbEI7WUFDSSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUNoRCxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHNDQUFhO2FBQWpCO1lBQ0ksT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDaEQsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSw4Q0FBcUI7YUFBekI7WUFDSSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsNEJBQTRCLENBQUMsQ0FBQztRQUMzRCxDQUFDOzs7T0FBQTtJQUNMLGtCQUFDO0FBQUQsQ0FBQyxDQXJEd0MseURBQVMsR0FxRGpEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZENkM7QUFVOUM7SUFBZ0QsNkJBQVc7SUFJdkQ7UUFBQSxZQUNJLGlCQUFPLFNBUVY7UUFQRyxLQUFJLENBQUMsSUFBSSxHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDdkMsS0FBSSxDQUFDLE1BQU0sR0FBRyxRQUFNLEtBQUksQ0FBQyxJQUFNLENBQUM7UUFFaEMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLHVEQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLGNBQU0sWUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFwQixDQUFvQixFQUFFO1lBQ3pFLE9BQU8sRUFBRSxLQUFLO1lBQ2QsSUFBSSxFQUFFLElBQUk7U0FDYixDQUFDLENBQUM7O0lBQ1AsQ0FBQztJQUdMLGdCQUFDO0FBQUQsQ0FBQyxDQWhCK0MsV0FBVyxHQWdCMUQiLCJmaWxlIjoiLi9qcy95dmVzX2RlZmF1bHQuNS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vLi4vLi4vbW9kZWxzL2NvbXBvbmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZ2dsZXJIYXNoIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICByZWFkb25seSB0YXJnZXRzOiBIVE1MRWxlbWVudFtdXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy50YXJnZXRzID0gPEhUTUxFbGVtZW50W10+QXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMudGFyZ2V0U2VsZWN0b3IpKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgcmVhZHlDYWxsYmFjaygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jaGVja0hhc2goKTtcbiAgICAgICAgdGhpcy5tYXBFdmVudHMoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgbWFwRXZlbnRzKCk6IHZvaWQge1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsIChldmVudDogRXZlbnQpID0+IHRoaXMub25IYXNoQ2hhbmdlKGV2ZW50KSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uSGFzaENoYW5nZShldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jaGVja0hhc2goKTtcbiAgICB9XG5cbiAgICBjaGVja0hhc2goKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLnRyaWdnZXJIYXNoID09PSB0aGlzLmhhc2gpIHtcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlKHRoaXMuYWRkQ2xhc3NXaGVuSGFzaEluVXJsKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudG9nZ2xlKCF0aGlzLmFkZENsYXNzV2hlbkhhc2hJblVybCk7XG4gICAgfVxuXG4gICAgdG9nZ2xlKGFkZENsYXNzOiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIHRoaXMudGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQ6IEhUTUxFbGVtZW50KSA9PiB0YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSh0aGlzLmNsYXNzVG9Ub2dnbGUsIGFkZENsYXNzKSk7XG4gICAgfVxuXG4gICAgZ2V0IGhhc2goKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5oYXNoO1xuICAgIH1cblxuICAgIGdldCB0cmlnZ2VySGFzaCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ3RyaWdnZXItaGFzaCcpO1xuICAgIH1cblxuICAgIGdldCB0YXJnZXRTZWxlY3RvcigpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ3RhcmdldC1zZWxlY3RvcicpO1xuICAgIH1cblxuICAgIGdldCBjbGFzc1RvVG9nZ2xlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnY2xhc3MtdG8tdG9nZ2xlJyk7XG4gICAgfVxuXG4gICAgZ2V0IGFkZENsYXNzV2hlbkhhc2hJblVybCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFzQXR0cmlidXRlKCdhZGQtY2xhc3Mtd2hlbi1oYXNoLWluLXVybCcpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IGdldCBhcyBjb25maWcgfSBmcm9tICcuLi9hcHAvY29uZmlnJztcblxuZXhwb3J0IGludGVyZmFjZSBJQ29tcG9uZW50Q29udHJ1Y3RvciB7XG4gICAgbmV3KCk6IENvbXBvbmVudFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElDb21wb25lbnRJbXBvcnRlciB7XG4gICAgKCk6IFByb21pc2U8eyBkZWZhdWx0OiBJQ29tcG9uZW50Q29udHJ1Y3RvciB9PlxufVxuXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBDb21wb25lbnQgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gICAgcmVhZG9ubHkgbmFtZTogc3RyaW5nXG4gICAgcmVhZG9ubHkganNOYW1lOiBzdHJpbmdcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm5hbWUgPSB0aGlzLnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgdGhpcy5qc05hbWUgPSBganMtJHt0aGlzLm5hbWV9YDtcblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKGNvbmZpZygpLmV2ZW50cy5yZWFkeSwgKCkgPT4gdGhpcy5yZWFkeUNhbGxiYWNrKCksIHtcbiAgICAgICAgICAgIGNhcHR1cmU6IGZhbHNlLFxuICAgICAgICAgICAgb25jZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgcmVhZHlDYWxsYmFjaygpOiB2b2lkXG59XG4iXSwic291cmNlUm9vdCI6IiJ9