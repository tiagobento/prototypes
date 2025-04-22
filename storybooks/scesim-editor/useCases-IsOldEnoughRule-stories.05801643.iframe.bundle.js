"use strict";
(self["webpackChunk_kie_tools_scesim_editor"] = self["webpackChunk_kie_tools_scesim_editor"] || []).push([["useCases-IsOldEnoughRule-stories"],{

/***/ "./stories/useCases/IsOldEnoughRule.stories.tsx":
/*!******************************************************!*\
  !*** ./stories/useCases/IsOldEnoughRule.stories.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IsOldEnough: () => (/* binding */ IsOldEnough),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isOldEnoughDrl: () => (/* binding */ isOldEnoughDrl),
/* harmony export */   isOldEnoughDrlFileName: () => (/* binding */ isOldEnoughDrlFileName)
/* harmony export */ });
/* harmony import */ var _kie_tools_scesim_marshaller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @kie-tools/scesim-marshaller */ "../scesim-marshaller/dist/index.js");
/* harmony import */ var _src_TestScenarioEditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/TestScenarioEditor */ "./src/TestScenarioEditor.tsx");
/* harmony import */ var _scesimEditorStoriesWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scesimEditorStoriesWrapper */ "./stories/scesimEditorStoriesWrapper.tsx");
var _a, _b, _c;



const isOldEnoughDrlFileName = "IsOldEnough.scesim";
const isOldEnoughDrl = `<ScenarioSimulationModel version="1.8" xmlns="https://kie.org/scesim/1.8">
<simulation>
  <scesimModelDescriptor>
    <factMappings>
      <FactMapping>
        <expressionElements/>
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
        <factMappingValueType>NOT_EXPRESSION</factMappingValueType>
        <columnWidth>70.0</columnWidth>
      </FactMapping>
      <FactMapping>
        <expressionElements/>
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
        <factMappingValueType>NOT_EXPRESSION</factMappingValueType>
        <columnWidth>300.0</columnWidth>
      </FactMapping>
      <FactMapping>
        <expressionElements>
          <ExpressionElement>
            <step>Applicant</step>
          </ExpressionElement>
          <ExpressionElement>
            <step>age</step>
          </ExpressionElement>
        </expressionElements>
        <expressionIdentifier>
          <name>1|1</name>
          <type>GIVEN</type>
        </expressionIdentifier>
        <factIdentifier>
          <name>1|1</name>
          <className>mortgages.mortgages.Applicant</className>
        </factIdentifier>
        <className>java.lang.Integer</className>
        <factAlias>Applicant</factAlias>
        <expressionAlias>age</expressionAlias>
        <factMappingValueType>NOT_EXPRESSION</factMappingValueType>
        <columnWidth>212.60000000000002</columnWidth>
      </FactMapping>
      <FactMapping>
        <expressionElements>
          <ExpressionElement>
            <step>LoanApplication</step>
          </ExpressionElement>
          <ExpressionElement>
            <step>approved</step>
          </ExpressionElement>
        </expressionElements>
        <expressionIdentifier>
          <name>1591876615315</name>
          <type>GIVEN</type>
        </expressionIdentifier>
        <factIdentifier>
          <name>1591622209590</name>
          <className>mortgages.mortgages.LoanApplication</className>
        </factIdentifier>
        <className>java.lang.Boolean</className>
        <factAlias>LoanApplication</factAlias>
        <expressionAlias>approved</expressionAlias>
        <factMappingValueType>NOT_EXPRESSION</factMappingValueType>
        <columnWidth>212.60000000000002</columnWidth>
      </FactMapping>
      <FactMapping>
        <expressionElements>
          <ExpressionElement>
            <step>IncomeSource</step>
          </ExpressionElement>
          <ExpressionElement>
            <step>amount</step>
          </ExpressionElement>
        </expressionElements>
        <expressionIdentifier>
          <name>1591622221147</name>
          <type>GIVEN</type>
        </expressionIdentifier>
        <factIdentifier>
          <name>1591622221147</name>
          <className>mortgages.mortgages.IncomeSource</className>
        </factIdentifier>
        <className>java.lang.Integer</className>
        <factAlias>IncomeSource</factAlias>
        <expressionAlias>amount</expressionAlias>
        <factMappingValueType>NOT_EXPRESSION</factMappingValueType>
        <columnWidth>212.60000000000002</columnWidth>
      </FactMapping>
      <FactMapping>
        <expressionElements>
          <ExpressionElement>
            <step>LoanApplication</step>
          </ExpressionElement>
          <ExpressionElement>
            <step>approved</step>
          </ExpressionElement>
        </expressionElements>
        <expressionIdentifier>
          <name>1|2</name>
          <type>EXPECT</type>
        </expressionIdentifier>
        <factIdentifier>
          <name>1591622209590</name>
          <className>mortgages.mortgages.LoanApplication</className>
        </factIdentifier>
        <className>java.lang.Boolean</className>
        <factAlias>LoanApplication</factAlias>
        <expressionAlias>approved</expressionAlias>
        <factMappingValueType>NOT_EXPRESSION</factMappingValueType>
        <columnWidth>212.60000000000002</columnWidth>
      </FactMapping>
      <FactMapping>
        <expressionElements>
          <ExpressionElement>
            <step>LoanApplication</step>
          </ExpressionElement>
          <ExpressionElement>
            <step>explanation</step>
          </ExpressionElement>
        </expressionElements>
        <expressionIdentifier>
          <name>1591874776961</name>
          <type>EXPECT</type>
        </expressionIdentifier>
        <factIdentifier>
          <name>1591622209590</name>
          <className>mortgages.mortgages.LoanApplication</className>
        </factIdentifier>
        <className>java.lang.String</className>
        <factAlias>LoanApplication</factAlias>
        <expressionAlias>explanation</expressionAlias>
        <factMappingValueType>NOT_EXPRESSION</factMappingValueType>
        <columnWidth>212.60000000000002</columnWidth>
      </FactMapping>
    </factMappings>
  </scesimModelDescriptor>
  <scesimData>
    <Scenario>
      <factMappingValues>
        <FactMappingValue>
          <factIdentifier>
            <name>Scenario description</name>
            <className>java.lang.String</className>
          </factIdentifier>
          <expressionIdentifier>
            <name>Description</name>
            <type>OTHER</type>
          </expressionIdentifier>
          <rawValue class="string">Young Bob want a loan</rawValue>
        </FactMappingValue>
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
            <name>1|1</name>
            <className>mortgages.mortgages.Applicant</className>
          </factIdentifier>
          <expressionIdentifier>
            <name>1|1</name>
            <type>GIVEN</type>
          </expressionIdentifier>
          <rawValue class="string">17</rawValue>
        </FactMappingValue>
        <FactMappingValue>
          <factIdentifier>
            <name>1591622221147</name>
            <className>mortgages.mortgages.IncomeSource</className>
          </factIdentifier>
          <expressionIdentifier>
            <name>1591622221147</name>
            <type>GIVEN</type>
          </expressionIdentifier>
          <rawValue class="string">0</rawValue>
        </FactMappingValue>
        <FactMappingValue>
          <factIdentifier>
            <name>1591622209590</name>
            <className>mortgages.mortgages.LoanApplication</className>
          </factIdentifier>
          <expressionIdentifier>
            <name>1|2</name>
            <type>EXPECT</type>
          </expressionIdentifier>
          <rawValue class="string">false</rawValue>
        </FactMappingValue>
        <FactMappingValue>
          <factIdentifier>
            <name>1591622209590</name>
            <className>mortgages.mortgages.LoanApplication</className>
          </factIdentifier>
          <expressionIdentifier>
            <name>1591874776961</name>
            <type>EXPECT</type>
          </expressionIdentifier>
          <rawValue class="string">Underage</rawValue>
        </FactMappingValue>
        <FactMappingValue>
          <factIdentifier>
            <name>1591622209590</name>
            <className>mortgages.mortgages.LoanApplication</className>
          </factIdentifier>
          <expressionIdentifier>
            <name>1591876615315</name>
            <type>GIVEN</type>
          </expressionIdentifier>
          <rawValue class="string">true</rawValue>
        </FactMappingValue>
      </factMappingValues>
    </Scenario>
    <Scenario>
      <factMappingValues>
        <FactMappingValue>
          <factIdentifier>
            <name>Scenario description</name>
            <className>java.lang.String</className>
          </factIdentifier>
          <expressionIdentifier>
            <name>Description</name>
            <type>OTHER</type>
          </expressionIdentifier>
          <rawValue class="string">Adult Anna  want a loan</rawValue>
        </FactMappingValue>
        <FactMappingValue>
          <factIdentifier>
            <name>#</name>
            <className>java.lang.Integer</className>
          </factIdentifier>
          <expressionIdentifier>
            <name>Index</name>
            <type>OTHER</type>
          </expressionIdentifier>
          <rawValue class="string">2</rawValue>
        </FactMappingValue>
        <FactMappingValue>
          <factIdentifier>
            <name>1|1</name>
            <className>mortgages.mortgages.Applicant</className>
          </factIdentifier>
          <expressionIdentifier>
            <name>1|1</name>
            <type>GIVEN</type>
          </expressionIdentifier>
          <rawValue class="string">27</rawValue>
        </FactMappingValue>
        <FactMappingValue>
          <factIdentifier>
            <name>1591622221147</name>
            <className>mortgages.mortgages.IncomeSource</className>
          </factIdentifier>
          <expressionIdentifier>
            <name>1591622221147</name>
            <type>GIVEN</type>
          </expressionIdentifier>
          <rawValue class="string">0</rawValue>
        </FactMappingValue>
        <FactMappingValue>
          <factIdentifier>
            <name>1591622209590</name>
            <className>mortgages.mortgages.LoanApplication</className>
          </factIdentifier>
          <expressionIdentifier>
            <name>1|2</name>
            <type>EXPECT</type>
          </expressionIdentifier>
          <rawValue class="string">true</rawValue>
        </FactMappingValue>
        <FactMappingValue>
          <factIdentifier>
            <name>1591622209590</name>
            <className>mortgages.mortgages.LoanApplication</className>
          </factIdentifier>
          <expressionIdentifier>
            <name>1591874776961</name>
            <type>EXPECT</type>
          </expressionIdentifier>
          <rawValue class="string">null</rawValue>
        </FactMappingValue>
        <FactMappingValue>
          <factIdentifier>
            <name>1591622209590</name>
            <className>mortgages.mortgages.LoanApplication</className>
          </factIdentifier>
          <expressionIdentifier>
            <name>1591876615315</name>
            <type>GIVEN</type>
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
        <expressionElements/>
        <expressionIdentifier>
          <name>1|1</name>
          <type>GIVEN</type>
        </expressionIdentifier>
        <factIdentifier>
          <name>Empty</name>
          <className>java.lang.Void</className>
        </factIdentifier>
        <className>java.lang.Void</className>
        <factAlias>INSTANCE 1</factAlias>
        <expressionAlias>PROPERTY-1</expressionAlias>
        <factMappingValueType>NOT_EXPRESSION</factMappingValueType>
        <columnWidth>114.0</columnWidth>
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
  <type>RULE</type>
  <skipFromBuild>false</skipFromBuild>
  <stateless>false</stateless>
</settings>
<imports>
  <imports/>
</imports>
</ScenarioSimulationModel>
`;
const meta = {
  title: "Use Cases/Is Old Enough",
  component: _src_TestScenarioEditor__WEBPACK_IMPORTED_MODULE_1__.TestScenarioEditor,
  includeStories: /^[A-Z]/
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (meta);
const marshaller = (0,_kie_tools_scesim_marshaller__WEBPACK_IMPORTED_MODULE_0__.getMarshaller)(isOldEnoughDrl);
const model = marshaller.parser.parse();
const IsOldEnough = {
  args: {
    model: marshaller.parser.parse(),
    xml: marshaller.builder.build(model),
    openFileNormalizedPosixPathRelativeToTheWorkspaceRoot: isOldEnoughDrlFileName
  },
  render: args => (0,_scesimEditorStoriesWrapper__WEBPACK_IMPORTED_MODULE_2__.SceSimEditorWrapper)(args)
};
IsOldEnough.parameters = {
  ...IsOldEnough.parameters,
  docs: {
    ...((_a = IsOldEnough.parameters) === null || _a === void 0 ? void 0 : _a.docs),
    source: {
      originalSource: "{\n  args: {\n    model: marshaller.parser.parse(),\n    xml: marshaller.builder.build(model),\n    openFileNormalizedPosixPathRelativeToTheWorkspaceRoot: isOldEnoughDrlFileName\n  },\n  render: args => SceSimEditorWrapper(args)\n}",
      ...((_c = (_b = IsOldEnough.parameters) === null || _b === void 0 ? void 0 : _b.docs) === null || _c === void 0 ? void 0 : _c.source)
    }
  }
};
const __namedExportsOrder = ["isOldEnoughDrlFileName", "isOldEnoughDrl", "IsOldEnough"];

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlQ2FzZXMtSXNPbGRFbm91Z2hSdWxlLXN0b3JpZXMuMDU4MDE2NDMuaWZyYW1lLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQjZEO0FBQ0s7QUFDb0M7QUFDL0YsTUFBTUcsc0JBQXNCLEdBQUcsb0JBQW9CO0FBQ25ELE1BQU1DLGNBQWMsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBMlc3QjtBQUNELE1BQU1DLElBQUksR0FBYTtFQUNyQkMsS0FBSyxFQUFFLHlCQUF5QjtFQUNoQ0MsU0FBUyxFQUFFTix1RUFBa0I7RUFDN0JPLGNBQWMsRUFBRTtDQUNqQjtBQUNELGlFQUFlSCxJQUFJLEVBQUM7QUFFcEIsTUFBTUksVUFBVSxHQUFHVCwyRUFBYSxDQUFDSSxjQUFjLENBQUM7QUFDaEQsTUFBTU0sS0FBSyxHQUFHRCxVQUFVLENBQUNFLE1BQU0sQ0FBQ0MsS0FBSyxFQUFFO0FBQ2hDLE1BQU1DLFdBQVcsR0FBVTtFQUNoQ0MsSUFBSSxFQUFFO0lBQ0pKLEtBQUssRUFBRUQsVUFBVSxDQUFDRSxNQUFNLENBQUNDLEtBQUssRUFBRTtJQUNoQ0csR0FBRyxFQUFFTixVQUFVLENBQUNPLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDUCxLQUFLLENBQUM7SUFDcENRLHFEQUFxRCxFQUFFZjtHQUN4RDtFQUNEZ0IsTUFBTSxFQUFFTCxJQUFJLElBQUlaLGdGQUFtQixDQUFDWSxJQUFJO0NBQ3pDO0FBQ0RELFdBQVcsQ0FBQ08sVUFBVSxHQUFHO0VBQ3ZCLEdBQUdQLFdBQVcsQ0FBQ08sVUFBVTtFQUN6QkMsSUFBSSxFQUFFO0lBQ0osSUFBRyxDQUFBQyxFQUFBLEdBQUFULFdBQVcsQ0FBQ08sVUFBVSxjQUFBRSxFQUFBLHVCQUFBQSxFQUFBLENBQUVELElBQUk7SUFDL0JFLE1BQU0sRUFBRTtNQUNOQyxjQUFjLEVBQUUseU9BQXlPO01BQ3pQLElBQUcsQ0FBQUMsRUFBQSxJQUFBQyxFQUFBLEdBQUFiLFdBQVcsQ0FBQ08sVUFBVSxjQUFBTSxFQUFBLHVCQUFBQSxFQUFBLENBQUVMLElBQUksY0FBQUksRUFBQSx1QkFBQUEsRUFBQSxDQUFFRixNQUFNOzs7Q0FHNUM7QUFBQyxNQUFBSSxtQkFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL0BraWUtdG9vbHMvc2Nlc2ltLWVkaXRvci8uL3N0b3JpZXMvdXNlQ2FzZXMvSXNPbGRFbm91Z2hSdWxlLnN0b3JpZXMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBMaWNlbnNlZCB0byB0aGUgQXBhY2hlIFNvZnR3YXJlIEZvdW5kYXRpb24gKEFTRikgdW5kZXIgb25lXG4gKiBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gIFNlZSB0aGUgTk9USUNFIGZpbGVcbiAqIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uXG4gKiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC4gIFRoZSBBU0YgbGljZW5zZXMgdGhpcyBmaWxlXG4gKiB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlXG4gKiBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2VcbiAqIHdpdGggdGhlIExpY2Vuc2UuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLFxuICogc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cbiAqIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXG4gKiBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGVcbiAqIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnNcbiAqIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB0eXBlIHsgTWV0YSwgU3RvcnlPYmogfSBmcm9tIFwiQHN0b3J5Ym9vay9yZWFjdFwiO1xuaW1wb3J0IHsgZ2V0TWFyc2hhbGxlciB9IGZyb20gXCJAa2llLXRvb2xzL3NjZXNpbS1tYXJzaGFsbGVyXCI7XG5pbXBvcnQgeyBUZXN0U2NlbmFyaW9FZGl0b3IgfSBmcm9tIFwiLi4vLi4vc3JjL1Rlc3RTY2VuYXJpb0VkaXRvclwiO1xuaW1wb3J0IHsgU2NlU2ltRWRpdG9yV3JhcHBlciwgU3Rvcnlib29rVGVzdFNjZW5hcmlvRWRpdG9yUHJvcHMgfSBmcm9tIFwiLi4vc2Nlc2ltRWRpdG9yU3Rvcmllc1dyYXBwZXJcIjtcbmV4cG9ydCBjb25zdCBpc09sZEVub3VnaERybEZpbGVOYW1lID0gXCJJc09sZEVub3VnaC5zY2VzaW1cIjtcbmV4cG9ydCBjb25zdCBpc09sZEVub3VnaERybCA9IGA8U2NlbmFyaW9TaW11bGF0aW9uTW9kZWwgdmVyc2lvbj1cIjEuOFwiIHhtbG5zPVwiaHR0cHM6Ly9raWUub3JnL3NjZXNpbS8xLjhcIj5cbjxzaW11bGF0aW9uPlxuICA8c2Nlc2ltTW9kZWxEZXNjcmlwdG9yPlxuICAgIDxmYWN0TWFwcGluZ3M+XG4gICAgICA8RmFjdE1hcHBpbmc+XG4gICAgICAgIDxleHByZXNzaW9uRWxlbWVudHMvPlxuICAgICAgICA8ZXhwcmVzc2lvbklkZW50aWZpZXI+XG4gICAgICAgICAgPG5hbWU+SW5kZXg8L25hbWU+XG4gICAgICAgICAgPHR5cGU+T1RIRVI8L3R5cGU+XG4gICAgICAgIDwvZXhwcmVzc2lvbklkZW50aWZpZXI+XG4gICAgICAgIDxmYWN0SWRlbnRpZmllcj5cbiAgICAgICAgICA8bmFtZT4jPC9uYW1lPlxuICAgICAgICAgIDxjbGFzc05hbWU+amF2YS5sYW5nLkludGVnZXI8L2NsYXNzTmFtZT5cbiAgICAgICAgPC9mYWN0SWRlbnRpZmllcj5cbiAgICAgICAgPGNsYXNzTmFtZT5qYXZhLmxhbmcuSW50ZWdlcjwvY2xhc3NOYW1lPlxuICAgICAgICA8ZmFjdEFsaWFzPiM8L2ZhY3RBbGlhcz5cbiAgICAgICAgPGZhY3RNYXBwaW5nVmFsdWVUeXBlPk5PVF9FWFBSRVNTSU9OPC9mYWN0TWFwcGluZ1ZhbHVlVHlwZT5cbiAgICAgICAgPGNvbHVtbldpZHRoPjcwLjA8L2NvbHVtbldpZHRoPlxuICAgICAgPC9GYWN0TWFwcGluZz5cbiAgICAgIDxGYWN0TWFwcGluZz5cbiAgICAgICAgPGV4cHJlc3Npb25FbGVtZW50cy8+XG4gICAgICAgIDxleHByZXNzaW9uSWRlbnRpZmllcj5cbiAgICAgICAgICA8bmFtZT5EZXNjcmlwdGlvbjwvbmFtZT5cbiAgICAgICAgICA8dHlwZT5PVEhFUjwvdHlwZT5cbiAgICAgICAgPC9leHByZXNzaW9uSWRlbnRpZmllcj5cbiAgICAgICAgPGZhY3RJZGVudGlmaWVyPlxuICAgICAgICAgIDxuYW1lPlNjZW5hcmlvIGRlc2NyaXB0aW9uPC9uYW1lPlxuICAgICAgICAgIDxjbGFzc05hbWU+amF2YS5sYW5nLlN0cmluZzwvY2xhc3NOYW1lPlxuICAgICAgICA8L2ZhY3RJZGVudGlmaWVyPlxuICAgICAgICA8Y2xhc3NOYW1lPmphdmEubGFuZy5TdHJpbmc8L2NsYXNzTmFtZT5cbiAgICAgICAgPGZhY3RBbGlhcz5TY2VuYXJpbyBkZXNjcmlwdGlvbjwvZmFjdEFsaWFzPlxuICAgICAgICA8ZmFjdE1hcHBpbmdWYWx1ZVR5cGU+Tk9UX0VYUFJFU1NJT048L2ZhY3RNYXBwaW5nVmFsdWVUeXBlPlxuICAgICAgICA8Y29sdW1uV2lkdGg+MzAwLjA8L2NvbHVtbldpZHRoPlxuICAgICAgPC9GYWN0TWFwcGluZz5cbiAgICAgIDxGYWN0TWFwcGluZz5cbiAgICAgICAgPGV4cHJlc3Npb25FbGVtZW50cz5cbiAgICAgICAgICA8RXhwcmVzc2lvbkVsZW1lbnQ+XG4gICAgICAgICAgICA8c3RlcD5BcHBsaWNhbnQ8L3N0ZXA+XG4gICAgICAgICAgPC9FeHByZXNzaW9uRWxlbWVudD5cbiAgICAgICAgICA8RXhwcmVzc2lvbkVsZW1lbnQ+XG4gICAgICAgICAgICA8c3RlcD5hZ2U8L3N0ZXA+XG4gICAgICAgICAgPC9FeHByZXNzaW9uRWxlbWVudD5cbiAgICAgICAgPC9leHByZXNzaW9uRWxlbWVudHM+XG4gICAgICAgIDxleHByZXNzaW9uSWRlbnRpZmllcj5cbiAgICAgICAgICA8bmFtZT4xfDE8L25hbWU+XG4gICAgICAgICAgPHR5cGU+R0lWRU48L3R5cGU+XG4gICAgICAgIDwvZXhwcmVzc2lvbklkZW50aWZpZXI+XG4gICAgICAgIDxmYWN0SWRlbnRpZmllcj5cbiAgICAgICAgICA8bmFtZT4xfDE8L25hbWU+XG4gICAgICAgICAgPGNsYXNzTmFtZT5tb3J0Z2FnZXMubW9ydGdhZ2VzLkFwcGxpY2FudDwvY2xhc3NOYW1lPlxuICAgICAgICA8L2ZhY3RJZGVudGlmaWVyPlxuICAgICAgICA8Y2xhc3NOYW1lPmphdmEubGFuZy5JbnRlZ2VyPC9jbGFzc05hbWU+XG4gICAgICAgIDxmYWN0QWxpYXM+QXBwbGljYW50PC9mYWN0QWxpYXM+XG4gICAgICAgIDxleHByZXNzaW9uQWxpYXM+YWdlPC9leHByZXNzaW9uQWxpYXM+XG4gICAgICAgIDxmYWN0TWFwcGluZ1ZhbHVlVHlwZT5OT1RfRVhQUkVTU0lPTjwvZmFjdE1hcHBpbmdWYWx1ZVR5cGU+XG4gICAgICAgIDxjb2x1bW5XaWR0aD4yMTIuNjAwMDAwMDAwMDAwMDI8L2NvbHVtbldpZHRoPlxuICAgICAgPC9GYWN0TWFwcGluZz5cbiAgICAgIDxGYWN0TWFwcGluZz5cbiAgICAgICAgPGV4cHJlc3Npb25FbGVtZW50cz5cbiAgICAgICAgICA8RXhwcmVzc2lvbkVsZW1lbnQ+XG4gICAgICAgICAgICA8c3RlcD5Mb2FuQXBwbGljYXRpb248L3N0ZXA+XG4gICAgICAgICAgPC9FeHByZXNzaW9uRWxlbWVudD5cbiAgICAgICAgICA8RXhwcmVzc2lvbkVsZW1lbnQ+XG4gICAgICAgICAgICA8c3RlcD5hcHByb3ZlZDwvc3RlcD5cbiAgICAgICAgICA8L0V4cHJlc3Npb25FbGVtZW50PlxuICAgICAgICA8L2V4cHJlc3Npb25FbGVtZW50cz5cbiAgICAgICAgPGV4cHJlc3Npb25JZGVudGlmaWVyPlxuICAgICAgICAgIDxuYW1lPjE1OTE4NzY2MTUzMTU8L25hbWU+XG4gICAgICAgICAgPHR5cGU+R0lWRU48L3R5cGU+XG4gICAgICAgIDwvZXhwcmVzc2lvbklkZW50aWZpZXI+XG4gICAgICAgIDxmYWN0SWRlbnRpZmllcj5cbiAgICAgICAgICA8bmFtZT4xNTkxNjIyMjA5NTkwPC9uYW1lPlxuICAgICAgICAgIDxjbGFzc05hbWU+bW9ydGdhZ2VzLm1vcnRnYWdlcy5Mb2FuQXBwbGljYXRpb248L2NsYXNzTmFtZT5cbiAgICAgICAgPC9mYWN0SWRlbnRpZmllcj5cbiAgICAgICAgPGNsYXNzTmFtZT5qYXZhLmxhbmcuQm9vbGVhbjwvY2xhc3NOYW1lPlxuICAgICAgICA8ZmFjdEFsaWFzPkxvYW5BcHBsaWNhdGlvbjwvZmFjdEFsaWFzPlxuICAgICAgICA8ZXhwcmVzc2lvbkFsaWFzPmFwcHJvdmVkPC9leHByZXNzaW9uQWxpYXM+XG4gICAgICAgIDxmYWN0TWFwcGluZ1ZhbHVlVHlwZT5OT1RfRVhQUkVTU0lPTjwvZmFjdE1hcHBpbmdWYWx1ZVR5cGU+XG4gICAgICAgIDxjb2x1bW5XaWR0aD4yMTIuNjAwMDAwMDAwMDAwMDI8L2NvbHVtbldpZHRoPlxuICAgICAgPC9GYWN0TWFwcGluZz5cbiAgICAgIDxGYWN0TWFwcGluZz5cbiAgICAgICAgPGV4cHJlc3Npb25FbGVtZW50cz5cbiAgICAgICAgICA8RXhwcmVzc2lvbkVsZW1lbnQ+XG4gICAgICAgICAgICA8c3RlcD5JbmNvbWVTb3VyY2U8L3N0ZXA+XG4gICAgICAgICAgPC9FeHByZXNzaW9uRWxlbWVudD5cbiAgICAgICAgICA8RXhwcmVzc2lvbkVsZW1lbnQ+XG4gICAgICAgICAgICA8c3RlcD5hbW91bnQ8L3N0ZXA+XG4gICAgICAgICAgPC9FeHByZXNzaW9uRWxlbWVudD5cbiAgICAgICAgPC9leHByZXNzaW9uRWxlbWVudHM+XG4gICAgICAgIDxleHByZXNzaW9uSWRlbnRpZmllcj5cbiAgICAgICAgICA8bmFtZT4xNTkxNjIyMjIxMTQ3PC9uYW1lPlxuICAgICAgICAgIDx0eXBlPkdJVkVOPC90eXBlPlxuICAgICAgICA8L2V4cHJlc3Npb25JZGVudGlmaWVyPlxuICAgICAgICA8ZmFjdElkZW50aWZpZXI+XG4gICAgICAgICAgPG5hbWU+MTU5MTYyMjIyMTE0NzwvbmFtZT5cbiAgICAgICAgICA8Y2xhc3NOYW1lPm1vcnRnYWdlcy5tb3J0Z2FnZXMuSW5jb21lU291cmNlPC9jbGFzc05hbWU+XG4gICAgICAgIDwvZmFjdElkZW50aWZpZXI+XG4gICAgICAgIDxjbGFzc05hbWU+amF2YS5sYW5nLkludGVnZXI8L2NsYXNzTmFtZT5cbiAgICAgICAgPGZhY3RBbGlhcz5JbmNvbWVTb3VyY2U8L2ZhY3RBbGlhcz5cbiAgICAgICAgPGV4cHJlc3Npb25BbGlhcz5hbW91bnQ8L2V4cHJlc3Npb25BbGlhcz5cbiAgICAgICAgPGZhY3RNYXBwaW5nVmFsdWVUeXBlPk5PVF9FWFBSRVNTSU9OPC9mYWN0TWFwcGluZ1ZhbHVlVHlwZT5cbiAgICAgICAgPGNvbHVtbldpZHRoPjIxMi42MDAwMDAwMDAwMDAwMjwvY29sdW1uV2lkdGg+XG4gICAgICA8L0ZhY3RNYXBwaW5nPlxuICAgICAgPEZhY3RNYXBwaW5nPlxuICAgICAgICA8ZXhwcmVzc2lvbkVsZW1lbnRzPlxuICAgICAgICAgIDxFeHByZXNzaW9uRWxlbWVudD5cbiAgICAgICAgICAgIDxzdGVwPkxvYW5BcHBsaWNhdGlvbjwvc3RlcD5cbiAgICAgICAgICA8L0V4cHJlc3Npb25FbGVtZW50PlxuICAgICAgICAgIDxFeHByZXNzaW9uRWxlbWVudD5cbiAgICAgICAgICAgIDxzdGVwPmFwcHJvdmVkPC9zdGVwPlxuICAgICAgICAgIDwvRXhwcmVzc2lvbkVsZW1lbnQ+XG4gICAgICAgIDwvZXhwcmVzc2lvbkVsZW1lbnRzPlxuICAgICAgICA8ZXhwcmVzc2lvbklkZW50aWZpZXI+XG4gICAgICAgICAgPG5hbWU+MXwyPC9uYW1lPlxuICAgICAgICAgIDx0eXBlPkVYUEVDVDwvdHlwZT5cbiAgICAgICAgPC9leHByZXNzaW9uSWRlbnRpZmllcj5cbiAgICAgICAgPGZhY3RJZGVudGlmaWVyPlxuICAgICAgICAgIDxuYW1lPjE1OTE2MjIyMDk1OTA8L25hbWU+XG4gICAgICAgICAgPGNsYXNzTmFtZT5tb3J0Z2FnZXMubW9ydGdhZ2VzLkxvYW5BcHBsaWNhdGlvbjwvY2xhc3NOYW1lPlxuICAgICAgICA8L2ZhY3RJZGVudGlmaWVyPlxuICAgICAgICA8Y2xhc3NOYW1lPmphdmEubGFuZy5Cb29sZWFuPC9jbGFzc05hbWU+XG4gICAgICAgIDxmYWN0QWxpYXM+TG9hbkFwcGxpY2F0aW9uPC9mYWN0QWxpYXM+XG4gICAgICAgIDxleHByZXNzaW9uQWxpYXM+YXBwcm92ZWQ8L2V4cHJlc3Npb25BbGlhcz5cbiAgICAgICAgPGZhY3RNYXBwaW5nVmFsdWVUeXBlPk5PVF9FWFBSRVNTSU9OPC9mYWN0TWFwcGluZ1ZhbHVlVHlwZT5cbiAgICAgICAgPGNvbHVtbldpZHRoPjIxMi42MDAwMDAwMDAwMDAwMjwvY29sdW1uV2lkdGg+XG4gICAgICA8L0ZhY3RNYXBwaW5nPlxuICAgICAgPEZhY3RNYXBwaW5nPlxuICAgICAgICA8ZXhwcmVzc2lvbkVsZW1lbnRzPlxuICAgICAgICAgIDxFeHByZXNzaW9uRWxlbWVudD5cbiAgICAgICAgICAgIDxzdGVwPkxvYW5BcHBsaWNhdGlvbjwvc3RlcD5cbiAgICAgICAgICA8L0V4cHJlc3Npb25FbGVtZW50PlxuICAgICAgICAgIDxFeHByZXNzaW9uRWxlbWVudD5cbiAgICAgICAgICAgIDxzdGVwPmV4cGxhbmF0aW9uPC9zdGVwPlxuICAgICAgICAgIDwvRXhwcmVzc2lvbkVsZW1lbnQ+XG4gICAgICAgIDwvZXhwcmVzc2lvbkVsZW1lbnRzPlxuICAgICAgICA8ZXhwcmVzc2lvbklkZW50aWZpZXI+XG4gICAgICAgICAgPG5hbWU+MTU5MTg3NDc3Njk2MTwvbmFtZT5cbiAgICAgICAgICA8dHlwZT5FWFBFQ1Q8L3R5cGU+XG4gICAgICAgIDwvZXhwcmVzc2lvbklkZW50aWZpZXI+XG4gICAgICAgIDxmYWN0SWRlbnRpZmllcj5cbiAgICAgICAgICA8bmFtZT4xNTkxNjIyMjA5NTkwPC9uYW1lPlxuICAgICAgICAgIDxjbGFzc05hbWU+bW9ydGdhZ2VzLm1vcnRnYWdlcy5Mb2FuQXBwbGljYXRpb248L2NsYXNzTmFtZT5cbiAgICAgICAgPC9mYWN0SWRlbnRpZmllcj5cbiAgICAgICAgPGNsYXNzTmFtZT5qYXZhLmxhbmcuU3RyaW5nPC9jbGFzc05hbWU+XG4gICAgICAgIDxmYWN0QWxpYXM+TG9hbkFwcGxpY2F0aW9uPC9mYWN0QWxpYXM+XG4gICAgICAgIDxleHByZXNzaW9uQWxpYXM+ZXhwbGFuYXRpb248L2V4cHJlc3Npb25BbGlhcz5cbiAgICAgICAgPGZhY3RNYXBwaW5nVmFsdWVUeXBlPk5PVF9FWFBSRVNTSU9OPC9mYWN0TWFwcGluZ1ZhbHVlVHlwZT5cbiAgICAgICAgPGNvbHVtbldpZHRoPjIxMi42MDAwMDAwMDAwMDAwMjwvY29sdW1uV2lkdGg+XG4gICAgICA8L0ZhY3RNYXBwaW5nPlxuICAgIDwvZmFjdE1hcHBpbmdzPlxuICA8L3NjZXNpbU1vZGVsRGVzY3JpcHRvcj5cbiAgPHNjZXNpbURhdGE+XG4gICAgPFNjZW5hcmlvPlxuICAgICAgPGZhY3RNYXBwaW5nVmFsdWVzPlxuICAgICAgICA8RmFjdE1hcHBpbmdWYWx1ZT5cbiAgICAgICAgICA8ZmFjdElkZW50aWZpZXI+XG4gICAgICAgICAgICA8bmFtZT5TY2VuYXJpbyBkZXNjcmlwdGlvbjwvbmFtZT5cbiAgICAgICAgICAgIDxjbGFzc05hbWU+amF2YS5sYW5nLlN0cmluZzwvY2xhc3NOYW1lPlxuICAgICAgICAgIDwvZmFjdElkZW50aWZpZXI+XG4gICAgICAgICAgPGV4cHJlc3Npb25JZGVudGlmaWVyPlxuICAgICAgICAgICAgPG5hbWU+RGVzY3JpcHRpb248L25hbWU+XG4gICAgICAgICAgICA8dHlwZT5PVEhFUjwvdHlwZT5cbiAgICAgICAgICA8L2V4cHJlc3Npb25JZGVudGlmaWVyPlxuICAgICAgICAgIDxyYXdWYWx1ZSBjbGFzcz1cInN0cmluZ1wiPllvdW5nIEJvYiB3YW50IGEgbG9hbjwvcmF3VmFsdWU+XG4gICAgICAgIDwvRmFjdE1hcHBpbmdWYWx1ZT5cbiAgICAgICAgPEZhY3RNYXBwaW5nVmFsdWU+XG4gICAgICAgICAgPGZhY3RJZGVudGlmaWVyPlxuICAgICAgICAgICAgPG5hbWU+IzwvbmFtZT5cbiAgICAgICAgICAgIDxjbGFzc05hbWU+amF2YS5sYW5nLkludGVnZXI8L2NsYXNzTmFtZT5cbiAgICAgICAgICA8L2ZhY3RJZGVudGlmaWVyPlxuICAgICAgICAgIDxleHByZXNzaW9uSWRlbnRpZmllcj5cbiAgICAgICAgICAgIDxuYW1lPkluZGV4PC9uYW1lPlxuICAgICAgICAgICAgPHR5cGU+T1RIRVI8L3R5cGU+XG4gICAgICAgICAgPC9leHByZXNzaW9uSWRlbnRpZmllcj5cbiAgICAgICAgICA8cmF3VmFsdWUgY2xhc3M9XCJzdHJpbmdcIj4xPC9yYXdWYWx1ZT5cbiAgICAgICAgPC9GYWN0TWFwcGluZ1ZhbHVlPlxuICAgICAgICA8RmFjdE1hcHBpbmdWYWx1ZT5cbiAgICAgICAgICA8ZmFjdElkZW50aWZpZXI+XG4gICAgICAgICAgICA8bmFtZT4xfDE8L25hbWU+XG4gICAgICAgICAgICA8Y2xhc3NOYW1lPm1vcnRnYWdlcy5tb3J0Z2FnZXMuQXBwbGljYW50PC9jbGFzc05hbWU+XG4gICAgICAgICAgPC9mYWN0SWRlbnRpZmllcj5cbiAgICAgICAgICA8ZXhwcmVzc2lvbklkZW50aWZpZXI+XG4gICAgICAgICAgICA8bmFtZT4xfDE8L25hbWU+XG4gICAgICAgICAgICA8dHlwZT5HSVZFTjwvdHlwZT5cbiAgICAgICAgICA8L2V4cHJlc3Npb25JZGVudGlmaWVyPlxuICAgICAgICAgIDxyYXdWYWx1ZSBjbGFzcz1cInN0cmluZ1wiPjE3PC9yYXdWYWx1ZT5cbiAgICAgICAgPC9GYWN0TWFwcGluZ1ZhbHVlPlxuICAgICAgICA8RmFjdE1hcHBpbmdWYWx1ZT5cbiAgICAgICAgICA8ZmFjdElkZW50aWZpZXI+XG4gICAgICAgICAgICA8bmFtZT4xNTkxNjIyMjIxMTQ3PC9uYW1lPlxuICAgICAgICAgICAgPGNsYXNzTmFtZT5tb3J0Z2FnZXMubW9ydGdhZ2VzLkluY29tZVNvdXJjZTwvY2xhc3NOYW1lPlxuICAgICAgICAgIDwvZmFjdElkZW50aWZpZXI+XG4gICAgICAgICAgPGV4cHJlc3Npb25JZGVudGlmaWVyPlxuICAgICAgICAgICAgPG5hbWU+MTU5MTYyMjIyMTE0NzwvbmFtZT5cbiAgICAgICAgICAgIDx0eXBlPkdJVkVOPC90eXBlPlxuICAgICAgICAgIDwvZXhwcmVzc2lvbklkZW50aWZpZXI+XG4gICAgICAgICAgPHJhd1ZhbHVlIGNsYXNzPVwic3RyaW5nXCI+MDwvcmF3VmFsdWU+XG4gICAgICAgIDwvRmFjdE1hcHBpbmdWYWx1ZT5cbiAgICAgICAgPEZhY3RNYXBwaW5nVmFsdWU+XG4gICAgICAgICAgPGZhY3RJZGVudGlmaWVyPlxuICAgICAgICAgICAgPG5hbWU+MTU5MTYyMjIwOTU5MDwvbmFtZT5cbiAgICAgICAgICAgIDxjbGFzc05hbWU+bW9ydGdhZ2VzLm1vcnRnYWdlcy5Mb2FuQXBwbGljYXRpb248L2NsYXNzTmFtZT5cbiAgICAgICAgICA8L2ZhY3RJZGVudGlmaWVyPlxuICAgICAgICAgIDxleHByZXNzaW9uSWRlbnRpZmllcj5cbiAgICAgICAgICAgIDxuYW1lPjF8MjwvbmFtZT5cbiAgICAgICAgICAgIDx0eXBlPkVYUEVDVDwvdHlwZT5cbiAgICAgICAgICA8L2V4cHJlc3Npb25JZGVudGlmaWVyPlxuICAgICAgICAgIDxyYXdWYWx1ZSBjbGFzcz1cInN0cmluZ1wiPmZhbHNlPC9yYXdWYWx1ZT5cbiAgICAgICAgPC9GYWN0TWFwcGluZ1ZhbHVlPlxuICAgICAgICA8RmFjdE1hcHBpbmdWYWx1ZT5cbiAgICAgICAgICA8ZmFjdElkZW50aWZpZXI+XG4gICAgICAgICAgICA8bmFtZT4xNTkxNjIyMjA5NTkwPC9uYW1lPlxuICAgICAgICAgICAgPGNsYXNzTmFtZT5tb3J0Z2FnZXMubW9ydGdhZ2VzLkxvYW5BcHBsaWNhdGlvbjwvY2xhc3NOYW1lPlxuICAgICAgICAgIDwvZmFjdElkZW50aWZpZXI+XG4gICAgICAgICAgPGV4cHJlc3Npb25JZGVudGlmaWVyPlxuICAgICAgICAgICAgPG5hbWU+MTU5MTg3NDc3Njk2MTwvbmFtZT5cbiAgICAgICAgICAgIDx0eXBlPkVYUEVDVDwvdHlwZT5cbiAgICAgICAgICA8L2V4cHJlc3Npb25JZGVudGlmaWVyPlxuICAgICAgICAgIDxyYXdWYWx1ZSBjbGFzcz1cInN0cmluZ1wiPlVuZGVyYWdlPC9yYXdWYWx1ZT5cbiAgICAgICAgPC9GYWN0TWFwcGluZ1ZhbHVlPlxuICAgICAgICA8RmFjdE1hcHBpbmdWYWx1ZT5cbiAgICAgICAgICA8ZmFjdElkZW50aWZpZXI+XG4gICAgICAgICAgICA8bmFtZT4xNTkxNjIyMjA5NTkwPC9uYW1lPlxuICAgICAgICAgICAgPGNsYXNzTmFtZT5tb3J0Z2FnZXMubW9ydGdhZ2VzLkxvYW5BcHBsaWNhdGlvbjwvY2xhc3NOYW1lPlxuICAgICAgICAgIDwvZmFjdElkZW50aWZpZXI+XG4gICAgICAgICAgPGV4cHJlc3Npb25JZGVudGlmaWVyPlxuICAgICAgICAgICAgPG5hbWU+MTU5MTg3NjYxNTMxNTwvbmFtZT5cbiAgICAgICAgICAgIDx0eXBlPkdJVkVOPC90eXBlPlxuICAgICAgICAgIDwvZXhwcmVzc2lvbklkZW50aWZpZXI+XG4gICAgICAgICAgPHJhd1ZhbHVlIGNsYXNzPVwic3RyaW5nXCI+dHJ1ZTwvcmF3VmFsdWU+XG4gICAgICAgIDwvRmFjdE1hcHBpbmdWYWx1ZT5cbiAgICAgIDwvZmFjdE1hcHBpbmdWYWx1ZXM+XG4gICAgPC9TY2VuYXJpbz5cbiAgICA8U2NlbmFyaW8+XG4gICAgICA8ZmFjdE1hcHBpbmdWYWx1ZXM+XG4gICAgICAgIDxGYWN0TWFwcGluZ1ZhbHVlPlxuICAgICAgICAgIDxmYWN0SWRlbnRpZmllcj5cbiAgICAgICAgICAgIDxuYW1lPlNjZW5hcmlvIGRlc2NyaXB0aW9uPC9uYW1lPlxuICAgICAgICAgICAgPGNsYXNzTmFtZT5qYXZhLmxhbmcuU3RyaW5nPC9jbGFzc05hbWU+XG4gICAgICAgICAgPC9mYWN0SWRlbnRpZmllcj5cbiAgICAgICAgICA8ZXhwcmVzc2lvbklkZW50aWZpZXI+XG4gICAgICAgICAgICA8bmFtZT5EZXNjcmlwdGlvbjwvbmFtZT5cbiAgICAgICAgICAgIDx0eXBlPk9USEVSPC90eXBlPlxuICAgICAgICAgIDwvZXhwcmVzc2lvbklkZW50aWZpZXI+XG4gICAgICAgICAgPHJhd1ZhbHVlIGNsYXNzPVwic3RyaW5nXCI+QWR1bHQgQW5uYSAgd2FudCBhIGxvYW48L3Jhd1ZhbHVlPlxuICAgICAgICA8L0ZhY3RNYXBwaW5nVmFsdWU+XG4gICAgICAgIDxGYWN0TWFwcGluZ1ZhbHVlPlxuICAgICAgICAgIDxmYWN0SWRlbnRpZmllcj5cbiAgICAgICAgICAgIDxuYW1lPiM8L25hbWU+XG4gICAgICAgICAgICA8Y2xhc3NOYW1lPmphdmEubGFuZy5JbnRlZ2VyPC9jbGFzc05hbWU+XG4gICAgICAgICAgPC9mYWN0SWRlbnRpZmllcj5cbiAgICAgICAgICA8ZXhwcmVzc2lvbklkZW50aWZpZXI+XG4gICAgICAgICAgICA8bmFtZT5JbmRleDwvbmFtZT5cbiAgICAgICAgICAgIDx0eXBlPk9USEVSPC90eXBlPlxuICAgICAgICAgIDwvZXhwcmVzc2lvbklkZW50aWZpZXI+XG4gICAgICAgICAgPHJhd1ZhbHVlIGNsYXNzPVwic3RyaW5nXCI+MjwvcmF3VmFsdWU+XG4gICAgICAgIDwvRmFjdE1hcHBpbmdWYWx1ZT5cbiAgICAgICAgPEZhY3RNYXBwaW5nVmFsdWU+XG4gICAgICAgICAgPGZhY3RJZGVudGlmaWVyPlxuICAgICAgICAgICAgPG5hbWU+MXwxPC9uYW1lPlxuICAgICAgICAgICAgPGNsYXNzTmFtZT5tb3J0Z2FnZXMubW9ydGdhZ2VzLkFwcGxpY2FudDwvY2xhc3NOYW1lPlxuICAgICAgICAgIDwvZmFjdElkZW50aWZpZXI+XG4gICAgICAgICAgPGV4cHJlc3Npb25JZGVudGlmaWVyPlxuICAgICAgICAgICAgPG5hbWU+MXwxPC9uYW1lPlxuICAgICAgICAgICAgPHR5cGU+R0lWRU48L3R5cGU+XG4gICAgICAgICAgPC9leHByZXNzaW9uSWRlbnRpZmllcj5cbiAgICAgICAgICA8cmF3VmFsdWUgY2xhc3M9XCJzdHJpbmdcIj4yNzwvcmF3VmFsdWU+XG4gICAgICAgIDwvRmFjdE1hcHBpbmdWYWx1ZT5cbiAgICAgICAgPEZhY3RNYXBwaW5nVmFsdWU+XG4gICAgICAgICAgPGZhY3RJZGVudGlmaWVyPlxuICAgICAgICAgICAgPG5hbWU+MTU5MTYyMjIyMTE0NzwvbmFtZT5cbiAgICAgICAgICAgIDxjbGFzc05hbWU+bW9ydGdhZ2VzLm1vcnRnYWdlcy5JbmNvbWVTb3VyY2U8L2NsYXNzTmFtZT5cbiAgICAgICAgICA8L2ZhY3RJZGVudGlmaWVyPlxuICAgICAgICAgIDxleHByZXNzaW9uSWRlbnRpZmllcj5cbiAgICAgICAgICAgIDxuYW1lPjE1OTE2MjIyMjExNDc8L25hbWU+XG4gICAgICAgICAgICA8dHlwZT5HSVZFTjwvdHlwZT5cbiAgICAgICAgICA8L2V4cHJlc3Npb25JZGVudGlmaWVyPlxuICAgICAgICAgIDxyYXdWYWx1ZSBjbGFzcz1cInN0cmluZ1wiPjA8L3Jhd1ZhbHVlPlxuICAgICAgICA8L0ZhY3RNYXBwaW5nVmFsdWU+XG4gICAgICAgIDxGYWN0TWFwcGluZ1ZhbHVlPlxuICAgICAgICAgIDxmYWN0SWRlbnRpZmllcj5cbiAgICAgICAgICAgIDxuYW1lPjE1OTE2MjIyMDk1OTA8L25hbWU+XG4gICAgICAgICAgICA8Y2xhc3NOYW1lPm1vcnRnYWdlcy5tb3J0Z2FnZXMuTG9hbkFwcGxpY2F0aW9uPC9jbGFzc05hbWU+XG4gICAgICAgICAgPC9mYWN0SWRlbnRpZmllcj5cbiAgICAgICAgICA8ZXhwcmVzc2lvbklkZW50aWZpZXI+XG4gICAgICAgICAgICA8bmFtZT4xfDI8L25hbWU+XG4gICAgICAgICAgICA8dHlwZT5FWFBFQ1Q8L3R5cGU+XG4gICAgICAgICAgPC9leHByZXNzaW9uSWRlbnRpZmllcj5cbiAgICAgICAgICA8cmF3VmFsdWUgY2xhc3M9XCJzdHJpbmdcIj50cnVlPC9yYXdWYWx1ZT5cbiAgICAgICAgPC9GYWN0TWFwcGluZ1ZhbHVlPlxuICAgICAgICA8RmFjdE1hcHBpbmdWYWx1ZT5cbiAgICAgICAgICA8ZmFjdElkZW50aWZpZXI+XG4gICAgICAgICAgICA8bmFtZT4xNTkxNjIyMjA5NTkwPC9uYW1lPlxuICAgICAgICAgICAgPGNsYXNzTmFtZT5tb3J0Z2FnZXMubW9ydGdhZ2VzLkxvYW5BcHBsaWNhdGlvbjwvY2xhc3NOYW1lPlxuICAgICAgICAgIDwvZmFjdElkZW50aWZpZXI+XG4gICAgICAgICAgPGV4cHJlc3Npb25JZGVudGlmaWVyPlxuICAgICAgICAgICAgPG5hbWU+MTU5MTg3NDc3Njk2MTwvbmFtZT5cbiAgICAgICAgICAgIDx0eXBlPkVYUEVDVDwvdHlwZT5cbiAgICAgICAgICA8L2V4cHJlc3Npb25JZGVudGlmaWVyPlxuICAgICAgICAgIDxyYXdWYWx1ZSBjbGFzcz1cInN0cmluZ1wiPm51bGw8L3Jhd1ZhbHVlPlxuICAgICAgICA8L0ZhY3RNYXBwaW5nVmFsdWU+XG4gICAgICAgIDxGYWN0TWFwcGluZ1ZhbHVlPlxuICAgICAgICAgIDxmYWN0SWRlbnRpZmllcj5cbiAgICAgICAgICAgIDxuYW1lPjE1OTE2MjIyMDk1OTA8L25hbWU+XG4gICAgICAgICAgICA8Y2xhc3NOYW1lPm1vcnRnYWdlcy5tb3J0Z2FnZXMuTG9hbkFwcGxpY2F0aW9uPC9jbGFzc05hbWU+XG4gICAgICAgICAgPC9mYWN0SWRlbnRpZmllcj5cbiAgICAgICAgICA8ZXhwcmVzc2lvbklkZW50aWZpZXI+XG4gICAgICAgICAgICA8bmFtZT4xNTkxODc2NjE1MzE1PC9uYW1lPlxuICAgICAgICAgICAgPHR5cGU+R0lWRU48L3R5cGU+XG4gICAgICAgICAgPC9leHByZXNzaW9uSWRlbnRpZmllcj5cbiAgICAgICAgICA8cmF3VmFsdWUgY2xhc3M9XCJzdHJpbmdcIj50cnVlPC9yYXdWYWx1ZT5cbiAgICAgICAgPC9GYWN0TWFwcGluZ1ZhbHVlPlxuICAgICAgPC9mYWN0TWFwcGluZ1ZhbHVlcz5cbiAgICA8L1NjZW5hcmlvPlxuICA8L3NjZXNpbURhdGE+XG48L3NpbXVsYXRpb24+XG48YmFja2dyb3VuZD5cbiAgPHNjZXNpbU1vZGVsRGVzY3JpcHRvcj5cbiAgICA8ZmFjdE1hcHBpbmdzPlxuICAgICAgPEZhY3RNYXBwaW5nPlxuICAgICAgICA8ZXhwcmVzc2lvbkVsZW1lbnRzLz5cbiAgICAgICAgPGV4cHJlc3Npb25JZGVudGlmaWVyPlxuICAgICAgICAgIDxuYW1lPjF8MTwvbmFtZT5cbiAgICAgICAgICA8dHlwZT5HSVZFTjwvdHlwZT5cbiAgICAgICAgPC9leHByZXNzaW9uSWRlbnRpZmllcj5cbiAgICAgICAgPGZhY3RJZGVudGlmaWVyPlxuICAgICAgICAgIDxuYW1lPkVtcHR5PC9uYW1lPlxuICAgICAgICAgIDxjbGFzc05hbWU+amF2YS5sYW5nLlZvaWQ8L2NsYXNzTmFtZT5cbiAgICAgICAgPC9mYWN0SWRlbnRpZmllcj5cbiAgICAgICAgPGNsYXNzTmFtZT5qYXZhLmxhbmcuVm9pZDwvY2xhc3NOYW1lPlxuICAgICAgICA8ZmFjdEFsaWFzPklOU1RBTkNFIDE8L2ZhY3RBbGlhcz5cbiAgICAgICAgPGV4cHJlc3Npb25BbGlhcz5QUk9QRVJUWS0xPC9leHByZXNzaW9uQWxpYXM+XG4gICAgICAgIDxmYWN0TWFwcGluZ1ZhbHVlVHlwZT5OT1RfRVhQUkVTU0lPTjwvZmFjdE1hcHBpbmdWYWx1ZVR5cGU+XG4gICAgICAgIDxjb2x1bW5XaWR0aD4xMTQuMDwvY29sdW1uV2lkdGg+XG4gICAgICA8L0ZhY3RNYXBwaW5nPlxuICAgIDwvZmFjdE1hcHBpbmdzPlxuICA8L3NjZXNpbU1vZGVsRGVzY3JpcHRvcj5cbiAgPHNjZXNpbURhdGE+XG4gICAgPEJhY2tncm91bmREYXRhPlxuICAgICAgPGZhY3RNYXBwaW5nVmFsdWVzPlxuICAgICAgICA8RmFjdE1hcHBpbmdWYWx1ZT5cbiAgICAgICAgICA8ZmFjdElkZW50aWZpZXI+XG4gICAgICAgICAgICA8bmFtZT5FbXB0eTwvbmFtZT5cbiAgICAgICAgICAgIDxjbGFzc05hbWU+amF2YS5sYW5nLlZvaWQ8L2NsYXNzTmFtZT5cbiAgICAgICAgICA8L2ZhY3RJZGVudGlmaWVyPlxuICAgICAgICAgIDxleHByZXNzaW9uSWRlbnRpZmllcj5cbiAgICAgICAgICAgIDxuYW1lPjF8MTwvbmFtZT5cbiAgICAgICAgICAgIDx0eXBlPkdJVkVOPC90eXBlPlxuICAgICAgICAgIDwvZXhwcmVzc2lvbklkZW50aWZpZXI+XG4gICAgICAgIDwvRmFjdE1hcHBpbmdWYWx1ZT5cbiAgICAgIDwvZmFjdE1hcHBpbmdWYWx1ZXM+XG4gICAgPC9CYWNrZ3JvdW5kRGF0YT5cbiAgPC9zY2VzaW1EYXRhPlxuPC9iYWNrZ3JvdW5kPlxuPHNldHRpbmdzPlxuICA8dHlwZT5SVUxFPC90eXBlPlxuICA8c2tpcEZyb21CdWlsZD5mYWxzZTwvc2tpcEZyb21CdWlsZD5cbiAgPHN0YXRlbGVzcz5mYWxzZTwvc3RhdGVsZXNzPlxuPC9zZXR0aW5ncz5cbjxpbXBvcnRzPlxuICA8aW1wb3J0cy8+XG48L2ltcG9ydHM+XG48L1NjZW5hcmlvU2ltdWxhdGlvbk1vZGVsPlxuYDtcbmNvbnN0IG1ldGE6IE1ldGE8e30+ID0ge1xuICB0aXRsZTogXCJVc2UgQ2FzZXMvSXMgT2xkIEVub3VnaFwiLFxuICBjb21wb25lbnQ6IFRlc3RTY2VuYXJpb0VkaXRvcixcbiAgaW5jbHVkZVN0b3JpZXM6IC9eW0EtWl0vXG59O1xuZXhwb3J0IGRlZmF1bHQgbWV0YTtcbnR5cGUgU3RvcnkgPSBTdG9yeU9iajxTdG9yeWJvb2tUZXN0U2NlbmFyaW9FZGl0b3JQcm9wcz47XG5jb25zdCBtYXJzaGFsbGVyID0gZ2V0TWFyc2hhbGxlcihpc09sZEVub3VnaERybCk7XG5jb25zdCBtb2RlbCA9IG1hcnNoYWxsZXIucGFyc2VyLnBhcnNlKCk7XG5leHBvcnQgY29uc3QgSXNPbGRFbm91Z2g6IFN0b3J5ID0ge1xuICBhcmdzOiB7XG4gICAgbW9kZWw6IG1hcnNoYWxsZXIucGFyc2VyLnBhcnNlKCksXG4gICAgeG1sOiBtYXJzaGFsbGVyLmJ1aWxkZXIuYnVpbGQobW9kZWwpLFxuICAgIG9wZW5GaWxlTm9ybWFsaXplZFBvc2l4UGF0aFJlbGF0aXZlVG9UaGVXb3Jrc3BhY2VSb290OiBpc09sZEVub3VnaERybEZpbGVOYW1lXG4gIH0sXG4gIHJlbmRlcjogYXJncyA9PiBTY2VTaW1FZGl0b3JXcmFwcGVyKGFyZ3MpXG59O1xuSXNPbGRFbm91Z2gucGFyYW1ldGVycyA9IHtcbiAgLi4uSXNPbGRFbm91Z2gucGFyYW1ldGVycyxcbiAgZG9jczoge1xuICAgIC4uLklzT2xkRW5vdWdoLnBhcmFtZXRlcnM/LmRvY3MsXG4gICAgc291cmNlOiB7XG4gICAgICBvcmlnaW5hbFNvdXJjZTogXCJ7XFxuICBhcmdzOiB7XFxuICAgIG1vZGVsOiBtYXJzaGFsbGVyLnBhcnNlci5wYXJzZSgpLFxcbiAgICB4bWw6IG1hcnNoYWxsZXIuYnVpbGRlci5idWlsZChtb2RlbCksXFxuICAgIG9wZW5GaWxlTm9ybWFsaXplZFBvc2l4UGF0aFJlbGF0aXZlVG9UaGVXb3Jrc3BhY2VSb290OiBpc09sZEVub3VnaERybEZpbGVOYW1lXFxuICB9LFxcbiAgcmVuZGVyOiBhcmdzID0+IFNjZVNpbUVkaXRvcldyYXBwZXIoYXJncylcXG59XCIsXG4gICAgICAuLi5Jc09sZEVub3VnaC5wYXJhbWV0ZXJzPy5kb2NzPy5zb3VyY2VcbiAgICB9XG4gIH1cbn07Il0sIm5hbWVzIjpbImdldE1hcnNoYWxsZXIiLCJUZXN0U2NlbmFyaW9FZGl0b3IiLCJTY2VTaW1FZGl0b3JXcmFwcGVyIiwiaXNPbGRFbm91Z2hEcmxGaWxlTmFtZSIsImlzT2xkRW5vdWdoRHJsIiwibWV0YSIsInRpdGxlIiwiY29tcG9uZW50IiwiaW5jbHVkZVN0b3JpZXMiLCJtYXJzaGFsbGVyIiwibW9kZWwiLCJwYXJzZXIiLCJwYXJzZSIsIklzT2xkRW5vdWdoIiwiYXJncyIsInhtbCIsImJ1aWxkZXIiLCJidWlsZCIsIm9wZW5GaWxlTm9ybWFsaXplZFBvc2l4UGF0aFJlbGF0aXZlVG9UaGVXb3Jrc3BhY2VSb290IiwicmVuZGVyIiwicGFyYW1ldGVycyIsImRvY3MiLCJfYSIsInNvdXJjZSIsIm9yaWdpbmFsU291cmNlIiwiX2MiLCJfYiIsIl9fbmFtZWRFeHBvcnRzT3JkZXIiXSwic291cmNlUm9vdCI6IiJ9