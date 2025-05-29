"use strict";
(self["webpackChunk_kie_tools_boxed_expression_component"] = self["webpackChunk_kie_tools_boxed_expression_component"] || []).push([["features-Resizing-Resizing-stories"],{

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

/***/ "./stories/features/Resizing/Resizing.stories.tsx":
/*!********************************************************!*\
  !*** ./stories/features/Resizing/Resizing.stories.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CanDrive: () => (/* binding */ CanDrive),
/* harmony export */   Nested: () => (/* binding */ Nested),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _src_BoxedExpressionEditor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/BoxedExpressionEditor */ "./src/BoxedExpressionEditor.tsx");
/* harmony import */ var _boxedExpressions_Literal_Literal_stories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../boxedExpressions/Literal/Literal.stories */ "./stories/boxedExpressions/Literal/Literal.stories.tsx");
/* harmony import */ var _boxedExpressions_Context_Context_stories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../boxedExpressions/Context/Context.stories */ "./stories/boxedExpressions/Context/Context.stories.tsx");
/* harmony import */ var _src_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../src/api */ "./src/api/index.ts");
var _a, _b, _c, _d, _e, _f;




const meta = {
  title: "Features/Resizing",
  component: _src_BoxedExpressionEditor__WEBPACK_IMPORTED_MODULE_0__.BoxedExpressionEditor,
  includeStories: /^[A-Z]/
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (meta);
const CanDrive = {
  ..._boxedExpressions_Literal_Literal_stories__WEBPACK_IMPORTED_MODULE_1__.CanDrive,
  args: {
    ..._boxedExpressions_Literal_Literal_stories__WEBPACK_IMPORTED_MODULE_1__.CanDrive.args,
    expression: {
      ..._boxedExpressions_Literal_Literal_stories__WEBPACK_IMPORTED_MODULE_1__.CanDrive.args.expression
    }
  }
};
const expression = {
  "@_id": "_577B0672-0DCE-48E2-A387-A06D89770346",
  "@_typeRef": _src_api__WEBPACK_IMPORTED_MODULE_3__.DmnBuiltInDataType.Boolean,
  __$$element: "context",
  contextEntry: [{
    "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
    variable: {
      "@_id": "_04EAD539-9830-42CF-BECC-F718D2929F16",
      "@_name": "Affordability Calculation",
      "@_typeRef": _src_api__WEBPACK_IMPORTED_MODULE_3__.DmnBuiltInDataType.Boolean
    },
    expression: {
      "@_id": "_2BD8EAFA-9673-46C4-96D3-A81EE65B077E",
      "@_typeRef": _src_api__WEBPACK_IMPORTED_MODULE_3__.DmnBuiltInDataType.Boolean,
      __$$element: "functionDefinition",
      formalParameter: [{
        "@_id": "_4133B011-411A-47CD-A1A4-BFC37BF379E8",
        "@_name": "Monthly Income",
        "@_typeRef": _src_api__WEBPACK_IMPORTED_MODULE_3__.DmnBuiltInDataType.Number
      }, {
        "@_id": "_EA8C61D5-EEBD-4D51-AE09-95414645CB49",
        "@_name": "Monthly Repayments",
        "@_typeRef": _src_api__WEBPACK_IMPORTED_MODULE_3__.DmnBuiltInDataType.Number
      }, {
        "@_id": "_59C5BA4A-A41C-4AAF-A224-1D023C211E5F",
        "@_name": "Monthly Expenses",
        "@_typeRef": _src_api__WEBPACK_IMPORTED_MODULE_3__.DmnBuiltInDataType.Number
      }, {
        "@_id": "_23721BE2-AE12-4802-BBAC-135E40D650EA",
        "@_name": "Risk Category",
        "@_typeRef": "t.BureauRiskCategory"
      }, {
        "@_id": "_F79FEF3C-9436-4C01-81F3-7F8F325316A9",
        "@_name": "Required Monthly Installment",
        "@_typeRef": _src_api__WEBPACK_IMPORTED_MODULE_3__.DmnBuiltInDataType.Number
      }],
      "@_kind": _src_api__WEBPACK_IMPORTED_MODULE_3__.BoxedFunctionKind.Feel,
      expression: {
        "@_id": "_C1F325BF-D812-4192-AA90-B820C892EA9A",
        "@_typeRef": undefined,
        __$$element: "context",
        contextEntry: [{
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
          variable: {
            "@_id": "_D1B671D5-DA59-4292-B407-A200CC5716B1",
            "@_name": "Disposable Income",
            "@_typeRef": _src_api__WEBPACK_IMPORTED_MODULE_3__.DmnBuiltInDataType.Number
          },
          expression: {
            "@_id": "_245FAB0B-6267-4F89-9884-144B838F8F5E",
            "@_typeRef": _src_api__WEBPACK_IMPORTED_MODULE_3__.DmnBuiltInDataType.Number,
            __$$element: "literalExpression",
            text: {
              __$$text: "Monthly Income - (Monthly Repayments + Monthly Expenses)"
            }
          }
        }, {
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
          variable: {
            "@_id": "_9FDEECB8-92EB-41B1-B44A-A93105BF6181",
            "@_name": "Credit Contigency Factor",
            "@_typeRef": _src_api__WEBPACK_IMPORTED_MODULE_3__.DmnBuiltInDataType.Number
          },
          expression: {
            "@_id": "_0CF76402-465B-4ED8-889A-30ABE403E893",
            "@_typeRef": _src_api__WEBPACK_IMPORTED_MODULE_3__.DmnBuiltInDataType.Number,
            __$$element: "context",
            contextEntry: [{
              "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
              variable: {
                "@_id": "_893A101E-970A-406F-81B3-64CDF93E143F",
                "@_name": "Risk Category",
                "@_typeRef": "t.BureauRiskCategory"
              },
              expression: {
                "@_id": "_38E84892-D4A0-4415-9D32-4FC432B78918",
                "@_typeRef": "t.BureauRiskCategory",
                __$$element: "literalExpression",
                text: {
                  __$$text: "Risk Category"
                }
              }
            }, {
              "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
              expression: {
                "@_id": "_B7FA5008-05B1-4A5D-AAF5-EA3447C6307B",
                __$$element: "decisionTable",
                "@_hitPolicy": "UNIQUE",
                "@_aggregation": undefined,
                input: [{
                  "@_id": "_BB1D28F4-7C5D-481C-9CC2-D71F001FACA0",
                  inputExpression: {
                    "@_id": "_0BDDD624-2B0C-4E90-8B90-5C43DA87E5F8",
                    text: {
                      __$$text: "Risk Category"
                    },
                    "@_typeRef": "t.BureauRiskCategory"
                  }
                }],
                output: [{
                  "@_id": "_64AA2820-EC4F-4A5B-9045-A474983CC86E",
                  "@_name": "Result Expression",
                  "@_typeRef": undefined
                }],
                annotation: [{
                  "@_name": "Annotations"
                }],
                rule: [{
                  "@_id": "_7FA41F37-BC03-49C7-AD96-8C03B84FE5D7",
                  inputEntry: [{
                    "@_id": "_67FB4348-7CDE-4644-9B79-EA57B62BAAE5",
                    text: {
                      __$$text: '"High", "Decline"'
                    }
                  }],
                  outputEntry: [{
                    "@_id": "_70EEBEE9-E97C-4839-88C2-DDC63C02B1C5",
                    text: {
                      __$$text: "0.6"
                    }
                  }],
                  annotationEntry: [{
                    text: {
                      __$$text: ""
                    }
                  }]
                }, {
                  "@_id": "_E42706FD-AFD2-4ED6-A6BD-CCEE5B07D065",
                  inputEntry: [{
                    "@_id": "_D6B0C1E2-7323-43F9-98BF-DBDA0527CEF3",
                    text: {
                      __$$text: '"Medium"'
                    }
                  }],
                  outputEntry: [{
                    "@_id": "_5A3C4E6F-0D45-4559-A1D1-8109780BB38E",
                    text: {
                      __$$text: "0.7"
                    }
                  }],
                  annotationEntry: [{
                    text: {
                      __$$text: ""
                    }
                  }]
                }, {
                  "@_id": "_C143C39F-1774-42EF-A967-5FAF087F2355",
                  inputEntry: [{
                    "@_id": "_245CF205-9B3A-45F3-A23A-64B9CB87DF0A",
                    text: {
                      __$$text: '"Low", "Very Low"'
                    }
                  }],
                  outputEntry: [{
                    "@_id": "_987D475A-186D-4B42-A544-F86B4D5D224A",
                    text: {
                      __$$text: "0.8"
                    }
                  }],
                  annotationEntry: [{
                    text: {
                      __$$text: ""
                    }
                  }]
                }]
              }
            }]
          }
        }, {
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
          variable: {
            "@_id": "_F7311902-5700-4EB3-AA36-ADAFBB33752D",
            "@_name": "Affordability",
            "@_typeRef": _src_api__WEBPACK_IMPORTED_MODULE_3__.DmnBuiltInDataType.Boolean
          },
          expression: {
            "@_id": "_8571615A-3490-4341-A8A8-D934C0526104",
            "@_typeRef": _src_api__WEBPACK_IMPORTED_MODULE_3__.DmnBuiltInDataType.Boolean,
            __$$element: "literalExpression",
            text: {
              __$$text: "if Disposable Income * Credit Contigency Factor > Required Monthly Installment\nthen true\nelse false"
            }
          }
        }, {
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
          expression: {
            "@_id": "_002EF0D0-D8AE-4086-82FC-526E9B5028CA",
            __$$element: "literalExpression",
            text: {
              __$$text: "Affordability"
            }
          }
        }]
      }
    }
  }, {
    "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
    expression: {
      __$$element: "invocation",
      "@_id": "_DC4F55F0-5650-427A-B0F6-6ED93E73E66F",
      expression: {
        __$$element: "literalExpression",
        "@_id": "_9EADCC8B-C721-42AF-8784-71BF2C5B689E",
        text: {
          __$$text: "Affordability Calculation"
        }
      },
      binding: [{
        parameter: {
          "@_id": "_9333CA95-F4BE-479A-8B44-6D4284B5766F",
          "@_name": "Monthly Income",
          "@_typeRef": _src_api__WEBPACK_IMPORTED_MODULE_3__.DmnBuiltInDataType.Number
        },
        expression: {
          "@_id": "_702B8DAF-9061-47FF-92F5-5A908824B248",
          "@_typeRef": _src_api__WEBPACK_IMPORTED_MODULE_3__.DmnBuiltInDataType.Number,
          __$$element: "literalExpression",
          text: {
            __$$text: "Applicant data.Monthly.Income"
          }
        }
      }, {
        parameter: {
          "@_id": "_0F890E57-BF62-49FC-A199-11651222AAFA",
          "@_name": "Monthly Repayments",
          "@_typeRef": _src_api__WEBPACK_IMPORTED_MODULE_3__.DmnBuiltInDataType.Number
        },
        expression: {
          "@_id": "_63F6C8EF-42D7-4B2A-8D1E-C9C32E460F0C",
          "@_typeRef": _src_api__WEBPACK_IMPORTED_MODULE_3__.DmnBuiltInDataType.Number,
          __$$element: "literalExpression",
          text: {
            __$$text: "Applicant data.Monthly.Repayments"
          }
        }
      }, {
        parameter: {
          "@_id": "_3D98BA98-4C77-46AE-9366-32863BA0D497",
          "@_name": "Monthly Expenses",
          "@_typeRef": _src_api__WEBPACK_IMPORTED_MODULE_3__.DmnBuiltInDataType.Number
        },
        expression: {
          "@_id": "_217A6034-0485-47DA-B982-75C8FF0180D9",
          "@_typeRef": _src_api__WEBPACK_IMPORTED_MODULE_3__.DmnBuiltInDataType.Number,
          __$$element: "literalExpression",
          text: {
            __$$text: "Applicant data.Monthly.Expenses"
          }
        }
      }, {
        parameter: {
          "@_id": "_D9DA7EBE-7CD0-4D20-BDE0-61FFFB6AD2F1",
          "@_name": "Risk Category",
          "@_typeRef": "t.BureauRiskCategory"
        },
        expression: {
          "@_id": "_A9926A1D-805B-4C64-BDB6-FFB01A9D3D60",
          "@_typeRef": "t.BureauRiskCategory",
          __$$element: "literalExpression",
          text: {
            __$$text: "Post-bureau risk category"
          }
        }
      }, {
        parameter: {
          "@_id": "_D3DE1FD3-B767-494B-A3D8-9EDB6392D47F",
          "@_name": "Required Monthly Installment",
          "@_typeRef": _src_api__WEBPACK_IMPORTED_MODULE_3__.DmnBuiltInDataType.Number
        },
        expression: {
          "@_id": "_9F2CF7EA-885B-4545-9E16-55E354B122A8",
          "@_typeRef": _src_api__WEBPACK_IMPORTED_MODULE_3__.DmnBuiltInDataType.Number,
          __$$element: "literalExpression",
          text: {
            __$$text: "Required monthly installment"
          }
        }
      }]
    }
  }]
};
const Nested = {
  ..._boxedExpressions_Context_Context_stories__WEBPACK_IMPORTED_MODULE_2__.Nested,
  args: {
    ..._boxedExpressions_Context_Context_stories__WEBPACK_IMPORTED_MODULE_2__.Nested.args,
    expression,
    widthsById: {}
  }
};
CanDrive.parameters = {
  ...CanDrive.parameters,
  docs: {
    ...((_a = CanDrive.parameters) === null || _a === void 0 ? void 0 : _a.docs),
    source: {
      originalSource: "{\n  ...Literal.CanDrive,\n  args: {\n    ...Literal.CanDrive.args,\n    expression: {\n      ...(Literal.CanDrive.args!.expression! as Normalized<BoxedLiteral>)\n    }\n  }\n}",
      ...((_c = (_b = CanDrive.parameters) === null || _b === void 0 ? void 0 : _b.docs) === null || _c === void 0 ? void 0 : _c.source)
    }
  }
};
Nested.parameters = {
  ...Nested.parameters,
  docs: {
    ...((_d = Nested.parameters) === null || _d === void 0 ? void 0 : _d.docs),
    source: {
      originalSource: "{\n  ...Context.Nested,\n  args: {\n    ...Context.Nested.args,\n    expression,\n    widthsById: {} //FIXME: Tiago\n  }\n}",
      ...((_f = (_e = Nested.parameters) === null || _e === void 0 ? void 0 : _e.docs) === null || _f === void 0 ? void 0 : _f.source)
    }
  }
};
const __namedExportsOrder = ["CanDrive", "Nested"];

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZXMtUmVzaXppbmctUmVzaXppbmctc3Rvcmllcy5mMjIyN2VjYy5pZnJhbWUuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0J1RztBQUNVO0FBQzlCO0FBQ2Y7QUFHcEUsTUFBTU0sSUFBSSxHQUFxQztFQUM3Q0MsS0FBSyxFQUFFLDJCQUEyQjtFQUNsQ0MsU0FBUyxFQUFFUiw2RUFBcUI7RUFDaENTLGNBQWMsRUFBRTtDQUNqQjtBQUNELGlFQUFlSCxJQUFJLEVBQUM7QUFJYixNQUFNSixJQUFJLEdBQVU7RUFDekJRLE1BQU0sRUFBRUMsSUFBSSxJQUFJViwwRkFBMEIsRUFBRTtFQUM1Q1csVUFBVSxFQUFFO0lBQ1ZDLE9BQU8sRUFBRSxDQUFDLFdBQVcsRUFBRSxlQUFlLEVBQUUsZUFBZTtHQUN4RDtFQUNERixJQUFJLEVBQUU7SUFDSixHQUFHUixxRUFBZSxDQUFDUSxJQUFJO0lBQ3ZCRyxVQUFVLEVBQUU7TUFDVkMsV0FBVyxFQUFFLG1CQUFtQjtNQUNoQyxNQUFNLEVBQUVWLHNEQUFZLEVBQUU7TUFDdEIsU0FBUyxFQUFFO0tBQ1o7SUFDRFcsZ0NBQWdDLEVBQUU7O0NBRXJDO0FBQ00sTUFBTUMsUUFBUSxHQUFVO0VBQzdCUCxNQUFNLEVBQUVDLElBQUksSUFBSVYsMEZBQTBCLEVBQUU7RUFDNUNXLFVBQVUsRUFBRTtJQUNWQyxPQUFPLEVBQUUsQ0FBQyxXQUFXLEVBQUUsZUFBZSxFQUFFLGVBQWU7R0FDeEQ7RUFDREYsSUFBSSxFQUFFO0lBQ0osR0FBR1IscUVBQWUsQ0FBQ1EsSUFBSTtJQUN2QkcsVUFBVSxFQUFFO01BQ1ZDLFdBQVcsRUFBRSxtQkFBbUI7TUFDaEMsTUFBTSxFQUFFVixzREFBWSxFQUFFO01BQ3RCLFNBQVMsRUFBRTtLQUNaO0lBQ0RXLGdDQUFnQyxFQUFFLElBQUk7SUFDdENFLFVBQVUsRUFBRTs7Q0FFZjtBQUNNLE1BQU1DLFFBQVEsR0FBVTtFQUM3QlQsTUFBTSxFQUFFQyxJQUFJ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QUFBTyxFQUFBLHVCQUFBQSxFQUFBLENBQUVMLE1BQU07OztDQUd2QztBQUFDLE1BQUFhLG1CQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGtpZS10b29scy9ib3hlZC1leHByZXNzaW9uLWNvbXBvbmVudC8uL3N0b3JpZXMvYm94ZWRFeHByZXNzaW9ucy9MaXRlcmFsL0xpdGVyYWwuc3Rvcmllcy50c3giLCJ3ZWJwYWNrOi8vQGtpZS10b29scy9ib3hlZC1leHByZXNzaW9uLWNvbXBvbmVudC8uL3N0b3JpZXMvZmVhdHVyZXMvUmVzaXppbmcvUmVzaXppbmcuc3Rvcmllcy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIExpY2Vuc2VkIHRvIHRoZSBBcGFjaGUgU29mdHdhcmUgRm91bmRhdGlvbiAoQVNGKSB1bmRlciBvbmVcbiAqIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiAgU2VlIHRoZSBOT1RJQ0UgZmlsZVxuICogZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb25cbiAqIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLiAgVGhlIEFTRiBsaWNlbnNlcyB0aGlzIGZpbGVcbiAqIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGVcbiAqIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuICogd2l0aCB0aGUgTGljZW5zZS4gIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsXG4gKiBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxuICogXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcbiAqIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZVxuICogc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9uc1xuICogdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHR5cGUgeyBNZXRhLCBTdG9yeU9iaiB9IGZyb20gXCJAc3Rvcnlib29rL3JlYWN0XCI7XG5pbXBvcnQgeyBCb3hlZEV4cHJlc3Npb25FZGl0b3IsIEJveGVkRXhwcmVzc2lvbkVkaXRvclByb3BzIH0gZnJvbSBcIi4uLy4uLy4uL3NyYy9Cb3hlZEV4cHJlc3Npb25FZGl0b3JcIjtcbmltcG9ydCB7IEJveGVkRXhwcmVzc2lvbkVkaXRvclN0b3J5LCBCb3hlZEV4cHJlc3Npb25FZGl0b3JTdG9yeUFyZ3MgfSBmcm9tIFwiLi4vLi4vYm94ZWRFeHByZXNzaW9uU3Rvcmllc1dyYXBwZXJcIjtcbmltcG9ydCB7IEJhc2UgYXMgRW1wdHlFeHByZXNzaW9uIH0gZnJvbSBcIi4uLy4uL21pc2MvRW1wdHkvRW1wdHlFeHByZXNzaW9uLnN0b3JpZXNcIjtcbmltcG9ydCB7IERtbkJ1aWx0SW5EYXRhVHlwZSwgZ2VuZXJhdGVVdWlkIH0gZnJvbSBcIi4uLy4uLy4uL3NyYy9hcGlcIjtcblxuLy8gTW9yZSBvbiBob3cgdG8gc2V0IHVwIHN0b3JpZXMgYXQ6IGh0dHBzOi8vc3Rvcnlib29rLmpzLm9yZy9kb2NzL3JlYWN0L3dyaXRpbmctc3Rvcmllcy9pbnRyb2R1Y3Rpb24jZGVmYXVsdC1leHBvcnRcbmNvbnN0IG1ldGE6IE1ldGE8Qm94ZWRFeHByZXNzaW9uRWRpdG9yUHJvcHM+ID0ge1xuICB0aXRsZTogXCJCb3hlZCBFeHByZXNzaW9ucy9MaXRlcmFsXCIsXG4gIGNvbXBvbmVudDogQm94ZWRFeHByZXNzaW9uRWRpdG9yLFxuICBpbmNsdWRlU3RvcmllczogL15bQS1aXS9cbn07XG5leHBvcnQgZGVmYXVsdCBtZXRhO1xudHlwZSBTdG9yeSA9IFN0b3J5T2JqPEJveGVkRXhwcmVzc2lvbkVkaXRvclN0b3J5QXJncz47XG5cbi8vIE1vcmUgb24gd3JpdGluZyBzdG9yaWVzIHdpdGggYXJnczogaHR0cHM6Ly9zdG9yeWJvb2suanMub3JnL2RvY3MvcmVhY3Qvd3JpdGluZy1zdG9yaWVzL2FyZ3NcbmV4cG9ydCBjb25zdCBCYXNlOiBTdG9yeSA9IHtcbiAgcmVuZGVyOiBhcmdzID0+IEJveGVkRXhwcmVzc2lvbkVkaXRvclN0b3J5KCksXG4gIHBhcmFtZXRlcnM6IHtcbiAgICBleGNsdWRlOiBbXCJkYXRhVHlwZXNcIiwgXCJiZWVHd3RTZXJ2aWNlXCIsIFwicG1tbERvY3VtZW50c1wiXVxuICB9LFxuICBhcmdzOiB7XG4gICAgLi4uRW1wdHlFeHByZXNzaW9uLmFyZ3MsXG4gICAgZXhwcmVzc2lvbjoge1xuICAgICAgX18kJGVsZW1lbnQ6IFwibGl0ZXJhbEV4cHJlc3Npb25cIixcbiAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICAgIFwiQF9sYWJlbFwiOiBcIkV4cHJlc3Npb24gTmFtZVwiXG4gICAgfSxcbiAgICBpc1Jlc2V0U3VwcG9ydGVkT25Sb290RXhwcmVzc2lvbjogdHJ1ZVxuICB9XG59O1xuZXhwb3J0IGNvbnN0IFJlYWRvbmx5OiBTdG9yeSA9IHtcbiAgcmVuZGVyOiBhcmdzID0+IEJveGVkRXhwcmVzc2lvbkVkaXRvclN0b3J5KCksXG4gIHBhcmFtZXRlcnM6IHtcbiAgICBleGNsdWRlOiBbXCJkYXRhVHlwZXNcIiwgXCJiZWVHd3RTZXJ2aWNlXCIsIFwicG1tbERvY3VtZW50c1wiXVxuICB9LFxuICBhcmdzOiB7XG4gICAgLi4uRW1wdHlFeHByZXNzaW9uLmFyZ3MsXG4gICAgZXhwcmVzc2lvbjoge1xuICAgICAgX18kJGVsZW1lbnQ6IFwibGl0ZXJhbEV4cHJlc3Npb25cIixcbiAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICAgIFwiQF9sYWJlbFwiOiBcIkV4cHJlc3Npb24gTmFtZVwiXG4gICAgfSxcbiAgICBpc1Jlc2V0U3VwcG9ydGVkT25Sb290RXhwcmVzc2lvbjogdHJ1ZSxcbiAgICBpc1JlYWRPbmx5OiB0cnVlXG4gIH1cbn07XG5leHBvcnQgY29uc3QgQ2FuRHJpdmU6IFN0b3J5ID0ge1xuICByZW5kZXI6IGFyZ3MgPT4gQm94ZWRFeHByZXNzaW9uRWRpdG9yU3RvcnkoKSxcbiAgcGFyYW1ldGVyczoge1xuICAgIGV4Y2x1ZGU6IFtcImRhdGFUeXBlc1wiLCBcImJlZUd3dFNlcnZpY2VcIiwgXCJwbW1sRG9jdW1lbnRzXCJdXG4gIH0sXG4gIGFyZ3M6IHtcbiAgICAuLi5FbXB0eUV4cHJlc3Npb24uYXJncyxcbiAgICBleHByZXNzaW9uOiB7XG4gICAgICBfXyQkZWxlbWVudDogXCJsaXRlcmFsRXhwcmVzc2lvblwiLFxuICAgICAgXCJAX2lkXCI6IFwiX0Q5OEZCMzVBLUM2QTUtNEJBNy1BRDM4LTE3NkQ1NkEzMTg3MlwiLFxuICAgICAgXCJAX2xhYmVsXCI6IFwiQ2FuIERyaXZlP1wiLFxuICAgICAgXCJAX3R5cGVSZWZcIjogRG1uQnVpbHRJbkRhdGFUeXBlLkJvb2xlYW4sXG4gICAgICB0ZXh0OiB7XG4gICAgICAgIF9fJCR0ZXh0OiBcIkFnZSA+PSAxOCB0aGVuIHRydWUgZWxzZSBmYWxzZVwiXG4gICAgICB9XG4gICAgfSxcbiAgICB3aWR0aHNCeUlkOiB7XG4gICAgICBcIl9EOThGQjM1QS1DNkE1LTRCQTctQUQzOC0xNzZENTZBMzE4NzJcIjogWzUwMF1cbiAgICB9LFxuICAgIGlzUmVzZXRTdXBwb3J0ZWRPblJvb3RFeHByZXNzaW9uOiBmYWxzZVxuICB9XG59O1xuXG4vLyBNb3JlIG9uIHdyaXRpbmcgc3RvcmllcyB3aXRoIGFyZ3M6IGh0dHBzOi8vc3Rvcnlib29rLmpzLm9yZy9kb2NzL3JlYWN0L3dyaXRpbmctc3Rvcmllcy9hcmdzXG5leHBvcnQgY29uc3QgTmVzdGVkOiBTdG9yeSA9IHtcbiAgcmVuZGVyOiBhcmdzID0+IEJveGVkRXhwcmVzc2lvbkVkaXRvclN0b3J5KCksXG4gIHBhcmFtZXRlcnM6IHtcbiAgICBleGNsdWRlOiBbXCJkYXRhVHlwZXNcIiwgXCJiZWVHd3RTZXJ2aWNlXCIsIFwicG1tbERvY3VtZW50c1wiXVxuICB9LFxuICBhcmdzOiB7XG4gICAgLi4uRW1wdHlFeHByZXNzaW9uLmFyZ3MsXG4gICAgZXhwcmVzc2lvbjoge1xuICAgICAgX18kJGVsZW1lbnQ6IFwiY29udGV4dFwiLFxuICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgXCJAX2xhYmVsXCI6IFwiRXhwcmVzc2lvbiBOYW1lXCIsXG4gICAgICBjb250ZXh0RW50cnk6IFt7XG4gICAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICAgICAgdmFyaWFibGU6IHtcbiAgICAgICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICAgICAgXCJAX25hbWVcIjogXCJDb250ZXh0RW50cnktMVwiXG4gICAgICAgIH0sXG4gICAgICAgIGV4cHJlc3Npb246IHtcbiAgICAgICAgICBfXyQkZWxlbWVudDogXCJsaXRlcmFsRXhwcmVzc2lvblwiLFxuICAgICAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICAgICAgICBcIkBfbGFiZWxcIjogXCJFeHByZXNzaW9uIE5hbWVcIlxuICAgICAgICB9XG4gICAgICB9XVxuICAgIH0sXG4gICAgaXNSZXNldFN1cHBvcnRlZE9uUm9vdEV4cHJlc3Npb246IGZhbHNlXG4gIH1cbn07XG5CYXNlLnBhcmFtZXRlcnMgPSB7XG4gIC4uLkJhc2UucGFyYW1ldGVycyxcbiAgZG9jczoge1xuICAgIC4uLkJhc2UucGFyYW1ldGVycz8uZG9jcyxcbiAgICBzb3VyY2U6IHtcbiAgICAgIG9yaWdpbmFsU291cmNlOiBcIntcXG4gIHJlbmRlcjogYXJncyA9PiBCb3hlZEV4cHJlc3Npb25FZGl0b3JTdG9yeSgpLFxcbiAgcGFyYW1ldGVyczoge1xcbiAgICBleGNsdWRlOiBbXFxcImRhdGFUeXBlc1xcXCIsIFxcXCJiZWVHd3RTZXJ2aWNlXFxcIiwgXFxcInBtbWxEb2N1bWVudHNcXFwiXVxcbiAgfSxcXG4gIGFyZ3M6IHtcXG4gICAgLi4uRW1wdHlFeHByZXNzaW9uLmFyZ3MsXFxuICAgIGV4cHJlc3Npb246IHtcXG4gICAgICBfXyQkZWxlbWVudDogXFxcImxpdGVyYWxFeHByZXNzaW9uXFxcIixcXG4gICAgICBcXFwiQF9pZFxcXCI6IGdlbmVyYXRlVXVpZCgpLFxcbiAgICAgIFxcXCJAX2xhYmVsXFxcIjogXFxcIkV4cHJlc3Npb24gTmFtZVxcXCJcXG4gICAgfSxcXG4gICAgaXNSZXNldFN1cHBvcnRlZE9uUm9vdEV4cHJlc3Npb246IHRydWVcXG4gIH1cXG59XCIsXG4gICAgICAuLi5CYXNlLnBhcmFtZXRlcnM/LmRvY3M/LnNvdXJjZVxuICAgIH1cbiAgfVxufTtcblJlYWRvbmx5LnBhcmFtZXRlcnMgPSB7XG4gIC4uLlJlYWRvbmx5LnBhcmFtZXRlcnMsXG4gIGRvY3M6IHtcbiAgICAuLi5SZWFkb25seS5wYXJhbWV0ZXJzPy5kb2NzLFxuICAgIHNvdXJjZToge1xuICAgICAgb3JpZ2luYWxTb3VyY2U6IFwie1xcbiAgcmVuZGVyOiBhcmdzID0+IEJveGVkRXhwcmVzc2lvbkVkaXRvclN0b3J5KCksXFxuICBwYXJhbWV0ZXJzOiB7XFxuICAgIGV4Y2x1ZGU6IFtcXFwiZGF0YVR5cGVzXFxcIiwgXFxcImJlZUd3dFNlcnZpY2VcXFwiLCBcXFwicG1tbERvY3VtZW50c1xcXCJdXFxuICB9LFxcbiAgYXJnczoge1xcbiAgICAuLi5FbXB0eUV4cHJlc3Npb24uYXJncyxcXG4gICAgZXhwcmVzc2lvbjoge1xcbiAgICAgIF9fJCRlbGVtZW50OiBcXFwibGl0ZXJhbEV4cHJlc3Npb25cXFwiLFxcbiAgICAgIFxcXCJAX2lkXFxcIjogZ2VuZXJhdGVVdWlkKCksXFxuICAgICAgXFxcIkBfbGFiZWxcXFwiOiBcXFwiRXhwcmVzc2lvbiBOYW1lXFxcIlxcbiAgICB9LFxcbiAgICBpc1Jlc2V0U3VwcG9ydGVkT25Sb290RXhwcmVzc2lvbjogdHJ1ZSxcXG4gICAgaXNSZWFkT25seTogdHJ1ZVxcbiAgfVxcbn1cIixcbiAgICAgIC4uLlJlYWRvbmx5LnBhcmFtZXRlcnM/LmRvY3M/LnNvdXJjZVxuICAgIH1cbiAgfVxufTtcbkNhbkRyaXZlLnBhcmFtZXRlcnMgPSB7XG4gIC4uLkNhbkRyaXZlLnBhcmFtZXRlcnMsXG4gIGRvY3M6IHtcbiAgICAuLi5DYW5Ecml2ZS5wYXJhbWV0ZXJzPy5kb2NzLFxuICAgIHNvdXJjZToge1xuICAgICAgb3JpZ2luYWxTb3VyY2U6IFwie1xcbiAgcmVuZGVyOiBhcmdzID0+IEJveGVkRXhwcmVzc2lvbkVkaXRvclN0b3J5KCksXFxuICBwYXJhbWV0ZXJzOiB7XFxuICAgIGV4Y2x1ZGU6IFtcXFwiZGF0YVR5cGVzXFxcIiwgXFxcImJlZUd3dFNlcnZpY2VcXFwiLCBcXFwicG1tbERvY3VtZW50c1xcXCJdXFxuICB9LFxcbiAgYXJnczoge1xcbiAgICAuLi5FbXB0eUV4cHJlc3Npb24uYXJncyxcXG4gICAgZXhwcmVzc2lvbjoge1xcbiAgICAgIF9fJCRlbGVtZW50OiBcXFwibGl0ZXJhbEV4cHJlc3Npb25cXFwiLFxcbiAgICAgIFxcXCJAX2lkXFxcIjogXFxcIl9EOThGQjM1QS1DNkE1LTRCQTctQUQzOC0xNzZENTZBMzE4NzJcXFwiLFxcbiAgICAgIFxcXCJAX2xhYmVsXFxcIjogXFxcIkNhbiBEcml2ZT9cXFwiLFxcbiAgICAgIFxcXCJAX3R5cGVSZWZcXFwiOiBEbW5CdWlsdEluRGF0YVR5cGUuQm9vbGVhbixcXG4gICAgICB0ZXh0OiB7XFxuICAgICAgICBfXyQkdGV4dDogXFxcIkFnZSA+PSAxOCB0aGVuIHRydWUgZWxzZSBmYWxzZVxcXCJcXG4gICAgICB9XFxuICAgIH0sXFxuICAgIHdpZHRoc0J5SWQ6IHtcXG4gICAgICBcXFwiX0Q5OEZCMzVBLUM2QTUtNEJBNy1BRDM4LTE3NkQ1NkEzMTg3MlxcXCI6IFs1MDBdXFxuICAgIH0sXFxuICAgIGlzUmVzZXRTdXBwb3J0ZWRPblJvb3RFeHByZXNzaW9uOiBmYWxzZVxcbiAgfVxcbn1cIixcbiAgICAgIC4uLkNhbkRyaXZlLnBhcmFtZXRlcnM/LmRvY3M/LnNvdXJjZVxuICAgIH1cbiAgfVxufTtcbk5lc3RlZC5wYXJhbWV0ZXJzID0ge1xuICAuLi5OZXN0ZWQucGFyYW1ldGVycyxcbiAgZG9jczoge1xuICAgIC4uLk5lc3RlZC5wYXJhbWV0ZXJzPy5kb2NzLFxuICAgIHNvdXJjZToge1xuICAgICAgb3JpZ2luYWxTb3VyY2U6IFwie1xcbiAgcmVuZGVyOiBhcmdzID0+IEJveGVkRXhwcmVzc2lvbkVkaXRvclN0b3J5KCksXFxuICBwYXJhbWV0ZXJzOiB7XFxuICAgIGV4Y2x1ZGU6IFtcXFwiZGF0YVR5cGVzXFxcIiwgXFxcImJlZUd3dFNlcnZpY2VcXFwiLCBcXFwicG1tbERvY3VtZW50c1xcXCJdXFxuICB9LFxcbiAgYXJnczoge1xcbiAgICAuLi5FbXB0eUV4cHJlc3Npb24uYXJncyxcXG4gICAgZXhwcmVzc2lvbjoge1xcbiAgICAgIF9fJCRlbGVtZW50OiBcXFwiY29udGV4dFxcXCIsXFxuICAgICAgXFxcIkBfaWRcXFwiOiBnZW5lcmF0ZVV1aWQoKSxcXG4gICAgICBcXFwiQF9sYWJlbFxcXCI6IFxcXCJFeHByZXNzaW9uIE5hbWVcXFwiLFxcbiAgICAgIGNvbnRleHRFbnRyeTogW3tcXG4gICAgICAgIFxcXCJAX2lkXFxcIjogZ2VuZXJhdGVVdWlkKCksXFxuICAgICAgICB2YXJpYWJsZToge1xcbiAgICAgICAgICBcXFwiQF9pZFxcXCI6IGdlbmVyYXRlVXVpZCgpLFxcbiAgICAgICAgICBcXFwiQF9uYW1lXFxcIjogXFxcIkNvbnRleHRFbnRyeS0xXFxcIlxcbiAgICAgICAgfSxcXG4gICAgICAgIGV4cHJlc3Npb246IHtcXG4gICAgICAgICAgX18kJGVsZW1lbnQ6IFxcXCJsaXRlcmFsRXhwcmVzc2lvblxcXCIsXFxuICAgICAgICAgIFxcXCJAX2lkXFxcIjogZ2VuZXJhdGVVdWlkKCksXFxuICAgICAgICAgIFxcXCJAX2xhYmVsXFxcIjogXFxcIkV4cHJlc3Npb24gTmFtZVxcXCJcXG4gICAgICAgIH1cXG4gICAgICB9XVxcbiAgICB9LFxcbiAgICBpc1Jlc2V0U3VwcG9ydGVkT25Sb290RXhwcmVzc2lvbjogZmFsc2VcXG4gIH1cXG59XCIsXG4gICAgICAuLi5OZXN0ZWQucGFyYW1ldGVycz8uZG9jcz8uc291cmNlXG4gICAgfVxuICB9XG59OyIsIi8qXG4gKiBMaWNlbnNlZCB0byB0aGUgQXBhY2hlIFNvZnR3YXJlIEZvdW5kYXRpb24gKEFTRikgdW5kZXIgb25lXG4gKiBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gIFNlZSB0aGUgTk9USUNFIGZpbGVcbiAqIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uXG4gKiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC4gIFRoZSBBU0YgbGljZW5zZXMgdGhpcyBmaWxlXG4gKiB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlXG4gKiBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2VcbiAqIHdpdGggdGhlIExpY2Vuc2UuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLFxuICogc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cbiAqIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXG4gKiBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGVcbiAqIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnNcbiAqIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB0eXBlIHsgTWV0YSwgU3RvcnlPYmogfSBmcm9tIFwiQHN0b3J5Ym9vay9yZWFjdFwiO1xuaW1wb3J0IHsgQm94ZWRFeHByZXNzaW9uRWRpdG9yLCBCb3hlZEV4cHJlc3Npb25FZGl0b3JQcm9wcyB9IGZyb20gXCIuLi8uLi8uLi9zcmMvQm94ZWRFeHByZXNzaW9uRWRpdG9yXCI7XG5pbXBvcnQgKiBhcyBMaXRlcmFsIGZyb20gXCIuLi8uLi9ib3hlZEV4cHJlc3Npb25zL0xpdGVyYWwvTGl0ZXJhbC5zdG9yaWVzXCI7XG5pbXBvcnQgKiBhcyBDb250ZXh0IGZyb20gXCIuLi8uLi9ib3hlZEV4cHJlc3Npb25zL0NvbnRleHQvQ29udGV4dC5zdG9yaWVzXCI7XG5pbXBvcnQgeyBCb3hlZEV4cHJlc3Npb24sIEJveGVkRnVuY3Rpb25LaW5kLCBCb3hlZExpdGVyYWwsIERtbkJ1aWx0SW5EYXRhVHlwZSwgZ2VuZXJhdGVVdWlkLCBOb3JtYWxpemVkIH0gZnJvbSBcIi4uLy4uLy4uL3NyYy9hcGlcIjtcbmltcG9ydCB7IEJveGVkRXhwcmVzc2lvbkVkaXRvclN0b3J5QXJncyB9IGZyb20gXCIuLi8uLi9ib3hlZEV4cHJlc3Npb25TdG9yaWVzV3JhcHBlclwiO1xuXG4vLyBNb3JlIG9uIGhvdyB0byBzZXQgdXAgc3RvcmllcyBhdDogaHR0cHM6Ly9zdG9yeWJvb2suanMub3JnL2RvY3MvcmVhY3Qvd3JpdGluZy1zdG9yaWVzL2ludHJvZHVjdGlvbiNkZWZhdWx0LWV4cG9ydFxuY29uc3QgbWV0YTogTWV0YTxCb3hlZEV4cHJlc3Npb25FZGl0b3JQcm9wcz4gPSB7XG4gIHRpdGxlOiBcIkZlYXR1cmVzL1Jlc2l6aW5nXCIsXG4gIGNvbXBvbmVudDogQm94ZWRFeHByZXNzaW9uRWRpdG9yLFxuICBpbmNsdWRlU3RvcmllczogL15bQS1aXS9cbn07XG5leHBvcnQgZGVmYXVsdCBtZXRhO1xudHlwZSBTdG9yeSA9IFN0b3J5T2JqPEJveGVkRXhwcmVzc2lvbkVkaXRvclN0b3J5QXJncz47XG5leHBvcnQgY29uc3QgQ2FuRHJpdmU6IFN0b3J5ID0ge1xuICAuLi5MaXRlcmFsLkNhbkRyaXZlLFxuICBhcmdzOiB7XG4gICAgLi4uTGl0ZXJhbC5DYW5Ecml2ZS5hcmdzLFxuICAgIGV4cHJlc3Npb246IHtcbiAgICAgIC4uLihMaXRlcmFsLkNhbkRyaXZlLmFyZ3MhLmV4cHJlc3Npb24hIGFzIE5vcm1hbGl6ZWQ8Qm94ZWRMaXRlcmFsPilcbiAgICB9XG4gIH1cbn07XG5jb25zdCBleHByZXNzaW9uOiBOb3JtYWxpemVkPEJveGVkRXhwcmVzc2lvbj4gPSB7XG4gIFwiQF9pZFwiOiBcIl81NzdCMDY3Mi0wRENFLTQ4RTItQTM4Ny1BMDZEODk3NzAzNDZcIixcbiAgXCJAX3R5cGVSZWZcIjogRG1uQnVpbHRJbkRhdGFUeXBlLkJvb2xlYW4sXG4gIF9fJCRlbGVtZW50OiBcImNvbnRleHRcIixcbiAgY29udGV4dEVudHJ5OiBbe1xuICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICB2YXJpYWJsZToge1xuICAgICAgXCJAX2lkXCI6IFwiXzA0RUFENTM5LTk4MzAtNDJDRi1CRUNDLUY3MThEMjkyOUYxNlwiLFxuICAgICAgXCJAX25hbWVcIjogXCJBZmZvcmRhYmlsaXR5IENhbGN1bGF0aW9uXCIsXG4gICAgICBcIkBfdHlwZVJlZlwiOiBEbW5CdWlsdEluRGF0YVR5cGUuQm9vbGVhblxuICAgIH0sXG4gICAgZXhwcmVzc2lvbjoge1xuICAgICAgXCJAX2lkXCI6IFwiXzJCRDhFQUZBLTk2NzMtNDZDNC05NkQzLUE4MUVFNjVCMDc3RVwiLFxuICAgICAgXCJAX3R5cGVSZWZcIjogRG1uQnVpbHRJbkRhdGFUeXBlLkJvb2xlYW4sXG4gICAgICBfXyQkZWxlbWVudDogXCJmdW5jdGlvbkRlZmluaXRpb25cIixcbiAgICAgIGZvcm1hbFBhcmFtZXRlcjogW3tcbiAgICAgICAgXCJAX2lkXCI6IFwiXzQxMzNCMDExLTQxMUEtNDdDRC1BMUE0LUJGQzM3QkYzNzlFOFwiLFxuICAgICAgICBcIkBfbmFtZVwiOiBcIk1vbnRobHkgSW5jb21lXCIsXG4gICAgICAgIFwiQF90eXBlUmVmXCI6IERtbkJ1aWx0SW5EYXRhVHlwZS5OdW1iZXJcbiAgICAgIH0sIHtcbiAgICAgICAgXCJAX2lkXCI6IFwiX0VBOEM2MUQ1LUVFQkQtNEQ1MS1BRTA5LTk1NDE0NjQ1Q0I0OVwiLFxuICAgICAgICBcIkBfbmFtZVwiOiBcIk1vbnRobHkgUmVwYXltZW50c1wiLFxuICAgICAgICBcIkBfdHlwZVJlZlwiOiBEbW5CdWlsdEluRGF0YVR5cGUuTnVtYmVyXG4gICAgICB9LCB7XG4gICAgICAgIFwiQF9pZFwiOiBcIl81OUM1QkE0QS1BNDFDLTRBQUYtQTIyNC0xRDAyM0MyMTFFNUZcIixcbiAgICAgICAgXCJAX25hbWVcIjogXCJNb250aGx5IEV4cGVuc2VzXCIsXG4gICAgICAgIFwiQF90eXBlUmVmXCI6IERtbkJ1aWx0SW5EYXRhVHlwZS5OdW1iZXJcbiAgICAgIH0sIHtcbiAgICAgICAgXCJAX2lkXCI6IFwiXzIzNzIxQkUyLUFFMTItNDgwMi1CQkFDLTEzNUU0MEQ2NTBFQVwiLFxuICAgICAgICBcIkBfbmFtZVwiOiBcIlJpc2sgQ2F0ZWdvcnlcIixcbiAgICAgICAgXCJAX3R5cGVSZWZcIjogXCJ0LkJ1cmVhdVJpc2tDYXRlZ29yeVwiIGFzIERtbkJ1aWx0SW5EYXRhVHlwZVxuICAgICAgfSwge1xuICAgICAgICBcIkBfaWRcIjogXCJfRjc5RkVGM0MtOTQzNi00QzAxLTgxRjMtN0Y4RjMyNTMxNkE5XCIsXG4gICAgICAgIFwiQF9uYW1lXCI6IFwiUmVxdWlyZWQgTW9udGhseSBJbnN0YWxsbWVudFwiLFxuICAgICAgICBcIkBfdHlwZVJlZlwiOiBEbW5CdWlsdEluRGF0YVR5cGUuTnVtYmVyXG4gICAgICB9XSxcbiAgICAgIFwiQF9raW5kXCI6IEJveGVkRnVuY3Rpb25LaW5kLkZlZWwsXG4gICAgICBleHByZXNzaW9uOiB7XG4gICAgICAgIFwiQF9pZFwiOiBcIl9DMUYzMjVCRi1EODEyLTQxOTItQUE5MC1CODIwQzg5MkVBOUFcIixcbiAgICAgICAgXCJAX3R5cGVSZWZcIjogdW5kZWZpbmVkLFxuICAgICAgICBfXyQkZWxlbWVudDogXCJjb250ZXh0XCIsXG4gICAgICAgIGNvbnRleHRFbnRyeTogW3tcbiAgICAgICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICAgICAgdmFyaWFibGU6IHtcbiAgICAgICAgICAgIFwiQF9pZFwiOiBcIl9EMUI2NzFENS1EQTU5LTQyOTItQjQwNy1BMjAwQ0M1NzE2QjFcIixcbiAgICAgICAgICAgIFwiQF9uYW1lXCI6IFwiRGlzcG9zYWJsZSBJbmNvbWVcIixcbiAgICAgICAgICAgIFwiQF90eXBlUmVmXCI6IERtbkJ1aWx0SW5EYXRhVHlwZS5OdW1iZXJcbiAgICAgICAgICB9LFxuICAgICAgICAgIGV4cHJlc3Npb246IHtcbiAgICAgICAgICAgIFwiQF9pZFwiOiBcIl8yNDVGQUIwQi02MjY3LTRGODktOTg4NC0xNDRCODM4RjhGNUVcIixcbiAgICAgICAgICAgIFwiQF90eXBlUmVmXCI6IERtbkJ1aWx0SW5EYXRhVHlwZS5OdW1iZXIsXG4gICAgICAgICAgICBfXyQkZWxlbWVudDogXCJsaXRlcmFsRXhwcmVzc2lvblwiLFxuICAgICAgICAgICAgdGV4dDoge1xuICAgICAgICAgICAgICBfXyQkdGV4dDogXCJNb250aGx5IEluY29tZSAtIChNb250aGx5IFJlcGF5bWVudHMgKyBNb250aGx5IEV4cGVuc2VzKVwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgICAgIHZhcmlhYmxlOiB7XG4gICAgICAgICAgICBcIkBfaWRcIjogXCJfOUZERUVDQjgtOTJFQi00MUIxLUI0NEEtQTkzMTA1QkY2MTgxXCIsXG4gICAgICAgICAgICBcIkBfbmFtZVwiOiBcIkNyZWRpdCBDb250aWdlbmN5IEZhY3RvclwiLFxuICAgICAgICAgICAgXCJAX3R5cGVSZWZcIjogRG1uQnVpbHRJbkRhdGFUeXBlLk51bWJlclxuICAgICAgICAgIH0sXG4gICAgICAgICAgZXhwcmVzc2lvbjoge1xuICAgICAgICAgICAgXCJAX2lkXCI6IFwiXzBDRjc2NDAyLTQ2NUItNEVEOC04ODlBLTMwQUJFNDAzRTg5M1wiLFxuICAgICAgICAgICAgXCJAX3R5cGVSZWZcIjogRG1uQnVpbHRJbkRhdGFUeXBlLk51bWJlcixcbiAgICAgICAgICAgIF9fJCRlbGVtZW50OiBcImNvbnRleHRcIixcbiAgICAgICAgICAgIGNvbnRleHRFbnRyeTogW3tcbiAgICAgICAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgICAgICAgICB2YXJpYWJsZToge1xuICAgICAgICAgICAgICAgIFwiQF9pZFwiOiBcIl84OTNBMTAxRS05NzBBLTQwNkYtODFCMy02NENERjkzRTE0M0ZcIixcbiAgICAgICAgICAgICAgICBcIkBfbmFtZVwiOiBcIlJpc2sgQ2F0ZWdvcnlcIixcbiAgICAgICAgICAgICAgICBcIkBfdHlwZVJlZlwiOiBcInQuQnVyZWF1Umlza0NhdGVnb3J5XCIgYXMgRG1uQnVpbHRJbkRhdGFUeXBlXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IHtcbiAgICAgICAgICAgICAgICBcIkBfaWRcIjogXCJfMzhFODQ4OTItRDRBMC00NDE1LTlEMzItNEZDNDMyQjc4OTE4XCIsXG4gICAgICAgICAgICAgICAgXCJAX3R5cGVSZWZcIjogXCJ0LkJ1cmVhdVJpc2tDYXRlZ29yeVwiIGFzIERtbkJ1aWx0SW5EYXRhVHlwZSxcbiAgICAgICAgICAgICAgICBfXyQkZWxlbWVudDogXCJsaXRlcmFsRXhwcmVzc2lvblwiLFxuICAgICAgICAgICAgICAgIHRleHQ6IHtcbiAgICAgICAgICAgICAgICAgIF9fJCR0ZXh0OiBcIlJpc2sgQ2F0ZWdvcnlcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IHtcbiAgICAgICAgICAgICAgICBcIkBfaWRcIjogXCJfQjdGQTUwMDgtMDVCMS00QTVELUFBRjUtRUEzNDQ3QzYzMDdCXCIsXG4gICAgICAgICAgICAgICAgX18kJGVsZW1lbnQ6IFwiZGVjaXNpb25UYWJsZVwiLFxuICAgICAgICAgICAgICAgIFwiQF9oaXRQb2xpY3lcIjogXCJVTklRVUVcIixcbiAgICAgICAgICAgICAgICBcIkBfYWdncmVnYXRpb25cIjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIGlucHV0OiBbe1xuICAgICAgICAgICAgICAgICAgXCJAX2lkXCI6IFwiX0JCMUQyOEY0LTdDNUQtNDgxQy05Q0MyLUQ3MUYwMDFGQUNBMFwiLFxuICAgICAgICAgICAgICAgICAgaW5wdXRFeHByZXNzaW9uOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiQF9pZFwiOiBcIl8wQkRERDYyNC0yQjBDLTRFOTAtOEI5MC01QzQzREE4N0U1RjhcIixcbiAgICAgICAgICAgICAgICAgICAgdGV4dDoge1xuICAgICAgICAgICAgICAgICAgICAgIF9fJCR0ZXh0OiBcIlJpc2sgQ2F0ZWdvcnlcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcIkBfdHlwZVJlZlwiOiBcInQuQnVyZWF1Umlza0NhdGVnb3J5XCIgYXMgRG1uQnVpbHRJbkRhdGFUeXBlXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICAgICAgb3V0cHV0OiBbe1xuICAgICAgICAgICAgICAgICAgXCJAX2lkXCI6IFwiXzY0QUEyODIwLUVDNEYtNEE1Qi05MDQ1LUE0NzQ5ODNDQzg2RVwiLFxuICAgICAgICAgICAgICAgICAgXCJAX25hbWVcIjogXCJSZXN1bHQgRXhwcmVzc2lvblwiLFxuICAgICAgICAgICAgICAgICAgXCJAX3R5cGVSZWZcIjogdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICAgICAgYW5ub3RhdGlvbjogW3tcbiAgICAgICAgICAgICAgICAgIFwiQF9uYW1lXCI6IFwiQW5ub3RhdGlvbnNcIlxuICAgICAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgICAgIHJ1bGU6IFt7XG4gICAgICAgICAgICAgICAgICBcIkBfaWRcIjogXCJfN0ZBNDFGMzctQkMwMy00OUM3LUFEOTYtOEMwM0I4NEZFNUQ3XCIsXG4gICAgICAgICAgICAgICAgICBpbnB1dEVudHJ5OiBbe1xuICAgICAgICAgICAgICAgICAgICBcIkBfaWRcIjogXCJfNjdGQjQzNDgtN0NERS00NjQ0LTlCNzktRUE1N0I2MkJBQUU1XCIsXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICBfXyQkdGV4dDogJ1wiSGlnaFwiLCBcIkRlY2xpbmVcIidcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICAgICAgICBvdXRwdXRFbnRyeTogW3tcbiAgICAgICAgICAgICAgICAgICAgXCJAX2lkXCI6IFwiXzcwRUVCRUU5LUU5N0MtNDgzOS04OEMyLUREQzYzQzAyQjFDNVwiLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgX18kJHRleHQ6IFwiMC42XCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICAgICAgICBhbm5vdGF0aW9uRW50cnk6IFt7XG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICBfXyQkdGV4dDogXCJcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgIFwiQF9pZFwiOiBcIl9FNDI3MDZGRC1BRkQyLTRFRDYtQTZCRC1DQ0VFNUIwN0QwNjVcIixcbiAgICAgICAgICAgICAgICAgIGlucHV0RW50cnk6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwiQF9pZFwiOiBcIl9ENkIwQzFFMi03MzIzLTQzRjktOThCRi1EQkRBMDUyN0NFRjNcIixcbiAgICAgICAgICAgICAgICAgICAgdGV4dDoge1xuICAgICAgICAgICAgICAgICAgICAgIF9fJCR0ZXh0OiAnXCJNZWRpdW1cIidcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICAgICAgICBvdXRwdXRFbnRyeTogW3tcbiAgICAgICAgICAgICAgICAgICAgXCJAX2lkXCI6IFwiXzVBM0M0RTZGLTBENDUtNDU1OS1BMUQxLTgxMDk3ODBCQjM4RVwiLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgX18kJHRleHQ6IFwiMC43XCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICAgICAgICBhbm5vdGF0aW9uRW50cnk6IFt7XG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICBfXyQkdGV4dDogXCJcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgIFwiQF9pZFwiOiBcIl9DMTQzQzM5Ri0xNzc0LTQyRUYtQTk2Ny01RkFGMDg3RjIzNTVcIixcbiAgICAgICAgICAgICAgICAgIGlucHV0RW50cnk6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwiQF9pZFwiOiBcIl8yNDVDRjIwNS05QjNBLTQ1RjMtQTIzQS02NEI5Q0I4N0RGMEFcIixcbiAgICAgICAgICAgICAgICAgICAgdGV4dDoge1xuICAgICAgICAgICAgICAgICAgICAgIF9fJCR0ZXh0OiAnXCJMb3dcIiwgXCJWZXJ5IExvd1wiJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgICAgICAgIG91dHB1dEVudHJ5OiBbe1xuICAgICAgICAgICAgICAgICAgICBcIkBfaWRcIjogXCJfOTg3RDQ3NUEtMTg2RC00QjQyLUE1NDQtRjg2QjRENUQyMjRBXCIsXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICBfXyQkdGV4dDogXCIwLjhcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgICAgICAgIGFubm90YXRpb25FbnRyeTogW3tcbiAgICAgICAgICAgICAgICAgICAgdGV4dDoge1xuICAgICAgICAgICAgICAgICAgICAgIF9fJCR0ZXh0OiBcIlwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfV1cbiAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICAgICAgdmFyaWFibGU6IHtcbiAgICAgICAgICAgIFwiQF9pZFwiOiBcIl9GNzMxMTkwMi01NzAwLTRFQjMtQUEzNi1BREFGQkIzMzc1MkRcIixcbiAgICAgICAgICAgIFwiQF9uYW1lXCI6IFwiQWZmb3JkYWJpbGl0eVwiLFxuICAgICAgICAgICAgXCJAX3R5cGVSZWZcIjogRG1uQnVpbHRJbkRhdGFUeXBlLkJvb2xlYW5cbiAgICAgICAgICB9LFxuICAgICAgICAgIGV4cHJlc3Npb246IHtcbiAgICAgICAgICAgIFwiQF9pZFwiOiBcIl84NTcxNjE1QS0zNDkwLTQzNDEtQThBOC1EOTM0QzA1MjYxMDRcIixcbiAgICAgICAgICAgIFwiQF90eXBlUmVmXCI6IERtbkJ1aWx0SW5EYXRhVHlwZS5Cb29sZWFuLFxuICAgICAgICAgICAgX18kJGVsZW1lbnQ6IFwibGl0ZXJhbEV4cHJlc3Npb25cIixcbiAgICAgICAgICAgIHRleHQ6IHtcbiAgICAgICAgICAgICAgX18kJHRleHQ6IFwiaWYgRGlzcG9zYWJsZSBJbmNvbWUgKiBDcmVkaXQgQ29udGlnZW5jeSBGYWN0b3IgPiBSZXF1aXJlZCBNb250aGx5IEluc3RhbGxtZW50XFxudGhlbiB0cnVlXFxuZWxzZSBmYWxzZVwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgICAgIGV4cHJlc3Npb246IHtcbiAgICAgICAgICAgIFwiQF9pZFwiOiBcIl8wMDJFRjBEMC1EOEFFLTQwODYtODJGQy01MjZFOUI1MDI4Q0FcIixcbiAgICAgICAgICAgIF9fJCRlbGVtZW50OiBcImxpdGVyYWxFeHByZXNzaW9uXCIsXG4gICAgICAgICAgICB0ZXh0OiB7XG4gICAgICAgICAgICAgIF9fJCR0ZXh0OiBcIkFmZm9yZGFiaWxpdHlcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfV1cbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgZXhwcmVzc2lvbjoge1xuICAgICAgX18kJGVsZW1lbnQ6IFwiaW52b2NhdGlvblwiLFxuICAgICAgXCJAX2lkXCI6IFwiX0RDNEY1NUYwLTU2NTAtNDI3QS1CMEY2LTZFRDkzRTczRTY2RlwiLFxuICAgICAgZXhwcmVzc2lvbjoge1xuICAgICAgICBfXyQkZWxlbWVudDogXCJsaXRlcmFsRXhwcmVzc2lvblwiLFxuICAgICAgICBcIkBfaWRcIjogXCJfOUVBRENDOEItQzcyMS00MkFGLTg3ODQtNzFCRjJDNUI2ODlFXCIsXG4gICAgICAgIHRleHQ6IHtcbiAgICAgICAgICBfXyQkdGV4dDogXCJBZmZvcmRhYmlsaXR5IENhbGN1bGF0aW9uXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGJpbmRpbmc6IFt7XG4gICAgICAgIHBhcmFtZXRlcjoge1xuICAgICAgICAgIFwiQF9pZFwiOiBcIl85MzMzQ0E5NS1GNEJFLTQ3OUEtOEI0NC02RDQyODRCNTc2NkZcIixcbiAgICAgICAgICBcIkBfbmFtZVwiOiBcIk1vbnRobHkgSW5jb21lXCIsXG4gICAgICAgICAgXCJAX3R5cGVSZWZcIjogRG1uQnVpbHRJbkRhdGFUeXBlLk51bWJlclxuICAgICAgICB9LFxuICAgICAgICBleHByZXNzaW9uOiB7XG4gICAgICAgICAgXCJAX2lkXCI6IFwiXzcwMkI4REFGLTkwNjEtNDdGRi05MkY1LTVBOTA4ODI0QjI0OFwiLFxuICAgICAgICAgIFwiQF90eXBlUmVmXCI6IERtbkJ1aWx0SW5EYXRhVHlwZS5OdW1iZXIsXG4gICAgICAgICAgX18kJGVsZW1lbnQ6IFwibGl0ZXJhbEV4cHJlc3Npb25cIixcbiAgICAgICAgICB0ZXh0OiB7XG4gICAgICAgICAgICBfXyQkdGV4dDogXCJBcHBsaWNhbnQgZGF0YS5Nb250aGx5LkluY29tZVwiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIHBhcmFtZXRlcjoge1xuICAgICAgICAgIFwiQF9pZFwiOiBcIl8wRjg5MEU1Ny1CRjYyLTQ5RkMtQTE5OS0xMTY1MTIyMkFBRkFcIixcbiAgICAgICAgICBcIkBfbmFtZVwiOiBcIk1vbnRobHkgUmVwYXltZW50c1wiLFxuICAgICAgICAgIFwiQF90eXBlUmVmXCI6IERtbkJ1aWx0SW5EYXRhVHlwZS5OdW1iZXJcbiAgICAgICAgfSxcbiAgICAgICAgZXhwcmVzc2lvbjoge1xuICAgICAgICAgIFwiQF9pZFwiOiBcIl82M0Y2QzhFRi00MkQ3LTRCMkEtOEQxRS1DOUMzMkU0NjBGMENcIixcbiAgICAgICAgICBcIkBfdHlwZVJlZlwiOiBEbW5CdWlsdEluRGF0YVR5cGUuTnVtYmVyLFxuICAgICAgICAgIF9fJCRlbGVtZW50OiBcImxpdGVyYWxFeHByZXNzaW9uXCIsXG4gICAgICAgICAgdGV4dDoge1xuICAgICAgICAgICAgX18kJHRleHQ6IFwiQXBwbGljYW50IGRhdGEuTW9udGhseS5SZXBheW1lbnRzXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAgcGFyYW1ldGVyOiB7XG4gICAgICAgICAgXCJAX2lkXCI6IFwiXzNEOThCQTk4LTRDNzctNDZBRS05MzY2LTMyODYzQkEwRDQ5N1wiLFxuICAgICAgICAgIFwiQF9uYW1lXCI6IFwiTW9udGhseSBFeHBlbnNlc1wiLFxuICAgICAgICAgIFwiQF90eXBlUmVmXCI6IERtbkJ1aWx0SW5EYXRhVHlwZS5OdW1iZXJcbiAgICAgICAgfSxcbiAgICAgICAgZXhwcmVzc2lvbjoge1xuICAgICAgICAgIFwiQF9pZFwiOiBcIl8yMTdBNjAzNC0wNDg1LTQ3REEtQjk4Mi03NUM4RkYwMTgwRDlcIixcbiAgICAgICAgICBcIkBfdHlwZVJlZlwiOiBEbW5CdWlsdEluRGF0YVR5cGUuTnVtYmVyLFxuICAgICAgICAgIF9fJCRlbGVtZW50OiBcImxpdGVyYWxFeHByZXNzaW9uXCIsXG4gICAgICAgICAgdGV4dDoge1xuICAgICAgICAgICAgX18kJHRleHQ6IFwiQXBwbGljYW50IGRhdGEuTW9udGhseS5FeHBlbnNlc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIHBhcmFtZXRlcjoge1xuICAgICAgICAgIFwiQF9pZFwiOiBcIl9EOURBN0VCRS03Q0QwLTREMjAtQkRFMC02MUZGRkI2QUQyRjFcIixcbiAgICAgICAgICBcIkBfbmFtZVwiOiBcIlJpc2sgQ2F0ZWdvcnlcIixcbiAgICAgICAgICBcIkBfdHlwZVJlZlwiOiBcInQuQnVyZWF1Umlza0NhdGVnb3J5XCIgYXMgRG1uQnVpbHRJbkRhdGFUeXBlXG4gICAgICAgIH0sXG4gICAgICAgIGV4cHJlc3Npb246IHtcbiAgICAgICAgICBcIkBfaWRcIjogXCJfQTk5MjZBMUQtODA1Qi00QzY0LUJEQjYtRkZCMDFBOUQzRDYwXCIsXG4gICAgICAgICAgXCJAX3R5cGVSZWZcIjogXCJ0LkJ1cmVhdVJpc2tDYXRlZ29yeVwiIGFzIERtbkJ1aWx0SW5EYXRhVHlwZSxcbiAgICAgICAgICBfXyQkZWxlbWVudDogXCJsaXRlcmFsRXhwcmVzc2lvblwiLFxuICAgICAgICAgIHRleHQ6IHtcbiAgICAgICAgICAgIF9fJCR0ZXh0OiBcIlBvc3QtYnVyZWF1IHJpc2sgY2F0ZWdvcnlcIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICBwYXJhbWV0ZXI6IHtcbiAgICAgICAgICBcIkBfaWRcIjogXCJfRDNERTFGRDMtQjc2Ny00OTRCLUEzRDgtOUVEQjYzOTJENDdGXCIsXG4gICAgICAgICAgXCJAX25hbWVcIjogXCJSZXF1aXJlZCBNb250aGx5IEluc3RhbGxtZW50XCIsXG4gICAgICAgICAgXCJAX3R5cGVSZWZcIjogRG1uQnVpbHRJbkRhdGFUeXBlLk51bWJlclxuICAgICAgICB9LFxuICAgICAgICBleHByZXNzaW9uOiB7XG4gICAgICAgICAgXCJAX2lkXCI6IFwiXzlGMkNGN0VBLTg4NUItNDU0NS05RTE2LTU1RTM1NEIxMjJBOFwiLFxuICAgICAgICAgIFwiQF90eXBlUmVmXCI6IERtbkJ1aWx0SW5EYXRhVHlwZS5OdW1iZXIsXG4gICAgICAgICAgX18kJGVsZW1lbnQ6IFwibGl0ZXJhbEV4cHJlc3Npb25cIixcbiAgICAgICAgICB0ZXh0OiB7XG4gICAgICAgICAgICBfXyQkdGV4dDogXCJSZXF1aXJlZCBtb250aGx5IGluc3RhbGxtZW50XCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1dXG4gICAgfVxuICB9XVxufTtcbmV4cG9ydCBjb25zdCBOZXN0ZWQ6IFN0b3J5ID0ge1xuICAuLi5Db250ZXh0Lk5lc3RlZCxcbiAgYXJnczoge1xuICAgIC4uLkNvbnRleHQuTmVzdGVkLmFyZ3MsXG4gICAgZXhwcmVzc2lvbixcbiAgICB3aWR0aHNCeUlkOiB7fSAvL0ZJWE1FOiBUaWFnb1xuICB9XG59O1xuQ2FuRHJpdmUucGFyYW1ldGVycyA9IHtcbiAgLi4uQ2FuRHJpdmUucGFyYW1ldGVycyxcbiAgZG9jczoge1xuICAgIC4uLkNhbkRyaXZlLnBhcmFtZXRlcnM/LmRvY3MsXG4gICAgc291cmNlOiB7XG4gICAgICBvcmlnaW5hbFNvdXJjZTogXCJ7XFxuICAuLi5MaXRlcmFsLkNhbkRyaXZlLFxcbiAgYXJnczoge1xcbiAgICAuLi5MaXRlcmFsLkNhbkRyaXZlLmFyZ3MsXFxuICAgIGV4cHJlc3Npb246IHtcXG4gICAgICAuLi4oTGl0ZXJhbC5DYW5Ecml2ZS5hcmdzIS5leHByZXNzaW9uISBhcyBOb3JtYWxpemVkPEJveGVkTGl0ZXJhbD4pXFxuICAgIH1cXG4gIH1cXG59XCIsXG4gICAgICAuLi5DYW5Ecml2ZS5wYXJhbWV0ZXJzPy5kb2NzPy5zb3VyY2VcbiAgICB9XG4gIH1cbn07XG5OZXN0ZWQucGFyYW1ldGVycyA9IHtcbiAgLi4uTmVzdGVkLnBhcmFtZXRlcnMsXG4gIGRvY3M6IHtcbiAgICAuLi5OZXN0ZWQucGFyYW1ldGVycz8uZG9jcyxcbiAgICBzb3VyY2U6IHtcbiAgICAgIG9yaWdpbmFsU291cmNlOiBcIntcXG4gIC4uLkNvbnRleHQuTmVzdGVkLFxcbiAgYXJnczoge1xcbiAgICAuLi5Db250ZXh0Lk5lc3RlZC5hcmdzLFxcbiAgICBleHByZXNzaW9uLFxcbiAgICB3aWR0aHNCeUlkOiB7fSAvL0ZJWE1FOiBUaWFnb1xcbiAgfVxcbn1cIixcbiAgICAgIC4uLk5lc3RlZC5wYXJhbWV0ZXJzPy5kb2NzPy5zb3VyY2VcbiAgICB9XG4gIH1cbn07Il0sIm5hbWVzIjpbIkJveGVkRXhwcmVzc2lvbkVkaXRvciIsIkJveGVkRXhwcmVzc2lvbkVkaXRvclN0b3J5IiwiQmFzZSIsIkVtcHR5RXhwcmVzc2lvbiIsIkRtbkJ1aWx0SW5EYXRhVHlwZSIsImdlbmVyYXRlVXVpZCIsIm1ldGEiLCJ0aXRsZSIsImNvbXBvbmVudCIsImluY2x1ZGVTdG9yaWVzIiwicmVuZGVyIiwiYXJncyIsInBhcmFtZXRlcnMiLCJleGNsdWRlIiwiZXhwcmVzc2lvbiIsIl9fJCRlbGVtZW50IiwiaXNSZXNldFN1cHBvcnRlZE9uUm9vdEV4cHJlc3Npb24iLCJSZWFkb25seSIsImlzUmVhZE9ubHkiLCJDYW5Ecml2ZSIsIkJvb2xlYW4iLCJ0ZXh0IiwiX18kJHRleHQiLCJ3aWR0aHNCeUlkIiwiTmVzdGVkIiwiY29udGV4dEVudHJ5IiwidmFyaWFibGUiLCJkb2NzIiwiX2EiLCJzb3VyY2UiLCJvcmlnaW5hbFNvdXJjZSIsIl9jIiwiX2IiLCJfZCIsIl9mIiwiX2UiLCJfZyIsIl9qIiwiX2giLCJfayIsIl9tIiwiX2wiLCJfX25hbWVkRXhwb3J0c09yZGVyIiwiTGl0ZXJhbCIsIkNvbnRleHQiLCJCb3hlZEZ1bmN0aW9uS2luZCIsImZvcm1hbFBhcmFtZXRlciIsIk51bWJlciIsIkZlZWwiLCJ1bmRlZmluZWQiLCJpbnB1dCIsImlucHV0RXhwcmVzc2lvbiIsIm91dHB1dCIsImFubm90YXRpb24iLCJydWxlIiwiaW5wdXRFbnRyeSIsIm91dHB1dEVudHJ5IiwiYW5ub3RhdGlvbkVudHJ5IiwiYmluZGluZyIsInBhcmFtZXRlciJdLCJzb3VyY2VSb290IjoiIn0=