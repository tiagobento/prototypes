"use strict";
(self["webpackChunk_kie_tools_boxed_expression_component"] = self["webpackChunk_kie_tools_boxed_expression_component"] || []).push([["boxedExpressions-Function-Function-stories"],{

/***/ "./stories/boxedExpressions/Function/Function.stories.tsx":
/*!****************************************************************!*\
  !*** ./stories/boxedExpressions/Function/Function.stories.tsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Base: () => (/* binding */ Base),
/* harmony export */   InstallmentCalculation: () => (/* binding */ InstallmentCalculation),
/* harmony export */   Nested: () => (/* binding */ Nested),
/* harmony export */   Readonly: () => (/* binding */ Readonly),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _src_BoxedExpressionEditor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/BoxedExpressionEditor */ "./src/BoxedExpressionEditor.tsx");
/* harmony import */ var _boxedExpressionStoriesWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../boxedExpressionStoriesWrapper */ "./stories/boxedExpressionStoriesWrapper.tsx");
/* harmony import */ var _misc_Empty_EmptyExpression_stories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../misc/Empty/EmptyExpression.stories */ "./stories/misc/Empty/EmptyExpression.stories.tsx");
/* harmony import */ var _src_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../src/api */ "./src/api/index.ts");
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;




const meta = {
  title: "Boxed Expressions/Function",
  component: _src_BoxedExpressionEditor__WEBPACK_IMPORTED_MODULE_0__.BoxedExpressionEditor,
  includeStories: /^[A-Z]/
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
      __$$element: "functionDefinition",
      "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
      "@_label": "Expression Name",
      "@_kind": _src_api__WEBPACK_IMPORTED_MODULE_3__.BoxedFunctionKind.Feel
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
      __$$element: "functionDefinition",
      "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
      "@_label": "Expression Name",
      "@_kind": _src_api__WEBPACK_IMPORTED_MODULE_3__.BoxedFunctionKind.Feel
    },
    isResetSupportedOnRootExpression: true,
    isReadOnly: true
  }
};
const InstallmentCalculation = {
  render: args => (0,_boxedExpressionStoriesWrapper__WEBPACK_IMPORTED_MODULE_1__.BoxedExpressionEditorStory)(),
  parameters: {
    exclude: ["dataTypes", "beeGwtService", "pmmlDocuments"]
  },
  args: {
    ..._misc_Empty_EmptyExpression_stories__WEBPACK_IMPORTED_MODULE_2__.Base.args,
    expression: {
      __$$element: "functionDefinition",
      "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
      "@_label": "Installment calculation",
      "@_typeRef": _src_api__WEBPACK_IMPORTED_MODULE_3__.DmnBuiltInDataType.Number,
      "@_kind": _src_api__WEBPACK_IMPORTED_MODULE_3__.BoxedFunctionKind.Feel,
      formalParameter: [{
        "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
        "@_name": "Amount",
        "@_typeRef": _src_api__WEBPACK_IMPORTED_MODULE_3__.DmnBuiltInDataType.Number
      }, {
        "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
        "@_name": "Rate",
        "@_typeRef": _src_api__WEBPACK_IMPORTED_MODULE_3__.DmnBuiltInDataType.Number
      }, {
        "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
        "@_name": "Term",
        "@_typeRef": _src_api__WEBPACK_IMPORTED_MODULE_3__.DmnBuiltInDataType.Number
      }],
      expression: {
        __$$element: "literalExpression",
        "@_id": "_ACDB9FB9-E16C-42CA-BBCC-DA1DADCFD7E2",
        text: {
          __$$text: `(Amount*Rate/12) / (1-(1+Rate/12)**-Term)`
        }
      }
    },
    isResetSupportedOnRootExpression: false,
    widthsById: {
      "_ACDB9FB9-E16C-42CA-BBCC-DA1DADCFD7E2": [347]
    }
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
          __$$element: "functionDefinition",
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
          "@_label": "Expression Name",
          "@_kind": _src_api__WEBPACK_IMPORTED_MODULE_3__.BoxedFunctionKind.Feel,
          formalParameter: []
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
      originalSource: "{\n  render: args => BoxedExpressionEditorStory(),\n  parameters: {\n    exclude: [\"dataTypes\", \"beeGwtService\", \"pmmlDocuments\"]\n  },\n  args: {\n    ...EmptyExpression.args,\n    expression: {\n      __$$element: \"functionDefinition\",\n      \"@_id\": generateUuid(),\n      \"@_label\": \"Expression Name\",\n      \"@_kind\": BoxedFunctionKind.Feel\n    },\n    isResetSupportedOnRootExpression: true\n  }\n}",
      ...((_c = (_b = Base.parameters) === null || _b === void 0 ? void 0 : _b.docs) === null || _c === void 0 ? void 0 : _c.source)
    }
  }
};
Readonly.parameters = {
  ...Readonly.parameters,
  docs: {
    ...((_d = Readonly.parameters) === null || _d === void 0 ? void 0 : _d.docs),
    source: {
      originalSource: "{\n  render: args => BoxedExpressionEditorStory(),\n  parameters: {\n    exclude: [\"dataTypes\", \"beeGwtService\", \"pmmlDocuments\"]\n  },\n  args: {\n    ...EmptyExpression.args,\n    expression: {\n      __$$element: \"functionDefinition\",\n      \"@_id\": generateUuid(),\n      \"@_label\": \"Expression Name\",\n      \"@_kind\": BoxedFunctionKind.Feel\n    },\n    isResetSupportedOnRootExpression: true,\n    isReadOnly: true\n  }\n}",
      ...((_f = (_e = Readonly.parameters) === null || _e === void 0 ? void 0 : _e.docs) === null || _f === void 0 ? void 0 : _f.source)
    }
  }
};
InstallmentCalculation.parameters = {
  ...InstallmentCalculation.parameters,
  docs: {
    ...((_g = InstallmentCalculation.parameters) === null || _g === void 0 ? void 0 : _g.docs),
    source: {
      originalSource: "{\n  render: args => BoxedExpressionEditorStory(),\n  parameters: {\n    exclude: [\"dataTypes\", \"beeGwtService\", \"pmmlDocuments\"]\n  },\n  args: {\n    ...EmptyExpression.args,\n    expression: {\n      __$$element: \"functionDefinition\",\n      \"@_id\": generateUuid(),\n      \"@_label\": \"Installment calculation\",\n      \"@_typeRef\": DmnBuiltInDataType.Number,\n      \"@_kind\": BoxedFunctionKind.Feel,\n      formalParameter: [{\n        \"@_id\": generateUuid(),\n        \"@_name\": \"Amount\",\n        \"@_typeRef\": DmnBuiltInDataType.Number\n      }, {\n        \"@_id\": generateUuid(),\n        \"@_name\": \"Rate\",\n        \"@_typeRef\": DmnBuiltInDataType.Number\n      }, {\n        \"@_id\": generateUuid(),\n        \"@_name\": \"Term\",\n        \"@_typeRef\": DmnBuiltInDataType.Number\n      }],\n      expression: {\n        __$$element: \"literalExpression\",\n        \"@_id\": \"_ACDB9FB9-E16C-42CA-BBCC-DA1DADCFD7E2\",\n        text: {\n          __$$text: `(Amount*Rate/12) / (1-(1+Rate/12)**-Term)`\n        }\n      }\n    },\n    isResetSupportedOnRootExpression: false,\n    widthsById: {\n      \"_ACDB9FB9-E16C-42CA-BBCC-DA1DADCFD7E2\": [347]\n    }\n  }\n}",
      ...((_j = (_h = InstallmentCalculation.parameters) === null || _h === void 0 ? void 0 : _h.docs) === null || _j === void 0 ? void 0 : _j.source)
    }
  }
};
Nested.parameters = {
  ...Nested.parameters,
  docs: {
    ...((_k = Nested.parameters) === null || _k === void 0 ? void 0 : _k.docs),
    source: {
      originalSource: "{\n  render: args => BoxedExpressionEditorStory(),\n  parameters: {\n    exclude: [\"dataTypes\", \"beeGwtService\", \"pmmlDocuments\"]\n  },\n  args: {\n    ...EmptyExpression.args,\n    expression: {\n      __$$element: \"context\",\n      \"@_id\": generateUuid(),\n      \"@_label\": \"Expression Name\",\n      contextEntry: [{\n        \"@_id\": generateUuid(),\n        variable: {\n          \"@_id\": generateUuid(),\n          \"@_name\": \"ContextEntry-1\"\n        },\n        expression: {\n          __$$element: \"functionDefinition\",\n          \"@_id\": generateUuid(),\n          \"@_label\": \"Expression Name\",\n          \"@_kind\": BoxedFunctionKind.Feel,\n          formalParameter: []\n        }\n      }]\n    },\n    isResetSupportedOnRootExpression: false\n  }\n}",
      ...((_m = (_l = Nested.parameters) === null || _l === void 0 ? void 0 : _l.docs) === null || _m === void 0 ? void 0 : _m.source)
    }
  }
};
const __namedExportsOrder = ["Base", "Readonly", "InstallmentCalculation", "Nested"];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm94ZWRFeHByZXNzaW9ucy1GdW5jdGlvbi1GdW5jdGlvbi1zdG9yaWVzLmM2ZGVjNGYzLmlmcmFtZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQnVHO0FBQ1U7QUFDOUI7QUFDSTtBQUd2RixNQUFNTyxJQUFJLEdBQXFDO0VBQzdDQyxLQUFLLEVBQUUsNEJBQTRCO0VBQ25DQyxTQUFTLEVBQUVULDZFQUFxQjtFQUNoQ1UsY0FBYyxFQUFFO0NBQ2pCO0FBQ0QsaUVBQWVILElBQUksRUFBQztBQUliLE1BQU1MLElBQUksR0FBVTtFQUN6QlMsTUFBTSxFQUFFQyxJQUFJLElBQUlYLDBGQUEwQixFQUFFO0VBQzVDWSxVQUFVLEVBQUU7SUFDVkMsT0FBTyxFQUFFLENBQUMsV0FBVyxFQUFFLGVBQWUsRUFBRSxlQUFlO0dBQ3hEO0VBQ0RGLElBQUksRUFBRTtJQUNKLEdBQUdULHFFQUFlLENBQUNTLElBQUk7SUFDdkJHLFVBQVUsRUFBRTtNQUNWQyxXQUFXLEVBQUUsb0JBQW9CO01BQ2pDLE1BQU0sRUFBRVYsc0RBQVksRUFBRTtNQUN0QixTQUFTLEVBQUUsaUJBQWlCO01BQzVCLFFBQVEsRUFBRUYsdURBQWlCLENBQUNhO0tBQzdCO0lBQ0RDLGdDQUFnQyxFQUFFOztDQUVyQztBQUNNLE1BQU1DLFFBQVEsR0FBVTtFQUM3QlIsTUFBTSxFQUFFQyxJQUFJLElBQUlYLDBGQUEwQixFQUFFO0VBQzVDWSxVQUFVLEVBQUU7SUFDVkMsT0FBTyxFQUFFLENBQUMsV0FBVyxFQUFFLGVBQWUsRUFBRSxlQUFlO0dBQ3hEO0VBQ0RGLElBQUksRUFBRTtJQUNKLEdBQUdULHFFQUFlLENBQUNTLElBQUk7SUFDdkJHLFVBQVUsRUFBRTtNQUNWQyxXQUFXLEVBQUUsb0JBQW9CO01BQ2pDLE1BQU0sRUFBRVYsc0RBQVksRUFBRTtNQUN0QixTQUFTLEVBQUUsaUJBQWlCO01BQzVCLFFBQVEsRUFBRUYsdURBQWlCLENBQUNhO0tBQzdCO0lBQ0RD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QkFBQUEsRUFBQSxDQUFFWCxNQUFNOzs7Q0FHdkM7QUFBQyxNQUFBYSxtQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlKcUc7QUFDbUQ7QUFHMUosTUFBTXRDLElBQUksR0FBcUM7RUFDN0NDLEtBQUssRUFBRSw2QkFBNkI7RUFDcENDLFNBQVMsRUFBRVQsNkVBQXFCO0VBQ2hDVSxjQUFjLEVBQUU7Q0FDakI7QUFDRCxpRUFBZUgsSUFBSSxFQUFDO0FBSWIsTUFBTUwsSUFBSSxHQUFVO0VBQ3pCUyxNQUFNLEVBQUVDLElBQUksSUFBSVgsMEZBQTBCLEVBQUU7RUFDNUNXLElBQUksRUFBRTtJQUNKcUMsa0JBQWtCLEVBQUUsdUNBQXVDO0lBQzNEbEMsVUFBVSxFQUFFbUMsU0FBUztJQUNyQnhCLFVBQVUsRUFBRSxFQUFFO0lBQ2RxQixTQUFTO0lBQ1RELGFBQWE7SUFDYkUsYUFBYTtJQUNiOUIsZ0NBQWdDLEVBQUU7O0NBRXJDO0FBQ0RoQixJQUFJLENBQUNXLFVBQVUsR0FBRztFQUNoQixHQUFHWCxJQUFJLENBQUNXLFVBQVU7RUFDbEJpQixJQUFJLEVBQUU7SUFDSixJQUFHLENBQUFDLEVBQUEsR0FBQTdCLElBQUksQ0FBQ1csVUFBVSxjQUFBa0IsRUFBQSx1QkFBQUEsRUFBQSxDQUFFRCxJQUFJO0lBQ3hCRSxNQUFNLEVBQUU7TUFDTkMsY0FBYyxFQUFFLGdTQUFnUztNQUNoVCxJQUFHLENBQUFDLEVBQUEsSUFBQUMsRUFBQSxHQUFBakMsSUFBSSxDQUFDVyxVQUFVLGNBQUFzQixFQUFBLHVCQUFBQSxFQUFBLENBQUVMLElBQUksY0FBQUksRUFBQSx1QkFBQUEsRUFBQSxDQUFFRixNQUFNOzs7Q0FHckM7QUFBQyxNQUFBYSxtQkFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL0BraWUtdG9vbHMvYm94ZWQtZXhwcmVzc2lvbi1jb21wb25lbnQvLi9zdG9yaWVzL2JveGVkRXhwcmVzc2lvbnMvRnVuY3Rpb24vRnVuY3Rpb24uc3Rvcmllcy50c3giLCJ3ZWJwYWNrOi8vQGtpZS10b29scy9ib3hlZC1leHByZXNzaW9uLWNvbXBvbmVudC8uL3N0b3JpZXMvbWlzYy9FbXB0eS9FbXB0eUV4cHJlc3Npb24uc3Rvcmllcy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIExpY2Vuc2VkIHRvIHRoZSBBcGFjaGUgU29mdHdhcmUgRm91bmRhdGlvbiAoQVNGKSB1bmRlciBvbmVcbiAqIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiAgU2VlIHRoZSBOT1RJQ0UgZmlsZVxuICogZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb25cbiAqIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLiAgVGhlIEFTRiBsaWNlbnNlcyB0aGlzIGZpbGVcbiAqIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGVcbiAqIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuICogd2l0aCB0aGUgTGljZW5zZS4gIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsXG4gKiBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxuICogXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcbiAqIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZVxuICogc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9uc1xuICogdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHR5cGUgeyBNZXRhLCBTdG9yeU9iaiB9IGZyb20gXCJAc3Rvcnlib29rL3JlYWN0XCI7XG5pbXBvcnQgeyBCb3hlZEV4cHJlc3Npb25FZGl0b3IsIEJveGVkRXhwcmVzc2lvbkVkaXRvclByb3BzIH0gZnJvbSBcIi4uLy4uLy4uL3NyYy9Cb3hlZEV4cHJlc3Npb25FZGl0b3JcIjtcbmltcG9ydCB7IEJveGVkRXhwcmVzc2lvbkVkaXRvclN0b3J5LCBCb3hlZEV4cHJlc3Npb25FZGl0b3JTdG9yeUFyZ3MgfSBmcm9tIFwiLi4vLi4vYm94ZWRFeHByZXNzaW9uU3Rvcmllc1dyYXBwZXJcIjtcbmltcG9ydCB7IEJhc2UgYXMgRW1wdHlFeHByZXNzaW9uIH0gZnJvbSBcIi4uLy4uL21pc2MvRW1wdHkvRW1wdHlFeHByZXNzaW9uLnN0b3JpZXNcIjtcbmltcG9ydCB7IEJveGVkRnVuY3Rpb25LaW5kLCBEbW5CdWlsdEluRGF0YVR5cGUsIGdlbmVyYXRlVXVpZCB9IGZyb20gXCIuLi8uLi8uLi9zcmMvYXBpXCI7XG5cbi8vIE1vcmUgb24gaG93IHRvIHNldCB1cCBzdG9yaWVzIGF0OiBodHRwczovL3N0b3J5Ym9vay5qcy5vcmcvZG9jcy9yZWFjdC93cml0aW5nLXN0b3JpZXMvaW50cm9kdWN0aW9uI2RlZmF1bHQtZXhwb3J0XG5jb25zdCBtZXRhOiBNZXRhPEJveGVkRXhwcmVzc2lvbkVkaXRvclByb3BzPiA9IHtcbiAgdGl0bGU6IFwiQm94ZWQgRXhwcmVzc2lvbnMvRnVuY3Rpb25cIixcbiAgY29tcG9uZW50OiBCb3hlZEV4cHJlc3Npb25FZGl0b3IsXG4gIGluY2x1ZGVTdG9yaWVzOiAvXltBLVpdL1xufTtcbmV4cG9ydCBkZWZhdWx0IG1ldGE7XG50eXBlIFN0b3J5ID0gU3RvcnlPYmo8Qm94ZWRFeHByZXNzaW9uRWRpdG9yU3RvcnlBcmdzPjtcblxuLy8gTW9yZSBvbiB3cml0aW5nIHN0b3JpZXMgd2l0aCBhcmdzOiBodHRwczovL3N0b3J5Ym9vay5qcy5vcmcvZG9jcy9yZWFjdC93cml0aW5nLXN0b3JpZXMvYXJnc1xuZXhwb3J0IGNvbnN0IEJhc2U6IFN0b3J5ID0ge1xuICByZW5kZXI6IGFyZ3MgPT4gQm94ZWRFeHByZXNzaW9uRWRpdG9yU3RvcnkoKSxcbiAgcGFyYW1ldGVyczoge1xuICAgIGV4Y2x1ZGU6IFtcImRhdGFUeXBlc1wiLCBcImJlZUd3dFNlcnZpY2VcIiwgXCJwbW1sRG9jdW1lbnRzXCJdXG4gIH0sXG4gIGFyZ3M6IHtcbiAgICAuLi5FbXB0eUV4cHJlc3Npb24uYXJncyxcbiAgICBleHByZXNzaW9uOiB7XG4gICAgICBfXyQkZWxlbWVudDogXCJmdW5jdGlvbkRlZmluaXRpb25cIixcbiAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICAgIFwiQF9sYWJlbFwiOiBcIkV4cHJlc3Npb24gTmFtZVwiLFxuICAgICAgXCJAX2tpbmRcIjogQm94ZWRGdW5jdGlvbktpbmQuRmVlbFxuICAgIH0sXG4gICAgaXNSZXNldFN1cHBvcnRlZE9uUm9vdEV4cHJlc3Npb246IHRydWVcbiAgfVxufTtcbmV4cG9ydCBjb25zdCBSZWFkb25seTogU3RvcnkgPSB7XG4gIHJlbmRlcjogYXJncyA9PiBCb3hlZEV4cHJlc3Npb25FZGl0b3JTdG9yeSgpLFxuICBwYXJhbWV0ZXJzOiB7XG4gICAgZXhjbHVkZTogW1wiZGF0YVR5cGVzXCIsIFwiYmVlR3d0U2VydmljZVwiLCBcInBtbWxEb2N1bWVudHNcIl1cbiAgfSxcbiAgYXJnczoge1xuICAgIC4uLkVtcHR5RXhwcmVzc2lvbi5hcmdzLFxuICAgIGV4cHJlc3Npb246IHtcbiAgICAgIF9fJCRlbGVtZW50OiBcImZ1bmN0aW9uRGVmaW5pdGlvblwiLFxuICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgXCJAX2xhYmVsXCI6IFwiRXhwcmVzc2lvbiBOYW1lXCIsXG4gICAgICBcIkBfa2luZFwiOiBCb3hlZEZ1bmN0aW9uS2luZC5GZWVsXG4gICAgfSxcbiAgICBpc1Jlc2V0U3VwcG9ydGVkT25Sb290RXhwcmVzc2lvbjogdHJ1ZSxcbiAgICBpc1JlYWRPbmx5OiB0cnVlXG4gIH1cbn07XG5leHBvcnQgY29uc3QgSW5zdGFsbG1lbnRDYWxjdWxhdGlvbjogU3RvcnkgPSB7XG4gIHJlbmRlcjogYXJncyA9PiBCb3hlZEV4cHJlc3Npb25FZGl0b3JTdG9yeSgpLFxuICBwYXJhbWV0ZXJzOiB7XG4gICAgZXhjbHVkZTogW1wiZGF0YVR5cGVzXCIsIFwiYmVlR3d0U2VydmljZVwiLCBcInBtbWxEb2N1bWVudHNcIl1cbiAgfSxcbiAgYXJnczoge1xuICAgIC4uLkVtcHR5RXhwcmVzc2lvbi5hcmdzLFxuICAgIGV4cHJlc3Npb246IHtcbiAgICAgIF9fJCRlbGVtZW50OiBcImZ1bmN0aW9uRGVmaW5pdGlvblwiLFxuICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgXCJAX2xhYmVsXCI6IFwiSW5zdGFsbG1lbnQgY2FsY3VsYXRpb25cIixcbiAgICAgIFwiQF90eXBlUmVmXCI6IERtbkJ1aWx0SW5EYXRhVHlwZS5OdW1iZXIsXG4gICAgICBcIkBfa2luZFwiOiBCb3hlZEZ1bmN0aW9uS2luZC5GZWVsLFxuICAgICAgZm9ybWFsUGFyYW1ldGVyOiBbe1xuICAgICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICAgIFwiQF9uYW1lXCI6IFwiQW1vdW50XCIsXG4gICAgICAgIFwiQF90eXBlUmVmXCI6IERtbkJ1aWx0SW5EYXRhVHlwZS5OdW1iZXJcbiAgICAgIH0sIHtcbiAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgICBcIkBfbmFtZVwiOiBcIlJhdGVcIixcbiAgICAgICAgXCJAX3R5cGVSZWZcIjogRG1uQnVpbHRJbkRhdGFUeXBlLk51bWJlclxuICAgICAgfSwge1xuICAgICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICAgIFwiQF9uYW1lXCI6IFwiVGVybVwiLFxuICAgICAgICBcIkBfdHlwZVJlZlwiOiBEbW5CdWlsdEluRGF0YVR5cGUuTnVtYmVyXG4gICAgICB9XSxcbiAgICAgIGV4cHJlc3Npb246IHtcbiAgICAgICAgX18kJGVsZW1lbnQ6IFwibGl0ZXJhbEV4cHJlc3Npb25cIixcbiAgICAgICAgXCJAX2lkXCI6IFwiX0FDREI5RkI5LUUxNkMtNDJDQS1CQkNDLURBMURBRENGRDdFMlwiLFxuICAgICAgICB0ZXh0OiB7XG4gICAgICAgICAgX18kJHRleHQ6IGAoQW1vdW50KlJhdGUvMTIpIC8gKDEtKDErUmF0ZS8xMikqKi1UZXJtKWBcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgaXNSZXNldFN1cHBvcnRlZE9uUm9vdEV4cHJlc3Npb246IGZhbHNlLFxuICAgIHdpZHRoc0J5SWQ6IHtcbiAgICAgIFwiX0FDREI5RkI5LUUxNkMtNDJDQS1CQkNDLURBMURBRENGRDdFMlwiOiBbMzQ3XVxuICAgIH1cbiAgfVxufTtcblxuLy8gTW9yZSBvbiB3cml0aW5nIHN0b3JpZXMgd2l0aCBhcmdzOiBodHRwczovL3N0b3J5Ym9vay5qcy5vcmcvZG9jcy9yZWFjdC93cml0aW5nLXN0b3JpZXMvYXJnc1xuZXhwb3J0IGNvbnN0IE5lc3RlZDogU3RvcnkgPSB7XG4gIHJlbmRlcjogYXJncyA9PiBCb3hlZEV4cHJlc3Npb25FZGl0b3JTdG9yeSgpLFxuICBwYXJhbWV0ZXJzOiB7XG4gICAgZXhjbHVkZTogW1wiZGF0YVR5cGVzXCIsIFwiYmVlR3d0U2VydmljZVwiLCBcInBtbWxEb2N1bWVudHNcIl1cbiAgfSxcbiAgYXJnczoge1xuICAgIC4uLkVtcHR5RXhwcmVzc2lvbi5hcmdzLFxuICAgIGV4cHJlc3Npb246IHtcbiAgICAgIF9fJCRlbGVtZW50OiBcImNvbnRleHRcIixcbiAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICAgIFwiQF9sYWJlbFwiOiBcIkV4cHJlc3Npb24gTmFtZVwiLFxuICAgICAgY29udGV4dEVudHJ5OiBbe1xuICAgICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICAgIHZhcmlhYmxlOiB7XG4gICAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgICAgIFwiQF9uYW1lXCI6IFwiQ29udGV4dEVudHJ5LTFcIlxuICAgICAgICB9LFxuICAgICAgICBleHByZXNzaW9uOiB7XG4gICAgICAgICAgX18kJGVsZW1lbnQ6IFwiZnVuY3Rpb25EZWZpbml0aW9uXCIsXG4gICAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgICAgIFwiQF9sYWJlbFwiOiBcIkV4cHJlc3Npb24gTmFtZVwiLFxuICAgICAgICAgIFwiQF9raW5kXCI6IEJveGVkRnVuY3Rpb25LaW5kLkZlZWwsXG4gICAgICAgICAgZm9ybWFsUGFyYW1ldGVyOiBbXVxuICAgICAgICB9XG4gICAgICB9XVxuICAgIH0sXG4gICAgaXNSZXNldFN1cHBvcnRlZE9uUm9vdEV4cHJlc3Npb246IGZhbHNlXG4gIH1cbn07XG5CYXNlLnBhcmFtZXRlcnMgPSB7XG4gIC4uLkJhc2UucGFyYW1ldGVycyxcbiAgZG9jczoge1xuICAgIC4uLkJhc2UucGFyYW1ldGVycz8uZG9jcyxcbiAgICBzb3VyY2U6IHtcbiAgICAgIG9yaWdpbmFsU291cmNlOiBcIntcXG4gIHJlbmRlcjogYXJncyA9PiBCb3hlZEV4cHJlc3Npb25FZGl0b3JTdG9yeSgpLFxcbiAgcGFyYW1ldGVyczoge1xcbiAgICBleGNsdWRlOiBbXFxcImRhdGFUeXBlc1xcXCIsIFxcXCJiZWVHd3RTZXJ2aWNlXFxcIiwgXFxcInBtbWxEb2N1bWVudHNcXFwiXVxcbiAgfSxcXG4gIGFyZ3M6IHtcXG4gICAgLi4uRW1wdHlFeHByZXNzaW9uLmFyZ3MsXFxuICAgIGV4cHJlc3Npb246IHtcXG4gICAgICBfXyQkZWxlbWVudDogXFxcImZ1bmN0aW9uRGVmaW5pdGlvblxcXCIsXFxuICAgICAgXFxcIkBfaWRcXFwiOiBnZW5lcmF0ZVV1aWQoKSxcXG4gICAgICBcXFwiQF9sYWJlbFxcXCI6IFxcXCJFeHByZXNzaW9uIE5hbWVcXFwiLFxcbiAgICAgIFxcXCJAX2tpbmRcXFwiOiBCb3hlZEZ1bmN0aW9uS2luZC5GZWVsXFxuICAgIH0sXFxuICAgIGlzUmVzZXRTdXBwb3J0ZWRPblJvb3RFeHByZXNzaW9uOiB0cnVlXFxuICB9XFxufVwiLFxuICAgICAgLi4uQmFzZS5wYXJhbWV0ZXJzPy5kb2NzPy5zb3VyY2VcbiAgICB9XG4gIH1cbn07XG5SZWFkb25seS5wYXJhbWV0ZXJzID0ge1xuICAuLi5SZWFkb25seS5wYXJhbWV0ZXJzLFxuICBkb2NzOiB7XG4gICAgLi4uUmVhZG9ubHkucGFyYW1ldGVycz8uZG9jcyxcbiAgICBzb3VyY2U6IHtcbiAgICAgIG9yaWdpbmFsU291cmNlOiBcIntcXG4gIHJlbmRlcjogYXJncyA9PiBCb3hlZEV4cHJlc3Npb25FZGl0b3JTdG9yeSgpLFxcbiAgcGFyYW1ldGVyczoge1xcbiAgICBleGNsdWRlOiBbXFxcImRhdGFUeXBlc1xcXCIsIFxcXCJiZWVHd3RTZXJ2aWNlXFxcIiwgXFxcInBtbWxEb2N1bWVudHNcXFwiXVxcbiAgfSxcXG4gIGFyZ3M6IHtcXG4gICAgLi4uRW1wdHlFeHByZXNzaW9uLmFyZ3MsXFxuICAgIGV4cHJlc3Npb246IHtcXG4gICAgICBfXyQkZWxlbWVudDogXFxcImZ1bmN0aW9uRGVmaW5pdGlvblxcXCIsXFxuICAgICAgXFxcIkBfaWRcXFwiOiBnZW5lcmF0ZVV1aWQoKSxcXG4gICAgICBcXFwiQF9sYWJlbFxcXCI6IFxcXCJFeHByZXNzaW9uIE5hbWVcXFwiLFxcbiAgICAgIFxcXCJAX2tpbmRcXFwiOiBCb3hlZEZ1bmN0aW9uS2luZC5GZWVsXFxuICAgIH0sXFxuICAgIGlzUmVzZXRTdXBwb3J0ZWRPblJvb3RFeHByZXNzaW9uOiB0cnVlLFxcbiAgICBpc1JlYWRPbmx5OiB0cnVlXFxuICB9XFxufVwiLFxuICAgICAgLi4uUmVhZG9ubHkucGFyYW1ldGVycz8uZG9jcz8uc291cmNlXG4gICAgfVxuICB9XG59O1xuSW5zdGFsbG1lbnRDYWxjdWxhdGlvbi5wYXJhbWV0ZXJzID0ge1xuICAuLi5JbnN0YWxsbWVudENhbGN1bGF0aW9uLnBhcmFtZXRlcnMsXG4gIGRvY3M6IHtcbiAgICAuLi5JbnN0YWxsbWVudENhbGN1bGF0aW9uLnBhcmFtZXRlcnM/LmRvY3MsXG4gICAgc291cmNlOiB7XG4gICAgICBvcmlnaW5hbFNvdXJjZTogXCJ7XFxuICByZW5kZXI6IGFyZ3MgPT4gQm94ZWRFeHByZXNzaW9uRWRpdG9yU3RvcnkoKSxcXG4gIHBhcmFtZXRlcnM6IHtcXG4gICAgZXhjbHVkZTogW1xcXCJkYXRhVHlwZXNcXFwiLCBcXFwiYmVlR3d0U2VydmljZVxcXCIsIFxcXCJwbW1sRG9jdW1lbnRzXFxcIl1cXG4gIH0sXFxuICBhcmdzOiB7XFxuICAgIC4uLkVtcHR5RXhwcmVzc2lvbi5hcmdzLFxcbiAgICBleHByZXNzaW9uOiB7XFxuICAgICAgX18kJGVsZW1lbnQ6IFxcXCJmdW5jdGlvbkRlZmluaXRpb25cXFwiLFxcbiAgICAgIFxcXCJAX2lkXFxcIjogZ2VuZXJhdGVVdWlkKCksXFxuICAgICAgXFxcIkBfbGFiZWxcXFwiOiBcXFwiSW5zdGFsbG1lbnQgY2FsY3VsYXRpb25cXFwiLFxcbiAgICAgIFxcXCJAX3R5cGVSZWZcXFwiOiBEbW5CdWlsdEluRGF0YVR5cGUuTnVtYmVyLFxcbiAgICAgIFxcXCJAX2tpbmRcXFwiOiBCb3hlZEZ1bmN0aW9uS2luZC5GZWVsLFxcbiAgICAgIGZvcm1hbFBhcmFtZXRlcjogW3tcXG4gICAgICAgIFxcXCJAX2lkXFxcIjogZ2VuZXJhdGVVdWlkKCksXFxuICAgICAgICBcXFwiQF9uYW1lXFxcIjogXFxcIkFtb3VudFxcXCIsXFxuICAgICAgICBcXFwiQF90eXBlUmVmXFxcIjogRG1uQnVpbHRJbkRhdGFUeXBlLk51bWJlclxcbiAgICAgIH0sIHtcXG4gICAgICAgIFxcXCJAX2lkXFxcIjogZ2VuZXJhdGVVdWlkKCksXFxuICAgICAgICBcXFwiQF9uYW1lXFxcIjogXFxcIlJhdGVcXFwiLFxcbiAgICAgICAgXFxcIkBfdHlwZVJlZlxcXCI6IERtbkJ1aWx0SW5EYXRhVHlwZS5OdW1iZXJcXG4gICAgICB9LCB7XFxuICAgICAgICBcXFwiQF9pZFxcXCI6IGdlbmVyYXRlVXVpZCgpLFxcbiAgICAgICAgXFxcIkBfbmFtZVxcXCI6IFxcXCJUZXJtXFxcIixcXG4gICAgICAgIFxcXCJAX3R5cGVSZWZcXFwiOiBEbW5CdWlsdEluRGF0YVR5cGUuTnVtYmVyXFxuICAgICAgfV0sXFxuICAgICAgZXhwcmVzc2lvbjoge1xcbiAgICAgICAgX18kJGVsZW1lbnQ6IFxcXCJsaXRlcmFsRXhwcmVzc2lvblxcXCIsXFxuICAgICAgICBcXFwiQF9pZFxcXCI6IFxcXCJfQUNEQjlGQjktRTE2Qy00MkNBLUJCQ0MtREExREFEQ0ZEN0UyXFxcIixcXG4gICAgICAgIHRleHQ6IHtcXG4gICAgICAgICAgX18kJHRleHQ6IGAoQW1vdW50KlJhdGUvMTIpIC8gKDEtKDErUmF0ZS8xMikqKi1UZXJtKWBcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH0sXFxuICAgIGlzUmVzZXRTdXBwb3J0ZWRPblJvb3RFeHByZXNzaW9uOiBmYWxzZSxcXG4gICAgd2lkdGhzQnlJZDoge1xcbiAgICAgIFxcXCJfQUNEQjlGQjktRTE2Qy00MkNBLUJCQ0MtREExREFEQ0ZEN0UyXFxcIjogWzM0N11cXG4gICAgfVxcbiAgfVxcbn1cIixcbiAgICAgIC4uLkluc3RhbGxtZW50Q2FsY3VsYXRpb24ucGFyYW1ldGVycz8uZG9jcz8uc291cmNlXG4gICAgfVxuICB9XG59O1xuTmVzdGVkLnBhcmFtZXRlcnMgPSB7XG4gIC4uLk5lc3RlZC5wYXJhbWV0ZXJzLFxuICBkb2NzOiB7XG4gICAgLi4uTmVzdGVkLnBhcmFtZXRlcnM/LmRvY3MsXG4gICAgc291cmNlOiB7XG4gICAgICBvcmlnaW5hbFNvdXJjZTogXCJ7XFxuICByZW5kZXI6IGFyZ3MgPT4gQm94ZWRFeHByZXNzaW9uRWRpdG9yU3RvcnkoKSxcXG4gIHBhcmFtZXRlcnM6IHtcXG4gICAgZXhjbHVkZTogW1xcXCJkYXRhVHlwZXNcXFwiLCBcXFwiYmVlR3d0U2VydmljZVxcXCIsIFxcXCJwbW1sRG9jdW1lbnRzXFxcIl1cXG4gIH0sXFxuICBhcmdzOiB7XFxuICAgIC4uLkVtcHR5RXhwcmVzc2lvbi5hcmdzLFxcbiAgICBleHByZXNzaW9uOiB7XFxuICAgICAgX18kJGVsZW1lbnQ6IFxcXCJjb250ZXh0XFxcIixcXG4gICAgICBcXFwiQF9pZFxcXCI6IGdlbmVyYXRlVXVpZCgpLFxcbiAgICAgIFxcXCJAX2xhYmVsXFxcIjogXFxcIkV4cHJlc3Npb24gTmFtZVxcXCIsXFxuICAgICAgY29udGV4dEVudHJ5OiBbe1xcbiAgICAgICAgXFxcIkBfaWRcXFwiOiBnZW5lcmF0ZVV1aWQoKSxcXG4gICAgICAgIHZhcmlhYmxlOiB7XFxuICAgICAgICAgIFxcXCJAX2lkXFxcIjogZ2VuZXJhdGVVdWlkKCksXFxuICAgICAgICAgIFxcXCJAX25hbWVcXFwiOiBcXFwiQ29udGV4dEVudHJ5LTFcXFwiXFxuICAgICAgICB9LFxcbiAgICAgICAgZXhwcmVzc2lvbjoge1xcbiAgICAgICAgICBfXyQkZWxlbWVudDogXFxcImZ1bmN0aW9uRGVmaW5pdGlvblxcXCIsXFxuICAgICAgICAgIFxcXCJAX2lkXFxcIjogZ2VuZXJhdGVVdWlkKCksXFxuICAgICAgICAgIFxcXCJAX2xhYmVsXFxcIjogXFxcIkV4cHJlc3Npb24gTmFtZVxcXCIsXFxuICAgICAgICAgIFxcXCJAX2tpbmRcXFwiOiBCb3hlZEZ1bmN0aW9uS2luZC5GZWVsLFxcbiAgICAgICAgICBmb3JtYWxQYXJhbWV0ZXI6IFtdXFxuICAgICAgICB9XFxuICAgICAgfV1cXG4gICAgfSxcXG4gICAgaXNSZXNldFN1cHBvcnRlZE9uUm9vdEV4cHJlc3Npb246IGZhbHNlXFxuICB9XFxufVwiLFxuICAgICAgLi4uTmVzdGVkLnBhcmFtZXRlcnM/LmRvY3M/LnNvdXJjZVxuICAgIH1cbiAgfVxufTsiLCIvKlxuICogTGljZW5zZWQgdG8gdGhlIEFwYWNoZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIChBU0YpIHVuZGVyIG9uZVxuICogb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuICBTZWUgdGhlIE5PVElDRSBmaWxlXG4gKiBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvblxuICogcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuICBUaGUgQVNGIGxpY2Vuc2VzIHRoaXMgZmlsZVxuICogdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZVxuICogXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4gKiB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZyxcbiAqIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXG4gKiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxuICogS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlXG4gKiBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zXG4gKiB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgdHlwZSB7IE1ldGEsIFN0b3J5T2JqIH0gZnJvbSBcIkBzdG9yeWJvb2svcmVhY3RcIjtcbmltcG9ydCB7IEJveGVkRXhwcmVzc2lvbkVkaXRvciwgQm94ZWRFeHByZXNzaW9uRWRpdG9yUHJvcHMgfSBmcm9tIFwiLi4vLi4vLi4vc3JjL0JveGVkRXhwcmVzc2lvbkVkaXRvclwiO1xuaW1wb3J0IHsgYmVlR3d0U2VydmljZSwgQm94ZWRFeHByZXNzaW9uRWRpdG9yU3RvcnksIEJveGVkRXhwcmVzc2lvbkVkaXRvclN0b3J5QXJncywgZGF0YVR5cGVzLCBwbW1sRG9jdW1lbnRzIH0gZnJvbSBcIi4uLy4uL2JveGVkRXhwcmVzc2lvblN0b3JpZXNXcmFwcGVyXCI7XG5cbi8vIE1vcmUgb24gaG93IHRvIHNldCB1cCBzdG9yaWVzIGF0OiBodHRwczovL3N0b3J5Ym9vay5qcy5vcmcvZG9jcy9yZWFjdC93cml0aW5nLXN0b3JpZXMvaW50cm9kdWN0aW9uI2RlZmF1bHQtZXhwb3J0XG5jb25zdCBtZXRhOiBNZXRhPEJveGVkRXhwcmVzc2lvbkVkaXRvclByb3BzPiA9IHtcbiAgdGl0bGU6IFwiTWlzYy9FbXB0eSBCb3hlZCBFeHByZXNzaW9uXCIsXG4gIGNvbXBvbmVudDogQm94ZWRFeHByZXNzaW9uRWRpdG9yLFxuICBpbmNsdWRlU3RvcmllczogL15bQS1aXS9cbn07XG5leHBvcnQgZGVmYXVsdCBtZXRhO1xudHlwZSBTdG9yeSA9IFN0b3J5T2JqPEJveGVkRXhwcmVzc2lvbkVkaXRvclN0b3J5QXJncz47XG5cbi8vIE1vcmUgb24gd3JpdGluZyBzdG9yaWVzIHdpdGggYXJnczogaHR0cHM6Ly9zdG9yeWJvb2suanMub3JnL2RvY3MvcmVhY3Qvd3JpdGluZy1zdG9yaWVzL2FyZ3NcbmV4cG9ydCBjb25zdCBCYXNlOiBTdG9yeSA9IHtcbiAgcmVuZGVyOiBhcmdzID0+IEJveGVkRXhwcmVzc2lvbkVkaXRvclN0b3J5KCksXG4gIGFyZ3M6IHtcbiAgICBleHByZXNzaW9uSG9sZGVySWQ6IFwiXzAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMFwiLFxuICAgIGV4cHJlc3Npb246IHVuZGVmaW5lZCxcbiAgICB3aWR0aHNCeUlkOiB7fSxcbiAgICBkYXRhVHlwZXMsXG4gICAgYmVlR3d0U2VydmljZSxcbiAgICBwbW1sRG9jdW1lbnRzLFxuICAgIGlzUmVzZXRTdXBwb3J0ZWRPblJvb3RFeHByZXNzaW9uOiB0cnVlXG4gIH1cbn07XG5CYXNlLnBhcmFtZXRlcnMgPSB7XG4gIC4uLkJhc2UucGFyYW1ldGVycyxcbiAgZG9jczoge1xuICAgIC4uLkJhc2UucGFyYW1ldGVycz8uZG9jcyxcbiAgICBzb3VyY2U6IHtcbiAgICAgIG9yaWdpbmFsU291cmNlOiBcIntcXG4gIHJlbmRlcjogYXJncyA9PiBCb3hlZEV4cHJlc3Npb25FZGl0b3JTdG9yeSgpLFxcbiAgYXJnczoge1xcbiAgICBleHByZXNzaW9uSG9sZGVySWQ6IFxcXCJfMDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwXFxcIixcXG4gICAgZXhwcmVzc2lvbjogdW5kZWZpbmVkLFxcbiAgICB3aWR0aHNCeUlkOiB7fSxcXG4gICAgZGF0YVR5cGVzLFxcbiAgICBiZWVHd3RTZXJ2aWNlLFxcbiAgICBwbW1sRG9jdW1lbnRzLFxcbiAgICBpc1Jlc2V0U3VwcG9ydGVkT25Sb290RXhwcmVzc2lvbjogdHJ1ZVxcbiAgfVxcbn1cIixcbiAgICAgIC4uLkJhc2UucGFyYW1ldGVycz8uZG9jcz8uc291cmNlXG4gICAgfVxuICB9XG59OyJdLCJuYW1lcyI6WyJCb3hlZEV4cHJlc3Npb25FZGl0b3IiLCJCb3hlZEV4cHJlc3Npb25FZGl0b3JTdG9yeSIsIkJhc2UiLCJFbXB0eUV4cHJlc3Npb24iLCJCb3hlZEZ1bmN0aW9uS2luZCIsIkRtbkJ1aWx0SW5EYXRhVHlwZSIsImdlbmVyYXRlVXVpZCIsIm1ldGEiLCJ0aXRsZSIsImNvbXBvbmVudCIsImluY2x1ZGVTdG9yaWVzIiwicmVuZGVyIiwiYXJncyIsInBhcmFtZXRlcnMiLCJleGNsdWRlIiwiZXhwcmVzc2lvbiIsIl9fJCRlbGVtZW50IiwiRmVlbCIsImlzUmVzZXRTdXBwb3J0ZWRPblJvb3RFeHByZXNzaW9uIiwiUmVhZG9ubHkiLCJpc1JlYWRPbmx5IiwiSW5zdGFsbG1lbnRDYWxjdWxhdGlvbiIsIk51bWJlciIsImZvcm1hbFBhcmFtZXRlciIsInRleHQiLCJfXyQkdGV4dCIsIndpZHRoc0J5SWQiLCJOZXN0ZWQiLCJjb250ZXh0RW50cnkiLCJ2YXJpYWJsZSIsImRvY3MiLCJfYSIsInNvdXJjZSIsIm9yaWdpbmFsU291cmNlIiwiX2MiLCJfYiIsIl9kIiwiX2YiLCJfZSIsIl9nIiwiX2oiLCJfaCIsIl9rIiwiX20iLCJfbCIsIl9fbmFtZWRFeHBvcnRzT3JkZXIiLCJiZWVHd3RTZXJ2aWNlIiwiZGF0YVR5cGVzIiwicG1tbERvY3VtZW50cyIsImV4cHJlc3Npb25Ib2xkZXJJZCIsInVuZGVmaW5lZCJdLCJzb3VyY2VSb290IjoiIn0=