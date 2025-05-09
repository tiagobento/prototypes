"use strict";
(self["webpackChunk_kie_tools_boxed_expression_component"] = self["webpackChunk_kie_tools_boxed_expression_component"] || []).push([["dev-WebApp-stories"],{

/***/ "./stories/dev/WebApp.stories.tsx":
/*!****************************************!*\
  !*** ./stories/dev/WebApp.stories.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WebApp: () => (/* binding */ WebApp),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _src_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/api */ "./src/api/index.ts");
/* harmony import */ var _getDefaultBoxedExpressionForDevWebapp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getDefaultBoxedExpressionForDevWebapp */ "./stories/dev/getDefaultBoxedExpressionForDevWebapp.ts");
/* harmony import */ var _boxedExpressionStoriesWrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../boxedExpressionStoriesWrapper */ "./stories/boxedExpressionStoriesWrapper.tsx");
/* harmony import */ var _patternfly_react_core_dist_js_components_Title__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Title */ "../../node_modules/.pnpm/@patternfly+react-core@4.276.6_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@patternfly/react-core/dist/js/components/Title/index.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Title__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Title__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _patternfly_react_core_dist_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @patternfly/react-core/dist/js */ "../../node_modules/.pnpm/@patternfly+react-core@4.276.6_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@patternfly/react-core/dist/js/index.js");
/* harmony import */ var _patternfly_react_core_dist_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _useCases_CanDrive_CanDrive_stories__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../useCases/CanDrive/CanDrive.stories */ "./stories/useCases/CanDrive/CanDrive.stories.tsx");
/* harmony import */ var _useCases_FindEmployees_FindEmployees_stories__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../useCases/FindEmployees/FindEmployees.stories */ "./stories/useCases/FindEmployees/FindEmployees.stories.tsx");
/* harmony import */ var _useCases_LoanOriginations_RoutingDecisionService_PostBureauAffordability_PostBureauAffordability_stories__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../useCases/LoanOriginations/RoutingDecisionService/PostBureauAffordability/PostBureauAffordability.stories */ "./stories/useCases/LoanOriginations/RoutingDecisionService/PostBureauAffordability/PostBureauAffordability.stories.tsx");
var _a, _b, _c;










const dataTypes = [{
  name: "<Undefined>",
  isCustom: false
}, {
  name: "Any",
  isCustom: false
}, {
  name: "boolean",
  isCustom: false
}, {
  name: "context",
  isCustom: false
}, {
  name: "date",
  isCustom: false
}, {
  name: "date and time",
  isCustom: false
}, {
  name: "days and time duration",
  isCustom: false
}, {
  name: "number",
  isCustom: false
}, {
  name: "string",
  isCustom: false
}, {
  name: "time",
  isCustom: false
}, {
  name: "years and months duration",
  isCustom: false
}, {
  name: "tPerson",
  isCustom: true
}];
const pmmlDocuments = [{
  document: "document",
  modelsFromDocument: [{
    model: "model",
    parametersFromModel: [{
      "@_id": "p1",
      "@_name": "p-1",
      "@_typeRef": _src_api__WEBPACK_IMPORTED_MODULE_2__.DmnBuiltInDataType.Number
    }]
  }]
}, {
  document: "mining pmml",
  modelsFromDocument: [{
    model: "MiningModelSum",
    parametersFromModel: [{
      "@_id": "i1",
      "@_name": "input1",
      "@_typeRef": _src_api__WEBPACK_IMPORTED_MODULE_2__.DmnBuiltInDataType.Any
    }, {
      "@_id": "i2",
      "@_name": "input2",
      "@_typeRef": _src_api__WEBPACK_IMPORTED_MODULE_2__.DmnBuiltInDataType.Any
    }, {
      "@_id": "i3",
      "@_name": "input3",
      "@_typeRef": _src_api__WEBPACK_IMPORTED_MODULE_2__.DmnBuiltInDataType.Any
    }]
  }]
}, {
  document: "regression pmml",
  modelsFromDocument: [{
    model: "RegressionLinear",
    parametersFromModel: [{
      "@_id": "i1",
      "@_name": "i1",
      "@_typeRef": _src_api__WEBPACK_IMPORTED_MODULE_2__.DmnBuiltInDataType.Number
    }, {
      "@_id": "i2",
      "@_name": "i2",
      "@_typeRef": _src_api__WEBPACK_IMPORTED_MODULE_2__.DmnBuiltInDataType.Number
    }]
  }]
}];
const INITIAL_EXPRESSION = undefined;
const INITIAL_WIDTHS_BY_ID = {};
function App() {
  const [version, setVersion] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(-1);
  const [boxedExpression, setBoxedExpression] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(INITIAL_EXPRESSION);
  const [widthsById, setWidthsById] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(INITIAL_WIDTHS_BY_ID);
  const [selectedObjectId, setSelectedObjectId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setVersion(prev => prev + 1);
  }, [boxedExpression]);
  const setSample = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((sample, widthsById) => {
    setBoxedExpression(sample);
    setWidthsById(widthsById);
  }, []);
  const onExpressionChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(args => {
    const newExpression = typeof args.setExpressionAction === "function" ? args.setExpressionAction(boxedExpression) : args.setExpressionAction;
    setBoxedExpression(newExpression);
  }, [boxedExpression]);
  const beeGwtService = {
    getDefaultExpressionDefinition(logicType, typeRef) {
      return {
        expression: (0,_getDefaultBoxedExpressionForDevWebapp__WEBPACK_IMPORTED_MODULE_3__.getDefaultBoxedExpressionForDevWebapp)(logicType, typeRef),
        widthsById: new Map()
      };
    },
    openDataTypePage() {},
    selectObject(uuid) {
      setSelectedObjectId(uuid);
    }
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_js__WEBPACK_IMPORTED_MODULE_8__.Flex, {
      direction: {
        default: "column"
      },
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_js__WEBPACK_IMPORTED_MODULE_8__.FlexItem, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_js__WEBPACK_IMPORTED_MODULE_8__.Flex, {
          style: {
            width: "96vw"
          },
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_js__WEBPACK_IMPORTED_MODULE_8__.FlexItem, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_js__WEBPACK_IMPORTED_MODULE_8__.Button, {
              onClick: () => setSample(INITIAL_EXPRESSION, INITIAL_WIDTHS_BY_ID),
              children: "Empty"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_js__WEBPACK_IMPORTED_MODULE_8__.FlexItem, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_js__WEBPACK_IMPORTED_MODULE_8__.Button, {
              onClick: () => setSample(_useCases_CanDrive_CanDrive_stories__WEBPACK_IMPORTED_MODULE_5__.canDriveExpressionDefinition, _useCases_CanDrive_CanDrive_stories__WEBPACK_IMPORTED_MODULE_5__.canDriveWidthsById),
              children: "Can Drive?"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_js__WEBPACK_IMPORTED_MODULE_8__.FlexItem, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_js__WEBPACK_IMPORTED_MODULE_8__.Button, {
              onClick: () => setSample(_useCases_FindEmployees_FindEmployees_stories__WEBPACK_IMPORTED_MODULE_6__.findEmployeesByKnowledgeExpression, _useCases_FindEmployees_FindEmployees_stories__WEBPACK_IMPORTED_MODULE_6__.findEmployeesByKnowledgeWidthsById),
              children: "Find Employees by Knowledge"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_js__WEBPACK_IMPORTED_MODULE_8__.FlexItem, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_js__WEBPACK_IMPORTED_MODULE_8__.Button, {
              onClick: () => setSample(_useCases_LoanOriginations_RoutingDecisionService_PostBureauAffordability_PostBureauAffordability_stories__WEBPACK_IMPORTED_MODULE_7__.postBureauAffordabilityExpression, _useCases_LoanOriginations_RoutingDecisionService_PostBureauAffordability_PostBureauAffordability_stories__WEBPACK_IMPORTED_MODULE_7__.postBureauAffordabilityWidthsById),
              children: "Affordability"
            })
          })]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_js__WEBPACK_IMPORTED_MODULE_8__.Flex, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_js__WEBPACK_IMPORTED_MODULE_8__.FlexItem, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            children: (0,_boxedExpressionStoriesWrapper__WEBPACK_IMPORTED_MODULE_4__.BoxedExpressionEditorStory)({
              expressionHolderId: "_00000000-0000-0000-0000-000000000000",
              expression: boxedExpression,
              onExpressionChange: onExpressionChange,
              widthsById: widthsById,
              onWidthsChange: setWidthsById,
              isResetSupportedOnRootExpression: true,
              beeGwtService: beeGwtService
            })
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_js__WEBPACK_IMPORTED_MODULE_8__.FlexItem, {
          align: {
            default: "alignRight"
          },
          style: {
            width: "320px"
          },
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_js__WEBPACK_IMPORTED_MODULE_8__.Tooltip, {
            content: "This number updates everytime the expressionDefinition object is updated",
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_js_components_Title__WEBPACK_IMPORTED_MODULE_9__.Title, {
                headingLevel: "h2",
                children: "Updates count"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                children: version
              })]
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_js__WEBPACK_IMPORTED_MODULE_8__.Tooltip, {
            content: "",
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_js_components_Title__WEBPACK_IMPORTED_MODULE_9__.Title, {
                headingLevel: "h2",
                children: "Selected cell ID"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                children: selectedObjectId
              })]
            })
          })]
        })]
      })]
    })
  });
}
const meta = {
  title: "Dev/Web App",
  component: App
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (meta);
const WebApp = {
  render: args => App(),
  argTypes: {
    expression: {
      control: "object"
    },
    widthsById: {
      control: "object"
    }
  },
  args: {
    isReadOnly: false,
    expressionHolderId: undefined,
    expression: undefined,
    widthsById: {},
    dataTypes: dataTypes,
    pmmlDocuments: pmmlDocuments
  }
};
WebApp.parameters = {
  ...WebApp.parameters,
  docs: {
    ...((_a = WebApp.parameters) === null || _a === void 0 ? void 0 : _a.docs),
    source: {
      originalSource: "{\n  render: args => App(),\n  argTypes: {\n    expression: {\n      control: \"object\"\n    },\n    widthsById: {\n      control: \"object\"\n    }\n  },\n  args: {\n    isReadOnly: false,\n    expressionHolderId: undefined,\n    // Needs to be here to be displayed.\n    expression: undefined,\n    // Needs to be here to be displayed.\n    widthsById: {},\n    // Needs to be here to be displayed.\n    dataTypes: dataTypes,\n    pmmlDocuments: pmmlDocuments\n  }\n}",
      ...((_c = (_b = WebApp.parameters) === null || _b === void 0 ? void 0 : _b.docs) === null || _c === void 0 ? void 0 : _c.source)
    }
  }
};
const __namedExportsOrder = ["WebApp"];

/***/ }),

/***/ "./stories/useCases/CanDrive/CanDrive.stories.tsx":
/*!********************************************************!*\
  !*** ./stories/useCases/CanDrive/CanDrive.stories.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Expression: () => (/* binding */ Expression),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   canDriveExpressionDefinition: () => (/* binding */ canDriveExpressionDefinition),
/* harmony export */   canDriveWidthsById: () => (/* binding */ canDriveWidthsById),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   findEmployeesDataTypes: () => (/* binding */ findEmployeesDataTypes)
/* harmony export */ });
/* harmony import */ var _src_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/api */ "./src/api/index.ts");
/* harmony import */ var _src_BoxedExpressionEditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../src/BoxedExpressionEditor */ "./src/BoxedExpressionEditor.tsx");
/* harmony import */ var _boxedExpressionStoriesWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../boxedExpressionStoriesWrapper */ "./stories/boxedExpressionStoriesWrapper.tsx");
/* harmony import */ var _src_resizing_WidthConstants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../src/resizing/WidthConstants */ "./src/resizing/WidthConstants.ts");
var _a, _b, _c;




const meta = {
  title: "Use cases/Can drive?",
  component: _src_BoxedExpressionEditor__WEBPACK_IMPORTED_MODULE_1__.BoxedExpressionEditor,
  includeStories: /^[A-Z]/
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (meta);
const findEmployeesDataTypes = [..._boxedExpressionStoriesWrapper__WEBPACK_IMPORTED_MODULE_2__.dataTypes, {
  name: "tPerson",
  isCustom: true
}];
const canDriveExpressionDefinition = {
  __$$element: "decisionTable",
  "@_id": "_21608B6A-1D9E-426D-86CF-B0CA7AB20D31",
  "@_label": "Can drive?",
  "@_typeRef": _src_api__WEBPACK_IMPORTED_MODULE_0__.DmnBuiltInDataType.Boolean,
  "@_hitPolicy": "UNIQUE",
  annotation: [{
    "@_name": "Annotations"
  }],
  input: [{
    "@_id": "_E2F88F75-7FD2-4CED-A7AC-015619176072",
    inputExpression: {
      "@_id": "_092AF86E-5D8C-4299-9998-8CB3B2DDF711",
      "@_typeRef": _src_api__WEBPACK_IMPORTED_MODULE_0__.DmnBuiltInDataType.Number,
      text: {
        __$$text: "Person.Age"
      }
    }
  }, {
    "@_id": "_6B5D4A99-C73E-4DC2-8EEC-0158196F30D6",
    inputExpression: {
      "@_id": "_14C2BCC6-5059-40A2-9406-E206C5CB6AF5",
      "@_typeRef": _src_api__WEBPACK_IMPORTED_MODULE_0__.DmnBuiltInDataType.String,
      text: {
        __$$text: "Person.Country"
      }
    }
  }],
  output: [{
    "@_id": "_6E8F61D6-308A-4E37-A088-F0265CD73F1B",
    "@_name": "output-1",
    "@_typeRef": _src_api__WEBPACK_IMPORTED_MODULE_0__.DmnBuiltInDataType.Boolean
  }],
  rule: [{
    "@_id": "_E81327B9-5E47-4C41-AFDC-73EDCA1D43B8",
    inputEntry: [{
      "@_id": "_7EFC4F27-09D0-4206-BD5C-1C72081D9A75",
      text: {
        __$$text: ">= 18"
      }
    }, {
      "@_id": "_A4BD080A-6F76-463A-B8E8-8560C9A79319",
      text: {
        __$$text: '"Brazil"'
      }
    }],
    outputEntry: [{
      "@_id": "_F40832D4-8E1B-41CD-8A1E-2384EED9863F",
      text: {
        __$$text: "true"
      }
    }]
  }, {
    "@_id": "_1FAF2352-4C74-4DB2-9844-5446E7A732C4",
    inputEntry: [{
      "@_id": "_34F94774-6D0F-474F-88FB-CBA164A25756",
      text: {
        __$$text: "< 18"
      }
    }, {
      "@_id": "_FF4C4EED-7845-42F8-82A6-15F002A65F5B",
      text: {
        __$$text: '"Brazil"'
      }
    }],
    outputEntry: [{
      "@_id": "_D06D4AE9-2246-4A36-8B97-FE18BB893ABD",
      text: {
        __$$text: "false"
      }
    }]
  }, {
    "@_id": "_00B2707A-36FE-4927-B43C-CD36D71DD0AE",
    inputEntry: [{
      "@_id": "_EA0C9FA0-F959-46DA-97A7-98B935C00414",
      text: {
        __$$text: ">= 17"
      }
    }, {
      "@_id": "_F8F56AA9-223B-4C66-B666-15127AA8AB86",
      text: {
        __$$text: '"England"'
      }
    }],
    outputEntry: [{
      "@_id": "_51179D92-A775-4776-9228-502A1746FB1F",
      text: {
        __$$text: "true"
      }
    }]
  }, {
    "@_id": "_2DFCD2B1-FC83-4398-B482-3315D4809640",
    inputEntry: [{
      "@_id": "_974148CB-2372-4044-8CB4-AE0B36819829",
      text: {
        __$$text: "< 17"
      }
    }, {
      "@_id": "_D7929881-A203-438F-BE79-81632351501D",
      text: {
        __$$text: '"England"'
      }
    }],
    outputEntry: [{
      "@_id": "_6ACB8D90-F867-4BCE-AC3A-1100CC2B778E",
      text: {
        __$$text: "false"
      }
    }]
  }, {
    "@_id": "_5E3E58B6-AEA8-4580-8BAB-1848CAE675E8",
    inputEntry: [{
      "@_id": "_244C0142-2F80-4FC5-A02B-303B36A22D6A",
      text: {
        __$$text: ">= 16"
      }
    }, {
      "@_id": "_FF24BDE6-72F0-49EB-9819-579040D5A0D7",
      text: {
        __$$text: '"US"'
      }
    }],
    outputEntry: [{
      "@_id": "_45E663A1-3B52-4672-97D6-05CA66390D20",
      text: {
        __$$text: "true"
      }
    }]
  }, {
    "@_id": "_ABF08DF5-CD29-4453-8F73-612565D75E03",
    inputEntry: [{
      "@_id": "_C6E28F29-CD4A-4B1A-855C-6FAC51FA09D2",
      text: {
        __$$text: "< 16"
      }
    }, {
      "@_id": "_A4F61557-2D30-485E-80B1-EE8B815C4FF5",
      text: {
        __$$text: '"US"'
      }
    }],
    outputEntry: [{
      "@_id": "_F2042E73-CDE0-4BAC-A219-8D7E52175D94",
      text: {
        __$$text: "false"
      }
    }]
  }]
};
const canDriveWidthsById = {
  "_21608B6A-1D9E-426D-86CF-B0CA7AB20D31": [_src_resizing_WidthConstants__WEBPACK_IMPORTED_MODULE_3__.BEE_TABLE_ROW_INDEX_COLUMN_WIDTH, 100, 100, 100]
};
const Expression = {
  render: args => (0,_boxedExpressionStoriesWrapper__WEBPACK_IMPORTED_MODULE_2__.BoxedExpressionEditorStory)(),
  args: {
    expressionHolderId: "_00000000-0000-0000-0000-000000000000",
    expression: canDriveExpressionDefinition,
    widthsById: canDriveWidthsById,
    dataTypes: findEmployeesDataTypes,
    beeGwtService: _boxedExpressionStoriesWrapper__WEBPACK_IMPORTED_MODULE_2__.beeGwtService,
    pmmlDocuments: _boxedExpressionStoriesWrapper__WEBPACK_IMPORTED_MODULE_2__.pmmlDocuments,
    isResetSupportedOnRootExpression: false
  }
};
Expression.parameters = {
  ...Expression.parameters,
  docs: {
    ...((_a = Expression.parameters) === null || _a === void 0 ? void 0 : _a.docs),
    source: {
      originalSource: "{\n  render: args => BoxedExpressionEditorStory(),\n  args: {\n    expressionHolderId: \"_00000000-0000-0000-0000-000000000000\",\n    expression: canDriveExpressionDefinition,\n    widthsById: canDriveWidthsById,\n    dataTypes: findEmployeesDataTypes,\n    beeGwtService,\n    pmmlDocuments,\n    isResetSupportedOnRootExpression: false\n  }\n}",
      ...((_c = (_b = Expression.parameters) === null || _b === void 0 ? void 0 : _b.docs) === null || _c === void 0 ? void 0 : _c.source)
    }
  }
};
const __namedExportsOrder = ["findEmployeesDataTypes", "canDriveExpressionDefinition", "canDriveWidthsById", "Expression"];

/***/ }),

/***/ "./stories/useCases/LoanOriginations/RoutingDecisionService/PostBureauAffordability/PostBureauAffordability.stories.tsx":
/*!******************************************************************************************************************************!*\
  !*** ./stories/useCases/LoanOriginations/RoutingDecisionService/PostBureauAffordability/PostBureauAffordability.stories.tsx ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Expression: () => (/* binding */ Expression),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   postBureauAffordabilityExpression: () => (/* binding */ postBureauAffordabilityExpression),
/* harmony export */   postBureauAffordabilityWidthsById: () => (/* binding */ postBureauAffordabilityWidthsById)
/* harmony export */ });
/* harmony import */ var _src_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../src/api */ "./src/api/index.ts");
/* harmony import */ var _boxedExpressionStoriesWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../boxedExpressionStoriesWrapper */ "./stories/boxedExpressionStoriesWrapper.tsx");
/* harmony import */ var _src_BoxedExpressionEditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../src/BoxedExpressionEditor */ "./src/BoxedExpressionEditor.tsx");
/* harmony import */ var _boxedExpressionEditorBase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../boxedExpressionEditorBase */ "./stories/useCases/LoanOriginations/boxedExpressionEditorBase.tsx");
var _a, _b, _c;




const meta = {
  title: "Use cases/Loan Originations/Routing Decision Service/Post Bureau Affordability",
  component: _src_BoxedExpressionEditor__WEBPACK_IMPORTED_MODULE_2__.BoxedExpressionEditor,
  includeStories: /^[A-Z]/
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (meta);
const postBureauAffordabilityExpression = {
  __$$element: "invocation",
  "@_id": "_1E880009-77B2-4309-AE2A-8964E05636B1",
  "@_label": "Post-bureau affordability",
  "@_typeRef": _src_api__WEBPACK_IMPORTED_MODULE_0__.DmnBuiltInDataType.Boolean,
  expression: {
    __$$element: "literalExpression",
    "@_id": "_0B151359-63F6-4DAB-BC88-53F34446F9C7",
    text: {
      __$$text: "f.Affordability calculation"
    }
  },
  binding: [{
    parameter: {
      "@_id": "_2882DEEF-03E9-431B-9E96-0B9E06DBDBFA",
      "@_name": "Monthly Income",
      "@_typeRef": _src_api__WEBPACK_IMPORTED_MODULE_0__.DmnBuiltInDataType.Number
    },
    expression: {
      __$$element: "literalExpression",
      "@_id": "_FAD12087-C2B6-4060-840B-077972DCCB80",
      "@_label": "Monthly Income",
      "@_typeRef": _src_api__WEBPACK_IMPORTED_MODULE_0__.DmnBuiltInDataType.Number,
      text: {
        __$$text: "Applicant data.Monthly.Income"
      }
    }
  }, {
    parameter: {
      "@_id": "_ECCC661F-9489-494A-81A9-CADD18075235",
      "@_name": "Monthly Repayments",
      "@_typeRef": _src_api__WEBPACK_IMPORTED_MODULE_0__.DmnBuiltInDataType.Number
    },
    expression: {
      __$$element: "literalExpression",
      "@_id": "_79F0E706-6018-49AB-86EB-78AC55582CE7",
      "@_label": "Monthly Repayments",
      "@_typeRef": _src_api__WEBPACK_IMPORTED_MODULE_0__.DmnBuiltInDataType.Number,
      text: {
        __$$text: "Applicant data.Monthly.Repayments"
      }
    }
  }, {
    parameter: {
      "@_id": "_50CB1671-8A51-40A2-B86C-5A59A76ADA99",
      "@_name": "Monthly Expenses",
      "@_typeRef": _src_api__WEBPACK_IMPORTED_MODULE_0__.DmnBuiltInDataType.Number
    },
    expression: {
      __$$element: "literalExpression",
      "@_id": "_A541AA7D-2DE8-4E04-B5C9-0320EE7D26BE",
      "@_label": "Monthly Expenses",
      "@_typeRef": _src_api__WEBPACK_IMPORTED_MODULE_0__.DmnBuiltInDataType.Number,
      text: {
        __$$text: "Applicant data.Monthly.Expenses"
      }
    }
  }, {
    parameter: {
      "@_id": "_1B4A9572-B67B-4D52-94B0-A990B3114810",
      "@_name": "Risk Category",
      "@_typeRef": "t.BureauRiskCategory"
    },
    expression: {
      __$$element: "literalExpression",
      "@_id": "_9C3C6ED5-F875-4C5B-A7C1-76D10DC2E5DF",
      "@_label": "Risk Category",
      "@_typeRef": "t.BureauRiskCategory",
      text: {
        __$$text: "Post-bureau risk category"
      }
    }
  }, {
    parameter: {
      "@_id": "_6C831C67-F80C-44FC-B4B6-55FD4BAE1A79",
      "@_name": "Required Monthly Installment",
      "@_typeRef": _src_api__WEBPACK_IMPORTED_MODULE_0__.DmnBuiltInDataType.Number
    },
    expression: {
      __$$element: "literalExpression",
      "@_id": "_656110E9-A234-46A4-B4CF-7FD691F8F565",
      "@_label": "Required Monthly Installment",
      "@_typeRef": _src_api__WEBPACK_IMPORTED_MODULE_0__.DmnBuiltInDataType.Number,
      text: {
        __$$text: "Required monthly installment"
      }
    }
  }]
};
const postBureauAffordabilityWidthsById = {
  "_1E880009-77B2-4309-AE2A-8964E05636B1": [180, 300],
  "_FAD12087-C2B6-4060-840B-077972DCCB80": [300],
  "_79F0E706-6018-49AB-86EB-78AC55582CE7": [300],
  "_A541AA7D-2DE8-4E04-B5C9-0320EE7D26BE": [300],
  "_9C3C6ED5-F875-4C5B-A7C1-76D10DC2E5DF": [300],
  "_656110E9-A234-46A4-B4CF-7FD691F8F565": [300]
};
const Expression = {
  render: args => (0,_boxedExpressionStoriesWrapper__WEBPACK_IMPORTED_MODULE_1__.BoxedExpressionEditorStory)(),
  args: {
    expressionHolderId: "_00000000-0000-0000-0000-000000000000",
    expression: postBureauAffordabilityExpression,
    widthsById: postBureauAffordabilityWidthsById,
    dataTypes: _boxedExpressionEditorBase__WEBPACK_IMPORTED_MODULE_3__.loanOriginationsDataTypes,
    beeGwtService: _boxedExpressionStoriesWrapper__WEBPACK_IMPORTED_MODULE_1__.beeGwtService,
    pmmlDocuments: _boxedExpressionStoriesWrapper__WEBPACK_IMPORTED_MODULE_1__.pmmlDocuments,
    isResetSupportedOnRootExpression: false
  }
};
Expression.parameters = {
  ...Expression.parameters,
  docs: {
    ...((_a = Expression.parameters) === null || _a === void 0 ? void 0 : _a.docs),
    source: {
      originalSource: "{\n  render: args => BoxedExpressionEditorStory(),\n  args: {\n    expressionHolderId: \"_00000000-0000-0000-0000-000000000000\",\n    expression: postBureauAffordabilityExpression,\n    widthsById: postBureauAffordabilityWidthsById,\n    dataTypes: loanOriginationsDataTypes,\n    beeGwtService,\n    pmmlDocuments,\n    isResetSupportedOnRootExpression: false\n  }\n}",
      ...((_c = (_b = Expression.parameters) === null || _b === void 0 ? void 0 : _b.docs) === null || _c === void 0 ? void 0 : _c.source)
    }
  }
};
const __namedExportsOrder = ["postBureauAffordabilityExpression", "postBureauAffordabilityWidthsById", "Expression"];

/***/ }),

/***/ "./stories/dev/getDefaultBoxedExpressionForDevWebapp.ts":
/*!**************************************************************!*\
  !*** ./stories/dev/getDefaultBoxedExpressionForDevWebapp.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDefaultBoxedExpressionForDevWebapp: () => (/* binding */ getDefaultBoxedExpressionForDevWebapp)
/* harmony export */ });
/* harmony import */ var _src_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/api */ "./src/api/index.ts");
/* harmony import */ var _src_expressions_InvocationExpression_InvocationExpression__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/expressions/InvocationExpression/InvocationExpression */ "./src/expressions/InvocationExpression/InvocationExpression.tsx");
/* harmony import */ var _src_expressions_DecisionTableExpression_DecisionTableExpression__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/expressions/DecisionTableExpression/DecisionTableExpression */ "./src/expressions/DecisionTableExpression/DecisionTableExpression.tsx");



function getDefaultBoxedExpressionForDevWebapp(logicType, typeRef) {
  if (logicType === "literalExpression") {
    const literalExpression = {
      __$$element: "literalExpression",
      "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_0__.generateUuid)(),
      "@_typeRef": typeRef
    };
    return literalExpression;
  } else if (logicType === "functionDefinition") {
    const functionExpression = {
      __$$element: "functionDefinition",
      "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_0__.generateUuid)(),
      "@_typeRef": typeRef,
      "@_kind": _src_api__WEBPACK_IMPORTED_MODULE_0__.BoxedFunctionKind.Feel,
      expression: undefined
    };
    return functionExpression;
  } else if (logicType === "context") {
    const contextExpression = {
      __$$element: "context",
      "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_0__.generateUuid)(),
      "@_typeRef": typeRef,
      contextEntry: [{
        "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_0__.generateUuid)(),
        variable: {
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_0__.generateUuid)(),
          "@_name": "ContextEntry-1"
        },
        expression: undefined
      }, {
        "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_0__.generateUuid)(),
        variable: {
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_0__.generateUuid)(),
          "@_name": "ContextEntry-2"
        },
        expression: undefined
      }, {
        "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_0__.generateUuid)(),
        expression: undefined
      }]
    };
    return contextExpression;
  } else if (logicType === "list") {
    const listExpression = {
      __$$element: "list",
      "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_0__.generateUuid)(),
      "@_typeRef": typeRef,
      expression: [undefined, undefined, undefined]
    };
    return listExpression;
  } else if (logicType === "invocation") {
    const invocationExpression = {
      __$$element: "invocation",
      "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_0__.generateUuid)(),
      "@_typeRef": typeRef,
      binding: [{
        parameter: {
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_0__.generateUuid)(),
          "@_name": _src_expressions_InvocationExpression_InvocationExpression__WEBPACK_IMPORTED_MODULE_1__.INVOCATION_EXPRESSION_DEFAULT_PARAMETER_NAME,
          "@_typeRef": undefined
        }
      }],
      expression: {
        __$$element: "literalExpression",
        "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_0__.generateUuid)(),
        text: {
          __$$text: "FUNCTION"
        }
      }
    };
    return invocationExpression;
  } else if (logicType === "relation") {
    const relationExpression = {
      __$$element: "relation",
      "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_0__.generateUuid)(),
      "@_typeRef": typeRef,
      column: [{
        "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_0__.generateUuid)(),
        "@_name": "column-1"
      }, {
        "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_0__.generateUuid)(),
        "@_name": "column-2"
      }, {
        "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_0__.generateUuid)(),
        "@_name": "column-3"
      }],
      row: [{
        "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_0__.generateUuid)(),
        expression: [{
          __$$element: "literalExpression",
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_0__.generateUuid)(),
          text: {
            __$$text: ""
          }
        }, {
          __$$element: "literalExpression",
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_0__.generateUuid)(),
          text: {
            __$$text: ""
          }
        }, {
          __$$element: "literalExpression",
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_0__.generateUuid)(),
          text: {
            __$$text: ""
          }
        }]
      }]
    };
    return relationExpression;
  } else if (logicType === "decisionTable") {
    const decisionTableExpression = {
      __$$element: "decisionTable",
      "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_0__.generateUuid)(),
      "@_typeRef": typeRef,
      "@_hitPolicy": "UNIQUE",
      input: [{
        "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_0__.generateUuid)(),
        inputExpression: {
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_0__.generateUuid)(),
          text: {
            __$$text: "input-1"
          }
        }
      }, {
        "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_0__.generateUuid)(),
        inputExpression: {
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_0__.generateUuid)(),
          text: {
            __$$text: "input-2"
          }
        }
      }],
      output: [{
        "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_0__.generateUuid)(),
        "@_label": "output-1"
      }, {
        "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_0__.generateUuid)(),
        "@_label": "output-2"
      }, {
        "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_0__.generateUuid)(),
        "@_label": "output-3"
      }],
      annotation: [{
        "@_name": "Annotations"
      }],
      rule: [{
        "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_0__.generateUuid)(),
        inputEntry: [{
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_0__.generateUuid)(),
          text: {
            __$$text: _src_expressions_DecisionTableExpression_DecisionTableExpression__WEBPACK_IMPORTED_MODULE_2__.DECISION_TABLE_INPUT_DEFAULT_VALUE
          }
        }, {
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_0__.generateUuid)(),
          text: {
            __$$text: _src_expressions_DecisionTableExpression_DecisionTableExpression__WEBPACK_IMPORTED_MODULE_2__.DECISION_TABLE_INPUT_DEFAULT_VALUE
          }
        }],
        outputEntry: [{
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_0__.generateUuid)(),
          text: {
            __$$text: _src_expressions_DecisionTableExpression_DecisionTableExpression__WEBPACK_IMPORTED_MODULE_2__.DECISION_TABLE_OUTPUT_DEFAULT_VALUE
          }
        }, {
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_0__.generateUuid)(),
          text: {
            __$$text: _src_expressions_DecisionTableExpression_DecisionTableExpression__WEBPACK_IMPORTED_MODULE_2__.DECISION_TABLE_OUTPUT_DEFAULT_VALUE
          }
        }, {
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_0__.generateUuid)(),
          text: {
            __$$text: _src_expressions_DecisionTableExpression_DecisionTableExpression__WEBPACK_IMPORTED_MODULE_2__.DECISION_TABLE_OUTPUT_DEFAULT_VALUE
          }
        }],
        annotationEntry: [{
          text: {
            __$$text: "// Your annotations here"
          }
        }]
      }]
    };
    return decisionTableExpression;
  } else if (logicType === "conditional") {
    const conditionalExpression = {
      "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_0__.generateUuid)(),
      __$$element: "conditional",
      if: {
        "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_0__.generateUuid)(),
        expression: undefined
      },
      then: {
        "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_0__.generateUuid)(),
        expression: undefined
      },
      else: {
        "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_0__.generateUuid)(),
        expression: undefined
      }
    };
    return conditionalExpression;
  } else if (logicType === "for") {
    const forExpression = {
      "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_0__.generateUuid)(),
      __$$element: "for",
      return: {
        "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_0__.generateUuid)(),
        expression: undefined
      },
      in: {
        "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_0__.generateUuid)(),
        expression: undefined
      }
    };
    return forExpression;
  } else if (logicType == "some") {
    const someExpression = {
      "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_0__.generateUuid)(),
      __$$element: "some",
      satisfies: {
        "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_0__.generateUuid)(),
        expression: undefined
      },
      in: {
        "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_0__.generateUuid)(),
        expression: undefined
      }
    };
    return someExpression;
  } else if (logicType === "every") {
    const everyExpression = {
      "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_0__.generateUuid)(),
      __$$element: "every",
      satisfies: {
        "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_0__.generateUuid)(),
        expression: undefined
      },
      in: {
        "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_0__.generateUuid)(),
        expression: undefined
      }
    };
    return everyExpression;
  } else if (logicType === "filter") {
    const filterExpression = {
      "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_0__.generateUuid)(),
      __$$element: "filter",
      match: {
        "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_0__.generateUuid)(),
        expression: undefined
      },
      in: {
        "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_0__.generateUuid)(),
        expression: undefined
      }
    };
    return filterExpression;
  } else {
    throw new Error(`No default expression available for ${logicType}`);
  }
}

/***/ }),

/***/ "./stories/useCases/LoanOriginations/boxedExpressionEditorBase.tsx":
/*!*************************************************************************!*\
  !*** ./stories/useCases/LoanOriginations/boxedExpressionEditorBase.tsx ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loanOriginationsDataTypes: () => (/* binding */ loanOriginationsDataTypes)
/* harmony export */ });
/* harmony import */ var _boxedExpressionStoriesWrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../boxedExpressionStoriesWrapper */ "./stories/boxedExpressionStoriesWrapper.tsx");

const loanOriginationsDataTypes = [..._boxedExpressionStoriesWrapper__WEBPACK_IMPORTED_MODULE_0__.dataTypes, {
  name: "t.Adjudication",
  isCustom: true
}, {
  name: "t.ApplicantData",
  isCustom: true
}, {
  name: "t.BureauCallType",
  isCustom: true
}, {
  name: "t.BureauData",
  isCustom: true
}, {
  name: "t.BureauRiskCategory",
  isCustom: true
}, {
  name: "t.Eligibility",
  isCustom: true
}, {
  name: "t.EmploymentStatus",
  isCustom: true
}, {
  name: "t.MaritalStatus",
  isCustom: true
}, {
  name: "t.ProductType",
  isCustom: true
}, {
  name: "t.RequestedProduc",
  isCustom: true
}, {
  name: "t.Routing",
  isCustom: true
}, {
  name: "t.Strategy",
  isCustom: true
}];

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2LVdlYkFwcC1zdG9yaWVzLjVjMGIzZDE5LmlmcmFtZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQnlEO0FBQ3NDO0FBQ0M7QUFFYztBQUN0QztBQUNTO0FBQ3dCO0FBQ2dDO0FBQzBEO0FBTW5NLE1BQU1pQixTQUFTLEdBQUcsQ0FBQztFQUNqQkMsSUFBSSxFQUFFLGFBQWE7RUFDbkJDLFFBQVEsRUFBRTtDQUNYLEVBQUU7RUFDREQsSUFBSSxFQUFFLEtBQUs7RUFDWEMsUUFBUSxFQUFFO0NBQ1gsRUFBRTtFQUNERCxJQUFJLEVBQUUsU0FBUztFQUNmQyxRQUFRLEVBQUU7Q0FDWCxFQUFFO0VBQ0RELElBQUksRUFBRSxTQUFTO0VBQ2ZDLFFBQVEsRUFBRTtDQUNYLEVBQUU7RUFDREQsSUFBSSxFQUFFLE1BQU07RUFDWkMsUUFBUSxFQUFFO0NBQ1gsRUFBRTtFQUNERCxJQUFJLEVBQUUsZUFBZTtFQUNyQkMsUUFBUSxFQUFFO0NBQ1gsRUFBRTtFQUNERCxJQUFJLEVBQUUsd0JBQXdCO0VBQzlCQyxRQUFRLEVBQUU7Q0FDWCxFQUFFO0VBQ0RELElBQUksRUFBRSxRQUFRO0VBQ2RDLFFBQVEsRUFBRTtDQUNYLEVBQUU7RUFDREQsSUFBSSxFQUFFLFFBQVE7RUFDZEMsUUFBUSxFQUFFO0NBQ1gsRUFBRTtFQUNERCxJQUFJLEVBQUUsTUFBTTtFQUNaQyxRQUFRLEVBQUU7Q0FDWCxFQUFFO0VBQ0RELElBQUksRUFBRSwyQkFBMkI7RUFDakNDLFFBQVEsRUFBRTtDQUNYLEVBQUU7RUFDREQsSUFBSSxFQUFFLFNBQVM7RUFDZkMsUUFBUSxFQUFFO0NBQ1gsQ0FBQztBQUNGLE1BQU1DLGFBQWEsR0FBRyxDQUFDO0VBQ3JCQyxRQUFRLEVBQUUsVUFBVTtFQUNwQkMsa0JBQWtCLEVBQUUsQ0FBQztJQUNuQkMsS0FBSyxFQUFFLE9BQU87SUFDZEMsbUJBQW1CLEVBQUUsQ0FBQztNQUNwQixNQUFNLEVBQUUsSUFBSTtN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O0VBQUVDLFFBQVEsRUFBRTtBQUFJLENBQUUsRUFDM0M7RUFBRUQsSUFBSSxFQUFFLGtCQUFrQjtFQUFFQyxRQUFRLEVBQUU7QUFBSSxDQUFFLEVBQzVDO0VBQUVELElBQUksRUFBRSxjQUFjO0VBQUVDLFFBQVEsRUFBRTtBQUFJLENBQUUsRUFDeEM7RUFBRUQsSUFBSSxFQUFFLHNCQUFzQjtFQUFFQyxRQUFRLEVBQUU7QUFBSSxDQUFFLEVBQ2hEO0VBQUVELElBQUksRUFBRSxlQUFlO0VBQUVDLFFBQVEsRUFBRTtBQUFJLENBQUUsRUFDekM7RUFBRUQsSUFBSSxFQUFFLG9CQUFvQjtFQUFFQyxRQUFRLEVBQUU7QUFBSSxDQUFFLEVBQzlDO0VBQUVELElBQUksRUFBRSxpQkFBaUI7RUFBRUMsUUFBUSxFQUFFO0FBQUksQ0FBRSxFQUMzQztFQUFFRCxJQUFJLEVBQUUsZUFBZTtFQUFFQyxRQUFRLEVBQUU7QUFBSSxDQUFFLEVBQ3pDO0VBQUVELElBQUksRUFBRSxtQkFBbUI7RUFBRUMsUUFBUSxFQUFFO0FBQUksQ0FBRSxFQUM3QztFQUFFRCxJQUFJLEVBQUUsV0FBVztFQUFFQyxRQUFRLEVBQUU7QUFBSSxDQUFFLEVBQ3JDO0VBQUVELElBQUksRUFBRSxZQUFZO0VBQUVDLFFBQVEsRUFBRTtBQUFJLENBQUUsQ0FDdkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Aa2llLXRvb2xzL2JveGVkLWV4cHJlc3Npb24tY29tcG9uZW50Ly4vc3Rvcmllcy9kZXYvV2ViQXBwLnN0b3JpZXMudHN4Iiwid2VicGFjazovL0BraWUtdG9vbHMvYm94ZWQtZXhwcmVzc2lvbi1jb21wb25lbnQvLi9zdG9yaWVzL3VzZUNhc2VzL0NhbkRyaXZlL0NhbkRyaXZlLnN0b3JpZXMudHN4Iiwid2VicGFjazovL0BraWUtdG9vbHMvYm94ZWQtZXhwcmVzc2lvbi1jb21wb25lbnQvLi9zdG9yaWVzL3VzZUNhc2VzL0xvYW5PcmlnaW5hdGlvbnMvUm91dGluZ0RlY2lzaW9uU2VydmljZS9Qb3N0QnVyZWF1QWZmb3JkYWJpbGl0eS9Qb3N0QnVyZWF1QWZmb3JkYWJpbGl0eS5zdG9yaWVzLnRzeCIsIndlYnBhY2s6Ly9Aa2llLXRvb2xzL2JveGVkLWV4cHJlc3Npb24tY29tcG9uZW50Ly4vc3Rvcmllcy9kZXYvZ2V0RGVmYXVsdEJveGVkRXhwcmVzc2lvbkZvckRldldlYmFwcC50cyIsIndlYnBhY2s6Ly9Aa2llLXRvb2xzL2JveGVkLWV4cHJlc3Npb24tY29tcG9uZW50Ly4vc3Rvcmllcy91c2VDYXNlcy9Mb2FuT3JpZ2luYXRpb25zL2JveGVkRXhwcmVzc2lvbkVkaXRvckJhc2UudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBMaWNlbnNlZCB0byB0aGUgQXBhY2hlIFNvZnR3YXJlIEZvdW5kYXRpb24gKEFTRikgdW5kZXIgb25lXG4gKiBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gIFNlZSB0aGUgTk9USUNFIGZpbGVcbiAqIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uXG4gKiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC4gIFRoZSBBU0YgbGljZW5zZXMgdGhpcyBmaWxlXG4gKiB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlXG4gKiBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2VcbiAqIHdpdGggdGhlIExpY2Vuc2UuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLFxuICogc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cbiAqIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXG4gKiBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGVcbiAqIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnNcbiAqIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJlZUd3dFNlcnZpY2UsIEJveGVkRXhwcmVzc2lvbiwgRG1uQnVpbHRJbkRhdGFUeXBlLCBOb3JtYWxpemVkIH0gZnJvbSBcIi4uLy4uL3NyYy9hcGlcIjtcbmltcG9ydCB7IGdldERlZmF1bHRCb3hlZEV4cHJlc3Npb25Gb3JEZXZXZWJhcHAgfSBmcm9tIFwiLi9nZXREZWZhdWx0Qm94ZWRFeHByZXNzaW9uRm9yRGV2V2ViYXBwXCI7XG5pbXBvcnQgdHlwZSB7IE1ldGEsIFN0b3J5T2JqIH0gZnJvbSBcIkBzdG9yeWJvb2svcmVhY3RcIjtcbmltcG9ydCB7IEJveGVkRXhwcmVzc2lvbkVkaXRvclN0b3J5LCBCb3hlZEV4cHJlc3Npb25FZGl0b3JTdG9yeUFyZ3MgfSBmcm9tIFwiLi4vYm94ZWRFeHByZXNzaW9uU3Rvcmllc1dyYXBwZXJcIjtcbmltcG9ydCB7IFRpdGxlIH0gZnJvbSBcIkBwYXR0ZXJuZmx5L3JlYWN0LWNvcmUvZGlzdC9qcy9jb21wb25lbnRzL1RpdGxlXCI7XG5pbXBvcnQgeyBCdXR0b24sIEZsZXgsIEZsZXhJdGVtLCBUb29sdGlwIH0gZnJvbSBcIkBwYXR0ZXJuZmx5L3JlYWN0LWNvcmUvZGlzdC9qc1wiO1xuaW1wb3J0IHsgY2FuRHJpdmVFeHByZXNzaW9uRGVmaW5pdGlvbiwgY2FuRHJpdmVXaWR0aHNCeUlkIH0gZnJvbSBcIi4uL3VzZUNhc2VzL0NhbkRyaXZlL0NhbkRyaXZlLnN0b3JpZXNcIjtcbmltcG9ydCB7IGZpbmRFbXBsb3llZXNCeUtub3dsZWRnZUV4cHJlc3Npb24sIGZpbmRFbXBsb3llZXNCeUtub3dsZWRnZVdpZHRoc0J5SWQgfSBmcm9tIFwiLi4vdXNlQ2FzZXMvRmluZEVtcGxveWVlcy9GaW5kRW1wbG95ZWVzLnN0b3JpZXNcIjtcbmltcG9ydCB7IHBvc3RCdXJlYXVBZmZvcmRhYmlsaXR5RXhwcmVzc2lvbiwgcG9zdEJ1cmVhdUFmZm9yZGFiaWxpdHlXaWR0aHNCeUlkIH0gZnJvbSBcIi4uL3VzZUNhc2VzL0xvYW5PcmlnaW5hdGlvbnMvUm91dGluZ0RlY2lzaW9uU2VydmljZS9Qb3N0QnVyZWF1QWZmb3JkYWJpbGl0eS9Qb3N0QnVyZWF1QWZmb3JkYWJpbGl0eS5zdG9yaWVzXCI7XG5pbXBvcnQgeyBPbkV4cHJlc3Npb25DaGFuZ2UgfSBmcm9tIFwiLi4vLi4vc3JjL0JveGVkRXhwcmVzc2lvbkVkaXRvckNvbnRleHRcIjtcblxuLyoqXG4gKiBDb25zdGFudHMgY29waWVkIGZyb20gdGVzdHMgdG8gZml4IGRlYnVnZ2VyXG4gKi9cbmNvbnN0IGRhdGFUeXBlcyA9IFt7XG4gIG5hbWU6IFwiPFVuZGVmaW5lZD5cIixcbiAgaXNDdXN0b206IGZhbHNlXG59LCB7XG4gIG5hbWU6IFwiQW55XCIsXG4gIGlzQ3VzdG9tOiBmYWxzZVxufSwge1xuICBuYW1lOiBcImJvb2xlYW5cIixcbiAgaXNDdXN0b206IGZhbHNlXG59LCB7XG4gIG5hbWU6IFwiY29udGV4dFwiLFxuICBpc0N1c3RvbTogZmFsc2Vcbn0sIHtcbiAgbmFtZTogXCJkYXRlXCIsXG4gIGlzQ3VzdG9tOiBmYWxzZVxufSwge1xuICBuYW1lOiBcImRhdGUgYW5kIHRpbWVcIixcbiAgaXNDdXN0b206IGZhbHNlXG59LCB7XG4gIG5hbWU6IFwiZGF5cyBhbmQgdGltZSBkdXJhdGlvblwiLFxuICBpc0N1c3RvbTogZmFsc2Vcbn0sIHtcbiAgbmFtZTogXCJudW1iZXJcIixcbiAgaXNDdXN0b206IGZhbHNlXG59LCB7XG4gIG5hbWU6IFwic3RyaW5nXCIsXG4gIGlzQ3VzdG9tOiBmYWxzZVxufSwge1xuICBuYW1lOiBcInRpbWVcIixcbiAgaXNDdXN0b206IGZhbHNlXG59LCB7XG4gIG5hbWU6IFwieWVhcnMgYW5kIG1vbnRocyBkdXJhdGlvblwiLFxuICBpc0N1c3RvbTogZmFsc2Vcbn0sIHtcbiAgbmFtZTogXCJ0UGVyc29uXCIsXG4gIGlzQ3VzdG9tOiB0cnVlXG59XTtcbmNvbnN0IHBtbWxEb2N1bWVudHMgPSBbe1xuICBkb2N1bWVudDogXCJkb2N1bWVudFwiLFxuICBtb2RlbHNGcm9tRG9jdW1lbnQ6IFt7XG4gICAgbW9kZWw6IFwibW9kZWxcIixcbiAgICBwYXJhbWV0ZXJzRnJvbU1vZGVsOiBbe1xuICAgICAgXCJAX2lkXCI6IFwicDFcIixcbiAgICAgIFwiQF9uYW1lXCI6IFwicC0xXCIsXG4gICAgICBcIkBfdHlwZVJlZlwiOiBEbW5CdWlsdEluRGF0YVR5cGUuTnVtYmVyXG4gICAgfV1cbiAgfV1cbn0sIHtcbiAgZG9jdW1lbnQ6IFwibWluaW5nIHBtbWxcIixcbiAgbW9kZWxzRnJvbURvY3VtZW50OiBbe1xuICAgIG1vZGVsOiBcIk1pbmluZ01vZGVsU3VtXCIsXG4gICAgcGFyYW1ldGVyc0Zyb21Nb2RlbDogW3tcbiAgICAgIFwiQF9pZFwiOiBcImkxXCIsXG4gICAgICBcIkBfbmFtZVwiOiBcImlucHV0MVwiLFxuICAgICAgXCJAX3R5cGVSZWZcIjogRG1uQnVpbHRJbkRhdGFUeXBlLkFueVxuICAgIH0sIHtcbiAgICAgIFwiQF9pZFwiOiBcImkyXCIsXG4gICAgICBcIkBfbmFtZVwiOiBcImlucHV0MlwiLFxuICAgICAgXCJAX3R5cGVSZWZcIjogRG1uQnVpbHRJbkRhdGFUeXBlLkFueVxuICAgIH0sIHtcbiAgICAgIFwiQF9pZFwiOiBcImkzXCIsXG4gICAgICBcIkBfbmFtZVwiOiBcImlucHV0M1wiLFxuICAgICAgXCJAX3R5cGVSZWZcIjogRG1uQnVpbHRJbkRhdGFUeXBlLkFueVxuICAgIH1dXG4gIH1dXG59LCB7XG4gIGRvY3VtZW50OiBcInJlZ3Jlc3Npb24gcG1tbFwiLFxuICBtb2RlbHNGcm9tRG9jdW1lbnQ6IFt7XG4gICAgbW9kZWw6IFwiUmVncmVzc2lvbkxpbmVhclwiLFxuICAgIHBhcmFtZXRlcnNGcm9tTW9kZWw6IFt7XG4gICAgICBcIkBfaWRcIjogXCJpMVwiLFxuICAgICAgXCJAX25hbWVcIjogXCJpMVwiLFxuICAgICAgXCJAX3R5cGVSZWZcIjogRG1uQnVpbHRJbkRhdGFUeXBlLk51bWJlclxuICAgIH0sIHtcbiAgICAgIFwiQF9pZFwiOiBcImkyXCIsXG4gICAgICBcIkBfbmFtZVwiOiBcImkyXCIsXG4gICAgICBcIkBfdHlwZVJlZlwiOiBEbW5CdWlsdEluRGF0YVR5cGUuTnVtYmVyXG4gICAgfV1cbiAgfV1cbn1dO1xuY29uc3QgSU5JVElBTF9FWFBSRVNTSU9OOiBOb3JtYWxpemVkPEJveGVkRXhwcmVzc2lvbj4gfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG5jb25zdCBJTklUSUFMX1dJRFRIU19CWV9JRDogUmVjb3JkPHN0cmluZywgbnVtYmVyW10+ID0ge307XG5mdW5jdGlvbiBBcHAoKSB7XG4gIGNvbnN0IFt2ZXJzaW9uLCBzZXRWZXJzaW9uXSA9IHVzZVN0YXRlKC0xKTtcbiAgY29uc3QgW2JveGVkRXhwcmVzc2lvbiwgc2V0Qm94ZWRFeHByZXNzaW9uXSA9IHVzZVN0YXRlPE5vcm1hbGl6ZWQ8Qm94ZWRFeHByZXNzaW9uPiB8IHVuZGVmaW5lZD4oSU5JVElBTF9FWFBSRVNTSU9OKTtcbiAgY29uc3QgW3dpZHRoc0J5SWQsIHNldFdpZHRoc0J5SWRdID0gdXNlU3RhdGU8UmVjb3JkPHN0cmluZywgbnVtYmVyW10+PihJTklUSUFMX1dJRFRIU19CWV9JRCk7XG4gIGNvbnN0IFtzZWxlY3RlZE9iamVjdElkLCBzZXRTZWxlY3RlZE9iamVjdElkXSA9IHVzZVN0YXRlPHN0cmluZz4oKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRWZXJzaW9uKHByZXYgPT4gcHJldiArIDEpO1xuICB9LCBbYm94ZWRFeHByZXNzaW9uXSk7XG4gIGNvbnN0IHNldFNhbXBsZSA9IHVzZUNhbGxiYWNrKChzYW1wbGU6IE5vcm1hbGl6ZWQ8Qm94ZWRFeHByZXNzaW9uPiB8IHVuZGVmaW5lZCwgd2lkdGhzQnlJZDogUmVjb3JkPHN0cmluZywgbnVtYmVyW10+KSA9PiB7XG4gICAgc2V0Qm94ZWRFeHByZXNzaW9uKHNhbXBsZSk7XG4gICAgc2V0V2lkdGhzQnlJZCh3aWR0aHNCeUlkKTtcbiAgfSwgW10pO1xuICBjb25zdCBvbkV4cHJlc3Npb25DaGFuZ2UgPSB1c2VDYWxsYmFjazxPbkV4cHJlc3Npb25DaGFuZ2U+KGFyZ3MgPT4ge1xuICAgIGNvbnN0IG5ld0V4cHJlc3Npb24gPSB0eXBlb2YgYXJncy5zZXRFeHByZXNzaW9uQWN0aW9uID09PSBcImZ1bmN0aW9uXCIgPyBhcmdzLnNldEV4cHJlc3Npb25BY3Rpb24oYm94ZWRFeHByZXNzaW9uKSA6IGFyZ3Muc2V0RXhwcmVzc2lvbkFjdGlvbjtcbiAgICBzZXRCb3hlZEV4cHJlc3Npb24obmV3RXhwcmVzc2lvbik7XG4gIH0sIFtib3hlZEV4cHJlc3Npb25dKTtcbiAgY29uc3QgYmVlR3d0U2VydmljZTogQmVlR3d0U2VydmljZSA9IHtcbiAgICBnZXREZWZhdWx0RXhwcmVzc2lvbkRlZmluaXRpb24obG9naWNUeXBlLCB0eXBlUmVmKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBleHByZXNzaW9uOiBnZXREZWZhdWx0Qm94ZWRFeHByZXNzaW9uRm9yRGV2V2ViYXBwKGxvZ2ljVHlwZSwgdHlwZVJlZiksXG4gICAgICAgIHdpZHRoc0J5SWQ6IG5ldyBNYXAoKVxuICAgICAgfTtcbiAgICB9LFxuICAgIG9wZW5EYXRhVHlwZVBhZ2UoKTogdm9pZCB7fSxcbiAgICBzZWxlY3RPYmplY3QodXVpZCkge1xuICAgICAgc2V0U2VsZWN0ZWRPYmplY3RJZCh1dWlkKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiA8ZGl2PlxuICAgICAgPEZsZXggZGlyZWN0aW9uPXt7XG4gICAgICBkZWZhdWx0OiBcImNvbHVtblwiXG4gICAgfX0+XG4gICAgICAgIDxGbGV4SXRlbT5cbiAgICAgICAgICA8RmxleCBzdHlsZT17e1xuICAgICAgICAgIHdpZHRoOiBcIjk2dndcIlxuICAgICAgICB9fT5cbiAgICAgICAgICAgIDxGbGV4SXRlbT5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRTYW1wbGUoSU5JVElBTF9FWFBSRVNTSU9OLCBJTklUSUFMX1dJRFRIU19CWV9JRCl9PkVtcHR5PC9CdXR0b24+XG4gICAgICAgICAgICA8L0ZsZXhJdGVtPlxuICAgICAgICAgICAgPEZsZXhJdGVtPlxuICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldFNhbXBsZShjYW5Ecml2ZUV4cHJlc3Npb25EZWZpbml0aW9uLCBjYW5Ecml2ZVdpZHRoc0J5SWQpfT5DYW4gRHJpdmU/PC9CdXR0b24+XG4gICAgICAgICAgICA8L0ZsZXhJdGVtPlxuICAgICAgICAgICAgPEZsZXhJdGVtPlxuICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldFNhbXBsZShmaW5kRW1wbG95ZWVzQnlLbm93bGVkZ2VFeHByZXNzaW9uLCBmaW5kRW1wbG95ZWVzQnlLbm93bGVkZ2VXaWR0aHNCeUlkKX0+XG4gICAgICAgICAgICAgICAgRmluZCBFbXBsb3llZXMgYnkgS25vd2xlZGdlXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9GbGV4SXRlbT5cbiAgICAgICAgICAgIDxGbGV4SXRlbT5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRTYW1wbGUocG9zdEJ1cmVhdUFmZm9yZGFiaWxpdHlFeHByZXNzaW9uLCBwb3N0QnVyZWF1QWZmb3JkYWJpbGl0eVdpZHRoc0J5SWQpfT5cbiAgICAgICAgICAgICAgICBBZmZvcmRhYmlsaXR5XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9GbGV4SXRlbT5cbiAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgIDwvRmxleEl0ZW0+XG5cbiAgICAgICAgPEZsZXg+XG4gICAgICAgICAgPEZsZXhJdGVtPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAge0JveGVkRXhwcmVzc2lvbkVkaXRvclN0b3J5KHtcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbkhvbGRlcklkOiBcIl8wMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDBcIixcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogYm94ZWRFeHByZXNzaW9uLFxuICAgICAgICAgICAgICBvbkV4cHJlc3Npb25DaGFuZ2U6IG9uRXhwcmVzc2lvbkNoYW5nZSxcbiAgICAgICAgICAgICAgd2lkdGhzQnlJZDogd2lkdGhzQnlJZCxcbiAgICAgICAgICAgICAgb25XaWR0aHNDaGFuZ2U6IHNldFdpZHRoc0J5SWQsXG4gICAgICAgICAgICAgIGlzUmVzZXRTdXBwb3J0ZWRPblJvb3RFeHByZXNzaW9uOiB0cnVlLFxuICAgICAgICAgICAgICBiZWVHd3RTZXJ2aWNlOiBiZWVHd3RTZXJ2aWNlXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvRmxleEl0ZW0+XG4gICAgICAgICAgPEZsZXhJdGVtIGFsaWduPXt7XG4gICAgICAgICAgZGVmYXVsdDogXCJhbGlnblJpZ2h0XCJcbiAgICAgICAgfX0gc3R5bGU9e3tcbiAgICAgICAgICB3aWR0aDogXCIzMjBweFwiXG4gICAgICAgIH19PlxuICAgICAgICAgICAgPFRvb2x0aXAgY29udGVudD17XCJUaGlzIG51bWJlciB1cGRhdGVzIGV2ZXJ5dGltZSB0aGUgZXhwcmVzc2lvbkRlZmluaXRpb24gb2JqZWN0IGlzIHVwZGF0ZWRcIn0+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPFRpdGxlIGhlYWRpbmdMZXZlbD1cImgyXCI+VXBkYXRlcyBjb3VudDwvVGl0bGU+XG4gICAgICAgICAgICAgICAgPHA+e3ZlcnNpb259PC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgIDxUb29sdGlwIGNvbnRlbnQ9e1wiXCJ9PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxUaXRsZSBoZWFkaW5nTGV2ZWw9XCJoMlwiPlNlbGVjdGVkIGNlbGwgSUQ8L1RpdGxlPlxuICAgICAgICAgICAgICAgIDxwPntzZWxlY3RlZE9iamVjdElkfTwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgPC9GbGV4SXRlbT5cbiAgICAgICAgPC9GbGV4PlxuICAgICAgPC9GbGV4PlxuICAgIDwvZGl2Pjtcbn1cbmNvbnN0IG1ldGE6IE1ldGE8Qm94ZWRFeHByZXNzaW9uRWRpdG9yU3RvcnlBcmdzPiA9IHtcbiAgdGl0bGU6IFwiRGV2L1dlYiBBcHBcIixcbiAgY29tcG9uZW50OiBBcHBcbn07XG5leHBvcnQgZGVmYXVsdCBtZXRhO1xudHlwZSBTdG9yeSA9IFN0b3J5T2JqPEJveGVkRXhwcmVzc2lvbkVkaXRvclN0b3J5QXJncz47XG5leHBvcnQgY29uc3QgV2ViQXBwOiBTdG9yeSA9IHtcbiAgcmVuZGVyOiBhcmdzID0+IEFwcCgpLFxuICBhcmdUeXBlczoge1xuICAgIGV4cHJlc3Npb246IHtcbiAgICAgIGNvbnRyb2w6IFwib2JqZWN0XCJcbiAgICB9LFxuICAgIHdpZHRoc0J5SWQ6IHtcbiAgICAgIGNvbnRyb2w6IFwib2JqZWN0XCJcbiAgICB9XG4gIH0sXG4gIGFyZ3M6IHtcbiAgICBpc1JlYWRPbmx5OiBmYWxzZSxcbiAgICBleHByZXNzaW9uSG9sZGVySWQ6IHVuZGVmaW5lZCxcbiAgICAvLyBOZWVkcyB0byBiZSBoZXJlIHRvIGJlIGRpc3BsYXllZC5cbiAgICBleHByZXNzaW9uOiB1bmRlZmluZWQsXG4gICAgLy8gTmVlZHMgdG8gYmUgaGVyZSB0byBiZSBkaXNwbGF5ZWQuXG4gICAgd2lkdGhzQnlJZDoge30sXG4gICAgLy8gTmVlZHMgdG8gYmUgaGVyZSB0byBiZSBkaXNwbGF5ZWQuXG4gICAgZGF0YVR5cGVzOiBkYXRhVHlwZXMsXG4gICAgcG1tbERvY3VtZW50czogcG1tbERvY3VtZW50c1xuICB9XG59O1xuV2ViQXBwLnBhcmFtZXRlcnMgPSB7XG4gIC4uLldlYkFwcC5wYXJhbWV0ZXJzLFxuICBkb2NzOiB7XG4gICAgLi4uV2ViQXBwLnBhcmFtZXRlcnM/LmRvY3MsXG4gICAgc291cmNlOiB7XG4gICAgICBvcmlnaW5hbFNvdXJjZTogXCJ7XFxuICByZW5kZXI6IGFyZ3MgPT4gQXBwKCksXFxuICBhcmdUeXBlczoge1xcbiAgICBleHByZXNzaW9uOiB7XFxuICAgICAgY29udHJvbDogXFxcIm9iamVjdFxcXCJcXG4gICAgfSxcXG4gICAgd2lkdGhzQnlJZDoge1xcbiAgICAgIGNvbnRyb2w6IFxcXCJvYmplY3RcXFwiXFxuICAgIH1cXG4gIH0sXFxuICBhcmdzOiB7XFxuICAgIGlzUmVhZE9ubHk6IGZhbHNlLFxcbiAgICBleHByZXNzaW9uSG9sZGVySWQ6IHVuZGVmaW5lZCxcXG4gICAgLy8gTmVlZHMgdG8gYmUgaGVyZSB0byBiZSBkaXNwbGF5ZWQuXFxuICAgIGV4cHJlc3Npb246IHVuZGVmaW5lZCxcXG4gICAgLy8gTmVlZHMgdG8gYmUgaGVyZSB0byBiZSBkaXNwbGF5ZWQuXFxuICAgIHdpZHRoc0J5SWQ6IHt9LFxcbiAgICAvLyBOZWVkcyB0byBiZSBoZXJlIHRvIGJlIGRpc3BsYXllZC5cXG4gICAgZGF0YVR5cGVzOiBkYXRhVHlwZXMsXFxuICAgIHBtbWxEb2N1bWVudHM6IHBtbWxEb2N1bWVudHNcXG4gIH1cXG59XCIsXG4gICAgICAuLi5XZWJBcHAucGFyYW1ldGVycz8uZG9jcz8uc291cmNlXG4gICAgfVxuICB9XG59OyIsIi8qXG4gKiBMaWNlbnNlZCB0byB0aGUgQXBhY2hlIFNvZnR3YXJlIEZvdW5kYXRpb24gKEFTRikgdW5kZXIgb25lXG4gKiBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gIFNlZSB0aGUgTk9USUNFIGZpbGVcbiAqIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uXG4gKiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC4gIFRoZSBBU0YgbGljZW5zZXMgdGhpcyBmaWxlXG4gKiB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlXG4gKiBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2VcbiAqIHdpdGggdGhlIExpY2Vuc2UuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLFxuICogc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cbiAqIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXG4gKiBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGVcbiAqIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnNcbiAqIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB0eXBlIHsgTWV0YSwgU3RvcnlPYmogfSBmcm9tIFwiQHN0b3J5Ym9vay9yZWFjdFwiO1xuaW1wb3J0IHsgQm94ZWREZWNpc2lvblRhYmxlLCBEbW5CdWlsdEluRGF0YVR5cGUsIE5vcm1hbGl6ZWQgfSBmcm9tIFwiLi4vLi4vLi4vc3JjL2FwaVwiO1xuaW1wb3J0IHsgQm94ZWRFeHByZXNzaW9uRWRpdG9yLCBCb3hlZEV4cHJlc3Npb25FZGl0b3JQcm9wcyB9IGZyb20gXCIuLi8uLi8uLi9zcmMvQm94ZWRFeHByZXNzaW9uRWRpdG9yXCI7XG5pbXBvcnQgeyBiZWVHd3RTZXJ2aWNlLCBCb3hlZEV4cHJlc3Npb25FZGl0b3JTdG9yeSwgQm94ZWRFeHByZXNzaW9uRWRpdG9yU3RvcnlBcmdzLCBkYXRhVHlwZXMsIHBtbWxEb2N1bWVudHMgfSBmcm9tIFwiLi4vLi4vYm94ZWRFeHByZXNzaW9uU3Rvcmllc1dyYXBwZXJcIjtcbmltcG9ydCB7IEJFRV9UQUJMRV9ST1dfSU5ERVhfQ09MVU1OX1dJRFRIIH0gZnJvbSBcIi4uLy4uLy4uL3NyYy9yZXNpemluZy9XaWR0aENvbnN0YW50c1wiO1xuXG4vLyBNb3JlIG9uIGhvdyB0byBzZXQgdXAgc3RvcmllcyBhdDogaHR0cHM6Ly9zdG9yeWJvb2suanMub3JnL2RvY3MvcmVhY3Qvd3JpdGluZy1zdG9yaWVzL2ludHJvZHVjdGlvbiNkZWZhdWx0LWV4cG9ydFxuY29uc3QgbWV0YTogTWV0YTxCb3hlZEV4cHJlc3Npb25FZGl0b3JQcm9wcz4gPSB7XG4gIHRpdGxlOiBcIlVzZSBjYXNlcy9DYW4gZHJpdmU/XCIsXG4gIGNvbXBvbmVudDogQm94ZWRFeHByZXNzaW9uRWRpdG9yLFxuICBpbmNsdWRlU3RvcmllczogL15bQS1aXS9cbn07XG5leHBvcnQgZGVmYXVsdCBtZXRhO1xudHlwZSBTdG9yeSA9IFN0b3J5T2JqPEJveGVkRXhwcmVzc2lvbkVkaXRvclN0b3J5QXJncz47XG5leHBvcnQgY29uc3QgZmluZEVtcGxveWVlc0RhdGFUeXBlcyA9IFsuLi5kYXRhVHlwZXMsIHtcbiAgbmFtZTogXCJ0UGVyc29uXCIsXG4gIGlzQ3VzdG9tOiB0cnVlXG59XTtcbmV4cG9ydCBjb25zdCBjYW5Ecml2ZUV4cHJlc3Npb25EZWZpbml0aW9uOiBOb3JtYWxpemVkPEJveGVkRGVjaXNpb25UYWJsZT4gPSB7XG4gIF9fJCRlbGVtZW50OiBcImRlY2lzaW9uVGFibGVcIixcbiAgXCJAX2lkXCI6IFwiXzIxNjA4QjZBLTFEOUUtNDI2RC04NkNGLUIwQ0E3QUIyMEQzMVwiLFxuICBcIkBfbGFiZWxcIjogXCJDYW4gZHJpdmU/XCIsXG4gIFwiQF90eXBlUmVmXCI6IERtbkJ1aWx0SW5EYXRhVHlwZS5Cb29sZWFuLFxuICBcIkBfaGl0UG9saWN5XCI6IFwiVU5JUVVFXCIsXG4gIGFubm90YXRpb246IFt7XG4gICAgXCJAX25hbWVcIjogXCJBbm5vdGF0aW9uc1wiXG4gIH1dLFxuICBpbnB1dDogW3tcbiAgICBcIkBfaWRcIjogXCJfRTJGODhGNzUtN0ZEMi00Q0VELUE3QUMtMDE1NjE5MTc2MDcyXCIsXG4gICAgaW5wdXRFeHByZXNzaW9uOiB7XG4gICAgICBcIkBfaWRcIjogXCJfMDkyQUY4NkUtNUQ4Qy00Mjk5LTk5OTgtOENCM0IyRERGNzExXCIsXG4gICAgICBcIkBfdHlwZVJlZlwiOiBEbW5CdWlsdEluRGF0YVR5cGUuTnVtYmVyLFxuICAgICAgdGV4dDoge1xuICAgICAgICBfXyQkdGV4dDogXCJQZXJzb24uQWdlXCJcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBcIkBfaWRcIjogXCJfNkI1RDRBOTktQzczRS00REMyLThFRUMtMDE1ODE5NkYzMEQ2XCIsXG4gICAgaW5wdXRFeHByZXNzaW9uOiB7XG4gICAgICBcIkBfaWRcIjogXCJfMTRDMkJDQzYtNTA1OS00MEEyLTk0MDYtRTIwNkM1Q0I2QUY1XCIsXG4gICAgICBcIkBfdHlwZVJlZlwiOiBEbW5CdWlsdEluRGF0YVR5cGUuU3RyaW5nLFxuICAgICAgdGV4dDoge1xuICAgICAgICBfXyQkdGV4dDogXCJQZXJzb24uQ291bnRyeVwiXG4gICAgICB9XG4gICAgfVxuICB9XSxcbiAgb3V0cHV0OiBbe1xuICAgIFwiQF9pZFwiOiBcIl82RThGNjFENi0zMDhBLTRFMzctQTA4OC1GMDI2NUNENzNGMUJcIixcbiAgICBcIkBfbmFtZVwiOiBcIm91dHB1dC0xXCIsXG4gICAgXCJAX3R5cGVSZWZcIjogRG1uQnVpbHRJbkRhdGFUeXBlLkJvb2xlYW5cbiAgfV0sXG4gIHJ1bGU6IFt7XG4gICAgXCJAX2lkXCI6IFwiX0U4MTMyN0I5LTVFNDctNEM0MS1BRkRDLTczRURDQTFENDNCOFwiLFxuICAgIGlucHV0RW50cnk6IFt7XG4gICAgICBcIkBfaWRcIjogXCJfN0VGQzRGMjctMDlEMC00MjA2LUJENUMtMUM3MjA4MUQ5QTc1XCIsXG4gICAgICB0ZXh0OiB7XG4gICAgICAgIF9fJCR0ZXh0OiBcIj49IDE4XCJcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBcIkBfaWRcIjogXCJfQTRCRDA4MEEtNkY3Ni00NjNBLUI4RTgtODU2MEM5QTc5MzE5XCIsXG4gICAgICB0ZXh0OiB7XG4gICAgICAgIF9fJCR0ZXh0OiAnXCJCcmF6aWxcIidcbiAgICAgIH1cbiAgICB9XSxcbiAgICBvdXRwdXRFbnRyeTogW3tcbiAgICAgIFwiQF9pZFwiOiBcIl9GNDA4MzJENC04RTFCLTQxQ0QtOEExRS0yMzg0RUVEOTg2M0ZcIixcbiAgICAgIHRleHQ6IHtcbiAgICAgICAgX18kJHRleHQ6IFwidHJ1ZVwiXG4gICAgICB9XG4gICAgfV1cbiAgfSwge1xuICAgIFwiQF9pZFwiOiBcIl8xRkFGMjM1Mi00Qzc0LTREQjItOTg0NC01NDQ2RTdBNzMyQzRcIixcbiAgICBpbnB1dEVudHJ5OiBbe1xuICAgICAgXCJAX2lkXCI6IFwiXzM0Rjk0Nzc0LTZEMEYtNDc0Ri04OEZCLUNCQTE2NEEyNTc1NlwiLFxuICAgICAgdGV4dDoge1xuICAgICAgICBfXyQkdGV4dDogXCI8IDE4XCJcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBcIkBfaWRcIjogXCJfRkY0QzRFRUQtNzg0NS00MkY4LTgyQTYtMTVGMDAyQTY1RjVCXCIsXG4gICAgICB0ZXh0OiB7XG4gICAgICAgIF9fJCR0ZXh0OiAnXCJCcmF6aWxcIidcbiAgICAgIH1cbiAgICB9XSxcbiAgICBvdXRwdXRFbnRyeTogW3tcbiAgICAgIFwiQF9pZFwiOiBcIl9EMDZENEFFOS0yMjQ2LTRBMzYtOEI5Ny1GRTE4QkI4OTNBQkRcIixcbiAgICAgIHRleHQ6IHtcbiAgICAgICAgX18kJHRleHQ6IFwiZmFsc2VcIlxuICAgICAgfVxuICAgIH1dXG4gIH0sIHtcbiAgICBcIkBfaWRcIjogXCJfMDBCMjcwN0EtMzZGRS00OTI3LUI0M0MtQ0QzNkQ3MUREMEFFXCIsXG4gICAgaW5wdXRFbnRyeTogW3tcbiAgICAgIFwiQF9pZFwiOiBcIl9FQTBDOUZBMC1GOTU5LTQ2REEtOTdBNy05OEI5MzVDMDA0MTRcIixcbiAgICAgIHRleHQ6IHtcbiAgICAgICAgX18kJHRleHQ6IFwiPj0gMTdcIlxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIFwiQF9pZFwiOiBcIl9GOEY1NkFBOS0yMjNCLTRDNjYtQjY2Ni0xNTEyN0FBOEFCODZcIixcbiAgICAgIHRleHQ6IHtcbiAgICAgICAgX18kJHRleHQ6ICdcIkVuZ2xhbmRcIidcbiAgICAgIH1cbiAgICB9XSxcbiAgICBvdXRwdXRFbnRyeTogW3tcbiAgICAgIFwiQF9pZFwiOiBcIl81MTE3OUQ5Mi1BNzc1LTQ3NzYtOTIyOC01MDJBMTc0NkZCMUZcIixcbiAgICAgIHRleHQ6IHtcbiAgICAgICAgX18kJHRleHQ6IFwidHJ1ZVwiXG4gICAgICB9XG4gICAgfV1cbiAgfSwge1xuICAgIFwiQF9pZFwiOiBcIl8yREZDRDJCMS1GQzgzLTQzOTgtQjQ4Mi0zMzE1RDQ4MDk2NDBcIixcbiAgICBpbnB1dEVudHJ5OiBbe1xuICAgICAgXCJAX2lkXCI6IFwiXzk3NDE0OENCLTIzNzItNDA0NC04Q0I0LUFFMEIzNjgxOTgyOVwiLFxuICAgICAgdGV4dDoge1xuICAgICAgICBfXyQkdGV4dDogXCI8IDE3XCJcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBcIkBfaWRcIjogXCJfRDc5Mjk4ODEtQTIwMy00MzhGLUJFNzktODE2MzIzNTE1MDFEXCIsXG4gICAgICB0ZXh0OiB7XG4gICAgICAgIF9fJCR0ZXh0OiAnXCJFbmdsYW5kXCInXG4gICAgICB9XG4gICAgfV0sXG4gICAgb3V0cHV0RW50cnk6IFt7XG4gICAgICBcIkBfaWRcIjogXCJfNkFDQjhEOTAtRjg2Ny00QkNFLUFDM0EtMTEwMENDMkI3NzhFXCIsXG4gICAgICB0ZXh0OiB7XG4gICAgICAgIF9fJCR0ZXh0OiBcImZhbHNlXCJcbiAgICAgIH1cbiAgICB9XVxuICB9LCB7XG4gICAgXCJAX2lkXCI6IFwiXzVFM0U1OEI2LUFFQTgtNDU4MC04QkFCLTE4NDhDQUU2NzVFOFwiLFxuICAgIGlucHV0RW50cnk6IFt7XG4gICAgICBcIkBfaWRcIjogXCJfMjQ0QzAxNDItMkY4MC00RkM1LUEwMkItMzAzQjM2QTIyRDZBXCIsXG4gICAgICB0ZXh0OiB7XG4gICAgICAgIF9fJCR0ZXh0OiBcIj49IDE2XCJcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBcIkBfaWRcIjogXCJfRkYyNEJERTYtNzJGMC00OUVCLTk4MTktNTc5MDQwRDVBMEQ3XCIsXG4gICAgICB0ZXh0OiB7XG4gICAgICAgIF9fJCR0ZXh0OiAnXCJVU1wiJ1xuICAgICAgfVxuICAgIH1dLFxuICAgIG91dHB1dEVudHJ5OiBbe1xuICAgICAgXCJAX2lkXCI6IFwiXzQ1RTY2M0ExLTNCNTItNDY3Mi05N0Q2LTA1Q0E2NjM5MEQyMFwiLFxuICAgICAgdGV4dDoge1xuICAgICAgICBfXyQkdGV4dDogXCJ0cnVlXCJcbiAgICAgIH1cbiAgICB9XVxuICB9LCB7XG4gICAgXCJAX2lkXCI6IFwiX0FCRjA4REY1LUNEMjktNDQ1My04RjczLTYxMjU2NUQ3NUUwM1wiLFxuICAgIGlucHV0RW50cnk6IFt7XG4gICAgICBcIkBfaWRcIjogXCJfQzZFMjhGMjktQ0Q0QS00QjFBLTg1NUMtNkZBQzUxRkEwOUQyXCIsXG4gICAgICB0ZXh0OiB7XG4gICAgICAgIF9fJCR0ZXh0OiBcIjwgMTZcIlxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIFwiQF9pZFwiOiBcIl9BNEY2MTU1Ny0yRDMwLTQ4NUUtODBCMS1FRThCODE1QzRGRjVcIixcbiAgICAgIHRleHQ6IHtcbiAgICAgICAgX18kJHRleHQ6ICdcIlVTXCInXG4gICAgICB9XG4gICAgfV0sXG4gICAgb3V0cHV0RW50cnk6IFt7XG4gICAgICBcIkBfaWRcIjogXCJfRjIwNDJFNzMtQ0RFMC00QkFDLUEyMTktOEQ3RTUyMTc1RDk0XCIsXG4gICAgICB0ZXh0OiB7XG4gICAgICAgIF9fJCR0ZXh0OiBcImZhbHNlXCJcbiAgICAgIH1cbiAgICB9XVxuICB9XVxufTtcbmV4cG9ydCBjb25zdCBjYW5Ecml2ZVdpZHRoc0J5SWQgPSB7XG4gIFwiXzIxNjA4QjZBLTFEOUUtNDI2RC04NkNGLUIwQ0E3QUIyMEQzMVwiOiBbQkVFX1RBQkxFX1JPV19JTkRFWF9DT0xVTU5fV0lEVEgsIDEwMCwgMTAwLCAxMDBdXG59O1xuXG4vLyBNb3JlIG9uIHdyaXRpbmcgc3RvcmllcyB3aXRoIGFyZ3M6IGh0dHBzOi8vc3Rvcnlib29rLmpzLm9yZy9kb2NzL3JlYWN0L3dyaXRpbmctc3Rvcmllcy9hcmdzXG5leHBvcnQgY29uc3QgRXhwcmVzc2lvbjogU3RvcnkgPSB7XG4gIHJlbmRlcjogYXJncyA9PiBCb3hlZEV4cHJlc3Npb25FZGl0b3JTdG9yeSgpLFxuICBhcmdzOiB7XG4gICAgZXhwcmVzc2lvbkhvbGRlcklkOiBcIl8wMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDBcIixcbiAgICBleHByZXNzaW9uOiBjYW5Ecml2ZUV4cHJlc3Npb25EZWZpbml0aW9uLFxuICAgIHdpZHRoc0J5SWQ6IGNhbkRyaXZlV2lkdGhzQnlJZCxcbiAgICBkYXRhVHlwZXM6IGZpbmRFbXBsb3llZXNEYXRhVHlwZXMsXG4gICAgYmVlR3d0U2VydmljZSxcbiAgICBwbW1sRG9jdW1lbnRzLFxuICAgIGlzUmVzZXRTdXBwb3J0ZWRPblJvb3RFeHByZXNzaW9uOiBmYWxzZVxuICB9XG59O1xuRXhwcmVzc2lvbi5wYXJhbWV0ZXJzID0ge1xuICAuLi5FeHByZXNzaW9uLnBhcmFtZXRlcnMsXG4gIGRvY3M6IHtcbiAgICAuLi5FeHByZXNzaW9uLnBhcmFtZXRlcnM/LmRvY3MsXG4gICAgc291cmNlOiB7XG4gICAgICBvcmlnaW5hbFNvdXJjZTogXCJ7XFxuICByZW5kZXI6IGFyZ3MgPT4gQm94ZWRFeHByZXNzaW9uRWRpdG9yU3RvcnkoKSxcXG4gIGFyZ3M6IHtcXG4gICAgZXhwcmVzc2lvbkhvbGRlcklkOiBcXFwiXzAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMFxcXCIsXFxuICAgIGV4cHJlc3Npb246IGNhbkRyaXZlRXhwcmVzc2lvbkRlZmluaXRpb24sXFxuICAgIHdpZHRoc0J5SWQ6IGNhbkRyaXZlV2lkdGhzQnlJZCxcXG4gICAgZGF0YVR5cGVzOiBmaW5kRW1wbG95ZWVzRGF0YVR5cGVzLFxcbiAgICBiZWVHd3RTZXJ2aWNlLFxcbiAgICBwbW1sRG9jdW1lbnRzLFxcbiAgICBpc1Jlc2V0U3VwcG9ydGVkT25Sb290RXhwcmVzc2lvbjogZmFsc2VcXG4gIH1cXG59XCIsXG4gICAgICAuLi5FeHByZXNzaW9uLnBhcmFtZXRlcnM/LmRvY3M/LnNvdXJjZVxuICAgIH1cbiAgfVxufTsiLCIvKlxuICogTGljZW5zZWQgdG8gdGhlIEFwYWNoZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIChBU0YpIHVuZGVyIG9uZVxuICogb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuICBTZWUgdGhlIE5PVElDRSBmaWxlXG4gKiBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvblxuICogcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuICBUaGUgQVNGIGxpY2Vuc2VzIHRoaXMgZmlsZVxuICogdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZVxuICogXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4gKiB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZyxcbiAqIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXG4gKiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxuICogS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlXG4gKiBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zXG4gKiB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgeyBCb3hlZEludm9jYXRpb24sIERtbkJ1aWx0SW5EYXRhVHlwZSwgTm9ybWFsaXplZCB9IGZyb20gXCIuLi8uLi8uLi8uLi8uLi9zcmMvYXBpXCI7XG5pbXBvcnQgdHlwZSB7IE1ldGEsIFN0b3J5T2JqIH0gZnJvbSBcIkBzdG9yeWJvb2svcmVhY3RcIjtcbmltcG9ydCB7IGJlZUd3dFNlcnZpY2UsIEJveGVkRXhwcmVzc2lvbkVkaXRvclN0b3J5LCBCb3hlZEV4cHJlc3Npb25FZGl0b3JTdG9yeUFyZ3MsIHBtbWxEb2N1bWVudHMgfSBmcm9tIFwiLi4vLi4vLi4vLi4vYm94ZWRFeHByZXNzaW9uU3Rvcmllc1dyYXBwZXJcIjtcbmltcG9ydCB7IEJveGVkRXhwcmVzc2lvbkVkaXRvciwgQm94ZWRFeHByZXNzaW9uRWRpdG9yUHJvcHMgfSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vc3JjL0JveGVkRXhwcmVzc2lvbkVkaXRvclwiO1xuaW1wb3J0IHsgbG9hbk9yaWdpbmF0aW9uc0RhdGFUeXBlcyB9IGZyb20gXCIuLi8uLi9ib3hlZEV4cHJlc3Npb25FZGl0b3JCYXNlXCI7XG5cbi8vIE1vcmUgb24gaG93IHRvIHNldCB1cCBzdG9yaWVzIGF0OiBodHRwczovL3N0b3J5Ym9vay5qcy5vcmcvZG9jcy9yZWFjdC93cml0aW5nLXN0b3JpZXMvaW50cm9kdWN0aW9uI2RlZmF1bHQtZXhwb3J0XG5jb25zdCBtZXRhOiBNZXRhPEJveGVkRXhwcmVzc2lvbkVkaXRvclByb3BzPiA9IHtcbiAgdGl0bGU6IFwiVXNlIGNhc2VzL0xvYW4gT3JpZ2luYXRpb25zL1JvdXRpbmcgRGVjaXNpb24gU2VydmljZS9Qb3N0IEJ1cmVhdSBBZmZvcmRhYmlsaXR5XCIsXG4gIGNvbXBvbmVudDogQm94ZWRFeHByZXNzaW9uRWRpdG9yLFxuICBpbmNsdWRlU3RvcmllczogL15bQS1aXS9cbn07XG5leHBvcnQgZGVmYXVsdCBtZXRhO1xudHlwZSBTdG9yeSA9IFN0b3J5T2JqPEJveGVkRXhwcmVzc2lvbkVkaXRvclN0b3J5QXJncz47XG5leHBvcnQgY29uc3QgcG9zdEJ1cmVhdUFmZm9yZGFiaWxpdHlFeHByZXNzaW9uOiBOb3JtYWxpemVkPEJveGVkSW52b2NhdGlvbj4gPSB7XG4gIF9fJCRlbGVtZW50OiBcImludm9jYXRpb25cIixcbiAgXCJAX2lkXCI6IFwiXzFFODgwMDA5LTc3QjItNDMwOS1BRTJBLTg5NjRFMDU2MzZCMVwiLFxuICBcIkBfbGFiZWxcIjogXCJQb3N0LWJ1cmVhdSBhZmZvcmRhYmlsaXR5XCIsXG4gIFwiQF90eXBlUmVmXCI6IERtbkJ1aWx0SW5EYXRhVHlwZS5Cb29sZWFuLFxuICBleHByZXNzaW9uOiB7XG4gICAgX18kJGVsZW1lbnQ6IFwibGl0ZXJhbEV4cHJlc3Npb25cIixcbiAgICBcIkBfaWRcIjogXCJfMEIxNTEzNTktNjNGNi00REFCLUJDODgtNTNGMzQ0NDZGOUM3XCIsXG4gICAgdGV4dDoge1xuICAgICAgX18kJHRleHQ6IFwiZi5BZmZvcmRhYmlsaXR5IGNhbGN1bGF0aW9uXCJcbiAgICB9XG4gIH0sXG4gIGJpbmRpbmc6IFt7XG4gICAgcGFyYW1ldGVyOiB7XG4gICAgICBcIkBfaWRcIjogXCJfMjg4MkRFRUYtMDNFOS00MzFCLTlFOTYtMEI5RTA2REJEQkZBXCIsXG4gICAgICBcIkBfbmFtZVwiOiBcIk1vbnRobHkgSW5jb21lXCIsXG4gICAgICBcIkBfdHlwZVJlZlwiOiBEbW5CdWlsdEluRGF0YVR5cGUuTnVtYmVyXG4gICAgfSxcbiAgICBleHByZXNzaW9uOiB7XG4gICAgICBfXyQkZWxlbWVudDogXCJsaXRlcmFsRXhwcmVzc2lvblwiLFxuICAgICAgXCJAX2lkXCI6IFwiX0ZBRDEyMDg3LUMyQjYtNDA2MC04NDBCLTA3Nzk3MkRDQ0I4MFwiLFxuICAgICAgXCJAX2xhYmVsXCI6IFwiTW9udGhseSBJbmNvbWVcIixcbiAgICAgIFwiQF90eXBlUmVmXCI6IERtbkJ1aWx0SW5EYXRhVHlwZS5OdW1iZXIsXG4gICAgICB0ZXh0OiB7XG4gICAgICAgIF9fJCR0ZXh0OiBcIkFwcGxpY2FudCBkYXRhLk1vbnRobHkuSW5jb21lXCJcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBwYXJhbWV0ZXI6IHtcbiAgICAgIFwiQF9pZFwiOiBcIl9FQ0NDNjYxRi05NDg5LTQ5NEEtODFBOS1DQUREMTgwNzUyMzVcIixcbiAgICAgIFwiQF9uYW1lXCI6IFwiTW9udGhseSBSZXBheW1lbnRzXCIsXG4gICAgICBcIkBfdHlwZVJlZlwiOiBEbW5CdWlsdEluRGF0YVR5cGUuTnVtYmVyXG4gICAgfSxcbiAgICBleHByZXNzaW9uOiB7XG4gICAgICBfXyQkZWxlbWVudDogXCJsaXRlcmFsRXhwcmVzc2lvblwiLFxuICAgICAgXCJAX2lkXCI6IFwiXzc5RjBFNzA2LTYwMTgtNDlBQi04NkVCLTc4QUM1NTU4MkNFN1wiLFxuICAgICAgXCJAX2xhYmVsXCI6IFwiTW9udGhseSBSZXBheW1lbnRzXCIsXG4gICAgICBcIkBfdHlwZVJlZlwiOiBEbW5CdWlsdEluRGF0YVR5cGUuTnVtYmVyLFxuICAgICAgdGV4dDoge1xuICAgICAgICBfXyQkdGV4dDogXCJBcHBsaWNhbnQgZGF0YS5Nb250aGx5LlJlcGF5bWVudHNcIlxuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIHBhcmFtZXRlcjoge1xuICAgICAgXCJAX2lkXCI6IFwiXzUwQ0IxNjcxLThBNTEtNDBBMi1CODZDLTVBNTlBNzZBREE5OVwiLFxuICAgICAgXCJAX25hbWVcIjogXCJNb250aGx5IEV4cGVuc2VzXCIsXG4gICAgICBcIkBfdHlwZVJlZlwiOiBEbW5CdWlsdEluRGF0YVR5cGUuTnVtYmVyXG4gICAgfSxcbiAgICBleHByZXNzaW9uOiB7XG4gICAgICBfXyQkZWxlbWVudDogXCJsaXRlcmFsRXhwcmVzc2lvblwiLFxuICAgICAgXCJAX2lkXCI6IFwiX0E1NDFBQTdELTJERTgtNEUwNC1CNUM5LTAzMjBFRTdEMjZCRVwiLFxuICAgICAgXCJAX2xhYmVsXCI6IFwiTW9udGhseSBFeHBlbnNlc1wiLFxuICAgICAgXCJAX3R5cGVSZWZcIjogRG1uQnVpbHRJbkRhdGFUeXBlLk51bWJlcixcbiAgICAgIHRleHQ6IHtcbiAgICAgICAgX18kJHRleHQ6IFwiQXBwbGljYW50IGRhdGEuTW9udGhseS5FeHBlbnNlc1wiXG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAgcGFyYW1ldGVyOiB7XG4gICAgICBcIkBfaWRcIjogXCJfMUI0QTk1NzItQjY3Qi00RDUyLTk0QjAtQTk5MEIzMTE0ODEwXCIsXG4gICAgICBcIkBfbmFtZVwiOiBcIlJpc2sgQ2F0ZWdvcnlcIixcbiAgICAgIFwiQF90eXBlUmVmXCI6IFwidC5CdXJlYXVSaXNrQ2F0ZWdvcnlcIiBhcyBEbW5CdWlsdEluRGF0YVR5cGVcbiAgICB9LFxuICAgIGV4cHJlc3Npb246IHtcbiAgICAgIF9fJCRlbGVtZW50OiBcImxpdGVyYWxFeHByZXNzaW9uXCIsXG4gICAgICBcIkBfaWRcIjogXCJfOUMzQzZFRDUtRjg3NS00QzVCLUE3QzEtNzZEMTBEQzJFNURGXCIsXG4gICAgICBcIkBfbGFiZWxcIjogXCJSaXNrIENhdGVnb3J5XCIsXG4gICAgICBcIkBfdHlwZVJlZlwiOiBcInQuQnVyZWF1Umlza0NhdGVnb3J5XCIgYXMgRG1uQnVpbHRJbkRhdGFUeXBlLFxuICAgICAgdGV4dDoge1xuICAgICAgICBfXyQkdGV4dDogXCJQb3N0LWJ1cmVhdSByaXNrIGNhdGVnb3J5XCJcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBwYXJhbWV0ZXI6IHtcbiAgICAgIFwiQF9pZFwiOiBcIl82QzgzMUM2Ny1GODBDLTQ0RkMtQjRCNi01NUZENEJBRTFBNzlcIixcbiAgICAgIFwiQF9uYW1lXCI6IFwiUmVxdWlyZWQgTW9udGhseSBJbnN0YWxsbWVudFwiLFxuICAgICAgXCJAX3R5cGVSZWZcIjogRG1uQnVpbHRJbkRhdGFUeXBlLk51bWJlclxuICAgIH0sXG4gICAgZXhwcmVzc2lvbjoge1xuICAgICAgX18kJGVsZW1lbnQ6IFwibGl0ZXJhbEV4cHJlc3Npb25cIixcbiAgICAgIFwiQF9pZFwiOiBcIl82NTYxMTBFOS1BMjM0LTQ2QTQtQjRDRi03RkQ2OTFGOEY1NjVcIixcbiAgICAgIFwiQF9sYWJlbFwiOiBcIlJlcXVpcmVkIE1vbnRobHkgSW5zdGFsbG1lbnRcIixcbiAgICAgIFwiQF90eXBlUmVmXCI6IERtbkJ1aWx0SW5EYXRhVHlwZS5OdW1iZXIsXG4gICAgICB0ZXh0OiB7XG4gICAgICAgIF9fJCR0ZXh0OiBcIlJlcXVpcmVkIG1vbnRobHkgaW5zdGFsbG1lbnRcIlxuICAgICAgfVxuICAgIH1cbiAgfV1cbn07XG5leHBvcnQgY29uc3QgcG9zdEJ1cmVhdUFmZm9yZGFiaWxpdHlXaWR0aHNCeUlkID0ge1xuICBcIl8xRTg4MDAwOS03N0IyLTQzMDktQUUyQS04OTY0RTA1NjM2QjFcIjogWzE4MCwgMzAwXSxcbiAgXCJfRkFEMTIwODctQzJCNi00MDYwLTg0MEItMDc3OTcyRENDQjgwXCI6IFszMDBdLFxuICBcIl83OUYwRTcwNi02MDE4LTQ5QUItODZFQi03OEFDNTU1ODJDRTdcIjogWzMwMF0sXG4gIFwiX0E1NDFBQTdELTJERTgtNEUwNC1CNUM5LTAzMjBFRTdEMjZCRVwiOiBbMzAwXSxcbiAgXCJfOUMzQzZFRDUtRjg3NS00QzVCLUE3QzEtNzZEMTBEQzJFNURGXCI6IFszMDBdLFxuICBcIl82NTYxMTBFOS1BMjM0LTQ2QTQtQjRDRi03RkQ2OTFGOEY1NjVcIjogWzMwMF1cbn07XG5cbi8vIE1vcmUgb24gd3JpdGluZyBzdG9yaWVzIHdpdGggYXJnczogaHR0cHM6Ly9zdG9yeWJvb2suanMub3JnL2RvY3MvcmVhY3Qvd3JpdGluZy1zdG9yaWVzL2FyZ3NcbmV4cG9ydCBjb25zdCBFeHByZXNzaW9uOiBTdG9yeSA9IHtcbiAgcmVuZGVyOiBhcmdzID0+IEJveGVkRXhwcmVzc2lvbkVkaXRvclN0b3J5KCksXG4gIGFyZ3M6IHtcbiAgICBleHByZXNzaW9uSG9sZGVySWQ6IFwiXzAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMFwiLFxuICAgIGV4cHJlc3Npb246IHBvc3RCdXJlYXVBZmZvcmRhYmlsaXR5RXhwcmVzc2lvbixcbiAgICB3aWR0aHNCeUlkOiBwb3N0QnVyZWF1QWZmb3JkYWJpbGl0eVdpZHRoc0J5SWQsXG4gICAgZGF0YVR5cGVzOiBsb2FuT3JpZ2luYXRpb25zRGF0YVR5cGVzLFxuICAgIGJlZUd3dFNlcnZpY2UsXG4gICAgcG1tbERvY3VtZW50cyxcbiAgICBpc1Jlc2V0U3VwcG9ydGVkT25Sb290RXhwcmVzc2lvbjogZmFsc2VcbiAgfVxufTtcbkV4cHJlc3Npb24ucGFyYW1ldGVycyA9IHtcbiAgLi4uRXhwcmVzc2lvbi5wYXJhbWV0ZXJzLFxuICBkb2NzOiB7XG4gICAgLi4uRXhwcmVzc2lvbi5wYXJhbWV0ZXJzPy5kb2NzLFxuICAgIHNvdXJjZToge1xuICAgICAgb3JpZ2luYWxTb3VyY2U6IFwie1xcbiAgcmVuZGVyOiBhcmdzID0+IEJveGVkRXhwcmVzc2lvbkVkaXRvclN0b3J5KCksXFxuICBhcmdzOiB7XFxuICAgIGV4cHJlc3Npb25Ib2xkZXJJZDogXFxcIl8wMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDBcXFwiLFxcbiAgICBleHByZXNzaW9uOiBwb3N0QnVyZWF1QWZmb3JkYWJpbGl0eUV4cHJlc3Npb24sXFxuICAgIHdpZHRoc0J5SWQ6IHBvc3RCdXJlYXVBZmZvcmRhYmlsaXR5V2lkdGhzQnlJZCxcXG4gICAgZGF0YVR5cGVzOiBsb2FuT3JpZ2luYXRpb25zRGF0YVR5cGVzLFxcbiAgICBiZWVHd3RTZXJ2aWNlLFxcbiAgICBwbW1sRG9jdW1lbnRzLFxcbiAgICBpc1Jlc2V0U3VwcG9ydGVkT25Sb290RXhwcmVzc2lvbjogZmFsc2VcXG4gIH1cXG59XCIsXG4gICAgICAuLi5FeHByZXNzaW9uLnBhcmFtZXRlcnM/LmRvY3M/LnNvdXJjZVxuICAgIH1cbiAgfVxufTsiLCIvKlxuICogTGljZW5zZWQgdG8gdGhlIEFwYWNoZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIChBU0YpIHVuZGVyIG9uZVxuICogb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuICBTZWUgdGhlIE5PVElDRSBmaWxlXG4gKiBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvblxuICogcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuICBUaGUgQVNGIGxpY2Vuc2VzIHRoaXMgZmlsZVxuICogdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZVxuICogXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4gKiB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZyxcbiAqIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXG4gKiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxuICogS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlXG4gKiBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zXG4gKiB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQge1xuICBCb3hlZENvbmRpdGlvbmFsLFxuICBCb3hlZENvbnRleHQsXG4gIEJveGVkRGVjaXNpb25UYWJsZSxcbiAgQm94ZWRFdmVyeSxcbiAgQm94ZWRFeHByZXNzaW9uLFxuICBCb3hlZEZpbHRlcixcbiAgQm94ZWRGb3IsXG4gIEJveGVkRnVuY3Rpb24sXG4gIEJveGVkRnVuY3Rpb25LaW5kLFxuICBCb3hlZEludm9jYXRpb24sXG4gIEJveGVkTGlzdCxcbiAgQm94ZWRMaXRlcmFsLFxuICBCb3hlZFJlbGF0aW9uLFxuICBCb3hlZFNvbWUsXG4gIGdlbmVyYXRlVXVpZCxcbiAgTm9ybWFsaXplZCxcbn0gZnJvbSBcIi4uLy4uL3NyYy9hcGlcIjtcbmltcG9ydCB7IElOVk9DQVRJT05fRVhQUkVTU0lPTl9ERUZBVUxUX1BBUkFNRVRFUl9OQU1FIH0gZnJvbSBcIi4uLy4uL3NyYy9leHByZXNzaW9ucy9JbnZvY2F0aW9uRXhwcmVzc2lvbi9JbnZvY2F0aW9uRXhwcmVzc2lvblwiO1xuaW1wb3J0IHtcbiAgREVDSVNJT05fVEFCTEVfSU5QVVRfREVGQVVMVF9WQUxVRSxcbiAgREVDSVNJT05fVEFCTEVfT1VUUFVUX0RFRkFVTFRfVkFMVUUsXG59IGZyb20gXCIuLi8uLi9zcmMvZXhwcmVzc2lvbnMvRGVjaXNpb25UYWJsZUV4cHJlc3Npb24vRGVjaXNpb25UYWJsZUV4cHJlc3Npb25cIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldERlZmF1bHRCb3hlZEV4cHJlc3Npb25Gb3JEZXZXZWJhcHAoXG4gIGxvZ2ljVHlwZTogQm94ZWRFeHByZXNzaW9uW1wiX18kJGVsZW1lbnRcIl0gfCB1bmRlZmluZWQsXG4gIHR5cGVSZWY6IHN0cmluZyB8IHVuZGVmaW5lZFxuKTogTm9ybWFsaXplZDxCb3hlZEV4cHJlc3Npb24+IHtcbiAgaWYgKGxvZ2ljVHlwZSA9PT0gXCJsaXRlcmFsRXhwcmVzc2lvblwiKSB7XG4gICAgY29uc3QgbGl0ZXJhbEV4cHJlc3Npb246IE5vcm1hbGl6ZWQ8Qm94ZWRMaXRlcmFsPiA9IHtcbiAgICAgIF9fJCRlbGVtZW50OiBcImxpdGVyYWxFeHByZXNzaW9uXCIsXG4gICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICBcIkBfdHlwZVJlZlwiOiB0eXBlUmVmLFxuICAgIH07XG4gICAgcmV0dXJuIGxpdGVyYWxFeHByZXNzaW9uO1xuICB9IGVsc2UgaWYgKGxvZ2ljVHlwZSA9PT0gXCJmdW5jdGlvbkRlZmluaXRpb25cIikge1xuICAgIGNvbnN0IGZ1bmN0aW9uRXhwcmVzc2lvbjogTm9ybWFsaXplZDxCb3hlZEZ1bmN0aW9uPiA9IHtcbiAgICAgIF9fJCRlbGVtZW50OiBcImZ1bmN0aW9uRGVmaW5pdGlvblwiLFxuICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgXCJAX3R5cGVSZWZcIjogdHlwZVJlZixcbiAgICAgIFwiQF9raW5kXCI6IEJveGVkRnVuY3Rpb25LaW5kLkZlZWwsXG4gICAgICBleHByZXNzaW9uOiB1bmRlZmluZWQhLFxuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uRXhwcmVzc2lvbjtcbiAgfSBlbHNlIGlmIChsb2dpY1R5cGUgPT09IFwiY29udGV4dFwiKSB7XG4gICAgY29uc3QgY29udGV4dEV4cHJlc3Npb246IE5vcm1hbGl6ZWQ8Qm94ZWRDb250ZXh0PiA9IHtcbiAgICAgIF9fJCRlbGVtZW50OiBcImNvbnRleHRcIixcbiAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICAgIFwiQF90eXBlUmVmXCI6IHR5cGVSZWYsXG4gICAgICBjb250ZXh0RW50cnk6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICAgICAgICB2YXJpYWJsZToge1xuICAgICAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgICAgICAgXCJAX25hbWVcIjogXCJDb250ZXh0RW50cnktMVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZXhwcmVzc2lvbjogdW5kZWZpbmVkISxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICAgICAgICB2YXJpYWJsZToge1xuICAgICAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgICAgICAgXCJAX25hbWVcIjogXCJDb250ZXh0RW50cnktMlwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZXhwcmVzc2lvbjogdW5kZWZpbmVkISxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICAgICAgICBleHByZXNzaW9uOiB1bmRlZmluZWQhLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9O1xuICAgIHJldHVybiBjb250ZXh0RXhwcmVzc2lvbjtcbiAgfSBlbHNlIGlmIChsb2dpY1R5cGUgPT09IFwibGlzdFwiKSB7XG4gICAgY29uc3QgbGlzdEV4cHJlc3Npb246IE5vcm1hbGl6ZWQ8Qm94ZWRMaXN0PiA9IHtcbiAgICAgIF9fJCRlbGVtZW50OiBcImxpc3RcIixcbiAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICAgIFwiQF90eXBlUmVmXCI6IHR5cGVSZWYsXG4gICAgICBleHByZXNzaW9uOiBbdW5kZWZpbmVkISwgdW5kZWZpbmVkISwgdW5kZWZpbmVkIV0sXG4gICAgfTtcbiAgICByZXR1cm4gbGlzdEV4cHJlc3Npb247XG4gIH0gZWxzZSBpZiAobG9naWNUeXBlID09PSBcImludm9jYXRpb25cIikge1xuICAgIGNvbnN0IGludm9jYXRpb25FeHByZXNzaW9uOiBOb3JtYWxpemVkPEJveGVkSW52b2NhdGlvbj4gPSB7XG4gICAgICBfXyQkZWxlbWVudDogXCJpbnZvY2F0aW9uXCIsXG4gICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICBcIkBfdHlwZVJlZlwiOiB0eXBlUmVmLFxuICAgICAgYmluZGluZzogW1xuICAgICAgICB7XG4gICAgICAgICAgcGFyYW1ldGVyOiB7XG4gICAgICAgICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICAgICAgICBcIkBfbmFtZVwiOiBJTlZPQ0FUSU9OX0VYUFJFU1NJT05fREVGQVVMVF9QQVJBTUVURVJfTkFNRSxcbiAgICAgICAgICAgIFwiQF90eXBlUmVmXCI6IHVuZGVmaW5lZCxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIGV4cHJlc3Npb246IHtcbiAgICAgICAgX18kJGVsZW1lbnQ6IFwibGl0ZXJhbEV4cHJlc3Npb25cIixcbiAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgICB0ZXh0OiB7IF9fJCR0ZXh0OiBcIkZVTkNUSU9OXCIgfSxcbiAgICAgIH0sXG4gICAgfTtcbiAgICByZXR1cm4gaW52b2NhdGlvbkV4cHJlc3Npb247XG4gIH0gZWxzZSBpZiAobG9naWNUeXBlID09PSBcInJlbGF0aW9uXCIpIHtcbiAgICBjb25zdCByZWxhdGlvbkV4cHJlc3Npb246IE5vcm1hbGl6ZWQ8Qm94ZWRSZWxhdGlvbj4gPSB7XG4gICAgICBfXyQkZWxlbWVudDogXCJyZWxhdGlvblwiLFxuICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgXCJAX3R5cGVSZWZcIjogdHlwZVJlZixcbiAgICAgIGNvbHVtbjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgICAgIFwiQF9uYW1lXCI6IFwiY29sdW1uLTFcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICAgICAgICBcIkBfbmFtZVwiOiBcImNvbHVtbi0yXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICAgICAgXCJAX25hbWVcIjogXCJjb2x1bW4tM1wiLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIHJvdzogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgICAgIGV4cHJlc3Npb246IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgX18kJGVsZW1lbnQ6IFwibGl0ZXJhbEV4cHJlc3Npb25cIixcbiAgICAgICAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgICAgICAgICB0ZXh0OiB7IF9fJCR0ZXh0OiBcIlwiIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBfXyQkZWxlbWVudDogXCJsaXRlcmFsRXhwcmVzc2lvblwiLFxuICAgICAgICAgICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICAgICAgICAgIHRleHQ6IHsgX18kJHRleHQ6IFwiXCIgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIF9fJCRlbGVtZW50OiBcImxpdGVyYWxFeHByZXNzaW9uXCIsXG4gICAgICAgICAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICAgICAgICAgICAgdGV4dDogeyBfXyQkdGV4dDogXCJcIiB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9O1xuICAgIHJldHVybiByZWxhdGlvbkV4cHJlc3Npb247XG4gIH0gZWxzZSBpZiAobG9naWNUeXBlID09PSBcImRlY2lzaW9uVGFibGVcIikge1xuICAgIGNvbnN0IGRlY2lzaW9uVGFibGVFeHByZXNzaW9uOiBOb3JtYWxpemVkPEJveGVkRGVjaXNpb25UYWJsZT4gPSB7XG4gICAgICBfXyQkZWxlbWVudDogXCJkZWNpc2lvblRhYmxlXCIsXG4gICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICBcIkBfdHlwZVJlZlwiOiB0eXBlUmVmLFxuICAgICAgXCJAX2hpdFBvbGljeVwiOiBcIlVOSVFVRVwiLFxuICAgICAgaW5wdXQ6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICAgICAgICBpbnB1dEV4cHJlc3Npb246IHtcbiAgICAgICAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICAgICAgICAgIHRleHQ6IHsgX18kJHRleHQ6IFwiaW5wdXQtMVwiIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICAgICAgICBpbnB1dEV4cHJlc3Npb246IHtcbiAgICAgICAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICAgICAgICAgIHRleHQ6IHsgX18kJHRleHQ6IFwiaW5wdXQtMlwiIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBvdXRwdXQ6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICAgICAgICBcIkBfbGFiZWxcIjogXCJvdXRwdXQtMVwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgICAgIFwiQF9sYWJlbFwiOiBcIm91dHB1dC0yXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICAgICAgXCJAX2xhYmVsXCI6IFwib3V0cHV0LTNcIixcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBhbm5vdGF0aW9uOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcIkBfbmFtZVwiOiBcIkFubm90YXRpb25zXCIsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgcnVsZTogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgICAgIGlucHV0RW50cnk6IFtcbiAgICAgICAgICAgIHsgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLCB0ZXh0OiB7IF9fJCR0ZXh0OiBERUNJU0lPTl9UQUJMRV9JTlBVVF9ERUZBVUxUX1ZBTFVFIH0gfSxcbiAgICAgICAgICAgIHsgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLCB0ZXh0OiB7IF9fJCR0ZXh0OiBERUNJU0lPTl9UQUJMRV9JTlBVVF9ERUZBVUxUX1ZBTFVFIH0gfSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIG91dHB1dEVudHJ5OiBbXG4gICAgICAgICAgICB7IFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSwgdGV4dDogeyBfXyQkdGV4dDogREVDSVNJT05fVEFCTEVfT1VUUFVUX0RFRkFVTFRfVkFMVUUgfSB9LFxuICAgICAgICAgICAgeyBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksIHRleHQ6IHsgX18kJHRleHQ6IERFQ0lTSU9OX1RBQkxFX09VVFBVVF9ERUZBVUxUX1ZBTFVFIH0gfSxcbiAgICAgICAgICAgIHsgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLCB0ZXh0OiB7IF9fJCR0ZXh0OiBERUNJU0lPTl9UQUJMRV9PVVRQVVRfREVGQVVMVF9WQUxVRSB9IH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICBhbm5vdGF0aW9uRW50cnk6IFt7IHRleHQ6IHsgX18kJHRleHQ6IFwiLy8gWW91ciBhbm5vdGF0aW9ucyBoZXJlXCIgfSB9XSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfTtcbiAgICByZXR1cm4gZGVjaXNpb25UYWJsZUV4cHJlc3Npb247XG4gIH0gZWxzZSBpZiAobG9naWNUeXBlID09PSBcImNvbmRpdGlvbmFsXCIpIHtcbiAgICBjb25zdCBjb25kaXRpb25hbEV4cHJlc3Npb246IE5vcm1hbGl6ZWQ8Qm94ZWRDb25kaXRpb25hbD4gPSB7XG4gICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICBfXyQkZWxlbWVudDogXCJjb25kaXRpb25hbFwiLFxuICAgICAgaWY6IHtcbiAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgICBleHByZXNzaW9uOiB1bmRlZmluZWQgYXMgYW55LFxuICAgICAgfSxcbiAgICAgIHRoZW46IHtcbiAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgICBleHByZXNzaW9uOiB1bmRlZmluZWQgYXMgYW55LFxuICAgICAgfSxcbiAgICAgIGVsc2U6IHtcbiAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgICBleHByZXNzaW9uOiB1bmRlZmluZWQgYXMgYW55LFxuICAgICAgfSxcbiAgICB9O1xuXG4gICAgcmV0dXJuIGNvbmRpdGlvbmFsRXhwcmVzc2lvbjtcbiAgfSBlbHNlIGlmIChsb2dpY1R5cGUgPT09IFwiZm9yXCIpIHtcbiAgICBjb25zdCBmb3JFeHByZXNzaW9uOiBOb3JtYWxpemVkPEJveGVkRm9yPiA9IHtcbiAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICAgIF9fJCRlbGVtZW50OiBcImZvclwiLFxuICAgICAgcmV0dXJuOiB7XG4gICAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICAgICAgZXhwcmVzc2lvbjogdW5kZWZpbmVkIGFzIGFueSxcbiAgICAgIH0sXG4gICAgICBpbjoge1xuICAgICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICAgIGV4cHJlc3Npb246IHVuZGVmaW5lZCBhcyBhbnksXG4gICAgICB9LFxuICAgIH07XG4gICAgcmV0dXJuIGZvckV4cHJlc3Npb247XG4gIH0gZWxzZSBpZiAobG9naWNUeXBlID09IFwic29tZVwiKSB7XG4gICAgY29uc3Qgc29tZUV4cHJlc3Npb246IE5vcm1hbGl6ZWQ8Qm94ZWRTb21lPiA9IHtcbiAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICAgIF9fJCRlbGVtZW50OiBcInNvbWVcIixcbiAgICAgIHNhdGlzZmllczoge1xuICAgICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICAgIGV4cHJlc3Npb246IHVuZGVmaW5lZCBhcyBhbnksXG4gICAgICB9LFxuICAgICAgaW46IHtcbiAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgICBleHByZXNzaW9uOiB1bmRlZmluZWQgYXMgYW55LFxuICAgICAgfSxcbiAgICB9O1xuICAgIHJldHVybiBzb21lRXhwcmVzc2lvbjtcbiAgfSBlbHNlIGlmIChsb2dpY1R5cGUgPT09IFwiZXZlcnlcIikge1xuICAgIGNvbnN0IGV2ZXJ5RXhwcmVzc2lvbjogTm9ybWFsaXplZDxCb3hlZEV2ZXJ5PiA9IHtcbiAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICAgIF9fJCRlbGVtZW50OiBcImV2ZXJ5XCIsXG4gICAgICBzYXRpc2ZpZXM6IHtcbiAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgICBleHByZXNzaW9uOiB1bmRlZmluZWQgYXMgYW55LFxuICAgICAgfSxcbiAgICAgIGluOiB7XG4gICAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICAgICAgZXhwcmVzc2lvbjogdW5kZWZpbmVkIGFzIGFueSxcbiAgICAgIH0sXG4gICAgfTtcbiAgICByZXR1cm4gZXZlcnlFeHByZXNzaW9uO1xuICB9IGVsc2UgaWYgKGxvZ2ljVHlwZSA9PT0gXCJmaWx0ZXJcIikge1xuICAgIGNvbnN0IGZpbHRlckV4cHJlc3Npb246IE5vcm1hbGl6ZWQ8Qm94ZWRGaWx0ZXI+ID0ge1xuICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgX18kJGVsZW1lbnQ6IFwiZmlsdGVyXCIsXG4gICAgICBtYXRjaDoge1xuICAgICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICAgIGV4cHJlc3Npb246IHVuZGVmaW5lZCBhcyBhbnksXG4gICAgICB9LFxuICAgICAgaW46IHtcbiAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgICBleHByZXNzaW9uOiB1bmRlZmluZWQgYXMgYW55LFxuICAgICAgfSxcbiAgICB9O1xuICAgIHJldHVybiBmaWx0ZXJFeHByZXNzaW9uO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcihgTm8gZGVmYXVsdCBleHByZXNzaW9uIGF2YWlsYWJsZSBmb3IgJHtsb2dpY1R5cGV9YCk7XG4gIH1cbn1cbiIsIi8qXG4gKiBMaWNlbnNlZCB0byB0aGUgQXBhY2hlIFNvZnR3YXJlIEZvdW5kYXRpb24gKEFTRikgdW5kZXIgb25lXG4gKiBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gIFNlZSB0aGUgTk9USUNFIGZpbGVcbiAqIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uXG4gKiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC4gIFRoZSBBU0YgbGljZW5zZXMgdGhpcyBmaWxlXG4gKiB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlXG4gKiBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2VcbiAqIHdpdGggdGhlIExpY2Vuc2UuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLFxuICogc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cbiAqIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXG4gKiBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGVcbiAqIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnNcbiAqIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IGRhdGFUeXBlcyB9IGZyb20gXCIuLi8uLi9ib3hlZEV4cHJlc3Npb25TdG9yaWVzV3JhcHBlclwiO1xuXG5leHBvcnQgY29uc3QgbG9hbk9yaWdpbmF0aW9uc0RhdGFUeXBlcyA9IFtcbiAgLi4uZGF0YVR5cGVzLFxuICB7IG5hbWU6IFwidC5BZGp1ZGljYXRpb25cIiwgaXNDdXN0b206IHRydWUgfSxcbiAgeyBuYW1lOiBcInQuQXBwbGljYW50RGF0YVwiLCBpc0N1c3RvbTogdHJ1ZSB9LFxuICB7IG5hbWU6IFwidC5CdXJlYXVDYWxsVHlwZVwiLCBpc0N1c3RvbTogdHJ1ZSB9LFxuICB7IG5hbWU6IFwidC5CdXJlYXVEYXRhXCIsIGlzQ3VzdG9tOiB0cnVlIH0sXG4gIHsgbmFtZTogXCJ0LkJ1cmVhdVJpc2tDYXRlZ29yeVwiLCBpc0N1c3RvbTogdHJ1ZSB9LFxuICB7IG5hbWU6IFwidC5FbGlnaWJpbGl0eVwiLCBpc0N1c3RvbTogdHJ1ZSB9LFxuICB7IG5hbWU6IFwidC5FbXBsb3ltZW50U3RhdHVzXCIsIGlzQ3VzdG9tOiB0cnVlIH0sXG4gIHsgbmFtZTogXCJ0Lk1hcml0YWxTdGF0dXNcIiwgaXNDdXN0b206IHRydWUgfSxcbiAgeyBuYW1lOiBcInQuUHJvZHVjdFR5cGVcIiwgaXNDdXN0b206IHRydWUgfSxcbiAgeyBuYW1lOiBcInQuUmVxdWVzdGVkUHJvZHVjXCIsIGlzQ3VzdG9tOiB0cnVlIH0sXG4gIHsgbmFtZTogXCJ0LlJvdXRpbmdcIiwgaXNDdXN0b206IHRydWUgfSxcbiAgeyBuYW1lOiBcInQuU3RyYXRlZ3lcIiwgaXNDdXN0b206IHRydWUgfSxcbl07XG4iXSwibmFtZXMiOlsidXNlQ2FsbGJhY2siLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkRtbkJ1aWx0SW5EYXRhVHlwZSIsImdldERlZmF1bHRCb3hlZEV4cHJlc3Npb25Gb3JEZXZXZWJhcHAiLCJCb3hlZEV4cHJlc3Npb25FZGl0b3JTdG9yeSIsIlRpdGxlIiwiQnV0dG9uIiwiRmxleCIsIkZsZXhJdGVtIiwiVG9vbHRpcCIsImNhbkRyaXZlRXhwcmVzc2lvbkRlZmluaXRpb24iLCJjYW5Ecml2ZVdpZHRoc0J5SWQiLCJmaW5kRW1wbG95ZWVzQnlLbm93bGVkZ2VFeHByZXNzaW9uIiwiZmluZEVtcGxveWVlc0J5S25vd2xlZGdlV2lkdGhzQnlJZCIsInBvc3RCdXJlYXVBZmZvcmRhYmlsaXR5RXhwcmVzc2lvbiIsInBvc3RCdXJlYXVBZmZvcmRhYmlsaXR5V2lkdGhzQnlJZCIsImRhdGFUeXBlcyIsIm5hbWUiLCJpc0N1c3RvbSIsInBtbWxEb2N1bWVudHMiLCJkb2N1bWVudCIsIm1vZGVsc0Zyb21Eb2N1bWVudCIsIm1vZGVsIiwicGFyYW1ldGVyc0Zyb21Nb2RlbCIsIk51bWJlciIsIkFueSIsIklOSVRJQUxfRVhQUkVTU0lPTiIsInVuZGVmaW5lZCIsIklOSVRJQUxfV0lEVEhTX0JZX0lEIiwiQXBwIiwidmVyc2lvbiIsInNldFZlcnNpb24iLCJib3hlZEV4cHJlc3Npb24iLCJzZXRCb3hlZEV4cHJlc3Npb24iLCJ3aWR0aHNCeUlkIiwic2V0V2lkdGhzQnlJZCIsInNlbGVjdGVkT2JqZWN0SWQiLCJzZXRTZWxlY3RlZE9iamVjdElkIiwicHJldiIsInNldFNhbXBsZSIsInNhbXBsZSIsIm9uRXhwcmVzc2lvbkNoYW5nZSIsImFyZ3MiLCJuZXdFeHByZXNzaW9uIiwic2V0RXhwcmVzc2lvbkFjdGlvbiIsImJlZUd3dFNlcnZpY2UiLCJnZXREZWZhdWx0RXhwcmVzc2lvbkRlZmluaXRpb24iLCJsb2dpY1R5cGUiLCJ0eXBlUmVmIiwiZXhwcmVzc2lvbiIsIk1hcCIsIm9wZW5EYXRhVHlwZVBhZ2UiLCJzZWxlY3RPYmplY3QiLCJ1dWlkIiwiX2pzeCIsImNoaWxkcmVuIiwiX2pzeHMiLCJkaXJlY3Rpb24iLCJkZWZhdWx0Iiwic3R5bGUiLCJ3aWR0aCIsIm9uQ2xpY2siLCJleHByZXNzaW9uSG9sZGVySWQiLCJvbldpZHRoc0NoYW5nZSIsImlzUmVzZXRTdXBwb3J0ZWRPblJvb3RFeHByZXNzaW9uIiwiYWxpZ24iLCJjb250ZW50IiwiaGVhZGluZ0xldmVsIiwibWV0YSIsInRpdGxlIiwiY29tcG9uZW50IiwiV2ViQXBwIiwicmVuZGVyIiwiYXJnVHlwZXMiLCJjb250cm9sIiwiaXNSZWFkT25seSIsInBhcmFtZXRlcnMiLCJkb2NzIiwiX2EiLCJzb3VyY2UiLCJvcmlnaW5hbFNvdXJjZSIsIl9jIiwiX2IiLCJfX25hbWVkRXhwb3J0c09yZGVyIiwiQm94ZWRFeHByZXNzaW9uRWRpdG9yIiwiQkVFX1RBQkxFX1JPV19JTkRFWF9DT0xVTU5fV0lEVEgiLCJpbmNsdWRlU3RvcmllcyIsImZpbmRFbXBsb3llZXNEYXRhVHlwZXMiLCJfXyQkZWxlbWVudCIsIkJvb2xlYW4iLCJhbm5vdGF0aW9uIiwiaW5wdXQiLCJpbnB1dEV4cHJlc3Npb24iLCJ0ZXh0IiwiX18kJHRleHQiLCJTdHJpbmciLCJvdXRwdXQiLCJydWxlIiwiaW5wdXRFbnRyeSIsIm91dHB1dEVudHJ5IiwiRXhwcmVzc2lvbiIsImxvYW5PcmlnaW5hdGlvbnNEYXRhVHlwZXMiLCJiaW5kaW5nIiwicGFyYW1ldGVyIiwiQm94ZWRGdW5jdGlvbktpbmQiLCJnZW5lcmF0ZVV1aWQiLCJJTlZPQ0FUSU9OX0VYUFJFU1NJT05fREVGQVVMVF9QQVJBTUVURVJfTkFNRSIsIkRFQ0lTSU9OX1RBQkxFX0lOUFVUX0RFRkFVTFRfVkFMVUUiLCJERUNJU0lPTl9UQUJMRV9PVVRQVVRfREVGQVVMVF9WQUxVRSIsImxpdGVyYWxFeHByZXNzaW9uIiwiZnVuY3Rpb25FeHByZXNzaW9uIiwiRmVlbCIsImNvbnRleHRFeHByZXNzaW9uIiwiY29udGV4dEVudHJ5IiwidmFyaWFibGUiLCJsaXN0RXhwcmVzc2lvbiIsImludm9jYXRpb25FeHByZXNzaW9uIiwicmVsYXRpb25FeHByZXNzaW9uIiwiY29sdW1uIiwicm93IiwiZGVjaXNpb25UYWJsZUV4cHJlc3Npb24iLCJhbm5vdGF0aW9uRW50cnkiLCJjb25kaXRpb25hbEV4cHJlc3Npb24iLCJpZiIsInRoZW4iLCJlbHNlIiwiZm9yRXhwcmVzc2lvbiIsInJldHVybiIsImluIiwic29tZUV4cHJlc3Npb24iLCJzYXRpc2ZpZXMiLCJldmVyeUV4cHJlc3Npb24iLCJmaWx0ZXJFeHByZXNzaW9uIiwibWF0Y2giLCJFcnJvciJdLCJzb3VyY2VSb290IjoiIn0=