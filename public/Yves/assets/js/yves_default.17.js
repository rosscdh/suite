(window["webpackJsonp_yves_default"] = window["webpackJsonp_yves_default"] || []).push([[17],{

/***/ "./vendor/spryker-shop/quick-order-page/src/SprykerShop/Yves/QuickOrderPage/Theme/default/components/molecules/quick-order-form/quick-order-form.ts":
/*!**********************************************************************************************************************************************************!*\
  !*** ./vendor/spryker-shop/quick-order-page/src/SprykerShop/Yves/QuickOrderPage/Theme/default/components/molecules/quick-order-form/quick-order-form.ts ***!
  \**********************************************************************************************************************************************************/
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

var QuickOrderForm = (function (_super) {
    __extends(QuickOrderForm, _super);
    function QuickOrderForm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    QuickOrderForm.prototype.readyCallback = function () {
        this.form = this.querySelector("." + this.jsName + "__form");
        this.fieldList = this.querySelector("." + this.jsName + "__list");
        this.addRowTrigger = this.querySelector("." + this.jsName + "__add-row-trigger");
        this.addRowAjaxProvider = this.querySelector("." + this.jsName + "__add-row-provider");
        this.removeRowAjaxProvider = this.querySelector("." + this.jsName + "__remove-row-provider");
        this.registerRemoveRowTriggers();
        this.mapEvents();
    };
    QuickOrderForm.prototype.registerRemoveRowTriggers = function () {
        this.removeRowTriggers = Array.from(this.querySelectorAll("." + this.jsName + "__remove-row-trigger"));
    };
    QuickOrderForm.prototype.mapEvents = function () {
        var _this = this;
        this.addRowTrigger.addEventListener('click', function (event) { return _this.onAddRowClick(event); });
        this.mapRemoveRowTriggersEvents();
    };
    QuickOrderForm.prototype.mapRemoveRowTriggersEvents = function () {
        var _this = this;
        this.removeRowTriggers.forEach(function (trigger) { return trigger.addEventListener('click', function (event) { return _this.onRemoveRowClick(event); }); });
    };
    QuickOrderForm.prototype.onAddRowClick = function (event) {
        event.preventDefault();
        this.addRow();
    };
    QuickOrderForm.prototype.onRemoveRowClick = function (event) {
        event.preventDefault();
        var row = event.currentTarget;
        var rowIndex = row.getAttribute('data-row-index');
        this.removeRow(rowIndex);
    };
    QuickOrderForm.prototype.addRow = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        data = this.getFormData();
                        return [4, this.addRowAjaxProvider.fetch(data)];
                    case 1:
                        response = _a.sent();
                        this.fieldList.innerHTML = response;
                        this.registerRemoveRowTriggers();
                        this.mapRemoveRowTriggersEvents();
                        return [2];
                }
            });
        });
    };
    QuickOrderForm.prototype.removeRow = function (rowIndex) {
        return __awaiter(this, void 0, void 0, function () {
            var data, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        data = this.getFormData({
                            'row-index': rowIndex
                        });
                        return [4, this.removeRowAjaxProvider.fetch(data)];
                    case 1:
                        response = _a.sent();
                        this.fieldList.innerHTML = response;
                        this.registerRemoveRowTriggers();
                        this.mapRemoveRowTriggersEvents();
                        return [2];
                }
            });
        });
    };
    QuickOrderForm.prototype.getFormData = function (appendData) {
        var data = new FormData(this.form);
        if (appendData) {
            Object.keys(appendData).forEach(function (key) { return data.append(key, appendData[key]); });
        }
        return data;
    };
    return QuickOrderForm;
}(ShopUi_models_component__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (QuickOrderForm);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi92ZW5kb3Ivc3ByeWtlci1zaG9wL3F1aWNrLW9yZGVyLXBhZ2Uvc3JjL1NwcnlrZXJTaG9wL1l2ZXMvUXVpY2tPcmRlclBhZ2UvVGhlbWUvZGVmYXVsdC9jb21wb25lbnRzL21vbGVjdWxlcy9xdWljay1vcmRlci1mb3JtL3F1aWNrLW9yZGVyLWZvcm0udHMiLCJ3ZWJwYWNrOi8vLy4vdmVuZG9yL3NwcnlrZXItc2hvcC9zaG9wLXVpL3NyYy9TcHJ5a2VyU2hvcC9ZdmVzL1Nob3BVaS9UaGVtZS9kZWZhdWx0L21vZGVscy9jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWdEO0FBR2hEO0lBQTRDLGtDQUFTO0lBQXJEOztJQTBFQSxDQUFDO0lBbEVhLHNDQUFhLEdBQXZCO1FBQ0ksSUFBSSxDQUFDLElBQUksR0FBb0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFJLElBQUksQ0FBQyxNQUFNLFdBQVEsQ0FBQyxDQUFDO1FBQ3pFLElBQUksQ0FBQyxTQUFTLEdBQWdCLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBSSxJQUFJLENBQUMsTUFBTSxXQUFRLENBQUMsQ0FBQztRQUMxRSxJQUFJLENBQUMsYUFBYSxHQUFnQixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQUksSUFBSSxDQUFDLE1BQU0sc0JBQW1CLENBQUMsQ0FBQztRQUN6RixJQUFJLENBQUMsa0JBQWtCLEdBQWlCLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBSSxJQUFJLENBQUMsTUFBTSx1QkFBb0IsQ0FBQyxDQUFDO1FBQ2hHLElBQUksQ0FBQyxxQkFBcUIsR0FBaUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFJLElBQUksQ0FBQyxNQUFNLDBCQUF1QixDQUFDLENBQUM7UUFDdEcsSUFBSSxDQUFDLHlCQUF5QixFQUFFLENBQUM7UUFDakMsSUFBSSxDQUFDLFNB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Ozs7O0FDN0U2QztBQVU5QztJQUFnRCw2QkFBVztJQUl2RDtRQUFBLFlBQ0ksaUJBQU8sU0FRVjtRQVBHLEtBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN2QyxLQUFJLENBQUMsTUFBTSxHQUFHLFFBQU0sS0FBSSxDQUFDLElBQU0sQ0FBQztRQUVoQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsdURBQU0sRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsY0FBTSxZQUFJLENBQUMsYUFBYSxFQUFFLEVBQXBCLENBQW9CLEVBQUU7WUFDekUsT0FBTyxFQUFFLEtBQUs7WUFDZCxJQUFJLEVBQUUsSUFBSTtTQUNiLENBQUMsQ0FBQzs7SUFDUCxDQUFDO0lBR0wsZ0JBQUM7QUFBRCxDQUFDLENBaEIrQyxXQUFXLEdBZ0IxRCIsImZpbGUiOiIuL2pzL3l2ZXNfZGVmYXVsdC4xNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb21wb25lbnQgZnJvbSAnU2hvcFVpL21vZGVscy9jb21wb25lbnQnO1xuaW1wb3J0IEFqYXhQcm92aWRlciBmcm9tICdTaG9wVWkvY29tcG9uZW50cy9tb2xlY3VsZXMvYWpheC1wcm92aWRlci9hamF4LXByb3ZpZGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUXVpY2tPcmRlckZvcm0gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGZvcm06IEhUTUxGb3JtRWxlbWVudFxuICAgIGZpZWxkTGlzdDogSFRNTEVsZW1lbnRcbiAgICBhZGRSb3dUcmlnZ2VyOiBIVE1MRWxlbWVudFxuICAgIHJlbW92ZVJvd1RyaWdnZXJzOiBIVE1MRWxlbWVudFtdXG4gICAgYWRkUm93QWpheFByb3ZpZGVyOiBBamF4UHJvdmlkZXJcbiAgICByZW1vdmVSb3dBamF4UHJvdmlkZXI6IEFqYXhQcm92aWRlclxuXG4gICAgcHJvdGVjdGVkIHJlYWR5Q2FsbGJhY2soKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZm9ybSA9IDxIVE1MRm9ybUVsZW1lbnQ+dGhpcy5xdWVyeVNlbGVjdG9yKGAuJHt0aGlzLmpzTmFtZX1fX2Zvcm1gKTtcbiAgICAgICAgdGhpcy5maWVsZExpc3QgPSA8SFRNTEVsZW1lbnQ+dGhpcy5xdWVyeVNlbGVjdG9yKGAuJHt0aGlzLmpzTmFtZX1fX2xpc3RgKTtcbiAgICAgICAgdGhpcy5hZGRSb3dUcmlnZ2VyID0gPEhUTUxFbGVtZW50PnRoaXMucXVlcnlTZWxlY3RvcihgLiR7dGhpcy5qc05hbWV9X19hZGQtcm93LXRyaWdnZXJgKTtcbiAgICAgICAgdGhpcy5hZGRSb3dBamF4UHJvdmlkZXIgPSA8QWpheFByb3ZpZGVyPnRoaXMucXVlcnlTZWxlY3RvcihgLiR7dGhpcy5qc05hbWV9X19hZGQtcm93LXByb3ZpZGVyYCk7XG4gICAgICAgIHRoaXMucmVtb3ZlUm93QWpheFByb3ZpZGVyID0gPEFqYXhQcm92aWRlcj50aGlzLnF1ZXJ5U2VsZWN0b3IoYC4ke3RoaXMuanNOYW1lfV9fcmVtb3ZlLXJvdy1wcm92aWRlcmApO1xuICAgICAgICB0aGlzLnJlZ2lzdGVyUmVtb3ZlUm93VHJpZ2dlcnMoKTtcbiAgICAgICAgdGhpcy5tYXBFdmVudHMoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgcmVnaXN0ZXJSZW1vdmVSb3dUcmlnZ2VycygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yZW1vdmVSb3dUcmlnZ2VycyA9IDxIVE1MRWxlbWVudFtdPkFycmF5LmZyb20odGhpcy5xdWVyeVNlbGVjdG9yQWxsKGAuJHt0aGlzLmpzTmFtZX1fX3JlbW92ZS1yb3ctdHJpZ2dlcmApKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgbWFwRXZlbnRzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmFkZFJvd1RyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQ6IEV2ZW50KSA9PiB0aGlzLm9uQWRkUm93Q2xpY2soZXZlbnQpKTtcbiAgICAgICAgdGhpcy5tYXBSZW1vdmVSb3dUcmlnZ2Vyc0V2ZW50cygpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBtYXBSZW1vdmVSb3dUcmlnZ2Vyc0V2ZW50cygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yZW1vdmVSb3dUcmlnZ2Vycy5mb3JFYWNoKCh0cmlnZ2VyOiBIVE1MRWxlbWVudCkgPT4gdHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudDogRXZlbnQpID0+IHRoaXMub25SZW1vdmVSb3dDbGljayhldmVudCkpKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25BZGRSb3dDbGljayhldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5hZGRSb3coKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25SZW1vdmVSb3dDbGljayhldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBjb25zdCByb3cgPSA8SFRNTEVsZW1lbnQ+ZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICAgICAgY29uc3Qgcm93SW5kZXggPSByb3cuZ2V0QXR0cmlidXRlKCdkYXRhLXJvdy1pbmRleCcpO1xuICAgICAgICB0aGlzLnJlbW92ZVJvdyhyb3dJbmRleCk7XG4gICAgfVxuXG4gICAgYXN5bmMgYWRkUm93KCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5nZXRGb3JtRGF0YSgpO1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuYWRkUm93QWpheFByb3ZpZGVyLmZldGNoKGRhdGEpO1xuXG4gICAgICAgIHRoaXMuZmllbGRMaXN0LmlubmVySFRNTCA9IHJlc3BvbnNlO1xuICAgICAgICB0aGlzLnJlZ2lzdGVyUmVtb3ZlUm93VHJpZ2dlcnMoKTtcbiAgICAgICAgdGhpcy5tYXBSZW1vdmVSb3dUcmlnZ2Vyc0V2ZW50cygpO1xuICAgIH1cblxuICAgIGFzeW5jIHJlbW92ZVJvdyhyb3dJbmRleDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmdldEZvcm1EYXRhKHtcbiAgICAgICAgICAgICdyb3ctaW5kZXgnOiByb3dJbmRleFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLnJlbW92ZVJvd0FqYXhQcm92aWRlci5mZXRjaChkYXRhKTtcblxuICAgICAgICB0aGlzLmZpZWxkTGlzdC5pbm5lckhUTUwgPSByZXNwb25zZTtcbiAgICAgICAgdGhpcy5yZWdpc3RlclJlbW92ZVJvd1RyaWdnZXJzKCk7XG4gICAgICAgIHRoaXMubWFwUmVtb3ZlUm93VHJpZ2dlcnNFdmVudHMoKTtcbiAgICB9XG5cbiAgICBnZXRGb3JtRGF0YShhcHBlbmREYXRhPzogb2JqZWN0KTogRm9ybURhdGEge1xuICAgICAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKHRoaXMuZm9ybSk7XG5cbiAgICAgICAgaWYgKGFwcGVuZERhdGEpIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGFwcGVuZERhdGEpLmZvckVhY2goKGtleTogc3RyaW5nKSA9PiBkYXRhLmFwcGVuZChrZXksIGFwcGVuZERhdGFba2V5XSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgeyBnZXQgYXMgY29uZmlnIH0gZnJvbSAnLi4vYXBwL2NvbmZpZyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNvbXBvbmVudENvbnRydWN0b3Ige1xuICAgIG5ldygpOiBDb21wb25lbnRcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJQ29tcG9uZW50SW1wb3J0ZXIge1xuICAgICgpOiBQcm9taXNlPHsgZGVmYXVsdDogSUNvbXBvbmVudENvbnRydWN0b3IgfT5cbn1cblxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgQ29tcG9uZW50IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICAgIHJlYWRvbmx5IG5hbWU6IHN0cmluZ1xuICAgIHJlYWRvbmx5IGpzTmFtZTogc3RyaW5nXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5uYW1lID0gdGhpcy50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHRoaXMuanNOYW1lID0gYGpzLSR7dGhpcy5uYW1lfWA7XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihjb25maWcoKS5ldmVudHMucmVhZHksICgpID0+IHRoaXMucmVhZHlDYWxsYmFjaygpLCB7XG4gICAgICAgICAgICBjYXB0dXJlOiBmYWxzZSxcbiAgICAgICAgICAgIG9uY2U6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IHJlYWR5Q2FsbGJhY2soKTogdm9pZFxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==