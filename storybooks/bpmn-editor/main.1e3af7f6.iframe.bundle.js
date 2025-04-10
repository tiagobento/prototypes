(self["webpackChunk_kie_tools_bpmn_editor"] = self["webpackChunk_kie_tools_bpmn_editor"] || []).push([["main"],{

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
        order: ["Dev", "BPMN Editor", ["Overview", "*", ["Overview", "*", ["Overview", "*"]]], "Features", ["Overview", "*", ["Overview", "*", ["Overview", "*"]]], "Use cases", ["Overview", "*", ["Overview", "*", ["Overview", "*"]]], "Misc", ["Overview", "*", ["Overview", "*", ["Overview", "*"]]]]
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
	"./bpmnEditor/BpmnEditor.mdx": [
		"./stories/bpmnEditor/BpmnEditor.mdx",
		"vendors-node_modules_pnpm_storybook_components_7_4_6__types_react-dom_17_0_8__types_react_17_-bd3eea",
		"vendors-node_modules_pnpm_storybook_blocks_7_6_13__types_react-dom_17_0_8__types_react_17_0_2-bd9076",
		"bpmnEditor-BpmnEditor-mdx"
	],
	"./features/CustomNodes/CustomNodes.mdx": [
		"./stories/features/CustomNodes/CustomNodes.mdx",
		"vendors-node_modules_pnpm_storybook_components_7_4_6__types_react-dom_17_0_8__types_react_17_-bd3eea",
		"vendors-node_modules_pnpm_storybook_blocks_7_6_13__types_react-dom_17_0_8__types_react_17_0_2-bd9076",
		"features-CustomNodes-CustomNodes-mdx"
	],
	"./features/ProcessVariables/ProcessVariables.mdx": [
		"./stories/features/ProcessVariables/ProcessVariables.mdx",
		"vendors-node_modules_pnpm_storybook_components_7_4_6__types_react-dom_17_0_8__types_react_17_-bd3eea",
		"vendors-node_modules_pnpm_storybook_blocks_7_6_13__types_react-dom_17_0_8__types_react_17_0_2-bd9076",
		"features-ProcessVariables-ProcessVariables-mdx"
	],
	"./misc/empty/Empty.mdx": [
		"./stories/misc/empty/Empty.mdx",
		"vendors-node_modules_pnpm_storybook_components_7_4_6__types_react-dom_17_0_8__types_react_17_-bd3eea",
		"vendors-node_modules_pnpm_storybook_blocks_7_6_13__types_react-dom_17_0_8__types_react_17_0_2-bd9076",
		"vendors-node_modules_pnpm_reactflow_background_11_3_6__types_react_17_0_21_immer_10_0_3_patch-016ac1",
		"misc-empty-Empty-stories",
		"misc-empty-Empty-mdx"
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
		"vendors-node_modules_pnpm_reactflow_background_11_3_6__types_react_17_0_21_immer_10_0_3_patch-016ac1",
		"vendors-node_modules_pnpm_patternfly_react-core_4_276_6_react-dom_17_0_2_react_17_0_2__react_-977e8a",
		"misc-empty-Empty-stories",
		"dev-DevWebApp-stories"
	],
	"./dev/DevWebApp.stories.tsx": [
		"./stories/dev/DevWebApp.stories.tsx",
		"vendors-node_modules_pnpm_reactflow_background_11_3_6__types_react_17_0_21_immer_10_0_3_patch-016ac1",
		"vendors-node_modules_pnpm_patternfly_react-core_4_276_6_react-dom_17_0_2_react_17_0_2__react_-977e8a",
		"misc-empty-Empty-stories",
		"dev-DevWebApp-stories"
	],
	"./misc/empty/Empty.stories": [
		"./stories/misc/empty/Empty.stories.tsx",
		"vendors-node_modules_pnpm_reactflow_background_11_3_6__types_react_17_0_21_immer_10_0_3_patch-016ac1",
		"misc-empty-Empty-stories"
	],
	"./misc/empty/Empty.stories.tsx": [
		"./stories/misc/empty/Empty.stories.tsx",
		"vendors-node_modules_pnpm_reactflow_background_11_3_6__types_react_17_0_21_immer_10_0_3_patch-016ac1",
		"misc-empty-Empty-stories"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDRjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUMxQ0E7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Aa2llLXRvb2xzL2JwbW4tZWRpdG9yLy4vLnN0b3J5Ym9vay9wcmV2aWV3LnRzeCIsIndlYnBhY2s6Ly9Aa2llLXRvb2xzL2JwbW4tZWRpdG9yLy4vc3Rvcnlib29rLWNvbmZpZy1lbnRyeS5qcyIsIndlYnBhY2s6Ly9Aa2llLXRvb2xzL2JwbW4tZWRpdG9yLy4vc3Rvcnlib29rLXN0b3JpZXMuanMiLCJ3ZWJwYWNrOi8vQGtpZS10b29scy9icG1uLWVkaXRvci8uL3N0b3JpZXMvIGxhenkgXlxcLlxcLy4qJCBpbmNsdWRlOiAoIiwid2VicGFjazovL0BraWUtdG9vbHMvYnBtbi1lZGl0b3IvLi9zdG9yaWVzLyBsYXp5IF5cXC5cXC8uKiQgaW5jbHVkZTogKD9kNzdkIiwid2VicGFjazovL0BraWUtdG9vbHMvYnBtbi1lZGl0b3IvZXh0ZXJuYWwgdmFyIFwiX19TVE9SWUJPT0tfTU9EVUxFX0NIQU5ORUxTX19cIiIsIndlYnBhY2s6Ly9Aa2llLXRvb2xzL2JwbW4tZWRpdG9yL2V4dGVybmFsIHZhciBcIl9fU1RPUllCT09LX01PRFVMRV9DTElFTlRfTE9HR0VSX19cIiIsIndlYnBhY2s6Ly9Aa2llLXRvb2xzL2JwbW4tZWRpdG9yL2V4dGVybmFsIHZhciBcIl9fU1RPUllCT09LX01PRFVMRV9DT1JFX0VWRU5UU19fXCIiLCJ3ZWJwYWNrOi8vQGtpZS10b29scy9icG1uLWVkaXRvci9leHRlcm5hbCB2YXIgXCJfX1NUT1JZQk9PS19NT0RVTEVfR0xPQkFMX19cIiIsIndlYnBhY2s6Ly9Aa2llLXRvb2xzL2JwbW4tZWRpdG9yL2V4dGVybmFsIHZhciBcIl9fU1RPUllCT09LX01PRFVMRV9QUkVWSUVXX0FQSV9fXCIiXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIExpY2Vuc2VkIHRvIHRoZSBBcGFjaGUgU29mdHdhcmUgRm91bmRhdGlvbiAoQVNGKSB1bmRlciBvbmVcbiAqIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiAgU2VlIHRoZSBOT1RJQ0UgZmlsZVxuICogZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb25cbiAqIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLiAgVGhlIEFTRiBsaWNlbnNlcyB0aGlzIGZpbGVcbiAqIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGVcbiAqIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuICogd2l0aCB0aGUgTGljZW5zZS4gIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsXG4gKiBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxuICogXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcbiAqIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZVxuICogc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9uc1xuICogdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBQcmV2aWV3IH0gZnJvbSBcIkBzdG9yeWJvb2svcmVhY3RcIjtcblxuY29uc3QgcHJldmlldzogUHJldmlldyA9IHtcbiAgcGFyYW1ldGVyczoge1xuICAgIGFjdGlvbnM6IHsgYXJnVHlwZXNSZWdleDogXCJeb25bQS1aXS4qXCIgfSxcbiAgICBjb250cm9sczoge1xuICAgICAgbWF0Y2hlcnM6IHtcbiAgICAgICAgY29sb3I6IC8oYmFja2dyb3VuZHxjb2xvcikkL2ksXG4gICAgICAgIGRhdGU6IC9EYXRlJC8sXG4gICAgICB9LFxuICAgIH0sXG4gICAgb3B0aW9uczoge1xuICAgICAgc3RvcnlTb3J0OiB7XG4gICAgICAgIG9yZGVyOiBbXG4gICAgICAgICAgXCJEZXZcIixcbiAgICAgICAgICBcIkJQTU4gRWRpdG9yXCIsXG4gICAgICAgICAgW1wiT3ZlcnZpZXdcIiwgXCIqXCIsIFtcIk92ZXJ2aWV3XCIsIFwiKlwiLCBbXCJPdmVydmlld1wiLCBcIipcIl1dXSxcbiAgICAgICAgICBcIkZlYXR1cmVzXCIsXG4gICAgICAgICAgW1wiT3ZlcnZpZXdcIiwgXCIqXCIsIFtcIk92ZXJ2aWV3XCIsIFwiKlwiLCBbXCJPdmVydmlld1wiLCBcIipcIl1dXSxcbiAgICAgICAgICBcIlVzZSBjYXNlc1wiLFxuICAgICAgICAgIFtcIk92ZXJ2aWV3XCIsIFwiKlwiLCBbXCJPdmVydmlld1wiLCBcIipcIiwgW1wiT3ZlcnZpZXdcIiwgXCIqXCJdXV0sXG4gICAgICAgICAgXCJNaXNjXCIsXG4gICAgICAgICAgW1wiT3ZlcnZpZXdcIiwgXCIqXCIsIFtcIk92ZXJ2aWV3XCIsIFwiKlwiLCBbXCJPdmVydmlld1wiLCBcIipcIl1dXSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcblxuICBkZWNvcmF0b3JzOiBbXG4gICAgKFN0b3J5KSA9PiAoXG4gICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiBcImFic29sdXRlXCIsIHdpZHRoOiBcIjEwMHZ3XCIsIGhlaWdodDogXCIxMDB2aFwiLCB0b3A6IFwiMHB4XCIsIGxlZnQ6IFwiMHB4XCIgfX0+e1N0b3J5KCl9PC9kaXY+XG4gICAgKSxcbiAgXSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHByZXZpZXc7XG4iLCJpbXBvcnQgeyBnbG9iYWwgfSBmcm9tICdAc3Rvcnlib29rL2dsb2JhbCc7XG5cbmltcG9ydCB7IENsaWVudEFwaSwgUHJldmlld1dlYiwgYWRkb25zLCBjb21wb3NlQ29uZmlncyB9IGZyb20gJ0BzdG9yeWJvb2svcHJldmlldy1hcGknO1xuaW1wb3J0IHsgY3JlYXRlQnJvd3NlckNoYW5uZWwgfSBmcm9tICdAc3Rvcnlib29rL2NoYW5uZWxzJztcblxuaW1wb3J0IHsgaW1wb3J0Rm4gfSBmcm9tICcuL3N0b3J5Ym9vay1zdG9yaWVzLmpzJztcblxuY29uc3QgZ2V0UHJvamVjdEFubm90YXRpb25zID0gKCkgPT5cbiAgY29tcG9zZUNvbmZpZ3MoW3JlcXVpcmUoJy9Vc2Vycy90aWFnb2JlbnRvL2FwYWNoZS9raWUtdG9vbHMvbm9kZV9tb2R1bGVzLy5wbnBtL0BzdG9yeWJvb2srcmVhY3RANy40LjZfcmVhY3QtZG9tQDE3LjAuMl9yZWFjdEAxNy4wLjJfX3JlYWN0QDE3LjAuMl90eXBlc2NyaXB0QDUuNS4zL25vZGVfbW9kdWxlcy9Ac3Rvcnlib29rL3JlYWN0L3ByZXZpZXcuanMnKSxyZXF1aXJlKCcvVXNlcnMvdGlhZ29iZW50by9hcGFjaGUva2llLXRvb2xzL25vZGVfbW9kdWxlcy8ucG5wbS9Ac3Rvcnlib29rK2FkZG9uLWRvY3NANy40LjZfQHR5cGVzK3JlYWN0LWRvbUAxNy4wLjhfQHR5cGVzK3JlYWN0QDE3LjAuMjFfZW5jb2RpbmdAMC4xLjEzX3JlYWNfb3NsdXVtZnR4Y3R2aHVlenRrdmFvNXZ1ZzQvbm9kZV9tb2R1bGVzL0BzdG9yeWJvb2svYWRkb24tZG9jcy9wcmV2aWV3LmpzJykscmVxdWlyZSgnL1VzZXJzL3RpYWdvYmVudG8vYXBhY2hlL2tpZS10b29scy9ub2RlX21vZHVsZXMvLnBucG0vQHN0b3J5Ym9vaythZGRvbi1oaWdobGlnaHRANy40LjYvbm9kZV9tb2R1bGVzL0BzdG9yeWJvb2svYWRkb24taGlnaGxpZ2h0L3ByZXZpZXcuanMnKSxyZXF1aXJlKCcvVXNlcnMvdGlhZ29iZW50by9hcGFjaGUva2llLXRvb2xzL25vZGVfbW9kdWxlcy8ucG5wbS9Ac3Rvcnlib29rK2FkZG9uLWxpbmtzQDcuNC42X3JlYWN0LWRvbUAxNy4wLjJfcmVhY3RAMTcuMC4yX19yZWFjdEAxNy4wLjIvbm9kZV9tb2R1bGVzL0BzdG9yeWJvb2svYWRkb24tbGlua3MvcHJldmlldy5qcycpLHJlcXVpcmUoJy9Vc2Vycy90aWFnb2JlbnRvL2FwYWNoZS9raWUtdG9vbHMvbm9kZV9tb2R1bGVzLy5wbnBtL0BzdG9yeWJvb2srYWRkb24tbWVhc3VyZUA3LjQuNl9AdHlwZXMrcmVhY3QtZG9tQDE3LjAuOF9AdHlwZXMrcmVhY3RAMTcuMC4yMV9yZWFjdC1kb21AMTcuMC4yX3JlYWN0QDE3LjAuMl9fcmVhY3RAMTcuMC4yL25vZGVfbW9kdWxlcy9Ac3Rvcnlib29rL2FkZG9uLW1lYXN1cmUvcHJldmlldy5qcycpLHJlcXVpcmUoJy9Vc2Vycy90aWFnb2JlbnRvL2FwYWNoZS9raWUtdG9vbHMvbm9kZV9tb2R1bGVzLy5wbnBtL0BzdG9yeWJvb2srYWRkb24tb3V0bGluZUA3LjQuNl9AdHlwZXMrcmVhY3QtZG9tQDE3LjAuOF9AdHlwZXMrcmVhY3RAMTcuMC4yMV9yZWFjdC1kb21AMTcuMC4yX3JlYWN0QDE3LjAuMl9fcmVhY3RAMTcuMC4yL25vZGVfbW9kdWxlcy9Ac3Rvcnlib29rL2FkZG9uLW91dGxpbmUvcHJldmlldy5qcycpLHJlcXVpcmUoJy9Vc2Vycy90aWFnb2JlbnRvL2FwYWNoZS9raWUtdG9vbHMvcGFja2FnZXMvYnBtbi1lZGl0b3IvLnN0b3J5Ym9vay9wcmV2aWV3LnRzeCcpLF0pO1xuXG5jb25zdCBjaGFubmVsID0gY3JlYXRlQnJvd3NlckNoYW5uZWwoeyBwYWdlOiAncHJldmlldycgfSk7XG5hZGRvbnMuc2V0Q2hhbm5lbChjaGFubmVsKTtcblxuaWYgKGdsb2JhbC5DT05GSUdfVFlQRSA9PT0gJ0RFVkVMT1BNRU5UJyl7XG4gIHdpbmRvdy5fX1NUT1JZQk9PS19TRVJWRVJfQ0hBTk5FTF9fID0gY2hhbm5lbDtcbn1cblxuY29uc3QgcHJldmlldyA9IG5ldyBQcmV2aWV3V2ViKCk7XG5cbndpbmRvdy5fX1NUT1JZQk9PS19QUkVWSUVXX18gPSBwcmV2aWV3O1xud2luZG93Ll9fU1RPUllCT09LX1NUT1JZX1NUT1JFX18gPSBwcmV2aWV3LnN0b3J5U3RvcmU7XG53aW5kb3cuX19TVE9SWUJPT0tfQURET05TX0NIQU5ORUxfXyA9IGNoYW5uZWw7XG53aW5kb3cuX19TVE9SWUJPT0tfQ0xJRU5UX0FQSV9fID0gbmV3IENsaWVudEFwaSh7IHN0b3J5U3RvcmU6IHByZXZpZXcuc3RvcnlTdG9yZSB9KTtcblxucHJldmlldy5pbml0aWFsaXplKHsgaW1wb3J0Rm4sIGdldFByb2plY3RBbm5vdGF0aW9ucyB9KTtcblxuaWYgKGltcG9ydC5tZXRhLndlYnBhY2tIb3QpIHtcbiAgaW1wb3J0Lm1ldGEud2VicGFja0hvdC5hY2NlcHQoJy4vc3Rvcnlib29rLXN0b3JpZXMuanMnLCAoKSA9PiB7XG4gICAgLy8gaW1wb3J0Rm4gaGFzIGNoYW5nZWQgc28gd2UgbmVlZCB0byBwYXRjaCB0aGUgbmV3IG9uZSBpblxuICAgIHByZXZpZXcub25TdG9yaWVzQ2hhbmdlZCh7IGltcG9ydEZuIH0pO1xuICB9KTtcblxuICBpbXBvcnQubWV0YS53ZWJwYWNrSG90LmFjY2VwdChbJy9Vc2Vycy90aWFnb2JlbnRvL2FwYWNoZS9raWUtdG9vbHMvbm9kZV9tb2R1bGVzLy5wbnBtL0BzdG9yeWJvb2srcmVhY3RANy40LjZfcmVhY3QtZG9tQDE3LjAuMl9yZWFjdEAxNy4wLjJfX3JlYWN0QDE3LjAuMl90eXBlc2NyaXB0QDUuNS4zL25vZGVfbW9kdWxlcy9Ac3Rvcnlib29rL3JlYWN0L3ByZXZpZXcuanMnLCcvVXNlcnMvdGlhZ29iZW50by9hcGFjaGUva2llLXRvb2xzL25vZGVfbW9kdWxlcy8ucG5wbS9Ac3Rvcnlib29rK2FkZG9uLWRvY3NANy40LjZfQHR5cGVzK3JlYWN0LWRvbUAxNy4wLjhfQHR5cGVzK3JlYWN0QDE3LjAuMjFfZW5jb2RpbmdAMC4xLjEzX3JlYWNfb3NsdXVtZnR4Y3R2aHVlenRrdmFvNXZ1ZzQvbm9kZV9tb2R1bGVzL0BzdG9yeWJvb2svYWRkb24tZG9jcy9wcmV2aWV3LmpzJywnL1VzZXJzL3RpYWdvYmVudG8vYXBhY2hlL2tpZS10b29scy9ub2RlX21vZHVsZXMvLnBucG0vQHN0b3J5Ym9vaythZGRvbi1oaWdobGlnaHRANy40LjYvbm9kZV9tb2R1bGVzL0BzdG9yeWJvb2svYWRkb24taGlnaGxpZ2h0L3ByZXZpZXcuanMnLCcvVXNlcnMvdGlhZ29iZW50by9hcGFjaGUva2llLXRvb2xzL25vZGVfbW9kdWxlcy8ucG5wbS9Ac3Rvcnlib29rK2FkZG9uLWxpbmtzQDcuNC42X3JlYWN0LWRvbUAxNy4wLjJfcmVhY3RAMTcuMC4yX19yZWFjdEAxNy4wLjIvbm9kZV9tb2R1bGVzL0BzdG9yeWJvb2svYWRkb24tbGlua3MvcHJldmlldy5qcycsJy9Vc2Vycy90aWFnb2JlbnRvL2FwYWNoZS9raWUtdG9vbHMvbm9kZV9tb2R1bGVzLy5wbnBtL0BzdG9yeWJvb2srYWRkb24tbWVhc3VyZUA3LjQuNl9AdHlwZXMrcmVhY3QtZG9tQDE3LjAuOF9AdHlwZXMrcmVhY3RAMTcuMC4yMV9yZWFjdC1kb21AMTcuMC4yX3JlYWN0QDE3LjAuMl9fcmVhY3RAMTcuMC4yL25vZGVfbW9kdWxlcy9Ac3Rvcnlib29rL2FkZG9uLW1lYXN1cmUvcHJldmlldy5qcycsJy9Vc2Vycy90aWFnb2JlbnRvL2FwYWNoZS9raWUtdG9vbHMvbm9kZV9tb2R1bGVzLy5wbnBtL0BzdG9yeWJvb2srYWRkb24tb3V0bGluZUA3LjQuNl9AdHlwZXMrcmVhY3QtZG9tQDE3LjAuOF9AdHlwZXMrcmVhY3RAMTcuMC4yMV9yZWFjdC1kb21AMTcuMC4yX3JlYWN0QDE3LjAuMl9fcmVhY3RAMTcuMC4yL25vZGVfbW9kdWxlcy9Ac3Rvcnlib29rL2FkZG9uLW91dGxpbmUvcHJldmlldy5qcycsJy9Vc2Vycy90aWFnb2JlbnRvL2FwYWNoZS9raWUtdG9vbHMvcGFja2FnZXMvYnBtbi1lZGl0b3IvLnN0b3J5Ym9vay9wcmV2aWV3LnRzeCcsXSwgKCkgPT4ge1xuICAgIC8vIGdldFByb2plY3RBbm5vdGF0aW9ucyBoYXMgY2hhbmdlZCBzbyB3ZSBuZWVkIHRvIHBhdGNoIHRoZSBuZXcgb25lIGluXG4gICAgcHJldmlldy5vbkdldFByb2plY3RBbm5vdGF0aW9uc0NoYW5nZWQoeyBnZXRQcm9qZWN0QW5ub3RhdGlvbnMgfSk7XG4gIH0pO1xufSIsImNvbnN0IHBpcGVsaW5lID0gKHgpID0+IHgoKTtcblxuY29uc3QgaW1wb3J0ZXJzID0gW1xuICBhc3luYyAocGF0aCkgPT4ge1xuICAgIGlmICghL15cXC5bXFxcXC9dKD86c3Rvcmllcyg/OlxcLyg/IVxcLikoPzooPzooPyEoPzpefFxcLylcXC4pLikqPylcXC98XFwvfCQpKD8hXFwuKSg/PS4pW14vXSo/XFwubWR4KSQvLmV4ZWMocGF0aCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIFxuICAgIGNvbnN0IHBhdGhSZW1haW5kZXIgPSBwYXRoLnN1YnN0cmluZygxMCk7XG4gICAgcmV0dXJuIGltcG9ydChcbiAgICAgIC8qIHdlYnBhY2tDaHVua05hbWU6IFwiW3JlcXVlc3RdXCIgKi9cbiAgICAgIC8qIHdlYnBhY2tJbmNsdWRlOiAvKD86XFwvc3Rvcmllcyg/OlxcLyg/IVxcLikoPzooPzooPyEoPzpefFxcLylcXC4pLikqPylcXC98XFwvfCQpKD8hXFwuKSg/PS4pW14vXSo/XFwubWR4KSQvICovXG4gICAgICAnLi9zdG9yaWVzLycgKyBwYXRoUmVtYWluZGVyXG4gICAgKTtcbiAgfVxuICAsXG4gIGFzeW5jIChwYXRoKSA9PiB7XG4gICAgaWYgKCEvXlxcLltcXFxcL10oPzpzdG9yaWVzKD86XFwvKD8hXFwuKSg/Oig/Oig/ISg/Ol58XFwvKVxcLikuKSo/KVxcL3xcXC98JCkoPyFcXC4pKD89LilbXi9dKj9cXC5zdG9yaWVzXFwuKGpzfGpzeHxtanN8dHN8dHN4KSkkLy5leGVjKHBhdGgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICBcbiAgICBjb25zdCBwYXRoUmVtYWluZGVyID0gcGF0aC5zdWJzdHJpbmcoMTApO1xuICAgIHJldHVybiBpbXBvcnQoXG4gICAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcIltyZXF1ZXN0XVwiICovXG4gICAgICAvKiB3ZWJwYWNrSW5jbHVkZTogLyg/OlxcL3N0b3JpZXMoPzpcXC8oPyFcXC4pKD86KD86KD8hKD86XnxcXC8pXFwuKS4pKj8pXFwvfFxcL3wkKSg/IVxcLikoPz0uKVteL10qP1xcLnN0b3JpZXNcXC4oanN8anN4fG1qc3x0c3x0c3gpKSQvICovXG4gICAgICAnLi9zdG9yaWVzLycgKyBwYXRoUmVtYWluZGVyXG4gICAgKTtcbiAgfVxuICBcbl07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbXBvcnRGbihwYXRoKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgaW1wb3J0ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgbW9kdWxlRXhwb3J0cyA9IGF3YWl0IHBpcGVsaW5lKCgpID0+IGltcG9ydGVyc1tpXShwYXRoKSk7XG4gICAgaWYgKG1vZHVsZUV4cG9ydHMpIHtcbiAgICAgIHJldHVybiBtb2R1bGVFeHBvcnRzO1xuICAgIH1cbiAgfVxufSIsInZhciBtYXAgPSB7XG5cdFwiLi9icG1uRWRpdG9yL0JwbW5FZGl0b3IubWR4XCI6IFtcblx0XHRcIi4vc3Rvcmllcy9icG1uRWRpdG9yL0JwbW5FZGl0b3IubWR4XCIsXG5cdFx0XCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19wbnBtX3N0b3J5Ym9va19jb21wb25lbnRzXzdfNF82X190eXBlc19yZWFjdC1kb21fMTdfMF84X190eXBlc19yZWFjdF8xN18tYmQzZWVhXCIsXG5cdFx0XCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19wbnBtX3N0b3J5Ym9va19ibG9ja3NfN182XzEzX190eXBlc19yZWFjdC1kb21fMTdfMF84X190eXBlc19yZWFjdF8xN18wXzItYmQ5MDc2XCIsXG5cdFx0XCJicG1uRWRpdG9yLUJwbW5FZGl0b3ItbWR4XCJcblx0XSxcblx0XCIuL2ZlYXR1cmVzL0N1c3RvbU5vZGVzL0N1c3RvbU5vZGVzLm1keFwiOiBbXG5cdFx0XCIuL3N0b3JpZXMvZmVhdHVyZXMvQ3VzdG9tTm9kZXMvQ3VzdG9tTm9kZXMubWR4XCIsXG5cdFx0XCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19wbnBtX3N0b3J5Ym9va19jb21wb25lbnRzXzdfNF82X190eXBlc19yZWFjdC1kb21fMTdfMF84X190eXBlc19yZWFjdF8xN18tYmQzZWVhXCIsXG5cdFx0XCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19wbnBtX3N0b3J5Ym9va19ibG9ja3NfN182XzEzX190eXBlc19yZWFjdC1kb21fMTdfMF84X190eXBlc19yZWFjdF8xN18wXzItYmQ5MDc2XCIsXG5cdFx0XCJmZWF0dXJlcy1DdXN0b21Ob2Rlcy1DdXN0b21Ob2Rlcy1tZHhcIlxuXHRdLFxuXHRcIi4vZmVhdHVyZXMvUHJvY2Vzc1ZhcmlhYmxlcy9Qcm9jZXNzVmFyaWFibGVzLm1keFwiOiBbXG5cdFx0XCIuL3N0b3JpZXMvZmVhdHVyZXMvUHJvY2Vzc1ZhcmlhYmxlcy9Qcm9jZXNzVmFyaWFibGVzLm1keFwiLFxuXHRcdFwidmVuZG9ycy1ub2RlX21vZHVsZXNfcG5wbV9zdG9yeWJvb2tfY29tcG9uZW50c183XzRfNl9fdHlwZXNfcmVhY3QtZG9tXzE3XzBfOF9fdHlwZXNfcmVhY3RfMTdfLWJkM2VlYVwiLFxuXHRcdFwidmVuZG9ycy1ub2RlX21vZHVsZXNfcG5wbV9zdG9yeWJvb2tfYmxvY2tzXzdfNl8xM19fdHlwZXNfcmVhY3QtZG9tXzE3XzBfOF9fdHlwZXNfcmVhY3RfMTdfMF8yLWJkOTA3NlwiLFxuXHRcdFwiZmVhdHVyZXMtUHJvY2Vzc1ZhcmlhYmxlcy1Qcm9jZXNzVmFyaWFibGVzLW1keFwiXG5cdF0sXG5cdFwiLi9taXNjL2VtcHR5L0VtcHR5Lm1keFwiOiBbXG5cdFx0XCIuL3N0b3JpZXMvbWlzYy9lbXB0eS9FbXB0eS5tZHhcIixcblx0XHRcInZlbmRvcnMtbm9kZV9tb2R1bGVzX3BucG1fc3Rvcnlib29rX2NvbXBvbmVudHNfN180XzZfX3R5cGVzX3JlYWN0LWRvbV8xN18wXzhfX3R5cGVzX3JlYWN0XzE3Xy1iZDNlZWFcIixcblx0XHRcInZlbmRvcnMtbm9kZV9tb2R1bGVzX3BucG1fc3Rvcnlib29rX2Jsb2Nrc183XzZfMTNfX3R5cGVzX3JlYWN0LWRvbV8xN18wXzhfX3R5cGVzX3JlYWN0XzE3XzBfMi1iZDkwNzZcIixcblx0XHRcInZlbmRvcnMtbm9kZV9tb2R1bGVzX3BucG1fcmVhY3RmbG93X2JhY2tncm91bmRfMTFfM182X190eXBlc19yZWFjdF8xN18wXzIxX2ltbWVyXzEwXzBfM19wYXRjaC0wMTZhYzFcIixcblx0XHRcIm1pc2MtZW1wdHktRW1wdHktc3Rvcmllc1wiLFxuXHRcdFwibWlzYy1lbXB0eS1FbXB0eS1tZHhcIlxuXHRdXG59O1xuZnVuY3Rpb24gd2VicGFja0FzeW5jQ29udGV4dChyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG5cdFx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0XHR0aHJvdyBlO1xuXHRcdH0pO1xuXHR9XG5cblx0dmFyIGlkcyA9IG1hcFtyZXFdLCBpZCA9IGlkc1swXTtcblx0cmV0dXJuIFByb21pc2UuYWxsKGlkcy5zbGljZSgxKS5tYXAoX193ZWJwYWNrX3JlcXVpcmVfXy5lKSkudGhlbigoKSA9PiB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xuXHR9KTtcbn1cbndlYnBhY2tBc3luY0NvbnRleHQua2V5cyA9ICgpID0+IChPYmplY3Qua2V5cyhtYXApKTtcbndlYnBhY2tBc3luY0NvbnRleHQuaWQgPSBcIi4vc3RvcmllcyBsYXp5IHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qJCBpbmNsdWRlOiAoPzpcXFxcL3N0b3JpZXMoPzpcXFxcLyg/JTIxXFxcXC4pKD86KD86KD8lMjEoPzpeJTdDXFxcXC8pXFxcXC4pLikqPylcXFxcLyU3Q1xcXFwvJTdDJCkoPyUyMVxcXFwuKSg/PS4pW14vXSo/XFxcXC5tZHgpJFwiO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQXN5bmNDb250ZXh0OyIsInZhciBtYXAgPSB7XG5cdFwiLi9kZXYvRGV2V2ViQXBwLnN0b3JpZXNcIjogW1xuXHRcdFwiLi9zdG9yaWVzL2Rldi9EZXZXZWJBcHAuc3Rvcmllcy50c3hcIixcblx0XHRcInZlbmRvcnMtbm9kZV9tb2R1bGVzX3BucG1fcmVhY3RmbG93X2JhY2tncm91bmRfMTFfM182X190eXBlc19yZWFjdF8xN18wXzIxX2ltbWVyXzEwXzBfM19wYXRjaC0wMTZhYzFcIixcblx0XHRcInZlbmRvcnMtbm9kZV9tb2R1bGVzX3BucG1fcGF0dGVybmZseV9yZWFjdC1jb3JlXzRfMjc2XzZfcmVhY3QtZG9tXzE3XzBfMl9yZWFjdF8xN18wXzJfX3JlYWN0Xy05NzdlOGFcIixcblx0XHRcIm1pc2MtZW1wdHktRW1wdHktc3Rvcmllc1wiLFxuXHRcdFwiZGV2LURldldlYkFwcC1zdG9yaWVzXCJcblx0XSxcblx0XCIuL2Rldi9EZXZXZWJBcHAuc3Rvcmllcy50c3hcIjogW1xuXHRcdFwiLi9zdG9yaWVzL2Rldi9EZXZXZWJBcHAuc3Rvcmllcy50c3hcIixcblx0XHRcInZlbmRvcnMtbm9kZV9tb2R1bGVzX3BucG1fcmVhY3RmbG93X2JhY2tncm91bmRfMTFfM182X190eXBlc19yZWFjdF8xN18wXzIxX2ltbWVyXzEwXzBfM19wYXRjaC0wMTZhYzFcIixcblx0XHRcInZlbmRvcnMtbm9kZV9tb2R1bGVzX3BucG1fcGF0dGVybmZseV9yZWFjdC1jb3JlXzRfMjc2XzZfcmVhY3QtZG9tXzE3XzBfMl9yZWFjdF8xN18wXzJfX3JlYWN0Xy05NzdlOGFcIixcblx0XHRcIm1pc2MtZW1wdHktRW1wdHktc3Rvcmllc1wiLFxuXHRcdFwiZGV2LURldldlYkFwcC1zdG9yaWVzXCJcblx0XSxcblx0XCIuL21pc2MvZW1wdHkvRW1wdHkuc3Rvcmllc1wiOiBbXG5cdFx0XCIuL3N0b3JpZXMvbWlzYy9lbXB0eS9FbXB0eS5zdG9yaWVzLnRzeFwiLFxuXHRcdFwidmVuZG9ycy1ub2RlX21vZHVsZXNfcG5wbV9yZWFjdGZsb3dfYmFja2dyb3VuZF8xMV8zXzZfX3R5cGVzX3JlYWN0XzE3XzBfMjFfaW1tZXJfMTBfMF8zX3BhdGNoLTAxNmFjMVwiLFxuXHRcdFwibWlzYy1lbXB0eS1FbXB0eS1zdG9yaWVzXCJcblx0XSxcblx0XCIuL21pc2MvZW1wdHkvRW1wdHkuc3Rvcmllcy50c3hcIjogW1xuXHRcdFwiLi9zdG9yaWVzL21pc2MvZW1wdHkvRW1wdHkuc3Rvcmllcy50c3hcIixcblx0XHRcInZlbmRvcnMtbm9kZV9tb2R1bGVzX3BucG1fcmVhY3RmbG93X2JhY2tncm91bmRfMTFfM182X190eXBlc19yZWFjdF8xN18wXzIxX2ltbWVyXzEwXzBfM19wYXRjaC0wMTZhYzFcIixcblx0XHRcIm1pc2MtZW1wdHktRW1wdHktc3Rvcmllc1wiXG5cdF1cbn07XG5mdW5jdGlvbiB3ZWJwYWNrQXN5bmNDb250ZXh0KHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcblx0XHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHRcdHRocm93IGU7XG5cdFx0fSk7XG5cdH1cblxuXHR2YXIgaWRzID0gbWFwW3JlcV0sIGlkID0gaWRzWzBdO1xuXHRyZXR1cm4gUHJvbWlzZS5hbGwoaWRzLnNsaWNlKDEpLm1hcChfX3dlYnBhY2tfcmVxdWlyZV9fLmUpKS50aGVuKCgpID0+IHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG5cdH0pO1xufVxud2VicGFja0FzeW5jQ29udGV4dC5rZXlzID0gKCkgPT4gKE9iamVjdC5rZXlzKG1hcCkpO1xud2VicGFja0FzeW5jQ29udGV4dC5pZCA9IFwiLi9zdG9yaWVzIGxhenkgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLiokIGluY2x1ZGU6ICg/OlxcXFwvc3Rvcmllcyg/OlxcXFwvKD8lMjFcXFxcLikoPzooPzooPyUyMSg/Ol4lN0NcXFxcLylcXFxcLikuKSo/KVxcXFwvJTdDXFxcXC8lN0MkKSg/JTIxXFxcXC4pKD89LilbXi9dKj9cXFxcLnN0b3JpZXNcXFxcLihqcyU3Q2pzeCU3Q21qcyU3Q3RzJTdDdHN4KSkkXCI7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tBc3luY0NvbnRleHQ7IiwibW9kdWxlLmV4cG9ydHMgPSBfX1NUT1JZQk9PS19NT0RVTEVfQ0hBTk5FTFNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fU1RPUllCT09LX01PRFVMRV9DTElFTlRfTE9HR0VSX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1NUT1JZQk9PS19NT0RVTEVfQ09SRV9FVkVOVFNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fU1RPUllCT09LX01PRFVMRV9HTE9CQUxfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fU1RPUllCT09LX01PRFVMRV9QUkVWSUVXX0FQSV9fOyJdLCJuYW1lcyI6WyJwcmV2aWV3IiwicGFyYW1ldGVycyIsImFjdGlvbnMiLCJhcmdUeXBlc1JlZ2V4IiwiY29udHJvbHMiLCJtYXRjaGVycyIsImNvbG9yIiwiZGF0ZSIsIm9wdGlvbnMiLCJzdG9yeVNvcnQiLCJvcmRlciIsImRlY29yYXRvcnMiLCJTdG9yeSIsIl9qc3giLCJzdHlsZSIsInBvc2l0aW9uIiwid2lkdGgiLCJoZWlnaHQiLCJ0b3AiLCJsZWZ0IiwiY2hpbGRyZW4iXSwic291cmNlUm9vdCI6IiJ9