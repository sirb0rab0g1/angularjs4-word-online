webpackJsonp([2],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main-contianer {\n\n}\n\n.example-sidenav-fab-container {\n    width: 100%;\n    height: 100vh;\n}\n\n.example-sidenav-fab-container md-sidenav {\n    background-color: #3b5998;\n    color:white;\n}\n\n.example-sidenav-fab-container .mat-sidenav-content,\n.example-sidenav-fab-container md-sidenav {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    overflow: visible;\n}\n\n.example-scrolling-content {\n    overflow: auto;\n}\n\n.ul-container{\n    list-style-type: none;\n    padding:10px;\n    margin: 0;\n    font-family:Calibri,'Gill Sans', 'Gill Sans MT', 'Trebuchet MS', sans-serif;\n    font-size:12px;\n}\n\n.ul-container:hover{\n    background-color: #18488a;\n    cursor: pointer;\n    border:solid 1px;\n}\n\n.example-fab {\n    margin-bottom: 10px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<md-sidenav-container class=\"example-sidenav-fab-container\">\n  <md-sidenav #sidenav mode=\"side\" opened=\"false\">\n    <div class=\"example-scrolling-content\">\n      <div style=\"width:160px;\"></div>\n      <ul class=\"ul-container\" *ngFor=\"let x of myObject;let y = index;\">\n        <li (click)=\"sidemenu(y+1)\" style=\"padding:10px;\">\n          <span style=\"margin-left:20px;\">{{x.name}}</span>\n        </li>\n      </ul>\n    </div>\n  </md-sidenav>\n\n  <div class=\"example-scrolling-content\" style=\"padding:10px;\">\n    <button md-raised-button class=\"example-fab\" (click)=\"sidenav.toggle()\">File</button>\n    <div *ngIf=\"template1==true\">\n      <app-editor></app-editor>\n    </div>\n    <div *ngIf=\"template2==true\">\n      Content progress in \"New\"<br><br>\n      <md-progress-bar class=\"example-margin\" [color]=\"color\" [mode]=\"mode\" [value]=\"value\" [bufferValue]=\"bufferValue\">\n      </md-progress-bar>\n    </div>\n    <div *ngIf=\"template3==true\">\n      Content progress in \"Open\"<br><br>\n      <md-progress-bar class=\"example-margin\" [color]=\"color\" [mode]=\"mode\" [value]=\"value\" [bufferValue]=\"bufferValue\">\n      </md-progress-bar>\n    </div>\n    <div *ngIf=\"template4==true\">\n      <!--<app-sample></app-sample>-->\n      Content progress in \"Save As\"<br><br>\n      <md-progress-bar class=\"example-margin\" [color]=\"color\" [mode]=\"mode\" [value]=\"value\" [bufferValue]=\"bufferValue\">\n      </md-progress-bar>\n    </div>\n    <div *ngIf=\"template5==true\">\n      Content progress \"Print\"<br><br>\n      <md-progress-bar class=\"example-margin\" [color]=\"color\" [mode]=\"mode\" [value]=\"value\" [bufferValue]=\"bufferValue\">\n      </md-progress-bar>\n    </div>\n    <div *ngIf=\"template6==true\">\n      Content progress \"Share\"<br><br>\n      <md-progress-bar class=\"example-margin\" [color]=\"color\" [mode]=\"mode\" [value]=\"value\" [bufferValue]=\"bufferValue\">\n      </md-progress-bar>\n    </div>\n    <div *ngIf=\"template7==true\">\n      Content progress \"About\"<br><br>\n      <md-progress-bar class=\"example-margin\" [color]=\"color\" [mode]=\"mode\" [value]=\"value\" [bufferValue]=\"bufferValue\">\n      </md-progress-bar>\n    </div>\n    <div *ngIf=\"template8==true\">\n        <app-contact></app-contact>\n    </div>\n\n  </div>\n</md-sidenav-container>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.template1 = true;
        this.template2 = false;
        this.template3 = false;
        this.template4 = false;
        this.template5 = false;
        this.template6 = false;
        this.template7 = false;
        this.template8 = false;
        this.template9 = false;
        this.myObject = [
            {
                name: 'Info'
            },
            {
                name: 'New'
            },
            {
                name: 'Open'
            },
            {
                name: 'Save As'
            },
            {
                name: 'Print'
            },
            {
                name: 'Share'
            },
            {
                name: 'About'
            },
            {
                name: 'Contact'
            }
        ];
        this.color = 'primary';
        this.mode = 'buffer';
        this.value = 5;
        this.bufferValue = 75;
    }
    AppComponent.prototype.sidemenu = function (index) {
        if (index == 1) {
            console.log('number 1 me');
            this.template1 = true;
            this.template2 = false;
            this.template3 = false;
            this.template4 = false;
            this.template5 = false;
            this.template6 = false;
            this.template7 = false;
            this.template8 = false;
            this.template9 = false;
        }
        else if (index == 2) {
            console.log('number 2 me');
            this.template1 = false;
            this.template2 = true;
            this.template3 = false;
            this.template4 = false;
            this.template5 = false;
            this.template6 = false;
            this.template7 = false;
            this.template8 = false;
            this.template9 = false;
        }
        else if (index == 3) {
            console.log('number 2 me');
            this.template1 = false;
            this.template2 = false;
            this.template3 = true;
            this.template4 = false;
            this.template5 = false;
            this.template6 = false;
            this.template7 = false;
            this.template8 = false;
            this.template9 = false;
        }
        else if (index == 4) {
            console.log('number 2 me');
            this.template1 = false;
            this.template2 = false;
            this.template3 = false;
            this.template4 = true;
            this.template5 = false;
            this.template6 = false;
            this.template7 = false;
            this.template8 = false;
            this.template9 = false;
        }
        else if (index == 5) {
            console.log('number 2 me');
            this.template1 = false;
            this.template2 = false;
            this.template3 = false;
            this.template4 = false;
            this.template5 = true;
            this.template6 = false;
            this.template7 = false;
            this.template8 = false;
            this.template9 = false;
        }
        else if (index == 6) {
            console.log('number 2 me');
            this.template1 = false;
            this.template2 = false;
            this.template3 = false;
            this.template4 = false;
            this.template5 = false;
            this.template6 = true;
            this.template7 = false;
            this.template8 = false;
            this.template9 = false;
        }
        else if (index == 7) {
            console.log('number 2 me');
            this.template1 = false;
            this.template2 = false;
            this.template3 = false;
            this.template4 = false;
            this.template5 = false;
            this.template6 = false;
            this.template7 = true;
            this.template8 = false;
            this.template9 = false;
        }
        else if (index == 8) {
            console.log('number 2 me');
            this.template1 = false;
            this.template2 = false;
            this.template3 = false;
            this.template4 = false;
            this.template5 = false;
            this.template6 = false;
            this.template7 = false;
            this.template8 = true;
            this.template9 = false;
        }
        else if (index == 9) {
            console.log('number 2 me');
            this.template1 = false;
            this.template2 = false;
            this.template3 = false;
            this.template4 = false;
            this.template5 = false;
            this.template6 = false;
            this.template7 = false;
            this.template8 = false;
            this.template9 = true;
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__editor_editor_component__ = __webpack_require__("../../../../../src/app/editor/editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular_froala_wysiwyg__ = __webpack_require__("../../../../angular-froala-wysiwyg/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//template components


//angular material components



//prime components
// import { EditorModule } from 'primeng/primeng';

var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__editor_editor_component__["a" /* EditorComponent */],
            __WEBPACK_IMPORTED_MODULE_6__contact_contact_component__["a" /* ContactComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            //angularmaterial
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["a" /* MdSidenavModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["b" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["c" /* MdProgressBarModule */],
            //prime-faces
            // EditorModule
            //wysiwyg
            __WEBPACK_IMPORTED_MODULE_8_angular_froala_wysiwyg__["a" /* FroalaEditorModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_8_angular_froala_wysiwyg__["b" /* FroalaViewModule */].forRoot()
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".img-style {\n  height: 80px;\n  width: auto;\n  border-radius: 50%;\n  -webkit-filter: grayscale(100%);\n  /* Ch 23+, Saf 6.0+, BB 10.0+ */\n  filter: grayscale(100%);\n  /* FF 35+ */\n}\n\n.img-style:hover {\n  transition: -webkit-filter .5s ease-in-out;\n  transition: filter .5s ease-in-out;\n  transition: filter .5s ease-in-out, -webkit-filter .5s ease-in-out;\n  -webkit-filter: grayscale(0%);\n  /* Ch 23+, Saf 6.0+, BB 10.0+ */\n  filter: grayscale(0%);\n  /* FF 35+ */\n  cursor: pointer;\n}\n\n.contact-image-container {\n  margin-top: 10px;\n  text-align: center;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\n  <div class=\"ui-g-12 ui-md-6 ui-lg-5\">\n    <span style=\"font-size:40px;\">Contact</span>\n    <div *ngFor=\"let info of contactObject\">\n      <div class=\"ui-g-12 ui-md-12 ui-lg-12\">\n        <div class=\"ui-g-12 ui-md-4 ui-lg-2 contact-image-container\">\n          <a href=\"https://www.facebook.com/zxcasdqwe123qweasdzxc\">\n            <img class=\"img-style\" src=\"{{info.img}}\"/>\n          </a>\n        </div>\n        <div class=\"ui-g-12 ui-md-8 ui-lg-7 contact-info\" style=\"margin-top:10px;\">\n          <div><b>{{info.title}}</b></div>\n          <div style=\"margin-top:8px;\">{{info.desc}}</div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"ui-g-12 ui-md-6 ui-lg-2\"></div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = (function () {
    function ContactComponent() {
        this.contactObject = [
            {
                img: '../assets/images/Zp5lUnYl.jpg',
                title: 'Kent Dela Cruz Fueconcillo',
                desc: 'Tell me what you think.'
            }
        ];
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-contact',
        template: __webpack_require__("../../../../../src/app/contact/contact.component.html"),
        styles: [__webpack_require__("../../../../../src/app/contact/contact.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ContactComponent);

//# sourceMappingURL=contact.component.js.map

/***/ }),

/***/ "../../../../../src/app/editor/editor.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".editor-style{\n    height:100vh;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/editor/editor.component.html":
/***/ (function(module, exports) {

module.exports = "<div [froalaEditor]>\n  <div style=\"min-height:320px;max-height:auto;\">\n    <small>\n        Hello<br>\n    Welcome to my own version of <b>Microsoft Word Online</b> enjoy!\n    </small>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/editor/editor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EditorComponent = (function () {
    function EditorComponent() {
        this.text1 = '<div>Hello World!</div><div>Welcome to my own version of <b>Microsoft Word Online</b> enjoy!</div><div><br></div>';
    }
    EditorComponent.prototype.ngOnInit = function () {
    };
    return EditorComponent;
}());
EditorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-editor',
        template: __webpack_require__("../../../../../src/app/editor/editor.component.html"),
        styles: [__webpack_require__("../../../../../src/app/editor/editor.component.css")]
    }),
    __metadata("design:paramtypes", [])
], EditorComponent);

//# sourceMappingURL=editor.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map