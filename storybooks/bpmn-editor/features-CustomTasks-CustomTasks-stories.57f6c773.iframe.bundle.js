"use strict";
(self["webpackChunk_kie_tools_bpmn_editor"] = self["webpackChunk_kie_tools_bpmn_editor"] || []).push([["features-CustomTasks-CustomTasks-stories"],{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZXMtQ3VzdG9tVGFza3MtQ3VzdG9tVGFza3Mtc3Rvcmllcy41N2Y2Yzc3My5pZnJhbWUuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQjJEO0FBQ21CO0FBQ2U7QUFDdkI7QUFDWTtBQUMzRSxNQUFNTSxtQkFBbUIsR0FBR0EsQ0FBQSxLQUFNOzs7Ozs7OztRQVFqQ0wsNEZBQVksRUFBRTs7Ozs7aURBSzJCQSw0RkFBWSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2VBNEJoRDtBQUNmLE1BQU1NLElBQUksR0FBMEI7RUFDbENDLEtBQUssRUFBRSxzQkFBc0I7RUFDN0JDLFNBQVMsRUFBRU4sdURBQVU7RUFDckJPLGNBQWMsRUFBRTtDQUNqQjtBQUNELGlFQUFlSCxJQUFJLEVBQUM7QUFFcEIsTUFBTUksVUFBVSxHQUFHWCx5RUFBYSxDQUFDTSxtQkFBbUIsRUFBRSxFQUFFO0VBQ3RETSxTQUFTLEVBQUU7Q0FDWixDQUFDO0FBQ0YsTUFBTUMsS0FBSyxHQUFHRixVQUFVLENBQUNHLE1BQU0sQ0FBQ0MsS0FBSyxFQUFFO0FBQ2hDLE1BQU1DLFdBQVcsR0FBVTtFQUNoQ0MsTUFBTSxFQUFFQyxJQUFJLElBQUloQiw0RUFBaUIsRUFBRTtFQUNuQ2dCLElBQUksRUFBRTtJQUNKTCxLQUFLLEVBQUVBLEtBQUs7SUFDWk0sZUFBZSxFQUFFLEtBQUs7SUFDdEJDLDBCQUEwQixFQUFFLG1DQUFtQztJQUMvREMsbUJBQW1CLEVBQUUsd0NBQXdDO0lBQzdEQyxnQkFBZ0IsRUFBRSxFQUFFO0lBQ3BCQyxHQUFHLEVBQUVaLFVBQVUsQ0FBQ2EsT0FBTyxDQUFDQyxLQUFLLENBQUNaLEtBQUssQ0FBQztJQUVwQ2EsV0FBVyxFQUFFLENBQUNyQix1RUFBa0IsRUFBRUQsdUVBQWtCOztDQUV2RDtBQUNEWSxXQUFXLENBQUNXLFVBQVUsR0FBRztFQUN2QixHQUFHWCxXQUFXLENBQUNXLFVBQVU7RUFDekJDLElBQUksRUFB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QUUsT0FBTztNQUFBckIsUUFBQTtJQUFBO0VBRXJGLEVBRVY7RUFDRHNCLHdCQUF3QixFQUFFM0Isd0JBQXdCO0VBQ2xENEIsT0FBTyxFQUFHMUIsSUFBSSxJQUFLQSxJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxvQkFBb0I7RUFDckUyQixPQUFPLEVBQUVBLENBQUEsTUFBTztJQUNkQyxXQUFXLEVBQUUsTUFBTTtJQUNuQixNQUFNLEVBQUVoRSw0RkFBWSxFQUFFO0lBQ3RCLG1CQUFtQixFQUFFLG9CQUFvQjtJQUN6QyxRQUFRLEVBQUU7R0FDWDtDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGtpZS10b29scy9icG1uLWVkaXRvci8uL3N0b3JpZXMvZmVhdHVyZXMvQ3VzdG9tVGFza3MvQ3VzdG9tVGFza3Muc3Rvcmllcy50c3giLCJ3ZWJwYWNrOi8vQGtpZS10b29scy9icG1uLWVkaXRvci8uL3N0b3JpZXMvZmVhdHVyZXMvQ3VzdG9tVGFza3Mvb3RoZXIvT3RoZXJDdXN0b21UYXNrcy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIExpY2Vuc2VkIHRvIHRoZSBBcGFjaGUgU29mdHdhcmUgRm91bmRhdGlvbiAoQVNGKSB1bmRlciBvbmVcbiAqIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiAgU2VlIHRoZSBOT1RJQ0UgZmlsZVxuICogZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb25cbiAqIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLiAgVGhlIEFTRiBsaWNlbnNlcyB0aGlzIGZpbGVcbiAqIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGVcbiAqIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuICogd2l0aCB0aGUgTGljZW5zZS4gIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsXG4gKiBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxuICogXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcbiAqIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZVxuICogc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9uc1xuICogdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdHlwZSB7IE1ldGEsIFN0b3J5T2JqIH0gZnJvbSBcIkBzdG9yeWJvb2svcmVhY3RcIjtcbmltcG9ydCB7IGdldE1hcnNoYWxsZXIgfSBmcm9tIFwiQGtpZS10b29scy9icG1uLW1hcnNoYWxsZXJcIjtcbmltcG9ydCB7IGdlbmVyYXRlVXVpZCB9IGZyb20gXCJAa2llLXRvb2xzL2JveGVkLWV4cHJlc3Npb24tY29tcG9uZW50L2Rpc3QvYXBpXCI7XG5pbXBvcnQgeyBCcG1uRWRpdG9yV3JhcHBlciwgU3Rvcnlib29rQnBtbkVkaXRvclByb3BzIH0gZnJvbSBcIi4uLy4uL2JwbW5FZGl0b3JTdG9yaWVzV3JhcHBlclwiO1xuaW1wb3J0IHsgQnBtbkVkaXRvciwgQnBtbkVkaXRvclByb3BzIH0gZnJvbSBcIi4uLy4uLy4uL3NyYy9CcG1uRWRpdG9yXCI7XG5pbXBvcnQgeyBHUlBDX0FQSV9DQUxMX1RBU0ssIFJFU1RfQVBJX0NBTExfVEFTSyB9IGZyb20gXCIuL290aGVyL090aGVyQ3VzdG9tVGFza3NcIjtcbmV4cG9ydCBjb25zdCBnZW5lcmF0ZUVtcHR5QnBtbjIwID0gKCkgPT4gYDw/eG1sIHZlcnNpb249XCIxLjBcIiBlbmNvZGluZz1cIlVURi04XCI/PlxuPGRlZmluaXRpb25zXG4gIHhtbG5zOnhzaT1cImh0dHA6Ly93d3cudzMub3JnLzIwMDEvWE1MU2NoZW1hLWluc3RhbmNlXCJcbiAgeG1sbnM6YnBtbjI9XCJodHRwOi8vd3d3Lm9tZy5vcmcvc3BlYy9CUE1OLzIwMTAwNTI0L01PREVMXCJcbiAgeG1sbnM6YnBtbmRpPVwiaHR0cDovL3d3dy5vbWcub3JnL3NwZWMvQlBNTi8yMDEwMDUyNC9ESVwiXG4gIHhtbG5zOmJwc2ltPVwiaHR0cDovL3d3dy5icHNpbS5vcmcvc2NoZW1hcy8xLjBcIlxuICB4bWxuczpkYz1cImh0dHA6Ly93d3cub21nLm9yZy9zcGVjL0RELzIwMTAwNTI0L0RDXCJcbiAgeG1sbnM6ZHJvb2xzPVwiaHR0cDovL3d3dy5qYm9zcy5vcmcvZHJvb2xzXCJcbiAgaWQ9XCIke2dlbmVyYXRlVXVpZCgpfVwiXG4gIHhzaTpzY2hlbWFMb2NhdGlvbj1cImh0dHA6Ly93d3cub21nLm9yZy9zcGVjL0JQTU4vMjAxMDA1MjQvTU9ERUwgQlBNTjIwLnhzZCBodHRwOi8vd3d3Lmpib3NzLm9yZy9kcm9vbHMgZHJvb2xzLnhzZCBodHRwOi8vd3d3LmJwc2ltLm9yZy9zY2hlbWFzLzEuMCBicHNpbS54c2QgaHR0cDovL3d3dy5vbWcub3JnL3NwZWMvREQvMjAxMDA1MjQvREMgREMueHNkIGh0dHA6Ly93d3cub21nLm9yZy9zcGVjL0RELzIwMTAwNTI0L0RJIERJLnhzZFwiXG4gIGV4cG9ydGVyPVwiakJQTSBQcm9jZXNzIE1vZGVsZXJcIlxuICBleHBvcnRlclZlcnNpb249XCIyLjBcIlxuICBleHByZXNzaW9uTGFuZ3VhZ2U9XCJcIiBcbiAgdGFyZ2V0TmFtZXNwYWNlPVwiaHR0cHM6Ly9raWUuYXBhY2hlLm9yZy9icG1uLyR7Z2VuZXJhdGVVdWlkKCl9XCJcbj5cbiAgPHByb2Nlc3MgaWQ9XCJVbnRpdGxlZFwiIGRyb29sczpwYWNrYWdlTmFtZT1cImNvbS5leGFtcGxlXCIgZHJvb2xzOnZlcnNpb249XCIxLjBcIiBkcm9vbHM6YWRIb2M9XCJmYWxzZVwiIG5hbWU9XCJVbnRpdGxlZFwiIGlzRXhlY3V0YWJsZT1cInRydWVcIiBwcm9jZXNzVHlwZT1cIlB1YmxpY1wiPlxuICAgIDx0YXNrIGlkPVwiX0YyQjdFQUJGLURGMjAtNDkxMS04NUQ3LUE5MTgzRTM0QUFBMVwiIGRyb29sczp0YXNrTmFtZT1cInJlc3QtYXBpLWNhbGwtdGFza1wiIG5hbWU9XCJSZXN0IEFQSSBjYWxsIFRhc2tcIj5cbiAgICAgIDxleHRlbnNpb25FbGVtZW50cz5cbiAgICAgICAgPGRyb29sczptZXRhRGF0YSBuYW1lPVwiZWxlbWVudG5hbWVcIj5cbiAgICAgICAgICA8ZHJvb2xzOm1ldGFWYWx1ZT48IVtDREFUQVtSZXN0IEFQSSBjYWxsIFRhc2tdXT48L2Ryb29sczptZXRhVmFsdWU+XG4gICAgICAgIDwvZHJvb2xzOm1ldGFEYXRhPlxuICAgICAgPC9leHRlbnNpb25FbGVtZW50cz5cbiAgICA8L3Rhc2s+XG4gICAgPHRhc2sgaWQ9XCJfRjJCN0VBQkYtREYyMC00OTExLTg1RDctQTkxODNFMzRBQUEyXCIgZHJvb2xzOnRhc2tOYW1lPVwiZ3JwYy1hcGktY2FsbC10YXNrXCIgbmFtZT1cImdSUEMgQVBJIGNhbGwgVGFza1wiPlxuICAgICAgPGV4dGVuc2lvbkVsZW1lbnRzPlxuICAgICAgICA8ZHJvb2xzOm1ldGFEYXRhIG5hbWU9XCJlbGVtZW50bmFtZVwiPlxuICAgICAgICAgIDxkcm9vbHM6bWV0YVZhbHVlPjwhW0NEQVRBW2dSUEMgQVBJIGNhbGwgVGFza11dPjwvZHJvb2xzOm1ldGFWYWx1ZT5cbiAgICAgICAgPC9kcm9vbHM6bWV0YURhdGE+XG4gICAgICA8L2V4dGVuc2lvbkVsZW1lbnRzPlxuICAgIDwvdGFzaz5cbiAgPC9wcm9jZXNzPlxuICA8YnBtbmRpOkJQTU5EaWFncmFtPlxuICAgIDxicG1uZGk6QlBNTlBsYW5lIGJwbW5FbGVtZW50PVwiVW50aXRsZWRcIj5cbiAgICAgIDxicG1uZGk6QlBNTlNoYXBlIGlkPVwic2hhcGVfX0YyQjdFQUJGLURGMjAtNDkxMS04NUQ3LUE5MTgzRTM0QUFBMVwiIGJwbW5FbGVtZW50PVwiX0YyQjdFQUJGLURGMjAtNDkxMS04NUQ3LUE5MTgzRTM0QUFBMVwiPlxuICAgICAgICA8ZGM6Qm91bmRzIGhlaWdodD1cIjEwMlwiIHdpZHRoPVwiMTU0XCIgeD1cIjQxNlwiIHk9XCIxMDBcIi8+XG4gICAgICA8L2JwbW5kaTpCUE1OU2hhcGU+XG4gICAgICA8YnBtbmRpOkJQTU5TaGFwZSBpZD1cInNoYXBlX19GMkI3RUFCRi1ERjIwLTQ5MTEtODVENy1BOTE4M0UzNEFBQTJcIiBicG1uRWxlbWVudD1cIl9GMkI3RUFCRi1ERjIwLTQ5MTEtODVENy1BOTE4M0UzNEFBQTJcIj5cbiAgICAgICAgPGRjOkJvdW5kcyBoZWlnaHQ9XCIxMDJcIiB3aWR0aD1cIjE1NFwiIHg9XCI0MTZcIiB5PVwiMjIwXCIvPlxuICAgICAgPC9icG1uZGk6QlBNTlNoYXBlPlxuICAgIDwvYnBtbmRpOkJQTU5QbGFuZT5cbiAgPC9icG1uZGk6QlBNTkRpYWdyYW0+XG48L2RlZmluaXRpb25zPmA7XG5jb25zdCBtZXRhOiBNZXRhPEJwbW5FZGl0b3JQcm9wcz4gPSB7XG4gIHRpdGxlOiBcIkZlYXR1cmVzL0N1c3RvbVRhc2tzXCIsXG4gIGNvbXBvbmVudDogQnBtbkVkaXRvcixcbiAgaW5jbHVkZVN0b3JpZXM6IC9eW0EtWl0vXG59O1xuZXhwb3J0IGRlZmF1bHQgbWV0YTtcbnR5cGUgU3RvcnkgPSBTdG9yeU9iajxTdG9yeWJvb2tCcG1uRWRpdG9yUHJvcHM+O1xuY29uc3QgbWFyc2hhbGxlciA9IGdldE1hcnNoYWxsZXIoZ2VuZXJhdGVFbXB0eUJwbW4yMCgpLCB7XG4gIHVwZ3JhZGVUbzogXCJsYXRlc3RcIlxufSk7XG5jb25zdCBtb2RlbCA9IG1hcnNoYWxsZXIucGFyc2VyLnBhcnNlKCk7XG5leHBvcnQgY29uc3QgQ3VzdG9tVGFza3M6IFN0b3J5ID0ge1xuICByZW5kZXI6IGFyZ3MgPT4gQnBtbkVkaXRvcldyYXBwZXIoKSxcbiAgYXJnczoge1xuICAgIG1vZGVsOiBtb2RlbCxcbiAgICBvcmlnaW5hbFZlcnNpb246IFwiMi4wXCIsXG4gICAgZXh0ZXJuYWxDb250ZXh0RGVzY3JpcHRpb246IFwiVGhlIFN0b3J5Ym9vayBmb3IgdGhlIEJQTU4gRWRpdG9yXCIsXG4gICAgZXh0ZXJuYWxDb250ZXh0TmFtZTogXCJBcGFjaGUgS0lFIDo6IEJQTU4gRWRpdG9yIDo6IFN0b3J5Ym9va1wiLFxuICAgIGlzc3VlVHJhY2tlckhyZWY6IFwiXCIsXG4gICAgeG1sOiBtYXJzaGFsbGVyLmJ1aWxkZXIuYnVpbGQobW9kZWwpLFxuICAgIC8vXG4gICAgY3VzdG9tVGFza3M6IFtSRVNUX0FQSV9DQUxMX1RBU0ssIEdSUENfQVBJX0NBTExfVEFTS11cbiAgfVxufTtcbkN1c3RvbVRhc2tzLnBhcmFtZXRlcnMgPSB7XG4gIC4uLkN1c3RvbVRhc2tzLnBhcmFtZXRlcnMsXG4gIGRvY3M6IHtcbiAgICAuLi5DdXN0b21UYXNrcy5wYXJhbWV0ZXJzPy5kb2NzLFxuICAgIHNvdXJjZToge1xuICAgICAgb3JpZ2luYWxTb3VyY2U6IFwie1xcbiAgcmVuZGVyOiBhcmdzID0+IEJwbW5FZGl0b3JXcmFwcGVyKCksXFxuICBhcmdzOiB7XFxuICAgIG1vZGVsOiBtb2RlbCxcXG4gICAgb3JpZ2luYWxWZXJzaW9uOiBcXFwiMi4wXFxcIixcXG4gICAgZXh0ZXJuYWxDb250ZXh0RGVzY3JpcHRpb246IFxcXCJUaGUgU3Rvcnlib29rIGZvciB0aGUgQlBNTiBFZGl0b3JcXFwiLFxcbiAgICBleHRlcm5hbENvbnRleHROYW1lOiBcXFwiQXBhY2hlIEtJRSA6OiBCUE1OIEVkaXRvciA6OiBTdG9yeWJvb2tcXFwiLFxcbiAgICBpc3N1ZVRyYWNrZXJIcmVmOiBcXFwiXFxcIixcXG4gICAgeG1sOiBtYXJzaGFsbGVyLmJ1aWxkZXIuYnVpbGQobW9kZWwpLFxcbiAgICAvL1xcbiAgICBjdXN0b21UYXNrczogW1JFU1RfQVBJX0NBTExfVEFTSywgR1JQQ19BUElfQ0FMTF9UQVNLXVxcbiAgfVxcbn1cIixcbiAgICAgIC4uLkN1c3RvbVRhc2tzLnBhcmFtZXRlcnM/LmRvY3M/LnNvdXJjZVxuICAgIH1cbiAgfVxufTsiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGdlbmVyYXRlVXVpZCB9IGZyb20gXCJAa2llLXRvb2xzL2JveGVkLWV4cHJlc3Npb24tY29tcG9uZW50L2Rpc3QvYXBpXCI7XG5pbXBvcnQgeyBDdXN0b21UYXNrIH0gZnJvbSBcIi4uLy4uLy4uLy4uL3NyYy9CcG1uRWRpdG9yXCI7XG5pbXBvcnQgXCJAa2llLXRvb2xzL2JwbW4tbWFyc2hhbGxlci9kaXN0L2Ryb29scy1leHRlbnNpb25cIjtcblxuZXhwb3J0IGNvbnN0IFByb3BlcnRpZXNQYW5lbENvbXBvbmVudDogQ3VzdG9tVGFza1tcInByb3BlcnRpZXNQYW5lbENvbXBvbmVudFwiXSA9ICh7IHRhc2sgfSkgPT4gKFxuICA8PlxuICAgIDxzcGFuPlxuICAgICAgSGVsbG8gZnJvbSBDdXN0b20gVGFzayBwcm9wZXJ0aWVzIHBhbmVsIGZvciA8Yj57dGFzaz8uW1wiQF9uYW1lXCJdfTwvYj5cbiAgICA8L3NwYW4+XG5cbiAgICA8c3Bhbj5UaGlzIGlzIHdoZXJlIHRoZSBpbnRlcmFjdGl2ZSBwYW5lbCB3aWxsIGJlLjwvc3Bhbj5cbiAgPC8+XG4pO1xuXG5leHBvcnQgY29uc3QgUkVTVF9BUElfQ0FMTF9UQVNLOiBDdXN0b21UYXNrID0ge1xuICBpZDogXCJyZXN0LWFwaS1jYWxsLXRhc2tcIixcbiAgZGlzcGxheUdyb3VwOiBcIk90aGVyXCIsXG4gIGRpc3BsYXlOYW1lOiBcIlJlc3QgQVBJIGNhbGwgVGFza1wiLFxuICBkaXNwbGF5RGVzY3JpcHRpb246IFwiXCIsXG4gIGRhdGFJbnB1dFJlc2VydmVkTmFtZXM6IFtdLFxuICBkYXRhT3V0cHV0UmVzZXJ2ZWROYW1lczogW10sXG4gIGljb25TdmdFbGVtZW50OiAoXG4gICAgPHN2Z1xuICAgICAgd2lkdGg9XCIzMFwiXG4gICAgICBoZWlnaHQ9XCIzMFwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDMwIDMwXCJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgc3Ryb2tlPVwiYmxhY2tcIlxuICAgICAgc3Ryb2tlV2lkdGg9XCIxXCJcbiAgICA+XG4gICAgICA8dGV4dCB4PVwiMTVcIiB5PVwiMjVcIiB0ZXh0QW5jaG9yPVwibWlkZGxlXCIgZm9udFNpemU9XCIyNFwiIGZvbnRGYW1pbHk9XCJBcmlhbFwiIGZvbnRXZWlnaHQ9e1wibGlnaHRcIn0+XG4gICAgICAgIPCflIVcbiAgICAgIDwvdGV4dD5cbiAgICA8L3N2Zz5cbiAgKSxcbiAgcHJvcGVydGllc1BhbmVsQ29tcG9uZW50OiBQcm9wZXJ0aWVzUGFuZWxDb21wb25lbnQsXG4gIG1hdGNoZXM6ICh0YXNrKSA9PiB0YXNrW1wiQF9kcm9vbHM6dGFza05hbWVcIl0gPT09IFwicmVzdC1hcGktY2FsbC10YXNrXCIsXG4gIHByb2R1Y2U6ICgpID0+ICh7XG4gICAgX18kJGVsZW1lbnQ6IFwidGFza1wiLFxuICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICBcIkBfZHJvb2xzOnRhc2tOYW1lXCI6IFwicmVzdC1hcGktY2FsbC10YXNrXCIsXG4gICAgXCJAX25hbWVcIjogXCJSZXN0IEFQSSBjYWxsIFRhc2tcIixcbiAgfSksXG59O1xuXG5leHBvcnQgY29uc3QgR1JQQ19BUElfQ0FMTF9UQVNLOiBDdXN0b21UYXNrID0ge1xuICBpZDogXCJncnBjLWFwaS1jYWxsLXRhc2tcIixcbiAgZGlzcGxheUdyb3VwOiBcIk90aGVyXCIsXG4gIGRpc3BsYXlOYW1lOiBcImdSUEMgQVBJIGNhbGwgVGFza1wiLFxuICBkaXNwbGF5RGVzY3JpcHRpb246IFwiXCIsXG4gIGRhdGFJbnB1dFJlc2VydmVkTmFtZXM6IFtdLFxuICBkYXRhT3V0cHV0UmVzZXJ2ZWROYW1lczogW10sXG4gIGljb25TdmdFbGVtZW50OiAoXG4gICAgPHN2Z1xuICAgICAgd2lkdGg9XCIzMFwiXG4gICAgICBoZWlnaHQ9XCIzMFwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDMwIDMwXCJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgc3Ryb2tlPVwiYmxhY2tcIlxuICAgICAgc3Ryb2tlV2lkdGg9XCIxXCJcbiAgICA+XG4gICAgICA8dGV4dCB4PVwiMTVcIiB5PVwiMjVcIiB0ZXh0QW5jaG9yPVwibWlkZGxlXCIgZm9udFNpemU9XCIyNFwiIGZvbnRGYW1pbHk9XCJBcmlhbFwiIGZvbnRXZWlnaHQ9e1wibGlnaHRcIn0+XG4gICAgICAgIOKctO+4j1xuICAgICAgPC90ZXh0PlxuICAgIDwvc3ZnPlxuICApLFxuICBwcm9wZXJ0aWVzUGFuZWxDb21wb25lbnQ6IFByb3BlcnRpZXNQYW5lbENvbXBvbmVudCxcbiAgbWF0Y2hlczogKHRhc2spID0+IHRhc2tbXCJAX2Ryb29sczp0YXNrTmFtZVwiXSA9PT0gXCJncnBjLWFwaS1jYWxsLXRhc2tcIixcbiAgcHJvZHVjZTogKCkgPT4gKHtcbiAgICBfXyQkZWxlbWVudDogXCJ0YXNrXCIsXG4gICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgIFwiQF9kcm9vbHM6dGFza05hbWVcIjogXCJncnBjLWFwaS1jYWxsLXRhc2tcIixcbiAgICBcIkBfbmFtZVwiOiBcImdSUEMgQVBJIGNhbGwgVGFza1wiLFxuICB9KSxcbn07XG4iXSwibmFtZXMiOlsiZ2V0TWFyc2hhbGxlciIsImdlbmVyYXRlVXVpZCIsIkJwbW5FZGl0b3JXcmFwcGVyIiwiQnBtbkVkaXRvciIsIkdSUENfQVBJX0NBTExfVEFTSyIsIlJFU1RfQVBJX0NBTExfVEFTSyIsImdlbmVyYXRlRW1wdHlCcG1uMjAiLCJtZXRhIiwidGl0bGUiLCJjb21wb25lbnQiLCJpbmNsdWRlU3RvcmllcyIsIm1hcnNoYWxsZXIiLCJ1cGdyYWRlVG8iLCJtb2RlbCIsInBhcnNlciIsInBhcnNlIiwiQ3VzdG9tVGFza3MiLCJyZW5kZXIiLCJhcmdzIiwib3JpZ2luYWxWZXJzaW9uIiwiZXh0ZXJuYWxDb250ZXh0RGVzY3JpcHRpb24iLCJleHRlcm5hbENvbnRleHROYW1lIiwiaXNzdWVUcmFja2VySHJlZiIsInhtbCIsImJ1aWxkZXIiLCJidWlsZCIsImN1c3RvbVRhc2tzIiwicGFyYW1ldGVycyIsImRvY3MiLCJfYSIsInNvdXJjZSIsIm9yaWdpbmFsU291cmNlIiwiX2MiLCJfYiIsIl9fbmFtZWRFeHBvcnRzT3JkZXIiLCJQcm9wZXJ0aWVzUGFuZWxDb21wb25lbnQiLCJfcmVmIiwidGFzayIsIl9qc3hzIiwiX0ZyYWdtZW50IiwiY2hpbGRyZW4iLCJfanN4IiwiaWQiLCJkaXNwbGF5R3JvdXAiLCJkaXNwbGF5TmFtZSIsImRpc3BsYXlEZXNjcmlwdGlvbiIsImRhdGFJbnB1dFJlc2VydmVkTmFtZXMiLCJkYXRhT3V0cHV0UmVzZXJ2ZWROYW1lcyIsImljb25TdmdFbGVtZW50Iiwid2lkdGgiLCJoZWlnaHQiLCJ2aWV3Qm94IiwieG1sbnMiLCJmaWxsIiwic3Ryb2tlIiwic3Ryb2tlV2lkdGgiLCJ4IiwieSIsInRleHRBbmNob3IiLCJmb250U2l6ZSIsImZvbnRGYW1pbHkiLCJmb250V2VpZ2h0IiwicHJvcGVydGllc1BhbmVsQ29tcG9uZW50IiwibWF0Y2hlcyIsInByb2R1Y2UiLCJfXyQkZWxlbWVudCJdLCJzb3VyY2VSb290IjoiIn0=