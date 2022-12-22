"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatetemplate"]("main",{

/***/ "./src/javascript/router.config.js":
/*!*****************************************!*\
  !*** ./src/javascript/router.config.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vue-router */ \"./node_modules/vue-router/dist/vue-router.mjs\");\n/* harmony import */ var _javascript_Main_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../javascript/Main.vue */ \"./src/javascript/Main.vue\");\n/* harmony import */ var _pages_Dashboards_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/Dashboards/index.vue */ \"./src/javascript/pages/Dashboards/index.vue\");\n/* harmony import */ var _pages_Dashboards_Default_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/Dashboards/Default.vue */ \"./src/javascript/pages/Dashboards/Default.vue\");\n/* harmony import */ var _pages_CMS_index_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/CMS/index.vue */ \"./src/javascript/pages/CMS/index.vue\");\n/* harmony import */ var _pages_Widgets_index_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/Widgets/index.vue */ \"./src/javascript/pages/Widgets/index.vue\");\n/* harmony import */ var _pages_Ecommerce_index_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/Ecommerce/index.vue */ \"./src/javascript/pages/Ecommerce/index.vue\");\n/* harmony import */ var _pages_Pages_index_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/Pages/index.vue */ \"./src/javascript/pages/Pages/index.vue\");\n/* harmony import */ var _pages_Components_index_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/Components/index.vue */ \"./src/javascript/pages/Components/index.vue\");\n/* harmony import */ var _pages_Charts_index_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/Charts/index.vue */ \"./src/javascript/pages/Charts/index.vue\");\n/* harmony import */ var _pages_Forms_index_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/Forms/index.vue */ \"./src/javascript/pages/Forms/index.vue\");\n/* harmony import */ var _pages_Tables_index_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/Tables/index.vue */ \"./src/javascript/pages/Tables/index.vue\");\n/* harmony import */ var _pages_Docs_index_vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/Docs/index.vue */ \"./src/javascript/pages/Docs/index.vue\");\n\n\n//////////// main content\n\n\n////////// Dashboards components\n\n\nvar CMS = function CMS() {\n  return __webpack_require__.e(/*! import() */ \"src_javascript_pages_Dashboards_CMS_vue\").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/Dashboards/CMS.vue */ \"./src/javascript/pages/Dashboards/CMS.vue\"));\n};\nvar ECommerce = function ECommerce() {\n  return Promise.all(/*! import() */[__webpack_require__.e(\"src_javascript_components_Table_OrderSection_vue\"), __webpack_require__.e(\"src_javascript_pages_Dashboards_E-commerce_vue\")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/Dashboards/E-commerce.vue */ \"./src/javascript/pages/Dashboards/E-commerce.vue\"));\n};\nvar projects = function projects() {\n  return __webpack_require__.e(/*! import() */ \"src_javascript_pages_Dashboards_Projects_vue\").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/Dashboards/Projects.vue */ \"./src/javascript/pages/Dashboards/Projects.vue\"));\n};\nvar charts = function charts() {\n  return __webpack_require__.e(/*! import() */ \"src_javascript_pages_Dashboards_Charts_vue\").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/Dashboards/Charts.vue */ \"./src/javascript/pages/Dashboards/Charts.vue\"));\n};\n\n////////// CMS components\n\nvar Posts = function Posts() {\n  return __webpack_require__.e(/*! import() */ \"src_javascript_pages_CMS_Posts_vue\").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/CMS/Posts.vue */ \"./src/javascript/pages/CMS/Posts.vue\"));\n};\nvar newPost = function newPost() {\n  return Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_tinymce_tinymce-vue_lib_es2015_main_ts_index_js\"), __webpack_require__.e(\"src_javascript_pages_CMS_newPost_vue\")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/CMS/newPost.vue */ \"./src/javascript/pages/CMS/newPost.vue\"));\n};\nvar Categories = function Categories() {\n  return __webpack_require__.e(/*! import() */ \"src_javascript_pages_CMS_Categories_vue\").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/CMS/Categories.vue */ \"./src/javascript/pages/CMS/Categories.vue\"));\n};\nvar MediaLibrary = function MediaLibrary() {\n  return __webpack_require__.e(/*! import() */ \"src_javascript_pages_CMS_MediaLibrary_vue\").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/CMS/MediaLibrary.vue */ \"./src/javascript/pages/CMS/MediaLibrary.vue\"));\n};\n\n////////// widget components\n\nvar Data = function Data() {\n  return Promise.all(/*! import() */[__webpack_require__.e(\"src_javascript_components_Table_OrderSection_vue\"), __webpack_require__.e(\"src_javascript_pages_Widgets_Data_vue\")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/Widgets/Data.vue */ \"./src/javascript/pages/Widgets/Data.vue\"));\n};\nvar Stats = function Stats() {\n  return __webpack_require__.e(/*! import() */ \"src_javascript_pages_Widgets_Stats_vue\").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/Widgets/Stats.vue */ \"./src/javascript/pages/Widgets/Stats.vue\"));\n};\n\n///////// ecommerce components\n\nvar Products = function Products() {\n  return __webpack_require__.e(/*! import() */ \"src_javascript_pages_Ecommerce_Products_vue\").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/Ecommerce/Products.vue */ \"./src/javascript/pages/Ecommerce/Products.vue\"));\n};\nvar Products_New = function Products_New() {\n  return Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_tinymce_tinymce-vue_lib_es2015_main_ts_index_js\"), __webpack_require__.e(\"src_javascript_pages_Ecommerce_Products-New_vue\")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/Ecommerce/Products-New.vue */ \"./src/javascript/pages/Ecommerce/Products-New.vue\"));\n};\nvar orders = function orders() {\n  return Promise.all(/*! import() */[__webpack_require__.e(\"src_javascript_components_Table_OrderSection_vue\"), __webpack_require__.e(\"src_javascript_pages_Ecommerce_Orders_vue\")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/Ecommerce/Orders.vue */ \"./src/javascript/pages/Ecommerce/Orders.vue\"));\n};\nvar Order_details = function Order_details() {\n  return __webpack_require__.e(/*! import() */ \"src_javascript_pages_Ecommerce_Order-details_vue\").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/Ecommerce/Order-details.vue */ \"./src/javascript/pages/Ecommerce/Order-details.vue\"));\n};\nvar Customers = function Customers() {\n  return __webpack_require__.e(/*! import() */ \"src_javascript_pages_Ecommerce_Customers_vue\").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/Ecommerce/Customers.vue */ \"./src/javascript/pages/Ecommerce/Customers.vue\"));\n};\n\n//////// pages components\n\nvar Profile = function Profile() {\n  return __webpack_require__.e(/*! import() */ \"src_javascript_pages_Pages_Profile_vue\").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/Pages/Profile.vue */ \"./src/javascript/pages/Pages/Profile.vue\"));\n};\nvar PricingTable = function PricingTable() {\n  return __webpack_require__.e(/*! import() */ \"src_javascript_pages_Pages_PricingTable_vue\").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/Pages/PricingTable.vue */ \"./src/javascript/pages/Pages/PricingTable.vue\"));\n};\nvar Contacts = function Contacts() {\n  return __webpack_require__.e(/*! import() */ \"src_javascript_pages_Pages_Contacts_vue\").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/Pages/Contacts.vue */ \"./src/javascript/pages/Pages/Contacts.vue\"));\n};\nvar Invoice = function Invoice() {\n  return __webpack_require__.e(/*! import() */ \"src_javascript_pages_Pages_Invoice_vue\").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/Pages/Invoice.vue */ \"./src/javascript/pages/Pages/Invoice.vue\"));\n};\nvar knowledgeBase = function knowledgeBase() {\n  return __webpack_require__.e(/*! import() */ \"src_javascript_pages_Pages_knowledgeBase_vue\").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/Pages/knowledgeBase.vue */ \"./src/javascript/pages/Pages/knowledgeBase.vue\"));\n};\nvar knowledgeBase_Topic = function knowledgeBase_Topic() {\n  return Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_simple-code-editor_CodeEditor_vue\"), __webpack_require__.e(\"src_javascript_pages_Pages_knowledgeBase-Topic_vue-node_modules_simple-code-editor_CodeEditor-774c6b\")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/Pages/knowledgeBase-Topic.vue */ \"./src/javascript/pages/Pages/knowledgeBase-Topic.vue\"));\n};\n\n/////// users component\nvar LoginPage = function LoginPage() {\n  return __webpack_require__.e(/*! import() */ \"src_javascript_pages_User_LoginPage_vue\").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/User/LoginPage.vue */ \"./src/javascript/pages/User/LoginPage.vue\"));\n};\nvar Register = function Register() {\n  return __webpack_require__.e(/*! import() */ \"src_javascript_pages_User_Register_vue\").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/User/Register.vue */ \"./src/javascript/pages/User/Register.vue\"));\n};\nvar Login2 = function Login2() {\n  return __webpack_require__.e(/*! import() */ \"src_javascript_pages_User_Login2_vue\").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/User/Login2.vue */ \"./src/javascript/pages/User/Login2.vue\"));\n};\nvar Register2 = function Register2() {\n  return __webpack_require__.e(/*! import() */ \"src_javascript_pages_User_Register2_vue\").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/User/Register2.vue */ \"./src/javascript/pages/User/Register2.vue\"));\n};\n\n////// component page components\n\nvar Cards = function Cards() {\n  return __webpack_require__.e(/*! import() */ \"src_javascript_pages_Components_Cards_vue\").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/Components/Cards.vue */ \"./src/javascript/pages/Components/Cards.vue\"));\n};\nvar Calender = function Calender() {\n  return Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_simple-code-editor_CodeEditor_vue\"), __webpack_require__.e(\"vendors-node_modules_vue-cal_dist_vuecal_css-node_modules_vue-cal_dist_vue-cal_es_js-node_mod-38b1b2\"), __webpack_require__.e(\"src_javascript_pages_Components_Calender_vue\")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/Components/Calender.vue */ \"./src/javascript/pages/Components/Calender.vue\"));\n};\nvar Gallery = function Gallery() {\n  return Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_simple-code-editor_CodeEditor_vue\"), __webpack_require__.e(\"src_javascript_pages_Components_Gallery_vue-node_modules_simple-code-editor_CodeEditor_vue-no-f82dd1\")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/Components/Gallery.vue */ \"./src/javascript/pages/Components/Gallery.vue\"));\n};\nvar LoadingButtons = function LoadingButtons() {\n  return Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_ladda_js_ladda_js\"), __webpack_require__.e(\"src_javascript_pages_Components_LoadingButtons_vue\")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/Components/LoadingButtons.vue */ \"./src/javascript/pages/Components/LoadingButtons.vue\"));\n};\nvar Maps = function Maps() {\n  return Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_simple-code-editor_CodeEditor_vue\"), __webpack_require__.e(\"vendors-node_modules_leaflet_dist_leaflet-src_js\"), __webpack_require__.e(\"src_javascript_pages_Components_Maps_vue-node_modules_simple-code-editor_CodeEditor_vue-node_-203f4d\")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/Components/Maps.vue */ \"./src/javascript/pages/Components/Maps.vue\"));\n};\nvar Notifications = function Notifications() {\n  return Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_simple-code-editor_CodeEditor_vue\"), __webpack_require__.e(\"src_javascript_pages_Components_Notifications_vue-node_modules_simple-code-editor_CodeEditor_-c2de5e\")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/Components/Notifications.vue */ \"./src/javascript/pages/Components/Notifications.vue\"));\n};\nvar Preloaders = function Preloaders() {\n  return __webpack_require__.e(/*! import() */ \"src_javascript_pages_Components_Preloaders_vue\").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/Components/Preloaders.vue */ \"./src/javascript/pages/Components/Preloaders.vue\"));\n};\n\n///// charts components\n\nvar Charts = function Charts() {\n  return __webpack_require__.e(/*! import() */ \"src_javascript_pages_Charts_Charts_vue\").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/Charts/Charts.vue */ \"./src/javascript/pages/Charts/Charts.vue\"));\n};\nvar charts_gauge_sparkline = function charts_gauge_sparkline() {\n  return __webpack_require__.e(/*! import() */ \"src_javascript_pages_Charts_charts-gauge-sparkline_vue\").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/Charts/charts-gauge-sparkline.vue */ \"./src/javascript/pages/Charts/charts-gauge-sparkline.vue\"));\n};\n\n///// forms components\n\nvar Basic_forms = function Basic_forms() {\n  return __webpack_require__.e(/*! import() */ \"src_javascript_pages_Forms_Basic-forms_vue\").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/Forms/Basic-forms.vue */ \"./src/javascript/pages/Forms/Basic-forms.vue\"));\n};\nvar Advance_forms = function Advance_forms() {\n  return __webpack_require__.e(/*! import() */ \"src_javascript_pages_Forms_Advance-forms_vue\").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/Forms/Advance-forms.vue */ \"./src/javascript/pages/Forms/Advance-forms.vue\"));\n};\nvar File_uploads = function File_uploads() {\n  return __webpack_require__.e(/*! import() */ \"src_javascript_pages_Forms_File-uploads_vue\").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/Forms/File-uploads.vue */ \"./src/javascript/pages/Forms/File-uploads.vue\"));\n};\nvar Text_editor = function Text_editor() {\n  return __webpack_require__.e(/*! import() */ \"src_javascript_pages_Forms_Text-editor_vue\").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/Forms/Text-editor.vue */ \"./src/javascript/pages/Forms/Text-editor.vue\"));\n};\nvar Validation = function Validation() {\n  return __webpack_require__.e(/*! import() */ \"src_javascript_pages_Forms_Validation_vue\").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/Forms/Validation.vue */ \"./src/javascript/pages/Forms/Validation.vue\"));\n};\n\n//// tables components\n\nvar Tailwind_tables = function Tailwind_tables() {\n  return __webpack_require__.e(/*! import() */ \"src_javascript_pages_Tables_Tailwind-tables_vue\").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/Tables/Tailwind-tables.vue */ \"./src/javascript/pages/Tables/Tailwind-tables.vue\"));\n};\nvar Datatable = function Datatable() {\n  return __webpack_require__.e(/*! import() */ \"src_javascript_pages_Tables_Datatable_vue\").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/Tables/Datatable.vue */ \"./src/javascript/pages/Tables/Datatable.vue\"));\n};\n\n///// docs components\n\nvar Introduction = function Introduction() {\n  return __webpack_require__.e(/*! import() */ \"src_javascript_pages_Docs_Introduction_vue\").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/Docs/Introduction.vue */ \"./src/javascript/pages/Docs/Introduction.vue\"));\n};\nvar Directory_structure = function Directory_structure() {\n  return __webpack_require__.e(/*! import() */ \"src_javascript_pages_Docs_Directory-structure_vue\").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/Docs/Directory-structure.vue */ \"./src/javascript/pages/Docs/Directory-structure.vue\"));\n};\nvar Nuxt = function Nuxt() {\n  return __webpack_require__.e(/*! import() */ \"src_javascript_pages_Docs_Nuxt_vue\").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/Docs/Nuxt.vue */ \"./src/javascript/pages/Docs/Nuxt.vue\"));\n};\nvar CSS_components = function CSS_components() {\n  return __webpack_require__.e(/*! import() */ \"src_javascript_pages_Docs_CSS-components_vue\").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/Docs/CSS-components.vue */ \"./src/javascript/pages/Docs/CSS-components.vue\"));\n};\nvar Customizing_CSS = function Customizing_CSS() {\n  return __webpack_require__.e(/*! import() */ \"src_javascript_pages_Docs_Customizing-CSS_vue\").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/Docs/Customizing-CSS.vue */ \"./src/javascript/pages/Docs/Customizing-CSS.vue\"));\n};\nvar Credits = function Credits() {\n  return __webpack_require__.e(/*! import() */ \"src_javascript_pages_Docs_Credits_vue\").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/Docs/Credits.vue */ \"./src/javascript/pages/Docs/Credits.vue\"));\n};\nvar Changelog = function Changelog() {\n  return __webpack_require__.e(/*! import() */ \"src_javascript_pages_Docs_Changelog_vue\").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/Docs/Changelog.vue */ \"./src/javascript/pages/Docs/Changelog.vue\"));\n};\nvar routes = [{\n  path: '',\n  name: 'Main',\n  component: _javascript_Main_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  redirect: {\n    name: 'default'\n  },\n  children: [{\n    path: '/Dashboards',\n    name: 'Dashboards',\n    component: _pages_Dashboards_index_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    children: [{\n      path: 'default',\n      name: 'default',\n      component: _pages_Dashboards_Default_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    }, {\n      path: 'Cms',\n      name: 'Cms',\n      component: CMS\n    }, {\n      path: 'ECommerce',\n      name: 'ECommerce',\n      component: ECommerce\n    }, {\n      path: 'projects',\n      name: 'projects',\n      component: projects\n    }, {\n      path: 'charts',\n      name: 'charts',\n      component: charts\n    }]\n  }, {\n    path: '/CMS',\n    name: 'CMS',\n    component: _pages_CMS_index_vue__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    children: [{\n      path: 'Posts',\n      name: 'Posts',\n      component: Posts\n    }, {\n      path: 'newPost',\n      name: 'newPost',\n      component: newPost\n    }, {\n      path: 'Categories',\n      name: 'Categories',\n      component: Categories\n    }, {\n      path: 'MediaLibrary',\n      name: 'MediaLibrary',\n      component: MediaLibrary\n    }]\n  }, {\n    path: '/Widgets',\n    name: 'Widgets',\n    component: _pages_Widgets_index_vue__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    children: [{\n      path: 'Data',\n      name: 'Data',\n      component: Data\n    }, {\n      path: 'Stats',\n      name: 'Stats',\n      component: Stats\n    }]\n  }, {\n    path: '/Ecommerce',\n    name: 'Ecommerce',\n    component: _pages_Ecommerce_index_vue__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n    children: [{\n      path: 'Products',\n      name: 'Products',\n      component: Products\n    }, {\n      path: 'Products_New',\n      name: 'Products_New',\n      component: Products_New\n    }, {\n      path: 'Orders',\n      name: 'Orders',\n      component: orders\n    }, {\n      path: 'Order_details',\n      name: 'Order_details',\n      component: Order_details\n    }, {\n      path: 'Customers',\n      name: 'Customers',\n      component: Customers\n    }]\n  }, {\n    path: '/Pages',\n    name: 'Pages',\n    component: _pages_Pages_index_vue__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n    children: [{\n      path: 'Profile',\n      name: 'Profile',\n      component: Profile\n    }, {\n      path: 'PricingTable',\n      name: 'PricingTable',\n      component: PricingTable\n    }, {\n      path: 'Contacts',\n      name: 'Contacts',\n      component: Contacts\n    }, {\n      path: 'Invoice',\n      name: 'Invoice',\n      component: Invoice\n    }, {\n      path: 'knowledgeBase',\n      name: 'knowledgeBase',\n      component: knowledgeBase\n    }, {\n      path: 'knowledgeBase_Topic',\n      name: 'knowledgeBase_Topic',\n      component: knowledgeBase_Topic\n    }]\n  }, {\n    path: '/Components',\n    name: 'Components',\n    component: _pages_Components_index_vue__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n    children: [{\n      path: 'Cards',\n      name: 'Cards',\n      component: Cards\n    }, {\n      path: 'Calender',\n      name: 'Calender',\n      component: Calender\n    }, {\n      path: 'Gallery',\n      name: 'Gallery',\n      component: Gallery\n    }, {\n      path: 'LoadingButtons',\n      name: 'LoadingButtons',\n      component: LoadingButtons\n    }, {\n      path: 'Maps',\n      name: 'Maps',\n      component: Maps\n    }, {\n      path: 'Notifications',\n      name: 'Notifications',\n      component: Notifications\n    }, {\n      path: 'Preloaders',\n      name: 'Preloaders',\n      component: Preloaders\n    }]\n  }, {\n    path: '/Chart',\n    name: 'Chart',\n    component: _pages_Charts_index_vue__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n    children: [{\n      path: 'Charts',\n      name: 'Charts',\n      component: Charts\n    }, {\n      path: 'charts-gauge-sparkline',\n      name: 'charts-gauge-sparkline',\n      component: charts_gauge_sparkline\n    }]\n  }, {\n    path: '/Forms',\n    name: 'Forms',\n    component: _pages_Forms_index_vue__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n    children: [{\n      path: 'Basic_forms',\n      name: 'Basic_forms',\n      component: Basic_forms\n    }, {\n      path: 'Advance_forms',\n      name: 'Advance_forms',\n      component: Advance_forms\n    }, {\n      path: 'File_uploads',\n      name: 'File_uploads',\n      component: File_uploads\n    }, {\n      path: 'Text_editor',\n      name: 'Text_editor',\n      component: Text_editor\n    }, {\n      path: 'Validation',\n      name: 'Validation',\n      component: Validation\n    }]\n  }, {\n    path: '/Tables',\n    name: 'Tables',\n    component: _pages_Tables_index_vue__WEBPACK_IMPORTED_MODULE_10__[\"default\"],\n    children: [{\n      path: 'Tailwind_tables',\n      name: 'Tailwind_tables',\n      component: Tailwind_tables\n    }, {\n      path: 'Datatable',\n      name: 'Datatable',\n      component: Datatable\n    }]\n  }, {\n    path: '/docs',\n    name: 'docs',\n    component: _pages_Docs_index_vue__WEBPACK_IMPORTED_MODULE_11__[\"default\"],\n    children: [{\n      path: 'Introduction',\n      name: 'Introduction',\n      component: Introduction\n    }, {\n      path: 'Directory_structure',\n      name: 'Directory_structure',\n      component: Directory_structure\n    }, {\n      path: 'Nuxt',\n      name: 'Nuxt',\n      component: Nuxt\n    }, {\n      path: 'CSS_components',\n      name: 'CSS_components',\n      component: CSS_components\n    }, {\n      path: 'Customizing_CSS',\n      name: 'Customizing_CSS',\n      component: Customizing_CSS\n    }, {\n      path: 'Credits',\n      name: 'Credits',\n      component: Credits\n    }, {\n      path: 'Changelog',\n      name: 'Changelog',\n      component: Changelog\n    }]\n  }]\n}, {\n  name: 'LoginPage',\n  path: '/LoginPage',\n  component: LoginPage\n}, {\n  name: 'Register',\n  path: '/Register',\n  component: Register\n}, {\n  name: 'Login2',\n  path: '/Login2',\n  component: Login2\n}, {\n  name: 'Register2',\n  path: '/Register2',\n  component: Register2\n}];\nvar router = (0,vue_router__WEBPACK_IMPORTED_MODULE_12__.createRouter)({\n  history: (0,vue_router__WEBPACK_IMPORTED_MODULE_12__.createWebHashHistory)(),\n  routes: routes,\n  scrollBehavior: function scrollBehavior(to, from, savedPosition) {\n    if (savedPosition) {\n      return savedPosition;\n    } else {\n      return {\n        top: 0,\n        behavior: 'smooth'\n      };\n    }\n  }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://template/./src/javascript/router.config.js?");

/***/ }),

/***/ "./src/style/Tailwind.config/Tailwind.base.scss":
/*!******************************************************!*\
  !*** ./src/style/Tailwind.config/Tailwind.base.scss ***!
  \******************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n    if(true) {\n      // 1671714427744\n      var cssReload = __webpack_require__(/*! ../../../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ \"./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js\")(module.id, {\"locals\":false});\n      module.hot.dispose(cssReload);\n      module.hot.accept(undefined, cssReload);\n    }\n  \n\n//# sourceURL=webpack://template/./src/style/Tailwind.config/Tailwind.base.scss?");

/***/ }),

/***/ "./src/style/Tailwind.config/Tailwind.component.scss":
/*!***********************************************************!*\
  !*** ./src/style/Tailwind.config/Tailwind.component.scss ***!
  \***********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n    if(true) {\n      // 1671714427820\n      var cssReload = __webpack_require__(/*! ../../../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ \"./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js\")(module.id, {\"locals\":false});\n      module.hot.dispose(cssReload);\n      module.hot.accept(undefined, cssReload);\n    }\n  \n\n//# sourceURL=webpack://template/./src/style/Tailwind.config/Tailwind.component.scss?");

/***/ }),

/***/ "./src/style/Tailwind.config/Tailwind.utilities.scss":
/*!***********************************************************!*\
  !*** ./src/style/Tailwind.config/Tailwind.utilities.scss ***!
  \***********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n    if(true) {\n      // 1671714427740\n      var cssReload = __webpack_require__(/*! ../../../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ \"./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js\")(module.id, {\"locals\":false});\n      module.hot.dispose(cssReload);\n      module.hot.accept(undefined, cssReload);\n    }\n  \n\n//# sourceURL=webpack://template/./src/style/Tailwind.config/Tailwind.utilities.scss?");

/***/ }),

/***/ "./src/style/components/Transition.scss":
/*!**********************************************!*\
  !*** ./src/style/components/Transition.scss ***!
  \**********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n    if(true) {\n      // 1671714428012\n      var cssReload = __webpack_require__(/*! ../../../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ \"./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js\")(module.id, {\"locals\":false});\n      module.hot.dispose(cssReload);\n      module.hot.accept(undefined, cssReload);\n    }\n  \n\n//# sourceURL=webpack://template/./src/style/components/Transition.scss?");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/javascript/components/Header/Dropdown.vue?vue&type=style&index=0&id=c841ff9a&lang=css":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/javascript/components/Header/Dropdown.vue?vue&type=style&index=0&id=c841ff9a&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n    if(true) {\n      // 1671714426388\n      var cssReload = __webpack_require__(/*! ../../../../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ \"./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js\")(module.id, {\"locals\":false});\n      module.hot.dispose(cssReload);\n      module.hot.accept(undefined, cssReload);\n    }\n  \n\n//# sourceURL=webpack://template/./src/javascript/components/Header/Dropdown.vue?./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B8%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/javascript/components/Table/TableRow.vue?vue&type=style&index=0&id=53f7dc46&scoped=true&lang=css":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/javascript/components/Table/TableRow.vue?vue&type=style&index=0&id=53f7dc46&scoped=true&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n    if(true) {\n      // 1671714426581\n      var cssReload = __webpack_require__(/*! ../../../../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ \"./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js\")(module.id, {\"locals\":false});\n      module.hot.dispose(cssReload);\n      module.hot.accept(undefined, cssReload);\n    }\n  \n\n//# sourceURL=webpack://template/./src/javascript/components/Table/TableRow.vue?./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B8%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/javascript/components/Tooltip.vue?vue&type=style&index=0&id=16670a7a&scoped=true&lang=css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/javascript/components/Tooltip.vue?vue&type=style&index=0&id=16670a7a&scoped=true&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n    if(true) {\n      // 1671714425184\n      var cssReload = __webpack_require__(/*! ../../../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ \"./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js\")(module.id, {\"locals\":false});\n      module.hot.dispose(cssReload);\n      module.hot.accept(undefined, cssReload);\n    }\n  \n\n//# sourceURL=webpack://template/./src/javascript/components/Tooltip.vue?./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B8%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/javascript/components/Grid/row.vue?vue&type=style&index=0&id=fbb4d5fe&lang=scss&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/javascript/components/Grid/row.vue?vue&type=style&index=0&id=fbb4d5fe&lang=scss&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n    if(true) {\n      // 1671714425614\n      var cssReload = __webpack_require__(/*! ../../../../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ \"./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js\")(module.id, {\"locals\":false});\n      module.hot.dispose(cssReload);\n      module.hot.accept(undefined, cssReload);\n    }\n  \n\n//# sourceURL=webpack://template/./src/javascript/components/Grid/row.vue?./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B8%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/javascript/components/Header/NavItemUser.vue?vue&type=style&index=0&id=8e7be0e2&scoped=true&lang=scss":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/javascript/components/Header/NavItemUser.vue?vue&type=style&index=0&id=8e7be0e2&scoped=true&lang=scss ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n    if(true) {\n      // 1671714428200\n      var cssReload = __webpack_require__(/*! ../../../../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ \"./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js\")(module.id, {\"locals\":false});\n      module.hot.dispose(cssReload);\n      module.hot.accept(undefined, cssReload);\n    }\n  \n\n//# sourceURL=webpack://template/./src/javascript/components/Header/NavItemUser.vue?./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B8%5D.use%5B0%5D");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/get javascript chunk filename */
/******/ (() => {
/******/ 	// This function allow to reference async chunks
/******/ 	__webpack_require__.u = (chunkId) => {
/******/ 		// return url for filenames based on template
/******/ 		return "" + chunkId + "." + {"src_javascript_pages_Dashboards_CMS_vue":"712a4bbf74861411de71","src_javascript_components_Table_OrderSection_vue":"97483b153db7e866a3cc","src_javascript_pages_Dashboards_E-commerce_vue":"80342e1c3cfe23715046","src_javascript_pages_Dashboards_Projects_vue":"d4bc8f7d075eb820606f","src_javascript_pages_Dashboards_Charts_vue":"b1567ce9b83825061e62","src_javascript_pages_CMS_Posts_vue":"89be111b44b84fe8536f","vendors-node_modules_tinymce_tinymce-vue_lib_es2015_main_ts_index_js":"542a816d8cea2acb3cec","src_javascript_pages_CMS_newPost_vue":"d6a46923209901a6debd","src_javascript_pages_CMS_Categories_vue":"b7df09596864669bb87c","src_javascript_pages_CMS_MediaLibrary_vue":"8be73277c6af4b93cc2b","src_javascript_pages_Widgets_Data_vue":"4b7bc59c377e4c575e14","src_javascript_pages_Widgets_Stats_vue":"ba5a41bebcea105d73bb","src_javascript_pages_Ecommerce_Products_vue":"75a162ebea64befc6c2c","src_javascript_pages_Ecommerce_Products-New_vue":"756c398d176e8e92d20e","src_javascript_pages_Ecommerce_Orders_vue":"97ac4bee1209a0683f51","src_javascript_pages_Ecommerce_Order-details_vue":"613a7f897d41fd57a2f2","src_javascript_pages_Ecommerce_Customers_vue":"50e29a22a9c1be1f35da","src_javascript_pages_Pages_Profile_vue":"f640b1ec2d559ba128ea","src_javascript_pages_Pages_PricingTable_vue":"1948937ebeaa94bac0a5","src_javascript_pages_Pages_Contacts_vue":"01fef2636535f8d5da5c","src_javascript_pages_Pages_Invoice_vue":"53878fd52913070b57d4","src_javascript_pages_Pages_knowledgeBase_vue":"3b298bfcac39d630a6f5","vendors-node_modules_simple-code-editor_CodeEditor_vue":"f4ace298be6470e8f79e","src_javascript_pages_Pages_knowledgeBase-Topic_vue-node_modules_simple-code-editor_CodeEditor-774c6b":"c7f80a8fe3b9e126c4d9","src_javascript_pages_User_LoginPage_vue":"0730fa0fe14a9567c5df","src_javascript_pages_User_Register_vue":"481d4f4301f43fe6df1d","src_javascript_pages_User_Login2_vue":"e94ff77811607cfc25b6","src_javascript_pages_User_Register2_vue":"8203ed12746d92a8467c","src_javascript_pages_Components_Cards_vue":"0b31ce29be339b81b2d3","vendors-node_modules_vue-cal_dist_vuecal_css-node_modules_vue-cal_dist_vue-cal_es_js-node_mod-38b1b2":"e3a653241d4a945beadb","src_javascript_pages_Components_Calender_vue":"29b1e579d51cf57faa3e","src_javascript_pages_Components_Gallery_vue-node_modules_simple-code-editor_CodeEditor_vue-no-f82dd1":"906b2dbb12912ffef44d","vendors-node_modules_ladda_js_ladda_js":"b6c12790512721c2faed","src_javascript_pages_Components_LoadingButtons_vue":"489c23b2ae6380973a93","vendors-node_modules_leaflet_dist_leaflet-src_js":"d2f2c10566cd8475bf2b","src_javascript_pages_Components_Maps_vue-node_modules_simple-code-editor_CodeEditor_vue-node_-203f4d":"d37dbd848aa38d49848f","src_javascript_pages_Components_Notifications_vue-node_modules_simple-code-editor_CodeEditor_-c2de5e":"ca42aaf521d84d31a500","src_javascript_pages_Components_Preloaders_vue":"57a3fb37c0e837a27bec","src_javascript_pages_Charts_Charts_vue":"736fd980bea98d600015","src_javascript_pages_Charts_charts-gauge-sparkline_vue":"03b5e97af510039591e3","src_javascript_pages_Forms_Basic-forms_vue":"0f30fd62c69091a5dcf9","src_javascript_pages_Forms_Advance-forms_vue":"c17a4106ee50fa00b202","src_javascript_pages_Forms_File-uploads_vue":"41ff5f68dc87f37842f9","src_javascript_pages_Forms_Text-editor_vue":"93389dc80c691ae90bc3","src_javascript_pages_Forms_Validation_vue":"e7d113682b492c92501b","src_javascript_pages_Tables_Tailwind-tables_vue":"42d36a43648177f298a0","src_javascript_pages_Tables_Datatable_vue":"2ef637a8aae8489573e1","src_javascript_pages_Docs_Introduction_vue":"2eae264942568232e041","src_javascript_pages_Docs_Directory-structure_vue":"9686fa7fbd300a096bc5","src_javascript_pages_Docs_Nuxt_vue":"707500370972ad31acaa","src_javascript_pages_Docs_CSS-components_vue":"9dc180f63bed1ff39950","src_javascript_pages_Docs_Customizing-CSS_vue":"e7948dc6cb564b7d0fce","src_javascript_pages_Docs_Credits_vue":"51d6790cae89e24cf140","src_javascript_pages_Docs_Changelog_vue":"ddcdb3b73c65b3368f01","node_modules_vue-cal_dist_i18n_en_es_js":"7be559c40c07516b7e26","node_modules_vue-cal_dist_i18n_ar_es_js":"a35d1ff561cb6826ba13","node_modules_vue-cal_dist_i18n_bg_es_js":"e84a00c430ed8a262706","node_modules_vue-cal_dist_i18n_bn_es_js":"6d7c16cf7fd928697f8c","node_modules_vue-cal_dist_i18n_bs_es_js":"82b636d0202e5cd8220a","node_modules_vue-cal_dist_i18n_ca_es_js":"324df88047b70b63714e","node_modules_vue-cal_dist_i18n_cs_es_js":"dbabddace5b72f760476","node_modules_vue-cal_dist_i18n_da_es_js":"82c7b4651e9f12013d57","node_modules_vue-cal_dist_i18n_de_es_js":"67ceb67bf4fed03bef15","node_modules_vue-cal_dist_i18n_el_es_js":"b34b946059c9f53381e5","node_modules_vue-cal_dist_i18n_es_es_js":"fbcbf8042f7b79563697","node_modules_vue-cal_dist_i18n_et_es_js":"531546113ec81cb7ebaa","node_modules_vue-cal_dist_i18n_fa_es_js":"8820430aab7f6ebf7bd1","node_modules_vue-cal_dist_i18n_fr_es_js":"81e02a50ae09390b057f","node_modules_vue-cal_dist_i18n_he_es_js":"5177654239c81a5fd980","node_modules_vue-cal_dist_i18n_hr_es_js":"4863a490261745f3d755","node_modules_vue-cal_dist_i18n_hu_es_js":"75b9968b89b3ff44f5d5","node_modules_vue-cal_dist_i18n_id_es_js":"913c0da3a554441aff80","node_modules_vue-cal_dist_i18n_is_es_js":"172a7da4fa187591e9bb","node_modules_vue-cal_dist_i18n_it_es_js":"062cbac9f22f6e2ab21a","node_modules_vue-cal_dist_i18n_ja_es_js":"1f264b218d87a24bffd0","node_modules_vue-cal_dist_i18n_ka_es_js":"4e2816f20e77c77d3101","node_modules_vue-cal_dist_i18n_ko_es_js":"b247b84514c17fd8170a","node_modules_vue-cal_dist_i18n_lt_es_js":"6e495fb02a49cbc3491c","node_modules_vue-cal_dist_i18n_mn_es_js":"00e85f93182b7c8f605f","node_modules_vue-cal_dist_i18n_nl_es_js":"4f47c0869a68916dfdc7","node_modules_vue-cal_dist_i18n_no_es_js":"6cdac4510641b53107f0","node_modules_vue-cal_dist_i18n_pl_es_js":"9481841881f22fd8f6c7","node_modules_vue-cal_dist_i18n_pt-br_es_js":"ef3a2eabac4d768a2f5c","node_modules_vue-cal_dist_i18n_ro_es_js":"388de7ce615a7b5d8820","node_modules_vue-cal_dist_i18n_ru_es_js":"2b905cfb60f5930d250c","node_modules_vue-cal_dist_i18n_sk_es_js":"ffed850d0e45767f70b6","node_modules_vue-cal_dist_i18n_sl_es_js":"ac71da9da8ab3db5a35e","node_modules_vue-cal_dist_i18n_sq_es_js":"b09662b1ae31b58a94c4","node_modules_vue-cal_dist_i18n_sr_es_js":"1ecbb090f4a77f225365","node_modules_vue-cal_dist_i18n_sv_es_js":"f1cbcb301363c717ffd1","node_modules_vue-cal_dist_i18n_tr_es_js":"313a563cecdef5705db7","node_modules_vue-cal_dist_i18n_uk_es_js":"4eaadae3a25a7f4e3e0d","node_modules_vue-cal_dist_i18n_vi_es_js":"5830479d4167d8b91bdf","node_modules_vue-cal_dist_i18n_zh-cn_es_js":"c845a898b7108e4a4cf5","node_modules_vue-cal_dist_i18n_zh-hk_es_js":"6731c7889f51b4051ed1","node_modules_vue-cal_dist_drag-and-drop_es_js":"6f635a2f099615e87e8e"}[chunkId] + ".js";
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b61df49836e66c033d24")
/******/ })();
/******/ 
/******/ /* webpack/runtime/css loading */
/******/ (() => {
/******/ 	var createStylesheet = (chunkId, fullhref, resolve, reject) => {
/******/ 		var linkTag = document.createElement("link");
/******/ 	
/******/ 		linkTag.rel = "stylesheet";
/******/ 		linkTag.type = "text/css";
/******/ 		var onLinkComplete = (event) => {
/******/ 			// avoid mem leaks.
/******/ 			linkTag.onerror = linkTag.onload = null;
/******/ 			if (event.type === 'load') {
/******/ 				resolve();
/******/ 			} else {
/******/ 				var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 				var realHref = event && event.target && event.target.href || fullhref;
/******/ 				var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + realHref + ")");
/******/ 				err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 				err.type = errorType;
/******/ 				err.request = realHref;
/******/ 				linkTag.parentNode.removeChild(linkTag)
/******/ 				reject(err);
/******/ 			}
/******/ 		}
/******/ 		linkTag.onerror = linkTag.onload = onLinkComplete;
/******/ 		linkTag.href = fullhref;
/******/ 	
/******/ 		document.head.appendChild(linkTag);
/******/ 		return linkTag;
/******/ 	};
/******/ 	var findStylesheet = (href, fullhref) => {
/******/ 		var existingLinkTags = document.getElementsByTagName("link");
/******/ 		for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 			var tag = existingLinkTags[i];
/******/ 			var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 			if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return tag;
/******/ 		}
/******/ 		var existingStyleTags = document.getElementsByTagName("style");
/******/ 		for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 			var tag = existingStyleTags[i];
/******/ 			var dataHref = tag.getAttribute("data-href");
/******/ 			if(dataHref === href || dataHref === fullhref) return tag;
/******/ 		}
/******/ 	};
/******/ 	var loadStylesheet = (chunkId) => {
/******/ 		return new Promise((resolve, reject) => {
/******/ 			var href = __webpack_require__.miniCssF(chunkId);
/******/ 			var fullhref = __webpack_require__.p + href;
/******/ 			if(findStylesheet(href, fullhref)) return resolve();
/******/ 			createStylesheet(chunkId, fullhref, resolve, reject);
/******/ 		});
/******/ 	}
/******/ 	// object to store loaded CSS chunks
/******/ 	var installedCssChunks = {
/******/ 		"main": 0
/******/ 	};
/******/ 	
/******/ 	__webpack_require__.f.miniCss = (chunkId, promises) => {
/******/ 		var cssChunks = {"src_javascript_pages_CMS_MediaLibrary_vue":1,"src_javascript_pages_Ecommerce_Products_vue":1,"src_javascript_pages_Pages_Invoice_vue":1,"src_javascript_pages_Pages_knowledgeBase-Topic_vue-node_modules_simple-code-editor_CodeEditor-774c6b":1,"vendors-node_modules_vue-cal_dist_vuecal_css-node_modules_vue-cal_dist_vue-cal_es_js-node_mod-38b1b2":1,"src_javascript_pages_Components_Calender_vue":1,"src_javascript_pages_Components_Gallery_vue-node_modules_simple-code-editor_CodeEditor_vue-no-f82dd1":1,"src_javascript_pages_Components_Maps_vue-node_modules_simple-code-editor_CodeEditor_vue-node_-203f4d":1,"src_javascript_pages_Components_Notifications_vue-node_modules_simple-code-editor_CodeEditor_-c2de5e":1};
/******/ 		if(installedCssChunks[chunkId]) promises.push(installedCssChunks[chunkId]);
/******/ 		else if(installedCssChunks[chunkId] !== 0 && cssChunks[chunkId]) {
/******/ 			promises.push(installedCssChunks[chunkId] = loadStylesheet(chunkId).then(() => {
/******/ 				installedCssChunks[chunkId] = 0;
/******/ 			}, (e) => {
/******/ 				delete installedCssChunks[chunkId];
/******/ 				throw e;
/******/ 			}));
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	var oldTags = [];
/******/ 	var newTags = [];
/******/ 	var applyHandler = (options) => {
/******/ 		return { dispose: () => {
/******/ 			for(var i = 0; i < oldTags.length; i++) {
/******/ 				var oldTag = oldTags[i];
/******/ 				if(oldTag.parentNode) oldTag.parentNode.removeChild(oldTag);
/******/ 			}
/******/ 			oldTags.length = 0;
/******/ 		}, apply: () => {
/******/ 			for(var i = 0; i < newTags.length; i++) newTags[i].rel = "stylesheet";
/******/ 			newTags.length = 0;
/******/ 		} };
/******/ 	}
/******/ 	__webpack_require__.hmrC.miniCss = (chunkIds, removedChunks, removedModules, promises, applyHandlers, updatedModulesList) => {
/******/ 		applyHandlers.push(applyHandler);
/******/ 		chunkIds.forEach((chunkId) => {
/******/ 			var href = __webpack_require__.miniCssF(chunkId);
/******/ 			var fullhref = __webpack_require__.p + href;
/******/ 			var oldTag = findStylesheet(href, fullhref);
/******/ 			if(!oldTag) return;
/******/ 			promises.push(new Promise((resolve, reject) => {
/******/ 				var tag = createStylesheet(chunkId, fullhref, () => {
/******/ 					tag.as = "style";
/******/ 					tag.rel = "preload";
/******/ 					resolve();
/******/ 				}, reject);
/******/ 				oldTags.push(oldTag);
/******/ 				newTags.push(tag);
/******/ 			}));
/******/ 		});
/******/ 	}
/******/ })();
/******/ 
/******/ /* webpack/runtime/jsonp chunk loading */
/******/ (() => {
/******/ 	// no baseURI
/******/ 	
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 		"main": 0
/******/ 	};
/******/ 	
/******/ 	__webpack_require__.f.j = (chunkId, promises) => {
/******/ 			// JSONP chunk loading for javascript
/******/ 			var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 			if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 	
/******/ 				// a Promise means "currently loading".
/******/ 				if(installedChunkData) {
/******/ 					promises.push(installedChunkData[2]);
/******/ 				} else {
/******/ 					if(true) { // all chunks have JS
/******/ 						// setup Promise in chunk cache
/******/ 						var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 						promises.push(installedChunkData[2] = promise);
/******/ 	
/******/ 						// start chunk loading
/******/ 						var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 						// create error before stack unwound to get useful stacktrace later
/******/ 						var error = new Error();
/******/ 						var loadingEnded = (event) => {
/******/ 							if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 								installedChunkData = installedChunks[chunkId];
/******/ 								if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 								if(installedChunkData) {
/******/ 									var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 									var realSrc = event && event.target && event.target.src;
/******/ 									error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 									error.name = 'ChunkLoadError';
/******/ 									error.type = errorType;
/******/ 									error.request = realSrc;
/******/ 									installedChunkData[1](error);
/******/ 								}
/******/ 							}
/******/ 						};
/******/ 						__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 					} else installedChunks[chunkId] = 0;
/******/ 				}
/******/ 			}
/******/ 	};
/******/ 	
/******/ 	// no prefetching
/******/ 	
/******/ 	// no preloaded
/******/ 	
/******/ 	var currentUpdatedModulesList;
/******/ 	var waitingUpdateResolves = {};
/******/ 	function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 		currentUpdatedModulesList = updatedModulesList;
/******/ 		return new Promise((resolve, reject) => {
/******/ 			waitingUpdateResolves[chunkId] = resolve;
/******/ 			// start update chunk loading
/******/ 			var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 			// create error before stack unwound to get useful stacktrace later
/******/ 			var error = new Error();
/******/ 			var loadingEnded = (event) => {
/******/ 				if(waitingUpdateResolves[chunkId]) {
/******/ 					waitingUpdateResolves[chunkId] = undefined
/******/ 					var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 					var realSrc = event && event.target && event.target.src;
/******/ 					error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 					error.name = 'ChunkLoadError';
/******/ 					error.type = errorType;
/******/ 					error.request = realSrc;
/******/ 					reject(error);
/******/ 				}
/******/ 			};
/******/ 			__webpack_require__.l(url, loadingEnded);
/******/ 		});
/******/ 	}
/******/ 	
/******/ 	self["webpackHotUpdatetemplate"] = (chunkId, moreModules, runtime) => {
/******/ 		for(var moduleId in moreModules) {
/******/ 			if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 				currentUpdate[moduleId] = moreModules[moduleId];
/******/ 				if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 			}
/******/ 		}
/******/ 		if(runtime) currentUpdateRuntime.push(runtime);
/******/ 		if(waitingUpdateResolves[chunkId]) {
/******/ 			waitingUpdateResolves[chunkId]();
/******/ 			waitingUpdateResolves[chunkId] = undefined;
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	var currentUpdateChunks;
/******/ 	var currentUpdate;
/******/ 	var currentUpdateRemovedChunks;
/******/ 	var currentUpdateRuntime;
/******/ 	function applyHandler(options) {
/******/ 		if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 		currentUpdateChunks = undefined;
/******/ 		function getAffectedModuleEffects(updateModuleId) {
/******/ 			var outdatedModules = [updateModuleId];
/******/ 			var outdatedDependencies = {};
/******/ 	
/******/ 			var queue = outdatedModules.map(function (id) {
/******/ 				return {
/******/ 					chain: [id],
/******/ 					id: id
/******/ 				};
/******/ 			});
/******/ 			while (queue.length > 0) {
/******/ 				var queueItem = queue.pop();
/******/ 				var moduleId = queueItem.id;
/******/ 				var chain = queueItem.chain;
/******/ 				var module = __webpack_require__.c[moduleId];
/******/ 				if (
/******/ 					!module ||
/******/ 					(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 				)
/******/ 					continue;
/******/ 				if (module.hot._selfDeclined) {
/******/ 					return {
/******/ 						type: "self-declined",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				if (module.hot._main) {
/******/ 					return {
/******/ 						type: "unaccepted",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				for (var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = __webpack_require__.c[parentId];
/******/ 					if (!parent) continue;
/******/ 					if (parent.hot._declinedDependencies[moduleId]) {
/******/ 						return {
/******/ 							type: "declined",
/******/ 							chain: chain.concat([parentId]),
/******/ 							moduleId: moduleId,
/******/ 							parentId: parentId
/******/ 						};
/******/ 					}
/******/ 					if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 					if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if (!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push({
/******/ 						chain: chain.concat([parentId]),
/******/ 						id: parentId
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 	
/******/ 			return {
/******/ 				type: "accepted",
/******/ 				moduleId: updateModuleId,
/******/ 				outdatedModules: outdatedModules,
/******/ 				outdatedDependencies: outdatedDependencies
/******/ 			};
/******/ 		}
/******/ 	
/******/ 		function addAllToSet(a, b) {
/******/ 			for (var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if (a.indexOf(item) === -1) a.push(item);
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/ 	
/******/ 		var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 			console.warn(
/******/ 				"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 			);
/******/ 		};
/******/ 	
/******/ 		for (var moduleId in currentUpdate) {
/******/ 			if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				var newModuleFactory = currentUpdate[moduleId];
/******/ 				/** @type {TODO} */
/******/ 				var result;
/******/ 				if (newModuleFactory) {
/******/ 					result = getAffectedModuleEffects(moduleId);
/******/ 				} else {
/******/ 					result = {
/******/ 						type: "disposed",
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				/** @type {Error|false} */
/******/ 				var abortError = false;
/******/ 				var doApply = false;
/******/ 				var doDispose = false;
/******/ 				var chainInfo = "";
/******/ 				if (result.chain) {
/******/ 					chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 				}
/******/ 				switch (result.type) {
/******/ 					case "self-declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of self decline: " +
/******/ 									result.moduleId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of declined dependency: " +
/******/ 									result.moduleId +
/******/ 									" in " +
/******/ 									result.parentId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "unaccepted":
/******/ 						if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 						if (!options.ignoreUnaccepted)
/******/ 							abortError = new Error(
/******/ 								"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "accepted":
/******/ 						if (options.onAccepted) options.onAccepted(result);
/******/ 						doApply = true;
/******/ 						break;
/******/ 					case "disposed":
/******/ 						if (options.onDisposed) options.onDisposed(result);
/******/ 						doDispose = true;
/******/ 						break;
/******/ 					default:
/******/ 						throw new Error("Unexception type " + result.type);
/******/ 				}
/******/ 				if (abortError) {
/******/ 					return {
/******/ 						error: abortError
/******/ 					};
/******/ 				}
/******/ 				if (doApply) {
/******/ 					appliedUpdate[moduleId] = newModuleFactory;
/******/ 					addAllToSet(outdatedModules, result.outdatedModules);
/******/ 					for (moduleId in result.outdatedDependencies) {
/******/ 						if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 							if (!outdatedDependencies[moduleId])
/******/ 								outdatedDependencies[moduleId] = [];
/******/ 							addAllToSet(
/******/ 								outdatedDependencies[moduleId],
/******/ 								result.outdatedDependencies[moduleId]
/******/ 							);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 				if (doDispose) {
/******/ 					addAllToSet(outdatedModules, [result.moduleId]);
/******/ 					appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		currentUpdate = undefined;
/******/ 	
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for (var j = 0; j < outdatedModules.length; j++) {
/******/ 			var outdatedModuleId = outdatedModules[j];
/******/ 			var module = __webpack_require__.c[outdatedModuleId];
/******/ 			if (
/******/ 				module &&
/******/ 				(module.hot._selfAccepted || module.hot._main) &&
/******/ 				// removed self-accepted modules should not be required
/******/ 				appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 				// when called invalidate self-accepting is not possible
/******/ 				!module.hot._selfInvalidated
/******/ 			) {
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: outdatedModuleId,
/******/ 					require: module.hot._requireSelf,
/******/ 					errorHandler: module.hot._selfAccepted
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		var moduleOutdatedDependencies;
/******/ 	
/******/ 		return {
/******/ 			dispose: function () {
/******/ 				currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 					delete installedChunks[chunkId];
/******/ 				});
/******/ 				currentUpdateRemovedChunks = undefined;
/******/ 	
/******/ 				var idx;
/******/ 				var queue = outdatedModules.slice();
/******/ 				while (queue.length > 0) {
/******/ 					var moduleId = queue.pop();
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (!module) continue;
/******/ 	
/******/ 					var data = {};
/******/ 	
/******/ 					// Call dispose handlers
/******/ 					var disposeHandlers = module.hot._disposeHandlers;
/******/ 					for (j = 0; j < disposeHandlers.length; j++) {
/******/ 						disposeHandlers[j].call(null, data);
/******/ 					}
/******/ 					__webpack_require__.hmrD[moduleId] = data;
/******/ 	
/******/ 					// disable module (this disables requires from this module)
/******/ 					module.hot.active = false;
/******/ 	
/******/ 					// remove module from cache
/******/ 					delete __webpack_require__.c[moduleId];
/******/ 	
/******/ 					// when disposing there is no need to call dispose handler
/******/ 					delete outdatedDependencies[moduleId];
/******/ 	
/******/ 					// remove "parents" references from all children
/******/ 					for (j = 0; j < module.children.length; j++) {
/******/ 						var child = __webpack_require__.c[module.children[j]];
/******/ 						if (!child) continue;
/******/ 						idx = child.parents.indexOf(moduleId);
/******/ 						if (idx >= 0) {
/******/ 							child.parents.splice(idx, 1);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 	
/******/ 				// remove outdated dependency from module children
/******/ 				var dependency;
/******/ 				for (var outdatedModuleId in outdatedDependencies) {
/******/ 					if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 						module = __webpack_require__.c[outdatedModuleId];
/******/ 						if (module) {
/******/ 							moduleOutdatedDependencies =
/******/ 								outdatedDependencies[outdatedModuleId];
/******/ 							for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 								dependency = moduleOutdatedDependencies[j];
/******/ 								idx = module.children.indexOf(dependency);
/******/ 								if (idx >= 0) module.children.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			},
/******/ 			apply: function (reportError) {
/******/ 				// insert new code
/******/ 				for (var updateModuleId in appliedUpdate) {
/******/ 					if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 						__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 					}
/******/ 				}
/******/ 	
/******/ 				// run new runtime modules
/******/ 				for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 					currentUpdateRuntime[i](__webpack_require__);
/******/ 				}
/******/ 	
/******/ 				// call accept handlers
/******/ 				for (var outdatedModuleId in outdatedDependencies) {
/******/ 					if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 						var module = __webpack_require__.c[outdatedModuleId];
/******/ 						if (module) {
/******/ 							moduleOutdatedDependencies =
/******/ 								outdatedDependencies[outdatedModuleId];
/******/ 							var callbacks = [];
/******/ 							var errorHandlers = [];
/******/ 							var dependenciesForCallbacks = [];
/******/ 							for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 								var dependency = moduleOutdatedDependencies[j];
/******/ 								var acceptCallback =
/******/ 									module.hot._acceptedDependencies[dependency];
/******/ 								var errorHandler =
/******/ 									module.hot._acceptedErrorHandlers[dependency];
/******/ 								if (acceptCallback) {
/******/ 									if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 									callbacks.push(acceptCallback);
/******/ 									errorHandlers.push(errorHandler);
/******/ 									dependenciesForCallbacks.push(dependency);
/******/ 								}
/******/ 							}
/******/ 							for (var k = 0; k < callbacks.length; k++) {
/******/ 								try {
/******/ 									callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 								} catch (err) {
/******/ 									if (typeof errorHandlers[k] === "function") {
/******/ 										try {
/******/ 											errorHandlers[k](err, {
/******/ 												moduleId: outdatedModuleId,
/******/ 												dependencyId: dependenciesForCallbacks[k]
/******/ 											});
/******/ 										} catch (err2) {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-error-handler-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err2,
/******/ 													originalError: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err2);
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									} else {
/******/ 										if (options.onErrored) {
/******/ 											options.onErrored({
/******/ 												type: "accept-errored",
/******/ 												moduleId: outdatedModuleId,
/******/ 												dependencyId: dependenciesForCallbacks[k],
/******/ 												error: err
/******/ 											});
/******/ 										}
/******/ 										if (!options.ignoreErrored) {
/******/ 											reportError(err);
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 	
/******/ 				// Load self accepted modules
/******/ 				for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 					var item = outdatedSelfAcceptedModules[o];
/******/ 					var moduleId = item.module;
/******/ 					try {
/******/ 						item.require(moduleId);
/******/ 					} catch (err) {
/******/ 						if (typeof item.errorHandler === "function") {
/******/ 							try {
/******/ 								item.errorHandler(err, {
/******/ 									moduleId: moduleId,
/******/ 									module: __webpack_require__.c[moduleId]
/******/ 								});
/******/ 							} catch (err2) {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-error-handler-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err2,
/******/ 										originalError: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err2);
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						} else {
/******/ 							if (options.onErrored) {
/******/ 								options.onErrored({
/******/ 									type: "self-accept-errored",
/******/ 									moduleId: moduleId,
/******/ 									error: err
/******/ 								});
/******/ 							}
/******/ 							if (!options.ignoreErrored) {
/******/ 								reportError(err);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 	
/******/ 				return outdatedModules;
/******/ 			}
/******/ 		};
/******/ 	}
/******/ 	__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 		if (!currentUpdate) {
/******/ 			currentUpdate = {};
/******/ 			currentUpdateRuntime = [];
/******/ 			currentUpdateRemovedChunks = [];
/******/ 			applyHandlers.push(applyHandler);
/******/ 		}
/******/ 		if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 			currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 		}
/******/ 	};
/******/ 	__webpack_require__.hmrC.jsonp = function (
/******/ 		chunkIds,
/******/ 		removedChunks,
/******/ 		removedModules,
/******/ 		promises,
/******/ 		applyHandlers,
/******/ 		updatedModulesList
/******/ 	) {
/******/ 		applyHandlers.push(applyHandler);
/******/ 		currentUpdateChunks = {};
/******/ 		currentUpdateRemovedChunks = removedChunks;
/******/ 		currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 			obj[key] = false;
/******/ 			return obj;
/******/ 		}, {});
/******/ 		currentUpdateRuntime = [];
/******/ 		chunkIds.forEach(function (chunkId) {
/******/ 			if (
/******/ 				__webpack_require__.o(installedChunks, chunkId) &&
/******/ 				installedChunks[chunkId] !== undefined
/******/ 			) {
/******/ 				promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 				currentUpdateChunks[chunkId] = true;
/******/ 			} else {
/******/ 				currentUpdateChunks[chunkId] = false;
/******/ 			}
/******/ 		});
/******/ 		if (__webpack_require__.f) {
/******/ 			__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 				if (
/******/ 					currentUpdateChunks &&
/******/ 					__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 					!currentUpdateChunks[chunkId]
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	__webpack_require__.hmrM = () => {
/******/ 		if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 		return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 			if(response.status === 404) return; // no update available
/******/ 			if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 			return response.json();
/******/ 		});
/******/ 	};
/******/ 	
/******/ 	// no on chunks loaded
/******/ 	
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 		var [chunkIds, moreModules, runtime] = data;
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0;
/******/ 		if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 		}
/******/ 		if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				installedChunks[chunkId][0]();
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 	
/******/ 	}
/******/ 	
/******/ 	var chunkLoadingGlobal = self["webpackChunktemplate"] = self["webpackChunktemplate"] || [];
/******/ 	chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 	chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ })();
/******/ 
/******/ }
);