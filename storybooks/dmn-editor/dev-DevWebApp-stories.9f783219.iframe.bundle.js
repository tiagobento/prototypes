"use strict";
(self["webpackChunk_kie_tools_dmn_editor"] = self["webpackChunk_kie_tools_dmn_editor"] || []).push([["dev-DevWebApp-stories"],{

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
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Flex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @patternfly/react-core/dist/js/layouts/Flex */ "../../node_modules/.pnpm/@patternfly+react-core@4.276.6_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@patternfly/react-core/dist/js/layouts/Flex/index.js");
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Flex__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_layouts_Flex__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _patternfly_react_core_dist_js_components_Page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Page */ "../../node_modules/.pnpm/@patternfly+react-core@4.276.6_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@patternfly/react-core/dist/js/components/Page/index.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Page__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Page__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _kie_tools_dmn_marshaller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @kie-tools/dmn-marshaller */ "../dmn-marshaller/dist/index.js");
/* harmony import */ var _kie_tools_dmn_marshaller_dist_normalization_normalize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @kie-tools/dmn-marshaller/dist/normalization/normalize */ "../dmn-marshaller/dist/normalization/normalize.js");
/* harmony import */ var _availableModelsToInclude__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./availableModelsToInclude */ "./stories/dev/availableModelsToInclude.ts");
/* harmony import */ var _misc_empty_Empty_stories__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../misc/empty/Empty.stories */ "./stories/misc/empty/Empty.stories.tsx");
/* harmony import */ var _useCases_loanPreQualification_LoanPreQualification_stories__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../useCases/loanPreQualification/LoanPreQualification.stories */ "./stories/useCases/loanPreQualification/LoanPreQualification.stories.tsx");
/* harmony import */ var _dmnEditorStoriesWrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../dmnEditorStoriesWrapper */ "./stories/dmnEditorStoriesWrapper.tsx");
var _a, _b, _c;











const initialModel = (0,_misc_empty_Empty_stories__WEBPACK_IMPORTED_MODULE_6__.generateEmptyDmn15)();
const emptyDrd = `<?xml version="1.0" encoding="UTF-8" ?>
<definitions xmlns="https://www.omg.org/spec/DMN/20230324/MODEL/" xmlns:dmndi="https://www.omg.org/spec/DMN/20230324/DMNDI/" xmlns:dc="http://www.omg.org/spec/DMN/20180521/DC/" xmlns:di="http://www.omg.org/spec/DMN/20180521/DI/" xmlns:kie="https://kie.org/dmn/extensions/1.0" xmlns:included0="https://kie.org/dmn/_125A5475-65CE-4574-822C-9CB2268F1393" expressionLanguage="https://www.omg.org/spec/DMN/20230324/FEEL/" namespace="https://kie.org/dmn/_2B849D68-E816-42F9-898A-1938B5D6B297" id="_A06623F7-6F03-49B9-9215-B9F99817C3ED" name="DMN_48A8D068-DBF3-4AE6-94E2-496DFC4B3E46">
  <import id="_8079D96B-F569-4F4E-830B-7462B6AFE492" name="u" importType="http://www.omg.org/spec/DMN/20180521/MODEL/" namespace="https://kie.org/dmn/_125A5475-65CE-4574-822C-9CB2268F1393" locationURI="./Untitled-4.dmn" />
  <inputData name="My Input" id="_9392B01E-8C6B-4E29-9CC4-21C16EFB2F6B">
    <variable name="My Input" id="_9483BABF-708A-4357-AD78-18C7A770E292" typeRef="&lt;Undefined&gt;" />
  </inputData>
  <decision name="My Decision" id="_83A0C6FA-0951-4E1E-9DF1-74A9D2A95E98">
    <variable id="_01C70F45-2955-474A-9FAC-14967ABAF475" typeRef="&lt;Undefined&gt;" name="My Decision" />
    <informationRequirement id="_A7EAFD5D-BDF7-4D09-81A9-9C22711847C0">
      <requiredInput href="https://kie.org/dmn/_125A5475-65CE-4574-822C-9CB2268F1393#_D9138F6E-E9DA-47AB-8DEF-5CD531B94ABE" />
    </informationRequirement>
    <informationRequirement id="_E4FE78BB-996B-46C4-9F9B-018163E9017A">
      <requiredInput href="#_9392B01E-8C6B-4E29-9CC4-21C16EFB2F6B" />
    </informationRequirement>
    <informationRequirement id="_E52D5C34-172E-4E33-B2FE-7B2A7AFDF52C">
      <requiredInput href="#_4072ADC3-E7CF-4D22-8179-7494EE22157C" />
    </informationRequirement>
  </decision>
  <inputData name="Another Input" id="_4072ADC3-E7CF-4D22-8179-7494EE22157C">
    <variable name="Another Input" id="_7490876B-8FA9-4FEC-B078-7563EF04F52B" typeRef="&lt;Undefined&gt;" />
  </inputData>
</definitions>
`;
function DevWebApp(args) {
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
    console.log("DMN Editor :: Dev webapp :: File(s) dropped! Opening it.");
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
    onModelChange((0,_kie_tools_dmn_marshaller_dist_normalization_normalize__WEBPACK_IMPORTED_MODULE_4__.normalize)((0,_kie_tools_dmn_marshaller__WEBPACK_IMPORTED_MODULE_3__.getMarshaller)(newModel, {
      upgradeTo: "latest"
    }).parser.parse()));
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
              shrink: {
                default: "shrink"
              },
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", {
                children: "DMN Editor :: Dev webapp "
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_js_layouts_Flex__WEBPACK_IMPORTED_MODULE_10__.FlexItem, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h5", {
                children: "(Drag & drop a file anywhere to open it)"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_js_layouts_Flex__WEBPACK_IMPORTED_MODULE_10__.FlexItem, {
              shrink: {
                default: "shrink"
              },
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                onClick: () => onSelectModel((0,_misc_empty_Empty_stories__WEBPACK_IMPORTED_MODULE_6__.generateEmptyDmn15)()),
                children: "Empty"
              }), "\u00A0 \u00A0", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                onClick: () => onSelectModel(_useCases_loanPreQualification_LoanPreQualification_stories__WEBPACK_IMPORTED_MODULE_7__.loanPreQualificationDmn),
                children: "Loan Pre Qualification"
              }), "\u00A0 \u00A0", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                onClick: () => onSelectModel(emptyDrd),
                children: "Empty DRD"
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
                children: "Copy as XML"
              }), "\u00A0 \u00A0", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                onClick: downloadAsXml,
                children: "Download as XML"
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
          children: (0,_dmnEditorStoriesWrapper__WEBPACK_IMPORTED_MODULE_8__.DmnEditorWrapper)({
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
  title: "Dev/Web App",
  component: DevWebApp
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (meta);
const WebApp = {
  render: args => DevWebApp(args),
  args: {
    model: (0,_kie_tools_dmn_marshaller__WEBPACK_IMPORTED_MODULE_3__.getMarshaller)(initialModel, {
      upgradeTo: "latest"
    }).parser.parse(),
    originalVersion: "1.5",
    evaluationResultsByNodeId: new Map(),
    externalContextDescription: "You're using the DMN Dev webapp, so there's only two simple external models that can be included.",
    externalContextName: "Dev webapp",
    externalModelsByNamespace: {},
    issueTrackerHref: "https://github.com/apache/incubator-kie-issues/issues/new",
    validationMessages: {},
    isReadOnly: false
  }
};
WebApp.parameters = {
  ...WebApp.parameters,
  docs: {
    ...((_a = WebApp.parameters) === null || _a === void 0 ? void 0 : _a.docs),
    source: {
      originalSource: "{\n  render: args => DevWebApp(args),\n  args: {\n    model: getMarshaller(initialModel, {\n      upgradeTo: \"latest\"\n    }).parser.parse(),\n    originalVersion: \"1.5\",\n    evaluationResultsByNodeId: new Map(),\n    externalContextDescription: \"You're using the DMN Dev webapp, so there's only two simple external models that can be included.\",\n    externalContextName: \"Dev webapp\",\n    externalModelsByNamespace: {},\n    issueTrackerHref: \"https://github.com/apache/incubator-kie-issues/issues/new\",\n    validationMessages: {},\n    isReadOnly: false\n  }\n}",
      ...((_c = (_b = WebApp.parameters) === null || _b === void 0 ? void 0 : _b.docs) === null || _c === void 0 ? void 0 : _c.source)
    }
  }
};
const __namedExportsOrder = ["WebApp"];

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
/* unused harmony exports sumBkmModel, sumDiffDsModel, testTreePmmlModel, avaiableModels */
/* harmony import */ var _kie_tools_dmn_marshaller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @kie-tools/dmn-marshaller */ "../dmn-marshaller/dist/index.js");
/* harmony import */ var _kie_tools_dmn_marshaller_dist_normalization_normalize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @kie-tools/dmn-marshaller/dist/normalization/normalize */ "../dmn-marshaller/dist/normalization/normalize.js");
/* harmony import */ var _kie_tools_pmml_editor_marshaller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @kie-tools/pmml-editor-marshaller */ "../pmml-editor-marshaller/dist/index.js");
/* harmony import */ var _src_pmml_pmml__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/pmml/pmml */ "./src/pmml/pmml.ts");
/* harmony import */ var _externalModels__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./externalModels */ "./stories/dev/externalModels.ts");





const sumBkmModel = (0,_kie_tools_dmn_marshaller_dist_normalization_normalize__WEBPACK_IMPORTED_MODULE_1__.normalize)((0,_kie_tools_dmn_marshaller__WEBPACK_IMPORTED_MODULE_0__.getMarshaller)(_externalModels__WEBPACK_IMPORTED_MODULE_4__.sumBkm, {
  upgradeTo: "latest"
}).parser.parse());
const sumDiffDsModel = (0,_kie_tools_dmn_marshaller_dist_normalization_normalize__WEBPACK_IMPORTED_MODULE_1__.normalize)((0,_kie_tools_dmn_marshaller__WEBPACK_IMPORTED_MODULE_0__.getMarshaller)(_externalModels__WEBPACK_IMPORTED_MODULE_4__.sumDiffDs, {
  upgradeTo: "latest"
}).parser.parse());
const testTreePmmlModel = (0,_kie_tools_pmml_editor_marshaller__WEBPACK_IMPORTED_MODULE_2__.XML2PMML)(_externalModels__WEBPACK_IMPORTED_MODULE_4__.testTreePmml);
const avaiableModels = [{
  type: "dmn",
  model: sumBkmModel,
  svg: "",
  normalizedPosixPathRelativeToTheOpenFile: "dev-webapp/available-models-to-include/sumBkm.dmn"
}, {
  type: "dmn",
  model: sumDiffDsModel,
  svg: "",
  normalizedPosixPathRelativeToTheOpenFile: "dev-webapp/available-models-to-include/sumDiffDs.dmn"
}, {
  type: "dmn",
  model: (0,_kie_tools_dmn_marshaller_dist_normalization_normalize__WEBPACK_IMPORTED_MODULE_1__.normalize)((0,_kie_tools_dmn_marshaller__WEBPACK_IMPORTED_MODULE_0__.getMarshaller)(`<definitions xmlns="https://www.omg.org/spec/DMN/20230324/MODEL/" />`, {
    upgradeTo: "latest"
  }).parser.parse()),
  svg: "",
  normalizedPosixPathRelativeToTheOpenFile: "dev-webapp/available-models-to-include/empty.dmn"
}, {
  type: "pmml",
  model: testTreePmmlModel,
  normalizedPosixPathRelativeToTheOpenFile: "dev-webapp/available-models-to-include/testTree.pmml"
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

/***/ "./stories/dev/externalModels.ts":
/*!***************************************!*\
  !*** ./stories/dev/externalModels.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sumBkm: () => (/* binding */ sumBkm),
/* harmony export */   sumDiffDs: () => (/* binding */ sumDiffDs),
/* harmony export */   testTreePmml: () => (/* binding */ testTreePmml)
/* harmony export */ });
const sumBkm = `<definitions 
  xmlns="https://www.omg.org/spec/DMN/20230324/MODEL/"
  xmlns:dmndi="https://www.omg.org/spec/DMN/20230324/DMNDI/" 
  xmlns:dc="http://www.omg.org/spec/DMN/20180521/DC/" 
  xmlns:di="http://www.omg.org/spec/DMN/20180521/DI/" 
  xmlns:kie="https://kie.apache.org/dmn/extensions/1.0"
  expressionLanguage="https://www.omg.org/spec/DMN/20211108/FEEL/"
  typeLanguage="http://www.omg.org/spec/DMN/20211108/FEEL/"
  namespace="https://kie.apache.org/dmn/_923784BD-CD31-488A-9C31-C1A83C5483C0" 
  id="_0E6F4D88-B955-404B-A31A-72BB7E1E6A77" 
  name="Sum BKM">
<businessKnowledgeModel name="Sum BKM" id="_3646600D-035F-47B9-8DC6-3FABE844234F">
  <variable name="New BKM" id="_94BAC9FD-8519-49F9-855A-F4FCBACD2A04" typeRef="number" />
  <functionDefinition label="Sum BKM" kind="FEEL" typeRef="number">
    <formalParameter id="_F3A70A69-09FF-417C-8F6C-BD9129231377" name="a" typeRef="number" />
    <formalParameter id="_E51B1C6E-896B-41C0-B03E-85B3CD7B6655" name="b" typeRef="number" />
    <literalExpression id="_FA1EE22B-CC6B-499F-95EE-68158A2F233B" label="Expression Name" typeRef="&lt;Undefined&gt;">
      <text>a + b</text>
    </literalExpression>
  </functionDefinition>
</businessKnowledgeModel>
<dmndi:DMNDI>
  <dmndi:DMNDiagram>
    <dmndi:DMNShape id="_3506A087-AB60-428D-9C75-1E5F5D6F0947" dmnElementRef="_3646600D-035F-47B9-8DC6-3FABE844234F" isCollapsed="false" isListedInputData="false">
      <dc:Bounds x="40" y="60" width="160" height="80" />
    </dmndi:DMNShape>
    <di:extension>
      <kie:ComponentsWidthsExtension>
        <kie:ComponentWidths dmnElementRef="_FA1EE22B-CC6B-499F-95EE-68158A2F233B">
          <kie:width>190</kie:width>
        </kie:ComponentWidths>
      </kie:ComponentsWidthsExtension>
    </di:extension>
  </dmndi:DMNDiagram>
</dmndi:DMNDI>
</definitions>
`;
const sumDiffDs = `<definitions 
  xmlns="https://www.omg.org/spec/DMN/20230324/MODEL/" 
  xmlns:dmndi="https://www.omg.org/spec/DMN/20230324/DMNDI/"
  xmlns:dc="http://www.omg.org/spec/DMN/20180521/DC/" 
  xmlns:di="http://www.omg.org/spec/DMN/20180521/DI/" 
  xmlns:kie="https://kie.apache.org/dmn/extensions/1.0"
  expressionLanguage="https://www.omg.org/spec/DMN/20211108/FEEL/" 
  typeLanguage="http://www.omg.org/spec/DMN/20211108/FEEL/"
  namespace="https://kie.apache.org/dmn/_D19B0015-2CBD-4BA8-84A9-5F554D84A9E1" 
  id="_F360CECB-5DF2-4546-A7A9-E5ECF0F5A872" 
  name="Sum and Diff DS">
<decisionService name="Sum and Diff DS" id="_721B7634-7227-42B4-AAA4-17DE60A7A967">
  <variable name="New Decision Service" id="_A996D4BD-CF69-4CC5-89C0-37CF2BD6BA6E" typeRef="context" />
  <inputData href="#_18FAE913-2B2A-479D-A53A-14A2D57C46E4" />
  <inputData href="#_0D6E83A0-171F-4D7C-B0DF-8464DDE05FD1" />
  <outputDecision href="#_1991FB34-1253-4A54-AD3D-89697938DDFA" />
  <outputDecision href="#_05621ED4-9236-47F1-B93A-164A4527B136" />
</decisionService>
<decision name="Sum" id="_05621ED4-9236-47F1-B93A-164A4527B136">
  <variable name="New Decision" id="_88ECA891-3837-40E6-BCBF-77BF24B26FD0" typeRef="number" />
  <informationRequirement id="_81BD49F4-E279-48A4-AC71-89CE92EEDE9C">
    <requiredInput href="#_18FAE913-2B2A-479D-A53A-14A2D57C46E4" />
  </informationRequirement>
  <informationRequirement id="_115B4C89-EBA8-4136-A70E-9D303D8E92C5">
    <requiredInput href="#_0D6E83A0-171F-4D7C-B0DF-8464DDE05FD1" />
  </informationRequirement>
  <literalExpression id="_2812E0EA-FD32-480F-89CD-D0FE5FA02172" label="Sum" typeRef="&lt;Undefined&gt;">
    <text>a + b</text>
  </literalExpression>
</decision>
<inputData name="a" id="_18FAE913-2B2A-479D-A53A-14A2D57C46E4">
  <variable name="New Input Data" id="_250DB850-97F5-45C8-AFBB-207218BDAF7E" typeRef="number" />
</inputData>
<inputData name="b" id="_0D6E83A0-171F-4D7C-B0DF-8464DDE05FD1">
  <variable name="New Input Data" id="_0FD3E491-93E4-4AC1-AB46-19A6C6A3E4F1" typeRef="number" />
</inputData>
<decision name="Diff" id="_1991FB34-1253-4A54-AD3D-89697938DDFA">
  <variable name="New Decision" id="_47AD6FB1-1892-4E27-B46D-0AF95B18602E" typeRef="number" />
  <informationRequirement id="_5CA8EA11-FDFF-410A-AB4F-AA7ACB9F7FDC">
    <requiredInput href="#_18FAE913-2B2A-479D-A53A-14A2D57C46E4" />
  </informationRequirement>
  <informationRequirement id="_D9E5FB0F-1A8C-4733-BBAB-E4A55113F806">
    <requiredInput href="#_0D6E83A0-171F-4D7C-B0DF-8464DDE05FD1" />
  </informationRequirement>
  <literalExpression id="_C6BBFC2E-695F-4668-8A0E-D175FE7302C7" label="Diff" typeRef="&lt;Undefined&gt;">
    <text>a - b</text>
  </literalExpression>
</decision>
<itemDefinition id="_842F4E16-C9A2-47D4-A221-081673B98C2D" name="SumDiffContext" isCollection="false">
  <itemComponent id="_4882D4FB-2146-4198-8640-33B951B893A7" name="Sum" isCollection="false">
    <typeRef>number</typeRef>
  </itemComponent>
  <itemComponent id="_3EF27B7D-3378-429E-B6DB-B856F5EB0AE7" name="Diff" isCollection="false">
    <typeRef>number</typeRef>
  </itemComponent>
</itemDefinition>
<itemDefinition id="_2B4E9593-3239-4E04-A213-345F0AA0AF9E" name="Fine" isCollection="false">
  <itemComponent id="_3EF27B7D-3378-429E-B6DB-B856F5EB0AEE" name="Value" isCollection="false">
    <typeRef>number</typeRef>
    <allowedValues id="_5BD13D9D-412F-4E6B-914A-3D8AAAC6A701">
      <text>100,500,1000</text>
    </allowedValues>
  </itemComponent>
</itemDefinition>
<dmndi:DMNDI>
  <dmndi:DMNDiagram>
    <dmndi:DMNShape id="_495CB0A7-017A-4A2F-A4D7-3133C82708E0" dmnElementRef="_721B7634-7227-42B4-AAA4-17DE60A7A967" isCollapsed="false" isListedInputData="false">
      <dc:Bounds x="80" y="120" width="520" height="320" />
      <dmndi:DMNDecisionServiceDividerLine>
        <di:waypoint x="80" y="280" />
        <di:waypoint x="500" y="280" />
      </dmndi:DMNDecisionServiceDividerLine>
    </dmndi:DMNShape>
    <dmndi:DMNShape id="_80C42026-FF56-44C6-84F9-F7A03686F5E8" dmnElementRef="_05621ED4-9236-47F1-B93A-164A4527B136" isCollapsed="false" isListedInputData="false">
      <dc:Bounds x="140" y="180" width="160" height="80" />
    </dmndi:DMNShape>
    <dmndi:DMNShape id="_218ED5E8-FB01-417F-A1F6-867D60BCBF19" dmnElementRef="_18FAE913-2B2A-479D-A53A-14A2D57C46E4" isCollapsed="false" isListedInputData="false">
      <dc:Bounds x="80" y="480" width="160" height="80" />
    </dmndi:DMNShape>
    <dmndi:DMNShape id="_7C134BBF-2B96-4C9A-B985-D1FE10DC30D2" dmnElementRef="_0D6E83A0-171F-4D7C-B0DF-8464DDE05FD1" isCollapsed="false" isListedInputData="false">
      <dc:Bounds x="440" y="480" width="160" height="80" />
    </dmndi:DMNShape>
    <dmndi:DMNEdge id="_768C5D6E-9A41-4AA3-921C-A545E8F11597" dmnElementRef="_81BD49F4-E279-48A4-AC71-89CE92EEDE9C" sourceElement="_218ED5E8-FB01-417F-A1F6-867D60BCBF19" targetElement="_80C42026-FF56-44C6-84F9-F7A03686F5E8">
      <di:waypoint x="160" y="520" />
      <di:waypoint x="220" y="260" />
    </dmndi:DMNEdge>
    <dmndi:DMNEdge id="_79E2E532-8D84-40C9-91DA-07EA606798E5" dmnElementRef="_115B4C89-EBA8-4136-A70E-9D303D8E92C5" sourceElement="_7C134BBF-2B96-4C9A-B985-D1FE10DC30D2" targetElement="_80C42026-FF56-44C6-84F9-F7A03686F5E8">
      <di:waypoint x="520" y="520" />
      <di:waypoint x="220" y="260" />
    </dmndi:DMNEdge>
    <dmndi:DMNShape id="_1553EB6C-2BE8-4BC3-8972-A87308B98C86" dmnElementRef="_1991FB34-1253-4A54-AD3D-89697938DDFA" isCollapsed="false" isListedInputData="false">
      <dc:Bounds x="380" y="180" width="160" height="80" />
    </dmndi:DMNShape>
    <dmndi:DMNEdge id="_C6979483-DBBA-4AC0-AB28-E12EFEF08654" dmnElementRef="_5CA8EA11-FDFF-410A-AB4F-AA7ACB9F7FDC" sourceElement="_218ED5E8-FB01-417F-A1F6-867D60BCBF19" targetElement="_1553EB6C-2BE8-4BC3-8972-A87308B98C86">
      <di:waypoint x="160" y="520" />
      <di:waypoint x="460" y="260" />
    </dmndi:DMNEdge>
    <dmndi:DMNEdge id="_378C5213-084B-4A1D-ADCC-CEFE41F7E9FC" dmnElementRef="_D9E5FB0F-1A8C-4733-BBAB-E4A55113F806" sourceElement="_7C134BBF-2B96-4C9A-B985-D1FE10DC30D2" targetElement="_1553EB6C-2BE8-4BC3-8972-A87308B98C86">
      <di:waypoint x="520" y="520" />
      <di:waypoint x="460" y="260" />
    </dmndi:DMNEdge>
    <di:extension>
      <kie:ComponentsWidthsExtension>
        <kie:ComponentWidths dmnElementRef="_2812E0EA-FD32-480F-89CD-D0FE5FA02172">
          <kie:width>190</kie:width>
        </kie:ComponentWidths>
        <kie:ComponentWidths dmnElementRef="_C6BBFC2E-695F-4668-8A0E-D175FE7302C7">
          <kie:width>190</kie:width>
        </kie:ComponentWidths>
      </kie:ComponentsWidthsExtension>
    </di:extension>
  </dmndi:DMNDiagram>
</dmndi:DMNDI>
</definitions>
`;
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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2LURldldlYkFwcC1zdG9yaWVzLjlmNzgzMjE5LmlmcmFtZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFtQnNCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0N5QztBQUVWO0FBQ3dCO0FBQ007QUFDTTtBQUNNO0FBQ1Q7QUFDckI7QUFDdUM7QUFDMUM7QUFFOUQsTUFBTWUsWUFBWSxHQUFHSCw2RUFBa0IsRUFBRTtBQUN6QyxNQUFNSSxRQUFRLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FzQmhCO0FBQ0QsU0FBU0MsU0FBU0EsQ0FBQ0MsSUFBb0I7RUFDckMsTUFBTSxDQUFDQyxLQUFLLEVBQUVDLFFBQVEsQ0FBQyxHQUFHakIsK0NBQVEsQ0FJL0IsTUFBSztJQUNOLE1BQU1rQixvQkFBb0IsR0FBR2Isd0VBQWEsQ0FBQ08sWUFBWSxFQUFFO01BQ3ZETyxTQUFTLEVBQUU7S0FDWixDQUFDO0lBQ0YsT0FBTztNQUNMQyxVQUFVLEVBQUVGLG9CQUFvQjtNQUNoQ0csS0FBSyxFQUFFLENBQUNmLGlHQUFTLENBQUNZLG9CQUFvQixDQUFDSSxNQUFNLENBQUNDLEtBQUssRUFBRSxDQUFDLENBQUM7TUFDdkRDLE9BQU8sRUFBRTtLQUNWO0VBQ0gsQ0FBQyxDQUFDO0VBQ0YsTUFBTUMsTUFBTSxHQUFHNUIsa0RBQVcsQ0FBRTZCLENBQWtCLElBQUk7SUFDaERDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDBEQUEwRCxDQUFDO0lBQ3ZFRixDQUFDLENBQUNHLGNBQWMsRUFBRTtJQUVsQixJQUFJSCxDQUFDLENBQUNJLFlBQVksQ0FBQ0MsS0FBSyxFQUFFO01BRXhCLENBQUMsR0FBR0wsQ0FBQyxDQUFDSSxZQUFZLENBQUNDLEtBQUssQ0FBQyxDQUFDQyxPQUFPLENBQUMsQ0FBQ0MsSUFBSSxFQUFFQyxDQUFDLEtBQUk7UUFDNUMsSUFBSUQsSUFBSSxDQUFDRSxJQUFJLEtBQUssTUFBTSxFQUFFO1VBQ3hCLE1BQU1DLE1BQU0sR0FBRyxJQUFJQyxVQUFVLEVBQUU7VUFDL0JELE1BQU0sQ0FBQ0UsZ0JBQWdCLENBQUMsTUFBTSxFQUFFQyxJQUFBLElBRTNCO1lBQUEsSUFGNEI7Y0FDL0JDO1lBQU0sQ0FDUCxHQUFBRCxJQUFBO1lBQ0MsTUFBTW5CLFVBQVUsR0FBR2Ysd0VBQWEsQ0FBQ21DLE1BQU0sYUFBTkEsTUFBTSx1QkFBTkEsTUFBTSxDQUFFQyxNQUFnQixFQUFFO2NBQ3pEdEIsU0FBUyxFQUFFO2FBQ1osQ0FBQztZQUNGRixRQUFRLENBQUM7Y0FDUEcsVUFBVTtjQUNWQyxLQUFLLEVBQUUsQ0FBQ2YsaUdBQVMsQ0FBQ2MsVUFBVSxDQUFDRSxNQUFNLENBQUNDLEtBQUssRUFBRSxDQUFDLENBQUM7Y0FDN0NDLE9BQU8sRUFBRTthQUNWLENBQUM7VUFDSixDQUFDLENBQUM7VUFDRlksTUFBTSxDQUFDTSxVQUFVLENBQUNULElBQUksQ0FBQ1UsU0FBUyxFQUFTLENBQUM7UUFDNUM7TUFDRixDQUFDLENBQUM7SUFDSjtFQUNGLENBQUMsRUFBRSxFQUFFLENBQUM7RUFDTixNQUFNQyxVQUFVLEdBQUcvQyxrREFBVyxDQUFFNkIsQ0FBa0IsSUFBSTtJQUNwREEsQ0FBQyxDQUFDRyxjQUFjLEVBQUU7RUFDcEIsQ0FBQyxFQUFFLEVBQUUsQ0FBQztFQUNOLE1BQU1nQixLQUFLLEdBQUdoRCxrREFBVyxDQUFDLE1BQUs7SUFDN0IsTUFBTXVCLFVBQVUsR0FBR2Ysd0VBQWEsQ0FBQ0ksNkVBQWtCLEVBQUUsRUFBRTtNQUNyRFUsU0FBUyxFQUFFO0tBQ1osQ0FBQztJQUNGRixRQUFRLENBQUM7TUFDUEcsVUFBVTtNQUNWQyxLQUFLLEVBQUUsQ0FBQ2YsaUdBQVMsQ0FBQ2MsVUFBVSxDQUFDRSxNQUFNLENBQUNDLEtBQUssRUFBRSxDQUFDLENBQUM7TUFDN0NDLE9BQU8sRUFBRTtLQUNWLENBQUM7RUFDSixDQUFDLEVBQUUsRUFBRSxDQUFDO0VBQ04sTUFBTXNCLFlBQVksR0FBRzlCLEtBQUssQ0FBQ0ssS0FBSyxDQUFDTCxLQUFLLENBQUNRLE9BQU8sQ0FBQztFQUMvQyxNQUFNdUIsV0FBVyxHQUFHaEQsNkNBQU0sQ0FBb0IsSUFBSSxDQUFDO0VBQ25ELE1BQU1pRCxhQUFhLEdBQUduRCxrREFBVyxDQUFDLE1BQUs7SUFDckMsSUFBSWtELFdBQVcsQ0FBQ0UsT0FBTyxFQUFFO01BQ3ZCLE1BQU1DLFFBQVEsR0FBRyxJQUFJQyxJQUFJLENBQUMsQ0FBQ25DLEtBQUssQ0FBQ0ksVUFBVSxDQUFDZ0MsT0FBTyxDQUFDQyxLQUFLLENBQUNQLFlBQVksQ0FBQyxDQUFDLEVBQUU7UUFDeEVRLElBQUksRUFBRTtPQUNQLENBQUM7TUFDRlAsV0FBVyxDQUFDRSxPQUFPLENBQUNNLFFBQVEsR0FBRyxPQUFPQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU07TUFDeERULFdBQVcsQ0FBQ0UsT0FBTyxDQUFDUSxJQUFJLEdBQUdDLEdBQUcsQ0FBQ0MsZUFBZSxDQUFDVCxRQUFRLENBQUM7TUFDeERILFdBQVcsQ0FBQ0UsT0FBTyxDQUFDVyxLQUFLLEVBQUU7SUFDN0I7RUFDRixDQUFDLEVBQUUsQ0FBQ2QsWUFBWSxFQUFFOUIsS0FBSyxDQUFDSSxVQUFVLENBQUNnQyxPQUFPLENBQUMsQ0FBQztFQUM1QyxNQUFNUyxTQUFTLEdBQUdoRSxrREFBVyxDQUFDLE1BQUs7SUFDakNpRSxTQUFTLENBQUNDLFNBQVMsQ0FBQ0MsU0FBUyxDQUFDaEQsS0FBSyxDQUFDSSxVQUFVLENBQUNnQyxPQUFPLENBQUNDLEtBQUssQ0FBQ1AsWUFBWSxDQUFDLENBQUM7RUFDN0UsQ0FBQyxFQUFFLENBQUNBLFlBQVksRUFBRTlCLEtBQUssQ0FBQ0ksVUFBVSxDQUFDZ0MsT0FBTyxDQUFDLENBQUM7RUFDNUMsTUFBTWEsSUFBSSxHQUFHcEUsa0RBQVcsQ0FBQyxNQUFLO0lBQzVCb0IsUUFBUSxDQUFDaUQsSUFBSSxLQUFLO01BQ2hCLEdBQUdBLElBQUk7TUFDUDFDLE9BQU8sRUFBRTJDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLENBQUMsRUFBRUYsSUFBSSxDQUFDMUMsT0FBTyxHQUFHLENBQUM7S0FDdEMsQ0FBQyxDQUFDO0VBQ0wsQ0FBQyxFQUFFLEVBQUUsQ0FBQztFQUNOLE1BQU02QyxJQUFJLEdBQUd4RSxrREFBVyxDQUFDLE1BQUs7SUFDNUJvQixRQUFRLENBQUNpRCxJQUFJLEtBQUs7TUFDaEIsR0FBR0EsSUFBSTtNQUNQMUMsT0FBTyxFQUFFMkMsSUFBSSxDQUFDRyxHQUFHLENBQUNKLElBQUksQ0FBQzdDLEtBQUssQ0FBQ2tELE1BQU0sR0FBRyxDQUFDLEVBQUVMLElBQUksQ0FBQzFDLE9BQU8sR0FBRyxDQUFDO0tBQzFELENBQUMsQ0FBQztFQUNMLENBQUMsRUFBRSxFQUFFLENBQUM7RUFDTixNQUFNZ0QsYUFBYSxHQUFHM0Usa0RBQVcsQ0FBbUI0RSxLQUFLLElBQUc7SUFDMUR4RCxRQUFRLENBQUNpRCxJQUFJLElBQUc7TUFDZCxNQUFNUSxRQUFRLEdBQUdSLElBQUksQ0FBQzdDLEtBQUssQ0FBQ3NELEtBQUssQ0FBQyxDQUFDLEVBQUVULElBQUksQ0FBQzFDLE9BQU8sR0FBRyxDQUFDLENBQUM7TUFDdEQsT0FBTztRQUNMLEdBQUcwQyxJQUFJO1FBQ1A3QyxLQUFLLEVBQUUsQ0FBQyxHQUFHcUQsUUFBUSxFQUFFRCxLQUFLLENBQUM7UUFDM0JqRCxPQUFPLEVBQUVrRCxRQUFRLENBQUNIO09BQ25CO0lBQ0gsQ0FBQyxDQUFDO0VBQ0osQ0FBQyxFQUFFLEVBQUUsQ0FBQztFQUNOLE1BQU1LLGFBQWEsR0FBRy9FLGtEQUFXLENBQUNnRixRQUFRLElBQUc7SUFDM0NMLGFBQWEsQ0FBQ2xFLGlHQUFTLENBQUNELHdFQUFhLENBQUN3RSxRQUFRLEVBQUU7TUFDOUMxRCxTQUFTLEVBQUU7S0FDWixDQUFDLENBQUNHLE1BQU0sQ0FBQ0MsS0FBSyxFQUFFLENBQUMsQ0FBQztFQUNyQixDQUFDLEVBQUUsQ0FBQ2lELGFBQWEsQ0FBQyxDQUFDO0VBQ25CLE1BQU1NLHFCQUFxQixHQUFHakYsa0RBQVcsQ0FBd0JrRixJQUFJLElBQUc7SUFDdEVDLEtBQUssQ0FBQyxrQkFBa0IsR0FBR0QsSUFBSSxDQUFDO0VBQ2xDLENBQUMsRUFBRSxFQUFFLENBQUM7RUFDTixNQUFNRSx5QkFBeUIsR0FBR25GLDhDQUFPLENBQXNCLE1BQUs7O0lBQ2xFLE9BQU8sQ0FBQyxDQUFBb0YsRUFBQSxHQUFBcEMsWUFBWSxDQUFDcUMsV0FBVyxDQUFDQyxNQUFNLGNBQUFGLEVBQUEsY0FBQUEsRUFBQSxHQUFJLEVBQUUsRUFBRUcsTUFBTSxDQUFDLENBQUNDLEdBQUcsRUFBRXBELENBQUMsS0FBSTtNQUMvRG9ELEdBQUcsQ0FBQ3BELENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxHQUFHMUIsd0VBQWlCLENBQUMwQixDQUFDLENBQUMsYUFBYSxDQUFDLENBQUM7TUFDM0QsT0FBT29ELEdBQUc7SUFDWixDQUFDLEVBQUUsRUFBeUIsQ0FBQztFQUMvQixDQUFDLEVBQUUsQ0FBQ3hDLFlBQVksQ0FBQ3FDLFdBQVcsQ0FBQ0MsTUFBTSxDQUFDLENBQUM7RUFDckMsTUFBTUcsNEJBQTRCLEdBQUcxRixrREFBVyxDQUErQixNQUFNa0YsSUFBSSxJQUFHOztJQUMxRixPQUFPLENBQUFHLEVBQUEsR0FBQTNFLDRFQUFxQixDQUFDd0UsSUFBSSxDQUFDLGNBQUFHLEVBQUEsY0FBQUEsRUFBQSxHQUFJLElBQUk7RUFDNUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztFQUNOLE1BQU1NLHlDQUF5QyxHQUFHM0Ysa0RBQVcsQ0FBNEMsWUFBVztJQUNsSCxPQUFPNEYsTUFBTSxDQUFDQyxJQUFJLENBQUNuRiw0RUFBcUIsQ0FBQztFQUMzQyxDQUFDLEVBQUUsRUFBRSxDQUFDO0VBQ04sTUFBTW9GLGFBQWEsR0FBRzNFLEtBQUssQ0FBQ1EsT0FBTyxHQUFHLENBQUM7RUFDdkMsTUFBTW9FLGFBQWEsR0FBRzVFLEtBQUssQ0FBQ1EsT0FBTyxLQUFLUixLQUFLLENBQUNLLEtBQUssQ0FBQ2tELE1BQU0sR0FBRyxDQUFDO0VBQzlELE9BQU9zQixzREFBQSxDQUFBQyx1REFBQTtJQUFBQyxRQUFBLEVBQ0ZqRCxZQUFZLElBQUkrQyxzREFBQTtNQUFLRyxLQUFLLEVBQUU7UUFDN0JDLEtBQUssRUFBRSxPQUFPO1FBQ2RDLE1BQU0sRUFBRTtPQUNUO01BQUFILFFBQUEsRUFDS0ksdURBQUEsQ0FBQ2hHLGdGQUFJO1FBQUN5QyxVQUFVLEVBQUVBLFVBQVU7UUFBRW5CLE1BQU0sRUFBRUEsTUFBTTtRQUFBc0UsUUFBQSxHQUMxQ0ksdURBQUEsQ0FBQy9GLHVGQUFXO1VBQUNnRyxPQUFPLEVBQUUsT0FBTztVQUFFQyxRQUFRLEVBQUUsS0FBSztVQUFFQyxPQUFPLEVBQUU7WUFDM0RDLE9BQU8sRUFBRTtXQUNWO1VBQUFSLFFBQUEsR0FDS0ksdURBQUEsQ0FBQ2xHLDhFQUFJO1lBQUN1RyxjQUFjLEVBQUU7Y0FDeEJELE9BQU8sRUFBRTthQUNWO1lBQUFSLFFBQUEsR0FDS0Ysc0RBQUEsQ0FBQzNGLGtGQUFRO2NBQUN1RyxNQUFNLEVBQUU7Z0JBQ3BCRixPQUFPLEVBQUU7ZUFDVjtjQUFBUixRQUFBLEVBQ0tGLHNEQUFBO2dCQUFBRSxRQUFBO2NBQUE7WUFBa0MsRUFDekIsRUFDWEYsc0RBQUEsQ0FBQzNGLGtGQUFRO2NBQUE2RixRQUFBLEVBQ1BGLHNEQUFBO2dCQUFBRSxRQUFBO2NBQUE7WUFBaUQsRUFDeEMsRUFDWEksdURBQUEsQ0FBQ2pHLGtGQUFRO2NBQUN1RyxNQUFNLEVBQUU7Z0JBQ3BCRixPQUFPLEVBQUU7ZUFDVjtjQUFBUixRQUFBLEdBQ0tGLHNEQUFBO2dCQUFRYSxPQUFPLEVBQUVBLENBQUEsS0FBTTlCLGFBQWEsQ0FBQ25FLDZFQUFrQixFQUFFLENBQUM7Z0JBQUFzRixRQUFBO2NBQUEsRUFBZ0IsbUJBRTFFRixzREFBQTtnQkFBUWEsT0FBTyxFQUFFQSxDQUFBLEtBQU05QixhQUFhLENBQUNsRSxnSEFBdUIsQ0FBQztnQkFBQXFGLFFBQUE7Y0FBQSxFQUFpQyxtQkFFOUZGLHNEQUFBO2dCQUFRYSxPQUFPLEVBQUVBLENBQUEsS0FBTTlCLGFBQWEsQ0FBQy9ELFFBQVEsQ0FBQztnQkFBQWtGLFFBQUE7Y0FBQSxFQUFvQixtQ0FFbEVGLHNEQUFBO2dCQUFRYyxRQUFRLEVBQUUsQ0FBQ2hCLGFBQWE7Z0JBQUVLLEtBQUssRUFBRTtrQkFDM0NZLE9BQU8sRUFBRWpCLGFBQWEsR0FBRyxDQUFDLEdBQUc7aUJBQzlCO2dCQUFFZSxPQUFPLEVBQUV6QyxJQUFJO2dCQUFBOEIsUUFBQSxFQUNULFNBQVMvRSxLQUFLLENBQUNRLE9BQU87Y0FBRyxFQUNuQixtQkFFVHFFLHNEQUFBO2dCQUFRYyxRQUFRLEVBQUUsQ0FBQ2YsYUFBYTtnQkFBRUksS0FBSyxFQUFFO2tCQUMzQ1ksT0FBTyxFQUFFaEIsYUFBYSxHQUFHLENBQUMsR0FBRztpQkFDOUI7Z0JBQUVjLE9BQU8sRUFBRXJDLElBQUk7Z0JBQUEwQixRQUFBLEVBQ1QsU0FBUy9FLEtBQUssQ0FBQ0ssS0FBSyxDQUFDa0QsTUFBTSxHQUFHLENBQUMsR0FBR3ZELEtBQUssQ0FBQ1EsT0FBTztjQUFHLEVBQzVDLG1DQUVUcUUsc0RBQUE7Z0JBQVFhLE9BQU8sRUFBRTdELEtBQUs7Z0JBQUFrRCxRQUFBO2NBQUEsRUFBZ0IsbUJBRXRDRixzREFBQTtnQkFBUWEsT0FBTyxFQUFFN0MsU0FBUztnQkFBQWtDLFFBQUE7Y0FBQSxFQUFzQixtQkFFaERGLHNEQUFBO2dCQUFRYSxPQUFPLEVBQUUxRCxhQUFhO2dCQUFBK0MsUUFBQTtjQUFBLEVBQTBCO1lBQUEsRUFDL0M7VUFBQSxFQUNOLEVBQ1BGLHNEQUFBO1lBQUdnQixHQUFHLEVBQUU5RDtVQUFXLEVBQUk7UUFBQSxFQUNYLEVBQ2Q4QyxzREFBQSxVQUFNLEVBQ05BLHNEQUFBLENBQUN6Rix1RkFBVztVQUFDZ0csT0FBTyxFQUFFLE9BQU87VUFBRUMsUUFBUSxFQUFFLElBQUk7VUFBRVMsaUJBQWlCLEVBQUUsSUFBSTtVQUFBLGNBQWMsUUFBUTtVQUFFUixPQUFPLEVBQUU7WUFDekdDLE9BQU8sRUFBRTtXQUNWO1VBQUFSLFFBQUEsRUFDTXBGLDBFQUFnQixDQUFDO1lBQ3BCOEQsS0FBSyxFQUFFM0IsWUFBWTtZQUNuQmlFLGVBQWUsRUFBRWhHLElBQUksQ0FBQ2dHLGVBQWU7WUFDckN2QyxhQUFhO1lBQ2JlLDRCQUE0QjtZQUM1QkMseUNBQXlDO1lBQ3pDUCx5QkFBeUIsRUFBRUEseUJBQXlCO1lBQ3BEK0IsbUJBQW1CLEVBQUVqRyxJQUFJLENBQUNpRyxtQkFBbUI7WUFDN0NDLDBCQUEwQixFQUFFbEcsSUFBSSxDQUFDa0csMEJBQTBCO1lBQzNEQyxrQkFBa0IsRUFBRW5HLElBQUksQ0FBQ21HLGtCQUFrQjtZQUMzQ0MseUJBQXlCLEVBQUVwRyxJQUFJLENBQUNvRyx5QkFBeUI7WUFDekRDLGdCQUFnQixFQUFFckcsSUFBSSxDQUFDcUcsZ0JBQWdCO1lBQ3ZDdEMscUJBQXFCO1lBQ3JCdUMsVUFBVSxFQUFFdEcsSUFBSSxDQUFDc0c7V0FDbEI7UUFBQyxFQUNjO01BQUE7SUFDVDtFQUNILEVBQ1A7QUFDUDtBQUNBLFNBQVM3RCxRQUFRQSxDQUFDZSxNQUFjO0VBQzlCLElBQUk5QixNQUFNLEdBQUcsRUFBRTtFQUNmLE1BQU02RSxVQUFVLEdBQUcsc0NBQXNDO0VBQ3pELE1BQU1DLGdCQUFnQixHQUFHRCxVQUFVLENBQUMvQyxNQUFNO0VBQzFDLElBQUlpRCxPQUFPLEdBQUcsQ0FBQztFQUNmLE9BQU9BLE9BQU8sR0FBR2pELE1BQU0sRUFBRTtJQUN2QjlCLE1BQU0sSUFBSTZFLFVBQVUsQ0FBQ0csTUFBTSxDQUFDdEQsSUFBSSxDQUFDdUQsS0FBSyxDQUFDdkQsSUFBSSxDQUFDd0QsTUFBTSxFQUFFLEdBQUdKLGdCQUFnQixDQUFDLENBQUM7SUFDekVDLE9BQU8sSUFBSSxDQUFDO0VBQ2Q7RUFDQSxPQUFPL0UsTUFBTTtBQUNmO0FBR0EsTUFBTW1GLElBQUksR0FBMkI7RUFDbkNDLEtBQUssRUFBRSxhQUFhO0VBQ3BCQyxTQUFTLEVBQUVoSDtDQUNaO0FBQ0QsaUVBQWU4RyxJQUFJLEVBQUM7QUFJYixNQUFNRyxNQUFNLEdBQVU7RUFDM0JDLE1BQU0sRUFBRWpILElBQUksSUFBSUQsU0FBUyxDQUFDQyxJQUFJLENBQUM7RUFDL0JBLElBQUksRUFBRTtJQUNKMEQsS0FBSyxFQUFFcEUsd0VBQWEsQ0FBQ08sWUFBWSxFQUFFO01BQ2pDTyxTQUFTLEVBQUU7S0FDWixDQUFDLENBQUNHLE1BQU0sQ0FBQ0MsS0FBSyxFQUFFO0lBQ2pCd0YsZUFBZSxFQUFFLEtBQUs7SUFDdEJJLHlCQUF5QixFQUFFLElBQUljLEdBQUcsRUFBRTtJQUNwQ2hCLDBCQUEwQixFQUFFLG1HQUFtRztJQUMvSEQsbUJBQW1CLEVBQUUsWUFBWTtJQUNqQy9CLHlCQUF5QixFQUFFLEVBQUU7SUFDN0JtQyxnQkFBZ0IsRUFBRSwyREFBMkQ7SUFDN0VGLGtCQUFrQixFQUFFLEVBQUU7SUFDdEJHLFVBQVUsRUFBRTs7Q0FFZjtBQUNEVSxNQUFNLENBQUNHLFVBQVUsR0FBRztFQUNsQixHQUFHSCxNQUFNLENBQUNHLFVBQVU7RUFDcEJDLElBQUksRUFBRTtJQUNKLElBQUcsQ0FBQWpELEVBQUEsR0FBQTZDLE1BQU0sQ0FBQ0csVUFBVSxjQUFBaEQsRUFBQSx1QkFBQUEsRUFBQSxDQUFFaUQsSUFBSTtJQUMxQkMsTUFBTSxFQUFFO01BQ05DLGNBQWMsRUFBRSxta0JBQW1rQjtNQUNubEIsSUFBRyxDQUFBQyxFQUFBLElBQUFDLEVBQUEsR0FBQVIsTUFBTSxDQUFDRyxVQUFVLGNBQUFLLEVBQUEsdUJBQUFBLEVBQUEsQ0FBRUosSUFBSSxjQUFBRyxFQUFBLHVCQUFBQSxFQUFBLENBQUVGLE1BQU07OztDQUd2QztBQUFDLE1BQUFJLG1CQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlRd0Q7QUFDeUI7QUFDdEI7QUFFTjtBQUNZO0FBRTVELE1BQU1NLFdBQVcsR0FBR3hJLGlHQUFTLENBQUNELHdFQUFhLENBQUNzSSxtREFBTSxFQUFFO0VBQUV4SCxTQUFTLEVBQUU7QUFBUSxDQUFFLENBQUMsQ0FBQ0csTUFBTSxDQUFDQyxLQUFLLEVBQUUsQ0FBQztBQUM1RixNQUFNd0gsY0FBYyxHQUFHekksaUdBQVMsQ0FBQ0Qsd0VBQWEsQ0FBQ3VJLHNEQUFTLEVBQUU7RUFBRXpILFNBQVMsRUFBRTtBQUFRLENBQUUsQ0FBQyxDQUFDRyxNQUFNLENBQUNDLEtBQUssRUFBRSxDQUFDO0FBQ2xHLE1BQU15SCxpQkFBaUIsR0FBR1AsMkVBQVEsQ0FBQ0kseURBQVksQ0FBQztBQUVoRCxNQUFNSSxjQUFjLEdBQThCLENBQ3ZEO0VBQ0UzRixJQUFJLEVBQUUsS0FBSztFQUNYbUIsS0FBSyxFQUFFcUUsV0FBVztFQUNsQkksR0FBRyxFQUFFLEVBQUU7RUFDUEMsd0NBQXdDLEVBQUU7Q0FDM0MsRUFDRDtFQUNFN0YsSUFBSSxFQUFFLEtBQUs7RUFDWG1CLEtBQUssRUFBRXNFLGNBQWM7RUFDckJHLEdBQUcsRUFBRSxFQUFFO0VBQ1BDLHdDQUF3QyxFQUFFO0NBQzNDLEVBQ0Q7RUFDRTdGLElBQUksRUFBRSxLQUFLO0VBQ1htQixLQUFLLEVBQUVuRSxpR0FBUyxDQUNkRCx3RUFBYSxDQUFDLHNFQUFzRSxFQUFFO0lBQ3BGYyxTQUFTLEVBQUU7R0FDWixDQUFDLENBQUNHLE1BQU0sQ0FBQ0MsS0FBSyxFQUFFLENBQ2xCO0VBQ0QySCxHQUFHLEVBQUUsRUFBRTtFQUNQQyx3Q0FBd0MsRUFBRTtDQUMzQyxFQUNEO0VBQ0U3RixJQUFJLEVBQUUsTUFBTTtFQUNabUIsS0FBSyxFQUFFdUUsaUJBQWlCO0VBQ3hCRyx3Q0FBd0MsRUFBRTtDQUMzQyxDQUNGO0FBRU0sTUFBTTVJLHFCQUFxQixHQUE0Q2tGLE1BQU0sQ0FBQzJELE1BQU0sQ0FBQ0gsY0FBYyxDQUFDLENBQUM1RCxNQUFNLENBQ2hILENBQUNDLEdBQUcsRUFBRStELENBQUMsS0FBSTtFQUNUL0QsR0FBRyxDQUFDK0QsQ0FBQyxDQUFDRix3Q0FBd0MsQ0FBQyxHQUFHRSxDQUFDO0VBQ25ELE9BQU8vRCxHQUFHO0FBQ1osQ0FBQyxFQUNELEVBQTZDLENBQzlDO0FBRU0sTUFBTTlFLGlCQUFpQixHQUFHaUYsTUFBTSxDQUFDMkQsTUFBTSxDQUFDSCxjQUFjLENBQUMsQ0FBQzVELE1BQU0sQ0FBQyxDQUFDQyxHQUFHLEVBQUUrRCxDQUFDLEtBQUk7RUFDL0UsSUFBSUEsQ0FBQyxDQUFDL0YsSUFBSSxLQUFLLEtBQUssRUFBRTtJQUNwQmdDLEdBQUcsQ0FBQytELENBQUMsQ0FBQzVFLEtBQUssQ0FBQ1UsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDLEdBQUdrRSxDQUFDO0VBQzdDLENBQUMsTUFBTSxJQUFJQSxDQUFDLENBQUMvRixJQUFJLEtBQUssTUFBTSxFQUFFO0lBQzVCZ0MsR0FBRyxDQUFDb0QsZ0VBQWdCLENBQUM7TUFBRVMsd0NBQXdDLEVBQUVFLENBQUMsQ0FBQ0Y7SUFBd0MsQ0FBRSxDQUFDLENBQUMsR0FBR0UsQ0FBQztFQUNySDtFQUNBLE9BQU8vRCxHQUFHO0FBQ1osQ0FBQyxFQUFFLEVBQW1DLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3hEaEMsTUFBTXFELE1BQU0sR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBb0NyQjtBQUVNLE1BQU1DLFNBQVMsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBa0h4QjtBQUVNLE1BQU1DLFlBQVksR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQTJDM0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Aa2llLXRvb2xzL2Rtbi1lZGl0b3IvLi4vcG1tbC1lZGl0b3ItbWFyc2hhbGxlci9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vQGtpZS10b29scy9kbW4tZWRpdG9yLy4vc3Rvcmllcy9kZXYvRGV2V2ViQXBwLnN0b3JpZXMudHN4Iiwid2VicGFjazovL0BraWUtdG9vbHMvZG1uLWVkaXRvci8uL3N0b3JpZXMvZGV2L2F2YWlsYWJsZU1vZGVsc1RvSW5jbHVkZS50cyIsIndlYnBhY2s6Ly9Aa2llLXRvb2xzL2Rtbi1lZGl0b3IvLi9zdG9yaWVzL2Rldi9leHRlcm5hbE1vZGVscy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogTGljZW5zZWQgdG8gdGhlIEFwYWNoZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIChBU0YpIHVuZGVyIG9uZVxuICogb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuICBTZWUgdGhlIE5PVElDRSBmaWxlXG4gKiBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvblxuICogcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuICBUaGUgQVNGIGxpY2Vuc2VzIHRoaXMgZmlsZVxuICogdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZVxuICogXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4gKiB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZyxcbiAqIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXG4gKiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxuICogS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlXG4gKiBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zXG4gKiB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5leHBvcnQgKiBmcm9tIFwiLi9hcGlcIjtcbmV4cG9ydCAqIGZyb20gXCIuL21hcnNoYWxsZXJcIjtcbiIsIi8qXG4gKiBMaWNlbnNlZCB0byB0aGUgQXBhY2hlIFNvZnR3YXJlIEZvdW5kYXRpb24gKEFTRikgdW5kZXIgb25lXG4gKiBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gIFNlZSB0aGUgTk9USUNFIGZpbGVcbiAqIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uXG4gKiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC4gIFRoZSBBU0YgbGljZW5zZXMgdGhpcyBmaWxlXG4gKiB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlXG4gKiBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2VcbiAqIHdpdGggdGhlIExpY2Vuc2UuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLFxuICogc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cbiAqIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXG4gKiBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGVcbiAqIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnNcbiAqIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZU1lbW8sIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB0eXBlIHsgTWV0YSwgU3RvcnlPYmogfSBmcm9tIFwiQHN0b3J5Ym9vay9yZWFjdFwiO1xuaW1wb3J0IFwiQHBhdHRlcm5mbHkvcmVhY3QtY29yZS9kaXN0L3N0eWxlcy9iYXNlLmNzc1wiO1xuaW1wb3J0IHsgRmxleCwgRmxleEl0ZW0gfSBmcm9tIFwiQHBhdHRlcm5mbHkvcmVhY3QtY29yZS9kaXN0L2pzL2xheW91dHMvRmxleFwiO1xuaW1wb3J0IHsgUGFnZSwgUGFnZVNlY3Rpb24gfSBmcm9tIFwiQHBhdHRlcm5mbHkvcmVhY3QtY29yZS9kaXN0L2pzL2NvbXBvbmVudHMvUGFnZVwiO1xuaW1wb3J0IHsgRG1uTGF0ZXN0TW9kZWwsIERtbk1hcnNoYWxsZXIsIGdldE1hcnNoYWxsZXIgfSBmcm9tIFwiQGtpZS10b29scy9kbW4tbWFyc2hhbGxlclwiO1xuaW1wb3J0IHsgbm9ybWFsaXplLCBOb3JtYWxpemVkIH0gZnJvbSBcIkBraWUtdG9vbHMvZG1uLW1hcnNoYWxsZXIvZGlzdC9ub3JtYWxpemF0aW9uL25vcm1hbGl6ZVwiO1xuaW1wb3J0IHsgYXZhaWxhYmxlTW9kZWxzQnlQYXRoLCBtb2RlbHNCeU5hbWVzcGFjZSB9IGZyb20gXCIuL2F2YWlsYWJsZU1vZGVsc1RvSW5jbHVkZVwiO1xuaW1wb3J0IHsgZ2VuZXJhdGVFbXB0eURtbjE1IH0gZnJvbSBcIi4uL21pc2MvZW1wdHkvRW1wdHkuc3Rvcmllc1wiO1xuaW1wb3J0IHsgbG9hblByZVF1YWxpZmljYXRpb25EbW4gfSBmcm9tIFwiLi4vdXNlQ2FzZXMvbG9hblByZVF1YWxpZmljYXRpb24vTG9hblByZVF1YWxpZmljYXRpb24uc3Rvcmllc1wiO1xuaW1wb3J0IHsgRG1uRWRpdG9yV3JhcHBlciB9IGZyb20gXCIuLi9kbW5FZGl0b3JTdG9yaWVzV3JhcHBlclwiO1xuaW1wb3J0IHsgRG1uRWRpdG9yUHJvcHMsIEV4dGVybmFsTW9kZWxzSW5kZXgsIE9uRG1uTW9kZWxDaGFuZ2UsIE9uUmVxdWVzdEV4dGVybmFsTW9kZWxCeVBhdGgsIE9uUmVxdWVzdEV4dGVybmFsTW9kZWxzQXZhaWxhYmxlVG9JbmNsdWRlLCBPblJlcXVlc3RUb0p1bXBUb1BhdGggfSBmcm9tIFwiLi4vLi4vc3JjL0RtbkVkaXRvclwiO1xuY29uc3QgaW5pdGlhbE1vZGVsID0gZ2VuZXJhdGVFbXB0eURtbjE1KCk7XG5jb25zdCBlbXB0eURyZCA9IGA8P3htbCB2ZXJzaW9uPVwiMS4wXCIgZW5jb2Rpbmc9XCJVVEYtOFwiID8+XG48ZGVmaW5pdGlvbnMgeG1sbnM9XCJodHRwczovL3d3dy5vbWcub3JnL3NwZWMvRE1OLzIwMjMwMzI0L01PREVML1wiIHhtbG5zOmRtbmRpPVwiaHR0cHM6Ly93d3cub21nLm9yZy9zcGVjL0RNTi8yMDIzMDMyNC9ETU5ESS9cIiB4bWxuczpkYz1cImh0dHA6Ly93d3cub21nLm9yZy9zcGVjL0RNTi8yMDE4MDUyMS9EQy9cIiB4bWxuczpkaT1cImh0dHA6Ly93d3cub21nLm9yZy9zcGVjL0RNTi8yMDE4MDUyMS9ESS9cIiB4bWxuczpraWU9XCJodHRwczovL2tpZS5vcmcvZG1uL2V4dGVuc2lvbnMvMS4wXCIgeG1sbnM6aW5jbHVkZWQwPVwiaHR0cHM6Ly9raWUub3JnL2Rtbi9fMTI1QTU0NzUtNjVDRS00NTc0LTgyMkMtOUNCMjI2OEYxMzkzXCIgZXhwcmVzc2lvbkxhbmd1YWdlPVwiaHR0cHM6Ly93d3cub21nLm9yZy9zcGVjL0RNTi8yMDIzMDMyNC9GRUVML1wiIG5hbWVzcGFjZT1cImh0dHBzOi8va2llLm9yZy9kbW4vXzJCODQ5RDY4LUU4MTYtNDJGOS04OThBLTE5MzhCNUQ2QjI5N1wiIGlkPVwiX0EwNjYyM0Y3LTZGMDMtNDlCOS05MjE1LUI5Rjk5ODE3QzNFRFwiIG5hbWU9XCJETU5fNDhBOEQwNjgtREJGMy00QUU2LTk0RTItNDk2REZDNEIzRTQ2XCI+XG4gIDxpbXBvcnQgaWQ9XCJfODA3OUQ5NkItRjU2OS00RjRFLTgzMEItNzQ2MkI2QUZFNDkyXCIgbmFtZT1cInVcIiBpbXBvcnRUeXBlPVwiaHR0cDovL3d3dy5vbWcub3JnL3NwZWMvRE1OLzIwMTgwNTIxL01PREVML1wiIG5hbWVzcGFjZT1cImh0dHBzOi8va2llLm9yZy9kbW4vXzEyNUE1NDc1LTY1Q0UtNDU3NC04MjJDLTlDQjIyNjhGMTM5M1wiIGxvY2F0aW9uVVJJPVwiLi9VbnRpdGxlZC00LmRtblwiIC8+XG4gIDxpbnB1dERhdGEgbmFtZT1cIk15IElucHV0XCIgaWQ9XCJfOTM5MkIwMUUtOEM2Qi00RTI5LTlDQzQtMjFDMTZFRkIyRjZCXCI+XG4gICAgPHZhcmlhYmxlIG5hbWU9XCJNeSBJbnB1dFwiIGlkPVwiXzk0ODNCQUJGLTcwOEEtNDM1Ny1BRDc4LTE4QzdBNzcwRTI5MlwiIHR5cGVSZWY9XCImbHQ7VW5kZWZpbmVkJmd0O1wiIC8+XG4gIDwvaW5wdXREYXRhPlxuICA8ZGVjaXNpb24gbmFtZT1cIk15IERlY2lzaW9uXCIgaWQ9XCJfODNBMEM2RkEtMDk1MS00RTFFLTlERjEtNzRBOUQyQTk1RTk4XCI+XG4gICAgPHZhcmlhYmxlIGlkPVwiXzAxQzcwRjQ1LTI5NTUtNDc0QS05RkFDLTE0OTY3QUJBRjQ3NVwiIHR5cGVSZWY9XCImbHQ7VW5kZWZpbmVkJmd0O1wiIG5hbWU9XCJNeSBEZWNpc2lvblwiIC8+XG4gICAgPGluZm9ybWF0aW9uUmVxdWlyZW1lbnQgaWQ9XCJfQTdFQUZENUQtQkRGNy00RDA5LTgxQTktOUMyMjcxMTg0N0MwXCI+XG4gICAgICA8cmVxdWlyZWRJbnB1dCBocmVmPVwiaHR0cHM6Ly9raWUub3JnL2Rtbi9fMTI1QTU0NzUtNjVDRS00NTc0LTgyMkMtOUNCMjI2OEYxMzkzI19EOTEzOEY2RS1FOURBLTQ3QUItOERFRi01Q0Q1MzFCOTRBQkVcIiAvPlxuICAgIDwvaW5mb3JtYXRpb25SZXF1aXJlbWVudD5cbiAgICA8aW5mb3JtYXRpb25SZXF1aXJlbWVudCBpZD1cIl9FNEZFNzhCQi05OTZCLTQ2QzQtOUY5Qi0wMTgxNjNFOTAxN0FcIj5cbiAgICAgIDxyZXF1aXJlZElucHV0IGhyZWY9XCIjXzkzOTJCMDFFLThDNkItNEUyOS05Q0M0LTIxQzE2RUZCMkY2QlwiIC8+XG4gICAgPC9pbmZvcm1hdGlvblJlcXVpcmVtZW50PlxuICAgIDxpbmZvcm1hdGlvblJlcXVpcmVtZW50IGlkPVwiX0U1MkQ1QzM0LTE3MkUtNEUzMy1CMkZFLTdCMkE3QUZERjUyQ1wiPlxuICAgICAgPHJlcXVpcmVkSW5wdXQgaHJlZj1cIiNfNDA3MkFEQzMtRTdDRi00RDIyLTgxNzktNzQ5NEVFMjIxNTdDXCIgLz5cbiAgICA8L2luZm9ybWF0aW9uUmVxdWlyZW1lbnQ+XG4gIDwvZGVjaXNpb24+XG4gIDxpbnB1dERhdGEgbmFtZT1cIkFub3RoZXIgSW5wdXRcIiBpZD1cIl80MDcyQURDMy1FN0NGLTREMjItODE3OS03NDk0RUUyMjE1N0NcIj5cbiAgICA8dmFyaWFibGUgbmFtZT1cIkFub3RoZXIgSW5wdXRcIiBpZD1cIl83NDkwODc2Qi04RkE5LTRGRUMtQjA3OC03NTYzRUYwNEY1MkJcIiB0eXBlUmVmPVwiJmx0O1VuZGVmaW5lZCZndDtcIiAvPlxuICA8L2lucHV0RGF0YT5cbjwvZGVmaW5pdGlvbnM+XG5gO1xuZnVuY3Rpb24gRGV2V2ViQXBwKGFyZ3M6IERtbkVkaXRvclByb3BzKSB7XG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGU8e1xuICAgIG1hcnNoYWxsZXI6IERtbk1hcnNoYWxsZXI7XG4gICAgc3RhY2s6IE5vcm1hbGl6ZWQ8RG1uTGF0ZXN0TW9kZWw+W107XG4gICAgcG9pbnRlcjogbnVtYmVyO1xuICB9PigoKSA9PiB7XG4gICAgY29uc3QgaW5pdGlhbERtbk1hcnNoYWxsZXIgPSBnZXRNYXJzaGFsbGVyKGluaXRpYWxNb2RlbCwge1xuICAgICAgdXBncmFkZVRvOiBcImxhdGVzdFwiXG4gICAgfSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1hcnNoYWxsZXI6IGluaXRpYWxEbW5NYXJzaGFsbGVyLFxuICAgICAgc3RhY2s6IFtub3JtYWxpemUoaW5pdGlhbERtbk1hcnNoYWxsZXIucGFyc2VyLnBhcnNlKCkpXSxcbiAgICAgIHBvaW50ZXI6IDBcbiAgICB9O1xuICB9KTtcbiAgY29uc3Qgb25Ecm9wID0gdXNlQ2FsbGJhY2soKGU6IFJlYWN0LkRyYWdFdmVudCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiRE1OIEVkaXRvciA6OiBEZXYgd2ViYXBwIDo6IEZpbGUocykgZHJvcHBlZCEgT3BlbmluZyBpdC5cIik7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAvLyBOZWNlc3NhcnkgdG8gZGlzYWJsZSB0aGUgYnJvd3NlcidzIGRlZmF1bHQgJ29uRHJvcCcgaGFuZGxpbmcuXG5cbiAgICBpZiAoZS5kYXRhVHJhbnNmZXIuaXRlbXMpIHtcbiAgICAgIC8vIFVzZSBEYXRhVHJhbnNmZXJJdGVtTGlzdCBpbnRlcmZhY2UgdG8gYWNjZXNzIHRoZSBmaWxlKHMpXG4gICAgICBbLi4uZS5kYXRhVHJhbnNmZXIuaXRlbXNdLmZvckVhY2goKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgaWYgKGl0ZW0ua2luZCA9PT0gXCJmaWxlXCIpIHtcbiAgICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICAgIHJlYWRlci5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoe1xuICAgICAgICAgICAgdGFyZ2V0XG4gICAgICAgICAgfSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWFyc2hhbGxlciA9IGdldE1hcnNoYWxsZXIodGFyZ2V0Py5yZXN1bHQgYXMgc3RyaW5nLCB7XG4gICAgICAgICAgICAgIHVwZ3JhZGVUbzogXCJsYXRlc3RcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIG1hcnNoYWxsZXIsXG4gICAgICAgICAgICAgIHN0YWNrOiBbbm9ybWFsaXplKG1hcnNoYWxsZXIucGFyc2VyLnBhcnNlKCkpXSxcbiAgICAgICAgICAgICAgcG9pbnRlcjogMFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmVhZGVyLnJlYWRBc1RleHQoaXRlbS5nZXRBc0ZpbGUoKSBhcyBhbnkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIFtdKTtcbiAgY29uc3Qgb25EcmFnT3ZlciA9IHVzZUNhbGxiYWNrKChlOiBSZWFjdC5EcmFnRXZlbnQpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7IC8vIE5lY2Vzc2FyeSB0byBkaXNhYmxlIHRoZSBicm93c2VyJ3MgZGVmYXVsdCAnb25Ecm9wJyBoYW5kbGluZy5cbiAgfSwgW10pO1xuICBjb25zdCByZXNldCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBjb25zdCBtYXJzaGFsbGVyID0gZ2V0TWFyc2hhbGxlcihnZW5lcmF0ZUVtcHR5RG1uMTUoKSwge1xuICAgICAgdXBncmFkZVRvOiBcImxhdGVzdFwiXG4gICAgfSk7XG4gICAgc2V0U3RhdGUoe1xuICAgICAgbWFyc2hhbGxlcixcbiAgICAgIHN0YWNrOiBbbm9ybWFsaXplKG1hcnNoYWxsZXIucGFyc2VyLnBhcnNlKCkpXSxcbiAgICAgIHBvaW50ZXI6IDBcbiAgICB9KTtcbiAgfSwgW10pO1xuICBjb25zdCBjdXJyZW50TW9kZWwgPSBzdGF0ZS5zdGFja1tzdGF0ZS5wb2ludGVyXTtcbiAgY29uc3QgZG93bmxvYWRSZWYgPSB1c2VSZWY8SFRNTEFuY2hvckVsZW1lbnQ+KG51bGwpO1xuICBjb25zdCBkb3dubG9hZEFzWG1sID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmIChkb3dubG9hZFJlZi5jdXJyZW50KSB7XG4gICAgICBjb25zdCBmaWxlQmxvYiA9IG5ldyBCbG9iKFtzdGF0ZS5tYXJzaGFsbGVyLmJ1aWxkZXIuYnVpbGQoY3VycmVudE1vZGVsKV0sIHtcbiAgICAgICAgdHlwZTogXCJ0ZXh0L3htbFwiXG4gICAgICB9KTtcbiAgICAgIGRvd25sb2FkUmVmLmN1cnJlbnQuZG93bmxvYWQgPSBgZG1uLSR7Y3JlYXRlSWQoMTApfS5kbW5gO1xuICAgICAgZG93bmxvYWRSZWYuY3VycmVudC5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlQmxvYik7XG4gICAgICBkb3dubG9hZFJlZi5jdXJyZW50LmNsaWNrKCk7XG4gICAgfVxuICB9LCBbY3VycmVudE1vZGVsLCBzdGF0ZS5tYXJzaGFsbGVyLmJ1aWxkZXJdKTtcbiAgY29uc3QgY29weUFzWG1sID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KHN0YXRlLm1hcnNoYWxsZXIuYnVpbGRlci5idWlsZChjdXJyZW50TW9kZWwpKTtcbiAgfSwgW2N1cnJlbnRNb2RlbCwgc3RhdGUubWFyc2hhbGxlci5idWlsZGVyXSk7XG4gIGNvbnN0IHVuZG8gPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0U3RhdGUocHJldiA9PiAoe1xuICAgICAgLi4ucHJldixcbiAgICAgIHBvaW50ZXI6IE1hdGgubWF4KDAsIHByZXYucG9pbnRlciAtIDEpXG4gICAgfSkpO1xuICB9LCBbXSk7XG4gIGNvbnN0IHJlZG8gPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0U3RhdGUocHJldiA9PiAoe1xuICAgICAgLi4ucHJldixcbiAgICAgIHBvaW50ZXI6IE1hdGgubWluKHByZXYuc3RhY2subGVuZ3RoIC0gMSwgcHJldi5wb2ludGVyICsgMSlcbiAgICB9KSk7XG4gIH0sIFtdKTtcbiAgY29uc3Qgb25Nb2RlbENoYW5nZSA9IHVzZUNhbGxiYWNrPE9uRG1uTW9kZWxDaGFuZ2U+KG1vZGVsID0+IHtcbiAgICBzZXRTdGF0ZShwcmV2ID0+IHtcbiAgICAgIGNvbnN0IG5ld1N0YWNrID0gcHJldi5zdGFjay5zbGljZSgwLCBwcmV2LnBvaW50ZXIgKyAxKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnByZXYsXG4gICAgICAgIHN0YWNrOiBbLi4ubmV3U3RhY2ssIG1vZGVsXSxcbiAgICAgICAgcG9pbnRlcjogbmV3U3RhY2subGVuZ3RoXG4gICAgICB9O1xuICAgIH0pO1xuICB9LCBbXSk7XG4gIGNvbnN0IG9uU2VsZWN0TW9kZWwgPSB1c2VDYWxsYmFjayhuZXdNb2RlbCA9PiB7XG4gICAgb25Nb2RlbENoYW5nZShub3JtYWxpemUoZ2V0TWFyc2hhbGxlcihuZXdNb2RlbCwge1xuICAgICAgdXBncmFkZVRvOiBcImxhdGVzdFwiXG4gICAgfSkucGFyc2VyLnBhcnNlKCkpKTtcbiAgfSwgW29uTW9kZWxDaGFuZ2VdKTtcbiAgY29uc3Qgb25SZXF1ZXN0VG9KdW1wVG9QYXRoID0gdXNlQ2FsbGJhY2s8T25SZXF1ZXN0VG9KdW1wVG9QYXRoPihwYXRoID0+IHtcbiAgICBhbGVydChcIkp1bXBpbmcgdG8gZmlsZSBcIiArIHBhdGgpO1xuICB9LCBbXSk7XG4gIGNvbnN0IGV4dGVybmFsTW9kZWxzQnlOYW1lc3BhY2UgPSB1c2VNZW1vPEV4dGVybmFsTW9kZWxzSW5kZXg+KCgpID0+IHtcbiAgICByZXR1cm4gKGN1cnJlbnRNb2RlbC5kZWZpbml0aW9ucy5pbXBvcnQgPz8gW10pLnJlZHVjZSgoYWNjLCBpKSA9PiB7XG4gICAgICBhY2NbaVtcIkBfbmFtZXNwYWNlXCJdXSA9IG1vZGVsc0J5TmFtZXNwYWNlW2lbXCJAX25hbWVzcGFjZVwiXV07XG4gICAgICByZXR1cm4gYWNjO1xuICAgIH0sIHt9IGFzIEV4dGVybmFsTW9kZWxzSW5kZXgpO1xuICB9LCBbY3VycmVudE1vZGVsLmRlZmluaXRpb25zLmltcG9ydF0pO1xuICBjb25zdCBvblJlcXVlc3RFeHRlcm5hbE1vZGVsQnlQYXRoID0gdXNlQ2FsbGJhY2s8T25SZXF1ZXN0RXh0ZXJuYWxNb2RlbEJ5UGF0aD4oYXN5bmMgcGF0aCA9PiB7XG4gICAgcmV0dXJuIGF2YWlsYWJsZU1vZGVsc0J5UGF0aFtwYXRoXSA/PyBudWxsO1xuICB9LCBbXSk7XG4gIGNvbnN0IG9uUmVxdWVzdEV4dGVybmFsTW9kZWxzQXZhaWxhYmxlVG9JbmNsdWRlID0gdXNlQ2FsbGJhY2s8T25SZXF1ZXN0RXh0ZXJuYWxNb2RlbHNBdmFpbGFibGVUb0luY2x1ZGU+KGFzeW5jICgpID0+IHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoYXZhaWxhYmxlTW9kZWxzQnlQYXRoKTtcbiAgfSwgW10pO1xuICBjb25zdCBpc1VuZG9FbmFibGVkID0gc3RhdGUucG9pbnRlciA+IDA7XG4gIGNvbnN0IGlzUmVkb0VuYWJsZWQgPSBzdGF0ZS5wb2ludGVyICE9PSBzdGF0ZS5zdGFjay5sZW5ndGggLSAxO1xuICByZXR1cm4gPD5cbiAgICAgIHtjdXJyZW50TW9kZWwgJiYgPGRpdiBzdHlsZT17e1xuICAgICAgd2lkdGg6IFwiMTAwdndcIixcbiAgICAgIGhlaWdodDogXCIxMDB2aFwiXG4gICAgfX0+XG4gICAgICAgICAgPFBhZ2Ugb25EcmFnT3Zlcj17b25EcmFnT3Zlcn0gb25Ecm9wPXtvbkRyb3B9PlxuICAgICAgICAgICAgPFBhZ2VTZWN0aW9uIHZhcmlhbnQ9e1wibGlnaHRcIn0gaXNGaWxsZWQ9e2ZhbHNlfSBwYWRkaW5nPXt7XG4gICAgICAgICAgZGVmYXVsdDogXCJwYWRkaW5nXCJcbiAgICAgICAgfX0+XG4gICAgICAgICAgICAgIDxGbGV4IGp1c3RpZnlDb250ZW50PXt7XG4gICAgICAgICAgICBkZWZhdWx0OiBcImp1c3RpZnlDb250ZW50U3BhY2VCZXR3ZWVuXCJcbiAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICA8RmxleEl0ZW0gc2hyaW5rPXt7XG4gICAgICAgICAgICAgIGRlZmF1bHQ6IFwic2hyaW5rXCJcbiAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgPGgzPkRNTiBFZGl0b3IgOjogRGV2IHdlYmFwcCA8L2gzPlxuICAgICAgICAgICAgICAgIDwvRmxleEl0ZW0+XG4gICAgICAgICAgICAgICAgPEZsZXhJdGVtPlxuICAgICAgICAgICAgICAgICAgPGg1PihEcmFnICYgZHJvcCBhIGZpbGUgYW55d2hlcmUgdG8gb3BlbiBpdCk8L2g1PlxuICAgICAgICAgICAgICAgIDwvRmxleEl0ZW0+XG4gICAgICAgICAgICAgICAgPEZsZXhJdGVtIHNocmluaz17e1xuICAgICAgICAgICAgICBkZWZhdWx0OiBcInNocmlua1wiXG4gICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gb25TZWxlY3RNb2RlbChnZW5lcmF0ZUVtcHR5RG1uMTUoKSl9PkVtcHR5PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAmbmJzcDsgJm5ic3A7XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IG9uU2VsZWN0TW9kZWwobG9hblByZVF1YWxpZmljYXRpb25EbW4pfT5Mb2FuIFByZSBRdWFsaWZpY2F0aW9uPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAmbmJzcDsgJm5ic3A7XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IG9uU2VsZWN0TW9kZWwoZW1wdHlEcmQpfT5FbXB0eSBEUkQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICZuYnNwOyAmbmJzcDsgfCAmbmJzcDsgJm5ic3A7XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGRpc2FibGVkPXshaXNVbmRvRW5hYmxlZH0gc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiBpc1VuZG9FbmFibGVkID8gMSA6IDAuNVxuICAgICAgICAgICAgICB9fSBvbkNsaWNrPXt1bmRvfT5cbiAgICAgICAgICAgICAgICAgICAge2BVbmRvICgke3N0YXRlLnBvaW50ZXJ9KWB9XG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICZuYnNwOyAmbmJzcDtcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gZGlzYWJsZWQ9eyFpc1JlZG9FbmFibGVkfSBzdHlsZT17e1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IGlzUmVkb0VuYWJsZWQgPyAxIDogMC41XG4gICAgICAgICAgICAgIH19IG9uQ2xpY2s9e3JlZG99PlxuICAgICAgICAgICAgICAgICAgICB7YFJlZG8gKCR7c3RhdGUuc3RhY2subGVuZ3RoIC0gMSAtIHN0YXRlLnBvaW50ZXJ9KWB9XG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICZuYnNwOyAmbmJzcDsgfCAmbmJzcDsgJm5ic3A7XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Jlc2V0fT5SZXNldDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgJm5ic3A7ICZuYnNwO1xuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtjb3B5QXNYbWx9PkNvcHkgYXMgWE1MPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAmbmJzcDsgJm5ic3A7XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2Rvd25sb2FkQXNYbWx9PkRvd25sb2FkIGFzIFhNTDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvRmxleEl0ZW0+XG4gICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgICAgPGEgcmVmPXtkb3dubG9hZFJlZn0gLz5cbiAgICAgICAgICAgIDwvUGFnZVNlY3Rpb24+XG4gICAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICAgIDxQYWdlU2VjdGlvbiB2YXJpYW50PXtcImxpZ2h0XCJ9IGlzRmlsbGVkPXt0cnVlfSBoYXNPdmVyZmxvd1Njcm9sbD17dHJ1ZX0gYXJpYS1sYWJlbD17XCJlZGl0b3JcIn0gcGFkZGluZz17e1xuICAgICAgICAgIGRlZmF1bHQ6IFwibm9QYWRkaW5nXCJcbiAgICAgICAgfX0+XG4gICAgICAgICAgICAgIHtEbW5FZGl0b3JXcmFwcGVyKHtcbiAgICAgICAgICAgIG1vZGVsOiBjdXJyZW50TW9kZWwsXG4gICAgICAgICAgICBvcmlnaW5hbFZlcnNpb246IGFyZ3Mub3JpZ2luYWxWZXJzaW9uLFxuICAgICAgICAgICAgb25Nb2RlbENoYW5nZSxcbiAgICAgICAgICAgIG9uUmVxdWVzdEV4dGVybmFsTW9kZWxCeVBhdGgsXG4gICAgICAgICAgICBvblJlcXVlc3RFeHRlcm5hbE1vZGVsc0F2YWlsYWJsZVRvSW5jbHVkZSxcbiAgICAgICAgICAgIGV4dGVybmFsTW9kZWxzQnlOYW1lc3BhY2U6IGV4dGVybmFsTW9kZWxzQnlOYW1lc3BhY2UsXG4gICAgICAgICAgICBleHRlcm5hbENvbnRleHROYW1lOiBhcmdzLmV4dGVybmFsQ29udGV4dE5hbWUsXG4gICAgICAgICAgICBleHRlcm5hbENvbnRleHREZXNjcmlwdGlvbjogYXJncy5leHRlcm5hbENvbnRleHREZXNjcmlwdGlvbixcbiAgICAgICAgICAgIHZhbGlkYXRpb25NZXNzYWdlczogYXJncy52YWxpZGF0aW9uTWVzc2FnZXMsXG4gICAgICAgICAgICBldmFsdWF0aW9uUmVzdWx0c0J5Tm9kZUlkOiBhcmdzLmV2YWx1YXRpb25SZXN1bHRzQnlOb2RlSWQsXG4gICAgICAgICAgICBpc3N1ZVRyYWNrZXJIcmVmOiBhcmdzLmlzc3VlVHJhY2tlckhyZWYsXG4gICAgICAgICAgICBvblJlcXVlc3RUb0p1bXBUb1BhdGgsXG4gICAgICAgICAgICBpc1JlYWRPbmx5OiBhcmdzLmlzUmVhZE9ubHlcbiAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvUGFnZVNlY3Rpb24+XG4gICAgICAgICAgPC9QYWdlPlxuICAgICAgICA8L2Rpdj59XG4gICAgPC8+O1xufVxuZnVuY3Rpb24gY3JlYXRlSWQobGVuZ3RoOiBudW1iZXIpIHtcbiAgbGV0IHJlc3VsdCA9IFwiXCI7XG4gIGNvbnN0IGNoYXJhY3RlcnMgPSBcImFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OVwiO1xuICBjb25zdCBjaGFyYWN0ZXJzTGVuZ3RoID0gY2hhcmFjdGVycy5sZW5ndGg7XG4gIGxldCBjb3VudGVyID0gMDtcbiAgd2hpbGUgKGNvdW50ZXIgPCBsZW5ndGgpIHtcbiAgICByZXN1bHQgKz0gY2hhcmFjdGVycy5jaGFyQXQoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2hhcmFjdGVyc0xlbmd0aCkpO1xuICAgIGNvdW50ZXIgKz0gMTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vLyBNb3JlIG9uIGhvdyB0byBzZXQgdXAgc3RvcmllcyBhdDogaHR0cHM6Ly9zdG9yeWJvb2suanMub3JnL2RvY3Mvd3JpdGluZy1zdG9yaWVzI2RlZmF1bHQtZXhwb3J0XG5jb25zdCBtZXRhOiBNZXRhPHR5cGVvZiBEZXZXZWJBcHA+ID0ge1xuICB0aXRsZTogXCJEZXYvV2ViIEFwcFwiLFxuICBjb21wb25lbnQ6IERldldlYkFwcFxufTtcbmV4cG9ydCBkZWZhdWx0IG1ldGE7XG50eXBlIFN0b3J5ID0gU3RvcnlPYmo8dHlwZW9mIERldldlYkFwcD47XG5cbi8vIE1vcmUgb24gd3JpdGluZyBzdG9yaWVzIHdpdGggYXJnczogaHR0cHM6Ly9zdG9yeWJvb2suanMub3JnL2RvY3Mvd3JpdGluZy1zdG9yaWVzL2FyZ3NcbmV4cG9ydCBjb25zdCBXZWJBcHA6IFN0b3J5ID0ge1xuICByZW5kZXI6IGFyZ3MgPT4gRGV2V2ViQXBwKGFyZ3MpLFxuICBhcmdzOiB7XG4gICAgbW9kZWw6IGdldE1hcnNoYWxsZXIoaW5pdGlhbE1vZGVsLCB7XG4gICAgICB1cGdyYWRlVG86IFwibGF0ZXN0XCJcbiAgICB9KS5wYXJzZXIucGFyc2UoKSxcbiAgICBvcmlnaW5hbFZlcnNpb246IFwiMS41XCIsXG4gICAgZXZhbHVhdGlvblJlc3VsdHNCeU5vZGVJZDogbmV3IE1hcCgpLFxuICAgIGV4dGVybmFsQ29udGV4dERlc2NyaXB0aW9uOiBcIllvdSdyZSB1c2luZyB0aGUgRE1OIERldiB3ZWJhcHAsIHNvIHRoZXJlJ3Mgb25seSB0d28gc2ltcGxlIGV4dGVybmFsIG1vZGVscyB0aGF0IGNhbiBiZSBpbmNsdWRlZC5cIixcbiAgICBleHRlcm5hbENvbnRleHROYW1lOiBcIkRldiB3ZWJhcHBcIixcbiAgICBleHRlcm5hbE1vZGVsc0J5TmFtZXNwYWNlOiB7fSxcbiAgICBpc3N1ZVRyYWNrZXJIcmVmOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9hcGFjaGUvaW5jdWJhdG9yLWtpZS1pc3N1ZXMvaXNzdWVzL25ld1wiLFxuICAgIHZhbGlkYXRpb25NZXNzYWdlczoge30sXG4gICAgaXNSZWFkT25seTogZmFsc2VcbiAgfVxufTtcbldlYkFwcC5wYXJhbWV0ZXJzID0ge1xuICAuLi5XZWJBcHAucGFyYW1ldGVycyxcbiAgZG9jczoge1xuICAgIC4uLldlYkFwcC5wYXJhbWV0ZXJzPy5kb2NzLFxuICAgIHNvdXJjZToge1xuICAgICAgb3JpZ2luYWxTb3VyY2U6IFwie1xcbiAgcmVuZGVyOiBhcmdzID0+IERldldlYkFwcChhcmdzKSxcXG4gIGFyZ3M6IHtcXG4gICAgbW9kZWw6IGdldE1hcnNoYWxsZXIoaW5pdGlhbE1vZGVsLCB7XFxuICAgICAgdXBncmFkZVRvOiBcXFwibGF0ZXN0XFxcIlxcbiAgICB9KS5wYXJzZXIucGFyc2UoKSxcXG4gICAgb3JpZ2luYWxWZXJzaW9uOiBcXFwiMS41XFxcIixcXG4gICAgZXZhbHVhdGlvblJlc3VsdHNCeU5vZGVJZDogbmV3IE1hcCgpLFxcbiAgICBleHRlcm5hbENvbnRleHREZXNjcmlwdGlvbjogXFxcIllvdSdyZSB1c2luZyB0aGUgRE1OIERldiB3ZWJhcHAsIHNvIHRoZXJlJ3Mgb25seSB0d28gc2ltcGxlIGV4dGVybmFsIG1vZGVscyB0aGF0IGNhbiBiZSBpbmNsdWRlZC5cXFwiLFxcbiAgICBleHRlcm5hbENvbnRleHROYW1lOiBcXFwiRGV2IHdlYmFwcFxcXCIsXFxuICAgIGV4dGVybmFsTW9kZWxzQnlOYW1lc3BhY2U6IHt9LFxcbiAgICBpc3N1ZVRyYWNrZXJIcmVmOiBcXFwiaHR0cHM6Ly9naXRodWIuY29tL2FwYWNoZS9pbmN1YmF0b3Ita2llLWlzc3Vlcy9pc3N1ZXMvbmV3XFxcIixcXG4gICAgdmFsaWRhdGlvbk1lc3NhZ2VzOiB7fSxcXG4gICAgaXNSZWFkT25seTogZmFsc2VcXG4gIH1cXG59XCIsXG4gICAgICAuLi5XZWJBcHAucGFyYW1ldGVycz8uZG9jcz8uc291cmNlXG4gICAgfVxuICB9XG59OyIsIi8qXG4gKiBMaWNlbnNlZCB0byB0aGUgQXBhY2hlIFNvZnR3YXJlIEZvdW5kYXRpb24gKEFTRikgdW5kZXIgb25lXG4gKiBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gIFNlZSB0aGUgTk9USUNFIGZpbGVcbiAqIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uXG4gKiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC4gIFRoZSBBU0YgbGljZW5zZXMgdGhpcyBmaWxlXG4gKiB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlXG4gKiBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2VcbiAqIHdpdGggdGhlIExpY2Vuc2UuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLFxuICogc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cbiAqIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXG4gKiBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGVcbiAqIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnNcbiAqIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IGdldE1hcnNoYWxsZXIgfSBmcm9tIFwiQGtpZS10b29scy9kbW4tbWFyc2hhbGxlclwiO1xuaW1wb3J0IHsgbm9ybWFsaXplIH0gZnJvbSBcIkBraWUtdG9vbHMvZG1uLW1hcnNoYWxsZXIvZGlzdC9ub3JtYWxpemF0aW9uL25vcm1hbGl6ZVwiO1xuaW1wb3J0IHsgWE1MMlBNTUwgfSBmcm9tIFwiQGtpZS10b29scy9wbW1sLWVkaXRvci1tYXJzaGFsbGVyXCI7XG5pbXBvcnQgKiBhcyBEbW5FZGl0b3IgZnJvbSBcIi4uLy4uL3NyYy9EbW5FZGl0b3JcIjtcbmltcG9ydCB7IGdldFBtbWxOYW1lc3BhY2UgfSBmcm9tIFwiLi4vLi4vc3JjL3BtbWwvcG1tbFwiO1xuaW1wb3J0IHsgc3VtQmttLCBzdW1EaWZmRHMsIHRlc3RUcmVlUG1tbCB9IGZyb20gXCIuL2V4dGVybmFsTW9kZWxzXCI7XG5cbmV4cG9ydCBjb25zdCBzdW1Ca21Nb2RlbCA9IG5vcm1hbGl6ZShnZXRNYXJzaGFsbGVyKHN1bUJrbSwgeyB1cGdyYWRlVG86IFwibGF0ZXN0XCIgfSkucGFyc2VyLnBhcnNlKCkpO1xuZXhwb3J0IGNvbnN0IHN1bURpZmZEc01vZGVsID0gbm9ybWFsaXplKGdldE1hcnNoYWxsZXIoc3VtRGlmZkRzLCB7IHVwZ3JhZGVUbzogXCJsYXRlc3RcIiB9KS5wYXJzZXIucGFyc2UoKSk7XG5leHBvcnQgY29uc3QgdGVzdFRyZWVQbW1sTW9kZWwgPSBYTUwyUE1NTCh0ZXN0VHJlZVBtbWwpO1xuXG5leHBvcnQgY29uc3QgYXZhaWFibGVNb2RlbHM6IERtbkVkaXRvci5FeHRlcm5hbE1vZGVsW10gPSBbXG4gIHtcbiAgICB0eXBlOiBcImRtblwiLFxuICAgIG1vZGVsOiBzdW1Ca21Nb2RlbCxcbiAgICBzdmc6IFwiXCIsXG4gICAgbm9ybWFsaXplZFBvc2l4UGF0aFJlbGF0aXZlVG9UaGVPcGVuRmlsZTogXCJkZXYtd2ViYXBwL2F2YWlsYWJsZS1tb2RlbHMtdG8taW5jbHVkZS9zdW1Ca20uZG1uXCIsXG4gIH0sXG4gIHtcbiAgICB0eXBlOiBcImRtblwiLFxuICAgIG1vZGVsOiBzdW1EaWZmRHNNb2RlbCxcbiAgICBzdmc6IFwiXCIsXG4gICAgbm9ybWFsaXplZFBvc2l4UGF0aFJlbGF0aXZlVG9UaGVPcGVuRmlsZTogXCJkZXYtd2ViYXBwL2F2YWlsYWJsZS1tb2RlbHMtdG8taW5jbHVkZS9zdW1EaWZmRHMuZG1uXCIsXG4gIH0sXG4gIHtcbiAgICB0eXBlOiBcImRtblwiLFxuICAgIG1vZGVsOiBub3JtYWxpemUoXG4gICAgICBnZXRNYXJzaGFsbGVyKGA8ZGVmaW5pdGlvbnMgeG1sbnM9XCJodHRwczovL3d3dy5vbWcub3JnL3NwZWMvRE1OLzIwMjMwMzI0L01PREVML1wiIC8+YCwge1xuICAgICAgICB1cGdyYWRlVG86IFwibGF0ZXN0XCIsXG4gICAgICB9KS5wYXJzZXIucGFyc2UoKVxuICAgICksXG4gICAgc3ZnOiBcIlwiLFxuICAgIG5vcm1hbGl6ZWRQb3NpeFBhdGhSZWxhdGl2ZVRvVGhlT3BlbkZpbGU6IFwiZGV2LXdlYmFwcC9hdmFpbGFibGUtbW9kZWxzLXRvLWluY2x1ZGUvZW1wdHkuZG1uXCIsXG4gIH0sXG4gIHtcbiAgICB0eXBlOiBcInBtbWxcIixcbiAgICBtb2RlbDogdGVzdFRyZWVQbW1sTW9kZWwsXG4gICAgbm9ybWFsaXplZFBvc2l4UGF0aFJlbGF0aXZlVG9UaGVPcGVuRmlsZTogXCJkZXYtd2ViYXBwL2F2YWlsYWJsZS1tb2RlbHMtdG8taW5jbHVkZS90ZXN0VHJlZS5wbW1sXCIsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgYXZhaWxhYmxlTW9kZWxzQnlQYXRoOiBSZWNvcmQ8c3RyaW5nLCBEbW5FZGl0b3IuRXh0ZXJuYWxNb2RlbD4gPSBPYmplY3QudmFsdWVzKGF2YWlhYmxlTW9kZWxzKS5yZWR1Y2UoXG4gIChhY2MsIHYpID0+IHtcbiAgICBhY2Nbdi5ub3JtYWxpemVkUG9zaXhQYXRoUmVsYXRpdmVUb1RoZU9wZW5GaWxlXSA9IHY7XG4gICAgcmV0dXJuIGFjYztcbiAgfSxcbiAge30gYXMgUmVjb3JkPHN0cmluZywgRG1uRWRpdG9yLkV4dGVybmFsTW9kZWw+XG4pO1xuXG5leHBvcnQgY29uc3QgbW9kZWxzQnlOYW1lc3BhY2UgPSBPYmplY3QudmFsdWVzKGF2YWlhYmxlTW9kZWxzKS5yZWR1Y2UoKGFjYywgdikgPT4ge1xuICBpZiAodi50eXBlID09PSBcImRtblwiKSB7XG4gICAgYWNjW3YubW9kZWwuZGVmaW5pdGlvbnNbXCJAX25hbWVzcGFjZVwiXV0gPSB2O1xuICB9IGVsc2UgaWYgKHYudHlwZSA9PT0gXCJwbW1sXCIpIHtcbiAgICBhY2NbZ2V0UG1tbE5hbWVzcGFjZSh7IG5vcm1hbGl6ZWRQb3NpeFBhdGhSZWxhdGl2ZVRvVGhlT3BlbkZpbGU6IHYubm9ybWFsaXplZFBvc2l4UGF0aFJlbGF0aXZlVG9UaGVPcGVuRmlsZSB9KV0gPSB2O1xuICB9XG4gIHJldHVybiBhY2M7XG59LCB7fSBhcyBEbW5FZGl0b3IuRXh0ZXJuYWxNb2RlbHNJbmRleCk7XG4iLCIvKlxuICogTGljZW5zZWQgdG8gdGhlIEFwYWNoZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIChBU0YpIHVuZGVyIG9uZVxuICogb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuICBTZWUgdGhlIE5PVElDRSBmaWxlXG4gKiBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvblxuICogcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuICBUaGUgQVNGIGxpY2Vuc2VzIHRoaXMgZmlsZVxuICogdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZVxuICogXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4gKiB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZyxcbiAqIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXG4gKiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxuICogS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlXG4gKiBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zXG4gKiB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5leHBvcnQgY29uc3Qgc3VtQmttID0gYDxkZWZpbml0aW9ucyBcbiAgeG1sbnM9XCJodHRwczovL3d3dy5vbWcub3JnL3NwZWMvRE1OLzIwMjMwMzI0L01PREVML1wiXG4gIHhtbG5zOmRtbmRpPVwiaHR0cHM6Ly93d3cub21nLm9yZy9zcGVjL0RNTi8yMDIzMDMyNC9ETU5ESS9cIiBcbiAgeG1sbnM6ZGM9XCJodHRwOi8vd3d3Lm9tZy5vcmcvc3BlYy9ETU4vMjAxODA1MjEvREMvXCIgXG4gIHhtbG5zOmRpPVwiaHR0cDovL3d3dy5vbWcub3JnL3NwZWMvRE1OLzIwMTgwNTIxL0RJL1wiIFxuICB4bWxuczpraWU9XCJodHRwczovL2tpZS5hcGFjaGUub3JnL2Rtbi9leHRlbnNpb25zLzEuMFwiXG4gIGV4cHJlc3Npb25MYW5ndWFnZT1cImh0dHBzOi8vd3d3Lm9tZy5vcmcvc3BlYy9ETU4vMjAyMTExMDgvRkVFTC9cIlxuICB0eXBlTGFuZ3VhZ2U9XCJodHRwOi8vd3d3Lm9tZy5vcmcvc3BlYy9ETU4vMjAyMTExMDgvRkVFTC9cIlxuICBuYW1lc3BhY2U9XCJodHRwczovL2tpZS5hcGFjaGUub3JnL2Rtbi9fOTIzNzg0QkQtQ0QzMS00ODhBLTlDMzEtQzFBODNDNTQ4M0MwXCIgXG4gIGlkPVwiXzBFNkY0RDg4LUI5NTUtNDA0Qi1BMzFBLTcyQkI3RTFFNkE3N1wiIFxuICBuYW1lPVwiU3VtIEJLTVwiPlxuPGJ1c2luZXNzS25vd2xlZGdlTW9kZWwgbmFtZT1cIlN1bSBCS01cIiBpZD1cIl8zNjQ2NjAwRC0wMzVGLTQ3QjktOERDNi0zRkFCRTg0NDIzNEZcIj5cbiAgPHZhcmlhYmxlIG5hbWU9XCJOZXcgQktNXCIgaWQ9XCJfOTRCQUM5RkQtODUxOS00OUY5LTg1NUEtRjRGQ0JBQ0QyQTA0XCIgdHlwZVJlZj1cIm51bWJlclwiIC8+XG4gIDxmdW5jdGlvbkRlZmluaXRpb24gbGFiZWw9XCJTdW0gQktNXCIga2luZD1cIkZFRUxcIiB0eXBlUmVmPVwibnVtYmVyXCI+XG4gICAgPGZvcm1hbFBhcmFtZXRlciBpZD1cIl9GM0E3MEE2OS0wOUZGLTQxN0MtOEY2Qy1CRDkxMjkyMzEzNzdcIiBuYW1lPVwiYVwiIHR5cGVSZWY9XCJudW1iZXJcIiAvPlxuICAgIDxmb3JtYWxQYXJhbWV0ZXIgaWQ9XCJfRTUxQjFDNkUtODk2Qi00MUMwLUIwM0UtODVCM0NEN0I2NjU1XCIgbmFtZT1cImJcIiB0eXBlUmVmPVwibnVtYmVyXCIgLz5cbiAgICA8bGl0ZXJhbEV4cHJlc3Npb24gaWQ9XCJfRkExRUUyMkItQ0M2Qi00OTlGLTk1RUUtNjgxNThBMkYyMzNCXCIgbGFiZWw9XCJFeHByZXNzaW9uIE5hbWVcIiB0eXBlUmVmPVwiJmx0O1VuZGVmaW5lZCZndDtcIj5cbiAgICAgIDx0ZXh0PmEgKyBiPC90ZXh0PlxuICAgIDwvbGl0ZXJhbEV4cHJlc3Npb24+XG4gIDwvZnVuY3Rpb25EZWZpbml0aW9uPlxuPC9idXNpbmVzc0tub3dsZWRnZU1vZGVsPlxuPGRtbmRpOkRNTkRJPlxuICA8ZG1uZGk6RE1ORGlhZ3JhbT5cbiAgICA8ZG1uZGk6RE1OU2hhcGUgaWQ9XCJfMzUwNkEwODctQUI2MC00MjhELTlDNzUtMUU1RjVENkYwOTQ3XCIgZG1uRWxlbWVudFJlZj1cIl8zNjQ2NjAwRC0wMzVGLTQ3QjktOERDNi0zRkFCRTg0NDIzNEZcIiBpc0NvbGxhcHNlZD1cImZhbHNlXCIgaXNMaXN0ZWRJbnB1dERhdGE9XCJmYWxzZVwiPlxuICAgICAgPGRjOkJvdW5kcyB4PVwiNDBcIiB5PVwiNjBcIiB3aWR0aD1cIjE2MFwiIGhlaWdodD1cIjgwXCIgLz5cbiAgICA8L2RtbmRpOkRNTlNoYXBlPlxuICAgIDxkaTpleHRlbnNpb24+XG4gICAgICA8a2llOkNvbXBvbmVudHNXaWR0aHNFeHRlbnNpb24+XG4gICAgICAgIDxraWU6Q29tcG9uZW50V2lkdGhzIGRtbkVsZW1lbnRSZWY9XCJfRkExRUUyMkItQ0M2Qi00OTlGLTk1RUUtNjgxNThBMkYyMzNCXCI+XG4gICAgICAgICAgPGtpZTp3aWR0aD4xOTA8L2tpZTp3aWR0aD5cbiAgICAgICAgPC9raWU6Q29tcG9uZW50V2lkdGhzPlxuICAgICAgPC9raWU6Q29tcG9uZW50c1dpZHRoc0V4dGVuc2lvbj5cbiAgICA8L2RpOmV4dGVuc2lvbj5cbiAgPC9kbW5kaTpETU5EaWFncmFtPlxuPC9kbW5kaTpETU5EST5cbjwvZGVmaW5pdGlvbnM+XG5gO1xuXG5leHBvcnQgY29uc3Qgc3VtRGlmZkRzID0gYDxkZWZpbml0aW9ucyBcbiAgeG1sbnM9XCJodHRwczovL3d3dy5vbWcub3JnL3NwZWMvRE1OLzIwMjMwMzI0L01PREVML1wiIFxuICB4bWxuczpkbW5kaT1cImh0dHBzOi8vd3d3Lm9tZy5vcmcvc3BlYy9ETU4vMjAyMzAzMjQvRE1OREkvXCJcbiAgeG1sbnM6ZGM9XCJodHRwOi8vd3d3Lm9tZy5vcmcvc3BlYy9ETU4vMjAxODA1MjEvREMvXCIgXG4gIHhtbG5zOmRpPVwiaHR0cDovL3d3dy5vbWcub3JnL3NwZWMvRE1OLzIwMTgwNTIxL0RJL1wiIFxuICB4bWxuczpraWU9XCJodHRwczovL2tpZS5hcGFjaGUub3JnL2Rtbi9leHRlbnNpb25zLzEuMFwiXG4gIGV4cHJlc3Npb25MYW5ndWFnZT1cImh0dHBzOi8vd3d3Lm9tZy5vcmcvc3BlYy9ETU4vMjAyMTExMDgvRkVFTC9cIiBcbiAgdHlwZUxhbmd1YWdlPVwiaHR0cDovL3d3dy5vbWcub3JnL3NwZWMvRE1OLzIwMjExMTA4L0ZFRUwvXCJcbiAgbmFtZXNwYWNlPVwiaHR0cHM6Ly9raWUuYXBhY2hlLm9yZy9kbW4vX0QxOUIwMDE1LTJDQkQtNEJBOC04NEE5LTVGNTU0RDg0QTlFMVwiIFxuICBpZD1cIl9GMzYwQ0VDQi01REYyLTQ1NDYtQTdBOS1FNUVDRjBGNUE4NzJcIiBcbiAgbmFtZT1cIlN1bSBhbmQgRGlmZiBEU1wiPlxuPGRlY2lzaW9uU2VydmljZSBuYW1lPVwiU3VtIGFuZCBEaWZmIERTXCIgaWQ9XCJfNzIxQjc2MzQtNzIyNy00MkI0LUFBQTQtMTdERTYwQTdBOTY3XCI+XG4gIDx2YXJpYWJsZSBuYW1lPVwiTmV3IERlY2lzaW9uIFNlcnZpY2VcIiBpZD1cIl9BOTk2RDRCRC1DRjY5LTRDQzUtODlDMC0zN0NGMkJENkJBNkVcIiB0eXBlUmVmPVwiY29udGV4dFwiIC8+XG4gIDxpbnB1dERhdGEgaHJlZj1cIiNfMThGQUU5MTMtMkIyQS00NzlELUE1M0EtMTRBMkQ1N0M0NkU0XCIgLz5cbiAgPGlucHV0RGF0YSBocmVmPVwiI18wRDZFODNBMC0xNzFGLTREN0MtQjBERi04NDY0RERFMDVGRDFcIiAvPlxuICA8b3V0cHV0RGVjaXNpb24gaHJlZj1cIiNfMTk5MUZCMzQtMTI1My00QTU0LUFEM0QtODk2OTc5MzhEREZBXCIgLz5cbiAgPG91dHB1dERlY2lzaW9uIGhyZWY9XCIjXzA1NjIxRUQ0LTkyMzYtNDdGMS1COTNBLTE2NEE0NTI3QjEzNlwiIC8+XG48L2RlY2lzaW9uU2VydmljZT5cbjxkZWNpc2lvbiBuYW1lPVwiU3VtXCIgaWQ9XCJfMDU2MjFFRDQtOTIzNi00N0YxLUI5M0EtMTY0QTQ1MjdCMTM2XCI+XG4gIDx2YXJpYWJsZSBuYW1lPVwiTmV3IERlY2lzaW9uXCIgaWQ9XCJfODhFQ0E4OTEtMzgzNy00MEU2LUJDQkYtNzdCRjI0QjI2RkQwXCIgdHlwZVJlZj1cIm51bWJlclwiIC8+XG4gIDxpbmZvcm1hdGlvblJlcXVpcmVtZW50IGlkPVwiXzgxQkQ0OUY0LUUyNzktNDhBNC1BQzcxLTg5Q0U5MkVFREU5Q1wiPlxuICAgIDxyZXF1aXJlZElucHV0IGhyZWY9XCIjXzE4RkFFOTEzLTJCMkEtNDc5RC1BNTNBLTE0QTJENTdDNDZFNFwiIC8+XG4gIDwvaW5mb3JtYXRpb25SZXF1aXJlbWVudD5cbiAgPGluZm9ybWF0aW9uUmVxdWlyZW1lbnQgaWQ9XCJfMTE1QjRDODktRUJBOC00MTM2LUE3MEUtOUQzMDNEOEU5MkM1XCI+XG4gICAgPHJlcXVpcmVkSW5wdXQgaHJlZj1cIiNfMEQ2RTgzQTAtMTcxRi00RDdDLUIwREYtODQ2NERERTA1RkQxXCIgLz5cbiAgPC9pbmZvcm1hdGlvblJlcXVpcmVtZW50PlxuICA8bGl0ZXJhbEV4cHJlc3Npb24gaWQ9XCJfMjgxMkUwRUEtRkQzMi00ODBGLTg5Q0QtRDBGRTVGQTAyMTcyXCIgbGFiZWw9XCJTdW1cIiB0eXBlUmVmPVwiJmx0O1VuZGVmaW5lZCZndDtcIj5cbiAgICA8dGV4dD5hICsgYjwvdGV4dD5cbiAgPC9saXRlcmFsRXhwcmVzc2lvbj5cbjwvZGVjaXNpb24+XG48aW5wdXREYXRhIG5hbWU9XCJhXCIgaWQ9XCJfMThGQUU5MTMtMkIyQS00NzlELUE1M0EtMTRBMkQ1N0M0NkU0XCI+XG4gIDx2YXJpYWJsZSBuYW1lPVwiTmV3IElucHV0IERhdGFcIiBpZD1cIl8yNTBEQjg1MC05N0Y1LTQ1QzgtQUZCQi0yMDcyMThCREFGN0VcIiB0eXBlUmVmPVwibnVtYmVyXCIgLz5cbjwvaW5wdXREYXRhPlxuPGlucHV0RGF0YSBuYW1lPVwiYlwiIGlkPVwiXzBENkU4M0EwLTE3MUYtNEQ3Qy1CMERGLTg0NjREREUwNUZEMVwiPlxuICA8dmFyaWFibGUgbmFtZT1cIk5ldyBJbnB1dCBEYXRhXCIgaWQ9XCJfMEZEM0U0OTEtOTNFNC00QUMxLUFCNDYtMTlBNkM2QTNFNEYxXCIgdHlwZVJlZj1cIm51bWJlclwiIC8+XG48L2lucHV0RGF0YT5cbjxkZWNpc2lvbiBuYW1lPVwiRGlmZlwiIGlkPVwiXzE5OTFGQjM0LTEyNTMtNEE1NC1BRDNELTg5Njk3OTM4RERGQVwiPlxuICA8dmFyaWFibGUgbmFtZT1cIk5ldyBEZWNpc2lvblwiIGlkPVwiXzQ3QUQ2RkIxLTE4OTItNEUyNy1CNDZELTBBRjk1QjE4NjAyRVwiIHR5cGVSZWY9XCJudW1iZXJcIiAvPlxuICA8aW5mb3JtYXRpb25SZXF1aXJlbWVudCBpZD1cIl81Q0E4RUExMS1GREZGLTQxMEEtQUI0Ri1BQTdBQ0I5RjdGRENcIj5cbiAgICA8cmVxdWlyZWRJbnB1dCBocmVmPVwiI18xOEZBRTkxMy0yQjJBLTQ3OUQtQTUzQS0xNEEyRDU3QzQ2RTRcIiAvPlxuICA8L2luZm9ybWF0aW9uUmVxdWlyZW1lbnQ+XG4gIDxpbmZvcm1hdGlvblJlcXVpcmVtZW50IGlkPVwiX0Q5RTVGQjBGLTFBOEMtNDczMy1CQkFCLUU0QTU1MTEzRjgwNlwiPlxuICAgIDxyZXF1aXJlZElucHV0IGhyZWY9XCIjXzBENkU4M0EwLTE3MUYtNEQ3Qy1CMERGLTg0NjREREUwNUZEMVwiIC8+XG4gIDwvaW5mb3JtYXRpb25SZXF1aXJlbWVudD5cbiAgPGxpdGVyYWxFeHByZXNzaW9uIGlkPVwiX0M2QkJGQzJFLTY5NUYtNDY2OC04QTBFLUQxNzVGRTczMDJDN1wiIGxhYmVsPVwiRGlmZlwiIHR5cGVSZWY9XCImbHQ7VW5kZWZpbmVkJmd0O1wiPlxuICAgIDx0ZXh0PmEgLSBiPC90ZXh0PlxuICA8L2xpdGVyYWxFeHByZXNzaW9uPlxuPC9kZWNpc2lvbj5cbjxpdGVtRGVmaW5pdGlvbiBpZD1cIl84NDJGNEUxNi1DOUEyLTQ3RDQtQTIyMS0wODE2NzNCOThDMkRcIiBuYW1lPVwiU3VtRGlmZkNvbnRleHRcIiBpc0NvbGxlY3Rpb249XCJmYWxzZVwiPlxuICA8aXRlbUNvbXBvbmVudCBpZD1cIl80ODgyRDRGQi0yMTQ2LTQxOTgtODY0MC0zM0I5NTFCODkzQTdcIiBuYW1lPVwiU3VtXCIgaXNDb2xsZWN0aW9uPVwiZmFsc2VcIj5cbiAgICA8dHlwZVJlZj5udW1iZXI8L3R5cGVSZWY+XG4gIDwvaXRlbUNvbXBvbmVudD5cbiAgPGl0ZW1Db21wb25lbnQgaWQ9XCJfM0VGMjdCN0QtMzM3OC00MjlFLUI2REItQjg1NkY1RUIwQUU3XCIgbmFtZT1cIkRpZmZcIiBpc0NvbGxlY3Rpb249XCJmYWxzZVwiPlxuICAgIDx0eXBlUmVmPm51bWJlcjwvdHlwZVJlZj5cbiAgPC9pdGVtQ29tcG9uZW50PlxuPC9pdGVtRGVmaW5pdGlvbj5cbjxpdGVtRGVmaW5pdGlvbiBpZD1cIl8yQjRFOTU5My0zMjM5LTRFMDQtQTIxMy0zNDVGMEFBMEFGOUVcIiBuYW1lPVwiRmluZVwiIGlzQ29sbGVjdGlvbj1cImZhbHNlXCI+XG4gIDxpdGVtQ29tcG9uZW50IGlkPVwiXzNFRjI3QjdELTMzNzgtNDI5RS1CNkRCLUI4NTZGNUVCMEFFRVwiIG5hbWU9XCJWYWx1ZVwiIGlzQ29sbGVjdGlvbj1cImZhbHNlXCI+XG4gICAgPHR5cGVSZWY+bnVtYmVyPC90eXBlUmVmPlxuICAgIDxhbGxvd2VkVmFsdWVzIGlkPVwiXzVCRDEzRDlELTQxMkYtNEU2Qi05MTRBLTNEOEFBQUM2QTcwMVwiPlxuICAgICAgPHRleHQ+MTAwLDUwMCwxMDAwPC90ZXh0PlxuICAgIDwvYWxsb3dlZFZhbHVlcz5cbiAgPC9pdGVtQ29tcG9uZW50PlxuPC9pdGVtRGVmaW5pdGlvbj5cbjxkbW5kaTpETU5EST5cbiAgPGRtbmRpOkRNTkRpYWdyYW0+XG4gICAgPGRtbmRpOkRNTlNoYXBlIGlkPVwiXzQ5NUNCMEE3LTAxN0EtNEEyRi1BNEQ3LTMxMzNDODI3MDhFMFwiIGRtbkVsZW1lbnRSZWY9XCJfNzIxQjc2MzQtNzIyNy00MkI0LUFBQTQtMTdERTYwQTdBOTY3XCIgaXNDb2xsYXBzZWQ9XCJmYWxzZVwiIGlzTGlzdGVkSW5wdXREYXRhPVwiZmFsc2VcIj5cbiAgICAgIDxkYzpCb3VuZHMgeD1cIjgwXCIgeT1cIjEyMFwiIHdpZHRoPVwiNTIwXCIgaGVpZ2h0PVwiMzIwXCIgLz5cbiAgICAgIDxkbW5kaTpETU5EZWNpc2lvblNlcnZpY2VEaXZpZGVyTGluZT5cbiAgICAgICAgPGRpOndheXBvaW50IHg9XCI4MFwiIHk9XCIyODBcIiAvPlxuICAgICAgICA8ZGk6d2F5cG9pbnQgeD1cIjUwMFwiIHk9XCIyODBcIiAvPlxuICAgICAgPC9kbW5kaTpETU5EZWNpc2lvblNlcnZpY2VEaXZpZGVyTGluZT5cbiAgICA8L2RtbmRpOkRNTlNoYXBlPlxuICAgIDxkbW5kaTpETU5TaGFwZSBpZD1cIl84MEM0MjAyNi1GRjU2LTQ0QzYtODRGOS1GN0EwMzY4NkY1RThcIiBkbW5FbGVtZW50UmVmPVwiXzA1NjIxRUQ0LTkyMzYtNDdGMS1COTNBLTE2NEE0NTI3QjEzNlwiIGlzQ29sbGFwc2VkPVwiZmFsc2VcIiBpc0xpc3RlZElucHV0RGF0YT1cImZhbHNlXCI+XG4gICAgICA8ZGM6Qm91bmRzIHg9XCIxNDBcIiB5PVwiMTgwXCIgd2lkdGg9XCIxNjBcIiBoZWlnaHQ9XCI4MFwiIC8+XG4gICAgPC9kbW5kaTpETU5TaGFwZT5cbiAgICA8ZG1uZGk6RE1OU2hhcGUgaWQ9XCJfMjE4RUQ1RTgtRkIwMS00MTdGLUExRjYtODY3RDYwQkNCRjE5XCIgZG1uRWxlbWVudFJlZj1cIl8xOEZBRTkxMy0yQjJBLTQ3OUQtQTUzQS0xNEEyRDU3QzQ2RTRcIiBpc0NvbGxhcHNlZD1cImZhbHNlXCIgaXNMaXN0ZWRJbnB1dERhdGE9XCJmYWxzZVwiPlxuICAgICAgPGRjOkJvdW5kcyB4PVwiODBcIiB5PVwiNDgwXCIgd2lkdGg9XCIxNjBcIiBoZWlnaHQ9XCI4MFwiIC8+XG4gICAgPC9kbW5kaTpETU5TaGFwZT5cbiAgICA8ZG1uZGk6RE1OU2hhcGUgaWQ9XCJfN0MxMzRCQkYtMkI5Ni00QzlBLUI5ODUtRDFGRTEwREMzMEQyXCIgZG1uRWxlbWVudFJlZj1cIl8wRDZFODNBMC0xNzFGLTREN0MtQjBERi04NDY0RERFMDVGRDFcIiBpc0NvbGxhcHNlZD1cImZhbHNlXCIgaXNMaXN0ZWRJbnB1dERhdGE9XCJmYWxzZVwiPlxuICAgICAgPGRjOkJvdW5kcyB4PVwiNDQwXCIgeT1cIjQ4MFwiIHdpZHRoPVwiMTYwXCIgaGVpZ2h0PVwiODBcIiAvPlxuICAgIDwvZG1uZGk6RE1OU2hhcGU+XG4gICAgPGRtbmRpOkRNTkVkZ2UgaWQ9XCJfNzY4QzVENkUtOUE0MS00QUEzLTkyMUMtQTU0NUU4RjExNTk3XCIgZG1uRWxlbWVudFJlZj1cIl84MUJENDlGNC1FMjc5LTQ4QTQtQUM3MS04OUNFOTJFRURFOUNcIiBzb3VyY2VFbGVtZW50PVwiXzIxOEVENUU4LUZCMDEtNDE3Ri1BMUY2LTg2N0Q2MEJDQkYxOVwiIHRhcmdldEVsZW1lbnQ9XCJfODBDNDIwMjYtRkY1Ni00NEM2LTg0RjktRjdBMDM2ODZGNUU4XCI+XG4gICAgICA8ZGk6d2F5cG9pbnQgeD1cIjE2MFwiIHk9XCI1MjBcIiAvPlxuICAgICAgPGRpOndheXBvaW50IHg9XCIyMjBcIiB5PVwiMjYwXCIgLz5cbiAgICA8L2RtbmRpOkRNTkVkZ2U+XG4gICAgPGRtbmRpOkRNTkVkZ2UgaWQ9XCJfNzlFMkU1MzItOEQ4NC00MEM5LTkxREEtMDdFQTYwNjc5OEU1XCIgZG1uRWxlbWVudFJlZj1cIl8xMTVCNEM4OS1FQkE4LTQxMzYtQTcwRS05RDMwM0Q4RTkyQzVcIiBzb3VyY2VFbGVtZW50PVwiXzdDMTM0QkJGLTJCOTYtNEM5QS1COTg1LUQxRkUxMERDMzBEMlwiIHRhcmdldEVsZW1lbnQ9XCJfODBDNDIwMjYtRkY1Ni00NEM2LTg0RjktRjdBMDM2ODZGNUU4XCI+XG4gICAgICA8ZGk6d2F5cG9pbnQgeD1cIjUyMFwiIHk9XCI1MjBcIiAvPlxuICAgICAgPGRpOndheXBvaW50IHg9XCIyMjBcIiB5PVwiMjYwXCIgLz5cbiAgICA8L2RtbmRpOkRNTkVkZ2U+XG4gICAgPGRtbmRpOkRNTlNoYXBlIGlkPVwiXzE1NTNFQjZDLTJCRTgtNEJDMy04OTcyLUE4NzMwOEI5OEM4NlwiIGRtbkVsZW1lbnRSZWY9XCJfMTk5MUZCMzQtMTI1My00QTU0LUFEM0QtODk2OTc5MzhEREZBXCIgaXNDb2xsYXBzZWQ9XCJmYWxzZVwiIGlzTGlzdGVkSW5wdXREYXRhPVwiZmFsc2VcIj5cbiAgICAgIDxkYzpCb3VuZHMgeD1cIjM4MFwiIHk9XCIxODBcIiB3aWR0aD1cIjE2MFwiIGhlaWdodD1cIjgwXCIgLz5cbiAgICA8L2RtbmRpOkRNTlNoYXBlPlxuICAgIDxkbW5kaTpETU5FZGdlIGlkPVwiX0M2OTc5NDgzLURCQkEtNEFDMC1BQjI4LUUxMkVGRUYwODY1NFwiIGRtbkVsZW1lbnRSZWY9XCJfNUNBOEVBMTEtRkRGRi00MTBBLUFCNEYtQUE3QUNCOUY3RkRDXCIgc291cmNlRWxlbWVudD1cIl8yMThFRDVFOC1GQjAxLTQxN0YtQTFGNi04NjdENjBCQ0JGMTlcIiB0YXJnZXRFbGVtZW50PVwiXzE1NTNFQjZDLTJCRTgtNEJDMy04OTcyLUE4NzMwOEI5OEM4NlwiPlxuICAgICAgPGRpOndheXBvaW50IHg9XCIxNjBcIiB5PVwiNTIwXCIgLz5cbiAgICAgIDxkaTp3YXlwb2ludCB4PVwiNDYwXCIgeT1cIjI2MFwiIC8+XG4gICAgPC9kbW5kaTpETU5FZGdlPlxuICAgIDxkbW5kaTpETU5FZGdlIGlkPVwiXzM3OEM1MjEzLTA4NEItNEExRC1BRENDLUNFRkU0MUY3RTlGQ1wiIGRtbkVsZW1lbnRSZWY9XCJfRDlFNUZCMEYtMUE4Qy00NzMzLUJCQUItRTRBNTUxMTNGODA2XCIgc291cmNlRWxlbWVudD1cIl83QzEzNEJCRi0yQjk2LTRDOUEtQjk4NS1EMUZFMTBEQzMwRDJcIiB0YXJnZXRFbGVtZW50PVwiXzE1NTNFQjZDLTJCRTgtNEJDMy04OTcyLUE4NzMwOEI5OEM4NlwiPlxuICAgICAgPGRpOndheXBvaW50IHg9XCI1MjBcIiB5PVwiNTIwXCIgLz5cbiAgICAgIDxkaTp3YXlwb2ludCB4PVwiNDYwXCIgeT1cIjI2MFwiIC8+XG4gICAgPC9kbW5kaTpETU5FZGdlPlxuICAgIDxkaTpleHRlbnNpb24+XG4gICAgICA8a2llOkNvbXBvbmVudHNXaWR0aHNFeHRlbnNpb24+XG4gICAgICAgIDxraWU6Q29tcG9uZW50V2lkdGhzIGRtbkVsZW1lbnRSZWY9XCJfMjgxMkUwRUEtRkQzMi00ODBGLTg5Q0QtRDBGRTVGQTAyMTcyXCI+XG4gICAgICAgICAgPGtpZTp3aWR0aD4xOTA8L2tpZTp3aWR0aD5cbiAgICAgICAgPC9raWU6Q29tcG9uZW50V2lkdGhzPlxuICAgICAgICA8a2llOkNvbXBvbmVudFdpZHRocyBkbW5FbGVtZW50UmVmPVwiX0M2QkJGQzJFLTY5NUYtNDY2OC04QTBFLUQxNzVGRTczMDJDN1wiPlxuICAgICAgICAgIDxraWU6d2lkdGg+MTkwPC9raWU6d2lkdGg+XG4gICAgICAgIDwva2llOkNvbXBvbmVudFdpZHRocz5cbiAgICAgIDwva2llOkNvbXBvbmVudHNXaWR0aHNFeHRlbnNpb24+XG4gICAgPC9kaTpleHRlbnNpb24+XG4gIDwvZG1uZGk6RE1ORGlhZ3JhbT5cbjwvZG1uZGk6RE1OREk+XG48L2RlZmluaXRpb25zPlxuYDtcbi8vIENvcGllZCBmcm9tIGtvZ2l0by1leGFtcGxlcy9rb2dpdG8tcXVhcmt1cy1leGFtcGxlcy9kbW4tcG1tbC1xdWFya3VzLWV4YW1wbGUvc3JjL21haW4vcmVzb3VyY2VzXG5leHBvcnQgY29uc3QgdGVzdFRyZWVQbW1sID0gYDxQTU1MIHZlcnNpb249XCI0LjJcIiB4c2k6c2NoZW1hTG9jYXRpb249XCJodHRwOi8vd3d3LmRtZy5vcmcvUE1NTC00XzIgaHR0cDovL3d3dy5kbWcub3JnL3Y0LTItMS9wbW1sLTQtMi54c2RcIiB4bWxuczp4c2k9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAxL1hNTFNjaGVtYS1pbnN0YW5jZVwiXG54bWxucz1cImh0dHA6Ly93d3cuZG1nLm9yZy9QTU1MLTRfMlwiPlxuPEhlYWRlcj5cbiA8QXBwbGljYXRpb24gbmFtZT1cIkRyb29scy1QTU1MXCIgdmVyc2lvbj1cIjcuMC4wLVNOQVBTSE9UXCIgLz5cbjwvSGVhZGVyPlxuXG48RGF0YURpY3Rpb25hcnkgbnVtYmVyT2ZGaWVsZHM9XCIzXCI+XG4gPERhdGFGaWVsZCBuYW1lPVwidGVtcGVyYXR1cmVcIiBkYXRhVHlwZT1cImRvdWJsZVwiIG9wdHlwZT1cImNvbnRpbnVvdXNcIiAvPlxuIDxEYXRhRmllbGQgbmFtZT1cImh1bWlkaXR5XCIgZGF0YVR5cGU9XCJkb3VibGVcIiBvcHR5cGU9XCJjb250aW51b3VzXCIgLz4gICBcbiA8RGF0YUZpZWxkIG5hbWU9XCJkZWNpc2lvblwiIGRhdGFUeXBlPVwic3RyaW5nXCIgb3B0eXBlPVwiY2F0ZWdvcmljYWxcIj4gXG4gICA8VmFsdWUgdmFsdWU9XCJzdW5nbGFzc2VzXCIgLz5cbiAgIDxWYWx1ZSB2YWx1ZT1cInVtYnJlbGxhXCIgLz5cbiAgIDxWYWx1ZSB2YWx1ZT1cIm5vdGhpbmdcIiAvPiAgICAgXG4gPC9EYXRhRmllbGQ+XG48L0RhdGFEaWN0aW9uYXJ5PlxuXG48VHJlZU1vZGVsIG1vZGVsTmFtZT1cIkRlY2lzaW9uVHJlZVwiIGZ1bmN0aW9uTmFtZT1cImNsYXNzaWZpY2F0aW9uXCI+XG4gPE1pbmluZ1NjaGVtYT5cbiAgIDxNaW5pbmdGaWVsZCBuYW1lPVwidGVtcGVyYXR1cmVcIiAgdXNhZ2VUeXBlPVwiYWN0aXZlXCIgLz5cbiAgIDxNaW5pbmdGaWVsZCBuYW1lPVwiaHVtaWRpdHlcIiAgdXNhZ2VUeXBlPVwiYWN0aXZlXCIgLz5cbiAgIDxNaW5pbmdGaWVsZCBuYW1lPVwiZGVjaXNpb25cIiB1c2FnZVR5cGU9XCJwcmVkaWN0ZWRcIiAvPlxuIDwvTWluaW5nU2NoZW1hPlxuIDxPdXRwdXQ+XG4gICA8T3V0cHV0RmllbGQgbmFtZT1cIndlYXRoZXJkZWNpc2lvblwiIHRhcmdldEZpZWxkPVwiZGVjaXNpb25cIiAvPlxuIDwvT3V0cHV0PlxuIFxuIDxOb2RlIHNjb3JlPVwibm90aGluZ1wiIGlkPVwiMVwiPlxuICAgPFRydWUgLz5cbiAgIDxOb2RlIHNjb3JlPVwic3VuZ2xhc3Nlc1wiIGlkPVwiMlwiPlxuICAgICA8Q29tcG91bmRQcmVkaWNhdGUgYm9vbGVhbk9wZXJhdG9yPVwiYW5kXCI+XG4gICAgICAgPFNpbXBsZVByZWRpY2F0ZSBmaWVsZD1cInRlbXBlcmF0dXJlXCIgb3BlcmF0b3I9XCJncmVhdGVyVGhhblwiIHZhbHVlPVwiMjVcIiAvPlxuICAgICAgIDxTaW1wbGVQcmVkaWNhdGUgZmllbGQ9XCJodW1pZGl0eVwiIG9wZXJhdG9yPVwibGVzc09yRXF1YWxcIiB2YWx1ZT1cIjIwXCIgLz5cbiAgICAgPC9Db21wb3VuZFByZWRpY2F0ZT5cbiAgIDwvTm9kZT5cbiAgIDxOb2RlIHNjb3JlPVwidW1icmVsbGFcIiBpZD1cIjNcIj5cbiAgICAgPFNpbXBsZVByZWRpY2F0ZSBmaWVsZD1cImh1bWlkaXR5XCIgb3BlcmF0b3I9XCJncmVhdGVyVGhhblwiIHZhbHVlPVwiNTBcIiAvPlxuICAgPC9Ob2RlPlxuICAgPE5vZGUgc2NvcmU9XCJub3RoaW5nXCIgaWQ9XCI0XCI+XG4gICAgIDxUcnVlIC8+XG4gICA8L05vZGU+XG4gPC9Ob2RlPlxuPC9UcmVlTW9kZWw+XG48L1BNTUw+XG5gO1xuIl0sIm5hbWVzIjpbInVzZUNhbGxiYWNrIiwidXNlTWVtbyIsInVzZVJlZiIsInVzZVN0YXRlIiwiRmxleCIsIkZsZXhJdGVtIiwiUGFnZSIsIlBhZ2VTZWN0aW9uIiwiZ2V0TWFyc2hhbGxlciIsIm5vcm1hbGl6ZSIsImF2YWlsYWJsZU1vZGVsc0J5UGF0aCIsIm1vZGVsc0J5TmFtZXNwYWNlIiwiZ2VuZXJhdGVFbXB0eURtbjE1IiwibG9hblByZVF1YWxpZmljYXRpb25EbW4iLCJEbW5FZGl0b3JXcmFwcGVyIiwiaW5pdGlhbE1vZGVsIiwiZW1wdHlEcmQiLCJEZXZXZWJBcHAiLCJhcmdzIiwic3RhdGUiLCJzZXRTdGF0ZSIsImluaXRpYWxEbW5NYXJzaGFsbGVyIiwidXBncmFkZVRvIiwibWFyc2hhbGxlciIsInN0YWNrIiwicGFyc2VyIiwicGFyc2UiLCJwb2ludGVyIiwib25Ecm9wIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJwcmV2ZW50RGVmYXVsdCIsImRhdGFUcmFuc2ZlciIsIml0ZW1zIiwiZm9yRWFjaCIsIml0ZW0iLCJpIiwia2luZCIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiX3JlZiIsInRhcmdldCIsInJlc3VsdCIsInJlYWRBc1RleHQiLCJnZXRBc0ZpbGUiLCJvbkRyYWdPdmVyIiwicmVzZXQiLCJjdXJyZW50TW9kZWwiLCJkb3dubG9hZFJlZiIsImRvd25sb2FkQXNYbWwiLCJjdXJyZW50IiwiZmlsZUJsb2IiLCJCbG9iIiwiYnVpbGRlciIsImJ1aWxkIiwidHlwZSIsImRvd25sb2FkIiwiY3JlYXRlSWQiLCJocmVmIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiY2xpY2siLCJjb3B5QXNYbWwiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJ1bmRvIiwicHJldiIsIk1hdGgiLCJtYXgiLCJyZWRvIiwibWluIiwibGVuZ3RoIiwib25Nb2RlbENoYW5nZSIsIm1vZGVsIiwibmV3U3RhY2siLCJzbGljZSIsIm9uU2VsZWN0TW9kZWwiLCJuZXdNb2RlbCIsIm9uUmVxdWVzdFRvSnVtcFRvUGF0aCIsInBhdGgiLCJhbGVydCIsImV4dGVybmFsTW9kZWxzQnlOYW1lc3BhY2UiLCJfYSIsImRlZmluaXRpb25zIiwiaW1wb3J0IiwicmVkdWNlIiwiYWNjIiwib25SZXF1ZXN0RXh0ZXJuYWxNb2RlbEJ5UGF0aCIsIm9uUmVxdWVzdEV4dGVybmFsTW9kZWxzQXZhaWxhYmxlVG9JbmNsdWRlIiwiT2JqZWN0Iiwia2V5cyIsImlzVW5kb0VuYWJsZWQiLCJpc1JlZG9FbmFibGVkIiwiX2pzeCIsIl9GcmFnbWVudCIsImNoaWxkcmVuIiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsIl9qc3hzIiwidmFyaWFudCIsImlzRmlsbGVkIiwicGFkZGluZyIsImRlZmF1bHQiLCJqdXN0aWZ5Q29udGVudCIsInNocmluayIsIm9uQ2xpY2siLCJkaXNhYmxlZCIsIm9wYWNpdHkiLCJyZWYiLCJoYXNPdmVyZmxvd1Njcm9sbCIsIm9yaWdpbmFsVmVyc2lvbiIsImV4dGVybmFsQ29udGV4dE5hbWUiLCJleHRlcm5hbENvbnRleHREZXNjcmlwdGlvbiIsInZhbGlkYXRpb25NZXNzYWdlcyIsImV2YWx1YXRpb25SZXN1bHRzQnlOb2RlSWQiLCJpc3N1ZVRyYWNrZXJIcmVmIiwiaXNSZWFkT25seSIsImNoYXJhY3RlcnMiLCJjaGFyYWN0ZXJzTGVuZ3RoIiwiY291bnRlciIsImNoYXJBdCIsImZsb29yIiwicmFuZG9tIiwibWV0YSIsInRpdGxlIiwiY29tcG9uZW50IiwiV2ViQXBwIiwicmVuZGVyIiwiTWFwIiwicGFyYW1ldGVycyIsImRvY3MiLCJzb3VyY2UiLCJvcmlnaW5hbFNvdXJjZSIsIl9jIiwiX2IiLCJfX25hbWVkRXhwb3J0c09yZGVyIiwiWE1MMlBNTUwiLCJnZXRQbW1sTmFtZXNwYWNlIiwic3VtQmttIiwic3VtRGlmZkRzIiwidGVzdFRyZWVQbW1sIiwic3VtQmttTW9kZWwiLCJzdW1EaWZmRHNNb2RlbCIsInRlc3RUcmVlUG1tbE1vZGVsIiwiYXZhaWFibGVNb2RlbHMiLCJzdmciLCJub3JtYWxpemVkUG9zaXhQYXRoUmVsYXRpdmVUb1RoZU9wZW5GaWxlIiwidmFsdWVzIiwidiJdLCJzb3VyY2VSb290IjoiIn0=