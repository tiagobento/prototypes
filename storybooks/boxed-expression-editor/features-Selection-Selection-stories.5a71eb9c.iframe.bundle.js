"use strict";
(self["webpackChunk_kie_tools_boxed_expression_component"] = self["webpackChunk_kie_tools_boxed_expression_component"] || []).push([["features-Selection-Selection-stories"],{

/***/ "./stories/boxedExpressions/Literal/Literal.stories.tsx":
/*!**************************************************************!*\
  !*** ./stories/boxedExpressions/Literal/Literal.stories.tsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Base: () => (/* binding */ Base),
/* harmony export */   CanDrive: () => (/* binding */ CanDrive),
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
  title: "Boxed Expressions/Literal",
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
      __$$element: "literalExpression",
      "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
      "@_label": "Expression Name"
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
      __$$element: "literalExpression",
      "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
      "@_label": "Expression Name"
    },
    isResetSupportedOnRootExpression: true,
    isReadOnly: true
  }
};
const CanDrive = {
  render: args => (0,_boxedExpressionStoriesWrapper__WEBPACK_IMPORTED_MODULE_1__.BoxedExpressionEditorStory)(),
  parameters: {
    exclude: ["dataTypes", "beeGwtService", "pmmlDocuments"]
  },
  args: {
    ..._misc_Empty_EmptyExpression_stories__WEBPACK_IMPORTED_MODULE_2__.Base.args,
    expression: {
      __$$element: "literalExpression",
      "@_id": "_D98FB35A-C6A5-4BA7-AD38-176D56A31872",
      "@_label": "Can Drive?",
      "@_typeRef": _src_api__WEBPACK_IMPORTED_MODULE_3__.DmnBuiltInDataType.Boolean,
      text: {
        __$$text: "Age >= 18 then true else false"
      }
    },
    widthsById: {
      "_D98FB35A-C6A5-4BA7-AD38-176D56A31872": [500]
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
          __$$element: "literalExpression",
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
          "@_label": "Expression Name"
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
      originalSource: "{\n  render: args => BoxedExpressionEditorStory(),\n  parameters: {\n    exclude: [\"dataTypes\", \"beeGwtService\", \"pmmlDocuments\"]\n  },\n  args: {\n    ...EmptyExpression.args,\n    expression: {\n      __$$element: \"literalExpression\",\n      \"@_id\": generateUuid(),\n      \"@_label\": \"Expression Name\"\n    },\n    isResetSupportedOnRootExpression: true\n  }\n}",
      ...((_c = (_b = Base.parameters) === null || _b === void 0 ? void 0 : _b.docs) === null || _c === void 0 ? void 0 : _c.source)
    }
  }
};
Readonly.parameters = {
  ...Readonly.parameters,
  docs: {
    ...((_d = Readonly.parameters) === null || _d === void 0 ? void 0 : _d.docs),
    source: {
      originalSource: "{\n  render: args => BoxedExpressionEditorStory(),\n  parameters: {\n    exclude: [\"dataTypes\", \"beeGwtService\", \"pmmlDocuments\"]\n  },\n  args: {\n    ...EmptyExpression.args,\n    expression: {\n      __$$element: \"literalExpression\",\n      \"@_id\": generateUuid(),\n      \"@_label\": \"Expression Name\"\n    },\n    isResetSupportedOnRootExpression: true,\n    isReadOnly: true\n  }\n}",
      ...((_f = (_e = Readonly.parameters) === null || _e === void 0 ? void 0 : _e.docs) === null || _f === void 0 ? void 0 : _f.source)
    }
  }
};
CanDrive.parameters = {
  ...CanDrive.parameters,
  docs: {
    ...((_g = CanDrive.parameters) === null || _g === void 0 ? void 0 : _g.docs),
    source: {
      originalSource: "{\n  render: args => BoxedExpressionEditorStory(),\n  parameters: {\n    exclude: [\"dataTypes\", \"beeGwtService\", \"pmmlDocuments\"]\n  },\n  args: {\n    ...EmptyExpression.args,\n    expression: {\n      __$$element: \"literalExpression\",\n      \"@_id\": \"_D98FB35A-C6A5-4BA7-AD38-176D56A31872\",\n      \"@_label\": \"Can Drive?\",\n      \"@_typeRef\": DmnBuiltInDataType.Boolean,\n      text: {\n        __$$text: \"Age >= 18 then true else false\"\n      }\n    },\n    widthsById: {\n      \"_D98FB35A-C6A5-4BA7-AD38-176D56A31872\": [500]\n    },\n    isResetSupportedOnRootExpression: false\n  }\n}",
      ...((_j = (_h = CanDrive.parameters) === null || _h === void 0 ? void 0 : _h.docs) === null || _j === void 0 ? void 0 : _j.source)
    }
  }
};
Nested.parameters = {
  ...Nested.parameters,
  docs: {
    ...((_k = Nested.parameters) === null || _k === void 0 ? void 0 : _k.docs),
    source: {
      originalSource: "{\n  render: args => BoxedExpressionEditorStory(),\n  parameters: {\n    exclude: [\"dataTypes\", \"beeGwtService\", \"pmmlDocuments\"]\n  },\n  args: {\n    ...EmptyExpression.args,\n    expression: {\n      __$$element: \"context\",\n      \"@_id\": generateUuid(),\n      \"@_label\": \"Expression Name\",\n      contextEntry: [{\n        \"@_id\": generateUuid(),\n        variable: {\n          \"@_id\": generateUuid(),\n          \"@_name\": \"ContextEntry-1\"\n        },\n        expression: {\n          __$$element: \"literalExpression\",\n          \"@_id\": generateUuid(),\n          \"@_label\": \"Expression Name\"\n        }\n      }]\n    },\n    isResetSupportedOnRootExpression: false\n  }\n}",
      ...((_m = (_l = Nested.parameters) === null || _l === void 0 ? void 0 : _l.docs) === null || _m === void 0 ? void 0 : _m.source)
    }
  }
};
const __namedExportsOrder = ["Base", "Readonly", "CanDrive", "Nested"];

/***/ }),

/***/ "./stories/features/Selection/Selection.stories.tsx":
/*!**********************************************************!*\
  !*** ./stories/features/Selection/Selection.stories.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CanDrive: () => (/* binding */ CanDrive),
/* harmony export */   Discount: () => (/* binding */ Discount),
/* harmony export */   EmptyExpression: () => (/* binding */ EmptyExpression),
/* harmony export */   People: () => (/* binding */ People),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _src_BoxedExpressionEditor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/BoxedExpressionEditor */ "./src/BoxedExpressionEditor.tsx");
/* harmony import */ var _misc_Empty_EmptyExpression_stories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../misc/Empty/EmptyExpression.stories */ "./stories/misc/Empty/EmptyExpression.stories.tsx");
/* harmony import */ var _boxedExpressions_Literal_Literal_stories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../boxedExpressions/Literal/Literal.stories */ "./stories/boxedExpressions/Literal/Literal.stories.tsx");
/* harmony import */ var _boxedExpressions_Relation_Relation_stories__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../boxedExpressions/Relation/Relation.stories */ "./stories/boxedExpressions/Relation/Relation.stories.tsx");
/* harmony import */ var _boxedExpressions_DecisionTable_DecisionTable_stories__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../boxedExpressions/DecisionTable/DecisionTable.stories */ "./stories/boxedExpressions/DecisionTable/DecisionTable.stories.tsx");
/* harmony import */ var _src_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../src/api */ "./src/api/index.ts");
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;






const meta = {
  title: "Features/Selection",
  component: _src_BoxedExpressionEditor__WEBPACK_IMPORTED_MODULE_0__.BoxedExpressionEditor,
  includeStories: /^[A-Z]/
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (meta);
const CanDrive = {
  ..._boxedExpressions_Literal_Literal_stories__WEBPACK_IMPORTED_MODULE_2__.CanDrive,
  args: {
    ..._boxedExpressions_Literal_Literal_stories__WEBPACK_IMPORTED_MODULE_2__.CanDrive.args,
    isResetSupportedOnRootExpression: true
  }
};
const People = {
  ..._boxedExpressions_Relation_Relation_stories__WEBPACK_IMPORTED_MODULE_3__.People,
  args: {
    ..._boxedExpressions_Relation_Relation_stories__WEBPACK_IMPORTED_MODULE_3__.People.args,
    isResetSupportedOnRootExpression: true
  }
};
const EmptyExpression = {
  ..._misc_Empty_EmptyExpression_stories__WEBPACK_IMPORTED_MODULE_1__.Base,
  args: {
    ..._misc_Empty_EmptyExpression_stories__WEBPACK_IMPORTED_MODULE_1__.Base.args,
    isResetSupportedOnRootExpression: true
  }
};
const Discount = {
  ..._boxedExpressions_DecisionTable_DecisionTable_stories__WEBPACK_IMPORTED_MODULE_4__.Discount,
  args: {
    ..._boxedExpressions_DecisionTable_DecisionTable_stories__WEBPACK_IMPORTED_MODULE_4__.Discount.args,
    expression: {
      ..._boxedExpressions_DecisionTable_DecisionTable_stories__WEBPACK_IMPORTED_MODULE_4__.Discount.args.expression,
      rule: [{
        "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_5__.generateUuid)(),
        inputEntry: [{
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_5__.generateUuid)(),
          text: {
            __$$text: "-"
          }
        }],
        outputEntry: [{
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_5__.generateUuid)(),
          text: {
            __$$text: ""
          }
        }],
        annotationEntry: [{
          text: {
            __$$text: ""
          }
        }]
      }, {
        "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_5__.generateUuid)(),
        inputEntry: [{
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_5__.generateUuid)(),
          text: {
            __$$text: "-"
          }
        }],
        outputEntry: [{
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_5__.generateUuid)(),
          text: {
            __$$text: ""
          }
        }],
        annotationEntry: [{
          text: {
            __$$text: ""
          }
        }]
      }, {
        "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_5__.generateUuid)(),
        inputEntry: [{
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_5__.generateUuid)(),
          text: {
            __$$text: "-"
          }
        }],
        outputEntry: [{
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_5__.generateUuid)(),
          text: {
            __$$text: ""
          }
        }],
        annotationEntry: [{
          text: {
            __$$text: ""
          }
        }]
      }, {
        "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_5__.generateUuid)(),
        inputEntry: [{
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_5__.generateUuid)(),
          text: {
            __$$text: "-"
          }
        }],
        outputEntry: [{
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_5__.generateUuid)(),
          text: {
            __$$text: ""
          }
        }],
        annotationEntry: [{
          text: {
            __$$text: ""
          }
        }]
      }]
    }
  }
};
CanDrive.parameters = {
  ...CanDrive.parameters,
  docs: {
    ...((_a = CanDrive.parameters) === null || _a === void 0 ? void 0 : _a.docs),
    source: {
      originalSource: "{\n  ...Literal.CanDrive,\n  args: {\n    ...Literal.CanDrive.args,\n    isResetSupportedOnRootExpression: true\n  }\n}",
      ...((_c = (_b = CanDrive.parameters) === null || _b === void 0 ? void 0 : _b.docs) === null || _c === void 0 ? void 0 : _c.source)
    }
  }
};
People.parameters = {
  ...People.parameters,
  docs: {
    ...((_d = People.parameters) === null || _d === void 0 ? void 0 : _d.docs),
    source: {
      originalSource: "{\n  ...Relation.People,\n  args: {\n    ...Relation.People.args,\n    isResetSupportedOnRootExpression: true\n  }\n}",
      ...((_f = (_e = People.parameters) === null || _e === void 0 ? void 0 : _e.docs) === null || _f === void 0 ? void 0 : _f.source)
    }
  }
};
EmptyExpression.parameters = {
  ...EmptyExpression.parameters,
  docs: {
    ...((_g = EmptyExpression.parameters) === null || _g === void 0 ? void 0 : _g.docs),
    source: {
      originalSource: "{\n  ...Empty.Base,\n  args: {\n    ...Empty.Base.args,\n    isResetSupportedOnRootExpression: true\n  }\n}",
      ...((_j = (_h = EmptyExpression.parameters) === null || _h === void 0 ? void 0 : _h.docs) === null || _j === void 0 ? void 0 : _j.source)
    }
  }
};
Discount.parameters = {
  ...Discount.parameters,
  docs: {
    ...((_k = Discount.parameters) === null || _k === void 0 ? void 0 : _k.docs),
    source: {
      originalSource: "{\n  ...DecisionTable.Discount,\n  args: {\n    ...DecisionTable.Discount.args!,\n    expression: {\n      ...(DecisionTable.Discount.args!.expression! as Normalized<BoxedDecisionTable>),\n      rule: [{\n        \"@_id\": generateUuid(),\n        inputEntry: [{\n          \"@_id\": generateUuid(),\n          text: {\n            __$$text: \"-\"\n          }\n        }],\n        outputEntry: [{\n          \"@_id\": generateUuid(),\n          text: {\n            __$$text: \"\"\n          }\n        }],\n        annotationEntry: [{\n          text: {\n            __$$text: \"\"\n          }\n        }]\n      }, {\n        \"@_id\": generateUuid(),\n        inputEntry: [{\n          \"@_id\": generateUuid(),\n          text: {\n            __$$text: \"-\"\n          }\n        }],\n        outputEntry: [{\n          \"@_id\": generateUuid(),\n          text: {\n            __$$text: \"\"\n          }\n        }],\n        annotationEntry: [{\n          text: {\n            __$$text: \"\"\n          }\n        }]\n      }, {\n        \"@_id\": generateUuid(),\n        inputEntry: [{\n          \"@_id\": generateUuid(),\n          text: {\n            __$$text: \"-\"\n          }\n        }],\n        outputEntry: [{\n          \"@_id\": generateUuid(),\n          text: {\n            __$$text: \"\"\n          }\n        }],\n        annotationEntry: [{\n          text: {\n            __$$text: \"\"\n          }\n        }]\n      }, {\n        \"@_id\": generateUuid(),\n        inputEntry: [{\n          \"@_id\": generateUuid(),\n          text: {\n            __$$text: \"-\"\n          }\n        }],\n        outputEntry: [{\n          \"@_id\": generateUuid(),\n          text: {\n            __$$text: \"\"\n          }\n        }],\n        annotationEntry: [{\n          text: {\n            __$$text: \"\"\n          }\n        }]\n      }]\n    }\n  }\n}",
      ...((_m = (_l = Discount.parameters) === null || _l === void 0 ? void 0 : _l.docs) === null || _m === void 0 ? void 0 : _m.source)
    }
  }
};
const __namedExportsOrder = ["CanDrive", "People", "EmptyExpression", "Discount"];

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZXMtU2VsZWN0aW9uLVNlbGVjdGlvbi1zdG9yaWVzLjVhNzFlYjljLmlmcmFtZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQnVHO0FBQ1U7QUFDOUI7QUFDZjtBQUdwRSxNQUFNTSxJQUFJLEdBQXFDO0VBQzdDQyxLQUFLLEVBQUUsMkJBQTJCO0VBQ2xDQyxTQUFTLEVBQUVSLDZFQUFxQjtFQUNoQ1MsY0FBYyxFQUFFO0NBQ2pCO0FBQ0QsaUVBQWVILElBQUksRUFBQztBQUliLE1BQU1KLElBQUksR0FBVTtFQUN6QlEsTUFBTSxFQUFFQyxJQUFJLElBQUlWLDBGQUEwQixFQUFFO0VBQzVDVyxVQUFVLEVBQUU7SUFDVkMsT0FBTyxFQUFFLENBQUMsV0FBVyxFQUFFLGVBQWUsRUFBRSxlQUFlO0dBQ3hEO0VBQ0RGLElBQUksRUFBRTtJQUNKLEdBQUdSLHFFQUFlLENBQUNRLElBQUk7SUFDdkJHLFVBQVUsRUFBRTtNQUNWQyxXQUFXLEVBQUUsbUJBQW1CO01BQ2hDLE1BQU0sRUFBRVYsc0RBQVksRUFBRTtNQUN0QixTQUFTLEVBQUU7S0FDWjtJQUNEVyxnQ0FBZ0MsRUFBRTs7Q0FFckM7QUFDTSxNQUFNQyxRQUFRLEdBQVU7RUFDN0JQLE1BQU0sRUFBRUMsSUFBSSxJQUFJViwwRkFBMEIsRUFBRTtFQUM1Q1csVUFBVSxFQUFFO0lBQ1ZDLE9BQU8sRUFBRSxDQUFDLFdBQVcsRUFBRSxlQUFlLEVBQUUsZUFBZTtHQUN4RDtFQUNERixJQUFJLEVBQUU7SUFDSixHQUFHUixxRUFBZSxDQUFDUSxJQUFJO0lBQ3ZCRyxVQUFVLEVBQUU7TUFDVkMsV0FBVyxFQUFFLG1CQUFtQjtNQUNoQyxNQUFNLEVBQUVWLHNEQUFZLEVBQUU7TUFDdEIsU0FBUyxFQUFFO0tBQ1o7SUFDRFcsZ0NBQWdDLEVBQUUsSUFBSTtJQUN0Q0UsVUFBVSxFQUFFOztDQUVmO0FBQ00sTUFBTUMsUUFBUSxHQUFVO0VBQzdCVCxNQUFNLEVBQUVDLElB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L2JveGVkLWV4cHJlc3Npb24tY29tcG9uZW50Ly4vc3Rvcmllcy9ib3hlZEV4cHJlc3Npb25zL0xpdGVyYWwvTGl0ZXJhbC5zdG9yaWVzLnRzeCIsIndlYnBhY2s6Ly9Aa2llLXRvb2xzL2JveGVkLWV4cHJlc3Npb24tY29tcG9uZW50Ly4vc3Rvcmllcy9mZWF0dXJlcy9TZWxlY3Rpb24vU2VsZWN0aW9uLnN0b3JpZXMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBMaWNlbnNlZCB0byB0aGUgQXBhY2hlIFNvZnR3YXJlIEZvdW5kYXRpb24gKEFTRikgdW5kZXIgb25lXG4gKiBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gIFNlZSB0aGUgTk9USUNFIGZpbGVcbiAqIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uXG4gKiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC4gIFRoZSBBU0YgbGljZW5zZXMgdGhpcyBmaWxlXG4gKiB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlXG4gKiBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2VcbiAqIHdpdGggdGhlIExpY2Vuc2UuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLFxuICogc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cbiAqIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXG4gKiBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGVcbiAqIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnNcbiAqIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB0eXBlIHsgTWV0YSwgU3RvcnlPYmogfSBmcm9tIFwiQHN0b3J5Ym9vay9yZWFjdFwiO1xuaW1wb3J0IHsgQm94ZWRFeHByZXNzaW9uRWRpdG9yLCBCb3hlZEV4cHJlc3Npb25FZGl0b3JQcm9wcyB9IGZyb20gXCIuLi8uLi8uLi9zcmMvQm94ZWRFeHByZXNzaW9uRWRpdG9yXCI7XG5pbXBvcnQgeyBCb3hlZEV4cHJlc3Npb25FZGl0b3JTdG9yeSwgQm94ZWRFeHByZXNzaW9uRWRpdG9yU3RvcnlBcmdzIH0gZnJvbSBcIi4uLy4uL2JveGVkRXhwcmVzc2lvblN0b3JpZXNXcmFwcGVyXCI7XG5pbXBvcnQgeyBCYXNlIGFzIEVtcHR5RXhwcmVzc2lvbiB9IGZyb20gXCIuLi8uLi9taXNjL0VtcHR5L0VtcHR5RXhwcmVzc2lvbi5zdG9yaWVzXCI7XG5pbXBvcnQgeyBEbW5CdWlsdEluRGF0YVR5cGUsIGdlbmVyYXRlVXVpZCB9IGZyb20gXCIuLi8uLi8uLi9zcmMvYXBpXCI7XG5cbi8vIE1vcmUgb24gaG93IHRvIHNldCB1cCBzdG9yaWVzIGF0OiBodHRwczovL3N0b3J5Ym9vay5qcy5vcmcvZG9jcy9yZWFjdC93cml0aW5nLXN0b3JpZXMvaW50cm9kdWN0aW9uI2RlZmF1bHQtZXhwb3J0XG5jb25zdCBtZXRhOiBNZXRhPEJveGVkRXhwcmVzc2lvbkVkaXRvclByb3BzPiA9IHtcbiAgdGl0bGU6IFwiQm94ZWQgRXhwcmVzc2lvbnMvTGl0ZXJhbFwiLFxuICBjb21wb25lbnQ6IEJveGVkRXhwcmVzc2lvbkVkaXRvcixcbiAgaW5jbHVkZVN0b3JpZXM6IC9eW0EtWl0vXG59O1xuZXhwb3J0IGRlZmF1bHQgbWV0YTtcbnR5cGUgU3RvcnkgPSBTdG9yeU9iajxCb3hlZEV4cHJlc3Npb25FZGl0b3JTdG9yeUFyZ3M+O1xuXG4vLyBNb3JlIG9uIHdyaXRpbmcgc3RvcmllcyB3aXRoIGFyZ3M6IGh0dHBzOi8vc3Rvcnlib29rLmpzLm9yZy9kb2NzL3JlYWN0L3dyaXRpbmctc3Rvcmllcy9hcmdzXG5leHBvcnQgY29uc3QgQmFzZTogU3RvcnkgPSB7XG4gIHJlbmRlcjogYXJncyA9PiBCb3hlZEV4cHJlc3Npb25FZGl0b3JTdG9yeSgpLFxuICBwYXJhbWV0ZXJzOiB7XG4gICAgZXhjbHVkZTogW1wiZGF0YVR5cGVzXCIsIFwiYmVlR3d0U2VydmljZVwiLCBcInBtbWxEb2N1bWVudHNcIl1cbiAgfSxcbiAgYXJnczoge1xuICAgIC4uLkVtcHR5RXhwcmVzc2lvbi5hcmdzLFxuICAgIGV4cHJlc3Npb246IHtcbiAgICAgIF9fJCRlbGVtZW50OiBcImxpdGVyYWxFeHByZXNzaW9uXCIsXG4gICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICBcIkBfbGFiZWxcIjogXCJFeHByZXNzaW9uIE5hbWVcIlxuICAgIH0sXG4gICAgaXNSZXNldFN1cHBvcnRlZE9uUm9vdEV4cHJlc3Npb246IHRydWVcbiAgfVxufTtcbmV4cG9ydCBjb25zdCBSZWFkb25seTogU3RvcnkgPSB7XG4gIHJlbmRlcjogYXJncyA9PiBCb3hlZEV4cHJlc3Npb25FZGl0b3JTdG9yeSgpLFxuICBwYXJhbWV0ZXJzOiB7XG4gICAgZXhjbHVkZTogW1wiZGF0YVR5cGVzXCIsIFwiYmVlR3d0U2VydmljZVwiLCBcInBtbWxEb2N1bWVudHNcIl1cbiAgfSxcbiAgYXJnczoge1xuICAgIC4uLkVtcHR5RXhwcmVzc2lvbi5hcmdzLFxuICAgIGV4cHJlc3Npb246IHtcbiAgICAgIF9fJCRlbGVtZW50OiBcImxpdGVyYWxFeHByZXNzaW9uXCIsXG4gICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICBcIkBfbGFiZWxcIjogXCJFeHByZXNzaW9uIE5hbWVcIlxuICAgIH0sXG4gICAgaXNSZXNldFN1cHBvcnRlZE9uUm9vdEV4cHJlc3Npb246IHRydWUsXG4gICAgaXNSZWFkT25seTogdHJ1ZVxuICB9XG59O1xuZXhwb3J0IGNvbnN0IENhbkRyaXZlOiBTdG9yeSA9IHtcbiAgcmVuZGVyOiBhcmdzID0+IEJveGVkRXhwcmVzc2lvbkVkaXRvclN0b3J5KCksXG4gIHBhcmFtZXRlcnM6IHtcbiAgICBleGNsdWRlOiBbXCJkYXRhVHlwZXNcIiwgXCJiZWVHd3RTZXJ2aWNlXCIsIFwicG1tbERvY3VtZW50c1wiXVxuICB9LFxuICBhcmdzOiB7XG4gICAgLi4uRW1wdHlFeHByZXNzaW9uLmFyZ3MsXG4gICAgZXhwcmVzc2lvbjoge1xuICAgICAgX18kJGVsZW1lbnQ6IFwibGl0ZXJhbEV4cHJlc3Npb25cIixcbiAgICAgIFwiQF9pZFwiOiBcIl9EOThGQjM1QS1DNkE1LTRCQTctQUQzOC0xNzZENTZBMzE4NzJcIixcbiAgICAgIFwiQF9sYWJlbFwiOiBcIkNhbiBEcml2ZT9cIixcbiAgICAgIFwiQF90eXBlUmVmXCI6IERtbkJ1aWx0SW5EYXRhVHlwZS5Cb29sZWFuLFxuICAgICAgdGV4dDoge1xuICAgICAgICBfXyQkdGV4dDogXCJBZ2UgPj0gMTggdGhlbiB0cnVlIGVsc2UgZmFsc2VcIlxuICAgICAgfVxuICAgIH0sXG4gICAgd2lkdGhzQnlJZDoge1xuICAgICAgXCJfRDk4RkIzNUEtQzZBNS00QkE3LUFEMzgtMTc2RDU2QTMxODcyXCI6IFs1MDBdXG4gICAgfSxcbiAgICBpc1Jlc2V0U3VwcG9ydGVkT25Sb290RXhwcmVzc2lvbjogZmFsc2VcbiAgfVxufTtcblxuLy8gTW9yZSBvbiB3cml0aW5nIHN0b3JpZXMgd2l0aCBhcmdzOiBodHRwczovL3N0b3J5Ym9vay5qcy5vcmcvZG9jcy9yZWFjdC93cml0aW5nLXN0b3JpZXMvYXJnc1xuZXhwb3J0IGNvbnN0IE5lc3RlZDogU3RvcnkgPSB7XG4gIHJlbmRlcjogYXJncyA9PiBCb3hlZEV4cHJlc3Npb25FZGl0b3JTdG9yeSgpLFxuICBwYXJhbWV0ZXJzOiB7XG4gICAgZXhjbHVkZTogW1wiZGF0YVR5cGVzXCIsIFwiYmVlR3d0U2VydmljZVwiLCBcInBtbWxEb2N1bWVudHNcIl1cbiAgfSxcbiAgYXJnczoge1xuICAgIC4uLkVtcHR5RXhwcmVzc2lvbi5hcmdzLFxuICAgIGV4cHJlc3Npb246IHtcbiAgICAgIF9fJCRlbGVtZW50OiBcImNvbnRleHRcIixcbiAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICAgIFwiQF9sYWJlbFwiOiBcIkV4cHJlc3Npb24gTmFtZVwiLFxuICAgICAgY29udGV4dEVudHJ5OiBbe1xuICAgICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICAgIHZhcmlhYmxlOiB7XG4gICAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgICAgIFwiQF9uYW1lXCI6IFwiQ29udGV4dEVudHJ5LTFcIlxuICAgICAgICB9LFxuICAgICAgICBleHByZXNzaW9uOiB7XG4gICAgICAgICAgX18kJGVsZW1lbnQ6IFwibGl0ZXJhbEV4cHJlc3Npb25cIixcbiAgICAgICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICAgICAgXCJAX2xhYmVsXCI6IFwiRXhwcmVzc2lvbiBOYW1lXCJcbiAgICAgICAgfVxuICAgICAgfV1cbiAgICB9LFxuICAgIGlzUmVzZXRTdXBwb3J0ZWRPblJvb3RFeHByZXNzaW9uOiBmYWxzZVxuICB9XG59O1xuQmFzZS5wYXJhbWV0ZXJzID0ge1xuICAuLi5CYXNlLnBhcmFtZXRlcnMsXG4gIGRvY3M6IHtcbiAgICAuLi5CYXNlLnBhcmFtZXRlcnM/LmRvY3MsXG4gICAgc291cmNlOiB7XG4gICAgICBvcmlnaW5hbFNvdXJjZTogXCJ7XFxuICByZW5kZXI6IGFyZ3MgPT4gQm94ZWRFeHByZXNzaW9uRWRpdG9yU3RvcnkoKSxcXG4gIHBhcmFtZXRlcnM6IHtcXG4gICAgZXhjbHVkZTogW1xcXCJkYXRhVHlwZXNcXFwiLCBcXFwiYmVlR3d0U2VydmljZVxcXCIsIFxcXCJwbW1sRG9jdW1lbnRzXFxcIl1cXG4gIH0sXFxuICBhcmdzOiB7XFxuICAgIC4uLkVtcHR5RXhwcmVzc2lvbi5hcmdzLFxcbiAgICBleHByZXNzaW9uOiB7XFxuICAgICAgX18kJGVsZW1lbnQ6IFxcXCJsaXRlcmFsRXhwcmVzc2lvblxcXCIsXFxuICAgICAgXFxcIkBfaWRcXFwiOiBnZW5lcmF0ZVV1aWQoKSxcXG4gICAgICBcXFwiQF9sYWJlbFxcXCI6IFxcXCJFeHByZXNzaW9uIE5hbWVcXFwiXFxuICAgIH0sXFxuICAgIGlzUmVzZXRTdXBwb3J0ZWRPblJvb3RFeHByZXNzaW9uOiB0cnVlXFxuICB9XFxufVwiLFxuICAgICAgLi4uQmFzZS5wYXJhbWV0ZXJzPy5kb2NzPy5zb3VyY2VcbiAgICB9XG4gIH1cbn07XG5SZWFkb25seS5wYXJhbWV0ZXJzID0ge1xuICAuLi5SZWFkb25seS5wYXJhbWV0ZXJzLFxuICBkb2NzOiB7XG4gICAgLi4uUmVhZG9ubHkucGFyYW1ldGVycz8uZG9jcyxcbiAgICBzb3VyY2U6IHtcbiAgICAgIG9yaWdpbmFsU291cmNlOiBcIntcXG4gIHJlbmRlcjogYXJncyA9PiBCb3hlZEV4cHJlc3Npb25FZGl0b3JTdG9yeSgpLFxcbiAgcGFyYW1ldGVyczoge1xcbiAgICBleGNsdWRlOiBbXFxcImRhdGFUeXBlc1xcXCIsIFxcXCJiZWVHd3RTZXJ2aWNlXFxcIiwgXFxcInBtbWxEb2N1bWVudHNcXFwiXVxcbiAgfSxcXG4gIGFyZ3M6IHtcXG4gICAgLi4uRW1wdHlFeHByZXNzaW9uLmFyZ3MsXFxuICAgIGV4cHJlc3Npb246IHtcXG4gICAgICBfXyQkZWxlbWVudDogXFxcImxpdGVyYWxFeHByZXNzaW9uXFxcIixcXG4gICAgICBcXFwiQF9pZFxcXCI6IGdlbmVyYXRlVXVpZCgpLFxcbiAgICAgIFxcXCJAX2xhYmVsXFxcIjogXFxcIkV4cHJlc3Npb24gTmFtZVxcXCJcXG4gICAgfSxcXG4gICAgaXNSZXNldFN1cHBvcnRlZE9uUm9vdEV4cHJlc3Npb246IHRydWUsXFxuICAgIGlzUmVhZE9ubHk6IHRydWVcXG4gIH1cXG59XCIsXG4gICAgICAuLi5SZWFkb25seS5wYXJhbWV0ZXJzPy5kb2NzPy5zb3VyY2VcbiAgICB9XG4gIH1cbn07XG5DYW5Ecml2ZS5wYXJhbWV0ZXJzID0ge1xuICAuLi5DYW5Ecml2ZS5wYXJhbWV0ZXJzLFxuICBkb2NzOiB7XG4gICAgLi4uQ2FuRHJpdmUucGFyYW1ldGVycz8uZG9jcyxcbiAgICBzb3VyY2U6IHtcbiAgICAgIG9yaWdpbmFsU291cmNlOiBcIntcXG4gIHJlbmRlcjogYXJncyA9PiBCb3hlZEV4cHJlc3Npb25FZGl0b3JTdG9yeSgpLFxcbiAgcGFyYW1ldGVyczoge1xcbiAgICBleGNsdWRlOiBbXFxcImRhdGFUeXBlc1xcXCIsIFxcXCJiZWVHd3RTZXJ2aWNlXFxcIiwgXFxcInBtbWxEb2N1bWVudHNcXFwiXVxcbiAgfSxcXG4gIGFyZ3M6IHtcXG4gICAgLi4uRW1wdHlFeHByZXNzaW9uLmFyZ3MsXFxuICAgIGV4cHJlc3Npb246IHtcXG4gICAgICBfXyQkZWxlbWVudDogXFxcImxpdGVyYWxFeHByZXNzaW9uXFxcIixcXG4gICAgICBcXFwiQF9pZFxcXCI6IFxcXCJfRDk4RkIzNUEtQzZBNS00QkE3LUFEMzgtMTc2RDU2QTMxODcyXFxcIixcXG4gICAgICBcXFwiQF9sYWJlbFxcXCI6IFxcXCJDYW4gRHJpdmU/XFxcIixcXG4gICAgICBcXFwiQF90eXBlUmVmXFxcIjogRG1uQnVpbHRJbkRhdGFUeXBlLkJvb2xlYW4sXFxuICAgICAgdGV4dDoge1xcbiAgICAgICAgX18kJHRleHQ6IFxcXCJBZ2UgPj0gMTggdGhlbiB0cnVlIGVsc2UgZmFsc2VcXFwiXFxuICAgICAgfVxcbiAgICB9LFxcbiAgICB3aWR0aHNCeUlkOiB7XFxuICAgICAgXFxcIl9EOThGQjM1QS1DNkE1LTRCQTctQUQzOC0xNzZENTZBMzE4NzJcXFwiOiBbNTAwXVxcbiAgICB9LFxcbiAgICBpc1Jlc2V0U3VwcG9ydGVkT25Sb290RXhwcmVzc2lvbjogZmFsc2VcXG4gIH1cXG59XCIsXG4gICAgICAuLi5DYW5Ecml2ZS5wYXJhbWV0ZXJzPy5kb2NzPy5zb3VyY2VcbiAgICB9XG4gIH1cbn07XG5OZXN0ZWQucGFyYW1ldGVycyA9IHtcbiAgLi4uTmVzdGVkLnBhcmFtZXRlcnMsXG4gIGRvY3M6IHtcbiAgICAuLi5OZXN0ZWQucGFyYW1ldGVycz8uZG9jcyxcbiAgICBzb3VyY2U6IHtcbiAgICAgIG9yaWdpbmFsU291cmNlOiBcIntcXG4gIHJlbmRlcjogYXJncyA9PiBCb3hlZEV4cHJlc3Npb25FZGl0b3JTdG9yeSgpLFxcbiAgcGFyYW1ldGVyczoge1xcbiAgICBleGNsdWRlOiBbXFxcImRhdGFUeXBlc1xcXCIsIFxcXCJiZWVHd3RTZXJ2aWNlXFxcIiwgXFxcInBtbWxEb2N1bWVudHNcXFwiXVxcbiAgfSxcXG4gIGFyZ3M6IHtcXG4gICAgLi4uRW1wdHlFeHByZXNzaW9uLmFyZ3MsXFxuICAgIGV4cHJlc3Npb246IHtcXG4gICAgICBfXyQkZWxlbWVudDogXFxcImNvbnRleHRcXFwiLFxcbiAgICAgIFxcXCJAX2lkXFxcIjogZ2VuZXJhdGVVdWlkKCksXFxuICAgICAgXFxcIkBfbGFiZWxcXFwiOiBcXFwiRXhwcmVzc2lvbiBOYW1lXFxcIixcXG4gICAgICBjb250ZXh0RW50cnk6IFt7XFxuICAgICAgICBcXFwiQF9pZFxcXCI6IGdlbmVyYXRlVXVpZCgpLFxcbiAgICAgICAgdmFyaWFibGU6IHtcXG4gICAgICAgICAgXFxcIkBfaWRcXFwiOiBnZW5lcmF0ZVV1aWQoKSxcXG4gICAgICAgICAgXFxcIkBfbmFtZVxcXCI6IFxcXCJDb250ZXh0RW50cnktMVxcXCJcXG4gICAgICAgIH0sXFxuICAgICAgICBleHByZXNzaW9uOiB7XFxuICAgICAgICAgIF9fJCRlbGVtZW50OiBcXFwibGl0ZXJhbEV4cHJlc3Npb25cXFwiLFxcbiAgICAgICAgICBcXFwiQF9pZFxcXCI6IGdlbmVyYXRlVXVpZCgpLFxcbiAgICAgICAgICBcXFwiQF9sYWJlbFxcXCI6IFxcXCJFeHByZXNzaW9uIE5hbWVcXFwiXFxuICAgICAgICB9XFxuICAgICAgfV1cXG4gICAgfSxcXG4gICAgaXNSZXNldFN1cHBvcnRlZE9uUm9vdEV4cHJlc3Npb246IGZhbHNlXFxuICB9XFxufVwiLFxuICAgICAgLi4uTmVzdGVkLnBhcmFtZXRlcnM/LmRvY3M/LnNvdXJjZVxuICAgIH1cbiAgfVxufTsiLCIvKlxuICogTGljZW5zZWQgdG8gdGhlIEFwYWNoZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIChBU0YpIHVuZGVyIG9uZVxuICogb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuICBTZWUgdGhlIE5PVElDRSBmaWxlXG4gKiBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvblxuICogcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuICBUaGUgQVNGIGxpY2Vuc2VzIHRoaXMgZmlsZVxuICogdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZVxuICogXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4gKiB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZyxcbiAqIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXG4gKiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxuICogS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlXG4gKiBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zXG4gKiB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgdHlwZSB7IE1ldGEsIFN0b3J5T2JqIH0gZnJvbSBcIkBzdG9yeWJvb2svcmVhY3RcIjtcbmltcG9ydCB7IEJveGVkRXhwcmVzc2lvbkVkaXRvciwgQm94ZWRFeHByZXNzaW9uRWRpdG9yUHJvcHMgfSBmcm9tIFwiLi4vLi4vLi4vc3JjL0JveGVkRXhwcmVzc2lvbkVkaXRvclwiO1xuaW1wb3J0ICogYXMgRW1wdHkgZnJvbSBcIi4uLy4uL21pc2MvRW1wdHkvRW1wdHlFeHByZXNzaW9uLnN0b3JpZXNcIjtcbmltcG9ydCAqIGFzIExpdGVyYWwgZnJvbSBcIi4uLy4uL2JveGVkRXhwcmVzc2lvbnMvTGl0ZXJhbC9MaXRlcmFsLnN0b3JpZXNcIjtcbmltcG9ydCAqIGFzIFJlbGF0aW9uIGZyb20gXCIuLi8uLi9ib3hlZEV4cHJlc3Npb25zL1JlbGF0aW9uL1JlbGF0aW9uLnN0b3JpZXNcIjtcbmltcG9ydCAqIGFzIERlY2lzaW9uVGFibGUgZnJvbSBcIi4uLy4uL2JveGVkRXhwcmVzc2lvbnMvRGVjaXNpb25UYWJsZS9EZWNpc2lvblRhYmxlLnN0b3JpZXNcIjtcbmltcG9ydCB7IEJveGVkRGVjaXNpb25UYWJsZSwgZ2VuZXJhdGVVdWlkLCBOb3JtYWxpemVkIH0gZnJvbSBcIi4uLy4uLy4uL3NyYy9hcGlcIjtcbmltcG9ydCB7IEJveGVkRXhwcmVzc2lvbkVkaXRvclN0b3J5QXJncyB9IGZyb20gXCIuLi8uLi9ib3hlZEV4cHJlc3Npb25TdG9yaWVzV3JhcHBlclwiO1xuXG4vLyBNb3JlIG9uIGhvdyB0byBzZXQgdXAgc3RvcmllcyBhdDogaHR0cHM6Ly9zdG9yeWJvb2suanMub3JnL2RvY3MvcmVhY3Qvd3JpdGluZy1zdG9yaWVzL2ludHJvZHVjdGlvbiNkZWZhdWx0LWV4cG9ydFxuY29uc3QgbWV0YTogTWV0YTxCb3hlZEV4cHJlc3Npb25FZGl0b3JQcm9wcz4gPSB7XG4gIHRpdGxlOiBcIkZlYXR1cmVzL1NlbGVjdGlvblwiLFxuICBjb21wb25lbnQ6IEJveGVkRXhwcmVzc2lvbkVkaXRvcixcbiAgaW5jbHVkZVN0b3JpZXM6IC9eW0EtWl0vXG59O1xuZXhwb3J0IGRlZmF1bHQgbWV0YTtcbnR5cGUgU3RvcnkgPSBTdG9yeU9iajxCb3hlZEV4cHJlc3Npb25FZGl0b3JTdG9yeUFyZ3M+O1xuZXhwb3J0IGNvbnN0IENhbkRyaXZlOiBTdG9yeSA9IHtcbiAgLi4uTGl0ZXJhbC5DYW5Ecml2ZSxcbiAgYXJnczoge1xuICAgIC4uLkxpdGVyYWwuQ2FuRHJpdmUuYXJncyxcbiAgICBpc1Jlc2V0U3VwcG9ydGVkT25Sb290RXhwcmVzc2lvbjogdHJ1ZVxuICB9XG59O1xuZXhwb3J0IGNvbnN0IFBlb3BsZTogU3RvcnkgPSB7XG4gIC4uLlJlbGF0aW9uLlBlb3BsZSxcbiAgYXJnczoge1xuICAgIC4uLlJlbGF0aW9uLlBlb3BsZS5hcmdzLFxuICAgIGlzUmVzZXRTdXBwb3J0ZWRPblJvb3RFeHByZXNzaW9uOiB0cnVlXG4gIH1cbn07XG5leHBvcnQgY29uc3QgRW1wdHlFeHByZXNzaW9uOiBTdG9yeSA9IHtcbiAgLi4uRW1wdHkuQmFzZSxcbiAgYXJnczoge1xuICAgIC4uLkVtcHR5LkJhc2UuYXJncyxcbiAgICBpc1Jlc2V0U3VwcG9ydGVkT25Sb290RXhwcmVzc2lvbjogdHJ1ZVxuICB9XG59O1xuZXhwb3J0IGNvbnN0IERpc2NvdW50OiBTdG9yeSA9IHtcbiAgLi4uRGVjaXNpb25UYWJsZS5EaXNjb3VudCxcbiAgYXJnczoge1xuICAgIC4uLkRlY2lzaW9uVGFibGUuRGlzY291bnQuYXJncyEsXG4gICAgZXhwcmVzc2lvbjoge1xuICAgICAgLi4uKERlY2lzaW9uVGFibGUuRGlzY291bnQuYXJncyEuZXhwcmVzc2lvbiEgYXMgTm9ybWFsaXplZDxCb3hlZERlY2lzaW9uVGFibGU+KSxcbiAgICAgIHJ1bGU6IFt7XG4gICAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICAgICAgaW5wdXRFbnRyeTogW3tcbiAgICAgICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICAgICAgdGV4dDoge1xuICAgICAgICAgICAgX18kJHRleHQ6IFwiLVwiXG4gICAgICAgICAgfVxuICAgICAgICB9XSxcbiAgICAgICAgb3V0cHV0RW50cnk6IFt7XG4gICAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgICAgIHRleHQ6IHtcbiAgICAgICAgICAgIF9fJCR0ZXh0OiBcIlwiXG4gICAgICAgICAgfVxuICAgICAgICB9XSxcbiAgICAgICAgYW5ub3RhdGlvbkVudHJ5OiBbe1xuICAgICAgICAgIHRleHQ6IHtcbiAgICAgICAgICAgIF9fJCR0ZXh0OiBcIlwiXG4gICAgICAgICAgfVxuICAgICAgICB9XVxuICAgICAgfSwge1xuICAgICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICAgIGlucHV0RW50cnk6IFt7XG4gICAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgICAgIHRleHQ6IHtcbiAgICAgICAgICAgIF9fJCR0ZXh0OiBcIi1cIlxuICAgICAgICAgIH1cbiAgICAgICAgfV0sXG4gICAgICAgIG91dHB1dEVudHJ5OiBbe1xuICAgICAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICAgICAgICB0ZXh0OiB7XG4gICAgICAgICAgICBfXyQkdGV4dDogXCJcIlxuICAgICAgICAgIH1cbiAgICAgICAgfV0sXG4gICAgICAgIGFubm90YXRpb25FbnRyeTogW3tcbiAgICAgICAgICB0ZXh0OiB7XG4gICAgICAgICAgICBfXyQkdGV4dDogXCJcIlxuICAgICAgICAgIH1cbiAgICAgICAgfV1cbiAgICAgIH0sIHtcbiAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgICBpbnB1dEVudHJ5OiBbe1xuICAgICAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICAgICAgICB0ZXh0OiB7XG4gICAgICAgICAgICBfXyQkdGV4dDogXCItXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1dLFxuICAgICAgICBvdXRwdXRFbnRyeTogW3tcbiAgICAgICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICAgICAgdGV4dDoge1xuICAgICAgICAgICAgX18kJHRleHQ6IFwiXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1dLFxuICAgICAgICBhbm5vdGF0aW9uRW50cnk6IFt7XG4gICAgICAgICAgdGV4dDoge1xuICAgICAgICAgICAgX18kJHRleHQ6IFwiXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1dXG4gICAgICB9LCB7XG4gICAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICAgICAgaW5wdXRFbnRyeTogW3tcbiAgICAgICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICAgICAgdGV4dDoge1xuICAgICAgICAgICAgX18kJHRleHQ6IFwiLVwiXG4gICAgICAgICAgfVxuICAgICAgICB9XSxcbiAgICAgICAgb3V0cHV0RW50cnk6IFt7XG4gICAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgICAgIHRleHQ6IHtcbiAgICAgICAgICAgIF9fJCR0ZXh0OiBcIlwiXG4gICAgICAgICAgfVxuICAgICAgICB9XSxcbiAgICAgICAgYW5ub3RhdGlvbkVudHJ5OiBbe1xuICAgICAgICAgIHRleHQ6IHtcbiAgICAgICAgICAgIF9fJCR0ZXh0OiBcIlwiXG4gICAgICAgICAgfVxuICAgICAgICB9XVxuICAgICAgfV1cbiAgICB9XG4gIH1cbn07XG5DYW5Ecml2ZS5wYXJhbWV0ZXJzID0ge1xuICAuLi5DYW5Ecml2ZS5wYXJhbWV0ZXJzLFxuICBkb2NzOiB7XG4gICAgLi4uQ2FuRHJpdmUucGFyYW1ldGVycz8uZG9jcyxcbiAgICBzb3VyY2U6IHtcbiAgICAgIG9yaWdpbmFsU291cmNlOiBcIntcXG4gIC4uLkxpdGVyYWwuQ2FuRHJpdmUsXFxuICBhcmdzOiB7XFxuICAgIC4uLkxpdGVyYWwuQ2FuRHJpdmUuYXJncyxcXG4gICAgaXNSZXNldFN1cHBvcnRlZE9uUm9vdEV4cHJlc3Npb246IHRydWVcXG4gIH1cXG59XCIsXG4gICAgICAuLi5DYW5Ecml2ZS5wYXJhbWV0ZXJzPy5kb2NzPy5zb3VyY2VcbiAgICB9XG4gIH1cbn07XG5QZW9wbGUucGFyYW1ldGVycyA9IHtcbiAgLi4uUGVvcGxlLnBhcmFtZXRlcnMsXG4gIGRvY3M6IHtcbiAgICAuLi5QZW9wbGUucGFyYW1ldGVycz8uZG9jcyxcbiAgICBzb3VyY2U6IHtcbiAgICAgIG9yaWdpbmFsU291cmNlOiBcIntcXG4gIC4uLlJlbGF0aW9uLlBlb3BsZSxcXG4gIGFyZ3M6IHtcXG4gICAgLi4uUmVsYXRpb24uUGVvcGxlLmFyZ3MsXFxuICAgIGlzUmVzZXRTdXBwb3J0ZWRPblJvb3RFeHByZXNzaW9uOiB0cnVlXFxuICB9XFxufVwiLFxuICAgICAgLi4uUGVvcGxlLnBhcmFtZXRlcnM/LmRvY3M/LnNvdXJjZVxuICAgIH1cbiAgfVxufTtcbkVtcHR5RXhwcmVzc2lvbi5wYXJhbWV0ZXJzID0ge1xuICAuLi5FbXB0eUV4cHJlc3Npb24ucGFyYW1ldGVycyxcbiAgZG9jczoge1xuICAgIC4uLkVtcHR5RXhwcmVzc2lvbi5wYXJhbWV0ZXJzPy5kb2NzLFxuICAgIHNvdXJjZToge1xuICAgICAgb3JpZ2luYWxTb3VyY2U6IFwie1xcbiAgLi4uRW1wdHkuQmFzZSxcXG4gIGFyZ3M6IHtcXG4gICAgLi4uRW1wdHkuQmFzZS5hcmdzLFxcbiAgICBpc1Jlc2V0U3VwcG9ydGVkT25Sb290RXhwcmVzc2lvbjogdHJ1ZVxcbiAgfVxcbn1cIixcbiAgICAgIC4uLkVtcHR5RXhwcmVzc2lvbi5wYXJhbWV0ZXJzPy5kb2NzPy5zb3VyY2VcbiAgICB9XG4gIH1cbn07XG5EaXNjb3VudC5wYXJhbWV0ZXJzID0ge1xuICAuLi5EaXNjb3VudC5wYXJhbWV0ZXJzLFxuICBkb2NzOiB7XG4gICAgLi4uRGlzY291bnQucGFyYW1ldGVycz8uZG9jcyxcbiAgICBzb3VyY2U6IHtcbiAgICAgIG9yaWdpbmFsU291cmNlOiBcIntcXG4gIC4uLkRlY2lzaW9uVGFibGUuRGlzY291bnQsXFxuICBhcmdzOiB7XFxuICAgIC4uLkRlY2lzaW9uVGFibGUuRGlzY291bnQuYXJncyEsXFxuICAgIGV4cHJlc3Npb246IHtcXG4gICAgICAuLi4oRGVjaXNpb25UYWJsZS5EaXNjb3VudC5hcmdzIS5leHByZXNzaW9uISBhcyBOb3JtYWxpemVkPEJveGVkRGVjaXNpb25UYWJsZT4pLFxcbiAgICAgIHJ1bGU6IFt7XFxuICAgICAgICBcXFwiQF9pZFxcXCI6IGdlbmVyYXRlVXVpZCgpLFxcbiAgICAgICAgaW5wdXRFbnRyeTogW3tcXG4gICAgICAgICAgXFxcIkBfaWRcXFwiOiBnZW5lcmF0ZVV1aWQoKSxcXG4gICAgICAgICAgdGV4dDoge1xcbiAgICAgICAgICAgIF9fJCR0ZXh0OiBcXFwiLVxcXCJcXG4gICAgICAgICAgfVxcbiAgICAgICAgfV0sXFxuICAgICAgICBvdXRwdXRFbnRyeTogW3tcXG4gICAgICAgICAgXFxcIkBfaWRcXFwiOiBnZW5lcmF0ZVV1aWQoKSxcXG4gICAgICAgICAgdGV4dDoge1xcbiAgICAgICAgICAgIF9fJCR0ZXh0OiBcXFwiXFxcIlxcbiAgICAgICAgICB9XFxuICAgICAgICB9XSxcXG4gICAgICAgIGFubm90YXRpb25FbnRyeTogW3tcXG4gICAgICAgICAgdGV4dDoge1xcbiAgICAgICAgICAgIF9fJCR0ZXh0OiBcXFwiXFxcIlxcbiAgICAgICAgICB9XFxuICAgICAgICB9XVxcbiAgICAgIH0sIHtcXG4gICAgICAgIFxcXCJAX2lkXFxcIjogZ2VuZXJhdGVVdWlkKCksXFxuICAgICAgICBpbnB1dEVudHJ5OiBbe1xcbiAgICAgICAgICBcXFwiQF9pZFxcXCI6IGdlbmVyYXRlVXVpZCgpLFxcbiAgICAgICAgICB0ZXh0OiB7XFxuICAgICAgICAgICAgX18kJHRleHQ6IFxcXCItXFxcIlxcbiAgICAgICAgICB9XFxuICAgICAgICB9XSxcXG4gICAgICAgIG91dHB1dEVudHJ5OiBbe1xcbiAgICAgICAgICBcXFwiQF9pZFxcXCI6IGdlbmVyYXRlVXVpZCgpLFxcbiAgICAgICAgICB0ZXh0OiB7XFxuICAgICAgICAgICAgX18kJHRleHQ6IFxcXCJcXFwiXFxuICAgICAgICAgIH1cXG4gICAgICAgIH1dLFxcbiAgICAgICAgYW5ub3RhdGlvbkVudHJ5OiBbe1xcbiAgICAgICAgICB0ZXh0OiB7XFxuICAgICAgICAgICAgX18kJHRleHQ6IFxcXCJcXFwiXFxuICAgICAgICAgIH1cXG4gICAgICAgIH1dXFxuICAgICAgfSwge1xcbiAgICAgICAgXFxcIkBfaWRcXFwiOiBnZW5lcmF0ZVV1aWQoKSxcXG4gICAgICAgIGlucHV0RW50cnk6IFt7XFxuICAgICAgICAgIFxcXCJAX2lkXFxcIjogZ2VuZXJhdGVVdWlkKCksXFxuICAgICAgICAgIHRleHQ6IHtcXG4gICAgICAgICAgICBfXyQkdGV4dDogXFxcIi1cXFwiXFxuICAgICAgICAgIH1cXG4gICAgICAgIH1dLFxcbiAgICAgICAgb3V0cHV0RW50cnk6IFt7XFxuICAgICAgICAgIFxcXCJAX2lkXFxcIjogZ2VuZXJhdGVVdWlkKCksXFxuICAgICAgICAgIHRleHQ6IHtcXG4gICAgICAgICAgICBfXyQkdGV4dDogXFxcIlxcXCJcXG4gICAgICAgICAgfVxcbiAgICAgICAgfV0sXFxuICAgICAgICBhbm5vdGF0aW9uRW50cnk6IFt7XFxuICAgICAgICAgIHRleHQ6IHtcXG4gICAgICAgICAgICBfXyQkdGV4dDogXFxcIlxcXCJcXG4gICAgICAgICAgfVxcbiAgICAgICAgfV1cXG4gICAgICB9LCB7XFxuICAgICAgICBcXFwiQF9pZFxcXCI6IGdlbmVyYXRlVXVpZCgpLFxcbiAgICAgICAgaW5wdXRFbnRyeTogW3tcXG4gICAgICAgICAgXFxcIkBfaWRcXFwiOiBnZW5lcmF0ZVV1aWQoKSxcXG4gICAgICAgICAgdGV4dDoge1xcbiAgICAgICAgICAgIF9fJCR0ZXh0OiBcXFwiLVxcXCJcXG4gICAgICAgICAgfVxcbiAgICAgICAgfV0sXFxuICAgICAgICBvdXRwdXRFbnRyeTogW3tcXG4gICAgICAgICAgXFxcIkBfaWRcXFwiOiBnZW5lcmF0ZVV1aWQoKSxcXG4gICAgICAgICAgdGV4dDoge1xcbiAgICAgICAgICAgIF9fJCR0ZXh0OiBcXFwiXFxcIlxcbiAgICAgICAgICB9XFxuICAgICAgICB9XSxcXG4gICAgICAgIGFubm90YXRpb25FbnRyeTogW3tcXG4gICAgICAgICAgdGV4dDoge1xcbiAgICAgICAgICAgIF9fJCR0ZXh0OiBcXFwiXFxcIlxcbiAgICAgICAgICB9XFxuICAgICAgICB9XVxcbiAgICAgIH1dXFxuICAgIH1cXG4gIH1cXG59XCIsXG4gICAgICAuLi5EaXNjb3VudC5wYXJhbWV0ZXJzPy5kb2NzPy5zb3VyY2VcbiAgICB9XG4gIH1cbn07Il0sIm5hbWVzIjpbIkJveGVkRXhwcmVzc2lvbkVkaXRvciIsIkJveGVkRXhwcmVzc2lvbkVkaXRvclN0b3J5IiwiQmFzZSIsIkVtcHR5RXhwcmVzc2lvbiIsIkRtbkJ1aWx0SW5EYXRhVHlwZSIsImdlbmVyYXRlVXVpZCIsIm1ldGEiLCJ0aXRsZSIsImNvbXBvbmVudCIsImluY2x1ZGVTdG9yaWVzIiwicmVuZGVyIiwiYXJncyIsInBhcmFtZXRlcnMiLCJleGNsdWRlIiwiZXhwcmVzc2lvbiIsIl9fJCRlbGVtZW50IiwiaXNSZXNldFN1cHBvcnRlZE9uUm9vdEV4cHJlc3Npb24iLCJSZWFkb25seSIsImlzUmVhZE9ubHkiLCJDYW5Ecml2ZSIsIkJvb2xlYW4iLCJ0ZXh0IiwiX18kJHRleHQiLCJ3aWR0aHNCeUlkIiwiTmVzdGVkIiwiY29udGV4dEVudHJ5IiwidmFyaWFibGUiLCJkb2NzIiwiX2EiLCJzb3VyY2UiLCJvcmlnaW5hbFNvdXJjZSIsIl9jIiwiX2IiLCJfZCIsIl9mIiwiX2UiLCJfZyIsIl9qIiwiX2giLCJfayIsIl9tIiwiX2wiLCJfX25hbWVkRXhwb3J0c09yZGVyIiwiRW1wdHkiLCJMaXRlcmFsIiwiUmVsYXRpb24iLCJEZWNpc2lvblRhYmxlIiwiUGVvcGxlIiwiRGlzY291bnQiLCJydWxlIiwiaW5wdXRFbnRyeSIsIm91dHB1dEVudHJ5IiwiYW5ub3RhdGlvbkVudHJ5Il0sInNvdXJjZVJvb3QiOiIifQ==