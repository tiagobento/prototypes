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
        order: ["Dev", "Reference", ["Overview", "*", ["Overview", "*", ["Overview", "*"]]], "Features", ["Overview", "*", ["Overview", "*", ["Overview", "*"]]], "Use cases", ["Overview", "*", ["Overview", "*", ["Overview", "*"]]], "Misc", ["Overview", "*", ["Overview", "*", ["Overview", "*"]]]]
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
	],
	"./reference/Overview.mdx": [
		"./stories/reference/Overview.mdx",
		"vendors-node_modules_pnpm_storybook_components_7_4_6__types_react-dom_17_0_8__types_react_17_-bd3eea",
		"vendors-node_modules_pnpm_storybook_blocks_7_6_13__types_react-dom_17_0_8__types_react_17_0_2-bd9076",
		"reference-Overview-mdx"
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
	"./dev/Playground.stories": [
		"./stories/dev/Playground.stories.tsx",
		"vendors-node_modules_pnpm_reactflow_background_11_3_6__types_react_17_0_21_immer_10_0_3_patch-016ac1",
		"vendors-node_modules_pnpm_patternfly_react-core_4_276_6_react-dom_17_0_2_react_17_0_2__react_-977e8a",
		"misc-empty-Empty-stories",
		"dev-Playground-stories"
	],
	"./dev/Playground.stories.tsx": [
		"./stories/dev/Playground.stories.tsx",
		"vendors-node_modules_pnpm_reactflow_background_11_3_6__types_react_17_0_21_immer_10_0_3_patch-016ac1",
		"vendors-node_modules_pnpm_patternfly_react-core_4_276_6_react-dom_17_0_2_react_17_0_2__react_-977e8a",
		"misc-empty-Empty-stories",
		"dev-Playground-stories"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDRjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUMxQ0E7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Aa2llLXRvb2xzL2JwbW4tZWRpdG9yLy4vLnN0b3J5Ym9vay9wcmV2aWV3LnRzeCIsIndlYnBhY2s6Ly9Aa2llLXRvb2xzL2JwbW4tZWRpdG9yLy4vc3Rvcnlib29rLWNvbmZpZy1lbnRyeS5qcyIsIndlYnBhY2s6Ly9Aa2llLXRvb2xzL2JwbW4tZWRpdG9yLy4vc3Rvcnlib29rLXN0b3JpZXMuanMiLCJ3ZWJwYWNrOi8vQGtpZS10b29scy9icG1uLWVkaXRvci8uL3N0b3JpZXMvIGxhenkgXlxcLlxcLy4qJCBpbmNsdWRlOiAoIiwid2VicGFjazovL0BraWUtdG9vbHMvYnBtbi1lZGl0b3IvLi9zdG9yaWVzLyBsYXp5IF5cXC5cXC8uKiQgaW5jbHVkZTogKD9kNzdkIiwid2VicGFjazovL0BraWUtdG9vbHMvYnBtbi1lZGl0b3IvZXh0ZXJuYWwgdmFyIFwiX19TVE9SWUJPT0tfTU9EVUxFX0NIQU5ORUxTX19cIiIsIndlYnBhY2s6Ly9Aa2llLXRvb2xzL2JwbW4tZWRpdG9yL2V4dGVybmFsIHZhciBcIl9fU1RPUllCT09LX01PRFVMRV9DTElFTlRfTE9HR0VSX19cIiIsIndlYnBhY2s6Ly9Aa2llLXRvb2xzL2JwbW4tZWRpdG9yL2V4dGVybmFsIHZhciBcIl9fU1RPUllCT09LX01PRFVMRV9DT1JFX0VWRU5UU19fXCIiLCJ3ZWJwYWNrOi8vQGtpZS10b29scy9icG1uLWVkaXRvci9leHRlcm5hbCB2YXIgXCJfX1NUT1JZQk9PS19NT0RVTEVfR0xPQkFMX19cIiIsIndlYnBhY2s6Ly9Aa2llLXRvb2xzL2JwbW4tZWRpdG9yL2V4dGVybmFsIHZhciBcIl9fU1RPUllCT09LX01PRFVMRV9QUkVWSUVXX0FQSV9fXCIiXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIExpY2Vuc2VkIHRvIHRoZSBBcGFjaGUgU29mdHdhcmUgRm91bmRhdGlvbiAoQVNGKSB1bmRlciBvbmVcbiAqIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiAgU2VlIHRoZSBOT1RJQ0UgZmlsZVxuICogZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb25cbiAqIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLiAgVGhlIEFTRiBsaWNlbnNlcyB0aGlzIGZpbGVcbiAqIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGVcbiAqIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuICogd2l0aCB0aGUgTGljZW5zZS4gIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsXG4gKiBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxuICogXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcbiAqIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZVxuICogc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9uc1xuICogdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBQcmV2aWV3IH0gZnJvbSBcIkBzdG9yeWJvb2svcmVhY3RcIjtcblxuY29uc3QgcHJldmlldzogUHJldmlldyA9IHtcbiAgcGFyYW1ldGVyczoge1xuICAgIGFjdGlvbnM6IHsgYXJnVHlwZXNSZWdleDogXCJeb25bQS1aXS4qXCIgfSxcbiAgICBjb250cm9sczoge1xuICAgICAgbWF0Y2hlcnM6IHtcbiAgICAgICAgY29sb3I6IC8oYmFja2dyb3VuZHxjb2xvcikkL2ksXG4gICAgICAgIGRhdGU6IC9EYXRlJC8sXG4gICAgICB9LFxuICAgIH0sXG4gICAgb3B0aW9uczoge1xuICAgICAgc3RvcnlTb3J0OiB7XG4gICAgICAgIG9yZGVyOiBbXG4gICAgICAgICAgXCJEZXZcIixcbiAgICAgICAgICBcIlJlZmVyZW5jZVwiLFxuICAgICAgICAgIFtcIk92ZXJ2aWV3XCIsIFwiKlwiLCBbXCJPdmVydmlld1wiLCBcIipcIiwgW1wiT3ZlcnZpZXdcIiwgXCIqXCJdXV0sXG4gICAgICAgICAgXCJGZWF0dXJlc1wiLFxuICAgICAgICAgIFtcIk92ZXJ2aWV3XCIsIFwiKlwiLCBbXCJPdmVydmlld1wiLCBcIipcIiwgW1wiT3ZlcnZpZXdcIiwgXCIqXCJdXV0sXG4gICAgICAgICAgXCJVc2UgY2FzZXNcIixcbiAgICAgICAgICBbXCJPdmVydmlld1wiLCBcIipcIiwgW1wiT3ZlcnZpZXdcIiwgXCIqXCIsIFtcIk92ZXJ2aWV3XCIsIFwiKlwiXV1dLFxuICAgICAgICAgIFwiTWlzY1wiLFxuICAgICAgICAgIFtcIk92ZXJ2aWV3XCIsIFwiKlwiLCBbXCJPdmVydmlld1wiLCBcIipcIiwgW1wiT3ZlcnZpZXdcIiwgXCIqXCJdXV0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG5cbiAgZGVjb3JhdG9yczogW1xuICAgIChTdG9yeSkgPT4gKFxuICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLCB3aWR0aDogXCIxMDB2d1wiLCBoZWlnaHQ6IFwiMTAwdmhcIiwgdG9wOiBcIjBweFwiLCBsZWZ0OiBcIjBweFwiIH19PntTdG9yeSgpfTwvZGl2PlxuICAgICksXG4gIF0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBwcmV2aWV3O1xuIiwiaW1wb3J0IHsgZ2xvYmFsIH0gZnJvbSAnQHN0b3J5Ym9vay9nbG9iYWwnO1xuXG5pbXBvcnQgeyBDbGllbnRBcGksIFByZXZpZXdXZWIsIGFkZG9ucywgY29tcG9zZUNvbmZpZ3MgfSBmcm9tICdAc3Rvcnlib29rL3ByZXZpZXctYXBpJztcbmltcG9ydCB7IGNyZWF0ZUJyb3dzZXJDaGFubmVsIH0gZnJvbSAnQHN0b3J5Ym9vay9jaGFubmVscyc7XG5cbmltcG9ydCB7IGltcG9ydEZuIH0gZnJvbSAnLi9zdG9yeWJvb2stc3Rvcmllcy5qcyc7XG5cbmNvbnN0IGdldFByb2plY3RBbm5vdGF0aW9ucyA9ICgpID0+XG4gIGNvbXBvc2VDb25maWdzKFtyZXF1aXJlKCcvVXNlcnMvdGlhZ29iZW50by9hcGFjaGUva2llLXRvb2xzL25vZGVfbW9kdWxlcy8ucG5wbS9Ac3Rvcnlib29rK3JlYWN0QDcuNC42X3JlYWN0LWRvbUAxNy4wLjJfcmVhY3RAMTcuMC4yX19yZWFjdEAxNy4wLjJfdHlwZXNjcmlwdEA1LjUuMy9ub2RlX21vZHVsZXMvQHN0b3J5Ym9vay9yZWFjdC9wcmV2aWV3LmpzJykscmVxdWlyZSgnL1VzZXJzL3RpYWdvYmVudG8vYXBhY2hlL2tpZS10b29scy9ub2RlX21vZHVsZXMvLnBucG0vQHN0b3J5Ym9vaythZGRvbi1kb2NzQDcuNC42X0B0eXBlcytyZWFjdC1kb21AMTcuMC44X0B0eXBlcytyZWFjdEAxNy4wLjIxX2VuY29kaW5nQDAuMS4xM19yZWFjX29zbHV1bWZ0eGN0dmh1ZXp0a3ZhbzV2dWc0L25vZGVfbW9kdWxlcy9Ac3Rvcnlib29rL2FkZG9uLWRvY3MvcHJldmlldy5qcycpLHJlcXVpcmUoJy9Vc2Vycy90aWFnb2JlbnRvL2FwYWNoZS9raWUtdG9vbHMvbm9kZV9tb2R1bGVzLy5wbnBtL0BzdG9yeWJvb2srYWRkb24taGlnaGxpZ2h0QDcuNC42L25vZGVfbW9kdWxlcy9Ac3Rvcnlib29rL2FkZG9uLWhpZ2hsaWdodC9wcmV2aWV3LmpzJykscmVxdWlyZSgnL1VzZXJzL3RpYWdvYmVudG8vYXBhY2hlL2tpZS10b29scy9ub2RlX21vZHVsZXMvLnBucG0vQHN0b3J5Ym9vaythZGRvbi1saW5rc0A3LjQuNl9yZWFjdC1kb21AMTcuMC4yX3JlYWN0QDE3LjAuMl9fcmVhY3RAMTcuMC4yL25vZGVfbW9kdWxlcy9Ac3Rvcnlib29rL2FkZG9uLWxpbmtzL3ByZXZpZXcuanMnKSxyZXF1aXJlKCcvVXNlcnMvdGlhZ29iZW50by9hcGFjaGUva2llLXRvb2xzL25vZGVfbW9kdWxlcy8ucG5wbS9Ac3Rvcnlib29rK2FkZG9uLW1lYXN1cmVANy40LjZfQHR5cGVzK3JlYWN0LWRvbUAxNy4wLjhfQHR5cGVzK3JlYWN0QDE3LjAuMjFfcmVhY3QtZG9tQDE3LjAuMl9yZWFjdEAxNy4wLjJfX3JlYWN0QDE3LjAuMi9ub2RlX21vZHVsZXMvQHN0b3J5Ym9vay9hZGRvbi1tZWFzdXJlL3ByZXZpZXcuanMnKSxyZXF1aXJlKCcvVXNlcnMvdGlhZ29iZW50by9hcGFjaGUva2llLXRvb2xzL25vZGVfbW9kdWxlcy8ucG5wbS9Ac3Rvcnlib29rK2FkZG9uLW91dGxpbmVANy40LjZfQHR5cGVzK3JlYWN0LWRvbUAxNy4wLjhfQHR5cGVzK3JlYWN0QDE3LjAuMjFfcmVhY3QtZG9tQDE3LjAuMl9yZWFjdEAxNy4wLjJfX3JlYWN0QDE3LjAuMi9ub2RlX21vZHVsZXMvQHN0b3J5Ym9vay9hZGRvbi1vdXRsaW5lL3ByZXZpZXcuanMnKSxyZXF1aXJlKCcvVXNlcnMvdGlhZ29iZW50by9hcGFjaGUva2llLXRvb2xzL3BhY2thZ2VzL2JwbW4tZWRpdG9yLy5zdG9yeWJvb2svcHJldmlldy50c3gnKSxdKTtcblxuY29uc3QgY2hhbm5lbCA9IGNyZWF0ZUJyb3dzZXJDaGFubmVsKHsgcGFnZTogJ3ByZXZpZXcnIH0pO1xuYWRkb25zLnNldENoYW5uZWwoY2hhbm5lbCk7XG5cbmlmIChnbG9iYWwuQ09ORklHX1RZUEUgPT09ICdERVZFTE9QTUVOVCcpe1xuICB3aW5kb3cuX19TVE9SWUJPT0tfU0VSVkVSX0NIQU5ORUxfXyA9IGNoYW5uZWw7XG59XG5cbmNvbnN0IHByZXZpZXcgPSBuZXcgUHJldmlld1dlYigpO1xuXG53aW5kb3cuX19TVE9SWUJPT0tfUFJFVklFV19fID0gcHJldmlldztcbndpbmRvdy5fX1NUT1JZQk9PS19TVE9SWV9TVE9SRV9fID0gcHJldmlldy5zdG9yeVN0b3JlO1xud2luZG93Ll9fU1RPUllCT09LX0FERE9OU19DSEFOTkVMX18gPSBjaGFubmVsO1xud2luZG93Ll9fU1RPUllCT09LX0NMSUVOVF9BUElfXyA9IG5ldyBDbGllbnRBcGkoeyBzdG9yeVN0b3JlOiBwcmV2aWV3LnN0b3J5U3RvcmUgfSk7XG5cbnByZXZpZXcuaW5pdGlhbGl6ZSh7IGltcG9ydEZuLCBnZXRQcm9qZWN0QW5ub3RhdGlvbnMgfSk7XG5cbmlmIChpbXBvcnQubWV0YS53ZWJwYWNrSG90KSB7XG4gIGltcG9ydC5tZXRhLndlYnBhY2tIb3QuYWNjZXB0KCcuL3N0b3J5Ym9vay1zdG9yaWVzLmpzJywgKCkgPT4ge1xuICAgIC8vIGltcG9ydEZuIGhhcyBjaGFuZ2VkIHNvIHdlIG5lZWQgdG8gcGF0Y2ggdGhlIG5ldyBvbmUgaW5cbiAgICBwcmV2aWV3Lm9uU3Rvcmllc0NoYW5nZWQoeyBpbXBvcnRGbiB9KTtcbiAgfSk7XG5cbiAgaW1wb3J0Lm1ldGEud2VicGFja0hvdC5hY2NlcHQoWycvVXNlcnMvdGlhZ29iZW50by9hcGFjaGUva2llLXRvb2xzL25vZGVfbW9kdWxlcy8ucG5wbS9Ac3Rvcnlib29rK3JlYWN0QDcuNC42X3JlYWN0LWRvbUAxNy4wLjJfcmVhY3RAMTcuMC4yX19yZWFjdEAxNy4wLjJfdHlwZXNjcmlwdEA1LjUuMy9ub2RlX21vZHVsZXMvQHN0b3J5Ym9vay9yZWFjdC9wcmV2aWV3LmpzJywnL1VzZXJzL3RpYWdvYmVudG8vYXBhY2hlL2tpZS10b29scy9ub2RlX21vZHVsZXMvLnBucG0vQHN0b3J5Ym9vaythZGRvbi1kb2NzQDcuNC42X0B0eXBlcytyZWFjdC1kb21AMTcuMC44X0B0eXBlcytyZWFjdEAxNy4wLjIxX2VuY29kaW5nQDAuMS4xM19yZWFjX29zbHV1bWZ0eGN0dmh1ZXp0a3ZhbzV2dWc0L25vZGVfbW9kdWxlcy9Ac3Rvcnlib29rL2FkZG9uLWRvY3MvcHJldmlldy5qcycsJy9Vc2Vycy90aWFnb2JlbnRvL2FwYWNoZS9raWUtdG9vbHMvbm9kZV9tb2R1bGVzLy5wbnBtL0BzdG9yeWJvb2srYWRkb24taGlnaGxpZ2h0QDcuNC42L25vZGVfbW9kdWxlcy9Ac3Rvcnlib29rL2FkZG9uLWhpZ2hsaWdodC9wcmV2aWV3LmpzJywnL1VzZXJzL3RpYWdvYmVudG8vYXBhY2hlL2tpZS10b29scy9ub2RlX21vZHVsZXMvLnBucG0vQHN0b3J5Ym9vaythZGRvbi1saW5rc0A3LjQuNl9yZWFjdC1kb21AMTcuMC4yX3JlYWN0QDE3LjAuMl9fcmVhY3RAMTcuMC4yL25vZGVfbW9kdWxlcy9Ac3Rvcnlib29rL2FkZG9uLWxpbmtzL3ByZXZpZXcuanMnLCcvVXNlcnMvdGlhZ29iZW50by9hcGFjaGUva2llLXRvb2xzL25vZGVfbW9kdWxlcy8ucG5wbS9Ac3Rvcnlib29rK2FkZG9uLW1lYXN1cmVANy40LjZfQHR5cGVzK3JlYWN0LWRvbUAxNy4wLjhfQHR5cGVzK3JlYWN0QDE3LjAuMjFfcmVhY3QtZG9tQDE3LjAuMl9yZWFjdEAxNy4wLjJfX3JlYWN0QDE3LjAuMi9ub2RlX21vZHVsZXMvQHN0b3J5Ym9vay9hZGRvbi1tZWFzdXJlL3ByZXZpZXcuanMnLCcvVXNlcnMvdGlhZ29iZW50by9hcGFjaGUva2llLXRvb2xzL25vZGVfbW9kdWxlcy8ucG5wbS9Ac3Rvcnlib29rK2FkZG9uLW91dGxpbmVANy40LjZfQHR5cGVzK3JlYWN0LWRvbUAxNy4wLjhfQHR5cGVzK3JlYWN0QDE3LjAuMjFfcmVhY3QtZG9tQDE3LjAuMl9yZWFjdEAxNy4wLjJfX3JlYWN0QDE3LjAuMi9ub2RlX21vZHVsZXMvQHN0b3J5Ym9vay9hZGRvbi1vdXRsaW5lL3ByZXZpZXcuanMnLCcvVXNlcnMvdGlhZ29iZW50by9hcGFjaGUva2llLXRvb2xzL3BhY2thZ2VzL2JwbW4tZWRpdG9yLy5zdG9yeWJvb2svcHJldmlldy50c3gnLF0sICgpID0+IHtcbiAgICAvLyBnZXRQcm9qZWN0QW5ub3RhdGlvbnMgaGFzIGNoYW5nZWQgc28gd2UgbmVlZCB0byBwYXRjaCB0aGUgbmV3IG9uZSBpblxuICAgIHByZXZpZXcub25HZXRQcm9qZWN0QW5ub3RhdGlvbnNDaGFuZ2VkKHsgZ2V0UHJvamVjdEFubm90YXRpb25zIH0pO1xuICB9KTtcbn0iLCJjb25zdCBwaXBlbGluZSA9ICh4KSA9PiB4KCk7XG5cbmNvbnN0IGltcG9ydGVycyA9IFtcbiAgYXN5bmMgKHBhdGgpID0+IHtcbiAgICBpZiAoIS9eXFwuW1xcXFwvXSg/OnN0b3JpZXMoPzpcXC8oPyFcXC4pKD86KD86KD8hKD86XnxcXC8pXFwuKS4pKj8pXFwvfFxcL3wkKSg/IVxcLikoPz0uKVteL10qP1xcLm1keCkkLy5leGVjKHBhdGgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICBcbiAgICBjb25zdCBwYXRoUmVtYWluZGVyID0gcGF0aC5zdWJzdHJpbmcoMTApO1xuICAgIHJldHVybiBpbXBvcnQoXG4gICAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcIltyZXF1ZXN0XVwiICovXG4gICAgICAvKiB3ZWJwYWNrSW5jbHVkZTogLyg/OlxcL3N0b3JpZXMoPzpcXC8oPyFcXC4pKD86KD86KD8hKD86XnxcXC8pXFwuKS4pKj8pXFwvfFxcL3wkKSg/IVxcLikoPz0uKVteL10qP1xcLm1keCkkLyAqL1xuICAgICAgJy4vc3Rvcmllcy8nICsgcGF0aFJlbWFpbmRlclxuICAgICk7XG4gIH1cbiAgLFxuICBhc3luYyAocGF0aCkgPT4ge1xuICAgIGlmICghL15cXC5bXFxcXC9dKD86c3Rvcmllcyg/OlxcLyg/IVxcLikoPzooPzooPyEoPzpefFxcLylcXC4pLikqPylcXC98XFwvfCQpKD8hXFwuKSg/PS4pW14vXSo/XFwuc3Rvcmllc1xcLihqc3xqc3h8bWpzfHRzfHRzeCkpJC8uZXhlYyhwYXRoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgXG4gICAgY29uc3QgcGF0aFJlbWFpbmRlciA9IHBhdGguc3Vic3RyaW5nKDEwKTtcbiAgICByZXR1cm4gaW1wb3J0KFxuICAgICAgLyogd2VicGFja0NodW5rTmFtZTogXCJbcmVxdWVzdF1cIiAqL1xuICAgICAgLyogd2VicGFja0luY2x1ZGU6IC8oPzpcXC9zdG9yaWVzKD86XFwvKD8hXFwuKSg/Oig/Oig/ISg/Ol58XFwvKVxcLikuKSo/KVxcL3xcXC98JCkoPyFcXC4pKD89LilbXi9dKj9cXC5zdG9yaWVzXFwuKGpzfGpzeHxtanN8dHN8dHN4KSkkLyAqL1xuICAgICAgJy4vc3Rvcmllcy8nICsgcGF0aFJlbWFpbmRlclxuICAgICk7XG4gIH1cbiAgXG5dO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW1wb3J0Rm4ocGF0aCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGltcG9ydGVycy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IG1vZHVsZUV4cG9ydHMgPSBhd2FpdCBwaXBlbGluZSgoKSA9PiBpbXBvcnRlcnNbaV0ocGF0aCkpO1xuICAgIGlmIChtb2R1bGVFeHBvcnRzKSB7XG4gICAgICByZXR1cm4gbW9kdWxlRXhwb3J0cztcbiAgICB9XG4gIH1cbn0iLCJ2YXIgbWFwID0ge1xuXHRcIi4vZmVhdHVyZXMvQ3VzdG9tTm9kZXMvQ3VzdG9tTm9kZXMubWR4XCI6IFtcblx0XHRcIi4vc3Rvcmllcy9mZWF0dXJlcy9DdXN0b21Ob2Rlcy9DdXN0b21Ob2Rlcy5tZHhcIixcblx0XHRcInZlbmRvcnMtbm9kZV9tb2R1bGVzX3BucG1fc3Rvcnlib29rX2NvbXBvbmVudHNfN180XzZfX3R5cGVzX3JlYWN0LWRvbV8xN18wXzhfX3R5cGVzX3JlYWN0XzE3Xy1iZDNlZWFcIixcblx0XHRcInZlbmRvcnMtbm9kZV9tb2R1bGVzX3BucG1fc3Rvcnlib29rX2Jsb2Nrc183XzZfMTNfX3R5cGVzX3JlYWN0LWRvbV8xN18wXzhfX3R5cGVzX3JlYWN0XzE3XzBfMi1iZDkwNzZcIixcblx0XHRcImZlYXR1cmVzLUN1c3RvbU5vZGVzLUN1c3RvbU5vZGVzLW1keFwiXG5cdF0sXG5cdFwiLi9mZWF0dXJlcy9Qcm9jZXNzVmFyaWFibGVzL1Byb2Nlc3NWYXJpYWJsZXMubWR4XCI6IFtcblx0XHRcIi4vc3Rvcmllcy9mZWF0dXJlcy9Qcm9jZXNzVmFyaWFibGVzL1Byb2Nlc3NWYXJpYWJsZXMubWR4XCIsXG5cdFx0XCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19wbnBtX3N0b3J5Ym9va19jb21wb25lbnRzXzdfNF82X190eXBlc19yZWFjdC1kb21fMTdfMF84X190eXBlc19yZWFjdF8xN18tYmQzZWVhXCIsXG5cdFx0XCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19wbnBtX3N0b3J5Ym9va19ibG9ja3NfN182XzEzX190eXBlc19yZWFjdC1kb21fMTdfMF84X190eXBlc19yZWFjdF8xN18wXzItYmQ5MDc2XCIsXG5cdFx0XCJmZWF0dXJlcy1Qcm9jZXNzVmFyaWFibGVzLVByb2Nlc3NWYXJpYWJsZXMtbWR4XCJcblx0XSxcblx0XCIuL21pc2MvZW1wdHkvRW1wdHkubWR4XCI6IFtcblx0XHRcIi4vc3Rvcmllcy9taXNjL2VtcHR5L0VtcHR5Lm1keFwiLFxuXHRcdFwidmVuZG9ycy1ub2RlX21vZHVsZXNfcG5wbV9zdG9yeWJvb2tfY29tcG9uZW50c183XzRfNl9fdHlwZXNfcmVhY3QtZG9tXzE3XzBfOF9fdHlwZXNfcmVhY3RfMTdfLWJkM2VlYVwiLFxuXHRcdFwidmVuZG9ycy1ub2RlX21vZHVsZXNfcG5wbV9zdG9yeWJvb2tfYmxvY2tzXzdfNl8xM19fdHlwZXNfcmVhY3QtZG9tXzE3XzBfOF9fdHlwZXNfcmVhY3RfMTdfMF8yLWJkOTA3NlwiLFxuXHRcdFwidmVuZG9ycy1ub2RlX21vZHVsZXNfcG5wbV9yZWFjdGZsb3dfYmFja2dyb3VuZF8xMV8zXzZfX3R5cGVzX3JlYWN0XzE3XzBfMjFfaW1tZXJfMTBfMF8zX3BhdGNoLTAxNmFjMVwiLFxuXHRcdFwibWlzYy1lbXB0eS1FbXB0eS1zdG9yaWVzXCIsXG5cdFx0XCJtaXNjLWVtcHR5LUVtcHR5LW1keFwiXG5cdF0sXG5cdFwiLi9yZWZlcmVuY2UvT3ZlcnZpZXcubWR4XCI6IFtcblx0XHRcIi4vc3Rvcmllcy9yZWZlcmVuY2UvT3ZlcnZpZXcubWR4XCIsXG5cdFx0XCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19wbnBtX3N0b3J5Ym9va19jb21wb25lbnRzXzdfNF82X190eXBlc19yZWFjdC1kb21fMTdfMF84X190eXBlc19yZWFjdF8xN18tYmQzZWVhXCIsXG5cdFx0XCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19wbnBtX3N0b3J5Ym9va19ibG9ja3NfN182XzEzX190eXBlc19yZWFjdC1kb21fMTdfMF84X190eXBlc19yZWFjdF8xN18wXzItYmQ5MDc2XCIsXG5cdFx0XCJyZWZlcmVuY2UtT3ZlcnZpZXctbWR4XCJcblx0XVxufTtcbmZ1bmN0aW9uIHdlYnBhY2tBc3luY0NvbnRleHQocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuXHRcdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdFx0dGhyb3cgZTtcblx0XHR9KTtcblx0fVxuXG5cdHZhciBpZHMgPSBtYXBbcmVxXSwgaWQgPSBpZHNbMF07XG5cdHJldHVybiBQcm9taXNlLmFsbChpZHMuc2xpY2UoMSkubWFwKF9fd2VicGFja19yZXF1aXJlX18uZSkpLnRoZW4oKCkgPT4ge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcblx0fSk7XG59XG53ZWJwYWNrQXN5bmNDb250ZXh0LmtleXMgPSAoKSA9PiAoT2JqZWN0LmtleXMobWFwKSk7XG53ZWJwYWNrQXN5bmNDb250ZXh0LmlkID0gXCIuL3N0b3JpZXMgbGF6eSByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKiQgaW5jbHVkZTogKD86XFxcXC9zdG9yaWVzKD86XFxcXC8oPyUyMVxcXFwuKSg/Oig/Oig/JTIxKD86XiU3Q1xcXFwvKVxcXFwuKS4pKj8pXFxcXC8lN0NcXFxcLyU3QyQpKD8lMjFcXFxcLikoPz0uKVteL10qP1xcXFwubWR4KSRcIjtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0FzeW5jQ29udGV4dDsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vZGV2L1BsYXlncm91bmQuc3Rvcmllc1wiOiBbXG5cdFx0XCIuL3N0b3JpZXMvZGV2L1BsYXlncm91bmQuc3Rvcmllcy50c3hcIixcblx0XHRcInZlbmRvcnMtbm9kZV9tb2R1bGVzX3BucG1fcmVhY3RmbG93X2JhY2tncm91bmRfMTFfM182X190eXBlc19yZWFjdF8xN18wXzIxX2ltbWVyXzEwXzBfM19wYXRjaC0wMTZhYzFcIixcblx0XHRcInZlbmRvcnMtbm9kZV9tb2R1bGVzX3BucG1fcGF0dGVybmZseV9yZWFjdC1jb3JlXzRfMjc2XzZfcmVhY3QtZG9tXzE3XzBfMl9yZWFjdF8xN18wXzJfX3JlYWN0Xy05NzdlOGFcIixcblx0XHRcIm1pc2MtZW1wdHktRW1wdHktc3Rvcmllc1wiLFxuXHRcdFwiZGV2LVBsYXlncm91bmQtc3Rvcmllc1wiXG5cdF0sXG5cdFwiLi9kZXYvUGxheWdyb3VuZC5zdG9yaWVzLnRzeFwiOiBbXG5cdFx0XCIuL3N0b3JpZXMvZGV2L1BsYXlncm91bmQuc3Rvcmllcy50c3hcIixcblx0XHRcInZlbmRvcnMtbm9kZV9tb2R1bGVzX3BucG1fcmVhY3RmbG93X2JhY2tncm91bmRfMTFfM182X190eXBlc19yZWFjdF8xN18wXzIxX2ltbWVyXzEwXzBfM19wYXRjaC0wMTZhYzFcIixcblx0XHRcInZlbmRvcnMtbm9kZV9tb2R1bGVzX3BucG1fcGF0dGVybmZseV9yZWFjdC1jb3JlXzRfMjc2XzZfcmVhY3QtZG9tXzE3XzBfMl9yZWFjdF8xN18wXzJfX3JlYWN0Xy05NzdlOGFcIixcblx0XHRcIm1pc2MtZW1wdHktRW1wdHktc3Rvcmllc1wiLFxuXHRcdFwiZGV2LVBsYXlncm91bmQtc3Rvcmllc1wiXG5cdF0sXG5cdFwiLi9taXNjL2VtcHR5L0VtcHR5LnN0b3JpZXNcIjogW1xuXHRcdFwiLi9zdG9yaWVzL21pc2MvZW1wdHkvRW1wdHkuc3Rvcmllcy50c3hcIixcblx0XHRcInZlbmRvcnMtbm9kZV9tb2R1bGVzX3BucG1fcmVhY3RmbG93X2JhY2tncm91bmRfMTFfM182X190eXBlc19yZWFjdF8xN18wXzIxX2ltbWVyXzEwXzBfM19wYXRjaC0wMTZhYzFcIixcblx0XHRcIm1pc2MtZW1wdHktRW1wdHktc3Rvcmllc1wiXG5cdF0sXG5cdFwiLi9taXNjL2VtcHR5L0VtcHR5LnN0b3JpZXMudHN4XCI6IFtcblx0XHRcIi4vc3Rvcmllcy9taXNjL2VtcHR5L0VtcHR5LnN0b3JpZXMudHN4XCIsXG5cdFx0XCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19wbnBtX3JlYWN0Zmxvd19iYWNrZ3JvdW5kXzExXzNfNl9fdHlwZXNfcmVhY3RfMTdfMF8yMV9pbW1lcl8xMF8wXzNfcGF0Y2gtMDE2YWMxXCIsXG5cdFx0XCJtaXNjLWVtcHR5LUVtcHR5LXN0b3JpZXNcIlxuXHRdXG59O1xuZnVuY3Rpb24gd2VicGFja0FzeW5jQ29udGV4dChyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG5cdFx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0XHR0aHJvdyBlO1xuXHRcdH0pO1xuXHR9XG5cblx0dmFyIGlkcyA9IG1hcFtyZXFdLCBpZCA9IGlkc1swXTtcblx0cmV0dXJuIFByb21pc2UuYWxsKGlkcy5zbGljZSgxKS5tYXAoX193ZWJwYWNrX3JlcXVpcmVfXy5lKSkudGhlbigoKSA9PiB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xuXHR9KTtcbn1cbndlYnBhY2tBc3luY0NvbnRleHQua2V5cyA9ICgpID0+IChPYmplY3Qua2V5cyhtYXApKTtcbndlYnBhY2tBc3luY0NvbnRleHQuaWQgPSBcIi4vc3RvcmllcyBsYXp5IHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qJCBpbmNsdWRlOiAoPzpcXFxcL3N0b3JpZXMoPzpcXFxcLyg/JTIxXFxcXC4pKD86KD86KD8lMjEoPzpeJTdDXFxcXC8pXFxcXC4pLikqPylcXFxcLyU3Q1xcXFwvJTdDJCkoPyUyMVxcXFwuKSg/PS4pW14vXSo/XFxcXC5zdG9yaWVzXFxcXC4oanMlN0Nqc3glN0NtanMlN0N0cyU3Q3RzeCkpJFwiO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQXN5bmNDb250ZXh0OyIsIm1vZHVsZS5leHBvcnRzID0gX19TVE9SWUJPT0tfTU9EVUxFX0NIQU5ORUxTX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1NUT1JZQk9PS19NT0RVTEVfQ0xJRU5UX0xPR0dFUl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19TVE9SWUJPT0tfTU9EVUxFX0NPUkVfRVZFTlRTX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1NUT1JZQk9PS19NT0RVTEVfR0xPQkFMX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1NUT1JZQk9PS19NT0RVTEVfUFJFVklFV19BUElfXzsiXSwibmFtZXMiOlsicHJldmlldyIsInBhcmFtZXRlcnMiLCJhY3Rpb25zIiwiYXJnVHlwZXNSZWdleCIsImNvbnRyb2xzIiwibWF0Y2hlcnMiLCJjb2xvciIsImRhdGUiLCJvcHRpb25zIiwic3RvcnlTb3J0Iiwib3JkZXIiLCJkZWNvcmF0b3JzIiwiU3RvcnkiLCJfanN4Iiwic3R5bGUiLCJwb3NpdGlvbiIsIndpZHRoIiwiaGVpZ2h0IiwidG9wIiwibGVmdCIsImNoaWxkcmVuIl0sInNvdXJjZVJvb3QiOiIifQ==