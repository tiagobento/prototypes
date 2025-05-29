(self["webpackChunk_kie_tools_dmn_editor"] = self["webpackChunk_kie_tools_dmn_editor"] || []).push([["dev-Playground-stories"],{

/***/ "../pmml-editor-marshaller/dist/index.js":
/*!***********************************************!*\
  !*** ../pmml-editor-marshaller/dist/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Playground: () => (/* binding */ Playground),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _patternfly_react_core_dist_styles_base_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core/dist/styles/base.css */ "../../node_modules/.pnpm/@patternfly+react-core@5.4.1_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@patternfly/react-core/dist/styles/base.css");
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Flex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @patternfly/react-core/dist/js/layouts/Flex */ "../../node_modules/.pnpm/@patternfly+react-core@5.4.1_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@patternfly/react-core/dist/js/layouts/Flex/index.js");
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Flex__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_layouts_Flex__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _patternfly_react_core_dist_js_components_Page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Page */ "../../node_modules/.pnpm/@patternfly+react-core@5.4.1_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@patternfly/react-core/dist/js/components/Page/index.js");
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

/***/ "./stories/dev/availableModelsToInclude.ts":
/*!*************************************************!*\
  !*** ./stories/dev/availableModelsToInclude.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./stories/misc/emptyWithAvailableExternalModels/testTreePmml.ts":
/*!***********************************************************************!*\
  !*** ./stories/misc/emptyWithAvailableExternalModels/testTreePmml.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2LVBsYXlncm91bmQtc3Rvcmllcy45MzAyMTIzNy5pZnJhbWUuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBbUJzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQ3lDO0FBRVY7QUFDd0I7QUFDTTtBQUNNO0FBQ007QUFDVDtBQUNyQjtBQUNIO0FBRUY7QUFDNUQsTUFBTWUsWUFBWSxHQUFHSCw2RUFBa0IsRUFBRTtBQUN6QyxTQUFTSSxhQUFhQSxDQUFDQyxJQUFvQjtFQUN6QyxNQUFNLENBQUNDLEtBQUssRUFBRUMsUUFBUSxDQUFDLEdBQUdoQiwrQ0FBUSxDQUkvQixNQUFLO0lBQ04sTUFBTWlCLG9CQUFvQixHQUFHWix3RUFBYSxDQUFDTyxZQUFZLEVBQUU7TUFDdkRNLFNBQVMsRUFBRTtLQUNaLENBQUM7SUFDRixPQUFPO01BQ0xDLFVBQVUsRUFBRUYsb0JBQW9CO01BQ2hDRyxLQUFLLEVBQUUsQ0FBQ2QsaUdBQVMsQ0FBQ1csb0JBQW9CLENBQUNJLE1BQU0sQ0FBQ0MsS0FBSyxFQUFFLENBQUMsQ0FBQztNQUN2REMsT0FBTyxFQUFFO0tBQ1Y7RUFDSCxDQUFDLENBQUM7RUFDRixNQUFNQyxNQUFNLEdBQUczQixrREFBVyxDQUFFNEIsQ0FBa0IsSUFBSTtJQUNoREMsT0FBTyxDQUFDQyxHQUFHLENBQUMsMERBQTBELENBQUM7SUFDdkVGLENBQUMsQ0FBQ0csY0FBYyxFQUFFO0lBRWxCLElBQUlILENBQUMsQ0FBQ0ksWUFBWSxDQUFDQyxLQUFLLEVBQUU7TUFFeEIsQ0FBQyxHQUFHTCxDQUFDLENBQUNJLFlBQVksQ0FBQ0MsS0FBSyxDQUFDLENBQUNDLE9BQU8sQ0FBQyxDQUFDQyxJQUFJLEVBQUVDLENBQUMsS0FBSTtRQUM1QyxJQUFJRCxJQUFJLENBQUNFLElBQUksS0FBSyxNQUFNLEVBQUU7VUFDeEIsTUFBTUMsTUFBTSxHQUFHLElBQUlDLFVBQVUsRUFBRTtVQUMvQkQsTUFBTSxDQUFDRSxnQkFBZ0IsQ0FB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Aa2llLXRvb2xzL2Rtbi1lZGl0b3IvLi4vcG1tbC1lZGl0b3ItbWFyc2hhbGxlci9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vQGtpZS10b29scy9kbW4tZWRpdG9yLy4vc3Rvcmllcy9kZXYvUGxheWdyb3VuZC5zdG9yaWVzLnRzeCIsIndlYnBhY2s6Ly9Aa2llLXRvb2xzL2Rtbi1lZGl0b3IvLi9zdG9yaWVzL21pc2MvZW1wdHkvRW1wdHkuc3Rvcmllcy50c3giLCJ3ZWJwYWNrOi8vQGtpZS10b29scy9kbW4tZWRpdG9yLy4vc3Rvcmllcy9kZXYvYXZhaWxhYmxlTW9kZWxzVG9JbmNsdWRlLnRzIiwid2VicGFjazovL0BraWUtdG9vbHMvZG1uLWVkaXRvci8uL3N0b3JpZXMvZG1uRWRpdG9yU3Rvcmllc1dyYXBwZXIudHN4Iiwid2VicGFjazovL0BraWUtdG9vbHMvZG1uLWVkaXRvci8uL3N0b3JpZXMvbWlzYy9lbXB0eVdpdGhBdmFpbGFibGVFeHRlcm5hbE1vZGVscy90ZXN0VHJlZVBtbWwudHMiLCJ3ZWJwYWNrOi8vQGtpZS10b29scy9kbW4tZWRpdG9yLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9kZWVwLW9iamVjdC1kaWZmQDEuMS45L25vZGVfbW9kdWxlcy9kZWVwLW9iamVjdC1kaWZmL21qcy9kaWZmLmpzIiwid2VicGFjazovL0BraWUtdG9vbHMvZG1uLWVkaXRvci8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZGVlcC1vYmplY3QtZGlmZkAxLjEuOS9ub2RlX21vZHVsZXMvZGVlcC1vYmplY3QtZGlmZi9tanMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vQGtpZS10b29scy9kbW4tZWRpdG9yLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9sb2Rhc2hANC4xNy4yMS9ub2RlX21vZHVsZXMvbG9kYXNoL19hc3NpZ25WYWx1ZS5qcyIsIndlYnBhY2s6Ly9Aa2llLXRvb2xzL2Rtbi1lZGl0b3IvLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2xvZGFzaEA0LjE3LjIxL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VDcmVhdGUuanMiLCJ3ZWJwYWNrOi8vQGtpZS10b29scy9kbW4tZWRpdG9yLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9sb2Rhc2hANC4xNy4yMS9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlS2V5c0luLmpzIiwid2VicGFjazovL0BraWUtdG9vbHMvZG1uLWVkaXRvci8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vbG9kYXNoQDQuMTcuMjEvbm9kZV9tb2R1bGVzL2xvZGFzaC9fY2xvbmVBcnJheUJ1ZmZlci5qcyIsIndlYnBhY2s6Ly9Aa2llLXRvb2xzL2Rtbi1lZGl0b3IvLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2xvZGFzaEA0LjE3LjIxL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Nsb25lQnVmZmVyLmpzIiwid2VicGFjazovL0BraWUtdG9vbHMvZG1uLWVkaXRvci8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vbG9kYXNoQDQuMTcuMjEvbm9kZV9tb2R1bGVzL2xvZGFzaC9fY2xvbmVUeXBlZEFycmF5LmpzIiwid2VicGFjazovL0BraWUtdG9vbHMvZG1uLWVkaXRvci8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vbG9kYXNoQDQuMTcuMjEvbm9kZV9tb2R1bGVzL2xvZGFzaC9fY29weUFycmF5LmpzIiwid2VicGFjazovL0BraWUtdG9vbHMvZG1uLWVkaXRvci8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vbG9kYXNoQDQuMTcuMjEvbm9kZV9tb2R1bGVzL2xvZGFzaC9fY29weU9iamVjdC5qcyIsIndlYnBhY2s6Ly9Aa2llLXRvb2xzL2Rtbi1lZGl0b3IvLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2xvZGFzaEA0LjE3LjIxL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2luaXRDbG9uZU9iamVjdC5qcyIsIndlYnBhY2s6Ly9Aa2llLXRvb2xzL2Rtbi1lZGl0b3IvLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2xvZGFzaEA0LjE3LjIxL25vZGVfbW9kdWxlcy9sb2Rhc2gvX25hdGl2ZUtleXNJbi5qcyIsIndlYnBhY2s6Ly9Aa2llLXRvb2xzL2Rtbi1lZGl0b3IvLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2xvZGFzaEA0LjE3LjIxL25vZGVfbW9kdWxlcy9sb2Rhc2gva2V5c0luLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBMaWNlbnNlZCB0byB0aGUgQXBhY2hlIFNvZnR3YXJlIEZvdW5kYXRpb24gKEFTRikgdW5kZXIgb25lXG4gKiBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gIFNlZSB0aGUgTk9USUNFIGZpbGVcbiAqIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uXG4gKiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC4gIFRoZSBBU0YgbGljZW5zZXMgdGhpcyBmaWxlXG4gKiB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlXG4gKiBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2VcbiAqIHdpdGggdGhlIExpY2Vuc2UuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLFxuICogc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cbiAqIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXG4gKiBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGVcbiAqIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnNcbiAqIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmV4cG9ydCAqIGZyb20gXCIuL2FwaVwiO1xuZXhwb3J0ICogZnJvbSBcIi4vbWFyc2hhbGxlclwiO1xuIiwiLypcbiAqIExpY2Vuc2VkIHRvIHRoZSBBcGFjaGUgU29mdHdhcmUgRm91bmRhdGlvbiAoQVNGKSB1bmRlciBvbmVcbiAqIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiAgU2VlIHRoZSBOT1RJQ0UgZmlsZVxuICogZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb25cbiAqIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLiAgVGhlIEFTRiBsaWNlbnNlcyB0aGlzIGZpbGVcbiAqIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGVcbiAqIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuICogd2l0aCB0aGUgTGljZW5zZS4gIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsXG4gKiBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxuICogXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcbiAqIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZVxuICogc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9uc1xuICogdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlTWVtbywgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHR5cGUgeyBNZXRhLCBTdG9yeU9iaiB9IGZyb20gXCJAc3Rvcnlib29rL3JlYWN0XCI7XG5pbXBvcnQgXCJAcGF0dGVybmZseS9yZWFjdC1jb3JlL2Rpc3Qvc3R5bGVzL2Jhc2UuY3NzXCI7XG5pbXBvcnQgeyBGbGV4LCBGbGV4SXRlbSB9IGZyb20gXCJAcGF0dGVybmZseS9yZWFjdC1jb3JlL2Rpc3QvanMvbGF5b3V0cy9GbGV4XCI7XG5pbXBvcnQgeyBQYWdlLCBQYWdlU2VjdGlvbiB9IGZyb20gXCJAcGF0dGVybmZseS9yZWFjdC1jb3JlL2Rpc3QvanMvY29tcG9uZW50cy9QYWdlXCI7XG5pbXBvcnQgeyBEbW5MYXRlc3RNb2RlbCwgRG1uTWFyc2hhbGxlciwgZ2V0TWFyc2hhbGxlciB9IGZyb20gXCJAa2llLXRvb2xzL2Rtbi1tYXJzaGFsbGVyXCI7XG5pbXBvcnQgeyBub3JtYWxpemUsIE5vcm1hbGl6ZWQgfSBmcm9tIFwiQGtpZS10b29scy9kbW4tbWFyc2hhbGxlci9kaXN0L25vcm1hbGl6YXRpb24vbm9ybWFsaXplXCI7XG5pbXBvcnQgeyBhdmFpbGFibGVNb2RlbHNCeVBhdGgsIG1vZGVsc0J5TmFtZXNwYWNlIH0gZnJvbSBcIi4vYXZhaWxhYmxlTW9kZWxzVG9JbmNsdWRlXCI7XG5pbXBvcnQgeyBnZW5lcmF0ZUVtcHR5RG1uMTUgfSBmcm9tIFwiLi4vbWlzYy9lbXB0eS9FbXB0eS5zdG9yaWVzXCI7XG5pbXBvcnQgeyBEbW5FZGl0b3JXcmFwcGVyIH0gZnJvbSBcIi4uL2RtbkVkaXRvclN0b3JpZXNXcmFwcGVyXCI7XG5pbXBvcnQgeyBEbW5FZGl0b3JQcm9wcywgRXh0ZXJuYWxNb2RlbHNJbmRleCwgT25EbW5Nb2RlbENoYW5nZSwgT25SZXF1ZXN0RXh0ZXJuYWxNb2RlbEJ5UGF0aCwgT25SZXF1ZXN0RXh0ZXJuYWxNb2RlbHNBdmFpbGFibGVUb0luY2x1ZGUsIE9uUmVxdWVzdFRvSnVtcFRvUGF0aCB9IGZyb20gXCIuLi8uLi9zcmMvRG1uRWRpdG9yXCI7XG5pbXBvcnQgeyBVU0VfQ0FTRV9NT0RFTFMgfSBmcm9tIFwiLi4vdXNlQ2FzZXMvbW9kZWxzL21vZGVsc1wiO1xuY29uc3QgaW5pdGlhbE1vZGVsID0gZ2VuZXJhdGVFbXB0eURtbjE1KCk7XG5mdW5jdGlvbiBEZXZQbGF5Z3JvdW5kKGFyZ3M6IERtbkVkaXRvclByb3BzKSB7XG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGU8e1xuICAgIG1hcnNoYWxsZXI6IERtbk1hcnNoYWxsZXI7XG4gICAgc3RhY2s6IE5vcm1hbGl6ZWQ8RG1uTGF0ZXN0TW9kZWw+W107XG4gICAgcG9pbnRlcjogbnVtYmVyO1xuICB9PigoKSA9PiB7XG4gICAgY29uc3QgaW5pdGlhbERtbk1hcnNoYWxsZXIgPSBnZXRNYXJzaGFsbGVyKGluaXRpYWxNb2RlbCwge1xuICAgICAgdXBncmFkZVRvOiBcImxhdGVzdFwiXG4gICAgfSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1hcnNoYWxsZXI6IGluaXRpYWxEbW5NYXJzaGFsbGVyLFxuICAgICAgc3RhY2s6IFtub3JtYWxpemUoaW5pdGlhbERtbk1hcnNoYWxsZXIucGFyc2VyLnBhcnNlKCkpXSxcbiAgICAgIHBvaW50ZXI6IDBcbiAgICB9O1xuICB9KTtcbiAgY29uc3Qgb25Ecm9wID0gdXNlQ2FsbGJhY2soKGU6IFJlYWN0LkRyYWdFdmVudCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiRE1OIEVkaXRvciA6OiBQbGF5Z3JvdW5kIDo6IEZpbGUocykgZHJvcHBlZCEgT3BlbmluZyBpdC5cIik7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAvLyBOZWNlc3NhcnkgdG8gZGlzYWJsZSB0aGUgYnJvd3NlcidzIGRlZmF1bHQgJ29uRHJvcCcgaGFuZGxpbmcuXG5cbiAgICBpZiAoZS5kYXRhVHJhbnNmZXIuaXRlbXMpIHtcbiAgICAgIC8vIFVzZSBEYXRhVHJhbnNmZXJJdGVtTGlzdCBpbnRlcmZhY2UgdG8gYWNjZXNzIHRoZSBmaWxlKHMpXG4gICAgICBbLi4uZS5kYXRhVHJhbnNmZXIuaXRlbXNdLmZvckVhY2goKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgaWYgKGl0ZW0ua2luZCA9PT0gXCJmaWxlXCIpIHtcbiAgICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICAgIHJlYWRlci5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoe1xuICAgICAgICAgICAgdGFyZ2V0XG4gICAgICAgICAgfSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWFyc2hhbGxlciA9IGdldE1hcnNoYWxsZXIodGFyZ2V0Py5yZXN1bHQgYXMgc3RyaW5nLCB7XG4gICAgICAgICAgICAgIHVwZ3JhZGVUbzogXCJsYXRlc3RcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIG1hcnNoYWxsZXIsXG4gICAgICAgICAgICAgIHN0YWNrOiBbbm9ybWFsaXplKG1hcnNoYWxsZXIucGFyc2VyLnBhcnNlKCkpXSxcbiAgICAgICAgICAgICAgcG9pbnRlcjogMFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmVhZGVyLnJlYWRBc1RleHQoaXRlbS5nZXRBc0ZpbGUoKSBhcyBhbnkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIFtdKTtcbiAgY29uc3Qgb25EcmFnT3ZlciA9IHVzZUNhbGxiYWNrKChlOiBSZWFjdC5EcmFnRXZlbnQpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7IC8vIE5lY2Vzc2FyeSB0byBkaXNhYmxlIHRoZSBicm93c2VyJ3MgZGVmYXVsdCAnb25Ecm9wJyBoYW5kbGluZy5cbiAgfSwgW10pO1xuICBjb25zdCByZXNldCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBjb25zdCBtYXJzaGFsbGVyID0gZ2V0TWFyc2hhbGxlcihnZW5lcmF0ZUVtcHR5RG1uMTUoKSwge1xuICAgICAgdXBncmFkZVRvOiBcImxhdGVzdFwiXG4gICAgfSk7XG4gICAgc2V0U3RhdGUoe1xuICAgICAgbWFyc2hhbGxlcixcbiAgICAgIHN0YWNrOiBbbm9ybWFsaXplKG1hcnNoYWxsZXIucGFyc2VyLnBhcnNlKCkpXSxcbiAgICAgIHBvaW50ZXI6IDBcbiAgICB9KTtcbiAgfSwgW10pO1xuICBjb25zdCBjdXJyZW50TW9kZWwgPSBzdGF0ZS5zdGFja1tzdGF0ZS5wb2ludGVyXTtcbiAgY29uc3QgZG93bmxvYWRSZWYgPSB1c2VSZWY8SFRNTEFuY2hvckVsZW1lbnQ+KG51bGwpO1xuICBjb25zdCBkb3dubG9hZEFzWG1sID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmIChkb3dubG9hZFJlZi5jdXJyZW50KSB7XG4gICAgICBjb25zdCBmaWxlQmxvYiA9IG5ldyBCbG9iKFtzdGF0ZS5tYXJzaGFsbGVyLmJ1aWxkZXIuYnVpbGQoY3VycmVudE1vZGVsKV0sIHtcbiAgICAgICAgdHlwZTogXCJ0ZXh0L3htbFwiXG4gICAgICB9KTtcbiAgICAgIGRvd25sb2FkUmVmLmN1cnJlbnQuZG93bmxvYWQgPSBgZG1uLSR7Y3JlYXRlSWQoMTApfS5kbW5gO1xuICAgICAgZG93bmxvYWRSZWYuY3VycmVudC5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlQmxvYik7XG4gICAgICBkb3dubG9hZFJlZi5jdXJyZW50LmNsaWNrKCk7XG4gICAgfVxuICB9LCBbY3VycmVudE1vZGVsLCBzdGF0ZS5tYXJzaGFsbGVyLmJ1aWxkZXJdKTtcbiAgY29uc3QgY29weUFzWG1sID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KHN0YXRlLm1hcnNoYWxsZXIuYnVpbGRlci5idWlsZChjdXJyZW50TW9kZWwpKTtcbiAgfSwgW2N1cnJlbnRNb2RlbCwgc3RhdGUubWFyc2hhbGxlci5idWlsZGVyXSk7XG4gIGNvbnN0IHVuZG8gPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0U3RhdGUocHJldiA9PiAoe1xuICAgICAgLi4ucHJldixcbiAgICAgIHBvaW50ZXI6IE1hdGgubWF4KDAsIHByZXYucG9pbnRlciAtIDEpXG4gICAgfSkpO1xuICB9LCBbXSk7XG4gIGNvbnN0IHJlZG8gPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0U3RhdGUocHJldiA9PiAoe1xuICAgICAgLi4ucHJldixcbiAgICAgIHBvaW50ZXI6IE1hdGgubWluKHByZXYuc3RhY2subGVuZ3RoIC0gMSwgcHJldi5wb2ludGVyICsgMSlcbiAgICB9KSk7XG4gIH0sIFtdKTtcbiAgY29uc3Qgb25Nb2RlbENoYW5nZSA9IHVzZUNhbGxiYWNrPE9uRG1uTW9kZWxDaGFuZ2U+KG1vZGVsID0+IHtcbiAgICBzZXRTdGF0ZShwcmV2ID0+IHtcbiAgICAgIGNvbnN0IG5ld1N0YWNrID0gcHJldi5zdGFjay5zbGljZSgwLCBwcmV2LnBvaW50ZXIgKyAxKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnByZXYsXG4gICAgICAgIHN0YWNrOiBbLi4ubmV3U3RhY2ssIG1vZGVsXSxcbiAgICAgICAgcG9pbnRlcjogbmV3U3RhY2subGVuZ3RoXG4gICAgICB9O1xuICAgIH0pO1xuICB9LCBbXSk7XG4gIGNvbnN0IG9uU2VsZWN0TW9kZWwgPSB1c2VDYWxsYmFjaygobmV3TW9kZWw6IERtbkxhdGVzdE1vZGVsKSA9PiB7XG4gICAgb25Nb2RlbENoYW5nZShub3JtYWxpemUobmV3TW9kZWwpKTtcbiAgfSwgW29uTW9kZWxDaGFuZ2VdKTtcbiAgY29uc3Qgb25SZXF1ZXN0VG9KdW1wVG9QYXRoID0gdXNlQ2FsbGJhY2s8T25SZXF1ZXN0VG9KdW1wVG9QYXRoPihwYXRoID0+IHtcbiAgICBhbGVydChcIkp1bXBpbmcgdG8gZmlsZSBcIiArIHBhdGgpO1xuICB9LCBbXSk7XG4gIGNvbnN0IGV4dGVybmFsTW9kZWxzQnlOYW1lc3BhY2UgPSB1c2VNZW1vPEV4dGVybmFsTW9kZWxzSW5kZXg+KCgpID0+IHtcbiAgICByZXR1cm4gKGN1cnJlbnRNb2RlbC5kZWZpbml0aW9ucy5pbXBvcnQgPz8gW10pLnJlZHVjZSgoYWNjLCBpKSA9PiB7XG4gICAgICBhY2NbaVtcIkBfbmFtZXNwYWNlXCJdXSA9IG1vZGVsc0J5TmFtZXNwYWNlW2lbXCJAX25hbWVzcGFjZVwiXV07XG4gICAgICByZXR1cm4gYWNjO1xuICAgIH0sIHt9IGFzIEV4dGVybmFsTW9kZWxzSW5kZXgpO1xuICB9LCBbY3VycmVudE1vZGVsLmRlZmluaXRpb25zLmltcG9ydF0pO1xuICBjb25zdCBvblJlcXVlc3RFeHRlcm5hbE1vZGVsQnlQYXRoID0gdXNlQ2FsbGJhY2s8T25SZXF1ZXN0RXh0ZXJuYWxNb2RlbEJ5UGF0aD4oYXN5bmMgcGF0aCA9PiB7XG4gICAgcmV0dXJuIGF2YWlsYWJsZU1vZGVsc0J5UGF0aFtwYXRoXSA/PyBudWxsO1xuICB9LCBbXSk7XG4gIGNvbnN0IG9uUmVxdWVzdEV4dGVybmFsTW9kZWxzQXZhaWxhYmxlVG9JbmNsdWRlID0gdXNlQ2FsbGJhY2s8T25SZXF1ZXN0RXh0ZXJuYWxNb2RlbHNBdmFpbGFibGVUb0luY2x1ZGU+KGFzeW5jICgpID0+IHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoYXZhaWxhYmxlTW9kZWxzQnlQYXRoKTtcbiAgfSwgW10pO1xuICBjb25zdCBpc1VuZG9FbmFibGVkID0gc3RhdGUucG9pbnRlciA+IDA7XG4gIGNvbnN0IGlzUmVkb0VuYWJsZWQgPSBzdGF0ZS5wb2ludGVyICE9PSBzdGF0ZS5zdGFjay5sZW5ndGggLSAxO1xuICByZXR1cm4gPD5cbiAgICAgIHtjdXJyZW50TW9kZWwgJiYgPGRpdiBzdHlsZT17e1xuICAgICAgd2lkdGg6IFwiMTAwdndcIixcbiAgICAgIGhlaWdodDogXCIxMDB2aFwiXG4gICAgfX0+XG4gICAgICAgICAgPFBhZ2Ugb25EcmFnT3Zlcj17b25EcmFnT3Zlcn0gb25Ecm9wPXtvbkRyb3B9PlxuICAgICAgICAgICAgPFBhZ2VTZWN0aW9uIHZhcmlhbnQ9e1wibGlnaHRcIn0gaXNGaWxsZWQ9e2ZhbHNlfSBwYWRkaW5nPXt7XG4gICAgICAgICAgZGVmYXVsdDogXCJwYWRkaW5nXCJcbiAgICAgICAgfX0+XG4gICAgICAgICAgICAgIDxGbGV4IGp1c3RpZnlDb250ZW50PXt7XG4gICAgICAgICAgICBkZWZhdWx0OiBcImp1c3RpZnlDb250ZW50U3BhY2VCZXR3ZWVuXCJcbiAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICA8RmxleEl0ZW0+XG4gICAgICAgICAgICAgICAgICA8aDU+KERyYWcgJiBkcm9wIGEgZmlsZSBhbnl3aGVyZSB0byBvcGVuIGl0KTwvaDU+XG4gICAgICAgICAgICAgICAgPC9GbGV4SXRlbT5cbiAgICAgICAgICAgICAgICA8RmxleEl0ZW0gc2hyaW5rPXt7XG4gICAgICAgICAgICAgIGRlZmF1bHQ6IFwic2hyaW5rXCJcbiAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBvblNlbGVjdE1vZGVsKFVTRV9DQVNFX01PREVMUy5sb2FuUHJlUXVhbGlmaWNhdGlvbi5tb2RlbCl9PlxuICAgICAgICAgICAgICAgICAgICBFeDogTG9hbiBQcmUtUXVhbGlmaWNhdGlvblxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAmbmJzcDsgJm5ic3A7XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IG9uU2VsZWN0TW9kZWwoVVNFX0NBU0VfTU9ERUxTLmF1dG9sYXlvdXQubW9kZWwpfT5FeDogQXV0b2xheW91dDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgJm5ic3A7ICZuYnNwOyB8ICZuYnNwOyAmbmJzcDtcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gZGlzYWJsZWQ9eyFpc1VuZG9FbmFibGVkfSBzdHlsZT17e1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IGlzVW5kb0VuYWJsZWQgPyAxIDogMC41XG4gICAgICAgICAgICAgIH19IG9uQ2xpY2s9e3VuZG99PlxuICAgICAgICAgICAgICAgICAgICB7YFVuZG8gKCR7c3RhdGUucG9pbnRlcn0pYH1cbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgJm5ic3A7ICZuYnNwO1xuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBkaXNhYmxlZD17IWlzUmVkb0VuYWJsZWR9IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogaXNSZWRvRW5hYmxlZCA/IDEgOiAwLjVcbiAgICAgICAgICAgICAgfX0gb25DbGljaz17cmVkb30+XG4gICAgICAgICAgICAgICAgICAgIHtgUmVkbyAoJHtzdGF0ZS5zdGFjay5sZW5ndGggLSAxIC0gc3RhdGUucG9pbnRlcn0pYH1cbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgJm5ic3A7ICZuYnNwOyB8ICZuYnNwOyAmbmJzcDtcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17cmVzZXR9PlJlc2V0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAmbmJzcDsgJm5ic3A7XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2NvcHlBc1htbH0+Q29weSBYTUw8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICZuYnNwOyAmbmJzcDtcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17ZG93bmxvYWRBc1htbH0+RG93bmxvYWQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L0ZsZXhJdGVtPlxuICAgICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICAgIDxhIHJlZj17ZG93bmxvYWRSZWZ9IC8+XG4gICAgICAgICAgICA8L1BhZ2VTZWN0aW9uPlxuICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgICA8UGFnZVNlY3Rpb24gdmFyaWFudD17XCJsaWdodFwifSBpc0ZpbGxlZD17dHJ1ZX0gaGFzT3ZlcmZsb3dTY3JvbGw9e3RydWV9IGFyaWEtbGFiZWw9e1wiZWRpdG9yXCJ9IHBhZGRpbmc9e3tcbiAgICAgICAgICBkZWZhdWx0OiBcIm5vUGFkZGluZ1wiXG4gICAgICAgIH19PlxuICAgICAgICAgICAgICB7RG1uRWRpdG9yV3JhcHBlcih7XG4gICAgICAgICAgICBtb2RlbDogY3VycmVudE1vZGVsLFxuICAgICAgICAgICAgb3JpZ2luYWxWZXJzaW9uOiBhcmdzLm9yaWdpbmFsVmVyc2lvbixcbiAgICAgICAgICAgIG9uTW9kZWxDaGFuZ2UsXG4gICAgICAgICAgICBvblJlcXVlc3RFeHRlcm5hbE1vZGVsQnlQYXRoLFxuICAgICAgICAgICAgb25SZXF1ZXN0RXh0ZXJuYWxNb2RlbHNBdmFpbGFibGVUb0luY2x1ZGUsXG4gICAgICAgICAgICBleHRlcm5hbE1vZGVsc0J5TmFtZXNwYWNlOiBleHRlcm5hbE1vZGVsc0J5TmFtZXNwYWNlLFxuICAgICAgICAgICAgZXh0ZXJuYWxDb250ZXh0TmFtZTogYXJncy5leHRlcm5hbENvbnRleHROYW1lLFxuICAgICAgICAgICAgZXh0ZXJuYWxDb250ZXh0RGVzY3JpcHRpb246IGFyZ3MuZXh0ZXJuYWxDb250ZXh0RGVzY3JpcHRpb24sXG4gICAgICAgICAgICB2YWxpZGF0aW9uTWVzc2FnZXM6IGFyZ3MudmFsaWRhdGlvbk1lc3NhZ2VzLFxuICAgICAgICAgICAgZXZhbHVhdGlvblJlc3VsdHNCeU5vZGVJZDogYXJncy5ldmFsdWF0aW9uUmVzdWx0c0J5Tm9kZUlkLFxuICAgICAgICAgICAgaXNzdWVUcmFja2VySHJlZjogYXJncy5pc3N1ZVRyYWNrZXJIcmVmLFxuICAgICAgICAgICAgb25SZXF1ZXN0VG9KdW1wVG9QYXRoLFxuICAgICAgICAgICAgaXNSZWFkT25seTogYXJncy5pc1JlYWRPbmx5XG4gICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L1BhZ2VTZWN0aW9uPlxuICAgICAgICAgIDwvUGFnZT5cbiAgICAgICAgPC9kaXY+fVxuICAgIDwvPjtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUlkKGxlbmd0aDogbnVtYmVyKSB7XG4gIGxldCByZXN1bHQgPSBcIlwiO1xuICBjb25zdCBjaGFyYWN0ZXJzID0gXCJhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODlcIjtcbiAgY29uc3QgY2hhcmFjdGVyc0xlbmd0aCA9IGNoYXJhY3RlcnMubGVuZ3RoO1xuICBsZXQgY291bnRlciA9IDA7XG4gIHdoaWxlIChjb3VudGVyIDwgbGVuZ3RoKSB7XG4gICAgcmVzdWx0ICs9IGNoYXJhY3RlcnMuY2hhckF0KE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNoYXJhY3RlcnNMZW5ndGgpKTtcbiAgICBjb3VudGVyICs9IDE7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLy8gTW9yZSBvbiBob3cgdG8gc2V0IHVwIHN0b3JpZXMgYXQ6IGh0dHBzOi8vc3Rvcnlib29rLmpzLm9yZy9kb2NzL3dyaXRpbmctc3RvcmllcyNkZWZhdWx0LWV4cG9ydFxuY29uc3QgbWV0YTogTWV0YTx0eXBlb2YgRGV2UGxheWdyb3VuZD4gPSB7XG4gIHRpdGxlOiBcIkRldi9QbGF5Z3JvdW5kXCIsXG4gIGNvbXBvbmVudDogRGV2UGxheWdyb3VuZFxufTtcbmV4cG9ydCBkZWZhdWx0IG1ldGE7XG50eXBlIFN0b3J5ID0gU3RvcnlPYmo8dHlwZW9mIERldlBsYXlncm91bmQ+O1xuXG4vLyBNb3JlIG9uIHdyaXRpbmcgc3RvcmllcyB3aXRoIGFyZ3M6IGh0dHBzOi8vc3Rvcnlib29rLmpzLm9yZy9kb2NzL3dyaXRpbmctc3Rvcmllcy9hcmdzXG5leHBvcnQgY29uc3QgUGxheWdyb3VuZDogU3RvcnkgPSB7XG4gIHJlbmRlcjogYXJncyA9PiBEZXZQbGF5Z3JvdW5kKGFyZ3MpLFxuICBhcmdzOiB7XG4gICAgbW9kZWw6IGdldE1hcnNoYWxsZXIoaW5pdGlhbE1vZGVsLCB7XG4gICAgICB1cGdyYWRlVG86IFwibGF0ZXN0XCJcbiAgICB9KS5wYXJzZXIucGFyc2UoKSxcbiAgICBvcmlnaW5hbFZlcnNpb246IFwiMS41XCIsXG4gICAgZXZhbHVhdGlvblJlc3VsdHNCeU5vZGVJZDogbmV3IE1hcCgpLFxuICAgIGV4dGVybmFsQ29udGV4dERlc2NyaXB0aW9uOiBcIllvdSdyZSB1c2luZyB0aGUgRE1OIEVkaXRvciBQbGF5Z3JvdW5kLCBzbyB0aGVyZSdzIG9ubHkgdHdvIHNpbXBsZSBleHRlcm5hbCBtb2RlbHMgdGhhdCBjYW4gYmUgaW5jbHVkZWQuXCIsXG4gICAgZXh0ZXJuYWxDb250ZXh0TmFtZTogXCJBcGFjaGUgS0lFIDo6IERNTiBFZGl0b3IgOjogU3Rvcnlib29rIDo6IFBsYXlncm91bmRcIixcbiAgICBleHRlcm5hbE1vZGVsc0J5TmFtZXNwYWNlOiB7fSxcbiAgICBpc3N1ZVRyYWNrZXJIcmVmOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9hcGFjaGUvaW5jdWJhdG9yLWtpZS1pc3N1ZXMvaXNzdWVzL25ld1wiLFxuICAgIHZhbGlkYXRpb25NZXNzYWdlczoge30sXG4gICAgaXNSZWFkT25seTogZmFsc2VcbiAgfVxufTtcblBsYXlncm91bmQucGFyYW1ldGVycyA9IHtcbiAgLi4uUGxheWdyb3VuZC5wYXJhbWV0ZXJzLFxuICBkb2NzOiB7XG4gICAgLi4uUGxheWdyb3VuZC5wYXJhbWV0ZXJzPy5kb2NzLFxuICAgIHNvdXJjZToge1xuICAgICAgb3JpZ2luYWxTb3VyY2U6IFwie1xcbiAgcmVuZGVyOiBhcmdzID0+IERldlBsYXlncm91bmQoYXJncyksXFxuICBhcmdzOiB7XFxuICAgIG1vZGVsOiBnZXRNYXJzaGFsbGVyKGluaXRpYWxNb2RlbCwge1xcbiAgICAgIHVwZ3JhZGVUbzogXFxcImxhdGVzdFxcXCJcXG4gICAgfSkucGFyc2VyLnBhcnNlKCksXFxuICAgIG9yaWdpbmFsVmVyc2lvbjogXFxcIjEuNVxcXCIsXFxuICAgIGV2YWx1YXRpb25SZXN1bHRzQnlOb2RlSWQ6IG5ldyBNYXAoKSxcXG4gICAgZXh0ZXJuYWxDb250ZXh0RGVzY3JpcHRpb246IFxcXCJZb3UncmUgdXNpbmcgdGhlIERNTiBFZGl0b3IgUGxheWdyb3VuZCwgc28gdGhlcmUncyBvbmx5IHR3byBzaW1wbGUgZXh0ZXJuYWwgbW9kZWxzIHRoYXQgY2FuIGJlIGluY2x1ZGVkLlxcXCIsXFxuICAgIGV4dGVybmFsQ29udGV4dE5hbWU6IFxcXCJBcGFjaGUgS0lFIDo6IERNTiBFZGl0b3IgOjogU3Rvcnlib29rIDo6IFBsYXlncm91bmRcXFwiLFxcbiAgICBleHRlcm5hbE1vZGVsc0J5TmFtZXNwYWNlOiB7fSxcXG4gICAgaXNzdWVUcmFja2VySHJlZjogXFxcImh0dHBzOi8vZ2l0aHViLmNvbS9hcGFjaGUvaW5jdWJhdG9yLWtpZS1pc3N1ZXMvaXNzdWVzL25ld1xcXCIsXFxuICAgIHZhbGlkYXRpb25NZXNzYWdlczoge30sXFxuICAgIGlzUmVhZE9ubHk6IGZhbHNlXFxuICB9XFxufVwiLFxuICAgICAgLi4uUGxheWdyb3VuZC5wYXJhbWV0ZXJzPy5kb2NzPy5zb3VyY2VcbiAgICB9XG4gIH1cbn07IiwiLypcbiAqIExpY2Vuc2VkIHRvIHRoZSBBcGFjaGUgU29mdHdhcmUgRm91bmRhdGlvbiAoQVNGKSB1bmRlciBvbmVcbiAqIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiAgU2VlIHRoZSBOT1RJQ0UgZmlsZVxuICogZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb25cbiAqIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLiAgVGhlIEFTRiBsaWNlbnNlcyB0aGlzIGZpbGVcbiAqIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGVcbiAqIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuICogd2l0aCB0aGUgTGljZW5zZS4gIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsXG4gKiBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxuICogXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcbiAqIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZVxuICogc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9uc1xuICogdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHR5cGUgeyBNZXRhLCBTdG9yeU9iaiB9IGZyb20gXCJAc3Rvcnlib29rL3JlYWN0XCI7XG5pbXBvcnQgeyBnZXRNYXJzaGFsbGVyIH0gZnJvbSBcIkBraWUtdG9vbHMvZG1uLW1hcnNoYWxsZXJcIjtcbmltcG9ydCB7IG5zIGFzIGRtbjE1bnMgfSBmcm9tIFwiQGtpZS10b29scy9kbW4tbWFyc2hhbGxlci9kaXN0L3NjaGVtYXMvZG1uLTFfNS90cy1nZW4vbWV0YVwiO1xuaW1wb3J0IHsgZ2VuZXJhdGVVdWlkIH0gZnJvbSBcIkBraWUtdG9vbHMvYm94ZWQtZXhwcmVzc2lvbi1jb21wb25lbnQvZGlzdC9hcGlcIjtcbmltcG9ydCB7IERNTjE1X1NQRUMgfSBmcm9tIFwiQGtpZS10b29scy9kbW4tbWFyc2hhbGxlci9kaXN0L3NjaGVtYXMvZG1uLTFfNS9EbW4xNVNwZWNcIjtcbmltcG9ydCB7IERtbkVkaXRvcldyYXBwZXIsIFN0b3J5Ym9va0RtbkVkaXRvclByb3BzIH0gZnJvbSBcIi4uLy4uL2RtbkVkaXRvclN0b3JpZXNXcmFwcGVyXCI7XG5pbXBvcnQgeyBEbW5FZGl0b3IsIERtbkVkaXRvclByb3BzIH0gZnJvbSBcIi4uLy4uLy4uL3NyYy9EbW5FZGl0b3JcIjtcbmV4cG9ydCBjb25zdCBnZW5lcmF0ZUVtcHR5RG1uMTUgPSAoKSA9PiBgPD94bWwgdmVyc2lvbj1cIjEuMFwiIGVuY29kaW5nPVwiVVRGLThcIj8+XG48ZGVmaW5pdGlvbnNcbiAgeG1sbnM9XCIke2RtbjE1bnMuZ2V0KFwiXCIpfVwiXG4gIGV4cHJlc3Npb25MYW5ndWFnZT1cIiR7RE1OMTVfU1BFQy5leHByZXNzaW9uTGFuZ3VhZ2UuZGVmYXVsdH1cIlxuICBuYW1lc3BhY2U9XCJodHRwczovL2tpZS5hcGFjaGUub3JnL2Rtbi8ke2dlbmVyYXRlVXVpZCgpfVwiXG4gIGlkPVwiJHtnZW5lcmF0ZVV1aWQoKX1cIlxuICBuYW1lPVwiRE1OJHtnZW5lcmF0ZVV1aWQoKX1cIj5cbjwvZGVmaW5pdGlvbnM+YDtcbmNvbnN0IG1ldGE6IE1ldGE8RG1uRWRpdG9yUHJvcHM+ID0ge1xuICB0aXRsZTogXCJNaXNjL0VtcHR5XCIsXG4gIGNvbXBvbmVudDogRG1uRWRpdG9yLFxuICBpbmNsdWRlU3RvcmllczogL15bQS1aXS9cbn07XG5leHBvcnQgZGVmYXVsdCBtZXRhO1xudHlwZSBTdG9yeSA9IFN0b3J5T2JqPFN0b3J5Ym9va0RtbkVkaXRvclByb3BzPjtcbmNvbnN0IG1hcnNoYWxsZXIgPSBnZXRNYXJzaGFsbGVyKGdlbmVyYXRlRW1wdHlEbW4xNSgpLCB7XG4gIHVwZ3JhZGVUbzogXCJsYXRlc3RcIlxufSk7XG5jb25zdCBtb2RlbCA9IG1hcnNoYWxsZXIucGFyc2VyLnBhcnNlKCk7XG5leHBvcnQgY29uc3QgRW1wdHk6IFN0b3J5ID0ge1xuICByZW5kZXI6IGFyZ3MgPT4gRG1uRWRpdG9yV3JhcHBlcigpLFxuICBhcmdzOiB7XG4gICAgbW9kZWw6IG1vZGVsLFxuICAgIG9yaWdpbmFsVmVyc2lvbjogXCIxLjVcIixcbiAgICBldmFsdWF0aW9uUmVzdWx0c0J5Tm9kZUlkOiBuZXcgTWFwKCksXG4gICAgZXh0ZXJuYWxDb250ZXh0RGVzY3JpcHRpb246IFwiVGhlIFN0b3J5Ym9vayBmb3IgdGhlIERNTiBFZGl0b3JcIixcbiAgICBleHRlcm5hbENvbnRleHROYW1lOiBcIkFwYWNoZSBLSUUgOjogRE1OIEVkaXRvciA6OiBTdG9yeWJvb2tcIixcbiAgICBleHRlcm5hbE1vZGVsc0J5TmFtZXNwYWNlOiB7fSxcbiAgICBpc3N1ZVRyYWNrZXJIcmVmOiBcIlwiLFxuICAgIHZhbGlkYXRpb25NZXNzYWdlczoge30sXG4gICAgaXNSZWFkT25seTogZmFsc2UsXG4gICAgeG1sOiBtYXJzaGFsbGVyLmJ1aWxkZXIuYnVpbGQobW9kZWwpXG4gIH1cbn07XG5FbXB0eS5wYXJhbWV0ZXJzID0ge1xuICAuLi5FbXB0eS5wYXJhbWV0ZXJzLFxuICBkb2NzOiB7XG4gICAgLi4uRW1wdHkucGFyYW1ldGVycz8uZG9jcyxcbiAgICBzb3VyY2U6IHtcbiAgICAgIG9yaWdpbmFsU291cmNlOiBcIntcXG4gIHJlbmRlcjogYXJncyA9PiBEbW5FZGl0b3JXcmFwcGVyKCksXFxuICBhcmdzOiB7XFxuICAgIG1vZGVsOiBtb2RlbCxcXG4gICAgb3JpZ2luYWxWZXJzaW9uOiBcXFwiMS41XFxcIixcXG4gICAgZXZhbHVhdGlvblJlc3VsdHNCeU5vZGVJZDogbmV3IE1hcCgpLFxcbiAgICBleHRlcm5hbENvbnRleHREZXNjcmlwdGlvbjogXFxcIlRoZSBTdG9yeWJvb2sgZm9yIHRoZSBETU4gRWRpdG9yXFxcIixcXG4gICAgZXh0ZXJuYWxDb250ZXh0TmFtZTogXFxcIkFwYWNoZSBLSUUgOjogRE1OIEVkaXRvciA6OiBTdG9yeWJvb2tcXFwiLFxcbiAgICBleHRlcm5hbE1vZGVsc0J5TmFtZXNwYWNlOiB7fSxcXG4gICAgaXNzdWVUcmFja2VySHJlZjogXFxcIlxcXCIsXFxuICAgIHZhbGlkYXRpb25NZXNzYWdlczoge30sXFxuICAgIGlzUmVhZE9ubHk6IGZhbHNlLFxcbiAgICB4bWw6IG1hcnNoYWxsZXIuYnVpbGRlci5idWlsZChtb2RlbClcXG4gIH1cXG59XCIsXG4gICAgICAuLi5FbXB0eS5wYXJhbWV0ZXJzPy5kb2NzPy5zb3VyY2VcbiAgICB9XG4gIH1cbn07IiwiLypcbiAqIExpY2Vuc2VkIHRvIHRoZSBBcGFjaGUgU29mdHdhcmUgRm91bmRhdGlvbiAoQVNGKSB1bmRlciBvbmVcbiAqIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiAgU2VlIHRoZSBOT1RJQ0UgZmlsZVxuICogZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb25cbiAqIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLiAgVGhlIEFTRiBsaWNlbnNlcyB0aGlzIGZpbGVcbiAqIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGVcbiAqIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuICogd2l0aCB0aGUgTGljZW5zZS4gIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsXG4gKiBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxuICogXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcbiAqIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZVxuICogc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9uc1xuICogdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgZ2V0TWFyc2hhbGxlciB9IGZyb20gXCJAa2llLXRvb2xzL2Rtbi1tYXJzaGFsbGVyXCI7XG5pbXBvcnQgeyBub3JtYWxpemUgfSBmcm9tIFwiQGtpZS10b29scy9kbW4tbWFyc2hhbGxlci9kaXN0L25vcm1hbGl6YXRpb24vbm9ybWFsaXplXCI7XG5pbXBvcnQgeyBYTUwyUE1NTCB9IGZyb20gXCJAa2llLXRvb2xzL3BtbWwtZWRpdG9yLW1hcnNoYWxsZXJcIjtcbmltcG9ydCAqIGFzIERtbkVkaXRvciBmcm9tIFwiLi4vLi4vc3JjL0RtbkVkaXRvclwiO1xuaW1wb3J0IHsgZ2V0UG1tbE5hbWVzcGFjZSB9IGZyb20gXCIuLi8uLi9zcmMvcG1tbC9wbW1sXCI7XG5pbXBvcnQgeyBVU0VfQ0FTRV9NT0RFTFMgfSBmcm9tIFwiLi4vdXNlQ2FzZXMvbW9kZWxzL21vZGVsc1wiO1xuaW1wb3J0IHsgdGVzdFRyZWVQbW1sIH0gZnJvbSBcIi4uL21pc2MvZW1wdHlXaXRoQXZhaWxhYmxlRXh0ZXJuYWxNb2RlbHMvdGVzdFRyZWVQbW1sXCI7XG5cbmV4cG9ydCBjb25zdCB0ZXN0VHJlZVBtbWxNb2RlbCA9IFhNTDJQTU1MKHRlc3RUcmVlUG1tbCk7XG5cbmV4cG9ydCBjb25zdCBhdmFpYWJsZU1vZGVsczogRG1uRWRpdG9yLkV4dGVybmFsTW9kZWxbXSA9IFtcbiAge1xuICAgIHR5cGU6IFwiZG1uXCIsXG4gICAgbW9kZWw6IG5vcm1hbGl6ZShVU0VfQ0FTRV9NT0RFTFMuc3VtQmttLm1vZGVsKSxcbiAgICBub3JtYWxpemVkUG9zaXhQYXRoUmVsYXRpdmVUb1RoZU9wZW5GaWxlOiBcInBsYXlncm91bmQvYXZhaWxhYmxlLW1vZGVscy10by1pbmNsdWRlL1N1bUJrbS5kbW5cIixcbiAgICBzdmc6IFwiXCIsXG4gIH0sXG4gIHtcbiAgICB0eXBlOiBcImRtblwiLFxuICAgIG1vZGVsOiBub3JtYWxpemUoVVNFX0NBU0VfTU9ERUxTLnN1bURpZmZEcy5tb2RlbCksXG4gICAgbm9ybWFsaXplZFBvc2l4UGF0aFJlbGF0aXZlVG9UaGVPcGVuRmlsZTogXCJwbGF5Z3JvdW5kL2F2YWlsYWJsZS1tb2RlbHMtdG8taW5jbHVkZS9TdW1EaWZmRHMuZG1uXCIsXG4gICAgc3ZnOiBcIlwiLFxuICB9LFxuICB7XG4gICAgdHlwZTogXCJkbW5cIixcbiAgICBtb2RlbDogbm9ybWFsaXplKFxuICAgICAgZ2V0TWFyc2hhbGxlcihgPGRlZmluaXRpb25zIHhtbG5zPVwiaHR0cHM6Ly93d3cub21nLm9yZy9zcGVjL0RNTi8yMDIzMDMyNC9NT0RFTC9cIiAvPmAsIHtcbiAgICAgICAgdXBncmFkZVRvOiBcImxhdGVzdFwiLFxuICAgICAgfSkucGFyc2VyLnBhcnNlKClcbiAgICApLFxuICAgIG5vcm1hbGl6ZWRQb3NpeFBhdGhSZWxhdGl2ZVRvVGhlT3BlbkZpbGU6IFwicGxheWdyb3VuZC9hdmFpbGFibGUtbW9kZWxzLXRvLWluY2x1ZGUvRW1wdHkuZG1uXCIsXG4gICAgc3ZnOiBcIlwiLFxuICB9LFxuICB7XG4gICAgdHlwZTogXCJwbW1sXCIsXG4gICAgbW9kZWw6IHRlc3RUcmVlUG1tbE1vZGVsLFxuICAgIG5vcm1hbGl6ZWRQb3NpeFBhdGhSZWxhdGl2ZVRvVGhlT3BlbkZpbGU6IFwicGxheWdyb3VuZC9hdmFpbGFibGUtbW9kZWxzLXRvLWluY2x1ZGUvdGVzdFRyZWUucG1tbFwiLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IGF2YWlsYWJsZU1vZGVsc0J5UGF0aDogUmVjb3JkPHN0cmluZywgRG1uRWRpdG9yLkV4dGVybmFsTW9kZWw+ID0gT2JqZWN0LnZhbHVlcyhhdmFpYWJsZU1vZGVscykucmVkdWNlKFxuICAoYWNjLCB2KSA9PiB7XG4gICAgYWNjW3Yubm9ybWFsaXplZFBvc2l4UGF0aFJlbGF0aXZlVG9UaGVPcGVuRmlsZV0gPSB2O1xuICAgIHJldHVybiBhY2M7XG4gIH0sXG4gIHt9IGFzIFJlY29yZDxzdHJpbmcsIERtbkVkaXRvci5FeHRlcm5hbE1vZGVsPlxuKTtcblxuZXhwb3J0IGNvbnN0IG1vZGVsc0J5TmFtZXNwYWNlID0gT2JqZWN0LnZhbHVlcyhhdmFpYWJsZU1vZGVscykucmVkdWNlKChhY2MsIHYpID0+IHtcbiAgaWYgKHYudHlwZSA9PT0gXCJkbW5cIikge1xuICAgIGFjY1t2Lm1vZGVsLmRlZmluaXRpb25zW1wiQF9uYW1lc3BhY2VcIl1dID0gdjtcbiAgfSBlbHNlIGlmICh2LnR5cGUgPT09IFwicG1tbFwiKSB7XG4gICAgYWNjW2dldFBtbWxOYW1lc3BhY2UoeyBub3JtYWxpemVkUG9zaXhQYXRoUmVsYXRpdmVUb1RoZU9wZW5GaWxlOiB2Lm5vcm1hbGl6ZWRQb3NpeFBhdGhSZWxhdGl2ZVRvVGhlT3BlbkZpbGUgfSldID0gdjtcbiAgfVxuICByZXR1cm4gYWNjO1xufSwge30gYXMgRG1uRWRpdG9yLkV4dGVybmFsTW9kZWxzSW5kZXgpO1xuIiwiLypcbiAqIExpY2Vuc2VkIHRvIHRoZSBBcGFjaGUgU29mdHdhcmUgRm91bmRhdGlvbiAoQVNGKSB1bmRlciBvbmVcbiAqIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiAgU2VlIHRoZSBOT1RJQ0UgZmlsZVxuICogZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb25cbiAqIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLiAgVGhlIEFTRiBsaWNlbnNlcyB0aGlzIGZpbGVcbiAqIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGVcbiAqIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuICogd2l0aCB0aGUgTGljZW5zZS4gIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsXG4gKiBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxuICogXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcbiAqIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZVxuICogc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9uc1xuICogdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUsIHVzZVJlZiwgdXNlTWVtbywgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VBcmdzIH0gZnJvbSBcIkBzdG9yeWJvb2svcHJldmlldy1hcGlcIjtcbmltcG9ydCB7XG4gIERtbkVkaXRvcixcbiAgRG1uRWRpdG9yUHJvcHMsXG4gIERtbkVkaXRvclJlZixcbiAgRXZhbHVhdGlvblJlc3VsdHNCeU5vZGVJZCxcbiAgVmFsaWRhdGlvbk1lc3NhZ2VzLFxufSBmcm9tIFwiLi4vc3JjL0RtbkVkaXRvclwiO1xuaW1wb3J0IHsgRG1uTGF0ZXN0TW9kZWwsIGdldE1hcnNoYWxsZXIgfSBmcm9tIFwiQGtpZS10b29scy9kbW4tbWFyc2hhbGxlclwiO1xuaW1wb3J0IHsgbm9ybWFsaXplIH0gZnJvbSBcIkBraWUtdG9vbHMvZG1uLW1hcnNoYWxsZXIvZGlzdC9ub3JtYWxpemF0aW9uL25vcm1hbGl6ZVwiO1xuaW1wb3J0IHsgZGlmZiB9IGZyb20gXCJkZWVwLW9iamVjdC1kaWZmXCI7XG5pbXBvcnQgeyBnZW5lcmF0ZUVtcHR5RG1uMTUgfSBmcm9tIFwiLi9taXNjL2VtcHR5L0VtcHR5LnN0b3JpZXNcIjtcblxuZXhwb3J0IGNvbnN0IGV2YWx1YXRpb25SZXN1bHRzQnlOb2RlSWQ6IEV2YWx1YXRpb25SZXN1bHRzQnlOb2RlSWQgPSBuZXcgTWFwKCk7XG5leHBvcnQgY29uc3QgdmFsaWRhdGlvbk1lc3NhZ2VzOiBWYWxpZGF0aW9uTWVzc2FnZXMgPSB7fTtcblxuZXhwb3J0IHR5cGUgU3Rvcnlib29rRG1uRWRpdG9yUHJvcHMgPSBEbW5FZGl0b3JQcm9wcyAmIHsgeG1sOiBzdHJpbmcgfTtcblxuZXhwb3J0IGZ1bmN0aW9uIERtbkVkaXRvcldyYXBwZXIocHJvcHM/OiBQYXJ0aWFsPFN0b3J5Ym9va0RtbkVkaXRvclByb3BzPikge1xuICBjb25zdCBbYXJncywgdXBkYXRlQXJnc10gPSB1c2VBcmdzPFN0b3J5Ym9va0RtbkVkaXRvclByb3BzPigpO1xuICBjb25zdCBhcmdzQ29weSA9IHVzZVJlZihhcmdzKTtcbiAgY29uc3QgcmVmID0gdXNlUmVmPERtbkVkaXRvclJlZj4obnVsbCk7XG4gIGNvbnN0IFttb2RlbEFyZ3MsIHNldE1vZGVsQXJnc10gPSB1c2VTdGF0ZTxEbW5MYXRlc3RNb2RlbD4oYXJncy5tb2RlbCk7XG4gIGNvbnN0IG1vZGVsID0gdXNlTWVtbygoKSA9PiBwcm9wcz8ubW9kZWwgPz8gbW9kZWxBcmdzLCBbbW9kZWxBcmdzLCBwcm9wcz8ubW9kZWxdKTtcbiAgY29uc3QgW21vZGVsQ2hhbmdlZCwgc2V0TW9kZWxDaGFuZ2VdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICBjb25zdCBbaXNSZWFkT25seSwgc2V0SXNSZWFkT25seV0gPSB1c2VTdGF0ZShwcm9wcz8uaXNSZWFkT25seSA/PyBhcmdzLmlzUmVhZE9ubHkgPz8gZmFsc2UpO1xuXG4gIGNvbnN0IG9uTW9kZWxDaGFuZ2UgPSB1c2VNZW1vKFxuICAgICgpID0+IChwcm9wcz8ub25Nb2RlbENoYW5nZSA/IHByb3BzLm9uTW9kZWxDaGFuZ2UgOiBzZXRNb2RlbEFyZ3MpLFxuICAgIFtwcm9wcz8ub25Nb2RlbENoYW5nZV1cbiAgKTtcblxuICBjb25zdCBvbk9wZW5lZEJveGVkRXhwcmVzc2lvbkVkaXRvck5vZGVDaGFuZ2VOb09wZXJhdGlvbiA9IHVzZU1lbW8oXG4gICAgKCkgPT4gKG5ld09wZW5lZE5vZGVJZDogc3RyaW5nIHwgdW5kZWZpbmVkKSA9PiB7fSxcbiAgICBbXVxuICApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGFyZ3MuaXNSZWFkT25seSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBzZXRJc1JlYWRPbmx5KGFyZ3MuaXNSZWFkT25seSk7XG4gICAgfVxuICB9LCBbYXJncy5pc1JlYWRPbmx5XSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoT2JqZWN0LmtleXMoZGlmZihhcmdzQ29weS5jdXJyZW50Lm1vZGVsLCBtb2RlbCkpLmxlbmd0aCAhPT0gMCkge1xuICAgICAgdXBkYXRlQXJncyh7XG4gICAgICAgIC4uLmFyZ3NDb3B5LmN1cnJlbnQsXG4gICAgICAgIG1vZGVsOiBtb2RlbCxcbiAgICAgICAgeG1sOiBnZXRNYXJzaGFsbGVyKGdlbmVyYXRlRW1wdHlEbW4xNSgpLCB7IHVwZ3JhZGVUbzogXCJsYXRlc3RcIiB9KS5idWlsZGVyLmJ1aWxkKG1vZGVsKSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgW3VwZGF0ZUFyZ3MsIG1vZGVsXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoT2JqZWN0LmtleXMoZGlmZihhcmdzQ29weS5jdXJyZW50LCBhcmdzKSkubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGFyZ3NDb3B5LmN1cnJlbnQgPSBhcmdzO1xuICAgIGlmIChPYmplY3Qua2V5cyhkaWZmKGFyZ3MubW9kZWwsIG1vZGVsKSkubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIG9uTW9kZWxDaGFuZ2Uobm9ybWFsaXplKGFyZ3MubW9kZWwpKTtcbiAgfSwgW2FyZ3MsIG1vZGVsLCBvbk1vZGVsQ2hhbmdlXSk7XG5cbiAgY29uc3Qgb25Nb2RlbERlYm91bmNlU3RhdGVDaGFuZ2VkID0gdXNlQ2FsbGJhY2soKGNoYW5nZWQ6IGJvb2xlYW4pID0+IHtcbiAgICBzZXRNb2RlbENoYW5nZShjaGFuZ2VkKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHttb2RlbENoYW5nZWQgJiYgKFxuICAgICAgICA8ZGl2IGRhdGEtdGVzdGlkPXtcInN0b3J5Ym9vay0tZG1uLWVkaXRvci1tb2RlbFwifSBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fT5cbiAgICAgICAgICB7SlNPTi5zdHJpbmdpZnkobW9kZWwpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgICA8YnV0dG9uXG4gICAgICAgIGRhdGEtdGVzdGlkPXtcInN0b3J5Ym9vay0tZG1uLWVkaXRvci10b2dnbGUtcmVhZC1vbmx5XCJ9XG4gICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwibm9uZVwiIH19XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzUmVhZE9ubHkoKGN1cnJlbnRWYWx1ZSkgPT4gIWN1cnJlbnRWYWx1ZSl9XG4gICAgICA+XG4gICAgICAgIHtpc1JlYWRPbmx5LnRvU3RyaW5nKCl9XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246IFwiYWJzb2x1dGVcIiwgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiLCB0b3A6IFwiMHB4XCIsIGxlZnQ6IFwiMHB4XCIgfX0+XG4gICAgICAgIDxEbW5FZGl0b3JcbiAgICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgICBtb2RlbD17bW9kZWx9XG4gICAgICAgICAgb3JpZ2luYWxWZXJzaW9uPXtwcm9wcz8ub3JpZ2luYWxWZXJzaW9uID8/IGFyZ3Mub3JpZ2luYWxWZXJzaW9ufVxuICAgICAgICAgIGlzRXZhbHVhdGlvbkhpZ2hsaWdodHNTdXBwb3J0ZWQ9e1xuICAgICAgICAgICAgcHJvcHM/LmlzRXZhbHVhdGlvbkhpZ2hsaWdodHNTdXBwb3J0ZWQgPz8gYXJncy5pc0V2YWx1YXRpb25IaWdobGlnaHRzU3VwcG9ydGVkXG4gICAgICAgICAgfVxuICAgICAgICAgIGlzUmVhZE9ubHk9e2lzUmVhZE9ubHl9XG4gICAgICAgICAgb25Nb2RlbENoYW5nZT17b25Nb2RlbENoYW5nZX1cbiAgICAgICAgICBvbk9wZW5lZEJveGVkRXhwcmVzc2lvbkVkaXRvck5vZGVDaGFuZ2U9e29uT3BlbmVkQm94ZWRFeHByZXNzaW9uRWRpdG9yTm9kZUNoYW5nZU5vT3BlcmF0aW9ufVxuICAgICAgICAgIG9uUmVxdWVzdEV4dGVybmFsTW9kZWxCeVBhdGg9e3Byb3BzPy5vblJlcXVlc3RFeHRlcm5hbE1vZGVsQnlQYXRoID8/IGFyZ3Mub25SZXF1ZXN0RXh0ZXJuYWxNb2RlbEJ5UGF0aH1cbiAgICAgICAgICBvblJlcXVlc3RFeHRlcm5hbE1vZGVsc0F2YWlsYWJsZVRvSW5jbHVkZT17XG4gICAgICAgICAgICBwcm9wcz8ub25SZXF1ZXN0RXh0ZXJuYWxNb2RlbHNBdmFpbGFibGVUb0luY2x1ZGUgPz8gYXJncy5vblJlcXVlc3RFeHRlcm5hbE1vZGVsc0F2YWlsYWJsZVRvSW5jbHVkZVxuICAgICAgICAgIH1cbiAgICAgICAgICBleHRlcm5hbE1vZGVsc0J5TmFtZXNwYWNlPXtwcm9wcz8uZXh0ZXJuYWxNb2RlbHNCeU5hbWVzcGFjZSA/PyBhcmdzLmV4dGVybmFsTW9kZWxzQnlOYW1lc3BhY2V9XG4gICAgICAgICAgZXh0ZXJuYWxDb250ZXh0TmFtZT17cHJvcHM/LmV4dGVybmFsQ29udGV4dE5hbWUgPz8gYXJncy5leHRlcm5hbENvbnRleHROYW1lfVxuICAgICAgICAgIGV4dGVybmFsQ29udGV4dERlc2NyaXB0aW9uPXtwcm9wcz8uZXh0ZXJuYWxDb250ZXh0RGVzY3JpcHRpb24gPz8gYXJncy5leHRlcm5hbENvbnRleHREZXNjcmlwdGlvbn1cbiAgICAgICAgICB2YWxpZGF0aW9uTWVzc2FnZXM9e3Byb3BzPy52YWxpZGF0aW9uTWVzc2FnZXMgPz8gYXJncy52YWxpZGF0aW9uTWVzc2FnZXN9XG4gICAgICAgICAgZXZhbHVhdGlvblJlc3VsdHNCeU5vZGVJZD17cHJvcHM/LmV2YWx1YXRpb25SZXN1bHRzQnlOb2RlSWQgPz8gYXJncy5ldmFsdWF0aW9uUmVzdWx0c0J5Tm9kZUlkfVxuICAgICAgICAgIGlzc3VlVHJhY2tlckhyZWY9e3Byb3BzPy5pc3N1ZVRyYWNrZXJIcmVmID8/IGFyZ3MuaXNzdWVUcmFja2VySHJlZn1cbiAgICAgICAgICBvblJlcXVlc3RUb0p1bXBUb1BhdGg9e3Byb3BzPy5vblJlcXVlc3RUb0p1bXBUb1BhdGggPz8gYXJncy5vblJlcXVlc3RUb0p1bXBUb1BhdGh9XG4gICAgICAgICAgb25Nb2RlbERlYm91bmNlU3RhdGVDaGFuZ2VkPXtvbk1vZGVsRGVib3VuY2VTdGF0ZUNoYW5nZWR9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiIsIi8qXG4gKiBMaWNlbnNlZCB0byB0aGUgQXBhY2hlIFNvZnR3YXJlIEZvdW5kYXRpb24gKEFTRikgdW5kZXIgb25lXG4gKiBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gIFNlZSB0aGUgTk9USUNFIGZpbGVcbiAqIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uXG4gKiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC4gIFRoZSBBU0YgbGljZW5zZXMgdGhpcyBmaWxlXG4gKiB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlXG4gKiBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2VcbiAqIHdpdGggdGhlIExpY2Vuc2UuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLFxuICogc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cbiAqIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXG4gKiBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGVcbiAqIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnNcbiAqIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8vIENvcGllZCBmcm9tIGtvZ2l0by1leGFtcGxlcy9rb2dpdG8tcXVhcmt1cy1leGFtcGxlcy9kbW4tcG1tbC1xdWFya3VzLWV4YW1wbGUvc3JjL21haW4vcmVzb3VyY2VzXG5leHBvcnQgY29uc3QgdGVzdFRyZWVQbW1sID0gYDxQTU1MIHZlcnNpb249XCI0LjJcIiB4c2k6c2NoZW1hTG9jYXRpb249XCJodHRwOi8vd3d3LmRtZy5vcmcvUE1NTC00XzIgaHR0cDovL3d3dy5kbWcub3JnL3Y0LTItMS9wbW1sLTQtMi54c2RcIiB4bWxuczp4c2k9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAxL1hNTFNjaGVtYS1pbnN0YW5jZVwiXG54bWxucz1cImh0dHA6Ly93d3cuZG1nLm9yZy9QTU1MLTRfMlwiPlxuPEhlYWRlcj5cbiA8QXBwbGljYXRpb24gbmFtZT1cIkRyb29scy1QTU1MXCIgdmVyc2lvbj1cIjcuMC4wLVNOQVBTSE9UXCIgLz5cbjwvSGVhZGVyPlxuXG48RGF0YURpY3Rpb25hcnkgbnVtYmVyT2ZGaWVsZHM9XCIzXCI+XG4gPERhdGFGaWVsZCBuYW1lPVwidGVtcGVyYXR1cmVcIiBkYXRhVHlwZT1cImRvdWJsZVwiIG9wdHlwZT1cImNvbnRpbnVvdXNcIiAvPlxuIDxEYXRhRmllbGQgbmFtZT1cImh1bWlkaXR5XCIgZGF0YVR5cGU9XCJkb3VibGVcIiBvcHR5cGU9XCJjb250aW51b3VzXCIgLz4gICBcbiA8RGF0YUZpZWxkIG5hbWU9XCJkZWNpc2lvblwiIGRhdGFUeXBlPVwic3RyaW5nXCIgb3B0eXBlPVwiY2F0ZWdvcmljYWxcIj4gXG4gICA8VmFsdWUgdmFsdWU9XCJzdW5nbGFzc2VzXCIgLz5cbiAgIDxWYWx1ZSB2YWx1ZT1cInVtYnJlbGxhXCIgLz5cbiAgIDxWYWx1ZSB2YWx1ZT1cIm5vdGhpbmdcIiAvPiAgICAgXG4gPC9EYXRhRmllbGQ+XG48L0RhdGFEaWN0aW9uYXJ5PlxuXG48VHJlZU1vZGVsIG1vZGVsTmFtZT1cIkRlY2lzaW9uVHJlZVwiIGZ1bmN0aW9uTmFtZT1cImNsYXNzaWZpY2F0aW9uXCI+XG4gPE1pbmluZ1NjaGVtYT5cbiAgIDxNaW5pbmdGaWVsZCBuYW1lPVwidGVtcGVyYXR1cmVcIiAgdXNhZ2VUeXBlPVwiYWN0aXZlXCIgLz5cbiAgIDxNaW5pbmdGaWVsZCBuYW1lPVwiaHVtaWRpdHlcIiAgdXNhZ2VUeXBlPVwiYWN0aXZlXCIgLz5cbiAgIDxNaW5pbmdGaWVsZCBuYW1lPVwiZGVjaXNpb25cIiB1c2FnZVR5cGU9XCJwcmVkaWN0ZWRcIiAvPlxuIDwvTWluaW5nU2NoZW1hPlxuIDxPdXRwdXQ+XG4gICA8T3V0cHV0RmllbGQgbmFtZT1cIndlYXRoZXJkZWNpc2lvblwiIHRhcmdldEZpZWxkPVwiZGVjaXNpb25cIiAvPlxuIDwvT3V0cHV0PlxuIFxuIDxOb2RlIHNjb3JlPVwibm90aGluZ1wiIGlkPVwiMVwiPlxuICAgPFRydWUgLz5cbiAgIDxOb2RlIHNjb3JlPVwic3VuZ2xhc3Nlc1wiIGlkPVwiMlwiPlxuICAgICA8Q29tcG91bmRQcmVkaWNhdGUgYm9vbGVhbk9wZXJhdG9yPVwiYW5kXCI+XG4gICAgICAgPFNpbXBsZVByZWRpY2F0ZSBmaWVsZD1cInRlbXBlcmF0dXJlXCIgb3BlcmF0b3I9XCJncmVhdGVyVGhhblwiIHZhbHVlPVwiMjVcIiAvPlxuICAgICAgIDxTaW1wbGVQcmVkaWNhdGUgZmllbGQ9XCJodW1pZGl0eVwiIG9wZXJhdG9yPVwibGVzc09yRXF1YWxcIiB2YWx1ZT1cIjIwXCIgLz5cbiAgICAgPC9Db21wb3VuZFByZWRpY2F0ZT5cbiAgIDwvTm9kZT5cbiAgIDxOb2RlIHNjb3JlPVwidW1icmVsbGFcIiBpZD1cIjNcIj5cbiAgICAgPFNpbXBsZVByZWRpY2F0ZSBmaWVsZD1cImh1bWlkaXR5XCIgb3BlcmF0b3I9XCJncmVhdGVyVGhhblwiIHZhbHVlPVwiNTBcIiAvPlxuICAgPC9Ob2RlPlxuICAgPE5vZGUgc2NvcmU9XCJub3RoaW5nXCIgaWQ9XCI0XCI+XG4gICAgIDxUcnVlIC8+XG4gICA8L05vZGU+XG4gPC9Ob2RlPlxuPC9UcmVlTW9kZWw+XG48L1BNTUw+XG5gO1xuIiwiaW1wb3J0IHsgaXNEYXRlLCBpc0VtcHR5T2JqZWN0LCBpc09iamVjdCwgaGFzT3duUHJvcGVydHksIG1ha2VPYmplY3RXaXRob3V0UHJvdG90eXBlIH0gZnJvbSAnLi91dGlscy5qcyc7XG5cbmNvbnN0IGRpZmYgPSAobGhzLCByaHMpID0+IHtcbiAgaWYgKGxocyA9PT0gcmhzKSByZXR1cm4ge307IC8vIGVxdWFsIHJldHVybiBubyBkaWZmXG5cbiAgaWYgKCFpc09iamVjdChsaHMpIHx8ICFpc09iamVjdChyaHMpKSByZXR1cm4gcmhzOyAvLyByZXR1cm4gdXBkYXRlZCByaHNcblxuICBjb25zdCBkZWxldGVkVmFsdWVzID0gT2JqZWN0LmtleXMobGhzKS5yZWR1Y2UoKGFjYywga2V5KSA9PiB7XG4gICAgaWYgKCFoYXNPd25Qcm9wZXJ0eShyaHMsIGtleSkpIHtcbiAgICAgIGFjY1trZXldID0gdW5kZWZpbmVkO1xuICAgICAgXG4gICAgfVxuXG4gICAgcmV0dXJuIGFjYztcbiAgfSwgbWFrZU9iamVjdFdpdGhvdXRQcm90b3R5cGUoKSk7XG5cbiAgaWYgKGlzRGF0ZShsaHMpIHx8IGlzRGF0ZShyaHMpKSB7XG4gICAgaWYgKGxocy52YWx1ZU9mKCkgPT0gcmhzLnZhbHVlT2YoKSkgcmV0dXJuIHt9O1xuICAgIHJldHVybiByaHM7XG4gIH1cblxuICByZXR1cm4gT2JqZWN0LmtleXMocmhzKS5yZWR1Y2UoKGFjYywga2V5KSA9PiB7XG4gICAgaWYgKCFoYXNPd25Qcm9wZXJ0eShsaHMsIGtleSkpe1xuICAgICAgYWNjW2tleV0gPSByaHNba2V5XTsgLy8gcmV0dXJuIGFkZGVkIHIga2V5XG4gICAgICByZXR1cm4gYWNjO1xuICAgIH0gXG5cbiAgICBjb25zdCBkaWZmZXJlbmNlID0gZGlmZihsaHNba2V5XSwgcmhzW2tleV0pO1xuXG4gICAgLy8gSWYgdGhlIGRpZmZlcmVuY2UgaXMgZW1wdHksIGFuZCB0aGUgbGhzIGlzIGFuIGVtcHR5IG9iamVjdCBvciB0aGUgcmhzIGlzIG5vdCBhbiBlbXB0eSBvYmplY3RcbiAgICBpZiAoaXNFbXB0eU9iamVjdChkaWZmZXJlbmNlKSAmJiAhaXNEYXRlKGRpZmZlcmVuY2UpICYmIChpc0VtcHR5T2JqZWN0KGxoc1trZXldKSB8fCAhaXNFbXB0eU9iamVjdChyaHNba2V5XSkpKVxuICAgICAgcmV0dXJuIGFjYzsgLy8gcmV0dXJuIG5vIGRpZmZcblxuICAgIGFjY1trZXldID0gZGlmZmVyZW5jZSAvLyByZXR1cm4gdXBkYXRlZCBrZXlcbiAgICByZXR1cm4gYWNjOyAvLyByZXR1cm4gdXBkYXRlZCBrZXlcbiAgfSwgZGVsZXRlZFZhbHVlcyk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkaWZmO1xuIiwiZXhwb3J0IGNvbnN0IGlzRGF0ZSA9IGQgPT4gZCBpbnN0YW5jZW9mIERhdGU7XG5leHBvcnQgY29uc3QgaXNFbXB0eSA9IG8gPT4gT2JqZWN0LmtleXMobykubGVuZ3RoID09PSAwO1xuZXhwb3J0IGNvbnN0IGlzT2JqZWN0ID0gbyA9PiBvICE9IG51bGwgJiYgdHlwZW9mIG8gPT09ICdvYmplY3QnO1xuZXhwb3J0IGNvbnN0IGhhc093blByb3BlcnR5ID0gKG8sIC4uLmFyZ3MpID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvLCAuLi5hcmdzKVxuZXhwb3J0IGNvbnN0IGlzRW1wdHlPYmplY3QgPSAobykgPT4gaXNPYmplY3QobykgJiYgaXNFbXB0eShvKTtcbmV4cG9ydCBjb25zdCBtYWtlT2JqZWN0V2l0aG91dFByb3RvdHlwZSA9ICgpID0+IE9iamVjdC5jcmVhdGUobnVsbCk7XG4iLCJ2YXIgYmFzZUFzc2lnblZhbHVlID0gcmVxdWlyZSgnLi9fYmFzZUFzc2lnblZhbHVlJyksXG4gICAgZXEgPSByZXF1aXJlKCcuL2VxJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQXNzaWducyBgdmFsdWVgIHRvIGBrZXlgIG9mIGBvYmplY3RgIGlmIHRoZSBleGlzdGluZyB2YWx1ZSBpcyBub3QgZXF1aXZhbGVudFxuICogdXNpbmcgW2BTYW1lVmFsdWVaZXJvYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtc2FtZXZhbHVlemVybylcbiAqIGZvciBlcXVhbGl0eSBjb21wYXJpc29ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gYXNzaWduLlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gYXNzaWduLlxuICovXG5mdW5jdGlvbiBhc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgdmFyIG9ialZhbHVlID0gb2JqZWN0W2tleV07XG4gIGlmICghKGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpICYmIGVxKG9ialZhbHVlLCB2YWx1ZSkpIHx8XG4gICAgICAodmFsdWUgPT09IHVuZGVmaW5lZCAmJiAhKGtleSBpbiBvYmplY3QpKSkge1xuICAgIGJhc2VBc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgdmFsdWUpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXNzaWduVmFsdWU7XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0Jyk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdENyZWF0ZSA9IE9iamVjdC5jcmVhdGU7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uY3JlYXRlYCB3aXRob3V0IHN1cHBvcnQgZm9yIGFzc2lnbmluZ1xuICogcHJvcGVydGllcyB0byB0aGUgY3JlYXRlZCBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm90byBUaGUgb2JqZWN0IHRvIGluaGVyaXQgZnJvbS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIG5ldyBvYmplY3QuXG4gKi9cbnZhciBiYXNlQ3JlYXRlID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBvYmplY3QoKSB7fVxuICByZXR1cm4gZnVuY3Rpb24ocHJvdG8pIHtcbiAgICBpZiAoIWlzT2JqZWN0KHByb3RvKSkge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgICBpZiAob2JqZWN0Q3JlYXRlKSB7XG4gICAgICByZXR1cm4gb2JqZWN0Q3JlYXRlKHByb3RvKTtcbiAgICB9XG4gICAgb2JqZWN0LnByb3RvdHlwZSA9IHByb3RvO1xuICAgIHZhciByZXN1bHQgPSBuZXcgb2JqZWN0O1xuICAgIG9iamVjdC5wcm90b3R5cGUgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn0oKSk7XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUNyZWF0ZTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKSxcbiAgICBpc1Byb3RvdHlwZSA9IHJlcXVpcmUoJy4vX2lzUHJvdG90eXBlJyksXG4gICAgbmF0aXZlS2V5c0luID0gcmVxdWlyZSgnLi9fbmF0aXZlS2V5c0luJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ua2V5c0luYCB3aGljaCBkb2Vzbid0IHRyZWF0IHNwYXJzZSBhcnJheXMgYXMgZGVuc2UuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VLZXlzSW4ob2JqZWN0KSB7XG4gIGlmICghaXNPYmplY3Qob2JqZWN0KSkge1xuICAgIHJldHVybiBuYXRpdmVLZXlzSW4ob2JqZWN0KTtcbiAgfVxuICB2YXIgaXNQcm90byA9IGlzUHJvdG90eXBlKG9iamVjdCksXG4gICAgICByZXN1bHQgPSBbXTtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgaWYgKCEoa2V5ID09ICdjb25zdHJ1Y3RvcicgJiYgKGlzUHJvdG8gfHwgIWhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpKSkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUtleXNJbjtcbiIsInZhciBVaW50OEFycmF5ID0gcmVxdWlyZSgnLi9fVWludDhBcnJheScpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiBgYXJyYXlCdWZmZXJgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5QnVmZmVyfSBhcnJheUJ1ZmZlciBUaGUgYXJyYXkgYnVmZmVyIHRvIGNsb25lLlxuICogQHJldHVybnMge0FycmF5QnVmZmVyfSBSZXR1cm5zIHRoZSBjbG9uZWQgYXJyYXkgYnVmZmVyLlxuICovXG5mdW5jdGlvbiBjbG9uZUFycmF5QnVmZmVyKGFycmF5QnVmZmVyKSB7XG4gIHZhciByZXN1bHQgPSBuZXcgYXJyYXlCdWZmZXIuY29uc3RydWN0b3IoYXJyYXlCdWZmZXIuYnl0ZUxlbmd0aCk7XG4gIG5ldyBVaW50OEFycmF5KHJlc3VsdCkuc2V0KG5ldyBVaW50OEFycmF5KGFycmF5QnVmZmVyKSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2xvbmVBcnJheUJ1ZmZlcjtcbiIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGV4cG9ydHNgLiAqL1xudmFyIGZyZWVFeHBvcnRzID0gdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgJiYgZXhwb3J0cyAmJiAhZXhwb3J0cy5ub2RlVHlwZSAmJiBleHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYG1vZHVsZWAuICovXG52YXIgZnJlZU1vZHVsZSA9IGZyZWVFeHBvcnRzICYmIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlICYmICFtb2R1bGUubm9kZVR5cGUgJiYgbW9kdWxlO1xuXG4vKiogRGV0ZWN0IHRoZSBwb3B1bGFyIENvbW1vbkpTIGV4dGVuc2lvbiBgbW9kdWxlLmV4cG9ydHNgLiAqL1xudmFyIG1vZHVsZUV4cG9ydHMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUuZXhwb3J0cyA9PT0gZnJlZUV4cG9ydHM7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIEJ1ZmZlciA9IG1vZHVsZUV4cG9ydHMgPyByb290LkJ1ZmZlciA6IHVuZGVmaW5lZCxcbiAgICBhbGxvY1Vuc2FmZSA9IEJ1ZmZlciA/IEJ1ZmZlci5hbGxvY1Vuc2FmZSA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgIGBidWZmZXJgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0J1ZmZlcn0gYnVmZmVyIFRoZSBidWZmZXIgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlZXBdIFNwZWNpZnkgYSBkZWVwIGNsb25lLlxuICogQHJldHVybnMge0J1ZmZlcn0gUmV0dXJucyB0aGUgY2xvbmVkIGJ1ZmZlci5cbiAqL1xuZnVuY3Rpb24gY2xvbmVCdWZmZXIoYnVmZmVyLCBpc0RlZXApIHtcbiAgaWYgKGlzRGVlcCkge1xuICAgIHJldHVybiBidWZmZXIuc2xpY2UoKTtcbiAgfVxuICB2YXIgbGVuZ3RoID0gYnVmZmVyLmxlbmd0aCxcbiAgICAgIHJlc3VsdCA9IGFsbG9jVW5zYWZlID8gYWxsb2NVbnNhZmUobGVuZ3RoKSA6IG5ldyBidWZmZXIuY29uc3RydWN0b3IobGVuZ3RoKTtcblxuICBidWZmZXIuY29weShyZXN1bHQpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsb25lQnVmZmVyO1xuIiwidmFyIGNsb25lQXJyYXlCdWZmZXIgPSByZXF1aXJlKCcuL19jbG9uZUFycmF5QnVmZmVyJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIGB0eXBlZEFycmF5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHR5cGVkQXJyYXkgVGhlIHR5cGVkIGFycmF5IHRvIGNsb25lLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNEZWVwXSBTcGVjaWZ5IGEgZGVlcCBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNsb25lZCB0eXBlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gY2xvbmVUeXBlZEFycmF5KHR5cGVkQXJyYXksIGlzRGVlcCkge1xuICB2YXIgYnVmZmVyID0gaXNEZWVwID8gY2xvbmVBcnJheUJ1ZmZlcih0eXBlZEFycmF5LmJ1ZmZlcikgOiB0eXBlZEFycmF5LmJ1ZmZlcjtcbiAgcmV0dXJuIG5ldyB0eXBlZEFycmF5LmNvbnN0cnVjdG9yKGJ1ZmZlciwgdHlwZWRBcnJheS5ieXRlT2Zmc2V0LCB0eXBlZEFycmF5Lmxlbmd0aCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2xvbmVUeXBlZEFycmF5O1xuIiwiLyoqXG4gKiBDb3BpZXMgdGhlIHZhbHVlcyBvZiBgc291cmNlYCB0byBgYXJyYXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBzb3VyY2UgVGhlIGFycmF5IHRvIGNvcHkgdmFsdWVzIGZyb20uXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXk9W11dIFRoZSBhcnJheSB0byBjb3B5IHZhbHVlcyB0by5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBjb3B5QXJyYXkoc291cmNlLCBhcnJheSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHNvdXJjZS5sZW5ndGg7XG5cbiAgYXJyYXkgfHwgKGFycmF5ID0gQXJyYXkobGVuZ3RoKSk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgYXJyYXlbaW5kZXhdID0gc291cmNlW2luZGV4XTtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29weUFycmF5O1xuIiwidmFyIGFzc2lnblZhbHVlID0gcmVxdWlyZSgnLi9fYXNzaWduVmFsdWUnKSxcbiAgICBiYXNlQXNzaWduVmFsdWUgPSByZXF1aXJlKCcuL19iYXNlQXNzaWduVmFsdWUnKTtcblxuLyoqXG4gKiBDb3BpZXMgcHJvcGVydGllcyBvZiBgc291cmNlYCB0byBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyBmcm9tLlxuICogQHBhcmFtIHtBcnJheX0gcHJvcHMgVGhlIHByb3BlcnR5IGlkZW50aWZpZXJzIHRvIGNvcHkuXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdD17fV0gVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgdG8uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY3VzdG9taXplcl0gVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb3BpZWQgdmFsdWVzLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gY29weU9iamVjdChzb3VyY2UsIHByb3BzLCBvYmplY3QsIGN1c3RvbWl6ZXIpIHtcbiAgdmFyIGlzTmV3ID0gIW9iamVjdDtcbiAgb2JqZWN0IHx8IChvYmplY3QgPSB7fSk7XG5cbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBwcm9wcy5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIga2V5ID0gcHJvcHNbaW5kZXhdO1xuXG4gICAgdmFyIG5ld1ZhbHVlID0gY3VzdG9taXplclxuICAgICAgPyBjdXN0b21pemVyKG9iamVjdFtrZXldLCBzb3VyY2Vba2V5XSwga2V5LCBvYmplY3QsIHNvdXJjZSlcbiAgICAgIDogdW5kZWZpbmVkO1xuXG4gICAgaWYgKG5ld1ZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIG5ld1ZhbHVlID0gc291cmNlW2tleV07XG4gICAgfVxuICAgIGlmIChpc05ldykge1xuICAgICAgYmFzZUFzc2lnblZhbHVlKG9iamVjdCwga2V5LCBuZXdWYWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFzc2lnblZhbHVlKG9iamVjdCwga2V5LCBuZXdWYWx1ZSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBvYmplY3Q7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29weU9iamVjdDtcbiIsInZhciBiYXNlQ3JlYXRlID0gcmVxdWlyZSgnLi9fYmFzZUNyZWF0ZScpLFxuICAgIGdldFByb3RvdHlwZSA9IHJlcXVpcmUoJy4vX2dldFByb3RvdHlwZScpLFxuICAgIGlzUHJvdG90eXBlID0gcmVxdWlyZSgnLi9faXNQcm90b3R5cGUnKTtcblxuLyoqXG4gKiBJbml0aWFsaXplcyBhbiBvYmplY3QgY2xvbmUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGluaXRpYWxpemVkIGNsb25lLlxuICovXG5mdW5jdGlvbiBpbml0Q2xvbmVPYmplY3Qob2JqZWN0KSB7XG4gIHJldHVybiAodHlwZW9mIG9iamVjdC5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmICFpc1Byb3RvdHlwZShvYmplY3QpKVxuICAgID8gYmFzZUNyZWF0ZShnZXRQcm90b3R5cGUob2JqZWN0KSlcbiAgICA6IHt9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluaXRDbG9uZU9iamVjdDtcbiIsIi8qKlxuICogVGhpcyBmdW5jdGlvbiBpcyBsaWtlXG4gKiBbYE9iamVjdC5rZXlzYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LmtleXMpXG4gKiBleGNlcHQgdGhhdCBpdCBpbmNsdWRlcyBpbmhlcml0ZWQgZW51bWVyYWJsZSBwcm9wZXJ0aWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBuYXRpdmVLZXlzSW4ob2JqZWN0KSB7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgaWYgKG9iamVjdCAhPSBudWxsKSB7XG4gICAgZm9yICh2YXIga2V5IGluIE9iamVjdChvYmplY3QpKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG5hdGl2ZUtleXNJbjtcbiIsInZhciBhcnJheUxpa2VLZXlzID0gcmVxdWlyZSgnLi9fYXJyYXlMaWtlS2V5cycpLFxuICAgIGJhc2VLZXlzSW4gPSByZXF1aXJlKCcuL19iYXNlS2V5c0luJyksXG4gICAgaXNBcnJheUxpa2UgPSByZXF1aXJlKCcuL2lzQXJyYXlMaWtlJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGFuZCBpbmhlcml0ZWQgZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiBgb2JqZWN0YC5cbiAqXG4gKiAqKk5vdGU6KiogTm9uLW9iamVjdCB2YWx1ZXMgYXJlIGNvZXJjZWQgdG8gb2JqZWN0cy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDMuMC4wXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBGb28oKSB7XG4gKiAgIHRoaXMuYSA9IDE7XG4gKiAgIHRoaXMuYiA9IDI7XG4gKiB9XG4gKlxuICogRm9vLnByb3RvdHlwZS5jID0gMztcbiAqXG4gKiBfLmtleXNJbihuZXcgRm9vKTtcbiAqIC8vID0+IFsnYScsICdiJywgJ2MnXSAoaXRlcmF0aW9uIG9yZGVyIGlzIG5vdCBndWFyYW50ZWVkKVxuICovXG5mdW5jdGlvbiBrZXlzSW4ob2JqZWN0KSB7XG4gIHJldHVybiBpc0FycmF5TGlrZShvYmplY3QpID8gYXJyYXlMaWtlS2V5cyhvYmplY3QsIHRydWUpIDogYmFzZUtleXNJbihvYmplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGtleXNJbjtcbiJdLCJuYW1lcyI6WyJ1c2VDYWxsYmFjayIsInVzZU1lbW8iLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIkZsZXgiLCJGbGV4SXRlbSIsIlBhZ2UiLCJQYWdlU2VjdGlvbiIsImdldE1hcnNoYWxsZXIiLCJub3JtYWxpemUiLCJhdmFpbGFibGVNb2RlbHNCeVBhdGgiLCJtb2RlbHNCeU5hbWVzcGFjZSIsImdlbmVyYXRlRW1wdHlEbW4xNSIsIkRtbkVkaXRvcldyYXBwZXIiLCJVU0VfQ0FTRV9NT0RFTFMiLCJpbml0aWFsTW9kZWwiLCJEZXZQbGF5Z3JvdW5kIiwiYXJncyIsInN0YXRlIiwic2V0U3RhdGUiLCJpbml0aWFsRG1uTWFyc2hhbGxlciIsInVwZ3JhZGVUbyIsIm1hcnNoYWxsZXIiLCJzdGFjayIsInBhcnNlciIsInBhcnNlIiwicG9pbnRlciIsIm9uRHJvcCIsImUiLCJjb25zb2xlIiwibG9nIiwicHJldmVudERlZmF1bHQiLCJkYXRhVHJhbnNmZXIiLCJpdGVtcyIsImZvckVhY2giLCJpdGVtIiwiaSIsImtpbmQiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9yZWYiLCJ0YXJnZXQiLCJyZXN1bHQiLCJyZWFkQXNUZXh0IiwiZ2V0QXNGaWxlIiwib25EcmFnT3ZlciIsInJlc2V0IiwiY3VycmVudE1vZGVsIiwiZG93bmxvYWRSZWYiLCJkb3dubG9hZEFzWG1sIiwiY3VycmVudCIsImZpbGVCbG9iIiwiQmxvYiIsImJ1aWxkZXIiLCJidWlsZCIsInR5cGUiLCJkb3dubG9hZCIsImNyZWF0ZUlkIiwiaHJlZiIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImNsaWNrIiwiY29weUFzWG1sIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwidW5kbyIsInByZXYiLCJNYXRoIiwibWF4IiwicmVkbyIsIm1pbiIsImxlbmd0aCIsIm9uTW9kZWxDaGFuZ2UiLCJtb2RlbCIsIm5ld1N0YWNrIiwic2xpY2UiLCJvblNlbGVjdE1vZGVsIiwibmV3TW9kZWwiLCJvblJlcXVlc3RUb0p1bXBUb1BhdGgiLCJwYXRoIiwiYWxlcnQiLCJleHRlcm5hbE1vZGVsc0J5TmFtZXNwYWNlIiwiX2EiLCJkZWZpbml0aW9ucyIsImltcG9ydCIsInJlZHVjZSIsImFjYyIsIm9uUmVxdWVzdEV4dGVybmFsTW9kZWxCeVBhdGgiLCJvblJlcXVlc3RFeHRlcm5hbE1vZGVsc0F2YWlsYWJsZVRvSW5jbHVkZSIsIk9iamVjdCIsImtleXMiLCJpc1VuZG9FbmFibGVkIiwiaXNSZWRvRW5hYmxlZCIsIl9qc3giLCJfRnJhZ21lbnQiLCJjaGlsZHJlbiIsInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJfanN4cyIsInZhcmlhbnQiLCJpc0ZpbGxlZCIsInBhZGRpbmciLCJkZWZhdWx0IiwianVzdGlmeUNvbnRlbnQiLCJzaHJpbmsiLCJvbkNsaWNrIiwibG9hblByZVF1YWxpZmljYXRpb24iLCJhdXRvbGF5b3V0IiwiZGlzYWJsZWQiLCJvcGFjaXR5IiwicmVmIiwiaGFzT3ZlcmZsb3dTY3JvbGwiLCJvcmlnaW5hbFZlcnNpb24iLCJleHRlcm5hbENvbnRleHROYW1lIiwiZXh0ZXJuYWxDb250ZXh0RGVzY3JpcHRpb24iLCJ2YWxpZGF0aW9uTWVzc2FnZXMiLCJldmFsdWF0aW9uUmVzdWx0c0J5Tm9kZUlkIiwiaXNzdWVUcmFja2VySHJlZiIsImlzUmVhZE9ubHkiLCJjaGFyYWN0ZXJzIiwiY2hhcmFjdGVyc0xlbmd0aCIsImNvdW50ZXIiLCJjaGFyQXQiLCJmbG9vciIsInJhbmRvbSIsIm1ldGEiLCJ0aXRsZSIsImNvbXBvbmVudCIsIlBsYXlncm91bmQiLCJyZW5kZXIiLCJNYXAiLCJwYXJhbWV0ZXJzIiwiZG9jcyIsInNvdXJjZSIsIm9yaWdpbmFsU291cmNlIiwiX2MiLCJfYiIsIl9fbmFtZWRFeHBvcnRzT3JkZXIiLCJucyIsImRtbjE1bnMiLCJnZW5lcmF0ZVV1aWQiLCJETU4xNV9TUEVDIiwiRG1uRWRpdG9yIiwiZ2V0IiwiZXhwcmVzc2lvbkxhbmd1YWdlIiwiaW5jbHVkZVN0b3JpZXMiLCJFbXB0eSIsInhtbCIsIlhNTDJQTU1MIiwiZ2V0UG1tbE5hbWVzcGFjZSIsInRlc3RUcmVlUG1tbCIsInRlc3RUcmVlUG1tbE1vZGVsIiwiYXZhaWFibGVNb2RlbHMiLCJzdW1Ca20iLCJub3JtYWxpemVkUG9zaXhQYXRoUmVsYXRpdmVUb1RoZU9wZW5GaWxlIiwic3ZnIiwic3VtRGlmZkRzIiwidmFsdWVzIiwidiIsInVzZUVmZmVjdCIsInVzZUFyZ3MiLCJkaWZmIiwicHJvcHMiLCJ1cGRhdGVBcmdzIiwiYXJnc0NvcHkiLCJtb2RlbEFyZ3MiLCJzZXRNb2RlbEFyZ3MiLCJtb2RlbENoYW5nZWQiLCJzZXRNb2RlbENoYW5nZSIsInNldElzUmVhZE9ubHkiLCJvbk9wZW5lZEJveGVkRXhwcmVzc2lvbkVkaXRvck5vZGVDaGFuZ2VOb09wZXJhdGlvbiIsIm5ld09wZW5lZE5vZGVJZCIsInVuZGVmaW5lZCIsIm9uTW9kZWxEZWJvdW5jZVN0YXRlQ2hhbmdlZCIsImNoYW5nZWQiLCJkaXNwbGF5IiwiSlNPTiIsInN0cmluZ2lmeSIsImN1cnJlbnRWYWx1ZSIsInRvU3RyaW5nIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwiaXNFdmFsdWF0aW9uSGlnaGxpZ2h0c1N1cHBvcnRlZCIsIl9kIiwib25PcGVuZWRCb3hlZEV4cHJlc3Npb25FZGl0b3JOb2RlQ2hhbmdlIiwiX2UiLCJfZiIsIl9nIiwiX2giLCJfaiIsIl9rIiwiX2wiLCJfbSIsIl9vIl0sInNvdXJjZVJvb3QiOiIifQ==