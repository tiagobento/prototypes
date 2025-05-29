"use strict";
(self["webpackChunk_kie_tools_boxed_expression_component"] = self["webpackChunk_kie_tools_boxed_expression_component"] || []).push([["boxedExpressions-Conditional-Conditional-stories"],{

/***/ "./stories/boxedExpressions/Conditional/Conditional.stories.tsx":
/*!**********************************************************************!*\
  !*** ./stories/boxedExpressions/Conditional/Conditional.stories.tsx ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Base: () => (/* binding */ Base),
/* harmony export */   EvaluationHits: () => (/* binding */ EvaluationHits),
/* harmony export */   MonthlyFee: () => (/* binding */ MonthlyFee),
/* harmony export */   Nested: () => (/* binding */ Nested),
/* harmony export */   Readonly: () => (/* binding */ Readonly),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _src_BoxedExpressionEditor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/BoxedExpressionEditor */ "./src/BoxedExpressionEditor.tsx");
/* harmony import */ var _boxedExpressionStoriesWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../boxedExpressionStoriesWrapper */ "./stories/boxedExpressionStoriesWrapper.tsx");
/* harmony import */ var _src_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../src/api */ "./src/api/index.ts");
/* harmony import */ var _misc_Empty_EmptyExpression_stories__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../misc/Empty/EmptyExpression.stories */ "./stories/misc/Empty/EmptyExpression.stories.tsx");
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;




const meta = {
  title: "Boxed Expressions/Conditional",
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
    ..._misc_Empty_EmptyExpression_stories__WEBPACK_IMPORTED_MODULE_3__.Base.args,
    expression: {
      __$$element: "conditional",
      "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_2__.generateUuid)(),
      "@_label": "Expression Name",
      if: {
        "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_2__.generateUuid)(),
        expression: {
          __$$element: "literalExpression",
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_2__.generateUuid)()
        }
      },
      then: {
        "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_2__.generateUuid)(),
        expression: {
          __$$element: "literalExpression",
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_2__.generateUuid)()
        }
      },
      else: {
        "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_2__.generateUuid)(),
        expression: {
          __$$element: "literalExpression",
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_2__.generateUuid)()
        }
      }
    }
  }
};
const Readonly = {
  render: args => (0,_boxedExpressionStoriesWrapper__WEBPACK_IMPORTED_MODULE_1__.BoxedExpressionEditorStory)(),
  parameters: {
    exclude: ["dataTypes", "beeGwtService", "pmmlDocuments"]
  },
  args: {
    ..._misc_Empty_EmptyExpression_stories__WEBPACK_IMPORTED_MODULE_3__.Base.args,
    expression: {
      __$$element: "conditional",
      "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_2__.generateUuid)(),
      "@_label": "Expression Name",
      if: {
        "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_2__.generateUuid)(),
        expression: {
          __$$element: "literalExpression",
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_2__.generateUuid)()
        }
      },
      then: {
        "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_2__.generateUuid)(),
        expression: {
          __$$element: "literalExpression",
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_2__.generateUuid)()
        }
      },
      else: {
        "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_2__.generateUuid)(),
        expression: {
          __$$element: "literalExpression",
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_2__.generateUuid)()
        }
      }
    },
    isReadOnly: true
  }
};
const EvaluationHits = {
  render: args => (0,_boxedExpressionStoriesWrapper__WEBPACK_IMPORTED_MODULE_1__.BoxedExpressionEditorStory)({
    evaluationHitsCountById: new Map([["_1FA12B9F-288C-42E8-B77F-BE2D3702B7B7", 70], ["_1FA12B9F-288C-42E8-B77F-BE2D3702B7B8", 30], ["_1FA12B9F-288C-42E8-B77F-BE2D3702B7B9", 40], ["_1FA12B9F-288C-42E8-B77F-BE2D3702B7B0", 50], ["_1FA12B9F-288C-42E8-B77F-BE2D3702B7B1", 20], ["_1FA12B9F-288C-42E8-B77F-BE2D3702B7B2", 70], ["_1FA12B9F-288C-42E8-B77F-BE2D3702B7B3", 20]])
  }),
  parameters: {
    exclude: ["dataTypes", "beeGwtService", "pmmlDocuments"]
  },
  args: {
    ..._misc_Empty_EmptyExpression_stories__WEBPACK_IMPORTED_MODULE_3__.Base.args,
    expression: {
      __$$element: "conditional",
      "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_2__.generateUuid)(),
      "@_label": "Expression Name",
      if: {
        "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_2__.generateUuid)(),
        expression: {
          __$$element: "literalExpression",
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_2__.generateUuid)()
        }
      },
      then: {
        "@_id": "_1FA12B9F-288C-42E8-B77F-BE2D3702B7B7",
        expression: {
          __$$element: "decisionTable",
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_2__.generateUuid)(),
          "@_typeRef": "Any",
          "@_hitPolicy": "UNIQUE",
          input: [{
            "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_2__.generateUuid)(),
            inputExpression: {
              "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_2__.generateUuid)(),
              text: {
                __$$text: "input-1"
              }
            }
          }, {
            "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_2__.generateUuid)(),
            inputExpression: {
              "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_2__.generateUuid)(),
              text: {
                __$$text: "input-2"
              }
            }
          }],
          output: [{
            "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_2__.generateUuid)(),
            "@_label": "output-1"
          }, {
            "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_2__.generateUuid)(),
            "@_label": "output-2"
          }, {
            "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_2__.generateUuid)(),
            "@_label": "output-3"
          }],
          annotation: [{
            "@_name": "Annotations"
          }],
          rule: [{
            "@_id": "_1FA12B9F-288C-42E8-B77F-BE2D3702B7B8",
            inputEntry: [{
              "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_2__.generateUuid)(),
              text: {
                __$$text: "E"
              }
            }, {
              "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_2__.generateUuid)(),
              text: {
                __$$text: "E"
              }
            }],
            outputEntry: [{
              "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_2__.generateUuid)(),
              text: {
                __$$text: "aaa"
              }
            }, {
              "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_2__.generateUuid)(),
              text: {
                __$$text: "aaa"
              }
            }, {
              "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_2__.generateUuid)(),
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
            "@_id": "_1FA12B9F-288C-42E8-B77F-BE2D3702B7B9",
            inputEntry: [{
              "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_2__.generateUuid)(),
              text: {
                __$$text: "E"
              }
            }, {
              "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_2__.generateUuid)(),
              text: {
                __$$text: "E"
              }
            }],
            outputEntry: [{
              "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_2__.generateUuid)(),
              text: {
                __$$text: "aaa"
              }
            }, {
              "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_2__.generateUuid)(),
              text: {
                __$$text: "aaa"
              }
            }, {
              "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_2__.generateUuid)(),
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
        }
      },
      else: {
        "@_id": "_1FA12B9F-288C-42E8-B77F-BE2D3702B7B2",
        expression: {
          __$$element: "conditional",
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_2__.generateUuid)(),
          "@_label": "Expression Name",
          if: {
            "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_2__.generateUuid)(),
            expression: {
              __$$element: "literalExpression",
              "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_2__.generateUuid)()
            }
          },
          then: {
            "@_id": "_1FA12B9F-288C-42E8-B77F-BE2D3702B7B0",
            expression: {
              __$$element: "literalExpression",
              "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_2__.generateUuid)()
            }
          },
          else: {
            "@_id": "_1FA12B9F-288C-42E8-B77F-BE2D3702B7B3",
            expression: {
              __$$element: "decisionTable",
              "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_2__.generateUuid)(),
              "@_typeRef": "Any",
              "@_hitPolicy": "UNIQUE",
              input: [{
                "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_2__.generateUuid)(),
                inputExpression: {
                  "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_2__.generateUuid)(),
                  text: {
                    __$$text: "input-1"
                  }
                }
              }, {
                "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_2__.generateUuid)(),
                inputExpression: {
                  "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_2__.generateUuid)(),
                  text: {
                    __$$text: "input-2"
                  }
                }
              }],
              output: [{
                "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_2__.generateUuid)(),
                "@_label": "output-1"
              }, {
                "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_2__.generateUuid)(),
                "@_label": "output-2"
              }, {
                "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_2__.generateUuid)(),
                "@_label": "output-3"
              }],
              annotation: [{
                "@_name": "Annotations"
              }],
              rule: [{
                "@_id": "_1FA12B9F-288C-42E8-B77F-BE2D3702B7B1",
                inputEntry: [{
                  "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_2__.generateUuid)(),
                  text: {
                    __$$text: "E"
                  }
                }, {
                  "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_2__.generateUuid)(),
                  text: {
                    __$$text: "E"
                  }
                }],
                outputEntry: [{
                  "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_2__.generateUuid)(),
                  text: {
                    __$$text: "aaa"
                  }
                }, {
                  "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_2__.generateUuid)(),
                  text: {
                    __$$text: "aaa"
                  }
                }, {
                  "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_2__.generateUuid)(),
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
            }
          }
        }
      }
    }
  }
};
const MonthlyFee = {
  render: args => (0,_boxedExpressionStoriesWrapper__WEBPACK_IMPORTED_MODULE_1__.BoxedExpressionEditorStory)(),
  parameters: {
    exclude: ["dataTypes", "beeGwtService", "pmmlDocuments"]
  },
  args: {
    ..._misc_Empty_EmptyExpression_stories__WEBPACK_IMPORTED_MODULE_3__.Base.args,
    expression: {
      __$$element: "conditional",
      "@_id": "_D98FB35A-C6A5-4BA7-AD38-176D56A31983",
      "@_label": "MonthlyFee",
      "@_typeRef": "number",
      if: {
        "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_2__.generateUuid)(),
        expression: {
          __$$element: "literalExpression",
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_2__.generateUuid)(),
          text: {
            __$$text: 'ProductType = "STANDARD LOAN"'
          }
        }
      },
      then: {
        "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_2__.generateUuid)(),
        expression: {
          __$$element: "literalExpression",
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_2__.generateUuid)(),
          text: {
            __$$text: "20"
          }
        }
      },
      else: {
        "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_2__.generateUuid)(),
        expression: {
          __$$element: "conditional",
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_2__.generateUuid)(),
          if: {
            "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_2__.generateUuid)(),
            expression: {
              __$$element: "literalExpression",
              "@_id": "_D98FB35A-C6A5-4BA7-AD38-176D56A31983",
              text: {
                __$$text: 'ProductType = "SPECIAL OFFERING"'
              }
            }
          },
          then: {
            "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_2__.generateUuid)(),
            expression: {
              __$$element: "literalExpression",
              "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_2__.generateUuid)(),
              text: {
                __$$text: "25"
              }
            }
          },
          else: {
            "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_2__.generateUuid)(),
            expression: {
              __$$element: "literalExpression",
              "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_2__.generateUuid)(),
              text: {
                __$$text: "null"
              }
            }
          }
        }
      }
    },
    widthsById: {
      "_D98FB35A-C6A5-4BA7-AD38-176D56A31983": [300]
    }
  }
};
const Nested = {
  render: args => (0,_boxedExpressionStoriesWrapper__WEBPACK_IMPORTED_MODULE_1__.BoxedExpressionEditorStory)(),
  parameters: {
    exclude: ["dataTypes", "beeGwtService", "pmmlDocuments"]
  },
  args: {
    ..._misc_Empty_EmptyExpression_stories__WEBPACK_IMPORTED_MODULE_3__.Base.args,
    expression: {
      __$$element: "context",
      "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_2__.generateUuid)(),
      "@_label": "Expression Name",
      contextEntry: [{
        "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_2__.generateUuid)(),
        variable: {
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_2__.generateUuid)(),
          "@_name": "ContextEntry-1"
        },
        expression: {
          __$$element: "conditional",
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_2__.generateUuid)(),
          "@_label": "Expression Name",
          if: {
            "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_2__.generateUuid)(),
            expression: {
              __$$element: "literalExpression",
              "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_2__.generateUuid)()
            }
          },
          then: {
            "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_2__.generateUuid)(),
            expression: {
              __$$element: "literalExpression",
              "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_2__.generateUuid)()
            }
          },
          else: {
            "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_2__.generateUuid)(),
            expression: {
              __$$element: "literalExpression",
              "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_2__.generateUuid)()
            }
          }
        }
      }]
    }
  }
};
Base.parameters = {
  ...Base.parameters,
  docs: {
    ...((_a = Base.parameters) === null || _a === void 0 ? void 0 : _a.docs),
    source: {
      originalSource: "{\n  render: args => BoxedExpressionEditorStory(),\n  parameters: {\n    exclude: [\"dataTypes\", \"beeGwtService\", \"pmmlDocuments\"]\n  },\n  args: {\n    ...EmptyExpression.args,\n    expression: {\n      __$$element: \"conditional\",\n      \"@_id\": generateUuid(),\n      \"@_label\": \"Expression Name\",\n      if: {\n        \"@_id\": generateUuid(),\n        expression: {\n          __$$element: \"literalExpression\",\n          \"@_id\": generateUuid()\n        }\n      },\n      then: {\n        \"@_id\": generateUuid(),\n        expression: {\n          __$$element: \"literalExpression\",\n          \"@_id\": generateUuid()\n        }\n      },\n      else: {\n        \"@_id\": generateUuid(),\n        expression: {\n          __$$element: \"literalExpression\",\n          \"@_id\": generateUuid()\n        }\n      }\n    }\n  }\n}",
      ...((_c = (_b = Base.parameters) === null || _b === void 0 ? void 0 : _b.docs) === null || _c === void 0 ? void 0 : _c.source)
    }
  }
};
Readonly.parameters = {
  ...Readonly.parameters,
  docs: {
    ...((_d = Readonly.parameters) === null || _d === void 0 ? void 0 : _d.docs),
    source: {
      originalSource: "{\n  render: args => BoxedExpressionEditorStory(),\n  parameters: {\n    exclude: [\"dataTypes\", \"beeGwtService\", \"pmmlDocuments\"]\n  },\n  args: {\n    ...EmptyExpression.args,\n    expression: {\n      __$$element: \"conditional\",\n      \"@_id\": generateUuid(),\n      \"@_label\": \"Expression Name\",\n      if: {\n        \"@_id\": generateUuid(),\n        expression: {\n          __$$element: \"literalExpression\",\n          \"@_id\": generateUuid()\n        }\n      },\n      then: {\n        \"@_id\": generateUuid(),\n        expression: {\n          __$$element: \"literalExpression\",\n          \"@_id\": generateUuid()\n        }\n      },\n      else: {\n        \"@_id\": generateUuid(),\n        expression: {\n          __$$element: \"literalExpression\",\n          \"@_id\": generateUuid()\n        }\n      }\n    },\n    isReadOnly: true\n  }\n}",
      ...((_f = (_e = Readonly.parameters) === null || _e === void 0 ? void 0 : _e.docs) === null || _f === void 0 ? void 0 : _f.source)
    }
  }
};
EvaluationHits.parameters = {
  ...EvaluationHits.parameters,
  docs: {
    ...((_g = EvaluationHits.parameters) === null || _g === void 0 ? void 0 : _g.docs),
    source: {
      originalSource: "{\n  render: args => BoxedExpressionEditorStory({\n    evaluationHitsCountById: new Map([[\"_1FA12B9F-288C-42E8-B77F-BE2D3702B7B7\", 70], [\"_1FA12B9F-288C-42E8-B77F-BE2D3702B7B8\", 30], [\"_1FA12B9F-288C-42E8-B77F-BE2D3702B7B9\", 40], [\"_1FA12B9F-288C-42E8-B77F-BE2D3702B7B0\", 50], [\"_1FA12B9F-288C-42E8-B77F-BE2D3702B7B1\", 20], [\"_1FA12B9F-288C-42E8-B77F-BE2D3702B7B2\", 70], [\"_1FA12B9F-288C-42E8-B77F-BE2D3702B7B3\", 20]])\n  }),\n  parameters: {\n    exclude: [\"dataTypes\", \"beeGwtService\", \"pmmlDocuments\"]\n  },\n  args: {\n    ...EmptyExpression.args,\n    expression: {\n      __$$element: \"conditional\",\n      \"@_id\": generateUuid(),\n      \"@_label\": \"Expression Name\",\n      if: {\n        \"@_id\": generateUuid(),\n        expression: {\n          __$$element: \"literalExpression\",\n          \"@_id\": generateUuid()\n        }\n      },\n      then: {\n        \"@_id\": \"_1FA12B9F-288C-42E8-B77F-BE2D3702B7B7\",\n        expression: {\n          __$$element: \"decisionTable\",\n          \"@_id\": generateUuid(),\n          \"@_typeRef\": \"Any\",\n          \"@_hitPolicy\": \"UNIQUE\",\n          input: [{\n            \"@_id\": generateUuid(),\n            inputExpression: {\n              \"@_id\": generateUuid(),\n              text: {\n                __$$text: \"input-1\"\n              }\n            }\n          }, {\n            \"@_id\": generateUuid(),\n            inputExpression: {\n              \"@_id\": generateUuid(),\n              text: {\n                __$$text: \"input-2\"\n              }\n            }\n          }],\n          output: [{\n            \"@_id\": generateUuid(),\n            \"@_label\": \"output-1\"\n          }, {\n            \"@_id\": generateUuid(),\n            \"@_label\": \"output-2\"\n          }, {\n            \"@_id\": generateUuid(),\n            \"@_label\": \"output-3\"\n          }],\n          annotation: [{\n            \"@_name\": \"Annotations\"\n          }],\n          rule: [{\n            \"@_id\": \"_1FA12B9F-288C-42E8-B77F-BE2D3702B7B8\",\n            inputEntry: [{\n              \"@_id\": generateUuid(),\n              text: {\n                __$$text: \"E\"\n              }\n            }, {\n              \"@_id\": generateUuid(),\n              text: {\n                __$$text: \"E\"\n              }\n            }],\n            outputEntry: [{\n              \"@_id\": generateUuid(),\n              text: {\n                __$$text: \"aaa\"\n              }\n            }, {\n              \"@_id\": generateUuid(),\n              text: {\n                __$$text: \"aaa\"\n              }\n            }, {\n              \"@_id\": generateUuid(),\n              text: {\n                __$$text: \"aaa\"\n              }\n            }],\n            annotationEntry: [{\n              text: {\n                __$$text: \"// Your annotations here\"\n              }\n            }]\n          }, {\n            \"@_id\": \"_1FA12B9F-288C-42E8-B77F-BE2D3702B7B9\",\n            inputEntry: [{\n              \"@_id\": generateUuid(),\n              text: {\n                __$$text: \"E\"\n              }\n            }, {\n              \"@_id\": generateUuid(),\n              text: {\n                __$$text: \"E\"\n              }\n            }],\n            outputEntry: [{\n              \"@_id\": generateUuid(),\n              text: {\n                __$$text: \"aaa\"\n              }\n            }, {\n              \"@_id\": generateUuid(),\n              text: {\n                __$$text: \"aaa\"\n              }\n            }, {\n              \"@_id\": generateUuid(),\n              text: {\n                __$$text: \"aaa\"\n              }\n            }],\n            annotationEntry: [{\n              text: {\n                __$$text: \"// Your annotations here\"\n              }\n            }]\n          }]\n        }\n      },\n      else: {\n        \"@_id\": \"_1FA12B9F-288C-42E8-B77F-BE2D3702B7B2\",\n        expression: {\n          __$$element: \"conditional\",\n          \"@_id\": generateUuid(),\n          \"@_label\": \"Expression Name\",\n          if: {\n            \"@_id\": generateUuid(),\n            expression: {\n              __$$element: \"literalExpression\",\n              \"@_id\": generateUuid()\n            }\n          },\n          then: {\n            \"@_id\": \"_1FA12B9F-288C-42E8-B77F-BE2D3702B7B0\",\n            expression: {\n              __$$element: \"literalExpression\",\n              \"@_id\": generateUuid()\n            }\n          },\n          else: {\n            \"@_id\": \"_1FA12B9F-288C-42E8-B77F-BE2D3702B7B3\",\n            expression: {\n              __$$element: \"decisionTable\",\n              \"@_id\": generateUuid(),\n              \"@_typeRef\": \"Any\",\n              \"@_hitPolicy\": \"UNIQUE\",\n              input: [{\n                \"@_id\": generateUuid(),\n                inputExpression: {\n                  \"@_id\": generateUuid(),\n                  text: {\n                    __$$text: \"input-1\"\n                  }\n                }\n              }, {\n                \"@_id\": generateUuid(),\n                inputExpression: {\n                  \"@_id\": generateUuid(),\n                  text: {\n                    __$$text: \"input-2\"\n                  }\n                }\n              }],\n              output: [{\n                \"@_id\": generateUuid(),\n                \"@_label\": \"output-1\"\n              }, {\n                \"@_id\": generateUuid(),\n                \"@_label\": \"output-2\"\n              }, {\n                \"@_id\": generateUuid(),\n                \"@_label\": \"output-3\"\n              }],\n              annotation: [{\n                \"@_name\": \"Annotations\"\n              }],\n              rule: [{\n                \"@_id\": \"_1FA12B9F-288C-42E8-B77F-BE2D3702B7B1\",\n                inputEntry: [{\n                  \"@_id\": generateUuid(),\n                  text: {\n                    __$$text: \"E\"\n                  }\n                }, {\n                  \"@_id\": generateUuid(),\n                  text: {\n                    __$$text: \"E\"\n                  }\n                }],\n                outputEntry: [{\n                  \"@_id\": generateUuid(),\n                  text: {\n                    __$$text: \"aaa\"\n                  }\n                }, {\n                  \"@_id\": generateUuid(),\n                  text: {\n                    __$$text: \"aaa\"\n                  }\n                }, {\n                  \"@_id\": generateUuid(),\n                  text: {\n                    __$$text: \"aaa\"\n                  }\n                }],\n                annotationEntry: [{\n                  text: {\n                    __$$text: \"// Your annotations here\"\n                  }\n                }]\n              }]\n            }\n          }\n        }\n      }\n    }\n  }\n}",
      ...((_j = (_h = EvaluationHits.parameters) === null || _h === void 0 ? void 0 : _h.docs) === null || _j === void 0 ? void 0 : _j.source)
    }
  }
};
MonthlyFee.parameters = {
  ...MonthlyFee.parameters,
  docs: {
    ...((_k = MonthlyFee.parameters) === null || _k === void 0 ? void 0 : _k.docs),
    source: {
      originalSource: "{\n  render: args => BoxedExpressionEditorStory(),\n  parameters: {\n    exclude: [\"dataTypes\", \"beeGwtService\", \"pmmlDocuments\"]\n  },\n  args: {\n    ...EmptyExpression.args,\n    expression: {\n      __$$element: \"conditional\",\n      \"@_id\": \"_D98FB35A-C6A5-4BA7-AD38-176D56A31983\",\n      \"@_label\": \"MonthlyFee\",\n      \"@_typeRef\": \"number\",\n      if: {\n        \"@_id\": generateUuid(),\n        expression: {\n          __$$element: \"literalExpression\",\n          \"@_id\": generateUuid(),\n          text: {\n            __$$text: 'ProductType = \"STANDARD LOAN\"'\n          }\n        }\n      },\n      then: {\n        \"@_id\": generateUuid(),\n        expression: {\n          __$$element: \"literalExpression\",\n          \"@_id\": generateUuid(),\n          text: {\n            __$$text: \"20\"\n          }\n        }\n      },\n      else: {\n        \"@_id\": generateUuid(),\n        expression: {\n          __$$element: \"conditional\",\n          \"@_id\": generateUuid(),\n          if: {\n            \"@_id\": generateUuid(),\n            expression: {\n              __$$element: \"literalExpression\",\n              \"@_id\": \"_D98FB35A-C6A5-4BA7-AD38-176D56A31983\",\n              text: {\n                __$$text: 'ProductType = \"SPECIAL OFFERING\"'\n              }\n            }\n          },\n          then: {\n            \"@_id\": generateUuid(),\n            expression: {\n              __$$element: \"literalExpression\",\n              \"@_id\": generateUuid(),\n              text: {\n                __$$text: \"25\"\n              }\n            }\n          },\n          else: {\n            \"@_id\": generateUuid(),\n            expression: {\n              __$$element: \"literalExpression\",\n              \"@_id\": generateUuid(),\n              text: {\n                __$$text: \"null\"\n              }\n            }\n          }\n        }\n      }\n    },\n    widthsById: {\n      \"_D98FB35A-C6A5-4BA7-AD38-176D56A31983\": [300]\n    }\n  }\n}",
      ...((_m = (_l = MonthlyFee.parameters) === null || _l === void 0 ? void 0 : _l.docs) === null || _m === void 0 ? void 0 : _m.source)
    }
  }
};
Nested.parameters = {
  ...Nested.parameters,
  docs: {
    ...((_o = Nested.parameters) === null || _o === void 0 ? void 0 : _o.docs),
    source: {
      originalSource: "{\n  render: args => BoxedExpressionEditorStory(),\n  parameters: {\n    exclude: [\"dataTypes\", \"beeGwtService\", \"pmmlDocuments\"]\n  },\n  args: {\n    ...EmptyExpression.args,\n    expression: {\n      __$$element: \"context\",\n      \"@_id\": generateUuid(),\n      \"@_label\": \"Expression Name\",\n      contextEntry: [{\n        \"@_id\": generateUuid(),\n        variable: {\n          \"@_id\": generateUuid(),\n          \"@_name\": \"ContextEntry-1\"\n        },\n        expression: {\n          __$$element: \"conditional\",\n          \"@_id\": generateUuid(),\n          \"@_label\": \"Expression Name\",\n          if: {\n            \"@_id\": generateUuid(),\n            expression: {\n              __$$element: \"literalExpression\",\n              \"@_id\": generateUuid()\n            }\n          },\n          then: {\n            \"@_id\": generateUuid(),\n            expression: {\n              __$$element: \"literalExpression\",\n              \"@_id\": generateUuid()\n            }\n          },\n          else: {\n            \"@_id\": generateUuid(),\n            expression: {\n              __$$element: \"literalExpression\",\n              \"@_id\": generateUuid()\n            }\n          }\n        }\n      }]\n    }\n  }\n}",
      ...((_q = (_p = Nested.parameters) === null || _p === void 0 ? void 0 : _p.docs) === null || _q === void 0 ? void 0 : _q.source)
    }
  }
};
const __namedExportsOrder = ["Base", "Readonly", "EvaluationHits", "MonthlyFee", "Nested"];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm94ZWRFeHByZXNzaW9ucy1Db25kaXRpb25hbC1Db25kaXRpb25hbC1zdG9yaWVzLjUxY2YwMmE2LmlmcmFtZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0J1RztBQUNVO0FBQ2pFO0FBQ21DO0FBR25GLE1BQU1LLElBQUksR0FBcUM7RUFDN0NDLEtBQUssRUFBRSwrQkFBK0I7RUFDdENDLFNBQVMsRUFBRVAsNkVBQXFCO0VBQ2hDUSxjQUFjLEVBQUU7Q0FDakI7QUFDRCxpRUFBZUgsSUFBSSxFQUFDO0FBSWIsTUFBTUYsSUFBSSxHQUFVO0VBQ3pCTSxNQUFNLEVBQUVDLElBQUksSUFBSVQsMEZBQTBCLEVBQUU7RUFDNUNVLFVBQVUsRUFBRTtJQUNWQyxPQUFPLEVBQUUsQ0FBQyxXQUFXLEVBQUUsZUFBZSxFQUFFLGVBQWU7R0FDeEQ7RUFDREYsSUFBSSxFQUFFO0lBQ0osR0FBR04scUVBQWUsQ0FBQ00sSUFBSTtJQUN2QkcsVUFBVSxFQUFFO01BQ1ZDLFdBQVcsRUFBRSxhQUFhO01BQzFCLE1BQU0sRUFBRVosc0RBQVksRUFBRTtNQUN0QixTQUFTLEVBQUUsaUJBQWlCO01BQzVCYSxFQUFFLEVBQUU7UUFDRixNQUFNLEVBQUViLHNEQUFZLEVBQUU7UUFDdEJXLFVBQVUsRUFBRTtVQUNWQyxXQUFXLEVBQUUsbUJBQW1CO1VBQ2hDLE1BQU0sRUFBRVosc0RBQVk7O09BRXZCO01BQ0RjLElBQUksRUFBRTtRQUNKLE1BQU0sRUFBRWQsc0RBQVksRUFBRTtRQUN0QlcsVUFBVSxFQUFFO1VBQ1ZDLFdBQVcsRUFBRSxtQkFBbUI7VUFDaEMsTUFBTSxFQUFFWixzREFBWTs7T0FFdkI7TUFDRGUsSUFBSSxFQUFFO1FBQ0osTUFBTSxFQUFFZixzREFBWSxFQUFFO1FBQ3RCVyxVQUFVLEVBQUU7VUFDVkMsV0FBVyxFQUFFLG1CQUFtQjtVQUNoQyxNQUFNLEVBQUVaLHNEQUFZOzs7OztDQUs3QjtBQUNNLE1BQU1nQixRQUFRLEdB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QSx1QkFBQUEsRUFBQSxDQUFFakIsSUFBSSxjQUFBZ0IsRUFBQSx1QkFBQUEsRUFBQSxDQUFFZCxNQUFNOzs7Q0FHdkM7QUFBQyxNQUFBZ0IsbUJBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwZXFHO0FBQ21EO0FBRzFKLE1BQU1uRCxJQUFJLEdBQXFDO0VBQzdDQyxLQUFLLEVBQUUsNkJBQTZCO0VBQ3BDQyxTQUFTLEVBQUVQLDZFQUFxQjtFQUNoQ1EsY0FBYyxFQUFFO0NBQ2pCO0FBQ0QsaUVBQWVILElBQUksRUFBQztBQUliLE1BQU1GLElBQUksR0FBVTtFQUN6Qk0sTUFBTSxFQUFFQyxJQUFJLElBQUlULDBGQUEwQixFQUFFO0VBQzVDUyxJQUFJLEVBQUU7SUFDSmtELGtCQUFrQixFQUFFLHVDQUF1QztJQUMzRC9DLFVBQVUsRUFBRWdELFNBQVM7SUFDckIzQixVQUFVLEVBQUUsRUFBRTtJQUNkd0IsU0FBUztJQUNURCxhQUFhO0lBQ2JFLGFBQWE7SUFDYkcsZ0NBQWdDLEVBQUU7O0NBRXJDO0FBQ0QzRCxJQUFJLENBQUNRLFVBQVUsR0FBRztFQUNoQixHQUFHUixJQUFJLENBQUNRLFVBQVU7RUFDbEIyQixJQUFJLEVBQUU7SUFDSixJQUFHLENBQUFDLEVBQUEsR0FBQXBDLElBQUksQ0FBQ1EsVUFBVSxjQUFBNEIsRUFBQSx1QkFBQUEsRUFBQSxDQUFFRCxJQUFJO0lBQ3hCRSxNQUFNLEVBQUU7TUFDTkMsY0FBYyxFQUFFLGdTQUFnUztNQUNoVCxJQUFHLENBQUFDLEVBQUEsSUFBQUMsRUFBQSxHQUFBeEMsSUFBSSxDQUFDUSxVQUFVLGNBQUFnQyxFQUFBLHVCQUFBQSxFQUFBLENBQUVMLElBQUksY0FBQUksRUFBQSx1QkFBQUEsRUFBQSxDQUFFRixNQUFNOzs7Q0FHckM7QUFBQyxNQUFBZ0IsbUJBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Aa2llLXRvb2xzL2JveGVkLWV4cHJlc3Npb24tY29tcG9uZW50Ly4vc3Rvcmllcy9ib3hlZEV4cHJlc3Npb25zL0NvbmRpdGlvbmFsL0NvbmRpdGlvbmFsLnN0b3JpZXMudHN4Iiwid2VicGFjazovL0BraWUtdG9vbHMvYm94ZWQtZXhwcmVzc2lvbi1jb21wb25lbnQvLi9zdG9yaWVzL21pc2MvRW1wdHkvRW1wdHlFeHByZXNzaW9uLnN0b3JpZXMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBMaWNlbnNlZCB0byB0aGUgQXBhY2hlIFNvZnR3YXJlIEZvdW5kYXRpb24gKEFTRikgdW5kZXIgb25lXG4gKiBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gIFNlZSB0aGUgTk9USUNFIGZpbGVcbiAqIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uXG4gKiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC4gIFRoZSBBU0YgbGljZW5zZXMgdGhpcyBmaWxlXG4gKiB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlXG4gKiBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2VcbiAqIHdpdGggdGhlIExpY2Vuc2UuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLFxuICogc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cbiAqIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXG4gKiBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGVcbiAqIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnNcbiAqIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IE1ldGEsIFN0b3J5T2JqIH0gZnJvbSBcIkBzdG9yeWJvb2svcmVhY3RcIjtcbmltcG9ydCB7IEJveGVkRXhwcmVzc2lvbkVkaXRvciwgQm94ZWRFeHByZXNzaW9uRWRpdG9yUHJvcHMgfSBmcm9tIFwiLi4vLi4vLi4vc3JjL0JveGVkRXhwcmVzc2lvbkVkaXRvclwiO1xuaW1wb3J0IHsgQm94ZWRFeHByZXNzaW9uRWRpdG9yU3RvcnksIEJveGVkRXhwcmVzc2lvbkVkaXRvclN0b3J5QXJncyB9IGZyb20gXCIuLi8uLi9ib3hlZEV4cHJlc3Npb25TdG9yaWVzV3JhcHBlclwiO1xuaW1wb3J0IHsgZ2VuZXJhdGVVdWlkIH0gZnJvbSBcIi4uLy4uLy4uL3NyYy9hcGlcIjtcbmltcG9ydCB7IEJhc2UgYXMgRW1wdHlFeHByZXNzaW9uIH0gZnJvbSBcIi4uLy4uL21pc2MvRW1wdHkvRW1wdHlFeHByZXNzaW9uLnN0b3JpZXNcIjtcblxuLy8gTW9yZSBvbiBob3cgdG8gc2V0IHVwIHN0b3JpZXMgYXQ6IGh0dHBzOi8vc3Rvcnlib29rLmpzLm9yZy9kb2NzL3JlYWN0L3dyaXRpbmctc3Rvcmllcy9pbnRyb2R1Y3Rpb24jZGVmYXVsdC1leHBvcnRcbmNvbnN0IG1ldGE6IE1ldGE8Qm94ZWRFeHByZXNzaW9uRWRpdG9yUHJvcHM+ID0ge1xuICB0aXRsZTogXCJCb3hlZCBFeHByZXNzaW9ucy9Db25kaXRpb25hbFwiLFxuICBjb21wb25lbnQ6IEJveGVkRXhwcmVzc2lvbkVkaXRvcixcbiAgaW5jbHVkZVN0b3JpZXM6IC9eW0EtWl0vXG59O1xuZXhwb3J0IGRlZmF1bHQgbWV0YTtcbnR5cGUgU3RvcnkgPSBTdG9yeU9iajxCb3hlZEV4cHJlc3Npb25FZGl0b3JTdG9yeUFyZ3M+O1xuXG4vLyBNb3JlIG9uIHdyaXRpbmcgc3RvcmllcyB3aXRoIGFyZ3M6IGh0dHBzOi8vc3Rvcnlib29rLmpzLm9yZy9kb2NzL3JlYWN0L3dyaXRpbmctc3Rvcmllcy9hcmdzXG5leHBvcnQgY29uc3QgQmFzZTogU3RvcnkgPSB7XG4gIHJlbmRlcjogYXJncyA9PiBCb3hlZEV4cHJlc3Npb25FZGl0b3JTdG9yeSgpLFxuICBwYXJhbWV0ZXJzOiB7XG4gICAgZXhjbHVkZTogW1wiZGF0YVR5cGVzXCIsIFwiYmVlR3d0U2VydmljZVwiLCBcInBtbWxEb2N1bWVudHNcIl1cbiAgfSxcbiAgYXJnczoge1xuICAgIC4uLkVtcHR5RXhwcmVzc2lvbi5hcmdzLFxuICAgIGV4cHJlc3Npb246IHtcbiAgICAgIF9fJCRlbGVtZW50OiBcImNvbmRpdGlvbmFsXCIsXG4gICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICBcIkBfbGFiZWxcIjogXCJFeHByZXNzaW9uIE5hbWVcIixcbiAgICAgIGlmOiB7XG4gICAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICAgICAgZXhwcmVzc2lvbjoge1xuICAgICAgICAgIF9fJCRlbGVtZW50OiBcImxpdGVyYWxFeHByZXNzaW9uXCIsXG4gICAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB0aGVuOiB7XG4gICAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICAgICAgZXhwcmVzc2lvbjoge1xuICAgICAgICAgIF9fJCRlbGVtZW50OiBcImxpdGVyYWxFeHByZXNzaW9uXCIsXG4gICAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBlbHNlOiB7XG4gICAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICAgICAgZXhwcmVzc2lvbjoge1xuICAgICAgICAgIF9fJCRlbGVtZW50OiBcImxpdGVyYWxFeHByZXNzaW9uXCIsXG4gICAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5leHBvcnQgY29uc3QgUmVhZG9ubHk6IFN0b3J5ID0ge1xuICByZW5kZXI6IGFyZ3MgPT4gQm94ZWRFeHByZXNzaW9uRWRpdG9yU3RvcnkoKSxcbiAgcGFyYW1ldGVyczoge1xuICAgIGV4Y2x1ZGU6IFtcImRhdGFUeXBlc1wiLCBcImJlZUd3dFNlcnZpY2VcIiwgXCJwbW1sRG9jdW1lbnRzXCJdXG4gIH0sXG4gIGFyZ3M6IHtcbiAgICAuLi5FbXB0eUV4cHJlc3Npb24uYXJncyxcbiAgICBleHByZXNzaW9uOiB7XG4gICAgICBfXyQkZWxlbWVudDogXCJjb25kaXRpb25hbFwiLFxuICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgXCJAX2xhYmVsXCI6IFwiRXhwcmVzc2lvbiBOYW1lXCIsXG4gICAgICBpZjoge1xuICAgICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICAgIGV4cHJlc3Npb246IHtcbiAgICAgICAgICBfXyQkZWxlbWVudDogXCJsaXRlcmFsRXhwcmVzc2lvblwiLFxuICAgICAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgdGhlbjoge1xuICAgICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICAgIGV4cHJlc3Npb246IHtcbiAgICAgICAgICBfXyQkZWxlbWVudDogXCJsaXRlcmFsRXhwcmVzc2lvblwiLFxuICAgICAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZWxzZToge1xuICAgICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICAgIGV4cHJlc3Npb246IHtcbiAgICAgICAgICBfXyQkZWxlbWVudDogXCJsaXRlcmFsRXhwcmVzc2lvblwiLFxuICAgICAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBpc1JlYWRPbmx5OiB0cnVlXG4gIH1cbn07XG5leHBvcnQgY29uc3QgRXZhbHVhdGlvbkhpdHM6IFN0b3J5ID0ge1xuICByZW5kZXI6IGFyZ3MgPT4gQm94ZWRFeHByZXNzaW9uRWRpdG9yU3Rvcnkoe1xuICAgIGV2YWx1YXRpb25IaXRzQ291bnRCeUlkOiBuZXcgTWFwKFtbXCJfMUZBMTJCOUYtMjg4Qy00MkU4LUI3N0YtQkUyRDM3MDJCN0I3XCIsIDcwXSwgW1wiXzFGQTEyQjlGLTI4OEMtNDJFOC1CNzdGLUJFMkQzNzAyQjdCOFwiLCAzMF0sIFtcIl8xRkExMkI5Ri0yODhDLTQyRTgtQjc3Ri1CRTJEMzcwMkI3QjlcIiwgNDBdLCBbXCJfMUZBMTJCOUYtMjg4Qy00MkU4LUI3N0YtQkUyRDM3MDJCN0IwXCIsIDUwXSwgW1wiXzFGQTEyQjlGLTI4OEMtNDJFOC1CNzdGLUJFMkQzNzAyQjdCMVwiLCAyMF0sIFtcIl8xRkExMkI5Ri0yODhDLTQyRTgtQjc3Ri1CRTJEMzcwMkI3QjJcIiwgNzBdLCBbXCJfMUZBMTJCOUYtMjg4Qy00MkU4LUI3N0YtQkUyRDM3MDJCN0IzXCIsIDIwXV0pXG4gIH0pLFxuICBwYXJhbWV0ZXJzOiB7XG4gICAgZXhjbHVkZTogW1wiZGF0YVR5cGVzXCIsIFwiYmVlR3d0U2VydmljZVwiLCBcInBtbWxEb2N1bWVudHNcIl1cbiAgfSxcbiAgYXJnczoge1xuICAgIC4uLkVtcHR5RXhwcmVzc2lvbi5hcmdzLFxuICAgIGV4cHJlc3Npb246IHtcbiAgICAgIF9fJCRlbGVtZW50OiBcImNvbmRpdGlvbmFsXCIsXG4gICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICBcIkBfbGFiZWxcIjogXCJFeHByZXNzaW9uIE5hbWVcIixcbiAgICAgIGlmOiB7XG4gICAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICAgICAgZXhwcmVzc2lvbjoge1xuICAgICAgICAgIF9fJCRlbGVtZW50OiBcImxpdGVyYWxFeHByZXNzaW9uXCIsXG4gICAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB0aGVuOiB7XG4gICAgICAgIFwiQF9pZFwiOiBcIl8xRkExMkI5Ri0yODhDLTQyRTgtQjc3Ri1CRTJEMzcwMkI3QjdcIixcbiAgICAgICAgZXhwcmVzc2lvbjoge1xuICAgICAgICAgIF9fJCRlbGVtZW50OiBcImRlY2lzaW9uVGFibGVcIixcbiAgICAgICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICAgICAgXCJAX3R5cGVSZWZcIjogXCJBbnlcIixcbiAgICAgICAgICBcIkBfaGl0UG9saWN5XCI6IFwiVU5JUVVFXCIsXG4gICAgICAgICAgaW5wdXQ6IFt7XG4gICAgICAgICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICAgICAgICBpbnB1dEV4cHJlc3Npb246IHtcbiAgICAgICAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgICAgICAgICB0ZXh0OiB7XG4gICAgICAgICAgICAgICAgX18kJHRleHQ6IFwiaW5wdXQtMVwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICAgICAgICBpbnB1dEV4cHJlc3Npb246IHtcbiAgICAgICAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgICAgICAgICB0ZXh0OiB7XG4gICAgICAgICAgICAgICAgX18kJHRleHQ6IFwiaW5wdXQtMlwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XSxcbiAgICAgICAgICBvdXRwdXQ6IFt7XG4gICAgICAgICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICAgICAgICBcIkBfbGFiZWxcIjogXCJvdXRwdXQtMVwiXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgICAgICAgXCJAX2xhYmVsXCI6IFwib3V0cHV0LTJcIlxuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICAgICAgICAgIFwiQF9sYWJlbFwiOiBcIm91dHB1dC0zXCJcbiAgICAgICAgICB9XSxcbiAgICAgICAgICBhbm5vdGF0aW9uOiBbe1xuICAgICAgICAgICAgXCJAX25hbWVcIjogXCJBbm5vdGF0aW9uc1wiXG4gICAgICAgICAgfV0sXG4gICAgICAgICAgcnVsZTogW3tcbiAgICAgICAgICAgIFwiQF9pZFwiOiBcIl8xRkExMkI5Ri0yODhDLTQyRTgtQjc3Ri1CRTJEMzcwMkI3QjhcIixcbiAgICAgICAgICAgIGlucHV0RW50cnk6IFt7XG4gICAgICAgICAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICAgICAgICAgICAgdGV4dDoge1xuICAgICAgICAgICAgICAgIF9fJCR0ZXh0OiBcIkVcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICAgICAgICAgICAgdGV4dDoge1xuICAgICAgICAgICAgICAgIF9fJCR0ZXh0OiBcIkVcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XSxcbiAgICAgICAgICAgIG91dHB1dEVudHJ5OiBbe1xuICAgICAgICAgICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICAgICAgICAgIHRleHQ6IHtcbiAgICAgICAgICAgICAgICBfXyQkdGV4dDogXCJhYWFcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICAgICAgICAgICAgdGV4dDoge1xuICAgICAgICAgICAgICAgIF9fJCR0ZXh0OiBcImFhYVwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgICAgICAgICB0ZXh0OiB7XG4gICAgICAgICAgICAgICAgX18kJHRleHQ6IFwiYWFhXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICBhbm5vdGF0aW9uRW50cnk6IFt7XG4gICAgICAgICAgICAgIHRleHQ6IHtcbiAgICAgICAgICAgICAgICBfXyQkdGV4dDogXCIvLyBZb3VyIGFubm90YXRpb25zIGhlcmVcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XVxuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIFwiQF9pZFwiOiBcIl8xRkExMkI5Ri0yODhDLTQyRTgtQjc3Ri1CRTJEMzcwMkI3QjlcIixcbiAgICAgICAgICAgIGlucHV0RW50cnk6IFt7XG4gICAgICAgICAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICAgICAgICAgICAgdGV4dDoge1xuICAgICAgICAgICAgICAgIF9fJCR0ZXh0OiBcIkVcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICAgICAgICAgICAgdGV4dDoge1xuICAgICAgICAgICAgICAgIF9fJCR0ZXh0OiBcIkVcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XSxcbiAgICAgICAgICAgIG91dHB1dEVudHJ5OiBbe1xuICAgICAgICAgICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICAgICAgICAgIHRleHQ6IHtcbiAgICAgICAgICAgICAgICBfXyQkdGV4dDogXCJhYWFcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICAgICAgICAgICAgdGV4dDoge1xuICAgICAgICAgICAgICAgIF9fJCR0ZXh0OiBcImFhYVwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgICAgICAgICB0ZXh0OiB7XG4gICAgICAgICAgICAgICAgX18kJHRleHQ6IFwiYWFhXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICBhbm5vdGF0aW9uRW50cnk6IFt7XG4gICAgICAgICAgICAgIHRleHQ6IHtcbiAgICAgICAgICAgICAgICBfXyQkdGV4dDogXCIvLyBZb3VyIGFubm90YXRpb25zIGhlcmVcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XVxuICAgICAgICAgIH1dXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBlbHNlOiB7XG4gICAgICAgIFwiQF9pZFwiOiBcIl8xRkExMkI5Ri0yODhDLTQyRTgtQjc3Ri1CRTJEMzcwMkI3QjJcIixcbiAgICAgICAgZXhwcmVzc2lvbjoge1xuICAgICAgICAgIF9fJCRlbGVtZW50OiBcImNvbmRpdGlvbmFsXCIsXG4gICAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgICAgIFwiQF9sYWJlbFwiOiBcIkV4cHJlc3Npb24gTmFtZVwiLFxuICAgICAgICAgIGlmOiB7XG4gICAgICAgICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICAgICAgICBleHByZXNzaW9uOiB7XG4gICAgICAgICAgICAgIF9fJCRlbGVtZW50OiBcImxpdGVyYWxFeHByZXNzaW9uXCIsXG4gICAgICAgICAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgdGhlbjoge1xuICAgICAgICAgICAgXCJAX2lkXCI6IFwiXzFGQTEyQjlGLTI4OEMtNDJFOC1CNzdGLUJFMkQzNzAyQjdCMFwiLFxuICAgICAgICAgICAgZXhwcmVzc2lvbjoge1xuICAgICAgICAgICAgICBfXyQkZWxlbWVudDogXCJsaXRlcmFsRXhwcmVzc2lvblwiLFxuICAgICAgICAgICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIGVsc2U6IHtcbiAgICAgICAgICAgIFwiQF9pZFwiOiBcIl8xRkExMkI5Ri0yODhDLTQyRTgtQjc3Ri1CRTJEMzcwMkI3QjNcIixcbiAgICAgICAgICAgIGV4cHJlc3Npb246IHtcbiAgICAgICAgICAgICAgX18kJGVsZW1lbnQ6IFwiZGVjaXNpb25UYWJsZVwiLFxuICAgICAgICAgICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICAgICAgICAgIFwiQF90eXBlUmVmXCI6IFwiQW55XCIsXG4gICAgICAgICAgICAgIFwiQF9oaXRQb2xpY3lcIjogXCJVTklRVUVcIixcbiAgICAgICAgICAgICAgaW5wdXQ6IFt7XG4gICAgICAgICAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgICAgICAgICAgIGlucHV0RXhwcmVzc2lvbjoge1xuICAgICAgICAgICAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgICAgICAgICAgICAgdGV4dDoge1xuICAgICAgICAgICAgICAgICAgICBfXyQkdGV4dDogXCJpbnB1dC0xXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICAgICAgICAgICAgaW5wdXRFeHByZXNzaW9uOiB7XG4gICAgICAgICAgICAgICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICAgICAgICAgICAgICB0ZXh0OiB7XG4gICAgICAgICAgICAgICAgICAgIF9fJCR0ZXh0OiBcImlucHV0LTJcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICAgIG91dHB1dDogW3tcbiAgICAgICAgICAgICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICAgICAgICAgICAgXCJAX2xhYmVsXCI6IFwib3V0cHV0LTFcIlxuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgICAgICAgICAgIFwiQF9sYWJlbFwiOiBcIm91dHB1dC0yXCJcbiAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICAgICAgICAgICAgICBcIkBfbGFiZWxcIjogXCJvdXRwdXQtM1wiXG4gICAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgICBhbm5vdGF0aW9uOiBbe1xuICAgICAgICAgICAgICAgIFwiQF9uYW1lXCI6IFwiQW5ub3RhdGlvbnNcIlxuICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgICAgcnVsZTogW3tcbiAgICAgICAgICAgICAgICBcIkBfaWRcIjogXCJfMUZBMTJCOUYtMjg4Qy00MkU4LUI3N0YtQkUyRDM3MDJCN0IxXCIsXG4gICAgICAgICAgICAgICAgaW5wdXRFbnRyeTogW3tcbiAgICAgICAgICAgICAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICAgICAgICAgICAgICAgIHRleHQ6IHtcbiAgICAgICAgICAgICAgICAgICAgX18kJHRleHQ6IFwiRVwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgICAgICAgICAgICAgdGV4dDoge1xuICAgICAgICAgICAgICAgICAgICBfXyQkdGV4dDogXCJFXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgICAgICBvdXRwdXRFbnRyeTogW3tcbiAgICAgICAgICAgICAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICAgICAgICAgICAgICAgIHRleHQ6IHtcbiAgICAgICAgICAgICAgICAgICAgX18kJHRleHQ6IFwiYWFhXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICAgICAgICAgICAgICB0ZXh0OiB7XG4gICAgICAgICAgICAgICAgICAgIF9fJCR0ZXh0OiBcImFhYVwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgICAgICAgICAgICAgdGV4dDoge1xuICAgICAgICAgICAgICAgICAgICBfXyQkdGV4dDogXCJhYWFcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgICAgIGFubm90YXRpb25FbnRyeTogW3tcbiAgICAgICAgICAgICAgICAgIHRleHQ6IHtcbiAgICAgICAgICAgICAgICAgICAgX18kJHRleHQ6IFwiLy8gWW91ciBhbm5vdGF0aW9ucyBoZXJlXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufTtcbmV4cG9ydCBjb25zdCBNb250aGx5RmVlOiBTdG9yeSA9IHtcbiAgcmVuZGVyOiBhcmdzID0+IEJveGVkRXhwcmVzc2lvbkVkaXRvclN0b3J5KCksXG4gIHBhcmFtZXRlcnM6IHtcbiAgICBleGNsdWRlOiBbXCJkYXRhVHlwZXNcIiwgXCJiZWVHd3RTZXJ2aWNlXCIsIFwicG1tbERvY3VtZW50c1wiXVxuICB9LFxuICBhcmdzOiB7XG4gICAgLi4uRW1wdHlFeHByZXNzaW9uLmFyZ3MsXG4gICAgZXhwcmVzc2lvbjoge1xuICAgICAgX18kJGVsZW1lbnQ6IFwiY29uZGl0aW9uYWxcIixcbiAgICAgIFwiQF9pZFwiOiBcIl9EOThGQjM1QS1DNkE1LTRCQTctQUQzOC0xNzZENTZBMzE5ODNcIixcbiAgICAgIFwiQF9sYWJlbFwiOiBcIk1vbnRobHlGZWVcIixcbiAgICAgIFwiQF90eXBlUmVmXCI6IFwibnVtYmVyXCIsXG4gICAgICBpZjoge1xuICAgICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICAgIGV4cHJlc3Npb246IHtcbiAgICAgICAgICBfXyQkZWxlbWVudDogXCJsaXRlcmFsRXhwcmVzc2lvblwiLFxuICAgICAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICAgICAgICB0ZXh0OiB7XG4gICAgICAgICAgICBfXyQkdGV4dDogJ1Byb2R1Y3RUeXBlID0gXCJTVEFOREFSRCBMT0FOXCInXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgdGhlbjoge1xuICAgICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICAgIGV4cHJlc3Npb246IHtcbiAgICAgICAgICBfXyQkZWxlbWVudDogXCJsaXRlcmFsRXhwcmVzc2lvblwiLFxuICAgICAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICAgICAgICB0ZXh0OiB7XG4gICAgICAgICAgICBfXyQkdGV4dDogXCIyMFwiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZWxzZToge1xuICAgICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICAgIGV4cHJlc3Npb246IHtcbiAgICAgICAgICBfXyQkZWxlbWVudDogXCJjb25kaXRpb25hbFwiLFxuICAgICAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICAgICAgICBpZjoge1xuICAgICAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgICAgICAgZXhwcmVzc2lvbjoge1xuICAgICAgICAgICAgICBfXyQkZWxlbWVudDogXCJsaXRlcmFsRXhwcmVzc2lvblwiLFxuICAgICAgICAgICAgICBcIkBfaWRcIjogXCJfRDk4RkIzNUEtQzZBNS00QkE3LUFEMzgtMTc2RDU2QTMxOTgzXCIsXG4gICAgICAgICAgICAgIHRleHQ6IHtcbiAgICAgICAgICAgICAgICBfXyQkdGV4dDogJ1Byb2R1Y3RUeXBlID0gXCJTUEVDSUFMIE9GRkVSSU5HXCInXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHRoZW46IHtcbiAgICAgICAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IHtcbiAgICAgICAgICAgICAgX18kJGVsZW1lbnQ6IFwibGl0ZXJhbEV4cHJlc3Npb25cIixcbiAgICAgICAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgICAgICAgICB0ZXh0OiB7XG4gICAgICAgICAgICAgICAgX18kJHRleHQ6IFwiMjVcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBlbHNlOiB7XG4gICAgICAgICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICAgICAgICBleHByZXNzaW9uOiB7XG4gICAgICAgICAgICAgIF9fJCRlbGVtZW50OiBcImxpdGVyYWxFeHByZXNzaW9uXCIsXG4gICAgICAgICAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICAgICAgICAgICAgdGV4dDoge1xuICAgICAgICAgICAgICAgIF9fJCR0ZXh0OiBcIm51bGxcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICB3aWR0aHNCeUlkOiB7XG4gICAgICBcIl9EOThGQjM1QS1DNkE1LTRCQTctQUQzOC0xNzZENTZBMzE5ODNcIjogWzMwMF1cbiAgICB9XG4gIH1cbn07XG5leHBvcnQgY29uc3QgTmVzdGVkOiBTdG9yeSA9IHtcbiAgcmVuZGVyOiBhcmdzID0+IEJveGVkRXhwcmVzc2lvbkVkaXRvclN0b3J5KCksXG4gIHBhcmFtZXRlcnM6IHtcbiAgICBleGNsdWRlOiBbXCJkYXRhVHlwZXNcIiwgXCJiZWVHd3RTZXJ2aWNlXCIsIFwicG1tbERvY3VtZW50c1wiXVxuICB9LFxuICBhcmdzOiB7XG4gICAgLi4uRW1wdHlFeHByZXNzaW9uLmFyZ3MsXG4gICAgZXhwcmVzc2lvbjoge1xuICAgICAgX18kJGVsZW1lbnQ6IFwiY29udGV4dFwiLFxuICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgXCJAX2xhYmVsXCI6IFwiRXhwcmVzc2lvbiBOYW1lXCIsXG4gICAgICBjb250ZXh0RW50cnk6IFt7XG4gICAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICAgICAgdmFyaWFibGU6IHtcbiAgICAgICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICAgICAgXCJAX25hbWVcIjogXCJDb250ZXh0RW50cnktMVwiXG4gICAgICAgIH0sXG4gICAgICAgIGV4cHJlc3Npb246IHtcbiAgICAgICAgICBfXyQkZWxlbWVudDogXCJjb25kaXRpb25hbFwiLFxuICAgICAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICAgICAgICBcIkBfbGFiZWxcIjogXCJFeHByZXNzaW9uIE5hbWVcIixcbiAgICAgICAgICBpZjoge1xuICAgICAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgICAgICAgZXhwcmVzc2lvbjoge1xuICAgICAgICAgICAgICBfXyQkZWxlbWVudDogXCJsaXRlcmFsRXhwcmVzc2lvblwiLFxuICAgICAgICAgICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHRoZW46IHtcbiAgICAgICAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IHtcbiAgICAgICAgICAgICAgX18kJGVsZW1lbnQ6IFwibGl0ZXJhbEV4cHJlc3Npb25cIixcbiAgICAgICAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBlbHNlOiB7XG4gICAgICAgICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICAgICAgICBleHByZXNzaW9uOiB7XG4gICAgICAgICAgICAgIF9fJCRlbGVtZW50OiBcImxpdGVyYWxFeHByZXNzaW9uXCIsXG4gICAgICAgICAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfV1cbiAgICB9XG4gIH1cbn07XG5CYXNlLnBhcmFtZXRlcnMgPSB7XG4gIC4uLkJhc2UucGFyYW1ldGVycyxcbiAgZG9jczoge1xuICAgIC4uLkJhc2UucGFyYW1ldGVycz8uZG9jcyxcbiAgICBzb3VyY2U6IHtcbiAgICAgIG9yaWdpbmFsU291cmNlOiBcIntcXG4gIHJlbmRlcjogYXJncyA9PiBCb3hlZEV4cHJlc3Npb25FZGl0b3JTdG9yeSgpLFxcbiAgcGFyYW1ldGVyczoge1xcbiAgICBleGNsdWRlOiBbXFxcImRhdGFUeXBlc1xcXCIsIFxcXCJiZWVHd3RTZXJ2aWNlXFxcIiwgXFxcInBtbWxEb2N1bWVudHNcXFwiXVxcbiAgfSxcXG4gIGFyZ3M6IHtcXG4gICAgLi4uRW1wdHlFeHByZXNzaW9uLmFyZ3MsXFxuICAgIGV4cHJlc3Npb246IHtcXG4gICAgICBfXyQkZWxlbWVudDogXFxcImNvbmRpdGlvbmFsXFxcIixcXG4gICAgICBcXFwiQF9pZFxcXCI6IGdlbmVyYXRlVXVpZCgpLFxcbiAgICAgIFxcXCJAX2xhYmVsXFxcIjogXFxcIkV4cHJlc3Npb24gTmFtZVxcXCIsXFxuICAgICAgaWY6IHtcXG4gICAgICAgIFxcXCJAX2lkXFxcIjogZ2VuZXJhdGVVdWlkKCksXFxuICAgICAgICBleHByZXNzaW9uOiB7XFxuICAgICAgICAgIF9fJCRlbGVtZW50OiBcXFwibGl0ZXJhbEV4cHJlc3Npb25cXFwiLFxcbiAgICAgICAgICBcXFwiQF9pZFxcXCI6IGdlbmVyYXRlVXVpZCgpXFxuICAgICAgICB9XFxuICAgICAgfSxcXG4gICAgICB0aGVuOiB7XFxuICAgICAgICBcXFwiQF9pZFxcXCI6IGdlbmVyYXRlVXVpZCgpLFxcbiAgICAgICAgZXhwcmVzc2lvbjoge1xcbiAgICAgICAgICBfXyQkZWxlbWVudDogXFxcImxpdGVyYWxFeHByZXNzaW9uXFxcIixcXG4gICAgICAgICAgXFxcIkBfaWRcXFwiOiBnZW5lcmF0ZVV1aWQoKVxcbiAgICAgICAgfVxcbiAgICAgIH0sXFxuICAgICAgZWxzZToge1xcbiAgICAgICAgXFxcIkBfaWRcXFwiOiBnZW5lcmF0ZVV1aWQoKSxcXG4gICAgICAgIGV4cHJlc3Npb246IHtcXG4gICAgICAgICAgX18kJGVsZW1lbnQ6IFxcXCJsaXRlcmFsRXhwcmVzc2lvblxcXCIsXFxuICAgICAgICAgIFxcXCJAX2lkXFxcIjogZ2VuZXJhdGVVdWlkKClcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XCIsXG4gICAgICAuLi5CYXNlLnBhcmFtZXRlcnM/LmRvY3M/LnNvdXJjZVxuICAgIH1cbiAgfVxufTtcblJlYWRvbmx5LnBhcmFtZXRlcnMgPSB7XG4gIC4uLlJlYWRvbmx5LnBhcmFtZXRlcnMsXG4gIGRvY3M6IHtcbiAgICAuLi5SZWFkb25seS5wYXJhbWV0ZXJzPy5kb2NzLFxuICAgIHNvdXJjZToge1xuICAgICAgb3JpZ2luYWxTb3VyY2U6IFwie1xcbiAgcmVuZGVyOiBhcmdzID0+IEJveGVkRXhwcmVzc2lvbkVkaXRvclN0b3J5KCksXFxuICBwYXJhbWV0ZXJzOiB7XFxuICAgIGV4Y2x1ZGU6IFtcXFwiZGF0YVR5cGVzXFxcIiwgXFxcImJlZUd3dFNlcnZpY2VcXFwiLCBcXFwicG1tbERvY3VtZW50c1xcXCJdXFxuICB9LFxcbiAgYXJnczoge1xcbiAgICAuLi5FbXB0eUV4cHJlc3Npb24uYXJncyxcXG4gICAgZXhwcmVzc2lvbjoge1xcbiAgICAgIF9fJCRlbGVtZW50OiBcXFwiY29uZGl0aW9uYWxcXFwiLFxcbiAgICAgIFxcXCJAX2lkXFxcIjogZ2VuZXJhdGVVdWlkKCksXFxuICAgICAgXFxcIkBfbGFiZWxcXFwiOiBcXFwiRXhwcmVzc2lvbiBOYW1lXFxcIixcXG4gICAgICBpZjoge1xcbiAgICAgICAgXFxcIkBfaWRcXFwiOiBnZW5lcmF0ZVV1aWQoKSxcXG4gICAgICAgIGV4cHJlc3Npb246IHtcXG4gICAgICAgICAgX18kJGVsZW1lbnQ6IFxcXCJsaXRlcmFsRXhwcmVzc2lvblxcXCIsXFxuICAgICAgICAgIFxcXCJAX2lkXFxcIjogZ2VuZXJhdGVVdWlkKClcXG4gICAgICAgIH1cXG4gICAgICB9LFxcbiAgICAgIHRoZW46IHtcXG4gICAgICAgIFxcXCJAX2lkXFxcIjogZ2VuZXJhdGVVdWlkKCksXFxuICAgICAgICBleHByZXNzaW9uOiB7XFxuICAgICAgICAgIF9fJCRlbGVtZW50OiBcXFwibGl0ZXJhbEV4cHJlc3Npb25cXFwiLFxcbiAgICAgICAgICBcXFwiQF9pZFxcXCI6IGdlbmVyYXRlVXVpZCgpXFxuICAgICAgICB9XFxuICAgICAgfSxcXG4gICAgICBlbHNlOiB7XFxuICAgICAgICBcXFwiQF9pZFxcXCI6IGdlbmVyYXRlVXVpZCgpLFxcbiAgICAgICAgZXhwcmVzc2lvbjoge1xcbiAgICAgICAgICBfXyQkZWxlbWVudDogXFxcImxpdGVyYWxFeHByZXNzaW9uXFxcIixcXG4gICAgICAgICAgXFxcIkBfaWRcXFwiOiBnZW5lcmF0ZVV1aWQoKVxcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfSxcXG4gICAgaXNSZWFkT25seTogdHJ1ZVxcbiAgfVxcbn1cIixcbiAgICAgIC4uLlJlYWRvbmx5LnBhcmFtZXRlcnM/LmRvY3M/LnNvdXJjZVxuICAgIH1cbiAgfVxufTtcbkV2YWx1YXRpb25IaXRzLnBhcmFtZXRlcnMgPSB7XG4gIC4uLkV2YWx1YXRpb25IaXRzLnBhcmFtZXRlcnMsXG4gIGRvY3M6IHtcbiAgICAuLi5FdmFsdWF0aW9uSGl0cy5wYXJhbWV0ZXJzPy5kb2NzLFxuICAgIHNvdXJjZToge1xuICAgICAgb3JpZ2luYWxTb3VyY2U6IFwie1xcbiAgcmVuZGVyOiBhcmdzID0+IEJveGVkRXhwcmVzc2lvbkVkaXRvclN0b3J5KHtcXG4gICAgZXZhbHVhdGlvbkhpdHNDb3VudEJ5SWQ6IG5ldyBNYXAoW1tcXFwiXzFGQTEyQjlGLTI4OEMtNDJFOC1CNzdGLUJFMkQzNzAyQjdCN1xcXCIsIDcwXSwgW1xcXCJfMUZBMTJCOUYtMjg4Qy00MkU4LUI3N0YtQkUyRDM3MDJCN0I4XFxcIiwgMzBdLCBbXFxcIl8xRkExMkI5Ri0yODhDLTQyRTgtQjc3Ri1CRTJEMzcwMkI3QjlcXFwiLCA0MF0sIFtcXFwiXzFGQTEyQjlGLTI4OEMtNDJFOC1CNzdGLUJFMkQzNzAyQjdCMFxcXCIsIDUwXSwgW1xcXCJfMUZBMTJCOUYtMjg4Qy00MkU4LUI3N0YtQkUyRDM3MDJCN0IxXFxcIiwgMjBdLCBbXFxcIl8xRkExMkI5Ri0yODhDLTQyRTgtQjc3Ri1CRTJEMzcwMkI3QjJcXFwiLCA3MF0sIFtcXFwiXzFGQTEyQjlGLTI4OEMtNDJFOC1CNzdGLUJFMkQzNzAyQjdCM1xcXCIsIDIwXV0pXFxuICB9KSxcXG4gIHBhcmFtZXRlcnM6IHtcXG4gICAgZXhjbHVkZTogW1xcXCJkYXRhVHlwZXNcXFwiLCBcXFwiYmVlR3d0U2VydmljZVxcXCIsIFxcXCJwbW1sRG9jdW1lbnRzXFxcIl1cXG4gIH0sXFxuICBhcmdzOiB7XFxuICAgIC4uLkVtcHR5RXhwcmVzc2lvbi5hcmdzLFxcbiAgICBleHByZXNzaW9uOiB7XFxuICAgICAgX18kJGVsZW1lbnQ6IFxcXCJjb25kaXRpb25hbFxcXCIsXFxuICAgICAgXFxcIkBfaWRcXFwiOiBnZW5lcmF0ZVV1aWQoKSxcXG4gICAgICBcXFwiQF9sYWJlbFxcXCI6IFxcXCJFeHByZXNzaW9uIE5hbWVcXFwiLFxcbiAgICAgIGlmOiB7XFxuICAgICAgICBcXFwiQF9pZFxcXCI6IGdlbmVyYXRlVXVpZCgpLFxcbiAgICAgICAgZXhwcmVzc2lvbjoge1xcbiAgICAgICAgICBfXyQkZWxlbWVudDogXFxcImxpdGVyYWxFeHByZXNzaW9uXFxcIixcXG4gICAgICAgICAgXFxcIkBfaWRcXFwiOiBnZW5lcmF0ZVV1aWQoKVxcbiAgICAgICAgfVxcbiAgICAgIH0sXFxuICAgICAgdGhlbjoge1xcbiAgICAgICAgXFxcIkBfaWRcXFwiOiBcXFwiXzFGQTEyQjlGLTI4OEMtNDJFOC1CNzdGLUJFMkQzNzAyQjdCN1xcXCIsXFxuICAgICAgICBleHByZXNzaW9uOiB7XFxuICAgICAgICAgIF9fJCRlbGVtZW50OiBcXFwiZGVjaXNpb25UYWJsZVxcXCIsXFxuICAgICAgICAgIFxcXCJAX2lkXFxcIjogZ2VuZXJhdGVVdWlkKCksXFxuICAgICAgICAgIFxcXCJAX3R5cGVSZWZcXFwiOiBcXFwiQW55XFxcIixcXG4gICAgICAgICAgXFxcIkBfaGl0UG9saWN5XFxcIjogXFxcIlVOSVFVRVxcXCIsXFxuICAgICAgICAgIGlucHV0OiBbe1xcbiAgICAgICAgICAgIFxcXCJAX2lkXFxcIjogZ2VuZXJhdGVVdWlkKCksXFxuICAgICAgICAgICAgaW5wdXRFeHByZXNzaW9uOiB7XFxuICAgICAgICAgICAgICBcXFwiQF9pZFxcXCI6IGdlbmVyYXRlVXVpZCgpLFxcbiAgICAgICAgICAgICAgdGV4dDoge1xcbiAgICAgICAgICAgICAgICBfXyQkdGV4dDogXFxcImlucHV0LTFcXFwiXFxuICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICB9LCB7XFxuICAgICAgICAgICAgXFxcIkBfaWRcXFwiOiBnZW5lcmF0ZVV1aWQoKSxcXG4gICAgICAgICAgICBpbnB1dEV4cHJlc3Npb246IHtcXG4gICAgICAgICAgICAgIFxcXCJAX2lkXFxcIjogZ2VuZXJhdGVVdWlkKCksXFxuICAgICAgICAgICAgICB0ZXh0OiB7XFxuICAgICAgICAgICAgICAgIF9fJCR0ZXh0OiBcXFwiaW5wdXQtMlxcXCJcXG4gICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICAgIH1dLFxcbiAgICAgICAgICBvdXRwdXQ6IFt7XFxuICAgICAgICAgICAgXFxcIkBfaWRcXFwiOiBnZW5lcmF0ZVV1aWQoKSxcXG4gICAgICAgICAgICBcXFwiQF9sYWJlbFxcXCI6IFxcXCJvdXRwdXQtMVxcXCJcXG4gICAgICAgICAgfSwge1xcbiAgICAgICAgICAgIFxcXCJAX2lkXFxcIjogZ2VuZXJhdGVVdWlkKCksXFxuICAgICAgICAgICAgXFxcIkBfbGFiZWxcXFwiOiBcXFwib3V0cHV0LTJcXFwiXFxuICAgICAgICAgIH0sIHtcXG4gICAgICAgICAgICBcXFwiQF9pZFxcXCI6IGdlbmVyYXRlVXVpZCgpLFxcbiAgICAgICAgICAgIFxcXCJAX2xhYmVsXFxcIjogXFxcIm91dHB1dC0zXFxcIlxcbiAgICAgICAgICB9XSxcXG4gICAgICAgICAgYW5ub3RhdGlvbjogW3tcXG4gICAgICAgICAgICBcXFwiQF9uYW1lXFxcIjogXFxcIkFubm90YXRpb25zXFxcIlxcbiAgICAgICAgICB9XSxcXG4gICAgICAgICAgcnVsZTogW3tcXG4gICAgICAgICAgICBcXFwiQF9pZFxcXCI6IFxcXCJfMUZBMTJCOUYtMjg4Qy00MkU4LUI3N0YtQkUyRDM3MDJCN0I4XFxcIixcXG4gICAgICAgICAgICBpbnB1dEVudHJ5OiBbe1xcbiAgICAgICAgICAgICAgXFxcIkBfaWRcXFwiOiBnZW5lcmF0ZVV1aWQoKSxcXG4gICAgICAgICAgICAgIHRleHQ6IHtcXG4gICAgICAgICAgICAgICAgX18kJHRleHQ6IFxcXCJFXFxcIlxcbiAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH0sIHtcXG4gICAgICAgICAgICAgIFxcXCJAX2lkXFxcIjogZ2VuZXJhdGVVdWlkKCksXFxuICAgICAgICAgICAgICB0ZXh0OiB7XFxuICAgICAgICAgICAgICAgIF9fJCR0ZXh0OiBcXFwiRVxcXCJcXG4gICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XSxcXG4gICAgICAgICAgICBvdXRwdXRFbnRyeTogW3tcXG4gICAgICAgICAgICAgIFxcXCJAX2lkXFxcIjogZ2VuZXJhdGVVdWlkKCksXFxuICAgICAgICAgICAgICB0ZXh0OiB7XFxuICAgICAgICAgICAgICAgIF9fJCR0ZXh0OiBcXFwiYWFhXFxcIlxcbiAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH0sIHtcXG4gICAgICAgICAgICAgIFxcXCJAX2lkXFxcIjogZ2VuZXJhdGVVdWlkKCksXFxuICAgICAgICAgICAgICB0ZXh0OiB7XFxuICAgICAgICAgICAgICAgIF9fJCR0ZXh0OiBcXFwiYWFhXFxcIlxcbiAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH0sIHtcXG4gICAgICAgICAgICAgIFxcXCJAX2lkXFxcIjogZ2VuZXJhdGVVdWlkKCksXFxuICAgICAgICAgICAgICB0ZXh0OiB7XFxuICAgICAgICAgICAgICAgIF9fJCR0ZXh0OiBcXFwiYWFhXFxcIlxcbiAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1dLFxcbiAgICAgICAgICAgIGFubm90YXRpb25FbnRyeTogW3tcXG4gICAgICAgICAgICAgIHRleHQ6IHtcXG4gICAgICAgICAgICAgICAgX18kJHRleHQ6IFxcXCIvLyBZb3VyIGFubm90YXRpb25zIGhlcmVcXFwiXFxuICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfV1cXG4gICAgICAgICAgfSwge1xcbiAgICAgICAgICAgIFxcXCJAX2lkXFxcIjogXFxcIl8xRkExMkI5Ri0yODhDLTQyRTgtQjc3Ri1CRTJEMzcwMkI3QjlcXFwiLFxcbiAgICAgICAgICAgIGlucHV0RW50cnk6IFt7XFxuICAgICAgICAgICAgICBcXFwiQF9pZFxcXCI6IGdlbmVyYXRlVXVpZCgpLFxcbiAgICAgICAgICAgICAgdGV4dDoge1xcbiAgICAgICAgICAgICAgICBfXyQkdGV4dDogXFxcIkVcXFwiXFxuICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfSwge1xcbiAgICAgICAgICAgICAgXFxcIkBfaWRcXFwiOiBnZW5lcmF0ZVV1aWQoKSxcXG4gICAgICAgICAgICAgIHRleHQ6IHtcXG4gICAgICAgICAgICAgICAgX18kJHRleHQ6IFxcXCJFXFxcIlxcbiAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1dLFxcbiAgICAgICAgICAgIG91dHB1dEVudHJ5OiBbe1xcbiAgICAgICAgICAgICAgXFxcIkBfaWRcXFwiOiBnZW5lcmF0ZVV1aWQoKSxcXG4gICAgICAgICAgICAgIHRleHQ6IHtcXG4gICAgICAgICAgICAgICAgX18kJHRleHQ6IFxcXCJhYWFcXFwiXFxuICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfSwge1xcbiAgICAgICAgICAgICAgXFxcIkBfaWRcXFwiOiBnZW5lcmF0ZVV1aWQoKSxcXG4gICAgICAgICAgICAgIHRleHQ6IHtcXG4gICAgICAgICAgICAgICAgX18kJHRleHQ6IFxcXCJhYWFcXFwiXFxuICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfSwge1xcbiAgICAgICAgICAgICAgXFxcIkBfaWRcXFwiOiBnZW5lcmF0ZVV1aWQoKSxcXG4gICAgICAgICAgICAgIHRleHQ6IHtcXG4gICAgICAgICAgICAgICAgX18kJHRleHQ6IFxcXCJhYWFcXFwiXFxuICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfV0sXFxuICAgICAgICAgICAgYW5ub3RhdGlvbkVudHJ5OiBbe1xcbiAgICAgICAgICAgICAgdGV4dDoge1xcbiAgICAgICAgICAgICAgICBfXyQkdGV4dDogXFxcIi8vIFlvdXIgYW5ub3RhdGlvbnMgaGVyZVxcXCJcXG4gICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XVxcbiAgICAgICAgICB9XVxcbiAgICAgICAgfVxcbiAgICAgIH0sXFxuICAgICAgZWxzZToge1xcbiAgICAgICAgXFxcIkBfaWRcXFwiOiBcXFwiXzFGQTEyQjlGLTI4OEMtNDJFOC1CNzdGLUJFMkQzNzAyQjdCMlxcXCIsXFxuICAgICAgICBleHByZXNzaW9uOiB7XFxuICAgICAgICAgIF9fJCRlbGVtZW50OiBcXFwiY29uZGl0aW9uYWxcXFwiLFxcbiAgICAgICAgICBcXFwiQF9pZFxcXCI6IGdlbmVyYXRlVXVpZCgpLFxcbiAgICAgICAgICBcXFwiQF9sYWJlbFxcXCI6IFxcXCJFeHByZXNzaW9uIE5hbWVcXFwiLFxcbiAgICAgICAgICBpZjoge1xcbiAgICAgICAgICAgIFxcXCJAX2lkXFxcIjogZ2VuZXJhdGVVdWlkKCksXFxuICAgICAgICAgICAgZXhwcmVzc2lvbjoge1xcbiAgICAgICAgICAgICAgX18kJGVsZW1lbnQ6IFxcXCJsaXRlcmFsRXhwcmVzc2lvblxcXCIsXFxuICAgICAgICAgICAgICBcXFwiQF9pZFxcXCI6IGdlbmVyYXRlVXVpZCgpXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICB0aGVuOiB7XFxuICAgICAgICAgICAgXFxcIkBfaWRcXFwiOiBcXFwiXzFGQTEyQjlGLTI4OEMtNDJFOC1CNzdGLUJFMkQzNzAyQjdCMFxcXCIsXFxuICAgICAgICAgICAgZXhwcmVzc2lvbjoge1xcbiAgICAgICAgICAgICAgX18kJGVsZW1lbnQ6IFxcXCJsaXRlcmFsRXhwcmVzc2lvblxcXCIsXFxuICAgICAgICAgICAgICBcXFwiQF9pZFxcXCI6IGdlbmVyYXRlVXVpZCgpXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBlbHNlOiB7XFxuICAgICAgICAgICAgXFxcIkBfaWRcXFwiOiBcXFwiXzFGQTEyQjlGLTI4OEMtNDJFOC1CNzdGLUJFMkQzNzAyQjdCM1xcXCIsXFxuICAgICAgICAgICAgZXhwcmVzc2lvbjoge1xcbiAgICAgICAgICAgICAgX18kJGVsZW1lbnQ6IFxcXCJkZWNpc2lvblRhYmxlXFxcIixcXG4gICAgICAgICAgICAgIFxcXCJAX2lkXFxcIjogZ2VuZXJhdGVVdWlkKCksXFxuICAgICAgICAgICAgICBcXFwiQF90eXBlUmVmXFxcIjogXFxcIkFueVxcXCIsXFxuICAgICAgICAgICAgICBcXFwiQF9oaXRQb2xpY3lcXFwiOiBcXFwiVU5JUVVFXFxcIixcXG4gICAgICAgICAgICAgIGlucHV0OiBbe1xcbiAgICAgICAgICAgICAgICBcXFwiQF9pZFxcXCI6IGdlbmVyYXRlVXVpZCgpLFxcbiAgICAgICAgICAgICAgICBpbnB1dEV4cHJlc3Npb246IHtcXG4gICAgICAgICAgICAgICAgICBcXFwiQF9pZFxcXCI6IGdlbmVyYXRlVXVpZCgpLFxcbiAgICAgICAgICAgICAgICAgIHRleHQ6IHtcXG4gICAgICAgICAgICAgICAgICAgIF9fJCR0ZXh0OiBcXFwiaW5wdXQtMVxcXCJcXG4gICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgIH0sIHtcXG4gICAgICAgICAgICAgICAgXFxcIkBfaWRcXFwiOiBnZW5lcmF0ZVV1aWQoKSxcXG4gICAgICAgICAgICAgICAgaW5wdXRFeHByZXNzaW9uOiB7XFxuICAgICAgICAgICAgICAgICAgXFxcIkBfaWRcXFwiOiBnZW5lcmF0ZVV1aWQoKSxcXG4gICAgICAgICAgICAgICAgICB0ZXh0OiB7XFxuICAgICAgICAgICAgICAgICAgICBfXyQkdGV4dDogXFxcImlucHV0LTJcXFwiXFxuICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICB9XSxcXG4gICAgICAgICAgICAgIG91dHB1dDogW3tcXG4gICAgICAgICAgICAgICAgXFxcIkBfaWRcXFwiOiBnZW5lcmF0ZVV1aWQoKSxcXG4gICAgICAgICAgICAgICAgXFxcIkBfbGFiZWxcXFwiOiBcXFwib3V0cHV0LTFcXFwiXFxuICAgICAgICAgICAgICB9LCB7XFxuICAgICAgICAgICAgICAgIFxcXCJAX2lkXFxcIjogZ2VuZXJhdGVVdWlkKCksXFxuICAgICAgICAgICAgICAgIFxcXCJAX2xhYmVsXFxcIjogXFxcIm91dHB1dC0yXFxcIlxcbiAgICAgICAgICAgICAgfSwge1xcbiAgICAgICAgICAgICAgICBcXFwiQF9pZFxcXCI6IGdlbmVyYXRlVXVpZCgpLFxcbiAgICAgICAgICAgICAgICBcXFwiQF9sYWJlbFxcXCI6IFxcXCJvdXRwdXQtM1xcXCJcXG4gICAgICAgICAgICAgIH1dLFxcbiAgICAgICAgICAgICAgYW5ub3RhdGlvbjogW3tcXG4gICAgICAgICAgICAgICAgXFxcIkBfbmFtZVxcXCI6IFxcXCJBbm5vdGF0aW9uc1xcXCJcXG4gICAgICAgICAgICAgIH1dLFxcbiAgICAgICAgICAgICAgcnVsZTogW3tcXG4gICAgICAgICAgICAgICAgXFxcIkBfaWRcXFwiOiBcXFwiXzFGQTEyQjlGLTI4OEMtNDJFOC1CNzdGLUJFMkQzNzAyQjdCMVxcXCIsXFxuICAgICAgICAgICAgICAgIGlucHV0RW50cnk6IFt7XFxuICAgICAgICAgICAgICAgICAgXFxcIkBfaWRcXFwiOiBnZW5lcmF0ZVV1aWQoKSxcXG4gICAgICAgICAgICAgICAgICB0ZXh0OiB7XFxuICAgICAgICAgICAgICAgICAgICBfXyQkdGV4dDogXFxcIkVcXFwiXFxuICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICB9LCB7XFxuICAgICAgICAgICAgICAgICAgXFxcIkBfaWRcXFwiOiBnZW5lcmF0ZVV1aWQoKSxcXG4gICAgICAgICAgICAgICAgICB0ZXh0OiB7XFxuICAgICAgICAgICAgICAgICAgICBfXyQkdGV4dDogXFxcIkVcXFwiXFxuICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICB9XSxcXG4gICAgICAgICAgICAgICAgb3V0cHV0RW50cnk6IFt7XFxuICAgICAgICAgICAgICAgICAgXFxcIkBfaWRcXFwiOiBnZW5lcmF0ZVV1aWQoKSxcXG4gICAgICAgICAgICAgICAgICB0ZXh0OiB7XFxuICAgICAgICAgICAgICAgICAgICBfXyQkdGV4dDogXFxcImFhYVxcXCJcXG4gICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIH0sIHtcXG4gICAgICAgICAgICAgICAgICBcXFwiQF9pZFxcXCI6IGdlbmVyYXRlVXVpZCgpLFxcbiAgICAgICAgICAgICAgICAgIHRleHQ6IHtcXG4gICAgICAgICAgICAgICAgICAgIF9fJCR0ZXh0OiBcXFwiYWFhXFxcIlxcbiAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgfSwge1xcbiAgICAgICAgICAgICAgICAgIFxcXCJAX2lkXFxcIjogZ2VuZXJhdGVVdWlkKCksXFxuICAgICAgICAgICAgICAgICAgdGV4dDoge1xcbiAgICAgICAgICAgICAgICAgICAgX18kJHRleHQ6IFxcXCJhYWFcXFwiXFxuICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICB9XSxcXG4gICAgICAgICAgICAgICAgYW5ub3RhdGlvbkVudHJ5OiBbe1xcbiAgICAgICAgICAgICAgICAgIHRleHQ6IHtcXG4gICAgICAgICAgICAgICAgICAgIF9fJCR0ZXh0OiBcXFwiLy8gWW91ciBhbm5vdGF0aW9ucyBoZXJlXFxcIlxcbiAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgfV1cXG4gICAgICAgICAgICAgIH1dXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufVwiLFxuICAgICAgLi4uRXZhbHVhdGlvbkhpdHMucGFyYW1ldGVycz8uZG9jcz8uc291cmNlXG4gICAgfVxuICB9XG59O1xuTW9udGhseUZlZS5wYXJhbWV0ZXJzID0ge1xuICAuLi5Nb250aGx5RmVlLnBhcmFtZXRlcnMsXG4gIGRvY3M6IHtcbiAgICAuLi5Nb250aGx5RmVlLnBhcmFtZXRlcnM/LmRvY3MsXG4gICAgc291cmNlOiB7XG4gICAgICBvcmlnaW5hbFNvdXJjZTogXCJ7XFxuICByZW5kZXI6IGFyZ3MgPT4gQm94ZWRFeHByZXNzaW9uRWRpdG9yU3RvcnkoKSxcXG4gIHBhcmFtZXRlcnM6IHtcXG4gICAgZXhjbHVkZTogW1xcXCJkYXRhVHlwZXNcXFwiLCBcXFwiYmVlR3d0U2VydmljZVxcXCIsIFxcXCJwbW1sRG9jdW1lbnRzXFxcIl1cXG4gIH0sXFxuICBhcmdzOiB7XFxuICAgIC4uLkVtcHR5RXhwcmVzc2lvbi5hcmdzLFxcbiAgICBleHByZXNzaW9uOiB7XFxuICAgICAgX18kJGVsZW1lbnQ6IFxcXCJjb25kaXRpb25hbFxcXCIsXFxuICAgICAgXFxcIkBfaWRcXFwiOiBcXFwiX0Q5OEZCMzVBLUM2QTUtNEJBNy1BRDM4LTE3NkQ1NkEzMTk4M1xcXCIsXFxuICAgICAgXFxcIkBfbGFiZWxcXFwiOiBcXFwiTW9udGhseUZlZVxcXCIsXFxuICAgICAgXFxcIkBfdHlwZVJlZlxcXCI6IFxcXCJudW1iZXJcXFwiLFxcbiAgICAgIGlmOiB7XFxuICAgICAgICBcXFwiQF9pZFxcXCI6IGdlbmVyYXRlVXVpZCgpLFxcbiAgICAgICAgZXhwcmVzc2lvbjoge1xcbiAgICAgICAgICBfXyQkZWxlbWVudDogXFxcImxpdGVyYWxFeHByZXNzaW9uXFxcIixcXG4gICAgICAgICAgXFxcIkBfaWRcXFwiOiBnZW5lcmF0ZVV1aWQoKSxcXG4gICAgICAgICAgdGV4dDoge1xcbiAgICAgICAgICAgIF9fJCR0ZXh0OiAnUHJvZHVjdFR5cGUgPSBcXFwiU1RBTkRBUkQgTE9BTlxcXCInXFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICB9LFxcbiAgICAgIHRoZW46IHtcXG4gICAgICAgIFxcXCJAX2lkXFxcIjogZ2VuZXJhdGVVdWlkKCksXFxuICAgICAgICBleHByZXNzaW9uOiB7XFxuICAgICAgICAgIF9fJCRlbGVtZW50OiBcXFwibGl0ZXJhbEV4cHJlc3Npb25cXFwiLFxcbiAgICAgICAgICBcXFwiQF9pZFxcXCI6IGdlbmVyYXRlVXVpZCgpLFxcbiAgICAgICAgICB0ZXh0OiB7XFxuICAgICAgICAgICAgX18kJHRleHQ6IFxcXCIyMFxcXCJcXG4gICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgIH0sXFxuICAgICAgZWxzZToge1xcbiAgICAgICAgXFxcIkBfaWRcXFwiOiBnZW5lcmF0ZVV1aWQoKSxcXG4gICAgICAgIGV4cHJlc3Npb246IHtcXG4gICAgICAgICAgX18kJGVsZW1lbnQ6IFxcXCJjb25kaXRpb25hbFxcXCIsXFxuICAgICAgICAgIFxcXCJAX2lkXFxcIjogZ2VuZXJhdGVVdWlkKCksXFxuICAgICAgICAgIGlmOiB7XFxuICAgICAgICAgICAgXFxcIkBfaWRcXFwiOiBnZW5lcmF0ZVV1aWQoKSxcXG4gICAgICAgICAgICBleHByZXNzaW9uOiB7XFxuICAgICAgICAgICAgICBfXyQkZWxlbWVudDogXFxcImxpdGVyYWxFeHByZXNzaW9uXFxcIixcXG4gICAgICAgICAgICAgIFxcXCJAX2lkXFxcIjogXFxcIl9EOThGQjM1QS1DNkE1LTRCQTctQUQzOC0xNzZENTZBMzE5ODNcXFwiLFxcbiAgICAgICAgICAgICAgdGV4dDoge1xcbiAgICAgICAgICAgICAgICBfXyQkdGV4dDogJ1Byb2R1Y3RUeXBlID0gXFxcIlNQRUNJQUwgT0ZGRVJJTkdcXFwiJ1xcbiAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgdGhlbjoge1xcbiAgICAgICAgICAgIFxcXCJAX2lkXFxcIjogZ2VuZXJhdGVVdWlkKCksXFxuICAgICAgICAgICAgZXhwcmVzc2lvbjoge1xcbiAgICAgICAgICAgICAgX18kJGVsZW1lbnQ6IFxcXCJsaXRlcmFsRXhwcmVzc2lvblxcXCIsXFxuICAgICAgICAgICAgICBcXFwiQF9pZFxcXCI6IGdlbmVyYXRlVXVpZCgpLFxcbiAgICAgICAgICAgICAgdGV4dDoge1xcbiAgICAgICAgICAgICAgICBfXyQkdGV4dDogXFxcIjI1XFxcIlxcbiAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgZWxzZToge1xcbiAgICAgICAgICAgIFxcXCJAX2lkXFxcIjogZ2VuZXJhdGVVdWlkKCksXFxuICAgICAgICAgICAgZXhwcmVzc2lvbjoge1xcbiAgICAgICAgICAgICAgX18kJGVsZW1lbnQ6IFxcXCJsaXRlcmFsRXhwcmVzc2lvblxcXCIsXFxuICAgICAgICAgICAgICBcXFwiQF9pZFxcXCI6IGdlbmVyYXRlVXVpZCgpLFxcbiAgICAgICAgICAgICAgdGV4dDoge1xcbiAgICAgICAgICAgICAgICBfXyQkdGV4dDogXFxcIm51bGxcXFwiXFxuICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9LFxcbiAgICB3aWR0aHNCeUlkOiB7XFxuICAgICAgXFxcIl9EOThGQjM1QS1DNkE1LTRCQTctQUQzOC0xNzZENTZBMzE5ODNcXFwiOiBbMzAwXVxcbiAgICB9XFxuICB9XFxufVwiLFxuICAgICAgLi4uTW9udGhseUZlZS5wYXJhbWV0ZXJzPy5kb2NzPy5zb3VyY2VcbiAgICB9XG4gIH1cbn07XG5OZXN0ZWQucGFyYW1ldGVycyA9IHtcbiAgLi4uTmVzdGVkLnBhcmFtZXRlcnMsXG4gIGRvY3M6IHtcbiAgICAuLi5OZXN0ZWQucGFyYW1ldGVycz8uZG9jcyxcbiAgICBzb3VyY2U6IHtcbiAgICAgIG9yaWdpbmFsU291cmNlOiBcIntcXG4gIHJlbmRlcjogYXJncyA9PiBCb3hlZEV4cHJlc3Npb25FZGl0b3JTdG9yeSgpLFxcbiAgcGFyYW1ldGVyczoge1xcbiAgICBleGNsdWRlOiBbXFxcImRhdGFUeXBlc1xcXCIsIFxcXCJiZWVHd3RTZXJ2aWNlXFxcIiwgXFxcInBtbWxEb2N1bWVudHNcXFwiXVxcbiAgfSxcXG4gIGFyZ3M6IHtcXG4gICAgLi4uRW1wdHlFeHByZXNzaW9uLmFyZ3MsXFxuICAgIGV4cHJlc3Npb246IHtcXG4gICAgICBfXyQkZWxlbWVudDogXFxcImNvbnRleHRcXFwiLFxcbiAgICAgIFxcXCJAX2lkXFxcIjogZ2VuZXJhdGVVdWlkKCksXFxuICAgICAgXFxcIkBfbGFiZWxcXFwiOiBcXFwiRXhwcmVzc2lvbiBOYW1lXFxcIixcXG4gICAgICBjb250ZXh0RW50cnk6IFt7XFxuICAgICAgICBcXFwiQF9pZFxcXCI6IGdlbmVyYXRlVXVpZCgpLFxcbiAgICAgICAgdmFyaWFibGU6IHtcXG4gICAgICAgICAgXFxcIkBfaWRcXFwiOiBnZW5lcmF0ZVV1aWQoKSxcXG4gICAgICAgICAgXFxcIkBfbmFtZVxcXCI6IFxcXCJDb250ZXh0RW50cnktMVxcXCJcXG4gICAgICAgIH0sXFxuICAgICAgICBleHByZXNzaW9uOiB7XFxuICAgICAgICAgIF9fJCRlbGVtZW50OiBcXFwiY29uZGl0aW9uYWxcXFwiLFxcbiAgICAgICAgICBcXFwiQF9pZFxcXCI6IGdlbmVyYXRlVXVpZCgpLFxcbiAgICAgICAgICBcXFwiQF9sYWJlbFxcXCI6IFxcXCJFeHByZXNzaW9uIE5hbWVcXFwiLFxcbiAgICAgICAgICBpZjoge1xcbiAgICAgICAgICAgIFxcXCJAX2lkXFxcIjogZ2VuZXJhdGVVdWlkKCksXFxuICAgICAgICAgICAgZXhwcmVzc2lvbjoge1xcbiAgICAgICAgICAgICAgX18kJGVsZW1lbnQ6IFxcXCJsaXRlcmFsRXhwcmVzc2lvblxcXCIsXFxuICAgICAgICAgICAgICBcXFwiQF9pZFxcXCI6IGdlbmVyYXRlVXVpZCgpXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICB0aGVuOiB7XFxuICAgICAgICAgICAgXFxcIkBfaWRcXFwiOiBnZW5lcmF0ZVV1aWQoKSxcXG4gICAgICAgICAgICBleHByZXNzaW9uOiB7XFxuICAgICAgICAgICAgICBfXyQkZWxlbWVudDogXFxcImxpdGVyYWxFeHByZXNzaW9uXFxcIixcXG4gICAgICAgICAgICAgIFxcXCJAX2lkXFxcIjogZ2VuZXJhdGVVdWlkKClcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIGVsc2U6IHtcXG4gICAgICAgICAgICBcXFwiQF9pZFxcXCI6IGdlbmVyYXRlVXVpZCgpLFxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IHtcXG4gICAgICAgICAgICAgIF9fJCRlbGVtZW50OiBcXFwibGl0ZXJhbEV4cHJlc3Npb25cXFwiLFxcbiAgICAgICAgICAgICAgXFxcIkBfaWRcXFwiOiBnZW5lcmF0ZVV1aWQoKVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgIH1dXFxuICAgIH1cXG4gIH1cXG59XCIsXG4gICAgICAuLi5OZXN0ZWQucGFyYW1ldGVycz8uZG9jcz8uc291cmNlXG4gICAgfVxuICB9XG59OyIsIi8qXG4gKiBMaWNlbnNlZCB0byB0aGUgQXBhY2hlIFNvZnR3YXJlIEZvdW5kYXRpb24gKEFTRikgdW5kZXIgb25lXG4gKiBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gIFNlZSB0aGUgTk9USUNFIGZpbGVcbiAqIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uXG4gKiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC4gIFRoZSBBU0YgbGljZW5zZXMgdGhpcyBmaWxlXG4gKiB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlXG4gKiBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2VcbiAqIHdpdGggdGhlIExpY2Vuc2UuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLFxuICogc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cbiAqIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXG4gKiBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGVcbiAqIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnNcbiAqIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB0eXBlIHsgTWV0YSwgU3RvcnlPYmogfSBmcm9tIFwiQHN0b3J5Ym9vay9yZWFjdFwiO1xuaW1wb3J0IHsgQm94ZWRFeHByZXNzaW9uRWRpdG9yLCBCb3hlZEV4cHJlc3Npb25FZGl0b3JQcm9wcyB9IGZyb20gXCIuLi8uLi8uLi9zcmMvQm94ZWRFeHByZXNzaW9uRWRpdG9yXCI7XG5pbXBvcnQgeyBiZWVHd3RTZXJ2aWNlLCBCb3hlZEV4cHJlc3Npb25FZGl0b3JTdG9yeSwgQm94ZWRFeHByZXNzaW9uRWRpdG9yU3RvcnlBcmdzLCBkYXRhVHlwZXMsIHBtbWxEb2N1bWVudHMgfSBmcm9tIFwiLi4vLi4vYm94ZWRFeHByZXNzaW9uU3Rvcmllc1dyYXBwZXJcIjtcblxuLy8gTW9yZSBvbiBob3cgdG8gc2V0IHVwIHN0b3JpZXMgYXQ6IGh0dHBzOi8vc3Rvcnlib29rLmpzLm9yZy9kb2NzL3JlYWN0L3dyaXRpbmctc3Rvcmllcy9pbnRyb2R1Y3Rpb24jZGVmYXVsdC1leHBvcnRcbmNvbnN0IG1ldGE6IE1ldGE8Qm94ZWRFeHByZXNzaW9uRWRpdG9yUHJvcHM+ID0ge1xuICB0aXRsZTogXCJNaXNjL0VtcHR5IEJveGVkIEV4cHJlc3Npb25cIixcbiAgY29tcG9uZW50OiBCb3hlZEV4cHJlc3Npb25FZGl0b3IsXG4gIGluY2x1ZGVTdG9yaWVzOiAvXltBLVpdL1xufTtcbmV4cG9ydCBkZWZhdWx0IG1ldGE7XG50eXBlIFN0b3J5ID0gU3RvcnlPYmo8Qm94ZWRFeHByZXNzaW9uRWRpdG9yU3RvcnlBcmdzPjtcblxuLy8gTW9yZSBvbiB3cml0aW5nIHN0b3JpZXMgd2l0aCBhcmdzOiBodHRwczovL3N0b3J5Ym9vay5qcy5vcmcvZG9jcy9yZWFjdC93cml0aW5nLXN0b3JpZXMvYXJnc1xuZXhwb3J0IGNvbnN0IEJhc2U6IFN0b3J5ID0ge1xuICByZW5kZXI6IGFyZ3MgPT4gQm94ZWRFeHByZXNzaW9uRWRpdG9yU3RvcnkoKSxcbiAgYXJnczoge1xuICAgIGV4cHJlc3Npb25Ib2xkZXJJZDogXCJfMDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwXCIsXG4gICAgZXhwcmVzc2lvbjogdW5kZWZpbmVkLFxuICAgIHdpZHRoc0J5SWQ6IHt9LFxuICAgIGRhdGFUeXBlcyxcbiAgICBiZWVHd3RTZXJ2aWNlLFxuICAgIHBtbWxEb2N1bWVudHMsXG4gICAgaXNSZXNldFN1cHBvcnRlZE9uUm9vdEV4cHJlc3Npb246IHRydWVcbiAgfVxufTtcbkJhc2UucGFyYW1ldGVycyA9IHtcbiAgLi4uQmFzZS5wYXJhbWV0ZXJzLFxuICBkb2NzOiB7XG4gICAgLi4uQmFzZS5wYXJhbWV0ZXJzPy5kb2NzLFxuICAgIHNvdXJjZToge1xuICAgICAgb3JpZ2luYWxTb3VyY2U6IFwie1xcbiAgcmVuZGVyOiBhcmdzID0+IEJveGVkRXhwcmVzc2lvbkVkaXRvclN0b3J5KCksXFxuICBhcmdzOiB7XFxuICAgIGV4cHJlc3Npb25Ib2xkZXJJZDogXFxcIl8wMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDBcXFwiLFxcbiAgICBleHByZXNzaW9uOiB1bmRlZmluZWQsXFxuICAgIHdpZHRoc0J5SWQ6IHt9LFxcbiAgICBkYXRhVHlwZXMsXFxuICAgIGJlZUd3dFNlcnZpY2UsXFxuICAgIHBtbWxEb2N1bWVudHMsXFxuICAgIGlzUmVzZXRTdXBwb3J0ZWRPblJvb3RFeHByZXNzaW9uOiB0cnVlXFxuICB9XFxufVwiLFxuICAgICAgLi4uQmFzZS5wYXJhbWV0ZXJzPy5kb2NzPy5zb3VyY2VcbiAgICB9XG4gIH1cbn07Il0sIm5hbWVzIjpbIkJveGVkRXhwcmVzc2lvbkVkaXRvciIsIkJveGVkRXhwcmVzc2lvbkVkaXRvclN0b3J5IiwiZ2VuZXJhdGVVdWlkIiwiQmFzZSIsIkVtcHR5RXhwcmVzc2lvbiIsIm1ldGEiLCJ0aXRsZSIsImNvbXBvbmVudCIsImluY2x1ZGVTdG9yaWVzIiwicmVuZGVyIiwiYXJncyIsInBhcmFtZXRlcnMiLCJleGNsdWRlIiwiZXhwcmVzc2lvbiIsIl9fJCRlbGVtZW50IiwiaWYiLCJ0aGVuIiwiZWxzZSIsIlJlYWRvbmx5IiwiaXNSZWFkT25seSIsIkV2YWx1YXRpb25IaXRzIiwiZXZhbHVhdGlvbkhpdHNDb3VudEJ5SWQiLCJNYXAiLCJpbnB1dCIsImlucHV0RXhwcmVzc2lvbiIsInRleHQiLCJfXyQkdGV4dCIsIm91dHB1dCIsImFubm90YXRpb24iLCJydWxlIiwiaW5wdXRFbnRyeSIsIm91dHB1dEVudHJ5IiwiYW5ub3RhdGlvbkVudHJ5IiwiTW9udGhseUZlZSIsIndpZHRoc0J5SWQiLCJOZXN0ZWQiLCJjb250ZXh0RW50cnkiLCJ2YXJpYWJsZSIsImRvY3MiLCJfYSIsInNvdXJjZSIsIm9yaWdpbmFsU291cmNlIiwiX2MiLCJfYiIsIl9kIiwiX2YiLCJfZSIsIl9nIiwiX2oiLCJfaCIsIl9rIiwiX20iLCJfbCIsIl9vIiwiX3EiLCJfcCIsIl9fbmFtZWRFeHBvcnRzT3JkZXIiLCJiZWVHd3RTZXJ2aWNlIiwiZGF0YVR5cGVzIiwicG1tbERvY3VtZW50cyIsImV4cHJlc3Npb25Ib2xkZXJJZCIsInVuZGVmaW5lZCIsImlzUmVzZXRTdXBwb3J0ZWRPblJvb3RFeHByZXNzaW9uIl0sInNvdXJjZVJvb3QiOiIifQ==