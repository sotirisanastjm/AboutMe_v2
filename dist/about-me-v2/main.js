"use strict";
(self["webpackChunkAboutMe_v2"] = self["webpackChunkAboutMe_v2"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects/projects.component */ 5609);
/* harmony import */ var _projects_project_item_project_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects/project-item/project-item.component */ 121);
/* harmony import */ var _cv_cv_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cv/cv.component */ 4725);
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./not-found/not-found.component */ 1142);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);


// import { ContactComponent } from './contact/contact.component';






const routes = [{
  path: '',
  component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
},
// { path: 'contact', component: ContactComponent },
// { path: 'contact/:submit', component: ContactComponent },
{
  path: 'projects',
  component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_1__.ProjectsComponent
}, {
  path: 'projects/:id',
  component: _projects_project_item_project_item_component__WEBPACK_IMPORTED_MODULE_2__.ProjectItemComponent
}, {
  path: 'cv',
  component: _cv_cv_component__WEBPACK_IMPORTED_MODULE_3__.CvComponent
}, {
  path: '**',
  component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__.NotFoundComponent
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled' // Optional: Enables scrolling to anchor links
    }), _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 116);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navigation/navigation.component */ 3719);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer/footer.component */ 970);






class AppComponent {
  constructor(router) {
    this.router = router;
    this.title = 'AboutMe_v2';
  }
  ngOnInit() {
    this.printBrandingStamp();
    this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationEnd)).subscribe(() => {
      window.scrollTo(0, 0);
    });
  }
  printBrandingStamp() {
    const styles = ['color: #4CAF50', 'font-size: 14px', 'font-weight: bold', 'text-shadow: 1px 1px 2px rgba(0,0,0,0.2)'].join(';');
    console.log('%c🚀 Crafted by Sotiris Anastasiadis | https://anast.dev', styles);
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 6,
    vars: 0,
    consts: [["href", "#main-content", 1, "skip-link"], ["id", "main-content"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Skip to main content");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "app-navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "main", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "app-footer");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_0__.NavigationComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent],
    styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxnS0FBZ0siLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navigation/navigation.component */ 3719);
/* harmony import */ var _media_media_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./media/media.component */ 5651);
/* harmony import */ var _hero_image_hero_image_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hero-image/hero-image.component */ 8055);
/* harmony import */ var _horizon_header_horizon_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./horizon-header/horizon-header.component */ 8257);
/* harmony import */ var _testimonial_testimonial_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./testimonial/testimonial.component */ 4090);
/* harmony import */ var _tech_skills_tech_skills_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tech-skills/tech-skills.component */ 1813);
/* harmony import */ var _svg_list_svg_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./svg-list/svg-list.component */ 357);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./footer/footer.component */ 970);
/* harmony import */ var _banner_product_banner_product_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./banner-product/banner-product.component */ 3711);
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./projects/projects.component */ 5609);
/* harmony import */ var _projects_project_item_project_item_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./projects/project-item/project-item.component */ 121);
/* harmony import */ var _banner_focus_banner_focus_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./banner-focus/banner-focus.component */ 7200);
/* harmony import */ var _banner_gradient_banner_gradient_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./banner-gradient/banner-gradient.component */ 4427);
/* harmony import */ var _hero_hero_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./hero/hero.component */ 3229);
/* harmony import */ var _banner_action_banner_action_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./banner-action/banner-action.component */ 1885);
/* harmony import */ var _progress_card_progress_card_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./progress-card/progress-card.component */ 2341);
/* harmony import */ var _banner_article_banner_article_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./banner-article/banner-article.component */ 5980);
/* harmony import */ var _cv_cv_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./cv/cv.component */ 4725);
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./not-found/not-found.component */ 1142);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ 2560);





// import { ContactComponent } from './contact/contact.component';




















class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineInjector"]({
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_24__.HttpClientModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _home_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent,
    // ContactComponent,
    _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_3__.NavigationComponent, _media_media_component__WEBPACK_IMPORTED_MODULE_4__.MediaComponent, _hero_image_hero_image_component__WEBPACK_IMPORTED_MODULE_5__.HeroImageComponent, _horizon_header_horizon_header_component__WEBPACK_IMPORTED_MODULE_6__.HorizonHeaderComponent, _testimonial_testimonial_component__WEBPACK_IMPORTED_MODULE_7__.TestimonialComponent, _tech_skills_tech_skills_component__WEBPACK_IMPORTED_MODULE_8__.TechSkillsComponent, _svg_list_svg_list_component__WEBPACK_IMPORTED_MODULE_9__.SvgListComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__.FooterComponent, _banner_product_banner_product_component__WEBPACK_IMPORTED_MODULE_11__.BannerProductComponent, _projects_projects_component__WEBPACK_IMPORTED_MODULE_12__.ProjectsComponent, _projects_project_item_project_item_component__WEBPACK_IMPORTED_MODULE_13__.ProjectItemComponent, _banner_focus_banner_focus_component__WEBPACK_IMPORTED_MODULE_14__.BannerFocusComponent, _banner_gradient_banner_gradient_component__WEBPACK_IMPORTED_MODULE_15__.BannerGradientComponent, _hero_hero_component__WEBPACK_IMPORTED_MODULE_16__.HeroComponent, _banner_action_banner_action_component__WEBPACK_IMPORTED_MODULE_17__.BannerActionComponent, _progress_card_progress_card_component__WEBPACK_IMPORTED_MODULE_18__.ProgressCardComponent, _banner_article_banner_article_component__WEBPACK_IMPORTED_MODULE_19__.BannerArticleComponent, _cv_cv_component__WEBPACK_IMPORTED_MODULE_20__.CvComponent, _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_21__.NotFoundComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_24__.HttpClientModule]
  });
})();

/***/ }),

/***/ 1885:
/*!**********************************************************!*\
  !*** ./src/app/banner-action/banner-action.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BannerActionComponent": () => (/* binding */ BannerActionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _media_media_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../media/media.component */ 5651);


class BannerActionComponent {
  static #_ = this.ɵfac = function BannerActionComponent_Factory(t) {
    return new (t || BannerActionComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: BannerActionComponent,
    selectors: [["app-banner-action"]],
    decls: 9,
    vars: 0,
    consts: [[1, "container", "mx-auto", "px-4", "lg:px-0", "flex", "flex-col", "justify-center", "items-center", "w-fit", "text-center"], [1, "w-12", "h-[2px]", "bg-accent", "dark:bg-accent-dark", "mx-auto", "mb-6"], [1, "text-2xl", "md:text-3xl", "font-bold", "mb-3"], [1, "text-lg", "md:text-xl", "font-normal", "mb-8", "text-blue-600", "dark:text-blue-400", "leading-relaxed"]],
    template: function BannerActionComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Let's Connect");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Have questions, feedback, or just want to chat?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Feel free to reach out to me.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "app-media");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    },
    dependencies: [_media_media_component__WEBPACK_IMPORTED_MODULE_0__.MediaComponent],
    styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYW5uZXItYWN0aW9uLmNvbXBvbmVudC5zY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYmFubmVyLWFjdGlvbi9iYW5uZXItYWN0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSw0S0FBNEsiLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 5980:
/*!************************************************************!*\
  !*** ./src/app/banner-article/banner-article.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BannerArticleComponent": () => (/* binding */ BannerArticleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);


function BannerArticleComponent_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 7)(2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 9)(4, "div", 10)(5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 12)(7, "div", 13)(8, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 15)(11, "div", 16)(12, "h4", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h5", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const article_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", article_r1 == null ? null : article_r1.File == null ? null : article_r1.File.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", (article_r1 == null ? null : article_r1.Title) ? "Open " + (article_r1 == null ? null : article_r1.Title) + " resource in a new tab" : "Open resource in a new tab");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", article_r1 == null ? null : article_r1.Image == null ? null : article_r1.Image.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", article_r1 == null ? null : article_r1.Image == null ? null : article_r1.Image.alt);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](article_r1 == null ? null : article_r1.File == null ? null : article_r1.File.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](article_r1.Title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](article_r1 == null ? null : article_r1.Subtitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](article_r1 == null ? null : article_r1.File == null ? null : article_r1.File.extension);
  }
}
const _c0 = function (a0, a1, a2) {
  return {
    "lg:grid-cols-2": a0,
    "lg:grid-cols-3": a1,
    "justify-items-center lg:w-1/2 lg:mx-auto": a2
  };
};
class BannerArticleComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function BannerArticleComponent_Factory(t) {
    return new (t || BannerArticleComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: BannerArticleComponent,
    selectors: [["app-banner-article"]],
    inputs: {
      data: "data"
    },
    decls: 10,
    vars: 8,
    consts: [[1, "container", "mx-auto", "px-4", "xl:px-12", "flex", "flex-col", "gap-6", "lg:gap-10"], [1, "lg:w-[60%]", "mx-auto", "text-center", "space-y-3"], [1, "uppercase", "tracking-[0.2em]", "text-accent", "dark:text-accent-dark", "text-xs", "font-bold"], [1, "text-2xl", "sm:text-3xl", "font-bold"], [1, "text-base", "sm:text-lg", "text-blue-600", "dark:text-blue-400", "leading-relaxed"], [1, "grid", "grid-cols-1", "gap-8", 3, "ngClass"], [4, "ngFor", "ngForOf"], ["target", "_blank", "rel", "noopener noreferrer", 1, "group", "rounded-2xl", "scale-card", "relative", "overflow-hidden", "shadow-lg", "hover:shadow-xl", "transition-shadow", "duration-300", "w-full", "border", "border-blue-200", "dark:border-blue-700", 3, "href"], [1, "relative", "!overflow-hidden", "min-h-[300px]", "lg:min-h-[400px]", "rounded-2xl", "text-white"], [1, "absolute", "w-full", "h-full", "object-cover", "inset-0", "transition-transform", "duration-500", "group-hover:scale-105", 3, "src", "alt"], [1, "absolute", "inset-0", "bg-black/40", "group-hover:bg-black/55", "transition-all", "duration-300"], [1, "absolute", "rounded-inherit", "img-overlay", "h-full", "inset-0"], [1, "absolute", "inset-0", "z-10", "h-full"], [1, "flex", "flex-col", "justify-between", "h-full", "p-6"], [1, "self-end", "text-sm", "font-medium", "text-[#c7c7cc]"], [1, "space-y-6"], [1, "space-y-3"], [1, "font-bold", "text-xl", "!text-[#faf8f5]", "lg:text-3xl", "leading-snug"], [1, "text-base", "lg:text-lg", "!text-[#c7c7cc]"], [1, "font-bold", "uppercase", "text-xs", "tracking-wider", "px-4", "py-1.5", "rounded-md", "bg-accent/80", "text-[#faf8f5]", "w-fit"]],
    template: function BannerArticleComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Resources");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, BannerArticleComponent_ng_container_9_Template, 18, 8, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.Title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.Subtitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](4, _c0, ctx.data.Articles.length == 2, ctx.data.Articles.length >= 3, ctx.data.Articles.length == 1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data == null ? null : ctx.data.Articles);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf],
    encapsulation: 2
  });
}

/***/ }),

/***/ 7200:
/*!********************************************************!*\
  !*** ./src/app/banner-focus/banner-focus.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BannerFocusComponent": () => (/* binding */ BannerFocusComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class BannerFocusComponent {
  static #_ = this.ɵfac = function BannerFocusComponent_Factory(t) {
    return new (t || BannerFocusComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: BannerFocusComponent,
    selectors: [["app-banner-focus"]],
    decls: 39,
    vars: 0,
    consts: [[1, "container", "mx-auto"], [1, "mx-4", "lg:mx-0"], [1, "text-center", "mb-10"], [1, "w-10", "h-[2px]", "bg-accent", "dark:bg-accent-dark", "mx-auto", "mb-5"], [1, "uppercase", "tracking-[0.2em]", "text-accent", "dark:text-accent-dark", "text-xs", "font-bold", "mb-3"], [1, "text-2xl", "md:text-3xl", "font-bold"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-3", "gap-6", "max-w-5xl", "mx-auto", "mb-10"], [1, "flex", "flex-col", "gap-2", "border-l-2", "border-accent", "dark:border-accent-dark", "pl-4", "py-1"], [1, "text-base", "font-bold"], [1, "text-sm", "leading-relaxed", "opacity-80"]],
    template: function BannerFocusComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Philosophy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "How I Build");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6)(9, "div", 7)(10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "User-Centric Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Every line of code serves the end user. Intuitive interfaces and experiences that feel natural.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7)(15, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Clean & Maintainable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Readability, modularity, and conventions that make collaboration seamless.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7)(20, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Continuous Learning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Staying curious, exploring new frameworks, embracing challenges as growth opportunities.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 7)(25, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Mobile-First & Responsive");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Design for mobile first, scale up seamlessly. Responsive is the foundation, not an afterthought.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 7)(30, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "SEO & Best Practices");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Industry standards, optimized performance. Code that loads fast and ranks well.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 7)(35, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Accessibility First");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "ARIA labels, semantic HTML, keyboard navigation. Inclusive design is essential.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      }
    },
    styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYW5uZXItZm9jdXMuY29tcG9uZW50LnNjc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYmFubmVyLWZvY3VzL2Jhbm5lci1mb2N1cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsNEtBQTRLIiwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 4427:
/*!**************************************************************!*\
  !*** ./src/app/banner-gradient/banner-gradient.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BannerGradientComponent": () => (/* binding */ BannerGradientComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class BannerGradientComponent {
  static #_ = this.ɵfac = function BannerGradientComponent_Factory(t) {
    return new (t || BannerGradientComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: BannerGradientComponent,
    selectors: [["app-banner-gradient"]],
    decls: 9,
    vars: 0,
    consts: [[1, "banner-gradient", "pt-24", "pb-14", "mb-0"], [1, "container", "mx-auto"], [1, "mx-4", "lg:mx-0", "flex", "flex-col", "lg:flex-row", "gap-10", "justify-center", "items-center"], [1, "space-y-5", "w-full", "lg:w-[45%]"], [1, "uppercase", "tracking-[0.2em]", "text-accent", "dark:text-accent-dark", "text-xs", "font-bold"], [1, "text-lg", "font-normal", "md:text-xl", "text-blue-600", "dark:text-blue-300", "leading-relaxed"], ["src", "../../assets/svg/projectGallery.svg", "alt", "Explore My Projects", 1, "self-center", "w-[55%]", "sm:w-[45%]", "lg:w-[28%]"]],
    template: function BannerGradientComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Dive into the diverse projects I have developed, from innovative web apps to blockchain-based solutions. Explore my progress and stay updated on upcoming developments! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
    },
    styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYW5uZXItZ3JhZGllbnQuY29tcG9uZW50LnNjc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYmFubmVyLWdyYWRpZW50L2Jhbm5lci1ncmFkaWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsZ0xBQWdMIiwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 3711:
/*!************************************************************!*\
  !*** ./src/app/banner-product/banner-product.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BannerProductComponent": () => (/* binding */ BannerProductComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _svg_list_svg_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../svg-list/svg-list.component */ 357);





function BannerProductComponent_a_11_h3_5_img_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 23);
  }
  if (rf & 2) {
    const project_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", project_r1 == null ? null : project_r1.logoUrl == null ? null : project_r1.logoUrl.url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", project_r1.alt);
  }
}
function BannerProductComponent_a_11_h3_5_img_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 23);
  }
  if (rf & 2) {
    const project_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", project_r1 == null ? null : project_r1.logoUrl == null ? null : project_r1.logoUrl.url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", project_r1.alt);
  }
}
function BannerProductComponent_a_11_h3_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, BannerProductComponent_a_11_h3_5_img_1_Template, 1, 2, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, BannerProductComponent_a_11_h3_5_img_3_Template, 1, 2, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const project_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (project_r1 == null ? null : project_r1.logoUrl == null ? null : project_r1.logoUrl.url) && !project_r1.logoRight);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", project_r1 == null ? null : project_r1.logoUrl == null ? null : project_r1.logoUrl.text, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (project_r1 == null ? null : project_r1.logoUrl == null ? null : project_r1.logoUrl.url) && project_r1.logoRight);
  }
}
function BannerProductComponent_a_11_img_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 24);
  }
  if (rf & 2) {
    const project_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", project_r1 == null ? null : project_r1.logoUrl == null ? null : project_r1.logoUrl.url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", project_r1.alt);
  }
}
function BannerProductComponent_a_11_ng_container_11_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-svg-list", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const svg_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("svg", svg_r11.id);
  }
}
function BannerProductComponent_a_11_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, BannerProductComponent_a_11_ng_container_11_ng_container_1_Template, 2, 1, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const index_r12 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", index_r12 <= 2);
  }
}
const _c0 = function (a1) {
  return ["/projects", a1];
};
function BannerProductComponent_a_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 9)(1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 11)(3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, BannerProductComponent_a_11_h3_5_Template, 4, 3, "h3", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, BannerProductComponent_a_11_img_6_Template, 1, 2, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 16)(8, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, BannerProductComponent_a_11_ng_container_11_Template, 2, 1, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "View \u2192");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const project_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c0, ctx_r0.getId(project_r1.id)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", project_r1.cardImage, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", project_r1.alt);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !project_r1.onlyLogo);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", project_r1.onlyLogo);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](project_r1.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", project_r1.svgIds);
  }
}
class BannerProductComponent {
  constructor(http) {
    this.http = http;
    this.projects = [];
  }
  ngOnInit() {
    this.getProjectsFromJson();
  }
  getProjectsFromJson() {
    this.http.get('assets/projects/projects.json').subscribe(data => {
      this.projects = data;
    });
    if (this.projects.length > 3) {
      this.projects.slice(0, 3);
    }
  }
  getId(id) {
    return btoa(id);
  }
  static #_ = this.ɵfac = function BannerProductComponent_Factory(t) {
    return new (t || BannerProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: BannerProductComponent,
    selectors: [["app-banner-product"]],
    decls: 12,
    vars: 1,
    consts: [[1, "banner-gradient-bottom", "pt-16", "pb-10"], [1, "container", "mx-auto", "flex", "flex-col", "gap-10", "px-4", "lg:px-0"], [1, "space-y-3", "text-center"], [1, "w-10", "h-[2px]", "bg-accent", "dark:bg-accent-dark", "mx-auto", "mb-4"], [1, "uppercase", "tracking-[0.2em]", "text-accent", "dark:text-accent-dark", "text-xs", "font-bold"], [1, "text-2xl", "md:text-3xl", "font-bold"], [1, "text-base", "font-normal", "text-blue-600", "dark:text-blue-400"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "lg:grid-cols-4", "self-center", "gap-6", "w-full", "max-w-[1200px]"], ["class", "group relative overflow-hidden rounded-2xl bg-blue-100 dark:bg-blue-800 border border-blue-200 dark:border-blue-700 transition-all duration-300 hover:shadow-xl hover:border-accent/30 dark:hover:border-accent-dark/30", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "group", "relative", "overflow-hidden", "rounded-2xl", "bg-blue-100", "dark:bg-blue-800", "border", "border-blue-200", "dark:border-blue-700", "transition-all", "duration-300", "hover:shadow-xl", "hover:border-accent/30", "dark:hover:border-accent-dark/30", 3, "routerLink"], [1, "relative", "h-[200px]", "overflow-hidden"], [1, "w-full", "h-full", "object-cover", "transition-transform", "duration-500", "group-hover:scale-110", 3, "src", "alt"], [1, "absolute", "inset-0", "bg-gradient-to-t", "from-black/70", "via-black/20", "to-transparent"], [1, "absolute", "bottom-0", "left-0", "right-0", "p-4"], ["class", "flex flex-row gap-2 text-base text-[#faf8f5] font-bold items-center", 4, "ngIf"], ["class", "h-6 w-fit object-cover", 3, "src", "alt", 4, "ngIf"], [1, "p-4", "flex", "flex-col", "gap-3"], [1, "text-sm", "leading-relaxed", "line-clamp-3"], [1, "flex", "flex-row", "items-center", "gap-1.5", "pt-1", "border-t", "border-blue-200", "dark:border-blue-700"], [4, "ngFor", "ngForOf"], [1, "ml-auto", "text-xs", "uppercase", "tracking-wider", "text-accent", "dark:text-accent-dark", "font-bold", "group-hover:translate-x-1", "transition-transform", "duration-300"], [1, "flex", "flex-row", "gap-2", "text-base", "text-[#faf8f5]", "font-bold", "items-center"], ["class", "h-5 w-5 object-cover", 3, "src", "alt", 4, "ngIf"], [1, "h-5", "w-5", "object-cover", 3, "src", "alt"], [1, "h-6", "w-fit", "object-cover", 3, "src", "alt"], [4, "ngIf"], [1, "cardSvg", 3, "svg"]],
    template: function BannerProductComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Explore My Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Discover the Projects That Define My Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, BannerProductComponent_a_11_Template, 14, 9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.projects);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _svg_list_svg_list_component__WEBPACK_IMPORTED_MODULE_0__.SvgListComponent],
    styles: [".cardSvg .techSvg {\n  padding: 6px;\n  border-radius: 8px;\n  box-shadow: none;\n  background: transparent;\n  border: none;\n}\n  .cardSvg .techSvg svg {\n  width: 22px !important;\n  height: 22px;\n}\n\n.line-clamp-3[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhbm5lci1wcm9kdWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUFDSjtBQUNJO0VBQ0ksc0JBQUE7RUFDQSxZQUFBO0FBQ1I7O0FBR0E7RUFDSSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtBQUFKIiwiZmlsZSI6ImJhbm5lci1wcm9kdWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5jYXJkU3ZnIC50ZWNoU3ZnIHtcbiAgICBwYWRkaW5nOiA2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiBub25lO1xuXG4gICAgc3ZnIHtcbiAgICAgICAgd2lkdGg6IDIycHggIWltcG9ydGFudDtcbiAgICAgICAgaGVpZ2h0OiAyMnB4O1xuICAgIH1cbn1cblxuLmxpbmUtY2xhbXAtMyB7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgLXdlYmtpdC1saW5lLWNsYW1wOiAzO1xuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYmFubmVyLXByb2R1Y3QvYmFubmVyLXByb2R1Y3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQUNKO0FBQ0k7RUFDSSxzQkFBQTtFQUNBLFlBQUE7QUFDUjs7QUFHQTtFQUNJLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0FBQUo7QUFDQSw0NUJBQTQ1QiIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCAuY2FyZFN2ZyAudGVjaFN2ZyB7XG4gICAgcGFkZGluZzogNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogbm9uZTtcblxuICAgIHN2ZyB7XG4gICAgICAgIHdpZHRoOiAyMnB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGhlaWdodDogMjJweDtcbiAgICB9XG59XG5cbi5saW5lLWNsYW1wLTMge1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIC13ZWJraXQtbGluZS1jbGFtcDogMztcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 4725:
/*!************************************!*\
  !*** ./src/app/cv/cv.component.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CvComponent": () => (/* binding */ CvComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_seo_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/seo.service */ 3794);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);



class CvComponent {
  constructor(seoService) {
    this.seoService = seoService;
  }
  ngOnInit() {
    this.seoService.update({
      title: 'CV | Sotiris Anastasiadis',
      description: 'Curriculum Vitae of Sotiris Anastasiadis - Front-End Angular Developer based in Athens, Greece.',
      keywords: 'Sotiris Anastasiadis, CV, Resume, Front-End Developer, Angular Developer',
      urlPath: '/cv',
      image: '/assets/images/SotirisAnastasiadis.jpg'
    });
  }
  exportToPdf() {
    window.print();
  }
  static #_ = this.ɵfac = function CvComponent_Factory(t) {
    return new (t || CvComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_seo_service__WEBPACK_IMPORTED_MODULE_0__.SeoService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: CvComponent,
    selectors: [["app-cv"]],
    decls: 212,
    vars: 0,
    consts: [[1, "cv-container", "container", "mx-auto", "px-4", "py-8", "sm:py-12", "max-w-4xl"], [1, "print-hidden", "flex", "justify-between", "items-center", "mb-6"], ["routerLink", "/", 1, "flex", "items-center", "gap-2", "text-accent", "hover:opacity-80", "transition-opacity"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-5", "w-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M10 19l-7-7m0 0l7-7m-7 7h18"], [1, "font-medium"], ["aria-label", "Export CV as PDF", 1, "flex", "items-center", "gap-2", "px-5", "py-2.5", "bg-accent", "text-white", "rounded-lg", "hover:opacity-90", "transition-opacity", "font-medium", "text-sm", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-4", "w-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"], [1, "cv-content", "bg-white", "rounded-xl", "shadow-lg", "border", "border-blue-200", "text-black"], [1, "p-6", "sm:p-8", "border-b", "border-blue-200", "cv-header"], [1, "flex", "flex-col", "sm:flex-row", "gap-6"], ["src", "../../assets/images/SotirisAnastasiadis.jpg", "alt", "Sotiris Anastasiadis", 1, "w-24", "h-24", "sm:w-28", "sm:h-28", "rounded-full", "object-cover", "border-2", "border-accent", "self-center", "sm:self-start", "print-photo"], [1, "text-center", "sm:text-left", "flex-1"], [1, "text-2xl", "sm:text-3xl", "font-bold", "mb-1", "text-blue-900"], [1, "text-lg", "text-accent", "font-semibold", "mb-3"], [1, "flex", "flex-wrap", "justify-center", "sm:justify-start", "gap-x-4", "gap-y-2", "text-sm", "text-blue-700"], ["href", "mailto:sotiris.anastjm@gmail.com", 1, "flex", "items-center", "gap-1.5", "hover:text-accent", "transition-colors"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-4", "w-4", "flex-shrink-0"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"], [1, "flex", "items-center", "gap-1.5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 11a3 3 0 11-6 0 3 3 0 016 0z"], ["href", "https://anast.dev", "target", "_blank", "rel", "noopener", 1, "flex", "items-center", "gap-1.5", "hover:text-accent", "transition-colors"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"], ["href", "https://www.linkedin.com/in/sotiris-anastasiadis/", "target", "_blank", "rel", "noopener", 1, "flex", "items-center", "gap-1.5", "hover:text-accent", "transition-colors"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "currentColor", "viewBox", "0 0 24 24", 1, "h-4", "w-4", "flex-shrink-0"], ["d", "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"], ["href", "https://github.com/sotirisanastjm", "target", "_blank", "rel", "noopener", 1, "flex", "items-center", "gap-1.5", "hover:text-accent", "transition-colors"], ["d", "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"], [1, "p-6", "sm:p-8", "cv-sections"], [1, "cv-section-title"], [1, "leading-relaxed", "text-sm", "text-blue-600"], [1, "text-blue-900"], [1, "skills-container"], [1, "skill-category"], [1, "skill-label"], [1, "skill-tags"], [1, "space-y-6"], [1, "cv-experience-item"], [1, "flex", "flex-col", "sm:flex-row", "sm:justify-between", "sm:items-baseline", "gap-1", "mb-2"], [1, "font-bold", "text-base", "text-blue-900"], [1, "text-accent", "font-medium", "text-sm"], [1, "text-sm", "text-blue-500", "font-medium", "whitespace-nowrap"], [1, "cv-achievements"], [1, "cv-projects-grid"], [1, "flex", "flex-col", "sm:flex-row", "sm:justify-between", "sm:items-baseline", "gap-1", "mb-1"], [1, "font-bold", "text-sm", "text-blue-900"], [1, "text-accent", "font-medium", "text-xs"], [1, "text-xs", "text-blue-500", "font-medium", "whitespace-nowrap"], [1, "cv-achievements", "cv-achievements-compact"], ["href", "https://certed.vercel.app/", "target", "_blank", "rel", "noopener", 1, "text-xs", "text-blue-500", "font-medium", "whitespace-nowrap", "hover:underline"], ["href", "https://fetchlynews.netlify.app", "target", "_blank", "rel", "noopener", 1, "text-xs", "text-blue-500", "font-medium", "whitespace-nowrap", "hover:underline"], ["href", "https://quantumgiz.netlify.app", "target", "_blank", "rel", "noopener", 1, "text-xs", "text-blue-500", "font-medium", "whitespace-nowrap", "hover:underline"], [1, "flex", "flex-col", "sm:flex-row", "sm:justify-between", "sm:items-baseline", "gap-1"], [1, "text-xs", "mt-1", "text-blue-600"], [1, "cv-section-inline"], [1, "text-sm", "text-blue-600"]],
    template: function CvComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Back to Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CvComponent_Template_button_click_7_listener() {
          return ctx.exportToPdf();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "svg", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Download PDF");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "article", 9)(13, "header", 10)(14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 13)(17, "h1", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Sotiris Anastasiadis");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Software Engineer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 16)(22, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "svg", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "path", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "sotiris.anastjm@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "svg", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "path", 21)(30, "path", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Athens, Greece");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "svg", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "path", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "anast.dev");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "svg", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "path", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "LinkedIn");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "svg", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "path", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "GitHub");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 30)(49, "section")(50, "h2", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "About Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "p", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, " Software Engineer with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "strong", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "3+ years at Ernst & Young");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, " delivering enterprise banking portals. Skilled in Angular, .NET, and Sitecore CMS with focus on SEO and accessibility. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "section")(58, "h2", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Technical Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 34)(61, "div", 35)(62, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Frontend:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Angular \u00B7 React \u00B7 Next.js \u00B7 TypeScript \u00B7 JavaScript \u00B7 HTML5 \u00B7 CSS3 \u00B7 SCSS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 35)(67, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Backend:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "Sitecore XM/XP \u00B7 .NET \u00B7 C# \u00B7 SQL Server \u00B7 REST APIs");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 35)(72, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Practices:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "SEO \u00B7 WCAG Accessibility \u00B7 Responsive Design \u00B7 Git \u00B7 Azure DevOps");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "section")(77, "h2", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "Professional Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 38)(80, "div", 39)(81, "div", 40)(82, "div")(83, "h3", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "Software Engineer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "p", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "Ernst & Young (EY) \u00B7 Athens, Greece");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "span", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "2023 \u2013 Present");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "ul", 44)(90, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "Delivered ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, "enterprise banking portals");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, " for major Greek financial institutions using ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "Sitecore XM");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, ", Angular, and .NET");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, "Developed ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101, "role-based authentication");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, ", map integrations, financial calculators, and dynamic product catalogs");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, "Applied ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, "SEO best practices");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](107, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109, "WCAG accessibility compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](110, " achieving improved search visibility and inclusivity");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112, "Developed ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](114, ".NET backend services");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](115, " and RESTful APIs, designed ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](117, "SQL Server");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](118, " queries, and integrated client APIs with external systems");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "section")(120, "h2", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](121, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "div", 45)(123, "div", 39)(124, "div", 46)(125, "div")(126, "h3", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](127, "NexusChat \u2013 AI Chatbot & Decentralized App");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](129, "React \u00B7 .NET \u00B7 Sui Blockchain \u00B7 Thesis");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "span", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](131, "2024 \u2013 2025");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "ul", 50)(133, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](134, "Decentralized app combining ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](136, "ChatGPT API");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](137, " with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](139, "Sui blockchain");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](140, " storage using Move smart contracts");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "div", 39)(142, "div", 46)(143, "div")(144, "h3", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](145, "Certed \u2013 Sitecore Certification Platform");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](147, "Next.js \u00B7 TypeScript \u00B7 Tailwind CSS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](149, "certed.vercel.app");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "ul", 50)(151, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](152, "Study platform for Sitecore certification with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](153, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](154, "SSR");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](155, " for SEO optimization");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "div", 39)(157, "div", 46)(158, "div")(159, "h3", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](160, "Fetchly \u2013 Developer News Aggregator");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](162, "Next.js \u00B7 TypeScript \u00B7 Dev.to API");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "a", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](164, "fetchlynews.netlify.app");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "ul", 50)(166, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](167, "Tech article aggregator with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](168, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](169, "tag-based filtering");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](170, " and server-side rendering");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](171, "div", 39)(172, "div", 46)(173, "div")(174, "h3", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](175, "QuantumGiz \u2013 E-Commerce Platform");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](176, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](177, "React \u00B7 JavaScript \u00B7 Tailwind CSS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](178, "a", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](179, "quantumgiz.netlify.app");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](180, "ul", 50)(181, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](182, "Mobile-first e-shop with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](183, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](184, "dynamic cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](185, " and product filtering");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](186, "section")(187, "h2", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](188, "Education");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](189, "div", 39)(190, "div", 54)(191, "div")(192, "h3", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](193, "B.Sc. Applied Informatics");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](194, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](195, "University of Macedonia \u00B7 Thessaloniki, Greece");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](196, "span", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](197, "Expected 2026");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](198, "p", 55)(199, "strong", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](200, "Thesis:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](201, " AI Chatbot with Decentralized Database (NexusChat)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](202, "section", 56)(203, "h2", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](204, "Languages");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](205, "p", 57)(206, "strong", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](207, "Greek");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](208, " (Native) \u00B7 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](209, "strong", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](210, "English");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](211, " (Fluent)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
    styles: ["@charset \"UTF-8\";\n.cv-section-title[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 700;\n  margin-bottom: 0.75rem;\n  padding-bottom: 0.375rem;\n  border-bottom: 1px solid #e5e5ea;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  color: #0f0f0f;\n}\n.cv-section-title[_ngcontent-%COMP%]::before {\n  content: \"\";\n  width: 4px;\n  height: 18px;\n  background: #c4856c;\n  border-radius: 9999px;\n}\n\n.cv-experience-item[_ngcontent-%COMP%] {\n  position: relative;\n  padding-left: 0.75rem;\n  border-left: 2px solid #e5e5ea;\n}\n\n.cv-achievements[_ngcontent-%COMP%] {\n  list-style: none;\n  font-size: 0.875rem;\n  color: #636366;\n}\n\n.cv-achievements[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  position: relative;\n  padding-left: 1.25rem;\n  margin-bottom: 0.375rem;\n}\n\n.cv-achievements[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n  content: \"\u25B8\";\n  position: absolute;\n  left: 0;\n  color: #c4856c;\n}\n\n.cv-achievements[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #0f0f0f;\n  font-weight: 600;\n}\n\n.cv-achievements-compact[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n}\n\n.cv-achievements-compact[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 0.25rem;\n}\n\n.skills-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 0.75rem;\n}\n\n.skills-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n\n.skill-category[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: baseline;\n  gap: 0.375rem;\n}\n\n.skill-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.875rem;\n  color: #c4856c;\n  min-width: 5.5rem;\n}\n\n.skill-tags[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #1e3a5f;\n}\n\n.cv-projects-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 1rem;\n}\n\n.cv-sections[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n}\n\n.cv-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n\n.cv-section-inline[_ngcontent-%COMP%]   .cv-section-title[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n\n@media print {\n  .cv-container[_ngcontent-%COMP%] {\n    max-width: 100% !important;\n    padding: 0 !important;\n    margin: 0 !important;\n  }\n  .cv-section-title[_ngcontent-%COMP%] {\n    page-break-after: avoid;\n    font-size: 0.875rem !important;\n    margin-bottom: 0.5rem !important;\n    padding-bottom: 0.25rem !important;\n  }\n  .cv-section-title[_ngcontent-%COMP%]::before {\n    height: 14px !important;\n    width: 3px !important;\n  }\n  .cv-experience-item[_ngcontent-%COMP%] {\n    page-break-inside: avoid;\n    padding-left: 0.5rem !important;\n  }\n  .print-photo[_ngcontent-%COMP%] {\n    width: 60px !important;\n    height: 60px !important;\n  }\n  .cv-header[_ngcontent-%COMP%] {\n    padding: 0.5rem !important;\n  }\n  .cv-header[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    flex-direction: row !important;\n    gap: 0.75rem !important;\n    align-items: flex-start !important;\n  }\n  .cv-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.25rem !important;\n    margin-bottom: 0 !important;\n  }\n  .cv-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]    + p[_ngcontent-%COMP%] {\n    font-size: 0.875rem !important;\n    margin-bottom: 0.25rem !important;\n  }\n  .cv-header[_ngcontent-%COMP%]   .text-center[_ngcontent-%COMP%] {\n    text-align: left !important;\n  }\n  .cv-header[_ngcontent-%COMP%]   .justify-center[_ngcontent-%COMP%] {\n    justify-content: flex-start !important;\n  }\n  .cv-header[_ngcontent-%COMP%]   .flex-wrap[_ngcontent-%COMP%] {\n    gap: 0.5rem !important;\n    font-size: 0.7rem !important;\n  }\n  .cv-header[_ngcontent-%COMP%]   .flex-wrap[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 12px !important;\n    height: 12px !important;\n  }\n  .skills-grid[_ngcontent-%COMP%] {\n    display: grid !important;\n    grid-template-columns: repeat(3, 1fr) !important;\n    gap: 0.5rem !important;\n    font-size: 0.75rem !important;\n  }\n  .skills-container[_ngcontent-%COMP%] {\n    gap: 0.5rem !important;\n  }\n  .skill-label[_ngcontent-%COMP%] {\n    font-size: 0.8125rem !important;\n    min-width: 4.5rem !important;\n  }\n  .skill-tags[_ngcontent-%COMP%] {\n    font-size: 0.8125rem !important;\n  }\n  .cv-projects-grid[_ngcontent-%COMP%] {\n    display: grid !important;\n    grid-template-columns: repeat(2, 1fr) !important;\n    gap: 0.75rem !important;\n  }\n  .cv-sections[_ngcontent-%COMP%] {\n    gap: 0.875rem !important;\n  }\n  .cv-achievements[_ngcontent-%COMP%] {\n    font-size: 0.8125rem !important;\n    line-height: 1.4 !important;\n  }\n  .cv-achievements[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin-bottom: 0.25rem !important;\n    padding-left: 1rem !important;\n  }\n  .cv-achievements-compact[_ngcontent-%COMP%] {\n    font-size: 0.75rem !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQUVKO0FBREk7RUFBWSxXQUFBO0VBQWEsVUFBQTtFQUFZLFlBQUE7RUFBYyxtQkFBQTtFQUFxQixxQkFBQTtBQVE1RTs7QUFMQTtFQUFzQixrQkFBQTtFQUFvQixxQkFBQTtFQUF1Qiw4QkFBQTtBQVdqRTs7QUFUQTtFQUFtQixnQkFBQTtFQUFrQixtQkFBQTtFQUFxQixjQUFBO0FBZTFEOztBQWRBO0VBQXNCLGtCQUFBO0VBQW9CLHFCQUFBO0VBQXVCLHVCQUFBO0FBb0JqRTs7QUFuQkE7RUFBOEIsWUFBQTtFQUFjLGtCQUFBO0VBQW9CLE9BQUE7RUFBUyxjQUFBO0FBMEJ6RTs7QUF6QkE7RUFBNkIsY0FBQTtFQUFnQixnQkFBQTtBQThCN0M7O0FBNUJBO0VBQTJCLG9CQUFBO0FBZ0MzQjs7QUEvQkE7RUFBOEIsc0JBQUE7QUFtQzlCOztBQWpDQTtFQUNJLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLFlBQUE7QUFvQ0o7O0FBakNBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQW9DSjs7QUFqQ0E7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtBQW9DSjs7QUFqQ0E7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBb0NKOztBQWpDQTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtBQW9DSjs7QUFqQ0E7RUFDSSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxTQUFBO0FBb0NKOztBQWpDQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUFvQ0o7O0FBakNBO0VBQ0ksZ0JBQUE7QUFvQ0o7O0FBaENJO0VBQW9CLHFCQUFBO0FBb0N4Qjs7QUFqQ0E7RUFDSTtJQUFnQiwwQkFBQTtJQUE0QixxQkFBQTtJQUF1QixvQkFBQTtFQXVDckU7RUF0Q0U7SUFDSSx1QkFBQTtJQUNBLDhCQUFBO0lBQ0EsZ0NBQUE7SUFDQSxrQ0FBQTtFQXdDTjtFQXZDTTtJQUFZLHVCQUFBO0lBQXlCLHFCQUFBO0VBMkMzQztFQXpDRTtJQUNJLHdCQUFBO0lBQ0EsK0JBQUE7RUEyQ047RUF6Q0U7SUFBZSxzQkFBQTtJQUF3Qix1QkFBQTtFQTZDekM7RUEzQ0U7SUFDSSwwQkFBQTtFQTZDTjtFQTVDTTtJQUNJLDhCQUFBO0lBQ0EsdUJBQUE7SUFDQSxrQ0FBQTtFQThDVjtFQTVDTTtJQUFLLDZCQUFBO0lBQStCLDJCQUFBO0VBZ0QxQztFQS9DTTtJQUFTLDhCQUFBO0lBQWdDLGlDQUFBO0VBbUQvQztFQWxETTtJQUFlLDJCQUFBO0VBcURyQjtFQXBETTtJQUFrQixzQ0FBQTtFQXVEeEI7RUF0RE07SUFBYSxzQkFBQTtJQUF3Qiw0QkFBQTtFQTBEM0M7RUF6RE07SUFBaUIsc0JBQUE7SUFBd0IsdUJBQUE7RUE2RC9DO0VBMURFO0lBQ0ksd0JBQUE7SUFDQSxnREFBQTtJQUNBLHNCQUFBO0lBQ0EsNkJBQUE7RUE0RE47RUF6REU7SUFDSSxzQkFBQTtFQTJETjtFQXhERTtJQUNJLCtCQUFBO0lBQ0EsNEJBQUE7RUEwRE47RUF2REU7SUFDSSwrQkFBQTtFQXlETjtFQXRERTtJQUNJLHdCQUFBO0lBQ0EsZ0RBQUE7SUFDQSx1QkFBQTtFQXdETjtFQXJERTtJQUNJLHdCQUFBO0VBdUROO0VBcERFO0lBQW1CLCtCQUFBO0lBQWlDLDJCQUFBO0VBd0R0RDtFQXZERTtJQUFzQixpQ0FBQTtJQUFtQyw2QkFBQTtFQTJEM0Q7RUExREU7SUFBMkIsNkJBQUE7RUE2RDdCO0FBQ0YiLCJmaWxlIjoiY3YuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3Ytc2VjdGlvbi10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDEuMTI1cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMC4zNzVyZW07XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U1ZTVlYTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAwLjVyZW07XHJcbiAgICBjb2xvcjogIzBmMGYwZjtcclxuICAgICY6OmJlZm9yZSB7IGNvbnRlbnQ6ICcnOyB3aWR0aDogNHB4OyBoZWlnaHQ6IDE4cHg7IGJhY2tncm91bmQ6ICNjNDg1NmM7IGJvcmRlci1yYWRpdXM6IDk5OTlweDsgfVxyXG59XHJcblxyXG4uY3YtZXhwZXJpZW5jZS1pdGVtIHsgcG9zaXRpb246IHJlbGF0aXZlOyBwYWRkaW5nLWxlZnQ6IDAuNzVyZW07IGJvcmRlci1sZWZ0OiAycHggc29saWQgI2U1ZTVlYTsgfVxyXG5cclxuLmN2LWFjaGlldmVtZW50cyB7IGxpc3Qtc3R5bGU6IG5vbmU7IGZvbnQtc2l6ZTogMC44NzVyZW07IGNvbG9yOiAjNjM2MzY2OyB9XHJcbi5jdi1hY2hpZXZlbWVudHMgbGkgeyBwb3NpdGlvbjogcmVsYXRpdmU7IHBhZGRpbmctbGVmdDogMS4yNXJlbTsgbWFyZ2luLWJvdHRvbTogMC4zNzVyZW07IH1cclxuLmN2LWFjaGlldmVtZW50cyBsaTo6YmVmb3JlIHsgY29udGVudDogJ+KWuCc7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogMDsgY29sb3I6ICNjNDg1NmM7IH1cclxuLmN2LWFjaGlldmVtZW50cyBsaSBzdHJvbmcgeyBjb2xvcjogIzBmMGYwZjsgZm9udC13ZWlnaHQ6IDYwMDsgfVxyXG5cclxuLmN2LWFjaGlldmVtZW50cy1jb21wYWN0IHsgZm9udC1zaXplOiAwLjgxMjVyZW07IH1cclxuLmN2LWFjaGlldmVtZW50cy1jb21wYWN0IGxpIHsgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTsgfVxyXG5cclxuLnNraWxscy1ncmlkIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xyXG4gICAgZ2FwOiAwLjc1cmVtO1xyXG59XHJcblxyXG4uc2tpbGxzLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMC41cmVtO1xyXG59XHJcblxyXG4uc2tpbGwtY2F0ZWdvcnkge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuICAgIGdhcDogMC4zNzVyZW07XHJcbn1cclxuXHJcbi5za2lsbC1sYWJlbCB7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICAgIGNvbG9yOiAjYzQ4NTZjO1xyXG4gICAgbWluLXdpZHRoOiA1LjVyZW07XHJcbn1cclxuXHJcbi5za2lsbC10YWdzIHtcclxuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgICBjb2xvcjogIzFlM2E1ZjtcclxufVxyXG5cclxuLmN2LXByb2plY3RzLWdyaWQge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XHJcbiAgICBnYXA6IDFyZW07XHJcbn1cclxuXHJcbi5jdi1zZWN0aW9ucyB7IFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDEuMjVyZW07XHJcbn1cclxuXHJcbi5jdi1jb250ZW50IHNlY3Rpb24ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuLmN2LXNlY3Rpb24taW5saW5lIHtcclxuICAgIC5jdi1zZWN0aW9uLXRpdGxlIHsgbWFyZ2luLWJvdHRvbTogMC41cmVtOyB9XHJcbn1cclxuXHJcbkBtZWRpYSBwcmludCB7XHJcbiAgICAuY3YtY29udGFpbmVyIHsgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7IHBhZGRpbmc6IDAgIWltcG9ydGFudDsgbWFyZ2luOiAwICFpbXBvcnRhbnQ7IH1cclxuICAgIC5jdi1zZWN0aW9uLXRpdGxlIHsgXHJcbiAgICAgICAgcGFnZS1icmVhay1hZnRlcjogYXZvaWQ7IFxyXG4gICAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW0gIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW0gIWltcG9ydGFudDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMC4yNXJlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgICY6OmJlZm9yZSB7IGhlaWdodDogMTRweCAhaW1wb3J0YW50OyB3aWR0aDogM3B4ICFpbXBvcnRhbnQ7IH1cclxuICAgIH1cclxuICAgIC5jdi1leHBlcmllbmNlLWl0ZW0geyBcclxuICAgICAgICBwYWdlLWJyZWFrLWluc2lkZTogYXZvaWQ7IFxyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMC41cmVtICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAucHJpbnQtcGhvdG8geyB3aWR0aDogNjBweCAhaW1wb3J0YW50OyBoZWlnaHQ6IDYwcHggIWltcG9ydGFudDsgfVxyXG5cclxuICAgIC5jdi1oZWFkZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDAuNXJlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgID4gZGl2IHsgXHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3cgIWltcG9ydGFudDsgXHJcbiAgICAgICAgICAgIGdhcDogMC43NXJlbSAhaW1wb3J0YW50OyBcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDEgeyBmb250LXNpemU6IDEuMjVyZW0gIWltcG9ydGFudDsgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50OyB9XHJcbiAgICAgICAgaDEgKyBwIHsgZm9udC1zaXplOiAwLjg3NXJlbSAhaW1wb3J0YW50OyBtYXJnaW4tYm90dG9tOiAwLjI1cmVtICFpbXBvcnRhbnQ7IH1cclxuICAgICAgICAudGV4dC1jZW50ZXIgeyB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7IH1cclxuICAgICAgICAuanVzdGlmeS1jZW50ZXIgeyBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQgIWltcG9ydGFudDsgfVxyXG4gICAgICAgIC5mbGV4LXdyYXAgeyBnYXA6IDAuNXJlbSAhaW1wb3J0YW50OyBmb250LXNpemU6IDAuN3JlbSAhaW1wb3J0YW50OyB9XHJcbiAgICAgICAgLmZsZXgtd3JhcCBzdmcgeyB3aWR0aDogMTJweCAhaW1wb3J0YW50OyBoZWlnaHQ6IDEycHggIWltcG9ydGFudDsgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuc2tpbGxzLWdyaWQge1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQgIWltcG9ydGFudDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZ2FwOiAwLjVyZW0gIWltcG9ydGFudDtcclxuICAgICAgICBmb250LXNpemU6IDAuNzVyZW0gIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAuc2tpbGxzLWNvbnRhaW5lciB7XHJcbiAgICAgICAgZ2FwOiAwLjVyZW0gIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAuc2tpbGwtbGFiZWwge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC44MTI1cmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWluLXdpZHRoOiA0LjVyZW0gIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAuc2tpbGwtdGFncyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjgxMjVyZW0gIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAuY3YtcHJvamVjdHMtZ3JpZCB7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcikgIWltcG9ydGFudDtcclxuICAgICAgICBnYXA6IDAuNzVyZW0gIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAuY3Ytc2VjdGlvbnMge1xyXG4gICAgICAgIGdhcDogMC44NzVyZW0gIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAuY3YtYWNoaWV2ZW1lbnRzIHsgZm9udC1zaXplOiAwLjgxMjVyZW0gIWltcG9ydGFudDsgbGluZS1oZWlnaHQ6IDEuNCAhaW1wb3J0YW50OyB9XHJcbiAgICAuY3YtYWNoaWV2ZW1lbnRzIGxpIHsgbWFyZ2luLWJvdHRvbTogMC4yNXJlbSAhaW1wb3J0YW50OyBwYWRkaW5nLWxlZnQ6IDFyZW0gIWltcG9ydGFudDsgfVxyXG4gICAgLmN2LWFjaGlldmVtZW50cy1jb21wYWN0IHsgZm9udC1zaXplOiAwLjc1cmVtICFpbXBvcnRhbnQ7IH1cclxufVxyXG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY3YvY3YuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FBRUo7QUFESTtFQUFZLFdBQUE7RUFBYSxVQUFBO0VBQVksWUFBQTtFQUFjLG1CQUFBO0VBQXFCLHFCQUFBO0FBUTVFOztBQUxBO0VBQXNCLGtCQUFBO0VBQW9CLHFCQUFBO0VBQXVCLDhCQUFBO0FBV2pFOztBQVRBO0VBQW1CLGdCQUFBO0VBQWtCLG1CQUFBO0VBQXFCLGNBQUE7QUFlMUQ7O0FBZEE7RUFBc0Isa0JBQUE7RUFBb0IscUJBQUE7RUFBdUIsdUJBQUE7QUFvQmpFOztBQW5CQTtFQUE4QixZQUFBO0VBQWMsa0JBQUE7RUFBb0IsT0FBQTtFQUFTLGNBQUE7QUEwQnpFOztBQXpCQTtFQUE2QixjQUFBO0VBQWdCLGdCQUFBO0FBOEI3Qzs7QUE1QkE7RUFBMkIsb0JBQUE7QUFnQzNCOztBQS9CQTtFQUE4QixzQkFBQTtBQW1DOUI7O0FBakNBO0VBQ0ksYUFBQTtFQUNBLHFDQUFBO0VBQ0EsWUFBQTtBQW9DSjs7QUFqQ0E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FBb0NKOztBQWpDQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0FBb0NKOztBQWpDQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFvQ0o7O0FBakNBO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0FBb0NKOztBQWpDQTtFQUNJLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLFNBQUE7QUFvQ0o7O0FBakNBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQW9DSjs7QUFqQ0E7RUFDSSxnQkFBQTtBQW9DSjs7QUFoQ0k7RUFBb0IscUJBQUE7QUFvQ3hCOztBQWpDQTtFQUNJO0lBQWdCLDBCQUFBO0lBQTRCLHFCQUFBO0lBQXVCLG9CQUFBO0VBdUNyRTtFQXRDRTtJQUNJLHVCQUFBO0lBQ0EsOEJBQUE7SUFDQSxnQ0FBQTtJQUNBLGtDQUFBO0VBd0NOO0VBdkNNO0lBQVksdUJBQUE7SUFBeUIscUJBQUE7RUEyQzNDO0VBekNFO0lBQ0ksd0JBQUE7SUFDQSwrQkFBQTtFQTJDTjtFQXpDRTtJQUFlLHNCQUFBO0lBQXdCLHVCQUFBO0VBNkN6QztFQTNDRTtJQUNJLDBCQUFBO0VBNkNOO0VBNUNNO0lBQ0ksOEJBQUE7SUFDQSx1QkFBQTtJQUNBLGtDQUFBO0VBOENWO0VBNUNNO0lBQUssNkJBQUE7SUFBK0IsMkJBQUE7RUFnRDFDO0VBL0NNO0lBQVMsOEJBQUE7SUFBZ0MsaUNBQUE7RUFtRC9DO0VBbERNO0lBQWUsMkJBQUE7RUFxRHJCO0VBcERNO0lBQWtCLHNDQUFBO0VBdUR4QjtFQXRETTtJQUFhLHNCQUFBO0lBQXdCLDRCQUFBO0VBMEQzQztFQXpETTtJQUFpQixzQkFBQTtJQUF3Qix1QkFBQTtFQTZEL0M7RUExREU7SUFDSSx3QkFBQTtJQUNBLGdEQUFBO0lBQ0Esc0JBQUE7SUFDQSw2QkFBQTtFQTRETjtFQXpERTtJQUNJLHNCQUFBO0VBMkROO0VBeERFO0lBQ0ksK0JBQUE7SUFDQSw0QkFBQTtFQTBETjtFQXZERTtJQUNJLCtCQUFBO0VBeUROO0VBdERFO0lBQ0ksd0JBQUE7SUFDQSxnREFBQTtJQUNBLHVCQUFBO0VBd0ROO0VBckRFO0lBQ0ksd0JBQUE7RUF1RE47RUFwREU7SUFBbUIsK0JBQUE7SUFBaUMsMkJBQUE7RUF3RHREO0VBdkRFO0lBQXNCLGlDQUFBO0lBQW1DLDZCQUFBO0VBMkQzRDtFQTFERTtJQUEyQiw2QkFBQTtFQTZEN0I7QUFDRjtBQUNBLHd2UEFBd3ZQIiwic291cmNlc0NvbnRlbnQiOlsiLmN2LXNlY3Rpb24tdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxLjEyNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDAuMzc1cmVtO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNWU1ZWE7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMC41cmVtO1xyXG4gICAgY29sb3I6ICMwZjBmMGY7XHJcbiAgICAmOjpiZWZvcmUgeyBjb250ZW50OiAnJzsgd2lkdGg6IDRweDsgaGVpZ2h0OiAxOHB4OyBiYWNrZ3JvdW5kOiAjYzQ4NTZjOyBib3JkZXItcmFkaXVzOiA5OTk5cHg7IH1cclxufVxyXG5cclxuLmN2LWV4cGVyaWVuY2UtaXRlbSB7IHBvc2l0aW9uOiByZWxhdGl2ZTsgcGFkZGluZy1sZWZ0OiAwLjc1cmVtOyBib3JkZXItbGVmdDogMnB4IHNvbGlkICNlNWU1ZWE7IH1cclxuXHJcbi5jdi1hY2hpZXZlbWVudHMgeyBsaXN0LXN0eWxlOiBub25lOyBmb250LXNpemU6IDAuODc1cmVtOyBjb2xvcjogIzYzNjM2NjsgfVxyXG4uY3YtYWNoaWV2ZW1lbnRzIGxpIHsgcG9zaXRpb246IHJlbGF0aXZlOyBwYWRkaW5nLWxlZnQ6IDEuMjVyZW07IG1hcmdpbi1ib3R0b206IDAuMzc1cmVtOyB9XHJcbi5jdi1hY2hpZXZlbWVudHMgbGk6OmJlZm9yZSB7IGNvbnRlbnQ6ICfDosKWwrgnOyBwb3NpdGlvbjogYWJzb2x1dGU7IGxlZnQ6IDA7IGNvbG9yOiAjYzQ4NTZjOyB9XHJcbi5jdi1hY2hpZXZlbWVudHMgbGkgc3Ryb25nIHsgY29sb3I6ICMwZjBmMGY7IGZvbnQtd2VpZ2h0OiA2MDA7IH1cclxuXHJcbi5jdi1hY2hpZXZlbWVudHMtY29tcGFjdCB7IGZvbnQtc2l6ZTogMC44MTI1cmVtOyB9XHJcbi5jdi1hY2hpZXZlbWVudHMtY29tcGFjdCBsaSB7IG1hcmdpbi1ib3R0b206IDAuMjVyZW07IH1cclxuXHJcbi5za2lsbHMtZ3JpZCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcclxuICAgIGdhcDogMC43NXJlbTtcclxufVxyXG5cclxuLnNraWxscy1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDAuNXJlbTtcclxufVxyXG5cclxuLnNraWxsLWNhdGVnb3J5IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbiAgICBnYXA6IDAuMzc1cmVtO1xyXG59XHJcblxyXG4uc2tpbGwtbGFiZWwge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgICBjb2xvcjogI2M0ODU2YztcclxuICAgIG1pbi13aWR0aDogNS41cmVtO1xyXG59XHJcblxyXG4uc2tpbGwtdGFncyB7XHJcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gICAgY29sb3I6ICMxZTNhNWY7XHJcbn1cclxuXHJcbi5jdi1wcm9qZWN0cy1ncmlkIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xyXG4gICAgZ2FwOiAxcmVtO1xyXG59XHJcblxyXG4uY3Ytc2VjdGlvbnMgeyBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAxLjI1cmVtO1xyXG59XHJcblxyXG4uY3YtY29udGVudCBzZWN0aW9uIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbi5jdi1zZWN0aW9uLWlubGluZSB7XHJcbiAgICAuY3Ytc2VjdGlvbi10aXRsZSB7IG1hcmdpbi1ib3R0b206IDAuNXJlbTsgfVxyXG59XHJcblxyXG5AbWVkaWEgcHJpbnQge1xyXG4gICAgLmN2LWNvbnRhaW5lciB7IG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50OyBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7IG1hcmdpbjogMCAhaW1wb3J0YW50OyB9XHJcbiAgICAuY3Ytc2VjdGlvbi10aXRsZSB7IFxyXG4gICAgICAgIHBhZ2UtYnJlYWstYWZ0ZXI6IGF2b2lkOyBcclxuICAgICAgICBmb250LXNpemU6IDAuODc1cmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDAuMjVyZW0gIWltcG9ydGFudDtcclxuICAgICAgICAmOjpiZWZvcmUgeyBoZWlnaHQ6IDE0cHggIWltcG9ydGFudDsgd2lkdGg6IDNweCAhaW1wb3J0YW50OyB9XHJcbiAgICB9XHJcbiAgICAuY3YtZXhwZXJpZW5jZS1pdGVtIHsgXHJcbiAgICAgICAgcGFnZS1icmVhay1pbnNpZGU6IGF2b2lkOyBcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLnByaW50LXBob3RvIHsgd2lkdGg6IDYwcHggIWltcG9ydGFudDsgaGVpZ2h0OiA2MHB4ICFpbXBvcnRhbnQ7IH1cclxuXHJcbiAgICAuY3YtaGVhZGVyIHtcclxuICAgICAgICBwYWRkaW5nOiAwLjVyZW0gIWltcG9ydGFudDtcclxuICAgICAgICA+IGRpdiB7IFxyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93ICFpbXBvcnRhbnQ7IFxyXG4gICAgICAgICAgICBnYXA6IDAuNzVyZW0gIWltcG9ydGFudDsgXHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGgxIHsgZm9udC1zaXplOiAxLjI1cmVtICFpbXBvcnRhbnQ7IG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDsgfVxyXG4gICAgICAgIGgxICsgcCB7IGZvbnQtc2l6ZTogMC44NzVyZW0gIWltcG9ydGFudDsgbWFyZ2luLWJvdHRvbTogMC4yNXJlbSAhaW1wb3J0YW50OyB9XHJcbiAgICAgICAgLnRleHQtY2VudGVyIHsgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50OyB9XHJcbiAgICAgICAgLmp1c3RpZnktY2VudGVyIHsganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7IH1cclxuICAgICAgICAuZmxleC13cmFwIHsgZ2FwOiAwLjVyZW0gIWltcG9ydGFudDsgZm9udC1zaXplOiAwLjdyZW0gIWltcG9ydGFudDsgfVxyXG4gICAgICAgIC5mbGV4LXdyYXAgc3ZnIHsgd2lkdGg6IDEycHggIWltcG9ydGFudDsgaGVpZ2h0OiAxMnB4ICFpbXBvcnRhbnQ7IH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLnNraWxscy1ncmlkIHtcclxuICAgICAgICBkaXNwbGF5OiBncmlkICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGdhcDogMC41cmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjc1cmVtICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnNraWxscy1jb250YWluZXIge1xyXG4gICAgICAgIGdhcDogMC41cmVtICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnNraWxsLWxhYmVsIHtcclxuICAgICAgICBmb250LXNpemU6IDAuODEyNXJlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1pbi13aWR0aDogNC41cmVtICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnNraWxsLXRhZ3Mge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC44MTI1cmVtICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmN2LXByb2plY3RzLWdyaWQge1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQgIWltcG9ydGFudDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZ2FwOiAwLjc1cmVtICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmN2LXNlY3Rpb25zIHtcclxuICAgICAgICBnYXA6IDAuODc1cmVtICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmN2LWFjaGlldmVtZW50cyB7IGZvbnQtc2l6ZTogMC44MTI1cmVtICFpbXBvcnRhbnQ7IGxpbmUtaGVpZ2h0OiAxLjQgIWltcG9ydGFudDsgfVxyXG4gICAgLmN2LWFjaGlldmVtZW50cyBsaSB7IG1hcmdpbi1ib3R0b206IDAuMjVyZW0gIWltcG9ydGFudDsgcGFkZGluZy1sZWZ0OiAxcmVtICFpbXBvcnRhbnQ7IH1cclxuICAgIC5jdi1hY2hpZXZlbWVudHMtY29tcGFjdCB7IGZvbnQtc2l6ZTogMC43NXJlbSAhaW1wb3J0YW50OyB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 970:
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _media_media_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../media/media.component */ 5651);


class FooterComponent {
  constructor() {}
  ngOnInit() {
    this.year = new Date().getFullYear();
  }
  static #_ = this.ɵfac = function FooterComponent_Factory(t) {
    return new (t || FooterComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: FooterComponent,
    selectors: [["app-footer"]],
    decls: 6,
    vars: 1,
    consts: [[1, "border-t", "border-blue-200", "dark:border-blue-700", "py-6", "px-4"], [1, "container", "mx-auto", "flex", "flex-col-reverse", "md:flex-row", "justify-between", "items-center"], [1, "text-sm", "text-blue-500", "dark:text-blue-400", "mt-4", "md:mt-0"]],
    template: function FooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "footer")(1, "div", 0)(2, "div", 1)(3, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "app-media");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u00A9 ", ctx.year, " Anastasiadis Sotiris");
      }
    },
    dependencies: [_media_media_component__WEBPACK_IMPORTED_MODULE_0__.MediaComponent],
    styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0Esb0tBQW9LIiwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 8055:
/*!****************************************************!*\
  !*** ./src/app/hero-image/hero-image.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeroImageComponent": () => (/* binding */ HeroImageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _media_media_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../media/media.component */ 5651);


class HeroImageComponent {
  static #_ = this.ɵfac = function HeroImageComponent_Factory(t) {
    return new (t || HeroImageComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: HeroImageComponent,
    selectors: [["app-hero-image"]],
    decls: 19,
    vars: 0,
    consts: [[1, "container", "mx-auto", "sm:pt-16", "pb-10", "sm:mt-16"], [1, "sm:mx-4", "mx-0", "flex", "flex-col", "sm:flex-row", "items-center", "justify-center", "gap-8", "lg:gap-16"], [1, "px-4", "mx-4", "pt-2", "mt-4", "sm:max-w-[55%]", "order-last", "sm:order-first"], [1, "uppercase", "tracking-[0.2em]", "text-accent", "dark:text-accent-dark", "text-sm", "font-bold", "mb-3"], [1, "lg:text-5xl", "sm:text-4xl", "text-3xl", "font-bold", "leading-tight"], [1, "py-5", "md:w-4/5", "text-lg", "font-normal", "text-[#636366]", "dark:text-[#aeaeb2]", "leading-relaxed"], [1, "flex", "flex-col", "mt-2"], [1, "self-center", "sm:self-start"], [1, "mx-4", "sm:mx-0"], [1, "relative"], [1, "absolute", "-inset-4", "bg-accent/20", "dark:bg-accent-dark/30", "rounded-[50%]", "blur-2xl"], ["src", "../../assets/images/SotirisAnastasiadis.jpg", "alt", "Sotiris Anastasiadis", 1, "relative", "overflow-hidden", "rounded-[50%]", "md:max-w-[320px]", "max-h-[450px]", "sm:max-h-full", "border-2", "border-blue-200", "dark:border-blue-700"]],
    template: function HeroImageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Software Engineer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Sotiris");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Anastasiadis");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div")(10, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " A dedicated Front-end Developer located in Athens, Greece \u2014 passionate about crafting seamless user experiences. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 6)(13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "app-media");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 8)(16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "div", 10)(18, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      }
    },
    dependencies: [_media_media_component__WEBPACK_IMPORTED_MODULE_0__.MediaComponent],
    styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZXJvLWltYWdlLmNvbXBvbmVudC5zY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaGVyby1pbWFnZS9oZXJvLWltYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSx3S0FBd0siLCJzb3VyY2VSb290IjoiIn0= */"],
    encapsulation: 2
  });
}

/***/ }),

/***/ 3229:
/*!****************************************!*\
  !*** ./src/app/hero/hero.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeroComponent": () => (/* binding */ HeroComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class HeroComponent {
  static #_ = this.ɵfac = function HeroComponent_Factory(t) {
    return new (t || HeroComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: HeroComponent,
    selectors: [["app-hero"]],
    decls: 11,
    vars: 0,
    consts: [[1, "relative", "mb-0"], ["src", "../../assets/images/development.jpg", "alt", "", "aria-hidden", "true", 1, "object-cover", "h-full", "w-full", "filter", "max-h-[500px]"], [1, "absolute", "backdrop-blur-[6px]", "bg-black/50", "h-full", "inset-0"], [1, "container", "px-4", "text-center", "flex", "flex-col", "items-center", "justify-center", "gap-5", "absolute", "inset-0", "mx-auto"], [1, "w-10", "h-[2px]", "bg-accent-dark", "mb-1"], [1, "uppercase", "tracking-[0.25em]", "text-accent-dark", "text-xs", "font-bold"], [1, "text-3xl", "sm:text-4xl", "lg:text-5xl", "font-bold", "text-[#faf8f5]"], [1, "text-base", "sm:text-lg", "lg:text-xl", "font-normal", "text-[#c7c7cc]", "lg:w-[55%]", "leading-relaxed"]],
    template: function HeroComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Built, Shipped, Delivered ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Explore the projects that reflect my journey as a developer \u2014 from idea to execution. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
    },
    styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZXJvLmNvbXBvbmVudC5zY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaGVyby9oZXJvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxnS0FBZ0siLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 5067:
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_seo_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/seo.service */ 3794);
/* harmony import */ var _hero_image_hero_image_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hero-image/hero-image.component */ 8055);
/* harmony import */ var _horizon_header_horizon_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../horizon-header/horizon-header.component */ 8257);
/* harmony import */ var _testimonial_testimonial_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../testimonial/testimonial.component */ 4090);
/* harmony import */ var _tech_skills_tech_skills_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tech-skills/tech-skills.component */ 1813);
/* harmony import */ var _banner_product_banner_product_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../banner-product/banner-product.component */ 3711);
/* harmony import */ var _banner_action_banner_action_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../banner-action/banner-action.component */ 1885);








class HomeComponent {
  constructor(seoService) {
    this.seoService = seoService;
  }
  ngOnInit() {
    this.seoService.update({
      title: 'Sotiris Anastasiadis | Front-End Angular Developer',
      description: 'I am Sotiris Anastasiadis, a front-end Angular developer based in Athens, Greece, building performant and accessible web experiences.',
      keywords: 'Sotiris Anastasiadis, Front-End Developer, Angular Developer, Web Developer Portfolio, Athens',
      urlPath: '/',
      image: '/assets/images/SotirisAnastasiadis.jpg'
    });
  }
  static #_ = this.ɵfac = function HomeComponent_Factory(t) {
    return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_seo_service__WEBPACK_IMPORTED_MODULE_0__.SeoService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: HomeComponent,
    selectors: [["app-home"]],
    decls: 6,
    vars: 2,
    consts: [[3, "title", "subtitle"]],
    template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-hero-image")(1, "app-horizon-header", 0)(2, "app-tech-skills")(3, "app-testimonial")(4, "app-banner-product")(5, "app-banner-action");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", "Step into my world of coding and creativity.")("subtitle", "Passionate about crafting exceptional web experiences. Explore my portfolio and witness the art of web development.");
      }
    },
    dependencies: [_hero_image_hero_image_component__WEBPACK_IMPORTED_MODULE_1__.HeroImageComponent, _horizon_header_horizon_header_component__WEBPACK_IMPORTED_MODULE_2__.HorizonHeaderComponent, _testimonial_testimonial_component__WEBPACK_IMPORTED_MODULE_3__.TestimonialComponent, _tech_skills_tech_skills_component__WEBPACK_IMPORTED_MODULE_4__.TechSkillsComponent, _banner_product_banner_product_component__WEBPACK_IMPORTED_MODULE_5__.BannerProductComponent, _banner_action_banner_action_component__WEBPACK_IMPORTED_MODULE_6__.BannerActionComponent],
    styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxnS0FBZ0siLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 8257:
/*!************************************************************!*\
  !*** ./src/app/horizon-header/horizon-header.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HorizonHeaderComponent": () => (/* binding */ HorizonHeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class HorizonHeaderComponent {
  constructor() {
    this.title = '';
    this.subtitle = '';
  }
  static #_ = this.ɵfac = function HorizonHeaderComponent_Factory(t) {
    return new (t || HorizonHeaderComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: HorizonHeaderComponent,
    selectors: [["app-horizon-header"]],
    inputs: {
      title: "title",
      subtitle: "subtitle"
    },
    decls: 6,
    vars: 2,
    consts: [[1, "container", "mx-auto", "text-center"], [1, "w-12", "h-[2px]", "bg-accent", "dark:bg-accent-dark", "mx-auto", "mb-8"], [1, "text-2xl", "md:text-3xl", "font-bold", "px-4", "mx-auto", "lg:w-3/4", "leading-snug"], [1, "px-4", "mx-auto", "mt-4", "md:mt-6", "font-normal", "text-xl", "lg:w-3/5", "leading-relaxed"]],
    template: function HorizonHeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.subtitle);
      }
    },
    styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob3Jpem9uLWhlYWRlci5jb21wb25lbnQuc2NzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9yaXpvbi1oZWFkZXIvaG9yaXpvbi1oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLDRLQUE0SyIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 5651:
/*!******************************************!*\
  !*** ./src/app/media/media.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MediaComponent": () => (/* binding */ MediaComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class MediaComponent {
  static #_ = this.ɵfac = function MediaComponent_Factory(t) {
    return new (t || MediaComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MediaComponent,
    selectors: [["app-media"]],
    decls: 7,
    vars: 0,
    consts: [[1, "flex", "flex-row", "space-x-2"], ["href", "https://www.linkedin.com/in/sotiris-anastasiadis/", "target", "_blank", "rel", "noopener noreferrer", "aria-label", "LinkedIn (opens in a new tab)"], ["fill", "none", "width", "50px", "height", "50px", "viewBox", "-5.5 0 32 32", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 1, "svgColor"], ["d", "M0 8.219v15.563c0 1.469 1.156 2.625 2.625 2.625h15.563c0.719 0 1.406-0.344 1.844-0.781 0.469-0.469 0.781-1.063 \n        0.781-1.844v-15.563c0-1.469-1.156-2.625-2.625-2.625h-15.563c-0.781 0-1.375 0.313-1.844 0.781-0.438 0.438-0.781 1.125-0.781 \n        1.844zM2.813 10.281c0-1 0.813-1.875 1.813-1.875 1.031 0 1.875 0.875 1.875 1.875 0 1.031-0.844 1.844-1.875 1.844-1 \n        0-1.813-0.813-1.813-1.844zM7.844 23.125v-9.531c0-0.219 0.219-0.406 0.375-0.406h2.656c0.375 0 0.375 0.438 0.375 0.719 0.75-0.75 \n        1.719-0.938 2.719-0.938 2.438 0 4 1.156 4 3.719v6.438c0 0.219-0.188 0.406-0.375 0.406h-2.75c-0.219 0-0.375-0.219-0.375-0.406v-5.813c0-0.969-0.281-1.5-1.375-1.5-1.375 \n        0-1.719 0.906-1.719 2.125v5.188c0 0.219-0.219 0.406-0.438 0.406h-2.719c-0.156 0-0.375-0.219-0.375-0.406zM2.875 23.125v-9.531c0-0.219 \n        0.219-0.406 0.375-0.406h2.719c0.25 0 0.406 0.156 0.406 0.406v9.531c0 0.219-0.188 0.406-0.406 0.406h-2.719c-0.188 0-0.375-0.219-0.375-0.406z"], ["href", "https://github.com/sotirisanastjm", "target", "_blank", "rel", "noopener noreferrer", "aria-label", "GitHub (opens in a new tab)"], ["width", "45px", "height", "50px", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M12 2C6.475 2 2 6.475 2 12C2 16.425 4.8625 20.1625 8.8375 21.4875C9.3375 21.575 9.525 21.275 9.525 21.0125C9.525 20.775 9.5125\n             19.9875 9.5125 19.15C7 19.6125 6.35 18.5375 6.15 17.975C6.0375 17.6875 5.55 16.8 5.125 16.5625C4.775 16.375 4.275 15.9125 5.1125 15.9C5.9\n              15.8875 6.4625 16.625 6.65 16.925C7.55 18.4375 8.9875 18.0125 9.5625 17.75C9.65 17.1 9.9125 16.6625 10.2 16.4125C7.975 16.1625 5.65 15.3 5.65 \n              11.475C5.65 10.3875 6.0375 9.4875 6.675 8.7875C6.575 8.5375 6.225 7.5125 6.775 6.1375C6.775 6.1375 7.6125 5.875 9.525 7.1625C10.325 6.9375 11.175\n               6.825 12.025 6.825C12.875 6.825 13.725 6.9375 14.525 7.1625C16.4375 5.8625 17.275 6.1375 17.275 6.1375C17.825 7.5125 17.475 8.5375 17.375 \n               8.7875C18.0125 9.4875 18.4 10.375 18.4 11.475C18.4 15.3125 16.0625 16.1625 13.8375 16.4125C14.2 16.725 14.5125 17.325 14.5125 18.2625C14.5125 \n               19.6 14.5 20.675 14.5 21.0125C14.5 21.275 14.6875 21.5875 15.1875 21.4875C17.1727 20.8173 18.8977 19.5415 20.1198 17.8395C21.3419 16.1376 21.9995\n                14.0953 22 12C22 6.475 17.525 2 12 2Z", "fill", "none", 1, "svgColor"]],
    template: function MediaComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "svg", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
    },
    styles: [".svgColor {\n  fill: #3a3a3c;\n  transition: fill 0.2s ease;\n}\n\n:host:hover .svgColor {\n  fill: #c4856c;\n}\n\n.dark .svgColor {\n  fill: #aeaeb2;\n}\n.dark :host:hover .svgColor {\n  fill: #d4a08a;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lZGlhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLDBCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxhQUFBO0FBRUo7O0FBQ0k7RUFDSSxhQUFBO0FBRVI7QUFBSTtFQUNJLGFBQUE7QUFFUiIsImZpbGUiOiJtZWRpYS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdmdDb2xvcntcclxuICAgIGZpbGw6ICMzYTNhM2M7XHJcbiAgICB0cmFuc2l0aW9uOiBmaWxsIDAuMnMgZWFzZTtcclxufVxyXG46aG9zdDpob3ZlciAuc3ZnQ29sb3Ige1xyXG4gICAgZmlsbDogI2M0ODU2YztcclxufVxyXG4uZGFya3tcclxuICAgIC5zdmdDb2xvcntcclxuICAgICAgICBmaWxsOiAjYWVhZWIyO1xyXG4gICAgfVxyXG4gICAgOmhvc3Q6aG92ZXIgLnN2Z0NvbG9yIHtcclxuICAgICAgICBmaWxsOiAjZDRhMDhhO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWVkaWEvbWVkaWEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsMEJBQUE7QUFDSjs7QUFDQTtFQUNJLGFBQUE7QUFFSjs7QUFDSTtFQUNJLGFBQUE7QUFFUjtBQUFJO0VBQ0ksYUFBQTtBQUVSO0FBQ0Esd3JCQUF3ckIiLCJzb3VyY2VzQ29udGVudCI6WyIuc3ZnQ29sb3J7XHJcbiAgICBmaWxsOiAjM2EzYTNjO1xyXG4gICAgdHJhbnNpdGlvbjogZmlsbCAwLjJzIGVhc2U7XHJcbn1cclxuOmhvc3Q6aG92ZXIgLnN2Z0NvbG9yIHtcclxuICAgIGZpbGw6ICNjNDg1NmM7XHJcbn1cclxuLmRhcmt7XHJcbiAgICAuc3ZnQ29sb3J7XHJcbiAgICAgICAgZmlsbDogI2FlYWViMjtcclxuICAgIH1cclxuICAgIDpob3N0OmhvdmVyIC5zdmdDb2xvciB7XHJcbiAgICAgICAgZmlsbDogI2Q0YTA4YTtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
    encapsulation: 2
  });
}

/***/ }),

/***/ 3719:
/*!****************************************************!*\
  !*** ./src/app/navigation/navigation.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavigationComponent": () => (/* binding */ NavigationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _media_media_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../media/media.component */ 5651);




const _c0 = function (a0, a1) {
  return {
    "rotate-45 origin-bottom-left ease-linear duration-200 ": a0,
    "origin-top-left ease-linear duration-100": a1
  };
};
const _c1 = function (a0, a1) {
  return {
    "opacity-0 duration-100": a0,
    "opacity-1 duration-100": a1
  };
};
const _c2 = function (a0, a1) {
  return {
    "-rotate-45 origin-top-left ease-linear duration-200": a0,
    " origin-bottom-left ease-linear duration-100": a1
  };
};
const _c3 = function (a0, a1) {
  return {
    "translate-x-0": a0,
    "translate-x-full": a1
  };
};
class NavigationComponent {
  constructor() {
    this.isDarkMode = false;
    this.menuState = 'closed';
    this.loadDarkModePreference();
  }
  toggleMenu(logoEvent) {
    if (logoEvent) {
      this.menuState = 'closed';
      document.body.classList.toggle('overflow-y-hidden', false);
      document.body.classList.toggle('fixed', false);
    } else {
      this.menuState = this.menuState === 'closed' ? 'open' : 'closed';
      document.body.classList.toggle('overflow-y-hidden', this.menuState === 'open');
      document.body.classList.toggle('fixed', this.menuState === 'open');
    }
  }
  closeMenuOnEscape() {
    if (this.menuState === 'open') {
      this.toggleMenu();
    }
  }
  loadDarkModePreference() {
    const cookies = document.cookie.split('; ');
    const darkModeCookie = cookies.find(row => row.startsWith('darkMode='));
    if (darkModeCookie && darkModeCookie.split('=')[1] === 'true') {
      this.isDarkMode = true;
      document.body.classList.add('dark');
    }
  }
  toggleDarkMode() {
    const body = document.body;
    const secureFlag = window.location.protocol === 'https:' ? ';Secure' : '';
    this.isDarkMode = !this.isDarkMode;
    body.classList.toggle('dark', this.isDarkMode);
    document.cookie = `darkMode=${this.isDarkMode};path=/;max-age=${30 * 24 * 60 * 60};SameSite=Lax${secureFlag}`;
    if (this.menuState === 'open') {
      this.toggleMenu();
    }
  }
  static #_ = this.ɵfac = function NavigationComponent_Factory(t) {
    return new (t || NavigationComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: NavigationComponent,
    selectors: [["app-navigation"]],
    hostBindings: function NavigationComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown.escape", function NavigationComponent_keydown_escape_HostBindingHandler() {
          return ctx.closeMenuOnEscape();
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveDocument"]);
      }
    },
    decls: 52,
    vars: 20,
    consts: [["aria-label", "Main navigation"], [1, "dark:bg-[#0f0f0f]", "bg-[#faf8f5]", "border-b", "border-[#e5e5ea]", "dark:border-[#1c1c1e]"], [1, "flex", "flex-row", "items-center", "py-5", "px-4", "justify-between", "container", "mx-auto"], ["aria-label", "Home page", "routerLink", "/", 3, "click"], [1, "flex", "flex-row", "font-black", "text-xl", "tracking-tight"], [1, "dark:text-blue-200", "text-blue-900", "self-center"], [1, "ml-1", "px-2", "py-0.5", "rounded-md", "bg-accent", "dark:bg-accent-dark", "text-white", "dark:text-blue-900", "text-sm", "font-bold", "self-center"], [1, "md:block", "hidden"], [1, "md:flex", "md:space-x-10", "uppercase", "font-bold", "text-sm", "tracking-[0.15em]", "text-blue-700", "dark:text-blue-400"], ["aria-label", "Home Page", "routerLink", "/", 1, "textNav", "textShadow"], ["aria-label", "Projects Page", "routerLink", "/projects", 1, "textNav", "textShadow"], ["aria-label", "CV Page", "routerLink", "/cv", 1, "textNav", "textShadow"], ["for", "darkMode1", 1, "darkSwitch"], [1, "sr-only"], ["id", "darkMode1", "type", "checkbox", "aria-label", "Toggle dark mode", 3, "checked", "change"], [1, "switchSlider"], ["type", "button", "aria-label", "Toggle menu", "aria-controls", "mobile-navigation", 1, "md:hidden", "block", 3, "click"], [1, "block", "w-7", "h-[2px]", "bg-blue-700", "dark:bg-blue-400", 3, "ngClass"], [1, "mt-2", "block", "w-7", "h-[2px]", "bg-blue-700", "dark:bg-blue-400", 3, "ngClass"], ["id", "mobile-navigation", 1, "md:hidden", "fixed", "right-0", "menuHeight", "w-[100%]", "dark:bg-[#0a0a0a]", "bg-[#faf8f5]", "transform", "transition-transform", "ease-in-out", "duration-300", "z-50", 3, "ngClass"], [1, "flex", "flex-col", "justify-evenly", "text-center", "items-center", "h-full"], [1, "md:h-[60%]"], [1, "space-y-6", "md:space-y-10", "uppercase", "font-bold", "text-2xl", "tracking-[0.1em]", "text-blue-700", "dark:text-blue-400"], ["routerLink", "/", 1, "textNav", "textShadow", 3, "click"], ["routerLink", "/projects", 1, "textNav", "textShadow", 3, "click"], ["routerLink", "/cv", 1, "textNav", "textShadow", 3, "click"], ["for", "darkMode2", 1, "darkSwitch"], ["id", "darkMode2", "type", "checkbox", "aria-label", "Toggle dark mode", 3, "checked", "change"]],
    template: function NavigationComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavigationComponent_Template_a_click_4_listener() {
          return ctx.toggleMenu(true);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div")(6, "div", 4)(7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "ANAST");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, ".dev");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 7)(12, "ul", 8)(13, "li")(14, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "li")(17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "li")(20, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "CV");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 7)(23, "label", 12)(24, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, " Dark Mode");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function NavigationComponent_Template_input_change_26_listener() {
          return ctx.toggleDarkMode();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavigationComponent_Template_button_click_28_listener() {
          return ctx.toggleMenu();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "span", 17)(30, "span", 18)(31, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 19)(33, "div", 20)(34, "div", 21)(35, "ul", 22)(36, "li")(37, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavigationComponent_Template_a_click_37_listener() {
          return ctx.toggleMenu();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "li")(40, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavigationComponent_Template_a_click_40_listener() {
          return ctx.toggleMenu();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "li")(43, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavigationComponent_Template_a_click_43_listener() {
          return ctx.toggleMenu();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "CV");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "app-media");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "label", 26)(48, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, " Dark Mode");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function NavigationComponent_Template_input_change_50_listener() {
          return ctx.toggleDarkMode();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx.isDarkMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-expanded", ctx.menuState === "open");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](8, _c0, ctx.menuState === "open", ctx.menuState === "closed"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](11, _c1, ctx.menuState === "open", ctx.menuState === "closed"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](14, _c2, ctx.menuState === "open", ctx.menuState === "closed"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](17, _c3, ctx.menuState === "open", ctx.menuState === "closed"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-hidden", ctx.menuState === "closed");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx.isDarkMode);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _media_media_component__WEBPACK_IMPORTED_MODULE_0__.MediaComponent],
    styles: [".textNav {\n  position: relative;\n  white-space: nowrap;\n}\n.textNav::after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: -4px;\n  height: 2px;\n  background-color: #c4856c;\n  transform: scaleX(0);\n  transform-origin: right;\n  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.textNav:hover::after {\n  transform: scaleX(1);\n  transform-origin: left;\n}\n\n.textShadow {\n  text-shadow: none;\n}\n\n.dark .textNav::after {\n  background-color: #d4a08a;\n}\n\n.darkSwitch {\n  font-size: 17px;\n  position: relative;\n  display: inline-block;\n  width: 3.5em;\n  height: 2em;\n}\n\n.darkSwitch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.switchSlider {\n  --background: #3a3a3c;\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: var(--background);\n  transition: 0.5s;\n  border-radius: 30px;\n}\n\n.switchSlider:before {\n  position: absolute;\n  content: \"\";\n  height: 1.4em;\n  width: 1.4em;\n  border-radius: 50%;\n  left: 10%;\n  bottom: 15%;\n  box-shadow: inset 15px -4px 0px 15px #e5e5ea;\n  transition: 0.5s;\n}\n\ninput:checked + .switchSlider {\n  background-color: #c7c7cc;\n}\n\ninput:checked + .switchSlider:before {\n  transform: translateX(100%);\n  box-shadow: inset 8px -4px 0px 0px #3a3a3c;\n}\n\n.menuHeight {\n  height: calc(100vh - 62px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FBQ0o7QUFBSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSx1REFBQTtBQUVSO0FBQUk7RUFDSSxvQkFBQTtFQUNBLHNCQUFBO0FBRVI7O0FBQ0E7RUFDSSxpQkFBQTtBQUVKOztBQUVRO0VBQ0kseUJBQUE7QUFDWjs7QUFHQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFBSjs7QUFHQTtFQUNJLFVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQUFKOztBQUVBO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsbUNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSw0Q0FBQTtFQUVBLGdCQUFBO0FBQUo7O0FBR0E7RUFDSSx5QkFBQTtBQUFKOztBQUdBO0VBQ0ksMkJBQUE7RUFDQSwwQ0FBQTtBQUFKOztBQUdBO0VBQ0ksMEJBQUE7QUFBSiIsImZpbGUiOiJuYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHROYXZ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgYm90dG9tOiAtNHB4O1xyXG4gICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjNDg1NmM7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XHJcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQ7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcclxuICAgIH1cclxuICAgICY6aG92ZXI6OmFmdGVyIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcclxuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xyXG4gICAgfVxyXG59XHJcbi50ZXh0U2hhZG93e1xyXG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuLmRhcmt7XHJcbiAgICAudGV4dE5hdntcclxuICAgICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkNGEwOGE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi5kYXJrU3dpdGNoIHtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAzLjVlbTtcclxuICAgIGhlaWdodDogMmVtO1xyXG59XHJcblxyXG4uZGFya1N3aXRjaCBpbnB1dCB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbn1cclxuLnN3aXRjaFNsaWRlciB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMzYTNhM2M7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcclxuICAgIHRyYW5zaXRpb246IC41cztcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbn1cclxuXHJcbi5zd2l0Y2hTbGlkZXI6YmVmb3JlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBoZWlnaHQ6IDEuNGVtO1xyXG4gICAgd2lkdGg6IDEuNGVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbGVmdDogMTAlO1xyXG4gICAgYm90dG9tOiAxNSU7XHJcbiAgICBib3gtc2hhZG93Omluc2V0IDE1cHggLTRweCAwcHggMTVweCAgI2U1ZTVlYTtcclxuICAgIFxyXG4gICAgdHJhbnNpdGlvbjogLjVzO1xyXG59XHJcblxyXG5pbnB1dDpjaGVja2VkICsgLnN3aXRjaFNsaWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzdjN2NjO1xyXG59XHJcblxyXG5pbnB1dDpjaGVja2VkICsgLnN3aXRjaFNsaWRlcjpiZWZvcmUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgOHB4IC00cHggMHB4IDBweCAjM2EzYTNjO1xyXG59XHJcblxyXG4ubWVudUhlaWdodHtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDYycHgpO1xyXG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBQUNKO0FBQUk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0VBQ0EsdURBQUE7QUFFUjtBQUFJO0VBQ0ksb0JBQUE7RUFDQSxzQkFBQTtBQUVSOztBQUNBO0VBQ0ksaUJBQUE7QUFFSjs7QUFFUTtFQUNJLHlCQUFBO0FBQ1o7O0FBR0E7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBQUo7O0FBR0E7RUFDSSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUFBSjs7QUFFQTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLG1DQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsNENBQUE7RUFFQSxnQkFBQTtBQUFKOztBQUdBO0VBQ0kseUJBQUE7QUFBSjs7QUFHQTtFQUNJLDJCQUFBO0VBQ0EsMENBQUE7QUFBSjs7QUFHQTtFQUNJLDBCQUFBO0FBQUo7QUFDQSxnekdBQWd6RyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0TmF2e1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICY6OmFmdGVyIHtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIGJvdHRvbTogLTRweDtcclxuICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzQ4NTZjO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKDApO1xyXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0O1xyXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XHJcbiAgICB9XHJcbiAgICAmOmhvdmVyOjphZnRlciB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XHJcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdDtcclxuICAgIH1cclxufVxyXG4udGV4dFNoYWRvd3tcclxuICAgIHRleHQtc2hhZG93OiBub25lO1xyXG59XHJcbi5kYXJre1xyXG4gICAgLnRleHROYXZ7XHJcbiAgICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDRhMDhhO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4uZGFya1N3aXRjaCB7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMy41ZW07XHJcbiAgICBoZWlnaHQ6IDJlbTtcclxufVxyXG5cclxuLmRhcmtTd2l0Y2ggaW5wdXQge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG59XHJcbi5zd2l0Y2hTbGlkZXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjM2EzYTNjO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XHJcbiAgICB0cmFuc2l0aW9uOiAuNXM7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG59XHJcblxyXG4uc3dpdGNoU2xpZGVyOmJlZm9yZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgaGVpZ2h0OiAxLjRlbTtcclxuICAgIHdpZHRoOiAxLjRlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGxlZnQ6IDEwJTtcclxuICAgIGJvdHRvbTogMTUlO1xyXG4gICAgYm94LXNoYWRvdzppbnNldCAxNXB4IC00cHggMHB4IDE1cHggICNlNWU1ZWE7XHJcbiAgICBcclxuICAgIHRyYW5zaXRpb246IC41cztcclxufVxyXG5cclxuaW5wdXQ6Y2hlY2tlZCArIC5zd2l0Y2hTbGlkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2M3YzdjYztcclxufVxyXG5cclxuaW5wdXQ6Y2hlY2tlZCArIC5zd2l0Y2hTbGlkZXI6YmVmb3JlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDhweCAtNHB4IDBweCAwcHggIzNhM2EzYztcclxufVxyXG5cclxuLm1lbnVIZWlnaHR7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA2MnB4KTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"],
    encapsulation: 2
  });
}

/***/ }),

/***/ 1142:
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotFoundComponent": () => (/* binding */ NotFoundComponent)
/* harmony export */ });
/* harmony import */ var _tetris_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tetris.game */ 8866);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_seo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/seo.service */ 3794);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);





const _c0 = ["gameCanvas"];
function NotFoundComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3)(1, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h1", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "404");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "The page you're looking for has drifted into the void.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Return Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NotFoundComponent_div_1_Template_p_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.startGame());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Press ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "kbd");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Space");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, " to play Tetris");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function NotFoundComponent_div_2_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Best: ", ctx_r4.highScore, "");
  }
}
function NotFoundComponent_div_2_div_18_p_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "New Record!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function NotFoundComponent_div_2_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 23)(1, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Game Over");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, NotFoundComponent_div_2_div_18_p_5_Template, 2, 0, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NotFoundComponent_div_2_div_18_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r8.startGame());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Play Again");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Return Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Score: ", ctx_r6.score, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.score === ctx_r6.highScore && ctx_r6.score > 0);
  }
}
function NotFoundComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 9)(1, "div", 10)(2, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, NotFoundComponent_div_2_span_4_Template, 2, 1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "canvas", 13, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 15)(8, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NotFoundComponent_div_2_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r10.onTouch("ArrowLeft"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "\u2190");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NotFoundComponent_div_2_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r12.onTouch("ArrowDown"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "\u2193");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NotFoundComponent_div_2_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r13.onTouch("ArrowUp"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "\u21BB");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NotFoundComponent_div_2_Template_button_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r14.onTouch("ArrowRight"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "\u2192");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NotFoundComponent_div_2_Template_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r15.onTouch("Space"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Drop");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, NotFoundComponent_div_2_div_18_Template, 10, 2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.score);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.highScore > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.gameOver);
  }
}
class NotFoundComponent {
  constructor(seoService) {
    this.seoService = seoService;
    this.gameActive = false;
    this.gameOver = false;
    this.score = 0;
    this.highScore = 0;
    this.game = null;
    this.storageKey = 'tetrisHighScore';
  }
  ngOnInit() {
    this.seoService.update({
      title: '404 — Page Not Found | Anast.dev',
      description: 'The page you are looking for does not exist.',
      urlPath: '/404',
      robots: 'noindex, nofollow'
    });
    this.loadHighScore();
  }
  onKeyDown(event) {
    const gameKeys = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Space'];
    if (!this.gameActive && event.code === 'Space') {
      event.preventDefault();
      this.startGame();
      return;
    }
    if (this.gameActive && !this.gameOver && gameKeys.includes(event.code)) {
      event.preventDefault();
      this.game?.handleKey(event.code);
    }
    if (this.gameOver && event.code === 'Space') {
      event.preventDefault();
      this.startGame();
    }
  }
  onTouch(action) {
    if (this.gameActive && !this.gameOver) {
      this.game?.handleKey(action);
    }
  }
  startGame() {
    this.gameOver = false;
    this.score = 0;
    this.gameActive = true;
    setTimeout(() => {
      const isDark = document.body.classList.contains('dark');
      this.game = new _tetris_game__WEBPACK_IMPORTED_MODULE_0__.TetrisGame(this.canvasRef.nativeElement, {
        onScoreUpdate: s => this.score = s,
        onGameOver: s => this.handleGameOver(s)
      }, isDark);
      this.game.start();
    });
  }
  handleGameOver(finalScore) {
    this.score = finalScore;
    this.gameOver = true;
    if (finalScore > this.highScore) {
      this.highScore = finalScore;
      this.saveHighScore();
    }
  }
  loadHighScore() {
    const saved = localStorage.getItem(this.storageKey);
    this.highScore = saved ? parseInt(saved, 10) : 0;
  }
  saveHighScore() {
    localStorage.setItem(this.storageKey, this.highScore.toString());
  }
  ngOnDestroy() {
    this.game?.destroy();
  }
  static #_ = this.ɵfac = function NotFoundComponent_Factory(t) {
    return new (t || NotFoundComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_seo_service__WEBPACK_IMPORTED_MODULE_1__.SeoService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: NotFoundComponent,
    selectors: [["app-not-found"]],
    viewQuery: function NotFoundComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.canvasRef = _t.first);
      }
    },
    hostBindings: function NotFoundComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keydown", function NotFoundComponent_keydown_HostBindingHandler($event) {
          return ctx.onKeyDown($event);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"]);
      }
    },
    decls: 3,
    vars: 2,
    consts: [[1, "not-found"], ["class", "not-found__content", 4, "ngIf"], ["class", "not-found__game", 4, "ngIf"], [1, "not-found__content"], [1, "not-found__label"], [1, "not-found__code"], [1, "not-found__message"], ["routerLink", "/", 1, "not-found__home"], [1, "not-found__hint", 3, "click"], [1, "not-found__game"], [1, "not-found__hud"], [1, "not-found__score"], ["class", "not-found__high", 4, "ngIf"], [1, "not-found__canvas"], ["gameCanvas", ""], [1, "not-found__controls"], ["aria-label", "Move left", 1, "not-found__ctrl", 3, "click"], ["aria-label", "Soft drop", 1, "not-found__ctrl", 3, "click"], ["aria-label", "Rotate", 1, "not-found__ctrl", 3, "click"], ["aria-label", "Move right", 1, "not-found__ctrl", 3, "click"], ["aria-label", "Hard drop", 1, "not-found__ctrl", "not-found__ctrl--wide", 3, "click"], ["class", "not-found__overlay", 4, "ngIf"], [1, "not-found__high"], [1, "not-found__overlay"], [1, "not-found__overlay-title"], [1, "not-found__overlay-score"], ["class", "not-found__overlay-record", 4, "ngIf"], [1, "not-found__overlay-btn", 3, "click"], ["routerLink", "/", 1, "not-found__overlay-link"], [1, "not-found__overlay-record"]],
    template: function NotFoundComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NotFoundComponent_div_1_Template, 14, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NotFoundComponent_div_2_Template, 19, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.gameActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.gameActive);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink],
    styles: [".not-found[_ngcontent-%COMP%] {\n  min-height: 80vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n}\n.not-found__content[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 2rem;\n  animation: _ngcontent-%COMP%_nf-in 0.6s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.not-found__label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.25em;\n  font-weight: 700;\n  color: #c4856c !important;\n  margin-bottom: 0.75rem;\n}\n.not-found__code[_ngcontent-%COMP%] {\n  font-size: clamp(6rem, 20vw, 12rem);\n  font-weight: 900;\n  line-height: 1;\n  letter-spacing: -0.04em;\n  margin-bottom: 1rem;\n  background: linear-gradient(135deg, #c4856c 0%, #8e8e93 100%);\n  -webkit-background-clip: text;\n  background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.not-found__message[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  max-width: 24rem;\n  margin: 0 auto 2rem;\n}\n.not-found__home[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.75rem 2rem;\n  background: #c4856c;\n  color: #faf8f5 !important;\n  font-weight: 700;\n  font-size: 0.875rem;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  border-radius: 6px;\n  text-decoration: none;\n  transition: background 0.2s;\n}\n.not-found__home[_ngcontent-%COMP%]:hover {\n  background: #b07660;\n}\n.not-found__hint[_ngcontent-%COMP%] {\n  margin-top: 3rem;\n  font-size: 0.75rem;\n  color: #636366 !important;\n  animation: _ngcontent-%COMP%_nf-pulse 2.5s ease-in-out infinite;\n}\n.not-found__hint[_ngcontent-%COMP%]   kbd[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.15rem 0.5rem;\n  border: 1px solid #3a3a3c;\n  border-radius: 4px;\n  font-family: monospace;\n  font-size: 0.7rem;\n}\n.not-found__game[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 80vh;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n}\n.not-found__canvas[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  flex: 1;\n  min-height: 0;\n  background: #0a0a0a;\n  border-radius: 8px;\n}\n.not-found__controls[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 0.5rem;\n  padding: 0.5rem 0;\n}\n.not-found__ctrl[_ngcontent-%COMP%] {\n  width: 2.75rem;\n  height: 2.75rem;\n  border-radius: 8px;\n  border: 1px solid #3a3a3c;\n  background: #1c1c1e;\n  color: #e5e5ea;\n  font-size: 1.25rem;\n  cursor: pointer;\n}\n.not-found__ctrl[_ngcontent-%COMP%]:active {\n  background: #3a3a3c;\n}\n.not-found__ctrl--wide[_ngcontent-%COMP%] {\n  width: auto;\n  padding: 0 1rem;\n  font-size: 0.8125rem;\n  font-weight: 700;\n  letter-spacing: 0.05em;\n}\n.not-found__hud[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1rem;\n  left: 50%;\n  transform: translateX(-50%);\n  z-index: 10;\n  display: flex;\n  gap: 1.5rem;\n  align-items: baseline;\n}\n.not-found__score[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 900;\n  color: #faf8f5;\n  letter-spacing: 0.05em;\n}\n.not-found__high[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #8e8e93;\n}\n.not-found__overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background: rgba(10, 10, 10, 0.85);\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n  border-radius: 8px;\n  animation: _ngcontent-%COMP%_nf-fade 0.3s ease;\n}\n.not-found__overlay-title[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 900;\n  color: #faf8f5 !important;\n  margin-bottom: 0.5rem;\n}\n.not-found__overlay-score[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  color: #aeaeb2 !important;\n  margin-bottom: 0.25rem;\n}\n.not-found__overlay-record[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 700;\n  color: #c4856c !important;\n  margin-bottom: 1.5rem;\n  animation: _ngcontent-%COMP%_nf-pulse 1.5s ease-in-out infinite;\n}\n.not-found__overlay-btn[_ngcontent-%COMP%] {\n  padding: 0.75rem 2rem;\n  background: #c4856c;\n  color: #faf8f5;\n  font-weight: 700;\n  font-size: 0.875rem;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: background 0.2s;\n  margin-bottom: 1rem;\n}\n.not-found__overlay-btn[_ngcontent-%COMP%]:hover {\n  background: #b07660;\n}\n.not-found__overlay-link[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: #8e8e93 !important;\n  text-decoration: none;\n}\n.not-found__overlay-link[_ngcontent-%COMP%]:hover {\n  color: #faf8f5 !important;\n}\n\n@keyframes _ngcontent-%COMP%_nf-in {\n  from {\n    opacity: 0;\n    transform: translateY(12px);\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n@keyframes _ngcontent-%COMP%_nf-pulse {\n  0%, 100% {\n    opacity: 0.4;\n  }\n  50% {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_nf-fade {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQUNKO0FBQUk7RUFBYSxrQkFBQTtFQUFvQixhQUFBO0VBQWUsbURBQUE7QUFLcEQ7QUFKSTtFQUFXLGtCQUFBO0VBQW9CLHlCQUFBO0VBQTJCLHNCQUFBO0VBQXdCLGdCQUFBO0VBQWtCLHlCQUFBO0VBQTJCLHNCQUFBO0FBWW5JO0FBWEk7RUFDSSxtQ0FBQTtFQUFxQyxnQkFBQTtFQUFrQixjQUFBO0VBQWdCLHVCQUFBO0VBQXlCLG1CQUFBO0VBQ2hHLDZEQUFBO0VBQ0EsNkJBQUE7RUFBK0IscUJBQUE7RUFBdUIsb0NBQUE7QUFtQjlEO0FBakJJO0VBQWEsbUJBQUE7RUFBcUIsZ0JBQUE7RUFBa0IsbUJBQUE7QUFzQnhEO0FBckJJO0VBQ0kscUJBQUE7RUFBdUIscUJBQUE7RUFBdUIsbUJBQUE7RUFBcUIseUJBQUE7RUFDbkUsZ0JBQUE7RUFBa0IsbUJBQUE7RUFBcUIseUJBQUE7RUFBMkIscUJBQUE7RUFDbEUsa0JBQUE7RUFBb0IscUJBQUE7RUFBdUIsMkJBQUE7QUErQm5EO0FBOUJRO0VBQVUsbUJBQUE7QUFpQ2xCO0FBL0JJO0VBQ0ksZ0JBQUE7RUFBa0Isa0JBQUE7RUFBb0IseUJBQUE7RUFBMkIsNkNBQUE7QUFvQ3pFO0FBbkNRO0VBQU0scUJBQUE7RUFBdUIsdUJBQUE7RUFBeUIseUJBQUE7RUFBMkIsa0JBQUE7RUFBb0Isc0JBQUE7RUFBd0IsaUJBQUE7QUEyQ3JJO0FBekNJO0VBQVUsV0FBQTtFQUFhLFlBQUE7RUFBYyxrQkFBQTtFQUFvQixhQUFBO0VBQWUsc0JBQUE7QUFnRDVFO0FBL0NJO0VBQVksY0FBQTtFQUFnQixXQUFBO0VBQWEsT0FBQTtFQUFTLGFBQUE7RUFBZSxtQkFBQTtFQUFxQixrQkFBQTtBQXVEMUY7QUF0REk7RUFBYyxhQUFBO0VBQWUsdUJBQUE7RUFBeUIsV0FBQTtFQUFhLGlCQUFBO0FBNER2RTtBQTNESTtFQUNJLGNBQUE7RUFBZ0IsZUFBQTtFQUFpQixrQkFBQTtFQUFvQix5QkFBQTtFQUNyRCxtQkFBQTtFQUFxQixjQUFBO0VBQWdCLGtCQUFBO0VBQW9CLGVBQUE7QUFtRWpFO0FBbEVRO0VBQVcsbUJBQUE7QUFxRW5CO0FBcEVRO0VBQVUsV0FBQTtFQUFhLGVBQUE7RUFBaUIsb0JBQUE7RUFBc0IsZ0JBQUE7RUFBa0Isc0JBQUE7QUEyRXhGO0FBekVJO0VBQVMsa0JBQUE7RUFBb0IsU0FBQTtFQUFXLFNBQUE7RUFBVywyQkFBQTtFQUE2QixXQUFBO0VBQWEsYUFBQTtFQUFlLFdBQUE7RUFBYSxxQkFBQTtBQW1GN0g7QUFsRkk7RUFBVyxpQkFBQTtFQUFtQixnQkFBQTtFQUFrQixjQUFBO0VBQWdCLHNCQUFBO0FBd0ZwRTtBQXZGSTtFQUFVLGtCQUFBO0VBQW9CLGdCQUFBO0VBQWtCLGNBQUE7QUE0RnBEO0FBM0ZJO0VBQ0ksa0JBQUE7RUFBb0IsUUFBQTtFQUFVLGFBQUE7RUFBZSxzQkFBQTtFQUF3QixtQkFBQTtFQUFxQix1QkFBQTtFQUMxRixrQ0FBQTtFQUFpQyxrQ0FBQTtVQUFBLDBCQUFBO0VBQTRCLGtCQUFBO0VBQW9CLDRCQUFBO0FBcUd6RjtBQW5HSTtFQUFtQixlQUFBO0VBQWlCLGdCQUFBO0VBQWtCLHlCQUFBO0VBQTJCLHFCQUFBO0FBeUdyRjtBQXhHSTtFQUFtQixtQkFBQTtFQUFxQix5QkFBQTtFQUEyQixzQkFBQTtBQTZHdkU7QUE1R0k7RUFBb0IsbUJBQUE7RUFBcUIsZ0JBQUE7RUFBa0IseUJBQUE7RUFBMkIscUJBQUE7RUFBdUIsNkNBQUE7QUFtSGpIO0FBbEhJO0VBQ0kscUJBQUE7RUFBdUIsbUJBQUE7RUFBcUIsY0FBQTtFQUFnQixnQkFBQTtFQUFrQixtQkFBQTtFQUM5RSx5QkFBQTtFQUEyQixxQkFBQTtFQUF1QixZQUFBO0VBQWMsa0JBQUE7RUFBb0IsZUFBQTtFQUNwRiwyQkFBQTtFQUE2QixtQkFBQTtBQTZIckM7QUE1SFE7RUFBVSxtQkFBQTtBQStIbEI7QUE3SEk7RUFBa0Isb0JBQUE7RUFBc0IseUJBQUE7RUFBMkIscUJBQUE7QUFrSXZFO0FBbEk4RjtFQUFVLHlCQUFBO0FBcUl4Rzs7QUFuSUE7RUFBbUI7SUFBTyxVQUFBO0lBQVksMkJBQUE7RUF5SXBDO0VBekltRTtJQUFLLFVBQUE7SUFBWSxlQUFBO0VBNklwRjtBQUNGO0FBN0lBO0VBQXNCO0lBQVcsWUFBQTtFQWlKL0I7RUFqSitDO0lBQU0sVUFBQTtFQW9KckQ7QUFDRjtBQXBKQTtFQUFxQjtJQUFPLFVBQUE7RUF3SjFCO0VBeEp3QztJQUFLLFVBQUE7RUEySjdDO0FBQ0YiLCJmaWxlIjoibm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vdC1mb3VuZCB7XG4gICAgbWluLWhlaWdodDogODB2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICZfX2NvbnRlbnQgeyB0ZXh0LWFsaWduOiBjZW50ZXI7IHBhZGRpbmc6IDJyZW07IGFuaW1hdGlvbjogbmYtaW4gMC42cyBjdWJpYy1iZXppZXIoMC4xNiwxLDAuMywxKTsgfVxuICAgICZfX2xhYmVsIHsgZm9udC1zaXplOiAwLjc1cmVtOyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyBsZXR0ZXItc3BhY2luZzogMC4yNWVtOyBmb250LXdlaWdodDogNzAwOyBjb2xvcjogI2M0ODU2YyAhaW1wb3J0YW50OyBtYXJnaW4tYm90dG9tOiAwLjc1cmVtOyB9XG4gICAgJl9fY29kZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogY2xhbXAoNnJlbSwgMjB2dywgMTJyZW0pOyBmb250LXdlaWdodDogOTAwOyBsaW5lLWhlaWdodDogMTsgbGV0dGVyLXNwYWNpbmc6IC0wLjA0ZW07IG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNjNDg1NmMgMCUsICM4ZThlOTMgMTAwJSk7XG4gICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0OyBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7IC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICB9XG4gICAgJl9fbWVzc2FnZSB7IGZvbnQtc2l6ZTogMS4xMjVyZW07IG1heC13aWR0aDogMjRyZW07IG1hcmdpbjogMCBhdXRvIDJyZW07IH1cbiAgICAmX19ob21lIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyBwYWRkaW5nOiAwLjc1cmVtIDJyZW07IGJhY2tncm91bmQ6ICNjNDg1NmM7IGNvbG9yOiAjZmFmOGY1ICFpbXBvcnRhbnQ7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7IGZvbnQtc2l6ZTogMC44NzVyZW07IHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IGxldHRlci1zcGFjaW5nOiAwLjFlbTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4OyB0ZXh0LWRlY29yYXRpb246IG5vbmU7IHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycztcbiAgICAgICAgJjpob3ZlciB7IGJhY2tncm91bmQ6ICNiMDc2NjA7IH1cbiAgICB9XG4gICAgJl9faGludCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDNyZW07IGZvbnQtc2l6ZTogMC43NXJlbTsgY29sb3I6ICM2MzYzNjYgIWltcG9ydGFudDsgYW5pbWF0aW9uOiBuZi1wdWxzZSAyLjVzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuICAgICAgICBrYmQgeyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IHBhZGRpbmc6IDAuMTVyZW0gMC41cmVtOyBib3JkZXI6IDFweCBzb2xpZCAjM2EzYTNjOyBib3JkZXItcmFkaXVzOiA0cHg7IGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7IGZvbnQtc2l6ZTogMC43cmVtOyB9XG4gICAgfVxuICAgICZfX2dhbWUgeyB3aWR0aDogMTAwJTsgaGVpZ2h0OiA4MHZoOyBwb3NpdGlvbjogcmVsYXRpdmU7IGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cbiAgICAmX19jYW52YXMgeyBkaXNwbGF5OiBibG9jazsgd2lkdGg6IDEwMCU7IGZsZXg6IDE7IG1pbi1oZWlnaHQ6IDA7IGJhY2tncm91bmQ6ICMwYTBhMGE7IGJvcmRlci1yYWRpdXM6IDhweDsgfVxuICAgICZfX2NvbnRyb2xzIHsgZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IGdhcDogMC41cmVtOyBwYWRkaW5nOiAwLjVyZW0gMDsgfVxuICAgICZfX2N0cmwge1xuICAgICAgICB3aWR0aDogMi43NXJlbTsgaGVpZ2h0OiAyLjc1cmVtOyBib3JkZXItcmFkaXVzOiA4cHg7IGJvcmRlcjogMXB4IHNvbGlkICMzYTNhM2M7XG4gICAgICAgIGJhY2tncm91bmQ6ICMxYzFjMWU7IGNvbG9yOiAjZTVlNWVhOyBmb250LXNpemU6IDEuMjVyZW07IGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgJjphY3RpdmUgeyBiYWNrZ3JvdW5kOiAjM2EzYTNjOyB9XG4gICAgICAgICYtLXdpZGUgeyB3aWR0aDogYXV0bzsgcGFkZGluZzogMCAxcmVtOyBmb250LXNpemU6IDAuODEyNXJlbTsgZm9udC13ZWlnaHQ6IDcwMDsgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTsgfVxuICAgIH1cbiAgICAmX19odWQgeyBwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogMXJlbTsgbGVmdDogNTAlOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7IHotaW5kZXg6IDEwOyBkaXNwbGF5OiBmbGV4OyBnYXA6IDEuNXJlbTsgYWxpZ24taXRlbXM6IGJhc2VsaW5lOyB9XG4gICAgJl9fc2NvcmUgeyBmb250LXNpemU6IDEuNXJlbTsgZm9udC13ZWlnaHQ6IDkwMDsgY29sb3I6ICNmYWY4ZjU7IGxldHRlci1zcGFjaW5nOiAwLjA1ZW07IH1cbiAgICAmX19oaWdoIHsgZm9udC1zaXplOiAwLjc1cmVtOyBmb250LXdlaWdodDogNjAwOyBjb2xvcjogIzhlOGU5MzsgfVxuICAgICZfX292ZXJsYXkge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IGluc2V0OiAwOyBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgxMCwxMCwxMCwwLjg1KTsgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7IGJvcmRlci1yYWRpdXM6IDhweDsgYW5pbWF0aW9uOiBuZi1mYWRlIDAuM3MgZWFzZTtcbiAgICB9XG4gICAgJl9fb3ZlcmxheS10aXRsZSB7IGZvbnQtc2l6ZTogMnJlbTsgZm9udC13ZWlnaHQ6IDkwMDsgY29sb3I6ICNmYWY4ZjUgIWltcG9ydGFudDsgbWFyZ2luLWJvdHRvbTogMC41cmVtOyB9XG4gICAgJl9fb3ZlcmxheS1zY29yZSB7IGZvbnQtc2l6ZTogMS4xMjVyZW07IGNvbG9yOiAjYWVhZWIyICFpbXBvcnRhbnQ7IG1hcmdpbi1ib3R0b206IDAuMjVyZW07IH1cbiAgICAmX19vdmVybGF5LXJlY29yZCB7IGZvbnQtc2l6ZTogMC44NzVyZW07IGZvbnQtd2VpZ2h0OiA3MDA7IGNvbG9yOiAjYzQ4NTZjICFpbXBvcnRhbnQ7IG1hcmdpbi1ib3R0b206IDEuNXJlbTsgYW5pbWF0aW9uOiBuZi1wdWxzZSAxLjVzIGVhc2UtaW4tb3V0IGluZmluaXRlOyB9XG4gICAgJl9fb3ZlcmxheS1idG4ge1xuICAgICAgICBwYWRkaW5nOiAwLjc1cmVtIDJyZW07IGJhY2tncm91bmQ6ICNjNDg1NmM7IGNvbG9yOiAjZmFmOGY1OyBmb250LXdlaWdodDogNzAwOyBmb250LXNpemU6IDAuODc1cmVtO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyBsZXR0ZXItc3BhY2luZzogMC4xZW07IGJvcmRlcjogbm9uZTsgYm9yZGVyLXJhZGl1czogNnB4OyBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4yczsgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICAgICAgJjpob3ZlciB7IGJhY2tncm91bmQ6ICNiMDc2NjA7IH1cbiAgICB9XG4gICAgJl9fb3ZlcmxheS1saW5rIHsgZm9udC1zaXplOiAwLjgxMjVyZW07IGNvbG9yOiAjOGU4ZTkzICFpbXBvcnRhbnQ7IHRleHQtZGVjb3JhdGlvbjogbm9uZTsgJjpob3ZlciB7IGNvbG9yOiAjZmFmOGY1ICFpbXBvcnRhbnQ7IH0gfVxufVxuQGtleWZyYW1lcyBuZi1pbiB7IGZyb20geyBvcGFjaXR5OiAwOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTJweCk7IH0gdG8geyBvcGFjaXR5OiAxOyB0cmFuc2Zvcm06IG5vbmU7IH0gfVxuQGtleWZyYW1lcyBuZi1wdWxzZSB7IDAlLCAxMDAlIHsgb3BhY2l0eTogMC40OyB9IDUwJSB7IG9wYWNpdHk6IDE7IH0gfVxuQGtleWZyYW1lcyBuZi1mYWRlIHsgZnJvbSB7IG9wYWNpdHk6IDA7IH0gdG8geyBvcGFjaXR5OiAxOyB9IH1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQUNKO0FBQUk7RUFBYSxrQkFBQTtFQUFvQixhQUFBO0VBQWUsbURBQUE7QUFLcEQ7QUFKSTtFQUFXLGtCQUFBO0VBQW9CLHlCQUFBO0VBQTJCLHNCQUFBO0VBQXdCLGdCQUFBO0VBQWtCLHlCQUFBO0VBQTJCLHNCQUFBO0FBWW5JO0FBWEk7RUFDSSxtQ0FBQTtFQUFxQyxnQkFBQTtFQUFrQixjQUFBO0VBQWdCLHVCQUFBO0VBQXlCLG1CQUFBO0VBQ2hHLDZEQUFBO0VBQ0EsNkJBQUE7RUFBK0IscUJBQUE7RUFBdUIsb0NBQUE7QUFtQjlEO0FBakJJO0VBQWEsbUJBQUE7RUFBcUIsZ0JBQUE7RUFBa0IsbUJBQUE7QUFzQnhEO0FBckJJO0VBQ0kscUJBQUE7RUFBdUIscUJBQUE7RUFBdUIsbUJBQUE7RUFBcUIseUJBQUE7RUFDbkUsZ0JBQUE7RUFBa0IsbUJBQUE7RUFBcUIseUJBQUE7RUFBMkIscUJBQUE7RUFDbEUsa0JBQUE7RUFBb0IscUJBQUE7RUFBdUIsMkJBQUE7QUErQm5EO0FBOUJRO0VBQVUsbUJBQUE7QUFpQ2xCO0FBL0JJO0VBQ0ksZ0JBQUE7RUFBa0Isa0JBQUE7RUFBb0IseUJBQUE7RUFBMkIsNkNBQUE7QUFvQ3pFO0FBbkNRO0VBQU0scUJBQUE7RUFBdUIsdUJBQUE7RUFBeUIseUJBQUE7RUFBMkIsa0JBQUE7RUFBb0Isc0JBQUE7RUFBd0IsaUJBQUE7QUEyQ3JJO0FBekNJO0VBQVUsV0FBQTtFQUFhLFlBQUE7RUFBYyxrQkFBQTtFQUFvQixhQUFBO0VBQWUsc0JBQUE7QUFnRDVFO0FBL0NJO0VBQVksY0FBQTtFQUFnQixXQUFBO0VBQWEsT0FBQTtFQUFTLGFBQUE7RUFBZSxtQkFBQTtFQUFxQixrQkFBQTtBQXVEMUY7QUF0REk7RUFBYyxhQUFBO0VBQWUsdUJBQUE7RUFBeUIsV0FBQTtFQUFhLGlCQUFBO0FBNER2RTtBQTNESTtFQUNJLGNBQUE7RUFBZ0IsZUFBQTtFQUFpQixrQkFBQTtFQUFvQix5QkFBQTtFQUNyRCxtQkFBQTtFQUFxQixjQUFBO0VBQWdCLGtCQUFBO0VBQW9CLGVBQUE7QUFtRWpFO0FBbEVRO0VBQVcsbUJBQUE7QUFxRW5CO0FBcEVRO0VBQVUsV0FBQTtFQUFhLGVBQUE7RUFBaUIsb0JBQUE7RUFBc0IsZ0JBQUE7RUFBa0Isc0JBQUE7QUEyRXhGO0FBekVJO0VBQVMsa0JBQUE7RUFBb0IsU0FBQTtFQUFXLFNBQUE7RUFBVywyQkFBQTtFQUE2QixXQUFBO0VBQWEsYUFBQTtFQUFlLFdBQUE7RUFBYSxxQkFBQTtBQW1GN0g7QUFsRkk7RUFBVyxpQkFBQTtFQUFtQixnQkFBQTtFQUFrQixjQUFBO0VBQWdCLHNCQUFBO0FBd0ZwRTtBQXZGSTtFQUFVLGtCQUFBO0VBQW9CLGdCQUFBO0VBQWtCLGNBQUE7QUE0RnBEO0FBM0ZJO0VBQ0ksa0JBQUE7RUFBb0IsUUFBQTtFQUFVLGFBQUE7RUFBZSxzQkFBQTtFQUF3QixtQkFBQTtFQUFxQix1QkFBQTtFQUMxRixrQ0FBQTtFQUFpQyxrQ0FBQTtVQUFBLDBCQUFBO0VBQTRCLGtCQUFBO0VBQW9CLDRCQUFBO0FBcUd6RjtBQW5HSTtFQUFtQixlQUFBO0VBQWlCLGdCQUFBO0VBQWtCLHlCQUFBO0VBQTJCLHFCQUFBO0FBeUdyRjtBQXhHSTtFQUFtQixtQkFBQTtFQUFxQix5QkFBQTtFQUEyQixzQkFBQTtBQTZHdkU7QUE1R0k7RUFBb0IsbUJBQUE7RUFBcUIsZ0JBQUE7RUFBa0IseUJBQUE7RUFBMkIscUJBQUE7RUFBdUIsNkNBQUE7QUFtSGpIO0FBbEhJO0VBQ0kscUJBQUE7RUFBdUIsbUJBQUE7RUFBcUIsY0FBQTtFQUFnQixnQkFBQTtFQUFrQixtQkFBQTtFQUM5RSx5QkFBQTtFQUEyQixxQkFBQTtFQUF1QixZQUFBO0VBQWMsa0JBQUE7RUFBb0IsZUFBQTtFQUNwRiwyQkFBQTtFQUE2QixtQkFBQTtBQTZIckM7QUE1SFE7RUFBVSxtQkFBQTtBQStIbEI7QUE3SEk7RUFBa0Isb0JBQUE7RUFBc0IseUJBQUE7RUFBMkIscUJBQUE7QUFrSXZFO0FBbEk4RjtFQUFVLHlCQUFBO0FBcUl4Rzs7QUFuSUE7RUFBbUI7SUFBTyxVQUFBO0lBQVksMkJBQUE7RUF5SXBDO0VBekltRTtJQUFLLFVBQUE7SUFBWSxlQUFBO0VBNklwRjtBQUNGO0FBN0lBO0VBQXNCO0lBQVcsWUFBQTtFQWlKL0I7RUFqSitDO0lBQU0sVUFBQTtFQW9KckQ7QUFDRjtBQXBKQTtFQUFxQjtJQUFPLFVBQUE7RUF3SjFCO0VBeEp3QztJQUFLLFVBQUE7RUEySjdDO0FBQ0Y7QUFFQSxvMFBBQW8wUCIsInNvdXJjZXNDb250ZW50IjpbIi5ub3QtZm91bmQge1xuICAgIG1pbi1oZWlnaHQ6IDgwdmg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAmX19jb250ZW50IHsgdGV4dC1hbGlnbjogY2VudGVyOyBwYWRkaW5nOiAycmVtOyBhbmltYXRpb246IG5mLWluIDAuNnMgY3ViaWMtYmV6aWVyKDAuMTYsMSwwLjMsMSk7IH1cbiAgICAmX19sYWJlbCB7IGZvbnQtc2l6ZTogMC43NXJlbTsgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgbGV0dGVyLXNwYWNpbmc6IDAuMjVlbTsgZm9udC13ZWlnaHQ6IDcwMDsgY29sb3I6ICNjNDg1NmMgIWltcG9ydGFudDsgbWFyZ2luLWJvdHRvbTogMC43NXJlbTsgfVxuICAgICZfX2NvZGUge1xuICAgICAgICBmb250LXNpemU6IGNsYW1wKDZyZW0sIDIwdncsIDEycmVtKTsgZm9udC13ZWlnaHQ6IDkwMDsgbGluZS1oZWlnaHQ6IDE7IGxldHRlci1zcGFjaW5nOiAtMC4wNGVtOyBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjYzQ4NTZjIDAlLCAjOGU4ZTkzIDEwMCUpO1xuICAgICAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDsgYmFja2dyb3VuZC1jbGlwOiB0ZXh0OyAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgfVxuICAgICZfX21lc3NhZ2UgeyBmb250LXNpemU6IDEuMTI1cmVtOyBtYXgtd2lkdGg6IDI0cmVtOyBtYXJnaW46IDAgYXV0byAycmVtOyB9XG4gICAgJl9faG9tZSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgcGFkZGluZzogMC43NXJlbSAycmVtOyBiYWNrZ3JvdW5kOiAjYzQ4NTZjOyBjb2xvcjogI2ZhZjhmNSAhaW1wb3J0YW50O1xuICAgICAgICBmb250LXdlaWdodDogNzAwOyBmb250LXNpemU6IDAuODc1cmVtOyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyBsZXR0ZXItc3BhY2luZzogMC4xZW07XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDsgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnM7XG4gICAgICAgICY6aG92ZXIgeyBiYWNrZ3JvdW5kOiAjYjA3NjYwOyB9XG4gICAgfVxuICAgICZfX2hpbnQge1xuICAgICAgICBtYXJnaW4tdG9wOiAzcmVtOyBmb250LXNpemU6IDAuNzVyZW07IGNvbG9yOiAjNjM2MzY2ICFpbXBvcnRhbnQ7IGFuaW1hdGlvbjogbmYtcHVsc2UgMi41cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbiAgICAgICAga2JkIHsgZGlzcGxheTogaW5saW5lLWJsb2NrOyBwYWRkaW5nOiAwLjE1cmVtIDAuNXJlbTsgYm9yZGVyOiAxcHggc29saWQgIzNhM2EzYzsgYm9yZGVyLXJhZGl1czogNHB4OyBmb250LWZhbWlseTogbW9ub3NwYWNlOyBmb250LXNpemU6IDAuN3JlbTsgfVxuICAgIH1cbiAgICAmX19nYW1lIHsgd2lkdGg6IDEwMCU7IGhlaWdodDogODB2aDsgcG9zaXRpb246IHJlbGF0aXZlOyBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XG4gICAgJl9fY2FudmFzIHsgZGlzcGxheTogYmxvY2s7IHdpZHRoOiAxMDAlOyBmbGV4OiAxOyBtaW4taGVpZ2h0OiAwOyBiYWNrZ3JvdW5kOiAjMGEwYTBhOyBib3JkZXItcmFkaXVzOiA4cHg7IH1cbiAgICAmX19jb250cm9scyB7IGRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBnYXA6IDAuNXJlbTsgcGFkZGluZzogMC41cmVtIDA7IH1cbiAgICAmX19jdHJsIHtcbiAgICAgICAgd2lkdGg6IDIuNzVyZW07IGhlaWdodDogMi43NXJlbTsgYm9yZGVyLXJhZGl1czogOHB4OyBib3JkZXI6IDFweCBzb2xpZCAjM2EzYTNjO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMWMxYzFlOyBjb2xvcjogI2U1ZTVlYTsgZm9udC1zaXplOiAxLjI1cmVtOyBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICY6YWN0aXZlIHsgYmFja2dyb3VuZDogIzNhM2EzYzsgfVxuICAgICAgICAmLS13aWRlIHsgd2lkdGg6IGF1dG87IHBhZGRpbmc6IDAgMXJlbTsgZm9udC1zaXplOiAwLjgxMjVyZW07IGZvbnQtd2VpZ2h0OiA3MDA7IGxldHRlci1zcGFjaW5nOiAwLjA1ZW07IH1cbiAgICB9XG4gICAgJl9faHVkIHsgcG9zaXRpb246IGFic29sdXRlOyB0b3A6IDFyZW07IGxlZnQ6IDUwJTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpOyB6LWluZGV4OiAxMDsgZGlzcGxheTogZmxleDsgZ2FwOiAxLjVyZW07IGFsaWduLWl0ZW1zOiBiYXNlbGluZTsgfVxuICAgICZfX3Njb3JlIHsgZm9udC1zaXplOiAxLjVyZW07IGZvbnQtd2VpZ2h0OiA5MDA7IGNvbG9yOiAjZmFmOGY1OyBsZXR0ZXItc3BhY2luZzogMC4wNWVtOyB9XG4gICAgJl9faGlnaCB7IGZvbnQtc2l6ZTogMC43NXJlbTsgZm9udC13ZWlnaHQ6IDYwMDsgY29sb3I6ICM4ZThlOTM7IH1cbiAgICAmX19vdmVybGF5IHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlOyBpbnNldDogMDsgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMTAsMTAsMTAsMC44NSk7IGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpOyBib3JkZXItcmFkaXVzOiA4cHg7IGFuaW1hdGlvbjogbmYtZmFkZSAwLjNzIGVhc2U7XG4gICAgfVxuICAgICZfX292ZXJsYXktdGl0bGUgeyBmb250LXNpemU6IDJyZW07IGZvbnQtd2VpZ2h0OiA5MDA7IGNvbG9yOiAjZmFmOGY1ICFpbXBvcnRhbnQ7IG1hcmdpbi1ib3R0b206IDAuNXJlbTsgfVxuICAgICZfX292ZXJsYXktc2NvcmUgeyBmb250LXNpemU6IDEuMTI1cmVtOyBjb2xvcjogI2FlYWViMiAhaW1wb3J0YW50OyBtYXJnaW4tYm90dG9tOiAwLjI1cmVtOyB9XG4gICAgJl9fb3ZlcmxheS1yZWNvcmQgeyBmb250LXNpemU6IDAuODc1cmVtOyBmb250LXdlaWdodDogNzAwOyBjb2xvcjogI2M0ODU2YyAhaW1wb3J0YW50OyBtYXJnaW4tYm90dG9tOiAxLjVyZW07IGFuaW1hdGlvbjogbmYtcHVsc2UgMS41cyBlYXNlLWluLW91dCBpbmZpbml0ZTsgfVxuICAgICZfX292ZXJsYXktYnRuIHtcbiAgICAgICAgcGFkZGluZzogMC43NXJlbSAycmVtOyBiYWNrZ3JvdW5kOiAjYzQ4NTZjOyBjb2xvcjogI2ZhZjhmNTsgZm9udC13ZWlnaHQ6IDcwMDsgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgbGV0dGVyLXNwYWNpbmc6IDAuMWVtOyBib3JkZXI6IG5vbmU7IGJvcmRlci1yYWRpdXM6IDZweDsgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnM7IG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgICAgICY6aG92ZXIgeyBiYWNrZ3JvdW5kOiAjYjA3NjYwOyB9XG4gICAgfVxuICAgICZfX292ZXJsYXktbGluayB7IGZvbnQtc2l6ZTogMC44MTI1cmVtOyBjb2xvcjogIzhlOGU5MyAhaW1wb3J0YW50OyB0ZXh0LWRlY29yYXRpb246IG5vbmU7ICY6aG92ZXIgeyBjb2xvcjogI2ZhZjhmNSAhaW1wb3J0YW50OyB9IH1cbn1cbkBrZXlmcmFtZXMgbmYtaW4geyBmcm9tIHsgb3BhY2l0eTogMDsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEycHgpOyB9IHRvIHsgb3BhY2l0eTogMTsgdHJhbnNmb3JtOiBub25lOyB9IH1cbkBrZXlmcmFtZXMgbmYtcHVsc2UgeyAwJSwgMTAwJSB7IG9wYWNpdHk6IDAuNDsgfSA1MCUgeyBvcGFjaXR5OiAxOyB9IH1cbkBrZXlmcmFtZXMgbmYtZmFkZSB7IGZyb20geyBvcGFjaXR5OiAwOyB9IHRvIHsgb3BhY2l0eTogMTsgfSB9XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 518:
/*!********************************************!*\
  !*** ./src/app/not-found/tetris-pieces.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TETRIS_PIECES": () => (/* binding */ TETRIS_PIECES),
/* harmony export */   "THEME_DARK": () => (/* binding */ THEME_DARK),
/* harmony export */   "THEME_LIGHT": () => (/* binding */ THEME_LIGHT),
/* harmony export */   "pieceColor": () => (/* binding */ pieceColor),
/* harmony export */   "rotateCW": () => (/* binding */ rotateCW)
/* harmony export */ });
const THEME_DARK = {
  bg: '#0a0a0a',
  grid: '#1c1c1e',
  text: '#faf8f5',
  textMuted: '#636366',
  highlight: 'rgba(255,255,255,0.12)'
};
const THEME_LIGHT = {
  bg: '#faf8f5',
  grid: '#e5e5ea',
  text: '#0f0f0f',
  textMuted: '#8e8e93',
  highlight: 'rgba(0,0,0,0.06)'
};
// I-piece, O, T, S, Z, J, L — each with dark/light color variants (using project theme)
const TETRIS_PIECES = [{
  shape: [[0, 0, 0, 0], [1, 1, 1, 1], [0, 0, 0, 0], [0, 0, 0, 0]],
  darkColor: '#c4856c',
  lightColor: '#c4856c'
}, {
  shape: [[1, 1], [1, 1]],
  darkColor: '#d4a08a',
  lightColor: '#b07660'
}, {
  shape: [[0, 1, 0], [1, 1, 1], [0, 0, 0]],
  darkColor: '#8e8e93',
  lightColor: '#636366'
}, {
  shape: [[0, 1, 1], [1, 1, 0], [0, 0, 0]],
  darkColor: '#c7c7cc',
  lightColor: '#3a3a3c'
}, {
  shape: [[1, 1, 0], [0, 1, 1], [0, 0, 0]],
  darkColor: '#aeaeb2',
  lightColor: '#636366'
}, {
  shape: [[1, 0, 0], [1, 1, 1], [0, 0, 0]],
  darkColor: '#636366',
  lightColor: '#8e8e93'
}, {
  shape: [[0, 0, 1], [1, 1, 1], [0, 0, 0]],
  darkColor: '#e5e5ea',
  lightColor: '#1c1c1e'
} // L: blue-200/800
];

function rotateCW(shape) {
  const n = shape.length;
  const out = Array.from({
    length: n
  }, () => Array(n).fill(0));
  for (let r = 0; r < n; r++) for (let c = 0; c < n; c++) out[c][n - 1 - r] = shape[r][c];
  return out;
}
function pieceColor(piece, isDark) {
  return isDark ? piece.darkColor : piece.lightColor;
}

/***/ }),

/***/ 8866:
/*!******************************************!*\
  !*** ./src/app/not-found/tetris.game.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TetrisGame": () => (/* binding */ TetrisGame)
/* harmony export */ });
/* harmony import */ var _tetris_pieces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tetris-pieces */ 518);

class TetrisGame {
  constructor(canvas, cb, isDark = true) {
    this.canvas = canvas;
    this.cb = cb;
    this.w = 0;
    this.h = 0;
    this.cell = 0;
    this.ox = 0;
    this.oy = 0;
    this.COLS = 10;
    this.ROWS = 20;
    this.board = [];
    this.piece = null;
    this.next = null;
    this.score = 0;
    this.lines = 0;
    this.level = 1;
    this.running = false;
    this.frameId = 0;
    this.lastDrop = 0;
    this.dropMs = 800;
    this.LINE_PTS = [0, 100, 300, 500, 800];
    this.tick = () => {
      if (!this.running) return;
      const now = performance.now();
      if (now - this.lastDrop > this.dropMs) {
        if (!this.move(0, 1)) this.lock();
        this.lastDrop = now;
      }
      this.draw();
      this.frameId = requestAnimationFrame(this.tick);
    };
    this.ctx = canvas.getContext('2d');
    this.isDark = isDark;
    this.theme = isDark ? _tetris_pieces__WEBPACK_IMPORTED_MODULE_0__.THEME_DARK : _tetris_pieces__WEBPACK_IMPORTED_MODULE_0__.THEME_LIGHT;
  }
  start() {
    this.setupCanvas();
    this.board = Array.from({
      length: this.ROWS
    }, () => Array(this.COLS).fill(''));
    this.score = 0;
    this.lines = 0;
    this.level = 1;
    this.dropMs = 800;
    this.next = this.rand();
    this.spawn();
    this.running = true;
    this.lastDrop = performance.now();
    this.tick();
  }
  stop() {
    this.running = false;
    cancelAnimationFrame(this.frameId);
  }
  destroy() {
    this.stop();
  }
  handleKey(code) {
    if (!this.running || !this.piece) return;
    if (code === 'ArrowLeft') this.move(-1, 0);else if (code === 'ArrowRight') this.move(1, 0);else if (code === 'ArrowDown') this.move(0, 1);else if (code === 'ArrowUp') this.rotate();else if (code === 'Space') this.hardDrop();
  }
  setupCanvas() {
    const dpr = window.devicePixelRatio || 1;
    const r = this.canvas.getBoundingClientRect();
    this.w = r.width;
    this.h = r.height;
    this.canvas.width = r.width * dpr;
    this.canvas.height = r.height * dpr;
    this.ctx.scale(dpr, dpr);
    this.cell = Math.floor(Math.min(this.w / 14, (this.h - 20) / this.ROWS));
    const boardW = this.COLS * this.cell;
    this.ox = Math.floor((this.w - boardW) * 0.38);
    this.oy = Math.floor((this.h - this.ROWS * this.cell) / 2);
  }
  rand() {
    return _tetris_pieces__WEBPACK_IMPORTED_MODULE_0__.TETRIS_PIECES[Math.floor(Math.random() * _tetris_pieces__WEBPACK_IMPORTED_MODULE_0__.TETRIS_PIECES.length)];
  }
  spawn() {
    const p = this.next;
    this.next = this.rand();
    const x = Math.floor((this.COLS - p.shape[0].length) / 2);
    this.piece = {
      shape: p.shape,
      color: (0,_tetris_pieces__WEBPACK_IMPORTED_MODULE_0__.pieceColor)(p, this.isDark),
      x,
      y: 0
    };
    if (this.hits(this.piece.shape, x, 0)) {
      this.running = false;
      cancelAnimationFrame(this.frameId);
      this.cb.onGameOver(this.score);
    }
  }
  hits(s, px, py) {
    for (let r = 0; r < s.length; r++) for (let c = 0; c < s[r].length; c++) {
      if (!s[r][c]) continue;
      const bx = px + c,
        by = py + r;
      if (bx < 0 || bx >= this.COLS || by >= this.ROWS) return true;
      if (by >= 0 && this.board[by][bx]) return true;
    }
    return false;
  }
  move(dx, dy) {
    if (!this.piece) return false;
    if (!this.hits(this.piece.shape, this.piece.x + dx, this.piece.y + dy)) {
      this.piece.x += dx;
      this.piece.y += dy;
      return true;
    }
    return false;
  }
  rotate() {
    if (!this.piece) return;
    const rot = (0,_tetris_pieces__WEBPACK_IMPORTED_MODULE_0__.rotateCW)(this.piece.shape);
    for (const kick of [0, -1, 1, -2, 2]) {
      if (!this.hits(rot, this.piece.x + kick, this.piece.y)) {
        this.piece.shape = rot;
        this.piece.x += kick;
        return;
      }
    }
  }
  hardDrop() {
    if (!this.piece) return;
    while (this.move(0, 1)) {}
    this.lock();
  }
  lock() {
    if (!this.piece) return;
    for (let r = 0; r < this.piece.shape.length; r++) for (let c = 0; c < this.piece.shape[r].length; c++) if (this.piece.shape[r][c] && this.piece.y + r >= 0) this.board[this.piece.y + r][this.piece.x + c] = this.piece.color;
    this.clearLines();
    this.spawn();
  }
  clearLines() {
    let n = 0;
    for (let r = this.ROWS - 1; r >= 0; r--) {
      if (this.board[r].every(c => c !== '')) {
        this.board.splice(r, 1);
        this.board.unshift(Array(this.COLS).fill(''));
        n++;
        r++;
      }
    }
    if (n) {
      this.lines += n;
      this.score += this.LINE_PTS[n] * this.level;
      this.level = Math.floor(this.lines / 10) + 1;
      this.dropMs = Math.max(100, 800 - (this.level - 1) * 70);
      this.cb.onScoreUpdate(this.score);
    }
  }
  ghostY() {
    if (!this.piece) return 0;
    let y = this.piece.y;
    while (!this.hits(this.piece.shape, this.piece.x, y + 1)) y++;
    return y;
  }
  draw() {
    const ctx = this.ctx;
    ctx.fillStyle = this.theme.bg;
    ctx.fillRect(0, 0, this.w, this.h);
    this.drawGrid();
    this.drawBoard();
    if (this.piece) {
      this.drawShape(this.piece.shape, this.piece.x, this.ghostY(), this.piece.color, 0.15);
      this.drawShape(this.piece.shape, this.piece.x, this.piece.y, this.piece.color, 1);
    }
    this.drawSidebar();
  }
  drawGrid() {
    this.ctx.strokeStyle = this.theme.grid;
    this.ctx.lineWidth = 0.5;
    for (let r = 0; r <= this.ROWS; r++) {
      this.ctx.beginPath();
      this.ctx.moveTo(this.ox, this.oy + r * this.cell);
      this.ctx.lineTo(this.ox + this.COLS * this.cell, this.oy + r * this.cell);
      this.ctx.stroke();
    }
    for (let c = 0; c <= this.COLS; c++) {
      this.ctx.beginPath();
      this.ctx.moveTo(this.ox + c * this.cell, this.oy);
      this.ctx.lineTo(this.ox + c * this.cell, this.oy + this.ROWS * this.cell);
      this.ctx.stroke();
    }
  }
  drawCell(col, row, color, alpha = 1) {
    const g = 1;
    const x = this.ox + col * this.cell + g;
    const y = this.oy + row * this.cell + g;
    const s = this.cell - g * 2;
    this.ctx.globalAlpha = alpha;
    this.ctx.fillStyle = color;
    this.ctx.fillRect(x, y, s, s);
    this.ctx.fillStyle = this.theme.highlight;
    this.ctx.fillRect(x, y, s, s * 0.25);
    this.ctx.globalAlpha = 1;
  }
  drawBoard() {
    for (let r = 0; r < this.ROWS; r++) for (let c = 0; c < this.COLS; c++) if (this.board[r][c]) this.drawCell(c, r, this.board[r][c]);
  }
  drawShape(shape, px, py, color, alpha) {
    for (let r = 0; r < shape.length; r++) for (let c = 0; c < shape[r].length; c++) if (shape[r][c] && py + r >= 0) this.drawCell(px + c, py + r, color, alpha);
  }
  drawSidebar() {
    const x = this.ox + this.COLS * this.cell + 16;
    if (x + 60 > this.w) return;
    const ctx = this.ctx;
    ctx.textAlign = 'left';
    ctx.fillStyle = this.theme.textMuted;
    ctx.font = '600 10px sans-serif';
    ctx.fillText('NEXT', x, this.oy + 12);
    if (this.next) {
      const ps = this.cell * 0.65;
      for (let r = 0; r < this.next.shape.length; r++) for (let c = 0; c < this.next.shape[r].length; c++) if (this.next.shape[r][c]) {
        ctx.fillStyle = (0,_tetris_pieces__WEBPACK_IMPORTED_MODULE_0__.pieceColor)(this.next, this.isDark);
        ctx.fillRect(x + c * ps, this.oy + 22 + r * ps, ps - 1, ps - 1);
      }
    }
    const sy = this.oy + 100;
    ctx.fillStyle = this.theme.textMuted;
    ctx.font = '600 10px sans-serif';
    ctx.fillText('LEVEL', x, sy);
    ctx.fillStyle = this.theme.text;
    ctx.font = 'bold 16px sans-serif';
    ctx.fillText(this.level.toString(), x, sy + 18);
    ctx.fillStyle = this.theme.textMuted;
    ctx.font = '600 10px sans-serif';
    ctx.fillText('LINES', x, sy + 44);
    ctx.fillStyle = this.theme.text;
    ctx.font = 'bold 16px sans-serif';
    ctx.fillText(this.lines.toString(), x, sy + 62);
  }
}

/***/ }),

/***/ 2341:
/*!**********************************************************!*\
  !*** ./src/app/progress-card/progress-card.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProgressCardComponent": () => (/* binding */ ProgressCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class ProgressCardComponent {
  static #_ = this.ɵfac = function ProgressCardComponent_Factory(t) {
    return new (t || ProgressCardComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ProgressCardComponent,
    selectors: [["app-progress-card"]],
    inputs: {
      progressCard: "progressCard"
    },
    decls: 15,
    vars: 3,
    consts: [[1, "px-4"], [1, "max-w-sm", "mx-auto", "bg-blue-100", "dark:bg-blue-800", "shadow-md", "rounded-2xl", "overflow-hidden", "border", "border-blue-200", "dark:border-blue-700"], [1, "px-5", "py-4", "flex", "justify-between", "items-center"], [1, "flex", "items-center", "gap-2"], [1, "w-2", "h-2", "rounded-full", "bg-accent", "dark:bg-accent-dark", "animate-pulse"], [1, "text-sm", "font-bold", "uppercase", "tracking-wider"], ["stroke-width", "2", "stroke", "currentColor", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "h-5", "w-5", "text-blue-600", "dark:text-blue-300"], ["d", "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z", "stroke-linejoin", "round", "stroke-linecap", "round"], [1, "px-5", "pb-5"], [1, "w-full", "bg-blue-200", "dark:bg-blue-700", "rounded-full", "h-2"], [1, "bg-accent", "dark:bg-accent-dark", "h-2", "rounded-full", "transition-all", "duration-500"], [1, "flex", "justify-between", "items-center", "mt-3"], [1, "text-xs", "font-medium", "text-blue-600", "dark:text-blue-300", "tracking-wide"]],
    template: function ProgressCardComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "In Progress");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "svg", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8)(10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11)(13, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.progressCard == null ? null : ctx.progressCard.percent);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.progressCard == null ? null : ctx.progressCard.percent, " Complete");
      }
    },
    styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9ncmVzcy1jYXJkLmNvbXBvbmVudC5zY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcHJvZ3Jlc3MtY2FyZC9wcm9ncmVzcy1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSw0S0FBNEsiLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 121:
/*!*****************************************************************!*\
  !*** ./src/app/projects/project-item/project-item.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectItemComponent": () => (/* binding */ ProjectItemComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_seo_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/seo.service */ 3794);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _svg_list_svg_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../svg-list/svg-list.component */ 357);
/* harmony import */ var _progress_card_progress_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../progress-card/progress-card.component */ 2341);
/* harmony import */ var _banner_article_banner_article_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../banner-article/banner-article.component */ 5980);








function ProjectItemComponent_div_0_img_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 21);
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r8.project.logoUrl == null ? null : ctx_r8.project.logoUrl.url, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"])("alt", ctx_r8.project.alt);
  }
}
function ProjectItemComponent_div_0_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r9.project.logoUrl == null ? null : ctx_r9.project.logoUrl.text);
  }
}
function ProjectItemComponent_div_0_img_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 21);
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r10.project.logoUrl == null ? null : ctx_r10.project.logoUrl.url, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"])("alt", ctx_r10.project.alt);
  }
}
function ProjectItemComponent_div_0_a_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 22)(1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("href", ctx_r11.project.link == null ? null : ctx_r11.project.link.url, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-label", ctx_r11.project.name ? "Open " + ctx_r11.project.name + " in a new tab" : "Open project in a new tab");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r11.project.link == null ? null : ctx_r11.project.link.text);
  }
}
function ProjectItemComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 14)(3, "div", 15)(4, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "h1", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, ProjectItemComponent_div_0_img_7_Template, 1, 2, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, ProjectItemComponent_div_0_span_8_Template, 2, 1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, ProjectItemComponent_div_0_img_9_Template, 1, 2, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, ProjectItemComponent_div_0_a_12_Template, 3, 3, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r0.project.heroImage, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"])("alt", (ctx_r0.project.name || "Project") + " project");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx_r0.project.logoUrl == null ? null : ctx_r0.project.logoUrl.url) && !ctx_r0.project.logoRight);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r0.project.onlyLogo);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx_r0.project.logoUrl == null ? null : ctx_r0.project.logoUrl.url) && ctx_r0.project.logoRight);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.project.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.project.link == null ? null : ctx_r0.project.link.url);
  }
}
function ProjectItemComponent_section_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 24)(1, "div", 25)(2, "div", 26)(3, "div", 27)(4, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "About This Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "h3", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.project == null ? null : ctx_r1.project.bannerSection == null ? null : ctx_r1.project.bannerSection.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.project == null ? null : ctx_r1.project.bannerSection == null ? null : ctx_r1.project.bannerSection.subtitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r1.project == null ? null : ctx_r1.project.bannerSection == null ? null : ctx_r1.project.bannerSection.ImageSrc, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"])("alt", ctx_r1.project == null ? null : ctx_r1.project.bannerSection == null ? null : ctx_r1.project.bannerSection.ImageAlt);
  }
}
function ProjectItemComponent_div_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-svg-list", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const svg_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svg", svg_r13.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](svg_r13.name);
  }
}
function ProjectItemComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ProjectItemComponent_div_9_div_1_Template, 4, 2, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r2.project == null ? null : ctx_r2.project.svgIds);
  }
}
function ProjectItemComponent_section_10_div_2_img_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 44);
  }
  if (rf & 2) {
    const card_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", card_r15 == null ? null : card_r15.svg, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"])("alt", card_r15 == null ? null : card_r15.alt);
  }
}
function ProjectItemComponent_section_10_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ProjectItemComponent_section_10_div_2_img_1_Template, 1, 2, "img", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 41)(3, "h3", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const card_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", card_r15 == null ? null : card_r15.svg);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](card_r15 == null ? null : card_r15.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](card_r15 == null ? null : card_r15.description);
  }
}
function ProjectItemComponent_section_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 36)(1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ProjectItemComponent_section_10_div_2_Template, 7, 3, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r3.project == null ? null : ctx_r3.project.infoCards);
  }
}
function ProjectItemComponent_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-banner-article", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const articleSection_r18 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("data", articleSection_r18);
  }
}
function ProjectItemComponent_section_12_h3_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h3", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r19.project == null ? null : ctx_r19.project.nextStepTitle);
  }
}
function ProjectItemComponent_section_12_ng_container_8_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const step_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](step_r21 == null ? null : step_r21.title);
  }
}
function ProjectItemComponent_section_12_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "li", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ProjectItemComponent_section_12_ng_container_8_span_2_Template, 2, 1, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const step_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", step_r21 == null ? null : step_r21.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](step_r21 == null ? null : step_r21.description);
  }
}
function ProjectItemComponent_section_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 46)(1, "div", 25)(2, "div", 47)(3, "div", 48)(4, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Roadmap");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, ProjectItemComponent_section_12_h3_6_Template, 2, 1, "h3", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "ul", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, ProjectItemComponent_section_12_ng_container_8_Template, 5, 2, "ng-container", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "img", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r5.project == null ? null : ctx_r5.project.nextStepTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r5.project == null ? null : ctx_r5.project.nextSteps);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r5.project == null ? null : ctx_r5.project.nextSvg, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"])("alt", ctx_r5.project == null ? null : ctx_r5.project.nextStepTitle);
  }
}
function ProjectItemComponent_section_13_a_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 62)(1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("href", ctx_r24.project == null ? null : ctx_r24.project.link == null ? null : ctx_r24.project.link.url, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-label", (ctx_r24.project == null ? null : ctx_r24.project.name) ? "Open " + (ctx_r24.project == null ? null : ctx_r24.project.name) + " in a new tab" : "Open project in a new tab");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r24.project == null ? null : ctx_r24.project.link == null ? null : ctx_r24.project.link.text);
  }
}
function ProjectItemComponent_section_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "h3", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "p", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, ProjectItemComponent_section_13_a_6_Template, 3, 3, "a", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r6.project == null ? null : ctx_r6.project.actionCard == null ? null : ctx_r6.project.actionCard.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r6.project == null ? null : ctx_r6.project.actionCard == null ? null : ctx_r6.project.actionCard.subtitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r6.project == null ? null : ctx_r6.project.link == null ? null : ctx_r6.project.link.url);
  }
}
function ProjectItemComponent_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-progress-card", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("progressCard", ctx_r7.project == null ? null : ctx_r7.project.progressCard);
  }
}
class ProjectItemComponent {
  constructor(http, route, seoService) {
    this.http = http;
    this.route = route;
    this.seoService = seoService;
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      const projectId = decodeURIComponent(params['id'] ?? '');
      const decodedId = this.decodeProjectId(projectId);
      this.getProjectFromJson(decodedId);
    });
  }
  decodeProjectId(projectId) {
    try {
      return atob(projectId);
    } catch {
      return projectId;
    }
  }
  getProjectFromJson(id) {
    this.http.get('assets/projects/projects.json').subscribe(data => {
      this.project = data.find(project => project.id === id);
      this.updateSeo();
    });
  }
  updateSeo() {
    if (!this.project) {
      this.seoService.update({
        title: 'Project | Sotiris Anastasiadis Portfolio',
        description: 'Explore this portfolio project by Sotiris Anastasiadis.',
        keywords: 'Portfolio Project, Web Development',
        urlPath: '/projects'
      });
      return;
    }
    const projectKeywords = this.project.svgIds?.map(skill => skill.name).filter(Boolean).join(', ');
    this.seoService.update({
      title: `${this.project.name ?? 'Project'} | Project by Sotiris Anastasiadis`,
      description: this.project.description ?? 'Explore this portfolio project by Sotiris Anastasiadis.',
      keywords: projectKeywords || this.project.logoUrl?.text,
      urlPath: `/projects/${encodeURIComponent(btoa(this.project.id))}`,
      image: this.normalizeImagePath(this.project.heroImage),
      type: 'article'
    });
  }
  normalizeImagePath(imagePath) {
    if (!imagePath) {
      return undefined;
    }
    return imagePath.replace(/^(\.\.\/)+/, '/');
  }
  static #_ = this.ɵfac = function ProjectItemComponent_Factory(t) {
    return new (t || ProjectItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_seo_service__WEBPACK_IMPORTED_MODULE_0__.SeoService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: ProjectItemComponent,
    selectors: [["app-project-item"]],
    decls: 15,
    vars: 8,
    consts: [["class", "h-[550px] relative", 4, "ngIf"], ["class", "banner-gradient pt-24 pb-14 mb-0", 4, "ngIf"], [1, "container", "px-4", "md:px-0", "mx-auto", "mt-14", "lg:mt-24"], [1, "text-center", "mb-14"], [1, "w-10", "h-[2px]", "bg-accent", "dark:bg-accent-dark", "mx-auto", "mb-5"], [1, "uppercase", "tracking-[0.2em]", "text-accent", "dark:text-accent-dark", "text-xs", "font-bold", "mb-3"], [1, "text-2xl", "sm:text-3xl", "font-bold"], ["class", "mx-auto w-fit justify-center flex flex-wrap gap-8 lg:gap-12", 4, "ngIf"], ["class", "container mx-auto px-4 lg:px-0", 4, "ngIf"], [4, "ngIf"], ["class", "banner-gradient pt-14 pb-14", 4, "ngIf"], ["class", "container mx-auto px-4 lg:px-0 flex flex-col justify-center items-center w-fit text-center", 4, "ngIf"], [1, "h-[550px]", "relative"], [1, "h-[550px]", "w-full", "object-cover", 3, "src", "alt"], [1, "absolute", "flex", "w-full", "h-full", "items-center", "inset-0", "bg-black/60", "backdrop-blur-[6px]", "z-10"], [1, "sm:w-4/5", "md:w-3/5", "lg:w-1/2", "space-y-5", "px-4", "md:px-8", "lg:px-[120px]"], [1, "uppercase", "tracking-[0.2em]", "text-accent-dark", "text-xs", "font-bold"], [1, "text-[36px]", "text-[#faf8f5]", "lg:text-4xl", "font-bold", "items-center", "flex", "flex-row", "gap-2"], [3, "src", "alt", 4, "ngIf"], [1, "text-lg", "md:text-xl", "text-[#aeaeb2]", "leading-relaxed"], ["target", "_blank", "rel", "noopener noreferrer", "class", "heroBtn sm:w-3/6 mb-6", 3, "href", 4, "ngIf"], [3, "src", "alt"], ["target", "_blank", "rel", "noopener noreferrer", 1, "heroBtn", "sm:w-3/6", "mb-6", 3, "href"], [1, "text"], [1, "banner-gradient", "pt-24", "pb-14", "mb-0"], [1, "container", "mx-auto"], [1, "mx-4", "lg:mx-0", "flex", "flex-col", "lg:flex-row-reverse", "gap-10", "justify-center", "items-center"], [1, "space-y-5", "w-full", "lg:w-[45%]"], [1, "uppercase", "tracking-[0.2em]", "text-accent", "dark:text-accent-dark", "text-xs", "font-bold"], [1, "text-lg", "text-blue-600", "dark:text-blue-300", "leading-relaxed"], [1, "self-center", "w-[55%]", "sm:w-[45%]", "lg:w-[28%]", 3, "src", "alt"], [1, "mx-auto", "w-fit", "justify-center", "flex", "flex-wrap", "gap-8", "lg:gap-12"], ["class", "tooltip", 4, "ngFor", "ngForOf"], [1, "tooltip"], [1, "flex", "h-full", 3, "svg"], [1, "tooltiptext"], [1, "container", "mx-auto", "px-4", "lg:px-0"], [1, "flex", "flex-col", "lg:flex-row", "justify-center", "gap-10", "w-full", "items-center", "lg:items-stretch"], ["class", "p-7 bg-blue-100 dark:bg-blue-800 dark:shadow-blue-900/20 shadow-lg rounded-2xl flex flex-col sm:flex-row lg:flex-col gap-5 w-[90%] sm:w-full lg:w-[350px] 2xl:w-[400px] border border-blue-200 dark:border-blue-700 transition-transform duration-300 hover:scale-[1.02]", 4, "ngFor", "ngForOf"], [1, "p-7", "bg-blue-100", "dark:bg-blue-800", "dark:shadow-blue-900/20", "shadow-lg", "rounded-2xl", "flex", "flex-col", "sm:flex-row", "lg:flex-col", "gap-5", "w-[90%]", "sm:w-full", "lg:w-[350px]", "2xl:w-[400px]", "border", "border-blue-200", "dark:border-blue-700", "transition-transform", "duration-300", "hover:scale-[1.02]"], ["class", "h-[160px] object-fill mb-2", 3, "src", "alt", 4, "ngIf"], [1, "text-center"], [1, "text-xl", "font-bold", "mb-3"], [1, "text-base", "leading-relaxed"], [1, "h-[160px]", "object-fill", "mb-2", 3, "src", "alt"], [3, "data"], [1, "banner-gradient", "pt-14", "pb-14"], [1, "mx-4", "lg:mx-0", "flex", "flex-col", "lg:flex-row", "gap-10", "justify-center", "items-center"], [1, "space-y-6", "w-full", "lg:w-[45%]"], ["class", "text-2xl sm:text-3xl font-bold", 4, "ngIf"], [1, "text-base", "text-blue-600", "dark:text-blue-300", "space-y-6"], [4, "ngFor", "ngForOf"], [1, "self-center", "w-[70%]", "sm:w-[50%]", "lg:w-[35%]", 3, "src", "alt"], [1, "flex", "flex-col", "gap-2", "border-l-2", "border-accent", "dark:border-accent-dark", "pl-5"], ["class", "text-lg font-bold", 4, "ngIf"], [1, "leading-relaxed"], [1, "text-lg", "font-bold"], [1, "container", "mx-auto", "px-4", "lg:px-0", "flex", "flex-col", "justify-center", "items-center", "w-fit", "text-center"], [1, "w-10", "h-[2px]", "bg-accent", "dark:bg-accent-dark", "mx-auto", "mb-6"], [1, "text-2xl", "md:text-3xl", "font-bold", "mb-3"], [1, "text-lg", "md:text-xl", "font-normal", "text-blue-600", "dark:text-blue-400", "mb-8", "leading-relaxed"], ["target", "_blank", "rel", "noopener noreferrer", "class", "heroBtn w-full sm:w-3/6 mb-6", 3, "href", 4, "ngIf"], ["target", "_blank", "rel", "noopener noreferrer", 1, "heroBtn", "w-full", "sm:w-3/6", "mb-6", 3, "href"], [3, "progressCard"]],
    template: function ProjectItemComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, ProjectItemComponent_div_0_Template, 13, 7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ProjectItemComponent_section_1_Template, 11, 4, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "section", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Tech Stack");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Built with Modern Web Technologies");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, ProjectItemComponent_div_9_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, ProjectItemComponent_section_10_Template, 3, 1, "section", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, ProjectItemComponent_ng_container_11_Template, 2, 1, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, ProjectItemComponent_section_12_Template, 10, 4, "section", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, ProjectItemComponent_section_13_Template, 7, 3, "section", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, ProjectItemComponent_ng_container_14_Template, 2, 1, "ng-container", 9);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.project && (ctx.project == null ? null : ctx.project.heroImage));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.project == null ? null : ctx.project.bannerSection);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.project);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.project == null ? null : ctx.project.infoCards);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.project == null ? null : ctx.project.articleSection);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.project == null ? null : ctx.project.nextSteps);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.project == null ? null : ctx.project.actionCard);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx.project == null ? null : ctx.project.progressCard) && (ctx.project == null ? null : ctx.project.inProgress));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _svg_list_svg_list_component__WEBPACK_IMPORTED_MODULE_1__.SvgListComponent, _progress_card_progress_card_component__WEBPACK_IMPORTED_MODULE_2__.ProgressCardComponent, _banner_article_banner_article_component__WEBPACK_IMPORTED_MODULE_3__.BannerArticleComponent],
    styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0LWl0ZW0uY29tcG9uZW50LnNjc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcHJvamVjdHMvcHJvamVjdC1pdGVtL3Byb2plY3QtaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsNEtBQTRLIiwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 5609:
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectsComponent": () => (/* binding */ ProjectsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_seo_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/seo.service */ 3794);
/* harmony import */ var _banner_product_banner_product_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../banner-product/banner-product.component */ 3711);
/* harmony import */ var _banner_focus_banner_focus_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../banner-focus/banner-focus.component */ 7200);
/* harmony import */ var _banner_gradient_banner_gradient_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../banner-gradient/banner-gradient.component */ 4427);
/* harmony import */ var _hero_hero_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hero/hero.component */ 3229);






class ProjectsComponent {
  constructor(seoService) {
    this.seoService = seoService;
  }
  ngOnInit() {
    this.seoService.update({
      title: 'Projects | Sotiris Anastasiadis Portfolio',
      description: 'Explore web projects by Sotiris Anastasiadis, including modern apps, AI experiments, and blockchain-based solutions.',
      keywords: 'Projects Portfolio, Angular Projects, React Projects, Web Applications',
      urlPath: '/projects',
      image: '/assets/images/hero-image-quantumgiz.jpg'
    });
  }
  static #_ = this.ɵfac = function ProjectsComponent_Factory(t) {
    return new (t || ProjectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_seo_service__WEBPACK_IMPORTED_MODULE_0__.SeoService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: ProjectsComponent,
    selectors: [["app-projects"]],
    decls: 4,
    vars: 0,
    template: function ProjectsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-hero")(1, "app-banner-gradient")(2, "app-banner-product")(3, "app-banner-focus");
      }
    },
    dependencies: [_banner_product_banner_product_component__WEBPACK_IMPORTED_MODULE_1__.BannerProductComponent, _banner_focus_banner_focus_component__WEBPACK_IMPORTED_MODULE_2__.BannerFocusComponent, _banner_gradient_banner_gradient_component__WEBPACK_IMPORTED_MODULE_3__.BannerGradientComponent, _hero_hero_component__WEBPACK_IMPORTED_MODULE_4__.HeroComponent],
    styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy5jb21wb25lbnQuc2NzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLG9LQUFvSyIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 3794:
/*!*****************************************!*\
  !*** ./src/app/services/seo.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SeoService": () => (/* binding */ SeoService)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 4497);



class SeoService {
  constructor(meta, title, document) {
    this.meta = meta;
    this.title = title;
    this.document = document;
    this.siteName = 'Anast.dev';
    this.baseUrl = 'https://anast.dev';
    this.defaultImage = 'https://anast.dev/assets/images/SotirisAnastasiadis.jpg';
    this.defaultRobots = 'index, follow';
    this.author = 'Sotiris Anastasiadis';
  }
  update(config) {
    const canonicalUrl = this.buildCanonicalUrl(config.urlPath);
    const image = this.buildImageUrl(config.image);
    const title = config.title;
    this.title.setTitle(title);
    this.updateNameTag('description', config.description);
    this.updateNameTag('keywords', config.keywords);
    this.updateNameTag('author', this.author);
    this.updateNameTag('robots', config.robots ?? this.defaultRobots);
    this.updatePropertyTag('og:type', config.type ?? 'website');
    this.updatePropertyTag('og:site_name', this.siteName);
    this.updatePropertyTag('og:locale', 'en_US');
    this.updatePropertyTag('og:title', title);
    this.updatePropertyTag('og:description', config.description);
    this.updatePropertyTag('og:url', canonicalUrl);
    this.updatePropertyTag('og:image', image);
    this.updateNameTag('twitter:card', 'summary_large_image');
    this.updateNameTag('twitter:title', title);
    this.updateNameTag('twitter:description', config.description);
    this.updateNameTag('twitter:image', image);
    this.updateCanonical(canonicalUrl);
  }
  updateNameTag(name, content) {
    if (!content) {
      this.meta.removeTag(`name='${name}'`);
      return;
    }
    this.meta.updateTag({
      name,
      content
    });
  }
  updatePropertyTag(property, content) {
    this.meta.updateTag({
      property,
      content
    });
  }
  buildCanonicalUrl(path) {
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    return `${this.baseUrl}${cleanPath}`;
  }
  buildImageUrl(image) {
    if (!image) {
      return this.defaultImage;
    }
    return image.startsWith('http') ? image : `${this.baseUrl}${image.startsWith('/') ? image : `/${image}`}`;
  }
  updateCanonical(url) {
    let linkTag = this.document.querySelector("link[rel='canonical']");
    if (!linkTag) {
      linkTag = this.document.createElement('link');
      linkTag.setAttribute('rel', 'canonical');
      this.document.head.appendChild(linkTag);
    }
    linkTag.setAttribute('href', url);
  }
  static #_ = this.ɵfac = function SeoService_Factory(t) {
    return new (t || SeoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.Meta), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: SeoService,
    factory: SeoService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 357:
/*!************************************************!*\
  !*** ./src/app/svg-list/svg-list.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SvgListComponent": () => (/* binding */ SvgListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);


function SvgListComponent__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 5)(2, "path", 6)(3, "path", 7)(4, "path", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function SvgListComponent__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 10)(2, "path", 11)(3, "path", 12)(4, "path", 13)(5, "path", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function SvgListComponent__svg_svg_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "circle", 15)(2, "path", 16)(3, "path", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "defs")(5, "linearGradient", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "stop", 19)(7, "stop", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "linearGradient", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "stop", 19)(10, "stop", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
}
function SvgListComponent__svg_svg_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 9)(1, "g", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "circle", 23)(3, "path", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function SvgListComponent__svg_svg_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 25)(2, "path", 26)(3, "path", 27)(4, "path", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function SvgListComponent__svg_svg_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 29)(2, "path", 30)(3, "path", 31)(4, "path", 32)(5, "path", 33)(6, "path", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function SvgListComponent__svg_svg_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function SvgListComponent__svg_svg_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 36)(2, "path", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function SvgListComponent__svg_svg_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function SvgListComponent__svg_svg_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function SvgListComponent__svg_svg_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 9)(1, "g", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 41)(3, "path", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function SvgListComponent__svg_svg_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
class SvgListComponent {
  constructor() {
    this.svg = '';
  }
  static #_ = this.ɵfac = function SvgListComponent_Factory(t) {
    return new (t || SvgListComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: SvgListComponent,
    selectors: [["app-svg-list"]],
    inputs: {
      svg: "svg"
    },
    decls: 13,
    vars: 12,
    consts: [[1, "techSvg", "p-2.5", "md:p-3", "shadow-md", "dark:shadow-blue-800/50", "rounded-xl", "flex", "w-fit", "bg-white", "dark:bg-blue-800"], ["xmlns", "http://www.w3.org/2000/svg", "x", "0px", "y", "0px", "viewBox", "0 0 48 48", 4, "ngIf"], ["viewBox", "0 0 128 128", 4, "ngIf"], ["class", "w-8 h-8 md:w-12 md:h-12", "viewBox", "0 0 300 384", 4, "ngIf"], ["xmlns", "http://www.w3.org/2000/svg", "x", "0px", "y", "0px", "viewBox", "0 0 48 48"], ["fill", "#c62828", "d", "M24,4C12.96,4,4,12.96,4,24c0,11.05,8.96,20,20,20s20-8.96,20-20C44,12.96,35.04,4,24,4z M24,38.98c-8.81,0-14.98-6.79-14.98-14.98c0-8.18,6.79-14.98,14.98-14.98c8.18,0,15.02,6.68,15.02,14.86C39.02,32.07,32.81,38.98,24,38.98z"], ["fill", "#c62828", "d", "M35.59,31.129c0,0-4.197,7.217-13.375,6.246c-8.894-0.951-10.6-8.423-10.688-8.894c1.912,3.52,4.756,6.217,11.58,6.217c7.129,0,9.806-5.354,9.806-5.354L35.59,31.129z"], ["fill", "#c62828", "d", "M36.482,30.236l-3.569-1.775c0,0-3.569,5.344-9.806,5.344c-6.903,0-8.796-3.354-8.903-3.559c3.412,3.402,8.09,3.059,11.58,1.775c7.815-2.863,7.129-9.806,7.129-9.806h4.462C37.375,22.215,38.267,27.569,36.482,30.236z"], ["fill", "#c62828", "d", "M32.021,21.323c0,0,0.392,7.227-6.236,9.806c-3.491,1.363-6.884,0.098-7.129,0c0,0,2.628,0.471,4.452,0c3.569-0.892,5.256-2.491,6.236-4.452c2.677-5.354-0.883-8.913-0.883-8.913l4.452-3.569c0,0,4.256,3.677,4.462,7.129H32.021z"], ["viewBox", "0 0 128 128"], ["fill", "#B3B3B3", "d", "M63.81 1.026L4.553 21.88l9.363 77.637 49.957 27.457 50.214-27.828 9.36-77.635z"], ["fill", "#A6120D", "d", "M117.536 25.998L63.672 7.629v112.785l45.141-24.983z"], ["fill", "#DD1B16", "d", "M11.201 26.329l8.026 69.434 44.444 24.651V7.627z"], ["fill", "#F2F2F2", "d", "M78.499 67.67l-14.827 6.934H48.044l-7.347 18.374-13.663.254 36.638-81.508L78.499 67.67zm-1.434-3.491L63.77 37.858 52.864 63.726h10.807l13.394.453z"], ["fill", "#B3B3B3", "d", "M63.671 11.724l.098 26.134 12.375 25.888H63.698l-.027 10.841 17.209.017 8.042 18.63 13.074.242z"], ["cx", "64", "cy", "64", "r", "64"], ["fill", "url(#a)", "d", "M106.317 112.014 49.167 38.4H38.4v51.179h8.614v-40.24l52.54 67.884a64.216 64.216 0 0 0 6.763-5.209z"], ["fill", "url(#b)", "d", "M81.778 38.4h8.533v51.2h-8.533z"], ["id", "a", "x1", "109", "x2", "144.5", "y1", "116.5", "y2", "160.5", "gradientTransform", "scale(.71111)", "gradientUnits", "userSpaceOnUse"], ["stop-color", "#fff"], ["offset", "1", "stop-color", "#fff", "stop-opacity", "0"], ["id", "b", "x1", "121", "x2", "120.799", "y1", "54", "y2", "106.875", "gradientTransform", "scale(.71111)", "gradientUnits", "userSpaceOnUse"], ["fill", "#61DAFB"], ["cx", "64", "cy", "64", "r", "11.4"], ["d", "M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"], ["fill", "#E44D26", "d", "M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"], ["fill", "#F16529", "d", "M64 116.8l36.378-10.086 8.559-95.878H64z"], ["fill", "#EBEBEB", "d", "M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z"], ["fill", "#fff", "d", "M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z"], ["fill", "#1572B6", "d", "M18.814 114.123L8.76 1.352h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z"], ["fill", "#33A9DC", "d", "M64.001 117.062l36.559-10.136 8.601-96.354h-45.16v106.49z"], ["fill", "#fff", "d", "M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711-3.4 38.114h-30.95V51.429z"], ["fill", "#EBEBEB", "d", "M64.083 87.349l-.061.018-15.403-4.159-.985-11.031H33.752l1.937 21.717 28.331 7.863.063-.018v-14.39z"], ["fill", "#fff", "d", "M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881H81.127z"], ["fill", "#EBEBEB", "d", "M64.048 23.435v13.831H30.64l-.277-3.108-.63-7.012-.331-3.711h34.646zm-.047 27.996v13.831H48.792l-.277-3.108-.631-7.012-.33-3.711h16.447z"], ["d", "M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0", "fill", "#38b2ac"], ["fill", "#F0DB4F", "d", "M1.408 1.408h125.184v125.185H1.408z"], ["fill", "#323330", "d", "M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"], ["fill", "#007acc", "d", "M2 63.91v62.5h125v-125H2zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1A23 23 0 0180 109.19c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73l4.6-2.64 3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H57.16v46.23H45.65V69.26H29.38v-5a49.19 49.19 0 01.14-5.16c.06-.08 10-.12 22-.1h21.81z"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "fill", "#CB6699", "d", "M1.219 56.156c0 .703.207 1.167.323 1.618.756 2.933 2.381 5.45 4.309 7.746 2.746 3.272 6.109 5.906 9.554 8.383 2.988 2.148 6.037 4.248 9.037 6.38.515.366 1.002.787 1.561 1.236-.481.26-.881.489-1.297.7-3.959 2.008-7.768 4.259-11.279 6.986-2.116 1.644-4.162 3.391-5.607 5.674-2.325 3.672-3.148 7.584-1.415 11.761.506 1.22 1.278 2.274 2.367 3.053.353.252.749.502 1.162.6 1.058.249 2.136.412 3.207.609l3.033-.002c3.354-.299 6.407-1.448 9.166-3.352 4.312-2.976 7.217-6.966 8.466-12.087.908-3.722.945-7.448-.125-11.153a11.696 11.696 0 00-.354-1.014c-.13-.333-.283-.657-.463-1.072l6.876-3.954.103.088c-.125.409-.258.817-.371 1.23-.817 2.984-1.36 6.02-1.165 9.117.208 3.3 1.129 6.389 3.061 9.146 1.562 2.23 5.284 2.313 6.944.075.589-.795 1.16-1.626 1.589-2.513 1.121-2.315 2.159-4.671 3.23-7.011l.187-.428c-.077 1.108-.167 2.081-.208 3.055-.064 1.521.025 3.033.545 4.48.445 1.238 1.202 2.163 2.62 2.326.97.111 1.743-.333 2.456-.896a10.384 10.384 0 002.691-3.199c1.901-3.491 3.853-6.961 5.576-10.54 1.864-3.871 3.494-7.855 5.225-11.792l.286-.698c.409 1.607.694 3.181 1.219 4.671.61 1.729 1.365 3.417 2.187 5.058.389.775.344 1.278-.195 1.928-2.256 2.72-4.473 5.473-6.692 8.223-.491.607-.98 1.225-1.389 1.888a3.701 3.701 0 00-.48 1.364 1.737 1.737 0 001.383 1.971 9.661 9.661 0 002.708.193c3.097-.228 5.909-1.315 8.395-3.157 3.221-2.386 4.255-5.642 3.475-9.501-.211-1.047-.584-2.065-.947-3.074-.163-.455-.174-.774.123-1.198 2.575-3.677 4.775-7.578 6.821-11.569.081-.157.164-.314.306-.482.663 3.45 1.661 6.775 3.449 9.792-.912.879-1.815 1.676-2.632 2.554-1.799 1.934-3.359 4.034-4.173 6.595-.35 1.104-.619 2.226-.463 3.405.242 1.831 1.742 3.021 3.543 2.604 3.854-.892 7.181-2.708 9.612-5.925 1.636-2.166 1.785-4.582 1.1-7.113-.188-.688-.411-1.365-.651-2.154.951-.295 1.878-.649 2.837-.868 4.979-1.136 9.904-.938 14.702.86 2.801 1.05 5.064 2.807 6.406 5.571 1.639 3.379.733 6.585-2.452 8.721-.297.199-.637.356-.883.605a.869.869 0 00-.205.67c.021.123.346.277.533.275 1.047-.008 1.896-.557 2.711-1.121 2.042-1.413 3.532-3.314 3.853-5.817l.063-.188-.077-1.63c-.031-.094.023-.187.016-.258-.434-3.645-2.381-6.472-5.213-8.688-3.28-2.565-7.153-3.621-11.249-3.788a25.401 25.401 0 00-9.765 1.503c-.897.325-1.786.71-2.688 1.073-.121-.219-.251-.429-.358-.646-.926-1.896-2.048-3.708-2.296-5.882-.176-1.544-.392-3.086-.025-4.613.353-1.469.813-2.913 1.246-4.362.223-.746.066-1.164-.646-1.5a2.854 2.854 0 00-.786-.258c-1.75-.254-3.476-.109-5.171.384-.6.175-1.036.511-1.169 1.175-.076.381-.231.746-.339 1.122-.443 1.563-.757 3.156-1.473 4.645-1.794 3.735-3.842 7.329-5.938 10.897-.227.385-.466.763-.752 1.23-.736-1.54-1.521-2.922-1.759-4.542-.269-1.832-.481-3.661-.025-5.479.339-1.356.782-2.687 1.19-4.025.193-.636.104-.97-.472-1.305-.291-.169-.62-.319-.948-.368a11.643 11.643 0 00-5.354.438c-.543.176-.828.527-.994 1.087-.488 1.652-.904 3.344-1.589 4.915-2.774 6.36-5.628 12.687-8.479 19.013-.595 1.321-1.292 2.596-1.963 3.882-.17.326-.418.613-.63.919-.17-.201-.236-.339-.235-.477.005-.813-.092-1.65.063-2.436a172.189 172.189 0 011.578-7.099c.47-1.946 1.017-3.874 1.538-5.807.175-.647.178-1.252-.287-1.796-.781-.911-2.413-1.111-3.381-.409l-.428.242.083-.69c.204-1.479.245-2.953-.161-4.41-.506-1.816-1.802-2.861-3.686-2.803-.878.027-1.8.177-2.613.497-3.419 1.34-6.048 3.713-8.286 6.568a2.592 2.592 0 01-.757.654c-2.893 1.604-5.795 3.188-8.696 4.778l-3.229 1.769c-.866-.826-1.653-1.683-2.546-2.41-2.727-2.224-5.498-4.393-8.244-6.592-2.434-1.949-4.792-3.979-6.596-6.56-1.342-1.92-2.207-4.021-2.29-6.395-.105-3.025.753-5.789 2.293-8.362 1.97-3.292 4.657-5.934 7.611-8.327 3.125-2.53 6.505-4.678 10.008-6.639 4.901-2.743 9.942-5.171 15.347-6.774 5.542-1.644 11.165-2.585 16.965-1.929 2.28.258 4.494.78 6.527 1.895 1.557.853 2.834 1.97 3.428 3.716.586 1.718.568 3.459.162 5.204-.825 3.534-2.76 6.447-5.195 9.05-3.994 4.267-8.866 7.172-14.351 9.091a39.478 39.478 0 01-9.765 2.083c-2.729.229-5.401-.013-7.985-.962-1.711-.629-3.201-1.591-4.399-2.987-.214-.25-.488-.521-.887-.287-.391.23-.46.602-.329.979.219.626.421 1.278.762 1.838.857 1.405 2.107 2.424 3.483 3.298 2.643 1.681 5.597 2.246 8.66 2.377 4.648.201 9.183-.493 13.654-1.74 6.383-1.78 11.933-4.924 16.384-9.884 3.706-4.13 6.353-8.791 6.92-14.419.277-2.747-.018-5.438-1.304-7.944-1.395-2.715-3.613-4.734-6.265-6.125C68.756 18.179 64.588 17 60.286 17h-4.31c-5.21 0-10.247 1.493-15.143 3.274-3.706 1.349-7.34 2.941-10.868 4.703-7.683 3.839-14.838 8.468-20.715 14.833-2.928 3.171-5.407 6.67-6.833 10.79a40.494 40.494 0 00-1.111 3.746m27.839 36.013c-.333 4.459-2.354 8.074-5.657 11.002-1.858 1.646-3.989 2.818-6.471 3.23-.9.149-1.821.185-2.694-.188-1.245-.532-1.524-1.637-1.548-2.814-.037-1.876.62-3.572 1.521-5.186 1.176-2.104 2.9-3.708 4.741-5.206 2.9-2.361 6.046-4.359 9.268-6.245l.243-.1c.498 1.84.735 3.657.597 5.507zM54.303 70.98c-.235 1.424-.529 2.849-.945 4.229-1.438 4.777-3.285 9.406-5.282 13.973-.369.845-.906 1.616-1.373 2.417a1.689 1.689 0 01-.283.334c-.578.571-1.126.541-1.418-.206-.34-.868-.549-1.797-.729-2.716-.121-.617-.092-1.265-.13-1.897.039-4.494 1.41-8.578 3.736-12.38.959-1.568 2.003-3.062 3.598-4.054a6.27 6.27 0 011.595-.706c.85-.239 1.372.154 1.231 1.006zm17.164 21.868l6.169-7.203c.257 2.675-4.29 8.015-6.169 7.203zm19.703-4.847c-.436.25-.911.43-1.358.661-.409.212-.544-.002-.556-.354a2.385 2.385 0 01.093-.721c.833-2.938 2.366-5.446 4.647-7.486l.16-.082c1.085 3.035-.169 6.368-2.986 7.982z"], ["fill", "#623697"], ["d", "M61.195 0h4.953c12.918.535 25.688 4.89 36.043 12.676 9.809 7.289 17.473 17.437 21.727 28.906 2.441 6.387 3.664 13.18 4.082 19.992v4.211c-.414 11.293-3.664 22.52-9.73 32.082-6.801 10.895-16.922 19.73-28.727 24.828A64.399 64.399 0 0165.082 128h-2.144c-11.735-.191-23.41-3.66-33.297-9.992-11.196-7.113-20.114-17.785-25.028-30.117C1.891 81.19.441 74.02 0 66.812v-4.957c.504-14.39 5.953-28.609 15.41-39.496C23.168 13.31 33.5 6.48 44.887 2.937 50.172 1.27 55.676.41 61.195 0M25.191 37.523c-.03 12.153-.011 24.305-.011 36.454 1.43.011 2.86.011 4.293.011-.075-10.433.101-20.863-.106-31.293.48.907.918 1.84 1.465 2.707C37.035 54.91 43.105 64.5 49.309 74c1.738-.023 3.476-.023 5.214.004-.003-12.16-.007-24.32.004-36.48a308.076 308.076 0 00-4.25-.012c.075 10.32-.136 20.64.125 30.949-6.507-10.352-13.101-20.645-19.695-30.945a370.85 370.85 0 00-5.516.007m38.844-.011c-.129 12.16-.004 24.32-.047 36.476 6.469-.015 12.938.024 19.41-.02a83.36 83.36 0 01.024-3.952c-5.012-.016-10.027.007-15.043-.02-.074-4.21-.004-8.426-.04-12.637 4.395-.078 8.79.012 13.18-.047-.011-1.277-.011-2.554-.019-3.832-4.387.141-8.773-.054-13.164.012.012-4.023.02-8.05.02-12.078 4.699 0 9.398-.02 14.093.012-.008-1.301 0-2.606.016-3.906-6.145-.016-12.29-.008-18.43-.008m22.602.054c.004 1.266.004 2.528.008 3.79 3.488-.04 6.972.109 10.46.035-.023 10.863.004 21.718-.011 32.574 1.46.043 2.93.035 4.39-.09-.12-5.992.118-11.988-.156-17.977.067-2.699-.07-5.394.117-8.09.106-2.14-.277-4.277-.035-6.417 3.516.047 7.035.015 10.55.015a59.774 59.774 0 01.075-3.832c-8.469-.105-16.937-.094-25.398-.008M13.55 69.094c-1.977.91-2.106 4.023-.149 5.027 1.72 1.18 4.305-.371 4.227-2.41.133-2.004-2.29-3.688-4.078-2.617m29.23 15.289c-4.277 3.469-4.226 11.195.5 14.25 2.668 1.695 6.102 1.344 8.922.215.012-.621.027-1.239.05-1.86-2.671 1.395-6.41 1.68-8.675-.61-2.965-3.237-2.297-9.269 1.613-11.476 2.211-1.164 4.907-.824 7.086.239-.007-.66-.004-1.32 0-1.98-3.097-1.099-6.922-1.04-9.496 1.222m17.207 2.71c-1.89.22-3.758 1.22-4.633 2.966-1.253 2.496-1.109 5.867.864 7.96 2.035 2.297 5.945 2.32 8.18.297 2.425-2.308 2.699-6.468.757-9.164-1.148-1.629-3.273-2.183-5.168-2.058m17.887 2.722c-1.66 2.883-1.332 7.25 1.598 9.211 2.183 1.22 4.933.832 7.074-.308-.004-.617.004-1.235.031-1.848-1.687 1.07-3.937 1.856-5.812.777-1.309-.722-1.704-2.257-1.914-3.625 2.875-.039 5.746-.082 8.625-.074-.075-1.828-.118-3.894-1.45-5.308-2.199-2.43-6.644-1.657-8.152 1.175m-8.414-2.336v12.008c.652 0 1.312 0 1.973.004.023-2.195-.04-4.394.023-6.594.016-1.27.527-2.558 1.484-3.414.801-.605 1.883-.27 2.801-.246-.012-.636-.02-1.27-.023-1.902-1.793-.398-3.336.652-4.242 2.117-.02-.633-.04-1.266-.051-1.894-.656-.024-1.313-.051-1.965-.079zm0 0"], ["d", "M58.758 89.223c1.652-.805 4.023-.41 4.945 1.3 1.05 1.887 1.027 4.383-.137 6.211-1.52 2.286-5.527 1.786-6.523-.742-1.008-2.258-.617-5.484 1.715-6.77zm0 0M79.04 92.414c.046-1.574 1.144-3.137 2.726-3.48.976-.164 2.097.007 2.773.793.672.714.813 1.714.98 2.64-2.16.012-4.32-.031-6.48.047zm0 0"], ["viewBox", "0 0 300 384", 1, "w-8", "h-8", "md:w-12", "md:h-12"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M240.057 159.914C255.698 179.553 265.052 204.39 265.052 231.407C265.052 258.424 255.414 284.019 239.362 303.768L237.971 305.475L237.608 303.31C237.292 301.477 236.929 299.613 236.502 297.749C228.46 262.421 202.265 232.134 159.148 207.597C130.029 191.071 113.361 171.195 108.985 148.586C106.157 133.972 108.258 119.294 112.318 106.717C116.379 94.1569 122.414 83.6187 127.549 77.2831L144.328 56.7754C147.267 53.1731 152.781 53.1731 155.719 56.7754L240.073 159.914H240.057ZM266.584 139.422L154.155 1.96703C152.007 -0.655678 147.993 -0.655678 145.845 1.96703L33.4316 139.422L33.0683 139.881C12.3868 165.555 0 198.181 0 233.698C0 316.408 67.1635 383.461 150 383.461C232.837 383.461 300 316.408 300 233.698C300 198.181 287.613 165.555 266.932 139.896L266.568 139.438L266.584 139.422ZM60.3381 159.472L70.3866 147.164L70.6868 149.439C70.9237 151.24 71.2239 153.041 71.5715 154.858C78.0809 189.001 101.322 217.456 140.173 239.496C173.952 258.724 193.622 280.828 199.278 305.064C201.648 315.176 202.059 325.129 201.032 333.835L200.969 334.372L200.479 334.609C185.233 342.05 168.09 346.237 149.984 346.237C86.4546 346.237 34.9484 294.826 34.9484 231.391C34.9484 204.153 44.4439 179.142 60.3065 159.44L60.3381 159.472Z", "fill", "#4DA2FF"]],
    template: function SvgListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SvgListComponent__svg_svg_1_Template, 5, 0, "svg", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SvgListComponent__svg_svg_2_Template, 6, 0, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SvgListComponent__svg_svg_3_Template, 11, 0, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SvgListComponent__svg_svg_4_Template, 4, 0, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SvgListComponent__svg_svg_5_Template, 5, 0, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SvgListComponent__svg_svg_6_Template, 7, 0, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SvgListComponent__svg_svg_7_Template, 2, 0, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SvgListComponent__svg_svg_8_Template, 3, 0, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SvgListComponent__svg_svg_9_Template, 2, 0, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SvgListComponent__svg_svg_10_Template, 2, 0, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SvgListComponent__svg_svg_11_Template, 4, 0, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, SvgListComponent__svg_svg_12_Template, 2, 0, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.svg == "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.svg == "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.svg == "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.svg == "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.svg == "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.svg == "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.svg == "6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.svg == "7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.svg == "8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.svg == "9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.svg == "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.svg == "11");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
    styles: [".techSvg[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 30px;\n}\n@media (min-width: 980px) {\n  .techSvg[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 50px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN2Zy1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQUNKO0FBQUk7RUFGSjtJQUdRLFdBQUE7RUFHTjtBQUNGIiwiZmlsZSI6InN2Zy1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRlY2hTdmcgc3Zne1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBAc2NyZWVuIG1ke1xyXG4gICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgfVxyXG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc3ZnLWxpc3Qvc3ZnLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FBQ0o7QUFBSTtFQUZKO0lBR1EsV0FBQTtFQUdOO0FBQ0Y7QUFDQSw0WkFBNFoiLCJzb3VyY2VzQ29udGVudCI6WyIudGVjaFN2ZyBzdmd7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIEBzY3JlZW4gbWR7XHJcbiAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 1813:
/*!******************************************************!*\
  !*** ./src/app/tech-skills/tech-skills.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TechSkillsComponent": () => (/* binding */ TechSkillsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _svg_list_svg_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../svg-list/svg-list.component */ 357);



function TechSkillsComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-svg-list", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const skill_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("svg", skill_r1.svg);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](skill_r1.name);
  }
}
class TechSkillsComponent {
  constructor() {
    this.skillsList = [{
      name: 'Sitecore',
      svg: '0'
    }, {
      name: 'Angular',
      svg: '1'
    }, {
      name: 'Nextjs',
      svg: '2'
    }, {
      name: 'React',
      svg: '3'
    }, {
      name: 'HTML',
      svg: '4'
    }, {
      name: 'CSS',
      svg: '5'
    }, {
      name: 'TailWindCSS',
      svg: '6'
    }, {
      name: 'JavaScript',
      svg: '7'
    }, {
      name: 'TypeScript',
      svg: '8'
    }, {
      name: 'Sass',
      svg: '9'
    }, {
      name: '.NET',
      svg: '10'
    }, {
      name: 'Sui Move',
      svg: '11'
    }];
  }
  static #_ = this.ɵfac = function TechSkillsComponent_Factory(t) {
    return new (t || TechSkillsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: TechSkillsComponent,
    selectors: [["app-tech-skills"]],
    decls: 8,
    vars: 1,
    consts: [[1, "container", "mx-auto"], [1, "flex", "flex-col"], [1, "self-center", "uppercase", "tracking-[0.2em]", "text-accent", "dark:text-accent-dark", "text-sm", "font-bold", "mb-3"], [1, "self-center", "font-bold", "text-2xl", "md:text-3xl", "mb-12"], [1, "mx-4", "gap-4", "md:gap-8", "grid", "grid-cols-3", "md:grid-cols-6", "justify-items-center", "w-fit", "self-center"], ["class", "tooltip", 4, "ngFor", "ngForOf"], [1, "tooltip"], [3, "svg"], [1, "tooltiptext"]],
    template: function TechSkillsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Technologies");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "My Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, TechSkillsComponent_div_7_Template, 4, 2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.skillsList);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _svg_list_svg_list_component__WEBPACK_IMPORTED_MODULE_0__.SvgListComponent],
    styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZWNoLXNraWxscy5jb21wb25lbnQuc2NzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdGVjaC1za2lsbHMvdGVjaC1za2lsbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLHdLQUF3SyIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 4090:
/*!******************************************************!*\
  !*** ./src/app/testimonial/testimonial.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestimonialComponent": () => (/* binding */ TestimonialComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class TestimonialComponent {
  constructor() {}
  ngOnInit() {
    this.year = new Date().getFullYear();
  }
  static #_ = this.ɵfac = function TestimonialComponent_Factory(t) {
    return new (t || TestimonialComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: TestimonialComponent,
    selectors: [["app-testimonial"]],
    decls: 45,
    vars: 1,
    consts: [[1, "container", "mx-auto", "px-4", "lg:px-0"], [1, "relative"], [1, "hidden", "lg:block", "absolute", "top-10", "bottom-10", "left-[32%]", "right-0", "bg-blue-100", "dark:bg-blue-800", "rounded-3xl"], [1, "flex", "lg:flex-row", "flex-col", "items-start", "gap-10", "lg:gap-14", "relative"], [1, "lg:w-[36%]", "w-full", "flex", "flex-col", "items-center", "justify-center", "self-center", "relative", "z-[1]"], [1, "absolute", "-inset-6", "bg-accent/10", "dark:bg-accent-dark/15", "rounded-full", "blur-2xl"], ["src", "../../assets/images/SotirisAnastasiadisMemoji.png", "alt", "Sotiris Anastasiadis", 1, "relative", "rounded-full", "max-h-[240px]", "sm:max-h-[280px]", "md:max-h-[320px]", "w-auto", "border-[3px]", "border-blue-200", "dark:border-blue-700", "shadow-lg"], [1, "lg:w-[60%]", "w-full", "space-y-8", "lg:py-12", "lg:pr-8", "relative", "z-[1]"], [1, "w-10", "h-[2px]", "bg-accent", "dark:bg-accent-dark", "mb-4"], [1, "uppercase", "tracking-[0.25em]", "text-accent", "dark:text-accent-dark", "text-xs", "font-bold", "mb-2"], [1, "text-3xl", "lg:text-4xl", "font-bold", "leading-tight"], [1, "space-y-5"], [1, "text-lg", "leading-relaxed"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "gap-4", "pt-6"], [1, "flex", "flex-col", "gap-1.5", "border-l-2", "border-accent", "dark:border-accent-dark", "pl-4", "py-2", "bg-blue-100/50", "dark:bg-blue-800/40", "rounded-r-xl"], [1, "font-bold", "text-[11px]", "uppercase", "tracking-[0.2em]", "text-accent", "dark:text-accent-dark"], [1, "font-semibold", "text-base"]],
    template: function TestimonialComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3)(4, "div", 4)(5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 5)(7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7)(9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Background");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "About Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11)(16, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Software Engineer with 3 years of experience at Ernst & Young, delivering enterprise-grade web solutions for Greece's leading financial institutions. Specializing in building secure, scalable banking portals from inception to production using Sitecore XM, Angular, and .NET. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Proven track record in full-stack development: custom Sitecore implementations, MVC architecture, role-based security systems, authentication flows, and end-to-end .NET service development. Delivered complete web portal solutions including custom login systems, map integrations, financial calculators, and product catalogs. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Currently completing my Applied Informatics degree while actively expanding my skill set through personal projects showcased in this portfolio. Passionate about clean code, modern web technologies, and continuous learning. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13)(23, "div", 14)(24, "h4", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Sotiris Anastasiadis");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 14)(29, "h4", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 14)(34, "h4", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Education");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "B.Sc. Applied Informatics (Final Year)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 14)(39, "h4", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Employment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p", 16)(42, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Ernst&Young");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Software Engineer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("sotiris.anastjm@gmail.com");
      }
    },
    styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZXN0aW1vbmlhbC5jb21wb25lbnQuc2NzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdGVzdGltb25pYWwvdGVzdGltb25pYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLHdLQUF3SyIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map