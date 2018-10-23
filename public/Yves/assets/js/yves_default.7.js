(window["webpackJsonp_yves_default"] = window["webpackJsonp_yves_default"] || []).push([[7],{

/***/ "./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/components/molecules/simple-carousel/simple-carousel.ts":
/*!***************************************************************************************************************************************!*\
  !*** ./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/components/molecules/simple-carousel/simple-carousel.ts ***!
  \***************************************************************************************************************************************/
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

var SimpleCarousel = (function (_super) {
    __extends(SimpleCarousel, _super);
    function SimpleCarousel() {
        var _this = _super.call(this) || this;
        _this.viewCurrentIndex = 0;
        _this.dotSelector = _this.jsName + "__dot";
        _this.dotCurrentModifier = _this.name + "__dot--current";
        return _this;
    }
    SimpleCarousel.prototype.readyCallback = function () {
        this.slidesCount = this.getElementsByClassName(this.jsName + "__slide").length;
        if (this.slidesCount <= 1) {
            return;
        }
        this.triggerPrev = this.querySelector("." + this.jsName + "__prev");
        this.triggerNext = this.querySelector("." + this.jsName + "__next");
        this.slider = this.querySelector("." + this.jsName + "__slider");
        this.slideWidth = 100 / this.slidesToShow;
        this.dots = Array.from(this.getElementsByClassName(this.dotSelector));
        this.viewsCount = this.getViewsCount();
        this.mapEvents();
    };
    SimpleCarousel.prototype.getViewsCount = function () {
        return Math.ceil((this.slidesCount - this.slidesToShow) / this.slidesToScroll) + 1;
    };
    SimpleCarousel.prototype.mapEvents = function () {
        var _this = this;
        this.triggerPrev.addEventListener('click', function (event) { return _this.onPrevClick(event); });
        this.triggerNext.addEventListener('click', function (event) { return _this.onNextClick(event); });
        this.dots.forEach(function (dot) { return dot.addEventListener('click', function (event) { return _this.onDotClick(event); }); });
    };
    SimpleCarousel.prototype.onPrevClick = function (event) {
        event.preventDefault();
        this.loadPrevViewIndex();
        this.slide();
        this.updateCurrentDot();
    };
    SimpleCarousel.prototype.onNextClick = function (event) {
        event.preventDefault();
        this.loadNextViewIndex();
        this.slide();
        this.updateCurrentDot();
    };
    SimpleCarousel.prototype.onDotClick = function (event) {
        event.preventDefault();
        this.loadViewIndexFromDot(event.srcElement);
        this.slide();
        this.updateCurrentDot();
    };
    SimpleCarousel.prototype.loadPrevViewIndex = function () {
        this.viewCurrentIndex = this.viewCurrentIndex - 1;
        if (this.viewCurrentIndex < 0) {
            this.viewCurrentIndex = this.viewsCount - 1;
        }
    };
    SimpleCarousel.prototype.loadNextViewIndex = function () {
        this.viewCurrentIndex = this.viewCurrentIndex + 1;
        if (this.viewCurrentIndex >= this.viewsCount) {
            this.viewCurrentIndex = 0;
        }
    };
    SimpleCarousel.prototype.loadViewIndexFromDot = function (dot) {
        this.viewCurrentIndex = this.dots.indexOf(dot);
        if (this.viewCurrentIndex === -1) {
            this.viewCurrentIndex = 0;
        }
    };
    SimpleCarousel.prototype.slide = function () {
        var slidesToSlide = this.slidesToScroll * this.viewCurrentIndex;
        if (this.slidesToScroll + slidesToSlide > this.slidesCount) {
            slidesToSlide = slidesToSlide - (this.slidesCount - slidesToSlide);
        }
        var offset = -(slidesToSlide * this.slideWidth);
        this.slider.style.transform = "translateX(" + offset + "%)";
    };
    SimpleCarousel.prototype.updateCurrentDot = function () {
        if (this.dots.length === 0) {
            return;
        }
        this
            .querySelector("." + this.dotSelector + "." + this.dotCurrentModifier)
            .classList
            .remove(this.dotCurrentModifier);
        this
            .dots[this.viewCurrentIndex]
            .classList
            .add(this.dotCurrentModifier);
    };
    Object.defineProperty(SimpleCarousel.prototype, "slidesToShow", {
        get: function () {
            return parseInt(this.getAttribute('slides-to-show') || '0');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SimpleCarousel.prototype, "slidesToScroll", {
        get: function () {
            return parseInt(this.getAttribute('slides-to-scroll') || '0');
        },
        enumerable: true,
        configurable: true
    });
    return SimpleCarousel;
}(_models_component__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (SimpleCarousel);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi92ZW5kb3Ivc3ByeWtlci1zaG9wL3Nob3AtdWkvc3JjL1NwcnlrZXJTaG9wL1l2ZXMvU2hvcFVpL1RoZW1lL2RlZmF1bHQvY29tcG9uZW50cy9tb2xlY3VsZXMvc2ltcGxlLWNhcm91c2VsL3NpbXBsZS1jYXJvdXNlbC50cyIsIndlYnBhY2s6Ly8vLi92ZW5kb3Ivc3ByeWtlci1zaG9wL3Nob3AtdWkvc3JjL1NwcnlrZXJTaG9wL1l2ZXMvU2hvcFVpL1RoZW1lL2RlZmF1bHQvbW9kZWxzL2NvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWtEO0FBRWxEO0lBQTRDLGtDQUFTO0lBYWpEO1FBQUEsWUFDSSxpQkFBTyxTQUlWO1FBVkQsc0JBQWdCLEdBQVcsQ0FBQztRQVF4QixLQUFJLENBQUMsV0FBVyxHQUFNLEtBQUksQ0FBQyxNQUFNLFVBQU8sQ0FBQztRQUN6QyxLQUFJLENBQUMsa0JBQWtCLEdBQU0sS0FBSSxDQUFDLElBQUksbUJBQWdCLENBQUM7O0lBQzNELENBQUM7SUFFUyxzQ0FBYSxHQUF2QjtRQUNJLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFJLElBQUksQ0FBQyxNQUFNLFlBQVMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUUvRSxJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxFQUFFO1lBQ3ZCLE9BQU87U0FDVjtRQUVELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFJLElBQUksQ0FBQyxNQUFNLFdBQVEsQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFJLElBQUksQ0FBQyxNQUFNLFdBQVEsQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFJLElBQUksQ0FBQyxNQUFNLGFBQVUs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QztRQUNoRSxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDBDQUFjO2FBQWxCO1lBQ0ksT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ2xFLENBQUM7OztPQUFBO0lBQ0wscUJBQUM7QUFBRCxDQUFDLENBOUgyQyx5REFBUyxHQThIcEQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEk2QztBQVU5QztJQUFnRCw2QkFBVztJQUl2RDtRQUFBLFlBQ0ksaUJBQU8sU0FRVjtRQVBHLEtBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN2QyxLQUFJLENBQUMsTUFBTSxHQUFHLFFBQU0sS0FBSSxDQUFDLElBQU0sQ0FBQztRQUVoQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsdURBQU0sRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsY0FBTSxZQUFJLENBQUMsYUFBYSxFQUFFLEVBQXBCLENBQW9CLEVBQUU7WUFDekUsT0FBTyxFQUFFLEtBQUs7WUFDZCxJQUFJLEVBQUUsSUFBSTtTQUNiLENBQUMsQ0FBQzs7SUFDUCxDQUFDO0lBR0wsZ0JBQUM7QUFBRCxDQUFDLENBaEIrQyxXQUFXLEdBZ0IxRCIsImZpbGUiOiIuL2pzL3l2ZXNfZGVmYXVsdC43LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi8uLi8uLi9tb2RlbHMvY29tcG9uZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2ltcGxlQ2Fyb3VzZWwgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHRyaWdnZXJQcmV2OiBIVE1MRWxlbWVudFxuICAgIHRyaWdnZXJOZXh0OiBIVE1MRWxlbWVudFxuICAgIHNsaWRlcjogSFRNTEVsZW1lbnRcbiAgICBzbGlkZXNDb3VudDogbnVtYmVyXG4gICAgc2xpZGVXaWR0aDogbnVtYmVyXG4gICAgZG90czogSFRNTEVsZW1lbnRbXVxuICAgIHZpZXdzQ291bnQ6IG51bWJlclxuICAgIHZpZXdDdXJyZW50SW5kZXg6IG51bWJlciA9IDBcblxuICAgIHJlYWRvbmx5IGRvdFNlbGVjdG9yOiBzdHJpbmdcbiAgICByZWFkb25seSBkb3RDdXJyZW50TW9kaWZpZXI6IHN0cmluZ1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5kb3RTZWxlY3RvciA9IGAke3RoaXMuanNOYW1lfV9fZG90YDtcbiAgICAgICAgdGhpcy5kb3RDdXJyZW50TW9kaWZpZXIgPSBgJHt0aGlzLm5hbWV9X19kb3QtLWN1cnJlbnRgO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCByZWFkeUNhbGxiYWNrKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnNsaWRlc0NvdW50ID0gdGhpcy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke3RoaXMuanNOYW1lfV9fc2xpZGVgKS5sZW5ndGg7XG5cbiAgICAgICAgaWYgKHRoaXMuc2xpZGVzQ291bnQgPD0gMSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy50cmlnZ2VyUHJldiA9IHRoaXMucXVlcnlTZWxlY3RvcihgLiR7dGhpcy5qc05hbWV9X19wcmV2YCk7XG4gICAgICAgIHRoaXMudHJpZ2dlck5leHQgPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoYC4ke3RoaXMuanNOYW1lfV9fbmV4dGApO1xuICAgICAgICB0aGlzLnNsaWRlciA9IHRoaXMucXVlcnlTZWxlY3RvcihgLiR7dGhpcy5qc05hbWV9X19zbGlkZXJgKTtcbiAgICAgICAgdGhpcy5zbGlkZVdpZHRoID0gMTAwIC8gdGhpcy5zbGlkZXNUb1Nob3c7XG4gICAgICAgIHRoaXMuZG90cyA9IDxIVE1MRWxlbWVudFtdPkFycmF5LmZyb20odGhpcy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKHRoaXMuZG90U2VsZWN0b3IpKTtcbiAgICAgICAgdGhpcy52aWV3c0NvdW50ID0gdGhpcy5nZXRWaWV3c0NvdW50KCk7XG5cbiAgICAgICAgdGhpcy5tYXBFdmVudHMoKTtcbiAgICB9XG5cbiAgICBnZXRWaWV3c0NvdW50KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBNYXRoLmNlaWwoKHRoaXMuc2xpZGVzQ291bnQgLSB0aGlzLnNsaWRlc1RvU2hvdykgLyB0aGlzLnNsaWRlc1RvU2Nyb2xsKSArIDE7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG1hcEV2ZW50cygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy50cmlnZ2VyUHJldi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudDogRXZlbnQpID0+IHRoaXMub25QcmV2Q2xpY2soZXZlbnQpKTtcbiAgICAgICAgdGhpcy50cmlnZ2VyTmV4dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudDogRXZlbnQpID0+IHRoaXMub25OZXh0Q2xpY2soZXZlbnQpKTtcbiAgICAgICAgdGhpcy5kb3RzLmZvckVhY2goKGRvdDogSFRNTEVsZW1lbnQpID0+IGRvdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudDogRXZlbnQpID0+IHRoaXMub25Eb3RDbGljayhldmVudCkpKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25QcmV2Q2xpY2soZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMubG9hZFByZXZWaWV3SW5kZXgoKTtcbiAgICAgICAgdGhpcy5zbGlkZSgpO1xuICAgICAgICB0aGlzLnVwZGF0ZUN1cnJlbnREb3QoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25OZXh0Q2xpY2soZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMubG9hZE5leHRWaWV3SW5kZXgoKTtcbiAgICAgICAgdGhpcy5zbGlkZSgpO1xuICAgICAgICB0aGlzLnVwZGF0ZUN1cnJlbnREb3QoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25Eb3RDbGljayhldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5sb2FkVmlld0luZGV4RnJvbURvdCg8SFRNTEVsZW1lbnQ+ZXZlbnQuc3JjRWxlbWVudClcbiAgICAgICAgdGhpcy5zbGlkZSgpO1xuICAgICAgICB0aGlzLnVwZGF0ZUN1cnJlbnREb3QoKTtcbiAgICB9XG5cbiAgICBsb2FkUHJldlZpZXdJbmRleCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy52aWV3Q3VycmVudEluZGV4ID0gdGhpcy52aWV3Q3VycmVudEluZGV4IC0gMTtcblxuICAgICAgICBpZiAodGhpcy52aWV3Q3VycmVudEluZGV4IDwgMCkge1xuICAgICAgICAgICAgdGhpcy52aWV3Q3VycmVudEluZGV4ID0gdGhpcy52aWV3c0NvdW50IC0gMTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxvYWROZXh0Vmlld0luZGV4KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnZpZXdDdXJyZW50SW5kZXggPSB0aGlzLnZpZXdDdXJyZW50SW5kZXggKyAxO1xuXG4gICAgICAgIGlmICh0aGlzLnZpZXdDdXJyZW50SW5kZXggPj0gdGhpcy52aWV3c0NvdW50KSB7XG4gICAgICAgICAgICB0aGlzLnZpZXdDdXJyZW50SW5kZXggPSAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbG9hZFZpZXdJbmRleEZyb21Eb3QoZG90OiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgICAgICB0aGlzLnZpZXdDdXJyZW50SW5kZXggPSB0aGlzLmRvdHMuaW5kZXhPZihkb3QpO1xuXG4gICAgICAgIGlmICh0aGlzLnZpZXdDdXJyZW50SW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLnZpZXdDdXJyZW50SW5kZXggPSAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2xpZGUoKTogdm9pZCB7XG4gICAgICAgIGxldCBzbGlkZXNUb1NsaWRlID0gdGhpcy5zbGlkZXNUb1Njcm9sbCAqIHRoaXMudmlld0N1cnJlbnRJbmRleDtcblxuICAgICAgICBpZiAodGhpcy5zbGlkZXNUb1Njcm9sbCArIHNsaWRlc1RvU2xpZGUgPiB0aGlzLnNsaWRlc0NvdW50KSB7XG4gICAgICAgICAgICBzbGlkZXNUb1NsaWRlID0gc2xpZGVzVG9TbGlkZSAtICh0aGlzLnNsaWRlc0NvdW50IC0gc2xpZGVzVG9TbGlkZSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBvZmZzZXQgPSAtIChzbGlkZXNUb1NsaWRlICogdGhpcy5zbGlkZVdpZHRoKTtcbiAgICAgICAgdGhpcy5zbGlkZXIuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHtvZmZzZXR9JSlgO1xuICAgIH1cblxuICAgIHVwZGF0ZUN1cnJlbnREb3QoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmRvdHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzXG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvcihgLiR7dGhpcy5kb3RTZWxlY3Rvcn0uJHt0aGlzLmRvdEN1cnJlbnRNb2RpZmllcn1gKVxuICAgICAgICAgICAgLmNsYXNzTGlzdFxuICAgICAgICAgICAgLnJlbW92ZSh0aGlzLmRvdEN1cnJlbnRNb2RpZmllcik7XG5cbiAgICAgICAgdGhpc1xuICAgICAgICAgICAgLmRvdHNbdGhpcy52aWV3Q3VycmVudEluZGV4XVxuICAgICAgICAgICAgLmNsYXNzTGlzdFxuICAgICAgICAgICAgLmFkZCh0aGlzLmRvdEN1cnJlbnRNb2RpZmllcik7XG4gICAgfVxuXG4gICAgZ2V0IHNsaWRlc1RvU2hvdygpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gcGFyc2VJbnQodGhpcy5nZXRBdHRyaWJ1dGUoJ3NsaWRlcy10by1zaG93JykgfHwgJzAnKTtcbiAgICB9XG5cbiAgICBnZXQgc2xpZGVzVG9TY3JvbGwoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KHRoaXMuZ2V0QXR0cmlidXRlKCdzbGlkZXMtdG8tc2Nyb2xsJykgfHwgJzAnKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBnZXQgYXMgY29uZmlnIH0gZnJvbSAnLi4vYXBwL2NvbmZpZyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNvbXBvbmVudENvbnRydWN0b3Ige1xuICAgIG5ldygpOiBDb21wb25lbnRcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJQ29tcG9uZW50SW1wb3J0ZXIge1xuICAgICgpOiBQcm9taXNlPHsgZGVmYXVsdDogSUNvbXBvbmVudENvbnRydWN0b3IgfT5cbn1cblxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgQ29tcG9uZW50IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICAgIHJlYWRvbmx5IG5hbWU6IHN0cmluZ1xuICAgIHJlYWRvbmx5IGpzTmFtZTogc3RyaW5nXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5uYW1lID0gdGhpcy50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHRoaXMuanNOYW1lID0gYGpzLSR7dGhpcy5uYW1lfWA7XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihjb25maWcoKS5ldmVudHMucmVhZHksICgpID0+IHRoaXMucmVhZHlDYWxsYmFjaygpLCB7XG4gICAgICAgICAgICBjYXB0dXJlOiBmYWxzZSxcbiAgICAgICAgICAgIG9uY2U6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IHJlYWR5Q2FsbGJhY2soKTogdm9pZFxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==