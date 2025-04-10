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
      externalModelsByNamespace: externalModelsByNamespace,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlzYy1lbXB0eVdpdGhBdmFpbGFibGVFeHRlcm5hbE1vZGVscy1FbXB0eVdpdGhBdmFpbGFibGVFeHRlcm5hbE1vZGVscy1zdG9yaWVzLmQ0NTA2NzA2LmlmcmFtZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFtQnNCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNDaUM7QUFFa0M7QUFDRTtBQUNiO0FBQ1E7QUFDMkc7QUFDbEc7QUFDOUI7QUFDcUI7QUFDL0UsTUFBTWEsa0JBQWtCLEdBQUdBLENBQUEsS0FBTTs7V0FFN0JSLDBGQUFPLENBQUNTLEdBQUcsQ0FBQyxFQUFFLENBQUM7d0JBQ0ZQLGdHQUFVLENBQUNRLGtCQUFrQixDQUFDQyxPQUFPOzBDQUNuQlYsNEZBQVksRUFBRTtRQUNoREEsNEZBQVksRUFBRTthQUNUQSw0RkFBWSxFQUFFO2VBQ1o7QUFDZixNQUFNVyxZQUFZLEdBQUdKLGtCQUFrQixFQUFFO0FBQ3pDLFNBQVNLLDRCQUE0QkEsQ0FBQ0MsSUFBb0I7RUFDeEQsTUFBTSxDQUFDQyxLQUFLLEVBQUVDLFFBQVEsQ0FBQyxHQUFHbkIsK0NBQVEsQ0FJL0IsTUFBSztJQUNOLE1BQU1vQixvQkFBb0IsR0FBR25CLHdFQUFhLENBQUNjLFlBQVksRUFBRTtNQUN2RE0sU0FBUyxFQUFFO0tBQ1osQ0FBQztJQUNGLE9BQU87TUFDTEMsVUFBVSxFQUFFRixvQkFBb0I7TUFDaENHLEtBQUssRUFBRSxDQUFDaEIsaUdBQVMsQ0FBQ2Esb0JBQW9CLENBQUNJLE1BQU0sQ0FBQ0MsS0FBSyxFQUFFLENBQUMsQ0FBQztNQUN2REMsT0FBTyxFQUFFO0tBQ1Y7RUFDSCxDQUFDLENBQUM7RUFDRixNQUFNQyxZQUFZLEdBQUdULEtBQUssQ0FBQ0ssS0FBSyxDQUFDTCxLQUFLLENBQUNRLE9BQU8sQ0FBQztFQUMvQyxNQUFNRSx5QkFBeUIsR0FBRzdCLDhDQUFPLENBQXNCLE1BQUs7O0lBQ2xFLE9BQU8sQ0FBQyxDQUFBOEIsRUFBQSxHQUFBRixZQUFZLENBQUNHLFdBQVcsQ0FBQ0MsTUFBTSxjQUFBRixFQUFBLGNBQUFBLEVBQUEsR0FBSSxFQUFFLEVBQUVHLE1BQU0sQ0FBQyxDQUFDQyxHQUFHLEVBQUVDLENBQUMsS0FBSTtNQUMvREQsR0FBRyxDQUFDQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsR0FBR3hCLHdFQUFpQixDQUFDd0IsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDO01BQzNELE9BQU9ELEdBQUc7SUFDWixDQUFDLEVBQUUsRUFBeUIsQ0FBQztFQUMvQixDQUFDLEVBQUUsQ0FBQ04sWUFBWSxDQUFDRyxXQUFXLENBQUNDLE1BQU0sQ0FBQyxDQUFDO0VBQ3JDLE1BQU1JLDRCQUE0QixHQUFHckMsa0RBQVcsQ0FBK0IsTUFBTXNDLElBQUksSUFBRzs7SUFDMUYsT0FBTyxDQUFBUCxFQUFBLEdBQUFwQiw0RUFBcUIsQ0FBQzJCLElBQUksQ0FBQyxjQUFBUCxFQUFBLGNBQUFBLEVBQUEsR0FBSSxJQUFJO0VBQzVDLENBQUMsRUFBRSxFQUFFLENBQUM7RUFDTixNQUFNUSx5Q0FBeUMsR0FBR3ZDLGtEQUFXLENBQTRDLFlBQVc7SUFDbEgsT0FBT3dDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDOUIsNEVBQXFCLENBQUM7RUFDM0MsQ0FBQyxFQUFFLEVBQUUsQ0FBQztFQUNOLE1BQU0rQixhQUFhLEdBQUcxQyxrREFBVyxDQUFtQjJDLEtBQUssSUFBRztJQUMxRHRCLFFBQVEsQ0FBQ3VCLElBQUksSUFBRztNQUNkLE1BQU1DLFFBQVEsR0FBR0QsSUFBSSxDQUFDbkIsS0FBSyxDQUFDcUIsS0FBSyxDQUFDLENBQUMsRUFBRUYsSUFBSSxDQUFDaEIsT0FBTyxHQUFHLENBQUMsQ0FBQztNQUN0RCxPQUFPO1FBQ0wsR0FBR2dCLElBQUk7UUFDUG5CLEtBQUssRUFBRSxDQUFDLEdBQUdvQixRQUFRLEVBQUVGLEtBQUssQ0FBQztRQUMzQmYsT0FBTyxFQUFFaUIsUUFBUSxDQUFDRTtPQUNuQjtJQUNILENBQUMsQ0FBQztFQUNKLENBQUMsRUFBRSxFQUFFLENBQUM7RUFDTixPQUFPQyxzREFBQSxDQUFBQyx1REFBQTtJQUFBQyxRQUFBLEVBQ0Z4QywwRUFBZ0IsQ0FBQztNQUNsQmlDLEtBQUssRUFBRWQsWUFBWTtNQUNuQnNCLGVBQWUsRUFBRWhDLElBQUksQ0FBQ2dDLGVBQWU7TUFDckNULGFBQWE7TUFDYkwsNEJBQTRCO01BQzVCRSx5Q0FBeUM7TUFDekNULHlCQUF5QixFQUFFQSx5QkFBeUI7TUFDcERzQixtQkFBbUIsRUFBRWpDLElBQUksQ0FBQ2lDLG1CQUFtQjtNQUM3Q0MsMEJBQTBCLEVBQUVsQyxJQUFJLENBQUNrQywwQkFBMEI7TUFDM0RDLGtCQUFrQixFQUFFbkMsSUFBSSxDQUFDbUMsa0JBQWtCO01BQzNDQyx5QkFBeUIsRUFBRXBDLElBQUksQ0FBQ29DLHlCQUF5QjtNQUN6REMsZ0JBQWdCLEVBQUVyQyxJQUFJLENBQUNxQztLQUN4QjtFQUFDLEVBQ0M7QUFDUDtBQUNBLE1BQU1DLElBQUksR0FBeUI7RUFDakNDLEtBQUssRUFBRSx1Q0FBdUM7RUFDOUNDLFNBQVMsRUFBRW5ELDJFQUFTO0VBQ3BCb0QsY0FBYyxFQUFFO0NBQ2pCO0FBQ0QsaUVBQWVILElBQUksRUFBQztBQUViLE1BQU1JLGdDQUFnQyxHQUFVO0VBQ3JEQyxNQUFNLEVBQUUzQyxJQUFJLElBQUlELDRCQUE0QixDQUFDQyxJQUFJLENBQUM7RUFDbERBLElBQUksRUFBRTtJQUNKd0IsS0FBSyxFQUFFeEMsd0VBQWEsQ0FBQ2MsWUFBWSxFQUFFO01BQ2pDTSxTQUFTLEVBQUU7S0FDWixDQUFDLENBQUNHLE1BQU0sQ0FBQ0MsS0FBSyxFQUFFO0lBQ2pCd0IsZUFBZSxFQUFFLEtBQUs7SUFDdEJJLHlCQUF5QixFQUFFLElBQUlRLEdBQUcsRUFBRTtJQUNwQ1YsMEJBQTBCLEVBQUUsOEJBQThCO0lBQzFERCxtQkFBbUIsRUFBRSx3QkFBd0I7SUFDN0N0Qix5QkFBeUIsRUFBRSxFQUFFO0lBQzdCMEIsZ0JBQWdCLEVBQUUsRUFBRTtJQUNwQkYsa0JBQWtCLEVBQUU7O0NBRXZCO0FBQ0RPLGdDQUFnQyxDQUFDRyxVQUFVLEdBQUc7RUFDNUMsR0FBR0gsZ0NBQWdDLENBQUNHLFVBQVU7RUFDOUNDLElBQUksRUFBRTtJQUNKLElBQUcsQ0FBQWxDLEVBQUEsR0FBQThCLGdDQUFnQyxDQUFDRyxVQUFVLGNBQUFqQyxFQUFBLHVCQUFBQSxFQUFBLENBQUVrQyxJQUFJO0lBQ3BEQyxNQUFNLEVBQUU7TUFDTkMsY0FBYyxFQUFFLDRjQUE0YztNQUM1ZCxJQUFHLENBQUFDLEVBQUEsSUFBQUMsRUFBQSxHQUFBUixnQ0FBZ0MsQ0FBQ0csVUFBVSxjQUFBSyxFQUFBLHVCQUFBQSxFQUFBLENBQUVKLElBQUksY0FBQUcsRUFBQSx1QkFBQUEsRUFBQSxDQUFFRixNQUFNOzs7Q0FHakU7QUFBQyxNQUFBSSxtQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6R3dEO0FBQ3lCO0FBQ3RCO0FBRVc7QUFDTDtBQUU1RCxNQUFNTSxXQUFXLEdBQUduRSxpR0FBUyxDQUFDTix3RUFBYSxDQUFDc0UsbURBQU0sRUFBRTtFQUFFbEQsU0FBUyxFQUFFO0FBQVEsQ0FBRSxDQUFDLENBQUNHLE1BQU0sQ0FBQ0MsS0FBSyxFQUFFLENBQUM7QUFDNUYsTUFBTWtELGNBQWMsR0FBR3BFLGlHQUFTLENBQUNOLHdFQUFhLENBQUN1RSxzREFBUyxFQUFFO0VBQUVuRCxTQUFTLEVBQUU7QUFBUSxDQUFFLENBQUMsQ0FBQ0csTUFBTSxDQUFDQyxLQUFLLEVBQUUsQ0FBQztBQUNsRyxNQUFNbUQsaUJBQWlCLEdBQUdQLDJFQUFRLENBQUNJLHlEQUFZLENBQUM7QUFFaEQsTUFBTUksZUFBZSxHQUE4QixDQUN4RDtFQUNFQyxJQUFJLEVBQUUsS0FBSztFQUNYckMsS0FBSyxFQUFFaUMsV0FBVztFQUNsQkssR0FBRyxFQUFFLEVBQUU7RUFDUEMsd0NBQXdDLEVBQUU7Q0FDM0MsRUFDRDtFQUNFRixJQUFJLEVBQUUsS0FBSztFQUNYckMsS0FBSyxFQUFFa0MsY0FBYztFQUNyQkksR0FBRyxFQUFFLEVBQUU7RUFDUEMsd0NBQXdDLEVBQUU7Q0FDM0MsRUFDRDtFQUNFRixJQUFJLEVBQUUsS0FBSztFQUNYckMsS0FBSyxFQUFFbEMsaUdBQVMsQ0FDZE4sd0VBQWEsQ0FBQyxzRUFBc0UsRUFBRTtJQUNwRm9CLFNBQVMsRUFBRTtHQUNaLENBQUMsQ0FBQ0csTUFBTSxDQUFDQyxLQUFLLEVBQUUsQ0FDbEI7RUFDRHNELEdBQUcsRUFBRSxFQUFFO0VBQ1BDLHdDQUF3QyxFQUFFO0NBQzNDLEVBQ0Q7RUFDRUYsSUFBSSxFQUFFLE1BQU07RUFDWnJDLEtBQUssRUFBRW1DLGlCQUFpQjtFQUN4Qkksd0NBQXdDLEVBQUU7Q0FDM0MsQ0FDRjtBQUVNLE1BQU12RSxxQkFBcUIsR0FBNEM2QixNQUFNLENBQUMyQyxNQUFNLENBQUNKLGVBQWUsQ0FBQyxDQUFDN0MsTUFBTSxDQUNqSCxDQUFDQyxHQUFHLEVBQUVpRCxDQUFDLEtBQUk7RUFDVGpELEdBQUcsQ0FBQ2lELENBQUMsQ0FBQ0Ysd0NBQXdDLENBQUMsR0FBR0UsQ0FBQztFQUNuRCxPQUFPakQsR0FBRztBQUNaLENBQUMsRUFDRCxFQUE2QyxDQUM5QztBQUVNLE1BQU12QixpQkFBaUIsR0FBRzRCLE1BQU0sQ0FBQzJDLE1BQU0sQ0FBQ0osZUFBZSxDQUFDLENBQUM3QyxNQUFNLENBQUMsQ0FBQ0MsR0FBRyxFQUFFaUQsQ0FBQyxLQUFJO0VBQ2hGLElBQUlBLENBQUMsQ0FBQ0osSUFBSSxLQUFLLEtBQUssRUFBRTtJQUNwQjdDLEdBQUcsQ0FBQ2lELENBQUMsQ0FBQ3pDLEtBQUssQ0FBQ1gsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDLEdBQUdvRCxDQUFDO0VBQzdDLENBQUMsTUFBTSxJQUFJQSxDQUFDLENBQUNKLElBQUksS0FBSyxNQUFNLEVBQUU7SUFDNUI3QyxHQUFHLENBQUNxQyxzRkFBZ0IsQ0FBQztNQUFFVSx3Q0FBd0MsRUFBRUUsQ0FBQyxDQUFDRjtJQUF3QyxDQUFFLENBQUMsQ0FBQyxHQUFHRSxDQUFDO0VBQ3JIO0VBQ0EsT0FBT2pELEdBQUc7QUFDWixDQUFDLEVBQUUsRUFBbUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDeERoQyxNQUFNc0MsTUFBTSxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FvQ3JCO0FBRU0sTUFBTUMsU0FBUyxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FrSHhCO0FBRU0sTUFBTUMsWUFBWSxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBMkMzQiIsInNvdXJjZXMiOlsid2VicGFjazovL0BraWUtdG9vbHMvZG1uLWVkaXRvci8uLi9wbW1sLWVkaXRvci1tYXJzaGFsbGVyL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9Aa2llLXRvb2xzL2Rtbi1lZGl0b3IvLi9zdG9yaWVzL21pc2MvZW1wdHlXaXRoQXZhaWxhYmxlRXh0ZXJuYWxNb2RlbHMvRW1wdHlXaXRoQXZhaWxhYmxlRXh0ZXJuYWxNb2RlbHMuc3Rvcmllcy50c3giLCJ3ZWJwYWNrOi8vQGtpZS10b29scy9kbW4tZWRpdG9yLy4vc3Rvcmllcy9taXNjL2VtcHR5V2l0aEF2YWlsYWJsZUV4dGVybmFsTW9kZWxzL2F2YWlsYWJsZU1vZGVsc1RvSW5jbHVkZS50cyIsIndlYnBhY2s6Ly9Aa2llLXRvb2xzL2Rtbi1lZGl0b3IvLi9zdG9yaWVzL21pc2MvZW1wdHlXaXRoQXZhaWxhYmxlRXh0ZXJuYWxNb2RlbHMvZXh0ZXJuYWxNb2RlbHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIExpY2Vuc2VkIHRvIHRoZSBBcGFjaGUgU29mdHdhcmUgRm91bmRhdGlvbiAoQVNGKSB1bmRlciBvbmVcbiAqIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiAgU2VlIHRoZSBOT1RJQ0UgZmlsZVxuICogZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb25cbiAqIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLiAgVGhlIEFTRiBsaWNlbnNlcyB0aGlzIGZpbGVcbiAqIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGVcbiAqIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuICogd2l0aCB0aGUgTGljZW5zZS4gIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsXG4gKiBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxuICogXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcbiAqIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZVxuICogc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9uc1xuICogdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuZXhwb3J0ICogZnJvbSBcIi4vYXBpXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9tYXJzaGFsbGVyXCI7XG4iLCIvKlxuICogTGljZW5zZWQgdG8gdGhlIEFwYWNoZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIChBU0YpIHVuZGVyIG9uZVxuICogb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuICBTZWUgdGhlIE5PVElDRSBmaWxlXG4gKiBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvblxuICogcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuICBUaGUgQVNGIGxpY2Vuc2VzIHRoaXMgZmlsZVxuICogdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZVxuICogXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4gKiB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZyxcbiAqIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXG4gKiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxuICogS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlXG4gKiBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zXG4gKiB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHR5cGUgeyBNZXRhLCBTdG9yeU9iaiB9IGZyb20gXCJAc3Rvcnlib29rL3JlYWN0XCI7XG5pbXBvcnQgeyBEbW5MYXRlc3RNb2RlbCwgRG1uTWFyc2hhbGxlciwgZ2V0TWFyc2hhbGxlciB9IGZyb20gXCJAa2llLXRvb2xzL2Rtbi1tYXJzaGFsbGVyXCI7XG5pbXBvcnQgeyBucyBhcyBkbW4xNW5zIH0gZnJvbSBcIkBraWUtdG9vbHMvZG1uLW1hcnNoYWxsZXIvZGlzdC9zY2hlbWFzL2Rtbi0xXzUvdHMtZ2VuL21ldGFcIjtcbmltcG9ydCB7IGdlbmVyYXRlVXVpZCB9IGZyb20gXCJAa2llLXRvb2xzL2JveGVkLWV4cHJlc3Npb24tY29tcG9uZW50L2Rpc3QvYXBpXCI7XG5pbXBvcnQgeyBETU4xNV9TUEVDIH0gZnJvbSBcIkBraWUtdG9vbHMvZG1uLW1hcnNoYWxsZXIvZGlzdC9zY2hlbWFzL2Rtbi0xXzUvRG1uMTVTcGVjXCI7XG5pbXBvcnQgeyBEbW5FZGl0b3IsIERtbkVkaXRvclByb3BzLCBFeHRlcm5hbE1vZGVsc0luZGV4LCBPblJlcXVlc3RFeHRlcm5hbE1vZGVsQnlQYXRoLCBPblJlcXVlc3RFeHRlcm5hbE1vZGVsc0F2YWlsYWJsZVRvSW5jbHVkZSwgT25EbW5Nb2RlbENoYW5nZSB9IGZyb20gXCJAa2llLXRvb2xzL2Rtbi1lZGl0b3IvZGlzdC9EbW5FZGl0b3JcIjtcbmltcG9ydCB7IG5vcm1hbGl6ZSwgTm9ybWFsaXplZCB9IGZyb20gXCJAa2llLXRvb2xzL2Rtbi1tYXJzaGFsbGVyL2Rpc3Qvbm9ybWFsaXphdGlvbi9ub3JtYWxpemVcIjtcbmltcG9ydCB7IERtbkVkaXRvcldyYXBwZXIgfSBmcm9tIFwiLi4vLi4vZG1uRWRpdG9yU3Rvcmllc1dyYXBwZXJcIjtcbmltcG9ydCB7IGF2YWlsYWJsZU1vZGVsc0J5UGF0aCwgbW9kZWxzQnlOYW1lc3BhY2UgfSBmcm9tIFwiLi9hdmFpbGFibGVNb2RlbHNUb0luY2x1ZGVcIjtcbmV4cG9ydCBjb25zdCBnZW5lcmF0ZUVtcHR5RG1uMTUgPSAoKSA9PiBgPD94bWwgdmVyc2lvbj1cIjEuMFwiIGVuY29kaW5nPVwiVVRGLThcIj8+XG48ZGVmaW5pdGlvbnNcbiAgeG1sbnM9XCIke2RtbjE1bnMuZ2V0KFwiXCIpfVwiXG4gIGV4cHJlc3Npb25MYW5ndWFnZT1cIiR7RE1OMTVfU1BFQy5leHByZXNzaW9uTGFuZ3VhZ2UuZGVmYXVsdH1cIlxuICBuYW1lc3BhY2U9XCJodHRwczovL2tpZS5hcGFjaGUub3JnL2Rtbi8ke2dlbmVyYXRlVXVpZCgpfVwiXG4gIGlkPVwiJHtnZW5lcmF0ZVV1aWQoKX1cIlxuICBuYW1lPVwiRE1OJHtnZW5lcmF0ZVV1aWQoKX1cIj5cbjwvZGVmaW5pdGlvbnM+YDtcbmNvbnN0IGluaXRpYWxNb2RlbCA9IGdlbmVyYXRlRW1wdHlEbW4xNSgpO1xuZnVuY3Rpb24gRW1wdHlTdG9yeVdpdGhJbmNsdWRlZE1vZGVscyhhcmdzOiBEbW5FZGl0b3JQcm9wcykge1xuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlPHtcbiAgICBtYXJzaGFsbGVyOiBEbW5NYXJzaGFsbGVyO1xuICAgIHN0YWNrOiBOb3JtYWxpemVkPERtbkxhdGVzdE1vZGVsPltdO1xuICAgIHBvaW50ZXI6IG51bWJlcjtcbiAgfT4oKCkgPT4ge1xuICAgIGNvbnN0IGluaXRpYWxEbW5NYXJzaGFsbGVyID0gZ2V0TWFyc2hhbGxlcihpbml0aWFsTW9kZWwsIHtcbiAgICAgIHVwZ3JhZGVUbzogXCJsYXRlc3RcIlxuICAgIH0pO1xuICAgIHJldHVybiB7XG4gICAgICBtYXJzaGFsbGVyOiBpbml0aWFsRG1uTWFyc2hhbGxlcixcbiAgICAgIHN0YWNrOiBbbm9ybWFsaXplKGluaXRpYWxEbW5NYXJzaGFsbGVyLnBhcnNlci5wYXJzZSgpKV0sXG4gICAgICBwb2ludGVyOiAwXG4gICAgfTtcbiAgfSk7XG4gIGNvbnN0IGN1cnJlbnRNb2RlbCA9IHN0YXRlLnN0YWNrW3N0YXRlLnBvaW50ZXJdO1xuICBjb25zdCBleHRlcm5hbE1vZGVsc0J5TmFtZXNwYWNlID0gdXNlTWVtbzxFeHRlcm5hbE1vZGVsc0luZGV4PigoKSA9PiB7XG4gICAgcmV0dXJuIChjdXJyZW50TW9kZWwuZGVmaW5pdGlvbnMuaW1wb3J0ID8/IFtdKS5yZWR1Y2UoKGFjYywgaSkgPT4ge1xuICAgICAgYWNjW2lbXCJAX25hbWVzcGFjZVwiXV0gPSBtb2RlbHNCeU5hbWVzcGFjZVtpW1wiQF9uYW1lc3BhY2VcIl1dO1xuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB7fSBhcyBFeHRlcm5hbE1vZGVsc0luZGV4KTtcbiAgfSwgW2N1cnJlbnRNb2RlbC5kZWZpbml0aW9ucy5pbXBvcnRdKTtcbiAgY29uc3Qgb25SZXF1ZXN0RXh0ZXJuYWxNb2RlbEJ5UGF0aCA9IHVzZUNhbGxiYWNrPE9uUmVxdWVzdEV4dGVybmFsTW9kZWxCeVBhdGg+KGFzeW5jIHBhdGggPT4ge1xuICAgIHJldHVybiBhdmFpbGFibGVNb2RlbHNCeVBhdGhbcGF0aF0gPz8gbnVsbDtcbiAgfSwgW10pO1xuICBjb25zdCBvblJlcXVlc3RFeHRlcm5hbE1vZGVsc0F2YWlsYWJsZVRvSW5jbHVkZSA9IHVzZUNhbGxiYWNrPE9uUmVxdWVzdEV4dGVybmFsTW9kZWxzQXZhaWxhYmxlVG9JbmNsdWRlPihhc3luYyAoKSA9PiB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGF2YWlsYWJsZU1vZGVsc0J5UGF0aCk7XG4gIH0sIFtdKTtcbiAgY29uc3Qgb25Nb2RlbENoYW5nZSA9IHVzZUNhbGxiYWNrPE9uRG1uTW9kZWxDaGFuZ2U+KG1vZGVsID0+IHtcbiAgICBzZXRTdGF0ZShwcmV2ID0+IHtcbiAgICAgIGNvbnN0IG5ld1N0YWNrID0gcHJldi5zdGFjay5zbGljZSgwLCBwcmV2LnBvaW50ZXIgKyAxKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnByZXYsXG4gICAgICAgIHN0YWNrOiBbLi4ubmV3U3RhY2ssIG1vZGVsXSxcbiAgICAgICAgcG9pbnRlcjogbmV3U3RhY2subGVuZ3RoXG4gICAgICB9O1xuICAgIH0pO1xuICB9LCBbXSk7XG4gIHJldHVybiA8PlxuICAgICAge0RtbkVkaXRvcldyYXBwZXIoe1xuICAgICAgbW9kZWw6IGN1cnJlbnRNb2RlbCxcbiAgICAgIG9yaWdpbmFsVmVyc2lvbjogYXJncy5vcmlnaW5hbFZlcnNpb24sXG4gICAgICBvbk1vZGVsQ2hhbmdlLFxuICAgICAgb25SZXF1ZXN0RXh0ZXJuYWxNb2RlbEJ5UGF0aCxcbiAgICAgIG9uUmVxdWVzdEV4dGVybmFsTW9kZWxzQXZhaWxhYmxlVG9JbmNsdWRlLFxuICAgICAgZXh0ZXJuYWxNb2RlbHNCeU5hbWVzcGFjZTogZXh0ZXJuYWxNb2RlbHNCeU5hbWVzcGFjZSxcbiAgICAgIGV4dGVybmFsQ29udGV4dE5hbWU6IGFyZ3MuZXh0ZXJuYWxDb250ZXh0TmFtZSxcbiAgICAgIGV4dGVybmFsQ29udGV4dERlc2NyaXB0aW9uOiBhcmdzLmV4dGVybmFsQ29udGV4dERlc2NyaXB0aW9uLFxuICAgICAgdmFsaWRhdGlvbk1lc3NhZ2VzOiBhcmdzLnZhbGlkYXRpb25NZXNzYWdlcyxcbiAgICAgIGV2YWx1YXRpb25SZXN1bHRzQnlOb2RlSWQ6IGFyZ3MuZXZhbHVhdGlvblJlc3VsdHNCeU5vZGVJZCxcbiAgICAgIGlzc3VlVHJhY2tlckhyZWY6IGFyZ3MuaXNzdWVUcmFja2VySHJlZlxuICAgIH0pfVxuICAgIDwvPjtcbn1cbmNvbnN0IG1ldGE6IE1ldGE8RG1uRWRpdG9yUHJvcHM+ID0ge1xuICB0aXRsZTogXCJNaXNjL0VtcHR5V2l0aEF2YWlsYWJsZUV4dGVybmFsTW9kZWxzXCIsXG4gIGNvbXBvbmVudDogRG1uRWRpdG9yLFxuICBpbmNsdWRlU3RvcmllczogL15bQS1aXS9cbn07XG5leHBvcnQgZGVmYXVsdCBtZXRhO1xudHlwZSBTdG9yeSA9IFN0b3J5T2JqPHR5cGVvZiBFbXB0eVN0b3J5V2l0aEluY2x1ZGVkTW9kZWxzPjtcbmV4cG9ydCBjb25zdCBFbXB0eVdpdGhBdmFpbGFibGVFeHRlcm5hbE1vZGVsczogU3RvcnkgPSB7XG4gIHJlbmRlcjogYXJncyA9PiBFbXB0eVN0b3J5V2l0aEluY2x1ZGVkTW9kZWxzKGFyZ3MpLFxuICBhcmdzOiB7XG4gICAgbW9kZWw6IGdldE1hcnNoYWxsZXIoaW5pdGlhbE1vZGVsLCB7XG4gICAgICB1cGdyYWRlVG86IFwibGF0ZXN0XCJcbiAgICB9KS5wYXJzZXIucGFyc2UoKSxcbiAgICBvcmlnaW5hbFZlcnNpb246IFwiMS41XCIsXG4gICAgZXZhbHVhdGlvblJlc3VsdHNCeU5vZGVJZDogbmV3IE1hcCgpLFxuICAgIGV4dGVybmFsQ29udGV4dERlc2NyaXB0aW9uOiBcIkV4dGVybmFsIGNvbnRleHQgZGVzY3JpcHRpb25cIixcbiAgICBleHRlcm5hbENvbnRleHROYW1lOiBcIlN0b3J5Ym9vayAtIERNTiBFZGl0b3JcIixcbiAgICBleHRlcm5hbE1vZGVsc0J5TmFtZXNwYWNlOiB7fSxcbiAgICBpc3N1ZVRyYWNrZXJIcmVmOiBcIlwiLFxuICAgIHZhbGlkYXRpb25NZXNzYWdlczoge31cbiAgfVxufTtcbkVtcHR5V2l0aEF2YWlsYWJsZUV4dGVybmFsTW9kZWxzLnBhcmFtZXRlcnMgPSB7XG4gIC4uLkVtcHR5V2l0aEF2YWlsYWJsZUV4dGVybmFsTW9kZWxzLnBhcmFtZXRlcnMsXG4gIGRvY3M6IHtcbiAgICAuLi5FbXB0eVdpdGhBdmFpbGFibGVFeHRlcm5hbE1vZGVscy5wYXJhbWV0ZXJzPy5kb2NzLFxuICAgIHNvdXJjZToge1xuICAgICAgb3JpZ2luYWxTb3VyY2U6IFwie1xcbiAgcmVuZGVyOiBhcmdzID0+IEVtcHR5U3RvcnlXaXRoSW5jbHVkZWRNb2RlbHMoYXJncyksXFxuICBhcmdzOiB7XFxuICAgIG1vZGVsOiBnZXRNYXJzaGFsbGVyKGluaXRpYWxNb2RlbCwge1xcbiAgICAgIHVwZ3JhZGVUbzogXFxcImxhdGVzdFxcXCJcXG4gICAgfSkucGFyc2VyLnBhcnNlKCksXFxuICAgIG9yaWdpbmFsVmVyc2lvbjogXFxcIjEuNVxcXCIsXFxuICAgIGV2YWx1YXRpb25SZXN1bHRzQnlOb2RlSWQ6IG5ldyBNYXAoKSxcXG4gICAgZXh0ZXJuYWxDb250ZXh0RGVzY3JpcHRpb246IFxcXCJFeHRlcm5hbCBjb250ZXh0IGRlc2NyaXB0aW9uXFxcIixcXG4gICAgZXh0ZXJuYWxDb250ZXh0TmFtZTogXFxcIlN0b3J5Ym9vayAtIERNTiBFZGl0b3JcXFwiLFxcbiAgICBleHRlcm5hbE1vZGVsc0J5TmFtZXNwYWNlOiB7fSxcXG4gICAgaXNzdWVUcmFja2VySHJlZjogXFxcIlxcXCIsXFxuICAgIHZhbGlkYXRpb25NZXNzYWdlczoge31cXG4gIH1cXG59XCIsXG4gICAgICAuLi5FbXB0eVdpdGhBdmFpbGFibGVFeHRlcm5hbE1vZGVscy5wYXJhbWV0ZXJzPy5kb2NzPy5zb3VyY2VcbiAgICB9XG4gIH1cbn07IiwiLypcbiAqIExpY2Vuc2VkIHRvIHRoZSBBcGFjaGUgU29mdHdhcmUgRm91bmRhdGlvbiAoQVNGKSB1bmRlciBvbmVcbiAqIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiAgU2VlIHRoZSBOT1RJQ0UgZmlsZVxuICogZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb25cbiAqIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLiAgVGhlIEFTRiBsaWNlbnNlcyB0aGlzIGZpbGVcbiAqIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGVcbiAqIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuICogd2l0aCB0aGUgTGljZW5zZS4gIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsXG4gKiBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxuICogXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcbiAqIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZVxuICogc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9uc1xuICogdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgZ2V0TWFyc2hhbGxlciB9IGZyb20gXCJAa2llLXRvb2xzL2Rtbi1tYXJzaGFsbGVyXCI7XG5pbXBvcnQgeyBub3JtYWxpemUgfSBmcm9tIFwiQGtpZS10b29scy9kbW4tbWFyc2hhbGxlci9kaXN0L25vcm1hbGl6YXRpb24vbm9ybWFsaXplXCI7XG5pbXBvcnQgeyBYTUwyUE1NTCB9IGZyb20gXCJAa2llLXRvb2xzL3BtbWwtZWRpdG9yLW1hcnNoYWxsZXJcIjtcbmltcG9ydCAqIGFzIERtbkVkaXRvciBmcm9tIFwiQGtpZS10b29scy9kbW4tZWRpdG9yL2Rpc3QvRG1uRWRpdG9yXCI7XG5pbXBvcnQgeyBnZXRQbW1sTmFtZXNwYWNlIH0gZnJvbSBcIkBraWUtdG9vbHMvZG1uLWVkaXRvci9kaXN0L3BtbWwvcG1tbFwiO1xuaW1wb3J0IHsgc3VtQmttLCBzdW1EaWZmRHMsIHRlc3RUcmVlUG1tbCB9IGZyb20gXCIuL2V4dGVybmFsTW9kZWxzXCI7XG5cbmV4cG9ydCBjb25zdCBzdW1Ca21Nb2RlbCA9IG5vcm1hbGl6ZShnZXRNYXJzaGFsbGVyKHN1bUJrbSwgeyB1cGdyYWRlVG86IFwibGF0ZXN0XCIgfSkucGFyc2VyLnBhcnNlKCkpO1xuZXhwb3J0IGNvbnN0IHN1bURpZmZEc01vZGVsID0gbm9ybWFsaXplKGdldE1hcnNoYWxsZXIoc3VtRGlmZkRzLCB7IHVwZ3JhZGVUbzogXCJsYXRlc3RcIiB9KS5wYXJzZXIucGFyc2UoKSk7XG5leHBvcnQgY29uc3QgdGVzdFRyZWVQbW1sTW9kZWwgPSBYTUwyUE1NTCh0ZXN0VHJlZVBtbWwpO1xuXG5leHBvcnQgY29uc3QgYXZhaWxhYmxlTW9kZWxzOiBEbW5FZGl0b3IuRXh0ZXJuYWxNb2RlbFtdID0gW1xuICB7XG4gICAgdHlwZTogXCJkbW5cIixcbiAgICBtb2RlbDogc3VtQmttTW9kZWwsXG4gICAgc3ZnOiBcIlwiLFxuICAgIG5vcm1hbGl6ZWRQb3NpeFBhdGhSZWxhdGl2ZVRvVGhlT3BlbkZpbGU6IFwiZGV2LXdlYmFwcC9hdmFpbGFibGUtbW9kZWxzLXRvLWluY2x1ZGUvc3VtQmttLmRtblwiLFxuICB9LFxuICB7XG4gICAgdHlwZTogXCJkbW5cIixcbiAgICBtb2RlbDogc3VtRGlmZkRzTW9kZWwsXG4gICAgc3ZnOiBcIlwiLFxuICAgIG5vcm1hbGl6ZWRQb3NpeFBhdGhSZWxhdGl2ZVRvVGhlT3BlbkZpbGU6IFwiZGV2LXdlYmFwcC9hdmFpbGFibGUtbW9kZWxzLXRvLWluY2x1ZGUvc3VtRGlmZkRzLmRtblwiLFxuICB9LFxuICB7XG4gICAgdHlwZTogXCJkbW5cIixcbiAgICBtb2RlbDogbm9ybWFsaXplKFxuICAgICAgZ2V0TWFyc2hhbGxlcihgPGRlZmluaXRpb25zIHhtbG5zPVwiaHR0cHM6Ly93d3cub21nLm9yZy9zcGVjL0RNTi8yMDIzMDMyNC9NT0RFTC9cIiAvPmAsIHtcbiAgICAgICAgdXBncmFkZVRvOiBcImxhdGVzdFwiLFxuICAgICAgfSkucGFyc2VyLnBhcnNlKClcbiAgICApLFxuICAgIHN2ZzogXCJcIixcbiAgICBub3JtYWxpemVkUG9zaXhQYXRoUmVsYXRpdmVUb1RoZU9wZW5GaWxlOiBcImRldi13ZWJhcHAvYXZhaWxhYmxlLW1vZGVscy10by1pbmNsdWRlL2VtcHR5LmRtblwiLFxuICB9LFxuICB7XG4gICAgdHlwZTogXCJwbW1sXCIsXG4gICAgbW9kZWw6IHRlc3RUcmVlUG1tbE1vZGVsLFxuICAgIG5vcm1hbGl6ZWRQb3NpeFBhdGhSZWxhdGl2ZVRvVGhlT3BlbkZpbGU6IFwiZGV2LXdlYmFwcC9hdmFpbGFibGUtbW9kZWxzLXRvLWluY2x1ZGUvdGVzdFRyZWUucG1tbFwiLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IGF2YWlsYWJsZU1vZGVsc0J5UGF0aDogUmVjb3JkPHN0cmluZywgRG1uRWRpdG9yLkV4dGVybmFsTW9kZWw+ID0gT2JqZWN0LnZhbHVlcyhhdmFpbGFibGVNb2RlbHMpLnJlZHVjZShcbiAgKGFjYywgdikgPT4ge1xuICAgIGFjY1t2Lm5vcm1hbGl6ZWRQb3NpeFBhdGhSZWxhdGl2ZVRvVGhlT3BlbkZpbGVdID0gdjtcbiAgICByZXR1cm4gYWNjO1xuICB9LFxuICB7fSBhcyBSZWNvcmQ8c3RyaW5nLCBEbW5FZGl0b3IuRXh0ZXJuYWxNb2RlbD5cbik7XG5cbmV4cG9ydCBjb25zdCBtb2RlbHNCeU5hbWVzcGFjZSA9IE9iamVjdC52YWx1ZXMoYXZhaWxhYmxlTW9kZWxzKS5yZWR1Y2UoKGFjYywgdikgPT4ge1xuICBpZiAodi50eXBlID09PSBcImRtblwiKSB7XG4gICAgYWNjW3YubW9kZWwuZGVmaW5pdGlvbnNbXCJAX25hbWVzcGFjZVwiXV0gPSB2O1xuICB9IGVsc2UgaWYgKHYudHlwZSA9PT0gXCJwbW1sXCIpIHtcbiAgICBhY2NbZ2V0UG1tbE5hbWVzcGFjZSh7IG5vcm1hbGl6ZWRQb3NpeFBhdGhSZWxhdGl2ZVRvVGhlT3BlbkZpbGU6IHYubm9ybWFsaXplZFBvc2l4UGF0aFJlbGF0aXZlVG9UaGVPcGVuRmlsZSB9KV0gPSB2O1xuICB9XG4gIHJldHVybiBhY2M7XG59LCB7fSBhcyBEbW5FZGl0b3IuRXh0ZXJuYWxNb2RlbHNJbmRleCk7XG4iLCIvKlxuICogTGljZW5zZWQgdG8gdGhlIEFwYWNoZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIChBU0YpIHVuZGVyIG9uZVxuICogb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuICBTZWUgdGhlIE5PVElDRSBmaWxlXG4gKiBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvblxuICogcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuICBUaGUgQVNGIGxpY2Vuc2VzIHRoaXMgZmlsZVxuICogdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZVxuICogXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4gKiB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZyxcbiAqIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXG4gKiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxuICogS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlXG4gKiBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zXG4gKiB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5leHBvcnQgY29uc3Qgc3VtQmttID0gYDxkZWZpbml0aW9ucyBcbiAgeG1sbnM9XCJodHRwczovL3d3dy5vbWcub3JnL3NwZWMvRE1OLzIwMjMwMzI0L01PREVML1wiXG4gIHhtbG5zOmRtbmRpPVwiaHR0cHM6Ly93d3cub21nLm9yZy9zcGVjL0RNTi8yMDIzMDMyNC9ETU5ESS9cIiBcbiAgeG1sbnM6ZGM9XCJodHRwOi8vd3d3Lm9tZy5vcmcvc3BlYy9ETU4vMjAxODA1MjEvREMvXCIgXG4gIHhtbG5zOmRpPVwiaHR0cDovL3d3dy5vbWcub3JnL3NwZWMvRE1OLzIwMTgwNTIxL0RJL1wiIFxuICB4bWxuczpraWU9XCJodHRwczovL2tpZS5hcGFjaGUub3JnL2Rtbi9leHRlbnNpb25zLzEuMFwiXG4gIGV4cHJlc3Npb25MYW5ndWFnZT1cImh0dHBzOi8vd3d3Lm9tZy5vcmcvc3BlYy9ETU4vMjAyMTExMDgvRkVFTC9cIlxuICB0eXBlTGFuZ3VhZ2U9XCJodHRwOi8vd3d3Lm9tZy5vcmcvc3BlYy9ETU4vMjAyMTExMDgvRkVFTC9cIlxuICBuYW1lc3BhY2U9XCJodHRwczovL2tpZS5hcGFjaGUub3JnL2Rtbi9fOTIzNzg0QkQtQ0QzMS00ODhBLTlDMzEtQzFBODNDNTQ4M0MwXCIgXG4gIGlkPVwiXzBFNkY0RDg4LUI5NTUtNDA0Qi1BMzFBLTcyQkI3RTFFNkE3N1wiIFxuICBuYW1lPVwiU3VtIEJLTVwiPlxuPGJ1c2luZXNzS25vd2xlZGdlTW9kZWwgbmFtZT1cIlN1bSBCS01cIiBpZD1cIl8zNjQ2NjAwRC0wMzVGLTQ3QjktOERDNi0zRkFCRTg0NDIzNEZcIj5cbiAgPHZhcmlhYmxlIG5hbWU9XCJOZXcgQktNXCIgaWQ9XCJfOTRCQUM5RkQtODUxOS00OUY5LTg1NUEtRjRGQ0JBQ0QyQTA0XCIgdHlwZVJlZj1cIm51bWJlclwiIC8+XG4gIDxmdW5jdGlvbkRlZmluaXRpb24gbGFiZWw9XCJTdW0gQktNXCIga2luZD1cIkZFRUxcIiB0eXBlUmVmPVwibnVtYmVyXCI+XG4gICAgPGZvcm1hbFBhcmFtZXRlciBpZD1cIl9GM0E3MEE2OS0wOUZGLTQxN0MtOEY2Qy1CRDkxMjkyMzEzNzdcIiBuYW1lPVwiYVwiIHR5cGVSZWY9XCJudW1iZXJcIiAvPlxuICAgIDxmb3JtYWxQYXJhbWV0ZXIgaWQ9XCJfRTUxQjFDNkUtODk2Qi00MUMwLUIwM0UtODVCM0NEN0I2NjU1XCIgbmFtZT1cImJcIiB0eXBlUmVmPVwibnVtYmVyXCIgLz5cbiAgICA8bGl0ZXJhbEV4cHJlc3Npb24gaWQ9XCJfRkExRUUyMkItQ0M2Qi00OTlGLTk1RUUtNjgxNThBMkYyMzNCXCIgbGFiZWw9XCJFeHByZXNzaW9uIE5hbWVcIiB0eXBlUmVmPVwiJmx0O1VuZGVmaW5lZCZndDtcIj5cbiAgICAgIDx0ZXh0PmEgKyBiPC90ZXh0PlxuICAgIDwvbGl0ZXJhbEV4cHJlc3Npb24+XG4gIDwvZnVuY3Rpb25EZWZpbml0aW9uPlxuPC9idXNpbmVzc0tub3dsZWRnZU1vZGVsPlxuPGRtbmRpOkRNTkRJPlxuICA8ZG1uZGk6RE1ORGlhZ3JhbT5cbiAgICA8ZG1uZGk6RE1OU2hhcGUgaWQ9XCJfMzUwNkEwODctQUI2MC00MjhELTlDNzUtMUU1RjVENkYwOTQ3XCIgZG1uRWxlbWVudFJlZj1cIl8zNjQ2NjAwRC0wMzVGLTQ3QjktOERDNi0zRkFCRTg0NDIzNEZcIiBpc0NvbGxhcHNlZD1cImZhbHNlXCIgaXNMaXN0ZWRJbnB1dERhdGE9XCJmYWxzZVwiPlxuICAgICAgPGRjOkJvdW5kcyB4PVwiNDBcIiB5PVwiNjBcIiB3aWR0aD1cIjE2MFwiIGhlaWdodD1cIjgwXCIgLz5cbiAgICA8L2RtbmRpOkRNTlNoYXBlPlxuICAgIDxkaTpleHRlbnNpb24+XG4gICAgICA8a2llOkNvbXBvbmVudHNXaWR0aHNFeHRlbnNpb24+XG4gICAgICAgIDxraWU6Q29tcG9uZW50V2lkdGhzIGRtbkVsZW1lbnRSZWY9XCJfRkExRUUyMkItQ0M2Qi00OTlGLTk1RUUtNjgxNThBMkYyMzNCXCI+XG4gICAgICAgICAgPGtpZTp3aWR0aD4xOTA8L2tpZTp3aWR0aD5cbiAgICAgICAgPC9raWU6Q29tcG9uZW50V2lkdGhzPlxuICAgICAgPC9raWU6Q29tcG9uZW50c1dpZHRoc0V4dGVuc2lvbj5cbiAgICA8L2RpOmV4dGVuc2lvbj5cbiAgPC9kbW5kaTpETU5EaWFncmFtPlxuPC9kbW5kaTpETU5EST5cbjwvZGVmaW5pdGlvbnM+XG5gO1xuXG5leHBvcnQgY29uc3Qgc3VtRGlmZkRzID0gYDxkZWZpbml0aW9ucyBcbiAgeG1sbnM9XCJodHRwczovL3d3dy5vbWcub3JnL3NwZWMvRE1OLzIwMjMwMzI0L01PREVML1wiIFxuICB4bWxuczpkbW5kaT1cImh0dHBzOi8vd3d3Lm9tZy5vcmcvc3BlYy9ETU4vMjAyMzAzMjQvRE1OREkvXCJcbiAgeG1sbnM6ZGM9XCJodHRwOi8vd3d3Lm9tZy5vcmcvc3BlYy9ETU4vMjAxODA1MjEvREMvXCIgXG4gIHhtbG5zOmRpPVwiaHR0cDovL3d3dy5vbWcub3JnL3NwZWMvRE1OLzIwMTgwNTIxL0RJL1wiIFxuICB4bWxuczpraWU9XCJodHRwczovL2tpZS5hcGFjaGUub3JnL2Rtbi9leHRlbnNpb25zLzEuMFwiXG4gIGV4cHJlc3Npb25MYW5ndWFnZT1cImh0dHBzOi8vd3d3Lm9tZy5vcmcvc3BlYy9ETU4vMjAyMTExMDgvRkVFTC9cIiBcbiAgdHlwZUxhbmd1YWdlPVwiaHR0cDovL3d3dy5vbWcub3JnL3NwZWMvRE1OLzIwMjExMTA4L0ZFRUwvXCJcbiAgbmFtZXNwYWNlPVwiaHR0cHM6Ly9raWUuYXBhY2hlLm9yZy9kbW4vX0QxOUIwMDE1LTJDQkQtNEJBOC04NEE5LTVGNTU0RDg0QTlFMVwiIFxuICBpZD1cIl9GMzYwQ0VDQi01REYyLTQ1NDYtQTdBOS1FNUVDRjBGNUE4NzJcIiBcbiAgbmFtZT1cIlN1bSBhbmQgRGlmZiBEU1wiPlxuPGRlY2lzaW9uU2VydmljZSBuYW1lPVwiU3VtIGFuZCBEaWZmIERTXCIgaWQ9XCJfNzIxQjc2MzQtNzIyNy00MkI0LUFBQTQtMTdERTYwQTdBOTY3XCI+XG4gIDx2YXJpYWJsZSBuYW1lPVwiTmV3IERlY2lzaW9uIFNlcnZpY2VcIiBpZD1cIl9BOTk2RDRCRC1DRjY5LTRDQzUtODlDMC0zN0NGMkJENkJBNkVcIiB0eXBlUmVmPVwiY29udGV4dFwiIC8+XG4gIDxpbnB1dERhdGEgaHJlZj1cIiNfMThGQUU5MTMtMkIyQS00NzlELUE1M0EtMTRBMkQ1N0M0NkU0XCIgLz5cbiAgPGlucHV0RGF0YSBocmVmPVwiI18wRDZFODNBMC0xNzFGLTREN0MtQjBERi04NDY0RERFMDVGRDFcIiAvPlxuICA8b3V0cHV0RGVjaXNpb24gaHJlZj1cIiNfMTk5MUZCMzQtMTI1My00QTU0LUFEM0QtODk2OTc5MzhEREZBXCIgLz5cbiAgPG91dHB1dERlY2lzaW9uIGhyZWY9XCIjXzA1NjIxRUQ0LTkyMzYtNDdGMS1COTNBLTE2NEE0NTI3QjEzNlwiIC8+XG48L2RlY2lzaW9uU2VydmljZT5cbjxkZWNpc2lvbiBuYW1lPVwiU3VtXCIgaWQ9XCJfMDU2MjFFRDQtOTIzNi00N0YxLUI5M0EtMTY0QTQ1MjdCMTM2XCI+XG4gIDx2YXJpYWJsZSBuYW1lPVwiTmV3IERlY2lzaW9uXCIgaWQ9XCJfODhFQ0E4OTEtMzgzNy00MEU2LUJDQkYtNzdCRjI0QjI2RkQwXCIgdHlwZVJlZj1cIm51bWJlclwiIC8+XG4gIDxpbmZvcm1hdGlvblJlcXVpcmVtZW50IGlkPVwiXzgxQkQ0OUY0LUUyNzktNDhBNC1BQzcxLTg5Q0U5MkVFREU5Q1wiPlxuICAgIDxyZXF1aXJlZElucHV0IGhyZWY9XCIjXzE4RkFFOTEzLTJCMkEtNDc5RC1BNTNBLTE0QTJENTdDNDZFNFwiIC8+XG4gIDwvaW5mb3JtYXRpb25SZXF1aXJlbWVudD5cbiAgPGluZm9ybWF0aW9uUmVxdWlyZW1lbnQgaWQ9XCJfMTE1QjRDODktRUJBOC00MTM2LUE3MEUtOUQzMDNEOEU5MkM1XCI+XG4gICAgPHJlcXVpcmVkSW5wdXQgaHJlZj1cIiNfMEQ2RTgzQTAtMTcxRi00RDdDLUIwREYtODQ2NERERTA1RkQxXCIgLz5cbiAgPC9pbmZvcm1hdGlvblJlcXVpcmVtZW50PlxuICA8bGl0ZXJhbEV4cHJlc3Npb24gaWQ9XCJfMjgxMkUwRUEtRkQzMi00ODBGLTg5Q0QtRDBGRTVGQTAyMTcyXCIgbGFiZWw9XCJTdW1cIiB0eXBlUmVmPVwiJmx0O1VuZGVmaW5lZCZndDtcIj5cbiAgICA8dGV4dD5hICsgYjwvdGV4dD5cbiAgPC9saXRlcmFsRXhwcmVzc2lvbj5cbjwvZGVjaXNpb24+XG48aW5wdXREYXRhIG5hbWU9XCJhXCIgaWQ9XCJfMThGQUU5MTMtMkIyQS00NzlELUE1M0EtMTRBMkQ1N0M0NkU0XCI+XG4gIDx2YXJpYWJsZSBuYW1lPVwiTmV3IElucHV0IERhdGFcIiBpZD1cIl8yNTBEQjg1MC05N0Y1LTQ1QzgtQUZCQi0yMDcyMThCREFGN0VcIiB0eXBlUmVmPVwibnVtYmVyXCIgLz5cbjwvaW5wdXREYXRhPlxuPGlucHV0RGF0YSBuYW1lPVwiYlwiIGlkPVwiXzBENkU4M0EwLTE3MUYtNEQ3Qy1CMERGLTg0NjREREUwNUZEMVwiPlxuICA8dmFyaWFibGUgbmFtZT1cIk5ldyBJbnB1dCBEYXRhXCIgaWQ9XCJfMEZEM0U0OTEtOTNFNC00QUMxLUFCNDYtMTlBNkM2QTNFNEYxXCIgdHlwZVJlZj1cIm51bWJlclwiIC8+XG48L2lucHV0RGF0YT5cbjxkZWNpc2lvbiBuYW1lPVwiRGlmZlwiIGlkPVwiXzE5OTFGQjM0LTEyNTMtNEE1NC1BRDNELTg5Njk3OTM4RERGQVwiPlxuICA8dmFyaWFibGUgbmFtZT1cIk5ldyBEZWNpc2lvblwiIGlkPVwiXzQ3QUQ2RkIxLTE4OTItNEUyNy1CNDZELTBBRjk1QjE4NjAyRVwiIHR5cGVSZWY9XCJudW1iZXJcIiAvPlxuICA8aW5mb3JtYXRpb25SZXF1aXJlbWVudCBpZD1cIl81Q0E4RUExMS1GREZGLTQxMEEtQUI0Ri1BQTdBQ0I5RjdGRENcIj5cbiAgICA8cmVxdWlyZWRJbnB1dCBocmVmPVwiI18xOEZBRTkxMy0yQjJBLTQ3OUQtQTUzQS0xNEEyRDU3QzQ2RTRcIiAvPlxuICA8L2luZm9ybWF0aW9uUmVxdWlyZW1lbnQ+XG4gIDxpbmZvcm1hdGlvblJlcXVpcmVtZW50IGlkPVwiX0Q5RTVGQjBGLTFBOEMtNDczMy1CQkFCLUU0QTU1MTEzRjgwNlwiPlxuICAgIDxyZXF1aXJlZElucHV0IGhyZWY9XCIjXzBENkU4M0EwLTE3MUYtNEQ3Qy1CMERGLTg0NjREREUwNUZEMVwiIC8+XG4gIDwvaW5mb3JtYXRpb25SZXF1aXJlbWVudD5cbiAgPGxpdGVyYWxFeHByZXNzaW9uIGlkPVwiX0M2QkJGQzJFLTY5NUYtNDY2OC04QTBFLUQxNzVGRTczMDJDN1wiIGxhYmVsPVwiRGlmZlwiIHR5cGVSZWY9XCImbHQ7VW5kZWZpbmVkJmd0O1wiPlxuICAgIDx0ZXh0PmEgLSBiPC90ZXh0PlxuICA8L2xpdGVyYWxFeHByZXNzaW9uPlxuPC9kZWNpc2lvbj5cbjxpdGVtRGVmaW5pdGlvbiBpZD1cIl84NDJGNEUxNi1DOUEyLTQ3RDQtQTIyMS0wODE2NzNCOThDMkRcIiBuYW1lPVwiU3VtRGlmZkNvbnRleHRcIiBpc0NvbGxlY3Rpb249XCJmYWxzZVwiPlxuICA8aXRlbUNvbXBvbmVudCBpZD1cIl80ODgyRDRGQi0yMTQ2LTQxOTgtODY0MC0zM0I5NTFCODkzQTdcIiBuYW1lPVwiU3VtXCIgaXNDb2xsZWN0aW9uPVwiZmFsc2VcIj5cbiAgICA8dHlwZVJlZj5udW1iZXI8L3R5cGVSZWY+XG4gIDwvaXRlbUNvbXBvbmVudD5cbiAgPGl0ZW1Db21wb25lbnQgaWQ9XCJfM0VGMjdCN0QtMzM3OC00MjlFLUI2REItQjg1NkY1RUIwQUU3XCIgbmFtZT1cIkRpZmZcIiBpc0NvbGxlY3Rpb249XCJmYWxzZVwiPlxuICAgIDx0eXBlUmVmPm51bWJlcjwvdHlwZVJlZj5cbiAgPC9pdGVtQ29tcG9uZW50PlxuPC9pdGVtRGVmaW5pdGlvbj5cbjxpdGVtRGVmaW5pdGlvbiBpZD1cIl8yQjRFOTU5My0zMjM5LTRFMDQtQTIxMy0zNDVGMEFBMEFGOUVcIiBuYW1lPVwiRmluZVwiIGlzQ29sbGVjdGlvbj1cImZhbHNlXCI+XG4gIDxpdGVtQ29tcG9uZW50IGlkPVwiXzNFRjI3QjdELTMzNzgtNDI5RS1CNkRCLUI4NTZGNUVCMEFFRVwiIG5hbWU9XCJWYWx1ZVwiIGlzQ29sbGVjdGlvbj1cImZhbHNlXCI+XG4gICAgPHR5cGVSZWY+bnVtYmVyPC90eXBlUmVmPlxuICAgIDxhbGxvd2VkVmFsdWVzIGlkPVwiXzVCRDEzRDlELTQxMkYtNEU2Qi05MTRBLTNEOEFBQUM2QTcwMVwiPlxuICAgICAgPHRleHQ+MTAwLDUwMCwxMDAwPC90ZXh0PlxuICAgIDwvYWxsb3dlZFZhbHVlcz5cbiAgPC9pdGVtQ29tcG9uZW50PlxuPC9pdGVtRGVmaW5pdGlvbj5cbjxkbW5kaTpETU5EST5cbiAgPGRtbmRpOkRNTkRpYWdyYW0+XG4gICAgPGRtbmRpOkRNTlNoYXBlIGlkPVwiXzQ5NUNCMEE3LTAxN0EtNEEyRi1BNEQ3LTMxMzNDODI3MDhFMFwiIGRtbkVsZW1lbnRSZWY9XCJfNzIxQjc2MzQtNzIyNy00MkI0LUFBQTQtMTdERTYwQTdBOTY3XCIgaXNDb2xsYXBzZWQ9XCJmYWxzZVwiIGlzTGlzdGVkSW5wdXREYXRhPVwiZmFsc2VcIj5cbiAgICAgIDxkYzpCb3VuZHMgeD1cIjgwXCIgeT1cIjEyMFwiIHdpZHRoPVwiNTIwXCIgaGVpZ2h0PVwiMzIwXCIgLz5cbiAgICAgIDxkbW5kaTpETU5EZWNpc2lvblNlcnZpY2VEaXZpZGVyTGluZT5cbiAgICAgICAgPGRpOndheXBvaW50IHg9XCI4MFwiIHk9XCIyODBcIiAvPlxuICAgICAgICA8ZGk6d2F5cG9pbnQgeD1cIjUwMFwiIHk9XCIyODBcIiAvPlxuICAgICAgPC9kbW5kaTpETU5EZWNpc2lvblNlcnZpY2VEaXZpZGVyTGluZT5cbiAgICA8L2RtbmRpOkRNTlNoYXBlPlxuICAgIDxkbW5kaTpETU5TaGFwZSBpZD1cIl84MEM0MjAyNi1GRjU2LTQ0QzYtODRGOS1GN0EwMzY4NkY1RThcIiBkbW5FbGVtZW50UmVmPVwiXzA1NjIxRUQ0LTkyMzYtNDdGMS1COTNBLTE2NEE0NTI3QjEzNlwiIGlzQ29sbGFwc2VkPVwiZmFsc2VcIiBpc0xpc3RlZElucHV0RGF0YT1cImZhbHNlXCI+XG4gICAgICA8ZGM6Qm91bmRzIHg9XCIxNDBcIiB5PVwiMTgwXCIgd2lkdGg9XCIxNjBcIiBoZWlnaHQ9XCI4MFwiIC8+XG4gICAgPC9kbW5kaTpETU5TaGFwZT5cbiAgICA8ZG1uZGk6RE1OU2hhcGUgaWQ9XCJfMjE4RUQ1RTgtRkIwMS00MTdGLUExRjYtODY3RDYwQkNCRjE5XCIgZG1uRWxlbWVudFJlZj1cIl8xOEZBRTkxMy0yQjJBLTQ3OUQtQTUzQS0xNEEyRDU3QzQ2RTRcIiBpc0NvbGxhcHNlZD1cImZhbHNlXCIgaXNMaXN0ZWRJbnB1dERhdGE9XCJmYWxzZVwiPlxuICAgICAgPGRjOkJvdW5kcyB4PVwiODBcIiB5PVwiNDgwXCIgd2lkdGg9XCIxNjBcIiBoZWlnaHQ9XCI4MFwiIC8+XG4gICAgPC9kbW5kaTpETU5TaGFwZT5cbiAgICA8ZG1uZGk6RE1OU2hhcGUgaWQ9XCJfN0MxMzRCQkYtMkI5Ni00QzlBLUI5ODUtRDFGRTEwREMzMEQyXCIgZG1uRWxlbWVudFJlZj1cIl8wRDZFODNBMC0xNzFGLTREN0MtQjBERi04NDY0RERFMDVGRDFcIiBpc0NvbGxhcHNlZD1cImZhbHNlXCIgaXNMaXN0ZWRJbnB1dERhdGE9XCJmYWxzZVwiPlxuICAgICAgPGRjOkJvdW5kcyB4PVwiNDQwXCIgeT1cIjQ4MFwiIHdpZHRoPVwiMTYwXCIgaGVpZ2h0PVwiODBcIiAvPlxuICAgIDwvZG1uZGk6RE1OU2hhcGU+XG4gICAgPGRtbmRpOkRNTkVkZ2UgaWQ9XCJfNzY4QzVENkUtOUE0MS00QUEzLTkyMUMtQTU0NUU4RjExNTk3XCIgZG1uRWxlbWVudFJlZj1cIl84MUJENDlGNC1FMjc5LTQ4QTQtQUM3MS04OUNFOTJFRURFOUNcIiBzb3VyY2VFbGVtZW50PVwiXzIxOEVENUU4LUZCMDEtNDE3Ri1BMUY2LTg2N0Q2MEJDQkYxOVwiIHRhcmdldEVsZW1lbnQ9XCJfODBDNDIwMjYtRkY1Ni00NEM2LTg0RjktRjdBMDM2ODZGNUU4XCI+XG4gICAgICA8ZGk6d2F5cG9pbnQgeD1cIjE2MFwiIHk9XCI1MjBcIiAvPlxuICAgICAgPGRpOndheXBvaW50IHg9XCIyMjBcIiB5PVwiMjYwXCIgLz5cbiAgICA8L2RtbmRpOkRNTkVkZ2U+XG4gICAgPGRtbmRpOkRNTkVkZ2UgaWQ9XCJfNzlFMkU1MzItOEQ4NC00MEM5LTkxREEtMDdFQTYwNjc5OEU1XCIgZG1uRWxlbWVudFJlZj1cIl8xMTVCNEM4OS1FQkE4LTQxMzYtQTcwRS05RDMwM0Q4RTkyQzVcIiBzb3VyY2VFbGVtZW50PVwiXzdDMTM0QkJGLTJCOTYtNEM5QS1COTg1LUQxRkUxMERDMzBEMlwiIHRhcmdldEVsZW1lbnQ9XCJfODBDNDIwMjYtRkY1Ni00NEM2LTg0RjktRjdBMDM2ODZGNUU4XCI+XG4gICAgICA8ZGk6d2F5cG9pbnQgeD1cIjUyMFwiIHk9XCI1MjBcIiAvPlxuICAgICAgPGRpOndheXBvaW50IHg9XCIyMjBcIiB5PVwiMjYwXCIgLz5cbiAgICA8L2RtbmRpOkRNTkVkZ2U+XG4gICAgPGRtbmRpOkRNTlNoYXBlIGlkPVwiXzE1NTNFQjZDLTJCRTgtNEJDMy04OTcyLUE4NzMwOEI5OEM4NlwiIGRtbkVsZW1lbnRSZWY9XCJfMTk5MUZCMzQtMTI1My00QTU0LUFEM0QtODk2OTc5MzhEREZBXCIgaXNDb2xsYXBzZWQ9XCJmYWxzZVwiIGlzTGlzdGVkSW5wdXREYXRhPVwiZmFsc2VcIj5cbiAgICAgIDxkYzpCb3VuZHMgeD1cIjM4MFwiIHk9XCIxODBcIiB3aWR0aD1cIjE2MFwiIGhlaWdodD1cIjgwXCIgLz5cbiAgICA8L2RtbmRpOkRNTlNoYXBlPlxuICAgIDxkbW5kaTpETU5FZGdlIGlkPVwiX0M2OTc5NDgzLURCQkEtNEFDMC1BQjI4LUUxMkVGRUYwODY1NFwiIGRtbkVsZW1lbnRSZWY9XCJfNUNBOEVBMTEtRkRGRi00MTBBLUFCNEYtQUE3QUNCOUY3RkRDXCIgc291cmNlRWxlbWVudD1cIl8yMThFRDVFOC1GQjAxLTQxN0YtQTFGNi04NjdENjBCQ0JGMTlcIiB0YXJnZXRFbGVtZW50PVwiXzE1NTNFQjZDLTJCRTgtNEJDMy04OTcyLUE4NzMwOEI5OEM4NlwiPlxuICAgICAgPGRpOndheXBvaW50IHg9XCIxNjBcIiB5PVwiNTIwXCIgLz5cbiAgICAgIDxkaTp3YXlwb2ludCB4PVwiNDYwXCIgeT1cIjI2MFwiIC8+XG4gICAgPC9kbW5kaTpETU5FZGdlPlxuICAgIDxkbW5kaTpETU5FZGdlIGlkPVwiXzM3OEM1MjEzLTA4NEItNEExRC1BRENDLUNFRkU0MUY3RTlGQ1wiIGRtbkVsZW1lbnRSZWY9XCJfRDlFNUZCMEYtMUE4Qy00NzMzLUJCQUItRTRBNTUxMTNGODA2XCIgc291cmNlRWxlbWVudD1cIl83QzEzNEJCRi0yQjk2LTRDOUEtQjk4NS1EMUZFMTBEQzMwRDJcIiB0YXJnZXRFbGVtZW50PVwiXzE1NTNFQjZDLTJCRTgtNEJDMy04OTcyLUE4NzMwOEI5OEM4NlwiPlxuICAgICAgPGRpOndheXBvaW50IHg9XCI1MjBcIiB5PVwiNTIwXCIgLz5cbiAgICAgIDxkaTp3YXlwb2ludCB4PVwiNDYwXCIgeT1cIjI2MFwiIC8+XG4gICAgPC9kbW5kaTpETU5FZGdlPlxuICAgIDxkaTpleHRlbnNpb24+XG4gICAgICA8a2llOkNvbXBvbmVudHNXaWR0aHNFeHRlbnNpb24+XG4gICAgICAgIDxraWU6Q29tcG9uZW50V2lkdGhzIGRtbkVsZW1lbnRSZWY9XCJfMjgxMkUwRUEtRkQzMi00ODBGLTg5Q0QtRDBGRTVGQTAyMTcyXCI+XG4gICAgICAgICAgPGtpZTp3aWR0aD4xOTA8L2tpZTp3aWR0aD5cbiAgICAgICAgPC9raWU6Q29tcG9uZW50V2lkdGhzPlxuICAgICAgICA8a2llOkNvbXBvbmVudFdpZHRocyBkbW5FbGVtZW50UmVmPVwiX0M2QkJGQzJFLTY5NUYtNDY2OC04QTBFLUQxNzVGRTczMDJDN1wiPlxuICAgICAgICAgIDxraWU6d2lkdGg+MTkwPC9raWU6d2lkdGg+XG4gICAgICAgIDwva2llOkNvbXBvbmVudFdpZHRocz5cbiAgICAgIDwva2llOkNvbXBvbmVudHNXaWR0aHNFeHRlbnNpb24+XG4gICAgPC9kaTpleHRlbnNpb24+XG4gIDwvZG1uZGk6RE1ORGlhZ3JhbT5cbjwvZG1uZGk6RE1OREk+XG48L2RlZmluaXRpb25zPlxuYDtcbi8vIENvcGllZCBmcm9tIGtvZ2l0by1leGFtcGxlcy9rb2dpdG8tcXVhcmt1cy1leGFtcGxlcy9kbW4tcG1tbC1xdWFya3VzLWV4YW1wbGUvc3JjL21haW4vcmVzb3VyY2VzXG5leHBvcnQgY29uc3QgdGVzdFRyZWVQbW1sID0gYDxQTU1MIHZlcnNpb249XCI0LjJcIiB4c2k6c2NoZW1hTG9jYXRpb249XCJodHRwOi8vd3d3LmRtZy5vcmcvUE1NTC00XzIgaHR0cDovL3d3dy5kbWcub3JnL3Y0LTItMS9wbW1sLTQtMi54c2RcIiB4bWxuczp4c2k9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAxL1hNTFNjaGVtYS1pbnN0YW5jZVwiXG54bWxucz1cImh0dHA6Ly93d3cuZG1nLm9yZy9QTU1MLTRfMlwiPlxuPEhlYWRlcj5cbiA8QXBwbGljYXRpb24gbmFtZT1cIkRyb29scy1QTU1MXCIgdmVyc2lvbj1cIjcuMC4wLVNOQVBTSE9UXCIgLz5cbjwvSGVhZGVyPlxuXG48RGF0YURpY3Rpb25hcnkgbnVtYmVyT2ZGaWVsZHM9XCIzXCI+XG4gPERhdGFGaWVsZCBuYW1lPVwidGVtcGVyYXR1cmVcIiBkYXRhVHlwZT1cImRvdWJsZVwiIG9wdHlwZT1cImNvbnRpbnVvdXNcIiAvPlxuIDxEYXRhRmllbGQgbmFtZT1cImh1bWlkaXR5XCIgZGF0YVR5cGU9XCJkb3VibGVcIiBvcHR5cGU9XCJjb250aW51b3VzXCIgLz4gICBcbiA8RGF0YUZpZWxkIG5hbWU9XCJkZWNpc2lvblwiIGRhdGFUeXBlPVwic3RyaW5nXCIgb3B0eXBlPVwiY2F0ZWdvcmljYWxcIj4gXG4gICA8VmFsdWUgdmFsdWU9XCJzdW5nbGFzc2VzXCIgLz5cbiAgIDxWYWx1ZSB2YWx1ZT1cInVtYnJlbGxhXCIgLz5cbiAgIDxWYWx1ZSB2YWx1ZT1cIm5vdGhpbmdcIiAvPiAgICAgXG4gPC9EYXRhRmllbGQ+XG48L0RhdGFEaWN0aW9uYXJ5PlxuXG48VHJlZU1vZGVsIG1vZGVsTmFtZT1cIkRlY2lzaW9uVHJlZVwiIGZ1bmN0aW9uTmFtZT1cImNsYXNzaWZpY2F0aW9uXCI+XG4gPE1pbmluZ1NjaGVtYT5cbiAgIDxNaW5pbmdGaWVsZCBuYW1lPVwidGVtcGVyYXR1cmVcIiAgdXNhZ2VUeXBlPVwiYWN0aXZlXCIgLz5cbiAgIDxNaW5pbmdGaWVsZCBuYW1lPVwiaHVtaWRpdHlcIiAgdXNhZ2VUeXBlPVwiYWN0aXZlXCIgLz5cbiAgIDxNaW5pbmdGaWVsZCBuYW1lPVwiZGVjaXNpb25cIiB1c2FnZVR5cGU9XCJwcmVkaWN0ZWRcIiAvPlxuIDwvTWluaW5nU2NoZW1hPlxuIDxPdXRwdXQ+XG4gICA8T3V0cHV0RmllbGQgbmFtZT1cIndlYXRoZXJkZWNpc2lvblwiIHRhcmdldEZpZWxkPVwiZGVjaXNpb25cIiAvPlxuIDwvT3V0cHV0PlxuIFxuIDxOb2RlIHNjb3JlPVwibm90aGluZ1wiIGlkPVwiMVwiPlxuICAgPFRydWUgLz5cbiAgIDxOb2RlIHNjb3JlPVwic3VuZ2xhc3Nlc1wiIGlkPVwiMlwiPlxuICAgICA8Q29tcG91bmRQcmVkaWNhdGUgYm9vbGVhbk9wZXJhdG9yPVwiYW5kXCI+XG4gICAgICAgPFNpbXBsZVByZWRpY2F0ZSBmaWVsZD1cInRlbXBlcmF0dXJlXCIgb3BlcmF0b3I9XCJncmVhdGVyVGhhblwiIHZhbHVlPVwiMjVcIiAvPlxuICAgICAgIDxTaW1wbGVQcmVkaWNhdGUgZmllbGQ9XCJodW1pZGl0eVwiIG9wZXJhdG9yPVwibGVzc09yRXF1YWxcIiB2YWx1ZT1cIjIwXCIgLz5cbiAgICAgPC9Db21wb3VuZFByZWRpY2F0ZT5cbiAgIDwvTm9kZT5cbiAgIDxOb2RlIHNjb3JlPVwidW1icmVsbGFcIiBpZD1cIjNcIj5cbiAgICAgPFNpbXBsZVByZWRpY2F0ZSBmaWVsZD1cImh1bWlkaXR5XCIgb3BlcmF0b3I9XCJncmVhdGVyVGhhblwiIHZhbHVlPVwiNTBcIiAvPlxuICAgPC9Ob2RlPlxuICAgPE5vZGUgc2NvcmU9XCJub3RoaW5nXCIgaWQ9XCI0XCI+XG4gICAgIDxUcnVlIC8+XG4gICA8L05vZGU+XG4gPC9Ob2RlPlxuPC9UcmVlTW9kZWw+XG48L1BNTUw+XG5gO1xuIl0sIm5hbWVzIjpbInVzZUNhbGxiYWNrIiwidXNlTWVtbyIsInVzZVN0YXRlIiwiZ2V0TWFyc2hhbGxlciIsIm5zIiwiZG1uMTVucyIsImdlbmVyYXRlVXVpZCIsIkRNTjE1X1NQRUMiLCJEbW5FZGl0b3IiLCJub3JtYWxpemUiLCJEbW5FZGl0b3JXcmFwcGVyIiwiYXZhaWxhYmxlTW9kZWxzQnlQYXRoIiwibW9kZWxzQnlOYW1lc3BhY2UiLCJnZW5lcmF0ZUVtcHR5RG1uMTUiLCJnZXQiLCJleHByZXNzaW9uTGFuZ3VhZ2UiLCJkZWZhdWx0IiwiaW5pdGlhbE1vZGVsIiwiRW1wdHlTdG9yeVdpdGhJbmNsdWRlZE1vZGVscyIsImFyZ3MiLCJzdGF0ZSIsInNldFN0YXRlIiwiaW5pdGlhbERtbk1hcnNoYWxsZXIiLCJ1cGdyYWRlVG8iLCJtYXJzaGFsbGVyIiwic3RhY2siLCJwYXJzZXIiLCJwYXJzZSIsInBvaW50ZXIiLCJjdXJyZW50TW9kZWwiLCJleHRlcm5hbE1vZGVsc0J5TmFtZXNwYWNlIiwiX2EiLCJkZWZpbml0aW9ucyIsImltcG9ydCIsInJlZHVjZSIsImFjYyIsImkiLCJvblJlcXVlc3RFeHRlcm5hbE1vZGVsQnlQYXRoIiwicGF0aCIsIm9uUmVxdWVzdEV4dGVybmFsTW9kZWxzQXZhaWxhYmxlVG9JbmNsdWRlIiwiT2JqZWN0Iiwia2V5cyIsIm9uTW9kZWxDaGFuZ2UiLCJtb2RlbCIsInByZXYiLCJuZXdTdGFjayIsInNsaWNlIiwibGVuZ3RoIiwiX2pzeCIsIl9GcmFnbWVudCIsImNoaWxkcmVuIiwib3JpZ2luYWxWZXJzaW9uIiwiZXh0ZXJuYWxDb250ZXh0TmFtZSIsImV4dGVybmFsQ29udGV4dERlc2NyaXB0aW9uIiwidmFsaWRhdGlvbk1lc3NhZ2VzIiwiZXZhbHVhdGlvblJlc3VsdHNCeU5vZGVJZCIsImlzc3VlVHJhY2tlckhyZWYiLCJtZXRhIiwidGl0bGUiLCJjb21wb25lbnQiLCJpbmNsdWRlU3RvcmllcyIsIkVtcHR5V2l0aEF2YWlsYWJsZUV4dGVybmFsTW9kZWxzIiwicmVuZGVyIiwiTWFwIiwicGFyYW1ldGVycyIsImRvY3MiLCJzb3VyY2UiLCJvcmlnaW5hbFNvdXJjZSIsIl9jIiwiX2IiLCJfX25hbWVkRXhwb3J0c09yZGVyIiwiWE1MMlBNTUwiLCJnZXRQbW1sTmFtZXNwYWNlIiwic3VtQmttIiwic3VtRGlmZkRzIiwidGVzdFRyZWVQbW1sIiwic3VtQmttTW9kZWwiLCJzdW1EaWZmRHNNb2RlbCIsInRlc3RUcmVlUG1tbE1vZGVsIiwiYXZhaWxhYmxlTW9kZWxzIiwidHlwZSIsInN2ZyIsIm5vcm1hbGl6ZWRQb3NpeFBhdGhSZWxhdGl2ZVRvVGhlT3BlbkZpbGUiLCJ2YWx1ZXMiLCJ2Il0sInNvdXJjZVJvb3QiOiIifQ==