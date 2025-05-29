"use strict";
(self["webpackChunk_kie_tools_scesim_editor"] = self["webpackChunk_kie_tools_scesim_editor"] || []).push([["misc-simple-Simple-stories"],{

/***/ "./stories/misc/simple/Simple.stories.tsx":
/*!************************************************!*\
  !*** ./stories/misc/simple/Simple.stories.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Simple: () => (/* binding */ Simple),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   simpleFileName: () => (/* binding */ simpleFileName),
/* harmony export */   simpleScesim: () => (/* binding */ simpleScesim)
/* harmony export */ });
/* harmony import */ var _kie_tools_scesim_marshaller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @kie-tools/scesim-marshaller */ "../scesim-marshaller/dist/index.js");
/* harmony import */ var _src_TestScenarioEditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../src/TestScenarioEditor */ "./src/TestScenarioEditor.tsx");
/* harmony import */ var _scesimEditorStoriesWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../scesimEditorStoriesWrapper */ "./stories/scesimEditorStoriesWrapper.tsx");
/* harmony import */ var _kie_tools_dmn_marshaller_dist_normalization_normalize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @kie-tools/dmn-marshaller/dist/normalization/normalize */ "../dmn-marshaller/dist/normalization/normalize.js");
/* harmony import */ var _kie_tools_dmn_marshaller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @kie-tools/dmn-marshaller */ "../dmn-marshaller/dist/index.js");
/* harmony import */ var _examples_ExternalDmnModels__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../examples/ExternalDmnModels */ "./stories/examples/ExternalDmnModels.ts");
var _a, _b, _c;






const simpleFileName = "simple.scesim";
const simpleScesim = `<?xml version="1.0" encoding="UTF-8" ?>
<ScenarioSimulationModel xmlns="https://kie.org/scesim/1.8" version="1.8">
  <simulation>
    <scesimModelDescriptor>
      <factMappings>
        <FactMapping>
          <expressionElements />
          <expressionIdentifier>
            <name>Index</name>
            <type>OTHER</type>
          </expressionIdentifier>
          <factIdentifier>
            <name>#</name>
            <className>java.lang.Integer</className>
          </factIdentifier>
          <className>java.lang.Integer</className>
          <factAlias>#</factAlias>
          <columnWidth>70</columnWidth>
          <factMappingValueType>NOT_EXPRESSION</factMappingValueType>
        </FactMapping>
        <FactMapping>
          <expressionElements />
          <expressionIdentifier>
            <name>Description</name>
            <type>OTHER</type>
          </expressionIdentifier>
          <factIdentifier>
            <name>Scenario description</name>
            <className>java.lang.String</className>
          </factIdentifier>
          <className>java.lang.String</className>
          <factAlias>Scenario description</factAlias>
          <columnWidth>300</columnWidth>
          <factMappingValueType>NOT_EXPRESSION</factMappingValueType>
        </FactMapping>
        <FactMapping>
          <expressionElements>
            <ExpressionElement>
              <step>Input</step>
            </ExpressionElement>
          </expressionElements>
          <expressionIdentifier>
            <name>_4F584C15-5873-426F-8F88-51E2E749967B</name>
            <type>GIVEN</type>
          </expressionIdentifier>
          <factIdentifier>
            <name>Input</name>
            <className>number</className>
          </factIdentifier>
          <className>number</className>
          <factAlias>Input</factAlias>
          <expressionAlias>value</expressionAlias>
          <columnWidth>100</columnWidth>
          <factMappingValueType>NOT_EXPRESSION</factMappingValueType>
        </FactMapping>
        <FactMapping>
          <expressionElements>
            <ExpressionElement>
              <step>Decision</step>
            </ExpressionElement>
          </expressionElements>
          <expressionIdentifier>
            <name>_45F692B9-E45C-473F-A4E3-13510250FF19</name>
            <type>EXPECT</type>
          </expressionIdentifier>
          <factIdentifier>
            <name>Decision</name>
            <className>boolean</className>
          </factIdentifier>
          <className>boolean</className>
          <factAlias>Decision</factAlias>
          <expressionAlias>value</expressionAlias>
          <columnWidth>100</columnWidth>
          <factMappingValueType>NOT_EXPRESSION</factMappingValueType>
        </FactMapping>
      </factMappings>
    </scesimModelDescriptor>
    <scesimData>
      <Scenario>
        <factMappingValues>
          <FactMappingValue>
            <factIdentifier>
              <name>#</name>
              <className>java.lang.Integer</className>
            </factIdentifier>
            <expressionIdentifier>
              <name>Index</name>
              <type>OTHER</type>
            </expressionIdentifier>
            <rawValue class="string">1</rawValue>
          </FactMappingValue>
          <FactMappingValue>
            <factIdentifier>
              <name>Scenario description</name>
              <className>java.lang.String</className>
            </factIdentifier>
            <expressionIdentifier>
              <name>Description</name>
              <type>OTHER</type>
            </expressionIdentifier>
          </FactMappingValue>
          <FactMappingValue>
            <factIdentifier>
              <name>Input</name>
              <className>number</className>
            </factIdentifier>
            <expressionIdentifier>
              <name>_4F584C15-5873-426F-8F88-51E2E749967B</name>
              <type>GIVEN</type>
            </expressionIdentifier>
            <rawValue class="string">17</rawValue>
          </FactMappingValue>
          <FactMappingValue>
            <factIdentifier>
              <name>Decision</name>
              <className>boolean</className>
            </factIdentifier>
            <expressionIdentifier>
              <name>_45F692B9-E45C-473F-A4E3-13510250FF19</name>
              <type>EXPECT</type>
            </expressionIdentifier>
            <rawValue class="string">false</rawValue>
          </FactMappingValue>
        </factMappingValues>
      </Scenario>
    </scesimData>
  </simulation>
  <background>
    <scesimModelDescriptor>
      <factMappings>
        <FactMapping>
          <expressionElements />
          <expressionIdentifier>
            <name>1|1</name>
            <type>GIVEN</type>
          </expressionIdentifier>
          <factIdentifier>
            <name>Empty</name>
            <className>java.lang.Void</className>
          </factIdentifier>
          <className>java.lang.Void</className>
          <factAlias>INSTANCE-1</factAlias>
          <expressionAlias>PROPERTY-1</expressionAlias>
          <columnWidth>150</columnWidth>
          <factMappingValueType>NOT_EXPRESSION</factMappingValueType>
        </FactMapping>
      </factMappings>
    </scesimModelDescriptor>
    <scesimData>
      <BackgroundData>
        <factMappingValues>
          <FactMappingValue>
            <factIdentifier>
              <name>Empty</name>
              <className>java.lang.Void</className>
            </factIdentifier>
            <expressionIdentifier>
              <name>1|1</name>
              <type>GIVEN</type>
            </expressionIdentifier>
          </FactMappingValue>
        </factMappingValues>
      </BackgroundData>
    </scesimData>
  </background>
  <settings>
    <dmnFilePath>dev-webapp/available-dmn-models/simple.dmn</dmnFilePath>
    <type>DMN</type>
    <dmnNamespace>https://kie.org/dmn/_0457D4F2-02B6-4A3D-957F-8F971A8321BC</dmnNamespace>
    <dmnName>Simple</dmnName>
    <skipFromBuild>false</skipFromBuild>
  </settings>
  <imports>
    <imports />
  </imports>
</ScenarioSimulationModel>`;
const meta = {
  title: "Misc/Simple",
  component: _src_TestScenarioEditor__WEBPACK_IMPORTED_MODULE_1__.TestScenarioEditor,
  includeStories: /^[A-Z]/
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (meta);
const marshaller = (0,_kie_tools_scesim_marshaller__WEBPACK_IMPORTED_MODULE_0__.getMarshaller)(simpleScesim);
const currentModel = marshaller.parser.parse();
const dmnModel = {
  normalizedPosixPathRelativeToTheOpenFile: "dev-webapp/available-dmn-models/simple.dmn",
  type: "dmn",
  model: (0,_kie_tools_dmn_marshaller_dist_normalization_normalize__WEBPACK_IMPORTED_MODULE_3__.normalize)((0,_kie_tools_dmn_marshaller__WEBPACK_IMPORTED_MODULE_4__.getMarshaller)(_examples_ExternalDmnModels__WEBPACK_IMPORTED_MODULE_5__.SIMPLE !== null && _examples_ExternalDmnModels__WEBPACK_IMPORTED_MODULE_5__.SIMPLE !== void 0 ? _examples_ExternalDmnModels__WEBPACK_IMPORTED_MODULE_5__.SIMPLE : "", {
    upgradeTo: "latest"
  }).parser.parse()),
  svg: ""
};
const Simple = {
  render: args => (0,_scesimEditorStoriesWrapper__WEBPACK_IMPORTED_MODULE_2__.SceSimEditorWrapper)(args),
  args: {
    model: marshaller.parser.parse(),
    openFileNormalizedPosixPathRelativeToTheWorkspaceRoot: simpleFileName,
    externalModelsByNamespace: new Map([["https://kie.org/dmn/_0457D4F2-02B6-4A3D-957F-8F971A8321BC", dmnModel]]),
    xml: marshaller.builder.build(currentModel),
    onRequestExternalModelsAvailableToInclude: () => Promise.resolve(["simple.dmn"]),
    onRequestExternalModelByPath: () => Promise.resolve(dmnModel)
  }
};
Simple.parameters = {
  ...Simple.parameters,
  docs: {
    ...((_a = Simple.parameters) === null || _a === void 0 ? void 0 : _a.docs),
    source: {
      originalSource: "{\n  render: args => SceSimEditorWrapper(args),\n  args: {\n    model: marshaller.parser.parse(),\n    openFileNormalizedPosixPathRelativeToTheWorkspaceRoot: simpleFileName,\n    externalModelsByNamespace: new Map([[\"https://kie.org/dmn/_0457D4F2-02B6-4A3D-957F-8F971A8321BC\", dmnModel]]),\n    xml: marshaller.builder.build(currentModel),\n    onRequestExternalModelsAvailableToInclude: () => Promise.resolve([\"simple.dmn\"]),\n    onRequestExternalModelByPath: () => Promise.resolve(dmnModel)\n  }\n}",
      ...((_c = (_b = Simple.parameters) === null || _b === void 0 ? void 0 : _b.docs) === null || _c === void 0 ? void 0 : _c.source)
    }
  }
};
const __namedExportsOrder = ["simpleFileName", "simpleScesim", "Simple"];

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlzYy1zaW1wbGUtU2ltcGxlLXN0b3JpZXMuMTdkYTY0ODguaWZyYW1lLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQjZEO0FBQ1E7QUFDb0M7QUFDdEI7QUFDTDtBQUNwQjtBQUNuRCxNQUFNTSxjQUFjLEdBQUcsZUFBZTtBQUN0QyxNQUFNQyxZQUFZLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MkJBK0tEO0FBQzNCLE1BQU1DLElBQUksR0FBYTtFQUNyQkMsS0FBSyxFQUFFLGFBQWE7RUFDcEJDLFNBQVMsRUFBRVQsdUVBQWtCO0VBQzdCVSxjQUFjLEVBQUU7Q0FDakI7QUFDRCxpRUFBZUgsSUFBSSxFQUFDO0FBRXBCLE1BQU1JLFVBQVUsR0FBR1osMkVBQWEsQ0FBQ08sWUFBWSxDQUFDO0FBQzlDLE1BQU1NLFlBQVksR0FBR0QsVUFBVSxDQUFDRSxNQUFNLENBQUNDLEtBQUssRUFBRTtBQUM5QyxNQUFNQyxRQUFRLEdBQUc7RUFDZkMsd0NBQXdDLEVBQUUsNENBQTRDO0VBQ3RGQyxJQUFJLEVBQUUsS0FBSztFQUNYQyxLQUFLLEVBQUVoQixpR0FBUyxDQUFDQyx3RUFBZ0IsQ0FBQ0MsK0RBQU0sYUFBTkEsK0RBQU0sY0FBTkEsK0RBQU0sR0FBSSxFQUFFLEVBQUU7SUFDOUNlLFNBQVMsRUFBRTtHQUNaLENBQUMsQ0FBQ04sTUFBTSxDQUFDQyxLQUFLLEVBQUUsQ0FBQztFQUNsQk0sR0FBRyxFQUFFO0NBQ047QUFDTSxNQUFNQyxNQUFNLEdBQVU7RUFDM0JDLE1BQU0sRUFBRUMsSUFBSSxJQUFJdEIsZ0ZBQW1CLENBQUNzQixJQUFJLENBQUM7RUFDekNBLElBQUksRUFBRTtJQUNKTCxLQUFLLEVBQUVQLFVBQVUsQ0FBQ0UsTUFBTSxDQUFDQyxLQUFLLEVBQUU7SUFDaENVLHFEQUFxRCxFQUFFbkIsY0FBYztJQUNyRW9CLHlCQUF5QixFQUFFLElBQUlDLEdBQUcsQ0FBQyxDQUFDLENBQUMsMkRBQTJELEVBQUVYLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDN0dZLEdBQUcsRUFBRWhCLFVBQVUsQ0FBQ2lCLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDakIsWUFBWSxDQUFDO0lBQzNDa0IseUNBQXlDLEVBQUVBLENBQUEsS0FBTUMsT0FBTyxDQUFDQyxPQUFPLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNoRkMsNEJBQTRCLEVBQUVBLENBQUEsS0FBTUYsT0FBTyxDQUFDQyxPQUFPLENBQUNqQixRQUFROztDQUUvRDtBQUNETSxNQUFNLENBQUNhLFVBQVUsR0FBRztFQUNsQixHQUFHYixNQUFNLENBQUNhLFVBQVU7RUFDcEJDLElBQUksRUFBRTtJQUNKLElBQUcsQ0FBQUMsRUFBQSxHQUFBZixNQUFNLENBQUNhLFVBQVUsY0FBQUUsRUFBQSx1QkFBQUEsRUFBQSxDQUFFRCxJQUFJO0lBQzFCRSxNQUFNLEVBQUU7TUFDTkMsY0FBYyxFQUFFLDJmQUEyZjtNQUMzZ0IsSUFBRyxDQUFBQyxFQUFBLElBQUFDLEVBQUEsR0FBQW5CLE1BQU0sQ0FBQ2EsVUFBVSxjQUFBTSxFQUFBLHVCQUFBQSxFQUFBLENBQUVMLElBQUksY0FBQUksRUFBQSx1QkFBQUEsRUFBQSxDQUFFRixNQUFNOzs7Q0FHdkM7QUFBQyxNQUFBSSxtQkFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL0BraWUtdG9vbHMvc2Nlc2ltLWVkaXRvci8uL3N0b3JpZXMvbWlzYy9zaW1wbGUvU2ltcGxlLnN0b3JpZXMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBMaWNlbnNlZCB0byB0aGUgQXBhY2hlIFNvZnR3YXJlIEZvdW5kYXRpb24gKEFTRikgdW5kZXIgb25lXG4gKiBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gIFNlZSB0aGUgTk9USUNFIGZpbGVcbiAqIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uXG4gKiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC4gIFRoZSBBU0YgbGljZW5zZXMgdGhpcyBmaWxlXG4gKiB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlXG4gKiBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2VcbiAqIHdpdGggdGhlIExpY2Vuc2UuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLFxuICogc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cbiAqIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXG4gKiBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGVcbiAqIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnNcbiAqIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB0eXBlIHsgTWV0YSwgU3RvcnlPYmogfSBmcm9tIFwiQHN0b3J5Ym9vay9yZWFjdFwiO1xuaW1wb3J0IHsgZ2V0TWFyc2hhbGxlciB9IGZyb20gXCJAa2llLXRvb2xzL3NjZXNpbS1tYXJzaGFsbGVyXCI7XG5pbXBvcnQgeyBUZXN0U2NlbmFyaW9FZGl0b3IgfSBmcm9tIFwiLi4vLi4vLi4vc3JjL1Rlc3RTY2VuYXJpb0VkaXRvclwiO1xuaW1wb3J0IHsgU2NlU2ltRWRpdG9yV3JhcHBlciwgU3Rvcnlib29rVGVzdFNjZW5hcmlvRWRpdG9yUHJvcHMgfSBmcm9tIFwiLi4vLi4vc2Nlc2ltRWRpdG9yU3Rvcmllc1dyYXBwZXJcIjtcbmltcG9ydCB7IG5vcm1hbGl6ZSB9IGZyb20gXCJAa2llLXRvb2xzL2Rtbi1tYXJzaGFsbGVyL2Rpc3Qvbm9ybWFsaXphdGlvbi9ub3JtYWxpemVcIjtcbmltcG9ydCB7IGdldE1hcnNoYWxsZXIgYXMgZ2V0RG1uTWFyc2hhbGxlciB9IGZyb20gXCJAa2llLXRvb2xzL2Rtbi1tYXJzaGFsbGVyXCI7XG5pbXBvcnQgeyBTSU1QTEUgfSBmcm9tIFwiLi4vLi4vZXhhbXBsZXMvRXh0ZXJuYWxEbW5Nb2RlbHNcIjtcbmV4cG9ydCBjb25zdCBzaW1wbGVGaWxlTmFtZSA9IFwic2ltcGxlLnNjZXNpbVwiO1xuZXhwb3J0IGNvbnN0IHNpbXBsZVNjZXNpbSA9IGA8P3htbCB2ZXJzaW9uPVwiMS4wXCIgZW5jb2Rpbmc9XCJVVEYtOFwiID8+XG48U2NlbmFyaW9TaW11bGF0aW9uTW9kZWwgeG1sbnM9XCJodHRwczovL2tpZS5vcmcvc2Nlc2ltLzEuOFwiIHZlcnNpb249XCIxLjhcIj5cbiAgPHNpbXVsYXRpb24+XG4gICAgPHNjZXNpbU1vZGVsRGVzY3JpcHRvcj5cbiAgICAgIDxmYWN0TWFwcGluZ3M+XG4gICAgICAgIDxGYWN0TWFwcGluZz5cbiAgICAgICAgICA8ZXhwcmVzc2lvbkVsZW1lbnRzIC8+XG4gICAgICAgICAgPGV4cHJlc3Npb25JZGVudGlmaWVyPlxuICAgICAgICAgICAgPG5hbWU+SW5kZXg8L25hbWU+XG4gICAgICAgICAgICA8dHlwZT5PVEhFUjwvdHlwZT5cbiAgICAgICAgICA8L2V4cHJlc3Npb25JZGVudGlmaWVyPlxuICAgICAgICAgIDxmYWN0SWRlbnRpZmllcj5cbiAgICAgICAgICAgIDxuYW1lPiM8L25hbWU+XG4gICAgICAgICAgICA8Y2xhc3NOYW1lPmphdmEubGFuZy5JbnRlZ2VyPC9jbGFzc05hbWU+XG4gICAgICAgICAgPC9mYWN0SWRlbnRpZmllcj5cbiAgICAgICAgICA8Y2xhc3NOYW1lPmphdmEubGFuZy5JbnRlZ2VyPC9jbGFzc05hbWU+XG4gICAgICAgICAgPGZhY3RBbGlhcz4jPC9mYWN0QWxpYXM+XG4gICAgICAgICAgPGNvbHVtbldpZHRoPjcwPC9jb2x1bW5XaWR0aD5cbiAgICAgICAgICA8ZmFjdE1hcHBpbmdWYWx1ZVR5cGU+Tk9UX0VYUFJFU1NJT048L2ZhY3RNYXBwaW5nVmFsdWVUeXBlPlxuICAgICAgICA8L0ZhY3RNYXBwaW5nPlxuICAgICAgICA8RmFjdE1hcHBpbmc+XG4gICAgICAgICAgPGV4cHJlc3Npb25FbGVtZW50cyAvPlxuICAgICAgICAgIDxleHByZXNzaW9uSWRlbnRpZmllcj5cbiAgICAgICAgICAgIDxuYW1lPkRlc2NyaXB0aW9uPC9uYW1lPlxuICAgICAgICAgICAgPHR5cGU+T1RIRVI8L3R5cGU+XG4gICAgICAgICAgPC9leHByZXNzaW9uSWRlbnRpZmllcj5cbiAgICAgICAgICA8ZmFjdElkZW50aWZpZXI+XG4gICAgICAgICAgICA8bmFtZT5TY2VuYXJpbyBkZXNjcmlwdGlvbjwvbmFtZT5cbiAgICAgICAgICAgIDxjbGFzc05hbWU+amF2YS5sYW5nLlN0cmluZzwvY2xhc3NOYW1lPlxuICAgICAgICAgIDwvZmFjdElkZW50aWZpZXI+XG4gICAgICAgICAgPGNsYXNzTmFtZT5qYXZhLmxhbmcuU3RyaW5nPC9jbGFzc05hbWU+XG4gICAgICAgICAgPGZhY3RBbGlhcz5TY2VuYXJpbyBkZXNjcmlwdGlvbjwvZmFjdEFsaWFzPlxuICAgICAgICAgIDxjb2x1bW5XaWR0aD4zMDA8L2NvbHVtbldpZHRoPlxuICAgICAgICAgIDxmYWN0TWFwcGluZ1ZhbHVlVHlwZT5OT1RfRVhQUkVTU0lPTjwvZmFjdE1hcHBpbmdWYWx1ZVR5cGU+XG4gICAgICAgIDwvRmFjdE1hcHBpbmc+XG4gICAgICAgIDxGYWN0TWFwcGluZz5cbiAgICAgICAgICA8ZXhwcmVzc2lvbkVsZW1lbnRzPlxuICAgICAgICAgICAgPEV4cHJlc3Npb25FbGVtZW50PlxuICAgICAgICAgICAgICA8c3RlcD5JbnB1dDwvc3RlcD5cbiAgICAgICAgICAgIDwvRXhwcmVzc2lvbkVsZW1lbnQ+XG4gICAgICAgICAgPC9leHByZXNzaW9uRWxlbWVudHM+XG4gICAgICAgICAgPGV4cHJlc3Npb25JZGVudGlmaWVyPlxuICAgICAgICAgICAgPG5hbWU+XzRGNTg0QzE1LTU4NzMtNDI2Ri04Rjg4LTUxRTJFNzQ5OTY3QjwvbmFtZT5cbiAgICAgICAgICAgIDx0eXBlPkdJVkVOPC90eXBlPlxuICAgICAgICAgIDwvZXhwcmVzc2lvbklkZW50aWZpZXI+XG4gICAgICAgICAgPGZhY3RJZGVudGlmaWVyPlxuICAgICAgICAgICAgPG5hbWU+SW5wdXQ8L25hbWU+XG4gICAgICAgICAgICA8Y2xhc3NOYW1lPm51bWJlcjwvY2xhc3NOYW1lPlxuICAgICAgICAgIDwvZmFjdElkZW50aWZpZXI+XG4gICAgICAgICAgPGNsYXNzTmFtZT5udW1iZXI8L2NsYXNzTmFtZT5cbiAgICAgICAgICA8ZmFjdEFsaWFzPklucHV0PC9mYWN0QWxpYXM+XG4gICAgICAgICAgPGV4cHJlc3Npb25BbGlhcz52YWx1ZTwvZXhwcmVzc2lvbkFsaWFzPlxuICAgICAgICAgIDxjb2x1bW5XaWR0aD4xMDA8L2NvbHVtbldpZHRoPlxuICAgICAgICAgIDxmYWN0TWFwcGluZ1ZhbHVlVHlwZT5OT1RfRVhQUkVTU0lPTjwvZmFjdE1hcHBpbmdWYWx1ZVR5cGU+XG4gICAgICAgIDwvRmFjdE1hcHBpbmc+XG4gICAgICAgIDxGYWN0TWFwcGluZz5cbiAgICAgICAgICA8ZXhwcmVzc2lvbkVsZW1lbnRzPlxuICAgICAgICAgICAgPEV4cHJlc3Npb25FbGVtZW50PlxuICAgICAgICAgICAgICA8c3RlcD5EZWNpc2lvbjwvc3RlcD5cbiAgICAgICAgICAgIDwvRXhwcmVzc2lvbkVsZW1lbnQ+XG4gICAgICAgICAgPC9leHByZXNzaW9uRWxlbWVudHM+XG4gICAgICAgICAgPGV4cHJlc3Npb25JZGVudGlmaWVyPlxuICAgICAgICAgICAgPG5hbWU+XzQ1RjY5MkI5LUU0NUMtNDczRi1BNEUzLTEzNTEwMjUwRkYxOTwvbmFtZT5cbiAgICAgICAgICAgIDx0eXBlPkVYUEVDVDwvdHlwZT5cbiAgICAgICAgICA8L2V4cHJlc3Npb25JZGVudGlmaWVyPlxuICAgICAgICAgIDxmYWN0SWRlbnRpZmllcj5cbiAgICAgICAgICAgIDxuYW1lPkRlY2lzaW9uPC9uYW1lPlxuICAgICAgICAgICAgPGNsYXNzTmFtZT5ib29sZWFuPC9jbGFzc05hbWU+XG4gICAgICAgICAgPC9mYWN0SWRlbnRpZmllcj5cbiAgICAgICAgICA8Y2xhc3NOYW1lPmJvb2xlYW48L2NsYXNzTmFtZT5cbiAgICAgICAgICA8ZmFjdEFsaWFzPkRlY2lzaW9uPC9mYWN0QWxpYXM+XG4gICAgICAgICAgPGV4cHJlc3Npb25BbGlhcz52YWx1ZTwvZXhwcmVzc2lvbkFsaWFzPlxuICAgICAgICAgIDxjb2x1bW5XaWR0aD4xMDA8L2NvbHVtbldpZHRoPlxuICAgICAgICAgIDxmYWN0TWFwcGluZ1ZhbHVlVHlwZT5OT1RfRVhQUkVTU0lPTjwvZmFjdE1hcHBpbmdWYWx1ZVR5cGU+XG4gICAgICAgIDwvRmFjdE1hcHBpbmc+XG4gICAgICA8L2ZhY3RNYXBwaW5ncz5cbiAgICA8L3NjZXNpbU1vZGVsRGVzY3JpcHRvcj5cbiAgICA8c2Nlc2ltRGF0YT5cbiAgICAgIDxTY2VuYXJpbz5cbiAgICAgICAgPGZhY3RNYXBwaW5nVmFsdWVzPlxuICAgICAgICAgIDxGYWN0TWFwcGluZ1ZhbHVlPlxuICAgICAgICAgICAgPGZhY3RJZGVudGlmaWVyPlxuICAgICAgICAgICAgICA8bmFtZT4jPC9uYW1lPlxuICAgICAgICAgICAgICA8Y2xhc3NOYW1lPmphdmEubGFuZy5JbnRlZ2VyPC9jbGFzc05hbWU+XG4gICAgICAgICAgICA8L2ZhY3RJZGVudGlmaWVyPlxuICAgICAgICAgICAgPGV4cHJlc3Npb25JZGVudGlmaWVyPlxuICAgICAgICAgICAgICA8bmFtZT5JbmRleDwvbmFtZT5cbiAgICAgICAgICAgICAgPHR5cGU+T1RIRVI8L3R5cGU+XG4gICAgICAgICAgICA8L2V4cHJlc3Npb25JZGVudGlmaWVyPlxuICAgICAgICAgICAgPHJhd1ZhbHVlIGNsYXNzPVwic3RyaW5nXCI+MTwvcmF3VmFsdWU+XG4gICAgICAgICAgPC9GYWN0TWFwcGluZ1ZhbHVlPlxuICAgICAgICAgIDxGYWN0TWFwcGluZ1ZhbHVlPlxuICAgICAgICAgICAgPGZhY3RJZGVudGlmaWVyPlxuICAgICAgICAgICAgICA8bmFtZT5TY2VuYXJpbyBkZXNjcmlwdGlvbjwvbmFtZT5cbiAgICAgICAgICAgICAgPGNsYXNzTmFtZT5qYXZhLmxhbmcuU3RyaW5nPC9jbGFzc05hbWU+XG4gICAgICAgICAgICA8L2ZhY3RJZGVudGlmaWVyPlxuICAgICAgICAgICAgPGV4cHJlc3Npb25JZGVudGlmaWVyPlxuICAgICAgICAgICAgICA8bmFtZT5EZXNjcmlwdGlvbjwvbmFtZT5cbiAgICAgICAgICAgICAgPHR5cGU+T1RIRVI8L3R5cGU+XG4gICAgICAgICAgICA8L2V4cHJlc3Npb25JZGVudGlmaWVyPlxuICAgICAgICAgIDwvRmFjdE1hcHBpbmdWYWx1ZT5cbiAgICAgICAgICA8RmFjdE1hcHBpbmdWYWx1ZT5cbiAgICAgICAgICAgIDxmYWN0SWRlbnRpZmllcj5cbiAgICAgICAgICAgICAgPG5hbWU+SW5wdXQ8L25hbWU+XG4gICAgICAgICAgICAgIDxjbGFzc05hbWU+bnVtYmVyPC9jbGFzc05hbWU+XG4gICAgICAgICAgICA8L2ZhY3RJZGVudGlmaWVyPlxuICAgICAgICAgICAgPGV4cHJlc3Npb25JZGVudGlmaWVyPlxuICAgICAgICAgICAgICA8bmFtZT5fNEY1ODRDMTUtNTg3My00MjZGLThGODgtNTFFMkU3NDk5NjdCPC9uYW1lPlxuICAgICAgICAgICAgICA8dHlwZT5HSVZFTjwvdHlwZT5cbiAgICAgICAgICAgIDwvZXhwcmVzc2lvbklkZW50aWZpZXI+XG4gICAgICAgICAgICA8cmF3VmFsdWUgY2xhc3M9XCJzdHJpbmdcIj4xNzwvcmF3VmFsdWU+XG4gICAgICAgICAgPC9GYWN0TWFwcGluZ1ZhbHVlPlxuICAgICAgICAgIDxGYWN0TWFwcGluZ1ZhbHVlPlxuICAgICAgICAgICAgPGZhY3RJZGVudGlmaWVyPlxuICAgICAgICAgICAgICA8bmFtZT5EZWNpc2lvbjwvbmFtZT5cbiAgICAgICAgICAgICAgPGNsYXNzTmFtZT5ib29sZWFuPC9jbGFzc05hbWU+XG4gICAgICAgICAgICA8L2ZhY3RJZGVudGlmaWVyPlxuICAgICAgICAgICAgPGV4cHJlc3Npb25JZGVudGlmaWVyPlxuICAgICAgICAgICAgICA8bmFtZT5fNDVGNjkyQjktRTQ1Qy00NzNGLUE0RTMtMTM1MTAyNTBGRjE5PC9uYW1lPlxuICAgICAgICAgICAgICA8dHlwZT5FWFBFQ1Q8L3R5cGU+XG4gICAgICAgICAgICA8L2V4cHJlc3Npb25JZGVudGlmaWVyPlxuICAgICAgICAgICAgPHJhd1ZhbHVlIGNsYXNzPVwic3RyaW5nXCI+ZmFsc2U8L3Jhd1ZhbHVlPlxuICAgICAgICAgIDwvRmFjdE1hcHBpbmdWYWx1ZT5cbiAgICAgICAgPC9mYWN0TWFwcGluZ1ZhbHVlcz5cbiAgICAgIDwvU2NlbmFyaW8+XG4gICAgPC9zY2VzaW1EYXRhPlxuICA8L3NpbXVsYXRpb24+XG4gIDxiYWNrZ3JvdW5kPlxuICAgIDxzY2VzaW1Nb2RlbERlc2NyaXB0b3I+XG4gICAgICA8ZmFjdE1hcHBpbmdzPlxuICAgICAgICA8RmFjdE1hcHBpbmc+XG4gICAgICAgICAgPGV4cHJlc3Npb25FbGVtZW50cyAvPlxuICAgICAgICAgIDxleHByZXNzaW9uSWRlbnRpZmllcj5cbiAgICAgICAgICAgIDxuYW1lPjF8MTwvbmFtZT5cbiAgICAgICAgICAgIDx0eXBlPkdJVkVOPC90eXBlPlxuICAgICAgICAgIDwvZXhwcmVzc2lvbklkZW50aWZpZXI+XG4gICAgICAgICAgPGZhY3RJZGVudGlmaWVyPlxuICAgICAgICAgICAgPG5hbWU+RW1wdHk8L25hbWU+XG4gICAgICAgICAgICA8Y2xhc3NOYW1lPmphdmEubGFuZy5Wb2lkPC9jbGFzc05hbWU+XG4gICAgICAgICAgPC9mYWN0SWRlbnRpZmllcj5cbiAgICAgICAgICA8Y2xhc3NOYW1lPmphdmEubGFuZy5Wb2lkPC9jbGFzc05hbWU+XG4gICAgICAgICAgPGZhY3RBbGlhcz5JTlNUQU5DRS0xPC9mYWN0QWxpYXM+XG4gICAgICAgICAgPGV4cHJlc3Npb25BbGlhcz5QUk9QRVJUWS0xPC9leHByZXNzaW9uQWxpYXM+XG4gICAgICAgICAgPGNvbHVtbldpZHRoPjE1MDwvY29sdW1uV2lkdGg+XG4gICAgICAgICAgPGZhY3RNYXBwaW5nVmFsdWVUeXBlPk5PVF9FWFBSRVNTSU9OPC9mYWN0TWFwcGluZ1ZhbHVlVHlwZT5cbiAgICAgICAgPC9GYWN0TWFwcGluZz5cbiAgICAgIDwvZmFjdE1hcHBpbmdzPlxuICAgIDwvc2Nlc2ltTW9kZWxEZXNjcmlwdG9yPlxuICAgIDxzY2VzaW1EYXRhPlxuICAgICAgPEJhY2tncm91bmREYXRhPlxuICAgICAgICA8ZmFjdE1hcHBpbmdWYWx1ZXM+XG4gICAgICAgICAgPEZhY3RNYXBwaW5nVmFsdWU+XG4gICAgICAgICAgICA8ZmFjdElkZW50aWZpZXI+XG4gICAgICAgICAgICAgIDxuYW1lPkVtcHR5PC9uYW1lPlxuICAgICAgICAgICAgICA8Y2xhc3NOYW1lPmphdmEubGFuZy5Wb2lkPC9jbGFzc05hbWU+XG4gICAgICAgICAgICA8L2ZhY3RJZGVudGlmaWVyPlxuICAgICAgICAgICAgPGV4cHJlc3Npb25JZGVudGlmaWVyPlxuICAgICAgICAgICAgICA8bmFtZT4xfDE8L25hbWU+XG4gICAgICAgICAgICAgIDx0eXBlPkdJVkVOPC90eXBlPlxuICAgICAgICAgICAgPC9leHByZXNzaW9uSWRlbnRpZmllcj5cbiAgICAgICAgICA8L0ZhY3RNYXBwaW5nVmFsdWU+XG4gICAgICAgIDwvZmFjdE1hcHBpbmdWYWx1ZXM+XG4gICAgICA8L0JhY2tncm91bmREYXRhPlxuICAgIDwvc2Nlc2ltRGF0YT5cbiAgPC9iYWNrZ3JvdW5kPlxuICA8c2V0dGluZ3M+XG4gICAgPGRtbkZpbGVQYXRoPmRldi13ZWJhcHAvYXZhaWxhYmxlLWRtbi1tb2RlbHMvc2ltcGxlLmRtbjwvZG1uRmlsZVBhdGg+XG4gICAgPHR5cGU+RE1OPC90eXBlPlxuICAgIDxkbW5OYW1lc3BhY2U+aHR0cHM6Ly9raWUub3JnL2Rtbi9fMDQ1N0Q0RjItMDJCNi00QTNELTk1N0YtOEY5NzFBODMyMUJDPC9kbW5OYW1lc3BhY2U+XG4gICAgPGRtbk5hbWU+U2ltcGxlPC9kbW5OYW1lPlxuICAgIDxza2lwRnJvbUJ1aWxkPmZhbHNlPC9za2lwRnJvbUJ1aWxkPlxuICA8L3NldHRpbmdzPlxuICA8aW1wb3J0cz5cbiAgICA8aW1wb3J0cyAvPlxuICA8L2ltcG9ydHM+XG48L1NjZW5hcmlvU2ltdWxhdGlvbk1vZGVsPmA7XG5jb25zdCBtZXRhOiBNZXRhPHt9PiA9IHtcbiAgdGl0bGU6IFwiTWlzYy9TaW1wbGVcIixcbiAgY29tcG9uZW50OiBUZXN0U2NlbmFyaW9FZGl0b3IsXG4gIGluY2x1ZGVTdG9yaWVzOiAvXltBLVpdL1xufTtcbmV4cG9ydCBkZWZhdWx0IG1ldGE7XG50eXBlIFN0b3J5ID0gU3RvcnlPYmo8U3Rvcnlib29rVGVzdFNjZW5hcmlvRWRpdG9yUHJvcHM+O1xuY29uc3QgbWFyc2hhbGxlciA9IGdldE1hcnNoYWxsZXIoc2ltcGxlU2Nlc2ltKTtcbmNvbnN0IGN1cnJlbnRNb2RlbCA9IG1hcnNoYWxsZXIucGFyc2VyLnBhcnNlKCk7XG5jb25zdCBkbW5Nb2RlbCA9IHtcbiAgbm9ybWFsaXplZFBvc2l4UGF0aFJlbGF0aXZlVG9UaGVPcGVuRmlsZTogXCJkZXYtd2ViYXBwL2F2YWlsYWJsZS1kbW4tbW9kZWxzL3NpbXBsZS5kbW5cIixcbiAgdHlwZTogXCJkbW5cIixcbiAgbW9kZWw6IG5vcm1hbGl6ZShnZXREbW5NYXJzaGFsbGVyKFNJTVBMRSA/PyBcIlwiLCB7XG4gICAgdXBncmFkZVRvOiBcImxhdGVzdFwiXG4gIH0pLnBhcnNlci5wYXJzZSgpKSxcbiAgc3ZnOiBcIlwiXG59O1xuZXhwb3J0IGNvbnN0IFNpbXBsZTogU3RvcnkgPSB7XG4gIHJlbmRlcjogYXJncyA9PiBTY2VTaW1FZGl0b3JXcmFwcGVyKGFyZ3MpLFxuICBhcmdzOiB7XG4gICAgbW9kZWw6IG1hcnNoYWxsZXIucGFyc2VyLnBhcnNlKCksXG4gICAgb3BlbkZpbGVOb3JtYWxpemVkUG9zaXhQYXRoUmVsYXRpdmVUb1RoZVdvcmtzcGFjZVJvb3Q6IHNpbXBsZUZpbGVOYW1lLFxuICAgIGV4dGVybmFsTW9kZWxzQnlOYW1lc3BhY2U6IG5ldyBNYXAoW1tcImh0dHBzOi8va2llLm9yZy9kbW4vXzA0NTdENEYyLTAyQjYtNEEzRC05NTdGLThGOTcxQTgzMjFCQ1wiLCBkbW5Nb2RlbF1dKSxcbiAgICB4bWw6IG1hcnNoYWxsZXIuYnVpbGRlci5idWlsZChjdXJyZW50TW9kZWwpLFxuICAgIG9uUmVxdWVzdEV4dGVybmFsTW9kZWxzQXZhaWxhYmxlVG9JbmNsdWRlOiAoKSA9PiBQcm9taXNlLnJlc29sdmUoW1wic2ltcGxlLmRtblwiXSksXG4gICAgb25SZXF1ZXN0RXh0ZXJuYWxNb2RlbEJ5UGF0aDogKCkgPT4gUHJvbWlzZS5yZXNvbHZlKGRtbk1vZGVsKVxuICB9XG59O1xuU2ltcGxlLnBhcmFtZXRlcnMgPSB7XG4gIC4uLlNpbXBsZS5wYXJhbWV0ZXJzLFxuICBkb2NzOiB7XG4gICAgLi4uU2ltcGxlLnBhcmFtZXRlcnM/LmRvY3MsXG4gICAgc291cmNlOiB7XG4gICAgICBvcmlnaW5hbFNvdXJjZTogXCJ7XFxuICByZW5kZXI6IGFyZ3MgPT4gU2NlU2ltRWRpdG9yV3JhcHBlcihhcmdzKSxcXG4gIGFyZ3M6IHtcXG4gICAgbW9kZWw6IG1hcnNoYWxsZXIucGFyc2VyLnBhcnNlKCksXFxuICAgIG9wZW5GaWxlTm9ybWFsaXplZFBvc2l4UGF0aFJlbGF0aXZlVG9UaGVXb3Jrc3BhY2VSb290OiBzaW1wbGVGaWxlTmFtZSxcXG4gICAgZXh0ZXJuYWxNb2RlbHNCeU5hbWVzcGFjZTogbmV3IE1hcChbW1xcXCJodHRwczovL2tpZS5vcmcvZG1uL18wNDU3RDRGMi0wMkI2LTRBM0QtOTU3Ri04Rjk3MUE4MzIxQkNcXFwiLCBkbW5Nb2RlbF1dKSxcXG4gICAgeG1sOiBtYXJzaGFsbGVyLmJ1aWxkZXIuYnVpbGQoY3VycmVudE1vZGVsKSxcXG4gICAgb25SZXF1ZXN0RXh0ZXJuYWxNb2RlbHNBdmFpbGFibGVUb0luY2x1ZGU6ICgpID0+IFByb21pc2UucmVzb2x2ZShbXFxcInNpbXBsZS5kbW5cXFwiXSksXFxuICAgIG9uUmVxdWVzdEV4dGVybmFsTW9kZWxCeVBhdGg6ICgpID0+IFByb21pc2UucmVzb2x2ZShkbW5Nb2RlbClcXG4gIH1cXG59XCIsXG4gICAgICAuLi5TaW1wbGUucGFyYW1ldGVycz8uZG9jcz8uc291cmNlXG4gICAgfVxuICB9XG59OyJdLCJuYW1lcyI6WyJnZXRNYXJzaGFsbGVyIiwiVGVzdFNjZW5hcmlvRWRpdG9yIiwiU2NlU2ltRWRpdG9yV3JhcHBlciIsIm5vcm1hbGl6ZSIsImdldERtbk1hcnNoYWxsZXIiLCJTSU1QTEUiLCJzaW1wbGVGaWxlTmFtZSIsInNpbXBsZVNjZXNpbSIsIm1ldGEiLCJ0aXRsZSIsImNvbXBvbmVudCIsImluY2x1ZGVTdG9yaWVzIiwibWFyc2hhbGxlciIsImN1cnJlbnRNb2RlbCIsInBhcnNlciIsInBhcnNlIiwiZG1uTW9kZWwiLCJub3JtYWxpemVkUG9zaXhQYXRoUmVsYXRpdmVUb1RoZU9wZW5GaWxlIiwidHlwZSIsIm1vZGVsIiwidXBncmFkZVRvIiwic3ZnIiwiU2ltcGxlIiwicmVuZGVyIiwiYXJncyIsIm9wZW5GaWxlTm9ybWFsaXplZFBvc2l4UGF0aFJlbGF0aXZlVG9UaGVXb3Jrc3BhY2VSb290IiwiZXh0ZXJuYWxNb2RlbHNCeU5hbWVzcGFjZSIsIk1hcCIsInhtbCIsImJ1aWxkZXIiLCJidWlsZCIsIm9uUmVxdWVzdEV4dGVybmFsTW9kZWxzQXZhaWxhYmxlVG9JbmNsdWRlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJvblJlcXVlc3RFeHRlcm5hbE1vZGVsQnlQYXRoIiwicGFyYW1ldGVycyIsImRvY3MiLCJfYSIsInNvdXJjZSIsIm9yaWdpbmFsU291cmNlIiwiX2MiLCJfYiIsIl9fbmFtZWRFeHBvcnRzT3JkZXIiXSwic291cmNlUm9vdCI6IiJ9