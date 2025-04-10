"use strict";
(self["webpackChunk_kie_tools_boxed_expression_component"] = self["webpackChunk_kie_tools_boxed_expression_component"] || []).push([["boxedExpressions-Invocation-Invocation-stories"],{

/***/ "./stories/boxedExpressions/Invocation/Invocation.stories.tsx":
/*!********************************************************************!*\
  !*** ./stories/boxedExpressions/Invocation/Invocation.stories.tsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Base: () => (/* binding */ Base),
/* harmony export */   MonthlyInstallment: () => (/* binding */ MonthlyInstallment),
/* harmony export */   Nested: () => (/* binding */ Nested),
/* harmony export */   Readonly: () => (/* binding */ Readonly),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _src_BoxedExpressionEditor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/BoxedExpressionEditor */ "./src/BoxedExpressionEditor.tsx");
/* harmony import */ var _boxedExpressionStoriesWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../boxedExpressionStoriesWrapper */ "./stories/boxedExpressionStoriesWrapper.tsx");
/* harmony import */ var _misc_Empty_EmptyExpression_stories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../misc/Empty/EmptyExpression.stories */ "./stories/misc/Empty/EmptyExpression.stories.tsx");
/* harmony import */ var _src_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../src/api */ "./src/api/index.ts");
/* harmony import */ var _src_expressions_InvocationExpression_InvocationExpression__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../src/expressions/InvocationExpression/InvocationExpression */ "./src/expressions/InvocationExpression/InvocationExpression.tsx");
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;





const meta = {
  title: "Boxed Expressions/Invocation",
  component: _src_BoxedExpressionEditor__WEBPACK_IMPORTED_MODULE_0__.BoxedExpressionEditor,
  includeStories: /^[A-Z]/,
  excludeStories: ["BoxedExpressionEditorStory"]
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (meta);
const Base = {
  render: args => (0,_boxedExpressionStoriesWrapper__WEBPACK_IMPORTED_MODULE_1__.BoxedExpressionEditorStory)(),
  parameters: {
    exclude: ["dataTypes", "beeGwtService", "pmmlDocuments"]
  },
  args: {
    ..._misc_Empty_EmptyExpression_stories__WEBPACK_IMPORTED_MODULE_2__.Base.args,
    expression: {
      __$$element: "invocation",
      "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
      "@_label": "Expression Name",
      binding: [{
        parameter: {
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
          "@_name": _src_expressions_InvocationExpression_InvocationExpression__WEBPACK_IMPORTED_MODULE_4__.INVOCATION_EXPRESSION_DEFAULT_PARAMETER_NAME
        }
      }],
      expression: {
        "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
        __$$element: "literalExpression",
        text: {
          __$$text: "FUNCTION NAME"
        }
      }
    },
    isResetSupportedOnRootExpression: true
  }
};
const Readonly = {
  render: args => (0,_boxedExpressionStoriesWrapper__WEBPACK_IMPORTED_MODULE_1__.BoxedExpressionEditorStory)(),
  parameters: {
    exclude: ["dataTypes", "beeGwtService", "pmmlDocuments"]
  },
  args: {
    ..._misc_Empty_EmptyExpression_stories__WEBPACK_IMPORTED_MODULE_2__.Base.args,
    expression: {
      __$$element: "invocation",
      "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
      "@_label": "Expression Name",
      binding: [{
        parameter: {
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
          "@_name": _src_expressions_InvocationExpression_InvocationExpression__WEBPACK_IMPORTED_MODULE_4__.INVOCATION_EXPRESSION_DEFAULT_PARAMETER_NAME
        },
        expression: {
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
          __$$element: "literalExpression",
          text: {
            __$$text: "read only"
          }
        }
      }],
      expression: {
        "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
        __$$element: "literalExpression",
        text: {
          __$$text: "FUNCTION NAME"
        }
      }
    },
    isResetSupportedOnRootExpression: true,
    isReadOnly: true
  }
};
const MonthlyInstallment = {
  render: args => (0,_boxedExpressionStoriesWrapper__WEBPACK_IMPORTED_MODULE_1__.BoxedExpressionEditorStory)(),
  parameters: {
    exclude: ["dataTypes", "beeGwtService", "pmmlDocuments"]
  },
  args: {
    ..._misc_Empty_EmptyExpression_stories__WEBPACK_IMPORTED_MODULE_2__.Base.args,
    expression: {
      __$$element: "invocation",
      "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
      "@_label": "Monthly Installment",
      "@_typeRef": _src_api__WEBPACK_IMPORTED_MODULE_3__.DmnBuiltInDataType.Number,
      binding: [{
        parameter: {
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
          "@_name": "Rate",
          "@_typeRef": _src_api__WEBPACK_IMPORTED_MODULE_3__.DmnBuiltInDataType.Number
        },
        expression: {
          __$$element: "literalExpression",
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
          "@_label": "Rate",
          "@_typeRef": _src_api__WEBPACK_IMPORTED_MODULE_3__.DmnBuiltInDataType.Number,
          text: {
            __$$text: "0.08"
          }
        }
      }, {
        parameter: {
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
          "@_name": "Term",
          "@_typeRef": _src_api__WEBPACK_IMPORTED_MODULE_3__.DmnBuiltInDataType.Number
        },
        expression: {
          __$$element: "literalExpression",
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
          "@_label": "Term",
          "@_typeRef": _src_api__WEBPACK_IMPORTED_MODULE_3__.DmnBuiltInDataType.Number,
          text: {
            __$$text: "36"
          }
        }
      }, {
        parameter: {
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
          "@_name": "Amount",
          "@_typeRef": _src_api__WEBPACK_IMPORTED_MODULE_3__.DmnBuiltInDataType.Number
        },
        expression: {
          __$$element: "literalExpression",
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
          "@_label": "Amount",
          "@_typeRef": _src_api__WEBPACK_IMPORTED_MODULE_3__.DmnBuiltInDataType.Number,
          text: {
            __$$text: "10000"
          }
        }
      }],
      expression: {
        "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
        __$$element: "literalExpression",
        text: {
          __$$text: "Installment Calculation"
        }
      }
    },
    isResetSupportedOnRootExpression: false
  }
};
const Nested = {
  render: args => (0,_boxedExpressionStoriesWrapper__WEBPACK_IMPORTED_MODULE_1__.BoxedExpressionEditorStory)(),
  parameters: {
    exclude: ["dataTypes", "beeGwtService", "pmmlDocuments"]
  },
  args: {
    ..._misc_Empty_EmptyExpression_stories__WEBPACK_IMPORTED_MODULE_2__.Base.args,
    expression: {
      __$$element: "context",
      "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
      "@_label": "Expression Name",
      contextEntry: [{
        "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
        variable: {
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
          "@_name": "ContextEntry-1"
        },
        expression: {
          __$$element: "invocation",
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
          "@_label": "Expression Name",
          binding: [{
            parameter: {
              "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
              "@_name": _src_expressions_InvocationExpression_InvocationExpression__WEBPACK_IMPORTED_MODULE_4__.INVOCATION_EXPRESSION_DEFAULT_PARAMETER_NAME
            }
          }],
          expression: {
            __$$element: "literalExpression",
            "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
            text: {
              __$$text: "FUNCTION"
            }
          }
        }
      }]
    },
    isResetSupportedOnRootExpression: false
  }
};
Base.parameters = {
  ...Base.parameters,
  docs: {
    ...((_a = Base.parameters) === null || _a === void 0 ? void 0 : _a.docs),
    source: {
      originalSource: "{\n  render: args => BoxedExpressionEditorStory(),\n  parameters: {\n    exclude: [\"dataTypes\", \"beeGwtService\", \"pmmlDocuments\"]\n  },\n  args: {\n    ...EmptyExpression.args,\n    expression: {\n      __$$element: \"invocation\",\n      \"@_id\": generateUuid(),\n      \"@_label\": \"Expression Name\",\n      binding: [{\n        parameter: {\n          \"@_id\": generateUuid(),\n          \"@_name\": INVOCATION_EXPRESSION_DEFAULT_PARAMETER_NAME\n        }\n      }],\n      expression: {\n        \"@_id\": generateUuid(),\n        __$$element: \"literalExpression\",\n        text: {\n          __$$text: \"FUNCTION NAME\"\n        }\n      }\n    },\n    isResetSupportedOnRootExpression: true\n  }\n}",
      ...((_c = (_b = Base.parameters) === null || _b === void 0 ? void 0 : _b.docs) === null || _c === void 0 ? void 0 : _c.source)
    }
  }
};
Readonly.parameters = {
  ...Readonly.parameters,
  docs: {
    ...((_d = Readonly.parameters) === null || _d === void 0 ? void 0 : _d.docs),
    source: {
      originalSource: "{\n  render: args => BoxedExpressionEditorStory(),\n  parameters: {\n    exclude: [\"dataTypes\", \"beeGwtService\", \"pmmlDocuments\"]\n  },\n  args: {\n    ...EmptyExpression.args,\n    expression: {\n      __$$element: \"invocation\",\n      \"@_id\": generateUuid(),\n      \"@_label\": \"Expression Name\",\n      binding: [{\n        parameter: {\n          \"@_id\": generateUuid(),\n          \"@_name\": INVOCATION_EXPRESSION_DEFAULT_PARAMETER_NAME\n        },\n        expression: {\n          \"@_id\": generateUuid(),\n          __$$element: \"literalExpression\",\n          text: {\n            __$$text: \"read only\"\n          }\n        }\n      }],\n      expression: {\n        \"@_id\": generateUuid(),\n        __$$element: \"literalExpression\",\n        text: {\n          __$$text: \"FUNCTION NAME\"\n        }\n      }\n    },\n    isResetSupportedOnRootExpression: true,\n    isReadOnly: true\n  }\n}",
      ...((_f = (_e = Readonly.parameters) === null || _e === void 0 ? void 0 : _e.docs) === null || _f === void 0 ? void 0 : _f.source)
    }
  }
};
MonthlyInstallment.parameters = {
  ...MonthlyInstallment.parameters,
  docs: {
    ...((_g = MonthlyInstallment.parameters) === null || _g === void 0 ? void 0 : _g.docs),
    source: {
      originalSource: "{\n  render: args => BoxedExpressionEditorStory(),\n  parameters: {\n    exclude: [\"dataTypes\", \"beeGwtService\", \"pmmlDocuments\"]\n  },\n  args: {\n    ...EmptyExpression.args,\n    expression: {\n      __$$element: \"invocation\",\n      \"@_id\": generateUuid(),\n      \"@_label\": \"Monthly Installment\",\n      \"@_typeRef\": DmnBuiltInDataType.Number,\n      binding: [{\n        parameter: {\n          \"@_id\": generateUuid(),\n          \"@_name\": \"Rate\",\n          \"@_typeRef\": DmnBuiltInDataType.Number\n        },\n        expression: {\n          __$$element: \"literalExpression\",\n          \"@_id\": generateUuid(),\n          \"@_label\": \"Rate\",\n          \"@_typeRef\": DmnBuiltInDataType.Number,\n          text: {\n            __$$text: \"0.08\"\n          }\n        }\n      }, {\n        parameter: {\n          \"@_id\": generateUuid(),\n          \"@_name\": \"Term\",\n          \"@_typeRef\": DmnBuiltInDataType.Number\n        },\n        expression: {\n          __$$element: \"literalExpression\",\n          \"@_id\": generateUuid(),\n          \"@_label\": \"Term\",\n          \"@_typeRef\": DmnBuiltInDataType.Number,\n          text: {\n            __$$text: \"36\"\n          }\n        }\n      }, {\n        parameter: {\n          \"@_id\": generateUuid(),\n          \"@_name\": \"Amount\",\n          \"@_typeRef\": DmnBuiltInDataType.Number\n        },\n        expression: {\n          __$$element: \"literalExpression\",\n          \"@_id\": generateUuid(),\n          \"@_label\": \"Amount\",\n          \"@_typeRef\": DmnBuiltInDataType.Number,\n          text: {\n            __$$text: \"10000\"\n          }\n        }\n      }],\n      expression: {\n        \"@_id\": generateUuid(),\n        __$$element: \"literalExpression\",\n        text: {\n          __$$text: \"Installment Calculation\"\n        }\n      }\n    },\n    isResetSupportedOnRootExpression: false\n  }\n}",
      ...((_j = (_h = MonthlyInstallment.parameters) === null || _h === void 0 ? void 0 : _h.docs) === null || _j === void 0 ? void 0 : _j.source)
    }
  }
};
Nested.parameters = {
  ...Nested.parameters,
  docs: {
    ...((_k = Nested.parameters) === null || _k === void 0 ? void 0 : _k.docs),
    source: {
      originalSource: "{\n  render: args => BoxedExpressionEditorStory(),\n  parameters: {\n    exclude: [\"dataTypes\", \"beeGwtService\", \"pmmlDocuments\"]\n  },\n  args: {\n    ...EmptyExpression.args,\n    expression: {\n      __$$element: \"context\",\n      \"@_id\": generateUuid(),\n      \"@_label\": \"Expression Name\",\n      contextEntry: [{\n        \"@_id\": generateUuid(),\n        variable: {\n          \"@_id\": generateUuid(),\n          \"@_name\": \"ContextEntry-1\"\n        },\n        expression: {\n          __$$element: \"invocation\",\n          \"@_id\": generateUuid(),\n          \"@_label\": \"Expression Name\",\n          binding: [{\n            parameter: {\n              \"@_id\": generateUuid(),\n              \"@_name\": INVOCATION_EXPRESSION_DEFAULT_PARAMETER_NAME\n            }\n          }],\n          expression: {\n            __$$element: \"literalExpression\",\n            \"@_id\": generateUuid(),\n            text: {\n              __$$text: \"FUNCTION\"\n            }\n          }\n        }\n      }]\n    },\n    isResetSupportedOnRootExpression: false\n  }\n}",
      ...((_m = (_l = Nested.parameters) === null || _l === void 0 ? void 0 : _l.docs) === null || _m === void 0 ? void 0 : _m.source)
    }
  }
};
const __namedExportsOrder = ["Base", "Readonly", "MonthlyInstallment", "Nested"];

/***/ }),

/***/ "./stories/misc/Empty/EmptyExpression.stories.tsx":
/*!********************************************************!*\
  !*** ./stories/misc/Empty/EmptyExpression.stories.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Base: () => (/* binding */ Base),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _src_BoxedExpressionEditor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/BoxedExpressionEditor */ "./src/BoxedExpressionEditor.tsx");
/* harmony import */ var _boxedExpressionStoriesWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../boxedExpressionStoriesWrapper */ "./stories/boxedExpressionStoriesWrapper.tsx");
var _a, _b, _c;


const meta = {
  title: "Misc/Empty Boxed Expression",
  component: _src_BoxedExpressionEditor__WEBPACK_IMPORTED_MODULE_0__.BoxedExpressionEditor,
  includeStories: /^[A-Z]/
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (meta);
const Base = {
  render: args => (0,_boxedExpressionStoriesWrapper__WEBPACK_IMPORTED_MODULE_1__.BoxedExpressionEditorStory)(),
  args: {
    expressionHolderId: "_00000000-0000-0000-0000-000000000000",
    expression: undefined,
    widthsById: {},
    dataTypes: _boxedExpressionStoriesWrapper__WEBPACK_IMPORTED_MODULE_1__.dataTypes,
    beeGwtService: _boxedExpressionStoriesWrapper__WEBPACK_IMPORTED_MODULE_1__.beeGwtService,
    pmmlDocuments: _boxedExpressionStoriesWrapper__WEBPACK_IMPORTED_MODULE_1__.pmmlDocuments,
    isResetSupportedOnRootExpression: true
  }
};
Base.parameters = {
  ...Base.parameters,
  docs: {
    ...((_a = Base.parameters) === null || _a === void 0 ? void 0 : _a.docs),
    source: {
      originalSource: "{\n  render: args => BoxedExpressionEditorStory(),\n  args: {\n    expressionHolderId: \"_00000000-0000-0000-0000-000000000000\",\n    expression: undefined,\n    widthsById: {},\n    dataTypes,\n    beeGwtService,\n    pmmlDocuments,\n    isResetSupportedOnRootExpression: true\n  }\n}",
      ...((_c = (_b = Base.parameters) === null || _b === void 0 ? void 0 : _b.docs) === null || _c === void 0 ? void 0 : _c.source)
    }
  }
};
const __namedExportsOrder = ["Base"];

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm94ZWRFeHByZXNzaW9ucy1JbnZvY2F0aW9uLUludm9jYXRpb24tc3Rvcmllcy5mMGE2M2VhMS5pZnJhbWUuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CdUc7QUFDVTtBQUM5QjtBQUNmO0FBQzhEO0FBR2xJLE1BQU1PLElBQUksR0FBcUM7RUFDN0NDLEtBQUssRUFBRSw4QkFBOEI7RUFDckNDLFNBQVMsRUFBRVQsNkVBQXFCO0VBQ2hDVSxjQUFjLEVBQUUsUUFBUTtFQUN4QkMsY0FBYyxFQUFFLENBQUMsNEJBQTRCO0NBQzlDO0FBQ0QsaUVBQWVKLElBQUksRUFBQztBQUliLE1BQU1MLElBQUksR0FBVTtFQUN6QlUsTUFBTSxFQUFFQyxJQUFJLElBQUlaLDBGQUEwQixFQUFFO0VBQzVDYSxVQUFVLEVBQUU7SUFDVkMsT0FBTyxFQUFFLENBQUMsV0FBVyxFQUFFLGVBQWUsRUFBRSxlQUFlO0dBQ3hEO0VBQ0RGLElBQUksRUFBRTtJQUNKLEdBQUdWLHFFQUFlLENBQUNVLElBQUk7SUFDdkJHLFVBQVUsRUFBRTtNQUNWQyxXQUFXLEVBQUUsWUFBWTtNQUN6QixNQUFNLEVBQUVaLHNEQUFZLEVBQUU7TUFDdEIsU0FBUyxFQUFFLGlCQUFpQjtNQUM1QmEsT0FBTyxFQUFFLENBQUM7UUFDUkMsU0FBUyxFQUFFO1VBQ1QsTUFBTSxFQUFFZCxzREFBWSxFQUFFO1VBQ3RCLFFBQVEsRUFBRUMsb0lBQTRDQTs7T0FFekQsQ0FBQztNQUNGVSxVQUFVLEVBQUU7UUFDVixNQUFNLEVBQUVYLHNEQUFZLEVBQUU7UUFDdEJZLFdBQVcsRUFBRSxtQkFBbUI7UUFDaENHLElBQUksRUFBRTtVQUNKQyxRQUFRLEVBQUU7OztLQUdmO0lBQ0RDLGdDQUFnQyxFQUFFOztDQUVyQztBQUNNLE1BQU1DLFFBQVEsR0FBVTtFQUM3QlgsTUFBTSxFQUFFQyxJQUFJLElBQUlaLDBGQUEwQixFQUFFO0VBQzVDYSxVQUFVLEVBQUU7SUFDVkMsT0FBTyxF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dUJBQUFBLEVBQUEsQ0FBRUYsTUFBTTs7O0NBR3JDO0FBQUMsTUFBQWEsbUJBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Aa2llLXRvb2xzL2JveGVkLWV4cHJlc3Npb24tY29tcG9uZW50Ly4vc3Rvcmllcy9ib3hlZEV4cHJlc3Npb25zL0ludm9jYXRpb24vSW52b2NhdGlvbi5zdG9yaWVzLnRzeCIsIndlYnBhY2s6Ly9Aa2llLXRvb2xzL2JveGVkLWV4cHJlc3Npb24tY29tcG9uZW50Ly4vc3Rvcmllcy9taXNjL0VtcHR5L0VtcHR5RXhwcmVzc2lvbi5zdG9yaWVzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogTGljZW5zZWQgdG8gdGhlIEFwYWNoZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIChBU0YpIHVuZGVyIG9uZVxuICogb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuICBTZWUgdGhlIE5PVElDRSBmaWxlXG4gKiBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvblxuICogcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuICBUaGUgQVNGIGxpY2Vuc2VzIHRoaXMgZmlsZVxuICogdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZVxuICogXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4gKiB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZyxcbiAqIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXG4gKiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxuICogS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlXG4gKiBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zXG4gKiB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgdHlwZSB7IE1ldGEsIFN0b3J5T2JqIH0gZnJvbSBcIkBzdG9yeWJvb2svcmVhY3RcIjtcbmltcG9ydCB7IEJveGVkRXhwcmVzc2lvbkVkaXRvciwgQm94ZWRFeHByZXNzaW9uRWRpdG9yUHJvcHMgfSBmcm9tIFwiLi4vLi4vLi4vc3JjL0JveGVkRXhwcmVzc2lvbkVkaXRvclwiO1xuaW1wb3J0IHsgQm94ZWRFeHByZXNzaW9uRWRpdG9yU3RvcnksIEJveGVkRXhwcmVzc2lvbkVkaXRvclN0b3J5QXJncyB9IGZyb20gXCIuLi8uLi9ib3hlZEV4cHJlc3Npb25TdG9yaWVzV3JhcHBlclwiO1xuaW1wb3J0IHsgQmFzZSBhcyBFbXB0eUV4cHJlc3Npb24gfSBmcm9tIFwiLi4vLi4vbWlzYy9FbXB0eS9FbXB0eUV4cHJlc3Npb24uc3Rvcmllc1wiO1xuaW1wb3J0IHsgRG1uQnVpbHRJbkRhdGFUeXBlLCBnZW5lcmF0ZVV1aWQgfSBmcm9tIFwiLi4vLi4vLi4vc3JjL2FwaVwiO1xuaW1wb3J0IHsgSU5WT0NBVElPTl9FWFBSRVNTSU9OX0RFRkFVTFRfUEFSQU1FVEVSX05BTUUgfSBmcm9tIFwiLi4vLi4vLi4vc3JjL2V4cHJlc3Npb25zL0ludm9jYXRpb25FeHByZXNzaW9uL0ludm9jYXRpb25FeHByZXNzaW9uXCI7XG5cbi8vIE1vcmUgb24gaG93IHRvIHNldCB1cCBzdG9yaWVzIGF0OiBodHRwczovL3N0b3J5Ym9vay5qcy5vcmcvZG9jcy9yZWFjdC93cml0aW5nLXN0b3JpZXMvaW50cm9kdWN0aW9uI2RlZmF1bHQtZXhwb3J0XG5jb25zdCBtZXRhOiBNZXRhPEJveGVkRXhwcmVzc2lvbkVkaXRvclByb3BzPiA9IHtcbiAgdGl0bGU6IFwiQm94ZWQgRXhwcmVzc2lvbnMvSW52b2NhdGlvblwiLFxuICBjb21wb25lbnQ6IEJveGVkRXhwcmVzc2lvbkVkaXRvcixcbiAgaW5jbHVkZVN0b3JpZXM6IC9eW0EtWl0vLFxuICBleGNsdWRlU3RvcmllczogW1wiQm94ZWRFeHByZXNzaW9uRWRpdG9yU3RvcnlcIl1cbn07XG5leHBvcnQgZGVmYXVsdCBtZXRhO1xudHlwZSBTdG9yeSA9IFN0b3J5T2JqPEJveGVkRXhwcmVzc2lvbkVkaXRvclN0b3J5QXJncz47XG5cbi8vIE1vcmUgb24gd3JpdGluZyBzdG9yaWVzIHdpdGggYXJnczogaHR0cHM6Ly9zdG9yeWJvb2suanMub3JnL2RvY3MvcmVhY3Qvd3JpdGluZy1zdG9yaWVzL2FyZ3NcbmV4cG9ydCBjb25zdCBCYXNlOiBTdG9yeSA9IHtcbiAgcmVuZGVyOiBhcmdzID0+IEJveGVkRXhwcmVzc2lvbkVkaXRvclN0b3J5KCksXG4gIHBhcmFtZXRlcnM6IHtcbiAgICBleGNsdWRlOiBbXCJkYXRhVHlwZXNcIiwgXCJiZWVHd3RTZXJ2aWNlXCIsIFwicG1tbERvY3VtZW50c1wiXVxuICB9LFxuICBhcmdzOiB7XG4gICAgLi4uRW1wdHlFeHByZXNzaW9uLmFyZ3MsXG4gICAgZXhwcmVzc2lvbjoge1xuICAgICAgX18kJGVsZW1lbnQ6IFwiaW52b2NhdGlvblwiLFxuICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgXCJAX2xhYmVsXCI6IFwiRXhwcmVzc2lvbiBOYW1lXCIsXG4gICAgICBiaW5kaW5nOiBbe1xuICAgICAgICBwYXJhbWV0ZXI6IHtcbiAgICAgICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICAgICAgXCJAX25hbWVcIjogSU5WT0NBVElPTl9FWFBSRVNTSU9OX0RFRkFVTFRfUEFSQU1FVEVSX05BTUVcbiAgICAgICAgfVxuICAgICAgfV0sXG4gICAgICBleHByZXNzaW9uOiB7XG4gICAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICAgICAgX18kJGVsZW1lbnQ6IFwibGl0ZXJhbEV4cHJlc3Npb25cIixcbiAgICAgICAgdGV4dDoge1xuICAgICAgICAgIF9fJCR0ZXh0OiBcIkZVTkNUSU9OIE5BTUVcIlxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBpc1Jlc2V0U3VwcG9ydGVkT25Sb290RXhwcmVzc2lvbjogdHJ1ZVxuICB9XG59O1xuZXhwb3J0IGNvbnN0IFJlYWRvbmx5OiBTdG9yeSA9IHtcbiAgcmVuZGVyOiBhcmdzID0+IEJveGVkRXhwcmVzc2lvbkVkaXRvclN0b3J5KCksXG4gIHBhcmFtZXRlcnM6IHtcbiAgICBleGNsdWRlOiBbXCJkYXRhVHlwZXNcIiwgXCJiZWVHd3RTZXJ2aWNlXCIsIFwicG1tbERvY3VtZW50c1wiXVxuICB9LFxuICBhcmdzOiB7XG4gICAgLi4uRW1wdHlFeHByZXNzaW9uLmFyZ3MsXG4gICAgZXhwcmVzc2lvbjoge1xuICAgICAgX18kJGVsZW1lbnQ6IFwiaW52b2NhdGlvblwiLFxuICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgXCJAX2xhYmVsXCI6IFwiRXhwcmVzc2lvbiBOYW1lXCIsXG4gICAgICBiaW5kaW5nOiBbe1xuICAgICAgICBwYXJhbWV0ZXI6IHtcbiAgICAgICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICAgICAgXCJAX25hbWVcIjogSU5WT0NBVElPTl9FWFBSRVNTSU9OX0RFRkFVTFRfUEFSQU1FVEVSX05BTUVcbiAgICAgICAgfSxcbiAgICAgICAgZXhwcmVzc2lvbjoge1xuICAgICAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICAgICAgICBfXyQkZWxlbWVudDogXCJsaXRlcmFsRXhwcmVzc2lvblwiLFxuICAgICAgICAgIHRleHQ6IHtcbiAgICAgICAgICAgIF9fJCR0ZXh0OiBcInJlYWQgb25seVwiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XSxcbiAgICAgIGV4cHJlc3Npb246IHtcbiAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgICBfXyQkZWxlbWVudDogXCJsaXRlcmFsRXhwcmVzc2lvblwiLFxuICAgICAgICB0ZXh0OiB7XG4gICAgICAgICAgX18kJHRleHQ6IFwiRlVOQ1RJT04gTkFNRVwiXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGlzUmVzZXRTdXBwb3J0ZWRPblJvb3RFeHByZXNzaW9uOiB0cnVlLFxuICAgIGlzUmVhZE9ubHk6IHRydWVcbiAgfVxufTtcbmV4cG9ydCBjb25zdCBNb250aGx5SW5zdGFsbG1lbnQ6IFN0b3J5ID0ge1xuICByZW5kZXI6IGFyZ3MgPT4gQm94ZWRFeHByZXNzaW9uRWRpdG9yU3RvcnkoKSxcbiAgcGFyYW1ldGVyczoge1xuICAgIGV4Y2x1ZGU6IFtcImRhdGFUeXBlc1wiLCBcImJlZUd3dFNlcnZpY2VcIiwgXCJwbW1sRG9jdW1lbnRzXCJdXG4gIH0sXG4gIGFyZ3M6IHtcbiAgICAuLi5FbXB0eUV4cHJlc3Npb24uYXJncyxcbiAgICBleHByZXNzaW9uOiB7XG4gICAgICBfXyQkZWxlbWVudDogXCJpbnZvY2F0aW9uXCIsXG4gICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICBcIkBfbGFiZWxcIjogXCJNb250aGx5IEluc3RhbGxtZW50XCIsXG4gICAgICBcIkBfdHlwZVJlZlwiOiBEbW5CdWlsdEluRGF0YVR5cGUuTnVtYmVyLFxuICAgICAgYmluZGluZzogW3tcbiAgICAgICAgcGFyYW1ldGVyOiB7XG4gICAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgICAgIFwiQF9uYW1lXCI6IFwiUmF0ZVwiLFxuICAgICAgICAgIFwiQF90eXBlUmVmXCI6IERtbkJ1aWx0SW5EYXRhVHlwZS5OdW1iZXJcbiAgICAgICAgfSxcbiAgICAgICAgZXhwcmVzc2lvbjoge1xuICAgICAgICAgIF9fJCRlbGVtZW50OiBcImxpdGVyYWxFeHByZXNzaW9uXCIsXG4gICAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgICAgIFwiQF9sYWJlbFwiOiBcIlJhdGVcIixcbiAgICAgICAgICBcIkBfdHlwZVJlZlwiOiBEbW5CdWlsdEluRGF0YVR5cGUuTnVtYmVyLFxuICAgICAgICAgIHRleHQ6IHtcbiAgICAgICAgICAgIF9fJCR0ZXh0OiBcIjAuMDhcIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICBwYXJhbWV0ZXI6IHtcbiAgICAgICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICAgICAgXCJAX25hbWVcIjogXCJUZXJtXCIsXG4gICAgICAgICAgXCJAX3R5cGVSZWZcIjogRG1uQnVpbHRJbkRhdGFUeXBlLk51bWJlclxuICAgICAgICB9LFxuICAgICAgICBleHByZXNzaW9uOiB7XG4gICAgICAgICAgX18kJGVsZW1lbnQ6IFwibGl0ZXJhbEV4cHJlc3Npb25cIixcbiAgICAgICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICAgICAgXCJAX2xhYmVsXCI6IFwiVGVybVwiLFxuICAgICAgICAgIFwiQF90eXBlUmVmXCI6IERtbkJ1aWx0SW5EYXRhVHlwZS5OdW1iZXIsXG4gICAgICAgICAgdGV4dDoge1xuICAgICAgICAgICAgX18kJHRleHQ6IFwiMzZcIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICBwYXJhbWV0ZXI6IHtcbiAgICAgICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICAgICAgXCJAX25hbWVcIjogXCJBbW91bnRcIixcbiAgICAgICAgICBcIkBfdHlwZVJlZlwiOiBEbW5CdWlsdEluRGF0YVR5cGUuTnVtYmVyXG4gICAgICAgIH0sXG4gICAgICAgIGV4cHJlc3Npb246IHtcbiAgICAgICAgICBfXyQkZWxlbWVudDogXCJsaXRlcmFsRXhwcmVzc2lvblwiLFxuICAgICAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICAgICAgICBcIkBfbGFiZWxcIjogXCJBbW91bnRcIixcbiAgICAgICAgICBcIkBfdHlwZVJlZlwiOiBEbW5CdWlsdEluRGF0YVR5cGUuTnVtYmVyLFxuICAgICAgICAgIHRleHQ6IHtcbiAgICAgICAgICAgIF9fJCR0ZXh0OiBcIjEwMDAwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1dLFxuICAgICAgZXhwcmVzc2lvbjoge1xuICAgICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICAgIF9fJCRlbGVtZW50OiBcImxpdGVyYWxFeHByZXNzaW9uXCIsXG4gICAgICAgIHRleHQ6IHtcbiAgICAgICAgICBfXyQkdGV4dDogXCJJbnN0YWxsbWVudCBDYWxjdWxhdGlvblwiXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGlzUmVzZXRTdXBwb3J0ZWRPblJvb3RFeHByZXNzaW9uOiBmYWxzZVxuICB9XG59O1xuXG4vLyBNb3JlIG9uIHdyaXRpbmcgc3RvcmllcyB3aXRoIGFyZ3M6IGh0dHBzOi8vc3Rvcnlib29rLmpzLm9yZy9kb2NzL3JlYWN0L3dyaXRpbmctc3Rvcmllcy9hcmdzXG5leHBvcnQgY29uc3QgTmVzdGVkOiBTdG9yeSA9IHtcbiAgcmVuZGVyOiBhcmdzID0+IEJveGVkRXhwcmVzc2lvbkVkaXRvclN0b3J5KCksXG4gIHBhcmFtZXRlcnM6IHtcbiAgICBleGNsdWRlOiBbXCJkYXRhVHlwZXNcIiwgXCJiZWVHd3RTZXJ2aWNlXCIsIFwicG1tbERvY3VtZW50c1wiXVxuICB9LFxuICBhcmdzOiB7XG4gICAgLi4uRW1wdHlFeHByZXNzaW9uLmFyZ3MsXG4gICAgZXhwcmVzc2lvbjoge1xuICAgICAgX18kJGVsZW1lbnQ6IFwiY29udGV4dFwiLFxuICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgXCJAX2xhYmVsXCI6IFwiRXhwcmVzc2lvbiBOYW1lXCIsXG4gICAgICBjb250ZXh0RW50cnk6IFt7XG4gICAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICAgICAgdmFyaWFibGU6IHtcbiAgICAgICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICAgICAgXCJAX25hbWVcIjogXCJDb250ZXh0RW50cnktMVwiXG4gICAgICAgIH0sXG4gICAgICAgIGV4cHJlc3Npb246IHtcbiAgICAgICAgICBfXyQkZWxlbWVudDogXCJpbnZvY2F0aW9uXCIsXG4gICAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgICAgIFwiQF9sYWJlbFwiOiBcIkV4cHJlc3Npb24gTmFtZVwiLFxuICAgICAgICAgIGJpbmRpbmc6IFt7XG4gICAgICAgICAgICBwYXJhbWV0ZXI6IHtcbiAgICAgICAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgICAgICAgICBcIkBfbmFtZVwiOiBJTlZPQ0FUSU9OX0VYUFJFU1NJT05fREVGQVVMVF9QQVJBTUVURVJfTkFNRVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1dLFxuICAgICAgICAgIGV4cHJlc3Npb246IHtcbiAgICAgICAgICAgIF9fJCRlbGVtZW50OiBcImxpdGVyYWxFeHByZXNzaW9uXCIsXG4gICAgICAgICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICAgICAgICB0ZXh0OiB7XG4gICAgICAgICAgICAgIF9fJCR0ZXh0OiBcIkZVTkNUSU9OXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1dXG4gICAgfSxcbiAgICBpc1Jlc2V0U3VwcG9ydGVkT25Sb290RXhwcmVzc2lvbjogZmFsc2VcbiAgfVxufTtcbkJhc2UucGFyYW1ldGVycyA9IHtcbiAgLi4uQmFzZS5wYXJhbWV0ZXJzLFxuICBkb2NzOiB7XG4gICAgLi4uQmFzZS5wYXJhbWV0ZXJzPy5kb2NzLFxuICAgIHNvdXJjZToge1xuICAgICAgb3JpZ2luYWxTb3VyY2U6IFwie1xcbiAgcmVuZGVyOiBhcmdzID0+IEJveGVkRXhwcmVzc2lvbkVkaXRvclN0b3J5KCksXFxuICBwYXJhbWV0ZXJzOiB7XFxuICAgIGV4Y2x1ZGU6IFtcXFwiZGF0YVR5cGVzXFxcIiwgXFxcImJlZUd3dFNlcnZpY2VcXFwiLCBcXFwicG1tbERvY3VtZW50c1xcXCJdXFxuICB9LFxcbiAgYXJnczoge1xcbiAgICAuLi5FbXB0eUV4cHJlc3Npb24uYXJncyxcXG4gICAgZXhwcmVzc2lvbjoge1xcbiAgICAgIF9fJCRlbGVtZW50OiBcXFwiaW52b2NhdGlvblxcXCIsXFxuICAgICAgXFxcIkBfaWRcXFwiOiBnZW5lcmF0ZVV1aWQoKSxcXG4gICAgICBcXFwiQF9sYWJlbFxcXCI6IFxcXCJFeHByZXNzaW9uIE5hbWVcXFwiLFxcbiAgICAgIGJpbmRpbmc6IFt7XFxuICAgICAgICBwYXJhbWV0ZXI6IHtcXG4gICAgICAgICAgXFxcIkBfaWRcXFwiOiBnZW5lcmF0ZVV1aWQoKSxcXG4gICAgICAgICAgXFxcIkBfbmFtZVxcXCI6IElOVk9DQVRJT05fRVhQUkVTU0lPTl9ERUZBVUxUX1BBUkFNRVRFUl9OQU1FXFxuICAgICAgICB9XFxuICAgICAgfV0sXFxuICAgICAgZXhwcmVzc2lvbjoge1xcbiAgICAgICAgXFxcIkBfaWRcXFwiOiBnZW5lcmF0ZVV1aWQoKSxcXG4gICAgICAgIF9fJCRlbGVtZW50OiBcXFwibGl0ZXJhbEV4cHJlc3Npb25cXFwiLFxcbiAgICAgICAgdGV4dDoge1xcbiAgICAgICAgICBfXyQkdGV4dDogXFxcIkZVTkNUSU9OIE5BTUVcXFwiXFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9LFxcbiAgICBpc1Jlc2V0U3VwcG9ydGVkT25Sb290RXhwcmVzc2lvbjogdHJ1ZVxcbiAgfVxcbn1cIixcbiAgICAgIC4uLkJhc2UucGFyYW1ldGVycz8uZG9jcz8uc291cmNlXG4gICAgfVxuICB9XG59O1xuUmVhZG9ubHkucGFyYW1ldGVycyA9IHtcbiAgLi4uUmVhZG9ubHkucGFyYW1ldGVycyxcbiAgZG9jczoge1xuICAgIC4uLlJlYWRvbmx5LnBhcmFtZXRlcnM/LmRvY3MsXG4gICAgc291cmNlOiB7XG4gICAgICBvcmlnaW5hbFNvdXJjZTogXCJ7XFxuICByZW5kZXI6IGFyZ3MgPT4gQm94ZWRFeHByZXNzaW9uRWRpdG9yU3RvcnkoKSxcXG4gIHBhcmFtZXRlcnM6IHtcXG4gICAgZXhjbHVkZTogW1xcXCJkYXRhVHlwZXNcXFwiLCBcXFwiYmVlR3d0U2VydmljZVxcXCIsIFxcXCJwbW1sRG9jdW1lbnRzXFxcIl1cXG4gIH0sXFxuICBhcmdzOiB7XFxuICAgIC4uLkVtcHR5RXhwcmVzc2lvbi5hcmdzLFxcbiAgICBleHByZXNzaW9uOiB7XFxuICAgICAgX18kJGVsZW1lbnQ6IFxcXCJpbnZvY2F0aW9uXFxcIixcXG4gICAgICBcXFwiQF9pZFxcXCI6IGdlbmVyYXRlVXVpZCgpLFxcbiAgICAgIFxcXCJAX2xhYmVsXFxcIjogXFxcIkV4cHJlc3Npb24gTmFtZVxcXCIsXFxuICAgICAgYmluZGluZzogW3tcXG4gICAgICAgIHBhcmFtZXRlcjoge1xcbiAgICAgICAgICBcXFwiQF9pZFxcXCI6IGdlbmVyYXRlVXVpZCgpLFxcbiAgICAgICAgICBcXFwiQF9uYW1lXFxcIjogSU5WT0NBVElPTl9FWFBSRVNTSU9OX0RFRkFVTFRfUEFSQU1FVEVSX05BTUVcXG4gICAgICAgIH0sXFxuICAgICAgICBleHByZXNzaW9uOiB7XFxuICAgICAgICAgIFxcXCJAX2lkXFxcIjogZ2VuZXJhdGVVdWlkKCksXFxuICAgICAgICAgIF9fJCRlbGVtZW50OiBcXFwibGl0ZXJhbEV4cHJlc3Npb25cXFwiLFxcbiAgICAgICAgICB0ZXh0OiB7XFxuICAgICAgICAgICAgX18kJHRleHQ6IFxcXCJyZWFkIG9ubHlcXFwiXFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICB9XSxcXG4gICAgICBleHByZXNzaW9uOiB7XFxuICAgICAgICBcXFwiQF9pZFxcXCI6IGdlbmVyYXRlVXVpZCgpLFxcbiAgICAgICAgX18kJGVsZW1lbnQ6IFxcXCJsaXRlcmFsRXhwcmVzc2lvblxcXCIsXFxuICAgICAgICB0ZXh0OiB7XFxuICAgICAgICAgIF9fJCR0ZXh0OiBcXFwiRlVOQ1RJT04gTkFNRVxcXCJcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH0sXFxuICAgIGlzUmVzZXRTdXBwb3J0ZWRPblJvb3RFeHByZXNzaW9uOiB0cnVlLFxcbiAgICBpc1JlYWRPbmx5OiB0cnVlXFxuICB9XFxufVwiLFxuICAgICAgLi4uUmVhZG9ubHkucGFyYW1ldGVycz8uZG9jcz8uc291cmNlXG4gICAgfVxuICB9XG59O1xuTW9udGhseUluc3RhbGxtZW50LnBhcmFtZXRlcnMgPSB7XG4gIC4uLk1vbnRobHlJbnN0YWxsbWVudC5wYXJhbWV0ZXJzLFxuICBkb2NzOiB7XG4gICAgLi4uTW9udGhseUluc3RhbGxtZW50LnBhcmFtZXRlcnM/LmRvY3MsXG4gICAgc291cmNlOiB7XG4gICAgICBvcmlnaW5hbFNvdXJjZTogXCJ7XFxuICByZW5kZXI6IGFyZ3MgPT4gQm94ZWRFeHByZXNzaW9uRWRpdG9yU3RvcnkoKSxcXG4gIHBhcmFtZXRlcnM6IHtcXG4gICAgZXhjbHVkZTogW1xcXCJkYXRhVHlwZXNcXFwiLCBcXFwiYmVlR3d0U2VydmljZVxcXCIsIFxcXCJwbW1sRG9jdW1lbnRzXFxcIl1cXG4gIH0sXFxuICBhcmdzOiB7XFxuICAgIC4uLkVtcHR5RXhwcmVzc2lvbi5hcmdzLFxcbiAgICBleHByZXNzaW9uOiB7XFxuICAgICAgX18kJGVsZW1lbnQ6IFxcXCJpbnZvY2F0aW9uXFxcIixcXG4gICAgICBcXFwiQF9pZFxcXCI6IGdlbmVyYXRlVXVpZCgpLFxcbiAgICAgIFxcXCJAX2xhYmVsXFxcIjogXFxcIk1vbnRobHkgSW5zdGFsbG1lbnRcXFwiLFxcbiAgICAgIFxcXCJAX3R5cGVSZWZcXFwiOiBEbW5CdWlsdEluRGF0YVR5cGUuTnVtYmVyLFxcbiAgICAgIGJpbmRpbmc6IFt7XFxuICAgICAgICBwYXJhbWV0ZXI6IHtcXG4gICAgICAgICAgXFxcIkBfaWRcXFwiOiBnZW5lcmF0ZVV1aWQoKSxcXG4gICAgICAgICAgXFxcIkBfbmFtZVxcXCI6IFxcXCJSYXRlXFxcIixcXG4gICAgICAgICAgXFxcIkBfdHlwZVJlZlxcXCI6IERtbkJ1aWx0SW5EYXRhVHlwZS5OdW1iZXJcXG4gICAgICAgIH0sXFxuICAgICAgICBleHByZXNzaW9uOiB7XFxuICAgICAgICAgIF9fJCRlbGVtZW50OiBcXFwibGl0ZXJhbEV4cHJlc3Npb25cXFwiLFxcbiAgICAgICAgICBcXFwiQF9pZFxcXCI6IGdlbmVyYXRlVXVpZCgpLFxcbiAgICAgICAgICBcXFwiQF9sYWJlbFxcXCI6IFxcXCJSYXRlXFxcIixcXG4gICAgICAgICAgXFxcIkBfdHlwZVJlZlxcXCI6IERtbkJ1aWx0SW5EYXRhVHlwZS5OdW1iZXIsXFxuICAgICAgICAgIHRleHQ6IHtcXG4gICAgICAgICAgICBfXyQkdGV4dDogXFxcIjAuMDhcXFwiXFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICB9LCB7XFxuICAgICAgICBwYXJhbWV0ZXI6IHtcXG4gICAgICAgICAgXFxcIkBfaWRcXFwiOiBnZW5lcmF0ZVV1aWQoKSxcXG4gICAgICAgICAgXFxcIkBfbmFtZVxcXCI6IFxcXCJUZXJtXFxcIixcXG4gICAgICAgICAgXFxcIkBfdHlwZVJlZlxcXCI6IERtbkJ1aWx0SW5EYXRhVHlwZS5OdW1iZXJcXG4gICAgICAgIH0sXFxuICAgICAgICBleHByZXNzaW9uOiB7XFxuICAgICAgICAgIF9fJCRlbGVtZW50OiBcXFwibGl0ZXJhbEV4cHJlc3Npb25cXFwiLFxcbiAgICAgICAgICBcXFwiQF9pZFxcXCI6IGdlbmVyYXRlVXVpZCgpLFxcbiAgICAgICAgICBcXFwiQF9sYWJlbFxcXCI6IFxcXCJUZXJtXFxcIixcXG4gICAgICAgICAgXFxcIkBfdHlwZVJlZlxcXCI6IERtbkJ1aWx0SW5EYXRhVHlwZS5OdW1iZXIsXFxuICAgICAgICAgIHRleHQ6IHtcXG4gICAgICAgICAgICBfXyQkdGV4dDogXFxcIjM2XFxcIlxcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgfSwge1xcbiAgICAgICAgcGFyYW1ldGVyOiB7XFxuICAgICAgICAgIFxcXCJAX2lkXFxcIjogZ2VuZXJhdGVVdWlkKCksXFxuICAgICAgICAgIFxcXCJAX25hbWVcXFwiOiBcXFwiQW1vdW50XFxcIixcXG4gICAgICAgICAgXFxcIkBfdHlwZVJlZlxcXCI6IERtbkJ1aWx0SW5EYXRhVHlwZS5OdW1iZXJcXG4gICAgICAgIH0sXFxuICAgICAgICBleHByZXNzaW9uOiB7XFxuICAgICAgICAgIF9fJCRlbGVtZW50OiBcXFwibGl0ZXJhbEV4cHJlc3Npb25cXFwiLFxcbiAgICAgICAgICBcXFwiQF9pZFxcXCI6IGdlbmVyYXRlVXVpZCgpLFxcbiAgICAgICAgICBcXFwiQF9sYWJlbFxcXCI6IFxcXCJBbW91bnRcXFwiLFxcbiAgICAgICAgICBcXFwiQF90eXBlUmVmXFxcIjogRG1uQnVpbHRJbkRhdGFUeXBlLk51bWJlcixcXG4gICAgICAgICAgdGV4dDoge1xcbiAgICAgICAgICAgIF9fJCR0ZXh0OiBcXFwiMTAwMDBcXFwiXFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICB9XSxcXG4gICAgICBleHByZXNzaW9uOiB7XFxuICAgICAgICBcXFwiQF9pZFxcXCI6IGdlbmVyYXRlVXVpZCgpLFxcbiAgICAgICAgX18kJGVsZW1lbnQ6IFxcXCJsaXRlcmFsRXhwcmVzc2lvblxcXCIsXFxuICAgICAgICB0ZXh0OiB7XFxuICAgICAgICAgIF9fJCR0ZXh0OiBcXFwiSW5zdGFsbG1lbnQgQ2FsY3VsYXRpb25cXFwiXFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9LFxcbiAgICBpc1Jlc2V0U3VwcG9ydGVkT25Sb290RXhwcmVzc2lvbjogZmFsc2VcXG4gIH1cXG59XCIsXG4gICAgICAuLi5Nb250aGx5SW5zdGFsbG1lbnQucGFyYW1ldGVycz8uZG9jcz8uc291cmNlXG4gICAgfVxuICB9XG59O1xuTmVzdGVkLnBhcmFtZXRlcnMgPSB7XG4gIC4uLk5lc3RlZC5wYXJhbWV0ZXJzLFxuICBkb2NzOiB7XG4gICAgLi4uTmVzdGVkLnBhcmFtZXRlcnM/LmRvY3MsXG4gICAgc291cmNlOiB7XG4gICAgICBvcmlnaW5hbFNvdXJjZTogXCJ7XFxuICByZW5kZXI6IGFyZ3MgPT4gQm94ZWRFeHByZXNzaW9uRWRpdG9yU3RvcnkoKSxcXG4gIHBhcmFtZXRlcnM6IHtcXG4gICAgZXhjbHVkZTogW1xcXCJkYXRhVHlwZXNcXFwiLCBcXFwiYmVlR3d0U2VydmljZVxcXCIsIFxcXCJwbW1sRG9jdW1lbnRzXFxcIl1cXG4gIH0sXFxuICBhcmdzOiB7XFxuICAgIC4uLkVtcHR5RXhwcmVzc2lvbi5hcmdzLFxcbiAgICBleHByZXNzaW9uOiB7XFxuICAgICAgX18kJGVsZW1lbnQ6IFxcXCJjb250ZXh0XFxcIixcXG4gICAgICBcXFwiQF9pZFxcXCI6IGdlbmVyYXRlVXVpZCgpLFxcbiAgICAgIFxcXCJAX2xhYmVsXFxcIjogXFxcIkV4cHJlc3Npb24gTmFtZVxcXCIsXFxuICAgICAgY29udGV4dEVudHJ5OiBbe1xcbiAgICAgICAgXFxcIkBfaWRcXFwiOiBnZW5lcmF0ZVV1aWQoKSxcXG4gICAgICAgIHZhcmlhYmxlOiB7XFxuICAgICAgICAgIFxcXCJAX2lkXFxcIjogZ2VuZXJhdGVVdWlkKCksXFxuICAgICAgICAgIFxcXCJAX25hbWVcXFwiOiBcXFwiQ29udGV4dEVudHJ5LTFcXFwiXFxuICAgICAgICB9LFxcbiAgICAgICAgZXhwcmVzc2lvbjoge1xcbiAgICAgICAgICBfXyQkZWxlbWVudDogXFxcImludm9jYXRpb25cXFwiLFxcbiAgICAgICAgICBcXFwiQF9pZFxcXCI6IGdlbmVyYXRlVXVpZCgpLFxcbiAgICAgICAgICBcXFwiQF9sYWJlbFxcXCI6IFxcXCJFeHByZXNzaW9uIE5hbWVcXFwiLFxcbiAgICAgICAgICBiaW5kaW5nOiBbe1xcbiAgICAgICAgICAgIHBhcmFtZXRlcjoge1xcbiAgICAgICAgICAgICAgXFxcIkBfaWRcXFwiOiBnZW5lcmF0ZVV1aWQoKSxcXG4gICAgICAgICAgICAgIFxcXCJAX25hbWVcXFwiOiBJTlZPQ0FUSU9OX0VYUFJFU1NJT05fREVGQVVMVF9QQVJBTUVURVJfTkFNRVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgfV0sXFxuICAgICAgICAgIGV4cHJlc3Npb246IHtcXG4gICAgICAgICAgICBfXyQkZWxlbWVudDogXFxcImxpdGVyYWxFeHByZXNzaW9uXFxcIixcXG4gICAgICAgICAgICBcXFwiQF9pZFxcXCI6IGdlbmVyYXRlVXVpZCgpLFxcbiAgICAgICAgICAgIHRleHQ6IHtcXG4gICAgICAgICAgICAgIF9fJCR0ZXh0OiBcXFwiRlVOQ1RJT05cXFwiXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgfV1cXG4gICAgfSxcXG4gICAgaXNSZXNldFN1cHBvcnRlZE9uUm9vdEV4cHJlc3Npb246IGZhbHNlXFxuICB9XFxufVwiLFxuICAgICAgLi4uTmVzdGVkLnBhcmFtZXRlcnM/LmRvY3M/LnNvdXJjZVxuICAgIH1cbiAgfVxufTsiLCIvKlxuICogTGljZW5zZWQgdG8gdGhlIEFwYWNoZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIChBU0YpIHVuZGVyIG9uZVxuICogb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuICBTZWUgdGhlIE5PVElDRSBmaWxlXG4gKiBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvblxuICogcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuICBUaGUgQVNGIGxpY2Vuc2VzIHRoaXMgZmlsZVxuICogdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZVxuICogXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4gKiB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZyxcbiAqIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXG4gKiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxuICogS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlXG4gKiBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zXG4gKiB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgdHlwZSB7IE1ldGEsIFN0b3J5T2JqIH0gZnJvbSBcIkBzdG9yeWJvb2svcmVhY3RcIjtcbmltcG9ydCB7IEJveGVkRXhwcmVzc2lvbkVkaXRvciwgQm94ZWRFeHByZXNzaW9uRWRpdG9yUHJvcHMgfSBmcm9tIFwiLi4vLi4vLi4vc3JjL0JveGVkRXhwcmVzc2lvbkVkaXRvclwiO1xuaW1wb3J0IHsgYmVlR3d0U2VydmljZSwgQm94ZWRFeHByZXNzaW9uRWRpdG9yU3RvcnksIEJveGVkRXhwcmVzc2lvbkVkaXRvclN0b3J5QXJncywgZGF0YVR5cGVzLCBwbW1sRG9jdW1lbnRzIH0gZnJvbSBcIi4uLy4uL2JveGVkRXhwcmVzc2lvblN0b3JpZXNXcmFwcGVyXCI7XG5cbi8vIE1vcmUgb24gaG93IHRvIHNldCB1cCBzdG9yaWVzIGF0OiBodHRwczovL3N0b3J5Ym9vay5qcy5vcmcvZG9jcy9yZWFjdC93cml0aW5nLXN0b3JpZXMvaW50cm9kdWN0aW9uI2RlZmF1bHQtZXhwb3J0XG5jb25zdCBtZXRhOiBNZXRhPEJveGVkRXhwcmVzc2lvbkVkaXRvclByb3BzPiA9IHtcbiAgdGl0bGU6IFwiTWlzYy9FbXB0eSBCb3hlZCBFeHByZXNzaW9uXCIsXG4gIGNvbXBvbmVudDogQm94ZWRFeHByZXNzaW9uRWRpdG9yLFxuICBpbmNsdWRlU3RvcmllczogL15bQS1aXS9cbn07XG5leHBvcnQgZGVmYXVsdCBtZXRhO1xudHlwZSBTdG9yeSA9IFN0b3J5T2JqPEJveGVkRXhwcmVzc2lvbkVkaXRvclN0b3J5QXJncz47XG5cbi8vIE1vcmUgb24gd3JpdGluZyBzdG9yaWVzIHdpdGggYXJnczogaHR0cHM6Ly9zdG9yeWJvb2suanMub3JnL2RvY3MvcmVhY3Qvd3JpdGluZy1zdG9yaWVzL2FyZ3NcbmV4cG9ydCBjb25zdCBCYXNlOiBTdG9yeSA9IHtcbiAgcmVuZGVyOiBhcmdzID0+IEJveGVkRXhwcmVzc2lvbkVkaXRvclN0b3J5KCksXG4gIGFyZ3M6IHtcbiAgICBleHByZXNzaW9uSG9sZGVySWQ6IFwiXzAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMFwiLFxuICAgIGV4cHJlc3Npb246IHVuZGVmaW5lZCxcbiAgICB3aWR0aHNCeUlkOiB7fSxcbiAgICBkYXRhVHlwZXMsXG4gICAgYmVlR3d0U2VydmljZSxcbiAgICBwbW1sRG9jdW1lbnRzLFxuICAgIGlzUmVzZXRTdXBwb3J0ZWRPblJvb3RFeHByZXNzaW9uOiB0cnVlXG4gIH1cbn07XG5CYXNlLnBhcmFtZXRlcnMgPSB7XG4gIC4uLkJhc2UucGFyYW1ldGVycyxcbiAgZG9jczoge1xuICAgIC4uLkJhc2UucGFyYW1ldGVycz8uZG9jcyxcbiAgICBzb3VyY2U6IHtcbiAgICAgIG9yaWdpbmFsU291cmNlOiBcIntcXG4gIHJlbmRlcjogYXJncyA9PiBCb3hlZEV4cHJlc3Npb25FZGl0b3JTdG9yeSgpLFxcbiAgYXJnczoge1xcbiAgICBleHByZXNzaW9uSG9sZGVySWQ6IFxcXCJfMDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwXFxcIixcXG4gICAgZXhwcmVzc2lvbjogdW5kZWZpbmVkLFxcbiAgICB3aWR0aHNCeUlkOiB7fSxcXG4gICAgZGF0YVR5cGVzLFxcbiAgICBiZWVHd3RTZXJ2aWNlLFxcbiAgICBwbW1sRG9jdW1lbnRzLFxcbiAgICBpc1Jlc2V0U3VwcG9ydGVkT25Sb290RXhwcmVzc2lvbjogdHJ1ZVxcbiAgfVxcbn1cIixcbiAgICAgIC4uLkJhc2UucGFyYW1ldGVycz8uZG9jcz8uc291cmNlXG4gICAgfVxuICB9XG59OyJdLCJuYW1lcyI6WyJCb3hlZEV4cHJlc3Npb25FZGl0b3IiLCJCb3hlZEV4cHJlc3Npb25FZGl0b3JTdG9yeSIsIkJhc2UiLCJFbXB0eUV4cHJlc3Npb24iLCJEbW5CdWlsdEluRGF0YVR5cGUiLCJnZW5lcmF0ZVV1aWQiLCJJTlZPQ0FUSU9OX0VYUFJFU1NJT05fREVGQVVMVF9QQVJBTUVURVJfTkFNRSIsIm1ldGEiLCJ0aXRsZSIsImNvbXBvbmVudCIsImluY2x1ZGVTdG9yaWVzIiwiZXhjbHVkZVN0b3JpZXMiLCJyZW5kZXIiLCJhcmdzIiwicGFyYW1ldGVycyIsImV4Y2x1ZGUiLCJleHByZXNzaW9uIiwiX18kJGVsZW1lbnQiLCJiaW5kaW5nIiwicGFyYW1ldGVyIiwidGV4dCIsIl9fJCR0ZXh0IiwiaXNSZXNldFN1cHBvcnRlZE9uUm9vdEV4cHJlc3Npb24iLCJSZWFkb25seSIsImlzUmVhZE9ubHkiLCJNb250aGx5SW5zdGFsbG1lbnQiLCJOdW1iZXIiLCJOZXN0ZWQiLCJjb250ZXh0RW50cnkiLCJ2YXJpYWJsZSIsImRvY3MiLCJfYSIsInNvdXJjZSIsIm9yaWdpbmFsU291cmNlIiwiX2MiLCJfYiIsIl9kIiwiX2YiLCJfZSIsIl9nIiwiX2oiLCJfaCIsIl9rIiwiX20iLCJfbCIsIl9fbmFtZWRFeHBvcnRzT3JkZXIiLCJiZWVHd3RTZXJ2aWNlIiwiZGF0YVR5cGVzIiwicG1tbERvY3VtZW50cyIsImV4cHJlc3Npb25Ib2xkZXJJZCIsInVuZGVmaW5lZCIsIndpZHRoc0J5SWQiXSwic291cmNlUm9vdCI6IiJ9