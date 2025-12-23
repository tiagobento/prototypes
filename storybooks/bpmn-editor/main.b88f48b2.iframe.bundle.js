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
	"./features/CustomTasks/CustomTasks.mdx": [
		"./stories/features/CustomTasks/CustomTasks.mdx",
		"vendors-node_modules_pnpm_reactflow_background_11_3_6__types_react_17_0_21_immer_10_0_3_patch-31dabc",
		"vendors-node_modules_pnpm_storybook_components_7_4_6__types_react-dom_17_0_8__types_react_17_-bd3eea",
		"vendors-node_modules_pnpm_storybook_blocks_7_6_13__types_react-dom_17_0_8__types_react_17_0_2-fe4483",
		"misc-empty-Empty-stories",
		"features-CustomTasks-CustomTasks-mdx"
	],
	"./features/ProcessVariables/ProcessVariables.mdx": [
		"./stories/features/ProcessVariables/ProcessVariables.mdx",
		"vendors-node_modules_pnpm_storybook_components_7_4_6__types_react-dom_17_0_8__types_react_17_-bd3eea",
		"vendors-node_modules_pnpm_storybook_blocks_7_6_13__types_react-dom_17_0_8__types_react_17_0_2-fe4483",
		"features-ProcessVariables-ProcessVariables-mdx"
	],
	"./misc/empty/Empty.mdx": [
		"./stories/misc/empty/Empty.mdx",
		"vendors-node_modules_pnpm_reactflow_background_11_3_6__types_react_17_0_21_immer_10_0_3_patch-31dabc",
		"vendors-node_modules_pnpm_storybook_components_7_4_6__types_react-dom_17_0_8__types_react_17_-bd3eea",
		"vendors-node_modules_pnpm_storybook_blocks_7_6_13__types_react-dom_17_0_8__types_react_17_0_2-fe4483",
		"misc-empty-Empty-stories",
		"misc-empty-Empty-mdx"
	],
	"./reference/Overview.mdx": [
		"./stories/reference/Overview.mdx",
		"vendors-node_modules_pnpm_storybook_components_7_4_6__types_react-dom_17_0_8__types_react_17_-bd3eea",
		"vendors-node_modules_pnpm_storybook_blocks_7_6_13__types_react-dom_17_0_8__types_react_17_0_2-fe4483",
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
		"vendors-node_modules_pnpm_reactflow_background_11_3_6__types_react_17_0_21_immer_10_0_3_patch-31dabc",
		"vendors-node_modules_pnpm_patternfly_react-core_5_4_1_react-dom_17_0_2_react_17_0_2__react_17-036a72",
		"misc-empty-Empty-stories",
		"dev-Playground-stories"
	],
	"./dev/Playground.stories.tsx": [
		"./stories/dev/Playground.stories.tsx",
		"vendors-node_modules_pnpm_reactflow_background_11_3_6__types_react_17_0_21_immer_10_0_3_patch-31dabc",
		"vendors-node_modules_pnpm_patternfly_react-core_5_4_1_react-dom_17_0_2_react_17_0_2__react_17-036a72",
		"misc-empty-Empty-stories",
		"dev-Playground-stories"
	],
	"./features/CustomTasks/CustomTasks.stories": [
		"./stories/features/CustomTasks/CustomTasks.stories.tsx",
		"vendors-node_modules_pnpm_reactflow_background_11_3_6__types_react_17_0_21_immer_10_0_3_patch-31dabc",
		"misc-empty-Empty-stories",
		"features-CustomTasks-CustomTasks-stories"
	],
	"./features/CustomTasks/CustomTasks.stories.tsx": [
		"./stories/features/CustomTasks/CustomTasks.stories.tsx",
		"vendors-node_modules_pnpm_reactflow_background_11_3_6__types_react_17_0_21_immer_10_0_3_patch-31dabc",
		"misc-empty-Empty-stories",
		"features-CustomTasks-CustomTasks-stories"
	],
	"./misc/empty/Empty.stories": [
		"./stories/misc/empty/Empty.stories.tsx",
		"vendors-node_modules_pnpm_reactflow_background_11_3_6__types_react_17_0_21_immer_10_0_3_patch-31dabc",
		"misc-empty-Empty-stories"
	],
	"./misc/empty/Empty.stories.tsx": [
		"./stories/misc/empty/Empty.stories.tsx",
		"vendors-node_modules_pnpm_reactflow_background_11_3_6__types_react_17_0_21_immer_10_0_3_patch-31dabc",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM5Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDdERBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGtpZS10b29scy9icG1uLWVkaXRvci8uLy5zdG9yeWJvb2svcHJldmlldy50c3giLCJ3ZWJwYWNrOi8vQGtpZS10b29scy9icG1uLWVkaXRvci8uL3N0b3J5Ym9vay1jb25maWctZW50cnkuanMiLCJ3ZWJwYWNrOi8vQGtpZS10b29scy9icG1uLWVkaXRvci8uL3N0b3J5Ym9vay1zdG9yaWVzLmpzIiwid2VicGFjazovL0BraWUtdG9vbHMvYnBtbi1lZGl0b3IvLi9zdG9yaWVzLyBsYXp5IF5cXC5cXC8uKiQgaW5jbHVkZTogKCIsIndlYnBhY2s6Ly9Aa2llLXRvb2xzL2JwbW4tZWRpdG9yLy4vc3Rvcmllcy8gbGF6eSBeXFwuXFwvLiokIGluY2x1ZGU6ICg/ZDc3ZCIsIndlYnBhY2s6Ly9Aa2llLXRvb2xzL2JwbW4tZWRpdG9yL2V4dGVybmFsIHZhciBcIl9fU1RPUllCT09LX01PRFVMRV9DSEFOTkVMU19fXCIiLCJ3ZWJwYWNrOi8vQGtpZS10b29scy9icG1uLWVkaXRvci9leHRlcm5hbCB2YXIgXCJfX1NUT1JZQk9PS19NT0RVTEVfQ0xJRU5UX0xPR0dFUl9fXCIiLCJ3ZWJwYWNrOi8vQGtpZS10b29scy9icG1uLWVkaXRvci9leHRlcm5hbCB2YXIgXCJfX1NUT1JZQk9PS19NT0RVTEVfQ09SRV9FVkVOVFNfX1wiIiwid2VicGFjazovL0BraWUtdG9vbHMvYnBtbi1lZGl0b3IvZXh0ZXJuYWwgdmFyIFwiX19TVE9SWUJPT0tfTU9EVUxFX0dMT0JBTF9fXCIiLCJ3ZWJwYWNrOi8vQGtpZS10b29scy9icG1uLWVkaXRvci9leHRlcm5hbCB2YXIgXCJfX1NUT1JZQk9PS19NT0RVTEVfUFJFVklFV19BUElfX1wiIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBMaWNlbnNlZCB0byB0aGUgQXBhY2hlIFNvZnR3YXJlIEZvdW5kYXRpb24gKEFTRikgdW5kZXIgb25lXG4gKiBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gIFNlZSB0aGUgTk9USUNFIGZpbGVcbiAqIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uXG4gKiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC4gIFRoZSBBU0YgbGljZW5zZXMgdGhpcyBmaWxlXG4gKiB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlXG4gKiBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2VcbiAqIHdpdGggdGhlIExpY2Vuc2UuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLFxuICogc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cbiAqIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXG4gKiBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGVcbiAqIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnNcbiAqIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUHJldmlldyB9IGZyb20gXCJAc3Rvcnlib29rL3JlYWN0XCI7XG5cbmNvbnN0IHByZXZpZXc6IFByZXZpZXcgPSB7XG4gIHBhcmFtZXRlcnM6IHtcbiAgICBhY3Rpb25zOiB7IGFyZ1R5cGVzUmVnZXg6IFwiXm9uW0EtWl0uKlwiIH0sXG4gICAgY29udHJvbHM6IHtcbiAgICAgIG1hdGNoZXJzOiB7XG4gICAgICAgIGNvbG9yOiAvKGJhY2tncm91bmR8Y29sb3IpJC9pLFxuICAgICAgICBkYXRlOiAvRGF0ZSQvLFxuICAgICAgfSxcbiAgICB9LFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIHN0b3J5U29ydDoge1xuICAgICAgICBvcmRlcjogW1xuICAgICAgICAgIFwiRGV2XCIsXG4gICAgICAgICAgXCJSZWZlcmVuY2VcIixcbiAgICAgICAgICBbXCJPdmVydmlld1wiLCBcIipcIiwgW1wiT3ZlcnZpZXdcIiwgXCIqXCIsIFtcIk92ZXJ2aWV3XCIsIFwiKlwiXV1dLFxuICAgICAgICAgIFwiRmVhdHVyZXNcIixcbiAgICAgICAgICBbXCJPdmVydmlld1wiLCBcIipcIiwgW1wiT3ZlcnZpZXdcIiwgXCIqXCIsIFtcIk92ZXJ2aWV3XCIsIFwiKlwiXV1dLFxuICAgICAgICAgIFwiVXNlIGNhc2VzXCIsXG4gICAgICAgICAgW1wiT3ZlcnZpZXdcIiwgXCIqXCIsIFtcIk92ZXJ2aWV3XCIsIFwiKlwiLCBbXCJPdmVydmlld1wiLCBcIipcIl1dXSxcbiAgICAgICAgICBcIk1pc2NcIixcbiAgICAgICAgICBbXCJPdmVydmlld1wiLCBcIipcIiwgW1wiT3ZlcnZpZXdcIiwgXCIqXCIsIFtcIk92ZXJ2aWV3XCIsIFwiKlwiXV1dLFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuXG4gIGRlY29yYXRvcnM6IFtcbiAgICAoU3RvcnkpID0+IChcbiAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246IFwiYWJzb2x1dGVcIiwgd2lkdGg6IFwiMTAwdndcIiwgaGVpZ2h0OiBcIjEwMHZoXCIsIHRvcDogXCIwcHhcIiwgbGVmdDogXCIwcHhcIiB9fT57U3RvcnkoKX08L2Rpdj5cbiAgICApLFxuICBdLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgcHJldmlldztcbiIsImltcG9ydCB7IGdsb2JhbCB9IGZyb20gJ0BzdG9yeWJvb2svZ2xvYmFsJztcblxuaW1wb3J0IHsgQ2xpZW50QXBpLCBQcmV2aWV3V2ViLCBhZGRvbnMsIGNvbXBvc2VDb25maWdzIH0gZnJvbSAnQHN0b3J5Ym9vay9wcmV2aWV3LWFwaSc7XG5pbXBvcnQgeyBjcmVhdGVCcm93c2VyQ2hhbm5lbCB9IGZyb20gJ0BzdG9yeWJvb2svY2hhbm5lbHMnO1xuXG5pbXBvcnQgeyBpbXBvcnRGbiB9IGZyb20gJy4vc3Rvcnlib29rLXN0b3JpZXMuanMnO1xuXG5jb25zdCBnZXRQcm9qZWN0QW5ub3RhdGlvbnMgPSAoKSA9PlxuICBjb21wb3NlQ29uZmlncyhbcmVxdWlyZSgnL1VzZXJzL3RpYWdvYmVudG8vYXBhY2hlL2luY3ViYXRvci1raWUtdG9vbHMvbm9kZV9tb2R1bGVzLy5wbnBtL0BzdG9yeWJvb2srcmVhY3RANy40LjZfcmVhY3QtZG9tQDE3LjAuMl9yZWFjdEAxNy4wLjJfX3JlYWN0QDE3LjAuMl90eXBlc2NyaXB0QDUuNS4zL25vZGVfbW9kdWxlcy9Ac3Rvcnlib29rL3JlYWN0L3ByZXZpZXcuanMnKSxyZXF1aXJlKCcvVXNlcnMvdGlhZ29iZW50by9hcGFjaGUvaW5jdWJhdG9yLWtpZS10b29scy9ub2RlX21vZHVsZXMvLnBucG0vQHN0b3J5Ym9vaythZGRvbi1kb2NzQDcuNC42X0B0eXBlcytyZWFjdC1kb21AMTcuMC44X0B0eXBlcytyZWFjdEAxNy4wLjIxX2VuY29kaW5nQDAuMS4xM19yZWFjX29zbHV1bWZ0eGN0dmh1ZXp0a3ZhbzV2dWc0L25vZGVfbW9kdWxlcy9Ac3Rvcnlib29rL2FkZG9uLWRvY3MvcHJldmlldy5qcycpLHJlcXVpcmUoJy9Vc2Vycy90aWFnb2JlbnRvL2FwYWNoZS9pbmN1YmF0b3Ita2llLXRvb2xzL25vZGVfbW9kdWxlcy8ucG5wbS9Ac3Rvcnlib29rK2FkZG9uLWhpZ2hsaWdodEA3LjQuNi9ub2RlX21vZHVsZXMvQHN0b3J5Ym9vay9hZGRvbi1oaWdobGlnaHQvcHJldmlldy5qcycpLHJlcXVpcmUoJy9Vc2Vycy90aWFnb2JlbnRvL2FwYWNoZS9pbmN1YmF0b3Ita2llLXRvb2xzL25vZGVfbW9kdWxlcy8ucG5wbS9Ac3Rvcnlib29rK2FkZG9uLWxpbmtzQDcuNC42X3JlYWN0LWRvbUAxNy4wLjJfcmVhY3RAMTcuMC4yX19yZWFjdEAxNy4wLjIvbm9kZV9tb2R1bGVzL0BzdG9yeWJvb2svYWRkb24tbGlua3MvcHJldmlldy5qcycpLHJlcXVpcmUoJy9Vc2Vycy90aWFnb2JlbnRvL2FwYWNoZS9pbmN1YmF0b3Ita2llLXRvb2xzL25vZGVfbW9kdWxlcy8ucG5wbS9Ac3Rvcnlib29rK2FkZG9uLW1lYXN1cmVANy40LjZfQHR5cGVzK3JlYWN0LWRvbUAxNy4wLjhfQHR5cGVzK3JlYWN0QDE3LjAuMjFfcmVhY3QtZG9tQDE3LjAuMl9yZWFjdEAxNy4wLjJfX3JlYWN0QDE3LjAuMi9ub2RlX21vZHVsZXMvQHN0b3J5Ym9vay9hZGRvbi1tZWFzdXJlL3ByZXZpZXcuanMnKSxyZXF1aXJlKCcvVXNlcnMvdGlhZ29iZW50by9hcGFjaGUvaW5jdWJhdG9yLWtpZS10b29scy9ub2RlX21vZHVsZXMvLnBucG0vQHN0b3J5Ym9vaythZGRvbi1vdXRsaW5lQDcuNC42X0B0eXBlcytyZWFjdC1kb21AMTcuMC44X0B0eXBlcytyZWFjdEAxNy4wLjIxX3JlYWN0LWRvbUAxNy4wLjJfcmVhY3RAMTcuMC4yX19yZWFjdEAxNy4wLjIvbm9kZV9tb2R1bGVzL0BzdG9yeWJvb2svYWRkb24tb3V0bGluZS9wcmV2aWV3LmpzJykscmVxdWlyZSgnL1VzZXJzL3RpYWdvYmVudG8vYXBhY2hlL2luY3ViYXRvci1raWUtdG9vbHMvcGFja2FnZXMvYnBtbi1lZGl0b3IvLnN0b3J5Ym9vay9wcmV2aWV3LnRzeCcpLF0pO1xuXG5jb25zdCBjaGFubmVsID0gY3JlYXRlQnJvd3NlckNoYW5uZWwoeyBwYWdlOiAncHJldmlldycgfSk7XG5hZGRvbnMuc2V0Q2hhbm5lbChjaGFubmVsKTtcblxuaWYgKGdsb2JhbC5DT05GSUdfVFlQRSA9PT0gJ0RFVkVMT1BNRU5UJyl7XG4gIHdpbmRvdy5fX1NUT1JZQk9PS19TRVJWRVJfQ0hBTk5FTF9fID0gY2hhbm5lbDtcbn1cblxuY29uc3QgcHJldmlldyA9IG5ldyBQcmV2aWV3V2ViKCk7XG5cbndpbmRvdy5fX1NUT1JZQk9PS19QUkVWSUVXX18gPSBwcmV2aWV3O1xud2luZG93Ll9fU1RPUllCT09LX1NUT1JZX1NUT1JFX18gPSBwcmV2aWV3LnN0b3J5U3RvcmU7XG53aW5kb3cuX19TVE9SWUJPT0tfQURET05TX0NIQU5ORUxfXyA9IGNoYW5uZWw7XG53aW5kb3cuX19TVE9SWUJPT0tfQ0xJRU5UX0FQSV9fID0gbmV3IENsaWVudEFwaSh7IHN0b3J5U3RvcmU6IHByZXZpZXcuc3RvcnlTdG9yZSB9KTtcblxucHJldmlldy5pbml0aWFsaXplKHsgaW1wb3J0Rm4sIGdldFByb2plY3RBbm5vdGF0aW9ucyB9KTtcblxuaWYgKGltcG9ydC5tZXRhLndlYnBhY2tIb3QpIHtcbiAgaW1wb3J0Lm1ldGEud2VicGFja0hvdC5hY2NlcHQoJy4vc3Rvcnlib29rLXN0b3JpZXMuanMnLCAoKSA9PiB7XG4gICAgLy8gaW1wb3J0Rm4gaGFzIGNoYW5nZWQgc28gd2UgbmVlZCB0byBwYXRjaCB0aGUgbmV3IG9uZSBpblxuICAgIHByZXZpZXcub25TdG9yaWVzQ2hhbmdlZCh7IGltcG9ydEZuIH0pO1xuICB9KTtcblxuICBpbXBvcnQubWV0YS53ZWJwYWNrSG90LmFjY2VwdChbJy9Vc2Vycy90aWFnb2JlbnRvL2FwYWNoZS9pbmN1YmF0b3Ita2llLXRvb2xzL25vZGVfbW9kdWxlcy8ucG5wbS9Ac3Rvcnlib29rK3JlYWN0QDcuNC42X3JlYWN0LWRvbUAxNy4wLjJfcmVhY3RAMTcuMC4yX19yZWFjdEAxNy4wLjJfdHlwZXNjcmlwdEA1LjUuMy9ub2RlX21vZHVsZXMvQHN0b3J5Ym9vay9yZWFjdC9wcmV2aWV3LmpzJywnL1VzZXJzL3RpYWdvYmVudG8vYXBhY2hlL2luY3ViYXRvci1raWUtdG9vbHMvbm9kZV9tb2R1bGVzLy5wbnBtL0BzdG9yeWJvb2srYWRkb24tZG9jc0A3LjQuNl9AdHlwZXMrcmVhY3QtZG9tQDE3LjAuOF9AdHlwZXMrcmVhY3RAMTcuMC4yMV9lbmNvZGluZ0AwLjEuMTNfcmVhY19vc2x1dW1mdHhjdHZodWV6dGt2YW81dnVnNC9ub2RlX21vZHVsZXMvQHN0b3J5Ym9vay9hZGRvbi1kb2NzL3ByZXZpZXcuanMnLCcvVXNlcnMvdGlhZ29iZW50by9hcGFjaGUvaW5jdWJhdG9yLWtpZS10b29scy9ub2RlX21vZHVsZXMvLnBucG0vQHN0b3J5Ym9vaythZGRvbi1oaWdobGlnaHRANy40LjYvbm9kZV9tb2R1bGVzL0BzdG9yeWJvb2svYWRkb24taGlnaGxpZ2h0L3ByZXZpZXcuanMnLCcvVXNlcnMvdGlhZ29iZW50by9hcGFjaGUvaW5jdWJhdG9yLWtpZS10b29scy9ub2RlX21vZHVsZXMvLnBucG0vQHN0b3J5Ym9vaythZGRvbi1saW5rc0A3LjQuNl9yZWFjdC1kb21AMTcuMC4yX3JlYWN0QDE3LjAuMl9fcmVhY3RAMTcuMC4yL25vZGVfbW9kdWxlcy9Ac3Rvcnlib29rL2FkZG9uLWxpbmtzL3ByZXZpZXcuanMnLCcvVXNlcnMvdGlhZ29iZW50by9hcGFjaGUvaW5jdWJhdG9yLWtpZS10b29scy9ub2RlX21vZHVsZXMvLnBucG0vQHN0b3J5Ym9vaythZGRvbi1tZWFzdXJlQDcuNC42X0B0eXBlcytyZWFjdC1kb21AMTcuMC44X0B0eXBlcytyZWFjdEAxNy4wLjIxX3JlYWN0LWRvbUAxNy4wLjJfcmVhY3RAMTcuMC4yX19yZWFjdEAxNy4wLjIvbm9kZV9tb2R1bGVzL0BzdG9yeWJvb2svYWRkb24tbWVhc3VyZS9wcmV2aWV3LmpzJywnL1VzZXJzL3RpYWdvYmVudG8vYXBhY2hlL2luY3ViYXRvci1raWUtdG9vbHMvbm9kZV9tb2R1bGVzLy5wbnBtL0BzdG9yeWJvb2srYWRkb24tb3V0bGluZUA3LjQuNl9AdHlwZXMrcmVhY3QtZG9tQDE3LjAuOF9AdHlwZXMrcmVhY3RAMTcuMC4yMV9yZWFjdC1kb21AMTcuMC4yX3JlYWN0QDE3LjAuMl9fcmVhY3RAMTcuMC4yL25vZGVfbW9kdWxlcy9Ac3Rvcnlib29rL2FkZG9uLW91dGxpbmUvcHJldmlldy5qcycsJy9Vc2Vycy90aWFnb2JlbnRvL2FwYWNoZS9pbmN1YmF0b3Ita2llLXRvb2xzL3BhY2thZ2VzL2JwbW4tZWRpdG9yLy5zdG9yeWJvb2svcHJldmlldy50c3gnLF0sICgpID0+IHtcbiAgICAvLyBnZXRQcm9qZWN0QW5ub3RhdGlvbnMgaGFzIGNoYW5nZWQgc28gd2UgbmVlZCB0byBwYXRjaCB0aGUgbmV3IG9uZSBpblxuICAgIHByZXZpZXcub25HZXRQcm9qZWN0QW5ub3RhdGlvbnNDaGFuZ2VkKHsgZ2V0UHJvamVjdEFubm90YXRpb25zIH0pO1xuICB9KTtcbn0iLCJjb25zdCBwaXBlbGluZSA9ICh4KSA9PiB4KCk7XG5cbmNvbnN0IGltcG9ydGVycyA9IFtcbiAgYXN5bmMgKHBhdGgpID0+IHtcbiAgICBpZiAoIS9eXFwuW1xcXFwvXSg/OnN0b3JpZXMoPzpcXC8oPyFcXC4pKD86KD86KD8hKD86XnxcXC8pXFwuKS4pKj8pXFwvfFxcL3wkKSg/IVxcLikoPz0uKVteL10qP1xcLm1keCkkLy5leGVjKHBhdGgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICBcbiAgICBjb25zdCBwYXRoUmVtYWluZGVyID0gcGF0aC5zdWJzdHJpbmcoMTApO1xuICAgIHJldHVybiBpbXBvcnQoXG4gICAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcIltyZXF1ZXN0XVwiICovXG4gICAgICAvKiB3ZWJwYWNrSW5jbHVkZTogLyg/OlxcL3N0b3JpZXMoPzpcXC8oPyFcXC4pKD86KD86KD8hKD86XnxcXC8pXFwuKS4pKj8pXFwvfFxcL3wkKSg/IVxcLikoPz0uKVteL10qP1xcLm1keCkkLyAqL1xuICAgICAgJy4vc3Rvcmllcy8nICsgcGF0aFJlbWFpbmRlclxuICAgICk7XG4gIH1cbiAgLFxuICBhc3luYyAocGF0aCkgPT4ge1xuICAgIGlmICghL15cXC5bXFxcXC9dKD86c3Rvcmllcyg/OlxcLyg/IVxcLikoPzooPzooPyEoPzpefFxcLylcXC4pLikqPylcXC98XFwvfCQpKD8hXFwuKSg/PS4pW14vXSo/XFwuc3Rvcmllc1xcLihqc3xqc3h8bWpzfHRzfHRzeCkpJC8uZXhlYyhwYXRoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgXG4gICAgY29uc3QgcGF0aFJlbWFpbmRlciA9IHBhdGguc3Vic3RyaW5nKDEwKTtcbiAgICByZXR1cm4gaW1wb3J0KFxuICAgICAgLyogd2VicGFja0NodW5rTmFtZTogXCJbcmVxdWVzdF1cIiAqL1xuICAgICAgLyogd2VicGFja0luY2x1ZGU6IC8oPzpcXC9zdG9yaWVzKD86XFwvKD8hXFwuKSg/Oig/Oig/ISg/Ol58XFwvKVxcLikuKSo/KVxcL3xcXC98JCkoPyFcXC4pKD89LilbXi9dKj9cXC5zdG9yaWVzXFwuKGpzfGpzeHxtanN8dHN8dHN4KSkkLyAqL1xuICAgICAgJy4vc3Rvcmllcy8nICsgcGF0aFJlbWFpbmRlclxuICAgICk7XG4gIH1cbiAgXG5dO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW1wb3J0Rm4ocGF0aCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGltcG9ydGVycy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IG1vZHVsZUV4cG9ydHMgPSBhd2FpdCBwaXBlbGluZSgoKSA9PiBpbXBvcnRlcnNbaV0ocGF0aCkpO1xuICAgIGlmIChtb2R1bGVFeHBvcnRzKSB7XG4gICAgICByZXR1cm4gbW9kdWxlRXhwb3J0cztcbiAgICB9XG4gIH1cbn0iLCJ2YXIgbWFwID0ge1xuXHRcIi4vZmVhdHVyZXMvQ3VzdG9tVGFza3MvQ3VzdG9tVGFza3MubWR4XCI6IFtcblx0XHRcIi4vc3Rvcmllcy9mZWF0dXJlcy9DdXN0b21UYXNrcy9DdXN0b21UYXNrcy5tZHhcIixcblx0XHRcInZlbmRvcnMtbm9kZV9tb2R1bGVzX3BucG1fcmVhY3RmbG93X2JhY2tncm91bmRfMTFfM182X190eXBlc19yZWFjdF8xN18wXzIxX2ltbWVyXzEwXzBfM19wYXRjaC0zMWRhYmNcIixcblx0XHRcInZlbmRvcnMtbm9kZV9tb2R1bGVzX3BucG1fc3Rvcnlib29rX2NvbXBvbmVudHNfN180XzZfX3R5cGVzX3JlYWN0LWRvbV8xN18wXzhfX3R5cGVzX3JlYWN0XzE3Xy1iZDNlZWFcIixcblx0XHRcInZlbmRvcnMtbm9kZV9tb2R1bGVzX3BucG1fc3Rvcnlib29rX2Jsb2Nrc183XzZfMTNfX3R5cGVzX3JlYWN0LWRvbV8xN18wXzhfX3R5cGVzX3JlYWN0XzE3XzBfMi1mZTQ0ODNcIixcblx0XHRcIm1pc2MtZW1wdHktRW1wdHktc3Rvcmllc1wiLFxuXHRcdFwiZmVhdHVyZXMtQ3VzdG9tVGFza3MtQ3VzdG9tVGFza3MtbWR4XCJcblx0XSxcblx0XCIuL2ZlYXR1cmVzL1Byb2Nlc3NWYXJpYWJsZXMvUHJvY2Vzc1ZhcmlhYmxlcy5tZHhcIjogW1xuXHRcdFwiLi9zdG9yaWVzL2ZlYXR1cmVzL1Byb2Nlc3NWYXJpYWJsZXMvUHJvY2Vzc1ZhcmlhYmxlcy5tZHhcIixcblx0XHRcInZlbmRvcnMtbm9kZV9tb2R1bGVzX3BucG1fc3Rvcnlib29rX2NvbXBvbmVudHNfN180XzZfX3R5cGVzX3JlYWN0LWRvbV8xN18wXzhfX3R5cGVzX3JlYWN0XzE3Xy1iZDNlZWFcIixcblx0XHRcInZlbmRvcnMtbm9kZV9tb2R1bGVzX3BucG1fc3Rvcnlib29rX2Jsb2Nrc183XzZfMTNfX3R5cGVzX3JlYWN0LWRvbV8xN18wXzhfX3R5cGVzX3JlYWN0XzE3XzBfMi1mZTQ0ODNcIixcblx0XHRcImZlYXR1cmVzLVByb2Nlc3NWYXJpYWJsZXMtUHJvY2Vzc1ZhcmlhYmxlcy1tZHhcIlxuXHRdLFxuXHRcIi4vbWlzYy9lbXB0eS9FbXB0eS5tZHhcIjogW1xuXHRcdFwiLi9zdG9yaWVzL21pc2MvZW1wdHkvRW1wdHkubWR4XCIsXG5cdFx0XCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19wbnBtX3JlYWN0Zmxvd19iYWNrZ3JvdW5kXzExXzNfNl9fdHlwZXNfcmVhY3RfMTdfMF8yMV9pbW1lcl8xMF8wXzNfcGF0Y2gtMzFkYWJjXCIsXG5cdFx0XCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19wbnBtX3N0b3J5Ym9va19jb21wb25lbnRzXzdfNF82X190eXBlc19yZWFjdC1kb21fMTdfMF84X190eXBlc19yZWFjdF8xN18tYmQzZWVhXCIsXG5cdFx0XCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19wbnBtX3N0b3J5Ym9va19ibG9ja3NfN182XzEzX190eXBlc19yZWFjdC1kb21fMTdfMF84X190eXBlc19yZWFjdF8xN18wXzItZmU0NDgzXCIsXG5cdFx0XCJtaXNjLWVtcHR5LUVtcHR5LXN0b3JpZXNcIixcblx0XHRcIm1pc2MtZW1wdHktRW1wdHktbWR4XCJcblx0XSxcblx0XCIuL3JlZmVyZW5jZS9PdmVydmlldy5tZHhcIjogW1xuXHRcdFwiLi9zdG9yaWVzL3JlZmVyZW5jZS9PdmVydmlldy5tZHhcIixcblx0XHRcInZlbmRvcnMtbm9kZV9tb2R1bGVzX3BucG1fc3Rvcnlib29rX2NvbXBvbmVudHNfN180XzZfX3R5cGVzX3JlYWN0LWRvbV8xN18wXzhfX3R5cGVzX3JlYWN0XzE3Xy1iZDNlZWFcIixcblx0XHRcInZlbmRvcnMtbm9kZV9tb2R1bGVzX3BucG1fc3Rvcnlib29rX2Jsb2Nrc183XzZfMTNfX3R5cGVzX3JlYWN0LWRvbV8xN18wXzhfX3R5cGVzX3JlYWN0XzE3XzBfMi1mZTQ0ODNcIixcblx0XHRcInJlZmVyZW5jZS1PdmVydmlldy1tZHhcIlxuXHRdXG59O1xuZnVuY3Rpb24gd2VicGFja0FzeW5jQ29udGV4dChyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG5cdFx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0XHR0aHJvdyBlO1xuXHRcdH0pO1xuXHR9XG5cblx0dmFyIGlkcyA9IG1hcFtyZXFdLCBpZCA9IGlkc1swXTtcblx0cmV0dXJuIFByb21pc2UuYWxsKGlkcy5zbGljZSgxKS5tYXAoX193ZWJwYWNrX3JlcXVpcmVfXy5lKSkudGhlbigoKSA9PiB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xuXHR9KTtcbn1cbndlYnBhY2tBc3luY0NvbnRleHQua2V5cyA9ICgpID0+IChPYmplY3Qua2V5cyhtYXApKTtcbndlYnBhY2tBc3luY0NvbnRleHQuaWQgPSBcIi4vc3RvcmllcyBsYXp5IHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qJCBpbmNsdWRlOiAoPzpcXFxcL3N0b3JpZXMoPzpcXFxcLyg/JTIxXFxcXC4pKD86KD86KD8lMjEoPzpeJTdDXFxcXC8pXFxcXC4pLikqPylcXFxcLyU3Q1xcXFwvJTdDJCkoPyUyMVxcXFwuKSg/PS4pW14vXSo/XFxcXC5tZHgpJFwiO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQXN5bmNDb250ZXh0OyIsInZhciBtYXAgPSB7XG5cdFwiLi9kZXYvUGxheWdyb3VuZC5zdG9yaWVzXCI6IFtcblx0XHRcIi4vc3Rvcmllcy9kZXYvUGxheWdyb3VuZC5zdG9yaWVzLnRzeFwiLFxuXHRcdFwidmVuZG9ycy1ub2RlX21vZHVsZXNfcG5wbV9yZWFjdGZsb3dfYmFja2dyb3VuZF8xMV8zXzZfX3R5cGVzX3JlYWN0XzE3XzBfMjFfaW1tZXJfMTBfMF8zX3BhdGNoLTMxZGFiY1wiLFxuXHRcdFwidmVuZG9ycy1ub2RlX21vZHVsZXNfcG5wbV9wYXR0ZXJuZmx5X3JlYWN0LWNvcmVfNV80XzFfcmVhY3QtZG9tXzE3XzBfMl9yZWFjdF8xN18wXzJfX3JlYWN0XzE3LTAzNmE3MlwiLFxuXHRcdFwibWlzYy1lbXB0eS1FbXB0eS1zdG9yaWVzXCIsXG5cdFx0XCJkZXYtUGxheWdyb3VuZC1zdG9yaWVzXCJcblx0XSxcblx0XCIuL2Rldi9QbGF5Z3JvdW5kLnN0b3JpZXMudHN4XCI6IFtcblx0XHRcIi4vc3Rvcmllcy9kZXYvUGxheWdyb3VuZC5zdG9yaWVzLnRzeFwiLFxuXHRcdFwidmVuZG9ycy1ub2RlX21vZHVsZXNfcG5wbV9yZWFjdGZsb3dfYmFja2dyb3VuZF8xMV8zXzZfX3R5cGVzX3JlYWN0XzE3XzBfMjFfaW1tZXJfMTBfMF8zX3BhdGNoLTMxZGFiY1wiLFxuXHRcdFwidmVuZG9ycy1ub2RlX21vZHVsZXNfcG5wbV9wYXR0ZXJuZmx5X3JlYWN0LWNvcmVfNV80XzFfcmVhY3QtZG9tXzE3XzBfMl9yZWFjdF8xN18wXzJfX3JlYWN0XzE3LTAzNmE3MlwiLFxuXHRcdFwibWlzYy1lbXB0eS1FbXB0eS1zdG9yaWVzXCIsXG5cdFx0XCJkZXYtUGxheWdyb3VuZC1zdG9yaWVzXCJcblx0XSxcblx0XCIuL2ZlYXR1cmVzL0N1c3RvbVRhc2tzL0N1c3RvbVRhc2tzLnN0b3JpZXNcIjogW1xuXHRcdFwiLi9zdG9yaWVzL2ZlYXR1cmVzL0N1c3RvbVRhc2tzL0N1c3RvbVRhc2tzLnN0b3JpZXMudHN4XCIsXG5cdFx0XCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19wbnBtX3JlYWN0Zmxvd19iYWNrZ3JvdW5kXzExXzNfNl9fdHlwZXNfcmVhY3RfMTdfMF8yMV9pbW1lcl8xMF8wXzNfcGF0Y2gtMzFkYWJjXCIsXG5cdFx0XCJtaXNjLWVtcHR5LUVtcHR5LXN0b3JpZXNcIixcblx0XHRcImZlYXR1cmVzLUN1c3RvbVRhc2tzLUN1c3RvbVRhc2tzLXN0b3JpZXNcIlxuXHRdLFxuXHRcIi4vZmVhdHVyZXMvQ3VzdG9tVGFza3MvQ3VzdG9tVGFza3Muc3Rvcmllcy50c3hcIjogW1xuXHRcdFwiLi9zdG9yaWVzL2ZlYXR1cmVzL0N1c3RvbVRhc2tzL0N1c3RvbVRhc2tzLnN0b3JpZXMudHN4XCIsXG5cdFx0XCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19wbnBtX3JlYWN0Zmxvd19iYWNrZ3JvdW5kXzExXzNfNl9fdHlwZXNfcmVhY3RfMTdfMF8yMV9pbW1lcl8xMF8wXzNfcGF0Y2gtMzFkYWJjXCIsXG5cdFx0XCJtaXNjLWVtcHR5LUVtcHR5LXN0b3JpZXNcIixcblx0XHRcImZlYXR1cmVzLUN1c3RvbVRhc2tzLUN1c3RvbVRhc2tzLXN0b3JpZXNcIlxuXHRdLFxuXHRcIi4vbWlzYy9lbXB0eS9FbXB0eS5zdG9yaWVzXCI6IFtcblx0XHRcIi4vc3Rvcmllcy9taXNjL2VtcHR5L0VtcHR5LnN0b3JpZXMudHN4XCIsXG5cdFx0XCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19wbnBtX3JlYWN0Zmxvd19iYWNrZ3JvdW5kXzExXzNfNl9fdHlwZXNfcmVhY3RfMTdfMF8yMV9pbW1lcl8xMF8wXzNfcGF0Y2gtMzFkYWJjXCIsXG5cdFx0XCJtaXNjLWVtcHR5LUVtcHR5LXN0b3JpZXNcIlxuXHRdLFxuXHRcIi4vbWlzYy9lbXB0eS9FbXB0eS5zdG9yaWVzLnRzeFwiOiBbXG5cdFx0XCIuL3N0b3JpZXMvbWlzYy9lbXB0eS9FbXB0eS5zdG9yaWVzLnRzeFwiLFxuXHRcdFwidmVuZG9ycy1ub2RlX21vZHVsZXNfcG5wbV9yZWFjdGZsb3dfYmFja2dyb3VuZF8xMV8zXzZfX3R5cGVzX3JlYWN0XzE3XzBfMjFfaW1tZXJfMTBfMF8zX3BhdGNoLTMxZGFiY1wiLFxuXHRcdFwibWlzYy1lbXB0eS1FbXB0eS1zdG9yaWVzXCJcblx0XVxufTtcbmZ1bmN0aW9uIHdlYnBhY2tBc3luY0NvbnRleHQocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuXHRcdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdFx0dGhyb3cgZTtcblx0XHR9KTtcblx0fVxuXG5cdHZhciBpZHMgPSBtYXBbcmVxXSwgaWQgPSBpZHNbMF07XG5cdHJldHVybiBQcm9taXNlLmFsbChpZHMuc2xpY2UoMSkubWFwKF9fd2VicGFja19yZXF1aXJlX18uZSkpLnRoZW4oKCkgPT4ge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcblx0fSk7XG59XG53ZWJwYWNrQXN5bmNDb250ZXh0LmtleXMgPSAoKSA9PiAoT2JqZWN0LmtleXMobWFwKSk7XG53ZWJwYWNrQXN5bmNDb250ZXh0LmlkID0gXCIuL3N0b3JpZXMgbGF6eSByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKiQgaW5jbHVkZTogKD86XFxcXC9zdG9yaWVzKD86XFxcXC8oPyUyMVxcXFwuKSg/Oig/Oig/JTIxKD86XiU3Q1xcXFwvKVxcXFwuKS4pKj8pXFxcXC8lN0NcXFxcLyU3QyQpKD8lMjFcXFxcLikoPz0uKVteL10qP1xcXFwuc3Rvcmllc1xcXFwuKGpzJTdDanN4JTdDbWpzJTdDdHMlN0N0c3gpKSRcIjtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0FzeW5jQ29udGV4dDsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fU1RPUllCT09LX01PRFVMRV9DSEFOTkVMU19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19TVE9SWUJPT0tfTU9EVUxFX0NMSUVOVF9MT0dHRVJfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fU1RPUllCT09LX01PRFVMRV9DT1JFX0VWRU5UU19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19TVE9SWUJPT0tfTU9EVUxFX0dMT0JBTF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19TVE9SWUJPT0tfTU9EVUxFX1BSRVZJRVdfQVBJX187Il0sIm5hbWVzIjpbInByZXZpZXciLCJwYXJhbWV0ZXJzIiwiYWN0aW9ucyIsImFyZ1R5cGVzUmVnZXgiLCJjb250cm9scyIsIm1hdGNoZXJzIiwiY29sb3IiLCJkYXRlIiwib3B0aW9ucyIsInN0b3J5U29ydCIsIm9yZGVyIiwiZGVjb3JhdG9ycyIsIlN0b3J5IiwiX2pzeCIsInN0eWxlIiwicG9zaXRpb24iLCJ3aWR0aCIsImhlaWdodCIsInRvcCIsImxlZnQiLCJjaGlsZHJlbiJdLCJzb3VyY2VSb290IjoiIn0=