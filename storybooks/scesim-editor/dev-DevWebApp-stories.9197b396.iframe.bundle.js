"use strict";
(self["webpackChunk_kie_tools_scesim_editor"] = self["webpackChunk_kie_tools_scesim_editor"] || []).push([["dev-DevWebApp-stories"],{

/***/ "./stories/dev/DevWebApp.stories.tsx":
/*!*******************************************!*\
  !*** ./stories/dev/DevWebApp.stories.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WebApp: () => (/* binding */ WebApp),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _patternfly_react_core_dist_styles_base_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core/dist/styles/base.css */ "../../node_modules/.pnpm/@patternfly+react-core@4.276.6_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@patternfly/react-core/dist/styles/base.css");
/* harmony import */ var _patternfly_react_core_dist_js_components_Button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Button */ "../../node_modules/.pnpm/@patternfly+react-core@4.276.6_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@patternfly/react-core/dist/js/components/Button/index.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Button__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Button__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Flex__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @patternfly/react-core/dist/js/layouts/Flex */ "../../node_modules/.pnpm/@patternfly+react-core@4.276.6_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@patternfly/react-core/dist/js/layouts/Flex/index.js");
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Flex__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_layouts_Flex__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _patternfly_react_core_dist_js_components_Page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Page */ "../../node_modules/.pnpm/@patternfly+react-core@4.276.6_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@patternfly/react-core/dist/js/components/Page/index.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Page__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Page__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _patternfly_react_core_dist_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @patternfly/react-core/dist/js */ "../../node_modules/.pnpm/@patternfly+react-core@4.276.6_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@patternfly/react-core/dist/js/index.js");
/* harmony import */ var _patternfly_react_core_dist_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _kie_tools_scesim_marshaller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @kie-tools/scesim-marshaller */ "../scesim-marshaller/dist/index.js");
/* harmony import */ var _src_resources_EmptyScesimFile__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../src/resources/EmptyScesimFile */ "./src/resources/EmptyScesimFile.ts");
/* harmony import */ var _scesimEditorStoriesWrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../scesimEditorStoriesWrapper */ "./stories/scesimEditorStoriesWrapper.tsx");
/* harmony import */ var _misc_empty_Empty_stories__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../misc/empty/Empty.stories */ "./stories/misc/empty/Empty.stories.tsx");
/* harmony import */ var _useCases_IsOldEnoughRule_stories__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../useCases/IsOldEnoughRule.stories */ "./stories/useCases/IsOldEnoughRule.stories.tsx");
/* harmony import */ var _useCases_TrafficViolationDmn_stories__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../useCases/TrafficViolationDmn.stories */ "./stories/useCases/TrafficViolationDmn.stories.tsx");
/* harmony import */ var _examples_AvailableDMNModels__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../examples/AvailableDMNModels */ "./stories/examples/AvailableDMNModels.ts");
var _a, _b, _c;














function DevWebApp(props) {
  const [fileName, setFileName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("Untitled.scesim");
  const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(() => {
    const emptySceSimMarshaller = (0,_kie_tools_scesim_marshaller__WEBPACK_IMPORTED_MODULE_3__.getMarshaller)(_src_resources_EmptyScesimFile__WEBPACK_IMPORTED_MODULE_9__.EMPTY_ONE_EIGHT);
    return {
      marshaller: emptySceSimMarshaller,
      pointer: 0,
      stack: [emptySceSimMarshaller.parser.parse()]
    };
  });
  const currentModel = state.stack[state.pointer];
  const downloadRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const isUndoEnabled = state.pointer > 0;
  const isRedoEnabled = state.pointer !== state.stack.length - 1;
  const copyAsXml = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    navigator.clipboard.writeText(state.marshaller.builder.build(currentModel));
  }, [currentModel, state.marshaller.builder]);
  const downloadAsXml = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    if (downloadRef.current) {
      const fileBlob = new Blob([state.marshaller.builder.build(currentModel)], {
        type: "text/xml"
      });
      downloadRef.current.download = fileName !== null && fileName !== void 0 ? fileName : `scesim-test-${makeid(10)}.scesim`;
      downloadRef.current.href = URL.createObjectURL(fileBlob);
      downloadRef.current.click();
    }
  }, [currentModel, fileName, state.marshaller.builder]);
  const externalModelsByNamespace = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    var _a;
    if (currentModel.ScenarioSimulationModel.settings.dmnNamespace) {
      const dmnModel = _examples_AvailableDMNModels__WEBPACK_IMPORTED_MODULE_8__.availableModels.find(model => {
        var _a;
        return model.model.definitions["@_namespace"] === ((_a = currentModel.ScenarioSimulationModel.settings.dmnNamespace) === null || _a === void 0 ? void 0 : _a.__$$text);
      });
      return new Map([[(_a = currentModel.ScenarioSimulationModel.settings.dmnNamespace) === null || _a === void 0 ? void 0 : _a.__$$text, dmnModel]]);
    }
    return undefined;
  }, [currentModel.ScenarioSimulationModel.settings.dmnNamespace]);
  const onDragOver = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(e => {
    e.preventDefault();
  }, []);
  const onDrop = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(e => {
    console.log("Test Scenario Editor :: Dev webapp :: File(s) dropped! Opening it.");
    e.preventDefault();
    if (e.dataTransfer.items) {
      [...e.dataTransfer.items].forEach((item, i) => {
        var _a;
        if (item.kind === "file") {
          const reader = new FileReader();
          setFileName((_a = item.getAsFile()) === null || _a === void 0 ? void 0 : _a.name);
          reader.addEventListener("load", _ref => {
            let {
              target
            } = _ref;
            const marshaller = (0,_kie_tools_scesim_marshaller__WEBPACK_IMPORTED_MODULE_3__.getMarshaller)(target === null || target === void 0 ? void 0 : target.result);
            setState({
              marshaller,
              pointer: 0,
              stack: [marshaller.parser.parse()]
            });
          });
          reader.readAsText(item.getAsFile());
        }
      });
    }
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
  const onRequestToJumpToPath = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(path => {
    alert("A request to open this file: " + path);
  }, []);
  const onSelectModel = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((newModel, fileName) => {
    onModelChange((0,_kie_tools_scesim_marshaller__WEBPACK_IMPORTED_MODULE_3__.getMarshaller)(newModel).parser.parse());
    setFileName(fileName);
  }, [onModelChange]);
  const redo = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    setState(prev => ({
      ...prev,
      pointer: Math.min(prev.stack.length - 1, prev.pointer + 1)
    }));
  }, []);
  const reset = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    const marshaller = (0,_kie_tools_scesim_marshaller__WEBPACK_IMPORTED_MODULE_3__.getMarshaller)(_src_resources_EmptyScesimFile__WEBPACK_IMPORTED_MODULE_9__.EMPTY_ONE_EIGHT);
    setState({
      marshaller,
      pointer: 0,
      stack: [marshaller.parser.parse()]
    });
  }, []);
  const undo = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    setState(prev => ({
      ...prev,
      pointer: Math.max(0, prev.pointer - 1)
    }));
  }, []);
  const onRequestExternalModelByPath = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async path => {
    var _a;
    return (_a = _examples_AvailableDMNModels__WEBPACK_IMPORTED_MODULE_8__.availableModelsByPath[path]) !== null && _a !== void 0 ? _a : null;
  }, []);
  const onRequestExternalModelsAvailableToInclude = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async () => {
    return Object.keys(_examples_AvailableDMNModels__WEBPACK_IMPORTED_MODULE_8__.availableModelsByPath);
  }, []);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
    style: {
      width: "100vw",
      height: "100vh"
    },
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_js_components_Page__WEBPACK_IMPORTED_MODULE_10__.Page, {
      onDragOver: onDragOver,
      onDrop: onDrop,
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_js_components_Page__WEBPACK_IMPORTED_MODULE_10__.PageSection, {
        "aria-label": "dev-app-header",
        variant: "light",
        isFilled: false,
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_js__WEBPACK_IMPORTED_MODULE_11__.Stack, {
          hasGutter: true,
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_js__WEBPACK_IMPORTED_MODULE_11__.StackItem, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_js_layouts_Flex__WEBPACK_IMPORTED_MODULE_12__.Flex, {
              justifyContent: {
                default: "justifyContentSpaceBetween"
              },
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_js_layouts_Flex__WEBPACK_IMPORTED_MODULE_12__.FlexItem, {
                shrink: {
                  default: "shrink"
                },
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", {
                  children: "Test Scenario Editor :: Dev WebApp"
                })
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_js_layouts_Flex__WEBPACK_IMPORTED_MODULE_12__.FlexItem, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h5", {
                  children: "(Drag & drop a file anywhere to open it)"
                })
              })]
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_js__WEBPACK_IMPORTED_MODULE_11__.StackItem, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_js_layouts_Flex__WEBPACK_IMPORTED_MODULE_12__.Flex, {
              justifyContent: {
                default: "justifyContentSpaceBetween"
              },
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_js_layouts_Flex__WEBPACK_IMPORTED_MODULE_12__.FlexItem, {
                shrink: {
                  default: "shrink"
                },
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_js_components_Button__WEBPACK_IMPORTED_MODULE_13__.Button, {
                  onClick: () => onSelectModel(_src_resources_EmptyScesimFile__WEBPACK_IMPORTED_MODULE_9__.EMPTY_ONE_EIGHT, _misc_empty_Empty_stories__WEBPACK_IMPORTED_MODULE_5__.emptyFileName),
                  children: "Empty"
                }), "\u00A0 \u00A0", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_js_components_Button__WEBPACK_IMPORTED_MODULE_13__.Button, {
                  onClick: () => onSelectModel(_useCases_IsOldEnoughRule_stories__WEBPACK_IMPORTED_MODULE_6__.isOldEnoughDrl, _useCases_IsOldEnoughRule_stories__WEBPACK_IMPORTED_MODULE_6__.isOldEnoughDrlFileName),
                  children: "Are They Old Enough?"
                }), "\u00A0 \u00A0", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_js_components_Button__WEBPACK_IMPORTED_MODULE_13__.Button, {
                  onClick: () => onSelectModel(_useCases_TrafficViolationDmn_stories__WEBPACK_IMPORTED_MODULE_7__.trafficViolationDmn, _useCases_TrafficViolationDmn_stories__WEBPACK_IMPORTED_MODULE_7__.trafficViolationDmnFileName),
                  children: "Traffic Violation"
                }), "\u00A0 \u00A0 | \u00A0 \u00A0", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_js_components_Button__WEBPACK_IMPORTED_MODULE_13__.Button, {
                  onClick: undo,
                  disabled: !isUndoEnabled,
                  style: {
                    opacity: isUndoEnabled ? 1 : 0.5
                  },
                  variant: "secondary",
                  children: `Undo (${state.pointer})`
                }), "\u00A0 \u00A0", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_js_components_Button__WEBPACK_IMPORTED_MODULE_13__.Button, {
                  onClick: redo,
                  disabled: !isRedoEnabled,
                  style: {
                    opacity: isRedoEnabled ? 1 : 0.5
                  },
                  variant: "secondary",
                  children: `Redo (${state.stack.length - 1 - state.pointer})`
                }), "\u00A0 \u00A0 | \u00A0 \u00A0", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_js_components_Button__WEBPACK_IMPORTED_MODULE_13__.Button, {
                  onClick: reset,
                  variant: "tertiary",
                  children: "Reset"
                }), "\u00A0 \u00A0", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_js_components_Button__WEBPACK_IMPORTED_MODULE_13__.Button, {
                  onClick: copyAsXml,
                  variant: "tertiary",
                  children: "Copy as XML"
                }), "\u00A0 \u00A0", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_js_components_Button__WEBPACK_IMPORTED_MODULE_13__.Button, {
                  onClick: downloadAsXml,
                  variant: "tertiary",
                  children: "Download"
                })]
              })
            })
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
          ref: downloadRef
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("hr", {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_js_components_Page__WEBPACK_IMPORTED_MODULE_10__.PageSection, {
        "aria-label": "editor",
        isFilled: true,
        hasOverflowScroll: true,
        padding: {
          default: "noPadding"
        },
        variant: "light",
        children: (0,_scesimEditorStoriesWrapper__WEBPACK_IMPORTED_MODULE_4__.SceSimEditorWrapper)({
          issueTrackerHref: props.issueTrackerHref,
          externalModelsByNamespace: externalModelsByNamespace,
          model: currentModel,
          onModelChange: onModelChange,
          onRequestExternalModelsAvailableToInclude: onRequestExternalModelsAvailableToInclude,
          onRequestExternalModelByPath: onRequestExternalModelByPath,
          onRequestToJumpToPath: onRequestToJumpToPath,
          openFileNormalizedPosixPathRelativeToTheWorkspaceRoot: fileName
        })
      })]
    })
  });
}
function makeid(length) {
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
  title: "Dev/Web App",
  component: DevWebApp
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (meta);
const WebApp = {
  render: args => DevWebApp(args),
  args: {
    issueTrackerHref: "https://github.com/apache/incubator-kie-issues/issues/new",
    model: (0,_kie_tools_scesim_marshaller__WEBPACK_IMPORTED_MODULE_3__.getMarshaller)(_misc_empty_Empty_stories__WEBPACK_IMPORTED_MODULE_5__.emptyFileName).parser.parse(),
    openFileNormalizedPosixPathRelativeToTheWorkspaceRoot: "Untitled.scesim"
  }
};
WebApp.parameters = {
  ...WebApp.parameters,
  docs: {
    ...((_a = WebApp.parameters) === null || _a === void 0 ? void 0 : _a.docs),
    source: {
      originalSource: "{\n  render: args => DevWebApp(args),\n  args: {\n    issueTrackerHref: \"https://github.com/apache/incubator-kie-issues/issues/new\",\n    model: getMarshaller(emptyFileName).parser.parse(),\n    openFileNormalizedPosixPathRelativeToTheWorkspaceRoot: \"Untitled.scesim\"\n  }\n}",
      ...((_c = (_b = WebApp.parameters) === null || _b === void 0 ? void 0 : _b.docs) === null || _c === void 0 ? void 0 : _c.source)
    }
  }
};
const __namedExportsOrder = ["WebApp"];

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
/* harmony export */   emptyFileName: () => (/* binding */ emptyFileName)
/* harmony export */ });
/* harmony import */ var _kie_tools_scesim_marshaller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @kie-tools/scesim-marshaller */ "../scesim-marshaller/dist/index.js");
/* harmony import */ var _src_TestScenarioEditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../src/TestScenarioEditor */ "./src/TestScenarioEditor.tsx");
/* harmony import */ var _src_resources_EmptyScesimFile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../src/resources/EmptyScesimFile */ "./src/resources/EmptyScesimFile.ts");
/* harmony import */ var _scesimEditorStoriesWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../scesimEditorStoriesWrapper */ "./stories/scesimEditorStoriesWrapper.tsx");
/* harmony import */ var _examples_ExternalDmnModels__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../examples/ExternalDmnModels */ "./stories/examples/ExternalDmnModels.ts");
/* harmony import */ var _kie_tools_dmn_marshaller_dist_normalization_normalize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @kie-tools/dmn-marshaller/dist/normalization/normalize */ "../dmn-marshaller/dist/normalization/normalize.js");
/* harmony import */ var _kie_tools_dmn_marshaller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @kie-tools/dmn-marshaller */ "../dmn-marshaller/dist/index.js");
var _a, _b, _c;







const emptyFileName = "Untitled.scesim";
const meta = {
  title: "Misc/Empty",
  component: _src_TestScenarioEditor__WEBPACK_IMPORTED_MODULE_1__.TestScenarioEditor,
  includeStories: /^[A-Z]/
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (meta);
const marshaller = (0,_kie_tools_scesim_marshaller__WEBPACK_IMPORTED_MODULE_0__.getMarshaller)(_src_resources_EmptyScesimFile__WEBPACK_IMPORTED_MODULE_5__.EMPTY_ONE_EIGHT);
const currentModel = marshaller.parser.parse();
const dmnModel = {
  normalizedPosixPathRelativeToTheOpenFile: "empty.dmn",
  type: "dmn",
  model: (0,_kie_tools_dmn_marshaller_dist_normalization_normalize__WEBPACK_IMPORTED_MODULE_3__.normalize)((0,_kie_tools_dmn_marshaller__WEBPACK_IMPORTED_MODULE_4__.getMarshaller)(_examples_ExternalDmnModels__WEBPACK_IMPORTED_MODULE_6__.EMPTY !== null && _examples_ExternalDmnModels__WEBPACK_IMPORTED_MODULE_6__.EMPTY !== void 0 ? _examples_ExternalDmnModels__WEBPACK_IMPORTED_MODULE_6__.EMPTY : "", {
    upgradeTo: "latest"
  }).parser.parse()),
  svg: ""
};
const Empty = {
  render: args => (0,_scesimEditorStoriesWrapper__WEBPACK_IMPORTED_MODULE_2__.SceSimEditorWrapper)(args),
  args: {
    model: marshaller.parser.parse(),
    openFileNormalizedPosixPathRelativeToTheWorkspaceRoot: emptyFileName,
    externalModelsByNamespace: new Map([["https://kie.org/dmn/_14487CEE-1B30-453E-976D-C11ED911548F", dmnModel]]),
    xml: marshaller.builder.build(currentModel),
    onRequestExternalModelsAvailableToInclude: () => Promise.resolve(["empty.dmn"]),
    onRequestExternalModelByPath: () => Promise.resolve(dmnModel)
  }
};
Empty.parameters = {
  ...Empty.parameters,
  docs: {
    ...((_a = Empty.parameters) === null || _a === void 0 ? void 0 : _a.docs),
    source: {
      originalSource: "{\n  render: args => SceSimEditorWrapper(args),\n  args: {\n    model: marshaller.parser.parse(),\n    openFileNormalizedPosixPathRelativeToTheWorkspaceRoot: emptyFileName,\n    externalModelsByNamespace: new Map([[\"https://kie.org/dmn/_14487CEE-1B30-453E-976D-C11ED911548F\", dmnModel]]),\n    xml: marshaller.builder.build(currentModel),\n    onRequestExternalModelsAvailableToInclude: () => Promise.resolve([\"empty.dmn\"]),\n    onRequestExternalModelByPath: () => Promise.resolve(dmnModel)\n  }\n}",
      ...((_c = (_b = Empty.parameters) === null || _b === void 0 ? void 0 : _b.docs) === null || _c === void 0 ? void 0 : _c.source)
    }
  }
};
const __namedExportsOrder = ["emptyFileName", "Empty"];

/***/ }),

/***/ "./stories/examples/AvailableDMNModels.ts":
/*!************************************************!*\
  !*** ./stories/examples/AvailableDMNModels.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   availableModels: () => (/* binding */ availableModels),
/* harmony export */   availableModelsByPath: () => (/* binding */ availableModelsByPath)
/* harmony export */ });
/* harmony import */ var _kie_tools_dmn_marshaller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @kie-tools/dmn-marshaller */ "../dmn-marshaller/dist/index.js");
/* harmony import */ var _kie_tools_dmn_marshaller_dist_normalization_normalize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @kie-tools/dmn-marshaller/dist/normalization/normalize */ "../dmn-marshaller/dist/normalization/normalize.js");
/* harmony import */ var _ExternalDmnModels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ExternalDmnModels */ "./stories/examples/ExternalDmnModels.ts");



const availableModels = [{
  model: (0,_kie_tools_dmn_marshaller_dist_normalization_normalize__WEBPACK_IMPORTED_MODULE_1__.normalize)((0,_kie_tools_dmn_marshaller__WEBPACK_IMPORTED_MODULE_0__.getMarshaller)(_ExternalDmnModels__WEBPACK_IMPORTED_MODULE_2__.COLLECTION, {
    upgradeTo: "latest"
  }).parser.parse()),
  svg: "",
  normalizedPosixPathRelativeToTheOpenFile: "dev-webapp/available-dmn-models/collection.dmn"
}, {
  model: (0,_kie_tools_dmn_marshaller_dist_normalization_normalize__WEBPACK_IMPORTED_MODULE_1__.normalize)((0,_kie_tools_dmn_marshaller__WEBPACK_IMPORTED_MODULE_0__.getMarshaller)(_ExternalDmnModels__WEBPACK_IMPORTED_MODULE_2__.COMPLEX_COLLECTION, {
    upgradeTo: "latest"
  }).parser.parse()),
  svg: "",
  normalizedPosixPathRelativeToTheOpenFile: "dev-webapp/available-dmn-models/complex_collection.dmn"
}, {
  model: (0,_kie_tools_dmn_marshaller_dist_normalization_normalize__WEBPACK_IMPORTED_MODULE_1__.normalize)((0,_kie_tools_dmn_marshaller__WEBPACK_IMPORTED_MODULE_0__.getMarshaller)(_ExternalDmnModels__WEBPACK_IMPORTED_MODULE_2__.EMPTY, {
    upgradeTo: "latest"
  }).parser.parse()),
  svg: "",
  normalizedPosixPathRelativeToTheOpenFile: "dev-webapp/available-dmn-models/empty.dmn"
}, {
  model: (0,_kie_tools_dmn_marshaller_dist_normalization_normalize__WEBPACK_IMPORTED_MODULE_1__.normalize)((0,_kie_tools_dmn_marshaller__WEBPACK_IMPORTED_MODULE_0__.getMarshaller)(_ExternalDmnModels__WEBPACK_IMPORTED_MODULE_2__.LOAN_PRE_QUALIFICATION, {
    upgradeTo: "latest"
  }).parser.parse()),
  svg: "",
  normalizedPosixPathRelativeToTheOpenFile: "dev-webapp/available-dmn-models/loan-pre-qualification.dmn"
}, {
  model: (0,_kie_tools_dmn_marshaller_dist_normalization_normalize__WEBPACK_IMPORTED_MODULE_1__.normalize)((0,_kie_tools_dmn_marshaller__WEBPACK_IMPORTED_MODULE_0__.getMarshaller)(_ExternalDmnModels__WEBPACK_IMPORTED_MODULE_2__.MIXED, {
    upgradeTo: "latest"
  }).parser.parse()),
  svg: "",
  normalizedPosixPathRelativeToTheOpenFile: "dev-webapp/available-dmn-models/mixed.dmn"
}, {
  model: (0,_kie_tools_dmn_marshaller_dist_normalization_normalize__WEBPACK_IMPORTED_MODULE_1__.normalize)((0,_kie_tools_dmn_marshaller__WEBPACK_IMPORTED_MODULE_0__.getMarshaller)(_ExternalDmnModels__WEBPACK_IMPORTED_MODULE_2__.SIMPLE, {
    upgradeTo: "latest"
  }).parser.parse()),
  svg: "",
  normalizedPosixPathRelativeToTheOpenFile: "dev-webapp/available-dmn-models/simple.dmn"
}, {
  model: (0,_kie_tools_dmn_marshaller_dist_normalization_normalize__WEBPACK_IMPORTED_MODULE_1__.normalize)((0,_kie_tools_dmn_marshaller__WEBPACK_IMPORTED_MODULE_0__.getMarshaller)(_ExternalDmnModels__WEBPACK_IMPORTED_MODULE_2__.TRAFFIC_VIOLATION, {
    upgradeTo: "latest"
  }).parser.parse()),
  svg: "",
  normalizedPosixPathRelativeToTheOpenFile: "dev-webapp/available-dmn-models/traffic-violation.dmn"
}];
const availableModelsByPath = Object.values(availableModels).reduce((acc, v) => {
  acc[v.normalizedPosixPathRelativeToTheOpenFile] = v;
  return acc;
}, {});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2LURldldlYkFwcC1zdG9yaWVzLjkxOTdiMzk2LmlmcmFtZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQnNFO0FBRWpCO0FBQ3FCO0FBQ0c7QUFDTTtBQUNqQjtBQUMwQjtBQUV0QjtBQUNGO0FBQ1I7QUFDaUM7QUFDYztBQUNuQjtBQUN4RixTQUFTcUIsU0FBU0EsQ0FBQ0MsS0FBOEI7RUFDL0MsTUFBTSxDQUFDQyxRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHckIsK0NBQVEsQ0FBcUIsaUJBQWlCLENBQUM7RUFDL0UsTUFBTSxDQUFDc0IsS0FBSyxFQUFFQyxRQUFRLENBQUMsR0FBR3ZCLCtDQUFRLENBSS9CLE1BQUs7SUFDTixNQUFNd0IscUJBQXFCLEdBQUdoQiwyRUFBYSxDQUFDQywyRUFBZSxDQUFDO0lBQzVELE9BQU87TUFDTGdCLFVBQVUsRUFBRUQscUJBQXFCO01BQ2pDRSxPQUFPLEVBQUUsQ0FBQztNQUNWQyxLQUFLLEVBQUUsQ0FBQ0gscUJBQXFCLENBQUNJLE1BQU0sQ0FBQ0MsS0FBSyxFQUFFO0tBQzdDO0VBQ0gsQ0FBQyxDQUFDO0VBQ0YsTUFBTUMsWUFBWSxHQUFHUixLQUFLLENBQUNLLEtBQUssQ0FBQ0wsS0FBSyxDQUFDSSxPQUFPLENBQUM7RUFDL0MsTUFBTUssV0FBVyxHQUFHaEMsNkNBQU0sQ0FBb0IsSUFBSSxDQUFDO0VBQ25ELE1BQU1pQyxhQUFhLEdBQUdWLEtBQUssQ0FBQ0ksT0FBTyxHQUFHLENBQUM7RUFDdkMsTUFBTU8sYUFBYSxHQUFHWCxLQUFLLENBQUNJLE9BQU8sS0FBS0osS0FBSyxDQUFDSyxLQUFLLENBQUNPLE1BQU0sR0FBRyxDQUFDO0VBQzlELE1BQU1DLFNBQVMsR0FBR3RDLGtEQUFXLENBQUMsTUFBSztJQUNqQ3VDLFNBQVMsQ0FBQ0MsU0FBUyxDQUFDQyxTQUFTLENBQUNoQixLQUFLLENBQUNHLFVBQVUsQ0FBQ2MsT0FBTyxDQUFDQyxLQUFL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LE1BQU0sQ0FBQzJELE1BQU0sQ0FDaEdqSixlQUFlLENBQ2hCLENBQUNrSixNQUFNLENBQ04sQ0FBQ0MsR0FBRyxFQUFFQyxDQUFDLEtBQUk7RUFDVEQsR0FBRyxDQUFDQyxDQUFDLENBQUNoQix3Q0FBd0MsQ0FBQyxHQUFHZ0IsQ0FBQztFQUNuRCxPQUFPRCxHQUFHO0FBQ1osQ0FBQyxFQUNELEVBQW9ELENBQ3JEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGtpZS10b29scy9zY2VzaW0tZWRpdG9yLy4vc3Rvcmllcy9kZXYvRGV2V2ViQXBwLnN0b3JpZXMudHN4Iiwid2VicGFjazovL0BraWUtdG9vbHMvc2Nlc2ltLWVkaXRvci8uL3N0b3JpZXMvbWlzYy9lbXB0eS9FbXB0eS5zdG9yaWVzLnRzeCIsIndlYnBhY2s6Ly9Aa2llLXRvb2xzL3NjZXNpbS1lZGl0b3IvLi9zdG9yaWVzL2V4YW1wbGVzL0F2YWlsYWJsZURNTk1vZGVscy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogTGljZW5zZWQgdG8gdGhlIEFwYWNoZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIChBU0YpIHVuZGVyIG9uZVxuICogb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuICBTZWUgdGhlIE5PVElDRSBmaWxlXG4gKiBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvblxuICogcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuICBUaGUgQVNGIGxpY2Vuc2VzIHRoaXMgZmlsZVxuICogdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZVxuICogXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4gKiB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZyxcbiAqIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXG4gKiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxuICogS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlXG4gKiBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zXG4gKiB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZU1lbW8sIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB0eXBlIHsgTWV0YSwgU3RvcnlPYmogfSBmcm9tIFwiQHN0b3J5Ym9vay9yZWFjdFwiO1xuaW1wb3J0IFwiQHBhdHRlcm5mbHkvcmVhY3QtY29yZS9kaXN0L3N0eWxlcy9iYXNlLmNzc1wiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkBwYXR0ZXJuZmx5L3JlYWN0LWNvcmUvZGlzdC9qcy9jb21wb25lbnRzL0J1dHRvblwiO1xuaW1wb3J0IHsgRmxleCwgRmxleEl0ZW0gfSBmcm9tIFwiQHBhdHRlcm5mbHkvcmVhY3QtY29yZS9kaXN0L2pzL2xheW91dHMvRmxleFwiO1xuaW1wb3J0IHsgUGFnZSwgUGFnZVNlY3Rpb24gfSBmcm9tIFwiQHBhdHRlcm5mbHkvcmVhY3QtY29yZS9kaXN0L2pzL2NvbXBvbmVudHMvUGFnZVwiO1xuaW1wb3J0IHsgU3RhY2ssIFN0YWNrSXRlbSB9IGZyb20gXCJAcGF0dGVybmZseS9yZWFjdC1jb3JlL2Rpc3QvanNcIjtcbmltcG9ydCB7IFNjZVNpbU1hcnNoYWxsZXIsIFNjZVNpbU1vZGVsLCBnZXRNYXJzaGFsbGVyIH0gZnJvbSBcIkBraWUtdG9vbHMvc2Nlc2ltLW1hcnNoYWxsZXJcIjtcbmltcG9ydCB7IEV4dGVybmFsRG1uc0luZGV4LCBPblJlcXVlc3RFeHRlcm5hbE1vZGVsQnlQYXRoLCBPblJlcXVlc3RFeHRlcm5hbE1vZGVsc0F2YWlsYWJsZVRvSW5jbHVkZSwgT25SZXF1ZXN0VG9KdW1wVG9QYXRoLCBPblNjZVNpbU1vZGVsQ2hhbmdlLCBUZXN0U2NlbmFyaW9FZGl0b3JQcm9wcyB9IGZyb20gXCIuLi8uLi9zcmMvVGVzdFNjZW5hcmlvRWRpdG9yXCI7XG5pbXBvcnQgeyBFTVBUWV9PTkVfRUlHSFQgfSBmcm9tIFwiLi4vLi4vc3JjL3Jlc291cmNlcy9FbXB0eVNjZXNpbUZpbGVcIjtcbmltcG9ydCB7IFNjZVNpbUVkaXRvcldyYXBwZXIgfSBmcm9tIFwiLi4vc2Nlc2ltRWRpdG9yU3Rvcmllc1dyYXBwZXJcIjtcbmltcG9ydCB7IGVtcHR5RmlsZU5hbWUgfSBmcm9tIFwiLi4vbWlzYy9lbXB0eS9FbXB0eS5zdG9yaWVzXCI7XG5pbXBvcnQgeyBpc09sZEVub3VnaERybCwgaXNPbGRFbm91Z2hEcmxGaWxlTmFtZSB9IGZyb20gXCIuLi91c2VDYXNlcy9Jc09sZEVub3VnaFJ1bGUuc3Rvcmllc1wiO1xuaW1wb3J0IHsgdHJhZmZpY1Zpb2xhdGlvbkRtbiwgdHJhZmZpY1Zpb2xhdGlvbkRtbkZpbGVOYW1lIH0gZnJvbSBcIi4uL3VzZUNhc2VzL1RyYWZmaWNWaW9sYXRpb25EbW4uc3Rvcmllc1wiO1xuaW1wb3J0IHsgYXZhaWxhYmxlTW9kZWxzLCBhdmFpbGFibGVNb2RlbHNCeVBhdGggfSBmcm9tIFwiLi4vZXhhbXBsZXMvQXZhaWxhYmxlRE1OTW9kZWxzXCI7XG5mdW5jdGlvbiBEZXZXZWJBcHAocHJvcHM6IFRlc3RTY2VuYXJpb0VkaXRvclByb3BzKSB7XG4gIGNvbnN0IFtmaWxlTmFtZSwgc2V0RmlsZU5hbWVdID0gdXNlU3RhdGU8c3RyaW5nIHwgdW5kZWZpbmVkPihcIlVudGl0bGVkLnNjZXNpbVwiKTtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZTx7XG4gICAgbWFyc2hhbGxlcjogU2NlU2ltTWFyc2hhbGxlcjtcbiAgICBwb2ludGVyOiBudW1iZXI7XG4gICAgc3RhY2s6IFNjZVNpbU1vZGVsW107XG4gIH0+KCgpID0+IHtcbiAgICBjb25zdCBlbXB0eVNjZVNpbU1hcnNoYWxsZXIgPSBnZXRNYXJzaGFsbGVyKEVNUFRZX09ORV9FSUdIVCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1hcnNoYWxsZXI6IGVtcHR5U2NlU2ltTWFyc2hhbGxlcixcbiAgICAgIHBvaW50ZXI6IDAsXG4gICAgICBzdGFjazogW2VtcHR5U2NlU2ltTWFyc2hhbGxlci5wYXJzZXIucGFyc2UoKV1cbiAgICB9O1xuICB9KTtcbiAgY29uc3QgY3VycmVudE1vZGVsID0gc3RhdGUuc3RhY2tbc3RhdGUucG9pbnRlcl07XG4gIGNvbnN0IGRvd25sb2FkUmVmID0gdXNlUmVmPEhUTUxBbmNob3JFbGVtZW50PihudWxsKTtcbiAgY29uc3QgaXNVbmRvRW5hYmxlZCA9IHN0YXRlLnBvaW50ZXIgPiAwO1xuICBjb25zdCBpc1JlZG9FbmFibGVkID0gc3RhdGUucG9pbnRlciAhPT0gc3RhdGUuc3RhY2subGVuZ3RoIC0gMTtcbiAgY29uc3QgY29weUFzWG1sID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KHN0YXRlLm1hcnNoYWxsZXIuYnVpbGRlci5idWlsZChjdXJyZW50TW9kZWwpKTtcbiAgfSwgW2N1cnJlbnRNb2RlbCwgc3RhdGUubWFyc2hhbGxlci5idWlsZGVyXSk7XG4gIGNvbnN0IGRvd25sb2FkQXNYbWwgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaWYgKGRvd25sb2FkUmVmLmN1cnJlbnQpIHtcbiAgICAgIGNvbnN0IGZpbGVCbG9iID0gbmV3IEJsb2IoW3N0YXRlLm1hcnNoYWxsZXIuYnVpbGRlci5idWlsZChjdXJyZW50TW9kZWwpXSwge1xuICAgICAgICB0eXBlOiBcInRleHQveG1sXCJcbiAgICAgIH0pO1xuICAgICAgZG93bmxvYWRSZWYuY3VycmVudC5kb3dubG9hZCA9IGZpbGVOYW1lID8/IGBzY2VzaW0tdGVzdC0ke21ha2VpZCgxMCl9LnNjZXNpbWA7XG4gICAgICBkb3dubG9hZFJlZi5jdXJyZW50LmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGVCbG9iKTtcbiAgICAgIGRvd25sb2FkUmVmLmN1cnJlbnQuY2xpY2soKTtcbiAgICB9XG4gIH0sIFtjdXJyZW50TW9kZWwsIGZpbGVOYW1lLCBzdGF0ZS5tYXJzaGFsbGVyLmJ1aWxkZXJdKTtcbiAgY29uc3QgZXh0ZXJuYWxNb2RlbHNCeU5hbWVzcGFjZSA9IHVzZU1lbW88RXh0ZXJuYWxEbW5zSW5kZXggfCB1bmRlZmluZWQ+KCgpID0+IHtcbiAgICBpZiAoY3VycmVudE1vZGVsLlNjZW5hcmlvU2ltdWxhdGlvbk1vZGVsLnNldHRpbmdzLmRtbk5hbWVzcGFjZSkge1xuICAgICAgY29uc3QgZG1uTW9kZWwgPSBhdmFpbGFibGVNb2RlbHMuZmluZChtb2RlbCA9PiBtb2RlbC5tb2RlbC5kZWZpbml0aW9uc1tcIkBfbmFtZXNwYWNlXCJdID09PSBjdXJyZW50TW9kZWwuU2NlbmFyaW9TaW11bGF0aW9uTW9kZWwuc2V0dGluZ3MuZG1uTmFtZXNwYWNlPy5fXyQkdGV4dCk7XG4gICAgICByZXR1cm4gbmV3IE1hcChbW2N1cnJlbnRNb2RlbC5TY2VuYXJpb1NpbXVsYXRpb25Nb2RlbC5zZXR0aW5ncy5kbW5OYW1lc3BhY2U/Ll9fJCR0ZXh0LCBkbW5Nb2RlbF1dKTtcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfSwgW2N1cnJlbnRNb2RlbC5TY2VuYXJpb1NpbXVsYXRpb25Nb2RlbC5zZXR0aW5ncy5kbW5OYW1lc3BhY2VdKTtcbiAgY29uc3Qgb25EcmFnT3ZlciA9IHVzZUNhbGxiYWNrKChlOiBSZWFjdC5EcmFnRXZlbnQpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7IC8vIE5lY2Vzc2FyeSB0byBkaXNhYmxlIHRoZSBicm93c2VyJ3MgZGVmYXVsdCAnb25Ecm9wJyBoYW5kbGluZy5cbiAgfSwgW10pO1xuICBjb25zdCBvbkRyb3AgPSB1c2VDYWxsYmFjaygoZTogUmVhY3QuRHJhZ0V2ZW50KSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJUZXN0IFNjZW5hcmlvIEVkaXRvciA6OiBEZXYgd2ViYXBwIDo6IEZpbGUocykgZHJvcHBlZCEgT3BlbmluZyBpdC5cIik7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAvLyBOZWNlc3NhcnkgdG8gZGlzYWJsZSB0aGUgYnJvd3NlcidzIGRlZmF1bHQgJ29uRHJvcCcgaGFuZGxpbmcuXG5cbiAgICBpZiAoZS5kYXRhVHJhbnNmZXIuaXRlbXMpIHtcbiAgICAgIC8vIFVzZSBEYXRhVHJhbnNmZXJJdGVtTGlzdCBpbnRlcmZhY2UgdG8gYWNjZXNzIHRoZSBmaWxlKHMpXG4gICAgICBbLi4uZS5kYXRhVHJhbnNmZXIuaXRlbXNdLmZvckVhY2goKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgaWYgKGl0ZW0ua2luZCA9PT0gXCJmaWxlXCIpIHtcbiAgICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICAgIHNldEZpbGVOYW1lKGl0ZW0uZ2V0QXNGaWxlKCk/Lm5hbWUpO1xuICAgICAgICAgIHJlYWRlci5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoe1xuICAgICAgICAgICAgdGFyZ2V0XG4gICAgICAgICAgfSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWFyc2hhbGxlciA9IGdldE1hcnNoYWxsZXIodGFyZ2V0Py5yZXN1bHQgYXMgc3RyaW5nKTtcbiAgICAgICAgICAgIHNldFN0YXRlKHtcbiAgICAgICAgICAgICAgbWFyc2hhbGxlcixcbiAgICAgICAgICAgICAgcG9pbnRlcjogMCxcbiAgICAgICAgICAgICAgc3RhY2s6IFttYXJzaGFsbGVyLnBhcnNlci5wYXJzZSgpXVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmVhZGVyLnJlYWRBc1RleHQoaXRlbS5nZXRBc0ZpbGUoKSBhcyBhbnkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIFtdKTtcbiAgY29uc3Qgb25Nb2RlbENoYW5nZSA9IHVzZUNhbGxiYWNrPE9uU2NlU2ltTW9kZWxDaGFuZ2U+KG1vZGVsID0+IHtcbiAgICBzZXRTdGF0ZShwcmV2ID0+IHtcbiAgICAgIGNvbnN0IG5ld1N0YWNrID0gcHJldi5zdGFjay5zbGljZSgwLCBwcmV2LnBvaW50ZXIgKyAxKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnByZXYsXG4gICAgICAgIHN0YWNrOiBbLi4ubmV3U3RhY2ssIG1vZGVsXSxcbiAgICAgICAgcG9pbnRlcjogbmV3U3RhY2subGVuZ3RoXG4gICAgICB9O1xuICAgIH0pO1xuICB9LCBbXSk7XG4gIGNvbnN0IG9uUmVxdWVzdFRvSnVtcFRvUGF0aCA9IHVzZUNhbGxiYWNrPE9uUmVxdWVzdFRvSnVtcFRvUGF0aD4ocGF0aCA9PiB7XG4gICAgYWxlcnQoXCJBIHJlcXVlc3QgdG8gb3BlbiB0aGlzIGZpbGU6IFwiICsgcGF0aCk7XG4gIH0sIFtdKTtcbiAgY29uc3Qgb25TZWxlY3RNb2RlbCA9IHVzZUNhbGxiYWNrKChuZXdNb2RlbCwgZmlsZU5hbWUpID0+IHtcbiAgICBvbk1vZGVsQ2hhbmdlKGdldE1hcnNoYWxsZXIobmV3TW9kZWwpLnBhcnNlci5wYXJzZSgpKTtcbiAgICBzZXRGaWxlTmFtZShmaWxlTmFtZSk7XG4gIH0sIFtvbk1vZGVsQ2hhbmdlXSk7XG4gIGNvbnN0IHJlZG8gPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0U3RhdGUocHJldiA9PiAoe1xuICAgICAgLi4ucHJldixcbiAgICAgIHBvaW50ZXI6IE1hdGgubWluKHByZXYuc3RhY2subGVuZ3RoIC0gMSwgcHJldi5wb2ludGVyICsgMSlcbiAgICB9KSk7XG4gIH0sIFtdKTtcbiAgY29uc3QgcmVzZXQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgY29uc3QgbWFyc2hhbGxlciA9IGdldE1hcnNoYWxsZXIoRU1QVFlfT05FX0VJR0hUKTtcbiAgICBzZXRTdGF0ZSh7XG4gICAgICBtYXJzaGFsbGVyLFxuICAgICAgcG9pbnRlcjogMCxcbiAgICAgIHN0YWNrOiBbbWFyc2hhbGxlci5wYXJzZXIucGFyc2UoKV1cbiAgICB9KTtcbiAgfSwgW10pO1xuICBjb25zdCB1bmRvID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldFN0YXRlKHByZXYgPT4gKHtcbiAgICAgIC4uLnByZXYsXG4gICAgICBwb2ludGVyOiBNYXRoLm1heCgwLCBwcmV2LnBvaW50ZXIgLSAxKVxuICAgIH0pKTtcbiAgfSwgW10pO1xuICBjb25zdCBvblJlcXVlc3RFeHRlcm5hbE1vZGVsQnlQYXRoID0gdXNlQ2FsbGJhY2s8T25SZXF1ZXN0RXh0ZXJuYWxNb2RlbEJ5UGF0aD4oYXN5bmMgcGF0aCA9PiB7XG4gICAgcmV0dXJuIGF2YWlsYWJsZU1vZGVsc0J5UGF0aFtwYXRoXSA/PyBudWxsO1xuICB9LCBbXSk7XG4gIGNvbnN0IG9uUmVxdWVzdEV4dGVybmFsTW9kZWxzQXZhaWxhYmxlVG9JbmNsdWRlID0gdXNlQ2FsbGJhY2s8T25SZXF1ZXN0RXh0ZXJuYWxNb2RlbHNBdmFpbGFibGVUb0luY2x1ZGU+KGFzeW5jICgpID0+IHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoYXZhaWxhYmxlTW9kZWxzQnlQYXRoKTtcbiAgfSwgW10pO1xuICByZXR1cm4gPGRpdiBzdHlsZT17e1xuICAgIHdpZHRoOiBcIjEwMHZ3XCIsXG4gICAgaGVpZ2h0OiBcIjEwMHZoXCJcbiAgfX0+XG4gICAgICA8UGFnZSBvbkRyYWdPdmVyPXtvbkRyYWdPdmVyfSBvbkRyb3A9e29uRHJvcH0+XG4gICAgICAgIDxQYWdlU2VjdGlvbiBhcmlhLWxhYmVsPXtcImRldi1hcHAtaGVhZGVyXCJ9IHZhcmlhbnQ9e1wibGlnaHRcIn0gaXNGaWxsZWQ9e2ZhbHNlfT5cbiAgICAgICAgICA8U3RhY2sgaGFzR3V0dGVyPlxuICAgICAgICAgICAgPFN0YWNrSXRlbT5cbiAgICAgICAgICAgICAgPEZsZXgganVzdGlmeUNvbnRlbnQ9e3tcbiAgICAgICAgICAgICAgZGVmYXVsdDogXCJqdXN0aWZ5Q29udGVudFNwYWNlQmV0d2VlblwiXG4gICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICA8RmxleEl0ZW0gc2hyaW5rPXt7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDogXCJzaHJpbmtcIlxuICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgIDxoMz5UZXN0IFNjZW5hcmlvIEVkaXRvciA6OiBEZXYgV2ViQXBwPC9oMz5cbiAgICAgICAgICAgICAgICA8L0ZsZXhJdGVtPlxuICAgICAgICAgICAgICAgIDxGbGV4SXRlbT5cbiAgICAgICAgICAgICAgICAgIDxoNT4oRHJhZyAmIGRyb3AgYSBmaWxlIGFueXdoZXJlIHRvIG9wZW4gaXQpPC9oNT5cbiAgICAgICAgICAgICAgICA8L0ZsZXhJdGVtPlxuICAgICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICA8L1N0YWNrSXRlbT5cbiAgICAgICAgICAgIDxTdGFja0l0ZW0+XG4gICAgICAgICAgICAgIDxGbGV4IGp1c3RpZnlDb250ZW50PXt7XG4gICAgICAgICAgICAgIGRlZmF1bHQ6IFwianVzdGlmeUNvbnRlbnRTcGFjZUJldHdlZW5cIlxuICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgPEZsZXhJdGVtIHNocmluaz17e1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IFwic2hyaW5rXCJcbiAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IG9uU2VsZWN0TW9kZWwoRU1QVFlfT05FX0VJR0hULCBlbXB0eUZpbGVOYW1lKX0+RW1wdHk8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICZuYnNwOyAmbmJzcDtcbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gb25TZWxlY3RNb2RlbChpc09sZEVub3VnaERybCwgaXNPbGRFbm91Z2hEcmxGaWxlTmFtZSl9PlxuICAgICAgICAgICAgICAgICAgICBBcmUgVGhleSBPbGQgRW5vdWdoP1xuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAmbmJzcDsgJm5ic3A7XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IG9uU2VsZWN0TW9kZWwodHJhZmZpY1Zpb2xhdGlvbkRtbiwgdHJhZmZpY1Zpb2xhdGlvbkRtbkZpbGVOYW1lKX0+XG4gICAgICAgICAgICAgICAgICAgIFRyYWZmaWMgVmlvbGF0aW9uXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICZuYnNwOyAmbmJzcDsgfCAmbmJzcDsgJm5ic3A7XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3VuZG99IGRpc2FibGVkPXshaXNVbmRvRW5hYmxlZH0gc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IGlzVW5kb0VuYWJsZWQgPyAxIDogMC41XG4gICAgICAgICAgICAgICAgfX0gdmFyaWFudD1cInNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAgICB7YFVuZG8gKCR7c3RhdGUucG9pbnRlcn0pYH1cbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgJm5ic3A7ICZuYnNwO1xuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtyZWRvfSBkaXNhYmxlZD17IWlzUmVkb0VuYWJsZWR9IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiBpc1JlZG9FbmFibGVkID8gMSA6IDAuNVxuICAgICAgICAgICAgICAgIH19IHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgICAge2BSZWRvICgke3N0YXRlLnN0YWNrLmxlbmd0aCAtIDEgLSBzdGF0ZS5wb2ludGVyfSlgfVxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAmbmJzcDsgJm5ic3A7IHwgJm5ic3A7ICZuYnNwO1xuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtyZXNldH0gdmFyaWFudD1cInRlcnRpYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgIFJlc2V0XG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICZuYnNwOyAmbmJzcDtcbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17Y29weUFzWG1sfSB2YXJpYW50PVwidGVydGlhcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgQ29weSBhcyBYTUxcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgJm5ic3A7ICZuYnNwO1xuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtkb3dubG9hZEFzWG1sfSB2YXJpYW50PVwidGVydGlhcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgRG93bmxvYWRcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvRmxleEl0ZW0+XG4gICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgIDwvU3RhY2tJdGVtPlxuICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgPGEgcmVmPXtkb3dubG9hZFJlZn0gLz5cbiAgICAgICAgPC9QYWdlU2VjdGlvbj5cbiAgICAgICAgPGhyIC8+XG4gICAgICAgIDxQYWdlU2VjdGlvbiBhcmlhLWxhYmVsPXtcImVkaXRvclwifSBpc0ZpbGxlZD17dHJ1ZX0gaGFzT3ZlcmZsb3dTY3JvbGw9e3RydWV9IHBhZGRpbmc9e3tcbiAgICAgICAgZGVmYXVsdDogXCJub1BhZGRpbmdcIlxuICAgICAgfX0gdmFyaWFudD17XCJsaWdodFwifT5cbiAgICAgICAgICB7U2NlU2ltRWRpdG9yV3JhcHBlcih7XG4gICAgICAgICAgaXNzdWVUcmFja2VySHJlZjogcHJvcHMuaXNzdWVUcmFja2VySHJlZixcbiAgICAgICAgICBleHRlcm5hbE1vZGVsc0J5TmFtZXNwYWNlOiBleHRlcm5hbE1vZGVsc0J5TmFtZXNwYWNlLFxuICAgICAgICAgIG1vZGVsOiBjdXJyZW50TW9kZWwsXG4gICAgICAgICAgb25Nb2RlbENoYW5nZTogb25Nb2RlbENoYW5nZSxcbiAgICAgICAgICBvblJlcXVlc3RFeHRlcm5hbE1vZGVsc0F2YWlsYWJsZVRvSW5jbHVkZTogb25SZXF1ZXN0RXh0ZXJuYWxNb2RlbHNBdmFpbGFibGVUb0luY2x1ZGUsXG4gICAgICAgICAgb25SZXF1ZXN0RXh0ZXJuYWxNb2RlbEJ5UGF0aDogb25SZXF1ZXN0RXh0ZXJuYWxNb2RlbEJ5UGF0aCxcbiAgICAgICAgICBvblJlcXVlc3RUb0p1bXBUb1BhdGg6IG9uUmVxdWVzdFRvSnVtcFRvUGF0aCxcbiAgICAgICAgICBvcGVuRmlsZU5vcm1hbGl6ZWRQb3NpeFBhdGhSZWxhdGl2ZVRvVGhlV29ya3NwYWNlUm9vdDogZmlsZU5hbWVcbiAgICAgICAgfSl9XG4gICAgICAgIDwvUGFnZVNlY3Rpb24+XG4gICAgICA8L1BhZ2U+XG4gICAgPC9kaXY+O1xufVxuZnVuY3Rpb24gbWFrZWlkKGxlbmd0aDogbnVtYmVyKSB7XG4gIGxldCByZXN1bHQgPSBcIlwiO1xuICBjb25zdCBjaGFyYWN0ZXJzID0gXCJhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODlcIjtcbiAgY29uc3QgY2hhcmFjdGVyc0xlbmd0aCA9IGNoYXJhY3RlcnMubGVuZ3RoO1xuICBsZXQgY291bnRlciA9IDA7XG4gIHdoaWxlIChjb3VudGVyIDwgbGVuZ3RoKSB7XG4gICAgcmVzdWx0ICs9IGNoYXJhY3RlcnMuY2hhckF0KE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNoYXJhY3RlcnNMZW5ndGgpKTtcbiAgICBjb3VudGVyICs9IDE7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmNvbnN0IG1ldGE6IE1ldGE8dHlwZW9mIERldldlYkFwcD4gPSB7XG4gIHRpdGxlOiBcIkRldi9XZWIgQXBwXCIsXG4gIGNvbXBvbmVudDogRGV2V2ViQXBwXG59O1xuZXhwb3J0IGRlZmF1bHQgbWV0YTtcbnR5cGUgU3RvcnkgPSBTdG9yeU9iajx0eXBlb2YgRGV2V2ViQXBwPjtcbmV4cG9ydCBjb25zdCBXZWJBcHA6IFN0b3J5ID0ge1xuICByZW5kZXI6IGFyZ3MgPT4gRGV2V2ViQXBwKGFyZ3MpLFxuICBhcmdzOiB7XG4gICAgaXNzdWVUcmFja2VySHJlZjogXCJodHRwczovL2dpdGh1Yi5jb20vYXBhY2hlL2luY3ViYXRvci1raWUtaXNzdWVzL2lzc3Vlcy9uZXdcIixcbiAgICBtb2RlbDogZ2V0TWFyc2hhbGxlcihlbXB0eUZpbGVOYW1lKS5wYXJzZXIucGFyc2UoKSxcbiAgICBvcGVuRmlsZU5vcm1hbGl6ZWRQb3NpeFBhdGhSZWxhdGl2ZVRvVGhlV29ya3NwYWNlUm9vdDogXCJVbnRpdGxlZC5zY2VzaW1cIlxuICB9XG59O1xuV2ViQXBwLnBhcmFtZXRlcnMgPSB7XG4gIC4uLldlYkFwcC5wYXJhbWV0ZXJzLFxuICBkb2NzOiB7XG4gICAgLi4uV2ViQXBwLnBhcmFtZXRlcnM/LmRvY3MsXG4gICAgc291cmNlOiB7XG4gICAgICBvcmlnaW5hbFNvdXJjZTogXCJ7XFxuICByZW5kZXI6IGFyZ3MgPT4gRGV2V2ViQXBwKGFyZ3MpLFxcbiAgYXJnczoge1xcbiAgICBpc3N1ZVRyYWNrZXJIcmVmOiBcXFwiaHR0cHM6Ly9naXRodWIuY29tL2FwYWNoZS9pbmN1YmF0b3Ita2llLWlzc3Vlcy9pc3N1ZXMvbmV3XFxcIixcXG4gICAgbW9kZWw6IGdldE1hcnNoYWxsZXIoZW1wdHlGaWxlTmFtZSkucGFyc2VyLnBhcnNlKCksXFxuICAgIG9wZW5GaWxlTm9ybWFsaXplZFBvc2l4UGF0aFJlbGF0aXZlVG9UaGVXb3Jrc3BhY2VSb290OiBcXFwiVW50aXRsZWQuc2Nlc2ltXFxcIlxcbiAgfVxcbn1cIixcbiAgICAgIC4uLldlYkFwcC5wYXJhbWV0ZXJzPy5kb2NzPy5zb3VyY2VcbiAgICB9XG4gIH1cbn07IiwiLypcbiAqIExpY2Vuc2VkIHRvIHRoZSBBcGFjaGUgU29mdHdhcmUgRm91bmRhdGlvbiAoQVNGKSB1bmRlciBvbmVcbiAqIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiAgU2VlIHRoZSBOT1RJQ0UgZmlsZVxuICogZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb25cbiAqIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLiAgVGhlIEFTRiBsaWNlbnNlcyB0aGlzIGZpbGVcbiAqIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGVcbiAqIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuICogd2l0aCB0aGUgTGljZW5zZS4gIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsXG4gKiBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxuICogXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcbiAqIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZVxuICogc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9uc1xuICogdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHR5cGUgeyBNZXRhLCBTdG9yeU9iaiB9IGZyb20gXCJAc3Rvcnlib29rL3JlYWN0XCI7XG5pbXBvcnQgeyBnZXRNYXJzaGFsbGVyIH0gZnJvbSBcIkBraWUtdG9vbHMvc2Nlc2ltLW1hcnNoYWxsZXJcIjtcbmltcG9ydCB7IFRlc3RTY2VuYXJpb0VkaXRvciB9IGZyb20gXCIuLi8uLi8uLi9zcmMvVGVzdFNjZW5hcmlvRWRpdG9yXCI7XG5pbXBvcnQgeyBFTVBUWV9PTkVfRUlHSFQgfSBmcm9tIFwiLi4vLi4vLi4vc3JjL3Jlc291cmNlcy9FbXB0eVNjZXNpbUZpbGVcIjtcbmltcG9ydCB7IFNjZVNpbUVkaXRvcldyYXBwZXIsIFN0b3J5Ym9va1Rlc3RTY2VuYXJpb0VkaXRvclByb3BzIH0gZnJvbSBcIi4uLy4uL3NjZXNpbUVkaXRvclN0b3JpZXNXcmFwcGVyXCI7XG5pbXBvcnQgeyBFTVBUWSB9IGZyb20gXCIuLi8uLi9leGFtcGxlcy9FeHRlcm5hbERtbk1vZGVsc1wiO1xuaW1wb3J0IHsgbm9ybWFsaXplIH0gZnJvbSBcIkBraWUtdG9vbHMvZG1uLW1hcnNoYWxsZXIvZGlzdC9ub3JtYWxpemF0aW9uL25vcm1hbGl6ZVwiO1xuaW1wb3J0IHsgZ2V0TWFyc2hhbGxlciBhcyBnZXREbW5NYXJzaGFsbGVyIH0gZnJvbSBcIkBraWUtdG9vbHMvZG1uLW1hcnNoYWxsZXJcIjtcbmV4cG9ydCBjb25zdCBlbXB0eUZpbGVOYW1lID0gXCJVbnRpdGxlZC5zY2VzaW1cIjtcbmNvbnN0IG1ldGE6IE1ldGE8e30+ID0ge1xuICB0aXRsZTogXCJNaXNjL0VtcHR5XCIsXG4gIGNvbXBvbmVudDogVGVzdFNjZW5hcmlvRWRpdG9yLFxuICBpbmNsdWRlU3RvcmllczogL15bQS1aXS9cbn07XG5leHBvcnQgZGVmYXVsdCBtZXRhO1xudHlwZSBTdG9yeSA9IFN0b3J5T2JqPFN0b3J5Ym9va1Rlc3RTY2VuYXJpb0VkaXRvclByb3BzPjtcbmNvbnN0IG1hcnNoYWxsZXIgPSBnZXRNYXJzaGFsbGVyKEVNUFRZX09ORV9FSUdIVCk7XG5jb25zdCBjdXJyZW50TW9kZWwgPSBtYXJzaGFsbGVyLnBhcnNlci5wYXJzZSgpO1xuY29uc3QgZG1uTW9kZWwgPSB7XG4gIG5vcm1hbGl6ZWRQb3NpeFBhdGhSZWxhdGl2ZVRvVGhlT3BlbkZpbGU6IFwiZW1wdHkuZG1uXCIsXG4gIHR5cGU6IFwiZG1uXCIsXG4gIG1vZGVsOiBub3JtYWxpemUoZ2V0RG1uTWFyc2hhbGxlcihFTVBUWSA/PyBcIlwiLCB7XG4gICAgdXBncmFkZVRvOiBcImxhdGVzdFwiXG4gIH0pLnBhcnNlci5wYXJzZSgpKSxcbiAgc3ZnOiBcIlwiXG59O1xuZXhwb3J0IGNvbnN0IEVtcHR5OiBTdG9yeSA9IHtcbiAgcmVuZGVyOiBhcmdzID0+IFNjZVNpbUVkaXRvcldyYXBwZXIoYXJncyksXG4gIGFyZ3M6IHtcbiAgICBtb2RlbDogbWFyc2hhbGxlci5wYXJzZXIucGFyc2UoKSxcbiAgICBvcGVuRmlsZU5vcm1hbGl6ZWRQb3NpeFBhdGhSZWxhdGl2ZVRvVGhlV29ya3NwYWNlUm9vdDogZW1wdHlGaWxlTmFtZSxcbiAgICBleHRlcm5hbE1vZGVsc0J5TmFtZXNwYWNlOiBuZXcgTWFwKFtbXCJodHRwczovL2tpZS5vcmcvZG1uL18xNDQ4N0NFRS0xQjMwLTQ1M0UtOTc2RC1DMTFFRDkxMTU0OEZcIiwgZG1uTW9kZWxdXSksXG4gICAgeG1sOiBtYXJzaGFsbGVyLmJ1aWxkZXIuYnVpbGQoY3VycmVudE1vZGVsKSxcbiAgICBvblJlcXVlc3RFeHRlcm5hbE1vZGVsc0F2YWlsYWJsZVRvSW5jbHVkZTogKCkgPT4gUHJvbWlzZS5yZXNvbHZlKFtcImVtcHR5LmRtblwiXSksXG4gICAgb25SZXF1ZXN0RXh0ZXJuYWxNb2RlbEJ5UGF0aDogKCkgPT4gUHJvbWlzZS5yZXNvbHZlKGRtbk1vZGVsKVxuICB9XG59O1xuRW1wdHkucGFyYW1ldGVycyA9IHtcbiAgLi4uRW1wdHkucGFyYW1ldGVycyxcbiAgZG9jczoge1xuICAgIC4uLkVtcHR5LnBhcmFtZXRlcnM/LmRvY3MsXG4gICAgc291cmNlOiB7XG4gICAgICBvcmlnaW5hbFNvdXJjZTogXCJ7XFxuICByZW5kZXI6IGFyZ3MgPT4gU2NlU2ltRWRpdG9yV3JhcHBlcihhcmdzKSxcXG4gIGFyZ3M6IHtcXG4gICAgbW9kZWw6IG1hcnNoYWxsZXIucGFyc2VyLnBhcnNlKCksXFxuICAgIG9wZW5GaWxlTm9ybWFsaXplZFBvc2l4UGF0aFJlbGF0aXZlVG9UaGVXb3Jrc3BhY2VSb290OiBlbXB0eUZpbGVOYW1lLFxcbiAgICBleHRlcm5hbE1vZGVsc0J5TmFtZXNwYWNlOiBuZXcgTWFwKFtbXFxcImh0dHBzOi8va2llLm9yZy9kbW4vXzE0NDg3Q0VFLTFCMzAtNDUzRS05NzZELUMxMUVEOTExNTQ4RlxcXCIsIGRtbk1vZGVsXV0pLFxcbiAgICB4bWw6IG1hcnNoYWxsZXIuYnVpbGRlci5idWlsZChjdXJyZW50TW9kZWwpLFxcbiAgICBvblJlcXVlc3RFeHRlcm5hbE1vZGVsc0F2YWlsYWJsZVRvSW5jbHVkZTogKCkgPT4gUHJvbWlzZS5yZXNvbHZlKFtcXFwiZW1wdHkuZG1uXFxcIl0pLFxcbiAgICBvblJlcXVlc3RFeHRlcm5hbE1vZGVsQnlQYXRoOiAoKSA9PiBQcm9taXNlLnJlc29sdmUoZG1uTW9kZWwpXFxuICB9XFxufVwiLFxuICAgICAgLi4uRW1wdHkucGFyYW1ldGVycz8uZG9jcz8uc291cmNlXG4gICAgfVxuICB9XG59OyIsIi8qXG4gKiBMaWNlbnNlZCB0byB0aGUgQXBhY2hlIFNvZnR3YXJlIEZvdW5kYXRpb24gKEFTRikgdW5kZXIgb25lXG4gKiBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gIFNlZSB0aGUgTk9USUNFIGZpbGVcbiAqIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uXG4gKiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC4gIFRoZSBBU0YgbGljZW5zZXMgdGhpcyBmaWxlXG4gKiB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlXG4gKiBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2VcbiAqIHdpdGggdGhlIExpY2Vuc2UuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLFxuICogc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cbiAqIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXG4gKiBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGVcbiAqIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnNcbiAqIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCAqIGFzIFRlc3RTY2VuYXJpb0VkaXRvciBmcm9tIFwiLi4vLi4vc3JjL1Rlc3RTY2VuYXJpb0VkaXRvclwiO1xuaW1wb3J0IHsgZ2V0TWFyc2hhbGxlciB9IGZyb20gXCJAa2llLXRvb2xzL2Rtbi1tYXJzaGFsbGVyXCI7XG5pbXBvcnQgeyBub3JtYWxpemUgfSBmcm9tIFwiQGtpZS10b29scy9kbW4tbWFyc2hhbGxlci9kaXN0L25vcm1hbGl6YXRpb24vbm9ybWFsaXplXCI7XG5pbXBvcnQge1xuICBDT0xMRUNUSU9OLFxuICBDT01QTEVYX0NPTExFQ1RJT04sXG4gIEVNUFRZLFxuICBMT0FOX1BSRV9RVUFMSUZJQ0FUSU9OLFxuICBNSVhFRCxcbiAgU0lNUExFLFxuICBUUkFGRklDX1ZJT0xBVElPTixcbn0gZnJvbSBcIi4vRXh0ZXJuYWxEbW5Nb2RlbHNcIjtcblxuZXhwb3J0IGNvbnN0IGF2YWlsYWJsZU1vZGVsczogVGVzdFNjZW5hcmlvRWRpdG9yLkV4dGVybmFsRG1uW10gPSBbXG4gIHtcbiAgICBtb2RlbDogbm9ybWFsaXplKGdldE1hcnNoYWxsZXIoQ09MTEVDVElPTiwgeyB1cGdyYWRlVG86IFwibGF0ZXN0XCIgfSkucGFyc2VyLnBhcnNlKCkpLFxuICAgIHN2ZzogXCJcIixcbiAgICBub3JtYWxpemVkUG9zaXhQYXRoUmVsYXRpdmVUb1RoZU9wZW5GaWxlOiBcImRldi13ZWJhcHAvYXZhaWxhYmxlLWRtbi1tb2RlbHMvY29sbGVjdGlvbi5kbW5cIixcbiAgfSxcbiAge1xuICAgIG1vZGVsOiBub3JtYWxpemUoZ2V0TWFyc2hhbGxlcihDT01QTEVYX0NPTExFQ1RJT04sIHsgdXBncmFkZVRvOiBcImxhdGVzdFwiIH0pLnBhcnNlci5wYXJzZSgpKSxcbiAgICBzdmc6IFwiXCIsXG4gICAgbm9ybWFsaXplZFBvc2l4UGF0aFJlbGF0aXZlVG9UaGVPcGVuRmlsZTogXCJkZXYtd2ViYXBwL2F2YWlsYWJsZS1kbW4tbW9kZWxzL2NvbXBsZXhfY29sbGVjdGlvbi5kbW5cIixcbiAgfSxcbiAge1xuICAgIG1vZGVsOiBub3JtYWxpemUoZ2V0TWFyc2hhbGxlcihFTVBUWSwgeyB1cGdyYWRlVG86IFwibGF0ZXN0XCIgfSkucGFyc2VyLnBhcnNlKCkpLFxuICAgIHN2ZzogXCJcIixcbiAgICBub3JtYWxpemVkUG9zaXhQYXRoUmVsYXRpdmVUb1RoZU9wZW5GaWxlOiBcImRldi13ZWJhcHAvYXZhaWxhYmxlLWRtbi1tb2RlbHMvZW1wdHkuZG1uXCIsXG4gIH0sXG4gIHtcbiAgICBtb2RlbDogbm9ybWFsaXplKGdldE1hcnNoYWxsZXIoTE9BTl9QUkVfUVVBTElGSUNBVElPTiwgeyB1cGdyYWRlVG86IFwibGF0ZXN0XCIgfSkucGFyc2VyLnBhcnNlKCkpLFxuICAgIHN2ZzogXCJcIixcbiAgICBub3JtYWxpemVkUG9zaXhQYXRoUmVsYXRpdmVUb1RoZU9wZW5GaWxlOiBcImRldi13ZWJhcHAvYXZhaWxhYmxlLWRtbi1tb2RlbHMvbG9hbi1wcmUtcXVhbGlmaWNhdGlvbi5kbW5cIixcbiAgfSxcbiAge1xuICAgIG1vZGVsOiBub3JtYWxpemUoZ2V0TWFyc2hhbGxlcihNSVhFRCwgeyB1cGdyYWRlVG86IFwibGF0ZXN0XCIgfSkucGFyc2VyLnBhcnNlKCkpLFxuICAgIHN2ZzogXCJcIixcbiAgICBub3JtYWxpemVkUG9zaXhQYXRoUmVsYXRpdmVUb1RoZU9wZW5GaWxlOiBcImRldi13ZWJhcHAvYXZhaWxhYmxlLWRtbi1tb2RlbHMvbWl4ZWQuZG1uXCIsXG4gIH0sXG4gIHtcbiAgICBtb2RlbDogbm9ybWFsaXplKGdldE1hcnNoYWxsZXIoU0lNUExFLCB7IHVwZ3JhZGVUbzogXCJsYXRlc3RcIiB9KS5wYXJzZXIucGFyc2UoKSksXG4gICAgc3ZnOiBcIlwiLFxuICAgIG5vcm1hbGl6ZWRQb3NpeFBhdGhSZWxhdGl2ZVRvVGhlT3BlbkZpbGU6IFwiZGV2LXdlYmFwcC9hdmFpbGFibGUtZG1uLW1vZGVscy9zaW1wbGUuZG1uXCIsXG4gIH0sXG4gIHtcbiAgICBtb2RlbDogbm9ybWFsaXplKGdldE1hcnNoYWxsZXIoVFJBRkZJQ19WSU9MQVRJT04sIHsgdXBncmFkZVRvOiBcImxhdGVzdFwiIH0pLnBhcnNlci5wYXJzZSgpKSxcbiAgICBzdmc6IFwiXCIsXG4gICAgbm9ybWFsaXplZFBvc2l4UGF0aFJlbGF0aXZlVG9UaGVPcGVuRmlsZTogXCJkZXYtd2ViYXBwL2F2YWlsYWJsZS1kbW4tbW9kZWxzL3RyYWZmaWMtdmlvbGF0aW9uLmRtblwiLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IGF2YWlsYWJsZU1vZGVsc0J5UGF0aDogUmVjb3JkPHN0cmluZywgVGVzdFNjZW5hcmlvRWRpdG9yLkV4dGVybmFsRG1uPiA9IE9iamVjdC52YWx1ZXMoXG4gIGF2YWlsYWJsZU1vZGVsc1xuKS5yZWR1Y2UoXG4gIChhY2MsIHYpID0+IHtcbiAgICBhY2Nbdi5ub3JtYWxpemVkUG9zaXhQYXRoUmVsYXRpdmVUb1RoZU9wZW5GaWxlXSA9IHY7XG4gICAgcmV0dXJuIGFjYztcbiAgfSxcbiAge30gYXMgUmVjb3JkPHN0cmluZywgVGVzdFNjZW5hcmlvRWRpdG9yLkV4dGVybmFsRG1uPlxuKTtcbiJdLCJuYW1lcyI6WyJ1c2VDYWxsYmFjayIsInVzZU1lbW8iLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIkJ1dHRvbiIsIkZsZXgiLCJGbGV4SXRlbSIsIlBhZ2UiLCJQYWdlU2VjdGlvbiIsIlN0YWNrIiwiU3RhY2tJdGVtIiwiZ2V0TWFyc2hhbGxlciIsIkVNUFRZX09ORV9FSUdIVCIsIlNjZVNpbUVkaXRvcldyYXBwZXIiLCJlbXB0eUZpbGVOYW1lIiwiaXNPbGRFbm91Z2hEcmwiLCJpc09sZEVub3VnaERybEZpbGVOYW1lIiwidHJhZmZpY1Zpb2xhdGlvbkRtbiIsInRyYWZmaWNWaW9sYXRpb25EbW5GaWxlTmFtZSIsImF2YWlsYWJsZU1vZGVscyIsImF2YWlsYWJsZU1vZGVsc0J5UGF0aCIsIkRldldlYkFwcCIsInByb3BzIiwiZmlsZU5hbWUiLCJzZXRGaWxlTmFtZSIsInN0YXRlIiwic2V0U3RhdGUiLCJlbXB0eVNjZVNpbU1hcnNoYWxsZXIiLCJtYXJzaGFsbGVyIiwicG9pbnRlciIsInN0YWNrIiwicGFyc2VyIiwicGFyc2UiLCJjdXJyZW50TW9kZWwiLCJkb3dubG9hZFJlZiIsImlzVW5kb0VuYWJsZWQiLCJpc1JlZG9FbmFibGVkIiwibGVuZ3RoIiwiY29weUFzWG1sIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwiYnVpbGRlciIsImJ1aWxkIiwiZG93bmxvYWRBc1htbCIsImN1cnJlbnQiLCJmaWxlQmxvYiIsIkJsb2IiLCJ0eXBlIiwiZG93bmxvYWQiLCJtYWtlaWQiLCJocmVmIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiY2xpY2siLCJleHRlcm5hbE1vZGVsc0J5TmFtZXNwYWNlIiwiU2NlbmFyaW9TaW11bGF0aW9uTW9kZWwiLCJzZXR0aW5ncyIsImRtbk5hbWVzcGFjZSIsImRtbk1vZGVsIiwiZmluZCIsIm1vZGVsIiwiX2EiLCJkZWZpbml0aW9ucyIsIl9fJCR0ZXh0IiwiTWFwIiwidW5kZWZpbmVkIiwib25EcmFnT3ZlciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm9uRHJvcCIsImNvbnNvbGUiLCJsb2ciLCJkYXRhVHJhbnNmZXIiLCJpdGVtcyIsImZvckVhY2giLCJpdGVtIiwiaSIsImtpbmQiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwiZ2V0QXNGaWxlIiwibmFtZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJfcmVmIiwidGFyZ2V0IiwicmVzdWx0IiwicmVhZEFzVGV4dCIsIm9uTW9kZWxDaGFuZ2UiLCJwcmV2IiwibmV3U3RhY2siLCJzbGljZSIsIm9uUmVxdWVzdFRvSnVtcFRvUGF0aCIsInBhdGgiLCJhbGVydCIsIm9uU2VsZWN0TW9kZWwiLCJuZXdNb2RlbCIsInJlZG8iLCJNYXRoIiwibWluIiwicmVzZXQiLCJ1bmRvIiwibWF4Iiwib25SZXF1ZXN0RXh0ZXJuYWxNb2RlbEJ5UGF0aCIsIm9uUmVxdWVzdEV4dGVybmFsTW9kZWxzQXZhaWxhYmxlVG9JbmNsdWRlIiwiT2JqZWN0Iiwia2V5cyIsIl9qc3giLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwiY2hpbGRyZW4iLCJfanN4cyIsInZhcmlhbnQiLCJpc0ZpbGxlZCIsImhhc0d1dHRlciIsImp1c3RpZnlDb250ZW50IiwiZGVmYXVsdCIsInNocmluayIsIm9uQ2xpY2siLCJkaXNhYmxlZCIsIm9wYWNpdHkiLCJyZWYiLCJoYXNPdmVyZmxvd1Njcm9sbCIsInBhZGRpbmciLCJpc3N1ZVRyYWNrZXJIcmVmIiwib3BlbkZpbGVOb3JtYWxpemVkUG9zaXhQYXRoUmVsYXRpdmVUb1RoZVdvcmtzcGFjZVJvb3QiLCJjaGFyYWN0ZXJzIiwiY2hhcmFjdGVyc0xlbmd0aCIsImNvdW50ZXIiLCJjaGFyQXQiLCJmbG9vciIsInJhbmRvbSIsIm1ldGEiLCJ0aXRsZSIsImNvbXBvbmVudCIsIldlYkFwcCIsInJlbmRlciIsImFyZ3MiLCJwYXJhbWV0ZXJzIiwiZG9jcyIsInNvdXJjZSIsIm9yaWdpbmFsU291cmNlIiwiX2MiLCJfYiIsIl9fbmFtZWRFeHBvcnRzT3JkZXIiLCJUZXN0U2NlbmFyaW9FZGl0b3IiLCJFTVBUWSIsIm5vcm1hbGl6ZSIsImdldERtbk1hcnNoYWxsZXIiLCJpbmNsdWRlU3RvcmllcyIsIm5vcm1hbGl6ZWRQb3NpeFBhdGhSZWxhdGl2ZVRvVGhlT3BlbkZpbGUiLCJ1cGdyYWRlVG8iLCJzdmciLCJFbXB0eSIsInhtbCIsIlByb21pc2UiLCJyZXNvbHZlIiwiQ09MTEVDVElPTiIsIkNPTVBMRVhfQ09MTEVDVElPTiIsIkxPQU5fUFJFX1FVQUxJRklDQVRJT04iLCJNSVhFRCIsIlNJTVBMRSIsIlRSQUZGSUNfVklPTEFUSU9OIiwidmFsdWVzIiwicmVkdWNlIiwiYWNjIiwidiJdLCJzb3VyY2VSb290IjoiIn0=