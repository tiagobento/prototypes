"use strict";
(self["webpackChunk_kie_tools_boxed_expression_component"] = self["webpackChunk_kie_tools_boxed_expression_component"] || []).push([["stories_boxedExpressionStoriesWrapper_tsx"],{

/***/ "./src/BoxedExpressionEditor.tsx":
/*!***************************************!*\
  !*** ./src/BoxedExpressionEditor.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BoxedExpressionEditor: () => (/* binding */ BoxedExpressionEditor)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js");
/* harmony import */ var _patternfly_react_styles_css_components_Drawer_drawer_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-styles/css/components/Drawer/drawer.css */ "../../node_modules/.pnpm/@patternfly+react-styles@4.92.6/node_modules/@patternfly/react-styles/css/components/Drawer/drawer.css");
/* harmony import */ var _kie_tools_core_i18n_dist_react_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @kie-tools-core/i18n/dist/react-components */ "../i18n/dist/react-components/index.js");
/* harmony import */ var _kie_tools_core_i18n_dist_react_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_kie_tools_core_i18n_dist_react_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./i18n */ "./src/i18n/index.ts");
/* harmony import */ var _expressions_ExpressionDefinitionRoot_ExpressionDefinitionRoot__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./expressions/ExpressionDefinitionRoot/ExpressionDefinitionRoot */ "./src/expressions/ExpressionDefinitionRoot/ExpressionDefinitionRoot.tsx");
/* harmony import */ var _BoxedExpressionEditorContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BoxedExpressionEditorContext */ "./src/BoxedExpressionEditorContext.tsx");
/* harmony import */ var _base_no_reset_wrapped_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./base-no-reset-wrapped.css */ "./src/base-no-reset-wrapped.css");








function BoxedExpressionEditor({
  dataTypes,
  isReadOnly,
  expressionHolderId,
  expressionHolderName,
  expressionHolderTypeRef,
  expression,
  onExpressionChange,
  beeGwtService,
  isResetSupportedOnRootExpression,
  scrollableParentRef,
  pmmlDocuments,
  onRequestFeelIdentifiers,
  evaluationHitsCountById,
  widthsById,
  onWidthsChange,
  hideDmn14BoxedExpressions
}) {
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kie_tools_core_i18n_dist_react_components__WEBPACK_IMPORTED_MODULE_2__.I18nDictionariesProvider, {
    defaults: _i18n__WEBPACK_IMPORTED_MODULE_3__.boxedExpressionEditorI18nDefaults,
    dictionaries: _i18n__WEBPACK_IMPORTED_MODULE_3__.boxedExpressionEditorDictionaries,
    initialLocale: navigator.language,
    ctx: _i18n__WEBPACK_IMPORTED_MODULE_3__.BoxedExpressionEditorI18nContext,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_BoxedExpressionEditorContext__WEBPACK_IMPORTED_MODULE_5__.BoxedExpressionEditorContextProvider, {
      scrollableParentRef: scrollableParentRef,
      beeGwtService: beeGwtService,
      expressionHolderId: expressionHolderId,
      expressionHolderName: expressionHolderName,
      expressionHolderTypeRef: expressionHolderTypeRef,
      expression: expression,
      onExpressionChange: onExpressionChange,
      onWidthsChange: onWidthsChange,
      isReadOnly: isReadOnly,
      dataTypes: dataTypes,
      pmmlDocuments: pmmlDocuments,
      onRequestFeelIdentifiers: onRequestFeelIdentifiers,
      evaluationHitsCountById: evaluationHitsCountById,
      widthsById: widthsById,
      hideDmn14BoxedExpressions: hideDmn14BoxedExpressions,
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_expressions_ExpressionDefinitionRoot_ExpressionDefinitionRoot__WEBPACK_IMPORTED_MODULE_4__.ExpressionDefinitionRoot, {
        expressionHolderId: expressionHolderId,
        expressionHolderName: expressionHolderName,
        expressionHolderTypeRef: expressionHolderTypeRef,
        expression: expression,
        isResetSupported: isResetSupportedOnRootExpression
      })
    })
  });
}
try {
    // @ts-ignore
    BoxedExpressionEditor.displayName = "BoxedExpressionEditor";
    // @ts-ignore
    BoxedExpressionEditor.__docgenInfo = { "description": "", "displayName": "BoxedExpressionEditor", "props": { "beeGwtService": { "defaultValue": null, "description": "The API methods which BoxedExpressionEditor component can use to dialog with GWT layer. Although the GWT layer is deprecated, and the new DMN Editor does not have GWT, some methods here are still necessary.", "name": "beeGwtService", "required": false, "type": { "name": "BeeGwtService" } }, "expressionHolderId": { "defaultValue": null, "description": "Id of the Decision or BKM containing `expression`", "name": "expressionHolderId", "required": true, "type": { "name": "string" } }, "expressionHolderName": { "defaultValue": null, "description": "Name of the Decision or BKM containing `expression`", "name": "expressionHolderName", "required": true, "type": { "name": "string" } }, "expressionHolderTypeRef": { "defaultValue": null, "description": "TypeRef of the Decision or BKM containing `expression`", "name": "expressionHolderTypeRef", "required": true, "type": { "name": "string | undefined" } }, "expression": { "defaultValue": null, "description": "The boxed expression itself", "name": "expression", "required": true, "type": { "name": "Normalized<BoxedExpression> | undefined" } }, "onExpressionChange": { "defaultValue": null, "description": "Called every time something changes on the expression", "name": "onExpressionChange", "required": true, "type": { "name": "OnExpressionChange" } }, "widthsById": { "defaultValue": null, "description": "KIE Extension to represent IDs of individual columns or expressions", "name": "widthsById", "required": true, "type": { "name": "Map<string, number[]>" } }, "onWidthsChange": { "defaultValue": null, "description": "Called every time a width changes on the expression", "name": "onWidthsChange", "required": true, "type": { "name": "Dispatch<SetStateAction<Map<string, number[]>>>" } }, "isResetSupportedOnRootExpression": { "defaultValue": null, "description": "A boolean used for making (or not) the reset button available on the root expression. BKMs, for example, can't be reset, as they need to be a Boxed Function.", "name": "isResetSupportedOnRootExpression", "required": false, "type": { "name": "boolean" } }, "dataTypes": { "defaultValue": null, "description": "The Data Types available", "name": "dataTypes", "required": true, "type": { "name": "DmnDataType[]" } }, "isReadOnly": { "defaultValue": null, "description": "ReadOnly mode flag", "name": "isReadOnly", "required": false, "type": { "name": "boolean" } }, "pmmlDocuments": { "defaultValue": null, "description": "PMML models available to use on Boxed PMML Function", "name": "pmmlDocuments", "required": false, "type": { "name": "PmmlDocument[]" } }, "evaluationHitsCountById": { "defaultValue": null, "description": "", "name": "evaluationHitsCountById", "required": false, "type": { "name": "Map<string, number>" } }, "scrollableParentRef": { "defaultValue": null, "description": "The containing HTMLElement which is scrollable", "name": "scrollableParentRef", "required": true, "type": { "name": "RefObject<HTMLElement>" } }, "onRequestFeelIdentifiers": { "defaultValue": null, "description": "Parsed identifiers used for syntax coloring and auto-complete", "name": "onRequestFeelIdentifiers", "required": false, "type": { "name": "OnRequestFeelIdentifiers" } }, "hideDmn14BoxedExpressions": { "defaultValue": null, "description": "Hide DMN 1.4 boxed expressions", "name": "hideDmn14BoxedExpressions", "required": false, "type": { "name": "boolean" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/BoxedExpressionEditor.tsx#BoxedExpressionEditor"] = { docgenInfo: BoxedExpressionEditor.__docgenInfo, name: "BoxedExpressionEditor", path: "src/BoxedExpressionEditor.tsx#BoxedExpressionEditor" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./src/expressions/ExpressionDefinitionRoot/ExpressionDefinitionRoot.tsx":
/*!*******************************************************************************!*\
  !*** ./src/expressions/ExpressionDefinitionRoot/ExpressionDefinitionRoot.tsx ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExpressionDefinitionRoot: () => (/* binding */ ExpressionDefinitionRoot)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js");
/* harmony import */ var _resizing_ResizingWidthsContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../resizing/ResizingWidthsContext */ "./src/resizing/ResizingWidthsContext.tsx");
/* harmony import */ var _ExpressionContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ExpressionContainer */ "./src/expressions/ExpressionDefinitionRoot/ExpressionContainer.tsx");
/* harmony import */ var _ExpressionDefinitionRoot_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ExpressionDefinitionRoot.css */ "./src/expressions/ExpressionDefinitionRoot/ExpressionDefinitionRoot.css");




function ExpressionDefinitionRoot({
  expression,
  isResetSupported = true,
  expressionHolderId,
  expressionHolderTypeRef,
  expressionHolderName
}) {
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_resizing_ResizingWidthsContext__WEBPACK_IMPORTED_MODULE_1__.ResizingWidthsContextProvider, {
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: `expression-container ${expressionHolderId}`,
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ExpressionContainer__WEBPACK_IMPORTED_MODULE_2__.ExpressionContainer, {
        expression: expression,
        isResetSupported: isResetSupported,
        isNested: false,
        rowIndex: 0,
        columnIndex: 0,
        parentElementId: expressionHolderId,
        parentElementName: expressionHolderName,
        parentElementTypeRef: expressionHolderTypeRef
      })
    })
  });
}
try {
    // @ts-ignore
    ExpressionDefinitionRoot.displayName = "ExpressionDefinitionRoot";
    // @ts-ignore
    ExpressionDefinitionRoot.__docgenInfo = { "description": "", "displayName": "ExpressionDefinitionRoot", "props": { "expressionHolderId": { "defaultValue": null, "description": "", "name": "expressionHolderId", "required": true, "type": { "name": "string" } }, "expressionHolderTypeRef": { "defaultValue": null, "description": "", "name": "expressionHolderTypeRef", "required": true, "type": { "name": "string | undefined" } }, "expression": { "defaultValue": null, "description": "", "name": "expression", "required": false, "type": { "name": "Normalized<BoxedExpression>" } }, "isResetSupported": { "defaultValue": { value: "true" }, "description": "", "name": "isResetSupported", "required": false, "type": { "name": "boolean" } }, "expressionHolderName": { "defaultValue": null, "description": "", "name": "expressionHolderName", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/expressions/ExpressionDefinitionRoot/ExpressionDefinitionRoot.tsx#ExpressionDefinitionRoot"] = { docgenInfo: ExpressionDefinitionRoot.__docgenInfo, name: "ExpressionDefinitionRoot", path: "src/expressions/ExpressionDefinitionRoot/ExpressionDefinitionRoot.tsx#ExpressionDefinitionRoot" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./stories/boxedExpressionStoriesWrapper.tsx":
/*!***************************************************!*\
  !*** ./stories/boxedExpressionStoriesWrapper.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BoxedExpressionEditorStory: () => (/* binding */ BoxedExpressionEditorStory),
/* harmony export */   beeGwtService: () => (/* binding */ beeGwtService),
/* harmony export */   dataTypes: () => (/* binding */ dataTypes),
/* harmony export */   pmmlDocuments: () => (/* binding */ pmmlDocuments)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js");
/* harmony import */ var _storybook_preview_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @storybook/preview-api */ "@storybook/preview-api");
/* harmony import */ var _storybook_preview_api__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_storybook_preview_api__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _src_BoxedExpressionEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/BoxedExpressionEditor */ "./src/BoxedExpressionEditor.tsx");
/* harmony import */ var _src_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/api */ "./src/api/index.ts");
/* harmony import */ var _src_expressionVariable_ExpressionVariableMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/expressionVariable/ExpressionVariableMenu */ "./src/expressionVariable/ExpressionVariableMenu.tsx");
/* harmony import */ var _getDefaultBoxedExpressionForStories__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./getDefaultBoxedExpressionForStories */ "./stories/getDefaultBoxedExpressionForStories.ts");







const pmmlDocuments = [{
  document: "document",
  modelsFromDocument: [{
    model: "model",
    parametersFromModel: [{
      "@_id": "p1",
      "@_name": "p-1",
      "@_typeRef": _src_api__WEBPACK_IMPORTED_MODULE_4__.DmnBuiltInDataType.Number
    }]
  }]
}, {
  document: "mining pmml",
  modelsFromDocument: [{
    model: "MiningModelSum",
    parametersFromModel: [{
      "@_id": "i1",
      "@_name": "input1",
      "@_typeRef": _src_api__WEBPACK_IMPORTED_MODULE_4__.DmnBuiltInDataType.Any
    }]
  }]
}, {
  document: "regression pmml",
  modelsFromDocument: [{
    model: "RegressionLinear",
    parametersFromModel: [{
      "@_id": "i1",
      "@_name": "i1",
      "@_typeRef": _src_api__WEBPACK_IMPORTED_MODULE_4__.DmnBuiltInDataType.Number
    }]
  }]
}];
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
}];
const beeGwtService = {
  getDefaultExpressionDefinition(logicType, dataType) {
    const widthsById = new Map();
    const expression = (0,_getDefaultBoxedExpressionForStories__WEBPACK_IMPORTED_MODULE_6__.getDefaultBoxedExpressionForStories)({
      logicType,
      typeRef: dataType,
      widthsById
    });
    return {
      expression,
      widthsById
    };
  },
  openDataTypePage() {},
  selectObject() {}
};
function BoxedExpressionEditorStory(props) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w;
  const emptyRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
  const [args, updateArgs] = (0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_1__.useArgs)();
  const [expressionState, setExpressionState] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)((_a = args === null || args === void 0 ? void 0 : args.expression) !== null && _a !== void 0 ? _a : props === null || props === void 0 ? void 0 : props.expression);
  const [widthsByIdState, setWidthsByIdState] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)((_c = (_b = args.widthsById) !== null && _b !== void 0 ? _b : props === null || props === void 0 ? void 0 : props.widthsById) !== null && _c !== void 0 ? _c : {});
  const onWidthsChange = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(newWidthsById => {
    if (typeof newWidthsById === "function") {
      setWidthsByIdState(prev => {
        const newWidhtsByIdState = toObject(newWidthsById(toMap(prev)));
        updateArgs({
          widthsById: newWidhtsByIdState
        });
        return newWidhtsByIdState;
      });
    } else {
      setWidthsByIdState(toObject(newWidthsById));
      updateArgs({
        widthsById: toObject(newWidthsById)
      });
    }
  }, [updateArgs]);
  const widthsByIdMap = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => toMap(widthsByIdState), [widthsByIdState]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    setExpressionState(props === null || props === void 0 ? void 0 : props.expression);
  }, [props === null || props === void 0 ? void 0 : props.expression]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    setExpressionState(args === null || args === void 0 ? void 0 : args.expression);
  }, [args === null || args === void 0 ? void 0 : args.expression]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    setWidthsByIdState(prev => {
      if (args.widthsById === undefined || JSON.stringify(prev) === JSON.stringify(args.widthsById)) {
        return prev;
      }
      return args.widthsById;
    });
  }, [args.widthsById]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    setWidthsByIdState(prev => {
      if ((props === null || props === void 0 ? void 0 : props.widthsById) === undefined || JSON.stringify(prev) === JSON.stringify(props === null || props === void 0 ? void 0 : props.widthsById)) {
        return prev;
      }
      updateArgs({
        widthsById: props === null || props === void 0 ? void 0 : props.widthsById
      });
      return props === null || props === void 0 ? void 0 : props.widthsById;
    });
  }, [props === null || props === void 0 ? void 0 : props.widthsById, updateArgs]);
  const onExpressionChange = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(args => {
    setExpressionState(args.setExpressionAction);
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    updateArgs({
      expression: expressionState
    });
  }, [updateArgs, expressionState]);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [args && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      "data-testid": "storybook--boxed-expression-component",
      style: {
        display: "none"
      },
      children: JSON.stringify(args)
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      ref: emptyRef,
      onKeyDown: e => {
        console.log("wrapper stopped");
      },
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_BoxedExpressionEditor__WEBPACK_IMPORTED_MODULE_3__.BoxedExpressionEditor, {
        expressionHolderId: (_e = (_d = props === null || props === void 0 ? void 0 : props.expressionHolderId) !== null && _d !== void 0 ? _d : args === null || args === void 0 ? void 0 : args.expressionHolderId) !== null && _e !== void 0 ? _e : (0,_src_api__WEBPACK_IMPORTED_MODULE_4__.generateUuid)(),
        expressionHolderName: (_g = (_f = props === null || props === void 0 ? void 0 : props.expressionHolderName) !== null && _f !== void 0 ? _f : args === null || args === void 0 ? void 0 : args.expressionHolderName) !== null && _g !== void 0 ? _g : _src_expressionVariable_ExpressionVariableMenu__WEBPACK_IMPORTED_MODULE_5__.DEFAULT_EXPRESSION_VARIABLE_NAME,
        expressionHolderTypeRef: (_h = props === null || props === void 0 ? void 0 : props.expressionHolderTypeRef) !== null && _h !== void 0 ? _h : args === null || args === void 0 ? void 0 : args.expressionHolderTypeRef,
        expression: expressionState,
        onExpressionChange: onExpressionChange,
        evaluationHitsCountById: (_j = props === null || props === void 0 ? void 0 : props.evaluationHitsCountById) !== null && _j !== void 0 ? _j : args === null || args === void 0 ? void 0 : args.evaluationHitsCountById,
        onWidthsChange: onWidthsChange,
        dataTypes: (_l = (_k = props === null || props === void 0 ? void 0 : props.dataTypes) !== null && _k !== void 0 ? _k : args === null || args === void 0 ? void 0 : args.dataTypes) !== null && _l !== void 0 ? _l : dataTypes,
        scrollableParentRef: (_o = (_m = props === null || props === void 0 ? void 0 : props.scrollableParentRef) !== null && _m !== void 0 ? _m : args === null || args === void 0 ? void 0 : args.scrollableParentRef) !== null && _o !== void 0 ? _o : emptyRef,
        beeGwtService: (_q = (_p = props === null || props === void 0 ? void 0 : props.beeGwtService) !== null && _p !== void 0 ? _p : args === null || args === void 0 ? void 0 : args.beeGwtService) !== null && _q !== void 0 ? _q : beeGwtService,
        pmmlDocuments: (_s = (_r = props === null || props === void 0 ? void 0 : props.pmmlDocuments) !== null && _r !== void 0 ? _r : args === null || args === void 0 ? void 0 : args.pmmlDocuments) !== null && _s !== void 0 ? _s : pmmlDocuments,
        isReadOnly: (_u = (_t = props === null || props === void 0 ? void 0 : props.isReadOnly) !== null && _t !== void 0 ? _t : args === null || args === void 0 ? void 0 : args.isReadOnly) !== null && _u !== void 0 ? _u : false,
        isResetSupportedOnRootExpression: (_w = (_v = props === null || props === void 0 ? void 0 : props.isResetSupportedOnRootExpression) !== null && _v !== void 0 ? _v : args === null || args === void 0 ? void 0 : args.isResetSupportedOnRootExpression) !== null && _w !== void 0 ? _w : false,
        widthsById: widthsByIdMap
      })
    })]
  });
}
function toObject(map) {
  return Array.from((map !== null && map !== void 0 ? map : new Map()).entries()).reduce((acc, [key, value]) => {
    acc[`${key}`] = value;
    return acc;
  }, {});
}
function toMap(object) {
  return Array.from(Object.entries(object !== null && object !== void 0 ? object : {})).reduce((acc, [key, value]) => {
    acc.set(key, value);
    return acc;
  }, new Map());
}
try {
    // @ts-ignore
    BoxedExpressionEditorStory.displayName = "BoxedExpressionEditorStory";
    // @ts-ignore
    BoxedExpressionEditorStory.__docgenInfo = { "description": "", "displayName": "BoxedExpressionEditorStory", "props": { "beeGwtService": { "defaultValue": null, "description": "The API methods which BoxedExpressionEditor component can use to dialog with GWT layer. Although the GWT layer is deprecated, and the new DMN Editor does not have GWT, some methods here are still necessary.", "name": "beeGwtService", "required": false, "type": { "name": "BeeGwtService" } }, "expressionHolderId": { "defaultValue": null, "description": "Id of the Decision or BKM containing `expression`", "name": "expressionHolderId", "required": false, "type": { "name": "string" } }, "expressionHolderName": { "defaultValue": null, "description": "Name of the Decision or BKM containing `expression`", "name": "expressionHolderName", "required": false, "type": { "name": "string" } }, "expressionHolderTypeRef": { "defaultValue": null, "description": "TypeRef of the Decision or BKM containing `expression`", "name": "expressionHolderTypeRef", "required": false, "type": { "name": "string" } }, "expression": { "defaultValue": null, "description": "The boxed expression itself", "name": "expression", "required": false, "type": { "name": "Normalized<BoxedExpression>" } }, "onExpressionChange": { "defaultValue": null, "description": "Called every time something changes on the expression", "name": "onExpressionChange", "required": false, "type": { "name": "OnExpressionChange" } }, "isResetSupportedOnRootExpression": { "defaultValue": null, "description": "A boolean used for making (or not) the reset button available on the root expression. BKMs, for example, can't be reset, as they need to be a Boxed Function.", "name": "isResetSupportedOnRootExpression", "required": false, "type": { "name": "boolean" } }, "dataTypes": { "defaultValue": null, "description": "The Data Types available", "name": "dataTypes", "required": false, "type": { "name": "DmnDataType[]" } }, "isReadOnly": { "defaultValue": null, "description": "ReadOnly mode flag", "name": "isReadOnly", "required": false, "type": { "name": "boolean" } }, "pmmlDocuments": { "defaultValue": null, "description": "PMML models available to use on Boxed PMML Function", "name": "pmmlDocuments", "required": false, "type": { "name": "PmmlDocument[]" } }, "evaluationHitsCountById": { "defaultValue": null, "description": "", "name": "evaluationHitsCountById", "required": false, "type": { "name": "Map<string, number>" } }, "scrollableParentRef": { "defaultValue": null, "description": "The containing HTMLElement which is scrollable", "name": "scrollableParentRef", "required": false, "type": { "name": "RefObject<HTMLElement>" } }, "onRequestFeelIdentifiers": { "defaultValue": null, "description": "Parsed identifiers used for syntax coloring and auto-complete", "name": "onRequestFeelIdentifiers", "required": false, "type": { "name": "OnRequestFeelIdentifiers" } }, "hideDmn14BoxedExpressions": { "defaultValue": null, "description": "Hide DMN 1.4 boxed expressions", "name": "hideDmn14BoxedExpressions", "required": false, "type": { "name": "boolean" } }, "widthsById": { "defaultValue": null, "description": "", "name": "widthsById", "required": false, "type": { "name": "Record<string, number[]>" } }, "onWidthsChange": { "defaultValue": null, "description": "", "name": "onWidthsChange", "required": false, "type": { "name": "Dispatch<SetStateAction<Record<string, number[]>>>" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["stories/boxedExpressionStoriesWrapper.tsx#BoxedExpressionEditorStory"] = { docgenInfo: BoxedExpressionEditorStory.__docgenInfo, name: "BoxedExpressionEditorStory", path: "stories/boxedExpressionStoriesWrapper.tsx#BoxedExpressionEditorStory" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./stories/getDefaultBoxedExpressionForStories.ts":
/*!********************************************************!*\
  !*** ./stories/getDefaultBoxedExpressionForStories.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDefaultBoxedExpressionForStories: () => (/* binding */ getDefaultBoxedExpressionForStories)
/* harmony export */ });
/* unused harmony export isStruct */
/* harmony import */ var _src_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/api */ "./src/api/index.ts");
/* harmony import */ var _src_expressions_DecisionTableExpression_DecisionTableExpression__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/expressions/DecisionTableExpression/DecisionTableExpression */ "./src/expressions/DecisionTableExpression/DecisionTableExpression.tsx");
/* harmony import */ var _src_expressions_InvocationExpression_InvocationExpression__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/expressions/InvocationExpression/InvocationExpression */ "./src/expressions/InvocationExpression/InvocationExpression.tsx");
/* harmony import */ var _src_resizing_WidthConstants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/resizing/WidthConstants */ "./src/resizing/WidthConstants.ts");
/* harmony import */ var _src_expressions_RelationExpression_RelationExpression__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/expressions/RelationExpression/RelationExpression */ "./src/expressions/RelationExpression/RelationExpression.tsx");





function isStruct(itemDefinition) {
  return !itemDefinition.typeRef && !!itemDefinition.itemComponent;
}
function getDefaultBoxedExpressionForStories({
  logicType,
  typeRef,
  widthsById
}) {
  if (logicType === "literalExpression") {
    const literalExpression = {
      __$$element: "literalExpression",
      "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_0__.generateUuid)(),
      "@_typeRef": typeRef
    };
    widthsById.set(literalExpression["@_id"], [_src_resizing_WidthConstants__WEBPACK_IMPORTED_MODULE_3__.LITERAL_EXPRESSION_MIN_WIDTH]);
    return literalExpression;
  } else if (logicType === "functionDefinition") {
    const functionExpression = {
      __$$element: "functionDefinition",
      "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_0__.generateUuid)(),
      "@_typeRef": typeRef,
      "@_kind": "FEEL",
      expression: undefined
    };
    return functionExpression;
  } else if (logicType === "context") {
    const contextExpression = {
      __$$element: "context",
      "@_typeRef": typeRef,
      "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_0__.generateUuid)(),
      contextEntry: [{
        "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_0__.generateUuid)(),
        variable: {
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_0__.generateUuid)(),
          "@_name": "ContextEntry-1"
        },
        expression: undefined
      }, {
        "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_0__.generateUuid)(),
        expression: undefined
      }]
    };
    widthsById.set(contextExpression["@_id"], [_src_resizing_WidthConstants__WEBPACK_IMPORTED_MODULE_3__.CONTEXT_ENTRY_VARIABLE_MIN_WIDTH]);
    return contextExpression;
  } else if (logicType === "list") {
    const listExpression = {
      __$$element: "list",
      "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_0__.generateUuid)(),
      "@_typeRef": typeRef,
      expression: [undefined]
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
          "@_name": _src_expressions_InvocationExpression_InvocationExpression__WEBPACK_IMPORTED_MODULE_2__.INVOCATION_EXPRESSION_DEFAULT_PARAMETER_NAME,
          "@_typeRef": undefined
        },
        expression: undefined
      }],
      expression: {
        __$$element: "literalExpression",
        "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_0__.generateUuid)(),
        text: {
          __$$text: "FUNCTION NAME"
        }
      }
    };
    widthsById.set(invocationExpression["@_id"], [_src_resizing_WidthConstants__WEBPACK_IMPORTED_MODULE_3__.CONTEXT_ENTRY_VARIABLE_MIN_WIDTH]);
    return invocationExpression;
  } else if (logicType === "relation") {
    const relationExpression = {
      __$$element: "relation",
      "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_0__.generateUuid)(),
      "@_typeRef": typeRef,
      row: [{
        "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_0__.generateUuid)(),
        expression: [{
          __$$element: "literalExpression",
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_0__.generateUuid)(),
          text: {
            __$$text: _src_expressions_RelationExpression_RelationExpression__WEBPACK_IMPORTED_MODULE_4__.RELATION_EXPRESSION_DEFAULT_VALUE
          }
        }]
      }],
      column: [{
        "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_0__.generateUuid)(),
        "@_name": "column-1",
        "@_typeRef": undefined
      }]
    };
    widthsById.set(relationExpression["@_id"], [_src_resizing_WidthConstants__WEBPACK_IMPORTED_MODULE_3__.BEE_TABLE_ROW_INDEX_COLUMN_WIDTH, _src_resizing_WidthConstants__WEBPACK_IMPORTED_MODULE_3__.RELATION_EXPRESSION_COLUMN_DEFAULT_WIDTH]);
    return relationExpression;
  } else if (logicType === "decisionTable") {
    const singleOutputColumn = {
      name: "output-1",
      typeRef: undefined
    };
    const singleInputColumn = {
      name: "input-1",
      typeRef: undefined
    };
    const input = [{
      "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_0__.generateUuid)(),
      inputExpression: {
        "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_0__.generateUuid)(),
        text: {
          __$$text: singleInputColumn.name
        },
        "@_typeRef": singleInputColumn.typeRef
      }
    }];
    const output = [{
      "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_0__.generateUuid)(),
      "@_name": singleOutputColumn.name,
      "@_typeRef": singleOutputColumn.typeRef
    }];
    const decisionTableExpression = {
      __$$element: "decisionTable",
      "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_0__.generateUuid)(),
      "@_typeRef": typeRef,
      "@_hitPolicy": "UNIQUE",
      input,
      output,
      annotation: [{
        "@_name": "Annotations"
      }],
      rule: [{
        "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_0__.generateUuid)(),
        inputEntry: input.map(() => ({
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_0__.generateUuid)(),
          text: {
            __$$text: _src_expressions_DecisionTableExpression_DecisionTableExpression__WEBPACK_IMPORTED_MODULE_1__.DECISION_TABLE_INPUT_DEFAULT_VALUE
          }
        })),
        outputEntry: output.map(() => ({
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_0__.generateUuid)(),
          text: {
            __$$text: _src_expressions_DecisionTableExpression_DecisionTableExpression__WEBPACK_IMPORTED_MODULE_1__.DECISION_TABLE_OUTPUT_DEFAULT_VALUE
          }
        })),
        annotationEntry: [{
          text: {
            __$$text: "// Your annotations here"
          }
        }]
      }]
    };
    widthsById.set(decisionTableExpression["@_id"], [_src_resizing_WidthConstants__WEBPACK_IMPORTED_MODULE_3__.BEE_TABLE_ROW_INDEX_COLUMN_WIDTH, _src_resizing_WidthConstants__WEBPACK_IMPORTED_MODULE_3__.DECISION_TABLE_INPUT_DEFAULT_WIDTH, _src_resizing_WidthConstants__WEBPACK_IMPORTED_MODULE_3__.DECISION_TABLE_OUTPUT_DEFAULT_WIDTH, _src_resizing_WidthConstants__WEBPACK_IMPORTED_MODULE_3__.DECISION_TABLE_ANNOTATION_DEFAULT_WIDTH]);
    return decisionTableExpression;
  } else if (logicType === "filter") {
    const filterExpression = {
      __$$element: "filter",
      "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_0__.generateUuid)(),
      "@_typeRef": typeRef,
      in: {
        "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_0__.generateUuid)(),
        expression: undefined
      },
      match: {
        "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_0__.generateUuid)(),
        expression: undefined
      }
    };
    widthsById.set(filterExpression["@_id"], [_src_resizing_WidthConstants__WEBPACK_IMPORTED_MODULE_3__.FILTER_EXPRESSION_MIN_WIDTH]);
    return filterExpression;
  } else if (logicType === "conditional") {
    const conditionalExpression = {
      __$$element: "conditional",
      "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_0__.generateUuid)(),
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
      __$$element: "for",
      "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_0__.generateUuid)(),
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
      __$$element: "some",
      "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_0__.generateUuid)(),
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
      __$$element: "every",
      "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_0__.generateUuid)(),
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
  } else {
    throw new Error(`No default expression available for ${logicType}.`);
  }
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Rvcmllc19ib3hlZEV4cHJlc3Npb25TdG9yaWVzV3JhcHBlcl90c3guMzYyYWJjYzEuaWZyYW1lLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQm1FO0FBQ21CO0FBT3RFO0FBQzJGO0FBQ0Q7QUFFckU7QUFDUDtBQXNDeEIsU0FBVU0scUJBQXFCQSxDQUFDO0VBQ3BDQyxTQUFTO0VBQ1RDLFVBQVU7RUFDVkMsa0JBQWtCO0VBQ2xCQyxvQkFBb0I7RUFDcEJDLHVCQUF1QjtFQUN2QkMsVUFBVTtFQUNWQyxrQkFBa0I7RUFDbEJDLGFBQWE7RUFDYkMsZ0NBQWdDO0VBQ2hDQyxtQkFBbUI7RUFDbkJDLGFBQWE7RUFDYkMsd0JBQXdCO0VBQ3hCQyx1QkFBdUI7RUFDdkJDLFVBQVU7RUFDVkMsY0FBYztFQUNkQztBQUF5QixDQUNFO0VBQzNCLE9BQ0VDLHNEQUFBLENBQUN2QixnR0FBd0I7SUFDdkJ3QixRQUFRLEVBQUVyQixvRUFBaUM7SUFDM0NzQixZQUFZLEVBQUV4QixvRUFBaUM7SUFDL0N5QixhQUFhLEVBQUVDLFNBQVMsQ0FBQ0MsUUFBUTtJQUNqQ0MsR0FBRyxFQUFFM0IsbUVBQWdDO0lBQUE0QixRQUFBLEVBRXJDUCxzREFBQSxDQUFDbEIsK0ZBQW9DO01BQ25DVyxtQkFBbUIsRUFBRUEsbUJBQW1CO01BQ3hDRixhQUFhLEVBQUVBLGFBQWE7TUFDNUJMLGtCQUFrQixFQUFFQSxrQkFBa0I7TUFDdENDLG9CQUFvQixFQUFFQSxvQkFBb0I7TUFDMUNDLHVCQUF1QixFQUFFQSx1QkFBdUI7TUFDaERDLFVBQVUsRUFBRUEsVUFBVTtNQUN0QkMsa0JBQWtCLEVBQUVBLGtCQUFrQjtNQUN0Q1EsY0FBYyxFQUFFQSxjQUFjO01BQzlCYixVQUFVLEVBQUVBLFVBQVU7TUFDdEJELFNBQVMsRUFBRUEsU0FBUztNQUNwQlUsYUFBYSxFQUFFQSxhQUFhO01BQzVCQyx3QkFBd0IsRUFBRUEsd0JBQXdCO01BQ2xEQyx1QkFBdUIsRUFBRUEsdUJBQXVCO01BQ2hEQyxVQUFVLEVBQUVBLFVBQVU7TUFDdEJFLHlCQUF5QixFQUFFQSx5QkFBeUI7TUFBQVEsUUFBQSxFQUVwRFAsc0RBQUEsQ0FBQ25CLG9IQUF3QjtRQUN2Qkssa0JBQWtCLEVBQUVBLGtCQUFrQjtRQUN0Q0Msb0JBQW9CLEVBQUVBLG9CQUFvQjtRQUMxQ0MsdUJBQXVCLEVBQUVBLHVCQUF1QjtRQUNoREMsVUFBVSxFQUFFQSxVQUFVO1FBQ3RCbUIsZ0JBQWdCLEVBQUVoQjtNQUFnQztJQUNsRDtFQUNtQyxFQUNkO0FBRS9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JHcUY7QUFDekI7QUFDcEI7QUFVbEMsU0FBVVgsd0JBQXdCQSxDQUFDO0VBQ3ZDUSxVQUFVO0VBQ1ZtQixnQkFBZ0IsR0FBRyxJQUFJO0VBQ3ZCdEIsa0JBQWtCO0VBQ2xCRSx1QkFBdUI7RUFDdkJEO0FBQW9CLENBQ1U7RUFDOUIsT0FDRWEsc0RBQUEsQ0FBQ1MsMEZBQTZCO0lBQUFGLFFBQUEsRUFDNUJQLHNEQUFBO01BQUtXLFNBQVMsRUFBRSx3QkFBd0J6QixrQkFBa0IsRUFBRTtNQUFBcUIsUUFBQSxFQUMxRFAsc0RBQUEsQ0FBQ1UscUVBQW1CO1FBQ2xCckIsVUFBVSxFQUFFQSxVQUFVO1FBQ3RCbUIsZ0JBQWdCLEVBQUVBLGdCQUFnQjtRQUNsQ0ksUUFBUSxFQUFFLEtBQUs7UUFDZkMsUUFBUSxFQUFFLENBQUM7UUFDWEMsV0FBVyxFQUFFLENBQUM7UUFDZEMsZUFBZSxFQUFFN0Isa0JBQWtCO1FBQ25DOEIsaUJBQWlCLEVBQUU3QixvQkFBb0I7UUFDdkM4QixvQkFBb0IsRUFBRTdCO01BQXVCO0lBQzdDO0VBQ0UsRUFDd0I7QUFFcEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JDaUQ7QUFFeUI7QUFDdUI7QUFDUztBQUNOO0FBQ1I7QUFHckYsTUFBTU0sYUFBYSxHQUFHLENBQzNCO0VBQ0VrQyxRQUFRLEVBQUUsVUFBVTtFQUNwQkMsa0JBQWtCLEVBQUUsQ0FDbEI7SUFDRUMsS0FBSyxFQUFFLE9BQU87SUFDZEMsbUJBQW1CLEVBQUUsQ0FBQztNQUFFLE1BQU0sRUFBRSxJQUFJO01BQUUsUUFBUSxFQUFFLEtBQUs7TUFBRSxXQUFXLEVBQUVQLHdEQUFrQixDQUFDUTtJQUFNLENBQUU7R0FDaEc7Q0FFSixFQUNEO0VBQ0VKLFFBQVEsRUFBRSxhQUFhO0VBQ3ZCQyxrQkFBa0IsRUFBRSxDQUNsQjtJQUNFQyxLQUFLLEVBQUUsZ0JBQWdCO0lBQ3ZCQyxtQkFBbUIsRUFBRSxDQUFDO01BQUUsTUFBTSxFQUFFLElBQUk7TUFBRSxRQUFRLEVBQUUsUUFBUTtNQUFFLFdBQVcsRUFBRVAsd0RBQWtCLENBQUNTO0lBQUcsQ0FBRTtHQUNoRztDQUVKLEVBQ0Q7RUFDRUwsUUFBUSxFQUFFLGlCQUFpQjtFQUMzQkMsa0JBQWtCLEVBQUUsQ0FDbEI7SUFDRUMsS0FBSyxFQUFFLGtCQUFrQjtJQUN6QkMsbUJBQW1CLEVBQUUsQ0FBQztNQUFFLE1BQU0sRUFBRSxJQUFJO01BQUUsUUFBUSxFQUFFLElBQUk7TUFBRSxXQUFXLEVBQUVQLHdEQUFrQixDQUFDUTtJQUFNLENBQUU7R0FDL0Y7Q0FFSixDQUNGO0FBRU0sTUFBTWhELFNBQVMsR0FBRyxDQUN2QjtFQUFFa0QsSUFBSSxFQUFFLGFBQWE7RUFBRUMsUUFBUSxFQUFFO0FBQUssQ0FBRSxFQUN4QztFQUFFRCxJQUFJLEVBQUUsS0FBSztFQUFFQyxRQUFRLEVBQUU7QUFBSyxDQUFFLEVBQ2hDO0VBQUVELElBQUksRUFBRSxTQUFTO0VBQUVDLFFBQVEsRUFBRTtBQUFLLENBQUUsRUFDcEM7RUFBRUQsSUFBSSxFQUFFLFNBQVM7RUFBRUMsUUFBUSxFQUFFO0FBQUssQ0FBRSxFQUNwQztFQUFFRCxJQUFJLEVBQUUsTUFBTTtFQUFFQyxRQUFRLEVBQUU7QUFBSyxDQUFFLEVBQ2pDO0VBQUVELElBQUksRUFBRSxlQUFlO0VBQUVDLFFBQVEsRUFBRTtBQUFLLENBQUUsRUFDMUM7RUFBRUQsSUFBSSxFQUFFLHdCQUF3QjtFQUFFQyxRQUFRLEVBQUU7QUFBSyxDQUFFLEVBQ25EO0VBQUVELElBQUksRUFBRSxRQUFRO0VBQUVDLFFBQVEsRUFBRTtBQUFLLENBQUUsRUFDbkM7RUFBRUQsSUFBSSxFQUFFLFFBQVE7RUFBRUMsUUFBUSxFQUFFO0FBQUssQ0FBRSxFQUNuQztFQUFFRCxJQUFJLEVBQUUsTUFBTTtFQUFFQyxRQUFRLEVBQUU7QUFBSyxDQUFFLEVBQ2pDO0VBQUVELElBQUksRUFBRSwyQkFBMkI7RUFBRUMsUUFBUSxFQUFFO0FBQUssQ0FBRSxDQUN2RDtBQUVNLE1BQU01QyxhQUFhLEdBQWtCO0VBQzFDNkMsOEJBQThCQSxDQUFDQyxTQUFxRCxFQUFFQyxRQUE0QjtJQUNoSCxNQUFNekMsVUFBVSxHQUFHLElBQUkwQyxHQUFHLEVBQUU7SUFDNUIsTUFBTWxELFVBQVUsR0FBR3NDLHlHQUFtQyxDQUFDO01BQUVVLFNBQVM7TUFBRUcsT0FBTyxFQUFFRixRQUFRO01BQUV6QztJQUFVLENBQUUsQ0FBQztJQUNwRyxPQUFPO01BQ0xSLFVBQVU7TUFDVlE7S0FDRDtFQUNILENBQUM7RUFDRDRDLGdCQUFnQkEsQ0FBQSxHQUFVLENBQUM7RUFDM0JDLFlBQVlBLENBQUEsR0FBVTtDQUN2QjtBQVNLLFNBQVVDLDBCQUEwQkEsQ0FBQ0MsS0FBK0M7O0VBQ3hGLE1BQU1DLFFBQVEsR0FBR3ZCLDZDQUFNLENBQWlCLElBQUksQ0FBQztFQUM3QyxNQUFNLENBQUN3QixJQUFJLEVBQUVDLFVBQVUsQ0FBQyxHQUFHN0IsK0RBQU8sRUFBa0M7RUFDcEUsTUFBTSxDQUFDOEIsZUFBZSxFQUFFQyxrQkFBa0IsQ0FBQyxHQUFHMUIsK0NBQVEsQ0FDcEQsQ0FBQTJCLEVBQUEsR0FBQUosSUFBSSxhQUFKQSxJQUFJLHVCQUFKQSxJQUFJLENBQUV6RCxVQUFVLGNBQUE2RCxFQUFBLGNBQUFBLEVBQUEsR0FBSU4sS0FBSyxhQUFMQSxLQUFLLHVCQUFMQSxLQUFLLENBQUV2RCxVQUFVLENBQ3RDO0VBRUQsTUFBTSxDQUFDOEQsZUFBZSxFQUFFQyxrQkFBa0IsQ0FBQyxHQUFHN0IsK0NBQVEsQ0FDcEQsQ0FBQThCLEVBQUEsSUFBQUMsRUFBQSxHQUFBUixJQUFJLENBQUNqRCxVQUFVLGNBQUF5RCxFQUFBLGNBQUFBLEVBQUEsR0FBSVYsS0FBSyxhQUFMQSxLQUFLLHVCQUFMQSxLQUFLLENBQUUvQyxVQUFVLGNBQUF3RCxFQUFBLGNBQUFBLEVBQUEsR0FBSSxFQUFFLENBQzNDO0VBRUQsTUFBTXZELGNBQWMsR0FBR3FCLGtEQUFXLENBQy9Cb0MsYUFBYSxJQUFJO0lBQ2hCLElBQUksT0FBT0EsYUFBYSxLQUFLLFVBQVUsRUFBRTtNQUN2Q0gsa0JBQWtCLENBQUVJLElBQThCLElBQUk7UUFDcEQsTUFBTUMsa0JBQWtCLEdBQUdDLFFBQVEsQ0FBQ0gsYUFBYSxDQUFDSSxLQUFLLENBQUNILElBQUksQ0FBQyxDQUFDLENBQUM7UUFDL0RULFVBQVUsQ0FBQztVQUFFbEQsVUFBVSxFQUFFNEQ7UUFBa0IsQ0FBRSxDQUFDO1FBQzlDLE9BQU9BLGtCQUFrQjtNQUMzQixDQUFDLENBQUM7SUFDSixDQUFDLE1BQU07TUFDTEwsa0JBQWtCLENBQUNNLFFBQVEsQ0FBQ0gsYUFBYSxDQUFDLENBQUM7TUFDM0NSLFVBQVUsQ0FBQztRQUFFbEQsVUFBVSxFQUFFNkQsUUFBUSxDQUFDSCxhQUFhO01BQUMsQ0FBRSxDQUFDO0lBQ3JEO0VBQ0YsQ0FBQyxFQUNELENBQUNSLFVBQVUsQ0FBQyxDQUNiO0VBRUQsTUFBTWEsYUFBYSxHQUFHdkMsOENBQU8sQ0FBQyxNQUFNc0MsS0FBSyxDQUFDUixlQUFlLENBQUMsRUFBRSxDQUFDQSxlQUFlLENBQUMsQ0FBQztFQUU5RS9CLGdEQUFTLENBQUMsTUFBSztJQUNiNkIsa0JBQWtCLENBQUNMLEtBQUssYUFBTEEsS0FBSyx1QkFBTEEsS0FBSyxDQUFFdkQsVUFBVSxDQUFDO0VBQ3ZDLENBQUMsRUFBRSxDQUFDdUQsS0FBSyxhQUFMQSxLQUFLLHVCQUFMQSxLQUFLLENBQUV2RCxVQUFVLENBQUMsQ0FBQztFQUV2QitCLGdEQUFTLENBQUMsTUFBSztJQUNiNkIsa0JBQWtCLENBQUNILElBQUksYUFBSkEsSUFBSSx1QkFBSkEsSUFBSSxDQUFFekQsVUFBVSxDQUFDO0VBQ3RDLENBQUMsRUFBRSxDQUFDeUQsSUFBSSxhQUFKQSxJQUFJLHVCQUFKQSxJQUFJLENBQUV6RCxVQUFVLENBQUMsQ0FBQztFQUd0QitCLGdEQUFTLENBQUMsTUFBSztJQUNiZ0Msa0JBQWtCLENBQUVJLElBQUksSUFBSTtNQUMxQixJQUFJVixJQUFJLENBQUNqRCxVQUFVLEtBQUtnRSxTQUFTLElBQUlDLElBQUksQ0FBQ0MsU0FBUyxDQUFDUCxJQUFJLENBQUMsS0FBS00sSUFBSSxDQUFDQyxTQUFTLENBQUNqQixJQUFJLENBQUNqRCxVQUFVLENBQUMsRUFBRTtRQUM3RixPQUFPMkQsSUFBSTtNQUNiO01BQ0EsT0FBT1YsSUFBSSxDQUFDakQsVUFBVTtJQUN4QixDQUFDLENBQUM7RUFDSixDQUFDLEVBQUUsQ0FBQ2lELElBQUksQ0FBQ2pELFVBQVUsQ0FBQyxDQUFDO0VBR3JCdUIsZ0RBQVMsQ0FBQyxNQUFLO0lBQ2JnQyxrQkFBa0IsQ0FBRUksSUFBSSxJQUFJO01BQzFCLElBQUksQ0FBQVosS0FBSyxhQUFMQSxLQUFLLHVCQUFMQSxLQUFLLENBQUUvQyxVQUFVLE1BQUtnRSxTQUFTLElBQUlDLElBQUksQ0FBQ0MsU0FBUyxDQUFDUCxJQUFJLENBQUMsS0FBS00sSUFBSSxDQUFDQyxTQUFTLENBQUNuQixLQUFLLGFBQUxBLEtBQUssdUJBQUxBLEtBQUssQ0FBRS9DLFVBQVUsQ0FBQyxFQUFFO1FBQ2pHLE9BQU8yRCxJQUFJO01BQ2I7TUFDQVQsVUFBVSxDQUFDO1FBQUVsRCxVQUFVLEVBQUUrQyxLQUFLLGFBQUxBLEtBQUssdUJBQUxBLEtBQUssQ0FBRS9DO01BQVUsQ0FBRSxDQUFDO01BQzdDLE9BQU8rQyxLQUFLLGFBQUxBLEtBQUssdUJBQUxBLEtBQUssQ0FBRS9DLFVBQVU7SUFDMUIsQ0FBQyxDQUFDO0VBQ0osQ0FBQyxFQUFFLENBQUMrQyxLQUFLLGFBQUxBLEtBQUssdUJBQUxBLEtBQUssQ0FBRS9DLFVBQVUsRUFBRWtELFVBQVUsQ0FBQyxDQUFDO0VBRW5DLE1BQU16RCxrQkFBa0IsR0FBRzZCLGtEQUFXLENBQXNCMkIsSUFBSSxJQUFJO0lBQ2xFRyxrQkFBa0IsQ0FBQ0gsSUFBSSxDQUFDa0IsbUJBQW1CLENBQUM7RUFDOUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztFQUdONUMsZ0RBQVMsQ0FBQyxNQUFLO0lBQ2IyQixVQUFVLENBQUM7TUFBRTFELFVBQVUsRUFBRTJEO0lBQWUsQ0FBRSxDQUFDO0VBQzdDLENBQUMsRUFBRSxDQUFDRCxVQUFVLEVBQUVDLGVBQWUsQ0FBQyxDQUFDO0VBRWpDLE9BQ0VpQix1REFBQSxDQUFBQyx1REFBQTtJQUFBM0QsUUFBQSxHQUNHdUMsSUFBSSxJQUNIOUMsc0RBQUE7TUFBQSxlQUFrQix1Q0FBdUM7TUFBRW1FLEtBQUssRUFBRTtRQUFFQyxPQUFPLEVBQUU7TUFBTSxDQUFFO01BQUE3RCxRQUFBLEVBQ2xGdUQsSUFBSSxDQUFDQyxTQUFTLENBQUNqQixJQUFJO0lBQUMsRUFFeEIsRUFFRDlDLHNEQUFBO01BQ0VxRSxHQUFHLEVBQUV4QixRQUFRO01BQ2J5QixTQUFTLEVBQUdDLENBQUMsSUFBSTtRQUVmQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQztNQUVoQyxDQUFDO01BQUFsRSxRQUFBLEVBRURQLHNEQUFBLENBQUNqQiw2RUFBcUI7UUFDcEJHLGtCQUFrQixFQUFFLENBQUF3RixFQUFBLElBQUFDLEVBQUEsR0FBQS9CLEtBQUssYUFBTEEsS0FBSyx1QkFBTEEsS0FBSyxDQUFFMUQsa0JBQWtCLGNBQUF5RixFQUFBLGNBQUFBLEVBQUEsR0FBSTdCLElBQUksYUFBSkEsSUFBSSx1QkFBSkEsSUFBSSxDQUFFNUQsa0JBQWtCLGNBQUF3RixFQUFBLGNBQUFBLEVBQUEsR0FBSWpELHNEQUFZLEVBQUU7UUFDM0Z0QyxvQkFBb0IsRUFDbEIsQ0FBQXlGLEVBQUEsSUFBQUMsRUFBQSxHQUFBakMsS0FBSyxhQUFMQSxLQUFLLHVCQUFMQSxLQUFLLENBQUV6RCxvQkFBb0IsY0FBQTBGLEVBQUEsY0FBQUEsRUFBQSxHQUFJL0IsSUFBSSxhQUFKQSxJQUFJLHVCQUFKQSxJQUFJLENBQUUzRCxvQkFBb0IsY0FBQXlGLEVBQUEsY0FBQUEsRUFBQSxHQUFJbEQsNEdBQWdDO1FBRS9GdEMsdUJBQXVCLEVBQUUsQ0FBQTBGLEVBQUEsR0FBQWxDLEtBQUssYUFBTEEsS0FBSyx1QkFBTEEsS0FBSyxDQUFFeEQsdUJBQXVCLGNBQUEwRixFQUFBLGNBQUFBLEVBQUEsR0FBSWhDLElBQUksYUFBSkEsSUFBSSx1QkFBSkEsSUFBSSxDQUFFMUQsdUJBQXVCO1FBQ3hGQyxVQUFVLEVBQUUyRCxlQUFlO1FBQzNCMUQsa0JBQWtCLEVBQUVBLGtCQUFrQjtRQUN0Q00sdUJBQXVCLEVBQUUsQ0FBQW1GLEVBQUEsR0FBQW5DLEtBQUssYUFBTEEsS0FBSyx1QkFBTEEsS0FBSyxDQUFFaEQsdUJBQXVCLGNBQUFtRixFQUFBLGNBQUFBLEVBQUEsR0FBSWpDLElBQUksYUFBSkEsSUFBSSx1QkFBSkEsSUFBSSxDQUFFbEQsdUJBQXVCO1FBQ3hGRSxjQUFjLEVBQUVBLGNBQWM7UUFDOUJkLFNBQVMsRUFBRSxDQUFBZ0csRUFBQSxJQUFBQyxFQUFBLEdBQUFyQyxLQUFLLGFBQUxBLEtBQUssdUJBQUxBLEtBQUssQ0FBRTVELFNBQVMsY0FBQWlHLEVBQUEsY0FBQUEsRUFBQSxHQUFJbkMsSUFBSSxhQUFKQSxJQUFJLHVCQUFKQSxJQUFJLENBQUU5RCxTQUFTLGNBQUFnRyxFQUFBLGNBQUFBLEVBQUEsR0FBSWhHLFNBQVM7UUFDM0RTLG1CQUFtQixFQUFFLENBQUF5RixFQUFBLElBQUFDLEVBQUEsR0FBQXZDLEtBQUssYUFBTEEsS0FBSyx1QkFBTEEsS0FBSyxDQUFFbkQsbUJBQW1CLGNBQUEwRixFQUFBLGNBQUFBLEVBQUEsR0FBSXJDLElBQUksYUFBSkEsSUFBSSx1QkFBSkEsSUFBSSxDQUFFckQsbUJBQW1CLGNBQUF5RixFQUFBLGNBQUFBLEVBQUEsR0FBSXJDLFFBQVE7UUFDeEZ0RCxhQUFhLEVBQUUsQ0FBQTZGLEVBQUEsSUFBQUMsRUFBQSxHQUFBekMsS0FBSyxhQUFMQSxLQUFLLHVCQUFMQSxLQUFLLENBQUVyRCxhQUFhLGNBQUE4RixFQUFBLGNBQUFBLEVBQUEsR0FBSXZDLElBQUksYUFBSkEsSUFBSSx1QkFBSkEsSUFBSSxDQUFFdkQsYUFBYSxjQUFBNkYsRUFBQSxjQUFBQSxFQUFBLEdBQUk3RixhQUFhO1FBQzNFRyxhQUFhLEVBQUUsQ0FBQTRGLEVBQUEsSUFBQUMsRUFBQSxHQUFBM0MsS0FBSyxhQUFMQSxLQUFLLHVCQUFMQSxLQUFLLENBQUVsRCxhQUFhLGNBQUE2RixFQUFBLGNBQUFBLEVBQUEsR0FBSXpDLElBQUksYUFBSkEsSUFBSSx1QkFBSkEsSUFBSSxDQUFFcEQsYUFBYSxjQUFBNEYsRUFBQSxjQUFBQSxFQUFBLEdBQUk1RixhQUFhO1FBQzNFVCxVQUFVLEVBQUUsQ0FBQXVHLEVBQUEsSUFBQUMsRUFBQSxHQUFBN0MsS0FBSyxhQUFMQSxLQUFLLHVCQUFMQSxLQUFLLENBQUUzRCxVQUFVLGNBQUF3RyxFQUFBLGNBQUFBLEVBQUEsR0FBSTNDLElBQUksYUFBSkEsSUFBSSx1QkFBSkEsSUFBSSxDQUFFN0QsVUFBVSxjQUFBdUcsRUFBQSxjQUFBQSxFQUFBLEdBQUksS0FBSztRQUMxRGhHLGdDQUFnQyxFQUM5QixDQUFBa0csRUFBQSxJQUFBQyxFQUFBLEdBQUEvQyxLQUFLLGFBQUxBLEtBQUssdUJBQUxBLEtBQUssQ0FBRXBELGdDQUFnQyxjQUFBbUcsRUFBQSxjQUFBQSxFQUFBLEdBQUk3QyxJQUFJLGFBQUpBLElBQUksdUJBQUpBLElBQUksQ0FBRXRELGdDQUFnQyxjQUFBa0csRUFBQSxjQUFBQSxFQUFBLEdBQUksS0FBSztRQUU1RjdGLFVBQVUsRUFBRStEO01BQWE7SUFDekIsRUFDRTtFQUFBLEVBQ0w7QUFFUDtBQUVBLFNBQVNGLFFBQVFBLENBQUNrQyxHQUEyQjtFQUMzQyxPQUFPQyxLQUFLLENBQUNDLElBQUksQ0FBQyxDQUFDRixHQUFHLGFBQUhBLEdBQUcsY0FBSEEsR0FBRyxHQUFJLElBQUlyRCxHQUFHLEVBQW9CLEVBQUV3RCxPQUFPLEVBQUUsQ0FBQyxDQUFDQyxNQUFNLENBQ3RFLENBQUNDLEdBQUcsRUFBRSxDQUFDQyxHQUFHLEVBQUVDLEtBQUssQ0FBQyxLQUFJO0lBQ3BCRixHQUFHLENBQUMsR0FBR0MsR0FBRyxFQUFFLENBQUMsR0FBR0MsS0FBSztJQUNyQixPQUFPRixHQUFHO0VBQ1osQ0FBQyxFQUNELEVBQThCLENBQy9CO0FBQ0g7QUFFQSxTQUFTdEMsS0FBS0EsQ0FBQ3lDLE1BQStCO0VBQzVDLE9BQU9QLEtBQUssQ0FBQ0MsSUFBSSxDQUFDTyxNQUFNLENBQUNOLE9BQU8sQ0FBQ0ssTUFBTSxhQUFOQSxNQUFNLGNBQU5BLE1BQU0sR0FBSSxFQUFFLENBQUMsQ0FBQyxDQUFDSixNQUFNLENBQUMsQ0FBQ0MsR0FBRyxFQUFFLENBQUNDLEdBQUcsRUFBRUMsS0FBSyxDQUFDLEtBQUk7SUFDM0VGLEdBQUcsQ0FBQ0ssR0FBRyxDQUFDSixHQUFHLEVBQUVDLEtBQUssQ0FBQztJQUNuQixPQUFPRixHQUFHO0VBQ1osQ0FBQyxFQUFFLElBQUkxRCxHQUFHLEVBQW9CLENBQUM7QUFDakM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hMb0I7QUFJd0Q7QUFDZ0Q7QUFVcEY7QUFDcUU7QUFFdkcsU0FBVTRFLFFBQVFBLENBQUNDLGNBQXNDO0VBQzdELE9BQU8sQ0FBQ0EsY0FBYyxDQUFDNUUsT0FBTyxJQUFJLENBQUMsQ0FBQzRFLGNBQWMsQ0FBQ0MsYUFBYTtBQUNsRTtBQUVNLFNBQVUxRixtQ0FBbUNBLENBQUM7RUFDbERVLFNBQVM7RUFDVEcsT0FBTztFQUNQM0M7QUFBVSxDQUtYO0VBQ0MsSUFBSXdDLFNBQVMsS0FBSyxtQkFBbUIsRUFBRTtJQUNyQyxNQUFNaUYsaUJBQWlCLEdBQTZCO01BQ2xEQyxXQUFXLEVBQUUsbUJBQW1CO01BQ2hDLE1BQU0sRUFBRTlGLHNEQUFZLEVBQUU7TUFDdEIsV0FBVyxFQUFFZTtLQUNkO0lBRUQzQyxVQUFVLENBQUN5RyxHQUFHLENBQUNnQixpQkFBaUIsQ0FBQyxNQUFNLENBQUUsRUFBRSxDQUFDTixzRkFBNEIsQ0FBQyxDQUFDO0lBQzFFLE9BQU9NLGlCQUFpQjtFQUMxQixDQUFDLE1BRUksSUFBSWpGLFNBQVMsS0FBSyxvQkFBb0IsRUFBRTtJQUMzQyxNQUFNbUYsa0JBQWtCLEdBQThCO01BQ3BERCxXQUFXLEVBQUUsb0JBQW9CO01BQ2pDLE1BQU0sRUFBRTlGLHNEQUFZLEVBQUU7TUFDdEIsV0FBVyxFQUFFZSxPQUFPO01BQ3BCLFFBQVEsRUFBRSxNQUFNO01BQ2hCbkQsVUFBVSxFQUFFd0U7S0FDYjtJQUNELE9BQU8yRCxrQkFBa0I7RUFDM0IsQ0FBQyxNQUVJLElBQUluRixTQUFTLEtBQUssU0FBUyxFQUFFO0lBQ2hDLE1BQU1vRixpQkFBaUIsR0FBNkI7TUFDbERGLFdBQVcsRUFBRSxTQUFTO01BQ3RCLFdBQVcsRUFBRS9FLE9BQU87TUFDcEIsTUFBTSxFQUFFZixzREFBWSxFQUFFO01BQ3RCaUcsWUFBWSxFQUFFLENBQ1o7UUFDRSxNQUFNLEVBQUVqRyxzREFBWSxFQUFFO1FBQ3RCa0csUUFBUSxFQUFFO1VBQ1IsTUFBTSxFQUFFbEcsc0RBQVksRUFBRTtVQUN0QixRQUFRLEVBQUU7U0FDWDtRQUNEcEMsVUFBVSxFQUFFd0U7T0FDYixFQUVEO1FBQ0UsTUFBTSxFQUFFcEMsc0RBQVksRUFBRTtRQUN0QnBDLFVBQVUsRUFBRXdFO09BQ2I7S0FFSjtJQUVEaEUsVUFBVSxDQUFDeUcsR0FBRyxDQUFDbUIsaUJBQWlCLENBQUMsTUFBTSxDQUFFLEVBQUUsQ0FBQ2QsMEZBQWdDLENBQUMsQ0FBQztJQUM5RSxPQUFPYyxpQkFBaUI7RUFDMUIsQ0FBQyxNQUFNLElBQUlwRixTQUFTLEtBQUssTUFBTSxFQUFFO0lBQy9CLE1BQU11RixjQUFjLEdBQTBCO01BQzVDTCxXQUFXLEVBQUUsTUFBTTtNQUNuQixNQUFNLEVBQUU5RixzREFBWSxFQUFFO01BQ3RCLFdBQVcsRUFBRWUsT0FBTztNQUNwQm5ELFVBQVUsRUFBRSxDQUNWd0UsU0FBVTtLQUViO0lBQ0QsT0FBTytELGNBQWM7RUFDdkIsQ0FBQyxNQUFNLElBQUl2RixTQUFTLEtBQUssWUFBWSxFQUFFO0lBQ3JDLE1BQU13RixvQkFBb0IsR0FBZ0M7TUFDeEROLFdBQVcsRUFBRSxZQUFZO01BQ3pCLE1BQU0sRUFBRTlGLHNEQUFZLEVBQUU7TUFDdEIsV0FBVyxFQUFFZSxPQUFPO01BQ3BCc0YsT0FBTyxFQUFFLENBQ1A7UUFDRUMsU0FBUyxFQUFFO1VBQ1QsTUFBTSxFQUFFdEcsc0RBQVksRUFBRTtVQUN0QixRQUFRLEVBQUVnRixvSUFBNEM7VUFDdEQsV0FBVyxFQUFFNUM7U0FDZDtRQUNEeEUsVUFBVSxFQUFFd0U7T0FDYixDQUNGO01BQ0R4RSxVQUFVLEVBQUU7UUFDVmtJLFdBQVcsRUFBRSxtQkFBbUI7UUFDaEMsTUFBTSxFQUFFOUYsc0RBQVksRUFBRTtRQUN0QnVHLElBQUksRUFBRTtVQUFFQyxRQUFRLEVBQUU7UUFBZTs7S0FFcEM7SUFDRHBJLFVBQVUsQ0FBQ3lHLEdBQUcsQ0FBQ3VCLG9CQUFvQixDQUFDLE1BQU0sQ0FBRSxFQUFFLENBQUNsQiwwRkFBZ0MsQ0FBQyxDQUFDO0lBQ2pGLE9BQU9rQixvQkFBb0I7RUFDN0IsQ0FBQyxNQUFNLElBQUl4RixTQUFTLEtBQUssVUFBVSxFQUFFO0lBQ25DLE1BQU02RixrQkFBa0IsR0FBOEI7TUFDcERYLFdBQVcsRUFBRSxVQUFVO01BQ3ZCLE1BQU0sRUFBRTlGLHNEQUFZLEVBQUU7TUFDdEIsV0FBVyxFQUFFZSxPQUFPO01BQ3BCMkYsR0FBRyxFQUFFLENBQ0g7UUFDRSxNQUFNLEVBQUUxRyxzREFBWSxFQUFFO1FBQ3RCcEMsVUFBVSxFQUFFLENBQ1Y7VUFDRWtJLFdBQVcsRUFBRSxtQkFBbUI7VUFDaEMsTUFBTSxFQUFFOUYsc0RBQVksRUFBRTtVQUN0QnVHLElBQUksRUFBRTtZQUFFQyxRQUFRLEVBQUVmLHFIQUFpQ0E7VUFBQTtTQUNwRDtPQUVKLENBQ0Y7TUFDRGtCLE1BQU0sRUFBRSxDQUNOO1FBQ0UsTUFBTSxFQUFFM0csc0RBQVksRUFBRTtRQUN0QixRQUFRLEVBQUUsVUFBVTtRQUNwQixXQUFXLEVBQUVvQztPQUNkO0tBRUo7SUFFRGhFLFVBQVUsQ0FBQ3lHLEdBQUcsQ0FBQzRCLGtCQUFrQixDQUFDLE1BQU0sQ0FBRSxFQUFFLENBQzFDeEIsMEZBQWdDLEVBQ2hDTyxrR0FBd0MsQ0FDekMsQ0FBQztJQUNGLE9BQU9pQixrQkFBa0I7RUFDM0IsQ0FBQyxNQUFNLElBQUk3RixTQUFTLEtBQUssZUFBZSxFQUFFO0lBQ3hDLE1BQU1nRyxrQkFBa0IsR0FBRztNQUN6Qm5HLElBQUksRUFBRSxVQUFVO01BQ2hCTSxPQUFPLEVBQUVxQjtLQUNWO0lBQ0QsTUFBTXlFLGlCQUFpQixHQUFHO01BQ3hCcEcsSUFBSSxFQUFFLFNBQVM7TUFDZk0sT0FBTyxFQUFFcUI7S0FDVjtJQUVELE1BQU0wRSxLQUFLLEdBQUcsQ0FDWjtNQUNFLE1BQU0sRUFBRTlHLHNEQUFZLEVBQUU7TUFDdEIrRyxlQUFlLEVBQUU7UUFDZixNQUFNLEVBQUUvRyxzREFBWSxFQUFFO1FBQ3RCdUcsSUFBSSxFQUFFO1VBQUVDLFFBQVEsRUFBRUssaUJBQWlCLENBQUNwRztRQUFJLENBQUU7UUFDMUMsV0FBVyxFQUFFb0csaUJBQWlCLENBQUM5Rjs7S0FFbEMsQ0FDRjtJQUVELE1BQU1pRyxNQUFNLEdBQXVDLENBQ2pEO01BQ0UsTUFBTSxFQUFFaEgsc0RBQVksRUFBRTtNQUN0QixRQUFRLEVBQUU0RyxrQkFBa0IsQ0FBQ25HLElBQUk7TUFDakMsV0FBVyxFQUFFbUcsa0JBQWtCLENBQUM3RjtLQUNqQyxDQUNGO0lBRUQsTUFBTWtHLHVCQUF1QixHQUFtQztNQUM5RG5CLFdBQVcsRUFBRSxlQUFlO01BQzVCLE1BQU0sRUFBRTlGLHNEQUFZLEVBQUU7TUFDdEIsV0FBVyxFQUFFZSxPQUFPO01BQ3BCLGFBQWEsRUFBRSxRQUFRO01BQ3ZCK0YsS0FBSztNQUNMRSxNQUFNO01BQ05FLFVBQVUsRUFBRSxDQUNWO1FBQ0UsUUFBUSxFQUFFO09BQ1gsQ0FDRjtNQUNEQyxJQUFJLEVBQUUsQ0FDSjtRQUNFLE1BQU0sRUFBRW5ILHNEQUFZLEVBQUU7UUFDdEJvSCxVQUFVLEVBQUVOLEtBQUssQ0FBQzNDLEdBQUcsQ0FBQyxPQUFPO1VBQzNCLE1BQU0sRUFBRW5FLHNEQUFZLEVBQUU7VUFDdEJ1RyxJQUFJLEVBQUU7WUFBRUMsUUFBUSxFQUFFMUIsZ0lBQWtDQTtVQUFBO1NBQ3JELENBQUMsQ0FBQztRQUNIdUMsV0FBVyxFQUFFTCxNQUFNLENBQUM3QyxHQUFHLENBQUMsT0FBTztVQUM3QixNQUFNLEVBQUVuRSxzREFBWSxFQUFFO1VBQ3RCdUcsSUFBSSxFQUFFO1lBQUVDLFFBQVEsRUFBRXpCLGlJQUFtQ0E7VUFBQTtTQUN0RCxDQUFDLENBQUM7UUFDSHVDLGVBQWUsRUFBRSxDQUFDO1VBQUVmLElBQUksRUFBRTtZQUFFQyxRQUFRLEVBQUU7VUFBMEI7UUFBRSxDQUFFO09BQ3JFO0tBRUo7SUFFRHBJLFVBQVUsQ0FBQ3lHLEdBQUcsQ0FBQ29DLHVCQUF1QixDQUFDLE1BQU0sQ0FBRSxFQUFFLENBQy9DaEMsMEZBQWdDLEVBQ2hDRyw0RkFBa0MsRUFDbENDLDZGQUFtQyxFQUNuQ0YsaUdBQXVDLENBQ3hDLENBQUM7SUFFRixPQUFPOEIsdUJBQXVCO0VBQ2hDLENBQUMsTUFBTSxJQUFJckcsU0FBUyxLQUFLLFFBQVEsRUFBRTtJQUNqQyxNQUFNMkcsZ0JBQWdCLEdBQTRCO01BQ2hEekIsV0FBVyxFQUFFLFFBQVE7TUFDckIsTUFBTSxFQUFFOUYsc0RBQVksRUFBRTtNQUN0QixXQUFXLEVBQUVlLE9BQU87TUFDcEJ5RyxFQUFFLEVBQUU7UUFDRixNQUFNLEVBQUV4SCxzREFBWSxFQUFFO1FBQ3RCcEMsVUFBVSxFQUFFd0U7T0FDYjtNQUNEcUYsS0FBSyxFQUFFO1FBQ0wsTUFBTSxFQUFFekgsc0RBQVksRUFBRTtRQUN0QnBDLFVBQVUsRUFBRXdFOztLQUVmO0lBQ0RoRSxVQUFVLENBQUN5RyxHQUFHLENBQUMwQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUUsRUFBRSxDQUFDakMscUZBQTJCLENBQUMsQ0FBQztJQUN4RSxPQUFPaUMsZ0JBQWdCO0VBQ3pCLENBQUMsTUFBTSxJQUFJM0csU0FBUyxLQUFLLGFBQWEsRUFBRTtJQUN0QyxNQUFNOEcscUJBQXFCLEdBQWlDO01BQzFENUIsV0FBVyxFQUFFLGFBQWE7TUFDMUIsTUFBTSxFQUFFOUYsc0RBQVksRUFBRTtNQUN0QjJILEVBQUUsRUFBRTtRQUNGLE1BQU0sRUFBRTNILHNEQUFZLEVBQUU7UUFDdEJwQyxVQUFVLEVBQUV3RTtPQUNiO01BQ0R3RixJQUFJLEVBQUU7UUFDSixNQUFNLEVBQUU1SCxzREFBWSxFQUFFO1FBQ3RCcEMsVUFBVSxFQUFFd0U7T0FDYjtNQUNEeUYsSUFBSSxFQUFFO1FBQ0osTUFBTSxFQUFFN0gsc0RBQVksRUFBRTtRQUN0QnBDLFVBQVUsRUFBRXdFOztLQUVmO0lBQ0QsT0FBT3NGLHFCQUFxQjtFQUM5QixDQUFDLE1BQU0sSUFBSTlHLFNBQVMsS0FBSyxLQUFLLEVBQUU7SUFDOUIsTUFBTWtILGFBQWEsR0FBeUI7TUFDMUNoQyxXQUFXLEVBQUUsS0FBSztNQUNsQixNQUFNLEVBQUU5RixzREFBWSxFQUFFO01BQ3RCK0gsTUFBTSxFQUFFO1FBQ04sTUFBTSxFQUFFL0gsc0RBQVksRUFBRTtRQUN0QnBDLFVBQVUsRUFBRXdFO09BQ2I7TUFDRG9GLEVBQUUsRUFBRTtRQUNGLE1BQU0sRUFBRXhILHNEQUFZLEVBQUU7UUFDdEJwQyxVQUFVLEVBQUV3RTs7S0FFZjtJQUNELE9BQU8wRixhQUFhO0VBQ3RCLENBQUMsTUFBTSxJQUFJbEgsU0FBUyxJQUFJLE1BQU0sRUFBRTtJQUM5QixNQUFNb0gsY0FBYyxHQUEwQjtNQUM1Q2xDLFdBQVcsRUFBRSxNQUFNO01BQ25CLE1BQU0sRUFBRTlGLHNEQUFZLEVBQUU7TUFDdEJpSSxTQUFTLEVBQUU7UUFDVCxNQUFNLEVBQUVqSSxzREFBWSxFQUFFO1FBQ3RCcEMsVUFBVSxFQUFFd0U7T0FDYjtNQUNEb0YsRUFBRSxFQUFFO1FBQ0YsTUFBTSxFQUFFeEgsc0RBQVksRUFBRTtRQUN0QnBDLFVBQVUsRUFBRXdFOztLQUVmO0lBQ0QsT0FBTzRGLGNBQWM7RUFDdkIsQ0FBQyxNQUFNLElBQUlwSCxTQUFTLEtBQUssT0FBTyxFQUFFO0lBQ2hDLE1BQU1zSCxlQUFlLEdBQTJCO01BQzlDcEMsV0FBVyxFQUFFLE9BQU87TUFDcEIsTUFBTSxFQUFFOUYsc0RBQVksRUFBRTtNQUN0QmlJLFNBQVMsRUFBRTtRQUNULE1BQU0sRUFBRWpJLHNEQUFZLEVBQUU7UUFDdEJwQyxVQUFVLEVBQUV3RTtPQUNiO01BQ0RvRixFQUFFLEVBQUU7UUFDRixNQUFNLEVBQUV4SCxzREFBWSxFQUFFO1FBQ3RCcEMsVUFBVSxFQUFFd0U7O0tBRWY7SUFDRCxPQUFPOEYsZUFBZTtFQUN4QixDQUFDLE1BQU07SUFDTCxNQUFNLElBQUlDLEtBQUssQ0FBQyx1Q0FBdUN2SCxTQUFTLEdBQUcsQ0FBQztFQUN0RTtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGtpZS10b29scy9ib3hlZC1leHByZXNzaW9uLWNvbXBvbmVudC8uL3NyYy9Cb3hlZEV4cHJlc3Npb25FZGl0b3IudHN4Iiwid2VicGFjazovL0BraWUtdG9vbHMvYm94ZWQtZXhwcmVzc2lvbi1jb21wb25lbnQvLi9zcmMvZXhwcmVzc2lvbnMvRXhwcmVzc2lvbkRlZmluaXRpb25Sb290L0V4cHJlc3Npb25EZWZpbml0aW9uUm9vdC50c3giLCJ3ZWJwYWNrOi8vQGtpZS10b29scy9ib3hlZC1leHByZXNzaW9uLWNvbXBvbmVudC8uL3N0b3JpZXMvYm94ZWRFeHByZXNzaW9uU3Rvcmllc1dyYXBwZXIudHN4Iiwid2VicGFjazovL0BraWUtdG9vbHMvYm94ZWQtZXhwcmVzc2lvbi1jb21wb25lbnQvLi9zdG9yaWVzL2dldERlZmF1bHRCb3hlZEV4cHJlc3Npb25Gb3JTdG9yaWVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBMaWNlbnNlZCB0byB0aGUgQXBhY2hlIFNvZnR3YXJlIEZvdW5kYXRpb24gKEFTRikgdW5kZXIgb25lXG4gKiBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gIFNlZSB0aGUgTk9USUNFIGZpbGVcbiAqIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uXG4gKiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC4gIFRoZSBBU0YgbGljZW5zZXMgdGhpcyBmaWxlXG4gKiB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlXG4gKiBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2VcbiAqIHdpdGggdGhlIExpY2Vuc2UuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLFxuICogc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cbiAqIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXG4gKiBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGVcbiAqIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnNcbiAqIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCBcIkBwYXR0ZXJuZmx5L3JlYWN0LXN0eWxlcy9jc3MvY29tcG9uZW50cy9EcmF3ZXIvZHJhd2VyLmNzc1wiO1xuaW1wb3J0IHsgSTE4bkRpY3Rpb25hcmllc1Byb3ZpZGVyIH0gZnJvbSBcIkBraWUtdG9vbHMtY29yZS9pMThuL2Rpc3QvcmVhY3QtY29tcG9uZW50c1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCZWVHd3RTZXJ2aWNlLCBCb3hlZEV4cHJlc3Npb24sIERtbkRhdGFUeXBlLCBOb3JtYWxpemVkLCBQbW1sRG9jdW1lbnQgfSBmcm9tIFwiLi9hcGlcIjtcbmltcG9ydCB7XG4gIGJveGVkRXhwcmVzc2lvbkVkaXRvckRpY3Rpb25hcmllcyxcbiAgQm94ZWRFeHByZXNzaW9uRWRpdG9ySTE4bkNvbnRleHQsXG4gIGJveGVkRXhwcmVzc2lvbkVkaXRvckkxOG5EZWZhdWx0cyxcbn0gZnJvbSBcIi4vaTE4blwiO1xuaW1wb3J0IHsgRXhwcmVzc2lvbkRlZmluaXRpb25Sb290IH0gZnJvbSBcIi4vZXhwcmVzc2lvbnMvRXhwcmVzc2lvbkRlZmluaXRpb25Sb290L0V4cHJlc3Npb25EZWZpbml0aW9uUm9vdFwiO1xuaW1wb3J0IHsgQm94ZWRFeHByZXNzaW9uRWRpdG9yQ29udGV4dFByb3ZpZGVyLCBPbkV4cHJlc3Npb25DaGFuZ2UgfSBmcm9tIFwiLi9Cb3hlZEV4cHJlc3Npb25FZGl0b3JDb250ZXh0XCI7XG5pbXBvcnQgeyBGZWVsSWRlbnRpZmllcnMgfSBmcm9tIFwiQGtpZS10b29scy9kbW4tZmVlbC1hbnRscjQtcGFyc2VyXCI7XG5pbXBvcnQgXCIuL2Jhc2Utbm8tcmVzZXQtd3JhcHBlZC5jc3NcIjtcbmltcG9ydCBcIi4vQHR5cGVzL3JlYWN0LXRhYmxlXCI7XG5cbmV4cG9ydCB0eXBlIE9uUmVxdWVzdEZlZWxJZGVudGlmaWVycyA9ICgpID0+IEZlZWxJZGVudGlmaWVycztcblxuZXhwb3J0IGludGVyZmFjZSBCb3hlZEV4cHJlc3Npb25FZGl0b3JQcm9wcyB7XG4gIC8qKiBUaGUgQVBJIG1ldGhvZHMgd2hpY2ggQm94ZWRFeHByZXNzaW9uRWRpdG9yIGNvbXBvbmVudCBjYW4gdXNlIHRvIGRpYWxvZyB3aXRoIEdXVCBsYXllci4gQWx0aG91Z2ggdGhlIEdXVCBsYXllciBpcyBkZXByZWNhdGVkLCBhbmQgdGhlIG5ldyBETU4gRWRpdG9yIGRvZXMgbm90IGhhdmUgR1dULCBzb21lIG1ldGhvZHMgaGVyZSBhcmUgc3RpbGwgbmVjZXNzYXJ5LiAqL1xuICBiZWVHd3RTZXJ2aWNlPzogQmVlR3d0U2VydmljZTtcbiAgLyoqIElkIG9mIHRoZSBEZWNpc2lvbiBvciBCS00gY29udGFpbmluZyBgZXhwcmVzc2lvbmAgKi9cbiAgZXhwcmVzc2lvbkhvbGRlcklkOiBzdHJpbmc7XG4gIC8qKiBOYW1lIG9mIHRoZSBEZWNpc2lvbiBvciBCS00gY29udGFpbmluZyBgZXhwcmVzc2lvbmAgKi9cbiAgZXhwcmVzc2lvbkhvbGRlck5hbWU6IHN0cmluZztcbiAgLyoqIFR5cGVSZWYgb2YgdGhlIERlY2lzaW9uIG9yIEJLTSBjb250YWluaW5nIGBleHByZXNzaW9uYCAqL1xuICBleHByZXNzaW9uSG9sZGVyVHlwZVJlZjogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICAvKiogVGhlIGJveGVkIGV4cHJlc3Npb24gaXRzZWxmICovXG4gIGV4cHJlc3Npb246IE5vcm1hbGl6ZWQ8Qm94ZWRFeHByZXNzaW9uPiB8IHVuZGVmaW5lZDtcbiAgLyoqIENhbGxlZCBldmVyeSB0aW1lIHNvbWV0aGluZyBjaGFuZ2VzIG9uIHRoZSBleHByZXNzaW9uICovXG4gIG9uRXhwcmVzc2lvbkNoYW5nZTogT25FeHByZXNzaW9uQ2hhbmdlO1xuICAvKiogS0lFIEV4dGVuc2lvbiB0byByZXByZXNlbnQgSURzIG9mIGluZGl2aWR1YWwgY29sdW1ucyBvciBleHByZXNzaW9ucyAqL1xuICB3aWR0aHNCeUlkOiBNYXA8c3RyaW5nLCBudW1iZXJbXT47XG4gIC8qKiBDYWxsZWQgZXZlcnkgdGltZSBhIHdpZHRoIGNoYW5nZXMgb24gdGhlIGV4cHJlc3Npb24gKi9cbiAgb25XaWR0aHNDaGFuZ2U6IFJlYWN0LkRpc3BhdGNoPFJlYWN0LlNldFN0YXRlQWN0aW9uPE1hcDxzdHJpbmcsIG51bWJlcltdPj4+O1xuICAvKiogQSBib29sZWFuIHVzZWQgZm9yIG1ha2luZyAob3Igbm90KSB0aGUgcmVzZXQgYnV0dG9uIGF2YWlsYWJsZSBvbiB0aGUgcm9vdCBleHByZXNzaW9uLiBCS01zLCBmb3IgZXhhbXBsZSwgY2FuJ3QgYmUgcmVzZXQsIGFzIHRoZXkgbmVlZCB0byBiZSBhIEJveGVkIEZ1bmN0aW9uLiAqL1xuICBpc1Jlc2V0U3VwcG9ydGVkT25Sb290RXhwcmVzc2lvbj86IGJvb2xlYW47XG4gIC8qKiBUaGUgRGF0YSBUeXBlcyBhdmFpbGFibGUgKi9cbiAgZGF0YVR5cGVzOiBEbW5EYXRhVHlwZVtdO1xuICAvKiogUmVhZE9ubHkgbW9kZSBmbGFnICovXG4gIGlzUmVhZE9ubHk/OiBib29sZWFuO1xuICAvKiogUE1NTCBtb2RlbHMgYXZhaWxhYmxlIHRvIHVzZSBvbiBCb3hlZCBQTU1MIEZ1bmN0aW9uICovXG4gIHBtbWxEb2N1bWVudHM/OiBQbW1sRG9jdW1lbnRbXTtcbiAgZXZhbHVhdGlvbkhpdHNDb3VudEJ5SWQ/OiBNYXA8c3RyaW5nLCBudW1iZXI+O1xuICAvKiogVGhlIGNvbnRhaW5pbmcgSFRNTEVsZW1lbnQgd2hpY2ggaXMgc2Nyb2xsYWJsZSAqL1xuICBzY3JvbGxhYmxlUGFyZW50UmVmOiBSZWFjdC5SZWZPYmplY3Q8SFRNTEVsZW1lbnQ+O1xuICAvKiogUGFyc2VkIGlkZW50aWZpZXJzIHVzZWQgZm9yIHN5bnRheCBjb2xvcmluZyBhbmQgYXV0by1jb21wbGV0ZSAqL1xuICBvblJlcXVlc3RGZWVsSWRlbnRpZmllcnM/OiBPblJlcXVlc3RGZWVsSWRlbnRpZmllcnM7XG4gIC8qKiBIaWRlIERNTiAxLjQgYm94ZWQgZXhwcmVzc2lvbnMgKi9cbiAgaGlkZURtbjE0Qm94ZWRFeHByZXNzaW9ucz86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBCb3hlZEV4cHJlc3Npb25FZGl0b3Ioe1xuICBkYXRhVHlwZXMsXG4gIGlzUmVhZE9ubHksXG4gIGV4cHJlc3Npb25Ib2xkZXJJZCxcbiAgZXhwcmVzc2lvbkhvbGRlck5hbWUsXG4gIGV4cHJlc3Npb25Ib2xkZXJUeXBlUmVmLFxuICBleHByZXNzaW9uLFxuICBvbkV4cHJlc3Npb25DaGFuZ2UsXG4gIGJlZUd3dFNlcnZpY2UsXG4gIGlzUmVzZXRTdXBwb3J0ZWRPblJvb3RFeHByZXNzaW9uLFxuICBzY3JvbGxhYmxlUGFyZW50UmVmLFxuICBwbW1sRG9jdW1lbnRzLFxuICBvblJlcXVlc3RGZWVsSWRlbnRpZmllcnMsXG4gIGV2YWx1YXRpb25IaXRzQ291bnRCeUlkLFxuICB3aWR0aHNCeUlkLFxuICBvbldpZHRoc0NoYW5nZSxcbiAgaGlkZURtbjE0Qm94ZWRFeHByZXNzaW9ucyxcbn06IEJveGVkRXhwcmVzc2lvbkVkaXRvclByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPEkxOG5EaWN0aW9uYXJpZXNQcm92aWRlclxuICAgICAgZGVmYXVsdHM9e2JveGVkRXhwcmVzc2lvbkVkaXRvckkxOG5EZWZhdWx0c31cbiAgICAgIGRpY3Rpb25hcmllcz17Ym94ZWRFeHByZXNzaW9uRWRpdG9yRGljdGlvbmFyaWVzfVxuICAgICAgaW5pdGlhbExvY2FsZT17bmF2aWdhdG9yLmxhbmd1YWdlfVxuICAgICAgY3R4PXtCb3hlZEV4cHJlc3Npb25FZGl0b3JJMThuQ29udGV4dH1cbiAgICA+XG4gICAgICA8Qm94ZWRFeHByZXNzaW9uRWRpdG9yQ29udGV4dFByb3ZpZGVyXG4gICAgICAgIHNjcm9sbGFibGVQYXJlbnRSZWY9e3Njcm9sbGFibGVQYXJlbnRSZWZ9XG4gICAgICAgIGJlZUd3dFNlcnZpY2U9e2JlZUd3dFNlcnZpY2V9XG4gICAgICAgIGV4cHJlc3Npb25Ib2xkZXJJZD17ZXhwcmVzc2lvbkhvbGRlcklkfVxuICAgICAgICBleHByZXNzaW9uSG9sZGVyTmFtZT17ZXhwcmVzc2lvbkhvbGRlck5hbWV9XG4gICAgICAgIGV4cHJlc3Npb25Ib2xkZXJUeXBlUmVmPXtleHByZXNzaW9uSG9sZGVyVHlwZVJlZn1cbiAgICAgICAgZXhwcmVzc2lvbj17ZXhwcmVzc2lvbn1cbiAgICAgICAgb25FeHByZXNzaW9uQ2hhbmdlPXtvbkV4cHJlc3Npb25DaGFuZ2V9XG4gICAgICAgIG9uV2lkdGhzQ2hhbmdlPXtvbldpZHRoc0NoYW5nZX1cbiAgICAgICAgaXNSZWFkT25seT17aXNSZWFkT25seX1cbiAgICAgICAgZGF0YVR5cGVzPXtkYXRhVHlwZXN9XG4gICAgICAgIHBtbWxEb2N1bWVudHM9e3BtbWxEb2N1bWVudHN9XG4gICAgICAgIG9uUmVxdWVzdEZlZWxJZGVudGlmaWVycz17b25SZXF1ZXN0RmVlbElkZW50aWZpZXJzfVxuICAgICAgICBldmFsdWF0aW9uSGl0c0NvdW50QnlJZD17ZXZhbHVhdGlvbkhpdHNDb3VudEJ5SWR9XG4gICAgICAgIHdpZHRoc0J5SWQ9e3dpZHRoc0J5SWR9XG4gICAgICAgIGhpZGVEbW4xNEJveGVkRXhwcmVzc2lvbnM9e2hpZGVEbW4xNEJveGVkRXhwcmVzc2lvbnN9XG4gICAgICA+XG4gICAgICAgIDxFeHByZXNzaW9uRGVmaW5pdGlvblJvb3RcbiAgICAgICAgICBleHByZXNzaW9uSG9sZGVySWQ9e2V4cHJlc3Npb25Ib2xkZXJJZH1cbiAgICAgICAgICBleHByZXNzaW9uSG9sZGVyTmFtZT17ZXhwcmVzc2lvbkhvbGRlck5hbWV9XG4gICAgICAgICAgZXhwcmVzc2lvbkhvbGRlclR5cGVSZWY9e2V4cHJlc3Npb25Ib2xkZXJUeXBlUmVmfVxuICAgICAgICAgIGV4cHJlc3Npb249e2V4cHJlc3Npb259XG4gICAgICAgICAgaXNSZXNldFN1cHBvcnRlZD17aXNSZXNldFN1cHBvcnRlZE9uUm9vdEV4cHJlc3Npb259XG4gICAgICAgIC8+XG4gICAgICA8L0JveGVkRXhwcmVzc2lvbkVkaXRvckNvbnRleHRQcm92aWRlcj5cbiAgICA8L0kxOG5EaWN0aW9uYXJpZXNQcm92aWRlcj5cbiAgKTtcbn1cbiIsIi8qXG4gKiBMaWNlbnNlZCB0byB0aGUgQXBhY2hlIFNvZnR3YXJlIEZvdW5kYXRpb24gKEFTRikgdW5kZXIgb25lXG4gKiBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gIFNlZSB0aGUgTk9USUNFIGZpbGVcbiAqIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uXG4gKiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC4gIFRoZSBBU0YgbGljZW5zZXMgdGhpcyBmaWxlXG4gKiB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlXG4gKiBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2VcbiAqIHdpdGggdGhlIExpY2Vuc2UuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLFxuICogc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cbiAqIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXG4gKiBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGVcbiAqIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnNcbiAqIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQm94ZWRFeHByZXNzaW9uLCBOb3JtYWxpemVkIH0gZnJvbSBcIi4uLy4uL2FwaVwiO1xuaW1wb3J0IHsgUmVzaXppbmdXaWR0aHNDb250ZXh0UHJvdmlkZXIgfSBmcm9tIFwiLi4vLi4vcmVzaXppbmcvUmVzaXppbmdXaWR0aHNDb250ZXh0XCI7XG5pbXBvcnQgeyBFeHByZXNzaW9uQ29udGFpbmVyIH0gZnJvbSBcIi4vRXhwcmVzc2lvbkNvbnRhaW5lclwiO1xuaW1wb3J0IFwiLi9FeHByZXNzaW9uRGVmaW5pdGlvblJvb3QuY3NzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRXhwcmVzc2lvbkRlZmluaXRpb25Sb290UHJvcHMge1xuICBleHByZXNzaW9uSG9sZGVySWQ6IHN0cmluZztcbiAgZXhwcmVzc2lvbkhvbGRlclR5cGVSZWY6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgZXhwcmVzc2lvbj86IE5vcm1hbGl6ZWQ8Qm94ZWRFeHByZXNzaW9uPjtcbiAgaXNSZXNldFN1cHBvcnRlZDogYm9vbGVhbiB8IHVuZGVmaW5lZDtcbiAgZXhwcmVzc2lvbkhvbGRlck5hbWU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBFeHByZXNzaW9uRGVmaW5pdGlvblJvb3Qoe1xuICBleHByZXNzaW9uLFxuICBpc1Jlc2V0U3VwcG9ydGVkID0gdHJ1ZSxcbiAgZXhwcmVzc2lvbkhvbGRlcklkLFxuICBleHByZXNzaW9uSG9sZGVyVHlwZVJlZixcbiAgZXhwcmVzc2lvbkhvbGRlck5hbWUsXG59OiBFeHByZXNzaW9uRGVmaW5pdGlvblJvb3RQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxSZXNpemluZ1dpZHRoc0NvbnRleHRQcm92aWRlcj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZXhwcmVzc2lvbi1jb250YWluZXIgJHtleHByZXNzaW9uSG9sZGVySWR9YH0+XG4gICAgICAgIDxFeHByZXNzaW9uQ29udGFpbmVyXG4gICAgICAgICAgZXhwcmVzc2lvbj17ZXhwcmVzc2lvbn1cbiAgICAgICAgICBpc1Jlc2V0U3VwcG9ydGVkPXtpc1Jlc2V0U3VwcG9ydGVkfVxuICAgICAgICAgIGlzTmVzdGVkPXtmYWxzZX1cbiAgICAgICAgICByb3dJbmRleD17MH1cbiAgICAgICAgICBjb2x1bW5JbmRleD17MH1cbiAgICAgICAgICBwYXJlbnRFbGVtZW50SWQ9e2V4cHJlc3Npb25Ib2xkZXJJZH1cbiAgICAgICAgICBwYXJlbnRFbGVtZW50TmFtZT17ZXhwcmVzc2lvbkhvbGRlck5hbWV9XG4gICAgICAgICAgcGFyZW50RWxlbWVudFR5cGVSZWY9e2V4cHJlc3Npb25Ib2xkZXJUeXBlUmVmfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9SZXNpemluZ1dpZHRoc0NvbnRleHRQcm92aWRlcj5cbiAgKTtcbn1cbiIsIi8qXG4gKiBMaWNlbnNlZCB0byB0aGUgQXBhY2hlIFNvZnR3YXJlIEZvdW5kYXRpb24gKEFTRikgdW5kZXIgb25lXG4gKiBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gIFNlZSB0aGUgTk9USUNFIGZpbGVcbiAqIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uXG4gKiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC4gIFRoZSBBU0YgbGljZW5zZXMgdGhpcyBmaWxlXG4gKiB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlXG4gKiBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2VcbiAqIHdpdGggdGhlIExpY2Vuc2UuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLFxuICogc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cbiAqIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXG4gKiBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGVcbiAqIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnNcbiAqIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IHVzZUFyZ3MgfSBmcm9tIFwiQHN0b3J5Ym9vay9wcmV2aWV3LWFwaVwiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCb3hlZEV4cHJlc3Npb25FZGl0b3IsIEJveGVkRXhwcmVzc2lvbkVkaXRvclByb3BzIH0gZnJvbSBcIi4uL3NyYy9Cb3hlZEV4cHJlc3Npb25FZGl0b3JcIjtcbmltcG9ydCB7IEJlZUd3dFNlcnZpY2UsIEJveGVkRXhwcmVzc2lvbiwgRG1uQnVpbHRJbkRhdGFUeXBlLCBnZW5lcmF0ZVV1aWQsIE5vcm1hbGl6ZWQgfSBmcm9tIFwiLi4vc3JjL2FwaVwiO1xuaW1wb3J0IHsgREVGQVVMVF9FWFBSRVNTSU9OX1ZBUklBQkxFX05BTUUgfSBmcm9tIFwiLi4vc3JjL2V4cHJlc3Npb25WYXJpYWJsZS9FeHByZXNzaW9uVmFyaWFibGVNZW51XCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0Qm94ZWRFeHByZXNzaW9uRm9yU3RvcmllcyB9IGZyb20gXCIuL2dldERlZmF1bHRCb3hlZEV4cHJlc3Npb25Gb3JTdG9yaWVzXCI7XG5pbXBvcnQgeyBPbkV4cHJlc3Npb25DaGFuZ2UgfSBmcm9tIFwiLi4vc3JjL0JveGVkRXhwcmVzc2lvbkVkaXRvckNvbnRleHRcIjtcblxuZXhwb3J0IGNvbnN0IHBtbWxEb2N1bWVudHMgPSBbXG4gIHtcbiAgICBkb2N1bWVudDogXCJkb2N1bWVudFwiLFxuICAgIG1vZGVsc0Zyb21Eb2N1bWVudDogW1xuICAgICAge1xuICAgICAgICBtb2RlbDogXCJtb2RlbFwiLFxuICAgICAgICBwYXJhbWV0ZXJzRnJvbU1vZGVsOiBbeyBcIkBfaWRcIjogXCJwMVwiLCBcIkBfbmFtZVwiOiBcInAtMVwiLCBcIkBfdHlwZVJlZlwiOiBEbW5CdWlsdEluRGF0YVR5cGUuTnVtYmVyIH1dLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgZG9jdW1lbnQ6IFwibWluaW5nIHBtbWxcIixcbiAgICBtb2RlbHNGcm9tRG9jdW1lbnQ6IFtcbiAgICAgIHtcbiAgICAgICAgbW9kZWw6IFwiTWluaW5nTW9kZWxTdW1cIixcbiAgICAgICAgcGFyYW1ldGVyc0Zyb21Nb2RlbDogW3sgXCJAX2lkXCI6IFwiaTFcIiwgXCJAX25hbWVcIjogXCJpbnB1dDFcIiwgXCJAX3R5cGVSZWZcIjogRG1uQnVpbHRJbkRhdGFUeXBlLkFueSB9XSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGRvY3VtZW50OiBcInJlZ3Jlc3Npb24gcG1tbFwiLFxuICAgIG1vZGVsc0Zyb21Eb2N1bWVudDogW1xuICAgICAge1xuICAgICAgICBtb2RlbDogXCJSZWdyZXNzaW9uTGluZWFyXCIsXG4gICAgICAgIHBhcmFtZXRlcnNGcm9tTW9kZWw6IFt7IFwiQF9pZFwiOiBcImkxXCIsIFwiQF9uYW1lXCI6IFwiaTFcIiwgXCJAX3R5cGVSZWZcIjogRG1uQnVpbHRJbkRhdGFUeXBlLk51bWJlciB9XSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBkYXRhVHlwZXMgPSBbXG4gIHsgbmFtZTogXCI8VW5kZWZpbmVkPlwiLCBpc0N1c3RvbTogZmFsc2UgfSxcbiAgeyBuYW1lOiBcIkFueVwiLCBpc0N1c3RvbTogZmFsc2UgfSxcbiAgeyBuYW1lOiBcImJvb2xlYW5cIiwgaXNDdXN0b206IGZhbHNlIH0sXG4gIHsgbmFtZTogXCJjb250ZXh0XCIsIGlzQ3VzdG9tOiBmYWxzZSB9LFxuICB7IG5hbWU6IFwiZGF0ZVwiLCBpc0N1c3RvbTogZmFsc2UgfSxcbiAgeyBuYW1lOiBcImRhdGUgYW5kIHRpbWVcIiwgaXNDdXN0b206IGZhbHNlIH0sXG4gIHsgbmFtZTogXCJkYXlzIGFuZCB0aW1lIGR1cmF0aW9uXCIsIGlzQ3VzdG9tOiBmYWxzZSB9LFxuICB7IG5hbWU6IFwibnVtYmVyXCIsIGlzQ3VzdG9tOiBmYWxzZSB9LFxuICB7IG5hbWU6IFwic3RyaW5nXCIsIGlzQ3VzdG9tOiBmYWxzZSB9LFxuICB7IG5hbWU6IFwidGltZVwiLCBpc0N1c3RvbTogZmFsc2UgfSxcbiAgeyBuYW1lOiBcInllYXJzIGFuZCBtb250aHMgZHVyYXRpb25cIiwgaXNDdXN0b206IGZhbHNlIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgYmVlR3d0U2VydmljZTogQmVlR3d0U2VydmljZSA9IHtcbiAgZ2V0RGVmYXVsdEV4cHJlc3Npb25EZWZpbml0aW9uKGxvZ2ljVHlwZTogQm94ZWRFeHByZXNzaW9uW1wiX18kJGVsZW1lbnRcIl0gfCB1bmRlZmluZWQsIGRhdGFUeXBlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICBjb25zdCB3aWR0aHNCeUlkID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0IGV4cHJlc3Npb24gPSBnZXREZWZhdWx0Qm94ZWRFeHByZXNzaW9uRm9yU3Rvcmllcyh7IGxvZ2ljVHlwZSwgdHlwZVJlZjogZGF0YVR5cGUsIHdpZHRoc0J5SWQgfSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGV4cHJlc3Npb24sXG4gICAgICB3aWR0aHNCeUlkLFxuICAgIH07XG4gIH0sXG4gIG9wZW5EYXRhVHlwZVBhZ2UoKTogdm9pZCB7fSxcbiAgc2VsZWN0T2JqZWN0KCk6IHZvaWQge30sXG59O1xuXG50eXBlIFN0b3J5Ym9va0FyZ1dpZGh0c0J5SWQgPSBSZWNvcmQ8c3RyaW5nLCBudW1iZXJbXT47XG5cbmV4cG9ydCB0eXBlIEJveGVkRXhwcmVzc2lvbkVkaXRvclN0b3J5QXJncyA9IE9taXQ8Qm94ZWRFeHByZXNzaW9uRWRpdG9yUHJvcHMsIFwid2lkdGhzQnlJZFwiIHwgXCJvbldpZHRoc0NoYW5nZVwiPiAmIHtcbiAgd2lkdGhzQnlJZD86IFJlY29yZDxzdHJpbmcsIG51bWJlcltdPjtcbiAgb25XaWR0aHNDaGFuZ2U/OiBSZWFjdC5EaXNwYXRjaDxSZWFjdC5TZXRTdGF0ZUFjdGlvbjxSZWNvcmQ8c3RyaW5nLCBudW1iZXJbXT4+Pjtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBCb3hlZEV4cHJlc3Npb25FZGl0b3JTdG9yeShwcm9wcz86IFBhcnRpYWw8Qm94ZWRFeHByZXNzaW9uRWRpdG9yU3RvcnlBcmdzPikge1xuICBjb25zdCBlbXB0eVJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IFthcmdzLCB1cGRhdGVBcmdzXSA9IHVzZUFyZ3M8Qm94ZWRFeHByZXNzaW9uRWRpdG9yU3RvcnlBcmdzPigpO1xuICBjb25zdCBbZXhwcmVzc2lvblN0YXRlLCBzZXRFeHByZXNzaW9uU3RhdGVdID0gdXNlU3RhdGU8Tm9ybWFsaXplZDxCb3hlZEV4cHJlc3Npb24+IHwgdW5kZWZpbmVkPihcbiAgICBhcmdzPy5leHByZXNzaW9uID8/IHByb3BzPy5leHByZXNzaW9uXG4gICk7XG5cbiAgY29uc3QgW3dpZHRoc0J5SWRTdGF0ZSwgc2V0V2lkdGhzQnlJZFN0YXRlXSA9IHVzZVN0YXRlPFN0b3J5Ym9va0FyZ1dpZGh0c0J5SWQ+KFxuICAgIGFyZ3Mud2lkdGhzQnlJZCA/PyBwcm9wcz8ud2lkdGhzQnlJZCA/PyB7fVxuICApO1xuXG4gIGNvbnN0IG9uV2lkdGhzQ2hhbmdlID0gdXNlQ2FsbGJhY2soXG4gICAgKG5ld1dpZHRoc0J5SWQpID0+IHtcbiAgICAgIGlmICh0eXBlb2YgbmV3V2lkdGhzQnlJZCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHNldFdpZHRoc0J5SWRTdGF0ZSgocHJldjogUmVjb3JkPHN0cmluZywgbnVtYmVyW10+KSA9PiB7XG4gICAgICAgICAgY29uc3QgbmV3V2lkaHRzQnlJZFN0YXRlID0gdG9PYmplY3QobmV3V2lkdGhzQnlJZCh0b01hcChwcmV2KSkpO1xuICAgICAgICAgIHVwZGF0ZUFyZ3MoeyB3aWR0aHNCeUlkOiBuZXdXaWRodHNCeUlkU3RhdGUgfSk7XG4gICAgICAgICAgcmV0dXJuIG5ld1dpZGh0c0J5SWRTdGF0ZTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRXaWR0aHNCeUlkU3RhdGUodG9PYmplY3QobmV3V2lkdGhzQnlJZCkpO1xuICAgICAgICB1cGRhdGVBcmdzKHsgd2lkdGhzQnlJZDogdG9PYmplY3QobmV3V2lkdGhzQnlJZCkgfSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBbdXBkYXRlQXJnc11cbiAgKTtcblxuICBjb25zdCB3aWR0aHNCeUlkTWFwID0gdXNlTWVtbygoKSA9PiB0b01hcCh3aWR0aHNCeUlkU3RhdGUpLCBbd2lkdGhzQnlJZFN0YXRlXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRFeHByZXNzaW9uU3RhdGUocHJvcHM/LmV4cHJlc3Npb24pO1xuICB9LCBbcHJvcHM/LmV4cHJlc3Npb25dKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldEV4cHJlc3Npb25TdGF0ZShhcmdzPy5leHByZXNzaW9uKTtcbiAgfSwgW2FyZ3M/LmV4cHJlc3Npb25dKTtcblxuICAvLyBBcmdzIHdlcmUgdXBkYXRlZCwgc2hvdWxkIHVwZGF0ZSB0aGUgc3RhdGUhXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0V2lkdGhzQnlJZFN0YXRlKChwcmV2KSA9PiB7XG4gICAgICBpZiAoYXJncy53aWR0aHNCeUlkID09PSB1bmRlZmluZWQgfHwgSlNPTi5zdHJpbmdpZnkocHJldikgPT09IEpTT04uc3RyaW5naWZ5KGFyZ3Mud2lkdGhzQnlJZCkpIHtcbiAgICAgICAgcmV0dXJuIHByZXY7XG4gICAgICB9XG4gICAgICByZXR1cm4gYXJncy53aWR0aHNCeUlkO1xuICAgIH0pO1xuICB9LCBbYXJncy53aWR0aHNCeUlkXSk7XG5cbiAgLy8gUHJvcHMgd2VyZSB1cGRhdGVkLCBzaG91bGQgdXBkYXRlIHRoZSBzdGF0ZSBhbmQgdGhlIGFyZ3MhXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0V2lkdGhzQnlJZFN0YXRlKChwcmV2KSA9PiB7XG4gICAgICBpZiAocHJvcHM/LndpZHRoc0J5SWQgPT09IHVuZGVmaW5lZCB8fCBKU09OLnN0cmluZ2lmeShwcmV2KSA9PT0gSlNPTi5zdHJpbmdpZnkocHJvcHM/LndpZHRoc0J5SWQpKSB7XG4gICAgICAgIHJldHVybiBwcmV2O1xuICAgICAgfVxuICAgICAgdXBkYXRlQXJncyh7IHdpZHRoc0J5SWQ6IHByb3BzPy53aWR0aHNCeUlkIH0pO1xuICAgICAgcmV0dXJuIHByb3BzPy53aWR0aHNCeUlkO1xuICAgIH0pO1xuICB9LCBbcHJvcHM/LndpZHRoc0J5SWQsIHVwZGF0ZUFyZ3NdKTtcblxuICBjb25zdCBvbkV4cHJlc3Npb25DaGFuZ2UgPSB1c2VDYWxsYmFjazxPbkV4cHJlc3Npb25DaGFuZ2U+KChhcmdzKSA9PiB7XG4gICAgc2V0RXhwcmVzc2lvblN0YXRlKGFyZ3Muc2V0RXhwcmVzc2lvbkFjdGlvbik7XG4gIH0sIFtdKTtcblxuICAvLyBLZWVwIGV4cHJlc3Npb24gYXJncyBpbiBzeW5jIHdpdGggc3RhdGVcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB1cGRhdGVBcmdzKHsgZXhwcmVzc2lvbjogZXhwcmVzc2lvblN0YXRlIH0pO1xuICB9LCBbdXBkYXRlQXJncywgZXhwcmVzc2lvblN0YXRlXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge2FyZ3MgJiYgKFxuICAgICAgICA8ZGl2IGRhdGEtdGVzdGlkPXtcInN0b3J5Ym9vay0tYm94ZWQtZXhwcmVzc2lvbi1jb21wb25lbnRcIn0gc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX0+XG4gICAgICAgICAge0pTT04uc3RyaW5naWZ5KGFyZ3MpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG5cbiAgICAgIDxkaXZcbiAgICAgICAgcmVmPXtlbXB0eVJlZn1cbiAgICAgICAgb25LZXlEb3duPXsoZSkgPT4ge1xuICAgICAgICAgIC8vIFByZXZlbnQga2V5cyBmcm9tIHByb3BhZ2F0aW5nIHRvIFN0b3J5Ym9va1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwid3JhcHBlciBzdG9wcGVkXCIpO1xuICAgICAgICAgIC8vIHJldHVybiBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8Qm94ZWRFeHByZXNzaW9uRWRpdG9yXG4gICAgICAgICAgZXhwcmVzc2lvbkhvbGRlcklkPXtwcm9wcz8uZXhwcmVzc2lvbkhvbGRlcklkID8/IGFyZ3M/LmV4cHJlc3Npb25Ib2xkZXJJZCA/PyBnZW5lcmF0ZVV1aWQoKX1cbiAgICAgICAgICBleHByZXNzaW9uSG9sZGVyTmFtZT17XG4gICAgICAgICAgICBwcm9wcz8uZXhwcmVzc2lvbkhvbGRlck5hbWUgPz8gYXJncz8uZXhwcmVzc2lvbkhvbGRlck5hbWUgPz8gREVGQVVMVF9FWFBSRVNTSU9OX1ZBUklBQkxFX05BTUVcbiAgICAgICAgICB9XG4gICAgICAgICAgZXhwcmVzc2lvbkhvbGRlclR5cGVSZWY9e3Byb3BzPy5leHByZXNzaW9uSG9sZGVyVHlwZVJlZiA/PyBhcmdzPy5leHByZXNzaW9uSG9sZGVyVHlwZVJlZn1cbiAgICAgICAgICBleHByZXNzaW9uPXtleHByZXNzaW9uU3RhdGV9XG4gICAgICAgICAgb25FeHByZXNzaW9uQ2hhbmdlPXtvbkV4cHJlc3Npb25DaGFuZ2V9XG4gICAgICAgICAgZXZhbHVhdGlvbkhpdHNDb3VudEJ5SWQ9e3Byb3BzPy5ldmFsdWF0aW9uSGl0c0NvdW50QnlJZCA/PyBhcmdzPy5ldmFsdWF0aW9uSGl0c0NvdW50QnlJZH1cbiAgICAgICAgICBvbldpZHRoc0NoYW5nZT17b25XaWR0aHNDaGFuZ2V9XG4gICAgICAgICAgZGF0YVR5cGVzPXtwcm9wcz8uZGF0YVR5cGVzID8/IGFyZ3M/LmRhdGFUeXBlcyA/PyBkYXRhVHlwZXN9XG4gICAgICAgICAgc2Nyb2xsYWJsZVBhcmVudFJlZj17cHJvcHM/LnNjcm9sbGFibGVQYXJlbnRSZWYgPz8gYXJncz8uc2Nyb2xsYWJsZVBhcmVudFJlZiA/PyBlbXB0eVJlZn1cbiAgICAgICAgICBiZWVHd3RTZXJ2aWNlPXtwcm9wcz8uYmVlR3d0U2VydmljZSA/PyBhcmdzPy5iZWVHd3RTZXJ2aWNlID8/IGJlZUd3dFNlcnZpY2V9XG4gICAgICAgICAgcG1tbERvY3VtZW50cz17cHJvcHM/LnBtbWxEb2N1bWVudHMgPz8gYXJncz8ucG1tbERvY3VtZW50cyA/PyBwbW1sRG9jdW1lbnRzfVxuICAgICAgICAgIGlzUmVhZE9ubHk9e3Byb3BzPy5pc1JlYWRPbmx5ID8/IGFyZ3M/LmlzUmVhZE9ubHkgPz8gZmFsc2V9XG4gICAgICAgICAgaXNSZXNldFN1cHBvcnRlZE9uUm9vdEV4cHJlc3Npb249e1xuICAgICAgICAgICAgcHJvcHM/LmlzUmVzZXRTdXBwb3J0ZWRPblJvb3RFeHByZXNzaW9uID8/IGFyZ3M/LmlzUmVzZXRTdXBwb3J0ZWRPblJvb3RFeHByZXNzaW9uID8/IGZhbHNlXG4gICAgICAgICAgfVxuICAgICAgICAgIHdpZHRoc0J5SWQ9e3dpZHRoc0J5SWRNYXB9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZnVuY3Rpb24gdG9PYmplY3QobWFwPzogTWFwPHN0cmluZywgbnVtYmVyW10+KTogU3Rvcnlib29rQXJnV2lkaHRzQnlJZCB7XG4gIHJldHVybiBBcnJheS5mcm9tKChtYXAgPz8gbmV3IE1hcDxzdHJpbmcsIG51bWJlcltdPigpKS5lbnRyaWVzKCkpLnJlZHVjZShcbiAgICAoYWNjLCBba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgIGFjY1tgJHtrZXl9YF0gPSB2YWx1ZTtcbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSxcbiAgICB7fSBhcyBSZWNvcmQ8c3RyaW5nLCBudW1iZXJbXT5cbiAgKTtcbn1cblxuZnVuY3Rpb24gdG9NYXAob2JqZWN0PzogU3Rvcnlib29rQXJnV2lkaHRzQnlJZCk6IE1hcDxzdHJpbmcsIG51bWJlcltdPiB7XG4gIHJldHVybiBBcnJheS5mcm9tKE9iamVjdC5lbnRyaWVzKG9iamVjdCA/PyB7fSkpLnJlZHVjZSgoYWNjLCBba2V5LCB2YWx1ZV0pID0+IHtcbiAgICBhY2Muc2V0KGtleSwgdmFsdWUpO1xuICAgIHJldHVybiBhY2M7XG4gIH0sIG5ldyBNYXA8c3RyaW5nLCBudW1iZXJbXT4oKSk7XG59XG4iLCIvKlxuICogTGljZW5zZWQgdG8gdGhlIEFwYWNoZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIChBU0YpIHVuZGVyIG9uZVxuICogb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuICBTZWUgdGhlIE5PVElDRSBmaWxlXG4gKiBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvblxuICogcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuICBUaGUgQVNGIGxpY2Vuc2VzIHRoaXMgZmlsZVxuICogdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZVxuICogXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4gKiB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZyxcbiAqIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXG4gKiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxuICogS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlXG4gKiBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zXG4gKiB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQge1xuICBETU4xNV9fdEl0ZW1EZWZpbml0aW9uLFxuICBETU4xNV9fdE91dHB1dENsYXVzZSxcbn0gZnJvbSBcIkBraWUtdG9vbHMvZG1uLW1hcnNoYWxsZXIvZGlzdC9zY2hlbWFzL2Rtbi0xXzUvdHMtZ2VuL3R5cGVzXCI7XG5pbXBvcnQge1xuICBCb3hlZENvbmRpdGlvbmFsLFxuICBCb3hlZENvbnRleHQsXG4gIEJveGVkRGVjaXNpb25UYWJsZSxcbiAgQm94ZWRFdmVyeSxcbiAgQm94ZWRFeHByZXNzaW9uLFxuICBCb3hlZEZpbHRlcixcbiAgQm94ZWRGb3IsXG4gIEJveGVkRnVuY3Rpb24sXG4gIEJveGVkSW52b2NhdGlvbixcbiAgQm94ZWRMaXN0LFxuICBCb3hlZExpdGVyYWwsXG4gIEJveGVkUmVsYXRpb24sXG4gIEJveGVkU29tZSxcbiAgZ2VuZXJhdGVVdWlkLFxuICBOb3JtYWxpemVkLFxufSBmcm9tIFwiLi4vc3JjL2FwaVwiO1xuaW1wb3J0IHtcbiAgREVDSVNJT05fVEFCTEVfSU5QVVRfREVGQVVMVF9WQUxVRSxcbiAgREVDSVNJT05fVEFCTEVfT1VUUFVUX0RFRkFVTFRfVkFMVUUsXG59IGZyb20gXCIuLi9zcmMvZXhwcmVzc2lvbnMvRGVjaXNpb25UYWJsZUV4cHJlc3Npb24vRGVjaXNpb25UYWJsZUV4cHJlc3Npb25cIjtcbmltcG9ydCB7IElOVk9DQVRJT05fRVhQUkVTU0lPTl9ERUZBVUxUX1BBUkFNRVRFUl9OQU1FIH0gZnJvbSBcIi4uL3NyYy9leHByZXNzaW9ucy9JbnZvY2F0aW9uRXhwcmVzc2lvbi9JbnZvY2F0aW9uRXhwcmVzc2lvblwiO1xuaW1wb3J0IHtcbiAgQkVFX1RBQkxFX1JPV19JTkRFWF9DT0xVTU5fV0lEVEgsXG4gIENPTlRFWFRfRU5UUllfVkFSSUFCTEVfTUlOX1dJRFRILFxuICBERUNJU0lPTl9UQUJMRV9BTk5PVEFUSU9OX0RFRkFVTFRfV0lEVEgsXG4gIERFQ0lTSU9OX1RBQkxFX0lOUFVUX0RFRkFVTFRfV0lEVEgsXG4gIERFQ0lTSU9OX1RBQkxFX09VVFBVVF9ERUZBVUxUX1dJRFRILFxuICBGSUxURVJfRVhQUkVTU0lPTl9NSU5fV0lEVEgsXG4gIExJVEVSQUxfRVhQUkVTU0lPTl9NSU5fV0lEVEgsXG4gIFJFTEFUSU9OX0VYUFJFU1NJT05fQ09MVU1OX0RFRkFVTFRfV0lEVEgsXG59IGZyb20gXCIuLi9zcmMvcmVzaXppbmcvV2lkdGhDb25zdGFudHNcIjtcbmltcG9ydCB7IFJFTEFUSU9OX0VYUFJFU1NJT05fREVGQVVMVF9WQUxVRSB9IGZyb20gXCIuLi9zcmMvZXhwcmVzc2lvbnMvUmVsYXRpb25FeHByZXNzaW9uL1JlbGF0aW9uRXhwcmVzc2lvblwiO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNTdHJ1Y3QoaXRlbURlZmluaXRpb246IERNTjE1X190SXRlbURlZmluaXRpb24pIHtcbiAgcmV0dXJuICFpdGVtRGVmaW5pdGlvbi50eXBlUmVmICYmICEhaXRlbURlZmluaXRpb24uaXRlbUNvbXBvbmVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERlZmF1bHRCb3hlZEV4cHJlc3Npb25Gb3JTdG9yaWVzKHtcbiAgbG9naWNUeXBlLFxuICB0eXBlUmVmLFxuICB3aWR0aHNCeUlkLFxufToge1xuICBsb2dpY1R5cGU6IEJveGVkRXhwcmVzc2lvbltcIl9fJCRlbGVtZW50XCJdIHwgdW5kZWZpbmVkO1xuICB0eXBlUmVmOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHdpZHRoc0J5SWQ6IE1hcDxzdHJpbmcsIG51bWJlcltdPjtcbn0pOiBOb3JtYWxpemVkPEJveGVkRXhwcmVzc2lvbj4ge1xuICBpZiAobG9naWNUeXBlID09PSBcImxpdGVyYWxFeHByZXNzaW9uXCIpIHtcbiAgICBjb25zdCBsaXRlcmFsRXhwcmVzc2lvbjogTm9ybWFsaXplZDxCb3hlZExpdGVyYWw+ID0ge1xuICAgICAgX18kJGVsZW1lbnQ6IFwibGl0ZXJhbEV4cHJlc3Npb25cIixcbiAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICAgIFwiQF90eXBlUmVmXCI6IHR5cGVSZWYsXG4gICAgfTtcblxuICAgIHdpZHRoc0J5SWQuc2V0KGxpdGVyYWxFeHByZXNzaW9uW1wiQF9pZFwiXSEsIFtMSVRFUkFMX0VYUFJFU1NJT05fTUlOX1dJRFRIXSk7XG4gICAgcmV0dXJuIGxpdGVyYWxFeHByZXNzaW9uO1xuICB9XG4gIC8vXG4gIGVsc2UgaWYgKGxvZ2ljVHlwZSA9PT0gXCJmdW5jdGlvbkRlZmluaXRpb25cIikge1xuICAgIGNvbnN0IGZ1bmN0aW9uRXhwcmVzc2lvbjogTm9ybWFsaXplZDxCb3hlZEZ1bmN0aW9uPiA9IHtcbiAgICAgIF9fJCRlbGVtZW50OiBcImZ1bmN0aW9uRGVmaW5pdGlvblwiLFxuICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgXCJAX3R5cGVSZWZcIjogdHlwZVJlZixcbiAgICAgIFwiQF9raW5kXCI6IFwiRkVFTFwiLFxuICAgICAgZXhwcmVzc2lvbjogdW5kZWZpbmVkISwgLy8gU1BFQyBESVNDUkVQQU5DWTogU3RhcnRpbmcgd2l0aG91dCBhbiBleHByZXNzaW9uIGdpdmVzIHVzZXJzIHRoZSBhYmlsaXR5IHRvIHNlbGVjdCB0aGUgZXhwcmVzc2lvbiB0eXBlLlxuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uRXhwcmVzc2lvbjtcbiAgfVxuICAvL1xuICBlbHNlIGlmIChsb2dpY1R5cGUgPT09IFwiY29udGV4dFwiKSB7XG4gICAgY29uc3QgY29udGV4dEV4cHJlc3Npb246IE5vcm1hbGl6ZWQ8Qm94ZWRDb250ZXh0PiA9IHtcbiAgICAgIF9fJCRlbGVtZW50OiBcImNvbnRleHRcIixcbiAgICAgIFwiQF90eXBlUmVmXCI6IHR5cGVSZWYsXG4gICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICBjb250ZXh0RW50cnk6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICAgICAgICB2YXJpYWJsZToge1xuICAgICAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgICAgICAgXCJAX25hbWVcIjogXCJDb250ZXh0RW50cnktMVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZXhwcmVzc2lvbjogdW5kZWZpbmVkISwgLy8gU1BFQyBESVNDUkVQQU5DWTogU3RhcnRpbmcgd2l0aG91dCBhbiBleHByZXNzaW9uIGdpdmVzIHVzZXJzIHRoZSBhYmlsaXR5IHRvIHNlbGVjdCB0aGUgZXhwcmVzc2lvbiB0eXBlLlxuICAgICAgICB9LFxuICAgICAgICAvLyA8cmVzdWx0PlxuICAgICAgICB7XG4gICAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgICAgIGV4cHJlc3Npb246IHVuZGVmaW5lZCEsIC8vIFNQRUMgRElTQ1JFUEFOQ1k6IFN0YXJ0aW5nIHdpdGhvdXQgYW4gZXhwcmVzc2lvbiBnaXZlcyB1c2VycyB0aGUgYWJpbGl0eSB0byBzZWxlY3QgdGhlIGV4cHJlc3Npb24gdHlwZS5cbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfTtcblxuICAgIHdpZHRoc0J5SWQuc2V0KGNvbnRleHRFeHByZXNzaW9uW1wiQF9pZFwiXSEsIFtDT05URVhUX0VOVFJZX1ZBUklBQkxFX01JTl9XSURUSF0pO1xuICAgIHJldHVybiBjb250ZXh0RXhwcmVzc2lvbjtcbiAgfSBlbHNlIGlmIChsb2dpY1R5cGUgPT09IFwibGlzdFwiKSB7XG4gICAgY29uc3QgbGlzdEV4cHJlc3Npb246IE5vcm1hbGl6ZWQ8Qm94ZWRMaXN0PiA9IHtcbiAgICAgIF9fJCRlbGVtZW50OiBcImxpc3RcIixcbiAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICAgIFwiQF90eXBlUmVmXCI6IHR5cGVSZWYsXG4gICAgICBleHByZXNzaW9uOiBbXG4gICAgICAgIHVuZGVmaW5lZCEsIC8vIFNQRUMgRElTQ1JFUEFOQ1k6IFN0YXJ0aW5nIHdpdGhvdXQgYW4gZXhwcmVzc2lvbiBnaXZlcyB1c2VycyB0aGUgYWJpbGl0eSB0byBzZWxlY3QgdGhlIGV4cHJlc3Npb24gdHlwZS5cbiAgICAgIF0sXG4gICAgfTtcbiAgICByZXR1cm4gbGlzdEV4cHJlc3Npb247XG4gIH0gZWxzZSBpZiAobG9naWNUeXBlID09PSBcImludm9jYXRpb25cIikge1xuICAgIGNvbnN0IGludm9jYXRpb25FeHByZXNzaW9uOiBOb3JtYWxpemVkPEJveGVkSW52b2NhdGlvbj4gPSB7XG4gICAgICBfXyQkZWxlbWVudDogXCJpbnZvY2F0aW9uXCIsXG4gICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICBcIkBfdHlwZVJlZlwiOiB0eXBlUmVmLFxuICAgICAgYmluZGluZzogW1xuICAgICAgICB7XG4gICAgICAgICAgcGFyYW1ldGVyOiB7XG4gICAgICAgICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICAgICAgICBcIkBfbmFtZVwiOiBJTlZPQ0FUSU9OX0VYUFJFU1NJT05fREVGQVVMVF9QQVJBTUVURVJfTkFNRSxcbiAgICAgICAgICAgIFwiQF90eXBlUmVmXCI6IHVuZGVmaW5lZCxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGV4cHJlc3Npb246IHVuZGVmaW5lZCEsIC8vIFNQRUMgRElTQ1JFUEFOQ1k6IFN0YXJ0aW5nIHdpdGhvdXQgYW4gZXhwcmVzc2lvbiBnaXZlcyB1c2VycyB0aGUgYWJpbGl0eSB0byBzZWxlY3QgdGhlIGV4cHJlc3Npb24gdHlwZS5cbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBleHByZXNzaW9uOiB7XG4gICAgICAgIF9fJCRlbGVtZW50OiBcImxpdGVyYWxFeHByZXNzaW9uXCIsXG4gICAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICAgICAgdGV4dDogeyBfXyQkdGV4dDogXCJGVU5DVElPTiBOQU1FXCIgfSxcbiAgICAgIH0sXG4gICAgfTtcbiAgICB3aWR0aHNCeUlkLnNldChpbnZvY2F0aW9uRXhwcmVzc2lvbltcIkBfaWRcIl0hLCBbQ09OVEVYVF9FTlRSWV9WQVJJQUJMRV9NSU5fV0lEVEhdKTtcbiAgICByZXR1cm4gaW52b2NhdGlvbkV4cHJlc3Npb247XG4gIH0gZWxzZSBpZiAobG9naWNUeXBlID09PSBcInJlbGF0aW9uXCIpIHtcbiAgICBjb25zdCByZWxhdGlvbkV4cHJlc3Npb246IE5vcm1hbGl6ZWQ8Qm94ZWRSZWxhdGlvbj4gPSB7XG4gICAgICBfXyQkZWxlbWVudDogXCJyZWxhdGlvblwiLFxuICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgXCJAX3R5cGVSZWZcIjogdHlwZVJlZixcbiAgICAgIHJvdzogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgICAgIGV4cHJlc3Npb246IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgX18kJGVsZW1lbnQ6IFwibGl0ZXJhbEV4cHJlc3Npb25cIixcbiAgICAgICAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgICAgICAgICB0ZXh0OiB7IF9fJCR0ZXh0OiBSRUxBVElPTl9FWFBSRVNTSU9OX0RFRkFVTFRfVkFMVUUgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBjb2x1bW46IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICAgICAgICBcIkBfbmFtZVwiOiBcImNvbHVtbi0xXCIsXG4gICAgICAgICAgXCJAX3R5cGVSZWZcIjogdW5kZWZpbmVkLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9O1xuXG4gICAgd2lkdGhzQnlJZC5zZXQocmVsYXRpb25FeHByZXNzaW9uW1wiQF9pZFwiXSEsIFtcbiAgICAgIEJFRV9UQUJMRV9ST1dfSU5ERVhfQ09MVU1OX1dJRFRILFxuICAgICAgUkVMQVRJT05fRVhQUkVTU0lPTl9DT0xVTU5fREVGQVVMVF9XSURUSCxcbiAgICBdKTtcbiAgICByZXR1cm4gcmVsYXRpb25FeHByZXNzaW9uO1xuICB9IGVsc2UgaWYgKGxvZ2ljVHlwZSA9PT0gXCJkZWNpc2lvblRhYmxlXCIpIHtcbiAgICBjb25zdCBzaW5nbGVPdXRwdXRDb2x1bW4gPSB7XG4gICAgICBuYW1lOiBcIm91dHB1dC0xXCIsXG4gICAgICB0eXBlUmVmOiB1bmRlZmluZWQsXG4gICAgfTtcbiAgICBjb25zdCBzaW5nbGVJbnB1dENvbHVtbiA9IHtcbiAgICAgIG5hbWU6IFwiaW5wdXQtMVwiLFxuICAgICAgdHlwZVJlZjogdW5kZWZpbmVkLFxuICAgIH07XG5cbiAgICBjb25zdCBpbnB1dCA9IFtcbiAgICAgIHtcbiAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgICBpbnB1dEV4cHJlc3Npb246IHtcbiAgICAgICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICAgICAgdGV4dDogeyBfXyQkdGV4dDogc2luZ2xlSW5wdXRDb2x1bW4ubmFtZSB9LFxuICAgICAgICAgIFwiQF90eXBlUmVmXCI6IHNpbmdsZUlucHV0Q29sdW1uLnR5cGVSZWYsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIF07XG5cbiAgICBjb25zdCBvdXRwdXQ6IE5vcm1hbGl6ZWQ8RE1OMTVfX3RPdXRwdXRDbGF1c2U+W10gPSBbXG4gICAgICB7XG4gICAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICAgICAgXCJAX25hbWVcIjogc2luZ2xlT3V0cHV0Q29sdW1uLm5hbWUsXG4gICAgICAgIFwiQF90eXBlUmVmXCI6IHNpbmdsZU91dHB1dENvbHVtbi50eXBlUmVmLFxuICAgICAgfSxcbiAgICBdO1xuXG4gICAgY29uc3QgZGVjaXNpb25UYWJsZUV4cHJlc3Npb246IE5vcm1hbGl6ZWQ8Qm94ZWREZWNpc2lvblRhYmxlPiA9IHtcbiAgICAgIF9fJCRlbGVtZW50OiBcImRlY2lzaW9uVGFibGVcIixcbiAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICAgIFwiQF90eXBlUmVmXCI6IHR5cGVSZWYsXG4gICAgICBcIkBfaGl0UG9saWN5XCI6IFwiVU5JUVVFXCIsXG4gICAgICBpbnB1dCxcbiAgICAgIG91dHB1dCxcbiAgICAgIGFubm90YXRpb246IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiQF9uYW1lXCI6IFwiQW5ub3RhdGlvbnNcIixcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBydWxlOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICAgICAgaW5wdXRFbnRyeTogaW5wdXQubWFwKCgpID0+ICh7XG4gICAgICAgICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICAgICAgICB0ZXh0OiB7IF9fJCR0ZXh0OiBERUNJU0lPTl9UQUJMRV9JTlBVVF9ERUZBVUxUX1ZBTFVFIH0sXG4gICAgICAgICAgfSkpLFxuICAgICAgICAgIG91dHB1dEVudHJ5OiBvdXRwdXQubWFwKCgpID0+ICh7XG4gICAgICAgICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICAgICAgICB0ZXh0OiB7IF9fJCR0ZXh0OiBERUNJU0lPTl9UQUJMRV9PVVRQVVRfREVGQVVMVF9WQUxVRSB9LFxuICAgICAgICAgIH0pKSxcbiAgICAgICAgICBhbm5vdGF0aW9uRW50cnk6IFt7IHRleHQ6IHsgX18kJHRleHQ6IFwiLy8gWW91ciBhbm5vdGF0aW9ucyBoZXJlXCIgfSB9XSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfTtcblxuICAgIHdpZHRoc0J5SWQuc2V0KGRlY2lzaW9uVGFibGVFeHByZXNzaW9uW1wiQF9pZFwiXSEsIFtcbiAgICAgIEJFRV9UQUJMRV9ST1dfSU5ERVhfQ09MVU1OX1dJRFRILFxuICAgICAgREVDSVNJT05fVEFCTEVfSU5QVVRfREVGQVVMVF9XSURUSCxcbiAgICAgIERFQ0lTSU9OX1RBQkxFX09VVFBVVF9ERUZBVUxUX1dJRFRILFxuICAgICAgREVDSVNJT05fVEFCTEVfQU5OT1RBVElPTl9ERUZBVUxUX1dJRFRILFxuICAgIF0pO1xuXG4gICAgcmV0dXJuIGRlY2lzaW9uVGFibGVFeHByZXNzaW9uO1xuICB9IGVsc2UgaWYgKGxvZ2ljVHlwZSA9PT0gXCJmaWx0ZXJcIikge1xuICAgIGNvbnN0IGZpbHRlckV4cHJlc3Npb246IE5vcm1hbGl6ZWQ8Qm94ZWRGaWx0ZXI+ID0ge1xuICAgICAgX18kJGVsZW1lbnQ6IFwiZmlsdGVyXCIsXG4gICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICBcIkBfdHlwZVJlZlwiOiB0eXBlUmVmLFxuICAgICAgaW46IHtcbiAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgICBleHByZXNzaW9uOiB1bmRlZmluZWQhLCAvLyBTUEVDIERJU0NSRVBBTkNZOiBTdGFydGluZyB3aXRob3V0IGFuIGV4cHJlc3Npb24gZ2l2ZXMgdXNlcnMgdGhlIGFiaWxpdHkgdG8gc2VsZWN0IHRoZSBleHByZXNzaW9uIHR5cGUuXG4gICAgICB9LFxuICAgICAgbWF0Y2g6IHtcbiAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgICBleHByZXNzaW9uOiB1bmRlZmluZWQhLCAvLyBTUEVDIERJU0NSRVBBTkNZOiBTdGFydGluZyB3aXRob3V0IGFuIGV4cHJlc3Npb24gZ2l2ZXMgdXNlcnMgdGhlIGFiaWxpdHkgdG8gc2VsZWN0IHRoZSBleHByZXNzaW9uIHR5cGUuXG4gICAgICB9LFxuICAgIH07XG4gICAgd2lkdGhzQnlJZC5zZXQoZmlsdGVyRXhwcmVzc2lvbltcIkBfaWRcIl0hLCBbRklMVEVSX0VYUFJFU1NJT05fTUlOX1dJRFRIXSk7XG4gICAgcmV0dXJuIGZpbHRlckV4cHJlc3Npb247XG4gIH0gZWxzZSBpZiAobG9naWNUeXBlID09PSBcImNvbmRpdGlvbmFsXCIpIHtcbiAgICBjb25zdCBjb25kaXRpb25hbEV4cHJlc3Npb246IE5vcm1hbGl6ZWQ8Qm94ZWRDb25kaXRpb25hbD4gPSB7XG4gICAgICBfXyQkZWxlbWVudDogXCJjb25kaXRpb25hbFwiLFxuICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgaWY6IHtcbiAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgICBleHByZXNzaW9uOiB1bmRlZmluZWQhLCAvLyBTUEVDIERJU0NSRVBBTkNZOiBTdGFydGluZyB3aXRob3V0IGFuIGV4cHJlc3Npb24gZ2l2ZXMgdXNlcnMgdGhlIGFiaWxpdHkgdG8gc2VsZWN0IHRoZSBleHByZXNzaW9uIHR5cGUuXG4gICAgICB9LFxuICAgICAgdGhlbjoge1xuICAgICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICAgIGV4cHJlc3Npb246IHVuZGVmaW5lZCEsIC8vIFNQRUMgRElTQ1JFUEFOQ1k6IFN0YXJ0aW5nIHdpdGhvdXQgYW4gZXhwcmVzc2lvbiBnaXZlcyB1c2VycyB0aGUgYWJpbGl0eSB0byBzZWxlY3QgdGhlIGV4cHJlc3Npb24gdHlwZS4sXG4gICAgICB9LFxuICAgICAgZWxzZToge1xuICAgICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICAgIGV4cHJlc3Npb246IHVuZGVmaW5lZCEsIC8vIFNQRUMgRElTQ1JFUEFOQ1k6IFN0YXJ0aW5nIHdpdGhvdXQgYW4gZXhwcmVzc2lvbiBnaXZlcyB1c2VycyB0aGUgYWJpbGl0eSB0byBzZWxlY3QgdGhlIGV4cHJlc3Npb24gdHlwZS5cbiAgICAgIH0sXG4gICAgfTtcbiAgICByZXR1cm4gY29uZGl0aW9uYWxFeHByZXNzaW9uO1xuICB9IGVsc2UgaWYgKGxvZ2ljVHlwZSA9PT0gXCJmb3JcIikge1xuICAgIGNvbnN0IGZvckV4cHJlc3Npb246IE5vcm1hbGl6ZWQ8Qm94ZWRGb3I+ID0ge1xuICAgICAgX18kJGVsZW1lbnQ6IFwiZm9yXCIsXG4gICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICByZXR1cm46IHtcbiAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgICBleHByZXNzaW9uOiB1bmRlZmluZWQhLCAvLyBTUEVDIERJU0NSRVBBTkNZOiBTdGFydGluZyB3aXRob3V0IGFuIGV4cHJlc3Npb24gZ2l2ZXMgdXNlcnMgdGhlIGFiaWxpdHkgdG8gc2VsZWN0IHRoZSBleHByZXNzaW9uIHR5cGUuXG4gICAgICB9LFxuICAgICAgaW46IHtcbiAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgICBleHByZXNzaW9uOiB1bmRlZmluZWQhLCAvLyBTUEVDIERJU0NSRVBBTkNZOiBTdGFydGluZyB3aXRob3V0IGFuIGV4cHJlc3Npb24gZ2l2ZXMgdXNlcnMgdGhlIGFiaWxpdHkgdG8gc2VsZWN0IHRoZSBleHByZXNzaW9uIHR5cGUuXG4gICAgICB9LFxuICAgIH07XG4gICAgcmV0dXJuIGZvckV4cHJlc3Npb247XG4gIH0gZWxzZSBpZiAobG9naWNUeXBlID09IFwic29tZVwiKSB7XG4gICAgY29uc3Qgc29tZUV4cHJlc3Npb246IE5vcm1hbGl6ZWQ8Qm94ZWRTb21lPiA9IHtcbiAgICAgIF9fJCRlbGVtZW50OiBcInNvbWVcIixcbiAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICAgIHNhdGlzZmllczoge1xuICAgICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICAgIGV4cHJlc3Npb246IHVuZGVmaW5lZCEsIC8vIFNQRUMgRElTQ1JFUEFOQ1k6IFN0YXJ0aW5nIHdpdGhvdXQgYW4gZXhwcmVzc2lvbiBnaXZlcyB1c2VycyB0aGUgYWJpbGl0eSB0byBzZWxlY3QgdGhlIGV4cHJlc3Npb24gdHlwZS5cbiAgICAgIH0sXG4gICAgICBpbjoge1xuICAgICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICAgIGV4cHJlc3Npb246IHVuZGVmaW5lZCEsIC8vIFNQRUMgRElTQ1JFUEFOQ1k6IFN0YXJ0aW5nIHdpdGhvdXQgYW4gZXhwcmVzc2lvbiBnaXZlcyB1c2VycyB0aGUgYWJpbGl0eSB0byBzZWxlY3QgdGhlIGV4cHJlc3Npb24gdHlwZS5cbiAgICAgIH0sXG4gICAgfTtcbiAgICByZXR1cm4gc29tZUV4cHJlc3Npb247XG4gIH0gZWxzZSBpZiAobG9naWNUeXBlID09PSBcImV2ZXJ5XCIpIHtcbiAgICBjb25zdCBldmVyeUV4cHJlc3Npb246IE5vcm1hbGl6ZWQ8Qm94ZWRFdmVyeT4gPSB7XG4gICAgICBfXyQkZWxlbWVudDogXCJldmVyeVwiLFxuICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgc2F0aXNmaWVzOiB7XG4gICAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICAgICAgZXhwcmVzc2lvbjogdW5kZWZpbmVkISwgLy8gU1BFQyBESVNDUkVQQU5DWTogU3RhcnRpbmcgd2l0aG91dCBhbiBleHByZXNzaW9uIGdpdmVzIHVzZXJzIHRoZSBhYmlsaXR5IHRvIHNlbGVjdCB0aGUgZXhwcmVzc2lvbiB0eXBlLlxuICAgICAgfSxcbiAgICAgIGluOiB7XG4gICAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICAgICAgZXhwcmVzc2lvbjogdW5kZWZpbmVkISwgLy8gU1BFQyBESVNDUkVQQU5DWTogU3RhcnRpbmcgd2l0aG91dCBhbiBleHByZXNzaW9uIGdpdmVzIHVzZXJzIHRoZSBhYmlsaXR5IHRvIHNlbGVjdCB0aGUgZXhwcmVzc2lvbiB0eXBlLlxuICAgICAgfSxcbiAgICB9O1xuICAgIHJldHVybiBldmVyeUV4cHJlc3Npb247XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBObyBkZWZhdWx0IGV4cHJlc3Npb24gYXZhaWxhYmxlIGZvciAke2xvZ2ljVHlwZX0uYCk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJJMThuRGljdGlvbmFyaWVzUHJvdmlkZXIiLCJib3hlZEV4cHJlc3Npb25FZGl0b3JEaWN0aW9uYXJpZXMiLCJCb3hlZEV4cHJlc3Npb25FZGl0b3JJMThuQ29udGV4dCIsImJveGVkRXhwcmVzc2lvbkVkaXRvckkxOG5EZWZhdWx0cyIsIkV4cHJlc3Npb25EZWZpbml0aW9uUm9vdCIsIkJveGVkRXhwcmVzc2lvbkVkaXRvckNvbnRleHRQcm92aWRlciIsIkJveGVkRXhwcmVzc2lvbkVkaXRvciIsImRhdGFUeXBlcyIsImlzUmVhZE9ubHkiLCJleHByZXNzaW9uSG9sZGVySWQiLCJleHByZXNzaW9uSG9sZGVyTmFtZSIsImV4cHJlc3Npb25Ib2xkZXJUeXBlUmVmIiwiZXhwcmVzc2lvbiIsIm9uRXhwcmVzc2lvbkNoYW5nZSIsImJlZUd3dFNlcnZpY2UiLCJpc1Jlc2V0U3VwcG9ydGVkT25Sb290RXhwcmVzc2lvbiIsInNjcm9sbGFibGVQYXJlbnRSZWYiLCJwbW1sRG9jdW1lbnRzIiwib25SZXF1ZXN0RmVlbElkZW50aWZpZXJzIiwiZXZhbHVhdGlvbkhpdHNDb3VudEJ5SWQiLCJ3aWR0aHNCeUlkIiwib25XaWR0aHNDaGFuZ2UiLCJoaWRlRG1uMTRCb3hlZEV4cHJlc3Npb25zIiwiX2pzeCIsImRlZmF1bHRzIiwiZGljdGlvbmFyaWVzIiwiaW5pdGlhbExvY2FsZSIsIm5hdmlnYXRvciIsImxhbmd1YWdlIiwiY3R4IiwiY2hpbGRyZW4iLCJpc1Jlc2V0U3VwcG9ydGVkIiwiUmVzaXppbmdXaWR0aHNDb250ZXh0UHJvdmlkZXIiLCJFeHByZXNzaW9uQ29udGFpbmVyIiwiY2xhc3NOYW1lIiwiaXNOZXN0ZWQiLCJyb3dJbmRleCIsImNvbHVtbkluZGV4IiwicGFyZW50RWxlbWVudElkIiwicGFyZW50RWxlbWVudE5hbWUiLCJwYXJlbnRFbGVtZW50VHlwZVJlZiIsInVzZUFyZ3MiLCJ1c2VDYWxsYmFjayIsInVzZUVmZmVjdCIsInVzZU1lbW8iLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIkRtbkJ1aWx0SW5EYXRhVHlwZSIsImdlbmVyYXRlVXVpZCIsIkRFRkFVTFRfRVhQUkVTU0lPTl9WQVJJQUJMRV9OQU1FIiwiZ2V0RGVmYXVsdEJveGVkRXhwcmVzc2lvbkZvclN0b3JpZXMiLCJkb2N1bWVudCIsIm1vZGVsc0Zyb21Eb2N1bWVudCIsIm1vZGVsIiwicGFyYW1ldGVyc0Zyb21Nb2RlbCIsIk51bWJlciIsIkFueSIsIm5hbWUiLCJpc0N1c3RvbSIsImdldERlZmF1bHRFeHByZXNzaW9uRGVmaW5pdGlvbiIsImxvZ2ljVHlwZSIsImRhdGFUeXBlIiwiTWFwIiwidHlwZVJlZiIsIm9wZW5EYXRhVHlwZVBhZ2UiLCJzZWxlY3RPYmplY3QiLCJCb3hlZEV4cHJlc3Npb25FZGl0b3JTdG9yeSIsInByb3BzIiwiZW1wdHlSZWYiLCJhcmdzIiwidXBkYXRlQXJncyIsImV4cHJlc3Npb25TdGF0ZSIsInNldEV4cHJlc3Npb25TdGF0ZSIsIl9hIiwid2lkdGhzQnlJZFN0YXRlIiwic2V0V2lkdGhzQnlJZFN0YXRlIiwiX2MiLCJfYiIsIm5ld1dpZHRoc0J5SWQiLCJwcmV2IiwibmV3V2lkaHRzQnlJZFN0YXRlIiwidG9PYmplY3QiLCJ0b01hcCIsIndpZHRoc0J5SWRNYXAiLCJ1bmRlZmluZWQiLCJKU09OIiwic3RyaW5naWZ5Iiwic2V0RXhwcmVzc2lvbkFjdGlvbiIsIl9qc3hzIiwiX0ZyYWdtZW50Iiwic3R5bGUiLCJkaXNwbGF5IiwicmVmIiwib25LZXlEb3duIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJfZSIsIl9kIiwiX2ciLCJfZiIsIl9oIiwiX2oiLCJfbCIsIl9rIiwiX28iLCJfbSIsIl9xIiwiX3AiLCJfcyIsIl9yIiwiX3UiLCJfdCIsIl93IiwiX3YiLCJtYXAiLCJBcnJheSIsImZyb20iLCJlbnRyaWVzIiwicmVkdWNlIiwiYWNjIiwia2V5IiwidmFsdWUiLCJvYmplY3QiLCJPYmplY3QiLCJzZXQiLCJERUNJU0lPTl9UQUJMRV9JTlBVVF9ERUZBVUxUX1ZBTFVFIiwiREVDSVNJT05fVEFCTEVfT1VUUFVUX0RFRkFVTFRfVkFMVUUiLCJJTlZPQ0FUSU9OX0VYUFJFU1NJT05fREVGQVVMVF9QQVJBTUVURVJfTkFNRSIsIkJFRV9UQUJMRV9ST1dfSU5ERVhfQ09MVU1OX1dJRFRIIiwiQ09OVEVYVF9FTlRSWV9WQVJJQUJMRV9NSU5fV0lEVEgiLCJERUNJU0lPTl9UQUJMRV9BTk5PVEFUSU9OX0RFRkFVTFRfV0lEVEgiLCJERUNJU0lPTl9UQUJMRV9JTlBVVF9ERUZBVUxUX1dJRFRIIiwiREVDSVNJT05fVEFCTEVfT1VUUFVUX0RFRkFVTFRfV0lEVEgiLCJGSUxURVJfRVhQUkVTU0lPTl9NSU5fV0lEVEgiLCJMSVRFUkFMX0VYUFJFU1NJT05fTUlOX1dJRFRIIiwiUkVMQVRJT05fRVhQUkVTU0lPTl9DT0xVTU5fREVGQVVMVF9XSURUSCIsIlJFTEFUSU9OX0VYUFJFU1NJT05fREVGQVVMVF9WQUxVRSIsImlzU3RydWN0IiwiaXRlbURlZmluaXRpb24iLCJpdGVtQ29tcG9uZW50IiwibGl0ZXJhbEV4cHJlc3Npb24iLCJfXyQkZWxlbWVudCIsImZ1bmN0aW9uRXhwcmVzc2lvbiIsImNvbnRleHRFeHByZXNzaW9uIiwiY29udGV4dEVudHJ5IiwidmFyaWFibGUiLCJsaXN0RXhwcmVzc2lvbiIsImludm9jYXRpb25FeHByZXNzaW9uIiwiYmluZGluZyIsInBhcmFtZXRlciIsInRleHQiLCJfXyQkdGV4dCIsInJlbGF0aW9uRXhwcmVzc2lvbiIsInJvdyIsImNvbHVtbiIsInNpbmdsZU91dHB1dENvbHVtbiIsInNpbmdsZUlucHV0Q29sdW1uIiwiaW5wdXQiLCJpbnB1dEV4cHJlc3Npb24iLCJvdXRwdXQiLCJkZWNpc2lvblRhYmxlRXhwcmVzc2lvbiIsImFubm90YXRpb24iLCJydWxlIiwiaW5wdXRFbnRyeSIsIm91dHB1dEVudHJ5IiwiYW5ub3RhdGlvbkVudHJ5IiwiZmlsdGVyRXhwcmVzc2lvbiIsImluIiwibWF0Y2giLCJjb25kaXRpb25hbEV4cHJlc3Npb24iLCJpZiIsInRoZW4iLCJlbHNlIiwiZm9yRXhwcmVzc2lvbiIsInJldHVybiIsInNvbWVFeHByZXNzaW9uIiwic2F0aXNmaWVzIiwiZXZlcnlFeHByZXNzaW9uIiwiRXJyb3IiXSwic291cmNlUm9vdCI6IiJ9