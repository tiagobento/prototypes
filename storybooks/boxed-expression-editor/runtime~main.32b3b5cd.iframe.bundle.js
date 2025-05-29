/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd options */
/******/ 	(() => {
/******/ 		__webpack_require__.amdO = {};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + {"vendors-node_modules_pnpm_storybook_components_7_4_6__types_react-dom_17_0_8__types_react_17_-bd3eea":"cfca052f","vendors-node_modules_pnpm_storybook_blocks_7_4_6__types_react-dom_17_0_8__types_react_17_0_21-627bca":"f993de51","boxedExpressions-BoxedExpressions-mdx":"491cb2cb","vendors-node_modules_pnpm_antlr4_4_13_0_node_modules_antlr4_dist_antlr4_web_mjs-node_modules_-ddfcf8":"085d7d99","src_selection_BeeTableSelectionContext_tsx":"d3225d68","stories_boxedExpressionStoriesWrapper_tsx":"d11d9eaf","boxedExpressions-Conditional-Conditional-stories":"51cf02a6","boxedExpressions-Conditional-Conditional-mdx":"e1e412eb","boxedExpressions-Context-Context-stories":"e2a47a78","boxedExpressions-Context-Context-mdx":"4b9164df","boxedExpressions-DecisionTable-DecisionTable-stories":"7fdea3d1","boxedExpressions-DecisionTable-DecisionTable-mdx":"d38380e3","boxedExpressions-Every-Every-mdx":"074cdd5a","boxedExpressions-Filter-Filter-mdx":"15604618","boxedExpressions-For-For-mdx":"41b50540","boxedExpressions-Function-Function-mdx":"65fb23f5","boxedExpressions-Invocation-Invocation-stories":"966c5fe1","boxedExpressions-Invocation-Invocation-mdx":"7aa81121","boxedExpressions-List-List-mdx":"d3a606f1","boxedExpressions-Literal-Literal-mdx":"766db705","stories_boxedExpressions_Relation_Relation_stories_tsx":"f2efb9dc","boxedExpressions-Relation-Relation-mdx":"6350a216","boxedExpressions-Some-Some-mdx":"70b7db62","features-Resizing-Resizing-stories":"f2227ecc","features-Resizing-Resizing-mdx":"386e7f05","features-Selection-Selection-stories":"c79e650c","features-Selection-Selection-mdx":"11d6e4c8","misc-Empty-EmptyExpression-mdx":"40217b4a","misc-StandaloneTable-StandaloneTable-mdx":"316254bd","useCases-CanDrive-CanDrive-mdx":"444b6314","useCases-FindEmployees-FindEmployees-stories":"fe81684e","useCases-FindEmployees-FindEmployees-mdx":"5ed9facc","useCases-LoanOriginations-ApplicationRiskScore-ApplicationRiskScore-stories":"5dddf782","useCases-LoanOriginations-ApplicationRiskScore-ApplicationRiskScore-mdx":"37b54d9f","useCases-LoanOriginations-BureauStrategyDecisionService-BureauCallType-BurauCallType-mdx":"fe3abf45","useCases-LoanOriginations-BureauStrategyDecisionService-BureauStrategyDecisionService-mdx":"2a4fa335","useCases-LoanOriginations-BureauStrategyDecisionService-Eligibility-Eligibility-mdx":"2fa7d93d","useCases-LoanOriginations-BureauStrategyDecisionService-PreBureauAffordability-PreBureauAffordability-mdx":"6860b524","useCases-LoanOriginations-BureauStrategyDecisionService-PreBureauRiskCategory-PreBureauRiskCategory-mdx":"5b106c92","useCases-LoanOriginations-BureauStrategyDecisionService-Strategy-Strategy-mdx":"02163f7a","useCases-LoanOriginations-Functions-AffordabilityCalculation-AffordabilityCalculation-mdx":"f5ca1d30","useCases-LoanOriginations-Functions-InstallmentCalculation-InstallmentCalculation-mdx":"70e9c645","useCases-LoanOriginations-LoanOriginations-mdx":"2a5a7a88","useCases-LoanOriginations-RequiredMonthlyInstallment-RequiredMonthlyInstallment-mdx":"10413c3f","useCases-LoanOriginations-RoutingDecisionService-PostBureauAffordability-PostBureauAffordability-mdx":"7f7275b3","useCases-LoanOriginations-RoutingDecisionService-PostBureauRiskCategory-PostBureauRiskCategory-stories":"eba5e2b1","useCases-LoanOriginations-RoutingDecisionService-PostBureauRiskCategory-PostBureauRiskCategory-mdx":"6131c4e4","useCases-LoanOriginations-RoutingDecisionService-Routing-Routing-mdx":"9ff65774","useCases-LoanOriginations-RoutingDecisionService-RoutingDecisionService-mdx":"02c2241d","boxedExpressions-Every-Every-stories":"13e66103","boxedExpressions-Filter-Filter-stories":"1c6f3eae","boxedExpressions-For-For-stories":"a70f5332","boxedExpressions-Function-Function-stories":"1a739356","boxedExpressions-List-List-stories":"10645a37","boxedExpressions-Literal-Literal-stories":"3af08bdd","boxedExpressions-Relation-Relation-stories":"7fd0ce1f","boxedExpressions-Some-Some-stories":"22c2b291","dev-WebApp-stories":"1c055ad2","misc-Empty-EmptyExpression-stories":"ab168651","misc-StandaloneTable-StandaloneTable-stories":"09c920a6","useCases-CanDrive-CanDrive-stories":"4c7bd68c","useCases-LoanOriginations-BureauStrategyDecisionService-BureauCallType-BureauCallType-stories":"4f33cf9e","useCases-LoanOriginations-BureauStrategyDecisionService-Eligibility-Eligibility-stories":"86fa956a","useCases-LoanOriginations-BureauStrategyDecisionService-PreBureauAffordability-PreBureauAffordability-stories":"38783f6a","useCases-LoanOriginations-BureauStrategyDecisionService-PreBureauRiskCategory-PreBureauRiskCategory-stories":"1e473419","useCases-LoanOriginations-BureauStrategyDecisionService-Strategy-Strategy-stories":"fd054231","useCases-LoanOriginations-Functions-AffordabilityCalculation-AffordabilityCalculation-stories":"253ddb3e","useCases-LoanOriginations-Functions-InstallmentCalculation-InstallmentCalculation-stories":"a6e67687","useCases-LoanOriginations-RequiredMonthlyInstallment-RequiredMonthlyInstallment-stories":"69c3c681","useCases-LoanOriginations-RoutingDecisionService-PostBureauAffordability-PostBureauAffordability-stories":"0b1dfe54","useCases-LoanOriginations-RoutingDecisionService-Routing-Routing-stories":"860adccb","vendors-node_modules_pnpm_storybook_addon-docs_7_4_6__types_react-dom_17_0_8__types_react_17_-c49cc4":"80c1aa07","vendors-node_modules_pnpm_react-colorful_5_6_1_react-dom_17_0_2_react_17_0_2__react_17_0_2_no-4be194":"813b34ad","node_modules_pnpm_storybook_blocks_7_4_6__types_react-dom_17_0_8__types_react_17_0_21_react-d-bd1cd3":"74358b1e","node_modules_pnpm_storybook_components_7_4_6__types_react-dom_17_0_8__types_react_17_0_21_rea-991940":"2604bd9b","vendors-node_modules_pnpm_storybook_components_7_4_6__types_react-dom_17_0_8__types_react_17_-102fa9":"4a197ea7","node_modules_pnpm_storybook_components_7_4_6__types_react-dom_17_0_8__types_react_17_0_21_rea-f11c07":"60f46a70","vendors-node_modules_pnpm_storybook_components_7_4_6__types_react-dom_17_0_8__types_react_17_-ff4257":"1f48b960","vendors-node_modules_pnpm_storybook_components_7_4_6__types_react-dom_17_0_8__types_react_17_-45a5a4":"4558f3b0","node_modules_pnpm_mdx-js_react_2_3_0_react_17_0_2_node_modules_mdx-js_react_index_js":"6fd8293e","node_modules_pnpm_storybook_blocks_7_4_6__types_react-dom_17_0_8__types_react_17_0_21_encodin-e12aeb":"077c473d"}[chunkId] + ".iframe.bundle.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "@kie-tools/boxed-expression-component:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"runtime~main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if("runtime~main" != chunkId) {
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk_kie_tools_boxed_expression_component"] = self["webpackChunk_kie_tools_boxed_expression_component"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVudGltZX5tYWluLjMyYjNiNWNkLmlmcmFtZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7OztVQUFBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQzVCQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLCtCQUErQix3Q0FBd0M7V0FDdkU7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQkFBaUIscUJBQXFCO1dBQ3RDO1dBQ0E7V0FDQSxrQkFBa0IscUJBQXFCO1dBQ3ZDO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQzNCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Q7V0FDdEQsc0NBQXNDLGlFQUFpRTtXQUN2RztXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFQUFFO1dBQ0Y7Ozs7O1dDUkE7V0FDQTtXQUNBO1dBQ0EsOEJBQThCLDZxTUFBNnFNO1dBQzNzTTs7Ozs7V0NKQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHVCQUF1Qiw0QkFBNEI7V0FDbkQ7V0FDQTtXQUNBO1dBQ0EsaUJBQWlCLG9CQUFvQjtXQUNyQztXQUNBLG1HQUFtRyxZQUFZO1dBQy9HO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsbUVBQW1FLGlDQUFpQztXQUNwRztXQUNBO1dBQ0E7V0FDQTs7Ozs7V0N6Q0E7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDSkE7Ozs7O1dDQUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQzs7V0FFakM7V0FDQTtXQUNBO1dBQ0EsS0FBSztXQUNMO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNO1dBQ047V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztXQ3JGQSIsInNvdXJjZXMiOlsid2VicGFjazovL0BraWUtdG9vbHMvYm94ZWQtZXhwcmVzc2lvbi1jb21wb25lbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQGtpZS10b29scy9ib3hlZC1leHByZXNzaW9uLWNvbXBvbmVudC93ZWJwYWNrL3J1bnRpbWUvYW1kIG9wdGlvbnMiLCJ3ZWJwYWNrOi8vQGtpZS10b29scy9ib3hlZC1leHByZXNzaW9uLWNvbXBvbmVudC93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL0BraWUtdG9vbHMvYm94ZWQtZXhwcmVzc2lvbi1jb21wb25lbnQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vQGtpZS10b29scy9ib3hlZC1leHByZXNzaW9uLWNvbXBvbmVudC93ZWJwYWNrL3J1bnRpbWUvY3JlYXRlIGZha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9Aa2llLXRvb2xzL2JveGVkLWV4cHJlc3Npb24tY29tcG9uZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9Aa2llLXRvb2xzL2JveGVkLWV4cHJlc3Npb24tY29tcG9uZW50L3dlYnBhY2svcnVudGltZS9lbnN1cmUgY2h1bmsiLCJ3ZWJwYWNrOi8vQGtpZS10b29scy9ib3hlZC1leHByZXNzaW9uLWNvbXBvbmVudC93ZWJwYWNrL3J1bnRpbWUvZ2V0IGphdmFzY3JpcHQgY2h1bmsgZmlsZW5hbWUiLCJ3ZWJwYWNrOi8vQGtpZS10b29scy9ib3hlZC1leHByZXNzaW9uLWNvbXBvbmVudC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL0BraWUtdG9vbHMvYm94ZWQtZXhwcmVzc2lvbi1jb21wb25lbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9Aa2llLXRvb2xzL2JveGVkLWV4cHJlc3Npb24tY29tcG9uZW50L3dlYnBhY2svcnVudGltZS9sb2FkIHNjcmlwdCIsIndlYnBhY2s6Ly9Aa2llLXRvb2xzL2JveGVkLWV4cHJlc3Npb24tY29tcG9uZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vQGtpZS10b29scy9ib3hlZC1leHByZXNzaW9uLWNvbXBvbmVudC93ZWJwYWNrL3J1bnRpbWUvbm9kZSBtb2R1bGUgZGVjb3JhdG9yIiwid2VicGFjazovL0BraWUtdG9vbHMvYm94ZWQtZXhwcmVzc2lvbi1jb21wb25lbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vQGtpZS10b29scy9ib3hlZC1leHByZXNzaW9uLWNvbXBvbmVudC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9Aa2llLXRvb2xzL2JveGVkLWV4cHJlc3Npb24tY29tcG9uZW50L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9Aa2llLXRvb2xzL2JveGVkLWV4cHJlc3Npb24tY29tcG9uZW50L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vQGtpZS10b29scy9ib3hlZC1leHByZXNzaW9uLWNvbXBvbmVudC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vQGtpZS10b29scy9ib3hlZC1leHByZXNzaW9uLWNvbXBvbmVudC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0bG9hZGVkOiBmYWxzZSxcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG5cdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIl9fd2VicGFja19yZXF1aXJlX18uYW1kTyA9IHt9OyIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwidmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mID8gKG9iaikgPT4gKE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmopKSA6IChvYmopID0+IChvYmouX19wcm90b19fKTtcbnZhciBsZWFmUHJvdG90eXBlcztcbi8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuLy8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4vLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbi8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuLy8gbW9kZSAmIDE2OiByZXR1cm4gdmFsdWUgd2hlbiBpdCdzIFByb21pc2UtbGlrZVxuLy8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuX193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcblx0aWYobW9kZSAmIDEpIHZhbHVlID0gdGhpcyh2YWx1ZSk7XG5cdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG5cdGlmKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUpIHtcblx0XHRpZigobW9kZSAmIDQpICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcblx0XHRpZigobW9kZSAmIDE2KSAmJiB0eXBlb2YgdmFsdWUudGhlbiA9PT0gJ2Z1bmN0aW9uJykgcmV0dXJuIHZhbHVlO1xuXHR9XG5cdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG5cdHZhciBkZWYgPSB7fTtcblx0bGVhZlByb3RvdHlwZXMgPSBsZWFmUHJvdG90eXBlcyB8fCBbbnVsbCwgZ2V0UHJvdG8oe30pLCBnZXRQcm90byhbXSksIGdldFByb3RvKGdldFByb3RvKV07XG5cdGZvcih2YXIgY3VycmVudCA9IG1vZGUgJiAyICYmIHZhbHVlOyB0eXBlb2YgY3VycmVudCA9PSAnb2JqZWN0JyAmJiAhfmxlYWZQcm90b3R5cGVzLmluZGV4T2YoY3VycmVudCk7IGN1cnJlbnQgPSBnZXRQcm90byhjdXJyZW50KSkge1xuXHRcdE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGN1cnJlbnQpLmZvckVhY2goKGtleSkgPT4gKGRlZltrZXldID0gKCkgPT4gKHZhbHVlW2tleV0pKSk7XG5cdH1cblx0ZGVmWydkZWZhdWx0J10gPSAoKSA9PiAodmFsdWUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGRlZik7XG5cdHJldHVybiBucztcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5mID0ge307XG4vLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4vLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18uZSA9IChjaHVua0lkKSA9PiB7XG5cdHJldHVybiBQcm9taXNlLmFsbChPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLmYpLnJlZHVjZSgocHJvbWlzZXMsIGtleSkgPT4ge1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18uZltrZXldKGNodW5rSWQsIHByb21pc2VzKTtcblx0XHRyZXR1cm4gcHJvbWlzZXM7XG5cdH0sIFtdKSk7XG59OyIsIi8vIFRoaXMgZnVuY3Rpb24gYWxsb3cgdG8gcmVmZXJlbmNlIGFzeW5jIGNodW5rc1xuX193ZWJwYWNrX3JlcXVpcmVfXy51ID0gKGNodW5rSWQpID0+IHtcblx0Ly8gcmV0dXJuIHVybCBmb3IgZmlsZW5hbWVzIGJhc2VkIG9uIHRlbXBsYXRlXG5cdHJldHVybiBcIlwiICsgY2h1bmtJZCArIFwiLlwiICsge1widmVuZG9ycy1ub2RlX21vZHVsZXNfcG5wbV9zdG9yeWJvb2tfY29tcG9uZW50c183XzRfNl9fdHlwZXNfcmVhY3QtZG9tXzE3XzBfOF9fdHlwZXNfcmVhY3RfMTdfLWJkM2VlYVwiOlwiY2ZjYTA1MmZcIixcInZlbmRvcnMtbm9kZV9tb2R1bGVzX3BucG1fc3Rvcnlib29rX2Jsb2Nrc183XzRfNl9fdHlwZXNfcmVhY3QtZG9tXzE3XzBfOF9fdHlwZXNfcmVhY3RfMTdfMF8yMS02MjdiY2FcIjpcImY5OTNkZTUxXCIsXCJib3hlZEV4cHJlc3Npb25zLUJveGVkRXhwcmVzc2lvbnMtbWR4XCI6XCI0OTFjYjJjYlwiLFwidmVuZG9ycy1ub2RlX21vZHVsZXNfcG5wbV9hbnRscjRfNF8xM18wX25vZGVfbW9kdWxlc19hbnRscjRfZGlzdF9hbnRscjRfd2ViX21qcy1ub2RlX21vZHVsZXNfLWRkZmNmOFwiOlwiMDg1ZDdkOTlcIixcInNyY19zZWxlY3Rpb25fQmVlVGFibGVTZWxlY3Rpb25Db250ZXh0X3RzeFwiOlwiZDMyMjVkNjhcIixcInN0b3JpZXNfYm94ZWRFeHByZXNzaW9uU3Rvcmllc1dyYXBwZXJfdHN4XCI6XCJkMTFkOWVhZlwiLFwiYm94ZWRFeHByZXNzaW9ucy1Db25kaXRpb25hbC1Db25kaXRpb25hbC1zdG9yaWVzXCI6XCI1MWNmMDJhNlwiLFwiYm94ZWRFeHByZXNzaW9ucy1Db25kaXRpb25hbC1Db25kaXRpb25hbC1tZHhcIjpcImUxZTQxMmViXCIsXCJib3hlZEV4cHJlc3Npb25zLUNvbnRleHQtQ29udGV4dC1zdG9yaWVzXCI6XCJlMmE0N2E3OFwiLFwiYm94ZWRFeHByZXNzaW9ucy1Db250ZXh0LUNvbnRleHQtbWR4XCI6XCI0YjkxNjRkZlwiLFwiYm94ZWRFeHByZXNzaW9ucy1EZWNpc2lvblRhYmxlLURlY2lzaW9uVGFibGUtc3Rvcmllc1wiOlwiN2ZkZWEzZDFcIixcImJveGVkRXhwcmVzc2lvbnMtRGVjaXNpb25UYWJsZS1EZWNpc2lvblRhYmxlLW1keFwiOlwiZDM4MzgwZTNcIixcImJveGVkRXhwcmVzc2lvbnMtRXZlcnktRXZlcnktbWR4XCI6XCIwNzRjZGQ1YVwiLFwiYm94ZWRFeHByZXNzaW9ucy1GaWx0ZXItRmlsdGVyLW1keFwiOlwiMTU2MDQ2MThcIixcImJveGVkRXhwcmVzc2lvbnMtRm9yLUZvci1tZHhcIjpcIjQxYjUwNTQwXCIsXCJib3hlZEV4cHJlc3Npb25zLUZ1bmN0aW9uLUZ1bmN0aW9uLW1keFwiOlwiNjVmYjIzZjVcIixcImJveGVkRXhwcmVzc2lvbnMtSW52b2NhdGlvbi1JbnZvY2F0aW9uLXN0b3JpZXNcIjpcIjk2NmM1ZmUxXCIsXCJib3hlZEV4cHJlc3Npb25zLUludm9jYXRpb24tSW52b2NhdGlvbi1tZHhcIjpcIjdhYTgxMTIxXCIsXCJib3hlZEV4cHJlc3Npb25zLUxpc3QtTGlzdC1tZHhcIjpcImQzYTYwNmYxXCIsXCJib3hlZEV4cHJlc3Npb25zLUxpdGVyYWwtTGl0ZXJhbC1tZHhcIjpcIjc2NmRiNzA1XCIsXCJzdG9yaWVzX2JveGVkRXhwcmVzc2lvbnNfUmVsYXRpb25fUmVsYXRpb25fc3Rvcmllc190c3hcIjpcImYyZWZiOWRjXCIsXCJib3hlZEV4cHJlc3Npb25zLVJlbGF0aW9uLVJlbGF0aW9uLW1keFwiOlwiNjM1MGEyMTZcIixcImJveGVkRXhwcmVzc2lvbnMtU29tZS1Tb21lLW1keFwiOlwiNzBiN2RiNjJcIixcImZlYXR1cmVzLVJlc2l6aW5nLVJlc2l6aW5nLXN0b3JpZXNcIjpcImYyMjI3ZWNjXCIsXCJmZWF0dXJlcy1SZXNpemluZy1SZXNpemluZy1tZHhcIjpcIjM4NmU3ZjA1XCIsXCJmZWF0dXJlcy1TZWxlY3Rpb24tU2VsZWN0aW9uLXN0b3JpZXNcIjpcImM3OWU2NTBjXCIsXCJmZWF0dXJlcy1TZWxlY3Rpb24tU2VsZWN0aW9uLW1keFwiOlwiMTFkNmU0YzhcIixcIm1pc2MtRW1wdHktRW1wdHlFeHByZXNzaW9uLW1keFwiOlwiNDAyMTdiNGFcIixcIm1pc2MtU3RhbmRhbG9uZVRhYmxlLVN0YW5kYWxvbmVUYWJsZS1tZHhcIjpcIjMxNjI1NGJkXCIsXCJ1c2VDYXNlcy1DYW5Ecml2ZS1DYW5Ecml2ZS1tZHhcIjpcIjQ0NGI2MzE0XCIsXCJ1c2VDYXNlcy1GaW5kRW1wbG95ZWVzLUZpbmRFbXBsb3llZXMtc3Rvcmllc1wiOlwiZmU4MTY4NGVcIixcInVzZUNhc2VzLUZpbmRFbXBsb3llZXMtRmluZEVtcGxveWVlcy1tZHhcIjpcIjVlZDlmYWNjXCIsXCJ1c2VDYXNlcy1Mb2FuT3JpZ2luYXRpb25zLUFwcGxpY2F0aW9uUmlza1Njb3JlLUFwcGxpY2F0aW9uUmlza1Njb3JlLXN0b3JpZXNcIjpcIjVkZGRmNzgyXCIsXCJ1c2VDYXNlcy1Mb2FuT3JpZ2luYXRpb25zLUFwcGxpY2F0aW9uUmlza1Njb3JlLUFwcGxpY2F0aW9uUmlza1Njb3JlLW1keFwiOlwiMzdiNTRkOWZcIixcInVzZUNhc2VzLUxvYW5PcmlnaW5hdGlvbnMtQnVyZWF1U3RyYXRlZ3lEZWNpc2lvblNlcnZpY2UtQnVyZWF1Q2FsbFR5cGUtQnVyYXVDYWxsVHlwZS1tZHhcIjpcImZlM2FiZjQ1XCIsXCJ1c2VDYXNlcy1Mb2FuT3JpZ2luYXRpb25zLUJ1cmVhdVN0cmF0ZWd5RGVjaXNpb25TZXJ2aWNlLUJ1cmVhdVN0cmF0ZWd5RGVjaXNpb25TZXJ2aWNlLW1keFwiOlwiMmE0ZmEzMzVcIixcInVzZUNhc2VzLUxvYW5PcmlnaW5hdGlvbnMtQnVyZWF1U3RyYXRlZ3lEZWNpc2lvblNlcnZpY2UtRWxpZ2liaWxpdHktRWxpZ2liaWxpdHktbWR4XCI6XCIyZmE3ZDkzZFwiLFwidXNlQ2FzZXMtTG9hbk9yaWdpbmF0aW9ucy1CdXJlYXVTdHJhdGVneURlY2lzaW9uU2VydmljZS1QcmVCdXJlYXVBZmZvcmRhYmlsaXR5LVByZUJ1cmVhdUFmZm9yZGFiaWxpdHktbWR4XCI6XCI2ODYwYjUyNFwiLFwidXNlQ2FzZXMtTG9hbk9yaWdpbmF0aW9ucy1CdXJlYXVTdHJhdGVneURlY2lzaW9uU2VydmljZS1QcmVCdXJlYXVSaXNrQ2F0ZWdvcnktUHJlQnVyZWF1Umlza0NhdGVnb3J5LW1keFwiOlwiNWIxMDZjOTJcIixcInVzZUNhc2VzLUxvYW5PcmlnaW5hdGlvbnMtQnVyZWF1U3RyYXRlZ3lEZWNpc2lvblNlcnZpY2UtU3RyYXRlZ3ktU3RyYXRlZ3ktbWR4XCI6XCIwMjE2M2Y3YVwiLFwidXNlQ2FzZXMtTG9hbk9yaWdpbmF0aW9ucy1GdW5jdGlvbnMtQWZmb3JkYWJpbGl0eUNhbGN1bGF0aW9uLUFmZm9yZGFiaWxpdHlDYWxjdWxhdGlvbi1tZHhcIjpcImY1Y2ExZDMwXCIsXCJ1c2VDYXNlcy1Mb2FuT3JpZ2luYXRpb25zLUZ1bmN0aW9ucy1JbnN0YWxsbWVudENhbGN1bGF0aW9uLUluc3RhbGxtZW50Q2FsY3VsYXRpb24tbWR4XCI6XCI3MGU5YzY0NVwiLFwidXNlQ2FzZXMtTG9hbk9yaWdpbmF0aW9ucy1Mb2FuT3JpZ2luYXRpb25zLW1keFwiOlwiMmE1YTdhODhcIixcInVzZUNhc2VzLUxvYW5PcmlnaW5hdGlvbnMtUmVxdWlyZWRNb250aGx5SW5zdGFsbG1lbnQtUmVxdWlyZWRNb250aGx5SW5zdGFsbG1lbnQtbWR4XCI6XCIxMDQxM2MzZlwiLFwidXNlQ2FzZXMtTG9hbk9yaWdpbmF0aW9ucy1Sb3V0aW5nRGVjaXNpb25TZXJ2aWNlLVBvc3RCdXJlYXVBZmZvcmRhYmlsaXR5LVBvc3RCdXJlYXVBZmZvcmRhYmlsaXR5LW1keFwiOlwiN2Y3Mjc1YjNcIixcInVzZUNhc2VzLUxvYW5PcmlnaW5hdGlvbnMtUm91dGluZ0RlY2lzaW9uU2VydmljZS1Qb3N0QnVyZWF1Umlza0NhdGVnb3J5LVBvc3RCdXJlYXVSaXNrQ2F0ZWdvcnktc3Rvcmllc1wiOlwiZWJhNWUyYjFcIixcInVzZUNhc2VzLUxvYW5PcmlnaW5hdGlvbnMtUm91dGluZ0RlY2lzaW9uU2VydmljZS1Qb3N0QnVyZWF1Umlza0NhdGVnb3J5LVBvc3RCdXJlYXVSaXNrQ2F0ZWdvcnktbWR4XCI6XCI2MTMxYzRlNFwiLFwidXNlQ2FzZXMtTG9hbk9yaWdpbmF0aW9ucy1Sb3V0aW5nRGVjaXNpb25TZXJ2aWNlLVJvdXRpbmctUm91dGluZy1tZHhcIjpcIjlmZjY1Nzc0XCIsXCJ1c2VDYXNlcy1Mb2FuT3JpZ2luYXRpb25zLVJvdXRpbmdEZWNpc2lvblNlcnZpY2UtUm91dGluZ0RlY2lzaW9uU2VydmljZS1tZHhcIjpcIjAyYzIyNDFkXCIsXCJib3hlZEV4cHJlc3Npb25zLUV2ZXJ5LUV2ZXJ5LXN0b3JpZXNcIjpcIjEzZTY2MTAzXCIsXCJib3hlZEV4cHJlc3Npb25zLUZpbHRlci1GaWx0ZXItc3Rvcmllc1wiOlwiMWM2ZjNlYWVcIixcImJveGVkRXhwcmVzc2lvbnMtRm9yLUZvci1zdG9yaWVzXCI6XCJhNzBmNTMzMlwiLFwiYm94ZWRFeHByZXNzaW9ucy1GdW5jdGlvbi1GdW5jdGlvbi1zdG9yaWVzXCI6XCIxYTczOTM1NlwiLFwiYm94ZWRFeHByZXNzaW9ucy1MaXN0LUxpc3Qtc3Rvcmllc1wiOlwiMTA2NDVhMzdcIixcImJveGVkRXhwcmVzc2lvbnMtTGl0ZXJhbC1MaXRlcmFsLXN0b3JpZXNcIjpcIjNhZjA4YmRkXCIsXCJib3hlZEV4cHJlc3Npb25zLVJlbGF0aW9uLVJlbGF0aW9uLXN0b3JpZXNcIjpcIjdmZDBjZTFmXCIsXCJib3hlZEV4cHJlc3Npb25zLVNvbWUtU29tZS1zdG9yaWVzXCI6XCIyMmMyYjI5MVwiLFwiZGV2LVdlYkFwcC1zdG9yaWVzXCI6XCIxYzA1NWFkMlwiLFwibWlzYy1FbXB0eS1FbXB0eUV4cHJlc3Npb24tc3Rvcmllc1wiOlwiYWIxNjg2NTFcIixcIm1pc2MtU3RhbmRhbG9uZVRhYmxlLVN0YW5kYWxvbmVUYWJsZS1zdG9yaWVzXCI6XCIwOWM5MjBhNlwiLFwidXNlQ2FzZXMtQ2FuRHJpdmUtQ2FuRHJpdmUtc3Rvcmllc1wiOlwiNGM3YmQ2OGNcIixcInVzZUNhc2VzLUxvYW5PcmlnaW5hdGlvbnMtQnVyZWF1U3RyYXRlZ3lEZWNpc2lvblNlcnZpY2UtQnVyZWF1Q2FsbFR5cGUtQnVyZWF1Q2FsbFR5cGUtc3Rvcmllc1wiOlwiNGYzM2NmOWVcIixcInVzZUNhc2VzLUxvYW5PcmlnaW5hdGlvbnMtQnVyZWF1U3RyYXRlZ3lEZWNpc2lvblNlcnZpY2UtRWxpZ2liaWxpdHktRWxpZ2liaWxpdHktc3Rvcmllc1wiOlwiODZmYTk1NmFcIixcInVzZUNhc2VzLUxvYW5PcmlnaW5hdGlvbnMtQnVyZWF1U3RyYXRlZ3lEZWNpc2lvblNlcnZpY2UtUHJlQnVyZWF1QWZmb3JkYWJpbGl0eS1QcmVCdXJlYXVBZmZvcmRhYmlsaXR5LXN0b3JpZXNcIjpcIjM4NzgzZjZhXCIsXCJ1c2VDYXNlcy1Mb2FuT3JpZ2luYXRpb25zLUJ1cmVhdVN0cmF0ZWd5RGVjaXNpb25TZXJ2aWNlLVByZUJ1cmVhdVJpc2tDYXRlZ29yeS1QcmVCdXJlYXVSaXNrQ2F0ZWdvcnktc3Rvcmllc1wiOlwiMWU0NzM0MTlcIixcInVzZUNhc2VzLUxvYW5PcmlnaW5hdGlvbnMtQnVyZWF1U3RyYXRlZ3lEZWNpc2lvblNlcnZpY2UtU3RyYXRlZ3ktU3RyYXRlZ3ktc3Rvcmllc1wiOlwiZmQwNTQyMzFcIixcInVzZUNhc2VzLUxvYW5PcmlnaW5hdGlvbnMtRnVuY3Rpb25zLUFmZm9yZGFiaWxpdHlDYWxjdWxhdGlvbi1BZmZvcmRhYmlsaXR5Q2FsY3VsYXRpb24tc3Rvcmllc1wiOlwiMjUzZGRiM2VcIixcInVzZUNhc2VzLUxvYW5PcmlnaW5hdGlvbnMtRnVuY3Rpb25zLUluc3RhbGxtZW50Q2FsY3VsYXRpb24tSW5zdGFsbG1lbnRDYWxjdWxhdGlvbi1zdG9yaWVzXCI6XCJhNmU2NzY4N1wiLFwidXNlQ2FzZXMtTG9hbk9yaWdpbmF0aW9ucy1SZXF1aXJlZE1vbnRobHlJbnN0YWxsbWVudC1SZXF1aXJlZE1vbnRobHlJbnN0YWxsbWVudC1zdG9yaWVzXCI6XCI2OWMzYzY4MVwiLFwidXNlQ2FzZXMtTG9hbk9yaWdpbmF0aW9ucy1Sb3V0aW5nRGVjaXNpb25TZXJ2aWNlLVBvc3RCdXJlYXVBZmZvcmRhYmlsaXR5LVBvc3RCdXJlYXVBZmZvcmRhYmlsaXR5LXN0b3JpZXNcIjpcIjBiMWRmZTU0XCIsXCJ1c2VDYXNlcy1Mb2FuT3JpZ2luYXRpb25zLVJvdXRpbmdEZWNpc2lvblNlcnZpY2UtUm91dGluZy1Sb3V0aW5nLXN0b3JpZXNcIjpcIjg2MGFkY2NiXCIsXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19wbnBtX3N0b3J5Ym9va19hZGRvbi1kb2NzXzdfNF82X190eXBlc19yZWFjdC1kb21fMTdfMF84X190eXBlc19yZWFjdF8xN18tYzQ5Y2M0XCI6XCI4MGMxYWEwN1wiLFwidmVuZG9ycy1ub2RlX21vZHVsZXNfcG5wbV9yZWFjdC1jb2xvcmZ1bF81XzZfMV9yZWFjdC1kb21fMTdfMF8yX3JlYWN0XzE3XzBfMl9fcmVhY3RfMTdfMF8yX25vLTRiZTE5NFwiOlwiODEzYjM0YWRcIixcIm5vZGVfbW9kdWxlc19wbnBtX3N0b3J5Ym9va19ibG9ja3NfN180XzZfX3R5cGVzX3JlYWN0LWRvbV8xN18wXzhfX3R5cGVzX3JlYWN0XzE3XzBfMjFfcmVhY3QtZC1iZDFjZDNcIjpcIjc0MzU4YjFlXCIsXCJub2RlX21vZHVsZXNfcG5wbV9zdG9yeWJvb2tfY29tcG9uZW50c183XzRfNl9fdHlwZXNfcmVhY3QtZG9tXzE3XzBfOF9fdHlwZXNfcmVhY3RfMTdfMF8yMV9yZWEtOTkxOTQwXCI6XCIyNjA0YmQ5YlwiLFwidmVuZG9ycy1ub2RlX21vZHVsZXNfcG5wbV9zdG9yeWJvb2tfY29tcG9uZW50c183XzRfNl9fdHlwZXNfcmVhY3QtZG9tXzE3XzBfOF9fdHlwZXNfcmVhY3RfMTdfLTEwMmZhOVwiOlwiNGExOTdlYTdcIixcIm5vZGVfbW9kdWxlc19wbnBtX3N0b3J5Ym9va19jb21wb25lbnRzXzdfNF82X190eXBlc19yZWFjdC1kb21fMTdfMF84X190eXBlc19yZWFjdF8xN18wXzIxX3JlYS1mMTFjMDdcIjpcIjYwZjQ2YTcwXCIsXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19wbnBtX3N0b3J5Ym9va19jb21wb25lbnRzXzdfNF82X190eXBlc19yZWFjdC1kb21fMTdfMF84X190eXBlc19yZWFjdF8xN18tZmY0MjU3XCI6XCIxZjQ4Yjk2MFwiLFwidmVuZG9ycy1ub2RlX21vZHVsZXNfcG5wbV9zdG9yeWJvb2tfY29tcG9uZW50c183XzRfNl9fdHlwZXNfcmVhY3QtZG9tXzE3XzBfOF9fdHlwZXNfcmVhY3RfMTdfLTQ1YTVhNFwiOlwiNDU1OGYzYjBcIixcIm5vZGVfbW9kdWxlc19wbnBtX21keC1qc19yZWFjdF8yXzNfMF9yZWFjdF8xN18wXzJfbm9kZV9tb2R1bGVzX21keC1qc19yZWFjdF9pbmRleF9qc1wiOlwiNmZkODI5M2VcIixcIm5vZGVfbW9kdWxlc19wbnBtX3N0b3J5Ym9va19ibG9ja3NfN180XzZfX3R5cGVzX3JlYWN0LWRvbV8xN18wXzhfX3R5cGVzX3JlYWN0XzE3XzBfMjFfZW5jb2Rpbi1lMTJhZWJcIjpcIjA3N2M0NzNkXCJ9W2NodW5rSWRdICsgXCIuaWZyYW1lLmJ1bmRsZS5qc1wiO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCJ2YXIgaW5Qcm9ncmVzcyA9IHt9O1xudmFyIGRhdGFXZWJwYWNrUHJlZml4ID0gXCJAa2llLXRvb2xzL2JveGVkLWV4cHJlc3Npb24tY29tcG9uZW50OlwiO1xuLy8gbG9hZFNjcmlwdCBmdW5jdGlvbiB0byBsb2FkIGEgc2NyaXB0IHZpYSBzY3JpcHQgdGFnXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmwgPSAodXJsLCBkb25lLCBrZXksIGNodW5rSWQpID0+IHtcblx0aWYoaW5Qcm9ncmVzc1t1cmxdKSB7IGluUHJvZ3Jlc3NbdXJsXS5wdXNoKGRvbmUpOyByZXR1cm47IH1cblx0dmFyIHNjcmlwdCwgbmVlZEF0dGFjaDtcblx0aWYoa2V5ICE9PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBzY3JpcHRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgcyA9IHNjcmlwdHNbaV07XG5cdFx0XHRpZihzLmdldEF0dHJpYnV0ZShcInNyY1wiKSA9PSB1cmwgfHwgcy5nZXRBdHRyaWJ1dGUoXCJkYXRhLXdlYnBhY2tcIikgPT0gZGF0YVdlYnBhY2tQcmVmaXggKyBrZXkpIHsgc2NyaXB0ID0gczsgYnJlYWs7IH1cblx0XHR9XG5cdH1cblx0aWYoIXNjcmlwdCkge1xuXHRcdG5lZWRBdHRhY2ggPSB0cnVlO1xuXHRcdHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuXG5cdFx0c2NyaXB0LmNoYXJzZXQgPSAndXRmLTgnO1xuXHRcdHNjcmlwdC50aW1lb3V0ID0gMTIwO1xuXHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKSB7XG5cdFx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgX193ZWJwYWNrX3JlcXVpcmVfXy5uYyk7XG5cdFx0fVxuXHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXdlYnBhY2tcIiwgZGF0YVdlYnBhY2tQcmVmaXggKyBrZXkpO1xuXG5cdFx0c2NyaXB0LnNyYyA9IHVybDtcblx0fVxuXHRpblByb2dyZXNzW3VybF0gPSBbZG9uZV07XG5cdHZhciBvblNjcmlwdENvbXBsZXRlID0gKHByZXYsIGV2ZW50KSA9PiB7XG5cdFx0Ly8gYXZvaWQgbWVtIGxlYWtzIGluIElFLlxuXHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG51bGw7XG5cdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuXHRcdHZhciBkb25lRm5zID0gaW5Qcm9ncmVzc1t1cmxdO1xuXHRcdGRlbGV0ZSBpblByb2dyZXNzW3VybF07XG5cdFx0c2NyaXB0LnBhcmVudE5vZGUgJiYgc2NyaXB0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcblx0XHRkb25lRm5zICYmIGRvbmVGbnMuZm9yRWFjaCgoZm4pID0+IChmbihldmVudCkpKTtcblx0XHRpZihwcmV2KSByZXR1cm4gcHJldihldmVudCk7XG5cdH1cblx0dmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCB1bmRlZmluZWQsIHsgdHlwZTogJ3RpbWVvdXQnLCB0YXJnZXQ6IHNjcmlwdCB9KSwgMTIwMDAwKTtcblx0c2NyaXB0Lm9uZXJyb3IgPSBvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgc2NyaXB0Lm9uZXJyb3IpO1xuXHRzY3JpcHQub25sb2FkID0gb25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHNjcmlwdC5vbmxvYWQpO1xuXHRuZWVkQXR0YWNoICYmIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbn07IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ubWQgPSAobW9kdWxlKSA9PiB7XG5cdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdHJldHVybiBtb2R1bGU7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwicnVudGltZX5tYWluXCI6IDBcbn07XG5cbl9fd2VicGFja19yZXF1aXJlX18uZi5qID0gKGNodW5rSWQsIHByb21pc2VzKSA9PiB7XG5cdFx0Ly8gSlNPTlAgY2h1bmsgbG9hZGluZyBmb3IgamF2YXNjcmlwdFxuXHRcdHZhciBpbnN0YWxsZWRDaHVua0RhdGEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSA/IGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA6IHVuZGVmaW5lZDtcblx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgIT09IDApIHsgLy8gMCBtZWFucyBcImFscmVhZHkgaW5zdGFsbGVkXCIuXG5cblx0XHRcdC8vIGEgUHJvbWlzZSBtZWFucyBcImN1cnJlbnRseSBsb2FkaW5nXCIuXG5cdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEpIHtcblx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYoXCJydW50aW1lfm1haW5cIiAhPSBjaHVua0lkKSB7XG5cdFx0XHRcdFx0Ly8gc2V0dXAgUHJvbWlzZSBpbiBjaHVuayBjYWNoZVxuXHRcdFx0XHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4gKGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IFtyZXNvbHZlLCByZWplY3RdKSk7XG5cdFx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0gPSBwcm9taXNlKTtcblxuXHRcdFx0XHRcdC8vIHN0YXJ0IGNodW5rIGxvYWRpbmdcblx0XHRcdFx0XHR2YXIgdXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgX193ZWJwYWNrX3JlcXVpcmVfXy51KGNodW5rSWQpO1xuXHRcdFx0XHRcdC8vIGNyZWF0ZSBlcnJvciBiZWZvcmUgc3RhY2sgdW53b3VuZCB0byBnZXQgdXNlZnVsIHN0YWNrdHJhY2UgbGF0ZXJcblx0XHRcdFx0XHR2YXIgZXJyb3IgPSBuZXcgRXJyb3IoKTtcblx0XHRcdFx0XHR2YXIgbG9hZGluZ0VuZGVkID0gKGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSkge1xuXHRcdFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG5cdFx0XHRcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSAhPT0gMCkgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gdW5kZWZpbmVkO1xuXHRcdFx0XHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEpIHtcblx0XHRcdFx0XHRcdFx0XHR2YXIgZXJyb3JUeXBlID0gZXZlbnQgJiYgKGV2ZW50LnR5cGUgPT09ICdsb2FkJyA/ICdtaXNzaW5nJyA6IGV2ZW50LnR5cGUpO1xuXHRcdFx0XHRcdFx0XHRcdHZhciByZWFsU3JjID0gZXZlbnQgJiYgZXZlbnQudGFyZ2V0ICYmIGV2ZW50LnRhcmdldC5zcmM7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IubWVzc2FnZSA9ICdMb2FkaW5nIGNodW5rICcgKyBjaHVua0lkICsgJyBmYWlsZWQuXFxuKCcgKyBlcnJvclR5cGUgKyAnOiAnICsgcmVhbFNyYyArICcpJztcblx0XHRcdFx0XHRcdFx0XHRlcnJvci5uYW1lID0gJ0NodW5rTG9hZEVycm9yJztcblx0XHRcdFx0XHRcdFx0XHRlcnJvci50eXBlID0gZXJyb3JUeXBlO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLnJlcXVlc3QgPSByZWFsU3JjO1xuXHRcdFx0XHRcdFx0XHRcdGluc3RhbGxlZENodW5rRGF0YVsxXShlcnJvcik7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubCh1cmwsIGxvYWRpbmdFbmRlZCwgXCJjaHVuay1cIiArIGNodW5rSWQsIGNodW5rSWQpO1xuXHRcdFx0XHR9IGVsc2UgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0XHRcdH1cblx0XHR9XG59O1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtfa2llX3Rvb2xzX2JveGVkX2V4cHJlc3Npb25fY29tcG9uZW50XCJdID0gc2VsZltcIndlYnBhY2tDaHVua19raWVfdG9vbHNfYm94ZWRfZXhwcmVzc2lvbl9jb21wb25lbnRcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9