"use strict";
(self["webpackChunk_kie_tools_boxed_expression_component"] = self["webpackChunk_kie_tools_boxed_expression_component"] || []).push([["stories_boxedExpressions_Relation_Relation_stories_tsx"],{

/***/ "./stories/boxedExpressions/Relation/Relation.stories.tsx":
/*!****************************************************************!*\
  !*** ./stories/boxedExpressions/Relation/Relation.stories.tsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Base: () => (/* binding */ Base),
/* harmony export */   Bigger: () => (/* binding */ Bigger),
/* harmony export */   Nested: () => (/* binding */ Nested),
/* harmony export */   People: () => (/* binding */ People),
/* harmony export */   Readonly: () => (/* binding */ Readonly),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _src_BoxedExpressionEditor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/BoxedExpressionEditor */ "./src/BoxedExpressionEditor.tsx");
/* harmony import */ var _boxedExpressionStoriesWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../boxedExpressionStoriesWrapper */ "./stories/boxedExpressionStoriesWrapper.tsx");
/* harmony import */ var _misc_Empty_EmptyExpression_stories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../misc/Empty/EmptyExpression.stories */ "./stories/misc/Empty/EmptyExpression.stories.tsx");
/* harmony import */ var _src_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../src/api */ "./src/api/index.ts");
/* harmony import */ var _src_expressions_RelationExpression_RelationExpression__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../src/expressions/RelationExpression/RelationExpression */ "./src/expressions/RelationExpression/RelationExpression.tsx");
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;





const meta = {
  title: "Boxed Expressions/Relation",
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
      __$$element: "relation",
      "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
      "@_label": "Expression Name",
      column: [{
        "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
        "@_name": "column-1"
      }],
      row: [{
        "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
        expression: [{
          __$$element: "literalExpression",
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
          text: {
            __$$text: _src_expressions_RelationExpression_RelationExpression__WEBPACK_IMPORTED_MODULE_4__.RELATION_EXPRESSION_DEFAULT_VALUE
          }
        }]
      }]
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
      __$$element: "relation",
      "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
      "@_label": "Expression Name",
      column: [{
        "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
        "@_name": "column-1"
      }],
      row: [{
        "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
        expression: [{
          __$$element: "literalExpression",
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
          text: {
            __$$text: _src_expressions_RelationExpression_RelationExpression__WEBPACK_IMPORTED_MODULE_4__.RELATION_EXPRESSION_DEFAULT_VALUE
          }
        }]
      }]
    },
    isResetSupportedOnRootExpression: true,
    isReadOnly: true
  }
};
const People = {
  render: args => (0,_boxedExpressionStoriesWrapper__WEBPACK_IMPORTED_MODULE_1__.BoxedExpressionEditorStory)(),
  parameters: {
    exclude: ["dataTypes", "beeGwtService", "pmmlDocuments"]
  },
  args: {
    ...Base.args,
    expression: {
      __$$element: "relation",
      "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
      "@_label": "People",
      "@_typeRef": "tPeople",
      column: [{
        "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
        "@_name": "Name",
        "@_typeRef": _src_api__WEBPACK_IMPORTED_MODULE_3__.DmnBuiltInDataType.String
      }, {
        "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
        "@_name": "Age",
        "@_typeRef": _src_api__WEBPACK_IMPORTED_MODULE_3__.DmnBuiltInDataType.Number
      }, {
        "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
        "@_name": "Country",
        "@_typeRef": _src_api__WEBPACK_IMPORTED_MODULE_3__.DmnBuiltInDataType.String
      }],
      row: [{
        "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
        expression: [{
          __$$element: "literalExpression",
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
          text: {
            __$$text: '"Luiz"'
          }
        }, {
          __$$element: "literalExpression",
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
          text: {
            __$$text: "30"
          }
        }, {
          __$$element: "literalExpression",
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
          text: {
            __$$text: '"Brazil"'
          }
        }]
      }, {
        "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
        expression: [{
          __$$element: "literalExpression",
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
          text: {
            __$$text: '"Tiago"'
          }
        }, {
          __$$element: "literalExpression",
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
          text: {
            __$$text: "29"
          }
        }, {
          __$$element: "literalExpression",
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
          text: {
            __$$text: '"USA"'
          }
        }]
      }]
    }
  }
};
const Bigger = {
  render: args => (0,_boxedExpressionStoriesWrapper__WEBPACK_IMPORTED_MODULE_1__.BoxedExpressionEditorStory)(),
  parameters: {
    exclude: ["dataTypes", "beeGwtService", "pmmlDocuments"]
  },
  args: {
    ...Base.args,
    expression: {
      __$$element: "relation",
      "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
      "@_label": "Expression Name",
      column: [{
        "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
        "@_name": "column-1"
      }, {
        "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
        "@_name": "column-2"
      }, {
        "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
        "@_name": "column-3"
      }, {
        "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
        "@_name": "column-4"
      }],
      row: [{
        "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
        expression: [{
          __$$element: "literalExpression",
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
          text: {
            __$$text: ""
          }
        }, {
          __$$element: "literalExpression",
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
          text: {
            __$$text: ""
          }
        }, {
          __$$element: "literalExpression",
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
          text: {
            __$$text: ""
          }
        }, {
          __$$element: "literalExpression",
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
          text: {
            __$$text: ""
          }
        }]
      }, {
        "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
        expression: [{
          __$$element: "literalExpression",
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
          text: {
            __$$text: ""
          }
        }, {
          __$$element: "literalExpression",
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
          text: {
            __$$text: ""
          }
        }, {
          __$$element: "literalExpression",
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
          text: {
            __$$text: ""
          }
        }, {
          __$$element: "literalExpression",
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
          text: {
            __$$text: ""
          }
        }]
      }, {
        "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
        expression: [{
          __$$element: "literalExpression",
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
          text: {
            __$$text: ""
          }
        }, {
          __$$element: "literalExpression",
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
          text: {
            __$$text: ""
          }
        }, {
          __$$element: "literalExpression",
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
          text: {
            __$$text: ""
          }
        }, {
          __$$element: "literalExpression",
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
          text: {
            __$$text: ""
          }
        }]
      }]
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
          __$$element: "relation",
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
          column: [{
            "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
            "@_name": "column-1"
          }],
          row: [{
            "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
            expression: [{
              __$$element: "literalExpression",
              "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
              text: {
                __$$text: _src_expressions_RelationExpression_RelationExpression__WEBPACK_IMPORTED_MODULE_4__.RELATION_EXPRESSION_DEFAULT_VALUE
              }
            }]
          }]
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
      originalSource: "{\n  render: args => BoxedExpressionEditorStory(),\n  parameters: {\n    exclude: [\"dataTypes\", \"beeGwtService\", \"pmmlDocuments\"]\n  },\n  args: {\n    ...EmptyExpression.args,\n    expression: {\n      __$$element: \"relation\",\n      \"@_id\": generateUuid(),\n      \"@_label\": \"Expression Name\",\n      column: [{\n        \"@_id\": generateUuid(),\n        \"@_name\": \"column-1\"\n      }],\n      row: [{\n        \"@_id\": generateUuid(),\n        expression: [{\n          __$$element: \"literalExpression\",\n          \"@_id\": generateUuid(),\n          text: {\n            __$$text: RELATION_EXPRESSION_DEFAULT_VALUE\n          }\n        }]\n      }]\n    },\n    isResetSupportedOnRootExpression: true\n  }\n}",
      ...((_c = (_b = Base.parameters) === null || _b === void 0 ? void 0 : _b.docs) === null || _c === void 0 ? void 0 : _c.source)
    }
  }
};
Readonly.parameters = {
  ...Readonly.parameters,
  docs: {
    ...((_d = Readonly.parameters) === null || _d === void 0 ? void 0 : _d.docs),
    source: {
      originalSource: "{\n  render: args => BoxedExpressionEditorStory(),\n  parameters: {\n    exclude: [\"dataTypes\", \"beeGwtService\", \"pmmlDocuments\"]\n  },\n  args: {\n    ...EmptyExpression.args,\n    expression: {\n      __$$element: \"relation\",\n      \"@_id\": generateUuid(),\n      \"@_label\": \"Expression Name\",\n      column: [{\n        \"@_id\": generateUuid(),\n        \"@_name\": \"column-1\"\n      }],\n      row: [{\n        \"@_id\": generateUuid(),\n        expression: [{\n          __$$element: \"literalExpression\",\n          \"@_id\": generateUuid(),\n          text: {\n            __$$text: RELATION_EXPRESSION_DEFAULT_VALUE\n          }\n        }]\n      }]\n    },\n    isResetSupportedOnRootExpression: true,\n    isReadOnly: true\n  }\n}",
      ...((_f = (_e = Readonly.parameters) === null || _e === void 0 ? void 0 : _e.docs) === null || _f === void 0 ? void 0 : _f.source)
    }
  }
};
People.parameters = {
  ...People.parameters,
  docs: {
    ...((_g = People.parameters) === null || _g === void 0 ? void 0 : _g.docs),
    source: {
      originalSource: "{\n  render: args => BoxedExpressionEditorStory(),\n  parameters: {\n    exclude: [\"dataTypes\", \"beeGwtService\", \"pmmlDocuments\"]\n  },\n  args: {\n    ...Base.args,\n    expression: {\n      __$$element: \"relation\",\n      \"@_id\": generateUuid(),\n      \"@_label\": \"People\",\n      \"@_typeRef\": \"tPeople\",\n      column: [{\n        \"@_id\": generateUuid(),\n        \"@_name\": \"Name\",\n        \"@_typeRef\": DmnBuiltInDataType.String\n      }, {\n        \"@_id\": generateUuid(),\n        \"@_name\": \"Age\",\n        \"@_typeRef\": DmnBuiltInDataType.Number\n      }, {\n        \"@_id\": generateUuid(),\n        \"@_name\": \"Country\",\n        \"@_typeRef\": DmnBuiltInDataType.String\n      }],\n      row: [{\n        \"@_id\": generateUuid(),\n        expression: [{\n          __$$element: \"literalExpression\",\n          \"@_id\": generateUuid(),\n          text: {\n            __$$text: '\"Luiz\"'\n          }\n        }, {\n          __$$element: \"literalExpression\",\n          \"@_id\": generateUuid(),\n          text: {\n            __$$text: \"30\"\n          }\n        }, {\n          __$$element: \"literalExpression\",\n          \"@_id\": generateUuid(),\n          text: {\n            __$$text: '\"Brazil\"'\n          }\n        }]\n      }, {\n        \"@_id\": generateUuid(),\n        expression: [{\n          __$$element: \"literalExpression\",\n          \"@_id\": generateUuid(),\n          text: {\n            __$$text: '\"Tiago\"'\n          }\n        }, {\n          __$$element: \"literalExpression\",\n          \"@_id\": generateUuid(),\n          text: {\n            __$$text: \"29\"\n          }\n        }, {\n          __$$element: \"literalExpression\",\n          \"@_id\": generateUuid(),\n          text: {\n            __$$text: '\"USA\"'\n          }\n        }]\n      }]\n    }\n  }\n}",
      ...((_j = (_h = People.parameters) === null || _h === void 0 ? void 0 : _h.docs) === null || _j === void 0 ? void 0 : _j.source)
    }
  }
};
Bigger.parameters = {
  ...Bigger.parameters,
  docs: {
    ...((_k = Bigger.parameters) === null || _k === void 0 ? void 0 : _k.docs),
    source: {
      originalSource: "{\n  render: args => BoxedExpressionEditorStory(),\n  parameters: {\n    exclude: [\"dataTypes\", \"beeGwtService\", \"pmmlDocuments\"]\n  },\n  args: {\n    ...Base.args,\n    expression: {\n      __$$element: \"relation\",\n      \"@_id\": generateUuid(),\n      \"@_label\": \"Expression Name\",\n      column: [{\n        \"@_id\": generateUuid(),\n        \"@_name\": \"column-1\"\n      }, {\n        \"@_id\": generateUuid(),\n        \"@_name\": \"column-2\"\n      }, {\n        \"@_id\": generateUuid(),\n        \"@_name\": \"column-3\"\n      }, {\n        \"@_id\": generateUuid(),\n        \"@_name\": \"column-4\"\n      }],\n      row: [{\n        \"@_id\": generateUuid(),\n        expression: [{\n          __$$element: \"literalExpression\",\n          \"@_id\": generateUuid(),\n          text: {\n            __$$text: \"\"\n          }\n        }, {\n          __$$element: \"literalExpression\",\n          \"@_id\": generateUuid(),\n          text: {\n            __$$text: \"\"\n          }\n        }, {\n          __$$element: \"literalExpression\",\n          \"@_id\": generateUuid(),\n          text: {\n            __$$text: \"\"\n          }\n        }, {\n          __$$element: \"literalExpression\",\n          \"@_id\": generateUuid(),\n          text: {\n            __$$text: \"\"\n          }\n        }]\n      }, {\n        \"@_id\": generateUuid(),\n        expression: [{\n          __$$element: \"literalExpression\",\n          \"@_id\": generateUuid(),\n          text: {\n            __$$text: \"\"\n          }\n        }, {\n          __$$element: \"literalExpression\",\n          \"@_id\": generateUuid(),\n          text: {\n            __$$text: \"\"\n          }\n        }, {\n          __$$element: \"literalExpression\",\n          \"@_id\": generateUuid(),\n          text: {\n            __$$text: \"\"\n          }\n        }, {\n          __$$element: \"literalExpression\",\n          \"@_id\": generateUuid(),\n          text: {\n            __$$text: \"\"\n          }\n        }]\n      }, {\n        \"@_id\": generateUuid(),\n        expression: [{\n          __$$element: \"literalExpression\",\n          \"@_id\": generateUuid(),\n          text: {\n            __$$text: \"\"\n          }\n        }, {\n          __$$element: \"literalExpression\",\n          \"@_id\": generateUuid(),\n          text: {\n            __$$text: \"\"\n          }\n        }, {\n          __$$element: \"literalExpression\",\n          \"@_id\": generateUuid(),\n          text: {\n            __$$text: \"\"\n          }\n        }, {\n          __$$element: \"literalExpression\",\n          \"@_id\": generateUuid(),\n          text: {\n            __$$text: \"\"\n          }\n        }]\n      }]\n    }\n  }\n}",
      ...((_m = (_l = Bigger.parameters) === null || _l === void 0 ? void 0 : _l.docs) === null || _m === void 0 ? void 0 : _m.source)
    }
  }
};
Nested.parameters = {
  ...Nested.parameters,
  docs: {
    ...((_o = Nested.parameters) === null || _o === void 0 ? void 0 : _o.docs),
    source: {
      originalSource: "{\n  render: args => BoxedExpressionEditorStory(),\n  parameters: {\n    exclude: [\"dataTypes\", \"beeGwtService\", \"pmmlDocuments\"]\n  },\n  args: {\n    ...EmptyExpression.args,\n    expression: {\n      __$$element: \"context\",\n      \"@_id\": generateUuid(),\n      \"@_label\": \"Expression Name\",\n      contextEntry: [{\n        \"@_id\": generateUuid(),\n        variable: {\n          \"@_id\": generateUuid(),\n          \"@_name\": \"ContextEntry-1\"\n        },\n        expression: {\n          __$$element: \"relation\",\n          \"@_id\": generateUuid(),\n          column: [{\n            \"@_id\": generateUuid(),\n            \"@_name\": \"column-1\"\n          }],\n          row: [{\n            \"@_id\": generateUuid(),\n            expression: [{\n              __$$element: \"literalExpression\",\n              \"@_id\": generateUuid(),\n              text: {\n                __$$text: RELATION_EXPRESSION_DEFAULT_VALUE\n              }\n            }]\n          }]\n        }\n      }]\n    },\n    isResetSupportedOnRootExpression: false\n  }\n}",
      ...((_q = (_p = Nested.parameters) === null || _p === void 0 ? void 0 : _p.docs) === null || _q === void 0 ? void 0 : _q.source)
    }
  }
};
const __namedExportsOrder = ["Base", "Readonly", "People", "Bigger", "Nested"];

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Rvcmllc19ib3hlZEV4cHJlc3Npb25zX1JlbGF0aW9uX1JlbGF0aW9uX3N0b3JpZXNfdHN4LmMwNDBmODk5LmlmcmFtZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CdUc7QUFDVTtBQUM5QjtBQUNmO0FBQytDO0FBR25ILE1BQU1PLElBQUksR0FBcUM7RUFDN0NDLEtBQUssRUFBRSw0QkFBNEI7RUFDbkNDLFNBQVMsRUFBRVQsNkVBQXFCO0VBQ2hDVSxjQUFjLEVBQUU7Q0FDakI7QUFDRCxpRUFBZUgsSUFBSSxFQUFDO0FBSWIsTUFBTUwsSUFBSSxHQUFVO0VBQ3pCUyxNQUFNLEVBQUVDLElBQUksSUFBSVgsMEZBQTBCLEVBQUU7RUFDNUNZLFVBQVUsRUFBRTtJQUNWQyxPQUFPLEVBQUUsQ0FBQyxXQUFXLEVBQUUsZUFBZSxFQUFFLGVBQWU7R0FDeEQ7RUFDREYsSUFBSSxFQUFFO0lBQ0osR0FBR1QscUVBQWUsQ0FBQ1MsSUFBSTtJQUN2QkcsVUFBVSxFQUFFO01BQ1ZDLFdBQVcsRUFBRSxVQUFVO01BQ3ZCLE1BQU0sRUFBRVgsc0RBQVksRUFBRTtNQUN0QixTQUFTLEVBQUUsaUJBQWlCO01BQzVCWSxNQUFNLEVBQUUsQ0FBQztRQUNQLE1BQU0sRUFBRVosc0RBQVksRUFBRTtRQUN0QixRQUFRLEVBQUU7T0FDWCxDQUFDO01BQ0ZhLEdBQUcsRUFBRSxDQUFDO1FBQ0osTUFBTSxFQUFFYixzREFBWSxFQUFFO1FBQ3RCVSxVQUFVLEVBQUUsQ0FBQztVQUNYQyxXQUFXLEVBQUUsbUJBQW1CO1VBQ2hDLE1BQU0sRUFBRVgsc0RBQVksRUFBRTtVQUN0QmMsSUFBSSxFQUFFO1lBQ0pDLFFBQVEsRUFBRWQscUhBQWlDQTs7U0FFOUM7T0FDRjtLQUNGO0lBQ0RlLGdDQUFnQyxFQUFFOztDQUVyQztBQUNNLE1BQU1DLFFBQVEsR0FBVTtFQUM3QlgsTUFBTSxFQUFFQyxJQUFJLElBQUlYLDBGQUEwQixFQUFFO0VBQzVDWSxV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RUFBQSxHQUFBaEIsTUFBTSxDQUFDZCxVQUFVLGNBQUE4QixFQUFBLHVCQUFBQSxFQUFBLENBQUVaLElBQUk7SUFDMUJFLE1BQU0sRUFBRTtNQUNOQyxjQUFjLEVBQUUsb3RGQUFvdEY7TUFDcHVGLElBQUcsQ0FBQVUsRUFBQSxJQUFBQyxFQUFBLEdBQUFsQixNQUFNLENBQUNkLFVBQVUsY0FBQWdDLEVBQUEsdUJBQUFBLEVBQUEsQ0FBRWQsSUFBSSxjQUFBYSxFQUFBLHVCQUFBQSxFQUFBLENBQUVYLE1BQU07OztDQUd2QztBQUNETCxNQUFNLENBQUNmLFVBQVUsR0FBRztFQUNsQixHQUFHZSxNQUFNLENBQUNmLFVBQVU7RUFDcEJrQixJQUFJLEVBQUU7SUFDSixJQUFHLENBQUFlLEVBQUEsR0FBQWxCLE1BQU0sQ0FBQ2YsVUFBVSxjQUFBaUMsRUFBQSx1QkFBQUEsRUFBQSxDQUFFZixJQUFJO0lBQzFCRSxNQUFNLEVBQUU7TUFDTkMsY0FBYyxFQUFFLDRqQ0FBNGpDO01BQzVrQyxJQUFHLENBQUFhLEVBQUEsSUFBQUMsRUFBQSxHQUFBcEIsTUFBTSxDQUFDZixVQUFVLGNBQUFtQyxFQUFBLHVCQUFBQSxFQUFBLENBQUVqQixJQUFJLGNBQUFnQixFQUFBLHVCQUFBQSxFQUFBLENBQUVkLE1BQU07OztDQUd2QztBQUFDLE1BQUFnQixtQkFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL0BraWUtdG9vbHMvYm94ZWQtZXhwcmVzc2lvbi1jb21wb25lbnQvLi9zdG9yaWVzL2JveGVkRXhwcmVzc2lvbnMvUmVsYXRpb24vUmVsYXRpb24uc3Rvcmllcy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIExpY2Vuc2VkIHRvIHRoZSBBcGFjaGUgU29mdHdhcmUgRm91bmRhdGlvbiAoQVNGKSB1bmRlciBvbmVcbiAqIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiAgU2VlIHRoZSBOT1RJQ0UgZmlsZVxuICogZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb25cbiAqIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLiAgVGhlIEFTRiBsaWNlbnNlcyB0aGlzIGZpbGVcbiAqIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGVcbiAqIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuICogd2l0aCB0aGUgTGljZW5zZS4gIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsXG4gKiBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxuICogXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcbiAqIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZVxuICogc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9uc1xuICogdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHR5cGUgeyBNZXRhLCBTdG9yeU9iaiB9IGZyb20gXCJAc3Rvcnlib29rL3JlYWN0XCI7XG5pbXBvcnQgeyBCb3hlZEV4cHJlc3Npb25FZGl0b3IsIEJveGVkRXhwcmVzc2lvbkVkaXRvclByb3BzIH0gZnJvbSBcIi4uLy4uLy4uL3NyYy9Cb3hlZEV4cHJlc3Npb25FZGl0b3JcIjtcbmltcG9ydCB7IEJveGVkRXhwcmVzc2lvbkVkaXRvclN0b3J5LCBCb3hlZEV4cHJlc3Npb25FZGl0b3JTdG9yeUFyZ3MgfSBmcm9tIFwiLi4vLi4vYm94ZWRFeHByZXNzaW9uU3Rvcmllc1dyYXBwZXJcIjtcbmltcG9ydCB7IEJhc2UgYXMgRW1wdHlFeHByZXNzaW9uIH0gZnJvbSBcIi4uLy4uL21pc2MvRW1wdHkvRW1wdHlFeHByZXNzaW9uLnN0b3JpZXNcIjtcbmltcG9ydCB7IERtbkJ1aWx0SW5EYXRhVHlwZSwgZ2VuZXJhdGVVdWlkIH0gZnJvbSBcIi4uLy4uLy4uL3NyYy9hcGlcIjtcbmltcG9ydCB7IFJFTEFUSU9OX0VYUFJFU1NJT05fREVGQVVMVF9WQUxVRSB9IGZyb20gXCIuLi8uLi8uLi9zcmMvZXhwcmVzc2lvbnMvUmVsYXRpb25FeHByZXNzaW9uL1JlbGF0aW9uRXhwcmVzc2lvblwiO1xuXG4vLyBNb3JlIG9uIGhvdyB0byBzZXQgdXAgc3RvcmllcyBhdDogaHR0cHM6Ly9zdG9yeWJvb2suanMub3JnL2RvY3MvcmVhY3Qvd3JpdGluZy1zdG9yaWVzL2ludHJvZHVjdGlvbiNkZWZhdWx0LWV4cG9ydFxuY29uc3QgbWV0YTogTWV0YTxCb3hlZEV4cHJlc3Npb25FZGl0b3JQcm9wcz4gPSB7XG4gIHRpdGxlOiBcIkJveGVkIEV4cHJlc3Npb25zL1JlbGF0aW9uXCIsXG4gIGNvbXBvbmVudDogQm94ZWRFeHByZXNzaW9uRWRpdG9yLFxuICBpbmNsdWRlU3RvcmllczogL15bQS1aXS9cbn07XG5leHBvcnQgZGVmYXVsdCBtZXRhO1xudHlwZSBTdG9yeSA9IFN0b3J5T2JqPEJveGVkRXhwcmVzc2lvbkVkaXRvclN0b3J5QXJncz47XG5cbi8vIE1vcmUgb24gd3JpdGluZyBzdG9yaWVzIHdpdGggYXJnczogaHR0cHM6Ly9zdG9yeWJvb2suanMub3JnL2RvY3MvcmVhY3Qvd3JpdGluZy1zdG9yaWVzL2FyZ3NcbmV4cG9ydCBjb25zdCBCYXNlOiBTdG9yeSA9IHtcbiAgcmVuZGVyOiBhcmdzID0+IEJveGVkRXhwcmVzc2lvbkVkaXRvclN0b3J5KCksXG4gIHBhcmFtZXRlcnM6IHtcbiAgICBleGNsdWRlOiBbXCJkYXRhVHlwZXNcIiwgXCJiZWVHd3RTZXJ2aWNlXCIsIFwicG1tbERvY3VtZW50c1wiXVxuICB9LFxuICBhcmdzOiB7XG4gICAgLi4uRW1wdHlFeHByZXNzaW9uLmFyZ3MsXG4gICAgZXhwcmVzc2lvbjoge1xuICAgICAgX18kJGVsZW1lbnQ6IFwicmVsYXRpb25cIixcbiAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICAgIFwiQF9sYWJlbFwiOiBcIkV4cHJlc3Npb24gTmFtZVwiLFxuICAgICAgY29sdW1uOiBbe1xuICAgICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICAgIFwiQF9uYW1lXCI6IFwiY29sdW1uLTFcIlxuICAgICAgfV0sXG4gICAgICByb3c6IFt7XG4gICAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICAgICAgZXhwcmVzc2lvbjogW3tcbiAgICAgICAgICBfXyQkZWxlbWVudDogXCJsaXRlcmFsRXhwcmVzc2lvblwiLFxuICAgICAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICAgICAgICB0ZXh0OiB7XG4gICAgICAgICAgICBfXyQkdGV4dDogUkVMQVRJT05fRVhQUkVTU0lPTl9ERUZBVUxUX1ZBTFVFXG4gICAgICAgICAgfVxuICAgICAgICB9XVxuICAgICAgfV1cbiAgICB9LFxuICAgIGlzUmVzZXRTdXBwb3J0ZWRPblJvb3RFeHByZXNzaW9uOiB0cnVlXG4gIH1cbn07XG5leHBvcnQgY29uc3QgUmVhZG9ubHk6IFN0b3J5ID0ge1xuICByZW5kZXI6IGFyZ3MgPT4gQm94ZWRFeHByZXNzaW9uRWRpdG9yU3RvcnkoKSxcbiAgcGFyYW1ldGVyczoge1xuICAgIGV4Y2x1ZGU6IFtcImRhdGFUeXBlc1wiLCBcImJlZUd3dFNlcnZpY2VcIiwgXCJwbW1sRG9jdW1lbnRzXCJdXG4gIH0sXG4gIGFyZ3M6IHtcbiAgICAuLi5FbXB0eUV4cHJlc3Npb24uYXJncyxcbiAgICBleHByZXNzaW9uOiB7XG4gICAgICBfXyQkZWxlbWVudDogXCJyZWxhdGlvblwiLFxuICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgXCJAX2xhYmVsXCI6IFwiRXhwcmVzc2lvbiBOYW1lXCIsXG4gICAgICBjb2x1bW46IFt7XG4gICAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICAgICAgXCJAX25hbWVcIjogXCJjb2x1bW4tMVwiXG4gICAgICB9XSxcbiAgICAgIHJvdzogW3tcbiAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgICBleHByZXNzaW9uOiBbe1xuICAgICAgICAgIF9fJCRlbGVtZW50OiBcImxpdGVyYWxFeHByZXNzaW9uXCIsXG4gICAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgICAgIHRleHQ6IHtcbiAgICAgICAgICAgIF9fJCR0ZXh0OiBSRUxBVElPTl9FWFBSRVNTSU9OX0RFRkFVTFRfVkFMVUVcbiAgICAgICAgICB9XG4gICAgICAgIH1dXG4gICAgICB9XVxuICAgIH0sXG4gICAgaXNSZXNldFN1cHBvcnRlZE9uUm9vdEV4cHJlc3Npb246IHRydWUsXG4gICAgaXNSZWFkT25seTogdHJ1ZVxuICB9XG59O1xuZXhwb3J0IGNvbnN0IFBlb3BsZTogU3RvcnkgPSB7XG4gIHJlbmRlcjogYXJncyA9PiBCb3hlZEV4cHJlc3Npb25FZGl0b3JTdG9yeSgpLFxuICBwYXJhbWV0ZXJzOiB7XG4gICAgZXhjbHVkZTogW1wiZGF0YVR5cGVzXCIsIFwiYmVlR3d0U2VydmljZVwiLCBcInBtbWxEb2N1bWVudHNcIl1cbiAgfSxcbiAgYXJnczoge1xuICAgIC4uLkJhc2UuYXJncyxcbiAgICBleHByZXNzaW9uOiB7XG4gICAgICBfXyQkZWxlbWVudDogXCJyZWxhdGlvblwiLFxuICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgXCJAX2xhYmVsXCI6IFwiUGVvcGxlXCIsXG4gICAgICBcIkBfdHlwZVJlZlwiOiBcInRQZW9wbGVcIixcbiAgICAgIGNvbHVtbjogW3tcbiAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgICBcIkBfbmFtZVwiOiBcIk5hbWVcIixcbiAgICAgICAgXCJAX3R5cGVSZWZcIjogRG1uQnVpbHRJbkRhdGFUeXBlLlN0cmluZ1xuICAgICAgfSwge1xuICAgICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICAgIFwiQF9uYW1lXCI6IFwiQWdlXCIsXG4gICAgICAgIFwiQF90eXBlUmVmXCI6IERtbkJ1aWx0SW5EYXRhVHlwZS5OdW1iZXJcbiAgICAgIH0sIHtcbiAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgICBcIkBfbmFtZVwiOiBcIkNvdW50cnlcIixcbiAgICAgICAgXCJAX3R5cGVSZWZcIjogRG1uQnVpbHRJbkRhdGFUeXBlLlN0cmluZ1xuICAgICAgfV0sXG4gICAgICByb3c6IFt7XG4gICAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICAgICAgZXhwcmVzc2lvbjogW3tcbiAgICAgICAgICBfXyQkZWxlbWVudDogXCJsaXRlcmFsRXhwcmVzc2lvblwiLFxuICAgICAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICAgICAgICB0ZXh0OiB7XG4gICAgICAgICAgICBfXyQkdGV4dDogJ1wiTHVpelwiJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgIF9fJCRlbGVtZW50OiBcImxpdGVyYWxFeHByZXNzaW9uXCIsXG4gICAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgICAgIHRleHQ6IHtcbiAgICAgICAgICAgIF9fJCR0ZXh0OiBcIjMwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICBfXyQkZWxlbWVudDogXCJsaXRlcmFsRXhwcmVzc2lvblwiLFxuICAgICAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICAgICAgICB0ZXh0OiB7XG4gICAgICAgICAgICBfXyQkdGV4dDogJ1wiQnJhemlsXCInXG4gICAgICAgICAgfVxuICAgICAgICB9XVxuICAgICAgfSwge1xuICAgICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICAgIGV4cHJlc3Npb246IFt7XG4gICAgICAgICAgX18kJGVsZW1lbnQ6IFwibGl0ZXJhbEV4cHJlc3Npb25cIixcbiAgICAgICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICAgICAgdGV4dDoge1xuICAgICAgICAgICAgX18kJHRleHQ6ICdcIlRpYWdvXCInXG4gICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgX18kJGVsZW1lbnQ6IFwibGl0ZXJhbEV4cHJlc3Npb25cIixcbiAgICAgICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICAgICAgdGV4dDoge1xuICAgICAgICAgICAgX18kJHRleHQ6IFwiMjlcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgIF9fJCRlbGVtZW50OiBcImxpdGVyYWxFeHByZXNzaW9uXCIsXG4gICAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgICAgIHRleHQ6IHtcbiAgICAgICAgICAgIF9fJCR0ZXh0OiAnXCJVU0FcIidcbiAgICAgICAgICB9XG4gICAgICAgIH1dXG4gICAgICB9XVxuICAgIH1cbiAgfVxufTtcbmV4cG9ydCBjb25zdCBCaWdnZXI6IFN0b3J5ID0ge1xuICByZW5kZXI6IGFyZ3MgPT4gQm94ZWRFeHByZXNzaW9uRWRpdG9yU3RvcnkoKSxcbiAgcGFyYW1ldGVyczoge1xuICAgIGV4Y2x1ZGU6IFtcImRhdGFUeXBlc1wiLCBcImJlZUd3dFNlcnZpY2VcIiwgXCJwbW1sRG9jdW1lbnRzXCJdXG4gIH0sXG4gIGFyZ3M6IHtcbiAgICAuLi5CYXNlLmFyZ3MsXG4gICAgZXhwcmVzc2lvbjoge1xuICAgICAgX18kJGVsZW1lbnQ6IFwicmVsYXRpb25cIixcbiAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICAgIFwiQF9sYWJlbFwiOiBcIkV4cHJlc3Npb24gTmFtZVwiLFxuICAgICAgY29sdW1uOiBbe1xuICAgICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICAgIFwiQF9uYW1lXCI6IFwiY29sdW1uLTFcIlxuICAgICAgfSwge1xuICAgICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICAgIFwiQF9uYW1lXCI6IFwiY29sdW1uLTJcIlxuICAgICAgfSwge1xuICAgICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICAgIFwiQF9uYW1lXCI6IFwiY29sdW1uLTNcIlxuICAgICAgfSwge1xuICAgICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICAgIFwiQF9uYW1lXCI6IFwiY29sdW1uLTRcIlxuICAgICAgfV0sXG4gICAgICByb3c6IFt7XG4gICAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICAgICAgZXhwcmVzc2lvbjogW3tcbiAgICAgICAgICBfXyQkZWxlbWVudDogXCJsaXRlcmFsRXhwcmVzc2lvblwiLFxuICAgICAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICAgICAgICB0ZXh0OiB7XG4gICAgICAgICAgICBfXyQkdGV4dDogXCJcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgIF9fJCRlbGVtZW50OiBcImxpdGVyYWxFeHByZXNzaW9uXCIsXG4gICAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgICAgIHRleHQ6IHtcbiAgICAgICAgICAgIF9fJCR0ZXh0OiBcIlwiXG4gICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgX18kJGVsZW1lbnQ6IFwibGl0ZXJhbEV4cHJlc3Npb25cIixcbiAgICAgICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICAgICAgdGV4dDoge1xuICAgICAgICAgICAgX18kJHRleHQ6IFwiXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICBfXyQkZWxlbWVudDogXCJsaXRlcmFsRXhwcmVzc2lvblwiLFxuICAgICAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICAgICAgICB0ZXh0OiB7XG4gICAgICAgICAgICBfXyQkdGV4dDogXCJcIlxuICAgICAgICAgIH1cbiAgICAgICAgfV1cbiAgICAgIH0sIHtcbiAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgICBleHByZXNzaW9uOiBbe1xuICAgICAgICAgIF9fJCRlbGVtZW50OiBcImxpdGVyYWxFeHByZXNzaW9uXCIsXG4gICAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgICAgIHRleHQ6IHtcbiAgICAgICAgICAgIF9fJCR0ZXh0OiBcIlwiXG4gICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgX18kJGVsZW1lbnQ6IFwibGl0ZXJhbEV4cHJlc3Npb25cIixcbiAgICAgICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICAgICAgdGV4dDoge1xuICAgICAgICAgICAgX18kJHRleHQ6IFwiXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICBfXyQkZWxlbWVudDogXCJsaXRlcmFsRXhwcmVzc2lvblwiLFxuICAgICAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICAgICAgICB0ZXh0OiB7XG4gICAgICAgICAgICBfXyQkdGV4dDogXCJcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgIF9fJCRlbGVtZW50OiBcImxpdGVyYWxFeHByZXNzaW9uXCIsXG4gICAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgICAgIHRleHQ6IHtcbiAgICAgICAgICAgIF9fJCR0ZXh0OiBcIlwiXG4gICAgICAgICAgfVxuICAgICAgICB9XVxuICAgICAgfSwge1xuICAgICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICAgIGV4cHJlc3Npb246IFt7XG4gICAgICAgICAgX18kJGVsZW1lbnQ6IFwibGl0ZXJhbEV4cHJlc3Npb25cIixcbiAgICAgICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICAgICAgdGV4dDoge1xuICAgICAgICAgICAgX18kJHRleHQ6IFwiXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICBfXyQkZWxlbWVudDogXCJsaXRlcmFsRXhwcmVzc2lvblwiLFxuICAgICAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICAgICAgICB0ZXh0OiB7XG4gICAgICAgICAgICBfXyQkdGV4dDogXCJcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgIF9fJCRlbGVtZW50OiBcImxpdGVyYWxFeHByZXNzaW9uXCIsXG4gICAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgICAgIHRleHQ6IHtcbiAgICAgICAgICAgIF9fJCR0ZXh0OiBcIlwiXG4gICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgX18kJGVsZW1lbnQ6IFwibGl0ZXJhbEV4cHJlc3Npb25cIixcbiAgICAgICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICAgICAgdGV4dDoge1xuICAgICAgICAgICAgX18kJHRleHQ6IFwiXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1dXG4gICAgICB9XVxuICAgIH1cbiAgfVxufTtcblxuLy8gTW9yZSBvbiB3cml0aW5nIHN0b3JpZXMgd2l0aCBhcmdzOiBodHRwczovL3N0b3J5Ym9vay5qcy5vcmcvZG9jcy9yZWFjdC93cml0aW5nLXN0b3JpZXMvYXJnc1xuZXhwb3J0IGNvbnN0IE5lc3RlZDogU3RvcnkgPSB7XG4gIHJlbmRlcjogYXJncyA9PiBCb3hlZEV4cHJlc3Npb25FZGl0b3JTdG9yeSgpLFxuICBwYXJhbWV0ZXJzOiB7XG4gICAgZXhjbHVkZTogW1wiZGF0YVR5cGVzXCIsIFwiYmVlR3d0U2VydmljZVwiLCBcInBtbWxEb2N1bWVudHNcIl1cbiAgfSxcbiAgYXJnczoge1xuICAgIC4uLkVtcHR5RXhwcmVzc2lvbi5hcmdzLFxuICAgIGV4cHJlc3Npb246IHtcbiAgICAgIF9fJCRlbGVtZW50OiBcImNvbnRleHRcIixcbiAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICAgIFwiQF9sYWJlbFwiOiBcIkV4cHJlc3Npb24gTmFtZVwiLFxuICAgICAgY29udGV4dEVudHJ5OiBbe1xuICAgICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICAgIHZhcmlhYmxlOiB7XG4gICAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgICAgIFwiQF9uYW1lXCI6IFwiQ29udGV4dEVudHJ5LTFcIlxuICAgICAgICB9LFxuICAgICAgICBleHByZXNzaW9uOiB7XG4gICAgICAgICAgX18kJGVsZW1lbnQ6IFwicmVsYXRpb25cIixcbiAgICAgICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICAgICAgY29sdW1uOiBbe1xuICAgICAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgICAgICAgXCJAX25hbWVcIjogXCJjb2x1bW4tMVwiXG4gICAgICAgICAgfV0sXG4gICAgICAgICAgcm93OiBbe1xuICAgICAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgICAgICAgZXhwcmVzc2lvbjogW3tcbiAgICAgICAgICAgICAgX18kJGVsZW1lbnQ6IFwibGl0ZXJhbEV4cHJlc3Npb25cIixcbiAgICAgICAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgICAgICAgICB0ZXh0OiB7XG4gICAgICAgICAgICAgICAgX18kJHRleHQ6IFJFTEFUSU9OX0VYUFJFU1NJT05fREVGQVVMVF9WQUxVRVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XVxuICAgICAgICAgIH1dXG4gICAgICAgIH1cbiAgICAgIH1dXG4gICAgfSxcbiAgICBpc1Jlc2V0U3VwcG9ydGVkT25Sb290RXhwcmVzc2lvbjogZmFsc2VcbiAgfVxufTtcbkJhc2UucGFyYW1ldGVycyA9IHtcbiAgLi4uQmFzZS5wYXJhbWV0ZXJzLFxuICBkb2NzOiB7XG4gICAgLi4uQmFzZS5wYXJhbWV0ZXJzPy5kb2NzLFxuICAgIHNvdXJjZToge1xuICAgICAgb3JpZ2luYWxTb3VyY2U6IFwie1xcbiAgcmVuZGVyOiBhcmdzID0+IEJveGVkRXhwcmVzc2lvbkVkaXRvclN0b3J5KCksXFxuICBwYXJhbWV0ZXJzOiB7XFxuICAgIGV4Y2x1ZGU6IFtcXFwiZGF0YVR5cGVzXFxcIiwgXFxcImJlZUd3dFNlcnZpY2VcXFwiLCBcXFwicG1tbERvY3VtZW50c1xcXCJdXFxuICB9LFxcbiAgYXJnczoge1xcbiAgICAuLi5FbXB0eUV4cHJlc3Npb24uYXJncyxcXG4gICAgZXhwcmVzc2lvbjoge1xcbiAgICAgIF9fJCRlbGVtZW50OiBcXFwicmVsYXRpb25cXFwiLFxcbiAgICAgIFxcXCJAX2lkXFxcIjogZ2VuZXJhdGVVdWlkKCksXFxuICAgICAgXFxcIkBfbGFiZWxcXFwiOiBcXFwiRXhwcmVzc2lvbiBOYW1lXFxcIixcXG4gICAgICBjb2x1bW46IFt7XFxuICAgICAgICBcXFwiQF9pZFxcXCI6IGdlbmVyYXRlVXVpZCgpLFxcbiAgICAgICAgXFxcIkBfbmFtZVxcXCI6IFxcXCJjb2x1bW4tMVxcXCJcXG4gICAgICB9XSxcXG4gICAgICByb3c6IFt7XFxuICAgICAgICBcXFwiQF9pZFxcXCI6IGdlbmVyYXRlVXVpZCgpLFxcbiAgICAgICAgZXhwcmVzc2lvbjogW3tcXG4gICAgICAgICAgX18kJGVsZW1lbnQ6IFxcXCJsaXRlcmFsRXhwcmVzc2lvblxcXCIsXFxuICAgICAgICAgIFxcXCJAX2lkXFxcIjogZ2VuZXJhdGVVdWlkKCksXFxuICAgICAgICAgIHRleHQ6IHtcXG4gICAgICAgICAgICBfXyQkdGV4dDogUkVMQVRJT05fRVhQUkVTU0lPTl9ERUZBVUxUX1ZBTFVFXFxuICAgICAgICAgIH1cXG4gICAgICAgIH1dXFxuICAgICAgfV1cXG4gICAgfSxcXG4gICAgaXNSZXNldFN1cHBvcnRlZE9uUm9vdEV4cHJlc3Npb246IHRydWVcXG4gIH1cXG59XCIsXG4gICAgICAuLi5CYXNlLnBhcmFtZXRlcnM/LmRvY3M/LnNvdXJjZVxuICAgIH1cbiAgfVxufTtcblJlYWRvbmx5LnBhcmFtZXRlcnMgPSB7XG4gIC4uLlJlYWRvbmx5LnBhcmFtZXRlcnMsXG4gIGRvY3M6IHtcbiAgICAuLi5SZWFkb25seS5wYXJhbWV0ZXJzPy5kb2NzLFxuICAgIHNvdXJjZToge1xuICAgICAgb3JpZ2luYWxTb3VyY2U6IFwie1xcbiAgcmVuZGVyOiBhcmdzID0+IEJveGVkRXhwcmVzc2lvbkVkaXRvclN0b3J5KCksXFxuICBwYXJhbWV0ZXJzOiB7XFxuICAgIGV4Y2x1ZGU6IFtcXFwiZGF0YVR5cGVzXFxcIiwgXFxcImJlZUd3dFNlcnZpY2VcXFwiLCBcXFwicG1tbERvY3VtZW50c1xcXCJdXFxuICB9LFxcbiAgYXJnczoge1xcbiAgICAuLi5FbXB0eUV4cHJlc3Npb24uYXJncyxcXG4gICAgZXhwcmVzc2lvbjoge1xcbiAgICAgIF9fJCRlbGVtZW50OiBcXFwicmVsYXRpb25cXFwiLFxcbiAgICAgIFxcXCJAX2lkXFxcIjogZ2VuZXJhdGVVdWlkKCksXFxuICAgICAgXFxcIkBfbGFiZWxcXFwiOiBcXFwiRXhwcmVzc2lvbiBOYW1lXFxcIixcXG4gICAgICBjb2x1bW46IFt7XFxuICAgICAgICBcXFwiQF9pZFxcXCI6IGdlbmVyYXRlVXVpZCgpLFxcbiAgICAgICAgXFxcIkBfbmFtZVxcXCI6IFxcXCJjb2x1bW4tMVxcXCJcXG4gICAgICB9XSxcXG4gICAgICByb3c6IFt7XFxuICAgICAgICBcXFwiQF9pZFxcXCI6IGdlbmVyYXRlVXVpZCgpLFxcbiAgICAgICAgZXhwcmVzc2lvbjogW3tcXG4gICAgICAgICAgX18kJGVsZW1lbnQ6IFxcXCJsaXRlcmFsRXhwcmVzc2lvblxcXCIsXFxuICAgICAgICAgIFxcXCJAX2lkXFxcIjogZ2VuZXJhdGVVdWlkKCksXFxuICAgICAgICAgIHRleHQ6IHtcXG4gICAgICAgICAgICBfXyQkdGV4dDogUkVMQVRJT05fRVhQUkVTU0lPTl9ERUZBVUxUX1ZBTFVFXFxuICAgICAgICAgIH1cXG4gICAgICAgIH1dXFxuICAgICAgfV1cXG4gICAgfSxcXG4gICAgaXNSZXNldFN1cHBvcnRlZE9uUm9vdEV4cHJlc3Npb246IHRydWUsXFxuICAgIGlzUmVhZE9ubHk6IHRydWVcXG4gIH1cXG59XCIsXG4gICAgICAuLi5SZWFkb25seS5wYXJhbWV0ZXJzPy5kb2NzPy5zb3VyY2VcbiAgICB9XG4gIH1cbn07XG5QZW9wbGUucGFyYW1ldGVycyA9IHtcbiAgLi4uUGVvcGxlLnBhcmFtZXRlcnMsXG4gIGRvY3M6IHtcbiAgICAuLi5QZW9wbGUucGFyYW1ldGVycz8uZG9jcyxcbiAgICBzb3VyY2U6IHtcbiAgICAgIG9yaWdpbmFsU291cmNlOiBcIntcXG4gIHJlbmRlcjogYXJncyA9PiBCb3hlZEV4cHJlc3Npb25FZGl0b3JTdG9yeSgpLFxcbiAgcGFyYW1ldGVyczoge1xcbiAgICBleGNsdWRlOiBbXFxcImRhdGFUeXBlc1xcXCIsIFxcXCJiZWVHd3RTZXJ2aWNlXFxcIiwgXFxcInBtbWxEb2N1bWVudHNcXFwiXVxcbiAgfSxcXG4gIGFyZ3M6IHtcXG4gICAgLi4uQmFzZS5hcmdzLFxcbiAgICBleHByZXNzaW9uOiB7XFxuICAgICAgX18kJGVsZW1lbnQ6IFxcXCJyZWxhdGlvblxcXCIsXFxuICAgICAgXFxcIkBfaWRcXFwiOiBnZW5lcmF0ZVV1aWQoKSxcXG4gICAgICBcXFwiQF9sYWJlbFxcXCI6IFxcXCJQZW9wbGVcXFwiLFxcbiAgICAgIFxcXCJAX3R5cGVSZWZcXFwiOiBcXFwidFBlb3BsZVxcXCIsXFxuICAgICAgY29sdW1uOiBbe1xcbiAgICAgICAgXFxcIkBfaWRcXFwiOiBnZW5lcmF0ZVV1aWQoKSxcXG4gICAgICAgIFxcXCJAX25hbWVcXFwiOiBcXFwiTmFtZVxcXCIsXFxuICAgICAgICBcXFwiQF90eXBlUmVmXFxcIjogRG1uQnVpbHRJbkRhdGFUeXBlLlN0cmluZ1xcbiAgICAgIH0sIHtcXG4gICAgICAgIFxcXCJAX2lkXFxcIjogZ2VuZXJhdGVVdWlkKCksXFxuICAgICAgICBcXFwiQF9uYW1lXFxcIjogXFxcIkFnZVxcXCIsXFxuICAgICAgICBcXFwiQF90eXBlUmVmXFxcIjogRG1uQnVpbHRJbkRhdGFUeXBlLk51bWJlclxcbiAgICAgIH0sIHtcXG4gICAgICAgIFxcXCJAX2lkXFxcIjogZ2VuZXJhdGVVdWlkKCksXFxuICAgICAgICBcXFwiQF9uYW1lXFxcIjogXFxcIkNvdW50cnlcXFwiLFxcbiAgICAgICAgXFxcIkBfdHlwZVJlZlxcXCI6IERtbkJ1aWx0SW5EYXRhVHlwZS5TdHJpbmdcXG4gICAgICB9XSxcXG4gICAgICByb3c6IFt7XFxuICAgICAgICBcXFwiQF9pZFxcXCI6IGdlbmVyYXRlVXVpZCgpLFxcbiAgICAgICAgZXhwcmVzc2lvbjogW3tcXG4gICAgICAgICAgX18kJGVsZW1lbnQ6IFxcXCJsaXRlcmFsRXhwcmVzc2lvblxcXCIsXFxuICAgICAgICAgIFxcXCJAX2lkXFxcIjogZ2VuZXJhdGVVdWlkKCksXFxuICAgICAgICAgIHRleHQ6IHtcXG4gICAgICAgICAgICBfXyQkdGV4dDogJ1xcXCJMdWl6XFxcIidcXG4gICAgICAgICAgfVxcbiAgICAgICAgfSwge1xcbiAgICAgICAgICBfXyQkZWxlbWVudDogXFxcImxpdGVyYWxFeHByZXNzaW9uXFxcIixcXG4gICAgICAgICAgXFxcIkBfaWRcXFwiOiBnZW5lcmF0ZVV1aWQoKSxcXG4gICAgICAgICAgdGV4dDoge1xcbiAgICAgICAgICAgIF9fJCR0ZXh0OiBcXFwiMzBcXFwiXFxuICAgICAgICAgIH1cXG4gICAgICAgIH0sIHtcXG4gICAgICAgICAgX18kJGVsZW1lbnQ6IFxcXCJsaXRlcmFsRXhwcmVzc2lvblxcXCIsXFxuICAgICAgICAgIFxcXCJAX2lkXFxcIjogZ2VuZXJhdGVVdWlkKCksXFxuICAgICAgICAgIHRleHQ6IHtcXG4gICAgICAgICAgICBfXyQkdGV4dDogJ1xcXCJCcmF6aWxcXFwiJ1xcbiAgICAgICAgICB9XFxuICAgICAgICB9XVxcbiAgICAgIH0sIHtcXG4gICAgICAgIFxcXCJAX2lkXFxcIjogZ2VuZXJhdGVVdWlkKCksXFxuICAgICAgICBleHByZXNzaW9uOiBbe1xcbiAgICAgICAgICBfXyQkZWxlbWVudDogXFxcImxpdGVyYWxFeHByZXNzaW9uXFxcIixcXG4gICAgICAgICAgXFxcIkBfaWRcXFwiOiBnZW5lcmF0ZVV1aWQoKSxcXG4gICAgICAgICAgdGV4dDoge1xcbiAgICAgICAgICAgIF9fJCR0ZXh0OiAnXFxcIlRpYWdvXFxcIidcXG4gICAgICAgICAgfVxcbiAgICAgICAgfSwge1xcbiAgICAgICAgICBfXyQkZWxlbWVudDogXFxcImxpdGVyYWxFeHByZXNzaW9uXFxcIixcXG4gICAgICAgICAgXFxcIkBfaWRcXFwiOiBnZW5lcmF0ZVV1aWQoKSxcXG4gICAgICAgICAgdGV4dDoge1xcbiAgICAgICAgICAgIF9fJCR0ZXh0OiBcXFwiMjlcXFwiXFxuICAgICAgICAgIH1cXG4gICAgICAgIH0sIHtcXG4gICAgICAgICAgX18kJGVsZW1lbnQ6IFxcXCJsaXRlcmFsRXhwcmVzc2lvblxcXCIsXFxuICAgICAgICAgIFxcXCJAX2lkXFxcIjogZ2VuZXJhdGVVdWlkKCksXFxuICAgICAgICAgIHRleHQ6IHtcXG4gICAgICAgICAgICBfXyQkdGV4dDogJ1xcXCJVU0FcXFwiJ1xcbiAgICAgICAgICB9XFxuICAgICAgICB9XVxcbiAgICAgIH1dXFxuICAgIH1cXG4gIH1cXG59XCIsXG4gICAgICAuLi5QZW9wbGUucGFyYW1ldGVycz8uZG9jcz8uc291cmNlXG4gICAgfVxuICB9XG59O1xuQmlnZ2VyLnBhcmFtZXRlcnMgPSB7XG4gIC4uLkJpZ2dlci5wYXJhbWV0ZXJzLFxuICBkb2NzOiB7XG4gICAgLi4uQmlnZ2VyLnBhcmFtZXRlcnM/LmRvY3MsXG4gICAgc291cmNlOiB7XG4gICAgICBvcmlnaW5hbFNvdXJjZTogXCJ7XFxuICByZW5kZXI6IGFyZ3MgPT4gQm94ZWRFeHByZXNzaW9uRWRpdG9yU3RvcnkoKSxcXG4gIHBhcmFtZXRlcnM6IHtcXG4gICAgZXhjbHVkZTogW1xcXCJkYXRhVHlwZXNcXFwiLCBcXFwiYmVlR3d0U2VydmljZVxcXCIsIFxcXCJwbW1sRG9jdW1lbnRzXFxcIl1cXG4gIH0sXFxuICBhcmdzOiB7XFxuICAgIC4uLkJhc2UuYXJncyxcXG4gICAgZXhwcmVzc2lvbjoge1xcbiAgICAgIF9fJCRlbGVtZW50OiBcXFwicmVsYXRpb25cXFwiLFxcbiAgICAgIFxcXCJAX2lkXFxcIjogZ2VuZXJhdGVVdWlkKCksXFxuICAgICAgXFxcIkBfbGFiZWxcXFwiOiBcXFwiRXhwcmVzc2lvbiBOYW1lXFxcIixcXG4gICAgICBjb2x1bW46IFt7XFxuICAgICAgICBcXFwiQF9pZFxcXCI6IGdlbmVyYXRlVXVpZCgpLFxcbiAgICAgICAgXFxcIkBfbmFtZVxcXCI6IFxcXCJjb2x1bW4tMVxcXCJcXG4gICAgICB9LCB7XFxuICAgICAgICBcXFwiQF9pZFxcXCI6IGdlbmVyYXRlVXVpZCgpLFxcbiAgICAgICAgXFxcIkBfbmFtZVxcXCI6IFxcXCJjb2x1bW4tMlxcXCJcXG4gICAgICB9LCB7XFxuICAgICAgICBcXFwiQF9pZFxcXCI6IGdlbmVyYXRlVXVpZCgpLFxcbiAgICAgICAgXFxcIkBfbmFtZVxcXCI6IFxcXCJjb2x1bW4tM1xcXCJcXG4gICAgICB9LCB7XFxuICAgICAgICBcXFwiQF9pZFxcXCI6IGdlbmVyYXRlVXVpZCgpLFxcbiAgICAgICAgXFxcIkBfbmFtZVxcXCI6IFxcXCJjb2x1bW4tNFxcXCJcXG4gICAgICB9XSxcXG4gICAgICByb3c6IFt7XFxuICAgICAgICBcXFwiQF9pZFxcXCI6IGdlbmVyYXRlVXVpZCgpLFxcbiAgICAgICAgZXhwcmVzc2lvbjogW3tcXG4gICAgICAgICAgX18kJGVsZW1lbnQ6IFxcXCJsaXRlcmFsRXhwcmVzc2lvblxcXCIsXFxuICAgICAgICAgIFxcXCJAX2lkXFxcIjogZ2VuZXJhdGVVdWlkKCksXFxuICAgICAgICAgIHRleHQ6IHtcXG4gICAgICAgICAgICBfXyQkdGV4dDogXFxcIlxcXCJcXG4gICAgICAgICAgfVxcbiAgICAgICAgfSwge1xcbiAgICAgICAgICBfXyQkZWxlbWVudDogXFxcImxpdGVyYWxFeHByZXNzaW9uXFxcIixcXG4gICAgICAgICAgXFxcIkBfaWRcXFwiOiBnZW5lcmF0ZVV1aWQoKSxcXG4gICAgICAgICAgdGV4dDoge1xcbiAgICAgICAgICAgIF9fJCR0ZXh0OiBcXFwiXFxcIlxcbiAgICAgICAgICB9XFxuICAgICAgICB9LCB7XFxuICAgICAgICAgIF9fJCRlbGVtZW50OiBcXFwibGl0ZXJhbEV4cHJlc3Npb25cXFwiLFxcbiAgICAgICAgICBcXFwiQF9pZFxcXCI6IGdlbmVyYXRlVXVpZCgpLFxcbiAgICAgICAgICB0ZXh0OiB7XFxuICAgICAgICAgICAgX18kJHRleHQ6IFxcXCJcXFwiXFxuICAgICAgICAgIH1cXG4gICAgICAgIH0sIHtcXG4gICAgICAgICAgX18kJGVsZW1lbnQ6IFxcXCJsaXRlcmFsRXhwcmVzc2lvblxcXCIsXFxuICAgICAgICAgIFxcXCJAX2lkXFxcIjogZ2VuZXJhdGVVdWlkKCksXFxuICAgICAgICAgIHRleHQ6IHtcXG4gICAgICAgICAgICBfXyQkdGV4dDogXFxcIlxcXCJcXG4gICAgICAgICAgfVxcbiAgICAgICAgfV1cXG4gICAgICB9LCB7XFxuICAgICAgICBcXFwiQF9pZFxcXCI6IGdlbmVyYXRlVXVpZCgpLFxcbiAgICAgICAgZXhwcmVzc2lvbjogW3tcXG4gICAgICAgICAgX18kJGVsZW1lbnQ6IFxcXCJsaXRlcmFsRXhwcmVzc2lvblxcXCIsXFxuICAgICAgICAgIFxcXCJAX2lkXFxcIjogZ2VuZXJhdGVVdWlkKCksXFxuICAgICAgICAgIHRleHQ6IHtcXG4gICAgICAgICAgICBfXyQkdGV4dDogXFxcIlxcXCJcXG4gICAgICAgICAgfVxcbiAgICAgICAgfSwge1xcbiAgICAgICAgICBfXyQkZWxlbWVudDogXFxcImxpdGVyYWxFeHByZXNzaW9uXFxcIixcXG4gICAgICAgICAgXFxcIkBfaWRcXFwiOiBnZW5lcmF0ZVV1aWQoKSxcXG4gICAgICAgICAgdGV4dDoge1xcbiAgICAgICAgICAgIF9fJCR0ZXh0OiBcXFwiXFxcIlxcbiAgICAgICAgICB9XFxuICAgICAgICB9LCB7XFxuICAgICAgICAgIF9fJCRlbGVtZW50OiBcXFwibGl0ZXJhbEV4cHJlc3Npb25cXFwiLFxcbiAgICAgICAgICBcXFwiQF9pZFxcXCI6IGdlbmVyYXRlVXVpZCgpLFxcbiAgICAgICAgICB0ZXh0OiB7XFxuICAgICAgICAgICAgX18kJHRleHQ6IFxcXCJcXFwiXFxuICAgICAgICAgIH1cXG4gICAgICAgIH0sIHtcXG4gICAgICAgICAgX18kJGVsZW1lbnQ6IFxcXCJsaXRlcmFsRXhwcmVzc2lvblxcXCIsXFxuICAgICAgICAgIFxcXCJAX2lkXFxcIjogZ2VuZXJhdGVVdWlkKCksXFxuICAgICAgICAgIHRleHQ6IHtcXG4gICAgICAgICAgICBfXyQkdGV4dDogXFxcIlxcXCJcXG4gICAgICAgICAgfVxcbiAgICAgICAgfV1cXG4gICAgICB9LCB7XFxuICAgICAgICBcXFwiQF9pZFxcXCI6IGdlbmVyYXRlVXVpZCgpLFxcbiAgICAgICAgZXhwcmVzc2lvbjogW3tcXG4gICAgICAgICAgX18kJGVsZW1lbnQ6IFxcXCJsaXRlcmFsRXhwcmVzc2lvblxcXCIsXFxuICAgICAgICAgIFxcXCJAX2lkXFxcIjogZ2VuZXJhdGVVdWlkKCksXFxuICAgICAgICAgIHRleHQ6IHtcXG4gICAgICAgICAgICBfXyQkdGV4dDogXFxcIlxcXCJcXG4gICAgICAgICAgfVxcbiAgICAgICAgfSwge1xcbiAgICAgICAgICBfXyQkZWxlbWVudDogXFxcImxpdGVyYWxFeHByZXNzaW9uXFxcIixcXG4gICAgICAgICAgXFxcIkBfaWRcXFwiOiBnZW5lcmF0ZVV1aWQoKSxcXG4gICAgICAgICAgdGV4dDoge1xcbiAgICAgICAgICAgIF9fJCR0ZXh0OiBcXFwiXFxcIlxcbiAgICAgICAgICB9XFxuICAgICAgICB9LCB7XFxuICAgICAgICAgIF9fJCRlbGVtZW50OiBcXFwibGl0ZXJhbEV4cHJlc3Npb25cXFwiLFxcbiAgICAgICAgICBcXFwiQF9pZFxcXCI6IGdlbmVyYXRlVXVpZCgpLFxcbiAgICAgICAgICB0ZXh0OiB7XFxuICAgICAgICAgICAgX18kJHRleHQ6IFxcXCJcXFwiXFxuICAgICAgICAgIH1cXG4gICAgICAgIH0sIHtcXG4gICAgICAgICAgX18kJGVsZW1lbnQ6IFxcXCJsaXRlcmFsRXhwcmVzc2lvblxcXCIsXFxuICAgICAgICAgIFxcXCJAX2lkXFxcIjogZ2VuZXJhdGVVdWlkKCksXFxuICAgICAgICAgIHRleHQ6IHtcXG4gICAgICAgICAgICBfXyQkdGV4dDogXFxcIlxcXCJcXG4gICAgICAgICAgfVxcbiAgICAgICAgfV1cXG4gICAgICB9XVxcbiAgICB9XFxuICB9XFxufVwiLFxuICAgICAgLi4uQmlnZ2VyLnBhcmFtZXRlcnM/LmRvY3M/LnNvdXJjZVxuICAgIH1cbiAgfVxufTtcbk5lc3RlZC5wYXJhbWV0ZXJzID0ge1xuICAuLi5OZXN0ZWQucGFyYW1ldGVycyxcbiAgZG9jczoge1xuICAgIC4uLk5lc3RlZC5wYXJhbWV0ZXJzPy5kb2NzLFxuICAgIHNvdXJjZToge1xuICAgICAgb3JpZ2luYWxTb3VyY2U6IFwie1xcbiAgcmVuZGVyOiBhcmdzID0+IEJveGVkRXhwcmVzc2lvbkVkaXRvclN0b3J5KCksXFxuICBwYXJhbWV0ZXJzOiB7XFxuICAgIGV4Y2x1ZGU6IFtcXFwiZGF0YVR5cGVzXFxcIiwgXFxcImJlZUd3dFNlcnZpY2VcXFwiLCBcXFwicG1tbERvY3VtZW50c1xcXCJdXFxuICB9LFxcbiAgYXJnczoge1xcbiAgICAuLi5FbXB0eUV4cHJlc3Npb24uYXJncyxcXG4gICAgZXhwcmVzc2lvbjoge1xcbiAgICAgIF9fJCRlbGVtZW50OiBcXFwiY29udGV4dFxcXCIsXFxuICAgICAgXFxcIkBfaWRcXFwiOiBnZW5lcmF0ZVV1aWQoKSxcXG4gICAgICBcXFwiQF9sYWJlbFxcXCI6IFxcXCJFeHByZXNzaW9uIE5hbWVcXFwiLFxcbiAgICAgIGNvbnRleHRFbnRyeTogW3tcXG4gICAgICAgIFxcXCJAX2lkXFxcIjogZ2VuZXJhdGVVdWlkKCksXFxuICAgICAgICB2YXJpYWJsZToge1xcbiAgICAgICAgICBcXFwiQF9pZFxcXCI6IGdlbmVyYXRlVXVpZCgpLFxcbiAgICAgICAgICBcXFwiQF9uYW1lXFxcIjogXFxcIkNvbnRleHRFbnRyeS0xXFxcIlxcbiAgICAgICAgfSxcXG4gICAgICAgIGV4cHJlc3Npb246IHtcXG4gICAgICAgICAgX18kJGVsZW1lbnQ6IFxcXCJyZWxhdGlvblxcXCIsXFxuICAgICAgICAgIFxcXCJAX2lkXFxcIjogZ2VuZXJhdGVVdWlkKCksXFxuICAgICAgICAgIGNvbHVtbjogW3tcXG4gICAgICAgICAgICBcXFwiQF9pZFxcXCI6IGdlbmVyYXRlVXVpZCgpLFxcbiAgICAgICAgICAgIFxcXCJAX25hbWVcXFwiOiBcXFwiY29sdW1uLTFcXFwiXFxuICAgICAgICAgIH1dLFxcbiAgICAgICAgICByb3c6IFt7XFxuICAgICAgICAgICAgXFxcIkBfaWRcXFwiOiBnZW5lcmF0ZVV1aWQoKSxcXG4gICAgICAgICAgICBleHByZXNzaW9uOiBbe1xcbiAgICAgICAgICAgICAgX18kJGVsZW1lbnQ6IFxcXCJsaXRlcmFsRXhwcmVzc2lvblxcXCIsXFxuICAgICAgICAgICAgICBcXFwiQF9pZFxcXCI6IGdlbmVyYXRlVXVpZCgpLFxcbiAgICAgICAgICAgICAgdGV4dDoge1xcbiAgICAgICAgICAgICAgICBfXyQkdGV4dDogUkVMQVRJT05fRVhQUkVTU0lPTl9ERUZBVUxUX1ZBTFVFXFxuICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfV1cXG4gICAgICAgICAgfV1cXG4gICAgICAgIH1cXG4gICAgICB9XVxcbiAgICB9LFxcbiAgICBpc1Jlc2V0U3VwcG9ydGVkT25Sb290RXhwcmVzc2lvbjogZmFsc2VcXG4gIH1cXG59XCIsXG4gICAgICAuLi5OZXN0ZWQucGFyYW1ldGVycz8uZG9jcz8uc291cmNlXG4gICAgfVxuICB9XG59OyJdLCJuYW1lcyI6WyJCb3hlZEV4cHJlc3Npb25FZGl0b3IiLCJCb3hlZEV4cHJlc3Npb25FZGl0b3JTdG9yeSIsIkJhc2UiLCJFbXB0eUV4cHJlc3Npb24iLCJEbW5CdWlsdEluRGF0YVR5cGUiLCJnZW5lcmF0ZVV1aWQiLCJSRUxBVElPTl9FWFBSRVNTSU9OX0RFRkFVTFRfVkFMVUUiLCJtZXRhIiwidGl0bGUiLCJjb21wb25lbnQiLCJpbmNsdWRlU3RvcmllcyIsInJlbmRlciIsImFyZ3MiLCJwYXJhbWV0ZXJzIiwiZXhjbHVkZSIsImV4cHJlc3Npb24iLCJfXyQkZWxlbWVudCIsImNvbHVtbiIsInJvdyIsInRleHQiLCJfXyQkdGV4dCIsImlzUmVzZXRTdXBwb3J0ZWRPblJvb3RFeHByZXNzaW9uIiwiUmVhZG9ubHkiLCJpc1JlYWRPbmx5IiwiUGVvcGxlIiwiU3RyaW5nIiwiTnVtYmVyIiwiQmlnZ2VyIiwiTmVzdGVkIiwiY29udGV4dEVudHJ5IiwidmFyaWFibGUiLCJkb2NzIiwiX2EiLCJzb3VyY2UiLCJvcmlnaW5hbFNvdXJjZSIsIl9jIiwiX2IiLCJfZCIsIl9mIiwiX2UiLCJfZyIsIl9qIiwiX2giLCJfayIsIl9tIiwiX2wiLCJfbyIsIl9xIiwiX3AiLCJfX25hbWVkRXhwb3J0c09yZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==