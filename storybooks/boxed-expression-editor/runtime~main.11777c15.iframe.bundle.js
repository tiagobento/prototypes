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
/******/ 			return "" + chunkId + "." + {"vendors-node_modules_pnpm_storybook_components_7_4_6__types_react-dom_17_0_8__types_react_17_-bd3eea":"357d905a","vendors-node_modules_pnpm_storybook_blocks_7_4_6__types_react-dom_17_0_8__types_react_17_0_21-627bca":"f993de51","boxedExpressions-BoxedExpressions-mdx":"491cb2cb","vendors-node_modules_pnpm_antlr4_4_13_0_node_modules_antlr4_dist_antlr4_web_mjs-node_modules_-cef2a8":"2f61d578","src_selection_BeeTableSelectionContext_tsx-data_image_svg_xml_charset_utf8_3Csvg_xmlns_27http-cb3024":"f083a29f","stories_boxedExpressionStoriesWrapper_tsx":"19d516f0","boxedExpressions-Conditional-Conditional-stories":"d5e6c723","boxedExpressions-Conditional-Conditional-mdx":"e1e412eb","boxedExpressions-Context-Context-stories":"733abdb1","boxedExpressions-Context-Context-mdx":"4b9164df","boxedExpressions-DecisionTable-DecisionTable-stories":"76477844","boxedExpressions-DecisionTable-DecisionTable-mdx":"d38380e3","boxedExpressions-Every-Every-mdx":"7aa489e7","boxedExpressions-Filter-Filter-mdx":"aa15b457","boxedExpressions-For-For-mdx":"bdafa68e","boxedExpressions-Function-Function-mdx":"7dec4c81","boxedExpressions-Invocation-Invocation-stories":"951eb19f","boxedExpressions-Invocation-Invocation-mdx":"7aa81121","boxedExpressions-List-List-mdx":"5db0f92c","boxedExpressions-Literal-Literal-mdx":"0d58b9d4","stories_boxedExpressions_Relation_Relation_stories_tsx":"c040f899","boxedExpressions-Relation-Relation-mdx":"bee726c9","boxedExpressions-Some-Some-mdx":"805e018f","features-Resizing-Resizing-stories":"d44d3e88","features-Resizing-Resizing-mdx":"386e7f05","features-Selection-Selection-stories":"5a71eb9c","features-Selection-Selection-mdx":"11d6e4c8","misc-Empty-EmptyExpression-mdx":"64a47e33","misc-StandaloneTable-StandaloneTable-mdx":"b6b542b6","useCases-CanDrive-CanDrive-mdx":"659af6ce","useCases-FindEmployees-FindEmployees-stories":"e2f37a18","useCases-FindEmployees-FindEmployees-mdx":"5ed9facc","useCases-LoanOriginations-ApplicationRiskScore-ApplicationRiskScore-stories":"c1d0b873","useCases-LoanOriginations-ApplicationRiskScore-ApplicationRiskScore-mdx":"37b54d9f","useCases-LoanOriginations-BureauStrategyDecisionService-BureauCallType-BurauCallType-mdx":"04c5af1f","useCases-LoanOriginations-BureauStrategyDecisionService-BureauStrategyDecisionService-mdx":"2a4fa335","useCases-LoanOriginations-BureauStrategyDecisionService-Eligibility-Eligibility-mdx":"a91eba64","useCases-LoanOriginations-BureauStrategyDecisionService-PreBureauAffordability-PreBureauAffordability-mdx":"b56f5516","useCases-LoanOriginations-BureauStrategyDecisionService-PreBureauRiskCategory-PreBureauRiskCategory-mdx":"ed6b77eb","useCases-LoanOriginations-BureauStrategyDecisionService-Strategy-Strategy-mdx":"aa2975ba","useCases-LoanOriginations-Functions-AffordabilityCalculation-AffordabilityCalculation-mdx":"35e6386a","useCases-LoanOriginations-Functions-InstallmentCalculation-InstallmentCalculation-mdx":"59185023","useCases-LoanOriginations-LoanOriginations-mdx":"2a5a7a88","useCases-LoanOriginations-RequiredMonthlyInstallment-RequiredMonthlyInstallment-mdx":"13d8e3c0","useCases-LoanOriginations-RoutingDecisionService-PostBureauAffordability-PostBureauAffordability-mdx":"5141872d","useCases-LoanOriginations-RoutingDecisionService-PostBureauRiskCategory-PostBureauRiskCategory-stories":"00397c69","useCases-LoanOriginations-RoutingDecisionService-PostBureauRiskCategory-PostBureauRiskCategory-mdx":"6131c4e4","useCases-LoanOriginations-RoutingDecisionService-Routing-Routing-mdx":"ae4e54a9","useCases-LoanOriginations-RoutingDecisionService-RoutingDecisionService-mdx":"02c2241d","boxedExpressions-Every-Every-stories":"db4bdaf1","boxedExpressions-Filter-Filter-stories":"ae33f7e0","boxedExpressions-For-For-stories":"47f68574","boxedExpressions-Function-Function-stories":"c6dec4f3","boxedExpressions-List-List-stories":"e97dab5e","boxedExpressions-Literal-Literal-stories":"40f1fbdf","boxedExpressions-Relation-Relation-stories":"da062b29","boxedExpressions-Some-Some-stories":"5206b2be","dev-WebApp-stories":"5c0b3d19","misc-Empty-EmptyExpression-stories":"a492ec30","misc-StandaloneTable-StandaloneTable-stories":"e627c1c0","useCases-CanDrive-CanDrive-stories":"e3a555db","useCases-LoanOriginations-BureauStrategyDecisionService-BureauCallType-BureauCallType-stories":"cf372e25","useCases-LoanOriginations-BureauStrategyDecisionService-Eligibility-Eligibility-stories":"7acc4417","useCases-LoanOriginations-BureauStrategyDecisionService-PreBureauAffordability-PreBureauAffordability-stories":"12edb202","useCases-LoanOriginations-BureauStrategyDecisionService-PreBureauRiskCategory-PreBureauRiskCategory-stories":"d0d26750","useCases-LoanOriginations-BureauStrategyDecisionService-Strategy-Strategy-stories":"5ffc8fe6","useCases-LoanOriginations-Functions-AffordabilityCalculation-AffordabilityCalculation-stories":"71c8e0cd","useCases-LoanOriginations-Functions-InstallmentCalculation-InstallmentCalculation-stories":"af23e32c","useCases-LoanOriginations-RequiredMonthlyInstallment-RequiredMonthlyInstallment-stories":"762c7420","useCases-LoanOriginations-RoutingDecisionService-PostBureauAffordability-PostBureauAffordability-stories":"d2ef930a","useCases-LoanOriginations-RoutingDecisionService-Routing-Routing-stories":"22e8ceb2","vendors-node_modules_pnpm_storybook_addon-docs_7_4_6__types_react-dom_17_0_8__types_react_17_-c49cc4":"80c1aa07","vendors-node_modules_pnpm_react-colorful_5_6_1_react-dom_17_0_2_react_17_0_2__react_17_0_2_no-4be194":"813b34ad","node_modules_pnpm_storybook_blocks_7_4_6__types_react-dom_17_0_8__types_react_17_0_21_react-d-bd1cd3":"74358b1e","node_modules_pnpm_storybook_components_7_4_6__types_react-dom_17_0_8__types_react_17_0_21_rea-991940":"2604bd9b","vendors-node_modules_pnpm_storybook_components_7_4_6__types_react-dom_17_0_8__types_react_17_-102fa9":"4a197ea7","node_modules_pnpm_storybook_components_7_4_6__types_react-dom_17_0_8__types_react_17_0_21_rea-f11c07":"60f46a70","vendors-node_modules_pnpm_storybook_components_7_4_6__types_react-dom_17_0_8__types_react_17_-ff4257":"1f48b960","vendors-node_modules_pnpm_storybook_components_7_4_6__types_react-dom_17_0_8__types_react_17_-45a5a4":"4558f3b0","node_modules_pnpm_mdx-js_react_2_3_0_react_17_0_2_node_modules_mdx-js_react_index_js":"6fd8293e","node_modules_pnpm_storybook_blocks_7_4_6__types_react-dom_17_0_8__types_react_17_0_21_encodin-e12aeb":"077c473d"}[chunkId] + ".iframe.bundle.js";
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
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVudGltZX5tYWluLjExNzc3YzE1LmlmcmFtZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7OztVQUFBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQzVCQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLCtCQUErQix3Q0FBd0M7V0FDdkU7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQkFBaUIscUJBQXFCO1dBQ3RDO1dBQ0E7V0FDQSxrQkFBa0IscUJBQXFCO1dBQ3ZDO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQzNCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Q7V0FDdEQsc0NBQXNDLGlFQUFpRTtXQUN2RztXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFQUFFO1dBQ0Y7Ozs7O1dDUkE7V0FDQTtXQUNBO1dBQ0EsOEJBQThCLHV1TUFBdXVNO1dBQ3J3TTs7Ozs7V0NKQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHVCQUF1Qiw0QkFBNEI7V0FDbkQ7V0FDQTtXQUNBO1dBQ0EsaUJBQWlCLG9CQUFvQjtXQUNyQztXQUNBLG1HQUFtRyxZQUFZO1dBQy9HO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsbUVBQW1FLGlDQUFpQztXQUNwRztXQUNBO1dBQ0E7V0FDQTs7Ozs7V0N6Q0E7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDSkE7Ozs7O1dDQUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQzs7V0FFakM7V0FDQTtXQUNBO1dBQ0EsS0FBSztXQUNMO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNO1dBQ047V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztXQ3JGQSIsInNvdXJjZXMiOlsid2VicGFjazovL0BraWUtdG9vbHMvYm94ZWQtZXhwcmVzc2lvbi1jb21wb25lbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQGtpZS10b29scy9ib3hlZC1leHByZXNzaW9uLWNvbXBvbmVudC93ZWJwYWNrL3J1bnRpbWUvYW1kIG9wdGlvbnMiLCJ3ZWJwYWNrOi8vQGtpZS10b29scy9ib3hlZC1leHByZXNzaW9uLWNvbXBvbmVudC93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL0BraWUtdG9vbHMvYm94ZWQtZXhwcmVzc2lvbi1jb21wb25lbnQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vQGtpZS10b29scy9ib3hlZC1leHByZXNzaW9uLWNvbXBvbmVudC93ZWJwYWNrL3J1bnRpbWUvY3JlYXRlIGZha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9Aa2llLXRvb2xzL2JveGVkLWV4cHJlc3Npb24tY29tcG9uZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9Aa2llLXRvb2xzL2JveGVkLWV4cHJlc3Npb24tY29tcG9uZW50L3dlYnBhY2svcnVudGltZS9lbnN1cmUgY2h1bmsiLCJ3ZWJwYWNrOi8vQGtpZS10b29scy9ib3hlZC1leHByZXNzaW9uLWNvbXBvbmVudC93ZWJwYWNrL3J1bnRpbWUvZ2V0IGphdmFzY3JpcHQgY2h1bmsgZmlsZW5hbWUiLCJ3ZWJwYWNrOi8vQGtpZS10b29scy9ib3hlZC1leHByZXNzaW9uLWNvbXBvbmVudC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL0BraWUtdG9vbHMvYm94ZWQtZXhwcmVzc2lvbi1jb21wb25lbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9Aa2llLXRvb2xzL2JveGVkLWV4cHJlc3Npb24tY29tcG9uZW50L3dlYnBhY2svcnVudGltZS9sb2FkIHNjcmlwdCIsIndlYnBhY2s6Ly9Aa2llLXRvb2xzL2JveGVkLWV4cHJlc3Npb24tY29tcG9uZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vQGtpZS10b29scy9ib3hlZC1leHByZXNzaW9uLWNvbXBvbmVudC93ZWJwYWNrL3J1bnRpbWUvbm9kZSBtb2R1bGUgZGVjb3JhdG9yIiwid2VicGFjazovL0BraWUtdG9vbHMvYm94ZWQtZXhwcmVzc2lvbi1jb21wb25lbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vQGtpZS10b29scy9ib3hlZC1leHByZXNzaW9uLWNvbXBvbmVudC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9Aa2llLXRvb2xzL2JveGVkLWV4cHJlc3Npb24tY29tcG9uZW50L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9Aa2llLXRvb2xzL2JveGVkLWV4cHJlc3Npb24tY29tcG9uZW50L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vQGtpZS10b29scy9ib3hlZC1leHByZXNzaW9uLWNvbXBvbmVudC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vQGtpZS10b29scy9ib3hlZC1leHByZXNzaW9uLWNvbXBvbmVudC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0bG9hZGVkOiBmYWxzZSxcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG5cdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIl9fd2VicGFja19yZXF1aXJlX18uYW1kTyA9IHt9OyIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwidmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mID8gKG9iaikgPT4gKE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmopKSA6IChvYmopID0+IChvYmouX19wcm90b19fKTtcbnZhciBsZWFmUHJvdG90eXBlcztcbi8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuLy8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4vLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbi8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuLy8gbW9kZSAmIDE2OiByZXR1cm4gdmFsdWUgd2hlbiBpdCdzIFByb21pc2UtbGlrZVxuLy8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuX193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcblx0aWYobW9kZSAmIDEpIHZhbHVlID0gdGhpcyh2YWx1ZSk7XG5cdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG5cdGlmKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUpIHtcblx0XHRpZigobW9kZSAmIDQpICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcblx0XHRpZigobW9kZSAmIDE2KSAmJiB0eXBlb2YgdmFsdWUudGhlbiA9PT0gJ2Z1bmN0aW9uJykgcmV0dXJuIHZhbHVlO1xuXHR9XG5cdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG5cdHZhciBkZWYgPSB7fTtcblx0bGVhZlByb3RvdHlwZXMgPSBsZWFmUHJvdG90eXBlcyB8fCBbbnVsbCwgZ2V0UHJvdG8oe30pLCBnZXRQcm90byhbXSksIGdldFByb3RvKGdldFByb3RvKV07XG5cdGZvcih2YXIgY3VycmVudCA9IG1vZGUgJiAyICYmIHZhbHVlOyB0eXBlb2YgY3VycmVudCA9PSAnb2JqZWN0JyAmJiAhfmxlYWZQcm90b3R5cGVzLmluZGV4T2YoY3VycmVudCk7IGN1cnJlbnQgPSBnZXRQcm90byhjdXJyZW50KSkge1xuXHRcdE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGN1cnJlbnQpLmZvckVhY2goKGtleSkgPT4gKGRlZltrZXldID0gKCkgPT4gKHZhbHVlW2tleV0pKSk7XG5cdH1cblx0ZGVmWydkZWZhdWx0J10gPSAoKSA9PiAodmFsdWUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGRlZik7XG5cdHJldHVybiBucztcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5mID0ge307XG4vLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4vLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18uZSA9IChjaHVua0lkKSA9PiB7XG5cdHJldHVybiBQcm9taXNlLmFsbChPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLmYpLnJlZHVjZSgocHJvbWlzZXMsIGtleSkgPT4ge1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18uZltrZXldKGNodW5rSWQsIHByb21pc2VzKTtcblx0XHRyZXR1cm4gcHJvbWlzZXM7XG5cdH0sIFtdKSk7XG59OyIsIi8vIFRoaXMgZnVuY3Rpb24gYWxsb3cgdG8gcmVmZXJlbmNlIGFzeW5jIGNodW5rc1xuX193ZWJwYWNrX3JlcXVpcmVfXy51ID0gKGNodW5rSWQpID0+IHtcblx0Ly8gcmV0dXJuIHVybCBmb3IgZmlsZW5hbWVzIGJhc2VkIG9uIHRlbXBsYXRlXG5cdHJldHVybiBcIlwiICsgY2h1bmtJZCArIFwiLlwiICsge1widmVuZG9ycy1ub2RlX21vZHVsZXNfcG5wbV9zdG9yeWJvb2tfY29tcG9uZW50c183XzRfNl9fdHlwZXNfcmVhY3QtZG9tXzE3XzBfOF9fdHlwZXNfcmVhY3RfMTdfLWJkM2VlYVwiOlwiMzU3ZDkwNWFcIixcInZlbmRvcnMtbm9kZV9tb2R1bGVzX3BucG1fc3Rvcnlib29rX2Jsb2Nrc183XzRfNl9fdHlwZXNfcmVhY3QtZG9tXzE3XzBfOF9fdHlwZXNfcmVhY3RfMTdfMF8yMS02MjdiY2FcIjpcImY5OTNkZTUxXCIsXCJib3hlZEV4cHJlc3Npb25zLUJveGVkRXhwcmVzc2lvbnMtbWR4XCI6XCI0OTFjYjJjYlwiLFwidmVuZG9ycy1ub2RlX21vZHVsZXNfcG5wbV9hbnRscjRfNF8xM18wX25vZGVfbW9kdWxlc19hbnRscjRfZGlzdF9hbnRscjRfd2ViX21qcy1ub2RlX21vZHVsZXNfLWNlZjJhOFwiOlwiMmY2MWQ1NzhcIixcInNyY19zZWxlY3Rpb25fQmVlVGFibGVTZWxlY3Rpb25Db250ZXh0X3RzeC1kYXRhX2ltYWdlX3N2Z194bWxfY2hhcnNldF91dGY4XzNDc3ZnX3htbG5zXzI3aHR0cC1jYjMwMjRcIjpcImYwODNhMjlmXCIsXCJzdG9yaWVzX2JveGVkRXhwcmVzc2lvblN0b3JpZXNXcmFwcGVyX3RzeFwiOlwiMTlkNTE2ZjBcIixcImJveGVkRXhwcmVzc2lvbnMtQ29uZGl0aW9uYWwtQ29uZGl0aW9uYWwtc3Rvcmllc1wiOlwiZDVlNmM3MjNcIixcImJveGVkRXhwcmVzc2lvbnMtQ29uZGl0aW9uYWwtQ29uZGl0aW9uYWwtbWR4XCI6XCJlMWU0MTJlYlwiLFwiYm94ZWRFeHByZXNzaW9ucy1Db250ZXh0LUNvbnRleHQtc3Rvcmllc1wiOlwiNzMzYWJkYjFcIixcImJveGVkRXhwcmVzc2lvbnMtQ29udGV4dC1Db250ZXh0LW1keFwiOlwiNGI5MTY0ZGZcIixcImJveGVkRXhwcmVzc2lvbnMtRGVjaXNpb25UYWJsZS1EZWNpc2lvblRhYmxlLXN0b3JpZXNcIjpcIjc2NDc3ODQ0XCIsXCJib3hlZEV4cHJlc3Npb25zLURlY2lzaW9uVGFibGUtRGVjaXNpb25UYWJsZS1tZHhcIjpcImQzODM4MGUzXCIsXCJib3hlZEV4cHJlc3Npb25zLUV2ZXJ5LUV2ZXJ5LW1keFwiOlwiN2FhNDg5ZTdcIixcImJveGVkRXhwcmVzc2lvbnMtRmlsdGVyLUZpbHRlci1tZHhcIjpcImFhMTViNDU3XCIsXCJib3hlZEV4cHJlc3Npb25zLUZvci1Gb3ItbWR4XCI6XCJiZGFmYTY4ZVwiLFwiYm94ZWRFeHByZXNzaW9ucy1GdW5jdGlvbi1GdW5jdGlvbi1tZHhcIjpcIjdkZWM0YzgxXCIsXCJib3hlZEV4cHJlc3Npb25zLUludm9jYXRpb24tSW52b2NhdGlvbi1zdG9yaWVzXCI6XCI5NTFlYjE5ZlwiLFwiYm94ZWRFeHByZXNzaW9ucy1JbnZvY2F0aW9uLUludm9jYXRpb24tbWR4XCI6XCI3YWE4MTEyMVwiLFwiYm94ZWRFeHByZXNzaW9ucy1MaXN0LUxpc3QtbWR4XCI6XCI1ZGIwZjkyY1wiLFwiYm94ZWRFeHByZXNzaW9ucy1MaXRlcmFsLUxpdGVyYWwtbWR4XCI6XCIwZDU4YjlkNFwiLFwic3Rvcmllc19ib3hlZEV4cHJlc3Npb25zX1JlbGF0aW9uX1JlbGF0aW9uX3N0b3JpZXNfdHN4XCI6XCJjMDQwZjg5OVwiLFwiYm94ZWRFeHByZXNzaW9ucy1SZWxhdGlvbi1SZWxhdGlvbi1tZHhcIjpcImJlZTcyNmM5XCIsXCJib3hlZEV4cHJlc3Npb25zLVNvbWUtU29tZS1tZHhcIjpcIjgwNWUwMThmXCIsXCJmZWF0dXJlcy1SZXNpemluZy1SZXNpemluZy1zdG9yaWVzXCI6XCJkNDRkM2U4OFwiLFwiZmVhdHVyZXMtUmVzaXppbmctUmVzaXppbmctbWR4XCI6XCIzODZlN2YwNVwiLFwiZmVhdHVyZXMtU2VsZWN0aW9uLVNlbGVjdGlvbi1zdG9yaWVzXCI6XCI1YTcxZWI5Y1wiLFwiZmVhdHVyZXMtU2VsZWN0aW9uLVNlbGVjdGlvbi1tZHhcIjpcIjExZDZlNGM4XCIsXCJtaXNjLUVtcHR5LUVtcHR5RXhwcmVzc2lvbi1tZHhcIjpcIjY0YTQ3ZTMzXCIsXCJtaXNjLVN0YW5kYWxvbmVUYWJsZS1TdGFuZGFsb25lVGFibGUtbWR4XCI6XCJiNmI1NDJiNlwiLFwidXNlQ2FzZXMtQ2FuRHJpdmUtQ2FuRHJpdmUtbWR4XCI6XCI2NTlhZjZjZVwiLFwidXNlQ2FzZXMtRmluZEVtcGxveWVlcy1GaW5kRW1wbG95ZWVzLXN0b3JpZXNcIjpcImUyZjM3YTE4XCIsXCJ1c2VDYXNlcy1GaW5kRW1wbG95ZWVzLUZpbmRFbXBsb3llZXMtbWR4XCI6XCI1ZWQ5ZmFjY1wiLFwidXNlQ2FzZXMtTG9hbk9yaWdpbmF0aW9ucy1BcHBsaWNhdGlvblJpc2tTY29yZS1BcHBsaWNhdGlvblJpc2tTY29yZS1zdG9yaWVzXCI6XCJjMWQwYjg3M1wiLFwidXNlQ2FzZXMtTG9hbk9yaWdpbmF0aW9ucy1BcHBsaWNhdGlvblJpc2tTY29yZS1BcHBsaWNhdGlvblJpc2tTY29yZS1tZHhcIjpcIjM3YjU0ZDlmXCIsXCJ1c2VDYXNlcy1Mb2FuT3JpZ2luYXRpb25zLUJ1cmVhdVN0cmF0ZWd5RGVjaXNpb25TZXJ2aWNlLUJ1cmVhdUNhbGxUeXBlLUJ1cmF1Q2FsbFR5cGUtbWR4XCI6XCIwNGM1YWYxZlwiLFwidXNlQ2FzZXMtTG9hbk9yaWdpbmF0aW9ucy1CdXJlYXVTdHJhdGVneURlY2lzaW9uU2VydmljZS1CdXJlYXVTdHJhdGVneURlY2lzaW9uU2VydmljZS1tZHhcIjpcIjJhNGZhMzM1XCIsXCJ1c2VDYXNlcy1Mb2FuT3JpZ2luYXRpb25zLUJ1cmVhdVN0cmF0ZWd5RGVjaXNpb25TZXJ2aWNlLUVsaWdpYmlsaXR5LUVsaWdpYmlsaXR5LW1keFwiOlwiYTkxZWJhNjRcIixcInVzZUNhc2VzLUxvYW5PcmlnaW5hdGlvbnMtQnVyZWF1U3RyYXRlZ3lEZWNpc2lvblNlcnZpY2UtUHJlQnVyZWF1QWZmb3JkYWJpbGl0eS1QcmVCdXJlYXVBZmZvcmRhYmlsaXR5LW1keFwiOlwiYjU2ZjU1MTZcIixcInVzZUNhc2VzLUxvYW5PcmlnaW5hdGlvbnMtQnVyZWF1U3RyYXRlZ3lEZWNpc2lvblNlcnZpY2UtUHJlQnVyZWF1Umlza0NhdGVnb3J5LVByZUJ1cmVhdVJpc2tDYXRlZ29yeS1tZHhcIjpcImVkNmI3N2ViXCIsXCJ1c2VDYXNlcy1Mb2FuT3JpZ2luYXRpb25zLUJ1cmVhdVN0cmF0ZWd5RGVjaXNpb25TZXJ2aWNlLVN0cmF0ZWd5LVN0cmF0ZWd5LW1keFwiOlwiYWEyOTc1YmFcIixcInVzZUNhc2VzLUxvYW5PcmlnaW5hdGlvbnMtRnVuY3Rpb25zLUFmZm9yZGFiaWxpdHlDYWxjdWxhdGlvbi1BZmZvcmRhYmlsaXR5Q2FsY3VsYXRpb24tbWR4XCI6XCIzNWU2Mzg2YVwiLFwidXNlQ2FzZXMtTG9hbk9yaWdpbmF0aW9ucy1GdW5jdGlvbnMtSW5zdGFsbG1lbnRDYWxjdWxhdGlvbi1JbnN0YWxsbWVudENhbGN1bGF0aW9uLW1keFwiOlwiNTkxODUwMjNcIixcInVzZUNhc2VzLUxvYW5PcmlnaW5hdGlvbnMtTG9hbk9yaWdpbmF0aW9ucy1tZHhcIjpcIjJhNWE3YTg4XCIsXCJ1c2VDYXNlcy1Mb2FuT3JpZ2luYXRpb25zLVJlcXVpcmVkTW9udGhseUluc3RhbGxtZW50LVJlcXVpcmVkTW9udGhseUluc3RhbGxtZW50LW1keFwiOlwiMTNkOGUzYzBcIixcInVzZUNhc2VzLUxvYW5PcmlnaW5hdGlvbnMtUm91dGluZ0RlY2lzaW9uU2VydmljZS1Qb3N0QnVyZWF1QWZmb3JkYWJpbGl0eS1Qb3N0QnVyZWF1QWZmb3JkYWJpbGl0eS1tZHhcIjpcIjUxNDE4NzJkXCIsXCJ1c2VDYXNlcy1Mb2FuT3JpZ2luYXRpb25zLVJvdXRpbmdEZWNpc2lvblNlcnZpY2UtUG9zdEJ1cmVhdVJpc2tDYXRlZ29yeS1Qb3N0QnVyZWF1Umlza0NhdGVnb3J5LXN0b3JpZXNcIjpcIjAwMzk3YzY5XCIsXCJ1c2VDYXNlcy1Mb2FuT3JpZ2luYXRpb25zLVJvdXRpbmdEZWNpc2lvblNlcnZpY2UtUG9zdEJ1cmVhdVJpc2tDYXRlZ29yeS1Qb3N0QnVyZWF1Umlza0NhdGVnb3J5LW1keFwiOlwiNjEzMWM0ZTRcIixcInVzZUNhc2VzLUxvYW5PcmlnaW5hdGlvbnMtUm91dGluZ0RlY2lzaW9uU2VydmljZS1Sb3V0aW5nLVJvdXRpbmctbWR4XCI6XCJhZTRlNTRhOVwiLFwidXNlQ2FzZXMtTG9hbk9yaWdpbmF0aW9ucy1Sb3V0aW5nRGVjaXNpb25TZXJ2aWNlLVJvdXRpbmdEZWNpc2lvblNlcnZpY2UtbWR4XCI6XCIwMmMyMjQxZFwiLFwiYm94ZWRFeHByZXNzaW9ucy1FdmVyeS1FdmVyeS1zdG9yaWVzXCI6XCJkYjRiZGFmMVwiLFwiYm94ZWRFeHByZXNzaW9ucy1GaWx0ZXItRmlsdGVyLXN0b3JpZXNcIjpcImFlMzNmN2UwXCIsXCJib3hlZEV4cHJlc3Npb25zLUZvci1Gb3Itc3Rvcmllc1wiOlwiNDdmNjg1NzRcIixcImJveGVkRXhwcmVzc2lvbnMtRnVuY3Rpb24tRnVuY3Rpb24tc3Rvcmllc1wiOlwiYzZkZWM0ZjNcIixcImJveGVkRXhwcmVzc2lvbnMtTGlzdC1MaXN0LXN0b3JpZXNcIjpcImU5N2RhYjVlXCIsXCJib3hlZEV4cHJlc3Npb25zLUxpdGVyYWwtTGl0ZXJhbC1zdG9yaWVzXCI6XCI0MGYxZmJkZlwiLFwiYm94ZWRFeHByZXNzaW9ucy1SZWxhdGlvbi1SZWxhdGlvbi1zdG9yaWVzXCI6XCJkYTA2MmIyOVwiLFwiYm94ZWRFeHByZXNzaW9ucy1Tb21lLVNvbWUtc3Rvcmllc1wiOlwiNTIwNmIyYmVcIixcImRldi1XZWJBcHAtc3Rvcmllc1wiOlwiNWMwYjNkMTlcIixcIm1pc2MtRW1wdHktRW1wdHlFeHByZXNzaW9uLXN0b3JpZXNcIjpcImE0OTJlYzMwXCIsXCJtaXNjLVN0YW5kYWxvbmVUYWJsZS1TdGFuZGFsb25lVGFibGUtc3Rvcmllc1wiOlwiZTYyN2MxYzBcIixcInVzZUNhc2VzLUNhbkRyaXZlLUNhbkRyaXZlLXN0b3JpZXNcIjpcImUzYTU1NWRiXCIsXCJ1c2VDYXNlcy1Mb2FuT3JpZ2luYXRpb25zLUJ1cmVhdVN0cmF0ZWd5RGVjaXNpb25TZXJ2aWNlLUJ1cmVhdUNhbGxUeXBlLUJ1cmVhdUNhbGxUeXBlLXN0b3JpZXNcIjpcImNmMzcyZTI1XCIsXCJ1c2VDYXNlcy1Mb2FuT3JpZ2luYXRpb25zLUJ1cmVhdVN0cmF0ZWd5RGVjaXNpb25TZXJ2aWNlLUVsaWdpYmlsaXR5LUVsaWdpYmlsaXR5LXN0b3JpZXNcIjpcIjdhY2M0NDE3XCIsXCJ1c2VDYXNlcy1Mb2FuT3JpZ2luYXRpb25zLUJ1cmVhdVN0cmF0ZWd5RGVjaXNpb25TZXJ2aWNlLVByZUJ1cmVhdUFmZm9yZGFiaWxpdHktUHJlQnVyZWF1QWZmb3JkYWJpbGl0eS1zdG9yaWVzXCI6XCIxMmVkYjIwMlwiLFwidXNlQ2FzZXMtTG9hbk9yaWdpbmF0aW9ucy1CdXJlYXVTdHJhdGVneURlY2lzaW9uU2VydmljZS1QcmVCdXJlYXVSaXNrQ2F0ZWdvcnktUHJlQnVyZWF1Umlza0NhdGVnb3J5LXN0b3JpZXNcIjpcImQwZDI2NzUwXCIsXCJ1c2VDYXNlcy1Mb2FuT3JpZ2luYXRpb25zLUJ1cmVhdVN0cmF0ZWd5RGVjaXNpb25TZXJ2aWNlLVN0cmF0ZWd5LVN0cmF0ZWd5LXN0b3JpZXNcIjpcIjVmZmM4ZmU2XCIsXCJ1c2VDYXNlcy1Mb2FuT3JpZ2luYXRpb25zLUZ1bmN0aW9ucy1BZmZvcmRhYmlsaXR5Q2FsY3VsYXRpb24tQWZmb3JkYWJpbGl0eUNhbGN1bGF0aW9uLXN0b3JpZXNcIjpcIjcxYzhlMGNkXCIsXCJ1c2VDYXNlcy1Mb2FuT3JpZ2luYXRpb25zLUZ1bmN0aW9ucy1JbnN0YWxsbWVudENhbGN1bGF0aW9uLUluc3RhbGxtZW50Q2FsY3VsYXRpb24tc3Rvcmllc1wiOlwiYWYyM2UzMmNcIixcInVzZUNhc2VzLUxvYW5PcmlnaW5hdGlvbnMtUmVxdWlyZWRNb250aGx5SW5zdGFsbG1lbnQtUmVxdWlyZWRNb250aGx5SW5zdGFsbG1lbnQtc3Rvcmllc1wiOlwiNzYyYzc0MjBcIixcInVzZUNhc2VzLUxvYW5PcmlnaW5hdGlvbnMtUm91dGluZ0RlY2lzaW9uU2VydmljZS1Qb3N0QnVyZWF1QWZmb3JkYWJpbGl0eS1Qb3N0QnVyZWF1QWZmb3JkYWJpbGl0eS1zdG9yaWVzXCI6XCJkMmVmOTMwYVwiLFwidXNlQ2FzZXMtTG9hbk9yaWdpbmF0aW9ucy1Sb3V0aW5nRGVjaXNpb25TZXJ2aWNlLVJvdXRpbmctUm91dGluZy1zdG9yaWVzXCI6XCIyMmU4Y2ViMlwiLFwidmVuZG9ycy1ub2RlX21vZHVsZXNfcG5wbV9zdG9yeWJvb2tfYWRkb24tZG9jc183XzRfNl9fdHlwZXNfcmVhY3QtZG9tXzE3XzBfOF9fdHlwZXNfcmVhY3RfMTdfLWM0OWNjNFwiOlwiODBjMWFhMDdcIixcInZlbmRvcnMtbm9kZV9tb2R1bGVzX3BucG1fcmVhY3QtY29sb3JmdWxfNV82XzFfcmVhY3QtZG9tXzE3XzBfMl9yZWFjdF8xN18wXzJfX3JlYWN0XzE3XzBfMl9uby00YmUxOTRcIjpcIjgxM2IzNGFkXCIsXCJub2RlX21vZHVsZXNfcG5wbV9zdG9yeWJvb2tfYmxvY2tzXzdfNF82X190eXBlc19yZWFjdC1kb21fMTdfMF84X190eXBlc19yZWFjdF8xN18wXzIxX3JlYWN0LWQtYmQxY2QzXCI6XCI3NDM1OGIxZVwiLFwibm9kZV9tb2R1bGVzX3BucG1fc3Rvcnlib29rX2NvbXBvbmVudHNfN180XzZfX3R5cGVzX3JlYWN0LWRvbV8xN18wXzhfX3R5cGVzX3JlYWN0XzE3XzBfMjFfcmVhLTk5MTk0MFwiOlwiMjYwNGJkOWJcIixcInZlbmRvcnMtbm9kZV9tb2R1bGVzX3BucG1fc3Rvcnlib29rX2NvbXBvbmVudHNfN180XzZfX3R5cGVzX3JlYWN0LWRvbV8xN18wXzhfX3R5cGVzX3JlYWN0XzE3Xy0xMDJmYTlcIjpcIjRhMTk3ZWE3XCIsXCJub2RlX21vZHVsZXNfcG5wbV9zdG9yeWJvb2tfY29tcG9uZW50c183XzRfNl9fdHlwZXNfcmVhY3QtZG9tXzE3XzBfOF9fdHlwZXNfcmVhY3RfMTdfMF8yMV9yZWEtZjExYzA3XCI6XCI2MGY0NmE3MFwiLFwidmVuZG9ycy1ub2RlX21vZHVsZXNfcG5wbV9zdG9yeWJvb2tfY29tcG9uZW50c183XzRfNl9fdHlwZXNfcmVhY3QtZG9tXzE3XzBfOF9fdHlwZXNfcmVhY3RfMTdfLWZmNDI1N1wiOlwiMWY0OGI5NjBcIixcInZlbmRvcnMtbm9kZV9tb2R1bGVzX3BucG1fc3Rvcnlib29rX2NvbXBvbmVudHNfN180XzZfX3R5cGVzX3JlYWN0LWRvbV8xN18wXzhfX3R5cGVzX3JlYWN0XzE3Xy00NWE1YTRcIjpcIjQ1NThmM2IwXCIsXCJub2RlX21vZHVsZXNfcG5wbV9tZHgtanNfcmVhY3RfMl8zXzBfcmVhY3RfMTdfMF8yX25vZGVfbW9kdWxlc19tZHgtanNfcmVhY3RfaW5kZXhfanNcIjpcIjZmZDgyOTNlXCIsXCJub2RlX21vZHVsZXNfcG5wbV9zdG9yeWJvb2tfYmxvY2tzXzdfNF82X190eXBlc19yZWFjdC1kb21fMTdfMF84X190eXBlc19yZWFjdF8xN18wXzIxX2VuY29kaW4tZTEyYWViXCI6XCIwNzdjNDczZFwifVtjaHVua0lkXSArIFwiLmlmcmFtZS5idW5kbGUuanNcIjtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwidmFyIGluUHJvZ3Jlc3MgPSB7fTtcbnZhciBkYXRhV2VicGFja1ByZWZpeCA9IFwiQGtpZS10b29scy9ib3hlZC1leHByZXNzaW9uLWNvbXBvbmVudDpcIjtcbi8vIGxvYWRTY3JpcHQgZnVuY3Rpb24gdG8gbG9hZCBhIHNjcmlwdCB2aWEgc2NyaXB0IHRhZ1xuX193ZWJwYWNrX3JlcXVpcmVfXy5sID0gKHVybCwgZG9uZSwga2V5LCBjaHVua0lkKSA9PiB7XG5cdGlmKGluUHJvZ3Jlc3NbdXJsXSkgeyBpblByb2dyZXNzW3VybF0ucHVzaChkb25lKTsgcmV0dXJuOyB9XG5cdHZhciBzY3JpcHQsIG5lZWRBdHRhY2g7XG5cdGlmKGtleSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgc2NyaXB0cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIHMgPSBzY3JpcHRzW2ldO1xuXHRcdFx0aWYocy5nZXRBdHRyaWJ1dGUoXCJzcmNcIikgPT0gdXJsIHx8IHMuZ2V0QXR0cmlidXRlKFwiZGF0YS13ZWJwYWNrXCIpID09IGRhdGFXZWJwYWNrUHJlZml4ICsga2V5KSB7IHNjcmlwdCA9IHM7IGJyZWFrOyB9XG5cdFx0fVxuXHR9XG5cdGlmKCFzY3JpcHQpIHtcblx0XHRuZWVkQXR0YWNoID0gdHJ1ZTtcblx0XHRzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcblxuXHRcdHNjcmlwdC5jaGFyc2V0ID0gJ3V0Zi04Jztcblx0XHRzY3JpcHQudGltZW91dCA9IDEyMDtcblx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5uYykge1xuXHRcdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIF9fd2VicGFja19yZXF1aXJlX18ubmMpO1xuXHRcdH1cblx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwiZGF0YS13ZWJwYWNrXCIsIGRhdGFXZWJwYWNrUHJlZml4ICsga2V5KTtcblxuXHRcdHNjcmlwdC5zcmMgPSB1cmw7XG5cdH1cblx0aW5Qcm9ncmVzc1t1cmxdID0gW2RvbmVdO1xuXHR2YXIgb25TY3JpcHRDb21wbGV0ZSA9IChwcmV2LCBldmVudCkgPT4ge1xuXHRcdC8vIGF2b2lkIG1lbSBsZWFrcyBpbiBJRS5cblx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBudWxsO1xuXHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcblx0XHR2YXIgZG9uZUZucyA9IGluUHJvZ3Jlc3NbdXJsXTtcblx0XHRkZWxldGUgaW5Qcm9ncmVzc1t1cmxdO1xuXHRcdHNjcmlwdC5wYXJlbnROb2RlICYmIHNjcmlwdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNjcmlwdCk7XG5cdFx0ZG9uZUZucyAmJiBkb25lRm5zLmZvckVhY2goKGZuKSA9PiAoZm4oZXZlbnQpKSk7XG5cdFx0aWYocHJldikgcmV0dXJuIHByZXYoZXZlbnQpO1xuXHR9XG5cdHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgdW5kZWZpbmVkLCB7IHR5cGU6ICd0aW1lb3V0JywgdGFyZ2V0OiBzY3JpcHQgfSksIDEyMDAwMCk7XG5cdHNjcmlwdC5vbmVycm9yID0gb25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHNjcmlwdC5vbmVycm9yKTtcblx0c2NyaXB0Lm9ubG9hZCA9IG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCBzY3JpcHQub25sb2FkKTtcblx0bmVlZEF0dGFjaCAmJiBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG59OyIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubm1kID0gKG1vZHVsZSkgPT4ge1xuXHRtb2R1bGUucGF0aHMgPSBbXTtcblx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRyZXR1cm4gbW9kdWxlO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwicnVudGltZX5tYWluXCI6IDBcbn07XG5cbl9fd2VicGFja19yZXF1aXJlX18uZi5qID0gKGNodW5rSWQsIHByb21pc2VzKSA9PiB7XG5cdFx0Ly8gSlNPTlAgY2h1bmsgbG9hZGluZyBmb3IgamF2YXNjcmlwdFxuXHRcdHZhciBpbnN0YWxsZWRDaHVua0RhdGEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSA/IGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA6IHVuZGVmaW5lZDtcblx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgIT09IDApIHsgLy8gMCBtZWFucyBcImFscmVhZHkgaW5zdGFsbGVkXCIuXG5cblx0XHRcdC8vIGEgUHJvbWlzZSBtZWFucyBcImN1cnJlbnRseSBsb2FkaW5nXCIuXG5cdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEpIHtcblx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYoXCJydW50aW1lfm1haW5cIiAhPSBjaHVua0lkKSB7XG5cdFx0XHRcdFx0Ly8gc2V0dXAgUHJvbWlzZSBpbiBjaHVuayBjYWNoZVxuXHRcdFx0XHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4gKGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IFtyZXNvbHZlLCByZWplY3RdKSk7XG5cdFx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0gPSBwcm9taXNlKTtcblxuXHRcdFx0XHRcdC8vIHN0YXJ0IGNodW5rIGxvYWRpbmdcblx0XHRcdFx0XHR2YXIgdXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgX193ZWJwYWNrX3JlcXVpcmVfXy51KGNodW5rSWQpO1xuXHRcdFx0XHRcdC8vIGNyZWF0ZSBlcnJvciBiZWZvcmUgc3RhY2sgdW53b3VuZCB0byBnZXQgdXNlZnVsIHN0YWNrdHJhY2UgbGF0ZXJcblx0XHRcdFx0XHR2YXIgZXJyb3IgPSBuZXcgRXJyb3IoKTtcblx0XHRcdFx0XHR2YXIgbG9hZGluZ0VuZGVkID0gKGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSkge1xuXHRcdFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG5cdFx0XHRcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSAhPT0gMCkgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gdW5kZWZpbmVkO1xuXHRcdFx0XHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEpIHtcblx0XHRcdFx0XHRcdFx0XHR2YXIgZXJyb3JUeXBlID0gZXZlbnQgJiYgKGV2ZW50LnR5cGUgPT09ICdsb2FkJyA/ICdtaXNzaW5nJyA6IGV2ZW50LnR5cGUpO1xuXHRcdFx0XHRcdFx0XHRcdHZhciByZWFsU3JjID0gZXZlbnQgJiYgZXZlbnQudGFyZ2V0ICYmIGV2ZW50LnRhcmdldC5zcmM7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IubWVzc2FnZSA9ICdMb2FkaW5nIGNodW5rICcgKyBjaHVua0lkICsgJyBmYWlsZWQuXFxuKCcgKyBlcnJvclR5cGUgKyAnOiAnICsgcmVhbFNyYyArICcpJztcblx0XHRcdFx0XHRcdFx0XHRlcnJvci5uYW1lID0gJ0NodW5rTG9hZEVycm9yJztcblx0XHRcdFx0XHRcdFx0XHRlcnJvci50eXBlID0gZXJyb3JUeXBlO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLnJlcXVlc3QgPSByZWFsU3JjO1xuXHRcdFx0XHRcdFx0XHRcdGluc3RhbGxlZENodW5rRGF0YVsxXShlcnJvcik7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubCh1cmwsIGxvYWRpbmdFbmRlZCwgXCJjaHVuay1cIiArIGNodW5rSWQsIGNodW5rSWQpO1xuXHRcdFx0XHR9IGVsc2UgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0XHRcdH1cblx0XHR9XG59O1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtfa2llX3Rvb2xzX2JveGVkX2V4cHJlc3Npb25fY29tcG9uZW50XCJdID0gc2VsZltcIndlYnBhY2tDaHVua19raWVfdG9vbHNfYm94ZWRfZXhwcmVzc2lvbl9jb21wb25lbnRcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9