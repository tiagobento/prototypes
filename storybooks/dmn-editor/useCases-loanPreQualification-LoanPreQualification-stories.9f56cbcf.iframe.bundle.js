"use strict";
(self["webpackChunk_kie_tools_dmn_editor"] = self["webpackChunk_kie_tools_dmn_editor"] || []).push([["useCases-loanPreQualification-LoanPreQualification-stories"],{

/***/ "./stories/misc/empty/Empty.stories.tsx":
/*!**********************************************!*\
  !*** ./stories/misc/empty/Empty.stories.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Empty: () => (/* binding */ Empty),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   generateEmptyDmn15: () => (/* binding */ generateEmptyDmn15)
/* harmony export */ });
/* harmony import */ var _kie_tools_dmn_marshaller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @kie-tools/dmn-marshaller */ "../dmn-marshaller/dist/index.js");
/* harmony import */ var _kie_tools_dmn_marshaller_dist_schemas_dmn_1_5_ts_gen_meta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @kie-tools/dmn-marshaller/dist/schemas/dmn-1_5/ts-gen/meta */ "../dmn-marshaller/dist/schemas/dmn-1_5/ts-gen/meta.js");
/* harmony import */ var _kie_tools_boxed_expression_component_dist_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @kie-tools/boxed-expression-component/dist/api */ "../boxed-expression-component/dist/api/index.js");
/* harmony import */ var _kie_tools_dmn_marshaller_dist_schemas_dmn_1_5_Dmn15Spec__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @kie-tools/dmn-marshaller/dist/schemas/dmn-1_5/Dmn15Spec */ "../dmn-marshaller/dist/schemas/dmn-1_5/Dmn15Spec.js");
/* harmony import */ var _dmnEditorStoriesWrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../dmnEditorStoriesWrapper */ "./stories/dmnEditorStoriesWrapper.tsx");
/* harmony import */ var _src_DmnEditor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../src/DmnEditor */ "./src/DmnEditor.tsx");
var _a, _b, _c;






const generateEmptyDmn15 = () => `<?xml version="1.0" encoding="UTF-8"?>
<definitions
  xmlns="${_kie_tools_dmn_marshaller_dist_schemas_dmn_1_5_ts_gen_meta__WEBPACK_IMPORTED_MODULE_1__.ns.get("")}"
  expressionLanguage="${_kie_tools_dmn_marshaller_dist_schemas_dmn_1_5_Dmn15Spec__WEBPACK_IMPORTED_MODULE_3__.DMN15_SPEC.expressionLanguage.default}"
  namespace="https://kie.apache.org/dmn/${(0,_kie_tools_boxed_expression_component_dist_api__WEBPACK_IMPORTED_MODULE_2__.generateUuid)()}"
  id="${(0,_kie_tools_boxed_expression_component_dist_api__WEBPACK_IMPORTED_MODULE_2__.generateUuid)()}"
  name="DMN${(0,_kie_tools_boxed_expression_component_dist_api__WEBPACK_IMPORTED_MODULE_2__.generateUuid)()}">
</definitions>`;
const meta = {
  title: "Misc/Empty",
  component: _src_DmnEditor__WEBPACK_IMPORTED_MODULE_5__.DmnEditor,
  includeStories: /^[A-Z]/
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (meta);
const marshaller = (0,_kie_tools_dmn_marshaller__WEBPACK_IMPORTED_MODULE_0__.getMarshaller)(generateEmptyDmn15(), {
  upgradeTo: "latest"
});
const model = marshaller.parser.parse();
const Empty = {
  render: args => (0,_dmnEditorStoriesWrapper__WEBPACK_IMPORTED_MODULE_4__.DmnEditorWrapper)(),
  args: {
    model: model,
    originalVersion: "1.5",
    evaluationResultsByNodeId: new Map(),
    externalContextDescription: "",
    externalContextName: "Storybook - DMN Editor",
    externalModelsByNamespace: {},
    issueTrackerHref: "",
    validationMessages: {},
    isReadOnly: false,
    xml: marshaller.builder.build(model)
  }
};
Empty.parameters = {
  ...Empty.parameters,
  docs: {
    ...((_a = Empty.parameters) === null || _a === void 0 ? void 0 : _a.docs),
    source: {
      originalSource: "{\n  render: args => DmnEditorWrapper(),\n  args: {\n    model: model,\n    originalVersion: \"1.5\",\n    evaluationResultsByNodeId: new Map(),\n    externalContextDescription: \"\",\n    externalContextName: \"Storybook - DMN Editor\",\n    externalModelsByNamespace: {},\n    issueTrackerHref: \"\",\n    validationMessages: {},\n    isReadOnly: false,\n    xml: marshaller.builder.build(model)\n  }\n}",
      ...((_c = (_b = Empty.parameters) === null || _b === void 0 ? void 0 : _b.docs) === null || _c === void 0 ? void 0 : _c.source)
    }
  }
};
const __namedExportsOrder = ["generateEmptyDmn15", "Empty"];

/***/ }),

/***/ "./stories/useCases/loanPreQualification/LoanPreQualification.stories.tsx":
/*!********************************************************************************!*\
  !*** ./stories/useCases/loanPreQualification/LoanPreQualification.stories.tsx ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoanPreQualification: () => (/* binding */ LoanPreQualification),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   loanPreQualificationDmn: () => (/* binding */ loanPreQualificationDmn)
/* harmony export */ });
/* harmony import */ var _kie_tools_dmn_marshaller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @kie-tools/dmn-marshaller */ "../dmn-marshaller/dist/index.js");
/* harmony import */ var _misc_empty_Empty_stories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../misc/empty/Empty.stories */ "./stories/misc/empty/Empty.stories.tsx");
/* harmony import */ var _src_DmnEditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../src/DmnEditor */ "./src/DmnEditor.tsx");
var _a, _b, _c;



const loanPreQualificationDmn = `<?xml version="1.0" encoding="UTF-8" ?>
<dmn:definitions xmlns:dmn="http://www.omg.org/spec/DMN/20180521/MODEL/"
    xmlns:di="http://www.omg.org/spec/DMN/20180521/DI/"
    xmlns:kie="https://kie.apache.org/dmn/extensions/1.0"
    xmlns:dmndi="http://www.omg.org/spec/DMN/20180521/DMNDI/"
    xmlns:dc="http://www.omg.org/spec/DMN/20180521/DC/"
    xmlns:feel="http://www.omg.org/spec/DMN/20180521/FEEL/"
    xmlns:included0="https://kie.apache.org/dmn/_923784BD-CD31-488A-9C31-C1A83C5483C0"
    xmlns:included1="https://kie.apache.org/dmn/_D19B0015-2CBD-4BA8-84A9-5F554D84A9E1"
    expressionLanguage="http://www.omg.org/spec/DMN/20180521/FEEL/"
    typeLanguage="http://www.omg.org/spec/DMN/20211108/FEEL/"
    namespace="https://kie.apache.org/dmn/_857FE424-BEDA-4772-AB8E-2F4CDDB864AB"
    id="_C6CBECEB-2BBC-4E14-80B0-17F576B2CF92"
    name="loan_pre_qualification">
  <dmn:extensionElements />
  <dmn:itemDefinition id="_D40B0106-62E8-4AC0-A39A-C6C9506194A9" name="Requested_Product" isCollection="false">
    <dmn:itemComponent id="_68b4a96c-198a-4575-b29a-a2c8b0539a2c" name="Type" isCollection="false">
      <dmn:typeRef>Product_Type</dmn:typeRef>
    </dmn:itemComponent>
    <dmn:itemComponent id="_ab1647c2-cb63-4808-8d90-36d41591a40c" name="Rate" isCollection="false">
      <dmn:typeRef>number</dmn:typeRef>
    </dmn:itemComponent>
    <dmn:itemComponent id="_152917bb-6095-4057-8613-5b08b77db235" name="Term" isCollection="false">
      <dmn:typeRef>number</dmn:typeRef>
    </dmn:itemComponent>
    <dmn:itemComponent id="_e2f0e8cd-8f5a-43d4-b263-aaa5b9ae4420" name="Amount" isCollection="false">
      <dmn:typeRef>number</dmn:typeRef>
    </dmn:itemComponent>
  </dmn:itemDefinition>
  <dmn:itemDefinition id="_2B4E9593-3239-4E04-A213-345F0AA0AF9D" name="Marital_Status" isCollection="false">
    <dmn:typeRef>string</dmn:typeRef>
    <dmn:allowedValues id="_5BD13D9D-412F-4E6B-914A-3D8AAAC6A705">
      <dmn:text>&quot;M&quot;,&quot;D&quot;,&quot;S&quot;</dmn:text>
    </dmn:allowedValues>
  </dmn:itemDefinition>
  <dmn:itemDefinition id="_F090CBB7-F5C3-4C54-9905-517DC1469B52" name="Applicant_Data" isCollection="false">
    <dmn:itemComponent id="_f52e2b9f-544c-48ac-91e0-168a6e13fc8b" name="Age" isCollection="false">
      <dmn:typeRef>number</dmn:typeRef>
    </dmn:itemComponent>
    <dmn:itemComponent id="_5a20d4c2-0e66-4bb9-b5ea-3b9f2cd8e050" name="Marital Status" isCollection="false">
      <dmn:typeRef>Marital_Status</dmn:typeRef>
    </dmn:itemComponent>
    <dmn:itemComponent id="_701117b8-2f8d-4e94-a5db-d503f0fba3af" name="Employment Status" isCollection="false">
      <dmn:typeRef>string</dmn:typeRef>
      <dmn:allowedValues id="_4A8E36FC-A40C-4CB5-9AE1-73082DA24D13">
        <dmn:text>&quot;Unemployed&quot;,&quot;Employed&quot;,&quot;Self-employed&quot;,&quot;Student&quot;</dmn:text>
      </dmn:allowedValues>
    </dmn:itemComponent>
    <dmn:itemComponent id="_17ad2a24-425f-4df7-92fc-609e10217b8b" name="Existing Customer" isCollection="false">
      <dmn:typeRef>boolean</dmn:typeRef>
    </dmn:itemComponent>
    <dmn:itemComponent id="_bb9ef72e-2e0d-4175-ba58-d613bda7e9b3" name="Monthly" isCollection="false">
      <dmn:itemComponent id="_32d5ea39-4bbc-4b16-88cd-f7e6e47a885e" name="Income" isCollection="false">
        <dmn:typeRef>number</dmn:typeRef>
      </dmn:itemComponent>
      <dmn:itemComponent id="_7850468b-173d-4162-9c7a-94453a4b02d7" name="Repayments" isCollection="false">
        <dmn:typeRef>number</dmn:typeRef>
      </dmn:itemComponent>
      <dmn:itemComponent id="_af578182-5c71-4b71-9027-0f0cf83770ab" name="Expenses" isCollection="false">
        <dmn:typeRef>number</dmn:typeRef>
      </dmn:itemComponent>
      <dmn:itemComponent id="_4a4d01be-fe97-49a2-8c4c-3a49ff27968d" name="Tax" isCollection="false">
        <dmn:typeRef>number</dmn:typeRef>
      </dmn:itemComponent>
      <dmn:itemComponent id="_f95dbf70-d256-4d40-a61d-c6332d864e8f" name="Insurance" isCollection="false">
        <dmn:typeRef>number</dmn:typeRef>
      </dmn:itemComponent>
    </dmn:itemComponent>
  </dmn:itemDefinition>
  <dmn:itemDefinition id="_1945BD2E-C82C-4E7A-A59E-484B56A3AE46" name="Post-Bureau_Risk_Category" isCollection="false">
    <dmn:itemComponent id="_19ecc622-e72c-482d-9de3-6578a1c76f1e" name="Risk Category" isCollection="false">
      <dmn:typeRef>Risk_Category</dmn:typeRef>
    </dmn:itemComponent>
    <dmn:itemComponent id="_2fa724d1-b276-4a3f-a2ef-2e7db3d362f3" name="Credit Contingency Factor" isCollection="false">
      <dmn:typeRef>number</dmn:typeRef>
    </dmn:itemComponent>
  </dmn:itemDefinition>
  <dmn:itemDefinition id="_4816704B-AB7F-4624-8368-0BBBAFC04FB9" name="Pre-Bureau_Risk_Category" isCollection="false">
    <dmn:itemComponent id="_78b44e10-e166-44a4-83a3-5d12c99529e8" name="Risk Category" isCollection="false">
      <dmn:typeRef>string</dmn:typeRef>
    </dmn:itemComponent>
    <dmn:itemComponent id="_fa41a482-a86a-4b52-a750-35170cd6bba3" name="Credit Contingency Factor" isCollection="false">
      <dmn:typeRef>number</dmn:typeRef>
    </dmn:itemComponent>
  </dmn:itemDefinition>
  <dmn:itemDefinition id="_9AEAE50E-67BF-4428-A6CD-B48D299FD73C" name="Eligibility" isCollection="false">
    <dmn:typeRef>string</dmn:typeRef>
    <dmn:allowedValues id="_79C7F45D-228F-437B-AF7E-615FC72A5354">
      <dmn:text>&quot;Ineligible&quot;,&quot;Eligible&quot;</dmn:text>
    </dmn:allowedValues>
  </dmn:itemDefinition>
  <dmn:itemDefinition id="_FBF245E7-9A93-4D52-9F02-AF6893011A5F" name="Strategy" isCollection="false">
    <dmn:typeRef>string</dmn:typeRef>
    <dmn:allowedValues id="_0B005355-19D0-447B-B2DE-6D1290C7504C">
      <dmn:text>&quot;Decline&quot;,&quot;Bureau&quot;,&quot;Through&quot;</dmn:text>
    </dmn:allowedValues>
  </dmn:itemDefinition>
  <dmn:itemDefinition id="_5D34E713-E94E-403E-A681-DD6948BE4F79" name="Bureau_Call_Type" isCollection="false">
    <dmn:typeRef>string</dmn:typeRef>
    <dmn:allowedValues id="_947DBBA1-70A0-42DA-BC37-FD2FD93BF61B">
      <dmn:text>&quot;Full&quot;,&quot;Mini&quot;,&quot;None&quot;</dmn:text>
    </dmn:allowedValues>
  </dmn:itemDefinition>
  <dmn:itemDefinition id="_9AF58ED6-A526-4346-8780-0D1E6038CA6F" name="Product_Type" isCollection="false">
    <dmn:typeRef>string</dmn:typeRef>
    <dmn:allowedValues id="_A2554140-8060-4F66-BA16-3A8DFE12C17C">
      <dmn:text>&quot;Standard Loan&quot;,&quot;Special Loan&quot;</dmn:text>
    </dmn:allowedValues>
  </dmn:itemDefinition>
  <dmn:itemDefinition id="_4D36A25E-9A37-47AE-B9BF-94338AE67609" name="Risk_Category" isCollection="false">
    <dmn:typeRef>string</dmn:typeRef>
    <dmn:allowedValues id="_041426C2-B9D2-4C18-9AC3-5A508D000839">
      <dmn:text>&quot;High&quot;,&quot;Medium&quot;,&quot;Low&quot;,&quot;Very Low&quot;,&quot;Decline&quot;</dmn:text>
    </dmn:allowedValues>
  </dmn:itemDefinition>
  <dmn:itemDefinition id="_46C870FC-2A99-43A0-9D1B-3D3C5516FB23" name="Credit_Score_Rating" isCollection="false">
    <dmn:typeRef>string</dmn:typeRef>
    <dmn:allowedValues id="_8470AE69-2814-4911-953D-3FC61A681063">
      <dmn:text>&quot;Poor&quot;,&quot;Bad&quot;,&quot;Fair&quot;,&quot;Good&quot;,&quot;Excellent&quot;</dmn:text>
    </dmn:allowedValues>
  </dmn:itemDefinition>
  <dmn:itemDefinition id="_7641A6FA-BCF3-45D1-A0B6-71B0634ABB3E" name="Back_End_Ratio" isCollection="false">
    <dmn:typeRef>string</dmn:typeRef>
    <dmn:allowedValues id="_CA1C6F0E-186F-41DD-8D8D-D405789BA3F1">
      <dmn:text>&quot;Insufficient&quot;,&quot;Sufficient&quot;</dmn:text>
    </dmn:allowedValues>
  </dmn:itemDefinition>
  <dmn:itemDefinition id="_B5E00A2D-3C95-4A9C-BCA6-BDE852939F6D" name="Front_End_Ratio" isCollection="false">
    <dmn:typeRef>string</dmn:typeRef>
    <dmn:allowedValues id="_B8658CA2-F472-4390-8AB0-1DD49100B20C">
      <dmn:text>&quot;Sufficient&quot;,&quot;Insufficient&quot;</dmn:text>
    </dmn:allowedValues>
  </dmn:itemDefinition>
  <dmn:itemDefinition id="_B8ACE210-2C55-4C66-B3D8-4885EE1C52A0" name="Qualification" isCollection="false">
    <dmn:typeRef>string</dmn:typeRef>
    <dmn:allowedValues id="_1F66B8BF-6AB7-4965-8A69-897DDC1A8B34">
      <dmn:text>&quot;Not Qualified&quot;,&quot;Qualified&quot;</dmn:text>
    </dmn:allowedValues>
  </dmn:itemDefinition>
  <dmn:itemDefinition id="_2CC2E8D7-1BE2-4E4A-8072-55A1EC94DB6E" name="Credit_Score" isCollection="false">
    <dmn:itemComponent id="_d53ce920-87f5-4a4f-baba-85c2a830d60f" name="FICO" isCollection="false">
      <dmn:typeRef>number</dmn:typeRef>
      <dmn:allowedValues id="_E30AADBD-D028-475D-B8D8-B5687D454BED">
        <dmn:text>[300..850]</dmn:text>
      </dmn:allowedValues>
    </dmn:itemComponent>
  </dmn:itemDefinition>
  <dmn:itemDefinition id="_3C37A6F1-C113-4993-BB57-E89B99C70B02" name="Loan_Qualification" isCollection="false">
    <dmn:itemComponent id="_e11c3ac3-7370-4378-967b-91e9cb221fe1" name="Qualification" isCollection="false">
      <dmn:typeRef>string</dmn:typeRef>
      <dmn:allowedValues id="_B0AD0641-0023-461D-B20E-41CAE02F9BE4">
        <dmn:text>&quot;Qualified&quot;,&quot;Not Qualified&quot;</dmn:text>
      </dmn:allowedValues>
    </dmn:itemComponent>
    <dmn:itemComponent id="_b3541f82-5bc9-4fab-ba9b-c423a9a2cd6c" name="Reason" isCollection="false">
      <dmn:typeRef>string</dmn:typeRef>
    </dmn:itemComponent>
  </dmn:itemDefinition>
  <dmn:inputData id="_4C89E59C-FDDA-438C-8D1F-0B1194EF6DAE" name="Credit Score">
    <dmn:extensionElements />
    <dmn:variable id="_A97019FC-EE01-451F-A7AA-5A97ED005FB9" name="Credit Score" typeRef="Credit_Score" />
  </dmn:inputData>
  <dmn:businessKnowledgeModel id="_4C788DBD-C672-4F41-9AFE-9C7D2C145734" name="Lender Acceptable DTI">
    <dmn:extensionElements />
    <dmn:variable id="_85508943-7AD2-4AA0-80E5-20923CA2308D" name="Lender Acceptable DTI" typeRef="number" />
    <dmn:encapsulatedLogic id="_9F0257EE-CF82-49FD-AEDD-3155890864FF" kind="FEEL">
      <dmn:literalExpression id="_21E8FA38-C947-4733-9E52-CF81A97ADF91">
        <dmn:text>0.36</dmn:text>
      </dmn:literalExpression>
    </dmn:encapsulatedLogic>
  </dmn:businessKnowledgeModel>
  <dmn:decision id="_F0DC8923-5FC7-4200-8BD1-461D5F3714BE" name="Front End Ratio">
    <dmn:extensionElements />
    <dmn:variable id="_A0B0B032-F63F-491F-A65E-72E68A86B8FD" name="Front End Ratio" typeRef="Front_End_Ratio" />
    <dmn:informationRequirement id="_89EEAF9F-5A5D-4F59-91B7-EA418A7229AF">
      <dmn:requiredInput href="#_1CF5CEFA-AF97-46F9-9CD5-9A8AEBB20B4E" />
    </dmn:informationRequirement>
    <dmn:informationRequirement id="_87730C5A-5648-415B-9189-EF4D8805F8C9">
      <dmn:requiredInput href="#_6E3205AF-7E3D-4ABE-A367-96F3F6E8210E" />
    </dmn:informationRequirement>
    <dmn:knowledgeRequirement id="_63DE7C3B-A767-4B8A-A098-91ECB4B8D330">
      <dmn:requiredKnowledge href="#_FAF9080E-F4EF-49F7-AEFD-0D2990D8FFDA" />
    </dmn:knowledgeRequirement>
    <dmn:knowledgeRequirement id="_2C95829D-FCF9-44F5-8F5A-0A6CDB60600D">
      <dmn:requiredKnowledge href="#_C98BE939-B9C7-43E0-83E8-EE7A16C5276D" />
    </dmn:knowledgeRequirement>
    <dmn:context id="_08A9C33D-719F-4B05-AC42-D15464798BC4" label="Front End Ratio" typeRef="Front_End_Ratio">
      <dmn:contextEntry id="_C8F98D0F-218F-4B60-BD99-7FD98078FE56">
        <dmn:invocation id="_EB658586-C3C8-488E-8118-E69E31583106" typeRef="&lt;Undefined&gt;">
          <dmn:literalExpression id="_6E79E4D9-BBFB-4E90-8AA3-A6C153C3C946">
            <dmn:text>PITI</dmn:text>
          </dmn:literalExpression>
          <dmn:binding id="_4B93E8C8-A092-4EAC-B23A-CC138225ACC3">
            <dmn:literalExpression id="_51ACEC3C-4207-4F5F-8FDD-9EDAA3270E60" typeRef="&lt;Undefined&gt;">
              <dmn:text>(Requested Product.Amount*((Requested Product.Rate/100)/12))/(1-(1/(1+(Requested Product.Rate/100)/12)**-Requested Product.Term))</dmn:text>
            </dmn:literalExpression>
            <dmn:parameter name="pmt" typeRef="&lt;Undefined&gt;" />
          </dmn:binding>
          <dmn:binding id="_B9D0FB44-605A-42DB-81F7-4DF4C4CC1CDD">
            <dmn:literalExpression id="_5D050B8D-DF55-45FD-988B-9C56BED53D5B" typeRef="&lt;Undefined&gt;">
              <dmn:text>Applicant Data.Monthly.Tax</dmn:text>
            </dmn:literalExpression>
            <dmn:parameter name="tax" typeRef="&lt;Undefined&gt;" />
          </dmn:binding>
          <dmn:binding id="_67372884-0407-4812-986F-3A2CC4C3A7B1">
            <dmn:literalExpression id="_14C44A69-56DB-4B68-B757-4225C80E4D88" typeRef="&lt;Undefined&gt;">
              <dmn:text>Applicant Data.Monthly.Insurance</dmn:text>
            </dmn:literalExpression>
            <dmn:parameter name="insurance" typeRef="&lt;Undefined&gt;" />
          </dmn:binding>
          <dmn:binding id="_EDE0107C-9736-4BB6-9500-173FFAFF00DB">
            <dmn:literalExpression id="_0DB5DE05-A2AD-4013-B191-DC1D1637A132" typeRef="&lt;Undefined&gt;">
              <dmn:text>Applicant Data.Monthly.Income</dmn:text>
            </dmn:literalExpression>
            <dmn:parameter name="income" typeRef="&lt;Undefined&gt;" />
          </dmn:binding>
        </dmn:invocation>
        <dmn:variable name="Client PITI" typeRef="number" />
      </dmn:contextEntry>
      <dmn:contextEntry id="_3F95EFD0-94D7-4D1A-9EA9-C8E12982D7E8">
        <dmn:literalExpression id="_3F95EFD0-94D7-4D1A-9EA9-C8E12982D7E8" typeRef="&lt;Undefined&gt;">
          <dmn:text>if Client PITI &lt;= Lender Acceptable PITI()
then &quot;Sufficient&quot;
else &quot;Insufficient&quot;</dmn:text>
        </dmn:literalExpression>
      </dmn:contextEntry>
    </dmn:context>
  </dmn:decision>
  <dmn:businessKnowledgeModel id="_FAF9080E-F4EF-49F7-AEFD-0D2990D8FFDA" name="PITI">
    <dmn:extensionElements />
    <dmn:variable id="_994F490E-10AC-4704-BFDA-14A3B98A981E" name="PITI" typeRef="number" />
    <dmn:encapsulatedLogic id="_D33D9AEA-49DF-489F-98EC-4B42FF8C2027" label="PITI" kind="FEEL" typeRef="number">
      <dmn:formalParameter id="_664280C1-D5E0-47BE-82EF-0A6579975A62" name="pmt" typeRef="number" />
      <dmn:formalParameter id="_3E7DF0B3-C48B-481D-B092-FC82EC2F6E37" name="tax" typeRef="number" />
      <dmn:formalParameter id="_DF691F86-AD12-46BA-B149-AC875836A116" name="insurance" typeRef="number" />
      <dmn:formalParameter id="_9E2E257F-90EB-4FC4-8DD9-089784E7579E" name="income" typeRef="number" />
      <dmn:literalExpression id="_A32ED4A5-7B89-40F7-BE25-CDB636FE071C" typeRef="&lt;Undefined&gt;">
        <dmn:text>(pmt + tax + insurance) / income</dmn:text>
      </dmn:literalExpression>
    </dmn:encapsulatedLogic>
  </dmn:businessKnowledgeModel>
  <dmn:inputData id="_1CF5CEFA-AF97-46F9-9CD5-9A8AEBB20B4E" name="Applicant Data">
    <dmn:extensionElements />
    <dmn:variable id="_2BBF28D2-DF09-4201-8D7A-5820E260592B" name="Applicant Data" typeRef="Applicant_Data" />
  </dmn:inputData>
  <dmn:decision id="_D6F4234F-15B3-4F5B-B814-5F6FF29D2907" name="Back End Ratio">
    <dmn:extensionElements />
    <dmn:variable id="_5AF571F7-AD41-43DC-ABFD-26672585042F" name="Back End Ratio" typeRef="Back_End_Ratio" />
    <dmn:informationRequirement id="_77BA409B-E00D-4FBC-B522-8F656D4F6F0E">
      <dmn:requiredInput href="#_1CF5CEFA-AF97-46F9-9CD5-9A8AEBB20B4E" />
    </dmn:informationRequirement>
    <dmn:knowledgeRequirement id="_4D441C11-7042-49CF-A42C-17A4348A7F29">
      <dmn:requiredKnowledge href="#_4C788DBD-C672-4F41-9AFE-9C7D2C145734" />
    </dmn:knowledgeRequirement>
    <dmn:knowledgeRequirement id="_3217D655-4484-4733-A9AE-4F9CF30D9924">
      <dmn:requiredKnowledge href="#_DA5CCF62-90A8-4CFC-A137-98B528522588" />
    </dmn:knowledgeRequirement>
    <dmn:context id="_5F9FEA4E-B3FC-4BC2-913E-36B8071FA777" label="Back End Ratio" typeRef="Back_End_Ratio">
      <dmn:contextEntry id="_F3ED9059-400F-4BE8-B250-C2ABCD9FF022">
        <dmn:invocation id="_4A7FC8E0-25EF-4DAF-845A-93BD89C2BC8C" typeRef="&lt;Undefined&gt;">
          <dmn:literalExpression id="_F0E80900-1964-4142-9A05-73E7A2E0F2CD">
            <dmn:text>DTI</dmn:text>
          </dmn:literalExpression>
          <dmn:binding>
            <dmn:literalExpression id="_3D0A1979-E59A-483F-BDA8-138F99BA5AB3" typeRef="&lt;Undefined&gt;">
              <dmn:text>Applicant Data.Monthly.Repayments + Applicant Data.Monthly.Expenses</dmn:text>
            </dmn:literalExpression>
            <dmn:parameter name="d" typeRef="&lt;Undefined&gt;" />
          </dmn:binding>
          <dmn:binding>
            <dmn:literalExpression id="_D985F886-71C0-4F65-8808-2CEF366BECC8" typeRef="&lt;Undefined&gt;">
              <dmn:text>Applicant Data.Monthly.Income</dmn:text>
            </dmn:literalExpression>
            <dmn:parameter name="i" typeRef="&lt;Undefined&gt;" />
          </dmn:binding>
        </dmn:invocation>
        <dmn:variable name="Client DTI" typeRef="number" />
      </dmn:contextEntry>
      <dmn:contextEntry id="_D1F96102-4158-45BB-8C9A-B7A3BE2C0206">
        <dmn:literalExpression id="_D1F96102-4158-45BB-8C9A-B7A3BE2C0206" typeRef="&lt;Undefined&gt;">
          <dmn:text>if Client DTI &lt;= Lender Acceptable DTI()
then &quot;Sufficient&quot;
else &quot;Insufficient&quot;</dmn:text>
        </dmn:literalExpression>
      </dmn:contextEntry>
    </dmn:context>
  </dmn:decision>
  <dmn:decision id="_2FE51DB1-3083-4BF7-AA71-0B0065310E72" name="Credit Score Rating">
    <dmn:extensionElements />
    <dmn:variable id="_82228E41-22D1-4758-97C3-BBFE90EDB5FB" name="Credit Score Rating" typeRef="Credit_Score_Rating" />
    <dmn:informationRequirement id="_31A1B6B2-A2A6-4E03-B898-26573A5CF3BA">
      <dmn:requiredInput href="#_4C89E59C-FDDA-438C-8D1F-0B1194EF6DAE" />
    </dmn:informationRequirement>
    <dmn:decisionTable id="_4ACEFFF0-AD2C-4DB8-9BAD-7BCCFB03F295" label="Credit Score Rating" typeRef="Credit_Score_Rating" hitPolicy="UNIQUE">
      <dmn:input id="_44C93627-629C-48B8-B71A-AE2266A42674">
        <dmn:inputExpression id="_00932A00-5ECE-4AEF-AA68-92E679CEF4AB" typeRef="number">
          <dmn:text>Credit Score.FICO</dmn:text>
        </dmn:inputExpression>
      </dmn:input>
      <dmn:output id="_9C201FAB-B49C-4D22-900B-B4E82D5469FB" name="" typeRef="&lt;Undefined&gt;" />
      <dmn:annotation name="Annotations" />
      <dmn:rule id="_AED703E1-8E56-4D27-A511-3875AD1D122E">
        <dmn:inputEntry id="_E2C9F30B-D529-48D8-A51C-A2ACCC8109B3">
          <dmn:text>&gt;= 750</dmn:text>
        </dmn:inputEntry>
        <dmn:outputEntry id="_A1FF2B2D-EF34-42AD-A45A-5FFDFA21FA6D">
          <dmn:text>&quot;Excellent&quot;</dmn:text>
        </dmn:outputEntry>
        <dmn:annotationEntry>
          <dmn:text></dmn:text>
        </dmn:annotationEntry>
      </dmn:rule>
      <dmn:rule id="_1FA12B9F-288C-42E8-B77F-BE2D3702B7B6">
        <dmn:inputEntry id="_CA5AE067-0E1A-44CA-B85C-912F9ED4594C">
          <dmn:text>[700..750)</dmn:text>
        </dmn:inputEntry>
        <dmn:outputEntry id="_833307A2-B924-422C-A4F5-BFFAB27D86D5">
          <dmn:text>&quot;Good&quot;</dmn:text>
        </dmn:outputEntry>
        <dmn:annotationEntry>
          <dmn:text></dmn:text>
        </dmn:annotationEntry>
      </dmn:rule>
      <dmn:rule id="_11976EBA-60BC-421B-A270-089A45E9B167">
        <dmn:inputEntry id="_75D612D5-D201-4932-8524-E49183F51D2D">
          <dmn:text>[650..700)</dmn:text>
        </dmn:inputEntry>
        <dmn:outputEntry id="_E18FE2B2-729C-41F0-B5CC-0E5E5EA431E3">
          <dmn:text>&quot;Fair&quot;</dmn:text>
        </dmn:outputEntry>
        <dmn:annotationEntry>
          <dmn:text></dmn:text>
        </dmn:annotationEntry>
      </dmn:rule>
      <dmn:rule id="_12F8077F-E601-4882-93E1-31508B1402E1">
        <dmn:inputEntry id="_61374E7D-4EF3-4603-97A1-9D1FABAAA3C8">
          <dmn:text>[600..650)</dmn:text>
        </dmn:inputEntry>
        <dmn:outputEntry id="_75135F4C-6BA7-4180-B726-A0D795B3D7FF">
          <dmn:text>&quot;Poor&quot;</dmn:text>
        </dmn:outputEntry>
        <dmn:annotationEntry>
          <dmn:text></dmn:text>
        </dmn:annotationEntry>
      </dmn:rule>
      <dmn:rule id="_D025254C-9376-4425-8084-451E09243CE2">
        <dmn:inputEntry id="_6C13B507-FB60-40AD-8F5C-2407F1413A5C">
          <dmn:text>&lt; 600</dmn:text>
        </dmn:inputEntry>
        <dmn:outputEntry id="_1FB7308A-E37B-46EA-8070-C67E2388A869">
          <dmn:text>&quot;Bad&quot;</dmn:text>
        </dmn:outputEntry>
        <dmn:annotationEntry>
          <dmn:text></dmn:text>
        </dmn:annotationEntry>
      </dmn:rule>
    </dmn:decisionTable>
  </dmn:decision>
  <dmn:decision id="_21C50763-E49F-4D83-A824-16DA6AA87C64" name="Loan Pre-Qualification">
    <dmn:extensionElements />
    <dmn:variable id="_047A25F5-DEF2-44BD-95B7-FB49A433F878" name="Loan Pre-Qualification" typeRef="Loan_Qualification" />
    <dmn:informationRequirement id="_A3E95B32-2EFD-40AD-B5E4-0A73A1542011">
      <dmn:requiredDecision href="#_D6F4234F-15B3-4F5B-B814-5F6FF29D2907" />
    </dmn:informationRequirement>
    <dmn:informationRequirement id="_0B992F01-BA77-4F06-A830-D8948B467272">
      <dmn:requiredDecision href="#_F0DC8923-5FC7-4200-8BD1-461D5F3714BE" />
    </dmn:informationRequirement>
    <dmn:informationRequirement id="_B6002F33-4888-48C5-B265-636030F8C2DC">
      <dmn:requiredDecision href="#_2FE51DB1-3083-4BF7-AA71-0B0065310E72" />
    </dmn:informationRequirement>
    <dmn:decisionTable id="_EF7F404A-939E-4889-95D8-E4053DD1EED9" label="Loan Pre-Qualification" typeRef="Loan_Qualification" hitPolicy="FIRST">
      <dmn:input id="_58ABD81B-FD16-45C3-9E64-DB271AA917C0">
        <dmn:inputExpression id="_5262441E-F812-4554-AF02-5267BDDF80F5" typeRef="Credit_Score_Rating">
          <dmn:text>Credit Score Rating</dmn:text>
        </dmn:inputExpression>
      </dmn:input>
      <dmn:input id="_36258DA0-E527-429C-8FA1-7DEA63647689">
        <dmn:inputExpression id="_4E9F0E06-85F1-4D10-B30D-FB55741B90BC" typeRef="Back_End_Ratio">
          <dmn:text>Back End Ratio</dmn:text>
        </dmn:inputExpression>
      </dmn:input>
      <dmn:input id="_A102CD8A-C38D-48E4-BC59-CA660D6FBF0A">
        <dmn:inputExpression id="_5D79EEF5-71B2-4360-B59A-215AA5593DCB" typeRef="Front_End_Ratio">
          <dmn:text>Front End Ratio</dmn:text>
        </dmn:inputExpression>
      </dmn:input>
      <dmn:output id="_B895B095-C3D6-48B4-8A50-D2D3B8CC6A45" name="Qualification" typeRef="string" />
      <dmn:output id="_A8D2D3B1-07B3-4619-8DE0-F923F511058B" name="Reason" typeRef="string" />
      <dmn:annotation name="Annotations" />
      <dmn:rule id="_B49E1642-F352-4D2E-92B6-E5DFA59AAFAC">
        <dmn:inputEntry id="_6C83C446-1A9A-4FFC-B30C-23915FF9CC43">
          <dmn:text>&quot;Poor&quot;, &quot;Bad&quot;</dmn:text>
        </dmn:inputEntry>
        <dmn:inputEntry id="_0BC93CB9-FD20-45C8-A498-39E4464B6224">
          <dmn:text>-</dmn:text>
        </dmn:inputEntry>
        <dmn:inputEntry id="_1554A983-B2C1-40A7-9614-50720420F4B2">
          <dmn:text>-</dmn:text>
        </dmn:inputEntry>
        <dmn:outputEntry id="_7B39B964-4E25-4717-92FE-A36F2B39FAB9">
          <dmn:text>&quot;Not Qualified&quot;</dmn:text>
        </dmn:outputEntry>
        <dmn:outputEntry id="_A852F5B6-C5DF-4ADD-8B93-9701F0724912">
          <dmn:text>&quot;Credit Score too low.&quot;</dmn:text>
        </dmn:outputEntry>
        <dmn:annotationEntry>
          <dmn:text></dmn:text>
        </dmn:annotationEntry>
      </dmn:rule>
      <dmn:rule id="_214865F4-C968-438C-A385-6B2823AF1BC3">
        <dmn:inputEntry id="_18617A2A-6DD3-41A9-87D6-68C91554620E">
          <dmn:text>-</dmn:text>
        </dmn:inputEntry>
        <dmn:inputEntry id="_5C70BB81-CAFD-4695-A241-68F441FF9A29">
          <dmn:text>&quot;Insufficient&quot;</dmn:text>
        </dmn:inputEntry>
        <dmn:inputEntry id="_78A3C3A0-EEBC-448B-B1C1-5CFF6C7F2AC5">
          <dmn:text>&quot;Sufficient&quot;</dmn:text>
        </dmn:inputEntry>
        <dmn:outputEntry id="_3C38D181-CCA1-4678-A3DD-0A5CE6D59FDC">
          <dmn:text>&quot;Not Qualified&quot;</dmn:text>
        </dmn:outputEntry>
        <dmn:outputEntry id="_F4284B9F-C77A-429B-A689-E212CFB19CB7">
          <dmn:text>&quot;Debt to income ratio is too high.&quot;</dmn:text>
        </dmn:outputEntry>
        <dmn:annotationEntry>
          <dmn:text></dmn:text>
        </dmn:annotationEntry>
      </dmn:rule>
      <dmn:rule id="_73E96773-064E-49F6-92B2-AA76E6BF6B8A">
        <dmn:inputEntry id="_24A825F0-B8C7-42C9-BBA2-4442CAE6F91A">
          <dmn:text>-</dmn:text>
        </dmn:inputEntry>
        <dmn:inputEntry id="_B7F59A5C-4AF1-4E90-BB0D-83C63A8390E6">
          <dmn:text>&quot;Sufficient&quot;</dmn:text>
        </dmn:inputEntry>
        <dmn:inputEntry id="_09A23FD4-9A98-4C34-9E9B-9E8EE652ABBC">
          <dmn:text>&quot;Insufficient&quot;</dmn:text>
        </dmn:inputEntry>
        <dmn:outputEntry id="_9BF1096A-1AF3-4D21-9273-460DE555F0B6">
          <dmn:text>&quot;Not Qualified&quot;</dmn:text>
        </dmn:outputEntry>
        <dmn:outputEntry id="_4D805BB2-B79E-42C2-A562-674ECBDFA01C">
          <dmn:text>&quot;Mortgage payment to income ratio is too high.&quot;</dmn:text>
        </dmn:outputEntry>
        <dmn:annotationEntry>
          <dmn:text></dmn:text>
        </dmn:annotationEntry>
      </dmn:rule>
      <dmn:rule id="_7C242C58-6CAB-43CF-9235-347A72AE3F9E">
        <dmn:inputEntry id="_9DF2A026-8B87-4C75-BB3D-54FF0E2A2E36">
          <dmn:text>-</dmn:text>
        </dmn:inputEntry>
        <dmn:inputEntry id="_FF3E9782-BE9C-4B0C-A63B-E906F6116251">
          <dmn:text>&quot;Insufficient&quot;</dmn:text>
        </dmn:inputEntry>
        <dmn:inputEntry id="_544687CD-F3A2-46C7-8439-E5E2E7B6483D">
          <dmn:text>&quot;Insufficient&quot;</dmn:text>
        </dmn:inputEntry>
        <dmn:outputEntry id="_5A958D2E-B310-4AB9-BF5B-49623BE5DB55">
          <dmn:text>&quot;Not Qualified&quot;</dmn:text>
        </dmn:outputEntry>
        <dmn:outputEntry id="_F0BD7DC2-A1B6-4CF4-95D0-906DBB540EFC">
          <dmn:text>&quot;Debt to income ratio is too high AND mortgage payment to income ratio is too high.&quot;</dmn:text>
        </dmn:outputEntry>
        <dmn:annotationEntry>
          <dmn:text></dmn:text>
        </dmn:annotationEntry>
      </dmn:rule>
      <dmn:rule id="_C8FA33B1-AF6E-4A59-B7B9-6FDF1F495C44">
        <dmn:inputEntry id="_82FBCEE2-C16C-4FFF-A7F3-5512C211E29B">
          <dmn:text>&quot;Fair&quot;, &quot;Good&quot;, &quot;Excellent&quot;</dmn:text>
        </dmn:inputEntry>
        <dmn:inputEntry id="_BF7CDAE1-66E3-4B06-8729-896453AD7867">
          <dmn:text>&quot;Sufficient&quot;</dmn:text>
        </dmn:inputEntry>
        <dmn:inputEntry id="_41CB6123-8122-4FA4-A5C1-548B92CA31AE">
          <dmn:text>&quot;Sufficient&quot;</dmn:text>
        </dmn:inputEntry>
        <dmn:outputEntry id="_9E0497D0-F2F2-419E-A558-366452B379A1">
          <dmn:text>&quot;Qualified&quot;</dmn:text>
        </dmn:outputEntry>
        <dmn:outputEntry id="_113CA566-6044-4858-B8D9-5ACBA4A91CF4">
          <dmn:text>&quot;The borrower has been successfully prequalified for the requested loan.&quot;</dmn:text>
        </dmn:outputEntry>
        <dmn:annotationEntry>
          <dmn:text></dmn:text>
        </dmn:annotationEntry>
      </dmn:rule>
    </dmn:decisionTable>
  </dmn:decision>
  <dmn:inputData id="_6E3205AF-7E3D-4ABE-A367-96F3F6E8210E" name="Requested Product">
    <dmn:extensionElements />
    <dmn:variable id="_EE05E1C7-67ED-4A71-BDEE-8005259351E8" name="Requested Product" typeRef="Requested_Product" />
  </dmn:inputData>
  <dmn:businessKnowledgeModel id="_DA5CCF62-90A8-4CFC-A137-98B528522588" name="DTI">
    <dmn:extensionElements />
    <dmn:variable id="_2F8921D1-6384-4ECB-848E-CE84A20B2573" name="DTI" typeRef="number" />
    <dmn:encapsulatedLogic id="_478C815E-60C9-4637-AA42-195DF16B63A5" label="DTI" kind="FEEL" typeRef="number">
      <dmn:formalParameter id="_B7A9C222-C560-4D37-A821-0CAC88611F10" name="d" typeRef="number" />
      <dmn:formalParameter id="_43C04721-38F6-4ABF-9F2F-BD2956C05441" name="i" typeRef="number" />
      <dmn:literalExpression id="_064FA88E-B06F-4944-85C3-DA86C3F660DD" typeRef="&lt;Undefined&gt;">
        <dmn:text>d / i</dmn:text>
      </dmn:literalExpression>
    </dmn:encapsulatedLogic>
  </dmn:businessKnowledgeModel>
  <dmn:businessKnowledgeModel id="_C98BE939-B9C7-43E0-83E8-EE7A16C5276D" name="Lender Acceptable PITI">
    <dmn:extensionElements />
    <dmn:variable id="_9D78214B-EC07-4360-8D1B-3D927AC90A20" name="Lender Acceptable PITI" typeRef="number" />
    <dmn:encapsulatedLogic id="_E312D80E-0ECE-4D66-87EB-30DE20890BBC" kind="FEEL">
      <dmn:literalExpression id="_EEDF2C15-7FD7-409F-B23B-F9A198E2135D">
        <dmn:text>0.28</dmn:text>
      </dmn:literalExpression>
    </dmn:encapsulatedLogic>
  </dmn:businessKnowledgeModel>
  <dmndi:DMNDI>
    <dmndi:DMNDiagram id="_1608585F-01C8-4A66-B3E5-F4422D4DD2CA" name="Default DRD" useAlternativeInputDataShape="false">
      <di:extension>
        <kie:ComponentsWidthsExtension>
          <kie:ComponentWidths dmnElementRef="_21E8FA38-C947-4733-9E52-CF81A97ADF91">
            <kie:width>209</kie:width>
          </kie:ComponentWidths>
          <kie:ComponentWidths dmnElementRef="_9F0257EE-CF82-49FD-AEDD-3155890864FF">
            <kie:width>50</kie:width>
            <kie:width>209</kie:width>
          </kie:ComponentWidths>
          <kie:ComponentWidths dmnElementRef="_08A9C33D-719F-4B05-AC42-D15464798BC4">
            <kie:width>50</kie:width>
          </kie:ComponentWidths>
          <kie:ComponentWidths dmnElementRef="_EB658586-C3C8-488E-8118-E69E31583106">
            <kie:width>120</kie:width>
          </kie:ComponentWidths>
          <kie:ComponentWidths dmnElementRef="_6E79E4D9-BBFB-4E90-8AA3-A6C153C3C946" />
          <kie:ComponentWidths dmnElementRef="_51ACEC3C-4207-4F5F-8FDD-9EDAA3270E60">
            <kie:width>1036</kie:width>
          </kie:ComponentWidths>
          <kie:ComponentWidths dmnElementRef="_5D050B8D-DF55-45FD-988B-9C56BED53D5B">
            <kie:width>1036</kie:width>
          </kie:ComponentWidths>
          <kie:ComponentWidths dmnElementRef="_14C44A69-56DB-4B68-B757-4225C80E4D88">
            <kie:width>1036</kie:width>
          </kie:ComponentWidths>
          <kie:ComponentWidths dmnElementRef="_0DB5DE05-A2AD-4013-B191-DC1D1637A132">
            <kie:width>1036</kie:width>
          </kie:ComponentWidths>
          <kie:ComponentWidths dmnElementRef="_3F95EFD0-94D7-4D1A-9EA9-C8E12982D7E8">
            <kie:width>1158</kie:width>
          </kie:ComponentWidths>
          <kie:ComponentWidths dmnElementRef="_A32ED4A5-7B89-40F7-BE25-CDB636FE071C">
            <kie:width>454</kie:width>
          </kie:ComponentWidths>
          <kie:ComponentWidths dmnElementRef="_D33D9AEA-49DF-489F-98EC-4B42FF8C2027">
            <kie:width>50</kie:width>
            <kie:width>300</kie:width>
          </kie:ComponentWidths>
          <kie:ComponentWidths dmnElementRef="_5F9FEA4E-B3FC-4BC2-913E-36B8071FA777">
            <kie:width>50</kie:width>
          </kie:ComponentWidths>
          <kie:ComponentWidths dmnElementRef="_4A7FC8E0-25EF-4DAF-845A-93BD89C2BC8C">
            <kie:width>120</kie:width>
          </kie:ComponentWidths>
          <kie:ComponentWidths dmnElementRef="_F0E80900-1964-4142-9A05-73E7A2E0F2CD" />
          <kie:ComponentWidths dmnElementRef="_3D0A1979-E59A-483F-BDA8-138F99BA5AB3">
            <kie:width>550</kie:width>
          </kie:ComponentWidths>
          <kie:ComponentWidths dmnElementRef="_D985F886-71C0-4F65-8808-2CEF366BECC8">
            <kie:width>550</kie:width>
          </kie:ComponentWidths>
          <kie:ComponentWidths dmnElementRef="_D1F96102-4158-45BB-8C9A-B7A3BE2C0206">
            <kie:width>672</kie:width>
          </kie:ComponentWidths>
          <kie:ComponentWidths dmnElementRef="_4ACEFFF0-AD2C-4DB8-9BAD-7BCCFB03F295">
            <kie:width>60</kie:width>
            <kie:width>133</kie:width>
            <kie:width>147</kie:width>
            <kie:width>335</kie:width>
          </kie:ComponentWidths>
          <kie:ComponentWidths dmnElementRef="_EF7F404A-939E-4889-95D8-E4053DD1EED9">
            <kie:width>60</kie:width>
            <kie:width>233</kie:width>
            <kie:width>133</kie:width>
            <kie:width>129</kie:width>
            <kie:width>135</kie:width>
            <kie:width>681</kie:width>
            <kie:width>138</kie:width>
          </kie:ComponentWidths>
          <kie:ComponentWidths dmnElementRef="_064FA88E-B06F-4944-85C3-DA86C3F660DD">
            <kie:width>150</kie:width>
          </kie:ComponentWidths>
          <kie:ComponentWidths dmnElementRef="_478C815E-60C9-4637-AA42-195DF16B63A5">
            <kie:width>50</kie:width>
            <kie:width>150</kie:width>
          </kie:ComponentWidths>
          <kie:ComponentWidths dmnElementRef="_EEDF2C15-7FD7-409F-B23B-F9A198E2135D">
            <kie:width>228</kie:width>
          </kie:ComponentWidths>
          <kie:ComponentWidths dmnElementRef="_E312D80E-0ECE-4D66-87EB-30DE20890BBC">
            <kie:width>50</kie:width>
            <kie:width>228</kie:width>
          </kie:ComponentWidths>
        </kie:ComponentsWidthsExtension>
      </di:extension>
      <dmndi:DMNShape id="dmnshape-drg-_4C89E59C-FDDA-438C-8D1F-0B1194EF6DAE" dmnElementRef="_4C89E59C-FDDA-438C-8D1F-0B1194EF6DAE" isCollapsed="false">
        <dmndi:DMNStyle>
          <dmndi:FillColor red="255" green="255" blue="255" />
          <dmndi:StrokeColor red="0" green="0" blue="0" />
          <dmndi:FontColor red="0" green="0" blue="0" />
        </dmndi:DMNStyle>
        <dc:Bounds x="980" y="360" width="134" height="61" />
        <dmndi:DMNLabel />
      </dmndi:DMNShape>
      <dmndi:DMNShape id="dmnshape-drg-_4C788DBD-C672-4F41-9AFE-9C7D2C145734" dmnElementRef="_4C788DBD-C672-4F41-9AFE-9C7D2C145734" isCollapsed="false">
        <dmndi:DMNStyle>
          <dmndi:FillColor red="255" green="255" blue="255" />
          <dmndi:StrokeColor red="0" green="0" blue="0" />
          <dmndi:FontColor red="0" green="0" blue="0" />
        </dmndi:DMNStyle>
        <dc:Bounds x="99.09345794392524" y="223.67105263157896" width="136" height="63" />
        <dmndi:DMNLabel />
      </dmndi:DMNShape>
      <dmndi:DMNShape id="dmnshape-drg-_F0DC8923-5FC7-4200-8BD1-461D5F3714BE" dmnElementRef="_F0DC8923-5FC7-4200-8BD1-461D5F3714BE" isCollapsed="false">
        <dmndi:DMNStyle>
          <dmndi:FillColor red="255" green="255" blue="255" />
          <dmndi:StrokeColor red="0" green="0" blue="0" />
          <dmndi:FontColor red="0" green="0" blue="0" />
        </dmndi:DMNStyle>
        <dc:Bounds x="531" y="225" width="136" height="62" />
        <dmndi:DMNLabel />
      </dmndi:DMNShape>
      <dmndi:DMNShape id="dmnshape-drg-_FAF9080E-F4EF-49F7-AEFD-0D2990D8FFDA" dmnElementRef="_FAF9080E-F4EF-49F7-AEFD-0D2990D8FFDA" isCollapsed="false">
        <dmndi:DMNStyle>
          <dmndi:FillColor red="255" green="255" blue="255" />
          <dmndi:StrokeColor red="0" green="0" blue="0" />
          <dmndi:FontColor red="0" green="0" blue="0" />
        </dmndi:DMNStyle>
        <dc:Bounds x="760" y="360" width="135" height="63" />
        <dmndi:DMNLabel />
      </dmndi:DMNShape>
      <dmndi:DMNShape id="dmnshape-drg-_1CF5CEFA-AF97-46F9-9CD5-9A8AEBB20B4E" dmnElementRef="_1CF5CEFA-AF97-46F9-9CD5-9A8AEBB20B4E" isCollapsed="false">
        <dmndi:DMNStyle>
          <dmndi:FillColor red="255" green="255" blue="255" />
          <dmndi:StrokeColor red="0" green="0" blue="0" />
          <dmndi:FontColor red="0" green="0" blue="0" />
        </dmndi:DMNStyle>
        <dc:Bounds x="316.0607476635514" y="361" width="134" height="61" />
        <dmndi:DMNLabel />
      </dmndi:DMNShape>
      <dmndi:DMNShape id="dmnshape-drg-_D6F4234F-15B3-4F5B-B814-5F6FF29D2907" dmnElementRef="_D6F4234F-15B3-4F5B-B814-5F6FF29D2907" isCollapsed="false">
        <dmndi:DMNStyle>
          <dmndi:FillColor red="255" green="255" blue="255" />
          <dmndi:StrokeColor red="0" green="0" blue="0" />
          <dmndi:FontColor red="0" green="0" blue="0" />
        </dmndi:DMNStyle>
        <dc:Bounds x="315" y="225" width="136" height="62" />
        <dmndi:DMNLabel />
      </dmndi:DMNShape>
      <dmndi:DMNShape id="dmnshape-drg-_2FE51DB1-3083-4BF7-AA71-0B0065310E72" dmnElementRef="_2FE51DB1-3083-4BF7-AA71-0B0065310E72" isCollapsed="false">
        <dmndi:DMNStyle>
          <dmndi:FillColor red="255" green="255" blue="255" />
          <dmndi:StrokeColor red="0" green="0" blue="0" />
          <dmndi:FontColor red="0" green="0" blue="0" />
        </dmndi:DMNStyle>
        <dc:Bounds x="980" y="220" width="136" height="62" />
        <dmndi:DMNLabel />
      </dmndi:DMNShape>
      <dmndi:DMNShape id="dmnshape-drg-_21C50763-E49F-4D83-A824-16DA6AA87C64" dmnElementRef="_21C50763-E49F-4D83-A824-16DA6AA87C64" isCollapsed="false">
        <dmndi:DMNStyle>
          <dmndi:FillColor red="255" green="255" blue="255" />
          <dmndi:StrokeColor red="0" green="0" blue="0" />
          <dmndi:FontColor red="0" green="0" blue="0" />
        </dmndi:DMNStyle>
        <dc:Bounds x="532" y="89" width="136" height="62" />
        <dmndi:DMNLabel />
      </dmndi:DMNShape>
      <dmndi:DMNShape id="dmnshape-drg-_6E3205AF-7E3D-4ABE-A367-96F3F6E8210E" dmnElementRef="_6E3205AF-7E3D-4ABE-A367-96F3F6E8210E" isCollapsed="false">
        <dmndi:DMNStyle>
          <dmndi:FillColor red="255" green="255" blue="255" />
          <dmndi:StrokeColor red="0" green="0" blue="0" />
          <dmndi:FontColor red="0" green="0" blue="0" />
        </dmndi:DMNStyle>
        <dc:Bounds x="531.1214953271028" y="360" width="134" height="61" />
        <dmndi:DMNLabel />
      </dmndi:DMNShape>
      <dmndi:DMNShape id="dmnshape-drg-_DA5CCF62-90A8-4CFC-A137-98B528522588" dmnElementRef="_DA5CCF62-90A8-4CFC-A137-98B528522588" isCollapsed="false">
        <dmndi:DMNStyle>
          <dmndi:FillColor red="255" green="255" blue="255" />
          <dmndi:StrokeColor red="0" green="0" blue="0" />
          <dmndi:FontColor red="0" green="0" blue="0" />
        </dmndi:DMNStyle>
        <dc:Bounds x="99.09345794392524" y="359" width="136" height="63" />
        <dmndi:DMNLabel />
      </dmndi:DMNShape>
      <dmndi:DMNShape id="dmnshape-drg-_C98BE939-B9C7-43E0-83E8-EE7A16C5276D" dmnElementRef="_C98BE939-B9C7-43E0-83E8-EE7A16C5276D" isCollapsed="false">
        <dmndi:DMNStyle>
          <dmndi:FillColor red="255" green="255" blue="255" />
          <dmndi:StrokeColor red="0" green="0" blue="0" />
          <dmndi:FontColor red="0" green="0" blue="0" />
        </dmndi:DMNStyle>
        <dc:Bounds x="760" y="220" width="134" height="65" />
        <dmndi:DMNLabel />
      </dmndi:DMNShape>
      <dmndi:DMNEdge id="dmnedge-drg-_89EEAF9F-5A5D-4F59-91B7-EA418A7229AF" dmnElementRef="_89EEAF9F-5A5D-4F59-91B7-EA418A7229AF">
        <di:waypoint x="383.0607476635514" y="361" />
        <di:waypoint x="599" y="287" />
      </dmndi:DMNEdge>
      <dmndi:DMNEdge id="dmnedge-drg-_87730C5A-5648-415B-9189-EF4D8805F8C9" dmnElementRef="_87730C5A-5648-415B-9189-EF4D8805F8C9">
        <di:waypoint x="598.1214953271028" y="390.5" />
        <di:waypoint x="599" y="287" />
      </dmndi:DMNEdge>
      <dmndi:DMNEdge id="dmnedge-drg-_63DE7C3B-A767-4B8A-A098-91ECB4B8D330" dmnElementRef="_63DE7C3B-A767-4B8A-A098-91ECB4B8D330">
        <di:waypoint x="827.5" y="360" />
        <di:waypoint x="599" y="287" />
      </dmndi:DMNEdge>
      <dmndi:DMNEdge id="dmnedge-drg-_2C95829D-FCF9-44F5-8F5A-0A6CDB60600D" dmnElementRef="_2C95829D-FCF9-44F5-8F5A-0A6CDB60600D">
        <di:waypoint x="827" y="252.5" />
        <di:waypoint x="667" y="256" />
      </dmndi:DMNEdge>
      <dmndi:DMNEdge id="dmnedge-drg-_77BA409B-E00D-4FBC-B522-8F656D4F6F0E" dmnElementRef="_77BA409B-E00D-4FBC-B522-8F656D4F6F0E">
        <di:waypoint x="383.0607476635514" y="391.5" />
        <di:waypoint x="383" y="287" />
      </dmndi:DMNEdge>
      <dmndi:DMNEdge id="dmnedge-drg-_4D441C11-7042-49CF-A42C-17A4348A7F29" dmnElementRef="_4D441C11-7042-49CF-A42C-17A4348A7F29">
        <di:waypoint x="167.09345794392524" y="255.17105263157896" />
        <di:waypoint x="315" y="256" />
      </dmndi:DMNEdge>
      <dmndi:DMNEdge id="dmnedge-drg-_3217D655-4484-4733-A9AE-4F9CF30D9924" dmnElementRef="_3217D655-4484-4733-A9AE-4F9CF30D9924">
        <di:waypoint x="167.09345794392524" y="359" />
        <di:waypoint x="383" y="287" />
      </dmndi:DMNEdge>
      <dmndi:DMNEdge id="dmnedge-drg-_31A1B6B2-A2A6-4E03-B898-26573A5CF3BA" dmnElementRef="_31A1B6B2-A2A6-4E03-B898-26573A5CF3BA">
        <di:waypoint x="1047" y="390.5" />
        <di:waypoint x="1048" y="282" />
      </dmndi:DMNEdge>
      <dmndi:DMNEdge id="dmnedge-drg-_0B992F01-BA77-4F06-A830-D8948B467272" dmnElementRef="_0B992F01-BA77-4F06-A830-D8948B467272">
        <di:waypoint x="599" y="256" />
        <di:waypoint x="600" y="151" />
      </dmndi:DMNEdge>
      <dmndi:DMNEdge id="dmnedge-drg-_B6002F33-4888-48C5-B265-636030F8C2DC" dmnElementRef="_B6002F33-4888-48C5-B265-636030F8C2DC" sourceElement="dmnshape-drg-_2FE51DB1-3083-4BF7-AA71-0B0065310E72" targetElement="dmnshape-drg-_21C50763-E49F-4D83-A824-16DA6AA87C64">
        <di:waypoint x="1048" y="220" />
        <di:waypoint x="600" y="151" />
      </dmndi:DMNEdge>
      <dmndi:DMNEdge id="dmnedge-drg-_A3E95B32-2EFD-40AD-B5E4-0A73A1542011" dmnElementRef="_A3E95B32-2EFD-40AD-B5E4-0A73A1542011" sourceElement="dmnshape-drg-_D6F4234F-15B3-4F5B-B814-5F6FF29D2907" targetElement="dmnshape-drg-_21C50763-E49F-4D83-A824-16DA6AA87C64">
        <di:waypoint x="383" y="225" />
        <di:waypoint x="600" y="151" />
      </dmndi:DMNEdge>
    </dmndi:DMNDiagram>
  </dmndi:DMNDI>
  <dmn:import id="_E4562608-B14C-4845-A4C3-6C1A1FBC0219" name="sumBkm" importType="https://www.omg.org/spec/DMN/20230324/MODEL/" namespace="https://kie.apache.org/dmn/_923784BD-CD31-488A-9C31-C1A83C5483C0" />
  <dmn:import id="_C726A824-9349-4CF8-91FA-F969250C8421" name="sumDiffDs" importType="https://www.omg.org/spec/DMN/20230324/MODEL/" namespace="https://kie.apache.org/dmn/_D19B0015-2CBD-4BA8-84A9-5F554D84A9E1" />
  <dmn:import id="_87CDD600-7564-CF87-547E-A8B876CD0812" name="testTreePmml" importType="https://www.dmg.org/PMML-4_2" namespace="https://kie.org/pmml#playground/available-models-to-include/testTree.pmml" />
</dmn:definitions>
`;
const meta = {
  title: "Use cases/Loan Pre Qualification",
  component: _src_DmnEditor__WEBPACK_IMPORTED_MODULE_2__.DmnEditor,
  includeStories: /^[A-Z]/
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (meta);
const marshaller = (0,_kie_tools_dmn_marshaller__WEBPACK_IMPORTED_MODULE_0__.getMarshaller)(loanPreQualificationDmn, {
  upgradeTo: "latest"
});
const model = marshaller.parser.parse();
const LoanPreQualification = {
  render: _misc_empty_Empty_stories__WEBPACK_IMPORTED_MODULE_1__.Empty.render,
  args: {
    model: model,
    xml: marshaller.builder.build(model)
  }
};
LoanPreQualification.parameters = {
  ...LoanPreQualification.parameters,
  docs: {
    ...((_a = LoanPreQualification.parameters) === null || _a === void 0 ? void 0 : _a.docs),
    source: {
      originalSource: "{\n  render: Empty.render,\n  args: {\n    model: model,\n    xml: marshaller.builder.build(model)\n  }\n}",
      ...((_c = (_b = LoanPreQualification.parameters) === null || _b === void 0 ? void 0 : _b.docs) === null || _c === void 0 ? void 0 : _c.source)
    }
  }
};
const __namedExportsOrder = ["loanPreQualificationDmn", "LoanPreQualification"];

/***/ }),

/***/ "./stories/dmnEditorStoriesWrapper.tsx":
/*!*********************************************!*\
  !*** ./stories/dmnEditorStoriesWrapper.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DmnEditorWrapper: () => (/* binding */ DmnEditorWrapper)
/* harmony export */ });
/* unused harmony exports evaluationResultsByNodeId, validationMessages */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @storybook/preview-api */ "@storybook/preview-api");
/* harmony import */ var _storybook_preview_api__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_DmnEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/DmnEditor */ "./src/DmnEditor.tsx");
/* harmony import */ var _kie_tools_dmn_marshaller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @kie-tools/dmn-marshaller */ "../dmn-marshaller/dist/index.js");
/* harmony import */ var _kie_tools_dmn_marshaller_dist_normalization_normalize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @kie-tools/dmn-marshaller/dist/normalization/normalize */ "../dmn-marshaller/dist/normalization/normalize.js");
/* harmony import */ var deep_object_diff__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! deep-object-diff */ "../../node_modules/.pnpm/deep-object-diff@1.1.9/node_modules/deep-object-diff/mjs/diff.js");
/* harmony import */ var _misc_empty_Empty_stories__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./misc/empty/Empty.stories */ "./stories/misc/empty/Empty.stories.tsx");








const evaluationResultsByNodeId = new Map();
const validationMessages = {};
function DmnEditorWrapper(props) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
  const [args, updateArgs] = (0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__.useArgs)();
  const argsCopy = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(args);
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const [modelArgs, setModelArgs] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(args.model);
  const model = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    var _a;
    return (_a = props === null || props === void 0 ? void 0 : props.model) !== null && _a !== void 0 ? _a : modelArgs;
  }, [modelArgs, props === null || props === void 0 ? void 0 : props.model]);
  const [modelChanged, setModelChange] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [isReadOnly, setIsReadOnly] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((_b = (_a = props === null || props === void 0 ? void 0 : props.isReadOnly) !== null && _a !== void 0 ? _a : args.isReadOnly) !== null && _b !== void 0 ? _b : false);
  const onModelChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => (props === null || props === void 0 ? void 0 : props.onModelChange) ? props.onModelChange : setModelArgs, [props === null || props === void 0 ? void 0 : props.onModelChange]);
  const onOpenedBoxedExpressionEditorNodeChangeNoOperation = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => newOpenedNodeId => {}, []);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (args.isReadOnly !== undefined) {
      setIsReadOnly(args.isReadOnly);
    }
  }, [args.isReadOnly]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (Object.keys((0,deep_object_diff__WEBPACK_IMPORTED_MODULE_7__["default"])(argsCopy.current.model, model)).length !== 0) {
      updateArgs({
        ...argsCopy.current,
        model: model,
        xml: (0,_kie_tools_dmn_marshaller__WEBPACK_IMPORTED_MODULE_4__.getMarshaller)((0,_misc_empty_Empty_stories__WEBPACK_IMPORTED_MODULE_6__.generateEmptyDmn15)(), {
          upgradeTo: "latest"
        }).builder.build(model)
      });
    }
  }, [updateArgs, model]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (Object.keys((0,deep_object_diff__WEBPACK_IMPORTED_MODULE_7__["default"])(argsCopy.current, args)).length === 0) {
      return;
    }
    argsCopy.current = args;
    if (Object.keys((0,deep_object_diff__WEBPACK_IMPORTED_MODULE_7__["default"])(args.model, model)).length === 0) {
      return;
    }
    onModelChange((0,_kie_tools_dmn_marshaller_dist_normalization_normalize__WEBPACK_IMPORTED_MODULE_5__.normalize)(args.model));
  }, [args, model, onModelChange]);
  const onModelDebounceStateChanged = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(changed => {
    setModelChange(changed);
  }, []);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [modelChanged && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      "data-testid": "storybook--dmn-editor-model",
      style: {
        display: "none"
      },
      children: JSON.stringify(model)
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
      "data-testid": "storybook--dmn-editor-toggle-read-only",
      style: {
        display: "none"
      },
      onClick: () => setIsReadOnly(currentValue => !currentValue),
      children: isReadOnly.toString()
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      style: {
        position: "absolute",
        width: "100%",
        height: "100%",
        top: "0px",
        left: "0px"
      },
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_DmnEditor__WEBPACK_IMPORTED_MODULE_3__.DmnEditor, {
        ref: ref,
        model: model,
        originalVersion: (_c = props === null || props === void 0 ? void 0 : props.originalVersion) !== null && _c !== void 0 ? _c : args.originalVersion,
        isReadOnly: isReadOnly,
        onModelChange: onModelChange,
        onOpenedBoxedExpressionEditorNodeChange: onOpenedBoxedExpressionEditorNodeChangeNoOperation,
        onRequestExternalModelByPath: (_d = props === null || props === void 0 ? void 0 : props.onRequestExternalModelByPath) !== null && _d !== void 0 ? _d : args.onRequestExternalModelByPath,
        onRequestExternalModelsAvailableToInclude: (_e = props === null || props === void 0 ? void 0 : props.onRequestExternalModelsAvailableToInclude) !== null && _e !== void 0 ? _e : args.onRequestExternalModelsAvailableToInclude,
        externalModelsByNamespace: (_f = props === null || props === void 0 ? void 0 : props.externalModelsByNamespace) !== null && _f !== void 0 ? _f : args.externalModelsByNamespace,
        externalContextName: (_g = props === null || props === void 0 ? void 0 : props.externalContextName) !== null && _g !== void 0 ? _g : args.externalContextName,
        externalContextDescription: (_h = props === null || props === void 0 ? void 0 : props.externalContextDescription) !== null && _h !== void 0 ? _h : args.externalContextDescription,
        validationMessages: (_j = props === null || props === void 0 ? void 0 : props.validationMessages) !== null && _j !== void 0 ? _j : args.validationMessages,
        evaluationResultsByNodeId: (_k = props === null || props === void 0 ? void 0 : props.evaluationResultsByNodeId) !== null && _k !== void 0 ? _k : args.evaluationResultsByNodeId,
        issueTrackerHref: (_l = props === null || props === void 0 ? void 0 : props.issueTrackerHref) !== null && _l !== void 0 ? _l : args.issueTrackerHref,
        onRequestToJumpToPath: (_m = props === null || props === void 0 ? void 0 : props.onRequestToJumpToPath) !== null && _m !== void 0 ? _m : args.onRequestToJumpToPath,
        onModelDebounceStateChanged: onModelDebounceStateChanged
      })
    })]
  });
}
try {
    // @ts-ignore
    DmnEditorWrapper.displayName = "DmnEditorWrapper";
    // @ts-ignore
    DmnEditorWrapper.__docgenInfo = { "description": "", "displayName": "DmnEditorWrapper", "props": { "model": { "defaultValue": null, "description": "The DMN itself.", "name": "model", "required": false, "type": { "name": "DmnLatestModel" } }, "originalVersion": { "defaultValue": null, "description": "The original version of `model` before upgrading to `latest`.", "name": "originalVersion", "required": false, "type": { "name": "enum", "value": [{ "value": "\"1.0\"" }, { "value": "\"1.1\"" }, { "value": "\"1.2\"" }, { "value": "\"1.3\"" }, { "value": "\"1.4\"" }, { "value": "\"1.5\"" }] } }, "onModelChange": { "defaultValue": null, "description": "Called when a change occurs on `model`, so the controlled flow of the component can be done.", "name": "onModelChange", "required": false, "type": { "name": "OnDmnModelChange" } }, "onRequestExternalModelByPath": { "defaultValue": null, "description": "Called when the contents of a specific available model is necessary. Used by the \"Included models\" tab.", "name": "onRequestExternalModelByPath", "required": false, "type": { "name": "OnRequestExternalModelByPath" } }, "onRequestExternalModelsAvailableToInclude": { "defaultValue": null, "description": "Called when the list of paths of available models to be included is needed. Used by the \"Included models\" tab.", "name": "onRequestExternalModelsAvailableToInclude", "required": false, "type": { "name": "OnRequestExternalModelsAvailableToInclude" } }, "externalModelsByNamespace": { "defaultValue": null, "description": "When the DMN represented by `model` (\"This DMN\") contains `import`ed models, this prop needs to map their contents by namespace.\nThe DMN model won't be correctly rendered if an included model is not found on this object.", "name": "externalModelsByNamespace", "required": false, "type": { "name": "ExternalModelsIndex" } }, "evaluationResultsByNodeId": { "defaultValue": null, "description": "To show information about evaluation results directly on the DMN diagram and/or Boxed Expression Editor, use this prop.", "name": "evaluationResultsByNodeId", "required": false, "type": { "name": "EvaluationResultsByNodeId" } }, "validationMessages": { "defaultValue": null, "description": "To show information about validation messages directly on the DMN diagram and/or Boxed Expression Editor, use this prop.", "name": "validationMessages", "required": false, "type": { "name": "ValidationMessages" } }, "externalContextName": { "defaultValue": null, "description": "The name of context in which this instance of DMN Editor is running. For example, if this DMN Editor instance\nis displaying a model from a project called \"My project\", you could use `externalContextName={\"My project\"}`", "name": "externalContextName", "required": false, "type": { "name": "string" } }, "externalContextDescription": { "defaultValue": null, "description": "Describe the context in which this instance of DMN Editor is running. For example, if this DMN Editor instance\nis displaying a model from a project called \"My project\", you could use\n`externalContextDescription={'All models (DMN and PMML) of \"My project\" are available.'}`", "name": "externalContextDescription", "required": false, "type": { "name": "string" } }, "issueTrackerHref": { "defaultValue": null, "description": "A link that will take users to an issue tracker so they can report problems they find on the DMN Editor.\nThis is shown on the ErrorBoundary fallback component, when an uncaught error happens.", "name": "issueTrackerHref", "required": false, "type": { "name": "string" } }, "isReadOnly": { "defaultValue": null, "description": "A flag to enable read-only mode on the DMN Editor.\nWhen enabled navigation is still possible (e.g. entering the Boxed Expression Editor, Data Types and Included Models),\nbut no changes can be made and the model itself is unaltered.", "name": "isReadOnly", "required": false, "type": { "name": "boolean" } }, "onRequestToJumpToPath": { "defaultValue": null, "description": "When users want to jump to another file, this method is called, allowing the controller of this component decide what to do.\nLinks are only rendered if this is provided. Otherwise, paths will be rendered as text.", "name": "onRequestToJumpToPath", "required": false, "type": { "name": "OnRequestToJumpToPath" } }, "onRequestToResolvePath": { "defaultValue": null, "description": "All paths inside the DMN Editor are relative. To be able to resolve them and display them as absolute paths, this function is called.\nIf undefined, the relative paths will be displayed.", "name": "onRequestToResolvePath", "required": false, "type": { "name": "OnRequestToResolvePath" } }, "onModelDebounceStateChanged": { "defaultValue": null, "description": "Notifies the caller when the DMN Editor performs a new edit after the debounce time.", "name": "onModelDebounceStateChanged", "required": false, "type": { "name": "((changed: boolean) => void)" } }, "onOpenedBoxedExpressionEditorNodeChange": { "defaultValue": null, "description": "", "name": "onOpenedBoxedExpressionEditorNodeChange", "required": false, "type": { "name": "((newOpenedNodeId: string) => void)" } }, "xml": { "defaultValue": null, "description": "", "name": "xml", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["stories/dmnEditorStoriesWrapper.tsx#DmnEditorWrapper"] = { docgenInfo: DmnEditorWrapper.__docgenInfo, name: "DmnEditorWrapper", path: "stories/dmnEditorStoriesWrapper.tsx#DmnEditorWrapper" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "../../node_modules/.pnpm/deep-object-diff@1.1.9/node_modules/deep-object-diff/mjs/diff.js":
/*!*************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/deep-object-diff@1.1.9/node_modules/deep-object-diff/mjs/diff.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "../../node_modules/.pnpm/deep-object-diff@1.1.9/node_modules/deep-object-diff/mjs/utils.js");


const diff = (lhs, rhs) => {
  if (lhs === rhs) return {}; // equal return no diff

  if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isObject)(lhs) || !(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isObject)(rhs)) return rhs; // return updated rhs

  const deletedValues = Object.keys(lhs).reduce((acc, key) => {
    if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.hasOwnProperty)(rhs, key)) {
      acc[key] = undefined;
      
    }

    return acc;
  }, (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.makeObjectWithoutPrototype)());

  if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isDate)(lhs) || (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isDate)(rhs)) {
    if (lhs.valueOf() == rhs.valueOf()) return {};
    return rhs;
  }

  return Object.keys(rhs).reduce((acc, key) => {
    if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.hasOwnProperty)(lhs, key)){
      acc[key] = rhs[key]; // return added r key
      return acc;
    } 

    const difference = diff(lhs[key], rhs[key]);

    // If the difference is empty, and the lhs is an empty object or the rhs is not an empty object
    if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isEmptyObject)(difference) && !(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isDate)(difference) && ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isEmptyObject)(lhs[key]) || !(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isEmptyObject)(rhs[key])))
      return acc; // return no diff

    acc[key] = difference // return updated key
    return acc; // return updated key
  }, deletedValues);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (diff);


/***/ }),

/***/ "../../node_modules/.pnpm/deep-object-diff@1.1.9/node_modules/deep-object-diff/mjs/utils.js":
/*!**************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/deep-object-diff@1.1.9/node_modules/deep-object-diff/mjs/utils.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hasOwnProperty: () => (/* binding */ hasOwnProperty),
/* harmony export */   isDate: () => (/* binding */ isDate),
/* harmony export */   isEmptyObject: () => (/* binding */ isEmptyObject),
/* harmony export */   isObject: () => (/* binding */ isObject),
/* harmony export */   makeObjectWithoutPrototype: () => (/* binding */ makeObjectWithoutPrototype)
/* harmony export */ });
/* unused harmony export isEmpty */
const isDate = d => d instanceof Date;
const isEmpty = o => Object.keys(o).length === 0;
const isObject = o => o != null && typeof o === 'object';
const hasOwnProperty = (o, ...args) => Object.prototype.hasOwnProperty.call(o, ...args)
const isEmptyObject = (o) => isObject(o) && isEmpty(o);
const makeObjectWithoutPrototype = () => Object.create(null);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlQ2FzZXMtbG9hblByZVF1YWxpZmljYXRpb24tTG9hblByZVF1YWxpZmljYXRpb24tc3Rvcmllcy45ZjU2Y2JjZi5pZnJhbWUuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0IwRDtBQUNpQztBQUNiO0FBQ1E7QUFDSTtBQUN2QjtBQUM1RCxNQUFNTyxrQkFBa0IsR0FBR0EsQ0FBQSxLQUFNOztXQUU3QkwsMEZBQU8sQ0FBQ00sR0FBRyxDQUFDLEVBQUUsQ0FBQzt3QkFDRkosZ0dBQVUsQ0FBQ0ssa0JBQWtCLENBQUNDLE9BQU87MENBQ25CUCw0RkFBWSxFQUFFO1FBQ2hEQSw0RkFBWSxFQUFFO2FBQ1RBLDRGQUFZLEVBQUU7ZUFDWjtBQUNmLE1BQU1RLElBQUksR0FBeUI7RUFDakNDLEtBQUssRUFBRSxZQUFZO0VBQ25CQyxTQUFTLEVBQUVQLHFEQUFTO0VBQ3BCUSxjQUFjLEVBQUU7Q0FDakI7QUFDRCxpRUFBZUgsSUFBSSxFQUFDO0FBRXBCLE1BQU1JLFVBQVUsR0FBR2Ysd0VBQWEsQ0FBQ08sa0JBQWtCLEVBQUUsRUFBRTtFQUNyRFMsU0FBUyxFQUFFO0NBQ1osQ0FBQztBQUNGLE1BQU1DLEtBQUssR0FBR0YsVUFBVSxDQUFDRyxNQUFNLENBQUNDLEtBQUssRUFBRTtBQUNoQyxNQUFNQyxLQUFLLEdBQVU7RUFDMUJDLE1BQU0sRUFBRUMsSUFBSSxJQUFJakIsMEVBQWdCLEVBQUU7RUFDbENpQixJQUFJLEVBQUU7SUFDSkwsS0FBSyxFQUFFQSxLQUFLO0lBQ1pNLGVBQWUsRUFBRSxLQUFLO0lBQ3RCQyx5QkFBeUIsRUFBRSxJQUFJQyxHQUFHLEVBQUU7SUFDcENDLDBCQUEwQixFQUFFLEVBQUU7SUFDOUJDLG1CQUFtQixFQUFFLHdCQUF3QjtJQUM3Q0MseUJBQXlCLEVBQUUsRUFBRTtJQUM3QkMsZ0JBQWdCLEVBQUUsRUFBRTtJQUNwQkMsa0JBQWtCLEVBQUUsRUFBRTtJQUN0QkMsVUFBVSxFQUFFLEtBQUs7SUFD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RDtBQUNBLFNBQVMseURBQWM7QUFDdkI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRyxFQUFFLHFFQUEwQjs7QUFFL0IsTUFBTSxpREFBTSxTQUFTLGlEQUFNO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVMseURBQWM7QUFDdkIsMkJBQTJCO0FBQzNCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxRQUFRLHdEQUFhLGlCQUFpQixpREFBTSxpQkFBaUIsd0RBQWEsZUFBZSx3REFBYTtBQUN0RyxrQkFBa0I7O0FBRWxCO0FBQ0EsZ0JBQWdCO0FBQ2hCLEdBQUc7QUFDSDs7QUFFQSxpRUFBZSxJQUFJLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGtpZS10b29scy9kbW4tZWRpdG9yLy4vc3Rvcmllcy9taXNjL2VtcHR5L0VtcHR5LnN0b3JpZXMudHN4Iiwid2VicGFjazovL0BraWUtdG9vbHMvZG1uLWVkaXRvci8uL3N0b3JpZXMvdXNlQ2FzZXMvbG9hblByZVF1YWxpZmljYXRpb24vTG9hblByZVF1YWxpZmljYXRpb24uc3Rvcmllcy50c3giLCJ3ZWJwYWNrOi8vQGtpZS10b29scy9kbW4tZWRpdG9yLy4vc3Rvcmllcy9kbW5FZGl0b3JTdG9yaWVzV3JhcHBlci50c3giLCJ3ZWJwYWNrOi8vQGtpZS10b29scy9kbW4tZWRpdG9yLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9kZWVwLW9iamVjdC1kaWZmQDEuMS45L25vZGVfbW9kdWxlcy9kZWVwLW9iamVjdC1kaWZmL21qcy9kaWZmLmpzIiwid2VicGFjazovL0BraWUtdG9vbHMvZG1uLWVkaXRvci8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZGVlcC1vYmplY3QtZGlmZkAxLjEuOS9ub2RlX21vZHVsZXMvZGVlcC1vYmplY3QtZGlmZi9tanMvdXRpbHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIExpY2Vuc2VkIHRvIHRoZSBBcGFjaGUgU29mdHdhcmUgRm91bmRhdGlvbiAoQVNGKSB1bmRlciBvbmVcbiAqIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiAgU2VlIHRoZSBOT1RJQ0UgZmlsZVxuICogZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb25cbiAqIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLiAgVGhlIEFTRiBsaWNlbnNlcyB0aGlzIGZpbGVcbiAqIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGVcbiAqIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuICogd2l0aCB0aGUgTGljZW5zZS4gIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsXG4gKiBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxuICogXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcbiAqIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZVxuICogc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9uc1xuICogdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHR5cGUgeyBNZXRhLCBTdG9yeU9iaiB9IGZyb20gXCJAc3Rvcnlib29rL3JlYWN0XCI7XG5pbXBvcnQgeyBnZXRNYXJzaGFsbGVyIH0gZnJvbSBcIkBraWUtdG9vbHMvZG1uLW1hcnNoYWxsZXJcIjtcbmltcG9ydCB7IG5zIGFzIGRtbjE1bnMgfSBmcm9tIFwiQGtpZS10b29scy9kbW4tbWFyc2hhbGxlci9kaXN0L3NjaGVtYXMvZG1uLTFfNS90cy1nZW4vbWV0YVwiO1xuaW1wb3J0IHsgZ2VuZXJhdGVVdWlkIH0gZnJvbSBcIkBraWUtdG9vbHMvYm94ZWQtZXhwcmVzc2lvbi1jb21wb25lbnQvZGlzdC9hcGlcIjtcbmltcG9ydCB7IERNTjE1X1NQRUMgfSBmcm9tIFwiQGtpZS10b29scy9kbW4tbWFyc2hhbGxlci9kaXN0L3NjaGVtYXMvZG1uLTFfNS9EbW4xNVNwZWNcIjtcbmltcG9ydCB7IERtbkVkaXRvcldyYXBwZXIsIFN0b3J5Ym9va0RtbkVkaXRvclByb3BzIH0gZnJvbSBcIi4uLy4uL2RtbkVkaXRvclN0b3JpZXNXcmFwcGVyXCI7XG5pbXBvcnQgeyBEbW5FZGl0b3IsIERtbkVkaXRvclByb3BzIH0gZnJvbSBcIi4uLy4uLy4uL3NyYy9EbW5FZGl0b3JcIjtcbmV4cG9ydCBjb25zdCBnZW5lcmF0ZUVtcHR5RG1uMTUgPSAoKSA9PiBgPD94bWwgdmVyc2lvbj1cIjEuMFwiIGVuY29kaW5nPVwiVVRGLThcIj8+XG48ZGVmaW5pdGlvbnNcbiAgeG1sbnM9XCIke2RtbjE1bnMuZ2V0KFwiXCIpfVwiXG4gIGV4cHJlc3Npb25MYW5ndWFnZT1cIiR7RE1OMTVfU1BFQy5leHByZXNzaW9uTGFuZ3VhZ2UuZGVmYXVsdH1cIlxuICBuYW1lc3BhY2U9XCJodHRwczovL2tpZS5hcGFjaGUub3JnL2Rtbi8ke2dlbmVyYXRlVXVpZCgpfVwiXG4gIGlkPVwiJHtnZW5lcmF0ZVV1aWQoKX1cIlxuICBuYW1lPVwiRE1OJHtnZW5lcmF0ZVV1aWQoKX1cIj5cbjwvZGVmaW5pdGlvbnM+YDtcbmNvbnN0IG1ldGE6IE1ldGE8RG1uRWRpdG9yUHJvcHM+ID0ge1xuICB0aXRsZTogXCJNaXNjL0VtcHR5XCIsXG4gIGNvbXBvbmVudDogRG1uRWRpdG9yLFxuICBpbmNsdWRlU3RvcmllczogL15bQS1aXS9cbn07XG5leHBvcnQgZGVmYXVsdCBtZXRhO1xudHlwZSBTdG9yeSA9IFN0b3J5T2JqPFN0b3J5Ym9va0RtbkVkaXRvclByb3BzPjtcbmNvbnN0IG1hcnNoYWxsZXIgPSBnZXRNYXJzaGFsbGVyKGdlbmVyYXRlRW1wdHlEbW4xNSgpLCB7XG4gIHVwZ3JhZGVUbzogXCJsYXRlc3RcIlxufSk7XG5jb25zdCBtb2RlbCA9IG1hcnNoYWxsZXIucGFyc2VyLnBhcnNlKCk7XG5leHBvcnQgY29uc3QgRW1wdHk6IFN0b3J5ID0ge1xuICByZW5kZXI6IGFyZ3MgPT4gRG1uRWRpdG9yV3JhcHBlcigpLFxuICBhcmdzOiB7XG4gICAgbW9kZWw6IG1vZGVsLFxuICAgIG9yaWdpbmFsVmVyc2lvbjogXCIxLjVcIixcbiAgICBldmFsdWF0aW9uUmVzdWx0c0J5Tm9kZUlkOiBuZXcgTWFwKCksXG4gICAgZXh0ZXJuYWxDb250ZXh0RGVzY3JpcHRpb246IFwiXCIsXG4gICAgZXh0ZXJuYWxDb250ZXh0TmFtZTogXCJTdG9yeWJvb2sgLSBETU4gRWRpdG9yXCIsXG4gICAgZXh0ZXJuYWxNb2RlbHNCeU5hbWVzcGFjZToge30sXG4gICAgaXNzdWVUcmFja2VySHJlZjogXCJcIixcbiAgICB2YWxpZGF0aW9uTWVzc2FnZXM6IHt9LFxuICAgIGlzUmVhZE9ubHk6IGZhbHNlLFxuICAgIHhtbDogbWFyc2hhbGxlci5idWlsZGVyLmJ1aWxkKG1vZGVsKVxuICB9XG59O1xuRW1wdHkucGFyYW1ldGVycyA9IHtcbiAgLi4uRW1wdHkucGFyYW1ldGVycyxcbiAgZG9jczoge1xuICAgIC4uLkVtcHR5LnBhcmFtZXRlcnM/LmRvY3MsXG4gICAgc291cmNlOiB7XG4gICAgICBvcmlnaW5hbFNvdXJjZTogXCJ7XFxuICByZW5kZXI6IGFyZ3MgPT4gRG1uRWRpdG9yV3JhcHBlcigpLFxcbiAgYXJnczoge1xcbiAgICBtb2RlbDogbW9kZWwsXFxuICAgIG9yaWdpbmFsVmVyc2lvbjogXFxcIjEuNVxcXCIsXFxuICAgIGV2YWx1YXRpb25SZXN1bHRzQnlOb2RlSWQ6IG5ldyBNYXAoKSxcXG4gICAgZXh0ZXJuYWxDb250ZXh0RGVzY3JpcHRpb246IFxcXCJcXFwiLFxcbiAgICBleHRlcm5hbENvbnRleHROYW1lOiBcXFwiU3Rvcnlib29rIC0gRE1OIEVkaXRvclxcXCIsXFxuICAgIGV4dGVybmFsTW9kZWxzQnlOYW1lc3BhY2U6IHt9LFxcbiAgICBpc3N1ZVRyYWNrZXJIcmVmOiBcXFwiXFxcIixcXG4gICAgdmFsaWRhdGlvbk1lc3NhZ2VzOiB7fSxcXG4gICAgaXNSZWFkT25seTogZmFsc2UsXFxuICAgIHhtbDogbWFyc2hhbGxlci5idWlsZGVyLmJ1aWxkKG1vZGVsKVxcbiAgfVxcbn1cIixcbiAgICAgIC4uLkVtcHR5LnBhcmFtZXRlcnM/LmRvY3M/LnNvdXJjZVxuICAgIH1cbiAgfVxufTsiLCIvKlxuICogTGljZW5zZWQgdG8gdGhlIEFwYWNoZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIChBU0YpIHVuZGVyIG9uZVxuICogb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuICBTZWUgdGhlIE5PVElDRSBmaWxlXG4gKiBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvblxuICogcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuICBUaGUgQVNGIGxpY2Vuc2VzIHRoaXMgZmlsZVxuICogdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZVxuICogXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4gKiB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZyxcbiAqIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXG4gKiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxuICogS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlXG4gKiBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zXG4gKiB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB0eXBlIHsgTWV0YSwgU3RvcnlPYmogfSBmcm9tIFwiQHN0b3J5Ym9vay9yZWFjdFwiO1xuaW1wb3J0IHsgZ2V0TWFyc2hhbGxlciB9IGZyb20gXCJAa2llLXRvb2xzL2Rtbi1tYXJzaGFsbGVyXCI7XG5pbXBvcnQgeyBFbXB0eSB9IGZyb20gXCIuLi8uLi9taXNjL2VtcHR5L0VtcHR5LnN0b3JpZXNcIjtcbmltcG9ydCB7IERtbkVkaXRvciwgRG1uRWRpdG9yUHJvcHMgfSBmcm9tIFwiLi4vLi4vLi4vc3JjL0RtbkVkaXRvclwiO1xuaW1wb3J0IHsgU3Rvcnlib29rRG1uRWRpdG9yUHJvcHMgfSBmcm9tIFwiLi4vLi4vZG1uRWRpdG9yU3Rvcmllc1dyYXBwZXJcIjtcbmV4cG9ydCBjb25zdCBsb2FuUHJlUXVhbGlmaWNhdGlvbkRtbiA9IGA8P3htbCB2ZXJzaW9uPVwiMS4wXCIgZW5jb2Rpbmc9XCJVVEYtOFwiID8+XG48ZG1uOmRlZmluaXRpb25zIHhtbG5zOmRtbj1cImh0dHA6Ly93d3cub21nLm9yZy9zcGVjL0RNTi8yMDE4MDUyMS9NT0RFTC9cIlxuICAgIHhtbG5zOmRpPVwiaHR0cDovL3d3dy5vbWcub3JnL3NwZWMvRE1OLzIwMTgwNTIxL0RJL1wiXG4gICAgeG1sbnM6a2llPVwiaHR0cHM6Ly9raWUuYXBhY2hlLm9yZy9kbW4vZXh0ZW5zaW9ucy8xLjBcIlxuICAgIHhtbG5zOmRtbmRpPVwiaHR0cDovL3d3dy5vbWcub3JnL3NwZWMvRE1OLzIwMTgwNTIxL0RNTkRJL1wiXG4gICAgeG1sbnM6ZGM9XCJodHRwOi8vd3d3Lm9tZy5vcmcvc3BlYy9ETU4vMjAxODA1MjEvREMvXCJcbiAgICB4bWxuczpmZWVsPVwiaHR0cDovL3d3dy5vbWcub3JnL3NwZWMvRE1OLzIwMTgwNTIxL0ZFRUwvXCJcbiAgICB4bWxuczppbmNsdWRlZDA9XCJodHRwczovL2tpZS5hcGFjaGUub3JnL2Rtbi9fOTIzNzg0QkQtQ0QzMS00ODhBLTlDMzEtQzFBODNDNTQ4M0MwXCJcbiAgICB4bWxuczppbmNsdWRlZDE9XCJodHRwczovL2tpZS5hcGFjaGUub3JnL2Rtbi9fRDE5QjAwMTUtMkNCRC00QkE4LTg0QTktNUY1NTREODRBOUUxXCJcbiAgICBleHByZXNzaW9uTGFuZ3VhZ2U9XCJodHRwOi8vd3d3Lm9tZy5vcmcvc3BlYy9ETU4vMjAxODA1MjEvRkVFTC9cIlxuICAgIHR5cGVMYW5ndWFnZT1cImh0dHA6Ly93d3cub21nLm9yZy9zcGVjL0RNTi8yMDIxMTEwOC9GRUVML1wiXG4gICAgbmFtZXNwYWNlPVwiaHR0cHM6Ly9raWUuYXBhY2hlLm9yZy9kbW4vXzg1N0ZFNDI0LUJFREEtNDc3Mi1BQjhFLTJGNENEREI4NjRBQlwiXG4gICAgaWQ9XCJfQzZDQkVDRUItMkJCQy00RTE0LTgwQjAtMTdGNTc2QjJDRjkyXCJcbiAgICBuYW1lPVwibG9hbl9wcmVfcXVhbGlmaWNhdGlvblwiPlxuICA8ZG1uOmV4dGVuc2lvbkVsZW1lbnRzIC8+XG4gIDxkbW46aXRlbURlZmluaXRpb24gaWQ9XCJfRDQwQjAxMDYtNjJFOC00QUMwLUEzOUEtQzZDOTUwNjE5NEE5XCIgbmFtZT1cIlJlcXVlc3RlZF9Qcm9kdWN0XCIgaXNDb2xsZWN0aW9uPVwiZmFsc2VcIj5cbiAgICA8ZG1uOml0ZW1Db21wb25lbnQgaWQ9XCJfNjhiNGE5NmMtMTk4YS00NTc1LWIyOWEtYTJjOGIwNTM5YTJjXCIgbmFtZT1cIlR5cGVcIiBpc0NvbGxlY3Rpb249XCJmYWxzZVwiPlxuICAgICAgPGRtbjp0eXBlUmVmPlByb2R1Y3RfVHlwZTwvZG1uOnR5cGVSZWY+XG4gICAgPC9kbW46aXRlbUNvbXBvbmVudD5cbiAgICA8ZG1uOml0ZW1Db21wb25lbnQgaWQ9XCJfYWIxNjQ3YzItY2I2My00ODA4LThkOTAtMzZkNDE1OTFhNDBjXCIgbmFtZT1cIlJhdGVcIiBpc0NvbGxlY3Rpb249XCJmYWxzZVwiPlxuICAgICAgPGRtbjp0eXBlUmVmPm51bWJlcjwvZG1uOnR5cGVSZWY+XG4gICAgPC9kbW46aXRlbUNvbXBvbmVudD5cbiAgICA8ZG1uOml0ZW1Db21wb25lbnQgaWQ9XCJfMTUyOTE3YmItNjA5NS00MDU3LTg2MTMtNWIwOGI3N2RiMjM1XCIgbmFtZT1cIlRlcm1cIiBpc0NvbGxlY3Rpb249XCJmYWxzZVwiPlxuICAgICAgPGRtbjp0eXBlUmVmPm51bWJlcjwvZG1uOnR5cGVSZWY+XG4gICAgPC9kbW46aXRlbUNvbXBvbmVudD5cbiAgICA8ZG1uOml0ZW1Db21wb25lbnQgaWQ9XCJfZTJmMGU4Y2QtOGY1YS00M2Q0LWIyNjMtYWFhNWI5YWU0NDIwXCIgbmFtZT1cIkFtb3VudFwiIGlzQ29sbGVjdGlvbj1cImZhbHNlXCI+XG4gICAgICA8ZG1uOnR5cGVSZWY+bnVtYmVyPC9kbW46dHlwZVJlZj5cbiAgICA8L2RtbjppdGVtQ29tcG9uZW50PlxuICA8L2RtbjppdGVtRGVmaW5pdGlvbj5cbiAgPGRtbjppdGVtRGVmaW5pdGlvbiBpZD1cIl8yQjRFOTU5My0zMjM5LTRFMDQtQTIxMy0zNDVGMEFBMEFGOURcIiBuYW1lPVwiTWFyaXRhbF9TdGF0dXNcIiBpc0NvbGxlY3Rpb249XCJmYWxzZVwiPlxuICAgIDxkbW46dHlwZVJlZj5zdHJpbmc8L2Rtbjp0eXBlUmVmPlxuICAgIDxkbW46YWxsb3dlZFZhbHVlcyBpZD1cIl81QkQxM0Q5RC00MTJGLTRFNkItOTE0QS0zRDhBQUFDNkE3MDVcIj5cbiAgICAgIDxkbW46dGV4dD4mcXVvdDtNJnF1b3Q7LCZxdW90O0QmcXVvdDssJnF1b3Q7UyZxdW90OzwvZG1uOnRleHQ+XG4gICAgPC9kbW46YWxsb3dlZFZhbHVlcz5cbiAgPC9kbW46aXRlbURlZmluaXRpb24+XG4gIDxkbW46aXRlbURlZmluaXRpb24gaWQ9XCJfRjA5MENCQjctRjVDMy00QzU0LTk5MDUtNTE3REMxNDY5QjUyXCIgbmFtZT1cIkFwcGxpY2FudF9EYXRhXCIgaXNDb2xsZWN0aW9uPVwiZmFsc2VcIj5cbiAgICA8ZG1uOml0ZW1Db21wb25lbnQgaWQ9XCJfZjUyZTJiOWYtNTQ0Yy00OGFjLTkxZTAtMTY4YTZlMTNmYzhiXCIgbmFtZT1cIkFnZVwiIGlzQ29sbGVjdGlvbj1cImZhbHNlXCI+XG4gICAgICA8ZG1uOnR5cGVSZWY+bnVtYmVyPC9kbW46dHlwZVJlZj5cbiAgICA8L2RtbjppdGVtQ29tcG9uZW50PlxuICAgIDxkbW46aXRlbUNvbXBvbmVudCBpZD1cIl81YTIwZDRjMi0wZTY2LTRiYjktYjVlYS0zYjlmMmNkOGUwNTBcIiBuYW1lPVwiTWFyaXRhbCBTdGF0dXNcIiBpc0NvbGxlY3Rpb249XCJmYWxzZVwiPlxuICAgICAgPGRtbjp0eXBlUmVmPk1hcml0YWxfU3RhdHVzPC9kbW46dHlwZVJlZj5cbiAgICA8L2RtbjppdGVtQ29tcG9uZW50PlxuICAgIDxkbW46aXRlbUNvbXBvbmVudCBpZD1cIl83MDExMTdiOC0yZjhkLTRlOTQtYTVkYi1kNTAzZjBmYmEzYWZcIiBuYW1lPVwiRW1wbG95bWVudCBTdGF0dXNcIiBpc0NvbGxlY3Rpb249XCJmYWxzZVwiPlxuICAgICAgPGRtbjp0eXBlUmVmPnN0cmluZzwvZG1uOnR5cGVSZWY+XG4gICAgICA8ZG1uOmFsbG93ZWRWYWx1ZXMgaWQ9XCJfNEE4RTM2RkMtQTQwQy00Q0I1LTlBRTEtNzMwODJEQTI0RDEzXCI+XG4gICAgICAgIDxkbW46dGV4dD4mcXVvdDtVbmVtcGxveWVkJnF1b3Q7LCZxdW90O0VtcGxveWVkJnF1b3Q7LCZxdW90O1NlbGYtZW1wbG95ZWQmcXVvdDssJnF1b3Q7U3R1ZGVudCZxdW90OzwvZG1uOnRleHQ+XG4gICAgICA8L2RtbjphbGxvd2VkVmFsdWVzPlxuICAgIDwvZG1uOml0ZW1Db21wb25lbnQ+XG4gICAgPGRtbjppdGVtQ29tcG9uZW50IGlkPVwiXzE3YWQyYTI0LTQyNWYtNGRmNy05MmZjLTYwOWUxMDIxN2I4YlwiIG5hbWU9XCJFeGlzdGluZyBDdXN0b21lclwiIGlzQ29sbGVjdGlvbj1cImZhbHNlXCI+XG4gICAgICA8ZG1uOnR5cGVSZWY+Ym9vbGVhbjwvZG1uOnR5cGVSZWY+XG4gICAgPC9kbW46aXRlbUNvbXBvbmVudD5cbiAgICA8ZG1uOml0ZW1Db21wb25lbnQgaWQ9XCJfYmI5ZWY3MmUtMmUwZC00MTc1LWJhNTgtZDYxM2JkYTdlOWIzXCIgbmFtZT1cIk1vbnRobHlcIiBpc0NvbGxlY3Rpb249XCJmYWxzZVwiPlxuICAgICAgPGRtbjppdGVtQ29tcG9uZW50IGlkPVwiXzMyZDVlYTM5LTRiYmMtNGIxNi04OGNkLWY3ZTZlNDdhODg1ZVwiIG5hbWU9XCJJbmNvbWVcIiBpc0NvbGxlY3Rpb249XCJmYWxzZVwiPlxuICAgICAgICA8ZG1uOnR5cGVSZWY+bnVtYmVyPC9kbW46dHlwZVJlZj5cbiAgICAgIDwvZG1uOml0ZW1Db21wb25lbnQ+XG4gICAgICA8ZG1uOml0ZW1Db21wb25lbnQgaWQ9XCJfNzg1MDQ2OGItMTczZC00MTYyLTljN2EtOTQ0NTNhNGIwMmQ3XCIgbmFtZT1cIlJlcGF5bWVudHNcIiBpc0NvbGxlY3Rpb249XCJmYWxzZVwiPlxuICAgICAgICA8ZG1uOnR5cGVSZWY+bnVtYmVyPC9kbW46dHlwZVJlZj5cbiAgICAgIDwvZG1uOml0ZW1Db21wb25lbnQ+XG4gICAgICA8ZG1uOml0ZW1Db21wb25lbnQgaWQ9XCJfYWY1NzgxODItNWM3MS00YjcxLTkwMjctMGYwY2Y4Mzc3MGFiXCIgbmFtZT1cIkV4cGVuc2VzXCIgaXNDb2xsZWN0aW9uPVwiZmFsc2VcIj5cbiAgICAgICAgPGRtbjp0eXBlUmVmPm51bWJlcjwvZG1uOnR5cGVSZWY+XG4gICAgICA8L2RtbjppdGVtQ29tcG9uZW50PlxuICAgICAgPGRtbjppdGVtQ29tcG9uZW50IGlkPVwiXzRhNGQwMWJlLWZlOTctNDlhMi04YzRjLTNhNDlmZjI3OTY4ZFwiIG5hbWU9XCJUYXhcIiBpc0NvbGxlY3Rpb249XCJmYWxzZVwiPlxuICAgICAgICA8ZG1uOnR5cGVSZWY+bnVtYmVyPC9kbW46dHlwZVJlZj5cbiAgICAgIDwvZG1uOml0ZW1Db21wb25lbnQ+XG4gICAgICA8ZG1uOml0ZW1Db21wb25lbnQgaWQ9XCJfZjk1ZGJmNzAtZDI1Ni00ZDQwLWE2MWQtYzYzMzJkODY0ZThmXCIgbmFtZT1cIkluc3VyYW5jZVwiIGlzQ29sbGVjdGlvbj1cImZhbHNlXCI+XG4gICAgICAgIDxkbW46dHlwZVJlZj5udW1iZXI8L2Rtbjp0eXBlUmVmPlxuICAgICAgPC9kbW46aXRlbUNvbXBvbmVudD5cbiAgICA8L2RtbjppdGVtQ29tcG9uZW50PlxuICA8L2RtbjppdGVtRGVmaW5pdGlvbj5cbiAgPGRtbjppdGVtRGVmaW5pdGlvbiBpZD1cIl8xOTQ1QkQyRS1DODJDLTRFN0EtQTU5RS00ODRCNTZBM0FFNDZcIiBuYW1lPVwiUG9zdC1CdXJlYXVfUmlza19DYXRlZ29yeVwiIGlzQ29sbGVjdGlvbj1cImZhbHNlXCI+XG4gICAgPGRtbjppdGVtQ29tcG9uZW50IGlkPVwiXzE5ZWNjNjIyLWU3MmMtNDgyZC05ZGUzLTY1NzhhMWM3NmYxZVwiIG5hbWU9XCJSaXNrIENhdGVnb3J5XCIgaXNDb2xsZWN0aW9uPVwiZmFsc2VcIj5cbiAgICAgIDxkbW46dHlwZVJlZj5SaXNrX0NhdGVnb3J5PC9kbW46dHlwZVJlZj5cbiAgICA8L2RtbjppdGVtQ29tcG9uZW50PlxuICAgIDxkbW46aXRlbUNvbXBvbmVudCBpZD1cIl8yZmE3MjRkMS1iMjc2LTRhM2YtYTJlZi0yZTdkYjNkMzYyZjNcIiBuYW1lPVwiQ3JlZGl0IENvbnRpbmdlbmN5IEZhY3RvclwiIGlzQ29sbGVjdGlvbj1cImZhbHNlXCI+XG4gICAgICA8ZG1uOnR5cGVSZWY+bnVtYmVyPC9kbW46dHlwZVJlZj5cbiAgICA8L2RtbjppdGVtQ29tcG9uZW50PlxuICA8L2RtbjppdGVtRGVmaW5pdGlvbj5cbiAgPGRtbjppdGVtRGVmaW5pdGlvbiBpZD1cIl80ODE2NzA0Qi1BQjdGLTQ2MjQtODM2OC0wQkJCQUZDMDRGQjlcIiBuYW1lPVwiUHJlLUJ1cmVhdV9SaXNrX0NhdGVnb3J5XCIgaXNDb2xsZWN0aW9uPVwiZmFsc2VcIj5cbiAgICA8ZG1uOml0ZW1Db21wb25lbnQgaWQ9XCJfNzhiNDRlMTAtZTE2Ni00NGE0LTgzYTMtNWQxMmM5OTUyOWU4XCIgbmFtZT1cIlJpc2sgQ2F0ZWdvcnlcIiBpc0NvbGxlY3Rpb249XCJmYWxzZVwiPlxuICAgICAgPGRtbjp0eXBlUmVmPnN0cmluZzwvZG1uOnR5cGVSZWY+XG4gICAgPC9kbW46aXRlbUNvbXBvbmVudD5cbiAgICA8ZG1uOml0ZW1Db21wb25lbnQgaWQ9XCJfZmE0MWE0ODItYTg2YS00YjUyLWE3NTAtMzUxNzBjZDZiYmEzXCIgbmFtZT1cIkNyZWRpdCBDb250aW5nZW5jeSBGYWN0b3JcIiBpc0NvbGxlY3Rpb249XCJmYWxzZVwiPlxuICAgICAgPGRtbjp0eXBlUmVmPm51bWJlcjwvZG1uOnR5cGVSZWY+XG4gICAgPC9kbW46aXRlbUNvbXBvbmVudD5cbiAgPC9kbW46aXRlbURlZmluaXRpb24+XG4gIDxkbW46aXRlbURlZmluaXRpb24gaWQ9XCJfOUFFQUU1MEUtNjdCRi00NDI4LUE2Q0QtQjQ4RDI5OUZENzNDXCIgbmFtZT1cIkVsaWdpYmlsaXR5XCIgaXNDb2xsZWN0aW9uPVwiZmFsc2VcIj5cbiAgICA8ZG1uOnR5cGVSZWY+c3RyaW5nPC9kbW46dHlwZVJlZj5cbiAgICA8ZG1uOmFsbG93ZWRWYWx1ZXMgaWQ9XCJfNzlDN0Y0NUQtMjI4Ri00MzdCLUFGN0UtNjE1RkM3MkE1MzU0XCI+XG4gICAgICA8ZG1uOnRleHQ+JnF1b3Q7SW5lbGlnaWJsZSZxdW90OywmcXVvdDtFbGlnaWJsZSZxdW90OzwvZG1uOnRleHQ+XG4gICAgPC9kbW46YWxsb3dlZFZhbHVlcz5cbiAgPC9kbW46aXRlbURlZmluaXRpb24+XG4gIDxkbW46aXRlbURlZmluaXRpb24gaWQ9XCJfRkJGMjQ1RTctOUE5My00RDUyLTlGMDItQUY2ODkzMDExQTVGXCIgbmFtZT1cIlN0cmF0ZWd5XCIgaXNDb2xsZWN0aW9uPVwiZmFsc2VcIj5cbiAgICA8ZG1uOnR5cGVSZWY+c3RyaW5nPC9kbW46dHlwZVJlZj5cbiAgICA8ZG1uOmFsbG93ZWRWYWx1ZXMgaWQ9XCJfMEIwMDUzNTUtMTlEMC00NDdCLUIyREUtNkQxMjkwQzc1MDRDXCI+XG4gICAgICA8ZG1uOnRleHQ+JnF1b3Q7RGVjbGluZSZxdW90OywmcXVvdDtCdXJlYXUmcXVvdDssJnF1b3Q7VGhyb3VnaCZxdW90OzwvZG1uOnRleHQ+XG4gICAgPC9kbW46YWxsb3dlZFZhbHVlcz5cbiAgPC9kbW46aXRlbURlZmluaXRpb24+XG4gIDxkbW46aXRlbURlZmluaXRpb24gaWQ9XCJfNUQzNEU3MTMtRTk0RS00MDNFLUE2ODEtREQ2OTQ4QkU0Rjc5XCIgbmFtZT1cIkJ1cmVhdV9DYWxsX1R5cGVcIiBpc0NvbGxlY3Rpb249XCJmYWxzZVwiPlxuICAgIDxkbW46dHlwZVJlZj5zdHJpbmc8L2Rtbjp0eXBlUmVmPlxuICAgIDxkbW46YWxsb3dlZFZhbHVlcyBpZD1cIl85NDdEQkJBMS03MEEwLTQyREEtQkMzNy1GRDJGRDkzQkY2MUJcIj5cbiAgICAgIDxkbW46dGV4dD4mcXVvdDtGdWxsJnF1b3Q7LCZxdW90O01pbmkmcXVvdDssJnF1b3Q7Tm9uZSZxdW90OzwvZG1uOnRleHQ+XG4gICAgPC9kbW46YWxsb3dlZFZhbHVlcz5cbiAgPC9kbW46aXRlbURlZmluaXRpb24+XG4gIDxkbW46aXRlbURlZmluaXRpb24gaWQ9XCJfOUFGNThFRDYtQTUyNi00MzQ2LTg3ODAtMEQxRTYwMzhDQTZGXCIgbmFtZT1cIlByb2R1Y3RfVHlwZVwiIGlzQ29sbGVjdGlvbj1cImZhbHNlXCI+XG4gICAgPGRtbjp0eXBlUmVmPnN0cmluZzwvZG1uOnR5cGVSZWY+XG4gICAgPGRtbjphbGxvd2VkVmFsdWVzIGlkPVwiX0EyNTU0MTQwLTgwNjAtNEY2Ni1CQTE2LTNBOERGRTEyQzE3Q1wiPlxuICAgICAgPGRtbjp0ZXh0PiZxdW90O1N0YW5kYXJkIExvYW4mcXVvdDssJnF1b3Q7U3BlY2lhbCBMb2FuJnF1b3Q7PC9kbW46dGV4dD5cbiAgICA8L2RtbjphbGxvd2VkVmFsdWVzPlxuICA8L2RtbjppdGVtRGVmaW5pdGlvbj5cbiAgPGRtbjppdGVtRGVmaW5pdGlvbiBpZD1cIl80RDM2QTI1RS05QTM3LTQ3QUUtQjlCRi05NDMzOEFFNjc2MDlcIiBuYW1lPVwiUmlza19DYXRlZ29yeVwiIGlzQ29sbGVjdGlvbj1cImZhbHNlXCI+XG4gICAgPGRtbjp0eXBlUmVmPnN0cmluZzwvZG1uOnR5cGVSZWY+XG4gICAgPGRtbjphbGxvd2VkVmFsdWVzIGlkPVwiXzA0MTQyNkMyLUI5RDItNEMxOC05QUMzLTVBNTA4RDAwMDgzOVwiPlxuICAgICAgPGRtbjp0ZXh0PiZxdW90O0hpZ2gmcXVvdDssJnF1b3Q7TWVkaXVtJnF1b3Q7LCZxdW90O0xvdyZxdW90OywmcXVvdDtWZXJ5IExvdyZxdW90OywmcXVvdDtEZWNsaW5lJnF1b3Q7PC9kbW46dGV4dD5cbiAgICA8L2RtbjphbGxvd2VkVmFsdWVzPlxuICA8L2RtbjppdGVtRGVmaW5pdGlvbj5cbiAgPGRtbjppdGVtRGVmaW5pdGlvbiBpZD1cIl80NkM4NzBGQy0yQTk5LTQzQTAtOUQxQi0zRDNDNTUxNkZCMjNcIiBuYW1lPVwiQ3JlZGl0X1Njb3JlX1JhdGluZ1wiIGlzQ29sbGVjdGlvbj1cImZhbHNlXCI+XG4gICAgPGRtbjp0eXBlUmVmPnN0cmluZzwvZG1uOnR5cGVSZWY+XG4gICAgPGRtbjphbGxvd2VkVmFsdWVzIGlkPVwiXzg0NzBBRTY5LTI4MTQtNDkxMS05NTNELTNGQzYxQTY4MTA2M1wiPlxuICAgICAgPGRtbjp0ZXh0PiZxdW90O1Bvb3ImcXVvdDssJnF1b3Q7QmFkJnF1b3Q7LCZxdW90O0ZhaXImcXVvdDssJnF1b3Q7R29vZCZxdW90OywmcXVvdDtFeGNlbGxlbnQmcXVvdDs8L2Rtbjp0ZXh0PlxuICAgIDwvZG1uOmFsbG93ZWRWYWx1ZXM+XG4gIDwvZG1uOml0ZW1EZWZpbml0aW9uPlxuICA8ZG1uOml0ZW1EZWZpbml0aW9uIGlkPVwiXzc2NDFBNkZBLUJDRjMtNDVEMS1BMEI2LTcxQjA2MzRBQkIzRVwiIG5hbWU9XCJCYWNrX0VuZF9SYXRpb1wiIGlzQ29sbGVjdGlvbj1cImZhbHNlXCI+XG4gICAgPGRtbjp0eXBlUmVmPnN0cmluZzwvZG1uOnR5cGVSZWY+XG4gICAgPGRtbjphbGxvd2VkVmFsdWVzIGlkPVwiX0NBMUM2RjBFLTE4NkYtNDFERC04RDhELUQ0MDU3ODlCQTNGMVwiPlxuICAgICAgPGRtbjp0ZXh0PiZxdW90O0luc3VmZmljaWVudCZxdW90OywmcXVvdDtTdWZmaWNpZW50JnF1b3Q7PC9kbW46dGV4dD5cbiAgICA8L2RtbjphbGxvd2VkVmFsdWVzPlxuICA8L2RtbjppdGVtRGVmaW5pdGlvbj5cbiAgPGRtbjppdGVtRGVmaW5pdGlvbiBpZD1cIl9CNUUwMEEyRC0zQzk1LTRBOUMtQkNBNi1CREU4NTI5MzlGNkRcIiBuYW1lPVwiRnJvbnRfRW5kX1JhdGlvXCIgaXNDb2xsZWN0aW9uPVwiZmFsc2VcIj5cbiAgICA8ZG1uOnR5cGVSZWY+c3RyaW5nPC9kbW46dHlwZVJlZj5cbiAgICA8ZG1uOmFsbG93ZWRWYWx1ZXMgaWQ9XCJfQjg2NThDQTItRjQ3Mi00MzkwLThBQjAtMURENDkxMDBCMjBDXCI+XG4gICAgICA8ZG1uOnRleHQ+JnF1b3Q7U3VmZmljaWVudCZxdW90OywmcXVvdDtJbnN1ZmZpY2llbnQmcXVvdDs8L2Rtbjp0ZXh0PlxuICAgIDwvZG1uOmFsbG93ZWRWYWx1ZXM+XG4gIDwvZG1uOml0ZW1EZWZpbml0aW9uPlxuICA8ZG1uOml0ZW1EZWZpbml0aW9uIGlkPVwiX0I4QUNFMjEwLTJDNTUtNEM2Ni1CM0Q4LTQ4ODVFRTFDNTJBMFwiIG5hbWU9XCJRdWFsaWZpY2F0aW9uXCIgaXNDb2xsZWN0aW9uPVwiZmFsc2VcIj5cbiAgICA8ZG1uOnR5cGVSZWY+c3RyaW5nPC9kbW46dHlwZVJlZj5cbiAgICA8ZG1uOmFsbG93ZWRWYWx1ZXMgaWQ9XCJfMUY2NkI4QkYtNkFCNy00OTY1LThBNjktODk3RERDMUE4QjM0XCI+XG4gICAgICA8ZG1uOnRleHQ+JnF1b3Q7Tm90IFF1YWxpZmllZCZxdW90OywmcXVvdDtRdWFsaWZpZWQmcXVvdDs8L2Rtbjp0ZXh0PlxuICAgIDwvZG1uOmFsbG93ZWRWYWx1ZXM+XG4gIDwvZG1uOml0ZW1EZWZpbml0aW9uPlxuICA8ZG1uOml0ZW1EZWZpbml0aW9uIGlkPVwiXzJDQzJFOEQ3LTFCRTItNEU0QS04MDcyLTU1QTFFQzk0REI2RVwiIG5hbWU9XCJDcmVkaXRfU2NvcmVcIiBpc0NvbGxlY3Rpb249XCJmYWxzZVwiPlxuICAgIDxkbW46aXRlbUNvbXBvbmVudCBpZD1cIl9kNTNjZTkyMC04N2Y1LTRhNGYtYmFiYS04NWMyYTgzMGQ2MGZcIiBuYW1lPVwiRklDT1wiIGlzQ29sbGVjdGlvbj1cImZhbHNlXCI+XG4gICAgICA8ZG1uOnR5cGVSZWY+bnVtYmVyPC9kbW46dHlwZVJlZj5cbiAgICAgIDxkbW46YWxsb3dlZFZhbHVlcyBpZD1cIl9FMzBBQURCRC1EMDI4LTQ3NUQtQjhEOC1CNTY4N0Q0NTRCRURcIj5cbiAgICAgICAgPGRtbjp0ZXh0PlszMDAuLjg1MF08L2Rtbjp0ZXh0PlxuICAgICAgPC9kbW46YWxsb3dlZFZhbHVlcz5cbiAgICA8L2RtbjppdGVtQ29tcG9uZW50PlxuICA8L2RtbjppdGVtRGVmaW5pdGlvbj5cbiAgPGRtbjppdGVtRGVmaW5pdGlvbiBpZD1cIl8zQzM3QTZGMS1DMTEzLTQ5OTMtQkI1Ny1FODlCOTlDNzBCMDJcIiBuYW1lPVwiTG9hbl9RdWFsaWZpY2F0aW9uXCIgaXNDb2xsZWN0aW9uPVwiZmFsc2VcIj5cbiAgICA8ZG1uOml0ZW1Db21wb25lbnQgaWQ9XCJfZTExYzNhYzMtNzM3MC00Mzc4LTk2N2ItOTFlOWNiMjIxZmUxXCIgbmFtZT1cIlF1YWxpZmljYXRpb25cIiBpc0NvbGxlY3Rpb249XCJmYWxzZVwiPlxuICAgICAgPGRtbjp0eXBlUmVmPnN0cmluZzwvZG1uOnR5cGVSZWY+XG4gICAgICA8ZG1uOmFsbG93ZWRWYWx1ZXMgaWQ9XCJfQjBBRDA2NDEtMDAyMy00NjFELUIyMEUtNDFDQUUwMkY5QkU0XCI+XG4gICAgICAgIDxkbW46dGV4dD4mcXVvdDtRdWFsaWZpZWQmcXVvdDssJnF1b3Q7Tm90IFF1YWxpZmllZCZxdW90OzwvZG1uOnRleHQ+XG4gICAgICA8L2RtbjphbGxvd2VkVmFsdWVzPlxuICAgIDwvZG1uOml0ZW1Db21wb25lbnQ+XG4gICAgPGRtbjppdGVtQ29tcG9uZW50IGlkPVwiX2IzNTQxZjgyLTViYzktNGZhYi1iYTliLWM0MjNhOWEyY2Q2Y1wiIG5hbWU9XCJSZWFzb25cIiBpc0NvbGxlY3Rpb249XCJmYWxzZVwiPlxuICAgICAgPGRtbjp0eXBlUmVmPnN0cmluZzwvZG1uOnR5cGVSZWY+XG4gICAgPC9kbW46aXRlbUNvbXBvbmVudD5cbiAgPC9kbW46aXRlbURlZmluaXRpb24+XG4gIDxkbW46aW5wdXREYXRhIGlkPVwiXzRDODlFNTlDLUZEREEtNDM4Qy04RDFGLTBCMTE5NEVGNkRBRVwiIG5hbWU9XCJDcmVkaXQgU2NvcmVcIj5cbiAgICA8ZG1uOmV4dGVuc2lvbkVsZW1lbnRzIC8+XG4gICAgPGRtbjp2YXJpYWJsZSBpZD1cIl9BOTcwMTlGQy1FRTAxLTQ1MUYtQTdBQS01QTk3RUQwMDVGQjlcIiBuYW1lPVwiQ3JlZGl0IFNjb3JlXCIgdHlwZVJlZj1cIkNyZWRpdF9TY29yZVwiIC8+XG4gIDwvZG1uOmlucHV0RGF0YT5cbiAgPGRtbjpidXNpbmVzc0tub3dsZWRnZU1vZGVsIGlkPVwiXzRDNzg4REJELUM2NzItNEY0MS05QUZFLTlDN0QyQzE0NTczNFwiIG5hbWU9XCJMZW5kZXIgQWNjZXB0YWJsZSBEVElcIj5cbiAgICA8ZG1uOmV4dGVuc2lvbkVsZW1lbnRzIC8+XG4gICAgPGRtbjp2YXJpYWJsZSBpZD1cIl84NTUwODk0My03QUQyLTRBQTAtODBFNS0yMDkyM0NBMjMwOERcIiBuYW1lPVwiTGVuZGVyIEFjY2VwdGFibGUgRFRJXCIgdHlwZVJlZj1cIm51bWJlclwiIC8+XG4gICAgPGRtbjplbmNhcHN1bGF0ZWRMb2dpYyBpZD1cIl85RjAyNTdFRS1DRjgyLTQ5RkQtQUVERC0zMTU1ODkwODY0RkZcIiBraW5kPVwiRkVFTFwiPlxuICAgICAgPGRtbjpsaXRlcmFsRXhwcmVzc2lvbiBpZD1cIl8yMUU4RkEzOC1DOTQ3LTQ3MzMtOUU1Mi1DRjgxQTk3QURGOTFcIj5cbiAgICAgICAgPGRtbjp0ZXh0PjAuMzY8L2Rtbjp0ZXh0PlxuICAgICAgPC9kbW46bGl0ZXJhbEV4cHJlc3Npb24+XG4gICAgPC9kbW46ZW5jYXBzdWxhdGVkTG9naWM+XG4gIDwvZG1uOmJ1c2luZXNzS25vd2xlZGdlTW9kZWw+XG4gIDxkbW46ZGVjaXNpb24gaWQ9XCJfRjBEQzg5MjMtNUZDNy00MjAwLThCRDEtNDYxRDVGMzcxNEJFXCIgbmFtZT1cIkZyb250IEVuZCBSYXRpb1wiPlxuICAgIDxkbW46ZXh0ZW5zaW9uRWxlbWVudHMgLz5cbiAgICA8ZG1uOnZhcmlhYmxlIGlkPVwiX0EwQjBCMDMyLUY2M0YtNDkxRi1BNjVFLTcyRTY4QTg2QjhGRFwiIG5hbWU9XCJGcm9udCBFbmQgUmF0aW9cIiB0eXBlUmVmPVwiRnJvbnRfRW5kX1JhdGlvXCIgLz5cbiAgICA8ZG1uOmluZm9ybWF0aW9uUmVxdWlyZW1lbnQgaWQ9XCJfODlFRUFGOUYtNUE1RC00RjU5LTkxQjctRUE0MThBNzIyOUFGXCI+XG4gICAgICA8ZG1uOnJlcXVpcmVkSW5wdXQgaHJlZj1cIiNfMUNGNUNFRkEtQUY5Ny00NkY5LTlDRDUtOUE4QUVCQjIwQjRFXCIgLz5cbiAgICA8L2RtbjppbmZvcm1hdGlvblJlcXVpcmVtZW50PlxuICAgIDxkbW46aW5mb3JtYXRpb25SZXF1aXJlbWVudCBpZD1cIl84NzczMEM1QS01NjQ4LTQxNUItOTE4OS1FRjREODgwNUY4QzlcIj5cbiAgICAgIDxkbW46cmVxdWlyZWRJbnB1dCBocmVmPVwiI182RTMyMDVBRi03RTNELTRBQkUtQTM2Ny05NkYzRjZFODIxMEVcIiAvPlxuICAgIDwvZG1uOmluZm9ybWF0aW9uUmVxdWlyZW1lbnQ+XG4gICAgPGRtbjprbm93bGVkZ2VSZXF1aXJlbWVudCBpZD1cIl82M0RFN0MzQi1BNzY3LTRCOEEtQTA5OC05MUVDQjRCOEQzMzBcIj5cbiAgICAgIDxkbW46cmVxdWlyZWRLbm93bGVkZ2UgaHJlZj1cIiNfRkFGOTA4MEUtRjRFRi00OUY3LUFFRkQtMEQyOTkwRDhGRkRBXCIgLz5cbiAgICA8L2Rtbjprbm93bGVkZ2VSZXF1aXJlbWVudD5cbiAgICA8ZG1uOmtub3dsZWRnZVJlcXVpcmVtZW50IGlkPVwiXzJDOTU4MjlELUZDRjktNDRGNS04RjVBLTBBNkNEQjYwNjAwRFwiPlxuICAgICAgPGRtbjpyZXF1aXJlZEtub3dsZWRnZSBocmVmPVwiI19DOThCRTkzOS1COUM3LTQzRTAtODNFOC1FRTdBMTZDNTI3NkRcIiAvPlxuICAgIDwvZG1uOmtub3dsZWRnZVJlcXVpcmVtZW50PlxuICAgIDxkbW46Y29udGV4dCBpZD1cIl8wOEE5QzMzRC03MTlGLTRCMDUtQUM0Mi1EMTU0NjQ3OThCQzRcIiBsYWJlbD1cIkZyb250IEVuZCBSYXRpb1wiIHR5cGVSZWY9XCJGcm9udF9FbmRfUmF0aW9cIj5cbiAgICAgIDxkbW46Y29udGV4dEVudHJ5IGlkPVwiX0M4Rjk4RDBGLTIxOEYtNEI2MC1CRDk5LTdGRDk4MDc4RkU1NlwiPlxuICAgICAgICA8ZG1uOmludm9jYXRpb24gaWQ9XCJfRUI2NTg1ODYtQzNDOC00ODhFLTgxMTgtRTY5RTMxNTgzMTA2XCIgdHlwZVJlZj1cIiZsdDtVbmRlZmluZWQmZ3Q7XCI+XG4gICAgICAgICAgPGRtbjpsaXRlcmFsRXhwcmVzc2lvbiBpZD1cIl82RTc5RTREOS1CQkZCLTRFOTAtOEFBMy1BNkMxNTNDM0M5NDZcIj5cbiAgICAgICAgICAgIDxkbW46dGV4dD5QSVRJPC9kbW46dGV4dD5cbiAgICAgICAgICA8L2RtbjpsaXRlcmFsRXhwcmVzc2lvbj5cbiAgICAgICAgICA8ZG1uOmJpbmRpbmcgaWQ9XCJfNEI5M0U4QzgtQTA5Mi00RUFDLUIyM0EtQ0MxMzgyMjVBQ0MzXCI+XG4gICAgICAgICAgICA8ZG1uOmxpdGVyYWxFeHByZXNzaW9uIGlkPVwiXzUxQUNFQzNDLTQyMDctNEY1Ri04RkRELTlFREFBMzI3MEU2MFwiIHR5cGVSZWY9XCImbHQ7VW5kZWZpbmVkJmd0O1wiPlxuICAgICAgICAgICAgICA8ZG1uOnRleHQ+KFJlcXVlc3RlZCBQcm9kdWN0LkFtb3VudCooKFJlcXVlc3RlZCBQcm9kdWN0LlJhdGUvMTAwKS8xMikpLygxLSgxLygxKyhSZXF1ZXN0ZWQgUHJvZHVjdC5SYXRlLzEwMCkvMTIpKiotUmVxdWVzdGVkIFByb2R1Y3QuVGVybSkpPC9kbW46dGV4dD5cbiAgICAgICAgICAgIDwvZG1uOmxpdGVyYWxFeHByZXNzaW9uPlxuICAgICAgICAgICAgPGRtbjpwYXJhbWV0ZXIgbmFtZT1cInBtdFwiIHR5cGVSZWY9XCImbHQ7VW5kZWZpbmVkJmd0O1wiIC8+XG4gICAgICAgICAgPC9kbW46YmluZGluZz5cbiAgICAgICAgICA8ZG1uOmJpbmRpbmcgaWQ9XCJfQjlEMEZCNDQtNjA1QS00MkRCLTgxRjctNERGNEM0Q0MxQ0REXCI+XG4gICAgICAgICAgICA8ZG1uOmxpdGVyYWxFeHByZXNzaW9uIGlkPVwiXzVEMDUwQjhELURGNTUtNDVGRC05ODhCLTlDNTZCRUQ1M0Q1QlwiIHR5cGVSZWY9XCImbHQ7VW5kZWZpbmVkJmd0O1wiPlxuICAgICAgICAgICAgICA8ZG1uOnRleHQ+QXBwbGljYW50IERhdGEuTW9udGhseS5UYXg8L2Rtbjp0ZXh0PlxuICAgICAgICAgICAgPC9kbW46bGl0ZXJhbEV4cHJlc3Npb24+XG4gICAgICAgICAgICA8ZG1uOnBhcmFtZXRlciBuYW1lPVwidGF4XCIgdHlwZVJlZj1cIiZsdDtVbmRlZmluZWQmZ3Q7XCIgLz5cbiAgICAgICAgICA8L2RtbjpiaW5kaW5nPlxuICAgICAgICAgIDxkbW46YmluZGluZyBpZD1cIl82NzM3Mjg4NC0wNDA3LTQ4MTItOTg2Ri0zQTJDQzRDM0E3QjFcIj5cbiAgICAgICAgICAgIDxkbW46bGl0ZXJhbEV4cHJlc3Npb24gaWQ9XCJfMTRDNDRBNjktNTZEQi00QjY4LUI3NTctNDIyNUM4MEU0RDg4XCIgdHlwZVJlZj1cIiZsdDtVbmRlZmluZWQmZ3Q7XCI+XG4gICAgICAgICAgICAgIDxkbW46dGV4dD5BcHBsaWNhbnQgRGF0YS5Nb250aGx5Lkluc3VyYW5jZTwvZG1uOnRleHQ+XG4gICAgICAgICAgICA8L2RtbjpsaXRlcmFsRXhwcmVzc2lvbj5cbiAgICAgICAgICAgIDxkbW46cGFyYW1ldGVyIG5hbWU9XCJpbnN1cmFuY2VcIiB0eXBlUmVmPVwiJmx0O1VuZGVmaW5lZCZndDtcIiAvPlxuICAgICAgICAgIDwvZG1uOmJpbmRpbmc+XG4gICAgICAgICAgPGRtbjpiaW5kaW5nIGlkPVwiX0VERTAxMDdDLTk3MzYtNEJCNi05NTAwLTE3M0ZGQUZGMDBEQlwiPlxuICAgICAgICAgICAgPGRtbjpsaXRlcmFsRXhwcmVzc2lvbiBpZD1cIl8wREI1REUwNS1BMkFELTQwMTMtQjE5MS1EQzFEMTYzN0ExMzJcIiB0eXBlUmVmPVwiJmx0O1VuZGVmaW5lZCZndDtcIj5cbiAgICAgICAgICAgICAgPGRtbjp0ZXh0PkFwcGxpY2FudCBEYXRhLk1vbnRobHkuSW5jb21lPC9kbW46dGV4dD5cbiAgICAgICAgICAgIDwvZG1uOmxpdGVyYWxFeHByZXNzaW9uPlxuICAgICAgICAgICAgPGRtbjpwYXJhbWV0ZXIgbmFtZT1cImluY29tZVwiIHR5cGVSZWY9XCImbHQ7VW5kZWZpbmVkJmd0O1wiIC8+XG4gICAgICAgICAgPC9kbW46YmluZGluZz5cbiAgICAgICAgPC9kbW46aW52b2NhdGlvbj5cbiAgICAgICAgPGRtbjp2YXJpYWJsZSBuYW1lPVwiQ2xpZW50IFBJVElcIiB0eXBlUmVmPVwibnVtYmVyXCIgLz5cbiAgICAgIDwvZG1uOmNvbnRleHRFbnRyeT5cbiAgICAgIDxkbW46Y29udGV4dEVudHJ5IGlkPVwiXzNGOTVFRkQwLTk0RDctNEQxQS05RUE5LUM4RTEyOTgyRDdFOFwiPlxuICAgICAgICA8ZG1uOmxpdGVyYWxFeHByZXNzaW9uIGlkPVwiXzNGOTVFRkQwLTk0RDctNEQxQS05RUE5LUM4RTEyOTgyRDdFOFwiIHR5cGVSZWY9XCImbHQ7VW5kZWZpbmVkJmd0O1wiPlxuICAgICAgICAgIDxkbW46dGV4dD5pZiBDbGllbnQgUElUSSAmbHQ7PSBMZW5kZXIgQWNjZXB0YWJsZSBQSVRJKClcbnRoZW4gJnF1b3Q7U3VmZmljaWVudCZxdW90O1xuZWxzZSAmcXVvdDtJbnN1ZmZpY2llbnQmcXVvdDs8L2Rtbjp0ZXh0PlxuICAgICAgICA8L2RtbjpsaXRlcmFsRXhwcmVzc2lvbj5cbiAgICAgIDwvZG1uOmNvbnRleHRFbnRyeT5cbiAgICA8L2Rtbjpjb250ZXh0PlxuICA8L2RtbjpkZWNpc2lvbj5cbiAgPGRtbjpidXNpbmVzc0tub3dsZWRnZU1vZGVsIGlkPVwiX0ZBRjkwODBFLUY0RUYtNDlGNy1BRUZELTBEMjk5MEQ4RkZEQVwiIG5hbWU9XCJQSVRJXCI+XG4gICAgPGRtbjpleHRlbnNpb25FbGVtZW50cyAvPlxuICAgIDxkbW46dmFyaWFibGUgaWQ9XCJfOTk0RjQ5MEUtMTBBQy00NzA0LUJGREEtMTRBM0I5OEE5ODFFXCIgbmFtZT1cIlBJVElcIiB0eXBlUmVmPVwibnVtYmVyXCIgLz5cbiAgICA8ZG1uOmVuY2Fwc3VsYXRlZExvZ2ljIGlkPVwiX0QzM0Q5QUVBLTQ5REYtNDg5Ri05OEVDLTRCNDJGRjhDMjAyN1wiIGxhYmVsPVwiUElUSVwiIGtpbmQ9XCJGRUVMXCIgdHlwZVJlZj1cIm51bWJlclwiPlxuICAgICAgPGRtbjpmb3JtYWxQYXJhbWV0ZXIgaWQ9XCJfNjY0MjgwQzEtRDVFMC00N0JFLTgyRUYtMEE2NTc5OTc1QTYyXCIgbmFtZT1cInBtdFwiIHR5cGVSZWY9XCJudW1iZXJcIiAvPlxuICAgICAgPGRtbjpmb3JtYWxQYXJhbWV0ZXIgaWQ9XCJfM0U3REYwQjMtQzQ4Qi00ODFELUIwOTItRkM4MkVDMkY2RTM3XCIgbmFtZT1cInRheFwiIHR5cGVSZWY9XCJudW1iZXJcIiAvPlxuICAgICAgPGRtbjpmb3JtYWxQYXJhbWV0ZXIgaWQ9XCJfREY2OTFGODYtQUQxMi00NkJBLUIxNDktQUM4NzU4MzZBMTE2XCIgbmFtZT1cImluc3VyYW5jZVwiIHR5cGVSZWY9XCJudW1iZXJcIiAvPlxuICAgICAgPGRtbjpmb3JtYWxQYXJhbWV0ZXIgaWQ9XCJfOUUyRTI1N0YtOTBFQi00RkM0LThERDktMDg5Nzg0RTc1NzlFXCIgbmFtZT1cImluY29tZVwiIHR5cGVSZWY9XCJudW1iZXJcIiAvPlxuICAgICAgPGRtbjpsaXRlcmFsRXhwcmVzc2lvbiBpZD1cIl9BMzJFRDRBNS03Qjg5LTQwRjctQkUyNS1DREI2MzZGRTA3MUNcIiB0eXBlUmVmPVwiJmx0O1VuZGVmaW5lZCZndDtcIj5cbiAgICAgICAgPGRtbjp0ZXh0PihwbXQgKyB0YXggKyBpbnN1cmFuY2UpIC8gaW5jb21lPC9kbW46dGV4dD5cbiAgICAgIDwvZG1uOmxpdGVyYWxFeHByZXNzaW9uPlxuICAgIDwvZG1uOmVuY2Fwc3VsYXRlZExvZ2ljPlxuICA8L2RtbjpidXNpbmVzc0tub3dsZWRnZU1vZGVsPlxuICA8ZG1uOmlucHV0RGF0YSBpZD1cIl8xQ0Y1Q0VGQS1BRjk3LTQ2RjktOUNENS05QThBRUJCMjBCNEVcIiBuYW1lPVwiQXBwbGljYW50IERhdGFcIj5cbiAgICA8ZG1uOmV4dGVuc2lvbkVsZW1lbnRzIC8+XG4gICAgPGRtbjp2YXJpYWJsZSBpZD1cIl8yQkJGMjhEMi1ERjA5LTQyMDEtOEQ3QS01ODIwRTI2MDU5MkJcIiBuYW1lPVwiQXBwbGljYW50IERhdGFcIiB0eXBlUmVmPVwiQXBwbGljYW50X0RhdGFcIiAvPlxuICA8L2RtbjppbnB1dERhdGE+XG4gIDxkbW46ZGVjaXNpb24gaWQ9XCJfRDZGNDIzNEYtMTVCMy00RjVCLUI4MTQtNUY2RkYyOUQyOTA3XCIgbmFtZT1cIkJhY2sgRW5kIFJhdGlvXCI+XG4gICAgPGRtbjpleHRlbnNpb25FbGVtZW50cyAvPlxuICAgIDxkbW46dmFyaWFibGUgaWQ9XCJfNUFGNTcxRjctQUQ0MS00M0RDLUFCRkQtMjY2NzI1ODUwNDJGXCIgbmFtZT1cIkJhY2sgRW5kIFJhdGlvXCIgdHlwZVJlZj1cIkJhY2tfRW5kX1JhdGlvXCIgLz5cbiAgICA8ZG1uOmluZm9ybWF0aW9uUmVxdWlyZW1lbnQgaWQ9XCJfNzdCQTQwOUItRTAwRC00RkJDLUI1MjItOEY2NTZENEY2RjBFXCI+XG4gICAgICA8ZG1uOnJlcXVpcmVkSW5wdXQgaHJlZj1cIiNfMUNGNUNFRkEtQUY5Ny00NkY5LTlDRDUtOUE4QUVCQjIwQjRFXCIgLz5cbiAgICA8L2RtbjppbmZvcm1hdGlvblJlcXVpcmVtZW50PlxuICAgIDxkbW46a25vd2xlZGdlUmVxdWlyZW1lbnQgaWQ9XCJfNEQ0NDFDMTEtNzA0Mi00OUNGLUE0MkMtMTdBNDM0OEE3RjI5XCI+XG4gICAgICA8ZG1uOnJlcXVpcmVkS25vd2xlZGdlIGhyZWY9XCIjXzRDNzg4REJELUM2NzItNEY0MS05QUZFLTlDN0QyQzE0NTczNFwiIC8+XG4gICAgPC9kbW46a25vd2xlZGdlUmVxdWlyZW1lbnQ+XG4gICAgPGRtbjprbm93bGVkZ2VSZXF1aXJlbWVudCBpZD1cIl8zMjE3RDY1NS00NDg0LTQ3MzMtQTlBRS00RjlDRjMwRDk5MjRcIj5cbiAgICAgIDxkbW46cmVxdWlyZWRLbm93bGVkZ2UgaHJlZj1cIiNfREE1Q0NGNjItOTBBOC00Q0ZDLUExMzctOThCNTI4NTIyNTg4XCIgLz5cbiAgICA8L2Rtbjprbm93bGVkZ2VSZXF1aXJlbWVudD5cbiAgICA8ZG1uOmNvbnRleHQgaWQ9XCJfNUY5RkVBNEUtQjNGQy00QkMyLTkxM0UtMzZCODA3MUZBNzc3XCIgbGFiZWw9XCJCYWNrIEVuZCBSYXRpb1wiIHR5cGVSZWY9XCJCYWNrX0VuZF9SYXRpb1wiPlxuICAgICAgPGRtbjpjb250ZXh0RW50cnkgaWQ9XCJfRjNFRDkwNTktNDAwRi00QkU4LUIyNTAtQzJBQkNEOUZGMDIyXCI+XG4gICAgICAgIDxkbW46aW52b2NhdGlvbiBpZD1cIl80QTdGQzhFMC0yNUVGLTREQUYtODQ1QS05M0JEODlDMkJDOENcIiB0eXBlUmVmPVwiJmx0O1VuZGVmaW5lZCZndDtcIj5cbiAgICAgICAgICA8ZG1uOmxpdGVyYWxFeHByZXNzaW9uIGlkPVwiX0YwRTgwOTAwLTE5NjQtNDE0Mi05QTA1LTczRTdBMkUwRjJDRFwiPlxuICAgICAgICAgICAgPGRtbjp0ZXh0PkRUSTwvZG1uOnRleHQ+XG4gICAgICAgICAgPC9kbW46bGl0ZXJhbEV4cHJlc3Npb24+XG4gICAgICAgICAgPGRtbjpiaW5kaW5nPlxuICAgICAgICAgICAgPGRtbjpsaXRlcmFsRXhwcmVzc2lvbiBpZD1cIl8zRDBBMTk3OS1FNTlBLTQ4M0YtQkRBOC0xMzhGOTlCQTVBQjNcIiB0eXBlUmVmPVwiJmx0O1VuZGVmaW5lZCZndDtcIj5cbiAgICAgICAgICAgICAgPGRtbjp0ZXh0PkFwcGxpY2FudCBEYXRhLk1vbnRobHkuUmVwYXltZW50cyArIEFwcGxpY2FudCBEYXRhLk1vbnRobHkuRXhwZW5zZXM8L2Rtbjp0ZXh0PlxuICAgICAgICAgICAgPC9kbW46bGl0ZXJhbEV4cHJlc3Npb24+XG4gICAgICAgICAgICA8ZG1uOnBhcmFtZXRlciBuYW1lPVwiZFwiIHR5cGVSZWY9XCImbHQ7VW5kZWZpbmVkJmd0O1wiIC8+XG4gICAgICAgICAgPC9kbW46YmluZGluZz5cbiAgICAgICAgICA8ZG1uOmJpbmRpbmc+XG4gICAgICAgICAgICA8ZG1uOmxpdGVyYWxFeHByZXNzaW9uIGlkPVwiX0Q5ODVGODg2LTcxQzAtNEY2NS04ODA4LTJDRUYzNjZCRUNDOFwiIHR5cGVSZWY9XCImbHQ7VW5kZWZpbmVkJmd0O1wiPlxuICAgICAgICAgICAgICA8ZG1uOnRleHQ+QXBwbGljYW50IERhdGEuTW9udGhseS5JbmNvbWU8L2Rtbjp0ZXh0PlxuICAgICAgICAgICAgPC9kbW46bGl0ZXJhbEV4cHJlc3Npb24+XG4gICAgICAgICAgICA8ZG1uOnBhcmFtZXRlciBuYW1lPVwiaVwiIHR5cGVSZWY9XCImbHQ7VW5kZWZpbmVkJmd0O1wiIC8+XG4gICAgICAgICAgPC9kbW46YmluZGluZz5cbiAgICAgICAgPC9kbW46aW52b2NhdGlvbj5cbiAgICAgICAgPGRtbjp2YXJpYWJsZSBuYW1lPVwiQ2xpZW50IERUSVwiIHR5cGVSZWY9XCJudW1iZXJcIiAvPlxuICAgICAgPC9kbW46Y29udGV4dEVudHJ5PlxuICAgICAgPGRtbjpjb250ZXh0RW50cnkgaWQ9XCJfRDFGOTYxMDItNDE1OC00NUJCLThDOUEtQjdBM0JFMkMwMjA2XCI+XG4gICAgICAgIDxkbW46bGl0ZXJhbEV4cHJlc3Npb24gaWQ9XCJfRDFGOTYxMDItNDE1OC00NUJCLThDOUEtQjdBM0JFMkMwMjA2XCIgdHlwZVJlZj1cIiZsdDtVbmRlZmluZWQmZ3Q7XCI+XG4gICAgICAgICAgPGRtbjp0ZXh0PmlmIENsaWVudCBEVEkgJmx0Oz0gTGVuZGVyIEFjY2VwdGFibGUgRFRJKClcbnRoZW4gJnF1b3Q7U3VmZmljaWVudCZxdW90O1xuZWxzZSAmcXVvdDtJbnN1ZmZpY2llbnQmcXVvdDs8L2Rtbjp0ZXh0PlxuICAgICAgICA8L2RtbjpsaXRlcmFsRXhwcmVzc2lvbj5cbiAgICAgIDwvZG1uOmNvbnRleHRFbnRyeT5cbiAgICA8L2Rtbjpjb250ZXh0PlxuICA8L2RtbjpkZWNpc2lvbj5cbiAgPGRtbjpkZWNpc2lvbiBpZD1cIl8yRkU1MURCMS0zMDgzLTRCRjctQUE3MS0wQjAwNjUzMTBFNzJcIiBuYW1lPVwiQ3JlZGl0IFNjb3JlIFJhdGluZ1wiPlxuICAgIDxkbW46ZXh0ZW5zaW9uRWxlbWVudHMgLz5cbiAgICA8ZG1uOnZhcmlhYmxlIGlkPVwiXzgyMjI4RTQxLTIyRDEtNDc1OC05N0MzLUJCRkU5MEVEQjVGQlwiIG5hbWU9XCJDcmVkaXQgU2NvcmUgUmF0aW5nXCIgdHlwZVJlZj1cIkNyZWRpdF9TY29yZV9SYXRpbmdcIiAvPlxuICAgIDxkbW46aW5mb3JtYXRpb25SZXF1aXJlbWVudCBpZD1cIl8zMUExQjZCMi1BMkE2LTRFMDMtQjg5OC0yNjU3M0E1Q0YzQkFcIj5cbiAgICAgIDxkbW46cmVxdWlyZWRJbnB1dCBocmVmPVwiI180Qzg5RTU5Qy1GRERBLTQzOEMtOEQxRi0wQjExOTRFRjZEQUVcIiAvPlxuICAgIDwvZG1uOmluZm9ybWF0aW9uUmVxdWlyZW1lbnQ+XG4gICAgPGRtbjpkZWNpc2lvblRhYmxlIGlkPVwiXzRBQ0VGRkYwLUFEMkMtNERCOC05QkFELTdCQ0NGQjAzRjI5NVwiIGxhYmVsPVwiQ3JlZGl0IFNjb3JlIFJhdGluZ1wiIHR5cGVSZWY9XCJDcmVkaXRfU2NvcmVfUmF0aW5nXCIgaGl0UG9saWN5PVwiVU5JUVVFXCI+XG4gICAgICA8ZG1uOmlucHV0IGlkPVwiXzQ0QzkzNjI3LTYyOUMtNDhCOC1CNzFBLUFFMjI2NkE0MjY3NFwiPlxuICAgICAgICA8ZG1uOmlucHV0RXhwcmVzc2lvbiBpZD1cIl8wMDkzMkEwMC01RUNFLTRBRUYtQUE2OC05MkU2NzlDRUY0QUJcIiB0eXBlUmVmPVwibnVtYmVyXCI+XG4gICAgICAgICAgPGRtbjp0ZXh0PkNyZWRpdCBTY29yZS5GSUNPPC9kbW46dGV4dD5cbiAgICAgICAgPC9kbW46aW5wdXRFeHByZXNzaW9uPlxuICAgICAgPC9kbW46aW5wdXQ+XG4gICAgICA8ZG1uOm91dHB1dCBpZD1cIl85QzIwMUZBQi1CNDlDLTREMjItOTAwQi1CNEU4MkQ1NDY5RkJcIiBuYW1lPVwiXCIgdHlwZVJlZj1cIiZsdDtVbmRlZmluZWQmZ3Q7XCIgLz5cbiAgICAgIDxkbW46YW5ub3RhdGlvbiBuYW1lPVwiQW5ub3RhdGlvbnNcIiAvPlxuICAgICAgPGRtbjpydWxlIGlkPVwiX0FFRDcwM0UxLThFNTYtNEQyNy1BNTExLTM4NzVBRDFEMTIyRVwiPlxuICAgICAgICA8ZG1uOmlucHV0RW50cnkgaWQ9XCJfRTJDOUYzMEItRDUyOS00OEQ4LUE1MUMtQTJBQ0NDODEwOUIzXCI+XG4gICAgICAgICAgPGRtbjp0ZXh0PiZndDs9IDc1MDwvZG1uOnRleHQ+XG4gICAgICAgIDwvZG1uOmlucHV0RW50cnk+XG4gICAgICAgIDxkbW46b3V0cHV0RW50cnkgaWQ9XCJfQTFGRjJCMkQtRUYzNC00MkFELUE0NUEtNUZGREZBMjFGQTZEXCI+XG4gICAgICAgICAgPGRtbjp0ZXh0PiZxdW90O0V4Y2VsbGVudCZxdW90OzwvZG1uOnRleHQ+XG4gICAgICAgIDwvZG1uOm91dHB1dEVudHJ5PlxuICAgICAgICA8ZG1uOmFubm90YXRpb25FbnRyeT5cbiAgICAgICAgICA8ZG1uOnRleHQ+PC9kbW46dGV4dD5cbiAgICAgICAgPC9kbW46YW5ub3RhdGlvbkVudHJ5PlxuICAgICAgPC9kbW46cnVsZT5cbiAgICAgIDxkbW46cnVsZSBpZD1cIl8xRkExMkI5Ri0yODhDLTQyRTgtQjc3Ri1CRTJEMzcwMkI3QjZcIj5cbiAgICAgICAgPGRtbjppbnB1dEVudHJ5IGlkPVwiX0NBNUFFMDY3LTBFMUEtNDRDQS1CODVDLTkxMkY5RUQ0NTk0Q1wiPlxuICAgICAgICAgIDxkbW46dGV4dD5bNzAwLi43NTApPC9kbW46dGV4dD5cbiAgICAgICAgPC9kbW46aW5wdXRFbnRyeT5cbiAgICAgICAgPGRtbjpvdXRwdXRFbnRyeSBpZD1cIl84MzMzMDdBMi1COTI0LTQyMkMtQTRGNS1CRkZBQjI3RDg2RDVcIj5cbiAgICAgICAgICA8ZG1uOnRleHQ+JnF1b3Q7R29vZCZxdW90OzwvZG1uOnRleHQ+XG4gICAgICAgIDwvZG1uOm91dHB1dEVudHJ5PlxuICAgICAgICA8ZG1uOmFubm90YXRpb25FbnRyeT5cbiAgICAgICAgICA8ZG1uOnRleHQ+PC9kbW46dGV4dD5cbiAgICAgICAgPC9kbW46YW5ub3RhdGlvbkVudHJ5PlxuICAgICAgPC9kbW46cnVsZT5cbiAgICAgIDxkbW46cnVsZSBpZD1cIl8xMTk3NkVCQS02MEJDLTQyMUItQTI3MC0wODlBNDVFOUIxNjdcIj5cbiAgICAgICAgPGRtbjppbnB1dEVudHJ5IGlkPVwiXzc1RDYxMkQ1LUQyMDEtNDkzMi04NTI0LUU0OTE4M0Y1MUQyRFwiPlxuICAgICAgICAgIDxkbW46dGV4dD5bNjUwLi43MDApPC9kbW46dGV4dD5cbiAgICAgICAgPC9kbW46aW5wdXRFbnRyeT5cbiAgICAgICAgPGRtbjpvdXRwdXRFbnRyeSBpZD1cIl9FMThGRTJCMi03MjlDLTQxRjAtQjVDQy0wRTVFNUVBNDMxRTNcIj5cbiAgICAgICAgICA8ZG1uOnRleHQ+JnF1b3Q7RmFpciZxdW90OzwvZG1uOnRleHQ+XG4gICAgICAgIDwvZG1uOm91dHB1dEVudHJ5PlxuICAgICAgICA8ZG1uOmFubm90YXRpb25FbnRyeT5cbiAgICAgICAgICA8ZG1uOnRleHQ+PC9kbW46dGV4dD5cbiAgICAgICAgPC9kbW46YW5ub3RhdGlvbkVudHJ5PlxuICAgICAgPC9kbW46cnVsZT5cbiAgICAgIDxkbW46cnVsZSBpZD1cIl8xMkY4MDc3Ri1FNjAxLTQ4ODItOTNFMS0zMTUwOEIxNDAyRTFcIj5cbiAgICAgICAgPGRtbjppbnB1dEVudHJ5IGlkPVwiXzYxMzc0RTdELTRFRjMtNDYwMy05N0ExLTlEMUZBQkFBQTNDOFwiPlxuICAgICAgICAgIDxkbW46dGV4dD5bNjAwLi42NTApPC9kbW46dGV4dD5cbiAgICAgICAgPC9kbW46aW5wdXRFbnRyeT5cbiAgICAgICAgPGRtbjpvdXRwdXRFbnRyeSBpZD1cIl83NTEzNUY0Qy02QkE3LTQxODAtQjcyNi1BMEQ3OTVCM0Q3RkZcIj5cbiAgICAgICAgICA8ZG1uOnRleHQ+JnF1b3Q7UG9vciZxdW90OzwvZG1uOnRleHQ+XG4gICAgICAgIDwvZG1uOm91dHB1dEVudHJ5PlxuICAgICAgICA8ZG1uOmFubm90YXRpb25FbnRyeT5cbiAgICAgICAgICA8ZG1uOnRleHQ+PC9kbW46dGV4dD5cbiAgICAgICAgPC9kbW46YW5ub3RhdGlvbkVudHJ5PlxuICAgICAgPC9kbW46cnVsZT5cbiAgICAgIDxkbW46cnVsZSBpZD1cIl9EMDI1MjU0Qy05Mzc2LTQ0MjUtODA4NC00NTFFMDkyNDNDRTJcIj5cbiAgICAgICAgPGRtbjppbnB1dEVudHJ5IGlkPVwiXzZDMTNCNTA3LUZCNjAtNDBBRC04RjVDLTI0MDdGMTQxM0E1Q1wiPlxuICAgICAgICAgIDxkbW46dGV4dD4mbHQ7IDYwMDwvZG1uOnRleHQ+XG4gICAgICAgIDwvZG1uOmlucHV0RW50cnk+XG4gICAgICAgIDxkbW46b3V0cHV0RW50cnkgaWQ9XCJfMUZCNzMwOEEtRTM3Qi00NkVBLTgwNzAtQzY3RTIzODhBODY5XCI+XG4gICAgICAgICAgPGRtbjp0ZXh0PiZxdW90O0JhZCZxdW90OzwvZG1uOnRleHQ+XG4gICAgICAgIDwvZG1uOm91dHB1dEVudHJ5PlxuICAgICAgICA8ZG1uOmFubm90YXRpb25FbnRyeT5cbiAgICAgICAgICA8ZG1uOnRleHQ+PC9kbW46dGV4dD5cbiAgICAgICAgPC9kbW46YW5ub3RhdGlvbkVudHJ5PlxuICAgICAgPC9kbW46cnVsZT5cbiAgICA8L2RtbjpkZWNpc2lvblRhYmxlPlxuICA8L2RtbjpkZWNpc2lvbj5cbiAgPGRtbjpkZWNpc2lvbiBpZD1cIl8yMUM1MDc2My1FNDlGLTREODMtQTgyNC0xNkRBNkFBODdDNjRcIiBuYW1lPVwiTG9hbiBQcmUtUXVhbGlmaWNhdGlvblwiPlxuICAgIDxkbW46ZXh0ZW5zaW9uRWxlbWVudHMgLz5cbiAgICA8ZG1uOnZhcmlhYmxlIGlkPVwiXzA0N0EyNUY1LURFRjItNDRCRC05NUI3LUZCNDlBNDMzRjg3OFwiIG5hbWU9XCJMb2FuIFByZS1RdWFsaWZpY2F0aW9uXCIgdHlwZVJlZj1cIkxvYW5fUXVhbGlmaWNhdGlvblwiIC8+XG4gICAgPGRtbjppbmZvcm1hdGlvblJlcXVpcmVtZW50IGlkPVwiX0EzRTk1QjMyLTJFRkQtNDBBRC1CNUU0LTBBNzNBMTU0MjAxMVwiPlxuICAgICAgPGRtbjpyZXF1aXJlZERlY2lzaW9uIGhyZWY9XCIjX0Q2RjQyMzRGLTE1QjMtNEY1Qi1CODE0LTVGNkZGMjlEMjkwN1wiIC8+XG4gICAgPC9kbW46aW5mb3JtYXRpb25SZXF1aXJlbWVudD5cbiAgICA8ZG1uOmluZm9ybWF0aW9uUmVxdWlyZW1lbnQgaWQ9XCJfMEI5OTJGMDEtQkE3Ny00RjA2LUE4MzAtRDg5NDhCNDY3MjcyXCI+XG4gICAgICA8ZG1uOnJlcXVpcmVkRGVjaXNpb24gaHJlZj1cIiNfRjBEQzg5MjMtNUZDNy00MjAwLThCRDEtNDYxRDVGMzcxNEJFXCIgLz5cbiAgICA8L2RtbjppbmZvcm1hdGlvblJlcXVpcmVtZW50PlxuICAgIDxkbW46aW5mb3JtYXRpb25SZXF1aXJlbWVudCBpZD1cIl9CNjAwMkYzMy00ODg4LTQ4QzUtQjI2NS02MzYwMzBGOEMyRENcIj5cbiAgICAgIDxkbW46cmVxdWlyZWREZWNpc2lvbiBocmVmPVwiI18yRkU1MURCMS0zMDgzLTRCRjctQUE3MS0wQjAwNjUzMTBFNzJcIiAvPlxuICAgIDwvZG1uOmluZm9ybWF0aW9uUmVxdWlyZW1lbnQ+XG4gICAgPGRtbjpkZWNpc2lvblRhYmxlIGlkPVwiX0VGN0Y0MDRBLTkzOUUtNDg4OS05NUQ4LUU0MDUzREQxRUVEOVwiIGxhYmVsPVwiTG9hbiBQcmUtUXVhbGlmaWNhdGlvblwiIHR5cGVSZWY9XCJMb2FuX1F1YWxpZmljYXRpb25cIiBoaXRQb2xpY3k9XCJGSVJTVFwiPlxuICAgICAgPGRtbjppbnB1dCBpZD1cIl81OEFCRDgxQi1GRDE2LTQ1QzMtOUU2NC1EQjI3MUFBOTE3QzBcIj5cbiAgICAgICAgPGRtbjppbnB1dEV4cHJlc3Npb24gaWQ9XCJfNTI2MjQ0MUUtRjgxMi00NTU0LUFGMDItNTI2N0JEREY4MEY1XCIgdHlwZVJlZj1cIkNyZWRpdF9TY29yZV9SYXRpbmdcIj5cbiAgICAgICAgICA8ZG1uOnRleHQ+Q3JlZGl0IFNjb3JlIFJhdGluZzwvZG1uOnRleHQ+XG4gICAgICAgIDwvZG1uOmlucHV0RXhwcmVzc2lvbj5cbiAgICAgIDwvZG1uOmlucHV0PlxuICAgICAgPGRtbjppbnB1dCBpZD1cIl8zNjI1OERBMC1FNTI3LTQyOUMtOEZBMS03REVBNjM2NDc2ODlcIj5cbiAgICAgICAgPGRtbjppbnB1dEV4cHJlc3Npb24gaWQ9XCJfNEU5RjBFMDYtODVGMS00RDEwLUIzMEQtRkI1NTc0MUI5MEJDXCIgdHlwZVJlZj1cIkJhY2tfRW5kX1JhdGlvXCI+XG4gICAgICAgICAgPGRtbjp0ZXh0PkJhY2sgRW5kIFJhdGlvPC9kbW46dGV4dD5cbiAgICAgICAgPC9kbW46aW5wdXRFeHByZXNzaW9uPlxuICAgICAgPC9kbW46aW5wdXQ+XG4gICAgICA8ZG1uOmlucHV0IGlkPVwiX0ExMDJDRDhBLUMzOEQtNDhFNC1CQzU5LUNBNjYwRDZGQkYwQVwiPlxuICAgICAgICA8ZG1uOmlucHV0RXhwcmVzc2lvbiBpZD1cIl81RDc5RUVGNS03MUIyLTQzNjAtQjU5QS0yMTVBQTU1OTNEQ0JcIiB0eXBlUmVmPVwiRnJvbnRfRW5kX1JhdGlvXCI+XG4gICAgICAgICAgPGRtbjp0ZXh0PkZyb250IEVuZCBSYXRpbzwvZG1uOnRleHQ+XG4gICAgICAgIDwvZG1uOmlucHV0RXhwcmVzc2lvbj5cbiAgICAgIDwvZG1uOmlucHV0PlxuICAgICAgPGRtbjpvdXRwdXQgaWQ9XCJfQjg5NUIwOTUtQzNENi00OEI0LThBNTAtRDJEM0I4Q0M2QTQ1XCIgbmFtZT1cIlF1YWxpZmljYXRpb25cIiB0eXBlUmVmPVwic3RyaW5nXCIgLz5cbiAgICAgIDxkbW46b3V0cHV0IGlkPVwiX0E4RDJEM0IxLTA3QjMtNDYxOS04REUwLUY5MjNGNTExMDU4QlwiIG5hbWU9XCJSZWFzb25cIiB0eXBlUmVmPVwic3RyaW5nXCIgLz5cbiAgICAgIDxkbW46YW5ub3RhdGlvbiBuYW1lPVwiQW5ub3RhdGlvbnNcIiAvPlxuICAgICAgPGRtbjpydWxlIGlkPVwiX0I0OUUxNjQyLUYzNTItNEQyRS05MkI2LUU1REZBNTlBQUZBQ1wiPlxuICAgICAgICA8ZG1uOmlucHV0RW50cnkgaWQ9XCJfNkM4M0M0NDYtMUE5QS00RkZDLUIzMEMtMjM5MTVGRjlDQzQzXCI+XG4gICAgICAgICAgPGRtbjp0ZXh0PiZxdW90O1Bvb3ImcXVvdDssICZxdW90O0JhZCZxdW90OzwvZG1uOnRleHQ+XG4gICAgICAgIDwvZG1uOmlucHV0RW50cnk+XG4gICAgICAgIDxkbW46aW5wdXRFbnRyeSBpZD1cIl8wQkM5M0NCOS1GRDIwLTQ1QzgtQTQ5OC0zOUU0NDY0QjYyMjRcIj5cbiAgICAgICAgICA8ZG1uOnRleHQ+LTwvZG1uOnRleHQ+XG4gICAgICAgIDwvZG1uOmlucHV0RW50cnk+XG4gICAgICAgIDxkbW46aW5wdXRFbnRyeSBpZD1cIl8xNTU0QTk4My1CMkMxLTQwQTctOTYxNC01MDcyMDQyMEY0QjJcIj5cbiAgICAgICAgICA8ZG1uOnRleHQ+LTwvZG1uOnRleHQ+XG4gICAgICAgIDwvZG1uOmlucHV0RW50cnk+XG4gICAgICAgIDxkbW46b3V0cHV0RW50cnkgaWQ9XCJfN0IzOUI5NjQtNEUyNS00NzE3LTkyRkUtQTM2RjJCMzlGQUI5XCI+XG4gICAgICAgICAgPGRtbjp0ZXh0PiZxdW90O05vdCBRdWFsaWZpZWQmcXVvdDs8L2Rtbjp0ZXh0PlxuICAgICAgICA8L2RtbjpvdXRwdXRFbnRyeT5cbiAgICAgICAgPGRtbjpvdXRwdXRFbnRyeSBpZD1cIl9BODUyRjVCNi1DNURGLTRBREQtOEI5My05NzAxRjA3MjQ5MTJcIj5cbiAgICAgICAgICA8ZG1uOnRleHQ+JnF1b3Q7Q3JlZGl0IFNjb3JlIHRvbyBsb3cuJnF1b3Q7PC9kbW46dGV4dD5cbiAgICAgICAgPC9kbW46b3V0cHV0RW50cnk+XG4gICAgICAgIDxkbW46YW5ub3RhdGlvbkVudHJ5PlxuICAgICAgICAgIDxkbW46dGV4dD48L2Rtbjp0ZXh0PlxuICAgICAgICA8L2Rtbjphbm5vdGF0aW9uRW50cnk+XG4gICAgICA8L2RtbjpydWxlPlxuICAgICAgPGRtbjpydWxlIGlkPVwiXzIxNDg2NUY0LUM5NjgtNDM4Qy1BMzg1LTZCMjgyM0FGMUJDM1wiPlxuICAgICAgICA8ZG1uOmlucHV0RW50cnkgaWQ9XCJfMTg2MTdBMkEtNkREMy00MUE5LTg3RDYtNjhDOTE1NTQ2MjBFXCI+XG4gICAgICAgICAgPGRtbjp0ZXh0Pi08L2Rtbjp0ZXh0PlxuICAgICAgICA8L2RtbjppbnB1dEVudHJ5PlxuICAgICAgICA8ZG1uOmlucHV0RW50cnkgaWQ9XCJfNUM3MEJCODEtQ0FGRC00Njk1LUEyNDEtNjhGNDQxRkY5QTI5XCI+XG4gICAgICAgICAgPGRtbjp0ZXh0PiZxdW90O0luc3VmZmljaWVudCZxdW90OzwvZG1uOnRleHQ+XG4gICAgICAgIDwvZG1uOmlucHV0RW50cnk+XG4gICAgICAgIDxkbW46aW5wdXRFbnRyeSBpZD1cIl83OEEzQzNBMC1FRUJDLTQ0OEItQjFDMS01Q0ZGNkM3RjJBQzVcIj5cbiAgICAgICAgICA8ZG1uOnRleHQ+JnF1b3Q7U3VmZmljaWVudCZxdW90OzwvZG1uOnRleHQ+XG4gICAgICAgIDwvZG1uOmlucHV0RW50cnk+XG4gICAgICAgIDxkbW46b3V0cHV0RW50cnkgaWQ9XCJfM0MzOEQxODEtQ0NBMS00Njc4LUEzREQtMEE1Q0U2RDU5RkRDXCI+XG4gICAgICAgICAgPGRtbjp0ZXh0PiZxdW90O05vdCBRdWFsaWZpZWQmcXVvdDs8L2Rtbjp0ZXh0PlxuICAgICAgICA8L2RtbjpvdXRwdXRFbnRyeT5cbiAgICAgICAgPGRtbjpvdXRwdXRFbnRyeSBpZD1cIl9GNDI4NEI5Ri1DNzdBLTQyOUItQTY4OS1FMjEyQ0ZCMTlDQjdcIj5cbiAgICAgICAgICA8ZG1uOnRleHQ+JnF1b3Q7RGVidCB0byBpbmNvbWUgcmF0aW8gaXMgdG9vIGhpZ2guJnF1b3Q7PC9kbW46dGV4dD5cbiAgICAgICAgPC9kbW46b3V0cHV0RW50cnk+XG4gICAgICAgIDxkbW46YW5ub3RhdGlvbkVudHJ5PlxuICAgICAgICAgIDxkbW46dGV4dD48L2Rtbjp0ZXh0PlxuICAgICAgICA8L2Rtbjphbm5vdGF0aW9uRW50cnk+XG4gICAgICA8L2RtbjpydWxlPlxuICAgICAgPGRtbjpydWxlIGlkPVwiXzczRTk2NzczLTA2NEUtNDlGNi05MkIyLUFBNzZFNkJGNkI4QVwiPlxuICAgICAgICA8ZG1uOmlucHV0RW50cnkgaWQ9XCJfMjRBODI1RjAtQjhDNy00MkM5LUJCQTItNDQ0MkNBRTZGOTFBXCI+XG4gICAgICAgICAgPGRtbjp0ZXh0Pi08L2Rtbjp0ZXh0PlxuICAgICAgICA8L2RtbjppbnB1dEVudHJ5PlxuICAgICAgICA8ZG1uOmlucHV0RW50cnkgaWQ9XCJfQjdGNTlBNUMtNEFGMS00RTkwLUJCMEQtODNDNjNBODM5MEU2XCI+XG4gICAgICAgICAgPGRtbjp0ZXh0PiZxdW90O1N1ZmZpY2llbnQmcXVvdDs8L2Rtbjp0ZXh0PlxuICAgICAgICA8L2RtbjppbnB1dEVudHJ5PlxuICAgICAgICA8ZG1uOmlucHV0RW50cnkgaWQ9XCJfMDlBMjNGRDQtOUE5OC00QzM0LTlFOUItOUU4RUU2NTJBQkJDXCI+XG4gICAgICAgICAgPGRtbjp0ZXh0PiZxdW90O0luc3VmZmljaWVudCZxdW90OzwvZG1uOnRleHQ+XG4gICAgICAgIDwvZG1uOmlucHV0RW50cnk+XG4gICAgICAgIDxkbW46b3V0cHV0RW50cnkgaWQ9XCJfOUJGMTA5NkEtMUFGMy00RDIxLTkyNzMtNDYwREU1NTVGMEI2XCI+XG4gICAgICAgICAgPGRtbjp0ZXh0PiZxdW90O05vdCBRdWFsaWZpZWQmcXVvdDs8L2Rtbjp0ZXh0PlxuICAgICAgICA8L2RtbjpvdXRwdXRFbnRyeT5cbiAgICAgICAgPGRtbjpvdXRwdXRFbnRyeSBpZD1cIl80RDgwNUJCMi1CNzlFLTQyQzItQTU2Mi02NzRFQ0JERkEwMUNcIj5cbiAgICAgICAgICA8ZG1uOnRleHQ+JnF1b3Q7TW9ydGdhZ2UgcGF5bWVudCB0byBpbmNvbWUgcmF0aW8gaXMgdG9vIGhpZ2guJnF1b3Q7PC9kbW46dGV4dD5cbiAgICAgICAgPC9kbW46b3V0cHV0RW50cnk+XG4gICAgICAgIDxkbW46YW5ub3RhdGlvbkVudHJ5PlxuICAgICAgICAgIDxkbW46dGV4dD48L2Rtbjp0ZXh0PlxuICAgICAgICA8L2Rtbjphbm5vdGF0aW9uRW50cnk+XG4gICAgICA8L2RtbjpydWxlPlxuICAgICAgPGRtbjpydWxlIGlkPVwiXzdDMjQyQzU4LTZDQUItNDNDRi05MjM1LTM0N0E3MkFFM0Y5RVwiPlxuICAgICAgICA8ZG1uOmlucHV0RW50cnkgaWQ9XCJfOURGMkEwMjYtOEI4Ny00Qzc1LUJCM0QtNTRGRjBFMkEyRTM2XCI+XG4gICAgICAgICAgPGRtbjp0ZXh0Pi08L2Rtbjp0ZXh0PlxuICAgICAgICA8L2RtbjppbnB1dEVudHJ5PlxuICAgICAgICA8ZG1uOmlucHV0RW50cnkgaWQ9XCJfRkYzRTk3ODItQkU5Qy00QjBDLUE2M0ItRTkwNkY2MTE2MjUxXCI+XG4gICAgICAgICAgPGRtbjp0ZXh0PiZxdW90O0luc3VmZmljaWVudCZxdW90OzwvZG1uOnRleHQ+XG4gICAgICAgIDwvZG1uOmlucHV0RW50cnk+XG4gICAgICAgIDxkbW46aW5wdXRFbnRyeSBpZD1cIl81NDQ2ODdDRC1GM0EyLTQ2QzctODQzOS1FNUUyRTdCNjQ4M0RcIj5cbiAgICAgICAgICA8ZG1uOnRleHQ+JnF1b3Q7SW5zdWZmaWNpZW50JnF1b3Q7PC9kbW46dGV4dD5cbiAgICAgICAgPC9kbW46aW5wdXRFbnRyeT5cbiAgICAgICAgPGRtbjpvdXRwdXRFbnRyeSBpZD1cIl81QTk1OEQyRS1CMzEwLTRBQjktQkY1Qi00OTYyM0JFNURCNTVcIj5cbiAgICAgICAgICA8ZG1uOnRleHQ+JnF1b3Q7Tm90IFF1YWxpZmllZCZxdW90OzwvZG1uOnRleHQ+XG4gICAgICAgIDwvZG1uOm91dHB1dEVudHJ5PlxuICAgICAgICA8ZG1uOm91dHB1dEVudHJ5IGlkPVwiX0YwQkQ3REMyLUExQjYtNENGNC05NUQwLTkwNkRCQjU0MEVGQ1wiPlxuICAgICAgICAgIDxkbW46dGV4dD4mcXVvdDtEZWJ0IHRvIGluY29tZSByYXRpbyBpcyB0b28gaGlnaCBBTkQgbW9ydGdhZ2UgcGF5bWVudCB0byBpbmNvbWUgcmF0aW8gaXMgdG9vIGhpZ2guJnF1b3Q7PC9kbW46dGV4dD5cbiAgICAgICAgPC9kbW46b3V0cHV0RW50cnk+XG4gICAgICAgIDxkbW46YW5ub3RhdGlvbkVudHJ5PlxuICAgICAgICAgIDxkbW46dGV4dD48L2Rtbjp0ZXh0PlxuICAgICAgICA8L2Rtbjphbm5vdGF0aW9uRW50cnk+XG4gICAgICA8L2RtbjpydWxlPlxuICAgICAgPGRtbjpydWxlIGlkPVwiX0M4RkEzM0IxLUFGNkUtNEE1OS1CN0I5LTZGREYxRjQ5NUM0NFwiPlxuICAgICAgICA8ZG1uOmlucHV0RW50cnkgaWQ9XCJfODJGQkNFRTItQzE2Qy00RkZGLUE3RjMtNTUxMkMyMTFFMjlCXCI+XG4gICAgICAgICAgPGRtbjp0ZXh0PiZxdW90O0ZhaXImcXVvdDssICZxdW90O0dvb2QmcXVvdDssICZxdW90O0V4Y2VsbGVudCZxdW90OzwvZG1uOnRleHQ+XG4gICAgICAgIDwvZG1uOmlucHV0RW50cnk+XG4gICAgICAgIDxkbW46aW5wdXRFbnRyeSBpZD1cIl9CRjdDREFFMS02NkUzLTRCMDYtODcyOS04OTY0NTNBRDc4NjdcIj5cbiAgICAgICAgICA8ZG1uOnRleHQ+JnF1b3Q7U3VmZmljaWVudCZxdW90OzwvZG1uOnRleHQ+XG4gICAgICAgIDwvZG1uOmlucHV0RW50cnk+XG4gICAgICAgIDxkbW46aW5wdXRFbnRyeSBpZD1cIl80MUNCNjEyMy04MTIyLTRGQTQtQTVDMS01NDhCOTJDQTMxQUVcIj5cbiAgICAgICAgICA8ZG1uOnRleHQ+JnF1b3Q7U3VmZmljaWVudCZxdW90OzwvZG1uOnRleHQ+XG4gICAgICAgIDwvZG1uOmlucHV0RW50cnk+XG4gICAgICAgIDxkbW46b3V0cHV0RW50cnkgaWQ9XCJfOUUwNDk3RDAtRjJGMi00MTlFLUE1NTgtMzY2NDUyQjM3OUExXCI+XG4gICAgICAgICAgPGRtbjp0ZXh0PiZxdW90O1F1YWxpZmllZCZxdW90OzwvZG1uOnRleHQ+XG4gICAgICAgIDwvZG1uOm91dHB1dEVudHJ5PlxuICAgICAgICA8ZG1uOm91dHB1dEVudHJ5IGlkPVwiXzExM0NBNTY2LTYwNDQtNDg1OC1COEQ5LTVBQ0JBNEE5MUNGNFwiPlxuICAgICAgICAgIDxkbW46dGV4dD4mcXVvdDtUaGUgYm9ycm93ZXIgaGFzIGJlZW4gc3VjY2Vzc2Z1bGx5IHByZXF1YWxpZmllZCBmb3IgdGhlIHJlcXVlc3RlZCBsb2FuLiZxdW90OzwvZG1uOnRleHQ+XG4gICAgICAgIDwvZG1uOm91dHB1dEVudHJ5PlxuICAgICAgICA8ZG1uOmFubm90YXRpb25FbnRyeT5cbiAgICAgICAgICA8ZG1uOnRleHQ+PC9kbW46dGV4dD5cbiAgICAgICAgPC9kbW46YW5ub3RhdGlvbkVudHJ5PlxuICAgICAgPC9kbW46cnVsZT5cbiAgICA8L2RtbjpkZWNpc2lvblRhYmxlPlxuICA8L2RtbjpkZWNpc2lvbj5cbiAgPGRtbjppbnB1dERhdGEgaWQ9XCJfNkUzMjA1QUYtN0UzRC00QUJFLUEzNjctOTZGM0Y2RTgyMTBFXCIgbmFtZT1cIlJlcXVlc3RlZCBQcm9kdWN0XCI+XG4gICAgPGRtbjpleHRlbnNpb25FbGVtZW50cyAvPlxuICAgIDxkbW46dmFyaWFibGUgaWQ9XCJfRUUwNUUxQzctNjdFRC00QTcxLUJERUUtODAwNTI1OTM1MUU4XCIgbmFtZT1cIlJlcXVlc3RlZCBQcm9kdWN0XCIgdHlwZVJlZj1cIlJlcXVlc3RlZF9Qcm9kdWN0XCIgLz5cbiAgPC9kbW46aW5wdXREYXRhPlxuICA8ZG1uOmJ1c2luZXNzS25vd2xlZGdlTW9kZWwgaWQ9XCJfREE1Q0NGNjItOTBBOC00Q0ZDLUExMzctOThCNTI4NTIyNTg4XCIgbmFtZT1cIkRUSVwiPlxuICAgIDxkbW46ZXh0ZW5zaW9uRWxlbWVudHMgLz5cbiAgICA8ZG1uOnZhcmlhYmxlIGlkPVwiXzJGODkyMUQxLTYzODQtNEVDQi04NDhFLUNFODRBMjBCMjU3M1wiIG5hbWU9XCJEVElcIiB0eXBlUmVmPVwibnVtYmVyXCIgLz5cbiAgICA8ZG1uOmVuY2Fwc3VsYXRlZExvZ2ljIGlkPVwiXzQ3OEM4MTVFLTYwQzktNDYzNy1BQTQyLTE5NURGMTZCNjNBNVwiIGxhYmVsPVwiRFRJXCIga2luZD1cIkZFRUxcIiB0eXBlUmVmPVwibnVtYmVyXCI+XG4gICAgICA8ZG1uOmZvcm1hbFBhcmFtZXRlciBpZD1cIl9CN0E5QzIyMi1DNTYwLTREMzctQTgyMS0wQ0FDODg2MTFGMTBcIiBuYW1lPVwiZFwiIHR5cGVSZWY9XCJudW1iZXJcIiAvPlxuICAgICAgPGRtbjpmb3JtYWxQYXJhbWV0ZXIgaWQ9XCJfNDNDMDQ3MjEtMzhGNi00QUJGLTlGMkYtQkQyOTU2QzA1NDQxXCIgbmFtZT1cImlcIiB0eXBlUmVmPVwibnVtYmVyXCIgLz5cbiAgICAgIDxkbW46bGl0ZXJhbEV4cHJlc3Npb24gaWQ9XCJfMDY0RkE4OEUtQjA2Ri00OTQ0LTg1QzMtREE4NkMzRjY2MEREXCIgdHlwZVJlZj1cIiZsdDtVbmRlZmluZWQmZ3Q7XCI+XG4gICAgICAgIDxkbW46dGV4dD5kIC8gaTwvZG1uOnRleHQ+XG4gICAgICA8L2RtbjpsaXRlcmFsRXhwcmVzc2lvbj5cbiAgICA8L2RtbjplbmNhcHN1bGF0ZWRMb2dpYz5cbiAgPC9kbW46YnVzaW5lc3NLbm93bGVkZ2VNb2RlbD5cbiAgPGRtbjpidXNpbmVzc0tub3dsZWRnZU1vZGVsIGlkPVwiX0M5OEJFOTM5LUI5QzctNDNFMC04M0U4LUVFN0ExNkM1Mjc2RFwiIG5hbWU9XCJMZW5kZXIgQWNjZXB0YWJsZSBQSVRJXCI+XG4gICAgPGRtbjpleHRlbnNpb25FbGVtZW50cyAvPlxuICAgIDxkbW46dmFyaWFibGUgaWQ9XCJfOUQ3ODIxNEItRUMwNy00MzYwLThEMUItM0Q5MjdBQzkwQTIwXCIgbmFtZT1cIkxlbmRlciBBY2NlcHRhYmxlIFBJVElcIiB0eXBlUmVmPVwibnVtYmVyXCIgLz5cbiAgICA8ZG1uOmVuY2Fwc3VsYXRlZExvZ2ljIGlkPVwiX0UzMTJEODBFLTBFQ0UtNEQ2Ni04N0VCLTMwREUyMDg5MEJCQ1wiIGtpbmQ9XCJGRUVMXCI+XG4gICAgICA8ZG1uOmxpdGVyYWxFeHByZXNzaW9uIGlkPVwiX0VFREYyQzE1LTdGRDctNDA5Ri1CMjNCLUY5QTE5OEUyMTM1RFwiPlxuICAgICAgICA8ZG1uOnRleHQ+MC4yODwvZG1uOnRleHQ+XG4gICAgICA8L2RtbjpsaXRlcmFsRXhwcmVzc2lvbj5cbiAgICA8L2RtbjplbmNhcHN1bGF0ZWRMb2dpYz5cbiAgPC9kbW46YnVzaW5lc3NLbm93bGVkZ2VNb2RlbD5cbiAgPGRtbmRpOkRNTkRJPlxuICAgIDxkbW5kaTpETU5EaWFncmFtIGlkPVwiXzE2MDg1ODVGLTAxQzgtNEE2Ni1CM0U1LUY0NDIyRDRERDJDQVwiIG5hbWU9XCJEZWZhdWx0IERSRFwiIHVzZUFsdGVybmF0aXZlSW5wdXREYXRhU2hhcGU9XCJmYWxzZVwiPlxuICAgICAgPGRpOmV4dGVuc2lvbj5cbiAgICAgICAgPGtpZTpDb21wb25lbnRzV2lkdGhzRXh0ZW5zaW9uPlxuICAgICAgICAgIDxraWU6Q29tcG9uZW50V2lkdGhzIGRtbkVsZW1lbnRSZWY9XCJfMjFFOEZBMzgtQzk0Ny00NzMzLTlFNTItQ0Y4MUE5N0FERjkxXCI+XG4gICAgICAgICAgICA8a2llOndpZHRoPjIwOTwva2llOndpZHRoPlxuICAgICAgICAgIDwva2llOkNvbXBvbmVudFdpZHRocz5cbiAgICAgICAgICA8a2llOkNvbXBvbmVudFdpZHRocyBkbW5FbGVtZW50UmVmPVwiXzlGMDI1N0VFLUNGODItNDlGRC1BRURELTMxNTU4OTA4NjRGRlwiPlxuICAgICAgICAgICAgPGtpZTp3aWR0aD41MDwva2llOndpZHRoPlxuICAgICAgICAgICAgPGtpZTp3aWR0aD4yMDk8L2tpZTp3aWR0aD5cbiAgICAgICAgICA8L2tpZTpDb21wb25lbnRXaWR0aHM+XG4gICAgICAgICAgPGtpZTpDb21wb25lbnRXaWR0aHMgZG1uRWxlbWVudFJlZj1cIl8wOEE5QzMzRC03MTlGLTRCMDUtQUM0Mi1EMTU0NjQ3OThCQzRcIj5cbiAgICAgICAgICAgIDxraWU6d2lkdGg+NTA8L2tpZTp3aWR0aD5cbiAgICAgICAgICA8L2tpZTpDb21wb25lbnRXaWR0aHM+XG4gICAgICAgICAgPGtpZTpDb21wb25lbnRXaWR0aHMgZG1uRWxlbWVudFJlZj1cIl9FQjY1ODU4Ni1DM0M4LTQ4OEUtODExOC1FNjlFMzE1ODMxMDZcIj5cbiAgICAgICAgICAgIDxraWU6d2lkdGg+MTIwPC9raWU6d2lkdGg+XG4gICAgICAgICAgPC9raWU6Q29tcG9uZW50V2lkdGhzPlxuICAgICAgICAgIDxraWU6Q29tcG9uZW50V2lkdGhzIGRtbkVsZW1lbnRSZWY9XCJfNkU3OUU0RDktQkJGQi00RTkwLThBQTMtQTZDMTUzQzNDOTQ2XCIgLz5cbiAgICAgICAgICA8a2llOkNvbXBvbmVudFdpZHRocyBkbW5FbGVtZW50UmVmPVwiXzUxQUNFQzNDLTQyMDctNEY1Ri04RkRELTlFREFBMzI3MEU2MFwiPlxuICAgICAgICAgICAgPGtpZTp3aWR0aD4xMDM2PC9raWU6d2lkdGg+XG4gICAgICAgICAgPC9raWU6Q29tcG9uZW50V2lkdGhzPlxuICAgICAgICAgIDxraWU6Q29tcG9uZW50V2lkdGhzIGRtbkVsZW1lbnRSZWY9XCJfNUQwNTBCOEQtREY1NS00NUZELTk4OEItOUM1NkJFRDUzRDVCXCI+XG4gICAgICAgICAgICA8a2llOndpZHRoPjEwMzY8L2tpZTp3aWR0aD5cbiAgICAgICAgICA8L2tpZTpDb21wb25lbnRXaWR0aHM+XG4gICAgICAgICAgPGtpZTpDb21wb25lbnRXaWR0aHMgZG1uRWxlbWVudFJlZj1cIl8xNEM0NEE2OS01NkRCLTRCNjgtQjc1Ny00MjI1QzgwRTREODhcIj5cbiAgICAgICAgICAgIDxraWU6d2lkdGg+MTAzNjwva2llOndpZHRoPlxuICAgICAgICAgIDwva2llOkNvbXBvbmVudFdpZHRocz5cbiAgICAgICAgICA8a2llOkNvbXBvbmVudFdpZHRocyBkbW5FbGVtZW50UmVmPVwiXzBEQjVERTA1LUEyQUQtNDAxMy1CMTkxLURDMUQxNjM3QTEzMlwiPlxuICAgICAgICAgICAgPGtpZTp3aWR0aD4xMDM2PC9raWU6d2lkdGg+XG4gICAgICAgICAgPC9raWU6Q29tcG9uZW50V2lkdGhzPlxuICAgICAgICAgIDxraWU6Q29tcG9uZW50V2lkdGhzIGRtbkVsZW1lbnRSZWY9XCJfM0Y5NUVGRDAtOTRENy00RDFBLTlFQTktQzhFMTI5ODJEN0U4XCI+XG4gICAgICAgICAgICA8a2llOndpZHRoPjExNTg8L2tpZTp3aWR0aD5cbiAgICAgICAgICA8L2tpZTpDb21wb25lbnRXaWR0aHM+XG4gICAgICAgICAgPGtpZTpDb21wb25lbnRXaWR0aHMgZG1uRWxlbWVudFJlZj1cIl9BMzJFRDRBNS03Qjg5LTQwRjctQkUyNS1DREI2MzZGRTA3MUNcIj5cbiAgICAgICAgICAgIDxraWU6d2lkdGg+NDU0PC9raWU6d2lkdGg+XG4gICAgICAgICAgPC9raWU6Q29tcG9uZW50V2lkdGhzPlxuICAgICAgICAgIDxraWU6Q29tcG9uZW50V2lkdGhzIGRtbkVsZW1lbnRSZWY9XCJfRDMzRDlBRUEtNDlERi00ODlGLTk4RUMtNEI0MkZGOEMyMDI3XCI+XG4gICAgICAgICAgICA8a2llOndpZHRoPjUwPC9raWU6d2lkdGg+XG4gICAgICAgICAgICA8a2llOndpZHRoPjMwMDwva2llOndpZHRoPlxuICAgICAgICAgIDwva2llOkNvbXBvbmVudFdpZHRocz5cbiAgICAgICAgICA8a2llOkNvbXBvbmVudFdpZHRocyBkbW5FbGVtZW50UmVmPVwiXzVGOUZFQTRFLUIzRkMtNEJDMi05MTNFLTM2QjgwNzFGQTc3N1wiPlxuICAgICAgICAgICAgPGtpZTp3aWR0aD41MDwva2llOndpZHRoPlxuICAgICAgICAgIDwva2llOkNvbXBvbmVudFdpZHRocz5cbiAgICAgICAgICA8a2llOkNvbXBvbmVudFdpZHRocyBkbW5FbGVtZW50UmVmPVwiXzRBN0ZDOEUwLTI1RUYtNERBRi04NDVBLTkzQkQ4OUMyQkM4Q1wiPlxuICAgICAgICAgICAgPGtpZTp3aWR0aD4xMjA8L2tpZTp3aWR0aD5cbiAgICAgICAgICA8L2tpZTpDb21wb25lbnRXaWR0aHM+XG4gICAgICAgICAgPGtpZTpDb21wb25lbnRXaWR0aHMgZG1uRWxlbWVudFJlZj1cIl9GMEU4MDkwMC0xOTY0LTQxNDItOUEwNS03M0U3QTJFMEYyQ0RcIiAvPlxuICAgICAgICAgIDxraWU6Q29tcG9uZW50V2lkdGhzIGRtbkVsZW1lbnRSZWY9XCJfM0QwQTE5NzktRTU5QS00ODNGLUJEQTgtMTM4Rjk5QkE1QUIzXCI+XG4gICAgICAgICAgICA8a2llOndpZHRoPjU1MDwva2llOndpZHRoPlxuICAgICAgICAgIDwva2llOkNvbXBvbmVudFdpZHRocz5cbiAgICAgICAgICA8a2llOkNvbXBvbmVudFdpZHRocyBkbW5FbGVtZW50UmVmPVwiX0Q5ODVGODg2LTcxQzAtNEY2NS04ODA4LTJDRUYzNjZCRUNDOFwiPlxuICAgICAgICAgICAgPGtpZTp3aWR0aD41NTA8L2tpZTp3aWR0aD5cbiAgICAgICAgICA8L2tpZTpDb21wb25lbnRXaWR0aHM+XG4gICAgICAgICAgPGtpZTpDb21wb25lbnRXaWR0aHMgZG1uRWxlbWVudFJlZj1cIl9EMUY5NjEwMi00MTU4LTQ1QkItOEM5QS1CN0EzQkUyQzAyMDZcIj5cbiAgICAgICAgICAgIDxraWU6d2lkdGg+NjcyPC9raWU6d2lkdGg+XG4gICAgICAgICAgPC9raWU6Q29tcG9uZW50V2lkdGhzPlxuICAgICAgICAgIDxraWU6Q29tcG9uZW50V2lkdGhzIGRtbkVsZW1lbnRSZWY9XCJfNEFDRUZGRjAtQUQyQy00REI4LTlCQUQtN0JDQ0ZCMDNGMjk1XCI+XG4gICAgICAgICAgICA8a2llOndpZHRoPjYwPC9raWU6d2lkdGg+XG4gICAgICAgICAgICA8a2llOndpZHRoPjEzMzwva2llOndpZHRoPlxuICAgICAgICAgICAgPGtpZTp3aWR0aD4xNDc8L2tpZTp3aWR0aD5cbiAgICAgICAgICAgIDxraWU6d2lkdGg+MzM1PC9raWU6d2lkdGg+XG4gICAgICAgICAgPC9raWU6Q29tcG9uZW50V2lkdGhzPlxuICAgICAgICAgIDxraWU6Q29tcG9uZW50V2lkdGhzIGRtbkVsZW1lbnRSZWY9XCJfRUY3RjQwNEEtOTM5RS00ODg5LTk1RDgtRTQwNTNERDFFRUQ5XCI+XG4gICAgICAgICAgICA8a2llOndpZHRoPjYwPC9raWU6d2lkdGg+XG4gICAgICAgICAgICA8a2llOndpZHRoPjIzMzwva2llOndpZHRoPlxuICAgICAgICAgICAgPGtpZTp3aWR0aD4xMzM8L2tpZTp3aWR0aD5cbiAgICAgICAgICAgIDxraWU6d2lkdGg+MTI5PC9raWU6d2lkdGg+XG4gICAgICAgICAgICA8a2llOndpZHRoPjEzNTwva2llOndpZHRoPlxuICAgICAgICAgICAgPGtpZTp3aWR0aD42ODE8L2tpZTp3aWR0aD5cbiAgICAgICAgICAgIDxraWU6d2lkdGg+MTM4PC9raWU6d2lkdGg+XG4gICAgICAgICAgPC9raWU6Q29tcG9uZW50V2lkdGhzPlxuICAgICAgICAgIDxraWU6Q29tcG9uZW50V2lkdGhzIGRtbkVsZW1lbnRSZWY9XCJfMDY0RkE4OEUtQjA2Ri00OTQ0LTg1QzMtREE4NkMzRjY2MEREXCI+XG4gICAgICAgICAgICA8a2llOndpZHRoPjE1MDwva2llOndpZHRoPlxuICAgICAgICAgIDwva2llOkNvbXBvbmVudFdpZHRocz5cbiAgICAgICAgICA8a2llOkNvbXBvbmVudFdpZHRocyBkbW5FbGVtZW50UmVmPVwiXzQ3OEM4MTVFLTYwQzktNDYzNy1BQTQyLTE5NURGMTZCNjNBNVwiPlxuICAgICAgICAgICAgPGtpZTp3aWR0aD41MDwva2llOndpZHRoPlxuICAgICAgICAgICAgPGtpZTp3aWR0aD4xNTA8L2tpZTp3aWR0aD5cbiAgICAgICAgICA8L2tpZTpDb21wb25lbnRXaWR0aHM+XG4gICAgICAgICAgPGtpZTpDb21wb25lbnRXaWR0aHMgZG1uRWxlbWVudFJlZj1cIl9FRURGMkMxNS03RkQ3LTQwOUYtQjIzQi1GOUExOThFMjEzNURcIj5cbiAgICAgICAgICAgIDxraWU6d2lkdGg+MjI4PC9raWU6d2lkdGg+XG4gICAgICAgICAgPC9raWU6Q29tcG9uZW50V2lkdGhzPlxuICAgICAgICAgIDxraWU6Q29tcG9uZW50V2lkdGhzIGRtbkVsZW1lbnRSZWY9XCJfRTMxMkQ4MEUtMEVDRS00RDY2LTg3RUItMzBERTIwODkwQkJDXCI+XG4gICAgICAgICAgICA8a2llOndpZHRoPjUwPC9raWU6d2lkdGg+XG4gICAgICAgICAgICA8a2llOndpZHRoPjIyODwva2llOndpZHRoPlxuICAgICAgICAgIDwva2llOkNvbXBvbmVudFdpZHRocz5cbiAgICAgICAgPC9raWU6Q29tcG9uZW50c1dpZHRoc0V4dGVuc2lvbj5cbiAgICAgIDwvZGk6ZXh0ZW5zaW9uPlxuICAgICAgPGRtbmRpOkRNTlNoYXBlIGlkPVwiZG1uc2hhcGUtZHJnLV80Qzg5RTU5Qy1GRERBLTQzOEMtOEQxRi0wQjExOTRFRjZEQUVcIiBkbW5FbGVtZW50UmVmPVwiXzRDODlFNTlDLUZEREEtNDM4Qy04RDFGLTBCMTE5NEVGNkRBRVwiIGlzQ29sbGFwc2VkPVwiZmFsc2VcIj5cbiAgICAgICAgPGRtbmRpOkRNTlN0eWxlPlxuICAgICAgICAgIDxkbW5kaTpGaWxsQ29sb3IgcmVkPVwiMjU1XCIgZ3JlZW49XCIyNTVcIiBibHVlPVwiMjU1XCIgLz5cbiAgICAgICAgICA8ZG1uZGk6U3Ryb2tlQ29sb3IgcmVkPVwiMFwiIGdyZWVuPVwiMFwiIGJsdWU9XCIwXCIgLz5cbiAgICAgICAgICA8ZG1uZGk6Rm9udENvbG9yIHJlZD1cIjBcIiBncmVlbj1cIjBcIiBibHVlPVwiMFwiIC8+XG4gICAgICAgIDwvZG1uZGk6RE1OU3R5bGU+XG4gICAgICAgIDxkYzpCb3VuZHMgeD1cIjk4MFwiIHk9XCIzNjBcIiB3aWR0aD1cIjEzNFwiIGhlaWdodD1cIjYxXCIgLz5cbiAgICAgICAgPGRtbmRpOkRNTkxhYmVsIC8+XG4gICAgICA8L2RtbmRpOkRNTlNoYXBlPlxuICAgICAgPGRtbmRpOkRNTlNoYXBlIGlkPVwiZG1uc2hhcGUtZHJnLV80Qzc4OERCRC1DNjcyLTRGNDEtOUFGRS05QzdEMkMxNDU3MzRcIiBkbW5FbGVtZW50UmVmPVwiXzRDNzg4REJELUM2NzItNEY0MS05QUZFLTlDN0QyQzE0NTczNFwiIGlzQ29sbGFwc2VkPVwiZmFsc2VcIj5cbiAgICAgICAgPGRtbmRpOkRNTlN0eWxlPlxuICAgICAgICAgIDxkbW5kaTpGaWxsQ29sb3IgcmVkPVwiMjU1XCIgZ3JlZW49XCIyNTVcIiBibHVlPVwiMjU1XCIgLz5cbiAgICAgICAgICA8ZG1uZGk6U3Ryb2tlQ29sb3IgcmVkPVwiMFwiIGdyZWVuPVwiMFwiIGJsdWU9XCIwXCIgLz5cbiAgICAgICAgICA8ZG1uZGk6Rm9udENvbG9yIHJlZD1cIjBcIiBncmVlbj1cIjBcIiBibHVlPVwiMFwiIC8+XG4gICAgICAgIDwvZG1uZGk6RE1OU3R5bGU+XG4gICAgICAgIDxkYzpCb3VuZHMgeD1cIjk5LjA5MzQ1Nzk0MzkyNTI0XCIgeT1cIjIyMy42NzEwNTI2MzE1Nzg5NlwiIHdpZHRoPVwiMTM2XCIgaGVpZ2h0PVwiNjNcIiAvPlxuICAgICAgICA8ZG1uZGk6RE1OTGFiZWwgLz5cbiAgICAgIDwvZG1uZGk6RE1OU2hhcGU+XG4gICAgICA8ZG1uZGk6RE1OU2hhcGUgaWQ9XCJkbW5zaGFwZS1kcmctX0YwREM4OTIzLTVGQzctNDIwMC04QkQxLTQ2MUQ1RjM3MTRCRVwiIGRtbkVsZW1lbnRSZWY9XCJfRjBEQzg5MjMtNUZDNy00MjAwLThCRDEtNDYxRDVGMzcxNEJFXCIgaXNDb2xsYXBzZWQ9XCJmYWxzZVwiPlxuICAgICAgICA8ZG1uZGk6RE1OU3R5bGU+XG4gICAgICAgICAgPGRtbmRpOkZpbGxDb2xvciByZWQ9XCIyNTVcIiBncmVlbj1cIjI1NVwiIGJsdWU9XCIyNTVcIiAvPlxuICAgICAgICAgIDxkbW5kaTpTdHJva2VDb2xvciByZWQ9XCIwXCIgZ3JlZW49XCIwXCIgYmx1ZT1cIjBcIiAvPlxuICAgICAgICAgIDxkbW5kaTpGb250Q29sb3IgcmVkPVwiMFwiIGdyZWVuPVwiMFwiIGJsdWU9XCIwXCIgLz5cbiAgICAgICAgPC9kbW5kaTpETU5TdHlsZT5cbiAgICAgICAgPGRjOkJvdW5kcyB4PVwiNTMxXCIgeT1cIjIyNVwiIHdpZHRoPVwiMTM2XCIgaGVpZ2h0PVwiNjJcIiAvPlxuICAgICAgICA8ZG1uZGk6RE1OTGFiZWwgLz5cbiAgICAgIDwvZG1uZGk6RE1OU2hhcGU+XG4gICAgICA8ZG1uZGk6RE1OU2hhcGUgaWQ9XCJkbW5zaGFwZS1kcmctX0ZBRjkwODBFLUY0RUYtNDlGNy1BRUZELTBEMjk5MEQ4RkZEQVwiIGRtbkVsZW1lbnRSZWY9XCJfRkFGOTA4MEUtRjRFRi00OUY3LUFFRkQtMEQyOTkwRDhGRkRBXCIgaXNDb2xsYXBzZWQ9XCJmYWxzZVwiPlxuICAgICAgICA8ZG1uZGk6RE1OU3R5bGU+XG4gICAgICAgICAgPGRtbmRpOkZpbGxDb2xvciByZWQ9XCIyNTVcIiBncmVlbj1cIjI1NVwiIGJsdWU9XCIyNTVcIiAvPlxuICAgICAgICAgIDxkbW5kaTpTdHJva2VDb2xvciByZWQ9XCIwXCIgZ3JlZW49XCIwXCIgYmx1ZT1cIjBcIiAvPlxuICAgICAgICAgIDxkbW5kaTpGb250Q29sb3IgcmVkPVwiMFwiIGdyZWVuPVwiMFwiIGJsdWU9XCIwXCIgLz5cbiAgICAgICAgPC9kbW5kaTpETU5TdHlsZT5cbiAgICAgICAgPGRjOkJvdW5kcyB4PVwiNzYwXCIgeT1cIjM2MFwiIHdpZHRoPVwiMTM1XCIgaGVpZ2h0PVwiNjNcIiAvPlxuICAgICAgICA8ZG1uZGk6RE1OTGFiZWwgLz5cbiAgICAgIDwvZG1uZGk6RE1OU2hhcGU+XG4gICAgICA8ZG1uZGk6RE1OU2hhcGUgaWQ9XCJkbW5zaGFwZS1kcmctXzFDRjVDRUZBLUFGOTctNDZGOS05Q0Q1LTlBOEFFQkIyMEI0RVwiIGRtbkVsZW1lbnRSZWY9XCJfMUNGNUNFRkEtQUY5Ny00NkY5LTlDRDUtOUE4QUVCQjIwQjRFXCIgaXNDb2xsYXBzZWQ9XCJmYWxzZVwiPlxuICAgICAgICA8ZG1uZGk6RE1OU3R5bGU+XG4gICAgICAgICAgPGRtbmRpOkZpbGxDb2xvciByZWQ9XCIyNTVcIiBncmVlbj1cIjI1NVwiIGJsdWU9XCIyNTVcIiAvPlxuICAgICAgICAgIDxkbW5kaTpTdHJva2VDb2xvciByZWQ9XCIwXCIgZ3JlZW49XCIwXCIgYmx1ZT1cIjBcIiAvPlxuICAgICAgICAgIDxkbW5kaTpGb250Q29sb3IgcmVkPVwiMFwiIGdyZWVuPVwiMFwiIGJsdWU9XCIwXCIgLz5cbiAgICAgICAgPC9kbW5kaTpETU5TdHlsZT5cbiAgICAgICAgPGRjOkJvdW5kcyB4PVwiMzE2LjA2MDc0NzY2MzU1MTRcIiB5PVwiMzYxXCIgd2lkdGg9XCIxMzRcIiBoZWlnaHQ9XCI2MVwiIC8+XG4gICAgICAgIDxkbW5kaTpETU5MYWJlbCAvPlxuICAgICAgPC9kbW5kaTpETU5TaGFwZT5cbiAgICAgIDxkbW5kaTpETU5TaGFwZSBpZD1cImRtbnNoYXBlLWRyZy1fRDZGNDIzNEYtMTVCMy00RjVCLUI4MTQtNUY2RkYyOUQyOTA3XCIgZG1uRWxlbWVudFJlZj1cIl9ENkY0MjM0Ri0xNUIzLTRGNUItQjgxNC01RjZGRjI5RDI5MDdcIiBpc0NvbGxhcHNlZD1cImZhbHNlXCI+XG4gICAgICAgIDxkbW5kaTpETU5TdHlsZT5cbiAgICAgICAgICA8ZG1uZGk6RmlsbENvbG9yIHJlZD1cIjI1NVwiIGdyZWVuPVwiMjU1XCIgYmx1ZT1cIjI1NVwiIC8+XG4gICAgICAgICAgPGRtbmRpOlN0cm9rZUNvbG9yIHJlZD1cIjBcIiBncmVlbj1cIjBcIiBibHVlPVwiMFwiIC8+XG4gICAgICAgICAgPGRtbmRpOkZvbnRDb2xvciByZWQ9XCIwXCIgZ3JlZW49XCIwXCIgYmx1ZT1cIjBcIiAvPlxuICAgICAgICA8L2RtbmRpOkRNTlN0eWxlPlxuICAgICAgICA8ZGM6Qm91bmRzIHg9XCIzMTVcIiB5PVwiMjI1XCIgd2lkdGg9XCIxMzZcIiBoZWlnaHQ9XCI2MlwiIC8+XG4gICAgICAgIDxkbW5kaTpETU5MYWJlbCAvPlxuICAgICAgPC9kbW5kaTpETU5TaGFwZT5cbiAgICAgIDxkbW5kaTpETU5TaGFwZSBpZD1cImRtbnNoYXBlLWRyZy1fMkZFNTFEQjEtMzA4My00QkY3LUFBNzEtMEIwMDY1MzEwRTcyXCIgZG1uRWxlbWVudFJlZj1cIl8yRkU1MURCMS0zMDgzLTRCRjctQUE3MS0wQjAwNjUzMTBFNzJcIiBpc0NvbGxhcHNlZD1cImZhbHNlXCI+XG4gICAgICAgIDxkbW5kaTpETU5TdHlsZT5cbiAgICAgICAgICA8ZG1uZGk6RmlsbENvbG9yIHJlZD1cIjI1NVwiIGdyZWVuPVwiMjU1XCIgYmx1ZT1cIjI1NVwiIC8+XG4gICAgICAgICAgPGRtbmRpOlN0cm9rZUNvbG9yIHJlZD1cIjBcIiBncmVlbj1cIjBcIiBibHVlPVwiMFwiIC8+XG4gICAgICAgICAgPGRtbmRpOkZvbnRDb2xvciByZWQ9XCIwXCIgZ3JlZW49XCIwXCIgYmx1ZT1cIjBcIiAvPlxuICAgICAgICA8L2RtbmRpOkRNTlN0eWxlPlxuICAgICAgICA8ZGM6Qm91bmRzIHg9XCI5ODBcIiB5PVwiMjIwXCIgd2lkdGg9XCIxMzZcIiBoZWlnaHQ9XCI2MlwiIC8+XG4gICAgICAgIDxkbW5kaTpETU5MYWJlbCAvPlxuICAgICAgPC9kbW5kaTpETU5TaGFwZT5cbiAgICAgIDxkbW5kaTpETU5TaGFwZSBpZD1cImRtbnNoYXBlLWRyZy1fMjFDNTA3NjMtRTQ5Ri00RDgzLUE4MjQtMTZEQTZBQTg3QzY0XCIgZG1uRWxlbWVudFJlZj1cIl8yMUM1MDc2My1FNDlGLTREODMtQTgyNC0xNkRBNkFBODdDNjRcIiBpc0NvbGxhcHNlZD1cImZhbHNlXCI+XG4gICAgICAgIDxkbW5kaTpETU5TdHlsZT5cbiAgICAgICAgICA8ZG1uZGk6RmlsbENvbG9yIHJlZD1cIjI1NVwiIGdyZWVuPVwiMjU1XCIgYmx1ZT1cIjI1NVwiIC8+XG4gICAgICAgICAgPGRtbmRpOlN0cm9rZUNvbG9yIHJlZD1cIjBcIiBncmVlbj1cIjBcIiBibHVlPVwiMFwiIC8+XG4gICAgICAgICAgPGRtbmRpOkZvbnRDb2xvciByZWQ9XCIwXCIgZ3JlZW49XCIwXCIgYmx1ZT1cIjBcIiAvPlxuICAgICAgICA8L2RtbmRpOkRNTlN0eWxlPlxuICAgICAgICA8ZGM6Qm91bmRzIHg9XCI1MzJcIiB5PVwiODlcIiB3aWR0aD1cIjEzNlwiIGhlaWdodD1cIjYyXCIgLz5cbiAgICAgICAgPGRtbmRpOkRNTkxhYmVsIC8+XG4gICAgICA8L2RtbmRpOkRNTlNoYXBlPlxuICAgICAgPGRtbmRpOkRNTlNoYXBlIGlkPVwiZG1uc2hhcGUtZHJnLV82RTMyMDVBRi03RTNELTRBQkUtQTM2Ny05NkYzRjZFODIxMEVcIiBkbW5FbGVtZW50UmVmPVwiXzZFMzIwNUFGLTdFM0QtNEFCRS1BMzY3LTk2RjNGNkU4MjEwRVwiIGlzQ29sbGFwc2VkPVwiZmFsc2VcIj5cbiAgICAgICAgPGRtbmRpOkRNTlN0eWxlPlxuICAgICAgICAgIDxkbW5kaTpGaWxsQ29sb3IgcmVkPVwiMjU1XCIgZ3JlZW49XCIyNTVcIiBibHVlPVwiMjU1XCIgLz5cbiAgICAgICAgICA8ZG1uZGk6U3Ryb2tlQ29sb3IgcmVkPVwiMFwiIGdyZWVuPVwiMFwiIGJsdWU9XCIwXCIgLz5cbiAgICAgICAgICA8ZG1uZGk6Rm9udENvbG9yIHJlZD1cIjBcIiBncmVlbj1cIjBcIiBibHVlPVwiMFwiIC8+XG4gICAgICAgIDwvZG1uZGk6RE1OU3R5bGU+XG4gICAgICAgIDxkYzpCb3VuZHMgeD1cIjUzMS4xMjE0OTUzMjcxMDI4XCIgeT1cIjM2MFwiIHdpZHRoPVwiMTM0XCIgaGVpZ2h0PVwiNjFcIiAvPlxuICAgICAgICA8ZG1uZGk6RE1OTGFiZWwgLz5cbiAgICAgIDwvZG1uZGk6RE1OU2hhcGU+XG4gICAgICA8ZG1uZGk6RE1OU2hhcGUgaWQ9XCJkbW5zaGFwZS1kcmctX0RBNUNDRjYyLTkwQTgtNENGQy1BMTM3LTk4QjUyODUyMjU4OFwiIGRtbkVsZW1lbnRSZWY9XCJfREE1Q0NGNjItOTBBOC00Q0ZDLUExMzctOThCNTI4NTIyNTg4XCIgaXNDb2xsYXBzZWQ9XCJmYWxzZVwiPlxuICAgICAgICA8ZG1uZGk6RE1OU3R5bGU+XG4gICAgICAgICAgPGRtbmRpOkZpbGxDb2xvciByZWQ9XCIyNTVcIiBncmVlbj1cIjI1NVwiIGJsdWU9XCIyNTVcIiAvPlxuICAgICAgICAgIDxkbW5kaTpTdHJva2VDb2xvciByZWQ9XCIwXCIgZ3JlZW49XCIwXCIgYmx1ZT1cIjBcIiAvPlxuICAgICAgICAgIDxkbW5kaTpGb250Q29sb3IgcmVkPVwiMFwiIGdyZWVuPVwiMFwiIGJsdWU9XCIwXCIgLz5cbiAgICAgICAgPC9kbW5kaTpETU5TdHlsZT5cbiAgICAgICAgPGRjOkJvdW5kcyB4PVwiOTkuMDkzNDU3OTQzOTI1MjRcIiB5PVwiMzU5XCIgd2lkdGg9XCIxMzZcIiBoZWlnaHQ9XCI2M1wiIC8+XG4gICAgICAgIDxkbW5kaTpETU5MYWJlbCAvPlxuICAgICAgPC9kbW5kaTpETU5TaGFwZT5cbiAgICAgIDxkbW5kaTpETU5TaGFwZSBpZD1cImRtbnNoYXBlLWRyZy1fQzk4QkU5MzktQjlDNy00M0UwLTgzRTgtRUU3QTE2QzUyNzZEXCIgZG1uRWxlbWVudFJlZj1cIl9DOThCRTkzOS1COUM3LTQzRTAtODNFOC1FRTdBMTZDNTI3NkRcIiBpc0NvbGxhcHNlZD1cImZhbHNlXCI+XG4gICAgICAgIDxkbW5kaTpETU5TdHlsZT5cbiAgICAgICAgICA8ZG1uZGk6RmlsbENvbG9yIHJlZD1cIjI1NVwiIGdyZWVuPVwiMjU1XCIgYmx1ZT1cIjI1NVwiIC8+XG4gICAgICAgICAgPGRtbmRpOlN0cm9rZUNvbG9yIHJlZD1cIjBcIiBncmVlbj1cIjBcIiBibHVlPVwiMFwiIC8+XG4gICAgICAgICAgPGRtbmRpOkZvbnRDb2xvciByZWQ9XCIwXCIgZ3JlZW49XCIwXCIgYmx1ZT1cIjBcIiAvPlxuICAgICAgICA8L2RtbmRpOkRNTlN0eWxlPlxuICAgICAgICA8ZGM6Qm91bmRzIHg9XCI3NjBcIiB5PVwiMjIwXCIgd2lkdGg9XCIxMzRcIiBoZWlnaHQ9XCI2NVwiIC8+XG4gICAgICAgIDxkbW5kaTpETU5MYWJlbCAvPlxuICAgICAgPC9kbW5kaTpETU5TaGFwZT5cbiAgICAgIDxkbW5kaTpETU5FZGdlIGlkPVwiZG1uZWRnZS1kcmctXzg5RUVBRjlGLTVBNUQtNEY1OS05MUI3LUVBNDE4QTcyMjlBRlwiIGRtbkVsZW1lbnRSZWY9XCJfODlFRUFGOUYtNUE1RC00RjU5LTkxQjctRUE0MThBNzIyOUFGXCI+XG4gICAgICAgIDxkaTp3YXlwb2ludCB4PVwiMzgzLjA2MDc0NzY2MzU1MTRcIiB5PVwiMzYxXCIgLz5cbiAgICAgICAgPGRpOndheXBvaW50IHg9XCI1OTlcIiB5PVwiMjg3XCIgLz5cbiAgICAgIDwvZG1uZGk6RE1ORWRnZT5cbiAgICAgIDxkbW5kaTpETU5FZGdlIGlkPVwiZG1uZWRnZS1kcmctXzg3NzMwQzVBLTU2NDgtNDE1Qi05MTg5LUVGNEQ4ODA1RjhDOVwiIGRtbkVsZW1lbnRSZWY9XCJfODc3MzBDNUEtNTY0OC00MTVCLTkxODktRUY0RDg4MDVGOEM5XCI+XG4gICAgICAgIDxkaTp3YXlwb2ludCB4PVwiNTk4LjEyMTQ5NTMyNzEwMjhcIiB5PVwiMzkwLjVcIiAvPlxuICAgICAgICA8ZGk6d2F5cG9pbnQgeD1cIjU5OVwiIHk9XCIyODdcIiAvPlxuICAgICAgPC9kbW5kaTpETU5FZGdlPlxuICAgICAgPGRtbmRpOkRNTkVkZ2UgaWQ9XCJkbW5lZGdlLWRyZy1fNjNERTdDM0ItQTc2Ny00QjhBLUEwOTgtOTFFQ0I0QjhEMzMwXCIgZG1uRWxlbWVudFJlZj1cIl82M0RFN0MzQi1BNzY3LTRCOEEtQTA5OC05MUVDQjRCOEQzMzBcIj5cbiAgICAgICAgPGRpOndheXBvaW50IHg9XCI4MjcuNVwiIHk9XCIzNjBcIiAvPlxuICAgICAgICA8ZGk6d2F5cG9pbnQgeD1cIjU5OVwiIHk9XCIyODdcIiAvPlxuICAgICAgPC9kbW5kaTpETU5FZGdlPlxuICAgICAgPGRtbmRpOkRNTkVkZ2UgaWQ9XCJkbW5lZGdlLWRyZy1fMkM5NTgyOUQtRkNGOS00NEY1LThGNUEtMEE2Q0RCNjA2MDBEXCIgZG1uRWxlbWVudFJlZj1cIl8yQzk1ODI5RC1GQ0Y5LTQ0RjUtOEY1QS0wQTZDREI2MDYwMERcIj5cbiAgICAgICAgPGRpOndheXBvaW50IHg9XCI4MjdcIiB5PVwiMjUyLjVcIiAvPlxuICAgICAgICA8ZGk6d2F5cG9pbnQgeD1cIjY2N1wiIHk9XCIyNTZcIiAvPlxuICAgICAgPC9kbW5kaTpETU5FZGdlPlxuICAgICAgPGRtbmRpOkRNTkVkZ2UgaWQ9XCJkbW5lZGdlLWRyZy1fNzdCQTQwOUItRTAwRC00RkJDLUI1MjItOEY2NTZENEY2RjBFXCIgZG1uRWxlbWVudFJlZj1cIl83N0JBNDA5Qi1FMDBELTRGQkMtQjUyMi04RjY1NkQ0RjZGMEVcIj5cbiAgICAgICAgPGRpOndheXBvaW50IHg9XCIzODMuMDYwNzQ3NjYzNTUxNFwiIHk9XCIzOTEuNVwiIC8+XG4gICAgICAgIDxkaTp3YXlwb2ludCB4PVwiMzgzXCIgeT1cIjI4N1wiIC8+XG4gICAgICA8L2RtbmRpOkRNTkVkZ2U+XG4gICAgICA8ZG1uZGk6RE1ORWRnZSBpZD1cImRtbmVkZ2UtZHJnLV80RDQ0MUMxMS03MDQyLTQ5Q0YtQTQyQy0xN0E0MzQ4QTdGMjlcIiBkbW5FbGVtZW50UmVmPVwiXzRENDQxQzExLTcwNDItNDlDRi1BNDJDLTE3QTQzNDhBN0YyOVwiPlxuICAgICAgICA8ZGk6d2F5cG9pbnQgeD1cIjE2Ny4wOTM0NTc5NDM5MjUyNFwiIHk9XCIyNTUuMTcxMDUyNjMxNTc4OTZcIiAvPlxuICAgICAgICA8ZGk6d2F5cG9pbnQgeD1cIjMxNVwiIHk9XCIyNTZcIiAvPlxuICAgICAgPC9kbW5kaTpETU5FZGdlPlxuICAgICAgPGRtbmRpOkRNTkVkZ2UgaWQ9XCJkbW5lZGdlLWRyZy1fMzIxN0Q2NTUtNDQ4NC00NzMzLUE5QUUtNEY5Q0YzMEQ5OTI0XCIgZG1uRWxlbWVudFJlZj1cIl8zMjE3RDY1NS00NDg0LTQ3MzMtQTlBRS00RjlDRjMwRDk5MjRcIj5cbiAgICAgICAgPGRpOndheXBvaW50IHg9XCIxNjcuMDkzNDU3OTQzOTI1MjRcIiB5PVwiMzU5XCIgLz5cbiAgICAgICAgPGRpOndheXBvaW50IHg9XCIzODNcIiB5PVwiMjg3XCIgLz5cbiAgICAgIDwvZG1uZGk6RE1ORWRnZT5cbiAgICAgIDxkbW5kaTpETU5FZGdlIGlkPVwiZG1uZWRnZS1kcmctXzMxQTFCNkIyLUEyQTYtNEUwMy1CODk4LTI2NTczQTVDRjNCQVwiIGRtbkVsZW1lbnRSZWY9XCJfMzFBMUI2QjItQTJBNi00RTAzLUI4OTgtMjY1NzNBNUNGM0JBXCI+XG4gICAgICAgIDxkaTp3YXlwb2ludCB4PVwiMTA0N1wiIHk9XCIzOTAuNVwiIC8+XG4gICAgICAgIDxkaTp3YXlwb2ludCB4PVwiMTA0OFwiIHk9XCIyODJcIiAvPlxuICAgICAgPC9kbW5kaTpETU5FZGdlPlxuICAgICAgPGRtbmRpOkRNTkVkZ2UgaWQ9XCJkbW5lZGdlLWRyZy1fMEI5OTJGMDEtQkE3Ny00RjA2LUE4MzAtRDg5NDhCNDY3MjcyXCIgZG1uRWxlbWVudFJlZj1cIl8wQjk5MkYwMS1CQTc3LTRGMDYtQTgzMC1EODk0OEI0NjcyNzJcIj5cbiAgICAgICAgPGRpOndheXBvaW50IHg9XCI1OTlcIiB5PVwiMjU2XCIgLz5cbiAgICAgICAgPGRpOndheXBvaW50IHg9XCI2MDBcIiB5PVwiMTUxXCIgLz5cbiAgICAgIDwvZG1uZGk6RE1ORWRnZT5cbiAgICAgIDxkbW5kaTpETU5FZGdlIGlkPVwiZG1uZWRnZS1kcmctX0I2MDAyRjMzLTQ4ODgtNDhDNS1CMjY1LTYzNjAzMEY4QzJEQ1wiIGRtbkVsZW1lbnRSZWY9XCJfQjYwMDJGMzMtNDg4OC00OEM1LUIyNjUtNjM2MDMwRjhDMkRDXCIgc291cmNlRWxlbWVudD1cImRtbnNoYXBlLWRyZy1fMkZFNTFEQjEtMzA4My00QkY3LUFBNzEtMEIwMDY1MzEwRTcyXCIgdGFyZ2V0RWxlbWVudD1cImRtbnNoYXBlLWRyZy1fMjFDNTA3NjMtRTQ5Ri00RDgzLUE4MjQtMTZEQTZBQTg3QzY0XCI+XG4gICAgICAgIDxkaTp3YXlwb2ludCB4PVwiMTA0OFwiIHk9XCIyMjBcIiAvPlxuICAgICAgICA8ZGk6d2F5cG9pbnQgeD1cIjYwMFwiIHk9XCIxNTFcIiAvPlxuICAgICAgPC9kbW5kaTpETU5FZGdlPlxuICAgICAgPGRtbmRpOkRNTkVkZ2UgaWQ9XCJkbW5lZGdlLWRyZy1fQTNFOTVCMzItMkVGRC00MEFELUI1RTQtMEE3M0ExNTQyMDExXCIgZG1uRWxlbWVudFJlZj1cIl9BM0U5NUIzMi0yRUZELTQwQUQtQjVFNC0wQTczQTE1NDIwMTFcIiBzb3VyY2VFbGVtZW50PVwiZG1uc2hhcGUtZHJnLV9ENkY0MjM0Ri0xNUIzLTRGNUItQjgxNC01RjZGRjI5RDI5MDdcIiB0YXJnZXRFbGVtZW50PVwiZG1uc2hhcGUtZHJnLV8yMUM1MDc2My1FNDlGLTREODMtQTgyNC0xNkRBNkFBODdDNjRcIj5cbiAgICAgICAgPGRpOndheXBvaW50IHg9XCIzODNcIiB5PVwiMjI1XCIgLz5cbiAgICAgICAgPGRpOndheXBvaW50IHg9XCI2MDBcIiB5PVwiMTUxXCIgLz5cbiAgICAgIDwvZG1uZGk6RE1ORWRnZT5cbiAgICA8L2RtbmRpOkRNTkRpYWdyYW0+XG4gIDwvZG1uZGk6RE1OREk+XG4gIDxkbW46aW1wb3J0IGlkPVwiX0U0NTYyNjA4LUIxNEMtNDg0NS1BNEMzLTZDMUExRkJDMDIxOVwiIG5hbWU9XCJzdW1Ca21cIiBpbXBvcnRUeXBlPVwiaHR0cHM6Ly93d3cub21nLm9yZy9zcGVjL0RNTi8yMDIzMDMyNC9NT0RFTC9cIiBuYW1lc3BhY2U9XCJodHRwczovL2tpZS5hcGFjaGUub3JnL2Rtbi9fOTIzNzg0QkQtQ0QzMS00ODhBLTlDMzEtQzFBODNDNTQ4M0MwXCIgLz5cbiAgPGRtbjppbXBvcnQgaWQ9XCJfQzcyNkE4MjQtOTM0OS00Q0Y4LTkxRkEtRjk2OTI1MEM4NDIxXCIgbmFtZT1cInN1bURpZmZEc1wiIGltcG9ydFR5cGU9XCJodHRwczovL3d3dy5vbWcub3JnL3NwZWMvRE1OLzIwMjMwMzI0L01PREVML1wiIG5hbWVzcGFjZT1cImh0dHBzOi8va2llLmFwYWNoZS5vcmcvZG1uL19EMTlCMDAxNS0yQ0JELTRCQTgtODRBOS01RjU1NEQ4NEE5RTFcIiAvPlxuICA8ZG1uOmltcG9ydCBpZD1cIl84N0NERDYwMC03NTY0LUNGODctNTQ3RS1BOEI4NzZDRDA4MTJcIiBuYW1lPVwidGVzdFRyZWVQbW1sXCIgaW1wb3J0VHlwZT1cImh0dHBzOi8vd3d3LmRtZy5vcmcvUE1NTC00XzJcIiBuYW1lc3BhY2U9XCJodHRwczovL2tpZS5vcmcvcG1tbCNwbGF5Z3JvdW5kL2F2YWlsYWJsZS1tb2RlbHMtdG8taW5jbHVkZS90ZXN0VHJlZS5wbW1sXCIgLz5cbjwvZG1uOmRlZmluaXRpb25zPlxuYDtcbmNvbnN0IG1ldGE6IE1ldGE8RG1uRWRpdG9yUHJvcHM+ID0ge1xuICB0aXRsZTogXCJVc2UgY2FzZXMvTG9hbiBQcmUgUXVhbGlmaWNhdGlvblwiLFxuICBjb21wb25lbnQ6IERtbkVkaXRvcixcbiAgaW5jbHVkZVN0b3JpZXM6IC9eW0EtWl0vXG59O1xuZXhwb3J0IGRlZmF1bHQgbWV0YTtcbnR5cGUgU3RvcnkgPSBTdG9yeU9iajxTdG9yeWJvb2tEbW5FZGl0b3JQcm9wcz47XG5jb25zdCBtYXJzaGFsbGVyID0gZ2V0TWFyc2hhbGxlcihsb2FuUHJlUXVhbGlmaWNhdGlvbkRtbiwge1xuICB1cGdyYWRlVG86IFwibGF0ZXN0XCJcbn0pO1xuY29uc3QgbW9kZWwgPSBtYXJzaGFsbGVyLnBhcnNlci5wYXJzZSgpO1xuZXhwb3J0IGNvbnN0IExvYW5QcmVRdWFsaWZpY2F0aW9uOiBTdG9yeSA9IHtcbiAgcmVuZGVyOiBFbXB0eS5yZW5kZXIsXG4gIGFyZ3M6IHtcbiAgICBtb2RlbDogbW9kZWwsXG4gICAgeG1sOiBtYXJzaGFsbGVyLmJ1aWxkZXIuYnVpbGQobW9kZWwpXG4gIH1cbn07XG5Mb2FuUHJlUXVhbGlmaWNhdGlvbi5wYXJhbWV0ZXJzID0ge1xuICAuLi5Mb2FuUHJlUXVhbGlmaWNhdGlvbi5wYXJhbWV0ZXJzLFxuICBkb2NzOiB7XG4gICAgLi4uTG9hblByZVF1YWxpZmljYXRpb24ucGFyYW1ldGVycz8uZG9jcyxcbiAgICBzb3VyY2U6IHtcbiAgICAgIG9yaWdpbmFsU291cmNlOiBcIntcXG4gIHJlbmRlcjogRW1wdHkucmVuZGVyLFxcbiAgYXJnczoge1xcbiAgICBtb2RlbDogbW9kZWwsXFxuICAgIHhtbDogbWFyc2hhbGxlci5idWlsZGVyLmJ1aWxkKG1vZGVsKVxcbiAgfVxcbn1cIixcbiAgICAgIC4uLkxvYW5QcmVRdWFsaWZpY2F0aW9uLnBhcmFtZXRlcnM/LmRvY3M/LnNvdXJjZVxuICAgIH1cbiAgfVxufTsiLCIvKlxuICogTGljZW5zZWQgdG8gdGhlIEFwYWNoZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIChBU0YpIHVuZGVyIG9uZVxuICogb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuICBTZWUgdGhlIE5PVElDRSBmaWxlXG4gKiBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvblxuICogcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuICBUaGUgQVNGIGxpY2Vuc2VzIHRoaXMgZmlsZVxuICogdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZVxuICogXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4gKiB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZyxcbiAqIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXG4gKiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxuICogS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlXG4gKiBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zXG4gKiB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VNZW1vLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUFyZ3MgfSBmcm9tIFwiQHN0b3J5Ym9vay9wcmV2aWV3LWFwaVwiO1xuaW1wb3J0IHtcbiAgRG1uRWRpdG9yLFxuICBEbW5FZGl0b3JQcm9wcyxcbiAgRG1uRWRpdG9yUmVmLFxuICBFdmFsdWF0aW9uUmVzdWx0c0J5Tm9kZUlkLFxuICBWYWxpZGF0aW9uTWVzc2FnZXMsXG59IGZyb20gXCIuLi9zcmMvRG1uRWRpdG9yXCI7XG5pbXBvcnQgeyBEbW5MYXRlc3RNb2RlbCwgZ2V0TWFyc2hhbGxlciB9IGZyb20gXCJAa2llLXRvb2xzL2Rtbi1tYXJzaGFsbGVyXCI7XG5pbXBvcnQgeyBub3JtYWxpemUgfSBmcm9tIFwiQGtpZS10b29scy9kbW4tbWFyc2hhbGxlci9kaXN0L25vcm1hbGl6YXRpb24vbm9ybWFsaXplXCI7XG5pbXBvcnQgeyBkaWZmIH0gZnJvbSBcImRlZXAtb2JqZWN0LWRpZmZcIjtcbmltcG9ydCB7IGdlbmVyYXRlRW1wdHlEbW4xNSB9IGZyb20gXCIuL21pc2MvZW1wdHkvRW1wdHkuc3Rvcmllc1wiO1xuXG5leHBvcnQgY29uc3QgZXZhbHVhdGlvblJlc3VsdHNCeU5vZGVJZDogRXZhbHVhdGlvblJlc3VsdHNCeU5vZGVJZCA9IG5ldyBNYXAoKTtcbmV4cG9ydCBjb25zdCB2YWxpZGF0aW9uTWVzc2FnZXM6IFZhbGlkYXRpb25NZXNzYWdlcyA9IHt9O1xuXG5leHBvcnQgdHlwZSBTdG9yeWJvb2tEbW5FZGl0b3JQcm9wcyA9IERtbkVkaXRvclByb3BzICYgeyB4bWw6IHN0cmluZyB9O1xuXG5leHBvcnQgZnVuY3Rpb24gRG1uRWRpdG9yV3JhcHBlcihwcm9wcz86IFBhcnRpYWw8U3Rvcnlib29rRG1uRWRpdG9yUHJvcHM+KSB7XG4gIGNvbnN0IFthcmdzLCB1cGRhdGVBcmdzXSA9IHVzZUFyZ3M8U3Rvcnlib29rRG1uRWRpdG9yUHJvcHM+KCk7XG4gIGNvbnN0IGFyZ3NDb3B5ID0gdXNlUmVmKGFyZ3MpO1xuICBjb25zdCByZWYgPSB1c2VSZWY8RG1uRWRpdG9yUmVmPihudWxsKTtcbiAgY29uc3QgW21vZGVsQXJncywgc2V0TW9kZWxBcmdzXSA9IHVzZVN0YXRlPERtbkxhdGVzdE1vZGVsPihhcmdzLm1vZGVsKTtcbiAgY29uc3QgbW9kZWwgPSB1c2VNZW1vKCgpID0+IHByb3BzPy5tb2RlbCA/PyBtb2RlbEFyZ3MsIFttb2RlbEFyZ3MsIHByb3BzPy5tb2RlbF0pO1xuICBjb25zdCBbbW9kZWxDaGFuZ2VkLCBzZXRNb2RlbENoYW5nZV0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IFtpc1JlYWRPbmx5LCBzZXRJc1JlYWRPbmx5XSA9IHVzZVN0YXRlKHByb3BzPy5pc1JlYWRPbmx5ID8/IGFyZ3MuaXNSZWFkT25seSA/PyBmYWxzZSk7XG5cbiAgY29uc3Qgb25Nb2RlbENoYW5nZSA9IHVzZU1lbW8oXG4gICAgKCkgPT4gKHByb3BzPy5vbk1vZGVsQ2hhbmdlID8gcHJvcHMub25Nb2RlbENoYW5nZSA6IHNldE1vZGVsQXJncyksXG4gICAgW3Byb3BzPy5vbk1vZGVsQ2hhbmdlXVxuICApO1xuXG4gIGNvbnN0IG9uT3BlbmVkQm94ZWRFeHByZXNzaW9uRWRpdG9yTm9kZUNoYW5nZU5vT3BlcmF0aW9uID0gdXNlTWVtbyhcbiAgICAoKSA9PiAobmV3T3BlbmVkTm9kZUlkOiBzdHJpbmcgfCB1bmRlZmluZWQpID0+IHt9LFxuICAgIFtdXG4gICk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoYXJncy5pc1JlYWRPbmx5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHNldElzUmVhZE9ubHkoYXJncy5pc1JlYWRPbmx5KTtcbiAgICB9XG4gIH0sIFthcmdzLmlzUmVhZE9ubHldKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChPYmplY3Qua2V5cyhkaWZmKGFyZ3NDb3B5LmN1cnJlbnQubW9kZWwsIG1vZGVsKSkubGVuZ3RoICE9PSAwKSB7XG4gICAgICB1cGRhdGVBcmdzKHtcbiAgICAgICAgLi4uYXJnc0NvcHkuY3VycmVudCxcbiAgICAgICAgbW9kZWw6IG1vZGVsLFxuICAgICAgICB4bWw6IGdldE1hcnNoYWxsZXIoZ2VuZXJhdGVFbXB0eURtbjE1KCksIHsgdXBncmFkZVRvOiBcImxhdGVzdFwiIH0pLmJ1aWxkZXIuYnVpbGQobW9kZWwpLFxuICAgICAgfSk7XG4gICAgfVxuICB9LCBbdXBkYXRlQXJncywgbW9kZWxdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChPYmplY3Qua2V5cyhkaWZmKGFyZ3NDb3B5LmN1cnJlbnQsIGFyZ3MpKS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgYXJnc0NvcHkuY3VycmVudCA9IGFyZ3M7XG4gICAgaWYgKE9iamVjdC5rZXlzKGRpZmYoYXJncy5tb2RlbCwgbW9kZWwpKS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgb25Nb2RlbENoYW5nZShub3JtYWxpemUoYXJncy5tb2RlbCkpO1xuICB9LCBbYXJncywgbW9kZWwsIG9uTW9kZWxDaGFuZ2VdKTtcblxuICBjb25zdCBvbk1vZGVsRGVib3VuY2VTdGF0ZUNoYW5nZWQgPSB1c2VDYWxsYmFjaygoY2hhbmdlZDogYm9vbGVhbikgPT4ge1xuICAgIHNldE1vZGVsQ2hhbmdlKGNoYW5nZWQpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge21vZGVsQ2hhbmdlZCAmJiAoXG4gICAgICAgIDxkaXYgZGF0YS10ZXN0aWQ9e1wic3Rvcnlib29rLS1kbW4tZWRpdG9yLW1vZGVsXCJ9IHN0eWxlPXt7IGRpc3BsYXk6IFwibm9uZVwiIH19PlxuICAgICAgICAgIHtKU09OLnN0cmluZ2lmeShtb2RlbCl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgIDxidXR0b25cbiAgICAgICAgZGF0YS10ZXN0aWQ9e1wic3Rvcnlib29rLS1kbW4tZWRpdG9yLXRvZ2dsZS1yZWFkLW9ubHlcIn1cbiAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX1cbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNSZWFkT25seSgoY3VycmVudFZhbHVlKSA9PiAhY3VycmVudFZhbHVlKX1cbiAgICAgID5cbiAgICAgICAge2lzUmVhZE9ubHkudG9TdHJpbmcoKX1cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLCB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIsIHRvcDogXCIwcHhcIiwgbGVmdDogXCIwcHhcIiB9fT5cbiAgICAgICAgPERtbkVkaXRvclxuICAgICAgICAgIHJlZj17cmVmfVxuICAgICAgICAgIG1vZGVsPXttb2RlbH1cbiAgICAgICAgICBvcmlnaW5hbFZlcnNpb249e3Byb3BzPy5vcmlnaW5hbFZlcnNpb24gPz8gYXJncy5vcmlnaW5hbFZlcnNpb259XG4gICAgICAgICAgaXNSZWFkT25seT17aXNSZWFkT25seX1cbiAgICAgICAgICBvbk1vZGVsQ2hhbmdlPXtvbk1vZGVsQ2hhbmdlfVxuICAgICAgICAgIG9uT3BlbmVkQm94ZWRFeHByZXNzaW9uRWRpdG9yTm9kZUNoYW5nZT17b25PcGVuZWRCb3hlZEV4cHJlc3Npb25FZGl0b3JOb2RlQ2hhbmdlTm9PcGVyYXRpb259XG4gICAgICAgICAgb25SZXF1ZXN0RXh0ZXJuYWxNb2RlbEJ5UGF0aD17cHJvcHM/Lm9uUmVxdWVzdEV4dGVybmFsTW9kZWxCeVBhdGggPz8gYXJncy5vblJlcXVlc3RFeHRlcm5hbE1vZGVsQnlQYXRofVxuICAgICAgICAgIG9uUmVxdWVzdEV4dGVybmFsTW9kZWxzQXZhaWxhYmxlVG9JbmNsdWRlPXtcbiAgICAgICAgICAgIHByb3BzPy5vblJlcXVlc3RFeHRlcm5hbE1vZGVsc0F2YWlsYWJsZVRvSW5jbHVkZSA/PyBhcmdzLm9uUmVxdWVzdEV4dGVybmFsTW9kZWxzQXZhaWxhYmxlVG9JbmNsdWRlXG4gICAgICAgICAgfVxuICAgICAgICAgIGV4dGVybmFsTW9kZWxzQnlOYW1lc3BhY2U9e3Byb3BzPy5leHRlcm5hbE1vZGVsc0J5TmFtZXNwYWNlID8/IGFyZ3MuZXh0ZXJuYWxNb2RlbHNCeU5hbWVzcGFjZX1cbiAgICAgICAgICBleHRlcm5hbENvbnRleHROYW1lPXtwcm9wcz8uZXh0ZXJuYWxDb250ZXh0TmFtZSA/PyBhcmdzLmV4dGVybmFsQ29udGV4dE5hbWV9XG4gICAgICAgICAgZXh0ZXJuYWxDb250ZXh0RGVzY3JpcHRpb249e3Byb3BzPy5leHRlcm5hbENvbnRleHREZXNjcmlwdGlvbiA/PyBhcmdzLmV4dGVybmFsQ29udGV4dERlc2NyaXB0aW9ufVxuICAgICAgICAgIHZhbGlkYXRpb25NZXNzYWdlcz17cHJvcHM/LnZhbGlkYXRpb25NZXNzYWdlcyA/PyBhcmdzLnZhbGlkYXRpb25NZXNzYWdlc31cbiAgICAgICAgICBldmFsdWF0aW9uUmVzdWx0c0J5Tm9kZUlkPXtwcm9wcz8uZXZhbHVhdGlvblJlc3VsdHNCeU5vZGVJZCA/PyBhcmdzLmV2YWx1YXRpb25SZXN1bHRzQnlOb2RlSWR9XG4gICAgICAgICAgaXNzdWVUcmFja2VySHJlZj17cHJvcHM/Lmlzc3VlVHJhY2tlckhyZWYgPz8gYXJncy5pc3N1ZVRyYWNrZXJIcmVmfVxuICAgICAgICAgIG9uUmVxdWVzdFRvSnVtcFRvUGF0aD17cHJvcHM/Lm9uUmVxdWVzdFRvSnVtcFRvUGF0aCA/PyBhcmdzLm9uUmVxdWVzdFRvSnVtcFRvUGF0aH1cbiAgICAgICAgICBvbk1vZGVsRGVib3VuY2VTdGF0ZUNoYW5nZWQ9e29uTW9kZWxEZWJvdW5jZVN0YXRlQ2hhbmdlZH1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuIiwiaW1wb3J0IHsgaXNEYXRlLCBpc0VtcHR5T2JqZWN0LCBpc09iamVjdCwgaGFzT3duUHJvcGVydHksIG1ha2VPYmplY3RXaXRob3V0UHJvdG90eXBlIH0gZnJvbSAnLi91dGlscy5qcyc7XG5cbmNvbnN0IGRpZmYgPSAobGhzLCByaHMpID0+IHtcbiAgaWYgKGxocyA9PT0gcmhzKSByZXR1cm4ge307IC8vIGVxdWFsIHJldHVybiBubyBkaWZmXG5cbiAgaWYgKCFpc09iamVjdChsaHMpIHx8ICFpc09iamVjdChyaHMpKSByZXR1cm4gcmhzOyAvLyByZXR1cm4gdXBkYXRlZCByaHNcblxuICBjb25zdCBkZWxldGVkVmFsdWVzID0gT2JqZWN0LmtleXMobGhzKS5yZWR1Y2UoKGFjYywga2V5KSA9PiB7XG4gICAgaWYgKCFoYXNPd25Qcm9wZXJ0eShyaHMsIGtleSkpIHtcbiAgICAgIGFjY1trZXldID0gdW5kZWZpbmVkO1xuICAgICAgXG4gICAgfVxuXG4gICAgcmV0dXJuIGFjYztcbiAgfSwgbWFrZU9iamVjdFdpdGhvdXRQcm90b3R5cGUoKSk7XG5cbiAgaWYgKGlzRGF0ZShsaHMpIHx8IGlzRGF0ZShyaHMpKSB7XG4gICAgaWYgKGxocy52YWx1ZU9mKCkgPT0gcmhzLnZhbHVlT2YoKSkgcmV0dXJuIHt9O1xuICAgIHJldHVybiByaHM7XG4gIH1cblxuICByZXR1cm4gT2JqZWN0LmtleXMocmhzKS5yZWR1Y2UoKGFjYywga2V5KSA9PiB7XG4gICAgaWYgKCFoYXNPd25Qcm9wZXJ0eShsaHMsIGtleSkpe1xuICAgICAgYWNjW2tleV0gPSByaHNba2V5XTsgLy8gcmV0dXJuIGFkZGVkIHIga2V5XG4gICAgICByZXR1cm4gYWNjO1xuICAgIH0gXG5cbiAgICBjb25zdCBkaWZmZXJlbmNlID0gZGlmZihsaHNba2V5XSwgcmhzW2tleV0pO1xuXG4gICAgLy8gSWYgdGhlIGRpZmZlcmVuY2UgaXMgZW1wdHksIGFuZCB0aGUgbGhzIGlzIGFuIGVtcHR5IG9iamVjdCBvciB0aGUgcmhzIGlzIG5vdCBhbiBlbXB0eSBvYmplY3RcbiAgICBpZiAoaXNFbXB0eU9iamVjdChkaWZmZXJlbmNlKSAmJiAhaXNEYXRlKGRpZmZlcmVuY2UpICYmIChpc0VtcHR5T2JqZWN0KGxoc1trZXldKSB8fCAhaXNFbXB0eU9iamVjdChyaHNba2V5XSkpKVxuICAgICAgcmV0dXJuIGFjYzsgLy8gcmV0dXJuIG5vIGRpZmZcblxuICAgIGFjY1trZXldID0gZGlmZmVyZW5jZSAvLyByZXR1cm4gdXBkYXRlZCBrZXlcbiAgICByZXR1cm4gYWNjOyAvLyByZXR1cm4gdXBkYXRlZCBrZXlcbiAgfSwgZGVsZXRlZFZhbHVlcyk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkaWZmO1xuIiwiZXhwb3J0IGNvbnN0IGlzRGF0ZSA9IGQgPT4gZCBpbnN0YW5jZW9mIERhdGU7XG5leHBvcnQgY29uc3QgaXNFbXB0eSA9IG8gPT4gT2JqZWN0LmtleXMobykubGVuZ3RoID09PSAwO1xuZXhwb3J0IGNvbnN0IGlzT2JqZWN0ID0gbyA9PiBvICE9IG51bGwgJiYgdHlwZW9mIG8gPT09ICdvYmplY3QnO1xuZXhwb3J0IGNvbnN0IGhhc093blByb3BlcnR5ID0gKG8sIC4uLmFyZ3MpID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvLCAuLi5hcmdzKVxuZXhwb3J0IGNvbnN0IGlzRW1wdHlPYmplY3QgPSAobykgPT4gaXNPYmplY3QobykgJiYgaXNFbXB0eShvKTtcbmV4cG9ydCBjb25zdCBtYWtlT2JqZWN0V2l0aG91dFByb3RvdHlwZSA9ICgpID0+IE9iamVjdC5jcmVhdGUobnVsbCk7XG4iXSwibmFtZXMiOlsiZ2V0TWFyc2hhbGxlciIsIm5zIiwiZG1uMTVucyIsImdlbmVyYXRlVXVpZCIsIkRNTjE1X1NQRUMiLCJEbW5FZGl0b3JXcmFwcGVyIiwiRG1uRWRpdG9yIiwiZ2VuZXJhdGVFbXB0eURtbjE1IiwiZ2V0IiwiZXhwcmVzc2lvbkxhbmd1YWdlIiwiZGVmYXVsdCIsIm1ldGEiLCJ0aXRsZSIsImNvbXBvbmVudCIsImluY2x1ZGVTdG9yaWVzIiwibWFyc2hhbGxlciIsInVwZ3JhZGVUbyIsIm1vZGVsIiwicGFyc2VyIiwicGFyc2UiLCJFbXB0eSIsInJlbmRlciIsImFyZ3MiLCJvcmlnaW5hbFZlcnNpb24iLCJldmFsdWF0aW9uUmVzdWx0c0J5Tm9kZUlkIiwiTWFwIiwiZXh0ZXJuYWxDb250ZXh0RGVzY3JpcHRpb24iLCJleHRlcm5hbENvbnRleHROYW1lIiwiZXh0ZXJuYWxNb2RlbHNCeU5hbWVzcGFjZSIsImlzc3VlVHJhY2tlckhyZWYiLCJ2YWxpZGF0aW9uTWVzc2FnZXMiLCJpc1JlYWRPbmx5IiwieG1sIiwiYnVpbGRlciIsImJ1aWxkIiwicGFyYW1ldGVycyIsImRvY3MiLCJfYSIsInNvdXJjZSIsIm9yaWdpbmFsU291cmNlIiwiX2MiLCJfYiIsIl9fbmFtZWRFeHBvcnRzT3JkZXIiLCJsb2FuUHJlUXVhbGlmaWNhdGlvbkRtbiIsIkxvYW5QcmVRdWFsaWZpY2F0aW9uIiwidXNlQ2FsbGJhY2siLCJ1c2VTdGF0ZSIsInVzZVJlZiIsInVzZU1lbW8iLCJ1c2VFZmZlY3QiLCJ1c2VBcmdzIiwibm9ybWFsaXplIiwiZGlmZiIsInByb3BzIiwidXBkYXRlQXJncyIsImFyZ3NDb3B5IiwicmVmIiwibW9kZWxBcmdzIiwic2V0TW9kZWxBcmdzIiwibW9kZWxDaGFuZ2VkIiwic2V0TW9kZWxDaGFuZ2UiLCJzZXRJc1JlYWRPbmx5Iiwib25Nb2RlbENoYW5nZSIsIm9uT3BlbmVkQm94ZWRFeHByZXNzaW9uRWRpdG9yTm9kZUNoYW5nZU5vT3BlcmF0aW9uIiwibmV3T3BlbmVkTm9kZUlkIiwidW5kZWZpbmVkIiwiT2JqZWN0Iiwia2V5cyIsImN1cnJlbnQiLCJsZW5ndGgiLCJvbk1vZGVsRGVib3VuY2VTdGF0ZUNoYW5nZWQiLCJjaGFuZ2VkIiwiX2pzeHMiLCJfRnJhZ21lbnQiLCJjaGlsZHJlbiIsIl9qc3giLCJzdHlsZSIsImRpc3BsYXkiLCJKU09OIiwic3RyaW5naWZ5Iiwib25DbGljayIsImN1cnJlbnRWYWx1ZSIsInRvU3RyaW5nIiwicG9zaXRpb24iLCJ3aWR0aCIsImhlaWdodCIsInRvcCIsImxlZnQiLCJvbk9wZW5lZEJveGVkRXhwcmVzc2lvbkVkaXRvck5vZGVDaGFuZ2UiLCJvblJlcXVlc3RFeHRlcm5hbE1vZGVsQnlQYXRoIiwiX2QiLCJvblJlcXVlc3RFeHRlcm5hbE1vZGVsc0F2YWlsYWJsZVRvSW5jbHVkZSIsIl9lIiwiX2YiLCJfZyIsIl9oIiwiX2oiLCJfayIsIl9sIiwib25SZXF1ZXN0VG9KdW1wVG9QYXRoIiwiX20iXSwic291cmNlUm9vdCI6IiJ9