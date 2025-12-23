"use strict";
(self["webpackChunk_kie_tools_bpmn_editor"] = self["webpackChunk_kie_tools_bpmn_editor"] || []).push([["features-CustomTasks-CustomTasks-mdx"],{

/***/ "./stories/features/CustomTasks/CustomTasks.mdx":
/*!******************************************************!*\
  !*** ./stories/features/CustomTasks/CustomTasks.mdx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js");
/* harmony import */ var _Users_tiagobento_apache_incubator_kie_tools_node_modules_pnpm_storybook_addon_docs_7_4_6_types_react_dom_17_0_8_types_react_17_0_21_encoding_0_1_13_reac_osluumftxctvhueztkvao5vug4_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/.pnpm/@storybook+addon-docs@7.4.6_@types+react-dom@17.0.8_@types+react@17.0.21_encoding@0.1.13_reac_osluumftxctvhueztkvao5vug4/node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim */ "../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@17.0.2/node_modules/@mdx-js/react/lib/index.js");
/* harmony import */ var _storybook_blocks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @storybook/blocks */ "../../node_modules/.pnpm/@storybook+blocks@7.6.13_@types+react-dom@17.0.8_@types+react@17.0.21_encoding@0.1.13_react-d_pivduf4g6bjixsei6qlzml6o3y/node_modules/@storybook/blocks/dist/index.mjs");
/* harmony import */ var _CustomTasks_stories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CustomTasks.stories */ "./stories/features/CustomTasks/CustomTasks.stories.tsx");



/*@jsxRuntime automatic @jsxImportSource react*/
/*Licensed to the Apache Software Foundation (ASF) under one*/
/*or more contributor license agreements. See the NOTICE file*/
/*distributed with this work for additional information*/
/*regarding copyright ownership. The ASF licenses this file*/
/*to you under the Apache License, Version 2.0 (the*/
/*"License"); you may not use this file except in compliance*/
/*with the License. You may obtain a copy of the License at*/
/**/
/*http://www.apache.org/licenses/LICENSE-2.0*/
/**/
/*Unless required by applicable law or agreed to in writing,*/
/*software distributed under the License is distributed on an*/
/*"AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY*/
/*KIND, either express or implied. See the License for the*/
/*specific language governing permissions and limitations*/
/*under the License.*/




function _createMdxContent(props) {
  const _components = Object.assign({
    h2: "h2"
  }, (0,_Users_tiagobento_apache_incubator_kie_tools_node_modules_pnpm_storybook_addon_docs_7_4_6_types_react_dom_17_0_8_types_react_17_0_21_encoding_0_1_13_reac_osluumftxctvhueztkvao5vug4_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.useMDXComponents)(), props.components);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: ["\n", "\n", "\n", "\n", "\n", "\n", "\n", "\n", "\n", "\n", "\n", "\n", "\n", "\n", "\n", "\n", "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Meta, {
      title: "Features/CustomTasks",
      of: _CustomTasks_stories__WEBPACK_IMPORTED_MODULE_2__
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "customtasks",
      children: "CustomTasks"
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = Object.assign({}, (0,_Users_tiagobento_apache_incubator_kie_tools_node_modules_pnpm_storybook_addon_docs_7_4_6_types_react_dom_17_0_8_types_react_17_0_21_encoding_0_1_13_reac_osluumftxctvhueztkvao5vug4_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.useMDXComponents)(), props.components);
  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout, Object.assign({}, props, {
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent, props)
  })) : _createMdxContent(props);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MDXContent);


/***/ }),

/***/ "./stories/features/CustomTasks/CustomTasks.stories.tsx":
/*!**************************************************************!*\
  !*** ./stories/features/CustomTasks/CustomTasks.stories.tsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomTasks: () => (/* binding */ CustomTasks),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   generateEmptyBpmn20: () => (/* binding */ generateEmptyBpmn20)
/* harmony export */ });
/* harmony import */ var _kie_tools_bpmn_marshaller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @kie-tools/bpmn-marshaller */ "../bpmn-marshaller/dist/index.js");
/* harmony import */ var _kie_tools_boxed_expression_component_dist_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @kie-tools/boxed-expression-component/dist/api */ "../boxed-expression-component/dist/api/index.js");
/* harmony import */ var _bpmnEditorStoriesWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../bpmnEditorStoriesWrapper */ "./stories/bpmnEditorStoriesWrapper.tsx");
/* harmony import */ var _src_BpmnEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../src/BpmnEditor */ "./src/BpmnEditor.tsx");
/* harmony import */ var _other_OtherCustomTasks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./other/OtherCustomTasks */ "./stories/features/CustomTasks/other/OtherCustomTasks.tsx");
var _a, _b, _c;





const generateEmptyBpmn20 = () => `<?xml version="1.0" encoding="UTF-8"?>
<definitions
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xmlns:bpmn2="http://www.omg.org/spec/BPMN/20100524/MODEL"
  xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI"
  xmlns:bpsim="http://www.bpsim.org/schemas/1.0"
  xmlns:dc="http://www.omg.org/spec/DD/20100524/DC"
  xmlns:drools="http://www.jboss.org/drools"
  id="${(0,_kie_tools_boxed_expression_component_dist_api__WEBPACK_IMPORTED_MODULE_1__.generateUuid)()}"
  xsi:schemaLocation="http://www.omg.org/spec/BPMN/20100524/MODEL BPMN20.xsd http://www.jboss.org/drools drools.xsd http://www.bpsim.org/schemas/1.0 bpsim.xsd http://www.omg.org/spec/DD/20100524/DC DC.xsd http://www.omg.org/spec/DD/20100524/DI DI.xsd"
  exporter="jBPM Process Modeler"
  exporterVersion="2.0"
  expressionLanguage="" 
  targetNamespace="https://kie.apache.org/bpmn/${(0,_kie_tools_boxed_expression_component_dist_api__WEBPACK_IMPORTED_MODULE_1__.generateUuid)()}"
>
  <process id="Untitled" drools:packageName="com.example" drools:version="1.0" drools:adHoc="false" name="Untitled" isExecutable="true" processType="Public">
    <task id="_F2B7EABF-DF20-4911-85D7-A9183E34AAA1" drools:taskName="rest-api-call-task" name="Rest API call Task">
      <extensionElements>
        <drools:metaData name="elementname">
          <drools:metaValue><![CDATA[Rest API call Task]]></drools:metaValue>
        </drools:metaData>
      </extensionElements>
    </task>
    <task id="_F2B7EABF-DF20-4911-85D7-A9183E34AAA2" drools:taskName="grpc-api-call-task" name="gRPC API call Task">
      <extensionElements>
        <drools:metaData name="elementname">
          <drools:metaValue><![CDATA[gRPC API call Task]]></drools:metaValue>
        </drools:metaData>
      </extensionElements>
    </task>
  </process>
  <bpmndi:BPMNDiagram>
    <bpmndi:BPMNPlane bpmnElement="Untitled">
      <bpmndi:BPMNShape id="shape__F2B7EABF-DF20-4911-85D7-A9183E34AAA1" bpmnElement="_F2B7EABF-DF20-4911-85D7-A9183E34AAA1">
        <dc:Bounds height="102" width="154" x="416" y="100"/>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="shape__F2B7EABF-DF20-4911-85D7-A9183E34AAA2" bpmnElement="_F2B7EABF-DF20-4911-85D7-A9183E34AAA2">
        <dc:Bounds height="102" width="154" x="416" y="220"/>
      </bpmndi:BPMNShape>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</definitions>`;
const meta = {
  title: "Features/CustomTasks",
  component: _src_BpmnEditor__WEBPACK_IMPORTED_MODULE_3__.BpmnEditor,
  includeStories: /^[A-Z]/
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (meta);
const marshaller = (0,_kie_tools_bpmn_marshaller__WEBPACK_IMPORTED_MODULE_0__.getMarshaller)(generateEmptyBpmn20(), {
  upgradeTo: "latest"
});
const model = marshaller.parser.parse();
const CustomTasks = {
  render: args => (0,_bpmnEditorStoriesWrapper__WEBPACK_IMPORTED_MODULE_2__.BpmnEditorWrapper)(),
  args: {
    model: model,
    originalVersion: "2.0",
    externalContextDescription: "The Storybook for the BPMN Editor",
    externalContextName: "Apache KIE :: BPMN Editor :: Storybook",
    issueTrackerHref: "",
    xml: marshaller.builder.build(model),
    customTasks: [_other_OtherCustomTasks__WEBPACK_IMPORTED_MODULE_4__.REST_API_CALL_TASK, _other_OtherCustomTasks__WEBPACK_IMPORTED_MODULE_4__.GRPC_API_CALL_TASK]
  }
};
CustomTasks.parameters = {
  ...CustomTasks.parameters,
  docs: {
    ...((_a = CustomTasks.parameters) === null || _a === void 0 ? void 0 : _a.docs),
    source: {
      originalSource: "{\n  render: args => BpmnEditorWrapper(),\n  args: {\n    model: model,\n    originalVersion: \"2.0\",\n    externalContextDescription: \"The Storybook for the BPMN Editor\",\n    externalContextName: \"Apache KIE :: BPMN Editor :: Storybook\",\n    issueTrackerHref: \"\",\n    xml: marshaller.builder.build(model),\n    //\n    customTasks: [REST_API_CALL_TASK, GRPC_API_CALL_TASK]\n  }\n}",
      ...((_c = (_b = CustomTasks.parameters) === null || _b === void 0 ? void 0 : _b.docs) === null || _c === void 0 ? void 0 : _c.source)
    }
  }
};
const __namedExportsOrder = ["generateEmptyBpmn20", "CustomTasks"];

/***/ }),

/***/ "./stories/features/CustomTasks/other/OtherCustomTasks.tsx":
/*!*****************************************************************!*\
  !*** ./stories/features/CustomTasks/other/OtherCustomTasks.tsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GRPC_API_CALL_TASK: () => (/* binding */ GRPC_API_CALL_TASK),
/* harmony export */   REST_API_CALL_TASK: () => (/* binding */ REST_API_CALL_TASK)
/* harmony export */ });
/* unused harmony export PropertiesPanelComponent */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js");
/* harmony import */ var _kie_tools_boxed_expression_component_dist_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @kie-tools/boxed-expression-component/dist/api */ "../boxed-expression-component/dist/api/index.js");
/* harmony import */ var _kie_tools_bpmn_marshaller_dist_drools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @kie-tools/bpmn-marshaller/dist/drools-extension */ "../bpmn-marshaller/dist/drools-extension.js");



const PropertiesPanelComponent = _ref => {
  let {
    task
  } = _ref;
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
      children: ["Hello from Custom Task properties panel for ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
        children: task === null || task === void 0 ? void 0 : task["@_name"]
      })]
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
      children: "This is where the interactive panel will be."
    })]
  });
};
const REST_API_CALL_TASK = {
  id: "rest-api-call-task",
  displayGroup: "Other",
  displayName: "Rest API call Task",
  displayDescription: "",
  dataInputReservedNames: [],
  dataOutputReservedNames: [],
  iconSvgElement: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
    width: "30",
    height: "30",
    viewBox: "0 0 30 30",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    stroke: "black",
    strokeWidth: "1",
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("text", {
      x: "15",
      y: "25",
      textAnchor: "middle",
      fontSize: "24",
      fontFamily: "Arial",
      fontWeight: "light",
      children: "\uD83D\uDD05"
    })
  }),
  propertiesPanelComponent: PropertiesPanelComponent,
  matches: task => task["@_drools:taskName"] === "rest-api-call-task",
  produce: () => ({
    __$$element: "task",
    "@_id": (0,_kie_tools_boxed_expression_component_dist_api__WEBPACK_IMPORTED_MODULE_1__.generateUuid)(),
    "@_drools:taskName": "rest-api-call-task",
    "@_name": "Rest API call Task"
  })
};
const GRPC_API_CALL_TASK = {
  id: "grpc-api-call-task",
  displayGroup: "Other",
  displayName: "gRPC API call Task",
  displayDescription: "",
  dataInputReservedNames: [],
  dataOutputReservedNames: [],
  iconSvgElement: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
    width: "30",
    height: "30",
    viewBox: "0 0 30 30",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    stroke: "black",
    strokeWidth: "1",
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("text", {
      x: "15",
      y: "25",
      textAnchor: "middle",
      fontSize: "24",
      fontFamily: "Arial",
      fontWeight: "light",
      children: "\u2734\uFE0F"
    })
  }),
  propertiesPanelComponent: PropertiesPanelComponent,
  matches: task => task["@_drools:taskName"] === "grpc-api-call-task",
  produce: () => ({
    __$$element: "task",
    "@_id": (0,_kie_tools_boxed_expression_component_dist_api__WEBPACK_IMPORTED_MODULE_1__.generateUuid)(),
    "@_drools:taskName": "grpc-api-call-task",
    "@_name": "gRPC API call Task"
  })
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZXMtQ3VzdG9tVGFza3MtQ3VzdG9tVGFza3MtbWR4LmQ1OTEwZTc1LmlmcmFtZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUMwQjs7QUFFMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ29GO0FBQ3lOO0FBQy9QO0FBQ087QUFDckQ7QUFDQTtBQUNBO0FBQ0EsR0FBRyxFQUFFLGtTQUFrQjtBQUN2QixTQUFTLHVEQUFLLENBQUMsdURBQVM7QUFDeEIscUhBQXFILHNEQUFJLENBQUMsbURBQUk7QUFDOUg7QUFDQSxVQUFVLGlEQUFXO0FBQ3JCLEtBQUssU0FBUyxzREFBSTtBQUNsQjtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBLDhCQUE4QjtBQUM5QixTQUFTLG9CQUFvQixrQkFBa0IsRUFBRSxrU0FBa0I7QUFDbkUscUJBQXFCLHNEQUFJLDRCQUE0QjtBQUNyRCxjQUFjLHNEQUFJO0FBQ2xCLEdBQUc7QUFDSDtBQUNBLGlFQUFlLFVBQVUsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJpQztBQUNtQjtBQUNlO0FBQ3ZCO0FBQ1k7QUFDM0UsTUFBTU0sbUJBQW1CLEdBQUdBLENBQUEsS0FBTTs7Ozs7Ozs7UUFRakNMLDRGQUFZLEVBQUU7Ozs7O2lEQUsyQkEsNEZBQVksRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQTRCaEQ7QUFDZixNQUFNTSxJQUFJLEdBQTBCO0VBQ2xDQyxLQUFLLEVBQUUsc0JBQXNCO0VBQzdCQyxTQUFTLEVBQUVOLHVEQUFVO0VBQ3JCTyxjQUFjLEVBQUU7Q0FDakI7QUFDRCxpRUFBZUgsSUFBSSxFQUFDO0FBRXBCLE1BQU1JLFVBQVUsR0FBR1gseUVBQWEsQ0FBQ00sbUJBQW1CLEVBQUUsRUFBRTtFQUN0RE0sU0FBUyxFQUFFO0NBQ1os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LG9CQUFvQjtFQUN4QkMsWUFBWSxFQUFFLE9BQU87RUFDckJDLFdBQVcsRUFBRSxvQkFBb0I7RUFDakNDLGtCQUFrQixFQUFFLEVBQUU7RUFDdEJDLHNCQUFzQixFQUFFLEVBQUU7RUFDMUJDLHVCQUF1QixFQUFFLEVBQUU7RUFDM0JDLGNBQWMsRUFDWlAsc0RBQUE7SUFDRVEsS0FBSyxFQUFDLElBQUk7SUFDVkMsTUFBTSxFQUFDLElBQUk7SUFDWEMsT0FBTyxFQUFDLFdBQVc7SUFDbkJDLEtBQUssRUFBQyw0QkFBNEI7SUFDbENDLElBQUksRUFBQyxNQUFNO0lBQ1hDLE1BQU0sRUFBQyxPQUFPO0lBQ2RDLFdBQVcsRUFBQyxHQUFHO0lBQUFmLFFBQUEsRUFFZkMsc0RBQUE7TUFBTWUsQ0FBQyxFQUFDLElBQUk7TUFBQ0MsQ0FBQyxFQUFDLElBQUk7TUFBQ0MsVUFBVSxFQUFDLFFBQVE7TUFBQ0MsUUFBUSxFQUFDLElBQUk7TUFBQ0MsVUFBVSxFQUFDLE9BQU87TUFBQ0MsVUFBVSxFQUFFLE9BQU87TUFBQXJCLFFBQUE7SUFBQTtFQUVyRixFQUVWO0VBQ0RzQix3QkFBd0IsRUFBRTNCLHdCQUF3QjtFQUNsRDRCLE9BQU8sRUFBRzFCLElBQUksSUFBS0EsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssb0JBQW9CO0VBQ3JFMkIsT0FBTyxFQUFFQSxDQUFBLE1BQU87SUFDZEMsV0FBVyxFQUFFLE1BQU07SUFDbkIsTUFBTSxFQUFFaEUsNEZBQVksRUFBRTtJQUN0QixtQkFBbUIsRUFBRSxvQkFBb0I7SUFDekMsUUFBUSxFQUFFO0dBQ1g7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL0BraWUtdG9vbHMvYnBtbi1lZGl0b3IvLi9zdG9yaWVzL2ZlYXR1cmVzL0N1c3RvbVRhc2tzL0N1c3RvbVRhc2tzLm1keCIsIndlYnBhY2s6Ly9Aa2llLXRvb2xzL2JwbW4tZWRpdG9yLy4vc3Rvcmllcy9mZWF0dXJlcy9DdXN0b21UYXNrcy9DdXN0b21UYXNrcy5zdG9yaWVzLnRzeCIsIndlYnBhY2s6Ly9Aa2llLXRvb2xzL2JwbW4tZWRpdG9yLy4vc3Rvcmllcy9mZWF0dXJlcy9DdXN0b21UYXNrcy9vdGhlci9PdGhlckN1c3RvbVRhc2tzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbi8qQGpzeFJ1bnRpbWUgYXV0b21hdGljIEBqc3hJbXBvcnRTb3VyY2UgcmVhY3QqL1xuLypMaWNlbnNlZCB0byB0aGUgQXBhY2hlIFNvZnR3YXJlIEZvdW5kYXRpb24gKEFTRikgdW5kZXIgb25lKi9cbi8qb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZSB0aGUgTk9USUNFIGZpbGUqL1xuLypkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiovXG4vKnJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLiBUaGUgQVNGIGxpY2Vuc2VzIHRoaXMgZmlsZSovXG4vKnRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUqL1xuLypcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2UqL1xuLyp3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQqL1xuLyoqL1xuLypodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjAqL1xuLyoqL1xuLypVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsKi9cbi8qc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4qL1xuLypcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSovXG4vKktJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlKi9cbi8qc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyovXG4vKnVuZGVyIHRoZSBMaWNlbnNlLiovXG5pbXBvcnQge0ZyYWdtZW50IGFzIF9GcmFnbWVudCwganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHN9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHt1c2VNRFhDb21wb25lbnRzIGFzIF9wcm92aWRlQ29tcG9uZW50c30gZnJvbSBcIi9Vc2Vycy90aWFnb2JlbnRvL2FwYWNoZS9pbmN1YmF0b3Ita2llLXRvb2xzL25vZGVfbW9kdWxlcy8ucG5wbS9Ac3Rvcnlib29rK2FkZG9uLWRvY3NANy40LjZfQHR5cGVzK3JlYWN0LWRvbUAxNy4wLjhfQHR5cGVzK3JlYWN0QDE3LjAuMjFfZW5jb2RpbmdAMC4xLjEzX3JlYWNfb3NsdXVtZnR4Y3R2aHVlenRrdmFvNXZ1ZzQvbm9kZV9tb2R1bGVzL0BzdG9yeWJvb2svYWRkb24tZG9jcy9kaXN0L3NoaW1zL21keC1yZWFjdC1zaGltXCI7XG5pbXBvcnQge01ldGEsIFN0b3J5fSBmcm9tIFwiQHN0b3J5Ym9vay9ibG9ja3NcIjtcbmltcG9ydCAqIGFzIEN1c3RvbVRhc2tzIGZyb20gXCIuL0N1c3RvbVRhc2tzLnN0b3JpZXNcIjtcbmZ1bmN0aW9uIF9jcmVhdGVNZHhDb250ZW50KHByb3BzKSB7XG4gIGNvbnN0IF9jb21wb25lbnRzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgaDI6IFwiaDJcIlxuICB9LCBfcHJvdmlkZUNvbXBvbmVudHMoKSwgcHJvcHMuY29tcG9uZW50cyk7XG4gIHJldHVybiBfanN4cyhfRnJhZ21lbnQsIHtcbiAgICBjaGlsZHJlbjogW1wiXFxuXCIsIFwiXFxuXCIsIFwiXFxuXCIsIFwiXFxuXCIsIFwiXFxuXCIsIFwiXFxuXCIsIFwiXFxuXCIsIFwiXFxuXCIsIFwiXFxuXCIsIFwiXFxuXCIsIFwiXFxuXCIsIFwiXFxuXCIsIFwiXFxuXCIsIFwiXFxuXCIsIFwiXFxuXCIsIFwiXFxuXCIsIFwiXFxuXCIsIF9qc3goTWV0YSwge1xuICAgICAgdGl0bGU6IFwiRmVhdHVyZXMvQ3VzdG9tVGFza3NcIixcbiAgICAgIG9mOiBDdXN0b21UYXNrc1xuICAgIH0pLCBcIlxcblwiLCBfanN4KF9jb21wb25lbnRzLmgyLCB7XG4gICAgICBpZDogXCJjdXN0b210YXNrc1wiLFxuICAgICAgY2hpbGRyZW46IFwiQ3VzdG9tVGFza3NcIlxuICAgIH0pXVxuICB9KTtcbn1cbmZ1bmN0aW9uIE1EWENvbnRlbnQocHJvcHMgPSB7fSkge1xuICBjb25zdCB7d3JhcHBlcjogTURYTGF5b3V0fSA9IE9iamVjdC5hc3NpZ24oe30sIF9wcm92aWRlQ29tcG9uZW50cygpLCBwcm9wcy5jb21wb25lbnRzKTtcbiAgcmV0dXJuIE1EWExheW91dCA/IF9qc3goTURYTGF5b3V0LCBPYmplY3QuYXNzaWduKHt9LCBwcm9wcywge1xuICAgIGNoaWxkcmVuOiBfanN4KF9jcmVhdGVNZHhDb250ZW50LCBwcm9wcylcbiAgfSkpIDogX2NyZWF0ZU1keENvbnRlbnQocHJvcHMpO1xufVxuZXhwb3J0IGRlZmF1bHQgTURYQ29udGVudDtcbiIsIi8qXG4gKiBMaWNlbnNlZCB0byB0aGUgQXBhY2hlIFNvZnR3YXJlIEZvdW5kYXRpb24gKEFTRikgdW5kZXIgb25lXG4gKiBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gIFNlZSB0aGUgTk9USUNFIGZpbGVcbiAqIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uXG4gKiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC4gIFRoZSBBU0YgbGljZW5zZXMgdGhpcyBmaWxlXG4gKiB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlXG4gKiBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2VcbiAqIHdpdGggdGhlIExpY2Vuc2UuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLFxuICogc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cbiAqIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXG4gKiBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGVcbiAqIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnNcbiAqIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHR5cGUgeyBNZXRhLCBTdG9yeU9iaiB9IGZyb20gXCJAc3Rvcnlib29rL3JlYWN0XCI7XG5pbXBvcnQgeyBnZXRNYXJzaGFsbGVyIH0gZnJvbSBcIkBraWUtdG9vbHMvYnBtbi1tYXJzaGFsbGVyXCI7XG5pbXBvcnQgeyBnZW5lcmF0ZVV1aWQgfSBmcm9tIFwiQGtpZS10b29scy9ib3hlZC1leHByZXNzaW9uLWNvbXBvbmVudC9kaXN0L2FwaVwiO1xuaW1wb3J0IHsgQnBtbkVkaXRvcldyYXBwZXIsIFN0b3J5Ym9va0JwbW5FZGl0b3JQcm9wcyB9IGZyb20gXCIuLi8uLi9icG1uRWRpdG9yU3Rvcmllc1dyYXBwZXJcIjtcbmltcG9ydCB7IEJwbW5FZGl0b3IsIEJwbW5FZGl0b3JQcm9wcyB9IGZyb20gXCIuLi8uLi8uLi9zcmMvQnBtbkVkaXRvclwiO1xuaW1wb3J0IHsgR1JQQ19BUElfQ0FMTF9UQVNLLCBSRVNUX0FQSV9DQUxMX1RBU0sgfSBmcm9tIFwiLi9vdGhlci9PdGhlckN1c3RvbVRhc2tzXCI7XG5leHBvcnQgY29uc3QgZ2VuZXJhdGVFbXB0eUJwbW4yMCA9ICgpID0+IGA8P3htbCB2ZXJzaW9uPVwiMS4wXCIgZW5jb2Rpbmc9XCJVVEYtOFwiPz5cbjxkZWZpbml0aW9uc1xuICB4bWxuczp4c2k9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAxL1hNTFNjaGVtYS1pbnN0YW5jZVwiXG4gIHhtbG5zOmJwbW4yPVwiaHR0cDovL3d3dy5vbWcub3JnL3NwZWMvQlBNTi8yMDEwMDUyNC9NT0RFTFwiXG4gIHhtbG5zOmJwbW5kaT1cImh0dHA6Ly93d3cub21nLm9yZy9zcGVjL0JQTU4vMjAxMDA1MjQvRElcIlxuICB4bWxuczpicHNpbT1cImh0dHA6Ly93d3cuYnBzaW0ub3JnL3NjaGVtYXMvMS4wXCJcbiAgeG1sbnM6ZGM9XCJodHRwOi8vd3d3Lm9tZy5vcmcvc3BlYy9ERC8yMDEwMDUyNC9EQ1wiXG4gIHhtbG5zOmRyb29scz1cImh0dHA6Ly93d3cuamJvc3Mub3JnL2Ryb29sc1wiXG4gIGlkPVwiJHtnZW5lcmF0ZVV1aWQoKX1cIlxuICB4c2k6c2NoZW1hTG9jYXRpb249XCJodHRwOi8vd3d3Lm9tZy5vcmcvc3BlYy9CUE1OLzIwMTAwNTI0L01PREVMIEJQTU4yMC54c2QgaHR0cDovL3d3dy5qYm9zcy5vcmcvZHJvb2xzIGRyb29scy54c2QgaHR0cDovL3d3dy5icHNpbS5vcmcvc2NoZW1hcy8xLjAgYnBzaW0ueHNkIGh0dHA6Ly93d3cub21nLm9yZy9zcGVjL0RELzIwMTAwNTI0L0RDIERDLnhzZCBodHRwOi8vd3d3Lm9tZy5vcmcvc3BlYy9ERC8yMDEwMDUyNC9ESSBESS54c2RcIlxuICBleHBvcnRlcj1cImpCUE0gUHJvY2VzcyBNb2RlbGVyXCJcbiAgZXhwb3J0ZXJWZXJzaW9uPVwiMi4wXCJcbiAgZXhwcmVzc2lvbkxhbmd1YWdlPVwiXCIgXG4gIHRhcmdldE5hbWVzcGFjZT1cImh0dHBzOi8va2llLmFwYWNoZS5vcmcvYnBtbi8ke2dlbmVyYXRlVXVpZCgpfVwiXG4+XG4gIDxwcm9jZXNzIGlkPVwiVW50aXRsZWRcIiBkcm9vbHM6cGFja2FnZU5hbWU9XCJjb20uZXhhbXBsZVwiIGRyb29sczp2ZXJzaW9uPVwiMS4wXCIgZHJvb2xzOmFkSG9jPVwiZmFsc2VcIiBuYW1lPVwiVW50aXRsZWRcIiBpc0V4ZWN1dGFibGU9XCJ0cnVlXCIgcHJvY2Vzc1R5cGU9XCJQdWJsaWNcIj5cbiAgICA8dGFzayBpZD1cIl9GMkI3RUFCRi1ERjIwLTQ5MTEtODVENy1BOTE4M0UzNEFBQTFcIiBkcm9vbHM6dGFza05hbWU9XCJyZXN0LWFwaS1jYWxsLXRhc2tcIiBuYW1lPVwiUmVzdCBBUEkgY2FsbCBUYXNrXCI+XG4gICAgICA8ZXh0ZW5zaW9uRWxlbWVudHM+XG4gICAgICAgIDxkcm9vbHM6bWV0YURhdGEgbmFtZT1cImVsZW1lbnRuYW1lXCI+XG4gICAgICAgICAgPGRyb29sczptZXRhVmFsdWU+PCFbQ0RBVEFbUmVzdCBBUEkgY2FsbCBUYXNrXV0+PC9kcm9vbHM6bWV0YVZhbHVlPlxuICAgICAgICA8L2Ryb29sczptZXRhRGF0YT5cbiAgICAgIDwvZXh0ZW5zaW9uRWxlbWVudHM+XG4gICAgPC90YXNrPlxuICAgIDx0YXNrIGlkPVwiX0YyQjdFQUJGLURGMjAtNDkxMS04NUQ3LUE5MTgzRTM0QUFBMlwiIGRyb29sczp0YXNrTmFtZT1cImdycGMtYXBpLWNhbGwtdGFza1wiIG5hbWU9XCJnUlBDIEFQSSBjYWxsIFRhc2tcIj5cbiAgICAgIDxleHRlbnNpb25FbGVtZW50cz5cbiAgICAgICAgPGRyb29sczptZXRhRGF0YSBuYW1lPVwiZWxlbWVudG5hbWVcIj5cbiAgICAgICAgICA8ZHJvb2xzOm1ldGFWYWx1ZT48IVtDREFUQVtnUlBDIEFQSSBjYWxsIFRhc2tdXT48L2Ryb29sczptZXRhVmFsdWU+XG4gICAgICAgIDwvZHJvb2xzOm1ldGFEYXRhPlxuICAgICAgPC9leHRlbnNpb25FbGVtZW50cz5cbiAgICA8L3Rhc2s+XG4gIDwvcHJvY2Vzcz5cbiAgPGJwbW5kaTpCUE1ORGlhZ3JhbT5cbiAgICA8YnBtbmRpOkJQTU5QbGFuZSBicG1uRWxlbWVudD1cIlVudGl0bGVkXCI+XG4gICAgICA8YnBtbmRpOkJQTU5TaGFwZSBpZD1cInNoYXBlX19GMkI3RUFCRi1ERjIwLTQ5MTEtODVENy1BOTE4M0UzNEFBQTFcIiBicG1uRWxlbWVudD1cIl9GMkI3RUFCRi1ERjIwLTQ5MTEtODVENy1BOTE4M0UzNEFBQTFcIj5cbiAgICAgICAgPGRjOkJvdW5kcyBoZWlnaHQ9XCIxMDJcIiB3aWR0aD1cIjE1NFwiIHg9XCI0MTZcIiB5PVwiMTAwXCIvPlxuICAgICAgPC9icG1uZGk6QlBNTlNoYXBlPlxuICAgICAgPGJwbW5kaTpCUE1OU2hhcGUgaWQ9XCJzaGFwZV9fRjJCN0VBQkYtREYyMC00OTExLTg1RDctQTkxODNFMzRBQUEyXCIgYnBtbkVsZW1lbnQ9XCJfRjJCN0VBQkYtREYyMC00OTExLTg1RDctQTkxODNFMzRBQUEyXCI+XG4gICAgICAgIDxkYzpCb3VuZHMgaGVpZ2h0PVwiMTAyXCIgd2lkdGg9XCIxNTRcIiB4PVwiNDE2XCIgeT1cIjIyMFwiLz5cbiAgICAgIDwvYnBtbmRpOkJQTU5TaGFwZT5cbiAgICA8L2JwbW5kaTpCUE1OUGxhbmU+XG4gIDwvYnBtbmRpOkJQTU5EaWFncmFtPlxuPC9kZWZpbml0aW9ucz5gO1xuY29uc3QgbWV0YTogTWV0YTxCcG1uRWRpdG9yUHJvcHM+ID0ge1xuICB0aXRsZTogXCJGZWF0dXJlcy9DdXN0b21UYXNrc1wiLFxuICBjb21wb25lbnQ6IEJwbW5FZGl0b3IsXG4gIGluY2x1ZGVTdG9yaWVzOiAvXltBLVpdL1xufTtcbmV4cG9ydCBkZWZhdWx0IG1ldGE7XG50eXBlIFN0b3J5ID0gU3RvcnlPYmo8U3Rvcnlib29rQnBtbkVkaXRvclByb3BzPjtcbmNvbnN0IG1hcnNoYWxsZXIgPSBnZXRNYXJzaGFsbGVyKGdlbmVyYXRlRW1wdHlCcG1uMjAoKSwge1xuICB1cGdyYWRlVG86IFwibGF0ZXN0XCJcbn0pO1xuY29uc3QgbW9kZWwgPSBtYXJzaGFsbGVyLnBhcnNlci5wYXJzZSgpO1xuZXhwb3J0IGNvbnN0IEN1c3RvbVRhc2tzOiBTdG9yeSA9IHtcbiAgcmVuZGVyOiBhcmdzID0+IEJwbW5FZGl0b3JXcmFwcGVyKCksXG4gIGFyZ3M6IHtcbiAgICBtb2RlbDogbW9kZWwsXG4gICAgb3JpZ2luYWxWZXJzaW9uOiBcIjIuMFwiLFxuICAgIGV4dGVybmFsQ29udGV4dERlc2NyaXB0aW9uOiBcIlRoZSBTdG9yeWJvb2sgZm9yIHRoZSBCUE1OIEVkaXRvclwiLFxuICAgIGV4dGVybmFsQ29udGV4dE5hbWU6IFwiQXBhY2hlIEtJRSA6OiBCUE1OIEVkaXRvciA6OiBTdG9yeWJvb2tcIixcbiAgICBpc3N1ZVRyYWNrZXJIcmVmOiBcIlwiLFxuICAgIHhtbDogbWFyc2hhbGxlci5idWlsZGVyLmJ1aWxkKG1vZGVsKSxcbiAgICAvL1xuICAgIGN1c3RvbVRhc2tzOiBbUkVTVF9BUElfQ0FMTF9UQVNLLCBHUlBDX0FQSV9DQUxMX1RBU0tdXG4gIH1cbn07XG5DdXN0b21UYXNrcy5wYXJhbWV0ZXJzID0ge1xuICAuLi5DdXN0b21UYXNrcy5wYXJhbWV0ZXJzLFxuICBkb2NzOiB7XG4gICAgLi4uQ3VzdG9tVGFza3MucGFyYW1ldGVycz8uZG9jcyxcbiAgICBzb3VyY2U6IHtcbiAgICAgIG9yaWdpbmFsU291cmNlOiBcIntcXG4gIHJlbmRlcjogYXJncyA9PiBCcG1uRWRpdG9yV3JhcHBlcigpLFxcbiAgYXJnczoge1xcbiAgICBtb2RlbDogbW9kZWwsXFxuICAgIG9yaWdpbmFsVmVyc2lvbjogXFxcIjIuMFxcXCIsXFxuICAgIGV4dGVybmFsQ29udGV4dERlc2NyaXB0aW9uOiBcXFwiVGhlIFN0b3J5Ym9vayBmb3IgdGhlIEJQTU4gRWRpdG9yXFxcIixcXG4gICAgZXh0ZXJuYWxDb250ZXh0TmFtZTogXFxcIkFwYWNoZSBLSUUgOjogQlBNTiBFZGl0b3IgOjogU3Rvcnlib29rXFxcIixcXG4gICAgaXNzdWVUcmFja2VySHJlZjogXFxcIlxcXCIsXFxuICAgIHhtbDogbWFyc2hhbGxlci5idWlsZGVyLmJ1aWxkKG1vZGVsKSxcXG4gICAgLy9cXG4gICAgY3VzdG9tVGFza3M6IFtSRVNUX0FQSV9DQUxMX1RBU0ssIEdSUENfQVBJX0NBTExfVEFTS11cXG4gIH1cXG59XCIsXG4gICAgICAuLi5DdXN0b21UYXNrcy5wYXJhbWV0ZXJzPy5kb2NzPy5zb3VyY2VcbiAgICB9XG4gIH1cbn07IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBnZW5lcmF0ZVV1aWQgfSBmcm9tIFwiQGtpZS10b29scy9ib3hlZC1leHByZXNzaW9uLWNvbXBvbmVudC9kaXN0L2FwaVwiO1xuaW1wb3J0IHsgQ3VzdG9tVGFzayB9IGZyb20gXCIuLi8uLi8uLi8uLi9zcmMvQnBtbkVkaXRvclwiO1xuaW1wb3J0IFwiQGtpZS10b29scy9icG1uLW1hcnNoYWxsZXIvZGlzdC9kcm9vbHMtZXh0ZW5zaW9uXCI7XG5cbmV4cG9ydCBjb25zdCBQcm9wZXJ0aWVzUGFuZWxDb21wb25lbnQ6IEN1c3RvbVRhc2tbXCJwcm9wZXJ0aWVzUGFuZWxDb21wb25lbnRcIl0gPSAoeyB0YXNrIH0pID0+IChcbiAgPD5cbiAgICA8c3Bhbj5cbiAgICAgIEhlbGxvIGZyb20gQ3VzdG9tIFRhc2sgcHJvcGVydGllcyBwYW5lbCBmb3IgPGI+e3Rhc2s/LltcIkBfbmFtZVwiXX08L2I+XG4gICAgPC9zcGFuPlxuXG4gICAgPHNwYW4+VGhpcyBpcyB3aGVyZSB0aGUgaW50ZXJhY3RpdmUgcGFuZWwgd2lsbCBiZS48L3NwYW4+XG4gIDwvPlxuKTtcblxuZXhwb3J0IGNvbnN0IFJFU1RfQVBJX0NBTExfVEFTSzogQ3VzdG9tVGFzayA9IHtcbiAgaWQ6IFwicmVzdC1hcGktY2FsbC10YXNrXCIsXG4gIGRpc3BsYXlHcm91cDogXCJPdGhlclwiLFxuICBkaXNwbGF5TmFtZTogXCJSZXN0IEFQSSBjYWxsIFRhc2tcIixcbiAgZGlzcGxheURlc2NyaXB0aW9uOiBcIlwiLFxuICBkYXRhSW5wdXRSZXNlcnZlZE5hbWVzOiBbXSxcbiAgZGF0YU91dHB1dFJlc2VydmVkTmFtZXM6IFtdLFxuICBpY29uU3ZnRWxlbWVudDogKFxuICAgIDxzdmdcbiAgICAgIHdpZHRoPVwiMzBcIlxuICAgICAgaGVpZ2h0PVwiMzBcIlxuICAgICAgdmlld0JveD1cIjAgMCAzMCAzMFwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgIHN0cm9rZT1cImJsYWNrXCJcbiAgICAgIHN0cm9rZVdpZHRoPVwiMVwiXG4gICAgPlxuICAgICAgPHRleHQgeD1cIjE1XCIgeT1cIjI1XCIgdGV4dEFuY2hvcj1cIm1pZGRsZVwiIGZvbnRTaXplPVwiMjRcIiBmb250RmFtaWx5PVwiQXJpYWxcIiBmb250V2VpZ2h0PXtcImxpZ2h0XCJ9PlxuICAgICAgICDwn5SFXG4gICAgICA8L3RleHQ+XG4gICAgPC9zdmc+XG4gICksXG4gIHByb3BlcnRpZXNQYW5lbENvbXBvbmVudDogUHJvcGVydGllc1BhbmVsQ29tcG9uZW50LFxuICBtYXRjaGVzOiAodGFzaykgPT4gdGFza1tcIkBfZHJvb2xzOnRhc2tOYW1lXCJdID09PSBcInJlc3QtYXBpLWNhbGwtdGFza1wiLFxuICBwcm9kdWNlOiAoKSA9PiAoe1xuICAgIF9fJCRlbGVtZW50OiBcInRhc2tcIixcbiAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgXCJAX2Ryb29sczp0YXNrTmFtZVwiOiBcInJlc3QtYXBpLWNhbGwtdGFza1wiLFxuICAgIFwiQF9uYW1lXCI6IFwiUmVzdCBBUEkgY2FsbCBUYXNrXCIsXG4gIH0pLFxufTtcblxuZXhwb3J0IGNvbnN0IEdSUENfQVBJX0NBTExfVEFTSzogQ3VzdG9tVGFzayA9IHtcbiAgaWQ6IFwiZ3JwYy1hcGktY2FsbC10YXNrXCIsXG4gIGRpc3BsYXlHcm91cDogXCJPdGhlclwiLFxuICBkaXNwbGF5TmFtZTogXCJnUlBDIEFQSSBjYWxsIFRhc2tcIixcbiAgZGlzcGxheURlc2NyaXB0aW9uOiBcIlwiLFxuICBkYXRhSW5wdXRSZXNlcnZlZE5hbWVzOiBbXSxcbiAgZGF0YU91dHB1dFJlc2VydmVkTmFtZXM6IFtdLFxuICBpY29uU3ZnRWxlbWVudDogKFxuICAgIDxzdmdcbiAgICAgIHdpZHRoPVwiMzBcIlxuICAgICAgaGVpZ2h0PVwiMzBcIlxuICAgICAgdmlld0JveD1cIjAgMCAzMCAzMFwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgIHN0cm9rZT1cImJsYWNrXCJcbiAgICAgIHN0cm9rZVdpZHRoPVwiMVwiXG4gICAgPlxuICAgICAgPHRleHQgeD1cIjE1XCIgeT1cIjI1XCIgdGV4dEFuY2hvcj1cIm1pZGRsZVwiIGZvbnRTaXplPVwiMjRcIiBmb250RmFtaWx5PVwiQXJpYWxcIiBmb250V2VpZ2h0PXtcImxpZ2h0XCJ9PlxuICAgICAgICDinLTvuI9cbiAgICAgIDwvdGV4dD5cbiAgICA8L3N2Zz5cbiAgKSxcbiAgcHJvcGVydGllc1BhbmVsQ29tcG9uZW50OiBQcm9wZXJ0aWVzUGFuZWxDb21wb25lbnQsXG4gIG1hdGNoZXM6ICh0YXNrKSA9PiB0YXNrW1wiQF9kcm9vbHM6dGFza05hbWVcIl0gPT09IFwiZ3JwYy1hcGktY2FsbC10YXNrXCIsXG4gIHByb2R1Y2U6ICgpID0+ICh7XG4gICAgX18kJGVsZW1lbnQ6IFwidGFza1wiLFxuICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICBcIkBfZHJvb2xzOnRhc2tOYW1lXCI6IFwiZ3JwYy1hcGktY2FsbC10YXNrXCIsXG4gICAgXCJAX25hbWVcIjogXCJnUlBDIEFQSSBjYWxsIFRhc2tcIixcbiAgfSksXG59O1xuIl0sIm5hbWVzIjpbImdldE1hcnNoYWxsZXIiLCJnZW5lcmF0ZVV1aWQiLCJCcG1uRWRpdG9yV3JhcHBlciIsIkJwbW5FZGl0b3IiLCJHUlBDX0FQSV9DQUxMX1RBU0siLCJSRVNUX0FQSV9DQUxMX1RBU0siLCJnZW5lcmF0ZUVtcHR5QnBtbjIwIiwibWV0YSIsInRpdGxlIiwiY29tcG9uZW50IiwiaW5jbHVkZVN0b3JpZXMiLCJtYXJzaGFsbGVyIiwidXBncmFkZVRvIiwibW9kZWwiLCJwYXJzZXIiLCJwYXJzZSIsIkN1c3RvbVRhc2tzIiwicmVuZGVyIiwiYXJncyIsIm9yaWdpbmFsVmVyc2lvbiIsImV4dGVybmFsQ29udGV4dERlc2NyaXB0aW9uIiwiZXh0ZXJuYWxDb250ZXh0TmFtZSIsImlzc3VlVHJhY2tlckhyZWYiLCJ4bWwiLCJidWlsZGVyIiwiYnVpbGQiLCJjdXN0b21UYXNrcyIsInBhcmFtZXRlcnMiLCJkb2NzIiwiX2EiLCJzb3VyY2UiLCJvcmlnaW5hbFNvdXJjZSIsIl9jIiwiX2IiLCJfX25hbWVkRXhwb3J0c09yZGVyIiwiUHJvcGVydGllc1BhbmVsQ29tcG9uZW50IiwiX3JlZiIsInRhc2siLCJfanN4cyIsIl9GcmFnbWVudCIsImNoaWxkcmVuIiwiX2pzeCIsImlkIiwiZGlzcGxheUdyb3VwIiwiZGlzcGxheU5hbWUiLCJkaXNwbGF5RGVzY3JpcHRpb24iLCJkYXRhSW5wdXRSZXNlcnZlZE5hbWVzIiwiZGF0YU91dHB1dFJlc2VydmVkTmFtZXMiLCJpY29uU3ZnRWxlbWVudCIsIndpZHRoIiwiaGVpZ2h0Iiwidmlld0JveCIsInhtbG5zIiwiZmlsbCIsInN0cm9rZSIsInN0cm9rZVdpZHRoIiwieCIsInkiLCJ0ZXh0QW5jaG9yIiwiZm9udFNpemUiLCJmb250RmFtaWx5IiwiZm9udFdlaWdodCIsInByb3BlcnRpZXNQYW5lbENvbXBvbmVudCIsIm1hdGNoZXMiLCJwcm9kdWNlIiwiX18kJGVsZW1lbnQiXSwic291cmNlUm9vdCI6IiJ9