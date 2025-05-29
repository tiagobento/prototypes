"use strict";
(self["webpackChunk_kie_tools_boxed_expression_component"] = self["webpackChunk_kie_tools_boxed_expression_component"] || []).push([["boxedExpressions-DecisionTable-DecisionTable-stories"],{

/***/ "./stories/boxedExpressions/DecisionTable/DecisionTable.stories.tsx":
/*!**************************************************************************!*\
  !*** ./stories/boxedExpressions/DecisionTable/DecisionTable.stories.tsx ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Base: () => (/* binding */ Base),
/* harmony export */   Discount: () => (/* binding */ Discount),
/* harmony export */   EvaluationHits: () => (/* binding */ EvaluationHits),
/* harmony export */   Nested: () => (/* binding */ Nested),
/* harmony export */   Readonly: () => (/* binding */ Readonly),
/* harmony export */   UndefinedWidths: () => (/* binding */ UndefinedWidths),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _src_BoxedExpressionEditor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/BoxedExpressionEditor */ "./src/BoxedExpressionEditor.tsx");
/* harmony import */ var _boxedExpressionStoriesWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../boxedExpressionStoriesWrapper */ "./stories/boxedExpressionStoriesWrapper.tsx");
/* harmony import */ var _misc_Empty_EmptyExpression_stories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../misc/Empty/EmptyExpression.stories */ "./stories/misc/Empty/EmptyExpression.stories.tsx");
/* harmony import */ var _src_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../src/api */ "./src/api/index.ts");
/* harmony import */ var _src_expressions_DecisionTableExpression_DecisionTableExpression__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../src/expressions/DecisionTableExpression/DecisionTableExpression */ "./src/expressions/DecisionTableExpression/DecisionTableExpression.tsx");
/* harmony import */ var _src_resizing_WidthConstants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../src/resizing/WidthConstants */ "./src/resizing/WidthConstants.ts");
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;






const meta = {
  title: "Boxed Expressions/Decision Table",
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
      __$$element: "decisionTable",
      "@_id": "_92929AE6-3BB5-4217-B66E-07614680971D",
      "@_label": "Expression Name",
      "@_hitPolicy": "UNIQUE",
      input: [{
        "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
        inputExpression: {
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
          text: {
            __$$text: "input-1"
          },
          "@_typeRef": undefined
        }
      }],
      output: [{
        "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
        "@_label": "output-1",
        "@_typeRef": undefined
      }],
      annotation: [{
        "@_name": "Annotations"
      }],
      rule: [{
        "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
        inputEntry: [{
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
          text: {
            __$$text: _src_expressions_DecisionTableExpression_DecisionTableExpression__WEBPACK_IMPORTED_MODULE_4__.DECISION_TABLE_INPUT_DEFAULT_VALUE
          }
        }],
        outputEntry: [{
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
          text: {
            __$$text: _src_expressions_DecisionTableExpression_DecisionTableExpression__WEBPACK_IMPORTED_MODULE_4__.DECISION_TABLE_OUTPUT_DEFAULT_VALUE
          }
        }],
        annotationEntry: [{
          text: {
            __$$text: "// Your annotations here"
          }
        }]
      }]
    },
    widthsById: {
      "_92929AE6-3BB5-4217-B66E-07614680971D": [_src_resizing_WidthConstants__WEBPACK_IMPORTED_MODULE_5__.BEE_TABLE_ROW_INDEX_COLUMN_WIDTH, _src_resizing_WidthConstants__WEBPACK_IMPORTED_MODULE_5__.DECISION_TABLE_INPUT_DEFAULT_WIDTH, _src_resizing_WidthConstants__WEBPACK_IMPORTED_MODULE_5__.DECISION_TABLE_OUTPUT_DEFAULT_WIDTH, _src_resizing_WidthConstants__WEBPACK_IMPORTED_MODULE_5__.DECISION_TABLE_ANNOTATION_DEFAULT_WIDTH]
    },
    isResetSupportedOnRootExpression: true
  }
};
const EvaluationHits = {
  render: args => (0,_boxedExpressionStoriesWrapper__WEBPACK_IMPORTED_MODULE_1__.BoxedExpressionEditorStory)({
    evaluationHitsCountById: new Map([["_1FA12B9F-288C-42E8-B77F-BE2D3702B7B8", 30]])
  }),
  parameters: {
    exclude: ["dataTypes", "beeGwtService", "pmmlDocuments"]
  },
  args: {
    ..._misc_Empty_EmptyExpression_stories__WEBPACK_IMPORTED_MODULE_2__.Base.args,
    expression: {
      __$$element: "decisionTable",
      "@_id": "_92929AE6-3BB5-4217-B66E-07614680971D",
      "@_label": "Expression Name",
      "@_hitPolicy": "UNIQUE",
      input: [{
        "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
        inputExpression: {
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
          text: {
            __$$text: "input-1"
          },
          "@_typeRef": undefined
        }
      }],
      output: [{
        "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
        "@_label": "output-1",
        "@_typeRef": undefined
      }],
      annotation: [{
        "@_name": "Annotations"
      }],
      rule: [{
        "@_id": "_1FA12B9F-288C-42E8-B77F-BE2D3702B7B8",
        inputEntry: [{
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
          text: {
            __$$text: "E"
          }
        }, {
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
          text: {
            __$$text: "E"
          }
        }],
        outputEntry: [{
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
          text: {
            __$$text: "aaa"
          }
        }, {
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
          text: {
            __$$text: "aaa"
          }
        }, {
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
          text: {
            __$$text: "aaa"
          }
        }],
        annotationEntry: [{
          text: {
            __$$text: "// Your annotations here"
          }
        }]
      }, {
        "@_id": "_1FA12B9F-288C-42E8-B77F-BE2D3702B7B4",
        inputEntry: [{
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
          text: {
            __$$text: "E"
          }
        }, {
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
          text: {
            __$$text: "E"
          }
        }],
        outputEntry: [{
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
          text: {
            __$$text: "aaa"
          }
        }, {
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
          text: {
            __$$text: "aaa"
          }
        }, {
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
          text: {
            __$$text: "aaa"
          }
        }],
        annotationEntry: [{
          text: {
            __$$text: "// Your annotations here"
          }
        }]
      }]
    },
    widthsById: {
      "_92929AE6-3BB5-4217-B66E-07614680971D": [_src_resizing_WidthConstants__WEBPACK_IMPORTED_MODULE_5__.BEE_TABLE_ROW_INDEX_COLUMN_WIDTH, _src_resizing_WidthConstants__WEBPACK_IMPORTED_MODULE_5__.DECISION_TABLE_INPUT_DEFAULT_WIDTH, _src_resizing_WidthConstants__WEBPACK_IMPORTED_MODULE_5__.DECISION_TABLE_OUTPUT_DEFAULT_WIDTH, _src_resizing_WidthConstants__WEBPACK_IMPORTED_MODULE_5__.DECISION_TABLE_ANNOTATION_DEFAULT_WIDTH]
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
      __$$element: "decisionTable",
      "@_id": "_92929AE6-3BB5-4217-B66E-07614680971D",
      "@_label": "Expression Name",
      "@_hitPolicy": "UNIQUE",
      input: [{
        "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
        inputExpression: {
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
          text: {
            __$$text: "input-1"
          },
          "@_typeRef": undefined
        }
      }],
      output: [{
        "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
        "@_label": "output-1",
        "@_typeRef": undefined
      }],
      annotation: [{
        "@_name": "Annotations"
      }],
      rule: [{
        "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
        inputEntry: [{
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
          text: {
            __$$text: _src_expressions_DecisionTableExpression_DecisionTableExpression__WEBPACK_IMPORTED_MODULE_4__.DECISION_TABLE_INPUT_DEFAULT_VALUE
          }
        }],
        outputEntry: [{
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
          text: {
            __$$text: _src_expressions_DecisionTableExpression_DecisionTableExpression__WEBPACK_IMPORTED_MODULE_4__.DECISION_TABLE_OUTPUT_DEFAULT_VALUE
          }
        }],
        annotationEntry: [{
          text: {
            __$$text: "// Your annotations here"
          }
        }]
      }]
    },
    widthsById: {
      "_92929AE6-3BB5-4217-B66E-07614680971D": [_src_resizing_WidthConstants__WEBPACK_IMPORTED_MODULE_5__.BEE_TABLE_ROW_INDEX_COLUMN_WIDTH, _src_resizing_WidthConstants__WEBPACK_IMPORTED_MODULE_5__.DECISION_TABLE_INPUT_DEFAULT_WIDTH, _src_resizing_WidthConstants__WEBPACK_IMPORTED_MODULE_5__.DECISION_TABLE_OUTPUT_DEFAULT_WIDTH, _src_resizing_WidthConstants__WEBPACK_IMPORTED_MODULE_5__.DECISION_TABLE_ANNOTATION_DEFAULT_WIDTH]
    },
    isResetSupportedOnRootExpression: true,
    isReadOnly: true
  }
};
const Discount = {
  render: args => (0,_boxedExpressionStoriesWrapper__WEBPACK_IMPORTED_MODULE_1__.BoxedExpressionEditorStory)(),
  parameters: {
    exclude: ["dataTypes", "beeGwtService", "pmmlDocuments"]
  },
  args: {
    ..._misc_Empty_EmptyExpression_stories__WEBPACK_IMPORTED_MODULE_2__.Base.args,
    expression: {
      __$$element: "decisionTable",
      "@_id": "_92929AE6-3BB5-4217-B66E-07614680971D",
      "@_label": "Discount",
      "@_typeRef": _src_api__WEBPACK_IMPORTED_MODULE_3__.DmnBuiltInDataType.Number,
      "@_hitPolicy": "PRIORITY",
      input: [{
        "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
        inputExpression: {
          text: {
            __$$text: "Customer.Category"
          },
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
          "@_typeRef": "tCategory"
        }
      }],
      output: [{
        "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
        "@_label": "Discount",
        "@_typeRef": _src_api__WEBPACK_IMPORTED_MODULE_3__.DmnBuiltInDataType.Number
      }],
      annotation: [{
        "@_name": "Annotations"
      }],
      rule: [{
        "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
        inputEntry: [{
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
          text: {
            __$$text: `"New Client"`
          }
        }],
        outputEntry: [{
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
          text: {
            __$$text: "0.15"
          }
        }],
        annotationEntry: []
      }, {
        "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
        inputEntry: [{
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
          text: {
            __$$text: `"Promo"`
          }
        }],
        outputEntry: [{
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
          text: {
            __$$text: "0.25"
          }
        }],
        annotationEntry: []
      }, {
        "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
        inputEntry: [{
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
          text: {
            __$$text: `"Student"`
          }
        }],
        outputEntry: [{
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
          text: {
            __$$text: "0.30"
          }
        }],
        annotationEntry: []
      }, {
        "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
        inputEntry: [{
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
          text: {
            __$$text: `"Default"`
          }
        }],
        outputEntry: [{
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
          text: {
            __$$text: "0"
          }
        }],
        annotationEntry: []
      }]
    },
    isResetSupportedOnRootExpression: false,
    widthsById: {
      "_92929AE6-3BB5-4217-B66E-07614680971D": [_src_resizing_WidthConstants__WEBPACK_IMPORTED_MODULE_5__.BEE_TABLE_ROW_INDEX_COLUMN_WIDTH, 120, _src_resizing_WidthConstants__WEBPACK_IMPORTED_MODULE_5__.DECISION_TABLE_OUTPUT_DEFAULT_WIDTH, _src_resizing_WidthConstants__WEBPACK_IMPORTED_MODULE_5__.DECISION_TABLE_ANNOTATION_DEFAULT_WIDTH]
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
      "@_id": "_92929AE6-3BB5-4217-B66E-07614680971D",
      "@_label": "Expression Name",
      contextEntry: [{
        "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
        variable: {
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
          "@_name": "ContextEntry-1",
          description: {
            __$$text: "ContextEntry-1"
          }
        },
        expression: {
          __$$element: "decisionTable",
          "@_id": "_5B31AAB6-BD52-4654-88C2-541F687FE5B4",
          "@_label": "Expression Name",
          "@_hitPolicy": "UNIQUE",
          input: [{
            "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
            inputExpression: {
              "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
              text: {
                __$$text: "input-1"
              }
            }
          }],
          output: [{
            "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
            "@_label": "output-1"
          }],
          annotation: [{
            "@_name": "Annotations"
          }],
          rule: [{
            "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
            inputEntry: [{
              "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
              text: {
                __$$text: _src_expressions_DecisionTableExpression_DecisionTableExpression__WEBPACK_IMPORTED_MODULE_4__.DECISION_TABLE_INPUT_DEFAULT_VALUE
              }
            }],
            outputEntry: [{
              "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
              text: {
                __$$text: _src_expressions_DecisionTableExpression_DecisionTableExpression__WEBPACK_IMPORTED_MODULE_4__.DECISION_TABLE_OUTPUT_DEFAULT_VALUE
              }
            }],
            annotationEntry: [{
              text: {
                __$$text: "// Your annotations here"
              }
            }]
          }]
        }
      }]
    },
    widthsById: {
      "_92929AE6-3BB5-4217-B66E-07614680971D": [_src_resizing_WidthConstants__WEBPACK_IMPORTED_MODULE_5__.CONTEXT_ENTRY_VARIABLE_MIN_WIDTH],
      "_5B31AAB6-BD52-4654-88C2-541F687FE5B4": [_src_resizing_WidthConstants__WEBPACK_IMPORTED_MODULE_5__.BEE_TABLE_ROW_INDEX_COLUMN_WIDTH, _src_resizing_WidthConstants__WEBPACK_IMPORTED_MODULE_5__.DECISION_TABLE_INPUT_DEFAULT_WIDTH, _src_resizing_WidthConstants__WEBPACK_IMPORTED_MODULE_5__.DECISION_TABLE_OUTPUT_DEFAULT_WIDTH, _src_resizing_WidthConstants__WEBPACK_IMPORTED_MODULE_5__.DECISION_TABLE_ANNOTATION_DEFAULT_WIDTH]
    },
    isResetSupportedOnRootExpression: false
  }
};
const UndefinedWidths = {
  render: args => (0,_boxedExpressionStoriesWrapper__WEBPACK_IMPORTED_MODULE_1__.BoxedExpressionEditorStory)(),
  parameters: {
    exclude: ["dataTypes", "beeGwtService", "pmmlDocuments"]
  },
  args: {
    ..._misc_Empty_EmptyExpression_stories__WEBPACK_IMPORTED_MODULE_2__.Base.args,
    expression: {
      __$$element: "decisionTable",
      "@_id": "_92929AE6-3BB5-4217-B66E-07614680971D",
      "@_label": "Expression Name",
      "@_hitPolicy": "UNIQUE",
      input: [{
        "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
        inputExpression: {
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
          text: {
            __$$text: "input-1"
          },
          "@_typeRef": undefined
        }
      }],
      output: [{
        "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
        "@_label": "output-1",
        "@_typeRef": undefined
      }],
      annotation: [{
        "@_name": "Annotations"
      }],
      rule: [{
        "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
        inputEntry: [{
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
          text: {
            __$$text: _src_expressions_DecisionTableExpression_DecisionTableExpression__WEBPACK_IMPORTED_MODULE_4__.DECISION_TABLE_INPUT_DEFAULT_VALUE
          }
        }],
        outputEntry: [{
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
          text: {
            __$$text: _src_expressions_DecisionTableExpression_DecisionTableExpression__WEBPACK_IMPORTED_MODULE_4__.DECISION_TABLE_OUTPUT_DEFAULT_VALUE
          }
        }],
        annotationEntry: [{
          text: {
            __$$text: "// Your annotations here"
          }
        }]
      }]
    },
    widthsById: {
      "_92929AE6-3BB5-4217-B66E-07614680971D": []
    },
    isResetSupportedOnRootExpression: true
  }
};
Base.parameters = {
  ...Base.parameters,
  docs: {
    ...((_a = Base.parameters) === null || _a === void 0 ? void 0 : _a.docs),
    source: {
      originalSource: "{\n  render: args => BoxedExpressionEditorStory(),\n  parameters: {\n    exclude: [\"dataTypes\", \"beeGwtService\", \"pmmlDocuments\"]\n  },\n  args: {\n    ...EmptyExpression.args,\n    expression: {\n      __$$element: \"decisionTable\",\n      \"@_id\": \"_92929AE6-3BB5-4217-B66E-07614680971D\",\n      \"@_label\": \"Expression Name\",\n      \"@_hitPolicy\": \"UNIQUE\",\n      input: [{\n        \"@_id\": generateUuid(),\n        inputExpression: {\n          \"@_id\": generateUuid(),\n          text: {\n            __$$text: \"input-1\"\n          },\n          \"@_typeRef\": undefined\n        }\n      }],\n      output: [{\n        \"@_id\": generateUuid(),\n        \"@_label\": \"output-1\",\n        \"@_typeRef\": undefined\n      }],\n      annotation: [{\n        \"@_name\": \"Annotations\"\n      }],\n      rule: [{\n        \"@_id\": generateUuid(),\n        inputEntry: [{\n          \"@_id\": generateUuid(),\n          text: {\n            __$$text: DECISION_TABLE_INPUT_DEFAULT_VALUE\n          }\n        }],\n        outputEntry: [{\n          \"@_id\": generateUuid(),\n          text: {\n            __$$text: DECISION_TABLE_OUTPUT_DEFAULT_VALUE\n          }\n        }],\n        annotationEntry: [{\n          text: {\n            __$$text: \"// Your annotations here\"\n          }\n        }]\n      }]\n    },\n    widthsById: {\n      \"_92929AE6-3BB5-4217-B66E-07614680971D\": [BEE_TABLE_ROW_INDEX_COLUMN_WIDTH, DECISION_TABLE_INPUT_DEFAULT_WIDTH, DECISION_TABLE_OUTPUT_DEFAULT_WIDTH, DECISION_TABLE_ANNOTATION_DEFAULT_WIDTH]\n    },\n    isResetSupportedOnRootExpression: true\n  }\n}",
      ...((_c = (_b = Base.parameters) === null || _b === void 0 ? void 0 : _b.docs) === null || _c === void 0 ? void 0 : _c.source)
    }
  }
};
EvaluationHits.parameters = {
  ...EvaluationHits.parameters,
  docs: {
    ...((_d = EvaluationHits.parameters) === null || _d === void 0 ? void 0 : _d.docs),
    source: {
      originalSource: "{\n  render: args => BoxedExpressionEditorStory({\n    evaluationHitsCountById: new Map([[\"_1FA12B9F-288C-42E8-B77F-BE2D3702B7B8\", 30]])\n  }),\n  parameters: {\n    exclude: [\"dataTypes\", \"beeGwtService\", \"pmmlDocuments\"]\n  },\n  args: {\n    ...EmptyExpression.args,\n    expression: {\n      __$$element: \"decisionTable\",\n      \"@_id\": \"_92929AE6-3BB5-4217-B66E-07614680971D\",\n      \"@_label\": \"Expression Name\",\n      \"@_hitPolicy\": \"UNIQUE\",\n      input: [{\n        \"@_id\": generateUuid(),\n        inputExpression: {\n          \"@_id\": generateUuid(),\n          text: {\n            __$$text: \"input-1\"\n          },\n          \"@_typeRef\": undefined\n        }\n      }],\n      output: [{\n        \"@_id\": generateUuid(),\n        \"@_label\": \"output-1\",\n        \"@_typeRef\": undefined\n      }],\n      annotation: [{\n        \"@_name\": \"Annotations\"\n      }],\n      rule: [{\n        \"@_id\": \"_1FA12B9F-288C-42E8-B77F-BE2D3702B7B8\",\n        inputEntry: [{\n          \"@_id\": generateUuid(),\n          text: {\n            __$$text: \"E\"\n          }\n        }, {\n          \"@_id\": generateUuid(),\n          text: {\n            __$$text: \"E\"\n          }\n        }],\n        outputEntry: [{\n          \"@_id\": generateUuid(),\n          text: {\n            __$$text: \"aaa\"\n          }\n        }, {\n          \"@_id\": generateUuid(),\n          text: {\n            __$$text: \"aaa\"\n          }\n        }, {\n          \"@_id\": generateUuid(),\n          text: {\n            __$$text: \"aaa\"\n          }\n        }],\n        annotationEntry: [{\n          text: {\n            __$$text: \"// Your annotations here\"\n          }\n        }]\n      }, {\n        \"@_id\": \"_1FA12B9F-288C-42E8-B77F-BE2D3702B7B4\",\n        inputEntry: [{\n          \"@_id\": generateUuid(),\n          text: {\n            __$$text: \"E\"\n          }\n        }, {\n          \"@_id\": generateUuid(),\n          text: {\n            __$$text: \"E\"\n          }\n        }],\n        outputEntry: [{\n          \"@_id\": generateUuid(),\n          text: {\n            __$$text: \"aaa\"\n          }\n        }, {\n          \"@_id\": generateUuid(),\n          text: {\n            __$$text: \"aaa\"\n          }\n        }, {\n          \"@_id\": generateUuid(),\n          text: {\n            __$$text: \"aaa\"\n          }\n        }],\n        annotationEntry: [{\n          text: {\n            __$$text: \"// Your annotations here\"\n          }\n        }]\n      }]\n    },\n    widthsById: {\n      \"_92929AE6-3BB5-4217-B66E-07614680971D\": [BEE_TABLE_ROW_INDEX_COLUMN_WIDTH, DECISION_TABLE_INPUT_DEFAULT_WIDTH, DECISION_TABLE_OUTPUT_DEFAULT_WIDTH, DECISION_TABLE_ANNOTATION_DEFAULT_WIDTH]\n    },\n    isResetSupportedOnRootExpression: true\n  }\n}",
      ...((_f = (_e = EvaluationHits.parameters) === null || _e === void 0 ? void 0 : _e.docs) === null || _f === void 0 ? void 0 : _f.source)
    }
  }
};
Readonly.parameters = {
  ...Readonly.parameters,
  docs: {
    ...((_g = Readonly.parameters) === null || _g === void 0 ? void 0 : _g.docs),
    source: {
      originalSource: "{\n  render: args => BoxedExpressionEditorStory(),\n  parameters: {\n    exclude: [\"dataTypes\", \"beeGwtService\", \"pmmlDocuments\"]\n  },\n  args: {\n    ...EmptyExpression.args,\n    expression: {\n      __$$element: \"decisionTable\",\n      \"@_id\": \"_92929AE6-3BB5-4217-B66E-07614680971D\",\n      \"@_label\": \"Expression Name\",\n      \"@_hitPolicy\": \"UNIQUE\",\n      input: [{\n        \"@_id\": generateUuid(),\n        inputExpression: {\n          \"@_id\": generateUuid(),\n          text: {\n            __$$text: \"input-1\"\n          },\n          \"@_typeRef\": undefined\n        }\n      }],\n      output: [{\n        \"@_id\": generateUuid(),\n        \"@_label\": \"output-1\",\n        \"@_typeRef\": undefined\n      }],\n      annotation: [{\n        \"@_name\": \"Annotations\"\n      }],\n      rule: [{\n        \"@_id\": generateUuid(),\n        inputEntry: [{\n          \"@_id\": generateUuid(),\n          text: {\n            __$$text: DECISION_TABLE_INPUT_DEFAULT_VALUE\n          }\n        }],\n        outputEntry: [{\n          \"@_id\": generateUuid(),\n          text: {\n            __$$text: DECISION_TABLE_OUTPUT_DEFAULT_VALUE\n          }\n        }],\n        annotationEntry: [{\n          text: {\n            __$$text: \"// Your annotations here\"\n          }\n        }]\n      }]\n    },\n    widthsById: {\n      \"_92929AE6-3BB5-4217-B66E-07614680971D\": [BEE_TABLE_ROW_INDEX_COLUMN_WIDTH, DECISION_TABLE_INPUT_DEFAULT_WIDTH, DECISION_TABLE_OUTPUT_DEFAULT_WIDTH, DECISION_TABLE_ANNOTATION_DEFAULT_WIDTH]\n    },\n    isResetSupportedOnRootExpression: true,\n    isReadOnly: true\n  }\n}",
      ...((_j = (_h = Readonly.parameters) === null || _h === void 0 ? void 0 : _h.docs) === null || _j === void 0 ? void 0 : _j.source)
    }
  }
};
Discount.parameters = {
  ...Discount.parameters,
  docs: {
    ...((_k = Discount.parameters) === null || _k === void 0 ? void 0 : _k.docs),
    source: {
      originalSource: "{\n  render: args => BoxedExpressionEditorStory(),\n  parameters: {\n    exclude: [\"dataTypes\", \"beeGwtService\", \"pmmlDocuments\"]\n  },\n  args: {\n    ...EmptyExpression.args,\n    expression: {\n      __$$element: \"decisionTable\",\n      \"@_id\": \"_92929AE6-3BB5-4217-B66E-07614680971D\",\n      \"@_label\": \"Discount\",\n      \"@_typeRef\": DmnBuiltInDataType.Number,\n      \"@_hitPolicy\": \"PRIORITY\",\n      input: [{\n        \"@_id\": generateUuid(),\n        inputExpression: {\n          text: {\n            __$$text: \"Customer.Category\"\n          },\n          \"@_id\": generateUuid(),\n          \"@_typeRef\": \"tCategory\"\n        }\n      }],\n      output: [{\n        \"@_id\": generateUuid(),\n        \"@_label\": \"Discount\",\n        \"@_typeRef\": DmnBuiltInDataType.Number\n      }],\n      annotation: [{\n        \"@_name\": \"Annotations\"\n      }],\n      rule: [{\n        \"@_id\": generateUuid(),\n        inputEntry: [{\n          \"@_id\": generateUuid(),\n          text: {\n            __$$text: `\"New Client\"`\n          }\n        }],\n        outputEntry: [{\n          \"@_id\": generateUuid(),\n          text: {\n            __$$text: \"0.15\"\n          }\n        }],\n        annotationEntry: []\n      }, {\n        \"@_id\": generateUuid(),\n        inputEntry: [{\n          \"@_id\": generateUuid(),\n          text: {\n            __$$text: `\"Promo\"`\n          }\n        }],\n        outputEntry: [{\n          \"@_id\": generateUuid(),\n          text: {\n            __$$text: \"0.25\"\n          }\n        }],\n        annotationEntry: []\n      }, {\n        \"@_id\": generateUuid(),\n        inputEntry: [{\n          \"@_id\": generateUuid(),\n          text: {\n            __$$text: `\"Student\"`\n          }\n        }],\n        outputEntry: [{\n          \"@_id\": generateUuid(),\n          text: {\n            __$$text: \"0.30\"\n          }\n        }],\n        annotationEntry: []\n      }, {\n        \"@_id\": generateUuid(),\n        inputEntry: [{\n          \"@_id\": generateUuid(),\n          text: {\n            __$$text: `\"Default\"`\n          }\n        }],\n        outputEntry: [{\n          \"@_id\": generateUuid(),\n          text: {\n            __$$text: \"0\"\n          }\n        }],\n        annotationEntry: []\n      }]\n    },\n    isResetSupportedOnRootExpression: false,\n    widthsById: {\n      \"_92929AE6-3BB5-4217-B66E-07614680971D\": [BEE_TABLE_ROW_INDEX_COLUMN_WIDTH, 120, DECISION_TABLE_OUTPUT_DEFAULT_WIDTH, DECISION_TABLE_ANNOTATION_DEFAULT_WIDTH]\n    }\n  }\n}",
      ...((_m = (_l = Discount.parameters) === null || _l === void 0 ? void 0 : _l.docs) === null || _m === void 0 ? void 0 : _m.source)
    }
  }
};
Nested.parameters = {
  ...Nested.parameters,
  docs: {
    ...((_o = Nested.parameters) === null || _o === void 0 ? void 0 : _o.docs),
    source: {
      originalSource: "{\n  render: args => BoxedExpressionEditorStory(),\n  parameters: {\n    exclude: [\"dataTypes\", \"beeGwtService\", \"pmmlDocuments\"]\n  },\n  args: {\n    ...EmptyExpression.args,\n    expression: {\n      __$$element: \"context\",\n      \"@_id\": \"_92929AE6-3BB5-4217-B66E-07614680971D\",\n      \"@_label\": \"Expression Name\",\n      contextEntry: [{\n        \"@_id\": generateUuid(),\n        variable: {\n          \"@_id\": generateUuid(),\n          \"@_name\": \"ContextEntry-1\",\n          description: {\n            __$$text: \"ContextEntry-1\"\n          }\n        },\n        expression: {\n          __$$element: \"decisionTable\",\n          \"@_id\": \"_5B31AAB6-BD52-4654-88C2-541F687FE5B4\",\n          \"@_label\": \"Expression Name\",\n          \"@_hitPolicy\": \"UNIQUE\",\n          input: [{\n            \"@_id\": generateUuid(),\n            inputExpression: {\n              \"@_id\": generateUuid(),\n              text: {\n                __$$text: \"input-1\"\n              }\n            }\n          }],\n          output: [{\n            \"@_id\": generateUuid(),\n            \"@_label\": \"output-1\"\n          }],\n          annotation: [{\n            \"@_name\": \"Annotations\"\n          }],\n          rule: [{\n            \"@_id\": generateUuid(),\n            inputEntry: [{\n              \"@_id\": generateUuid(),\n              text: {\n                __$$text: DECISION_TABLE_INPUT_DEFAULT_VALUE\n              }\n            }],\n            outputEntry: [{\n              \"@_id\": generateUuid(),\n              text: {\n                __$$text: DECISION_TABLE_OUTPUT_DEFAULT_VALUE\n              }\n            }],\n            annotationEntry: [{\n              text: {\n                __$$text: \"// Your annotations here\"\n              }\n            }]\n          }]\n        }\n      }]\n    },\n    widthsById: {\n      \"_92929AE6-3BB5-4217-B66E-07614680971D\": [CONTEXT_ENTRY_VARIABLE_MIN_WIDTH],\n      \"_5B31AAB6-BD52-4654-88C2-541F687FE5B4\": [BEE_TABLE_ROW_INDEX_COLUMN_WIDTH, DECISION_TABLE_INPUT_DEFAULT_WIDTH, DECISION_TABLE_OUTPUT_DEFAULT_WIDTH, DECISION_TABLE_ANNOTATION_DEFAULT_WIDTH]\n    },\n    isResetSupportedOnRootExpression: false\n  }\n}",
      ...((_q = (_p = Nested.parameters) === null || _p === void 0 ? void 0 : _p.docs) === null || _q === void 0 ? void 0 : _q.source)
    }
  }
};
UndefinedWidths.parameters = {
  ...UndefinedWidths.parameters,
  docs: {
    ...((_r = UndefinedWidths.parameters) === null || _r === void 0 ? void 0 : _r.docs),
    source: {
      originalSource: "{\n  render: args => BoxedExpressionEditorStory(),\n  parameters: {\n    exclude: [\"dataTypes\", \"beeGwtService\", \"pmmlDocuments\"]\n  },\n  args: {\n    ...EmptyExpression.args,\n    expression: {\n      __$$element: \"decisionTable\",\n      \"@_id\": \"_92929AE6-3BB5-4217-B66E-07614680971D\",\n      \"@_label\": \"Expression Name\",\n      \"@_hitPolicy\": \"UNIQUE\",\n      input: [{\n        \"@_id\": generateUuid(),\n        inputExpression: {\n          \"@_id\": generateUuid(),\n          text: {\n            __$$text: \"input-1\"\n          },\n          \"@_typeRef\": undefined\n        }\n      }],\n      output: [{\n        \"@_id\": generateUuid(),\n        \"@_label\": \"output-1\",\n        \"@_typeRef\": undefined\n      }],\n      annotation: [{\n        \"@_name\": \"Annotations\"\n      }],\n      rule: [{\n        \"@_id\": generateUuid(),\n        inputEntry: [{\n          \"@_id\": generateUuid(),\n          text: {\n            __$$text: DECISION_TABLE_INPUT_DEFAULT_VALUE\n          }\n        }],\n        outputEntry: [{\n          \"@_id\": generateUuid(),\n          text: {\n            __$$text: DECISION_TABLE_OUTPUT_DEFAULT_VALUE\n          }\n        }],\n        annotationEntry: [{\n          text: {\n            __$$text: \"// Your annotations here\"\n          }\n        }]\n      }]\n    },\n    widthsById: {\n      \"_92929AE6-3BB5-4217-B66E-07614680971D\": []\n    },\n    isResetSupportedOnRootExpression: true\n  }\n}",
      ...((_t = (_s = UndefinedWidths.parameters) === null || _s === void 0 ? void 0 : _s.docs) === null || _t === void 0 ? void 0 : _t.source)
    }
  }
};
const __namedExportsOrder = ["Base", "EvaluationHits", "Readonly", "Discount", "Nested", "UndefinedWidths"];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm94ZWRFeHByZXNzaW9ucy1EZWNpc2lvblRhYmxlLURlY2lzaW9uVGFibGUtc3Rvcmllcy43ZmRlYTNkMS5pZnJhbWUuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CdUc7QUFDVTtBQUM5QjtBQUNmO0FBQytGO0FBQ3lFO0FBRzVPLE1BQU1hLElBQUksR0FBcUM7RUFDN0NDLEtBQUssRUFBRSxrQ0FBa0M7RUFDekNDLFNBQVMsRUFBRWYsNkVBQXFCO0VBQ2hDZ0IsY0FBYyxFQUFFO0NBQ2pCO0FBQ0QsaUVBQWVILElBQUksRUFBQztBQUliLE1BQU1YLElBQUksR0FBVTtFQUN6QmUsTUFBTSxFQUFFQyxJQUFJLElBQUlqQiwwRkFBMEIsRUFBRTtFQUM1Q2tCLFVBQVUsRUFBRTtJQUNWQyxPQUFPLEVBQUUsQ0FBQyxXQUFXLEVBQUUsZUFBZSxFQUFFLGVBQWU7R0FDeEQ7RUFDREYsSUFBSSxFQUFFO0lBQ0osR0FBR2YscUVBQWUsQ0FBQ2UsSUFBSTtJQUN2QkcsVUFBVSxFQUFFO01BQ1ZDLFdBQVcsRUFBRSxlQUFlO01BQzVCLE1BQU0sRUFBRSx1Q0FBdUM7TUFDL0MsU0FBUyxFQUFFLGlCQUFpQjtNQUM1QixhQUFhLEVBQUUsUUFBUTtNQUN2QkMsS0FBSyxFQUFFLENBQUM7UUFDTixNQUFNLEVBQUVsQixzREFBWSxFQUFFO1FBQ3RCbUIsZUFBZSxFQUFFO1VBQ2YsTUFBTSxFQUFFbkIsc0RBQVksRUFBRTtVQUN0Qm9CLElBQUksRUFBRTtZQUNKQyxRQUFRLEVBQUU7V0FDWDtVQUNELFdBQVcsRUFBRUM7O09BRWhCLENBQUM7TUFDRkMsTUFBTSxFQUFFLENBQUM7UUFDUCxNQUFNLEVBQUV2QixzREFBWSxFQUFFO1FBQ3RCLFNBQVMsRUFBRSxVQUFVO1FBQ3JCLFdBQVcsRUFBRXNCO09BQ2QsQ0FBQztNQUNGRSxVQUFVLEVBQUUsQ0FBQztRQUNYLFFBQVEsRUFBRTtPQUNYLENBQUM7TUFDRkMsSUFBSSxFQUFFLENB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O01BQ05DLGNBQWMsRUFBRSxnU0FBZ1M7TUFDaFQsSUFBRyxDQUFBQyxFQUFBLElBQUFDLEVBQUEsR0FBQW5ELElBQUksQ0FBQ2lCLFVBQVUsY0FBQWtDLEVBQUEsdUJBQUFBLEVBQUEsQ0FBRUwsSUFBSSxjQUFBSSxFQUFBLHVCQUFBQSxFQUFBLENBQUVGLE1BQU07OztDQUdyQztBQUFDLE1BQUFtQixtQkFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL0BraWUtdG9vbHMvYm94ZWQtZXhwcmVzc2lvbi1jb21wb25lbnQvLi9zdG9yaWVzL2JveGVkRXhwcmVzc2lvbnMvRGVjaXNpb25UYWJsZS9EZWNpc2lvblRhYmxlLnN0b3JpZXMudHN4Iiwid2VicGFjazovL0BraWUtdG9vbHMvYm94ZWQtZXhwcmVzc2lvbi1jb21wb25lbnQvLi9zdG9yaWVzL21pc2MvRW1wdHkvRW1wdHlFeHByZXNzaW9uLnN0b3JpZXMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBMaWNlbnNlZCB0byB0aGUgQXBhY2hlIFNvZnR3YXJlIEZvdW5kYXRpb24gKEFTRikgdW5kZXIgb25lXG4gKiBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gIFNlZSB0aGUgTk9USUNFIGZpbGVcbiAqIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uXG4gKiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC4gIFRoZSBBU0YgbGljZW5zZXMgdGhpcyBmaWxlXG4gKiB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlXG4gKiBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2VcbiAqIHdpdGggdGhlIExpY2Vuc2UuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLFxuICogc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cbiAqIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXG4gKiBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGVcbiAqIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnNcbiAqIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB0eXBlIHsgTWV0YSwgU3RvcnlPYmogfSBmcm9tIFwiQHN0b3J5Ym9vay9yZWFjdFwiO1xuaW1wb3J0IHsgQm94ZWRFeHByZXNzaW9uRWRpdG9yLCBCb3hlZEV4cHJlc3Npb25FZGl0b3JQcm9wcyB9IGZyb20gXCIuLi8uLi8uLi9zcmMvQm94ZWRFeHByZXNzaW9uRWRpdG9yXCI7XG5pbXBvcnQgeyBCb3hlZEV4cHJlc3Npb25FZGl0b3JTdG9yeSwgQm94ZWRFeHByZXNzaW9uRWRpdG9yU3RvcnlBcmdzIH0gZnJvbSBcIi4uLy4uL2JveGVkRXhwcmVzc2lvblN0b3JpZXNXcmFwcGVyXCI7XG5pbXBvcnQgeyBCYXNlIGFzIEVtcHR5RXhwcmVzc2lvbiB9IGZyb20gXCIuLi8uLi9taXNjL0VtcHR5L0VtcHR5RXhwcmVzc2lvbi5zdG9yaWVzXCI7XG5pbXBvcnQgeyBEbW5CdWlsdEluRGF0YVR5cGUsIGdlbmVyYXRlVXVpZCB9IGZyb20gXCIuLi8uLi8uLi9zcmMvYXBpXCI7XG5pbXBvcnQgeyBERUNJU0lPTl9UQUJMRV9JTlBVVF9ERUZBVUxUX1ZBTFVFLCBERUNJU0lPTl9UQUJMRV9PVVRQVVRfREVGQVVMVF9WQUxVRSB9IGZyb20gXCIuLi8uLi8uLi9zcmMvZXhwcmVzc2lvbnMvRGVjaXNpb25UYWJsZUV4cHJlc3Npb24vRGVjaXNpb25UYWJsZUV4cHJlc3Npb25cIjtcbmltcG9ydCB7IEJFRV9UQUJMRV9ST1dfSU5ERVhfQ09MVU1OX1dJRFRILCBDT05URVhUX0VOVFJZX1ZBUklBQkxFX01JTl9XSURUSCwgREVDSVNJT05fVEFCTEVfQU5OT1RBVElPTl9ERUZBVUxUX1dJRFRILCBERUNJU0lPTl9UQUJMRV9JTlBVVF9ERUZBVUxUX1dJRFRILCBERUNJU0lPTl9UQUJMRV9PVVRQVVRfREVGQVVMVF9XSURUSCB9IGZyb20gXCIuLi8uLi8uLi9zcmMvcmVzaXppbmcvV2lkdGhDb25zdGFudHNcIjtcblxuLy8gTW9yZSBvbiBob3cgdG8gc2V0IHVwIHN0b3JpZXMgYXQ6IGh0dHBzOi8vc3Rvcnlib29rLmpzLm9yZy9kb2NzL3JlYWN0L3dyaXRpbmctc3Rvcmllcy9pbnRyb2R1Y3Rpb24jZGVmYXVsdC1leHBvcnRcbmNvbnN0IG1ldGE6IE1ldGE8Qm94ZWRFeHByZXNzaW9uRWRpdG9yUHJvcHM+ID0ge1xuICB0aXRsZTogXCJCb3hlZCBFeHByZXNzaW9ucy9EZWNpc2lvbiBUYWJsZVwiLFxuICBjb21wb25lbnQ6IEJveGVkRXhwcmVzc2lvbkVkaXRvcixcbiAgaW5jbHVkZVN0b3JpZXM6IC9eW0EtWl0vXG59O1xuZXhwb3J0IGRlZmF1bHQgbWV0YTtcbnR5cGUgU3RvcnkgPSBTdG9yeU9iajxCb3hlZEV4cHJlc3Npb25FZGl0b3JTdG9yeUFyZ3M+O1xuXG4vLyBNb3JlIG9uIHdyaXRpbmcgc3RvcmllcyB3aXRoIGFyZ3M6IGh0dHBzOi8vc3Rvcnlib29rLmpzLm9yZy9kb2NzL3JlYWN0L3dyaXRpbmctc3Rvcmllcy9hcmdzXG5leHBvcnQgY29uc3QgQmFzZTogU3RvcnkgPSB7XG4gIHJlbmRlcjogYXJncyA9PiBCb3hlZEV4cHJlc3Npb25FZGl0b3JTdG9yeSgpLFxuICBwYXJhbWV0ZXJzOiB7XG4gICAgZXhjbHVkZTogW1wiZGF0YVR5cGVzXCIsIFwiYmVlR3d0U2VydmljZVwiLCBcInBtbWxEb2N1bWVudHNcIl1cbiAgfSxcbiAgYXJnczoge1xuICAgIC4uLkVtcHR5RXhwcmVzc2lvbi5hcmdzLFxuICAgIGV4cHJlc3Npb246IHtcbiAgICAgIF9fJCRlbGVtZW50OiBcImRlY2lzaW9uVGFibGVcIixcbiAgICAgIFwiQF9pZFwiOiBcIl85MjkyOUFFNi0zQkI1LTQyMTctQjY2RS0wNzYxNDY4MDk3MURcIixcbiAgICAgIFwiQF9sYWJlbFwiOiBcIkV4cHJlc3Npb24gTmFtZVwiLFxuICAgICAgXCJAX2hpdFBvbGljeVwiOiBcIlVOSVFVRVwiLFxuICAgICAgaW5wdXQ6IFt7XG4gICAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICAgICAgaW5wdXRFeHByZXNzaW9uOiB7XG4gICAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgICAgIHRleHQ6IHtcbiAgICAgICAgICAgIF9fJCR0ZXh0OiBcImlucHV0LTFcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJAX3R5cGVSZWZcIjogdW5kZWZpbmVkXG4gICAgICAgIH1cbiAgICAgIH1dLFxuICAgICAgb3V0cHV0OiBbe1xuICAgICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICAgIFwiQF9sYWJlbFwiOiBcIm91dHB1dC0xXCIsXG4gICAgICAgIFwiQF90eXBlUmVmXCI6IHVuZGVmaW5lZFxuICAgICAgfV0sXG4gICAgICBhbm5vdGF0aW9uOiBbe1xuICAgICAgICBcIkBfbmFtZVwiOiBcIkFubm90YXRpb25zXCJcbiAgICAgIH1dLFxuICAgICAgcnVsZTogW3tcbiAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgICBpbnB1dEVudHJ5OiBbe1xuICAgICAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICAgICAgICB0ZXh0OiB7XG4gICAgICAgICAgICBfXyQkdGV4dDogREVDSVNJT05fVEFCTEVfSU5QVVRfREVGQVVMVF9WQUxVRVxuICAgICAgICAgIH1cbiAgICAgICAgfV0sXG4gICAgICAgIG91dHB1dEVudHJ5OiBbe1xuICAgICAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICAgICAgICB0ZXh0OiB7XG4gICAgICAgICAgICBfXyQkdGV4dDogREVDSVNJT05fVEFCTEVfT1VUUFVUX0RFRkFVTFRfVkFMVUVcbiAgICAgICAgICB9XG4gICAgICAgIH1dLFxuICAgICAgICBhbm5vdGF0aW9uRW50cnk6IFt7XG4gICAgICAgICAgdGV4dDoge1xuICAgICAgICAgICAgX18kJHRleHQ6IFwiLy8gWW91ciBhbm5vdGF0aW9ucyBoZXJlXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1dXG4gICAgICB9XVxuICAgIH0sXG4gICAgd2lkdGhzQnlJZDoge1xuICAgICAgXCJfOTI5MjlBRTYtM0JCNS00MjE3LUI2NkUtMDc2MTQ2ODA5NzFEXCI6IFtCRUVfVEFCTEVfUk9XX0lOREVYX0NPTFVNTl9XSURUSCwgREVDSVNJT05fVEFCTEVfSU5QVVRfREVGQVVMVF9XSURUSCwgREVDSVNJT05fVEFCTEVfT1VUUFVUX0RFRkFVTFRfV0lEVEgsIERFQ0lTSU9OX1RBQkxFX0FOTk9UQVRJT05fREVGQVVMVF9XSURUSF1cbiAgICB9LFxuICAgIGlzUmVzZXRTdXBwb3J0ZWRPblJvb3RFeHByZXNzaW9uOiB0cnVlXG4gIH1cbn07XG5leHBvcnQgY29uc3QgRXZhbHVhdGlvbkhpdHM6IFN0b3J5ID0ge1xuICByZW5kZXI6IGFyZ3MgPT4gQm94ZWRFeHByZXNzaW9uRWRpdG9yU3Rvcnkoe1xuICAgIGV2YWx1YXRpb25IaXRzQ291bnRCeUlkOiBuZXcgTWFwKFtbXCJfMUZBMTJCOUYtMjg4Qy00MkU4LUI3N0YtQkUyRDM3MDJCN0I4XCIsIDMwXV0pXG4gIH0pLFxuICBwYXJhbWV0ZXJzOiB7XG4gICAgZXhjbHVkZTogW1wiZGF0YVR5cGVzXCIsIFwiYmVlR3d0U2VydmljZVwiLCBcInBtbWxEb2N1bWVudHNcIl1cbiAgfSxcbiAgYXJnczoge1xuICAgIC4uLkVtcHR5RXhwcmVzc2lvbi5hcmdzLFxuICAgIGV4cHJlc3Npb246IHtcbiAgICAgIF9fJCRlbGVtZW50OiBcImRlY2lzaW9uVGFibGVcIixcbiAgICAgIFwiQF9pZFwiOiBcIl85MjkyOUFFNi0zQkI1LTQyMTctQjY2RS0wNzYxNDY4MDk3MURcIixcbiAgICAgIFwiQF9sYWJlbFwiOiBcIkV4cHJlc3Npb24gTmFtZVwiLFxuICAgICAgXCJAX2hpdFBvbGljeVwiOiBcIlVOSVFVRVwiLFxuICAgICAgaW5wdXQ6IFt7XG4gICAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICAgICAgaW5wdXRFeHByZXNzaW9uOiB7XG4gICAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgICAgIHRleHQ6IHtcbiAgICAgICAgICAgIF9fJCR0ZXh0OiBcImlucHV0LTFcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJAX3R5cGVSZWZcIjogdW5kZWZpbmVkXG4gICAgICAgIH1cbiAgICAgIH1dLFxuICAgICAgb3V0cHV0OiBbe1xuICAgICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICAgIFwiQF9sYWJlbFwiOiBcIm91dHB1dC0xXCIsXG4gICAgICAgIFwiQF90eXBlUmVmXCI6IHVuZGVmaW5lZFxuICAgICAgfV0sXG4gICAgICBhbm5vdGF0aW9uOiBbe1xuICAgICAgICBcIkBfbmFtZVwiOiBcIkFubm90YXRpb25zXCJcbiAgICAgIH1dLFxuICAgICAgcnVsZTogW3tcbiAgICAgICAgXCJAX2lkXCI6IFwiXzFGQTEyQjlGLTI4OEMtNDJFOC1CNzdGLUJFMkQzNzAyQjdCOFwiLFxuICAgICAgICBpbnB1dEVudHJ5OiBbe1xuICAgICAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICAgICAgICB0ZXh0OiB7XG4gICAgICAgICAgICBfXyQkdGV4dDogXCJFXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICAgICAgdGV4dDoge1xuICAgICAgICAgICAgX18kJHRleHQ6IFwiRVwiXG4gICAgICAgICAgfVxuICAgICAgICB9XSxcbiAgICAgICAgb3V0cHV0RW50cnk6IFt7XG4gICAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgICAgIHRleHQ6IHtcbiAgICAgICAgICAgIF9fJCR0ZXh0OiBcImFhYVwiXG4gICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgICAgIHRleHQ6IHtcbiAgICAgICAgICAgIF9fJCR0ZXh0OiBcImFhYVwiXG4gICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgICAgIHRleHQ6IHtcbiAgICAgICAgICAgIF9fJCR0ZXh0OiBcImFhYVwiXG4gICAgICAgICAgfVxuICAgICAgICB9XSxcbiAgICAgICAgYW5ub3RhdGlvbkVudHJ5OiBbe1xuICAgICAgICAgIHRleHQ6IHtcbiAgICAgICAgICAgIF9fJCR0ZXh0OiBcIi8vIFlvdXIgYW5ub3RhdGlvbnMgaGVyZVwiXG4gICAgICAgICAgfVxuICAgICAgICB9XVxuICAgICAgfSwge1xuICAgICAgICBcIkBfaWRcIjogXCJfMUZBMTJCOUYtMjg4Qy00MkU4LUI3N0YtQkUyRDM3MDJCN0I0XCIsXG4gICAgICAgIGlucHV0RW50cnk6IFt7XG4gICAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgICAgIHRleHQ6IHtcbiAgICAgICAgICAgIF9fJCR0ZXh0OiBcIkVcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICAgICAgICB0ZXh0OiB7XG4gICAgICAgICAgICBfXyQkdGV4dDogXCJFXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1dLFxuICAgICAgICBvdXRwdXRFbnRyeTogW3tcbiAgICAgICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICAgICAgdGV4dDoge1xuICAgICAgICAgICAgX18kJHRleHQ6IFwiYWFhXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICAgICAgdGV4dDoge1xuICAgICAgICAgICAgX18kJHRleHQ6IFwiYWFhXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICAgICAgdGV4dDoge1xuICAgICAgICAgICAgX18kJHRleHQ6IFwiYWFhXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1dLFxuICAgICAgICBhbm5vdGF0aW9uRW50cnk6IFt7XG4gICAgICAgICAgdGV4dDoge1xuICAgICAgICAgICAgX18kJHRleHQ6IFwiLy8gWW91ciBhbm5vdGF0aW9ucyBoZXJlXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1dXG4gICAgICB9XVxuICAgIH0sXG4gICAgd2lkdGhzQnlJZDoge1xuICAgICAgXCJfOTI5MjlBRTYtM0JCNS00MjE3LUI2NkUtMDc2MTQ2ODA5NzFEXCI6IFtCRUVfVEFCTEVfUk9XX0lOREVYX0NPTFVNTl9XSURUSCwgREVDSVNJT05fVEFCTEVfSU5QVVRfREVGQVVMVF9XSURUSCwgREVDSVNJT05fVEFCTEVfT1VUUFVUX0RFRkFVTFRfV0lEVEgsIERFQ0lTSU9OX1RBQkxFX0FOTk9UQVRJT05fREVGQVVMVF9XSURUSF1cbiAgICB9LFxuICAgIGlzUmVzZXRTdXBwb3J0ZWRPblJvb3RFeHByZXNzaW9uOiB0cnVlXG4gIH1cbn07XG5leHBvcnQgY29uc3QgUmVhZG9ubHk6IFN0b3J5ID0ge1xuICByZW5kZXI6IGFyZ3MgPT4gQm94ZWRFeHByZXNzaW9uRWRpdG9yU3RvcnkoKSxcbiAgcGFyYW1ldGVyczoge1xuICAgIGV4Y2x1ZGU6IFtcImRhdGFUeXBlc1wiLCBcImJlZUd3dFNlcnZpY2VcIiwgXCJwbW1sRG9jdW1lbnRzXCJdXG4gIH0sXG4gIGFyZ3M6IHtcbiAgICAuLi5FbXB0eUV4cHJlc3Npb24uYXJncyxcbiAgICBleHByZXNzaW9uOiB7XG4gICAgICBfXyQkZWxlbWVudDogXCJkZWNpc2lvblRhYmxlXCIsXG4gICAgICBcIkBfaWRcIjogXCJfOTI5MjlBRTYtM0JCNS00MjE3LUI2NkUtMDc2MTQ2ODA5NzFEXCIsXG4gICAgICBcIkBfbGFiZWxcIjogXCJFeHByZXNzaW9uIE5hbWVcIixcbiAgICAgIFwiQF9oaXRQb2xpY3lcIjogXCJVTklRVUVcIixcbiAgICAgIGlucHV0OiBbe1xuICAgICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICAgIGlucHV0RXhwcmVzc2lvbjoge1xuICAgICAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICAgICAgICB0ZXh0OiB7XG4gICAgICAgICAgICBfXyQkdGV4dDogXCJpbnB1dC0xXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiQF90eXBlUmVmXCI6IHVuZGVmaW5lZFxuICAgICAgICB9XG4gICAgICB9XSxcbiAgICAgIG91dHB1dDogW3tcbiAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgICBcIkBfbGFiZWxcIjogXCJvdXRwdXQtMVwiLFxuICAgICAgICBcIkBfdHlwZVJlZlwiOiB1bmRlZmluZWRcbiAgICAgIH1dLFxuICAgICAgYW5ub3RhdGlvbjogW3tcbiAgICAgICAgXCJAX25hbWVcIjogXCJBbm5vdGF0aW9uc1wiXG4gICAgICB9XSxcbiAgICAgIHJ1bGU6IFt7XG4gICAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICAgICAgaW5wdXRFbnRyeTogW3tcbiAgICAgICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICAgICAgdGV4dDoge1xuICAgICAgICAgICAgX18kJHRleHQ6IERFQ0lTSU9OX1RBQkxFX0lOUFVUX0RFRkFVTFRfVkFMVUVcbiAgICAgICAgICB9XG4gICAgICAgIH1dLFxuICAgICAgICBvdXRwdXRFbnRyeTogW3tcbiAgICAgICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICAgICAgdGV4dDoge1xuICAgICAgICAgICAgX18kJHRleHQ6IERFQ0lTSU9OX1RBQkxFX09VVFBVVF9ERUZBVUxUX1ZBTFVFXG4gICAgICAgICAgfVxuICAgICAgICB9XSxcbiAgICAgICAgYW5ub3RhdGlvbkVudHJ5OiBbe1xuICAgICAgICAgIHRleHQ6IHtcbiAgICAgICAgICAgIF9fJCR0ZXh0OiBcIi8vIFlvdXIgYW5ub3RhdGlvbnMgaGVyZVwiXG4gICAgICAgICAgfVxuICAgICAgICB9XVxuICAgICAgfV1cbiAgICB9LFxuICAgIHdpZHRoc0J5SWQ6IHtcbiAgICAgIFwiXzkyOTI5QUU2LTNCQjUtNDIxNy1CNjZFLTA3NjE0NjgwOTcxRFwiOiBbQkVFX1RBQkxFX1JPV19JTkRFWF9DT0xVTU5fV0lEVEgsIERFQ0lTSU9OX1RBQkxFX0lOUFVUX0RFRkFVTFRfV0lEVEgsIERFQ0lTSU9OX1RBQkxFX09VVFBVVF9ERUZBVUxUX1dJRFRILCBERUNJU0lPTl9UQUJMRV9BTk5PVEFUSU9OX0RFRkFVTFRfV0lEVEhdXG4gICAgfSxcbiAgICBpc1Jlc2V0U3VwcG9ydGVkT25Sb290RXhwcmVzc2lvbjogdHJ1ZSxcbiAgICBpc1JlYWRPbmx5OiB0cnVlXG4gIH1cbn07XG5leHBvcnQgY29uc3QgRGlzY291bnQ6IFN0b3J5ID0ge1xuICByZW5kZXI6IGFyZ3MgPT4gQm94ZWRFeHByZXNzaW9uRWRpdG9yU3RvcnkoKSxcbiAgcGFyYW1ldGVyczoge1xuICAgIGV4Y2x1ZGU6IFtcImRhdGFUeXBlc1wiLCBcImJlZUd3dFNlcnZpY2VcIiwgXCJwbW1sRG9jdW1lbnRzXCJdXG4gIH0sXG4gIGFyZ3M6IHtcbiAgICAuLi5FbXB0eUV4cHJlc3Npb24uYXJncyxcbiAgICBleHByZXNzaW9uOiB7XG4gICAgICBfXyQkZWxlbWVudDogXCJkZWNpc2lvblRhYmxlXCIsXG4gICAgICBcIkBfaWRcIjogXCJfOTI5MjlBRTYtM0JCNS00MjE3LUI2NkUtMDc2MTQ2ODA5NzFEXCIsXG4gICAgICBcIkBfbGFiZWxcIjogXCJEaXNjb3VudFwiLFxuICAgICAgXCJAX3R5cGVSZWZcIjogRG1uQnVpbHRJbkRhdGFUeXBlLk51bWJlcixcbiAgICAgIFwiQF9oaXRQb2xpY3lcIjogXCJQUklPUklUWVwiLFxuICAgICAgaW5wdXQ6IFt7XG4gICAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICAgICAgaW5wdXRFeHByZXNzaW9uOiB7XG4gICAgICAgICAgdGV4dDoge1xuICAgICAgICAgICAgX18kJHRleHQ6IFwiQ3VzdG9tZXIuQ2F0ZWdvcnlcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgICAgIFwiQF90eXBlUmVmXCI6IFwidENhdGVnb3J5XCJcbiAgICAgICAgfVxuICAgICAgfV0sXG4gICAgICBvdXRwdXQ6IFt7XG4gICAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICAgICAgXCJAX2xhYmVsXCI6IFwiRGlzY291bnRcIixcbiAgICAgICAgXCJAX3R5cGVSZWZcIjogRG1uQnVpbHRJbkRhdGFUeXBlLk51bWJlclxuICAgICAgfV0sXG4gICAgICBhbm5vdGF0aW9uOiBbe1xuICAgICAgICBcIkBfbmFtZVwiOiBcIkFubm90YXRpb25zXCJcbiAgICAgIH1dLFxuICAgICAgcnVsZTogW3tcbiAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgICBpbnB1dEVudHJ5OiBbe1xuICAgICAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICAgICAgICB0ZXh0OiB7XG4gICAgICAgICAgICBfXyQkdGV4dDogYFwiTmV3IENsaWVudFwiYFxuICAgICAgICAgIH1cbiAgICAgICAgfV0sXG4gICAgICAgIG91dHB1dEVudHJ5OiBbe1xuICAgICAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICAgICAgICB0ZXh0OiB7XG4gICAgICAgICAgICBfXyQkdGV4dDogXCIwLjE1XCJcbiAgICAgICAgICB9XG4gICAgICAgIH1dLFxuICAgICAgICBhbm5vdGF0aW9uRW50cnk6IFtdXG4gICAgICB9LCB7XG4gICAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICAgICAgaW5wdXRFbnRyeTogW3tcbiAgICAgICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICAgICAgdGV4dDoge1xuICAgICAgICAgICAgX18kJHRleHQ6IGBcIlByb21vXCJgXG4gICAgICAgICAgfVxuICAgICAgICB9XSxcbiAgICAgICAgb3V0cHV0RW50cnk6IFt7XG4gICAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgICAgIHRleHQ6IHtcbiAgICAgICAgICAgIF9fJCR0ZXh0OiBcIjAuMjVcIlxuICAgICAgICAgIH1cbiAgICAgICAgfV0sXG4gICAgICAgIGFubm90YXRpb25FbnRyeTogW11cbiAgICAgIH0sIHtcbiAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgICBpbnB1dEVudHJ5OiBbe1xuICAgICAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICAgICAgICB0ZXh0OiB7XG4gICAgICAgICAgICBfXyQkdGV4dDogYFwiU3R1ZGVudFwiYFxuICAgICAgICAgIH1cbiAgICAgICAgfV0sXG4gICAgICAgIG91dHB1dEVudHJ5OiBbe1xuICAgICAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICAgICAgICB0ZXh0OiB7XG4gICAgICAgICAgICBfXyQkdGV4dDogXCIwLjMwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1dLFxuICAgICAgICBhbm5vdGF0aW9uRW50cnk6IFtdXG4gICAgICB9LCB7XG4gICAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICAgICAgaW5wdXRFbnRyeTogW3tcbiAgICAgICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICAgICAgdGV4dDoge1xuICAgICAgICAgICAgX18kJHRleHQ6IGBcIkRlZmF1bHRcImBcbiAgICAgICAgICB9XG4gICAgICAgIH1dLFxuICAgICAgICBvdXRwdXRFbnRyeTogW3tcbiAgICAgICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICAgICAgdGV4dDoge1xuICAgICAgICAgICAgX18kJHRleHQ6IFwiMFwiXG4gICAgICAgICAgfVxuICAgICAgICB9XSxcbiAgICAgICAgYW5ub3RhdGlvbkVudHJ5OiBbXVxuICAgICAgfV1cbiAgICB9LFxuICAgIGlzUmVzZXRTdXBwb3J0ZWRPblJvb3RFeHByZXNzaW9uOiBmYWxzZSxcbiAgICB3aWR0aHNCeUlkOiB7XG4gICAgICBcIl85MjkyOUFFNi0zQkI1LTQyMTctQjY2RS0wNzYxNDY4MDk3MURcIjogW0JFRV9UQUJMRV9ST1dfSU5ERVhfQ09MVU1OX1dJRFRILCAxMjAsIERFQ0lTSU9OX1RBQkxFX09VVFBVVF9ERUZBVUxUX1dJRFRILCBERUNJU0lPTl9UQUJMRV9BTk5PVEFUSU9OX0RFRkFVTFRfV0lEVEhdXG4gICAgfVxuICB9XG59O1xuZXhwb3J0IGNvbnN0IE5lc3RlZDogU3RvcnkgPSB7XG4gIHJlbmRlcjogYXJncyA9PiBCb3hlZEV4cHJlc3Npb25FZGl0b3JTdG9yeSgpLFxuICBwYXJhbWV0ZXJzOiB7XG4gICAgZXhjbHVkZTogW1wiZGF0YVR5cGVzXCIsIFwiYmVlR3d0U2VydmljZVwiLCBcInBtbWxEb2N1bWVudHNcIl1cbiAgfSxcbiAgYXJnczoge1xuICAgIC4uLkVtcHR5RXhwcmVzc2lvbi5hcmdzLFxuICAgIGV4cHJlc3Npb246IHtcbiAgICAgIF9fJCRlbGVtZW50OiBcImNvbnRleHRcIixcbiAgICAgIFwiQF9pZFwiOiBcIl85MjkyOUFFNi0zQkI1LTQyMTctQjY2RS0wNzYxNDY4MDk3MURcIixcbiAgICAgIFwiQF9sYWJlbFwiOiBcIkV4cHJlc3Npb24gTmFtZVwiLFxuICAgICAgY29udGV4dEVudHJ5OiBbe1xuICAgICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICAgIHZhcmlhYmxlOiB7XG4gICAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgICAgIFwiQF9uYW1lXCI6IFwiQ29udGV4dEVudHJ5LTFcIixcbiAgICAgICAgICBkZXNjcmlwdGlvbjoge1xuICAgICAgICAgICAgX18kJHRleHQ6IFwiQ29udGV4dEVudHJ5LTFcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZXhwcmVzc2lvbjoge1xuICAgICAgICAgIF9fJCRlbGVtZW50OiBcImRlY2lzaW9uVGFibGVcIixcbiAgICAgICAgICBcIkBfaWRcIjogXCJfNUIzMUFBQjYtQkQ1Mi00NjU0LTg4QzItNTQxRjY4N0ZFNUI0XCIsXG4gICAgICAgICAgXCJAX2xhYmVsXCI6IFwiRXhwcmVzc2lvbiBOYW1lXCIsXG4gICAgICAgICAgXCJAX2hpdFBvbGljeVwiOiBcIlVOSVFVRVwiLFxuICAgICAgICAgIGlucHV0OiBbe1xuICAgICAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgICAgICAgaW5wdXRFeHByZXNzaW9uOiB7XG4gICAgICAgICAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICAgICAgICAgICAgdGV4dDoge1xuICAgICAgICAgICAgICAgIF9fJCR0ZXh0OiBcImlucHV0LTFcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfV0sXG4gICAgICAgICAgb3V0cHV0OiBbe1xuICAgICAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgICAgICAgXCJAX2xhYmVsXCI6IFwib3V0cHV0LTFcIlxuICAgICAgICAgIH1dLFxuICAgICAgICAgIGFubm90YXRpb246IFt7XG4gICAgICAgICAgICBcIkBfbmFtZVwiOiBcIkFubm90YXRpb25zXCJcbiAgICAgICAgICB9XSxcbiAgICAgICAgICBydWxlOiBbe1xuICAgICAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgICAgICAgaW5wdXRFbnRyeTogW3tcbiAgICAgICAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgICAgICAgICB0ZXh0OiB7XG4gICAgICAgICAgICAgICAgX18kJHRleHQ6IERFQ0lTSU9OX1RBQkxFX0lOUFVUX0RFRkFVTFRfVkFMVUVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICBvdXRwdXRFbnRyeTogW3tcbiAgICAgICAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgICAgICAgICB0ZXh0OiB7XG4gICAgICAgICAgICAgICAgX18kJHRleHQ6IERFQ0lTSU9OX1RBQkxFX09VVFBVVF9ERUZBVUxUX1ZBTFVFXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgYW5ub3RhdGlvbkVudHJ5OiBbe1xuICAgICAgICAgICAgICB0ZXh0OiB7XG4gICAgICAgICAgICAgICAgX18kJHRleHQ6IFwiLy8gWW91ciBhbm5vdGF0aW9ucyBoZXJlXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfV1cbiAgICAgICAgICB9XVxuICAgICAgICB9XG4gICAgICB9XVxuICAgIH0sXG4gICAgd2lkdGhzQnlJZDoge1xuICAgICAgXCJfOTI5MjlBRTYtM0JCNS00MjE3LUI2NkUtMDc2MTQ2ODA5NzFEXCI6IFtDT05URVhUX0VOVFJZX1ZBUklBQkxFX01JTl9XSURUSF0sXG4gICAgICBcIl81QjMxQUFCNi1CRDUyLTQ2NTQtODhDMi01NDFGNjg3RkU1QjRcIjogW0JFRV9UQUJMRV9ST1dfSU5ERVhfQ09MVU1OX1dJRFRILCBERUNJU0lPTl9UQUJMRV9JTlBVVF9ERUZBVUxUX1dJRFRILCBERUNJU0lPTl9UQUJMRV9PVVRQVVRfREVGQVVMVF9XSURUSCwgREVDSVNJT05fVEFCTEVfQU5OT1RBVElPTl9ERUZBVUxUX1dJRFRIXVxuICAgIH0sXG4gICAgaXNSZXNldFN1cHBvcnRlZE9uUm9vdEV4cHJlc3Npb246IGZhbHNlXG4gIH1cbn07XG5leHBvcnQgY29uc3QgVW5kZWZpbmVkV2lkdGhzOiBTdG9yeSA9IHtcbiAgcmVuZGVyOiBhcmdzID0+IEJveGVkRXhwcmVzc2lvbkVkaXRvclN0b3J5KCksXG4gIHBhcmFtZXRlcnM6IHtcbiAgICBleGNsdWRlOiBbXCJkYXRhVHlwZXNcIiwgXCJiZWVHd3RTZXJ2aWNlXCIsIFwicG1tbERvY3VtZW50c1wiXVxuICB9LFxuICBhcmdzOiB7XG4gICAgLi4uRW1wdHlFeHByZXNzaW9uLmFyZ3MsXG4gICAgZXhwcmVzc2lvbjoge1xuICAgICAgX18kJGVsZW1lbnQ6IFwiZGVjaXNpb25UYWJsZVwiLFxuICAgICAgXCJAX2lkXCI6IFwiXzkyOTI5QUU2LTNCQjUtNDIxNy1CNjZFLTA3NjE0NjgwOTcxRFwiLFxuICAgICAgXCJAX2xhYmVsXCI6IFwiRXhwcmVzc2lvbiBOYW1lXCIsXG4gICAgICBcIkBfaGl0UG9saWN5XCI6IFwiVU5JUVVFXCIsXG4gICAgICBpbnB1dDogW3tcbiAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgICBpbnB1dEV4cHJlc3Npb246IHtcbiAgICAgICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICAgICAgdGV4dDoge1xuICAgICAgICAgICAgX18kJHRleHQ6IFwiaW5wdXQtMVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIkBfdHlwZVJlZlwiOiB1bmRlZmluZWRcbiAgICAgICAgfVxuICAgICAgfV0sXG4gICAgICBvdXRwdXQ6IFt7XG4gICAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICAgICAgXCJAX2xhYmVsXCI6IFwib3V0cHV0LTFcIixcbiAgICAgICAgXCJAX3R5cGVSZWZcIjogdW5kZWZpbmVkXG4gICAgICB9XSxcbiAgICAgIGFubm90YXRpb246IFt7XG4gICAgICAgIFwiQF9uYW1lXCI6IFwiQW5ub3RhdGlvbnNcIlxuICAgICAgfV0sXG4gICAgICBydWxlOiBbe1xuICAgICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICAgIGlucHV0RW50cnk6IFt7XG4gICAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgICAgIHRleHQ6IHtcbiAgICAgICAgICAgIF9fJCR0ZXh0OiBERUNJU0lPTl9UQUJMRV9JTlBVVF9ERUZBVUxUX1ZBTFVFXG4gICAgICAgICAgfVxuICAgICAgICB9XSxcbiAgICAgICAgb3V0cHV0RW50cnk6IFt7XG4gICAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgICAgIHRleHQ6IHtcbiAgICAgICAgICAgIF9fJCR0ZXh0OiBERUNJU0lPTl9UQUJMRV9PVVRQVVRfREVGQVVMVF9WQUxVRVxuICAgICAgICAgIH1cbiAgICAgICAgfV0sXG4gICAgICAgIGFubm90YXRpb25FbnRyeTogW3tcbiAgICAgICAgICB0ZXh0OiB7XG4gICAgICAgICAgICBfXyQkdGV4dDogXCIvLyBZb3VyIGFubm90YXRpb25zIGhlcmVcIlxuICAgICAgICAgIH1cbiAgICAgICAgfV1cbiAgICAgIH1dXG4gICAgfSxcbiAgICB3aWR0aHNCeUlkOiB7XG4gICAgICBcIl85MjkyOUFFNi0zQkI1LTQyMTctQjY2RS0wNzYxNDY4MDk3MURcIjogW11cbiAgICB9LFxuICAgIGlzUmVzZXRTdXBwb3J0ZWRPblJvb3RFeHByZXNzaW9uOiB0cnVlXG4gIH1cbn07XG5CYXNlLnBhcmFtZXRlcnMgPSB7XG4gIC4uLkJhc2UucGFyYW1ldGVycyxcbiAgZG9jczoge1xuICAgIC4uLkJhc2UucGFyYW1ldGVycz8uZG9jcyxcbiAgICBzb3VyY2U6IHtcbiAgICAgIG9yaWdpbmFsU291cmNlOiBcIntcXG4gIHJlbmRlcjogYXJncyA9PiBCb3hlZEV4cHJlc3Npb25FZGl0b3JTdG9yeSgpLFxcbiAgcGFyYW1ldGVyczoge1xcbiAgICBleGNsdWRlOiBbXFxcImRhdGFUeXBlc1xcXCIsIFxcXCJiZWVHd3RTZXJ2aWNlXFxcIiwgXFxcInBtbWxEb2N1bWVudHNcXFwiXVxcbiAgfSxcXG4gIGFyZ3M6IHtcXG4gICAgLi4uRW1wdHlFeHByZXNzaW9uLmFyZ3MsXFxuICAgIGV4cHJlc3Npb246IHtcXG4gICAgICBfXyQkZWxlbWVudDogXFxcImRlY2lzaW9uVGFibGVcXFwiLFxcbiAgICAgIFxcXCJAX2lkXFxcIjogXFxcIl85MjkyOUFFNi0zQkI1LTQyMTctQjY2RS0wNzYxNDY4MDk3MURcXFwiLFxcbiAgICAgIFxcXCJAX2xhYmVsXFxcIjogXFxcIkV4cHJlc3Npb24gTmFtZVxcXCIsXFxuICAgICAgXFxcIkBfaGl0UG9saWN5XFxcIjogXFxcIlVOSVFVRVxcXCIsXFxuICAgICAgaW5wdXQ6IFt7XFxuICAgICAgICBcXFwiQF9pZFxcXCI6IGdlbmVyYXRlVXVpZCgpLFxcbiAgICAgICAgaW5wdXRFeHByZXNzaW9uOiB7XFxuICAgICAgICAgIFxcXCJAX2lkXFxcIjogZ2VuZXJhdGVVdWlkKCksXFxuICAgICAgICAgIHRleHQ6IHtcXG4gICAgICAgICAgICBfXyQkdGV4dDogXFxcImlucHV0LTFcXFwiXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJAX3R5cGVSZWZcXFwiOiB1bmRlZmluZWRcXG4gICAgICAgIH1cXG4gICAgICB9XSxcXG4gICAgICBvdXRwdXQ6IFt7XFxuICAgICAgICBcXFwiQF9pZFxcXCI6IGdlbmVyYXRlVXVpZCgpLFxcbiAgICAgICAgXFxcIkBfbGFiZWxcXFwiOiBcXFwib3V0cHV0LTFcXFwiLFxcbiAgICAgICAgXFxcIkBfdHlwZVJlZlxcXCI6IHVuZGVmaW5lZFxcbiAgICAgIH1dLFxcbiAgICAgIGFubm90YXRpb246IFt7XFxuICAgICAgICBcXFwiQF9uYW1lXFxcIjogXFxcIkFubm90YXRpb25zXFxcIlxcbiAgICAgIH1dLFxcbiAgICAgIHJ1bGU6IFt7XFxuICAgICAgICBcXFwiQF9pZFxcXCI6IGdlbmVyYXRlVXVpZCgpLFxcbiAgICAgICAgaW5wdXRFbnRyeTogW3tcXG4gICAgICAgICAgXFxcIkBfaWRcXFwiOiBnZW5lcmF0ZVV1aWQoKSxcXG4gICAgICAgICAgdGV4dDoge1xcbiAgICAgICAgICAgIF9fJCR0ZXh0OiBERUNJU0lPTl9UQUJMRV9JTlBVVF9ERUZBVUxUX1ZBTFVFXFxuICAgICAgICAgIH1cXG4gICAgICAgIH1dLFxcbiAgICAgICAgb3V0cHV0RW50cnk6IFt7XFxuICAgICAgICAgIFxcXCJAX2lkXFxcIjogZ2VuZXJhdGVVdWlkKCksXFxuICAgICAgICAgIHRleHQ6IHtcXG4gICAgICAgICAgICBfXyQkdGV4dDogREVDSVNJT05fVEFCTEVfT1VUUFVUX0RFRkFVTFRfVkFMVUVcXG4gICAgICAgICAgfVxcbiAgICAgICAgfV0sXFxuICAgICAgICBhbm5vdGF0aW9uRW50cnk6IFt7XFxuICAgICAgICAgIHRleHQ6IHtcXG4gICAgICAgICAgICBfXyQkdGV4dDogXFxcIi8vIFlvdXIgYW5ub3RhdGlvbnMgaGVyZVxcXCJcXG4gICAgICAgICAgfVxcbiAgICAgICAgfV1cXG4gICAgICB9XVxcbiAgICB9LFxcbiAgICB3aWR0aHNCeUlkOiB7XFxuICAgICAgXFxcIl85MjkyOUFFNi0zQkI1LTQyMTctQjY2RS0wNzYxNDY4MDk3MURcXFwiOiBbQkVFX1RBQkxFX1JPV19JTkRFWF9DT0xVTU5fV0lEVEgsIERFQ0lTSU9OX1RBQkxFX0lOUFVUX0RFRkFVTFRfV0lEVEgsIERFQ0lTSU9OX1RBQkxFX09VVFBVVF9ERUZBVUxUX1dJRFRILCBERUNJU0lPTl9UQUJMRV9BTk5PVEFUSU9OX0RFRkFVTFRfV0lEVEhdXFxuICAgIH0sXFxuICAgIGlzUmVzZXRTdXBwb3J0ZWRPblJvb3RFeHByZXNzaW9uOiB0cnVlXFxuICB9XFxufVwiLFxuICAgICAgLi4uQmFzZS5wYXJhbWV0ZXJzPy5kb2NzPy5zb3VyY2VcbiAgICB9XG4gIH1cbn07XG5FdmFsdWF0aW9uSGl0cy5wYXJhbWV0ZXJzID0ge1xuICAuLi5FdmFsdWF0aW9uSGl0cy5wYXJhbWV0ZXJzLFxuICBkb2NzOiB7XG4gICAgLi4uRXZhbHVhdGlvbkhpdHMucGFyYW1ldGVycz8uZG9jcyxcbiAgICBzb3VyY2U6IHtcbiAgICAgIG9yaWdpbmFsU291cmNlOiBcIntcXG4gIHJlbmRlcjogYXJncyA9PiBCb3hlZEV4cHJlc3Npb25FZGl0b3JTdG9yeSh7XFxuICAgIGV2YWx1YXRpb25IaXRzQ291bnRCeUlkOiBuZXcgTWFwKFtbXFxcIl8xRkExMkI5Ri0yODhDLTQyRTgtQjc3Ri1CRTJEMzcwMkI3QjhcXFwiLCAzMF1dKVxcbiAgfSksXFxuICBwYXJhbWV0ZXJzOiB7XFxuICAgIGV4Y2x1ZGU6IFtcXFwiZGF0YVR5cGVzXFxcIiwgXFxcImJlZUd3dFNlcnZpY2VcXFwiLCBcXFwicG1tbERvY3VtZW50c1xcXCJdXFxuICB9LFxcbiAgYXJnczoge1xcbiAgICAuLi5FbXB0eUV4cHJlc3Npb24uYXJncyxcXG4gICAgZXhwcmVzc2lvbjoge1xcbiAgICAgIF9fJCRlbGVtZW50OiBcXFwiZGVjaXNpb25UYWJsZVxcXCIsXFxuICAgICAgXFxcIkBfaWRcXFwiOiBcXFwiXzkyOTI5QUU2LTNCQjUtNDIxNy1CNjZFLTA3NjE0NjgwOTcxRFxcXCIsXFxuICAgICAgXFxcIkBfbGFiZWxcXFwiOiBcXFwiRXhwcmVzc2lvbiBOYW1lXFxcIixcXG4gICAgICBcXFwiQF9oaXRQb2xpY3lcXFwiOiBcXFwiVU5JUVVFXFxcIixcXG4gICAgICBpbnB1dDogW3tcXG4gICAgICAgIFxcXCJAX2lkXFxcIjogZ2VuZXJhdGVVdWlkKCksXFxuICAgICAgICBpbnB1dEV4cHJlc3Npb246IHtcXG4gICAgICAgICAgXFxcIkBfaWRcXFwiOiBnZW5lcmF0ZVV1aWQoKSxcXG4gICAgICAgICAgdGV4dDoge1xcbiAgICAgICAgICAgIF9fJCR0ZXh0OiBcXFwiaW5wdXQtMVxcXCJcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcIkBfdHlwZVJlZlxcXCI6IHVuZGVmaW5lZFxcbiAgICAgICAgfVxcbiAgICAgIH1dLFxcbiAgICAgIG91dHB1dDogW3tcXG4gICAgICAgIFxcXCJAX2lkXFxcIjogZ2VuZXJhdGVVdWlkKCksXFxuICAgICAgICBcXFwiQF9sYWJlbFxcXCI6IFxcXCJvdXRwdXQtMVxcXCIsXFxuICAgICAgICBcXFwiQF90eXBlUmVmXFxcIjogdW5kZWZpbmVkXFxuICAgICAgfV0sXFxuICAgICAgYW5ub3RhdGlvbjogW3tcXG4gICAgICAgIFxcXCJAX25hbWVcXFwiOiBcXFwiQW5ub3RhdGlvbnNcXFwiXFxuICAgICAgfV0sXFxuICAgICAgcnVsZTogW3tcXG4gICAgICAgIFxcXCJAX2lkXFxcIjogXFxcIl8xRkExMkI5Ri0yODhDLTQyRTgtQjc3Ri1CRTJEMzcwMkI3QjhcXFwiLFxcbiAgICAgICAgaW5wdXRFbnRyeTogW3tcXG4gICAgICAgICAgXFxcIkBfaWRcXFwiOiBnZW5lcmF0ZVV1aWQoKSxcXG4gICAgICAgICAgdGV4dDoge1xcbiAgICAgICAgICAgIF9fJCR0ZXh0OiBcXFwiRVxcXCJcXG4gICAgICAgICAgfVxcbiAgICAgICAgfSwge1xcbiAgICAgICAgICBcXFwiQF9pZFxcXCI6IGdlbmVyYXRlVXVpZCgpLFxcbiAgICAgICAgICB0ZXh0OiB7XFxuICAgICAgICAgICAgX18kJHRleHQ6IFxcXCJFXFxcIlxcbiAgICAgICAgICB9XFxuICAgICAgICB9XSxcXG4gICAgICAgIG91dHB1dEVudHJ5OiBbe1xcbiAgICAgICAgICBcXFwiQF9pZFxcXCI6IGdlbmVyYXRlVXVpZCgpLFxcbiAgICAgICAgICB0ZXh0OiB7XFxuICAgICAgICAgICAgX18kJHRleHQ6IFxcXCJhYWFcXFwiXFxuICAgICAgICAgIH1cXG4gICAgICAgIH0sIHtcXG4gICAgICAgICAgXFxcIkBfaWRcXFwiOiBnZW5lcmF0ZVV1aWQoKSxcXG4gICAgICAgICAgdGV4dDoge1xcbiAgICAgICAgICAgIF9fJCR0ZXh0OiBcXFwiYWFhXFxcIlxcbiAgICAgICAgICB9XFxuICAgICAgICB9LCB7XFxuICAgICAgICAgIFxcXCJAX2lkXFxcIjogZ2VuZXJhdGVVdWlkKCksXFxuICAgICAgICAgIHRleHQ6IHtcXG4gICAgICAgICAgICBfXyQkdGV4dDogXFxcImFhYVxcXCJcXG4gICAgICAgICAgfVxcbiAgICAgICAgfV0sXFxuICAgICAgICBhbm5vdGF0aW9uRW50cnk6IFt7XFxuICAgICAgICAgIHRleHQ6IHtcXG4gICAgICAgICAgICBfXyQkdGV4dDogXFxcIi8vIFlvdXIgYW5ub3RhdGlvbnMgaGVyZVxcXCJcXG4gICAgICAgICAgfVxcbiAgICAgICAgfV1cXG4gICAgICB9LCB7XFxuICAgICAgICBcXFwiQF9pZFxcXCI6IFxcXCJfMUZBMTJCOUYtMjg4Qy00MkU4LUI3N0YtQkUyRDM3MDJCN0I0XFxcIixcXG4gICAgICAgIGlucHV0RW50cnk6IFt7XFxuICAgICAgICAgIFxcXCJAX2lkXFxcIjogZ2VuZXJhdGVVdWlkKCksXFxuICAgICAgICAgIHRleHQ6IHtcXG4gICAgICAgICAgICBfXyQkdGV4dDogXFxcIkVcXFwiXFxuICAgICAgICAgIH1cXG4gICAgICAgIH0sIHtcXG4gICAgICAgICAgXFxcIkBfaWRcXFwiOiBnZW5lcmF0ZVV1aWQoKSxcXG4gICAgICAgICAgdGV4dDoge1xcbiAgICAgICAgICAgIF9fJCR0ZXh0OiBcXFwiRVxcXCJcXG4gICAgICAgICAgfVxcbiAgICAgICAgfV0sXFxuICAgICAgICBvdXRwdXRFbnRyeTogW3tcXG4gICAgICAgICAgXFxcIkBfaWRcXFwiOiBnZW5lcmF0ZVV1aWQoKSxcXG4gICAgICAgICAgdGV4dDoge1xcbiAgICAgICAgICAgIF9fJCR0ZXh0OiBcXFwiYWFhXFxcIlxcbiAgICAgICAgICB9XFxuICAgICAgICB9LCB7XFxuICAgICAgICAgIFxcXCJAX2lkXFxcIjogZ2VuZXJhdGVVdWlkKCksXFxuICAgICAgICAgIHRleHQ6IHtcXG4gICAgICAgICAgICBfXyQkdGV4dDogXFxcImFhYVxcXCJcXG4gICAgICAgICAgfVxcbiAgICAgICAgfSwge1xcbiAgICAgICAgICBcXFwiQF9pZFxcXCI6IGdlbmVyYXRlVXVpZCgpLFxcbiAgICAgICAgICB0ZXh0OiB7XFxuICAgICAgICAgICAgX18kJHRleHQ6IFxcXCJhYWFcXFwiXFxuICAgICAgICAgIH1cXG4gICAgICAgIH1dLFxcbiAgICAgICAgYW5ub3RhdGlvbkVudHJ5OiBbe1xcbiAgICAgICAgICB0ZXh0OiB7XFxuICAgICAgICAgICAgX18kJHRleHQ6IFxcXCIvLyBZb3VyIGFubm90YXRpb25zIGhlcmVcXFwiXFxuICAgICAgICAgIH1cXG4gICAgICAgIH1dXFxuICAgICAgfV1cXG4gICAgfSxcXG4gICAgd2lkdGhzQnlJZDoge1xcbiAgICAgIFxcXCJfOTI5MjlBRTYtM0JCNS00MjE3LUI2NkUtMDc2MTQ2ODA5NzFEXFxcIjogW0JFRV9UQUJMRV9ST1dfSU5ERVhfQ09MVU1OX1dJRFRILCBERUNJU0lPTl9UQUJMRV9JTlBVVF9ERUZBVUxUX1dJRFRILCBERUNJU0lPTl9UQUJMRV9PVVRQVVRfREVGQVVMVF9XSURUSCwgREVDSVNJT05fVEFCTEVfQU5OT1RBVElPTl9ERUZBVUxUX1dJRFRIXVxcbiAgICB9LFxcbiAgICBpc1Jlc2V0U3VwcG9ydGVkT25Sb290RXhwcmVzc2lvbjogdHJ1ZVxcbiAgfVxcbn1cIixcbiAgICAgIC4uLkV2YWx1YXRpb25IaXRzLnBhcmFtZXRlcnM/LmRvY3M/LnNvdXJjZVxuICAgIH1cbiAgfVxufTtcblJlYWRvbmx5LnBhcmFtZXRlcnMgPSB7XG4gIC4uLlJlYWRvbmx5LnBhcmFtZXRlcnMsXG4gIGRvY3M6IHtcbiAgICAuLi5SZWFkb25seS5wYXJhbWV0ZXJzPy5kb2NzLFxuICAgIHNvdXJjZToge1xuICAgICAgb3JpZ2luYWxTb3VyY2U6IFwie1xcbiAgcmVuZGVyOiBhcmdzID0+IEJveGVkRXhwcmVzc2lvbkVkaXRvclN0b3J5KCksXFxuICBwYXJhbWV0ZXJzOiB7XFxuICAgIGV4Y2x1ZGU6IFtcXFwiZGF0YVR5cGVzXFxcIiwgXFxcImJlZUd3dFNlcnZpY2VcXFwiLCBcXFwicG1tbERvY3VtZW50c1xcXCJdXFxuICB9LFxcbiAgYXJnczoge1xcbiAgICAuLi5FbXB0eUV4cHJlc3Npb24uYXJncyxcXG4gICAgZXhwcmVzc2lvbjoge1xcbiAgICAgIF9fJCRlbGVtZW50OiBcXFwiZGVjaXNpb25UYWJsZVxcXCIsXFxuICAgICAgXFxcIkBfaWRcXFwiOiBcXFwiXzkyOTI5QUU2LTNCQjUtNDIxNy1CNjZFLTA3NjE0NjgwOTcxRFxcXCIsXFxuICAgICAgXFxcIkBfbGFiZWxcXFwiOiBcXFwiRXhwcmVzc2lvbiBOYW1lXFxcIixcXG4gICAgICBcXFwiQF9oaXRQb2xpY3lcXFwiOiBcXFwiVU5JUVVFXFxcIixcXG4gICAgICBpbnB1dDogW3tcXG4gICAgICAgIFxcXCJAX2lkXFxcIjogZ2VuZXJhdGVVdWlkKCksXFxuICAgICAgICBpbnB1dEV4cHJlc3Npb246IHtcXG4gICAgICAgICAgXFxcIkBfaWRcXFwiOiBnZW5lcmF0ZVV1aWQoKSxcXG4gICAgICAgICAgdGV4dDoge1xcbiAgICAgICAgICAgIF9fJCR0ZXh0OiBcXFwiaW5wdXQtMVxcXCJcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcIkBfdHlwZVJlZlxcXCI6IHVuZGVmaW5lZFxcbiAgICAgICAgfVxcbiAgICAgIH1dLFxcbiAgICAgIG91dHB1dDogW3tcXG4gICAgICAgIFxcXCJAX2lkXFxcIjogZ2VuZXJhdGVVdWlkKCksXFxuICAgICAgICBcXFwiQF9sYWJlbFxcXCI6IFxcXCJvdXRwdXQtMVxcXCIsXFxuICAgICAgICBcXFwiQF90eXBlUmVmXFxcIjogdW5kZWZpbmVkXFxuICAgICAgfV0sXFxuICAgICAgYW5ub3RhdGlvbjogW3tcXG4gICAgICAgIFxcXCJAX25hbWVcXFwiOiBcXFwiQW5ub3RhdGlvbnNcXFwiXFxuICAgICAgfV0sXFxuICAgICAgcnVsZTogW3tcXG4gICAgICAgIFxcXCJAX2lkXFxcIjogZ2VuZXJhdGVVdWlkKCksXFxuICAgICAgICBpbnB1dEVudHJ5OiBbe1xcbiAgICAgICAgICBcXFwiQF9pZFxcXCI6IGdlbmVyYXRlVXVpZCgpLFxcbiAgICAgICAgICB0ZXh0OiB7XFxuICAgICAgICAgICAgX18kJHRleHQ6IERFQ0lTSU9OX1RBQkxFX0lOUFVUX0RFRkFVTFRfVkFMVUVcXG4gICAgICAgICAgfVxcbiAgICAgICAgfV0sXFxuICAgICAgICBvdXRwdXRFbnRyeTogW3tcXG4gICAgICAgICAgXFxcIkBfaWRcXFwiOiBnZW5lcmF0ZVV1aWQoKSxcXG4gICAgICAgICAgdGV4dDoge1xcbiAgICAgICAgICAgIF9fJCR0ZXh0OiBERUNJU0lPTl9UQUJMRV9PVVRQVVRfREVGQVVMVF9WQUxVRVxcbiAgICAgICAgICB9XFxuICAgICAgICB9XSxcXG4gICAgICAgIGFubm90YXRpb25FbnRyeTogW3tcXG4gICAgICAgICAgdGV4dDoge1xcbiAgICAgICAgICAgIF9fJCR0ZXh0OiBcXFwiLy8gWW91ciBhbm5vdGF0aW9ucyBoZXJlXFxcIlxcbiAgICAgICAgICB9XFxuICAgICAgICB9XVxcbiAgICAgIH1dXFxuICAgIH0sXFxuICAgIHdpZHRoc0J5SWQ6IHtcXG4gICAgICBcXFwiXzkyOTI5QUU2LTNCQjUtNDIxNy1CNjZFLTA3NjE0NjgwOTcxRFxcXCI6IFtCRUVfVEFCTEVfUk9XX0lOREVYX0NPTFVNTl9XSURUSCwgREVDSVNJT05fVEFCTEVfSU5QVVRfREVGQVVMVF9XSURUSCwgREVDSVNJT05fVEFCTEVfT1VUUFVUX0RFRkFVTFRfV0lEVEgsIERFQ0lTSU9OX1RBQkxFX0FOTk9UQVRJT05fREVGQVVMVF9XSURUSF1cXG4gICAgfSxcXG4gICAgaXNSZXNldFN1cHBvcnRlZE9uUm9vdEV4cHJlc3Npb246IHRydWUsXFxuICAgIGlzUmVhZE9ubHk6IHRydWVcXG4gIH1cXG59XCIsXG4gICAgICAuLi5SZWFkb25seS5wYXJhbWV0ZXJzPy5kb2NzPy5zb3VyY2VcbiAgICB9XG4gIH1cbn07XG5EaXNjb3VudC5wYXJhbWV0ZXJzID0ge1xuICAuLi5EaXNjb3VudC5wYXJhbWV0ZXJzLFxuICBkb2NzOiB7XG4gICAgLi4uRGlzY291bnQucGFyYW1ldGVycz8uZG9jcyxcbiAgICBzb3VyY2U6IHtcbiAgICAgIG9yaWdpbmFsU291cmNlOiBcIntcXG4gIHJlbmRlcjogYXJncyA9PiBCb3hlZEV4cHJlc3Npb25FZGl0b3JTdG9yeSgpLFxcbiAgcGFyYW1ldGVyczoge1xcbiAgICBleGNsdWRlOiBbXFxcImRhdGFUeXBlc1xcXCIsIFxcXCJiZWVHd3RTZXJ2aWNlXFxcIiwgXFxcInBtbWxEb2N1bWVudHNcXFwiXVxcbiAgfSxcXG4gIGFyZ3M6IHtcXG4gICAgLi4uRW1wdHlFeHByZXNzaW9uLmFyZ3MsXFxuICAgIGV4cHJlc3Npb246IHtcXG4gICAgICBfXyQkZWxlbWVudDogXFxcImRlY2lzaW9uVGFibGVcXFwiLFxcbiAgICAgIFxcXCJAX2lkXFxcIjogXFxcIl85MjkyOUFFNi0zQkI1LTQyMTctQjY2RS0wNzYxNDY4MDk3MURcXFwiLFxcbiAgICAgIFxcXCJAX2xhYmVsXFxcIjogXFxcIkRpc2NvdW50XFxcIixcXG4gICAgICBcXFwiQF90eXBlUmVmXFxcIjogRG1uQnVpbHRJbkRhdGFUeXBlLk51bWJlcixcXG4gICAgICBcXFwiQF9oaXRQb2xpY3lcXFwiOiBcXFwiUFJJT1JJVFlcXFwiLFxcbiAgICAgIGlucHV0OiBbe1xcbiAgICAgICAgXFxcIkBfaWRcXFwiOiBnZW5lcmF0ZVV1aWQoKSxcXG4gICAgICAgIGlucHV0RXhwcmVzc2lvbjoge1xcbiAgICAgICAgICB0ZXh0OiB7XFxuICAgICAgICAgICAgX18kJHRleHQ6IFxcXCJDdXN0b21lci5DYXRlZ29yeVxcXCJcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcIkBfaWRcXFwiOiBnZW5lcmF0ZVV1aWQoKSxcXG4gICAgICAgICAgXFxcIkBfdHlwZVJlZlxcXCI6IFxcXCJ0Q2F0ZWdvcnlcXFwiXFxuICAgICAgICB9XFxuICAgICAgfV0sXFxuICAgICAgb3V0cHV0OiBbe1xcbiAgICAgICAgXFxcIkBfaWRcXFwiOiBnZW5lcmF0ZVV1aWQoKSxcXG4gICAgICAgIFxcXCJAX2xhYmVsXFxcIjogXFxcIkRpc2NvdW50XFxcIixcXG4gICAgICAgIFxcXCJAX3R5cGVSZWZcXFwiOiBEbW5CdWlsdEluRGF0YVR5cGUuTnVtYmVyXFxuICAgICAgfV0sXFxuICAgICAgYW5ub3RhdGlvbjogW3tcXG4gICAgICAgIFxcXCJAX25hbWVcXFwiOiBcXFwiQW5ub3RhdGlvbnNcXFwiXFxuICAgICAgfV0sXFxuICAgICAgcnVsZTogW3tcXG4gICAgICAgIFxcXCJAX2lkXFxcIjogZ2VuZXJhdGVVdWlkKCksXFxuICAgICAgICBpbnB1dEVudHJ5OiBbe1xcbiAgICAgICAgICBcXFwiQF9pZFxcXCI6IGdlbmVyYXRlVXVpZCgpLFxcbiAgICAgICAgICB0ZXh0OiB7XFxuICAgICAgICAgICAgX18kJHRleHQ6IGBcXFwiTmV3IENsaWVudFxcXCJgXFxuICAgICAgICAgIH1cXG4gICAgICAgIH1dLFxcbiAgICAgICAgb3V0cHV0RW50cnk6IFt7XFxuICAgICAgICAgIFxcXCJAX2lkXFxcIjogZ2VuZXJhdGVVdWlkKCksXFxuICAgICAgICAgIHRleHQ6IHtcXG4gICAgICAgICAgICBfXyQkdGV4dDogXFxcIjAuMTVcXFwiXFxuICAgICAgICAgIH1cXG4gICAgICAgIH1dLFxcbiAgICAgICAgYW5ub3RhdGlvbkVudHJ5OiBbXVxcbiAgICAgIH0sIHtcXG4gICAgICAgIFxcXCJAX2lkXFxcIjogZ2VuZXJhdGVVdWlkKCksXFxuICAgICAgICBpbnB1dEVudHJ5OiBbe1xcbiAgICAgICAgICBcXFwiQF9pZFxcXCI6IGdlbmVyYXRlVXVpZCgpLFxcbiAgICAgICAgICB0ZXh0OiB7XFxuICAgICAgICAgICAgX18kJHRleHQ6IGBcXFwiUHJvbW9cXFwiYFxcbiAgICAgICAgICB9XFxuICAgICAgICB9XSxcXG4gICAgICAgIG91dHB1dEVudHJ5OiBbe1xcbiAgICAgICAgICBcXFwiQF9pZFxcXCI6IGdlbmVyYXRlVXVpZCgpLFxcbiAgICAgICAgICB0ZXh0OiB7XFxuICAgICAgICAgICAgX18kJHRleHQ6IFxcXCIwLjI1XFxcIlxcbiAgICAgICAgICB9XFxuICAgICAgICB9XSxcXG4gICAgICAgIGFubm90YXRpb25FbnRyeTogW11cXG4gICAgICB9LCB7XFxuICAgICAgICBcXFwiQF9pZFxcXCI6IGdlbmVyYXRlVXVpZCgpLFxcbiAgICAgICAgaW5wdXRFbnRyeTogW3tcXG4gICAgICAgICAgXFxcIkBfaWRcXFwiOiBnZW5lcmF0ZVV1aWQoKSxcXG4gICAgICAgICAgdGV4dDoge1xcbiAgICAgICAgICAgIF9fJCR0ZXh0OiBgXFxcIlN0dWRlbnRcXFwiYFxcbiAgICAgICAgICB9XFxuICAgICAgICB9XSxcXG4gICAgICAgIG91dHB1dEVudHJ5OiBbe1xcbiAgICAgICAgICBcXFwiQF9pZFxcXCI6IGdlbmVyYXRlVXVpZCgpLFxcbiAgICAgICAgICB0ZXh0OiB7XFxuICAgICAgICAgICAgX18kJHRleHQ6IFxcXCIwLjMwXFxcIlxcbiAgICAgICAgICB9XFxuICAgICAgICB9XSxcXG4gICAgICAgIGFubm90YXRpb25FbnRyeTogW11cXG4gICAgICB9LCB7XFxuICAgICAgICBcXFwiQF9pZFxcXCI6IGdlbmVyYXRlVXVpZCgpLFxcbiAgICAgICAgaW5wdXRFbnRyeTogW3tcXG4gICAgICAgICAgXFxcIkBfaWRcXFwiOiBnZW5lcmF0ZVV1aWQoKSxcXG4gICAgICAgICAgdGV4dDoge1xcbiAgICAgICAgICAgIF9fJCR0ZXh0OiBgXFxcIkRlZmF1bHRcXFwiYFxcbiAgICAgICAgICB9XFxuICAgICAgICB9XSxcXG4gICAgICAgIG91dHB1dEVudHJ5OiBbe1xcbiAgICAgICAgICBcXFwiQF9pZFxcXCI6IGdlbmVyYXRlVXVpZCgpLFxcbiAgICAgICAgICB0ZXh0OiB7XFxuICAgICAgICAgICAgX18kJHRleHQ6IFxcXCIwXFxcIlxcbiAgICAgICAgICB9XFxuICAgICAgICB9XSxcXG4gICAgICAgIGFubm90YXRpb25FbnRyeTogW11cXG4gICAgICB9XVxcbiAgICB9LFxcbiAgICBpc1Jlc2V0U3VwcG9ydGVkT25Sb290RXhwcmVzc2lvbjogZmFsc2UsXFxuICAgIHdpZHRoc0J5SWQ6IHtcXG4gICAgICBcXFwiXzkyOTI5QUU2LTNCQjUtNDIxNy1CNjZFLTA3NjE0NjgwOTcxRFxcXCI6IFtCRUVfVEFCTEVfUk9XX0lOREVYX0NPTFVNTl9XSURUSCwgMTIwLCBERUNJU0lPTl9UQUJMRV9PVVRQVVRfREVGQVVMVF9XSURUSCwgREVDSVNJT05fVEFCTEVfQU5OT1RBVElPTl9ERUZBVUxUX1dJRFRIXVxcbiAgICB9XFxuICB9XFxufVwiLFxuICAgICAgLi4uRGlzY291bnQucGFyYW1ldGVycz8uZG9jcz8uc291cmNlXG4gICAgfVxuICB9XG59O1xuTmVzdGVkLnBhcmFtZXRlcnMgPSB7XG4gIC4uLk5lc3RlZC5wYXJhbWV0ZXJzLFxuICBkb2NzOiB7XG4gICAgLi4uTmVzdGVkLnBhcmFtZXRlcnM/LmRvY3MsXG4gICAgc291cmNlOiB7XG4gICAgICBvcmlnaW5hbFNvdXJjZTogXCJ7XFxuICByZW5kZXI6IGFyZ3MgPT4gQm94ZWRFeHByZXNzaW9uRWRpdG9yU3RvcnkoKSxcXG4gIHBhcmFtZXRlcnM6IHtcXG4gICAgZXhjbHVkZTogW1xcXCJkYXRhVHlwZXNcXFwiLCBcXFwiYmVlR3d0U2VydmljZVxcXCIsIFxcXCJwbW1sRG9jdW1lbnRzXFxcIl1cXG4gIH0sXFxuICBhcmdzOiB7XFxuICAgIC4uLkVtcHR5RXhwcmVzc2lvbi5hcmdzLFxcbiAgICBleHByZXNzaW9uOiB7XFxuICAgICAgX18kJGVsZW1lbnQ6IFxcXCJjb250ZXh0XFxcIixcXG4gICAgICBcXFwiQF9pZFxcXCI6IFxcXCJfOTI5MjlBRTYtM0JCNS00MjE3LUI2NkUtMDc2MTQ2ODA5NzFEXFxcIixcXG4gICAgICBcXFwiQF9sYWJlbFxcXCI6IFxcXCJFeHByZXNzaW9uIE5hbWVcXFwiLFxcbiAgICAgIGNvbnRleHRFbnRyeTogW3tcXG4gICAgICAgIFxcXCJAX2lkXFxcIjogZ2VuZXJhdGVVdWlkKCksXFxuICAgICAgICB2YXJpYWJsZToge1xcbiAgICAgICAgICBcXFwiQF9pZFxcXCI6IGdlbmVyYXRlVXVpZCgpLFxcbiAgICAgICAgICBcXFwiQF9uYW1lXFxcIjogXFxcIkNvbnRleHRFbnRyeS0xXFxcIixcXG4gICAgICAgICAgZGVzY3JpcHRpb246IHtcXG4gICAgICAgICAgICBfXyQkdGV4dDogXFxcIkNvbnRleHRFbnRyeS0xXFxcIlxcbiAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgZXhwcmVzc2lvbjoge1xcbiAgICAgICAgICBfXyQkZWxlbWVudDogXFxcImRlY2lzaW9uVGFibGVcXFwiLFxcbiAgICAgICAgICBcXFwiQF9pZFxcXCI6IFxcXCJfNUIzMUFBQjYtQkQ1Mi00NjU0LTg4QzItNTQxRjY4N0ZFNUI0XFxcIixcXG4gICAgICAgICAgXFxcIkBfbGFiZWxcXFwiOiBcXFwiRXhwcmVzc2lvbiBOYW1lXFxcIixcXG4gICAgICAgICAgXFxcIkBfaGl0UG9saWN5XFxcIjogXFxcIlVOSVFVRVxcXCIsXFxuICAgICAgICAgIGlucHV0OiBbe1xcbiAgICAgICAgICAgIFxcXCJAX2lkXFxcIjogZ2VuZXJhdGVVdWlkKCksXFxuICAgICAgICAgICAgaW5wdXRFeHByZXNzaW9uOiB7XFxuICAgICAgICAgICAgICBcXFwiQF9pZFxcXCI6IGdlbmVyYXRlVXVpZCgpLFxcbiAgICAgICAgICAgICAgdGV4dDoge1xcbiAgICAgICAgICAgICAgICBfXyQkdGV4dDogXFxcImlucHV0LTFcXFwiXFxuICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICB9XSxcXG4gICAgICAgICAgb3V0cHV0OiBbe1xcbiAgICAgICAgICAgIFxcXCJAX2lkXFxcIjogZ2VuZXJhdGVVdWlkKCksXFxuICAgICAgICAgICAgXFxcIkBfbGFiZWxcXFwiOiBcXFwib3V0cHV0LTFcXFwiXFxuICAgICAgICAgIH1dLFxcbiAgICAgICAgICBhbm5vdGF0aW9uOiBbe1xcbiAgICAgICAgICAgIFxcXCJAX25hbWVcXFwiOiBcXFwiQW5ub3RhdGlvbnNcXFwiXFxuICAgICAgICAgIH1dLFxcbiAgICAgICAgICBydWxlOiBbe1xcbiAgICAgICAgICAgIFxcXCJAX2lkXFxcIjogZ2VuZXJhdGVVdWlkKCksXFxuICAgICAgICAgICAgaW5wdXRFbnRyeTogW3tcXG4gICAgICAgICAgICAgIFxcXCJAX2lkXFxcIjogZ2VuZXJhdGVVdWlkKCksXFxuICAgICAgICAgICAgICB0ZXh0OiB7XFxuICAgICAgICAgICAgICAgIF9fJCR0ZXh0OiBERUNJU0lPTl9UQUJMRV9JTlBVVF9ERUZBVUxUX1ZBTFVFXFxuICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfV0sXFxuICAgICAgICAgICAgb3V0cHV0RW50cnk6IFt7XFxuICAgICAgICAgICAgICBcXFwiQF9pZFxcXCI6IGdlbmVyYXRlVXVpZCgpLFxcbiAgICAgICAgICAgICAgdGV4dDoge1xcbiAgICAgICAgICAgICAgICBfXyQkdGV4dDogREVDSVNJT05fVEFCTEVfT1VUUFVUX0RFRkFVTFRfVkFMVUVcXG4gICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XSxcXG4gICAgICAgICAgICBhbm5vdGF0aW9uRW50cnk6IFt7XFxuICAgICAgICAgICAgICB0ZXh0OiB7XFxuICAgICAgICAgICAgICAgIF9fJCR0ZXh0OiBcXFwiLy8gWW91ciBhbm5vdGF0aW9ucyBoZXJlXFxcIlxcbiAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1dXFxuICAgICAgICAgIH1dXFxuICAgICAgICB9XFxuICAgICAgfV1cXG4gICAgfSxcXG4gICAgd2lkdGhzQnlJZDoge1xcbiAgICAgIFxcXCJfOTI5MjlBRTYtM0JCNS00MjE3LUI2NkUtMDc2MTQ2ODA5NzFEXFxcIjogW0NPTlRFWFRfRU5UUllfVkFSSUFCTEVfTUlOX1dJRFRIXSxcXG4gICAgICBcXFwiXzVCMzFBQUI2LUJENTItNDY1NC04OEMyLTU0MUY2ODdGRTVCNFxcXCI6IFtCRUVfVEFCTEVfUk9XX0lOREVYX0NPTFVNTl9XSURUSCwgREVDSVNJT05fVEFCTEVfSU5QVVRfREVGQVVMVF9XSURUSCwgREVDSVNJT05fVEFCTEVfT1VUUFVUX0RFRkFVTFRfV0lEVEgsIERFQ0lTSU9OX1RBQkxFX0FOTk9UQVRJT05fREVGQVVMVF9XSURUSF1cXG4gICAgfSxcXG4gICAgaXNSZXNldFN1cHBvcnRlZE9uUm9vdEV4cHJlc3Npb246IGZhbHNlXFxuICB9XFxufVwiLFxuICAgICAgLi4uTmVzdGVkLnBhcmFtZXRlcnM/LmRvY3M/LnNvdXJjZVxuICAgIH1cbiAgfVxufTtcblVuZGVmaW5lZFdpZHRocy5wYXJhbWV0ZXJzID0ge1xuICAuLi5VbmRlZmluZWRXaWR0aHMucGFyYW1ldGVycyxcbiAgZG9jczoge1xuICAgIC4uLlVuZGVmaW5lZFdpZHRocy5wYXJhbWV0ZXJzPy5kb2NzLFxuICAgIHNvdXJjZToge1xuICAgICAgb3JpZ2luYWxTb3VyY2U6IFwie1xcbiAgcmVuZGVyOiBhcmdzID0+IEJveGVkRXhwcmVzc2lvbkVkaXRvclN0b3J5KCksXFxuICBwYXJhbWV0ZXJzOiB7XFxuICAgIGV4Y2x1ZGU6IFtcXFwiZGF0YVR5cGVzXFxcIiwgXFxcImJlZUd3dFNlcnZpY2VcXFwiLCBcXFwicG1tbERvY3VtZW50c1xcXCJdXFxuICB9LFxcbiAgYXJnczoge1xcbiAgICAuLi5FbXB0eUV4cHJlc3Npb24uYXJncyxcXG4gICAgZXhwcmVzc2lvbjoge1xcbiAgICAgIF9fJCRlbGVtZW50OiBcXFwiZGVjaXNpb25UYWJsZVxcXCIsXFxuICAgICAgXFxcIkBfaWRcXFwiOiBcXFwiXzkyOTI5QUU2LTNCQjUtNDIxNy1CNjZFLTA3NjE0NjgwOTcxRFxcXCIsXFxuICAgICAgXFxcIkBfbGFiZWxcXFwiOiBcXFwiRXhwcmVzc2lvbiBOYW1lXFxcIixcXG4gICAgICBcXFwiQF9oaXRQb2xpY3lcXFwiOiBcXFwiVU5JUVVFXFxcIixcXG4gICAgICBpbnB1dDogW3tcXG4gICAgICAgIFxcXCJAX2lkXFxcIjogZ2VuZXJhdGVVdWlkKCksXFxuICAgICAgICBpbnB1dEV4cHJlc3Npb246IHtcXG4gICAgICAgICAgXFxcIkBfaWRcXFwiOiBnZW5lcmF0ZVV1aWQoKSxcXG4gICAgICAgICAgdGV4dDoge1xcbiAgICAgICAgICAgIF9fJCR0ZXh0OiBcXFwiaW5wdXQtMVxcXCJcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcIkBfdHlwZVJlZlxcXCI6IHVuZGVmaW5lZFxcbiAgICAgICAgfVxcbiAgICAgIH1dLFxcbiAgICAgIG91dHB1dDogW3tcXG4gICAgICAgIFxcXCJAX2lkXFxcIjogZ2VuZXJhdGVVdWlkKCksXFxuICAgICAgICBcXFwiQF9sYWJlbFxcXCI6IFxcXCJvdXRwdXQtMVxcXCIsXFxuICAgICAgICBcXFwiQF90eXBlUmVmXFxcIjogdW5kZWZpbmVkXFxuICAgICAgfV0sXFxuICAgICAgYW5ub3RhdGlvbjogW3tcXG4gICAgICAgIFxcXCJAX25hbWVcXFwiOiBcXFwiQW5ub3RhdGlvbnNcXFwiXFxuICAgICAgfV0sXFxuICAgICAgcnVsZTogW3tcXG4gICAgICAgIFxcXCJAX2lkXFxcIjogZ2VuZXJhdGVVdWlkKCksXFxuICAgICAgICBpbnB1dEVudHJ5OiBbe1xcbiAgICAgICAgICBcXFwiQF9pZFxcXCI6IGdlbmVyYXRlVXVpZCgpLFxcbiAgICAgICAgICB0ZXh0OiB7XFxuICAgICAgICAgICAgX18kJHRleHQ6IERFQ0lTSU9OX1RBQkxFX0lOUFVUX0RFRkFVTFRfVkFMVUVcXG4gICAgICAgICAgfVxcbiAgICAgICAgfV0sXFxuICAgICAgICBvdXRwdXRFbnRyeTogW3tcXG4gICAgICAgICAgXFxcIkBfaWRcXFwiOiBnZW5lcmF0ZVV1aWQoKSxcXG4gICAgICAgICAgdGV4dDoge1xcbiAgICAgICAgICAgIF9fJCR0ZXh0OiBERUNJU0lPTl9UQUJMRV9PVVRQVVRfREVGQVVMVF9WQUxVRVxcbiAgICAgICAgICB9XFxuICAgICAgICB9XSxcXG4gICAgICAgIGFubm90YXRpb25FbnRyeTogW3tcXG4gICAgICAgICAgdGV4dDoge1xcbiAgICAgICAgICAgIF9fJCR0ZXh0OiBcXFwiLy8gWW91ciBhbm5vdGF0aW9ucyBoZXJlXFxcIlxcbiAgICAgICAgICB9XFxuICAgICAgICB9XVxcbiAgICAgIH1dXFxuICAgIH0sXFxuICAgIHdpZHRoc0J5SWQ6IHtcXG4gICAgICBcXFwiXzkyOTI5QUU2LTNCQjUtNDIxNy1CNjZFLTA3NjE0NjgwOTcxRFxcXCI6IFtdXFxuICAgIH0sXFxuICAgIGlzUmVzZXRTdXBwb3J0ZWRPblJvb3RFeHByZXNzaW9uOiB0cnVlXFxuICB9XFxufVwiLFxuICAgICAgLi4uVW5kZWZpbmVkV2lkdGhzLnBhcmFtZXRlcnM/LmRvY3M/LnNvdXJjZVxuICAgIH1cbiAgfVxufTsiLCIvKlxuICogTGljZW5zZWQgdG8gdGhlIEFwYWNoZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIChBU0YpIHVuZGVyIG9uZVxuICogb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuICBTZWUgdGhlIE5PVElDRSBmaWxlXG4gKiBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvblxuICogcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuICBUaGUgQVNGIGxpY2Vuc2VzIHRoaXMgZmlsZVxuICogdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZVxuICogXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4gKiB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZyxcbiAqIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXG4gKiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxuICogS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlXG4gKiBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zXG4gKiB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgdHlwZSB7IE1ldGEsIFN0b3J5T2JqIH0gZnJvbSBcIkBzdG9yeWJvb2svcmVhY3RcIjtcbmltcG9ydCB7IEJveGVkRXhwcmVzc2lvbkVkaXRvciwgQm94ZWRFeHByZXNzaW9uRWRpdG9yUHJvcHMgfSBmcm9tIFwiLi4vLi4vLi4vc3JjL0JveGVkRXhwcmVzc2lvbkVkaXRvclwiO1xuaW1wb3J0IHsgYmVlR3d0U2VydmljZSwgQm94ZWRFeHByZXNzaW9uRWRpdG9yU3RvcnksIEJveGVkRXhwcmVzc2lvbkVkaXRvclN0b3J5QXJncywgZGF0YVR5cGVzLCBwbW1sRG9jdW1lbnRzIH0gZnJvbSBcIi4uLy4uL2JveGVkRXhwcmVzc2lvblN0b3JpZXNXcmFwcGVyXCI7XG5cbi8vIE1vcmUgb24gaG93IHRvIHNldCB1cCBzdG9yaWVzIGF0OiBodHRwczovL3N0b3J5Ym9vay5qcy5vcmcvZG9jcy9yZWFjdC93cml0aW5nLXN0b3JpZXMvaW50cm9kdWN0aW9uI2RlZmF1bHQtZXhwb3J0XG5jb25zdCBtZXRhOiBNZXRhPEJveGVkRXhwcmVzc2lvbkVkaXRvclByb3BzPiA9IHtcbiAgdGl0bGU6IFwiTWlzYy9FbXB0eSBCb3hlZCBFeHByZXNzaW9uXCIsXG4gIGNvbXBvbmVudDogQm94ZWRFeHByZXNzaW9uRWRpdG9yLFxuICBpbmNsdWRlU3RvcmllczogL15bQS1aXS9cbn07XG5leHBvcnQgZGVmYXVsdCBtZXRhO1xudHlwZSBTdG9yeSA9IFN0b3J5T2JqPEJveGVkRXhwcmVzc2lvbkVkaXRvclN0b3J5QXJncz47XG5cbi8vIE1vcmUgb24gd3JpdGluZyBzdG9yaWVzIHdpdGggYXJnczogaHR0cHM6Ly9zdG9yeWJvb2suanMub3JnL2RvY3MvcmVhY3Qvd3JpdGluZy1zdG9yaWVzL2FyZ3NcbmV4cG9ydCBjb25zdCBCYXNlOiBTdG9yeSA9IHtcbiAgcmVuZGVyOiBhcmdzID0+IEJveGVkRXhwcmVzc2lvbkVkaXRvclN0b3J5KCksXG4gIGFyZ3M6IHtcbiAgICBleHByZXNzaW9uSG9sZGVySWQ6IFwiXzAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMFwiLFxuICAgIGV4cHJlc3Npb246IHVuZGVmaW5lZCxcbiAgICB3aWR0aHNCeUlkOiB7fSxcbiAgICBkYXRhVHlwZXMsXG4gICAgYmVlR3d0U2VydmljZSxcbiAgICBwbW1sRG9jdW1lbnRzLFxuICAgIGlzUmVzZXRTdXBwb3J0ZWRPblJvb3RFeHByZXNzaW9uOiB0cnVlXG4gIH1cbn07XG5CYXNlLnBhcmFtZXRlcnMgPSB7XG4gIC4uLkJhc2UucGFyYW1ldGVycyxcbiAgZG9jczoge1xuICAgIC4uLkJhc2UucGFyYW1ldGVycz8uZG9jcyxcbiAgICBzb3VyY2U6IHtcbiAgICAgIG9yaWdpbmFsU291cmNlOiBcIntcXG4gIHJlbmRlcjogYXJncyA9PiBCb3hlZEV4cHJlc3Npb25FZGl0b3JTdG9yeSgpLFxcbiAgYXJnczoge1xcbiAgICBleHByZXNzaW9uSG9sZGVySWQ6IFxcXCJfMDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwXFxcIixcXG4gICAgZXhwcmVzc2lvbjogdW5kZWZpbmVkLFxcbiAgICB3aWR0aHNCeUlkOiB7fSxcXG4gICAgZGF0YVR5cGVzLFxcbiAgICBiZWVHd3RTZXJ2aWNlLFxcbiAgICBwbW1sRG9jdW1lbnRzLFxcbiAgICBpc1Jlc2V0U3VwcG9ydGVkT25Sb290RXhwcmVzc2lvbjogdHJ1ZVxcbiAgfVxcbn1cIixcbiAgICAgIC4uLkJhc2UucGFyYW1ldGVycz8uZG9jcz8uc291cmNlXG4gICAgfVxuICB9XG59OyJdLCJuYW1lcyI6WyJCb3hlZEV4cHJlc3Npb25FZGl0b3IiLCJCb3hlZEV4cHJlc3Npb25FZGl0b3JTdG9yeSIsIkJhc2UiLCJFbXB0eUV4cHJlc3Npb24iLCJEbW5CdWlsdEluRGF0YVR5cGUiLCJnZW5lcmF0ZVV1aWQiLCJERUNJU0lPTl9UQUJMRV9JTlBVVF9ERUZBVUxUX1ZBTFVFIiwiREVDSVNJT05fVEFCTEVfT1VUUFVUX0RFRkFVTFRfVkFMVUUiLCJCRUVfVEFCTEVfUk9XX0lOREVYX0NPTFVNTl9XSURUSCIsIkNPTlRFWFRfRU5UUllfVkFSSUFCTEVfTUlOX1dJRFRIIiwiREVDSVNJT05fVEFCTEVfQU5OT1RBVElPTl9ERUZBVUxUX1dJRFRIIiwiREVDSVNJT05fVEFCTEVfSU5QVVRfREVGQVVMVF9XSURUSCIsIkRFQ0lTSU9OX1RBQkxFX09VVFBVVF9ERUZBVUxUX1dJRFRIIiwibWV0YSIsInRpdGxlIiwiY29tcG9uZW50IiwiaW5jbHVkZVN0b3JpZXMiLCJyZW5kZXIiLCJhcmdzIiwicGFyYW1ldGVycyIsImV4Y2x1ZGUiLCJleHByZXNzaW9uIiwiX18kJGVsZW1lbnQiLCJpbnB1dCIsImlucHV0RXhwcmVzc2lvbiIsInRleHQiLCJfXyQkdGV4dCIsInVuZGVmaW5lZCIsIm91dHB1dCIsImFubm90YXRpb24iLCJydWxlIiwiaW5wdXRFbnRyeSIsIm91dHB1dEVudHJ5IiwiYW5ub3RhdGlvbkVudHJ5Iiwid2lkdGhzQnlJZCIsImlzUmVzZXRTdXBwb3J0ZWRPblJvb3RFeHByZXNzaW9uIiwiRXZhbHVhdGlvbkhpdHMiLCJldmFsdWF0aW9uSGl0c0NvdW50QnlJZCIsIk1hcCIsIlJlYWRvbmx5IiwiaXNSZWFkT25seSIsIkRpc2NvdW50IiwiTnVtYmVyIiwiTmVzdGVkIiwiY29udGV4dEVudHJ5IiwidmFyaWFibGUiLCJkZXNjcmlwdGlvbiIsIlVuZGVmaW5lZFdpZHRocyIsImRvY3MiLCJfYSIsInNvdXJjZSIsIm9yaWdpbmFsU291cmNlIiwiX2MiLCJfYiIsIl9kIiwiX2YiLCJfZSIsIl9nIiwiX2oiLCJfaCIsIl9rIiwiX20iLCJfbCIsIl9vIiwiX3EiLCJfcCIsIl9yIiwiX3QiLCJfcyIsIl9fbmFtZWRFeHBvcnRzT3JkZXIiLCJiZWVHd3RTZXJ2aWNlIiwiZGF0YVR5cGVzIiwicG1tbERvY3VtZW50cyIsImV4cHJlc3Npb25Ib2xkZXJJZCJdLCJzb3VyY2VSb290IjoiIn0=