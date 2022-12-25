"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatetemplate"]("src_javascript_composables_usePost_js-src_javascript_components_reusable_Datapicker_vue",{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/javascript/components/reusable/Datapicker.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/javascript/components/reusable/Datapicker.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var v_calendar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! v-calendar */ \"./node_modules/v-calendar/dist/v-calendar.es.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  data: function data() {\n    return {\n      date: new Date(),\n      dates: [{\n        date: new Date()\n      }],\n      selected: {},\n      range: {\n        start: new Date(2020, 0, 6),\n        end: new Date(2020, 0, 23)\n      }\n    };\n  },\n  props: ['single', 'multiple', 'range'],\n  components: {\n    Calendar: v_calendar__WEBPACK_IMPORTED_MODULE_0__.Calendar,\n    DatePicker: v_calendar__WEBPACK_IMPORTED_MODULE_0__.DatePicker\n  },\n  methods: {\n    addDate: function addDate() {\n      var _this = this;\n      this.dates.push({\n        date: new Date()\n      });\n      this.$nextTick(function () {\n        var btn = _this.$refs.button[_this.$refs.button.length - 1];\n        btn.click();\n      });\n    },\n    removeDate: function removeDate(date, hide) {\n      this.dates = this.dates.filter(function (d) {\n        return d !== date;\n      });\n      hide();\n    },\n    dateSelected: function dateSelected(e, date, toggle) {\n      this.selected = date;\n      toggle({\n        ref: e.target\n      });\n    }\n  }\n});\n\n//# sourceURL=webpack://template/./src/javascript/components/reusable/Datapicker.vue?./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B8%5D.use%5B0%5D");

/***/ })

});