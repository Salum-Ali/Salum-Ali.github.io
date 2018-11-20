(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _page_info_info_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page/info/info.component */ "./src/app/page/info/info.component.ts");
/* harmony import */ var _page_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page/home/home.component */ "./src/app/page/home/home.component.ts");
/* harmony import */ var _page_resume_resume_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page/resume/resume.component */ "./src/app/page/resume/resume.component.ts");
/* harmony import */ var _page_project_project_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page/project/project.component */ "./src/app/page/project/project.component.ts");
/* harmony import */ var _page_resume_resume_main_resume_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page/resume/resume-main/resume-main.component */ "./src/app/page/resume/resume-main/resume-main.component.ts");
/* harmony import */ var _page_project_project_past_project_past_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page/project/project-past/project-past.component */ "./src/app/page/project/project-past/project-past.component.ts");
/* harmony import */ var _page_project_project_present_project_present_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./page/project/project-present/project-present.component */ "./src/app/page/project/project-present/project-present.component.ts");
/* harmony import */ var _page_project_project_ongoing_project_ongoing_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./page/project/project-ongoing/project-ongoing.component */ "./src/app/page/project/project-ongoing/project-ongoing.component.ts");
/* harmony import */ var _page_project_project_future_project_future_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./page/project/project-future/project-future.component */ "./src/app/page/project/project-future/project-future.component.ts");
/* harmony import */ var _page_none_none_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./page/none/none.component */ "./src/app/page/none/none.component.ts");
/* harmony import */ var _page_resume_resume_animation_resume_animation_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./page/resume/resume-animation/resume-animation.component */ "./src/app/page/resume/resume-animation/resume-animation.component.ts");
/* harmony import */ var _page_resume_resume_art_resume_art_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./page/resume/resume-art/resume-art.component */ "./src/app/page/resume/resume-art/resume-art.component.ts");
/* harmony import */ var _page_resume_resume_code_resume_code_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./page/resume/resume-code/resume-code.component */ "./src/app/page/resume/resume-code/resume-code.component.ts");
/* harmony import */ var _page_resume_resume_sculpting_resume_sculpting_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./page/resume/resume-sculpting/resume-sculpting.component */ "./src/app/page/resume/resume-sculpting/resume-sculpting.component.ts");
/* harmony import */ var _page_info_info_me_info_me_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./page/info/info-me/info-me.component */ "./src/app/page/info/info-me/info-me.component.ts");
/* harmony import */ var _page_info_info_site_info_site_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./page/info/info-site/info-site.component */ "./src/app/page/info/info-site/info-site.component.ts");
/* harmony import */ var _page_credit_credit_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./page/credit/credit.component */ "./src/app/page/credit/credit.component.ts");
/* harmony import */ var _page_contact_contact_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./page/contact/contact.component */ "./src/app/page/contact/contact.component.ts");
/* harmony import */ var _page_map_map_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./page/map/map.component */ "./src/app/page/map/map.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: _page_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
    },
    {
        path: 'info',
        component: _page_info_info_component__WEBPACK_IMPORTED_MODULE_2__["InfoComponent"],
        children: [
            {
                path: '',
                redirectTo: 'me',
                pathMatch: 'full'
            },
            {
                path: 'me',
                component: _page_info_info_me_info_me_component__WEBPACK_IMPORTED_MODULE_16__["InfoMeComponent"]
            },
            {
                path: 'site',
                component: _page_info_info_site_info_site_component__WEBPACK_IMPORTED_MODULE_17__["InfoSiteComponent"]
            }
        ]
    },
    // ^ infos ^
    {
        path: 'cv',
        component: _page_resume_resume_component__WEBPACK_IMPORTED_MODULE_4__["ResumeComponent"],
        children: [
            {
                path: '',
                redirectTo: 'main',
                pathMatch: 'full'
            },
            {
                path: 'main',
                component: _page_resume_resume_main_resume_main_component__WEBPACK_IMPORTED_MODULE_6__["ResumeMainComponent"]
            },
            {
                path: 'modelling',
                component: _page_resume_resume_sculpting_resume_sculpting_component__WEBPACK_IMPORTED_MODULE_15__["ResumeSculptingComponent"]
            },
            // tempname?
            {
                path: 'animating',
                component: _page_resume_resume_animation_resume_animation_component__WEBPACK_IMPORTED_MODULE_12__["ResumeAnimationComponent"]
            },
            {
                path: 'painting',
                component: _page_resume_resume_art_resume_art_component__WEBPACK_IMPORTED_MODULE_13__["ResumeArtComponent"]
            },
            // tempname
            {
                path: 'scripting',
                component: _page_resume_resume_code_resume_code_component__WEBPACK_IMPORTED_MODULE_14__["ResumeCodeComponent"]
            }
            // tempname?
        ]
    },
    // ^ resumes ^
    {
        path: 'projects',
        component: _page_project_project_component__WEBPACK_IMPORTED_MODULE_5__["ProjectComponent"],
        children: [
            {
                path: '',
                redirectTo: 'present',
                pathMatch: 'full'
            },
            {
                path: 'past',
                component: _page_project_project_past_project_past_component__WEBPACK_IMPORTED_MODULE_7__["ProjectPastComponent"]
            },
            {
                path: 'present',
                component: _page_project_project_present_project_present_component__WEBPACK_IMPORTED_MODULE_8__["ProjectPresentComponent"]
            },
            {
                path: 'future',
                component: _page_project_project_future_project_future_component__WEBPACK_IMPORTED_MODULE_10__["ProjectFutureComponent"]
            },
            {
                path: 'ongoing',
                component: _page_project_project_ongoing_project_ongoing_component__WEBPACK_IMPORTED_MODULE_9__["ProjectOngoingComponent"]
            }
        ]
    },
    // ^ projects ^
    {
        path: 'contacts',
        component: _page_contact_contact_component__WEBPACK_IMPORTED_MODULE_19__["ContactComponent"],
    },
    {
        path: 'maps',
        component: _page_map_map_component__WEBPACK_IMPORTED_MODULE_20__["MapComponent"],
    },
    // ^ maps ^
    {
        path: 'credits',
        component: _page_credit_credit_component__WEBPACK_IMPORTED_MODULE_18__["CreditComponent"]
    },
    // ^ credits ^
    {
        path: '**',
        component: _page_none_none_component__WEBPACK_IMPORTED_MODULE_11__["NoneComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"hero-image\" class=\"index-hero\">\r\n  <div id=\"hero-content\">\r\n    <!-- <app-section-top></app-section-top> -->\r\n    <div id=\"toEnd\">\r\n      <a name=\"Top\" id=\"Top\" [routerLink]=\"[ '.' ]\" fragment=\"End\" queryParamsHandling=\"merge\">\r\n        Go to End of Page\r\n      </a>\r\n    </div>\r\n    <hr class=\"sectionSplitter shortSplitter\">\r\n    <header class=\"container\" id=\"site-header\">\r\n      <section id=\"siteHeadings\">\r\n        <app-maintitle></app-maintitle>\r\n      </section>\r\n      <app-core-navbar></app-core-navbar>\r\n    </header>\r\n    <hr class=\"sectionSplitter longSplitter\">\r\n    <main id=\"site-content\">\r\n      <section class=\"container\" id=\"core\">\r\n        <div class=\"row justify-content-center\" id=\"blurb\">\r\n          <!-- ^ justify-content-center here\r\n              is so that the header elements are centred ^ -->\r\n          <!-- ^ The \"justify-content-center\" classes on other rows\r\n               are there as \"Just in case\" fallbacks, mainly ^ -->\r\n          <!-- <h1>\r\n            {{title}}\r\n          </h1> -->\r\n          <p>\r\n            <!-- <button backButton>BACK</button> -->\r\n            <!-- <a href=\"javascript:void(0)\" (click)=\"backButton\">\r\n              Back\r\n            </a> -->\r\n            <app-back-button></app-back-button>\r\n          </p>\r\n          <app-mainblurb></app-mainblurb>\r\n        </div>\r\n        <div class=\"row justify-content-center\" id=\"content\">\r\n          <!-- ^ As of writing, card groups/decks are not responsive yet ^ -->\r\n          <div class=\"col-12 col-sm-12 col-md-12 col-lg-3 order-12 order-sm-12 order-md-12 order-lg-1\" id=\"feed\">\r\n            <app-social-feeds></app-social-feeds>\r\n            <ngx-twitter-timeline [data]=\"{sourceType: 'url', url: 'https://twitter.com/ChromaHills'}\" [opts]=\"{tweetLimit: 5}\"></ngx-twitter-timeline>\r\n\r\n          </div>\r\n          <div class=\"col-12 col-sm-12 col-md col-lg order-sm-1 order-md-1 order-lg-12\" id=\"story\">\r\n            <router-outlet></router-outlet>\r\n          </div>\r\n        </div>\r\n        <div class=\"row justify-content-center\" id=\"advert\">\r\n          <div class=\"col-12 col-sm-12 col-md-12 col-lg-12\">\r\n            <app-section-advert></app-section-advert>\r\n          </div>\r\n        </div>\r\n      </section>\r\n    </main>\r\n    <hr class=\"sectionSplitter longSplitter\">\r\n    <footer id=site-footer class=\"container\">\r\n      <app-footbar></app-footbar>\r\n    </footer>\r\n    <hr class=\"sectionSplitter shortSplitter\">\r\n    <div id=\"toTop\">\r\n      <a name=\"End\" id=\"End\" [routerLink]=\"['.']\" fragment=\"Top\">\r\n        Go to Top of Page\r\n      </a>\r\n    </div>\r\n    <!-- <app-section-bottom></app-section-bottom> -->\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* &.resume-hero\r\n  {\r\n    This is a Future Section... \r\n    it could happen\r\n  } */\n/* &.Portfolio-hero\r\n  {\r\n    This is a Future Section\r\n  } */\n/* &.project-hero\r\n  {\r\n  this is a future section\r\n  } */\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(titleService) {
        this.titleService = titleService;
        this.title = 'Welcome';
        this.siteName = 'Portfolio of Salum Muhammed';
    }
    AppComponent.prototype.setTitle = function (newTitle) {
        this.titleService.setTitle(newTitle);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./material */ "./src/app/material.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ngx_twitter_timeline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-twitter-timeline */ "./node_modules/ngx-twitter-timeline/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _section_global_social_feeds_social_feeds_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./section/global/social-feeds/social-feeds.component */ "./src/app/section/global/social-feeds/social-feeds.component.ts");
/* harmony import */ var _section_global_core_navbar_core_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./section/global/core-navbar/core-navbar.component */ "./src/app/section/global/core-navbar/core-navbar.component.ts");
/* harmony import */ var _page_resume_resume_main_resume_main_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./page/resume/resume-main/resume-main.component */ "./src/app/page/resume/resume-main/resume-main.component.ts");
/* harmony import */ var _page_project_project_past_project_past_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./page/project/project-past/project-past.component */ "./src/app/page/project/project-past/project-past.component.ts");
/* harmony import */ var _page_project_project_present_project_present_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./page/project/project-present/project-present.component */ "./src/app/page/project/project-present/project-present.component.ts");
/* harmony import */ var _page_project_project_future_project_future_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./page/project/project-future/project-future.component */ "./src/app/page/project/project-future/project-future.component.ts");
/* harmony import */ var _page_project_project_ongoing_project_ongoing_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./page/project/project-ongoing/project-ongoing.component */ "./src/app/page/project/project-ongoing/project-ongoing.component.ts");
/* harmony import */ var _page_info_info_me_info_me_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./page/info/info-me/info-me.component */ "./src/app/page/info/info-me/info-me.component.ts");
/* harmony import */ var _page_info_info_site_info_site_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./page/info/info-site/info-site.component */ "./src/app/page/info/info-site/info-site.component.ts");
/* harmony import */ var _section_global_section_advert_section_advert_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./section/global/section-advert/section-advert.component */ "./src/app/section/global/section-advert/section-advert.component.ts");
/* harmony import */ var _page_resume_resume_art_resume_art_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./page/resume/resume-art/resume-art.component */ "./src/app/page/resume/resume-art/resume-art.component.ts");
/* harmony import */ var _page_resume_resume_animation_resume_animation_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./page/resume/resume-animation/resume-animation.component */ "./src/app/page/resume/resume-animation/resume-animation.component.ts");
/* harmony import */ var _page_resume_resume_code_resume_code_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./page/resume/resume-code/resume-code.component */ "./src/app/page/resume/resume-code/resume-code.component.ts");
/* harmony import */ var _page_resume_resume_sculpting_resume_sculpting_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./page/resume/resume-sculpting/resume-sculpting.component */ "./src/app/page/resume/resume-sculpting/resume-sculpting.component.ts");
/* harmony import */ var _section_global_core_top_core_top_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./section/global/core-top/core-top.component */ "./src/app/section/global/core-top/core-top.component.ts");
/* harmony import */ var _section_global_core_bottom_core_bottom_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./section/global/core-bottom/core-bottom.component */ "./src/app/section/global/core-bottom/core-bottom.component.ts");
/* harmony import */ var _page_contact_contact_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./page/contact/contact.component */ "./src/app/page/contact/contact.component.ts");
/* harmony import */ var _page_map_map_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./page/map/map.component */ "./src/app/page/map/map.component.ts");
/* harmony import */ var _page_credit_credit_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./page/credit/credit.component */ "./src/app/page/credit/credit.component.ts");
/* harmony import */ var _section_global_footbar_footbar_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./section/global/footbar/footbar.component */ "./src/app/section/global/footbar/footbar.component.ts");
/* harmony import */ var _section_global_maintitle_maintitle_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./section/global/maintitle/maintitle.component */ "./src/app/section/global/maintitle/maintitle.component.ts");
/* harmony import */ var _section_global_mainblurb_mainblurb_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./section/global/mainblurb/mainblurb.component */ "./src/app/section/global/mainblurb/mainblurb.component.ts");
/* harmony import */ var _page_home_home_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./page/home/home.component */ "./src/app/page/home/home.component.ts");
/* harmony import */ var _page_none_none_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./page/none/none.component */ "./src/app/page/none/none.component.ts");
/* harmony import */ var _page_project_project_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./page/project/project.component */ "./src/app/page/project/project.component.ts");
/* harmony import */ var _page_resume_resume_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./page/resume/resume.component */ "./src/app/page/resume/resume.component.ts");
/* harmony import */ var _page_info_info_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./page/info/info.component */ "./src/app/page/info/info.component.ts");
/* harmony import */ var _section_global_button_bckpg_bckpg_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./section/global/button/bckpg/bckpg.component */ "./src/app/section/global/button/bckpg/bckpg.component.ts");
/* harmony import */ var _section_global_footbar_motto_motto_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./section/global/footbar/motto/motto.component */ "./src/app/section/global/footbar/motto/motto.component.ts");
/* harmony import */ var _section_global_footbar_icon_icon_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./section/global/footbar/icon/icon.component */ "./src/app/section/global/footbar/icon/icon.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// Import ngx-twitter-timeline


// import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
// import { FragmentPolyfillModule } from './fragment-polyfill.module';






























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _section_global_social_feeds_social_feeds_component__WEBPACK_IMPORTED_MODULE_8__["SocialFeedsComponent"],
                _section_global_core_navbar_core_navbar_component__WEBPACK_IMPORTED_MODULE_9__["CoreNavbarComponent"],
                _page_info_info_component__WEBPACK_IMPORTED_MODULE_34__["InfoComponent"],
                _page_resume_resume_main_resume_main_component__WEBPACK_IMPORTED_MODULE_10__["ResumeMainComponent"],
                _page_project_project_past_project_past_component__WEBPACK_IMPORTED_MODULE_11__["ProjectPastComponent"],
                _page_project_project_present_project_present_component__WEBPACK_IMPORTED_MODULE_12__["ProjectPresentComponent"],
                _page_project_project_future_project_future_component__WEBPACK_IMPORTED_MODULE_13__["ProjectFutureComponent"],
                _page_project_project_ongoing_project_ongoing_component__WEBPACK_IMPORTED_MODULE_14__["ProjectOngoingComponent"],
                _page_info_info_me_info_me_component__WEBPACK_IMPORTED_MODULE_15__["InfoMeComponent"],
                _page_info_info_site_info_site_component__WEBPACK_IMPORTED_MODULE_16__["InfoSiteComponent"],
                _page_home_home_component__WEBPACK_IMPORTED_MODULE_30__["HomeComponent"],
                _page_resume_resume_component__WEBPACK_IMPORTED_MODULE_33__["ResumeComponent"],
                _page_project_project_component__WEBPACK_IMPORTED_MODULE_32__["ProjectComponent"],
                _section_global_section_advert_section_advert_component__WEBPACK_IMPORTED_MODULE_17__["SectionAdvertComponent"],
                _page_none_none_component__WEBPACK_IMPORTED_MODULE_31__["NoneComponent"],
                _page_resume_resume_art_resume_art_component__WEBPACK_IMPORTED_MODULE_18__["ResumeArtComponent"],
                _page_resume_resume_animation_resume_animation_component__WEBPACK_IMPORTED_MODULE_19__["ResumeAnimationComponent"],
                _page_resume_resume_code_resume_code_component__WEBPACK_IMPORTED_MODULE_20__["ResumeCodeComponent"],
                _page_resume_resume_sculpting_resume_sculpting_component__WEBPACK_IMPORTED_MODULE_21__["ResumeSculptingComponent"],
                _section_global_core_top_core_top_component__WEBPACK_IMPORTED_MODULE_22__["CoreTopComponent"],
                _section_global_core_bottom_core_bottom_component__WEBPACK_IMPORTED_MODULE_23__["CoreBottomComponent"],
                _page_contact_contact_component__WEBPACK_IMPORTED_MODULE_24__["ContactComponent"],
                _page_map_map_component__WEBPACK_IMPORTED_MODULE_25__["MapComponent"],
                _page_credit_credit_component__WEBPACK_IMPORTED_MODULE_26__["CreditComponent"],
                _section_global_footbar_footbar_component__WEBPACK_IMPORTED_MODULE_27__["FootbarComponent"],
                _section_global_maintitle_maintitle_component__WEBPACK_IMPORTED_MODULE_28__["MaintitleComponent"],
                _section_global_mainblurb_mainblurb_component__WEBPACK_IMPORTED_MODULE_29__["MainblurbComponent"],
                _page_home_home_component__WEBPACK_IMPORTED_MODULE_30__["HomeComponent"],
                _page_none_none_component__WEBPACK_IMPORTED_MODULE_31__["NoneComponent"],
                _page_project_project_component__WEBPACK_IMPORTED_MODULE_32__["ProjectComponent"],
                _page_resume_resume_component__WEBPACK_IMPORTED_MODULE_33__["ResumeComponent"],
                _page_info_info_component__WEBPACK_IMPORTED_MODULE_34__["InfoComponent"],
                _section_global_button_bckpg_bckpg_component__WEBPACK_IMPORTED_MODULE_35__["BckpgComponent"],
                // ButtonComponent,
                _section_global_button_bckpg_bckpg_component__WEBPACK_IMPORTED_MODULE_35__["BckpgComponent"],
                _section_global_footbar_motto_motto_component__WEBPACK_IMPORTED_MODULE_36__["MottoComponent"],
                _section_global_footbar_icon_icon_component__WEBPACK_IMPORTED_MODULE_37__["IconComponent"],
            ],
            imports: [
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _material__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
                // Specify library as an import
                ngx_twitter_timeline__WEBPACK_IMPORTED_MODULE_6__["NgxTwitterTimelineModule"].forRoot()
            ],
            providers: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["Title"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());

// @Component({
//   // ...
//   providers: [Location, { provide: LocationStrategy, useClass: PathLocationStrategy }]
// })
// export class AppComponent {
//   constructor(private location: Location) { }
//   // ...
// }
// Directive({
//   selector: '[backButton]'
// });
// export class BackButtonDirective {
//   constructor(private location: Location) { }
//   @HostListener('click')
//   onClick() {
//     this.location.back();
//     console.log('goBack()...');
//   }
// }


/***/ }),

/***/ "./src/app/material.ts":
/*!*****************************!*\
  !*** ./src/app/material.ts ***!
  \*****************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_material__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatCheckboxModule"]],
            exports: [_angular_material__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatCheckboxModule"]],
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/page/contact/contact.component.html":
/*!*****************************************************!*\
  !*** ./src/app/page/contact/contact.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  contact works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/page/contact/contact.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/page/contact/contact.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page/contact/contact.component.ts":
/*!***************************************************!*\
  !*** ./src/app/page/contact/contact.component.ts ***!
  \***************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/page/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/page/contact/contact.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/page/credit/credit.component.html":
/*!***************************************************!*\
  !*** ./src/app/page/credit/credit.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  To give credit where credit is due: <br>\r\n\r\n</p>\r\n<ul>\r\n  <li>\r\n    This is a Single Page Application, built with the\r\n    <a href=\"https://angular.io/\">Angular</a>\r\n    Platform (v6+)\r\n  </li>\r\n  <li>\r\n    Using the\r\n    <a href=\"https://getbootstrap.com/\">Bootstrap</a>\r\n    Framework (v4+)\r\n  </li>\r\n  <li>\r\n    Fonts Used:\r\n    <ul>\r\n      <li>\r\n        <a href=\"https://fonts.google.com/specimen/Cinzel?selection.family=Cinzel\">Cinzel</a>\r\n        for headings and\r\n        <a href=\"https://fonts.google.com/specimen/Exo+2\">Exo 2</a>\r\n        for everything else. Both are by\r\n        <a href=\"Natanael Gama\">Natanael Gama</a>\r\n      </li>\r\n    </ul>\r\n  </li>\r\n  <li>\r\n    Icon Sets Used:\r\n    <ul>\r\n      <li>\r\n        <a href=\"https://icons8.com\">\r\n          Icon pack by Icons8\r\n        </a>\r\n      </li>\r\n      <li>\r\n        <a href=\"https://material.io/\">\r\n          Material Design\r\n        </a>\r\n        Icons\r\n      </li>\r\n    </ul>\r\n  </li>\r\n</ul>\r\n"

/***/ }),

/***/ "./src/app/page/credit/credit.component.scss":
/*!***************************************************!*\
  !*** ./src/app/page/credit/credit.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\n  color: whitesmoke;\n  text-align: left; }\n"

/***/ }),

/***/ "./src/app/page/credit/credit.component.ts":
/*!*************************************************!*\
  !*** ./src/app/page/credit/credit.component.ts ***!
  \*************************************************/
/*! exports provided: CreditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditComponent", function() { return CreditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CreditComponent = /** @class */ (function () {
    function CreditComponent() {
    }
    CreditComponent.prototype.ngOnInit = function () {
    };
    CreditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-credit',
            template: __webpack_require__(/*! ./credit.component.html */ "./src/app/page/credit/credit.component.html"),
            styles: [__webpack_require__(/*! ./credit.component.scss */ "./src/app/page/credit/credit.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CreditComponent);
    return CreditComponent;
}());



/***/ }),

/***/ "./src/app/page/home/home.component.html":
/*!***********************************************!*\
  !*** ./src/app/page/home/home.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\r\n  Welcome\r\n</h1>\r\n<p>\r\n  Hello and Welcome! <br>This is my portfolio Website - A place where I can both link to and upload portfolio-related\r\n  items\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/page/home/home.component.scss":
/*!***********************************************!*\
  !*** ./src/app/page/home/home.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n  text-align: left; }\n"

/***/ }),

/***/ "./src/app/page/home/home.component.ts":
/*!*********************************************!*\
  !*** ./src/app/page/home/home.component.ts ***!
  \*********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/page/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/page/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/page/info/info-me/info-me.component.html":
/*!**********************************************************!*\
  !*** ./src/app/page/info/info-me/info-me.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  info-me works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/page/info/info-me/info-me.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/page/info/info-me/info-me.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page/info/info-me/info-me.component.ts":
/*!********************************************************!*\
  !*** ./src/app/page/info/info-me/info-me.component.ts ***!
  \********************************************************/
/*! exports provided: InfoMeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoMeComponent", function() { return InfoMeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InfoMeComponent = /** @class */ (function () {
    function InfoMeComponent() {
    }
    InfoMeComponent.prototype.ngOnInit = function () {
    };
    InfoMeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-info-me',
            template: __webpack_require__(/*! ./info-me.component.html */ "./src/app/page/info/info-me/info-me.component.html"),
            styles: [__webpack_require__(/*! ./info-me.component.scss */ "./src/app/page/info/info-me/info-me.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], InfoMeComponent);
    return InfoMeComponent;
}());



/***/ }),

/***/ "./src/app/page/info/info-site/info-site.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page/info/info-site/info-site.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  info-site works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/page/info/info-site/info-site.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/page/info/info-site/info-site.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page/info/info-site/info-site.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page/info/info-site/info-site.component.ts ***!
  \************************************************************/
/*! exports provided: InfoSiteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoSiteComponent", function() { return InfoSiteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InfoSiteComponent = /** @class */ (function () {
    function InfoSiteComponent() {
    }
    InfoSiteComponent.prototype.ngOnInit = function () {
    };
    InfoSiteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-info-site',
            template: __webpack_require__(/*! ./info-site.component.html */ "./src/app/page/info/info-site/info-site.component.html"),
            styles: [__webpack_require__(/*! ./info-site.component.scss */ "./src/app/page/info/info-site/info-site.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], InfoSiteComponent);
    return InfoSiteComponent;
}());



/***/ }),

/***/ "./src/app/page/info/info.component.html":
/*!***********************************************!*\
  !*** ./src/app/page/info/info.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-pills nav-fill\">\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['me']\">\r\n      About Me\r\n    </a>\r\n  </li>\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['site']\">\r\n      The Site\r\n    </a>\r\n  </li>\r\n</ul>\r\n<div class=\"tab-content\">\r\n  <div class=\"tab-pane fade in show active\"><br>\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/page/info/info.component.scss":
/*!***********************************************!*\
  !*** ./src/app/page/info/info.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page/info/info.component.ts":
/*!*********************************************!*\
  !*** ./src/app/page/info/info.component.ts ***!
  \*********************************************/
/*! exports provided: InfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoComponent", function() { return InfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InfoComponent = /** @class */ (function () {
    function InfoComponent() {
    }
    InfoComponent.prototype.ngOnInit = function () {
    };
    InfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-info',
            template: __webpack_require__(/*! ./info.component.html */ "./src/app/page/info/info.component.html"),
            styles: [__webpack_require__(/*! ./info.component.scss */ "./src/app/page/info/info.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], InfoComponent);
    return InfoComponent;
}());



/***/ }),

/***/ "./src/app/page/map/map.component.html":
/*!*********************************************!*\
  !*** ./src/app/page/map/map.component.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  map works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/page/map/map.component.scss":
/*!*********************************************!*\
  !*** ./src/app/page/map/map.component.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page/map/map.component.ts":
/*!*******************************************!*\
  !*** ./src/app/page/map/map.component.ts ***!
  \*******************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MapComponent = /** @class */ (function () {
    function MapComponent() {
    }
    MapComponent.prototype.ngOnInit = function () {
    };
    MapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-map',
            template: __webpack_require__(/*! ./map.component.html */ "./src/app/page/map/map.component.html"),
            styles: [__webpack_require__(/*! ./map.component.scss */ "./src/app/page/map/map.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "./src/app/page/none/none.component.html":
/*!***********************************************!*\
  !*** ./src/app/page/none/none.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  Oh no! You have reached a page that does not exist (as of yet, at least)! <br>\r\n  Click <a [routerLink]=\"[ '.' ]\" routerLinkActive=\"active\">here</a> to go back to the previouse page, <br>\r\n  or click <a [routerLink]=\"[ '/home' ]\" routerLinkActive=\"active\">here</a> to return to the home screen\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/page/none/none.component.scss":
/*!***********************************************!*\
  !*** ./src/app/page/none/none.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page/none/none.component.ts":
/*!*********************************************!*\
  !*** ./src/app/page/none/none.component.ts ***!
  \*********************************************/
/*! exports provided: NoneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoneComponent", function() { return NoneComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NoneComponent = /** @class */ (function () {
    function NoneComponent() {
    }
    NoneComponent.prototype.ngOnInit = function () {
    };
    NoneComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-none',
            template: __webpack_require__(/*! ./none.component.html */ "./src/app/page/none/none.component.html"),
            styles: [__webpack_require__(/*! ./none.component.scss */ "./src/app/page/none/none.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NoneComponent);
    return NoneComponent;
}());



/***/ }),

/***/ "./src/app/page/project/project-future/project-future.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/page/project/project-future/project-future.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  project-future works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/page/project/project-future/project-future.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/page/project/project-future/project-future.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page/project/project-future/project-future.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/page/project/project-future/project-future.component.ts ***!
  \*************************************************************************/
/*! exports provided: ProjectFutureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectFutureComponent", function() { return ProjectFutureComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectFutureComponent = /** @class */ (function () {
    function ProjectFutureComponent() {
    }
    ProjectFutureComponent.prototype.ngOnInit = function () {
    };
    ProjectFutureComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-project-future',
            template: __webpack_require__(/*! ./project-future.component.html */ "./src/app/page/project/project-future/project-future.component.html"),
            styles: [__webpack_require__(/*! ./project-future.component.scss */ "./src/app/page/project/project-future/project-future.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectFutureComponent);
    return ProjectFutureComponent;
}());



/***/ }),

/***/ "./src/app/page/project/project-ongoing/project-ongoing.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/page/project/project-ongoing/project-ongoing.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  project-ongoing works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/page/project/project-ongoing/project-ongoing.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/page/project/project-ongoing/project-ongoing.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page/project/project-ongoing/project-ongoing.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/page/project/project-ongoing/project-ongoing.component.ts ***!
  \***************************************************************************/
/*! exports provided: ProjectOngoingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectOngoingComponent", function() { return ProjectOngoingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectOngoingComponent = /** @class */ (function () {
    function ProjectOngoingComponent() {
    }
    ProjectOngoingComponent.prototype.ngOnInit = function () {
    };
    ProjectOngoingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-project-ongoing',
            template: __webpack_require__(/*! ./project-ongoing.component.html */ "./src/app/page/project/project-ongoing/project-ongoing.component.html"),
            styles: [__webpack_require__(/*! ./project-ongoing.component.scss */ "./src/app/page/project/project-ongoing/project-ongoing.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectOngoingComponent);
    return ProjectOngoingComponent;
}());



/***/ }),

/***/ "./src/app/page/project/project-past/project-past.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/page/project/project-past/project-past.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  project-past works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/page/project/project-past/project-past.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/page/project/project-past/project-past.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page/project/project-past/project-past.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/page/project/project-past/project-past.component.ts ***!
  \*********************************************************************/
/*! exports provided: ProjectPastComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectPastComponent", function() { return ProjectPastComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectPastComponent = /** @class */ (function () {
    function ProjectPastComponent() {
    }
    ProjectPastComponent.prototype.ngOnInit = function () {
    };
    ProjectPastComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-project-past',
            template: __webpack_require__(/*! ./project-past.component.html */ "./src/app/page/project/project-past/project-past.component.html"),
            styles: [__webpack_require__(/*! ./project-past.component.scss */ "./src/app/page/project/project-past/project-past.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectPastComponent);
    return ProjectPastComponent;
}());



/***/ }),

/***/ "./src/app/page/project/project-present/project-present.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/page/project/project-present/project-present.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  project-present works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/page/project/project-present/project-present.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/page/project/project-present/project-present.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page/project/project-present/project-present.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/page/project/project-present/project-present.component.ts ***!
  \***************************************************************************/
/*! exports provided: ProjectPresentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectPresentComponent", function() { return ProjectPresentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectPresentComponent = /** @class */ (function () {
    function ProjectPresentComponent() {
    }
    ProjectPresentComponent.prototype.ngOnInit = function () {
    };
    ProjectPresentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-project-present',
            template: __webpack_require__(/*! ./project-present.component.html */ "./src/app/page/project/project-present/project-present.component.html"),
            styles: [__webpack_require__(/*! ./project-present.component.scss */ "./src/app/page/project/project-present/project-present.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectPresentComponent);
    return ProjectPresentComponent;
}());



/***/ }),

/***/ "./src/app/page/project/project.component.html":
/*!*****************************************************!*\
  !*** ./src/app/page/project/project.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-pills nav-fill\">\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['past']\">\r\n      Past\r\n    </a>\r\n  </li>\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['present']\">\r\n      Present\r\n    </a>\r\n  </li>\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['future']\">\r\n      Future\r\n    </a>\r\n  </li>\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['ongoing']\">\r\n      Ongoing\r\n    </a>\r\n  </li>\r\n</ul>\r\n<div class=\"tab-content\">\r\n  <div id=\"me\" class=\"tab-pane fade in show active\"><br>\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/page/project/project.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/page/project/project.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page/project/project.component.ts":
/*!***************************************************!*\
  !*** ./src/app/page/project/project.component.ts ***!
  \***************************************************/
/*! exports provided: ProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectComponent", function() { return ProjectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectComponent = /** @class */ (function () {
    function ProjectComponent() {
    }
    ProjectComponent.prototype.ngOnInit = function () {
    };
    ProjectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-project',
            template: __webpack_require__(/*! ./project.component.html */ "./src/app/page/project/project.component.html"),
            styles: [__webpack_require__(/*! ./project.component.scss */ "./src/app/page/project/project.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectComponent);
    return ProjectComponent;
}());



/***/ }),

/***/ "./src/app/page/resume/resume-animation/resume-animation.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/page/resume/resume-animation/resume-animation.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  resume-animation works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/page/resume/resume-animation/resume-animation.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/page/resume/resume-animation/resume-animation.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page/resume/resume-animation/resume-animation.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/page/resume/resume-animation/resume-animation.component.ts ***!
  \****************************************************************************/
/*! exports provided: ResumeAnimationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeAnimationComponent", function() { return ResumeAnimationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResumeAnimationComponent = /** @class */ (function () {
    function ResumeAnimationComponent() {
    }
    ResumeAnimationComponent.prototype.ngOnInit = function () {
    };
    ResumeAnimationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resume-animation',
            template: __webpack_require__(/*! ./resume-animation.component.html */ "./src/app/page/resume/resume-animation/resume-animation.component.html"),
            styles: [__webpack_require__(/*! ./resume-animation.component.scss */ "./src/app/page/resume/resume-animation/resume-animation.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ResumeAnimationComponent);
    return ResumeAnimationComponent;
}());



/***/ }),

/***/ "./src/app/page/resume/resume-art/resume-art.component.html":
/*!******************************************************************!*\
  !*** ./src/app/page/resume/resume-art/resume-art.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  resume-art works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/page/resume/resume-art/resume-art.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/page/resume/resume-art/resume-art.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page/resume/resume-art/resume-art.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/page/resume/resume-art/resume-art.component.ts ***!
  \****************************************************************/
/*! exports provided: ResumeArtComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeArtComponent", function() { return ResumeArtComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResumeArtComponent = /** @class */ (function () {
    function ResumeArtComponent() {
    }
    ResumeArtComponent.prototype.ngOnInit = function () {
    };
    ResumeArtComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resume-art',
            template: __webpack_require__(/*! ./resume-art.component.html */ "./src/app/page/resume/resume-art/resume-art.component.html"),
            styles: [__webpack_require__(/*! ./resume-art.component.scss */ "./src/app/page/resume/resume-art/resume-art.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ResumeArtComponent);
    return ResumeArtComponent;
}());



/***/ }),

/***/ "./src/app/page/resume/resume-code/resume-code.component.html":
/*!********************************************************************!*\
  !*** ./src/app/page/resume/resume-code/resume-code.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  resume-code works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/page/resume/resume-code/resume-code.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/page/resume/resume-code/resume-code.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page/resume/resume-code/resume-code.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/page/resume/resume-code/resume-code.component.ts ***!
  \******************************************************************/
/*! exports provided: ResumeCodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeCodeComponent", function() { return ResumeCodeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResumeCodeComponent = /** @class */ (function () {
    function ResumeCodeComponent() {
    }
    ResumeCodeComponent.prototype.ngOnInit = function () {
    };
    ResumeCodeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resume-code',
            template: __webpack_require__(/*! ./resume-code.component.html */ "./src/app/page/resume/resume-code/resume-code.component.html"),
            styles: [__webpack_require__(/*! ./resume-code.component.scss */ "./src/app/page/resume/resume-code/resume-code.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ResumeCodeComponent);
    return ResumeCodeComponent;
}());



/***/ }),

/***/ "./src/app/page/resume/resume-main/resume-main.component.html":
/*!********************************************************************!*\
  !*** ./src/app/page/resume/resume-main/resume-main.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  resume-main works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/page/resume/resume-main/resume-main.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/page/resume/resume-main/resume-main.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page/resume/resume-main/resume-main.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/page/resume/resume-main/resume-main.component.ts ***!
  \******************************************************************/
/*! exports provided: ResumeMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeMainComponent", function() { return ResumeMainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResumeMainComponent = /** @class */ (function () {
    function ResumeMainComponent() {
    }
    ResumeMainComponent.prototype.ngOnInit = function () {
    };
    ResumeMainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resume-main',
            template: __webpack_require__(/*! ./resume-main.component.html */ "./src/app/page/resume/resume-main/resume-main.component.html"),
            styles: [__webpack_require__(/*! ./resume-main.component.scss */ "./src/app/page/resume/resume-main/resume-main.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ResumeMainComponent);
    return ResumeMainComponent;
}());



/***/ }),

/***/ "./src/app/page/resume/resume-sculpting/resume-sculpting.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/page/resume/resume-sculpting/resume-sculpting.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  resume-sculpting works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/page/resume/resume-sculpting/resume-sculpting.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/page/resume/resume-sculpting/resume-sculpting.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page/resume/resume-sculpting/resume-sculpting.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/page/resume/resume-sculpting/resume-sculpting.component.ts ***!
  \****************************************************************************/
/*! exports provided: ResumeSculptingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeSculptingComponent", function() { return ResumeSculptingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResumeSculptingComponent = /** @class */ (function () {
    function ResumeSculptingComponent() {
    }
    ResumeSculptingComponent.prototype.ngOnInit = function () {
    };
    ResumeSculptingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resume-sculpting',
            template: __webpack_require__(/*! ./resume-sculpting.component.html */ "./src/app/page/resume/resume-sculpting/resume-sculpting.component.html"),
            styles: [__webpack_require__(/*! ./resume-sculpting.component.scss */ "./src/app/page/resume/resume-sculpting/resume-sculpting.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ResumeSculptingComponent);
    return ResumeSculptingComponent;
}());



/***/ }),

/***/ "./src/app/page/resume/resume.component.html":
/*!***************************************************!*\
  !*** ./src/app/page/resume/resume.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-pills nav-fill\">\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link order-sm-3\" routerLinkActive=\"active\" [routerLink]=\"['main']\">\r\n      Main CV\r\n    </a>\r\n  </li>\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['modelling']\">\r\n      Modelling\r\n    </a>\r\n  </li>\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['animating']\">\r\n      Animating\r\n    </a>\r\n  </li>\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['painting']\">\r\n      Painting\r\n    </a>\r\n  </li>\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['scripting']\">\r\n      Scripting\r\n    </a>\r\n  </li>\r\n</ul>\r\n<div class=\"tab-content\">\r\n  <div id=\"me\" class=\"tab-pane fade in show active\"><br>\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/page/resume/resume.component.scss":
/*!***************************************************!*\
  !*** ./src/app/page/resume/resume.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page/resume/resume.component.ts":
/*!*************************************************!*\
  !*** ./src/app/page/resume/resume.component.ts ***!
  \*************************************************/
/*! exports provided: ResumeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeComponent", function() { return ResumeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResumeComponent = /** @class */ (function () {
    function ResumeComponent() {
    }
    ResumeComponent.prototype.ngOnInit = function () {
    };
    ResumeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resume',
            template: __webpack_require__(/*! ./resume.component.html */ "./src/app/page/resume/resume.component.html"),
            styles: [__webpack_require__(/*! ./resume.component.scss */ "./src/app/page/resume/resume.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ResumeComponent);
    return ResumeComponent;
}());



/***/ }),

/***/ "./src/app/section/global/button/bckpg/bckpg.component.html":
/*!******************************************************************!*\
  !*** ./src/app/section/global/button/bckpg/bckpg.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-button (click)=\"goBack()\" [color]=\"color\">Go Back a Page</button>\r\n"

/***/ }),

/***/ "./src/app/section/global/button/bckpg/bckpg.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/section/global/button/bckpg/bckpg.component.ts ***!
  \****************************************************************/
/*! exports provided: BckpgComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BckpgComponent", function() { return BckpgComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BckpgComponent = /** @class */ (function () {
    function BckpgComponent(location) {
        this.location = location;
    }
    BckpgComponent.prototype.goBack = function () {
        this.location.back();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", String)
    ], BckpgComponent.prototype, "color", void 0);
    BckpgComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-back-button',
            template: __webpack_require__(/*! ./bckpg.component.html */ "./src/app/section/global/button/bckpg/bckpg.component.html"),
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_0__["Location"]])
    ], BckpgComponent);
    return BckpgComponent;
}());



/***/ }),

/***/ "./src/app/section/global/core-bottom/core-bottom.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/section/global/core-bottom/core-bottom.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"toTop\">\r\n  <a id=\"End\" [routerLink]=\"['info/me']\" routerLinkActive=\"active-link\" href>\r\n    Go to Top of Page\r\n  </a>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/section/global/core-bottom/core-bottom.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/section/global/core-bottom/core-bottom.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/section/global/core-bottom/core-bottom.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/section/global/core-bottom/core-bottom.component.ts ***!
  \*********************************************************************/
/*! exports provided: CoreBottomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreBottomComponent", function() { return CoreBottomComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CoreBottomComponent = /** @class */ (function () {
    function CoreBottomComponent() {
    }
    CoreBottomComponent.prototype.ngOnInit = function () {
    };
    CoreBottomComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-core-bottom',
            template: __webpack_require__(/*! ./core-bottom.component.html */ "./src/app/section/global/core-bottom/core-bottom.component.html"),
            styles: [__webpack_require__(/*! ./core-bottom.component.scss */ "./src/app/section/global/core-bottom/core-bottom.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CoreBottomComponent);
    return CoreBottomComponent;
}());



/***/ }),

/***/ "./src/app/section/global/core-navbar/core-navbar.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/section/global/core-navbar/core-navbar.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p>\r\n  core-navbar works!\r\n</p> -->\r\n\r\n<nav class=\"navbar navbar-expand-sm justify-content-center hornav\" id=\"top-nav\">\r\n  <!-- Toggler/collapsibe Button -->\r\n  <button class=\"navbar-toggler bg-light\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsibleNavbar\">\r\n    <!-- <i class=\"navbar-toggler-icon\"></i> -->\r\n    <i class=\"material-icons\">\r\n      menu\r\n    </i>\r\n  </button>\r\n  <div class=\"collapse navbar-collapse justify-content-center\" id=\"collapsibleNavbar\">\r\n    <ul class=\"navbar-nav\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link icons-eight home\" routerLink=\"home\">\r\n          <img src=\"https://png.icons8.com/material/35/bdc3c7/home-page.png\" alt=\"Home\">\r\n          <span class=\"navhov-text\">\r\n            Home\r\n          </span>\r\n        </a>\r\n      </li>\r\n      <!-- Dropdowns -->\r\n      <li class=\"nav-item dropdown info\">\r\n\r\n        <a class=\"nav-link icons-eight info\" href data-toggle=\"dropdown\">\r\n          <img src=\"https://png.icons8.com/material/35/bdc3c7/info.png\" alt=\"About\">\r\n          <span class=\"navhov-text\">\r\n            About\r\n          </span>\r\n        </a>\r\n        <div class=\"dropdown-menu \" style=\"background-color: transparent\">\r\n          <a class=\"dropdown-item\" routerLink=\"info/me\">\r\n            About Me\r\n          </a>\r\n          <a class=\"dropdown-item\" routerLink=\"info/site\">\r\n            This Site\r\n          </a>\r\n        </div>\r\n      </li>\r\n      <li class=\"nav-item dropdown resume\">\r\n        <a class=\"nav-link icons-eight resume\" href data-toggle=\"dropdown\">\r\n          <img src=\"https://png.icons8.com/material/35/bdc3c7/resume.png\" alt=\"Resumes\">\r\n          <span class=\"navhov-text\">\r\n            Resumes\r\n          </span>\r\n        </a>\r\n        <div class=\"dropdown-menu \" style=\"background-color: transparent\">\r\n          <a class=\"dropdown-item\" routerLink=\"cv/main\">\r\n            Main (complete) CV\r\n          </a>\r\n          <a class=\"dropdown-item\" [routerLink]=\"[ '/cv', 'modelling' ]\">\r\n            3D Work\r\n          </a>\r\n          <a class=\"dropdown-item\" [routerLink]=\"[ '/cv', 'animating' ]\">\r\n            Animation\r\n          </a>\r\n          <a class=\"dropdown-item\" [routerLink]=\"[ '/cv', 'painting' ]\">\r\n            2D Work\r\n          </a>\r\n          <a class=\"dropdown-item\" [routerLink]=\"[ '/cv', 'scripting' ]\">\r\n            Code\r\n          </a>\r\n        </div>\r\n      </li>\r\n      <!-- <li class=\"nav-item dropdown portfolio\">\r\n        <a class=\"nav-link dropdown-toggle\" href data-toggle=\"dropdown\">\r\n          Portfolios\r\n        </a>\r\n        <div class=\"dropdown-menu \" style=\"background-color: transparent\">\r\n          <a class=\"dropdown-item\" href=\"#\">\r\n            2D Work\r\n          </a>\r\n          <a class=\"dropdown-item\" href=\"#\">\r\n            3D Work\r\n          </a>\r\n          <a href=\"#\" class=\"dropdown-item\">\r\n            Design and Development\r\n          </a>\r\n        </div>\r\n      </li> -->\r\n      <!--\r\n         ^ Will come back to this at a later time...\r\n         Not sure what to add yet and how to sort it out\r\n         Will Probably add them as what I'm calling \"Hidden Links\":\r\n         Links not shown on the main sections of the naviigation,\r\n         but as sub-parts of the CV section, mainly ^\r\n         -->\r\n      <li class=\"nav-item dropdown project\">\r\n        <a class=\"nav-link icons-eight project\" href data-toggle=\"dropdown\">\r\n          <img src=\"https://png.icons8.com/material/35/bdc3c7/task.png\" alt=\"Projects\">\r\n          <span class=\"navhov-text\">\r\n            Projects\r\n          </span>\r\n        </a>\r\n        <div class=\"dropdown-menu \" style=\"background-color: transparent\">\r\n          <a routerLink=\"projects/past\" class=\"dropdown-item\">\r\n            Past\r\n          </a>\r\n          <a routerLink=\"projects/present\" class=\"dropdown-item\">\r\n            Present\r\n          </a>\r\n          <a routerLink=\"projects/future\" class=\"dropdown-item\">\r\n            Future\r\n          </a>\r\n          <a routerLink=\"projects/ongoing\" class=\"dropdown-item\">\r\n            Ongoing\r\n          </a>\r\n        </div>\r\n      </li>\r\n      <!-- <li class=\"nav-item\">\r\n        <a href class=\"nav-link disabled\">\r\n          Link Other\r\n        </a>\r\n      </li> -->\r\n      <!-- ^ This is only here to demonstrate that I know how to use it ^ -->\r\n    </ul>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/section/global/core-navbar/core-navbar.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/section/global/core-navbar/core-navbar.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/section/global/core-navbar/core-navbar.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/section/global/core-navbar/core-navbar.component.ts ***!
  \*********************************************************************/
/*! exports provided: CoreNavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreNavbarComponent", function() { return CoreNavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CoreNavbarComponent = /** @class */ (function () {
    function CoreNavbarComponent() {
    }
    CoreNavbarComponent.prototype.ngOnInit = function () {
    };
    CoreNavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-core-navbar',
            template: __webpack_require__(/*! ./core-navbar.component.html */ "./src/app/section/global/core-navbar/core-navbar.component.html"),
            styles: [__webpack_require__(/*! ./core-navbar.component.scss */ "./src/app/section/global/core-navbar/core-navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CoreNavbarComponent);
    return CoreNavbarComponent;
}());



/***/ }),

/***/ "./src/app/section/global/core-top/core-top.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/section/global/core-top/core-top.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"toEnd\">\r\n  <a id=\"Top\" routerLinkActive=\"active-link\" fragment=\"End\" queryParamsHandling=\"preserve\" href>\r\n    Go to End of Page\r\n  </a>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/section/global/core-top/core-top.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/section/global/core-top/core-top.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/section/global/core-top/core-top.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/section/global/core-top/core-top.component.ts ***!
  \***************************************************************/
/*! exports provided: CoreTopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreTopComponent", function() { return CoreTopComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CoreTopComponent = /** @class */ (function () {
    function CoreTopComponent() {
    }
    CoreTopComponent.prototype.ngOnInit = function () {
    };
    CoreTopComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-core-top',
            template: __webpack_require__(/*! ./core-top.component.html */ "./src/app/section/global/core-top/core-top.component.html"),
            styles: [__webpack_require__(/*! ./core-top.component.scss */ "./src/app/section/global/core-top/core-top.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CoreTopComponent);
    return CoreTopComponent;
}());



/***/ }),

/***/ "./src/app/section/global/footbar/footbar.component.html":
/*!***************************************************************!*\
  !*** ./src/app/section/global/footbar/footbar.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"btn-toolbar\">\r\n  <div class=\"wrapper\">\r\n    <div class=\"btn-group \">\r\n      <div class=\"btn-group d-flex w-100\" role=\"group\">\r\n        <app-motto></app-motto>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<br>\r\n\r\n<div id=\"btn-toolbar\">\r\n  <div class=\"wrapper\">\r\n    <div class=\"btn-group \">\r\n      <div class=\"btn-group d-flex w-100\" role=\"group\">\r\n        <button type=\"button\" class=\"btn w-100\">\r\n          <a href=\"https://www.linkedin.com/in/salum-ali-muhammed/\">\r\n            <img src=\"https://img.icons8.com/material/30/000000/devianart.png\">\r\n          </a>\r\n        </button>\r\n      </div>\r\n      <div class=\"btn-group d-flex w-100\" role=\"group\">\r\n        <button type=\"button\" class=\"btn w-100\">\r\n          <a [routerLink]=\"[ '/contacts' ]\" routerLinkActive=\"active\">\r\n            Contacts\r\n          </a>\r\n        </button>\r\n      </div>\r\n      <div class=\"btn-group d-flex w-100\" role=\"group\">\r\n        <button type=\"button\" class=\"btn w-100\">\r\n          <a [routerLink]=\"[ '/maps' ]\" routerLinkActive=\"active\">\r\n            Maps\r\n          </a>\r\n        </button>\r\n      </div>\r\n      <div class=\"btn-group d-flex w-100\" role=\"group\">\r\n        <button type=\"button\" class=\"btn w-100\">\r\n          <a [routerLink]=\"[ '/credits' ]\" routerLinkActive=\"active\">\r\n            Credits\r\n          </a>\r\n        </button>\r\n      </div>\r\n      <div class=\"btn-group d-flex w-100\" role=\"group\">\r\n        <button type=\"button\" class=\"btn w-100\">\r\n          <a href=\"https://www.linkedin.com/in/salum-ali-muhammed/\">\r\n            <img src=\"https://img.icons8.com/material/30/000000/linkedin.png\">\r\n          </a>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<br>\r\n\r\n<div id=\"btn-toolbar\">\r\n  <div class=\"wrapper\">\r\n    <div class=\"btn-group\">\r\n      <div class=\"btn-group d-flex w-100\" role=\"group\">\r\n        <app-icon></app-icon>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/section/global/footbar/footbar.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/section/global/footbar/footbar.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/section/global/footbar/footbar.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/section/global/footbar/footbar.component.ts ***!
  \*************************************************************/
/*! exports provided: FootbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FootbarComponent", function() { return FootbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FootbarComponent = /** @class */ (function () {
    function FootbarComponent() {
    }
    FootbarComponent.prototype.ngOnInit = function () {
    };
    FootbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footbar',
            template: __webpack_require__(/*! ./footbar.component.html */ "./src/app/section/global/footbar/footbar.component.html"),
            styles: [__webpack_require__(/*! ./footbar.component.scss */ "./src/app/section/global/footbar/footbar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FootbarComponent);
    return FootbarComponent;
}());



/***/ }),

/***/ "./src/app/section/global/footbar/icon/icon.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/section/global/footbar/icon/icon.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button type=\"button\" class=\"btn w-100\">\r\n  <a href=\"https://icons8.com\">\r\n    Icon pack by Icons8\r\n  </a>\r\n</button>\r\n"

/***/ }),

/***/ "./src/app/section/global/footbar/icon/icon.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/section/global/footbar/icon/icon.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/section/global/footbar/icon/icon.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/section/global/footbar/icon/icon.component.ts ***!
  \***************************************************************/
/*! exports provided: IconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconComponent", function() { return IconComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IconComponent = /** @class */ (function () {
    function IconComponent() {
    }
    IconComponent.prototype.ngOnInit = function () {
    };
    IconComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-icon',
            template: __webpack_require__(/*! ./icon.component.html */ "./src/app/section/global/footbar/icon/icon.component.html"),
            styles: [__webpack_require__(/*! ./icon.component.scss */ "./src/app/section/global/footbar/icon/icon.component.scss"), __webpack_require__(/*! ../footbar.component.scss */ "./src/app/section/global/footbar/footbar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], IconComponent);
    return IconComponent;
}());



/***/ }),

/***/ "./src/app/section/global/footbar/motto/motto.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/section/global/footbar/motto/motto.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button type=\"button\" class=\"btn w-100\">\r\n  <a [routerLink]=\"[ '/' ]\" routerLinkActive=\"active\">\r\n    Remember the Past, Live the Present, Dream the Future\r\n  </a>\r\n</button>\r\n"

/***/ }),

/***/ "./src/app/section/global/footbar/motto/motto.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/section/global/footbar/motto/motto.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n  text-decoration: none;\n  font-weight: bold;\n  font-family: 'Cinzel Decorative',\r cursive; }\n"

/***/ }),

/***/ "./src/app/section/global/footbar/motto/motto.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/section/global/footbar/motto/motto.component.ts ***!
  \*****************************************************************/
/*! exports provided: MottoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MottoComponent", function() { return MottoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MottoComponent = /** @class */ (function () {
    function MottoComponent() {
    }
    MottoComponent.prototype.ngOnInit = function () {
    };
    MottoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-motto',
            template: __webpack_require__(/*! ./motto.component.html */ "./src/app/section/global/footbar/motto/motto.component.html"),
            styles: [__webpack_require__(/*! ./motto.component.scss */ "./src/app/section/global/footbar/motto/motto.component.scss"), __webpack_require__(/*! ../footbar.component.scss */ "./src/app/section/global/footbar/footbar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MottoComponent);
    return MottoComponent;
}());



/***/ }),

/***/ "./src/app/section/global/mainblurb/mainblurb.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/section/global/mainblurb/mainblurb.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  This website was origionally done as a Web Authoring assignment, but was developed (aesthetically) from a\r\n  previous project\r\n  and will be used as a dynamic template for further projects.\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/section/global/mainblurb/mainblurb.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/section/global/mainblurb/mainblurb.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/section/global/mainblurb/mainblurb.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/section/global/mainblurb/mainblurb.component.ts ***!
  \*****************************************************************/
/*! exports provided: MainblurbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainblurbComponent", function() { return MainblurbComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainblurbComponent = /** @class */ (function () {
    function MainblurbComponent() {
    }
    MainblurbComponent.prototype.ngOnInit = function () {
    };
    MainblurbComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mainblurb',
            template: __webpack_require__(/*! ./mainblurb.component.html */ "./src/app/section/global/mainblurb/mainblurb.component.html"),
            styles: [__webpack_require__(/*! ./mainblurb.component.scss */ "./src/app/section/global/mainblurb/mainblurb.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MainblurbComponent);
    return MainblurbComponent;
}());



/***/ }),

/***/ "./src/app/section/global/maintitle/maintitle.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/section/global/maintitle/maintitle.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\r\n  Portfolio Website - Salum Muhammed\r\n</h1>\r\n<h3>\r\n  Creative Semi-Intermediate\r\n</h3>\r\n"

/***/ }),

/***/ "./src/app/section/global/maintitle/maintitle.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/section/global/maintitle/maintitle.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/section/global/maintitle/maintitle.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/section/global/maintitle/maintitle.component.ts ***!
  \*****************************************************************/
/*! exports provided: MaintitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaintitleComponent", function() { return MaintitleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MaintitleComponent = /** @class */ (function () {
    function MaintitleComponent() {
    }
    MaintitleComponent.prototype.ngOnInit = function () {
    };
    MaintitleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-maintitle',
            template: __webpack_require__(/*! ./maintitle.component.html */ "./src/app/section/global/maintitle/maintitle.component.html"),
            styles: [__webpack_require__(/*! ./maintitle.component.scss */ "./src/app/section/global/maintitle/maintitle.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MaintitleComponent);
    return MaintitleComponent;
}());



/***/ }),

/***/ "./src/app/section/global/section-advert/section-advert.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/section/global/section-advert/section-advert.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  This is a section to be worked on in future. <br>\r\n  An Ad-Space section for when this site goes live\r\n  <!-- (or when I figure out how to place ads on in-development projects,\r\n  if possible. Porbably not possible) -->.\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/section/global/section-advert/section-advert.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/section/global/section-advert/section-advert.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/section/global/section-advert/section-advert.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/section/global/section-advert/section-advert.component.ts ***!
  \***************************************************************************/
/*! exports provided: SectionAdvertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionAdvertComponent", function() { return SectionAdvertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SectionAdvertComponent = /** @class */ (function () {
    function SectionAdvertComponent() {
    }
    SectionAdvertComponent.prototype.ngOnInit = function () {
    };
    SectionAdvertComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-section-advert',
            template: __webpack_require__(/*! ./section-advert.component.html */ "./src/app/section/global/section-advert/section-advert.component.html"),
            styles: [__webpack_require__(/*! ./section-advert.component.scss */ "./src/app/section/global/section-advert/section-advert.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SectionAdvertComponent);
    return SectionAdvertComponent;
}());



/***/ }),

/***/ "./src/app/section/global/social-feeds/social-feeds.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/section/global/social-feeds/social-feeds.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar justify-content-center\">\r\n  <ul class=\"navbar-nav\">\r\n    <li class=\"nav-item dropdown twitter feed-social\">\r\n      <a class=\"nav-link dropdown-toggle\" href=\"#\" data-toggle=\"dropdown\">\r\n        Twitter Timelines:\r\n      </a>\r\n      <div class=\"dropdown-menu w3-animate-top\" style=\"background-color: transparent\">\r\n        <a class=\"dropdown-item twitter-timeline\" data-height=\"360\" data-width=\"1000\" data-theme=\"dark\" data-link-color=\"#EEEEEE\"\r\n          href=\"https://twitter.com/samrs15?ref_src=twsrc%5Etfw\" data-chrome=\"transparent\">\r\n          Tweets by samrs15\r\n        </a>\r\n      </div>\r\n    </li>\r\n    <!-- ^ Twitter Timeline ^ -->\r\n    <hr>\r\n    <!-- <li class=\"nav-item dropdown facebook feed-social\">\r\n      <a class=\"nav-link dropdown-toggle\" href=\"#\" data-toggle=\"dropdown\">\r\n        Facebook Posts:\r\n      </a>\r\n      <div class=\"dropdown-menu w3-animate-top\" style=\"background-color: transparent\"> -->\r\n    <!-- <div class=\" dropdown-item fb-page\" data-href=\"https://www.facebook.com/samrs761508\" data-tabs=\"timeline,events,messages\"\r\n                      data-height=\"300\" data-small-header=\"false\" data-adapt-container-width=\"true\" data-hide-cover=\"false\"\r\n                      data-show-facepile=\"true\">\r\n                    </div> -->\r\n    <!-- ^ dont know why, but feed not showing up\r\n maybe it needs to be a group instead of a personal profile? ^ -->\r\n    <!-- <p>\r\n          I was going to add in a [personal] Facebook Timeline here,\r\n          <br> but apparantly I cant seem to get it working...\r\n          <br> If you know how to do that then please tell me.\r\n        </p>\r\n      </div>\r\n    </li> -->\r\n    <!-- ^ FaceBook Posts ^ -->\r\n    <!-- <hr> -->\r\n    <li class=\"nav-item dropdown pinterest feed-social\">\r\n      <a class=\"nav-link dropdown-toggle\" href=\"#\" data-toggle=\"dropdown\">\r\n        Pinterest Feed:\r\n      </a>\r\n      <div class=\"dropdown-menu w3-animate-top\" style=\"background-color: transparent\">\r\n        <a class=\"dropdown-item\" data-pin-do=\"embedUser\" data-pin-board-width=\"60 \" data-pin-scale-height=\"300 \" href=\"https://www.pinterest.ie/silvrcrystalfenix/\r\n  \">\r\n          Salum's Pinterest Boards\r\n        </a>\r\n        <!-- ^ Pinterest Feed ^ -->\r\n      </div>\r\n    </li>\r\n  </ul>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/section/global/social-feeds/social-feeds.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/section/global/social-feeds/social-feeds.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/section/global/social-feeds/social-feeds.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/section/global/social-feeds/social-feeds.component.ts ***!
  \***********************************************************************/
/*! exports provided: SocialFeedsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialFeedsComponent", function() { return SocialFeedsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SocialFeedsComponent = /** @class */ (function () {
    function SocialFeedsComponent() {
    }
    SocialFeedsComponent.prototype.ngOnInit = function () {
    };
    SocialFeedsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-social-feeds',
            template: __webpack_require__(/*! ./social-feeds.component.html */ "./src/app/section/global/social-feeds/social-feeds.component.html"),
            styles: [__webpack_require__(/*! ./social-feeds.component.scss */ "./src/app/section/global/social-feeds/social-feeds.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SocialFeedsComponent);
    return SocialFeedsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\_GHP\AngularPortfolio\DeltaTech\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map