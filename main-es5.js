function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/about/about.component */
    "./src/app/components/about/about.component.ts");
    /* harmony import */


    var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/contact/contact.component */
    "./src/app/components/contact/contact.component.ts");
    /* harmony import */


    var _components_main_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/main/main.component */
    "./src/app/components/main/main.component.ts");
    /* harmony import */


    var _components_products_grafica_banner_banner_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/products/grafica/banner/banner.component */
    "./src/app/components/products/grafica/banner/banner.component.ts");
    /* harmony import */


    var _components_products_grafica_cards_cards_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/products/grafica/cards/cards.component */
    "./src/app/components/products/grafica/cards/cards.component.ts");
    /* harmony import */


    var _components_products_grafica_flyer_flyer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/products/grafica/flyer/flyer.component */
    "./src/app/components/products/grafica/flyer/flyer.component.ts");
    /* harmony import */


    var _components_products_grafica_logo_logo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/products/grafica/logo/logo.component */
    "./src/app/components/products/grafica/logo/logo.component.ts");
    /* harmony import */


    var _components_products_products_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/products/products.component */
    "./src/app/components/products/products.component.ts");
    /* harmony import */


    var _components_products_web_aplicatii_aplicatii_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/products/web/aplicatii/aplicatii.component */
    "./src/app/components/products/web/aplicatii/aplicatii.component.ts");
    /* harmony import */


    var _components_products_web_portofoliu_portofoliu_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/products/web/portofoliu/portofoliu.component */
    "./src/app/components/products/web/portofoliu/portofoliu.component.ts");
    /* harmony import */


    var _components_products_web_site_de_prezentare_site_de_prezentare_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/products/web/site-de-prezentare/site-de-prezentare.component */
    "./src/app/components/products/web/site-de-prezentare/site-de-prezentare.component.ts");
    /* harmony import */


    var _components_proiecte_in_curs_in_curs_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/proiecte/in-curs/in-curs.component */
    "./src/app/components/proiecte/in-curs/in-curs.component.ts");
    /* harmony import */


    var _components_proiecte_terminate_terminate_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/proiecte/terminate/terminate.component */
    "./src/app/components/proiecte/terminate/terminate.component.ts"); // import { IntroComponent } from './components/intro/intro.component';


    var routes = [// { path: 'intro', component: IntroComponent },
    {
      path: '',
      component: _components_main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"]
    }, {
      path: 'about',
      component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"]
    }, {
      path: 'products',
      component: _components_products_products_component__WEBPACK_IMPORTED_MODULE_9__["ProductsComponent"]
    }, {
      path: 'contact',
      component: _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_3__["ContactComponent"]
    }, {
      path: 'portofoliu',
      component: _components_products_web_portofoliu_portofoliu_component__WEBPACK_IMPORTED_MODULE_11__["PortofoliuComponent"]
    }, {
      path: 'site-prezentare',
      component: _components_products_web_site_de_prezentare_site_de_prezentare_component__WEBPACK_IMPORTED_MODULE_12__["SiteDePrezentareComponent"]
    }, {
      path: 'aplicatii',
      component: _components_products_web_aplicatii_aplicatii_component__WEBPACK_IMPORTED_MODULE_10__["AplicatiiComponent"]
    }, {
      path: 'cards',
      component: _components_products_grafica_cards_cards_component__WEBPACK_IMPORTED_MODULE_6__["CardsComponent"]
    }, {
      path: 'flyer',
      component: _components_products_grafica_flyer_flyer_component__WEBPACK_IMPORTED_MODULE_7__["FlyerComponent"]
    }, {
      path: 'logo',
      component: _components_products_grafica_logo_logo_component__WEBPACK_IMPORTED_MODULE_8__["LogoComponent"]
    }, {
      path: 'banner',
      component: _components_products_grafica_banner_banner_component__WEBPACK_IMPORTED_MODULE_5__["BannerComponent"]
    }, {
      path: 'terminate',
      component: _components_proiecte_terminate_terminate_component__WEBPACK_IMPORTED_MODULE_14__["TerminateComponent"]
    }, {
      path: 'incurs',
      component: _components_proiecte_in_curs_in_curs_component__WEBPACK_IMPORTED_MODULE_13__["InCursComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
        scrollPositionRestoration: 'enabled'
      })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
            scrollPositionRestoration: 'enabled'
          })],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./components/navbar/navbar.component */
    "./src/app/components/navbar/navbar.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'PortofoliuAndrei';
    };

    AppComponent.??fac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 2,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "router-outlet");
        }
      },
      directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_intro_intro_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/intro/intro.component */
    "./src/app/components/intro/intro.component.ts");
    /* harmony import */


    var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/navbar/navbar.component */
    "./src/app/components/navbar/navbar.component.ts");
    /* harmony import */


    var _components_main_main_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/main/main.component */
    "./src/app/components/main/main.component.ts");
    /* harmony import */


    var _components_main_about_about_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/main/about/about.component */
    "./src/app/components/main/about/about.component.ts");
    /* harmony import */


    var _components_main_contact_main_contact_main_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/main/contact-main/contact-main.component */
    "./src/app/components/main/contact-main/contact-main.component.ts");
    /* harmony import */


    var _components_main_main_products_main_products_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/main/main-products/main-products.component */
    "./src/app/components/main/main-products/main-products.component.ts");
    /* harmony import */


    var _components_products_web_portofoliu_portofoliu_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/products/web/portofoliu/portofoliu.component */
    "./src/app/components/products/web/portofoliu/portofoliu.component.ts");
    /* harmony import */


    var _components_products_web_site_de_prezentare_site_de_prezentare_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/products/web/site-de-prezentare/site-de-prezentare.component */
    "./src/app/components/products/web/site-de-prezentare/site-de-prezentare.component.ts");
    /* harmony import */


    var _components_products_grafica_logo_logo_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/products/grafica/logo/logo.component */
    "./src/app/components/products/grafica/logo/logo.component.ts");
    /* harmony import */


    var _components_products_grafica_flyer_flyer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/products/grafica/flyer/flyer.component */
    "./src/app/components/products/grafica/flyer/flyer.component.ts");
    /* harmony import */


    var _components_products_grafica_cards_cards_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/products/grafica/cards/cards.component */
    "./src/app/components/products/grafica/cards/cards.component.ts");
    /* harmony import */


    var _components_products_products_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/products/products.component */
    "./src/app/components/products/products.component.ts");
    /* harmony import */


    var _components_proiecte_terminate_terminate_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./components/proiecte/terminate/terminate.component */
    "./src/app/components/proiecte/terminate/terminate.component.ts");
    /* harmony import */


    var _components_proiecte_in_curs_in_curs_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./components/proiecte/in-curs/in-curs.component */
    "./src/app/components/proiecte/in-curs/in-curs.component.ts");
    /* harmony import */


    var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./components/contact/contact.component */
    "./src/app/components/contact/contact.component.ts");
    /* harmony import */


    var _components_products_web_aplicatii_aplicatii_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./components/products/web/aplicatii/aplicatii.component */
    "./src/app/components/products/web/aplicatii/aplicatii.component.ts");
    /* harmony import */


    var _components_products_grafica_banner_banner_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./components/products/grafica/banner/banner.component */
    "./src/app/components/products/grafica/banner/banner.component.ts"); // import { MatButtonModule } from '@angular/material/button';
    // import { MatMenuModule } from '@angular/material/menu';
    // import { MatToolbarModule } from '@angular/material/toolbar';


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    });
    AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [{
        provide: _angular_common__WEBPACK_IMPORTED_MODULE_0__["LocationStrategy"],
        useClass: _angular_common__WEBPACK_IMPORTED_MODULE_0__["HashLocationStrategy"]
      }],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["????setNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _components_intro_intro_component__WEBPACK_IMPORTED_MODULE_6__["IntroComponent"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"], _components_main_main_component__WEBPACK_IMPORTED_MODULE_8__["MainComponent"], _components_main_about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"], _components_main_contact_main_contact_main_component__WEBPACK_IMPORTED_MODULE_10__["ContactMainComponent"], _components_main_main_products_main_products_component__WEBPACK_IMPORTED_MODULE_11__["MainProductsComponent"], _components_products_web_portofoliu_portofoliu_component__WEBPACK_IMPORTED_MODULE_12__["PortofoliuComponent"], _components_products_web_site_de_prezentare_site_de_prezentare_component__WEBPACK_IMPORTED_MODULE_13__["SiteDePrezentareComponent"], _components_products_grafica_logo_logo_component__WEBPACK_IMPORTED_MODULE_14__["LogoComponent"], _components_products_grafica_flyer_flyer_component__WEBPACK_IMPORTED_MODULE_15__["FlyerComponent"], _components_products_grafica_cards_cards_component__WEBPACK_IMPORTED_MODULE_16__["CardsComponent"], _components_products_products_component__WEBPACK_IMPORTED_MODULE_17__["ProductsComponent"], _components_proiecte_terminate_terminate_component__WEBPACK_IMPORTED_MODULE_18__["TerminateComponent"], _components_proiecte_in_curs_in_curs_component__WEBPACK_IMPORTED_MODULE_19__["InCursComponent"], _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_20__["ContactComponent"], _components_products_web_aplicatii_aplicatii_component__WEBPACK_IMPORTED_MODULE_21__["AplicatiiComponent"], _components_products_grafica_banner_banner_component__WEBPACK_IMPORTED_MODULE_22__["BannerComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["??setClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _components_intro_intro_component__WEBPACK_IMPORTED_MODULE_6__["IntroComponent"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"], _components_main_main_component__WEBPACK_IMPORTED_MODULE_8__["MainComponent"], _components_main_about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"], _components_main_contact_main_contact_main_component__WEBPACK_IMPORTED_MODULE_10__["ContactMainComponent"], _components_main_main_products_main_products_component__WEBPACK_IMPORTED_MODULE_11__["MainProductsComponent"], _components_products_web_portofoliu_portofoliu_component__WEBPACK_IMPORTED_MODULE_12__["PortofoliuComponent"], _components_products_web_site_de_prezentare_site_de_prezentare_component__WEBPACK_IMPORTED_MODULE_13__["SiteDePrezentareComponent"], _components_products_grafica_logo_logo_component__WEBPACK_IMPORTED_MODULE_14__["LogoComponent"], _components_products_grafica_flyer_flyer_component__WEBPACK_IMPORTED_MODULE_15__["FlyerComponent"], _components_products_grafica_cards_cards_component__WEBPACK_IMPORTED_MODULE_16__["CardsComponent"], _components_products_products_component__WEBPACK_IMPORTED_MODULE_17__["ProductsComponent"], _components_proiecte_terminate_terminate_component__WEBPACK_IMPORTED_MODULE_18__["TerminateComponent"], _components_proiecte_in_curs_in_curs_component__WEBPACK_IMPORTED_MODULE_19__["InCursComponent"], _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_20__["ContactComponent"], _components_products_web_aplicatii_aplicatii_component__WEBPACK_IMPORTED_MODULE_21__["AplicatiiComponent"], _components_products_grafica_banner_banner_component__WEBPACK_IMPORTED_MODULE_22__["BannerComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"]],
          providers: [{
            provide: _angular_common__WEBPACK_IMPORTED_MODULE_0__["LocationStrategy"],
            useClass: _angular_common__WEBPACK_IMPORTED_MODULE_0__["HashLocationStrategy"]
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/about/about.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/about/about.component.ts ***!
    \*****************************************************/

  /*! exports provided: AboutComponent */

  /***/
  function srcAppComponentsAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AboutComponent = /*#__PURE__*/function () {
      function AboutComponent() {
        _classCallCheck(this, AboutComponent);
      }

      _createClass(AboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutComponent;
    }();

    AboutComponent.??fac = function AboutComponent_Factory(t) {
      return new (t || AboutComponent)();
    };

    AboutComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: AboutComponent,
      selectors: [["app-about"]],
      decls: 20,
      vars: 0,
      consts: [[1, "despre"], [1, "text-center"], [1, "row"], [1, "col-md-6", "col-xs-12", "poza"], ["src", "/assets/img/VISIOON1.png", "alt", "", 1, "logo"], [1, "col-md-6", "col-xs-12", "text"], [1, "vw"]],
      template: function AboutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Despre ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Noi ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Visioonwebsites");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, " ofera servicii de webdesign si graphic design");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Suntem la inceput de drum. Avand ca scop principal satisfacerea nevoilor clientilor. Cu ajutorul ultimelor tehnologii avem placerea de a pune la dispozita dumneavoastra produse de inalta calitate. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Visioonwebsites");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, " ajuta la dezvoltarea afacerii mediul online. Fiecare afacere este diferita, avand propriul progres. Asadar Visioonwebsites adopta cea mai benefica strategie pentru fiecare afacere in parte. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Folosim tehnologii precum : HTML, CSS, JavaScript, Angular, MongoDb, MySql, Java, Spring, NodeJs, Express ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      styles: ["*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n.despre[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background-color: #3b3b3b;\n}\n\nh1[_ngcontent-%COMP%] {\n  padding: 5% 0;\n  font-family: monospace;\n  font-size: 2.4em;\n  white-space: nowrap;\n  font-size: 800;\n  text-shadow: 0 2px 2px rgba(0, 0, 0, 0.9);\n  color: #fff;\n  text-transform: uppercase;\n}\n\nspan[_ngcontent-%COMP%] {\n  color: red;\n  padding: 5% 0;\n  font-family: monospace;\n  font-size: 2.4em;\n  white-space: nowrap;\n  font-size: 800;\n  text-shadow: 0 2px 2px rgba(0, 0, 0, 0.9);\n}\n\n.logo[_ngcontent-%COMP%] {\n  min-width: 90%;\n  min-height: 90%;\n  max-width: 90%;\n  max-height: 90%;\n}\n\nh2[_ngcontent-%COMP%] {\n  padding-top: 15%;\n  font-size: 2em;\n  color: #fff;\n}\n\n.vw[_ngcontent-%COMP%] {\n  font-size: 1.1em;\n  color: red;\n}\n\np[_ngcontent-%COMP%] {\n  padding: 1% 5% 0 1%;\n  font-size: 2.2em;\n  color: white;\n  line-height: 1.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hYm91dC9DOlxcVXNlcnNcXGFuZHJlXFxEZXNrdG9wXFxQb3J0b2ZvbGl1QW5ndWxhclxcUG9ydG9mb2xpdUFuZHJlaS9zcmNcXGFwcFxcY29tcG9uZW50c1xcYWJvdXRcXGFib3V0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtBQ0NKOztBRENFO0VBQ0UsaUJBQUE7RUFDQSx5QkFBQTtBQ0VKOztBRENFO0VBQ0UsYUFBQTtFQUNGLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSx5Q0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQ0VGOztBRENFO0VBQ0UsVUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EseUNBQUE7QUNFSjs7QURBRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNHSjs7QURBRTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUNHSjs7QURERTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtBQ0lKOztBREZFO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0tKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB9XHJcbiAgLmRlc3ByZXtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU5LCA1OSwgNTkpO1xyXG4gXHJcbn1cclxuICBoMXtcclxuICAgIHBhZGRpbmc6NSUgMCA7XHJcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcclxuICBmb250LXNpemU6IDIuNGVtO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgZm9udC1zaXplOiA4MDA7XHJcbiAgdGV4dC1zaGFkb3c6IDAgMnB4IDJweCByZ2JhKCMwMDAsIDAuOSk7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBcclxuICB9XHJcbiAgc3BhbntcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBwYWRkaW5nOjUlIDAgO1xyXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcclxuICAgIGZvbnQtc2l6ZTogMi40ZW07XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgZm9udC1zaXplOiA4MDA7XHJcbiAgICB0ZXh0LXNoYWRvdzogMCAycHggMnB4IHJnYmEoIzAwMCwgMC45KTtcclxuICB9XHJcbiAgLmxvZ297XHJcbiAgICBtaW4td2lkdGg6IDkwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDkwJTtcclxuICAgIG1heC13aWR0aDogOTAlO1xyXG4gICAgbWF4LWhlaWdodDogOTAlO1xyXG4gIH1cclxuICBcclxuICBoMntcclxuICAgIHBhZGRpbmctdG9wOiAxNSU7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gIH1cclxuICAudnd7XHJcbiAgICBmb250LXNpemU6IDEuMWVtO1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDAsIDApO1xyXG4gIH1cclxuICBwe1xyXG4gICAgcGFkZGluZzoxJSA1JSAwIDElO1xyXG4gICAgZm9udC1zaXplOiAyLjJlbTtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICBsaW5lLWhlaWdodDogMS41ZW07XHJcbiAgfSIsIioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5kZXNwcmUge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNiM2IzYjtcbn1cblxuaDEge1xuICBwYWRkaW5nOiA1JSAwO1xuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xuICBmb250LXNpemU6IDIuNGVtO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBmb250LXNpemU6IDgwMDtcbiAgdGV4dC1zaGFkb3c6IDAgMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuOSk7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG5zcGFuIHtcbiAgY29sb3I6IHJlZDtcbiAgcGFkZGluZzogNSUgMDtcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbiAgZm9udC1zaXplOiAyLjRlbTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgZm9udC1zaXplOiA4MDA7XG4gIHRleHQtc2hhZG93OiAwIDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjkpO1xufVxuXG4ubG9nbyB7XG4gIG1pbi13aWR0aDogOTAlO1xuICBtaW4taGVpZ2h0OiA5MCU7XG4gIG1heC13aWR0aDogOTAlO1xuICBtYXgtaGVpZ2h0OiA5MCU7XG59XG5cbmgyIHtcbiAgcGFkZGluZy10b3A6IDE1JTtcbiAgZm9udC1zaXplOiAyZW07XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4udncge1xuICBmb250LXNpemU6IDEuMWVtO1xuICBjb2xvcjogcmVkO1xufVxuXG5wIHtcbiAgcGFkZGluZzogMSUgNSUgMCAxJTtcbiAgZm9udC1zaXplOiAyLjJlbTtcbiAgY29sb3I6IHdoaXRlO1xuICBsaW5lLWhlaWdodDogMS41ZW07XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-about',
          templateUrl: './about.component.html',
          styleUrls: ['./about.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/contact/contact.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/contact/contact.component.ts ***!
    \*********************************************************/

  /*! exports provided: ContactComponent */

  /***/
  function srcAppComponentsContactContactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
      return ContactComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ContactComponent = /*#__PURE__*/function () {
      function ContactComponent() {
        _classCallCheck(this, ContactComponent);
      }

      _createClass(ContactComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ContactComponent;
    }();

    ContactComponent.??fac = function ContactComponent_Factory(t) {
      return new (t || ContactComponent)();
    };

    ContactComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: ContactComponent,
      selectors: [["app-contact"]],
      decls: 61,
      vars: 0,
      consts: [[1, "sec"], ["autoplay", "", "muted", "", "loop", "", "id", "myVideo"], ["src", "/assets/video/video1.mp4", "type", "video/mp4"], [1, "content"], [1, "container"], [1, "row"], [1, "text-center"], [1, "social"], ["href", "whatsapp://tel:0748489982"], ["viewBox", "0 0 512 512", "fill", "#000", "width", "5.5em", "height", "5.5em", "xmlns", "http://www.w3.org/2000/svg"], ["d", "m123.832031 475.464844c39.558594 23.804687 84.789063 36.351562 131.261719 36.351562 140.824219 0 256.90625-114.914062 256.90625-255.910156 0-140.832031-115.917969-255.90625-256.90625-255.90625-140.558594 0-254.910156 114.800781-254.910156 255.90625 0 47.09375 12.550781 92.667969 36.351562 132.257812l-36.535156 123.835938zm-93.65625-219.558594c0-124.570312 100.898438-225.917969 224.917969-225.917969 125.121094 0 226.917969 101.347657 226.917969 225.917969 0 124.574219-101.796875 225.917969-226.917969 225.917969-43.054688 0-84.894531-12.195313-120.984375-35.273438l-5.765625-3.683593-83.988281 24.78125 24.777343-83.992188-3.683593-5.761719c-23.078125-36.097656-35.273438-78.277343-35.273438-121.988281zm0 0"], ["d", "m124.628906 208.753906c4.953125 26.011719 19.65625 76.042969 62.464844 118.851563 42.808594 42.808593 92.839844 57.515625 118.855469 62.46875 29.789062 5.671875 73.503906 6.527343 94.867187-14.835938l11.910156-11.910156c6.011719-6.011719 9.324219-14.007813 9.324219-22.511719s-3.3125-16.496094-9.324219-22.507812l-47.628906-47.628906c-6.015625-6.015626-14.007812-9.324219-22.511718-9.324219-8.503907 0-16.496094 3.308593-22.511719 9.324219l-11.90625 11.90625c-7.273438 7.273437-21.003907 7.304687-28.332031.089843l-47.507813-49.5c-.070313-.074219-.140625-.148437-.214844-.21875-7.285156-7.285156-7.285156-19.140625 0-26.425781l11.90625-11.90625c12.445313-12.445312 12.445313-32.582031 0-45.023438l-47.628906-47.628906c-12.410156-12.410156-32.605469-12.410156-45.019531 0l-11.90625 11.910156v-.003906c-17.050782 17.054688-22.734375 53.40625-14.835938 94.875zm36.042969-73.664062c12.5-12.214844 11.832031-12.449219 13.210937-12.449219.472657 0 .945313.179687 1.304688.539063 50.1875 50.457031 48.171875 47.492187 48.171875 48.9375 0 .503906-.183594.945312-.539063 1.304687l-11.910156 11.90625c-18.964844 18.964844-19.039062 49.664063-.121094 68.714844l47.535157 49.53125c.074219.070312.144531.144531.21875.21875 18.960937 18.960937 51.808593 19.023437 70.832031 0l11.90625-11.90625c.71875-.71875 1.890625-.71875 2.609375 0 50.1875 50.453125 48.171875 47.488281 48.171875 48.933593 0 .507813-.183594.945313-.539062 1.304688l-11.910157 11.90625c-8.160156 8.160156-34.152343 13.042969-68.054687 6.585938-22.625-4.3125-66.128906-17.085938-103.257813-54.214844-37.128906-37.128906-49.902343-80.632813-54.210937-103.257813-6.460938-33.902343-1.578125-59.898437 6.582031-68.054687zm0 0"], ["target", "_blank", "href", "https://www.facebook.com/Visioonwebsites-100464558721297"], ["version", "1.1", "id", "Capa_1", "xmlns", "http://www.w3.org/2000/svg", "width", "5.5em", "height", "5.5em", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 167.657 167.657", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 167.657 167.657"], ["d", "M83.829,0.349C37.532,0.349,0,37.881,0,84.178c0,41.523,30.222,75.911,69.848,82.57v-65.081H49.626\n                   v-23.42h20.222V60.978c0-20.037,12.238-30.956,30.115-30.956c8.562,0,15.92,0.638,18.056,0.919v20.944l-12.399,0.006\n                   c-9.72,0-11.594,4.618-11.594,11.397v14.947h23.193l-3.025,23.42H94.026v65.653c41.476-5.048,73.631-40.312,73.631-83.154\n                   C167.657,37.881,130.125,0.349,83.829,0.349z", 2, "fill", "#010002"], [1, "row", "input-container"], [1, "col-xs-12"], [1, "styled-input", "wide"], ["type", "text", "required", ""], [1, "col-md-6", "col-sm-12", "col-xs-12"], ["id", "mail", 1, "styled-input"], ["id", "nr", 1, "styled-input"], ["required", ""], [1, "btn-lrg", "submit-btn"]],
      template: function ContactComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "video", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "source", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h1", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "h2", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Vreti sa discutam ? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "ul", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "svg", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "path", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "path", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "svg", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "path", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](25, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](28, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](29, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](30, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](31, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](32, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](33, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](34, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](35, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](36, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](40, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "Nume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](45, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](50, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "Numar de telefon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](55, "textarea", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "Mesaj");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, "Trimite");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      styles: ["*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n\n.sec[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100vh;\n  overflow: hidden;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.sec[_ngcontent-%COMP%]   #myVideo[_ngcontent-%COMP%] {\n  position: relative;\n  top: 0;\n  left: 0;\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  z-index: 0;\n  background-color: rgba(255, 0, 0, 0.06);\n}\n\n.sec[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  margin-top: 10vh;\n  position: absolute;\n  z-index: 0;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif, \"arial\";\n  font-weight: 600;\n  font-size: 72px;\n  color: white;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif, \"arial\";\n  font-weight: 400;\n  font-size: 20px;\n  color: #ffffff;\n  line-height: 1.5;\n}\n\n.social[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 10;\n  bottom: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.social[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n}\n\n.social[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-right: 20px;\n  filter: invert(1);\n  transform: scale(0.5);\n  transition: 0.5s;\n}\n\n.social[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  transform: scale(0.5) translateY(-15px);\n}\n\n\n\ninput[_ngcontent-%COMP%]:focus    ~ label[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]:focus    ~ label[_ngcontent-%COMP%], input[_ngcontent-%COMP%]:valid    ~ label[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]:valid    ~ label[_ngcontent-%COMP%] {\n  font-size: 0.9em;\n  font-weight: 400;\n  color: #999;\n  top: 2px;\n  transition: all 0.225s ease;\n}\n\n.styled-input[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: 4px;\n  padding: 10px;\n}\n\n.styled-input[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: #999;\n  padding: 1rem 30px;\n  position: absolute;\n  top: 10px;\n  left: 0;\n  transition: all 0.25s ease;\n  pointer-events: none;\n}\n\n.styled-input.wide[_ngcontent-%COMP%] {\n  width: 650px;\n  max-width: 100%;\n}\n\ninput[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  padding: 30px 20px;\n  border: 0;\n  width: 100%;\n  font-size: 1rem;\n  background-color: #2d2d2d;\n  color: white;\n  border-radius: 4px;\n}\n\ninput[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus {\n  outline: 0;\n}\n\ninput[_ngcontent-%COMP%]:focus    ~ span[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]:focus    ~ span[_ngcontent-%COMP%] {\n  width: 100%;\n  transition: all 0.075s ease;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 15em;\n}\n\n.input-container[_ngcontent-%COMP%] {\n  width: 650px;\n  max-width: 100vw;\n  margin: 20px auto 25px auto;\n}\n\n.submit-btn[_ngcontent-%COMP%] {\n  padding: 7px 35px;\n  border-radius: 60px;\n  display: inline-block;\n  background-color: #fb2323;\n  color: white;\n  font-size: 18px;\n  cursor: pointer;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.06), 0 2px 10px 0 rgba(0, 0, 0, 0.07);\n  left: 50%;\n  transform: translateX(-50%);\n  position: absolute;\n}\n\n.submit-btn[_ngcontent-%COMP%]:hover {\n  letter-spacing: 2px;\n  font-weight: 400;\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1), 0 1px 1px 0 rgba(0, 0, 0, 0.09);\n}\n\ninput[type=checkbox][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%] {\n  color: #ccc;\n  font-style: italic;\n}\n\ninput[type=checkbox][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%] {\n  color: #f00;\n  font-style: normal;\n}\n\n@media only screen and (min-width: 724px) and (max-width: 767px) {\n  .sec[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    min-height: 150vh;\n  }\n\n  h1[_ngcontent-%COMP%] {\n    font-family: \"Poppins\", sans-serif, \"arial\";\n    font-weight: 600;\n    font-size: 2.5em;\n    color: white;\n    text-align: center;\n    margin-top: 10%;\n  }\n\n  h4[_ngcontent-%COMP%] {\n    font-family: \"Roboto\", sans-serif, \"arial\";\n    font-weight: 400;\n    font-size: 1em;\n    color: #9b9b9b;\n    line-height: 1.5;\n  }\n\n  .social[_ngcontent-%COMP%] {\n    position: relative;\n    z-index: 10;\n    bottom: 1em;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .social[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    list-style: none;\n  }\n\n  .social[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: inline-block;\n    filter: invert(1);\n    transform: scale(0.5);\n    transition: 0.5s;\n  }\n\n  .social[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    transform: scale(0.5) translateY(-15px);\n  }\n\n  .styled-input[_ngcontent-%COMP%] {\n    margin: 0.51rem 0;\n    position: relative;\n    border-radius: 4px;\n    padding: 10px;\n  }\n\n  .styled-input[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    color: #999;\n    padding: 0.5rem 30px 0.35rem 30px;\n    position: absolute;\n    top: 10%;\n    width: 60vw;\n    transition: all 0.25s ease;\n    pointer-events: none;\n    position: absolute;\n    left: 10%;\n    transform: translateX(-10%);\n  }\n\n  .styled-input.wide[_ngcontent-%COMP%] {\n    max-width: 90vw;\n    height: auto;\n  }\n\n  input[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n    padding: 10px;\n    border: 0;\n    width: 100%;\n    font-size: 1rem;\n    color: white;\n    border-radius: 4px;\n  }\n\n  textarea[_ngcontent-%COMP%] {\n    width: 100%;\n    max-height: 100%;\n  }\n\n  .input-container[_ngcontent-%COMP%] {\n    max-width: 90vw;\n    margin: auto;\n    max-height: 15vh;\n    position: absolute;\n    left: 50%;\n    transform: translateX(-50%);\n  }\n\n  .submit-btn[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 50%;\n    transform: translateX(-50%);\n  }\n}\n\n@media screen and (max-width: 723px) {\n  .sec[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    min-height: 150vh;\n  }\n\n  h1[_ngcontent-%COMP%] {\n    font-family: \"Poppins\", sans-serif, \"arial\";\n    font-weight: 600;\n    font-size: 2.5em;\n    color: white;\n    text-align: center;\n    margin-top: 10%;\n  }\n\n  h4[_ngcontent-%COMP%] {\n    font-family: \"Roboto\", sans-serif, \"arial\";\n    font-weight: 400;\n    font-size: 1em;\n    color: #9b9b9b;\n    line-height: 1.5;\n  }\n\n  .social[_ngcontent-%COMP%] {\n    position: relative;\n    z-index: 10;\n    bottom: 1em;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .social[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    list-style: none;\n  }\n\n  .social[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: inline-block;\n    filter: invert(1);\n    transform: scale(0.5);\n    transition: 0.5s;\n  }\n\n  .social[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    transform: scale(0.5) translateY(-15px);\n  }\n\n  .styled-input[_ngcontent-%COMP%] {\n    float: left;\n    width: 90vw;\n    margin: 0.51rem 0;\n    position: relative;\n    border-radius: 4px;\n    padding: 10px;\n  }\n\n  .styled-input[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    color: #999;\n    padding: 0.5rem 30px 0.35rem 30px;\n    position: absolute;\n    top: 10%;\n    width: 60vw;\n    transition: all 0.25s ease;\n    pointer-events: none;\n    position: absolute;\n    left: 10%;\n    transform: translateX(-10%);\n  }\n\n  .styled-input.wide[_ngcontent-%COMP%] {\n    max-width: 90vw;\n    height: auto;\n  }\n\n  input[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n    padding: 10px;\n    border: 0;\n    width: 100%;\n    font-size: 1rem;\n    color: white;\n    border-radius: 4px;\n  }\n\n  textarea[_ngcontent-%COMP%] {\n    width: 100%;\n    max-height: 100%;\n  }\n\n  .input-container[_ngcontent-%COMP%] {\n    max-width: 90vw;\n    margin: auto;\n    max-height: 15vh;\n    position: absolute;\n    left: 50%;\n    transform: translateX(-50%);\n  }\n\n  .submit-btn[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 50%;\n    transform: translateX(-50%);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0L0M6XFxVc2Vyc1xcYW5kcmVcXERlc2t0b3BcXFBvcnRvZm9saXVBbmd1bGFyXFxQb3J0b2ZvbGl1QW5kcmVpL3NyY1xcYXBwXFxjb21wb25lbnRzXFxjb250YWN0XFxjb250YWN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURPQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLFVBQUE7RUFDQSx1Q0FBQTtBQ0pKOztBRFFBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNMSjs7QURVRTtFQUNFLDJDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ1BKOztBRFdBO0VBQ0ksMENBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNSSjs7QURXQTtFQUVFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ1RGOztBRFlBO0VBRUUsZ0JBQUE7QUNWRjs7QURZQTtFQUVFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUNWRjs7QURZQTtFQUVFLHVDQUFBO0FDVkY7O0FEYUEsc0JBQUE7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFFQSwyQkFBQTtBQ1hKOztBRGNBO0VBSUksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUNkSjs7QURtQkE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBRUEsMEJBQUE7RUFDQSxvQkFBQTtBQ2hCSjs7QURtQkE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtBQ2hCSjs7QURtQkE7O0VBRUksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ2hCSjs7QURtQkE7O0VBQ2lCLFVBQUE7QUNmakI7O0FEaUJBOztFQUVJLFdBQUE7RUFFQSwyQkFBQTtBQ2RKOztBRGlCQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBQ2RKOztBRGlCQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0FDZEo7O0FEaUJBO0VBRUksaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSw2RUFBQTtFQUdBLFNBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0FDakJKOztBRG9CQTtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyRUFBQTtBQ2pCSjs7QURvQkE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUNqQko7O0FEb0JFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FDakJKOztBRG9CRTtFQUNFO0lBQ0ksdUJBQUE7SUFDQSxpQkFBQTtFQ2pCTjs7RURvQkU7SUFDSSwyQ0FBQTtJQUNBLGdCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxZQUFBO0lBQ0Esa0JBQUE7SUFDQSxlQUFBO0VDakJOOztFRG9CRTtJQUNJLDBDQUFBO0lBQ0EsZ0JBQUE7SUFDQSxjQUFBO0lBQ0EsY0FBQTtJQUNBLGdCQUFBO0VDakJOOztFRG9CRTtJQUVFLGtCQUFBO0lBQ0EsV0FBQTtJQUNBLFdBQUE7SUFDQSxhQUFBO0lBQ0EsdUJBQUE7SUFDQSxtQkFBQTtFQ2xCSjs7RURxQkU7SUFFRSxnQkFBQTtFQ25CSjs7RURxQkU7SUFFRSxxQkFBQTtJQUNBLGlCQUFBO0lBQ0EscUJBQUE7SUFDQSxnQkFBQTtFQ25CSjs7RURxQkU7SUFFRSx1Q0FBQTtFQ25CSjs7RUR1QkU7SUFFSSxpQkFBQTtJQUNBLGtCQUFBO0lBQ0Esa0JBQUE7SUFDQSxhQUFBO0VDckJOOztFRDJCRTtJQUNJLFdBQUE7SUFDQSxpQ0FBQTtJQUNBLGtCQUFBO0lBQ0EsUUFBQTtJQUNBLFdBQUE7SUFFQSwwQkFBQTtJQUNBLG9CQUFBO0lBQ0Esa0JBQUE7SUFDQSxTQUFBO0lBQ0EsMkJBQUE7RUN4Qk47O0VENEJFO0lBRUksZUFBQTtJQUNBLFlBQUE7RUMxQk47O0VEOEJFOztJQUVJLGFBQUE7SUFDQSxTQUFBO0lBQ0EsV0FBQTtJQUNBLGVBQUE7SUFFQSxZQUFBO0lBQ0Esa0JBQUE7RUM1Qk47O0VEa0NFO0lBQ0ksV0FBQTtJQUNBLGdCQUFBO0VDL0JOOztFRG9DRTtJQUVJLGVBQUE7SUFDQSxZQUFBO0lBQ0EsZ0JBQUE7SUFDQSxrQkFBQTtJQUNBLFNBQUE7SUFDQSwyQkFBQTtFQ2xDTjs7RUR1Q0U7SUFDSSxrQkFBQTtJQUNBLFNBQUE7SUFDQSwyQkFBQTtFQ3BDTjtBQUNGOztBRHdDQTtFQUNJO0lBQ0ksdUJBQUE7SUFDQSxpQkFBQTtFQ3RDTjs7RUR5Q0U7SUFDSSwyQ0FBQTtJQUNBLGdCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxZQUFBO0lBQ0Esa0JBQUE7SUFDQSxlQUFBO0VDdENOOztFRHlDRTtJQUNJLDBDQUFBO0lBQ0EsZ0JBQUE7SUFDQSxjQUFBO0lBQ0EsY0FBQTtJQUNBLGdCQUFBO0VDdENOOztFRHlDRTtJQUVFLGtCQUFBO0lBQ0EsV0FBQTtJQUNBLFdBQUE7SUFDQSxhQUFBO0lBQ0EsdUJBQUE7SUFDQSxtQkFBQTtFQ3ZDSjs7RUQwQ0U7SUFFRSxnQkFBQTtFQ3hDSjs7RUQwQ0U7SUFFRSxxQkFBQTtJQUNBLGlCQUFBO0lBQ0EscUJBQUE7SUFDQSxnQkFBQTtFQ3hDSjs7RUQwQ0U7SUFFRSx1Q0FBQTtFQ3hDSjs7RUQ0Q0U7SUFDSSxXQUFBO0lBQ0EsV0FBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxrQkFBQTtJQUNBLGFBQUE7RUN6Q047O0VEK0NFO0lBQ0ksV0FBQTtJQUNBLGlDQUFBO0lBQ0Esa0JBQUE7SUFDQSxRQUFBO0lBQ0EsV0FBQTtJQUVBLDBCQUFBO0lBQ0Esb0JBQUE7SUFDQSxrQkFBQTtJQUNBLFNBQUE7SUFDQSwyQkFBQTtFQzVDTjs7RURnREU7SUFFSSxlQUFBO0lBQ0EsWUFBQTtFQzlDTjs7RURrREU7O0lBRUksYUFBQTtJQUNBLFNBQUE7SUFDQSxXQUFBO0lBQ0EsZUFBQTtJQUVBLFlBQUE7SUFDQSxrQkFBQTtFQ2hETjs7RURzREU7SUFDSSxXQUFBO0lBQ0EsZ0JBQUE7RUNuRE47O0VEd0RFO0lBRUksZUFBQTtJQUNBLFlBQUE7SUFDQSxnQkFBQTtJQUNBLGtCQUFBO0lBQ0EsU0FBQTtJQUNBLDJCQUFBO0VDdEROOztFRDJERTtJQUNJLGtCQUFBO0lBQ0EsU0FBQTtJQUNBLDJCQUFBO0VDeEROO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG5cclxufVxyXG4uc2Vje1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAvLyAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDIxN2RlZywgcmdiYSgyNTUsMCwwLC44KSwgcmdiYSgyNTUsIDAsIDAsIDApIDcwLjcxJSksXHJcbiAgICAvLyBsaW5lYXItZ3JhZGllbnQoMTI3ZGVnLCByZ2JhKDE3NywgMjksIDI5LCAwLjgpLCByZ2JhKDI1NSwgMCwgMCwgMCkgNzAuNzElKSxcclxuICAgIC8vIGxpbmVhci1ncmFkaWVudCgzMzZkZWcsIHJnYmEoMjIsIDMsIDMsIDAuOCksIHJnYmEoMjU1LCAwLCAwLCAwKSA3MC43MSUpOztcclxuICAgIFxyXG4gICAgXHJcblxyXG59XHJcbi5zZWMgI215VmlkZW8ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIHotaW5kZXg6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC4wNik7XHJcbiAgfVxyXG5cclxuICBcclxuLnNlYyAgLmNvbnRlbnQge1xyXG4gICAgbWFyZ2luLXRvcDogMTB2aDtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlOyAgICAgIFxyXG4gICAgei1pbmRleDogMDtcclxuICAgIFxyXG4gIH1cclxuXHJcblxyXG4gIGgxIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWYsICdhcmlhbCc7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiA3MnB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG5cclxufVxyXG5cclxuaDIge1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmLCAnYXJpYWwnO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxufVxyXG5cclxuLnNvY2lhbFxyXG57XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDEwO1xyXG4gIGJvdHRvbTogMjBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgXHJcbn1cclxuLnNvY2lhbCBsaVxyXG57XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG4uc29jaWFsIGxpIGFcclxue1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgZmlsdGVyOiBpbnZlcnQoMSk7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xyXG4gIHRyYW5zaXRpb246IDAuNXM7XHJcbn1cclxuLnNvY2lhbCBsaSBhOmhvdmVyXHJcbntcclxuICB0cmFuc2Zvcm06IHNjYWxlKDAuNSkgdHJhbnNsYXRlWSgtMTVweCk7XHJcbn1cclxuXHJcbi8qIC8vLy8vIGlucHV0cyAvLy8vLyovXHJcblxyXG5pbnB1dDpmb2N1cyB+IGxhYmVsLCB0ZXh0YXJlYTpmb2N1cyB+IGxhYmVsLCBpbnB1dDp2YWxpZCB+IGxhYmVsLCB0ZXh0YXJlYTp2YWxpZCB+IGxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6ICM5OTk7XHJcbiAgICB0b3A6IDJweDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMjI1cyBlYXNlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMjI1cyBlYXNlO1xyXG59XHJcblxyXG4uc3R5bGVkLWlucHV0IHtcclxuICAgIC8vIGZsb2F0OiBsZWZ0O1xyXG4gICAgLy8gd2lkdGg6IDI5M3B4O1xyXG4gICAgLy8gbWFyZ2luOiAxcmVtIDA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG5cclxuXHJcbi5zdHlsZWQtaW5wdXQgbGFiZWwge1xyXG4gICAgY29sb3I6ICM5OTk7XHJcbiAgICBwYWRkaW5nOiAxcmVtIDMwcHggO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMHB4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2U7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZTtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcblxyXG4uc3R5bGVkLWlucHV0LndpZGUgeyBcclxuICAgIHdpZHRoOiA2NTBweDtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxufVxyXG5cclxuaW5wdXQsXHJcbnRleHRhcmVhIHtcclxuICAgIHBhZGRpbmc6IDMwcHggMjBweDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJkMmQyZDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuaW5wdXQ6Zm9jdXMsXHJcbnRleHRhcmVhOmZvY3VzIHsgb3V0bGluZTogMDsgfVxyXG5cclxuaW5wdXQ6Zm9jdXMgfiBzcGFuLFxyXG50ZXh0YXJlYTpmb2N1cyB+IHNwYW4ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjA3NXMgZWFzZTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjA3NXMgZWFzZTtcclxufVxyXG5cclxudGV4dGFyZWEge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAxNWVtO1xyXG59XHJcblxyXG4uaW5wdXQtY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiA2NTBweDtcclxuICAgIG1heC13aWR0aDogMTAwdnc7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0byAyNXB4IGF1dG87XHJcbn1cclxuXHJcbi5zdWJtaXQtYnRuIHtcclxuICAgIC8vIGZsb2F0OiByaWdodDtcclxuICAgIHBhZGRpbmc6IDdweCAzNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNjBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYjIzMjM7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2JhKDAsMCwwLDAuMDYpLFxyXG4gICAgICAgICAgICAgIDAgMnB4IDEwcHggMCByZ2JhKDAsMCwwLDAuMDcpO1xyXG4gICAgXHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbi5zdWJtaXQtYnRuOmhvdmVyIHtcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggMXB4IDAgcmdiYSgwLDAsMCwwLjEwKSxcclxuICAgICAgICAgICAgICAwIDFweCAxcHggMCByZ2JhKDAsMCwwLDAuMDkpO1xyXG59XHJcbmlucHV0W3R5cGU9Y2hlY2tib3hdICsgbGFiZWwge1xyXG4gICAgY29sb3I6ICNjY2M7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgfSBcclxuICBcclxuICBpbnB1dFt0eXBlPWNoZWNrYm94XTpjaGVja2VkICsgbGFiZWwge1xyXG4gICAgY29sb3I6ICNmMDA7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQobWluLXdpZHRoOiA3MjRweCkgYW5kIChtYXgtd2lkdGg6IDc2N3B4KXtcclxuICAgIC5zZWN7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgbWluLWhlaWdodDogMTUwdmg7XHJcbiAgICB9XHJcblxyXG4gICAgaDEge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWYsICdhcmlhbCc7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBmb250LXNpemU6IDIuNWVtO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTAlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBoNCB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmLCAnYXJpYWwnO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgY29sb3I6ICM5YjliOWI7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnNvY2lhbFxyXG4gICAge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgICBib3R0b206IDFlbTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gICAgLnNvY2lhbCBsaVxyXG4gICAge1xyXG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgfVxyXG4gICAgLnNvY2lhbCBsaSBhXHJcbiAgICB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgZmlsdGVyOiBpbnZlcnQoMSk7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC41KTtcclxuICAgICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgIH1cclxuICAgIC5zb2NpYWwgbGkgYTpob3ZlclxyXG4gICAge1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNSkgdHJhbnNsYXRlWSgtMTVweCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC5zdHlsZWQtaW5wdXQge1xyXG4gICAgXHJcbiAgICAgICAgbWFyZ2luOiAwLjUxcmVtIDA7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcblxyXG4gICAgXHJcbiAgICAuc3R5bGVkLWlucHV0IGxhYmVsIHtcclxuICAgICAgICBjb2xvcjogIzk5OTtcclxuICAgICAgICBwYWRkaW5nOiAwLjVyZW0gMzBweCAwLjM1cmVtIDMwcHg7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMTAlO1xyXG4gICAgICAgIHdpZHRoOiA2MHZ3O1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2U7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2U7XHJcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDEwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwJSk7XHJcbiAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnN0eWxlZC1pbnB1dC53aWRlIHsgXHJcbiAgICAgICAgXHJcbiAgICAgICAgbWF4LXdpZHRoOiA5MHZ3O1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgaW5wdXQsXHJcbiAgICB0ZXh0YXJlYSB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICBcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIFxyXG4gICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuXHJcbiAgICB0ZXh0YXJlYSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgIFxyXG4gICAgICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuaW5wdXQtY29udGFpbmVyIHtcclxuICAgICAgICBcclxuICAgICAgICBtYXgtd2lkdGg6IDkwdnc7XHJcbiAgICAgICAgbWFyZ2luOiAgYXV0bztcclxuICAgICAgICBtYXgtaGVpZ2h0OiAxNXZoO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgICAgXHJcbiAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAuc3VibWl0LWJ0biB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICAgICAgICBcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzIzcHgpIHtcclxuICAgIC5zZWN7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgbWluLWhlaWdodDogMTUwdmg7XHJcbiAgICB9XHJcblxyXG4gICAgaDEge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWYsICdhcmlhbCc7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBmb250LXNpemU6IDIuNWVtO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTAlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBoNCB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmLCAnYXJpYWwnO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgY29sb3I6ICM5YjliOWI7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnNvY2lhbFxyXG4gICAge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgICBib3R0b206IDFlbTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gICAgLnNvY2lhbCBsaVxyXG4gICAge1xyXG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgfVxyXG4gICAgLnNvY2lhbCBsaSBhXHJcbiAgICB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgZmlsdGVyOiBpbnZlcnQoMSk7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC41KTtcclxuICAgICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgIH1cclxuICAgIC5zb2NpYWwgbGkgYTpob3ZlclxyXG4gICAge1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNSkgdHJhbnNsYXRlWSgtMTVweCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC5zdHlsZWQtaW5wdXQge1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIHdpZHRoOiA5MHZ3O1xyXG4gICAgICAgIG1hcmdpbjogMC41MXJlbSAwO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgXHJcbiAgICAuc3R5bGVkLWlucHV0IGxhYmVsIHtcclxuICAgICAgICBjb2xvcjogIzk5OTtcclxuICAgICAgICBwYWRkaW5nOiAwLjVyZW0gMzBweCAwLjM1cmVtIDMwcHg7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMTAlO1xyXG4gICAgICAgIHdpZHRoOiA2MHZ3O1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2U7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2U7XHJcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDEwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwJSk7XHJcbiAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnN0eWxlZC1pbnB1dC53aWRlIHsgXHJcbiAgICAgICAgXHJcbiAgICAgICAgbWF4LXdpZHRoOiA5MHZ3O1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlucHV0LFxyXG4gICAgdGV4dGFyZWEge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgXHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICBcclxuICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcblxyXG4gICAgdGV4dGFyZWEge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICBcclxuICAgICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmlucHV0LWNvbnRhaW5lciB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbWF4LXdpZHRoOiA5MHZ3O1xyXG4gICAgICAgIG1hcmdpbjogIGF1dG87XHJcbiAgICAgICAgbWF4LWhlaWdodDogMTV2aDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgICAgIFxyXG4gICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgLnN1Ym1pdC1idG4ge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgXHJcbn1cclxuXHJcblxyXG5cclxuIiwiKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLnNlYyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnNlYyAjbXlWaWRlbyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHotaW5kZXg6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjA2KTtcbn1cblxuLnNlYyAuY29udGVudCB7XG4gIG1hcmdpbi10b3A6IDEwdmg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMDtcbn1cblxuaDEge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWYsIFwiYXJpYWxcIjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiA3MnB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmgyIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWYsIFwiYXJpYWxcIjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cblxuLnNvY2lhbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTA7XG4gIGJvdHRvbTogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zb2NpYWwgbGkge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG4uc29jaWFsIGxpIGEge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgZmlsdGVyOiBpbnZlcnQoMSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC41KTtcbiAgdHJhbnNpdGlvbjogMC41cztcbn1cblxuLnNvY2lhbCBsaSBhOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpIHRyYW5zbGF0ZVkoLTE1cHgpO1xufVxuXG4vKiAvLy8vLyBpbnB1dHMgLy8vLy8qL1xuaW5wdXQ6Zm9jdXMgfiBsYWJlbCwgdGV4dGFyZWE6Zm9jdXMgfiBsYWJlbCwgaW5wdXQ6dmFsaWQgfiBsYWJlbCwgdGV4dGFyZWE6dmFsaWQgfiBsYWJlbCB7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjOTk5O1xuICB0b3A6IDJweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4yMjVzIGVhc2U7XG4gIHRyYW5zaXRpb246IGFsbCAwLjIyNXMgZWFzZTtcbn1cblxuLnN0eWxlZC1pbnB1dCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uc3R5bGVkLWlucHV0IGxhYmVsIHtcbiAgY29sb3I6ICM5OTk7XG4gIHBhZGRpbmc6IDFyZW0gMzBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwcHg7XG4gIGxlZnQ6IDA7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2U7XG4gIHRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLnN0eWxlZC1pbnB1dC53aWRlIHtcbiAgd2lkdGg6IDY1MHB4O1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbmlucHV0LFxudGV4dGFyZWEge1xuICBwYWRkaW5nOiAzMHB4IDIwcHg7XG4gIGJvcmRlcjogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJkMmQyZDtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbmlucHV0OmZvY3VzLFxudGV4dGFyZWE6Zm9jdXMge1xuICBvdXRsaW5lOiAwO1xufVxuXG5pbnB1dDpmb2N1cyB+IHNwYW4sXG50ZXh0YXJlYTpmb2N1cyB+IHNwYW4ge1xuICB3aWR0aDogMTAwJTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4wNzVzIGVhc2U7XG4gIHRyYW5zaXRpb246IGFsbCAwLjA3NXMgZWFzZTtcbn1cblxudGV4dGFyZWEge1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTVlbTtcbn1cblxuLmlucHV0LWNvbnRhaW5lciB7XG4gIHdpZHRoOiA2NTBweDtcbiAgbWF4LXdpZHRoOiAxMDB2dztcbiAgbWFyZ2luOiAyMHB4IGF1dG8gMjVweCBhdXRvO1xufVxuXG4uc3VibWl0LWJ0biB7XG4gIHBhZGRpbmc6IDdweCAzNXB4O1xuICBib3JkZXItcmFkaXVzOiA2MHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYjIzMjM7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4wNiksIDAgMnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMDcpO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uc3VibWl0LWJ0bjpob3ZlciB7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC4xKSwgMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjA5KTtcbn1cblxuaW5wdXRbdHlwZT1jaGVja2JveF0gKyBsYWJlbCB7XG4gIGNvbG9yOiAjY2NjO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbmlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQgKyBsYWJlbCB7XG4gIGNvbG9yOiAjZjAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzI0cHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuc2VjIHtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBtaW4taGVpZ2h0OiAxNTB2aDtcbiAgfVxuXG4gIGgxIHtcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWYsIFwiYXJpYWxcIjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMi41ZW07XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAxMCU7XG4gIH1cblxuICBoNCB7XG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWYsIFwiYXJpYWxcIjtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIGNvbG9yOiAjOWI5YjliO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIH1cblxuICAuc29jaWFsIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMTA7XG4gICAgYm90dG9tOiAxZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5cbiAgLnNvY2lhbCBsaSB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgfVxuXG4gIC5zb2NpYWwgbGkgYSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZpbHRlcjogaW52ZXJ0KDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC41KTtcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xuICB9XG5cbiAgLnNvY2lhbCBsaSBhOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNSkgdHJhbnNsYXRlWSgtMTVweCk7XG4gIH1cblxuICAuc3R5bGVkLWlucHV0IHtcbiAgICBtYXJnaW46IDAuNTFyZW0gMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cblxuICAuc3R5bGVkLWlucHV0IGxhYmVsIHtcbiAgICBjb2xvcjogIzk5OTtcbiAgICBwYWRkaW5nOiAwLjVyZW0gMzBweCAwLjM1cmVtIDMwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTAlO1xuICAgIHdpZHRoOiA2MHZ3O1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2U7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2U7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDEwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwJSk7XG4gIH1cblxuICAuc3R5bGVkLWlucHV0LndpZGUge1xuICAgIG1heC13aWR0aDogOTB2dztcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cblxuICBpbnB1dCxcbnRleHRhcmVhIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlcjogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgfVxuXG4gIHRleHRhcmVhIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICB9XG5cbiAgLmlucHV0LWNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiA5MHZ3O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBtYXgtaGVpZ2h0OiAxNXZoO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICB9XG5cbiAgLnN1Ym1pdC1idG4ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MjNweCkge1xuICAuc2VjIHtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBtaW4taGVpZ2h0OiAxNTB2aDtcbiAgfVxuXG4gIGgxIHtcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWYsIFwiYXJpYWxcIjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMi41ZW07XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAxMCU7XG4gIH1cblxuICBoNCB7XG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWYsIFwiYXJpYWxcIjtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIGNvbG9yOiAjOWI5YjliO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIH1cblxuICAuc29jaWFsIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMTA7XG4gICAgYm90dG9tOiAxZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5cbiAgLnNvY2lhbCBsaSB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgfVxuXG4gIC5zb2NpYWwgbGkgYSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZpbHRlcjogaW52ZXJ0KDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC41KTtcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xuICB9XG5cbiAgLnNvY2lhbCBsaSBhOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNSkgdHJhbnNsYXRlWSgtMTVweCk7XG4gIH1cblxuICAuc3R5bGVkLWlucHV0IHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogOTB2dztcbiAgICBtYXJnaW46IDAuNTFyZW0gMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cblxuICAuc3R5bGVkLWlucHV0IGxhYmVsIHtcbiAgICBjb2xvcjogIzk5OTtcbiAgICBwYWRkaW5nOiAwLjVyZW0gMzBweCAwLjM1cmVtIDMwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTAlO1xuICAgIHdpZHRoOiA2MHZ3O1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2U7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2U7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDEwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwJSk7XG4gIH1cblxuICAuc3R5bGVkLWlucHV0LndpZGUge1xuICAgIG1heC13aWR0aDogOTB2dztcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cblxuICBpbnB1dCxcbnRleHRhcmVhIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlcjogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgfVxuXG4gIHRleHRhcmVhIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICB9XG5cbiAgLmlucHV0LWNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiA5MHZ3O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBtYXgtaGVpZ2h0OiAxNXZoO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICB9XG5cbiAgLnN1Ym1pdC1idG4ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICB9XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-contact',
          templateUrl: './contact.component.html',
          styleUrls: ['./contact.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/intro/intro.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/intro/intro.component.ts ***!
    \*****************************************************/

  /*! exports provided: IntroComponent */

  /***/
  function srcAppComponentsIntroIntroComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IntroComponent", function () {
      return IntroComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var IntroComponent = /*#__PURE__*/function () {
      function IntroComponent() {
        _classCallCheck(this, IntroComponent);
      }

      _createClass(IntroComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {// var labelID;
          // $('label').click(function () {
          //   labelID = $(this).attr('for');
          //   $('#' + labelID).toggleClass('active');
          // });
        }
      }]);

      return IntroComponent;
    }();

    IntroComponent.??fac = function IntroComponent_Factory(t) {
      return new (t || IntroComponent)();
    };

    IntroComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: IntroComponent,
      selectors: [["app-intro"]],
      decls: 0,
      vars: 0,
      template: function IntroComponent_Template(rf, ctx) {},
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW50cm8vaW50cm8uY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](IntroComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-intro',
          templateUrl: './intro.component.html',
          styleUrls: ['./intro.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/main/about/about.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/components/main/about/about.component.ts ***!
    \**********************************************************/

  /*! exports provided: AboutComponent */

  /***/
  function srcAppComponentsMainAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AboutComponent = /*#__PURE__*/function () {
      function AboutComponent() {
        _classCallCheck(this, AboutComponent);
      }

      _createClass(AboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutComponent;
    }();

    AboutComponent.??fac = function AboutComponent_Factory(t) {
      return new (t || AboutComponent)();
    };

    AboutComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: AboutComponent,
      selectors: [["app-about"]],
      decls: 17,
      vars: 0,
      consts: [[1, "text-center"], [1, "row"], [1, "col-md-6", "col-xs-12", "poza"], ["src", "/assets/img/VISIOON1.png", "alt", "", 1, "logo"], [1, "col-md-6", "col-xs-12", "text"], [1, "vw"], ["routerLink", "/about", 1, "text-center"]],
      template: function AboutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Despre ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Noi ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "h2", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Visioonwebsites");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, " ofera servicii de webdesign si graphic design ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Suntem la inceput de drum. Avand ca scop principal satisfacerea nevoilor clientilor. Cu ajutorul ultimelor tehnologii avem placerea de a pune la dispozita dumneavoastra produse de inalta calitate. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "button");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Mai mult");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: ["*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbutton[_ngcontent-%COMP%] {\n  position: relative;\n  left: 10%;\n  top: 10%;\n  transform: translateX(-10%) translateY(-10%);\n}\n\nbody[_ngcontent-%COMP%] {\n  background: #111;\n}\n\nbutton[_ngcontent-%COMP%] {\n  background: #333;\n  color: #ccc;\n  width: 200px;\n  height: 60px;\n  border: 0;\n  font-size: 18px;\n  border-radius: 4px;\n  font-family: \"Raleway\", sans-serif;\n  transition: 0.6s;\n  overflow: hidden;\n}\n\nbutton[_ngcontent-%COMP%]:focus {\n  outline: 0;\n}\n\nbutton[_ngcontent-%COMP%]:before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  background: rgba(255, 255, 255, 0.5);\n  width: 60px;\n  height: 100%;\n  left: 0;\n  top: 0;\n  opacity: 0.5;\n  filter: blur(30px);\n  transform: translateX(-100px) skewX(-15deg);\n}\n\nbutton[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  background: rgba(255, 255, 255, 0.2);\n  width: 30px;\n  height: 100%;\n  left: 30px;\n  top: 0;\n  opacity: 0;\n  filter: blur(5px);\n  transform: translateX(-100px) skewX(-15deg);\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n  background: #e71616;\n  cursor: pointer;\n}\n\nbutton[_ngcontent-%COMP%]:hover:before {\n  transform: translateX(300px) skewX(-15deg);\n  opacity: 0.6;\n  transition: 0.7s;\n}\n\nbutton[_ngcontent-%COMP%]:hover:after {\n  transform: translateX(300px) skewX(-15deg);\n  opacity: 1;\n  transition: 0.7s;\n}\n\na[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n  letter-spacing: 2px;\n  font-family: sans-serif;\n  font-weight: 400;\n  padding: 30px;\n  color: white;\n  text-decoration: none;\n}\n\nh1[_ngcontent-%COMP%] {\n  padding: 5% 0;\n  font-family: monospace;\n  font-size: 4.4em;\n  white-space: nowrap;\n  font-size: 800;\n  text-shadow: 0 2px 2px rgba(0, 0, 0, 0.9);\n  color: #fff;\n  text-transform: uppercase;\n}\n\nspan[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.logo[_ngcontent-%COMP%] {\n  min-width: 90%;\n  min-height: 90%;\n  max-width: 90%;\n  max-height: 90%;\n}\n\nh2[_ngcontent-%COMP%] {\n  padding-top: 15%;\n  font-size: 2em;\n  color: #fff;\n}\n\n.vw[_ngcontent-%COMP%] {\n  font-size: 1.1em;\n  color: red;\n}\n\np[_ngcontent-%COMP%] {\n  padding: 1% 5% 0 1%;\n  font-size: 2.2em;\n  color: white;\n  line-height: 1.5em;\n}\n\n@media screen and (min-width: 668px) and (max-width: 1200px) {\n  h1[_ngcontent-%COMP%] {\n    font-size: 3.9em;\n  }\n\n  h2[_ngcontent-%COMP%] {\n    font-size: 1.6em;\n    padding: 1% 5%;\n  }\n\n  p[_ngcontent-%COMP%] {\n    font-size: 1.6em;\n    padding: 1% 5%;\n    line-height: 40px;\n    text-align: center;\n  }\n\n  button[_ngcontent-%COMP%] {\n    width: 200px;\n    height: 50px;\n    position: relative;\n    left: 50%;\n    bottom: 80%;\n    transform: translateX(-50%) translateY(-80%);\n  }\n  button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 1em;\n  }\n}\n\n@media screen and (min-width: 401px) and (max-width: 667px) {\n  h1[_ngcontent-%COMP%] {\n    font-size: 3.7em;\n  }\n\n  h2[_ngcontent-%COMP%] {\n    font-size: 1.5em;\n    padding: 1% 5%;\n  }\n\n  p[_ngcontent-%COMP%] {\n    font-size: 1.5em;\n    padding: 1% 5%;\n    line-height: 30px;\n    text-align: center;\n  }\n\n  button[_ngcontent-%COMP%] {\n    width: 200px;\n    height: 50px;\n    position: relative;\n    left: 50%;\n    bottom: 80%;\n    transform: translateX(-50%) translateY(-80%);\n  }\n  button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 0.5em;\n  }\n}\n\n@media screen and (max-width: 400px) {\n  h1[_ngcontent-%COMP%] {\n    font-size: 3.2em;\n  }\n\n  h2[_ngcontent-%COMP%] {\n    font-size: 1.2em;\n    padding: 1% 5%;\n  }\n\n  p[_ngcontent-%COMP%] {\n    font-size: 1.2em;\n    padding: 1% 5%;\n    line-height: 30px;\n    text-align: center;\n  }\n\n  button[_ngcontent-%COMP%] {\n    width: 200px;\n    height: 50px;\n    position: relative;\n    left: 50%;\n    bottom: 80%;\n    transform: translateX(-50%) translateY(-80%);\n  }\n  button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 0.5em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluL2Fib3V0L0M6XFxVc2Vyc1xcYW5kcmVcXERlc2t0b3BcXFBvcnRvZm9saXVBbmd1bGFyXFxQb3J0b2ZvbGl1QW5kcmVpL3NyY1xcYXBwXFxjb21wb25lbnRzXFxtYWluXFxhYm91dFxcYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7QUNDRjs7QURZQTtFQVBNLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSw0Q0FBQTtBQ0ROOztBRFNBO0VBQ0EsZ0JBQUE7QUNOQTs7QURTQTtFQUVBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ1BBOztBRFFBO0VBQ0UsVUFBQTtBQ05GOztBRFFBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDJDQUFBO0FDTkY7O0FEUUE7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsMkNBQUE7QUNORjs7QURRQTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtBQ05GOztBRE9FO0VBQ0UsMENBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNMSjs7QURPRTtFQUNFLDBDQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FDTEo7O0FEU0E7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUNORjs7QURVQTtFQUNFLGFBQUE7RUFDRixzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EseUNBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUNQQTs7QURVQTtFQUNFLFVBQUE7QUNQRjs7QURTQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNORjs7QURTQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUNORjs7QURRQTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtBQ0xGOztBRE9BO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0pGOztBRFFBO0VBRUU7SUFDRSxnQkFBQTtFQ05GOztFRFFBO0lBQ0UsZ0JBQUE7SUFDQSxjQUFBO0VDTEY7O0VEUUE7SUFDRSxnQkFBQTtJQUNBLGNBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0VDTEY7O0VET0E7SUFDRSxZQUFBO0lBQ0EsWUFBQTtJQUNBLGtCQUFBO0lBQ0EsU0FBQTtJQUNBLFdBQUE7SUFDQSw0Q0FBQTtFQ0pGO0VEUUU7SUFDRSxjQUFBO0VDTko7QUFDRjs7QURhQTtFQUVFO0lBQ0UsZ0JBQUE7RUNaRjs7RURjQTtJQUNFLGdCQUFBO0lBQ0EsY0FBQTtFQ1hGOztFRGNBO0lBQ0UsZ0JBQUE7SUFDQSxjQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtFQ1hGOztFRGFBO0lBQ0UsWUFBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtJQUNBLFNBQUE7SUFDQSxXQUFBO0lBQ0EsNENBQUE7RUNWRjtFRGNFO0lBQ0UsZ0JBQUE7RUNaSjtBQUNGOztBRG9CQTtFQUVBO0lBQ0UsZ0JBQUE7RUNuQkE7O0VEcUJGO0lBQ0UsZ0JBQUE7SUFDQSxjQUFBO0VDbEJBOztFRHFCRjtJQUNFLGdCQUFBO0lBQ0EsY0FBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7RUNsQkE7O0VEb0JGO0lBQ0UsWUFBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtJQUNBLFNBQUE7SUFDQSxXQUFBO0lBQ0EsNENBQUE7RUNqQkE7RURxQkE7SUFDRSxnQkFBQTtFQ25CRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tYWluL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbkBtaXhpbiBjZW50ZXIoJGV4dGVuZDogdHJ1ZSkge1xyXG4gIEBpZiAkZXh0ZW5kIHtcclxuICAgICAgQGV4dGVuZCAlY2VudGVyO1xyXG4gIH0gQGVsc2Uge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGxlZnQ6IDEwJTtcclxuICAgICAgdG9wOiAxMCU7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAlKSB0cmFuc2xhdGVZKC0xMCUpO1xyXG4gIH1cclxufVxyXG5cclxuJWNlbnRlciB7XHJcbiAgQGluY2x1ZGUgY2VudGVyKCRleHRlbmQ6IGZhbHNlKTtcclxufVxyXG5cclxuYm9keXtcclxuYmFja2dyb3VuZDogIzExMTtcclxufVxyXG5cclxuYnV0dG9ue1xyXG5AaW5jbHVkZSBjZW50ZXI7XHJcbmJhY2tncm91bmQ6ICMzMzM7XHJcbmNvbG9yOiAjY2NjO1xyXG53aWR0aDogMjAwcHg7XHJcbmhlaWdodDogNjBweDtcclxuYm9yZGVyOiAwO1xyXG5mb250LXNpemU6IDE4cHg7XHJcbmJvcmRlci1yYWRpdXM6IDRweDtcclxuZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcclxudHJhbnNpdGlvbjogLjZzO1xyXG5vdmVyZmxvdzogaGlkZGVuO1xyXG4mOmZvY3Vze1xyXG4gIG91dGxpbmU6IDA7XHJcbn1cclxuJjpiZWZvcmV7XHJcbiAgY29udGVudDogJyc7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC41KTtcclxuICB3aWR0aDogNjBweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgb3BhY2l0eTogLjU7XHJcbiAgZmlsdGVyOiBibHVyKDMwcHgpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwcHgpICBza2V3WCgtMTVkZWcpO1xyXG59XHJcbiY6YWZ0ZXJ7XHJcbiAgY29udGVudDogJyc7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4yKTtcclxuICB3aWR0aDogMzBweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbGVmdDogMzBweDtcclxuICB0b3A6IDA7XHJcbiAgb3BhY2l0eTogMDtcclxuICBmaWx0ZXI6IGJsdXIoNXB4KTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMHB4KSBza2V3WCgtMTVkZWcpO1xyXG59XHJcbiY6aG92ZXJ7XHJcbiAgYmFja2dyb3VuZDogI2U3MTYxNjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgJjpiZWZvcmV7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMzAwcHgpICBza2V3WCgtMTVkZWcpOyAgXHJcbiAgICBvcGFjaXR5OiAwLjY7XHJcbiAgICB0cmFuc2l0aW9uOiAuN3M7XHJcbiAgfVxyXG4gICY6YWZ0ZXJ7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMzAwcHgpIHNrZXdYKC0xNWRlZyk7ICBcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2l0aW9uOiAuN3M7XHJcbiAgfVxyXG59XHJcbn1cclxuYXtcclxuICBmb250LXNpemU6IDEuNWVtO1xyXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBwYWRkaW5nOiAzMHB4O1xyXG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICBcclxufSAgXHJcblxyXG5oMXtcclxuICBwYWRkaW5nOjUlIDAgO1xyXG5mb250LWZhbWlseTogbW9ub3NwYWNlO1xyXG5mb250LXNpemU6IDQuNGVtO1xyXG53aGl0ZS1zcGFjZTogbm93cmFwO1xyXG5mb250LXNpemU6IDgwMDtcclxudGV4dC1zaGFkb3c6IDAgMnB4IDJweCByZ2JhKCMwMDAsIDAuOSk7XHJcbmNvbG9yOiAjZmZmO1xyXG50ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cclxufVxyXG5zcGFue1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuLmxvZ297XHJcbiAgbWluLXdpZHRoOiA5MCU7XHJcbiAgbWluLWhlaWdodDogOTAlO1xyXG4gIG1heC13aWR0aDogOTAlO1xyXG4gIG1heC1oZWlnaHQ6IDkwJTtcclxufVxyXG5cclxuaDJ7XHJcbiAgcGFkZGluZy10b3A6IDE1JTtcclxuICBmb250LXNpemU6IDJlbTtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG4udnd7XHJcbiAgZm9udC1zaXplOiAxLjFlbTtcclxuICBjb2xvcjogcmdiKDI1NSwgMCwgMCk7XHJcbn1cclxucHtcclxuICBwYWRkaW5nOjElIDUlIDAgMSU7XHJcbiAgZm9udC1zaXplOiAyLjJlbTtcclxuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjVlbTtcclxufVxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gIGFuZCAobWluLXdpZHRoOiA2NjhweCkgYW5kIChtYXgtd2lkdGg6IDEyMDBweCl7XHJcblxyXG4gIGgxe1xyXG4gICAgZm9udC1zaXplOiAzLjllbTtcclxuICB9XHJcbiAgaDJ7XHJcbiAgICBmb250LXNpemU6IDEuNmVtO1xyXG4gICAgcGFkZGluZzogMSUgNSUgO1xyXG4gIH1cclxuXHJcbiAgcHsgIFxyXG4gICAgZm9udC1zaXplOiAxLjZlbTtcclxuICAgIHBhZGRpbmc6IDElIDUlIDtcclxuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBidXR0b257XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBib3R0b206IDgwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC04MCUpO1xyXG4gICBcclxuICBcclxuICAgIFxyXG4gICAgYXtcclxuICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gIGFuZCAobWluLXdpZHRoOiA0MDFweCkgYW5kIChtYXgtd2lkdGg6IDY2N3B4KXtcclxuXHJcbiAgaDF7XHJcbiAgICBmb250LXNpemU6IDMuN2VtO1xyXG4gIH1cclxuICBoMntcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICBwYWRkaW5nOiAxJSA1JSA7XHJcbiAgfVxyXG5cclxuICBweyAgXHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgcGFkZGluZzogMSUgNSUgO1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIGJ1dHRvbntcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIGJvdHRvbTogODAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTgwJSk7XHJcbiAgIFxyXG4gIFxyXG4gICAgXHJcbiAgICBhe1xyXG4gICAgICBmb250LXNpemU6IDAuNWVtO1xyXG4gICAgIFxyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG59XHJcblxyXG5cclxuQG1lZGlhIHNjcmVlbiAgYW5kIChtYXgtd2lkdGg6IDQwMHB4KXtcclxuXHJcbmgxe1xyXG4gIGZvbnQtc2l6ZTogMy4yZW07XHJcbn1cclxuaDJ7XHJcbiAgZm9udC1zaXplOiAxLjJlbTtcclxuICBwYWRkaW5nOiAxJSA1JSA7XHJcbn1cclxuXHJcbnB7ICBcclxuICBmb250LXNpemU6IDEuMmVtO1xyXG4gIHBhZGRpbmc6IDElIDUlIDtcclxuICBsaW5lLWhlaWdodDogMzBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuYnV0dG9ue1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICBib3R0b206IDgwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtODAlKTtcclxuIFxyXG5cclxuICBcclxuICBhe1xyXG4gICAgZm9udC1zaXplOiAwLjVlbTtcclxuICAgXHJcbiAgfVxyXG59XHJcbn0iLCIqIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5idXR0b24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDEwJTtcbiAgdG9wOiAxMCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAlKSB0cmFuc2xhdGVZKC0xMCUpO1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZDogIzExMTtcbn1cblxuYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogIzMzMztcbiAgY29sb3I6ICNjY2M7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBib3JkZXI6IDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LWZhbWlseTogXCJSYWxld2F5XCIsIHNhbnMtc2VyaWY7XG4gIHRyYW5zaXRpb246IDAuNnM7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5idXR0b246Zm9jdXMge1xuICBvdXRsaW5lOiAwO1xufVxuYnV0dG9uOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBvcGFjaXR5OiAwLjU7XG4gIGZpbHRlcjogYmx1cigzMHB4KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDBweCkgc2tld1goLTE1ZGVnKTtcbn1cbmJ1dHRvbjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgbGVmdDogMzBweDtcbiAgdG9wOiAwO1xuICBvcGFjaXR5OiAwO1xuICBmaWx0ZXI6IGJsdXIoNXB4KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDBweCkgc2tld1goLTE1ZGVnKTtcbn1cbmJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNlNzE2MTY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbmJ1dHRvbjpob3ZlcjpiZWZvcmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMzAwcHgpIHNrZXdYKC0xNWRlZyk7XG4gIG9wYWNpdHk6IDAuNjtcbiAgdHJhbnNpdGlvbjogMC43cztcbn1cbmJ1dHRvbjpob3ZlcjphZnRlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzMDBweCkgc2tld1goLTE1ZGVnKTtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogMC43cztcbn1cblxuYSB7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBwYWRkaW5nOiAzMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuaDEge1xuICBwYWRkaW5nOiA1JSAwO1xuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xuICBmb250LXNpemU6IDQuNGVtO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBmb250LXNpemU6IDgwMDtcbiAgdGV4dC1zaGFkb3c6IDAgMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuOSk7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG5zcGFuIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLmxvZ28ge1xuICBtaW4td2lkdGg6IDkwJTtcbiAgbWluLWhlaWdodDogOTAlO1xuICBtYXgtd2lkdGg6IDkwJTtcbiAgbWF4LWhlaWdodDogOTAlO1xufVxuXG5oMiB7XG4gIHBhZGRpbmctdG9wOiAxNSU7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLnZ3IHtcbiAgZm9udC1zaXplOiAxLjFlbTtcbiAgY29sb3I6IHJlZDtcbn1cblxucCB7XG4gIHBhZGRpbmc6IDElIDUlIDAgMSU7XG4gIGZvbnQtc2l6ZTogMi4yZW07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbGluZS1oZWlnaHQ6IDEuNWVtO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NjhweCkgYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICBoMSB7XG4gICAgZm9udC1zaXplOiAzLjllbTtcbiAgfVxuXG4gIGgyIHtcbiAgICBmb250LXNpemU6IDEuNmVtO1xuICAgIHBhZGRpbmc6IDElIDUlO1xuICB9XG5cbiAgcCB7XG4gICAgZm9udC1zaXplOiAxLjZlbTtcbiAgICBwYWRkaW5nOiAxJSA1JTtcbiAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICBidXR0b24ge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICBib3R0b206IDgwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtODAlKTtcbiAgfVxuICBidXR0b24gYSB7XG4gICAgZm9udC1zaXplOiAxZW07XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQwMXB4KSBhbmQgKG1heC13aWR0aDogNjY3cHgpIHtcbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogMy43ZW07XG4gIH1cblxuICBoMiB7XG4gICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICBwYWRkaW5nOiAxJSA1JTtcbiAgfVxuXG4gIHAge1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgcGFkZGluZzogMSUgNSU7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgYnV0dG9uIHtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgYm90dG9tOiA4MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTgwJSk7XG4gIH1cbiAgYnV0dG9uIGEge1xuICAgIGZvbnQtc2l6ZTogMC41ZW07XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XG4gIGgxIHtcbiAgICBmb250LXNpemU6IDMuMmVtO1xuICB9XG5cbiAgaDIge1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgcGFkZGluZzogMSUgNSU7XG4gIH1cblxuICBwIHtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIHBhZGRpbmc6IDElIDUlO1xuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIGJ1dHRvbiB7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogNTAlO1xuICAgIGJvdHRvbTogODAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC04MCUpO1xuICB9XG4gIGJ1dHRvbiBhIHtcbiAgICBmb250LXNpemU6IDAuNWVtO1xuICB9XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-about',
          templateUrl: './about.component.html',
          styleUrls: ['./about.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/main/contact-main/contact-main.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/components/main/contact-main/contact-main.component.ts ***!
    \************************************************************************/

  /*! exports provided: ContactMainComponent */

  /***/
  function srcAppComponentsMainContactMainContactMainComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactMainComponent", function () {
      return ContactMainComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ContactMainComponent = /*#__PURE__*/function () {
      function ContactMainComponent() {
        _classCallCheck(this, ContactMainComponent);
      }

      _createClass(ContactMainComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ContactMainComponent;
    }();

    ContactMainComponent.??fac = function ContactMainComponent_Factory(t) {
      return new (t || ContactMainComponent)();
    };

    ContactMainComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: ContactMainComponent,
      selectors: [["app-contact-main"]],
      decls: 24,
      vars: 0,
      consts: [["name", "contact", "method", "POST", "data-netlify", "true"], ["type", "text", "name", "name"], ["type", "email", "name", "email"], ["name", "role[]", "multiple", ""], ["value", "leader"], ["value", "follower"], ["name", "message"], ["type", "submit"]],
      template: function ContactMainComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Your Name: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Your Email: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Your Role: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "select", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "option", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Leader");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "option", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Follower");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Message: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "textarea", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Send");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9jb250YWN0LW1haW4vY29udGFjdC1tYWluLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ContactMainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-contact-main',
          templateUrl: './contact-main.component.html',
          styleUrls: ['./contact-main.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/main/main-products/main-products.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/components/main/main-products/main-products.component.ts ***!
    \**************************************************************************/

  /*! exports provided: MainProductsComponent */

  /***/
  function srcAppComponentsMainMainProductsMainProductsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainProductsComponent", function () {
      return MainProductsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var MainProductsComponent = /*#__PURE__*/function () {
      function MainProductsComponent() {
        _classCallCheck(this, MainProductsComponent);
      }

      _createClass(MainProductsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var left = document.querySelector('.stanga');
          var right = document.querySelector('.dreapta');
          var container = document.querySelector('.cont');
          left.addEventListener('mouseenter', function () {
            return container.classList.add('hover_stanga');
          });
          left.addEventListener('mouseleave', function () {
            return container.classList.remove('hover_stanga');
          });
          right.addEventListener('mouseenter', function () {
            return container.classList.add('hover_dreapta');
          });
          right.addEventListener('mouseleave', function () {
            return container.classList.remove('hover_dreapta');
          });
        }
      }]);

      return MainProductsComponent;
    }();

    MainProductsComponent.??fac = function MainProductsComponent_Factory(t) {
      return new (t || MainProductsComponent)();
    };

    MainProductsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: MainProductsComponent,
      selectors: [["app-main-products"]],
      decls: 52,
      vars: 0,
      consts: [[1, "sec"], [1, "cont"], [1, "split", "stanga"], [1, "site1", "site"], [1, "title"], ["routerLink", "/portofoliu"], [1, "site2", "site"], ["routerLink", "/site-prezentare"], [1, "site4", "site"], ["routerLink", "/aplicatii"], [1, "split", "dreapta", "col-xs-12"], ["routerLink", "/logo"], ["routerLink", "/banner"], [1, "site3", "site"], ["routerLink", "/cards"], ["routerLink", "/flyer"]],
      template: function MainProductsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h1", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "WebDesign");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Portofoliu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "button");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Afla mai multe");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Site de prezentare");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "button");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Afla mai multe");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Aplicatii web");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "button");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Afla mai multe");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "h1", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Grafica");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Logo-steme");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "button");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Afla mai multe");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "Banner");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "button");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "Afla mai multe");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "Carti de vizita");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "button");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "Afla mai multe");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "Flyere/fluturasi");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "button");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, "Afla mai multe");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: ["*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n.sec[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n  height: 100vh;\n  overflow: hidden;\n  margin: 0;\n}\n\n.title[_ngcontent-%COMP%] {\n  color: red;\n  font-weight: 800;\n  letter-spacing: 2px;\n}\n\n.site[_ngcontent-%COMP%] {\n  padding: 30px 0;\n  position: relative;\n  margin-top: 5%;\n}\n\n.site[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  left: 50%;\n  bottom: -90%;\n  transform: translateX(-50%);\n  text-decoration: none;\n  color: black;\n  border: 2px solid white;\n  font-size: 1rem;\n  font-family: \"Roboto\", sans-serif;\n  text-transform: uppercase;\n  font-weight: bold;\n  width: 15rem;\n  padding: 1.2rem;\n  background-color: rgba(255, 255, 255, 0.1);\n}\n\n.site[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: rgba(255, 255, 255, 0.5);\n  letter-spacing: 2px;\n}\n\n.site[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  color: white;\n  position: absolute;\n  left: 50%;\n  top: 10%;\n  transform: translateX(-50%);\n  white-space: nowrap;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: white;\n  position: absolute;\n  left: 50%;\n  top: 30%;\n  transform: translateX(-50%);\n  white-space: nowrap;\n  margin: 0 1%;\n}\n\n.cont[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  background: #333;\n}\n\n.split[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 50%;\n  height: 100%;\n  overflow: hidden;\n}\n\n.split.stanga[_ngcontent-%COMP%] {\n  left: 0;\n  background: url(\"/assets/img/stanga.jpg\");\n  background-repeat: no-repeat;\n  background-size: cover;\n  color: white;\n}\n\n.split.stanga[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(34, 34, 34, 0.5);\n}\n\n.split.dreapta[_ngcontent-%COMP%] {\n  right: 0;\n  background: url(\"/assets/img/dreapta.jpg\");\n  background-repeat: no-repeat;\n  background-size: cover;\n  color: white;\n}\n\n.split.dreapta[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(34, 34, 34, 0.5);\n}\n\n.split.stanga[_ngcontent-%COMP%], .split.dreapta[_ngcontent-%COMP%], .split.stanga[_ngcontent-%COMP%]::before, .split.dreapta[_ngcontent-%COMP%]::before {\n  transition: all 1000ms ease-in-out;\n}\n\n.hover_stanga[_ngcontent-%COMP%]   .stanga[_ngcontent-%COMP%] {\n  width: 75%;\n}\n\n.hover_stanga[_ngcontent-%COMP%]   .dreapta[_ngcontent-%COMP%] {\n  width: 25%;\n}\n\n.hover_dreapta[_ngcontent-%COMP%]   .dreapta[_ngcontent-%COMP%] {\n  width: 75%;\n}\n\n.hover_dreapta[_ngcontent-%COMP%]   .stanga[_ngcontent-%COMP%] {\n  width: 25%;\n}\n\n@media only screen and (min-device-width: 992px) and (max-device-width: 1200px) {\n  .site[_ngcontent-%COMP%] {\n    padding: 10px 0;\n    position: relative;\n    margin-top: 10%;\n    top: 2%;\n    transform: translateY(-2%);\n  }\n  .site[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    position: absolute;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    left: 50%;\n    top: 20%;\n    transform: translateY(-20%);\n    transform: translateX(-50%);\n    font-size: 1.2rem;\n    width: 11rem;\n    padding: 0.9rem;\n    margin-top: 1.3em;\n  }\n  .site[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 0.8em;\n    text-decoration: none;\n  }\n\n  h1[_ngcontent-%COMP%] {\n    font-size: 1.7em;\n    color: white;\n    position: absolute;\n    left: 50%;\n    top: 10%;\n    transform: translateX(-50%);\n    white-space: nowrap;\n    margin-bottom: 1.2em;\n  }\n}\n\n@media only screen and (min-device-width: 1201px) {\n  .site[_ngcontent-%COMP%] {\n    padding: 10px 0;\n    position: relative;\n    margin-top: 9%;\n    top: 2%;\n    transform: translateY(-2%);\n  }\n  .site[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    position: absolute;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    left: 50%;\n    top: 20%;\n    transform: translateY(-20%);\n    transform: translateX(-50%);\n    font-size: 2em;\n    width: 18rem;\n    padding: 1rem;\n    margin: 1.2em 0;\n  }\n  .site[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 0.9em;\n    text-decoration: none;\n  }\n\n  h1[_ngcontent-%COMP%] {\n    font-size: 2em;\n    color: white;\n    position: absolute;\n    left: 50%;\n    top: 10%;\n    transform: translateX(-50%);\n    white-space: nowrap;\n    margin-top: 0.4em;\n  }\n}\n\n@media only screen and (min-device-width: 668px) and (max-device-width: 991px) {\n  .site[_ngcontent-%COMP%] {\n    padding: 10px 0;\n    position: relative;\n    margin-top: 13%;\n    top: 2%;\n    transform: translateY(-2%);\n  }\n  .site[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    position: absolute;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    left: 50%;\n    top: 20%;\n    transform: translateY(-20%);\n    transform: translateX(-50%);\n    font-size: 1.2rem;\n    width: 11rem;\n    padding: 0.9rem;\n    margin-top: 1.3em;\n  }\n  .site[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 0.8em;\n    text-decoration: none;\n  }\n\n  h1[_ngcontent-%COMP%] {\n    font-size: 1.7em;\n    color: white;\n    position: absolute;\n    left: 50%;\n    top: 10%;\n    transform: translateX(-50%);\n    white-space: nowrap;\n    margin-bottom: 1.2em;\n  }\n}\n\n@media only screen and (min-device-width: 482px) and (max-device-width: 667px) {\n  .site[_ngcontent-%COMP%] {\n    padding: 20px 0;\n    position: relative;\n    margin-top: 15%;\n    top: 20%;\n    transform: translateY(-20%);\n  }\n  .site[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    position: absolute;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    left: 50%;\n    top: 10%;\n    transform: translateY(-10%);\n    transform: translateX(-50%);\n    font-size: 1.3rem;\n    width: 10rem;\n    padding: 0.6rem;\n    margin-top: 2em;\n  }\n  .site[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 0.8em;\n  }\n\n  h1[_ngcontent-%COMP%] {\n    font-size: 1.5em;\n    color: white;\n    position: absolute;\n    left: 50%;\n    top: 10%;\n    transform: translateX(-50%);\n    white-space: nowrap;\n    margin-bottom: 1.2em;\n  }\n}\n\n@media only screen and (min-device-width: 301px) and (max-device-width: 481px) and (orientation: portrait) {\n  .site[_ngcontent-%COMP%] {\n    padding: 20px 0;\n    position: relative;\n    margin-top: 15%;\n    top: 20%;\n    transform: translateY(-20%);\n  }\n  .site[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    position: absolute;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    left: 50%;\n    top: 10%;\n    transform: translateY(-10%);\n    transform: translateX(-50%);\n    font-size: 1.1rem;\n    width: 8rem;\n    padding: 0.5rem;\n    margin-top: 2em;\n  }\n  .site[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 0.7em;\n  }\n\n  h1[_ngcontent-%COMP%] {\n    font-size: 1.3em;\n    color: white;\n    position: absolute;\n    left: 50%;\n    top: 10%;\n    transform: translateX(-50%);\n    white-space: nowrap;\n    margin-bottom: 1em;\n  }\n}\n\n@media only screen and (max-width: 300px) {\n  .site[_ngcontent-%COMP%] {\n    padding: 20px 0;\n    position: relative;\n    margin-top: 15%;\n    top: 20%;\n    transform: translateY(-20%);\n  }\n  .site[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    position: absolute;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    left: 50%;\n    top: 10%;\n    transform: translateY(-10%);\n    transform: translateX(-50%);\n    font-size: 1rem;\n    width: 7rem;\n    padding: 0.5rem;\n    margin-top: 2em;\n  }\n  .site[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 0.6em;\n  }\n\n  h1[_ngcontent-%COMP%] {\n    font-size: 1.2em;\n    color: white;\n    position: absolute;\n    left: 50%;\n    top: 10%;\n    transform: translateX(-50%);\n    white-space: nowrap;\n    margin-bottom: 0.4em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluL21haW4tcHJvZHVjdHMvQzpcXFVzZXJzXFxhbmRyZVxcRGVza3RvcFxcUG9ydG9mb2xpdUFuZ3VsYXJcXFBvcnRvZm9saXVBbmRyZWkvc3JjXFxhcHBcXGNvbXBvbmVudHNcXG1haW5cXG1haW4tcHJvZHVjdHNcXG1haW4tcHJvZHVjdHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9tYWluLXByb2R1Y3RzL21haW4tcHJvZHVjdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0FDQ0o7O0FES0E7RUFDSSxpQ0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7QUNGSjs7QURJQTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDREo7O0FER0E7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDQUo7O0FER0k7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsMENBQUE7QUNEUjs7QURHSTtFQUNJLDBDQUFBO0VBQ0EsbUJBQUE7QUNEUjs7QURJSTtFQUNJLFlBQUE7QUNGUjs7QURNQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUNISjs7QURLQTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0ZKOztBRE1BO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDSEo7O0FEUUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNMSjs7QURPQTtFQUNBLE9BQUE7RUFJQSx5Q0FBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FDUEE7O0FEU0E7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVDQXJHUztBQytGYjs7QURRQTtFQUNBLFFBQUE7RUFDQSwwQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFNQSxZQUFBO0FDVkE7O0FEWUE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVDQXZIVTtBQzhHZDs7QURXQTs7OztFQUlJLGtDQUFBO0FDUko7O0FEV0E7RUFDSSxVQWhJVTtBQ3dIZDs7QURXQTtFQUVJLFVBcElXO0FDMkhmOztBRFdBO0VBRUksVUF6SVU7QUNnSWQ7O0FEV0E7RUFFSSxVQTVJVztBQ21JZjs7QURXQTtFQUNJO0lBQ0ksZUFBQTtJQUNBLGtCQUFBO0lBQ0EsZUFBQTtJQUNBLE9BQUE7SUFDQSwwQkFBQTtFQ1JOO0VEV007SUFDSSxrQkFBQTtJQUNBLGFBQUE7SUFDQSxtQkFBQTtJQUNBLHVCQUFBO0lBQ0EsU0FBQTtJQUNBLFFBQUE7SUFDQSwyQkFBQTtJQUNBLDJCQUFBO0lBQ0EsaUJBQUE7SUFDQSxZQUFBO0lBQ0EsZUFBQTtJQUNBLGlCQUFBO0VDVFY7RURhTTtJQUNJLFlBQUE7SUFDQSxnQkFBQTtJQUNBLHFCQUFBO0VDWFY7O0VEZUU7SUFDSSxnQkFBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtJQUNBLFNBQUE7SUFDQSxRQUFBO0lBQ0EsMkJBQUE7SUFDQSxtQkFBQTtJQUNBLG9CQUFBO0VDWk47QUFDRjs7QURlQTtFQUNJO0lBQ0ksZUFBQTtJQUNBLGtCQUFBO0lBQ0EsY0FBQTtJQUNBLE9BQUE7SUFDQSwwQkFBQTtFQ2JOO0VEZ0JNO0lBQ0ksa0JBQUE7SUFDQSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSx1QkFBQTtJQUNBLFNBQUE7SUFDQSxRQUFBO0lBQ0EsMkJBQUE7SUFDQSwyQkFBQTtJQUNBLGNBQUE7SUFDQSxZQUFBO0lBQ0EsYUFBQTtJQUNBLGVBQUE7RUNkVjtFRGtCTTtJQUNJLFlBQUE7SUFDQSxnQkFBQTtJQUNBLHFCQUFBO0VDaEJWOztFRG9CRTtJQUNJLGNBQUE7SUFDQSxZQUFBO0lBQ0Esa0JBQUE7SUFDQSxTQUFBO0lBQ0EsUUFBQTtJQUNBLDJCQUFBO0lBQ0EsbUJBQUE7SUFDQSxpQkFBQTtFQ2pCTjtBQUNGOztBRHFCQTtFQUNJO0lBQ0ksZUFBQTtJQUNBLGtCQUFBO0lBQ0EsZUFBQTtJQUNBLE9BQUE7SUFDQSwwQkFBQTtFQ25CTjtFRHNCTTtJQUNJLGtCQUFBO0lBQ0EsYUFBQTtJQUNBLG1CQUFBO0lBQ0EsdUJBQUE7SUFDQSxTQUFBO0lBQ0EsUUFBQTtJQUNBLDJCQUFBO0lBQ0EsMkJBQUE7SUFDQSxpQkFBQTtJQUNBLFlBQUE7SUFDQSxlQUFBO0lBQ0EsaUJBQUE7RUNwQlY7RUR3Qk07SUFDSSxZQUFBO0lBQ0EsZ0JBQUE7SUFDQSxxQkFBQTtFQ3RCVjs7RUQwQkU7SUFDSSxnQkFBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtJQUNBLFNBQUE7SUFDQSxRQUFBO0lBQ0EsMkJBQUE7SUFDQSxtQkFBQTtJQUNBLG9CQUFBO0VDdkJOO0FBQ0Y7O0FEMEJBO0VBQ0k7SUFDSSxlQUFBO0lBQ0Esa0JBQUE7SUFDQSxlQUFBO0lBQ0EsUUFBQTtJQUNBLDJCQUFBO0VDeEJOO0VEMkJNO0lBQ0ksa0JBQUE7SUFDQSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSx1QkFBQTtJQUNBLFNBQUE7SUFDQSxRQUFBO0lBQ0EsMkJBQUE7SUFDQSwyQkFBQTtJQUNBLGlCQUFBO0lBQ0EsWUFBQTtJQUNBLGVBQUE7SUFDQSxlQUFBO0VDekJWO0VENkJNO0lBQ0ksWUFBQTtJQUNBLGdCQUFBO0VDM0JWOztFRCtCRTtJQUNJLGdCQUFBO0lBQ0EsWUFBQTtJQUNBLGtCQUFBO0lBQ0EsU0FBQTtJQUNBLFFBQUE7SUFDQSwyQkFBQTtJQUNBLG1CQUFBO0lBQ0Esb0JBQUE7RUM1Qk47QUFDRjs7QUQrQkE7RUFDSTtJQUNJLGVBQUE7SUFDQSxrQkFBQTtJQUNBLGVBQUE7SUFDQSxRQUFBO0lBQ0EsMkJBQUE7RUM3Qk47RURnQ007SUFDSSxrQkFBQTtJQUNBLGFBQUE7SUFDQSxtQkFBQTtJQUNBLHVCQUFBO0lBQ0EsU0FBQTtJQUNBLFFBQUE7SUFDQSwyQkFBQTtJQUNBLDJCQUFBO0lBQ0EsaUJBQUE7SUFDQSxXQUFBO0lBQ0EsZUFBQTtJQUNBLGVBQUE7RUM5QlY7RURrQ007SUFDSSxZQUFBO0lBQ0EsZ0JBQUE7RUNoQ1Y7O0VEb0NFO0lBQ0ksZ0JBQUE7SUFDQSxZQUFBO0lBQ0Esa0JBQUE7SUFDQSxTQUFBO0lBQ0EsUUFBQTtJQUNBLDJCQUFBO0lBQ0EsbUJBQUE7SUFDQSxrQkFBQTtFQ2pDTjtBQUNGOztBRG9DQTtFQUNJO0lBQ0ksZUFBQTtJQUNBLGtCQUFBO0lBQ0EsZUFBQTtJQUNBLFFBQUE7SUFDQSwyQkFBQTtFQ2xDTjtFRHFDTTtJQUNJLGtCQUFBO0lBQ0EsYUFBQTtJQUNBLG1CQUFBO0lBQ0EsdUJBQUE7SUFDQSxTQUFBO0lBQ0EsUUFBQTtJQUNBLDJCQUFBO0lBQ0EsMkJBQUE7SUFDQSxlQUFBO0lBQ0EsV0FBQTtJQUNBLGVBQUE7SUFDQSxlQUFBO0VDbkNWO0VEdUNNO0lBQ0ksWUFBQTtJQUNBLGdCQUFBO0VDckNWOztFRHlDRTtJQUNJLGdCQUFBO0lBQ0EsWUFBQTtJQUNBLGtCQUFBO0lBQ0EsU0FBQTtJQUNBLFFBQUE7SUFDQSwyQkFBQTtJQUNBLG1CQUFBO0lBQ0Esb0JBQUE7RUN0Q047QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9tYWluLXByb2R1Y3RzL21haW4tcHJvZHVjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuJGNvbG9yX2xlZnQ6IHJnYigzNCwgMzQsIDM0LC41KTtcclxuJGNvbG9yX3JpZ2h0OiByZ2IoMzQsIDM0LCAzNCwuNSk7XHJcbiRob3Zlcl9zdGFuZ2E6NzUlO1xyXG4kaG92ZXJfZHJlYXB0YToyNSU7XHJcbi5zZWN7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG4udGl0bGV7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbn1cclxuLnNpdGV7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgIFxyXG4gICAgXHJcbiAgICBidXR0b257XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgYm90dG9tOiAtOTAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgY29sb3I6IHJnYigwLCAwLCAwKTtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLHNhbnMtc2VyaWY7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB3aWR0aDogMTVyZW07XHJcbiAgICAgICAgcGFkZGluZzogMS4ycmVtO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1LCAuMSk7XHJcbiAgICB9XHJcbiAgICBidXR0b246aG92ZXJ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUsIC41KTtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgXHJcbiAgICB9XHJcbiAgICBhe1xyXG4gICAgICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICB9XHJcblxyXG59XHJcbmgxe1xyXG4gICAgZm9udC1zaXplOiAzcmVtO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdG9wOiAxMCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcbmgyIHtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdG9wOiAzMCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgbWFyZ2luOiAwIDElO1xyXG59XHJcblxyXG5cclxuLmNvbnR7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6ICMzMzM7XHJcbiBcclxuICAgIFxyXG5cclxufVxyXG4uc3BsaXR7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4uc3BsaXQuc3Rhbmdhe1xyXG5sZWZ0OiAwO1xyXG4vLyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjE3ZGVnLCByZ2JhKDI1NSwwLDAsLjgpLCByZ2JhKDI1NSwgMCwgMCwgMCkgNzAuNzElKSxcclxuLy8gbGluZWFyLWdyYWRpZW50KDEyN2RlZywgcmdiYSgxNzcsIDI5LCAyOSwgMC44KSwgcmdiYSgyNTUsIDAsIDAsIDApIDcwLjcxJSksXHJcbi8vIGxpbmVhci1ncmFkaWVudCgzMzZkZWcsIHJnYmEoMjIsIDMsIDMsIDAuOCksIHJnYmEoMjU1LCAwLCAwLCAwKSA3MC43MSUpOztcclxuYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltZy9zdGFuZ2EuanBnJyk7XHJcbmJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbmJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbmNvbG9yOiB3aGl0ZTtcclxufVxyXG4uc3BsaXQuc3RhbmdhOjpiZWZvcmV7XHJcbiAgICBjb250ZW50OicnIDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yX2xlZnQ7XHJcbn1cclxuLnNwbGl0LmRyZWFwdGF7XHJcbnJpZ2h0OiAwO1xyXG5iYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1nL2RyZWFwdGEuanBnJyk7XHJcbmJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbmJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbi8vIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyMTdkZWcsIHJnYmEoMjU1LDAsMCwuOCksIHJnYmEoMjU1LCAwLCAwLCAwKSA3MC43MSUpLFxyXG4vLyBsaW5lYXItZ3JhZGllbnQoMTI3ZGVnLCByZ2JhKDE3NywgMjksIDI5LCAwLjgpLCByZ2JhKDI1NSwgMCwgMCwgMCkgNzAuNzElKSxcclxuLy8gbGluZWFyLWdyYWRpZW50KDMzNmRlZywgcmdiYSgyMiwgMywgMywgMC44KSwgcmdiYSgyNTUsIDAsIDAsIDApIDcwLjcxJSk7XHJcblxyXG5cclxuY29sb3I6IHdoaXRlO1xyXG59XHJcbi5zcGxpdC5kcmVhcHRhOjpiZWZvcmV7XHJcbiAgICBjb250ZW50OicnIDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yX3JpZ2h0O1xyXG59XHJcbi5zcGxpdC5zdGFuZ2EsIFxyXG4uc3BsaXQuZHJlYXB0YSwgXHJcbi5zcGxpdC5zdGFuZ2E6OmJlZm9yZSxcclxuLnNwbGl0LmRyZWFwdGE6OmJlZm9yZXtcclxuICAgIHRyYW5zaXRpb246IGFsbCAxMDAwbXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5ob3Zlcl9zdGFuZ2EgLnN0YW5nYXtcclxuICAgIHdpZHRoOiAkaG92ZXJfc3RhbmdhO1xyXG4gICAgXHJcbn1cclxuLmhvdmVyX3N0YW5nYSAuZHJlYXB0YXtcclxuICAgXHJcbiAgICB3aWR0aDogJGhvdmVyX2RyZWFwdGE7XHJcbn1cclxuLmhvdmVyX2RyZWFwdGEgLmRyZWFwdGF7XHJcbiAgICBcclxuICAgIHdpZHRoOiAkaG92ZXJfc3RhbmdhO1xyXG59XHJcbi5ob3Zlcl9kcmVhcHRhIC5zdGFuZ2F7XHJcbiAgICBcclxuICAgIHdpZHRoOiAkaG92ZXJfZHJlYXB0YTtcclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiAxMjAwcHgpIHtcclxuICAgIC5zaXRle1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTAlO1xyXG4gICAgICAgIHRvcDogMiU7ICAgICAgICBcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIlICk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgYnV0dG9ue1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgIHRvcDogMjAlO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwJSk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlICk7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgICAgICB3aWR0aDogMTFyZW07XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuOXJlbTtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMS4zZW07XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICBcclxuICAgICAgICBhe1xyXG4gICAgICAgICAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICB9XHJcbiAgICBoMXtcclxuICAgICAgICBmb250LXNpemU6IDEuN2VtO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgIHRvcDogMTAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEuMmVtO1xyXG4gICAgfVxyXG5cclxuICB9XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDEyMDFweCkge1xyXG4gICAgLnNpdGV7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBtYXJnaW4tdG9wOiA5JTtcclxuICAgICAgICB0b3A6IDIlOyAgICAgICAgXHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yJSApO1xyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIGJ1dHRvbntcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICB0b3A6IDIwJTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMCUpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSApO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDJlbTtcclxuICAgICAgICAgICAgd2lkdGg6IDE4cmVtO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICAgICAgICBtYXJnaW46IDEuMmVtIDAgO1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICAgYXtcclxuICAgICAgICAgICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjllbTtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgfVxyXG4gICAgaDF7XHJcbiAgICAgICAgZm9udC1zaXplOiAyZW07XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgdG9wOiAxMCU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLjRlbTtcclxuICAgICAgIFxyXG4gICAgfVxyXG5cclxuICB9XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDY2OHB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDk5MXB4KSB7XHJcbiAgICAuc2l0ZXtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEzJTtcclxuICAgICAgICB0b3A6IDIlOyAgICAgICAgXHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yJSApO1xyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIGJ1dHRvbntcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICB0b3A6IDIwJTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMCUpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSApO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICAgICAgd2lkdGg6IDExcmVtO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwLjlyZW07XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEuM2VtO1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICAgYXtcclxuICAgICAgICAgICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgfVxyXG4gICAgaDF7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjdlbTtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICB0b3A6IDEwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjJlbTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiA0ODJweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA2NjdweCkge1xyXG4gICAgLnNpdGV7XHJcbiAgICAgICAgcGFkZGluZzogMjBweCAwO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNSU7XHJcbiAgICAgICAgdG9wOiAyMCU7ICAgICAgICBcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwJSApO1xyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIGJ1dHRvbntcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICB0b3A6IDEwJTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMCUpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSApO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwcmVtO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwLjZyZW07XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDJlbTtcclxuICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAgIGF7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICB9XHJcbiAgICBoMXtcclxuICAgICAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgIHRvcDogMTAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEuMmVtO1xyXG4gICAgfVxyXG5cclxuICB9XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDMwMXB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDQ4MXB4KSBhbmQgKG9yaWVudGF0aW9uOnBvcnRyYWl0KSB7XHJcbiAgICAuc2l0ZXtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE1JTtcclxuICAgICAgICB0b3A6IDIwJTsgICAgICAgIFxyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAlICk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgYnV0dG9ue1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgIHRvcDogMTAlO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwJSk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlICk7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgICAgICAgICB3aWR0aDogOHJlbTtcclxuICAgICAgICAgICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyZW07XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICBcclxuICAgICAgICBhe1xyXG4gICAgICAgICAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuN2VtO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgfVxyXG4gICAgaDF7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjNlbTtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICB0b3A6IDEwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbiAgICB9XHJcblxyXG4gIH1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMDBweCkge1xyXG4gICAgLnNpdGV7XHJcbiAgICAgICAgcGFkZGluZzogMjBweCAwO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNSU7XHJcbiAgICAgICAgdG9wOiAyMCU7ICAgICAgICBcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwJSApO1xyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIGJ1dHRvbntcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICB0b3A6IDEwJTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMCUpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSApO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgIHdpZHRoOiA3cmVtO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDJlbTtcclxuICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAgIGF7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC42ZW07XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICB9XHJcbiAgICBoMXtcclxuICAgICAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgIHRvcDogMTAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAuNGVtO1xyXG4gICAgfVxyXG59IiwiKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLnNlYyB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW46IDA7XG59XG5cbi50aXRsZSB7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG59XG5cbi5zaXRlIHtcbiAgcGFkZGluZzogMzBweCAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi10b3A6IDUlO1xufVxuLnNpdGUgYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbGVmdDogNTAlO1xuICBib3R0b206IC05MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogYmxhY2s7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgd2lkdGg6IDE1cmVtO1xuICBwYWRkaW5nOiAxLjJyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbn1cbi5zaXRlIGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbn1cbi5zaXRlIGEge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmgxIHtcbiAgZm9udC1zaXplOiAzcmVtO1xuICBjb2xvcjogd2hpdGU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDEwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG5oMiB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBjb2xvcjogd2hpdGU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDMwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBtYXJnaW46IDAgMSU7XG59XG5cbi5jb250IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjMzMzO1xufVxuXG4uc3BsaXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnNwbGl0LnN0YW5nYSB7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvaW1nL3N0YW5nYS5qcGdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnNwbGl0LnN0YW5nYTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM0LCAzNCwgMzQsIDAuNSk7XG59XG5cbi5zcGxpdC5kcmVhcHRhIHtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvaW1nL2RyZWFwdGEuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5zcGxpdC5kcmVhcHRhOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzQsIDM0LCAzNCwgMC41KTtcbn1cblxuLnNwbGl0LnN0YW5nYSxcbi5zcGxpdC5kcmVhcHRhLFxuLnNwbGl0LnN0YW5nYTo6YmVmb3JlLFxuLnNwbGl0LmRyZWFwdGE6OmJlZm9yZSB7XG4gIHRyYW5zaXRpb246IGFsbCAxMDAwbXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5ob3Zlcl9zdGFuZ2EgLnN0YW5nYSB7XG4gIHdpZHRoOiA3NSU7XG59XG5cbi5ob3Zlcl9zdGFuZ2EgLmRyZWFwdGEge1xuICB3aWR0aDogMjUlO1xufVxuXG4uaG92ZXJfZHJlYXB0YSAuZHJlYXB0YSB7XG4gIHdpZHRoOiA3NSU7XG59XG5cbi5ob3Zlcl9kcmVhcHRhIC5zdGFuZ2Ege1xuICB3aWR0aDogMjUlO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiAxMjAwcHgpIHtcbiAgLnNpdGUge1xuICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLXRvcDogMTAlO1xuICAgIHRvcDogMiU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yJSk7XG4gIH1cbiAgLnNpdGUgYnV0dG9uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0b3A6IDIwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwJSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIHdpZHRoOiAxMXJlbTtcbiAgICBwYWRkaW5nOiAwLjlyZW07XG4gICAgbWFyZ2luLXRvcDogMS4zZW07XG4gIH1cbiAgLnNpdGUgYSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG5cbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogMS43ZW07XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdG9wOiAxMCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgbWFyZ2luLWJvdHRvbTogMS4yZW07XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDEyMDFweCkge1xuICAuc2l0ZSB7XG4gICAgcGFkZGluZzogMTBweCAwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tdG9wOiA5JTtcbiAgICB0b3A6IDIlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMiUpO1xuICB9XG4gIC5zaXRlIGJ1dHRvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdG9wOiAyMCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMCUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICBmb250LXNpemU6IDJlbTtcbiAgICB3aWR0aDogMThyZW07XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBtYXJnaW46IDEuMmVtIDA7XG4gIH1cbiAgLnNpdGUgYSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMC45ZW07XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG5cbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRvcDogMTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG1hcmdpbi10b3A6IDAuNGVtO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiA2NjhweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA5OTFweCkge1xuICAuc2l0ZSB7XG4gICAgcGFkZGluZzogMTBweCAwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tdG9wOiAxMyU7XG4gICAgdG9wOiAyJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIlKTtcbiAgfVxuICAuc2l0ZSBidXR0b24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbGVmdDogNTAlO1xuICAgIHRvcDogMjAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAlKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgd2lkdGg6IDExcmVtO1xuICAgIHBhZGRpbmc6IDAuOXJlbTtcbiAgICBtYXJnaW4tdG9wOiAxLjNlbTtcbiAgfVxuICAuc2l0ZSBhIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cblxuICBoMSB7XG4gICAgZm9udC1zaXplOiAxLjdlbTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0b3A6IDEwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjJlbTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogNDgycHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogNjY3cHgpIHtcbiAgLnNpdGUge1xuICAgIHBhZGRpbmc6IDIwcHggMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLXRvcDogMTUlO1xuICAgIHRvcDogMjAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAlKTtcbiAgfVxuICAuc2l0ZSBidXR0b24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbGVmdDogNTAlO1xuICAgIHRvcDogMTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAlKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgd2lkdGg6IDEwcmVtO1xuICAgIHBhZGRpbmc6IDAuNnJlbTtcbiAgICBtYXJnaW4tdG9wOiAyZW07XG4gIH1cbiAgLnNpdGUgYSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gIH1cblxuICBoMSB7XG4gICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0b3A6IDEwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjJlbTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogMzAxcHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogNDgxcHgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gIC5zaXRlIHtcbiAgICBwYWRkaW5nOiAyMHB4IDA7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi10b3A6IDE1JTtcbiAgICB0b3A6IDIwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwJSk7XG4gIH1cbiAgLnNpdGUgYnV0dG9uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0b3A6IDEwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwJSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgIHdpZHRoOiA4cmVtO1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICBtYXJnaW4tdG9wOiAyZW07XG4gIH1cbiAgLnNpdGUgYSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMC43ZW07XG4gIH1cblxuICBoMSB7XG4gICAgZm9udC1zaXplOiAxLjNlbTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0b3A6IDEwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzAwcHgpIHtcbiAgLnNpdGUge1xuICAgIHBhZGRpbmc6IDIwcHggMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLXRvcDogMTUlO1xuICAgIHRvcDogMjAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAlKTtcbiAgfVxuICAuc2l0ZSBidXR0b24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbGVmdDogNTAlO1xuICAgIHRvcDogMTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAlKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIHdpZHRoOiA3cmVtO1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICBtYXJnaW4tdG9wOiAyZW07XG4gIH1cbiAgLnNpdGUgYSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMC42ZW07XG4gIH1cblxuICBoMSB7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0b3A6IDEwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjRlbTtcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](MainProductsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-main-products',
          templateUrl: './main-products.component.html',
          styleUrls: ['./main-products.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/main/main.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/main/main.component.ts ***!
    \***************************************************/

  /*! exports provided: MainComponent */

  /***/
  function srcAppComponentsMainMainComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainComponent", function () {
      return MainComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./about/about.component */
    "./src/app/components/main/about/about.component.ts");
    /* harmony import */


    var _main_products_main_products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./main-products/main-products.component */
    "./src/app/components/main/main-products/main-products.component.ts");
    /* harmony import */


    var _contact_main_contact_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./contact-main/contact-main.component */
    "./src/app/components/main/contact-main/contact-main.component.ts");

    var MainComponent = /*#__PURE__*/function () {
      function MainComponent() {
        _classCallCheck(this, MainComponent);
      }

      _createClass(MainComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var Messenger = function Messenger(el) {
            'use strict';

            var m = this;

            m.init = function () {
              m.codeletters = "&#*+%???@??$";
              m.message = 0;
              m.current_length = 0;
              m.fadeBuffer = false;
              m.messages = ['VISIOONWEBSITES', 'PORTOFOLI', 'SITE DE PREZENTARE', 'MAGAZIN ONLINE', 'APLICATII WEB', 'SABLOANE GRAFICE', 'LOGO - STEME'];
              setTimeout(m.animateIn, 0);
            };

            m.generateRandomString = function (length) {
              var random_text = '';

              while (random_text.length < length) {
                random_text += m.codeletters.charAt(Math.floor(Math.random() * m.codeletters.length));
              }

              return random_text;
            };

            m.animateIn = function () {
              if (m.current_length < m.messages[m.message].length) {
                m.current_length = m.current_length + 2;

                if (m.current_length > m.messages[m.message].length) {
                  m.current_length = m.messages[m.message].length;
                }

                var message = m.generateRandomString(m.current_length);
                jquery__WEBPACK_IMPORTED_MODULE_1__(el).html(message);
                setTimeout(m.animateIn, 20);
              } else {
                setTimeout(m.animateFadeBuffer, 20);
              }
            };

            m.animateFadeBuffer = function () {
              if (m.fadeBuffer === false) {
                m.fadeBuffer = [];

                for (var i = 0; i < m.messages[m.message].length; i++) {
                  m.fadeBuffer.push({
                    c: Math.floor(Math.random() * 12) + 1,
                    l: m.messages[m.message].charAt(i)
                  });
                }
              }

              var do_cycles = false;
              var message = '';

              for (var i = 0; i < m.fadeBuffer.length; i++) {
                var fader = m.fadeBuffer[i];

                if (fader.c > 0) {
                  do_cycles = true;
                  fader.c--;
                  message += m.codeletters.charAt(Math.floor(Math.random() * m.codeletters.length));
                } else {
                  message += fader.l;
                }
              }

              jquery__WEBPACK_IMPORTED_MODULE_1__(el).html(message);

              if (do_cycles === true) {
                setTimeout(m.animateFadeBuffer, 50);
              } else {
                setTimeout(m.cycleText, 2000);
              }
            };

            m.cycleText = function () {
              m.message = m.message + 1;

              if (m.message >= m.messages.length) {
                m.message = 0;
              }

              m.current_length = 0;
              m.fadeBuffer = false;
              jquery__WEBPACK_IMPORTED_MODULE_1__(el).html('');
              setTimeout(m.animateIn, 200);
            };

            m.init();
          };

          console.clear();
          var messenger = new Messenger(jquery__WEBPACK_IMPORTED_MODULE_1__('#messenger'));
        }
      }]);

      return MainComponent;
    }();

    MainComponent.??fac = function MainComponent_Factory(t) {
      return new (t || MainComponent)();
    };

    MainComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: MainComponent,
      selectors: [["app-main"]],
      decls: 8,
      vars: 0,
      consts: [[1, "bk"], ["id", "messenger"], ["id", "despre", 1, "despre"], ["id", "produse", 1, "produse"], ["id", "contact", 1, "contact"]],
      template: function MainComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "section", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "app-about");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "section", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "app-main-products");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "section", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "app-contact-main");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      directives: [_about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"], _main_products_main_products_component__WEBPACK_IMPORTED_MODULE_3__["MainProductsComponent"], _contact_main_contact_main_component__WEBPACK_IMPORTED_MODULE_4__["ContactMainComponent"]],
      styles: ["@import url(\"https://fonts.googleapis.com/css?family=Montserrat:700\");\n*[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n.bk[_ngcontent-%COMP%] {\n  background-image: url(/assets/img/bk1.jpg);\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  background-attachment: fixed;\n  color: #fff;\n  text-align: center;\n  max-width: 100vw;\n  font-weight: 700;\n  overflow: hidden;\n  font-family: \"Montserrat\", sans-serif;\n  min-height: 100vh;\n}\n#messenger[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-family: monospace;\n  font-size: 4em;\n  white-space: nowrap;\n  text-shadow: 0 2px 2px rgba(0, 0, 0, 0.9);\n  color: #fff;\n}\n\n.despre[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background-color: #3b3b3b;\n}\n.contact[_ngcontent-%COMP%] {\n  min-height: auto;\n  background-color: #d32424;\n  color: #fff;\n}\n@media screen and (min-width: 401px) and (max-width: 667px) {\n  #messenger[_ngcontent-%COMP%] {\n    font-size: 2.7em;\n  }\n}\n@media screen and (max-width: 400px) {\n  #messenger[_ngcontent-%COMP%] {\n    font-size: 1.7em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluL0M6XFxVc2Vyc1xcYW5kcmVcXERlc2t0b3BcXFBvcnRvZm9saXVBbmd1bGFyXFxQb3J0b2ZvbGl1QW5kcmVpL3NyY1xcYXBwXFxjb21wb25lbnRzXFxtYWluXFxtYWluLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL21haW4vbWFpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSxxRUFBQTtBQUNSO0VBQ0ksVUFBQTtFQUNBLFNBQUE7RUFDQSxzQkFBQTtBQ0NKO0FERUE7RUFFRywwQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUVBLDRCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUNBQUE7RUFDQSxpQkFBQTtBQ0RIO0FES0E7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHlDQUFBO0VBQ0EsV0FBQTtBQ0ZGO0FEc0NBO2tEQUFBO0FBWUE7RUFDSSxpQkFBQTtFQUNBLHlCQUFBO0FDN0NKO0FEZ0RBO0VBQ0ksZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7QUM3Q0o7QURnREE7RUFFRTtJQUVFLGdCQUFBO0VDL0NGO0FBQ0Y7QURzREE7RUFFRTtJQUVFLGdCQUFBO0VDdERGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21haW4vbWFpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDo3MDAnKTtcclxuKntcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4uYmt7XHJcbiAgIFxyXG4gICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWcvYmsxLmpwZyk7XHJcbiAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAvLyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjc2ZGVnLCByZ2JhKDYyLDYyLDYyLDEpIDAlLCByZ2JhKDgwLDYwLDYwLDEpIDI1JSwgcmdiYSgxMjksNjUsNjUsMSkgNTAlLCByZ2JhKDE4NCwzNiwzNiwxKSA3NSUsIHJnYmEoMjU1LDAsMCwxKSAxMDAlKTtcclxuICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICAgY29sb3I6ICNmZmY7XHJcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgbWF4LXdpZHRoOiAxMDB2dztcclxuICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgIFxyXG4gICAgICBcclxufVxyXG4jbWVzc2VuZ2VyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XHJcbiAgZm9udC1zaXplOiA0ZW07XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB0ZXh0LXNoYWRvdzogMCAycHggMnB4IHJnYmEoIzAwMCwgMC45KTtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLy8gI2ZseS1pbiB7XHJcbi8vICAgICBmb250LXNpemU6IDRlbTtcclxuLy8gICAgIG1hcmdpbjogNDB2aCBhdXRvO1xyXG4vLyAgICAgaGVpZ2h0OiAyMHZoOyBcclxuLy8gICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbi8vICAgfVxyXG5cclxuLy8gI2ZseS1pbiBzcGFuIHtcclxuLy8gICBkaXNwbGF5OiBibG9jaztcclxuLy8gICBmb250LXNpemU6IC40ZW07XHJcbi8vICAgb3BhY2l0eTogLjg7XHJcbi8vICAgbWFyZ2luLXRvcDogMmVtO1xyXG4vLyB9XHJcblxyXG4vLyAjZmx5LWluIGRpdiB7XHJcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxyXG4gICBcclxuLy8gICAgICBtYXJnaW46IDJ2aCAwO1xyXG4vLyAgICAgIG9wYWNpdHk6IDA7XHJcbi8vICAgICAgbGVmdDogMTB2dztcclxuLy8gICAgICB3aWR0aDogODB2dztcclxuLy8gICAgICBhbmltYXRpb246IHN3aXRjaCAyNHMgbGluZWFyIGluZmluaXRlO1xyXG4vLyAgICAgIC5sb2dve1xyXG4vLyAgICAgICAgd2lkdGg6IDUwMHB4O1xyXG4vLyAgICAgICAgaGVpZ2h0OiA0MDBweDtcclxuLy8gICAgICB9XHJcbi8vICAgIH1cclxuXHJcbi8vICNmbHktaW4gZGl2Om50aC1jaGlsZCgyKSB7IGFuaW1hdGlvbi1kZWxheTogNHN9XHJcbi8vICNmbHktaW4gZGl2Om50aC1jaGlsZCgzKSB7IGFuaW1hdGlvbi1kZWxheTogOHN9XHJcbi8vICNmbHktaW4gZGl2Om50aC1jaGlsZCg0KSB7IGFuaW1hdGlvbi1kZWxheTogMTJzfVxyXG4vLyAjZmx5LWluIGRpdjpudGgtY2hpbGQoNSkgeyBhbmltYXRpb24tZGVsYXk6IDE2c31cclxuLy8gI2ZseS1pbiBkaXY6bnRoLWNoaWxkKDYpIHsgYW5pbWF0aW9uLWRlbGF5OiAyMHN9XHJcbi8qICNmbHktaW4gZGl2Om50aC1jaGlsZCg3KSB7IGFuaW1hdGlvbi1kZWxheTogMjRzfVxyXG4jZmx5LWluIGRpdjpudGgtY2hpbGQoOCkgeyBhbmltYXRpb24tZGVsYXk6IDI4c30gKi9cclxuXHJcbi8vIEBrZXlmcmFtZXMgc3dpdGNoIHtcclxuLy8gICAgIDAlIHsgb3BhY2l0eTogMDtmaWx0ZXI6IGJsdXIoMjBweCk7IHRyYW5zZm9ybTpzY2FsZSgxMil9XHJcbi8vICAgICAzJSB7IG9wYWNpdHk6IDE7ZmlsdGVyOiBibHVyKDApOyB0cmFuc2Zvcm06c2NhbGUoMSl9XHJcbi8vICAgICAxMCUgeyBvcGFjaXR5OiAxO2ZpbHRlcjogYmx1cigwKTsgdHJhbnNmb3JtOnNjYWxlKC45KX1cclxuLy8gICAgIDEzJSB7IG9wYWNpdHk6IDA7ZmlsdGVyOiBibHVyKDEwcHgpOyB0cmFuc2Zvcm06c2NhbGUoLjEpfVxyXG4vLyAgICAgODAlIHsgb3BhY2l0eTogMH1cclxuLy8gICAgIDEwMCUgeyBvcGFjaXR5OiAwfVxyXG4vLyB9XHJcbi8vIGFib3V0IHVzIFxyXG4uZGVzcHJle1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTksIDU5LCA1OSk7XHJcbiBcclxufVxyXG4uY29udGFjdHtcclxuICAgIG1pbi1oZWlnaHQ6IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjExLCAzNiwgMzYpO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgIFxyXG59XHJcbkBtZWRpYSBzY3JlZW4gIGFuZCAobWluLXdpZHRoOiA0MDFweCkgYW5kIChtYXgtd2lkdGg6IDY2N3B4KXtcclxuXHJcbiAgI21lc3NlbmdlciB7XHJcbiAgIFxyXG4gICAgZm9udC1zaXplOiAyLjdlbTtcclxuICBcclxuICB9XHJcblxyXG5cclxufVxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gIGFuZCAobWF4LXdpZHRoOiA0MDBweCl7XHJcblxyXG4gICNtZXNzZW5nZXIge1xyXG4gICBcclxuICAgIGZvbnQtc2l6ZTogMS43ZW07XHJcbiAgXHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuIiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDo3MDBcIik7XG4qIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uYmsge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWcvYmsxLmpwZyk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWF4LXdpZHRoOiAxMDB2dztcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cblxuI21lc3NlbmdlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG4gIGZvbnQtc2l6ZTogNGVtO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LXNoYWRvdzogMCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC45KTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi8qICNmbHktaW4gZGl2Om50aC1jaGlsZCg3KSB7IGFuaW1hdGlvbi1kZWxheTogMjRzfVxuI2ZseS1pbiBkaXY6bnRoLWNoaWxkKDgpIHsgYW5pbWF0aW9uLWRlbGF5OiAyOHN9ICovXG4uZGVzcHJlIHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzYjNiM2I7XG59XG5cbi5jb250YWN0IHtcbiAgbWluLWhlaWdodDogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QzMjQyNDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQwMXB4KSBhbmQgKG1heC13aWR0aDogNjY3cHgpIHtcbiAgI21lc3NlbmdlciB7XG4gICAgZm9udC1zaXplOiAyLjdlbTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcbiAgI21lc3NlbmdlciB7XG4gICAgZm9udC1zaXplOiAxLjdlbTtcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-main',
          templateUrl: './main.component.html',
          styleUrls: ['./main.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/navbar/navbar.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/navbar/navbar.component.ts ***!
    \*******************************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppComponentsNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var NavbarComponent = /*#__PURE__*/function () {
      function NavbarComponent() {
        _classCallCheck(this, NavbarComponent);
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var open_btn = document.querySelector('.open-btn');
          var close_btn = document.querySelector('.close-btn');
          var nav = document.querySelectorAll('.nav');
          open_btn.addEventListener('click', function () {
            nav.forEach(function (nav_el) {
              return nav_el.classList.add('visible');
            });
          });
          close_btn.addEventListener('click', function () {
            nav.forEach(function (nav_el) {
              return nav_el.classList.remove('visible');
            });
          });
        }
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.??fac = function NavbarComponent_Factory(t) {
      return new (t || NavbarComponent)();
    };

    NavbarComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: NavbarComponent,
      selectors: [["app-navbar"]],
      decls: 32,
      vars: 0,
      consts: [[1, "nav-btn", "open-btn"], [1, "bi", "bi-list"], ["xmlns", "http://www.w3.org/2000/svg", "width", "30", "height", "30", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-list"], ["fill-rule", "evenodd", "d", "M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"], [1, "nav", "nav-black"], [1, "nav", "active", "nav-red"], [1, "nav", "nav-white"], [1, "nav-btn", "close-btn"], ["src", "/assets/img/VISIOON1.png", "alt", "", 1, "logo"], [1, "list"], ["routerLink", "/"], ["routerLink", "/about"], ["routerLink", "/products"], ["routerLink", "/contact"], ["routerLink", "/terminate"], ["routerLink", "/incurs"]],
      template: function NavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "i", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "path", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Meniu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, " X Inchide ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "ul", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Acasa");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Despre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Produse");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Proiecte terminate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Proiecte in lucru");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n.body[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n}\n\n.logo[_ngcontent-%COMP%] {\n  max-width: 350px;\n  max-height: 300px;\n}\n\n.nav-btn[_ngcontent-%COMP%] {\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n  font-size: 30px;\n  color: aliceblue;\n}\n\n.open-btn[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 30px;\n  left: 30px;\n  z-index: 10;\n}\n\n.nav[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  transform: translateX(-100%);\n  transition: transform 0.3s ease-in-out;\n  z-index: 10;\n}\n\n.nav.visible[_ngcontent-%COMP%] {\n  transform: translateX(0);\n}\n\n.nav-black[_ngcontent-%COMP%] {\n  background-color: #333;\n  width: 60%;\n  max-width: 480px;\n  min-width: 320px;\n  transition-delay: 0.4s;\n}\n\n.nav-black.visible[_ngcontent-%COMP%] {\n  transition-delay: 0s;\n}\n\n.nav-red[_ngcontent-%COMP%] {\n  background-color: #cc0505;\n  width: 95%;\n  transition-delay: 0.2s;\n}\n\n.nav-red.visible[_ngcontent-%COMP%] {\n  transition-delay: 0.2s;\n}\n\n.nav-white[_ngcontent-%COMP%] {\n  background-color: white;\n  width: 95%;\n  padding: 40px;\n  position: relative;\n  transition-delay: 0s;\n}\n\n.nav-white.visible[_ngcontent-%COMP%] {\n  transition-delay: 0.4s;\n}\n\n.close-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 40px;\n  right: 30px;\n  color: black;\n}\n\n.list[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding: 0;\n}\n\n.list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 20px 0;\n}\n\n.list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #000;\n  font-size: 18px;\n  text-decoration: none;\n  text-transform: uppercase;\n}\n\n.list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding-left: 20px;\n}\n\n@media screen and (min-width: 451px) and (max-width: 550px) {\n  .nav-btn[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n\n  .close-btn[_ngcontent-%COMP%] {\n    left: 15px;\n  }\n\n  .nav-black[_ngcontent-%COMP%] {\n    min-width: 90vw;\n  }\n\n  .logo[_ngcontent-%COMP%] {\n    margin-top: 20px;\n    max-width: 250px;\n    max-height: 200px;\n  }\n\n  .list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n\n@media screen and (min-width: 551px) and (max-width: 767px) {\n  .nav-btn[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n\n  .close-btn[_ngcontent-%COMP%] {\n    left: 15px;\n  }\n\n  .logo[_ngcontent-%COMP%] {\n    margin-top: 20px;\n    max-width: 250px;\n    max-height: 200px;\n  }\n\n  .list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n\n@media screen and (min-width: 351px) and (max-width: 450px) {\n  .nav-btn[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n\n  .close-btn[_ngcontent-%COMP%] {\n    left: 15px;\n  }\n\n  .nav-black[_ngcontent-%COMP%] {\n    min-width: 100vw;\n  }\n\n  .logo[_ngcontent-%COMP%] {\n    margin-top: 20px;\n    max-width: 250px;\n    max-height: 200px;\n  }\n\n  .list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n\n@media screen and (min-width: 301px) and (max-width: 350px) {\n  .nav-btn[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n\n  .close-btn[_ngcontent-%COMP%] {\n    left: 19px;\n  }\n\n  .nav-black[_ngcontent-%COMP%] {\n    min-width: 100vw;\n  }\n\n  .logo[_ngcontent-%COMP%] {\n    margin-top: 20px;\n    max-width: 250px;\n    max-height: 200px;\n  }\n\n  .list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n\n@media screen and (min-width: 241px) and (max-width: 300px) {\n  .nav-btn[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n\n  .close-btn[_ngcontent-%COMP%] {\n    left: 15px;\n  }\n\n  .nav-black[_ngcontent-%COMP%] {\n    min-width: 100vw;\n  }\n\n  .logo[_ngcontent-%COMP%] {\n    margin-top: 20px;\n    max-width: 200px;\n    max-height: 150px;\n  }\n\n  .list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n}\n\n@media screen and (max-width: 240px) {\n  .nav-btn[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n\n  .close-btn[_ngcontent-%COMP%] {\n    left: 10px;\n  }\n\n  .nav-black[_ngcontent-%COMP%] {\n    min-width: 100vw;\n  }\n\n  .logo[_ngcontent-%COMP%] {\n    margin-top: 20px;\n    max-width: 150px;\n    max-height: 100px;\n  }\n\n  .list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvQzpcXFVzZXJzXFxhbmRyZVxcRGVza3RvcFxcUG9ydG9mb2xpdUFuZ3VsYXJcXFBvcnRvZm9saXVBbmRyZWkvc3JjXFxhcHBcXGNvbXBvbmVudHNcXG5hdmJhclxcbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDQ0o7O0FEQ0U7RUFDRSxpQ0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0FDRUo7O0FERUU7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FER0U7RUFDRSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDQUo7O0FERUU7RUFDRSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUU7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxhQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQ0FBQTtFQUNBLFdBQUE7QUNDSjs7QURFRTtFQUNFLHdCQUFBO0FDQ0o7O0FERUU7RUFDRSxzQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUNDSjs7QURDRTtFQUNFLG9CQUFBO0FDRUo7O0FEQUU7RUFDRSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtBQ0dKOztBRERFO0VBQ0Usc0JBQUE7QUNJSjs7QURGRTtFQUNFLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FDS0o7O0FESEU7RUFDRSxzQkFBQTtBQ01KOztBREpFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUVBLFlBQUE7QUNNSjs7QURIRTtFQUNFLHFCQUFBO0VBQ0EsVUFBQTtBQ01KOztBREhFO0VBQ0UsY0FBQTtBQ01KOztBREpFO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0FDT0o7O0FETEU7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0FDUUo7O0FETkU7RUFFRTtJQUVFLGVBQUE7RUNPSjs7RURGRTtJQUNFLFVBQUE7RUNLSjs7RURGRTtJQUVFLGVBQUE7RUNJSjs7RURFRTtJQUNFLGdCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxpQkFBQTtFQ0NKOztFREVJO0lBQ0UsZUFBQTtFQ0NOO0FBQ0Y7O0FERUU7RUFFRTtJQUVFLGVBQUE7RUNGSjs7RURPRTtJQUNFLFVBQUE7RUNKSjs7RURlRTtJQUNFLGdCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxpQkFBQTtFQ1pKOztFRGVJO0lBQ0UsZUFBQTtFQ1pOO0FBQ0Y7O0FEZUU7RUFFRTtJQUVFLGVBQUE7RUNmSjs7RURvQkU7SUFDRSxVQUFBO0VDakJKOztFRG9CRTtJQUVFLGdCQUFBO0VDbEJKOztFRHdCRTtJQUNFLGdCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxpQkFBQTtFQ3JCSjs7RUR3Qkk7SUFDRSxlQUFBO0VDckJOO0FBQ0Y7O0FEd0JFO0VBRUU7SUFFRSxlQUFBO0VDeEJKOztFRDZCRTtJQUNFLFVBQUE7RUMxQko7O0VENkJFO0lBRUUsZ0JBQUE7RUMzQko7O0VEaUNFO0lBQ0UsZ0JBQUE7SUFDQSxnQkFBQTtJQUNBLGlCQUFBO0VDOUJKOztFRGlDSTtJQUNFLGVBQUE7RUM5Qk47QUFDRjs7QURnQ0U7RUFFRTtJQUVFLGVBQUE7RUNoQ0o7O0VEcUNFO0lBQ0UsVUFBQTtFQ2xDSjs7RURxQ0U7SUFFRSxnQkFBQTtFQ25DSjs7RUR5Q0U7SUFDRSxnQkFBQTtJQUNBLGdCQUFBO0lBQ0EsaUJBQUE7RUN0Q0o7O0VEeUNJO0lBQ0UsZUFBQTtFQ3RDTjtBQUNGOztBRDBDRTtFQUVFO0lBRUUsZUFBQTtFQzFDSjs7RUQ4Q0U7SUFDRSxVQUFBO0VDM0NKOztFRDZDRTtJQUVFLGdCQUFBO0VDM0NKOztFRDhDRTtJQUNFLGdCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxpQkFBQTtFQzNDSjs7RUQ4Q0k7SUFDRSxlQUFBO0VDM0NOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG4gIC5ib2R5e1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLHNhbnMtc2VyaWY7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgXHJcbiAgfVxyXG4gIFxyXG4gIC5sb2dve1xyXG4gIG1heC13aWR0aDogMzUwcHg7XHJcbiAgbWF4LWhlaWdodDogMzAwcHg7XHJcblxyXG4gIH1cclxuICBcclxuICAubmF2LWJ0bntcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcclxuICB9XHJcbiAgLm9wZW4tYnRue1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAzMHB4O1xyXG4gICAgbGVmdDogMzBweDtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gIH1cclxuICBcclxuICAubmF2e1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICB6LWluZGV4OiAxMDtcclxuICB9XHJcbiAgXHJcbiAgLm5hdi52aXNpYmxle1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gIH1cclxuICBcclxuICAubmF2LWJsYWNre1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBtYXgtd2lkdGg6IDQ4MHB4O1xyXG4gICAgbWluLXdpZHRoOiAzMjBweDtcclxuICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuNHM7XHJcbiAgfVxyXG4gIC5uYXYtYmxhY2sudmlzaWJsZXtcclxuICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzO1xyXG4gIH1cclxuICAubmF2LXJlZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDQsIDUsIDUpO1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMnM7XHJcbiAgfVxyXG4gIC5uYXYtcmVkLnZpc2libGV7XHJcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjJzO1xyXG4gIH1cclxuICAubmF2LXdoaXRle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICAgIHBhZGRpbmc6IDQwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwcztcclxuICB9XHJcbiAgLm5hdi13aGl0ZS52aXNpYmxle1xyXG4gICAgdHJhbnNpdGlvbi1kZWxheTogMC40cztcclxuICB9XHJcbiAgLmNsb3NlLWJ0bntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNDBweDtcclxuICAgIHJpZ2h0OiAzMHB4O1xyXG4gICAgXHJcbiAgICBjb2xvcjogcmdiKDAsIDAsIDApO1xyXG4gIH1cclxuICBcclxuICAubGlzdHtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5saXN0IGxpe1xyXG4gICAgbWFyZ2luOiAyMHB4IDA7XHJcbiAgfVxyXG4gIC5saXN0IGxpIGEge1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIH1cclxuICAubGlzdCB1bCB7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6bm9uZSA7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgfVxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ1MXB4KSBhbmQgKG1heC13aWR0aDogNTUwcHgpIHtcclxuICAgXHJcbiAgICAubmF2LWJ0bntcclxuICAgICAgXHJcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgXHJcbiAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC5jbG9zZS1idG57XHJcbiAgICAgIGxlZnQ6IDE1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLm5hdi1ibGFja3tcclxuICAgIFxyXG4gICAgICBtaW4td2lkdGg6IDkwdnc7XHJcbiBcclxuICAgIH1cclxuICAgXHJcbiAgICBcclxuXHJcbiAgICAubG9nb3tcclxuICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgbWF4LXdpZHRoOiAyNTBweDtcclxuICAgICAgbWF4LWhlaWdodDogMjAwcHg7XHJcbiAgICBcclxuICAgICAgfVxyXG4gICAgICAubGlzdCBsaSBhIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIH1cclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTUxcHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICBcclxuICAgIC5uYXYtYnRue1xyXG4gICAgICBcclxuICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICBcclxuICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLmNsb3NlLWJ0bntcclxuICAgICAgbGVmdDogMTVweDtcclxuICAgIH1cclxuXHJcbiAgICAvLyAubmF2LWJsYWNre1xyXG4gICAgXHJcbiAgICAvLyAgIG1pbi13aWR0aDogNTB2dztcclxuIFxyXG4gICAgLy8gfVxyXG4gICBcclxuICAgIFxyXG5cclxuICAgIC5sb2dve1xyXG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICBtYXgtd2lkdGg6IDI1MHB4O1xyXG4gICAgICBtYXgtaGVpZ2h0OiAyMDBweDtcclxuICAgIFxyXG4gICAgICB9XHJcbiAgICAgIC5saXN0IGxpIGEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgfVxyXG4gIH1cclxuICBcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzNTFweCkgYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XHJcbiAgIFxyXG4gICAgLm5hdi1idG57XHJcbiAgICAgIFxyXG4gICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgIFxyXG4gICAgICBcclxuICAgIH1cclxuXHJcbiAgICAuY2xvc2UtYnRue1xyXG4gICAgICBsZWZ0OiAxNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5uYXYtYmxhY2t7XHJcbiAgICBcclxuICAgICAgbWluLXdpZHRoOiAxMDB2dztcclxuIFxyXG4gICAgfVxyXG4gICBcclxuICAgIFxyXG5cclxuICAgIC5sb2dve1xyXG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICBtYXgtd2lkdGg6IDI1MHB4O1xyXG4gICAgICBtYXgtaGVpZ2h0OiAyMDBweDtcclxuICAgIFxyXG4gICAgICB9XHJcbiAgICAgIC5saXN0IGxpIGEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgfVxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzAxcHgpIGFuZCAobWF4LXdpZHRoOiAzNTBweCkge1xyXG4gICBcclxuICAgIC5uYXYtYnRue1xyXG4gICAgICBcclxuICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICBcclxuICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLmNsb3NlLWJ0bntcclxuICAgICAgbGVmdDogMTlweDtcclxuICAgIH1cclxuXHJcbiAgICAubmF2LWJsYWNre1xyXG4gICAgXHJcbiAgICAgIG1pbi13aWR0aDogMTAwdnc7XHJcbiBcclxuICAgIH1cclxuICAgXHJcbiAgICBcclxuXHJcbiAgICAubG9nb3tcclxuICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgbWF4LXdpZHRoOiAyNTBweDtcclxuICAgICAgbWF4LWhlaWdodDogMjAwcHg7XHJcbiAgICBcclxuICAgICAgfVxyXG4gICAgICAubGlzdCBsaSBhIHtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIH1cclxuICB9XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMjQxcHgpIGFuZCAobWF4LXdpZHRoOiAzMDBweCkge1xyXG4gICBcclxuICAgIC5uYXYtYnRue1xyXG4gICAgICBcclxuICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICBcclxuICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLmNsb3NlLWJ0bntcclxuICAgICAgbGVmdDogMTVweDtcclxuICAgIH1cclxuXHJcbiAgICAubmF2LWJsYWNre1xyXG4gICAgXHJcbiAgICAgIG1pbi13aWR0aDogMTAwdnc7XHJcbiBcclxuICAgIH1cclxuICAgXHJcbiAgICBcclxuXHJcbiAgICAubG9nb3tcclxuICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgbWF4LXdpZHRoOiAyMDBweDtcclxuICAgICAgbWF4LWhlaWdodDogMTUwcHg7XHJcbiAgICBcclxuICAgICAgfVxyXG4gICAgICAubGlzdCBsaSBhIHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIH1cclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjQwcHgpIHtcclxuICAgXHJcbiAgICAubmF2LWJ0bntcclxuICAgICAgXHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgXHJcbiAgICAgIFxyXG4gICAgfVxyXG4gICAgLmNsb3NlLWJ0bntcclxuICAgICAgbGVmdDogMTBweDtcclxuICAgIH1cclxuICAgIC5uYXYtYmxhY2t7XHJcbiAgICBcclxuICAgICAgbWluLXdpZHRoOiAxMDB2dztcclxuIFxyXG4gICAgfVxyXG4gICAgLmxvZ297XHJcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgIG1heC13aWR0aDogMTUwcHg7XHJcbiAgICAgIG1heC1oZWlnaHQ6IDEwMHB4O1xyXG4gICAgXHJcbiAgICAgIH1cclxuICAgICAgLmxpc3QgbGkgYSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICB9XHJcbiAgfSIsIioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG4ubG9nbyB7XG4gIG1heC13aWR0aDogMzUwcHg7XG4gIG1heC1oZWlnaHQ6IDMwMHB4O1xufVxuXG4ubmF2LWJ0biB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogYWxpY2VibHVlO1xufVxuXG4ub3Blbi1idG4ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMzBweDtcbiAgbGVmdDogMzBweDtcbiAgei1pbmRleDogMTA7XG59XG5cbi5uYXYge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIHotaW5kZXg6IDEwO1xufVxuXG4ubmF2LnZpc2libGUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG59XG5cbi5uYXYtYmxhY2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuICB3aWR0aDogNjAlO1xuICBtYXgtd2lkdGg6IDQ4MHB4O1xuICBtaW4td2lkdGg6IDMyMHB4O1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjRzO1xufVxuXG4ubmF2LWJsYWNrLnZpc2libGUge1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwcztcbn1cblxuLm5hdi1yZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2MwNTA1O1xuICB3aWR0aDogOTUlO1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjJzO1xufVxuXG4ubmF2LXJlZC52aXNpYmxlIHtcbiAgdHJhbnNpdGlvbi1kZWxheTogMC4ycztcbn1cblxuLm5hdi13aGl0ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB3aWR0aDogOTUlO1xuICBwYWRkaW5nOiA0MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDBzO1xufVxuXG4ubmF2LXdoaXRlLnZpc2libGUge1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjRzO1xufVxuXG4uY2xvc2UtYnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDQwcHg7XG4gIHJpZ2h0OiAzMHB4O1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5saXN0IHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBwYWRkaW5nOiAwO1xufVxuXG4ubGlzdCBsaSB7XG4gIG1hcmdpbjogMjBweCAwO1xufVxuXG4ubGlzdCBsaSBhIHtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4ubGlzdCB1bCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0NTFweCkgYW5kIChtYXgtd2lkdGg6IDU1MHB4KSB7XG4gIC5uYXYtYnRuIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gIH1cblxuICAuY2xvc2UtYnRuIHtcbiAgICBsZWZ0OiAxNXB4O1xuICB9XG5cbiAgLm5hdi1ibGFjayB7XG4gICAgbWluLXdpZHRoOiA5MHZ3O1xuICB9XG5cbiAgLmxvZ28ge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgbWF4LXdpZHRoOiAyNTBweDtcbiAgICBtYXgtaGVpZ2h0OiAyMDBweDtcbiAgfVxuXG4gIC5saXN0IGxpIGEge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTUxcHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAubmF2LWJ0biB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICB9XG5cbiAgLmNsb3NlLWJ0biB7XG4gICAgbGVmdDogMTVweDtcbiAgfVxuXG4gIC5sb2dvIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIG1heC13aWR0aDogMjUwcHg7XG4gICAgbWF4LWhlaWdodDogMjAwcHg7XG4gIH1cblxuICAubGlzdCBsaSBhIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDM1MXB4KSBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcbiAgLm5hdi1idG4ge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgfVxuXG4gIC5jbG9zZS1idG4ge1xuICAgIGxlZnQ6IDE1cHg7XG4gIH1cblxuICAubmF2LWJsYWNrIHtcbiAgICBtaW4td2lkdGg6IDEwMHZ3O1xuICB9XG5cbiAgLmxvZ28ge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgbWF4LXdpZHRoOiAyNTBweDtcbiAgICBtYXgtaGVpZ2h0OiAyMDBweDtcbiAgfVxuXG4gIC5saXN0IGxpIGEge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzAxcHgpIGFuZCAobWF4LXdpZHRoOiAzNTBweCkge1xuICAubmF2LWJ0biB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICB9XG5cbiAgLmNsb3NlLWJ0biB7XG4gICAgbGVmdDogMTlweDtcbiAgfVxuXG4gIC5uYXYtYmxhY2sge1xuICAgIG1pbi13aWR0aDogMTAwdnc7XG4gIH1cblxuICAubG9nbyB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBtYXgtd2lkdGg6IDI1MHB4O1xuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xuICB9XG5cbiAgLmxpc3QgbGkgYSB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAyNDFweCkgYW5kIChtYXgtd2lkdGg6IDMwMHB4KSB7XG4gIC5uYXYtYnRuIHtcbiAgICBmb250LXNpemU6IDIycHg7XG4gIH1cblxuICAuY2xvc2UtYnRuIHtcbiAgICBsZWZ0OiAxNXB4O1xuICB9XG5cbiAgLm5hdi1ibGFjayB7XG4gICAgbWluLXdpZHRoOiAxMDB2dztcbiAgfVxuXG4gIC5sb2dvIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIG1heC13aWR0aDogMjAwcHg7XG4gICAgbWF4LWhlaWdodDogMTUwcHg7XG4gIH1cblxuICAubGlzdCBsaSBhIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDI0MHB4KSB7XG4gIC5uYXYtYnRuIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cblxuICAuY2xvc2UtYnRuIHtcbiAgICBsZWZ0OiAxMHB4O1xuICB9XG5cbiAgLm5hdi1ibGFjayB7XG4gICAgbWluLXdpZHRoOiAxMDB2dztcbiAgfVxuXG4gIC5sb2dvIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIG1heC13aWR0aDogMTUwcHg7XG4gICAgbWF4LWhlaWdodDogMTAwcHg7XG4gIH1cblxuICAubGlzdCBsaSBhIHtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-navbar',
          templateUrl: './navbar.component.html',
          styleUrls: ['./navbar.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/products/grafica/banner/banner.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/components/products/grafica/banner/banner.component.ts ***!
    \************************************************************************/

  /*! exports provided: BannerComponent */

  /***/
  function srcAppComponentsProductsGraficaBannerBannerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BannerComponent", function () {
      return BannerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var BannerComponent = /*#__PURE__*/function () {
      function BannerComponent() {
        _classCallCheck(this, BannerComponent);
      }

      _createClass(BannerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BannerComponent;
    }();

    BannerComponent.??fac = function BannerComponent_Factory(t) {
      return new (t || BannerComponent)();
    };

    BannerComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: BannerComponent,
      selectors: [["app-banner"]],
      decls: 2,
      vars: 0,
      template: function BannerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "banner works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdHMvZ3JhZmljYS9iYW5uZXIvYmFubmVyLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](BannerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-banner',
          templateUrl: './banner.component.html',
          styleUrls: ['./banner.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/products/grafica/cards/cards.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/components/products/grafica/cards/cards.component.ts ***!
    \**********************************************************************/

  /*! exports provided: CardsComponent */

  /***/
  function srcAppComponentsProductsGraficaCardsCardsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardsComponent", function () {
      return CardsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var CardsComponent = /*#__PURE__*/function () {
      function CardsComponent() {
        _classCallCheck(this, CardsComponent);
      }

      _createClass(CardsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          jquery__WEBPACK_IMPORTED_MODULE_1__('.flip-card').on('click', function () {
            jquery__WEBPACK_IMPORTED_MODULE_1__(this).toggleClass('flipped');
          });
        }
      }]);

      return CardsComponent;
    }();

    CardsComponent.??fac = function CardsComponent_Factory(t) {
      return new (t || CardsComponent)();
    };

    CardsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: CardsComponent,
      selectors: [["app-cards"]],
      decls: 110,
      vars: 0,
      consts: [[1, "body"], [1, "row"], [1, "col-md-6", "col-md-12", "text"], [1, "text-center"], [1, "col-md-6", "col-md-12", "backButton"], ["routerLink", "/products", 1, "text-center"], [1, "produse"], [1, "wrapper"], [1, "card"], ["type", "checkbox", "id", "card1", "aria-hidden", "true", 1, "more"], [1, "content"], [1, "front", 2, "background-image", "url('/assets/img/Cards/fata.png')"], [1, "inner"], ["for", "card1", "aria-hidden", "true", 1, "button"], [1, "back", 2, "background-image", "url('/assets/img/Cards/spate.png')"], ["for", "card1", "aria-hidden", "true", 1, "button", "return"], ["type", "checkbox", "id", "card2", "aria-hidden", "true", 1, "more"], [1, "front", 2, "background-image", "url('/assets/img/Cards/c1-f.jpg')"], ["for", "card2", "aria-hidden", "true", 1, "button"], [1, "back", 2, "background-image", "url('/assets/img/Cards/c1-s.jpg')"], ["for", "card2", "aria-hidden", "true", 1, "button", "return"], ["type", "checkbox", "id", "card4", "aria-hidden", "true", 1, "more"], [1, "front", 2, "background-image", "url('/assets/img/Cards/c3-f.jpg')"], ["for", "card4", "aria-hidden", "true", 1, "button"], [1, "back", 2, "background-image", "url('/assets/img/Cards/c3-s.jpg')"], ["for", "card4", "aria-hidden", "true", 1, "button", "return"], ["type", "checkbox", "id", "card3", "aria-hidden", "true", 1, "more"], [1, "front", 2, "background-image", "url('/assets/img/Cards/c4-f.jpg')"], ["for", "card3", "aria-hidden", "true", 1, "button"], [1, "back", 2, "background-image", "url('/assets/img/Cards/c4-s.jpg')"], ["for", "card3", "aria-hidden", "true", 1, "button", "return"], ["type", "checkbox", "id", "card5", "aria-hidden", "true", 1, "more"], [1, "front", 2, "background-image", "url('/assets/img/Cards/c2-f.jpg')"], ["for", "card5", "aria-hidden", "true", 1, "button"], [1, "back", 2, "background-image", "url('/assets/img/Cards/c2-s.jpg')"], ["for", "card5", "aria-hidden", "true", 1, "button", "return"], ["type", "checkbox", "id", "card6", "aria-hidden", "true", 1, "more"], ["for", "card6", "aria-hidden", "true", 1, "button"], ["for", "card6", "aria-hidden", "true", 1, "button", "return"], ["type", "checkbox", "id", "card7", "aria-hidden", "true", 1, "more"], [1, "front", 2, "background-image", "url('/assets/img/Cards/Camera-1.jpg')"], ["for", "card7", "aria-hidden", "true", 1, "button"], [1, "back", 2, "background-image", "url('/assets/img/Cards/Camera-2.jpg')"], ["for", "card7", "aria-hidden", "true", 1, "button", "return"], ["type", "checkbox", "id", "card8", "aria-hidden", "true", 1, "more"], ["for", "card8", "aria-hidden", "true", 1, "button"], ["for", "card8", "aria-hidden", "true", 1, "button", "return"]],
      template: function CardsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h1", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Carti de Vizita");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Realizam sabloane pentru carti de vizita ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, " Vor fi livrate in format pdf");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "h2", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Pret: 50 de lei");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, " Inapoi la produse");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, " Spate ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, " Fata ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](28, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, " Spate ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, " Fata ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](41, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "label", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, " Spate ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "label", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, " Fata ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](52, "input", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "label", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, " Spate ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "label", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, " Fata ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](65, "input", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "label", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, " Spate ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "label", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, " Fata ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](76, "input", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "label", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81, " Spate ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "label", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](85, " Fata ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](89, "input", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "label", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](94, " Spate ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "label", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](98, " Fata ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](100, "input", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "label", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](105, " Spate ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "label", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](109, " Fata ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      styles: ["*[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\n.body[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  min-width: 100vw;\n  max-height: 100vh;\n  max-width: 100vw;\n  background: radial-gradient(circle, #3e3e3e 0%, black 100%);\n}\n\n.text[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 50%;\n  height: 40%;\n  left: 50%;\n  top: 50%;\n  border-radius: 20px;\n  transform: translate(-50%, -50%);\n}\n\n.text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: red;\n  font-size: 4em;\n  font-weight: 500;\n  letter-spacing: 4px;\n}\n\n.text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 2.5em;\n  font-weight: 500;\n  letter-spacing: 4px;\n  padding: 20px;\n}\n\n.backButton[_ngcontent-%COMP%] {\n  width: 20%;\n  background-color: red;\n  height: 10%;\n  position: absolute;\n  right: 0;\n  top: 50%;\n  border-top-left-radius: 20px;\n  border-bottom-left-radius: 20px;\n  transform: translate(0, -50%);\n}\n\n.backButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 2em;\n  font-weight: 500;\n  letter-spacing: 2px;\n  padding: 10px;\n  position: absolute;\n  right: 0;\n  top: 50%;\n  transform: translate(0, -50%);\n}\n\n.backButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #333;\n  letter-spacing: 4px;\n  font-weight: 800;\n}\n\n.produse[_ngcontent-%COMP%] {\n  background-color: #c00404;\n  background-attachment: fixed;\n  color: #fff;\n  text-align: center;\n  font-weight: 700;\n  overflow: hidden;\n  min-height: auto;\n  min-width: 100vw;\n  max-height: auto;\n  max-width: 100vw;\n}\n\n.wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: center;\n  margin: 0;\n}\n\n.card[_ngcontent-%COMP%] {\n  width: 600px;\n  height: 340px;\n  margin: 2em 2em 0 0;\n  perspective: 1500px;\n  background-color: #c00404;\n}\n\n.card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  transform-style: preserve-3d;\n  transition: transform 0.8s cubic-bezier(0.75, 0, 0.85, 1);\n}\n\n.more[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.more[_ngcontent-%COMP%]:checked    ~ .content[_ngcontent-%COMP%] {\n  transform: rotateY(180deg);\n}\n\n.front[_ngcontent-%COMP%], .back[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  transform-style: preserve-3d;\n  border-radius: 6px;\n}\n\n.front[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%], .back[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%] {\n  height: 100%;\n  display: grid;\n  padding: 1.5em;\n  transform: translateZ(80px) scale(0.94);\n}\n\n.front[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.226);\n  background-size: cover;\n  background-position: center center;\n}\n\n.front[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: block;\n  border-radius: 6px;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  background: linear-gradient(40deg, rgba(255, 255, 255, 0.5), rgba(44, 44, 43, 0.5));\n}\n\n.front[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%] {\n  grid-template-rows: 5fr 1fr 1fr 2fr 1fr;\n  justify-items: center;\n}\n\n.back[_ngcontent-%COMP%] {\n  transform: rotateY(180deg);\n  background-color: rgba(255, 255, 255, 0.226);\n  background-size: cover;\n  background-position: center center;\n  border: 2px solid white;\n}\n\n.back[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%] {\n  grid-template-rows: 1fr 2fr 1fr 2fr 14fr 1fr 1fr;\n  grid-template-columns: repeat(4, auto);\n  grid-column-gap: 0.8em;\n  justify-items: center;\n}\n\n.back[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n  justify-self: center;\n}\n\n.button[_ngcontent-%COMP%] {\n  grid-row: -1;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  font-weight: 600;\n  cursor: pointer;\n  display: block;\n  padding: 0 1.5em;\n  height: 3em;\n  line-height: 2.9em;\n  min-width: 3em;\n  background-color: transparent;\n  border: solid 2px #c00404;\n  color: red;\n  border-radius: 4px;\n  text-align: center;\n  left: 50%;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  transition: 0.3s ease-in-out;\n  text-shadow: 0 0 6px rgba(0, 0, 0, 0.3);\n}\n\n.button[_ngcontent-%COMP%]:hover {\n  background-color: rgba(192, 4, 4, 0.575);\n  box-shadow: 0 0 50px rgba(0, 0, 0, 0.5);\n  text-shadow: none;\n  color: #c00404;\n}\n\n.button.return[_ngcontent-%COMP%] {\n  line-height: 3em;\n  color: #c00404;\n  border-color: #c00404;\n  text-shadow: none;\n}\n\n.button.return[_ngcontent-%COMP%]:hover {\n  background-color: #c00404;\n  color: #fff;\n  box-shadow: none;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 5px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #fb2f2f;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #c00404;\n}\n\n@media screen and (min-width: 150px) and (max-width: 430px) {\n  .text[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 70%;\n    height: 40%;\n    left: 40%;\n    top: 40%;\n    border-radius: 20px;\n    transform: translate(-40%, -40%);\n  }\n  .text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    color: red;\n    font-size: 2em;\n    font-weight: 500;\n    letter-spacing: 4px;\n    padding: 10px 0;\n    line-height: 1em;\n  }\n  .text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 1em;\n    font-weight: 500;\n    letter-spacing: 4px;\n    padding: 20px;\n    line-height: 1.5em;\n  }\n  .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    line-height: 0.8em;\n  }\n\n  .backButton[_ngcontent-%COMP%] {\n    width: 20%;\n    background-color: red;\n    height: 10%;\n    position: absolute;\n    right: 0;\n    top: 10%;\n    border-top-left-radius: 20px;\n    border-bottom-left-radius: 20px;\n    transform: translate(0, -10%);\n  }\n  .backButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 1em;\n    font-weight: 500;\n    letter-spacing: 2px;\n    padding: 10px;\n    position: absolute;\n    right: 0;\n    top: 50%;\n    transform: translate(0, -50%);\n  }\n  .backButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: #333;\n    letter-spacing: 4px;\n    font-weight: 800;\n  }\n}\n\n@media screen and (min-width: 430px) and (max-width: 1200px) {\n  .text[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 70%;\n    height: 40%;\n    left: 40%;\n    top: 40%;\n    border-radius: 20px;\n    transform: translate(-40%, -40%);\n  }\n  .text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    color: red;\n    font-size: 3em;\n    font-weight: 500;\n    letter-spacing: 4px;\n    padding: 10px 0;\n    line-height: 1em;\n  }\n  .text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 2em;\n    font-weight: 500;\n    letter-spacing: 4px;\n    padding: 20px;\n    line-height: 1.5em;\n  }\n  .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    line-height: 0.8em;\n  }\n\n  .backButton[_ngcontent-%COMP%] {\n    width: 20%;\n    background-color: red;\n    height: 10%;\n    position: absolute;\n    right: 0;\n    top: 50%;\n    border-top-left-radius: 20px;\n    border-bottom-left-radius: 20px;\n    transform: translate(0, -50%);\n  }\n  .backButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 1em;\n    font-weight: 500;\n    letter-spacing: 2px;\n    padding: 10px;\n    position: absolute;\n    right: 0;\n    top: 50%;\n    transform: translate(0, -50%);\n  }\n  .backButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: #333;\n    letter-spacing: 4px;\n    font-weight: 800;\n  }\n}\n\n@media screen and (min-width: 1201px) {\n  .text[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 70%;\n    height: 40%;\n    left: 40%;\n    top: 40%;\n    border-radius: 20px;\n    transform: translate(-40%, -40%);\n  }\n  .text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    color: red;\n    font-size: 4em;\n    font-weight: 500;\n    letter-spacing: 4px;\n    padding: 10px 0;\n    line-height: 1.5em;\n  }\n  .text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 3em;\n    font-weight: 500;\n    letter-spacing: 5px;\n    padding: 20px;\n    line-height: 2em;\n  }\n  .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    line-height: 1.2em;\n  }\n\n  .backButton[_ngcontent-%COMP%] {\n    width: 20%;\n    background-color: red;\n    height: 10%;\n    position: absolute;\n    right: 0;\n    top: 50%;\n    border-top-left-radius: 20px;\n    border-bottom-left-radius: 20px;\n    transform: translate(0, -50%);\n  }\n  .backButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 1.2em;\n    font-weight: 500;\n    letter-spacing: 3px;\n    padding: 10px 20px;\n    position: absolute;\n    right: 0;\n    top: 50%;\n    transform: translate(0, -50%);\n  }\n  .backButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: #333;\n    letter-spacing: 4px;\n    font-weight: 800;\n  }\n}\n\n@media screen and (min-width: 468px) and (max-width: 633px) {\n  .card[_ngcontent-%COMP%] {\n    transform: rotate(90deg);\n    padding: 1.8vh 31vh;\n    min-width: 185vw;\n    margin: 60vh 0;\n  }\n}\n\n@media screen and (min-width: 401px) and (max-width: 467px) {\n  .backButton[_ngcontent-%COMP%] {\n    width: 40%;\n    background-color: red;\n    height: 10%;\n    position: absolute;\n    right: 0;\n    top: 10%;\n    border-top-left-radius: 20px;\n    border-bottom-left-radius: 20px;\n    transform: translate(0, -10%);\n  }\n  .backButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 1em;\n    font-weight: 500;\n    letter-spacing: 2px;\n    padding: 10px;\n    position: absolute;\n    right: 0;\n    top: 50%;\n    transform: translate(0, -50%);\n  }\n  .backButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: #333;\n    letter-spacing: 2px;\n    font-weight: 800;\n  }\n\n  .card[_ngcontent-%COMP%] {\n    transform: rotate(90deg);\n    padding: 1.5vh 15vh;\n    min-width: 185vw;\n    margin: 60vh 0;\n  }\n}\n\n@media screen and (min-width: 320px) and (max-width: 400px) {\n  .backButton[_ngcontent-%COMP%] {\n    width: 40%;\n    background-color: red;\n    height: 10%;\n    position: absolute;\n    right: 0;\n    top: 10%;\n    border-top-left-radius: 20px;\n    border-bottom-left-radius: 20px;\n    transform: translate(0, -10%);\n  }\n  .backButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 1em;\n    font-weight: 500;\n    letter-spacing: 2px;\n    padding: 10px;\n    position: absolute;\n    right: 0;\n    top: 50%;\n    transform: translate(0, -50%);\n  }\n  .backButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: #333;\n    letter-spacing: 2px;\n    font-weight: 800;\n  }\n\n  .card[_ngcontent-%COMP%] {\n    transform: rotate(90deg);\n    padding: 2vh 0vh;\n    min-width: 175vw;\n    margin: 30vh;\n  }\n}\n\n@media screen and (min-width: 285px) and (max-width: 319px) {\n  .backButton[_ngcontent-%COMP%] {\n    width: 50%;\n    background-color: red;\n    height: 10%;\n    position: absolute;\n    right: 0;\n    top: 10%;\n    border-top-left-radius: 20px;\n    border-bottom-left-radius: 20px;\n    transform: translate(0, -10%);\n  }\n  .backButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 1em;\n    font-weight: 500;\n    letter-spacing: 2px;\n    padding: 10px;\n    position: absolute;\n    right: 0;\n    top: 50%;\n    transform: translate(0, -50%);\n  }\n  .backButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: #333;\n    letter-spacing: 2px;\n    font-weight: 800;\n  }\n\n  .card[_ngcontent-%COMP%] {\n    transform: rotate(90deg);\n    padding: 5vh 0vh;\n    min-width: 175vw;\n    margin: 30vh;\n  }\n}\n\n@media screen and (min-width: 250px) and (max-width: 284px) {\n  .backButton[_ngcontent-%COMP%] {\n    width: 50%;\n    background-color: red;\n    height: 10%;\n    position: absolute;\n    right: 0;\n    top: 10%;\n    border-top-left-radius: 20px;\n    border-bottom-left-radius: 20px;\n    transform: translate(0, -10%);\n  }\n  .backButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 1em;\n    font-weight: 500;\n    letter-spacing: 2px;\n    padding: 10px;\n    position: absolute;\n    right: 0;\n    top: 50%;\n    transform: translate(0, -50%);\n  }\n  .backButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: #333;\n    letter-spacing: 2px;\n    font-weight: 800;\n  }\n\n  .card[_ngcontent-%COMP%] {\n    transform: rotate(90deg);\n    padding: 8vh 0vh;\n    min-width: 175vw;\n    margin: 30vh;\n  }\n}\n\n@media screen and (min-width: 225px) and (max-width: 249px) {\n  .backButton[_ngcontent-%COMP%] {\n    width: 50%;\n    background-color: red;\n    height: 10%;\n    position: absolute;\n    right: 0;\n    top: 10%;\n    border-top-left-radius: 20px;\n    border-bottom-left-radius: 20px;\n    transform: translate(0, -10%);\n  }\n  .backButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 1em;\n    font-weight: 500;\n    letter-spacing: 2px;\n    padding: 10px;\n    position: absolute;\n    right: 0;\n    top: 50%;\n    transform: translate(0, -50%);\n  }\n  .backButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: #333;\n    letter-spacing: 2px;\n    font-weight: 800;\n  }\n\n  .card[_ngcontent-%COMP%] {\n    transform: rotate(90deg);\n    padding: 12vh 0vh;\n    min-width: 170vw;\n    margin: 30vh;\n  }\n}\n\n@media screen and (max-width: 224px) {\n  .backButton[_ngcontent-%COMP%] {\n    width: 50%;\n    background-color: red;\n    height: 10%;\n    position: absolute;\n    right: 0;\n    top: 10%;\n    border-top-left-radius: 20px;\n    border-bottom-left-radius: 20px;\n    transform: translate(0, -10%);\n  }\n  .backButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 1em;\n    font-weight: 500;\n    letter-spacing: 2px;\n    padding: 10px;\n    position: absolute;\n    right: 0;\n    top: 50%;\n    transform: translate(0, -50%);\n  }\n  .backButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: #333;\n    letter-spacing: 2px;\n    font-weight: 800;\n  }\n\n  .card[_ngcontent-%COMP%] {\n    transform: rotate(90deg);\n    padding: 16vh 0vh;\n    min-width: 170vw;\n    margin: 10vh;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy9ncmFmaWNhL2NhcmRzL0M6XFxVc2Vyc1xcYW5kcmVcXERlc2t0b3BcXFBvcnRvZm9saXVBbmd1bGFyXFxQb3J0b2ZvbGl1QW5kcmVpL3NyY1xcYXBwXFxjb21wb25lbnRzXFxwcm9kdWN0c1xcZ3JhZmljYVxcY2FyZHNcXGNhcmRzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3Byb2R1Y3RzL2dyYWZpY2EvY2FyZHMvY2FyZHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0FDQ0o7O0FER0E7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLDJEQUFBO0FDQUo7O0FER0E7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0FDQUo7O0FERUc7RUFDSyxVQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNBUjs7QURJSTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FDRlI7O0FET0E7RUFDSSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDRCQUFBO0VBQ0EsK0JBQUE7RUFDQSw2QkFBQTtBQ0pKOztBRE1JO0VBQ0ksWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSw2QkFBQTtBQ0pSOztBRE9JO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNMUjs7QURTQTtFQUtJLHlCQXhFVztFQXlFWCw0QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ1ZKOztBRDJCQTtFQUNDLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0csU0FBQTtBQ3hCSjs7QUQyQkE7RUFDQyxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDRyx5QkE5R1c7QUNzRmY7O0FENkJDO0VBQ0Msa0JBQUE7RUFDTSxXQUFBO0VBQ04sWUFBQTtFQUNBLDRCQUFBO0VBQ0EseURBQUE7QUMzQkY7O0FEK0JBO0VBQ0MsYUFBQTtBQzVCRDs7QUQ4QkM7RUFDQywwQkFBQTtBQzVCRjs7QURnQ0E7O0VBRUMsa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7QUM3QkQ7O0FEK0JDOztFQUNDLFlBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLHVDQUFBO0FDNUJGOztBRGdDQTtFQUNDLDRDQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQ0FBQTtBQzdCRDs7QUQ4QkM7RUFDQyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLG1GQUFBO0FDNUJGOztBRGtDQztFQUNDLHVDQUFBO0VBQ0EscUJBQUE7QUNoQ0Y7O0FEd0NBO0VBQ0MsMEJBQUE7RUFDRyw0Q0FBQTtFQUNILHNCQUFBO0VBQ0Esa0NBQUE7RUFDQSx1QkFBQTtBQ3JDRDs7QURzQ0M7RUFDQyxnREFBQTtFQUNBLHNDQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtBQ3BDRjs7QUR3Q0M7RUFDQyxpQkFBQTtFQUNBLG9CQUFBO0FDdENGOztBRDBDQTtFQUNDLFlBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSx1Q0FBQTtBQ3ZDRDs7QUR5Q0M7RUFDQyx3Q0FBQTtFQUNBLHVDQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQWxPYTtBQzJMZjs7QUQwQ0M7RUFDQyxnQkFBQTtFQUNBLGNBdk9hO0VBd09iLHFCQXhPYTtFQXlPYixpQkFBQTtBQ3hDRjs7QUR5Q0U7RUFDQyx5QkEzT1k7RUE0T1osV0FBQTtFQUNBLGdCQUFBO0FDdkNIOztBRDRDQTtFQUNDLFVBQUE7QUN6Q0Q7O0FEMkNBO0VBQ0MsbUJBQUE7QUN4Q0Q7O0FEMENBO0VBQ0MsbUJBQUE7QUN2Q0Q7O0FEeUNBO0VBQ0MsbUJBNVBjO0FDc05mOztBRHlDQTtFQUVJO0lBQ0ksa0JBQUE7SUFDQSxVQUFBO0lBQ0EsV0FBQTtJQUNBLFNBQUE7SUFDQSxRQUFBO0lBQ0EsbUJBQUE7SUFDQSxnQ0FBQTtFQ3ZDTjtFRDBDSztJQUNLLFVBQUE7SUFDQSxjQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtJQUNBLGVBQUE7SUFDQSxnQkFBQTtFQ3hDVjtFRDRDTTtJQUNJLFlBQUE7SUFDQSxjQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtJQUNBLGFBQUE7SUFDQSxrQkFBQTtFQzFDVjtFRDhDTztJQUNHLGtCQUFBO0VDNUNWOztFRCtDRTtJQUNJLFVBQUE7SUFDQSxxQkFBQTtJQUNBLFdBQUE7SUFDQSxrQkFBQTtJQUNBLFFBQUE7SUFDQSxRQUFBO0lBQ0EsNEJBQUE7SUFDQSwrQkFBQTtJQUNBLDZCQUFBO0VDNUNOO0VEOENNO0lBQ0ksWUFBQTtJQUNBLGNBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0EsYUFBQTtJQUNBLGtCQUFBO0lBQ0EsUUFBQTtJQUNBLFFBQUE7SUFDQSw2QkFBQTtFQzVDVjtFRCtDTTtJQUNJLFdBQUE7SUFDQSxtQkFBQTtJQUNBLGdCQUFBO0VDN0NWO0FBQ0Y7O0FEaURBO0VBUUk7SUFDSSxrQkFBQTtJQUNBLFVBQUE7SUFDQSxXQUFBO0lBQ0EsU0FBQTtJQUNBLFFBQUE7SUFDQSxtQkFBQTtJQUNBLGdDQUFBO0VDdEROO0VEeURLO0lBQ0ssVUFBQTtJQUNBLGNBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0EsZUFBQTtJQUNBLGdCQUFBO0VDdkRWO0VEMkRNO0lBQ0ksWUFBQTtJQUNBLGNBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0EsYUFBQTtJQUNBLGtCQUFBO0VDekRWO0VENkRPO0lBQ0csa0JBQUE7RUMzRFY7O0VEOERFO0lBQ0ksVUFBQTtJQUNBLHFCQUFBO0lBQ0EsV0FBQTtJQUNBLGtCQUFBO0lBQ0EsUUFBQTtJQUNBLFFBQUE7SUFDQSw0QkFBQTtJQUNBLCtCQUFBO0lBQ0EsNkJBQUE7RUMzRE47RUQ2RE07SUFDSSxZQUFBO0lBQ0EsY0FBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSxhQUFBO0lBQ0Esa0JBQUE7SUFDQSxRQUFBO0lBQ0EsUUFBQTtJQUNBLDZCQUFBO0VDM0RWO0VEOERNO0lBQ0ksV0FBQTtJQUNBLG1CQUFBO0lBQ0EsZ0JBQUE7RUM1RFY7QUFDRjs7QUQ4REE7RUFDSTtJQUNJLGtCQUFBO0lBQ0EsVUFBQTtJQUNBLFdBQUE7SUFDQSxTQUFBO0lBQ0EsUUFBQTtJQUNBLG1CQUFBO0lBQ0EsZ0NBQUE7RUM1RE47RUQrREs7SUFDSyxVQUFBO0lBQ0EsY0FBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSxlQUFBO0lBQ0Esa0JBQUE7RUM3RFY7RURpRU07SUFDSSxZQUFBO0lBQ0EsY0FBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSxhQUFBO0lBQ0EsZ0JBQUE7RUMvRFY7RURtRU87SUFDRyxrQkFBQTtFQ2pFVjs7RURvRUU7SUFDSSxVQUFBO0lBQ0EscUJBQUE7SUFDQSxXQUFBO0lBQ0Esa0JBQUE7SUFDQSxRQUFBO0lBQ0EsUUFBQTtJQUNBLDRCQUFBO0lBQ0EsK0JBQUE7SUFDQSw2QkFBQTtFQ2pFTjtFRG1FTTtJQUNJLFlBQUE7SUFDQSxnQkFBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSxrQkFBQTtJQUNBLGtCQUFBO0lBQ0EsUUFBQTtJQUNBLFFBQUE7SUFDQSw2QkFBQTtFQ2pFVjtFRG9FTTtJQUNJLFdBQUE7SUFDQSxtQkFBQTtJQUNBLGdCQUFBO0VDbEVWO0FBQ0Y7O0FEcUVBO0VBQ0k7SUFLSSx3QkFBQTtJQUNBLG1CQUFBO0lBQ0EsZ0JBQUE7SUFDQSxjQUFBO0VDbkVOO0FBQ0Y7O0FEcUVBO0VBQ0k7SUFDSSxVQUFBO0lBQ0EscUJBQUE7SUFDQSxXQUFBO0lBQ0Esa0JBQUE7SUFDQSxRQUFBO0lBQ0EsUUFBQTtJQUNBLDRCQUFBO0lBQ0EsK0JBQUE7SUFDQSw2QkFBQTtFQ25FTjtFRHFFTTtJQUNJLFlBQUE7SUFDQSxjQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtJQUNBLGFBQUE7SUFDQSxrQkFBQTtJQUNBLFFBQUE7SUFDQSxRQUFBO0lBQ0EsNkJBQUE7RUNuRVY7RURzRU07SUFDSSxXQUFBO0lBQ0EsbUJBQUE7SUFDQSxnQkFBQTtFQ3BFVjs7RUR1RUU7SUFLSSx3QkFBQTtJQUNBLG1CQUFBO0lBQ0EsZ0JBQUE7SUFDQSxjQUFBO0VDcEVOO0FBQ0Y7O0FEdUVBO0VBQ0k7SUFDSSxVQUFBO0lBQ0EscUJBQUE7SUFDQSxXQUFBO0lBQ0Esa0JBQUE7SUFDQSxRQUFBO0lBQ0EsUUFBQTtJQUNBLDRCQUFBO0lBQ0EsK0JBQUE7SUFDQSw2QkFBQTtFQ3JFTjtFRHVFTTtJQUNJLFlBQUE7SUFDQSxjQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtJQUNBLGFBQUE7SUFDQSxrQkFBQTtJQUNBLFFBQUE7SUFDQSxRQUFBO0lBQ0EsNkJBQUE7RUNyRVY7RUR3RU07SUFDSSxXQUFBO0lBQ0EsbUJBQUE7SUFDQSxnQkFBQTtFQ3RFVjs7RUR5RUU7SUFLSSx3QkFBQTtJQUNBLGdCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxZQUFBO0VDdEVOO0FBQ0Y7O0FENEVFO0VBQ0U7SUFDSSxVQUFBO0lBQ0EscUJBQUE7SUFDQSxXQUFBO0lBQ0Esa0JBQUE7SUFDQSxRQUFBO0lBQ0EsUUFBQTtJQUNBLDRCQUFBO0lBQ0EsK0JBQUE7SUFDQSw2QkFBQTtFQzFFTjtFRDRFTTtJQUNJLFlBQUE7SUFDQSxjQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtJQUNBLGFBQUE7SUFDQSxrQkFBQTtJQUNBLFFBQUE7SUFDQSxRQUFBO0lBQ0EsNkJBQUE7RUMxRVY7RUQ2RU07SUFDSSxXQUFBO0lBQ0EsbUJBQUE7SUFDQSxnQkFBQTtFQzNFVjs7RUQ4RUU7SUFLSSx3QkFBQTtJQUNBLGdCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxZQUFBO0VDM0VOO0FBQ0Y7O0FENkVFO0VBQ0U7SUFDSSxVQUFBO0lBQ0EscUJBQUE7SUFDQSxXQUFBO0lBQ0Esa0JBQUE7SUFDQSxRQUFBO0lBQ0EsUUFBQTtJQUNBLDRCQUFBO0lBQ0EsK0JBQUE7SUFDQSw2QkFBQTtFQzNFTjtFRDZFTTtJQUNJLFlBQUE7SUFDQSxjQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtJQUNBLGFBQUE7SUFDQSxrQkFBQTtJQUNBLFFBQUE7SUFDQSxRQUFBO0lBQ0EsNkJBQUE7RUMzRVY7RUQ4RU07SUFDSSxXQUFBO0lBQ0EsbUJBQUE7SUFDQSxnQkFBQTtFQzVFVjs7RURnRkU7SUFLSSx3QkFBQTtJQUNBLGdCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxZQUFBO0VDN0VOO0FBQ0Y7O0FEZ0ZFO0VBQ0U7SUFDSSxVQUFBO0lBQ0EscUJBQUE7SUFDQSxXQUFBO0lBQ0Esa0JBQUE7SUFDQSxRQUFBO0lBQ0EsUUFBQTtJQUNBLDRCQUFBO0lBQ0EsK0JBQUE7SUFDQSw2QkFBQTtFQzlFTjtFRGdGTTtJQUNJLFlBQUE7SUFDQSxjQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtJQUNBLGFBQUE7SUFDQSxrQkFBQTtJQUNBLFFBQUE7SUFDQSxRQUFBO0lBQ0EsNkJBQUE7RUM5RVY7RURpRk07SUFDSSxXQUFBO0lBQ0EsbUJBQUE7SUFDQSxnQkFBQTtFQy9FVjs7RURtRkU7SUFLSSx3QkFBQTtJQUNBLGlCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxZQUFBO0VDaEZOO0FBQ0Y7O0FEa0ZFO0VBQ0U7SUFDSSxVQUFBO0lBQ0EscUJBQUE7SUFDQSxXQUFBO0lBQ0Esa0JBQUE7SUFDQSxRQUFBO0lBQ0EsUUFBQTtJQUNBLDRCQUFBO0lBQ0EsK0JBQUE7SUFDQSw2QkFBQTtFQ2hGTjtFRGtGTTtJQUNJLFlBQUE7SUFDQSxjQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtJQUNBLGFBQUE7SUFDQSxrQkFBQTtJQUNBLFFBQUE7SUFDQSxRQUFBO0lBQ0EsNkJBQUE7RUNoRlY7RURtRk07SUFDSSxXQUFBO0lBQ0EsbUJBQUE7SUFDQSxnQkFBQTtFQ2pGVjs7RURxRkU7SUFLSSx3QkFBQTtJQUNBLGlCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxZQUFBO0VDbEZOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Byb2R1Y3RzL2dyYWZpY2EvY2FyZHMvY2FyZHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuJGFjY2VudC1jb2xvcjogcmdiYSgxOTIsIDQsIDQsICk7XHJcblxyXG4uYm9keXtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgbWluLXdpZHRoOiAxMDB2dztcclxuICAgIG1heC1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgbWF4LXdpZHRoOiAxMDB2dztcclxuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHJnYmEoNjIsNjIsNjIsMSkgMCUsIHJnYmEoMCwwLDAsMSkgMTAwJSk7XHJcblxyXG59XHJcbi50ZXh0e1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgaGVpZ2h0OiA0MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSggLTUwJSwgLTUwJSApO1xyXG5cclxuICAgaDF7XHJcbiAgICAgICAgY29sb3I6IHJnYigyNTUsIDAsIDApO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNGVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDRweDsgXHJcbiAgIH1cclxuICAgIFxyXG5cclxuICAgIGgyLHB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMi41ZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgXHJcblxyXG4gICAgfVxyXG59XHJcbi5iYWNrQnV0dG9ue1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgIGhlaWdodDogMTAlO1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSggMCwgLTUwJSApO1xyXG4gIFxyXG4gICAgYXtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZm9udC1zaXplOiAyZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSApO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgYTpob3ZlcntcclxuICAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5wcm9kdXNle1xyXG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1nL2JrQ2FyZDEuanBnKTtcclxuICAgIC8vIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgLy8gYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgbWluLWhlaWdodDogYXV0bztcclxuICAgIG1pbi13aWR0aDogMTAwdnc7XHJcbiAgICBtYXgtaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWF4LXdpZHRoOiAxMDB2dztcclxuICAgIFxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuLy8gYm9keSB7XHJcbi8vIFx0bWFyZ2luOiAwO1xyXG4vLyBcdGRpc3BsYXk6IGZsZXg7XHJcbi8vIFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuLy8gXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG4vLyBcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4vLyBcdGhlaWdodDogMTAwdmg7XHJcbi8vIFx0Zm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuLy8gfVxyXG4ud3JhcHBlciB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWZsb3c6IHJvdyB3cmFwO1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luOjBcclxufVxyXG5cclxuLmNhcmQge1xyXG5cdHdpZHRoOiA2MDBweDtcclxuXHRoZWlnaHQ6IDM0MHB4O1xyXG5cdG1hcmdpbjoyZW0gMmVtIDAgMDsgXHJcblx0cGVyc3BlY3RpdmU6IDE1MDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6JGFjY2VudC1jb2xvcjtcclxuICAgIC8vIGltZ3tcclxuICAgIC8vICAgICB3aWR0aDogMTAwJTtcclxuICAgIC8vICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAvLyB9XHJcblx0LmNvbnRlbnQge1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0dHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuXHRcdHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjhzIGN1YmljLWJlemllcigwLjc1LCAwLCAwLjg1LCAxKTtcclxuXHR9XHJcbn1cclxuXHJcbi5tb3JlIHtcclxuXHRkaXNwbGF5OiBub25lO1xyXG5cclxuXHQmOmNoZWNrZWQgfiAuY29udGVudCB7XHJcblx0XHR0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcclxuXHR9XHJcbn1cclxuXHJcbi5mcm9udCxcclxuLmJhY2sge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IDA7XHJcblx0bGVmdDogMDtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcblx0YmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG5cdHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcblx0Ym9yZGVyLXJhZGl1czogNnB4O1xyXG5cclxuXHQuaW5uZXIge1xyXG5cdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0ZGlzcGxheTogZ3JpZDtcclxuXHRcdHBhZGRpbmc6IDEuNWVtO1xyXG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVaKDgwcHgpIHNjYWxlKDAuOTQpO1xyXG5cdH1cclxufVxyXG5cclxuLmZyb250IHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjI2KTtcclxuXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5cdGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcblx0JjphZnRlciB7XHJcblx0XHRjb250ZW50OiAnJztcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHRvcDogMDtcclxuXHRcdGxlZnQ6IDA7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGhlaWdodDogMTAwJTtcclxuXHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNnB4O1xyXG5cdFx0YmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG5cdFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG5cdFx0XHQ0MGRlZyxcclxuXHRcdFx0cmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLFxyXG5cdFx0XHRyZ2JhKDQ0LCA0NCwgNDMsIDAuNSlcclxuXHRcdCk7XHJcblx0fVxyXG5cdC5pbm5lciB7XHJcblx0XHRncmlkLXRlbXBsYXRlLXJvd3M6IDVmciAxZnIgMWZyIDJmciAxZnI7XHJcblx0XHRqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cclxufVxyXG5cclxuLmJhY2sge1xyXG5cdHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIyNik7XHJcblx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG5cdGJvcmRlcjogMnB4IHNvbGlkIHJnYigyNTUsIDI1NSwgMjU1KTtcclxuXHQuaW5uZXIge1xyXG5cdFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMmZyIDFmciAyZnIgMTRmciAxZnIgMWZyO1xyXG5cdFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgYXV0byk7XHJcblx0XHRncmlkLWNvbHVtbi1nYXA6IDAuOGVtO1xyXG5cdFx0anVzdGlmeS1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0XHJcblx0LmJ1dHRvbiB7XHJcblx0XHRncmlkLWNvbHVtbjogMS8tMTtcclxuXHRcdGp1c3RpZnktc2VsZjogY2VudGVyO1xyXG5cdH1cclxufVxyXG5cclxuLmJ1dHRvbiB7XHJcblx0Z3JpZC1yb3c6IC0xO1xyXG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblx0bGV0dGVyLXNwYWNpbmc6IDFweDtcclxuXHRmb250LXdlaWdodDogNjAwO1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRwYWRkaW5nOiAwIDEuNWVtO1xyXG5cdGhlaWdodDogM2VtO1xyXG5cdGxpbmUtaGVpZ2h0OiAyLjllbTtcclxuXHRtaW4td2lkdGg6IDNlbTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuXHRib3JkZXI6IHNvbGlkIDJweCAkYWNjZW50LWNvbG9yO1xyXG5cdGNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcclxuXHRib3JkZXItcmFkaXVzOiA0cHg7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdGxlZnQ6IDUwJTtcclxuXHRiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcblx0dHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcclxuXHR0ZXh0LXNoYWRvdzogMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcblxyXG5cdCY6aG92ZXIge1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgxOTIsIDQsIDQsIDAuNTc1KTtcclxuXHRcdGJveC1zaGFkb3c6IDAgMCA1MHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuXHRcdHRleHQtc2hhZG93OiBub25lO1xyXG5cdFx0Y29sb3I6ICRhY2NlbnQtY29sb3I7XHJcblx0fVxyXG5cclxuXHQmLnJldHVybiB7XHJcblx0XHRsaW5lLWhlaWdodDogM2VtO1xyXG5cdFx0Y29sb3I6ICRhY2NlbnQtY29sb3I7XHJcblx0XHRib3JkZXItY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcblx0XHR0ZXh0LXNoYWRvdzogbm9uZTtcclxuXHRcdCY6aG92ZXIge1xyXG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG5cdFx0XHRjb2xvcjogI2ZmZjtcclxuXHRcdFx0Ym94LXNoYWRvdzogbm9uZTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG5cdHdpZHRoOiA1cHg7XHJcbn1cclxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcblx0YmFja2dyb3VuZDogI2YxZjFmMTtcclxufVxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuXHRiYWNrZ3JvdW5kOiBsaWdodGVuKCRhY2NlbnQtY29sb3IsIDIwJSk7XHJcbn1cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XHJcblx0YmFja2dyb3VuZDogJGFjY2VudC1jb2xvcjtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTUwcHgpIGFuZCAobWF4LXdpZHRoOiA0MzBweCkge1xyXG5cclxuICAgIC50ZXh0e1xyXG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgICAgaGVpZ2h0OiA0MCU7XHJcbiAgICAgICAgbGVmdDogNDAlO1xyXG4gICAgICAgIHRvcDogNDAlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoIC00MCUsIC00MCUgKTtcclxuICAgICAgICBcclxuICAgIFxyXG4gICAgICAgaDF7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiA0cHg7IFxyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxZW07XHJcbiAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICBcclxuICAgICAgICBoMixwe1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS41ZW07XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgICBwe1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMC44ZW07XHJcbiAgICAgICAgIH1cclxuICAgIH1cclxuICAgIC5iYWNrQnV0dG9ue1xyXG4gICAgICAgIHdpZHRoOiAyMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgICAgIGhlaWdodDogMTAlO1xyXG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIHRvcDogMTAlO1xyXG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSggMCwgLTEwJSApO1xyXG4gICAgICBcclxuICAgICAgICBhe1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlICk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBhOmhvdmVye1xyXG4gICAgICAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgICB9XHJcbn19XHJcblxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDMwcHgpIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuXHQvLyAuY2FyZHtcclxuXHQvLyBcdG1heC13aWR0aDogOTB2dztcclxuXHRcdFxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICBcclxuXHQvLyB9XHJcbiAgICAudGV4dHtcclxuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgICAgIGhlaWdodDogNDAlO1xyXG4gICAgICAgIGxlZnQ6IDQwJTtcclxuICAgICAgICB0b3A6IDQwJTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKCAtNDAlLCAtNDAlICk7XHJcbiAgICAgICAgXHJcbiAgICBcclxuICAgICAgIGgxe1xyXG4gICAgICAgICAgICBjb2xvcjogcmdiKDI1NSwgMCwgMCk7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogM2VtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogNHB4OyBcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMWVtO1xyXG4gICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgXHJcbiAgICAgICAgaDIscHtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDJlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xyXG4gICAgICAgICAgICAgICBcclxuICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAgcHtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDAuOGVtO1xyXG4gICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuYmFja0J1dHRvbntcclxuICAgICAgICB3aWR0aDogMjAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgICAgICBoZWlnaHQ6IDEwJTtcclxuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoIDAsIC01MCUgKTtcclxuICAgICAgXHJcbiAgICAgICAgYXtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSApO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgYTpob3ZlcntcclxuICAgICAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgfVxyXG59fVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAxcHgpIHtcclxuICAgIC50ZXh0e1xyXG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgICAgaGVpZ2h0OiA0MCU7XHJcbiAgICAgICAgbGVmdDogNDAlO1xyXG4gICAgICAgIHRvcDogNDAlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoIC00MCUsIC00MCUgKTtcclxuICAgICAgICBcclxuICAgIFxyXG4gICAgICAgaDF7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA0ZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiA0cHg7IFxyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcclxuICAgICAgIH1cclxuICAgICAgICBcclxuICAgIFxyXG4gICAgICAgIGgyLHB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiA1cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyZW07XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgICBwe1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS4yZW07XHJcbiAgICAgICAgIH1cclxuICAgIH1cclxuICAgIC5iYWNrQnV0dG9ue1xyXG4gICAgICAgIHdpZHRoOiAyMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgICAgIGhlaWdodDogMTAlO1xyXG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSggMCwgLTUwJSApO1xyXG4gICAgICBcclxuICAgICAgICBhe1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSApO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgYTpob3ZlcntcclxuICAgICAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgfVxyXG59fVxyXG5cclxuQG1lZGlhIHNjcmVlbiAgYW5kIChtaW4td2lkdGg6IDQ2OHB4KSBhbmQgKG1heC13aWR0aDogNjMzcHgpe1xyXG4gICAgLmNhcmR7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgICAgICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgICAgIHBhZGRpbmc6IDEuOHZoIDMxdmg7XHJcbiAgICAgICAgbWluLXdpZHRoOjE4NXZ3O1xyXG4gICAgICAgIG1hcmdpbjogNjB2aCAwO1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gIGFuZCAobWluLXdpZHRoOiA0MDFweCkgYW5kIChtYXgtd2lkdGg6IDQ2N3B4KXtcclxuICAgIC5iYWNrQnV0dG9ue1xyXG4gICAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgICAgIGhlaWdodDogMTAlO1xyXG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIHRvcDogMTAlO1xyXG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSggMCwgLTEwJSApO1xyXG4gICAgICBcclxuICAgICAgICBhe1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlICk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBhOmhvdmVye1xyXG4gICAgICAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY2FyZHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAgICAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAgICAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgICAgICAgcGFkZGluZzogMS41dmggMTV2aDtcclxuICAgICAgICBtaW4td2lkdGg6MTg1dnc7XHJcbiAgICAgICAgbWFyZ2luOiA2MHZoIDA7XHJcbiAgICB9XHJcbiAgICAgIFxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSAgYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XHJcbiAgICAuYmFja0J1dHRvbntcclxuICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgICAgICBoZWlnaHQ6IDEwJTtcclxuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICB0b3A6IDEwJTtcclxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoIDAsIC0xMCUgKTtcclxuICAgICAgXHJcbiAgICAgICAgYXtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSApO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgYTpob3ZlcntcclxuICAgICAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNhcmR7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgICAgICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgICAgIHBhZGRpbmc6IDJ2aCAwdmg7XHJcbiAgICAgICAgbWluLXdpZHRoOjE3NXZ3O1xyXG4gICAgICAgIG1hcmdpbjogMzB2aDtcclxuICAgIH1cclxuICAgICAgXHJcblxyXG4gIH1cclxuXHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kKG1pbi13aWR0aDogMjg1cHgpIGFuZCAobWF4LXdpZHRoOiAzMTlweCl7XHJcbiAgICAuYmFja0J1dHRvbntcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgICAgICBoZWlnaHQ6IDEwJTtcclxuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICB0b3A6IDEwJTtcclxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoIDAsIC0xMCUgKTtcclxuICAgICAgXHJcbiAgICAgICAgYXtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSApO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgYTpob3ZlcntcclxuICAgICAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNhcmR7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgICAgICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgICAgIHBhZGRpbmc6IDV2aCAwdmg7XHJcbiAgICAgICAgbWluLXdpZHRoOjE3NXZ3O1xyXG4gICAgICAgIG1hcmdpbjogMzB2aDtcclxuICAgIH1cclxuICB9XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQobWluLXdpZHRoOiAyNTBweCkgYW5kIChtYXgtd2lkdGg6IDI4NHB4KXtcclxuICAgIC5iYWNrQnV0dG9ue1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgICAgIGhlaWdodDogMTAlO1xyXG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIHRvcDogMTAlO1xyXG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSggMCwgLTEwJSApO1xyXG4gICAgICBcclxuICAgICAgICBhe1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlICk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBhOmhvdmVye1xyXG4gICAgICAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmR7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgICAgICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgICAgIHBhZGRpbmc6IDh2aCAwdmg7XHJcbiAgICAgICAgbWluLXdpZHRoOjE3NXZ3O1xyXG4gICAgICAgIG1hcmdpbjogMzB2aDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kKG1pbi13aWR0aDogMjI1cHgpIGFuZCAobWF4LXdpZHRoOiAyNDlweCl7XHJcbiAgICAuYmFja0J1dHRvbntcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgICAgICBoZWlnaHQ6IDEwJTtcclxuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICB0b3A6IDEwJTtcclxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoIDAsIC0xMCUgKTtcclxuICAgICAgXHJcbiAgICAgICAgYXtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSApO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgYTpob3ZlcntcclxuICAgICAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jYXJke1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAgICAgICBwYWRkaW5nOiAxMnZoIDB2aDtcclxuICAgICAgICBtaW4td2lkdGg6MTcwdnc7XHJcbiAgICAgICAgbWFyZ2luOiAzMHZoO1xyXG4gICAgfVxyXG4gIH1cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyMjRweCl7XHJcbiAgICAuYmFja0J1dHRvbntcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgICAgICBoZWlnaHQ6IDEwJTtcclxuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICB0b3A6IDEwJTtcclxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoIDAsIC0xMCUgKTtcclxuICAgICAgXHJcbiAgICAgICAgYXtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSApO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgYTpob3ZlcntcclxuICAgICAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jYXJke1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAgICAgICBwYWRkaW5nOiAxNnZoIDB2aDtcclxuICAgICAgICBtaW4td2lkdGg6MTcwdnc7XHJcbiAgICAgICAgbWFyZ2luOiAxMHZoO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4iLCIqIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uYm9keSB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBtaW4td2lkdGg6IDEwMHZ3O1xuICBtYXgtaGVpZ2h0OiAxMDB2aDtcbiAgbWF4LXdpZHRoOiAxMDB2dztcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgIzNlM2UzZSAwJSwgYmxhY2sgMTAwJSk7XG59XG5cbi50ZXh0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDQwJTtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDUwJTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG4udGV4dCBoMSB7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogNGVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogNHB4O1xufVxuLnRleHQgaDIsIC50ZXh0IHAge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMi41ZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiA0cHg7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5iYWNrQnV0dG9uIHtcbiAgd2lkdGg6IDIwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBoZWlnaHQ6IDEwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiA1MCU7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xufVxuLmJhY2tCdXR0b24gYSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcbn1cbi5iYWNrQnV0dG9uIGE6aG92ZXIge1xuICBjb2xvcjogIzMzMztcbiAgbGV0dGVyLXNwYWNpbmc6IDRweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuLnByb2R1c2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzAwNDA0O1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNzAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtaW4taGVpZ2h0OiBhdXRvO1xuICBtaW4td2lkdGg6IDEwMHZ3O1xuICBtYXgtaGVpZ2h0OiBhdXRvO1xuICBtYXgtd2lkdGg6IDEwMHZ3O1xufVxuXG4ud3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW46IDA7XG59XG5cbi5jYXJkIHtcbiAgd2lkdGg6IDYwMHB4O1xuICBoZWlnaHQ6IDM0MHB4O1xuICBtYXJnaW46IDJlbSAyZW0gMCAwO1xuICBwZXJzcGVjdGl2ZTogMTUwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzAwNDA0O1xufVxuLmNhcmQgLmNvbnRlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjhzIGN1YmljLWJlemllcigwLjc1LCAwLCAwLjg1LCAxKTtcbn1cblxuLm1vcmUge1xuICBkaXNwbGF5OiBub25lO1xufVxuLm1vcmU6Y2hlY2tlZCB+IC5jb250ZW50IHtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG59XG5cbi5mcm9udCxcbi5iYWNrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuLmZyb250IC5pbm5lcixcbi5iYWNrIC5pbm5lciB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGFkZGluZzogMS41ZW07XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWig4MHB4KSBzY2FsZSgwLjk0KTtcbn1cblxuLmZyb250IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIyNik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG59XG4uZnJvbnQ6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDBkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSwgcmdiYSg0NCwgNDQsIDQzLCAwLjUpKTtcbn1cbi5mcm9udCAuaW5uZXIge1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDVmciAxZnIgMWZyIDJmciAxZnI7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbn1cblxuLmJhY2sge1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIyNik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xufVxuLmJhY2sgLmlubmVyIHtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMmZyIDFmciAyZnIgMTRmciAxZnIgMWZyO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCBhdXRvKTtcbiAgZ3JpZC1jb2x1bW4tZ2FwOiAwLjhlbTtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xufVxuLmJhY2sgLmJ1dHRvbiB7XG4gIGdyaWQtY29sdW1uOiAxLy0xO1xuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbn1cblxuLmJ1dHRvbiB7XG4gIGdyaWQtcm93OiAtMTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMCAxLjVlbTtcbiAgaGVpZ2h0OiAzZW07XG4gIGxpbmUtaGVpZ2h0OiAyLjllbTtcbiAgbWluLXdpZHRoOiAzZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IHNvbGlkIDJweCAjYzAwNDA0O1xuICBjb2xvcjogcmVkO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGVmdDogNTAlO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XG4gIHRleHQtc2hhZG93OiAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbn1cbi5idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE5MiwgNCwgNCwgMC41NzUpO1xuICBib3gtc2hhZG93OiAwIDAgNTBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIHRleHQtc2hhZG93OiBub25lO1xuICBjb2xvcjogI2MwMDQwNDtcbn1cbi5idXR0b24ucmV0dXJuIHtcbiAgbGluZS1oZWlnaHQ6IDNlbTtcbiAgY29sb3I6ICNjMDA0MDQ7XG4gIGJvcmRlci1jb2xvcjogI2MwMDQwNDtcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XG59XG4uYnV0dG9uLnJldHVybjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjMDA0MDQ7XG4gIGNvbG9yOiAjZmZmO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDVweDtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kOiAjZmIyZjJmO1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2MwMDQwNDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTUwcHgpIGFuZCAobWF4LXdpZHRoOiA0MzBweCkge1xuICAudGV4dCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA3MCU7XG4gICAgaGVpZ2h0OiA0MCU7XG4gICAgbGVmdDogNDAlO1xuICAgIHRvcDogNDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTQwJSwgLTQwJSk7XG4gIH1cbiAgLnRleHQgaDEge1xuICAgIGNvbG9yOiByZWQ7XG4gICAgZm9udC1zaXplOiAyZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xuICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgICBsaW5lLWhlaWdodDogMWVtO1xuICB9XG4gIC50ZXh0IGgyLCAudGV4dCBwIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuICB9XG4gIC50ZXh0IHAge1xuICAgIGxpbmUtaGVpZ2h0OiAwLjhlbTtcbiAgfVxuXG4gIC5iYWNrQnV0dG9uIHtcbiAgICB3aWR0aDogMjAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICBoZWlnaHQ6IDEwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAxMCU7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0xMCUpO1xuICB9XG4gIC5iYWNrQnV0dG9uIGEge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XG4gIH1cbiAgLmJhY2tCdXR0b24gYTpob3ZlciB7XG4gICAgY29sb3I6ICMzMzM7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcbiAgICBmb250LXdlaWdodDogODAwO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MzBweCkgYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAudGV4dCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA3MCU7XG4gICAgaGVpZ2h0OiA0MCU7XG4gICAgbGVmdDogNDAlO1xuICAgIHRvcDogNDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTQwJSwgLTQwJSk7XG4gIH1cbiAgLnRleHQgaDEge1xuICAgIGNvbG9yOiByZWQ7XG4gICAgZm9udC1zaXplOiAzZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xuICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgICBsaW5lLWhlaWdodDogMWVtO1xuICB9XG4gIC50ZXh0IGgyLCAudGV4dCBwIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAyZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuICB9XG4gIC50ZXh0IHAge1xuICAgIGxpbmUtaGVpZ2h0OiAwLjhlbTtcbiAgfVxuXG4gIC5iYWNrQnV0dG9uIHtcbiAgICB3aWR0aDogMjAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICBoZWlnaHQ6IDEwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiA1MCU7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xuICB9XG4gIC5iYWNrQnV0dG9uIGEge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XG4gIH1cbiAgLmJhY2tCdXR0b24gYTpob3ZlciB7XG4gICAgY29sb3I6ICMzMzM7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcbiAgICBmb250LXdlaWdodDogODAwO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAxcHgpIHtcbiAgLnRleHQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogNzAlO1xuICAgIGhlaWdodDogNDAlO1xuICAgIGxlZnQ6IDQwJTtcbiAgICB0b3A6IDQwJTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC00MCUsIC00MCUpO1xuICB9XG4gIC50ZXh0IGgxIHtcbiAgICBjb2xvcjogcmVkO1xuICAgIGZvbnQtc2l6ZTogNGVtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcbiAgICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuICB9XG4gIC50ZXh0IGgyLCAudGV4dCBwIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAzZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogNXB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDJlbTtcbiAgfVxuICAudGV4dCBwIHtcbiAgICBsaW5lLWhlaWdodDogMS4yZW07XG4gIH1cblxuICAuYmFja0J1dHRvbiB7XG4gICAgd2lkdGg6IDIwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgaGVpZ2h0OiAxMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogNTAlO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcbiAgfVxuICAuYmFja0J1dHRvbiBhIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcbiAgfVxuICAuYmFja0J1dHRvbiBhOmhvdmVyIHtcbiAgICBjb2xvcjogIzMzMztcbiAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ2OHB4KSBhbmQgKG1heC13aWR0aDogNjMzcHgpIHtcbiAgLmNhcmQge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICBwYWRkaW5nOiAxLjh2aCAzMXZoO1xuICAgIG1pbi13aWR0aDogMTg1dnc7XG4gICAgbWFyZ2luOiA2MHZoIDA7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQwMXB4KSBhbmQgKG1heC13aWR0aDogNDY3cHgpIHtcbiAgLmJhY2tCdXR0b24ge1xuICAgIHdpZHRoOiA0MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgIGhlaWdodDogMTAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDEwJTtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTEwJSk7XG4gIH1cbiAgLmJhY2tCdXR0b24gYSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcbiAgfVxuICAuYmFja0J1dHRvbiBhOmhvdmVyIHtcbiAgICBjb2xvcjogIzMzMztcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIH1cblxuICAuY2FyZCB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgIHBhZGRpbmc6IDEuNXZoIDE1dmg7XG4gICAgbWluLXdpZHRoOiAxODV2dztcbiAgICBtYXJnaW46IDYwdmggMDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xuICAuYmFja0J1dHRvbiB7XG4gICAgd2lkdGg6IDQwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgaGVpZ2h0OiAxMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMTAlO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMTAlKTtcbiAgfVxuICAuYmFja0J1dHRvbiBhIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xuICB9XG4gIC5iYWNrQnV0dG9uIGE6aG92ZXIge1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgfVxuXG4gIC5jYXJkIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgcGFkZGluZzogMnZoIDB2aDtcbiAgICBtaW4td2lkdGg6IDE3NXZ3O1xuICAgIG1hcmdpbjogMzB2aDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMjg1cHgpIGFuZCAobWF4LXdpZHRoOiAzMTlweCkge1xuICAuYmFja0J1dHRvbiB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgaGVpZ2h0OiAxMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMTAlO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMTAlKTtcbiAgfVxuICAuYmFja0J1dHRvbiBhIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xuICB9XG4gIC5iYWNrQnV0dG9uIGE6aG92ZXIge1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgfVxuXG4gIC5jYXJkIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgcGFkZGluZzogNXZoIDB2aDtcbiAgICBtaW4td2lkdGg6IDE3NXZ3O1xuICAgIG1hcmdpbjogMzB2aDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMjUwcHgpIGFuZCAobWF4LXdpZHRoOiAyODRweCkge1xuICAuYmFja0J1dHRvbiB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgaGVpZ2h0OiAxMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMTAlO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMTAlKTtcbiAgfVxuICAuYmFja0J1dHRvbiBhIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xuICB9XG4gIC5iYWNrQnV0dG9uIGE6aG92ZXIge1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgfVxuXG4gIC5jYXJkIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgcGFkZGluZzogOHZoIDB2aDtcbiAgICBtaW4td2lkdGg6IDE3NXZ3O1xuICAgIG1hcmdpbjogMzB2aDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMjI1cHgpIGFuZCAobWF4LXdpZHRoOiAyNDlweCkge1xuICAuYmFja0J1dHRvbiB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgaGVpZ2h0OiAxMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMTAlO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMTAlKTtcbiAgfVxuICAuYmFja0J1dHRvbiBhIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xuICB9XG4gIC5iYWNrQnV0dG9uIGE6aG92ZXIge1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgfVxuXG4gIC5jYXJkIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgcGFkZGluZzogMTJ2aCAwdmg7XG4gICAgbWluLXdpZHRoOiAxNzB2dztcbiAgICBtYXJnaW46IDMwdmg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDIyNHB4KSB7XG4gIC5iYWNrQnV0dG9uIHtcbiAgICB3aWR0aDogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICBoZWlnaHQ6IDEwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAxMCU7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0xMCUpO1xuICB9XG4gIC5iYWNrQnV0dG9uIGEge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XG4gIH1cbiAgLmJhY2tCdXR0b24gYTpob3ZlciB7XG4gICAgY29sb3I6ICMzMzM7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICBmb250LXdlaWdodDogODAwO1xuICB9XG5cbiAgLmNhcmQge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICBwYWRkaW5nOiAxNnZoIDB2aDtcbiAgICBtaW4td2lkdGg6IDE3MHZ3O1xuICAgIG1hcmdpbjogMTB2aDtcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CardsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-cards',
          templateUrl: './cards.component.html',
          styleUrls: ['./cards.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/products/grafica/flyer/flyer.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/components/products/grafica/flyer/flyer.component.ts ***!
    \**********************************************************************/

  /*! exports provided: FlyerComponent */

  /***/
  function srcAppComponentsProductsGraficaFlyerFlyerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FlyerComponent", function () {
      return FlyerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FlyerComponent = /*#__PURE__*/function () {
      function FlyerComponent() {
        _classCallCheck(this, FlyerComponent);
      }

      _createClass(FlyerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FlyerComponent;
    }();

    FlyerComponent.??fac = function FlyerComponent_Factory(t) {
      return new (t || FlyerComponent)();
    };

    FlyerComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: FlyerComponent,
      selectors: [["app-flyer"]],
      decls: 2,
      vars: 0,
      template: function FlyerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "flyer works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdHMvZ3JhZmljYS9mbHllci9mbHllci5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](FlyerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-flyer',
          templateUrl: './flyer.component.html',
          styleUrls: ['./flyer.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/products/grafica/logo/logo.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/components/products/grafica/logo/logo.component.ts ***!
    \********************************************************************/

  /*! exports provided: LogoComponent */

  /***/
  function srcAppComponentsProductsGraficaLogoLogoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LogoComponent", function () {
      return LogoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var LogoComponent = /*#__PURE__*/function () {
      function LogoComponent() {
        _classCallCheck(this, LogoComponent);
      }

      _createClass(LogoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LogoComponent;
    }();

    LogoComponent.??fac = function LogoComponent_Factory(t) {
      return new (t || LogoComponent)();
    };

    LogoComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: LogoComponent,
      selectors: [["app-logo"]],
      decls: 37,
      vars: 0,
      consts: [[1, "body"], [1, "row"], [1, "col-md-6", "col-md-12", "text"], [1, "text-center"], [1, "col-md-6", "col-md-12", "backButton"], ["routerLink", "/products", 1, "text-center"], [1, "produse", "align-items-center"], [1, "container", "px-4", "overflow-hidden"], [1, "row", "g-0"], [1, "col-md-3", "col-sm-6", "col-xs-12"], ["src", "/assets/img/logo/Logo5.jpg", 1, "logo", "img-fluid"], ["src", "/assets/img/logo/Logo1.jpg", 1, "logo", "img-fluid"], ["src", "/assets/img/logo/Logo2.jpg", 1, "logo", "img-fluid"], ["src", "/assets/img/logo/Logo3.jpg", 1, "logo", "img-fluid"], ["src", "/assets/img/logo/Logo4.jpg", 1, "logo", "img-fluid"], ["src", "/assets/img/logo/Logo6.jpg", 1, "logo", "img-fluid"], ["src", "/assets/img/logo/Logo8.jpg", 1, "logo", "img-fluid"], ["src", "/assets/img/logo/Logo7.jpg", 1, "logo", "img-fluid"], ["src", "/assets/img/logo/Logo9.jpg", 1, "logo", "img-fluid"]],
      template: function LogoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h1", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Logo-Embleme");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Realizam Logo - embleme ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, " Vor fi livrate in format pdf, psd, png, jpg, svg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "h2", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Pret: 500 de lei");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, " Inapoi la produse");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](29, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](31, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](33, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](36, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\n.body[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  max-height: 100vh;\n  min-width: 100vw;\n  max-width: 100vw;\n  background: radial-gradient(circle, #3e3e3e 0%, black 100%);\n}\n\n.text[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 50%;\n  height: 40%;\n  left: 50%;\n  top: 50%;\n  border-radius: 20px;\n  transform: translate(-50%, -50%);\n}\n\n.text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: red;\n  font-size: 4em;\n  font-weight: 500;\n  letter-spacing: 4px;\n  padding: 10px 0;\n}\n\n.text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 2.3em;\n  font-weight: 500;\n  letter-spacing: 4px;\n  padding: 20px;\n}\n\n.text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  line-height: 0.8em;\n}\n\n.backButton[_ngcontent-%COMP%] {\n  width: 20%;\n  background-color: red;\n  height: 10%;\n  position: absolute;\n  right: 0;\n  top: 50%;\n  border-top-left-radius: 20px;\n  border-bottom-left-radius: 20px;\n  transform: translate(0, -50%);\n  overflow: hidden;\n}\n\n.backButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 2em;\n  font-weight: 500;\n  letter-spacing: 2px;\n  padding: 10px;\n  position: absolute;\n  right: 0;\n  top: 50%;\n  transform: translate(0, -50%);\n}\n\n.backButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #333;\n  letter-spacing: 4px;\n  font-weight: 800;\n}\n\n.produse[_ngcontent-%COMP%] {\n  background: radial-gradient(circle, #3e3e3e 0%, black 100%);\n  min-width: 100vw;\n  max-width: 100vw;\n  overflow: hidden;\n}\n\n.container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  max-height: auto;\n  line-height: 1em;\n  padding: 0;\n}\n\n.logo[_ngcontent-%COMP%] {\n  position: relative;\n  width: 290px;\n  height: 290px;\n  border: 2px solid black;\n  overflow: hidden;\n}\n\n@media screen and (min-width: 333px) and (max-width: 575px) {\n  .logo[_ngcontent-%COMP%] {\n    width: 320px;\n    height: 320px;\n    left: 50%;\n    transform: translate(-50%);\n  }\n}\n\n@media screen and (min-width: 150px) and (max-width: 430px) {\n  .text[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 70%;\n    height: 40%;\n    left: 40%;\n    top: 40%;\n    border-radius: 20px;\n    transform: translate(-40%, -40%);\n  }\n  .text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    color: red;\n    font-size: 2em;\n    font-weight: 500;\n    letter-spacing: 4px;\n    padding: 10px 0;\n    line-height: 1em;\n  }\n  .text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 1em;\n    font-weight: 500;\n    letter-spacing: 4px;\n    padding: 20px;\n    line-height: 1.5em;\n  }\n  .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    line-height: 0.8em;\n  }\n\n  .backButton[_ngcontent-%COMP%] {\n    width: 20%;\n    background-color: red;\n    height: 10%;\n    position: absolute;\n    right: 0;\n    top: 10%;\n    border-top-left-radius: 20px;\n    border-bottom-left-radius: 20px;\n    transform: translate(0, -10%);\n  }\n  .backButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 1em;\n    font-weight: 500;\n    letter-spacing: 2px;\n    padding: 10px;\n    position: absolute;\n    right: 0;\n    top: 50%;\n    transform: translate(0, -50%);\n  }\n  .backButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: #333;\n    letter-spacing: 4px;\n    font-weight: 800;\n  }\n}\n\n@media screen and (min-width: 430px) and (max-width: 902px) {\n  .text[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 70%;\n    height: 40%;\n    left: 40%;\n    top: 40%;\n    border-radius: 20px;\n    transform: translate(-40%, -40%);\n  }\n  .text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    color: red;\n    font-size: 3em;\n    font-weight: 500;\n    letter-spacing: 4px;\n    padding: 10px 0;\n    line-height: 1em;\n  }\n  .text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 2em;\n    font-weight: 500;\n    letter-spacing: 4px;\n    padding: 20px;\n    line-height: 1.5em;\n  }\n  .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    line-height: 0.8em;\n  }\n\n  .backButton[_ngcontent-%COMP%] {\n    width: 20%;\n    background-color: red;\n    height: 10%;\n    position: absolute;\n    right: 0;\n    top: 50%;\n    border-top-left-radius: 20px;\n    border-bottom-left-radius: 20px;\n    transform: translate(0, -50%);\n  }\n  .backButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 1em;\n    font-weight: 500;\n    letter-spacing: 2px;\n    padding: 10px;\n    position: absolute;\n    right: 0;\n    top: 50%;\n    transform: translate(0, -50%);\n  }\n  .backButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: #333;\n    letter-spacing: 4px;\n    font-weight: 800;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy9ncmFmaWNhL2xvZ28vQzpcXFVzZXJzXFxhbmRyZVxcRGVza3RvcFxcUG9ydG9mb2xpdUFuZ3VsYXJcXFBvcnRvZm9saXVBbmRyZWkvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHByb2R1Y3RzXFxncmFmaWNhXFxsb2dvXFxsb2dvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3Byb2R1Y3RzL2dyYWZpY2EvbG9nby9sb2dvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR0ksc0JBQUE7QUNESjs7QURNQTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkRBQUE7QUNISjs7QURPQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7QUNKSjs7QURRRztFQUNLLFVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNOUjs7QURVSTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FDUlI7O0FEWUs7RUFDRyxrQkFBQTtBQ1ZSOztBRGFBO0VBQ0ksVUFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtBQ1ZKOztBRFlJO0VBQ0ksWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSw2QkFBQTtBQ1ZSOztBRGFJO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNYUjs7QURlQTtFQUVJLDJEQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDYko7O0FEZUE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FDWko7O0FEZ0JBO0VBRUksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUNkSjs7QURxQkE7RUFDSTtJQUNJLFlBQUE7SUFDQSxhQUFBO0lBQ0EsU0FBQTtJQUNBLDBCQUFBO0VDbEJOO0FBQ0Y7O0FEcUJBO0VBQ0k7SUFDSSxrQkFBQTtJQUNBLFVBQUE7SUFDQSxXQUFBO0lBQ0EsU0FBQTtJQUNBLFFBQUE7SUFDQSxtQkFBQTtJQUNBLGdDQUFBO0VDbkJOO0VEc0JLO0lBQ0ssVUFBQTtJQUNBLGNBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0EsZUFBQTtJQUNBLGdCQUFBO0VDcEJWO0VEd0JNO0lBQ0ksWUFBQTtJQUNBLGNBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0EsYUFBQTtJQUNBLGtCQUFBO0VDdEJWO0VEMEJPO0lBQ0csa0JBQUE7RUN4QlY7O0VEMkJFO0lBQ0ksVUFBQTtJQUNBLHFCQUFBO0lBQ0EsV0FBQTtJQUNBLGtCQUFBO0lBQ0EsUUFBQTtJQUNBLFFBQUE7SUFDQSw0QkFBQTtJQUNBLCtCQUFBO0lBQ0EsNkJBQUE7RUN4Qk47RUQwQk07SUFDSSxZQUFBO0lBQ0EsY0FBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSxhQUFBO0lBQ0Esa0JBQUE7SUFDQSxRQUFBO0lBQ0EsUUFBQTtJQUNBLDZCQUFBO0VDeEJWO0VEMkJNO0lBQ0ksV0FBQTtJQUNBLG1CQUFBO0lBQ0EsZ0JBQUE7RUN6QlY7QUFDRjs7QUQ2QkE7RUFDSTtJQUNJLGtCQUFBO0lBQ0EsVUFBQTtJQUNBLFdBQUE7SUFDQSxTQUFBO0lBQ0EsUUFBQTtJQUNBLG1CQUFBO0lBQ0EsZ0NBQUE7RUMzQk47RUQ4Qks7SUFDSyxVQUFBO0lBQ0EsY0FBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7RUM1QlY7RURnQ007SUFDSSxZQUFBO0lBQ0EsY0FBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSxhQUFBO0lBQ0Esa0JBQUE7RUM5QlY7RURrQ087SUFDRyxrQkFBQTtFQ2hDVjs7RURtQ0U7SUFDSSxVQUFBO0lBQ0EscUJBQUE7SUFDQSxXQUFBO0lBQ0Esa0JBQUE7SUFDQSxRQUFBO0lBQ0EsUUFBQTtJQUNBLDRCQUFBO0lBQ0EsK0JBQUE7SUFDQSw2QkFBQTtFQ2hDTjtFRGtDTTtJQUNJLFlBQUE7SUFDQSxjQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtJQUNBLGFBQUE7SUFDQSxrQkFBQTtJQUNBLFFBQUE7SUFDQSxRQUFBO0lBQ0EsNkJBQUE7RUNoQ1Y7RURtQ007SUFDSSxXQUFBO0lBQ0EsbUJBQUE7SUFDQSxnQkFBQTtFQ2pDVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy9ncmFmaWNhL2xvZ28vbG9nby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XHJcbiAgICAvLyBwYWRkaW5nOiAwO1xyXG4gICAgLy8gbWFyZ2luOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG4kYWNjZW50LWNvbG9yOiByZ2JhKDE5MiwgNCwgNCwgKTtcclxuJGdyaWQtZ3V0dGVyLXdpZHRoOiAxMHB4ICFkZWZhdWx0O1xyXG5cclxuLmJvZHl7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIG1heC1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgbWluLXdpZHRoOiAxMDB2dztcclxuICAgIG1heC13aWR0aDogMTAwdnc7XHJcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2JhKDYyLDYyLDYyLDEpIDAlLCByZ2JhKDAsMCwwLDEpIDEwMCUpO1xyXG4gICAgXHJcblxyXG59XHJcbi50ZXh0e1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgaGVpZ2h0OiA0MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSggLTUwJSwgLTUwJSApO1xyXG4gICAgXHJcbiAgICBcclxuXHJcbiAgIGgxe1xyXG4gICAgICAgIGNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcclxuICAgICAgICBmb250LXNpemU6IDRlbTtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiA0cHg7IFxyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgfVxyXG4gICAgXHJcblxyXG4gICAgaDIscHtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZm9udC1zaXplOiAyLjNlbTtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XHJcbiAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICAgICBcclxuXHJcbiAgICB9XHJcbiAgICAgcHtcclxuICAgICAgICBsaW5lLWhlaWdodDogMC44ZW07XHJcbiAgICAgfVxyXG59XHJcbi5iYWNrQnV0dG9ue1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgIGhlaWdodDogMTAlO1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSggMCwgLTUwJSApO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBcclxuICAgIGF7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUgKTtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIGE6aG92ZXJ7XHJcbiAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcclxuICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgfVxyXG5cclxufVxyXG4ucHJvZHVzZXtcclxuICAgIFxyXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgcmdiYSg2Miw2Miw2MiwxKSAwJSwgcmdiYSgwLDAsMCwxKSAxMDAlKTtcclxuICAgIG1pbi13aWR0aDogMTAwdnc7XHJcbiAgICBtYXgtd2lkdGg6IDEwMHZ3O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4uY29udGFpbmVye1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7ICAgICBcclxuICAgIG1heC1oZWlnaHQ6IGF1dG87XHJcbiAgICBsaW5lLWhlaWdodDogMWVtO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuXHJcbi5sb2dvXHJcbntcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgd2lkdGg6MjkwcHg7XHJcbiAgICBoZWlnaHQ6MjkwcHg7XHJcbiAgICBib3JkZXI6MnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMzM3B4KSBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcclxuICAgIC5sb2dve1xyXG4gICAgICAgIHdpZHRoOjMyMHB4O1xyXG4gICAgICAgIGhlaWdodDozMjBweDtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSApO1xyXG5cclxuICAgIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNTBweCkgYW5kIChtYXgtd2lkdGg6IDQzMHB4KSB7XHJcbiAgICAudGV4dHtcclxuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgICAgIGhlaWdodDogNDAlO1xyXG4gICAgICAgIGxlZnQ6IDQwJTtcclxuICAgICAgICB0b3A6IDQwJTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKCAtNDAlLCAtNDAlICk7XHJcbiAgICAgICAgXHJcbiAgICBcclxuICAgICAgIGgxe1xyXG4gICAgICAgICAgICBjb2xvcjogcmdiKDI1NSwgMCwgMCk7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogNHB4OyBcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMWVtO1xyXG4gICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgXHJcbiAgICAgICAgaDIscHtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xyXG4gICAgICAgICAgICAgICBcclxuICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAgcHtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDAuOGVtO1xyXG4gICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuYmFja0J1dHRvbntcclxuICAgICAgICB3aWR0aDogMjAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgICAgICBoZWlnaHQ6IDEwJTtcclxuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICB0b3A6IDEwJTtcclxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoIDAsIC0xMCUgKTtcclxuICAgICAgXHJcbiAgICAgICAgYXtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSApO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgYTpob3ZlcntcclxuICAgICAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgfVxyXG59fVxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQzMHB4KSBhbmQgKG1heC13aWR0aDogOTAycHgpIHtcclxuICAgIC50ZXh0e1xyXG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgICAgaGVpZ2h0OiA0MCU7XHJcbiAgICAgICAgbGVmdDogNDAlO1xyXG4gICAgICAgIHRvcDogNDAlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoIC00MCUsIC00MCUgKTtcclxuICAgICAgICBcclxuICAgIFxyXG4gICAgICAgaDF7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiA0cHg7IFxyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxZW07XHJcbiAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICBcclxuICAgICAgICBoMixwe1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS41ZW07XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgICBwe1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMC44ZW07XHJcbiAgICAgICAgIH1cclxuICAgIH1cclxuICAgIC5iYWNrQnV0dG9ue1xyXG4gICAgICAgIHdpZHRoOiAyMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgICAgIGhlaWdodDogMTAlO1xyXG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSggMCwgLTUwJSApO1xyXG4gICAgICBcclxuICAgICAgICBhe1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlICk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBhOmhvdmVye1xyXG4gICAgICAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgICB9XHJcbn19XHJcbiIsIioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uYm9keSB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBtYXgtaGVpZ2h0OiAxMDB2aDtcbiAgbWluLXdpZHRoOiAxMDB2dztcbiAgbWF4LXdpZHRoOiAxMDB2dztcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgIzNlM2UzZSAwJSwgYmxhY2sgMTAwJSk7XG59XG5cbi50ZXh0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDQwJTtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDUwJTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG4udGV4dCBoMSB7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogNGVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogNHB4O1xuICBwYWRkaW5nOiAxMHB4IDA7XG59XG4udGV4dCBoMiwgLnRleHQgcCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAyLjNlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDRweDtcbiAgcGFkZGluZzogMjBweDtcbn1cbi50ZXh0IHAge1xuICBsaW5lLWhlaWdodDogMC44ZW07XG59XG5cbi5iYWNrQnV0dG9uIHtcbiAgd2lkdGg6IDIwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBoZWlnaHQ6IDEwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiA1MCU7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmJhY2tCdXR0b24gYSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcbn1cbi5iYWNrQnV0dG9uIGE6aG92ZXIge1xuICBjb2xvcjogIzMzMztcbiAgbGV0dGVyLXNwYWNpbmc6IDRweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuLnByb2R1c2Uge1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCAjM2UzZTNlIDAlLCBibGFjayAxMDAlKTtcbiAgbWluLXdpZHRoOiAxMDB2dztcbiAgbWF4LXdpZHRoOiAxMDB2dztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmNvbnRhaW5lciB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBtYXgtaGVpZ2h0OiBhdXRvO1xuICBsaW5lLWhlaWdodDogMWVtO1xuICBwYWRkaW5nOiAwO1xufVxuXG4ubG9nbyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDI5MHB4O1xuICBoZWlnaHQ6IDI5MHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzMzcHgpIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xuICAubG9nbyB7XG4gICAgd2lkdGg6IDMyMHB4O1xuICAgIGhlaWdodDogMzIwcHg7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUpO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNTBweCkgYW5kIChtYXgtd2lkdGg6IDQzMHB4KSB7XG4gIC50ZXh0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBoZWlnaHQ6IDQwJTtcbiAgICBsZWZ0OiA0MCU7XG4gICAgdG9wOiA0MCU7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNDAlLCAtNDAlKTtcbiAgfVxuICAudGV4dCBoMSB7XG4gICAgY29sb3I6IHJlZDtcbiAgICBmb250LXNpemU6IDJlbTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XG4gICAgcGFkZGluZzogMTBweCAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxZW07XG4gIH1cbiAgLnRleHQgaDIsIC50ZXh0IHAge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBsaW5lLWhlaWdodDogMS41ZW07XG4gIH1cbiAgLnRleHQgcCB7XG4gICAgbGluZS1oZWlnaHQ6IDAuOGVtO1xuICB9XG5cbiAgLmJhY2tCdXR0b24ge1xuICAgIHdpZHRoOiAyMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgIGhlaWdodDogMTAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDEwJTtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTEwJSk7XG4gIH1cbiAgLmJhY2tCdXR0b24gYSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcbiAgfVxuICAuYmFja0J1dHRvbiBhOmhvdmVyIHtcbiAgICBjb2xvcjogIzMzMztcbiAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQzMHB4KSBhbmQgKG1heC13aWR0aDogOTAycHgpIHtcbiAgLnRleHQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogNzAlO1xuICAgIGhlaWdodDogNDAlO1xuICAgIGxlZnQ6IDQwJTtcbiAgICB0b3A6IDQwJTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC00MCUsIC00MCUpO1xuICB9XG4gIC50ZXh0IGgxIHtcbiAgICBjb2xvcjogcmVkO1xuICAgIGZvbnQtc2l6ZTogM2VtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcbiAgICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgbGluZS1oZWlnaHQ6IDFlbTtcbiAgfVxuICAudGV4dCBoMiwgLnRleHQgcCB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbiAgfVxuICAudGV4dCBwIHtcbiAgICBsaW5lLWhlaWdodDogMC44ZW07XG4gIH1cblxuICAuYmFja0J1dHRvbiB7XG4gICAgd2lkdGg6IDIwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgaGVpZ2h0OiAxMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogNTAlO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcbiAgfVxuICAuYmFja0J1dHRvbiBhIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xuICB9XG4gIC5iYWNrQnV0dG9uIGE6aG92ZXIge1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](LogoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-logo',
          templateUrl: './logo.component.html',
          styleUrls: ['./logo.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/products/products.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/products/products.component.ts ***!
    \***********************************************************/

  /*! exports provided: ProductsComponent */

  /***/
  function srcAppComponentsProductsProductsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsComponent", function () {
      return ProductsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var ProductsComponent = /*#__PURE__*/function () {
      function ProductsComponent() {
        _classCallCheck(this, ProductsComponent);
      }

      _createClass(ProductsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var left = document.querySelector('.stanga');
          var right = document.querySelector('.dreapta');
          var container = document.querySelector('.cont');
          left.addEventListener('mouseenter', function () {
            return container.classList.add('hover_stanga');
          });
          left.addEventListener('mouseleave', function () {
            return container.classList.remove('hover_stanga');
          });
          right.addEventListener('mouseenter', function () {
            return container.classList.add('hover_dreapta');
          });
          right.addEventListener('mouseleave', function () {
            return container.classList.remove('hover_dreapta');
          });
        }
      }]);

      return ProductsComponent;
    }();

    ProductsComponent.??fac = function ProductsComponent_Factory(t) {
      return new (t || ProductsComponent)();
    };

    ProductsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: ProductsComponent,
      selectors: [["app-products"]],
      decls: 52,
      vars: 0,
      consts: [[1, "sec"], [1, "cont"], [1, "split", "stanga"], [1, "site1", "site"], [1, "title"], ["routerLink", "/portofoliu"], [1, "site2", "site"], ["routerLink", "/site-prezentare"], [1, "site4", "site"], ["routerLink", "/aplicatii"], [1, "split", "dreapta", "col-xs-12"], ["routerLink", "/logo"], ["routerLink", "/banner"], [1, "site3", "site"], ["routerLink", "/cards"], ["routerLink", "/flyer"]],
      template: function ProductsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h1", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "WebDesign");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Portofoliu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "button");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Afla mai multe");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Site de prezentare");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "button");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Afla mai multe");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Aplicatii web");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "button");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Afla mai multe");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "h1", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Grafica");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Logo-steme");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "button");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Afla mai multe");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "Banner");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "button");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "Afla mai multe");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "Carti de vizita");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "button");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "Afla mai multe");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "Flyere/fluturasi");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "button");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, "Afla mai multe");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: ["*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n.sec[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n  height: 100vh;\n  overflow: hidden;\n  margin: 0;\n}\n\n.title[_ngcontent-%COMP%] {\n  color: red;\n  font-weight: 800;\n  letter-spacing: 2px;\n}\n\n.site[_ngcontent-%COMP%] {\n  padding: 30px 0;\n  position: relative;\n  margin-top: 5%;\n}\n\n.site[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  left: 50%;\n  bottom: -90%;\n  transform: translateX(-50%);\n  text-decoration: none;\n  color: black;\n  border: 2px solid white;\n  font-size: 1rem;\n  font-family: \"Roboto\", sans-serif;\n  text-transform: uppercase;\n  font-weight: bold;\n  width: 15rem;\n  padding: 1.2rem;\n  background-color: rgba(255, 255, 255, 0.1);\n}\n\n.site[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: rgba(255, 255, 255, 0.5);\n  letter-spacing: 2px;\n}\n\n.site[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  color: white;\n  position: absolute;\n  left: 50%;\n  top: 10%;\n  transform: translateX(-50%);\n  white-space: nowrap;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: white;\n  position: absolute;\n  left: 50%;\n  top: 30%;\n  transform: translateX(-50%);\n  white-space: nowrap;\n  margin: 0 1%;\n}\n\n.cont[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  background: #333;\n}\n\n.split[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 50%;\n  height: 100%;\n  overflow: hidden;\n}\n\n.split.stanga[_ngcontent-%COMP%] {\n  left: 0;\n  background: url(\"/assets/img/stanga.jpg\");\n  background-repeat: no-repeat;\n  background-size: cover;\n  color: white;\n}\n\n.split.stanga[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(34, 34, 34, 0.5);\n}\n\n.split.dreapta[_ngcontent-%COMP%] {\n  right: 0;\n  background: url(\"/assets/img/dreapta.jpg\");\n  background-repeat: no-repeat;\n  background-size: cover;\n  color: white;\n}\n\n.split.dreapta[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(34, 34, 34, 0.5);\n}\n\n.split.stanga[_ngcontent-%COMP%], .split.dreapta[_ngcontent-%COMP%], .split.stanga[_ngcontent-%COMP%]::before, .split.dreapta[_ngcontent-%COMP%]::before {\n  transition: all 1000ms ease-in-out;\n}\n\n.hover_stanga[_ngcontent-%COMP%]   .stanga[_ngcontent-%COMP%] {\n  width: 75%;\n}\n\n.hover_stanga[_ngcontent-%COMP%]   .dreapta[_ngcontent-%COMP%] {\n  width: 25%;\n}\n\n.hover_dreapta[_ngcontent-%COMP%]   .dreapta[_ngcontent-%COMP%] {\n  width: 75%;\n}\n\n.hover_dreapta[_ngcontent-%COMP%]   .stanga[_ngcontent-%COMP%] {\n  width: 25%;\n}\n\n@media only screen and (min-device-width: 1201px) {\n  .site[_ngcontent-%COMP%] {\n    padding: 10px 0;\n    position: relative;\n    margin-top: 9%;\n    top: 2%;\n    transform: translateY(-2%);\n  }\n  .site[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    position: absolute;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    left: 50%;\n    top: 20%;\n    transform: translateY(-20%);\n    transform: translateX(-50%);\n    font-size: 2em;\n    width: 18rem;\n    padding: 1rem;\n    margin: 1.2em 0;\n  }\n  .site[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 0.9em;\n    text-decoration: none;\n  }\n\n  h1[_ngcontent-%COMP%] {\n    font-size: 2em;\n    color: white;\n    position: absolute;\n    left: 50%;\n    top: 10%;\n    transform: translateX(-50%);\n    white-space: nowrap;\n    margin-top: 0.4em;\n  }\n}\n\n@media only screen and (min-device-width: 992px) and (max-device-width: 1200px) {\n  .site[_ngcontent-%COMP%] {\n    padding: 10px 0;\n    position: relative;\n    margin-top: 10%;\n    top: 2%;\n    transform: translateY(-2%);\n  }\n  .site[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    position: absolute;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    left: 50%;\n    top: 20%;\n    transform: translateY(-20%);\n    transform: translateX(-50%);\n    font-size: 1.2rem;\n    width: 11rem;\n    padding: 0.9rem;\n    margin-top: 1.3em;\n  }\n  .site[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 0.8em;\n    text-decoration: none;\n  }\n\n  h1[_ngcontent-%COMP%] {\n    font-size: 1.7em;\n    color: white;\n    position: absolute;\n    left: 50%;\n    top: 10%;\n    transform: translateX(-50%);\n    white-space: nowrap;\n    margin-bottom: 1.2em;\n  }\n}\n\n@media only screen and (min-device-width: 668px) and (max-device-width: 991px) {\n  .site[_ngcontent-%COMP%] {\n    padding: 10px 0;\n    position: relative;\n    margin-top: 13%;\n    top: 2%;\n    transform: translateY(-2%);\n  }\n  .site[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    position: absolute;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    left: 50%;\n    top: 20%;\n    transform: translateY(-20%);\n    transform: translateX(-50%);\n    font-size: 1.2rem;\n    width: 11rem;\n    padding: 0.9rem;\n    margin-top: 1.3em;\n  }\n  .site[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 0.8em;\n    text-decoration: none;\n  }\n\n  h1[_ngcontent-%COMP%] {\n    font-size: 1.7em;\n    color: white;\n    position: absolute;\n    left: 50%;\n    top: 10%;\n    transform: translateX(-50%);\n    white-space: nowrap;\n    margin-bottom: 1.2em;\n  }\n}\n\n@media only screen and (min-device-width: 482px) and (max-device-width: 667px) {\n  .site[_ngcontent-%COMP%] {\n    padding: 20px 0;\n    position: relative;\n    margin-top: 15%;\n    top: 20%;\n    transform: translateY(-20%);\n  }\n  .site[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    position: absolute;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    left: 50%;\n    top: 10%;\n    transform: translateY(-10%);\n    transform: translateX(-50%);\n    font-size: 1.3rem;\n    width: 10rem;\n    padding: 0.6rem;\n    margin-top: 2em;\n  }\n  .site[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 0.8em;\n  }\n\n  h1[_ngcontent-%COMP%] {\n    font-size: 1.5em;\n    color: white;\n    position: absolute;\n    left: 50%;\n    top: 10%;\n    transform: translateX(-50%);\n    white-space: nowrap;\n    margin-bottom: 1.2em;\n  }\n}\n\n@media only screen and (min-device-width: 301px) and (max-device-width: 481px) and (orientation: portrait) {\n  .site[_ngcontent-%COMP%] {\n    padding: 20px 0;\n    position: relative;\n    margin-top: 15%;\n    top: 20%;\n    transform: translateY(-20%);\n  }\n  .site[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    position: absolute;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    left: 50%;\n    top: 10%;\n    transform: translateY(-10%);\n    transform: translateX(-50%);\n    font-size: 1.1rem;\n    width: 8rem;\n    padding: 0.5rem;\n    margin-top: 2em;\n  }\n  .site[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 0.7em;\n  }\n\n  h1[_ngcontent-%COMP%] {\n    font-size: 1.3em;\n    color: white;\n    position: absolute;\n    left: 50%;\n    top: 10%;\n    transform: translateX(-50%);\n    white-space: nowrap;\n    margin-bottom: 1em;\n  }\n}\n\n@media only screen and (max-width: 300px) {\n  .site[_ngcontent-%COMP%] {\n    padding: 20px 0;\n    position: relative;\n    margin-top: 15%;\n    top: 20%;\n    transform: translateY(-20%);\n  }\n  .site[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    position: absolute;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    left: 50%;\n    top: 10%;\n    transform: translateY(-10%);\n    transform: translateX(-50%);\n    font-size: 1rem;\n    width: 7rem;\n    padding: 0.5rem;\n    margin-top: 2em;\n  }\n  .site[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 0.6em;\n  }\n\n  h1[_ngcontent-%COMP%] {\n    font-size: 1.2em;\n    color: white;\n    position: absolute;\n    left: 50%;\n    top: 10%;\n    transform: translateX(-50%);\n    white-space: nowrap;\n    margin-bottom: 0.4em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy9DOlxcVXNlcnNcXGFuZHJlXFxEZXNrdG9wXFxQb3J0b2ZvbGl1QW5ndWxhclxcUG9ydG9mb2xpdUFuZHJlaS9zcmNcXGFwcFxcY29tcG9uZW50c1xccHJvZHVjdHNcXHByb2R1Y3RzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtBQ0NKOztBREtBO0VBQ0ksaUNBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0FDRko7O0FESUE7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0RKOztBREdBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0FKOztBREdJO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxpQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLDBDQUFBO0FDRFI7O0FER0k7RUFDSSwwQ0FBQTtFQUNBLG1CQUFBO0FDRFI7O0FESUk7RUFDSSxZQUFBO0FDRlI7O0FETUE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FDSEo7O0FES0E7RUFDSSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNGSjs7QURNQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0hKOztBRFFBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDTEo7O0FET0E7RUFDQSxPQUFBO0VBSUEseUNBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQ1BBOztBRFNBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx1Q0FyR1M7QUMrRmI7O0FEUUE7RUFDQSxRQUFBO0VBQ0EsMENBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBTUEsWUFBQTtBQ1ZBOztBRFlBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx1Q0F2SFU7QUM4R2Q7O0FEV0E7Ozs7RUFJSSxrQ0FBQTtBQ1JKOztBRFdBO0VBQ0ksVUFoSVU7QUN3SGQ7O0FEV0E7RUFFSSxVQXBJVztBQzJIZjs7QURXQTtFQUVJLFVBeklVO0FDZ0lkOztBRFdBO0VBRUksVUE1SVc7QUNtSWY7O0FEV0E7RUFDSTtJQUNJLGVBQUE7SUFDQSxrQkFBQTtJQUNBLGNBQUE7SUFDQSxPQUFBO0lBQ0EsMEJBQUE7RUNSTjtFRFdNO0lBQ0ksa0JBQUE7SUFDQSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSx1QkFBQTtJQUNBLFNBQUE7SUFDQSxRQUFBO0lBQ0EsMkJBQUE7SUFDQSwyQkFBQTtJQUNBLGNBQUE7SUFDQSxZQUFBO0lBQ0EsYUFBQTtJQUNBLGVBQUE7RUNUVjtFRGFNO0lBQ0ksWUFBQTtJQUNBLGdCQUFBO0lBQ0EscUJBQUE7RUNYVjs7RURlRTtJQUNJLGNBQUE7SUFDQSxZQUFBO0lBQ0Esa0JBQUE7SUFDQSxTQUFBO0lBQ0EsUUFBQTtJQUNBLDJCQUFBO0lBQ0EsbUJBQUE7SUFDQSxpQkFBQTtFQ1pOO0FBQ0Y7O0FEaUJBO0VBQ0k7SUFDSSxlQUFBO0lBQ0Esa0JBQUE7SUFDQSxlQUFBO0lBQ0EsT0FBQTtJQUNBLDBCQUFBO0VDZk47RURrQk07SUFDSSxrQkFBQTtJQUNBLGFBQUE7SUFDQSxtQkFBQTtJQUNBLHVCQUFBO0lBQ0EsU0FBQTtJQUNBLFFBQUE7SUFDQSwyQkFBQTtJQUNBLDJCQUFBO0lBQ0EsaUJBQUE7SUFDQSxZQUFBO0lBQ0EsZUFBQTtJQUNBLGlCQUFBO0VDaEJWO0VEb0JNO0lBQ0ksWUFBQTtJQUNBLGdCQUFBO0lBQ0EscUJBQUE7RUNsQlY7O0VEc0JFO0lBQ0ksZ0JBQUE7SUFDQSxZQUFBO0lBQ0Esa0JBQUE7SUFDQSxTQUFBO0lBQ0EsUUFBQTtJQUNBLDJCQUFBO0lBQ0EsbUJBQUE7SUFDQSxvQkFBQTtFQ25CTjtBQUNGOztBRHVCQTtFQUNJO0lBQ0ksZUFBQTtJQUNBLGtCQUFBO0lBQ0EsZUFBQTtJQUNBLE9BQUE7SUFDQSwwQkFBQTtFQ3JCTjtFRHdCTTtJQUNJLGtCQUFBO0lBQ0EsYUFBQTtJQUNBLG1CQUFBO0lBQ0EsdUJBQUE7SUFDQSxTQUFBO0lBQ0EsUUFBQTtJQUNBLDJCQUFBO0lBQ0EsMkJBQUE7SUFDQSxpQkFBQTtJQUNBLFlBQUE7SUFDQSxlQUFBO0lBQ0EsaUJBQUE7RUN0QlY7RUQwQk07SUFDSSxZQUFBO0lBQ0EsZ0JBQUE7SUFDQSxxQkFBQTtFQ3hCVjs7RUQ0QkU7SUFDSSxnQkFBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtJQUNBLFNBQUE7SUFDQSxRQUFBO0lBQ0EsMkJBQUE7SUFDQSxtQkFBQTtJQUNBLG9CQUFBO0VDekJOO0FBQ0Y7O0FENEJBO0VBQ0k7SUFDSSxlQUFBO0lBQ0Esa0JBQUE7SUFDQSxlQUFBO0lBQ0EsUUFBQTtJQUNBLDJCQUFBO0VDMUJOO0VENkJNO0lBQ0ksa0JBQUE7SUFDQSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSx1QkFBQTtJQUNBLFNBQUE7SUFDQSxRQUFBO0lBQ0EsMkJBQUE7SUFDQSwyQkFBQTtJQUNBLGlCQUFBO0lBQ0EsWUFBQTtJQUNBLGVBQUE7SUFDQSxlQUFBO0VDM0JWO0VEK0JNO0lBQ0ksWUFBQTtJQUNBLGdCQUFBO0VDN0JWOztFRGlDRTtJQUNJLGdCQUFBO0lBQ0EsWUFBQTtJQUNBLGtCQUFBO0lBQ0EsU0FBQTtJQUNBLFFBQUE7SUFDQSwyQkFBQTtJQUNBLG1CQUFBO0lBQ0Esb0JBQUE7RUM5Qk47QUFDRjs7QURpQ0E7RUFDSTtJQUNJLGVBQUE7SUFDQSxrQkFBQTtJQUNBLGVBQUE7SUFDQSxRQUFBO0lBQ0EsMkJBQUE7RUMvQk47RURrQ007SUFDSSxrQkFBQTtJQUNBLGFBQUE7SUFDQSxtQkFBQTtJQUNBLHVCQUFBO0lBQ0EsU0FBQTtJQUNBLFFBQUE7SUFDQSwyQkFBQTtJQUNBLDJCQUFBO0lBQ0EsaUJBQUE7SUFDQSxXQUFBO0lBQ0EsZUFBQTtJQUNBLGVBQUE7RUNoQ1Y7RURvQ007SUFDSSxZQUFBO0lBQ0EsZ0JBQUE7RUNsQ1Y7O0VEc0NFO0lBQ0ksZ0JBQUE7SUFDQSxZQUFBO0lBQ0Esa0JBQUE7SUFDQSxTQUFBO0lBQ0EsUUFBQTtJQUNBLDJCQUFBO0lBQ0EsbUJBQUE7SUFDQSxrQkFBQTtFQ25DTjtBQUNGOztBRHNDQTtFQUNJO0lBQ0ksZUFBQTtJQUNBLGtCQUFBO0lBQ0EsZUFBQTtJQUNBLFFBQUE7SUFDQSwyQkFBQTtFQ3BDTjtFRHVDTTtJQUNJLGtCQUFBO0lBQ0EsYUFBQTtJQUNBLG1CQUFBO0lBQ0EsdUJBQUE7SUFDQSxTQUFBO0lBQ0EsUUFBQTtJQUNBLDJCQUFBO0lBQ0EsMkJBQUE7SUFDQSxlQUFBO0lBQ0EsV0FBQTtJQUNBLGVBQUE7SUFDQSxlQUFBO0VDckNWO0VEeUNNO0lBQ0ksWUFBQTtJQUNBLGdCQUFBO0VDdkNWOztFRDJDRTtJQUNJLGdCQUFBO0lBQ0EsWUFBQTtJQUNBLGtCQUFBO0lBQ0EsU0FBQTtJQUNBLFFBQUE7SUFDQSwyQkFBQTtJQUNBLG1CQUFBO0lBQ0Esb0JBQUE7RUN4Q047QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuJGNvbG9yX2xlZnQ6IHJnYigzNCwgMzQsIDM0LC41KTtcclxuJGNvbG9yX3JpZ2h0OiByZ2IoMzQsIDM0LCAzNCwuNSk7XHJcbiRob3Zlcl9zdGFuZ2E6NzUlO1xyXG4kaG92ZXJfZHJlYXB0YToyNSU7XHJcbi5zZWN7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG4udGl0bGV7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbn1cclxuLnNpdGV7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgIFxyXG4gICAgXHJcbiAgICBidXR0b257XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgYm90dG9tOiAtOTAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgY29sb3I6IHJnYigwLCAwLCAwKTtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLHNhbnMtc2VyaWY7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB3aWR0aDogMTVyZW07XHJcbiAgICAgICAgcGFkZGluZzogMS4ycmVtO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1LCAuMSk7XHJcbiAgICB9XHJcbiAgICBidXR0b246aG92ZXJ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUsIC41KTtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgXHJcbiAgICB9XHJcbiAgICBhe1xyXG4gICAgICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICB9XHJcblxyXG59XHJcbmgxe1xyXG4gICAgZm9udC1zaXplOiAzcmVtO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdG9wOiAxMCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcbmgyIHtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdG9wOiAzMCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgbWFyZ2luOiAwIDElO1xyXG59XHJcblxyXG5cclxuLmNvbnR7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6ICMzMzM7XHJcbiBcclxuICAgIFxyXG5cclxufVxyXG4uc3BsaXR7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4uc3BsaXQuc3Rhbmdhe1xyXG5sZWZ0OiAwO1xyXG4vLyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjE3ZGVnLCByZ2JhKDI1NSwwLDAsLjgpLCByZ2JhKDI1NSwgMCwgMCwgMCkgNzAuNzElKSxcclxuLy8gbGluZWFyLWdyYWRpZW50KDEyN2RlZywgcmdiYSgxNzcsIDI5LCAyOSwgMC44KSwgcmdiYSgyNTUsIDAsIDAsIDApIDcwLjcxJSksXHJcbi8vIGxpbmVhci1ncmFkaWVudCgzMzZkZWcsIHJnYmEoMjIsIDMsIDMsIDAuOCksIHJnYmEoMjU1LCAwLCAwLCAwKSA3MC43MSUpOztcclxuYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltZy9zdGFuZ2EuanBnJyk7XHJcbmJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbmJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbmNvbG9yOiB3aGl0ZTtcclxufVxyXG4uc3BsaXQuc3RhbmdhOjpiZWZvcmV7XHJcbiAgICBjb250ZW50OicnIDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yX2xlZnQ7XHJcbn1cclxuLnNwbGl0LmRyZWFwdGF7XHJcbnJpZ2h0OiAwO1xyXG5iYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1nL2RyZWFwdGEuanBnJyk7XHJcbmJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbmJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbi8vIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyMTdkZWcsIHJnYmEoMjU1LDAsMCwuOCksIHJnYmEoMjU1LCAwLCAwLCAwKSA3MC43MSUpLFxyXG4vLyBsaW5lYXItZ3JhZGllbnQoMTI3ZGVnLCByZ2JhKDE3NywgMjksIDI5LCAwLjgpLCByZ2JhKDI1NSwgMCwgMCwgMCkgNzAuNzElKSxcclxuLy8gbGluZWFyLWdyYWRpZW50KDMzNmRlZywgcmdiYSgyMiwgMywgMywgMC44KSwgcmdiYSgyNTUsIDAsIDAsIDApIDcwLjcxJSk7XHJcblxyXG5cclxuY29sb3I6IHdoaXRlO1xyXG59XHJcbi5zcGxpdC5kcmVhcHRhOjpiZWZvcmV7XHJcbiAgICBjb250ZW50OicnIDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yX3JpZ2h0O1xyXG59XHJcbi5zcGxpdC5zdGFuZ2EsIFxyXG4uc3BsaXQuZHJlYXB0YSwgXHJcbi5zcGxpdC5zdGFuZ2E6OmJlZm9yZSxcclxuLnNwbGl0LmRyZWFwdGE6OmJlZm9yZXtcclxuICAgIHRyYW5zaXRpb246IGFsbCAxMDAwbXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5ob3Zlcl9zdGFuZ2EgLnN0YW5nYXtcclxuICAgIHdpZHRoOiAkaG92ZXJfc3RhbmdhO1xyXG4gICAgXHJcbn1cclxuLmhvdmVyX3N0YW5nYSAuZHJlYXB0YXtcclxuICAgXHJcbiAgICB3aWR0aDogJGhvdmVyX2RyZWFwdGE7XHJcbn1cclxuLmhvdmVyX2RyZWFwdGEgLmRyZWFwdGF7XHJcbiAgICBcclxuICAgIHdpZHRoOiAkaG92ZXJfc3RhbmdhO1xyXG59XHJcbi5ob3Zlcl9kcmVhcHRhIC5zdGFuZ2F7XHJcbiAgICBcclxuICAgIHdpZHRoOiAkaG92ZXJfZHJlYXB0YTtcclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiAxMjAxcHgpIHtcclxuICAgIC5zaXRle1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogOSU7XHJcbiAgICAgICAgdG9wOiAyJTsgICAgICAgIFxyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMiUgKTtcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICBidXR0b257XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgdG9wOiAyMCU7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAlKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUgKTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyZW07XHJcbiAgICAgICAgICAgIHdpZHRoOiAxOHJlbTtcclxuICAgICAgICAgICAgcGFkZGluZzogMXJlbTtcclxuICAgICAgICAgICAgbWFyZ2luOiAxLjJlbSAwIDtcclxuICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAgIGF7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgIH1cclxuICAgIGgxe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgIHRvcDogMTAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC40ZW07XHJcbiAgICAgICBcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogOTkycHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogMTIwMHB4KSB7XHJcbiAgICAuc2l0ZXtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwJTtcclxuICAgICAgICB0b3A6IDIlOyAgICAgICAgXHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yJSApO1xyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIGJ1dHRvbntcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICB0b3A6IDIwJTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMCUpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSApO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICAgICAgd2lkdGg6IDExcmVtO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwLjlyZW07XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEuM2VtO1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICAgYXtcclxuICAgICAgICAgICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgfVxyXG4gICAgaDF7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjdlbTtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICB0b3A6IDEwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjJlbTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogNjY4cHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogOTkxcHgpIHtcclxuICAgIC5zaXRle1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTMlO1xyXG4gICAgICAgIHRvcDogMiU7ICAgICAgICBcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIlICk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgYnV0dG9ue1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgIHRvcDogMjAlO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwJSk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlICk7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgICAgICB3aWR0aDogMTFyZW07XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuOXJlbTtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMS4zZW07XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICBcclxuICAgICAgICBhe1xyXG4gICAgICAgICAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICB9XHJcbiAgICBoMXtcclxuICAgICAgICBmb250LXNpemU6IDEuN2VtO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgIHRvcDogMTAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEuMmVtO1xyXG4gICAgfVxyXG5cclxuICB9XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDQ4MnB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDY2N3B4KSB7XHJcbiAgICAuc2l0ZXtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE1JTtcclxuICAgICAgICB0b3A6IDIwJTsgICAgICAgIFxyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAlICk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgYnV0dG9ue1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgIHRvcDogMTAlO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwJSk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlICk7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgICAgICAgICB3aWR0aDogMTByZW07XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuNnJlbTtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMmVtO1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICAgYXtcclxuICAgICAgICAgICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgIH1cclxuICAgIGgxe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgdG9wOiAxMCU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMS4yZW07XHJcbiAgICB9XHJcblxyXG4gIH1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogMzAxcHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogNDgxcHgpIGFuZCAob3JpZW50YXRpb246cG9ydHJhaXQpIHtcclxuICAgIC5zaXRle1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHggMDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTUlO1xyXG4gICAgICAgIHRvcDogMjAlOyAgICAgICAgXHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMCUgKTtcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICBidXR0b257XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgdG9wOiAxMCU7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAlKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUgKTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICAgICAgICAgIHdpZHRoOiA4cmVtO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDJlbTtcclxuICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAgIGF7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43ZW07XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICB9XHJcbiAgICBoMXtcclxuICAgICAgICBmb250LXNpemU6IDEuM2VtO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgIHRvcDogMTAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFlbTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMwMHB4KSB7XHJcbiAgICAuc2l0ZXtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE1JTtcclxuICAgICAgICB0b3A6IDIwJTsgICAgICAgIFxyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAlICk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgYnV0dG9ue1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgIHRvcDogMTAlO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwJSk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlICk7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgd2lkdGg6IDdyZW07XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuNXJlbTtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMmVtO1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICAgYXtcclxuICAgICAgICAgICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjZlbTtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgIH1cclxuICAgIGgxe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgdG9wOiAxMCU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMC40ZW07XHJcbiAgICB9XHJcbn0iLCIqIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uc2VjIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGhlaWdodDogMTAwdmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbjogMDtcbn1cblxuLnRpdGxlIHtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbn1cblxuLnNpdGUge1xuICBwYWRkaW5nOiAzMHB4IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXRvcDogNSU7XG59XG4uc2l0ZSBidXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBsZWZ0OiA1MCU7XG4gIGJvdHRvbTogLTkwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBibGFjaztcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB3aWR0aDogMTVyZW07XG4gIHBhZGRpbmc6IDEuMnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xufVxuLnNpdGUgYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xufVxuLnNpdGUgYSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuaDEge1xuICBmb250LXNpemU6IDNyZW07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogMTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbmgyIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogMzAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG1hcmdpbjogMCAxJTtcbn1cblxuLmNvbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICMzMzM7XG59XG5cbi5zcGxpdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uc3BsaXQuc3RhbmdhIHtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9pbWcvc3RhbmdhLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uc3BsaXQuc3RhbmdhOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzQsIDM0LCAzNCwgMC41KTtcbn1cblxuLnNwbGl0LmRyZWFwdGEge1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9pbWcvZHJlYXB0YS5qcGdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnNwbGl0LmRyZWFwdGE6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzNCwgMzQsIDM0LCAwLjUpO1xufVxuXG4uc3BsaXQuc3RhbmdhLFxuLnNwbGl0LmRyZWFwdGEsXG4uc3BsaXQuc3RhbmdhOjpiZWZvcmUsXG4uc3BsaXQuZHJlYXB0YTo6YmVmb3JlIHtcbiAgdHJhbnNpdGlvbjogYWxsIDEwMDBtcyBlYXNlLWluLW91dDtcbn1cblxuLmhvdmVyX3N0YW5nYSAuc3RhbmdhIHtcbiAgd2lkdGg6IDc1JTtcbn1cblxuLmhvdmVyX3N0YW5nYSAuZHJlYXB0YSB7XG4gIHdpZHRoOiAyNSU7XG59XG5cbi5ob3Zlcl9kcmVhcHRhIC5kcmVhcHRhIHtcbiAgd2lkdGg6IDc1JTtcbn1cblxuLmhvdmVyX2RyZWFwdGEgLnN0YW5nYSB7XG4gIHdpZHRoOiAyNSU7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDEyMDFweCkge1xuICAuc2l0ZSB7XG4gICAgcGFkZGluZzogMTBweCAwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tdG9wOiA5JTtcbiAgICB0b3A6IDIlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMiUpO1xuICB9XG4gIC5zaXRlIGJ1dHRvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdG9wOiAyMCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMCUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICBmb250LXNpemU6IDJlbTtcbiAgICB3aWR0aDogMThyZW07XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBtYXJnaW46IDEuMmVtIDA7XG4gIH1cbiAgLnNpdGUgYSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMC45ZW07XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG5cbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRvcDogMTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG1hcmdpbi10b3A6IDAuNGVtO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiAxMjAwcHgpIHtcbiAgLnNpdGUge1xuICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLXRvcDogMTAlO1xuICAgIHRvcDogMiU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yJSk7XG4gIH1cbiAgLnNpdGUgYnV0dG9uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0b3A6IDIwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwJSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIHdpZHRoOiAxMXJlbTtcbiAgICBwYWRkaW5nOiAwLjlyZW07XG4gICAgbWFyZ2luLXRvcDogMS4zZW07XG4gIH1cbiAgLnNpdGUgYSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG5cbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogMS43ZW07XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdG9wOiAxMCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgbWFyZ2luLWJvdHRvbTogMS4yZW07XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDY2OHB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDk5MXB4KSB7XG4gIC5zaXRlIHtcbiAgICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi10b3A6IDEzJTtcbiAgICB0b3A6IDIlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMiUpO1xuICB9XG4gIC5zaXRlIGJ1dHRvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdG9wOiAyMCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMCUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICB3aWR0aDogMTFyZW07XG4gICAgcGFkZGluZzogMC45cmVtO1xuICAgIG1hcmdpbi10b3A6IDEuM2VtO1xuICB9XG4gIC5zaXRlIGEge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDAuOGVtO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuXG4gIGgxIHtcbiAgICBmb250LXNpemU6IDEuN2VtO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRvcDogMTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG1hcmdpbi1ib3R0b206IDEuMmVtO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiA0ODJweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA2NjdweCkge1xuICAuc2l0ZSB7XG4gICAgcGFkZGluZzogMjBweCAwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tdG9wOiAxNSU7XG4gICAgdG9wOiAyMCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMCUpO1xuICB9XG4gIC5zaXRlIGJ1dHRvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdG9wOiAxMCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMCUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICB3aWR0aDogMTByZW07XG4gICAgcGFkZGluZzogMC42cmVtO1xuICAgIG1hcmdpbi10b3A6IDJlbTtcbiAgfVxuICAuc2l0ZSBhIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAwLjhlbTtcbiAgfVxuXG4gIGgxIHtcbiAgICBmb250LXNpemU6IDEuNWVtO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRvcDogMTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG1hcmdpbi1ib3R0b206IDEuMmVtO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiAzMDFweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA0ODFweCkgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgLnNpdGUge1xuICAgIHBhZGRpbmc6IDIwcHggMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLXRvcDogMTUlO1xuICAgIHRvcDogMjAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAlKTtcbiAgfVxuICAuc2l0ZSBidXR0b24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbGVmdDogNTAlO1xuICAgIHRvcDogMTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAlKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgd2lkdGg6IDhyZW07XG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgIG1hcmdpbi10b3A6IDJlbTtcbiAgfVxuICAuc2l0ZSBhIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAwLjdlbTtcbiAgfVxuXG4gIGgxIHtcbiAgICBmb250LXNpemU6IDEuM2VtO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRvcDogMTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMDBweCkge1xuICAuc2l0ZSB7XG4gICAgcGFkZGluZzogMjBweCAwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tdG9wOiAxNSU7XG4gICAgdG9wOiAyMCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMCUpO1xuICB9XG4gIC5zaXRlIGJ1dHRvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdG9wOiAxMCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMCUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgd2lkdGg6IDdyZW07XG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgIG1hcmdpbi10b3A6IDJlbTtcbiAgfVxuICAuc2l0ZSBhIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAwLjZlbTtcbiAgfVxuXG4gIGgxIHtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRvcDogMTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG1hcmdpbi1ib3R0b206IDAuNGVtO1xuICB9XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ProductsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-products',
          templateUrl: './products.component.html',
          styleUrls: ['./products.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/products/web/aplicatii/aplicatii.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/components/products/web/aplicatii/aplicatii.component.ts ***!
    \**************************************************************************/

  /*! exports provided: AplicatiiComponent */

  /***/
  function srcAppComponentsProductsWebAplicatiiAplicatiiComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AplicatiiComponent", function () {
      return AplicatiiComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AplicatiiComponent = /*#__PURE__*/function () {
      function AplicatiiComponent() {
        _classCallCheck(this, AplicatiiComponent);
      }

      _createClass(AplicatiiComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AplicatiiComponent;
    }();

    AplicatiiComponent.??fac = function AplicatiiComponent_Factory(t) {
      return new (t || AplicatiiComponent)();
    };

    AplicatiiComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: AplicatiiComponent,
      selectors: [["app-aplicatii"]],
      decls: 44,
      vars: 0,
      consts: [[1, "container1"], [1, "card"], [1, "card__image-container"], ["src", "/assets/img/site-uri-responsive.jpg", "alt", "", 1, "card__image"], ["viewBox", "0 0 800 500", 1, "card__svg"], ["d", "M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500", "stroke", "transparent", "fill", "#333"], ["d", "M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400", "stroke", "pink", "stroke-width", "3", "fill", "transparent", 1, "card__line"], [1, "card__content"], [1, "card__title", "text-center"], [1, "text-center"], ["href", ""]],
      template: function AplicatiiComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "svg", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "path", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "path", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "h1", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Portofoliu Standard");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "10-25 pagini");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Fara traducere");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Fara animatii");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Pret: De la 300 de Euro");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "button");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Demo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "svg", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "path", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "path", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "h1", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Portofoliu Standard");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "h2", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Site de prezentare Standard");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "10-25 pagini");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "Fara traducere");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "Fara animatii");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "Pret: De la 300 de Euro");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "button");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "Demo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  line-height: 1.5;\n  font-family: \"Open Sans\", sans-serif;\n}\n\nbutton[_ngcontent-%COMP%] {\n  position: relative;\n  left: 50%;\n  top: 10%;\n  transform: translateX(-50%) translateY(-10%);\n}\n\nbutton[_ngcontent-%COMP%] {\n  background: #333;\n  color: #ccc;\n  width: 200px;\n  height: 60px;\n  border: 0;\n  font-size: 18px;\n  border-radius: 4px;\n  font-family: \"Raleway\", sans-serif;\n  transition: 0.6s;\n  overflow: hidden;\n}\n\nbutton[_ngcontent-%COMP%]:focus {\n  outline: 0;\n}\n\nbutton[_ngcontent-%COMP%]:before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  background: rgba(255, 255, 255, 0.5);\n  width: 60px;\n  height: 100%;\n  left: 0;\n  top: 0;\n  opacity: 0.5;\n  filter: blur(30px);\n  transform: translateX(-100px) skewX(-15deg);\n}\n\nbutton[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  background: rgba(255, 255, 255, 0.2);\n  width: 30px;\n  height: 100%;\n  left: 30px;\n  top: 0;\n  opacity: 0;\n  filter: blur(5px);\n  transform: translateX(-100px) skewX(-15deg);\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n  background: #e71616;\n  cursor: pointer;\n}\n\nbutton[_ngcontent-%COMP%]:hover:before {\n  transform: translateX(300px) skewX(-15deg);\n  opacity: 0.6;\n  transition: 0.7s;\n}\n\nbutton[_ngcontent-%COMP%]:hover:after {\n  transform: translateX(300px) skewX(-15deg);\n  opacity: 1;\n  transition: 0.7s;\n}\n\na[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n  letter-spacing: 2px;\n  font-family: sans-serif;\n  font-weight: 400;\n  padding: 30px;\n  color: white;\n  text-decoration: none;\n}\n\nimg[_ngcontent-%COMP%] {\n  min-width: 100vw;\n  max-width: 100%;\n  min-height: 40vh;\n}\n\n.container1[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 100vh;\n  min-width: 100vw;\n  background: #444;\n}\n\n.card[_ngcontent-%COMP%] {\n  position: relative;\n  background: #333;\n  min-width: 100vw;\n  min-height: 100vh;\n  border-radius: 6px;\n  padding: 2rem;\n  color: #aaa;\n  box-shadow: 0 0.25rem 0.25rem rgba(0, 0, 0, 0.2), 0 0 1rem rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n}\n\n.card__image-container[_ngcontent-%COMP%] {\n  margin: -2rem -2rem 1rem -2rem;\n}\n\n.card__line[_ngcontent-%COMP%] {\n  opacity: 0;\n  -webkit-animation: LineFadeIn 0.8s 0.8s forwards ease-in;\n          animation: LineFadeIn 0.8s 0.8s forwards ease-in;\n}\n\n.card__image[_ngcontent-%COMP%] {\n  opacity: 0;\n  -webkit-animation: ImageFadeIn 0.8s 1.4s forwards;\n          animation: ImageFadeIn 0.8s 1.4s forwards;\n}\n\n.card__title[_ngcontent-%COMP%] {\n  color: white;\n  margin-top: 0;\n  font-weight: 800;\n  letter-spacing: 0.01em;\n  font-size: 3em;\n  color: red;\n}\n\n.card__content[_ngcontent-%COMP%] {\n  margin-top: 3rem;\n  opacity: 0;\n  -webkit-animation: ContentFadeIn 0.8s 1.6s forwards;\n          animation: ContentFadeIn 0.8s 1.6s forwards;\n}\n\n.card__svg[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 215px;\n}\n\np[_ngcontent-%COMP%] {\n  font-size: 2em;\n  color: white;\n}\n\n@-webkit-keyframes LineFadeIn {\n  0% {\n    opacity: 0;\n    d: path(\"M 0 300 Q 0 300 0 300 Q 0 300 0 300 C 0 300 0 300 0 300 Q 0 300 0 300 \");\n    stroke: #fff;\n  }\n  50% {\n    opacity: 1;\n    d: path(\"M 0 300 Q 50 300 100 300 Q 250 300 350 300 C 350 300 500 300 650 300 Q 750 300 800 300\");\n    stroke: #ff2323;\n  }\n  100% {\n    opacity: 1;\n    d: path(\"M -2 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 802 400\");\n    stroke: #ff0000;\n  }\n}\n\n@keyframes LineFadeIn {\n  0% {\n    opacity: 0;\n    d: path(\"M 0 300 Q 0 300 0 300 Q 0 300 0 300 C 0 300 0 300 0 300 Q 0 300 0 300 \");\n    stroke: #fff;\n  }\n  50% {\n    opacity: 1;\n    d: path(\"M 0 300 Q 50 300 100 300 Q 250 300 350 300 C 350 300 500 300 650 300 Q 750 300 800 300\");\n    stroke: #ff2323;\n  }\n  100% {\n    opacity: 1;\n    d: path(\"M -2 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 802 400\");\n    stroke: #ff0000;\n  }\n}\n\n@-webkit-keyframes ContentFadeIn {\n  0% {\n    transform: translateY(-1rem);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n\n@keyframes ContentFadeIn {\n  0% {\n    transform: translateY(-1rem);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes ImageFadeIn {\n  0% {\n    transform: translate(-0.5rem, -0.5rem) scale(1.05);\n    opacity: 0;\n    filter: blur(2px);\n  }\n  50% {\n    opacity: 1;\n    filter: blur(2px);\n  }\n  100% {\n    transform: translateY(0) scale(1);\n    opacity: 1;\n    filter: blur(0);\n  }\n}\n\n@keyframes ImageFadeIn {\n  0% {\n    transform: translate(-0.5rem, -0.5rem) scale(1.05);\n    opacity: 0;\n    filter: blur(2px);\n  }\n  50% {\n    opacity: 1;\n    filter: blur(2px);\n  }\n  100% {\n    transform: translateY(0) scale(1);\n    opacity: 1;\n    filter: blur(0);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy93ZWIvYXBsaWNhdGlpL0M6XFxVc2Vyc1xcYW5kcmVcXERlc2t0b3BcXFBvcnRvZm9saXVBbmd1bGFyXFxQb3J0b2ZvbGl1QW5kcmVpL3NyY1xcYXBwXFxjb21wb25lbnRzXFxwcm9kdWN0c1xcd2ViXFxhcGxpY2F0aWlcXGFwbGljYXRpaS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy93ZWIvYXBsaWNhdGlpL2FwbGljYXRpaS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQ0FBQTtBQ0NKOztBRFlFO0VBUE0sa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLDRDQUFBO0FDRFI7O0FEYUU7RUFFQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNYRjs7QURZRTtFQUNFLFVBQUE7QUNWSjs7QURZRTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQ0FBQTtBQ1ZKOztBRFlFO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLDJDQUFBO0FDVko7O0FEWUU7RUFDRSxtQkFBQTtFQUNBLGVBQUE7QUNWSjs7QURXSTtFQUNFLDBDQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDVE47O0FEV0k7RUFDRSwwQ0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQ1ROOztBRGFFO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FDVko7O0FEY0U7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ1hKOztBRGVFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNaSjs7QURlRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLDZFQUFBO0VBRUEsZ0JBQUE7QUNiSjs7QURlSTtFQUNFLDhCQUFBO0FDYk47O0FEZ0JJO0VBQ0EsVUFBQTtFQUNBLHdEQUFBO1VBQUEsZ0RBQUE7QUNkSjs7QURpQkk7RUFDRSxVQUFBO0VBQ0EsaURBQUE7VUFBQSx5Q0FBQTtBQ2ZOOztBRGtCSTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0FDaEJOOztBRG1CSTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLG1EQUFBO1VBQUEsMkNBQUE7QUNqQk47O0FEcUJJO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtBQ25CTjs7QURzQkU7RUFDRSxjQUFBO0VBQ0EsWUFBQTtBQ25CSjs7QURzQkU7RUFDRTtJQUFLLFVBQUE7SUFBWSxpRkFBQTtJQUFtRixZQUFBO0VDaEJ0RztFRGlCRTtJQUFNLFVBQUE7SUFBWSxpR0FBQTtJQUFtRyxlQUFBO0VDWnZIO0VEYUU7SUFBTyxVQUFBO0lBQVksa0dBQUE7SUFBb0csZUFBQTtFQ1J6SDtBQUNGOztBRElFO0VBQ0U7SUFBSyxVQUFBO0lBQVksaUZBQUE7SUFBbUYsWUFBQTtFQ2hCdEc7RURpQkU7SUFBTSxVQUFBO0lBQVksaUdBQUE7SUFBbUcsZUFBQTtFQ1p2SDtFRGFFO0lBQU8sVUFBQTtJQUFZLGtHQUFBO0lBQW9HLGVBQUE7RUNSekg7QUFDRjs7QURVRTtFQUNFO0lBQUssNEJBQUE7SUFBOEIsVUFBQTtFQ05yQztFRE9FO0lBQU8sd0JBQUE7SUFBMEIsVUFBQTtFQ0huQztBQUNGOztBREFFO0VBQ0U7SUFBSyw0QkFBQTtJQUE4QixVQUFBO0VDTnJDO0VET0U7SUFBTyx3QkFBQTtJQUEwQixVQUFBO0VDSG5DO0FBQ0Y7O0FES0U7RUFDRTtJQUFLLGtEQUFBO0lBQWtELFVBQUE7SUFBWSxpQkFBQTtFQ0FyRTtFRENFO0lBQU0sVUFBQTtJQUFZLGlCQUFBO0VDR3BCO0VERkU7SUFBTyxpQ0FBQTtJQUFxQyxVQUFBO0lBQVksZUFBQTtFQ08xRDtBQUNGOztBRFhFO0VBQ0U7SUFBSyxrREFBQTtJQUFrRCxVQUFBO0lBQVksaUJBQUE7RUNBckU7RURDRTtJQUFNLFVBQUE7SUFBWSxpQkFBQTtFQ0dwQjtFREZFO0lBQU8saUNBQUE7SUFBcUMsVUFBQTtJQUFZLGVBQUE7RUNPMUQ7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdHMvd2ViL2FwbGljYXRpaS9hcGxpY2F0aWkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuICBAbWl4aW4gY2VudGVyKCRleHRlbmQ6IHRydWUpIHtcclxuICAgIEBpZiAkZXh0ZW5kIHtcclxuICAgICAgICBAZXh0ZW5kICVjZW50ZXI7XHJcbiAgICB9IEBlbHNlIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgIHRvcDogMTAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC0xMCUpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAlY2VudGVyIHtcclxuICAgIEBpbmNsdWRlIGNlbnRlcigkZXh0ZW5kOiBmYWxzZSk7XHJcbiAgfVxyXG4gIFxyXG4gIC8vIGJvZHl7XHJcbiAgLy8gYmFja2dyb3VuZDogIzExMTtcclxuICAvLyB9XHJcbiAgXHJcbiAgYnV0dG9ue1xyXG4gIEBpbmNsdWRlIGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiAjMzMzO1xyXG4gIGNvbG9yOiAjY2NjO1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcclxuICB0cmFuc2l0aW9uOiAuNnM7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAmOmZvY3Vze1xyXG4gICAgb3V0bGluZTogMDtcclxuICB9XHJcbiAgJjpiZWZvcmV7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjUpO1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgb3BhY2l0eTogLjU7XHJcbiAgICBmaWx0ZXI6IGJsdXIoMzBweCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMHB4KSAgc2tld1goLTE1ZGVnKTtcclxuICB9XHJcbiAgJjphZnRlcntcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMik7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGxlZnQ6IDMwcHg7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgZmlsdGVyOiBibHVyKDVweCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMHB4KSBza2V3WCgtMTVkZWcpO1xyXG4gIH1cclxuICAmOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZDogI2U3MTYxNjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICY6YmVmb3Jle1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMzAwcHgpICBza2V3WCgtMTVkZWcpOyAgXHJcbiAgICAgIG9wYWNpdHk6IDAuNjtcclxuICAgICAgdHJhbnNpdGlvbjogLjdzO1xyXG4gICAgfVxyXG4gICAgJjphZnRlcntcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDMwMHB4KSBza2V3WCgtMTVkZWcpOyAgXHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIHRyYW5zaXRpb246IC43cztcclxuICAgIH1cclxuICB9XHJcbiAgfVxyXG4gIGF7XHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgIFxyXG4gIH0gXHJcbiAgXHJcbiAgaW1nIHtcclxuICAgIG1pbi13aWR0aDogMTAwdnc7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiA0MHZoO1xyXG4gICAgXHJcbiAgfVxyXG5cclxuICAuY29udGFpbmVyMSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICBtaW4td2lkdGg6IDEwMHZ3O1xyXG4gICAgYmFja2dyb3VuZDogIzQ0NDtcclxuICB9XHJcbiAgXHJcbiAgLmNhcmQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZDogIzMzMztcclxuICAgIG1pbi13aWR0aDogMTAwdnc7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICBjb2xvcjogI2FhYTtcclxuICAgIGJveC1zaGFkb3c6IDAgLjI1cmVtIC4yNXJlbSByZ2JhKDAsMCwwLDAuMiksXHJcbiAgICAgIDAgMCAxcmVtIHJnYmEoMCwwLDAsMC4yKTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBcclxuICAgICZfX2ltYWdlLWNvbnRhaW5lciB7XHJcbiAgICAgIG1hcmdpbjogLTJyZW0gLTJyZW0gMXJlbSAtMnJlbTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgJl9fbGluZSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgYW5pbWF0aW9uOiBMaW5lRmFkZUluIC44cyAuOHMgZm9yd2FyZHMgZWFzZS1pbjtcclxuICAgIH1cclxuICBcclxuICAgICZfX2ltYWdlIHtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgYW5pbWF0aW9uOiBJbWFnZUZhZGVJbiAuOHMgMS40cyBmb3J3YXJkcztcclxuICAgIH1cclxuICBcclxuICAgICZfX3RpdGxlIHtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xyXG4gICAgICBmb250LXNpemU6IDNlbTtcclxuICAgICAgY29sb3I6IHJlZDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgJl9fY29udGVudCB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDNyZW07XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIGFuaW1hdGlvbjogQ29udGVudEZhZGVJbiAuOHMgMS42cyBmb3J3YXJkcztcclxuICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgICZfX3N2ZyB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgdG9wOiAyMTVweDtcclxuICAgIH1cclxuICB9XHJcbiAgcHtcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICBcclxuICBAa2V5ZnJhbWVzIExpbmVGYWRlSW4ge1xyXG4gICAgMCUgeyBvcGFjaXR5OiAwOyBkOiBwYXRoKFwiTSAwIDMwMCBRIDAgMzAwIDAgMzAwIFEgMCAzMDAgMCAzMDAgQyAwIDMwMCAwIDMwMCAwIDMwMCBRIDAgMzAwIDAgMzAwIFwiKTsgc3Ryb2tlOiAjZmZmOyB9XHJcbiAgICA1MCUgeyBvcGFjaXR5OiAxOyBkOiBwYXRoKFwiTSAwIDMwMCBRIDUwIDMwMCAxMDAgMzAwIFEgMjUwIDMwMCAzNTAgMzAwIEMgMzUwIDMwMCA1MDAgMzAwIDY1MCAzMDAgUSA3NTAgMzAwIDgwMCAzMDBcIik7IHN0cm9rZTogI2ZmMjMyMzsgfVxyXG4gICAgMTAwJSB7IG9wYWNpdHk6IDE7IGQ6IHBhdGgoXCJNIC0yIDEwMCBRIDUwIDIwMCAxMDAgMjUwIFEgMjUwIDQwMCAzNTAgMzAwIEMgNDAwIDI1MCA1NTAgMTUwIDY1MCAzMDAgUSA3NTAgNDUwIDgwMiA0MDBcIik7IHN0cm9rZTogI2ZmMDAwMDsgfVxyXG4gIH1cclxuICBcclxuICBAa2V5ZnJhbWVzIENvbnRlbnRGYWRlSW4ge1xyXG4gICAgMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFyZW0pOyBvcGFjaXR5OiAwOyB9XHJcbiAgICAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyBvcGFjaXR5OiAxOyB9XHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgSW1hZ2VGYWRlSW4ge1xyXG4gICAgMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtLjVyZW0sIC0uNXJlbSkgc2NhbGUoMS4wNSk7IG9wYWNpdHk6IDA7IGZpbHRlcjogYmx1cigycHgpOyB9XHJcbiAgICA1MCUgeyBvcGFjaXR5OiAxOyBmaWx0ZXI6IGJsdXIoMnB4KTsgfVxyXG4gICAgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSBzY2FsZSgxLjApOyBvcGFjaXR5OiAxOyBmaWx0ZXI6IGJsdXIoMCk7IH1cclxuICB9IiwiKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xufVxuXG5idXR0b24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiAxMCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC0xMCUpO1xufVxuXG5idXR0b24ge1xuICBiYWNrZ3JvdW5kOiAjMzMzO1xuICBjb2xvcjogI2NjYztcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIGJvcmRlcjogMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlJhbGV3YXlcIiwgc2Fucy1zZXJpZjtcbiAgdHJhbnNpdGlvbjogMC42cztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbmJ1dHRvbjpmb2N1cyB7XG4gIG91dGxpbmU6IDA7XG59XG5idXR0b246YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIG9wYWNpdHk6IDAuNTtcbiAgZmlsdGVyOiBibHVyKDMwcHgpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMHB4KSBza2V3WCgtMTVkZWcpO1xufVxuYnV0dG9uOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBsZWZ0OiAzMHB4O1xuICB0b3A6IDA7XG4gIG9wYWNpdHk6IDA7XG4gIGZpbHRlcjogYmx1cig1cHgpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMHB4KSBza2V3WCgtMTVkZWcpO1xufVxuYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2U3MTYxNjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuYnV0dG9uOmhvdmVyOmJlZm9yZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzMDBweCkgc2tld1goLTE1ZGVnKTtcbiAgb3BhY2l0eTogMC42O1xuICB0cmFuc2l0aW9uOiAwLjdzO1xufVxuYnV0dG9uOmhvdmVyOmFmdGVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDMwMHB4KSBza2V3WCgtMTVkZWcpO1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2l0aW9uOiAwLjdzO1xufVxuXG5hIHtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5pbWcge1xuICBtaW4td2lkdGg6IDEwMHZ3O1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDQwdmg7XG59XG5cbi5jb250YWluZXIxIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBtaW4td2lkdGg6IDEwMHZ3O1xuICBiYWNrZ3JvdW5kOiAjNDQ0O1xufVxuXG4uY2FyZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogIzMzMztcbiAgbWluLXdpZHRoOiAxMDB2dztcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgcGFkZGluZzogMnJlbTtcbiAgY29sb3I6ICNhYWE7XG4gIGJveC1zaGFkb3c6IDAgMC4yNXJlbSAwLjI1cmVtIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAwIDFyZW0gcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmNhcmRfX2ltYWdlLWNvbnRhaW5lciB7XG4gIG1hcmdpbjogLTJyZW0gLTJyZW0gMXJlbSAtMnJlbTtcbn1cbi5jYXJkX19saW5lIHtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiBMaW5lRmFkZUluIDAuOHMgMC44cyBmb3J3YXJkcyBlYXNlLWluO1xufVxuLmNhcmRfX2ltYWdlIHtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiBJbWFnZUZhZGVJbiAwLjhzIDEuNHMgZm9yd2FyZHM7XG59XG4uY2FyZF9fdGl0bGUge1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi10b3A6IDA7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gIGZvbnQtc2l6ZTogM2VtO1xuICBjb2xvcjogcmVkO1xufVxuLmNhcmRfX2NvbnRlbnQge1xuICBtYXJnaW4tdG9wOiAzcmVtO1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IENvbnRlbnRGYWRlSW4gMC44cyAxLjZzIGZvcndhcmRzO1xufVxuLmNhcmRfX3N2ZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAyMTVweDtcbn1cblxucCB7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbkBrZXlmcmFtZXMgTGluZUZhZGVJbiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGQ6IHBhdGgoXCJNIDAgMzAwIFEgMCAzMDAgMCAzMDAgUSAwIDMwMCAwIDMwMCBDIDAgMzAwIDAgMzAwIDAgMzAwIFEgMCAzMDAgMCAzMDAgXCIpO1xuICAgIHN0cm9rZTogI2ZmZjtcbiAgfVxuICA1MCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgZDogcGF0aChcIk0gMCAzMDAgUSA1MCAzMDAgMTAwIDMwMCBRIDI1MCAzMDAgMzUwIDMwMCBDIDM1MCAzMDAgNTAwIDMwMCA2NTAgMzAwIFEgNzUwIDMwMCA4MDAgMzAwXCIpO1xuICAgIHN0cm9rZTogI2ZmMjMyMztcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGQ6IHBhdGgoXCJNIC0yIDEwMCBRIDUwIDIwMCAxMDAgMjUwIFEgMjUwIDQwMCAzNTAgMzAwIEMgNDAwIDI1MCA1NTAgMTUwIDY1MCAzMDAgUSA3NTAgNDUwIDgwMiA0MDBcIik7XG4gICAgc3Ryb2tlOiAjZmYwMDAwO1xuICB9XG59XG5Aa2V5ZnJhbWVzIENvbnRlbnRGYWRlSW4ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcmVtKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5Aa2V5ZnJhbWVzIEltYWdlRmFkZUluIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0wLjVyZW0sIC0wLjVyZW0pIHNjYWxlKDEuMDUpO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgZmlsdGVyOiBibHVyKDJweCk7XG4gIH1cbiAgNTAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGZpbHRlcjogYmx1cigycHgpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSBzY2FsZSgxKTtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGZpbHRlcjogYmx1cigwKTtcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AplicatiiComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-aplicatii',
          templateUrl: './aplicatii.component.html',
          styleUrls: ['./aplicatii.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/products/web/portofoliu/portofoliu.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/components/products/web/portofoliu/portofoliu.component.ts ***!
    \****************************************************************************/

  /*! exports provided: PortofoliuComponent */

  /***/
  function srcAppComponentsProductsWebPortofoliuPortofoliuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PortofoliuComponent", function () {
      return PortofoliuComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);

    var PortofoliuComponent = /*#__PURE__*/function () {
      function PortofoliuComponent() {
        _classCallCheck(this, PortofoliuComponent);
      }

      _createClass(PortofoliuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          jquery__WEBPACK_IMPORTED_MODULE_1__(document).ready(function () {
            var curPage = 1;
            var numOfPages = jquery__WEBPACK_IMPORTED_MODULE_1__(".skw-page").length;
            var animTime = 1000;
            var scrolling = false;
            var pgPrefix = ".skw-page-";

            function pagination() {
              scrolling = true;
              jquery__WEBPACK_IMPORTED_MODULE_1__(pgPrefix + curPage).removeClass("inactive").addClass("active");
              jquery__WEBPACK_IMPORTED_MODULE_1__(pgPrefix + (curPage - 1)).addClass("inactive");
              jquery__WEBPACK_IMPORTED_MODULE_1__(pgPrefix + (curPage + 1)).removeClass("active");
              setTimeout(function () {
                scrolling = false;
              }, animTime);
            }

            ;

            function navigateUp() {
              if (curPage === 1) return;
              curPage--;
              pagination();
            }

            ;

            function navigateDown() {
              if (curPage === numOfPages) return;
              curPage++;
              pagination();
            }

            ;
            jquery__WEBPACK_IMPORTED_MODULE_1__(document).on("mousewheel DOMMouseScroll", function (e) {
              if (scrolling) return;

              if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
                navigateUp();
              } else {
                navigateDown();
              }
            });
            jquery__WEBPACK_IMPORTED_MODULE_1__(document).on("keydown", function (e) {
              if (scrolling) return;

              if (e.which === 38) {
                navigateUp();
              } else if (e.which === 40) {
                navigateDown();
              }
            });
          });
        }
      }]);

      return PortofoliuComponent;
    }();

    PortofoliuComponent.??fac = function PortofoliuComponent_Factory(t) {
      return new (t || PortofoliuComponent)();
    };

    PortofoliuComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: PortofoliuComponent,
      selectors: [["app-portofoliu"]],
      decls: 44,
      vars: 0,
      consts: [[1, "skw-pages"], [1, "skw-page", "skw-page-1", "active"], [1, "skw-page__half", "skw-page__half--left"], [1, "skw-page__skewed"], [1, "skw-page__content"], [1, "skw-page__half", "skw-page__half--right"], [1, "skw-page__heading"], [1, "skw-page__description"], ["href", ""], [1, "skw-page", "skw-page-2"]],
      template: function PortofoliuComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "h2", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Portofoliu Standard");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "1-5 pagini");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Fara traducere");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Fara animatii");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Pret: De la 150 de Euro");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Demo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "h2", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Portofoliu Premium");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Just scroll down");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "10-25 pagini");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Traducere");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Animatii");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "Pret: De la 450 de Euro");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "Demo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](43, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      styles: ["*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:before, *[_ngcontent-%COMP%]:after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody[_ngcontent-%COMP%] {\n  background: #15181A;\n  font-family: \"Open Sans\", Helvetica, Arial, sans-serif;\n}\n\n.skw-pages[_ngcontent-%COMP%] {\n  overflow: hidden;\n  position: relative;\n  height: 100vh;\n}\n\n.skw-page[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n}\n\n.skw-page__half[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  width: 50%;\n  height: 100vh;\n  transition: transform 1s;\n}\n\n.skw-page__half--left[_ngcontent-%COMP%] {\n  left: 0;\n  transform: translate3d(-32.4vh, 100%, 0);\n}\n\n.skw-page__half--right[_ngcontent-%COMP%] {\n  left: 50%;\n  transform: translate3d(32.4vh, -100%, 0);\n}\n\n.skw-page.active[_ngcontent-%COMP%]   .skw-page__half[_ngcontent-%COMP%] {\n  transform: translate3d(0, 0, 0);\n}\n\n.skw-page__skewed[_ngcontent-%COMP%] {\n  overflow: hidden;\n  position: absolute;\n  top: 0;\n  width: 140%;\n  height: 100%;\n  transform: skewX(-5deg);\n  background: #000;\n}\n\n.skw-page__half--left[_ngcontent-%COMP%]   .skw-page__skewed[_ngcontent-%COMP%] {\n  left: -40%;\n}\n\n.skw-page__half--right[_ngcontent-%COMP%]   .skw-page__skewed[_ngcontent-%COMP%] {\n  right: -40%;\n}\n\n.skw-page__content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-flow: column wrap;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  padding: 0 30%;\n  color: #fff;\n  transform: skewX(5deg);\n  transition: transform 1s, opacity 1s;\n  background-size: cover;\n}\n\n.skw-page__half--left[_ngcontent-%COMP%]   .skw-page__content[_ngcontent-%COMP%] {\n  padding-left: 30%;\n  padding-right: 30%;\n  transform-origin: 100% 0;\n}\n\n.skw-page__half--right[_ngcontent-%COMP%]   .skw-page__content[_ngcontent-%COMP%] {\n  padding-left: 30%;\n  padding-right: 30%;\n  transform-origin: 0 100%;\n}\n\n.skw-page.inactive[_ngcontent-%COMP%]   .skw-page__content[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  transform: skewX(5deg) scale(0.95);\n}\n\n.skw-page__heading[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  text-transform: uppercase;\n  font-size: 25px;\n  text-align: center;\n}\n\n.skw-page__description[_ngcontent-%COMP%] {\n  font-size: 18px;\n  text-align: center;\n}\n\n.skw-page__link[_ngcontent-%COMP%] {\n  color: #FFA0A0;\n}\n\n.skw-page-1[_ngcontent-%COMP%]   .skw-page__half--left[_ngcontent-%COMP%]   .skw-page__content[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/img/portofoliuStandard.jpg\");\n}\n\n.skw-page-1[_ngcontent-%COMP%]   .skw-page__half--right[_ngcontent-%COMP%]   .skw-page__content[_ngcontent-%COMP%] {\n  background: #292929;\n}\n\n.skw-page-2[_ngcontent-%COMP%]   .skw-page__half--left[_ngcontent-%COMP%]   .skw-page__content[_ngcontent-%COMP%] {\n  background: #292929;\n}\n\n.skw-page-2[_ngcontent-%COMP%]   .skw-page__half--right[_ngcontent-%COMP%]   .skw-page__content[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/img/portofoliuPremium.jpg\");\n}\n\n.skw-page-3[_ngcontent-%COMP%]   .skw-page__half--left[_ngcontent-%COMP%]   .skw-page__content[_ngcontent-%COMP%] {\n  background-image: url(\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/mousover-img-2.jpg\");\n}\n\n.skw-page-3[_ngcontent-%COMP%]   .skw-page__half--right[_ngcontent-%COMP%]   .skw-page__content[_ngcontent-%COMP%] {\n  background: #292929;\n}\n\n.skw-page-4[_ngcontent-%COMP%]   .skw-page__half--left[_ngcontent-%COMP%]   .skw-page__content[_ngcontent-%COMP%] {\n  background: #292929;\n}\n\n.skw-page-4[_ngcontent-%COMP%]   .skw-page__half--right[_ngcontent-%COMP%]   .skw-page__content[_ngcontent-%COMP%] {\n  background-image: url(\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/sections-3.jpg\");\n}\n\n.skw-page-5[_ngcontent-%COMP%]   .skw-page__half--left[_ngcontent-%COMP%]   .skw-page__content[_ngcontent-%COMP%] {\n  background-image: url(\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/img-test.jpg\");\n}\n\n.skw-page-5[_ngcontent-%COMP%]   .skw-page__half--right[_ngcontent-%COMP%]   .skw-page__content[_ngcontent-%COMP%] {\n  background: #292929;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy93ZWIvcG9ydG9mb2xpdS9DOlxcVXNlcnNcXGFuZHJlXFxEZXNrdG9wXFxQb3J0b2ZvbGl1QW5ndWxhclxcUG9ydG9mb2xpdUFuZHJlaS9zcmNcXGFwcFxcY29tcG9uZW50c1xccHJvZHVjdHNcXHdlYlxccG9ydG9mb2xpdVxccG9ydG9mb2xpdS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy93ZWIvcG9ydG9mb2xpdS9wb3J0b2ZvbGl1LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksc0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0RKOztBRElFO0VBQ0UsbUJBQUE7RUFDQSxzREFIUztBQ0ViOztBRElFO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUNESjs7QURRRTtFQUNFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0FDTEo7O0FET0k7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0FDTE47O0FET007RUFDRSxPQUFBO0VBQ0Esd0NBQUE7QUNMUjs7QURRTTtFQUNFLFNBQUE7RUFDQSx3Q0FBQTtBQ05SOztBRFNNO0VBQ0UsK0JBQUE7QUNQUjs7QURXSTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FDVE47O0FEV007RUFDRSxVQUFBO0FDVFI7O0FEV007RUFDRSxXQUFBO0FDVFI7O0FEYUk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLG9DQUFBO0VBQ0Esc0JBQUE7QUNYTjs7QURhTTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtBQ1hSOztBRGFNO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0FDWFI7O0FEY007RUFDRSxZQUFBO0VBQ0Esa0NBQUE7QUNaUjs7QURnQkk7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDZE47O0FEaUJJO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FDZk47O0FEa0JJO0VBQ0UsY0FBQTtBQ2hCTjs7QURvQk07RUFDRSwyREFBQTtBQ2xCUjs7QURvQk07RUFDRSxtQkFBQTtBQ2xCUjs7QURzQk07RUFDRSxtQkFBQTtBQ3BCUjs7QURzQk07RUFDRSwwREFBQTtBQ3BCUjs7QUR3Qk07RUFDRSwrRkFBQTtBQ3RCUjs7QUR3Qk07RUFDRSxtQkFBQTtBQ3RCUjs7QUQwQk07RUFDRSxtQkFBQTtBQ3hCUjs7QUQwQk07RUFDRSwyRkFBQTtBQ3hCUjs7QUQ0Qk07RUFDRSx5RkFBQTtBQzFCUjs7QUQ0Qk07RUFDRSxtQkFBQTtBQzFCUiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdHMvd2ViL3BvcnRvZm9saXUvcG9ydG9mb2xpdS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuKiwgKjpiZWZvcmUsICo6YWZ0ZXIge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG4gICRvcGVuU2FuczogJ09wZW4gU2FucycsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMTUxODFBO1xyXG4gICAgZm9udC1mYW1pbHk6ICRvcGVuU2FucztcclxuICB9XHJcbiAgXHJcbiAgLnNrdy1wYWdlcyB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICB9XHJcbiAgXHJcbiAgJHNrZXdEZWc6IDVkZWc7XHJcbiAgJG1hZ2ljVkg6IDMyLjR2aDsgLy8gdGhpcyBudW1iZXIgaXMgbWFnaWMgYW5kIGRlcGVuZHMgb24gc2tldyBhbmdsZVxyXG4gICRzY3JvbGxUaW1lOiAxcztcclxuICBcclxuICAuc2t3LXBhZ2Uge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIFxyXG4gICAgJl9faGFsZiB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICB3aWR0aDogNTAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gJHNjcm9sbFRpbWU7XHJcbiAgXHJcbiAgICAgICYtLWxlZnQge1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtJG1hZ2ljVkgsIDEwMCUsIDApO1xyXG4gICAgICAgICAgfVxyXG4gIFxyXG4gICAgICAmLS1yaWdodCB7XHJcbiAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoJG1hZ2ljVkgsIC0xMDAlLCAwKTtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAuc2t3LXBhZ2UuYWN0aXZlICYge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwwLDApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICAmX19za2V3ZWQge1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgd2lkdGg6IDE0MCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgdHJhbnNmb3JtOiBza2V3WCgkc2tld0RlZyAqIC0xKTtcclxuICAgICAgYmFja2dyb3VuZDogIzAwMDtcclxuICBcclxuICAgICAgLnNrdy1wYWdlX19oYWxmLS1sZWZ0ICYge1xyXG4gICAgICAgIGxlZnQ6IC00MCU7XHJcbiAgICAgIH1cclxuICAgICAgLnNrdy1wYWdlX19oYWxmLS1yaWdodCAmIHtcclxuICAgICAgICByaWdodDogLTQwJTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgJl9fY29udGVudCB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgcGFkZGluZzogMCAzMCU7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICB0cmFuc2Zvcm06IHNrZXdYKCRza2V3RGVnKTtcclxuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtICRzY3JvbGxUaW1lLCBvcGFjaXR5ICRzY3JvbGxUaW1lO1xyXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIFxyXG4gICAgICAuc2t3LXBhZ2VfX2hhbGYtLWxlZnQgJiB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAzMCU7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMzAlO1xyXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDEwMCUgMDtcclxuICAgICAgfVxyXG4gICAgICAuc2t3LXBhZ2VfX2hhbGYtLXJpZ2h0ICYge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMzAlO1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDMwJTtcclxuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDEwMCU7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgLnNrdy1wYWdlLmluYWN0aXZlICYge1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNrZXdYKCRza2V3RGVnKSBzY2FsZSgwLjk1KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgJl9faGVhZGluZyB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgJl9fZGVzY3JpcHRpb24ge1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgJl9fbGluayB7XHJcbiAgICAgIGNvbG9yOiAjRkZBMEEwO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgJi0xIHtcclxuICAgICAgLnNrdy1wYWdlX19oYWxmLS1sZWZ0IC5za3ctcGFnZV9fY29udGVudCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltZy9wb3J0b2ZvbGl1U3RhbmRhcmQuanBnJyk7XHJcbiAgICAgIH1cclxuICAgICAgLnNrdy1wYWdlX19oYWxmLS1yaWdodCAuc2t3LXBhZ2VfX2NvbnRlbnQge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpZ2h0ZW4oIzFDMUMxQywgNSUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAmLTIge1xyXG4gICAgICAuc2t3LXBhZ2VfX2hhbGYtLWxlZnQgLnNrdy1wYWdlX19jb250ZW50IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaWdodGVuKCMxQzFDMUMsIDUlKTtcclxuICAgICAgfVxyXG4gICAgICAuc2t3LXBhZ2VfX2hhbGYtLXJpZ2h0IC5za3ctcGFnZV9fY29udGVudCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltZy9wb3J0b2ZvbGl1UHJlbWl1bS5qcGcnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJi0zIHtcclxuICAgICAgLnNrdy1wYWdlX19oYWxmLS1sZWZ0IC5za3ctcGFnZV9fY29udGVudCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3MzLXVzLXdlc3QtMi5hbWF6b25hd3MuY29tL3MuY2Rwbi5pby8xNDI5OTYvbW91c292ZXItaW1nLTIuanBnJyk7XHJcbiAgICAgIH1cclxuICAgICAgLnNrdy1wYWdlX19oYWxmLS1yaWdodCAuc2t3LXBhZ2VfX2NvbnRlbnQge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpZ2h0ZW4oIzFDMUMxQywgNSUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAmLTQge1xyXG4gICAgICAuc2t3LXBhZ2VfX2hhbGYtLWxlZnQgLnNrdy1wYWdlX19jb250ZW50IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaWdodGVuKCMxQzFDMUMsIDUlKTtcclxuICAgICAgfVxyXG4gICAgICAuc2t3LXBhZ2VfX2hhbGYtLXJpZ2h0IC5za3ctcGFnZV9fY29udGVudCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3MzLXVzLXdlc3QtMi5hbWF6b25hd3MuY29tL3MuY2Rwbi5pby8xNDI5OTYvc2VjdGlvbnMtMy5qcGcnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJi01IHtcclxuICAgICAgLnNrdy1wYWdlX19oYWxmLS1sZWZ0IC5za3ctcGFnZV9fY29udGVudCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3MzLXVzLXdlc3QtMi5hbWF6b25hd3MuY29tL3MuY2Rwbi5pby8xNDI5OTYvaW1nLXRlc3QuanBnJyk7XHJcbiAgICAgIH1cclxuICAgICAgLnNrdy1wYWdlX19oYWxmLS1yaWdodCAuc2t3LXBhZ2VfX2NvbnRlbnQge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpZ2h0ZW4oIzFDMUMxQywgNSUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gICIsIiosICo6YmVmb3JlLCAqOmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZDogIzE1MTgxQTtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG59XG5cbi5za3ctcGFnZXMge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbi5za3ctcGFnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbn1cbi5za3ctcGFnZV9faGFsZiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXM7XG59XG4uc2t3LXBhZ2VfX2hhbGYtLWxlZnQge1xuICBsZWZ0OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0zMi40dmgsIDEwMCUsIDApO1xufVxuLnNrdy1wYWdlX19oYWxmLS1yaWdodCB7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgzMi40dmgsIC0xMDAlLCAwKTtcbn1cbi5za3ctcGFnZS5hY3RpdmUgLnNrdy1wYWdlX19oYWxmIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbn1cbi5za3ctcGFnZV9fc2tld2VkIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxNDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRyYW5zZm9ybTogc2tld1goLTVkZWcpO1xuICBiYWNrZ3JvdW5kOiAjMDAwO1xufVxuLnNrdy1wYWdlX19oYWxmLS1sZWZ0IC5za3ctcGFnZV9fc2tld2VkIHtcbiAgbGVmdDogLTQwJTtcbn1cbi5za3ctcGFnZV9faGFsZi0tcmlnaHQgLnNrdy1wYWdlX19za2V3ZWQge1xuICByaWdodDogLTQwJTtcbn1cbi5za3ctcGFnZV9fY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMCAzMCU7XG4gIGNvbG9yOiAjZmZmO1xuICB0cmFuc2Zvcm06IHNrZXdYKDVkZWcpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMsIG9wYWNpdHkgMXM7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4uc2t3LXBhZ2VfX2hhbGYtLWxlZnQgLnNrdy1wYWdlX19jb250ZW50IHtcbiAgcGFkZGluZy1sZWZ0OiAzMCU7XG4gIHBhZGRpbmctcmlnaHQ6IDMwJTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAwO1xufVxuLnNrdy1wYWdlX19oYWxmLS1yaWdodCAuc2t3LXBhZ2VfX2NvbnRlbnQge1xuICBwYWRkaW5nLWxlZnQ6IDMwJTtcbiAgcGFkZGluZy1yaWdodDogMzAlO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDEwMCU7XG59XG4uc2t3LXBhZ2UuaW5hY3RpdmUgLnNrdy1wYWdlX19jb250ZW50IHtcbiAgb3BhY2l0eTogMC41O1xuICB0cmFuc2Zvcm06IHNrZXdYKDVkZWcpIHNjYWxlKDAuOTUpO1xufVxuLnNrdy1wYWdlX19oZWFkaW5nIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAyNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uc2t3LXBhZ2VfX2Rlc2NyaXB0aW9uIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uc2t3LXBhZ2VfX2xpbmsge1xuICBjb2xvcjogI0ZGQTBBMDtcbn1cbi5za3ctcGFnZS0xIC5za3ctcGFnZV9faGFsZi0tbGVmdCAuc2t3LXBhZ2VfX2NvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltZy9wb3J0b2ZvbGl1U3RhbmRhcmQuanBnXCIpO1xufVxuLnNrdy1wYWdlLTEgLnNrdy1wYWdlX19oYWxmLS1yaWdodCAuc2t3LXBhZ2VfX2NvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiAjMjkyOTI5O1xufVxuLnNrdy1wYWdlLTIgLnNrdy1wYWdlX19oYWxmLS1sZWZ0IC5za3ctcGFnZV9fY29udGVudCB7XG4gIGJhY2tncm91bmQ6ICMyOTI5Mjk7XG59XG4uc2t3LXBhZ2UtMiAuc2t3LXBhZ2VfX2hhbGYtLXJpZ2h0IC5za3ctcGFnZV9fY29udGVudCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1nL3BvcnRvZm9saXVQcmVtaXVtLmpwZ1wiKTtcbn1cbi5za3ctcGFnZS0zIC5za3ctcGFnZV9faGFsZi0tbGVmdCAuc2t3LXBhZ2VfX2NvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL3MzLXVzLXdlc3QtMi5hbWF6b25hd3MuY29tL3MuY2Rwbi5pby8xNDI5OTYvbW91c292ZXItaW1nLTIuanBnXCIpO1xufVxuLnNrdy1wYWdlLTMgLnNrdy1wYWdlX19oYWxmLS1yaWdodCAuc2t3LXBhZ2VfX2NvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiAjMjkyOTI5O1xufVxuLnNrdy1wYWdlLTQgLnNrdy1wYWdlX19oYWxmLS1sZWZ0IC5za3ctcGFnZV9fY29udGVudCB7XG4gIGJhY2tncm91bmQ6ICMyOTI5Mjk7XG59XG4uc2t3LXBhZ2UtNCAuc2t3LXBhZ2VfX2hhbGYtLXJpZ2h0IC5za3ctcGFnZV9fY29udGVudCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vczMtdXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vcy5jZHBuLmlvLzE0Mjk5Ni9zZWN0aW9ucy0zLmpwZ1wiKTtcbn1cbi5za3ctcGFnZS01IC5za3ctcGFnZV9faGFsZi0tbGVmdCAuc2t3LXBhZ2VfX2NvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL3MzLXVzLXdlc3QtMi5hbWF6b25hd3MuY29tL3MuY2Rwbi5pby8xNDI5OTYvaW1nLXRlc3QuanBnXCIpO1xufVxuLnNrdy1wYWdlLTUgLnNrdy1wYWdlX19oYWxmLS1yaWdodCAuc2t3LXBhZ2VfX2NvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiAjMjkyOTI5O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](PortofoliuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-portofoliu',
          templateUrl: './portofoliu.component.html',
          styleUrls: ['./portofoliu.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/products/web/site-de-prezentare/site-de-prezentare.component.ts":
  /*!********************************************************************************************!*\
    !*** ./src/app/components/products/web/site-de-prezentare/site-de-prezentare.component.ts ***!
    \********************************************************************************************/

  /*! exports provided: SiteDePrezentareComponent */

  /***/
  function srcAppComponentsProductsWebSiteDePrezentareSiteDePrezentareComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SiteDePrezentareComponent", function () {
      return SiteDePrezentareComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);

    var SiteDePrezentareComponent = /*#__PURE__*/function () {
      function SiteDePrezentareComponent() {
        _classCallCheck(this, SiteDePrezentareComponent);
      }

      _createClass(SiteDePrezentareComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          jquery__WEBPACK_IMPORTED_MODULE_1__(document).ready(function () {
            var curPage = 1;
            var numOfPages = jquery__WEBPACK_IMPORTED_MODULE_1__(".skw-page").length;
            var animTime = 1000;
            var scrolling = false;
            var pgPrefix = ".skw-page-";

            function pagination() {
              scrolling = true;
              jquery__WEBPACK_IMPORTED_MODULE_1__(pgPrefix + curPage).removeClass("inactive").addClass("active");
              jquery__WEBPACK_IMPORTED_MODULE_1__(pgPrefix + (curPage - 1)).addClass("inactive");
              jquery__WEBPACK_IMPORTED_MODULE_1__(pgPrefix + (curPage + 1)).removeClass("active");
              setTimeout(function () {
                scrolling = false;
              }, animTime);
            }

            ;

            function navigateUp() {
              if (curPage === 1) return;
              curPage--;
              pagination();
            }

            ;

            function navigateDown() {
              if (curPage === numOfPages) return;
              curPage++;
              pagination();
            }

            ;
            jquery__WEBPACK_IMPORTED_MODULE_1__(document).on("mousewheel DOMMouseScroll", function (e) {
              if (scrolling) return;

              if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
                navigateUp();
              } else {
                navigateDown();
              }
            });
            jquery__WEBPACK_IMPORTED_MODULE_1__(document).on("keydown", function (e) {
              if (scrolling) return;

              if (e.which === 38) {
                navigateUp();
              } else if (e.which === 40) {
                navigateDown();
              }
            });
          });
        }
      }]);

      return SiteDePrezentareComponent;
    }();

    SiteDePrezentareComponent.??fac = function SiteDePrezentareComponent_Factory(t) {
      return new (t || SiteDePrezentareComponent)();
    };

    SiteDePrezentareComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: SiteDePrezentareComponent,
      selectors: [["app-site-de-prezentare"]],
      decls: 42,
      vars: 0,
      consts: [[1, "skw-pages"], [1, "skw-page", "skw-page-1", "active"], [1, "skw-page__half", "skw-page__half--left"], [1, "skw-page__skewed"], [1, "skw-page__content"], [1, "skw-page__half", "skw-page__half--right"], [1, "skw-page__heading"], [1, "skw-page__description"], ["href", ""], [1, "skw-page", "skw-page-2"], ["href", "https:/www.pepinieravolintir.com"]],
      template: function SiteDePrezentareComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "h2", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Site de prezentare Standard");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "10-25 pagini");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Fara traducere");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Fara animatii");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Pret: De la 300 de Euro");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Demo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "h2", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Site de prezentare Premium");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "25-50 pagini");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Traducere");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Animatii");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Pret: De la 500 de Euro");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "Demo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](41, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      styles: ["*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:before, *[_ngcontent-%COMP%]:after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody[_ngcontent-%COMP%] {\n  background: #15181A;\n  font-family: \"Open Sans\", Helvetica, Arial, sans-serif;\n}\n\n.skw-pages[_ngcontent-%COMP%] {\n  overflow: hidden;\n  position: relative;\n  height: 100vh;\n}\n\n.skw-page[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n}\n\n.skw-page__half[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  width: 50%;\n  height: 100vh;\n  transition: transform 1s;\n}\n\n.skw-page__half--left[_ngcontent-%COMP%] {\n  left: 0;\n  transform: translate3d(-32.4vh, 100%, 0);\n}\n\n.skw-page__half--right[_ngcontent-%COMP%] {\n  left: 50%;\n  transform: translate3d(32.4vh, -100%, 0);\n}\n\n.skw-page.active[_ngcontent-%COMP%]   .skw-page__half[_ngcontent-%COMP%] {\n  transform: translate3d(0, 0, 0);\n}\n\n.skw-page__skewed[_ngcontent-%COMP%] {\n  overflow: hidden;\n  position: absolute;\n  top: 0;\n  width: 140%;\n  height: 100%;\n  transform: skewX(-5deg);\n  background: #000;\n}\n\n.skw-page__half--left[_ngcontent-%COMP%]   .skw-page__skewed[_ngcontent-%COMP%] {\n  left: -40%;\n}\n\n.skw-page__half--right[_ngcontent-%COMP%]   .skw-page__skewed[_ngcontent-%COMP%] {\n  right: -40%;\n}\n\n.skw-page__content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-flow: column wrap;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  padding: 0 30%;\n  color: #fff;\n  transform: skewX(5deg);\n  transition: transform 1s, opacity 1s;\n  background-size: cover;\n}\n\n.skw-page__half--left[_ngcontent-%COMP%]   .skw-page__content[_ngcontent-%COMP%] {\n  padding-left: 30%;\n  padding-right: 30%;\n  transform-origin: 100% 0;\n}\n\n.skw-page__half--right[_ngcontent-%COMP%]   .skw-page__content[_ngcontent-%COMP%] {\n  padding-left: 30%;\n  padding-right: 30%;\n  transform-origin: 0 100%;\n}\n\n.skw-page.inactive[_ngcontent-%COMP%]   .skw-page__content[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  transform: skewX(5deg) scale(0.95);\n}\n\n.skw-page__heading[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  text-transform: uppercase;\n  font-size: 25px;\n  text-align: center;\n}\n\n.skw-page__description[_ngcontent-%COMP%] {\n  font-size: 18px;\n  text-align: center;\n}\n\n.skw-page__link[_ngcontent-%COMP%] {\n  color: #FFA0A0;\n}\n\n.skw-page-1[_ngcontent-%COMP%]   .skw-page__half--left[_ngcontent-%COMP%]   .skw-page__content[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/img/site-uri-responsive.jpg\");\n  background-repeat: no-repeat;\n  background-size: 50% 90%;\n  background-position: initial;\n  background-attachment: fixed;\n}\n\n.skw-page-1[_ngcontent-%COMP%]   .skw-page__half--right[_ngcontent-%COMP%]   .skw-page__content[_ngcontent-%COMP%] {\n  background: #292929;\n}\n\n.skw-page-2[_ngcontent-%COMP%]   .skw-page__half--left[_ngcontent-%COMP%]   .skw-page__content[_ngcontent-%COMP%] {\n  background: #292929;\n}\n\n.skw-page-2[_ngcontent-%COMP%]   .skw-page__half--right[_ngcontent-%COMP%]   .skw-page__content[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/img/site-uri-responsive1.jpg\");\n}\n\n.skw-page-3[_ngcontent-%COMP%]   .skw-page__half--left[_ngcontent-%COMP%]   .skw-page__content[_ngcontent-%COMP%] {\n  background-image: url(\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/mousover-img-2.jpg\");\n}\n\n.skw-page-3[_ngcontent-%COMP%]   .skw-page__half--right[_ngcontent-%COMP%]   .skw-page__content[_ngcontent-%COMP%] {\n  background: #292929;\n}\n\n.skw-page-4[_ngcontent-%COMP%]   .skw-page__half--left[_ngcontent-%COMP%]   .skw-page__content[_ngcontent-%COMP%] {\n  background: #292929;\n}\n\n.skw-page-4[_ngcontent-%COMP%]   .skw-page__half--right[_ngcontent-%COMP%]   .skw-page__content[_ngcontent-%COMP%] {\n  background-image: url(\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/sections-3.jpg\");\n}\n\n.skw-page-5[_ngcontent-%COMP%]   .skw-page__half--left[_ngcontent-%COMP%]   .skw-page__content[_ngcontent-%COMP%] {\n  background-image: url(\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/img-test.jpg\");\n}\n\n.skw-page-5[_ngcontent-%COMP%]   .skw-page__half--right[_ngcontent-%COMP%]   .skw-page__content[_ngcontent-%COMP%] {\n  background: #292929;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy93ZWIvc2l0ZS1kZS1wcmV6ZW50YXJlL0M6XFxVc2Vyc1xcYW5kcmVcXERlc2t0b3BcXFBvcnRvZm9saXVBbmd1bGFyXFxQb3J0b2ZvbGl1QW5kcmVpL3NyY1xcYXBwXFxjb21wb25lbnRzXFxwcm9kdWN0c1xcd2ViXFxzaXRlLWRlLXByZXplbnRhcmVcXHNpdGUtZGUtcHJlemVudGFyZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy93ZWIvc2l0ZS1kZS1wcmV6ZW50YXJlL3NpdGUtZGUtcHJlemVudGFyZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNESjs7QURJRTtFQUNFLG1CQUFBO0VBQ0Esc0RBSFM7QUNFYjs7QURJRTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FDREo7O0FEUUU7RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtBQ0xKOztBRE9JO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtBQ0xOOztBRE9NO0VBQ0UsT0FBQTtFQUNBLHdDQUFBO0FDTFI7O0FEUU07RUFDRSxTQUFBO0VBQ0Esd0NBQUE7QUNOUjs7QURTTTtFQUNFLCtCQUFBO0FDUFI7O0FEV0k7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQ1ROOztBRFdNO0VBQ0UsVUFBQTtBQ1RSOztBRFdNO0VBQ0UsV0FBQTtBQ1RSOztBRGFJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQ0FBQTtFQUNBLHNCQUFBO0FDWE47O0FEYU07RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7QUNYUjs7QURhTTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtBQ1hSOztBRGNNO0VBQ0UsWUFBQTtFQUNBLGtDQUFBO0FDWlI7O0FEZ0JJO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ2ROOztBRGlCSTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQ2ZOOztBRGtCSTtFQUNFLGNBQUE7QUNoQk47O0FEb0JNO0VBRUUsNERBQUE7RUFTQSw0QkFBQTtFQUNBLHdCQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtBQzNCUjs7QUQ2Qk07RUFDRSxtQkFBQTtBQzNCUjs7QURvQ007RUFDRSxtQkFBQTtBQ2xDUjs7QURvQ007RUFDRSw2REFBQTtBQ2xDUjs7QURzQ007RUFDRSwrRkFBQTtBQ3BDUjs7QURzQ007RUFDRSxtQkFBQTtBQ3BDUjs7QUR3Q007RUFDRSxtQkFBQTtBQ3RDUjs7QUR3Q007RUFDRSwyRkFBQTtBQ3RDUjs7QUQwQ007RUFDRSx5RkFBQTtBQ3hDUjs7QUQwQ007RUFDRSxtQkFBQTtBQ3hDUiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdHMvd2ViL3NpdGUtZGUtcHJlemVudGFyZS9zaXRlLWRlLXByZXplbnRhcmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbiosICo6YmVmb3JlLCAqOmFmdGVyIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuICAkb3BlblNhbnM6ICdPcGVuIFNhbnMnLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gIGJvZHkge1xyXG4gICAgYmFja2dyb3VuZDogIzE1MTgxQTtcclxuICAgIGZvbnQtZmFtaWx5OiAkb3BlblNhbnM7XHJcbiAgfVxyXG4gIFxyXG4gIC5za3ctcGFnZXMge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgfVxyXG4gIFxyXG4gICRza2V3RGVnOiA1ZGVnO1xyXG4gICRtYWdpY1ZIOiAzMi40dmg7IC8vIHRoaXMgbnVtYmVyIGlzIG1hZ2ljIGFuZCBkZXBlbmRzIG9uIHNrZXcgYW5nbGVcclxuICAkc2Nyb2xsVGltZTogMXM7XHJcbiAgXHJcbiAgLnNrdy1wYWdlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICBcclxuICAgICZfX2hhbGYge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtICRzY3JvbGxUaW1lO1xyXG4gIFxyXG4gICAgICAmLS1sZWZ0IHtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLSRtYWdpY1ZILCAxMDAlLCAwKTtcclxuICAgICAgICAgIH1cclxuICBcclxuICAgICAgJi0tcmlnaHQge1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKCRtYWdpY1ZILCAtMTAwJSwgMCk7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgLnNrdy1wYWdlLmFjdGl2ZSAmIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMCwwKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgJl9fc2tld2VkIHtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIHdpZHRoOiAxNDAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIHRyYW5zZm9ybTogc2tld1goJHNrZXdEZWcgKiAtMSk7XHJcbiAgICAgIGJhY2tncm91bmQ6ICMwMDA7XHJcbiAgXHJcbiAgICAgIC5za3ctcGFnZV9faGFsZi0tbGVmdCAmIHtcclxuICAgICAgICBsZWZ0OiAtNDAlO1xyXG4gICAgICB9XHJcbiAgICAgIC5za3ctcGFnZV9faGFsZi0tcmlnaHQgJiB7XHJcbiAgICAgICAgcmlnaHQ6IC00MCU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgICZfX2NvbnRlbnQge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIHBhZGRpbmc6IDAgMzAlO1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgdHJhbnNmb3JtOiBza2V3WCgkc2tld0RlZyk7XHJcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAkc2Nyb2xsVGltZSwgb3BhY2l0eSAkc2Nyb2xsVGltZTtcclxuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBcclxuICAgICAgLnNrdy1wYWdlX19oYWxmLS1sZWZ0ICYge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMzAlO1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDMwJTtcclxuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDA7XHJcbiAgICAgIH1cclxuICAgICAgLnNrdy1wYWdlX19oYWxmLS1yaWdodCAmIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDMwJTtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzMCU7XHJcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMCAxMDAlO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIC5za3ctcGFnZS5pbmFjdGl2ZSAmIHtcclxuICAgICAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBza2V3WCgkc2tld0RlZykgc2NhbGUoMC45NSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgICZfX2hlYWRpbmcge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICBcclxuICAgICZfX2Rlc2NyaXB0aW9uIHtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgICZfX2xpbmsge1xyXG4gICAgICBjb2xvcjogI0ZGQTBBMDtcclxuICAgIH1cclxuICBcclxuICAgICYtMSB7XHJcbiAgICAgIC5za3ctcGFnZV9faGFsZi0tbGVmdCAuc2t3LXBhZ2VfX2NvbnRlbnQge1xyXG5cclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1nL3NpdGUtdXJpLXJlc3BvbnNpdmUuanBnJyk7XHJcbiAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjpsaWdodGVuKCMxQzFDMUMsIDUlKTtcclxuICAgICAgICAvLyBpbWd7XHJcbiAgICAgICAgLy8gICBtaW4td2lkdGg6IDQwdnc7XHJcbiAgICAgICAgLy8gICBtYXgtd2lkdGg6IDYwdnc7XHJcbiAgICAgICAgLy8gICBtaW4taGVpZ2h0OiA1MHZoO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgO1xyXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOjUwJSA5MCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjppbml0aWFsO1xyXG4gICAgICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgICAgIH1cclxuICAgICAgLnNrdy1wYWdlX19oYWxmLS1yaWdodCAuc2t3LXBhZ2VfX2NvbnRlbnQge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpZ2h0ZW4oIzFDMUMxQywgNSUpO1xyXG4gICAgICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWcvc2l0ZS11cmktcmVzcG9uc2l2ZS5qcGcnKTtcclxuICAgICAgICAvLyBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgIC8vIGJhY2tncm91bmQtc2l6ZTpjb250YWluO1xyXG4gICAgICAgIC8vIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICAvLyBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAmLTIge1xyXG4gICAgICAuc2t3LXBhZ2VfX2hhbGYtLWxlZnQgLnNrdy1wYWdlX19jb250ZW50IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaWdodGVuKCMxQzFDMUMsIDUlKTtcclxuICAgICAgfVxyXG4gICAgICAuc2t3LXBhZ2VfX2hhbGYtLXJpZ2h0IC5za3ctcGFnZV9fY29udGVudCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltZy9zaXRlLXVyaS1yZXNwb25zaXZlMS5qcGcnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJi0zIHtcclxuICAgICAgLnNrdy1wYWdlX19oYWxmLS1sZWZ0IC5za3ctcGFnZV9fY29udGVudCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3MzLXVzLXdlc3QtMi5hbWF6b25hd3MuY29tL3MuY2Rwbi5pby8xNDI5OTYvbW91c292ZXItaW1nLTIuanBnJyk7XHJcbiAgICAgIH1cclxuICAgICAgLnNrdy1wYWdlX19oYWxmLS1yaWdodCAuc2t3LXBhZ2VfX2NvbnRlbnQge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpZ2h0ZW4oIzFDMUMxQywgNSUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAmLTQge1xyXG4gICAgICAuc2t3LXBhZ2VfX2hhbGYtLWxlZnQgLnNrdy1wYWdlX19jb250ZW50IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaWdodGVuKCMxQzFDMUMsIDUlKTtcclxuICAgICAgfVxyXG4gICAgICAuc2t3LXBhZ2VfX2hhbGYtLXJpZ2h0IC5za3ctcGFnZV9fY29udGVudCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3MzLXVzLXdlc3QtMi5hbWF6b25hd3MuY29tL3MuY2Rwbi5pby8xNDI5OTYvc2VjdGlvbnMtMy5qcGcnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJi01IHtcclxuICAgICAgLnNrdy1wYWdlX19oYWxmLS1sZWZ0IC5za3ctcGFnZV9fY29udGVudCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3MzLXVzLXdlc3QtMi5hbWF6b25hd3MuY29tL3MuY2Rwbi5pby8xNDI5OTYvaW1nLXRlc3QuanBnJyk7XHJcbiAgICAgIH1cclxuICAgICAgLnNrdy1wYWdlX19oYWxmLS1yaWdodCAuc2t3LXBhZ2VfX2NvbnRlbnQge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpZ2h0ZW4oIzFDMUMxQywgNSUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gICIsIiosICo6YmVmb3JlLCAqOmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZDogIzE1MTgxQTtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG59XG5cbi5za3ctcGFnZXMge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbi5za3ctcGFnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbn1cbi5za3ctcGFnZV9faGFsZiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXM7XG59XG4uc2t3LXBhZ2VfX2hhbGYtLWxlZnQge1xuICBsZWZ0OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0zMi40dmgsIDEwMCUsIDApO1xufVxuLnNrdy1wYWdlX19oYWxmLS1yaWdodCB7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgzMi40dmgsIC0xMDAlLCAwKTtcbn1cbi5za3ctcGFnZS5hY3RpdmUgLnNrdy1wYWdlX19oYWxmIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbn1cbi5za3ctcGFnZV9fc2tld2VkIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxNDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRyYW5zZm9ybTogc2tld1goLTVkZWcpO1xuICBiYWNrZ3JvdW5kOiAjMDAwO1xufVxuLnNrdy1wYWdlX19oYWxmLS1sZWZ0IC5za3ctcGFnZV9fc2tld2VkIHtcbiAgbGVmdDogLTQwJTtcbn1cbi5za3ctcGFnZV9faGFsZi0tcmlnaHQgLnNrdy1wYWdlX19za2V3ZWQge1xuICByaWdodDogLTQwJTtcbn1cbi5za3ctcGFnZV9fY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMCAzMCU7XG4gIGNvbG9yOiAjZmZmO1xuICB0cmFuc2Zvcm06IHNrZXdYKDVkZWcpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMsIG9wYWNpdHkgMXM7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4uc2t3LXBhZ2VfX2hhbGYtLWxlZnQgLnNrdy1wYWdlX19jb250ZW50IHtcbiAgcGFkZGluZy1sZWZ0OiAzMCU7XG4gIHBhZGRpbmctcmlnaHQ6IDMwJTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAwO1xufVxuLnNrdy1wYWdlX19oYWxmLS1yaWdodCAuc2t3LXBhZ2VfX2NvbnRlbnQge1xuICBwYWRkaW5nLWxlZnQ6IDMwJTtcbiAgcGFkZGluZy1yaWdodDogMzAlO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDEwMCU7XG59XG4uc2t3LXBhZ2UuaW5hY3RpdmUgLnNrdy1wYWdlX19jb250ZW50IHtcbiAgb3BhY2l0eTogMC41O1xuICB0cmFuc2Zvcm06IHNrZXdYKDVkZWcpIHNjYWxlKDAuOTUpO1xufVxuLnNrdy1wYWdlX19oZWFkaW5nIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAyNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uc2t3LXBhZ2VfX2Rlc2NyaXB0aW9uIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uc2t3LXBhZ2VfX2xpbmsge1xuICBjb2xvcjogI0ZGQTBBMDtcbn1cbi5za3ctcGFnZS0xIC5za3ctcGFnZV9faGFsZi0tbGVmdCAuc2t3LXBhZ2VfX2NvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltZy9zaXRlLXVyaS1yZXNwb25zaXZlLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiA1MCUgOTAlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBpbml0aWFsO1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xufVxuLnNrdy1wYWdlLTEgLnNrdy1wYWdlX19oYWxmLS1yaWdodCAuc2t3LXBhZ2VfX2NvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiAjMjkyOTI5O1xufVxuLnNrdy1wYWdlLTIgLnNrdy1wYWdlX19oYWxmLS1sZWZ0IC5za3ctcGFnZV9fY29udGVudCB7XG4gIGJhY2tncm91bmQ6ICMyOTI5Mjk7XG59XG4uc2t3LXBhZ2UtMiAuc2t3LXBhZ2VfX2hhbGYtLXJpZ2h0IC5za3ctcGFnZV9fY29udGVudCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1nL3NpdGUtdXJpLXJlc3BvbnNpdmUxLmpwZ1wiKTtcbn1cbi5za3ctcGFnZS0zIC5za3ctcGFnZV9faGFsZi0tbGVmdCAuc2t3LXBhZ2VfX2NvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL3MzLXVzLXdlc3QtMi5hbWF6b25hd3MuY29tL3MuY2Rwbi5pby8xNDI5OTYvbW91c292ZXItaW1nLTIuanBnXCIpO1xufVxuLnNrdy1wYWdlLTMgLnNrdy1wYWdlX19oYWxmLS1yaWdodCAuc2t3LXBhZ2VfX2NvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiAjMjkyOTI5O1xufVxuLnNrdy1wYWdlLTQgLnNrdy1wYWdlX19oYWxmLS1sZWZ0IC5za3ctcGFnZV9fY29udGVudCB7XG4gIGJhY2tncm91bmQ6ICMyOTI5Mjk7XG59XG4uc2t3LXBhZ2UtNCAuc2t3LXBhZ2VfX2hhbGYtLXJpZ2h0IC5za3ctcGFnZV9fY29udGVudCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vczMtdXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vcy5jZHBuLmlvLzE0Mjk5Ni9zZWN0aW9ucy0zLmpwZ1wiKTtcbn1cbi5za3ctcGFnZS01IC5za3ctcGFnZV9faGFsZi0tbGVmdCAuc2t3LXBhZ2VfX2NvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL3MzLXVzLXdlc3QtMi5hbWF6b25hd3MuY29tL3MuY2Rwbi5pby8xNDI5OTYvaW1nLXRlc3QuanBnXCIpO1xufVxuLnNrdy1wYWdlLTUgLnNrdy1wYWdlX19oYWxmLS1yaWdodCAuc2t3LXBhZ2VfX2NvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiAjMjkyOTI5O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](SiteDePrezentareComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-site-de-prezentare',
          templateUrl: './site-de-prezentare.component.html',
          styleUrls: ['./site-de-prezentare.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/proiecte/in-curs/in-curs.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/components/proiecte/in-curs/in-curs.component.ts ***!
    \******************************************************************/

  /*! exports provided: InCursComponent */

  /***/
  function srcAppComponentsProiecteInCursInCursComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InCursComponent", function () {
      return InCursComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var InCursComponent = /*#__PURE__*/function () {
      function InCursComponent() {
        _classCallCheck(this, InCursComponent);
      }

      _createClass(InCursComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return InCursComponent;
    }();

    InCursComponent.??fac = function InCursComponent_Factory(t) {
      return new (t || InCursComponent)();
    };

    InCursComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: InCursComponent,
      selectors: [["app-in-curs"]],
      decls: 2,
      vars: 0,
      template: function InCursComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "in-curs works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvaWVjdGUvaW4tY3Vycy9pbi1jdXJzLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](InCursComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-in-curs',
          templateUrl: './in-curs.component.html',
          styleUrls: ['./in-curs.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/proiecte/terminate/terminate.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/components/proiecte/terminate/terminate.component.ts ***!
    \**********************************************************************/

  /*! exports provided: TerminateComponent */

  /***/
  function srcAppComponentsProiecteTerminateTerminateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TerminateComponent", function () {
      return TerminateComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var TerminateComponent = /*#__PURE__*/function () {
      function TerminateComponent() {
        _classCallCheck(this, TerminateComponent);
      }

      _createClass(TerminateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TerminateComponent;
    }();

    TerminateComponent.??fac = function TerminateComponent_Factory(t) {
      return new (t || TerminateComponent)();
    };

    TerminateComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: TerminateComponent,
      selectors: [["app-terminate"]],
      decls: 2,
      vars: 0,
      template: function TerminateComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "terminate works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvaWVjdGUvdGVybWluYXRlL3Rlcm1pbmF0ZS5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](TerminateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-terminate',
          templateUrl: './terminate.component.html',
          styleUrls: ['./terminate.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\andre\Desktop\PortofoliuAngular\PortofoliuAndrei\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map