(self["webpackChunk_kie_tools_dmn_editor"] = self["webpackChunk_kie_tools_dmn_editor"] || []).push([["main"],{

/***/ "./.storybook/preview.tsx":
/*!********************************!*\
  !*** ./.storybook/preview.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js");

const preview = {
  parameters: {
    actions: {
      argTypesRegex: "^on[A-Z].*"
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    },
    options: {
      storySort: {
        order: ["Dev", "Misc", ["Overview", "*", ["Overview", "*", ["Overview", "*"]]], "Use cases", ["Overview", "*", ["Overview", "*", ["Overview", "*"]]]]
      }
    }
  },
  decorators: [Story => (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
    style: {
      position: "absolute",
      width: "100vw",
      height: "100vh",
      top: "0px",
      left: "0px"
    },
    children: Story()
  })]
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (preview);

/***/ }),

/***/ "./storybook-config-entry.js":
/*!***********************************!*\
  !*** ./storybook-config-entry.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _storybook_global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @storybook/global */ "@storybook/global");
/* harmony import */ var _storybook_global__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_storybook_global__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _storybook_preview_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @storybook/preview-api */ "@storybook/preview-api");
/* harmony import */ var _storybook_preview_api__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_storybook_preview_api__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _storybook_channels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @storybook/channels */ "@storybook/channels");
/* harmony import */ var _storybook_channels__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_storybook_channels__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _storybook_stories_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storybook-stories.js */ "./storybook-stories.js");







const getProjectAnnotations = () =>
  (0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_1__.composeConfigs)([__webpack_require__(/*! ../../node_modules/.pnpm/@storybook+react@7.4.6_react-dom@17.0.2_react@17.0.2__react@17.0.2_typescript@5.5.3/node_modules/@storybook/react/preview.js */ "../../node_modules/.pnpm/@storybook+react@7.4.6_react-dom@17.0.2_react@17.0.2__react@17.0.2_typescript@5.5.3/node_modules/@storybook/react/preview.js"),__webpack_require__(/*! ../../node_modules/.pnpm/@storybook+addon-docs@7.4.6_@types+react-dom@17.0.8_@types+react@17.0.21_encoding@0.1.13_reac_osluumftxctvhueztkvao5vug4/node_modules/@storybook/addon-docs/preview.js */ "../../node_modules/.pnpm/@storybook+addon-docs@7.4.6_@types+react-dom@17.0.8_@types+react@17.0.21_encoding@0.1.13_reac_osluumftxctvhueztkvao5vug4/node_modules/@storybook/addon-docs/preview.js"),__webpack_require__(/*! ../../node_modules/.pnpm/@storybook+addon-highlight@7.4.6/node_modules/@storybook/addon-highlight/preview.js */ "../../node_modules/.pnpm/@storybook+addon-highlight@7.4.6/node_modules/@storybook/addon-highlight/preview.js"),__webpack_require__(/*! ../../node_modules/.pnpm/@storybook+addon-links@7.4.6_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@storybook/addon-links/preview.js */ "../../node_modules/.pnpm/@storybook+addon-links@7.4.6_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@storybook/addon-links/preview.js"),__webpack_require__(/*! ../../node_modules/.pnpm/@storybook+addon-measure@7.4.6_@types+react-dom@17.0.8_@types+react@17.0.21_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@storybook/addon-measure/preview.js */ "../../node_modules/.pnpm/@storybook+addon-measure@7.4.6_@types+react-dom@17.0.8_@types+react@17.0.21_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@storybook/addon-measure/preview.js"),__webpack_require__(/*! ../../node_modules/.pnpm/@storybook+addon-outline@7.4.6_@types+react-dom@17.0.8_@types+react@17.0.21_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@storybook/addon-outline/preview.js */ "../../node_modules/.pnpm/@storybook+addon-outline@7.4.6_@types+react-dom@17.0.8_@types+react@17.0.21_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@storybook/addon-outline/preview.js"),__webpack_require__(/*! ./.storybook/preview.tsx */ "./.storybook/preview.tsx"),]);

const channel = (0,_storybook_channels__WEBPACK_IMPORTED_MODULE_2__.createBrowserChannel)({ page: 'preview' });
_storybook_preview_api__WEBPACK_IMPORTED_MODULE_1__.addons.setChannel(channel);

if (_storybook_global__WEBPACK_IMPORTED_MODULE_0__.global.CONFIG_TYPE === 'DEVELOPMENT'){
  window.__STORYBOOK_SERVER_CHANNEL__ = channel;
}

const preview = new _storybook_preview_api__WEBPACK_IMPORTED_MODULE_1__.PreviewWeb();

window.__STORYBOOK_PREVIEW__ = preview;
window.__STORYBOOK_STORY_STORE__ = preview.storyStore;
window.__STORYBOOK_ADDONS_CHANNEL__ = channel;
window.__STORYBOOK_CLIENT_API__ = new _storybook_preview_api__WEBPACK_IMPORTED_MODULE_1__.ClientApi({ storyStore: preview.storyStore });

preview.initialize({ importFn: _storybook_stories_js__WEBPACK_IMPORTED_MODULE_3__.importFn, getProjectAnnotations });

if (false) {}

/***/ }),

/***/ "./storybook-stories.js":
/*!******************************!*\
  !*** ./storybook-stories.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   importFn: () => (/* binding */ importFn)
/* harmony export */ });
const pipeline = (x) => x();

const importers = [
  async (path) => {
    if (!/^\.[\\/](?:stories(?:\/(?!\.)(?:(?:(?!(?:^|\/)\.).)*?)\/|\/|$)(?!\.)(?=.)[^/]*?\.mdx)$/.exec(path)) {
      return;
    }
  
    const pathRemainder = path.substring(10);
    return __webpack_require__("./stories lazy recursive ^\\.\\/.*$ include: (?:\\/stories(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$")("./" + pathRemainder);
  }
  ,
  async (path) => {
    if (!/^\.[\\/](?:stories(?:\/(?!\.)(?:(?:(?!(?:^|\/)\.).)*?)\/|\/|$)(?!\.)(?=.)[^/]*?\.stories\.(js|jsx|mjs|ts|tsx))$/.exec(path)) {
      return;
    }
  
    const pathRemainder = path.substring(10);
    return __webpack_require__("./stories lazy recursive ^\\.\\/.*$ include: (?:\\/stories(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cmjs%7Cts%7Ctsx))$")("./" + pathRemainder);
  }
  
];

async function importFn(path) {
  for (let i = 0; i < importers.length; i++) {
    const moduleExports = await pipeline(() => importers[i](path));
    if (moduleExports) {
      return moduleExports;
    }
  }
}

/***/ }),

/***/ "./stories lazy recursive ^\\.\\/.*$ include: (?:\\/stories(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./stories/ lazy ^\.\/.*$ include: (?:\/stories(?:\/(?%21\.)(?:(?:(?%21(?:^%7C\/)\.).)*?)\/%7C\/%7C$)(?%21\.)(?=.)[^/]*?\.mdx)$ chunkName: [request] namespace object ***!
  \****************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./misc/empty/Empty.mdx": [
		"./stories/misc/empty/Empty.mdx",
		"vendors-node_modules_pnpm_reactflow_background_11_3_6__types_react_17_0_21_immer_10_0_3_patch-0af155",
		"vendors-node_modules_pnpm_storybook_components_7_4_6__types_react-dom_17_0_8__types_react_17_-bd3eea",
		"vendors-node_modules_pnpm_storybook_blocks_7_6_13__types_react-dom_17_0_8__types_react_17_0_2-bd9076",
		"misc-empty-Empty-stories",
		"misc-empty-Empty-mdx"
	],
	"./misc/emptyWithAvailableExternalModels/EmptyWithAvailableExternalModels.mdx": [
		"./stories/misc/emptyWithAvailableExternalModels/EmptyWithAvailableExternalModels.mdx",
		"vendors-node_modules_pnpm_reactflow_background_11_3_6__types_react_17_0_21_immer_10_0_3_patch-0af155",
		"vendors-node_modules_pnpm_storybook_components_7_4_6__types_react-dom_17_0_8__types_react_17_-bd3eea",
		"vendors-node_modules_pnpm_storybook_blocks_7_6_13__types_react-dom_17_0_8__types_react_17_0_2-bd9076",
		"misc-empty-Empty-stories",
		"dist_DmnEditor_js",
		"misc-emptyWithAvailableExternalModels-EmptyWithAvailableExternalModels-stories",
		"misc-emptyWithAvailableExternalModels-EmptyWithAvailableExternalModels-mdx"
	],
	"./misc/evaluationHighlights/EvaluationHighlights.mdx": [
		"./stories/misc/evaluationHighlights/EvaluationHighlights.mdx",
		"vendors-node_modules_pnpm_reactflow_background_11_3_6__types_react_17_0_21_immer_10_0_3_patch-0af155",
		"vendors-node_modules_pnpm_storybook_components_7_4_6__types_react-dom_17_0_8__types_react_17_-bd3eea",
		"vendors-node_modules_pnpm_storybook_blocks_7_6_13__types_react-dom_17_0_8__types_react_17_0_2-bd9076",
		"misc-empty-Empty-stories",
		"dist_DmnEditor_js",
		"misc-evaluationHighlights-EvaluationHighlights-stories",
		"misc-evaluationHighlights-EvaluationHighlights-mdx"
	],
	"./useCases/loanPreQualification/LoanPreQualification.mdx": [
		"./stories/useCases/loanPreQualification/LoanPreQualification.mdx",
		"vendors-node_modules_pnpm_reactflow_background_11_3_6__types_react_17_0_21_immer_10_0_3_patch-0af155",
		"vendors-node_modules_pnpm_storybook_components_7_4_6__types_react-dom_17_0_8__types_react_17_-bd3eea",
		"vendors-node_modules_pnpm_storybook_blocks_7_6_13__types_react-dom_17_0_8__types_react_17_0_2-bd9076",
		"misc-empty-Empty-stories",
		"useCases-loanPreQualification-LoanPreQualification-stories",
		"useCases-loanPreQualification-LoanPreQualification-mdx"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./stories lazy recursive ^\\.\\/.*$ include: (?:\\/stories(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./stories lazy recursive ^\\.\\/.*$ include: (?:\\/stories(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cmjs%7Cts%7Ctsx))$":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./stories/ lazy ^\.\/.*$ include: (?:\/stories(?:\/(?%21\.)(?:(?:(?%21(?:^%7C\/)\.).)*?)\/%7C\/%7C$)(?%21\.)(?=.)[^/]*?\.stories\.(js%7Cjsx%7Cmjs%7Cts%7Ctsx))$ chunkName: [request] namespace object ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./dev/DevWebApp.stories": [
		"./stories/dev/DevWebApp.stories.tsx",
		"vendors-node_modules_pnpm_reactflow_background_11_3_6__types_react_17_0_21_immer_10_0_3_patch-0af155",
		"misc-empty-Empty-stories",
		"useCases-loanPreQualification-LoanPreQualification-stories",
		"dev-DevWebApp-stories"
	],
	"./dev/DevWebApp.stories.tsx": [
		"./stories/dev/DevWebApp.stories.tsx",
		"vendors-node_modules_pnpm_reactflow_background_11_3_6__types_react_17_0_21_immer_10_0_3_patch-0af155",
		"misc-empty-Empty-stories",
		"useCases-loanPreQualification-LoanPreQualification-stories",
		"dev-DevWebApp-stories"
	],
	"./misc/empty/Empty.stories": [
		"./stories/misc/empty/Empty.stories.tsx",
		"vendors-node_modules_pnpm_reactflow_background_11_3_6__types_react_17_0_21_immer_10_0_3_patch-0af155",
		"misc-empty-Empty-stories"
	],
	"./misc/empty/Empty.stories.tsx": [
		"./stories/misc/empty/Empty.stories.tsx",
		"vendors-node_modules_pnpm_reactflow_background_11_3_6__types_react_17_0_21_immer_10_0_3_patch-0af155",
		"misc-empty-Empty-stories"
	],
	"./misc/emptyWithAvailableExternalModels/EmptyWithAvailableExternalModels.stories": [
		"./stories/misc/emptyWithAvailableExternalModels/EmptyWithAvailableExternalModels.stories.tsx",
		"vendors-node_modules_pnpm_reactflow_background_11_3_6__types_react_17_0_21_immer_10_0_3_patch-0af155",
		"misc-empty-Empty-stories",
		"dist_DmnEditor_js",
		"misc-emptyWithAvailableExternalModels-EmptyWithAvailableExternalModels-stories"
	],
	"./misc/emptyWithAvailableExternalModels/EmptyWithAvailableExternalModels.stories.tsx": [
		"./stories/misc/emptyWithAvailableExternalModels/EmptyWithAvailableExternalModels.stories.tsx",
		"vendors-node_modules_pnpm_reactflow_background_11_3_6__types_react_17_0_21_immer_10_0_3_patch-0af155",
		"misc-empty-Empty-stories",
		"dist_DmnEditor_js",
		"misc-emptyWithAvailableExternalModels-EmptyWithAvailableExternalModels-stories"
	],
	"./misc/evaluationHighlights/EvaluationHighlights.stories": [
		"./stories/misc/evaluationHighlights/EvaluationHighlights.stories.tsx",
		"vendors-node_modules_pnpm_reactflow_background_11_3_6__types_react_17_0_21_immer_10_0_3_patch-0af155",
		"misc-empty-Empty-stories",
		"dist_DmnEditor_js",
		"misc-evaluationHighlights-EvaluationHighlights-stories"
	],
	"./misc/evaluationHighlights/EvaluationHighlights.stories.tsx": [
		"./stories/misc/evaluationHighlights/EvaluationHighlights.stories.tsx",
		"vendors-node_modules_pnpm_reactflow_background_11_3_6__types_react_17_0_21_immer_10_0_3_patch-0af155",
		"misc-empty-Empty-stories",
		"dist_DmnEditor_js",
		"misc-evaluationHighlights-EvaluationHighlights-stories"
	],
	"./useCases/loanPreQualification/LoanPreQualification.stories": [
		"./stories/useCases/loanPreQualification/LoanPreQualification.stories.tsx",
		"vendors-node_modules_pnpm_reactflow_background_11_3_6__types_react_17_0_21_immer_10_0_3_patch-0af155",
		"misc-empty-Empty-stories",
		"useCases-loanPreQualification-LoanPreQualification-stories"
	],
	"./useCases/loanPreQualification/LoanPreQualification.stories.tsx": [
		"./stories/useCases/loanPreQualification/LoanPreQualification.stories.tsx",
		"vendors-node_modules_pnpm_reactflow_background_11_3_6__types_react_17_0_21_immer_10_0_3_patch-0af155",
		"misc-empty-Empty-stories",
		"useCases-loanPreQualification-LoanPreQualification-stories"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./stories lazy recursive ^\\.\\/.*$ include: (?:\\/stories(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cmjs%7Cts%7Ctsx))$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "@storybook/channels":
/*!************************************************!*\
  !*** external "__STORYBOOK_MODULE_CHANNELS__" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = __STORYBOOK_MODULE_CHANNELS__;

/***/ }),

/***/ "@storybook/client-logger":
/*!*****************************************************!*\
  !*** external "__STORYBOOK_MODULE_CLIENT_LOGGER__" ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = __STORYBOOK_MODULE_CLIENT_LOGGER__;

/***/ }),

/***/ "@storybook/core-events":
/*!***************************************************!*\
  !*** external "__STORYBOOK_MODULE_CORE_EVENTS__" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = __STORYBOOK_MODULE_CORE_EVENTS__;

/***/ }),

/***/ "@storybook/global":
/*!**********************************************!*\
  !*** external "__STORYBOOK_MODULE_GLOBAL__" ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = __STORYBOOK_MODULE_GLOBAL__;

/***/ }),

/***/ "@storybook/preview-api":
/*!***************************************************!*\
  !*** external "__STORYBOOK_MODULE_PREVIEW_API__" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = __STORYBOOK_MODULE_PREVIEW_API__;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_pnpm_storybook_addon-docs_7_4_6__types_react-dom_17_0_8__types_react_17_-851c07"], () => (__webpack_exec__("./storybook-config-entry.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ2xGQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL0BraWUtdG9vbHMvZG1uLWVkaXRvci8uLy5zdG9yeWJvb2svcHJldmlldy50c3giLCJ3ZWJwYWNrOi8vQGtpZS10b29scy9kbW4tZWRpdG9yLy4vc3Rvcnlib29rLWNvbmZpZy1lbnRyeS5qcyIsIndlYnBhY2s6Ly9Aa2llLXRvb2xzL2Rtbi1lZGl0b3IvLi9zdG9yeWJvb2stc3Rvcmllcy5qcyIsIndlYnBhY2s6Ly9Aa2llLXRvb2xzL2Rtbi1lZGl0b3IvLi9zdG9yaWVzLyBsYXp5IF5cXC5cXC8uKiQgaW5jbHVkZTogKCIsIndlYnBhY2s6Ly9Aa2llLXRvb2xzL2Rtbi1lZGl0b3IvLi9zdG9yaWVzLyBsYXp5IF5cXC5cXC8uKiQgaW5jbHVkZTogKD9kNzdkIiwid2VicGFjazovL0BraWUtdG9vbHMvZG1uLWVkaXRvci9leHRlcm5hbCB2YXIgXCJfX1NUT1JZQk9PS19NT0RVTEVfQ0hBTk5FTFNfX1wiIiwid2VicGFjazovL0BraWUtdG9vbHMvZG1uLWVkaXRvci9leHRlcm5hbCB2YXIgXCJfX1NUT1JZQk9PS19NT0RVTEVfQ0xJRU5UX0xPR0dFUl9fXCIiLCJ3ZWJwYWNrOi8vQGtpZS10b29scy9kbW4tZWRpdG9yL2V4dGVybmFsIHZhciBcIl9fU1RPUllCT09LX01PRFVMRV9DT1JFX0VWRU5UU19fXCIiLCJ3ZWJwYWNrOi8vQGtpZS10b29scy9kbW4tZWRpdG9yL2V4dGVybmFsIHZhciBcIl9fU1RPUllCT09LX01PRFVMRV9HTE9CQUxfX1wiIiwid2VicGFjazovL0BraWUtdG9vbHMvZG1uLWVkaXRvci9leHRlcm5hbCB2YXIgXCJfX1NUT1JZQk9PS19NT0RVTEVfUFJFVklFV19BUElfX1wiIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBMaWNlbnNlZCB0byB0aGUgQXBhY2hlIFNvZnR3YXJlIEZvdW5kYXRpb24gKEFTRikgdW5kZXIgb25lXG4gKiBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gIFNlZSB0aGUgTk9USUNFIGZpbGVcbiAqIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uXG4gKiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC4gIFRoZSBBU0YgbGljZW5zZXMgdGhpcyBmaWxlXG4gKiB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlXG4gKiBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2VcbiAqIHdpdGggdGhlIExpY2Vuc2UuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLFxuICogc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cbiAqIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXG4gKiBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGVcbiAqIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnNcbiAqIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUHJldmlldyB9IGZyb20gXCJAc3Rvcnlib29rL3JlYWN0XCI7XG5cbmNvbnN0IHByZXZpZXc6IFByZXZpZXcgPSB7XG4gIHBhcmFtZXRlcnM6IHtcbiAgICBhY3Rpb25zOiB7IGFyZ1R5cGVzUmVnZXg6IFwiXm9uW0EtWl0uKlwiIH0sXG4gICAgY29udHJvbHM6IHtcbiAgICAgIG1hdGNoZXJzOiB7XG4gICAgICAgIGNvbG9yOiAvKGJhY2tncm91bmR8Y29sb3IpJC9pLFxuICAgICAgICBkYXRlOiAvRGF0ZSQvLFxuICAgICAgfSxcbiAgICB9LFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIHN0b3J5U29ydDoge1xuICAgICAgICBvcmRlcjogW1xuICAgICAgICAgIFwiRGV2XCIsXG4gICAgICAgICAgXCJNaXNjXCIsXG4gICAgICAgICAgW1wiT3ZlcnZpZXdcIiwgXCIqXCIsIFtcIk92ZXJ2aWV3XCIsIFwiKlwiLCBbXCJPdmVydmlld1wiLCBcIipcIl1dXSxcbiAgICAgICAgICBcIlVzZSBjYXNlc1wiLFxuICAgICAgICAgIFtcIk92ZXJ2aWV3XCIsIFwiKlwiLCBbXCJPdmVydmlld1wiLCBcIipcIiwgW1wiT3ZlcnZpZXdcIiwgXCIqXCJdXV0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG5cbiAgZGVjb3JhdG9yczogW1xuICAgIChTdG9yeSkgPT4gKFxuICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLCB3aWR0aDogXCIxMDB2d1wiLCBoZWlnaHQ6IFwiMTAwdmhcIiwgdG9wOiBcIjBweFwiLCBsZWZ0OiBcIjBweFwiIH19PntTdG9yeSgpfTwvZGl2PlxuICAgICksXG4gIF0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBwcmV2aWV3O1xuIiwiaW1wb3J0IHsgZ2xvYmFsIH0gZnJvbSAnQHN0b3J5Ym9vay9nbG9iYWwnO1xuXG5pbXBvcnQgeyBDbGllbnRBcGksIFByZXZpZXdXZWIsIGFkZG9ucywgY29tcG9zZUNvbmZpZ3MgfSBmcm9tICdAc3Rvcnlib29rL3ByZXZpZXctYXBpJztcbmltcG9ydCB7IGNyZWF0ZUJyb3dzZXJDaGFubmVsIH0gZnJvbSAnQHN0b3J5Ym9vay9jaGFubmVscyc7XG5cbmltcG9ydCB7IGltcG9ydEZuIH0gZnJvbSAnLi9zdG9yeWJvb2stc3Rvcmllcy5qcyc7XG5cbmNvbnN0IGdldFByb2plY3RBbm5vdGF0aW9ucyA9ICgpID0+XG4gIGNvbXBvc2VDb25maWdzKFtyZXF1aXJlKCcvVXNlcnMvdGlhZ29iZW50by9hcGFjaGUva2llLXRvb2xzL25vZGVfbW9kdWxlcy8ucG5wbS9Ac3Rvcnlib29rK3JlYWN0QDcuNC42X3JlYWN0LWRvbUAxNy4wLjJfcmVhY3RAMTcuMC4yX19yZWFjdEAxNy4wLjJfdHlwZXNjcmlwdEA1LjUuMy9ub2RlX21vZHVsZXMvQHN0b3J5Ym9vay9yZWFjdC9wcmV2aWV3LmpzJykscmVxdWlyZSgnL1VzZXJzL3RpYWdvYmVudG8vYXBhY2hlL2tpZS10b29scy9ub2RlX21vZHVsZXMvLnBucG0vQHN0b3J5Ym9vaythZGRvbi1kb2NzQDcuNC42X0B0eXBlcytyZWFjdC1kb21AMTcuMC44X0B0eXBlcytyZWFjdEAxNy4wLjIxX2VuY29kaW5nQDAuMS4xM19yZWFjX29zbHV1bWZ0eGN0dmh1ZXp0a3ZhbzV2dWc0L25vZGVfbW9kdWxlcy9Ac3Rvcnlib29rL2FkZG9uLWRvY3MvcHJldmlldy5qcycpLHJlcXVpcmUoJy9Vc2Vycy90aWFnb2JlbnRvL2FwYWNoZS9raWUtdG9vbHMvbm9kZV9tb2R1bGVzLy5wbnBtL0BzdG9yeWJvb2srYWRkb24taGlnaGxpZ2h0QDcuNC42L25vZGVfbW9kdWxlcy9Ac3Rvcnlib29rL2FkZG9uLWhpZ2hsaWdodC9wcmV2aWV3LmpzJykscmVxdWlyZSgnL1VzZXJzL3RpYWdvYmVudG8vYXBhY2hlL2tpZS10b29scy9ub2RlX21vZHVsZXMvLnBucG0vQHN0b3J5Ym9vaythZGRvbi1saW5rc0A3LjQuNl9yZWFjdC1kb21AMTcuMC4yX3JlYWN0QDE3LjAuMl9fcmVhY3RAMTcuMC4yL25vZGVfbW9kdWxlcy9Ac3Rvcnlib29rL2FkZG9uLWxpbmtzL3ByZXZpZXcuanMnKSxyZXF1aXJlKCcvVXNlcnMvdGlhZ29iZW50by9hcGFjaGUva2llLXRvb2xzL25vZGVfbW9kdWxlcy8ucG5wbS9Ac3Rvcnlib29rK2FkZG9uLW1lYXN1cmVANy40LjZfQHR5cGVzK3JlYWN0LWRvbUAxNy4wLjhfQHR5cGVzK3JlYWN0QDE3LjAuMjFfcmVhY3QtZG9tQDE3LjAuMl9yZWFjdEAxNy4wLjJfX3JlYWN0QDE3LjAuMi9ub2RlX21vZHVsZXMvQHN0b3J5Ym9vay9hZGRvbi1tZWFzdXJlL3ByZXZpZXcuanMnKSxyZXF1aXJlKCcvVXNlcnMvdGlhZ29iZW50by9hcGFjaGUva2llLXRvb2xzL25vZGVfbW9kdWxlcy8ucG5wbS9Ac3Rvcnlib29rK2FkZG9uLW91dGxpbmVANy40LjZfQHR5cGVzK3JlYWN0LWRvbUAxNy4wLjhfQHR5cGVzK3JlYWN0QDE3LjAuMjFfcmVhY3QtZG9tQDE3LjAuMl9yZWFjdEAxNy4wLjJfX3JlYWN0QDE3LjAuMi9ub2RlX21vZHVsZXMvQHN0b3J5Ym9vay9hZGRvbi1vdXRsaW5lL3ByZXZpZXcuanMnKSxyZXF1aXJlKCcvVXNlcnMvdGlhZ29iZW50by9hcGFjaGUva2llLXRvb2xzL3BhY2thZ2VzL2Rtbi1lZGl0b3IvLnN0b3J5Ym9vay9wcmV2aWV3LnRzeCcpLF0pO1xuXG5jb25zdCBjaGFubmVsID0gY3JlYXRlQnJvd3NlckNoYW5uZWwoeyBwYWdlOiAncHJldmlldycgfSk7XG5hZGRvbnMuc2V0Q2hhbm5lbChjaGFubmVsKTtcblxuaWYgKGdsb2JhbC5DT05GSUdfVFlQRSA9PT0gJ0RFVkVMT1BNRU5UJyl7XG4gIHdpbmRvdy5fX1NUT1JZQk9PS19TRVJWRVJfQ0hBTk5FTF9fID0gY2hhbm5lbDtcbn1cblxuY29uc3QgcHJldmlldyA9IG5ldyBQcmV2aWV3V2ViKCk7XG5cbndpbmRvdy5fX1NUT1JZQk9PS19QUkVWSUVXX18gPSBwcmV2aWV3O1xud2luZG93Ll9fU1RPUllCT09LX1NUT1JZX1NUT1JFX18gPSBwcmV2aWV3LnN0b3J5U3RvcmU7XG53aW5kb3cuX19TVE9SWUJPT0tfQURET05TX0NIQU5ORUxfXyA9IGNoYW5uZWw7XG53aW5kb3cuX19TVE9SWUJPT0tfQ0xJRU5UX0FQSV9fID0gbmV3IENsaWVudEFwaSh7IHN0b3J5U3RvcmU6IHByZXZpZXcuc3RvcnlTdG9yZSB9KTtcblxucHJldmlldy5pbml0aWFsaXplKHsgaW1wb3J0Rm4sIGdldFByb2plY3RBbm5vdGF0aW9ucyB9KTtcblxuaWYgKGltcG9ydC5tZXRhLndlYnBhY2tIb3QpIHtcbiAgaW1wb3J0Lm1ldGEud2VicGFja0hvdC5hY2NlcHQoJy4vc3Rvcnlib29rLXN0b3JpZXMuanMnLCAoKSA9PiB7XG4gICAgLy8gaW1wb3J0Rm4gaGFzIGNoYW5nZWQgc28gd2UgbmVlZCB0byBwYXRjaCB0aGUgbmV3IG9uZSBpblxuICAgIHByZXZpZXcub25TdG9yaWVzQ2hhbmdlZCh7IGltcG9ydEZuIH0pO1xuICB9KTtcblxuICBpbXBvcnQubWV0YS53ZWJwYWNrSG90LmFjY2VwdChbJy9Vc2Vycy90aWFnb2JlbnRvL2FwYWNoZS9raWUtdG9vbHMvbm9kZV9tb2R1bGVzLy5wbnBtL0BzdG9yeWJvb2srcmVhY3RANy40LjZfcmVhY3QtZG9tQDE3LjAuMl9yZWFjdEAxNy4wLjJfX3JlYWN0QDE3LjAuMl90eXBlc2NyaXB0QDUuNS4zL25vZGVfbW9kdWxlcy9Ac3Rvcnlib29rL3JlYWN0L3ByZXZpZXcuanMnLCcvVXNlcnMvdGlhZ29iZW50by9hcGFjaGUva2llLXRvb2xzL25vZGVfbW9kdWxlcy8ucG5wbS9Ac3Rvcnlib29rK2FkZG9uLWRvY3NANy40LjZfQHR5cGVzK3JlYWN0LWRvbUAxNy4wLjhfQHR5cGVzK3JlYWN0QDE3LjAuMjFfZW5jb2RpbmdAMC4xLjEzX3JlYWNfb3NsdXVtZnR4Y3R2aHVlenRrdmFvNXZ1ZzQvbm9kZV9tb2R1bGVzL0BzdG9yeWJvb2svYWRkb24tZG9jcy9wcmV2aWV3LmpzJywnL1VzZXJzL3RpYWdvYmVudG8vYXBhY2hlL2tpZS10b29scy9ub2RlX21vZHVsZXMvLnBucG0vQHN0b3J5Ym9vaythZGRvbi1oaWdobGlnaHRANy40LjYvbm9kZV9tb2R1bGVzL0BzdG9yeWJvb2svYWRkb24taGlnaGxpZ2h0L3ByZXZpZXcuanMnLCcvVXNlcnMvdGlhZ29iZW50by9hcGFjaGUva2llLXRvb2xzL25vZGVfbW9kdWxlcy8ucG5wbS9Ac3Rvcnlib29rK2FkZG9uLWxpbmtzQDcuNC42X3JlYWN0LWRvbUAxNy4wLjJfcmVhY3RAMTcuMC4yX19yZWFjdEAxNy4wLjIvbm9kZV9tb2R1bGVzL0BzdG9yeWJvb2svYWRkb24tbGlua3MvcHJldmlldy5qcycsJy9Vc2Vycy90aWFnb2JlbnRvL2FwYWNoZS9raWUtdG9vbHMvbm9kZV9tb2R1bGVzLy5wbnBtL0BzdG9yeWJvb2srYWRkb24tbWVhc3VyZUA3LjQuNl9AdHlwZXMrcmVhY3QtZG9tQDE3LjAuOF9AdHlwZXMrcmVhY3RAMTcuMC4yMV9yZWFjdC1kb21AMTcuMC4yX3JlYWN0QDE3LjAuMl9fcmVhY3RAMTcuMC4yL25vZGVfbW9kdWxlcy9Ac3Rvcnlib29rL2FkZG9uLW1lYXN1cmUvcHJldmlldy5qcycsJy9Vc2Vycy90aWFnb2JlbnRvL2FwYWNoZS9raWUtdG9vbHMvbm9kZV9tb2R1bGVzLy5wbnBtL0BzdG9yeWJvb2srYWRkb24tb3V0bGluZUA3LjQuNl9AdHlwZXMrcmVhY3QtZG9tQDE3LjAuOF9AdHlwZXMrcmVhY3RAMTcuMC4yMV9yZWFjdC1kb21AMTcuMC4yX3JlYWN0QDE3LjAuMl9fcmVhY3RAMTcuMC4yL25vZGVfbW9kdWxlcy9Ac3Rvcnlib29rL2FkZG9uLW91dGxpbmUvcHJldmlldy5qcycsJy9Vc2Vycy90aWFnb2JlbnRvL2FwYWNoZS9raWUtdG9vbHMvcGFja2FnZXMvZG1uLWVkaXRvci8uc3Rvcnlib29rL3ByZXZpZXcudHN4JyxdLCAoKSA9PiB7XG4gICAgLy8gZ2V0UHJvamVjdEFubm90YXRpb25zIGhhcyBjaGFuZ2VkIHNvIHdlIG5lZWQgdG8gcGF0Y2ggdGhlIG5ldyBvbmUgaW5cbiAgICBwcmV2aWV3Lm9uR2V0UHJvamVjdEFubm90YXRpb25zQ2hhbmdlZCh7IGdldFByb2plY3RBbm5vdGF0aW9ucyB9KTtcbiAgfSk7XG59IiwiY29uc3QgcGlwZWxpbmUgPSAoeCkgPT4geCgpO1xuXG5jb25zdCBpbXBvcnRlcnMgPSBbXG4gIGFzeW5jIChwYXRoKSA9PiB7XG4gICAgaWYgKCEvXlxcLltcXFxcL10oPzpzdG9yaWVzKD86XFwvKD8hXFwuKSg/Oig/Oig/ISg/Ol58XFwvKVxcLikuKSo/KVxcL3xcXC98JCkoPyFcXC4pKD89LilbXi9dKj9cXC5tZHgpJC8uZXhlYyhwYXRoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgXG4gICAgY29uc3QgcGF0aFJlbWFpbmRlciA9IHBhdGguc3Vic3RyaW5nKDEwKTtcbiAgICByZXR1cm4gaW1wb3J0KFxuICAgICAgLyogd2VicGFja0NodW5rTmFtZTogXCJbcmVxdWVzdF1cIiAqL1xuICAgICAgLyogd2VicGFja0luY2x1ZGU6IC8oPzpcXC9zdG9yaWVzKD86XFwvKD8hXFwuKSg/Oig/Oig/ISg/Ol58XFwvKVxcLikuKSo/KVxcL3xcXC98JCkoPyFcXC4pKD89LilbXi9dKj9cXC5tZHgpJC8gKi9cbiAgICAgICcuL3N0b3JpZXMvJyArIHBhdGhSZW1haW5kZXJcbiAgICApO1xuICB9XG4gICxcbiAgYXN5bmMgKHBhdGgpID0+IHtcbiAgICBpZiAoIS9eXFwuW1xcXFwvXSg/OnN0b3JpZXMoPzpcXC8oPyFcXC4pKD86KD86KD8hKD86XnxcXC8pXFwuKS4pKj8pXFwvfFxcL3wkKSg/IVxcLikoPz0uKVteL10qP1xcLnN0b3JpZXNcXC4oanN8anN4fG1qc3x0c3x0c3gpKSQvLmV4ZWMocGF0aCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIFxuICAgIGNvbnN0IHBhdGhSZW1haW5kZXIgPSBwYXRoLnN1YnN0cmluZygxMCk7XG4gICAgcmV0dXJuIGltcG9ydChcbiAgICAgIC8qIHdlYnBhY2tDaHVua05hbWU6IFwiW3JlcXVlc3RdXCIgKi9cbiAgICAgIC8qIHdlYnBhY2tJbmNsdWRlOiAvKD86XFwvc3Rvcmllcyg/OlxcLyg/IVxcLikoPzooPzooPyEoPzpefFxcLylcXC4pLikqPylcXC98XFwvfCQpKD8hXFwuKSg/PS4pW14vXSo/XFwuc3Rvcmllc1xcLihqc3xqc3h8bWpzfHRzfHRzeCkpJC8gKi9cbiAgICAgICcuL3N0b3JpZXMvJyArIHBhdGhSZW1haW5kZXJcbiAgICApO1xuICB9XG4gIFxuXTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGltcG9ydEZuKHBhdGgpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbXBvcnRlcnMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBtb2R1bGVFeHBvcnRzID0gYXdhaXQgcGlwZWxpbmUoKCkgPT4gaW1wb3J0ZXJzW2ldKHBhdGgpKTtcbiAgICBpZiAobW9kdWxlRXhwb3J0cykge1xuICAgICAgcmV0dXJuIG1vZHVsZUV4cG9ydHM7XG4gICAgfVxuICB9XG59IiwidmFyIG1hcCA9IHtcblx0XCIuL21pc2MvZW1wdHkvRW1wdHkubWR4XCI6IFtcblx0XHRcIi4vc3Rvcmllcy9taXNjL2VtcHR5L0VtcHR5Lm1keFwiLFxuXHRcdFwidmVuZG9ycy1ub2RlX21vZHVsZXNfcG5wbV9yZWFjdGZsb3dfYmFja2dyb3VuZF8xMV8zXzZfX3R5cGVzX3JlYWN0XzE3XzBfMjFfaW1tZXJfMTBfMF8zX3BhdGNoLTBhZjE1NVwiLFxuXHRcdFwidmVuZG9ycy1ub2RlX21vZHVsZXNfcG5wbV9zdG9yeWJvb2tfY29tcG9uZW50c183XzRfNl9fdHlwZXNfcmVhY3QtZG9tXzE3XzBfOF9fdHlwZXNfcmVhY3RfMTdfLWJkM2VlYVwiLFxuXHRcdFwidmVuZG9ycy1ub2RlX21vZHVsZXNfcG5wbV9zdG9yeWJvb2tfYmxvY2tzXzdfNl8xM19fdHlwZXNfcmVhY3QtZG9tXzE3XzBfOF9fdHlwZXNfcmVhY3RfMTdfMF8yLWJkOTA3NlwiLFxuXHRcdFwibWlzYy1lbXB0eS1FbXB0eS1zdG9yaWVzXCIsXG5cdFx0XCJtaXNjLWVtcHR5LUVtcHR5LW1keFwiXG5cdF0sXG5cdFwiLi9taXNjL2VtcHR5V2l0aEF2YWlsYWJsZUV4dGVybmFsTW9kZWxzL0VtcHR5V2l0aEF2YWlsYWJsZUV4dGVybmFsTW9kZWxzLm1keFwiOiBbXG5cdFx0XCIuL3N0b3JpZXMvbWlzYy9lbXB0eVdpdGhBdmFpbGFibGVFeHRlcm5hbE1vZGVscy9FbXB0eVdpdGhBdmFpbGFibGVFeHRlcm5hbE1vZGVscy5tZHhcIixcblx0XHRcInZlbmRvcnMtbm9kZV9tb2R1bGVzX3BucG1fcmVhY3RmbG93X2JhY2tncm91bmRfMTFfM182X190eXBlc19yZWFjdF8xN18wXzIxX2ltbWVyXzEwXzBfM19wYXRjaC0wYWYxNTVcIixcblx0XHRcInZlbmRvcnMtbm9kZV9tb2R1bGVzX3BucG1fc3Rvcnlib29rX2NvbXBvbmVudHNfN180XzZfX3R5cGVzX3JlYWN0LWRvbV8xN18wXzhfX3R5cGVzX3JlYWN0XzE3Xy1iZDNlZWFcIixcblx0XHRcInZlbmRvcnMtbm9kZV9tb2R1bGVzX3BucG1fc3Rvcnlib29rX2Jsb2Nrc183XzZfMTNfX3R5cGVzX3JlYWN0LWRvbV8xN18wXzhfX3R5cGVzX3JlYWN0XzE3XzBfMi1iZDkwNzZcIixcblx0XHRcIm1pc2MtZW1wdHktRW1wdHktc3Rvcmllc1wiLFxuXHRcdFwiZGlzdF9EbW5FZGl0b3JfanNcIixcblx0XHRcIm1pc2MtZW1wdHlXaXRoQXZhaWxhYmxlRXh0ZXJuYWxNb2RlbHMtRW1wdHlXaXRoQXZhaWxhYmxlRXh0ZXJuYWxNb2RlbHMtc3Rvcmllc1wiLFxuXHRcdFwibWlzYy1lbXB0eVdpdGhBdmFpbGFibGVFeHRlcm5hbE1vZGVscy1FbXB0eVdpdGhBdmFpbGFibGVFeHRlcm5hbE1vZGVscy1tZHhcIlxuXHRdLFxuXHRcIi4vbWlzYy9ldmFsdWF0aW9uSGlnaGxpZ2h0cy9FdmFsdWF0aW9uSGlnaGxpZ2h0cy5tZHhcIjogW1xuXHRcdFwiLi9zdG9yaWVzL21pc2MvZXZhbHVhdGlvbkhpZ2hsaWdodHMvRXZhbHVhdGlvbkhpZ2hsaWdodHMubWR4XCIsXG5cdFx0XCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19wbnBtX3JlYWN0Zmxvd19iYWNrZ3JvdW5kXzExXzNfNl9fdHlwZXNfcmVhY3RfMTdfMF8yMV9pbW1lcl8xMF8wXzNfcGF0Y2gtMGFmMTU1XCIsXG5cdFx0XCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19wbnBtX3N0b3J5Ym9va19jb21wb25lbnRzXzdfNF82X190eXBlc19yZWFjdC1kb21fMTdfMF84X190eXBlc19yZWFjdF8xN18tYmQzZWVhXCIsXG5cdFx0XCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19wbnBtX3N0b3J5Ym9va19ibG9ja3NfN182XzEzX190eXBlc19yZWFjdC1kb21fMTdfMF84X190eXBlc19yZWFjdF8xN18wXzItYmQ5MDc2XCIsXG5cdFx0XCJtaXNjLWVtcHR5LUVtcHR5LXN0b3JpZXNcIixcblx0XHRcImRpc3RfRG1uRWRpdG9yX2pzXCIsXG5cdFx0XCJtaXNjLWV2YWx1YXRpb25IaWdobGlnaHRzLUV2YWx1YXRpb25IaWdobGlnaHRzLXN0b3JpZXNcIixcblx0XHRcIm1pc2MtZXZhbHVhdGlvbkhpZ2hsaWdodHMtRXZhbHVhdGlvbkhpZ2hsaWdodHMtbWR4XCJcblx0XSxcblx0XCIuL3VzZUNhc2VzL2xvYW5QcmVRdWFsaWZpY2F0aW9uL0xvYW5QcmVRdWFsaWZpY2F0aW9uLm1keFwiOiBbXG5cdFx0XCIuL3N0b3JpZXMvdXNlQ2FzZXMvbG9hblByZVF1YWxpZmljYXRpb24vTG9hblByZVF1YWxpZmljYXRpb24ubWR4XCIsXG5cdFx0XCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19wbnBtX3JlYWN0Zmxvd19iYWNrZ3JvdW5kXzExXzNfNl9fdHlwZXNfcmVhY3RfMTdfMF8yMV9pbW1lcl8xMF8wXzNfcGF0Y2gtMGFmMTU1XCIsXG5cdFx0XCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19wbnBtX3N0b3J5Ym9va19jb21wb25lbnRzXzdfNF82X190eXBlc19yZWFjdC1kb21fMTdfMF84X190eXBlc19yZWFjdF8xN18tYmQzZWVhXCIsXG5cdFx0XCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19wbnBtX3N0b3J5Ym9va19ibG9ja3NfN182XzEzX190eXBlc19yZWFjdC1kb21fMTdfMF84X190eXBlc19yZWFjdF8xN18wXzItYmQ5MDc2XCIsXG5cdFx0XCJtaXNjLWVtcHR5LUVtcHR5LXN0b3JpZXNcIixcblx0XHRcInVzZUNhc2VzLWxvYW5QcmVRdWFsaWZpY2F0aW9uLUxvYW5QcmVRdWFsaWZpY2F0aW9uLXN0b3JpZXNcIixcblx0XHRcInVzZUNhc2VzLWxvYW5QcmVRdWFsaWZpY2F0aW9uLUxvYW5QcmVRdWFsaWZpY2F0aW9uLW1keFwiXG5cdF1cbn07XG5mdW5jdGlvbiB3ZWJwYWNrQXN5bmNDb250ZXh0KHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcblx0XHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHRcdHRocm93IGU7XG5cdFx0fSk7XG5cdH1cblxuXHR2YXIgaWRzID0gbWFwW3JlcV0sIGlkID0gaWRzWzBdO1xuXHRyZXR1cm4gUHJvbWlzZS5hbGwoaWRzLnNsaWNlKDEpLm1hcChfX3dlYnBhY2tfcmVxdWlyZV9fLmUpKS50aGVuKCgpID0+IHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG5cdH0pO1xufVxud2VicGFja0FzeW5jQ29udGV4dC5rZXlzID0gKCkgPT4gKE9iamVjdC5rZXlzKG1hcCkpO1xud2VicGFja0FzeW5jQ29udGV4dC5pZCA9IFwiLi9zdG9yaWVzIGxhenkgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLiokIGluY2x1ZGU6ICg/OlxcXFwvc3Rvcmllcyg/OlxcXFwvKD8lMjFcXFxcLikoPzooPzooPyUyMSg/Ol4lN0NcXFxcLylcXFxcLikuKSo/KVxcXFwvJTdDXFxcXC8lN0MkKSg/JTIxXFxcXC4pKD89LilbXi9dKj9cXFxcLm1keCkkXCI7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tBc3luY0NvbnRleHQ7IiwidmFyIG1hcCA9IHtcblx0XCIuL2Rldi9EZXZXZWJBcHAuc3Rvcmllc1wiOiBbXG5cdFx0XCIuL3N0b3JpZXMvZGV2L0RldldlYkFwcC5zdG9yaWVzLnRzeFwiLFxuXHRcdFwidmVuZG9ycy1ub2RlX21vZHVsZXNfcG5wbV9yZWFjdGZsb3dfYmFja2dyb3VuZF8xMV8zXzZfX3R5cGVzX3JlYWN0XzE3XzBfMjFfaW1tZXJfMTBfMF8zX3BhdGNoLTBhZjE1NVwiLFxuXHRcdFwibWlzYy1lbXB0eS1FbXB0eS1zdG9yaWVzXCIsXG5cdFx0XCJ1c2VDYXNlcy1sb2FuUHJlUXVhbGlmaWNhdGlvbi1Mb2FuUHJlUXVhbGlmaWNhdGlvbi1zdG9yaWVzXCIsXG5cdFx0XCJkZXYtRGV2V2ViQXBwLXN0b3JpZXNcIlxuXHRdLFxuXHRcIi4vZGV2L0RldldlYkFwcC5zdG9yaWVzLnRzeFwiOiBbXG5cdFx0XCIuL3N0b3JpZXMvZGV2L0RldldlYkFwcC5zdG9yaWVzLnRzeFwiLFxuXHRcdFwidmVuZG9ycy1ub2RlX21vZHVsZXNfcG5wbV9yZWFjdGZsb3dfYmFja2dyb3VuZF8xMV8zXzZfX3R5cGVzX3JlYWN0XzE3XzBfMjFfaW1tZXJfMTBfMF8zX3BhdGNoLTBhZjE1NVwiLFxuXHRcdFwibWlzYy1lbXB0eS1FbXB0eS1zdG9yaWVzXCIsXG5cdFx0XCJ1c2VDYXNlcy1sb2FuUHJlUXVhbGlmaWNhdGlvbi1Mb2FuUHJlUXVhbGlmaWNhdGlvbi1zdG9yaWVzXCIsXG5cdFx0XCJkZXYtRGV2V2ViQXBwLXN0b3JpZXNcIlxuXHRdLFxuXHRcIi4vbWlzYy9lbXB0eS9FbXB0eS5zdG9yaWVzXCI6IFtcblx0XHRcIi4vc3Rvcmllcy9taXNjL2VtcHR5L0VtcHR5LnN0b3JpZXMudHN4XCIsXG5cdFx0XCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19wbnBtX3JlYWN0Zmxvd19iYWNrZ3JvdW5kXzExXzNfNl9fdHlwZXNfcmVhY3RfMTdfMF8yMV9pbW1lcl8xMF8wXzNfcGF0Y2gtMGFmMTU1XCIsXG5cdFx0XCJtaXNjLWVtcHR5LUVtcHR5LXN0b3JpZXNcIlxuXHRdLFxuXHRcIi4vbWlzYy9lbXB0eS9FbXB0eS5zdG9yaWVzLnRzeFwiOiBbXG5cdFx0XCIuL3N0b3JpZXMvbWlzYy9lbXB0eS9FbXB0eS5zdG9yaWVzLnRzeFwiLFxuXHRcdFwidmVuZG9ycy1ub2RlX21vZHVsZXNfcG5wbV9yZWFjdGZsb3dfYmFja2dyb3VuZF8xMV8zXzZfX3R5cGVzX3JlYWN0XzE3XzBfMjFfaW1tZXJfMTBfMF8zX3BhdGNoLTBhZjE1NVwiLFxuXHRcdFwibWlzYy1lbXB0eS1FbXB0eS1zdG9yaWVzXCJcblx0XSxcblx0XCIuL21pc2MvZW1wdHlXaXRoQXZhaWxhYmxlRXh0ZXJuYWxNb2RlbHMvRW1wdHlXaXRoQXZhaWxhYmxlRXh0ZXJuYWxNb2RlbHMuc3Rvcmllc1wiOiBbXG5cdFx0XCIuL3N0b3JpZXMvbWlzYy9lbXB0eVdpdGhBdmFpbGFibGVFeHRlcm5hbE1vZGVscy9FbXB0eVdpdGhBdmFpbGFibGVFeHRlcm5hbE1vZGVscy5zdG9yaWVzLnRzeFwiLFxuXHRcdFwidmVuZG9ycy1ub2RlX21vZHVsZXNfcG5wbV9yZWFjdGZsb3dfYmFja2dyb3VuZF8xMV8zXzZfX3R5cGVzX3JlYWN0XzE3XzBfMjFfaW1tZXJfMTBfMF8zX3BhdGNoLTBhZjE1NVwiLFxuXHRcdFwibWlzYy1lbXB0eS1FbXB0eS1zdG9yaWVzXCIsXG5cdFx0XCJkaXN0X0RtbkVkaXRvcl9qc1wiLFxuXHRcdFwibWlzYy1lbXB0eVdpdGhBdmFpbGFibGVFeHRlcm5hbE1vZGVscy1FbXB0eVdpdGhBdmFpbGFibGVFeHRlcm5hbE1vZGVscy1zdG9yaWVzXCJcblx0XSxcblx0XCIuL21pc2MvZW1wdHlXaXRoQXZhaWxhYmxlRXh0ZXJuYWxNb2RlbHMvRW1wdHlXaXRoQXZhaWxhYmxlRXh0ZXJuYWxNb2RlbHMuc3Rvcmllcy50c3hcIjogW1xuXHRcdFwiLi9zdG9yaWVzL21pc2MvZW1wdHlXaXRoQXZhaWxhYmxlRXh0ZXJuYWxNb2RlbHMvRW1wdHlXaXRoQXZhaWxhYmxlRXh0ZXJuYWxNb2RlbHMuc3Rvcmllcy50c3hcIixcblx0XHRcInZlbmRvcnMtbm9kZV9tb2R1bGVzX3BucG1fcmVhY3RmbG93X2JhY2tncm91bmRfMTFfM182X190eXBlc19yZWFjdF8xN18wXzIxX2ltbWVyXzEwXzBfM19wYXRjaC0wYWYxNTVcIixcblx0XHRcIm1pc2MtZW1wdHktRW1wdHktc3Rvcmllc1wiLFxuXHRcdFwiZGlzdF9EbW5FZGl0b3JfanNcIixcblx0XHRcIm1pc2MtZW1wdHlXaXRoQXZhaWxhYmxlRXh0ZXJuYWxNb2RlbHMtRW1wdHlXaXRoQXZhaWxhYmxlRXh0ZXJuYWxNb2RlbHMtc3Rvcmllc1wiXG5cdF0sXG5cdFwiLi9taXNjL2V2YWx1YXRpb25IaWdobGlnaHRzL0V2YWx1YXRpb25IaWdobGlnaHRzLnN0b3JpZXNcIjogW1xuXHRcdFwiLi9zdG9yaWVzL21pc2MvZXZhbHVhdGlvbkhpZ2hsaWdodHMvRXZhbHVhdGlvbkhpZ2hsaWdodHMuc3Rvcmllcy50c3hcIixcblx0XHRcInZlbmRvcnMtbm9kZV9tb2R1bGVzX3BucG1fcmVhY3RmbG93X2JhY2tncm91bmRfMTFfM182X190eXBlc19yZWFjdF8xN18wXzIxX2ltbWVyXzEwXzBfM19wYXRjaC0wYWYxNTVcIixcblx0XHRcIm1pc2MtZW1wdHktRW1wdHktc3Rvcmllc1wiLFxuXHRcdFwiZGlzdF9EbW5FZGl0b3JfanNcIixcblx0XHRcIm1pc2MtZXZhbHVhdGlvbkhpZ2hsaWdodHMtRXZhbHVhdGlvbkhpZ2hsaWdodHMtc3Rvcmllc1wiXG5cdF0sXG5cdFwiLi9taXNjL2V2YWx1YXRpb25IaWdobGlnaHRzL0V2YWx1YXRpb25IaWdobGlnaHRzLnN0b3JpZXMudHN4XCI6IFtcblx0XHRcIi4vc3Rvcmllcy9taXNjL2V2YWx1YXRpb25IaWdobGlnaHRzL0V2YWx1YXRpb25IaWdobGlnaHRzLnN0b3JpZXMudHN4XCIsXG5cdFx0XCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19wbnBtX3JlYWN0Zmxvd19iYWNrZ3JvdW5kXzExXzNfNl9fdHlwZXNfcmVhY3RfMTdfMF8yMV9pbW1lcl8xMF8wXzNfcGF0Y2gtMGFmMTU1XCIsXG5cdFx0XCJtaXNjLWVtcHR5LUVtcHR5LXN0b3JpZXNcIixcblx0XHRcImRpc3RfRG1uRWRpdG9yX2pzXCIsXG5cdFx0XCJtaXNjLWV2YWx1YXRpb25IaWdobGlnaHRzLUV2YWx1YXRpb25IaWdobGlnaHRzLXN0b3JpZXNcIlxuXHRdLFxuXHRcIi4vdXNlQ2FzZXMvbG9hblByZVF1YWxpZmljYXRpb24vTG9hblByZVF1YWxpZmljYXRpb24uc3Rvcmllc1wiOiBbXG5cdFx0XCIuL3N0b3JpZXMvdXNlQ2FzZXMvbG9hblByZVF1YWxpZmljYXRpb24vTG9hblByZVF1YWxpZmljYXRpb24uc3Rvcmllcy50c3hcIixcblx0XHRcInZlbmRvcnMtbm9kZV9tb2R1bGVzX3BucG1fcmVhY3RmbG93X2JhY2tncm91bmRfMTFfM182X190eXBlc19yZWFjdF8xN18wXzIxX2ltbWVyXzEwXzBfM19wYXRjaC0wYWYxNTVcIixcblx0XHRcIm1pc2MtZW1wdHktRW1wdHktc3Rvcmllc1wiLFxuXHRcdFwidXNlQ2FzZXMtbG9hblByZVF1YWxpZmljYXRpb24tTG9hblByZVF1YWxpZmljYXRpb24tc3Rvcmllc1wiXG5cdF0sXG5cdFwiLi91c2VDYXNlcy9sb2FuUHJlUXVhbGlmaWNhdGlvbi9Mb2FuUHJlUXVhbGlmaWNhdGlvbi5zdG9yaWVzLnRzeFwiOiBbXG5cdFx0XCIuL3N0b3JpZXMvdXNlQ2FzZXMvbG9hblByZVF1YWxpZmljYXRpb24vTG9hblByZVF1YWxpZmljYXRpb24uc3Rvcmllcy50c3hcIixcblx0XHRcInZlbmRvcnMtbm9kZV9tb2R1bGVzX3BucG1fcmVhY3RmbG93X2JhY2tncm91bmRfMTFfM182X190eXBlc19yZWFjdF8xN18wXzIxX2ltbWVyXzEwXzBfM19wYXRjaC0wYWYxNTVcIixcblx0XHRcIm1pc2MtZW1wdHktRW1wdHktc3Rvcmllc1wiLFxuXHRcdFwidXNlQ2FzZXMtbG9hblByZVF1YWxpZmljYXRpb24tTG9hblByZVF1YWxpZmljYXRpb24tc3Rvcmllc1wiXG5cdF1cbn07XG5mdW5jdGlvbiB3ZWJwYWNrQXN5bmNDb250ZXh0KHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcblx0XHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHRcdHRocm93IGU7XG5cdFx0fSk7XG5cdH1cblxuXHR2YXIgaWRzID0gbWFwW3JlcV0sIGlkID0gaWRzWzBdO1xuXHRyZXR1cm4gUHJvbWlzZS5hbGwoaWRzLnNsaWNlKDEpLm1hcChfX3dlYnBhY2tfcmVxdWlyZV9fLmUpKS50aGVuKCgpID0+IHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG5cdH0pO1xufVxud2VicGFja0FzeW5jQ29udGV4dC5rZXlzID0gKCkgPT4gKE9iamVjdC5rZXlzKG1hcCkpO1xud2VicGFja0FzeW5jQ29udGV4dC5pZCA9IFwiLi9zdG9yaWVzIGxhenkgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLiokIGluY2x1ZGU6ICg/OlxcXFwvc3Rvcmllcyg/OlxcXFwvKD8lMjFcXFxcLikoPzooPzooPyUyMSg/Ol4lN0NcXFxcLylcXFxcLikuKSo/KVxcXFwvJTdDXFxcXC8lN0MkKSg/JTIxXFxcXC4pKD89LilbXi9dKj9cXFxcLnN0b3JpZXNcXFxcLihqcyU3Q2pzeCU3Q21qcyU3Q3RzJTdDdHN4KSkkXCI7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tBc3luY0NvbnRleHQ7IiwibW9kdWxlLmV4cG9ydHMgPSBfX1NUT1JZQk9PS19NT0RVTEVfQ0hBTk5FTFNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fU1RPUllCT09LX01PRFVMRV9DTElFTlRfTE9HR0VSX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1NUT1JZQk9PS19NT0RVTEVfQ09SRV9FVkVOVFNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fU1RPUllCT09LX01PRFVMRV9HTE9CQUxfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fU1RPUllCT09LX01PRFVMRV9QUkVWSUVXX0FQSV9fOyJdLCJuYW1lcyI6WyJwcmV2aWV3IiwicGFyYW1ldGVycyIsImFjdGlvbnMiLCJhcmdUeXBlc1JlZ2V4IiwiY29udHJvbHMiLCJtYXRjaGVycyIsImNvbG9yIiwiZGF0ZSIsIm9wdGlvbnMiLCJzdG9yeVNvcnQiLCJvcmRlciIsImRlY29yYXRvcnMiLCJTdG9yeSIsIl9qc3giLCJzdHlsZSIsInBvc2l0aW9uIiwid2lkdGgiLCJoZWlnaHQiLCJ0b3AiLCJsZWZ0IiwiY2hpbGRyZW4iXSwic291cmNlUm9vdCI6IiJ9