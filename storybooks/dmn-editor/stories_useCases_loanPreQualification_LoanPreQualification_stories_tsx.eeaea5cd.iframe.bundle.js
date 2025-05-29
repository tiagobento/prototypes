"use strict";
(self["webpackChunk_kie_tools_dmn_editor"] = self["webpackChunk_kie_tools_dmn_editor"] || []).push([["stories_useCases_loanPreQualification_LoanPreQualification_stories_tsx"],{

/***/ "./stories/misc/empty/Empty.stories.tsx":
/*!**********************************************!*\
  !*** ./stories/misc/empty/Empty.stories.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Empty: () => (/* binding */ Empty),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   generateEmptyDmn15: () => (/* binding */ generateEmptyDmn15)
/* harmony export */ });
/* harmony import */ var _kie_tools_dmn_marshaller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @kie-tools/dmn-marshaller */ "../dmn-marshaller/dist/index.js");
/* harmony import */ var _kie_tools_dmn_marshaller_dist_schemas_dmn_1_5_ts_gen_meta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @kie-tools/dmn-marshaller/dist/schemas/dmn-1_5/ts-gen/meta */ "../dmn-marshaller/dist/schemas/dmn-1_5/ts-gen/meta.js");
/* harmony import */ var _kie_tools_boxed_expression_component_dist_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @kie-tools/boxed-expression-component/dist/api */ "../boxed-expression-component/dist/api/index.js");
/* harmony import */ var _kie_tools_dmn_marshaller_dist_schemas_dmn_1_5_Dmn15Spec__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @kie-tools/dmn-marshaller/dist/schemas/dmn-1_5/Dmn15Spec */ "../dmn-marshaller/dist/schemas/dmn-1_5/Dmn15Spec.js");
/* harmony import */ var _dmnEditorStoriesWrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../dmnEditorStoriesWrapper */ "./stories/dmnEditorStoriesWrapper.tsx");
/* harmony import */ var _src_DmnEditor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../src/DmnEditor */ "./src/DmnEditor.tsx");
var _a, _b, _c;






const generateEmptyDmn15 = () => `<?xml version="1.0" encoding="UTF-8"?>
<definitions
  xmlns="${_kie_tools_dmn_marshaller_dist_schemas_dmn_1_5_ts_gen_meta__WEBPACK_IMPORTED_MODULE_1__.ns.get("")}"
  expressionLanguage="${_kie_tools_dmn_marshaller_dist_schemas_dmn_1_5_Dmn15Spec__WEBPACK_IMPORTED_MODULE_3__.DMN15_SPEC.expressionLanguage.default}"
  namespace="https://kie.apache.org/dmn/${(0,_kie_tools_boxed_expression_component_dist_api__WEBPACK_IMPORTED_MODULE_2__.generateUuid)()}"
  id="${(0,_kie_tools_boxed_expression_component_dist_api__WEBPACK_IMPORTED_MODULE_2__.generateUuid)()}"
  name="DMN${(0,_kie_tools_boxed_expression_component_dist_api__WEBPACK_IMPORTED_MODULE_2__.generateUuid)()}">
</definitions>`;
const meta = {
  title: "Misc/Empty",
  component: _src_DmnEditor__WEBPACK_IMPORTED_MODULE_5__.DmnEditor,
  includeStories: /^[A-Z]/
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (meta);
const marshaller = (0,_kie_tools_dmn_marshaller__WEBPACK_IMPORTED_MODULE_0__.getMarshaller)(generateEmptyDmn15(), {
  upgradeTo: "latest"
});
const model = marshaller.parser.parse();
const Empty = {
  render: args => (0,_dmnEditorStoriesWrapper__WEBPACK_IMPORTED_MODULE_4__.DmnEditorWrapper)(),
  args: {
    model: model,
    originalVersion: "1.5",
    evaluationResultsByNodeId: new Map(),
    externalContextDescription: "The Storybook for the DMN Editor",
    externalContextName: "Apache KIE :: DMN Editor :: Storybook",
    externalModelsByNamespace: {},
    issueTrackerHref: "",
    validationMessages: {},
    isReadOnly: false,
    xml: marshaller.builder.build(model)
  }
};
Empty.parameters = {
  ...Empty.parameters,
  docs: {
    ...((_a = Empty.parameters) === null || _a === void 0 ? void 0 : _a.docs),
    source: {
      originalSource: "{\n  render: args => DmnEditorWrapper(),\n  args: {\n    model: model,\n    originalVersion: \"1.5\",\n    evaluationResultsByNodeId: new Map(),\n    externalContextDescription: \"The Storybook for the DMN Editor\",\n    externalContextName: \"Apache KIE :: DMN Editor :: Storybook\",\n    externalModelsByNamespace: {},\n    issueTrackerHref: \"\",\n    validationMessages: {},\n    isReadOnly: false,\n    xml: marshaller.builder.build(model)\n  }\n}",
      ...((_c = (_b = Empty.parameters) === null || _b === void 0 ? void 0 : _b.docs) === null || _c === void 0 ? void 0 : _c.source)
    }
  }
};
const __namedExportsOrder = ["generateEmptyDmn15", "Empty"];

/***/ }),

/***/ "./stories/useCases/loanPreQualification/LoanPreQualification.stories.tsx":
/*!********************************************************************************!*\
  !*** ./stories/useCases/loanPreQualification/LoanPreQualification.stories.tsx ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoanPreQualification: () => (/* binding */ LoanPreQualification),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _misc_empty_Empty_stories__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../misc/empty/Empty.stories */ "./stories/misc/empty/Empty.stories.tsx");
/* harmony import */ var _src_DmnEditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../src/DmnEditor */ "./src/DmnEditor.tsx");
/* harmony import */ var _models_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/models */ "./stories/useCases/models/models.ts");
var _a, _b, _c;



const meta = {
  title: "Use cases/Loan Pre-Qualification",
  component: _src_DmnEditor__WEBPACK_IMPORTED_MODULE_1__.DmnEditor,
  includeStories: /^[A-Z]/
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (meta);
const LoanPreQualification = {
  render: _misc_empty_Empty_stories__WEBPACK_IMPORTED_MODULE_0__.Empty.render,
  args: {
    model: _models_models__WEBPACK_IMPORTED_MODULE_2__.USE_CASE_MODELS.loanPreQualification.model
  }
};
LoanPreQualification.parameters = {
  ...LoanPreQualification.parameters,
  docs: {
    ...((_a = LoanPreQualification.parameters) === null || _a === void 0 ? void 0 : _a.docs),
    source: {
      originalSource: "{\n  render: Empty.render,\n  args: {\n    model: USE_CASE_MODELS.loanPreQualification.model\n  }\n}",
      ...((_c = (_b = LoanPreQualification.parameters) === null || _b === void 0 ? void 0 : _b.docs) === null || _c === void 0 ? void 0 : _c.source)
    }
  }
};
const __namedExportsOrder = ["LoanPreQualification"];

/***/ }),

/***/ "./stories/dmnEditorStoriesWrapper.tsx":
/*!*********************************************!*\
  !*** ./stories/dmnEditorStoriesWrapper.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DmnEditorWrapper: () => (/* binding */ DmnEditorWrapper)
/* harmony export */ });
/* unused harmony exports evaluationResultsByNodeId, validationMessages */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @storybook/preview-api */ "@storybook/preview-api");
/* harmony import */ var _storybook_preview_api__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_DmnEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/DmnEditor */ "./src/DmnEditor.tsx");
/* harmony import */ var _kie_tools_dmn_marshaller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @kie-tools/dmn-marshaller */ "../dmn-marshaller/dist/index.js");
/* harmony import */ var _kie_tools_dmn_marshaller_dist_normalization_normalize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @kie-tools/dmn-marshaller/dist/normalization/normalize */ "../dmn-marshaller/dist/normalization/normalize.js");
/* harmony import */ var deep_object_diff__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! deep-object-diff */ "../../node_modules/.pnpm/deep-object-diff@1.1.9/node_modules/deep-object-diff/mjs/diff.js");
/* harmony import */ var _misc_empty_Empty_stories__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./misc/empty/Empty.stories */ "./stories/misc/empty/Empty.stories.tsx");








const evaluationResultsByNodeId = new Map();
const validationMessages = {};
function DmnEditorWrapper(props) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
  const [args, updateArgs] = (0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__.useArgs)();
  const argsCopy = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(args);
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const [modelArgs, setModelArgs] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(args.model);
  const model = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    var _a;
    return (_a = props === null || props === void 0 ? void 0 : props.model) !== null && _a !== void 0 ? _a : modelArgs;
  }, [modelArgs, props === null || props === void 0 ? void 0 : props.model]);
  const [modelChanged, setModelChange] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [isReadOnly, setIsReadOnly] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((_b = (_a = props === null || props === void 0 ? void 0 : props.isReadOnly) !== null && _a !== void 0 ? _a : args.isReadOnly) !== null && _b !== void 0 ? _b : false);
  const onModelChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => (props === null || props === void 0 ? void 0 : props.onModelChange) ? props.onModelChange : setModelArgs, [props === null || props === void 0 ? void 0 : props.onModelChange]);
  const onOpenedBoxedExpressionEditorNodeChangeNoOperation = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => newOpenedNodeId => {}, []);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (args.isReadOnly !== undefined) {
      setIsReadOnly(args.isReadOnly);
    }
  }, [args.isReadOnly]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (Object.keys((0,deep_object_diff__WEBPACK_IMPORTED_MODULE_7__["default"])(argsCopy.current.model, model)).length !== 0) {
      updateArgs({
        ...argsCopy.current,
        model: model,
        xml: (0,_kie_tools_dmn_marshaller__WEBPACK_IMPORTED_MODULE_4__.getMarshaller)((0,_misc_empty_Empty_stories__WEBPACK_IMPORTED_MODULE_6__.generateEmptyDmn15)(), {
          upgradeTo: "latest"
        }).builder.build(model)
      });
    }
  }, [updateArgs, model]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (Object.keys((0,deep_object_diff__WEBPACK_IMPORTED_MODULE_7__["default"])(argsCopy.current, args)).length === 0) {
      return;
    }
    argsCopy.current = args;
    if (Object.keys((0,deep_object_diff__WEBPACK_IMPORTED_MODULE_7__["default"])(args.model, model)).length === 0) {
      return;
    }
    onModelChange((0,_kie_tools_dmn_marshaller_dist_normalization_normalize__WEBPACK_IMPORTED_MODULE_5__.normalize)(args.model));
  }, [args, model, onModelChange]);
  const onModelDebounceStateChanged = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(changed => {
    setModelChange(changed);
  }, []);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [modelChanged && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      "data-testid": "storybook--dmn-editor-model",
      style: {
        display: "none"
      },
      children: JSON.stringify(model)
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
      "data-testid": "storybook--dmn-editor-toggle-read-only",
      style: {
        display: "none"
      },
      onClick: () => setIsReadOnly(currentValue => !currentValue),
      children: isReadOnly.toString()
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      style: {
        position: "absolute",
        width: "100%",
        height: "100%",
        top: "0px",
        left: "0px"
      },
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_DmnEditor__WEBPACK_IMPORTED_MODULE_3__.DmnEditor, {
        ref: ref,
        model: model,
        originalVersion: (_c = props === null || props === void 0 ? void 0 : props.originalVersion) !== null && _c !== void 0 ? _c : args.originalVersion,
        isEvaluationHighlightsSupported: (_d = props === null || props === void 0 ? void 0 : props.isEvaluationHighlightsSupported) !== null && _d !== void 0 ? _d : args.isEvaluationHighlightsSupported,
        isReadOnly: isReadOnly,
        onModelChange: onModelChange,
        onOpenedBoxedExpressionEditorNodeChange: onOpenedBoxedExpressionEditorNodeChangeNoOperation,
        onRequestExternalModelByPath: (_e = props === null || props === void 0 ? void 0 : props.onRequestExternalModelByPath) !== null && _e !== void 0 ? _e : args.onRequestExternalModelByPath,
        onRequestExternalModelsAvailableToInclude: (_f = props === null || props === void 0 ? void 0 : props.onRequestExternalModelsAvailableToInclude) !== null && _f !== void 0 ? _f : args.onRequestExternalModelsAvailableToInclude,
        externalModelsByNamespace: (_g = props === null || props === void 0 ? void 0 : props.externalModelsByNamespace) !== null && _g !== void 0 ? _g : args.externalModelsByNamespace,
        externalContextName: (_h = props === null || props === void 0 ? void 0 : props.externalContextName) !== null && _h !== void 0 ? _h : args.externalContextName,
        externalContextDescription: (_j = props === null || props === void 0 ? void 0 : props.externalContextDescription) !== null && _j !== void 0 ? _j : args.externalContextDescription,
        validationMessages: (_k = props === null || props === void 0 ? void 0 : props.validationMessages) !== null && _k !== void 0 ? _k : args.validationMessages,
        evaluationResultsByNodeId: (_l = props === null || props === void 0 ? void 0 : props.evaluationResultsByNodeId) !== null && _l !== void 0 ? _l : args.evaluationResultsByNodeId,
        issueTrackerHref: (_m = props === null || props === void 0 ? void 0 : props.issueTrackerHref) !== null && _m !== void 0 ? _m : args.issueTrackerHref,
        onRequestToJumpToPath: (_o = props === null || props === void 0 ? void 0 : props.onRequestToJumpToPath) !== null && _o !== void 0 ? _o : args.onRequestToJumpToPath,
        onModelDebounceStateChanged: onModelDebounceStateChanged
      })
    })]
  });
}
try {
    // @ts-ignore
    DmnEditorWrapper.displayName = "DmnEditorWrapper";
    // @ts-ignore
    DmnEditorWrapper.__docgenInfo = { "description": "", "displayName": "DmnEditorWrapper", "props": { "model": { "defaultValue": null, "description": "The DMN itself.", "name": "model", "required": false, "type": { "name": "DmnLatestModel" } }, "originalVersion": { "defaultValue": null, "description": "The original version of `model` before upgrading to `latest`.", "name": "originalVersion", "required": false, "type": { "name": "enum", "value": [{ "value": "\"1.0\"" }, { "value": "\"1.1\"" }, { "value": "\"1.2\"" }, { "value": "\"1.3\"" }, { "value": "\"1.4\"" }, { "value": "\"1.5\"" }] } }, "onModelChange": { "defaultValue": null, "description": "Called when a change occurs on `model`, so the controlled flow of the component can be done.", "name": "onModelChange", "required": false, "type": { "name": "OnDmnModelChange" } }, "onRequestExternalModelByPath": { "defaultValue": null, "description": "Called when the contents of a specific available model is necessary. Used by the \"Included models\" tab.", "name": "onRequestExternalModelByPath", "required": false, "type": { "name": "OnRequestExternalModelByPath" } }, "onRequestExternalModelsAvailableToInclude": { "defaultValue": null, "description": "Called when the list of paths of available models to be included is needed. Used by the \"Included models\" tab.", "name": "onRequestExternalModelsAvailableToInclude", "required": false, "type": { "name": "OnRequestExternalModelsAvailableToInclude" } }, "externalModelsByNamespace": { "defaultValue": null, "description": "When the DMN represented by `model` (\"This DMN\") contains `import`ed models, this prop needs to map their contents by namespace.\nThe DMN model won't be correctly rendered if an included model is not found on this object.", "name": "externalModelsByNamespace", "required": false, "type": { "name": "ExternalModelsIndex" } }, "evaluationResultsByNodeId": { "defaultValue": null, "description": "To show information about evaluation results directly on the DMN diagram and/or Boxed Expression Editor, use this prop.", "name": "evaluationResultsByNodeId", "required": false, "type": { "name": "EvaluationResultsByNodeId" } }, "validationMessages": { "defaultValue": null, "description": "To show information about validation messages directly on the DMN diagram and/or Boxed Expression Editor, use this prop.", "name": "validationMessages", "required": false, "type": { "name": "ValidationMessages" } }, "externalContextName": { "defaultValue": null, "description": "The name of context in which this instance of DMN Editor is running. For example, if this DMN Editor instance\nis displaying a model from a project called \"My project\", you could use `externalContextName={\"My project\"}`", "name": "externalContextName", "required": false, "type": { "name": "string" } }, "externalContextDescription": { "defaultValue": null, "description": "Describe the context in which this instance of DMN Editor is running. For example, if this DMN Editor instance\nis displaying a model from a project called \"My project\", you could use\n`externalContextDescription={'All models (DMN and PMML) of \"My project\" are available.'}`", "name": "externalContextDescription", "required": false, "type": { "name": "string" } }, "issueTrackerHref": { "defaultValue": null, "description": "A link that will take users to an issue tracker so they can report problems they find on the DMN Editor.\nThis is shown on the ErrorBoundary fallback component, when an uncaught error happens.", "name": "issueTrackerHref", "required": false, "type": { "name": "string" } }, "isEvaluationHighlightsSupported": { "defaultValue": null, "description": "A flag to enable 'Evaluation Highlights' on supported channels (only ONLINE for now)", "name": "isEvaluationHighlightsSupported", "required": false, "type": { "name": "boolean" } }, "isReadOnly": { "defaultValue": null, "description": "A flag to enable read-only mode on the DMN Editor.\n\nWhen enabled navigation is still possible (E.g., Entering the Boxed Expression Editor, Data Types and Included Models),\nbut no changes can be made and the model itself is unaltered.\n\nDefault: `false`.", "name": "isReadOnly", "required": false, "type": { "name": "boolean" } }, "isImportDataTypesFromJavaClassesSupported": { "defaultValue": null, "description": "Boolean flag to check whether the \"Import DataTypes From JavaClasses\" feature is available.", "name": "isImportDataTypesFromJavaClassesSupported", "required": false, "type": { "name": "boolean" } }, "javaCodeCompletionService": { "defaultValue": null, "description": "This object defines all the API methods which ImportJavaClasses component can use to dialog with the Code Completion Extension", "name": "javaCodeCompletionService", "required": false, "type": { "name": "JavaCodeCompletionService" } }, "onRequestToJumpToPath": { "defaultValue": null, "description": "When users want to jump to another file, this method is called, allowing the controller of this component decide what to do.\nLinks are only rendered if this is provided. Otherwise, paths will be rendered as text.", "name": "onRequestToJumpToPath", "required": false, "type": { "name": "OnRequestToJumpToPath" } }, "onRequestToResolvePath": { "defaultValue": null, "description": "All paths inside the DMN Editor are relative. To be able to resolve them and display them as absolute paths, this function is called.\nIf undefined, the relative paths will be displayed.", "name": "onRequestToResolvePath", "required": false, "type": { "name": "OnRequestToResolvePath" } }, "onModelDebounceStateChanged": { "defaultValue": null, "description": "Notifies the caller when the DMN Editor performs a new edit after the debounce time.", "name": "onModelDebounceStateChanged", "required": false, "type": { "name": "((changed: boolean) => void)" } }, "onOpenedBoxedExpressionEditorNodeChange": { "defaultValue": null, "description": "Notifies the caller when the Boxed Expression Editor is open for a different node.", "name": "onOpenedBoxedExpressionEditorNodeChange", "required": false, "type": { "name": "((newOpenedNodeId: string) => void)" } }, "showDefaultDrdOnly": { "defaultValue": null, "description": "Hides tabs and the DRD selector. Overlays and Diagram navigation controls are still enabled.\n\nDefault: `false`.", "name": "showDefaultDrdOnly", "required": false, "type": { "name": "boolean" } }, "xml": { "defaultValue": null, "description": "", "name": "xml", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["stories/dmnEditorStoriesWrapper.tsx#DmnEditorWrapper"] = { docgenInfo: DmnEditorWrapper.__docgenInfo, name: "DmnEditorWrapper", path: "stories/dmnEditorStoriesWrapper.tsx#DmnEditorWrapper" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "../../node_modules/.pnpm/deep-object-diff@1.1.9/node_modules/deep-object-diff/mjs/diff.js":
/*!*************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/deep-object-diff@1.1.9/node_modules/deep-object-diff/mjs/diff.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "../../node_modules/.pnpm/deep-object-diff@1.1.9/node_modules/deep-object-diff/mjs/utils.js");


const diff = (lhs, rhs) => {
  if (lhs === rhs) return {}; // equal return no diff

  if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isObject)(lhs) || !(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isObject)(rhs)) return rhs; // return updated rhs

  const deletedValues = Object.keys(lhs).reduce((acc, key) => {
    if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.hasOwnProperty)(rhs, key)) {
      acc[key] = undefined;
      
    }

    return acc;
  }, (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.makeObjectWithoutPrototype)());

  if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isDate)(lhs) || (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isDate)(rhs)) {
    if (lhs.valueOf() == rhs.valueOf()) return {};
    return rhs;
  }

  return Object.keys(rhs).reduce((acc, key) => {
    if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.hasOwnProperty)(lhs, key)){
      acc[key] = rhs[key]; // return added r key
      return acc;
    } 

    const difference = diff(lhs[key], rhs[key]);

    // If the difference is empty, and the lhs is an empty object or the rhs is not an empty object
    if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isEmptyObject)(difference) && !(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isDate)(difference) && ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isEmptyObject)(lhs[key]) || !(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isEmptyObject)(rhs[key])))
      return acc; // return no diff

    acc[key] = difference // return updated key
    return acc; // return updated key
  }, deletedValues);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (diff);


/***/ }),

/***/ "../../node_modules/.pnpm/deep-object-diff@1.1.9/node_modules/deep-object-diff/mjs/utils.js":
/*!**************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/deep-object-diff@1.1.9/node_modules/deep-object-diff/mjs/utils.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hasOwnProperty: () => (/* binding */ hasOwnProperty),
/* harmony export */   isDate: () => (/* binding */ isDate),
/* harmony export */   isEmptyObject: () => (/* binding */ isEmptyObject),
/* harmony export */   isObject: () => (/* binding */ isObject),
/* harmony export */   makeObjectWithoutPrototype: () => (/* binding */ makeObjectWithoutPrototype)
/* harmony export */ });
/* unused harmony export isEmpty */
const isDate = d => d instanceof Date;
const isEmpty = o => Object.keys(o).length === 0;
const isObject = o => o != null && typeof o === 'object';
const hasOwnProperty = (o, ...args) => Object.prototype.hasOwnProperty.call(o, ...args)
const isEmptyObject = (o) => isObject(o) && isEmpty(o);
const makeObjectWithoutPrototype = () => Object.create(null);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Rvcmllc191c2VDYXNlc19sb2FuUHJlUXVhbGlmaWNhdGlvbl9Mb2FuUHJlUXVhbGlmaWNhdGlvbl9zdG9yaWVzX3RzeC5lZWFlYTVjZC5pZnJhbWUuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0IwRDtBQUNpQztBQUNiO0FBQ1E7QUFDSTtBQUN2QjtBQUM1RCxNQUFNTyxrQkFBa0IsR0FBR0EsQ0FBQSxLQUFNOztXQUU3QkwsMEZBQU8sQ0FBQ00sR0FBRyxDQUFDLEVBQUUsQ0FBQzt3QkFDRkosZ0dBQVUsQ0FBQ0ssa0JBQWtCLENBQUNDLE9BQU87MENBQ25CUCw0RkFBWSxFQUFFO1FBQ2hEQSw0RkFBWSxFQUFFO2FBQ1RBLDRGQUFZLEVBQUU7ZUFDWjtBQUNmLE1BQU1RLElBQUksR0FBeUI7RUFDakNDLEtBQUssRUFBRSxZQUFZO0VBQ25CQyxTQUFTLEVBQUVQLHFEQUFTO0VBQ3BCUSxjQUFjLEVBQUU7Q0FDakI7QUFDRCxpRUFBZUgsSUFBSSxFQUFDO0FBRXBCLE1BQU1JLFVBQVUsR0FBR2Ysd0VBQWEsQ0FBQ08sa0JBQWtCLEVBQUUsRUFBRTtFQUNyRFMsU0FBUyxFQUFFO0NBQ1osQ0FBQztBQUNGLE1BQU1DLEtBQUssR0FBR0YsVUFBVSxDQUFDRyxNQUFNLENBQUNDLEtBQUssRUFBRTtBQUNoQyxNQUFNQyxLQUFLLEdBQVU7RUFDMUJDLE1BQU0sRUFBRUMsSUFBSSxJQUFJakIsMEVBQWdCLEVBQUU7RUFDbENpQixJQUFJLEVBQUU7SUFDSkwsS0FBSyxFQUFFQSxLQUFLO0lBQ1pNLGVBQWUsRUFBRSxLQUFLO0lBQ3RCQyx5QkFBeUIsRUFBRSxJQUFJQyxHQUFHLEVBQUU7SUFDcENDLDBCQUEwQixFQUFFLGtDQUFrQztJQUM5REMsbUJBQW1CLEVBQUUsdUNBQXVDO0lBQzVEQyx5QkFBeUIsRUFBRSxFQUFFO0lBQzdCQyxnQkFBZ0IsRUFBRSxFQUFFO0lBQ3BCQyxrQkFBa0IsRUFBRSxFQUFFO0lBQ3RCQyxVQUFV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QUFFUDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xJeUc7O0FBRXpHO0FBQ0EsOEJBQThCOztBQUU5QixPQUFPLG1EQUFRLFVBQVUsbURBQVEsbUJBQW1COztBQUVwRDtBQUNBLFNBQVMseURBQWM7QUFDdkI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRyxFQUFFLHFFQUEwQjs7QUFFL0IsTUFBTSxpREFBTSxTQUFTLGlEQUFNO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVMseURBQWM7QUFDdkIsMkJBQTJCO0FBQzNCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxRQUFRLHdEQUFhLGlCQUFpQixpREFBTSxpQkFBaUIsd0RBQWEsZUFBZSx3REFBYTtBQUN0RyxrQkFBa0I7O0FBRWxCO0FBQ0EsZ0JBQWdCO0FBQ2hCLEdBQUc7QUFDSDs7QUFFQSxpRUFBZSxJQUFJLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGtpZS10b29scy9kbW4tZWRpdG9yLy4vc3Rvcmllcy9taXNjL2VtcHR5L0VtcHR5LnN0b3JpZXMudHN4Iiwid2VicGFjazovL0BraWUtdG9vbHMvZG1uLWVkaXRvci8uL3N0b3JpZXMvdXNlQ2FzZXMvbG9hblByZVF1YWxpZmljYXRpb24vTG9hblByZVF1YWxpZmljYXRpb24uc3Rvcmllcy50c3giLCJ3ZWJwYWNrOi8vQGtpZS10b29scy9kbW4tZWRpdG9yLy4vc3Rvcmllcy9kbW5FZGl0b3JTdG9yaWVzV3JhcHBlci50c3giLCJ3ZWJwYWNrOi8vQGtpZS10b29scy9kbW4tZWRpdG9yLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9kZWVwLW9iamVjdC1kaWZmQDEuMS45L25vZGVfbW9kdWxlcy9kZWVwLW9iamVjdC1kaWZmL21qcy9kaWZmLmpzIiwid2VicGFjazovL0BraWUtdG9vbHMvZG1uLWVkaXRvci8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZGVlcC1vYmplY3QtZGlmZkAxLjEuOS9ub2RlX21vZHVsZXMvZGVlcC1vYmplY3QtZGlmZi9tanMvdXRpbHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIExpY2Vuc2VkIHRvIHRoZSBBcGFjaGUgU29mdHdhcmUgRm91bmRhdGlvbiAoQVNGKSB1bmRlciBvbmVcbiAqIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiAgU2VlIHRoZSBOT1RJQ0UgZmlsZVxuICogZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb25cbiAqIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLiAgVGhlIEFTRiBsaWNlbnNlcyB0aGlzIGZpbGVcbiAqIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGVcbiAqIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuICogd2l0aCB0aGUgTGljZW5zZS4gIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsXG4gKiBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxuICogXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcbiAqIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZVxuICogc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9uc1xuICogdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHR5cGUgeyBNZXRhLCBTdG9yeU9iaiB9IGZyb20gXCJAc3Rvcnlib29rL3JlYWN0XCI7XG5pbXBvcnQgeyBnZXRNYXJzaGFsbGVyIH0gZnJvbSBcIkBraWUtdG9vbHMvZG1uLW1hcnNoYWxsZXJcIjtcbmltcG9ydCB7IG5zIGFzIGRtbjE1bnMgfSBmcm9tIFwiQGtpZS10b29scy9kbW4tbWFyc2hhbGxlci9kaXN0L3NjaGVtYXMvZG1uLTFfNS90cy1nZW4vbWV0YVwiO1xuaW1wb3J0IHsgZ2VuZXJhdGVVdWlkIH0gZnJvbSBcIkBraWUtdG9vbHMvYm94ZWQtZXhwcmVzc2lvbi1jb21wb25lbnQvZGlzdC9hcGlcIjtcbmltcG9ydCB7IERNTjE1X1NQRUMgfSBmcm9tIFwiQGtpZS10b29scy9kbW4tbWFyc2hhbGxlci9kaXN0L3NjaGVtYXMvZG1uLTFfNS9EbW4xNVNwZWNcIjtcbmltcG9ydCB7IERtbkVkaXRvcldyYXBwZXIsIFN0b3J5Ym9va0RtbkVkaXRvclByb3BzIH0gZnJvbSBcIi4uLy4uL2RtbkVkaXRvclN0b3JpZXNXcmFwcGVyXCI7XG5pbXBvcnQgeyBEbW5FZGl0b3IsIERtbkVkaXRvclByb3BzIH0gZnJvbSBcIi4uLy4uLy4uL3NyYy9EbW5FZGl0b3JcIjtcbmV4cG9ydCBjb25zdCBnZW5lcmF0ZUVtcHR5RG1uMTUgPSAoKSA9PiBgPD94bWwgdmVyc2lvbj1cIjEuMFwiIGVuY29kaW5nPVwiVVRGLThcIj8+XG48ZGVmaW5pdGlvbnNcbiAgeG1sbnM9XCIke2RtbjE1bnMuZ2V0KFwiXCIpfVwiXG4gIGV4cHJlc3Npb25MYW5ndWFnZT1cIiR7RE1OMTVfU1BFQy5leHByZXNzaW9uTGFuZ3VhZ2UuZGVmYXVsdH1cIlxuICBuYW1lc3BhY2U9XCJodHRwczovL2tpZS5hcGFjaGUub3JnL2Rtbi8ke2dlbmVyYXRlVXVpZCgpfVwiXG4gIGlkPVwiJHtnZW5lcmF0ZVV1aWQoKX1cIlxuICBuYW1lPVwiRE1OJHtnZW5lcmF0ZVV1aWQoKX1cIj5cbjwvZGVmaW5pdGlvbnM+YDtcbmNvbnN0IG1ldGE6IE1ldGE8RG1uRWRpdG9yUHJvcHM+ID0ge1xuICB0aXRsZTogXCJNaXNjL0VtcHR5XCIsXG4gIGNvbXBvbmVudDogRG1uRWRpdG9yLFxuICBpbmNsdWRlU3RvcmllczogL15bQS1aXS9cbn07XG5leHBvcnQgZGVmYXVsdCBtZXRhO1xudHlwZSBTdG9yeSA9IFN0b3J5T2JqPFN0b3J5Ym9va0RtbkVkaXRvclByb3BzPjtcbmNvbnN0IG1hcnNoYWxsZXIgPSBnZXRNYXJzaGFsbGVyKGdlbmVyYXRlRW1wdHlEbW4xNSgpLCB7XG4gIHVwZ3JhZGVUbzogXCJsYXRlc3RcIlxufSk7XG5jb25zdCBtb2RlbCA9IG1hcnNoYWxsZXIucGFyc2VyLnBhcnNlKCk7XG5leHBvcnQgY29uc3QgRW1wdHk6IFN0b3J5ID0ge1xuICByZW5kZXI6IGFyZ3MgPT4gRG1uRWRpdG9yV3JhcHBlcigpLFxuICBhcmdzOiB7XG4gICAgbW9kZWw6IG1vZGVsLFxuICAgIG9yaWdpbmFsVmVyc2lvbjogXCIxLjVcIixcbiAgICBldmFsdWF0aW9uUmVzdWx0c0J5Tm9kZUlkOiBuZXcgTWFwKCksXG4gICAgZXh0ZXJuYWxDb250ZXh0RGVzY3JpcHRpb246IFwiVGhlIFN0b3J5Ym9vayBmb3IgdGhlIERNTiBFZGl0b3JcIixcbiAgICBleHRlcm5hbENvbnRleHROYW1lOiBcIkFwYWNoZSBLSUUgOjogRE1OIEVkaXRvciA6OiBTdG9yeWJvb2tcIixcbiAgICBleHRlcm5hbE1vZGVsc0J5TmFtZXNwYWNlOiB7fSxcbiAgICBpc3N1ZVRyYWNrZXJIcmVmOiBcIlwiLFxuICAgIHZhbGlkYXRpb25NZXNzYWdlczoge30sXG4gICAgaXNSZWFkT25seTogZmFsc2UsXG4gICAgeG1sOiBtYXJzaGFsbGVyLmJ1aWxkZXIuYnVpbGQobW9kZWwpXG4gIH1cbn07XG5FbXB0eS5wYXJhbWV0ZXJzID0ge1xuICAuLi5FbXB0eS5wYXJhbWV0ZXJzLFxuICBkb2NzOiB7XG4gICAgLi4uRW1wdHkucGFyYW1ldGVycz8uZG9jcyxcbiAgICBzb3VyY2U6IHtcbiAgICAgIG9yaWdpbmFsU291cmNlOiBcIntcXG4gIHJlbmRlcjogYXJncyA9PiBEbW5FZGl0b3JXcmFwcGVyKCksXFxuICBhcmdzOiB7XFxuICAgIG1vZGVsOiBtb2RlbCxcXG4gICAgb3JpZ2luYWxWZXJzaW9uOiBcXFwiMS41XFxcIixcXG4gICAgZXZhbHVhdGlvblJlc3VsdHNCeU5vZGVJZDogbmV3IE1hcCgpLFxcbiAgICBleHRlcm5hbENvbnRleHREZXNjcmlwdGlvbjogXFxcIlRoZSBTdG9yeWJvb2sgZm9yIHRoZSBETU4gRWRpdG9yXFxcIixcXG4gICAgZXh0ZXJuYWxDb250ZXh0TmFtZTogXFxcIkFwYWNoZSBLSUUgOjogRE1OIEVkaXRvciA6OiBTdG9yeWJvb2tcXFwiLFxcbiAgICBleHRlcm5hbE1vZGVsc0J5TmFtZXNwYWNlOiB7fSxcXG4gICAgaXNzdWVUcmFja2VySHJlZjogXFxcIlxcXCIsXFxuICAgIHZhbGlkYXRpb25NZXNzYWdlczoge30sXFxuICAgIGlzUmVhZE9ubHk6IGZhbHNlLFxcbiAgICB4bWw6IG1hcnNoYWxsZXIuYnVpbGRlci5idWlsZChtb2RlbClcXG4gIH1cXG59XCIsXG4gICAgICAuLi5FbXB0eS5wYXJhbWV0ZXJzPy5kb2NzPy5zb3VyY2VcbiAgICB9XG4gIH1cbn07IiwiLypcbiAqIExpY2Vuc2VkIHRvIHRoZSBBcGFjaGUgU29mdHdhcmUgRm91bmRhdGlvbiAoQVNGKSB1bmRlciBvbmVcbiAqIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiAgU2VlIHRoZSBOT1RJQ0UgZmlsZVxuICogZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb25cbiAqIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLiAgVGhlIEFTRiBsaWNlbnNlcyB0aGlzIGZpbGVcbiAqIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGVcbiAqIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuICogd2l0aCB0aGUgTGljZW5zZS4gIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsXG4gKiBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxuICogXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcbiAqIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZVxuICogc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9uc1xuICogdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdHlwZSB7IE1ldGEsIFN0b3J5T2JqIH0gZnJvbSBcIkBzdG9yeWJvb2svcmVhY3RcIjtcbmltcG9ydCB7IEVtcHR5IH0gZnJvbSBcIi4uLy4uL21pc2MvZW1wdHkvRW1wdHkuc3Rvcmllc1wiO1xuaW1wb3J0IHsgRG1uRWRpdG9yLCBEbW5FZGl0b3JQcm9wcyB9IGZyb20gXCIuLi8uLi8uLi9zcmMvRG1uRWRpdG9yXCI7XG5pbXBvcnQgeyBTdG9yeWJvb2tEbW5FZGl0b3JQcm9wcyB9IGZyb20gXCIuLi8uLi9kbW5FZGl0b3JTdG9yaWVzV3JhcHBlclwiO1xuaW1wb3J0IHsgVVNFX0NBU0VfTU9ERUxTIH0gZnJvbSBcIi4uL21vZGVscy9tb2RlbHNcIjtcbmNvbnN0IG1ldGE6IE1ldGE8RG1uRWRpdG9yUHJvcHM+ID0ge1xuICB0aXRsZTogXCJVc2UgY2FzZXMvTG9hbiBQcmUtUXVhbGlmaWNhdGlvblwiLFxuICBjb21wb25lbnQ6IERtbkVkaXRvcixcbiAgaW5jbHVkZVN0b3JpZXM6IC9eW0EtWl0vXG59O1xuZXhwb3J0IGRlZmF1bHQgbWV0YTtcbnR5cGUgU3RvcnkgPSBTdG9yeU9iajxTdG9yeWJvb2tEbW5FZGl0b3JQcm9wcz47XG5leHBvcnQgY29uc3QgTG9hblByZVF1YWxpZmljYXRpb246IFN0b3J5ID0ge1xuICByZW5kZXI6IEVtcHR5LnJlbmRlcixcbiAgYXJnczoge1xuICAgIG1vZGVsOiBVU0VfQ0FTRV9NT0RFTFMubG9hblByZVF1YWxpZmljYXRpb24ubW9kZWxcbiAgfVxufTtcbkxvYW5QcmVRdWFsaWZpY2F0aW9uLnBhcmFtZXRlcnMgPSB7XG4gIC4uLkxvYW5QcmVRdWFsaWZpY2F0aW9uLnBhcmFtZXRlcnMsXG4gIGRvY3M6IHtcbiAgICAuLi5Mb2FuUHJlUXVhbGlmaWNhdGlvbi5wYXJhbWV0ZXJzPy5kb2NzLFxuICAgIHNvdXJjZToge1xuICAgICAgb3JpZ2luYWxTb3VyY2U6IFwie1xcbiAgcmVuZGVyOiBFbXB0eS5yZW5kZXIsXFxuICBhcmdzOiB7XFxuICAgIG1vZGVsOiBVU0VfQ0FTRV9NT0RFTFMubG9hblByZVF1YWxpZmljYXRpb24ubW9kZWxcXG4gIH1cXG59XCIsXG4gICAgICAuLi5Mb2FuUHJlUXVhbGlmaWNhdGlvbi5wYXJhbWV0ZXJzPy5kb2NzPy5zb3VyY2VcbiAgICB9XG4gIH1cbn07IiwiLypcbiAqIExpY2Vuc2VkIHRvIHRoZSBBcGFjaGUgU29mdHdhcmUgRm91bmRhdGlvbiAoQVNGKSB1bmRlciBvbmVcbiAqIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiAgU2VlIHRoZSBOT1RJQ0UgZmlsZVxuICogZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb25cbiAqIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLiAgVGhlIEFTRiBsaWNlbnNlcyB0aGlzIGZpbGVcbiAqIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGVcbiAqIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuICogd2l0aCB0aGUgTGljZW5zZS4gIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsXG4gKiBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxuICogXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcbiAqIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZVxuICogc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9uc1xuICogdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUsIHVzZVJlZiwgdXNlTWVtbywgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VBcmdzIH0gZnJvbSBcIkBzdG9yeWJvb2svcHJldmlldy1hcGlcIjtcbmltcG9ydCB7XG4gIERtbkVkaXRvcixcbiAgRG1uRWRpdG9yUHJvcHMsXG4gIERtbkVkaXRvclJlZixcbiAgRXZhbHVhdGlvblJlc3VsdHNCeU5vZGVJZCxcbiAgVmFsaWRhdGlvbk1lc3NhZ2VzLFxufSBmcm9tIFwiLi4vc3JjL0RtbkVkaXRvclwiO1xuaW1wb3J0IHsgRG1uTGF0ZXN0TW9kZWwsIGdldE1hcnNoYWxsZXIgfSBmcm9tIFwiQGtpZS10b29scy9kbW4tbWFyc2hhbGxlclwiO1xuaW1wb3J0IHsgbm9ybWFsaXplIH0gZnJvbSBcIkBraWUtdG9vbHMvZG1uLW1hcnNoYWxsZXIvZGlzdC9ub3JtYWxpemF0aW9uL25vcm1hbGl6ZVwiO1xuaW1wb3J0IHsgZGlmZiB9IGZyb20gXCJkZWVwLW9iamVjdC1kaWZmXCI7XG5pbXBvcnQgeyBnZW5lcmF0ZUVtcHR5RG1uMTUgfSBmcm9tIFwiLi9taXNjL2VtcHR5L0VtcHR5LnN0b3JpZXNcIjtcblxuZXhwb3J0IGNvbnN0IGV2YWx1YXRpb25SZXN1bHRzQnlOb2RlSWQ6IEV2YWx1YXRpb25SZXN1bHRzQnlOb2RlSWQgPSBuZXcgTWFwKCk7XG5leHBvcnQgY29uc3QgdmFsaWRhdGlvbk1lc3NhZ2VzOiBWYWxpZGF0aW9uTWVzc2FnZXMgPSB7fTtcblxuZXhwb3J0IHR5cGUgU3Rvcnlib29rRG1uRWRpdG9yUHJvcHMgPSBEbW5FZGl0b3JQcm9wcyAmIHsgeG1sOiBzdHJpbmcgfTtcblxuZXhwb3J0IGZ1bmN0aW9uIERtbkVkaXRvcldyYXBwZXIocHJvcHM/OiBQYXJ0aWFsPFN0b3J5Ym9va0RtbkVkaXRvclByb3BzPikge1xuICBjb25zdCBbYXJncywgdXBkYXRlQXJnc10gPSB1c2VBcmdzPFN0b3J5Ym9va0RtbkVkaXRvclByb3BzPigpO1xuICBjb25zdCBhcmdzQ29weSA9IHVzZVJlZihhcmdzKTtcbiAgY29uc3QgcmVmID0gdXNlUmVmPERtbkVkaXRvclJlZj4obnVsbCk7XG4gIGNvbnN0IFttb2RlbEFyZ3MsIHNldE1vZGVsQXJnc10gPSB1c2VTdGF0ZTxEbW5MYXRlc3RNb2RlbD4oYXJncy5tb2RlbCk7XG4gIGNvbnN0IG1vZGVsID0gdXNlTWVtbygoKSA9PiBwcm9wcz8ubW9kZWwgPz8gbW9kZWxBcmdzLCBbbW9kZWxBcmdzLCBwcm9wcz8ubW9kZWxdKTtcbiAgY29uc3QgW21vZGVsQ2hhbmdlZCwgc2V0TW9kZWxDaGFuZ2VdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICBjb25zdCBbaXNSZWFkT25seSwgc2V0SXNSZWFkT25seV0gPSB1c2VTdGF0ZShwcm9wcz8uaXNSZWFkT25seSA/PyBhcmdzLmlzUmVhZE9ubHkgPz8gZmFsc2UpO1xuXG4gIGNvbnN0IG9uTW9kZWxDaGFuZ2UgPSB1c2VNZW1vKFxuICAgICgpID0+IChwcm9wcz8ub25Nb2RlbENoYW5nZSA/IHByb3BzLm9uTW9kZWxDaGFuZ2UgOiBzZXRNb2RlbEFyZ3MpLFxuICAgIFtwcm9wcz8ub25Nb2RlbENoYW5nZV1cbiAgKTtcblxuICBjb25zdCBvbk9wZW5lZEJveGVkRXhwcmVzc2lvbkVkaXRvck5vZGVDaGFuZ2VOb09wZXJhdGlvbiA9IHVzZU1lbW8oXG4gICAgKCkgPT4gKG5ld09wZW5lZE5vZGVJZDogc3RyaW5nIHwgdW5kZWZpbmVkKSA9PiB7fSxcbiAgICBbXVxuICApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGFyZ3MuaXNSZWFkT25seSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBzZXRJc1JlYWRPbmx5KGFyZ3MuaXNSZWFkT25seSk7XG4gICAgfVxuICB9LCBbYXJncy5pc1JlYWRPbmx5XSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoT2JqZWN0LmtleXMoZGlmZihhcmdzQ29weS5jdXJyZW50Lm1vZGVsLCBtb2RlbCkpLmxlbmd0aCAhPT0gMCkge1xuICAgICAgdXBkYXRlQXJncyh7XG4gICAgICAgIC4uLmFyZ3NDb3B5LmN1cnJlbnQsXG4gICAgICAgIG1vZGVsOiBtb2RlbCxcbiAgICAgICAgeG1sOiBnZXRNYXJzaGFsbGVyKGdlbmVyYXRlRW1wdHlEbW4xNSgpLCB7IHVwZ3JhZGVUbzogXCJsYXRlc3RcIiB9KS5idWlsZGVyLmJ1aWxkKG1vZGVsKSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgW3VwZGF0ZUFyZ3MsIG1vZGVsXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoT2JqZWN0LmtleXMoZGlmZihhcmdzQ29weS5jdXJyZW50LCBhcmdzKSkubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGFyZ3NDb3B5LmN1cnJlbnQgPSBhcmdzO1xuICAgIGlmIChPYmplY3Qua2V5cyhkaWZmKGFyZ3MubW9kZWwsIG1vZGVsKSkubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIG9uTW9kZWxDaGFuZ2Uobm9ybWFsaXplKGFyZ3MubW9kZWwpKTtcbiAgfSwgW2FyZ3MsIG1vZGVsLCBvbk1vZGVsQ2hhbmdlXSk7XG5cbiAgY29uc3Qgb25Nb2RlbERlYm91bmNlU3RhdGVDaGFuZ2VkID0gdXNlQ2FsbGJhY2soKGNoYW5nZWQ6IGJvb2xlYW4pID0+IHtcbiAgICBzZXRNb2RlbENoYW5nZShjaGFuZ2VkKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHttb2RlbENoYW5nZWQgJiYgKFxuICAgICAgICA8ZGl2IGRhdGEtdGVzdGlkPXtcInN0b3J5Ym9vay0tZG1uLWVkaXRvci1tb2RlbFwifSBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fT5cbiAgICAgICAgICB7SlNPTi5zdHJpbmdpZnkobW9kZWwpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgICA8YnV0dG9uXG4gICAgICAgIGRhdGEtdGVzdGlkPXtcInN0b3J5Ym9vay0tZG1uLWVkaXRvci10b2dnbGUtcmVhZC1vbmx5XCJ9XG4gICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwibm9uZVwiIH19XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzUmVhZE9ubHkoKGN1cnJlbnRWYWx1ZSkgPT4gIWN1cnJlbnRWYWx1ZSl9XG4gICAgICA+XG4gICAgICAgIHtpc1JlYWRPbmx5LnRvU3RyaW5nKCl9XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246IFwiYWJzb2x1dGVcIiwgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiLCB0b3A6IFwiMHB4XCIsIGxlZnQ6IFwiMHB4XCIgfX0+XG4gICAgICAgIDxEbW5FZGl0b3JcbiAgICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgICBtb2RlbD17bW9kZWx9XG4gICAgICAgICAgb3JpZ2luYWxWZXJzaW9uPXtwcm9wcz8ub3JpZ2luYWxWZXJzaW9uID8/IGFyZ3Mub3JpZ2luYWxWZXJzaW9ufVxuICAgICAgICAgIGlzRXZhbHVhdGlvbkhpZ2hsaWdodHNTdXBwb3J0ZWQ9e1xuICAgICAgICAgICAgcHJvcHM/LmlzRXZhbHVhdGlvbkhpZ2hsaWdodHNTdXBwb3J0ZWQgPz8gYXJncy5pc0V2YWx1YXRpb25IaWdobGlnaHRzU3VwcG9ydGVkXG4gICAgICAgICAgfVxuICAgICAgICAgIGlzUmVhZE9ubHk9e2lzUmVhZE9ubHl9XG4gICAgICAgICAgb25Nb2RlbENoYW5nZT17b25Nb2RlbENoYW5nZX1cbiAgICAgICAgICBvbk9wZW5lZEJveGVkRXhwcmVzc2lvbkVkaXRvck5vZGVDaGFuZ2U9e29uT3BlbmVkQm94ZWRFeHByZXNzaW9uRWRpdG9yTm9kZUNoYW5nZU5vT3BlcmF0aW9ufVxuICAgICAgICAgIG9uUmVxdWVzdEV4dGVybmFsTW9kZWxCeVBhdGg9e3Byb3BzPy5vblJlcXVlc3RFeHRlcm5hbE1vZGVsQnlQYXRoID8/IGFyZ3Mub25SZXF1ZXN0RXh0ZXJuYWxNb2RlbEJ5UGF0aH1cbiAgICAgICAgICBvblJlcXVlc3RFeHRlcm5hbE1vZGVsc0F2YWlsYWJsZVRvSW5jbHVkZT17XG4gICAgICAgICAgICBwcm9wcz8ub25SZXF1ZXN0RXh0ZXJuYWxNb2RlbHNBdmFpbGFibGVUb0luY2x1ZGUgPz8gYXJncy5vblJlcXVlc3RFeHRlcm5hbE1vZGVsc0F2YWlsYWJsZVRvSW5jbHVkZVxuICAgICAgICAgIH1cbiAgICAgICAgICBleHRlcm5hbE1vZGVsc0J5TmFtZXNwYWNlPXtwcm9wcz8uZXh0ZXJuYWxNb2RlbHNCeU5hbWVzcGFjZSA/PyBhcmdzLmV4dGVybmFsTW9kZWxzQnlOYW1lc3BhY2V9XG4gICAgICAgICAgZXh0ZXJuYWxDb250ZXh0TmFtZT17cHJvcHM/LmV4dGVybmFsQ29udGV4dE5hbWUgPz8gYXJncy5leHRlcm5hbENvbnRleHROYW1lfVxuICAgICAgICAgIGV4dGVybmFsQ29udGV4dERlc2NyaXB0aW9uPXtwcm9wcz8uZXh0ZXJuYWxDb250ZXh0RGVzY3JpcHRpb24gPz8gYXJncy5leHRlcm5hbENvbnRleHREZXNjcmlwdGlvbn1cbiAgICAgICAgICB2YWxpZGF0aW9uTWVzc2FnZXM9e3Byb3BzPy52YWxpZGF0aW9uTWVzc2FnZXMgPz8gYXJncy52YWxpZGF0aW9uTWVzc2FnZXN9XG4gICAgICAgICAgZXZhbHVhdGlvblJlc3VsdHNCeU5vZGVJZD17cHJvcHM/LmV2YWx1YXRpb25SZXN1bHRzQnlOb2RlSWQgPz8gYXJncy5ldmFsdWF0aW9uUmVzdWx0c0J5Tm9kZUlkfVxuICAgICAgICAgIGlzc3VlVHJhY2tlckhyZWY9e3Byb3BzPy5pc3N1ZVRyYWNrZXJIcmVmID8/IGFyZ3MuaXNzdWVUcmFja2VySHJlZn1cbiAgICAgICAgICBvblJlcXVlc3RUb0p1bXBUb1BhdGg9e3Byb3BzPy5vblJlcXVlc3RUb0p1bXBUb1BhdGggPz8gYXJncy5vblJlcXVlc3RUb0p1bXBUb1BhdGh9XG4gICAgICAgICAgb25Nb2RlbERlYm91bmNlU3RhdGVDaGFuZ2VkPXtvbk1vZGVsRGVib3VuY2VTdGF0ZUNoYW5nZWR9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiIsImltcG9ydCB7IGlzRGF0ZSwgaXNFbXB0eU9iamVjdCwgaXNPYmplY3QsIGhhc093blByb3BlcnR5LCBtYWtlT2JqZWN0V2l0aG91dFByb3RvdHlwZSB9IGZyb20gJy4vdXRpbHMuanMnO1xuXG5jb25zdCBkaWZmID0gKGxocywgcmhzKSA9PiB7XG4gIGlmIChsaHMgPT09IHJocykgcmV0dXJuIHt9OyAvLyBlcXVhbCByZXR1cm4gbm8gZGlmZlxuXG4gIGlmICghaXNPYmplY3QobGhzKSB8fCAhaXNPYmplY3QocmhzKSkgcmV0dXJuIHJoczsgLy8gcmV0dXJuIHVwZGF0ZWQgcmhzXG5cbiAgY29uc3QgZGVsZXRlZFZhbHVlcyA9IE9iamVjdC5rZXlzKGxocykucmVkdWNlKChhY2MsIGtleSkgPT4ge1xuICAgIGlmICghaGFzT3duUHJvcGVydHkocmhzLCBrZXkpKSB7XG4gICAgICBhY2Nba2V5XSA9IHVuZGVmaW5lZDtcbiAgICAgIFxuICAgIH1cblxuICAgIHJldHVybiBhY2M7XG4gIH0sIG1ha2VPYmplY3RXaXRob3V0UHJvdG90eXBlKCkpO1xuXG4gIGlmIChpc0RhdGUobGhzKSB8fCBpc0RhdGUocmhzKSkge1xuICAgIGlmIChsaHMudmFsdWVPZigpID09IHJocy52YWx1ZU9mKCkpIHJldHVybiB7fTtcbiAgICByZXR1cm4gcmhzO1xuICB9XG5cbiAgcmV0dXJuIE9iamVjdC5rZXlzKHJocykucmVkdWNlKChhY2MsIGtleSkgPT4ge1xuICAgIGlmICghaGFzT3duUHJvcGVydHkobGhzLCBrZXkpKXtcbiAgICAgIGFjY1trZXldID0gcmhzW2tleV07IC8vIHJldHVybiBhZGRlZCByIGtleVxuICAgICAgcmV0dXJuIGFjYztcbiAgICB9IFxuXG4gICAgY29uc3QgZGlmZmVyZW5jZSA9IGRpZmYobGhzW2tleV0sIHJoc1trZXldKTtcblxuICAgIC8vIElmIHRoZSBkaWZmZXJlbmNlIGlzIGVtcHR5LCBhbmQgdGhlIGxocyBpcyBhbiBlbXB0eSBvYmplY3Qgb3IgdGhlIHJocyBpcyBub3QgYW4gZW1wdHkgb2JqZWN0XG4gICAgaWYgKGlzRW1wdHlPYmplY3QoZGlmZmVyZW5jZSkgJiYgIWlzRGF0ZShkaWZmZXJlbmNlKSAmJiAoaXNFbXB0eU9iamVjdChsaHNba2V5XSkgfHwgIWlzRW1wdHlPYmplY3QocmhzW2tleV0pKSlcbiAgICAgIHJldHVybiBhY2M7IC8vIHJldHVybiBubyBkaWZmXG5cbiAgICBhY2Nba2V5XSA9IGRpZmZlcmVuY2UgLy8gcmV0dXJuIHVwZGF0ZWQga2V5XG4gICAgcmV0dXJuIGFjYzsgLy8gcmV0dXJuIHVwZGF0ZWQga2V5XG4gIH0sIGRlbGV0ZWRWYWx1ZXMpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZGlmZjtcbiIsImV4cG9ydCBjb25zdCBpc0RhdGUgPSBkID0+IGQgaW5zdGFuY2VvZiBEYXRlO1xuZXhwb3J0IGNvbnN0IGlzRW1wdHkgPSBvID0+IE9iamVjdC5rZXlzKG8pLmxlbmd0aCA9PT0gMDtcbmV4cG9ydCBjb25zdCBpc09iamVjdCA9IG8gPT4gbyAhPSBudWxsICYmIHR5cGVvZiBvID09PSAnb2JqZWN0JztcbmV4cG9ydCBjb25zdCBoYXNPd25Qcm9wZXJ0eSA9IChvLCAuLi5hcmdzKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobywgLi4uYXJncylcbmV4cG9ydCBjb25zdCBpc0VtcHR5T2JqZWN0ID0gKG8pID0+IGlzT2JqZWN0KG8pICYmIGlzRW1wdHkobyk7XG5leHBvcnQgY29uc3QgbWFrZU9iamVjdFdpdGhvdXRQcm90b3R5cGUgPSAoKSA9PiBPYmplY3QuY3JlYXRlKG51bGwpO1xuIl0sIm5hbWVzIjpbImdldE1hcnNoYWxsZXIiLCJucyIsImRtbjE1bnMiLCJnZW5lcmF0ZVV1aWQiLCJETU4xNV9TUEVDIiwiRG1uRWRpdG9yV3JhcHBlciIsIkRtbkVkaXRvciIsImdlbmVyYXRlRW1wdHlEbW4xNSIsImdldCIsImV4cHJlc3Npb25MYW5ndWFnZSIsImRlZmF1bHQiLCJtZXRhIiwidGl0bGUiLCJjb21wb25lbnQiLCJpbmNsdWRlU3RvcmllcyIsIm1hcnNoYWxsZXIiLCJ1cGdyYWRlVG8iLCJtb2RlbCIsInBhcnNlciIsInBhcnNlIiwiRW1wdHkiLCJyZW5kZXIiLCJhcmdzIiwib3JpZ2luYWxWZXJzaW9uIiwiZXZhbHVhdGlvblJlc3VsdHNCeU5vZGVJZCIsIk1hcCIsImV4dGVybmFsQ29udGV4dERlc2NyaXB0aW9uIiwiZXh0ZXJuYWxDb250ZXh0TmFtZSIsImV4dGVybmFsTW9kZWxzQnlOYW1lc3BhY2UiLCJpc3N1ZVRyYWNrZXJIcmVmIiwidmFsaWRhdGlvbk1lc3NhZ2VzIiwiaXNSZWFkT25seSIsInhtbCIsImJ1aWxkZXIiLCJidWlsZCIsInBhcmFtZXRlcnMiLCJkb2NzIiwiX2EiLCJzb3VyY2UiLCJvcmlnaW5hbFNvdXJjZSIsIl9jIiwiX2IiLCJfX25hbWVkRXhwb3J0c09yZGVyIiwiVVNFX0NBU0VfTU9ERUxTIiwiTG9hblByZVF1YWxpZmljYXRpb24iLCJsb2FuUHJlUXVhbGlmaWNhdGlvbiIsInVzZUNhbGxiYWNrIiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJ1c2VNZW1vIiwidXNlRWZmZWN0IiwidXNlQXJncyIsIm5vcm1hbGl6ZSIsImRpZmYiLCJwcm9wcyIsInVwZGF0ZUFyZ3MiLCJhcmdzQ29weSIsInJlZiIsIm1vZGVsQXJncyIsInNldE1vZGVsQXJncyIsIm1vZGVsQ2hhbmdlZCIsInNldE1vZGVsQ2hhbmdlIiwic2V0SXNSZWFkT25seSIsIm9uTW9kZWxDaGFuZ2UiLCJvbk9wZW5lZEJveGVkRXhwcmVzc2lvbkVkaXRvck5vZGVDaGFuZ2VOb09wZXJhdGlvbiIsIm5ld09wZW5lZE5vZGVJZCIsInVuZGVmaW5lZCIsIk9iamVjdCIsImtleXMiLCJjdXJyZW50IiwibGVuZ3RoIiwib25Nb2RlbERlYm91bmNlU3RhdGVDaGFuZ2VkIiwiY2hhbmdlZCIsIl9qc3hzIiwiX0ZyYWdtZW50IiwiY2hpbGRyZW4iLCJfanN4Iiwic3R5bGUiLCJkaXNwbGF5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm9uQ2xpY2siLCJjdXJyZW50VmFsdWUiLCJ0b1N0cmluZyIsInBvc2l0aW9uIiwid2lkdGgiLCJoZWlnaHQiLCJ0b3AiLCJsZWZ0IiwiaXNFdmFsdWF0aW9uSGlnaGxpZ2h0c1N1cHBvcnRlZCIsIl9kIiwib25PcGVuZWRCb3hlZEV4cHJlc3Npb25FZGl0b3JOb2RlQ2hhbmdlIiwib25SZXF1ZXN0RXh0ZXJuYWxNb2RlbEJ5UGF0aCIsIl9lIiwib25SZXF1ZXN0RXh0ZXJuYWxNb2RlbHNBdmFpbGFibGVUb0luY2x1ZGUiLCJfZiIsIl9nIiwiX2giLCJfaiIsIl9rIiwiX2wiLCJfbSIsIm9uUmVxdWVzdFRvSnVtcFRvUGF0aCIsIl9vIl0sInNvdXJjZVJvb3QiOiIifQ==