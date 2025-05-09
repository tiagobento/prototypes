"use strict";
(self["webpackChunk_kie_tools_dmn_editor"] = self["webpackChunk_kie_tools_dmn_editor"] || []).push([["dev-Playground-stories"],{

/***/ "../pmml-editor-marshaller/dist/index.js":
/*!***********************************************!*\
  !*** ../pmml-editor-marshaller/dist/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   XML2PMML: () => (/* reexport safe */ _marshaller__WEBPACK_IMPORTED_MODULE_1__.XML2PMML)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "../pmml-editor-marshaller/dist/api/index.js");
/* harmony import */ var _marshaller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./marshaller */ "../pmml-editor-marshaller/dist/marshaller/index.js");



/***/ }),

/***/ "./stories/dev/Playground.stories.tsx":
/*!********************************************!*\
  !*** ./stories/dev/Playground.stories.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Playground: () => (/* binding */ Playground),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _patternfly_react_core_dist_styles_base_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core/dist/styles/base.css */ "../../node_modules/.pnpm/@patternfly+react-core@4.276.6_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@patternfly/react-core/dist/styles/base.css");
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Flex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @patternfly/react-core/dist/js/layouts/Flex */ "../../node_modules/.pnpm/@patternfly+react-core@4.276.6_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@patternfly/react-core/dist/js/layouts/Flex/index.js");
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Flex__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_layouts_Flex__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _patternfly_react_core_dist_js_components_Page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Page */ "../../node_modules/.pnpm/@patternfly+react-core@4.276.6_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@patternfly/react-core/dist/js/components/Page/index.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Page__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Page__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _kie_tools_dmn_marshaller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @kie-tools/dmn-marshaller */ "../dmn-marshaller/dist/index.js");
/* harmony import */ var _kie_tools_dmn_marshaller_dist_normalization_normalize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @kie-tools/dmn-marshaller/dist/normalization/normalize */ "../dmn-marshaller/dist/normalization/normalize.js");
/* harmony import */ var _availableModelsToInclude__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./availableModelsToInclude */ "./stories/dev/availableModelsToInclude.ts");
/* harmony import */ var _misc_empty_Empty_stories__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../misc/empty/Empty.stories */ "./stories/misc/empty/Empty.stories.tsx");
/* harmony import */ var _dmnEditorStoriesWrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../dmnEditorStoriesWrapper */ "./stories/dmnEditorStoriesWrapper.tsx");
/* harmony import */ var _useCases_models_models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../useCases/models/models */ "./stories/useCases/models/models.ts");
var _a, _b, _c;











const initialModel = (0,_misc_empty_Empty_stories__WEBPACK_IMPORTED_MODULE_6__.generateEmptyDmn15)();
function DevPlayground(args) {
  const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(() => {
    const initialDmnMarshaller = (0,_kie_tools_dmn_marshaller__WEBPACK_IMPORTED_MODULE_3__.getMarshaller)(initialModel, {
      upgradeTo: "latest"
    });
    return {
      marshaller: initialDmnMarshaller,
      stack: [(0,_kie_tools_dmn_marshaller_dist_normalization_normalize__WEBPACK_IMPORTED_MODULE_4__.normalize)(initialDmnMarshaller.parser.parse())],
      pointer: 0
    };
  });
  const onDrop = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(e => {
    console.log("DMN Editor :: Playground :: File(s) dropped! Opening it.");
    e.preventDefault();
    if (e.dataTransfer.items) {
      [...e.dataTransfer.items].forEach((item, i) => {
        if (item.kind === "file") {
          const reader = new FileReader();
          reader.addEventListener("load", _ref => {
            let {
              target
            } = _ref;
            const marshaller = (0,_kie_tools_dmn_marshaller__WEBPACK_IMPORTED_MODULE_3__.getMarshaller)(target === null || target === void 0 ? void 0 : target.result, {
              upgradeTo: "latest"
            });
            setState({
              marshaller,
              stack: [(0,_kie_tools_dmn_marshaller_dist_normalization_normalize__WEBPACK_IMPORTED_MODULE_4__.normalize)(marshaller.parser.parse())],
              pointer: 0
            });
          });
          reader.readAsText(item.getAsFile());
        }
      });
    }
  }, []);
  const onDragOver = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(e => {
    e.preventDefault();
  }, []);
  const reset = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    const marshaller = (0,_kie_tools_dmn_marshaller__WEBPACK_IMPORTED_MODULE_3__.getMarshaller)((0,_misc_empty_Empty_stories__WEBPACK_IMPORTED_MODULE_6__.generateEmptyDmn15)(), {
      upgradeTo: "latest"
    });
    setState({
      marshaller,
      stack: [(0,_kie_tools_dmn_marshaller_dist_normalization_normalize__WEBPACK_IMPORTED_MODULE_4__.normalize)(marshaller.parser.parse())],
      pointer: 0
    });
  }, []);
  const currentModel = state.stack[state.pointer];
  const downloadRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const downloadAsXml = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    if (downloadRef.current) {
      const fileBlob = new Blob([state.marshaller.builder.build(currentModel)], {
        type: "text/xml"
      });
      downloadRef.current.download = `dmn-${createId(10)}.dmn`;
      downloadRef.current.href = URL.createObjectURL(fileBlob);
      downloadRef.current.click();
    }
  }, [currentModel, state.marshaller.builder]);
  const copyAsXml = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    navigator.clipboard.writeText(state.marshaller.builder.build(currentModel));
  }, [currentModel, state.marshaller.builder]);
  const undo = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    setState(prev => ({
      ...prev,
      pointer: Math.max(0, prev.pointer - 1)
    }));
  }, []);
  const redo = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    setState(prev => ({
      ...prev,
      pointer: Math.min(prev.stack.length - 1, prev.pointer + 1)
    }));
  }, []);
  const onModelChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(model => {
    setState(prev => {
      const newStack = prev.stack.slice(0, prev.pointer + 1);
      return {
        ...prev,
        stack: [...newStack, model],
        pointer: newStack.length
      };
    });
  }, []);
  const onSelectModel = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(newModel => {
    onModelChange((0,_kie_tools_dmn_marshaller_dist_normalization_normalize__WEBPACK_IMPORTED_MODULE_4__.normalize)(newModel));
  }, [onModelChange]);
  const onRequestToJumpToPath = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(path => {
    alert("Jumping to file " + path);
  }, []);
  const externalModelsByNamespace = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    var _a;
    return ((_a = currentModel.definitions.import) !== null && _a !== void 0 ? _a : []).reduce((acc, i) => {
      acc[i["@_namespace"]] = _availableModelsToInclude__WEBPACK_IMPORTED_MODULE_5__.modelsByNamespace[i["@_namespace"]];
      return acc;
    }, {});
  }, [currentModel.definitions.import]);
  const onRequestExternalModelByPath = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async path => {
    var _a;
    return (_a = _availableModelsToInclude__WEBPACK_IMPORTED_MODULE_5__.availableModelsByPath[path]) !== null && _a !== void 0 ? _a : null;
  }, []);
  const onRequestExternalModelsAvailableToInclude = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async () => {
    return Object.keys(_availableModelsToInclude__WEBPACK_IMPORTED_MODULE_5__.availableModelsByPath);
  }, []);
  const isUndoEnabled = state.pointer > 0;
  const isRedoEnabled = state.pointer !== state.stack.length - 1;
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: currentModel && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      style: {
        width: "100vw",
        height: "100vh"
      },
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_js_components_Page__WEBPACK_IMPORTED_MODULE_9__.Page, {
        onDragOver: onDragOver,
        onDrop: onDrop,
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_js_components_Page__WEBPACK_IMPORTED_MODULE_9__.PageSection, {
          variant: "light",
          isFilled: false,
          padding: {
            default: "padding"
          },
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_js_layouts_Flex__WEBPACK_IMPORTED_MODULE_10__.Flex, {
            justifyContent: {
              default: "justifyContentSpaceBetween"
            },
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_js_layouts_Flex__WEBPACK_IMPORTED_MODULE_10__.FlexItem, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h5", {
                children: "(Drag & drop a file anywhere to open it)"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_js_layouts_Flex__WEBPACK_IMPORTED_MODULE_10__.FlexItem, {
              shrink: {
                default: "shrink"
              },
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                onClick: () => onSelectModel(_useCases_models_models__WEBPACK_IMPORTED_MODULE_8__.USE_CASE_MODELS.loanPreQualification.model),
                children: "Ex: Loan Pre-Qualification"
              }), "\u00A0 \u00A0", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                onClick: () => onSelectModel(_useCases_models_models__WEBPACK_IMPORTED_MODULE_8__.USE_CASE_MODELS.autolayout.model),
                children: "Ex: Autolayout"
              }), "\u00A0 \u00A0 | \u00A0 \u00A0", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                disabled: !isUndoEnabled,
                style: {
                  opacity: isUndoEnabled ? 1 : 0.5
                },
                onClick: undo,
                children: `Undo (${state.pointer})`
              }), "\u00A0 \u00A0", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                disabled: !isRedoEnabled,
                style: {
                  opacity: isRedoEnabled ? 1 : 0.5
                },
                onClick: redo,
                children: `Redo (${state.stack.length - 1 - state.pointer})`
              }), "\u00A0 \u00A0 | \u00A0 \u00A0", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                onClick: reset,
                children: "Reset"
              }), "\u00A0 \u00A0", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                onClick: copyAsXml,
                children: "Copy XML"
              }), "\u00A0 \u00A0", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                onClick: downloadAsXml,
                children: "Download"
              })]
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
            ref: downloadRef
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("hr", {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_js_components_Page__WEBPACK_IMPORTED_MODULE_9__.PageSection, {
          variant: "light",
          isFilled: true,
          hasOverflowScroll: true,
          "aria-label": "editor",
          padding: {
            default: "noPadding"
          },
          children: (0,_dmnEditorStoriesWrapper__WEBPACK_IMPORTED_MODULE_7__.DmnEditorWrapper)({
            model: currentModel,
            originalVersion: args.originalVersion,
            onModelChange,
            onRequestExternalModelByPath,
            onRequestExternalModelsAvailableToInclude,
            externalModelsByNamespace: externalModelsByNamespace,
            externalContextName: args.externalContextName,
            externalContextDescription: args.externalContextDescription,
            validationMessages: args.validationMessages,
            evaluationResultsByNodeId: args.evaluationResultsByNodeId,
            issueTrackerHref: args.issueTrackerHref,
            onRequestToJumpToPath,
            isReadOnly: args.isReadOnly
          })
        })]
      })
    })
  });
}
function createId(length) {
  let result = "";
  const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}
const meta = {
  title: "Dev/Playground",
  component: DevPlayground
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (meta);
const Playground = {
  render: args => DevPlayground(args),
  args: {
    model: (0,_kie_tools_dmn_marshaller__WEBPACK_IMPORTED_MODULE_3__.getMarshaller)(initialModel, {
      upgradeTo: "latest"
    }).parser.parse(),
    originalVersion: "1.5",
    evaluationResultsByNodeId: new Map(),
    externalContextDescription: "You're using the DMN Editor Playground, so there's only two simple external models that can be included.",
    externalContextName: "Apache KIE :: DMN Editor :: Storybook :: Playground",
    externalModelsByNamespace: {},
    issueTrackerHref: "https://github.com/apache/incubator-kie-issues/issues/new",
    validationMessages: {},
    isReadOnly: false
  }
};
Playground.parameters = {
  ...Playground.parameters,
  docs: {
    ...((_a = Playground.parameters) === null || _a === void 0 ? void 0 : _a.docs),
    source: {
      originalSource: "{\n  render: args => DevPlayground(args),\n  args: {\n    model: getMarshaller(initialModel, {\n      upgradeTo: \"latest\"\n    }).parser.parse(),\n    originalVersion: \"1.5\",\n    evaluationResultsByNodeId: new Map(),\n    externalContextDescription: \"You're using the DMN Editor Playground, so there's only two simple external models that can be included.\",\n    externalContextName: \"Apache KIE :: DMN Editor :: Storybook :: Playground\",\n    externalModelsByNamespace: {},\n    issueTrackerHref: \"https://github.com/apache/incubator-kie-issues/issues/new\",\n    validationMessages: {},\n    isReadOnly: false\n  }\n}",
      ...((_c = (_b = Playground.parameters) === null || _b === void 0 ? void 0 : _b.docs) === null || _c === void 0 ? void 0 : _c.source)
    }
  }
};
const __namedExportsOrder = ["Playground"];

/***/ }),

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

/***/ "./stories/dev/availableModelsToInclude.ts":
/*!*************************************************!*\
  !*** ./stories/dev/availableModelsToInclude.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   availableModelsByPath: () => (/* binding */ availableModelsByPath),
/* harmony export */   modelsByNamespace: () => (/* binding */ modelsByNamespace)
/* harmony export */ });
/* unused harmony exports testTreePmmlModel, avaiableModels */
/* harmony import */ var _kie_tools_dmn_marshaller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @kie-tools/dmn-marshaller */ "../dmn-marshaller/dist/index.js");
/* harmony import */ var _kie_tools_dmn_marshaller_dist_normalization_normalize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @kie-tools/dmn-marshaller/dist/normalization/normalize */ "../dmn-marshaller/dist/normalization/normalize.js");
/* harmony import */ var _kie_tools_pmml_editor_marshaller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @kie-tools/pmml-editor-marshaller */ "../pmml-editor-marshaller/dist/index.js");
/* harmony import */ var _src_pmml_pmml__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/pmml/pmml */ "./src/pmml/pmml.ts");
/* harmony import */ var _useCases_models_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../useCases/models/models */ "./stories/useCases/models/models.ts");
/* harmony import */ var _misc_emptyWithAvailableExternalModels_testTreePmml__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../misc/emptyWithAvailableExternalModels/testTreePmml */ "./stories/misc/emptyWithAvailableExternalModels/testTreePmml.ts");






const testTreePmmlModel = (0,_kie_tools_pmml_editor_marshaller__WEBPACK_IMPORTED_MODULE_2__.XML2PMML)(_misc_emptyWithAvailableExternalModels_testTreePmml__WEBPACK_IMPORTED_MODULE_5__.testTreePmml);
const avaiableModels = [{
  type: "dmn",
  model: (0,_kie_tools_dmn_marshaller_dist_normalization_normalize__WEBPACK_IMPORTED_MODULE_1__.normalize)(_useCases_models_models__WEBPACK_IMPORTED_MODULE_4__.USE_CASE_MODELS.sumBkm.model),
  normalizedPosixPathRelativeToTheOpenFile: "playground/available-models-to-include/SumBkm.dmn",
  svg: ""
}, {
  type: "dmn",
  model: (0,_kie_tools_dmn_marshaller_dist_normalization_normalize__WEBPACK_IMPORTED_MODULE_1__.normalize)(_useCases_models_models__WEBPACK_IMPORTED_MODULE_4__.USE_CASE_MODELS.sumDiffDs.model),
  normalizedPosixPathRelativeToTheOpenFile: "playground/available-models-to-include/SumDiffDs.dmn",
  svg: ""
}, {
  type: "dmn",
  model: (0,_kie_tools_dmn_marshaller_dist_normalization_normalize__WEBPACK_IMPORTED_MODULE_1__.normalize)((0,_kie_tools_dmn_marshaller__WEBPACK_IMPORTED_MODULE_0__.getMarshaller)(`<definitions xmlns="https://www.omg.org/spec/DMN/20230324/MODEL/" />`, {
    upgradeTo: "latest"
  }).parser.parse()),
  normalizedPosixPathRelativeToTheOpenFile: "playground/available-models-to-include/Empty.dmn",
  svg: ""
}, {
  type: "pmml",
  model: testTreePmmlModel,
  normalizedPosixPathRelativeToTheOpenFile: "playground/available-models-to-include/testTree.pmml"
}];
const availableModelsByPath = Object.values(avaiableModels).reduce((acc, v) => {
  acc[v.normalizedPosixPathRelativeToTheOpenFile] = v;
  return acc;
}, {});
const modelsByNamespace = Object.values(avaiableModels).reduce((acc, v) => {
  if (v.type === "dmn") {
    acc[v.model.definitions["@_namespace"]] = v;
  } else if (v.type === "pmml") {
    acc[(0,_src_pmml_pmml__WEBPACK_IMPORTED_MODULE_3__.getPmmlNamespace)({
      normalizedPosixPathRelativeToTheOpenFile: v.normalizedPosixPathRelativeToTheOpenFile
    })] = v;
  }
  return acc;
}, {});

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

/***/ "./stories/misc/emptyWithAvailableExternalModels/testTreePmml.ts":
/*!***********************************************************************!*\
  !*** ./stories/misc/emptyWithAvailableExternalModels/testTreePmml.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   testTreePmml: () => (/* binding */ testTreePmml)
/* harmony export */ });
const testTreePmml = `<PMML version="4.2" xsi:schemaLocation="http://www.dmg.org/PMML-4_2 http://www.dmg.org/v4-2-1/pmml-4-2.xsd" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
xmlns="http://www.dmg.org/PMML-4_2">
<Header>
 <Application name="Drools-PMML" version="7.0.0-SNAPSHOT" />
</Header>

<DataDictionary numberOfFields="3">
 <DataField name="temperature" dataType="double" optype="continuous" />
 <DataField name="humidity" dataType="double" optype="continuous" />   
 <DataField name="decision" dataType="string" optype="categorical"> 
   <Value value="sunglasses" />
   <Value value="umbrella" />
   <Value value="nothing" />     
 </DataField>
</DataDictionary>

<TreeModel modelName="DecisionTree" functionName="classification">
 <MiningSchema>
   <MiningField name="temperature"  usageType="active" />
   <MiningField name="humidity"  usageType="active" />
   <MiningField name="decision" usageType="predicted" />
 </MiningSchema>
 <Output>
   <OutputField name="weatherdecision" targetField="decision" />
 </Output>
 
 <Node score="nothing" id="1">
   <True />
   <Node score="sunglasses" id="2">
     <CompoundPredicate booleanOperator="and">
       <SimplePredicate field="temperature" operator="greaterThan" value="25" />
       <SimplePredicate field="humidity" operator="lessOrEqual" value="20" />
     </CompoundPredicate>
   </Node>
   <Node score="umbrella" id="3">
     <SimplePredicate field="humidity" operator="greaterThan" value="50" />
   </Node>
   <Node score="nothing" id="4">
     <True />
   </Node>
 </Node>
</TreeModel>
</PMML>
`;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2LVBsYXlncm91bmQtc3Rvcmllcy44MzE3MzI2Ni5pZnJhbWUuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBbUJzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNDeUM7QUFFVjtBQUN3QjtBQUNNO0FBQ007QUFDTTtBQUNUO0FBQ3JCO0FBQ0g7QUFFRjtBQUM1RCxNQUFNZSxZQUFZLEdBQUdILDZFQUFrQixFQUFFO0FBQ3pDLFNBQVNJLGFBQWFBLENBQUNDLElBQW9CO0VBQ3pDLE1BQU0sQ0FBQ0MsS0FBSyxFQUFFQyxRQUFRLENBQUMsR0FBR2hCLCtDQUFRLENBSS9CLE1BQUs7SUFDTixNQUFNaUIsb0JBQW9CLEdBQUdaLHdFQUFhLENBQUNPLFlBQVksRUFBRTtNQUN2RE0sU0FBUyxFQUFFO0tBQ1osQ0FBQztJQUNGLE9BQU87TUFDTEMsVUFBVSxFQUFFRixvQkFBb0I7TUFDaENHLEtBQUssRUFBRSxDQUFDZCxpR0FBUyxDQUFDVyxvQkFBb0IsQ0FBQ0ksTUFBTSxDQUFDQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO01BQ3ZEQyxPQUFPLEVBQUU7S0FDVjtFQUNILENBQUMsQ0FBQztFQUNGLE1BQU1DLE1BQU0sR0FBRzNCLGtEQUFXLENBQUU0QixDQUFrQixJQUFJO0lBQ2hEQyxPQUFPLENBQUNDLEdBQUcsQ0FBQywwREFBMEQsQ0FBQztJQUN2RUYsQ0FBQyxDQUFDRyxjQUFjLEVBQUU7SUFFbEIsSUFBSUgsQ0FBQyxDQUFDSSxZQUFZLENBQUNDLEtBQUssRUFBRTtNQUV4QixDQUFDLEdBQUdMLENBQUMsQ0FBQ0ksWUFBWSxDQUFDQyxLQUFLLENBQUMsQ0FBQ0MsT0FBTyxDQUFDLENBQUNDLElBQUksRUFBRUMsQ0FBQyxLQUFJO1FBQzVDLElBQUlELElBQUksQ0FBQ0UsSUFBSSxLQUFLLE1BQU0sRUFBRTtVQUN4QixNQUFNQyxNQUFNLEdBQUcsSUFBSUMsVUFBVSxFQUFFO1VBQy9CRCxNQUFNLENBQUNFLGdCQUFnQixDQUFD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Ozs7Ozs7QUMzR08sTUFBTXZCLFlBQVksR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQTJDM0I7Ozs7Ozs7Ozs7Ozs7O0FDL0R3Rzs7QUFFekc7QUFDQSw4QkFBOEI7O0FBRTlCLE9BQU8sbURBQVEsVUFBVSxtREFBUSxtQkFBbUI7O0FBRXBEO0FBQ0EsU0FBUyx5REFBYztBQUN2QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHLEVBQUUscUVBQTBCOztBQUUvQixNQUFNLGlEQUFNLFNBQVMsaURBQU07QUFDM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUyx5REFBYztBQUN2QiwyQkFBMkI7QUFDM0I7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLFFBQVEsd0RBQWEsaUJBQWlCLGlEQUFNLGlCQUFpQix3REFBYSxlQUFlLHdEQUFhO0FBQ3RHLGtCQUFrQjs7QUFFbEI7QUFDQSxnQkFBZ0I7QUFDaEIsR0FBRztBQUNIOztBQUVBLGlFQUFlLElBQUksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Aa2llLXRvb2xzL2Rtbi1lZGl0b3IvLi4vcG1tbC1lZGl0b3ItbWFyc2hhbGxlci9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vQGtpZS10b29scy9kbW4tZWRpdG9yLy4vc3Rvcmllcy9kZXYvUGxheWdyb3VuZC5zdG9yaWVzLnRzeCIsIndlYnBhY2s6Ly9Aa2llLXRvb2xzL2Rtbi1lZGl0b3IvLi9zdG9yaWVzL21pc2MvZW1wdHkvRW1wdHkuc3Rvcmllcy50c3giLCJ3ZWJwYWNrOi8vQGtpZS10b29scy9kbW4tZWRpdG9yLy4vc3Rvcmllcy9kZXYvYXZhaWxhYmxlTW9kZWxzVG9JbmNsdWRlLnRzIiwid2VicGFjazovL0BraWUtdG9vbHMvZG1uLWVkaXRvci8uL3N0b3JpZXMvZG1uRWRpdG9yU3Rvcmllc1dyYXBwZXIudHN4Iiwid2VicGFjazovL0BraWUtdG9vbHMvZG1uLWVkaXRvci8uL3N0b3JpZXMvbWlzYy9lbXB0eVdpdGhBdmFpbGFibGVFeHRlcm5hbE1vZGVscy90ZXN0VHJlZVBtbWwudHMiLCJ3ZWJwYWNrOi8vQGtpZS10b29scy9kbW4tZWRpdG9yLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9kZWVwLW9iamVjdC1kaWZmQDEuMS45L25vZGVfbW9kdWxlcy9kZWVwLW9iamVjdC1kaWZmL21qcy9kaWZmLmpzIiwid2VicGFjazovL0BraWUtdG9vbHMvZG1uLWVkaXRvci8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZGVlcC1vYmplY3QtZGlmZkAxLjEuOS9ub2RlX21vZHVsZXMvZGVlcC1vYmplY3QtZGlmZi9tanMvdXRpbHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIExpY2Vuc2VkIHRvIHRoZSBBcGFjaGUgU29mdHdhcmUgRm91bmRhdGlvbiAoQVNGKSB1bmRlciBvbmVcbiAqIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiAgU2VlIHRoZSBOT1RJQ0UgZmlsZVxuICogZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb25cbiAqIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLiAgVGhlIEFTRiBsaWNlbnNlcyB0aGlzIGZpbGVcbiAqIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGVcbiAqIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuICogd2l0aCB0aGUgTGljZW5zZS4gIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsXG4gKiBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxuICogXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcbiAqIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZVxuICogc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9uc1xuICogdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuZXhwb3J0ICogZnJvbSBcIi4vYXBpXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9tYXJzaGFsbGVyXCI7XG4iLCIvKlxuICogTGljZW5zZWQgdG8gdGhlIEFwYWNoZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIChBU0YpIHVuZGVyIG9uZVxuICogb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuICBTZWUgdGhlIE5PVElDRSBmaWxlXG4gKiBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvblxuICogcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuICBUaGUgQVNGIGxpY2Vuc2VzIHRoaXMgZmlsZVxuICogdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZVxuICogXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4gKiB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZyxcbiAqIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXG4gKiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxuICogS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlXG4gKiBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zXG4gKiB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VNZW1vLCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdHlwZSB7IE1ldGEsIFN0b3J5T2JqIH0gZnJvbSBcIkBzdG9yeWJvb2svcmVhY3RcIjtcbmltcG9ydCBcIkBwYXR0ZXJuZmx5L3JlYWN0LWNvcmUvZGlzdC9zdHlsZXMvYmFzZS5jc3NcIjtcbmltcG9ydCB7IEZsZXgsIEZsZXhJdGVtIH0gZnJvbSBcIkBwYXR0ZXJuZmx5L3JlYWN0LWNvcmUvZGlzdC9qcy9sYXlvdXRzL0ZsZXhcIjtcbmltcG9ydCB7IFBhZ2UsIFBhZ2VTZWN0aW9uIH0gZnJvbSBcIkBwYXR0ZXJuZmx5L3JlYWN0LWNvcmUvZGlzdC9qcy9jb21wb25lbnRzL1BhZ2VcIjtcbmltcG9ydCB7IERtbkxhdGVzdE1vZGVsLCBEbW5NYXJzaGFsbGVyLCBnZXRNYXJzaGFsbGVyIH0gZnJvbSBcIkBraWUtdG9vbHMvZG1uLW1hcnNoYWxsZXJcIjtcbmltcG9ydCB7IG5vcm1hbGl6ZSwgTm9ybWFsaXplZCB9IGZyb20gXCJAa2llLXRvb2xzL2Rtbi1tYXJzaGFsbGVyL2Rpc3Qvbm9ybWFsaXphdGlvbi9ub3JtYWxpemVcIjtcbmltcG9ydCB7IGF2YWlsYWJsZU1vZGVsc0J5UGF0aCwgbW9kZWxzQnlOYW1lc3BhY2UgfSBmcm9tIFwiLi9hdmFpbGFibGVNb2RlbHNUb0luY2x1ZGVcIjtcbmltcG9ydCB7IGdlbmVyYXRlRW1wdHlEbW4xNSB9IGZyb20gXCIuLi9taXNjL2VtcHR5L0VtcHR5LnN0b3JpZXNcIjtcbmltcG9ydCB7IERtbkVkaXRvcldyYXBwZXIgfSBmcm9tIFwiLi4vZG1uRWRpdG9yU3Rvcmllc1dyYXBwZXJcIjtcbmltcG9ydCB7IERtbkVkaXRvclByb3BzLCBFeHRlcm5hbE1vZGVsc0luZGV4LCBPbkRtbk1vZGVsQ2hhbmdlLCBPblJlcXVlc3RFeHRlcm5hbE1vZGVsQnlQYXRoLCBPblJlcXVlc3RFeHRlcm5hbE1vZGVsc0F2YWlsYWJsZVRvSW5jbHVkZSwgT25SZXF1ZXN0VG9KdW1wVG9QYXRoIH0gZnJvbSBcIi4uLy4uL3NyYy9EbW5FZGl0b3JcIjtcbmltcG9ydCB7IFVTRV9DQVNFX01PREVMUyB9IGZyb20gXCIuLi91c2VDYXNlcy9tb2RlbHMvbW9kZWxzXCI7XG5jb25zdCBpbml0aWFsTW9kZWwgPSBnZW5lcmF0ZUVtcHR5RG1uMTUoKTtcbmZ1bmN0aW9uIERldlBsYXlncm91bmQoYXJnczogRG1uRWRpdG9yUHJvcHMpIHtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZTx7XG4gICAgbWFyc2hhbGxlcjogRG1uTWFyc2hhbGxlcjtcbiAgICBzdGFjazogTm9ybWFsaXplZDxEbW5MYXRlc3RNb2RlbD5bXTtcbiAgICBwb2ludGVyOiBudW1iZXI7XG4gIH0+KCgpID0+IHtcbiAgICBjb25zdCBpbml0aWFsRG1uTWFyc2hhbGxlciA9IGdldE1hcnNoYWxsZXIoaW5pdGlhbE1vZGVsLCB7XG4gICAgICB1cGdyYWRlVG86IFwibGF0ZXN0XCJcbiAgICB9KTtcbiAgICByZXR1cm4ge1xuICAgICAgbWFyc2hhbGxlcjogaW5pdGlhbERtbk1hcnNoYWxsZXIsXG4gICAgICBzdGFjazogW25vcm1hbGl6ZShpbml0aWFsRG1uTWFyc2hhbGxlci5wYXJzZXIucGFyc2UoKSldLFxuICAgICAgcG9pbnRlcjogMFxuICAgIH07XG4gIH0pO1xuICBjb25zdCBvbkRyb3AgPSB1c2VDYWxsYmFjaygoZTogUmVhY3QuRHJhZ0V2ZW50KSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJETU4gRWRpdG9yIDo6IFBsYXlncm91bmQgOjogRmlsZShzKSBkcm9wcGVkISBPcGVuaW5nIGl0LlwiKTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7IC8vIE5lY2Vzc2FyeSB0byBkaXNhYmxlIHRoZSBicm93c2VyJ3MgZGVmYXVsdCAnb25Ecm9wJyBoYW5kbGluZy5cblxuICAgIGlmIChlLmRhdGFUcmFuc2Zlci5pdGVtcykge1xuICAgICAgLy8gVXNlIERhdGFUcmFuc2Zlckl0ZW1MaXN0IGludGVyZmFjZSB0byBhY2Nlc3MgdGhlIGZpbGUocylcbiAgICAgIFsuLi5lLmRhdGFUcmFuc2Zlci5pdGVtc10uZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICBpZiAoaXRlbS5raW5kID09PSBcImZpbGVcIikge1xuICAgICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgICAgcmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICh7XG4gICAgICAgICAgICB0YXJnZXRcbiAgICAgICAgICB9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtYXJzaGFsbGVyID0gZ2V0TWFyc2hhbGxlcih0YXJnZXQ/LnJlc3VsdCBhcyBzdHJpbmcsIHtcbiAgICAgICAgICAgICAgdXBncmFkZVRvOiBcImxhdGVzdFwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNldFN0YXRlKHtcbiAgICAgICAgICAgICAgbWFyc2hhbGxlcixcbiAgICAgICAgICAgICAgc3RhY2s6IFtub3JtYWxpemUobWFyc2hhbGxlci5wYXJzZXIucGFyc2UoKSldLFxuICAgICAgICAgICAgICBwb2ludGVyOiAwXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZWFkZXIucmVhZEFzVGV4dChpdGVtLmdldEFzRmlsZSgpIGFzIGFueSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgW10pO1xuICBjb25zdCBvbkRyYWdPdmVyID0gdXNlQ2FsbGJhY2soKGU6IFJlYWN0LkRyYWdFdmVudCkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTsgLy8gTmVjZXNzYXJ5IHRvIGRpc2FibGUgdGhlIGJyb3dzZXIncyBkZWZhdWx0ICdvbkRyb3AnIGhhbmRsaW5nLlxuICB9LCBbXSk7XG4gIGNvbnN0IHJlc2V0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGNvbnN0IG1hcnNoYWxsZXIgPSBnZXRNYXJzaGFsbGVyKGdlbmVyYXRlRW1wdHlEbW4xNSgpLCB7XG4gICAgICB1cGdyYWRlVG86IFwibGF0ZXN0XCJcbiAgICB9KTtcbiAgICBzZXRTdGF0ZSh7XG4gICAgICBtYXJzaGFsbGVyLFxuICAgICAgc3RhY2s6IFtub3JtYWxpemUobWFyc2hhbGxlci5wYXJzZXIucGFyc2UoKSldLFxuICAgICAgcG9pbnRlcjogMFxuICAgIH0pO1xuICB9LCBbXSk7XG4gIGNvbnN0IGN1cnJlbnRNb2RlbCA9IHN0YXRlLnN0YWNrW3N0YXRlLnBvaW50ZXJdO1xuICBjb25zdCBkb3dubG9hZFJlZiA9IHVzZVJlZjxIVE1MQW5jaG9yRWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IGRvd25sb2FkQXNYbWwgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaWYgKGRvd25sb2FkUmVmLmN1cnJlbnQpIHtcbiAgICAgIGNvbnN0IGZpbGVCbG9iID0gbmV3IEJsb2IoW3N0YXRlLm1hcnNoYWxsZXIuYnVpbGRlci5idWlsZChjdXJyZW50TW9kZWwpXSwge1xuICAgICAgICB0eXBlOiBcInRleHQveG1sXCJcbiAgICAgIH0pO1xuICAgICAgZG93bmxvYWRSZWYuY3VycmVudC5kb3dubG9hZCA9IGBkbW4tJHtjcmVhdGVJZCgxMCl9LmRtbmA7XG4gICAgICBkb3dubG9hZFJlZi5jdXJyZW50LmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGVCbG9iKTtcbiAgICAgIGRvd25sb2FkUmVmLmN1cnJlbnQuY2xpY2soKTtcbiAgICB9XG4gIH0sIFtjdXJyZW50TW9kZWwsIHN0YXRlLm1hcnNoYWxsZXIuYnVpbGRlcl0pO1xuICBjb25zdCBjb3B5QXNYbWwgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoc3RhdGUubWFyc2hhbGxlci5idWlsZGVyLmJ1aWxkKGN1cnJlbnRNb2RlbCkpO1xuICB9LCBbY3VycmVudE1vZGVsLCBzdGF0ZS5tYXJzaGFsbGVyLmJ1aWxkZXJdKTtcbiAgY29uc3QgdW5kbyA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRTdGF0ZShwcmV2ID0+ICh7XG4gICAgICAuLi5wcmV2LFxuICAgICAgcG9pbnRlcjogTWF0aC5tYXgoMCwgcHJldi5wb2ludGVyIC0gMSlcbiAgICB9KSk7XG4gIH0sIFtdKTtcbiAgY29uc3QgcmVkbyA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRTdGF0ZShwcmV2ID0+ICh7XG4gICAgICAuLi5wcmV2LFxuICAgICAgcG9pbnRlcjogTWF0aC5taW4ocHJldi5zdGFjay5sZW5ndGggLSAxLCBwcmV2LnBvaW50ZXIgKyAxKVxuICAgIH0pKTtcbiAgfSwgW10pO1xuICBjb25zdCBvbk1vZGVsQ2hhbmdlID0gdXNlQ2FsbGJhY2s8T25EbW5Nb2RlbENoYW5nZT4obW9kZWwgPT4ge1xuICAgIHNldFN0YXRlKHByZXYgPT4ge1xuICAgICAgY29uc3QgbmV3U3RhY2sgPSBwcmV2LnN0YWNrLnNsaWNlKDAsIHByZXYucG9pbnRlciArIDEpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4ucHJldixcbiAgICAgICAgc3RhY2s6IFsuLi5uZXdTdGFjaywgbW9kZWxdLFxuICAgICAgICBwb2ludGVyOiBuZXdTdGFjay5sZW5ndGhcbiAgICAgIH07XG4gICAgfSk7XG4gIH0sIFtdKTtcbiAgY29uc3Qgb25TZWxlY3RNb2RlbCA9IHVzZUNhbGxiYWNrKChuZXdNb2RlbDogRG1uTGF0ZXN0TW9kZWwpID0+IHtcbiAgICBvbk1vZGVsQ2hhbmdlKG5vcm1hbGl6ZShuZXdNb2RlbCkpO1xuICB9LCBbb25Nb2RlbENoYW5nZV0pO1xuICBjb25zdCBvblJlcXVlc3RUb0p1bXBUb1BhdGggPSB1c2VDYWxsYmFjazxPblJlcXVlc3RUb0p1bXBUb1BhdGg+KHBhdGggPT4ge1xuICAgIGFsZXJ0KFwiSnVtcGluZyB0byBmaWxlIFwiICsgcGF0aCk7XG4gIH0sIFtdKTtcbiAgY29uc3QgZXh0ZXJuYWxNb2RlbHNCeU5hbWVzcGFjZSA9IHVzZU1lbW88RXh0ZXJuYWxNb2RlbHNJbmRleD4oKCkgPT4ge1xuICAgIHJldHVybiAoY3VycmVudE1vZGVsLmRlZmluaXRpb25zLmltcG9ydCA/PyBbXSkucmVkdWNlKChhY2MsIGkpID0+IHtcbiAgICAgIGFjY1tpW1wiQF9uYW1lc3BhY2VcIl1dID0gbW9kZWxzQnlOYW1lc3BhY2VbaVtcIkBfbmFtZXNwYWNlXCJdXTtcbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30gYXMgRXh0ZXJuYWxNb2RlbHNJbmRleCk7XG4gIH0sIFtjdXJyZW50TW9kZWwuZGVmaW5pdGlvbnMuaW1wb3J0XSk7XG4gIGNvbnN0IG9uUmVxdWVzdEV4dGVybmFsTW9kZWxCeVBhdGggPSB1c2VDYWxsYmFjazxPblJlcXVlc3RFeHRlcm5hbE1vZGVsQnlQYXRoPihhc3luYyBwYXRoID0+IHtcbiAgICByZXR1cm4gYXZhaWxhYmxlTW9kZWxzQnlQYXRoW3BhdGhdID8/IG51bGw7XG4gIH0sIFtdKTtcbiAgY29uc3Qgb25SZXF1ZXN0RXh0ZXJuYWxNb2RlbHNBdmFpbGFibGVUb0luY2x1ZGUgPSB1c2VDYWxsYmFjazxPblJlcXVlc3RFeHRlcm5hbE1vZGVsc0F2YWlsYWJsZVRvSW5jbHVkZT4oYXN5bmMgKCkgPT4ge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhhdmFpbGFibGVNb2RlbHNCeVBhdGgpO1xuICB9LCBbXSk7XG4gIGNvbnN0IGlzVW5kb0VuYWJsZWQgPSBzdGF0ZS5wb2ludGVyID4gMDtcbiAgY29uc3QgaXNSZWRvRW5hYmxlZCA9IHN0YXRlLnBvaW50ZXIgIT09IHN0YXRlLnN0YWNrLmxlbmd0aCAtIDE7XG4gIHJldHVybiA8PlxuICAgICAge2N1cnJlbnRNb2RlbCAmJiA8ZGl2IHN0eWxlPXt7XG4gICAgICB3aWR0aDogXCIxMDB2d1wiLFxuICAgICAgaGVpZ2h0OiBcIjEwMHZoXCJcbiAgICB9fT5cbiAgICAgICAgICA8UGFnZSBvbkRyYWdPdmVyPXtvbkRyYWdPdmVyfSBvbkRyb3A9e29uRHJvcH0+XG4gICAgICAgICAgICA8UGFnZVNlY3Rpb24gdmFyaWFudD17XCJsaWdodFwifSBpc0ZpbGxlZD17ZmFsc2V9IHBhZGRpbmc9e3tcbiAgICAgICAgICBkZWZhdWx0OiBcInBhZGRpbmdcIlxuICAgICAgICB9fT5cbiAgICAgICAgICAgICAgPEZsZXgganVzdGlmeUNvbnRlbnQ9e3tcbiAgICAgICAgICAgIGRlZmF1bHQ6IFwianVzdGlmeUNvbnRlbnRTcGFjZUJldHdlZW5cIlxuICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgIDxGbGV4SXRlbT5cbiAgICAgICAgICAgICAgICAgIDxoNT4oRHJhZyAmIGRyb3AgYSBmaWxlIGFueXdoZXJlIHRvIG9wZW4gaXQpPC9oNT5cbiAgICAgICAgICAgICAgICA8L0ZsZXhJdGVtPlxuICAgICAgICAgICAgICAgIDxGbGV4SXRlbSBzaHJpbms9e3tcbiAgICAgICAgICAgICAgZGVmYXVsdDogXCJzaHJpbmtcIlxuICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IG9uU2VsZWN0TW9kZWwoVVNFX0NBU0VfTU9ERUxTLmxvYW5QcmVRdWFsaWZpY2F0aW9uLm1vZGVsKX0+XG4gICAgICAgICAgICAgICAgICAgIEV4OiBMb2FuIFByZS1RdWFsaWZpY2F0aW9uXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICZuYnNwOyAmbmJzcDtcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gb25TZWxlY3RNb2RlbChVU0VfQ0FTRV9NT0RFTFMuYXV0b2xheW91dC5tb2RlbCl9PkV4OiBBdXRvbGF5b3V0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAmbmJzcDsgJm5ic3A7IHwgJm5ic3A7ICZuYnNwO1xuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBkaXNhYmxlZD17IWlzVW5kb0VuYWJsZWR9IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogaXNVbmRvRW5hYmxlZCA/IDEgOiAwLjVcbiAgICAgICAgICAgICAgfX0gb25DbGljaz17dW5kb30+XG4gICAgICAgICAgICAgICAgICAgIHtgVW5kbyAoJHtzdGF0ZS5wb2ludGVyfSlgfVxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAmbmJzcDsgJm5ic3A7XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGRpc2FibGVkPXshaXNSZWRvRW5hYmxlZH0gc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiBpc1JlZG9FbmFibGVkID8gMSA6IDAuNVxuICAgICAgICAgICAgICB9fSBvbkNsaWNrPXtyZWRvfT5cbiAgICAgICAgICAgICAgICAgICAge2BSZWRvICgke3N0YXRlLnN0YWNrLmxlbmd0aCAtIDEgLSBzdGF0ZS5wb2ludGVyfSlgfVxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAmbmJzcDsgJm5ic3A7IHwgJm5ic3A7ICZuYnNwO1xuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtyZXNldH0+UmVzZXQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICZuYnNwOyAmbmJzcDtcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17Y29weUFzWG1sfT5Db3B5IFhNTDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgJm5ic3A7ICZuYnNwO1xuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtkb3dubG9hZEFzWG1sfT5Eb3dubG9hZDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvRmxleEl0ZW0+XG4gICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgICAgPGEgcmVmPXtkb3dubG9hZFJlZn0gLz5cbiAgICAgICAgICAgIDwvUGFnZVNlY3Rpb24+XG4gICAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICAgIDxQYWdlU2VjdGlvbiB2YXJpYW50PXtcImxpZ2h0XCJ9IGlzRmlsbGVkPXt0cnVlfSBoYXNPdmVyZmxvd1Njcm9sbD17dHJ1ZX0gYXJpYS1sYWJlbD17XCJlZGl0b3JcIn0gcGFkZGluZz17e1xuICAgICAgICAgIGRlZmF1bHQ6IFwibm9QYWRkaW5nXCJcbiAgICAgICAgfX0+XG4gICAgICAgICAgICAgIHtEbW5FZGl0b3JXcmFwcGVyKHtcbiAgICAgICAgICAgIG1vZGVsOiBjdXJyZW50TW9kZWwsXG4gICAgICAgICAgICBvcmlnaW5hbFZlcnNpb246IGFyZ3Mub3JpZ2luYWxWZXJzaW9uLFxuICAgICAgICAgICAgb25Nb2RlbENoYW5nZSxcbiAgICAgICAgICAgIG9uUmVxdWVzdEV4dGVybmFsTW9kZWxCeVBhdGgsXG4gICAgICAgICAgICBvblJlcXVlc3RFeHRlcm5hbE1vZGVsc0F2YWlsYWJsZVRvSW5jbHVkZSxcbiAgICAgICAgICAgIGV4dGVybmFsTW9kZWxzQnlOYW1lc3BhY2U6IGV4dGVybmFsTW9kZWxzQnlOYW1lc3BhY2UsXG4gICAgICAgICAgICBleHRlcm5hbENvbnRleHROYW1lOiBhcmdzLmV4dGVybmFsQ29udGV4dE5hbWUsXG4gICAgICAgICAgICBleHRlcm5hbENvbnRleHREZXNjcmlwdGlvbjogYXJncy5leHRlcm5hbENvbnRleHREZXNjcmlwdGlvbixcbiAgICAgICAgICAgIHZhbGlkYXRpb25NZXNzYWdlczogYXJncy52YWxpZGF0aW9uTWVzc2FnZXMsXG4gICAgICAgICAgICBldmFsdWF0aW9uUmVzdWx0c0J5Tm9kZUlkOiBhcmdzLmV2YWx1YXRpb25SZXN1bHRzQnlOb2RlSWQsXG4gICAgICAgICAgICBpc3N1ZVRyYWNrZXJIcmVmOiBhcmdzLmlzc3VlVHJhY2tlckhyZWYsXG4gICAgICAgICAgICBvblJlcXVlc3RUb0p1bXBUb1BhdGgsXG4gICAgICAgICAgICBpc1JlYWRPbmx5OiBhcmdzLmlzUmVhZE9ubHlcbiAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvUGFnZVNlY3Rpb24+XG4gICAgICAgICAgPC9QYWdlPlxuICAgICAgICA8L2Rpdj59XG4gICAgPC8+O1xufVxuZnVuY3Rpb24gY3JlYXRlSWQobGVuZ3RoOiBudW1iZXIpIHtcbiAgbGV0IHJlc3VsdCA9IFwiXCI7XG4gIGNvbnN0IGNoYXJhY3RlcnMgPSBcImFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OVwiO1xuICBjb25zdCBjaGFyYWN0ZXJzTGVuZ3RoID0gY2hhcmFjdGVycy5sZW5ndGg7XG4gIGxldCBjb3VudGVyID0gMDtcbiAgd2hpbGUgKGNvdW50ZXIgPCBsZW5ndGgpIHtcbiAgICByZXN1bHQgKz0gY2hhcmFjdGVycy5jaGFyQXQoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2hhcmFjdGVyc0xlbmd0aCkpO1xuICAgIGNvdW50ZXIgKz0gMTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vLyBNb3JlIG9uIGhvdyB0byBzZXQgdXAgc3RvcmllcyBhdDogaHR0cHM6Ly9zdG9yeWJvb2suanMub3JnL2RvY3Mvd3JpdGluZy1zdG9yaWVzI2RlZmF1bHQtZXhwb3J0XG5jb25zdCBtZXRhOiBNZXRhPHR5cGVvZiBEZXZQbGF5Z3JvdW5kPiA9IHtcbiAgdGl0bGU6IFwiRGV2L1BsYXlncm91bmRcIixcbiAgY29tcG9uZW50OiBEZXZQbGF5Z3JvdW5kXG59O1xuZXhwb3J0IGRlZmF1bHQgbWV0YTtcbnR5cGUgU3RvcnkgPSBTdG9yeU9iajx0eXBlb2YgRGV2UGxheWdyb3VuZD47XG5cbi8vIE1vcmUgb24gd3JpdGluZyBzdG9yaWVzIHdpdGggYXJnczogaHR0cHM6Ly9zdG9yeWJvb2suanMub3JnL2RvY3Mvd3JpdGluZy1zdG9yaWVzL2FyZ3NcbmV4cG9ydCBjb25zdCBQbGF5Z3JvdW5kOiBTdG9yeSA9IHtcbiAgcmVuZGVyOiBhcmdzID0+IERldlBsYXlncm91bmQoYXJncyksXG4gIGFyZ3M6IHtcbiAgICBtb2RlbDogZ2V0TWFyc2hhbGxlcihpbml0aWFsTW9kZWwsIHtcbiAgICAgIHVwZ3JhZGVUbzogXCJsYXRlc3RcIlxuICAgIH0pLnBhcnNlci5wYXJzZSgpLFxuICAgIG9yaWdpbmFsVmVyc2lvbjogXCIxLjVcIixcbiAgICBldmFsdWF0aW9uUmVzdWx0c0J5Tm9kZUlkOiBuZXcgTWFwKCksXG4gICAgZXh0ZXJuYWxDb250ZXh0RGVzY3JpcHRpb246IFwiWW91J3JlIHVzaW5nIHRoZSBETU4gRWRpdG9yIFBsYXlncm91bmQsIHNvIHRoZXJlJ3Mgb25seSB0d28gc2ltcGxlIGV4dGVybmFsIG1vZGVscyB0aGF0IGNhbiBiZSBpbmNsdWRlZC5cIixcbiAgICBleHRlcm5hbENvbnRleHROYW1lOiBcIkFwYWNoZSBLSUUgOjogRE1OIEVkaXRvciA6OiBTdG9yeWJvb2sgOjogUGxheWdyb3VuZFwiLFxuICAgIGV4dGVybmFsTW9kZWxzQnlOYW1lc3BhY2U6IHt9LFxuICAgIGlzc3VlVHJhY2tlckhyZWY6IFwiaHR0cHM6Ly9naXRodWIuY29tL2FwYWNoZS9pbmN1YmF0b3Ita2llLWlzc3Vlcy9pc3N1ZXMvbmV3XCIsXG4gICAgdmFsaWRhdGlvbk1lc3NhZ2VzOiB7fSxcbiAgICBpc1JlYWRPbmx5OiBmYWxzZVxuICB9XG59O1xuUGxheWdyb3VuZC5wYXJhbWV0ZXJzID0ge1xuICAuLi5QbGF5Z3JvdW5kLnBhcmFtZXRlcnMsXG4gIGRvY3M6IHtcbiAgICAuLi5QbGF5Z3JvdW5kLnBhcmFtZXRlcnM/LmRvY3MsXG4gICAgc291cmNlOiB7XG4gICAgICBvcmlnaW5hbFNvdXJjZTogXCJ7XFxuICByZW5kZXI6IGFyZ3MgPT4gRGV2UGxheWdyb3VuZChhcmdzKSxcXG4gIGFyZ3M6IHtcXG4gICAgbW9kZWw6IGdldE1hcnNoYWxsZXIoaW5pdGlhbE1vZGVsLCB7XFxuICAgICAgdXBncmFkZVRvOiBcXFwibGF0ZXN0XFxcIlxcbiAgICB9KS5wYXJzZXIucGFyc2UoKSxcXG4gICAgb3JpZ2luYWxWZXJzaW9uOiBcXFwiMS41XFxcIixcXG4gICAgZXZhbHVhdGlvblJlc3VsdHNCeU5vZGVJZDogbmV3IE1hcCgpLFxcbiAgICBleHRlcm5hbENvbnRleHREZXNjcmlwdGlvbjogXFxcIllvdSdyZSB1c2luZyB0aGUgRE1OIEVkaXRvciBQbGF5Z3JvdW5kLCBzbyB0aGVyZSdzIG9ubHkgdHdvIHNpbXBsZSBleHRlcm5hbCBtb2RlbHMgdGhhdCBjYW4gYmUgaW5jbHVkZWQuXFxcIixcXG4gICAgZXh0ZXJuYWxDb250ZXh0TmFtZTogXFxcIkFwYWNoZSBLSUUgOjogRE1OIEVkaXRvciA6OiBTdG9yeWJvb2sgOjogUGxheWdyb3VuZFxcXCIsXFxuICAgIGV4dGVybmFsTW9kZWxzQnlOYW1lc3BhY2U6IHt9LFxcbiAgICBpc3N1ZVRyYWNrZXJIcmVmOiBcXFwiaHR0cHM6Ly9naXRodWIuY29tL2FwYWNoZS9pbmN1YmF0b3Ita2llLWlzc3Vlcy9pc3N1ZXMvbmV3XFxcIixcXG4gICAgdmFsaWRhdGlvbk1lc3NhZ2VzOiB7fSxcXG4gICAgaXNSZWFkT25seTogZmFsc2VcXG4gIH1cXG59XCIsXG4gICAgICAuLi5QbGF5Z3JvdW5kLnBhcmFtZXRlcnM/LmRvY3M/LnNvdXJjZVxuICAgIH1cbiAgfVxufTsiLCIvKlxuICogTGljZW5zZWQgdG8gdGhlIEFwYWNoZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIChBU0YpIHVuZGVyIG9uZVxuICogb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuICBTZWUgdGhlIE5PVElDRSBmaWxlXG4gKiBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvblxuICogcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuICBUaGUgQVNGIGxpY2Vuc2VzIHRoaXMgZmlsZVxuICogdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZVxuICogXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4gKiB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZyxcbiAqIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXG4gKiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxuICogS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlXG4gKiBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zXG4gKiB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgdHlwZSB7IE1ldGEsIFN0b3J5T2JqIH0gZnJvbSBcIkBzdG9yeWJvb2svcmVhY3RcIjtcbmltcG9ydCB7IGdldE1hcnNoYWxsZXIgfSBmcm9tIFwiQGtpZS10b29scy9kbW4tbWFyc2hhbGxlclwiO1xuaW1wb3J0IHsgbnMgYXMgZG1uMTVucyB9IGZyb20gXCJAa2llLXRvb2xzL2Rtbi1tYXJzaGFsbGVyL2Rpc3Qvc2NoZW1hcy9kbW4tMV81L3RzLWdlbi9tZXRhXCI7XG5pbXBvcnQgeyBnZW5lcmF0ZVV1aWQgfSBmcm9tIFwiQGtpZS10b29scy9ib3hlZC1leHByZXNzaW9uLWNvbXBvbmVudC9kaXN0L2FwaVwiO1xuaW1wb3J0IHsgRE1OMTVfU1BFQyB9IGZyb20gXCJAa2llLXRvb2xzL2Rtbi1tYXJzaGFsbGVyL2Rpc3Qvc2NoZW1hcy9kbW4tMV81L0RtbjE1U3BlY1wiO1xuaW1wb3J0IHsgRG1uRWRpdG9yV3JhcHBlciwgU3Rvcnlib29rRG1uRWRpdG9yUHJvcHMgfSBmcm9tIFwiLi4vLi4vZG1uRWRpdG9yU3Rvcmllc1dyYXBwZXJcIjtcbmltcG9ydCB7IERtbkVkaXRvciwgRG1uRWRpdG9yUHJvcHMgfSBmcm9tIFwiLi4vLi4vLi4vc3JjL0RtbkVkaXRvclwiO1xuZXhwb3J0IGNvbnN0IGdlbmVyYXRlRW1wdHlEbW4xNSA9ICgpID0+IGA8P3htbCB2ZXJzaW9uPVwiMS4wXCIgZW5jb2Rpbmc9XCJVVEYtOFwiPz5cbjxkZWZpbml0aW9uc1xuICB4bWxucz1cIiR7ZG1uMTVucy5nZXQoXCJcIil9XCJcbiAgZXhwcmVzc2lvbkxhbmd1YWdlPVwiJHtETU4xNV9TUEVDLmV4cHJlc3Npb25MYW5ndWFnZS5kZWZhdWx0fVwiXG4gIG5hbWVzcGFjZT1cImh0dHBzOi8va2llLmFwYWNoZS5vcmcvZG1uLyR7Z2VuZXJhdGVVdWlkKCl9XCJcbiAgaWQ9XCIke2dlbmVyYXRlVXVpZCgpfVwiXG4gIG5hbWU9XCJETU4ke2dlbmVyYXRlVXVpZCgpfVwiPlxuPC9kZWZpbml0aW9ucz5gO1xuY29uc3QgbWV0YTogTWV0YTxEbW5FZGl0b3JQcm9wcz4gPSB7XG4gIHRpdGxlOiBcIk1pc2MvRW1wdHlcIixcbiAgY29tcG9uZW50OiBEbW5FZGl0b3IsXG4gIGluY2x1ZGVTdG9yaWVzOiAvXltBLVpdL1xufTtcbmV4cG9ydCBkZWZhdWx0IG1ldGE7XG50eXBlIFN0b3J5ID0gU3RvcnlPYmo8U3Rvcnlib29rRG1uRWRpdG9yUHJvcHM+O1xuY29uc3QgbWFyc2hhbGxlciA9IGdldE1hcnNoYWxsZXIoZ2VuZXJhdGVFbXB0eURtbjE1KCksIHtcbiAgdXBncmFkZVRvOiBcImxhdGVzdFwiXG59KTtcbmNvbnN0IG1vZGVsID0gbWFyc2hhbGxlci5wYXJzZXIucGFyc2UoKTtcbmV4cG9ydCBjb25zdCBFbXB0eTogU3RvcnkgPSB7XG4gIHJlbmRlcjogYXJncyA9PiBEbW5FZGl0b3JXcmFwcGVyKCksXG4gIGFyZ3M6IHtcbiAgICBtb2RlbDogbW9kZWwsXG4gICAgb3JpZ2luYWxWZXJzaW9uOiBcIjEuNVwiLFxuICAgIGV2YWx1YXRpb25SZXN1bHRzQnlOb2RlSWQ6IG5ldyBNYXAoKSxcbiAgICBleHRlcm5hbENvbnRleHREZXNjcmlwdGlvbjogXCJUaGUgU3Rvcnlib29rIGZvciB0aGUgRE1OIEVkaXRvclwiLFxuICAgIGV4dGVybmFsQ29udGV4dE5hbWU6IFwiQXBhY2hlIEtJRSA6OiBETU4gRWRpdG9yIDo6IFN0b3J5Ym9va1wiLFxuICAgIGV4dGVybmFsTW9kZWxzQnlOYW1lc3BhY2U6IHt9LFxuICAgIGlzc3VlVHJhY2tlckhyZWY6IFwiXCIsXG4gICAgdmFsaWRhdGlvbk1lc3NhZ2VzOiB7fSxcbiAgICBpc1JlYWRPbmx5OiBmYWxzZSxcbiAgICB4bWw6IG1hcnNoYWxsZXIuYnVpbGRlci5idWlsZChtb2RlbClcbiAgfVxufTtcbkVtcHR5LnBhcmFtZXRlcnMgPSB7XG4gIC4uLkVtcHR5LnBhcmFtZXRlcnMsXG4gIGRvY3M6IHtcbiAgICAuLi5FbXB0eS5wYXJhbWV0ZXJzPy5kb2NzLFxuICAgIHNvdXJjZToge1xuICAgICAgb3JpZ2luYWxTb3VyY2U6IFwie1xcbiAgcmVuZGVyOiBhcmdzID0+IERtbkVkaXRvcldyYXBwZXIoKSxcXG4gIGFyZ3M6IHtcXG4gICAgbW9kZWw6IG1vZGVsLFxcbiAgICBvcmlnaW5hbFZlcnNpb246IFxcXCIxLjVcXFwiLFxcbiAgICBldmFsdWF0aW9uUmVzdWx0c0J5Tm9kZUlkOiBuZXcgTWFwKCksXFxuICAgIGV4dGVybmFsQ29udGV4dERlc2NyaXB0aW9uOiBcXFwiVGhlIFN0b3J5Ym9vayBmb3IgdGhlIERNTiBFZGl0b3JcXFwiLFxcbiAgICBleHRlcm5hbENvbnRleHROYW1lOiBcXFwiQXBhY2hlIEtJRSA6OiBETU4gRWRpdG9yIDo6IFN0b3J5Ym9va1xcXCIsXFxuICAgIGV4dGVybmFsTW9kZWxzQnlOYW1lc3BhY2U6IHt9LFxcbiAgICBpc3N1ZVRyYWNrZXJIcmVmOiBcXFwiXFxcIixcXG4gICAgdmFsaWRhdGlvbk1lc3NhZ2VzOiB7fSxcXG4gICAgaXNSZWFkT25seTogZmFsc2UsXFxuICAgIHhtbDogbWFyc2hhbGxlci5idWlsZGVyLmJ1aWxkKG1vZGVsKVxcbiAgfVxcbn1cIixcbiAgICAgIC4uLkVtcHR5LnBhcmFtZXRlcnM/LmRvY3M/LnNvdXJjZVxuICAgIH1cbiAgfVxufTsiLCIvKlxuICogTGljZW5zZWQgdG8gdGhlIEFwYWNoZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIChBU0YpIHVuZGVyIG9uZVxuICogb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuICBTZWUgdGhlIE5PVElDRSBmaWxlXG4gKiBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvblxuICogcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuICBUaGUgQVNGIGxpY2Vuc2VzIHRoaXMgZmlsZVxuICogdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZVxuICogXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4gKiB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZyxcbiAqIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXG4gKiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxuICogS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlXG4gKiBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zXG4gKiB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgeyBnZXRNYXJzaGFsbGVyIH0gZnJvbSBcIkBraWUtdG9vbHMvZG1uLW1hcnNoYWxsZXJcIjtcbmltcG9ydCB7IG5vcm1hbGl6ZSB9IGZyb20gXCJAa2llLXRvb2xzL2Rtbi1tYXJzaGFsbGVyL2Rpc3Qvbm9ybWFsaXphdGlvbi9ub3JtYWxpemVcIjtcbmltcG9ydCB7IFhNTDJQTU1MIH0gZnJvbSBcIkBraWUtdG9vbHMvcG1tbC1lZGl0b3ItbWFyc2hhbGxlclwiO1xuaW1wb3J0ICogYXMgRG1uRWRpdG9yIGZyb20gXCIuLi8uLi9zcmMvRG1uRWRpdG9yXCI7XG5pbXBvcnQgeyBnZXRQbW1sTmFtZXNwYWNlIH0gZnJvbSBcIi4uLy4uL3NyYy9wbW1sL3BtbWxcIjtcbmltcG9ydCB7IFVTRV9DQVNFX01PREVMUyB9IGZyb20gXCIuLi91c2VDYXNlcy9tb2RlbHMvbW9kZWxzXCI7XG5pbXBvcnQgeyB0ZXN0VHJlZVBtbWwgfSBmcm9tIFwiLi4vbWlzYy9lbXB0eVdpdGhBdmFpbGFibGVFeHRlcm5hbE1vZGVscy90ZXN0VHJlZVBtbWxcIjtcblxuZXhwb3J0IGNvbnN0IHRlc3RUcmVlUG1tbE1vZGVsID0gWE1MMlBNTUwodGVzdFRyZWVQbW1sKTtcblxuZXhwb3J0IGNvbnN0IGF2YWlhYmxlTW9kZWxzOiBEbW5FZGl0b3IuRXh0ZXJuYWxNb2RlbFtdID0gW1xuICB7XG4gICAgdHlwZTogXCJkbW5cIixcbiAgICBtb2RlbDogbm9ybWFsaXplKFVTRV9DQVNFX01PREVMUy5zdW1Ca20ubW9kZWwpLFxuICAgIG5vcm1hbGl6ZWRQb3NpeFBhdGhSZWxhdGl2ZVRvVGhlT3BlbkZpbGU6IFwicGxheWdyb3VuZC9hdmFpbGFibGUtbW9kZWxzLXRvLWluY2x1ZGUvU3VtQmttLmRtblwiLFxuICAgIHN2ZzogXCJcIixcbiAgfSxcbiAge1xuICAgIHR5cGU6IFwiZG1uXCIsXG4gICAgbW9kZWw6IG5vcm1hbGl6ZShVU0VfQ0FTRV9NT0RFTFMuc3VtRGlmZkRzLm1vZGVsKSxcbiAgICBub3JtYWxpemVkUG9zaXhQYXRoUmVsYXRpdmVUb1RoZU9wZW5GaWxlOiBcInBsYXlncm91bmQvYXZhaWxhYmxlLW1vZGVscy10by1pbmNsdWRlL1N1bURpZmZEcy5kbW5cIixcbiAgICBzdmc6IFwiXCIsXG4gIH0sXG4gIHtcbiAgICB0eXBlOiBcImRtblwiLFxuICAgIG1vZGVsOiBub3JtYWxpemUoXG4gICAgICBnZXRNYXJzaGFsbGVyKGA8ZGVmaW5pdGlvbnMgeG1sbnM9XCJodHRwczovL3d3dy5vbWcub3JnL3NwZWMvRE1OLzIwMjMwMzI0L01PREVML1wiIC8+YCwge1xuICAgICAgICB1cGdyYWRlVG86IFwibGF0ZXN0XCIsXG4gICAgICB9KS5wYXJzZXIucGFyc2UoKVxuICAgICksXG4gICAgbm9ybWFsaXplZFBvc2l4UGF0aFJlbGF0aXZlVG9UaGVPcGVuRmlsZTogXCJwbGF5Z3JvdW5kL2F2YWlsYWJsZS1tb2RlbHMtdG8taW5jbHVkZS9FbXB0eS5kbW5cIixcbiAgICBzdmc6IFwiXCIsXG4gIH0sXG4gIHtcbiAgICB0eXBlOiBcInBtbWxcIixcbiAgICBtb2RlbDogdGVzdFRyZWVQbW1sTW9kZWwsXG4gICAgbm9ybWFsaXplZFBvc2l4UGF0aFJlbGF0aXZlVG9UaGVPcGVuRmlsZTogXCJwbGF5Z3JvdW5kL2F2YWlsYWJsZS1tb2RlbHMtdG8taW5jbHVkZS90ZXN0VHJlZS5wbW1sXCIsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgYXZhaWxhYmxlTW9kZWxzQnlQYXRoOiBSZWNvcmQ8c3RyaW5nLCBEbW5FZGl0b3IuRXh0ZXJuYWxNb2RlbD4gPSBPYmplY3QudmFsdWVzKGF2YWlhYmxlTW9kZWxzKS5yZWR1Y2UoXG4gIChhY2MsIHYpID0+IHtcbiAgICBhY2Nbdi5ub3JtYWxpemVkUG9zaXhQYXRoUmVsYXRpdmVUb1RoZU9wZW5GaWxlXSA9IHY7XG4gICAgcmV0dXJuIGFjYztcbiAgfSxcbiAge30gYXMgUmVjb3JkPHN0cmluZywgRG1uRWRpdG9yLkV4dGVybmFsTW9kZWw+XG4pO1xuXG5leHBvcnQgY29uc3QgbW9kZWxzQnlOYW1lc3BhY2UgPSBPYmplY3QudmFsdWVzKGF2YWlhYmxlTW9kZWxzKS5yZWR1Y2UoKGFjYywgdikgPT4ge1xuICBpZiAodi50eXBlID09PSBcImRtblwiKSB7XG4gICAgYWNjW3YubW9kZWwuZGVmaW5pdGlvbnNbXCJAX25hbWVzcGFjZVwiXV0gPSB2O1xuICB9IGVsc2UgaWYgKHYudHlwZSA9PT0gXCJwbW1sXCIpIHtcbiAgICBhY2NbZ2V0UG1tbE5hbWVzcGFjZSh7IG5vcm1hbGl6ZWRQb3NpeFBhdGhSZWxhdGl2ZVRvVGhlT3BlbkZpbGU6IHYubm9ybWFsaXplZFBvc2l4UGF0aFJlbGF0aXZlVG9UaGVPcGVuRmlsZSB9KV0gPSB2O1xuICB9XG4gIHJldHVybiBhY2M7XG59LCB7fSBhcyBEbW5FZGl0b3IuRXh0ZXJuYWxNb2RlbHNJbmRleCk7XG4iLCIvKlxuICogTGljZW5zZWQgdG8gdGhlIEFwYWNoZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIChBU0YpIHVuZGVyIG9uZVxuICogb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuICBTZWUgdGhlIE5PVElDRSBmaWxlXG4gKiBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvblxuICogcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuICBUaGUgQVNGIGxpY2Vuc2VzIHRoaXMgZmlsZVxuICogdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZVxuICogXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4gKiB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZyxcbiAqIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXG4gKiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxuICogS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlXG4gKiBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zXG4gKiB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VNZW1vLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUFyZ3MgfSBmcm9tIFwiQHN0b3J5Ym9vay9wcmV2aWV3LWFwaVwiO1xuaW1wb3J0IHtcbiAgRG1uRWRpdG9yLFxuICBEbW5FZGl0b3JQcm9wcyxcbiAgRG1uRWRpdG9yUmVmLFxuICBFdmFsdWF0aW9uUmVzdWx0c0J5Tm9kZUlkLFxuICBWYWxpZGF0aW9uTWVzc2FnZXMsXG59IGZyb20gXCIuLi9zcmMvRG1uRWRpdG9yXCI7XG5pbXBvcnQgeyBEbW5MYXRlc3RNb2RlbCwgZ2V0TWFyc2hhbGxlciB9IGZyb20gXCJAa2llLXRvb2xzL2Rtbi1tYXJzaGFsbGVyXCI7XG5pbXBvcnQgeyBub3JtYWxpemUgfSBmcm9tIFwiQGtpZS10b29scy9kbW4tbWFyc2hhbGxlci9kaXN0L25vcm1hbGl6YXRpb24vbm9ybWFsaXplXCI7XG5pbXBvcnQgeyBkaWZmIH0gZnJvbSBcImRlZXAtb2JqZWN0LWRpZmZcIjtcbmltcG9ydCB7IGdlbmVyYXRlRW1wdHlEbW4xNSB9IGZyb20gXCIuL21pc2MvZW1wdHkvRW1wdHkuc3Rvcmllc1wiO1xuXG5leHBvcnQgY29uc3QgZXZhbHVhdGlvblJlc3VsdHNCeU5vZGVJZDogRXZhbHVhdGlvblJlc3VsdHNCeU5vZGVJZCA9IG5ldyBNYXAoKTtcbmV4cG9ydCBjb25zdCB2YWxpZGF0aW9uTWVzc2FnZXM6IFZhbGlkYXRpb25NZXNzYWdlcyA9IHt9O1xuXG5leHBvcnQgdHlwZSBTdG9yeWJvb2tEbW5FZGl0b3JQcm9wcyA9IERtbkVkaXRvclByb3BzICYgeyB4bWw6IHN0cmluZyB9O1xuXG5leHBvcnQgZnVuY3Rpb24gRG1uRWRpdG9yV3JhcHBlcihwcm9wcz86IFBhcnRpYWw8U3Rvcnlib29rRG1uRWRpdG9yUHJvcHM+KSB7XG4gIGNvbnN0IFthcmdzLCB1cGRhdGVBcmdzXSA9IHVzZUFyZ3M8U3Rvcnlib29rRG1uRWRpdG9yUHJvcHM+KCk7XG4gIGNvbnN0IGFyZ3NDb3B5ID0gdXNlUmVmKGFyZ3MpO1xuICBjb25zdCByZWYgPSB1c2VSZWY8RG1uRWRpdG9yUmVmPihudWxsKTtcbiAgY29uc3QgW21vZGVsQXJncywgc2V0TW9kZWxBcmdzXSA9IHVzZVN0YXRlPERtbkxhdGVzdE1vZGVsPihhcmdzLm1vZGVsKTtcbiAgY29uc3QgbW9kZWwgPSB1c2VNZW1vKCgpID0+IHByb3BzPy5tb2RlbCA/PyBtb2RlbEFyZ3MsIFttb2RlbEFyZ3MsIHByb3BzPy5tb2RlbF0pO1xuICBjb25zdCBbbW9kZWxDaGFuZ2VkLCBzZXRNb2RlbENoYW5nZV0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IFtpc1JlYWRPbmx5LCBzZXRJc1JlYWRPbmx5XSA9IHVzZVN0YXRlKHByb3BzPy5pc1JlYWRPbmx5ID8/IGFyZ3MuaXNSZWFkT25seSA/PyBmYWxzZSk7XG5cbiAgY29uc3Qgb25Nb2RlbENoYW5nZSA9IHVzZU1lbW8oXG4gICAgKCkgPT4gKHByb3BzPy5vbk1vZGVsQ2hhbmdlID8gcHJvcHMub25Nb2RlbENoYW5nZSA6IHNldE1vZGVsQXJncyksXG4gICAgW3Byb3BzPy5vbk1vZGVsQ2hhbmdlXVxuICApO1xuXG4gIGNvbnN0IG9uT3BlbmVkQm94ZWRFeHByZXNzaW9uRWRpdG9yTm9kZUNoYW5nZU5vT3BlcmF0aW9uID0gdXNlTWVtbyhcbiAgICAoKSA9PiAobmV3T3BlbmVkTm9kZUlkOiBzdHJpbmcgfCB1bmRlZmluZWQpID0+IHt9LFxuICAgIFtdXG4gICk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoYXJncy5pc1JlYWRPbmx5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHNldElzUmVhZE9ubHkoYXJncy5pc1JlYWRPbmx5KTtcbiAgICB9XG4gIH0sIFthcmdzLmlzUmVhZE9ubHldKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChPYmplY3Qua2V5cyhkaWZmKGFyZ3NDb3B5LmN1cnJlbnQubW9kZWwsIG1vZGVsKSkubGVuZ3RoICE9PSAwKSB7XG4gICAgICB1cGRhdGVBcmdzKHtcbiAgICAgICAgLi4uYXJnc0NvcHkuY3VycmVudCxcbiAgICAgICAgbW9kZWw6IG1vZGVsLFxuICAgICAgICB4bWw6IGdldE1hcnNoYWxsZXIoZ2VuZXJhdGVFbXB0eURtbjE1KCksIHsgdXBncmFkZVRvOiBcImxhdGVzdFwiIH0pLmJ1aWxkZXIuYnVpbGQobW9kZWwpLFxuICAgICAgfSk7XG4gICAgfVxuICB9LCBbdXBkYXRlQXJncywgbW9kZWxdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChPYmplY3Qua2V5cyhkaWZmKGFyZ3NDb3B5LmN1cnJlbnQsIGFyZ3MpKS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgYXJnc0NvcHkuY3VycmVudCA9IGFyZ3M7XG4gICAgaWYgKE9iamVjdC5rZXlzKGRpZmYoYXJncy5tb2RlbCwgbW9kZWwpKS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgb25Nb2RlbENoYW5nZShub3JtYWxpemUoYXJncy5tb2RlbCkpO1xuICB9LCBbYXJncywgbW9kZWwsIG9uTW9kZWxDaGFuZ2VdKTtcblxuICBjb25zdCBvbk1vZGVsRGVib3VuY2VTdGF0ZUNoYW5nZWQgPSB1c2VDYWxsYmFjaygoY2hhbmdlZDogYm9vbGVhbikgPT4ge1xuICAgIHNldE1vZGVsQ2hhbmdlKGNoYW5nZWQpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge21vZGVsQ2hhbmdlZCAmJiAoXG4gICAgICAgIDxkaXYgZGF0YS10ZXN0aWQ9e1wic3Rvcnlib29rLS1kbW4tZWRpdG9yLW1vZGVsXCJ9IHN0eWxlPXt7IGRpc3BsYXk6IFwibm9uZVwiIH19PlxuICAgICAgICAgIHtKU09OLnN0cmluZ2lmeShtb2RlbCl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgIDxidXR0b25cbiAgICAgICAgZGF0YS10ZXN0aWQ9e1wic3Rvcnlib29rLS1kbW4tZWRpdG9yLXRvZ2dsZS1yZWFkLW9ubHlcIn1cbiAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX1cbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNSZWFkT25seSgoY3VycmVudFZhbHVlKSA9PiAhY3VycmVudFZhbHVlKX1cbiAgICAgID5cbiAgICAgICAge2lzUmVhZE9ubHkudG9TdHJpbmcoKX1cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLCB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIsIHRvcDogXCIwcHhcIiwgbGVmdDogXCIwcHhcIiB9fT5cbiAgICAgICAgPERtbkVkaXRvclxuICAgICAgICAgIHJlZj17cmVmfVxuICAgICAgICAgIG1vZGVsPXttb2RlbH1cbiAgICAgICAgICBvcmlnaW5hbFZlcnNpb249e3Byb3BzPy5vcmlnaW5hbFZlcnNpb24gPz8gYXJncy5vcmlnaW5hbFZlcnNpb259XG4gICAgICAgICAgaXNSZWFkT25seT17aXNSZWFkT25seX1cbiAgICAgICAgICBvbk1vZGVsQ2hhbmdlPXtvbk1vZGVsQ2hhbmdlfVxuICAgICAgICAgIG9uT3BlbmVkQm94ZWRFeHByZXNzaW9uRWRpdG9yTm9kZUNoYW5nZT17b25PcGVuZWRCb3hlZEV4cHJlc3Npb25FZGl0b3JOb2RlQ2hhbmdlTm9PcGVyYXRpb259XG4gICAgICAgICAgb25SZXF1ZXN0RXh0ZXJuYWxNb2RlbEJ5UGF0aD17cHJvcHM/Lm9uUmVxdWVzdEV4dGVybmFsTW9kZWxCeVBhdGggPz8gYXJncy5vblJlcXVlc3RFeHRlcm5hbE1vZGVsQnlQYXRofVxuICAgICAgICAgIG9uUmVxdWVzdEV4dGVybmFsTW9kZWxzQXZhaWxhYmxlVG9JbmNsdWRlPXtcbiAgICAgICAgICAgIHByb3BzPy5vblJlcXVlc3RFeHRlcm5hbE1vZGVsc0F2YWlsYWJsZVRvSW5jbHVkZSA/PyBhcmdzLm9uUmVxdWVzdEV4dGVybmFsTW9kZWxzQXZhaWxhYmxlVG9JbmNsdWRlXG4gICAgICAgICAgfVxuICAgICAgICAgIGV4dGVybmFsTW9kZWxzQnlOYW1lc3BhY2U9e3Byb3BzPy5leHRlcm5hbE1vZGVsc0J5TmFtZXNwYWNlID8/IGFyZ3MuZXh0ZXJuYWxNb2RlbHNCeU5hbWVzcGFjZX1cbiAgICAgICAgICBleHRlcm5hbENvbnRleHROYW1lPXtwcm9wcz8uZXh0ZXJuYWxDb250ZXh0TmFtZSA/PyBhcmdzLmV4dGVybmFsQ29udGV4dE5hbWV9XG4gICAgICAgICAgZXh0ZXJuYWxDb250ZXh0RGVzY3JpcHRpb249e3Byb3BzPy5leHRlcm5hbENvbnRleHREZXNjcmlwdGlvbiA/PyBhcmdzLmV4dGVybmFsQ29udGV4dERlc2NyaXB0aW9ufVxuICAgICAgICAgIHZhbGlkYXRpb25NZXNzYWdlcz17cHJvcHM/LnZhbGlkYXRpb25NZXNzYWdlcyA/PyBhcmdzLnZhbGlkYXRpb25NZXNzYWdlc31cbiAgICAgICAgICBldmFsdWF0aW9uUmVzdWx0c0J5Tm9kZUlkPXtwcm9wcz8uZXZhbHVhdGlvblJlc3VsdHNCeU5vZGVJZCA/PyBhcmdzLmV2YWx1YXRpb25SZXN1bHRzQnlOb2RlSWR9XG4gICAgICAgICAgaXNzdWVUcmFja2VySHJlZj17cHJvcHM/Lmlzc3VlVHJhY2tlckhyZWYgPz8gYXJncy5pc3N1ZVRyYWNrZXJIcmVmfVxuICAgICAgICAgIG9uUmVxdWVzdFRvSnVtcFRvUGF0aD17cHJvcHM/Lm9uUmVxdWVzdFRvSnVtcFRvUGF0aCA/PyBhcmdzLm9uUmVxdWVzdFRvSnVtcFRvUGF0aH1cbiAgICAgICAgICBvbk1vZGVsRGVib3VuY2VTdGF0ZUNoYW5nZWQ9e29uTW9kZWxEZWJvdW5jZVN0YXRlQ2hhbmdlZH1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuIiwiLypcbiAqIExpY2Vuc2VkIHRvIHRoZSBBcGFjaGUgU29mdHdhcmUgRm91bmRhdGlvbiAoQVNGKSB1bmRlciBvbmVcbiAqIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiAgU2VlIHRoZSBOT1RJQ0UgZmlsZVxuICogZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb25cbiAqIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLiAgVGhlIEFTRiBsaWNlbnNlcyB0aGlzIGZpbGVcbiAqIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGVcbiAqIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuICogd2l0aCB0aGUgTGljZW5zZS4gIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsXG4gKiBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxuICogXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcbiAqIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZVxuICogc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9uc1xuICogdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLy8gQ29waWVkIGZyb20ga29naXRvLWV4YW1wbGVzL2tvZ2l0by1xdWFya3VzLWV4YW1wbGVzL2Rtbi1wbW1sLXF1YXJrdXMtZXhhbXBsZS9zcmMvbWFpbi9yZXNvdXJjZXNcbmV4cG9ydCBjb25zdCB0ZXN0VHJlZVBtbWwgPSBgPFBNTUwgdmVyc2lvbj1cIjQuMlwiIHhzaTpzY2hlbWFMb2NhdGlvbj1cImh0dHA6Ly93d3cuZG1nLm9yZy9QTU1MLTRfMiBodHRwOi8vd3d3LmRtZy5vcmcvdjQtMi0xL3BtbWwtNC0yLnhzZFwiIHhtbG5zOnhzaT1cImh0dHA6Ly93d3cudzMub3JnLzIwMDEvWE1MU2NoZW1hLWluc3RhbmNlXCJcbnhtbG5zPVwiaHR0cDovL3d3dy5kbWcub3JnL1BNTUwtNF8yXCI+XG48SGVhZGVyPlxuIDxBcHBsaWNhdGlvbiBuYW1lPVwiRHJvb2xzLVBNTUxcIiB2ZXJzaW9uPVwiNy4wLjAtU05BUFNIT1RcIiAvPlxuPC9IZWFkZXI+XG5cbjxEYXRhRGljdGlvbmFyeSBudW1iZXJPZkZpZWxkcz1cIjNcIj5cbiA8RGF0YUZpZWxkIG5hbWU9XCJ0ZW1wZXJhdHVyZVwiIGRhdGFUeXBlPVwiZG91YmxlXCIgb3B0eXBlPVwiY29udGludW91c1wiIC8+XG4gPERhdGFGaWVsZCBuYW1lPVwiaHVtaWRpdHlcIiBkYXRhVHlwZT1cImRvdWJsZVwiIG9wdHlwZT1cImNvbnRpbnVvdXNcIiAvPiAgIFxuIDxEYXRhRmllbGQgbmFtZT1cImRlY2lzaW9uXCIgZGF0YVR5cGU9XCJzdHJpbmdcIiBvcHR5cGU9XCJjYXRlZ29yaWNhbFwiPiBcbiAgIDxWYWx1ZSB2YWx1ZT1cInN1bmdsYXNzZXNcIiAvPlxuICAgPFZhbHVlIHZhbHVlPVwidW1icmVsbGFcIiAvPlxuICAgPFZhbHVlIHZhbHVlPVwibm90aGluZ1wiIC8+ICAgICBcbiA8L0RhdGFGaWVsZD5cbjwvRGF0YURpY3Rpb25hcnk+XG5cbjxUcmVlTW9kZWwgbW9kZWxOYW1lPVwiRGVjaXNpb25UcmVlXCIgZnVuY3Rpb25OYW1lPVwiY2xhc3NpZmljYXRpb25cIj5cbiA8TWluaW5nU2NoZW1hPlxuICAgPE1pbmluZ0ZpZWxkIG5hbWU9XCJ0ZW1wZXJhdHVyZVwiICB1c2FnZVR5cGU9XCJhY3RpdmVcIiAvPlxuICAgPE1pbmluZ0ZpZWxkIG5hbWU9XCJodW1pZGl0eVwiICB1c2FnZVR5cGU9XCJhY3RpdmVcIiAvPlxuICAgPE1pbmluZ0ZpZWxkIG5hbWU9XCJkZWNpc2lvblwiIHVzYWdlVHlwZT1cInByZWRpY3RlZFwiIC8+XG4gPC9NaW5pbmdTY2hlbWE+XG4gPE91dHB1dD5cbiAgIDxPdXRwdXRGaWVsZCBuYW1lPVwid2VhdGhlcmRlY2lzaW9uXCIgdGFyZ2V0RmllbGQ9XCJkZWNpc2lvblwiIC8+XG4gPC9PdXRwdXQ+XG4gXG4gPE5vZGUgc2NvcmU9XCJub3RoaW5nXCIgaWQ9XCIxXCI+XG4gICA8VHJ1ZSAvPlxuICAgPE5vZGUgc2NvcmU9XCJzdW5nbGFzc2VzXCIgaWQ9XCIyXCI+XG4gICAgIDxDb21wb3VuZFByZWRpY2F0ZSBib29sZWFuT3BlcmF0b3I9XCJhbmRcIj5cbiAgICAgICA8U2ltcGxlUHJlZGljYXRlIGZpZWxkPVwidGVtcGVyYXR1cmVcIiBvcGVyYXRvcj1cImdyZWF0ZXJUaGFuXCIgdmFsdWU9XCIyNVwiIC8+XG4gICAgICAgPFNpbXBsZVByZWRpY2F0ZSBmaWVsZD1cImh1bWlkaXR5XCIgb3BlcmF0b3I9XCJsZXNzT3JFcXVhbFwiIHZhbHVlPVwiMjBcIiAvPlxuICAgICA8L0NvbXBvdW5kUHJlZGljYXRlPlxuICAgPC9Ob2RlPlxuICAgPE5vZGUgc2NvcmU9XCJ1bWJyZWxsYVwiIGlkPVwiM1wiPlxuICAgICA8U2ltcGxlUHJlZGljYXRlIGZpZWxkPVwiaHVtaWRpdHlcIiBvcGVyYXRvcj1cImdyZWF0ZXJUaGFuXCIgdmFsdWU9XCI1MFwiIC8+XG4gICA8L05vZGU+XG4gICA8Tm9kZSBzY29yZT1cIm5vdGhpbmdcIiBpZD1cIjRcIj5cbiAgICAgPFRydWUgLz5cbiAgIDwvTm9kZT5cbiA8L05vZGU+XG48L1RyZWVNb2RlbD5cbjwvUE1NTD5cbmA7XG4iLCJpbXBvcnQgeyBpc0RhdGUsIGlzRW1wdHlPYmplY3QsIGlzT2JqZWN0LCBoYXNPd25Qcm9wZXJ0eSwgbWFrZU9iamVjdFdpdGhvdXRQcm90b3R5cGUgfSBmcm9tICcuL3V0aWxzLmpzJztcblxuY29uc3QgZGlmZiA9IChsaHMsIHJocykgPT4ge1xuICBpZiAobGhzID09PSByaHMpIHJldHVybiB7fTsgLy8gZXF1YWwgcmV0dXJuIG5vIGRpZmZcblxuICBpZiAoIWlzT2JqZWN0KGxocykgfHwgIWlzT2JqZWN0KHJocykpIHJldHVybiByaHM7IC8vIHJldHVybiB1cGRhdGVkIHJoc1xuXG4gIGNvbnN0IGRlbGV0ZWRWYWx1ZXMgPSBPYmplY3Qua2V5cyhsaHMpLnJlZHVjZSgoYWNjLCBrZXkpID0+IHtcbiAgICBpZiAoIWhhc093blByb3BlcnR5KHJocywga2V5KSkge1xuICAgICAgYWNjW2tleV0gPSB1bmRlZmluZWQ7XG4gICAgICBcbiAgICB9XG5cbiAgICByZXR1cm4gYWNjO1xuICB9LCBtYWtlT2JqZWN0V2l0aG91dFByb3RvdHlwZSgpKTtcblxuICBpZiAoaXNEYXRlKGxocykgfHwgaXNEYXRlKHJocykpIHtcbiAgICBpZiAobGhzLnZhbHVlT2YoKSA9PSByaHMudmFsdWVPZigpKSByZXR1cm4ge307XG4gICAgcmV0dXJuIHJocztcbiAgfVxuXG4gIHJldHVybiBPYmplY3Qua2V5cyhyaHMpLnJlZHVjZSgoYWNjLCBrZXkpID0+IHtcbiAgICBpZiAoIWhhc093blByb3BlcnR5KGxocywga2V5KSl7XG4gICAgICBhY2Nba2V5XSA9IHJoc1trZXldOyAvLyByZXR1cm4gYWRkZWQgciBrZXlcbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSBcblxuICAgIGNvbnN0IGRpZmZlcmVuY2UgPSBkaWZmKGxoc1trZXldLCByaHNba2V5XSk7XG5cbiAgICAvLyBJZiB0aGUgZGlmZmVyZW5jZSBpcyBlbXB0eSwgYW5kIHRoZSBsaHMgaXMgYW4gZW1wdHkgb2JqZWN0IG9yIHRoZSByaHMgaXMgbm90IGFuIGVtcHR5IG9iamVjdFxuICAgIGlmIChpc0VtcHR5T2JqZWN0KGRpZmZlcmVuY2UpICYmICFpc0RhdGUoZGlmZmVyZW5jZSkgJiYgKGlzRW1wdHlPYmplY3QobGhzW2tleV0pIHx8ICFpc0VtcHR5T2JqZWN0KHJoc1trZXldKSkpXG4gICAgICByZXR1cm4gYWNjOyAvLyByZXR1cm4gbm8gZGlmZlxuXG4gICAgYWNjW2tleV0gPSBkaWZmZXJlbmNlIC8vIHJldHVybiB1cGRhdGVkIGtleVxuICAgIHJldHVybiBhY2M7IC8vIHJldHVybiB1cGRhdGVkIGtleVxuICB9LCBkZWxldGVkVmFsdWVzKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRpZmY7XG4iLCJleHBvcnQgY29uc3QgaXNEYXRlID0gZCA9PiBkIGluc3RhbmNlb2YgRGF0ZTtcbmV4cG9ydCBjb25zdCBpc0VtcHR5ID0gbyA9PiBPYmplY3Qua2V5cyhvKS5sZW5ndGggPT09IDA7XG5leHBvcnQgY29uc3QgaXNPYmplY3QgPSBvID0+IG8gIT0gbnVsbCAmJiB0eXBlb2YgbyA9PT0gJ29iamVjdCc7XG5leHBvcnQgY29uc3QgaGFzT3duUHJvcGVydHkgPSAobywgLi4uYXJncykgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG8sIC4uLmFyZ3MpXG5leHBvcnQgY29uc3QgaXNFbXB0eU9iamVjdCA9IChvKSA9PiBpc09iamVjdChvKSAmJiBpc0VtcHR5KG8pO1xuZXhwb3J0IGNvbnN0IG1ha2VPYmplY3RXaXRob3V0UHJvdG90eXBlID0gKCkgPT4gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiJdLCJuYW1lcyI6WyJ1c2VDYWxsYmFjayIsInVzZU1lbW8iLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIkZsZXgiLCJGbGV4SXRlbSIsIlBhZ2UiLCJQYWdlU2VjdGlvbiIsImdldE1hcnNoYWxsZXIiLCJub3JtYWxpemUiLCJhdmFpbGFibGVNb2RlbHNCeVBhdGgiLCJtb2RlbHNCeU5hbWVzcGFjZSIsImdlbmVyYXRlRW1wdHlEbW4xNSIsIkRtbkVkaXRvcldyYXBwZXIiLCJVU0VfQ0FTRV9NT0RFTFMiLCJpbml0aWFsTW9kZWwiLCJEZXZQbGF5Z3JvdW5kIiwiYXJncyIsInN0YXRlIiwic2V0U3RhdGUiLCJpbml0aWFsRG1uTWFyc2hhbGxlciIsInVwZ3JhZGVUbyIsIm1hcnNoYWxsZXIiLCJzdGFjayIsInBhcnNlciIsInBhcnNlIiwicG9pbnRlciIsIm9uRHJvcCIsImUiLCJjb25zb2xlIiwibG9nIiwicHJldmVudERlZmF1bHQiLCJkYXRhVHJhbnNmZXIiLCJpdGVtcyIsImZvckVhY2giLCJpdGVtIiwiaSIsImtpbmQiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9yZWYiLCJ0YXJnZXQiLCJyZXN1bHQiLCJyZWFkQXNUZXh0IiwiZ2V0QXNGaWxlIiwib25EcmFnT3ZlciIsInJlc2V0IiwiY3VycmVudE1vZGVsIiwiZG93bmxvYWRSZWYiLCJkb3dubG9hZEFzWG1sIiwiY3VycmVudCIsImZpbGVCbG9iIiwiQmxvYiIsImJ1aWxkZXIiLCJidWlsZCIsInR5cGUiLCJkb3dubG9hZCIsImNyZWF0ZUlkIiwiaHJlZiIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImNsaWNrIiwiY29weUFzWG1sIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwidW5kbyIsInByZXYiLCJNYXRoIiwibWF4IiwicmVkbyIsIm1pbiIsImxlbmd0aCIsIm9uTW9kZWxDaGFuZ2UiLCJtb2RlbCIsIm5ld1N0YWNrIiwic2xpY2UiLCJvblNlbGVjdE1vZGVsIiwibmV3TW9kZWwiLCJvblJlcXVlc3RUb0p1bXBUb1BhdGgiLCJwYXRoIiwiYWxlcnQiLCJleHRlcm5hbE1vZGVsc0J5TmFtZXNwYWNlIiwiX2EiLCJkZWZpbml0aW9ucyIsImltcG9ydCIsInJlZHVjZSIsImFjYyIsIm9uUmVxdWVzdEV4dGVybmFsTW9kZWxCeVBhdGgiLCJvblJlcXVlc3RFeHRlcm5hbE1vZGVsc0F2YWlsYWJsZVRvSW5jbHVkZSIsIk9iamVjdCIsImtleXMiLCJpc1VuZG9FbmFibGVkIiwiaXNSZWRvRW5hYmxlZCIsIl9qc3giLCJfRnJhZ21lbnQiLCJjaGlsZHJlbiIsInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJfanN4cyIsInZhcmlhbnQiLCJpc0ZpbGxlZCIsInBhZGRpbmciLCJkZWZhdWx0IiwianVzdGlmeUNvbnRlbnQiLCJzaHJpbmsiLCJvbkNsaWNrIiwibG9hblByZVF1YWxpZmljYXRpb24iLCJhdXRvbGF5b3V0IiwiZGlzYWJsZWQiLCJvcGFjaXR5IiwicmVmIiwiaGFzT3ZlcmZsb3dTY3JvbGwiLCJvcmlnaW5hbFZlcnNpb24iLCJleHRlcm5hbENvbnRleHROYW1lIiwiZXh0ZXJuYWxDb250ZXh0RGVzY3JpcHRpb24iLCJ2YWxpZGF0aW9uTWVzc2FnZXMiLCJldmFsdWF0aW9uUmVzdWx0c0J5Tm9kZUlkIiwiaXNzdWVUcmFja2VySHJlZiIsImlzUmVhZE9ubHkiLCJjaGFyYWN0ZXJzIiwiY2hhcmFjdGVyc0xlbmd0aCIsImNvdW50ZXIiLCJjaGFyQXQiLCJmbG9vciIsInJhbmRvbSIsIm1ldGEiLCJ0aXRsZSIsImNvbXBvbmVudCIsIlBsYXlncm91bmQiLCJyZW5kZXIiLCJNYXAiLCJwYXJhbWV0ZXJzIiwiZG9jcyIsInNvdXJjZSIsIm9yaWdpbmFsU291cmNlIiwiX2MiLCJfYiIsIl9fbmFtZWRFeHBvcnRzT3JkZXIiLCJucyIsImRtbjE1bnMiLCJnZW5lcmF0ZVV1aWQiLCJETU4xNV9TUEVDIiwiRG1uRWRpdG9yIiwiZ2V0IiwiZXhwcmVzc2lvbkxhbmd1YWdlIiwiaW5jbHVkZVN0b3JpZXMiLCJFbXB0eSIsInhtbCIsIlhNTDJQTU1MIiwiZ2V0UG1tbE5hbWVzcGFjZSIsInRlc3RUcmVlUG1tbCIsInRlc3RUcmVlUG1tbE1vZGVsIiwiYXZhaWFibGVNb2RlbHMiLCJzdW1Ca20iLCJub3JtYWxpemVkUG9zaXhQYXRoUmVsYXRpdmVUb1RoZU9wZW5GaWxlIiwic3ZnIiwic3VtRGlmZkRzIiwidmFsdWVzIiwidiIsInVzZUVmZmVjdCIsInVzZUFyZ3MiLCJkaWZmIiwicHJvcHMiLCJ1cGRhdGVBcmdzIiwiYXJnc0NvcHkiLCJtb2RlbEFyZ3MiLCJzZXRNb2RlbEFyZ3MiLCJtb2RlbENoYW5nZWQiLCJzZXRNb2RlbENoYW5nZSIsInNldElzUmVhZE9ubHkiLCJvbk9wZW5lZEJveGVkRXhwcmVzc2lvbkVkaXRvck5vZGVDaGFuZ2VOb09wZXJhdGlvbiIsIm5ld09wZW5lZE5vZGVJZCIsInVuZGVmaW5lZCIsIm9uTW9kZWxEZWJvdW5jZVN0YXRlQ2hhbmdlZCIsImNoYW5nZWQiLCJkaXNwbGF5IiwiSlNPTiIsInN0cmluZ2lmeSIsImN1cnJlbnRWYWx1ZSIsInRvU3RyaW5nIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0Iiwib25PcGVuZWRCb3hlZEV4cHJlc3Npb25FZGl0b3JOb2RlQ2hhbmdlIiwiX2QiLCJfZSIsIl9mIiwiX2ciLCJfaCIsIl9qIiwiX2siLCJfbCIsIl9tIl0sInNvdXJjZVJvb3QiOiIifQ==