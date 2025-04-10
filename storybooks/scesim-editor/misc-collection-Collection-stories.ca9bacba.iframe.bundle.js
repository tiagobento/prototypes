"use strict";
(self["webpackChunk_kie_tools_scesim_editor"] = self["webpackChunk_kie_tools_scesim_editor"] || []).push([["misc-collection-Collection-stories"],{

/***/ "./stories/misc/collection/Collection.stories.tsx":
/*!********************************************************!*\
  !*** ./stories/misc/collection/Collection.stories.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Collection: () => (/* binding */ Collection),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   collectionFileName: () => (/* binding */ collectionFileName),
/* harmony export */   collectionScesim: () => (/* binding */ collectionScesim),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _kie_tools_scesim_marshaller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @kie-tools/scesim-marshaller */ "../scesim-marshaller/dist/index.js");
/* harmony import */ var _src_TestScenarioEditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../src/TestScenarioEditor */ "./src/TestScenarioEditor.tsx");
/* harmony import */ var _scesimEditorStoriesWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../scesimEditorStoriesWrapper */ "./stories/scesimEditorStoriesWrapper.tsx");
/* harmony import */ var _kie_tools_dmn_marshaller_dist_normalization_normalize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @kie-tools/dmn-marshaller/dist/normalization/normalize */ "../dmn-marshaller/dist/normalization/normalize.js");
/* harmony import */ var _kie_tools_dmn_marshaller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @kie-tools/dmn-marshaller */ "../dmn-marshaller/dist/index.js");
/* harmony import */ var _examples_ExternalDmnModels__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../examples/ExternalDmnModels */ "./stories/examples/ExternalDmnModels.ts");
var _a, _b, _c;






const collectionFileName = "collection.scesim";
const collectionScesim = `<?xml version="1.0" encoding="UTF-8" ?>
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
              <step>input</step>
            </ExpressionElement>
          </expressionElements>
          <expressionIdentifier>
            <name>_33694C8E-C795-435F-B0F0-F1101F9DE403</name>
            <type>GIVEN</type>
          </expressionIdentifier>
          <factIdentifier>
            <name>input</name>
            <className>tNumber</className>
          </factIdentifier>
          <className>java.util.List</className>
          <factAlias>input</factAlias>
          <expressionAlias>value</expressionAlias>
          <genericTypes>
            <string>tNumber</string>
          </genericTypes>
          <columnWidth>141</columnWidth>
          <factMappingValueType>NOT_EXPRESSION</factMappingValueType>
        </FactMapping>
        <FactMapping>
          <expressionElements>
            <ExpressionElement>
              <step>input2</step>
            </ExpressionElement>
            <ExpressionElement>
              <step>nums</step>
            </ExpressionElement>
          </expressionElements>
          <expressionIdentifier>
            <name>_11DBB39A-5749-420D-A007-3A0D19A66916</name>
            <type>GIVEN</type>
          </expressionIdentifier>
          <factIdentifier>
            <name>input2</name>
            <className>tComplex</className>
          </factIdentifier>
          <className>java.util.List</className>
          <factAlias>input2</factAlias>
          <expressionAlias>nums</expressionAlias>
          <genericTypes>
            <string>number</string>
          </genericTypes>
          <columnWidth>157</columnWidth>
          <factMappingValueType>NOT_EXPRESSION</factMappingValueType>
        </FactMapping>
        <FactMapping>
          <expressionElements>
            <ExpressionElement>
              <step>output</step>
            </ExpressionElement>
          </expressionElements>
          <expressionIdentifier>
            <name>_E38BFF0C-040B-464E-8C18-7BD1C7372EEA</name>
            <type>EXPECT</type>
          </expressionIdentifier>
          <factIdentifier>
            <name>output</name>
            <className>boolean</className>
          </factIdentifier>
          <className>boolean</className>
          <factAlias>output</factAlias>
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
              <name>input</name>
              <className>tNumber</className>
            </factIdentifier>
            <expressionIdentifier>
              <name>_33694C8E-C795-435F-B0F0-F1101F9DE403</name>
              <type>GIVEN</type>
            </expressionIdentifier>
            <rawValue class="string">[10,20,30]</rawValue>
          </FactMappingValue>
          <FactMappingValue>
            <factIdentifier>
              <name>input2</name>
              <className>tComplex</className>
            </factIdentifier>
            <expressionIdentifier>
              <name>_11DBB39A-5749-420D-A007-3A0D19A66916</name>
              <type>GIVEN</type>
            </expressionIdentifier>
            <rawValue class="string">[40,50,60]</rawValue>
          </FactMappingValue>
          <FactMappingValue>
            <factIdentifier>
              <name>output</name>
              <className>boolean</className>
            </factIdentifier>
            <expressionIdentifier>
              <name>_E38BFF0C-040B-464E-8C18-7BD1C7372EEA</name>
              <type>EXPECT</type>
            </expressionIdentifier>
            <rawValue class="string">true</rawValue>
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
    <dmnFilePath>dev-webapp/available-dmn-models/collection.dmn</dmnFilePath>
    <type>DMN</type>
    <dmnNamespace>https://kie.apache.org/dmn/_D1C37750-2078-4CB7-AF77-850947718867</dmnNamespace>
    <dmnName>Collection</dmnName>
    <skipFromBuild>false</skipFromBuild>
  </settings>
  <imports>
    <imports />
  </imports>
</ScenarioSimulationModel>
`;
const meta = {
  title: "Misc/Collection",
  component: _src_TestScenarioEditor__WEBPACK_IMPORTED_MODULE_1__.TestScenarioEditor,
  includeStories: /^[A-Z]/
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (meta);
const marshaller = (0,_kie_tools_scesim_marshaller__WEBPACK_IMPORTED_MODULE_0__.getMarshaller)(collectionScesim);
const currentModel = marshaller.parser.parse();
const dmnModel = {
  normalizedPosixPathRelativeToTheOpenFile: "dev-webapp/available-dmn-models/collection.dmn",
  type: "dmn",
  model: (0,_kie_tools_dmn_marshaller_dist_normalization_normalize__WEBPACK_IMPORTED_MODULE_3__.normalize)((0,_kie_tools_dmn_marshaller__WEBPACK_IMPORTED_MODULE_4__.getMarshaller)(_examples_ExternalDmnModels__WEBPACK_IMPORTED_MODULE_5__.COLLECTION !== null && _examples_ExternalDmnModels__WEBPACK_IMPORTED_MODULE_5__.COLLECTION !== void 0 ? _examples_ExternalDmnModels__WEBPACK_IMPORTED_MODULE_5__.COLLECTION : "", {
    upgradeTo: "latest"
  }).parser.parse()),
  svg: ""
};
const Collection = {
  render: args => (0,_scesimEditorStoriesWrapper__WEBPACK_IMPORTED_MODULE_2__.SceSimEditorWrapper)(args),
  args: {
    model: marshaller.parser.parse(),
    openFileNormalizedPosixPathRelativeToTheWorkspaceRoot: collectionFileName,
    externalModelsByNamespace: new Map([["https://kie.apache.org/dmn/_D1C37750-2078-4CB7-AF77-850947718867", dmnModel]]),
    xml: marshaller.builder.build(currentModel),
    onRequestExternalModelsAvailableToInclude: () => Promise.resolve(["collection.dmn"]),
    onRequestExternalModelByPath: () => Promise.resolve(dmnModel)
  }
};
Collection.parameters = {
  ...Collection.parameters,
  docs: {
    ...((_a = Collection.parameters) === null || _a === void 0 ? void 0 : _a.docs),
    source: {
      originalSource: "{\n  render: args => SceSimEditorWrapper(args),\n  args: {\n    model: marshaller.parser.parse(),\n    openFileNormalizedPosixPathRelativeToTheWorkspaceRoot: collectionFileName,\n    externalModelsByNamespace: new Map([[\"https://kie.apache.org/dmn/_D1C37750-2078-4CB7-AF77-850947718867\", dmnModel]]),\n    xml: marshaller.builder.build(currentModel),\n    onRequestExternalModelsAvailableToInclude: () => Promise.resolve([\"collection.dmn\"]),\n    onRequestExternalModelByPath: () => Promise.resolve(dmnModel)\n  }\n}",
      ...((_c = (_b = Collection.parameters) === null || _b === void 0 ? void 0 : _b.docs) === null || _c === void 0 ? void 0 : _c.source)
    }
  }
};
const __namedExportsOrder = ["collectionFileName", "collectionScesim", "Collection"];

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlzYy1jb2xsZWN0aW9uLUNvbGxlY3Rpb24tc3Rvcmllcy5jYTliYWNiYS5pZnJhbWUuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CNkQ7QUFDUTtBQUNvQztBQUN0QjtBQUNMO0FBQ2hCO0FBQ3ZELE1BQU1NLGtCQUFrQixHQUFHLG1CQUFtQjtBQUM5QyxNQUFNQyxnQkFBZ0IsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBd04vQjtBQUNELE1BQU1DLElBQUksR0FBYTtFQUNyQkMsS0FBSyxFQUFFLGlCQUFpQjtFQUN4QkMsU0FBUyxFQUFFVCx1RUFBa0I7RUFDN0JVLGNBQWMsRUFBRTtDQUNqQjtBQUNELGlFQUFlSCxJQUFJLEVBQUM7QUFFcEIsTUFBTUksVUFBVSxHQUFHWiwyRUFBYSxDQUFDTyxnQkFBZ0IsQ0FBQztBQUNsRCxNQUFNTSxZQUFZLEdBQUdELFVBQVUsQ0FBQ0UsTUFBTSxDQUFDQyxLQUFLLEVBQUU7QUFDOUMsTUFBTUMsUUFBUSxHQUFHO0VBQ2ZDLHdDQUF3QyxFQUFFLGdEQUFnRDtFQUMxRkMsSUFBSSxFQUFFLEtBQUs7RUFDWEMsS0FBSyxFQUFFaEIsaUdBQVMsQ0FBQ0Msd0VBQWdCLENBQUNDLG1FQUFVLGFBQVZBLG1FQUFVLGNBQVZBLG1FQUFVLEdBQUksRUFBRSxFQUFFO0lBQ2xEZSxTQUFTLEVBQUU7R0FDWixDQUFDLENBQUNOLE1BQU0sQ0FBQ0MsS0FBSyxFQUFFLENBQUM7RUFDbEJNLEdBQUcsRUFBRTtDQUNOO0FBQ00sTUFBTUMsVUFBVSxHQUFVO0VBQy9CQyxNQUFNLEVBQUVDLElBQUksSUFBSXRCLGdGQUFtQixDQUFDc0IsSUFBSSxDQUFDO0VBQ3pDQSxJQUFJLEVBQUU7SUFDSkwsS0FBSyxFQUFFUCxVQUFVLENBQUNFLE1BQU0sQ0FBQ0MsS0FBSyxFQUFFO0lBQ2hDVSxxREFBcUQsRUFBRW5CLGtCQUFrQjtJQUN6RW9CLHlCQUF5QixFQUFFLElBQUlDLEdBQUcsQ0FBQyxDQUFDLENBQUMsa0VBQWtFLEVBQUVYLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDcEhZLEdBQUcsRUFBRWhCLFVBQVUsQ0FBQ2lCLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDakIsWUFBWSxDQUFDO0lBQzNDa0IseUNBQXlDLEVBQUVBLENBQUEsS0FBTUMsT0FBTyxDQUFDQyxPQUFPLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3BGQyw0QkFBNEIsRUFBRUEsQ0FBQSxLQUFNRixPQUFPLENBQUNDLE9BQU8sQ0FBQ2pCLFFBQVE7O0NBRS9EO0FBQ0RNLFVBQVUsQ0FBQ2EsVUFBVSxHQUFHO0VBQ3RCLEdBQUdiLFVBQVUsQ0FBQ2EsVUFBVTtFQUN4QkMsSUFBSSxFQUFFO0lBQ0osSUFBRyxDQUFBQyxFQUFBLEdBQUFmLFVBQVUsQ0FBQ2EsVUFBVSxjQUFBRSxFQUFBLHVCQUFBQSxFQUFBLENBQUVELElBQUk7SUFDOUJFLE1BQU0sRUFBRTtNQUNOQyxjQUFjLEVBQUUsMGdCQUEwZ0I7TUFDMWhCLElBQUcsQ0FBQUMsRUFBQSxJQUFBQyxFQUFBLEdBQUFuQixVQUFVLENBQUNhLFVBQVUsY0FBQU0sRUFBQSx1QkFBQUEsRUFBQSxDQUFFTCxJQUFJLGNBQUFJLEVBQUEsdUJBQUFBLEVBQUEsQ0FBRUYsTUFBTTs7O0NBRzNDO0FBQUMsTUFBQUksbUJBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Aa2llLXRvb2xzL3NjZXNpbS1lZGl0b3IvLi9zdG9yaWVzL21pc2MvY29sbGVjdGlvbi9Db2xsZWN0aW9uLnN0b3JpZXMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBMaWNlbnNlZCB0byB0aGUgQXBhY2hlIFNvZnR3YXJlIEZvdW5kYXRpb24gKEFTRikgdW5kZXIgb25lXG4gKiBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gIFNlZSB0aGUgTk9USUNFIGZpbGVcbiAqIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uXG4gKiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC4gIFRoZSBBU0YgbGljZW5zZXMgdGhpcyBmaWxlXG4gKiB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlXG4gKiBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2VcbiAqIHdpdGggdGhlIExpY2Vuc2UuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLFxuICogc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cbiAqIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXG4gKiBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGVcbiAqIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnNcbiAqIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB0eXBlIHsgTWV0YSwgU3RvcnlPYmogfSBmcm9tIFwiQHN0b3J5Ym9vay9yZWFjdFwiO1xuaW1wb3J0IHsgZ2V0TWFyc2hhbGxlciB9IGZyb20gXCJAa2llLXRvb2xzL3NjZXNpbS1tYXJzaGFsbGVyXCI7XG5pbXBvcnQgeyBUZXN0U2NlbmFyaW9FZGl0b3IgfSBmcm9tIFwiLi4vLi4vLi4vc3JjL1Rlc3RTY2VuYXJpb0VkaXRvclwiO1xuaW1wb3J0IHsgU2NlU2ltRWRpdG9yV3JhcHBlciwgU3Rvcnlib29rVGVzdFNjZW5hcmlvRWRpdG9yUHJvcHMgfSBmcm9tIFwiLi4vLi4vc2Nlc2ltRWRpdG9yU3Rvcmllc1dyYXBwZXJcIjtcbmltcG9ydCB7IG5vcm1hbGl6ZSB9IGZyb20gXCJAa2llLXRvb2xzL2Rtbi1tYXJzaGFsbGVyL2Rpc3Qvbm9ybWFsaXphdGlvbi9ub3JtYWxpemVcIjtcbmltcG9ydCB7IGdldE1hcnNoYWxsZXIgYXMgZ2V0RG1uTWFyc2hhbGxlciB9IGZyb20gXCJAa2llLXRvb2xzL2Rtbi1tYXJzaGFsbGVyXCI7XG5pbXBvcnQgeyBDT0xMRUNUSU9OIH0gZnJvbSBcIi4uLy4uL2V4YW1wbGVzL0V4dGVybmFsRG1uTW9kZWxzXCI7XG5leHBvcnQgY29uc3QgY29sbGVjdGlvbkZpbGVOYW1lID0gXCJjb2xsZWN0aW9uLnNjZXNpbVwiO1xuZXhwb3J0IGNvbnN0IGNvbGxlY3Rpb25TY2VzaW0gPSBgPD94bWwgdmVyc2lvbj1cIjEuMFwiIGVuY29kaW5nPVwiVVRGLThcIiA/PlxuPFNjZW5hcmlvU2ltdWxhdGlvbk1vZGVsIHhtbG5zPVwiaHR0cHM6Ly9raWUub3JnL3NjZXNpbS8xLjhcIiB2ZXJzaW9uPVwiMS44XCI+XG4gIDxzaW11bGF0aW9uPlxuICAgIDxzY2VzaW1Nb2RlbERlc2NyaXB0b3I+XG4gICAgICA8ZmFjdE1hcHBpbmdzPlxuICAgICAgICA8RmFjdE1hcHBpbmc+XG4gICAgICAgICAgPGV4cHJlc3Npb25FbGVtZW50cyAvPlxuICAgICAgICAgIDxleHByZXNzaW9uSWRlbnRpZmllcj5cbiAgICAgICAgICAgIDxuYW1lPkluZGV4PC9uYW1lPlxuICAgICAgICAgICAgPHR5cGU+T1RIRVI8L3R5cGU+XG4gICAgICAgICAgPC9leHByZXNzaW9uSWRlbnRpZmllcj5cbiAgICAgICAgICA8ZmFjdElkZW50aWZpZXI+XG4gICAgICAgICAgICA8bmFtZT4jPC9uYW1lPlxuICAgICAgICAgICAgPGNsYXNzTmFtZT5qYXZhLmxhbmcuSW50ZWdlcjwvY2xhc3NOYW1lPlxuICAgICAgICAgIDwvZmFjdElkZW50aWZpZXI+XG4gICAgICAgICAgPGNsYXNzTmFtZT5qYXZhLmxhbmcuSW50ZWdlcjwvY2xhc3NOYW1lPlxuICAgICAgICAgIDxmYWN0QWxpYXM+IzwvZmFjdEFsaWFzPlxuICAgICAgICAgIDxjb2x1bW5XaWR0aD43MDwvY29sdW1uV2lkdGg+XG4gICAgICAgICAgPGZhY3RNYXBwaW5nVmFsdWVUeXBlPk5PVF9FWFBSRVNTSU9OPC9mYWN0TWFwcGluZ1ZhbHVlVHlwZT5cbiAgICAgICAgPC9GYWN0TWFwcGluZz5cbiAgICAgICAgPEZhY3RNYXBwaW5nPlxuICAgICAgICAgIDxleHByZXNzaW9uRWxlbWVudHMgLz5cbiAgICAgICAgICA8ZXhwcmVzc2lvbklkZW50aWZpZXI+XG4gICAgICAgICAgICA8bmFtZT5EZXNjcmlwdGlvbjwvbmFtZT5cbiAgICAgICAgICAgIDx0eXBlPk9USEVSPC90eXBlPlxuICAgICAgICAgIDwvZXhwcmVzc2lvbklkZW50aWZpZXI+XG4gICAgICAgICAgPGZhY3RJZGVudGlmaWVyPlxuICAgICAgICAgICAgPG5hbWU+U2NlbmFyaW8gZGVzY3JpcHRpb248L25hbWU+XG4gICAgICAgICAgICA8Y2xhc3NOYW1lPmphdmEubGFuZy5TdHJpbmc8L2NsYXNzTmFtZT5cbiAgICAgICAgICA8L2ZhY3RJZGVudGlmaWVyPlxuICAgICAgICAgIDxjbGFzc05hbWU+amF2YS5sYW5nLlN0cmluZzwvY2xhc3NOYW1lPlxuICAgICAgICAgIDxmYWN0QWxpYXM+U2NlbmFyaW8gZGVzY3JpcHRpb248L2ZhY3RBbGlhcz5cbiAgICAgICAgICA8Y29sdW1uV2lkdGg+MzAwPC9jb2x1bW5XaWR0aD5cbiAgICAgICAgICA8ZmFjdE1hcHBpbmdWYWx1ZVR5cGU+Tk9UX0VYUFJFU1NJT048L2ZhY3RNYXBwaW5nVmFsdWVUeXBlPlxuICAgICAgICA8L0ZhY3RNYXBwaW5nPlxuICAgICAgICA8RmFjdE1hcHBpbmc+XG4gICAgICAgICAgPGV4cHJlc3Npb25FbGVtZW50cz5cbiAgICAgICAgICAgIDxFeHByZXNzaW9uRWxlbWVudD5cbiAgICAgICAgICAgICAgPHN0ZXA+aW5wdXQ8L3N0ZXA+XG4gICAgICAgICAgICA8L0V4cHJlc3Npb25FbGVtZW50PlxuICAgICAgICAgIDwvZXhwcmVzc2lvbkVsZW1lbnRzPlxuICAgICAgICAgIDxleHByZXNzaW9uSWRlbnRpZmllcj5cbiAgICAgICAgICAgIDxuYW1lPl8zMzY5NEM4RS1DNzk1LTQzNUYtQjBGMC1GMTEwMUY5REU0MDM8L25hbWU+XG4gICAgICAgICAgICA8dHlwZT5HSVZFTjwvdHlwZT5cbiAgICAgICAgICA8L2V4cHJlc3Npb25JZGVudGlmaWVyPlxuICAgICAgICAgIDxmYWN0SWRlbnRpZmllcj5cbiAgICAgICAgICAgIDxuYW1lPmlucHV0PC9uYW1lPlxuICAgICAgICAgICAgPGNsYXNzTmFtZT50TnVtYmVyPC9jbGFzc05hbWU+XG4gICAgICAgICAgPC9mYWN0SWRlbnRpZmllcj5cbiAgICAgICAgICA8Y2xhc3NOYW1lPmphdmEudXRpbC5MaXN0PC9jbGFzc05hbWU+XG4gICAgICAgICAgPGZhY3RBbGlhcz5pbnB1dDwvZmFjdEFsaWFzPlxuICAgICAgICAgIDxleHByZXNzaW9uQWxpYXM+dmFsdWU8L2V4cHJlc3Npb25BbGlhcz5cbiAgICAgICAgICA8Z2VuZXJpY1R5cGVzPlxuICAgICAgICAgICAgPHN0cmluZz50TnVtYmVyPC9zdHJpbmc+XG4gICAgICAgICAgPC9nZW5lcmljVHlwZXM+XG4gICAgICAgICAgPGNvbHVtbldpZHRoPjE0MTwvY29sdW1uV2lkdGg+XG4gICAgICAgICAgPGZhY3RNYXBwaW5nVmFsdWVUeXBlPk5PVF9FWFBSRVNTSU9OPC9mYWN0TWFwcGluZ1ZhbHVlVHlwZT5cbiAgICAgICAgPC9GYWN0TWFwcGluZz5cbiAgICAgICAgPEZhY3RNYXBwaW5nPlxuICAgICAgICAgIDxleHByZXNzaW9uRWxlbWVudHM+XG4gICAgICAgICAgICA8RXhwcmVzc2lvbkVsZW1lbnQ+XG4gICAgICAgICAgICAgIDxzdGVwPmlucHV0Mjwvc3RlcD5cbiAgICAgICAgICAgIDwvRXhwcmVzc2lvbkVsZW1lbnQ+XG4gICAgICAgICAgICA8RXhwcmVzc2lvbkVsZW1lbnQ+XG4gICAgICAgICAgICAgIDxzdGVwPm51bXM8L3N0ZXA+XG4gICAgICAgICAgICA8L0V4cHJlc3Npb25FbGVtZW50PlxuICAgICAgICAgIDwvZXhwcmVzc2lvbkVsZW1lbnRzPlxuICAgICAgICAgIDxleHByZXNzaW9uSWRlbnRpZmllcj5cbiAgICAgICAgICAgIDxuYW1lPl8xMURCQjM5QS01NzQ5LTQyMEQtQTAwNy0zQTBEMTlBNjY5MTY8L25hbWU+XG4gICAgICAgICAgICA8dHlwZT5HSVZFTjwvdHlwZT5cbiAgICAgICAgICA8L2V4cHJlc3Npb25JZGVudGlmaWVyPlxuICAgICAgICAgIDxmYWN0SWRlbnRpZmllcj5cbiAgICAgICAgICAgIDxuYW1lPmlucHV0MjwvbmFtZT5cbiAgICAgICAgICAgIDxjbGFzc05hbWU+dENvbXBsZXg8L2NsYXNzTmFtZT5cbiAgICAgICAgICA8L2ZhY3RJZGVudGlmaWVyPlxuICAgICAgICAgIDxjbGFzc05hbWU+amF2YS51dGlsLkxpc3Q8L2NsYXNzTmFtZT5cbiAgICAgICAgICA8ZmFjdEFsaWFzPmlucHV0MjwvZmFjdEFsaWFzPlxuICAgICAgICAgIDxleHByZXNzaW9uQWxpYXM+bnVtczwvZXhwcmVzc2lvbkFsaWFzPlxuICAgICAgICAgIDxnZW5lcmljVHlwZXM+XG4gICAgICAgICAgICA8c3RyaW5nPm51bWJlcjwvc3RyaW5nPlxuICAgICAgICAgIDwvZ2VuZXJpY1R5cGVzPlxuICAgICAgICAgIDxjb2x1bW5XaWR0aD4xNTc8L2NvbHVtbldpZHRoPlxuICAgICAgICAgIDxmYWN0TWFwcGluZ1ZhbHVlVHlwZT5OT1RfRVhQUkVTU0lPTjwvZmFjdE1hcHBpbmdWYWx1ZVR5cGU+XG4gICAgICAgIDwvRmFjdE1hcHBpbmc+XG4gICAgICAgIDxGYWN0TWFwcGluZz5cbiAgICAgICAgICA8ZXhwcmVzc2lvbkVsZW1lbnRzPlxuICAgICAgICAgICAgPEV4cHJlc3Npb25FbGVtZW50PlxuICAgICAgICAgICAgICA8c3RlcD5vdXRwdXQ8L3N0ZXA+XG4gICAgICAgICAgICA8L0V4cHJlc3Npb25FbGVtZW50PlxuICAgICAgICAgIDwvZXhwcmVzc2lvbkVsZW1lbnRzPlxuICAgICAgICAgIDxleHByZXNzaW9uSWRlbnRpZmllcj5cbiAgICAgICAgICAgIDxuYW1lPl9FMzhCRkYwQy0wNDBCLTQ2NEUtOEMxOC03QkQxQzczNzJFRUE8L25hbWU+XG4gICAgICAgICAgICA8dHlwZT5FWFBFQ1Q8L3R5cGU+XG4gICAgICAgICAgPC9leHByZXNzaW9uSWRlbnRpZmllcj5cbiAgICAgICAgICA8ZmFjdElkZW50aWZpZXI+XG4gICAgICAgICAgICA8bmFtZT5vdXRwdXQ8L25hbWU+XG4gICAgICAgICAgICA8Y2xhc3NOYW1lPmJvb2xlYW48L2NsYXNzTmFtZT5cbiAgICAgICAgICA8L2ZhY3RJZGVudGlmaWVyPlxuICAgICAgICAgIDxjbGFzc05hbWU+Ym9vbGVhbjwvY2xhc3NOYW1lPlxuICAgICAgICAgIDxmYWN0QWxpYXM+b3V0cHV0PC9mYWN0QWxpYXM+XG4gICAgICAgICAgPGV4cHJlc3Npb25BbGlhcz52YWx1ZTwvZXhwcmVzc2lvbkFsaWFzPlxuICAgICAgICAgIDxjb2x1bW5XaWR0aD4xMDA8L2NvbHVtbldpZHRoPlxuICAgICAgICAgIDxmYWN0TWFwcGluZ1ZhbHVlVHlwZT5OT1RfRVhQUkVTU0lPTjwvZmFjdE1hcHBpbmdWYWx1ZVR5cGU+XG4gICAgICAgIDwvRmFjdE1hcHBpbmc+XG4gICAgICA8L2ZhY3RNYXBwaW5ncz5cbiAgICA8L3NjZXNpbU1vZGVsRGVzY3JpcHRvcj5cbiAgICA8c2Nlc2ltRGF0YT5cbiAgICAgIDxTY2VuYXJpbz5cbiAgICAgICAgPGZhY3RNYXBwaW5nVmFsdWVzPlxuICAgICAgICAgIDxGYWN0TWFwcGluZ1ZhbHVlPlxuICAgICAgICAgICAgPGZhY3RJZGVudGlmaWVyPlxuICAgICAgICAgICAgICA8bmFtZT4jPC9uYW1lPlxuICAgICAgICAgICAgICA8Y2xhc3NOYW1lPmphdmEubGFuZy5JbnRlZ2VyPC9jbGFzc05hbWU+XG4gICAgICAgICAgICA8L2ZhY3RJZGVudGlmaWVyPlxuICAgICAgICAgICAgPGV4cHJlc3Npb25JZGVudGlmaWVyPlxuICAgICAgICAgICAgICA8bmFtZT5JbmRleDwvbmFtZT5cbiAgICAgICAgICAgICAgPHR5cGU+T1RIRVI8L3R5cGU+XG4gICAgICAgICAgICA8L2V4cHJlc3Npb25JZGVudGlmaWVyPlxuICAgICAgICAgICAgPHJhd1ZhbHVlIGNsYXNzPVwic3RyaW5nXCI+MTwvcmF3VmFsdWU+XG4gICAgICAgICAgPC9GYWN0TWFwcGluZ1ZhbHVlPlxuICAgICAgICAgIDxGYWN0TWFwcGluZ1ZhbHVlPlxuICAgICAgICAgICAgPGZhY3RJZGVudGlmaWVyPlxuICAgICAgICAgICAgICA8bmFtZT5TY2VuYXJpbyBkZXNjcmlwdGlvbjwvbmFtZT5cbiAgICAgICAgICAgICAgPGNsYXNzTmFtZT5qYXZhLmxhbmcuU3RyaW5nPC9jbGFzc05hbWU+XG4gICAgICAgICAgICA8L2ZhY3RJZGVudGlmaWVyPlxuICAgICAgICAgICAgPGV4cHJlc3Npb25JZGVudGlmaWVyPlxuICAgICAgICAgICAgICA8bmFtZT5EZXNjcmlwdGlvbjwvbmFtZT5cbiAgICAgICAgICAgICAgPHR5cGU+T1RIRVI8L3R5cGU+XG4gICAgICAgICAgICA8L2V4cHJlc3Npb25JZGVudGlmaWVyPlxuICAgICAgICAgIDwvRmFjdE1hcHBpbmdWYWx1ZT5cbiAgICAgICAgICA8RmFjdE1hcHBpbmdWYWx1ZT5cbiAgICAgICAgICAgIDxmYWN0SWRlbnRpZmllcj5cbiAgICAgICAgICAgICAgPG5hbWU+aW5wdXQ8L25hbWU+XG4gICAgICAgICAgICAgIDxjbGFzc05hbWU+dE51bWJlcjwvY2xhc3NOYW1lPlxuICAgICAgICAgICAgPC9mYWN0SWRlbnRpZmllcj5cbiAgICAgICAgICAgIDxleHByZXNzaW9uSWRlbnRpZmllcj5cbiAgICAgICAgICAgICAgPG5hbWU+XzMzNjk0QzhFLUM3OTUtNDM1Ri1CMEYwLUYxMTAxRjlERTQwMzwvbmFtZT5cbiAgICAgICAgICAgICAgPHR5cGU+R0lWRU48L3R5cGU+XG4gICAgICAgICAgICA8L2V4cHJlc3Npb25JZGVudGlmaWVyPlxuICAgICAgICAgICAgPHJhd1ZhbHVlIGNsYXNzPVwic3RyaW5nXCI+WzEwLDIwLDMwXTwvcmF3VmFsdWU+XG4gICAgICAgICAgPC9GYWN0TWFwcGluZ1ZhbHVlPlxuICAgICAgICAgIDxGYWN0TWFwcGluZ1ZhbHVlPlxuICAgICAgICAgICAgPGZhY3RJZGVudGlmaWVyPlxuICAgICAgICAgICAgICA8bmFtZT5pbnB1dDI8L25hbWU+XG4gICAgICAgICAgICAgIDxjbGFzc05hbWU+dENvbXBsZXg8L2NsYXNzTmFtZT5cbiAgICAgICAgICAgIDwvZmFjdElkZW50aWZpZXI+XG4gICAgICAgICAgICA8ZXhwcmVzc2lvbklkZW50aWZpZXI+XG4gICAgICAgICAgICAgIDxuYW1lPl8xMURCQjM5QS01NzQ5LTQyMEQtQTAwNy0zQTBEMTlBNjY5MTY8L25hbWU+XG4gICAgICAgICAgICAgIDx0eXBlPkdJVkVOPC90eXBlPlxuICAgICAgICAgICAgPC9leHByZXNzaW9uSWRlbnRpZmllcj5cbiAgICAgICAgICAgIDxyYXdWYWx1ZSBjbGFzcz1cInN0cmluZ1wiPls0MCw1MCw2MF08L3Jhd1ZhbHVlPlxuICAgICAgICAgIDwvRmFjdE1hcHBpbmdWYWx1ZT5cbiAgICAgICAgICA8RmFjdE1hcHBpbmdWYWx1ZT5cbiAgICAgICAgICAgIDxmYWN0SWRlbnRpZmllcj5cbiAgICAgICAgICAgICAgPG5hbWU+b3V0cHV0PC9uYW1lPlxuICAgICAgICAgICAgICA8Y2xhc3NOYW1lPmJvb2xlYW48L2NsYXNzTmFtZT5cbiAgICAgICAgICAgIDwvZmFjdElkZW50aWZpZXI+XG4gICAgICAgICAgICA8ZXhwcmVzc2lvbklkZW50aWZpZXI+XG4gICAgICAgICAgICAgIDxuYW1lPl9FMzhCRkYwQy0wNDBCLTQ2NEUtOEMxOC03QkQxQzczNzJFRUE8L25hbWU+XG4gICAgICAgICAgICAgIDx0eXBlPkVYUEVDVDwvdHlwZT5cbiAgICAgICAgICAgIDwvZXhwcmVzc2lvbklkZW50aWZpZXI+XG4gICAgICAgICAgICA8cmF3VmFsdWUgY2xhc3M9XCJzdHJpbmdcIj50cnVlPC9yYXdWYWx1ZT5cbiAgICAgICAgICA8L0ZhY3RNYXBwaW5nVmFsdWU+XG4gICAgICAgIDwvZmFjdE1hcHBpbmdWYWx1ZXM+XG4gICAgICA8L1NjZW5hcmlvPlxuICAgIDwvc2Nlc2ltRGF0YT5cbiAgPC9zaW11bGF0aW9uPlxuICA8YmFja2dyb3VuZD5cbiAgICA8c2Nlc2ltTW9kZWxEZXNjcmlwdG9yPlxuICAgICAgPGZhY3RNYXBwaW5ncz5cbiAgICAgICAgPEZhY3RNYXBwaW5nPlxuICAgICAgICAgIDxleHByZXNzaW9uRWxlbWVudHMgLz5cbiAgICAgICAgICA8ZXhwcmVzc2lvbklkZW50aWZpZXI+XG4gICAgICAgICAgICA8bmFtZT4xfDE8L25hbWU+XG4gICAgICAgICAgICA8dHlwZT5HSVZFTjwvdHlwZT5cbiAgICAgICAgICA8L2V4cHJlc3Npb25JZGVudGlmaWVyPlxuICAgICAgICAgIDxmYWN0SWRlbnRpZmllcj5cbiAgICAgICAgICAgIDxuYW1lPkVtcHR5PC9uYW1lPlxuICAgICAgICAgICAgPGNsYXNzTmFtZT5qYXZhLmxhbmcuVm9pZDwvY2xhc3NOYW1lPlxuICAgICAgICAgIDwvZmFjdElkZW50aWZpZXI+XG4gICAgICAgICAgPGNsYXNzTmFtZT5qYXZhLmxhbmcuVm9pZDwvY2xhc3NOYW1lPlxuICAgICAgICAgIDxmYWN0QWxpYXM+SU5TVEFOQ0UtMTwvZmFjdEFsaWFzPlxuICAgICAgICAgIDxleHByZXNzaW9uQWxpYXM+UFJPUEVSVFktMTwvZXhwcmVzc2lvbkFsaWFzPlxuICAgICAgICAgIDxjb2x1bW5XaWR0aD4xNTA8L2NvbHVtbldpZHRoPlxuICAgICAgICAgIDxmYWN0TWFwcGluZ1ZhbHVlVHlwZT5OT1RfRVhQUkVTU0lPTjwvZmFjdE1hcHBpbmdWYWx1ZVR5cGU+XG4gICAgICAgIDwvRmFjdE1hcHBpbmc+XG4gICAgICA8L2ZhY3RNYXBwaW5ncz5cbiAgICA8L3NjZXNpbU1vZGVsRGVzY3JpcHRvcj5cbiAgICA8c2Nlc2ltRGF0YT5cbiAgICAgIDxCYWNrZ3JvdW5kRGF0YT5cbiAgICAgICAgPGZhY3RNYXBwaW5nVmFsdWVzPlxuICAgICAgICAgIDxGYWN0TWFwcGluZ1ZhbHVlPlxuICAgICAgICAgICAgPGZhY3RJZGVudGlmaWVyPlxuICAgICAgICAgICAgICA8bmFtZT5FbXB0eTwvbmFtZT5cbiAgICAgICAgICAgICAgPGNsYXNzTmFtZT5qYXZhLmxhbmcuVm9pZDwvY2xhc3NOYW1lPlxuICAgICAgICAgICAgPC9mYWN0SWRlbnRpZmllcj5cbiAgICAgICAgICAgIDxleHByZXNzaW9uSWRlbnRpZmllcj5cbiAgICAgICAgICAgICAgPG5hbWU+MXwxPC9uYW1lPlxuICAgICAgICAgICAgICA8dHlwZT5HSVZFTjwvdHlwZT5cbiAgICAgICAgICAgIDwvZXhwcmVzc2lvbklkZW50aWZpZXI+XG4gICAgICAgICAgPC9GYWN0TWFwcGluZ1ZhbHVlPlxuICAgICAgICA8L2ZhY3RNYXBwaW5nVmFsdWVzPlxuICAgICAgPC9CYWNrZ3JvdW5kRGF0YT5cbiAgICA8L3NjZXNpbURhdGE+XG4gIDwvYmFja2dyb3VuZD5cbiAgPHNldHRpbmdzPlxuICAgIDxkbW5GaWxlUGF0aD5kZXYtd2ViYXBwL2F2YWlsYWJsZS1kbW4tbW9kZWxzL2NvbGxlY3Rpb24uZG1uPC9kbW5GaWxlUGF0aD5cbiAgICA8dHlwZT5ETU48L3R5cGU+XG4gICAgPGRtbk5hbWVzcGFjZT5odHRwczovL2tpZS5hcGFjaGUub3JnL2Rtbi9fRDFDMzc3NTAtMjA3OC00Q0I3LUFGNzctODUwOTQ3NzE4ODY3PC9kbW5OYW1lc3BhY2U+XG4gICAgPGRtbk5hbWU+Q29sbGVjdGlvbjwvZG1uTmFtZT5cbiAgICA8c2tpcEZyb21CdWlsZD5mYWxzZTwvc2tpcEZyb21CdWlsZD5cbiAgPC9zZXR0aW5ncz5cbiAgPGltcG9ydHM+XG4gICAgPGltcG9ydHMgLz5cbiAgPC9pbXBvcnRzPlxuPC9TY2VuYXJpb1NpbXVsYXRpb25Nb2RlbD5cbmA7XG5jb25zdCBtZXRhOiBNZXRhPHt9PiA9IHtcbiAgdGl0bGU6IFwiTWlzYy9Db2xsZWN0aW9uXCIsXG4gIGNvbXBvbmVudDogVGVzdFNjZW5hcmlvRWRpdG9yLFxuICBpbmNsdWRlU3RvcmllczogL15bQS1aXS9cbn07XG5leHBvcnQgZGVmYXVsdCBtZXRhO1xudHlwZSBTdG9yeSA9IFN0b3J5T2JqPFN0b3J5Ym9va1Rlc3RTY2VuYXJpb0VkaXRvclByb3BzPjtcbmNvbnN0IG1hcnNoYWxsZXIgPSBnZXRNYXJzaGFsbGVyKGNvbGxlY3Rpb25TY2VzaW0pO1xuY29uc3QgY3VycmVudE1vZGVsID0gbWFyc2hhbGxlci5wYXJzZXIucGFyc2UoKTtcbmNvbnN0IGRtbk1vZGVsID0ge1xuICBub3JtYWxpemVkUG9zaXhQYXRoUmVsYXRpdmVUb1RoZU9wZW5GaWxlOiBcImRldi13ZWJhcHAvYXZhaWxhYmxlLWRtbi1tb2RlbHMvY29sbGVjdGlvbi5kbW5cIixcbiAgdHlwZTogXCJkbW5cIixcbiAgbW9kZWw6IG5vcm1hbGl6ZShnZXREbW5NYXJzaGFsbGVyKENPTExFQ1RJT04gPz8gXCJcIiwge1xuICAgIHVwZ3JhZGVUbzogXCJsYXRlc3RcIlxuICB9KS5wYXJzZXIucGFyc2UoKSksXG4gIHN2ZzogXCJcIlxufTtcbmV4cG9ydCBjb25zdCBDb2xsZWN0aW9uOiBTdG9yeSA9IHtcbiAgcmVuZGVyOiBhcmdzID0+IFNjZVNpbUVkaXRvcldyYXBwZXIoYXJncyksXG4gIGFyZ3M6IHtcbiAgICBtb2RlbDogbWFyc2hhbGxlci5wYXJzZXIucGFyc2UoKSxcbiAgICBvcGVuRmlsZU5vcm1hbGl6ZWRQb3NpeFBhdGhSZWxhdGl2ZVRvVGhlV29ya3NwYWNlUm9vdDogY29sbGVjdGlvbkZpbGVOYW1lLFxuICAgIGV4dGVybmFsTW9kZWxzQnlOYW1lc3BhY2U6IG5ldyBNYXAoW1tcImh0dHBzOi8va2llLmFwYWNoZS5vcmcvZG1uL19EMUMzNzc1MC0yMDc4LTRDQjctQUY3Ny04NTA5NDc3MTg4NjdcIiwgZG1uTW9kZWxdXSksXG4gICAgeG1sOiBtYXJzaGFsbGVyLmJ1aWxkZXIuYnVpbGQoY3VycmVudE1vZGVsKSxcbiAgICBvblJlcXVlc3RFeHRlcm5hbE1vZGVsc0F2YWlsYWJsZVRvSW5jbHVkZTogKCkgPT4gUHJvbWlzZS5yZXNvbHZlKFtcImNvbGxlY3Rpb24uZG1uXCJdKSxcbiAgICBvblJlcXVlc3RFeHRlcm5hbE1vZGVsQnlQYXRoOiAoKSA9PiBQcm9taXNlLnJlc29sdmUoZG1uTW9kZWwpXG4gIH1cbn07XG5Db2xsZWN0aW9uLnBhcmFtZXRlcnMgPSB7XG4gIC4uLkNvbGxlY3Rpb24ucGFyYW1ldGVycyxcbiAgZG9jczoge1xuICAgIC4uLkNvbGxlY3Rpb24ucGFyYW1ldGVycz8uZG9jcyxcbiAgICBzb3VyY2U6IHtcbiAgICAgIG9yaWdpbmFsU291cmNlOiBcIntcXG4gIHJlbmRlcjogYXJncyA9PiBTY2VTaW1FZGl0b3JXcmFwcGVyKGFyZ3MpLFxcbiAgYXJnczoge1xcbiAgICBtb2RlbDogbWFyc2hhbGxlci5wYXJzZXIucGFyc2UoKSxcXG4gICAgb3BlbkZpbGVOb3JtYWxpemVkUG9zaXhQYXRoUmVsYXRpdmVUb1RoZVdvcmtzcGFjZVJvb3Q6IGNvbGxlY3Rpb25GaWxlTmFtZSxcXG4gICAgZXh0ZXJuYWxNb2RlbHNCeU5hbWVzcGFjZTogbmV3IE1hcChbW1xcXCJodHRwczovL2tpZS5hcGFjaGUub3JnL2Rtbi9fRDFDMzc3NTAtMjA3OC00Q0I3LUFGNzctODUwOTQ3NzE4ODY3XFxcIiwgZG1uTW9kZWxdXSksXFxuICAgIHhtbDogbWFyc2hhbGxlci5idWlsZGVyLmJ1aWxkKGN1cnJlbnRNb2RlbCksXFxuICAgIG9uUmVxdWVzdEV4dGVybmFsTW9kZWxzQXZhaWxhYmxlVG9JbmNsdWRlOiAoKSA9PiBQcm9taXNlLnJlc29sdmUoW1xcXCJjb2xsZWN0aW9uLmRtblxcXCJdKSxcXG4gICAgb25SZXF1ZXN0RXh0ZXJuYWxNb2RlbEJ5UGF0aDogKCkgPT4gUHJvbWlzZS5yZXNvbHZlKGRtbk1vZGVsKVxcbiAgfVxcbn1cIixcbiAgICAgIC4uLkNvbGxlY3Rpb24ucGFyYW1ldGVycz8uZG9jcz8uc291cmNlXG4gICAgfVxuICB9XG59OyJdLCJuYW1lcyI6WyJnZXRNYXJzaGFsbGVyIiwiVGVzdFNjZW5hcmlvRWRpdG9yIiwiU2NlU2ltRWRpdG9yV3JhcHBlciIsIm5vcm1hbGl6ZSIsImdldERtbk1hcnNoYWxsZXIiLCJDT0xMRUNUSU9OIiwiY29sbGVjdGlvbkZpbGVOYW1lIiwiY29sbGVjdGlvblNjZXNpbSIsIm1ldGEiLCJ0aXRsZSIsImNvbXBvbmVudCIsImluY2x1ZGVTdG9yaWVzIiwibWFyc2hhbGxlciIsImN1cnJlbnRNb2RlbCIsInBhcnNlciIsInBhcnNlIiwiZG1uTW9kZWwiLCJub3JtYWxpemVkUG9zaXhQYXRoUmVsYXRpdmVUb1RoZU9wZW5GaWxlIiwidHlwZSIsIm1vZGVsIiwidXBncmFkZVRvIiwic3ZnIiwiQ29sbGVjdGlvbiIsInJlbmRlciIsImFyZ3MiLCJvcGVuRmlsZU5vcm1hbGl6ZWRQb3NpeFBhdGhSZWxhdGl2ZVRvVGhlV29ya3NwYWNlUm9vdCIsImV4dGVybmFsTW9kZWxzQnlOYW1lc3BhY2UiLCJNYXAiLCJ4bWwiLCJidWlsZGVyIiwiYnVpbGQiLCJvblJlcXVlc3RFeHRlcm5hbE1vZGVsc0F2YWlsYWJsZVRvSW5jbHVkZSIsIlByb21pc2UiLCJyZXNvbHZlIiwib25SZXF1ZXN0RXh0ZXJuYWxNb2RlbEJ5UGF0aCIsInBhcmFtZXRlcnMiLCJkb2NzIiwiX2EiLCJzb3VyY2UiLCJvcmlnaW5hbFNvdXJjZSIsIl9jIiwiX2IiLCJfX25hbWVkRXhwb3J0c09yZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==