"use strict";
(self["webpackChunk_kie_tools_dmn_editor"] = self["webpackChunk_kie_tools_dmn_editor"] || []).push([["misc-empty-Empty-stories"],{

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
    externalContextDescription: "",
    externalContextName: "Storybook - DMN Editor",
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
      originalSource: "{\n  render: args => DmnEditorWrapper(),\n  args: {\n    model: model,\n    originalVersion: \"1.5\",\n    evaluationResultsByNodeId: new Map(),\n    externalContextDescription: \"\",\n    externalContextName: \"Storybook - DMN Editor\",\n    externalModelsByNamespace: {},\n    issueTrackerHref: \"\",\n    validationMessages: {},\n    isReadOnly: false,\n    xml: marshaller.builder.build(model)\n  }\n}",
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
    DmnEditorWrapper.__docgenInfo = { "description": "", "displayName": "DmnEditorWrapper", "props": { "model": { "defaultValue": null, "description": "The DMN itself.", "name": "model", "required": false, "type": { "name": "DmnLatestModel" } }, "originalVersion": { "defaultValue": null, "description": "The original version of `model` before upgrading to `latest`.", "name": "originalVersion", "required": false, "type": { "name": "enum", "value": [{ "value": "\"1.0\"" }, { "value": "\"1.1\"" }, { "value": "\"1.2\"" }, { "value": "\"1.3\"" }, { "value": "\"1.4\"" }, { "value": "\"1.5\"" }] } }, "onModelChange": { "defaultValue": null, "description": "Called when a change occurs on `model`, so the controlled flow of the component can be done.", "name": "onModelChange", "required": false, "type": { "name": "OnDmnModelChange" } }, "onRequestExternalModelByPath": { "defaultValue": null, "description": "Called when the contents of a specific available model is necessary. Used by the \"Included models\" tab.", "name": "onRequestExternalModelByPath", "required": false, "type": { "name": "OnRequestExternalModelByPath" } }, "onRequestExternalModelsAvailableToInclude": { "defaultValue": null, "description": "Called when the list of paths of available models to be included is needed. Used by the \"Included models\" tab.", "name": "onRequestExternalModelsAvailableToInclude", "required": false, "type": { "name": "OnRequestExternalModelsAvailableToInclude" } }, "externalModelsByNamespace": { "defaultValue": null, "description": "When the DMN represented by `model` (\"This DMN\") contains `import`ed models, this prop needs to map their contents by namespace.\nThe DMN model won't be correctly rendered if an included model is not found on this object.", "name": "externalModelsByNamespace", "required": false, "type": { "name": "ExternalModelsIndex" } }, "evaluationResultsByNodeId": { "defaultValue": null, "description": "To show information about evaluation results directly on the DMN diagram and/or Boxed Expression Editor, use this prop.", "name": "evaluationResultsByNodeId", "required": false, "type": { "name": "EvaluationResultsByNodeId" } }, "validationMessages": { "defaultValue": null, "description": "To show information about validation messages directly on the DMN diagram and/or Boxed Expression Editor, use this prop.", "name": "validationMessages", "required": false, "type": { "name": "ValidationMessages" } }, "externalContextName": { "defaultValue": null, "description": "The name of context in which this instance of DMN Editor is running. For example, if this DMN Editor instance\nis displaying a model from a project called \"My project\", you could use `externalContextName={\"My project\"}`", "name": "externalContextName", "required": false, "type": { "name": "string" } }, "externalContextDescription": { "defaultValue": null, "description": "Describe the context in which this instance of DMN Editor is running. For example, if this DMN Editor instance\nis displaying a model from a project called \"My project\", you could use\n`externalContextDescription={'All models (DMN and PMML) of \"My project\" are available.'}`", "name": "externalContextDescription", "required": false, "type": { "name": "string" } }, "issueTrackerHref": { "defaultValue": null, "description": "A link that will take users to an issue tracker so they can report problems they find on the DMN Editor.\nThis is shown on the ErrorBoundary fallback component, when an uncaught error happens.", "name": "issueTrackerHref", "required": false, "type": { "name": "string" } }, "isReadOnly": { "defaultValue": null, "description": "A flag to enable read-only mode on the DMN Editor.\nWhen enabled navigation is still possible (e.g. entering the Boxed Expression Editor, Data Types and Included Models),\nbut no changes can be made and the model itself is unaltered.", "name": "isReadOnly", "required": false, "type": { "name": "boolean" } }, "onRequestToJumpToPath": { "defaultValue": null, "description": "When users want to jump to another file, this method is called, allowing the controller of this component decide what to do.\nLinks are only rendered if this is provided. Otherwise, paths will be rendered as text.", "name": "onRequestToJumpToPath", "required": false, "type": { "name": "OnRequestToJumpToPath" } }, "onRequestToResolvePath": { "defaultValue": null, "description": "All paths inside the DMN Editor are relative. To be able to resolve them and display them as absolute paths, this function is called.\nIf undefined, the relative paths will be displayed.", "name": "onRequestToResolvePath", "required": false, "type": { "name": "OnRequestToResolvePath" } }, "onModelDebounceStateChanged": { "defaultValue": null, "description": "Notifies the caller when the DMN Editor performs a new edit after the debounce time.", "name": "onModelDebounceStateChanged", "required": false, "type": { "name": "((changed: boolean) => void)" } }, "onOpenedBoxedExpressionEditorNodeChange": { "defaultValue": null, "description": "", "name": "onOpenedBoxedExpressionEditorNodeChange", "required": false, "type": { "name": "((newOpenedNodeId: string) => void)" } }, "xml": { "defaultValue": null, "description": "", "name": "xml", "required": false, "type": { "name": "string" } } } };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlzYy1lbXB0eS1FbXB0eS1zdG9yaWVzLmI1N2MyNDg0LmlmcmFtZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQjBEO0FBQ2lDO0FBQ2I7QUFDUTtBQUNJO0FBQ3ZCO0FBQzVELE1BQU1PLGtCQUFrQixHQUFHQSxDQUFBLEtBQU07O1dBRTdCTCwwRkFBTyxDQUFDTSxHQUFHLENBQUMsRUFBRSxDQUFDO3dCQUNGSixnR0FBVSxDQUFDSyxrQkFBa0IsQ0FBQ0MsT0FBTzswQ0FDbkJQLDRGQUFZLEVBQUU7UUFDaERBLDRGQUFZLEVBQUU7YUFDVEEsNEZBQVksRUFBRTtlQUNaO0FBQ2YsTUFBTVEsSUFBSSxHQUF5QjtFQUNqQ0MsS0FBSyxFQUFFLFlBQVk7RUFDbkJDLFNBQVMsRUFBRVAscURBQVM7RUFDcEJRLGNBQWMsRUFBRTtDQUNqQjtBQUNELGlFQUFlSCxJQUFJLEVBQUM7QUFFcEIsTUFBTUksVUFBVSxHQUFHZix3RUFBYSxDQUFDTyxrQkFBa0IsRUFBRSxFQUFFO0VBQ3JEUyxTQUFTLEVBQUU7Q0FDWixDQUFDO0FBQ0YsTUFBTUMsS0FBSyxHQUFHRixVQUFVLENBQUNHLE1BQU0sQ0FBQ0MsS0FBSyxFQUFFO0FBQ2hDLE1BQU1DLEtBQUssR0FBVTtFQUMxQkMsTUFBTSxFQUFFQyxJQUFJLElBQUlqQiwwRUFBZ0IsRUFBRTtFQUNsQ2lCLElBQUksRUFBRTtJQUNKTCxLQUFLLEVBQUVBLEtBQUs7SUFDWk0sZUFBZSxFQUFFLEtBQUs7SUFDdEJDLHlCQUF5QixFQUFFLElBQUlDLEdBQUcsRUFBRTtJQUNwQ0MsMEJBQTBCLEVBQUUsRUFBRTtJQUM5QkMsbUJBQW1CLEVBQUUsd0JBQXdCO0lBQzdDQyx5QkFBeUIsRUFBRSxFQUFFO0lBQzdCQyxnQkFBZ0IsRUFBRSxFQUFFO0lBQ3BCQyxrQkFBa0IsRUFBRSxFQUFFO0lBQ3RCQyxVQUFVLEVBQUUsS0FBSztJQUNqQkMsR0FBRyxFQUFFakIsVUFBVSxDQUFDa0IsT0FBTyxDQUFDQyxLQUFLLENBQUNqQixLQUFLOztDQUV0QztBQUNERyxLQUFLLENBQUNlLFVBQVUsR0FBRztFQUNqQixHQUFHZixLQUFLLENBQUNlLFVBQVU7RUFDbkJDLElBQUksRUFBRTtJQUNKLElBQUcsQ0FBQUMsRUFBQSxHQUFBakIsS0FBSyxDQUFDZSxVQUFVLGNBQUFFLEVBQUEsdUJBQUFBLEVBQUEsQ0FBRUQsSUFBSTtJQUN6QkUsTUFBTSxFQUFFO01BQ05DLGNBQWMsRUFBRSx1WkFBdVo7TUFDdmEsSUFBRyxDQUFBQyxFQUFBLElBQUFDLEVBQUEsR0FBQXJCLEtBQUssQ0FBQ2UsVUFBVSxjQUFBTSxFQUFBLHVCQUFBQSxFQUFBLENBQUVMLElBQUksY0FBQUksRUFBQSx1QkFBQUEsRUFBQSxDQUFFRixNQUFNOzs7Q0FHdEM7QUFBQyxNQUFBSSxtQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakR3RTtBQUN6QjtBQU92QjtBQUNnRDtBQUNTO0FBQzNDO0FBQ3dCO0FBRXpELE1BQU1sQix5QkFBeUIsR0FBOEIsSUFBSUMsR0FBRyxFQUFFO0FBQ3RFLE1BQU1LLGtCQUFrQixHQUF1QixFQUFFO0FBSWxELFNBQVV6QixnQkFBZ0JBLENBQUM4QyxLQUF3Qzs7RUFDdkUsTUFBTSxDQUFDN0IsSUFBSSxFQUFFOEIsVUFBVSxDQUFDLEdBQUdKLCtEQUFPLEVBQTJCO0VBQzdELE1BQU1LLFFBQVEsR0FBR1IsNkNBQU0sQ0FBQ3ZCLElBQUksQ0FBQztFQUM3QixNQUFNZ0MsR0FBRyxHQUFHVCw2Q0FBTSxDQUFlLElBQUksQ0FBQztFQUN0QyxNQUFNLENBQUNVLFNBQVMsRUFBRUMsWUFBWSxDQUFDLEdBQUdaLCtDQUFRLENBQWlCdEIsSUFBSSxDQUFDTCxLQUFLLENBQUM7RUFDdEUsTUFBTUEsS0FBSyxHQUFHNkIsOENBQU8sQ0FBQyxNQUFLO0lBQUEsSUFBQVQsRUFBQTtJQUFDLFFBQUFBLEVBQUEsR0FBQWMsS0FBSyxhQUFMQSxLQUFLLHVCQUFMQSxLQUFLLENBQUVsQyxLQUFLLGNBQUFvQixFQUFBLGNBQUFBLEVBQUEsR0FBSWtCLFNBQVM7RUFBQSxHQUFFLENBQUNBLFNBQVMsRUFBRUosS0FBSyxhQUFMQSxLQUFLLHVCQUFMQSxLQUFLLENBQUVsQyxLQUFLLENBQUMsQ0FBQztFQUNqRixNQUFNLENBQUN3QyxZQUFZLEVBQUVDLGNBQWMsQ0FBQyxHQUFHZCwrQ0FBUSxDQUFVLEtBQUssQ0FBQztFQUMvRCxNQUFNLENBQUNiLFVBQVUsRUFBRTRCLGFBQWEsQ0FBQyxHQUFHZiwrQ0FBUSxDQUFDLENBQUFILEVBQUEsSUFBQUosRUFBQSxHQUFBYyxLQUFLLGFBQUxBLEtBQUssdUJBQUxBLEtBQUssQ0FBRXBCLFVBQVUsY0FBQU0sRUFBQSxjQUFBQSxFQUFBLEdBQUlmLElBQUksQ0FBQ1MsVUFBVSxjQUFBVSxFQUFBLGNBQUFBLEVBQUEsR0FBSSxLQUFLLENBQUM7RUFFM0YsTUFBTW1CLGFBQWEsR0FBR2QsOENBQU8sQ0FDM0IsTUFBTyxDQUFBSyxLQUFLLGFBQUxBLEtBQUssdUJBQUxBLEtBQUssQ0FBRVMsYUFBYSxJQUFHVCxLQUFLLENBQUNTLGFBQWEsR0FBR0osWUFBYSxFQUNqRSxDQUFDTCxLQUFLLGFBQUxBLEtBQUssdUJBQUxBLEtBQUssQ0FBRVMsYUFBYSxDQUFDLENBQ3ZCO0VBRUQsTUFBTUMsa0RBQWtELEdBQUdmLDhDQUFPLENBQ2hFLE1BQU9nQixlQUFtQyxJQUFJLENBQUUsQ0FBQyxFQUNqRCxFQUFFLENBQ0g7RUFFRGYsZ0RBQVMsQ0FBQyxNQUFLO0lBQ2IsSUFBSXpCLElBQUksQ0FBQ1MsVUFBVSxLQUFLZ0MsU0FBUyxFQUFFO01BQ2pDSixhQUFhLENBQUNyQyxJQUFJLENBQUNTLFVBQVUsQ0FBQztJQUNoQztFQUNGLENBQUMsRUFBRSxDQUFDVCxJQUFJLENBQUNTLFVBQVUsQ0FBQyxDQUFDO0VBRXJCZ0IsZ0RBQVMsQ0FBQyxNQUFLO0lBQ2IsSUFBSWlCLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDZiw0REFBSSxDQUFDRyxRQUFRLENBQUNhLE9BQU8sQ0FBQ2pELEtBQUssRUFBRUEsS0FBSyxDQUFDLENBQUMsQ0FBQ2tELE1BQU0sS0FBSyxDQUFDLEVBQUU7TUFDakVmLFVBQVUsQ0FBQztRQUNULEdBQUdDLFFBQVEsQ0FBQ2EsT0FBTztRQUNuQmpELEtBQUssRUFBRUEsS0FBSztRQUNaZSxHQUFHLEVBQUVoQyx3RUFBYSxDQUFDTyw2RUFBa0IsRUFBRSxFQUFFO1VBQUVTLFNBQVMsRUFBRTtRQUFRLENBQUUsQ0FBQyxDQUFDaUIsT0FBTyxDQUFDQyxLQUFLLENBQUNqQixLQUFLO09BQ3RGLENBQUM7SUFDSjtFQUNGLENBQUMsRUFBRSxDQUFDbUMsVUFBVSxFQUFFbkMsS0FBSyxDQUFDLENBQUM7RUFFdkI4QixnREFBUyxDQUFDLE1BQUs7SUFDYixJQUFJaUIsTUFBTSxDQUFDQyxJQUFJLENBQUNmLDREQUFJLENBQUNHLFFBQVEsQ0FBQ2EsT0FBTyxFQUFFNUMsSUFBSSxDQUFDLENBQUMsQ0FBQzZDLE1BQU0sS0FBSyxDQUFDLEVBQUU7TUFDMUQ7SUFDRjtJQUNBZCxRQUFRLENBQUNhLE9BQU8sR0FBRzVDLElBQUk7SUFDdkIsSUFBSTBDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDZiw0REFBSSxDQUFDNUIsSUFBSSxDQUFDTCxLQUFLLEVBQUVBLEtBQUssQ0FBQyxDQUFDLENBQUNrRCxNQUFNLEtBQUssQ0FBQyxFQUFFO01BQ3JEO0lBQ0Y7SUFDQVAsYUFBYSxDQUFDWCxpR0FBUyxDQUFDM0IsSUFBSSxDQUFDTCxLQUFLLENBQUMsQ0FBQztFQUN0QyxDQUFDLEVBQUUsQ0FBQ0ssSUFBSSxFQUFFTCxLQUFLLEVBQUUyQyxhQUFhLENBQUMsQ0FBQztFQUVoQyxNQUFNUSwyQkFBMkIsR0FBR3pCLGtEQUFXLENBQUUwQixPQUFnQixJQUFJO0lBQ25FWCxjQUFjLENBQUNXLE9BQU8sQ0FBQztFQUN6QixDQUFDLEVBQUUsRUFBRSxDQUFDO0VBRU4sT0FDRUMsdURBQUEsQ0FBQUMsdURBQUE7SUFBQUMsUUFBQSxHQUNHZixZQUFZLElBQ1hnQixzREFBQTtNQUFBLGVBQWtCLDZCQUE2QjtNQUFFQyxLQUFLLEVBQUU7UUFBRUMsT0FBTyxFQUFFO01BQU0sQ0FBRTtNQUFBSCxRQUFBLEVBQ3hFSSxJQUFJLENBQUNDLFNBQVMsQ0FBQzVELEtBQUs7SUFBQyxFQUV6QixFQUNEd0Qsc0RBQUE7TUFBQSxlQUNlLHdDQUF3QztNQUNyREMsS0FBSyxFQUFFO1FBQUVDLE9BQU8sRUFBRTtNQUFNLENBQUU7TUFDMUJHLE9BQU8sRUFBRUEsQ0FBQSxLQUFNbkIsYUFBYSxDQUFFb0IsWUFBWSxJQUFLLENBQUNBLFlBQVksQ0FBQztNQUFBUCxRQUFBLEVBRTVEekMsVUFBVSxDQUFDaUQsUUFBUTtJQUFFLEVBQ2YsRUFDVFAsc0RBQUE7TUFBS0MsS0FBSyxFQUFFO1FBQUVPLFFBQVEsRUFBRSxVQUFVO1FBQUVDLEtBQUssRUFBRSxNQUFNO1FBQUVDLE1BQU0sRUFBRSxNQUFNO1FBQUVDLEdBQUcsRUFBRSxLQUFLO1FBQUVDLElBQUksRUFBRTtNQUFLLENBQUU7TUFBQWIsUUFBQSxFQUMxRkMsc0RBQUEsQ0FBQ25FLHFEQUFTO1FBQ1JnRCxHQUFHLEVBQUVBLEdBQUc7UUFDUnJDLEtBQUssRUFBRUEsS0FBSztRQUNaTSxlQUFlLEVBQUUsQ0FBQWlCLEVBQUEsR0FBQVcsS0FBSyxhQUFMQSxLQUFLLHVCQUFMQSxLQUFLLENBQUU1QixlQUFlLGNBQUFpQixFQUFBLGNBQUFBLEVBQUEsR0FBSWxCLElBQUksQ0FBQ0MsZUFBZTtRQUMvRFEsVUFBVSxFQUFFQSxVQUFVO1FBQ3RCNkIsYUFBYSxFQUFFQSxhQUFhO1FBQzVCMEIsdUNBQXVDLEVBQUV6QixrREFBa0Q7UUFDM0YwQiw0QkFBNEIsRUFBRSxDQUFBQyxFQUFBLEdBQUFyQyxLQUFLLGFBQUxBLEtBQUssdUJBQUxBLEtBQUssQ0FBRW9DLDRCQUE0QixjQUFBQyxFQUFBLGNBQUFBLEVBQUEsR0FBSWxFLElBQUksQ0FBQ2lFLDRCQUE0QjtRQUN0R0UseUNBQXlDLEVBQ3ZDLENBQUFDLEVBQUEsR0FBQXZDLEtBQUssYUFBTEEsS0FBSyx1QkFBTEEsS0FBSyxDQUFFc0MseUNBQXlDLGNBQUFDLEVBQUEsY0FBQUEsRUFBQSxHQUFJcEUsSUFBSSxDQUFDbUUseUNBQXlDO1FBRXBHN0QseUJBQXlCLEVBQUUsQ0FBQStELEVBQUEsR0FBQXhDLEtBQUssYUFBTEEsS0FBSyx1QkFBTEEsS0FBSyxDQUFFdkIseUJBQXlCLGNBQUErRCxFQUFBLGNBQUFBLEVBQUEsR0FBSXJFLElBQUksQ0FBQ00seUJBQXlCO1FBQzdGRCxtQkFBbUIsRUFBRSxDQUFBaUUsRUFBQSxHQUFBekMsS0FBSyxhQUFMQSxLQUFLLHVCQUFMQSxLQUFLLENBQUV4QixtQkFBbUIsY0FBQWlFLEVBQUEsY0FBQUEsRUFBQSxHQUFJdEUsSUFBSSxDQUFDSyxtQkFBbUI7UUFDM0VELDBCQUEwQixFQUFFLENBQUFtRSxFQUFBLEdBQUExQyxLQUFLLGFBQUxBLEtBQUssdUJBQUxBLEtBQUssQ0FBRXpCLDBCQUEwQixjQUFBbUUsRUFBQSxjQUFBQSxFQUFBLEdBQUl2RSxJQUFJLENBQUNJLDBCQUEwQjtRQUNoR0ksa0JBQWtCLEVBQUUsQ0FBQWdFLEVBQUEsR0FBQTNDLEtBQUssYUFBTEEsS0FBSyx1QkFBTEEsS0FBSyxDQUFFckIsa0JBQWtCLGNBQUFnRSxFQUFBLGNBQUFBLEVBQUEsR0FBSXhFLElBQUksQ0FBQ1Esa0JBQWtCO1FBQ3hFTix5QkFBeUIsRUFBRSxDQUFBdUUsRUFBQSxHQUFBNUMsS0FBSyxhQUFMQSxLQUFLLHVCQUFMQSxLQUFLLENBQUUzQix5QkFBeUIsY0FBQXVFLEVBQUEsY0FBQUEsRUFBQSxHQUFJekUsSUFBSSxDQUFDRSx5QkFBeUI7UUFDN0ZLLGdCQUFnQixFQUFFLENBQUFtRSxFQUFBLEdBQUE3QyxLQUFLLGFBQUxBLEtBQUssdUJBQUxBLEtBQUssQ0FBRXRCLGdCQUFnQixjQUFBbUUsRUFBQSxjQUFBQSxFQUFBLEdBQUkxRSxJQUFJLENBQUNPLGdCQUFnQjtRQUNsRW9FLHFCQUFxQixFQUFFLENBQUFDLEVBQUEsR0FBQS9DLEtBQUssYUFBTEEsS0FBSyx1QkFBTEEsS0FBSyxDQUFFOEMscUJBQXFCLGNBQUFDLEVBQUEsY0FBQUEsRUFBQSxHQUFJNUUsSUFBSSxDQUFDMkUscUJBQXFCO1FBQ2pGN0IsMkJBQTJCLEVBQUVBO01BQTJCO0lBQ3hELEVBQ0U7RUFBQSxFQUNMO0FBRVA7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvSHlHOztBQUV6RztBQUNBLDhCQUE4Qjs7QUFFOUIsT0FBTyxtREFBUSxVQUFVLG1EQUFRLG1CQUFtQjs7QUFFcEQ7QUFDQSxTQUFTLHlEQUFjO0FBQ3ZCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUcsRUFBRSxxRUFBMEI7O0FBRS9CLE1BQU0saURBQU0sU0FBUyxpREFBTTtBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTLHlEQUFjO0FBQ3ZCLDJCQUEyQjtBQUMzQjtBQUNBOztBQUVBOztBQUVBO0FBQ0EsUUFBUSx3REFBYSxpQkFBaUIsaURBQU0saUJBQWlCLHdEQUFhLGVBQWUsd0RBQWE7QUFDdEcsa0JBQWtCOztBQUVsQjtBQUNBLGdCQUFnQjtBQUNoQixHQUFHO0FBQ0g7O0FBRUEsaUVBQWUsSUFBSSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdENiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL0BraWUtdG9vbHMvZG1uLWVkaXRvci8uL3N0b3JpZXMvbWlzYy9lbXB0eS9FbXB0eS5zdG9yaWVzLnRzeCIsIndlYnBhY2s6Ly9Aa2llLXRvb2xzL2Rtbi1lZGl0b3IvLi9zdG9yaWVzL2RtbkVkaXRvclN0b3JpZXNXcmFwcGVyLnRzeCIsIndlYnBhY2s6Ly9Aa2llLXRvb2xzL2Rtbi1lZGl0b3IvLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2RlZXAtb2JqZWN0LWRpZmZAMS4xLjkvbm9kZV9tb2R1bGVzL2RlZXAtb2JqZWN0LWRpZmYvbWpzL2RpZmYuanMiLCJ3ZWJwYWNrOi8vQGtpZS10b29scy9kbW4tZWRpdG9yLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9kZWVwLW9iamVjdC1kaWZmQDEuMS45L25vZGVfbW9kdWxlcy9kZWVwLW9iamVjdC1kaWZmL21qcy91dGlscy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogTGljZW5zZWQgdG8gdGhlIEFwYWNoZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIChBU0YpIHVuZGVyIG9uZVxuICogb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuICBTZWUgdGhlIE5PVElDRSBmaWxlXG4gKiBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvblxuICogcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuICBUaGUgQVNGIGxpY2Vuc2VzIHRoaXMgZmlsZVxuICogdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZVxuICogXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4gKiB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZyxcbiAqIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXG4gKiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxuICogS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlXG4gKiBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zXG4gKiB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgdHlwZSB7IE1ldGEsIFN0b3J5T2JqIH0gZnJvbSBcIkBzdG9yeWJvb2svcmVhY3RcIjtcbmltcG9ydCB7IGdldE1hcnNoYWxsZXIgfSBmcm9tIFwiQGtpZS10b29scy9kbW4tbWFyc2hhbGxlclwiO1xuaW1wb3J0IHsgbnMgYXMgZG1uMTVucyB9IGZyb20gXCJAa2llLXRvb2xzL2Rtbi1tYXJzaGFsbGVyL2Rpc3Qvc2NoZW1hcy9kbW4tMV81L3RzLWdlbi9tZXRhXCI7XG5pbXBvcnQgeyBnZW5lcmF0ZVV1aWQgfSBmcm9tIFwiQGtpZS10b29scy9ib3hlZC1leHByZXNzaW9uLWNvbXBvbmVudC9kaXN0L2FwaVwiO1xuaW1wb3J0IHsgRE1OMTVfU1BFQyB9IGZyb20gXCJAa2llLXRvb2xzL2Rtbi1tYXJzaGFsbGVyL2Rpc3Qvc2NoZW1hcy9kbW4tMV81L0RtbjE1U3BlY1wiO1xuaW1wb3J0IHsgRG1uRWRpdG9yV3JhcHBlciwgU3Rvcnlib29rRG1uRWRpdG9yUHJvcHMgfSBmcm9tIFwiLi4vLi4vZG1uRWRpdG9yU3Rvcmllc1dyYXBwZXJcIjtcbmltcG9ydCB7IERtbkVkaXRvciwgRG1uRWRpdG9yUHJvcHMgfSBmcm9tIFwiLi4vLi4vLi4vc3JjL0RtbkVkaXRvclwiO1xuZXhwb3J0IGNvbnN0IGdlbmVyYXRlRW1wdHlEbW4xNSA9ICgpID0+IGA8P3htbCB2ZXJzaW9uPVwiMS4wXCIgZW5jb2Rpbmc9XCJVVEYtOFwiPz5cbjxkZWZpbml0aW9uc1xuICB4bWxucz1cIiR7ZG1uMTVucy5nZXQoXCJcIil9XCJcbiAgZXhwcmVzc2lvbkxhbmd1YWdlPVwiJHtETU4xNV9TUEVDLmV4cHJlc3Npb25MYW5ndWFnZS5kZWZhdWx0fVwiXG4gIG5hbWVzcGFjZT1cImh0dHBzOi8va2llLmFwYWNoZS5vcmcvZG1uLyR7Z2VuZXJhdGVVdWlkKCl9XCJcbiAgaWQ9XCIke2dlbmVyYXRlVXVpZCgpfVwiXG4gIG5hbWU9XCJETU4ke2dlbmVyYXRlVXVpZCgpfVwiPlxuPC9kZWZpbml0aW9ucz5gO1xuY29uc3QgbWV0YTogTWV0YTxEbW5FZGl0b3JQcm9wcz4gPSB7XG4gIHRpdGxlOiBcIk1pc2MvRW1wdHlcIixcbiAgY29tcG9uZW50OiBEbW5FZGl0b3IsXG4gIGluY2x1ZGVTdG9yaWVzOiAvXltBLVpdL1xufTtcbmV4cG9ydCBkZWZhdWx0IG1ldGE7XG50eXBlIFN0b3J5ID0gU3RvcnlPYmo8U3Rvcnlib29rRG1uRWRpdG9yUHJvcHM+O1xuY29uc3QgbWFyc2hhbGxlciA9IGdldE1hcnNoYWxsZXIoZ2VuZXJhdGVFbXB0eURtbjE1KCksIHtcbiAgdXBncmFkZVRvOiBcImxhdGVzdFwiXG59KTtcbmNvbnN0IG1vZGVsID0gbWFyc2hhbGxlci5wYXJzZXIucGFyc2UoKTtcbmV4cG9ydCBjb25zdCBFbXB0eTogU3RvcnkgPSB7XG4gIHJlbmRlcjogYXJncyA9PiBEbW5FZGl0b3JXcmFwcGVyKCksXG4gIGFyZ3M6IHtcbiAgICBtb2RlbDogbW9kZWwsXG4gICAgb3JpZ2luYWxWZXJzaW9uOiBcIjEuNVwiLFxuICAgIGV2YWx1YXRpb25SZXN1bHRzQnlOb2RlSWQ6IG5ldyBNYXAoKSxcbiAgICBleHRlcm5hbENvbnRleHREZXNjcmlwdGlvbjogXCJcIixcbiAgICBleHRlcm5hbENvbnRleHROYW1lOiBcIlN0b3J5Ym9vayAtIERNTiBFZGl0b3JcIixcbiAgICBleHRlcm5hbE1vZGVsc0J5TmFtZXNwYWNlOiB7fSxcbiAgICBpc3N1ZVRyYWNrZXJIcmVmOiBcIlwiLFxuICAgIHZhbGlkYXRpb25NZXNzYWdlczoge30sXG4gICAgaXNSZWFkT25seTogZmFsc2UsXG4gICAgeG1sOiBtYXJzaGFsbGVyLmJ1aWxkZXIuYnVpbGQobW9kZWwpXG4gIH1cbn07XG5FbXB0eS5wYXJhbWV0ZXJzID0ge1xuICAuLi5FbXB0eS5wYXJhbWV0ZXJzLFxuICBkb2NzOiB7XG4gICAgLi4uRW1wdHkucGFyYW1ldGVycz8uZG9jcyxcbiAgICBzb3VyY2U6IHtcbiAgICAgIG9yaWdpbmFsU291cmNlOiBcIntcXG4gIHJlbmRlcjogYXJncyA9PiBEbW5FZGl0b3JXcmFwcGVyKCksXFxuICBhcmdzOiB7XFxuICAgIG1vZGVsOiBtb2RlbCxcXG4gICAgb3JpZ2luYWxWZXJzaW9uOiBcXFwiMS41XFxcIixcXG4gICAgZXZhbHVhdGlvblJlc3VsdHNCeU5vZGVJZDogbmV3IE1hcCgpLFxcbiAgICBleHRlcm5hbENvbnRleHREZXNjcmlwdGlvbjogXFxcIlxcXCIsXFxuICAgIGV4dGVybmFsQ29udGV4dE5hbWU6IFxcXCJTdG9yeWJvb2sgLSBETU4gRWRpdG9yXFxcIixcXG4gICAgZXh0ZXJuYWxNb2RlbHNCeU5hbWVzcGFjZToge30sXFxuICAgIGlzc3VlVHJhY2tlckhyZWY6IFxcXCJcXFwiLFxcbiAgICB2YWxpZGF0aW9uTWVzc2FnZXM6IHt9LFxcbiAgICBpc1JlYWRPbmx5OiBmYWxzZSxcXG4gICAgeG1sOiBtYXJzaGFsbGVyLmJ1aWxkZXIuYnVpbGQobW9kZWwpXFxuICB9XFxufVwiLFxuICAgICAgLi4uRW1wdHkucGFyYW1ldGVycz8uZG9jcz8uc291cmNlXG4gICAgfVxuICB9XG59OyIsIi8qXG4gKiBMaWNlbnNlZCB0byB0aGUgQXBhY2hlIFNvZnR3YXJlIEZvdW5kYXRpb24gKEFTRikgdW5kZXIgb25lXG4gKiBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gIFNlZSB0aGUgTk9USUNFIGZpbGVcbiAqIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uXG4gKiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC4gIFRoZSBBU0YgbGljZW5zZXMgdGhpcyBmaWxlXG4gKiB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlXG4gKiBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2VcbiAqIHdpdGggdGhlIExpY2Vuc2UuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLFxuICogc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cbiAqIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXG4gKiBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGVcbiAqIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnNcbiAqIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlLCB1c2VSZWYsIHVzZU1lbW8sIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlQXJncyB9IGZyb20gXCJAc3Rvcnlib29rL3ByZXZpZXctYXBpXCI7XG5pbXBvcnQge1xuICBEbW5FZGl0b3IsXG4gIERtbkVkaXRvclByb3BzLFxuICBEbW5FZGl0b3JSZWYsXG4gIEV2YWx1YXRpb25SZXN1bHRzQnlOb2RlSWQsXG4gIFZhbGlkYXRpb25NZXNzYWdlcyxcbn0gZnJvbSBcIi4uL3NyYy9EbW5FZGl0b3JcIjtcbmltcG9ydCB7IERtbkxhdGVzdE1vZGVsLCBnZXRNYXJzaGFsbGVyIH0gZnJvbSBcIkBraWUtdG9vbHMvZG1uLW1hcnNoYWxsZXJcIjtcbmltcG9ydCB7IG5vcm1hbGl6ZSB9IGZyb20gXCJAa2llLXRvb2xzL2Rtbi1tYXJzaGFsbGVyL2Rpc3Qvbm9ybWFsaXphdGlvbi9ub3JtYWxpemVcIjtcbmltcG9ydCB7IGRpZmYgfSBmcm9tIFwiZGVlcC1vYmplY3QtZGlmZlwiO1xuaW1wb3J0IHsgZ2VuZXJhdGVFbXB0eURtbjE1IH0gZnJvbSBcIi4vbWlzYy9lbXB0eS9FbXB0eS5zdG9yaWVzXCI7XG5cbmV4cG9ydCBjb25zdCBldmFsdWF0aW9uUmVzdWx0c0J5Tm9kZUlkOiBFdmFsdWF0aW9uUmVzdWx0c0J5Tm9kZUlkID0gbmV3IE1hcCgpO1xuZXhwb3J0IGNvbnN0IHZhbGlkYXRpb25NZXNzYWdlczogVmFsaWRhdGlvbk1lc3NhZ2VzID0ge307XG5cbmV4cG9ydCB0eXBlIFN0b3J5Ym9va0RtbkVkaXRvclByb3BzID0gRG1uRWRpdG9yUHJvcHMgJiB7IHhtbDogc3RyaW5nIH07XG5cbmV4cG9ydCBmdW5jdGlvbiBEbW5FZGl0b3JXcmFwcGVyKHByb3BzPzogUGFydGlhbDxTdG9yeWJvb2tEbW5FZGl0b3JQcm9wcz4pIHtcbiAgY29uc3QgW2FyZ3MsIHVwZGF0ZUFyZ3NdID0gdXNlQXJnczxTdG9yeWJvb2tEbW5FZGl0b3JQcm9wcz4oKTtcbiAgY29uc3QgYXJnc0NvcHkgPSB1c2VSZWYoYXJncyk7XG4gIGNvbnN0IHJlZiA9IHVzZVJlZjxEbW5FZGl0b3JSZWY+KG51bGwpO1xuICBjb25zdCBbbW9kZWxBcmdzLCBzZXRNb2RlbEFyZ3NdID0gdXNlU3RhdGU8RG1uTGF0ZXN0TW9kZWw+KGFyZ3MubW9kZWwpO1xuICBjb25zdCBtb2RlbCA9IHVzZU1lbW8oKCkgPT4gcHJvcHM/Lm1vZGVsID8/IG1vZGVsQXJncywgW21vZGVsQXJncywgcHJvcHM/Lm1vZGVsXSk7XG4gIGNvbnN0IFttb2RlbENoYW5nZWQsIHNldE1vZGVsQ2hhbmdlXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgY29uc3QgW2lzUmVhZE9ubHksIHNldElzUmVhZE9ubHldID0gdXNlU3RhdGUocHJvcHM/LmlzUmVhZE9ubHkgPz8gYXJncy5pc1JlYWRPbmx5ID8/IGZhbHNlKTtcblxuICBjb25zdCBvbk1vZGVsQ2hhbmdlID0gdXNlTWVtbyhcbiAgICAoKSA9PiAocHJvcHM/Lm9uTW9kZWxDaGFuZ2UgPyBwcm9wcy5vbk1vZGVsQ2hhbmdlIDogc2V0TW9kZWxBcmdzKSxcbiAgICBbcHJvcHM/Lm9uTW9kZWxDaGFuZ2VdXG4gICk7XG5cbiAgY29uc3Qgb25PcGVuZWRCb3hlZEV4cHJlc3Npb25FZGl0b3JOb2RlQ2hhbmdlTm9PcGVyYXRpb24gPSB1c2VNZW1vKFxuICAgICgpID0+IChuZXdPcGVuZWROb2RlSWQ6IHN0cmluZyB8IHVuZGVmaW5lZCkgPT4ge30sXG4gICAgW11cbiAgKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChhcmdzLmlzUmVhZE9ubHkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgc2V0SXNSZWFkT25seShhcmdzLmlzUmVhZE9ubHkpO1xuICAgIH1cbiAgfSwgW2FyZ3MuaXNSZWFkT25seV0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKE9iamVjdC5rZXlzKGRpZmYoYXJnc0NvcHkuY3VycmVudC5tb2RlbCwgbW9kZWwpKS5sZW5ndGggIT09IDApIHtcbiAgICAgIHVwZGF0ZUFyZ3Moe1xuICAgICAgICAuLi5hcmdzQ29weS5jdXJyZW50LFxuICAgICAgICBtb2RlbDogbW9kZWwsXG4gICAgICAgIHhtbDogZ2V0TWFyc2hhbGxlcihnZW5lcmF0ZUVtcHR5RG1uMTUoKSwgeyB1cGdyYWRlVG86IFwibGF0ZXN0XCIgfSkuYnVpbGRlci5idWlsZChtb2RlbCksXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIFt1cGRhdGVBcmdzLCBtb2RlbF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKE9iamVjdC5rZXlzKGRpZmYoYXJnc0NvcHkuY3VycmVudCwgYXJncykpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBhcmdzQ29weS5jdXJyZW50ID0gYXJncztcbiAgICBpZiAoT2JqZWN0LmtleXMoZGlmZihhcmdzLm1vZGVsLCBtb2RlbCkpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBvbk1vZGVsQ2hhbmdlKG5vcm1hbGl6ZShhcmdzLm1vZGVsKSk7XG4gIH0sIFthcmdzLCBtb2RlbCwgb25Nb2RlbENoYW5nZV0pO1xuXG4gIGNvbnN0IG9uTW9kZWxEZWJvdW5jZVN0YXRlQ2hhbmdlZCA9IHVzZUNhbGxiYWNrKChjaGFuZ2VkOiBib29sZWFuKSA9PiB7XG4gICAgc2V0TW9kZWxDaGFuZ2UoY2hhbmdlZCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7bW9kZWxDaGFuZ2VkICYmIChcbiAgICAgICAgPGRpdiBkYXRhLXRlc3RpZD17XCJzdG9yeWJvb2stLWRtbi1lZGl0b3ItbW9kZWxcIn0gc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX0+XG4gICAgICAgICAge0pTT04uc3RyaW5naWZ5KG1vZGVsKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgICAgPGJ1dHRvblxuICAgICAgICBkYXRhLXRlc3RpZD17XCJzdG9yeWJvb2stLWRtbi1lZGl0b3ItdG9nZ2xlLXJlYWQtb25seVwifVxuICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc1JlYWRPbmx5KChjdXJyZW50VmFsdWUpID0+ICFjdXJyZW50VmFsdWUpfVxuICAgICAgPlxuICAgICAgICB7aXNSZWFkT25seS50b1N0cmluZygpfVxuICAgICAgPC9idXR0b24+XG4gICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiBcImFic29sdXRlXCIsIHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgdG9wOiBcIjBweFwiLCBsZWZ0OiBcIjBweFwiIH19PlxuICAgICAgICA8RG1uRWRpdG9yXG4gICAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgICAgbW9kZWw9e21vZGVsfVxuICAgICAgICAgIG9yaWdpbmFsVmVyc2lvbj17cHJvcHM/Lm9yaWdpbmFsVmVyc2lvbiA/PyBhcmdzLm9yaWdpbmFsVmVyc2lvbn1cbiAgICAgICAgICBpc1JlYWRPbmx5PXtpc1JlYWRPbmx5fVxuICAgICAgICAgIG9uTW9kZWxDaGFuZ2U9e29uTW9kZWxDaGFuZ2V9XG4gICAgICAgICAgb25PcGVuZWRCb3hlZEV4cHJlc3Npb25FZGl0b3JOb2RlQ2hhbmdlPXtvbk9wZW5lZEJveGVkRXhwcmVzc2lvbkVkaXRvck5vZGVDaGFuZ2VOb09wZXJhdGlvbn1cbiAgICAgICAgICBvblJlcXVlc3RFeHRlcm5hbE1vZGVsQnlQYXRoPXtwcm9wcz8ub25SZXF1ZXN0RXh0ZXJuYWxNb2RlbEJ5UGF0aCA/PyBhcmdzLm9uUmVxdWVzdEV4dGVybmFsTW9kZWxCeVBhdGh9XG4gICAgICAgICAgb25SZXF1ZXN0RXh0ZXJuYWxNb2RlbHNBdmFpbGFibGVUb0luY2x1ZGU9e1xuICAgICAgICAgICAgcHJvcHM/Lm9uUmVxdWVzdEV4dGVybmFsTW9kZWxzQXZhaWxhYmxlVG9JbmNsdWRlID8/IGFyZ3Mub25SZXF1ZXN0RXh0ZXJuYWxNb2RlbHNBdmFpbGFibGVUb0luY2x1ZGVcbiAgICAgICAgICB9XG4gICAgICAgICAgZXh0ZXJuYWxNb2RlbHNCeU5hbWVzcGFjZT17cHJvcHM/LmV4dGVybmFsTW9kZWxzQnlOYW1lc3BhY2UgPz8gYXJncy5leHRlcm5hbE1vZGVsc0J5TmFtZXNwYWNlfVxuICAgICAgICAgIGV4dGVybmFsQ29udGV4dE5hbWU9e3Byb3BzPy5leHRlcm5hbENvbnRleHROYW1lID8/IGFyZ3MuZXh0ZXJuYWxDb250ZXh0TmFtZX1cbiAgICAgICAgICBleHRlcm5hbENvbnRleHREZXNjcmlwdGlvbj17cHJvcHM/LmV4dGVybmFsQ29udGV4dERlc2NyaXB0aW9uID8/IGFyZ3MuZXh0ZXJuYWxDb250ZXh0RGVzY3JpcHRpb259XG4gICAgICAgICAgdmFsaWRhdGlvbk1lc3NhZ2VzPXtwcm9wcz8udmFsaWRhdGlvbk1lc3NhZ2VzID8/IGFyZ3MudmFsaWRhdGlvbk1lc3NhZ2VzfVxuICAgICAgICAgIGV2YWx1YXRpb25SZXN1bHRzQnlOb2RlSWQ9e3Byb3BzPy5ldmFsdWF0aW9uUmVzdWx0c0J5Tm9kZUlkID8/IGFyZ3MuZXZhbHVhdGlvblJlc3VsdHNCeU5vZGVJZH1cbiAgICAgICAgICBpc3N1ZVRyYWNrZXJIcmVmPXtwcm9wcz8uaXNzdWVUcmFja2VySHJlZiA/PyBhcmdzLmlzc3VlVHJhY2tlckhyZWZ9XG4gICAgICAgICAgb25SZXF1ZXN0VG9KdW1wVG9QYXRoPXtwcm9wcz8ub25SZXF1ZXN0VG9KdW1wVG9QYXRoID8/IGFyZ3Mub25SZXF1ZXN0VG9KdW1wVG9QYXRofVxuICAgICAgICAgIG9uTW9kZWxEZWJvdW5jZVN0YXRlQ2hhbmdlZD17b25Nb2RlbERlYm91bmNlU3RhdGVDaGFuZ2VkfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG4iLCJpbXBvcnQgeyBpc0RhdGUsIGlzRW1wdHlPYmplY3QsIGlzT2JqZWN0LCBoYXNPd25Qcm9wZXJ0eSwgbWFrZU9iamVjdFdpdGhvdXRQcm90b3R5cGUgfSBmcm9tICcuL3V0aWxzLmpzJztcblxuY29uc3QgZGlmZiA9IChsaHMsIHJocykgPT4ge1xuICBpZiAobGhzID09PSByaHMpIHJldHVybiB7fTsgLy8gZXF1YWwgcmV0dXJuIG5vIGRpZmZcblxuICBpZiAoIWlzT2JqZWN0KGxocykgfHwgIWlzT2JqZWN0KHJocykpIHJldHVybiByaHM7IC8vIHJldHVybiB1cGRhdGVkIHJoc1xuXG4gIGNvbnN0IGRlbGV0ZWRWYWx1ZXMgPSBPYmplY3Qua2V5cyhsaHMpLnJlZHVjZSgoYWNjLCBrZXkpID0+IHtcbiAgICBpZiAoIWhhc093blByb3BlcnR5KHJocywga2V5KSkge1xuICAgICAgYWNjW2tleV0gPSB1bmRlZmluZWQ7XG4gICAgICBcbiAgICB9XG5cbiAgICByZXR1cm4gYWNjO1xuICB9LCBtYWtlT2JqZWN0V2l0aG91dFByb3RvdHlwZSgpKTtcblxuICBpZiAoaXNEYXRlKGxocykgfHwgaXNEYXRlKHJocykpIHtcbiAgICBpZiAobGhzLnZhbHVlT2YoKSA9PSByaHMudmFsdWVPZigpKSByZXR1cm4ge307XG4gICAgcmV0dXJuIHJocztcbiAgfVxuXG4gIHJldHVybiBPYmplY3Qua2V5cyhyaHMpLnJlZHVjZSgoYWNjLCBrZXkpID0+IHtcbiAgICBpZiAoIWhhc093blByb3BlcnR5KGxocywga2V5KSl7XG4gICAgICBhY2Nba2V5XSA9IHJoc1trZXldOyAvLyByZXR1cm4gYWRkZWQgciBrZXlcbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSBcblxuICAgIGNvbnN0IGRpZmZlcmVuY2UgPSBkaWZmKGxoc1trZXldLCByaHNba2V5XSk7XG5cbiAgICAvLyBJZiB0aGUgZGlmZmVyZW5jZSBpcyBlbXB0eSwgYW5kIHRoZSBsaHMgaXMgYW4gZW1wdHkgb2JqZWN0IG9yIHRoZSByaHMgaXMgbm90IGFuIGVtcHR5IG9iamVjdFxuICAgIGlmIChpc0VtcHR5T2JqZWN0KGRpZmZlcmVuY2UpICYmICFpc0RhdGUoZGlmZmVyZW5jZSkgJiYgKGlzRW1wdHlPYmplY3QobGhzW2tleV0pIHx8ICFpc0VtcHR5T2JqZWN0KHJoc1trZXldKSkpXG4gICAgICByZXR1cm4gYWNjOyAvLyByZXR1cm4gbm8gZGlmZlxuXG4gICAgYWNjW2tleV0gPSBkaWZmZXJlbmNlIC8vIHJldHVybiB1cGRhdGVkIGtleVxuICAgIHJldHVybiBhY2M7IC8vIHJldHVybiB1cGRhdGVkIGtleVxuICB9LCBkZWxldGVkVmFsdWVzKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRpZmY7XG4iLCJleHBvcnQgY29uc3QgaXNEYXRlID0gZCA9PiBkIGluc3RhbmNlb2YgRGF0ZTtcbmV4cG9ydCBjb25zdCBpc0VtcHR5ID0gbyA9PiBPYmplY3Qua2V5cyhvKS5sZW5ndGggPT09IDA7XG5leHBvcnQgY29uc3QgaXNPYmplY3QgPSBvID0+IG8gIT0gbnVsbCAmJiB0eXBlb2YgbyA9PT0gJ29iamVjdCc7XG5leHBvcnQgY29uc3QgaGFzT3duUHJvcGVydHkgPSAobywgLi4uYXJncykgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG8sIC4uLmFyZ3MpXG5leHBvcnQgY29uc3QgaXNFbXB0eU9iamVjdCA9IChvKSA9PiBpc09iamVjdChvKSAmJiBpc0VtcHR5KG8pO1xuZXhwb3J0IGNvbnN0IG1ha2VPYmplY3RXaXRob3V0UHJvdG90eXBlID0gKCkgPT4gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiJdLCJuYW1lcyI6WyJnZXRNYXJzaGFsbGVyIiwibnMiLCJkbW4xNW5zIiwiZ2VuZXJhdGVVdWlkIiwiRE1OMTVfU1BFQyIsIkRtbkVkaXRvcldyYXBwZXIiLCJEbW5FZGl0b3IiLCJnZW5lcmF0ZUVtcHR5RG1uMTUiLCJnZXQiLCJleHByZXNzaW9uTGFuZ3VhZ2UiLCJkZWZhdWx0IiwibWV0YSIsInRpdGxlIiwiY29tcG9uZW50IiwiaW5jbHVkZVN0b3JpZXMiLCJtYXJzaGFsbGVyIiwidXBncmFkZVRvIiwibW9kZWwiLCJwYXJzZXIiLCJwYXJzZSIsIkVtcHR5IiwicmVuZGVyIiwiYXJncyIsIm9yaWdpbmFsVmVyc2lvbiIsImV2YWx1YXRpb25SZXN1bHRzQnlOb2RlSWQiLCJNYXAiLCJleHRlcm5hbENvbnRleHREZXNjcmlwdGlvbiIsImV4dGVybmFsQ29udGV4dE5hbWUiLCJleHRlcm5hbE1vZGVsc0J5TmFtZXNwYWNlIiwiaXNzdWVUcmFja2VySHJlZiIsInZhbGlkYXRpb25NZXNzYWdlcyIsImlzUmVhZE9ubHkiLCJ4bWwiLCJidWlsZGVyIiwiYnVpbGQiLCJwYXJhbWV0ZXJzIiwiZG9jcyIsIl9hIiwic291cmNlIiwib3JpZ2luYWxTb3VyY2UiLCJfYyIsIl9iIiwiX19uYW1lZEV4cG9ydHNPcmRlciIsInVzZUNhbGxiYWNrIiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJ1c2VNZW1vIiwidXNlRWZmZWN0IiwidXNlQXJncyIsIm5vcm1hbGl6ZSIsImRpZmYiLCJwcm9wcyIsInVwZGF0ZUFyZ3MiLCJhcmdzQ29weSIsInJlZiIsIm1vZGVsQXJncyIsInNldE1vZGVsQXJncyIsIm1vZGVsQ2hhbmdlZCIsInNldE1vZGVsQ2hhbmdlIiwic2V0SXNSZWFkT25seSIsIm9uTW9kZWxDaGFuZ2UiLCJvbk9wZW5lZEJveGVkRXhwcmVzc2lvbkVkaXRvck5vZGVDaGFuZ2VOb09wZXJhdGlvbiIsIm5ld09wZW5lZE5vZGVJZCIsInVuZGVmaW5lZCIsIk9iamVjdCIsImtleXMiLCJjdXJyZW50IiwibGVuZ3RoIiwib25Nb2RlbERlYm91bmNlU3RhdGVDaGFuZ2VkIiwiY2hhbmdlZCIsIl9qc3hzIiwiX0ZyYWdtZW50IiwiY2hpbGRyZW4iLCJfanN4Iiwic3R5bGUiLCJkaXNwbGF5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm9uQ2xpY2siLCJjdXJyZW50VmFsdWUiLCJ0b1N0cmluZyIsInBvc2l0aW9uIiwid2lkdGgiLCJoZWlnaHQiLCJ0b3AiLCJsZWZ0Iiwib25PcGVuZWRCb3hlZEV4cHJlc3Npb25FZGl0b3JOb2RlQ2hhbmdlIiwib25SZXF1ZXN0RXh0ZXJuYWxNb2RlbEJ5UGF0aCIsIl9kIiwib25SZXF1ZXN0RXh0ZXJuYWxNb2RlbHNBdmFpbGFibGVUb0luY2x1ZGUiLCJfZSIsIl9mIiwiX2ciLCJfaCIsIl9qIiwiX2siLCJfbCIsIm9uUmVxdWVzdFRvSnVtcFRvUGF0aCIsIl9tIl0sInNvdXJjZVJvb3QiOiIifQ==