"use strict";
(self["webpackChunk_kie_tools_scesim_editor"] = self["webpackChunk_kie_tools_scesim_editor"] || []).push([["useCases-TrafficViolationDmn-stories"],{

/***/ "./stories/useCases/TrafficViolationDmn.stories.tsx":
/*!**********************************************************!*\
  !*** ./stories/useCases/TrafficViolationDmn.stories.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TrafficViolation: () => (/* binding */ TrafficViolation),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   trafficViolationDmn: () => (/* binding */ trafficViolationDmn),
/* harmony export */   trafficViolationDmnFileName: () => (/* binding */ trafficViolationDmnFileName)
/* harmony export */ });
/* harmony import */ var _kie_tools_dmn_marshaller_dist_normalization_normalize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @kie-tools/dmn-marshaller/dist/normalization/normalize */ "../dmn-marshaller/dist/normalization/normalize.js");
/* harmony import */ var _kie_tools_dmn_marshaller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @kie-tools/dmn-marshaller */ "../dmn-marshaller/dist/index.js");
/* harmony import */ var _kie_tools_scesim_marshaller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @kie-tools/scesim-marshaller */ "../scesim-marshaller/dist/index.js");
/* harmony import */ var _src_TestScenarioEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/TestScenarioEditor */ "./src/TestScenarioEditor.tsx");
/* harmony import */ var _scesimEditorStoriesWrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../scesimEditorStoriesWrapper */ "./stories/scesimEditorStoriesWrapper.tsx");
/* harmony import */ var _examples_ExternalDmnModels__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../examples/ExternalDmnModels */ "./stories/examples/ExternalDmnModels.ts");
var _a, _b, _c;






const trafficViolationDmnFileName = "TrafficViolation.scesim";
const trafficViolationDmn = `<?xml version="1.0" encoding="UTF-8"?>
<ScenarioSimulationModel version="1.8" xmlns="https://kie.org/scesim/1.8">
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
          <columnWidth>70</columnWidth>
          <factMappingValueType>NOT_EXPRESSION</factMappingValueType>
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
          <columnWidth>300</columnWidth>
          <factMappingValueType>NOT_EXPRESSION</factMappingValueType>
        </FactMapping>
        <FactMapping>
          <expressionElements>
            <ExpressionElement>
              <step>Driver</step>
            </ExpressionElement>
            <ExpressionElement>
              <step>Points</step>
            </ExpressionElement>
          </expressionElements>
          <expressionIdentifier>
            <name>1|5</name>
            <type>GIVEN</type>
          </expressionIdentifier>
          <factIdentifier>
            <name>Driver</name>
            <className>Driver</className>
          </factIdentifier>
          <className>number</className>
          <factAlias>Driver</factAlias>
          <expressionAlias>Points</expressionAlias>
          <genericTypes/>
          <columnWidth>114</columnWidth>
          <factMappingValueType>NOT_EXPRESSION</factMappingValueType>
        </FactMapping>
        <FactMapping>
          <expressionElements>
            <ExpressionElement>
              <step>Violation</step>
            </ExpressionElement>
            <ExpressionElement>
              <step>Type</step>
            </ExpressionElement>
          </expressionElements>
          <expressionIdentifier>
            <name>1|8</name>
            <type>GIVEN</type>
          </expressionIdentifier>
          <factIdentifier>
            <name>Violation</name>
            <className>Violation</className>
          </factIdentifier>
          <className>Type</className>
          <factAlias>Violation</factAlias>
          <expressionAlias>Type</expressionAlias>
          <genericTypes/>
          <columnWidth>114</columnWidth>
          <factMappingValueType>NOT_EXPRESSION</factMappingValueType>
        </FactMapping>
        <FactMapping>
          <expressionElements>
            <ExpressionElement>
              <step>Violation</step>
            </ExpressionElement>
            <ExpressionElement>
              <step>Speed Limit</step>
            </ExpressionElement>
          </expressionElements>
          <expressionIdentifier>
            <name>1|9</name>
            <type>GIVEN</type>
          </expressionIdentifier>
          <factIdentifier>
            <name>Violation</name>
            <className>Violation</className>
          </factIdentifier>
          <className>number</className>
          <factAlias>Violation</factAlias>
          <expressionAlias>Speed Limit</expressionAlias>
          <genericTypes/>
          <columnWidth>114</columnWidth>
          <factMappingValueType>NOT_EXPRESSION</factMappingValueType>
        </FactMapping>
        <FactMapping>
          <expressionElements>
            <ExpressionElement>
              <step>Violation</step>
            </ExpressionElement>
            <ExpressionElement>
              <step>Actual Speed</step>
            </ExpressionElement>
          </expressionElements>
          <expressionIdentifier>
            <name>1|10</name>
            <type>GIVEN</type>
          </expressionIdentifier>
          <factIdentifier>
            <name>Violation</name>
            <className>Violation</className>
          </factIdentifier>
          <className>number</className>
          <factAlias>Violation</factAlias>
          <expressionAlias>Actual Speed</expressionAlias>
          <genericTypes/>
          <columnWidth>114</columnWidth>
          <factMappingValueType>NOT_EXPRESSION</factMappingValueType>
        </FactMapping>
        <FactMapping>
          <expressionElements>
            <ExpressionElement>
              <step>Fine</step>
            </ExpressionElement>
            <ExpressionElement>
              <step>Amount</step>
            </ExpressionElement>
          </expressionElements>
          <expressionIdentifier>
            <name>1|11</name>
            <type>EXPECT</type>
          </expressionIdentifier>
          <factIdentifier>
            <name>Fine</name>
            <className>Fine</className>
          </factIdentifier>
          <className>number</className>
          <factAlias>Fine</factAlias>
          <expressionAlias>Amount</expressionAlias>
          <genericTypes/>
          <columnWidth>114</columnWidth>
          <factMappingValueType>NOT_EXPRESSION</factMappingValueType>
        </FactMapping>
        <FactMapping>
          <expressionElements>
            <ExpressionElement>
              <step>Fine</step>
            </ExpressionElement>
            <ExpressionElement>
              <step>Points</step>
            </ExpressionElement>
          </expressionElements>
          <expressionIdentifier>
            <name>1|12</name>
            <type>EXPECT</type>
          </expressionIdentifier>
          <factIdentifier>
            <name>Fine</name>
            <className>Fine</className>
          </factIdentifier>
          <className>number</className>
          <factAlias>Fine</factAlias>
          <expressionAlias>Points</expressionAlias>
          <genericTypes/>
          <columnWidth>114</columnWidth>
          <factMappingValueType>NOT_EXPRESSION</factMappingValueType>
        </FactMapping>
        <FactMapping>
          <expressionElements>
            <ExpressionElement>
              <step>Should the driver be suspended?</step>
            </ExpressionElement>
          </expressionElements>
          <expressionIdentifier>
            <name>1|13</name>
            <type>EXPECT</type>
          </expressionIdentifier>
          <factIdentifier>
            <name>Should the driver be suspended?</name>
            <className>Should the driver be suspended?</className>
          </factIdentifier>
          <className>string</className>
          <factAlias>Should the driver be suspended?</factAlias>
          <expressionAlias>value</expressionAlias>
          <genericTypes/>
          <columnWidth>114</columnWidth>
          <factMappingValueType>NOT_EXPRESSION</factMappingValueType>
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
            <rawValue class="string">Above speed limit: 10km/h and 30 km/h</rawValue>
          </FactMappingValue>
          <FactMappingValue>
            <factIdentifier>
              <name>Driver</name>
              <className>Driver</className>
            </factIdentifier>
            <expressionIdentifier>
              <name>1|5</name>
              <type>GIVEN</type>
            </expressionIdentifier>
            <rawValue class="string">10</rawValue>
          </FactMappingValue>
          <FactMappingValue>
            <factIdentifier>
              <name>Violation</name>
              <className>Violation</className>
            </factIdentifier>
            <expressionIdentifier>
              <name>1|8</name>
              <type>GIVEN</type>
            </expressionIdentifier>
            <rawValue class="string">"speed"</rawValue>
          </FactMappingValue>
          <FactMappingValue>
            <factIdentifier>
              <name>Violation</name>
              <className>Violation</className>
            </factIdentifier>
            <expressionIdentifier>
              <name>1|9</name>
              <type>GIVEN</type>
            </expressionIdentifier>
            <rawValue class="string">100</rawValue>
          </FactMappingValue>
          <FactMappingValue>
            <factIdentifier>
              <name>Violation</name>
              <className>Violation</className>
            </factIdentifier>
            <expressionIdentifier>
              <name>1|10</name>
              <type>GIVEN</type>
            </expressionIdentifier>
            <rawValue class="string">120</rawValue>
          </FactMappingValue>
          <FactMappingValue>
            <factIdentifier>
              <name>Fine</name>
              <className>Fine</className>
            </factIdentifier>
            <expressionIdentifier>
              <name>1|11</name>
              <type>EXPECT</type>
            </expressionIdentifier>
            <rawValue class="string">500</rawValue>
          </FactMappingValue>
          <FactMappingValue>
            <factIdentifier>
              <name>Fine</name>
              <className>Fine</className>
            </factIdentifier>
            <expressionIdentifier>
              <name>1|12</name>
              <type>EXPECT</type>
            </expressionIdentifier>
            <rawValue class="string">3</rawValue>
          </FactMappingValue>
          <FactMappingValue>
            <factIdentifier>
              <name>Should the driver be suspended?</name>
              <className>Should the driver be suspended?</className>
            </factIdentifier>
            <expressionIdentifier>
              <name>1|13</name>
              <type>EXPECT</type>
            </expressionIdentifier>
            <rawValue class="string">"No"</rawValue>
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
            <rawValue class="string">Above speed limit: more than 30 km/h</rawValue>
          </FactMappingValue>
          <FactMappingValue>
            <factIdentifier>
              <name>Driver</name>
              <className>Driver</className>
            </factIdentifier>
            <expressionIdentifier>
              <name>1|5</name>
              <type>GIVEN</type>
            </expressionIdentifier>
            <rawValue class="string">10</rawValue>
          </FactMappingValue>
          <FactMappingValue>
            <factIdentifier>
              <name>Violation</name>
              <className>Violation</className>
            </factIdentifier>
            <expressionIdentifier>
              <name>1|8</name>
              <type>GIVEN</type>
            </expressionIdentifier>
            <rawValue class="string">"speed"</rawValue>
          </FactMappingValue>
          <FactMappingValue>
            <factIdentifier>
              <name>Violation</name>
              <className>Violation</className>
            </factIdentifier>
            <expressionIdentifier>
              <name>1|9</name>
              <type>GIVEN</type>
            </expressionIdentifier>
            <rawValue class="string">100</rawValue>
          </FactMappingValue>
          <FactMappingValue>
            <factIdentifier>
              <name>Violation</name>
              <className>Violation</className>
            </factIdentifier>
            <expressionIdentifier>
              <name>1|10</name>
              <type>GIVEN</type>
            </expressionIdentifier>
            <rawValue class="string">150</rawValue>
          </FactMappingValue>
          <FactMappingValue>
            <factIdentifier>
              <name>Fine</name>
              <className>Fine</className>
            </factIdentifier>
            <expressionIdentifier>
              <name>1|11</name>
              <type>EXPECT</type>
            </expressionIdentifier>
            <rawValue class="string">1000</rawValue>
          </FactMappingValue>
          <FactMappingValue>
            <factIdentifier>
              <name>Fine</name>
              <className>Fine</className>
            </factIdentifier>
            <expressionIdentifier>
              <name>1|12</name>
              <type>EXPECT</type>
            </expressionIdentifier>
            <rawValue class="string">7</rawValue>
          </FactMappingValue>
          <FactMappingValue>
            <factIdentifier>
              <name>Should the driver be suspended?</name>
              <className>Should the driver be suspended?</className>
            </factIdentifier>
            <expressionIdentifier>
              <name>1|13</name>
              <type>EXPECT</type>
            </expressionIdentifier>
            <rawValue class="string">"No"</rawValue>
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
            <rawValue class="string">Parking violation</rawValue>
          </FactMappingValue>
          <FactMappingValue>
            <factIdentifier>
              <name>Driver</name>
              <className>Driver</className>
            </factIdentifier>
            <expressionIdentifier>
              <name>1|5</name>
              <type>GIVEN</type>
            </expressionIdentifier>
            <rawValue class="string">10</rawValue>
          </FactMappingValue>
          <FactMappingValue>
            <factIdentifier>
              <name>Violation</name>
              <className>Violation</className>
            </factIdentifier>
            <expressionIdentifier>
              <name>1|8</name>
              <type>GIVEN</type>
            </expressionIdentifier>
            <rawValue class="string">"parking"</rawValue>
          </FactMappingValue>
          <FactMappingValue>
            <factIdentifier>
              <name>Violation</name>
              <className>Violation</className>
            </factIdentifier>
            <expressionIdentifier>
              <name>1|9</name>
              <type>GIVEN</type>
            </expressionIdentifier>
          </FactMappingValue>
          <FactMappingValue>
            <factIdentifier>
              <name>Violation</name>
              <className>Violation</className>
            </factIdentifier>
            <expressionIdentifier>
              <name>1|10</name>
              <type>GIVEN</type>
            </expressionIdentifier>
          </FactMappingValue>
          <FactMappingValue>
            <factIdentifier>
              <name>Fine</name>
              <className>Fine</className>
            </factIdentifier>
            <expressionIdentifier>
              <name>1|11</name>
              <type>EXPECT</type>
            </expressionIdentifier>
            <rawValue class="string">100</rawValue>
          </FactMappingValue>
          <FactMappingValue>
            <factIdentifier>
              <name>Fine</name>
              <className>Fine</className>
            </factIdentifier>
            <expressionIdentifier>
              <name>1|12</name>
              <type>EXPECT</type>
            </expressionIdentifier>
            <rawValue class="string">1</rawValue>
          </FactMappingValue>
          <FactMappingValue>
            <factIdentifier>
              <name>Should the driver be suspended?</name>
              <className>Should the driver be suspended?</className>
            </factIdentifier>
            <expressionIdentifier>
              <name>1|13</name>
              <type>EXPECT</type>
            </expressionIdentifier>
            <rawValue class="string">"No"</rawValue>
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
            <rawValue class="string">3</rawValue>
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
            <rawValue class="string">DUI violation</rawValue>
          </FactMappingValue>
          <FactMappingValue>
            <factIdentifier>
              <name>Driver</name>
              <className>Driver</className>
            </factIdentifier>
            <expressionIdentifier>
              <name>1|5</name>
              <type>GIVEN</type>
            </expressionIdentifier>
            <rawValue class="string">10</rawValue>
          </FactMappingValue>
          <FactMappingValue>
            <factIdentifier>
              <name>Violation</name>
              <className>Violation</className>
            </factIdentifier>
            <expressionIdentifier>
              <name>1|8</name>
              <type>GIVEN</type>
            </expressionIdentifier>
            <rawValue class="string">"driving under the influence"</rawValue>
          </FactMappingValue>
          <FactMappingValue>
            <factIdentifier>
              <name>Violation</name>
              <className>Violation</className>
            </factIdentifier>
            <expressionIdentifier>
              <name>1|9</name>
              <type>GIVEN</type>
            </expressionIdentifier>
          </FactMappingValue>
          <FactMappingValue>
            <factIdentifier>
              <name>Violation</name>
              <className>Violation</className>
            </factIdentifier>
            <expressionIdentifier>
              <name>1|10</name>
              <type>GIVEN</type>
            </expressionIdentifier>
          </FactMappingValue>
          <FactMappingValue>
            <factIdentifier>
              <name>Fine</name>
              <className>Fine</className>
            </factIdentifier>
            <expressionIdentifier>
              <name>1|11</name>
              <type>EXPECT</type>
            </expressionIdentifier>
            <rawValue class="string">1000</rawValue>
          </FactMappingValue>
          <FactMappingValue>
            <factIdentifier>
              <name>Fine</name>
              <className>Fine</className>
            </factIdentifier>
            <expressionIdentifier>
              <name>1|12</name>
              <type>EXPECT</type>
            </expressionIdentifier>
            <rawValue class="string">5</rawValue>
          </FactMappingValue>
          <FactMappingValue>
            <factIdentifier>
              <name>Should the driver be suspended?</name>
              <className>Should the driver be suspended?</className>
            </factIdentifier>
            <expressionIdentifier>
              <name>1|13</name>
              <type>EXPECT</type>
            </expressionIdentifier>
            <rawValue class="string">"No"</rawValue>
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
            <rawValue class="string">4</rawValue>
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
            <rawValue class="string">Driver suspended</rawValue>
          </FactMappingValue>
          <FactMappingValue>
            <factIdentifier>
              <name>Driver</name>
              <className>Driver</className>
            </factIdentifier>
            <expressionIdentifier>
              <name>1|5</name>
              <type>GIVEN</type>
            </expressionIdentifier>
            <rawValue class="string">15</rawValue>
          </FactMappingValue>
          <FactMappingValue>
            <factIdentifier>
              <name>Violation</name>
              <className>Violation</className>
            </factIdentifier>
            <expressionIdentifier>
              <name>1|8</name>
              <type>GIVEN</type>
            </expressionIdentifier>
            <rawValue class="string">"speed"</rawValue>
          </FactMappingValue>
          <FactMappingValue>
            <factIdentifier>
              <name>Violation</name>
              <className>Violation</className>
            </factIdentifier>
            <expressionIdentifier>
              <name>1|9</name>
              <type>GIVEN</type>
            </expressionIdentifier>
            <rawValue class="string">100</rawValue>
          </FactMappingValue>
          <FactMappingValue>
            <factIdentifier>
              <name>Violation</name>
              <className>Violation</className>
            </factIdentifier>
            <expressionIdentifier>
              <name>1|10</name>
              <type>GIVEN</type>
            </expressionIdentifier>
            <rawValue class="string">140</rawValue>
          </FactMappingValue>
          <FactMappingValue>
            <factIdentifier>
              <name>Fine</name>
              <className>Fine</className>
            </factIdentifier>
            <expressionIdentifier>
              <name>1|11</name>
              <type>EXPECT</type>
            </expressionIdentifier>
            <rawValue class="string">1000</rawValue>
          </FactMappingValue>
          <FactMappingValue>
            <factIdentifier>
              <name>Fine</name>
              <className>Fine</className>
            </factIdentifier>
            <expressionIdentifier>
              <name>1|12</name>
              <type>EXPECT</type>
            </expressionIdentifier>
            <rawValue class="string">7</rawValue>
          </FactMappingValue>
          <FactMappingValue>
            <factIdentifier>
              <name>Should the driver be suspended?</name>
              <className>Should the driver be suspended?</className>
            </factIdentifier>
            <expressionIdentifier>
              <name>1|13</name>
              <type>EXPECT</type>
            </expressionIdentifier>
            <rawValue class="string">"Yes"</rawValue>
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
            <rawValue class="string">5</rawValue>
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
          <columnWidth>114</columnWidth>
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
    <dmnFilePath>dev-webapp/available-dmn-models/traffic-violation.dmn</dmnFilePath>
    <type>DMN</type>
    <dmnNamespace>https://kie.apache.org/dmn/_A4BCA8B8-CF08-433F-93B2-A2598F19ECFF</dmnNamespace>
    <dmnName>Traffic Violation</dmnName>
    <skipFromBuild>false</skipFromBuild>
    <stateless>false</stateless>
  </settings>
  <imports>
    <imports/>
  </imports>
</ScenarioSimulationModel>`;
const meta = {
  title: "Use Cases/Traffic Violation",
  component: _src_TestScenarioEditor__WEBPACK_IMPORTED_MODULE_3__.TestScenarioEditor,
  includeStories: /^[A-Z]/
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (meta);
const marshaller = (0,_kie_tools_scesim_marshaller__WEBPACK_IMPORTED_MODULE_2__.getMarshaller)(trafficViolationDmn);
const currentModel = marshaller.parser.parse();
const dmnModel = {
  normalizedPosixPathRelativeToTheOpenFile: "dev-webapp/available-dmn-models/traffic-violation.dmn",
  type: "dmn",
  model: (0,_kie_tools_dmn_marshaller_dist_normalization_normalize__WEBPACK_IMPORTED_MODULE_0__.normalize)((0,_kie_tools_dmn_marshaller__WEBPACK_IMPORTED_MODULE_1__.getMarshaller)(_examples_ExternalDmnModels__WEBPACK_IMPORTED_MODULE_5__.TRAFFIC_VIOLATION !== null && _examples_ExternalDmnModels__WEBPACK_IMPORTED_MODULE_5__.TRAFFIC_VIOLATION !== void 0 ? _examples_ExternalDmnModels__WEBPACK_IMPORTED_MODULE_5__.TRAFFIC_VIOLATION : "", {
    upgradeTo: "latest"
  }).parser.parse()),
  svg: ""
};
const TrafficViolation = {
  render: args => (0,_scesimEditorStoriesWrapper__WEBPACK_IMPORTED_MODULE_4__.SceSimEditorWrapper)(args),
  args: {
    model: marshaller.parser.parse(),
    openFileNormalizedPosixPathRelativeToTheWorkspaceRoot: trafficViolationDmnFileName,
    externalModelsByNamespace: new Map([["https://kie.apache.org/dmn/_A4BCA8B8-CF08-433F-93B2-A2598F19ECFF", dmnModel]]),
    xml: marshaller.builder.build(currentModel),
    onRequestExternalModelsAvailableToInclude: () => Promise.resolve(["dev-webapp/available-dmn-models/traffic-violation.dmn"]),
    onRequestExternalModelByPath: () => Promise.resolve(dmnModel)
  }
};
TrafficViolation.parameters = {
  ...TrafficViolation.parameters,
  docs: {
    ...((_a = TrafficViolation.parameters) === null || _a === void 0 ? void 0 : _a.docs),
    source: {
      originalSource: "{\n  render: args => SceSimEditorWrapper(args),\n  args: {\n    model: marshaller.parser.parse(),\n    openFileNormalizedPosixPathRelativeToTheWorkspaceRoot: trafficViolationDmnFileName,\n    externalModelsByNamespace: new Map([[\"https://kie.apache.org/dmn/_A4BCA8B8-CF08-433F-93B2-A2598F19ECFF\", dmnModel]]),\n    xml: marshaller.builder.build(currentModel),\n    onRequestExternalModelsAvailableToInclude: () => Promise.resolve([\"dev-webapp/available-dmn-models/traffic-violation.dmn\"]),\n    onRequestExternalModelByPath: () => Promise.resolve(dmnModel)\n  }\n}",
      ...((_c = (_b = TrafficViolation.parameters) === null || _b === void 0 ? void 0 : _b.docs) === null || _c === void 0 ? void 0 : _c.source)
    }
  }
};
const __namedExportsOrder = ["trafficViolationDmnFileName", "trafficViolationDmn", "TrafficViolation"];

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlQ2FzZXMtVHJhZmZpY1Zpb2xhdGlvbkRtbi1zdG9yaWVzLjU4ZGNkNGYyLmlmcmFtZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUJtRjtBQUNMO0FBQ2pCO0FBQ0s7QUFDb0M7QUFDcEM7QUFDM0QsTUFBTU0sMkJBQTJCLEdBQUcseUJBQXlCO0FBQzdELE1BQU1DLG1CQUFtQixHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MkJBNnZCUjtBQUMzQixNQUFNQyxJQUFJLEdBQWE7RUFDckJDLEtBQUssRUFBRSw2QkFBNkI7RUFDcENDLFNBQVMsRUFBRVAsdUVBQWtCO0VBQzdCUSxjQUFjLEVBQUU7Q0FDakI7QUFDRCxpRUFBZUgsSUFBSSxFQUFDO0FBRXBCLE1BQU1JLFVBQVUsR0FBR1gsMkVBQWEsQ0FBQ00sbUJBQW1CLENBQUM7QUFDckQsTUFBTU0sWUFBWSxHQUFHRCxVQUFVLENBQUNFLE1BQU0sQ0FBQ0MsS0FBSyxFQUFFO0FBQzlDLE1BQU1DLFFBQVEsR0FBRztFQUNmQyx3Q0FBd0MsRUFBRSx1REFBdUQ7RUFDakdDLElBQUksRUFBRSxLQUFLO0VBQ1hDLEtBQUssRUFBRW5CLGlHQUFTLENBQUNFLHdFQUFnQixDQUFDRywwRUFBaUIsYUFBakJBLDBFQUFpQixjQUFqQkEsMEVBQWlCLEdBQUksRUFBRSxFQUFFO0lBQ3pEZSxTQUFTLEVBQUU7R0FDWixDQUFDLENBQUNOLE1BQU0sQ0FBQ0MsS0FBSyxFQUFFLENBQUM7RUFDbEJNLEdBQUcsRUFBRTtDQUNOO0FBQ00sTUFBTUMsZ0JBQWdCLEdBQVU7RUFDckNDLE1BQU0sRUFBRUMsSUFBSSxJQUFJcEIsZ0ZBQW1CLENBQUNvQixJQUFJLENBQUM7RUFDekNBLElBQUksRUFBRTtJQUNKTCxLQUFLLEVBQUVQLFVBQVUsQ0FBQ0UsTUFBTSxDQUFDQyxLQUFLLEVBQUU7SUFDaENVLHFEQUFxRCxFQUFFbkIsMkJBQTJCO0lBQ2xGb0IseUJBQXlCLEVBQUUsSUFBSUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxrRUFBa0UsRUFBRVgsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUNwSFksR0FBRyxFQUFFaEIsVUFBVSxDQUFDaUIsT0FBTyxDQUFDQyxLQUFLLENBQUNqQixZQUFZLENBQUM7SUFDM0NrQix5Q0FBeUMsRUFBRUEsQ0FBQSxLQUFNQyxPQUFPLENBQUNDLE9BQU8sQ0FBQyxDQUFDLHVEQUF1RCxDQUFDLENBQUM7SUFDM0hDLDRCQUE0QixFQUFFQSxDQUFBLEtBQU1GLE9BQU8sQ0FBQ0MsT0FBTyxDQUFDakIsUUFBUTs7Q0FFL0Q7QUFDRE0sZ0JBQWdCLENBQUNhLFVBQVUsR0FBRztFQUM1QixHQUFHYixnQkFBZ0IsQ0FBQ2EsVUFBVTtFQUM5QkMsSUFBSSxFQUFFO0lBQ0osSUFBRyxDQUFBQyxFQUFBLEdBQUFmLGdCQUFnQixDQUFDYSxVQUFVLGNBQUFFLEVBQUEsdUJBQUFBLEVBQUEsQ0FBRUQsSUFBSTtJQUNwQ0UsTUFBTSxFQUFFO01BQ05DLGNBQWMsRUFBRSwwakJBQTBqQjtNQUMxa0IsSUFBRyxDQUFBQyxFQUFBLElBQUFDLEVBQUEsR0FBQW5CLGdCQUFnQixDQUFDYSxVQUFVLGNBQUFNLEVBQUEsdUJBQUFBLEVBQUEsQ0FBRUwsSUFBSSxjQUFBSSxFQUFBLHVCQUFBQSxFQUFBLENBQUVGLE1BQU07OztDQUdqRDtBQUFDLE1BQUFJLG1CQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGtpZS10b29scy9zY2VzaW0tZWRpdG9yLy4vc3Rvcmllcy91c2VDYXNlcy9UcmFmZmljVmlvbGF0aW9uRG1uLnN0b3JpZXMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBMaWNlbnNlZCB0byB0aGUgQXBhY2hlIFNvZnR3YXJlIEZvdW5kYXRpb24gKEFTRikgdW5kZXIgb25lXG4gKiBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gIFNlZSB0aGUgTk9USUNFIGZpbGVcbiAqIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uXG4gKiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC4gIFRoZSBBU0YgbGljZW5zZXMgdGhpcyBmaWxlXG4gKiB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlXG4gKiBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2VcbiAqIHdpdGggdGhlIExpY2Vuc2UuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLFxuICogc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cbiAqIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXG4gKiBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGVcbiAqIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnNcbiAqIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB0eXBlIHsgTWV0YSwgU3RvcnlPYmogfSBmcm9tIFwiQHN0b3J5Ym9vay9yZWFjdFwiO1xuaW1wb3J0IHsgbm9ybWFsaXplIH0gZnJvbSBcIkBraWUtdG9vbHMvZG1uLW1hcnNoYWxsZXIvZGlzdC9ub3JtYWxpemF0aW9uL25vcm1hbGl6ZVwiO1xuaW1wb3J0IHsgZ2V0TWFyc2hhbGxlciBhcyBnZXREbW5NYXJzaGFsbGVyIH0gZnJvbSBcIkBraWUtdG9vbHMvZG1uLW1hcnNoYWxsZXJcIjtcbmltcG9ydCB7IGdldE1hcnNoYWxsZXIgfSBmcm9tIFwiQGtpZS10b29scy9zY2VzaW0tbWFyc2hhbGxlclwiO1xuaW1wb3J0IHsgVGVzdFNjZW5hcmlvRWRpdG9yIH0gZnJvbSBcIi4uLy4uL3NyYy9UZXN0U2NlbmFyaW9FZGl0b3JcIjtcbmltcG9ydCB7IFNjZVNpbUVkaXRvcldyYXBwZXIsIFN0b3J5Ym9va1Rlc3RTY2VuYXJpb0VkaXRvclByb3BzIH0gZnJvbSBcIi4uL3NjZXNpbUVkaXRvclN0b3JpZXNXcmFwcGVyXCI7XG5pbXBvcnQgeyBUUkFGRklDX1ZJT0xBVElPTiB9IGZyb20gXCIuLi9leGFtcGxlcy9FeHRlcm5hbERtbk1vZGVsc1wiO1xuZXhwb3J0IGNvbnN0IHRyYWZmaWNWaW9sYXRpb25EbW5GaWxlTmFtZSA9IFwiVHJhZmZpY1Zpb2xhdGlvbi5zY2VzaW1cIjtcbmV4cG9ydCBjb25zdCB0cmFmZmljVmlvbGF0aW9uRG1uID0gYDw/eG1sIHZlcnNpb249XCIxLjBcIiBlbmNvZGluZz1cIlVURi04XCI/PlxuPFNjZW5hcmlvU2ltdWxhdGlvbk1vZGVsIHZlcnNpb249XCIxLjhcIiB4bWxucz1cImh0dHBzOi8va2llLm9yZy9zY2VzaW0vMS44XCI+XG4gIDxzaW11bGF0aW9uPlxuICAgIDxzY2VzaW1Nb2RlbERlc2NyaXB0b3I+XG4gICAgICA8ZmFjdE1hcHBpbmdzPlxuICAgICAgICA8RmFjdE1hcHBpbmc+XG4gICAgICAgICAgPGV4cHJlc3Npb25FbGVtZW50cy8+XG4gICAgICAgICAgPGV4cHJlc3Npb25JZGVudGlmaWVyPlxuICAgICAgICAgICAgPG5hbWU+SW5kZXg8L25hbWU+XG4gICAgICAgICAgICA8dHlwZT5PVEhFUjwvdHlwZT5cbiAgICAgICAgICA8L2V4cHJlc3Npb25JZGVudGlmaWVyPlxuICAgICAgICAgIDxmYWN0SWRlbnRpZmllcj5cbiAgICAgICAgICAgIDxuYW1lPiM8L25hbWU+XG4gICAgICAgICAgICA8Y2xhc3NOYW1lPmphdmEubGFuZy5JbnRlZ2VyPC9jbGFzc05hbWU+XG4gICAgICAgICAgPC9mYWN0SWRlbnRpZmllcj5cbiAgICAgICAgICA8Y2xhc3NOYW1lPmphdmEubGFuZy5JbnRlZ2VyPC9jbGFzc05hbWU+XG4gICAgICAgICAgPGZhY3RBbGlhcz4jPC9mYWN0QWxpYXM+XG4gICAgICAgICAgPGNvbHVtbldpZHRoPjcwPC9jb2x1bW5XaWR0aD5cbiAgICAgICAgICA8ZmFjdE1hcHBpbmdWYWx1ZVR5cGU+Tk9UX0VYUFJFU1NJT048L2ZhY3RNYXBwaW5nVmFsdWVUeXBlPlxuICAgICAgICA8L0ZhY3RNYXBwaW5nPlxuICAgICAgICA8RmFjdE1hcHBpbmc+XG4gICAgICAgICAgPGV4cHJlc3Npb25FbGVtZW50cy8+XG4gICAgICAgICAgPGV4cHJlc3Npb25JZGVudGlmaWVyPlxuICAgICAgICAgICAgPG5hbWU+RGVzY3JpcHRpb248L25hbWU+XG4gICAgICAgICAgICA8dHlwZT5PVEhFUjwvdHlwZT5cbiAgICAgICAgICA8L2V4cHJlc3Npb25JZGVudGlmaWVyPlxuICAgICAgICAgIDxmYWN0SWRlbnRpZmllcj5cbiAgICAgICAgICAgIDxuYW1lPlNjZW5hcmlvIGRlc2NyaXB0aW9uPC9uYW1lPlxuICAgICAgICAgICAgPGNsYXNzTmFtZT5qYXZhLmxhbmcuU3RyaW5nPC9jbGFzc05hbWU+XG4gICAgICAgICAgPC9mYWN0SWRlbnRpZmllcj5cbiAgICAgICAgICA8Y2xhc3NOYW1lPmphdmEubGFuZy5TdHJpbmc8L2NsYXNzTmFtZT5cbiAgICAgICAgICA8ZmFjdEFsaWFzPlNjZW5hcmlvIGRlc2NyaXB0aW9uPC9mYWN0QWxpYXM+XG4gICAgICAgICAgPGNvbHVtbldpZHRoPjMwMDwvY29sdW1uV2lkdGg+XG4gICAgICAgICAgPGZhY3RNYXBwaW5nVmFsdWVUeXBlPk5PVF9FWFBSRVNTSU9OPC9mYWN0TWFwcGluZ1ZhbHVlVHlwZT5cbiAgICAgICAgPC9GYWN0TWFwcGluZz5cbiAgICAgICAgPEZhY3RNYXBwaW5nPlxuICAgICAgICAgIDxleHByZXNzaW9uRWxlbWVudHM+XG4gICAgICAgICAgICA8RXhwcmVzc2lvbkVsZW1lbnQ+XG4gICAgICAgICAgICAgIDxzdGVwPkRyaXZlcjwvc3RlcD5cbiAgICAgICAgICAgIDwvRXhwcmVzc2lvbkVsZW1lbnQ+XG4gICAgICAgICAgICA8RXhwcmVzc2lvbkVsZW1lbnQ+XG4gICAgICAgICAgICAgIDxzdGVwPlBvaW50czwvc3RlcD5cbiAgICAgICAgICAgIDwvRXhwcmVzc2lvbkVsZW1lbnQ+XG4gICAgICAgICAgPC9leHByZXNzaW9uRWxlbWVudHM+XG4gICAgICAgICAgPGV4cHJlc3Npb25JZGVudGlmaWVyPlxuICAgICAgICAgICAgPG5hbWU+MXw1PC9uYW1lPlxuICAgICAgICAgICAgPHR5cGU+R0lWRU48L3R5cGU+XG4gICAgICAgICAgPC9leHByZXNzaW9uSWRlbnRpZmllcj5cbiAgICAgICAgICA8ZmFjdElkZW50aWZpZXI+XG4gICAgICAgICAgICA8bmFtZT5Ecml2ZXI8L25hbWU+XG4gICAgICAgICAgICA8Y2xhc3NOYW1lPkRyaXZlcjwvY2xhc3NOYW1lPlxuICAgICAgICAgIDwvZmFjdElkZW50aWZpZXI+XG4gICAgICAgICAgPGNsYXNzTmFtZT5udW1iZXI8L2NsYXNzTmFtZT5cbiAgICAgICAgICA8ZmFjdEFsaWFzPkRyaXZlcjwvZmFjdEFsaWFzPlxuICAgICAgICAgIDxleHByZXNzaW9uQWxpYXM+UG9pbnRzPC9leHByZXNzaW9uQWxpYXM+XG4gICAgICAgICAgPGdlbmVyaWNUeXBlcy8+XG4gICAgICAgICAgPGNvbHVtbldpZHRoPjExNDwvY29sdW1uV2lkdGg+XG4gICAgICAgICAgPGZhY3RNYXBwaW5nVmFsdWVUeXBlPk5PVF9FWFBSRVNTSU9OPC9mYWN0TWFwcGluZ1ZhbHVlVHlwZT5cbiAgICAgICAgPC9GYWN0TWFwcGluZz5cbiAgICAgICAgPEZhY3RNYXBwaW5nPlxuICAgICAgICAgIDxleHByZXNzaW9uRWxlbWVudHM+XG4gICAgICAgICAgICA8RXhwcmVzc2lvbkVsZW1lbnQ+XG4gICAgICAgICAgICAgIDxzdGVwPlZpb2xhdGlvbjwvc3RlcD5cbiAgICAgICAgICAgIDwvRXhwcmVzc2lvbkVsZW1lbnQ+XG4gICAgICAgICAgICA8RXhwcmVzc2lvbkVsZW1lbnQ+XG4gICAgICAgICAgICAgIDxzdGVwPlR5cGU8L3N0ZXA+XG4gICAgICAgICAgICA8L0V4cHJlc3Npb25FbGVtZW50PlxuICAgICAgICAgIDwvZXhwcmVzc2lvbkVsZW1lbnRzPlxuICAgICAgICAgIDxleHByZXNzaW9uSWRlbnRpZmllcj5cbiAgICAgICAgICAgIDxuYW1lPjF8ODwvbmFtZT5cbiAgICAgICAgICAgIDx0eXBlPkdJVkVOPC90eXBlPlxuICAgICAgICAgIDwvZXhwcmVzc2lvbklkZW50aWZpZXI+XG4gICAgICAgICAgPGZhY3RJZGVudGlmaWVyPlxuICAgICAgICAgICAgPG5hbWU+VmlvbGF0aW9uPC9uYW1lPlxuICAgICAgICAgICAgPGNsYXNzTmFtZT5WaW9sYXRpb248L2NsYXNzTmFtZT5cbiAgICAgICAgICA8L2ZhY3RJZGVudGlmaWVyPlxuICAgICAgICAgIDxjbGFzc05hbWU+VHlwZTwvY2xhc3NOYW1lPlxuICAgICAgICAgIDxmYWN0QWxpYXM+VmlvbGF0aW9uPC9mYWN0QWxpYXM+XG4gICAgICAgICAgPGV4cHJlc3Npb25BbGlhcz5UeXBlPC9leHByZXNzaW9uQWxpYXM+XG4gICAgICAgICAgPGdlbmVyaWNUeXBlcy8+XG4gICAgICAgICAgPGNvbHVtbldpZHRoPjExNDwvY29sdW1uV2lkdGg+XG4gICAgICAgICAgPGZhY3RNYXBwaW5nVmFsdWVUeXBlPk5PVF9FWFBSRVNTSU9OPC9mYWN0TWFwcGluZ1ZhbHVlVHlwZT5cbiAgICAgICAgPC9GYWN0TWFwcGluZz5cbiAgICAgICAgPEZhY3RNYXBwaW5nPlxuICAgICAgICAgIDxleHByZXNzaW9uRWxlbWVudHM+XG4gICAgICAgICAgICA8RXhwcmVzc2lvbkVsZW1lbnQ+XG4gICAgICAgICAgICAgIDxzdGVwPlZpb2xhdGlvbjwvc3RlcD5cbiAgICAgICAgICAgIDwvRXhwcmVzc2lvbkVsZW1lbnQ+XG4gICAgICAgICAgICA8RXhwcmVzc2lvbkVsZW1lbnQ+XG4gICAgICAgICAgICAgIDxzdGVwPlNwZWVkIExpbWl0PC9zdGVwPlxuICAgICAgICAgICAgPC9FeHByZXNzaW9uRWxlbWVudD5cbiAgICAgICAgICA8L2V4cHJlc3Npb25FbGVtZW50cz5cbiAgICAgICAgICA8ZXhwcmVzc2lvbklkZW50aWZpZXI+XG4gICAgICAgICAgICA8bmFtZT4xfDk8L25hbWU+XG4gICAgICAgICAgICA8dHlwZT5HSVZFTjwvdHlwZT5cbiAgICAgICAgICA8L2V4cHJlc3Npb25JZGVudGlmaWVyPlxuICAgICAgICAgIDxmYWN0SWRlbnRpZmllcj5cbiAgICAgICAgICAgIDxuYW1lPlZpb2xhdGlvbjwvbmFtZT5cbiAgICAgICAgICAgIDxjbGFzc05hbWU+VmlvbGF0aW9uPC9jbGFzc05hbWU+XG4gICAgICAgICAgPC9mYWN0SWRlbnRpZmllcj5cbiAgICAgICAgICA8Y2xhc3NOYW1lPm51bWJlcjwvY2xhc3NOYW1lPlxuICAgICAgICAgIDxmYWN0QWxpYXM+VmlvbGF0aW9uPC9mYWN0QWxpYXM+XG4gICAgICAgICAgPGV4cHJlc3Npb25BbGlhcz5TcGVlZCBMaW1pdDwvZXhwcmVzc2lvbkFsaWFzPlxuICAgICAgICAgIDxnZW5lcmljVHlwZXMvPlxuICAgICAgICAgIDxjb2x1bW5XaWR0aD4xMTQ8L2NvbHVtbldpZHRoPlxuICAgICAgICAgIDxmYWN0TWFwcGluZ1ZhbHVlVHlwZT5OT1RfRVhQUkVTU0lPTjwvZmFjdE1hcHBpbmdWYWx1ZVR5cGU+XG4gICAgICAgIDwvRmFjdE1hcHBpbmc+XG4gICAgICAgIDxGYWN0TWFwcGluZz5cbiAgICAgICAgICA8ZXhwcmVzc2lvbkVsZW1lbnRzPlxuICAgICAgICAgICAgPEV4cHJlc3Npb25FbGVtZW50PlxuICAgICAgICAgICAgICA8c3RlcD5WaW9sYXRpb248L3N0ZXA+XG4gICAgICAgICAgICA8L0V4cHJlc3Npb25FbGVtZW50PlxuICAgICAgICAgICAgPEV4cHJlc3Npb25FbGVtZW50PlxuICAgICAgICAgICAgICA8c3RlcD5BY3R1YWwgU3BlZWQ8L3N0ZXA+XG4gICAgICAgICAgICA8L0V4cHJlc3Npb25FbGVtZW50PlxuICAgICAgICAgIDwvZXhwcmVzc2lvbkVsZW1lbnRzPlxuICAgICAgICAgIDxleHByZXNzaW9uSWRlbnRpZmllcj5cbiAgICAgICAgICAgIDxuYW1lPjF8MTA8L25hbWU+XG4gICAgICAgICAgICA8dHlwZT5HSVZFTjwvdHlwZT5cbiAgICAgICAgICA8L2V4cHJlc3Npb25JZGVudGlmaWVyPlxuICAgICAgICAgIDxmYWN0SWRlbnRpZmllcj5cbiAgICAgICAgICAgIDxuYW1lPlZpb2xhdGlvbjwvbmFtZT5cbiAgICAgICAgICAgIDxjbGFzc05hbWU+VmlvbGF0aW9uPC9jbGFzc05hbWU+XG4gICAgICAgICAgPC9mYWN0SWRlbnRpZmllcj5cbiAgICAgICAgICA8Y2xhc3NOYW1lPm51bWJlcjwvY2xhc3NOYW1lPlxuICAgICAgICAgIDxmYWN0QWxpYXM+VmlvbGF0aW9uPC9mYWN0QWxpYXM+XG4gICAgICAgICAgPGV4cHJlc3Npb25BbGlhcz5BY3R1YWwgU3BlZWQ8L2V4cHJlc3Npb25BbGlhcz5cbiAgICAgICAgICA8Z2VuZXJpY1R5cGVzLz5cbiAgICAgICAgICA8Y29sdW1uV2lkdGg+MTE0PC9jb2x1bW5XaWR0aD5cbiAgICAgICAgICA8ZmFjdE1hcHBpbmdWYWx1ZVR5cGU+Tk9UX0VYUFJFU1NJT048L2ZhY3RNYXBwaW5nVmFsdWVUeXBlPlxuICAgICAgICA8L0ZhY3RNYXBwaW5nPlxuICAgICAgICA8RmFjdE1hcHBpbmc+XG4gICAgICAgICAgPGV4cHJlc3Npb25FbGVtZW50cz5cbiAgICAgICAgICAgIDxFeHByZXNzaW9uRWxlbWVudD5cbiAgICAgICAgICAgICAgPHN0ZXA+RmluZTwvc3RlcD5cbiAgICAgICAgICAgIDwvRXhwcmVzc2lvbkVsZW1lbnQ+XG4gICAgICAgICAgICA8RXhwcmVzc2lvbkVsZW1lbnQ+XG4gICAgICAgICAgICAgIDxzdGVwPkFtb3VudDwvc3RlcD5cbiAgICAgICAgICAgIDwvRXhwcmVzc2lvbkVsZW1lbnQ+XG4gICAgICAgICAgPC9leHByZXNzaW9uRWxlbWVudHM+XG4gICAgICAgICAgPGV4cHJlc3Npb25JZGVudGlmaWVyPlxuICAgICAgICAgICAgPG5hbWU+MXwxMTwvbmFtZT5cbiAgICAgICAgICAgIDx0eXBlPkVYUEVDVDwvdHlwZT5cbiAgICAgICAgICA8L2V4cHJlc3Npb25JZGVudGlmaWVyPlxuICAgICAgICAgIDxmYWN0SWRlbnRpZmllcj5cbiAgICAgICAgICAgIDxuYW1lPkZpbmU8L25hbWU+XG4gICAgICAgICAgICA8Y2xhc3NOYW1lPkZpbmU8L2NsYXNzTmFtZT5cbiAgICAgICAgICA8L2ZhY3RJZGVudGlmaWVyPlxuICAgICAgICAgIDxjbGFzc05hbWU+bnVtYmVyPC9jbGFzc05hbWU+XG4gICAgICAgICAgPGZhY3RBbGlhcz5GaW5lPC9mYWN0QWxpYXM+XG4gICAgICAgICAgPGV4cHJlc3Npb25BbGlhcz5BbW91bnQ8L2V4cHJlc3Npb25BbGlhcz5cbiAgICAgICAgICA8Z2VuZXJpY1R5cGVzLz5cbiAgICAgICAgICA8Y29sdW1uV2lkdGg+MTE0PC9jb2x1bW5XaWR0aD5cbiAgICAgICAgICA8ZmFjdE1hcHBpbmdWYWx1ZVR5cGU+Tk9UX0VYUFJFU1NJT048L2ZhY3RNYXBwaW5nVmFsdWVUeXBlPlxuICAgICAgICA8L0ZhY3RNYXBwaW5nPlxuICAgICAgICA8RmFjdE1hcHBpbmc+XG4gICAgICAgICAgPGV4cHJlc3Npb25FbGVtZW50cz5cbiAgICAgICAgICAgIDxFeHByZXNzaW9uRWxlbWVudD5cbiAgICAgICAgICAgICAgPHN0ZXA+RmluZTwvc3RlcD5cbiAgICAgICAgICAgIDwvRXhwcmVzc2lvbkVsZW1lbnQ+XG4gICAgICAgICAgICA8RXhwcmVzc2lvbkVsZW1lbnQ+XG4gICAgICAgICAgICAgIDxzdGVwPlBvaW50czwvc3RlcD5cbiAgICAgICAgICAgIDwvRXhwcmVzc2lvbkVsZW1lbnQ+XG4gICAgICAgICAgPC9leHByZXNzaW9uRWxlbWVudHM+XG4gICAgICAgICAgPGV4cHJlc3Npb25JZGVudGlmaWVyPlxuICAgICAgICAgICAgPG5hbWU+MXwxMjwvbmFtZT5cbiAgICAgICAgICAgIDx0eXBlPkVYUEVDVDwvdHlwZT5cbiAgICAgICAgICA8L2V4cHJlc3Npb25JZGVudGlmaWVyPlxuICAgICAgICAgIDxmYWN0SWRlbnRpZmllcj5cbiAgICAgICAgICAgIDxuYW1lPkZpbmU8L25hbWU+XG4gICAgICAgICAgICA8Y2xhc3NOYW1lPkZpbmU8L2NsYXNzTmFtZT5cbiAgICAgICAgICA8L2ZhY3RJZGVudGlmaWVyPlxuICAgICAgICAgIDxjbGFzc05hbWU+bnVtYmVyPC9jbGFzc05hbWU+XG4gICAgICAgICAgPGZhY3RBbGlhcz5GaW5lPC9mYWN0QWxpYXM+XG4gICAgICAgICAgPGV4cHJlc3Npb25BbGlhcz5Qb2ludHM8L2V4cHJlc3Npb25BbGlhcz5cbiAgICAgICAgICA8Z2VuZXJpY1R5cGVzLz5cbiAgICAgICAgICA8Y29sdW1uV2lkdGg+MTE0PC9jb2x1bW5XaWR0aD5cbiAgICAgICAgICA8ZmFjdE1hcHBpbmdWYWx1ZVR5cGU+Tk9UX0VYUFJFU1NJT048L2ZhY3RNYXBwaW5nVmFsdWVUeXBlPlxuICAgICAgICA8L0ZhY3RNYXBwaW5nPlxuICAgICAgICA8RmFjdE1hcHBpbmc+XG4gICAgICAgICAgPGV4cHJlc3Npb25FbGVtZW50cz5cbiAgICAgICAgICAgIDxFeHByZXNzaW9uRWxlbWVudD5cbiAgICAgICAgICAgICAgPHN0ZXA+U2hvdWxkIHRoZSBkcml2ZXIgYmUgc3VzcGVuZGVkPzwvc3RlcD5cbiAgICAgICAgICAgIDwvRXhwcmVzc2lvbkVsZW1lbnQ+XG4gICAgICAgICAgPC9leHByZXNzaW9uRWxlbWVudHM+XG4gICAgICAgICAgPGV4cHJlc3Npb25JZGVudGlmaWVyPlxuICAgICAgICAgICAgPG5hbWU+MXwxMzwvbmFtZT5cbiAgICAgICAgICAgIDx0eXBlPkVYUEVDVDwvdHlwZT5cbiAgICAgICAgICA8L2V4cHJlc3Npb25JZGVudGlmaWVyPlxuICAgICAgICAgIDxmYWN0SWRlbnRpZmllcj5cbiAgICAgICAgICAgIDxuYW1lPlNob3VsZCB0aGUgZHJpdmVyIGJlIHN1c3BlbmRlZD88L25hbWU+XG4gICAgICAgICAgICA8Y2xhc3NOYW1lPlNob3VsZCB0aGUgZHJpdmVyIGJlIHN1c3BlbmRlZD88L2NsYXNzTmFtZT5cbiAgICAgICAgICA8L2ZhY3RJZGVudGlmaWVyPlxuICAgICAgICAgIDxjbGFzc05hbWU+c3RyaW5nPC9jbGFzc05hbWU+XG4gICAgICAgICAgPGZhY3RBbGlhcz5TaG91bGQgdGhlIGRyaXZlciBiZSBzdXNwZW5kZWQ/PC9mYWN0QWxpYXM+XG4gICAgICAgICAgPGV4cHJlc3Npb25BbGlhcz52YWx1ZTwvZXhwcmVzc2lvbkFsaWFzPlxuICAgICAgICAgIDxnZW5lcmljVHlwZXMvPlxuICAgICAgICAgIDxjb2x1bW5XaWR0aD4xMTQ8L2NvbHVtbldpZHRoPlxuICAgICAgICAgIDxmYWN0TWFwcGluZ1ZhbHVlVHlwZT5OT1RfRVhQUkVTU0lPTjwvZmFjdE1hcHBpbmdWYWx1ZVR5cGU+XG4gICAgICAgIDwvRmFjdE1hcHBpbmc+XG4gICAgICA8L2ZhY3RNYXBwaW5ncz5cbiAgICA8L3NjZXNpbU1vZGVsRGVzY3JpcHRvcj5cbiAgICA8c2Nlc2ltRGF0YT5cbiAgICAgIDxTY2VuYXJpbz5cbiAgICAgICAgPGZhY3RNYXBwaW5nVmFsdWVzPlxuICAgICAgICAgIDxGYWN0TWFwcGluZ1ZhbHVlPlxuICAgICAgICAgICAgPGZhY3RJZGVudGlmaWVyPlxuICAgICAgICAgICAgICA8bmFtZT5TY2VuYXJpbyBkZXNjcmlwdGlvbjwvbmFtZT5cbiAgICAgICAgICAgICAgPGNsYXNzTmFtZT5qYXZhLmxhbmcuU3RyaW5nPC9jbGFzc05hbWU+XG4gICAgICAgICAgICA8L2ZhY3RJZGVudGlmaWVyPlxuICAgICAgICAgICAgPGV4cHJlc3Npb25JZGVudGlmaWVyPlxuICAgICAgICAgICAgICA8bmFtZT5EZXNjcmlwdGlvbjwvbmFtZT5cbiAgICAgICAgICAgICAgPHR5cGU+T1RIRVI8L3R5cGU+XG4gICAgICAgICAgICA8L2V4cHJlc3Npb25JZGVudGlmaWVyPlxuICAgICAgICAgICAgPHJhd1ZhbHVlIGNsYXNzPVwic3RyaW5nXCI+QWJvdmUgc3BlZWQgbGltaXQ6IDEwa20vaCBhbmQgMzAga20vaDwvcmF3VmFsdWU+XG4gICAgICAgICAgPC9GYWN0TWFwcGluZ1ZhbHVlPlxuICAgICAgICAgIDxGYWN0TWFwcGluZ1ZhbHVlPlxuICAgICAgICAgICAgPGZhY3RJZGVudGlmaWVyPlxuICAgICAgICAgICAgICA8bmFtZT5Ecml2ZXI8L25hbWU+XG4gICAgICAgICAgICAgIDxjbGFzc05hbWU+RHJpdmVyPC9jbGFzc05hbWU+XG4gICAgICAgICAgICA8L2ZhY3RJZGVudGlmaWVyPlxuICAgICAgICAgICAgPGV4cHJlc3Npb25JZGVudGlmaWVyPlxuICAgICAgICAgICAgICA8bmFtZT4xfDU8L25hbWU+XG4gICAgICAgICAgICAgIDx0eXBlPkdJVkVOPC90eXBlPlxuICAgICAgICAgICAgPC9leHByZXNzaW9uSWRlbnRpZmllcj5cbiAgICAgICAgICAgIDxyYXdWYWx1ZSBjbGFzcz1cInN0cmluZ1wiPjEwPC9yYXdWYWx1ZT5cbiAgICAgICAgICA8L0ZhY3RNYXBwaW5nVmFsdWU+XG4gICAgICAgICAgPEZhY3RNYXBwaW5nVmFsdWU+XG4gICAgICAgICAgICA8ZmFjdElkZW50aWZpZXI+XG4gICAgICAgICAgICAgIDxuYW1lPlZpb2xhdGlvbjwvbmFtZT5cbiAgICAgICAgICAgICAgPGNsYXNzTmFtZT5WaW9sYXRpb248L2NsYXNzTmFtZT5cbiAgICAgICAgICAgIDwvZmFjdElkZW50aWZpZXI+XG4gICAgICAgICAgICA8ZXhwcmVzc2lvbklkZW50aWZpZXI+XG4gICAgICAgICAgICAgIDxuYW1lPjF8ODwvbmFtZT5cbiAgICAgICAgICAgICAgPHR5cGU+R0lWRU48L3R5cGU+XG4gICAgICAgICAgICA8L2V4cHJlc3Npb25JZGVudGlmaWVyPlxuICAgICAgICAgICAgPHJhd1ZhbHVlIGNsYXNzPVwic3RyaW5nXCI+XCJzcGVlZFwiPC9yYXdWYWx1ZT5cbiAgICAgICAgICA8L0ZhY3RNYXBwaW5nVmFsdWU+XG4gICAgICAgICAgPEZhY3RNYXBwaW5nVmFsdWU+XG4gICAgICAgICAgICA8ZmFjdElkZW50aWZpZXI+XG4gICAgICAgICAgICAgIDxuYW1lPlZpb2xhdGlvbjwvbmFtZT5cbiAgICAgICAgICAgICAgPGNsYXNzTmFtZT5WaW9sYXRpb248L2NsYXNzTmFtZT5cbiAgICAgICAgICAgIDwvZmFjdElkZW50aWZpZXI+XG4gICAgICAgICAgICA8ZXhwcmVzc2lvbklkZW50aWZpZXI+XG4gICAgICAgICAgICAgIDxuYW1lPjF8OTwvbmFtZT5cbiAgICAgICAgICAgICAgPHR5cGU+R0lWRU48L3R5cGU+XG4gICAgICAgICAgICA8L2V4cHJlc3Npb25JZGVudGlmaWVyPlxuICAgICAgICAgICAgPHJhd1ZhbHVlIGNsYXNzPVwic3RyaW5nXCI+MTAwPC9yYXdWYWx1ZT5cbiAgICAgICAgICA8L0ZhY3RNYXBwaW5nVmFsdWU+XG4gICAgICAgICAgPEZhY3RNYXBwaW5nVmFsdWU+XG4gICAgICAgICAgICA8ZmFjdElkZW50aWZpZXI+XG4gICAgICAgICAgICAgIDxuYW1lPlZpb2xhdGlvbjwvbmFtZT5cbiAgICAgICAgICAgICAgPGNsYXNzTmFtZT5WaW9sYXRpb248L2NsYXNzTmFtZT5cbiAgICAgICAgICAgIDwvZmFjdElkZW50aWZpZXI+XG4gICAgICAgICAgICA8ZXhwcmVzc2lvbklkZW50aWZpZXI+XG4gICAgICAgICAgICAgIDxuYW1lPjF8MTA8L25hbWU+XG4gICAgICAgICAgICAgIDx0eXBlPkdJVkVOPC90eXBlPlxuICAgICAgICAgICAgPC9leHByZXNzaW9uSWRlbnRpZmllcj5cbiAgICAgICAgICAgIDxyYXdWYWx1ZSBjbGFzcz1cInN0cmluZ1wiPjEyMDwvcmF3VmFsdWU+XG4gICAgICAgICAgPC9GYWN0TWFwcGluZ1ZhbHVlPlxuICAgICAgICAgIDxGYWN0TWFwcGluZ1ZhbHVlPlxuICAgICAgICAgICAgPGZhY3RJZGVudGlmaWVyPlxuICAgICAgICAgICAgICA8bmFtZT5GaW5lPC9uYW1lPlxuICAgICAgICAgICAgICA8Y2xhc3NOYW1lPkZpbmU8L2NsYXNzTmFtZT5cbiAgICAgICAgICAgIDwvZmFjdElkZW50aWZpZXI+XG4gICAgICAgICAgICA8ZXhwcmVzc2lvbklkZW50aWZpZXI+XG4gICAgICAgICAgICAgIDxuYW1lPjF8MTE8L25hbWU+XG4gICAgICAgICAgICAgIDx0eXBlPkVYUEVDVDwvdHlwZT5cbiAgICAgICAgICAgIDwvZXhwcmVzc2lvbklkZW50aWZpZXI+XG4gICAgICAgICAgICA8cmF3VmFsdWUgY2xhc3M9XCJzdHJpbmdcIj41MDA8L3Jhd1ZhbHVlPlxuICAgICAgICAgIDwvRmFjdE1hcHBpbmdWYWx1ZT5cbiAgICAgICAgICA8RmFjdE1hcHBpbmdWYWx1ZT5cbiAgICAgICAgICAgIDxmYWN0SWRlbnRpZmllcj5cbiAgICAgICAgICAgICAgPG5hbWU+RmluZTwvbmFtZT5cbiAgICAgICAgICAgICAgPGNsYXNzTmFtZT5GaW5lPC9jbGFzc05hbWU+XG4gICAgICAgICAgICA8L2ZhY3RJZGVudGlmaWVyPlxuICAgICAgICAgICAgPGV4cHJlc3Npb25JZGVudGlmaWVyPlxuICAgICAgICAgICAgICA8bmFtZT4xfDEyPC9uYW1lPlxuICAgICAgICAgICAgICA8dHlwZT5FWFBFQ1Q8L3R5cGU+XG4gICAgICAgICAgICA8L2V4cHJlc3Npb25JZGVudGlmaWVyPlxuICAgICAgICAgICAgPHJhd1ZhbHVlIGNsYXNzPVwic3RyaW5nXCI+MzwvcmF3VmFsdWU+XG4gICAgICAgICAgPC9GYWN0TWFwcGluZ1ZhbHVlPlxuICAgICAgICAgIDxGYWN0TWFwcGluZ1ZhbHVlPlxuICAgICAgICAgICAgPGZhY3RJZGVudGlmaWVyPlxuICAgICAgICAgICAgICA8bmFtZT5TaG91bGQgdGhlIGRyaXZlciBiZSBzdXNwZW5kZWQ/PC9uYW1lPlxuICAgICAgICAgICAgICA8Y2xhc3NOYW1lPlNob3VsZCB0aGUgZHJpdmVyIGJlIHN1c3BlbmRlZD88L2NsYXNzTmFtZT5cbiAgICAgICAgICAgIDwvZmFjdElkZW50aWZpZXI+XG4gICAgICAgICAgICA8ZXhwcmVzc2lvbklkZW50aWZpZXI+XG4gICAgICAgICAgICAgIDxuYW1lPjF8MTM8L25hbWU+XG4gICAgICAgICAgICAgIDx0eXBlPkVYUEVDVDwvdHlwZT5cbiAgICAgICAgICAgIDwvZXhwcmVzc2lvbklkZW50aWZpZXI+XG4gICAgICAgICAgICA8cmF3VmFsdWUgY2xhc3M9XCJzdHJpbmdcIj5cIk5vXCI8L3Jhd1ZhbHVlPlxuICAgICAgICAgIDwvRmFjdE1hcHBpbmdWYWx1ZT5cbiAgICAgICAgICA8RmFjdE1hcHBpbmdWYWx1ZT5cbiAgICAgICAgICAgIDxmYWN0SWRlbnRpZmllcj5cbiAgICAgICAgICAgICAgPG5hbWU+IzwvbmFtZT5cbiAgICAgICAgICAgICAgPGNsYXNzTmFtZT5qYXZhLmxhbmcuSW50ZWdlcjwvY2xhc3NOYW1lPlxuICAgICAgICAgICAgPC9mYWN0SWRlbnRpZmllcj5cbiAgICAgICAgICAgIDxleHByZXNzaW9uSWRlbnRpZmllcj5cbiAgICAgICAgICAgICAgPG5hbWU+SW5kZXg8L25hbWU+XG4gICAgICAgICAgICAgIDx0eXBlPk9USEVSPC90eXBlPlxuICAgICAgICAgICAgPC9leHByZXNzaW9uSWRlbnRpZmllcj5cbiAgICAgICAgICAgIDxyYXdWYWx1ZSBjbGFzcz1cInN0cmluZ1wiPjE8L3Jhd1ZhbHVlPlxuICAgICAgICAgIDwvRmFjdE1hcHBpbmdWYWx1ZT5cbiAgICAgICAgPC9mYWN0TWFwcGluZ1ZhbHVlcz5cbiAgICAgIDwvU2NlbmFyaW8+XG4gICAgICA8U2NlbmFyaW8+XG4gICAgICAgIDxmYWN0TWFwcGluZ1ZhbHVlcz5cbiAgICAgICAgICA8RmFjdE1hcHBpbmdWYWx1ZT5cbiAgICAgICAgICAgIDxmYWN0SWRlbnRpZmllcj5cbiAgICAgICAgICAgICAgPG5hbWU+U2NlbmFyaW8gZGVzY3JpcHRpb248L25hbWU+XG4gICAgICAgICAgICAgIDxjbGFzc05hbWU+amF2YS5sYW5nLlN0cmluZzwvY2xhc3NOYW1lPlxuICAgICAgICAgICAgPC9mYWN0SWRlbnRpZmllcj5cbiAgICAgICAgICAgIDxleHByZXNzaW9uSWRlbnRpZmllcj5cbiAgICAgICAgICAgICAgPG5hbWU+RGVzY3JpcHRpb248L25hbWU+XG4gICAgICAgICAgICAgIDx0eXBlPk9USEVSPC90eXBlPlxuICAgICAgICAgICAgPC9leHByZXNzaW9uSWRlbnRpZmllcj5cbiAgICAgICAgICAgIDxyYXdWYWx1ZSBjbGFzcz1cInN0cmluZ1wiPkFib3ZlIHNwZWVkIGxpbWl0OiBtb3JlIHRoYW4gMzAga20vaDwvcmF3VmFsdWU+XG4gICAgICAgICAgPC9GYWN0TWFwcGluZ1ZhbHVlPlxuICAgICAgICAgIDxGYWN0TWFwcGluZ1ZhbHVlPlxuICAgICAgICAgICAgPGZhY3RJZGVudGlmaWVyPlxuICAgICAgICAgICAgICA8bmFtZT5Ecml2ZXI8L25hbWU+XG4gICAgICAgICAgICAgIDxjbGFzc05hbWU+RHJpdmVyPC9jbGFzc05hbWU+XG4gICAgICAgICAgICA8L2ZhY3RJZGVudGlmaWVyPlxuICAgICAgICAgICAgPGV4cHJlc3Npb25JZGVudGlmaWVyPlxuICAgICAgICAgICAgICA8bmFtZT4xfDU8L25hbWU+XG4gICAgICAgICAgICAgIDx0eXBlPkdJVkVOPC90eXBlPlxuICAgICAgICAgICAgPC9leHByZXNzaW9uSWRlbnRpZmllcj5cbiAgICAgICAgICAgIDxyYXdWYWx1ZSBjbGFzcz1cInN0cmluZ1wiPjEwPC9yYXdWYWx1ZT5cbiAgICAgICAgICA8L0ZhY3RNYXBwaW5nVmFsdWU+XG4gICAgICAgICAgPEZhY3RNYXBwaW5nVmFsdWU+XG4gICAgICAgICAgICA8ZmFjdElkZW50aWZpZXI+XG4gICAgICAgICAgICAgIDxuYW1lPlZpb2xhdGlvbjwvbmFtZT5cbiAgICAgICAgICAgICAgPGNsYXNzTmFtZT5WaW9sYXRpb248L2NsYXNzTmFtZT5cbiAgICAgICAgICAgIDwvZmFjdElkZW50aWZpZXI+XG4gICAgICAgICAgICA8ZXhwcmVzc2lvbklkZW50aWZpZXI+XG4gICAgICAgICAgICAgIDxuYW1lPjF8ODwvbmFtZT5cbiAgICAgICAgICAgICAgPHR5cGU+R0lWRU48L3R5cGU+XG4gICAgICAgICAgICA8L2V4cHJlc3Npb25JZGVudGlmaWVyPlxuICAgICAgICAgICAgPHJhd1ZhbHVlIGNsYXNzPVwic3RyaW5nXCI+XCJzcGVlZFwiPC9yYXdWYWx1ZT5cbiAgICAgICAgICA8L0ZhY3RNYXBwaW5nVmFsdWU+XG4gICAgICAgICAgPEZhY3RNYXBwaW5nVmFsdWU+XG4gICAgICAgICAgICA8ZmFjdElkZW50aWZpZXI+XG4gICAgICAgICAgICAgIDxuYW1lPlZpb2xhdGlvbjwvbmFtZT5cbiAgICAgICAgICAgICAgPGNsYXNzTmFtZT5WaW9sYXRpb248L2NsYXNzTmFtZT5cbiAgICAgICAgICAgIDwvZmFjdElkZW50aWZpZXI+XG4gICAgICAgICAgICA8ZXhwcmVzc2lvbklkZW50aWZpZXI+XG4gICAgICAgICAgICAgIDxuYW1lPjF8OTwvbmFtZT5cbiAgICAgICAgICAgICAgPHR5cGU+R0lWRU48L3R5cGU+XG4gICAgICAgICAgICA8L2V4cHJlc3Npb25JZGVudGlmaWVyPlxuICAgICAgICAgICAgPHJhd1ZhbHVlIGNsYXNzPVwic3RyaW5nXCI+MTAwPC9yYXdWYWx1ZT5cbiAgICAgICAgICA8L0ZhY3RNYXBwaW5nVmFsdWU+XG4gICAgICAgICAgPEZhY3RNYXBwaW5nVmFsdWU+XG4gICAgICAgICAgICA8ZmFjdElkZW50aWZpZXI+XG4gICAgICAgICAgICAgIDxuYW1lPlZpb2xhdGlvbjwvbmFtZT5cbiAgICAgICAgICAgICAgPGNsYXNzTmFtZT5WaW9sYXRpb248L2NsYXNzTmFtZT5cbiAgICAgICAgICAgIDwvZmFjdElkZW50aWZpZXI+XG4gICAgICAgICAgICA8ZXhwcmVzc2lvbklkZW50aWZpZXI+XG4gICAgICAgICAgICAgIDxuYW1lPjF8MTA8L25hbWU+XG4gICAgICAgICAgICAgIDx0eXBlPkdJVkVOPC90eXBlPlxuICAgICAgICAgICAgPC9leHByZXNzaW9uSWRlbnRpZmllcj5cbiAgICAgICAgICAgIDxyYXdWYWx1ZSBjbGFzcz1cInN0cmluZ1wiPjE1MDwvcmF3VmFsdWU+XG4gICAgICAgICAgPC9GYWN0TWFwcGluZ1ZhbHVlPlxuICAgICAgICAgIDxGYWN0TWFwcGluZ1ZhbHVlPlxuICAgICAgICAgICAgPGZhY3RJZGVudGlmaWVyPlxuICAgICAgICAgICAgICA8bmFtZT5GaW5lPC9uYW1lPlxuICAgICAgICAgICAgICA8Y2xhc3NOYW1lPkZpbmU8L2NsYXNzTmFtZT5cbiAgICAgICAgICAgIDwvZmFjdElkZW50aWZpZXI+XG4gICAgICAgICAgICA8ZXhwcmVzc2lvbklkZW50aWZpZXI+XG4gICAgICAgICAgICAgIDxuYW1lPjF8MTE8L25hbWU+XG4gICAgICAgICAgICAgIDx0eXBlPkVYUEVDVDwvdHlwZT5cbiAgICAgICAgICAgIDwvZXhwcmVzc2lvbklkZW50aWZpZXI+XG4gICAgICAgICAgICA8cmF3VmFsdWUgY2xhc3M9XCJzdHJpbmdcIj4xMDAwPC9yYXdWYWx1ZT5cbiAgICAgICAgICA8L0ZhY3RNYXBwaW5nVmFsdWU+XG4gICAgICAgICAgPEZhY3RNYXBwaW5nVmFsdWU+XG4gICAgICAgICAgICA8ZmFjdElkZW50aWZpZXI+XG4gICAgICAgICAgICAgIDxuYW1lPkZpbmU8L25hbWU+XG4gICAgICAgICAgICAgIDxjbGFzc05hbWU+RmluZTwvY2xhc3NOYW1lPlxuICAgICAgICAgICAgPC9mYWN0SWRlbnRpZmllcj5cbiAgICAgICAgICAgIDxleHByZXNzaW9uSWRlbnRpZmllcj5cbiAgICAgICAgICAgICAgPG5hbWU+MXwxMjwvbmFtZT5cbiAgICAgICAgICAgICAgPHR5cGU+RVhQRUNUPC90eXBlPlxuICAgICAgICAgICAgPC9leHByZXNzaW9uSWRlbnRpZmllcj5cbiAgICAgICAgICAgIDxyYXdWYWx1ZSBjbGFzcz1cInN0cmluZ1wiPjc8L3Jhd1ZhbHVlPlxuICAgICAgICAgIDwvRmFjdE1hcHBpbmdWYWx1ZT5cbiAgICAgICAgICA8RmFjdE1hcHBpbmdWYWx1ZT5cbiAgICAgICAgICAgIDxmYWN0SWRlbnRpZmllcj5cbiAgICAgICAgICAgICAgPG5hbWU+U2hvdWxkIHRoZSBkcml2ZXIgYmUgc3VzcGVuZGVkPzwvbmFtZT5cbiAgICAgICAgICAgICAgPGNsYXNzTmFtZT5TaG91bGQgdGhlIGRyaXZlciBiZSBzdXNwZW5kZWQ/PC9jbGFzc05hbWU+XG4gICAgICAgICAgICA8L2ZhY3RJZGVudGlmaWVyPlxuICAgICAgICAgICAgPGV4cHJlc3Npb25JZGVudGlmaWVyPlxuICAgICAgICAgICAgICA8bmFtZT4xfDEzPC9uYW1lPlxuICAgICAgICAgICAgICA8dHlwZT5FWFBFQ1Q8L3R5cGU+XG4gICAgICAgICAgICA8L2V4cHJlc3Npb25JZGVudGlmaWVyPlxuICAgICAgICAgICAgPHJhd1ZhbHVlIGNsYXNzPVwic3RyaW5nXCI+XCJOb1wiPC9yYXdWYWx1ZT5cbiAgICAgICAgICA8L0ZhY3RNYXBwaW5nVmFsdWU+XG4gICAgICAgICAgPEZhY3RNYXBwaW5nVmFsdWU+XG4gICAgICAgICAgICA8ZmFjdElkZW50aWZpZXI+XG4gICAgICAgICAgICAgIDxuYW1lPiM8L25hbWU+XG4gICAgICAgICAgICAgIDxjbGFzc05hbWU+amF2YS5sYW5nLkludGVnZXI8L2NsYXNzTmFtZT5cbiAgICAgICAgICAgIDwvZmFjdElkZW50aWZpZXI+XG4gICAgICAgICAgICA8ZXhwcmVzc2lvbklkZW50aWZpZXI+XG4gICAgICAgICAgICAgIDxuYW1lPkluZGV4PC9uYW1lPlxuICAgICAgICAgICAgICA8dHlwZT5PVEhFUjwvdHlwZT5cbiAgICAgICAgICAgIDwvZXhwcmVzc2lvbklkZW50aWZpZXI+XG4gICAgICAgICAgICA8cmF3VmFsdWUgY2xhc3M9XCJzdHJpbmdcIj4yPC9yYXdWYWx1ZT5cbiAgICAgICAgICA8L0ZhY3RNYXBwaW5nVmFsdWU+XG4gICAgICAgIDwvZmFjdE1hcHBpbmdWYWx1ZXM+XG4gICAgICA8L1NjZW5hcmlvPlxuICAgICAgPFNjZW5hcmlvPlxuICAgICAgICA8ZmFjdE1hcHBpbmdWYWx1ZXM+XG4gICAgICAgICAgPEZhY3RNYXBwaW5nVmFsdWU+XG4gICAgICAgICAgICA8ZmFjdElkZW50aWZpZXI+XG4gICAgICAgICAgICAgIDxuYW1lPlNjZW5hcmlvIGRlc2NyaXB0aW9uPC9uYW1lPlxuICAgICAgICAgICAgICA8Y2xhc3NOYW1lPmphdmEubGFuZy5TdHJpbmc8L2NsYXNzTmFtZT5cbiAgICAgICAgICAgIDwvZmFjdElkZW50aWZpZXI+XG4gICAgICAgICAgICA8ZXhwcmVzc2lvbklkZW50aWZpZXI+XG4gICAgICAgICAgICAgIDxuYW1lPkRlc2NyaXB0aW9uPC9uYW1lPlxuICAgICAgICAgICAgICA8dHlwZT5PVEhFUjwvdHlwZT5cbiAgICAgICAgICAgIDwvZXhwcmVzc2lvbklkZW50aWZpZXI+XG4gICAgICAgICAgICA8cmF3VmFsdWUgY2xhc3M9XCJzdHJpbmdcIj5QYXJraW5nIHZpb2xhdGlvbjwvcmF3VmFsdWU+XG4gICAgICAgICAgPC9GYWN0TWFwcGluZ1ZhbHVlPlxuICAgICAgICAgIDxGYWN0TWFwcGluZ1ZhbHVlPlxuICAgICAgICAgICAgPGZhY3RJZGVudGlmaWVyPlxuICAgICAgICAgICAgICA8bmFtZT5Ecml2ZXI8L25hbWU+XG4gICAgICAgICAgICAgIDxjbGFzc05hbWU+RHJpdmVyPC9jbGFzc05hbWU+XG4gICAgICAgICAgICA8L2ZhY3RJZGVudGlmaWVyPlxuICAgICAgICAgICAgPGV4cHJlc3Npb25JZGVudGlmaWVyPlxuICAgICAgICAgICAgICA8bmFtZT4xfDU8L25hbWU+XG4gICAgICAgICAgICAgIDx0eXBlPkdJVkVOPC90eXBlPlxuICAgICAgICAgICAgPC9leHByZXNzaW9uSWRlbnRpZmllcj5cbiAgICAgICAgICAgIDxyYXdWYWx1ZSBjbGFzcz1cInN0cmluZ1wiPjEwPC9yYXdWYWx1ZT5cbiAgICAgICAgICA8L0ZhY3RNYXBwaW5nVmFsdWU+XG4gICAgICAgICAgPEZhY3RNYXBwaW5nVmFsdWU+XG4gICAgICAgICAgICA8ZmFjdElkZW50aWZpZXI+XG4gICAgICAgICAgICAgIDxuYW1lPlZpb2xhdGlvbjwvbmFtZT5cbiAgICAgICAgICAgICAgPGNsYXNzTmFtZT5WaW9sYXRpb248L2NsYXNzTmFtZT5cbiAgICAgICAgICAgIDwvZmFjdElkZW50aWZpZXI+XG4gICAgICAgICAgICA8ZXhwcmVzc2lvbklkZW50aWZpZXI+XG4gICAgICAgICAgICAgIDxuYW1lPjF8ODwvbmFtZT5cbiAgICAgICAgICAgICAgPHR5cGU+R0lWRU48L3R5cGU+XG4gICAgICAgICAgICA8L2V4cHJlc3Npb25JZGVudGlmaWVyPlxuICAgICAgICAgICAgPHJhd1ZhbHVlIGNsYXNzPVwic3RyaW5nXCI+XCJwYXJraW5nXCI8L3Jhd1ZhbHVlPlxuICAgICAgICAgIDwvRmFjdE1hcHBpbmdWYWx1ZT5cbiAgICAgICAgICA8RmFjdE1hcHBpbmdWYWx1ZT5cbiAgICAgICAgICAgIDxmYWN0SWRlbnRpZmllcj5cbiAgICAgICAgICAgICAgPG5hbWU+VmlvbGF0aW9uPC9uYW1lPlxuICAgICAgICAgICAgICA8Y2xhc3NOYW1lPlZpb2xhdGlvbjwvY2xhc3NOYW1lPlxuICAgICAgICAgICAgPC9mYWN0SWRlbnRpZmllcj5cbiAgICAgICAgICAgIDxleHByZXNzaW9uSWRlbnRpZmllcj5cbiAgICAgICAgICAgICAgPG5hbWU+MXw5PC9uYW1lPlxuICAgICAgICAgICAgICA8dHlwZT5HSVZFTjwvdHlwZT5cbiAgICAgICAgICAgIDwvZXhwcmVzc2lvbklkZW50aWZpZXI+XG4gICAgICAgICAgPC9GYWN0TWFwcGluZ1ZhbHVlPlxuICAgICAgICAgIDxGYWN0TWFwcGluZ1ZhbHVlPlxuICAgICAgICAgICAgPGZhY3RJZGVudGlmaWVyPlxuICAgICAgICAgICAgICA8bmFtZT5WaW9sYXRpb248L25hbWU+XG4gICAgICAgICAgICAgIDxjbGFzc05hbWU+VmlvbGF0aW9uPC9jbGFzc05hbWU+XG4gICAgICAgICAgICA8L2ZhY3RJZGVudGlmaWVyPlxuICAgICAgICAgICAgPGV4cHJlc3Npb25JZGVudGlmaWVyPlxuICAgICAgICAgICAgICA8bmFtZT4xfDEwPC9uYW1lPlxuICAgICAgICAgICAgICA8dHlwZT5HSVZFTjwvdHlwZT5cbiAgICAgICAgICAgIDwvZXhwcmVzc2lvbklkZW50aWZpZXI+XG4gICAgICAgICAgPC9GYWN0TWFwcGluZ1ZhbHVlPlxuICAgICAgICAgIDxGYWN0TWFwcGluZ1ZhbHVlPlxuICAgICAgICAgICAgPGZhY3RJZGVudGlmaWVyPlxuICAgICAgICAgICAgICA8bmFtZT5GaW5lPC9uYW1lPlxuICAgICAgICAgICAgICA8Y2xhc3NOYW1lPkZpbmU8L2NsYXNzTmFtZT5cbiAgICAgICAgICAgIDwvZmFjdElkZW50aWZpZXI+XG4gICAgICAgICAgICA8ZXhwcmVzc2lvbklkZW50aWZpZXI+XG4gICAgICAgICAgICAgIDxuYW1lPjF8MTE8L25hbWU+XG4gICAgICAgICAgICAgIDx0eXBlPkVYUEVDVDwvdHlwZT5cbiAgICAgICAgICAgIDwvZXhwcmVzc2lvbklkZW50aWZpZXI+XG4gICAgICAgICAgICA8cmF3VmFsdWUgY2xhc3M9XCJzdHJpbmdcIj4xMDA8L3Jhd1ZhbHVlPlxuICAgICAgICAgIDwvRmFjdE1hcHBpbmdWYWx1ZT5cbiAgICAgICAgICA8RmFjdE1hcHBpbmdWYWx1ZT5cbiAgICAgICAgICAgIDxmYWN0SWRlbnRpZmllcj5cbiAgICAgICAgICAgICAgPG5hbWU+RmluZTwvbmFtZT5cbiAgICAgICAgICAgICAgPGNsYXNzTmFtZT5GaW5lPC9jbGFzc05hbWU+XG4gICAgICAgICAgICA8L2ZhY3RJZGVudGlmaWVyPlxuICAgICAgICAgICAgPGV4cHJlc3Npb25JZGVudGlmaWVyPlxuICAgICAgICAgICAgICA8bmFtZT4xfDEyPC9uYW1lPlxuICAgICAgICAgICAgICA8dHlwZT5FWFBFQ1Q8L3R5cGU+XG4gICAgICAgICAgICA8L2V4cHJlc3Npb25JZGVudGlmaWVyPlxuICAgICAgICAgICAgPHJhd1ZhbHVlIGNsYXNzPVwic3RyaW5nXCI+MTwvcmF3VmFsdWU+XG4gICAgICAgICAgPC9GYWN0TWFwcGluZ1ZhbHVlPlxuICAgICAgICAgIDxGYWN0TWFwcGluZ1ZhbHVlPlxuICAgICAgICAgICAgPGZhY3RJZGVudGlmaWVyPlxuICAgICAgICAgICAgICA8bmFtZT5TaG91bGQgdGhlIGRyaXZlciBiZSBzdXNwZW5kZWQ/PC9uYW1lPlxuICAgICAgICAgICAgICA8Y2xhc3NOYW1lPlNob3VsZCB0aGUgZHJpdmVyIGJlIHN1c3BlbmRlZD88L2NsYXNzTmFtZT5cbiAgICAgICAgICAgIDwvZmFjdElkZW50aWZpZXI+XG4gICAgICAgICAgICA8ZXhwcmVzc2lvbklkZW50aWZpZXI+XG4gICAgICAgICAgICAgIDxuYW1lPjF8MTM8L25hbWU+XG4gICAgICAgICAgICAgIDx0eXBlPkVYUEVDVDwvdHlwZT5cbiAgICAgICAgICAgIDwvZXhwcmVzc2lvbklkZW50aWZpZXI+XG4gICAgICAgICAgICA8cmF3VmFsdWUgY2xhc3M9XCJzdHJpbmdcIj5cIk5vXCI8L3Jhd1ZhbHVlPlxuICAgICAgICAgIDwvRmFjdE1hcHBpbmdWYWx1ZT5cbiAgICAgICAgICA8RmFjdE1hcHBpbmdWYWx1ZT5cbiAgICAgICAgICAgIDxmYWN0SWRlbnRpZmllcj5cbiAgICAgICAgICAgICAgPG5hbWU+IzwvbmFtZT5cbiAgICAgICAgICAgICAgPGNsYXNzTmFtZT5qYXZhLmxhbmcuSW50ZWdlcjwvY2xhc3NOYW1lPlxuICAgICAgICAgICAgPC9mYWN0SWRlbnRpZmllcj5cbiAgICAgICAgICAgIDxleHByZXNzaW9uSWRlbnRpZmllcj5cbiAgICAgICAgICAgICAgPG5hbWU+SW5kZXg8L25hbWU+XG4gICAgICAgICAgICAgIDx0eXBlPk9USEVSPC90eXBlPlxuICAgICAgICAgICAgPC9leHByZXNzaW9uSWRlbnRpZmllcj5cbiAgICAgICAgICAgIDxyYXdWYWx1ZSBjbGFzcz1cInN0cmluZ1wiPjM8L3Jhd1ZhbHVlPlxuICAgICAgICAgIDwvRmFjdE1hcHBpbmdWYWx1ZT5cbiAgICAgICAgPC9mYWN0TWFwcGluZ1ZhbHVlcz5cbiAgICAgIDwvU2NlbmFyaW8+XG4gICAgICA8U2NlbmFyaW8+XG4gICAgICAgIDxmYWN0TWFwcGluZ1ZhbHVlcz5cbiAgICAgICAgICA8RmFjdE1hcHBpbmdWYWx1ZT5cbiAgICAgICAgICAgIDxmYWN0SWRlbnRpZmllcj5cbiAgICAgICAgICAgICAgPG5hbWU+U2NlbmFyaW8gZGVzY3JpcHRpb248L25hbWU+XG4gICAgICAgICAgICAgIDxjbGFzc05hbWU+amF2YS5sYW5nLlN0cmluZzwvY2xhc3NOYW1lPlxuICAgICAgICAgICAgPC9mYWN0SWRlbnRpZmllcj5cbiAgICAgICAgICAgIDxleHByZXNzaW9uSWRlbnRpZmllcj5cbiAgICAgICAgICAgICAgPG5hbWU+RGVzY3JpcHRpb248L25hbWU+XG4gICAgICAgICAgICAgIDx0eXBlPk9USEVSPC90eXBlPlxuICAgICAgICAgICAgPC9leHByZXNzaW9uSWRlbnRpZmllcj5cbiAgICAgICAgICAgIDxyYXdWYWx1ZSBjbGFzcz1cInN0cmluZ1wiPkRVSSB2aW9sYXRpb248L3Jhd1ZhbHVlPlxuICAgICAgICAgIDwvRmFjdE1hcHBpbmdWYWx1ZT5cbiAgICAgICAgICA8RmFjdE1hcHBpbmdWYWx1ZT5cbiAgICAgICAgICAgIDxmYWN0SWRlbnRpZmllcj5cbiAgICAgICAgICAgICAgPG5hbWU+RHJpdmVyPC9uYW1lPlxuICAgICAgICAgICAgICA8Y2xhc3NOYW1lPkRyaXZlcjwvY2xhc3NOYW1lPlxuICAgICAgICAgICAgPC9mYWN0SWRlbnRpZmllcj5cbiAgICAgICAgICAgIDxleHByZXNzaW9uSWRlbnRpZmllcj5cbiAgICAgICAgICAgICAgPG5hbWU+MXw1PC9uYW1lPlxuICAgICAgICAgICAgICA8dHlwZT5HSVZFTjwvdHlwZT5cbiAgICAgICAgICAgIDwvZXhwcmVzc2lvbklkZW50aWZpZXI+XG4gICAgICAgICAgICA8cmF3VmFsdWUgY2xhc3M9XCJzdHJpbmdcIj4xMDwvcmF3VmFsdWU+XG4gICAgICAgICAgPC9GYWN0TWFwcGluZ1ZhbHVlPlxuICAgICAgICAgIDxGYWN0TWFwcGluZ1ZhbHVlPlxuICAgICAgICAgICAgPGZhY3RJZGVudGlmaWVyPlxuICAgICAgICAgICAgICA8bmFtZT5WaW9sYXRpb248L25hbWU+XG4gICAgICAgICAgICAgIDxjbGFzc05hbWU+VmlvbGF0aW9uPC9jbGFzc05hbWU+XG4gICAgICAgICAgICA8L2ZhY3RJZGVudGlmaWVyPlxuICAgICAgICAgICAgPGV4cHJlc3Npb25JZGVudGlmaWVyPlxuICAgICAgICAgICAgICA8bmFtZT4xfDg8L25hbWU+XG4gICAgICAgICAgICAgIDx0eXBlPkdJVkVOPC90eXBlPlxuICAgICAgICAgICAgPC9leHByZXNzaW9uSWRlbnRpZmllcj5cbiAgICAgICAgICAgIDxyYXdWYWx1ZSBjbGFzcz1cInN0cmluZ1wiPlwiZHJpdmluZyB1bmRlciB0aGUgaW5mbHVlbmNlXCI8L3Jhd1ZhbHVlPlxuICAgICAgICAgIDwvRmFjdE1hcHBpbmdWYWx1ZT5cbiAgICAgICAgICA8RmFjdE1hcHBpbmdWYWx1ZT5cbiAgICAgICAgICAgIDxmYWN0SWRlbnRpZmllcj5cbiAgICAgICAgICAgICAgPG5hbWU+VmlvbGF0aW9uPC9uYW1lPlxuICAgICAgICAgICAgICA8Y2xhc3NOYW1lPlZpb2xhdGlvbjwvY2xhc3NOYW1lPlxuICAgICAgICAgICAgPC9mYWN0SWRlbnRpZmllcj5cbiAgICAgICAgICAgIDxleHByZXNzaW9uSWRlbnRpZmllcj5cbiAgICAgICAgICAgICAgPG5hbWU+MXw5PC9uYW1lPlxuICAgICAgICAgICAgICA8dHlwZT5HSVZFTjwvdHlwZT5cbiAgICAgICAgICAgIDwvZXhwcmVzc2lvbklkZW50aWZpZXI+XG4gICAgICAgICAgPC9GYWN0TWFwcGluZ1ZhbHVlPlxuICAgICAgICAgIDxGYWN0TWFwcGluZ1ZhbHVlPlxuICAgICAgICAgICAgPGZhY3RJZGVudGlmaWVyPlxuICAgICAgICAgICAgICA8bmFtZT5WaW9sYXRpb248L25hbWU+XG4gICAgICAgICAgICAgIDxjbGFzc05hbWU+VmlvbGF0aW9uPC9jbGFzc05hbWU+XG4gICAgICAgICAgICA8L2ZhY3RJZGVudGlmaWVyPlxuICAgICAgICAgICAgPGV4cHJlc3Npb25JZGVudGlmaWVyPlxuICAgICAgICAgICAgICA8bmFtZT4xfDEwPC9uYW1lPlxuICAgICAgICAgICAgICA8dHlwZT5HSVZFTjwvdHlwZT5cbiAgICAgICAgICAgIDwvZXhwcmVzc2lvbklkZW50aWZpZXI+XG4gICAgICAgICAgPC9GYWN0TWFwcGluZ1ZhbHVlPlxuICAgICAgICAgIDxGYWN0TWFwcGluZ1ZhbHVlPlxuICAgICAgICAgICAgPGZhY3RJZGVudGlmaWVyPlxuICAgICAgICAgICAgICA8bmFtZT5GaW5lPC9uYW1lPlxuICAgICAgICAgICAgICA8Y2xhc3NOYW1lPkZpbmU8L2NsYXNzTmFtZT5cbiAgICAgICAgICAgIDwvZmFjdElkZW50aWZpZXI+XG4gICAgICAgICAgICA8ZXhwcmVzc2lvbklkZW50aWZpZXI+XG4gICAgICAgICAgICAgIDxuYW1lPjF8MTE8L25hbWU+XG4gICAgICAgICAgICAgIDx0eXBlPkVYUEVDVDwvdHlwZT5cbiAgICAgICAgICAgIDwvZXhwcmVzc2lvbklkZW50aWZpZXI+XG4gICAgICAgICAgICA8cmF3VmFsdWUgY2xhc3M9XCJzdHJpbmdcIj4xMDAwPC9yYXdWYWx1ZT5cbiAgICAgICAgICA8L0ZhY3RNYXBwaW5nVmFsdWU+XG4gICAgICAgICAgPEZhY3RNYXBwaW5nVmFsdWU+XG4gICAgICAgICAgICA8ZmFjdElkZW50aWZpZXI+XG4gICAgICAgICAgICAgIDxuYW1lPkZpbmU8L25hbWU+XG4gICAgICAgICAgICAgIDxjbGFzc05hbWU+RmluZTwvY2xhc3NOYW1lPlxuICAgICAgICAgICAgPC9mYWN0SWRlbnRpZmllcj5cbiAgICAgICAgICAgIDxleHByZXNzaW9uSWRlbnRpZmllcj5cbiAgICAgICAgICAgICAgPG5hbWU+MXwxMjwvbmFtZT5cbiAgICAgICAgICAgICAgPHR5cGU+RVhQRUNUPC90eXBlPlxuICAgICAgICAgICAgPC9leHByZXNzaW9uSWRlbnRpZmllcj5cbiAgICAgICAgICAgIDxyYXdWYWx1ZSBjbGFzcz1cInN0cmluZ1wiPjU8L3Jhd1ZhbHVlPlxuICAgICAgICAgIDwvRmFjdE1hcHBpbmdWYWx1ZT5cbiAgICAgICAgICA8RmFjdE1hcHBpbmdWYWx1ZT5cbiAgICAgICAgICAgIDxmYWN0SWRlbnRpZmllcj5cbiAgICAgICAgICAgICAgPG5hbWU+U2hvdWxkIHRoZSBkcml2ZXIgYmUgc3VzcGVuZGVkPzwvbmFtZT5cbiAgICAgICAgICAgICAgPGNsYXNzTmFtZT5TaG91bGQgdGhlIGRyaXZlciBiZSBzdXNwZW5kZWQ/PC9jbGFzc05hbWU+XG4gICAgICAgICAgICA8L2ZhY3RJZGVudGlmaWVyPlxuICAgICAgICAgICAgPGV4cHJlc3Npb25JZGVudGlmaWVyPlxuICAgICAgICAgICAgICA8bmFtZT4xfDEzPC9uYW1lPlxuICAgICAgICAgICAgICA8dHlwZT5FWFBFQ1Q8L3R5cGU+XG4gICAgICAgICAgICA8L2V4cHJlc3Npb25JZGVudGlmaWVyPlxuICAgICAgICAgICAgPHJhd1ZhbHVlIGNsYXNzPVwic3RyaW5nXCI+XCJOb1wiPC9yYXdWYWx1ZT5cbiAgICAgICAgICA8L0ZhY3RNYXBwaW5nVmFsdWU+XG4gICAgICAgICAgPEZhY3RNYXBwaW5nVmFsdWU+XG4gICAgICAgICAgICA8ZmFjdElkZW50aWZpZXI+XG4gICAgICAgICAgICAgIDxuYW1lPiM8L25hbWU+XG4gICAgICAgICAgICAgIDxjbGFzc05hbWU+amF2YS5sYW5nLkludGVnZXI8L2NsYXNzTmFtZT5cbiAgICAgICAgICAgIDwvZmFjdElkZW50aWZpZXI+XG4gICAgICAgICAgICA8ZXhwcmVzc2lvbklkZW50aWZpZXI+XG4gICAgICAgICAgICAgIDxuYW1lPkluZGV4PC9uYW1lPlxuICAgICAgICAgICAgICA8dHlwZT5PVEhFUjwvdHlwZT5cbiAgICAgICAgICAgIDwvZXhwcmVzc2lvbklkZW50aWZpZXI+XG4gICAgICAgICAgICA8cmF3VmFsdWUgY2xhc3M9XCJzdHJpbmdcIj40PC9yYXdWYWx1ZT5cbiAgICAgICAgICA8L0ZhY3RNYXBwaW5nVmFsdWU+XG4gICAgICAgIDwvZmFjdE1hcHBpbmdWYWx1ZXM+XG4gICAgICA8L1NjZW5hcmlvPlxuICAgICAgPFNjZW5hcmlvPlxuICAgICAgICA8ZmFjdE1hcHBpbmdWYWx1ZXM+XG4gICAgICAgICAgPEZhY3RNYXBwaW5nVmFsdWU+XG4gICAgICAgICAgICA8ZmFjdElkZW50aWZpZXI+XG4gICAgICAgICAgICAgIDxuYW1lPlNjZW5hcmlvIGRlc2NyaXB0aW9uPC9uYW1lPlxuICAgICAgICAgICAgICA8Y2xhc3NOYW1lPmphdmEubGFuZy5TdHJpbmc8L2NsYXNzTmFtZT5cbiAgICAgICAgICAgIDwvZmFjdElkZW50aWZpZXI+XG4gICAgICAgICAgICA8ZXhwcmVzc2lvbklkZW50aWZpZXI+XG4gICAgICAgICAgICAgIDxuYW1lPkRlc2NyaXB0aW9uPC9uYW1lPlxuICAgICAgICAgICAgICA8dHlwZT5PVEhFUjwvdHlwZT5cbiAgICAgICAgICAgIDwvZXhwcmVzc2lvbklkZW50aWZpZXI+XG4gICAgICAgICAgICA8cmF3VmFsdWUgY2xhc3M9XCJzdHJpbmdcIj5Ecml2ZXIgc3VzcGVuZGVkPC9yYXdWYWx1ZT5cbiAgICAgICAgICA8L0ZhY3RNYXBwaW5nVmFsdWU+XG4gICAgICAgICAgPEZhY3RNYXBwaW5nVmFsdWU+XG4gICAgICAgICAgICA8ZmFjdElkZW50aWZpZXI+XG4gICAgICAgICAgICAgIDxuYW1lPkRyaXZlcjwvbmFtZT5cbiAgICAgICAgICAgICAgPGNsYXNzTmFtZT5Ecml2ZXI8L2NsYXNzTmFtZT5cbiAgICAgICAgICAgIDwvZmFjdElkZW50aWZpZXI+XG4gICAgICAgICAgICA8ZXhwcmVzc2lvbklkZW50aWZpZXI+XG4gICAgICAgICAgICAgIDxuYW1lPjF8NTwvbmFtZT5cbiAgICAgICAgICAgICAgPHR5cGU+R0lWRU48L3R5cGU+XG4gICAgICAgICAgICA8L2V4cHJlc3Npb25JZGVudGlmaWVyPlxuICAgICAgICAgICAgPHJhd1ZhbHVlIGNsYXNzPVwic3RyaW5nXCI+MTU8L3Jhd1ZhbHVlPlxuICAgICAgICAgIDwvRmFjdE1hcHBpbmdWYWx1ZT5cbiAgICAgICAgICA8RmFjdE1hcHBpbmdWYWx1ZT5cbiAgICAgICAgICAgIDxmYWN0SWRlbnRpZmllcj5cbiAgICAgICAgICAgICAgPG5hbWU+VmlvbGF0aW9uPC9uYW1lPlxuICAgICAgICAgICAgICA8Y2xhc3NOYW1lPlZpb2xhdGlvbjwvY2xhc3NOYW1lPlxuICAgICAgICAgICAgPC9mYWN0SWRlbnRpZmllcj5cbiAgICAgICAgICAgIDxleHByZXNzaW9uSWRlbnRpZmllcj5cbiAgICAgICAgICAgICAgPG5hbWU+MXw4PC9uYW1lPlxuICAgICAgICAgICAgICA8dHlwZT5HSVZFTjwvdHlwZT5cbiAgICAgICAgICAgIDwvZXhwcmVzc2lvbklkZW50aWZpZXI+XG4gICAgICAgICAgICA8cmF3VmFsdWUgY2xhc3M9XCJzdHJpbmdcIj5cInNwZWVkXCI8L3Jhd1ZhbHVlPlxuICAgICAgICAgIDwvRmFjdE1hcHBpbmdWYWx1ZT5cbiAgICAgICAgICA8RmFjdE1hcHBpbmdWYWx1ZT5cbiAgICAgICAgICAgIDxmYWN0SWRlbnRpZmllcj5cbiAgICAgICAgICAgICAgPG5hbWU+VmlvbGF0aW9uPC9uYW1lPlxuICAgICAgICAgICAgICA8Y2xhc3NOYW1lPlZpb2xhdGlvbjwvY2xhc3NOYW1lPlxuICAgICAgICAgICAgPC9mYWN0SWRlbnRpZmllcj5cbiAgICAgICAgICAgIDxleHByZXNzaW9uSWRlbnRpZmllcj5cbiAgICAgICAgICAgICAgPG5hbWU+MXw5PC9uYW1lPlxuICAgICAgICAgICAgICA8dHlwZT5HSVZFTjwvdHlwZT5cbiAgICAgICAgICAgIDwvZXhwcmVzc2lvbklkZW50aWZpZXI+XG4gICAgICAgICAgICA8cmF3VmFsdWUgY2xhc3M9XCJzdHJpbmdcIj4xMDA8L3Jhd1ZhbHVlPlxuICAgICAgICAgIDwvRmFjdE1hcHBpbmdWYWx1ZT5cbiAgICAgICAgICA8RmFjdE1hcHBpbmdWYWx1ZT5cbiAgICAgICAgICAgIDxmYWN0SWRlbnRpZmllcj5cbiAgICAgICAgICAgICAgPG5hbWU+VmlvbGF0aW9uPC9uYW1lPlxuICAgICAgICAgICAgICA8Y2xhc3NOYW1lPlZpb2xhdGlvbjwvY2xhc3NOYW1lPlxuICAgICAgICAgICAgPC9mYWN0SWRlbnRpZmllcj5cbiAgICAgICAgICAgIDxleHByZXNzaW9uSWRlbnRpZmllcj5cbiAgICAgICAgICAgICAgPG5hbWU+MXwxMDwvbmFtZT5cbiAgICAgICAgICAgICAgPHR5cGU+R0lWRU48L3R5cGU+XG4gICAgICAgICAgICA8L2V4cHJlc3Npb25JZGVudGlmaWVyPlxuICAgICAgICAgICAgPHJhd1ZhbHVlIGNsYXNzPVwic3RyaW5nXCI+MTQwPC9yYXdWYWx1ZT5cbiAgICAgICAgICA8L0ZhY3RNYXBwaW5nVmFsdWU+XG4gICAgICAgICAgPEZhY3RNYXBwaW5nVmFsdWU+XG4gICAgICAgICAgICA8ZmFjdElkZW50aWZpZXI+XG4gICAgICAgICAgICAgIDxuYW1lPkZpbmU8L25hbWU+XG4gICAgICAgICAgICAgIDxjbGFzc05hbWU+RmluZTwvY2xhc3NOYW1lPlxuICAgICAgICAgICAgPC9mYWN0SWRlbnRpZmllcj5cbiAgICAgICAgICAgIDxleHByZXNzaW9uSWRlbnRpZmllcj5cbiAgICAgICAgICAgICAgPG5hbWU+MXwxMTwvbmFtZT5cbiAgICAgICAgICAgICAgPHR5cGU+RVhQRUNUPC90eXBlPlxuICAgICAgICAgICAgPC9leHByZXNzaW9uSWRlbnRpZmllcj5cbiAgICAgICAgICAgIDxyYXdWYWx1ZSBjbGFzcz1cInN0cmluZ1wiPjEwMDA8L3Jhd1ZhbHVlPlxuICAgICAgICAgIDwvRmFjdE1hcHBpbmdWYWx1ZT5cbiAgICAgICAgICA8RmFjdE1hcHBpbmdWYWx1ZT5cbiAgICAgICAgICAgIDxmYWN0SWRlbnRpZmllcj5cbiAgICAgICAgICAgICAgPG5hbWU+RmluZTwvbmFtZT5cbiAgICAgICAgICAgICAgPGNsYXNzTmFtZT5GaW5lPC9jbGFzc05hbWU+XG4gICAgICAgICAgICA8L2ZhY3RJZGVudGlmaWVyPlxuICAgICAgICAgICAgPGV4cHJlc3Npb25JZGVudGlmaWVyPlxuICAgICAgICAgICAgICA8bmFtZT4xfDEyPC9uYW1lPlxuICAgICAgICAgICAgICA8dHlwZT5FWFBFQ1Q8L3R5cGU+XG4gICAgICAgICAgICA8L2V4cHJlc3Npb25JZGVudGlmaWVyPlxuICAgICAgICAgICAgPHJhd1ZhbHVlIGNsYXNzPVwic3RyaW5nXCI+NzwvcmF3VmFsdWU+XG4gICAgICAgICAgPC9GYWN0TWFwcGluZ1ZhbHVlPlxuICAgICAgICAgIDxGYWN0TWFwcGluZ1ZhbHVlPlxuICAgICAgICAgICAgPGZhY3RJZGVudGlmaWVyPlxuICAgICAgICAgICAgICA8bmFtZT5TaG91bGQgdGhlIGRyaXZlciBiZSBzdXNwZW5kZWQ/PC9uYW1lPlxuICAgICAgICAgICAgICA8Y2xhc3NOYW1lPlNob3VsZCB0aGUgZHJpdmVyIGJlIHN1c3BlbmRlZD88L2NsYXNzTmFtZT5cbiAgICAgICAgICAgIDwvZmFjdElkZW50aWZpZXI+XG4gICAgICAgICAgICA8ZXhwcmVzc2lvbklkZW50aWZpZXI+XG4gICAgICAgICAgICAgIDxuYW1lPjF8MTM8L25hbWU+XG4gICAgICAgICAgICAgIDx0eXBlPkVYUEVDVDwvdHlwZT5cbiAgICAgICAgICAgIDwvZXhwcmVzc2lvbklkZW50aWZpZXI+XG4gICAgICAgICAgICA8cmF3VmFsdWUgY2xhc3M9XCJzdHJpbmdcIj5cIlllc1wiPC9yYXdWYWx1ZT5cbiAgICAgICAgICA8L0ZhY3RNYXBwaW5nVmFsdWU+XG4gICAgICAgICAgPEZhY3RNYXBwaW5nVmFsdWU+XG4gICAgICAgICAgICA8ZmFjdElkZW50aWZpZXI+XG4gICAgICAgICAgICAgIDxuYW1lPiM8L25hbWU+XG4gICAgICAgICAgICAgIDxjbGFzc05hbWU+amF2YS5sYW5nLkludGVnZXI8L2NsYXNzTmFtZT5cbiAgICAgICAgICAgIDwvZmFjdElkZW50aWZpZXI+XG4gICAgICAgICAgICA8ZXhwcmVzc2lvbklkZW50aWZpZXI+XG4gICAgICAgICAgICAgIDxuYW1lPkluZGV4PC9uYW1lPlxuICAgICAgICAgICAgICA8dHlwZT5PVEhFUjwvdHlwZT5cbiAgICAgICAgICAgIDwvZXhwcmVzc2lvbklkZW50aWZpZXI+XG4gICAgICAgICAgICA8cmF3VmFsdWUgY2xhc3M9XCJzdHJpbmdcIj41PC9yYXdWYWx1ZT5cbiAgICAgICAgICA8L0ZhY3RNYXBwaW5nVmFsdWU+XG4gICAgICAgIDwvZmFjdE1hcHBpbmdWYWx1ZXM+XG4gICAgICA8L1NjZW5hcmlvPlxuICAgIDwvc2Nlc2ltRGF0YT5cbiAgPC9zaW11bGF0aW9uPlxuICA8YmFja2dyb3VuZD5cbiAgICA8c2Nlc2ltTW9kZWxEZXNjcmlwdG9yPlxuICAgICAgPGZhY3RNYXBwaW5ncz5cbiAgICAgICAgPEZhY3RNYXBwaW5nPlxuICAgICAgICAgIDxleHByZXNzaW9uRWxlbWVudHMvPlxuICAgICAgICAgIDxleHByZXNzaW9uSWRlbnRpZmllcj5cbiAgICAgICAgICAgIDxuYW1lPjF8MTwvbmFtZT5cbiAgICAgICAgICAgIDx0eXBlPkdJVkVOPC90eXBlPlxuICAgICAgICAgIDwvZXhwcmVzc2lvbklkZW50aWZpZXI+XG4gICAgICAgICAgPGZhY3RJZGVudGlmaWVyPlxuICAgICAgICAgICAgPG5hbWU+RW1wdHk8L25hbWU+XG4gICAgICAgICAgICA8Y2xhc3NOYW1lPmphdmEubGFuZy5Wb2lkPC9jbGFzc05hbWU+XG4gICAgICAgICAgPC9mYWN0SWRlbnRpZmllcj5cbiAgICAgICAgICA8Y2xhc3NOYW1lPmphdmEubGFuZy5Wb2lkPC9jbGFzc05hbWU+XG4gICAgICAgICAgPGZhY3RBbGlhcz5JTlNUQU5DRSAxPC9mYWN0QWxpYXM+XG4gICAgICAgICAgPGV4cHJlc3Npb25BbGlhcz5QUk9QRVJUWS0xPC9leHByZXNzaW9uQWxpYXM+XG4gICAgICAgICAgPGNvbHVtbldpZHRoPjExNDwvY29sdW1uV2lkdGg+XG4gICAgICAgICAgPGZhY3RNYXBwaW5nVmFsdWVUeXBlPk5PVF9FWFBSRVNTSU9OPC9mYWN0TWFwcGluZ1ZhbHVlVHlwZT5cbiAgICAgICAgPC9GYWN0TWFwcGluZz5cbiAgICAgIDwvZmFjdE1hcHBpbmdzPlxuICAgIDwvc2Nlc2ltTW9kZWxEZXNjcmlwdG9yPlxuICAgIDxzY2VzaW1EYXRhPlxuICAgICAgPEJhY2tncm91bmREYXRhPlxuICAgICAgICA8ZmFjdE1hcHBpbmdWYWx1ZXM+XG4gICAgICAgICAgPEZhY3RNYXBwaW5nVmFsdWU+XG4gICAgICAgICAgICA8ZmFjdElkZW50aWZpZXI+XG4gICAgICAgICAgICAgIDxuYW1lPkVtcHR5PC9uYW1lPlxuICAgICAgICAgICAgICA8Y2xhc3NOYW1lPmphdmEubGFuZy5Wb2lkPC9jbGFzc05hbWU+XG4gICAgICAgICAgICA8L2ZhY3RJZGVudGlmaWVyPlxuICAgICAgICAgICAgPGV4cHJlc3Npb25JZGVudGlmaWVyPlxuICAgICAgICAgICAgICA8bmFtZT4xfDE8L25hbWU+XG4gICAgICAgICAgICAgIDx0eXBlPkdJVkVOPC90eXBlPlxuICAgICAgICAgICAgPC9leHByZXNzaW9uSWRlbnRpZmllcj5cbiAgICAgICAgICA8L0ZhY3RNYXBwaW5nVmFsdWU+XG4gICAgICAgIDwvZmFjdE1hcHBpbmdWYWx1ZXM+XG4gICAgICA8L0JhY2tncm91bmREYXRhPlxuICAgIDwvc2Nlc2ltRGF0YT5cbiAgPC9iYWNrZ3JvdW5kPlxuICA8c2V0dGluZ3M+XG4gICAgPGRtbkZpbGVQYXRoPmRldi13ZWJhcHAvYXZhaWxhYmxlLWRtbi1tb2RlbHMvdHJhZmZpYy12aW9sYXRpb24uZG1uPC9kbW5GaWxlUGF0aD5cbiAgICA8dHlwZT5ETU48L3R5cGU+XG4gICAgPGRtbk5hbWVzcGFjZT5odHRwczovL2tpZS5hcGFjaGUub3JnL2Rtbi9fQTRCQ0E4QjgtQ0YwOC00MzNGLTkzQjItQTI1OThGMTlFQ0ZGPC9kbW5OYW1lc3BhY2U+XG4gICAgPGRtbk5hbWU+VHJhZmZpYyBWaW9sYXRpb248L2Rtbk5hbWU+XG4gICAgPHNraXBGcm9tQnVpbGQ+ZmFsc2U8L3NraXBGcm9tQnVpbGQ+XG4gICAgPHN0YXRlbGVzcz5mYWxzZTwvc3RhdGVsZXNzPlxuICA8L3NldHRpbmdzPlxuICA8aW1wb3J0cz5cbiAgICA8aW1wb3J0cy8+XG4gIDwvaW1wb3J0cz5cbjwvU2NlbmFyaW9TaW11bGF0aW9uTW9kZWw+YDtcbmNvbnN0IG1ldGE6IE1ldGE8e30+ID0ge1xuICB0aXRsZTogXCJVc2UgQ2FzZXMvVHJhZmZpYyBWaW9sYXRpb25cIixcbiAgY29tcG9uZW50OiBUZXN0U2NlbmFyaW9FZGl0b3IsXG4gIGluY2x1ZGVTdG9yaWVzOiAvXltBLVpdL1xufTtcbmV4cG9ydCBkZWZhdWx0IG1ldGE7XG50eXBlIFN0b3J5ID0gU3RvcnlPYmo8U3Rvcnlib29rVGVzdFNjZW5hcmlvRWRpdG9yUHJvcHM+O1xuY29uc3QgbWFyc2hhbGxlciA9IGdldE1hcnNoYWxsZXIodHJhZmZpY1Zpb2xhdGlvbkRtbik7XG5jb25zdCBjdXJyZW50TW9kZWwgPSBtYXJzaGFsbGVyLnBhcnNlci5wYXJzZSgpO1xuY29uc3QgZG1uTW9kZWwgPSB7XG4gIG5vcm1hbGl6ZWRQb3NpeFBhdGhSZWxhdGl2ZVRvVGhlT3BlbkZpbGU6IFwiZGV2LXdlYmFwcC9hdmFpbGFibGUtZG1uLW1vZGVscy90cmFmZmljLXZpb2xhdGlvbi5kbW5cIixcbiAgdHlwZTogXCJkbW5cIixcbiAgbW9kZWw6IG5vcm1hbGl6ZShnZXREbW5NYXJzaGFsbGVyKFRSQUZGSUNfVklPTEFUSU9OID8/IFwiXCIsIHtcbiAgICB1cGdyYWRlVG86IFwibGF0ZXN0XCJcbiAgfSkucGFyc2VyLnBhcnNlKCkpLFxuICBzdmc6IFwiXCJcbn07XG5leHBvcnQgY29uc3QgVHJhZmZpY1Zpb2xhdGlvbjogU3RvcnkgPSB7XG4gIHJlbmRlcjogYXJncyA9PiBTY2VTaW1FZGl0b3JXcmFwcGVyKGFyZ3MpLFxuICBhcmdzOiB7XG4gICAgbW9kZWw6IG1hcnNoYWxsZXIucGFyc2VyLnBhcnNlKCksXG4gICAgb3BlbkZpbGVOb3JtYWxpemVkUG9zaXhQYXRoUmVsYXRpdmVUb1RoZVdvcmtzcGFjZVJvb3Q6IHRyYWZmaWNWaW9sYXRpb25EbW5GaWxlTmFtZSxcbiAgICBleHRlcm5hbE1vZGVsc0J5TmFtZXNwYWNlOiBuZXcgTWFwKFtbXCJodHRwczovL2tpZS5hcGFjaGUub3JnL2Rtbi9fQTRCQ0E4QjgtQ0YwOC00MzNGLTkzQjItQTI1OThGMTlFQ0ZGXCIsIGRtbk1vZGVsXV0pLFxuICAgIHhtbDogbWFyc2hhbGxlci5idWlsZGVyLmJ1aWxkKGN1cnJlbnRNb2RlbCksXG4gICAgb25SZXF1ZXN0RXh0ZXJuYWxNb2RlbHNBdmFpbGFibGVUb0luY2x1ZGU6ICgpID0+IFByb21pc2UucmVzb2x2ZShbXCJkZXYtd2ViYXBwL2F2YWlsYWJsZS1kbW4tbW9kZWxzL3RyYWZmaWMtdmlvbGF0aW9uLmRtblwiXSksXG4gICAgb25SZXF1ZXN0RXh0ZXJuYWxNb2RlbEJ5UGF0aDogKCkgPT4gUHJvbWlzZS5yZXNvbHZlKGRtbk1vZGVsKVxuICB9XG59O1xuVHJhZmZpY1Zpb2xhdGlvbi5wYXJhbWV0ZXJzID0ge1xuICAuLi5UcmFmZmljVmlvbGF0aW9uLnBhcmFtZXRlcnMsXG4gIGRvY3M6IHtcbiAgICAuLi5UcmFmZmljVmlvbGF0aW9uLnBhcmFtZXRlcnM/LmRvY3MsXG4gICAgc291cmNlOiB7XG4gICAgICBvcmlnaW5hbFNvdXJjZTogXCJ7XFxuICByZW5kZXI6IGFyZ3MgPT4gU2NlU2ltRWRpdG9yV3JhcHBlcihhcmdzKSxcXG4gIGFyZ3M6IHtcXG4gICAgbW9kZWw6IG1hcnNoYWxsZXIucGFyc2VyLnBhcnNlKCksXFxuICAgIG9wZW5GaWxlTm9ybWFsaXplZFBvc2l4UGF0aFJlbGF0aXZlVG9UaGVXb3Jrc3BhY2VSb290OiB0cmFmZmljVmlvbGF0aW9uRG1uRmlsZU5hbWUsXFxuICAgIGV4dGVybmFsTW9kZWxzQnlOYW1lc3BhY2U6IG5ldyBNYXAoW1tcXFwiaHR0cHM6Ly9raWUuYXBhY2hlLm9yZy9kbW4vX0E0QkNBOEI4LUNGMDgtNDMzRi05M0IyLUEyNTk4RjE5RUNGRlxcXCIsIGRtbk1vZGVsXV0pLFxcbiAgICB4bWw6IG1hcnNoYWxsZXIuYnVpbGRlci5idWlsZChjdXJyZW50TW9kZWwpLFxcbiAgICBvblJlcXVlc3RFeHRlcm5hbE1vZGVsc0F2YWlsYWJsZVRvSW5jbHVkZTogKCkgPT4gUHJvbWlzZS5yZXNvbHZlKFtcXFwiZGV2LXdlYmFwcC9hdmFpbGFibGUtZG1uLW1vZGVscy90cmFmZmljLXZpb2xhdGlvbi5kbW5cXFwiXSksXFxuICAgIG9uUmVxdWVzdEV4dGVybmFsTW9kZWxCeVBhdGg6ICgpID0+IFByb21pc2UucmVzb2x2ZShkbW5Nb2RlbClcXG4gIH1cXG59XCIsXG4gICAgICAuLi5UcmFmZmljVmlvbGF0aW9uLnBhcmFtZXRlcnM/LmRvY3M/LnNvdXJjZVxuICAgIH1cbiAgfVxufTsiXSwibmFtZXMiOlsibm9ybWFsaXplIiwiZ2V0TWFyc2hhbGxlciIsImdldERtbk1hcnNoYWxsZXIiLCJUZXN0U2NlbmFyaW9FZGl0b3IiLCJTY2VTaW1FZGl0b3JXcmFwcGVyIiwiVFJBRkZJQ19WSU9MQVRJT04iLCJ0cmFmZmljVmlvbGF0aW9uRG1uRmlsZU5hbWUiLCJ0cmFmZmljVmlvbGF0aW9uRG1uIiwibWV0YSIsInRpdGxlIiwiY29tcG9uZW50IiwiaW5jbHVkZVN0b3JpZXMiLCJtYXJzaGFsbGVyIiwiY3VycmVudE1vZGVsIiwicGFyc2VyIiwicGFyc2UiLCJkbW5Nb2RlbCIsIm5vcm1hbGl6ZWRQb3NpeFBhdGhSZWxhdGl2ZVRvVGhlT3BlbkZpbGUiLCJ0eXBlIiwibW9kZWwiLCJ1cGdyYWRlVG8iLCJzdmciLCJUcmFmZmljVmlvbGF0aW9uIiwicmVuZGVyIiwiYXJncyIsIm9wZW5GaWxlTm9ybWFsaXplZFBvc2l4UGF0aFJlbGF0aXZlVG9UaGVXb3Jrc3BhY2VSb290IiwiZXh0ZXJuYWxNb2RlbHNCeU5hbWVzcGFjZSIsIk1hcCIsInhtbCIsImJ1aWxkZXIiLCJidWlsZCIsIm9uUmVxdWVzdEV4dGVybmFsTW9kZWxzQXZhaWxhYmxlVG9JbmNsdWRlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJvblJlcXVlc3RFeHRlcm5hbE1vZGVsQnlQYXRoIiwicGFyYW1ldGVycyIsImRvY3MiLCJfYSIsInNvdXJjZSIsIm9yaWdpbmFsU291cmNlIiwiX2MiLCJfYiIsIl9fbmFtZWRFeHBvcnRzT3JkZXIiXSwic291cmNlUm9vdCI6IiJ9