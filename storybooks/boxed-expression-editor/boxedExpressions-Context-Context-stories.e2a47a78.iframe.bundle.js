"use strict";
(self["webpackChunk_kie_tools_boxed_expression_component"] = self["webpackChunk_kie_tools_boxed_expression_component"] || []).push([["boxedExpressions-Context-Context-stories"],{

/***/ "./stories/boxedExpressions/Context/Context.stories.tsx":
/*!**************************************************************!*\
  !*** ./stories/boxedExpressions/Context/Context.stories.tsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Base: () => (/* binding */ Base),
/* harmony export */   Customer: () => (/* binding */ Customer),
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
/* harmony import */ var _src_resizing_WidthConstants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../src/resizing/WidthConstants */ "./src/resizing/WidthConstants.ts");
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;





const meta = {
  title: "Boxed Expressions/Context",
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
      __$$element: "context",
      "@_id": "_35255561-88FA-4A78-9C3F-61855213EE0F",
      "@_label": "Expression Name",
      "@_typeRef": undefined,
      contextEntry: [{
        "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
        variable: {
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
          "@_name": "ContextEntry-1",
          "@_typeRef": undefined
        },
        expression: undefined
      }]
    },
    isResetSupportedOnRootExpression: true,
    widthsById: {
      "_35255561-88FA-4A78-9C3F-61855213EE0F": [_src_resizing_WidthConstants__WEBPACK_IMPORTED_MODULE_4__.CONTEXT_ENTRY_VARIABLE_MIN_WIDTH]
    }
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
      __$$element: "context",
      "@_id": "_35255561-88FA-4A78-9C3F-61855213EE0F",
      "@_label": "Expression Name",
      "@_typeRef": undefined,
      contextEntry: [{
        "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
        variable: {
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
          "@_name": "ContextEntry-1",
          "@_typeRef": undefined
        },
        expression: {
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
          __$$element: "literalExpression",
          text: {
            __$$text: "readonly text"
          }
        }
      }]
    },
    isResetSupportedOnRootExpression: true,
    widthsById: {
      "_35255561-88FA-4A78-9C3F-61855213EE0F": [_src_resizing_WidthConstants__WEBPACK_IMPORTED_MODULE_4__.CONTEXT_ENTRY_VARIABLE_MIN_WIDTH]
    },
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
      __$$element: "context",
      "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
      "@_label": "Installment calculation",
      "@_typeRef": _src_api__WEBPACK_IMPORTED_MODULE_3__.DmnBuiltInDataType.Number,
      contextEntry: [{
        "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
        variable: {
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
          "@_name": "Fee",
          "@_typeRef": _src_api__WEBPACK_IMPORTED_MODULE_3__.DmnBuiltInDataType.Number
        },
        expression: {
          __$$element: "literalExpression",
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
          "@_label": "Fee",
          "@_typeRef": _src_api__WEBPACK_IMPORTED_MODULE_3__.DmnBuiltInDataType.Number,
          text: {
            __$$text: "25"
          }
        }
      }, {
        "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
        variable: {
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
          "@_name": "Repayments",
          "@_typeRef": _src_api__WEBPACK_IMPORTED_MODULE_3__.DmnBuiltInDataType.Number
        },
        expression: {
          __$$element: "literalExpression",
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
          "@_label": "Repayments",
          "@_typeRef": _src_api__WEBPACK_IMPORTED_MODULE_3__.DmnBuiltInDataType.Number,
          text: {
            __$$text: `(Amount*Rate/12) /\n(1-(1+Rate/12)**-Term)`
          }
        }
      }, {
        "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
        expression: {
          __$$element: "literalExpression",
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
          "@_label": "Result Expression",
          "@_typeRef": _src_api__WEBPACK_IMPORTED_MODULE_3__.DmnBuiltInDataType.Number,
          text: {
            __$$text: "Fee + Repayments"
          }
        }
      }]
    },
    isResetSupportedOnRootExpression: false
  }
};
const Customer = {
  render: args => (0,_boxedExpressionStoriesWrapper__WEBPACK_IMPORTED_MODULE_1__.BoxedExpressionEditorStory)(),
  parameters: {
    exclude: ["dataTypes", "beeGwtService", "pmmlDocuments"]
  },
  args: {
    ..._misc_Empty_EmptyExpression_stories__WEBPACK_IMPORTED_MODULE_2__.Base.args,
    expression: {
      __$$element: "context",
      "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
      "@_label": "Customer",
      "@_typeRef": "tCustomer",
      contextEntry: [{
        "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
        variable: {
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
          "@_name": "Name",
          "@_typeRef": _src_api__WEBPACK_IMPORTED_MODULE_3__.DmnBuiltInDataType.Number
        },
        expression: {
          __$$element: "literalExpression",
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
          "@_label": "Name",
          "@_typeRef": _src_api__WEBPACK_IMPORTED_MODULE_3__.DmnBuiltInDataType.Number,
          text: {
            __$$text: "Luiz"
          }
        }
      }, {
        "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
        variable: {
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
          "@_name": "Age",
          "@_typeRef": _src_api__WEBPACK_IMPORTED_MODULE_3__.DmnBuiltInDataType.Number
        },
        expression: {
          __$$element: "literalExpression",
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
          "@_label": "Age",
          "@_typeRef": _src_api__WEBPACK_IMPORTED_MODULE_3__.DmnBuiltInDataType.Number,
          text: {
            __$$text: "30"
          }
        }
      }]
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
      "@_id": "_35255561-88FA-4A78-9C3F-61855213EE0F",
      "@_label": "Expression Name",
      contextEntry: [{
        "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
        variable: {
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
          "@_name": "ContextEntry-1"
        },
        expression: {
          __$$element: "context",
          "@_id": "_5D97B484-8003-4323-AADB-AA4C6F3ECA73",
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
              "@_label": "ContextEntry-1",
              text: {
                __$$text: ""
              }
            }
          }]
        }
      }]
    },
    isResetSupportedOnRootExpression: false,
    widthsById: {
      "_35255561-88FA-4A78-9C3F-61855213EE0F": [_src_resizing_WidthConstants__WEBPACK_IMPORTED_MODULE_4__.CONTEXT_ENTRY_VARIABLE_MIN_WIDTH],
      "_5D97B484-8003-4323-AADB-AA4C6F3ECA73": [_src_resizing_WidthConstants__WEBPACK_IMPORTED_MODULE_4__.CONTEXT_ENTRY_VARIABLE_MIN_WIDTH]
    }
  }
};
Base.parameters = {
  ...Base.parameters,
  docs: {
    ...((_a = Base.parameters) === null || _a === void 0 ? void 0 : _a.docs),
    source: {
      originalSource: "{\n  render: args => BoxedExpressionEditorStory(),\n  parameters: {\n    exclude: [\"dataTypes\", \"beeGwtService\", \"pmmlDocuments\"]\n  },\n  args: {\n    ...EmptyExpression.args,\n    expression: {\n      __$$element: \"context\",\n      \"@_id\": \"_35255561-88FA-4A78-9C3F-61855213EE0F\",\n      \"@_label\": \"Expression Name\",\n      \"@_typeRef\": undefined,\n      contextEntry: [{\n        \"@_id\": generateUuid(),\n        variable: {\n          \"@_id\": generateUuid(),\n          \"@_name\": \"ContextEntry-1\",\n          \"@_typeRef\": undefined\n        },\n        expression: undefined!\n      }]\n    },\n    isResetSupportedOnRootExpression: true,\n    widthsById: {\n      \"_35255561-88FA-4A78-9C3F-61855213EE0F\": [CONTEXT_ENTRY_VARIABLE_MIN_WIDTH]\n    }\n  }\n}",
      ...((_c = (_b = Base.parameters) === null || _b === void 0 ? void 0 : _b.docs) === null || _c === void 0 ? void 0 : _c.source)
    }
  }
};
Readonly.parameters = {
  ...Readonly.parameters,
  docs: {
    ...((_d = Readonly.parameters) === null || _d === void 0 ? void 0 : _d.docs),
    source: {
      originalSource: "{\n  render: args => BoxedExpressionEditorStory(),\n  parameters: {\n    exclude: [\"dataTypes\", \"beeGwtService\", \"pmmlDocuments\"]\n  },\n  args: {\n    ...EmptyExpression.args,\n    expression: {\n      __$$element: \"context\",\n      \"@_id\": \"_35255561-88FA-4A78-9C3F-61855213EE0F\",\n      \"@_label\": \"Expression Name\",\n      \"@_typeRef\": undefined,\n      contextEntry: [{\n        \"@_id\": generateUuid(),\n        variable: {\n          \"@_id\": generateUuid(),\n          \"@_name\": \"ContextEntry-1\",\n          \"@_typeRef\": undefined\n        },\n        expression: {\n          \"@_id\": generateUuid(),\n          __$$element: \"literalExpression\",\n          text: {\n            __$$text: \"readonly text\"\n          }\n        }\n      }]\n    },\n    isResetSupportedOnRootExpression: true,\n    widthsById: {\n      \"_35255561-88FA-4A78-9C3F-61855213EE0F\": [CONTEXT_ENTRY_VARIABLE_MIN_WIDTH]\n    },\n    isReadOnly: true\n  }\n}",
      ...((_f = (_e = Readonly.parameters) === null || _e === void 0 ? void 0 : _e.docs) === null || _f === void 0 ? void 0 : _f.source)
    }
  }
};
InstallmentCalculation.parameters = {
  ...InstallmentCalculation.parameters,
  docs: {
    ...((_g = InstallmentCalculation.parameters) === null || _g === void 0 ? void 0 : _g.docs),
    source: {
      originalSource: "{\n  render: args => BoxedExpressionEditorStory(),\n  parameters: {\n    exclude: [\"dataTypes\", \"beeGwtService\", \"pmmlDocuments\"]\n  },\n  args: {\n    ...EmptyExpression.args,\n    expression: {\n      __$$element: \"context\",\n      \"@_id\": generateUuid(),\n      \"@_label\": \"Installment calculation\",\n      \"@_typeRef\": DmnBuiltInDataType.Number,\n      contextEntry: [{\n        \"@_id\": generateUuid(),\n        variable: {\n          \"@_id\": generateUuid(),\n          \"@_name\": \"Fee\",\n          \"@_typeRef\": DmnBuiltInDataType.Number\n        },\n        expression: {\n          __$$element: \"literalExpression\",\n          \"@_id\": generateUuid(),\n          \"@_label\": \"Fee\",\n          \"@_typeRef\": DmnBuiltInDataType.Number,\n          text: {\n            __$$text: \"25\"\n          }\n        }\n      }, {\n        \"@_id\": generateUuid(),\n        variable: {\n          \"@_id\": generateUuid(),\n          \"@_name\": \"Repayments\",\n          \"@_typeRef\": DmnBuiltInDataType.Number\n        },\n        expression: {\n          __$$element: \"literalExpression\",\n          \"@_id\": generateUuid(),\n          \"@_label\": \"Repayments\",\n          \"@_typeRef\": DmnBuiltInDataType.Number,\n          text: {\n            __$$text: `(Amount*Rate/12) /\\n(1-(1+Rate/12)**-Term)`\n          }\n        }\n      }, {\n        \"@_id\": generateUuid(),\n        // The result expression is a ContextEntry without variable\n        expression: {\n          __$$element: \"literalExpression\",\n          \"@_id\": generateUuid(),\n          \"@_label\": \"Result Expression\",\n          \"@_typeRef\": DmnBuiltInDataType.Number,\n          text: {\n            __$$text: \"Fee + Repayments\"\n          }\n        }\n      }]\n    },\n    isResetSupportedOnRootExpression: false\n  }\n}",
      ...((_j = (_h = InstallmentCalculation.parameters) === null || _h === void 0 ? void 0 : _h.docs) === null || _j === void 0 ? void 0 : _j.source)
    }
  }
};
Customer.parameters = {
  ...Customer.parameters,
  docs: {
    ...((_k = Customer.parameters) === null || _k === void 0 ? void 0 : _k.docs),
    source: {
      originalSource: "{\n  render: args => BoxedExpressionEditorStory(),\n  parameters: {\n    exclude: [\"dataTypes\", \"beeGwtService\", \"pmmlDocuments\"]\n  },\n  args: {\n    ...EmptyExpression.args,\n    expression: {\n      __$$element: \"context\",\n      \"@_id\": generateUuid(),\n      \"@_label\": \"Customer\",\n      \"@_typeRef\": \"tCustomer\",\n      contextEntry: [{\n        \"@_id\": generateUuid(),\n        variable: {\n          \"@_id\": generateUuid(),\n          \"@_name\": \"Name\",\n          \"@_typeRef\": DmnBuiltInDataType.Number\n        },\n        expression: {\n          __$$element: \"literalExpression\",\n          \"@_id\": generateUuid(),\n          \"@_label\": \"Name\",\n          \"@_typeRef\": DmnBuiltInDataType.Number,\n          text: {\n            __$$text: \"Luiz\"\n          }\n        }\n      }, {\n        \"@_id\": generateUuid(),\n        variable: {\n          \"@_id\": generateUuid(),\n          \"@_name\": \"Age\",\n          \"@_typeRef\": DmnBuiltInDataType.Number\n        },\n        expression: {\n          __$$element: \"literalExpression\",\n          \"@_id\": generateUuid(),\n          \"@_label\": \"Age\",\n          \"@_typeRef\": DmnBuiltInDataType.Number,\n          text: {\n            __$$text: \"30\"\n          }\n        }\n      }]\n    },\n    isResetSupportedOnRootExpression: false\n  }\n}",
      ...((_m = (_l = Customer.parameters) === null || _l === void 0 ? void 0 : _l.docs) === null || _m === void 0 ? void 0 : _m.source)
    }
  }
};
Nested.parameters = {
  ...Nested.parameters,
  docs: {
    ...((_o = Nested.parameters) === null || _o === void 0 ? void 0 : _o.docs),
    source: {
      originalSource: "{\n  render: args => BoxedExpressionEditorStory(),\n  parameters: {\n    exclude: [\"dataTypes\", \"beeGwtService\", \"pmmlDocuments\"]\n  },\n  args: {\n    ...EmptyExpression.args,\n    expression: {\n      __$$element: \"context\",\n      \"@_id\": \"_35255561-88FA-4A78-9C3F-61855213EE0F\",\n      \"@_label\": \"Expression Name\",\n      contextEntry: [{\n        \"@_id\": generateUuid(),\n        variable: {\n          \"@_id\": generateUuid(),\n          \"@_name\": \"ContextEntry-1\"\n        },\n        expression: {\n          __$$element: \"context\",\n          \"@_id\": \"_5D97B484-8003-4323-AADB-AA4C6F3ECA73\",\n          \"@_label\": \"Expression Name\",\n          contextEntry: [{\n            \"@_id\": generateUuid(),\n            variable: {\n              \"@_id\": generateUuid(),\n              \"@_name\": \"ContextEntry-1\"\n            },\n            expression: {\n              __$$element: \"literalExpression\",\n              \"@_id\": generateUuid(),\n              \"@_label\": \"ContextEntry-1\",\n              text: {\n                __$$text: \"\"\n              }\n            }\n          }]\n        }\n      }]\n    },\n    isResetSupportedOnRootExpression: false,\n    widthsById: {\n      \"_35255561-88FA-4A78-9C3F-61855213EE0F\": [CONTEXT_ENTRY_VARIABLE_MIN_WIDTH],\n      \"_5D97B484-8003-4323-AADB-AA4C6F3ECA73\": [CONTEXT_ENTRY_VARIABLE_MIN_WIDTH]\n    }\n  }\n}",
      ...((_q = (_p = Nested.parameters) === null || _p === void 0 ? void 0 : _p.docs) === null || _q === void 0 ? void 0 : _q.source)
    }
  }
};
const __namedExportsOrder = ["Base", "Readonly", "InstallmentCalculation", "Customer", "Nested"];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm94ZWRFeHByZXNzaW9ucy1Db250ZXh0LUNvbnRleHQtc3Rvcmllcy5lMmE0N2E3OC5pZnJhbWUuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQnVHO0FBQ1U7QUFDOUI7QUFDZjtBQUNvQjtBQUd4RixNQUFNTyxJQUFJLEdBQXFDO0VBQzdDQyxLQUFLLEVBQUUsMkJBQTJCO0VBQ2xDQyxTQUFTLEVBQUVULDZFQUFxQjtFQUNoQ1UsY0FBYyxFQUFFO0NBQ2pCO0FBQ0QsaUVBQWVILElBQUksRUFBQztBQUliLE1BQU1MLElBQUksR0FBVTtFQUN6QlMsTUFBTSxFQUFFQyxJQUFJLElBQUlYLDBGQUEwQixFQUFFO0VBQzVDWSxVQUFVLEVBQUU7SUFDVkMsT0FBTyxFQUFFLENBQUMsV0FBVyxFQUFFLGVBQWUsRUFBRSxlQUFlO0dBQ3hEO0VBQ0RGLElBQUksRUFBRTtJQUNKLEdBQUdULHFFQUFlLENBQUNTLElBQUk7SUFDdkJHLFVBQVUsRUFBRTtNQUNWQyxXQUFXLEVBQUUsU0FBUztNQUN0QixNQUFNLEVBQUUsdUNBQXVDO01BQy9DLFNBQVMsRUFBRSxpQkFBaUI7TUFDNUIsV0FBVyxFQUFFQyxTQUFTO01BQ3RCQyxZQUFZLEVBQUUsQ0FBQztRQUNiLE1BQU0sRUFBRWIsc0RBQVksRUFBRTtRQUN0QmMsUUFBUSxFQUFFO1VBQ1IsTUFBTSxFQUFFZCxzREFBWSxFQUFFO1VBQ3RCLFFBQVEsRUFBRSxnQkFBZ0I7VUFDMUIsV0FBVyxFQUFFWTtTQUNkO1FBQ0RGLFVBQVUsRUFBRUU7T0FDYjtLQUNGO0lBQ0RHLGdDQUFnQyxFQUFFLElBQUk7SUFDdENDLFVBQVUsRUFBRTtNQUNWLHVDQUF1QyxFQUFFLENBQUNmLDBGQUFnQzs7O0NBRy9FO0FBQ00sTUFBTWdCLFFBQVEsR0FBVTtFQUM3QlgsTUFBTSxFQUFFQyxJQUFJLElBQUlYLDBGQUEwQixFQUFFO0VBQzVDWSxVQUFVLEVBQUU7SUFDVkMsT0FBTyxFQUFFLENBQUMsV0FB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NkIsU0FBUztJQUNURCxhQUFhO0lBQ2JFLGFBQWE7SUFDYi9CLGdDQUFnQyxFQUFFOztDQUVyQztBQUNEbEIsSUFBSSxDQUFDVyxVQUFVLEdBQUc7RUFDaEIsR0FBR1gsSUFBSSxDQUFDVyxVQUFVO0VBQ2xCaUIsSUFBSSxFQUFFO0lBQ0osSUFBRyxDQUFBQyxFQUFBLEdBQUE3QixJQUFJLENBQUNXLFVBQVUsY0FBQWtCLEVBQUEsdUJBQUFBLEVBQUEsQ0FBRUQsSUFBSTtJQUN4QkUsTUFBTSxFQUFFO01BQ05DLGNBQWMsRUFBRSxnU0FBZ1M7TUFDaFQsSUFBRyxDQUFBQyxFQUFBLElBQUFDLEVBQUEsR0FBQWpDLElBQUksQ0FBQ1csVUFBVSxjQUFBc0IsRUFBQSx1QkFBQUEsRUFBQSxDQUFFTCxJQUFJLGNBQUFJLEVBQUEsdUJBQUFBLEVBQUEsQ0FBRUYsTUFBTTs7O0NBR3JDO0FBQUMsTUFBQWdCLG1CQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGtpZS10b29scy9ib3hlZC1leHByZXNzaW9uLWNvbXBvbmVudC8uL3N0b3JpZXMvYm94ZWRFeHByZXNzaW9ucy9Db250ZXh0L0NvbnRleHQuc3Rvcmllcy50c3giLCJ3ZWJwYWNrOi8vQGtpZS10b29scy9ib3hlZC1leHByZXNzaW9uLWNvbXBvbmVudC8uL3N0b3JpZXMvbWlzYy9FbXB0eS9FbXB0eUV4cHJlc3Npb24uc3Rvcmllcy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIExpY2Vuc2VkIHRvIHRoZSBBcGFjaGUgU29mdHdhcmUgRm91bmRhdGlvbiAoQVNGKSB1bmRlciBvbmVcbiAqIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiAgU2VlIHRoZSBOT1RJQ0UgZmlsZVxuICogZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb25cbiAqIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLiAgVGhlIEFTRiBsaWNlbnNlcyB0aGlzIGZpbGVcbiAqIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGVcbiAqIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuICogd2l0aCB0aGUgTGljZW5zZS4gIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsXG4gKiBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxuICogXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcbiAqIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZVxuICogc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9uc1xuICogdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHR5cGUgeyBNZXRhLCBTdG9yeU9iaiB9IGZyb20gXCJAc3Rvcnlib29rL3JlYWN0XCI7XG5pbXBvcnQgeyBCb3hlZEV4cHJlc3Npb25FZGl0b3IsIEJveGVkRXhwcmVzc2lvbkVkaXRvclByb3BzIH0gZnJvbSBcIi4uLy4uLy4uL3NyYy9Cb3hlZEV4cHJlc3Npb25FZGl0b3JcIjtcbmltcG9ydCB7IEJveGVkRXhwcmVzc2lvbkVkaXRvclN0b3J5LCBCb3hlZEV4cHJlc3Npb25FZGl0b3JTdG9yeUFyZ3MgfSBmcm9tIFwiLi4vLi4vYm94ZWRFeHByZXNzaW9uU3Rvcmllc1dyYXBwZXJcIjtcbmltcG9ydCB7IEJhc2UgYXMgRW1wdHlFeHByZXNzaW9uIH0gZnJvbSBcIi4uLy4uL21pc2MvRW1wdHkvRW1wdHlFeHByZXNzaW9uLnN0b3JpZXNcIjtcbmltcG9ydCB7IERtbkJ1aWx0SW5EYXRhVHlwZSwgZ2VuZXJhdGVVdWlkIH0gZnJvbSBcIi4uLy4uLy4uL3NyYy9hcGlcIjtcbmltcG9ydCB7IENPTlRFWFRfRU5UUllfVkFSSUFCTEVfTUlOX1dJRFRIIH0gZnJvbSBcIi4uLy4uLy4uL3NyYy9yZXNpemluZy9XaWR0aENvbnN0YW50c1wiO1xuXG4vLyBNb3JlIG9uIGhvdyB0byBzZXQgdXAgc3RvcmllcyBhdDogaHR0cHM6Ly9zdG9yeWJvb2suanMub3JnL2RvY3MvcmVhY3Qvd3JpdGluZy1zdG9yaWVzL2ludHJvZHVjdGlvbiNkZWZhdWx0LWV4cG9ydFxuY29uc3QgbWV0YTogTWV0YTxCb3hlZEV4cHJlc3Npb25FZGl0b3JQcm9wcz4gPSB7XG4gIHRpdGxlOiBcIkJveGVkIEV4cHJlc3Npb25zL0NvbnRleHRcIixcbiAgY29tcG9uZW50OiBCb3hlZEV4cHJlc3Npb25FZGl0b3IsXG4gIGluY2x1ZGVTdG9yaWVzOiAvXltBLVpdL1xufTtcbmV4cG9ydCBkZWZhdWx0IG1ldGE7XG50eXBlIFN0b3J5ID0gU3RvcnlPYmo8Qm94ZWRFeHByZXNzaW9uRWRpdG9yU3RvcnlBcmdzPjtcblxuLy8gTW9yZSBvbiB3cml0aW5nIHN0b3JpZXMgd2l0aCBhcmdzOiBodHRwczovL3N0b3J5Ym9vay5qcy5vcmcvZG9jcy9yZWFjdC93cml0aW5nLXN0b3JpZXMvYXJnc1xuZXhwb3J0IGNvbnN0IEJhc2U6IFN0b3J5ID0ge1xuICByZW5kZXI6IGFyZ3MgPT4gQm94ZWRFeHByZXNzaW9uRWRpdG9yU3RvcnkoKSxcbiAgcGFyYW1ldGVyczoge1xuICAgIGV4Y2x1ZGU6IFtcImRhdGFUeXBlc1wiLCBcImJlZUd3dFNlcnZpY2VcIiwgXCJwbW1sRG9jdW1lbnRzXCJdXG4gIH0sXG4gIGFyZ3M6IHtcbiAgICAuLi5FbXB0eUV4cHJlc3Npb24uYXJncyxcbiAgICBleHByZXNzaW9uOiB7XG4gICAgICBfXyQkZWxlbWVudDogXCJjb250ZXh0XCIsXG4gICAgICBcIkBfaWRcIjogXCJfMzUyNTU1NjEtODhGQS00QTc4LTlDM0YtNjE4NTUyMTNFRTBGXCIsXG4gICAgICBcIkBfbGFiZWxcIjogXCJFeHByZXNzaW9uIE5hbWVcIixcbiAgICAgIFwiQF90eXBlUmVmXCI6IHVuZGVmaW5lZCxcbiAgICAgIGNvbnRleHRFbnRyeTogW3tcbiAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgICB2YXJpYWJsZToge1xuICAgICAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICAgICAgICBcIkBfbmFtZVwiOiBcIkNvbnRleHRFbnRyeS0xXCIsXG4gICAgICAgICAgXCJAX3R5cGVSZWZcIjogdW5kZWZpbmVkXG4gICAgICAgIH0sXG4gICAgICAgIGV4cHJlc3Npb246IHVuZGVmaW5lZCFcbiAgICAgIH1dXG4gICAgfSxcbiAgICBpc1Jlc2V0U3VwcG9ydGVkT25Sb290RXhwcmVzc2lvbjogdHJ1ZSxcbiAgICB3aWR0aHNCeUlkOiB7XG4gICAgICBcIl8zNTI1NTU2MS04OEZBLTRBNzgtOUMzRi02MTg1NTIxM0VFMEZcIjogW0NPTlRFWFRfRU5UUllfVkFSSUFCTEVfTUlOX1dJRFRIXVxuICAgIH1cbiAgfVxufTtcbmV4cG9ydCBjb25zdCBSZWFkb25seTogU3RvcnkgPSB7XG4gIHJlbmRlcjogYXJncyA9PiBCb3hlZEV4cHJlc3Npb25FZGl0b3JTdG9yeSgpLFxuICBwYXJhbWV0ZXJzOiB7XG4gICAgZXhjbHVkZTogW1wiZGF0YVR5cGVzXCIsIFwiYmVlR3d0U2VydmljZVwiLCBcInBtbWxEb2N1bWVudHNcIl1cbiAgfSxcbiAgYXJnczoge1xuICAgIC4uLkVtcHR5RXhwcmVzc2lvbi5hcmdzLFxuICAgIGV4cHJlc3Npb246IHtcbiAgICAgIF9fJCRlbGVtZW50OiBcImNvbnRleHRcIixcbiAgICAgIFwiQF9pZFwiOiBcIl8zNTI1NTU2MS04OEZBLTRBNzgtOUMzRi02MTg1NTIxM0VFMEZcIixcbiAgICAgIFwiQF9sYWJlbFwiOiBcIkV4cHJlc3Npb24gTmFtZVwiLFxuICAgICAgXCJAX3R5cGVSZWZcIjogdW5kZWZpbmVkLFxuICAgICAgY29udGV4dEVudHJ5OiBbe1xuICAgICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICAgIHZhcmlhYmxlOiB7XG4gICAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgICAgIFwiQF9uYW1lXCI6IFwiQ29udGV4dEVudHJ5LTFcIixcbiAgICAgICAgICBcIkBfdHlwZVJlZlwiOiB1bmRlZmluZWRcbiAgICAgICAgfSxcbiAgICAgICAgZXhwcmVzc2lvbjoge1xuICAgICAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICAgICAgICBfXyQkZWxlbWVudDogXCJsaXRlcmFsRXhwcmVzc2lvblwiLFxuICAgICAgICAgIHRleHQ6IHtcbiAgICAgICAgICAgIF9fJCR0ZXh0OiBcInJlYWRvbmx5IHRleHRcIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfV1cbiAgICB9LFxuICAgIGlzUmVzZXRTdXBwb3J0ZWRPblJvb3RFeHByZXNzaW9uOiB0cnVlLFxuICAgIHdpZHRoc0J5SWQ6IHtcbiAgICAgIFwiXzM1MjU1NTYxLTg4RkEtNEE3OC05QzNGLTYxODU1MjEzRUUwRlwiOiBbQ09OVEVYVF9FTlRSWV9WQVJJQUJMRV9NSU5fV0lEVEhdXG4gICAgfSxcbiAgICBpc1JlYWRPbmx5OiB0cnVlXG4gIH1cbn07XG5leHBvcnQgY29uc3QgSW5zdGFsbG1lbnRDYWxjdWxhdGlvbjogU3RvcnkgPSB7XG4gIHJlbmRlcjogYXJncyA9PiBCb3hlZEV4cHJlc3Npb25FZGl0b3JTdG9yeSgpLFxuICBwYXJhbWV0ZXJzOiB7XG4gICAgZXhjbHVkZTogW1wiZGF0YVR5cGVzXCIsIFwiYmVlR3d0U2VydmljZVwiLCBcInBtbWxEb2N1bWVudHNcIl1cbiAgfSxcbiAgYXJnczoge1xuICAgIC4uLkVtcHR5RXhwcmVzc2lvbi5hcmdzLFxuICAgIGV4cHJlc3Npb246IHtcbiAgICAgIF9fJCRlbGVtZW50OiBcImNvbnRleHRcIixcbiAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICAgIFwiQF9sYWJlbFwiOiBcIkluc3RhbGxtZW50IGNhbGN1bGF0aW9uXCIsXG4gICAgICBcIkBfdHlwZVJlZlwiOiBEbW5CdWlsdEluRGF0YVR5cGUuTnVtYmVyLFxuICAgICAgY29udGV4dEVudHJ5OiBbe1xuICAgICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICAgIHZhcmlhYmxlOiB7XG4gICAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgICAgIFwiQF9uYW1lXCI6IFwiRmVlXCIsXG4gICAgICAgICAgXCJAX3R5cGVSZWZcIjogRG1uQnVpbHRJbkRhdGFUeXBlLk51bWJlclxuICAgICAgICB9LFxuICAgICAgICBleHByZXNzaW9uOiB7XG4gICAgICAgICAgX18kJGVsZW1lbnQ6IFwibGl0ZXJhbEV4cHJlc3Npb25cIixcbiAgICAgICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICAgICAgXCJAX2xhYmVsXCI6IFwiRmVlXCIsXG4gICAgICAgICAgXCJAX3R5cGVSZWZcIjogRG1uQnVpbHRJbkRhdGFUeXBlLk51bWJlcixcbiAgICAgICAgICB0ZXh0OiB7XG4gICAgICAgICAgICBfXyQkdGV4dDogXCIyNVwiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICAgICAgdmFyaWFibGU6IHtcbiAgICAgICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICAgICAgXCJAX25hbWVcIjogXCJSZXBheW1lbnRzXCIsXG4gICAgICAgICAgXCJAX3R5cGVSZWZcIjogRG1uQnVpbHRJbkRhdGFUeXBlLk51bWJlclxuICAgICAgICB9LFxuICAgICAgICBleHByZXNzaW9uOiB7XG4gICAgICAgICAgX18kJGVsZW1lbnQ6IFwibGl0ZXJhbEV4cHJlc3Npb25cIixcbiAgICAgICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICAgICAgXCJAX2xhYmVsXCI6IFwiUmVwYXltZW50c1wiLFxuICAgICAgICAgIFwiQF90eXBlUmVmXCI6IERtbkJ1aWx0SW5EYXRhVHlwZS5OdW1iZXIsXG4gICAgICAgICAgdGV4dDoge1xuICAgICAgICAgICAgX18kJHRleHQ6IGAoQW1vdW50KlJhdGUvMTIpIC9cXG4oMS0oMStSYXRlLzEyKSoqLVRlcm0pYFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICAgIC8vIFRoZSByZXN1bHQgZXhwcmVzc2lvbiBpcyBhIENvbnRleHRFbnRyeSB3aXRob3V0IHZhcmlhYmxlXG4gICAgICAgIGV4cHJlc3Npb246IHtcbiAgICAgICAgICBfXyQkZWxlbWVudDogXCJsaXRlcmFsRXhwcmVzc2lvblwiLFxuICAgICAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICAgICAgICBcIkBfbGFiZWxcIjogXCJSZXN1bHQgRXhwcmVzc2lvblwiLFxuICAgICAgICAgIFwiQF90eXBlUmVmXCI6IERtbkJ1aWx0SW5EYXRhVHlwZS5OdW1iZXIsXG4gICAgICAgICAgdGV4dDoge1xuICAgICAgICAgICAgX18kJHRleHQ6IFwiRmVlICsgUmVwYXltZW50c1wiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XVxuICAgIH0sXG4gICAgaXNSZXNldFN1cHBvcnRlZE9uUm9vdEV4cHJlc3Npb246IGZhbHNlXG4gIH1cbn07XG5leHBvcnQgY29uc3QgQ3VzdG9tZXI6IFN0b3J5ID0ge1xuICByZW5kZXI6IGFyZ3MgPT4gQm94ZWRFeHByZXNzaW9uRWRpdG9yU3RvcnkoKSxcbiAgcGFyYW1ldGVyczoge1xuICAgIGV4Y2x1ZGU6IFtcImRhdGFUeXBlc1wiLCBcImJlZUd3dFNlcnZpY2VcIiwgXCJwbW1sRG9jdW1lbnRzXCJdXG4gIH0sXG4gIGFyZ3M6IHtcbiAgICAuLi5FbXB0eUV4cHJlc3Npb24uYXJncyxcbiAgICBleHByZXNzaW9uOiB7XG4gICAgICBfXyQkZWxlbWVudDogXCJjb250ZXh0XCIsXG4gICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICBcIkBfbGFiZWxcIjogXCJDdXN0b21lclwiLFxuICAgICAgXCJAX3R5cGVSZWZcIjogXCJ0Q3VzdG9tZXJcIixcbiAgICAgIGNvbnRleHRFbnRyeTogW3tcbiAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgICB2YXJpYWJsZToge1xuICAgICAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICAgICAgICBcIkBfbmFtZVwiOiBcIk5hbWVcIixcbiAgICAgICAgICBcIkBfdHlwZVJlZlwiOiBEbW5CdWlsdEluRGF0YVR5cGUuTnVtYmVyXG4gICAgICAgIH0sXG4gICAgICAgIGV4cHJlc3Npb246IHtcbiAgICAgICAgICBfXyQkZWxlbWVudDogXCJsaXRlcmFsRXhwcmVzc2lvblwiLFxuICAgICAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICAgICAgICBcIkBfbGFiZWxcIjogXCJOYW1lXCIsXG4gICAgICAgICAgXCJAX3R5cGVSZWZcIjogRG1uQnVpbHRJbkRhdGFUeXBlLk51bWJlcixcbiAgICAgICAgICB0ZXh0OiB7XG4gICAgICAgICAgICBfXyQkdGV4dDogXCJMdWl6XCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgICB2YXJpYWJsZToge1xuICAgICAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICAgICAgICBcIkBfbmFtZVwiOiBcIkFnZVwiLFxuICAgICAgICAgIFwiQF90eXBlUmVmXCI6IERtbkJ1aWx0SW5EYXRhVHlwZS5OdW1iZXJcbiAgICAgICAgfSxcbiAgICAgICAgZXhwcmVzc2lvbjoge1xuICAgICAgICAgIF9fJCRlbGVtZW50OiBcImxpdGVyYWxFeHByZXNzaW9uXCIsXG4gICAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgICAgIFwiQF9sYWJlbFwiOiBcIkFnZVwiLFxuICAgICAgICAgIFwiQF90eXBlUmVmXCI6IERtbkJ1aWx0SW5EYXRhVHlwZS5OdW1iZXIsXG4gICAgICAgICAgdGV4dDoge1xuICAgICAgICAgICAgX18kJHRleHQ6IFwiMzBcIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfV1cbiAgICB9LFxuICAgIGlzUmVzZXRTdXBwb3J0ZWRPblJvb3RFeHByZXNzaW9uOiBmYWxzZVxuICB9XG59O1xuZXhwb3J0IGNvbnN0IE5lc3RlZDogU3RvcnkgPSB7XG4gIHJlbmRlcjogYXJncyA9PiBCb3hlZEV4cHJlc3Npb25FZGl0b3JTdG9yeSgpLFxuICBwYXJhbWV0ZXJzOiB7XG4gICAgZXhjbHVkZTogW1wiZGF0YVR5cGVzXCIsIFwiYmVlR3d0U2VydmljZVwiLCBcInBtbWxEb2N1bWVudHNcIl1cbiAgfSxcbiAgYXJnczoge1xuICAgIC4uLkVtcHR5RXhwcmVzc2lvbi5hcmdzLFxuICAgIGV4cHJlc3Npb246IHtcbiAgICAgIF9fJCRlbGVtZW50OiBcImNvbnRleHRcIixcbiAgICAgIFwiQF9pZFwiOiBcIl8zNTI1NTU2MS04OEZBLTRBNzgtOUMzRi02MTg1NTIxM0VFMEZcIixcbiAgICAgIFwiQF9sYWJlbFwiOiBcIkV4cHJlc3Npb24gTmFtZVwiLFxuICAgICAgY29udGV4dEVudHJ5OiBbe1xuICAgICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICAgIHZhcmlhYmxlOiB7XG4gICAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgICAgIFwiQF9uYW1lXCI6IFwiQ29udGV4dEVudHJ5LTFcIlxuICAgICAgICB9LFxuICAgICAgICBleHByZXNzaW9uOiB7XG4gICAgICAgICAgX18kJGVsZW1lbnQ6IFwiY29udGV4dFwiLFxuICAgICAgICAgIFwiQF9pZFwiOiBcIl81RDk3QjQ4NC04MDAzLTQzMjMtQUFEQi1BQTRDNkYzRUNBNzNcIixcbiAgICAgICAgICBcIkBfbGFiZWxcIjogXCJFeHByZXNzaW9uIE5hbWVcIixcbiAgICAgICAgICBjb250ZXh0RW50cnk6IFt7XG4gICAgICAgICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICAgICAgICB2YXJpYWJsZToge1xuICAgICAgICAgICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICAgICAgICAgIFwiQF9uYW1lXCI6IFwiQ29udGV4dEVudHJ5LTFcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IHtcbiAgICAgICAgICAgICAgX18kJGVsZW1lbnQ6IFwibGl0ZXJhbEV4cHJlc3Npb25cIixcbiAgICAgICAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgICAgICAgICBcIkBfbGFiZWxcIjogXCJDb250ZXh0RW50cnktMVwiLFxuICAgICAgICAgICAgICB0ZXh0OiB7XG4gICAgICAgICAgICAgICAgX18kJHRleHQ6IFwiXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1dXG4gICAgICAgIH1cbiAgICAgIH1dXG4gICAgfSxcbiAgICBpc1Jlc2V0U3VwcG9ydGVkT25Sb290RXhwcmVzc2lvbjogZmFsc2UsXG4gICAgd2lkdGhzQnlJZDoge1xuICAgICAgXCJfMzUyNTU1NjEtODhGQS00QTc4LTlDM0YtNjE4NTUyMTNFRTBGXCI6IFtDT05URVhUX0VOVFJZX1ZBUklBQkxFX01JTl9XSURUSF0sXG4gICAgICBcIl81RDk3QjQ4NC04MDAzLTQzMjMtQUFEQi1BQTRDNkYzRUNBNzNcIjogW0NPTlRFWFRfRU5UUllfVkFSSUFCTEVfTUlOX1dJRFRIXVxuICAgIH1cbiAgfVxufTtcbkJhc2UucGFyYW1ldGVycyA9IHtcbiAgLi4uQmFzZS5wYXJhbWV0ZXJzLFxuICBkb2NzOiB7XG4gICAgLi4uQmFzZS5wYXJhbWV0ZXJzPy5kb2NzLFxuICAgIHNvdXJjZToge1xuICAgICAgb3JpZ2luYWxTb3VyY2U6IFwie1xcbiAgcmVuZGVyOiBhcmdzID0+IEJveGVkRXhwcmVzc2lvbkVkaXRvclN0b3J5KCksXFxuICBwYXJhbWV0ZXJzOiB7XFxuICAgIGV4Y2x1ZGU6IFtcXFwiZGF0YVR5cGVzXFxcIiwgXFxcImJlZUd3dFNlcnZpY2VcXFwiLCBcXFwicG1tbERvY3VtZW50c1xcXCJdXFxuICB9LFxcbiAgYXJnczoge1xcbiAgICAuLi5FbXB0eUV4cHJlc3Npb24uYXJncyxcXG4gICAgZXhwcmVzc2lvbjoge1xcbiAgICAgIF9fJCRlbGVtZW50OiBcXFwiY29udGV4dFxcXCIsXFxuICAgICAgXFxcIkBfaWRcXFwiOiBcXFwiXzM1MjU1NTYxLTg4RkEtNEE3OC05QzNGLTYxODU1MjEzRUUwRlxcXCIsXFxuICAgICAgXFxcIkBfbGFiZWxcXFwiOiBcXFwiRXhwcmVzc2lvbiBOYW1lXFxcIixcXG4gICAgICBcXFwiQF90eXBlUmVmXFxcIjogdW5kZWZpbmVkLFxcbiAgICAgIGNvbnRleHRFbnRyeTogW3tcXG4gICAgICAgIFxcXCJAX2lkXFxcIjogZ2VuZXJhdGVVdWlkKCksXFxuICAgICAgICB2YXJpYWJsZToge1xcbiAgICAgICAgICBcXFwiQF9pZFxcXCI6IGdlbmVyYXRlVXVpZCgpLFxcbiAgICAgICAgICBcXFwiQF9uYW1lXFxcIjogXFxcIkNvbnRleHRFbnRyeS0xXFxcIixcXG4gICAgICAgICAgXFxcIkBfdHlwZVJlZlxcXCI6IHVuZGVmaW5lZFxcbiAgICAgICAgfSxcXG4gICAgICAgIGV4cHJlc3Npb246IHVuZGVmaW5lZCFcXG4gICAgICB9XVxcbiAgICB9LFxcbiAgICBpc1Jlc2V0U3VwcG9ydGVkT25Sb290RXhwcmVzc2lvbjogdHJ1ZSxcXG4gICAgd2lkdGhzQnlJZDoge1xcbiAgICAgIFxcXCJfMzUyNTU1NjEtODhGQS00QTc4LTlDM0YtNjE4NTUyMTNFRTBGXFxcIjogW0NPTlRFWFRfRU5UUllfVkFSSUFCTEVfTUlOX1dJRFRIXVxcbiAgICB9XFxuICB9XFxufVwiLFxuICAgICAgLi4uQmFzZS5wYXJhbWV0ZXJzPy5kb2NzPy5zb3VyY2VcbiAgICB9XG4gIH1cbn07XG5SZWFkb25seS5wYXJhbWV0ZXJzID0ge1xuICAuLi5SZWFkb25seS5wYXJhbWV0ZXJzLFxuICBkb2NzOiB7XG4gICAgLi4uUmVhZG9ubHkucGFyYW1ldGVycz8uZG9jcyxcbiAgICBzb3VyY2U6IHtcbiAgICAgIG9yaWdpbmFsU291cmNlOiBcIntcXG4gIHJlbmRlcjogYXJncyA9PiBCb3hlZEV4cHJlc3Npb25FZGl0b3JTdG9yeSgpLFxcbiAgcGFyYW1ldGVyczoge1xcbiAgICBleGNsdWRlOiBbXFxcImRhdGFUeXBlc1xcXCIsIFxcXCJiZWVHd3RTZXJ2aWNlXFxcIiwgXFxcInBtbWxEb2N1bWVudHNcXFwiXVxcbiAgfSxcXG4gIGFyZ3M6IHtcXG4gICAgLi4uRW1wdHlFeHByZXNzaW9uLmFyZ3MsXFxuICAgIGV4cHJlc3Npb246IHtcXG4gICAgICBfXyQkZWxlbWVudDogXFxcImNvbnRleHRcXFwiLFxcbiAgICAgIFxcXCJAX2lkXFxcIjogXFxcIl8zNTI1NTU2MS04OEZBLTRBNzgtOUMzRi02MTg1NTIxM0VFMEZcXFwiLFxcbiAgICAgIFxcXCJAX2xhYmVsXFxcIjogXFxcIkV4cHJlc3Npb24gTmFtZVxcXCIsXFxuICAgICAgXFxcIkBfdHlwZVJlZlxcXCI6IHVuZGVmaW5lZCxcXG4gICAgICBjb250ZXh0RW50cnk6IFt7XFxuICAgICAgICBcXFwiQF9pZFxcXCI6IGdlbmVyYXRlVXVpZCgpLFxcbiAgICAgICAgdmFyaWFibGU6IHtcXG4gICAgICAgICAgXFxcIkBfaWRcXFwiOiBnZW5lcmF0ZVV1aWQoKSxcXG4gICAgICAgICAgXFxcIkBfbmFtZVxcXCI6IFxcXCJDb250ZXh0RW50cnktMVxcXCIsXFxuICAgICAgICAgIFxcXCJAX3R5cGVSZWZcXFwiOiB1bmRlZmluZWRcXG4gICAgICAgIH0sXFxuICAgICAgICBleHByZXNzaW9uOiB7XFxuICAgICAgICAgIFxcXCJAX2lkXFxcIjogZ2VuZXJhdGVVdWlkKCksXFxuICAgICAgICAgIF9fJCRlbGVtZW50OiBcXFwibGl0ZXJhbEV4cHJlc3Npb25cXFwiLFxcbiAgICAgICAgICB0ZXh0OiB7XFxuICAgICAgICAgICAgX18kJHRleHQ6IFxcXCJyZWFkb25seSB0ZXh0XFxcIlxcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgfV1cXG4gICAgfSxcXG4gICAgaXNSZXNldFN1cHBvcnRlZE9uUm9vdEV4cHJlc3Npb246IHRydWUsXFxuICAgIHdpZHRoc0J5SWQ6IHtcXG4gICAgICBcXFwiXzM1MjU1NTYxLTg4RkEtNEE3OC05QzNGLTYxODU1MjEzRUUwRlxcXCI6IFtDT05URVhUX0VOVFJZX1ZBUklBQkxFX01JTl9XSURUSF1cXG4gICAgfSxcXG4gICAgaXNSZWFkT25seTogdHJ1ZVxcbiAgfVxcbn1cIixcbiAgICAgIC4uLlJlYWRvbmx5LnBhcmFtZXRlcnM/LmRvY3M/LnNvdXJjZVxuICAgIH1cbiAgfVxufTtcbkluc3RhbGxtZW50Q2FsY3VsYXRpb24ucGFyYW1ldGVycyA9IHtcbiAgLi4uSW5zdGFsbG1lbnRDYWxjdWxhdGlvbi5wYXJhbWV0ZXJzLFxuICBkb2NzOiB7XG4gICAgLi4uSW5zdGFsbG1lbnRDYWxjdWxhdGlvbi5wYXJhbWV0ZXJzPy5kb2NzLFxuICAgIHNvdXJjZToge1xuICAgICAgb3JpZ2luYWxTb3VyY2U6IFwie1xcbiAgcmVuZGVyOiBhcmdzID0+IEJveGVkRXhwcmVzc2lvbkVkaXRvclN0b3J5KCksXFxuICBwYXJhbWV0ZXJzOiB7XFxuICAgIGV4Y2x1ZGU6IFtcXFwiZGF0YVR5cGVzXFxcIiwgXFxcImJlZUd3dFNlcnZpY2VcXFwiLCBcXFwicG1tbERvY3VtZW50c1xcXCJdXFxuICB9LFxcbiAgYXJnczoge1xcbiAgICAuLi5FbXB0eUV4cHJlc3Npb24uYXJncyxcXG4gICAgZXhwcmVzc2lvbjoge1xcbiAgICAgIF9fJCRlbGVtZW50OiBcXFwiY29udGV4dFxcXCIsXFxuICAgICAgXFxcIkBfaWRcXFwiOiBnZW5lcmF0ZVV1aWQoKSxcXG4gICAgICBcXFwiQF9sYWJlbFxcXCI6IFxcXCJJbnN0YWxsbWVudCBjYWxjdWxhdGlvblxcXCIsXFxuICAgICAgXFxcIkBfdHlwZVJlZlxcXCI6IERtbkJ1aWx0SW5EYXRhVHlwZS5OdW1iZXIsXFxuICAgICAgY29udGV4dEVudHJ5OiBbe1xcbiAgICAgICAgXFxcIkBfaWRcXFwiOiBnZW5lcmF0ZVV1aWQoKSxcXG4gICAgICAgIHZhcmlhYmxlOiB7XFxuICAgICAgICAgIFxcXCJAX2lkXFxcIjogZ2VuZXJhdGVVdWlkKCksXFxuICAgICAgICAgIFxcXCJAX25hbWVcXFwiOiBcXFwiRmVlXFxcIixcXG4gICAgICAgICAgXFxcIkBfdHlwZVJlZlxcXCI6IERtbkJ1aWx0SW5EYXRhVHlwZS5OdW1iZXJcXG4gICAgICAgIH0sXFxuICAgICAgICBleHByZXNzaW9uOiB7XFxuICAgICAgICAgIF9fJCRlbGVtZW50OiBcXFwibGl0ZXJhbEV4cHJlc3Npb25cXFwiLFxcbiAgICAgICAgICBcXFwiQF9pZFxcXCI6IGdlbmVyYXRlVXVpZCgpLFxcbiAgICAgICAgICBcXFwiQF9sYWJlbFxcXCI6IFxcXCJGZWVcXFwiLFxcbiAgICAgICAgICBcXFwiQF90eXBlUmVmXFxcIjogRG1uQnVpbHRJbkRhdGFUeXBlLk51bWJlcixcXG4gICAgICAgICAgdGV4dDoge1xcbiAgICAgICAgICAgIF9fJCR0ZXh0OiBcXFwiMjVcXFwiXFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICB9LCB7XFxuICAgICAgICBcXFwiQF9pZFxcXCI6IGdlbmVyYXRlVXVpZCgpLFxcbiAgICAgICAgdmFyaWFibGU6IHtcXG4gICAgICAgICAgXFxcIkBfaWRcXFwiOiBnZW5lcmF0ZVV1aWQoKSxcXG4gICAgICAgICAgXFxcIkBfbmFtZVxcXCI6IFxcXCJSZXBheW1lbnRzXFxcIixcXG4gICAgICAgICAgXFxcIkBfdHlwZVJlZlxcXCI6IERtbkJ1aWx0SW5EYXRhVHlwZS5OdW1iZXJcXG4gICAgICAgIH0sXFxuICAgICAgICBleHByZXNzaW9uOiB7XFxuICAgICAgICAgIF9fJCRlbGVtZW50OiBcXFwibGl0ZXJhbEV4cHJlc3Npb25cXFwiLFxcbiAgICAgICAgICBcXFwiQF9pZFxcXCI6IGdlbmVyYXRlVXVpZCgpLFxcbiAgICAgICAgICBcXFwiQF9sYWJlbFxcXCI6IFxcXCJSZXBheW1lbnRzXFxcIixcXG4gICAgICAgICAgXFxcIkBfdHlwZVJlZlxcXCI6IERtbkJ1aWx0SW5EYXRhVHlwZS5OdW1iZXIsXFxuICAgICAgICAgIHRleHQ6IHtcXG4gICAgICAgICAgICBfXyQkdGV4dDogYChBbW91bnQqUmF0ZS8xMikgL1xcXFxuKDEtKDErUmF0ZS8xMikqKi1UZXJtKWBcXG4gICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgIH0sIHtcXG4gICAgICAgIFxcXCJAX2lkXFxcIjogZ2VuZXJhdGVVdWlkKCksXFxuICAgICAgICAvLyBUaGUgcmVzdWx0IGV4cHJlc3Npb24gaXMgYSBDb250ZXh0RW50cnkgd2l0aG91dCB2YXJpYWJsZVxcbiAgICAgICAgZXhwcmVzc2lvbjoge1xcbiAgICAgICAgICBfXyQkZWxlbWVudDogXFxcImxpdGVyYWxFeHByZXNzaW9uXFxcIixcXG4gICAgICAgICAgXFxcIkBfaWRcXFwiOiBnZW5lcmF0ZVV1aWQoKSxcXG4gICAgICAgICAgXFxcIkBfbGFiZWxcXFwiOiBcXFwiUmVzdWx0IEV4cHJlc3Npb25cXFwiLFxcbiAgICAgICAgICBcXFwiQF90eXBlUmVmXFxcIjogRG1uQnVpbHRJbkRhdGFUeXBlLk51bWJlcixcXG4gICAgICAgICAgdGV4dDoge1xcbiAgICAgICAgICAgIF9fJCR0ZXh0OiBcXFwiRmVlICsgUmVwYXltZW50c1xcXCJcXG4gICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgIH1dXFxuICAgIH0sXFxuICAgIGlzUmVzZXRTdXBwb3J0ZWRPblJvb3RFeHByZXNzaW9uOiBmYWxzZVxcbiAgfVxcbn1cIixcbiAgICAgIC4uLkluc3RhbGxtZW50Q2FsY3VsYXRpb24ucGFyYW1ldGVycz8uZG9jcz8uc291cmNlXG4gICAgfVxuICB9XG59O1xuQ3VzdG9tZXIucGFyYW1ldGVycyA9IHtcbiAgLi4uQ3VzdG9tZXIucGFyYW1ldGVycyxcbiAgZG9jczoge1xuICAgIC4uLkN1c3RvbWVyLnBhcmFtZXRlcnM/LmRvY3MsXG4gICAgc291cmNlOiB7XG4gICAgICBvcmlnaW5hbFNvdXJjZTogXCJ7XFxuICByZW5kZXI6IGFyZ3MgPT4gQm94ZWRFeHByZXNzaW9uRWRpdG9yU3RvcnkoKSxcXG4gIHBhcmFtZXRlcnM6IHtcXG4gICAgZXhjbHVkZTogW1xcXCJkYXRhVHlwZXNcXFwiLCBcXFwiYmVlR3d0U2VydmljZVxcXCIsIFxcXCJwbW1sRG9jdW1lbnRzXFxcIl1cXG4gIH0sXFxuICBhcmdzOiB7XFxuICAgIC4uLkVtcHR5RXhwcmVzc2lvbi5hcmdzLFxcbiAgICBleHByZXNzaW9uOiB7XFxuICAgICAgX18kJGVsZW1lbnQ6IFxcXCJjb250ZXh0XFxcIixcXG4gICAgICBcXFwiQF9pZFxcXCI6IGdlbmVyYXRlVXVpZCgpLFxcbiAgICAgIFxcXCJAX2xhYmVsXFxcIjogXFxcIkN1c3RvbWVyXFxcIixcXG4gICAgICBcXFwiQF90eXBlUmVmXFxcIjogXFxcInRDdXN0b21lclxcXCIsXFxuICAgICAgY29udGV4dEVudHJ5OiBbe1xcbiAgICAgICAgXFxcIkBfaWRcXFwiOiBnZW5lcmF0ZVV1aWQoKSxcXG4gICAgICAgIHZhcmlhYmxlOiB7XFxuICAgICAgICAgIFxcXCJAX2lkXFxcIjogZ2VuZXJhdGVVdWlkKCksXFxuICAgICAgICAgIFxcXCJAX25hbWVcXFwiOiBcXFwiTmFtZVxcXCIsXFxuICAgICAgICAgIFxcXCJAX3R5cGVSZWZcXFwiOiBEbW5CdWlsdEluRGF0YVR5cGUuTnVtYmVyXFxuICAgICAgICB9LFxcbiAgICAgICAgZXhwcmVzc2lvbjoge1xcbiAgICAgICAgICBfXyQkZWxlbWVudDogXFxcImxpdGVyYWxFeHByZXNzaW9uXFxcIixcXG4gICAgICAgICAgXFxcIkBfaWRcXFwiOiBnZW5lcmF0ZVV1aWQoKSxcXG4gICAgICAgICAgXFxcIkBfbGFiZWxcXFwiOiBcXFwiTmFtZVxcXCIsXFxuICAgICAgICAgIFxcXCJAX3R5cGVSZWZcXFwiOiBEbW5CdWlsdEluRGF0YVR5cGUuTnVtYmVyLFxcbiAgICAgICAgICB0ZXh0OiB7XFxuICAgICAgICAgICAgX18kJHRleHQ6IFxcXCJMdWl6XFxcIlxcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgfSwge1xcbiAgICAgICAgXFxcIkBfaWRcXFwiOiBnZW5lcmF0ZVV1aWQoKSxcXG4gICAgICAgIHZhcmlhYmxlOiB7XFxuICAgICAgICAgIFxcXCJAX2lkXFxcIjogZ2VuZXJhdGVVdWlkKCksXFxuICAgICAgICAgIFxcXCJAX25hbWVcXFwiOiBcXFwiQWdlXFxcIixcXG4gICAgICAgICAgXFxcIkBfdHlwZVJlZlxcXCI6IERtbkJ1aWx0SW5EYXRhVHlwZS5OdW1iZXJcXG4gICAgICAgIH0sXFxuICAgICAgICBleHByZXNzaW9uOiB7XFxuICAgICAgICAgIF9fJCRlbGVtZW50OiBcXFwibGl0ZXJhbEV4cHJlc3Npb25cXFwiLFxcbiAgICAgICAgICBcXFwiQF9pZFxcXCI6IGdlbmVyYXRlVXVpZCgpLFxcbiAgICAgICAgICBcXFwiQF9sYWJlbFxcXCI6IFxcXCJBZ2VcXFwiLFxcbiAgICAgICAgICBcXFwiQF90eXBlUmVmXFxcIjogRG1uQnVpbHRJbkRhdGFUeXBlLk51bWJlcixcXG4gICAgICAgICAgdGV4dDoge1xcbiAgICAgICAgICAgIF9fJCR0ZXh0OiBcXFwiMzBcXFwiXFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICB9XVxcbiAgICB9LFxcbiAgICBpc1Jlc2V0U3VwcG9ydGVkT25Sb290RXhwcmVzc2lvbjogZmFsc2VcXG4gIH1cXG59XCIsXG4gICAgICAuLi5DdXN0b21lci5wYXJhbWV0ZXJzPy5kb2NzPy5zb3VyY2VcbiAgICB9XG4gIH1cbn07XG5OZXN0ZWQucGFyYW1ldGVycyA9IHtcbiAgLi4uTmVzdGVkLnBhcmFtZXRlcnMsXG4gIGRvY3M6IHtcbiAgICAuLi5OZXN0ZWQucGFyYW1ldGVycz8uZG9jcyxcbiAgICBzb3VyY2U6IHtcbiAgICAgIG9yaWdpbmFsU291cmNlOiBcIntcXG4gIHJlbmRlcjogYXJncyA9PiBCb3hlZEV4cHJlc3Npb25FZGl0b3JTdG9yeSgpLFxcbiAgcGFyYW1ldGVyczoge1xcbiAgICBleGNsdWRlOiBbXFxcImRhdGFUeXBlc1xcXCIsIFxcXCJiZWVHd3RTZXJ2aWNlXFxcIiwgXFxcInBtbWxEb2N1bWVudHNcXFwiXVxcbiAgfSxcXG4gIGFyZ3M6IHtcXG4gICAgLi4uRW1wdHlFeHByZXNzaW9uLmFyZ3MsXFxuICAgIGV4cHJlc3Npb246IHtcXG4gICAgICBfXyQkZWxlbWVudDogXFxcImNvbnRleHRcXFwiLFxcbiAgICAgIFxcXCJAX2lkXFxcIjogXFxcIl8zNTI1NTU2MS04OEZBLTRBNzgtOUMzRi02MTg1NTIxM0VFMEZcXFwiLFxcbiAgICAgIFxcXCJAX2xhYmVsXFxcIjogXFxcIkV4cHJlc3Npb24gTmFtZVxcXCIsXFxuICAgICAgY29udGV4dEVudHJ5OiBbe1xcbiAgICAgICAgXFxcIkBfaWRcXFwiOiBnZW5lcmF0ZVV1aWQoKSxcXG4gICAgICAgIHZhcmlhYmxlOiB7XFxuICAgICAgICAgIFxcXCJAX2lkXFxcIjogZ2VuZXJhdGVVdWlkKCksXFxuICAgICAgICAgIFxcXCJAX25hbWVcXFwiOiBcXFwiQ29udGV4dEVudHJ5LTFcXFwiXFxuICAgICAgICB9LFxcbiAgICAgICAgZXhwcmVzc2lvbjoge1xcbiAgICAgICAgICBfXyQkZWxlbWVudDogXFxcImNvbnRleHRcXFwiLFxcbiAgICAgICAgICBcXFwiQF9pZFxcXCI6IFxcXCJfNUQ5N0I0ODQtODAwMy00MzIzLUFBREItQUE0QzZGM0VDQTczXFxcIixcXG4gICAgICAgICAgXFxcIkBfbGFiZWxcXFwiOiBcXFwiRXhwcmVzc2lvbiBOYW1lXFxcIixcXG4gICAgICAgICAgY29udGV4dEVudHJ5OiBbe1xcbiAgICAgICAgICAgIFxcXCJAX2lkXFxcIjogZ2VuZXJhdGVVdWlkKCksXFxuICAgICAgICAgICAgdmFyaWFibGU6IHtcXG4gICAgICAgICAgICAgIFxcXCJAX2lkXFxcIjogZ2VuZXJhdGVVdWlkKCksXFxuICAgICAgICAgICAgICBcXFwiQF9uYW1lXFxcIjogXFxcIkNvbnRleHRFbnRyeS0xXFxcIlxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgZXhwcmVzc2lvbjoge1xcbiAgICAgICAgICAgICAgX18kJGVsZW1lbnQ6IFxcXCJsaXRlcmFsRXhwcmVzc2lvblxcXCIsXFxuICAgICAgICAgICAgICBcXFwiQF9pZFxcXCI6IGdlbmVyYXRlVXVpZCgpLFxcbiAgICAgICAgICAgICAgXFxcIkBfbGFiZWxcXFwiOiBcXFwiQ29udGV4dEVudHJ5LTFcXFwiLFxcbiAgICAgICAgICAgICAgdGV4dDoge1xcbiAgICAgICAgICAgICAgICBfXyQkdGV4dDogXFxcIlxcXCJcXG4gICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICAgIH1dXFxuICAgICAgICB9XFxuICAgICAgfV1cXG4gICAgfSxcXG4gICAgaXNSZXNldFN1cHBvcnRlZE9uUm9vdEV4cHJlc3Npb246IGZhbHNlLFxcbiAgICB3aWR0aHNCeUlkOiB7XFxuICAgICAgXFxcIl8zNTI1NTU2MS04OEZBLTRBNzgtOUMzRi02MTg1NTIxM0VFMEZcXFwiOiBbQ09OVEVYVF9FTlRSWV9WQVJJQUJMRV9NSU5fV0lEVEhdLFxcbiAgICAgIFxcXCJfNUQ5N0I0ODQtODAwMy00MzIzLUFBREItQUE0QzZGM0VDQTczXFxcIjogW0NPTlRFWFRfRU5UUllfVkFSSUFCTEVfTUlOX1dJRFRIXVxcbiAgICB9XFxuICB9XFxufVwiLFxuICAgICAgLi4uTmVzdGVkLnBhcmFtZXRlcnM/LmRvY3M/LnNvdXJjZVxuICAgIH1cbiAgfVxufTsiLCIvKlxuICogTGljZW5zZWQgdG8gdGhlIEFwYWNoZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIChBU0YpIHVuZGVyIG9uZVxuICogb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuICBTZWUgdGhlIE5PVElDRSBmaWxlXG4gKiBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvblxuICogcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuICBUaGUgQVNGIGxpY2Vuc2VzIHRoaXMgZmlsZVxuICogdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZVxuICogXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4gKiB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZyxcbiAqIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXG4gKiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxuICogS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlXG4gKiBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zXG4gKiB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgdHlwZSB7IE1ldGEsIFN0b3J5T2JqIH0gZnJvbSBcIkBzdG9yeWJvb2svcmVhY3RcIjtcbmltcG9ydCB7IEJveGVkRXhwcmVzc2lvbkVkaXRvciwgQm94ZWRFeHByZXNzaW9uRWRpdG9yUHJvcHMgfSBmcm9tIFwiLi4vLi4vLi4vc3JjL0JveGVkRXhwcmVzc2lvbkVkaXRvclwiO1xuaW1wb3J0IHsgYmVlR3d0U2VydmljZSwgQm94ZWRFeHByZXNzaW9uRWRpdG9yU3RvcnksIEJveGVkRXhwcmVzc2lvbkVkaXRvclN0b3J5QXJncywgZGF0YVR5cGVzLCBwbW1sRG9jdW1lbnRzIH0gZnJvbSBcIi4uLy4uL2JveGVkRXhwcmVzc2lvblN0b3JpZXNXcmFwcGVyXCI7XG5cbi8vIE1vcmUgb24gaG93IHRvIHNldCB1cCBzdG9yaWVzIGF0OiBodHRwczovL3N0b3J5Ym9vay5qcy5vcmcvZG9jcy9yZWFjdC93cml0aW5nLXN0b3JpZXMvaW50cm9kdWN0aW9uI2RlZmF1bHQtZXhwb3J0XG5jb25zdCBtZXRhOiBNZXRhPEJveGVkRXhwcmVzc2lvbkVkaXRvclByb3BzPiA9IHtcbiAgdGl0bGU6IFwiTWlzYy9FbXB0eSBCb3hlZCBFeHByZXNzaW9uXCIsXG4gIGNvbXBvbmVudDogQm94ZWRFeHByZXNzaW9uRWRpdG9yLFxuICBpbmNsdWRlU3RvcmllczogL15bQS1aXS9cbn07XG5leHBvcnQgZGVmYXVsdCBtZXRhO1xudHlwZSBTdG9yeSA9IFN0b3J5T2JqPEJveGVkRXhwcmVzc2lvbkVkaXRvclN0b3J5QXJncz47XG5cbi8vIE1vcmUgb24gd3JpdGluZyBzdG9yaWVzIHdpdGggYXJnczogaHR0cHM6Ly9zdG9yeWJvb2suanMub3JnL2RvY3MvcmVhY3Qvd3JpdGluZy1zdG9yaWVzL2FyZ3NcbmV4cG9ydCBjb25zdCBCYXNlOiBTdG9yeSA9IHtcbiAgcmVuZGVyOiBhcmdzID0+IEJveGVkRXhwcmVzc2lvbkVkaXRvclN0b3J5KCksXG4gIGFyZ3M6IHtcbiAgICBleHByZXNzaW9uSG9sZGVySWQ6IFwiXzAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMFwiLFxuICAgIGV4cHJlc3Npb246IHVuZGVmaW5lZCxcbiAgICB3aWR0aHNCeUlkOiB7fSxcbiAgICBkYXRhVHlwZXMsXG4gICAgYmVlR3d0U2VydmljZSxcbiAgICBwbW1sRG9jdW1lbnRzLFxuICAgIGlzUmVzZXRTdXBwb3J0ZWRPblJvb3RFeHByZXNzaW9uOiB0cnVlXG4gIH1cbn07XG5CYXNlLnBhcmFtZXRlcnMgPSB7XG4gIC4uLkJhc2UucGFyYW1ldGVycyxcbiAgZG9jczoge1xuICAgIC4uLkJhc2UucGFyYW1ldGVycz8uZG9jcyxcbiAgICBzb3VyY2U6IHtcbiAgICAgIG9yaWdpbmFsU291cmNlOiBcIntcXG4gIHJlbmRlcjogYXJncyA9PiBCb3hlZEV4cHJlc3Npb25FZGl0b3JTdG9yeSgpLFxcbiAgYXJnczoge1xcbiAgICBleHByZXNzaW9uSG9sZGVySWQ6IFxcXCJfMDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwXFxcIixcXG4gICAgZXhwcmVzc2lvbjogdW5kZWZpbmVkLFxcbiAgICB3aWR0aHNCeUlkOiB7fSxcXG4gICAgZGF0YVR5cGVzLFxcbiAgICBiZWVHd3RTZXJ2aWNlLFxcbiAgICBwbW1sRG9jdW1lbnRzLFxcbiAgICBpc1Jlc2V0U3VwcG9ydGVkT25Sb290RXhwcmVzc2lvbjogdHJ1ZVxcbiAgfVxcbn1cIixcbiAgICAgIC4uLkJhc2UucGFyYW1ldGVycz8uZG9jcz8uc291cmNlXG4gICAgfVxuICB9XG59OyJdLCJuYW1lcyI6WyJCb3hlZEV4cHJlc3Npb25FZGl0b3IiLCJCb3hlZEV4cHJlc3Npb25FZGl0b3JTdG9yeSIsIkJhc2UiLCJFbXB0eUV4cHJlc3Npb24iLCJEbW5CdWlsdEluRGF0YVR5cGUiLCJnZW5lcmF0ZVV1aWQiLCJDT05URVhUX0VOVFJZX1ZBUklBQkxFX01JTl9XSURUSCIsIm1ldGEiLCJ0aXRsZSIsImNvbXBvbmVudCIsImluY2x1ZGVTdG9yaWVzIiwicmVuZGVyIiwiYXJncyIsInBhcmFtZXRlcnMiLCJleGNsdWRlIiwiZXhwcmVzc2lvbiIsIl9fJCRlbGVtZW50IiwidW5kZWZpbmVkIiwiY29udGV4dEVudHJ5IiwidmFyaWFibGUiLCJpc1Jlc2V0U3VwcG9ydGVkT25Sb290RXhwcmVzc2lvbiIsIndpZHRoc0J5SWQiLCJSZWFkb25seSIsInRleHQiLCJfXyQkdGV4dCIsImlzUmVhZE9ubHkiLCJJbnN0YWxsbWVudENhbGN1bGF0aW9uIiwiTnVtYmVyIiwiQ3VzdG9tZXIiLCJOZXN0ZWQiLCJkb2NzIiwiX2EiLCJzb3VyY2UiLCJvcmlnaW5hbFNvdXJjZSIsIl9jIiwiX2IiLCJfZCIsIl9mIiwiX2UiLCJfZyIsIl9qIiwiX2giLCJfayIsIl9tIiwiX2wiLCJfbyIsIl9xIiwiX3AiLCJfX25hbWVkRXhwb3J0c09yZGVyIiwiYmVlR3d0U2VydmljZSIsImRhdGFUeXBlcyIsInBtbWxEb2N1bWVudHMiLCJleHByZXNzaW9uSG9sZGVySWQiXSwic291cmNlUm9vdCI6IiJ9