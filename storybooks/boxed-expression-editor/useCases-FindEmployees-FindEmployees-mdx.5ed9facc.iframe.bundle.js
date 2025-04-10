"use strict";
(self["webpackChunk_kie_tools_boxed_expression_component"] = self["webpackChunk_kie_tools_boxed_expression_component"] || []).push([["useCases-FindEmployees-FindEmployees-mdx"],{

/***/ "./stories/useCases/FindEmployees/FindEmployees.mdx":
/*!**********************************************************!*\
  !*** ./stories/useCases/FindEmployees/FindEmployees.mdx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var _Users_tiagobento_apache_kie_tools_node_modules_pnpm_storybook_addon_docs_7_4_6_types_react_dom_17_0_8_types_react_17_0_21_encoding_0_1_13_reac_osluumftxctvhueztkvao5vug4_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/.pnpm/@storybook+addon-docs@7.4.6_@types+react-dom@17.0.8_@types+react@17.0.21_encoding@0.1.13_reac_osluumftxctvhueztkvao5vug4/node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim */ "../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@17.0.2/node_modules/@mdx-js/react/lib/index.js");
/* harmony import */ var _storybook_blocks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @storybook/blocks */ "../../node_modules/.pnpm/@storybook+blocks@7.4.6_@types+react-dom@17.0.8_@types+react@17.0.21_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@storybook/blocks/dist/index.mjs");
/* harmony import */ var _FindEmployees_stories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FindEmployees.stories */ "./stories/useCases/FindEmployees/FindEmployees.stories.tsx");



/*@jsxRuntime automatic @jsxImportSource react*/
/*Licensed to the Apache Software Foundation (ASF) under one*/
/*or more contributor license agreements. See the NOTICE file*/
/*distributed with this work for additional information*/
/*regarding copyright ownership. The ASF licenses this file*/
/*to you under the Apache License, Version 2.0 (the*/
/*"License"); you may not use this file except in compliance*/
/*with the License. You may obtain a copy of the License at*/
/**/
/*http://www.apache.org/licenses/LICENSE-2.0*/
/**/
/*Unless required by applicable law or agreed to in writing,*/
/*software distributed under the License is distributed on an*/
/*"AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY*/
/*KIND, either express or implied. See the License for the*/
/*specific language governing permissions and limitations*/
/*under the License.*/




function _createMdxContent(props) {
  const _components = Object.assign({
    h2: "h2",
    p: "p",
    h3: "h3",
    hr: "hr",
    a: "a",
    strong: "strong"
  }, (0,_Users_tiagobento_apache_kie_tools_node_modules_pnpm_storybook_addon_docs_7_4_6_types_react_dom_17_0_8_types_react_17_0_21_encoding_0_1_13_reac_osluumftxctvhueztkvao5vug4_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.useMDXComponents)(), props.components);
  return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: ["\n", "\n", "\n", "\n", "\n", "\n", "\n", "\n", "\n", "\n", "\n", "\n", "\n", "\n", "\n", "\n", "\n", (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Meta, {
      title: "MDX/Use cases/Find Employees",
      of: _FindEmployees_stories__WEBPACK_IMPORTED_MODULE_2__
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 21,
      columnNumber: 1
    }, this), "\n", (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components.h2, {
      id: "find-employees",
      children: "Find Employees"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 23,
      columnNumber: 1
    }, this), "\n", (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components.p, {
      children: "This example brings an employee finder by knowledge and department. The following DRD brings two input nodes \"Knowledge\"\nand \"Dept\" (Department) that will be used for the search. It also contains two decision nodes, one with the employee's\ninformation, called \"Employees\", and one \"Find by Employees\" responsible for invoking the function \"Find an employee by knowledge\"\non the Business Knowledge Model node."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 25,
      columnNumber: 1
    }, this), "\n", (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
      children: (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
        src: "./find-employees-dmn.png",
        alt: "Find Employees DMN",
        title: "Find Employees DMN"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 31,
        columnNumber: 3
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 30,
      columnNumber: 1
    }, this), "\n", (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components.p, {
      children: "It was created some data types for this DMN model. The \"tEmployee\" data type contains\nall relevant information about the employee, such as \"Id\", \"Knowledges\", \"Dept\" and \"Name\".\nThe \"Knowledges\" is of the type \"tKnowledges\", which is a list of \"tKnowledge\". It can have\nthe values \"Git\", \"Java\", \"Scrum\", and \"TypeScript\".\nThe \"Dept\" is from the type \"tDept\", which is an enumeration with the \"Sales\", \"Engineering\"\nand \"Management\" values."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 34,
      columnNumber: 1
    }, this), "\n", (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
      children: (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
        src: "./find-employees-data-types.png",
        alt: "Find Employees Data Types",
        title: "Find Employees Data Types"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 42,
        columnNumber: 3
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 41,
      columnNumber: 1
    }, this), "\n", (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components.h2, {
      id: "boxed-expressions",
      children: "Boxed expressions"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 45,
      columnNumber: 1
    }, this), "\n", (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components.p, {
      children: "The decision logic of the DRG was divided as follow:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 47,
      columnNumber: 1
    }, this), "\n", (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components.h3, {
      id: "employees",
      children: "Employees"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 49,
      columnNumber: 1
    }, this), "\n", (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components.hr, {}, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 51,
      columnNumber: 1
    }, this), "\n", (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components.p, {
      children: ["This decision node contains all Employee's information. For this, it's used the\n", (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components.a, {
        href: "/docs/boxed-expressions-relation--overview",
        children: "Relation"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 54,
        columnNumber: 1
      }, this), " expression, which enables\nto creation of a column for each Employee property. The Employee contains \"Id\", \"Name\", \"Dept\"\n(Department) and the employee's \"Knowledges\". The \" Knowledges\" is a List of Knowledge."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 53,
      columnNumber: 1
    }, this), "\n", (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Story, {
      of: _FindEmployees_stories__WEBPACK_IMPORTED_MODULE_2__.Employees
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 58,
      columnNumber: 1
    }, this), "\n", (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components.h3, {
      id: "find-employee-by-knowledge",
      children: "Find employee by knowledge"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 60,
      columnNumber: 1
    }, this), "\n", (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components.hr, {}, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 62,
      columnNumber: 1
    }, this), "\n", (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components.p, {
      children: ["The Business Knowledge Model ", (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components.strong, {
        children: "Find employees by knowledge"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 64,
        columnNumber: 30
      }, this), " contains a\n", (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components.a, {
        href: "/docs/boxed-expressions-function--overview",
        children: "Boxed Function"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 65,
        columnNumber: 1
      }, this), " expression. This function has\nreceived three parameters: \"employees\", \"knowledge\" and \"dept\" and returns a list of employees that met the knowledge\nand department requirements. The ", (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components.a, {
        href: "/docs/boxed-expressions-function--overview",
        children: "Boxed Function"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 67,
        columnNumber: 34
      }, this), " has a\n", (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components.a, {
        href: "/docs/boxed-expressions-context--overview",
        children: "Boxed Context"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 68,
        columnNumber: 1
      }, this), " on its body. The first context entry has a\n", (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components.a, {
        href: "/docs/boxed-expressions-literal--overview",
        children: "Boxed Literal"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 69,
        columnNumber: 1
      }, this), ", and is responsible\nfor filtering the Employees list by department and saving the value as ", (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components.strong, {
        children: "Employees by Dept"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 70,
        columnNumber: 72
      }, this), ".\nThe second context entry ", (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components.strong, {
        children: "Employees with Knowledge"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 71,
        columnNumber: 26
      }, this), " also has a\n", (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components.a, {
        href: "/docs/boxed-expressions-literal--overview",
        children: "Boxed Literal"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 72,
        columnNumber: 1
      }, this), " and checks the required knowledge on all employees,\nthe ones that know are returned, otherwise returns null. Finally, on the context results, we have a\na ", (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components.a, {
        href: "/docs/boxed-expressions-literal--overview",
        children: "Boxed Literal"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 74,
        columnNumber: 3
      }, this), " which filters the null values from ", (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components.strong, {
        children: "Employees with Knowledge"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 74,
        columnNumber: 97
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 64,
      columnNumber: 1
    }, this), "\n", (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Story, {
      of: _FindEmployees_stories__WEBPACK_IMPORTED_MODULE_2__.FindEmployeesByKnowledge
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 76,
      columnNumber: 1
    }, this), "\n", (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components.h3, {
      id: "find-by-employees",
      children: "Find by Employees"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 78,
      columnNumber: 1
    }, this), "\n", (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components.hr, {}, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 80,
      columnNumber: 1
    }, this), "\n", (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components.p, {
      children: ["The ", (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components.strong, {
        children: "Find by Employees"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 82,
        columnNumber: 5
      }, this), " decision invokes the ", (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components.strong, {
        children: "Find employees by knowledge"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 82,
        columnNumber: 48
      }, this), " function using a\n", (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components.a, {
        href: "/docs/boxed-expressions-invocation--overview",
        children: "Boxed Invocation"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 83,
        columnNumber: 1
      }, this), ".\nThe \"Knowledge\" and \"Dept\" come from input nodes, and \"Employees\" comes from the ", (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components.strong, {
        children: "Employees"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 84,
        columnNumber: 82
      }, this), " decision node."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 82,
      columnNumber: 1
    }, this), "\n", (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Story, {
      of: _FindEmployees_stories__WEBPACK_IMPORTED_MODULE_2__.FindByEmployees
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 86,
      columnNumber: 1
    }, this)]
  }, undefined, true, {
    fileName: "<source.js>",
    lineNumber: 1,
    columnNumber: 1
  }, this);
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = Object.assign({}, (0,_Users_tiagobento_apache_kie_tools_node_modules_pnpm_storybook_addon_docs_7_4_6_types_react_dom_17_0_8_types_react_17_0_21_encoding_0_1_13_reac_osluumftxctvhueztkvao5vug4_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.useMDXComponents)(), props.components);
  return MDXLayout ? (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(MDXLayout, Object.assign({}, props, {
    children: (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_createMdxContent, props, undefined, false, {
      fileName: "<source.js>"
    }, this)
  }), undefined, false, {
    fileName: "<source.js>"
  }, this) : _createMdxContent(props);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MDXContent);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlQ2FzZXMtRmluZEVtcGxveWVlcy1GaW5kRW1wbG95ZWVzLW1keC41ZWQ5ZmFjYy5pZnJhbWUuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDMEI7O0FBRTFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUMrRTtBQUNvTjtBQUNyUDtBQUNXO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLEVBQUUsd1JBQWtCO0FBQ3ZCLFNBQVMsNkRBQU8sQ0FBQywyREFBUztBQUMxQixxSEFBcUgsNkRBQU8sQ0FBQyxtREFBSTtBQUNqSTtBQUNBLFVBQVUsbURBQWE7QUFDdkIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUssZUFBZSw2REFBTztBQUMzQjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUssZUFBZSw2REFBTztBQUMzQjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLLGVBQWUsNkRBQU87QUFDM0IsZ0JBQWdCLDZEQUFPO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUssZUFBZSw2REFBTztBQUMzQjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLLGVBQWUsNkRBQU87QUFDM0IsZ0JBQWdCLDZEQUFPO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUssZUFBZSw2REFBTztBQUMzQjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUssZUFBZSw2REFBTztBQUMzQjtBQUNBLEtBQUs7QUFD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cHJlc3Npb24tY29tcG9uZW50Ly4vc3Rvcmllcy91c2VDYXNlcy9GaW5kRW1wbG95ZWVzL0ZpbmRFbXBsb3llZXMubWR4Il0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuLypAanN4UnVudGltZSBhdXRvbWF0aWMgQGpzeEltcG9ydFNvdXJjZSByZWFjdCovXG4vKkxpY2Vuc2VkIHRvIHRoZSBBcGFjaGUgU29mdHdhcmUgRm91bmRhdGlvbiAoQVNGKSB1bmRlciBvbmUqL1xuLypvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlIHRoZSBOT1RJQ0UgZmlsZSovXG4vKmRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uKi9cbi8qcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuIFRoZSBBU0YgbGljZW5zZXMgdGhpcyBmaWxlKi9cbi8qdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSovXG4vKlwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSovXG4vKndpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdCovXG4vKiovXG4vKmh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMCovXG4vKiovXG4vKlVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywqL1xuLypzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiovXG4vKlwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZKi9cbi8qS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUqL1xuLypzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zKi9cbi8qdW5kZXIgdGhlIExpY2Vuc2UuKi9cbmltcG9ydCB7RnJhZ21lbnQgYXMgX0ZyYWdtZW50LCBqc3hERVYgYXMgX2pzeERFVn0gZnJvbSBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiO1xuaW1wb3J0IHt1c2VNRFhDb21wb25lbnRzIGFzIF9wcm92aWRlQ29tcG9uZW50c30gZnJvbSBcIi9Vc2Vycy90aWFnb2JlbnRvL2FwYWNoZS9raWUtdG9vbHMvbm9kZV9tb2R1bGVzLy5wbnBtL0BzdG9yeWJvb2srYWRkb24tZG9jc0A3LjQuNl9AdHlwZXMrcmVhY3QtZG9tQDE3LjAuOF9AdHlwZXMrcmVhY3RAMTcuMC4yMV9lbmNvZGluZ0AwLjEuMTNfcmVhY19vc2x1dW1mdHhjdHZodWV6dGt2YW81dnVnNC9ub2RlX21vZHVsZXMvQHN0b3J5Ym9vay9hZGRvbi1kb2NzL2Rpc3Qvc2hpbXMvbWR4LXJlYWN0LXNoaW1cIjtcbmltcG9ydCB7TWV0YSwgU3Rvcnl9IGZyb20gXCJAc3Rvcnlib29rL2Jsb2Nrc1wiO1xuaW1wb3J0ICogYXMgRmluZEVtcGxveWVlcyBmcm9tIFwiLi9GaW5kRW1wbG95ZWVzLnN0b3JpZXNcIjtcbmZ1bmN0aW9uIF9jcmVhdGVNZHhDb250ZW50KHByb3BzKSB7XG4gIGNvbnN0IF9jb21wb25lbnRzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgaDI6IFwiaDJcIixcbiAgICBwOiBcInBcIixcbiAgICBoMzogXCJoM1wiLFxuICAgIGhyOiBcImhyXCIsXG4gICAgYTogXCJhXCIsXG4gICAgc3Ryb25nOiBcInN0cm9uZ1wiXG4gIH0sIF9wcm92aWRlQ29tcG9uZW50cygpLCBwcm9wcy5jb21wb25lbnRzKTtcbiAgcmV0dXJuIF9qc3hERVYoX0ZyYWdtZW50LCB7XG4gICAgY2hpbGRyZW46IFtcIlxcblwiLCBcIlxcblwiLCBcIlxcblwiLCBcIlxcblwiLCBcIlxcblwiLCBcIlxcblwiLCBcIlxcblwiLCBcIlxcblwiLCBcIlxcblwiLCBcIlxcblwiLCBcIlxcblwiLCBcIlxcblwiLCBcIlxcblwiLCBcIlxcblwiLCBcIlxcblwiLCBcIlxcblwiLCBcIlxcblwiLCBfanN4REVWKE1ldGEsIHtcbiAgICAgIHRpdGxlOiBcIk1EWC9Vc2UgY2FzZXMvRmluZCBFbXBsb3llZXNcIixcbiAgICAgIG9mOiBGaW5kRW1wbG95ZWVzXG4gICAgfSwgdW5kZWZpbmVkLCBmYWxzZSwge1xuICAgICAgZmlsZU5hbWU6IFwiPHNvdXJjZS5qcz5cIixcbiAgICAgIGxpbmVOdW1iZXI6IDIxLFxuICAgICAgY29sdW1uTnVtYmVyOiAxXG4gICAgfSwgdGhpcyksIFwiXFxuXCIsIF9qc3hERVYoX2NvbXBvbmVudHMuaDIsIHtcbiAgICAgIGlkOiBcImZpbmQtZW1wbG95ZWVzXCIsXG4gICAgICBjaGlsZHJlbjogXCJGaW5kIEVtcGxveWVlc1wiXG4gICAgfSwgdW5kZWZpbmVkLCBmYWxzZSwge1xuICAgICAgZmlsZU5hbWU6IFwiPHNvdXJjZS5qcz5cIixcbiAgICAgIGxpbmVOdW1iZXI6IDIzLFxuICAgICAgY29sdW1uTnVtYmVyOiAxXG4gICAgfSwgdGhpcyksIFwiXFxuXCIsIF9qc3hERVYoX2NvbXBvbmVudHMucCwge1xuICAgICAgY2hpbGRyZW46IFwiVGhpcyBleGFtcGxlIGJyaW5ncyBhbiBlbXBsb3llZSBmaW5kZXIgYnkga25vd2xlZGdlIGFuZCBkZXBhcnRtZW50LiBUaGUgZm9sbG93aW5nIERSRCBicmluZ3MgdHdvIGlucHV0IG5vZGVzIFxcXCJLbm93bGVkZ2VcXFwiXFxuYW5kIFxcXCJEZXB0XFxcIiAoRGVwYXJ0bWVudCkgdGhhdCB3aWxsIGJlIHVzZWQgZm9yIHRoZSBzZWFyY2guIEl0IGFsc28gY29udGFpbnMgdHdvIGRlY2lzaW9uIG5vZGVzLCBvbmUgd2l0aCB0aGUgZW1wbG95ZWUnc1xcbmluZm9ybWF0aW9uLCBjYWxsZWQgXFxcIkVtcGxveWVlc1xcXCIsIGFuZCBvbmUgXFxcIkZpbmQgYnkgRW1wbG95ZWVzXFxcIiByZXNwb25zaWJsZSBmb3IgaW52b2tpbmcgdGhlIGZ1bmN0aW9uIFxcXCJGaW5kIGFuIGVtcGxveWVlIGJ5IGtub3dsZWRnZVxcXCJcXG5vbiB0aGUgQnVzaW5lc3MgS25vd2xlZGdlIE1vZGVsIG5vZGUuXCJcbiAgICB9LCB1bmRlZmluZWQsIGZhbHNlLCB7XG4gICAgICBmaWxlTmFtZTogXCI8c291cmNlLmpzPlwiLFxuICAgICAgbGluZU51bWJlcjogMjUsXG4gICAgICBjb2x1bW5OdW1iZXI6IDFcbiAgICB9LCB0aGlzKSwgXCJcXG5cIiwgX2pzeERFVihcInBcIiwge1xuICAgICAgY2hpbGRyZW46IF9qc3hERVYoXCJpbWdcIiwge1xuICAgICAgICBzcmM6IFwiLi9maW5kLWVtcGxveWVlcy1kbW4ucG5nXCIsXG4gICAgICAgIGFsdDogXCJGaW5kIEVtcGxveWVlcyBETU5cIixcbiAgICAgICAgdGl0bGU6IFwiRmluZCBFbXBsb3llZXMgRE1OXCJcbiAgICAgIH0sIHVuZGVmaW5lZCwgZmFsc2UsIHtcbiAgICAgICAgZmlsZU5hbWU6IFwiPHNvdXJjZS5qcz5cIixcbiAgICAgICAgbGluZU51bWJlcjogMzEsXG4gICAgICAgIGNvbHVtbk51bWJlcjogM1xuICAgICAgfSwgdGhpcylcbiAgICB9LCB1bmRlZmluZWQsIGZhbHNlLCB7XG4gICAgICBmaWxlTmFtZTogXCI8c291cmNlLmpzPlwiLFxuICAgICAgbGluZU51bWJlcjogMzAsXG4gICAgICBjb2x1bW5OdW1iZXI6IDFcbiAgICB9LCB0aGlzKSwgXCJcXG5cIiwgX2pzeERFVihfY29tcG9uZW50cy5wLCB7XG4gICAgICBjaGlsZHJlbjogXCJJdCB3YXMgY3JlYXRlZCBzb21lIGRhdGEgdHlwZXMgZm9yIHRoaXMgRE1OIG1vZGVsLiBUaGUgXFxcInRFbXBsb3llZVxcXCIgZGF0YSB0eXBlIGNvbnRhaW5zXFxuYWxsIHJlbGV2YW50IGluZm9ybWF0aW9uIGFib3V0IHRoZSBlbXBsb3llZSwgc3VjaCBhcyBcXFwiSWRcXFwiLCBcXFwiS25vd2xlZGdlc1xcXCIsIFxcXCJEZXB0XFxcIiBhbmQgXFxcIk5hbWVcXFwiLlxcblRoZSBcXFwiS25vd2xlZGdlc1xcXCIgaXMgb2YgdGhlIHR5cGUgXFxcInRLbm93bGVkZ2VzXFxcIiwgd2hpY2ggaXMgYSBsaXN0IG9mIFxcXCJ0S25vd2xlZGdlXFxcIi4gSXQgY2FuIGhhdmVcXG50aGUgdmFsdWVzIFxcXCJHaXRcXFwiLCBcXFwiSmF2YVxcXCIsIFxcXCJTY3J1bVxcXCIsIGFuZCBcXFwiVHlwZVNjcmlwdFxcXCIuXFxuVGhlIFxcXCJEZXB0XFxcIiBpcyBmcm9tIHRoZSB0eXBlIFxcXCJ0RGVwdFxcXCIsIHdoaWNoIGlzIGFuIGVudW1lcmF0aW9uIHdpdGggdGhlIFxcXCJTYWxlc1xcXCIsIFxcXCJFbmdpbmVlcmluZ1xcXCJcXG5hbmQgXFxcIk1hbmFnZW1lbnRcXFwiIHZhbHVlcy5cIlxuICAgIH0sIHVuZGVmaW5lZCwgZmFsc2UsIHtcbiAgICAgIGZpbGVOYW1lOiBcIjxzb3VyY2UuanM+XCIsXG4gICAgICBsaW5lTnVtYmVyOiAzNCxcbiAgICAgIGNvbHVtbk51bWJlcjogMVxuICAgIH0sIHRoaXMpLCBcIlxcblwiLCBfanN4REVWKFwicFwiLCB7XG4gICAgICBjaGlsZHJlbjogX2pzeERFVihcImltZ1wiLCB7XG4gICAgICAgIHNyYzogXCIuL2ZpbmQtZW1wbG95ZWVzLWRhdGEtdHlwZXMucG5nXCIsXG4gICAgICAgIGFsdDogXCJGaW5kIEVtcGxveWVlcyBEYXRhIFR5cGVzXCIsXG4gICAgICAgIHRpdGxlOiBcIkZpbmQgRW1wbG95ZWVzIERhdGEgVHlwZXNcIlxuICAgICAgfSwgdW5kZWZpbmVkLCBmYWxzZSwge1xuICAgICAgICBmaWxlTmFtZTogXCI8c291cmNlLmpzPlwiLFxuICAgICAgICBsaW5lTnVtYmVyOiA0MixcbiAgICAgICAgY29sdW1uTnVtYmVyOiAzXG4gICAgICB9LCB0aGlzKVxuICAgIH0sIHVuZGVmaW5lZCwgZmFsc2UsIHtcbiAgICAgIGZpbGVOYW1lOiBcIjxzb3VyY2UuanM+XCIsXG4gICAgICBsaW5lTnVtYmVyOiA0MSxcbiAgICAgIGNvbHVtbk51bWJlcjogMVxuICAgIH0sIHRoaXMpLCBcIlxcblwiLCBfanN4REVWKF9jb21wb25lbnRzLmgyLCB7XG4gICAgICBpZDogXCJib3hlZC1leHByZXNzaW9uc1wiLFxuICAgICAgY2hpbGRyZW46IFwiQm94ZWQgZXhwcmVzc2lvbnNcIlxuICAgIH0sIHVuZGVmaW5lZCwgZmFsc2UsIHtcbiAgICAgIGZpbGVOYW1lOiBcIjxzb3VyY2UuanM+XCIsXG4gICAgICBsaW5lTnVtYmVyOiA0NSxcbiAgICAgIGNvbHVtbk51bWJlcjogMVxuICAgIH0sIHRoaXMpLCBcIlxcblwiLCBfanN4REVWKF9jb21wb25lbnRzLnAsIHtcbiAgICAgIGNoaWxkcmVuOiBcIlRoZSBkZWNpc2lvbiBsb2dpYyBvZiB0aGUgRFJHIHdhcyBkaXZpZGVkIGFzIGZvbGxvdzpcIlxuICAgIH0sIHVuZGVmaW5lZCwgZmFsc2UsIHtcbiAgICAgIGZpbGVOYW1lOiBcIjxzb3VyY2UuanM+XCIsXG4gICAgICBsaW5lTnVtYmVyOiA0NyxcbiAgICAgIGNvbHVtbk51bWJlcjogMVxuICAgIH0sIHRoaXMpLCBcIlxcblwiLCBfanN4REVWKF9jb21wb25lbnRzLmgzLCB7XG4gICAgICBpZDogXCJlbXBsb3llZXNcIixcbiAgICAgIGNoaWxkcmVuOiBcIkVtcGxveWVlc1wiXG4gICAgfSwgdW5kZWZpbmVkLCBmYWxzZSwge1xuICAgICAgZmlsZU5hbWU6IFwiPHNvdXJjZS5qcz5cIixcbiAgICAgIGxpbmVOdW1iZXI6IDQ5LFxuICAgICAgY29sdW1uTnVtYmVyOiAxXG4gICAgfSwgdGhpcyksIFwiXFxuXCIsIF9qc3hERVYoX2NvbXBvbmVudHMuaHIsIHt9LCB1bmRlZmluZWQsIGZhbHNlLCB7XG4gICAgICBmaWxlTmFtZTogXCI8c291cmNlLmpzPlwiLFxuICAgICAgbGluZU51bWJlcjogNTEsXG4gICAgICBjb2x1bW5OdW1iZXI6IDFcbiAgICB9LCB0aGlzKSwgXCJcXG5cIiwgX2pzeERFVihfY29tcG9uZW50cy5wLCB7XG4gICAgICBjaGlsZHJlbjogW1wiVGhpcyBkZWNpc2lvbiBub2RlIGNvbnRhaW5zIGFsbCBFbXBsb3llZSdzIGluZm9ybWF0aW9uLiBGb3IgdGhpcywgaXQncyB1c2VkIHRoZVxcblwiLCBfanN4REVWKF9jb21wb25lbnRzLmEsIHtcbiAgICAgICAgaHJlZjogXCIvZG9jcy9ib3hlZC1leHByZXNzaW9ucy1yZWxhdGlvbi0tb3ZlcnZpZXdcIixcbiAgICAgICAgY2hpbGRyZW46IFwiUmVsYXRpb25cIlxuICAgICAgfSwgdW5kZWZpbmVkLCBmYWxzZSwge1xuICAgICAgICBmaWxlTmFtZTogXCI8c291cmNlLmpzPlwiLFxuICAgICAgICBsaW5lTnVtYmVyOiA1NCxcbiAgICAgICAgY29sdW1uTnVtYmVyOiAxXG4gICAgICB9LCB0aGlzKSwgXCIgZXhwcmVzc2lvbiwgd2hpY2ggZW5hYmxlc1xcbnRvIGNyZWF0aW9uIG9mIGEgY29sdW1uIGZvciBlYWNoIEVtcGxveWVlIHByb3BlcnR5LiBUaGUgRW1wbG95ZWUgY29udGFpbnMgXFxcIklkXFxcIiwgXFxcIk5hbWVcXFwiLCBcXFwiRGVwdFxcXCJcXG4oRGVwYXJ0bWVudCkgYW5kIHRoZSBlbXBsb3llZSdzIFxcXCJLbm93bGVkZ2VzXFxcIi4gVGhlIFxcXCIgS25vd2xlZGdlc1xcXCIgaXMgYSBMaXN0IG9mIEtub3dsZWRnZS5cIl1cbiAgICB9LCB1bmRlZmluZWQsIHRydWUsIHtcbiAgICAgIGZpbGVOYW1lOiBcIjxzb3VyY2UuanM+XCIsXG4gICAgICBsaW5lTnVtYmVyOiA1MyxcbiAgICAgIGNvbHVtbk51bWJlcjogMVxuICAgIH0sIHRoaXMpLCBcIlxcblwiLCBfanN4REVWKFN0b3J5LCB7XG4gICAgICBvZjogRmluZEVtcGxveWVlcy5FbXBsb3llZXNcbiAgICB9LCB1bmRlZmluZWQsIGZhbHNlLCB7XG4gICAgICBmaWxlTmFtZTogXCI8c291cmNlLmpzPlwiLFxuICAgICAgbGluZU51bWJlcjogNTgsXG4gICAgICBjb2x1bW5OdW1iZXI6IDFcbiAgICB9LCB0aGlzKSwgXCJcXG5cIiwgX2pzeERFVihfY29tcG9uZW50cy5oMywge1xuICAgICAgaWQ6IFwiZmluZC1lbXBsb3llZS1ieS1rbm93bGVkZ2VcIixcbiAgICAgIGNoaWxkcmVuOiBcIkZpbmQgZW1wbG95ZWUgYnkga25vd2xlZGdlXCJcbiAgICB9LCB1bmRlZmluZWQsIGZhbHNlLCB7XG4gICAgICBmaWxlTmFtZTogXCI8c291cmNlLmpzPlwiLFxuICAgICAgbGluZU51bWJlcjogNjAsXG4gICAgICBjb2x1bW5OdW1iZXI6IDFcbiAgICB9LCB0aGlzKSwgXCJcXG5cIiwgX2pzeERFVihfY29tcG9uZW50cy5ociwge30sIHVuZGVmaW5lZCwgZmFsc2UsIHtcbiAgICAgIGZpbGVOYW1lOiBcIjxzb3VyY2UuanM+XCIsXG4gICAgICBsaW5lTnVtYmVyOiA2MixcbiAgICAgIGNvbHVtbk51bWJlcjogMVxuICAgIH0sIHRoaXMpLCBcIlxcblwiLCBfanN4REVWKF9jb21wb25lbnRzLnAsIHtcbiAgICAgIGNoaWxkcmVuOiBbXCJUaGUgQnVzaW5lc3MgS25vd2xlZGdlIE1vZGVsIFwiLCBfanN4REVWKF9jb21wb25lbnRzLnN0cm9uZywge1xuICAgICAgICBjaGlsZHJlbjogXCJGaW5kIGVtcGxveWVlcyBieSBrbm93bGVkZ2VcIlxuICAgICAgfSwgdW5kZWZpbmVkLCBmYWxzZSwge1xuICAgICAgICBmaWxlTmFtZTogXCI8c291cmNlLmpzPlwiLFxuICAgICAgICBsaW5lTnVtYmVyOiA2NCxcbiAgICAgICAgY29sdW1uTnVtYmVyOiAzMFxuICAgICAgfSwgdGhpcyksIFwiIGNvbnRhaW5zIGFcXG5cIiwgX2pzeERFVihfY29tcG9uZW50cy5hLCB7XG4gICAgICAgIGhyZWY6IFwiL2RvY3MvYm94ZWQtZXhwcmVzc2lvbnMtZnVuY3Rpb24tLW92ZXJ2aWV3XCIsXG4gICAgICAgIGNoaWxkcmVuOiBcIkJveGVkIEZ1bmN0aW9uXCJcbiAgICAgIH0sIHVuZGVmaW5lZCwgZmFsc2UsIHtcbiAgICAgICAgZmlsZU5hbWU6IFwiPHNvdXJjZS5qcz5cIixcbiAgICAgICAgbGluZU51bWJlcjogNjUsXG4gICAgICAgIGNvbHVtbk51bWJlcjogMVxuICAgICAgfSwgdGhpcyksIFwiIGV4cHJlc3Npb24uIFRoaXMgZnVuY3Rpb24gaGFzXFxucmVjZWl2ZWQgdGhyZWUgcGFyYW1ldGVyczogXFxcImVtcGxveWVlc1xcXCIsIFxcXCJrbm93bGVkZ2VcXFwiIGFuZCBcXFwiZGVwdFxcXCIgYW5kIHJldHVybnMgYSBsaXN0IG9mIGVtcGxveWVlcyB0aGF0IG1ldCB0aGUga25vd2xlZGdlXFxuYW5kIGRlcGFydG1lbnQgcmVxdWlyZW1lbnRzLiBUaGUgXCIsIF9qc3hERVYoX2NvbXBvbmVudHMuYSwge1xuICAgICAgICBocmVmOiBcIi9kb2NzL2JveGVkLWV4cHJlc3Npb25zLWZ1bmN0aW9uLS1vdmVydmlld1wiLFxuICAgICAgICBjaGlsZHJlbjogXCJCb3hlZCBGdW5jdGlvblwiXG4gICAgICB9LCB1bmRlZmluZWQsIGZhbHNlLCB7XG4gICAgICAgIGZpbGVOYW1lOiBcIjxzb3VyY2UuanM+XCIsXG4gICAgICAgIGxpbmVOdW1iZXI6IDY3LFxuICAgICAgICBjb2x1bW5OdW1iZXI6IDM0XG4gICAgICB9LCB0aGlzKSwgXCIgaGFzIGFcXG5cIiwgX2pzeERFVihfY29tcG9uZW50cy5hLCB7XG4gICAgICAgIGhyZWY6IFwiL2RvY3MvYm94ZWQtZXhwcmVzc2lvbnMtY29udGV4dC0tb3ZlcnZpZXdcIixcbiAgICAgICAgY2hpbGRyZW46IFwiQm94ZWQgQ29udGV4dFwiXG4gICAgICB9LCB1bmRlZmluZWQsIGZhbHNlLCB7XG4gICAgICAgIGZpbGVOYW1lOiBcIjxzb3VyY2UuanM+XCIsXG4gICAgICAgIGxpbmVOdW1iZXI6IDY4LFxuICAgICAgICBjb2x1bW5OdW1iZXI6IDFcbiAgICAgIH0sIHRoaXMpLCBcIiBvbiBpdHMgYm9keS4gVGhlIGZpcnN0IGNvbnRleHQgZW50cnkgaGFzIGFcXG5cIiwgX2pzeERFVihfY29tcG9uZW50cy5hLCB7XG4gICAgICAgIGhyZWY6IFwiL2RvY3MvYm94ZWQtZXhwcmVzc2lvbnMtbGl0ZXJhbC0tb3ZlcnZpZXdcIixcbiAgICAgICAgY2hpbGRyZW46IFwiQm94ZWQgTGl0ZXJhbFwiXG4gICAgICB9LCB1bmRlZmluZWQsIGZhbHNlLCB7XG4gICAgICAgIGZpbGVOYW1lOiBcIjxzb3VyY2UuanM+XCIsXG4gICAgICAgIGxpbmVOdW1iZXI6IDY5LFxuICAgICAgICBjb2x1bW5OdW1iZXI6IDFcbiAgICAgIH0sIHRoaXMpLCBcIiwgYW5kIGlzIHJlc3BvbnNpYmxlXFxuZm9yIGZpbHRlcmluZyB0aGUgRW1wbG95ZWVzIGxpc3QgYnkgZGVwYXJ0bWVudCBhbmQgc2F2aW5nIHRoZSB2YWx1ZSBhcyBcIiwgX2pzeERFVihfY29tcG9uZW50cy5zdHJvbmcsIHtcbiAgICAgICAgY2hpbGRyZW46IFwiRW1wbG95ZWVzIGJ5IERlcHRcIlxuICAgICAgfSwgdW5kZWZpbmVkLCBmYWxzZSwge1xuICAgICAgICBmaWxlTmFtZTogXCI8c291cmNlLmpzPlwiLFxuICAgICAgICBsaW5lTnVtYmVyOiA3MCxcbiAgICAgICAgY29sdW1uTnVtYmVyOiA3MlxuICAgICAgfSwgdGhpcyksIFwiLlxcblRoZSBzZWNvbmQgY29udGV4dCBlbnRyeSBcIiwgX2pzeERFVihfY29tcG9uZW50cy5zdHJvbmcsIHtcbiAgICAgICAgY2hpbGRyZW46IFwiRW1wbG95ZWVzIHdpdGggS25vd2xlZGdlXCJcbiAgICAgIH0sIHVuZGVmaW5lZCwgZmFsc2UsIHtcbiAgICAgICAgZmlsZU5hbWU6IFwiPHNvdXJjZS5qcz5cIixcbiAgICAgICAgbGluZU51bWJlcjogNzEsXG4gICAgICAgIGNvbHVtbk51bWJlcjogMjZcbiAgICAgIH0sIHRoaXMpLCBcIiBhbHNvIGhhcyBhXFxuXCIsIF9qc3hERVYoX2NvbXBvbmVudHMuYSwge1xuICAgICAgICBocmVmOiBcIi9kb2NzL2JveGVkLWV4cHJlc3Npb25zLWxpdGVyYWwtLW92ZXJ2aWV3XCIsXG4gICAgICAgIGNoaWxkcmVuOiBcIkJveGVkIExpdGVyYWxcIlxuICAgICAgfSwgdW5kZWZpbmVkLCBmYWxzZSwge1xuICAgICAgICBmaWxlTmFtZTogXCI8c291cmNlLmpzPlwiLFxuICAgICAgICBsaW5lTnVtYmVyOiA3MixcbiAgICAgICAgY29sdW1uTnVtYmVyOiAxXG4gICAgICB9LCB0aGlzKSwgXCIgYW5kIGNoZWNrcyB0aGUgcmVxdWlyZWQga25vd2xlZGdlIG9uIGFsbCBlbXBsb3llZXMsXFxudGhlIG9uZXMgdGhhdCBrbm93IGFyZSByZXR1cm5lZCwgb3RoZXJ3aXNlIHJldHVybnMgbnVsbC4gRmluYWxseSwgb24gdGhlIGNvbnRleHQgcmVzdWx0cywgd2UgaGF2ZSBhXFxuYSBcIiwgX2pzeERFVihfY29tcG9uZW50cy5hLCB7XG4gICAgICAgIGhyZWY6IFwiL2RvY3MvYm94ZWQtZXhwcmVzc2lvbnMtbGl0ZXJhbC0tb3ZlcnZpZXdcIixcbiAgICAgICAgY2hpbGRyZW46IFwiQm94ZWQgTGl0ZXJhbFwiXG4gICAgICB9LCB1bmRlZmluZWQsIGZhbHNlLCB7XG4gICAgICAgIGZpbGVOYW1lOiBcIjxzb3VyY2UuanM+XCIsXG4gICAgICAgIGxpbmVOdW1iZXI6IDc0LFxuICAgICAgICBjb2x1bW5OdW1iZXI6IDNcbiAgICAgIH0sIHRoaXMpLCBcIiB3aGljaCBmaWx0ZXJzIHRoZSBudWxsIHZhbHVlcyBmcm9tIFwiLCBfanN4REVWKF9jb21wb25lbnRzLnN0cm9uZywge1xuICAgICAgICBjaGlsZHJlbjogXCJFbXBsb3llZXMgd2l0aCBLbm93bGVkZ2VcIlxuICAgICAgfSwgdW5kZWZpbmVkLCBmYWxzZSwge1xuICAgICAgICBmaWxlTmFtZTogXCI8c291cmNlLmpzPlwiLFxuICAgICAgICBsaW5lTnVtYmVyOiA3NCxcbiAgICAgICAgY29sdW1uTnVtYmVyOiA5N1xuICAgICAgfSwgdGhpcyldXG4gICAgfSwgdW5kZWZpbmVkLCB0cnVlLCB7XG4gICAgICBmaWxlTmFtZTogXCI8c291cmNlLmpzPlwiLFxuICAgICAgbGluZU51bWJlcjogNjQsXG4gICAgICBjb2x1bW5OdW1iZXI6IDFcbiAgICB9LCB0aGlzKSwgXCJcXG5cIiwgX2pzeERFVihTdG9yeSwge1xuICAgICAgb2Y6IEZpbmRFbXBsb3llZXMuRmluZEVtcGxveWVlc0J5S25vd2xlZGdlXG4gICAgfSwgdW5kZWZpbmVkLCBmYWxzZSwge1xuICAgICAgZmlsZU5hbWU6IFwiPHNvdXJjZS5qcz5cIixcbiAgICAgIGxpbmVOdW1iZXI6IDc2LFxuICAgICAgY29sdW1uTnVtYmVyOiAxXG4gICAgfSwgdGhpcyksIFwiXFxuXCIsIF9qc3hERVYoX2NvbXBvbmVudHMuaDMsIHtcbiAgICAgIGlkOiBcImZpbmQtYnktZW1wbG95ZWVzXCIsXG4gICAgICBjaGlsZHJlbjogXCJGaW5kIGJ5IEVtcGxveWVlc1wiXG4gICAgfSwgdW5kZWZpbmVkLCBmYWxzZSwge1xuICAgICAgZmlsZU5hbWU6IFwiPHNvdXJjZS5qcz5cIixcbiAgICAgIGxpbmVOdW1iZXI6IDc4LFxuICAgICAgY29sdW1uTnVtYmVyOiAxXG4gICAgfSwgdGhpcyksIFwiXFxuXCIsIF9qc3hERVYoX2NvbXBvbmVudHMuaHIsIHt9LCB1bmRlZmluZWQsIGZhbHNlLCB7XG4gICAgICBmaWxlTmFtZTogXCI8c291cmNlLmpzPlwiLFxuICAgICAgbGluZU51bWJlcjogODAsXG4gICAgICBjb2x1bW5OdW1iZXI6IDFcbiAgICB9LCB0aGlzKSwgXCJcXG5cIiwgX2pzeERFVihfY29tcG9uZW50cy5wLCB7XG4gICAgICBjaGlsZHJlbjogW1wiVGhlIFwiLCBfanN4REVWKF9jb21wb25lbnRzLnN0cm9uZywge1xuICAgICAgICBjaGlsZHJlbjogXCJGaW5kIGJ5IEVtcGxveWVlc1wiXG4gICAgICB9LCB1bmRlZmluZWQsIGZhbHNlLCB7XG4gICAgICAgIGZpbGVOYW1lOiBcIjxzb3VyY2UuanM+XCIsXG4gICAgICAgIGxpbmVOdW1iZXI6IDgyLFxuICAgICAgICBjb2x1bW5OdW1iZXI6IDVcbiAgICAgIH0sIHRoaXMpLCBcIiBkZWNpc2lvbiBpbnZva2VzIHRoZSBcIiwgX2pzeERFVihfY29tcG9uZW50cy5zdHJvbmcsIHtcbiAgICAgICAgY2hpbGRyZW46IFwiRmluZCBlbXBsb3llZXMgYnkga25vd2xlZGdlXCJcbiAgICAgIH0sIHVuZGVmaW5lZCwgZmFsc2UsIHtcbiAgICAgICAgZmlsZU5hbWU6IFwiPHNvdXJjZS5qcz5cIixcbiAgICAgICAgbGluZU51bWJlcjogODIsXG4gICAgICAgIGNvbHVtbk51bWJlcjogNDhcbiAgICAgIH0sIHRoaXMpLCBcIiBmdW5jdGlvbiB1c2luZyBhXFxuXCIsIF9qc3hERVYoX2NvbXBvbmVudHMuYSwge1xuICAgICAgICBocmVmOiBcIi9kb2NzL2JveGVkLWV4cHJlc3Npb25zLWludm9jYXRpb24tLW92ZXJ2aWV3XCIsXG4gICAgICAgIGNoaWxkcmVuOiBcIkJveGVkIEludm9jYXRpb25cIlxuICAgICAgfSwgdW5kZWZpbmVkLCBmYWxzZSwge1xuICAgICAgICBmaWxlTmFtZTogXCI8c291cmNlLmpzPlwiLFxuICAgICAgICBsaW5lTnVtYmVyOiA4MyxcbiAgICAgICAgY29sdW1uTnVtYmVyOiAxXG4gICAgICB9LCB0aGlzKSwgXCIuXFxuVGhlIFxcXCJLbm93bGVkZ2VcXFwiIGFuZCBcXFwiRGVwdFxcXCIgY29tZSBmcm9tIGlucHV0IG5vZGVzLCBhbmQgXFxcIkVtcGxveWVlc1xcXCIgY29tZXMgZnJvbSB0aGUgXCIsIF9qc3hERVYoX2NvbXBvbmVudHMuc3Ryb25nLCB7XG4gICAgICAgIGNoaWxkcmVuOiBcIkVtcGxveWVlc1wiXG4gICAgICB9LCB1bmRlZmluZWQsIGZhbHNlLCB7XG4gICAgICAgIGZpbGVOYW1lOiBcIjxzb3VyY2UuanM+XCIsXG4gICAgICAgIGxpbmVOdW1iZXI6IDg0LFxuICAgICAgICBjb2x1bW5OdW1iZXI6IDgyXG4gICAgICB9LCB0aGlzKSwgXCIgZGVjaXNpb24gbm9kZS5cIl1cbiAgICB9LCB1bmRlZmluZWQsIHRydWUsIHtcbiAgICAgIGZpbGVOYW1lOiBcIjxzb3VyY2UuanM+XCIsXG4gICAgICBsaW5lTnVtYmVyOiA4MixcbiAgICAgIGNvbHVtbk51bWJlcjogMVxuICAgIH0sIHRoaXMpLCBcIlxcblwiLCBfanN4REVWKFN0b3J5LCB7XG4gICAgICBvZjogRmluZEVtcGxveWVlcy5GaW5kQnlFbXBsb3llZXNcbiAgICB9LCB1bmRlZmluZWQsIGZhbHNlLCB7XG4gICAgICBmaWxlTmFtZTogXCI8c291cmNlLmpzPlwiLFxuICAgICAgbGluZU51bWJlcjogODYsXG4gICAgICBjb2x1bW5OdW1iZXI6IDFcbiAgICB9LCB0aGlzKV1cbiAgfSwgdW5kZWZpbmVkLCB0cnVlLCB7XG4gICAgZmlsZU5hbWU6IFwiPHNvdXJjZS5qcz5cIixcbiAgICBsaW5lTnVtYmVyOiAxLFxuICAgIGNvbHVtbk51bWJlcjogMVxuICB9LCB0aGlzKTtcbn1cbmZ1bmN0aW9uIE1EWENvbnRlbnQocHJvcHMgPSB7fSkge1xuICBjb25zdCB7d3JhcHBlcjogTURYTGF5b3V0fSA9IE9iamVjdC5hc3NpZ24oe30sIF9wcm92aWRlQ29tcG9uZW50cygpLCBwcm9wcy5jb21wb25lbnRzKTtcbiAgcmV0dXJuIE1EWExheW91dCA/IF9qc3hERVYoTURYTGF5b3V0LCBPYmplY3QuYXNzaWduKHt9LCBwcm9wcywge1xuICAgIGNoaWxkcmVuOiBfanN4REVWKF9jcmVhdGVNZHhDb250ZW50LCBwcm9wcywgdW5kZWZpbmVkLCBmYWxzZSwge1xuICAgICAgZmlsZU5hbWU6IFwiPHNvdXJjZS5qcz5cIlxuICAgIH0sIHRoaXMpXG4gIH0pLCB1bmRlZmluZWQsIGZhbHNlLCB7XG4gICAgZmlsZU5hbWU6IFwiPHNvdXJjZS5qcz5cIlxuICB9LCB0aGlzKSA6IF9jcmVhdGVNZHhDb250ZW50KHByb3BzKTtcbn1cbmV4cG9ydCBkZWZhdWx0IE1EWENvbnRlbnQ7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=