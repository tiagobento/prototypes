"use strict";
(self["webpackChunk_kie_tools_dmn_editor"] = self["webpackChunk_kie_tools_dmn_editor"] || []).push([["useCases-loanPreQualification-LoanPreQualification-stories"],{

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
  var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
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
        isReadOnly: isReadOnly,
        onModelChange: onModelChange,
        onOpenedBoxedExpressionEditorNodeChange: onOpenedBoxedExpressionEditorNodeChangeNoOperation,
        onRequestExternalModelByPath: (_d = props === null || props === void 0 ? void 0 : props.onRequestExternalModelByPath) !== null && _d !== void 0 ? _d : args.onRequestExternalModelByPath,
        onRequestExternalModelsAvailableToInclude: (_e = props === null || props === void 0 ? void 0 : props.onRequestExternalModelsAvailableToInclude) !== null && _e !== void 0 ? _e : args.onRequestExternalModelsAvailableToInclude,
        externalModelsByNamespace: (_f = props === null || props === void 0 ? void 0 : props.externalModelsByNamespace) !== null && _f !== void 0 ? _f : args.externalModelsByNamespace,
        externalContextName: (_g = props === null || props === void 0 ? void 0 : props.externalContextName) !== null && _g !== void 0 ? _g : args.externalContextName,
        externalContextDescription: (_h = props === null || props === void 0 ? void 0 : props.externalContextDescription) !== null && _h !== void 0 ? _h : args.externalContextDescription,
        validationMessages: (_j = props === null || props === void 0 ? void 0 : props.validationMessages) !== null && _j !== void 0 ? _j : args.validationMessages,
        evaluationResultsByNodeId: (_k = props === null || props === void 0 ? void 0 : props.evaluationResultsByNodeId) !== null && _k !== void 0 ? _k : args.evaluationResultsByNodeId,
        issueTrackerHref: (_l = props === null || props === void 0 ? void 0 : props.issueTrackerHref) !== null && _l !== void 0 ? _l : args.issueTrackerHref,
        onRequestToJumpToPath: (_m = props === null || props === void 0 ? void 0 : props.onRequestToJumpToPath) !== null && _m !== void 0 ? _m : args.onRequestToJumpToPath,
        onModelDebounceStateChanged: onModelDebounceStateChanged
      })
    })]
  });
}
try {
    // @ts-ignore
    DmnEditorWrapper.displayName = "DmnEditorWrapper";
    // @ts-ignore
    DmnEditorWrapper.__docgenInfo = { "description": "", "displayName": "DmnEditorWrapper", "props": { "model": { "defaultValue": null, "description": "The DMN itself.", "name": "model", "required": false, "type": { "name": "DmnLatestModel" } }, "originalVersion": { "defaultValue": null, "description": "The original version of `model` before upgrading to `latest`.", "name": "originalVersion", "required": false, "type": { "name": "enum", "value": [{ "value": "\"1.0\"" }, { "value": "\"1.1\"" }, { "value": "\"1.2\"" }, { "value": "\"1.3\"" }, { "value": "\"1.4\"" }, { "value": "\"1.5\"" }] } }, "onModelChange": { "defaultValue": null, "description": "Called when a change occurs on `model`, so the controlled flow of the component can be done.", "name": "onModelChange", "required": false, "type": { "name": "OnDmnModelChange" } }, "onRequestExternalModelByPath": { "defaultValue": null, "description": "Called when the contents of a specific available model is necessary. Used by the \"Included models\" tab.", "name": "onRequestExternalModelByPath", "required": false, "type": { "name": "OnRequestExternalModelByPath" } }, "onRequestExternalModelsAvailableToInclude": { "defaultValue": null, "description": "Called when the list of paths of available models to be included is needed. Used by the \"Included models\" tab.", "name": "onRequestExternalModelsAvailableToInclude", "required": false, "type": { "name": "OnRequestExternalModelsAvailableToInclude" } }, "externalModelsByNamespace": { "defaultValue": null, "description": "When the DMN represented by `model` (\"This DMN\") contains `import`ed models, this prop needs to map their contents by namespace.\nThe DMN model won't be correctly rendered if an included model is not found on this object.", "name": "externalModelsByNamespace", "required": false, "type": { "name": "ExternalModelsIndex" } }, "evaluationResultsByNodeId": { "defaultValue": null, "description": "To show information about evaluation results directly on the DMN diagram and/or Boxed Expression Editor, use this prop.", "name": "evaluationResultsByNodeId", "required": false, "type": { "name": "EvaluationResultsByNodeId" } }, "validationMessages": { "defaultValue": null, "description": "To show information about validation messages directly on the DMN diagram and/or Boxed Expression Editor, use this prop.", "name": "validationMessages", "required": false, "type": { "name": "ValidationMessages" } }, "externalContextName": { "defaultValue": null, "description": "The name of context in which this instance of DMN Editor is running. For example, if this DMN Editor instance\nis displaying a model from a project called \"My project\", you could use `externalContextName={\"My project\"}`", "name": "externalContextName", "required": false, "type": { "name": "string" } }, "externalContextDescription": { "defaultValue": null, "description": "Describe the context in which this instance of DMN Editor is running. For example, if this DMN Editor instance\nis displaying a model from a project called \"My project\", you could use\n`externalContextDescription={'All models (DMN and PMML) of \"My project\" are available.'}`", "name": "externalContextDescription", "required": false, "type": { "name": "string" } }, "issueTrackerHref": { "defaultValue": null, "description": "A link that will take users to an issue tracker so they can report problems they find on the DMN Editor.\nThis is shown on the ErrorBoundary fallback component, when an uncaught error happens.", "name": "issueTrackerHref", "required": false, "type": { "name": "string" } }, "isReadOnly": { "defaultValue": null, "description": "A flag to enable read-only mode on the DMN Editor.\n\nWhen enabled navigation is still possible (E.g., Entering the Boxed Expression Editor, Data Types and Included Models),\nbut no changes can be made and the model itself is unaltered.\n\nDefault: `false`.", "name": "isReadOnly", "required": false, "type": { "name": "boolean" } }, "onRequestToJumpToPath": { "defaultValue": null, "description": "When users want to jump to another file, this method is called, allowing the controller of this component decide what to do.\nLinks are only rendered if this is provided. Otherwise, paths will be rendered as text.", "name": "onRequestToJumpToPath", "required": false, "type": { "name": "OnRequestToJumpToPath" } }, "onRequestToResolvePath": { "defaultValue": null, "description": "All paths inside the DMN Editor are relative. To be able to resolve them and display them as absolute paths, this function is called.\nIf undefined, the relative paths will be displayed.", "name": "onRequestToResolvePath", "required": false, "type": { "name": "OnRequestToResolvePath" } }, "onModelDebounceStateChanged": { "defaultValue": null, "description": "Notifies the caller when the DMN Editor performs a new edit after the debounce time.", "name": "onModelDebounceStateChanged", "required": false, "type": { "name": "((changed: boolean) => void)" } }, "onOpenedBoxedExpressionEditorNodeChange": { "defaultValue": null, "description": "Notifies the caller when the Boxed Expression Editor is open for a different node.", "name": "onOpenedBoxedExpressionEditorNodeChange", "required": false, "type": { "name": "((newOpenedNodeId: string) => void)" } }, "showDefaultDrdOnly": { "defaultValue": null, "description": "Hides tabs and the DRD selector. Overlays and Diagram navigation controls are still enabled.\n\nDefault: `false`.", "name": "showDefaultDrdOnly", "required": false, "type": { "name": "boolean" } }, "xml": { "defaultValue": null, "description": "", "name": "xml", "required": false, "type": { "name": "string" } } } };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlQ2FzZXMtbG9hblByZVF1YWxpZmljYXRpb24tTG9hblByZVF1YWxpZmljYXRpb24tc3Rvcmllcy45M2FkNTFlZS5pZnJhbWUuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0IwRDtBQUNpQztBQUNiO0FBQ1E7QUFDSTtBQUN2QjtBQUM1RCxNQUFNTyxrQkFBa0IsR0FBR0EsQ0FBQSxLQUFNOztXQUU3QkwsMEZBQU8sQ0FBQ00sR0FBRyxDQUFDLEVBQUUsQ0FBQzt3QkFDRkosZ0dBQVUsQ0FBQ0ssa0JBQWtCLENBQUNDLE9BQU87MENBQ25CUCw0RkFBWSxFQUFFO1FBQ2hEQSw0RkFBWSxFQUFFO2FBQ1RBLDRGQUFZLEVBQUU7ZUFDWjtBQUNmLE1BQU1RLElBQUksR0FBeUI7RUFDakNDLEtBQUssRUFBRSxZQUFZO0VBQ25CQyxTQUFTLEVBQUVQLHFEQUFTO0VBQ3BCUSxjQUFjLEVBQUU7Q0FDakI7QUFDRCxpRUFBZUgsSUFBSSxFQUFDO0FBRXBCLE1BQU1JLFVBQVUsR0FBR2Ysd0VBQWEsQ0FBQ08sa0JBQWtCLEVBQUUsRUFBRTtFQUNyRFMsU0FBUyxFQUFFO0NBQ1osQ0FBQztBQUNGLE1BQU1DLEtBQUssR0FBR0YsVUFBVSxDQUFDRyxNQUFNLENBQUNDLEtBQUssRUFBRTtBQUNoQyxNQUFNQyxLQUFLLEdBQVU7RUFDMUJDLE1BQU0sRUFBRUMsSUFBSSxJQUFJakIsMEVBQWdCLEVBQUU7RUFDbENpQixJQUFJLEVBQUU7SUFDSkwsS0FBSyxFQUFFQSxLQUFLO0lBQ1pNLGVBQWUsRUFBRSxLQUFLO0lBQ3RCQyx5QkFBeUIsRUFBRSxJQUFJQyxHQUFHLEVBQUU7SUFDcENDLDBCQUEwQixFQUFFLGtDQUFrQztJQUM5REMsbUJBQW1CLEVBQUUsdUNBQXVDO0lBQzVEQyx5QkFBeUIsRUFBRSxFQUFFO0lBQzdCQyxnQkFBZ0IsRUFBRSxFQUFFO0lBQ3BCQyxrQkFBa0IsRUFBRSxFQUFFO0lBQ3RCQyxVQUFVLEVBQUUsS0FBSztJ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QUFHLEVBQUUscUVBQTBCOztBQUUvQixNQUFNLGlEQUFNLFNBQVMsaURBQU07QUFDM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUyx5REFBYztBQUN2QiwyQkFBMkI7QUFDM0I7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLFFBQVEsd0RBQWEsaUJBQWlCLGlEQUFNLGlCQUFpQix3REFBYSxlQUFlLHdEQUFhO0FBQ3RHLGtCQUFrQjs7QUFFbEI7QUFDQSxnQkFBZ0I7QUFDaEIsR0FBRztBQUNIOztBQUVBLGlFQUFlLElBQUksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Aa2llLXRvb2xzL2Rtbi1lZGl0b3IvLi9zdG9yaWVzL21pc2MvZW1wdHkvRW1wdHkuc3Rvcmllcy50c3giLCJ3ZWJwYWNrOi8vQGtpZS10b29scy9kbW4tZWRpdG9yLy4vc3Rvcmllcy91c2VDYXNlcy9sb2FuUHJlUXVhbGlmaWNhdGlvbi9Mb2FuUHJlUXVhbGlmaWNhdGlvbi5zdG9yaWVzLnRzeCIsIndlYnBhY2s6Ly9Aa2llLXRvb2xzL2Rtbi1lZGl0b3IvLi9zdG9yaWVzL2RtbkVkaXRvclN0b3JpZXNXcmFwcGVyLnRzeCIsIndlYnBhY2s6Ly9Aa2llLXRvb2xzL2Rtbi1lZGl0b3IvLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2RlZXAtb2JqZWN0LWRpZmZAMS4xLjkvbm9kZV9tb2R1bGVzL2RlZXAtb2JqZWN0LWRpZmYvbWpzL2RpZmYuanMiLCJ3ZWJwYWNrOi8vQGtpZS10b29scy9kbW4tZWRpdG9yLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9kZWVwLW9iamVjdC1kaWZmQDEuMS45L25vZGVfbW9kdWxlcy9kZWVwLW9iamVjdC1kaWZmL21qcy91dGlscy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogTGljZW5zZWQgdG8gdGhlIEFwYWNoZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIChBU0YpIHVuZGVyIG9uZVxuICogb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuICBTZWUgdGhlIE5PVElDRSBmaWxlXG4gKiBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvblxuICogcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuICBUaGUgQVNGIGxpY2Vuc2VzIHRoaXMgZmlsZVxuICogdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZVxuICogXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4gKiB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZyxcbiAqIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXG4gKiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxuICogS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlXG4gKiBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zXG4gKiB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgdHlwZSB7IE1ldGEsIFN0b3J5T2JqIH0gZnJvbSBcIkBzdG9yeWJvb2svcmVhY3RcIjtcbmltcG9ydCB7IGdldE1hcnNoYWxsZXIgfSBmcm9tIFwiQGtpZS10b29scy9kbW4tbWFyc2hhbGxlclwiO1xuaW1wb3J0IHsgbnMgYXMgZG1uMTVucyB9IGZyb20gXCJAa2llLXRvb2xzL2Rtbi1tYXJzaGFsbGVyL2Rpc3Qvc2NoZW1hcy9kbW4tMV81L3RzLWdlbi9tZXRhXCI7XG5pbXBvcnQgeyBnZW5lcmF0ZVV1aWQgfSBmcm9tIFwiQGtpZS10b29scy9ib3hlZC1leHByZXNzaW9uLWNvbXBvbmVudC9kaXN0L2FwaVwiO1xuaW1wb3J0IHsgRE1OMTVfU1BFQyB9IGZyb20gXCJAa2llLXRvb2xzL2Rtbi1tYXJzaGFsbGVyL2Rpc3Qvc2NoZW1hcy9kbW4tMV81L0RtbjE1U3BlY1wiO1xuaW1wb3J0IHsgRG1uRWRpdG9yV3JhcHBlciwgU3Rvcnlib29rRG1uRWRpdG9yUHJvcHMgfSBmcm9tIFwiLi4vLi4vZG1uRWRpdG9yU3Rvcmllc1dyYXBwZXJcIjtcbmltcG9ydCB7IERtbkVkaXRvciwgRG1uRWRpdG9yUHJvcHMgfSBmcm9tIFwiLi4vLi4vLi4vc3JjL0RtbkVkaXRvclwiO1xuZXhwb3J0IGNvbnN0IGdlbmVyYXRlRW1wdHlEbW4xNSA9ICgpID0+IGA8P3htbCB2ZXJzaW9uPVwiMS4wXCIgZW5jb2Rpbmc9XCJVVEYtOFwiPz5cbjxkZWZpbml0aW9uc1xuICB4bWxucz1cIiR7ZG1uMTVucy5nZXQoXCJcIil9XCJcbiAgZXhwcmVzc2lvbkxhbmd1YWdlPVwiJHtETU4xNV9TUEVDLmV4cHJlc3Npb25MYW5ndWFnZS5kZWZhdWx0fVwiXG4gIG5hbWVzcGFjZT1cImh0dHBzOi8va2llLmFwYWNoZS5vcmcvZG1uLyR7Z2VuZXJhdGVVdWlkKCl9XCJcbiAgaWQ9XCIke2dlbmVyYXRlVXVpZCgpfVwiXG4gIG5hbWU9XCJETU4ke2dlbmVyYXRlVXVpZCgpfVwiPlxuPC9kZWZpbml0aW9ucz5gO1xuY29uc3QgbWV0YTogTWV0YTxEbW5FZGl0b3JQcm9wcz4gPSB7XG4gIHRpdGxlOiBcIk1pc2MvRW1wdHlcIixcbiAgY29tcG9uZW50OiBEbW5FZGl0b3IsXG4gIGluY2x1ZGVTdG9yaWVzOiAvXltBLVpdL1xufTtcbmV4cG9ydCBkZWZhdWx0IG1ldGE7XG50eXBlIFN0b3J5ID0gU3RvcnlPYmo8U3Rvcnlib29rRG1uRWRpdG9yUHJvcHM+O1xuY29uc3QgbWFyc2hhbGxlciA9IGdldE1hcnNoYWxsZXIoZ2VuZXJhdGVFbXB0eURtbjE1KCksIHtcbiAgdXBncmFkZVRvOiBcImxhdGVzdFwiXG59KTtcbmNvbnN0IG1vZGVsID0gbWFyc2hhbGxlci5wYXJzZXIucGFyc2UoKTtcbmV4cG9ydCBjb25zdCBFbXB0eTogU3RvcnkgPSB7XG4gIHJlbmRlcjogYXJncyA9PiBEbW5FZGl0b3JXcmFwcGVyKCksXG4gIGFyZ3M6IHtcbiAgICBtb2RlbDogbW9kZWwsXG4gICAgb3JpZ2luYWxWZXJzaW9uOiBcIjEuNVwiLFxuICAgIGV2YWx1YXRpb25SZXN1bHRzQnlOb2RlSWQ6IG5ldyBNYXAoKSxcbiAgICBleHRlcm5hbENvbnRleHREZXNjcmlwdGlvbjogXCJUaGUgU3Rvcnlib29rIGZvciB0aGUgRE1OIEVkaXRvclwiLFxuICAgIGV4dGVybmFsQ29udGV4dE5hbWU6IFwiQXBhY2hlIEtJRSA6OiBETU4gRWRpdG9yIDo6IFN0b3J5Ym9va1wiLFxuICAgIGV4dGVybmFsTW9kZWxzQnlOYW1lc3BhY2U6IHt9LFxuICAgIGlzc3VlVHJhY2tlckhyZWY6IFwiXCIsXG4gICAgdmFsaWRhdGlvbk1lc3NhZ2VzOiB7fSxcbiAgICBpc1JlYWRPbmx5OiBmYWxzZSxcbiAgICB4bWw6IG1hcnNoYWxsZXIuYnVpbGRlci5idWlsZChtb2RlbClcbiAgfVxufTtcbkVtcHR5LnBhcmFtZXRlcnMgPSB7XG4gIC4uLkVtcHR5LnBhcmFtZXRlcnMsXG4gIGRvY3M6IHtcbiAgICAuLi5FbXB0eS5wYXJhbWV0ZXJzPy5kb2NzLFxuICAgIHNvdXJjZToge1xuICAgICAgb3JpZ2luYWxTb3VyY2U6IFwie1xcbiAgcmVuZGVyOiBhcmdzID0+IERtbkVkaXRvcldyYXBwZXIoKSxcXG4gIGFyZ3M6IHtcXG4gICAgbW9kZWw6IG1vZGVsLFxcbiAgICBvcmlnaW5hbFZlcnNpb246IFxcXCIxLjVcXFwiLFxcbiAgICBldmFsdWF0aW9uUmVzdWx0c0J5Tm9kZUlkOiBuZXcgTWFwKCksXFxuICAgIGV4dGVybmFsQ29udGV4dERlc2NyaXB0aW9uOiBcXFwiVGhlIFN0b3J5Ym9vayBmb3IgdGhlIERNTiBFZGl0b3JcXFwiLFxcbiAgICBleHRlcm5hbENvbnRleHROYW1lOiBcXFwiQXBhY2hlIEtJRSA6OiBETU4gRWRpdG9yIDo6IFN0b3J5Ym9va1xcXCIsXFxuICAgIGV4dGVybmFsTW9kZWxzQnlOYW1lc3BhY2U6IHt9LFxcbiAgICBpc3N1ZVRyYWNrZXJIcmVmOiBcXFwiXFxcIixcXG4gICAgdmFsaWRhdGlvbk1lc3NhZ2VzOiB7fSxcXG4gICAgaXNSZWFkT25seTogZmFsc2UsXFxuICAgIHhtbDogbWFyc2hhbGxlci5idWlsZGVyLmJ1aWxkKG1vZGVsKVxcbiAgfVxcbn1cIixcbiAgICAgIC4uLkVtcHR5LnBhcmFtZXRlcnM/LmRvY3M/LnNvdXJjZVxuICAgIH1cbiAgfVxufTsiLCIvKlxuICogTGljZW5zZWQgdG8gdGhlIEFwYWNoZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIChBU0YpIHVuZGVyIG9uZVxuICogb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuICBTZWUgdGhlIE5PVElDRSBmaWxlXG4gKiBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvblxuICogcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuICBUaGUgQVNGIGxpY2Vuc2VzIHRoaXMgZmlsZVxuICogdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZVxuICogXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4gKiB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZyxcbiAqIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXG4gKiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxuICogS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlXG4gKiBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zXG4gKiB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB0eXBlIHsgTWV0YSwgU3RvcnlPYmogfSBmcm9tIFwiQHN0b3J5Ym9vay9yZWFjdFwiO1xuaW1wb3J0IHsgRW1wdHkgfSBmcm9tIFwiLi4vLi4vbWlzYy9lbXB0eS9FbXB0eS5zdG9yaWVzXCI7XG5pbXBvcnQgeyBEbW5FZGl0b3IsIERtbkVkaXRvclByb3BzIH0gZnJvbSBcIi4uLy4uLy4uL3NyYy9EbW5FZGl0b3JcIjtcbmltcG9ydCB7IFN0b3J5Ym9va0RtbkVkaXRvclByb3BzIH0gZnJvbSBcIi4uLy4uL2RtbkVkaXRvclN0b3JpZXNXcmFwcGVyXCI7XG5pbXBvcnQgeyBVU0VfQ0FTRV9NT0RFTFMgfSBmcm9tIFwiLi4vbW9kZWxzL21vZGVsc1wiO1xuY29uc3QgbWV0YTogTWV0YTxEbW5FZGl0b3JQcm9wcz4gPSB7XG4gIHRpdGxlOiBcIlVzZSBjYXNlcy9Mb2FuIFByZS1RdWFsaWZpY2F0aW9uXCIsXG4gIGNvbXBvbmVudDogRG1uRWRpdG9yLFxuICBpbmNsdWRlU3RvcmllczogL15bQS1aXS9cbn07XG5leHBvcnQgZGVmYXVsdCBtZXRhO1xudHlwZSBTdG9yeSA9IFN0b3J5T2JqPFN0b3J5Ym9va0RtbkVkaXRvclByb3BzPjtcbmV4cG9ydCBjb25zdCBMb2FuUHJlUXVhbGlmaWNhdGlvbjogU3RvcnkgPSB7XG4gIHJlbmRlcjogRW1wdHkucmVuZGVyLFxuICBhcmdzOiB7XG4gICAgbW9kZWw6IFVTRV9DQVNFX01PREVMUy5sb2FuUHJlUXVhbGlmaWNhdGlvbi5tb2RlbFxuICB9XG59O1xuTG9hblByZVF1YWxpZmljYXRpb24ucGFyYW1ldGVycyA9IHtcbiAgLi4uTG9hblByZVF1YWxpZmljYXRpb24ucGFyYW1ldGVycyxcbiAgZG9jczoge1xuICAgIC4uLkxvYW5QcmVRdWFsaWZpY2F0aW9uLnBhcmFtZXRlcnM/LmRvY3MsXG4gICAgc291cmNlOiB7XG4gICAgICBvcmlnaW5hbFNvdXJjZTogXCJ7XFxuICByZW5kZXI6IEVtcHR5LnJlbmRlcixcXG4gIGFyZ3M6IHtcXG4gICAgbW9kZWw6IFVTRV9DQVNFX01PREVMUy5sb2FuUHJlUXVhbGlmaWNhdGlvbi5tb2RlbFxcbiAgfVxcbn1cIixcbiAgICAgIC4uLkxvYW5QcmVRdWFsaWZpY2F0aW9uLnBhcmFtZXRlcnM/LmRvY3M/LnNvdXJjZVxuICAgIH1cbiAgfVxufTsiLCIvKlxuICogTGljZW5zZWQgdG8gdGhlIEFwYWNoZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIChBU0YpIHVuZGVyIG9uZVxuICogb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuICBTZWUgdGhlIE5PVElDRSBmaWxlXG4gKiBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvblxuICogcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuICBUaGUgQVNGIGxpY2Vuc2VzIHRoaXMgZmlsZVxuICogdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZVxuICogXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4gKiB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZyxcbiAqIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXG4gKiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxuICogS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlXG4gKiBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zXG4gKiB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VNZW1vLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUFyZ3MgfSBmcm9tIFwiQHN0b3J5Ym9vay9wcmV2aWV3LWFwaVwiO1xuaW1wb3J0IHtcbiAgRG1uRWRpdG9yLFxuICBEbW5FZGl0b3JQcm9wcyxcbiAgRG1uRWRpdG9yUmVmLFxuICBFdmFsdWF0aW9uUmVzdWx0c0J5Tm9kZUlkLFxuICBWYWxpZGF0aW9uTWVzc2FnZXMsXG59IGZyb20gXCIuLi9zcmMvRG1uRWRpdG9yXCI7XG5pbXBvcnQgeyBEbW5MYXRlc3RNb2RlbCwgZ2V0TWFyc2hhbGxlciB9IGZyb20gXCJAa2llLXRvb2xzL2Rtbi1tYXJzaGFsbGVyXCI7XG5pbXBvcnQgeyBub3JtYWxpemUgfSBmcm9tIFwiQGtpZS10b29scy9kbW4tbWFyc2hhbGxlci9kaXN0L25vcm1hbGl6YXRpb24vbm9ybWFsaXplXCI7XG5pbXBvcnQgeyBkaWZmIH0gZnJvbSBcImRlZXAtb2JqZWN0LWRpZmZcIjtcbmltcG9ydCB7IGdlbmVyYXRlRW1wdHlEbW4xNSB9IGZyb20gXCIuL21pc2MvZW1wdHkvRW1wdHkuc3Rvcmllc1wiO1xuXG5leHBvcnQgY29uc3QgZXZhbHVhdGlvblJlc3VsdHNCeU5vZGVJZDogRXZhbHVhdGlvblJlc3VsdHNCeU5vZGVJZCA9IG5ldyBNYXAoKTtcbmV4cG9ydCBjb25zdCB2YWxpZGF0aW9uTWVzc2FnZXM6IFZhbGlkYXRpb25NZXNzYWdlcyA9IHt9O1xuXG5leHBvcnQgdHlwZSBTdG9yeWJvb2tEbW5FZGl0b3JQcm9wcyA9IERtbkVkaXRvclByb3BzICYgeyB4bWw6IHN0cmluZyB9O1xuXG5leHBvcnQgZnVuY3Rpb24gRG1uRWRpdG9yV3JhcHBlcihwcm9wcz86IFBhcnRpYWw8U3Rvcnlib29rRG1uRWRpdG9yUHJvcHM+KSB7XG4gIGNvbnN0IFthcmdzLCB1cGRhdGVBcmdzXSA9IHVzZUFyZ3M8U3Rvcnlib29rRG1uRWRpdG9yUHJvcHM+KCk7XG4gIGNvbnN0IGFyZ3NDb3B5ID0gdXNlUmVmKGFyZ3MpO1xuICBjb25zdCByZWYgPSB1c2VSZWY8RG1uRWRpdG9yUmVmPihudWxsKTtcbiAgY29uc3QgW21vZGVsQXJncywgc2V0TW9kZWxBcmdzXSA9IHVzZVN0YXRlPERtbkxhdGVzdE1vZGVsPihhcmdzLm1vZGVsKTtcbiAgY29uc3QgbW9kZWwgPSB1c2VNZW1vKCgpID0+IHByb3BzPy5tb2RlbCA/PyBtb2RlbEFyZ3MsIFttb2RlbEFyZ3MsIHByb3BzPy5tb2RlbF0pO1xuICBjb25zdCBbbW9kZWxDaGFuZ2VkLCBzZXRNb2RlbENoYW5nZV0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IFtpc1JlYWRPbmx5LCBzZXRJc1JlYWRPbmx5XSA9IHVzZVN0YXRlKHByb3BzPy5pc1JlYWRPbmx5ID8/IGFyZ3MuaXNSZWFkT25seSA/PyBmYWxzZSk7XG5cbiAgY29uc3Qgb25Nb2RlbENoYW5nZSA9IHVzZU1lbW8oXG4gICAgKCkgPT4gKHByb3BzPy5vbk1vZGVsQ2hhbmdlID8gcHJvcHMub25Nb2RlbENoYW5nZSA6IHNldE1vZGVsQXJncyksXG4gICAgW3Byb3BzPy5vbk1vZGVsQ2hhbmdlXVxuICApO1xuXG4gIGNvbnN0IG9uT3BlbmVkQm94ZWRFeHByZXNzaW9uRWRpdG9yTm9kZUNoYW5nZU5vT3BlcmF0aW9uID0gdXNlTWVtbyhcbiAgICAoKSA9PiAobmV3T3BlbmVkTm9kZUlkOiBzdHJpbmcgfCB1bmRlZmluZWQpID0+IHt9LFxuICAgIFtdXG4gICk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoYXJncy5pc1JlYWRPbmx5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHNldElzUmVhZE9ubHkoYXJncy5pc1JlYWRPbmx5KTtcbiAgICB9XG4gIH0sIFthcmdzLmlzUmVhZE9ubHldKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChPYmplY3Qua2V5cyhkaWZmKGFyZ3NDb3B5LmN1cnJlbnQubW9kZWwsIG1vZGVsKSkubGVuZ3RoICE9PSAwKSB7XG4gICAgICB1cGRhdGVBcmdzKHtcbiAgICAgICAgLi4uYXJnc0NvcHkuY3VycmVudCxcbiAgICAgICAgbW9kZWw6IG1vZGVsLFxuICAgICAgICB4bWw6IGdldE1hcnNoYWxsZXIoZ2VuZXJhdGVFbXB0eURtbjE1KCksIHsgdXBncmFkZVRvOiBcImxhdGVzdFwiIH0pLmJ1aWxkZXIuYnVpbGQobW9kZWwpLFxuICAgICAgfSk7XG4gICAgfVxuICB9LCBbdXBkYXRlQXJncywgbW9kZWxdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChPYmplY3Qua2V5cyhkaWZmKGFyZ3NDb3B5LmN1cnJlbnQsIGFyZ3MpKS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgYXJnc0NvcHkuY3VycmVudCA9IGFyZ3M7XG4gICAgaWYgKE9iamVjdC5rZXlzKGRpZmYoYXJncy5tb2RlbCwgbW9kZWwpKS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgb25Nb2RlbENoYW5nZShub3JtYWxpemUoYXJncy5tb2RlbCkpO1xuICB9LCBbYXJncywgbW9kZWwsIG9uTW9kZWxDaGFuZ2VdKTtcblxuICBjb25zdCBvbk1vZGVsRGVib3VuY2VTdGF0ZUNoYW5nZWQgPSB1c2VDYWxsYmFjaygoY2hhbmdlZDogYm9vbGVhbikgPT4ge1xuICAgIHNldE1vZGVsQ2hhbmdlKGNoYW5nZWQpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge21vZGVsQ2hhbmdlZCAmJiAoXG4gICAgICAgIDxkaXYgZGF0YS10ZXN0aWQ9e1wic3Rvcnlib29rLS1kbW4tZWRpdG9yLW1vZGVsXCJ9IHN0eWxlPXt7IGRpc3BsYXk6IFwibm9uZVwiIH19PlxuICAgICAgICAgIHtKU09OLnN0cmluZ2lmeShtb2RlbCl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgIDxidXR0b25cbiAgICAgICAgZGF0YS10ZXN0aWQ9e1wic3Rvcnlib29rLS1kbW4tZWRpdG9yLXRvZ2dsZS1yZWFkLW9ubHlcIn1cbiAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX1cbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNSZWFkT25seSgoY3VycmVudFZhbHVlKSA9PiAhY3VycmVudFZhbHVlKX1cbiAgICAgID5cbiAgICAgICAge2lzUmVhZE9ubHkudG9TdHJpbmcoKX1cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLCB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIsIHRvcDogXCIwcHhcIiwgbGVmdDogXCIwcHhcIiB9fT5cbiAgICAgICAgPERtbkVkaXRvclxuICAgICAgICAgIHJlZj17cmVmfVxuICAgICAgICAgIG1vZGVsPXttb2RlbH1cbiAgICAgICAgICBvcmlnaW5hbFZlcnNpb249e3Byb3BzPy5vcmlnaW5hbFZlcnNpb24gPz8gYXJncy5vcmlnaW5hbFZlcnNpb259XG4gICAgICAgICAgaXNSZWFkT25seT17aXNSZWFkT25seX1cbiAgICAgICAgICBvbk1vZGVsQ2hhbmdlPXtvbk1vZGVsQ2hhbmdlfVxuICAgICAgICAgIG9uT3BlbmVkQm94ZWRFeHByZXNzaW9uRWRpdG9yTm9kZUNoYW5nZT17b25PcGVuZWRCb3hlZEV4cHJlc3Npb25FZGl0b3JOb2RlQ2hhbmdlTm9PcGVyYXRpb259XG4gICAgICAgICAgb25SZXF1ZXN0RXh0ZXJuYWxNb2RlbEJ5UGF0aD17cHJvcHM/Lm9uUmVxdWVzdEV4dGVybmFsTW9kZWxCeVBhdGggPz8gYXJncy5vblJlcXVlc3RFeHRlcm5hbE1vZGVsQnlQYXRofVxuICAgICAgICAgIG9uUmVxdWVzdEV4dGVybmFsTW9kZWxzQXZhaWxhYmxlVG9JbmNsdWRlPXtcbiAgICAgICAgICAgIHByb3BzPy5vblJlcXVlc3RFeHRlcm5hbE1vZGVsc0F2YWlsYWJsZVRvSW5jbHVkZSA/PyBhcmdzLm9uUmVxdWVzdEV4dGVybmFsTW9kZWxzQXZhaWxhYmxlVG9JbmNsdWRlXG4gICAgICAgICAgfVxuICAgICAgICAgIGV4dGVybmFsTW9kZWxzQnlOYW1lc3BhY2U9e3Byb3BzPy5leHRlcm5hbE1vZGVsc0J5TmFtZXNwYWNlID8/IGFyZ3MuZXh0ZXJuYWxNb2RlbHNCeU5hbWVzcGFjZX1cbiAgICAgICAgICBleHRlcm5hbENvbnRleHROYW1lPXtwcm9wcz8uZXh0ZXJuYWxDb250ZXh0TmFtZSA/PyBhcmdzLmV4dGVybmFsQ29udGV4dE5hbWV9XG4gICAgICAgICAgZXh0ZXJuYWxDb250ZXh0RGVzY3JpcHRpb249e3Byb3BzPy5leHRlcm5hbENvbnRleHREZXNjcmlwdGlvbiA/PyBhcmdzLmV4dGVybmFsQ29udGV4dERlc2NyaXB0aW9ufVxuICAgICAgICAgIHZhbGlkYXRpb25NZXNzYWdlcz17cHJvcHM/LnZhbGlkYXRpb25NZXNzYWdlcyA/PyBhcmdzLnZhbGlkYXRpb25NZXNzYWdlc31cbiAgICAgICAgICBldmFsdWF0aW9uUmVzdWx0c0J5Tm9kZUlkPXtwcm9wcz8uZXZhbHVhdGlvblJlc3VsdHNCeU5vZGVJZCA/PyBhcmdzLmV2YWx1YXRpb25SZXN1bHRzQnlOb2RlSWR9XG4gICAgICAgICAgaXNzdWVUcmFja2VySHJlZj17cHJvcHM/Lmlzc3VlVHJhY2tlckhyZWYgPz8gYXJncy5pc3N1ZVRyYWNrZXJIcmVmfVxuICAgICAgICAgIG9uUmVxdWVzdFRvSnVtcFRvUGF0aD17cHJvcHM/Lm9uUmVxdWVzdFRvSnVtcFRvUGF0aCA/PyBhcmdzLm9uUmVxdWVzdFRvSnVtcFRvUGF0aH1cbiAgICAgICAgICBvbk1vZGVsRGVib3VuY2VTdGF0ZUNoYW5nZWQ9e29uTW9kZWxEZWJvdW5jZVN0YXRlQ2hhbmdlZH1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuIiwiaW1wb3J0IHsgaXNEYXRlLCBpc0VtcHR5T2JqZWN0LCBpc09iamVjdCwgaGFzT3duUHJvcGVydHksIG1ha2VPYmplY3RXaXRob3V0UHJvdG90eXBlIH0gZnJvbSAnLi91dGlscy5qcyc7XG5cbmNvbnN0IGRpZmYgPSAobGhzLCByaHMpID0+IHtcbiAgaWYgKGxocyA9PT0gcmhzKSByZXR1cm4ge307IC8vIGVxdWFsIHJldHVybiBubyBkaWZmXG5cbiAgaWYgKCFpc09iamVjdChsaHMpIHx8ICFpc09iamVjdChyaHMpKSByZXR1cm4gcmhzOyAvLyByZXR1cm4gdXBkYXRlZCByaHNcblxuICBjb25zdCBkZWxldGVkVmFsdWVzID0gT2JqZWN0LmtleXMobGhzKS5yZWR1Y2UoKGFjYywga2V5KSA9PiB7XG4gICAgaWYgKCFoYXNPd25Qcm9wZXJ0eShyaHMsIGtleSkpIHtcbiAgICAgIGFjY1trZXldID0gdW5kZWZpbmVkO1xuICAgICAgXG4gICAgfVxuXG4gICAgcmV0dXJuIGFjYztcbiAgfSwgbWFrZU9iamVjdFdpdGhvdXRQcm90b3R5cGUoKSk7XG5cbiAgaWYgKGlzRGF0ZShsaHMpIHx8IGlzRGF0ZShyaHMpKSB7XG4gICAgaWYgKGxocy52YWx1ZU9mKCkgPT0gcmhzLnZhbHVlT2YoKSkgcmV0dXJuIHt9O1xuICAgIHJldHVybiByaHM7XG4gIH1cblxuICByZXR1cm4gT2JqZWN0LmtleXMocmhzKS5yZWR1Y2UoKGFjYywga2V5KSA9PiB7XG4gICAgaWYgKCFoYXNPd25Qcm9wZXJ0eShsaHMsIGtleSkpe1xuICAgICAgYWNjW2tleV0gPSByaHNba2V5XTsgLy8gcmV0dXJuIGFkZGVkIHIga2V5XG4gICAgICByZXR1cm4gYWNjO1xuICAgIH0gXG5cbiAgICBjb25zdCBkaWZmZXJlbmNlID0gZGlmZihsaHNba2V5XSwgcmhzW2tleV0pO1xuXG4gICAgLy8gSWYgdGhlIGRpZmZlcmVuY2UgaXMgZW1wdHksIGFuZCB0aGUgbGhzIGlzIGFuIGVtcHR5IG9iamVjdCBvciB0aGUgcmhzIGlzIG5vdCBhbiBlbXB0eSBvYmplY3RcbiAgICBpZiAoaXNFbXB0eU9iamVjdChkaWZmZXJlbmNlKSAmJiAhaXNEYXRlKGRpZmZlcmVuY2UpICYmIChpc0VtcHR5T2JqZWN0KGxoc1trZXldKSB8fCAhaXNFbXB0eU9iamVjdChyaHNba2V5XSkpKVxuICAgICAgcmV0dXJuIGFjYzsgLy8gcmV0dXJuIG5vIGRpZmZcblxuICAgIGFjY1trZXldID0gZGlmZmVyZW5jZSAvLyByZXR1cm4gdXBkYXRlZCBrZXlcbiAgICByZXR1cm4gYWNjOyAvLyByZXR1cm4gdXBkYXRlZCBrZXlcbiAgfSwgZGVsZXRlZFZhbHVlcyk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkaWZmO1xuIiwiZXhwb3J0IGNvbnN0IGlzRGF0ZSA9IGQgPT4gZCBpbnN0YW5jZW9mIERhdGU7XG5leHBvcnQgY29uc3QgaXNFbXB0eSA9IG8gPT4gT2JqZWN0LmtleXMobykubGVuZ3RoID09PSAwO1xuZXhwb3J0IGNvbnN0IGlzT2JqZWN0ID0gbyA9PiBvICE9IG51bGwgJiYgdHlwZW9mIG8gPT09ICdvYmplY3QnO1xuZXhwb3J0IGNvbnN0IGhhc093blByb3BlcnR5ID0gKG8sIC4uLmFyZ3MpID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvLCAuLi5hcmdzKVxuZXhwb3J0IGNvbnN0IGlzRW1wdHlPYmplY3QgPSAobykgPT4gaXNPYmplY3QobykgJiYgaXNFbXB0eShvKTtcbmV4cG9ydCBjb25zdCBtYWtlT2JqZWN0V2l0aG91dFByb3RvdHlwZSA9ICgpID0+IE9iamVjdC5jcmVhdGUobnVsbCk7XG4iXSwibmFtZXMiOlsiZ2V0TWFyc2hhbGxlciIsIm5zIiwiZG1uMTVucyIsImdlbmVyYXRlVXVpZCIsIkRNTjE1X1NQRUMiLCJEbW5FZGl0b3JXcmFwcGVyIiwiRG1uRWRpdG9yIiwiZ2VuZXJhdGVFbXB0eURtbjE1IiwiZ2V0IiwiZXhwcmVzc2lvbkxhbmd1YWdlIiwiZGVmYXVsdCIsIm1ldGEiLCJ0aXRsZSIsImNvbXBvbmVudCIsImluY2x1ZGVTdG9yaWVzIiwibWFyc2hhbGxlciIsInVwZ3JhZGVUbyIsIm1vZGVsIiwicGFyc2VyIiwicGFyc2UiLCJFbXB0eSIsInJlbmRlciIsImFyZ3MiLCJvcmlnaW5hbFZlcnNpb24iLCJldmFsdWF0aW9uUmVzdWx0c0J5Tm9kZUlkIiwiTWFwIiwiZXh0ZXJuYWxDb250ZXh0RGVzY3JpcHRpb24iLCJleHRlcm5hbENvbnRleHROYW1lIiwiZXh0ZXJuYWxNb2RlbHNCeU5hbWVzcGFjZSIsImlzc3VlVHJhY2tlckhyZWYiLCJ2YWxpZGF0aW9uTWVzc2FnZXMiLCJpc1JlYWRPbmx5IiwieG1sIiwiYnVpbGRlciIsImJ1aWxkIiwicGFyYW1ldGVycyIsImRvY3MiLCJfYSIsInNvdXJjZSIsIm9yaWdpbmFsU291cmNlIiwiX2MiLCJfYiIsIl9fbmFtZWRFeHBvcnRzT3JkZXIiLCJVU0VfQ0FTRV9NT0RFTFMiLCJMb2FuUHJlUXVhbGlmaWNhdGlvbiIsImxvYW5QcmVRdWFsaWZpY2F0aW9uIiwidXNlQ2FsbGJhY2siLCJ1c2VTdGF0ZSIsInVzZVJlZiIsInVzZU1lbW8iLCJ1c2VFZmZlY3QiLCJ1c2VBcmdzIiwibm9ybWFsaXplIiwiZGlmZiIsInByb3BzIiwidXBkYXRlQXJncyIsImFyZ3NDb3B5IiwicmVmIiwibW9kZWxBcmdzIiwic2V0TW9kZWxBcmdzIiwibW9kZWxDaGFuZ2VkIiwic2V0TW9kZWxDaGFuZ2UiLCJzZXRJc1JlYWRPbmx5Iiwib25Nb2RlbENoYW5nZSIsIm9uT3BlbmVkQm94ZWRFeHByZXNzaW9uRWRpdG9yTm9kZUNoYW5nZU5vT3BlcmF0aW9uIiwibmV3T3BlbmVkTm9kZUlkIiwidW5kZWZpbmVkIiwiT2JqZWN0Iiwia2V5cyIsImN1cnJlbnQiLCJsZW5ndGgiLCJvbk1vZGVsRGVib3VuY2VTdGF0ZUNoYW5nZWQiLCJjaGFuZ2VkIiwiX2pzeHMiLCJfRnJhZ21lbnQiLCJjaGlsZHJlbiIsIl9qc3giLCJzdHlsZSIsImRpc3BsYXkiLCJKU09OIiwic3RyaW5naWZ5Iiwib25DbGljayIsImN1cnJlbnRWYWx1ZSIsInRvU3RyaW5nIiwicG9zaXRpb24iLCJ3aWR0aCIsImhlaWdodCIsInRvcCIsImxlZnQiLCJvbk9wZW5lZEJveGVkRXhwcmVzc2lvbkVkaXRvck5vZGVDaGFuZ2UiLCJvblJlcXVlc3RFeHRlcm5hbE1vZGVsQnlQYXRoIiwiX2QiLCJvblJlcXVlc3RFeHRlcm5hbE1vZGVsc0F2YWlsYWJsZVRvSW5jbHVkZSIsIl9lIiwiX2YiLCJfZyIsIl9oIiwiX2oiLCJfayIsIl9sIiwib25SZXF1ZXN0VG9KdW1wVG9QYXRoIiwiX20iXSwic291cmNlUm9vdCI6IiJ9