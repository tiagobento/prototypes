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
/* harmony import */ var _useCases_loanPreQualification_LoanPreQualification_stories__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../useCases/loanPreQualification/LoanPreQualification.stories */ "./stories/useCases/loanPreQualification/LoanPreQualification.stories.tsx");
/* harmony import */ var _dmnEditorStoriesWrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../dmnEditorStoriesWrapper */ "./stories/dmnEditorStoriesWrapper.tsx");
var _a, _b, _c;











const initialModel = (0,_misc_empty_Empty_stories__WEBPACK_IMPORTED_MODULE_6__.generateEmptyDmn15)();
const emptyDrd = `<?xml version="1.0" encoding="UTF-8" ?>
<definitions xmlns="https://www.omg.org/spec/DMN/20230324/MODEL/" xmlns:dmndi="https://www.omg.org/spec/DMN/20230324/DMNDI/" xmlns:dc="http://www.omg.org/spec/DMN/20180521/DC/" xmlns:di="http://www.omg.org/spec/DMN/20180521/DI/" xmlns:kie="https://kie.org/dmn/extensions/1.0" xmlns:included0="https://kie.org/dmn/_125A5475-65CE-4574-822C-9CB2268F1393" expressionLanguage="https://www.omg.org/spec/DMN/20230324/FEEL/" namespace="https://kie.org/dmn/_2B849D68-E816-42F9-898A-1938B5D6B297" id="_A06623F7-6F03-49B9-9215-B9F99817C3ED" name="DMN_48A8D068-DBF3-4AE6-94E2-496DFC4B3E46">
  <inputData name="My Input" id="_9392B01E-8C6B-4E29-9CC4-21C16EFB2F6B">
    <variable name="My Input" id="_9483BABF-708A-4357-AD78-18C7A770E292" typeRef="&lt;Undefined&gt;" />
  </inputData>
  <decision name="My Decision" id="_83A0C6FA-0951-4E1E-9DF1-74A9D2A95E98">
    <variable id="_01C70F45-2955-474A-9FAC-14967ABAF475" typeRef="&lt;Undefined&gt;" name="My Decision" />
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
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h5", {
                children: "(Drag & drop a file anywhere to open it)"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_js_layouts_Flex__WEBPACK_IMPORTED_MODULE_10__.FlexItem, {
              shrink: {
                default: "shrink"
              },
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                onClick: () => onSelectModel(_useCases_loanPreQualification_LoanPreQualification_stories__WEBPACK_IMPORTED_MODULE_7__.loanPreQualificationDmn),
                children: "Ex: Loan Pre Qualification"
              }), "\u00A0 \u00A0", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                onClick: () => onSelectModel(emptyDrd),
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
    externalContextDescription: "You're using the DMN Playground, so there's only two simple external models that can be included.",
    externalContextName: "Playground",
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
      originalSource: "{\n  render: args => DevPlayground(args),\n  args: {\n    model: getMarshaller(initialModel, {\n      upgradeTo: \"latest\"\n    }).parser.parse(),\n    originalVersion: \"1.5\",\n    evaluationResultsByNodeId: new Map(),\n    externalContextDescription: \"You're using the DMN Playground, so there's only two simple external models that can be included.\",\n    externalContextName: \"Playground\",\n    externalModelsByNamespace: {},\n    issueTrackerHref: \"https://github.com/apache/incubator-kie-issues/issues/new\",\n    validationMessages: {},\n    isReadOnly: false\n  }\n}",
      ...((_c = (_b = Playground.parameters) === null || _b === void 0 ? void 0 : _b.docs) === null || _c === void 0 ? void 0 : _c.source)
    }
  }
};
const __namedExportsOrder = ["Playground"];

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
  normalizedPosixPathRelativeToTheOpenFile: "playground/available-models-to-include/sumBkm.dmn"
}, {
  type: "dmn",
  model: sumDiffDsModel,
  svg: "",
  normalizedPosixPathRelativeToTheOpenFile: "playground/available-models-to-include/sumDiffDs.dmn"
}, {
  type: "dmn",
  model: (0,_kie_tools_dmn_marshaller_dist_normalization_normalize__WEBPACK_IMPORTED_MODULE_1__.normalize)((0,_kie_tools_dmn_marshaller__WEBPACK_IMPORTED_MODULE_0__.getMarshaller)(`<definitions xmlns="https://www.omg.org/spec/DMN/20230324/MODEL/" />`, {
    upgradeTo: "latest"
  }).parser.parse()),
  svg: "",
  normalizedPosixPathRelativeToTheOpenFile: "playground/available-models-to-include/empty.dmn"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2LVBsYXlncm91bmQtc3Rvcmllcy4xYjg4MzA4OC5pZnJhbWUuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBbUJzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNDeUM7QUFFVjtBQUN3QjtBQUNNO0FBQ007QUFDTTtBQUNUO0FBQ3JCO0FBQ3VDO0FBQzFDO0FBRTlELE1BQU1lLFlBQVksR0FBR0gsNkVBQWtCLEVBQUU7QUFDekMsTUFBTUksUUFBUSxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FrQmhCO0FBQ0QsU0FBU0MsYUFBYUEsQ0FBQ0MsSUFBb0I7RUFDekMsTUFBTSxDQUFDQyxLQUFLLEVBQUVDLFFBQVEsQ0FBQyxHQUFHakIsK0NBQVEsQ0FJL0IsTUFBSztJQUNOLE1BQU1rQixvQkFBb0IsR0FBR2Isd0VBQWEsQ0FBQ08sWUFBWSxFQUFFO01BQ3ZETyxTQUFTLEVBQUU7S0FDWixDQUFDO0lBQ0YsT0FBTztNQUNMQyxVQUFVLEVBQUVGLG9CQUFvQjtNQUNoQ0csS0FBSyxFQUFFLENBQUNmLGlHQUFTLENBQUNZLG9CQUFvQixDQUFDSSxNQUFNLENBQUNDLEtBQUssRUFBRSxDQUFDLENBQUM7TUFDdkRDLE9BQU8sRUFBRTtLQUNWO0VBQ0gsQ0FBQyxDQUFDO0VBQ0YsTUFBTUMsTUFBTSxHQUFHNUIsa0RBQVcsQ0FBRTZCLENBQWtCLElBQUk7SUFDaERDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDBEQUEwRCxDQUFDO0lBQ3ZFRixDQUFDLENBQUNHLGNBQWMsRUFBRTtJQUVsQixJQUFJSCxDQUFDLENBQUNJLFlBQVksQ0FBQ0MsS0FBSyxFQUFFO01BRXhCLENBQUMsR0FBR0wsQ0FBQyxDQUFDSSxZQUFZLENBQUNDLEtBQUssQ0FBQyxDQUFDQyxPQUFPLENBQUMsQ0FBQ0MsSUFBSSxFQUFFQyxDQUFDLEtBQUk7UUFDNUMsSUFBSUQsSUFBSSxDQUFDRSxJQUFJLEtBQUssTUFBTSxFQUFFO1VBQ3hCLE1BQU1DLE1BQU0sR0FB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QUF3QyxFQUFFRSxDQUFDLENBQUNGO0lBQXdDLENBQUUsQ0FBQyxDQUFDLEdBQUdFLENBQUM7RUFDckg7RUFDQSxPQUFPL0QsR0FBRztBQUNaLENBQUMsRUFBRSxFQUFtQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUN4RGhDLE1BQU1xRCxNQUFNLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQW9DckI7QUFFTSxNQUFNQyxTQUFTLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQWtIeEI7QUFFTSxNQUFNQyxZQUFZLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0EyQzNCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGtpZS10b29scy9kbW4tZWRpdG9yLy4uL3BtbWwtZWRpdG9yLW1hcnNoYWxsZXIvc3JjL2luZGV4LnRzIiwid2VicGFjazovL0BraWUtdG9vbHMvZG1uLWVkaXRvci8uL3N0b3JpZXMvZGV2L1BsYXlncm91bmQuc3Rvcmllcy50c3giLCJ3ZWJwYWNrOi8vQGtpZS10b29scy9kbW4tZWRpdG9yLy4vc3Rvcmllcy9kZXYvYXZhaWxhYmxlTW9kZWxzVG9JbmNsdWRlLnRzIiwid2VicGFjazovL0BraWUtdG9vbHMvZG1uLWVkaXRvci8uL3N0b3JpZXMvZGV2L2V4dGVybmFsTW9kZWxzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBMaWNlbnNlZCB0byB0aGUgQXBhY2hlIFNvZnR3YXJlIEZvdW5kYXRpb24gKEFTRikgdW5kZXIgb25lXG4gKiBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gIFNlZSB0aGUgTk9USUNFIGZpbGVcbiAqIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uXG4gKiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC4gIFRoZSBBU0YgbGljZW5zZXMgdGhpcyBmaWxlXG4gKiB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlXG4gKiBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2VcbiAqIHdpdGggdGhlIExpY2Vuc2UuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLFxuICogc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cbiAqIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXG4gKiBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGVcbiAqIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnNcbiAqIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmV4cG9ydCAqIGZyb20gXCIuL2FwaVwiO1xuZXhwb3J0ICogZnJvbSBcIi4vbWFyc2hhbGxlclwiO1xuIiwiLypcbiAqIExpY2Vuc2VkIHRvIHRoZSBBcGFjaGUgU29mdHdhcmUgRm91bmRhdGlvbiAoQVNGKSB1bmRlciBvbmVcbiAqIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiAgU2VlIHRoZSBOT1RJQ0UgZmlsZVxuICogZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb25cbiAqIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLiAgVGhlIEFTRiBsaWNlbnNlcyB0aGlzIGZpbGVcbiAqIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGVcbiAqIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuICogd2l0aCB0aGUgTGljZW5zZS4gIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsXG4gKiBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxuICogXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcbiAqIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZVxuICogc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9uc1xuICogdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlTWVtbywgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHR5cGUgeyBNZXRhLCBTdG9yeU9iaiB9IGZyb20gXCJAc3Rvcnlib29rL3JlYWN0XCI7XG5pbXBvcnQgXCJAcGF0dGVybmZseS9yZWFjdC1jb3JlL2Rpc3Qvc3R5bGVzL2Jhc2UuY3NzXCI7XG5pbXBvcnQgeyBGbGV4LCBGbGV4SXRlbSB9IGZyb20gXCJAcGF0dGVybmZseS9yZWFjdC1jb3JlL2Rpc3QvanMvbGF5b3V0cy9GbGV4XCI7XG5pbXBvcnQgeyBQYWdlLCBQYWdlU2VjdGlvbiB9IGZyb20gXCJAcGF0dGVybmZseS9yZWFjdC1jb3JlL2Rpc3QvanMvY29tcG9uZW50cy9QYWdlXCI7XG5pbXBvcnQgeyBEbW5MYXRlc3RNb2RlbCwgRG1uTWFyc2hhbGxlciwgZ2V0TWFyc2hhbGxlciB9IGZyb20gXCJAa2llLXRvb2xzL2Rtbi1tYXJzaGFsbGVyXCI7XG5pbXBvcnQgeyBub3JtYWxpemUsIE5vcm1hbGl6ZWQgfSBmcm9tIFwiQGtpZS10b29scy9kbW4tbWFyc2hhbGxlci9kaXN0L25vcm1hbGl6YXRpb24vbm9ybWFsaXplXCI7XG5pbXBvcnQgeyBhdmFpbGFibGVNb2RlbHNCeVBhdGgsIG1vZGVsc0J5TmFtZXNwYWNlIH0gZnJvbSBcIi4vYXZhaWxhYmxlTW9kZWxzVG9JbmNsdWRlXCI7XG5pbXBvcnQgeyBnZW5lcmF0ZUVtcHR5RG1uMTUgfSBmcm9tIFwiLi4vbWlzYy9lbXB0eS9FbXB0eS5zdG9yaWVzXCI7XG5pbXBvcnQgeyBsb2FuUHJlUXVhbGlmaWNhdGlvbkRtbiB9IGZyb20gXCIuLi91c2VDYXNlcy9sb2FuUHJlUXVhbGlmaWNhdGlvbi9Mb2FuUHJlUXVhbGlmaWNhdGlvbi5zdG9yaWVzXCI7XG5pbXBvcnQgeyBEbW5FZGl0b3JXcmFwcGVyIH0gZnJvbSBcIi4uL2RtbkVkaXRvclN0b3JpZXNXcmFwcGVyXCI7XG5pbXBvcnQgeyBEbW5FZGl0b3JQcm9wcywgRXh0ZXJuYWxNb2RlbHNJbmRleCwgT25EbW5Nb2RlbENoYW5nZSwgT25SZXF1ZXN0RXh0ZXJuYWxNb2RlbEJ5UGF0aCwgT25SZXF1ZXN0RXh0ZXJuYWxNb2RlbHNBdmFpbGFibGVUb0luY2x1ZGUsIE9uUmVxdWVzdFRvSnVtcFRvUGF0aCB9IGZyb20gXCIuLi8uLi9zcmMvRG1uRWRpdG9yXCI7XG5jb25zdCBpbml0aWFsTW9kZWwgPSBnZW5lcmF0ZUVtcHR5RG1uMTUoKTtcbmNvbnN0IGVtcHR5RHJkID0gYDw/eG1sIHZlcnNpb249XCIxLjBcIiBlbmNvZGluZz1cIlVURi04XCIgPz5cbjxkZWZpbml0aW9ucyB4bWxucz1cImh0dHBzOi8vd3d3Lm9tZy5vcmcvc3BlYy9ETU4vMjAyMzAzMjQvTU9ERUwvXCIgeG1sbnM6ZG1uZGk9XCJodHRwczovL3d3dy5vbWcub3JnL3NwZWMvRE1OLzIwMjMwMzI0L0RNTkRJL1wiIHhtbG5zOmRjPVwiaHR0cDovL3d3dy5vbWcub3JnL3NwZWMvRE1OLzIwMTgwNTIxL0RDL1wiIHhtbG5zOmRpPVwiaHR0cDovL3d3dy5vbWcub3JnL3NwZWMvRE1OLzIwMTgwNTIxL0RJL1wiIHhtbG5zOmtpZT1cImh0dHBzOi8va2llLm9yZy9kbW4vZXh0ZW5zaW9ucy8xLjBcIiB4bWxuczppbmNsdWRlZDA9XCJodHRwczovL2tpZS5vcmcvZG1uL18xMjVBNTQ3NS02NUNFLTQ1NzQtODIyQy05Q0IyMjY4RjEzOTNcIiBleHByZXNzaW9uTGFuZ3VhZ2U9XCJodHRwczovL3d3dy5vbWcub3JnL3NwZWMvRE1OLzIwMjMwMzI0L0ZFRUwvXCIgbmFtZXNwYWNlPVwiaHR0cHM6Ly9raWUub3JnL2Rtbi9fMkI4NDlENjgtRTgxNi00MkY5LTg5OEEtMTkzOEI1RDZCMjk3XCIgaWQ9XCJfQTA2NjIzRjctNkYwMy00OUI5LTkyMTUtQjlGOTk4MTdDM0VEXCIgbmFtZT1cIkRNTl80OEE4RDA2OC1EQkYzLTRBRTYtOTRFMi00OTZERkM0QjNFNDZcIj5cbiAgPGlucHV0RGF0YSBuYW1lPVwiTXkgSW5wdXRcIiBpZD1cIl85MzkyQjAxRS04QzZCLTRFMjktOUNDNC0yMUMxNkVGQjJGNkJcIj5cbiAgICA8dmFyaWFibGUgbmFtZT1cIk15IElucHV0XCIgaWQ9XCJfOTQ4M0JBQkYtNzA4QS00MzU3LUFENzgtMThDN0E3NzBFMjkyXCIgdHlwZVJlZj1cIiZsdDtVbmRlZmluZWQmZ3Q7XCIgLz5cbiAgPC9pbnB1dERhdGE+XG4gIDxkZWNpc2lvbiBuYW1lPVwiTXkgRGVjaXNpb25cIiBpZD1cIl84M0EwQzZGQS0wOTUxLTRFMUUtOURGMS03NEE5RDJBOTVFOThcIj5cbiAgICA8dmFyaWFibGUgaWQ9XCJfMDFDNzBGNDUtMjk1NS00NzRBLTlGQUMtMTQ5NjdBQkFGNDc1XCIgdHlwZVJlZj1cIiZsdDtVbmRlZmluZWQmZ3Q7XCIgbmFtZT1cIk15IERlY2lzaW9uXCIgLz5cbiAgICA8aW5mb3JtYXRpb25SZXF1aXJlbWVudCBpZD1cIl9FNEZFNzhCQi05OTZCLTQ2QzQtOUY5Qi0wMTgxNjNFOTAxN0FcIj5cbiAgICAgIDxyZXF1aXJlZElucHV0IGhyZWY9XCIjXzkzOTJCMDFFLThDNkItNEUyOS05Q0M0LTIxQzE2RUZCMkY2QlwiIC8+XG4gICAgPC9pbmZvcm1hdGlvblJlcXVpcmVtZW50PlxuICAgIDxpbmZvcm1hdGlvblJlcXVpcmVtZW50IGlkPVwiX0U1MkQ1QzM0LTE3MkUtNEUzMy1CMkZFLTdCMkE3QUZERjUyQ1wiPlxuICAgICAgPHJlcXVpcmVkSW5wdXQgaHJlZj1cIiNfNDA3MkFEQzMtRTdDRi00RDIyLTgxNzktNzQ5NEVFMjIxNTdDXCIgLz5cbiAgICA8L2luZm9ybWF0aW9uUmVxdWlyZW1lbnQ+XG4gIDwvZGVjaXNpb24+XG4gIDxpbnB1dERhdGEgbmFtZT1cIkFub3RoZXIgSW5wdXRcIiBpZD1cIl80MDcyQURDMy1FN0NGLTREMjItODE3OS03NDk0RUUyMjE1N0NcIj5cbiAgICA8dmFyaWFibGUgbmFtZT1cIkFub3RoZXIgSW5wdXRcIiBpZD1cIl83NDkwODc2Qi04RkE5LTRGRUMtQjA3OC03NTYzRUYwNEY1MkJcIiB0eXBlUmVmPVwiJmx0O1VuZGVmaW5lZCZndDtcIiAvPlxuICA8L2lucHV0RGF0YT5cbjwvZGVmaW5pdGlvbnM+XG5gO1xuZnVuY3Rpb24gRGV2UGxheWdyb3VuZChhcmdzOiBEbW5FZGl0b3JQcm9wcykge1xuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlPHtcbiAgICBtYXJzaGFsbGVyOiBEbW5NYXJzaGFsbGVyO1xuICAgIHN0YWNrOiBOb3JtYWxpemVkPERtbkxhdGVzdE1vZGVsPltdO1xuICAgIHBvaW50ZXI6IG51bWJlcjtcbiAgfT4oKCkgPT4ge1xuICAgIGNvbnN0IGluaXRpYWxEbW5NYXJzaGFsbGVyID0gZ2V0TWFyc2hhbGxlcihpbml0aWFsTW9kZWwsIHtcbiAgICAgIHVwZ3JhZGVUbzogXCJsYXRlc3RcIlxuICAgIH0pO1xuICAgIHJldHVybiB7XG4gICAgICBtYXJzaGFsbGVyOiBpbml0aWFsRG1uTWFyc2hhbGxlcixcbiAgICAgIHN0YWNrOiBbbm9ybWFsaXplKGluaXRpYWxEbW5NYXJzaGFsbGVyLnBhcnNlci5wYXJzZSgpKV0sXG4gICAgICBwb2ludGVyOiAwXG4gICAgfTtcbiAgfSk7XG4gIGNvbnN0IG9uRHJvcCA9IHVzZUNhbGxiYWNrKChlOiBSZWFjdC5EcmFnRXZlbnQpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIkRNTiBFZGl0b3IgOjogUGxheWdyb3VuZCA6OiBGaWxlKHMpIGRyb3BwZWQhIE9wZW5pbmcgaXQuXCIpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTsgLy8gTmVjZXNzYXJ5IHRvIGRpc2FibGUgdGhlIGJyb3dzZXIncyBkZWZhdWx0ICdvbkRyb3AnIGhhbmRsaW5nLlxuXG4gICAgaWYgKGUuZGF0YVRyYW5zZmVyLml0ZW1zKSB7XG4gICAgICAvLyBVc2UgRGF0YVRyYW5zZmVySXRlbUxpc3QgaW50ZXJmYWNlIHRvIGFjY2VzcyB0aGUgZmlsZShzKVxuICAgICAgWy4uLmUuZGF0YVRyYW5zZmVyLml0ZW1zXS5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XG4gICAgICAgIGlmIChpdGVtLmtpbmQgPT09IFwiZmlsZVwiKSB7XG4gICAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgICByZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKHtcbiAgICAgICAgICAgIHRhcmdldFxuICAgICAgICAgIH0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1hcnNoYWxsZXIgPSBnZXRNYXJzaGFsbGVyKHRhcmdldD8ucmVzdWx0IGFzIHN0cmluZywge1xuICAgICAgICAgICAgICB1cGdyYWRlVG86IFwibGF0ZXN0XCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc2V0U3RhdGUoe1xuICAgICAgICAgICAgICBtYXJzaGFsbGVyLFxuICAgICAgICAgICAgICBzdGFjazogW25vcm1hbGl6ZShtYXJzaGFsbGVyLnBhcnNlci5wYXJzZSgpKV0sXG4gICAgICAgICAgICAgIHBvaW50ZXI6IDBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJlYWRlci5yZWFkQXNUZXh0KGl0ZW0uZ2V0QXNGaWxlKCkgYXMgYW55KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9LCBbXSk7XG4gIGNvbnN0IG9uRHJhZ092ZXIgPSB1c2VDYWxsYmFjaygoZTogUmVhY3QuRHJhZ0V2ZW50KSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAvLyBOZWNlc3NhcnkgdG8gZGlzYWJsZSB0aGUgYnJvd3NlcidzIGRlZmF1bHQgJ29uRHJvcCcgaGFuZGxpbmcuXG4gIH0sIFtdKTtcbiAgY29uc3QgcmVzZXQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgY29uc3QgbWFyc2hhbGxlciA9IGdldE1hcnNoYWxsZXIoZ2VuZXJhdGVFbXB0eURtbjE1KCksIHtcbiAgICAgIHVwZ3JhZGVUbzogXCJsYXRlc3RcIlxuICAgIH0pO1xuICAgIHNldFN0YXRlKHtcbiAgICAgIG1hcnNoYWxsZXIsXG4gICAgICBzdGFjazogW25vcm1hbGl6ZShtYXJzaGFsbGVyLnBhcnNlci5wYXJzZSgpKV0sXG4gICAgICBwb2ludGVyOiAwXG4gICAgfSk7XG4gIH0sIFtdKTtcbiAgY29uc3QgY3VycmVudE1vZGVsID0gc3RhdGUuc3RhY2tbc3RhdGUucG9pbnRlcl07XG4gIGNvbnN0IGRvd25sb2FkUmVmID0gdXNlUmVmPEhUTUxBbmNob3JFbGVtZW50PihudWxsKTtcbiAgY29uc3QgZG93bmxvYWRBc1htbCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBpZiAoZG93bmxvYWRSZWYuY3VycmVudCkge1xuICAgICAgY29uc3QgZmlsZUJsb2IgPSBuZXcgQmxvYihbc3RhdGUubWFyc2hhbGxlci5idWlsZGVyLmJ1aWxkKGN1cnJlbnRNb2RlbCldLCB7XG4gICAgICAgIHR5cGU6IFwidGV4dC94bWxcIlxuICAgICAgfSk7XG4gICAgICBkb3dubG9hZFJlZi5jdXJyZW50LmRvd25sb2FkID0gYGRtbi0ke2NyZWF0ZUlkKDEwKX0uZG1uYDtcbiAgICAgIGRvd25sb2FkUmVmLmN1cnJlbnQuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZUJsb2IpO1xuICAgICAgZG93bmxvYWRSZWYuY3VycmVudC5jbGljaygpO1xuICAgIH1cbiAgfSwgW2N1cnJlbnRNb2RlbCwgc3RhdGUubWFyc2hhbGxlci5idWlsZGVyXSk7XG4gIGNvbnN0IGNvcHlBc1htbCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChzdGF0ZS5tYXJzaGFsbGVyLmJ1aWxkZXIuYnVpbGQoY3VycmVudE1vZGVsKSk7XG4gIH0sIFtjdXJyZW50TW9kZWwsIHN0YXRlLm1hcnNoYWxsZXIuYnVpbGRlcl0pO1xuICBjb25zdCB1bmRvID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldFN0YXRlKHByZXYgPT4gKHtcbiAgICAgIC4uLnByZXYsXG4gICAgICBwb2ludGVyOiBNYXRoLm1heCgwLCBwcmV2LnBvaW50ZXIgLSAxKVxuICAgIH0pKTtcbiAgfSwgW10pO1xuICBjb25zdCByZWRvID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldFN0YXRlKHByZXYgPT4gKHtcbiAgICAgIC4uLnByZXYsXG4gICAgICBwb2ludGVyOiBNYXRoLm1pbihwcmV2LnN0YWNrLmxlbmd0aCAtIDEsIHByZXYucG9pbnRlciArIDEpXG4gICAgfSkpO1xuICB9LCBbXSk7XG4gIGNvbnN0IG9uTW9kZWxDaGFuZ2UgPSB1c2VDYWxsYmFjazxPbkRtbk1vZGVsQ2hhbmdlPihtb2RlbCA9PiB7XG4gICAgc2V0U3RhdGUocHJldiA9PiB7XG4gICAgICBjb25zdCBuZXdTdGFjayA9IHByZXYuc3RhY2suc2xpY2UoMCwgcHJldi5wb2ludGVyICsgMSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5wcmV2LFxuICAgICAgICBzdGFjazogWy4uLm5ld1N0YWNrLCBtb2RlbF0sXG4gICAgICAgIHBvaW50ZXI6IG5ld1N0YWNrLmxlbmd0aFxuICAgICAgfTtcbiAgICB9KTtcbiAgfSwgW10pO1xuICBjb25zdCBvblNlbGVjdE1vZGVsID0gdXNlQ2FsbGJhY2sobmV3TW9kZWwgPT4ge1xuICAgIG9uTW9kZWxDaGFuZ2Uobm9ybWFsaXplKGdldE1hcnNoYWxsZXIobmV3TW9kZWwsIHtcbiAgICAgIHVwZ3JhZGVUbzogXCJsYXRlc3RcIlxuICAgIH0pLnBhcnNlci5wYXJzZSgpKSk7XG4gIH0sIFtvbk1vZGVsQ2hhbmdlXSk7XG4gIGNvbnN0IG9uUmVxdWVzdFRvSnVtcFRvUGF0aCA9IHVzZUNhbGxiYWNrPE9uUmVxdWVzdFRvSnVtcFRvUGF0aD4ocGF0aCA9PiB7XG4gICAgYWxlcnQoXCJKdW1waW5nIHRvIGZpbGUgXCIgKyBwYXRoKTtcbiAgfSwgW10pO1xuICBjb25zdCBleHRlcm5hbE1vZGVsc0J5TmFtZXNwYWNlID0gdXNlTWVtbzxFeHRlcm5hbE1vZGVsc0luZGV4PigoKSA9PiB7XG4gICAgcmV0dXJuIChjdXJyZW50TW9kZWwuZGVmaW5pdGlvbnMuaW1wb3J0ID8/IFtdKS5yZWR1Y2UoKGFjYywgaSkgPT4ge1xuICAgICAgYWNjW2lbXCJAX25hbWVzcGFjZVwiXV0gPSBtb2RlbHNCeU5hbWVzcGFjZVtpW1wiQF9uYW1lc3BhY2VcIl1dO1xuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB7fSBhcyBFeHRlcm5hbE1vZGVsc0luZGV4KTtcbiAgfSwgW2N1cnJlbnRNb2RlbC5kZWZpbml0aW9ucy5pbXBvcnRdKTtcbiAgY29uc3Qgb25SZXF1ZXN0RXh0ZXJuYWxNb2RlbEJ5UGF0aCA9IHVzZUNhbGxiYWNrPE9uUmVxdWVzdEV4dGVybmFsTW9kZWxCeVBhdGg+KGFzeW5jIHBhdGggPT4ge1xuICAgIHJldHVybiBhdmFpbGFibGVNb2RlbHNCeVBhdGhbcGF0aF0gPz8gbnVsbDtcbiAgfSwgW10pO1xuICBjb25zdCBvblJlcXVlc3RFeHRlcm5hbE1vZGVsc0F2YWlsYWJsZVRvSW5jbHVkZSA9IHVzZUNhbGxiYWNrPE9uUmVxdWVzdEV4dGVybmFsTW9kZWxzQXZhaWxhYmxlVG9JbmNsdWRlPihhc3luYyAoKSA9PiB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGF2YWlsYWJsZU1vZGVsc0J5UGF0aCk7XG4gIH0sIFtdKTtcbiAgY29uc3QgaXNVbmRvRW5hYmxlZCA9IHN0YXRlLnBvaW50ZXIgPiAwO1xuICBjb25zdCBpc1JlZG9FbmFibGVkID0gc3RhdGUucG9pbnRlciAhPT0gc3RhdGUuc3RhY2subGVuZ3RoIC0gMTtcbiAgcmV0dXJuIDw+XG4gICAgICB7Y3VycmVudE1vZGVsICYmIDxkaXYgc3R5bGU9e3tcbiAgICAgIHdpZHRoOiBcIjEwMHZ3XCIsXG4gICAgICBoZWlnaHQ6IFwiMTAwdmhcIlxuICAgIH19PlxuICAgICAgICAgIDxQYWdlIG9uRHJhZ092ZXI9e29uRHJhZ092ZXJ9IG9uRHJvcD17b25Ecm9wfT5cbiAgICAgICAgICAgIDxQYWdlU2VjdGlvbiB2YXJpYW50PXtcImxpZ2h0XCJ9IGlzRmlsbGVkPXtmYWxzZX0gcGFkZGluZz17e1xuICAgICAgICAgIGRlZmF1bHQ6IFwicGFkZGluZ1wiXG4gICAgICAgIH19PlxuICAgICAgICAgICAgICA8RmxleCBqdXN0aWZ5Q29udGVudD17e1xuICAgICAgICAgICAgZGVmYXVsdDogXCJqdXN0aWZ5Q29udGVudFNwYWNlQmV0d2VlblwiXG4gICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgPEZsZXhJdGVtPlxuICAgICAgICAgICAgICAgICAgPGg1PihEcmFnICYgZHJvcCBhIGZpbGUgYW55d2hlcmUgdG8gb3BlbiBpdCk8L2g1PlxuICAgICAgICAgICAgICAgIDwvRmxleEl0ZW0+XG4gICAgICAgICAgICAgICAgPEZsZXhJdGVtIHNocmluaz17e1xuICAgICAgICAgICAgICBkZWZhdWx0OiBcInNocmlua1wiXG4gICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gb25TZWxlY3RNb2RlbChsb2FuUHJlUXVhbGlmaWNhdGlvbkRtbil9PkV4OiBMb2FuIFByZSBRdWFsaWZpY2F0aW9uPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAmbmJzcDsgJm5ic3A7XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IG9uU2VsZWN0TW9kZWwoZW1wdHlEcmQpfT5FeDogQXV0b2xheW91dDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgJm5ic3A7ICZuYnNwOyB8ICZuYnNwOyAmbmJzcDtcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gZGlzYWJsZWQ9eyFpc1VuZG9FbmFibGVkfSBzdHlsZT17e1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IGlzVW5kb0VuYWJsZWQgPyAxIDogMC41XG4gICAgICAgICAgICAgIH19IG9uQ2xpY2s9e3VuZG99PlxuICAgICAgICAgICAgICAgICAgICB7YFVuZG8gKCR7c3RhdGUucG9pbnRlcn0pYH1cbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgJm5ic3A7ICZuYnNwO1xuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBkaXNhYmxlZD17IWlzUmVkb0VuYWJsZWR9IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogaXNSZWRvRW5hYmxlZCA/IDEgOiAwLjVcbiAgICAgICAgICAgICAgfX0gb25DbGljaz17cmVkb30+XG4gICAgICAgICAgICAgICAgICAgIHtgUmVkbyAoJHtzdGF0ZS5zdGFjay5sZW5ndGggLSAxIC0gc3RhdGUucG9pbnRlcn0pYH1cbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgJm5ic3A7ICZuYnNwOyB8ICZuYnNwOyAmbmJzcDtcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17cmVzZXR9PlJlc2V0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAmbmJzcDsgJm5ic3A7XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2NvcHlBc1htbH0+Q29weSBYTUw8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICZuYnNwOyAmbmJzcDtcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17ZG93bmxvYWRBc1htbH0+RG93bmxvYWQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L0ZsZXhJdGVtPlxuICAgICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICAgIDxhIHJlZj17ZG93bmxvYWRSZWZ9IC8+XG4gICAgICAgICAgICA8L1BhZ2VTZWN0aW9uPlxuICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgICA8UGFnZVNlY3Rpb24gdmFyaWFudD17XCJsaWdodFwifSBpc0ZpbGxlZD17dHJ1ZX0gaGFzT3ZlcmZsb3dTY3JvbGw9e3RydWV9IGFyaWEtbGFiZWw9e1wiZWRpdG9yXCJ9IHBhZGRpbmc9e3tcbiAgICAgICAgICBkZWZhdWx0OiBcIm5vUGFkZGluZ1wiXG4gICAgICAgIH19PlxuICAgICAgICAgICAgICB7RG1uRWRpdG9yV3JhcHBlcih7XG4gICAgICAgICAgICBtb2RlbDogY3VycmVudE1vZGVsLFxuICAgICAgICAgICAgb3JpZ2luYWxWZXJzaW9uOiBhcmdzLm9yaWdpbmFsVmVyc2lvbixcbiAgICAgICAgICAgIG9uTW9kZWxDaGFuZ2UsXG4gICAgICAgICAgICBvblJlcXVlc3RFeHRlcm5hbE1vZGVsQnlQYXRoLFxuICAgICAgICAgICAgb25SZXF1ZXN0RXh0ZXJuYWxNb2RlbHNBdmFpbGFibGVUb0luY2x1ZGUsXG4gICAgICAgICAgICBleHRlcm5hbE1vZGVsc0J5TmFtZXNwYWNlOiBleHRlcm5hbE1vZGVsc0J5TmFtZXNwYWNlLFxuICAgICAgICAgICAgZXh0ZXJuYWxDb250ZXh0TmFtZTogYXJncy5leHRlcm5hbENvbnRleHROYW1lLFxuICAgICAgICAgICAgZXh0ZXJuYWxDb250ZXh0RGVzY3JpcHRpb246IGFyZ3MuZXh0ZXJuYWxDb250ZXh0RGVzY3JpcHRpb24sXG4gICAgICAgICAgICB2YWxpZGF0aW9uTWVzc2FnZXM6IGFyZ3MudmFsaWRhdGlvbk1lc3NhZ2VzLFxuICAgICAgICAgICAgZXZhbHVhdGlvblJlc3VsdHNCeU5vZGVJZDogYXJncy5ldmFsdWF0aW9uUmVzdWx0c0J5Tm9kZUlkLFxuICAgICAgICAgICAgaXNzdWVUcmFja2VySHJlZjogYXJncy5pc3N1ZVRyYWNrZXJIcmVmLFxuICAgICAgICAgICAgb25SZXF1ZXN0VG9KdW1wVG9QYXRoLFxuICAgICAgICAgICAgaXNSZWFkT25seTogYXJncy5pc1JlYWRPbmx5XG4gICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L1BhZ2VTZWN0aW9uPlxuICAgICAgICAgIDwvUGFnZT5cbiAgICAgICAgPC9kaXY+fVxuICAgIDwvPjtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUlkKGxlbmd0aDogbnVtYmVyKSB7XG4gIGxldCByZXN1bHQgPSBcIlwiO1xuICBjb25zdCBjaGFyYWN0ZXJzID0gXCJhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODlcIjtcbiAgY29uc3QgY2hhcmFjdGVyc0xlbmd0aCA9IGNoYXJhY3RlcnMubGVuZ3RoO1xuICBsZXQgY291bnRlciA9IDA7XG4gIHdoaWxlIChjb3VudGVyIDwgbGVuZ3RoKSB7XG4gICAgcmVzdWx0ICs9IGNoYXJhY3RlcnMuY2hhckF0KE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNoYXJhY3RlcnNMZW5ndGgpKTtcbiAgICBjb3VudGVyICs9IDE7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLy8gTW9yZSBvbiBob3cgdG8gc2V0IHVwIHN0b3JpZXMgYXQ6IGh0dHBzOi8vc3Rvcnlib29rLmpzLm9yZy9kb2NzL3dyaXRpbmctc3RvcmllcyNkZWZhdWx0LWV4cG9ydFxuY29uc3QgbWV0YTogTWV0YTx0eXBlb2YgRGV2UGxheWdyb3VuZD4gPSB7XG4gIHRpdGxlOiBcIkRldi9QbGF5Z3JvdW5kXCIsXG4gIGNvbXBvbmVudDogRGV2UGxheWdyb3VuZFxufTtcbmV4cG9ydCBkZWZhdWx0IG1ldGE7XG50eXBlIFN0b3J5ID0gU3RvcnlPYmo8dHlwZW9mIERldlBsYXlncm91bmQ+O1xuXG4vLyBNb3JlIG9uIHdyaXRpbmcgc3RvcmllcyB3aXRoIGFyZ3M6IGh0dHBzOi8vc3Rvcnlib29rLmpzLm9yZy9kb2NzL3dyaXRpbmctc3Rvcmllcy9hcmdzXG5leHBvcnQgY29uc3QgUGxheWdyb3VuZDogU3RvcnkgPSB7XG4gIHJlbmRlcjogYXJncyA9PiBEZXZQbGF5Z3JvdW5kKGFyZ3MpLFxuICBhcmdzOiB7XG4gICAgbW9kZWw6IGdldE1hcnNoYWxsZXIoaW5pdGlhbE1vZGVsLCB7XG4gICAgICB1cGdyYWRlVG86IFwibGF0ZXN0XCJcbiAgICB9KS5wYXJzZXIucGFyc2UoKSxcbiAgICBvcmlnaW5hbFZlcnNpb246IFwiMS41XCIsXG4gICAgZXZhbHVhdGlvblJlc3VsdHNCeU5vZGVJZDogbmV3IE1hcCgpLFxuICAgIGV4dGVybmFsQ29udGV4dERlc2NyaXB0aW9uOiBcIllvdSdyZSB1c2luZyB0aGUgRE1OIFBsYXlncm91bmQsIHNvIHRoZXJlJ3Mgb25seSB0d28gc2ltcGxlIGV4dGVybmFsIG1vZGVscyB0aGF0IGNhbiBiZSBpbmNsdWRlZC5cIixcbiAgICBleHRlcm5hbENvbnRleHROYW1lOiBcIlBsYXlncm91bmRcIixcbiAgICBleHRlcm5hbE1vZGVsc0J5TmFtZXNwYWNlOiB7fSxcbiAgICBpc3N1ZVRyYWNrZXJIcmVmOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9hcGFjaGUvaW5jdWJhdG9yLWtpZS1pc3N1ZXMvaXNzdWVzL25ld1wiLFxuICAgIHZhbGlkYXRpb25NZXNzYWdlczoge30sXG4gICAgaXNSZWFkT25seTogZmFsc2VcbiAgfVxufTtcblBsYXlncm91bmQucGFyYW1ldGVycyA9IHtcbiAgLi4uUGxheWdyb3VuZC5wYXJhbWV0ZXJzLFxuICBkb2NzOiB7XG4gICAgLi4uUGxheWdyb3VuZC5wYXJhbWV0ZXJzPy5kb2NzLFxuICAgIHNvdXJjZToge1xuICAgICAgb3JpZ2luYWxTb3VyY2U6IFwie1xcbiAgcmVuZGVyOiBhcmdzID0+IERldlBsYXlncm91bmQoYXJncyksXFxuICBhcmdzOiB7XFxuICAgIG1vZGVsOiBnZXRNYXJzaGFsbGVyKGluaXRpYWxNb2RlbCwge1xcbiAgICAgIHVwZ3JhZGVUbzogXFxcImxhdGVzdFxcXCJcXG4gICAgfSkucGFyc2VyLnBhcnNlKCksXFxuICAgIG9yaWdpbmFsVmVyc2lvbjogXFxcIjEuNVxcXCIsXFxuICAgIGV2YWx1YXRpb25SZXN1bHRzQnlOb2RlSWQ6IG5ldyBNYXAoKSxcXG4gICAgZXh0ZXJuYWxDb250ZXh0RGVzY3JpcHRpb246IFxcXCJZb3UncmUgdXNpbmcgdGhlIERNTiBQbGF5Z3JvdW5kLCBzbyB0aGVyZSdzIG9ubHkgdHdvIHNpbXBsZSBleHRlcm5hbCBtb2RlbHMgdGhhdCBjYW4gYmUgaW5jbHVkZWQuXFxcIixcXG4gICAgZXh0ZXJuYWxDb250ZXh0TmFtZTogXFxcIlBsYXlncm91bmRcXFwiLFxcbiAgICBleHRlcm5hbE1vZGVsc0J5TmFtZXNwYWNlOiB7fSxcXG4gICAgaXNzdWVUcmFja2VySHJlZjogXFxcImh0dHBzOi8vZ2l0aHViLmNvbS9hcGFjaGUvaW5jdWJhdG9yLWtpZS1pc3N1ZXMvaXNzdWVzL25ld1xcXCIsXFxuICAgIHZhbGlkYXRpb25NZXNzYWdlczoge30sXFxuICAgIGlzUmVhZE9ubHk6IGZhbHNlXFxuICB9XFxufVwiLFxuICAgICAgLi4uUGxheWdyb3VuZC5wYXJhbWV0ZXJzPy5kb2NzPy5zb3VyY2VcbiAgICB9XG4gIH1cbn07IiwiLypcbiAqIExpY2Vuc2VkIHRvIHRoZSBBcGFjaGUgU29mdHdhcmUgRm91bmRhdGlvbiAoQVNGKSB1bmRlciBvbmVcbiAqIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiAgU2VlIHRoZSBOT1RJQ0UgZmlsZVxuICogZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb25cbiAqIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLiAgVGhlIEFTRiBsaWNlbnNlcyB0aGlzIGZpbGVcbiAqIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGVcbiAqIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuICogd2l0aCB0aGUgTGljZW5zZS4gIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsXG4gKiBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxuICogXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcbiAqIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZVxuICogc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9uc1xuICogdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgZ2V0TWFyc2hhbGxlciB9IGZyb20gXCJAa2llLXRvb2xzL2Rtbi1tYXJzaGFsbGVyXCI7XG5pbXBvcnQgeyBub3JtYWxpemUgfSBmcm9tIFwiQGtpZS10b29scy9kbW4tbWFyc2hhbGxlci9kaXN0L25vcm1hbGl6YXRpb24vbm9ybWFsaXplXCI7XG5pbXBvcnQgeyBYTUwyUE1NTCB9IGZyb20gXCJAa2llLXRvb2xzL3BtbWwtZWRpdG9yLW1hcnNoYWxsZXJcIjtcbmltcG9ydCAqIGFzIERtbkVkaXRvciBmcm9tIFwiLi4vLi4vc3JjL0RtbkVkaXRvclwiO1xuaW1wb3J0IHsgZ2V0UG1tbE5hbWVzcGFjZSB9IGZyb20gXCIuLi8uLi9zcmMvcG1tbC9wbW1sXCI7XG5pbXBvcnQgeyBzdW1Ca20sIHN1bURpZmZEcywgdGVzdFRyZWVQbW1sIH0gZnJvbSBcIi4vZXh0ZXJuYWxNb2RlbHNcIjtcblxuZXhwb3J0IGNvbnN0IHN1bUJrbU1vZGVsID0gbm9ybWFsaXplKGdldE1hcnNoYWxsZXIoc3VtQmttLCB7IHVwZ3JhZGVUbzogXCJsYXRlc3RcIiB9KS5wYXJzZXIucGFyc2UoKSk7XG5leHBvcnQgY29uc3Qgc3VtRGlmZkRzTW9kZWwgPSBub3JtYWxpemUoZ2V0TWFyc2hhbGxlcihzdW1EaWZmRHMsIHsgdXBncmFkZVRvOiBcImxhdGVzdFwiIH0pLnBhcnNlci5wYXJzZSgpKTtcbmV4cG9ydCBjb25zdCB0ZXN0VHJlZVBtbWxNb2RlbCA9IFhNTDJQTU1MKHRlc3RUcmVlUG1tbCk7XG5cbmV4cG9ydCBjb25zdCBhdmFpYWJsZU1vZGVsczogRG1uRWRpdG9yLkV4dGVybmFsTW9kZWxbXSA9IFtcbiAge1xuICAgIHR5cGU6IFwiZG1uXCIsXG4gICAgbW9kZWw6IHN1bUJrbU1vZGVsLFxuICAgIHN2ZzogXCJcIixcbiAgICBub3JtYWxpemVkUG9zaXhQYXRoUmVsYXRpdmVUb1RoZU9wZW5GaWxlOiBcInBsYXlncm91bmQvYXZhaWxhYmxlLW1vZGVscy10by1pbmNsdWRlL3N1bUJrbS5kbW5cIixcbiAgfSxcbiAge1xuICAgIHR5cGU6IFwiZG1uXCIsXG4gICAgbW9kZWw6IHN1bURpZmZEc01vZGVsLFxuICAgIHN2ZzogXCJcIixcbiAgICBub3JtYWxpemVkUG9zaXhQYXRoUmVsYXRpdmVUb1RoZU9wZW5GaWxlOiBcInBsYXlncm91bmQvYXZhaWxhYmxlLW1vZGVscy10by1pbmNsdWRlL3N1bURpZmZEcy5kbW5cIixcbiAgfSxcbiAge1xuICAgIHR5cGU6IFwiZG1uXCIsXG4gICAgbW9kZWw6IG5vcm1hbGl6ZShcbiAgICAgIGdldE1hcnNoYWxsZXIoYDxkZWZpbml0aW9ucyB4bWxucz1cImh0dHBzOi8vd3d3Lm9tZy5vcmcvc3BlYy9ETU4vMjAyMzAzMjQvTU9ERUwvXCIgLz5gLCB7XG4gICAgICAgIHVwZ3JhZGVUbzogXCJsYXRlc3RcIixcbiAgICAgIH0pLnBhcnNlci5wYXJzZSgpXG4gICAgKSxcbiAgICBzdmc6IFwiXCIsXG4gICAgbm9ybWFsaXplZFBvc2l4UGF0aFJlbGF0aXZlVG9UaGVPcGVuRmlsZTogXCJwbGF5Z3JvdW5kL2F2YWlsYWJsZS1tb2RlbHMtdG8taW5jbHVkZS9lbXB0eS5kbW5cIixcbiAgfSxcbiAge1xuICAgIHR5cGU6IFwicG1tbFwiLFxuICAgIG1vZGVsOiB0ZXN0VHJlZVBtbWxNb2RlbCxcbiAgICBub3JtYWxpemVkUG9zaXhQYXRoUmVsYXRpdmVUb1RoZU9wZW5GaWxlOiBcInBsYXlncm91bmQvYXZhaWxhYmxlLW1vZGVscy10by1pbmNsdWRlL3Rlc3RUcmVlLnBtbWxcIixcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBhdmFpbGFibGVNb2RlbHNCeVBhdGg6IFJlY29yZDxzdHJpbmcsIERtbkVkaXRvci5FeHRlcm5hbE1vZGVsPiA9IE9iamVjdC52YWx1ZXMoYXZhaWFibGVNb2RlbHMpLnJlZHVjZShcbiAgKGFjYywgdikgPT4ge1xuICAgIGFjY1t2Lm5vcm1hbGl6ZWRQb3NpeFBhdGhSZWxhdGl2ZVRvVGhlT3BlbkZpbGVdID0gdjtcbiAgICByZXR1cm4gYWNjO1xuICB9LFxuICB7fSBhcyBSZWNvcmQ8c3RyaW5nLCBEbW5FZGl0b3IuRXh0ZXJuYWxNb2RlbD5cbik7XG5cbmV4cG9ydCBjb25zdCBtb2RlbHNCeU5hbWVzcGFjZSA9IE9iamVjdC52YWx1ZXMoYXZhaWFibGVNb2RlbHMpLnJlZHVjZSgoYWNjLCB2KSA9PiB7XG4gIGlmICh2LnR5cGUgPT09IFwiZG1uXCIpIHtcbiAgICBhY2Nbdi5tb2RlbC5kZWZpbml0aW9uc1tcIkBfbmFtZXNwYWNlXCJdXSA9IHY7XG4gIH0gZWxzZSBpZiAodi50eXBlID09PSBcInBtbWxcIikge1xuICAgIGFjY1tnZXRQbW1sTmFtZXNwYWNlKHsgbm9ybWFsaXplZFBvc2l4UGF0aFJlbGF0aXZlVG9UaGVPcGVuRmlsZTogdi5ub3JtYWxpemVkUG9zaXhQYXRoUmVsYXRpdmVUb1RoZU9wZW5GaWxlIH0pXSA9IHY7XG4gIH1cbiAgcmV0dXJuIGFjYztcbn0sIHt9IGFzIERtbkVkaXRvci5FeHRlcm5hbE1vZGVsc0luZGV4KTtcbiIsIi8qXG4gKiBMaWNlbnNlZCB0byB0aGUgQXBhY2hlIFNvZnR3YXJlIEZvdW5kYXRpb24gKEFTRikgdW5kZXIgb25lXG4gKiBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gIFNlZSB0aGUgTk9USUNFIGZpbGVcbiAqIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uXG4gKiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC4gIFRoZSBBU0YgbGljZW5zZXMgdGhpcyBmaWxlXG4gKiB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlXG4gKiBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2VcbiAqIHdpdGggdGhlIExpY2Vuc2UuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLFxuICogc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cbiAqIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXG4gKiBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGVcbiAqIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnNcbiAqIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmV4cG9ydCBjb25zdCBzdW1Ca20gPSBgPGRlZmluaXRpb25zIFxuICB4bWxucz1cImh0dHBzOi8vd3d3Lm9tZy5vcmcvc3BlYy9ETU4vMjAyMzAzMjQvTU9ERUwvXCJcbiAgeG1sbnM6ZG1uZGk9XCJodHRwczovL3d3dy5vbWcub3JnL3NwZWMvRE1OLzIwMjMwMzI0L0RNTkRJL1wiIFxuICB4bWxuczpkYz1cImh0dHA6Ly93d3cub21nLm9yZy9zcGVjL0RNTi8yMDE4MDUyMS9EQy9cIiBcbiAgeG1sbnM6ZGk9XCJodHRwOi8vd3d3Lm9tZy5vcmcvc3BlYy9ETU4vMjAxODA1MjEvREkvXCIgXG4gIHhtbG5zOmtpZT1cImh0dHBzOi8va2llLmFwYWNoZS5vcmcvZG1uL2V4dGVuc2lvbnMvMS4wXCJcbiAgZXhwcmVzc2lvbkxhbmd1YWdlPVwiaHR0cHM6Ly93d3cub21nLm9yZy9zcGVjL0RNTi8yMDIxMTEwOC9GRUVML1wiXG4gIHR5cGVMYW5ndWFnZT1cImh0dHA6Ly93d3cub21nLm9yZy9zcGVjL0RNTi8yMDIxMTEwOC9GRUVML1wiXG4gIG5hbWVzcGFjZT1cImh0dHBzOi8va2llLmFwYWNoZS5vcmcvZG1uL185MjM3ODRCRC1DRDMxLTQ4OEEtOUMzMS1DMUE4M0M1NDgzQzBcIiBcbiAgaWQ9XCJfMEU2RjREODgtQjk1NS00MDRCLUEzMUEtNzJCQjdFMUU2QTc3XCIgXG4gIG5hbWU9XCJTdW0gQktNXCI+XG48YnVzaW5lc3NLbm93bGVkZ2VNb2RlbCBuYW1lPVwiU3VtIEJLTVwiIGlkPVwiXzM2NDY2MDBELTAzNUYtNDdCOS04REM2LTNGQUJFODQ0MjM0RlwiPlxuICA8dmFyaWFibGUgbmFtZT1cIk5ldyBCS01cIiBpZD1cIl85NEJBQzlGRC04NTE5LTQ5RjktODU1QS1GNEZDQkFDRDJBMDRcIiB0eXBlUmVmPVwibnVtYmVyXCIgLz5cbiAgPGZ1bmN0aW9uRGVmaW5pdGlvbiBsYWJlbD1cIlN1bSBCS01cIiBraW5kPVwiRkVFTFwiIHR5cGVSZWY9XCJudW1iZXJcIj5cbiAgICA8Zm9ybWFsUGFyYW1ldGVyIGlkPVwiX0YzQTcwQTY5LTA5RkYtNDE3Qy04RjZDLUJEOTEyOTIzMTM3N1wiIG5hbWU9XCJhXCIgdHlwZVJlZj1cIm51bWJlclwiIC8+XG4gICAgPGZvcm1hbFBhcmFtZXRlciBpZD1cIl9FNTFCMUM2RS04OTZCLTQxQzAtQjAzRS04NUIzQ0Q3QjY2NTVcIiBuYW1lPVwiYlwiIHR5cGVSZWY9XCJudW1iZXJcIiAvPlxuICAgIDxsaXRlcmFsRXhwcmVzc2lvbiBpZD1cIl9GQTFFRTIyQi1DQzZCLTQ5OUYtOTVFRS02ODE1OEEyRjIzM0JcIiBsYWJlbD1cIkV4cHJlc3Npb24gTmFtZVwiIHR5cGVSZWY9XCImbHQ7VW5kZWZpbmVkJmd0O1wiPlxuICAgICAgPHRleHQ+YSArIGI8L3RleHQ+XG4gICAgPC9saXRlcmFsRXhwcmVzc2lvbj5cbiAgPC9mdW5jdGlvbkRlZmluaXRpb24+XG48L2J1c2luZXNzS25vd2xlZGdlTW9kZWw+XG48ZG1uZGk6RE1OREk+XG4gIDxkbW5kaTpETU5EaWFncmFtPlxuICAgIDxkbW5kaTpETU5TaGFwZSBpZD1cIl8zNTA2QTA4Ny1BQjYwLTQyOEQtOUM3NS0xRTVGNUQ2RjA5NDdcIiBkbW5FbGVtZW50UmVmPVwiXzM2NDY2MDBELTAzNUYtNDdCOS04REM2LTNGQUJFODQ0MjM0RlwiIGlzQ29sbGFwc2VkPVwiZmFsc2VcIiBpc0xpc3RlZElucHV0RGF0YT1cImZhbHNlXCI+XG4gICAgICA8ZGM6Qm91bmRzIHg9XCI0MFwiIHk9XCI2MFwiIHdpZHRoPVwiMTYwXCIgaGVpZ2h0PVwiODBcIiAvPlxuICAgIDwvZG1uZGk6RE1OU2hhcGU+XG4gICAgPGRpOmV4dGVuc2lvbj5cbiAgICAgIDxraWU6Q29tcG9uZW50c1dpZHRoc0V4dGVuc2lvbj5cbiAgICAgICAgPGtpZTpDb21wb25lbnRXaWR0aHMgZG1uRWxlbWVudFJlZj1cIl9GQTFFRTIyQi1DQzZCLTQ5OUYtOTVFRS02ODE1OEEyRjIzM0JcIj5cbiAgICAgICAgICA8a2llOndpZHRoPjE5MDwva2llOndpZHRoPlxuICAgICAgICA8L2tpZTpDb21wb25lbnRXaWR0aHM+XG4gICAgICA8L2tpZTpDb21wb25lbnRzV2lkdGhzRXh0ZW5zaW9uPlxuICAgIDwvZGk6ZXh0ZW5zaW9uPlxuICA8L2RtbmRpOkRNTkRpYWdyYW0+XG48L2RtbmRpOkRNTkRJPlxuPC9kZWZpbml0aW9ucz5cbmA7XG5cbmV4cG9ydCBjb25zdCBzdW1EaWZmRHMgPSBgPGRlZmluaXRpb25zIFxuICB4bWxucz1cImh0dHBzOi8vd3d3Lm9tZy5vcmcvc3BlYy9ETU4vMjAyMzAzMjQvTU9ERUwvXCIgXG4gIHhtbG5zOmRtbmRpPVwiaHR0cHM6Ly93d3cub21nLm9yZy9zcGVjL0RNTi8yMDIzMDMyNC9ETU5ESS9cIlxuICB4bWxuczpkYz1cImh0dHA6Ly93d3cub21nLm9yZy9zcGVjL0RNTi8yMDE4MDUyMS9EQy9cIiBcbiAgeG1sbnM6ZGk9XCJodHRwOi8vd3d3Lm9tZy5vcmcvc3BlYy9ETU4vMjAxODA1MjEvREkvXCIgXG4gIHhtbG5zOmtpZT1cImh0dHBzOi8va2llLmFwYWNoZS5vcmcvZG1uL2V4dGVuc2lvbnMvMS4wXCJcbiAgZXhwcmVzc2lvbkxhbmd1YWdlPVwiaHR0cHM6Ly93d3cub21nLm9yZy9zcGVjL0RNTi8yMDIxMTEwOC9GRUVML1wiIFxuICB0eXBlTGFuZ3VhZ2U9XCJodHRwOi8vd3d3Lm9tZy5vcmcvc3BlYy9ETU4vMjAyMTExMDgvRkVFTC9cIlxuICBuYW1lc3BhY2U9XCJodHRwczovL2tpZS5hcGFjaGUub3JnL2Rtbi9fRDE5QjAwMTUtMkNCRC00QkE4LTg0QTktNUY1NTREODRBOUUxXCIgXG4gIGlkPVwiX0YzNjBDRUNCLTVERjItNDU0Ni1BN0E5LUU1RUNGMEY1QTg3MlwiIFxuICBuYW1lPVwiU3VtIGFuZCBEaWZmIERTXCI+XG48ZGVjaXNpb25TZXJ2aWNlIG5hbWU9XCJTdW0gYW5kIERpZmYgRFNcIiBpZD1cIl83MjFCNzYzNC03MjI3LTQyQjQtQUFBNC0xN0RFNjBBN0E5NjdcIj5cbiAgPHZhcmlhYmxlIG5hbWU9XCJOZXcgRGVjaXNpb24gU2VydmljZVwiIGlkPVwiX0E5OTZENEJELUNGNjktNENDNS04OUMwLTM3Q0YyQkQ2QkE2RVwiIHR5cGVSZWY9XCJjb250ZXh0XCIgLz5cbiAgPGlucHV0RGF0YSBocmVmPVwiI18xOEZBRTkxMy0yQjJBLTQ3OUQtQTUzQS0xNEEyRDU3QzQ2RTRcIiAvPlxuICA8aW5wdXREYXRhIGhyZWY9XCIjXzBENkU4M0EwLTE3MUYtNEQ3Qy1CMERGLTg0NjREREUwNUZEMVwiIC8+XG4gIDxvdXRwdXREZWNpc2lvbiBocmVmPVwiI18xOTkxRkIzNC0xMjUzLTRBNTQtQUQzRC04OTY5NzkzOERERkFcIiAvPlxuICA8b3V0cHV0RGVjaXNpb24gaHJlZj1cIiNfMDU2MjFFRDQtOTIzNi00N0YxLUI5M0EtMTY0QTQ1MjdCMTM2XCIgLz5cbjwvZGVjaXNpb25TZXJ2aWNlPlxuPGRlY2lzaW9uIG5hbWU9XCJTdW1cIiBpZD1cIl8wNTYyMUVENC05MjM2LTQ3RjEtQjkzQS0xNjRBNDUyN0IxMzZcIj5cbiAgPHZhcmlhYmxlIG5hbWU9XCJOZXcgRGVjaXNpb25cIiBpZD1cIl84OEVDQTg5MS0zODM3LTQwRTYtQkNCRi03N0JGMjRCMjZGRDBcIiB0eXBlUmVmPVwibnVtYmVyXCIgLz5cbiAgPGluZm9ybWF0aW9uUmVxdWlyZW1lbnQgaWQ9XCJfODFCRDQ5RjQtRTI3OS00OEE0LUFDNzEtODlDRTkyRUVERTlDXCI+XG4gICAgPHJlcXVpcmVkSW5wdXQgaHJlZj1cIiNfMThGQUU5MTMtMkIyQS00NzlELUE1M0EtMTRBMkQ1N0M0NkU0XCIgLz5cbiAgPC9pbmZvcm1hdGlvblJlcXVpcmVtZW50PlxuICA8aW5mb3JtYXRpb25SZXF1aXJlbWVudCBpZD1cIl8xMTVCNEM4OS1FQkE4LTQxMzYtQTcwRS05RDMwM0Q4RTkyQzVcIj5cbiAgICA8cmVxdWlyZWRJbnB1dCBocmVmPVwiI18wRDZFODNBMC0xNzFGLTREN0MtQjBERi04NDY0RERFMDVGRDFcIiAvPlxuICA8L2luZm9ybWF0aW9uUmVxdWlyZW1lbnQ+XG4gIDxsaXRlcmFsRXhwcmVzc2lvbiBpZD1cIl8yODEyRTBFQS1GRDMyLTQ4MEYtODlDRC1EMEZFNUZBMDIxNzJcIiBsYWJlbD1cIlN1bVwiIHR5cGVSZWY9XCImbHQ7VW5kZWZpbmVkJmd0O1wiPlxuICAgIDx0ZXh0PmEgKyBiPC90ZXh0PlxuICA8L2xpdGVyYWxFeHByZXNzaW9uPlxuPC9kZWNpc2lvbj5cbjxpbnB1dERhdGEgbmFtZT1cImFcIiBpZD1cIl8xOEZBRTkxMy0yQjJBLTQ3OUQtQTUzQS0xNEEyRDU3QzQ2RTRcIj5cbiAgPHZhcmlhYmxlIG5hbWU9XCJOZXcgSW5wdXQgRGF0YVwiIGlkPVwiXzI1MERCODUwLTk3RjUtNDVDOC1BRkJCLTIwNzIxOEJEQUY3RVwiIHR5cGVSZWY9XCJudW1iZXJcIiAvPlxuPC9pbnB1dERhdGE+XG48aW5wdXREYXRhIG5hbWU9XCJiXCIgaWQ9XCJfMEQ2RTgzQTAtMTcxRi00RDdDLUIwREYtODQ2NERERTA1RkQxXCI+XG4gIDx2YXJpYWJsZSBuYW1lPVwiTmV3IElucHV0IERhdGFcIiBpZD1cIl8wRkQzRTQ5MS05M0U0LTRBQzEtQUI0Ni0xOUE2QzZBM0U0RjFcIiB0eXBlUmVmPVwibnVtYmVyXCIgLz5cbjwvaW5wdXREYXRhPlxuPGRlY2lzaW9uIG5hbWU9XCJEaWZmXCIgaWQ9XCJfMTk5MUZCMzQtMTI1My00QTU0LUFEM0QtODk2OTc5MzhEREZBXCI+XG4gIDx2YXJpYWJsZSBuYW1lPVwiTmV3IERlY2lzaW9uXCIgaWQ9XCJfNDdBRDZGQjEtMTg5Mi00RTI3LUI0NkQtMEFGOTVCMTg2MDJFXCIgdHlwZVJlZj1cIm51bWJlclwiIC8+XG4gIDxpbmZvcm1hdGlvblJlcXVpcmVtZW50IGlkPVwiXzVDQThFQTExLUZERkYtNDEwQS1BQjRGLUFBN0FDQjlGN0ZEQ1wiPlxuICAgIDxyZXF1aXJlZElucHV0IGhyZWY9XCIjXzE4RkFFOTEzLTJCMkEtNDc5RC1BNTNBLTE0QTJENTdDNDZFNFwiIC8+XG4gIDwvaW5mb3JtYXRpb25SZXF1aXJlbWVudD5cbiAgPGluZm9ybWF0aW9uUmVxdWlyZW1lbnQgaWQ9XCJfRDlFNUZCMEYtMUE4Qy00NzMzLUJCQUItRTRBNTUxMTNGODA2XCI+XG4gICAgPHJlcXVpcmVkSW5wdXQgaHJlZj1cIiNfMEQ2RTgzQTAtMTcxRi00RDdDLUIwREYtODQ2NERERTA1RkQxXCIgLz5cbiAgPC9pbmZvcm1hdGlvblJlcXVpcmVtZW50PlxuICA8bGl0ZXJhbEV4cHJlc3Npb24gaWQ9XCJfQzZCQkZDMkUtNjk1Ri00NjY4LThBMEUtRDE3NUZFNzMwMkM3XCIgbGFiZWw9XCJEaWZmXCIgdHlwZVJlZj1cIiZsdDtVbmRlZmluZWQmZ3Q7XCI+XG4gICAgPHRleHQ+YSAtIGI8L3RleHQ+XG4gIDwvbGl0ZXJhbEV4cHJlc3Npb24+XG48L2RlY2lzaW9uPlxuPGl0ZW1EZWZpbml0aW9uIGlkPVwiXzg0MkY0RTE2LUM5QTItNDdENC1BMjIxLTA4MTY3M0I5OEMyRFwiIG5hbWU9XCJTdW1EaWZmQ29udGV4dFwiIGlzQ29sbGVjdGlvbj1cImZhbHNlXCI+XG4gIDxpdGVtQ29tcG9uZW50IGlkPVwiXzQ4ODJENEZCLTIxNDYtNDE5OC04NjQwLTMzQjk1MUI4OTNBN1wiIG5hbWU9XCJTdW1cIiBpc0NvbGxlY3Rpb249XCJmYWxzZVwiPlxuICAgIDx0eXBlUmVmPm51bWJlcjwvdHlwZVJlZj5cbiAgPC9pdGVtQ29tcG9uZW50PlxuICA8aXRlbUNvbXBvbmVudCBpZD1cIl8zRUYyN0I3RC0zMzc4LTQyOUUtQjZEQi1CODU2RjVFQjBBRTdcIiBuYW1lPVwiRGlmZlwiIGlzQ29sbGVjdGlvbj1cImZhbHNlXCI+XG4gICAgPHR5cGVSZWY+bnVtYmVyPC90eXBlUmVmPlxuICA8L2l0ZW1Db21wb25lbnQ+XG48L2l0ZW1EZWZpbml0aW9uPlxuPGl0ZW1EZWZpbml0aW9uIGlkPVwiXzJCNEU5NTkzLTMyMzktNEUwNC1BMjEzLTM0NUYwQUEwQUY5RVwiIG5hbWU9XCJGaW5lXCIgaXNDb2xsZWN0aW9uPVwiZmFsc2VcIj5cbiAgPGl0ZW1Db21wb25lbnQgaWQ9XCJfM0VGMjdCN0QtMzM3OC00MjlFLUI2REItQjg1NkY1RUIwQUVFXCIgbmFtZT1cIlZhbHVlXCIgaXNDb2xsZWN0aW9uPVwiZmFsc2VcIj5cbiAgICA8dHlwZVJlZj5udW1iZXI8L3R5cGVSZWY+XG4gICAgPGFsbG93ZWRWYWx1ZXMgaWQ9XCJfNUJEMTNEOUQtNDEyRi00RTZCLTkxNEEtM0Q4QUFBQzZBNzAxXCI+XG4gICAgICA8dGV4dD4xMDAsNTAwLDEwMDA8L3RleHQ+XG4gICAgPC9hbGxvd2VkVmFsdWVzPlxuICA8L2l0ZW1Db21wb25lbnQ+XG48L2l0ZW1EZWZpbml0aW9uPlxuPGRtbmRpOkRNTkRJPlxuICA8ZG1uZGk6RE1ORGlhZ3JhbT5cbiAgICA8ZG1uZGk6RE1OU2hhcGUgaWQ9XCJfNDk1Q0IwQTctMDE3QS00QTJGLUE0RDctMzEzM0M4MjcwOEUwXCIgZG1uRWxlbWVudFJlZj1cIl83MjFCNzYzNC03MjI3LTQyQjQtQUFBNC0xN0RFNjBBN0E5NjdcIiBpc0NvbGxhcHNlZD1cImZhbHNlXCIgaXNMaXN0ZWRJbnB1dERhdGE9XCJmYWxzZVwiPlxuICAgICAgPGRjOkJvdW5kcyB4PVwiODBcIiB5PVwiMTIwXCIgd2lkdGg9XCI1MjBcIiBoZWlnaHQ9XCIzMjBcIiAvPlxuICAgICAgPGRtbmRpOkRNTkRlY2lzaW9uU2VydmljZURpdmlkZXJMaW5lPlxuICAgICAgICA8ZGk6d2F5cG9pbnQgeD1cIjgwXCIgeT1cIjI4MFwiIC8+XG4gICAgICAgIDxkaTp3YXlwb2ludCB4PVwiNTAwXCIgeT1cIjI4MFwiIC8+XG4gICAgICA8L2RtbmRpOkRNTkRlY2lzaW9uU2VydmljZURpdmlkZXJMaW5lPlxuICAgIDwvZG1uZGk6RE1OU2hhcGU+XG4gICAgPGRtbmRpOkRNTlNoYXBlIGlkPVwiXzgwQzQyMDI2LUZGNTYtNDRDNi04NEY5LUY3QTAzNjg2RjVFOFwiIGRtbkVsZW1lbnRSZWY9XCJfMDU2MjFFRDQtOTIzNi00N0YxLUI5M0EtMTY0QTQ1MjdCMTM2XCIgaXNDb2xsYXBzZWQ9XCJmYWxzZVwiIGlzTGlzdGVkSW5wdXREYXRhPVwiZmFsc2VcIj5cbiAgICAgIDxkYzpCb3VuZHMgeD1cIjE0MFwiIHk9XCIxODBcIiB3aWR0aD1cIjE2MFwiIGhlaWdodD1cIjgwXCIgLz5cbiAgICA8L2RtbmRpOkRNTlNoYXBlPlxuICAgIDxkbW5kaTpETU5TaGFwZSBpZD1cIl8yMThFRDVFOC1GQjAxLTQxN0YtQTFGNi04NjdENjBCQ0JGMTlcIiBkbW5FbGVtZW50UmVmPVwiXzE4RkFFOTEzLTJCMkEtNDc5RC1BNTNBLTE0QTJENTdDNDZFNFwiIGlzQ29sbGFwc2VkPVwiZmFsc2VcIiBpc0xpc3RlZElucHV0RGF0YT1cImZhbHNlXCI+XG4gICAgICA8ZGM6Qm91bmRzIHg9XCI4MFwiIHk9XCI0ODBcIiB3aWR0aD1cIjE2MFwiIGhlaWdodD1cIjgwXCIgLz5cbiAgICA8L2RtbmRpOkRNTlNoYXBlPlxuICAgIDxkbW5kaTpETU5TaGFwZSBpZD1cIl83QzEzNEJCRi0yQjk2LTRDOUEtQjk4NS1EMUZFMTBEQzMwRDJcIiBkbW5FbGVtZW50UmVmPVwiXzBENkU4M0EwLTE3MUYtNEQ3Qy1CMERGLTg0NjREREUwNUZEMVwiIGlzQ29sbGFwc2VkPVwiZmFsc2VcIiBpc0xpc3RlZElucHV0RGF0YT1cImZhbHNlXCI+XG4gICAgICA8ZGM6Qm91bmRzIHg9XCI0NDBcIiB5PVwiNDgwXCIgd2lkdGg9XCIxNjBcIiBoZWlnaHQ9XCI4MFwiIC8+XG4gICAgPC9kbW5kaTpETU5TaGFwZT5cbiAgICA8ZG1uZGk6RE1ORWRnZSBpZD1cIl83NjhDNUQ2RS05QTQxLTRBQTMtOTIxQy1BNTQ1RThGMTE1OTdcIiBkbW5FbGVtZW50UmVmPVwiXzgxQkQ0OUY0LUUyNzktNDhBNC1BQzcxLTg5Q0U5MkVFREU5Q1wiIHNvdXJjZUVsZW1lbnQ9XCJfMjE4RUQ1RTgtRkIwMS00MTdGLUExRjYtODY3RDYwQkNCRjE5XCIgdGFyZ2V0RWxlbWVudD1cIl84MEM0MjAyNi1GRjU2LTQ0QzYtODRGOS1GN0EwMzY4NkY1RThcIj5cbiAgICAgIDxkaTp3YXlwb2ludCB4PVwiMTYwXCIgeT1cIjUyMFwiIC8+XG4gICAgICA8ZGk6d2F5cG9pbnQgeD1cIjIyMFwiIHk9XCIyNjBcIiAvPlxuICAgIDwvZG1uZGk6RE1ORWRnZT5cbiAgICA8ZG1uZGk6RE1ORWRnZSBpZD1cIl83OUUyRTUzMi04RDg0LTQwQzktOTFEQS0wN0VBNjA2Nzk4RTVcIiBkbW5FbGVtZW50UmVmPVwiXzExNUI0Qzg5LUVCQTgtNDEzNi1BNzBFLTlEMzAzRDhFOTJDNVwiIHNvdXJjZUVsZW1lbnQ9XCJfN0MxMzRCQkYtMkI5Ni00QzlBLUI5ODUtRDFGRTEwREMzMEQyXCIgdGFyZ2V0RWxlbWVudD1cIl84MEM0MjAyNi1GRjU2LTQ0QzYtODRGOS1GN0EwMzY4NkY1RThcIj5cbiAgICAgIDxkaTp3YXlwb2ludCB4PVwiNTIwXCIgeT1cIjUyMFwiIC8+XG4gICAgICA8ZGk6d2F5cG9pbnQgeD1cIjIyMFwiIHk9XCIyNjBcIiAvPlxuICAgIDwvZG1uZGk6RE1ORWRnZT5cbiAgICA8ZG1uZGk6RE1OU2hhcGUgaWQ9XCJfMTU1M0VCNkMtMkJFOC00QkMzLTg5NzItQTg3MzA4Qjk4Qzg2XCIgZG1uRWxlbWVudFJlZj1cIl8xOTkxRkIzNC0xMjUzLTRBNTQtQUQzRC04OTY5NzkzOERERkFcIiBpc0NvbGxhcHNlZD1cImZhbHNlXCIgaXNMaXN0ZWRJbnB1dERhdGE9XCJmYWxzZVwiPlxuICAgICAgPGRjOkJvdW5kcyB4PVwiMzgwXCIgeT1cIjE4MFwiIHdpZHRoPVwiMTYwXCIgaGVpZ2h0PVwiODBcIiAvPlxuICAgIDwvZG1uZGk6RE1OU2hhcGU+XG4gICAgPGRtbmRpOkRNTkVkZ2UgaWQ9XCJfQzY5Nzk0ODMtREJCQS00QUMwLUFCMjgtRTEyRUZFRjA4NjU0XCIgZG1uRWxlbWVudFJlZj1cIl81Q0E4RUExMS1GREZGLTQxMEEtQUI0Ri1BQTdBQ0I5RjdGRENcIiBzb3VyY2VFbGVtZW50PVwiXzIxOEVENUU4LUZCMDEtNDE3Ri1BMUY2LTg2N0Q2MEJDQkYxOVwiIHRhcmdldEVsZW1lbnQ9XCJfMTU1M0VCNkMtMkJFOC00QkMzLTg5NzItQTg3MzA4Qjk4Qzg2XCI+XG4gICAgICA8ZGk6d2F5cG9pbnQgeD1cIjE2MFwiIHk9XCI1MjBcIiAvPlxuICAgICAgPGRpOndheXBvaW50IHg9XCI0NjBcIiB5PVwiMjYwXCIgLz5cbiAgICA8L2RtbmRpOkRNTkVkZ2U+XG4gICAgPGRtbmRpOkRNTkVkZ2UgaWQ9XCJfMzc4QzUyMTMtMDg0Qi00QTFELUFEQ0MtQ0VGRTQxRjdFOUZDXCIgZG1uRWxlbWVudFJlZj1cIl9EOUU1RkIwRi0xQThDLTQ3MzMtQkJBQi1FNEE1NTExM0Y4MDZcIiBzb3VyY2VFbGVtZW50PVwiXzdDMTM0QkJGLTJCOTYtNEM5QS1COTg1LUQxRkUxMERDMzBEMlwiIHRhcmdldEVsZW1lbnQ9XCJfMTU1M0VCNkMtMkJFOC00QkMzLTg5NzItQTg3MzA4Qjk4Qzg2XCI+XG4gICAgICA8ZGk6d2F5cG9pbnQgeD1cIjUyMFwiIHk9XCI1MjBcIiAvPlxuICAgICAgPGRpOndheXBvaW50IHg9XCI0NjBcIiB5PVwiMjYwXCIgLz5cbiAgICA8L2RtbmRpOkRNTkVkZ2U+XG4gICAgPGRpOmV4dGVuc2lvbj5cbiAgICAgIDxraWU6Q29tcG9uZW50c1dpZHRoc0V4dGVuc2lvbj5cbiAgICAgICAgPGtpZTpDb21wb25lbnRXaWR0aHMgZG1uRWxlbWVudFJlZj1cIl8yODEyRTBFQS1GRDMyLTQ4MEYtODlDRC1EMEZFNUZBMDIxNzJcIj5cbiAgICAgICAgICA8a2llOndpZHRoPjE5MDwva2llOndpZHRoPlxuICAgICAgICA8L2tpZTpDb21wb25lbnRXaWR0aHM+XG4gICAgICAgIDxraWU6Q29tcG9uZW50V2lkdGhzIGRtbkVsZW1lbnRSZWY9XCJfQzZCQkZDMkUtNjk1Ri00NjY4LThBMEUtRDE3NUZFNzMwMkM3XCI+XG4gICAgICAgICAgPGtpZTp3aWR0aD4xOTA8L2tpZTp3aWR0aD5cbiAgICAgICAgPC9raWU6Q29tcG9uZW50V2lkdGhzPlxuICAgICAgPC9raWU6Q29tcG9uZW50c1dpZHRoc0V4dGVuc2lvbj5cbiAgICA8L2RpOmV4dGVuc2lvbj5cbiAgPC9kbW5kaTpETU5EaWFncmFtPlxuPC9kbW5kaTpETU5EST5cbjwvZGVmaW5pdGlvbnM+XG5gO1xuLy8gQ29waWVkIGZyb20ga29naXRvLWV4YW1wbGVzL2tvZ2l0by1xdWFya3VzLWV4YW1wbGVzL2Rtbi1wbW1sLXF1YXJrdXMtZXhhbXBsZS9zcmMvbWFpbi9yZXNvdXJjZXNcbmV4cG9ydCBjb25zdCB0ZXN0VHJlZVBtbWwgPSBgPFBNTUwgdmVyc2lvbj1cIjQuMlwiIHhzaTpzY2hlbWFMb2NhdGlvbj1cImh0dHA6Ly93d3cuZG1nLm9yZy9QTU1MLTRfMiBodHRwOi8vd3d3LmRtZy5vcmcvdjQtMi0xL3BtbWwtNC0yLnhzZFwiIHhtbG5zOnhzaT1cImh0dHA6Ly93d3cudzMub3JnLzIwMDEvWE1MU2NoZW1hLWluc3RhbmNlXCJcbnhtbG5zPVwiaHR0cDovL3d3dy5kbWcub3JnL1BNTUwtNF8yXCI+XG48SGVhZGVyPlxuIDxBcHBsaWNhdGlvbiBuYW1lPVwiRHJvb2xzLVBNTUxcIiB2ZXJzaW9uPVwiNy4wLjAtU05BUFNIT1RcIiAvPlxuPC9IZWFkZXI+XG5cbjxEYXRhRGljdGlvbmFyeSBudW1iZXJPZkZpZWxkcz1cIjNcIj5cbiA8RGF0YUZpZWxkIG5hbWU9XCJ0ZW1wZXJhdHVyZVwiIGRhdGFUeXBlPVwiZG91YmxlXCIgb3B0eXBlPVwiY29udGludW91c1wiIC8+XG4gPERhdGFGaWVsZCBuYW1lPVwiaHVtaWRpdHlcIiBkYXRhVHlwZT1cImRvdWJsZVwiIG9wdHlwZT1cImNvbnRpbnVvdXNcIiAvPiAgIFxuIDxEYXRhRmllbGQgbmFtZT1cImRlY2lzaW9uXCIgZGF0YVR5cGU9XCJzdHJpbmdcIiBvcHR5cGU9XCJjYXRlZ29yaWNhbFwiPiBcbiAgIDxWYWx1ZSB2YWx1ZT1cInN1bmdsYXNzZXNcIiAvPlxuICAgPFZhbHVlIHZhbHVlPVwidW1icmVsbGFcIiAvPlxuICAgPFZhbHVlIHZhbHVlPVwibm90aGluZ1wiIC8+ICAgICBcbiA8L0RhdGFGaWVsZD5cbjwvRGF0YURpY3Rpb25hcnk+XG5cbjxUcmVlTW9kZWwgbW9kZWxOYW1lPVwiRGVjaXNpb25UcmVlXCIgZnVuY3Rpb25OYW1lPVwiY2xhc3NpZmljYXRpb25cIj5cbiA8TWluaW5nU2NoZW1hPlxuICAgPE1pbmluZ0ZpZWxkIG5hbWU9XCJ0ZW1wZXJhdHVyZVwiICB1c2FnZVR5cGU9XCJhY3RpdmVcIiAvPlxuICAgPE1pbmluZ0ZpZWxkIG5hbWU9XCJodW1pZGl0eVwiICB1c2FnZVR5cGU9XCJhY3RpdmVcIiAvPlxuICAgPE1pbmluZ0ZpZWxkIG5hbWU9XCJkZWNpc2lvblwiIHVzYWdlVHlwZT1cInByZWRpY3RlZFwiIC8+XG4gPC9NaW5pbmdTY2hlbWE+XG4gPE91dHB1dD5cbiAgIDxPdXRwdXRGaWVsZCBuYW1lPVwid2VhdGhlcmRlY2lzaW9uXCIgdGFyZ2V0RmllbGQ9XCJkZWNpc2lvblwiIC8+XG4gPC9PdXRwdXQ+XG4gXG4gPE5vZGUgc2NvcmU9XCJub3RoaW5nXCIgaWQ9XCIxXCI+XG4gICA8VHJ1ZSAvPlxuICAgPE5vZGUgc2NvcmU9XCJzdW5nbGFzc2VzXCIgaWQ9XCIyXCI+XG4gICAgIDxDb21wb3VuZFByZWRpY2F0ZSBib29sZWFuT3BlcmF0b3I9XCJhbmRcIj5cbiAgICAgICA8U2ltcGxlUHJlZGljYXRlIGZpZWxkPVwidGVtcGVyYXR1cmVcIiBvcGVyYXRvcj1cImdyZWF0ZXJUaGFuXCIgdmFsdWU9XCIyNVwiIC8+XG4gICAgICAgPFNpbXBsZVByZWRpY2F0ZSBmaWVsZD1cImh1bWlkaXR5XCIgb3BlcmF0b3I9XCJsZXNzT3JFcXVhbFwiIHZhbHVlPVwiMjBcIiAvPlxuICAgICA8L0NvbXBvdW5kUHJlZGljYXRlPlxuICAgPC9Ob2RlPlxuICAgPE5vZGUgc2NvcmU9XCJ1bWJyZWxsYVwiIGlkPVwiM1wiPlxuICAgICA8U2ltcGxlUHJlZGljYXRlIGZpZWxkPVwiaHVtaWRpdHlcIiBvcGVyYXRvcj1cImdyZWF0ZXJUaGFuXCIgdmFsdWU9XCI1MFwiIC8+XG4gICA8L05vZGU+XG4gICA8Tm9kZSBzY29yZT1cIm5vdGhpbmdcIiBpZD1cIjRcIj5cbiAgICAgPFRydWUgLz5cbiAgIDwvTm9kZT5cbiA8L05vZGU+XG48L1RyZWVNb2RlbD5cbjwvUE1NTD5cbmA7XG4iXSwibmFtZXMiOlsidXNlQ2FsbGJhY2siLCJ1c2VNZW1vIiwidXNlUmVmIiwidXNlU3RhdGUiLCJGbGV4IiwiRmxleEl0ZW0iLCJQYWdlIiwiUGFnZVNlY3Rpb24iLCJnZXRNYXJzaGFsbGVyIiwibm9ybWFsaXplIiwiYXZhaWxhYmxlTW9kZWxzQnlQYXRoIiwibW9kZWxzQnlOYW1lc3BhY2UiLCJnZW5lcmF0ZUVtcHR5RG1uMTUiLCJsb2FuUHJlUXVhbGlmaWNhdGlvbkRtbiIsIkRtbkVkaXRvcldyYXBwZXIiLCJpbml0aWFsTW9kZWwiLCJlbXB0eURyZCIsIkRldlBsYXlncm91bmQiLCJhcmdzIiwic3RhdGUiLCJzZXRTdGF0ZSIsImluaXRpYWxEbW5NYXJzaGFsbGVyIiwidXBncmFkZVRvIiwibWFyc2hhbGxlciIsInN0YWNrIiwicGFyc2VyIiwicGFyc2UiLCJwb2ludGVyIiwib25Ecm9wIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJwcmV2ZW50RGVmYXVsdCIsImRhdGFUcmFuc2ZlciIsIml0ZW1zIiwiZm9yRWFjaCIsIml0ZW0iLCJpIiwia2luZCIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiX3JlZiIsInRhcmdldCIsInJlc3VsdCIsInJlYWRBc1RleHQiLCJnZXRBc0ZpbGUiLCJvbkRyYWdPdmVyIiwicmVzZXQiLCJjdXJyZW50TW9kZWwiLCJkb3dubG9hZFJlZiIsImRvd25sb2FkQXNYbWwiLCJjdXJyZW50IiwiZmlsZUJsb2IiLCJCbG9iIiwiYnVpbGRlciIsImJ1aWxkIiwidHlwZSIsImRvd25sb2FkIiwiY3JlYXRlSWQiLCJocmVmIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiY2xpY2siLCJjb3B5QXNYbWwiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJ1bmRvIiwicHJldiIsIk1hdGgiLCJtYXgiLCJyZWRvIiwibWluIiwibGVuZ3RoIiwib25Nb2RlbENoYW5nZSIsIm1vZGVsIiwibmV3U3RhY2siLCJzbGljZSIsIm9uU2VsZWN0TW9kZWwiLCJuZXdNb2RlbCIsIm9uUmVxdWVzdFRvSnVtcFRvUGF0aCIsInBhdGgiLCJhbGVydCIsImV4dGVybmFsTW9kZWxzQnlOYW1lc3BhY2UiLCJfYSIsImRlZmluaXRpb25zIiwiaW1wb3J0IiwicmVkdWNlIiwiYWNjIiwib25SZXF1ZXN0RXh0ZXJuYWxNb2RlbEJ5UGF0aCIsIm9uUmVxdWVzdEV4dGVybmFsTW9kZWxzQXZhaWxhYmxlVG9JbmNsdWRlIiwiT2JqZWN0Iiwia2V5cyIsImlzVW5kb0VuYWJsZWQiLCJpc1JlZG9FbmFibGVkIiwiX2pzeCIsIl9GcmFnbWVudCIsImNoaWxkcmVuIiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsIl9qc3hzIiwidmFyaWFudCIsImlzRmlsbGVkIiwicGFkZGluZyIsImRlZmF1bHQiLCJqdXN0aWZ5Q29udGVudCIsInNocmluayIsIm9uQ2xpY2siLCJkaXNhYmxlZCIsIm9wYWNpdHkiLCJyZWYiLCJoYXNPdmVyZmxvd1Njcm9sbCIsIm9yaWdpbmFsVmVyc2lvbiIsImV4dGVybmFsQ29udGV4dE5hbWUiLCJleHRlcm5hbENvbnRleHREZXNjcmlwdGlvbiIsInZhbGlkYXRpb25NZXNzYWdlcyIsImV2YWx1YXRpb25SZXN1bHRzQnlOb2RlSWQiLCJpc3N1ZVRyYWNrZXJIcmVmIiwiaXNSZWFkT25seSIsImNoYXJhY3RlcnMiLCJjaGFyYWN0ZXJzTGVuZ3RoIiwiY291bnRlciIsImNoYXJBdCIsImZsb29yIiwicmFuZG9tIiwibWV0YSIsInRpdGxlIiwiY29tcG9uZW50IiwiUGxheWdyb3VuZCIsInJlbmRlciIsIk1hcCIsInBhcmFtZXRlcnMiLCJkb2NzIiwic291cmNlIiwib3JpZ2luYWxTb3VyY2UiLCJfYyIsIl9iIiwiX19uYW1lZEV4cG9ydHNPcmRlciIsIlhNTDJQTU1MIiwiZ2V0UG1tbE5hbWVzcGFjZSIsInN1bUJrbSIsInN1bURpZmZEcyIsInRlc3RUcmVlUG1tbCIsInN1bUJrbU1vZGVsIiwic3VtRGlmZkRzTW9kZWwiLCJ0ZXN0VHJlZVBtbWxNb2RlbCIsImF2YWlhYmxlTW9kZWxzIiwic3ZnIiwibm9ybWFsaXplZFBvc2l4UGF0aFJlbGF0aXZlVG9UaGVPcGVuRmlsZSIsInZhbHVlcyIsInYiXSwic291cmNlUm9vdCI6IiJ9