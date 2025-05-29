"use strict";
(self["webpackChunk_kie_tools_scesim_editor"] = self["webpackChunk_kie_tools_scesim_editor"] || []).push([["misc-complexCollection-ComplexCollection-stories"],{

/***/ "./stories/misc/complexCollection/ComplexCollection.stories.tsx":
/*!**********************************************************************!*\
  !*** ./stories/misc/complexCollection/ComplexCollection.stories.tsx ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ComplexCollection: () => (/* binding */ ComplexCollection),
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






const collectionFileName = "complex_collection.scesim";
const collectionScesim = `<?xml version="1.0" encoding="UTF-8" ?>
<ScenarioSimulationModel version="1.8">
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
              <step>Team</step>
            </ExpressionElement>
            <ExpressionElement>
              <step>name</step>
            </ExpressionElement>
          </expressionElements>
          <expressionIdentifier>
            <name>_39AB4241-7722-4608-A36B-39063D1CE681</name>
            <type>GIVEN</type>
          </expressionIdentifier>
          <factIdentifier>
            <name>Team</name>
            <className>tTeam</className>
          </factIdentifier>
          <className>string</className>
          <factAlias>Team</factAlias>
          <expressionAlias>name</expressionAlias>
          <columnWidth>100</columnWidth>
          <factMappingValueType>NOT_EXPRESSION</factMappingValueType>
        </FactMapping>
        <FactMapping>
          <expressionElements>
            <ExpressionElement>
              <step>Team</step>
            </ExpressionElement>
            <ExpressionElement>
              <step>people</step>
            </ExpressionElement>
          </expressionElements>
          <expressionIdentifier>
            <name>_DB037929-348D-4631-92AB-77A9565E4646</name>
            <type>GIVEN</type>
          </expressionIdentifier>
          <factIdentifier>
            <name>Team</name>
            <className>tTeam</className>
          </factIdentifier>
          <className>java.util.List</className>
          <factAlias>Team</factAlias>
          <expressionAlias>people</expressionAlias>
          <genericTypes>
            <string>tPerson</string>
          </genericTypes>
          <columnWidth>289</columnWidth>
          <factMappingValueType>NOT_EXPRESSION</factMappingValueType>
        </FactMapping>
        <FactMapping>
          <expressionElements>
            <ExpressionElement>
              <step>isHuge</step>
            </ExpressionElement>
          </expressionElements>
          <expressionIdentifier>
            <name>_4C87F59F-DBD2-42E6-A884-4D700AEDC2D0</name>
            <type>EXPECT</type>
          </expressionIdentifier>
          <factIdentifier>
            <name>isHuge</name>
            <className>boolean</className>
          </factIdentifier>
          <className>boolean</className>
          <factAlias>isHuge</factAlias>
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
            <rawValue class="string">Empty team</rawValue>
          </FactMappingValue>
          <FactMappingValue>
            <factIdentifier>
              <name>Team</name>
              <className>tTeam</className>
            </factIdentifier>
            <expressionIdentifier>
              <name>_39AB4241-7722-4608-A36B-39063D1CE681</name>
              <type>GIVEN</type>
            </expressionIdentifier>
            <rawValue class="string">&quot;Team1&quot;</rawValue>
          </FactMappingValue>
          <FactMappingValue>
            <factIdentifier>
              <name>Team</name>
              <className>tTeam</className>
            </factIdentifier>
            <expressionIdentifier>
              <name>_DB037929-348D-4631-92AB-77A9565E4646</name>
              <type>GIVEN</type>
            </expressionIdentifier>
            <rawValue class="string">[]</rawValue>
          </FactMappingValue>
          <FactMappingValue>
            <factIdentifier>
              <name>isHuge</name>
              <className>boolean</className>
            </factIdentifier>
            <expressionIdentifier>
              <name>_4C87F59F-DBD2-42E6-A884-4D700AEDC2D0</name>
              <type>EXPECT</type>
            </expressionIdentifier>
            <rawValue class="string">false</rawValue>
          </FactMappingValue>
        </factMappingValues>
      </Scenario>
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
            <rawValue class="string">A tiny little team</rawValue>
          </FactMappingValue>
          <FactMappingValue>
            <factIdentifier>
              <name>Team</name>
              <className>tTeam</className>
            </factIdentifier>
            <expressionIdentifier>
              <name>_39AB4241-7722-4608-A36B-39063D1CE681</name>
              <type>GIVEN</type>
            </expressionIdentifier>
            <rawValue class="string">&quot;Team 2&quot;</rawValue>
          </FactMappingValue>
          <FactMappingValue>
            <factIdentifier>
              <name>Team</name>
              <className>tTeam</className>
            </factIdentifier>
            <expressionIdentifier>
              <name>_DB037929-348D-4631-92AB-77A9565E4646</name>
              <type>GIVEN</type>
            </expressionIdentifier>
            <rawValue class="string">[{&quot;name&quot;: &quot;\&quot;John\&quot;&quot;, &quot;age&quot;: &quot;10&quot;}, {&quot;name&quot;: &quot;\&quot;Ashley\&quot;&quot;, &quot;age&quot;: &quot;10&quot;}, {&quot;name&quot;: &quot;\&quot;Pete\&quot;&quot;, &quot;age&quot;: &quot;10&quot;}]</rawValue>
          </FactMappingValue>
          <FactMappingValue>
            <factIdentifier>
              <name>isHuge</name>
              <className>boolean</className>
            </factIdentifier>
            <expressionIdentifier>
              <name>_4C87F59F-DBD2-42E6-A884-4D700AEDC2D0</name>
              <type>EXPECT</type>
            </expressionIdentifier>
            <rawValue class="string">false</rawValue>
          </FactMappingValue>
        </factMappingValues>
      </Scenario>
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
            <rawValue class="string">A Huge team</rawValue>
          </FactMappingValue>
          <FactMappingValue>
            <factIdentifier>
              <name>Team</name>
              <className>tTeam</className>
            </factIdentifier>
            <expressionIdentifier>
              <name>_39AB4241-7722-4608-A36B-39063D1CE681</name>
              <type>GIVEN</type>
            </expressionIdentifier>
            <rawValue class="string">&quot;Team 3&quot;</rawValue>
          </FactMappingValue>
          <FactMappingValue>
            <factIdentifier>
              <name>Team</name>
              <className>tTeam</className>
            </factIdentifier>
            <expressionIdentifier>
              <name>_DB037929-348D-4631-92AB-77A9565E4646</name>
              <type>GIVEN</type>
            </expressionIdentifier>
            <rawValue class="string">[{&quot;name&quot;: &quot;\&quot;John\&quot;&quot;, &quot;age&quot;: &quot;10&quot;}, {&quot;name&quot;: &quot;\&quot;Ashley\&quot;&quot;, &quot;age&quot;: &quot;10&quot;}, {&quot;name&quot;: &quot;\&quot;Pete\&quot;&quot;, &quot;age&quot;: &quot;10&quot;}, {&quot;name&quot;: &quot;\&quot;Becky\&quot;&quot;, &quot;age&quot;: &quot;24&quot;}]</rawValue>
          </FactMappingValue>
          <FactMappingValue>
            <factIdentifier>
              <name>isHuge</name>
              <className>boolean</className>
            </factIdentifier>
            <expressionIdentifier>
              <name>_4C87F59F-DBD2-42E6-A884-4D700AEDC2D0</name>
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
    <dmnFilePath>../../main/resources/ComplexCollection.dmn</dmnFilePath>
    <type>DMN</type>
    <dmnNamespace>https://kie.org/dmn/_8D6316E7-ED43-4528-BB0B-2A7587B20853</dmnNamespace>
    <dmnName>DMN_EE8B8820-C396-45D8-BB02-3317B5C43C3F</dmnName>
    <skipFromBuild>false</skipFromBuild>
  </settings>
  <imports>
    <imports />
  </imports>
</ScenarioSimulationModel>
`;
const meta = {
  title: "Misc/ComplexCollection",
  component: _src_TestScenarioEditor__WEBPACK_IMPORTED_MODULE_1__.TestScenarioEditor,
  includeStories: /^[A-Z]/
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (meta);
const marshaller = (0,_kie_tools_scesim_marshaller__WEBPACK_IMPORTED_MODULE_0__.getMarshaller)(collectionScesim);
const currentModel = marshaller.parser.parse();
const dmnModel = {
  normalizedPosixPathRelativeToTheOpenFile: "dev-webapp/available-dmn-models/complex_collection.dmn",
  type: "dmn",
  model: (0,_kie_tools_dmn_marshaller_dist_normalization_normalize__WEBPACK_IMPORTED_MODULE_3__.normalize)((0,_kie_tools_dmn_marshaller__WEBPACK_IMPORTED_MODULE_4__.getMarshaller)(_examples_ExternalDmnModels__WEBPACK_IMPORTED_MODULE_5__.COMPLEX_COLLECTION !== null && _examples_ExternalDmnModels__WEBPACK_IMPORTED_MODULE_5__.COMPLEX_COLLECTION !== void 0 ? _examples_ExternalDmnModels__WEBPACK_IMPORTED_MODULE_5__.COMPLEX_COLLECTION : "", {
    upgradeTo: "latest"
  }).parser.parse()),
  svg: ""
};
const ComplexCollection = {
  render: args => (0,_scesimEditorStoriesWrapper__WEBPACK_IMPORTED_MODULE_2__.SceSimEditorWrapper)(args),
  args: {
    model: marshaller.parser.parse(),
    openFileNormalizedPosixPathRelativeToTheWorkspaceRoot: collectionFileName,
    externalModelsByNamespace: new Map([["https://kie.org/dmn/_8D6316E7-ED43-4528-BB0B-2A7587B20853", dmnModel]]),
    xml: marshaller.builder.build(currentModel),
    onRequestExternalModelsAvailableToInclude: () => Promise.resolve(["complex_collection.dmn"]),
    onRequestExternalModelByPath: () => Promise.resolve(dmnModel)
  }
};
ComplexCollection.parameters = {
  ...ComplexCollection.parameters,
  docs: {
    ...((_a = ComplexCollection.parameters) === null || _a === void 0 ? void 0 : _a.docs),
    source: {
      originalSource: "{\n  render: args => SceSimEditorWrapper(args),\n  args: {\n    model: marshaller.parser.parse(),\n    openFileNormalizedPosixPathRelativeToTheWorkspaceRoot: collectionFileName,\n    externalModelsByNamespace: new Map([[\"https://kie.org/dmn/_8D6316E7-ED43-4528-BB0B-2A7587B20853\", dmnModel]]),\n    xml: marshaller.builder.build(currentModel),\n    onRequestExternalModelsAvailableToInclude: () => Promise.resolve([\"complex_collection.dmn\"]),\n    onRequestExternalModelByPath: () => Promise.resolve(dmnModel)\n  }\n}",
      ...((_c = (_b = ComplexCollection.parameters) === null || _b === void 0 ? void 0 : _b.docs) === null || _c === void 0 ? void 0 : _c.source)
    }
  }
};
const __namedExportsOrder = ["collectionFileName", "collectionScesim", "ComplexCollection"];

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlzYy1jb21wbGV4Q29sbGVjdGlvbi1Db21wbGV4Q29sbGVjdGlvbi1zdG9yaWVzLmIwMTBmZDA0LmlmcmFtZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0I2RDtBQUNRO0FBQ29DO0FBQ3RCO0FBQ0w7QUFDUjtBQUMvRCxNQUFNTSxrQkFBa0IsR0FBRywyQkFBMkI7QUFDdEQsTUFBTUMsZ0JBQWdCLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQTZVL0I7QUFDRCxNQUFNQyxJQUFJLEdBQWE7RUFDckJDLEtBQUssRUFBRSx3QkFBd0I7RUFDL0JDLFNBQVMsRUFBRVQsdUVBQWtCO0VBQzdCVSxjQUFjLEVBQUU7Q0FDakI7QUFDRCxpRUFBZUgsSUFBSSxFQUFDO0FBRXBCLE1BQU1JLFVBQVUsR0FBR1osMkVBQWEsQ0FBQ08sZ0JBQWdCLENBQUM7QUFDbEQsTUFBTU0sWUFBWSxHQUFHRCxVQUFVLENBQUNFLE1BQU0sQ0FBQ0MsS0FBSyxFQUFFO0FBQzlDLE1BQU1DLFFBQVEsR0FBRztFQUNmQyx3Q0FBd0MsRUFBRSx3REFBd0Q7RUFDbEdDLElBQUksRUFBRSxLQUFLO0VBQ1hDLEtBQUssRUFBRWhCLGlHQUFTLENBQUNDLHdFQUFnQixDQUFDQywyRUFBa0IsYUFBbEJBLDJFQUFrQixjQUFsQkEsMkVBQWtCLEdBQUksRUFBRSxFQUFFO0lBQzFEZSxTQUFTLEVBQUU7R0FDWixDQUFDLENBQUNOLE1BQU0sQ0FBQ0MsS0FBSyxFQUFFLENBQUM7RUFDbEJNLEdBQUcsRUFBRTtDQUNOO0FBQ00sTUFBTUMsaUJBQWlCLEdBQVU7RUFDdENDLE1BQU0sRUFBRUMsSUFBSSxJQUFJdEIsZ0ZBQW1CLENBQUNzQixJQUFJLENBQUM7RUFDekNBLElBQUksRUFBRTtJQUNKTCxLQUFLLEVBQUVQLFVBQVUsQ0FBQ0UsTUFBTSxDQUFDQyxLQUFLLEVBQUU7SUFDaENVLHFEQUFxRCxFQUFFbkIsa0JBQWtCO0lBQ3pFb0IseUJBQXlCLEVBQUUsSUFBSUMsR0FBRyxDQUFDLENBQUMsQ0FBQywyREFBMkQsRUFBRVgsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUM3R1ksR0FBRyxFQUFFaEIsVUFBVSxDQUFDaUIsT0FBTyxDQUFDQyxLQUFLLENBQUNqQixZQUFZLENBQUM7SUFDM0NrQix5Q0FBeUMsRUFBRUEsQ0FBQSxLQUFNQyxPQUFPLENBQUNDLE9BQU8sQ0FBQyxDQUFDLHdCQUF3QixDQUFDLENBQUM7SUFDNUZDLDRCQUE0QixFQUFFQSxDQUFBLEtBQU1GLE9BQU8sQ0FBQ0MsT0FBTyxDQUFDakIsUUFBUTs7Q0FFL0Q7QUFDRE0saUJBQWlCLENBQUNhLFVBQVUsR0FBRztFQUM3QixHQUFHYixpQkFBaUIsQ0FBQ2EsVUFBVTtFQUMvQkMsSUFBSSxFQUFFO0lBQ0osSUFBRyxDQUFBQyxFQUFBLEdBQUFmLGlCQUFpQixDQUFDYSxVQUFVLGNBQUFFLEVBQUEsdUJBQUFBLEVBQUEsQ0FBRUQsSUFBSTtJQUNyQ0UsTUFBTSxFQUFFO01BQ05DLGNBQWMsRUFBRSwyZ0JBQTJnQjtNQUMzaEIsSUFBRyxDQUFBQyxFQUFBLElBQUFDLEVBQUEsR0FBQW5CLGlCQUFpQixDQUFDYSxVQUFVLGNBQUFNLEVBQUEsdUJBQUFBLEVBQUEsQ0FBRUwsSUFBSSxjQUFBSSxFQUFBLHVCQUFBQSxFQUFBLENBQUVGLE1BQU07OztDQUdsRDtBQUFDLE1BQUFJLG1CQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGtpZS10b29scy9zY2VzaW0tZWRpdG9yLy4vc3Rvcmllcy9taXNjL2NvbXBsZXhDb2xsZWN0aW9uL0NvbXBsZXhDb2xsZWN0aW9uLnN0b3JpZXMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBMaWNlbnNlZCB0byB0aGUgQXBhY2hlIFNvZnR3YXJlIEZvdW5kYXRpb24gKEFTRikgdW5kZXIgb25lXG4gKiBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gIFNlZSB0aGUgTk9USUNFIGZpbGVcbiAqIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uXG4gKiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC4gIFRoZSBBU0YgbGljZW5zZXMgdGhpcyBmaWxlXG4gKiB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlXG4gKiBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2VcbiAqIHdpdGggdGhlIExpY2Vuc2UuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLFxuICogc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cbiAqIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXG4gKiBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGVcbiAqIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnNcbiAqIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB0eXBlIHsgTWV0YSwgU3RvcnlPYmogfSBmcm9tIFwiQHN0b3J5Ym9vay9yZWFjdFwiO1xuaW1wb3J0IHsgZ2V0TWFyc2hhbGxlciB9IGZyb20gXCJAa2llLXRvb2xzL3NjZXNpbS1tYXJzaGFsbGVyXCI7XG5pbXBvcnQgeyBUZXN0U2NlbmFyaW9FZGl0b3IgfSBmcm9tIFwiLi4vLi4vLi4vc3JjL1Rlc3RTY2VuYXJpb0VkaXRvclwiO1xuaW1wb3J0IHsgU2NlU2ltRWRpdG9yV3JhcHBlciwgU3Rvcnlib29rVGVzdFNjZW5hcmlvRWRpdG9yUHJvcHMgfSBmcm9tIFwiLi4vLi4vc2Nlc2ltRWRpdG9yU3Rvcmllc1dyYXBwZXJcIjtcbmltcG9ydCB7IG5vcm1hbGl6ZSB9IGZyb20gXCJAa2llLXRvb2xzL2Rtbi1tYXJzaGFsbGVyL2Rpc3Qvbm9ybWFsaXphdGlvbi9ub3JtYWxpemVcIjtcbmltcG9ydCB7IGdldE1hcnNoYWxsZXIgYXMgZ2V0RG1uTWFyc2hhbGxlciB9IGZyb20gXCJAa2llLXRvb2xzL2Rtbi1tYXJzaGFsbGVyXCI7XG5pbXBvcnQgeyBDT01QTEVYX0NPTExFQ1RJT04gfSBmcm9tIFwiLi4vLi4vZXhhbXBsZXMvRXh0ZXJuYWxEbW5Nb2RlbHNcIjtcbmV4cG9ydCBjb25zdCBjb2xsZWN0aW9uRmlsZU5hbWUgPSBcImNvbXBsZXhfY29sbGVjdGlvbi5zY2VzaW1cIjtcbmV4cG9ydCBjb25zdCBjb2xsZWN0aW9uU2Nlc2ltID0gYDw/eG1sIHZlcnNpb249XCIxLjBcIiBlbmNvZGluZz1cIlVURi04XCIgPz5cbjxTY2VuYXJpb1NpbXVsYXRpb25Nb2RlbCB2ZXJzaW9uPVwiMS44XCI+XG4gIDxzaW11bGF0aW9uPlxuICAgIDxzY2VzaW1Nb2RlbERlc2NyaXB0b3I+XG4gICAgICA8ZmFjdE1hcHBpbmdzPlxuICAgICAgICA8RmFjdE1hcHBpbmc+XG4gICAgICAgICAgPGV4cHJlc3Npb25FbGVtZW50cyAvPlxuICAgICAgICAgIDxleHByZXNzaW9uSWRlbnRpZmllcj5cbiAgICAgICAgICAgIDxuYW1lPkluZGV4PC9uYW1lPlxuICAgICAgICAgICAgPHR5cGU+T1RIRVI8L3R5cGU+XG4gICAgICAgICAgPC9leHByZXNzaW9uSWRlbnRpZmllcj5cbiAgICAgICAgICA8ZmFjdElkZW50aWZpZXI+XG4gICAgICAgICAgICA8bmFtZT4jPC9uYW1lPlxuICAgICAgICAgICAgPGNsYXNzTmFtZT5qYXZhLmxhbmcuSW50ZWdlcjwvY2xhc3NOYW1lPlxuICAgICAgICAgIDwvZmFjdElkZW50aWZpZXI+XG4gICAgICAgICAgPGNsYXNzTmFtZT5qYXZhLmxhbmcuSW50ZWdlcjwvY2xhc3NOYW1lPlxuICAgICAgICAgIDxmYWN0QWxpYXM+IzwvZmFjdEFsaWFzPlxuICAgICAgICAgIDxjb2x1bW5XaWR0aD43MDwvY29sdW1uV2lkdGg+XG4gICAgICAgICAgPGZhY3RNYXBwaW5nVmFsdWVUeXBlPk5PVF9FWFBSRVNTSU9OPC9mYWN0TWFwcGluZ1ZhbHVlVHlwZT5cbiAgICAgICAgPC9GYWN0TWFwcGluZz5cbiAgICAgICAgPEZhY3RNYXBwaW5nPlxuICAgICAgICAgIDxleHByZXNzaW9uRWxlbWVudHMgLz5cbiAgICAgICAgICA8ZXhwcmVzc2lvbklkZW50aWZpZXI+XG4gICAgICAgICAgICA8bmFtZT5EZXNjcmlwdGlvbjwvbmFtZT5cbiAgICAgICAgICAgIDx0eXBlPk9USEVSPC90eXBlPlxuICAgICAgICAgIDwvZXhwcmVzc2lvbklkZW50aWZpZXI+XG4gICAgICAgICAgPGZhY3RJZGVudGlmaWVyPlxuICAgICAgICAgICAgPG5hbWU+U2NlbmFyaW8gZGVzY3JpcHRpb248L25hbWU+XG4gICAgICAgICAgICA8Y2xhc3NOYW1lPmphdmEubGFuZy5TdHJpbmc8L2NsYXNzTmFtZT5cbiAgICAgICAgICA8L2ZhY3RJZGVudGlmaWVyPlxuICAgICAgICAgIDxjbGFzc05hbWU+amF2YS5sYW5nLlN0cmluZzwvY2xhc3NOYW1lPlxuICAgICAgICAgIDxmYWN0QWxpYXM+U2NlbmFyaW8gZGVzY3JpcHRpb248L2ZhY3RBbGlhcz5cbiAgICAgICAgICA8Y29sdW1uV2lkdGg+MzAwPC9jb2x1bW5XaWR0aD5cbiAgICAgICAgICA8ZmFjdE1hcHBpbmdWYWx1ZVR5cGU+Tk9UX0VYUFJFU1NJT048L2ZhY3RNYXBwaW5nVmFsdWVUeXBlPlxuICAgICAgICA8L0ZhY3RNYXBwaW5nPlxuICAgICAgICA8RmFjdE1hcHBpbmc+XG4gICAgICAgICAgPGV4cHJlc3Npb25FbGVtZW50cz5cbiAgICAgICAgICAgIDxFeHByZXNzaW9uRWxlbWVudD5cbiAgICAgICAgICAgICAgPHN0ZXA+VGVhbTwvc3RlcD5cbiAgICAgICAgICAgIDwvRXhwcmVzc2lvbkVsZW1lbnQ+XG4gICAgICAgICAgICA8RXhwcmVzc2lvbkVsZW1lbnQ+XG4gICAgICAgICAgICAgIDxzdGVwPm5hbWU8L3N0ZXA+XG4gICAgICAgICAgICA8L0V4cHJlc3Npb25FbGVtZW50PlxuICAgICAgICAgIDwvZXhwcmVzc2lvbkVsZW1lbnRzPlxuICAgICAgICAgIDxleHByZXNzaW9uSWRlbnRpZmllcj5cbiAgICAgICAgICAgIDxuYW1lPl8zOUFCNDI0MS03NzIyLTQ2MDgtQTM2Qi0zOTA2M0QxQ0U2ODE8L25hbWU+XG4gICAgICAgICAgICA8dHlwZT5HSVZFTjwvdHlwZT5cbiAgICAgICAgICA8L2V4cHJlc3Npb25JZGVudGlmaWVyPlxuICAgICAgICAgIDxmYWN0SWRlbnRpZmllcj5cbiAgICAgICAgICAgIDxuYW1lPlRlYW08L25hbWU+XG4gICAgICAgICAgICA8Y2xhc3NOYW1lPnRUZWFtPC9jbGFzc05hbWU+XG4gICAgICAgICAgPC9mYWN0SWRlbnRpZmllcj5cbiAgICAgICAgICA8Y2xhc3NOYW1lPnN0cmluZzwvY2xhc3NOYW1lPlxuICAgICAgICAgIDxmYWN0QWxpYXM+VGVhbTwvZmFjdEFsaWFzPlxuICAgICAgICAgIDxleHByZXNzaW9uQWxpYXM+bmFtZTwvZXhwcmVzc2lvbkFsaWFzPlxuICAgICAgICAgIDxjb2x1bW5XaWR0aD4xMDA8L2NvbHVtbldpZHRoPlxuICAgICAgICAgIDxmYWN0TWFwcGluZ1ZhbHVlVHlwZT5OT1RfRVhQUkVTU0lPTjwvZmFjdE1hcHBpbmdWYWx1ZVR5cGU+XG4gICAgICAgIDwvRmFjdE1hcHBpbmc+XG4gICAgICAgIDxGYWN0TWFwcGluZz5cbiAgICAgICAgICA8ZXhwcmVzc2lvbkVsZW1lbnRzPlxuICAgICAgICAgICAgPEV4cHJlc3Npb25FbGVtZW50PlxuICAgICAgICAgICAgICA8c3RlcD5UZWFtPC9zdGVwPlxuICAgICAgICAgICAgPC9FeHByZXNzaW9uRWxlbWVudD5cbiAgICAgICAgICAgIDxFeHByZXNzaW9uRWxlbWVudD5cbiAgICAgICAgICAgICAgPHN0ZXA+cGVvcGxlPC9zdGVwPlxuICAgICAgICAgICAgPC9FeHByZXNzaW9uRWxlbWVudD5cbiAgICAgICAgICA8L2V4cHJlc3Npb25FbGVtZW50cz5cbiAgICAgICAgICA8ZXhwcmVzc2lvbklkZW50aWZpZXI+XG4gICAgICAgICAgICA8bmFtZT5fREIwMzc5MjktMzQ4RC00NjMxLTkyQUItNzdBOTU2NUU0NjQ2PC9uYW1lPlxuICAgICAgICAgICAgPHR5cGU+R0lWRU48L3R5cGU+XG4gICAgICAgICAgPC9leHByZXNzaW9uSWRlbnRpZmllcj5cbiAgICAgICAgICA8ZmFjdElkZW50aWZpZXI+XG4gICAgICAgICAgICA8bmFtZT5UZWFtPC9uYW1lPlxuICAgICAgICAgICAgPGNsYXNzTmFtZT50VGVhbTwvY2xhc3NOYW1lPlxuICAgICAgICAgIDwvZmFjdElkZW50aWZpZXI+XG4gICAgICAgICAgPGNsYXNzTmFtZT5qYXZhLnV0aWwuTGlzdDwvY2xhc3NOYW1lPlxuICAgICAgICAgIDxmYWN0QWxpYXM+VGVhbTwvZmFjdEFsaWFzPlxuICAgICAgICAgIDxleHByZXNzaW9uQWxpYXM+cGVvcGxlPC9leHByZXNzaW9uQWxpYXM+XG4gICAgICAgICAgPGdlbmVyaWNUeXBlcz5cbiAgICAgICAgICAgIDxzdHJpbmc+dFBlcnNvbjwvc3RyaW5nPlxuICAgICAgICAgIDwvZ2VuZXJpY1R5cGVzPlxuICAgICAgICAgIDxjb2x1bW5XaWR0aD4yODk8L2NvbHVtbldpZHRoPlxuICAgICAgICAgIDxmYWN0TWFwcGluZ1ZhbHVlVHlwZT5OT1RfRVhQUkVTU0lPTjwvZmFjdE1hcHBpbmdWYWx1ZVR5cGU+XG4gICAgICAgIDwvRmFjdE1hcHBpbmc+XG4gICAgICAgIDxGYWN0TWFwcGluZz5cbiAgICAgICAgICA8ZXhwcmVzc2lvbkVsZW1lbnRzPlxuICAgICAgICAgICAgPEV4cHJlc3Npb25FbGVtZW50PlxuICAgICAgICAgICAgICA8c3RlcD5pc0h1Z2U8L3N0ZXA+XG4gICAgICAgICAgICA8L0V4cHJlc3Npb25FbGVtZW50PlxuICAgICAgICAgIDwvZXhwcmVzc2lvbkVsZW1lbnRzPlxuICAgICAgICAgIDxleHByZXNzaW9uSWRlbnRpZmllcj5cbiAgICAgICAgICAgIDxuYW1lPl80Qzg3RjU5Ri1EQkQyLTQyRTYtQTg4NC00RDcwMEFFREMyRDA8L25hbWU+XG4gICAgICAgICAgICA8dHlwZT5FWFBFQ1Q8L3R5cGU+XG4gICAgICAgICAgPC9leHByZXNzaW9uSWRlbnRpZmllcj5cbiAgICAgICAgICA8ZmFjdElkZW50aWZpZXI+XG4gICAgICAgICAgICA8bmFtZT5pc0h1Z2U8L25hbWU+XG4gICAgICAgICAgICA8Y2xhc3NOYW1lPmJvb2xlYW48L2NsYXNzTmFtZT5cbiAgICAgICAgICA8L2ZhY3RJZGVudGlmaWVyPlxuICAgICAgICAgIDxjbGFzc05hbWU+Ym9vbGVhbjwvY2xhc3NOYW1lPlxuICAgICAgICAgIDxmYWN0QWxpYXM+aXNIdWdlPC9mYWN0QWxpYXM+XG4gICAgICAgICAgPGV4cHJlc3Npb25BbGlhcz52YWx1ZTwvZXhwcmVzc2lvbkFsaWFzPlxuICAgICAgICAgIDxjb2x1bW5XaWR0aD4xMDA8L2NvbHVtbldpZHRoPlxuICAgICAgICAgIDxmYWN0TWFwcGluZ1ZhbHVlVHlwZT5OT1RfRVhQUkVTU0lPTjwvZmFjdE1hcHBpbmdWYWx1ZVR5cGU+XG4gICAgICAgIDwvRmFjdE1hcHBpbmc+XG4gICAgICA8L2ZhY3RNYXBwaW5ncz5cbiAgICA8L3NjZXNpbU1vZGVsRGVzY3JpcHRvcj5cbiAgICA8c2Nlc2ltRGF0YT5cbiAgICAgIDxTY2VuYXJpbz5cbiAgICAgICAgPGZhY3RNYXBwaW5nVmFsdWVzPlxuICAgICAgICAgIDxGYWN0TWFwcGluZ1ZhbHVlPlxuICAgICAgICAgICAgPGZhY3RJZGVudGlmaWVyPlxuICAgICAgICAgICAgICA8bmFtZT4jPC9uYW1lPlxuICAgICAgICAgICAgICA8Y2xhc3NOYW1lPmphdmEubGFuZy5JbnRlZ2VyPC9jbGFzc05hbWU+XG4gICAgICAgICAgICA8L2ZhY3RJZGVudGlmaWVyPlxuICAgICAgICAgICAgPGV4cHJlc3Npb25JZGVudGlmaWVyPlxuICAgICAgICAgICAgICA8bmFtZT5JbmRleDwvbmFtZT5cbiAgICAgICAgICAgICAgPHR5cGU+T1RIRVI8L3R5cGU+XG4gICAgICAgICAgICA8L2V4cHJlc3Npb25JZGVudGlmaWVyPlxuICAgICAgICAgICAgPHJhd1ZhbHVlIGNsYXNzPVwic3RyaW5nXCI+MTwvcmF3VmFsdWU+XG4gICAgICAgICAgPC9GYWN0TWFwcGluZ1ZhbHVlPlxuICAgICAgICAgIDxGYWN0TWFwcGluZ1ZhbHVlPlxuICAgICAgICAgICAgPGZhY3RJZGVudGlmaWVyPlxuICAgICAgICAgICAgICA8bmFtZT5TY2VuYXJpbyBkZXNjcmlwdGlvbjwvbmFtZT5cbiAgICAgICAgICAgICAgPGNsYXNzTmFtZT5qYXZhLmxhbmcuU3RyaW5nPC9jbGFzc05hbWU+XG4gICAgICAgICAgICA8L2ZhY3RJZGVudGlmaWVyPlxuICAgICAgICAgICAgPGV4cHJlc3Npb25JZGVudGlmaWVyPlxuICAgICAgICAgICAgICA8bmFtZT5EZXNjcmlwdGlvbjwvbmFtZT5cbiAgICAgICAgICAgICAgPHR5cGU+T1RIRVI8L3R5cGU+XG4gICAgICAgICAgICA8L2V4cHJlc3Npb25JZGVudGlmaWVyPlxuICAgICAgICAgICAgPHJhd1ZhbHVlIGNsYXNzPVwic3RyaW5nXCI+RW1wdHkgdGVhbTwvcmF3VmFsdWU+XG4gICAgICAgICAgPC9GYWN0TWFwcGluZ1ZhbHVlPlxuICAgICAgICAgIDxGYWN0TWFwcGluZ1ZhbHVlPlxuICAgICAgICAgICAgPGZhY3RJZGVudGlmaWVyPlxuICAgICAgICAgICAgICA8bmFtZT5UZWFtPC9uYW1lPlxuICAgICAgICAgICAgICA8Y2xhc3NOYW1lPnRUZWFtPC9jbGFzc05hbWU+XG4gICAgICAgICAgICA8L2ZhY3RJZGVudGlmaWVyPlxuICAgICAgICAgICAgPGV4cHJlc3Npb25JZGVudGlmaWVyPlxuICAgICAgICAgICAgICA8bmFtZT5fMzlBQjQyNDEtNzcyMi00NjA4LUEzNkItMzkwNjNEMUNFNjgxPC9uYW1lPlxuICAgICAgICAgICAgICA8dHlwZT5HSVZFTjwvdHlwZT5cbiAgICAgICAgICAgIDwvZXhwcmVzc2lvbklkZW50aWZpZXI+XG4gICAgICAgICAgICA8cmF3VmFsdWUgY2xhc3M9XCJzdHJpbmdcIj4mcXVvdDtUZWFtMSZxdW90OzwvcmF3VmFsdWU+XG4gICAgICAgICAgPC9GYWN0TWFwcGluZ1ZhbHVlPlxuICAgICAgICAgIDxGYWN0TWFwcGluZ1ZhbHVlPlxuICAgICAgICAgICAgPGZhY3RJZGVudGlmaWVyPlxuICAgICAgICAgICAgICA8bmFtZT5UZWFtPC9uYW1lPlxuICAgICAgICAgICAgICA8Y2xhc3NOYW1lPnRUZWFtPC9jbGFzc05hbWU+XG4gICAgICAgICAgICA8L2ZhY3RJZGVudGlmaWVyPlxuICAgICAgICAgICAgPGV4cHJlc3Npb25JZGVudGlmaWVyPlxuICAgICAgICAgICAgICA8bmFtZT5fREIwMzc5MjktMzQ4RC00NjMxLTkyQUItNzdBOTU2NUU0NjQ2PC9uYW1lPlxuICAgICAgICAgICAgICA8dHlwZT5HSVZFTjwvdHlwZT5cbiAgICAgICAgICAgIDwvZXhwcmVzc2lvbklkZW50aWZpZXI+XG4gICAgICAgICAgICA8cmF3VmFsdWUgY2xhc3M9XCJzdHJpbmdcIj5bXTwvcmF3VmFsdWU+XG4gICAgICAgICAgPC9GYWN0TWFwcGluZ1ZhbHVlPlxuICAgICAgICAgIDxGYWN0TWFwcGluZ1ZhbHVlPlxuICAgICAgICAgICAgPGZhY3RJZGVudGlmaWVyPlxuICAgICAgICAgICAgICA8bmFtZT5pc0h1Z2U8L25hbWU+XG4gICAgICAgICAgICAgIDxjbGFzc05hbWU+Ym9vbGVhbjwvY2xhc3NOYW1lPlxuICAgICAgICAgICAgPC9mYWN0SWRlbnRpZmllcj5cbiAgICAgICAgICAgIDxleHByZXNzaW9uSWRlbnRpZmllcj5cbiAgICAgICAgICAgICAgPG5hbWU+XzRDODdGNTlGLURCRDItNDJFNi1BODg0LTRENzAwQUVEQzJEMDwvbmFtZT5cbiAgICAgICAgICAgICAgPHR5cGU+RVhQRUNUPC90eXBlPlxuICAgICAgICAgICAgPC9leHByZXNzaW9uSWRlbnRpZmllcj5cbiAgICAgICAgICAgIDxyYXdWYWx1ZSBjbGFzcz1cInN0cmluZ1wiPmZhbHNlPC9yYXdWYWx1ZT5cbiAgICAgICAgICA8L0ZhY3RNYXBwaW5nVmFsdWU+XG4gICAgICAgIDwvZmFjdE1hcHBpbmdWYWx1ZXM+XG4gICAgICA8L1NjZW5hcmlvPlxuICAgICAgPFNjZW5hcmlvPlxuICAgICAgICA8ZmFjdE1hcHBpbmdWYWx1ZXM+XG4gICAgICAgICAgPEZhY3RNYXBwaW5nVmFsdWU+XG4gICAgICAgICAgICA8ZmFjdElkZW50aWZpZXI+XG4gICAgICAgICAgICAgIDxuYW1lPiM8L25hbWU+XG4gICAgICAgICAgICAgIDxjbGFzc05hbWU+amF2YS5sYW5nLkludGVnZXI8L2NsYXNzTmFtZT5cbiAgICAgICAgICAgIDwvZmFjdElkZW50aWZpZXI+XG4gICAgICAgICAgICA8ZXhwcmVzc2lvbklkZW50aWZpZXI+XG4gICAgICAgICAgICAgIDxuYW1lPkluZGV4PC9uYW1lPlxuICAgICAgICAgICAgICA8dHlwZT5PVEhFUjwvdHlwZT5cbiAgICAgICAgICAgIDwvZXhwcmVzc2lvbklkZW50aWZpZXI+XG4gICAgICAgICAgPC9GYWN0TWFwcGluZ1ZhbHVlPlxuICAgICAgICAgIDxGYWN0TWFwcGluZ1ZhbHVlPlxuICAgICAgICAgICAgPGZhY3RJZGVudGlmaWVyPlxuICAgICAgICAgICAgICA8bmFtZT5TY2VuYXJpbyBkZXNjcmlwdGlvbjwvbmFtZT5cbiAgICAgICAgICAgICAgPGNsYXNzTmFtZT5qYXZhLmxhbmcuU3RyaW5nPC9jbGFzc05hbWU+XG4gICAgICAgICAgICA8L2ZhY3RJZGVudGlmaWVyPlxuICAgICAgICAgICAgPGV4cHJlc3Npb25JZGVudGlmaWVyPlxuICAgICAgICAgICAgICA8bmFtZT5EZXNjcmlwdGlvbjwvbmFtZT5cbiAgICAgICAgICAgICAgPHR5cGU+T1RIRVI8L3R5cGU+XG4gICAgICAgICAgICA8L2V4cHJlc3Npb25JZGVudGlmaWVyPlxuICAgICAgICAgICAgPHJhd1ZhbHVlIGNsYXNzPVwic3RyaW5nXCI+QSB0aW55IGxpdHRsZSB0ZWFtPC9yYXdWYWx1ZT5cbiAgICAgICAgICA8L0ZhY3RNYXBwaW5nVmFsdWU+XG4gICAgICAgICAgPEZhY3RNYXBwaW5nVmFsdWU+XG4gICAgICAgICAgICA8ZmFjdElkZW50aWZpZXI+XG4gICAgICAgICAgICAgIDxuYW1lPlRlYW08L25hbWU+XG4gICAgICAgICAgICAgIDxjbGFzc05hbWU+dFRlYW08L2NsYXNzTmFtZT5cbiAgICAgICAgICAgIDwvZmFjdElkZW50aWZpZXI+XG4gICAgICAgICAgICA8ZXhwcmVzc2lvbklkZW50aWZpZXI+XG4gICAgICAgICAgICAgIDxuYW1lPl8zOUFCNDI0MS03NzIyLTQ2MDgtQTM2Qi0zOTA2M0QxQ0U2ODE8L25hbWU+XG4gICAgICAgICAgICAgIDx0eXBlPkdJVkVOPC90eXBlPlxuICAgICAgICAgICAgPC9leHByZXNzaW9uSWRlbnRpZmllcj5cbiAgICAgICAgICAgIDxyYXdWYWx1ZSBjbGFzcz1cInN0cmluZ1wiPiZxdW90O1RlYW0gMiZxdW90OzwvcmF3VmFsdWU+XG4gICAgICAgICAgPC9GYWN0TWFwcGluZ1ZhbHVlPlxuICAgICAgICAgIDxGYWN0TWFwcGluZ1ZhbHVlPlxuICAgICAgICAgICAgPGZhY3RJZGVudGlmaWVyPlxuICAgICAgICAgICAgICA8bmFtZT5UZWFtPC9uYW1lPlxuICAgICAgICAgICAgICA8Y2xhc3NOYW1lPnRUZWFtPC9jbGFzc05hbWU+XG4gICAgICAgICAgICA8L2ZhY3RJZGVudGlmaWVyPlxuICAgICAgICAgICAgPGV4cHJlc3Npb25JZGVudGlmaWVyPlxuICAgICAgICAgICAgICA8bmFtZT5fREIwMzc5MjktMzQ4RC00NjMxLTkyQUItNzdBOTU2NUU0NjQ2PC9uYW1lPlxuICAgICAgICAgICAgICA8dHlwZT5HSVZFTjwvdHlwZT5cbiAgICAgICAgICAgIDwvZXhwcmVzc2lvbklkZW50aWZpZXI+XG4gICAgICAgICAgICA8cmF3VmFsdWUgY2xhc3M9XCJzdHJpbmdcIj5beyZxdW90O25hbWUmcXVvdDs6ICZxdW90O1xcJnF1b3Q7Sm9oblxcJnF1b3Q7JnF1b3Q7LCAmcXVvdDthZ2UmcXVvdDs6ICZxdW90OzEwJnF1b3Q7fSwgeyZxdW90O25hbWUmcXVvdDs6ICZxdW90O1xcJnF1b3Q7QXNobGV5XFwmcXVvdDsmcXVvdDssICZxdW90O2FnZSZxdW90OzogJnF1b3Q7MTAmcXVvdDt9LCB7JnF1b3Q7bmFtZSZxdW90OzogJnF1b3Q7XFwmcXVvdDtQZXRlXFwmcXVvdDsmcXVvdDssICZxdW90O2FnZSZxdW90OzogJnF1b3Q7MTAmcXVvdDt9XTwvcmF3VmFsdWU+XG4gICAgICAgICAgPC9GYWN0TWFwcGluZ1ZhbHVlPlxuICAgICAgICAgIDxGYWN0TWFwcGluZ1ZhbHVlPlxuICAgICAgICAgICAgPGZhY3RJZGVudGlmaWVyPlxuICAgICAgICAgICAgICA8bmFtZT5pc0h1Z2U8L25hbWU+XG4gICAgICAgICAgICAgIDxjbGFzc05hbWU+Ym9vbGVhbjwvY2xhc3NOYW1lPlxuICAgICAgICAgICAgPC9mYWN0SWRlbnRpZmllcj5cbiAgICAgICAgICAgIDxleHByZXNzaW9uSWRlbnRpZmllcj5cbiAgICAgICAgICAgICAgPG5hbWU+XzRDODdGNTlGLURCRDItNDJFNi1BODg0LTRENzAwQUVEQzJEMDwvbmFtZT5cbiAgICAgICAgICAgICAgPHR5cGU+RVhQRUNUPC90eXBlPlxuICAgICAgICAgICAgPC9leHByZXNzaW9uSWRlbnRpZmllcj5cbiAgICAgICAgICAgIDxyYXdWYWx1ZSBjbGFzcz1cInN0cmluZ1wiPmZhbHNlPC9yYXdWYWx1ZT5cbiAgICAgICAgICA8L0ZhY3RNYXBwaW5nVmFsdWU+XG4gICAgICAgIDwvZmFjdE1hcHBpbmdWYWx1ZXM+XG4gICAgICA8L1NjZW5hcmlvPlxuICAgICAgPFNjZW5hcmlvPlxuICAgICAgICA8ZmFjdE1hcHBpbmdWYWx1ZXM+XG4gICAgICAgICAgPEZhY3RNYXBwaW5nVmFsdWU+XG4gICAgICAgICAgICA8ZmFjdElkZW50aWZpZXI+XG4gICAgICAgICAgICAgIDxuYW1lPiM8L25hbWU+XG4gICAgICAgICAgICAgIDxjbGFzc05hbWU+amF2YS5sYW5nLkludGVnZXI8L2NsYXNzTmFtZT5cbiAgICAgICAgICAgIDwvZmFjdElkZW50aWZpZXI+XG4gICAgICAgICAgICA8ZXhwcmVzc2lvbklkZW50aWZpZXI+XG4gICAgICAgICAgICAgIDxuYW1lPkluZGV4PC9uYW1lPlxuICAgICAgICAgICAgICA8dHlwZT5PVEhFUjwvdHlwZT5cbiAgICAgICAgICAgIDwvZXhwcmVzc2lvbklkZW50aWZpZXI+XG4gICAgICAgICAgPC9GYWN0TWFwcGluZ1ZhbHVlPlxuICAgICAgICAgIDxGYWN0TWFwcGluZ1ZhbHVlPlxuICAgICAgICAgICAgPGZhY3RJZGVudGlmaWVyPlxuICAgICAgICAgICAgICA8bmFtZT5TY2VuYXJpbyBkZXNjcmlwdGlvbjwvbmFtZT5cbiAgICAgICAgICAgICAgPGNsYXNzTmFtZT5qYXZhLmxhbmcuU3RyaW5nPC9jbGFzc05hbWU+XG4gICAgICAgICAgICA8L2ZhY3RJZGVudGlmaWVyPlxuICAgICAgICAgICAgPGV4cHJlc3Npb25JZGVudGlmaWVyPlxuICAgICAgICAgICAgICA8bmFtZT5EZXNjcmlwdGlvbjwvbmFtZT5cbiAgICAgICAgICAgICAgPHR5cGU+T1RIRVI8L3R5cGU+XG4gICAgICAgICAgICA8L2V4cHJlc3Npb25JZGVudGlmaWVyPlxuICAgICAgICAgICAgPHJhd1ZhbHVlIGNsYXNzPVwic3RyaW5nXCI+QSBIdWdlIHRlYW08L3Jhd1ZhbHVlPlxuICAgICAgICAgIDwvRmFjdE1hcHBpbmdWYWx1ZT5cbiAgICAgICAgICA8RmFjdE1hcHBpbmdWYWx1ZT5cbiAgICAgICAgICAgIDxmYWN0SWRlbnRpZmllcj5cbiAgICAgICAgICAgICAgPG5hbWU+VGVhbTwvbmFtZT5cbiAgICAgICAgICAgICAgPGNsYXNzTmFtZT50VGVhbTwvY2xhc3NOYW1lPlxuICAgICAgICAgICAgPC9mYWN0SWRlbnRpZmllcj5cbiAgICAgICAgICAgIDxleHByZXNzaW9uSWRlbnRpZmllcj5cbiAgICAgICAgICAgICAgPG5hbWU+XzM5QUI0MjQxLTc3MjItNDYwOC1BMzZCLTM5MDYzRDFDRTY4MTwvbmFtZT5cbiAgICAgICAgICAgICAgPHR5cGU+R0lWRU48L3R5cGU+XG4gICAgICAgICAgICA8L2V4cHJlc3Npb25JZGVudGlmaWVyPlxuICAgICAgICAgICAgPHJhd1ZhbHVlIGNsYXNzPVwic3RyaW5nXCI+JnF1b3Q7VGVhbSAzJnF1b3Q7PC9yYXdWYWx1ZT5cbiAgICAgICAgICA8L0ZhY3RNYXBwaW5nVmFsdWU+XG4gICAgICAgICAgPEZhY3RNYXBwaW5nVmFsdWU+XG4gICAgICAgICAgICA8ZmFjdElkZW50aWZpZXI+XG4gICAgICAgICAgICAgIDxuYW1lPlRlYW08L25hbWU+XG4gICAgICAgICAgICAgIDxjbGFzc05hbWU+dFRlYW08L2NsYXNzTmFtZT5cbiAgICAgICAgICAgIDwvZmFjdElkZW50aWZpZXI+XG4gICAgICAgICAgICA8ZXhwcmVzc2lvbklkZW50aWZpZXI+XG4gICAgICAgICAgICAgIDxuYW1lPl9EQjAzNzkyOS0zNDhELTQ2MzEtOTJBQi03N0E5NTY1RTQ2NDY8L25hbWU+XG4gICAgICAgICAgICAgIDx0eXBlPkdJVkVOPC90eXBlPlxuICAgICAgICAgICAgPC9leHByZXNzaW9uSWRlbnRpZmllcj5cbiAgICAgICAgICAgIDxyYXdWYWx1ZSBjbGFzcz1cInN0cmluZ1wiPlt7JnF1b3Q7bmFtZSZxdW90OzogJnF1b3Q7XFwmcXVvdDtKb2huXFwmcXVvdDsmcXVvdDssICZxdW90O2FnZSZxdW90OzogJnF1b3Q7MTAmcXVvdDt9LCB7JnF1b3Q7bmFtZSZxdW90OzogJnF1b3Q7XFwmcXVvdDtBc2hsZXlcXCZxdW90OyZxdW90OywgJnF1b3Q7YWdlJnF1b3Q7OiAmcXVvdDsxMCZxdW90O30sIHsmcXVvdDtuYW1lJnF1b3Q7OiAmcXVvdDtcXCZxdW90O1BldGVcXCZxdW90OyZxdW90OywgJnF1b3Q7YWdlJnF1b3Q7OiAmcXVvdDsxMCZxdW90O30sIHsmcXVvdDtuYW1lJnF1b3Q7OiAmcXVvdDtcXCZxdW90O0JlY2t5XFwmcXVvdDsmcXVvdDssICZxdW90O2FnZSZxdW90OzogJnF1b3Q7MjQmcXVvdDt9XTwvcmF3VmFsdWU+XG4gICAgICAgICAgPC9GYWN0TWFwcGluZ1ZhbHVlPlxuICAgICAgICAgIDxGYWN0TWFwcGluZ1ZhbHVlPlxuICAgICAgICAgICAgPGZhY3RJZGVudGlmaWVyPlxuICAgICAgICAgICAgICA8bmFtZT5pc0h1Z2U8L25hbWU+XG4gICAgICAgICAgICAgIDxjbGFzc05hbWU+Ym9vbGVhbjwvY2xhc3NOYW1lPlxuICAgICAgICAgICAgPC9mYWN0SWRlbnRpZmllcj5cbiAgICAgICAgICAgIDxleHByZXNzaW9uSWRlbnRpZmllcj5cbiAgICAgICAgICAgICAgPG5hbWU+XzRDODdGNTlGLURCRDItNDJFNi1BODg0LTRENzAwQUVEQzJEMDwvbmFtZT5cbiAgICAgICAgICAgICAgPHR5cGU+RVhQRUNUPC90eXBlPlxuICAgICAgICAgICAgPC9leHByZXNzaW9uSWRlbnRpZmllcj5cbiAgICAgICAgICAgIDxyYXdWYWx1ZSBjbGFzcz1cInN0cmluZ1wiPnRydWU8L3Jhd1ZhbHVlPlxuICAgICAgICAgIDwvRmFjdE1hcHBpbmdWYWx1ZT5cbiAgICAgICAgPC9mYWN0TWFwcGluZ1ZhbHVlcz5cbiAgICAgIDwvU2NlbmFyaW8+XG4gICAgPC9zY2VzaW1EYXRhPlxuICA8L3NpbXVsYXRpb24+XG4gIDxiYWNrZ3JvdW5kPlxuICAgIDxzY2VzaW1Nb2RlbERlc2NyaXB0b3I+XG4gICAgICA8ZmFjdE1hcHBpbmdzPlxuICAgICAgICA8RmFjdE1hcHBpbmc+XG4gICAgICAgICAgPGV4cHJlc3Npb25FbGVtZW50cyAvPlxuICAgICAgICAgIDxleHByZXNzaW9uSWRlbnRpZmllcj5cbiAgICAgICAgICAgIDxuYW1lPjF8MTwvbmFtZT5cbiAgICAgICAgICAgIDx0eXBlPkdJVkVOPC90eXBlPlxuICAgICAgICAgIDwvZXhwcmVzc2lvbklkZW50aWZpZXI+XG4gICAgICAgICAgPGZhY3RJZGVudGlmaWVyPlxuICAgICAgICAgICAgPG5hbWU+RW1wdHk8L25hbWU+XG4gICAgICAgICAgICA8Y2xhc3NOYW1lPmphdmEubGFuZy5Wb2lkPC9jbGFzc05hbWU+XG4gICAgICAgICAgPC9mYWN0SWRlbnRpZmllcj5cbiAgICAgICAgICA8Y2xhc3NOYW1lPmphdmEubGFuZy5Wb2lkPC9jbGFzc05hbWU+XG4gICAgICAgICAgPGZhY3RBbGlhcz5JTlNUQU5DRS0xPC9mYWN0QWxpYXM+XG4gICAgICAgICAgPGV4cHJlc3Npb25BbGlhcz5QUk9QRVJUWS0xPC9leHByZXNzaW9uQWxpYXM+XG4gICAgICAgICAgPGNvbHVtbldpZHRoPjE1MDwvY29sdW1uV2lkdGg+XG4gICAgICAgICAgPGZhY3RNYXBwaW5nVmFsdWVUeXBlPk5PVF9FWFBSRVNTSU9OPC9mYWN0TWFwcGluZ1ZhbHVlVHlwZT5cbiAgICAgICAgPC9GYWN0TWFwcGluZz5cbiAgICAgIDwvZmFjdE1hcHBpbmdzPlxuICAgIDwvc2Nlc2ltTW9kZWxEZXNjcmlwdG9yPlxuICAgIDxzY2VzaW1EYXRhPlxuICAgICAgPEJhY2tncm91bmREYXRhPlxuICAgICAgICA8ZmFjdE1hcHBpbmdWYWx1ZXM+XG4gICAgICAgICAgPEZhY3RNYXBwaW5nVmFsdWU+XG4gICAgICAgICAgICA8ZmFjdElkZW50aWZpZXI+XG4gICAgICAgICAgICAgIDxuYW1lPkVtcHR5PC9uYW1lPlxuICAgICAgICAgICAgICA8Y2xhc3NOYW1lPmphdmEubGFuZy5Wb2lkPC9jbGFzc05hbWU+XG4gICAgICAgICAgICA8L2ZhY3RJZGVudGlmaWVyPlxuICAgICAgICAgICAgPGV4cHJlc3Npb25JZGVudGlmaWVyPlxuICAgICAgICAgICAgICA8bmFtZT4xfDE8L25hbWU+XG4gICAgICAgICAgICAgIDx0eXBlPkdJVkVOPC90eXBlPlxuICAgICAgICAgICAgPC9leHByZXNzaW9uSWRlbnRpZmllcj5cbiAgICAgICAgICA8L0ZhY3RNYXBwaW5nVmFsdWU+XG4gICAgICAgIDwvZmFjdE1hcHBpbmdWYWx1ZXM+XG4gICAgICA8L0JhY2tncm91bmREYXRhPlxuICAgIDwvc2Nlc2ltRGF0YT5cbiAgPC9iYWNrZ3JvdW5kPlxuICA8c2V0dGluZ3M+XG4gICAgPGRtbkZpbGVQYXRoPi4uLy4uL21haW4vcmVzb3VyY2VzL0NvbXBsZXhDb2xsZWN0aW9uLmRtbjwvZG1uRmlsZVBhdGg+XG4gICAgPHR5cGU+RE1OPC90eXBlPlxuICAgIDxkbW5OYW1lc3BhY2U+aHR0cHM6Ly9raWUub3JnL2Rtbi9fOEQ2MzE2RTctRUQ0My00NTI4LUJCMEItMkE3NTg3QjIwODUzPC9kbW5OYW1lc3BhY2U+XG4gICAgPGRtbk5hbWU+RE1OX0VFOEI4ODIwLUMzOTYtNDVEOC1CQjAyLTMzMTdCNUM0M0MzRjwvZG1uTmFtZT5cbiAgICA8c2tpcEZyb21CdWlsZD5mYWxzZTwvc2tpcEZyb21CdWlsZD5cbiAgPC9zZXR0aW5ncz5cbiAgPGltcG9ydHM+XG4gICAgPGltcG9ydHMgLz5cbiAgPC9pbXBvcnRzPlxuPC9TY2VuYXJpb1NpbXVsYXRpb25Nb2RlbD5cbmA7XG5jb25zdCBtZXRhOiBNZXRhPHt9PiA9IHtcbiAgdGl0bGU6IFwiTWlzYy9Db21wbGV4Q29sbGVjdGlvblwiLFxuICBjb21wb25lbnQ6IFRlc3RTY2VuYXJpb0VkaXRvcixcbiAgaW5jbHVkZVN0b3JpZXM6IC9eW0EtWl0vXG59O1xuZXhwb3J0IGRlZmF1bHQgbWV0YTtcbnR5cGUgU3RvcnkgPSBTdG9yeU9iajxTdG9yeWJvb2tUZXN0U2NlbmFyaW9FZGl0b3JQcm9wcz47XG5jb25zdCBtYXJzaGFsbGVyID0gZ2V0TWFyc2hhbGxlcihjb2xsZWN0aW9uU2Nlc2ltKTtcbmNvbnN0IGN1cnJlbnRNb2RlbCA9IG1hcnNoYWxsZXIucGFyc2VyLnBhcnNlKCk7XG5jb25zdCBkbW5Nb2RlbCA9IHtcbiAgbm9ybWFsaXplZFBvc2l4UGF0aFJlbGF0aXZlVG9UaGVPcGVuRmlsZTogXCJkZXYtd2ViYXBwL2F2YWlsYWJsZS1kbW4tbW9kZWxzL2NvbXBsZXhfY29sbGVjdGlvbi5kbW5cIixcbiAgdHlwZTogXCJkbW5cIixcbiAgbW9kZWw6IG5vcm1hbGl6ZShnZXREbW5NYXJzaGFsbGVyKENPTVBMRVhfQ09MTEVDVElPTiA/PyBcIlwiLCB7XG4gICAgdXBncmFkZVRvOiBcImxhdGVzdFwiXG4gIH0pLnBhcnNlci5wYXJzZSgpKSxcbiAgc3ZnOiBcIlwiXG59O1xuZXhwb3J0IGNvbnN0IENvbXBsZXhDb2xsZWN0aW9uOiBTdG9yeSA9IHtcbiAgcmVuZGVyOiBhcmdzID0+IFNjZVNpbUVkaXRvcldyYXBwZXIoYXJncyksXG4gIGFyZ3M6IHtcbiAgICBtb2RlbDogbWFyc2hhbGxlci5wYXJzZXIucGFyc2UoKSxcbiAgICBvcGVuRmlsZU5vcm1hbGl6ZWRQb3NpeFBhdGhSZWxhdGl2ZVRvVGhlV29ya3NwYWNlUm9vdDogY29sbGVjdGlvbkZpbGVOYW1lLFxuICAgIGV4dGVybmFsTW9kZWxzQnlOYW1lc3BhY2U6IG5ldyBNYXAoW1tcImh0dHBzOi8va2llLm9yZy9kbW4vXzhENjMxNkU3LUVENDMtNDUyOC1CQjBCLTJBNzU4N0IyMDg1M1wiLCBkbW5Nb2RlbF1dKSxcbiAgICB4bWw6IG1hcnNoYWxsZXIuYnVpbGRlci5idWlsZChjdXJyZW50TW9kZWwpLFxuICAgIG9uUmVxdWVzdEV4dGVybmFsTW9kZWxzQXZhaWxhYmxlVG9JbmNsdWRlOiAoKSA9PiBQcm9taXNlLnJlc29sdmUoW1wiY29tcGxleF9jb2xsZWN0aW9uLmRtblwiXSksXG4gICAgb25SZXF1ZXN0RXh0ZXJuYWxNb2RlbEJ5UGF0aDogKCkgPT4gUHJvbWlzZS5yZXNvbHZlKGRtbk1vZGVsKVxuICB9XG59O1xuQ29tcGxleENvbGxlY3Rpb24ucGFyYW1ldGVycyA9IHtcbiAgLi4uQ29tcGxleENvbGxlY3Rpb24ucGFyYW1ldGVycyxcbiAgZG9jczoge1xuICAgIC4uLkNvbXBsZXhDb2xsZWN0aW9uLnBhcmFtZXRlcnM/LmRvY3MsXG4gICAgc291cmNlOiB7XG4gICAgICBvcmlnaW5hbFNvdXJjZTogXCJ7XFxuICByZW5kZXI6IGFyZ3MgPT4gU2NlU2ltRWRpdG9yV3JhcHBlcihhcmdzKSxcXG4gIGFyZ3M6IHtcXG4gICAgbW9kZWw6IG1hcnNoYWxsZXIucGFyc2VyLnBhcnNlKCksXFxuICAgIG9wZW5GaWxlTm9ybWFsaXplZFBvc2l4UGF0aFJlbGF0aXZlVG9UaGVXb3Jrc3BhY2VSb290OiBjb2xsZWN0aW9uRmlsZU5hbWUsXFxuICAgIGV4dGVybmFsTW9kZWxzQnlOYW1lc3BhY2U6IG5ldyBNYXAoW1tcXFwiaHR0cHM6Ly9raWUub3JnL2Rtbi9fOEQ2MzE2RTctRUQ0My00NTI4LUJCMEItMkE3NTg3QjIwODUzXFxcIiwgZG1uTW9kZWxdXSksXFxuICAgIHhtbDogbWFyc2hhbGxlci5idWlsZGVyLmJ1aWxkKGN1cnJlbnRNb2RlbCksXFxuICAgIG9uUmVxdWVzdEV4dGVybmFsTW9kZWxzQXZhaWxhYmxlVG9JbmNsdWRlOiAoKSA9PiBQcm9taXNlLnJlc29sdmUoW1xcXCJjb21wbGV4X2NvbGxlY3Rpb24uZG1uXFxcIl0pLFxcbiAgICBvblJlcXVlc3RFeHRlcm5hbE1vZGVsQnlQYXRoOiAoKSA9PiBQcm9taXNlLnJlc29sdmUoZG1uTW9kZWwpXFxuICB9XFxufVwiLFxuICAgICAgLi4uQ29tcGxleENvbGxlY3Rpb24ucGFyYW1ldGVycz8uZG9jcz8uc291cmNlXG4gICAgfVxuICB9XG59OyJdLCJuYW1lcyI6WyJnZXRNYXJzaGFsbGVyIiwiVGVzdFNjZW5hcmlvRWRpdG9yIiwiU2NlU2ltRWRpdG9yV3JhcHBlciIsIm5vcm1hbGl6ZSIsImdldERtbk1hcnNoYWxsZXIiLCJDT01QTEVYX0NPTExFQ1RJT04iLCJjb2xsZWN0aW9uRmlsZU5hbWUiLCJjb2xsZWN0aW9uU2Nlc2ltIiwibWV0YSIsInRpdGxlIiwiY29tcG9uZW50IiwiaW5jbHVkZVN0b3JpZXMiLCJtYXJzaGFsbGVyIiwiY3VycmVudE1vZGVsIiwicGFyc2VyIiwicGFyc2UiLCJkbW5Nb2RlbCIsIm5vcm1hbGl6ZWRQb3NpeFBhdGhSZWxhdGl2ZVRvVGhlT3BlbkZpbGUiLCJ0eXBlIiwibW9kZWwiLCJ1cGdyYWRlVG8iLCJzdmciLCJDb21wbGV4Q29sbGVjdGlvbiIsInJlbmRlciIsImFyZ3MiLCJvcGVuRmlsZU5vcm1hbGl6ZWRQb3NpeFBhdGhSZWxhdGl2ZVRvVGhlV29ya3NwYWNlUm9vdCIsImV4dGVybmFsTW9kZWxzQnlOYW1lc3BhY2UiLCJNYXAiLCJ4bWwiLCJidWlsZGVyIiwiYnVpbGQiLCJvblJlcXVlc3RFeHRlcm5hbE1vZGVsc0F2YWlsYWJsZVRvSW5jbHVkZSIsIlByb21pc2UiLCJyZXNvbHZlIiwib25SZXF1ZXN0RXh0ZXJuYWxNb2RlbEJ5UGF0aCIsInBhcmFtZXRlcnMiLCJkb2NzIiwiX2EiLCJzb3VyY2UiLCJvcmlnaW5hbFNvdXJjZSIsIl9jIiwiX2IiLCJfX25hbWVkRXhwb3J0c09yZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==