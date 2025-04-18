"use strict";
(self["webpackChunk_kie_tools_dmn_editor"] = self["webpackChunk_kie_tools_dmn_editor"] || []).push([["misc-emptyWithAvailableExternalModels-EmptyWithAvailableExternalModels-stories"],{

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

/***/ "./stories/misc/emptyWithAvailableExternalModels/EmptyWithAvailableExternalModels.stories.tsx":
/*!****************************************************************************************************!*\
  !*** ./stories/misc/emptyWithAvailableExternalModels/EmptyWithAvailableExternalModels.stories.tsx ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmptyWithAvailableExternalModels: () => (/* binding */ EmptyWithAvailableExternalModels),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   generateEmptyDmn15: () => (/* binding */ generateEmptyDmn15)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _kie_tools_dmn_marshaller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @kie-tools/dmn-marshaller */ "../dmn-marshaller/dist/index.js");
/* harmony import */ var _kie_tools_dmn_marshaller_dist_schemas_dmn_1_5_ts_gen_meta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @kie-tools/dmn-marshaller/dist/schemas/dmn-1_5/ts-gen/meta */ "../dmn-marshaller/dist/schemas/dmn-1_5/ts-gen/meta.js");
/* harmony import */ var _kie_tools_boxed_expression_component_dist_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @kie-tools/boxed-expression-component/dist/api */ "../boxed-expression-component/dist/api/index.js");
/* harmony import */ var _kie_tools_dmn_marshaller_dist_schemas_dmn_1_5_Dmn15Spec__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @kie-tools/dmn-marshaller/dist/schemas/dmn-1_5/Dmn15Spec */ "../dmn-marshaller/dist/schemas/dmn-1_5/Dmn15Spec.js");
/* harmony import */ var _kie_tools_dmn_editor_dist_DmnEditor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @kie-tools/dmn-editor/dist/DmnEditor */ "./dist/DmnEditor.js");
/* harmony import */ var _kie_tools_dmn_marshaller_dist_normalization_normalize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @kie-tools/dmn-marshaller/dist/normalization/normalize */ "../dmn-marshaller/dist/normalization/normalize.js");
/* harmony import */ var _dmnEditorStoriesWrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../dmnEditorStoriesWrapper */ "./stories/dmnEditorStoriesWrapper.tsx");
/* harmony import */ var _availableModelsToInclude__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./availableModelsToInclude */ "./stories/misc/emptyWithAvailableExternalModels/availableModelsToInclude.ts");
var _a, _b, _c;










const generateEmptyDmn15 = () => `<?xml version="1.0" encoding="UTF-8"?>
<definitions
  xmlns="${_kie_tools_dmn_marshaller_dist_schemas_dmn_1_5_ts_gen_meta__WEBPACK_IMPORTED_MODULE_3__.ns.get("")}"
  expressionLanguage="${_kie_tools_dmn_marshaller_dist_schemas_dmn_1_5_Dmn15Spec__WEBPACK_IMPORTED_MODULE_5__.DMN15_SPEC.expressionLanguage.default}"
  namespace="https://kie.apache.org/dmn/${(0,_kie_tools_boxed_expression_component_dist_api__WEBPACK_IMPORTED_MODULE_4__.generateUuid)()}"
  id="${(0,_kie_tools_boxed_expression_component_dist_api__WEBPACK_IMPORTED_MODULE_4__.generateUuid)()}"
  name="DMN${(0,_kie_tools_boxed_expression_component_dist_api__WEBPACK_IMPORTED_MODULE_4__.generateUuid)()}">
</definitions>`;
const initialModel = generateEmptyDmn15();
function EmptyStoryWithIncludedModels(args) {
  const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(() => {
    const initialDmnMarshaller = (0,_kie_tools_dmn_marshaller__WEBPACK_IMPORTED_MODULE_2__.getMarshaller)(initialModel, {
      upgradeTo: "latest"
    });
    return {
      marshaller: initialDmnMarshaller,
      stack: [(0,_kie_tools_dmn_marshaller_dist_normalization_normalize__WEBPACK_IMPORTED_MODULE_7__.normalize)(initialDmnMarshaller.parser.parse())],
      pointer: 0
    };
  });
  const currentModel = state.stack[state.pointer];
  const externalModelsByNamespace = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    var _a;
    return ((_a = currentModel.definitions.import) !== null && _a !== void 0 ? _a : []).reduce((acc, i) => {
      acc[i["@_namespace"]] = _availableModelsToInclude__WEBPACK_IMPORTED_MODULE_9__.modelsByNamespace[i["@_namespace"]];
      return acc;
    }, {});
  }, [currentModel.definitions.import]);
  const onRequestExternalModelByPath = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async path => {
    var _a;
    return (_a = _availableModelsToInclude__WEBPACK_IMPORTED_MODULE_9__.availableModelsByPath[path]) !== null && _a !== void 0 ? _a : null;
  }, []);
  const onRequestExternalModelsAvailableToInclude = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async () => {
    return Object.keys(_availableModelsToInclude__WEBPACK_IMPORTED_MODULE_9__.availableModelsByPath);
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
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: (0,_dmnEditorStoriesWrapper__WEBPACK_IMPORTED_MODULE_8__.DmnEditorWrapper)({
      model: currentModel,
      originalVersion: args.originalVersion,
      onModelChange,
      onRequestExternalModelByPath,
      onRequestExternalModelsAvailableToInclude,
      externalModelsByNamespace,
      externalContextName: args.externalContextName,
      externalContextDescription: args.externalContextDescription,
      validationMessages: args.validationMessages,
      evaluationResultsByNodeId: args.evaluationResultsByNodeId,
      issueTrackerHref: args.issueTrackerHref
    })
  });
}
const meta = {
  title: "Misc/EmptyWithAvailableExternalModels",
  component: _kie_tools_dmn_editor_dist_DmnEditor__WEBPACK_IMPORTED_MODULE_6__.DmnEditor,
  includeStories: /^[A-Z]/
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (meta);
const EmptyWithAvailableExternalModels = {
  render: args => EmptyStoryWithIncludedModels(args),
  args: {
    model: (0,_kie_tools_dmn_marshaller__WEBPACK_IMPORTED_MODULE_2__.getMarshaller)(initialModel, {
      upgradeTo: "latest"
    }).parser.parse(),
    originalVersion: "1.5",
    evaluationResultsByNodeId: new Map(),
    externalContextDescription: "External context description",
    externalContextName: "Storybook - DMN Editor",
    externalModelsByNamespace: {},
    issueTrackerHref: "",
    validationMessages: {}
  }
};
EmptyWithAvailableExternalModels.parameters = {
  ...EmptyWithAvailableExternalModels.parameters,
  docs: {
    ...((_a = EmptyWithAvailableExternalModels.parameters) === null || _a === void 0 ? void 0 : _a.docs),
    source: {
      originalSource: "{\n  render: args => EmptyStoryWithIncludedModels(args),\n  args: {\n    model: getMarshaller(initialModel, {\n      upgradeTo: \"latest\"\n    }).parser.parse(),\n    originalVersion: \"1.5\",\n    evaluationResultsByNodeId: new Map(),\n    externalContextDescription: \"External context description\",\n    externalContextName: \"Storybook - DMN Editor\",\n    externalModelsByNamespace: {},\n    issueTrackerHref: \"\",\n    validationMessages: {}\n  }\n}",
      ...((_c = (_b = EmptyWithAvailableExternalModels.parameters) === null || _b === void 0 ? void 0 : _b.docs) === null || _c === void 0 ? void 0 : _c.source)
    }
  }
};
const __namedExportsOrder = ["generateEmptyDmn15", "EmptyWithAvailableExternalModels"];

/***/ }),

/***/ "./stories/misc/emptyWithAvailableExternalModels/availableModelsToInclude.ts":
/*!***********************************************************************************!*\
  !*** ./stories/misc/emptyWithAvailableExternalModels/availableModelsToInclude.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   availableModelsByPath: () => (/* binding */ availableModelsByPath),
/* harmony export */   modelsByNamespace: () => (/* binding */ modelsByNamespace)
/* harmony export */ });
/* unused harmony exports sumBkmModel, sumDiffDsModel, testTreePmmlModel, availableModels */
/* harmony import */ var _kie_tools_dmn_marshaller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @kie-tools/dmn-marshaller */ "../dmn-marshaller/dist/index.js");
/* harmony import */ var _kie_tools_dmn_marshaller_dist_normalization_normalize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @kie-tools/dmn-marshaller/dist/normalization/normalize */ "../dmn-marshaller/dist/normalization/normalize.js");
/* harmony import */ var _kie_tools_pmml_editor_marshaller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @kie-tools/pmml-editor-marshaller */ "../pmml-editor-marshaller/dist/index.js");
/* harmony import */ var _kie_tools_dmn_editor_dist_pmml_pmml__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @kie-tools/dmn-editor/dist/pmml/pmml */ "./dist/pmml/pmml.js");
/* harmony import */ var _externalModels__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./externalModels */ "./stories/misc/emptyWithAvailableExternalModels/externalModels.ts");





const sumBkmModel = (0,_kie_tools_dmn_marshaller_dist_normalization_normalize__WEBPACK_IMPORTED_MODULE_1__.normalize)((0,_kie_tools_dmn_marshaller__WEBPACK_IMPORTED_MODULE_0__.getMarshaller)(_externalModels__WEBPACK_IMPORTED_MODULE_4__.sumBkm, {
  upgradeTo: "latest"
}).parser.parse());
const sumDiffDsModel = (0,_kie_tools_dmn_marshaller_dist_normalization_normalize__WEBPACK_IMPORTED_MODULE_1__.normalize)((0,_kie_tools_dmn_marshaller__WEBPACK_IMPORTED_MODULE_0__.getMarshaller)(_externalModels__WEBPACK_IMPORTED_MODULE_4__.sumDiffDs, {
  upgradeTo: "latest"
}).parser.parse());
const testTreePmmlModel = (0,_kie_tools_pmml_editor_marshaller__WEBPACK_IMPORTED_MODULE_2__.XML2PMML)(_externalModels__WEBPACK_IMPORTED_MODULE_4__.testTreePmml);
const availableModels = [{
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
const availableModelsByPath = Object.values(availableModels).reduce((acc, v) => {
  acc[v.normalizedPosixPathRelativeToTheOpenFile] = v;
  return acc;
}, {});
const modelsByNamespace = Object.values(availableModels).reduce((acc, v) => {
  if (v.type === "dmn") {
    acc[v.model.definitions["@_namespace"]] = v;
  } else if (v.type === "pmml") {
    acc[(0,_kie_tools_dmn_editor_dist_pmml_pmml__WEBPACK_IMPORTED_MODULE_3__.getPmmlNamespace)({
      normalizedPosixPathRelativeToTheOpenFile: v.normalizedPosixPathRelativeToTheOpenFile
    })] = v;
  }
  return acc;
}, {});

/***/ }),

/***/ "./stories/misc/emptyWithAvailableExternalModels/externalModels.ts":
/*!*************************************************************************!*\
  !*** ./stories/misc/emptyWithAvailableExternalModels/externalModels.ts ***!
  \*************************************************************************/
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlzYy1lbXB0eVdpdGhBdmFpbGFibGVFeHRlcm5hbE1vZGVscy1FbXB0eVdpdGhBdmFpbGFibGVFeHRlcm5hbE1vZGVscy1zdG9yaWVzLmM2ZmIyNGEzLmlmcmFtZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFtQnNCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNDaUM7QUFFa0M7QUFDRTtBQUNiO0FBQ1E7QUFDMkc7QUFDbEc7QUFDOUI7QUFDcUI7QUFDL0UsTUFBTWEsa0JBQWtCLEdBQUdBLENBQUEsS0FBTTs7V0FFN0JSLDBGQUFPLENBQUNTLEdBQUcsQ0FBQyxFQUFFLENBQUM7d0JBQ0ZQLGdHQUFVLENBQUNRLGtCQUFrQixDQUFDQyxPQUFPOzBDQUNuQlYsNEZBQVksRUFBRTtRQUNoREEsNEZBQVksRUFBRTthQUNUQSw0RkFBWSxFQUFFO2VBQ1o7QUFDZixNQUFNVyxZQUFZLEdBQUdKLGtCQUFrQixFQUFFO0FBQ3pDLFNBQVNLLDRCQUE0QkEsQ0FBQ0MsSUFBb0I7RUFDeEQsTUFBTSxDQUFDQyxLQUFLLEVBQUVDLFFBQVEsQ0FBQyxHQUFHbkIsK0NBQVEsQ0FJL0IsTUFBSztJQUNOLE1BQU1vQixvQkFBb0IsR0FBR25CLHdFQUFhLENBQUNjLFlBQVksRUFBRTtNQUN2RE0sU0FBUyxFQUFFO0tBQ1osQ0FBQztJQUNGLE9BQU87TUFDTEMsVUFBVSxFQUFFRixvQkFBb0I7TUFDaENHLEtBQUssRUFBRSxDQUFDaEIsaUdBQVMsQ0FBQ2Esb0JBQW9CLENBQUNJLE1BQU0sQ0FBQ0MsS0FBSyxFQUFFLENBQUMsQ0FBQztNQUN2REMsT0FBTyxFQUFFO0tBQ1Y7RUFDSCxDQUFDLENBQUM7RUFDRixNQUFNQyxZQUFZLEdBQUdULEtBQUssQ0FBQ0ssS0FBSyxDQUFDTCxLQUFLLENBQUNRLE9BQU8sQ0FBQztFQUMvQyxNQUFNRSx5QkFBeUIsR0FBRzdCLDhDQUFPLENBQXNCLE1BQUs7O0lBQ2xFLE9BQU8sQ0FBQyxDQUFBOEIsRUFB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Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RGhDLE1BQU1zQyxNQUFNLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQW9DckI7QUFFTSxNQUFNQyxTQUFTLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQWtIeEI7QUFFTSxNQUFNQyxZQUFZLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0EyQzNCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGtpZS10b29scy9kbW4tZWRpdG9yLy4uL3BtbWwtZWRpdG9yLW1hcnNoYWxsZXIvc3JjL2luZGV4LnRzIiwid2VicGFjazovL0BraWUtdG9vbHMvZG1uLWVkaXRvci8uL3N0b3JpZXMvbWlzYy9lbXB0eVdpdGhBdmFpbGFibGVFeHRlcm5hbE1vZGVscy9FbXB0eVdpdGhBdmFpbGFibGVFeHRlcm5hbE1vZGVscy5zdG9yaWVzLnRzeCIsIndlYnBhY2s6Ly9Aa2llLXRvb2xzL2Rtbi1lZGl0b3IvLi9zdG9yaWVzL21pc2MvZW1wdHlXaXRoQXZhaWxhYmxlRXh0ZXJuYWxNb2RlbHMvYXZhaWxhYmxlTW9kZWxzVG9JbmNsdWRlLnRzIiwid2VicGFjazovL0BraWUtdG9vbHMvZG1uLWVkaXRvci8uL3N0b3JpZXMvbWlzYy9lbXB0eVdpdGhBdmFpbGFibGVFeHRlcm5hbE1vZGVscy9leHRlcm5hbE1vZGVscy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogTGljZW5zZWQgdG8gdGhlIEFwYWNoZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIChBU0YpIHVuZGVyIG9uZVxuICogb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuICBTZWUgdGhlIE5PVElDRSBmaWxlXG4gKiBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvblxuICogcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuICBUaGUgQVNGIGxpY2Vuc2VzIHRoaXMgZmlsZVxuICogdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZVxuICogXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4gKiB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZyxcbiAqIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXG4gKiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxuICogS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlXG4gKiBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zXG4gKiB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5leHBvcnQgKiBmcm9tIFwiLi9hcGlcIjtcbmV4cG9ydCAqIGZyb20gXCIuL21hcnNoYWxsZXJcIjtcbiIsIi8qXG4gKiBMaWNlbnNlZCB0byB0aGUgQXBhY2hlIFNvZnR3YXJlIEZvdW5kYXRpb24gKEFTRikgdW5kZXIgb25lXG4gKiBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gIFNlZSB0aGUgTk9USUNFIGZpbGVcbiAqIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uXG4gKiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC4gIFRoZSBBU0YgbGljZW5zZXMgdGhpcyBmaWxlXG4gKiB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlXG4gKiBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2VcbiAqIHdpdGggdGhlIExpY2Vuc2UuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLFxuICogc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cbiAqIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXG4gKiBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGVcbiAqIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnNcbiAqIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdHlwZSB7IE1ldGEsIFN0b3J5T2JqIH0gZnJvbSBcIkBzdG9yeWJvb2svcmVhY3RcIjtcbmltcG9ydCB7IERtbkxhdGVzdE1vZGVsLCBEbW5NYXJzaGFsbGVyLCBnZXRNYXJzaGFsbGVyIH0gZnJvbSBcIkBraWUtdG9vbHMvZG1uLW1hcnNoYWxsZXJcIjtcbmltcG9ydCB7IG5zIGFzIGRtbjE1bnMgfSBmcm9tIFwiQGtpZS10b29scy9kbW4tbWFyc2hhbGxlci9kaXN0L3NjaGVtYXMvZG1uLTFfNS90cy1nZW4vbWV0YVwiO1xuaW1wb3J0IHsgZ2VuZXJhdGVVdWlkIH0gZnJvbSBcIkBraWUtdG9vbHMvYm94ZWQtZXhwcmVzc2lvbi1jb21wb25lbnQvZGlzdC9hcGlcIjtcbmltcG9ydCB7IERNTjE1X1NQRUMgfSBmcm9tIFwiQGtpZS10b29scy9kbW4tbWFyc2hhbGxlci9kaXN0L3NjaGVtYXMvZG1uLTFfNS9EbW4xNVNwZWNcIjtcbmltcG9ydCB7IERtbkVkaXRvciwgRG1uRWRpdG9yUHJvcHMsIEV4dGVybmFsTW9kZWxzSW5kZXgsIE9uUmVxdWVzdEV4dGVybmFsTW9kZWxCeVBhdGgsIE9uUmVxdWVzdEV4dGVybmFsTW9kZWxzQXZhaWxhYmxlVG9JbmNsdWRlLCBPbkRtbk1vZGVsQ2hhbmdlIH0gZnJvbSBcIkBraWUtdG9vbHMvZG1uLWVkaXRvci9kaXN0L0RtbkVkaXRvclwiO1xuaW1wb3J0IHsgbm9ybWFsaXplLCBOb3JtYWxpemVkIH0gZnJvbSBcIkBraWUtdG9vbHMvZG1uLW1hcnNoYWxsZXIvZGlzdC9ub3JtYWxpemF0aW9uL25vcm1hbGl6ZVwiO1xuaW1wb3J0IHsgRG1uRWRpdG9yV3JhcHBlciB9IGZyb20gXCIuLi8uLi9kbW5FZGl0b3JTdG9yaWVzV3JhcHBlclwiO1xuaW1wb3J0IHsgYXZhaWxhYmxlTW9kZWxzQnlQYXRoLCBtb2RlbHNCeU5hbWVzcGFjZSB9IGZyb20gXCIuL2F2YWlsYWJsZU1vZGVsc1RvSW5jbHVkZVwiO1xuZXhwb3J0IGNvbnN0IGdlbmVyYXRlRW1wdHlEbW4xNSA9ICgpID0+IGA8P3htbCB2ZXJzaW9uPVwiMS4wXCIgZW5jb2Rpbmc9XCJVVEYtOFwiPz5cbjxkZWZpbml0aW9uc1xuICB4bWxucz1cIiR7ZG1uMTVucy5nZXQoXCJcIil9XCJcbiAgZXhwcmVzc2lvbkxhbmd1YWdlPVwiJHtETU4xNV9TUEVDLmV4cHJlc3Npb25MYW5ndWFnZS5kZWZhdWx0fVwiXG4gIG5hbWVzcGFjZT1cImh0dHBzOi8va2llLmFwYWNoZS5vcmcvZG1uLyR7Z2VuZXJhdGVVdWlkKCl9XCJcbiAgaWQ9XCIke2dlbmVyYXRlVXVpZCgpfVwiXG4gIG5hbWU9XCJETU4ke2dlbmVyYXRlVXVpZCgpfVwiPlxuPC9kZWZpbml0aW9ucz5gO1xuY29uc3QgaW5pdGlhbE1vZGVsID0gZ2VuZXJhdGVFbXB0eURtbjE1KCk7XG5mdW5jdGlvbiBFbXB0eVN0b3J5V2l0aEluY2x1ZGVkTW9kZWxzKGFyZ3M6IERtbkVkaXRvclByb3BzKSB7XG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGU8e1xuICAgIG1hcnNoYWxsZXI6IERtbk1hcnNoYWxsZXI7XG4gICAgc3RhY2s6IE5vcm1hbGl6ZWQ8RG1uTGF0ZXN0TW9kZWw+W107XG4gICAgcG9pbnRlcjogbnVtYmVyO1xuICB9PigoKSA9PiB7XG4gICAgY29uc3QgaW5pdGlhbERtbk1hcnNoYWxsZXIgPSBnZXRNYXJzaGFsbGVyKGluaXRpYWxNb2RlbCwge1xuICAgICAgdXBncmFkZVRvOiBcImxhdGVzdFwiXG4gICAgfSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1hcnNoYWxsZXI6IGluaXRpYWxEbW5NYXJzaGFsbGVyLFxuICAgICAgc3RhY2s6IFtub3JtYWxpemUoaW5pdGlhbERtbk1hcnNoYWxsZXIucGFyc2VyLnBhcnNlKCkpXSxcbiAgICAgIHBvaW50ZXI6IDBcbiAgICB9O1xuICB9KTtcbiAgY29uc3QgY3VycmVudE1vZGVsID0gc3RhdGUuc3RhY2tbc3RhdGUucG9pbnRlcl07XG4gIGNvbnN0IGV4dGVybmFsTW9kZWxzQnlOYW1lc3BhY2UgPSB1c2VNZW1vPEV4dGVybmFsTW9kZWxzSW5kZXg+KCgpID0+IHtcbiAgICByZXR1cm4gKGN1cnJlbnRNb2RlbC5kZWZpbml0aW9ucy5pbXBvcnQgPz8gW10pLnJlZHVjZSgoYWNjLCBpKSA9PiB7XG4gICAgICBhY2NbaVtcIkBfbmFtZXNwYWNlXCJdXSA9IG1vZGVsc0J5TmFtZXNwYWNlW2lbXCJAX25hbWVzcGFjZVwiXV07XG4gICAgICByZXR1cm4gYWNjO1xuICAgIH0sIHt9IGFzIEV4dGVybmFsTW9kZWxzSW5kZXgpO1xuICB9LCBbY3VycmVudE1vZGVsLmRlZmluaXRpb25zLmltcG9ydF0pO1xuICBjb25zdCBvblJlcXVlc3RFeHRlcm5hbE1vZGVsQnlQYXRoID0gdXNlQ2FsbGJhY2s8T25SZXF1ZXN0RXh0ZXJuYWxNb2RlbEJ5UGF0aD4oYXN5bmMgcGF0aCA9PiB7XG4gICAgcmV0dXJuIGF2YWlsYWJsZU1vZGVsc0J5UGF0aFtwYXRoXSA/PyBudWxsO1xuICB9LCBbXSk7XG4gIGNvbnN0IG9uUmVxdWVzdEV4dGVybmFsTW9kZWxzQXZhaWxhYmxlVG9JbmNsdWRlID0gdXNlQ2FsbGJhY2s8T25SZXF1ZXN0RXh0ZXJuYWxNb2RlbHNBdmFpbGFibGVUb0luY2x1ZGU+KGFzeW5jICgpID0+IHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoYXZhaWxhYmxlTW9kZWxzQnlQYXRoKTtcbiAgfSwgW10pO1xuICBjb25zdCBvbk1vZGVsQ2hhbmdlID0gdXNlQ2FsbGJhY2s8T25EbW5Nb2RlbENoYW5nZT4obW9kZWwgPT4ge1xuICAgIHNldFN0YXRlKHByZXYgPT4ge1xuICAgICAgY29uc3QgbmV3U3RhY2sgPSBwcmV2LnN0YWNrLnNsaWNlKDAsIHByZXYucG9pbnRlciArIDEpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4ucHJldixcbiAgICAgICAgc3RhY2s6IFsuLi5uZXdTdGFjaywgbW9kZWxdLFxuICAgICAgICBwb2ludGVyOiBuZXdTdGFjay5sZW5ndGhcbiAgICAgIH07XG4gICAgfSk7XG4gIH0sIFtdKTtcbiAgcmV0dXJuIDw+XG4gICAgICB7RG1uRWRpdG9yV3JhcHBlcih7XG4gICAgICBtb2RlbDogY3VycmVudE1vZGVsLFxuICAgICAgb3JpZ2luYWxWZXJzaW9uOiBhcmdzLm9yaWdpbmFsVmVyc2lvbixcbiAgICAgIG9uTW9kZWxDaGFuZ2UsXG4gICAgICBvblJlcXVlc3RFeHRlcm5hbE1vZGVsQnlQYXRoLFxuICAgICAgb25SZXF1ZXN0RXh0ZXJuYWxNb2RlbHNBdmFpbGFibGVUb0luY2x1ZGUsXG4gICAgICBleHRlcm5hbE1vZGVsc0J5TmFtZXNwYWNlLFxuICAgICAgZXh0ZXJuYWxDb250ZXh0TmFtZTogYXJncy5leHRlcm5hbENvbnRleHROYW1lLFxuICAgICAgZXh0ZXJuYWxDb250ZXh0RGVzY3JpcHRpb246IGFyZ3MuZXh0ZXJuYWxDb250ZXh0RGVzY3JpcHRpb24sXG4gICAgICB2YWxpZGF0aW9uTWVzc2FnZXM6IGFyZ3MudmFsaWRhdGlvbk1lc3NhZ2VzLFxuICAgICAgZXZhbHVhdGlvblJlc3VsdHNCeU5vZGVJZDogYXJncy5ldmFsdWF0aW9uUmVzdWx0c0J5Tm9kZUlkLFxuICAgICAgaXNzdWVUcmFja2VySHJlZjogYXJncy5pc3N1ZVRyYWNrZXJIcmVmXG4gICAgfSl9XG4gICAgPC8+O1xufVxuY29uc3QgbWV0YTogTWV0YTxEbW5FZGl0b3JQcm9wcz4gPSB7XG4gIHRpdGxlOiBcIk1pc2MvRW1wdHlXaXRoQXZhaWxhYmxlRXh0ZXJuYWxNb2RlbHNcIixcbiAgY29tcG9uZW50OiBEbW5FZGl0b3IsXG4gIGluY2x1ZGVTdG9yaWVzOiAvXltBLVpdL1xufTtcbmV4cG9ydCBkZWZhdWx0IG1ldGE7XG50eXBlIFN0b3J5ID0gU3RvcnlPYmo8dHlwZW9mIEVtcHR5U3RvcnlXaXRoSW5jbHVkZWRNb2RlbHM+O1xuZXhwb3J0IGNvbnN0IEVtcHR5V2l0aEF2YWlsYWJsZUV4dGVybmFsTW9kZWxzOiBTdG9yeSA9IHtcbiAgcmVuZGVyOiBhcmdzID0+IEVtcHR5U3RvcnlXaXRoSW5jbHVkZWRNb2RlbHMoYXJncyksXG4gIGFyZ3M6IHtcbiAgICBtb2RlbDogZ2V0TWFyc2hhbGxlcihpbml0aWFsTW9kZWwsIHtcbiAgICAgIHVwZ3JhZGVUbzogXCJsYXRlc3RcIlxuICAgIH0pLnBhcnNlci5wYXJzZSgpLFxuICAgIG9yaWdpbmFsVmVyc2lvbjogXCIxLjVcIixcbiAgICBldmFsdWF0aW9uUmVzdWx0c0J5Tm9kZUlkOiBuZXcgTWFwKCksXG4gICAgZXh0ZXJuYWxDb250ZXh0RGVzY3JpcHRpb246IFwiRXh0ZXJuYWwgY29udGV4dCBkZXNjcmlwdGlvblwiLFxuICAgIGV4dGVybmFsQ29udGV4dE5hbWU6IFwiU3Rvcnlib29rIC0gRE1OIEVkaXRvclwiLFxuICAgIGV4dGVybmFsTW9kZWxzQnlOYW1lc3BhY2U6IHt9LFxuICAgIGlzc3VlVHJhY2tlckhyZWY6IFwiXCIsXG4gICAgdmFsaWRhdGlvbk1lc3NhZ2VzOiB7fVxuICB9XG59O1xuRW1wdHlXaXRoQXZhaWxhYmxlRXh0ZXJuYWxNb2RlbHMucGFyYW1ldGVycyA9IHtcbiAgLi4uRW1wdHlXaXRoQXZhaWxhYmxlRXh0ZXJuYWxNb2RlbHMucGFyYW1ldGVycyxcbiAgZG9jczoge1xuICAgIC4uLkVtcHR5V2l0aEF2YWlsYWJsZUV4dGVybmFsTW9kZWxzLnBhcmFtZXRlcnM/LmRvY3MsXG4gICAgc291cmNlOiB7XG4gICAgICBvcmlnaW5hbFNvdXJjZTogXCJ7XFxuICByZW5kZXI6IGFyZ3MgPT4gRW1wdHlTdG9yeVdpdGhJbmNsdWRlZE1vZGVscyhhcmdzKSxcXG4gIGFyZ3M6IHtcXG4gICAgbW9kZWw6IGdldE1hcnNoYWxsZXIoaW5pdGlhbE1vZGVsLCB7XFxuICAgICAgdXBncmFkZVRvOiBcXFwibGF0ZXN0XFxcIlxcbiAgICB9KS5wYXJzZXIucGFyc2UoKSxcXG4gICAgb3JpZ2luYWxWZXJzaW9uOiBcXFwiMS41XFxcIixcXG4gICAgZXZhbHVhdGlvblJlc3VsdHNCeU5vZGVJZDogbmV3IE1hcCgpLFxcbiAgICBleHRlcm5hbENvbnRleHREZXNjcmlwdGlvbjogXFxcIkV4dGVybmFsIGNvbnRleHQgZGVzY3JpcHRpb25cXFwiLFxcbiAgICBleHRlcm5hbENvbnRleHROYW1lOiBcXFwiU3Rvcnlib29rIC0gRE1OIEVkaXRvclxcXCIsXFxuICAgIGV4dGVybmFsTW9kZWxzQnlOYW1lc3BhY2U6IHt9LFxcbiAgICBpc3N1ZVRyYWNrZXJIcmVmOiBcXFwiXFxcIixcXG4gICAgdmFsaWRhdGlvbk1lc3NhZ2VzOiB7fVxcbiAgfVxcbn1cIixcbiAgICAgIC4uLkVtcHR5V2l0aEF2YWlsYWJsZUV4dGVybmFsTW9kZWxzLnBhcmFtZXRlcnM/LmRvY3M/LnNvdXJjZVxuICAgIH1cbiAgfVxufTsiLCIvKlxuICogTGljZW5zZWQgdG8gdGhlIEFwYWNoZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIChBU0YpIHVuZGVyIG9uZVxuICogb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuICBTZWUgdGhlIE5PVElDRSBmaWxlXG4gKiBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvblxuICogcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuICBUaGUgQVNGIGxpY2Vuc2VzIHRoaXMgZmlsZVxuICogdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZVxuICogXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4gKiB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZyxcbiAqIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXG4gKiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxuICogS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlXG4gKiBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zXG4gKiB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgeyBnZXRNYXJzaGFsbGVyIH0gZnJvbSBcIkBraWUtdG9vbHMvZG1uLW1hcnNoYWxsZXJcIjtcbmltcG9ydCB7IG5vcm1hbGl6ZSB9IGZyb20gXCJAa2llLXRvb2xzL2Rtbi1tYXJzaGFsbGVyL2Rpc3Qvbm9ybWFsaXphdGlvbi9ub3JtYWxpemVcIjtcbmltcG9ydCB7IFhNTDJQTU1MIH0gZnJvbSBcIkBraWUtdG9vbHMvcG1tbC1lZGl0b3ItbWFyc2hhbGxlclwiO1xuaW1wb3J0ICogYXMgRG1uRWRpdG9yIGZyb20gXCJAa2llLXRvb2xzL2Rtbi1lZGl0b3IvZGlzdC9EbW5FZGl0b3JcIjtcbmltcG9ydCB7IGdldFBtbWxOYW1lc3BhY2UgfSBmcm9tIFwiQGtpZS10b29scy9kbW4tZWRpdG9yL2Rpc3QvcG1tbC9wbW1sXCI7XG5pbXBvcnQgeyBzdW1Ca20sIHN1bURpZmZEcywgdGVzdFRyZWVQbW1sIH0gZnJvbSBcIi4vZXh0ZXJuYWxNb2RlbHNcIjtcblxuZXhwb3J0IGNvbnN0IHN1bUJrbU1vZGVsID0gbm9ybWFsaXplKGdldE1hcnNoYWxsZXIoc3VtQmttLCB7IHVwZ3JhZGVUbzogXCJsYXRlc3RcIiB9KS5wYXJzZXIucGFyc2UoKSk7XG5leHBvcnQgY29uc3Qgc3VtRGlmZkRzTW9kZWwgPSBub3JtYWxpemUoZ2V0TWFyc2hhbGxlcihzdW1EaWZmRHMsIHsgdXBncmFkZVRvOiBcImxhdGVzdFwiIH0pLnBhcnNlci5wYXJzZSgpKTtcbmV4cG9ydCBjb25zdCB0ZXN0VHJlZVBtbWxNb2RlbCA9IFhNTDJQTU1MKHRlc3RUcmVlUG1tbCk7XG5cbmV4cG9ydCBjb25zdCBhdmFpbGFibGVNb2RlbHM6IERtbkVkaXRvci5FeHRlcm5hbE1vZGVsW10gPSBbXG4gIHtcbiAgICB0eXBlOiBcImRtblwiLFxuICAgIG1vZGVsOiBzdW1Ca21Nb2RlbCxcbiAgICBzdmc6IFwiXCIsXG4gICAgbm9ybWFsaXplZFBvc2l4UGF0aFJlbGF0aXZlVG9UaGVPcGVuRmlsZTogXCJwbGF5Z3JvdW5kL2F2YWlsYWJsZS1tb2RlbHMtdG8taW5jbHVkZS9zdW1Ca20uZG1uXCIsXG4gIH0sXG4gIHtcbiAgICB0eXBlOiBcImRtblwiLFxuICAgIG1vZGVsOiBzdW1EaWZmRHNNb2RlbCxcbiAgICBzdmc6IFwiXCIsXG4gICAgbm9ybWFsaXplZFBvc2l4UGF0aFJlbGF0aXZlVG9UaGVPcGVuRmlsZTogXCJwbGF5Z3JvdW5kL2F2YWlsYWJsZS1tb2RlbHMtdG8taW5jbHVkZS9zdW1EaWZmRHMuZG1uXCIsXG4gIH0sXG4gIHtcbiAgICB0eXBlOiBcImRtblwiLFxuICAgIG1vZGVsOiBub3JtYWxpemUoXG4gICAgICBnZXRNYXJzaGFsbGVyKGA8ZGVmaW5pdGlvbnMgeG1sbnM9XCJodHRwczovL3d3dy5vbWcub3JnL3NwZWMvRE1OLzIwMjMwMzI0L01PREVML1wiIC8+YCwge1xuICAgICAgICB1cGdyYWRlVG86IFwibGF0ZXN0XCIsXG4gICAgICB9KS5wYXJzZXIucGFyc2UoKVxuICAgICksXG4gICAgc3ZnOiBcIlwiLFxuICAgIG5vcm1hbGl6ZWRQb3NpeFBhdGhSZWxhdGl2ZVRvVGhlT3BlbkZpbGU6IFwicGxheWdyb3VuZC9hdmFpbGFibGUtbW9kZWxzLXRvLWluY2x1ZGUvZW1wdHkuZG1uXCIsXG4gIH0sXG4gIHtcbiAgICB0eXBlOiBcInBtbWxcIixcbiAgICBtb2RlbDogdGVzdFRyZWVQbW1sTW9kZWwsXG4gICAgbm9ybWFsaXplZFBvc2l4UGF0aFJlbGF0aXZlVG9UaGVPcGVuRmlsZTogXCJwbGF5Z3JvdW5kL2F2YWlsYWJsZS1tb2RlbHMtdG8taW5jbHVkZS90ZXN0VHJlZS5wbW1sXCIsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgYXZhaWxhYmxlTW9kZWxzQnlQYXRoOiBSZWNvcmQ8c3RyaW5nLCBEbW5FZGl0b3IuRXh0ZXJuYWxNb2RlbD4gPSBPYmplY3QudmFsdWVzKGF2YWlsYWJsZU1vZGVscykucmVkdWNlKFxuICAoYWNjLCB2KSA9PiB7XG4gICAgYWNjW3Yubm9ybWFsaXplZFBvc2l4UGF0aFJlbGF0aXZlVG9UaGVPcGVuRmlsZV0gPSB2O1xuICAgIHJldHVybiBhY2M7XG4gIH0sXG4gIHt9IGFzIFJlY29yZDxzdHJpbmcsIERtbkVkaXRvci5FeHRlcm5hbE1vZGVsPlxuKTtcblxuZXhwb3J0IGNvbnN0IG1vZGVsc0J5TmFtZXNwYWNlID0gT2JqZWN0LnZhbHVlcyhhdmFpbGFibGVNb2RlbHMpLnJlZHVjZSgoYWNjLCB2KSA9PiB7XG4gIGlmICh2LnR5cGUgPT09IFwiZG1uXCIpIHtcbiAgICBhY2Nbdi5tb2RlbC5kZWZpbml0aW9uc1tcIkBfbmFtZXNwYWNlXCJdXSA9IHY7XG4gIH0gZWxzZSBpZiAodi50eXBlID09PSBcInBtbWxcIikge1xuICAgIGFjY1tnZXRQbW1sTmFtZXNwYWNlKHsgbm9ybWFsaXplZFBvc2l4UGF0aFJlbGF0aXZlVG9UaGVPcGVuRmlsZTogdi5ub3JtYWxpemVkUG9zaXhQYXRoUmVsYXRpdmVUb1RoZU9wZW5GaWxlIH0pXSA9IHY7XG4gIH1cbiAgcmV0dXJuIGFjYztcbn0sIHt9IGFzIERtbkVkaXRvci5FeHRlcm5hbE1vZGVsc0luZGV4KTtcbiIsIi8qXG4gKiBMaWNlbnNlZCB0byB0aGUgQXBhY2hlIFNvZnR3YXJlIEZvdW5kYXRpb24gKEFTRikgdW5kZXIgb25lXG4gKiBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gIFNlZSB0aGUgTk9USUNFIGZpbGVcbiAqIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uXG4gKiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC4gIFRoZSBBU0YgbGljZW5zZXMgdGhpcyBmaWxlXG4gKiB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlXG4gKiBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2VcbiAqIHdpdGggdGhlIExpY2Vuc2UuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLFxuICogc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cbiAqIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXG4gKiBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGVcbiAqIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnNcbiAqIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmV4cG9ydCBjb25zdCBzdW1Ca20gPSBgPGRlZmluaXRpb25zIFxuICB4bWxucz1cImh0dHBzOi8vd3d3Lm9tZy5vcmcvc3BlYy9ETU4vMjAyMzAzMjQvTU9ERUwvXCJcbiAgeG1sbnM6ZG1uZGk9XCJodHRwczovL3d3dy5vbWcub3JnL3NwZWMvRE1OLzIwMjMwMzI0L0RNTkRJL1wiIFxuICB4bWxuczpkYz1cImh0dHA6Ly93d3cub21nLm9yZy9zcGVjL0RNTi8yMDE4MDUyMS9EQy9cIiBcbiAgeG1sbnM6ZGk9XCJodHRwOi8vd3d3Lm9tZy5vcmcvc3BlYy9ETU4vMjAxODA1MjEvREkvXCIgXG4gIHhtbG5zOmtpZT1cImh0dHBzOi8va2llLmFwYWNoZS5vcmcvZG1uL2V4dGVuc2lvbnMvMS4wXCJcbiAgZXhwcmVzc2lvbkxhbmd1YWdlPVwiaHR0cHM6Ly93d3cub21nLm9yZy9zcGVjL0RNTi8yMDIxMTEwOC9GRUVML1wiXG4gIHR5cGVMYW5ndWFnZT1cImh0dHA6Ly93d3cub21nLm9yZy9zcGVjL0RNTi8yMDIxMTEwOC9GRUVML1wiXG4gIG5hbWVzcGFjZT1cImh0dHBzOi8va2llLmFwYWNoZS5vcmcvZG1uL185MjM3ODRCRC1DRDMxLTQ4OEEtOUMzMS1DMUE4M0M1NDgzQzBcIiBcbiAgaWQ9XCJfMEU2RjREODgtQjk1NS00MDRCLUEzMUEtNzJCQjdFMUU2QTc3XCIgXG4gIG5hbWU9XCJTdW0gQktNXCI+XG48YnVzaW5lc3NLbm93bGVkZ2VNb2RlbCBuYW1lPVwiU3VtIEJLTVwiIGlkPVwiXzM2NDY2MDBELTAzNUYtNDdCOS04REM2LTNGQUJFODQ0MjM0RlwiPlxuICA8dmFyaWFibGUgbmFtZT1cIk5ldyBCS01cIiBpZD1cIl85NEJBQzlGRC04NTE5LTQ5RjktODU1QS1GNEZDQkFDRDJBMDRcIiB0eXBlUmVmPVwibnVtYmVyXCIgLz5cbiAgPGZ1bmN0aW9uRGVmaW5pdGlvbiBsYWJlbD1cIlN1bSBCS01cIiBraW5kPVwiRkVFTFwiIHR5cGVSZWY9XCJudW1iZXJcIj5cbiAgICA8Zm9ybWFsUGFyYW1ldGVyIGlkPVwiX0YzQTcwQTY5LTA5RkYtNDE3Qy04RjZDLUJEOTEyOTIzMTM3N1wiIG5hbWU9XCJhXCIgdHlwZVJlZj1cIm51bWJlclwiIC8+XG4gICAgPGZvcm1hbFBhcmFtZXRlciBpZD1cIl9FNTFCMUM2RS04OTZCLTQxQzAtQjAzRS04NUIzQ0Q3QjY2NTVcIiBuYW1lPVwiYlwiIHR5cGVSZWY9XCJudW1iZXJcIiAvPlxuICAgIDxsaXRlcmFsRXhwcmVzc2lvbiBpZD1cIl9GQTFFRTIyQi1DQzZCLTQ5OUYtOTVFRS02ODE1OEEyRjIzM0JcIiBsYWJlbD1cIkV4cHJlc3Npb24gTmFtZVwiIHR5cGVSZWY9XCImbHQ7VW5kZWZpbmVkJmd0O1wiPlxuICAgICAgPHRleHQ+YSArIGI8L3RleHQ+XG4gICAgPC9saXRlcmFsRXhwcmVzc2lvbj5cbiAgPC9mdW5jdGlvbkRlZmluaXRpb24+XG48L2J1c2luZXNzS25vd2xlZGdlTW9kZWw+XG48ZG1uZGk6RE1OREk+XG4gIDxkbW5kaTpETU5EaWFncmFtPlxuICAgIDxkbW5kaTpETU5TaGFwZSBpZD1cIl8zNTA2QTA4Ny1BQjYwLTQyOEQtOUM3NS0xRTVGNUQ2RjA5NDdcIiBkbW5FbGVtZW50UmVmPVwiXzM2NDY2MDBELTAzNUYtNDdCOS04REM2LTNGQUJFODQ0MjM0RlwiIGlzQ29sbGFwc2VkPVwiZmFsc2VcIiBpc0xpc3RlZElucHV0RGF0YT1cImZhbHNlXCI+XG4gICAgICA8ZGM6Qm91bmRzIHg9XCI0MFwiIHk9XCI2MFwiIHdpZHRoPVwiMTYwXCIgaGVpZ2h0PVwiODBcIiAvPlxuICAgIDwvZG1uZGk6RE1OU2hhcGU+XG4gICAgPGRpOmV4dGVuc2lvbj5cbiAgICAgIDxraWU6Q29tcG9uZW50c1dpZHRoc0V4dGVuc2lvbj5cbiAgICAgICAgPGtpZTpDb21wb25lbnRXaWR0aHMgZG1uRWxlbWVudFJlZj1cIl9GQTFFRTIyQi1DQzZCLTQ5OUYtOTVFRS02ODE1OEEyRjIzM0JcIj5cbiAgICAgICAgICA8a2llOndpZHRoPjE5MDwva2llOndpZHRoPlxuICAgICAgICA8L2tpZTpDb21wb25lbnRXaWR0aHM+XG4gICAgICA8L2tpZTpDb21wb25lbnRzV2lkdGhzRXh0ZW5zaW9uPlxuICAgIDwvZGk6ZXh0ZW5zaW9uPlxuICA8L2RtbmRpOkRNTkRpYWdyYW0+XG48L2RtbmRpOkRNTkRJPlxuPC9kZWZpbml0aW9ucz5cbmA7XG5cbmV4cG9ydCBjb25zdCBzdW1EaWZmRHMgPSBgPGRlZmluaXRpb25zIFxuICB4bWxucz1cImh0dHBzOi8vd3d3Lm9tZy5vcmcvc3BlYy9ETU4vMjAyMzAzMjQvTU9ERUwvXCIgXG4gIHhtbG5zOmRtbmRpPVwiaHR0cHM6Ly93d3cub21nLm9yZy9zcGVjL0RNTi8yMDIzMDMyNC9ETU5ESS9cIlxuICB4bWxuczpkYz1cImh0dHA6Ly93d3cub21nLm9yZy9zcGVjL0RNTi8yMDE4MDUyMS9EQy9cIiBcbiAgeG1sbnM6ZGk9XCJodHRwOi8vd3d3Lm9tZy5vcmcvc3BlYy9ETU4vMjAxODA1MjEvREkvXCIgXG4gIHhtbG5zOmtpZT1cImh0dHBzOi8va2llLmFwYWNoZS5vcmcvZG1uL2V4dGVuc2lvbnMvMS4wXCJcbiAgZXhwcmVzc2lvbkxhbmd1YWdlPVwiaHR0cHM6Ly93d3cub21nLm9yZy9zcGVjL0RNTi8yMDIxMTEwOC9GRUVML1wiIFxuICB0eXBlTGFuZ3VhZ2U9XCJodHRwOi8vd3d3Lm9tZy5vcmcvc3BlYy9ETU4vMjAyMTExMDgvRkVFTC9cIlxuICBuYW1lc3BhY2U9XCJodHRwczovL2tpZS5hcGFjaGUub3JnL2Rtbi9fRDE5QjAwMTUtMkNCRC00QkE4LTg0QTktNUY1NTREODRBOUUxXCIgXG4gIGlkPVwiX0YzNjBDRUNCLTVERjItNDU0Ni1BN0E5LUU1RUNGMEY1QTg3MlwiIFxuICBuYW1lPVwiU3VtIGFuZCBEaWZmIERTXCI+XG48ZGVjaXNpb25TZXJ2aWNlIG5hbWU9XCJTdW0gYW5kIERpZmYgRFNcIiBpZD1cIl83MjFCNzYzNC03MjI3LTQyQjQtQUFBNC0xN0RFNjBBN0E5NjdcIj5cbiAgPHZhcmlhYmxlIG5hbWU9XCJOZXcgRGVjaXNpb24gU2VydmljZVwiIGlkPVwiX0E5OTZENEJELUNGNjktNENDNS04OUMwLTM3Q0YyQkQ2QkE2RVwiIHR5cGVSZWY9XCJjb250ZXh0XCIgLz5cbiAgPGlucHV0RGF0YSBocmVmPVwiI18xOEZBRTkxMy0yQjJBLTQ3OUQtQTUzQS0xNEEyRDU3QzQ2RTRcIiAvPlxuICA8aW5wdXREYXRhIGhyZWY9XCIjXzBENkU4M0EwLTE3MUYtNEQ3Qy1CMERGLTg0NjREREUwNUZEMVwiIC8+XG4gIDxvdXRwdXREZWNpc2lvbiBocmVmPVwiI18xOTkxRkIzNC0xMjUzLTRBNTQtQUQzRC04OTY5NzkzOERERkFcIiAvPlxuICA8b3V0cHV0RGVjaXNpb24gaHJlZj1cIiNfMDU2MjFFRDQtOTIzNi00N0YxLUI5M0EtMTY0QTQ1MjdCMTM2XCIgLz5cbjwvZGVjaXNpb25TZXJ2aWNlPlxuPGRlY2lzaW9uIG5hbWU9XCJTdW1cIiBpZD1cIl8wNTYyMUVENC05MjM2LTQ3RjEtQjkzQS0xNjRBNDUyN0IxMzZcIj5cbiAgPHZhcmlhYmxlIG5hbWU9XCJOZXcgRGVjaXNpb25cIiBpZD1cIl84OEVDQTg5MS0zODM3LTQwRTYtQkNCRi03N0JGMjRCMjZGRDBcIiB0eXBlUmVmPVwibnVtYmVyXCIgLz5cbiAgPGluZm9ybWF0aW9uUmVxdWlyZW1lbnQgaWQ9XCJfODFCRDQ5RjQtRTI3OS00OEE0LUFDNzEtODlDRTkyRUVERTlDXCI+XG4gICAgPHJlcXVpcmVkSW5wdXQgaHJlZj1cIiNfMThGQUU5MTMtMkIyQS00NzlELUE1M0EtMTRBMkQ1N0M0NkU0XCIgLz5cbiAgPC9pbmZvcm1hdGlvblJlcXVpcmVtZW50PlxuICA8aW5mb3JtYXRpb25SZXF1aXJlbWVudCBpZD1cIl8xMTVCNEM4OS1FQkE4LTQxMzYtQTcwRS05RDMwM0Q4RTkyQzVcIj5cbiAgICA8cmVxdWlyZWRJbnB1dCBocmVmPVwiI18wRDZFODNBMC0xNzFGLTREN0MtQjBERi04NDY0RERFMDVGRDFcIiAvPlxuICA8L2luZm9ybWF0aW9uUmVxdWlyZW1lbnQ+XG4gIDxsaXRlcmFsRXhwcmVzc2lvbiBpZD1cIl8yODEyRTBFQS1GRDMyLTQ4MEYtODlDRC1EMEZFNUZBMDIxNzJcIiBsYWJlbD1cIlN1bVwiIHR5cGVSZWY9XCImbHQ7VW5kZWZpbmVkJmd0O1wiPlxuICAgIDx0ZXh0PmEgKyBiPC90ZXh0PlxuICA8L2xpdGVyYWxFeHByZXNzaW9uPlxuPC9kZWNpc2lvbj5cbjxpbnB1dERhdGEgbmFtZT1cImFcIiBpZD1cIl8xOEZBRTkxMy0yQjJBLTQ3OUQtQTUzQS0xNEEyRDU3QzQ2RTRcIj5cbiAgPHZhcmlhYmxlIG5hbWU9XCJOZXcgSW5wdXQgRGF0YVwiIGlkPVwiXzI1MERCODUwLTk3RjUtNDVDOC1BRkJCLTIwNzIxOEJEQUY3RVwiIHR5cGVSZWY9XCJudW1iZXJcIiAvPlxuPC9pbnB1dERhdGE+XG48aW5wdXREYXRhIG5hbWU9XCJiXCIgaWQ9XCJfMEQ2RTgzQTAtMTcxRi00RDdDLUIwREYtODQ2NERERTA1RkQxXCI+XG4gIDx2YXJpYWJsZSBuYW1lPVwiTmV3IElucHV0IERhdGFcIiBpZD1cIl8wRkQzRTQ5MS05M0U0LTRBQzEtQUI0Ni0xOUE2QzZBM0U0RjFcIiB0eXBlUmVmPVwibnVtYmVyXCIgLz5cbjwvaW5wdXREYXRhPlxuPGRlY2lzaW9uIG5hbWU9XCJEaWZmXCIgaWQ9XCJfMTk5MUZCMzQtMTI1My00QTU0LUFEM0QtODk2OTc5MzhEREZBXCI+XG4gIDx2YXJpYWJsZSBuYW1lPVwiTmV3IERlY2lzaW9uXCIgaWQ9XCJfNDdBRDZGQjEtMTg5Mi00RTI3LUI0NkQtMEFGOTVCMTg2MDJFXCIgdHlwZVJlZj1cIm51bWJlclwiIC8+XG4gIDxpbmZvcm1hdGlvblJlcXVpcmVtZW50IGlkPVwiXzVDQThFQTExLUZERkYtNDEwQS1BQjRGLUFBN0FDQjlGN0ZEQ1wiPlxuICAgIDxyZXF1aXJlZElucHV0IGhyZWY9XCIjXzE4RkFFOTEzLTJCMkEtNDc5RC1BNTNBLTE0QTJENTdDNDZFNFwiIC8+XG4gIDwvaW5mb3JtYXRpb25SZXF1aXJlbWVudD5cbiAgPGluZm9ybWF0aW9uUmVxdWlyZW1lbnQgaWQ9XCJfRDlFNUZCMEYtMUE4Qy00NzMzLUJCQUItRTRBNTUxMTNGODA2XCI+XG4gICAgPHJlcXVpcmVkSW5wdXQgaHJlZj1cIiNfMEQ2RTgzQTAtMTcxRi00RDdDLUIwREYtODQ2NERERTA1RkQxXCIgLz5cbiAgPC9pbmZvcm1hdGlvblJlcXVpcmVtZW50PlxuICA8bGl0ZXJhbEV4cHJlc3Npb24gaWQ9XCJfQzZCQkZDMkUtNjk1Ri00NjY4LThBMEUtRDE3NUZFNzMwMkM3XCIgbGFiZWw9XCJEaWZmXCIgdHlwZVJlZj1cIiZsdDtVbmRlZmluZWQmZ3Q7XCI+XG4gICAgPHRleHQ+YSAtIGI8L3RleHQ+XG4gIDwvbGl0ZXJhbEV4cHJlc3Npb24+XG48L2RlY2lzaW9uPlxuPGl0ZW1EZWZpbml0aW9uIGlkPVwiXzg0MkY0RTE2LUM5QTItNDdENC1BMjIxLTA4MTY3M0I5OEMyRFwiIG5hbWU9XCJTdW1EaWZmQ29udGV4dFwiIGlzQ29sbGVjdGlvbj1cImZhbHNlXCI+XG4gIDxpdGVtQ29tcG9uZW50IGlkPVwiXzQ4ODJENEZCLTIxNDYtNDE5OC04NjQwLTMzQjk1MUI4OTNBN1wiIG5hbWU9XCJTdW1cIiBpc0NvbGxlY3Rpb249XCJmYWxzZVwiPlxuICAgIDx0eXBlUmVmPm51bWJlcjwvdHlwZVJlZj5cbiAgPC9pdGVtQ29tcG9uZW50PlxuICA8aXRlbUNvbXBvbmVudCBpZD1cIl8zRUYyN0I3RC0zMzc4LTQyOUUtQjZEQi1CODU2RjVFQjBBRTdcIiBuYW1lPVwiRGlmZlwiIGlzQ29sbGVjdGlvbj1cImZhbHNlXCI+XG4gICAgPHR5cGVSZWY+bnVtYmVyPC90eXBlUmVmPlxuICA8L2l0ZW1Db21wb25lbnQ+XG48L2l0ZW1EZWZpbml0aW9uPlxuPGl0ZW1EZWZpbml0aW9uIGlkPVwiXzJCNEU5NTkzLTMyMzktNEUwNC1BMjEzLTM0NUYwQUEwQUY5RVwiIG5hbWU9XCJGaW5lXCIgaXNDb2xsZWN0aW9uPVwiZmFsc2VcIj5cbiAgPGl0ZW1Db21wb25lbnQgaWQ9XCJfM0VGMjdCN0QtMzM3OC00MjlFLUI2REItQjg1NkY1RUIwQUVFXCIgbmFtZT1cIlZhbHVlXCIgaXNDb2xsZWN0aW9uPVwiZmFsc2VcIj5cbiAgICA8dHlwZVJlZj5udW1iZXI8L3R5cGVSZWY+XG4gICAgPGFsbG93ZWRWYWx1ZXMgaWQ9XCJfNUJEMTNEOUQtNDEyRi00RTZCLTkxNEEtM0Q4QUFBQzZBNzAxXCI+XG4gICAgICA8dGV4dD4xMDAsNTAwLDEwMDA8L3RleHQ+XG4gICAgPC9hbGxvd2VkVmFsdWVzPlxuICA8L2l0ZW1Db21wb25lbnQ+XG48L2l0ZW1EZWZpbml0aW9uPlxuPGRtbmRpOkRNTkRJPlxuICA8ZG1uZGk6RE1ORGlhZ3JhbT5cbiAgICA8ZG1uZGk6RE1OU2hhcGUgaWQ9XCJfNDk1Q0IwQTctMDE3QS00QTJGLUE0RDctMzEzM0M4MjcwOEUwXCIgZG1uRWxlbWVudFJlZj1cIl83MjFCNzYzNC03MjI3LTQyQjQtQUFBNC0xN0RFNjBBN0E5NjdcIiBpc0NvbGxhcHNlZD1cImZhbHNlXCIgaXNMaXN0ZWRJbnB1dERhdGE9XCJmYWxzZVwiPlxuICAgICAgPGRjOkJvdW5kcyB4PVwiODBcIiB5PVwiMTIwXCIgd2lkdGg9XCI1MjBcIiBoZWlnaHQ9XCIzMjBcIiAvPlxuICAgICAgPGRtbmRpOkRNTkRlY2lzaW9uU2VydmljZURpdmlkZXJMaW5lPlxuICAgICAgICA8ZGk6d2F5cG9pbnQgeD1cIjgwXCIgeT1cIjI4MFwiIC8+XG4gICAgICAgIDxkaTp3YXlwb2ludCB4PVwiNTAwXCIgeT1cIjI4MFwiIC8+XG4gICAgICA8L2RtbmRpOkRNTkRlY2lzaW9uU2VydmljZURpdmlkZXJMaW5lPlxuICAgIDwvZG1uZGk6RE1OU2hhcGU+XG4gICAgPGRtbmRpOkRNTlNoYXBlIGlkPVwiXzgwQzQyMDI2LUZGNTYtNDRDNi04NEY5LUY3QTAzNjg2RjVFOFwiIGRtbkVsZW1lbnRSZWY9XCJfMDU2MjFFRDQtOTIzNi00N0YxLUI5M0EtMTY0QTQ1MjdCMTM2XCIgaXNDb2xsYXBzZWQ9XCJmYWxzZVwiIGlzTGlzdGVkSW5wdXREYXRhPVwiZmFsc2VcIj5cbiAgICAgIDxkYzpCb3VuZHMgeD1cIjE0MFwiIHk9XCIxODBcIiB3aWR0aD1cIjE2MFwiIGhlaWdodD1cIjgwXCIgLz5cbiAgICA8L2RtbmRpOkRNTlNoYXBlPlxuICAgIDxkbW5kaTpETU5TaGFwZSBpZD1cIl8yMThFRDVFOC1GQjAxLTQxN0YtQTFGNi04NjdENjBCQ0JGMTlcIiBkbW5FbGVtZW50UmVmPVwiXzE4RkFFOTEzLTJCMkEtNDc5RC1BNTNBLTE0QTJENTdDNDZFNFwiIGlzQ29sbGFwc2VkPVwiZmFsc2VcIiBpc0xpc3RlZElucHV0RGF0YT1cImZhbHNlXCI+XG4gICAgICA8ZGM6Qm91bmRzIHg9XCI4MFwiIHk9XCI0ODBcIiB3aWR0aD1cIjE2MFwiIGhlaWdodD1cIjgwXCIgLz5cbiAgICA8L2RtbmRpOkRNTlNoYXBlPlxuICAgIDxkbW5kaTpETU5TaGFwZSBpZD1cIl83QzEzNEJCRi0yQjk2LTRDOUEtQjk4NS1EMUZFMTBEQzMwRDJcIiBkbW5FbGVtZW50UmVmPVwiXzBENkU4M0EwLTE3MUYtNEQ3Qy1CMERGLTg0NjREREUwNUZEMVwiIGlzQ29sbGFwc2VkPVwiZmFsc2VcIiBpc0xpc3RlZElucHV0RGF0YT1cImZhbHNlXCI+XG4gICAgICA8ZGM6Qm91bmRzIHg9XCI0NDBcIiB5PVwiNDgwXCIgd2lkdGg9XCIxNjBcIiBoZWlnaHQ9XCI4MFwiIC8+XG4gICAgPC9kbW5kaTpETU5TaGFwZT5cbiAgICA8ZG1uZGk6RE1ORWRnZSBpZD1cIl83NjhDNUQ2RS05QTQxLTRBQTMtOTIxQy1BNTQ1RThGMTE1OTdcIiBkbW5FbGVtZW50UmVmPVwiXzgxQkQ0OUY0LUUyNzktNDhBNC1BQzcxLTg5Q0U5MkVFREU5Q1wiIHNvdXJjZUVsZW1lbnQ9XCJfMjE4RUQ1RTgtRkIwMS00MTdGLUExRjYtODY3RDYwQkNCRjE5XCIgdGFyZ2V0RWxlbWVudD1cIl84MEM0MjAyNi1GRjU2LTQ0QzYtODRGOS1GN0EwMzY4NkY1RThcIj5cbiAgICAgIDxkaTp3YXlwb2ludCB4PVwiMTYwXCIgeT1cIjUyMFwiIC8+XG4gICAgICA8ZGk6d2F5cG9pbnQgeD1cIjIyMFwiIHk9XCIyNjBcIiAvPlxuICAgIDwvZG1uZGk6RE1ORWRnZT5cbiAgICA8ZG1uZGk6RE1ORWRnZSBpZD1cIl83OUUyRTUzMi04RDg0LTQwQzktOTFEQS0wN0VBNjA2Nzk4RTVcIiBkbW5FbGVtZW50UmVmPVwiXzExNUI0Qzg5LUVCQTgtNDEzNi1BNzBFLTlEMzAzRDhFOTJDNVwiIHNvdXJjZUVsZW1lbnQ9XCJfN0MxMzRCQkYtMkI5Ni00QzlBLUI5ODUtRDFGRTEwREMzMEQyXCIgdGFyZ2V0RWxlbWVudD1cIl84MEM0MjAyNi1GRjU2LTQ0QzYtODRGOS1GN0EwMzY4NkY1RThcIj5cbiAgICAgIDxkaTp3YXlwb2ludCB4PVwiNTIwXCIgeT1cIjUyMFwiIC8+XG4gICAgICA8ZGk6d2F5cG9pbnQgeD1cIjIyMFwiIHk9XCIyNjBcIiAvPlxuICAgIDwvZG1uZGk6RE1ORWRnZT5cbiAgICA8ZG1uZGk6RE1OU2hhcGUgaWQ9XCJfMTU1M0VCNkMtMkJFOC00QkMzLTg5NzItQTg3MzA4Qjk4Qzg2XCIgZG1uRWxlbWVudFJlZj1cIl8xOTkxRkIzNC0xMjUzLTRBNTQtQUQzRC04OTY5NzkzOERERkFcIiBpc0NvbGxhcHNlZD1cImZhbHNlXCIgaXNMaXN0ZWRJbnB1dERhdGE9XCJmYWxzZVwiPlxuICAgICAgPGRjOkJvdW5kcyB4PVwiMzgwXCIgeT1cIjE4MFwiIHdpZHRoPVwiMTYwXCIgaGVpZ2h0PVwiODBcIiAvPlxuICAgIDwvZG1uZGk6RE1OU2hhcGU+XG4gICAgPGRtbmRpOkRNTkVkZ2UgaWQ9XCJfQzY5Nzk0ODMtREJCQS00QUMwLUFCMjgtRTEyRUZFRjA4NjU0XCIgZG1uRWxlbWVudFJlZj1cIl81Q0E4RUExMS1GREZGLTQxMEEtQUI0Ri1BQTdBQ0I5RjdGRENcIiBzb3VyY2VFbGVtZW50PVwiXzIxOEVENUU4LUZCMDEtNDE3Ri1BMUY2LTg2N0Q2MEJDQkYxOVwiIHRhcmdldEVsZW1lbnQ9XCJfMTU1M0VCNkMtMkJFOC00QkMzLTg5NzItQTg3MzA4Qjk4Qzg2XCI+XG4gICAgICA8ZGk6d2F5cG9pbnQgeD1cIjE2MFwiIHk9XCI1MjBcIiAvPlxuICAgICAgPGRpOndheXBvaW50IHg9XCI0NjBcIiB5PVwiMjYwXCIgLz5cbiAgICA8L2RtbmRpOkRNTkVkZ2U+XG4gICAgPGRtbmRpOkRNTkVkZ2UgaWQ9XCJfMzc4QzUyMTMtMDg0Qi00QTFELUFEQ0MtQ0VGRTQxRjdFOUZDXCIgZG1uRWxlbWVudFJlZj1cIl9EOUU1RkIwRi0xQThDLTQ3MzMtQkJBQi1FNEE1NTExM0Y4MDZcIiBzb3VyY2VFbGVtZW50PVwiXzdDMTM0QkJGLTJCOTYtNEM5QS1COTg1LUQxRkUxMERDMzBEMlwiIHRhcmdldEVsZW1lbnQ9XCJfMTU1M0VCNkMtMkJFOC00QkMzLTg5NzItQTg3MzA4Qjk4Qzg2XCI+XG4gICAgICA8ZGk6d2F5cG9pbnQgeD1cIjUyMFwiIHk9XCI1MjBcIiAvPlxuICAgICAgPGRpOndheXBvaW50IHg9XCI0NjBcIiB5PVwiMjYwXCIgLz5cbiAgICA8L2RtbmRpOkRNTkVkZ2U+XG4gICAgPGRpOmV4dGVuc2lvbj5cbiAgICAgIDxraWU6Q29tcG9uZW50c1dpZHRoc0V4dGVuc2lvbj5cbiAgICAgICAgPGtpZTpDb21wb25lbnRXaWR0aHMgZG1uRWxlbWVudFJlZj1cIl8yODEyRTBFQS1GRDMyLTQ4MEYtODlDRC1EMEZFNUZBMDIxNzJcIj5cbiAgICAgICAgICA8a2llOndpZHRoPjE5MDwva2llOndpZHRoPlxuICAgICAgICA8L2tpZTpDb21wb25lbnRXaWR0aHM+XG4gICAgICAgIDxraWU6Q29tcG9uZW50V2lkdGhzIGRtbkVsZW1lbnRSZWY9XCJfQzZCQkZDMkUtNjk1Ri00NjY4LThBMEUtRDE3NUZFNzMwMkM3XCI+XG4gICAgICAgICAgPGtpZTp3aWR0aD4xOTA8L2tpZTp3aWR0aD5cbiAgICAgICAgPC9raWU6Q29tcG9uZW50V2lkdGhzPlxuICAgICAgPC9raWU6Q29tcG9uZW50c1dpZHRoc0V4dGVuc2lvbj5cbiAgICA8L2RpOmV4dGVuc2lvbj5cbiAgPC9kbW5kaTpETU5EaWFncmFtPlxuPC9kbW5kaTpETU5EST5cbjwvZGVmaW5pdGlvbnM+XG5gO1xuLy8gQ29waWVkIGZyb20ga29naXRvLWV4YW1wbGVzL2tvZ2l0by1xdWFya3VzLWV4YW1wbGVzL2Rtbi1wbW1sLXF1YXJrdXMtZXhhbXBsZS9zcmMvbWFpbi9yZXNvdXJjZXNcbmV4cG9ydCBjb25zdCB0ZXN0VHJlZVBtbWwgPSBgPFBNTUwgdmVyc2lvbj1cIjQuMlwiIHhzaTpzY2hlbWFMb2NhdGlvbj1cImh0dHA6Ly93d3cuZG1nLm9yZy9QTU1MLTRfMiBodHRwOi8vd3d3LmRtZy5vcmcvdjQtMi0xL3BtbWwtNC0yLnhzZFwiIHhtbG5zOnhzaT1cImh0dHA6Ly93d3cudzMub3JnLzIwMDEvWE1MU2NoZW1hLWluc3RhbmNlXCJcbnhtbG5zPVwiaHR0cDovL3d3dy5kbWcub3JnL1BNTUwtNF8yXCI+XG48SGVhZGVyPlxuIDxBcHBsaWNhdGlvbiBuYW1lPVwiRHJvb2xzLVBNTUxcIiB2ZXJzaW9uPVwiNy4wLjAtU05BUFNIT1RcIiAvPlxuPC9IZWFkZXI+XG5cbjxEYXRhRGljdGlvbmFyeSBudW1iZXJPZkZpZWxkcz1cIjNcIj5cbiA8RGF0YUZpZWxkIG5hbWU9XCJ0ZW1wZXJhdHVyZVwiIGRhdGFUeXBlPVwiZG91YmxlXCIgb3B0eXBlPVwiY29udGludW91c1wiIC8+XG4gPERhdGFGaWVsZCBuYW1lPVwiaHVtaWRpdHlcIiBkYXRhVHlwZT1cImRvdWJsZVwiIG9wdHlwZT1cImNvbnRpbnVvdXNcIiAvPiAgIFxuIDxEYXRhRmllbGQgbmFtZT1cImRlY2lzaW9uXCIgZGF0YVR5cGU9XCJzdHJpbmdcIiBvcHR5cGU9XCJjYXRlZ29yaWNhbFwiPiBcbiAgIDxWYWx1ZSB2YWx1ZT1cInN1bmdsYXNzZXNcIiAvPlxuICAgPFZhbHVlIHZhbHVlPVwidW1icmVsbGFcIiAvPlxuICAgPFZhbHVlIHZhbHVlPVwibm90aGluZ1wiIC8+ICAgICBcbiA8L0RhdGFGaWVsZD5cbjwvRGF0YURpY3Rpb25hcnk+XG5cbjxUcmVlTW9kZWwgbW9kZWxOYW1lPVwiRGVjaXNpb25UcmVlXCIgZnVuY3Rpb25OYW1lPVwiY2xhc3NpZmljYXRpb25cIj5cbiA8TWluaW5nU2NoZW1hPlxuICAgPE1pbmluZ0ZpZWxkIG5hbWU9XCJ0ZW1wZXJhdHVyZVwiICB1c2FnZVR5cGU9XCJhY3RpdmVcIiAvPlxuICAgPE1pbmluZ0ZpZWxkIG5hbWU9XCJodW1pZGl0eVwiICB1c2FnZVR5cGU9XCJhY3RpdmVcIiAvPlxuICAgPE1pbmluZ0ZpZWxkIG5hbWU9XCJkZWNpc2lvblwiIHVzYWdlVHlwZT1cInByZWRpY3RlZFwiIC8+XG4gPC9NaW5pbmdTY2hlbWE+XG4gPE91dHB1dD5cbiAgIDxPdXRwdXRGaWVsZCBuYW1lPVwid2VhdGhlcmRlY2lzaW9uXCIgdGFyZ2V0RmllbGQ9XCJkZWNpc2lvblwiIC8+XG4gPC9PdXRwdXQ+XG4gXG4gPE5vZGUgc2NvcmU9XCJub3RoaW5nXCIgaWQ9XCIxXCI+XG4gICA8VHJ1ZSAvPlxuICAgPE5vZGUgc2NvcmU9XCJzdW5nbGFzc2VzXCIgaWQ9XCIyXCI+XG4gICAgIDxDb21wb3VuZFByZWRpY2F0ZSBib29sZWFuT3BlcmF0b3I9XCJhbmRcIj5cbiAgICAgICA8U2ltcGxlUHJlZGljYXRlIGZpZWxkPVwidGVtcGVyYXR1cmVcIiBvcGVyYXRvcj1cImdyZWF0ZXJUaGFuXCIgdmFsdWU9XCIyNVwiIC8+XG4gICAgICAgPFNpbXBsZVByZWRpY2F0ZSBmaWVsZD1cImh1bWlkaXR5XCIgb3BlcmF0b3I9XCJsZXNzT3JFcXVhbFwiIHZhbHVlPVwiMjBcIiAvPlxuICAgICA8L0NvbXBvdW5kUHJlZGljYXRlPlxuICAgPC9Ob2RlPlxuICAgPE5vZGUgc2NvcmU9XCJ1bWJyZWxsYVwiIGlkPVwiM1wiPlxuICAgICA8U2ltcGxlUHJlZGljYXRlIGZpZWxkPVwiaHVtaWRpdHlcIiBvcGVyYXRvcj1cImdyZWF0ZXJUaGFuXCIgdmFsdWU9XCI1MFwiIC8+XG4gICA8L05vZGU+XG4gICA8Tm9kZSBzY29yZT1cIm5vdGhpbmdcIiBpZD1cIjRcIj5cbiAgICAgPFRydWUgLz5cbiAgIDwvTm9kZT5cbiA8L05vZGU+XG48L1RyZWVNb2RlbD5cbjwvUE1NTD5cbmA7XG4iXSwibmFtZXMiOlsidXNlQ2FsbGJhY2siLCJ1c2VNZW1vIiwidXNlU3RhdGUiLCJnZXRNYXJzaGFsbGVyIiwibnMiLCJkbW4xNW5zIiwiZ2VuZXJhdGVVdWlkIiwiRE1OMTVfU1BFQyIsIkRtbkVkaXRvciIsIm5vcm1hbGl6ZSIsIkRtbkVkaXRvcldyYXBwZXIiLCJhdmFpbGFibGVNb2RlbHNCeVBhdGgiLCJtb2RlbHNCeU5hbWVzcGFjZSIsImdlbmVyYXRlRW1wdHlEbW4xNSIsImdldCIsImV4cHJlc3Npb25MYW5ndWFnZSIsImRlZmF1bHQiLCJpbml0aWFsTW9kZWwiLCJFbXB0eVN0b3J5V2l0aEluY2x1ZGVkTW9kZWxzIiwiYXJncyIsInN0YXRlIiwic2V0U3RhdGUiLCJpbml0aWFsRG1uTWFyc2hhbGxlciIsInVwZ3JhZGVUbyIsIm1hcnNoYWxsZXIiLCJzdGFjayIsInBhcnNlciIsInBhcnNlIiwicG9pbnRlciIsImN1cnJlbnRNb2RlbCIsImV4dGVybmFsTW9kZWxzQnlOYW1lc3BhY2UiLCJfYSIsImRlZmluaXRpb25zIiwiaW1wb3J0IiwicmVkdWNlIiwiYWNjIiwiaSIsIm9uUmVxdWVzdEV4dGVybmFsTW9kZWxCeVBhdGgiLCJwYXRoIiwib25SZXF1ZXN0RXh0ZXJuYWxNb2RlbHNBdmFpbGFibGVUb0luY2x1ZGUiLCJPYmplY3QiLCJrZXlzIiwib25Nb2RlbENoYW5nZSIsIm1vZGVsIiwicHJldiIsIm5ld1N0YWNrIiwic2xpY2UiLCJsZW5ndGgiLCJfanN4IiwiX0ZyYWdtZW50IiwiY2hpbGRyZW4iLCJvcmlnaW5hbFZlcnNpb24iLCJleHRlcm5hbENvbnRleHROYW1lIiwiZXh0ZXJuYWxDb250ZXh0RGVzY3JpcHRpb24iLCJ2YWxpZGF0aW9uTWVzc2FnZXMiLCJldmFsdWF0aW9uUmVzdWx0c0J5Tm9kZUlkIiwiaXNzdWVUcmFja2VySHJlZiIsIm1ldGEiLCJ0aXRsZSIsImNvbXBvbmVudCIsImluY2x1ZGVTdG9yaWVzIiwiRW1wdHlXaXRoQXZhaWxhYmxlRXh0ZXJuYWxNb2RlbHMiLCJyZW5kZXIiLCJNYXAiLCJwYXJhbWV0ZXJzIiwiZG9jcyIsInNvdXJjZSIsIm9yaWdpbmFsU291cmNlIiwiX2MiLCJfYiIsIl9fbmFtZWRFeHBvcnRzT3JkZXIiLCJYTUwyUE1NTCIsImdldFBtbWxOYW1lc3BhY2UiLCJzdW1Ca20iLCJzdW1EaWZmRHMiLCJ0ZXN0VHJlZVBtbWwiLCJzdW1Ca21Nb2RlbCIsInN1bURpZmZEc01vZGVsIiwidGVzdFRyZWVQbW1sTW9kZWwiLCJhdmFpbGFibGVNb2RlbHMiLCJ0eXBlIiwic3ZnIiwibm9ybWFsaXplZFBvc2l4UGF0aFJlbGF0aXZlVG9UaGVPcGVuRmlsZSIsInZhbHVlcyIsInYiXSwic291cmNlUm9vdCI6IiJ9