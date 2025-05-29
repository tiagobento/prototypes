(self["webpackChunk_kie_tools_dmn_editor"] = self["webpackChunk_kie_tools_dmn_editor"] || []).push([["misc-empty-Empty-stories"],{

/***/ "./stories/misc/empty/Empty.stories.tsx":
/*!**********************************************!*\
  !*** ./stories/misc/empty/Empty.stories.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./stories/dmnEditorStoriesWrapper.tsx":
/*!*********************************************!*\
  !*** ./stories/dmnEditorStoriesWrapper.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
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


/***/ }),

/***/ "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_assignValue.js":
/*!***********************************************************************************!*\
  !*** ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_assignValue.js ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseAssignValue.js"),
    eq = __webpack_require__(/*! ./eq */ "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/eq.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),

/***/ "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseCreate.js":
/*!**********************************************************************************!*\
  !*** ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseCreate.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./isObject */ "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isObject.js");

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

module.exports = baseCreate;


/***/ }),

/***/ "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseKeysIn.js":
/*!**********************************************************************************!*\
  !*** ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseKeysIn.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./isObject */ "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isObject.js"),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_isPrototype.js"),
    nativeKeysIn = __webpack_require__(/*! ./_nativeKeysIn */ "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_nativeKeysIn.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeysIn;


/***/ }),

/***/ "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_cloneArrayBuffer.js":
/*!****************************************************************************************!*\
  !*** ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_cloneArrayBuffer.js ***!
  \****************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Uint8Array = __webpack_require__(/*! ./_Uint8Array */ "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_Uint8Array.js");

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

module.exports = cloneArrayBuffer;


/***/ }),

/***/ "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_cloneBuffer.js":
/*!***********************************************************************************!*\
  !*** ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_cloneBuffer.js ***!
  \***********************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var root = __webpack_require__(/*! ./_root */ "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_root.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;


/***/ }),

/***/ "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_cloneTypedArray.js":
/*!***************************************************************************************!*\
  !*** ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_cloneTypedArray.js ***!
  \***************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer */ "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_cloneArrayBuffer.js");

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

module.exports = cloneTypedArray;


/***/ }),

/***/ "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_copyArray.js":
/*!*********************************************************************************!*\
  !*** ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_copyArray.js ***!
  \*********************************************************************************/
/***/ ((module) => {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = copyArray;


/***/ }),

/***/ "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_copyObject.js":
/*!**********************************************************************************!*\
  !*** ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_copyObject.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assignValue = __webpack_require__(/*! ./_assignValue */ "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_assignValue.js"),
    baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseAssignValue.js");

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;


/***/ }),

/***/ "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_initCloneObject.js":
/*!***************************************************************************************!*\
  !*** ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_initCloneObject.js ***!
  \***************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseCreate = __webpack_require__(/*! ./_baseCreate */ "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseCreate.js"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getPrototype.js"),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_isPrototype.js");

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

module.exports = initCloneObject;


/***/ }),

/***/ "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_nativeKeysIn.js":
/*!************************************************************************************!*\
  !*** ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_nativeKeysIn.js ***!
  \************************************************************************************/
/***/ ((module) => {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


/***/ }),

/***/ "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/keysIn.js":
/*!*****************************************************************************!*\
  !*** ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/keysIn.js ***!
  \*****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_arrayLikeKeys.js"),
    baseKeysIn = __webpack_require__(/*! ./_baseKeysIn */ "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseKeysIn.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isArrayLike.js");

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlzYy1lbXB0eS1FbXB0eS1zdG9yaWVzLjY5NWU2OWFlLmlmcmFtZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQjBEO0FBQ2lDO0FBQ2I7QUFDUTtBQUNJO0FBQ3ZCO0FBQzVELE1BQU1PLGtCQUFrQixHQUFHQSxDQUFBLEtBQU07O1dBRTdCTCwwRkFBTyxDQUFDTSxHQUFHLENBQUMsRUFBRSxDQUFDO3dCQUNGSixnR0FBVSxDQUFDSyxrQkFBa0IsQ0FBQ0MsT0FBTzswQ0FDbkJQLDRGQUFZLEVBQUU7UUFDaERBLDRGQUFZLEVBQUU7YUFDVEEsNEZBQVksRUFBRTtlQUNaO0FBQ2YsTUFBTVEsSUFBSSxHQUF5QjtFQUNqQ0MsS0FBSyxFQUFFLFlBQVk7RUFDbkJDLFNBQVMsRUFBRVAscURBQVM7RUFDcEJRLGNBQWMsRUFBRTtDQUNqQjtBQUNELGlFQUFlSCxJQUFJLEVBQUM7QUFFcEIsTUFBTUksVUFBVSxHQUFHZix3RUFBYSxDQUFDTyxrQkFBa0IsRUFBRSxFQUFFO0VBQ3JEUyxTQUFTLEVBQUU7Q0FDWixDQUFDO0FBQ0YsTUFBTUMsS0FBSyxHQUFHRixVQUFVLENBQUNHLE1BQU0sQ0FBQ0MsS0FBSyxFQUFFO0FBQ2hDLE1BQU1DLEtBQUssR0FBVTtFQUMxQkMsTUFBTSxFQUFFQyxJQUFJLElBQUlqQiwwRUFBZ0IsRUFBRTtFQUNsQ2lCLElBQUksRUFBRTtJQUNKTCxLQUFLLEVBQUVBLEtBQUs7SUFDWk0sZUFBZSxFQUFFLEtBQUs7SUFDdEJDLHlCQUF5QixFQUFFLElBQUlDLEdBQUcsRUFBRTtJQUNwQ0MsMEJBQTBCLEVBQUUsa0NBQWtDO0lBQzlEQyxtQkFBbUIsRUFBRSx1Q0FBdUM7SUFDNURDLHlCQUF5QixFQUFFLEVBQUU7SUFDN0JDLGdCQUFnQixFQUFFLEVBQUU7SUFDcEJDLGtCQUFrQixFQUFFLEVBQUU7SUFDdEJDLFVBQVUsRUFBRSxLQUFLO0lBQ2pCQyxHQUFHLEVBQUVqQixVQUFVLENBQUNrQixPQUFP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QyxpR0FBZTs7QUFFekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Aa2llLXRvb2xzL2Rtbi1lZGl0b3IvLi9zdG9yaWVzL21pc2MvZW1wdHkvRW1wdHkuc3Rvcmllcy50c3giLCJ3ZWJwYWNrOi8vQGtpZS10b29scy9kbW4tZWRpdG9yLy4vc3Rvcmllcy9kbW5FZGl0b3JTdG9yaWVzV3JhcHBlci50c3giLCJ3ZWJwYWNrOi8vQGtpZS10b29scy9kbW4tZWRpdG9yLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9kZWVwLW9iamVjdC1kaWZmQDEuMS45L25vZGVfbW9kdWxlcy9kZWVwLW9iamVjdC1kaWZmL21qcy9kaWZmLmpzIiwid2VicGFjazovL0BraWUtdG9vbHMvZG1uLWVkaXRvci8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZGVlcC1vYmplY3QtZGlmZkAxLjEuOS9ub2RlX21vZHVsZXMvZGVlcC1vYmplY3QtZGlmZi9tanMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vQGtpZS10b29scy9kbW4tZWRpdG9yLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9sb2Rhc2hANC4xNy4yMS9ub2RlX21vZHVsZXMvbG9kYXNoL19hc3NpZ25WYWx1ZS5qcyIsIndlYnBhY2s6Ly9Aa2llLXRvb2xzL2Rtbi1lZGl0b3IvLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2xvZGFzaEA0LjE3LjIxL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VDcmVhdGUuanMiLCJ3ZWJwYWNrOi8vQGtpZS10b29scy9kbW4tZWRpdG9yLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9sb2Rhc2hANC4xNy4yMS9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlS2V5c0luLmpzIiwid2VicGFjazovL0BraWUtdG9vbHMvZG1uLWVkaXRvci8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vbG9kYXNoQDQuMTcuMjEvbm9kZV9tb2R1bGVzL2xvZGFzaC9fY2xvbmVBcnJheUJ1ZmZlci5qcyIsIndlYnBhY2s6Ly9Aa2llLXRvb2xzL2Rtbi1lZGl0b3IvLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2xvZGFzaEA0LjE3LjIxL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Nsb25lQnVmZmVyLmpzIiwid2VicGFjazovL0BraWUtdG9vbHMvZG1uLWVkaXRvci8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vbG9kYXNoQDQuMTcuMjEvbm9kZV9tb2R1bGVzL2xvZGFzaC9fY2xvbmVUeXBlZEFycmF5LmpzIiwid2VicGFjazovL0BraWUtdG9vbHMvZG1uLWVkaXRvci8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vbG9kYXNoQDQuMTcuMjEvbm9kZV9tb2R1bGVzL2xvZGFzaC9fY29weUFycmF5LmpzIiwid2VicGFjazovL0BraWUtdG9vbHMvZG1uLWVkaXRvci8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vbG9kYXNoQDQuMTcuMjEvbm9kZV9tb2R1bGVzL2xvZGFzaC9fY29weU9iamVjdC5qcyIsIndlYnBhY2s6Ly9Aa2llLXRvb2xzL2Rtbi1lZGl0b3IvLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2xvZGFzaEA0LjE3LjIxL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2luaXRDbG9uZU9iamVjdC5qcyIsIndlYnBhY2s6Ly9Aa2llLXRvb2xzL2Rtbi1lZGl0b3IvLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2xvZGFzaEA0LjE3LjIxL25vZGVfbW9kdWxlcy9sb2Rhc2gvX25hdGl2ZUtleXNJbi5qcyIsIndlYnBhY2s6Ly9Aa2llLXRvb2xzL2Rtbi1lZGl0b3IvLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2xvZGFzaEA0LjE3LjIxL25vZGVfbW9kdWxlcy9sb2Rhc2gva2V5c0luLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBMaWNlbnNlZCB0byB0aGUgQXBhY2hlIFNvZnR3YXJlIEZvdW5kYXRpb24gKEFTRikgdW5kZXIgb25lXG4gKiBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gIFNlZSB0aGUgTk9USUNFIGZpbGVcbiAqIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uXG4gKiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC4gIFRoZSBBU0YgbGljZW5zZXMgdGhpcyBmaWxlXG4gKiB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlXG4gKiBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2VcbiAqIHdpdGggdGhlIExpY2Vuc2UuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLFxuICogc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cbiAqIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXG4gKiBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGVcbiAqIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnNcbiAqIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB0eXBlIHsgTWV0YSwgU3RvcnlPYmogfSBmcm9tIFwiQHN0b3J5Ym9vay9yZWFjdFwiO1xuaW1wb3J0IHsgZ2V0TWFyc2hhbGxlciB9IGZyb20gXCJAa2llLXRvb2xzL2Rtbi1tYXJzaGFsbGVyXCI7XG5pbXBvcnQgeyBucyBhcyBkbW4xNW5zIH0gZnJvbSBcIkBraWUtdG9vbHMvZG1uLW1hcnNoYWxsZXIvZGlzdC9zY2hlbWFzL2Rtbi0xXzUvdHMtZ2VuL21ldGFcIjtcbmltcG9ydCB7IGdlbmVyYXRlVXVpZCB9IGZyb20gXCJAa2llLXRvb2xzL2JveGVkLWV4cHJlc3Npb24tY29tcG9uZW50L2Rpc3QvYXBpXCI7XG5pbXBvcnQgeyBETU4xNV9TUEVDIH0gZnJvbSBcIkBraWUtdG9vbHMvZG1uLW1hcnNoYWxsZXIvZGlzdC9zY2hlbWFzL2Rtbi0xXzUvRG1uMTVTcGVjXCI7XG5pbXBvcnQgeyBEbW5FZGl0b3JXcmFwcGVyLCBTdG9yeWJvb2tEbW5FZGl0b3JQcm9wcyB9IGZyb20gXCIuLi8uLi9kbW5FZGl0b3JTdG9yaWVzV3JhcHBlclwiO1xuaW1wb3J0IHsgRG1uRWRpdG9yLCBEbW5FZGl0b3JQcm9wcyB9IGZyb20gXCIuLi8uLi8uLi9zcmMvRG1uRWRpdG9yXCI7XG5leHBvcnQgY29uc3QgZ2VuZXJhdGVFbXB0eURtbjE1ID0gKCkgPT4gYDw/eG1sIHZlcnNpb249XCIxLjBcIiBlbmNvZGluZz1cIlVURi04XCI/PlxuPGRlZmluaXRpb25zXG4gIHhtbG5zPVwiJHtkbW4xNW5zLmdldChcIlwiKX1cIlxuICBleHByZXNzaW9uTGFuZ3VhZ2U9XCIke0RNTjE1X1NQRUMuZXhwcmVzc2lvbkxhbmd1YWdlLmRlZmF1bHR9XCJcbiAgbmFtZXNwYWNlPVwiaHR0cHM6Ly9raWUuYXBhY2hlLm9yZy9kbW4vJHtnZW5lcmF0ZVV1aWQoKX1cIlxuICBpZD1cIiR7Z2VuZXJhdGVVdWlkKCl9XCJcbiAgbmFtZT1cIkRNTiR7Z2VuZXJhdGVVdWlkKCl9XCI+XG48L2RlZmluaXRpb25zPmA7XG5jb25zdCBtZXRhOiBNZXRhPERtbkVkaXRvclByb3BzPiA9IHtcbiAgdGl0bGU6IFwiTWlzYy9FbXB0eVwiLFxuICBjb21wb25lbnQ6IERtbkVkaXRvcixcbiAgaW5jbHVkZVN0b3JpZXM6IC9eW0EtWl0vXG59O1xuZXhwb3J0IGRlZmF1bHQgbWV0YTtcbnR5cGUgU3RvcnkgPSBTdG9yeU9iajxTdG9yeWJvb2tEbW5FZGl0b3JQcm9wcz47XG5jb25zdCBtYXJzaGFsbGVyID0gZ2V0TWFyc2hhbGxlcihnZW5lcmF0ZUVtcHR5RG1uMTUoKSwge1xuICB1cGdyYWRlVG86IFwibGF0ZXN0XCJcbn0pO1xuY29uc3QgbW9kZWwgPSBtYXJzaGFsbGVyLnBhcnNlci5wYXJzZSgpO1xuZXhwb3J0IGNvbnN0IEVtcHR5OiBTdG9yeSA9IHtcbiAgcmVuZGVyOiBhcmdzID0+IERtbkVkaXRvcldyYXBwZXIoKSxcbiAgYXJnczoge1xuICAgIG1vZGVsOiBtb2RlbCxcbiAgICBvcmlnaW5hbFZlcnNpb246IFwiMS41XCIsXG4gICAgZXZhbHVhdGlvblJlc3VsdHNCeU5vZGVJZDogbmV3IE1hcCgpLFxuICAgIGV4dGVybmFsQ29udGV4dERlc2NyaXB0aW9uOiBcIlRoZSBTdG9yeWJvb2sgZm9yIHRoZSBETU4gRWRpdG9yXCIsXG4gICAgZXh0ZXJuYWxDb250ZXh0TmFtZTogXCJBcGFjaGUgS0lFIDo6IERNTiBFZGl0b3IgOjogU3Rvcnlib29rXCIsXG4gICAgZXh0ZXJuYWxNb2RlbHNCeU5hbWVzcGFjZToge30sXG4gICAgaXNzdWVUcmFja2VySHJlZjogXCJcIixcbiAgICB2YWxpZGF0aW9uTWVzc2FnZXM6IHt9LFxuICAgIGlzUmVhZE9ubHk6IGZhbHNlLFxuICAgIHhtbDogbWFyc2hhbGxlci5idWlsZGVyLmJ1aWxkKG1vZGVsKVxuICB9XG59O1xuRW1wdHkucGFyYW1ldGVycyA9IHtcbiAgLi4uRW1wdHkucGFyYW1ldGVycyxcbiAgZG9jczoge1xuICAgIC4uLkVtcHR5LnBhcmFtZXRlcnM/LmRvY3MsXG4gICAgc291cmNlOiB7XG4gICAgICBvcmlnaW5hbFNvdXJjZTogXCJ7XFxuICByZW5kZXI6IGFyZ3MgPT4gRG1uRWRpdG9yV3JhcHBlcigpLFxcbiAgYXJnczoge1xcbiAgICBtb2RlbDogbW9kZWwsXFxuICAgIG9yaWdpbmFsVmVyc2lvbjogXFxcIjEuNVxcXCIsXFxuICAgIGV2YWx1YXRpb25SZXN1bHRzQnlOb2RlSWQ6IG5ldyBNYXAoKSxcXG4gICAgZXh0ZXJuYWxDb250ZXh0RGVzY3JpcHRpb246IFxcXCJUaGUgU3Rvcnlib29rIGZvciB0aGUgRE1OIEVkaXRvclxcXCIsXFxuICAgIGV4dGVybmFsQ29udGV4dE5hbWU6IFxcXCJBcGFjaGUgS0lFIDo6IERNTiBFZGl0b3IgOjogU3Rvcnlib29rXFxcIixcXG4gICAgZXh0ZXJuYWxNb2RlbHNCeU5hbWVzcGFjZToge30sXFxuICAgIGlzc3VlVHJhY2tlckhyZWY6IFxcXCJcXFwiLFxcbiAgICB2YWxpZGF0aW9uTWVzc2FnZXM6IHt9LFxcbiAgICBpc1JlYWRPbmx5OiBmYWxzZSxcXG4gICAgeG1sOiBtYXJzaGFsbGVyLmJ1aWxkZXIuYnVpbGQobW9kZWwpXFxuICB9XFxufVwiLFxuICAgICAgLi4uRW1wdHkucGFyYW1ldGVycz8uZG9jcz8uc291cmNlXG4gICAgfVxuICB9XG59OyIsIi8qXG4gKiBMaWNlbnNlZCB0byB0aGUgQXBhY2hlIFNvZnR3YXJlIEZvdW5kYXRpb24gKEFTRikgdW5kZXIgb25lXG4gKiBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gIFNlZSB0aGUgTk9USUNFIGZpbGVcbiAqIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uXG4gKiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC4gIFRoZSBBU0YgbGljZW5zZXMgdGhpcyBmaWxlXG4gKiB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlXG4gKiBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2VcbiAqIHdpdGggdGhlIExpY2Vuc2UuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLFxuICogc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cbiAqIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXG4gKiBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGVcbiAqIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnNcbiAqIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlLCB1c2VSZWYsIHVzZU1lbW8sIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlQXJncyB9IGZyb20gXCJAc3Rvcnlib29rL3ByZXZpZXctYXBpXCI7XG5pbXBvcnQge1xuICBEbW5FZGl0b3IsXG4gIERtbkVkaXRvclByb3BzLFxuICBEbW5FZGl0b3JSZWYsXG4gIEV2YWx1YXRpb25SZXN1bHRzQnlOb2RlSWQsXG4gIFZhbGlkYXRpb25NZXNzYWdlcyxcbn0gZnJvbSBcIi4uL3NyYy9EbW5FZGl0b3JcIjtcbmltcG9ydCB7IERtbkxhdGVzdE1vZGVsLCBnZXRNYXJzaGFsbGVyIH0gZnJvbSBcIkBraWUtdG9vbHMvZG1uLW1hcnNoYWxsZXJcIjtcbmltcG9ydCB7IG5vcm1hbGl6ZSB9IGZyb20gXCJAa2llLXRvb2xzL2Rtbi1tYXJzaGFsbGVyL2Rpc3Qvbm9ybWFsaXphdGlvbi9ub3JtYWxpemVcIjtcbmltcG9ydCB7IGRpZmYgfSBmcm9tIFwiZGVlcC1vYmplY3QtZGlmZlwiO1xuaW1wb3J0IHsgZ2VuZXJhdGVFbXB0eURtbjE1IH0gZnJvbSBcIi4vbWlzYy9lbXB0eS9FbXB0eS5zdG9yaWVzXCI7XG5cbmV4cG9ydCBjb25zdCBldmFsdWF0aW9uUmVzdWx0c0J5Tm9kZUlkOiBFdmFsdWF0aW9uUmVzdWx0c0J5Tm9kZUlkID0gbmV3IE1hcCgpO1xuZXhwb3J0IGNvbnN0IHZhbGlkYXRpb25NZXNzYWdlczogVmFsaWRhdGlvbk1lc3NhZ2VzID0ge307XG5cbmV4cG9ydCB0eXBlIFN0b3J5Ym9va0RtbkVkaXRvclByb3BzID0gRG1uRWRpdG9yUHJvcHMgJiB7IHhtbDogc3RyaW5nIH07XG5cbmV4cG9ydCBmdW5jdGlvbiBEbW5FZGl0b3JXcmFwcGVyKHByb3BzPzogUGFydGlhbDxTdG9yeWJvb2tEbW5FZGl0b3JQcm9wcz4pIHtcbiAgY29uc3QgW2FyZ3MsIHVwZGF0ZUFyZ3NdID0gdXNlQXJnczxTdG9yeWJvb2tEbW5FZGl0b3JQcm9wcz4oKTtcbiAgY29uc3QgYXJnc0NvcHkgPSB1c2VSZWYoYXJncyk7XG4gIGNvbnN0IHJlZiA9IHVzZVJlZjxEbW5FZGl0b3JSZWY+KG51bGwpO1xuICBjb25zdCBbbW9kZWxBcmdzLCBzZXRNb2RlbEFyZ3NdID0gdXNlU3RhdGU8RG1uTGF0ZXN0TW9kZWw+KGFyZ3MubW9kZWwpO1xuICBjb25zdCBtb2RlbCA9IHVzZU1lbW8oKCkgPT4gcHJvcHM/Lm1vZGVsID8/IG1vZGVsQXJncywgW21vZGVsQXJncywgcHJvcHM/Lm1vZGVsXSk7XG4gIGNvbnN0IFttb2RlbENoYW5nZWQsIHNldE1vZGVsQ2hhbmdlXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgY29uc3QgW2lzUmVhZE9ubHksIHNldElzUmVhZE9ubHldID0gdXNlU3RhdGUocHJvcHM/LmlzUmVhZE9ubHkgPz8gYXJncy5pc1JlYWRPbmx5ID8/IGZhbHNlKTtcblxuICBjb25zdCBvbk1vZGVsQ2hhbmdlID0gdXNlTWVtbyhcbiAgICAoKSA9PiAocHJvcHM/Lm9uTW9kZWxDaGFuZ2UgPyBwcm9wcy5vbk1vZGVsQ2hhbmdlIDogc2V0TW9kZWxBcmdzKSxcbiAgICBbcHJvcHM/Lm9uTW9kZWxDaGFuZ2VdXG4gICk7XG5cbiAgY29uc3Qgb25PcGVuZWRCb3hlZEV4cHJlc3Npb25FZGl0b3JOb2RlQ2hhbmdlTm9PcGVyYXRpb24gPSB1c2VNZW1vKFxuICAgICgpID0+IChuZXdPcGVuZWROb2RlSWQ6IHN0cmluZyB8IHVuZGVmaW5lZCkgPT4ge30sXG4gICAgW11cbiAgKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChhcmdzLmlzUmVhZE9ubHkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgc2V0SXNSZWFkT25seShhcmdzLmlzUmVhZE9ubHkpO1xuICAgIH1cbiAgfSwgW2FyZ3MuaXNSZWFkT25seV0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKE9iamVjdC5rZXlzKGRpZmYoYXJnc0NvcHkuY3VycmVudC5tb2RlbCwgbW9kZWwpKS5sZW5ndGggIT09IDApIHtcbiAgICAgIHVwZGF0ZUFyZ3Moe1xuICAgICAgICAuLi5hcmdzQ29weS5jdXJyZW50LFxuICAgICAgICBtb2RlbDogbW9kZWwsXG4gICAgICAgIHhtbDogZ2V0TWFyc2hhbGxlcihnZW5lcmF0ZUVtcHR5RG1uMTUoKSwgeyB1cGdyYWRlVG86IFwibGF0ZXN0XCIgfSkuYnVpbGRlci5idWlsZChtb2RlbCksXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIFt1cGRhdGVBcmdzLCBtb2RlbF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKE9iamVjdC5rZXlzKGRpZmYoYXJnc0NvcHkuY3VycmVudCwgYXJncykpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBhcmdzQ29weS5jdXJyZW50ID0gYXJncztcbiAgICBpZiAoT2JqZWN0LmtleXMoZGlmZihhcmdzLm1vZGVsLCBtb2RlbCkpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBvbk1vZGVsQ2hhbmdlKG5vcm1hbGl6ZShhcmdzLm1vZGVsKSk7XG4gIH0sIFthcmdzLCBtb2RlbCwgb25Nb2RlbENoYW5nZV0pO1xuXG4gIGNvbnN0IG9uTW9kZWxEZWJvdW5jZVN0YXRlQ2hhbmdlZCA9IHVzZUNhbGxiYWNrKChjaGFuZ2VkOiBib29sZWFuKSA9PiB7XG4gICAgc2V0TW9kZWxDaGFuZ2UoY2hhbmdlZCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7bW9kZWxDaGFuZ2VkICYmIChcbiAgICAgICAgPGRpdiBkYXRhLXRlc3RpZD17XCJzdG9yeWJvb2stLWRtbi1lZGl0b3ItbW9kZWxcIn0gc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX0+XG4gICAgICAgICAge0pTT04uc3RyaW5naWZ5KG1vZGVsKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgICAgPGJ1dHRvblxuICAgICAgICBkYXRhLXRlc3RpZD17XCJzdG9yeWJvb2stLWRtbi1lZGl0b3ItdG9nZ2xlLXJlYWQtb25seVwifVxuICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc1JlYWRPbmx5KChjdXJyZW50VmFsdWUpID0+ICFjdXJyZW50VmFsdWUpfVxuICAgICAgPlxuICAgICAgICB7aXNSZWFkT25seS50b1N0cmluZygpfVxuICAgICAgPC9idXR0b24+XG4gICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiBcImFic29sdXRlXCIsIHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgdG9wOiBcIjBweFwiLCBsZWZ0OiBcIjBweFwiIH19PlxuICAgICAgICA8RG1uRWRpdG9yXG4gICAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgICAgbW9kZWw9e21vZGVsfVxuICAgICAgICAgIG9yaWdpbmFsVmVyc2lvbj17cHJvcHM/Lm9yaWdpbmFsVmVyc2lvbiA/PyBhcmdzLm9yaWdpbmFsVmVyc2lvbn1cbiAgICAgICAgICBpc0V2YWx1YXRpb25IaWdobGlnaHRzU3VwcG9ydGVkPXtcbiAgICAgICAgICAgIHByb3BzPy5pc0V2YWx1YXRpb25IaWdobGlnaHRzU3VwcG9ydGVkID8/IGFyZ3MuaXNFdmFsdWF0aW9uSGlnaGxpZ2h0c1N1cHBvcnRlZFxuICAgICAgICAgIH1cbiAgICAgICAgICBpc1JlYWRPbmx5PXtpc1JlYWRPbmx5fVxuICAgICAgICAgIG9uTW9kZWxDaGFuZ2U9e29uTW9kZWxDaGFuZ2V9XG4gICAgICAgICAgb25PcGVuZWRCb3hlZEV4cHJlc3Npb25FZGl0b3JOb2RlQ2hhbmdlPXtvbk9wZW5lZEJveGVkRXhwcmVzc2lvbkVkaXRvck5vZGVDaGFuZ2VOb09wZXJhdGlvbn1cbiAgICAgICAgICBvblJlcXVlc3RFeHRlcm5hbE1vZGVsQnlQYXRoPXtwcm9wcz8ub25SZXF1ZXN0RXh0ZXJuYWxNb2RlbEJ5UGF0aCA/PyBhcmdzLm9uUmVxdWVzdEV4dGVybmFsTW9kZWxCeVBhdGh9XG4gICAgICAgICAgb25SZXF1ZXN0RXh0ZXJuYWxNb2RlbHNBdmFpbGFibGVUb0luY2x1ZGU9e1xuICAgICAgICAgICAgcHJvcHM/Lm9uUmVxdWVzdEV4dGVybmFsTW9kZWxzQXZhaWxhYmxlVG9JbmNsdWRlID8/IGFyZ3Mub25SZXF1ZXN0RXh0ZXJuYWxNb2RlbHNBdmFpbGFibGVUb0luY2x1ZGVcbiAgICAgICAgICB9XG4gICAgICAgICAgZXh0ZXJuYWxNb2RlbHNCeU5hbWVzcGFjZT17cHJvcHM/LmV4dGVybmFsTW9kZWxzQnlOYW1lc3BhY2UgPz8gYXJncy5leHRlcm5hbE1vZGVsc0J5TmFtZXNwYWNlfVxuICAgICAgICAgIGV4dGVybmFsQ29udGV4dE5hbWU9e3Byb3BzPy5leHRlcm5hbENvbnRleHROYW1lID8/IGFyZ3MuZXh0ZXJuYWxDb250ZXh0TmFtZX1cbiAgICAgICAgICBleHRlcm5hbENvbnRleHREZXNjcmlwdGlvbj17cHJvcHM/LmV4dGVybmFsQ29udGV4dERlc2NyaXB0aW9uID8/IGFyZ3MuZXh0ZXJuYWxDb250ZXh0RGVzY3JpcHRpb259XG4gICAgICAgICAgdmFsaWRhdGlvbk1lc3NhZ2VzPXtwcm9wcz8udmFsaWRhdGlvbk1lc3NhZ2VzID8/IGFyZ3MudmFsaWRhdGlvbk1lc3NhZ2VzfVxuICAgICAgICAgIGV2YWx1YXRpb25SZXN1bHRzQnlOb2RlSWQ9e3Byb3BzPy5ldmFsdWF0aW9uUmVzdWx0c0J5Tm9kZUlkID8/IGFyZ3MuZXZhbHVhdGlvblJlc3VsdHNCeU5vZGVJZH1cbiAgICAgICAgICBpc3N1ZVRyYWNrZXJIcmVmPXtwcm9wcz8uaXNzdWVUcmFja2VySHJlZiA/PyBhcmdzLmlzc3VlVHJhY2tlckhyZWZ9XG4gICAgICAgICAgb25SZXF1ZXN0VG9KdW1wVG9QYXRoPXtwcm9wcz8ub25SZXF1ZXN0VG9KdW1wVG9QYXRoID8/IGFyZ3Mub25SZXF1ZXN0VG9KdW1wVG9QYXRofVxuICAgICAgICAgIG9uTW9kZWxEZWJvdW5jZVN0YXRlQ2hhbmdlZD17b25Nb2RlbERlYm91bmNlU3RhdGVDaGFuZ2VkfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG4iLCJpbXBvcnQgeyBpc0RhdGUsIGlzRW1wdHlPYmplY3QsIGlzT2JqZWN0LCBoYXNPd25Qcm9wZXJ0eSwgbWFrZU9iamVjdFdpdGhvdXRQcm90b3R5cGUgfSBmcm9tICcuL3V0aWxzLmpzJztcblxuY29uc3QgZGlmZiA9IChsaHMsIHJocykgPT4ge1xuICBpZiAobGhzID09PSByaHMpIHJldHVybiB7fTsgLy8gZXF1YWwgcmV0dXJuIG5vIGRpZmZcblxuICBpZiAoIWlzT2JqZWN0KGxocykgfHwgIWlzT2JqZWN0KHJocykpIHJldHVybiByaHM7IC8vIHJldHVybiB1cGRhdGVkIHJoc1xuXG4gIGNvbnN0IGRlbGV0ZWRWYWx1ZXMgPSBPYmplY3Qua2V5cyhsaHMpLnJlZHVjZSgoYWNjLCBrZXkpID0+IHtcbiAgICBpZiAoIWhhc093blByb3BlcnR5KHJocywga2V5KSkge1xuICAgICAgYWNjW2tleV0gPSB1bmRlZmluZWQ7XG4gICAgICBcbiAgICB9XG5cbiAgICByZXR1cm4gYWNjO1xuICB9LCBtYWtlT2JqZWN0V2l0aG91dFByb3RvdHlwZSgpKTtcblxuICBpZiAoaXNEYXRlKGxocykgfHwgaXNEYXRlKHJocykpIHtcbiAgICBpZiAobGhzLnZhbHVlT2YoKSA9PSByaHMudmFsdWVPZigpKSByZXR1cm4ge307XG4gICAgcmV0dXJuIHJocztcbiAgfVxuXG4gIHJldHVybiBPYmplY3Qua2V5cyhyaHMpLnJlZHVjZSgoYWNjLCBrZXkpID0+IHtcbiAgICBpZiAoIWhhc093blByb3BlcnR5KGxocywga2V5KSl7XG4gICAgICBhY2Nba2V5XSA9IHJoc1trZXldOyAvLyByZXR1cm4gYWRkZWQgciBrZXlcbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSBcblxuICAgIGNvbnN0IGRpZmZlcmVuY2UgPSBkaWZmKGxoc1trZXldLCByaHNba2V5XSk7XG5cbiAgICAvLyBJZiB0aGUgZGlmZmVyZW5jZSBpcyBlbXB0eSwgYW5kIHRoZSBsaHMgaXMgYW4gZW1wdHkgb2JqZWN0IG9yIHRoZSByaHMgaXMgbm90IGFuIGVtcHR5IG9iamVjdFxuICAgIGlmIChpc0VtcHR5T2JqZWN0KGRpZmZlcmVuY2UpICYmICFpc0RhdGUoZGlmZmVyZW5jZSkgJiYgKGlzRW1wdHlPYmplY3QobGhzW2tleV0pIHx8ICFpc0VtcHR5T2JqZWN0KHJoc1trZXldKSkpXG4gICAgICByZXR1cm4gYWNjOyAvLyByZXR1cm4gbm8gZGlmZlxuXG4gICAgYWNjW2tleV0gPSBkaWZmZXJlbmNlIC8vIHJldHVybiB1cGRhdGVkIGtleVxuICAgIHJldHVybiBhY2M7IC8vIHJldHVybiB1cGRhdGVkIGtleVxuICB9LCBkZWxldGVkVmFsdWVzKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRpZmY7XG4iLCJleHBvcnQgY29uc3QgaXNEYXRlID0gZCA9PiBkIGluc3RhbmNlb2YgRGF0ZTtcbmV4cG9ydCBjb25zdCBpc0VtcHR5ID0gbyA9PiBPYmplY3Qua2V5cyhvKS5sZW5ndGggPT09IDA7XG5leHBvcnQgY29uc3QgaXNPYmplY3QgPSBvID0+IG8gIT0gbnVsbCAmJiB0eXBlb2YgbyA9PT0gJ29iamVjdCc7XG5leHBvcnQgY29uc3QgaGFzT3duUHJvcGVydHkgPSAobywgLi4uYXJncykgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG8sIC4uLmFyZ3MpXG5leHBvcnQgY29uc3QgaXNFbXB0eU9iamVjdCA9IChvKSA9PiBpc09iamVjdChvKSAmJiBpc0VtcHR5KG8pO1xuZXhwb3J0IGNvbnN0IG1ha2VPYmplY3RXaXRob3V0UHJvdG90eXBlID0gKCkgPT4gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiIsInZhciBiYXNlQXNzaWduVmFsdWUgPSByZXF1aXJlKCcuL19iYXNlQXNzaWduVmFsdWUnKSxcbiAgICBlcSA9IHJlcXVpcmUoJy4vZXEnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBBc3NpZ25zIGB2YWx1ZWAgdG8gYGtleWAgb2YgYG9iamVjdGAgaWYgdGhlIGV4aXN0aW5nIHZhbHVlIGlzIG5vdCBlcXVpdmFsZW50XG4gKiB1c2luZyBbYFNhbWVWYWx1ZVplcm9gXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1zYW1ldmFsdWV6ZXJvKVxuICogZm9yIGVxdWFsaXR5IGNvbXBhcmlzb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBhc3NpZ24uXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBhc3NpZ24uXG4gKi9cbmZ1bmN0aW9uIGFzc2lnblZhbHVlKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICB2YXIgb2JqVmFsdWUgPSBvYmplY3Rba2V5XTtcbiAgaWYgKCEoaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkgJiYgZXEob2JqVmFsdWUsIHZhbHVlKSkgfHxcbiAgICAgICh2YWx1ZSA9PT0gdW5kZWZpbmVkICYmICEoa2V5IGluIG9iamVjdCkpKSB7XG4gICAgYmFzZUFzc2lnblZhbHVlKG9iamVjdCwga2V5LCB2YWx1ZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhc3NpZ25WYWx1ZTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0Q3JlYXRlID0gT2JqZWN0LmNyZWF0ZTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5jcmVhdGVgIHdpdGhvdXQgc3VwcG9ydCBmb3IgYXNzaWduaW5nXG4gKiBwcm9wZXJ0aWVzIHRvIHRoZSBjcmVhdGVkIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHByb3RvIFRoZSBvYmplY3QgdG8gaW5oZXJpdCBmcm9tLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbmV3IG9iamVjdC5cbiAqL1xudmFyIGJhc2VDcmVhdGUgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIG9iamVjdCgpIHt9XG4gIHJldHVybiBmdW5jdGlvbihwcm90bykge1xuICAgIGlmICghaXNPYmplY3QocHJvdG8pKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuICAgIGlmIChvYmplY3RDcmVhdGUpIHtcbiAgICAgIHJldHVybiBvYmplY3RDcmVhdGUocHJvdG8pO1xuICAgIH1cbiAgICBvYmplY3QucHJvdG90eXBlID0gcHJvdG87XG4gICAgdmFyIHJlc3VsdCA9IG5ldyBvYmplY3Q7XG4gICAgb2JqZWN0LnByb3RvdHlwZSA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xufSgpKTtcblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlQ3JlYXRlO1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpLFxuICAgIGlzUHJvdG90eXBlID0gcmVxdWlyZSgnLi9faXNQcm90b3R5cGUnKSxcbiAgICBuYXRpdmVLZXlzSW4gPSByZXF1aXJlKCcuL19uYXRpdmVLZXlzSW4nKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5rZXlzSW5gIHdoaWNoIGRvZXNuJ3QgdHJlYXQgc3BhcnNlIGFycmF5cyBhcyBkZW5zZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gYmFzZUtleXNJbihvYmplY3QpIHtcbiAgaWYgKCFpc09iamVjdChvYmplY3QpKSB7XG4gICAgcmV0dXJuIG5hdGl2ZUtleXNJbihvYmplY3QpO1xuICB9XG4gIHZhciBpc1Byb3RvID0gaXNQcm90b3R5cGUob2JqZWN0KSxcbiAgICAgIHJlc3VsdCA9IFtdO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICBpZiAoIShrZXkgPT0gJ2NvbnN0cnVjdG9yJyAmJiAoaXNQcm90byB8fCAhaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkpKSkge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlS2V5c0luO1xuIiwidmFyIFVpbnQ4QXJyYXkgPSByZXF1aXJlKCcuL19VaW50OEFycmF5Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIGBhcnJheUJ1ZmZlcmAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXlCdWZmZXJ9IGFycmF5QnVmZmVyIFRoZSBhcnJheSBidWZmZXIgdG8gY2xvbmUuXG4gKiBAcmV0dXJucyB7QXJyYXlCdWZmZXJ9IFJldHVybnMgdGhlIGNsb25lZCBhcnJheSBidWZmZXIuXG4gKi9cbmZ1bmN0aW9uIGNsb25lQXJyYXlCdWZmZXIoYXJyYXlCdWZmZXIpIHtcbiAgdmFyIHJlc3VsdCA9IG5ldyBhcnJheUJ1ZmZlci5jb25zdHJ1Y3RvcihhcnJheUJ1ZmZlci5ieXRlTGVuZ3RoKTtcbiAgbmV3IFVpbnQ4QXJyYXkocmVzdWx0KS5zZXQobmV3IFVpbnQ4QXJyYXkoYXJyYXlCdWZmZXIpKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjbG9uZUFycmF5QnVmZmVyO1xuIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZXhwb3J0c2AuICovXG52YXIgZnJlZUV4cG9ydHMgPSB0eXBlb2YgZXhwb3J0cyA9PSAnb2JqZWN0JyAmJiBleHBvcnRzICYmICFleHBvcnRzLm5vZGVUeXBlICYmIGV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgbW9kdWxlYC4gKi9cbnZhciBmcmVlTW9kdWxlID0gZnJlZUV4cG9ydHMgJiYgdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiYgIW1vZHVsZS5ub2RlVHlwZSAmJiBtb2R1bGU7XG5cbi8qKiBEZXRlY3QgdGhlIHBvcHVsYXIgQ29tbW9uSlMgZXh0ZW5zaW9uIGBtb2R1bGUuZXhwb3J0c2AuICovXG52YXIgbW9kdWxlRXhwb3J0cyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5leHBvcnRzID09PSBmcmVlRXhwb3J0cztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgQnVmZmVyID0gbW9kdWxlRXhwb3J0cyA/IHJvb3QuQnVmZmVyIDogdW5kZWZpbmVkLFxuICAgIGFsbG9jVW5zYWZlID0gQnVmZmVyID8gQnVmZmVyLmFsbG9jVW5zYWZlIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiAgYGJ1ZmZlcmAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QnVmZmVyfSBidWZmZXIgVGhlIGJ1ZmZlciB0byBjbG9uZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgY2xvbmUuXG4gKiBAcmV0dXJucyB7QnVmZmVyfSBSZXR1cm5zIHRoZSBjbG9uZWQgYnVmZmVyLlxuICovXG5mdW5jdGlvbiBjbG9uZUJ1ZmZlcihidWZmZXIsIGlzRGVlcCkge1xuICBpZiAoaXNEZWVwKSB7XG4gICAgcmV0dXJuIGJ1ZmZlci5zbGljZSgpO1xuICB9XG4gIHZhciBsZW5ndGggPSBidWZmZXIubGVuZ3RoLFxuICAgICAgcmVzdWx0ID0gYWxsb2NVbnNhZmUgPyBhbGxvY1Vuc2FmZShsZW5ndGgpIDogbmV3IGJ1ZmZlci5jb25zdHJ1Y3RvcihsZW5ndGgpO1xuXG4gIGJ1ZmZlci5jb3B5KHJlc3VsdCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2xvbmVCdWZmZXI7XG4iLCJ2YXIgY2xvbmVBcnJheUJ1ZmZlciA9IHJlcXVpcmUoJy4vX2Nsb25lQXJyYXlCdWZmZXInKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgYHR5cGVkQXJyYXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gdHlwZWRBcnJheSBUaGUgdHlwZWQgYXJyYXkgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlZXBdIFNwZWNpZnkgYSBkZWVwIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2xvbmVkIHR5cGVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBjbG9uZVR5cGVkQXJyYXkodHlwZWRBcnJheSwgaXNEZWVwKSB7XG4gIHZhciBidWZmZXIgPSBpc0RlZXAgPyBjbG9uZUFycmF5QnVmZmVyKHR5cGVkQXJyYXkuYnVmZmVyKSA6IHR5cGVkQXJyYXkuYnVmZmVyO1xuICByZXR1cm4gbmV3IHR5cGVkQXJyYXkuY29uc3RydWN0b3IoYnVmZmVyLCB0eXBlZEFycmF5LmJ5dGVPZmZzZXQsIHR5cGVkQXJyYXkubGVuZ3RoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjbG9uZVR5cGVkQXJyYXk7XG4iLCIvKipcbiAqIENvcGllcyB0aGUgdmFsdWVzIG9mIGBzb3VyY2VgIHRvIGBhcnJheWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IHNvdXJjZSBUaGUgYXJyYXkgdG8gY29weSB2YWx1ZXMgZnJvbS5cbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheT1bXV0gVGhlIGFycmF5IHRvIGNvcHkgdmFsdWVzIHRvLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIGBhcnJheWAuXG4gKi9cbmZ1bmN0aW9uIGNvcHlBcnJheShzb3VyY2UsIGFycmF5KSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gc291cmNlLmxlbmd0aDtcblxuICBhcnJheSB8fCAoYXJyYXkgPSBBcnJheShsZW5ndGgpKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBhcnJheVtpbmRleF0gPSBzb3VyY2VbaW5kZXhdO1xuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb3B5QXJyYXk7XG4iLCJ2YXIgYXNzaWduVmFsdWUgPSByZXF1aXJlKCcuL19hc3NpZ25WYWx1ZScpLFxuICAgIGJhc2VBc3NpZ25WYWx1ZSA9IHJlcXVpcmUoJy4vX2Jhc2VBc3NpZ25WYWx1ZScpO1xuXG4vKipcbiAqIENvcGllcyBwcm9wZXJ0aWVzIG9mIGBzb3VyY2VgIHRvIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIGZyb20uXG4gKiBAcGFyYW0ge0FycmF5fSBwcm9wcyBUaGUgcHJvcGVydHkgaWRlbnRpZmllcnMgdG8gY29weS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0PXt9XSBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyB0by5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjdXN0b21pemVyXSBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvcGllZCB2YWx1ZXMuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBjb3B5T2JqZWN0KHNvdXJjZSwgcHJvcHMsIG9iamVjdCwgY3VzdG9taXplcikge1xuICB2YXIgaXNOZXcgPSAhb2JqZWN0O1xuICBvYmplY3QgfHwgKG9iamVjdCA9IHt9KTtcblxuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHByb3BzLmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBrZXkgPSBwcm9wc1tpbmRleF07XG5cbiAgICB2YXIgbmV3VmFsdWUgPSBjdXN0b21pemVyXG4gICAgICA/IGN1c3RvbWl6ZXIob2JqZWN0W2tleV0sIHNvdXJjZVtrZXldLCBrZXksIG9iamVjdCwgc291cmNlKVxuICAgICAgOiB1bmRlZmluZWQ7XG5cbiAgICBpZiAobmV3VmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgbmV3VmFsdWUgPSBzb3VyY2Vba2V5XTtcbiAgICB9XG4gICAgaWYgKGlzTmV3KSB7XG4gICAgICBiYXNlQXNzaWduVmFsdWUob2JqZWN0LCBrZXksIG5ld1ZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXNzaWduVmFsdWUob2JqZWN0LCBrZXksIG5ld1ZhbHVlKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG9iamVjdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb3B5T2JqZWN0O1xuIiwidmFyIGJhc2VDcmVhdGUgPSByZXF1aXJlKCcuL19iYXNlQ3JlYXRlJyksXG4gICAgZ2V0UHJvdG90eXBlID0gcmVxdWlyZSgnLi9fZ2V0UHJvdG90eXBlJyksXG4gICAgaXNQcm90b3R5cGUgPSByZXF1aXJlKCcuL19pc1Byb3RvdHlwZScpO1xuXG4vKipcbiAqIEluaXRpYWxpemVzIGFuIG9iamVjdCBjbG9uZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgaW5pdGlhbGl6ZWQgY2xvbmUuXG4gKi9cbmZ1bmN0aW9uIGluaXRDbG9uZU9iamVjdChvYmplY3QpIHtcbiAgcmV0dXJuICh0eXBlb2Ygb2JqZWN0LmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgIWlzUHJvdG90eXBlKG9iamVjdCkpXG4gICAgPyBiYXNlQ3JlYXRlKGdldFByb3RvdHlwZShvYmplY3QpKVxuICAgIDoge307XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5pdENsb25lT2JqZWN0O1xuIiwiLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIGxpa2VcbiAqIFtgT2JqZWN0LmtleXNgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3Qua2V5cylcbiAqIGV4Y2VwdCB0aGF0IGl0IGluY2x1ZGVzIGluaGVyaXRlZCBlbnVtZXJhYmxlIHByb3BlcnRpZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIG5hdGl2ZUtleXNJbihvYmplY3QpIHtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBpZiAob2JqZWN0ICE9IG51bGwpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gT2JqZWN0KG9iamVjdCkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbmF0aXZlS2V5c0luO1xuIiwidmFyIGFycmF5TGlrZUtleXMgPSByZXF1aXJlKCcuL19hcnJheUxpa2VLZXlzJyksXG4gICAgYmFzZUtleXNJbiA9IHJlcXVpcmUoJy4vX2Jhc2VLZXlzSW4nKSxcbiAgICBpc0FycmF5TGlrZSA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2UnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gYW5kIGluaGVyaXRlZCBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIGBvYmplY3RgLlxuICpcbiAqICoqTm90ZToqKiBOb24tb2JqZWN0IHZhbHVlcyBhcmUgY29lcmNlZCB0byBvYmplY3RzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy4wLjBcbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIEZvbygpIHtcbiAqICAgdGhpcy5hID0gMTtcbiAqICAgdGhpcy5iID0gMjtcbiAqIH1cbiAqXG4gKiBGb28ucHJvdG90eXBlLmMgPSAzO1xuICpcbiAqIF8ua2V5c0luKG5ldyBGb28pO1xuICogLy8gPT4gWydhJywgJ2InLCAnYyddIChpdGVyYXRpb24gb3JkZXIgaXMgbm90IGd1YXJhbnRlZWQpXG4gKi9cbmZ1bmN0aW9uIGtleXNJbihvYmplY3QpIHtcbiAgcmV0dXJuIGlzQXJyYXlMaWtlKG9iamVjdCkgPyBhcnJheUxpa2VLZXlzKG9iamVjdCwgdHJ1ZSkgOiBiYXNlS2V5c0luKG9iamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ga2V5c0luO1xuIl0sIm5hbWVzIjpbImdldE1hcnNoYWxsZXIiLCJucyIsImRtbjE1bnMiLCJnZW5lcmF0ZVV1aWQiLCJETU4xNV9TUEVDIiwiRG1uRWRpdG9yV3JhcHBlciIsIkRtbkVkaXRvciIsImdlbmVyYXRlRW1wdHlEbW4xNSIsImdldCIsImV4cHJlc3Npb25MYW5ndWFnZSIsImRlZmF1bHQiLCJtZXRhIiwidGl0bGUiLCJjb21wb25lbnQiLCJpbmNsdWRlU3RvcmllcyIsIm1hcnNoYWxsZXIiLCJ1cGdyYWRlVG8iLCJtb2RlbCIsInBhcnNlciIsInBhcnNlIiwiRW1wdHkiLCJyZW5kZXIiLCJhcmdzIiwib3JpZ2luYWxWZXJzaW9uIiwiZXZhbHVhdGlvblJlc3VsdHNCeU5vZGVJZCIsIk1hcCIsImV4dGVybmFsQ29udGV4dERlc2NyaXB0aW9uIiwiZXh0ZXJuYWxDb250ZXh0TmFtZSIsImV4dGVybmFsTW9kZWxzQnlOYW1lc3BhY2UiLCJpc3N1ZVRyYWNrZXJIcmVmIiwidmFsaWRhdGlvbk1lc3NhZ2VzIiwiaXNSZWFkT25seSIsInhtbCIsImJ1aWxkZXIiLCJidWlsZCIsInBhcmFtZXRlcnMiLCJkb2NzIiwiX2EiLCJzb3VyY2UiLCJvcmlnaW5hbFNvdXJjZSIsIl9jIiwiX2IiLCJfX25hbWVkRXhwb3J0c09yZGVyIiwidXNlQ2FsbGJhY2siLCJ1c2VTdGF0ZSIsInVzZVJlZiIsInVzZU1lbW8iLCJ1c2VFZmZlY3QiLCJ1c2VBcmdzIiwibm9ybWFsaXplIiwiZGlmZiIsInByb3BzIiwidXBkYXRlQXJncyIsImFyZ3NDb3B5IiwicmVmIiwibW9kZWxBcmdzIiwic2V0TW9kZWxBcmdzIiwibW9kZWxDaGFuZ2VkIiwic2V0TW9kZWxDaGFuZ2UiLCJzZXRJc1JlYWRPbmx5Iiwib25Nb2RlbENoYW5nZSIsIm9uT3BlbmVkQm94ZWRFeHByZXNzaW9uRWRpdG9yTm9kZUNoYW5nZU5vT3BlcmF0aW9uIiwibmV3T3BlbmVkTm9kZUlkIiwidW5kZWZpbmVkIiwiT2JqZWN0Iiwia2V5cyIsImN1cnJlbnQiLCJsZW5ndGgiLCJvbk1vZGVsRGVib3VuY2VTdGF0ZUNoYW5nZWQiLCJjaGFuZ2VkIiwiX2pzeHMiLCJfRnJhZ21lbnQiLCJjaGlsZHJlbiIsIl9qc3giLCJzdHlsZSIsImRpc3BsYXkiLCJKU09OIiwic3RyaW5naWZ5Iiwib25DbGljayIsImN1cnJlbnRWYWx1ZSIsInRvU3RyaW5nIiwicG9zaXRpb24iLCJ3aWR0aCIsImhlaWdodCIsInRvcCIsImxlZnQiLCJpc0V2YWx1YXRpb25IaWdobGlnaHRzU3VwcG9ydGVkIiwiX2QiLCJvbk9wZW5lZEJveGVkRXhwcmVzc2lvbkVkaXRvck5vZGVDaGFuZ2UiLCJvblJlcXVlc3RFeHRlcm5hbE1vZGVsQnlQYXRoIiwiX2UiLCJvblJlcXVlc3RFeHRlcm5hbE1vZGVsc0F2YWlsYWJsZVRvSW5jbHVkZSIsIl9mIiwiX2ciLCJfaCIsIl9qIiwiX2siLCJfbCIsIl9tIiwib25SZXF1ZXN0VG9KdW1wVG9QYXRoIiwiX28iXSwic291cmNlUm9vdCI6IiJ9