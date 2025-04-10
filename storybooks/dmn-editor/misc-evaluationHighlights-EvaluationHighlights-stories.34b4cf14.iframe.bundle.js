"use strict";
(self["webpackChunk_kie_tools_dmn_editor"] = self["webpackChunk_kie_tools_dmn_editor"] || []).push([["misc-evaluationHighlights-EvaluationHighlights-stories"],{

/***/ "./stories/misc/evaluationHighlights/EvaluationHighlights.stories.tsx":
/*!****************************************************************************!*\
  !*** ./stories/misc/evaluationHighlights/EvaluationHighlights.stories.tsx ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EvaluationHighlightsStory: () => (/* binding */ EvaluationHighlightsStory),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _kie_tools_dmn_marshaller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @kie-tools/dmn-marshaller */ "../dmn-marshaller/dist/index.js");
/* harmony import */ var _kie_tools_dmn_editor_dist_DmnEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @kie-tools/dmn-editor/dist/DmnEditor */ "./dist/DmnEditor.js");
/* harmony import */ var _kie_tools_dmn_marshaller_dist_normalization_normalize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @kie-tools/dmn-marshaller/dist/normalization/normalize */ "../dmn-marshaller/dist/normalization/normalize.js");
/* harmony import */ var _dmnEditorStoriesWrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../dmnEditorStoriesWrapper */ "./stories/dmnEditorStoriesWrapper.tsx");
var _a, _b, _c;






const initialModel = `<?xml version="1.0" encoding="UTF-8" ?>
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
  <dmn:import id="_87CDD600-7564-CF87-547E-A8B876CD0812" name="testTreePmml" importType="https://www.dmg.org/PMML-4_2" namespace="https://kie.org/pmml#dev-webapp/available-models-to-include/testTree.pmml" />
</dmn:definitions>
`;
function EvaluationHighlights(args) {
  const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(() => {
    const initialDmnMarshaller = (0,_kie_tools_dmn_marshaller__WEBPACK_IMPORTED_MODULE_2__.getMarshaller)(initialModel, {
      upgradeTo: "latest"
    });
    return {
      marshaller: initialDmnMarshaller,
      stack: [(0,_kie_tools_dmn_marshaller_dist_normalization_normalize__WEBPACK_IMPORTED_MODULE_4__.normalize)(initialDmnMarshaller.parser.parse())],
      pointer: 0
    };
  });
  const currentModel = state.stack[state.pointer];
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
    children: (0,_dmnEditorStoriesWrapper__WEBPACK_IMPORTED_MODULE_5__.DmnEditorWrapper)({
      model: currentModel,
      originalVersion: args.originalVersion,
      onModelChange,
      externalContextName: args.externalContextName,
      externalContextDescription: args.externalContextDescription,
      validationMessages: args.validationMessages,
      evaluationResultsByNodeId: args.evaluationResultsByNodeId,
      issueTrackerHref: args.issueTrackerHref
    })
  });
}
const meta = {
  title: "Misc/EvaluationHighlights",
  component: _kie_tools_dmn_editor_dist_DmnEditor__WEBPACK_IMPORTED_MODULE_3__.DmnEditor,
  includeStories: /^[A-Z]/
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (meta);
const EvaluationHighlightsStory = {
  render: args => EvaluationHighlights(args),
  args: {
    model: (0,_kie_tools_dmn_marshaller__WEBPACK_IMPORTED_MODULE_2__.getMarshaller)(initialModel, {
      upgradeTo: "latest"
    }).parser.parse(),
    originalVersion: "1.5",
    evaluationResultsByNodeId: new Map([["_F0DC8923-5FC7-4200-8BD1-461D5F3714BE", {
      evaluationResult: "skipped",
      evaluationHitsCountByRuleOrRowId: new Map()
    }], ["_D6F4234F-15B3-4F5B-B814-5F6FF29D2907", {
      evaluationResult: "failed",
      evaluationHitsCountByRuleOrRowId: new Map()
    }], ["_2FE51DB1-3083-4BF7-AA71-0B0065310E72", {
      evaluationResult: "succeeded",
      evaluationHitsCountByRuleOrRowId: new Map([["_11976EBA-60BC-421B-A270-089A45E9B167", 10]])
    }]]),
    externalContextDescription: "External context description",
    externalContextName: "Storybook - DMN Editor",
    externalModelsByNamespace: {},
    issueTrackerHref: "",
    validationMessages: {}
  }
};
EvaluationHighlightsStory.parameters = {
  ...EvaluationHighlightsStory.parameters,
  docs: {
    ...((_a = EvaluationHighlightsStory.parameters) === null || _a === void 0 ? void 0 : _a.docs),
    source: {
      originalSource: "{\n  render: args => EvaluationHighlights(args),\n  args: {\n    model: getMarshaller(initialModel, {\n      upgradeTo: \"latest\"\n    }).parser.parse(),\n    originalVersion: \"1.5\",\n    evaluationResultsByNodeId: new Map([[\"_F0DC8923-5FC7-4200-8BD1-461D5F3714BE\", {\n      evaluationResult: \"skipped\",\n      evaluationHitsCountByRuleOrRowId: new Map()\n    }], [\"_D6F4234F-15B3-4F5B-B814-5F6FF29D2907\", {\n      evaluationResult: \"failed\",\n      evaluationHitsCountByRuleOrRowId: new Map()\n    }], [\"_2FE51DB1-3083-4BF7-AA71-0B0065310E72\", {\n      evaluationResult: \"succeeded\",\n      evaluationHitsCountByRuleOrRowId: new Map([[\"_11976EBA-60BC-421B-A270-089A45E9B167\", 10]])\n    }]]),\n    externalContextDescription: \"External context description\",\n    externalContextName: \"Storybook - DMN Editor\",\n    externalModelsByNamespace: {},\n    issueTrackerHref: \"\",\n    validationMessages: {}\n  }\n}",
      ...((_c = (_b = EvaluationHighlightsStory.parameters) === null || _b === void 0 ? void 0 : _b.docs) === null || _c === void 0 ? void 0 : _c.source)
    }
  }
};
const __namedExportsOrder = ["EvaluationHighlightsStory"];

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlzYy1ldmFsdWF0aW9uSGlnaGxpZ2h0cy1FdmFsdWF0aW9uSGlnaGxpZ2h0cy1zdG9yaWVzLjM0YjRjZjE0LmlmcmFtZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQjhDO0FBRTJDO0FBQ1U7QUFDSjtBQUM5QjtBQUNqRSxNQUFNTSxZQUFZLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0ErdUJwQjtBQUNELFNBQVNDLG9CQUFvQkEsQ0FBQ0MsSUFBb0I7RUFDaEQsTUFBTSxDQUFDQyxLQUFLLEVBQUVDLFFBQVEsQ0FBQyxHQUFHVCwrQ0FBUSxDQUkvQixNQUFLO0lBQ04sTUFBTVUsb0JBQW9CLEdBQUdULHdFQUFhLENBQUNJLFlBQVksRUFBRTtNQUN2RE0sU0FBUyxFQUFFO0tBQ1osQ0FBQztJQUNGLE9BQU87TUFDTEMsVUFBVSxFQUFFRixvQkFBb0I7TUFDaENHLEtBQUssRUFBRSxDQUFDVixpR0FBUyxDQUFDTyxvQkFBb0IsQ0FBQ0ksTUFBTSxDQUFDQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO01BQ3ZEQyxPQUFPLEVBQUU7S0FDVjtFQUNILENBQUMsQ0FBQztFQUNGLE1BQU1DLFlBQVksR0FBR1QsS0FBSyxDQUFDSyxLQUFLLENBQUNMLEtBQUssQ0FBQ1EsT0FBTyxDQUFDO0VBQy9DLE1BQU1FLGFBQWEsR0FBR25CLGtEQUFXLENBQW1Cb0IsS0FBSyxJQUFHO0lBQzFEVixRQUFRLENBQUNXLElBQUksSUFBRztNQUNkLE1BQU1DLFFBQVEsR0FBR0QsSUFBSSxDQUFDUCxLQUFLLENBQUNTLEtBQUssQ0FBQyxDQUFDLEVBQUVGLElBQUksQ0FBQ0osT0FBTyxHQUFHLENBQUMsQ0FBQztNQUN0RCxPQUFPO1FBQ0wsR0FBR0ksSUFBSTtRQUNQUCxLQUFLLEVBQUUsQ0FBQyxHQUFHUSxRQUFRLEVBQUVGLEtBQUssQ0FBQztRQUMzQkgsT0FBTyxFQUFFSyxRQUFRLENBQUNFO09BQ25CO0lBQ0gsQ0FBQyxDQUFDO0VBQ0osQ0FBQyxFQUFFLEVBQUUsQ0FBQztFQUNOLE9BQU9DLHNEQUFBLENBQUFDLHVEQUFBO0lBQUFDLFFBQUEsRUFDRnRCLDBFQUFnQixDQUFDO01BQ2xCZSxLQUFLLEVBQUVGLFlBQVk7TUFDbkJVLGVBQWUsRUFBRXBCLElBQUksQ0FBQ29CLGVBQWU7TUFDckNULGFBQWE7TUFDYlUsbUJBQW1CLEVBQUVyQixJQUFJLENBQUNxQixtQkFBbUI7TUFDN0NDLDBCQUEwQixFQUFFdEIsSUFBSSxDQUFDc0IsMEJBQTBCO01BQzNEQyxrQkFBa0IsRUFBRXZCLElBQUksQ0FBQ3VCLGtCQUFrQjtNQUMzQ0MseUJBQXlCLEVBQUV4QixJQUFJLENBQUN3Qix5QkFBeUI7TUFDekRDLGdCQUFnQixFQUFFekIsSUFBSSxDQUFDeUI7S0FDeEI7RUFBQyxFQUNDO0FBQ1A7QUFDQSxNQUFNQyxJQUFJLEdBQXlCO0VBQ2pDQyxLQUFLLEVBQUUsMkJBQTJCO0VBQ2xDQyxTQUFTLEVBQUVqQywyRUFBUztFQUNwQmtDLGNBQWMsRUFBRTtDQUNqQjtBQUNELGlFQUFlSCxJQUFJLEVBQUM7QUFFYixNQUFNSSx5QkFBeUIsR0FBVTtFQUM5Q0MsTUFBTSxFQUFFL0IsSUFBSSxJQUFJRCxvQkFBb0IsQ0FBQ0MsSUFBSSxDQUFDO0VBQzFDQSxJQUFJLEVBQUU7SUFDSlksS0FBSyxFQUFFbEIsd0VBQWEsQ0FBQ0ksWUFBWSxFQUFFO01BQ2pDTSxTQUFTLEVBQUU7S0FDWixDQUFDLENBQUNHLE1BQU0sQ0FBQ0MsS0FBSyxFQUFFO0lBQ2pCWSxlQUFlLEVBQUUsS0FBSztJQUN0QkkseUJBQXlCLEVBQUUsSUFBSVEsR0FBRyxDQUFDLENBQUMsQ0FBQyx1Q0FBdUMsRUFBRTtNQUM1RUMsZ0JBQWdCLEVBQUUsU0FBUztNQUMzQkMsZ0NBQWdDLEVBQUUsSUFBSUYsR0FBRztLQUMxQyxDQUFDLEVBQUUsQ0FBQyx1Q0FBdUMsRUFBRTtNQUM1Q0MsZ0JBQWdCLEVBQUUsUUFBUTtNQUMxQkMsZ0NBQWdDLEVBQUUsSUFBSUYsR0FBRztLQUMxQyxDQUFDLEVBQUUsQ0FBQyx1Q0FBdUMsRUFBRTtNQUM1Q0MsZ0JBQWdCLEVBQUUsV0FBVztNQUM3QkMsZ0NBQWdDLEVBQUUsSUFBSUYsR0FBRyxDQUFDLENBQUMsQ0FBQyx1Q0FBdUMsRUFBRSxFQUFFLENBQUMsQ0FBQztLQUMxRixDQUFDLENBQUMsQ0FBQztJQUNKViwwQkFBMEIsRUFBRSw4QkFBOEI7SUFDMURELG1CQUFtQixFQUFFLHdCQUF3QjtJQUM3Q2MseUJBQXlCLEVBQUUsRUFBRTtJQUM3QlYsZ0JBQWdCLEVBQUUsRUFBRTtJQUNwQkYsa0JBQWtCLEVBQUU7O0NBRXZCO0FBQ0RPLHlCQUF5QixDQUFDTSxVQUFVLEdBQUc7RUFDckMsR0FBR04seUJBQXlCLENBQUNNLFVBQVU7RUFDdkNDLElBQUksRUFBRTtJQUNKLElBQUcsQ0FBQUMsRUFBQSxHQUFBUix5QkFBeUIsQ0FBQ00sVUFBVSxjQUFBRSxFQUFBLHVCQUFBQSxFQUFBLENBQUVELElBQUk7SUFDN0NFLE1BQU0sRUFBRTtNQUNOQyxjQUFjLEVBQUUsczZCQUFzNkI7TUFDdDdCLElBQUcsQ0FBQUMsRUFBQSxJQUFBQyxFQUFBLEdBQUFaLHlCQUF5QixDQUFDTSxVQUFVLGNBQUFNLEVBQUEsdUJBQUFBLEVBQUEsQ0FBRUwsSUFBSSxjQUFBSSxFQUFBLHVCQUFBQSxFQUFBLENBQUVGLE1BQU07OztDQUcxRDtBQUFDLE1BQUFJLG1CQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGtpZS10b29scy9kbW4tZWRpdG9yLy4vc3Rvcmllcy9taXNjL2V2YWx1YXRpb25IaWdobGlnaHRzL0V2YWx1YXRpb25IaWdobGlnaHRzLnN0b3JpZXMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBMaWNlbnNlZCB0byB0aGUgQXBhY2hlIFNvZnR3YXJlIEZvdW5kYXRpb24gKEFTRikgdW5kZXIgb25lXG4gKiBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gIFNlZSB0aGUgTk9USUNFIGZpbGVcbiAqIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uXG4gKiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC4gIFRoZSBBU0YgbGljZW5zZXMgdGhpcyBmaWxlXG4gKiB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlXG4gKiBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2VcbiAqIHdpdGggdGhlIExpY2Vuc2UuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLFxuICogc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cbiAqIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXG4gKiBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGVcbiAqIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnNcbiAqIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdHlwZSB7IE1ldGEsIFN0b3J5T2JqIH0gZnJvbSBcIkBzdG9yeWJvb2svcmVhY3RcIjtcbmltcG9ydCB7IERtbkxhdGVzdE1vZGVsLCBEbW5NYXJzaGFsbGVyLCBnZXRNYXJzaGFsbGVyIH0gZnJvbSBcIkBraWUtdG9vbHMvZG1uLW1hcnNoYWxsZXJcIjtcbmltcG9ydCB7IERtbkVkaXRvciwgRG1uRWRpdG9yUHJvcHMsIE9uRG1uTW9kZWxDaGFuZ2UgfSBmcm9tIFwiQGtpZS10b29scy9kbW4tZWRpdG9yL2Rpc3QvRG1uRWRpdG9yXCI7XG5pbXBvcnQgeyBub3JtYWxpemUsIE5vcm1hbGl6ZWQgfSBmcm9tIFwiQGtpZS10b29scy9kbW4tbWFyc2hhbGxlci9kaXN0L25vcm1hbGl6YXRpb24vbm9ybWFsaXplXCI7XG5pbXBvcnQgeyBEbW5FZGl0b3JXcmFwcGVyIH0gZnJvbSBcIi4uLy4uL2RtbkVkaXRvclN0b3JpZXNXcmFwcGVyXCI7XG5jb25zdCBpbml0aWFsTW9kZWwgPSBgPD94bWwgdmVyc2lvbj1cIjEuMFwiIGVuY29kaW5nPVwiVVRGLThcIiA/PlxuPGRtbjpkZWZpbml0aW9ucyB4bWxuczpkbW49XCJodHRwOi8vd3d3Lm9tZy5vcmcvc3BlYy9ETU4vMjAxODA1MjEvTU9ERUwvXCJcbiAgICB4bWxuczpkaT1cImh0dHA6Ly93d3cub21nLm9yZy9zcGVjL0RNTi8yMDE4MDUyMS9ESS9cIlxuICAgIHhtbG5zOmtpZT1cImh0dHBzOi8va2llLmFwYWNoZS5vcmcvZG1uL2V4dGVuc2lvbnMvMS4wXCJcbiAgICB4bWxuczpkbW5kaT1cImh0dHA6Ly93d3cub21nLm9yZy9zcGVjL0RNTi8yMDE4MDUyMS9ETU5ESS9cIlxuICAgIHhtbG5zOmRjPVwiaHR0cDovL3d3dy5vbWcub3JnL3NwZWMvRE1OLzIwMTgwNTIxL0RDL1wiXG4gICAgeG1sbnM6ZmVlbD1cImh0dHA6Ly93d3cub21nLm9yZy9zcGVjL0RNTi8yMDE4MDUyMS9GRUVML1wiXG4gICAgeG1sbnM6aW5jbHVkZWQwPVwiaHR0cHM6Ly9raWUuYXBhY2hlLm9yZy9kbW4vXzkyMzc4NEJELUNEMzEtNDg4QS05QzMxLUMxQTgzQzU0ODNDMFwiXG4gICAgeG1sbnM6aW5jbHVkZWQxPVwiaHR0cHM6Ly9raWUuYXBhY2hlLm9yZy9kbW4vX0QxOUIwMDE1LTJDQkQtNEJBOC04NEE5LTVGNTU0RDg0QTlFMVwiXG4gICAgZXhwcmVzc2lvbkxhbmd1YWdlPVwiaHR0cDovL3d3dy5vbWcub3JnL3NwZWMvRE1OLzIwMTgwNTIxL0ZFRUwvXCJcbiAgICB0eXBlTGFuZ3VhZ2U9XCJodHRwOi8vd3d3Lm9tZy5vcmcvc3BlYy9ETU4vMjAyMTExMDgvRkVFTC9cIlxuICAgIG5hbWVzcGFjZT1cImh0dHBzOi8va2llLmFwYWNoZS5vcmcvZG1uL184NTdGRTQyNC1CRURBLTQ3NzItQUI4RS0yRjRDRERCODY0QUJcIlxuICAgIGlkPVwiX0M2Q0JFQ0VCLTJCQkMtNEUxNC04MEIwLTE3RjU3NkIyQ0Y5MlwiXG4gICAgbmFtZT1cImxvYW5fcHJlX3F1YWxpZmljYXRpb25cIj5cbiAgPGRtbjpleHRlbnNpb25FbGVtZW50cyAvPlxuICA8ZG1uOml0ZW1EZWZpbml0aW9uIGlkPVwiX0Q0MEIwMTA2LTYyRTgtNEFDMC1BMzlBLUM2Qzk1MDYxOTRBOVwiIG5hbWU9XCJSZXF1ZXN0ZWRfUHJvZHVjdFwiIGlzQ29sbGVjdGlvbj1cImZhbHNlXCI+XG4gICAgPGRtbjppdGVtQ29tcG9uZW50IGlkPVwiXzY4YjRhOTZjLTE5OGEtNDU3NS1iMjlhLWEyYzhiMDUzOWEyY1wiIG5hbWU9XCJUeXBlXCIgaXNDb2xsZWN0aW9uPVwiZmFsc2VcIj5cbiAgICAgIDxkbW46dHlwZVJlZj5Qcm9kdWN0X1R5cGU8L2Rtbjp0eXBlUmVmPlxuICAgIDwvZG1uOml0ZW1Db21wb25lbnQ+XG4gICAgPGRtbjppdGVtQ29tcG9uZW50IGlkPVwiX2FiMTY0N2MyLWNiNjMtNDgwOC04ZDkwLTM2ZDQxNTkxYTQwY1wiIG5hbWU9XCJSYXRlXCIgaXNDb2xsZWN0aW9uPVwiZmFsc2VcIj5cbiAgICAgIDxkbW46dHlwZVJlZj5udW1iZXI8L2Rtbjp0eXBlUmVmPlxuICAgIDwvZG1uOml0ZW1Db21wb25lbnQ+XG4gICAgPGRtbjppdGVtQ29tcG9uZW50IGlkPVwiXzE1MjkxN2JiLTYwOTUtNDA1Ny04NjEzLTViMDhiNzdkYjIzNVwiIG5hbWU9XCJUZXJtXCIgaXNDb2xsZWN0aW9uPVwiZmFsc2VcIj5cbiAgICAgIDxkbW46dHlwZVJlZj5udW1iZXI8L2Rtbjp0eXBlUmVmPlxuICAgIDwvZG1uOml0ZW1Db21wb25lbnQ+XG4gICAgPGRtbjppdGVtQ29tcG9uZW50IGlkPVwiX2UyZjBlOGNkLThmNWEtNDNkNC1iMjYzLWFhYTViOWFlNDQyMFwiIG5hbWU9XCJBbW91bnRcIiBpc0NvbGxlY3Rpb249XCJmYWxzZVwiPlxuICAgICAgPGRtbjp0eXBlUmVmPm51bWJlcjwvZG1uOnR5cGVSZWY+XG4gICAgPC9kbW46aXRlbUNvbXBvbmVudD5cbiAgPC9kbW46aXRlbURlZmluaXRpb24+XG4gIDxkbW46aXRlbURlZmluaXRpb24gaWQ9XCJfMkI0RTk1OTMtMzIzOS00RTA0LUEyMTMtMzQ1RjBBQTBBRjlEXCIgbmFtZT1cIk1hcml0YWxfU3RhdHVzXCIgaXNDb2xsZWN0aW9uPVwiZmFsc2VcIj5cbiAgICA8ZG1uOnR5cGVSZWY+c3RyaW5nPC9kbW46dHlwZVJlZj5cbiAgICA8ZG1uOmFsbG93ZWRWYWx1ZXMgaWQ9XCJfNUJEMTNEOUQtNDEyRi00RTZCLTkxNEEtM0Q4QUFBQzZBNzA1XCI+XG4gICAgICA8ZG1uOnRleHQ+JnF1b3Q7TSZxdW90OywmcXVvdDtEJnF1b3Q7LCZxdW90O1MmcXVvdDs8L2Rtbjp0ZXh0PlxuICAgIDwvZG1uOmFsbG93ZWRWYWx1ZXM+XG4gIDwvZG1uOml0ZW1EZWZpbml0aW9uPlxuICA8ZG1uOml0ZW1EZWZpbml0aW9uIGlkPVwiX0YwOTBDQkI3LUY1QzMtNEM1NC05OTA1LTUxN0RDMTQ2OUI1MlwiIG5hbWU9XCJBcHBsaWNhbnRfRGF0YVwiIGlzQ29sbGVjdGlvbj1cImZhbHNlXCI+XG4gICAgPGRtbjppdGVtQ29tcG9uZW50IGlkPVwiX2Y1MmUyYjlmLTU0NGMtNDhhYy05MWUwLTE2OGE2ZTEzZmM4YlwiIG5hbWU9XCJBZ2VcIiBpc0NvbGxlY3Rpb249XCJmYWxzZVwiPlxuICAgICAgPGRtbjp0eXBlUmVmPm51bWJlcjwvZG1uOnR5cGVSZWY+XG4gICAgPC9kbW46aXRlbUNvbXBvbmVudD5cbiAgICA8ZG1uOml0ZW1Db21wb25lbnQgaWQ9XCJfNWEyMGQ0YzItMGU2Ni00YmI5LWI1ZWEtM2I5ZjJjZDhlMDUwXCIgbmFtZT1cIk1hcml0YWwgU3RhdHVzXCIgaXNDb2xsZWN0aW9uPVwiZmFsc2VcIj5cbiAgICAgIDxkbW46dHlwZVJlZj5NYXJpdGFsX1N0YXR1czwvZG1uOnR5cGVSZWY+XG4gICAgPC9kbW46aXRlbUNvbXBvbmVudD5cbiAgICA8ZG1uOml0ZW1Db21wb25lbnQgaWQ9XCJfNzAxMTE3YjgtMmY4ZC00ZTk0LWE1ZGItZDUwM2YwZmJhM2FmXCIgbmFtZT1cIkVtcGxveW1lbnQgU3RhdHVzXCIgaXNDb2xsZWN0aW9uPVwiZmFsc2VcIj5cbiAgICAgIDxkbW46dHlwZVJlZj5zdHJpbmc8L2Rtbjp0eXBlUmVmPlxuICAgICAgPGRtbjphbGxvd2VkVmFsdWVzIGlkPVwiXzRBOEUzNkZDLUE0MEMtNENCNS05QUUxLTczMDgyREEyNEQxM1wiPlxuICAgICAgICA8ZG1uOnRleHQ+JnF1b3Q7VW5lbXBsb3llZCZxdW90OywmcXVvdDtFbXBsb3llZCZxdW90OywmcXVvdDtTZWxmLWVtcGxveWVkJnF1b3Q7LCZxdW90O1N0dWRlbnQmcXVvdDs8L2Rtbjp0ZXh0PlxuICAgICAgPC9kbW46YWxsb3dlZFZhbHVlcz5cbiAgICA8L2RtbjppdGVtQ29tcG9uZW50PlxuICAgIDxkbW46aXRlbUNvbXBvbmVudCBpZD1cIl8xN2FkMmEyNC00MjVmLTRkZjctOTJmYy02MDllMTAyMTdiOGJcIiBuYW1lPVwiRXhpc3RpbmcgQ3VzdG9tZXJcIiBpc0NvbGxlY3Rpb249XCJmYWxzZVwiPlxuICAgICAgPGRtbjp0eXBlUmVmPmJvb2xlYW48L2Rtbjp0eXBlUmVmPlxuICAgIDwvZG1uOml0ZW1Db21wb25lbnQ+XG4gICAgPGRtbjppdGVtQ29tcG9uZW50IGlkPVwiX2JiOWVmNzJlLTJlMGQtNDE3NS1iYTU4LWQ2MTNiZGE3ZTliM1wiIG5hbWU9XCJNb250aGx5XCIgaXNDb2xsZWN0aW9uPVwiZmFsc2VcIj5cbiAgICAgIDxkbW46aXRlbUNvbXBvbmVudCBpZD1cIl8zMmQ1ZWEzOS00YmJjLTRiMTYtODhjZC1mN2U2ZTQ3YTg4NWVcIiBuYW1lPVwiSW5jb21lXCIgaXNDb2xsZWN0aW9uPVwiZmFsc2VcIj5cbiAgICAgICAgPGRtbjp0eXBlUmVmPm51bWJlcjwvZG1uOnR5cGVSZWY+XG4gICAgICA8L2RtbjppdGVtQ29tcG9uZW50PlxuICAgICAgPGRtbjppdGVtQ29tcG9uZW50IGlkPVwiXzc4NTA0NjhiLTE3M2QtNDE2Mi05YzdhLTk0NDUzYTRiMDJkN1wiIG5hbWU9XCJSZXBheW1lbnRzXCIgaXNDb2xsZWN0aW9uPVwiZmFsc2VcIj5cbiAgICAgICAgPGRtbjp0eXBlUmVmPm51bWJlcjwvZG1uOnR5cGVSZWY+XG4gICAgICA8L2RtbjppdGVtQ29tcG9uZW50PlxuICAgICAgPGRtbjppdGVtQ29tcG9uZW50IGlkPVwiX2FmNTc4MTgyLTVjNzEtNGI3MS05MDI3LTBmMGNmODM3NzBhYlwiIG5hbWU9XCJFeHBlbnNlc1wiIGlzQ29sbGVjdGlvbj1cImZhbHNlXCI+XG4gICAgICAgIDxkbW46dHlwZVJlZj5udW1iZXI8L2Rtbjp0eXBlUmVmPlxuICAgICAgPC9kbW46aXRlbUNvbXBvbmVudD5cbiAgICAgIDxkbW46aXRlbUNvbXBvbmVudCBpZD1cIl80YTRkMDFiZS1mZTk3LTQ5YTItOGM0Yy0zYTQ5ZmYyNzk2OGRcIiBuYW1lPVwiVGF4XCIgaXNDb2xsZWN0aW9uPVwiZmFsc2VcIj5cbiAgICAgICAgPGRtbjp0eXBlUmVmPm51bWJlcjwvZG1uOnR5cGVSZWY+XG4gICAgICA8L2RtbjppdGVtQ29tcG9uZW50PlxuICAgICAgPGRtbjppdGVtQ29tcG9uZW50IGlkPVwiX2Y5NWRiZjcwLWQyNTYtNGQ0MC1hNjFkLWM2MzMyZDg2NGU4ZlwiIG5hbWU9XCJJbnN1cmFuY2VcIiBpc0NvbGxlY3Rpb249XCJmYWxzZVwiPlxuICAgICAgICA8ZG1uOnR5cGVSZWY+bnVtYmVyPC9kbW46dHlwZVJlZj5cbiAgICAgIDwvZG1uOml0ZW1Db21wb25lbnQ+XG4gICAgPC9kbW46aXRlbUNvbXBvbmVudD5cbiAgPC9kbW46aXRlbURlZmluaXRpb24+XG4gIDxkbW46aXRlbURlZmluaXRpb24gaWQ9XCJfMTk0NUJEMkUtQzgyQy00RTdBLUE1OUUtNDg0QjU2QTNBRTQ2XCIgbmFtZT1cIlBvc3QtQnVyZWF1X1Jpc2tfQ2F0ZWdvcnlcIiBpc0NvbGxlY3Rpb249XCJmYWxzZVwiPlxuICAgIDxkbW46aXRlbUNvbXBvbmVudCBpZD1cIl8xOWVjYzYyMi1lNzJjLTQ4MmQtOWRlMy02NTc4YTFjNzZmMWVcIiBuYW1lPVwiUmlzayBDYXRlZ29yeVwiIGlzQ29sbGVjdGlvbj1cImZhbHNlXCI+XG4gICAgICA8ZG1uOnR5cGVSZWY+Umlza19DYXRlZ29yeTwvZG1uOnR5cGVSZWY+XG4gICAgPC9kbW46aXRlbUNvbXBvbmVudD5cbiAgICA8ZG1uOml0ZW1Db21wb25lbnQgaWQ9XCJfMmZhNzI0ZDEtYjI3Ni00YTNmLWEyZWYtMmU3ZGIzZDM2MmYzXCIgbmFtZT1cIkNyZWRpdCBDb250aW5nZW5jeSBGYWN0b3JcIiBpc0NvbGxlY3Rpb249XCJmYWxzZVwiPlxuICAgICAgPGRtbjp0eXBlUmVmPm51bWJlcjwvZG1uOnR5cGVSZWY+XG4gICAgPC9kbW46aXRlbUNvbXBvbmVudD5cbiAgPC9kbW46aXRlbURlZmluaXRpb24+XG4gIDxkbW46aXRlbURlZmluaXRpb24gaWQ9XCJfNDgxNjcwNEItQUI3Ri00NjI0LTgzNjgtMEJCQkFGQzA0RkI5XCIgbmFtZT1cIlByZS1CdXJlYXVfUmlza19DYXRlZ29yeVwiIGlzQ29sbGVjdGlvbj1cImZhbHNlXCI+XG4gICAgPGRtbjppdGVtQ29tcG9uZW50IGlkPVwiXzc4YjQ0ZTEwLWUxNjYtNDRhNC04M2EzLTVkMTJjOTk1MjllOFwiIG5hbWU9XCJSaXNrIENhdGVnb3J5XCIgaXNDb2xsZWN0aW9uPVwiZmFsc2VcIj5cbiAgICAgIDxkbW46dHlwZVJlZj5zdHJpbmc8L2Rtbjp0eXBlUmVmPlxuICAgIDwvZG1uOml0ZW1Db21wb25lbnQ+XG4gICAgPGRtbjppdGVtQ29tcG9uZW50IGlkPVwiX2ZhNDFhNDgyLWE4NmEtNGI1Mi1hNzUwLTM1MTcwY2Q2YmJhM1wiIG5hbWU9XCJDcmVkaXQgQ29udGluZ2VuY3kgRmFjdG9yXCIgaXNDb2xsZWN0aW9uPVwiZmFsc2VcIj5cbiAgICAgIDxkbW46dHlwZVJlZj5udW1iZXI8L2Rtbjp0eXBlUmVmPlxuICAgIDwvZG1uOml0ZW1Db21wb25lbnQ+XG4gIDwvZG1uOml0ZW1EZWZpbml0aW9uPlxuICA8ZG1uOml0ZW1EZWZpbml0aW9uIGlkPVwiXzlBRUFFNTBFLTY3QkYtNDQyOC1BNkNELUI0OEQyOTlGRDczQ1wiIG5hbWU9XCJFbGlnaWJpbGl0eVwiIGlzQ29sbGVjdGlvbj1cImZhbHNlXCI+XG4gICAgPGRtbjp0eXBlUmVmPnN0cmluZzwvZG1uOnR5cGVSZWY+XG4gICAgPGRtbjphbGxvd2VkVmFsdWVzIGlkPVwiXzc5QzdGNDVELTIyOEYtNDM3Qi1BRjdFLTYxNUZDNzJBNTM1NFwiPlxuICAgICAgPGRtbjp0ZXh0PiZxdW90O0luZWxpZ2libGUmcXVvdDssJnF1b3Q7RWxpZ2libGUmcXVvdDs8L2Rtbjp0ZXh0PlxuICAgIDwvZG1uOmFsbG93ZWRWYWx1ZXM+XG4gIDwvZG1uOml0ZW1EZWZpbml0aW9uPlxuICA8ZG1uOml0ZW1EZWZpbml0aW9uIGlkPVwiX0ZCRjI0NUU3LTlBOTMtNEQ1Mi05RjAyLUFGNjg5MzAxMUE1RlwiIG5hbWU9XCJTdHJhdGVneVwiIGlzQ29sbGVjdGlvbj1cImZhbHNlXCI+XG4gICAgPGRtbjp0eXBlUmVmPnN0cmluZzwvZG1uOnR5cGVSZWY+XG4gICAgPGRtbjphbGxvd2VkVmFsdWVzIGlkPVwiXzBCMDA1MzU1LTE5RDAtNDQ3Qi1CMkRFLTZEMTI5MEM3NTA0Q1wiPlxuICAgICAgPGRtbjp0ZXh0PiZxdW90O0RlY2xpbmUmcXVvdDssJnF1b3Q7QnVyZWF1JnF1b3Q7LCZxdW90O1Rocm91Z2gmcXVvdDs8L2Rtbjp0ZXh0PlxuICAgIDwvZG1uOmFsbG93ZWRWYWx1ZXM+XG4gIDwvZG1uOml0ZW1EZWZpbml0aW9uPlxuICA8ZG1uOml0ZW1EZWZpbml0aW9uIGlkPVwiXzVEMzRFNzEzLUU5NEUtNDAzRS1BNjgxLURENjk0OEJFNEY3OVwiIG5hbWU9XCJCdXJlYXVfQ2FsbF9UeXBlXCIgaXNDb2xsZWN0aW9uPVwiZmFsc2VcIj5cbiAgICA8ZG1uOnR5cGVSZWY+c3RyaW5nPC9kbW46dHlwZVJlZj5cbiAgICA8ZG1uOmFsbG93ZWRWYWx1ZXMgaWQ9XCJfOTQ3REJCQTEtNzBBMC00MkRBLUJDMzctRkQyRkQ5M0JGNjFCXCI+XG4gICAgICA8ZG1uOnRleHQ+JnF1b3Q7RnVsbCZxdW90OywmcXVvdDtNaW5pJnF1b3Q7LCZxdW90O05vbmUmcXVvdDs8L2Rtbjp0ZXh0PlxuICAgIDwvZG1uOmFsbG93ZWRWYWx1ZXM+XG4gIDwvZG1uOml0ZW1EZWZpbml0aW9uPlxuICA8ZG1uOml0ZW1EZWZpbml0aW9uIGlkPVwiXzlBRjU4RUQ2LUE1MjYtNDM0Ni04NzgwLTBEMUU2MDM4Q0E2RlwiIG5hbWU9XCJQcm9kdWN0X1R5cGVcIiBpc0NvbGxlY3Rpb249XCJmYWxzZVwiPlxuICAgIDxkbW46dHlwZVJlZj5zdHJpbmc8L2Rtbjp0eXBlUmVmPlxuICAgIDxkbW46YWxsb3dlZFZhbHVlcyBpZD1cIl9BMjU1NDE0MC04MDYwLTRGNjYtQkExNi0zQThERkUxMkMxN0NcIj5cbiAgICAgIDxkbW46dGV4dD4mcXVvdDtTdGFuZGFyZCBMb2FuJnF1b3Q7LCZxdW90O1NwZWNpYWwgTG9hbiZxdW90OzwvZG1uOnRleHQ+XG4gICAgPC9kbW46YWxsb3dlZFZhbHVlcz5cbiAgPC9kbW46aXRlbURlZmluaXRpb24+XG4gIDxkbW46aXRlbURlZmluaXRpb24gaWQ9XCJfNEQzNkEyNUUtOUEzNy00N0FFLUI5QkYtOTQzMzhBRTY3NjA5XCIgbmFtZT1cIlJpc2tfQ2F0ZWdvcnlcIiBpc0NvbGxlY3Rpb249XCJmYWxzZVwiPlxuICAgIDxkbW46dHlwZVJlZj5zdHJpbmc8L2Rtbjp0eXBlUmVmPlxuICAgIDxkbW46YWxsb3dlZFZhbHVlcyBpZD1cIl8wNDE0MjZDMi1COUQyLTRDMTgtOUFDMy01QTUwOEQwMDA4MzlcIj5cbiAgICAgIDxkbW46dGV4dD4mcXVvdDtIaWdoJnF1b3Q7LCZxdW90O01lZGl1bSZxdW90OywmcXVvdDtMb3cmcXVvdDssJnF1b3Q7VmVyeSBMb3cmcXVvdDssJnF1b3Q7RGVjbGluZSZxdW90OzwvZG1uOnRleHQ+XG4gICAgPC9kbW46YWxsb3dlZFZhbHVlcz5cbiAgPC9kbW46aXRlbURlZmluaXRpb24+XG4gIDxkbW46aXRlbURlZmluaXRpb24gaWQ9XCJfNDZDODcwRkMtMkE5OS00M0EwLTlEMUItM0QzQzU1MTZGQjIzXCIgbmFtZT1cIkNyZWRpdF9TY29yZV9SYXRpbmdcIiBpc0NvbGxlY3Rpb249XCJmYWxzZVwiPlxuICAgIDxkbW46dHlwZVJlZj5zdHJpbmc8L2Rtbjp0eXBlUmVmPlxuICAgIDxkbW46YWxsb3dlZFZhbHVlcyBpZD1cIl84NDcwQUU2OS0yODE0LTQ5MTEtOTUzRC0zRkM2MUE2ODEwNjNcIj5cbiAgICAgIDxkbW46dGV4dD4mcXVvdDtQb29yJnF1b3Q7LCZxdW90O0JhZCZxdW90OywmcXVvdDtGYWlyJnF1b3Q7LCZxdW90O0dvb2QmcXVvdDssJnF1b3Q7RXhjZWxsZW50JnF1b3Q7PC9kbW46dGV4dD5cbiAgICA8L2RtbjphbGxvd2VkVmFsdWVzPlxuICA8L2RtbjppdGVtRGVmaW5pdGlvbj5cbiAgPGRtbjppdGVtRGVmaW5pdGlvbiBpZD1cIl83NjQxQTZGQS1CQ0YzLTQ1RDEtQTBCNi03MUIwNjM0QUJCM0VcIiBuYW1lPVwiQmFja19FbmRfUmF0aW9cIiBpc0NvbGxlY3Rpb249XCJmYWxzZVwiPlxuICAgIDxkbW46dHlwZVJlZj5zdHJpbmc8L2Rtbjp0eXBlUmVmPlxuICAgIDxkbW46YWxsb3dlZFZhbHVlcyBpZD1cIl9DQTFDNkYwRS0xODZGLTQxREQtOEQ4RC1ENDA1Nzg5QkEzRjFcIj5cbiAgICAgIDxkbW46dGV4dD4mcXVvdDtJbnN1ZmZpY2llbnQmcXVvdDssJnF1b3Q7U3VmZmljaWVudCZxdW90OzwvZG1uOnRleHQ+XG4gICAgPC9kbW46YWxsb3dlZFZhbHVlcz5cbiAgPC9kbW46aXRlbURlZmluaXRpb24+XG4gIDxkbW46aXRlbURlZmluaXRpb24gaWQ9XCJfQjVFMDBBMkQtM0M5NS00QTlDLUJDQTYtQkRFODUyOTM5RjZEXCIgbmFtZT1cIkZyb250X0VuZF9SYXRpb1wiIGlzQ29sbGVjdGlvbj1cImZhbHNlXCI+XG4gICAgPGRtbjp0eXBlUmVmPnN0cmluZzwvZG1uOnR5cGVSZWY+XG4gICAgPGRtbjphbGxvd2VkVmFsdWVzIGlkPVwiX0I4NjU4Q0EyLUY0NzItNDM5MC04QUIwLTFERDQ5MTAwQjIwQ1wiPlxuICAgICAgPGRtbjp0ZXh0PiZxdW90O1N1ZmZpY2llbnQmcXVvdDssJnF1b3Q7SW5zdWZmaWNpZW50JnF1b3Q7PC9kbW46dGV4dD5cbiAgICA8L2RtbjphbGxvd2VkVmFsdWVzPlxuICA8L2RtbjppdGVtRGVmaW5pdGlvbj5cbiAgPGRtbjppdGVtRGVmaW5pdGlvbiBpZD1cIl9COEFDRTIxMC0yQzU1LTRDNjYtQjNEOC00ODg1RUUxQzUyQTBcIiBuYW1lPVwiUXVhbGlmaWNhdGlvblwiIGlzQ29sbGVjdGlvbj1cImZhbHNlXCI+XG4gICAgPGRtbjp0eXBlUmVmPnN0cmluZzwvZG1uOnR5cGVSZWY+XG4gICAgPGRtbjphbGxvd2VkVmFsdWVzIGlkPVwiXzFGNjZCOEJGLTZBQjctNDk2NS04QTY5LTg5N0REQzFBOEIzNFwiPlxuICAgICAgPGRtbjp0ZXh0PiZxdW90O05vdCBRdWFsaWZpZWQmcXVvdDssJnF1b3Q7UXVhbGlmaWVkJnF1b3Q7PC9kbW46dGV4dD5cbiAgICA8L2RtbjphbGxvd2VkVmFsdWVzPlxuICA8L2RtbjppdGVtRGVmaW5pdGlvbj5cbiAgPGRtbjppdGVtRGVmaW5pdGlvbiBpZD1cIl8yQ0MyRThENy0xQkUyLTRFNEEtODA3Mi01NUExRUM5NERCNkVcIiBuYW1lPVwiQ3JlZGl0X1Njb3JlXCIgaXNDb2xsZWN0aW9uPVwiZmFsc2VcIj5cbiAgICA8ZG1uOml0ZW1Db21wb25lbnQgaWQ9XCJfZDUzY2U5MjAtODdmNS00YTRmLWJhYmEtODVjMmE4MzBkNjBmXCIgbmFtZT1cIkZJQ09cIiBpc0NvbGxlY3Rpb249XCJmYWxzZVwiPlxuICAgICAgPGRtbjp0eXBlUmVmPm51bWJlcjwvZG1uOnR5cGVSZWY+XG4gICAgICA8ZG1uOmFsbG93ZWRWYWx1ZXMgaWQ9XCJfRTMwQUFEQkQtRDAyOC00NzVELUI4RDgtQjU2ODdENDU0QkVEXCI+XG4gICAgICAgIDxkbW46dGV4dD5bMzAwLi44NTBdPC9kbW46dGV4dD5cbiAgICAgIDwvZG1uOmFsbG93ZWRWYWx1ZXM+XG4gICAgPC9kbW46aXRlbUNvbXBvbmVudD5cbiAgPC9kbW46aXRlbURlZmluaXRpb24+XG4gIDxkbW46aXRlbURlZmluaXRpb24gaWQ9XCJfM0MzN0E2RjEtQzExMy00OTkzLUJCNTctRTg5Qjk5QzcwQjAyXCIgbmFtZT1cIkxvYW5fUXVhbGlmaWNhdGlvblwiIGlzQ29sbGVjdGlvbj1cImZhbHNlXCI+XG4gICAgPGRtbjppdGVtQ29tcG9uZW50IGlkPVwiX2UxMWMzYWMzLTczNzAtNDM3OC05NjdiLTkxZTljYjIyMWZlMVwiIG5hbWU9XCJRdWFsaWZpY2F0aW9uXCIgaXNDb2xsZWN0aW9uPVwiZmFsc2VcIj5cbiAgICAgIDxkbW46dHlwZVJlZj5zdHJpbmc8L2Rtbjp0eXBlUmVmPlxuICAgICAgPGRtbjphbGxvd2VkVmFsdWVzIGlkPVwiX0IwQUQwNjQxLTAwMjMtNDYxRC1CMjBFLTQxQ0FFMDJGOUJFNFwiPlxuICAgICAgICA8ZG1uOnRleHQ+JnF1b3Q7UXVhbGlmaWVkJnF1b3Q7LCZxdW90O05vdCBRdWFsaWZpZWQmcXVvdDs8L2Rtbjp0ZXh0PlxuICAgICAgPC9kbW46YWxsb3dlZFZhbHVlcz5cbiAgICA8L2RtbjppdGVtQ29tcG9uZW50PlxuICAgIDxkbW46aXRlbUNvbXBvbmVudCBpZD1cIl9iMzU0MWY4Mi01YmM5LTRmYWItYmE5Yi1jNDIzYTlhMmNkNmNcIiBuYW1lPVwiUmVhc29uXCIgaXNDb2xsZWN0aW9uPVwiZmFsc2VcIj5cbiAgICAgIDxkbW46dHlwZVJlZj5zdHJpbmc8L2Rtbjp0eXBlUmVmPlxuICAgIDwvZG1uOml0ZW1Db21wb25lbnQ+XG4gIDwvZG1uOml0ZW1EZWZpbml0aW9uPlxuICA8ZG1uOmlucHV0RGF0YSBpZD1cIl80Qzg5RTU5Qy1GRERBLTQzOEMtOEQxRi0wQjExOTRFRjZEQUVcIiBuYW1lPVwiQ3JlZGl0IFNjb3JlXCI+XG4gICAgPGRtbjpleHRlbnNpb25FbGVtZW50cyAvPlxuICAgIDxkbW46dmFyaWFibGUgaWQ9XCJfQTk3MDE5RkMtRUUwMS00NTFGLUE3QUEtNUE5N0VEMDA1RkI5XCIgbmFtZT1cIkNyZWRpdCBTY29yZVwiIHR5cGVSZWY9XCJDcmVkaXRfU2NvcmVcIiAvPlxuICA8L2RtbjppbnB1dERhdGE+XG4gIDxkbW46YnVzaW5lc3NLbm93bGVkZ2VNb2RlbCBpZD1cIl80Qzc4OERCRC1DNjcyLTRGNDEtOUFGRS05QzdEMkMxNDU3MzRcIiBuYW1lPVwiTGVuZGVyIEFjY2VwdGFibGUgRFRJXCI+XG4gICAgPGRtbjpleHRlbnNpb25FbGVtZW50cyAvPlxuICAgIDxkbW46dmFyaWFibGUgaWQ9XCJfODU1MDg5NDMtN0FEMi00QUEwLTgwRTUtMjA5MjNDQTIzMDhEXCIgbmFtZT1cIkxlbmRlciBBY2NlcHRhYmxlIERUSVwiIHR5cGVSZWY9XCJudW1iZXJcIiAvPlxuICAgIDxkbW46ZW5jYXBzdWxhdGVkTG9naWMgaWQ9XCJfOUYwMjU3RUUtQ0Y4Mi00OUZELUFFREQtMzE1NTg5MDg2NEZGXCIga2luZD1cIkZFRUxcIj5cbiAgICAgIDxkbW46bGl0ZXJhbEV4cHJlc3Npb24gaWQ9XCJfMjFFOEZBMzgtQzk0Ny00NzMzLTlFNTItQ0Y4MUE5N0FERjkxXCI+XG4gICAgICAgIDxkbW46dGV4dD4wLjM2PC9kbW46dGV4dD5cbiAgICAgIDwvZG1uOmxpdGVyYWxFeHByZXNzaW9uPlxuICAgIDwvZG1uOmVuY2Fwc3VsYXRlZExvZ2ljPlxuICA8L2RtbjpidXNpbmVzc0tub3dsZWRnZU1vZGVsPlxuICA8ZG1uOmRlY2lzaW9uIGlkPVwiX0YwREM4OTIzLTVGQzctNDIwMC04QkQxLTQ2MUQ1RjM3MTRCRVwiIG5hbWU9XCJGcm9udCBFbmQgUmF0aW9cIj5cbiAgICA8ZG1uOmV4dGVuc2lvbkVsZW1lbnRzIC8+XG4gICAgPGRtbjp2YXJpYWJsZSBpZD1cIl9BMEIwQjAzMi1GNjNGLTQ5MUYtQTY1RS03MkU2OEE4NkI4RkRcIiBuYW1lPVwiRnJvbnQgRW5kIFJhdGlvXCIgdHlwZVJlZj1cIkZyb250X0VuZF9SYXRpb1wiIC8+XG4gICAgPGRtbjppbmZvcm1hdGlvblJlcXVpcmVtZW50IGlkPVwiXzg5RUVBRjlGLTVBNUQtNEY1OS05MUI3LUVBNDE4QTcyMjlBRlwiPlxuICAgICAgPGRtbjpyZXF1aXJlZElucHV0IGhyZWY9XCIjXzFDRjVDRUZBLUFGOTctNDZGOS05Q0Q1LTlBOEFFQkIyMEI0RVwiIC8+XG4gICAgPC9kbW46aW5mb3JtYXRpb25SZXF1aXJlbWVudD5cbiAgICA8ZG1uOmluZm9ybWF0aW9uUmVxdWlyZW1lbnQgaWQ9XCJfODc3MzBDNUEtNTY0OC00MTVCLTkxODktRUY0RDg4MDVGOEM5XCI+XG4gICAgICA8ZG1uOnJlcXVpcmVkSW5wdXQgaHJlZj1cIiNfNkUzMjA1QUYtN0UzRC00QUJFLUEzNjctOTZGM0Y2RTgyMTBFXCIgLz5cbiAgICA8L2RtbjppbmZvcm1hdGlvblJlcXVpcmVtZW50PlxuICAgIDxkbW46a25vd2xlZGdlUmVxdWlyZW1lbnQgaWQ9XCJfNjNERTdDM0ItQTc2Ny00QjhBLUEwOTgtOTFFQ0I0QjhEMzMwXCI+XG4gICAgICA8ZG1uOnJlcXVpcmVkS25vd2xlZGdlIGhyZWY9XCIjX0ZBRjkwODBFLUY0RUYtNDlGNy1BRUZELTBEMjk5MEQ4RkZEQVwiIC8+XG4gICAgPC9kbW46a25vd2xlZGdlUmVxdWlyZW1lbnQ+XG4gICAgPGRtbjprbm93bGVkZ2VSZXF1aXJlbWVudCBpZD1cIl8yQzk1ODI5RC1GQ0Y5LTQ0RjUtOEY1QS0wQTZDREI2MDYwMERcIj5cbiAgICAgIDxkbW46cmVxdWlyZWRLbm93bGVkZ2UgaHJlZj1cIiNfQzk4QkU5MzktQjlDNy00M0UwLTgzRTgtRUU3QTE2QzUyNzZEXCIgLz5cbiAgICA8L2Rtbjprbm93bGVkZ2VSZXF1aXJlbWVudD5cbiAgICA8ZG1uOmNvbnRleHQgaWQ9XCJfMDhBOUMzM0QtNzE5Ri00QjA1LUFDNDItRDE1NDY0Nzk4QkM0XCIgbGFiZWw9XCJGcm9udCBFbmQgUmF0aW9cIiB0eXBlUmVmPVwiRnJvbnRfRW5kX1JhdGlvXCI+XG4gICAgICA8ZG1uOmNvbnRleHRFbnRyeSBpZD1cIl9DOEY5OEQwRi0yMThGLTRCNjAtQkQ5OS03RkQ5ODA3OEZFNTZcIj5cbiAgICAgICAgPGRtbjppbnZvY2F0aW9uIGlkPVwiX0VCNjU4NTg2LUMzQzgtNDg4RS04MTE4LUU2OUUzMTU4MzEwNlwiIHR5cGVSZWY9XCImbHQ7VW5kZWZpbmVkJmd0O1wiPlxuICAgICAgICAgIDxkbW46bGl0ZXJhbEV4cHJlc3Npb24gaWQ9XCJfNkU3OUU0RDktQkJGQi00RTkwLThBQTMtQTZDMTUzQzNDOTQ2XCI+XG4gICAgICAgICAgICA8ZG1uOnRleHQ+UElUSTwvZG1uOnRleHQ+XG4gICAgICAgICAgPC9kbW46bGl0ZXJhbEV4cHJlc3Npb24+XG4gICAgICAgICAgPGRtbjpiaW5kaW5nIGlkPVwiXzRCOTNFOEM4LUEwOTItNEVBQy1CMjNBLUNDMTM4MjI1QUNDM1wiPlxuICAgICAgICAgICAgPGRtbjpsaXRlcmFsRXhwcmVzc2lvbiBpZD1cIl81MUFDRUMzQy00MjA3LTRGNUYtOEZERC05RURBQTMyNzBFNjBcIiB0eXBlUmVmPVwiJmx0O1VuZGVmaW5lZCZndDtcIj5cbiAgICAgICAgICAgICAgPGRtbjp0ZXh0PihSZXF1ZXN0ZWQgUHJvZHVjdC5BbW91bnQqKChSZXF1ZXN0ZWQgUHJvZHVjdC5SYXRlLzEwMCkvMTIpKS8oMS0oMS8oMSsoUmVxdWVzdGVkIFByb2R1Y3QuUmF0ZS8xMDApLzEyKSoqLVJlcXVlc3RlZCBQcm9kdWN0LlRlcm0pKTwvZG1uOnRleHQ+XG4gICAgICAgICAgICA8L2RtbjpsaXRlcmFsRXhwcmVzc2lvbj5cbiAgICAgICAgICAgIDxkbW46cGFyYW1ldGVyIG5hbWU9XCJwbXRcIiB0eXBlUmVmPVwiJmx0O1VuZGVmaW5lZCZndDtcIiAvPlxuICAgICAgICAgIDwvZG1uOmJpbmRpbmc+XG4gICAgICAgICAgPGRtbjpiaW5kaW5nIGlkPVwiX0I5RDBGQjQ0LTYwNUEtNDJEQi04MUY3LTRERjRDNENDMUNERFwiPlxuICAgICAgICAgICAgPGRtbjpsaXRlcmFsRXhwcmVzc2lvbiBpZD1cIl81RDA1MEI4RC1ERjU1LTQ1RkQtOTg4Qi05QzU2QkVENTNENUJcIiB0eXBlUmVmPVwiJmx0O1VuZGVmaW5lZCZndDtcIj5cbiAgICAgICAgICAgICAgPGRtbjp0ZXh0PkFwcGxpY2FudCBEYXRhLk1vbnRobHkuVGF4PC9kbW46dGV4dD5cbiAgICAgICAgICAgIDwvZG1uOmxpdGVyYWxFeHByZXNzaW9uPlxuICAgICAgICAgICAgPGRtbjpwYXJhbWV0ZXIgbmFtZT1cInRheFwiIHR5cGVSZWY9XCImbHQ7VW5kZWZpbmVkJmd0O1wiIC8+XG4gICAgICAgICAgPC9kbW46YmluZGluZz5cbiAgICAgICAgICA8ZG1uOmJpbmRpbmcgaWQ9XCJfNjczNzI4ODQtMDQwNy00ODEyLTk4NkYtM0EyQ0M0QzNBN0IxXCI+XG4gICAgICAgICAgICA8ZG1uOmxpdGVyYWxFeHByZXNzaW9uIGlkPVwiXzE0QzQ0QTY5LTU2REItNEI2OC1CNzU3LTQyMjVDODBFNEQ4OFwiIHR5cGVSZWY9XCImbHQ7VW5kZWZpbmVkJmd0O1wiPlxuICAgICAgICAgICAgICA8ZG1uOnRleHQ+QXBwbGljYW50IERhdGEuTW9udGhseS5JbnN1cmFuY2U8L2Rtbjp0ZXh0PlxuICAgICAgICAgICAgPC9kbW46bGl0ZXJhbEV4cHJlc3Npb24+XG4gICAgICAgICAgICA8ZG1uOnBhcmFtZXRlciBuYW1lPVwiaW5zdXJhbmNlXCIgdHlwZVJlZj1cIiZsdDtVbmRlZmluZWQmZ3Q7XCIgLz5cbiAgICAgICAgICA8L2RtbjpiaW5kaW5nPlxuICAgICAgICAgIDxkbW46YmluZGluZyBpZD1cIl9FREUwMTA3Qy05NzM2LTRCQjYtOTUwMC0xNzNGRkFGRjAwREJcIj5cbiAgICAgICAgICAgIDxkbW46bGl0ZXJhbEV4cHJlc3Npb24gaWQ9XCJfMERCNURFMDUtQTJBRC00MDEzLUIxOTEtREMxRDE2MzdBMTMyXCIgdHlwZVJlZj1cIiZsdDtVbmRlZmluZWQmZ3Q7XCI+XG4gICAgICAgICAgICAgIDxkbW46dGV4dD5BcHBsaWNhbnQgRGF0YS5Nb250aGx5LkluY29tZTwvZG1uOnRleHQ+XG4gICAgICAgICAgICA8L2RtbjpsaXRlcmFsRXhwcmVzc2lvbj5cbiAgICAgICAgICAgIDxkbW46cGFyYW1ldGVyIG5hbWU9XCJpbmNvbWVcIiB0eXBlUmVmPVwiJmx0O1VuZGVmaW5lZCZndDtcIiAvPlxuICAgICAgICAgIDwvZG1uOmJpbmRpbmc+XG4gICAgICAgIDwvZG1uOmludm9jYXRpb24+XG4gICAgICAgIDxkbW46dmFyaWFibGUgbmFtZT1cIkNsaWVudCBQSVRJXCIgdHlwZVJlZj1cIm51bWJlclwiIC8+XG4gICAgICA8L2Rtbjpjb250ZXh0RW50cnk+XG4gICAgICA8ZG1uOmNvbnRleHRFbnRyeSBpZD1cIl8zRjk1RUZEMC05NEQ3LTREMUEtOUVBOS1DOEUxMjk4MkQ3RThcIj5cbiAgICAgICAgPGRtbjpsaXRlcmFsRXhwcmVzc2lvbiBpZD1cIl8zRjk1RUZEMC05NEQ3LTREMUEtOUVBOS1DOEUxMjk4MkQ3RThcIiB0eXBlUmVmPVwiJmx0O1VuZGVmaW5lZCZndDtcIj5cbiAgICAgICAgICA8ZG1uOnRleHQ+aWYgQ2xpZW50IFBJVEkgJmx0Oz0gTGVuZGVyIEFjY2VwdGFibGUgUElUSSgpXG50aGVuICZxdW90O1N1ZmZpY2llbnQmcXVvdDtcbmVsc2UgJnF1b3Q7SW5zdWZmaWNpZW50JnF1b3Q7PC9kbW46dGV4dD5cbiAgICAgICAgPC9kbW46bGl0ZXJhbEV4cHJlc3Npb24+XG4gICAgICA8L2Rtbjpjb250ZXh0RW50cnk+XG4gICAgPC9kbW46Y29udGV4dD5cbiAgPC9kbW46ZGVjaXNpb24+XG4gIDxkbW46YnVzaW5lc3NLbm93bGVkZ2VNb2RlbCBpZD1cIl9GQUY5MDgwRS1GNEVGLTQ5RjctQUVGRC0wRDI5OTBEOEZGREFcIiBuYW1lPVwiUElUSVwiPlxuICAgIDxkbW46ZXh0ZW5zaW9uRWxlbWVudHMgLz5cbiAgICA8ZG1uOnZhcmlhYmxlIGlkPVwiXzk5NEY0OTBFLTEwQUMtNDcwNC1CRkRBLTE0QTNCOThBOTgxRVwiIG5hbWU9XCJQSVRJXCIgdHlwZVJlZj1cIm51bWJlclwiIC8+XG4gICAgPGRtbjplbmNhcHN1bGF0ZWRMb2dpYyBpZD1cIl9EMzNEOUFFQS00OURGLTQ4OUYtOThFQy00QjQyRkY4QzIwMjdcIiBsYWJlbD1cIlBJVElcIiBraW5kPVwiRkVFTFwiIHR5cGVSZWY9XCJudW1iZXJcIj5cbiAgICAgIDxkbW46Zm9ybWFsUGFyYW1ldGVyIGlkPVwiXzY2NDI4MEMxLUQ1RTAtNDdCRS04MkVGLTBBNjU3OTk3NUE2MlwiIG5hbWU9XCJwbXRcIiB0eXBlUmVmPVwibnVtYmVyXCIgLz5cbiAgICAgIDxkbW46Zm9ybWFsUGFyYW1ldGVyIGlkPVwiXzNFN0RGMEIzLUM0OEItNDgxRC1CMDkyLUZDODJFQzJGNkUzN1wiIG5hbWU9XCJ0YXhcIiB0eXBlUmVmPVwibnVtYmVyXCIgLz5cbiAgICAgIDxkbW46Zm9ybWFsUGFyYW1ldGVyIGlkPVwiX0RGNjkxRjg2LUFEMTItNDZCQS1CMTQ5LUFDODc1ODM2QTExNlwiIG5hbWU9XCJpbnN1cmFuY2VcIiB0eXBlUmVmPVwibnVtYmVyXCIgLz5cbiAgICAgIDxkbW46Zm9ybWFsUGFyYW1ldGVyIGlkPVwiXzlFMkUyNTdGLTkwRUItNEZDNC04REQ5LTA4OTc4NEU3NTc5RVwiIG5hbWU9XCJpbmNvbWVcIiB0eXBlUmVmPVwibnVtYmVyXCIgLz5cbiAgICAgIDxkbW46bGl0ZXJhbEV4cHJlc3Npb24gaWQ9XCJfQTMyRUQ0QTUtN0I4OS00MEY3LUJFMjUtQ0RCNjM2RkUwNzFDXCIgdHlwZVJlZj1cIiZsdDtVbmRlZmluZWQmZ3Q7XCI+XG4gICAgICAgIDxkbW46dGV4dD4ocG10ICsgdGF4ICsgaW5zdXJhbmNlKSAvIGluY29tZTwvZG1uOnRleHQ+XG4gICAgICA8L2RtbjpsaXRlcmFsRXhwcmVzc2lvbj5cbiAgICA8L2RtbjplbmNhcHN1bGF0ZWRMb2dpYz5cbiAgPC9kbW46YnVzaW5lc3NLbm93bGVkZ2VNb2RlbD5cbiAgPGRtbjppbnB1dERhdGEgaWQ9XCJfMUNGNUNFRkEtQUY5Ny00NkY5LTlDRDUtOUE4QUVCQjIwQjRFXCIgbmFtZT1cIkFwcGxpY2FudCBEYXRhXCI+XG4gICAgPGRtbjpleHRlbnNpb25FbGVtZW50cyAvPlxuICAgIDxkbW46dmFyaWFibGUgaWQ9XCJfMkJCRjI4RDItREYwOS00MjAxLThEN0EtNTgyMEUyNjA1OTJCXCIgbmFtZT1cIkFwcGxpY2FudCBEYXRhXCIgdHlwZVJlZj1cIkFwcGxpY2FudF9EYXRhXCIgLz5cbiAgPC9kbW46aW5wdXREYXRhPlxuICA8ZG1uOmRlY2lzaW9uIGlkPVwiX0Q2RjQyMzRGLTE1QjMtNEY1Qi1CODE0LTVGNkZGMjlEMjkwN1wiIG5hbWU9XCJCYWNrIEVuZCBSYXRpb1wiPlxuICAgIDxkbW46ZXh0ZW5zaW9uRWxlbWVudHMgLz5cbiAgICA8ZG1uOnZhcmlhYmxlIGlkPVwiXzVBRjU3MUY3LUFENDEtNDNEQy1BQkZELTI2NjcyNTg1MDQyRlwiIG5hbWU9XCJCYWNrIEVuZCBSYXRpb1wiIHR5cGVSZWY9XCJCYWNrX0VuZF9SYXRpb1wiIC8+XG4gICAgPGRtbjppbmZvcm1hdGlvblJlcXVpcmVtZW50IGlkPVwiXzc3QkE0MDlCLUUwMEQtNEZCQy1CNTIyLThGNjU2RDRGNkYwRVwiPlxuICAgICAgPGRtbjpyZXF1aXJlZElucHV0IGhyZWY9XCIjXzFDRjVDRUZBLUFGOTctNDZGOS05Q0Q1LTlBOEFFQkIyMEI0RVwiIC8+XG4gICAgPC9kbW46aW5mb3JtYXRpb25SZXF1aXJlbWVudD5cbiAgICA8ZG1uOmtub3dsZWRnZVJlcXVpcmVtZW50IGlkPVwiXzRENDQxQzExLTcwNDItNDlDRi1BNDJDLTE3QTQzNDhBN0YyOVwiPlxuICAgICAgPGRtbjpyZXF1aXJlZEtub3dsZWRnZSBocmVmPVwiI180Qzc4OERCRC1DNjcyLTRGNDEtOUFGRS05QzdEMkMxNDU3MzRcIiAvPlxuICAgIDwvZG1uOmtub3dsZWRnZVJlcXVpcmVtZW50PlxuICAgIDxkbW46a25vd2xlZGdlUmVxdWlyZW1lbnQgaWQ9XCJfMzIxN0Q2NTUtNDQ4NC00NzMzLUE5QUUtNEY5Q0YzMEQ5OTI0XCI+XG4gICAgICA8ZG1uOnJlcXVpcmVkS25vd2xlZGdlIGhyZWY9XCIjX0RBNUNDRjYyLTkwQTgtNENGQy1BMTM3LTk4QjUyODUyMjU4OFwiIC8+XG4gICAgPC9kbW46a25vd2xlZGdlUmVxdWlyZW1lbnQ+XG4gICAgPGRtbjpjb250ZXh0IGlkPVwiXzVGOUZFQTRFLUIzRkMtNEJDMi05MTNFLTM2QjgwNzFGQTc3N1wiIGxhYmVsPVwiQmFjayBFbmQgUmF0aW9cIiB0eXBlUmVmPVwiQmFja19FbmRfUmF0aW9cIj5cbiAgICAgIDxkbW46Y29udGV4dEVudHJ5IGlkPVwiX0YzRUQ5MDU5LTQwMEYtNEJFOC1CMjUwLUMyQUJDRDlGRjAyMlwiPlxuICAgICAgICA8ZG1uOmludm9jYXRpb24gaWQ9XCJfNEE3RkM4RTAtMjVFRi00REFGLTg0NUEtOTNCRDg5QzJCQzhDXCIgdHlwZVJlZj1cIiZsdDtVbmRlZmluZWQmZ3Q7XCI+XG4gICAgICAgICAgPGRtbjpsaXRlcmFsRXhwcmVzc2lvbiBpZD1cIl9GMEU4MDkwMC0xOTY0LTQxNDItOUEwNS03M0U3QTJFMEYyQ0RcIj5cbiAgICAgICAgICAgIDxkbW46dGV4dD5EVEk8L2Rtbjp0ZXh0PlxuICAgICAgICAgIDwvZG1uOmxpdGVyYWxFeHByZXNzaW9uPlxuICAgICAgICAgIDxkbW46YmluZGluZz5cbiAgICAgICAgICAgIDxkbW46bGl0ZXJhbEV4cHJlc3Npb24gaWQ9XCJfM0QwQTE5NzktRTU5QS00ODNGLUJEQTgtMTM4Rjk5QkE1QUIzXCIgdHlwZVJlZj1cIiZsdDtVbmRlZmluZWQmZ3Q7XCI+XG4gICAgICAgICAgICAgIDxkbW46dGV4dD5BcHBsaWNhbnQgRGF0YS5Nb250aGx5LlJlcGF5bWVudHMgKyBBcHBsaWNhbnQgRGF0YS5Nb250aGx5LkV4cGVuc2VzPC9kbW46dGV4dD5cbiAgICAgICAgICAgIDwvZG1uOmxpdGVyYWxFeHByZXNzaW9uPlxuICAgICAgICAgICAgPGRtbjpwYXJhbWV0ZXIgbmFtZT1cImRcIiB0eXBlUmVmPVwiJmx0O1VuZGVmaW5lZCZndDtcIiAvPlxuICAgICAgICAgIDwvZG1uOmJpbmRpbmc+XG4gICAgICAgICAgPGRtbjpiaW5kaW5nPlxuICAgICAgICAgICAgPGRtbjpsaXRlcmFsRXhwcmVzc2lvbiBpZD1cIl9EOTg1Rjg4Ni03MUMwLTRGNjUtODgwOC0yQ0VGMzY2QkVDQzhcIiB0eXBlUmVmPVwiJmx0O1VuZGVmaW5lZCZndDtcIj5cbiAgICAgICAgICAgICAgPGRtbjp0ZXh0PkFwcGxpY2FudCBEYXRhLk1vbnRobHkuSW5jb21lPC9kbW46dGV4dD5cbiAgICAgICAgICAgIDwvZG1uOmxpdGVyYWxFeHByZXNzaW9uPlxuICAgICAgICAgICAgPGRtbjpwYXJhbWV0ZXIgbmFtZT1cImlcIiB0eXBlUmVmPVwiJmx0O1VuZGVmaW5lZCZndDtcIiAvPlxuICAgICAgICAgIDwvZG1uOmJpbmRpbmc+XG4gICAgICAgIDwvZG1uOmludm9jYXRpb24+XG4gICAgICAgIDxkbW46dmFyaWFibGUgbmFtZT1cIkNsaWVudCBEVElcIiB0eXBlUmVmPVwibnVtYmVyXCIgLz5cbiAgICAgIDwvZG1uOmNvbnRleHRFbnRyeT5cbiAgICAgIDxkbW46Y29udGV4dEVudHJ5IGlkPVwiX0QxRjk2MTAyLTQxNTgtNDVCQi04QzlBLUI3QTNCRTJDMDIwNlwiPlxuICAgICAgICA8ZG1uOmxpdGVyYWxFeHByZXNzaW9uIGlkPVwiX0QxRjk2MTAyLTQxNTgtNDVCQi04QzlBLUI3QTNCRTJDMDIwNlwiIHR5cGVSZWY9XCImbHQ7VW5kZWZpbmVkJmd0O1wiPlxuICAgICAgICAgIDxkbW46dGV4dD5pZiBDbGllbnQgRFRJICZsdDs9IExlbmRlciBBY2NlcHRhYmxlIERUSSgpXG50aGVuICZxdW90O1N1ZmZpY2llbnQmcXVvdDtcbmVsc2UgJnF1b3Q7SW5zdWZmaWNpZW50JnF1b3Q7PC9kbW46dGV4dD5cbiAgICAgICAgPC9kbW46bGl0ZXJhbEV4cHJlc3Npb24+XG4gICAgICA8L2Rtbjpjb250ZXh0RW50cnk+XG4gICAgPC9kbW46Y29udGV4dD5cbiAgPC9kbW46ZGVjaXNpb24+XG4gIDxkbW46ZGVjaXNpb24gaWQ9XCJfMkZFNTFEQjEtMzA4My00QkY3LUFBNzEtMEIwMDY1MzEwRTcyXCIgbmFtZT1cIkNyZWRpdCBTY29yZSBSYXRpbmdcIj5cbiAgICA8ZG1uOmV4dGVuc2lvbkVsZW1lbnRzIC8+XG4gICAgPGRtbjp2YXJpYWJsZSBpZD1cIl84MjIyOEU0MS0yMkQxLTQ3NTgtOTdDMy1CQkZFOTBFREI1RkJcIiBuYW1lPVwiQ3JlZGl0IFNjb3JlIFJhdGluZ1wiIHR5cGVSZWY9XCJDcmVkaXRfU2NvcmVfUmF0aW5nXCIgLz5cbiAgICA8ZG1uOmluZm9ybWF0aW9uUmVxdWlyZW1lbnQgaWQ9XCJfMzFBMUI2QjItQTJBNi00RTAzLUI4OTgtMjY1NzNBNUNGM0JBXCI+XG4gICAgICA8ZG1uOnJlcXVpcmVkSW5wdXQgaHJlZj1cIiNfNEM4OUU1OUMtRkREQS00MzhDLThEMUYtMEIxMTk0RUY2REFFXCIgLz5cbiAgICA8L2RtbjppbmZvcm1hdGlvblJlcXVpcmVtZW50PlxuICAgIDxkbW46ZGVjaXNpb25UYWJsZSBpZD1cIl80QUNFRkZGMC1BRDJDLTREQjgtOUJBRC03QkNDRkIwM0YyOTVcIiBsYWJlbD1cIkNyZWRpdCBTY29yZSBSYXRpbmdcIiB0eXBlUmVmPVwiQ3JlZGl0X1Njb3JlX1JhdGluZ1wiIGhpdFBvbGljeT1cIlVOSVFVRVwiPlxuICAgICAgPGRtbjppbnB1dCBpZD1cIl80NEM5MzYyNy02MjlDLTQ4QjgtQjcxQS1BRTIyNjZBNDI2NzRcIj5cbiAgICAgICAgPGRtbjppbnB1dEV4cHJlc3Npb24gaWQ9XCJfMDA5MzJBMDAtNUVDRS00QUVGLUFBNjgtOTJFNjc5Q0VGNEFCXCIgdHlwZVJlZj1cIm51bWJlclwiPlxuICAgICAgICAgIDxkbW46dGV4dD5DcmVkaXQgU2NvcmUuRklDTzwvZG1uOnRleHQ+XG4gICAgICAgIDwvZG1uOmlucHV0RXhwcmVzc2lvbj5cbiAgICAgIDwvZG1uOmlucHV0PlxuICAgICAgPGRtbjpvdXRwdXQgaWQ9XCJfOUMyMDFGQUItQjQ5Qy00RDIyLTkwMEItQjRFODJENTQ2OUZCXCIgbmFtZT1cIlwiIHR5cGVSZWY9XCImbHQ7VW5kZWZpbmVkJmd0O1wiIC8+XG4gICAgICA8ZG1uOmFubm90YXRpb24gbmFtZT1cIkFubm90YXRpb25zXCIgLz5cbiAgICAgIDxkbW46cnVsZSBpZD1cIl9BRUQ3MDNFMS04RTU2LTREMjctQTUxMS0zODc1QUQxRDEyMkVcIj5cbiAgICAgICAgPGRtbjppbnB1dEVudHJ5IGlkPVwiX0UyQzlGMzBCLUQ1MjktNDhEOC1BNTFDLUEyQUNDQzgxMDlCM1wiPlxuICAgICAgICAgIDxkbW46dGV4dD4mZ3Q7PSA3NTA8L2Rtbjp0ZXh0PlxuICAgICAgICA8L2RtbjppbnB1dEVudHJ5PlxuICAgICAgICA8ZG1uOm91dHB1dEVudHJ5IGlkPVwiX0ExRkYyQjJELUVGMzQtNDJBRC1BNDVBLTVGRkRGQTIxRkE2RFwiPlxuICAgICAgICAgIDxkbW46dGV4dD4mcXVvdDtFeGNlbGxlbnQmcXVvdDs8L2Rtbjp0ZXh0PlxuICAgICAgICA8L2RtbjpvdXRwdXRFbnRyeT5cbiAgICAgICAgPGRtbjphbm5vdGF0aW9uRW50cnk+XG4gICAgICAgICAgPGRtbjp0ZXh0PjwvZG1uOnRleHQ+XG4gICAgICAgIDwvZG1uOmFubm90YXRpb25FbnRyeT5cbiAgICAgIDwvZG1uOnJ1bGU+XG4gICAgICA8ZG1uOnJ1bGUgaWQ9XCJfMUZBMTJCOUYtMjg4Qy00MkU4LUI3N0YtQkUyRDM3MDJCN0I2XCI+XG4gICAgICAgIDxkbW46aW5wdXRFbnRyeSBpZD1cIl9DQTVBRTA2Ny0wRTFBLTQ0Q0EtQjg1Qy05MTJGOUVENDU5NENcIj5cbiAgICAgICAgICA8ZG1uOnRleHQ+WzcwMC4uNzUwKTwvZG1uOnRleHQ+XG4gICAgICAgIDwvZG1uOmlucHV0RW50cnk+XG4gICAgICAgIDxkbW46b3V0cHV0RW50cnkgaWQ9XCJfODMzMzA3QTItQjkyNC00MjJDLUE0RjUtQkZGQUIyN0Q4NkQ1XCI+XG4gICAgICAgICAgPGRtbjp0ZXh0PiZxdW90O0dvb2QmcXVvdDs8L2Rtbjp0ZXh0PlxuICAgICAgICA8L2RtbjpvdXRwdXRFbnRyeT5cbiAgICAgICAgPGRtbjphbm5vdGF0aW9uRW50cnk+XG4gICAgICAgICAgPGRtbjp0ZXh0PjwvZG1uOnRleHQ+XG4gICAgICAgIDwvZG1uOmFubm90YXRpb25FbnRyeT5cbiAgICAgIDwvZG1uOnJ1bGU+XG4gICAgICA8ZG1uOnJ1bGUgaWQ9XCJfMTE5NzZFQkEtNjBCQy00MjFCLUEyNzAtMDg5QTQ1RTlCMTY3XCI+XG4gICAgICAgIDxkbW46aW5wdXRFbnRyeSBpZD1cIl83NUQ2MTJENS1EMjAxLTQ5MzItODUyNC1FNDkxODNGNTFEMkRcIj5cbiAgICAgICAgICA8ZG1uOnRleHQ+WzY1MC4uNzAwKTwvZG1uOnRleHQ+XG4gICAgICAgIDwvZG1uOmlucHV0RW50cnk+XG4gICAgICAgIDxkbW46b3V0cHV0RW50cnkgaWQ9XCJfRTE4RkUyQjItNzI5Qy00MUYwLUI1Q0MtMEU1RTVFQTQzMUUzXCI+XG4gICAgICAgICAgPGRtbjp0ZXh0PiZxdW90O0ZhaXImcXVvdDs8L2Rtbjp0ZXh0PlxuICAgICAgICA8L2RtbjpvdXRwdXRFbnRyeT5cbiAgICAgICAgPGRtbjphbm5vdGF0aW9uRW50cnk+XG4gICAgICAgICAgPGRtbjp0ZXh0PjwvZG1uOnRleHQ+XG4gICAgICAgIDwvZG1uOmFubm90YXRpb25FbnRyeT5cbiAgICAgIDwvZG1uOnJ1bGU+XG4gICAgICA8ZG1uOnJ1bGUgaWQ9XCJfMTJGODA3N0YtRTYwMS00ODgyLTkzRTEtMzE1MDhCMTQwMkUxXCI+XG4gICAgICAgIDxkbW46aW5wdXRFbnRyeSBpZD1cIl82MTM3NEU3RC00RUYzLTQ2MDMtOTdBMS05RDFGQUJBQUEzQzhcIj5cbiAgICAgICAgICA8ZG1uOnRleHQ+WzYwMC4uNjUwKTwvZG1uOnRleHQ+XG4gICAgICAgIDwvZG1uOmlucHV0RW50cnk+XG4gICAgICAgIDxkbW46b3V0cHV0RW50cnkgaWQ9XCJfNzUxMzVGNEMtNkJBNy00MTgwLUI3MjYtQTBENzk1QjNEN0ZGXCI+XG4gICAgICAgICAgPGRtbjp0ZXh0PiZxdW90O1Bvb3ImcXVvdDs8L2Rtbjp0ZXh0PlxuICAgICAgICA8L2RtbjpvdXRwdXRFbnRyeT5cbiAgICAgICAgPGRtbjphbm5vdGF0aW9uRW50cnk+XG4gICAgICAgICAgPGRtbjp0ZXh0PjwvZG1uOnRleHQ+XG4gICAgICAgIDwvZG1uOmFubm90YXRpb25FbnRyeT5cbiAgICAgIDwvZG1uOnJ1bGU+XG4gICAgICA8ZG1uOnJ1bGUgaWQ9XCJfRDAyNTI1NEMtOTM3Ni00NDI1LTgwODQtNDUxRTA5MjQzQ0UyXCI+XG4gICAgICAgIDxkbW46aW5wdXRFbnRyeSBpZD1cIl82QzEzQjUwNy1GQjYwLTQwQUQtOEY1Qy0yNDA3RjE0MTNBNUNcIj5cbiAgICAgICAgICA8ZG1uOnRleHQ+Jmx0OyA2MDA8L2Rtbjp0ZXh0PlxuICAgICAgICA8L2RtbjppbnB1dEVudHJ5PlxuICAgICAgICA8ZG1uOm91dHB1dEVudHJ5IGlkPVwiXzFGQjczMDhBLUUzN0ItNDZFQS04MDcwLUM2N0UyMzg4QTg2OVwiPlxuICAgICAgICAgIDxkbW46dGV4dD4mcXVvdDtCYWQmcXVvdDs8L2Rtbjp0ZXh0PlxuICAgICAgICA8L2RtbjpvdXRwdXRFbnRyeT5cbiAgICAgICAgPGRtbjphbm5vdGF0aW9uRW50cnk+XG4gICAgICAgICAgPGRtbjp0ZXh0PjwvZG1uOnRleHQ+XG4gICAgICAgIDwvZG1uOmFubm90YXRpb25FbnRyeT5cbiAgICAgIDwvZG1uOnJ1bGU+XG4gICAgPC9kbW46ZGVjaXNpb25UYWJsZT5cbiAgPC9kbW46ZGVjaXNpb24+XG4gIDxkbW46ZGVjaXNpb24gaWQ9XCJfMjFDNTA3NjMtRTQ5Ri00RDgzLUE4MjQtMTZEQTZBQTg3QzY0XCIgbmFtZT1cIkxvYW4gUHJlLVF1YWxpZmljYXRpb25cIj5cbiAgICA8ZG1uOmV4dGVuc2lvbkVsZW1lbnRzIC8+XG4gICAgPGRtbjp2YXJpYWJsZSBpZD1cIl8wNDdBMjVGNS1ERUYyLTQ0QkQtOTVCNy1GQjQ5QTQzM0Y4NzhcIiBuYW1lPVwiTG9hbiBQcmUtUXVhbGlmaWNhdGlvblwiIHR5cGVSZWY9XCJMb2FuX1F1YWxpZmljYXRpb25cIiAvPlxuICAgIDxkbW46aW5mb3JtYXRpb25SZXF1aXJlbWVudCBpZD1cIl9BM0U5NUIzMi0yRUZELTQwQUQtQjVFNC0wQTczQTE1NDIwMTFcIj5cbiAgICAgIDxkbW46cmVxdWlyZWREZWNpc2lvbiBocmVmPVwiI19ENkY0MjM0Ri0xNUIzLTRGNUItQjgxNC01RjZGRjI5RDI5MDdcIiAvPlxuICAgIDwvZG1uOmluZm9ybWF0aW9uUmVxdWlyZW1lbnQ+XG4gICAgPGRtbjppbmZvcm1hdGlvblJlcXVpcmVtZW50IGlkPVwiXzBCOTkyRjAxLUJBNzctNEYwNi1BODMwLUQ4OTQ4QjQ2NzI3MlwiPlxuICAgICAgPGRtbjpyZXF1aXJlZERlY2lzaW9uIGhyZWY9XCIjX0YwREM4OTIzLTVGQzctNDIwMC04QkQxLTQ2MUQ1RjM3MTRCRVwiIC8+XG4gICAgPC9kbW46aW5mb3JtYXRpb25SZXF1aXJlbWVudD5cbiAgICA8ZG1uOmluZm9ybWF0aW9uUmVxdWlyZW1lbnQgaWQ9XCJfQjYwMDJGMzMtNDg4OC00OEM1LUIyNjUtNjM2MDMwRjhDMkRDXCI+XG4gICAgICA8ZG1uOnJlcXVpcmVkRGVjaXNpb24gaHJlZj1cIiNfMkZFNTFEQjEtMzA4My00QkY3LUFBNzEtMEIwMDY1MzEwRTcyXCIgLz5cbiAgICA8L2RtbjppbmZvcm1hdGlvblJlcXVpcmVtZW50PlxuICAgIDxkbW46ZGVjaXNpb25UYWJsZSBpZD1cIl9FRjdGNDA0QS05MzlFLTQ4ODktOTVEOC1FNDA1M0REMUVFRDlcIiBsYWJlbD1cIkxvYW4gUHJlLVF1YWxpZmljYXRpb25cIiB0eXBlUmVmPVwiTG9hbl9RdWFsaWZpY2F0aW9uXCIgaGl0UG9saWN5PVwiRklSU1RcIj5cbiAgICAgIDxkbW46aW5wdXQgaWQ9XCJfNThBQkQ4MUItRkQxNi00NUMzLTlFNjQtREIyNzFBQTkxN0MwXCI+XG4gICAgICAgIDxkbW46aW5wdXRFeHByZXNzaW9uIGlkPVwiXzUyNjI0NDFFLUY4MTItNDU1NC1BRjAyLTUyNjdCRERGODBGNVwiIHR5cGVSZWY9XCJDcmVkaXRfU2NvcmVfUmF0aW5nXCI+XG4gICAgICAgICAgPGRtbjp0ZXh0PkNyZWRpdCBTY29yZSBSYXRpbmc8L2Rtbjp0ZXh0PlxuICAgICAgICA8L2RtbjppbnB1dEV4cHJlc3Npb24+XG4gICAgICA8L2RtbjppbnB1dD5cbiAgICAgIDxkbW46aW5wdXQgaWQ9XCJfMzYyNThEQTAtRTUyNy00MjlDLThGQTEtN0RFQTYzNjQ3Njg5XCI+XG4gICAgICAgIDxkbW46aW5wdXRFeHByZXNzaW9uIGlkPVwiXzRFOUYwRTA2LTg1RjEtNEQxMC1CMzBELUZCNTU3NDFCOTBCQ1wiIHR5cGVSZWY9XCJCYWNrX0VuZF9SYXRpb1wiPlxuICAgICAgICAgIDxkbW46dGV4dD5CYWNrIEVuZCBSYXRpbzwvZG1uOnRleHQ+XG4gICAgICAgIDwvZG1uOmlucHV0RXhwcmVzc2lvbj5cbiAgICAgIDwvZG1uOmlucHV0PlxuICAgICAgPGRtbjppbnB1dCBpZD1cIl9BMTAyQ0Q4QS1DMzhELTQ4RTQtQkM1OS1DQTY2MEQ2RkJGMEFcIj5cbiAgICAgICAgPGRtbjppbnB1dEV4cHJlc3Npb24gaWQ9XCJfNUQ3OUVFRjUtNzFCMi00MzYwLUI1OUEtMjE1QUE1NTkzRENCXCIgdHlwZVJlZj1cIkZyb250X0VuZF9SYXRpb1wiPlxuICAgICAgICAgIDxkbW46dGV4dD5Gcm9udCBFbmQgUmF0aW88L2Rtbjp0ZXh0PlxuICAgICAgICA8L2RtbjppbnB1dEV4cHJlc3Npb24+XG4gICAgICA8L2RtbjppbnB1dD5cbiAgICAgIDxkbW46b3V0cHV0IGlkPVwiX0I4OTVCMDk1LUMzRDYtNDhCNC04QTUwLUQyRDNCOENDNkE0NVwiIG5hbWU9XCJRdWFsaWZpY2F0aW9uXCIgdHlwZVJlZj1cInN0cmluZ1wiIC8+XG4gICAgICA8ZG1uOm91dHB1dCBpZD1cIl9BOEQyRDNCMS0wN0IzLTQ2MTktOERFMC1GOTIzRjUxMTA1OEJcIiBuYW1lPVwiUmVhc29uXCIgdHlwZVJlZj1cInN0cmluZ1wiIC8+XG4gICAgICA8ZG1uOmFubm90YXRpb24gbmFtZT1cIkFubm90YXRpb25zXCIgLz5cbiAgICAgIDxkbW46cnVsZSBpZD1cIl9CNDlFMTY0Mi1GMzUyLTREMkUtOTJCNi1FNURGQTU5QUFGQUNcIj5cbiAgICAgICAgPGRtbjppbnB1dEVudHJ5IGlkPVwiXzZDODNDNDQ2LTFBOUEtNEZGQy1CMzBDLTIzOTE1RkY5Q0M0M1wiPlxuICAgICAgICAgIDxkbW46dGV4dD4mcXVvdDtQb29yJnF1b3Q7LCAmcXVvdDtCYWQmcXVvdDs8L2Rtbjp0ZXh0PlxuICAgICAgICA8L2RtbjppbnB1dEVudHJ5PlxuICAgICAgICA8ZG1uOmlucHV0RW50cnkgaWQ9XCJfMEJDOTNDQjktRkQyMC00NUM4LUE0OTgtMzlFNDQ2NEI2MjI0XCI+XG4gICAgICAgICAgPGRtbjp0ZXh0Pi08L2Rtbjp0ZXh0PlxuICAgICAgICA8L2RtbjppbnB1dEVudHJ5PlxuICAgICAgICA8ZG1uOmlucHV0RW50cnkgaWQ9XCJfMTU1NEE5ODMtQjJDMS00MEE3LTk2MTQtNTA3MjA0MjBGNEIyXCI+XG4gICAgICAgICAgPGRtbjp0ZXh0Pi08L2Rtbjp0ZXh0PlxuICAgICAgICA8L2RtbjppbnB1dEVudHJ5PlxuICAgICAgICA8ZG1uOm91dHB1dEVudHJ5IGlkPVwiXzdCMzlCOTY0LTRFMjUtNDcxNy05MkZFLUEzNkYyQjM5RkFCOVwiPlxuICAgICAgICAgIDxkbW46dGV4dD4mcXVvdDtOb3QgUXVhbGlmaWVkJnF1b3Q7PC9kbW46dGV4dD5cbiAgICAgICAgPC9kbW46b3V0cHV0RW50cnk+XG4gICAgICAgIDxkbW46b3V0cHV0RW50cnkgaWQ9XCJfQTg1MkY1QjYtQzVERi00QURELThCOTMtOTcwMUYwNzI0OTEyXCI+XG4gICAgICAgICAgPGRtbjp0ZXh0PiZxdW90O0NyZWRpdCBTY29yZSB0b28gbG93LiZxdW90OzwvZG1uOnRleHQ+XG4gICAgICAgIDwvZG1uOm91dHB1dEVudHJ5PlxuICAgICAgICA8ZG1uOmFubm90YXRpb25FbnRyeT5cbiAgICAgICAgICA8ZG1uOnRleHQ+PC9kbW46dGV4dD5cbiAgICAgICAgPC9kbW46YW5ub3RhdGlvbkVudHJ5PlxuICAgICAgPC9kbW46cnVsZT5cbiAgICAgIDxkbW46cnVsZSBpZD1cIl8yMTQ4NjVGNC1DOTY4LTQzOEMtQTM4NS02QjI4MjNBRjFCQzNcIj5cbiAgICAgICAgPGRtbjppbnB1dEVudHJ5IGlkPVwiXzE4NjE3QTJBLTZERDMtNDFBOS04N0Q2LTY4QzkxNTU0NjIwRVwiPlxuICAgICAgICAgIDxkbW46dGV4dD4tPC9kbW46dGV4dD5cbiAgICAgICAgPC9kbW46aW5wdXRFbnRyeT5cbiAgICAgICAgPGRtbjppbnB1dEVudHJ5IGlkPVwiXzVDNzBCQjgxLUNBRkQtNDY5NS1BMjQxLTY4RjQ0MUZGOUEyOVwiPlxuICAgICAgICAgIDxkbW46dGV4dD4mcXVvdDtJbnN1ZmZpY2llbnQmcXVvdDs8L2Rtbjp0ZXh0PlxuICAgICAgICA8L2RtbjppbnB1dEVudHJ5PlxuICAgICAgICA8ZG1uOmlucHV0RW50cnkgaWQ9XCJfNzhBM0MzQTAtRUVCQy00NDhCLUIxQzEtNUNGRjZDN0YyQUM1XCI+XG4gICAgICAgICAgPGRtbjp0ZXh0PiZxdW90O1N1ZmZpY2llbnQmcXVvdDs8L2Rtbjp0ZXh0PlxuICAgICAgICA8L2RtbjppbnB1dEVudHJ5PlxuICAgICAgICA8ZG1uOm91dHB1dEVudHJ5IGlkPVwiXzNDMzhEMTgxLUNDQTEtNDY3OC1BM0RELTBBNUNFNkQ1OUZEQ1wiPlxuICAgICAgICAgIDxkbW46dGV4dD4mcXVvdDtOb3QgUXVhbGlmaWVkJnF1b3Q7PC9kbW46dGV4dD5cbiAgICAgICAgPC9kbW46b3V0cHV0RW50cnk+XG4gICAgICAgIDxkbW46b3V0cHV0RW50cnkgaWQ9XCJfRjQyODRCOUYtQzc3QS00MjlCLUE2ODktRTIxMkNGQjE5Q0I3XCI+XG4gICAgICAgICAgPGRtbjp0ZXh0PiZxdW90O0RlYnQgdG8gaW5jb21lIHJhdGlvIGlzIHRvbyBoaWdoLiZxdW90OzwvZG1uOnRleHQ+XG4gICAgICAgIDwvZG1uOm91dHB1dEVudHJ5PlxuICAgICAgICA8ZG1uOmFubm90YXRpb25FbnRyeT5cbiAgICAgICAgICA8ZG1uOnRleHQ+PC9kbW46dGV4dD5cbiAgICAgICAgPC9kbW46YW5ub3RhdGlvbkVudHJ5PlxuICAgICAgPC9kbW46cnVsZT5cbiAgICAgIDxkbW46cnVsZSBpZD1cIl83M0U5Njc3My0wNjRFLTQ5RjYtOTJCMi1BQTc2RTZCRjZCOEFcIj5cbiAgICAgICAgPGRtbjppbnB1dEVudHJ5IGlkPVwiXzI0QTgyNUYwLUI4QzctNDJDOS1CQkEyLTQ0NDJDQUU2RjkxQVwiPlxuICAgICAgICAgIDxkbW46dGV4dD4tPC9kbW46dGV4dD5cbiAgICAgICAgPC9kbW46aW5wdXRFbnRyeT5cbiAgICAgICAgPGRtbjppbnB1dEVudHJ5IGlkPVwiX0I3RjU5QTVDLTRBRjEtNEU5MC1CQjBELTgzQzYzQTgzOTBFNlwiPlxuICAgICAgICAgIDxkbW46dGV4dD4mcXVvdDtTdWZmaWNpZW50JnF1b3Q7PC9kbW46dGV4dD5cbiAgICAgICAgPC9kbW46aW5wdXRFbnRyeT5cbiAgICAgICAgPGRtbjppbnB1dEVudHJ5IGlkPVwiXzA5QTIzRkQ0LTlBOTgtNEMzNC05RTlCLTlFOEVFNjUyQUJCQ1wiPlxuICAgICAgICAgIDxkbW46dGV4dD4mcXVvdDtJbnN1ZmZpY2llbnQmcXVvdDs8L2Rtbjp0ZXh0PlxuICAgICAgICA8L2RtbjppbnB1dEVudHJ5PlxuICAgICAgICA8ZG1uOm91dHB1dEVudHJ5IGlkPVwiXzlCRjEwOTZBLTFBRjMtNEQyMS05MjczLTQ2MERFNTU1RjBCNlwiPlxuICAgICAgICAgIDxkbW46dGV4dD4mcXVvdDtOb3QgUXVhbGlmaWVkJnF1b3Q7PC9kbW46dGV4dD5cbiAgICAgICAgPC9kbW46b3V0cHV0RW50cnk+XG4gICAgICAgIDxkbW46b3V0cHV0RW50cnkgaWQ9XCJfNEQ4MDVCQjItQjc5RS00MkMyLUE1NjItNjc0RUNCREZBMDFDXCI+XG4gICAgICAgICAgPGRtbjp0ZXh0PiZxdW90O01vcnRnYWdlIHBheW1lbnQgdG8gaW5jb21lIHJhdGlvIGlzIHRvbyBoaWdoLiZxdW90OzwvZG1uOnRleHQ+XG4gICAgICAgIDwvZG1uOm91dHB1dEVudHJ5PlxuICAgICAgICA8ZG1uOmFubm90YXRpb25FbnRyeT5cbiAgICAgICAgICA8ZG1uOnRleHQ+PC9kbW46dGV4dD5cbiAgICAgICAgPC9kbW46YW5ub3RhdGlvbkVudHJ5PlxuICAgICAgPC9kbW46cnVsZT5cbiAgICAgIDxkbW46cnVsZSBpZD1cIl83QzI0MkM1OC02Q0FCLTQzQ0YtOTIzNS0zNDdBNzJBRTNGOUVcIj5cbiAgICAgICAgPGRtbjppbnB1dEVudHJ5IGlkPVwiXzlERjJBMDI2LThCODctNEM3NS1CQjNELTU0RkYwRTJBMkUzNlwiPlxuICAgICAgICAgIDxkbW46dGV4dD4tPC9kbW46dGV4dD5cbiAgICAgICAgPC9kbW46aW5wdXRFbnRyeT5cbiAgICAgICAgPGRtbjppbnB1dEVudHJ5IGlkPVwiX0ZGM0U5NzgyLUJFOUMtNEIwQy1BNjNCLUU5MDZGNjExNjI1MVwiPlxuICAgICAgICAgIDxkbW46dGV4dD4mcXVvdDtJbnN1ZmZpY2llbnQmcXVvdDs8L2Rtbjp0ZXh0PlxuICAgICAgICA8L2RtbjppbnB1dEVudHJ5PlxuICAgICAgICA8ZG1uOmlucHV0RW50cnkgaWQ9XCJfNTQ0Njg3Q0QtRjNBMi00NkM3LTg0MzktRTVFMkU3QjY0ODNEXCI+XG4gICAgICAgICAgPGRtbjp0ZXh0PiZxdW90O0luc3VmZmljaWVudCZxdW90OzwvZG1uOnRleHQ+XG4gICAgICAgIDwvZG1uOmlucHV0RW50cnk+XG4gICAgICAgIDxkbW46b3V0cHV0RW50cnkgaWQ9XCJfNUE5NThEMkUtQjMxMC00QUI5LUJGNUItNDk2MjNCRTVEQjU1XCI+XG4gICAgICAgICAgPGRtbjp0ZXh0PiZxdW90O05vdCBRdWFsaWZpZWQmcXVvdDs8L2Rtbjp0ZXh0PlxuICAgICAgICA8L2RtbjpvdXRwdXRFbnRyeT5cbiAgICAgICAgPGRtbjpvdXRwdXRFbnRyeSBpZD1cIl9GMEJEN0RDMi1BMUI2LTRDRjQtOTVEMC05MDZEQkI1NDBFRkNcIj5cbiAgICAgICAgICA8ZG1uOnRleHQ+JnF1b3Q7RGVidCB0byBpbmNvbWUgcmF0aW8gaXMgdG9vIGhpZ2ggQU5EIG1vcnRnYWdlIHBheW1lbnQgdG8gaW5jb21lIHJhdGlvIGlzIHRvbyBoaWdoLiZxdW90OzwvZG1uOnRleHQ+XG4gICAgICAgIDwvZG1uOm91dHB1dEVudHJ5PlxuICAgICAgICA8ZG1uOmFubm90YXRpb25FbnRyeT5cbiAgICAgICAgICA8ZG1uOnRleHQ+PC9kbW46dGV4dD5cbiAgICAgICAgPC9kbW46YW5ub3RhdGlvbkVudHJ5PlxuICAgICAgPC9kbW46cnVsZT5cbiAgICAgIDxkbW46cnVsZSBpZD1cIl9DOEZBMzNCMS1BRjZFLTRBNTktQjdCOS02RkRGMUY0OTVDNDRcIj5cbiAgICAgICAgPGRtbjppbnB1dEVudHJ5IGlkPVwiXzgyRkJDRUUyLUMxNkMtNEZGRi1BN0YzLTU1MTJDMjExRTI5QlwiPlxuICAgICAgICAgIDxkbW46dGV4dD4mcXVvdDtGYWlyJnF1b3Q7LCAmcXVvdDtHb29kJnF1b3Q7LCAmcXVvdDtFeGNlbGxlbnQmcXVvdDs8L2Rtbjp0ZXh0PlxuICAgICAgICA8L2RtbjppbnB1dEVudHJ5PlxuICAgICAgICA8ZG1uOmlucHV0RW50cnkgaWQ9XCJfQkY3Q0RBRTEtNjZFMy00QjA2LTg3MjktODk2NDUzQUQ3ODY3XCI+XG4gICAgICAgICAgPGRtbjp0ZXh0PiZxdW90O1N1ZmZpY2llbnQmcXVvdDs8L2Rtbjp0ZXh0PlxuICAgICAgICA8L2RtbjppbnB1dEVudHJ5PlxuICAgICAgICA8ZG1uOmlucHV0RW50cnkgaWQ9XCJfNDFDQjYxMjMtODEyMi00RkE0LUE1QzEtNTQ4QjkyQ0EzMUFFXCI+XG4gICAgICAgICAgPGRtbjp0ZXh0PiZxdW90O1N1ZmZpY2llbnQmcXVvdDs8L2Rtbjp0ZXh0PlxuICAgICAgICA8L2RtbjppbnB1dEVudHJ5PlxuICAgICAgICA8ZG1uOm91dHB1dEVudHJ5IGlkPVwiXzlFMDQ5N0QwLUYyRjItNDE5RS1BNTU4LTM2NjQ1MkIzNzlBMVwiPlxuICAgICAgICAgIDxkbW46dGV4dD4mcXVvdDtRdWFsaWZpZWQmcXVvdDs8L2Rtbjp0ZXh0PlxuICAgICAgICA8L2RtbjpvdXRwdXRFbnRyeT5cbiAgICAgICAgPGRtbjpvdXRwdXRFbnRyeSBpZD1cIl8xMTNDQTU2Ni02MDQ0LTQ4NTgtQjhEOS01QUNCQTRBOTFDRjRcIj5cbiAgICAgICAgICA8ZG1uOnRleHQ+JnF1b3Q7VGhlIGJvcnJvd2VyIGhhcyBiZWVuIHN1Y2Nlc3NmdWxseSBwcmVxdWFsaWZpZWQgZm9yIHRoZSByZXF1ZXN0ZWQgbG9hbi4mcXVvdDs8L2Rtbjp0ZXh0PlxuICAgICAgICA8L2RtbjpvdXRwdXRFbnRyeT5cbiAgICAgICAgPGRtbjphbm5vdGF0aW9uRW50cnk+XG4gICAgICAgICAgPGRtbjp0ZXh0PjwvZG1uOnRleHQ+XG4gICAgICAgIDwvZG1uOmFubm90YXRpb25FbnRyeT5cbiAgICAgIDwvZG1uOnJ1bGU+XG4gICAgPC9kbW46ZGVjaXNpb25UYWJsZT5cbiAgPC9kbW46ZGVjaXNpb24+XG4gIDxkbW46aW5wdXREYXRhIGlkPVwiXzZFMzIwNUFGLTdFM0QtNEFCRS1BMzY3LTk2RjNGNkU4MjEwRVwiIG5hbWU9XCJSZXF1ZXN0ZWQgUHJvZHVjdFwiPlxuICAgIDxkbW46ZXh0ZW5zaW9uRWxlbWVudHMgLz5cbiAgICA8ZG1uOnZhcmlhYmxlIGlkPVwiX0VFMDVFMUM3LTY3RUQtNEE3MS1CREVFLTgwMDUyNTkzNTFFOFwiIG5hbWU9XCJSZXF1ZXN0ZWQgUHJvZHVjdFwiIHR5cGVSZWY9XCJSZXF1ZXN0ZWRfUHJvZHVjdFwiIC8+XG4gIDwvZG1uOmlucHV0RGF0YT5cbiAgPGRtbjpidXNpbmVzc0tub3dsZWRnZU1vZGVsIGlkPVwiX0RBNUNDRjYyLTkwQTgtNENGQy1BMTM3LTk4QjUyODUyMjU4OFwiIG5hbWU9XCJEVElcIj5cbiAgICA8ZG1uOmV4dGVuc2lvbkVsZW1lbnRzIC8+XG4gICAgPGRtbjp2YXJpYWJsZSBpZD1cIl8yRjg5MjFEMS02Mzg0LTRFQ0ItODQ4RS1DRTg0QTIwQjI1NzNcIiBuYW1lPVwiRFRJXCIgdHlwZVJlZj1cIm51bWJlclwiIC8+XG4gICAgPGRtbjplbmNhcHN1bGF0ZWRMb2dpYyBpZD1cIl80NzhDODE1RS02MEM5LTQ2MzctQUE0Mi0xOTVERjE2QjYzQTVcIiBsYWJlbD1cIkRUSVwiIGtpbmQ9XCJGRUVMXCIgdHlwZVJlZj1cIm51bWJlclwiPlxuICAgICAgPGRtbjpmb3JtYWxQYXJhbWV0ZXIgaWQ9XCJfQjdBOUMyMjItQzU2MC00RDM3LUE4MjEtMENBQzg4NjExRjEwXCIgbmFtZT1cImRcIiB0eXBlUmVmPVwibnVtYmVyXCIgLz5cbiAgICAgIDxkbW46Zm9ybWFsUGFyYW1ldGVyIGlkPVwiXzQzQzA0NzIxLTM4RjYtNEFCRi05RjJGLUJEMjk1NkMwNTQ0MVwiIG5hbWU9XCJpXCIgdHlwZVJlZj1cIm51bWJlclwiIC8+XG4gICAgICA8ZG1uOmxpdGVyYWxFeHByZXNzaW9uIGlkPVwiXzA2NEZBODhFLUIwNkYtNDk0NC04NUMzLURBODZDM0Y2NjBERFwiIHR5cGVSZWY9XCImbHQ7VW5kZWZpbmVkJmd0O1wiPlxuICAgICAgICA8ZG1uOnRleHQ+ZCAvIGk8L2Rtbjp0ZXh0PlxuICAgICAgPC9kbW46bGl0ZXJhbEV4cHJlc3Npb24+XG4gICAgPC9kbW46ZW5jYXBzdWxhdGVkTG9naWM+XG4gIDwvZG1uOmJ1c2luZXNzS25vd2xlZGdlTW9kZWw+XG4gIDxkbW46YnVzaW5lc3NLbm93bGVkZ2VNb2RlbCBpZD1cIl9DOThCRTkzOS1COUM3LTQzRTAtODNFOC1FRTdBMTZDNTI3NkRcIiBuYW1lPVwiTGVuZGVyIEFjY2VwdGFibGUgUElUSVwiPlxuICAgIDxkbW46ZXh0ZW5zaW9uRWxlbWVudHMgLz5cbiAgICA8ZG1uOnZhcmlhYmxlIGlkPVwiXzlENzgyMTRCLUVDMDctNDM2MC04RDFCLTNEOTI3QUM5MEEyMFwiIG5hbWU9XCJMZW5kZXIgQWNjZXB0YWJsZSBQSVRJXCIgdHlwZVJlZj1cIm51bWJlclwiIC8+XG4gICAgPGRtbjplbmNhcHN1bGF0ZWRMb2dpYyBpZD1cIl9FMzEyRDgwRS0wRUNFLTRENjYtODdFQi0zMERFMjA4OTBCQkNcIiBraW5kPVwiRkVFTFwiPlxuICAgICAgPGRtbjpsaXRlcmFsRXhwcmVzc2lvbiBpZD1cIl9FRURGMkMxNS03RkQ3LTQwOUYtQjIzQi1GOUExOThFMjEzNURcIj5cbiAgICAgICAgPGRtbjp0ZXh0PjAuMjg8L2Rtbjp0ZXh0PlxuICAgICAgPC9kbW46bGl0ZXJhbEV4cHJlc3Npb24+XG4gICAgPC9kbW46ZW5jYXBzdWxhdGVkTG9naWM+XG4gIDwvZG1uOmJ1c2luZXNzS25vd2xlZGdlTW9kZWw+XG4gIDxkbW5kaTpETU5EST5cbiAgICA8ZG1uZGk6RE1ORGlhZ3JhbSBpZD1cIl8xNjA4NTg1Ri0wMUM4LTRBNjYtQjNFNS1GNDQyMkQ0REQyQ0FcIiBuYW1lPVwiRGVmYXVsdCBEUkRcIiB1c2VBbHRlcm5hdGl2ZUlucHV0RGF0YVNoYXBlPVwiZmFsc2VcIj5cbiAgICAgIDxkaTpleHRlbnNpb24+XG4gICAgICAgIDxraWU6Q29tcG9uZW50c1dpZHRoc0V4dGVuc2lvbj5cbiAgICAgICAgICA8a2llOkNvbXBvbmVudFdpZHRocyBkbW5FbGVtZW50UmVmPVwiXzIxRThGQTM4LUM5NDctNDczMy05RTUyLUNGODFBOTdBREY5MVwiPlxuICAgICAgICAgICAgPGtpZTp3aWR0aD4yMDk8L2tpZTp3aWR0aD5cbiAgICAgICAgICA8L2tpZTpDb21wb25lbnRXaWR0aHM+XG4gICAgICAgICAgPGtpZTpDb21wb25lbnRXaWR0aHMgZG1uRWxlbWVudFJlZj1cIl85RjAyNTdFRS1DRjgyLTQ5RkQtQUVERC0zMTU1ODkwODY0RkZcIj5cbiAgICAgICAgICAgIDxraWU6d2lkdGg+NTA8L2tpZTp3aWR0aD5cbiAgICAgICAgICAgIDxraWU6d2lkdGg+MjA5PC9raWU6d2lkdGg+XG4gICAgICAgICAgPC9raWU6Q29tcG9uZW50V2lkdGhzPlxuICAgICAgICAgIDxraWU6Q29tcG9uZW50V2lkdGhzIGRtbkVsZW1lbnRSZWY9XCJfMDhBOUMzM0QtNzE5Ri00QjA1LUFDNDItRDE1NDY0Nzk4QkM0XCI+XG4gICAgICAgICAgICA8a2llOndpZHRoPjUwPC9raWU6d2lkdGg+XG4gICAgICAgICAgPC9raWU6Q29tcG9uZW50V2lkdGhzPlxuICAgICAgICAgIDxraWU6Q29tcG9uZW50V2lkdGhzIGRtbkVsZW1lbnRSZWY9XCJfRUI2NTg1ODYtQzNDOC00ODhFLTgxMTgtRTY5RTMxNTgzMTA2XCI+XG4gICAgICAgICAgICA8a2llOndpZHRoPjEyMDwva2llOndpZHRoPlxuICAgICAgICAgIDwva2llOkNvbXBvbmVudFdpZHRocz5cbiAgICAgICAgICA8a2llOkNvbXBvbmVudFdpZHRocyBkbW5FbGVtZW50UmVmPVwiXzZFNzlFNEQ5LUJCRkItNEU5MC04QUEzLUE2QzE1M0MzQzk0NlwiIC8+XG4gICAgICAgICAgPGtpZTpDb21wb25lbnRXaWR0aHMgZG1uRWxlbWVudFJlZj1cIl81MUFDRUMzQy00MjA3LTRGNUYtOEZERC05RURBQTMyNzBFNjBcIj5cbiAgICAgICAgICAgIDxraWU6d2lkdGg+MTAzNjwva2llOndpZHRoPlxuICAgICAgICAgIDwva2llOkNvbXBvbmVudFdpZHRocz5cbiAgICAgICAgICA8a2llOkNvbXBvbmVudFdpZHRocyBkbW5FbGVtZW50UmVmPVwiXzVEMDUwQjhELURGNTUtNDVGRC05ODhCLTlDNTZCRUQ1M0Q1QlwiPlxuICAgICAgICAgICAgPGtpZTp3aWR0aD4xMDM2PC9raWU6d2lkdGg+XG4gICAgICAgICAgPC9raWU6Q29tcG9uZW50V2lkdGhzPlxuICAgICAgICAgIDxraWU6Q29tcG9uZW50V2lkdGhzIGRtbkVsZW1lbnRSZWY9XCJfMTRDNDRBNjktNTZEQi00QjY4LUI3NTctNDIyNUM4MEU0RDg4XCI+XG4gICAgICAgICAgICA8a2llOndpZHRoPjEwMzY8L2tpZTp3aWR0aD5cbiAgICAgICAgICA8L2tpZTpDb21wb25lbnRXaWR0aHM+XG4gICAgICAgICAgPGtpZTpDb21wb25lbnRXaWR0aHMgZG1uRWxlbWVudFJlZj1cIl8wREI1REUwNS1BMkFELTQwMTMtQjE5MS1EQzFEMTYzN0ExMzJcIj5cbiAgICAgICAgICAgIDxraWU6d2lkdGg+MTAzNjwva2llOndpZHRoPlxuICAgICAgICAgIDwva2llOkNvbXBvbmVudFdpZHRocz5cbiAgICAgICAgICA8a2llOkNvbXBvbmVudFdpZHRocyBkbW5FbGVtZW50UmVmPVwiXzNGOTVFRkQwLTk0RDctNEQxQS05RUE5LUM4RTEyOTgyRDdFOFwiPlxuICAgICAgICAgICAgPGtpZTp3aWR0aD4xMTU4PC9raWU6d2lkdGg+XG4gICAgICAgICAgPC9raWU6Q29tcG9uZW50V2lkdGhzPlxuICAgICAgICAgIDxraWU6Q29tcG9uZW50V2lkdGhzIGRtbkVsZW1lbnRSZWY9XCJfQTMyRUQ0QTUtN0I4OS00MEY3LUJFMjUtQ0RCNjM2RkUwNzFDXCI+XG4gICAgICAgICAgICA8a2llOndpZHRoPjQ1NDwva2llOndpZHRoPlxuICAgICAgICAgIDwva2llOkNvbXBvbmVudFdpZHRocz5cbiAgICAgICAgICA8a2llOkNvbXBvbmVudFdpZHRocyBkbW5FbGVtZW50UmVmPVwiX0QzM0Q5QUVBLTQ5REYtNDg5Ri05OEVDLTRCNDJGRjhDMjAyN1wiPlxuICAgICAgICAgICAgPGtpZTp3aWR0aD41MDwva2llOndpZHRoPlxuICAgICAgICAgICAgPGtpZTp3aWR0aD4zMDA8L2tpZTp3aWR0aD5cbiAgICAgICAgICA8L2tpZTpDb21wb25lbnRXaWR0aHM+XG4gICAgICAgICAgPGtpZTpDb21wb25lbnRXaWR0aHMgZG1uRWxlbWVudFJlZj1cIl81RjlGRUE0RS1CM0ZDLTRCQzItOTEzRS0zNkI4MDcxRkE3NzdcIj5cbiAgICAgICAgICAgIDxraWU6d2lkdGg+NTA8L2tpZTp3aWR0aD5cbiAgICAgICAgICA8L2tpZTpDb21wb25lbnRXaWR0aHM+XG4gICAgICAgICAgPGtpZTpDb21wb25lbnRXaWR0aHMgZG1uRWxlbWVudFJlZj1cIl80QTdGQzhFMC0yNUVGLTREQUYtODQ1QS05M0JEODlDMkJDOENcIj5cbiAgICAgICAgICAgIDxraWU6d2lkdGg+MTIwPC9raWU6d2lkdGg+XG4gICAgICAgICAgPC9raWU6Q29tcG9uZW50V2lkdGhzPlxuICAgICAgICAgIDxraWU6Q29tcG9uZW50V2lkdGhzIGRtbkVsZW1lbnRSZWY9XCJfRjBFODA5MDAtMTk2NC00MTQyLTlBMDUtNzNFN0EyRTBGMkNEXCIgLz5cbiAgICAgICAgICA8a2llOkNvbXBvbmVudFdpZHRocyBkbW5FbGVtZW50UmVmPVwiXzNEMEExOTc5LUU1OUEtNDgzRi1CREE4LTEzOEY5OUJBNUFCM1wiPlxuICAgICAgICAgICAgPGtpZTp3aWR0aD41NTA8L2tpZTp3aWR0aD5cbiAgICAgICAgICA8L2tpZTpDb21wb25lbnRXaWR0aHM+XG4gICAgICAgICAgPGtpZTpDb21wb25lbnRXaWR0aHMgZG1uRWxlbWVudFJlZj1cIl9EOTg1Rjg4Ni03MUMwLTRGNjUtODgwOC0yQ0VGMzY2QkVDQzhcIj5cbiAgICAgICAgICAgIDxraWU6d2lkdGg+NTUwPC9raWU6d2lkdGg+XG4gICAgICAgICAgPC9raWU6Q29tcG9uZW50V2lkdGhzPlxuICAgICAgICAgIDxraWU6Q29tcG9uZW50V2lkdGhzIGRtbkVsZW1lbnRSZWY9XCJfRDFGOTYxMDItNDE1OC00NUJCLThDOUEtQjdBM0JFMkMwMjA2XCI+XG4gICAgICAgICAgICA8a2llOndpZHRoPjY3Mjwva2llOndpZHRoPlxuICAgICAgICAgIDwva2llOkNvbXBvbmVudFdpZHRocz5cbiAgICAgICAgICA8a2llOkNvbXBvbmVudFdpZHRocyBkbW5FbGVtZW50UmVmPVwiXzRBQ0VGRkYwLUFEMkMtNERCOC05QkFELTdCQ0NGQjAzRjI5NVwiPlxuICAgICAgICAgICAgPGtpZTp3aWR0aD42MDwva2llOndpZHRoPlxuICAgICAgICAgICAgPGtpZTp3aWR0aD4xMzM8L2tpZTp3aWR0aD5cbiAgICAgICAgICAgIDxraWU6d2lkdGg+MTQ3PC9raWU6d2lkdGg+XG4gICAgICAgICAgICA8a2llOndpZHRoPjMzNTwva2llOndpZHRoPlxuICAgICAgICAgIDwva2llOkNvbXBvbmVudFdpZHRocz5cbiAgICAgICAgICA8a2llOkNvbXBvbmVudFdpZHRocyBkbW5FbGVtZW50UmVmPVwiX0VGN0Y0MDRBLTkzOUUtNDg4OS05NUQ4LUU0MDUzREQxRUVEOVwiPlxuICAgICAgICAgICAgPGtpZTp3aWR0aD42MDwva2llOndpZHRoPlxuICAgICAgICAgICAgPGtpZTp3aWR0aD4yMzM8L2tpZTp3aWR0aD5cbiAgICAgICAgICAgIDxraWU6d2lkdGg+MTMzPC9raWU6d2lkdGg+XG4gICAgICAgICAgICA8a2llOndpZHRoPjEyOTwva2llOndpZHRoPlxuICAgICAgICAgICAgPGtpZTp3aWR0aD4xMzU8L2tpZTp3aWR0aD5cbiAgICAgICAgICAgIDxraWU6d2lkdGg+NjgxPC9raWU6d2lkdGg+XG4gICAgICAgICAgICA8a2llOndpZHRoPjEzODwva2llOndpZHRoPlxuICAgICAgICAgIDwva2llOkNvbXBvbmVudFdpZHRocz5cbiAgICAgICAgICA8a2llOkNvbXBvbmVudFdpZHRocyBkbW5FbGVtZW50UmVmPVwiXzA2NEZBODhFLUIwNkYtNDk0NC04NUMzLURBODZDM0Y2NjBERFwiPlxuICAgICAgICAgICAgPGtpZTp3aWR0aD4xNTA8L2tpZTp3aWR0aD5cbiAgICAgICAgICA8L2tpZTpDb21wb25lbnRXaWR0aHM+XG4gICAgICAgICAgPGtpZTpDb21wb25lbnRXaWR0aHMgZG1uRWxlbWVudFJlZj1cIl80NzhDODE1RS02MEM5LTQ2MzctQUE0Mi0xOTVERjE2QjYzQTVcIj5cbiAgICAgICAgICAgIDxraWU6d2lkdGg+NTA8L2tpZTp3aWR0aD5cbiAgICAgICAgICAgIDxraWU6d2lkdGg+MTUwPC9raWU6d2lkdGg+XG4gICAgICAgICAgPC9raWU6Q29tcG9uZW50V2lkdGhzPlxuICAgICAgICAgIDxraWU6Q29tcG9uZW50V2lkdGhzIGRtbkVsZW1lbnRSZWY9XCJfRUVERjJDMTUtN0ZENy00MDlGLUIyM0ItRjlBMTk4RTIxMzVEXCI+XG4gICAgICAgICAgICA8a2llOndpZHRoPjIyODwva2llOndpZHRoPlxuICAgICAgICAgIDwva2llOkNvbXBvbmVudFdpZHRocz5cbiAgICAgICAgICA8a2llOkNvbXBvbmVudFdpZHRocyBkbW5FbGVtZW50UmVmPVwiX0UzMTJEODBFLTBFQ0UtNEQ2Ni04N0VCLTMwREUyMDg5MEJCQ1wiPlxuICAgICAgICAgICAgPGtpZTp3aWR0aD41MDwva2llOndpZHRoPlxuICAgICAgICAgICAgPGtpZTp3aWR0aD4yMjg8L2tpZTp3aWR0aD5cbiAgICAgICAgICA8L2tpZTpDb21wb25lbnRXaWR0aHM+XG4gICAgICAgIDwva2llOkNvbXBvbmVudHNXaWR0aHNFeHRlbnNpb24+XG4gICAgICA8L2RpOmV4dGVuc2lvbj5cbiAgICAgIDxkbW5kaTpETU5TaGFwZSBpZD1cImRtbnNoYXBlLWRyZy1fNEM4OUU1OUMtRkREQS00MzhDLThEMUYtMEIxMTk0RUY2REFFXCIgZG1uRWxlbWVudFJlZj1cIl80Qzg5RTU5Qy1GRERBLTQzOEMtOEQxRi0wQjExOTRFRjZEQUVcIiBpc0NvbGxhcHNlZD1cImZhbHNlXCI+XG4gICAgICAgIDxkbW5kaTpETU5TdHlsZT5cbiAgICAgICAgICA8ZG1uZGk6RmlsbENvbG9yIHJlZD1cIjI1NVwiIGdyZWVuPVwiMjU1XCIgYmx1ZT1cIjI1NVwiIC8+XG4gICAgICAgICAgPGRtbmRpOlN0cm9rZUNvbG9yIHJlZD1cIjBcIiBncmVlbj1cIjBcIiBibHVlPVwiMFwiIC8+XG4gICAgICAgICAgPGRtbmRpOkZvbnRDb2xvciByZWQ9XCIwXCIgZ3JlZW49XCIwXCIgYmx1ZT1cIjBcIiAvPlxuICAgICAgICA8L2RtbmRpOkRNTlN0eWxlPlxuICAgICAgICA8ZGM6Qm91bmRzIHg9XCI5ODBcIiB5PVwiMzYwXCIgd2lkdGg9XCIxMzRcIiBoZWlnaHQ9XCI2MVwiIC8+XG4gICAgICAgIDxkbW5kaTpETU5MYWJlbCAvPlxuICAgICAgPC9kbW5kaTpETU5TaGFwZT5cbiAgICAgIDxkbW5kaTpETU5TaGFwZSBpZD1cImRtbnNoYXBlLWRyZy1fNEM3ODhEQkQtQzY3Mi00RjQxLTlBRkUtOUM3RDJDMTQ1NzM0XCIgZG1uRWxlbWVudFJlZj1cIl80Qzc4OERCRC1DNjcyLTRGNDEtOUFGRS05QzdEMkMxNDU3MzRcIiBpc0NvbGxhcHNlZD1cImZhbHNlXCI+XG4gICAgICAgIDxkbW5kaTpETU5TdHlsZT5cbiAgICAgICAgICA8ZG1uZGk6RmlsbENvbG9yIHJlZD1cIjI1NVwiIGdyZWVuPVwiMjU1XCIgYmx1ZT1cIjI1NVwiIC8+XG4gICAgICAgICAgPGRtbmRpOlN0cm9rZUNvbG9yIHJlZD1cIjBcIiBncmVlbj1cIjBcIiBibHVlPVwiMFwiIC8+XG4gICAgICAgICAgPGRtbmRpOkZvbnRDb2xvciByZWQ9XCIwXCIgZ3JlZW49XCIwXCIgYmx1ZT1cIjBcIiAvPlxuICAgICAgICA8L2RtbmRpOkRNTlN0eWxlPlxuICAgICAgICA8ZGM6Qm91bmRzIHg9XCI5OS4wOTM0NTc5NDM5MjUyNFwiIHk9XCIyMjMuNjcxMDUyNjMxNTc4OTZcIiB3aWR0aD1cIjEzNlwiIGhlaWdodD1cIjYzXCIgLz5cbiAgICAgICAgPGRtbmRpOkRNTkxhYmVsIC8+XG4gICAgICA8L2RtbmRpOkRNTlNoYXBlPlxuICAgICAgPGRtbmRpOkRNTlNoYXBlIGlkPVwiZG1uc2hhcGUtZHJnLV9GMERDODkyMy01RkM3LTQyMDAtOEJEMS00NjFENUYzNzE0QkVcIiBkbW5FbGVtZW50UmVmPVwiX0YwREM4OTIzLTVGQzctNDIwMC04QkQxLTQ2MUQ1RjM3MTRCRVwiIGlzQ29sbGFwc2VkPVwiZmFsc2VcIj5cbiAgICAgICAgPGRtbmRpOkRNTlN0eWxlPlxuICAgICAgICAgIDxkbW5kaTpGaWxsQ29sb3IgcmVkPVwiMjU1XCIgZ3JlZW49XCIyNTVcIiBibHVlPVwiMjU1XCIgLz5cbiAgICAgICAgICA8ZG1uZGk6U3Ryb2tlQ29sb3IgcmVkPVwiMFwiIGdyZWVuPVwiMFwiIGJsdWU9XCIwXCIgLz5cbiAgICAgICAgICA8ZG1uZGk6Rm9udENvbG9yIHJlZD1cIjBcIiBncmVlbj1cIjBcIiBibHVlPVwiMFwiIC8+XG4gICAgICAgIDwvZG1uZGk6RE1OU3R5bGU+XG4gICAgICAgIDxkYzpCb3VuZHMgeD1cIjUzMVwiIHk9XCIyMjVcIiB3aWR0aD1cIjEzNlwiIGhlaWdodD1cIjYyXCIgLz5cbiAgICAgICAgPGRtbmRpOkRNTkxhYmVsIC8+XG4gICAgICA8L2RtbmRpOkRNTlNoYXBlPlxuICAgICAgPGRtbmRpOkRNTlNoYXBlIGlkPVwiZG1uc2hhcGUtZHJnLV9GQUY5MDgwRS1GNEVGLTQ5RjctQUVGRC0wRDI5OTBEOEZGREFcIiBkbW5FbGVtZW50UmVmPVwiX0ZBRjkwODBFLUY0RUYtNDlGNy1BRUZELTBEMjk5MEQ4RkZEQVwiIGlzQ29sbGFwc2VkPVwiZmFsc2VcIj5cbiAgICAgICAgPGRtbmRpOkRNTlN0eWxlPlxuICAgICAgICAgIDxkbW5kaTpGaWxsQ29sb3IgcmVkPVwiMjU1XCIgZ3JlZW49XCIyNTVcIiBibHVlPVwiMjU1XCIgLz5cbiAgICAgICAgICA8ZG1uZGk6U3Ryb2tlQ29sb3IgcmVkPVwiMFwiIGdyZWVuPVwiMFwiIGJsdWU9XCIwXCIgLz5cbiAgICAgICAgICA8ZG1uZGk6Rm9udENvbG9yIHJlZD1cIjBcIiBncmVlbj1cIjBcIiBibHVlPVwiMFwiIC8+XG4gICAgICAgIDwvZG1uZGk6RE1OU3R5bGU+XG4gICAgICAgIDxkYzpCb3VuZHMgeD1cIjc2MFwiIHk9XCIzNjBcIiB3aWR0aD1cIjEzNVwiIGhlaWdodD1cIjYzXCIgLz5cbiAgICAgICAgPGRtbmRpOkRNTkxhYmVsIC8+XG4gICAgICA8L2RtbmRpOkRNTlNoYXBlPlxuICAgICAgPGRtbmRpOkRNTlNoYXBlIGlkPVwiZG1uc2hhcGUtZHJnLV8xQ0Y1Q0VGQS1BRjk3LTQ2RjktOUNENS05QThBRUJCMjBCNEVcIiBkbW5FbGVtZW50UmVmPVwiXzFDRjVDRUZBLUFGOTctNDZGOS05Q0Q1LTlBOEFFQkIyMEI0RVwiIGlzQ29sbGFwc2VkPVwiZmFsc2VcIj5cbiAgICAgICAgPGRtbmRpOkRNTlN0eWxlPlxuICAgICAgICAgIDxkbW5kaTpGaWxsQ29sb3IgcmVkPVwiMjU1XCIgZ3JlZW49XCIyNTVcIiBibHVlPVwiMjU1XCIgLz5cbiAgICAgICAgICA8ZG1uZGk6U3Ryb2tlQ29sb3IgcmVkPVwiMFwiIGdyZWVuPVwiMFwiIGJsdWU9XCIwXCIgLz5cbiAgICAgICAgICA8ZG1uZGk6Rm9udENvbG9yIHJlZD1cIjBcIiBncmVlbj1cIjBcIiBibHVlPVwiMFwiIC8+XG4gICAgICAgIDwvZG1uZGk6RE1OU3R5bGU+XG4gICAgICAgIDxkYzpCb3VuZHMgeD1cIjMxNi4wNjA3NDc2NjM1NTE0XCIgeT1cIjM2MVwiIHdpZHRoPVwiMTM0XCIgaGVpZ2h0PVwiNjFcIiAvPlxuICAgICAgICA8ZG1uZGk6RE1OTGFiZWwgLz5cbiAgICAgIDwvZG1uZGk6RE1OU2hhcGU+XG4gICAgICA8ZG1uZGk6RE1OU2hhcGUgaWQ9XCJkbW5zaGFwZS1kcmctX0Q2RjQyMzRGLTE1QjMtNEY1Qi1CODE0LTVGNkZGMjlEMjkwN1wiIGRtbkVsZW1lbnRSZWY9XCJfRDZGNDIzNEYtMTVCMy00RjVCLUI4MTQtNUY2RkYyOUQyOTA3XCIgaXNDb2xsYXBzZWQ9XCJmYWxzZVwiPlxuICAgICAgICA8ZG1uZGk6RE1OU3R5bGU+XG4gICAgICAgICAgPGRtbmRpOkZpbGxDb2xvciByZWQ9XCIyNTVcIiBncmVlbj1cIjI1NVwiIGJsdWU9XCIyNTVcIiAvPlxuICAgICAgICAgIDxkbW5kaTpTdHJva2VDb2xvciByZWQ9XCIwXCIgZ3JlZW49XCIwXCIgYmx1ZT1cIjBcIiAvPlxuICAgICAgICAgIDxkbW5kaTpGb250Q29sb3IgcmVkPVwiMFwiIGdyZWVuPVwiMFwiIGJsdWU9XCIwXCIgLz5cbiAgICAgICAgPC9kbW5kaTpETU5TdHlsZT5cbiAgICAgICAgPGRjOkJvdW5kcyB4PVwiMzE1XCIgeT1cIjIyNVwiIHdpZHRoPVwiMTM2XCIgaGVpZ2h0PVwiNjJcIiAvPlxuICAgICAgICA8ZG1uZGk6RE1OTGFiZWwgLz5cbiAgICAgIDwvZG1uZGk6RE1OU2hhcGU+XG4gICAgICA8ZG1uZGk6RE1OU2hhcGUgaWQ9XCJkbW5zaGFwZS1kcmctXzJGRTUxREIxLTMwODMtNEJGNy1BQTcxLTBCMDA2NTMxMEU3MlwiIGRtbkVsZW1lbnRSZWY9XCJfMkZFNTFEQjEtMzA4My00QkY3LUFBNzEtMEIwMDY1MzEwRTcyXCIgaXNDb2xsYXBzZWQ9XCJmYWxzZVwiPlxuICAgICAgICA8ZG1uZGk6RE1OU3R5bGU+XG4gICAgICAgICAgPGRtbmRpOkZpbGxDb2xvciByZWQ9XCIyNTVcIiBncmVlbj1cIjI1NVwiIGJsdWU9XCIyNTVcIiAvPlxuICAgICAgICAgIDxkbW5kaTpTdHJva2VDb2xvciByZWQ9XCIwXCIgZ3JlZW49XCIwXCIgYmx1ZT1cIjBcIiAvPlxuICAgICAgICAgIDxkbW5kaTpGb250Q29sb3IgcmVkPVwiMFwiIGdyZWVuPVwiMFwiIGJsdWU9XCIwXCIgLz5cbiAgICAgICAgPC9kbW5kaTpETU5TdHlsZT5cbiAgICAgICAgPGRjOkJvdW5kcyB4PVwiOTgwXCIgeT1cIjIyMFwiIHdpZHRoPVwiMTM2XCIgaGVpZ2h0PVwiNjJcIiAvPlxuICAgICAgICA8ZG1uZGk6RE1OTGFiZWwgLz5cbiAgICAgIDwvZG1uZGk6RE1OU2hhcGU+XG4gICAgICA8ZG1uZGk6RE1OU2hhcGUgaWQ9XCJkbW5zaGFwZS1kcmctXzIxQzUwNzYzLUU0OUYtNEQ4My1BODI0LTE2REE2QUE4N0M2NFwiIGRtbkVsZW1lbnRSZWY9XCJfMjFDNTA3NjMtRTQ5Ri00RDgzLUE4MjQtMTZEQTZBQTg3QzY0XCIgaXNDb2xsYXBzZWQ9XCJmYWxzZVwiPlxuICAgICAgICA8ZG1uZGk6RE1OU3R5bGU+XG4gICAgICAgICAgPGRtbmRpOkZpbGxDb2xvciByZWQ9XCIyNTVcIiBncmVlbj1cIjI1NVwiIGJsdWU9XCIyNTVcIiAvPlxuICAgICAgICAgIDxkbW5kaTpTdHJva2VDb2xvciByZWQ9XCIwXCIgZ3JlZW49XCIwXCIgYmx1ZT1cIjBcIiAvPlxuICAgICAgICAgIDxkbW5kaTpGb250Q29sb3IgcmVkPVwiMFwiIGdyZWVuPVwiMFwiIGJsdWU9XCIwXCIgLz5cbiAgICAgICAgPC9kbW5kaTpETU5TdHlsZT5cbiAgICAgICAgPGRjOkJvdW5kcyB4PVwiNTMyXCIgeT1cIjg5XCIgd2lkdGg9XCIxMzZcIiBoZWlnaHQ9XCI2MlwiIC8+XG4gICAgICAgIDxkbW5kaTpETU5MYWJlbCAvPlxuICAgICAgPC9kbW5kaTpETU5TaGFwZT5cbiAgICAgIDxkbW5kaTpETU5TaGFwZSBpZD1cImRtbnNoYXBlLWRyZy1fNkUzMjA1QUYtN0UzRC00QUJFLUEzNjctOTZGM0Y2RTgyMTBFXCIgZG1uRWxlbWVudFJlZj1cIl82RTMyMDVBRi03RTNELTRBQkUtQTM2Ny05NkYzRjZFODIxMEVcIiBpc0NvbGxhcHNlZD1cImZhbHNlXCI+XG4gICAgICAgIDxkbW5kaTpETU5TdHlsZT5cbiAgICAgICAgICA8ZG1uZGk6RmlsbENvbG9yIHJlZD1cIjI1NVwiIGdyZWVuPVwiMjU1XCIgYmx1ZT1cIjI1NVwiIC8+XG4gICAgICAgICAgPGRtbmRpOlN0cm9rZUNvbG9yIHJlZD1cIjBcIiBncmVlbj1cIjBcIiBibHVlPVwiMFwiIC8+XG4gICAgICAgICAgPGRtbmRpOkZvbnRDb2xvciByZWQ9XCIwXCIgZ3JlZW49XCIwXCIgYmx1ZT1cIjBcIiAvPlxuICAgICAgICA8L2RtbmRpOkRNTlN0eWxlPlxuICAgICAgICA8ZGM6Qm91bmRzIHg9XCI1MzEuMTIxNDk1MzI3MTAyOFwiIHk9XCIzNjBcIiB3aWR0aD1cIjEzNFwiIGhlaWdodD1cIjYxXCIgLz5cbiAgICAgICAgPGRtbmRpOkRNTkxhYmVsIC8+XG4gICAgICA8L2RtbmRpOkRNTlNoYXBlPlxuICAgICAgPGRtbmRpOkRNTlNoYXBlIGlkPVwiZG1uc2hhcGUtZHJnLV9EQTVDQ0Y2Mi05MEE4LTRDRkMtQTEzNy05OEI1Mjg1MjI1ODhcIiBkbW5FbGVtZW50UmVmPVwiX0RBNUNDRjYyLTkwQTgtNENGQy1BMTM3LTk4QjUyODUyMjU4OFwiIGlzQ29sbGFwc2VkPVwiZmFsc2VcIj5cbiAgICAgICAgPGRtbmRpOkRNTlN0eWxlPlxuICAgICAgICAgIDxkbW5kaTpGaWxsQ29sb3IgcmVkPVwiMjU1XCIgZ3JlZW49XCIyNTVcIiBibHVlPVwiMjU1XCIgLz5cbiAgICAgICAgICA8ZG1uZGk6U3Ryb2tlQ29sb3IgcmVkPVwiMFwiIGdyZWVuPVwiMFwiIGJsdWU9XCIwXCIgLz5cbiAgICAgICAgICA8ZG1uZGk6Rm9udENvbG9yIHJlZD1cIjBcIiBncmVlbj1cIjBcIiBibHVlPVwiMFwiIC8+XG4gICAgICAgIDwvZG1uZGk6RE1OU3R5bGU+XG4gICAgICAgIDxkYzpCb3VuZHMgeD1cIjk5LjA5MzQ1Nzk0MzkyNTI0XCIgeT1cIjM1OVwiIHdpZHRoPVwiMTM2XCIgaGVpZ2h0PVwiNjNcIiAvPlxuICAgICAgICA8ZG1uZGk6RE1OTGFiZWwgLz5cbiAgICAgIDwvZG1uZGk6RE1OU2hhcGU+XG4gICAgICA8ZG1uZGk6RE1OU2hhcGUgaWQ9XCJkbW5zaGFwZS1kcmctX0M5OEJFOTM5LUI5QzctNDNFMC04M0U4LUVFN0ExNkM1Mjc2RFwiIGRtbkVsZW1lbnRSZWY9XCJfQzk4QkU5MzktQjlDNy00M0UwLTgzRTgtRUU3QTE2QzUyNzZEXCIgaXNDb2xsYXBzZWQ9XCJmYWxzZVwiPlxuICAgICAgICA8ZG1uZGk6RE1OU3R5bGU+XG4gICAgICAgICAgPGRtbmRpOkZpbGxDb2xvciByZWQ9XCIyNTVcIiBncmVlbj1cIjI1NVwiIGJsdWU9XCIyNTVcIiAvPlxuICAgICAgICAgIDxkbW5kaTpTdHJva2VDb2xvciByZWQ9XCIwXCIgZ3JlZW49XCIwXCIgYmx1ZT1cIjBcIiAvPlxuICAgICAgICAgIDxkbW5kaTpGb250Q29sb3IgcmVkPVwiMFwiIGdyZWVuPVwiMFwiIGJsdWU9XCIwXCIgLz5cbiAgICAgICAgPC9kbW5kaTpETU5TdHlsZT5cbiAgICAgICAgPGRjOkJvdW5kcyB4PVwiNzYwXCIgeT1cIjIyMFwiIHdpZHRoPVwiMTM0XCIgaGVpZ2h0PVwiNjVcIiAvPlxuICAgICAgICA8ZG1uZGk6RE1OTGFiZWwgLz5cbiAgICAgIDwvZG1uZGk6RE1OU2hhcGU+XG4gICAgICA8ZG1uZGk6RE1ORWRnZSBpZD1cImRtbmVkZ2UtZHJnLV84OUVFQUY5Ri01QTVELTRGNTktOTFCNy1FQTQxOEE3MjI5QUZcIiBkbW5FbGVtZW50UmVmPVwiXzg5RUVBRjlGLTVBNUQtNEY1OS05MUI3LUVBNDE4QTcyMjlBRlwiPlxuICAgICAgICA8ZGk6d2F5cG9pbnQgeD1cIjM4My4wNjA3NDc2NjM1NTE0XCIgeT1cIjM2MVwiIC8+XG4gICAgICAgIDxkaTp3YXlwb2ludCB4PVwiNTk5XCIgeT1cIjI4N1wiIC8+XG4gICAgICA8L2RtbmRpOkRNTkVkZ2U+XG4gICAgICA8ZG1uZGk6RE1ORWRnZSBpZD1cImRtbmVkZ2UtZHJnLV84NzczMEM1QS01NjQ4LTQxNUItOTE4OS1FRjREODgwNUY4QzlcIiBkbW5FbGVtZW50UmVmPVwiXzg3NzMwQzVBLTU2NDgtNDE1Qi05MTg5LUVGNEQ4ODA1RjhDOVwiPlxuICAgICAgICA8ZGk6d2F5cG9pbnQgeD1cIjU5OC4xMjE0OTUzMjcxMDI4XCIgeT1cIjM5MC41XCIgLz5cbiAgICAgICAgPGRpOndheXBvaW50IHg9XCI1OTlcIiB5PVwiMjg3XCIgLz5cbiAgICAgIDwvZG1uZGk6RE1ORWRnZT5cbiAgICAgIDxkbW5kaTpETU5FZGdlIGlkPVwiZG1uZWRnZS1kcmctXzYzREU3QzNCLUE3NjctNEI4QS1BMDk4LTkxRUNCNEI4RDMzMFwiIGRtbkVsZW1lbnRSZWY9XCJfNjNERTdDM0ItQTc2Ny00QjhBLUEwOTgtOTFFQ0I0QjhEMzMwXCI+XG4gICAgICAgIDxkaTp3YXlwb2ludCB4PVwiODI3LjVcIiB5PVwiMzYwXCIgLz5cbiAgICAgICAgPGRpOndheXBvaW50IHg9XCI1OTlcIiB5PVwiMjg3XCIgLz5cbiAgICAgIDwvZG1uZGk6RE1ORWRnZT5cbiAgICAgIDxkbW5kaTpETU5FZGdlIGlkPVwiZG1uZWRnZS1kcmctXzJDOTU4MjlELUZDRjktNDRGNS04RjVBLTBBNkNEQjYwNjAwRFwiIGRtbkVsZW1lbnRSZWY9XCJfMkM5NTgyOUQtRkNGOS00NEY1LThGNUEtMEE2Q0RCNjA2MDBEXCI+XG4gICAgICAgIDxkaTp3YXlwb2ludCB4PVwiODI3XCIgeT1cIjI1Mi41XCIgLz5cbiAgICAgICAgPGRpOndheXBvaW50IHg9XCI2NjdcIiB5PVwiMjU2XCIgLz5cbiAgICAgIDwvZG1uZGk6RE1ORWRnZT5cbiAgICAgIDxkbW5kaTpETU5FZGdlIGlkPVwiZG1uZWRnZS1kcmctXzc3QkE0MDlCLUUwMEQtNEZCQy1CNTIyLThGNjU2RDRGNkYwRVwiIGRtbkVsZW1lbnRSZWY9XCJfNzdCQTQwOUItRTAwRC00RkJDLUI1MjItOEY2NTZENEY2RjBFXCI+XG4gICAgICAgIDxkaTp3YXlwb2ludCB4PVwiMzgzLjA2MDc0NzY2MzU1MTRcIiB5PVwiMzkxLjVcIiAvPlxuICAgICAgICA8ZGk6d2F5cG9pbnQgeD1cIjM4M1wiIHk9XCIyODdcIiAvPlxuICAgICAgPC9kbW5kaTpETU5FZGdlPlxuICAgICAgPGRtbmRpOkRNTkVkZ2UgaWQ9XCJkbW5lZGdlLWRyZy1fNEQ0NDFDMTEtNzA0Mi00OUNGLUE0MkMtMTdBNDM0OEE3RjI5XCIgZG1uRWxlbWVudFJlZj1cIl80RDQ0MUMxMS03MDQyLTQ5Q0YtQTQyQy0xN0E0MzQ4QTdGMjlcIj5cbiAgICAgICAgPGRpOndheXBvaW50IHg9XCIxNjcuMDkzNDU3OTQzOTI1MjRcIiB5PVwiMjU1LjE3MTA1MjYzMTU3ODk2XCIgLz5cbiAgICAgICAgPGRpOndheXBvaW50IHg9XCIzMTVcIiB5PVwiMjU2XCIgLz5cbiAgICAgIDwvZG1uZGk6RE1ORWRnZT5cbiAgICAgIDxkbW5kaTpETU5FZGdlIGlkPVwiZG1uZWRnZS1kcmctXzMyMTdENjU1LTQ0ODQtNDczMy1BOUFFLTRGOUNGMzBEOTkyNFwiIGRtbkVsZW1lbnRSZWY9XCJfMzIxN0Q2NTUtNDQ4NC00NzMzLUE5QUUtNEY5Q0YzMEQ5OTI0XCI+XG4gICAgICAgIDxkaTp3YXlwb2ludCB4PVwiMTY3LjA5MzQ1Nzk0MzkyNTI0XCIgeT1cIjM1OVwiIC8+XG4gICAgICAgIDxkaTp3YXlwb2ludCB4PVwiMzgzXCIgeT1cIjI4N1wiIC8+XG4gICAgICA8L2RtbmRpOkRNTkVkZ2U+XG4gICAgICA8ZG1uZGk6RE1ORWRnZSBpZD1cImRtbmVkZ2UtZHJnLV8zMUExQjZCMi1BMkE2LTRFMDMtQjg5OC0yNjU3M0E1Q0YzQkFcIiBkbW5FbGVtZW50UmVmPVwiXzMxQTFCNkIyLUEyQTYtNEUwMy1CODk4LTI2NTczQTVDRjNCQVwiPlxuICAgICAgICA8ZGk6d2F5cG9pbnQgeD1cIjEwNDdcIiB5PVwiMzkwLjVcIiAvPlxuICAgICAgICA8ZGk6d2F5cG9pbnQgeD1cIjEwNDhcIiB5PVwiMjgyXCIgLz5cbiAgICAgIDwvZG1uZGk6RE1ORWRnZT5cbiAgICAgIDxkbW5kaTpETU5FZGdlIGlkPVwiZG1uZWRnZS1kcmctXzBCOTkyRjAxLUJBNzctNEYwNi1BODMwLUQ4OTQ4QjQ2NzI3MlwiIGRtbkVsZW1lbnRSZWY9XCJfMEI5OTJGMDEtQkE3Ny00RjA2LUE4MzAtRDg5NDhCNDY3MjcyXCI+XG4gICAgICAgIDxkaTp3YXlwb2ludCB4PVwiNTk5XCIgeT1cIjI1NlwiIC8+XG4gICAgICAgIDxkaTp3YXlwb2ludCB4PVwiNjAwXCIgeT1cIjE1MVwiIC8+XG4gICAgICA8L2RtbmRpOkRNTkVkZ2U+XG4gICAgICA8ZG1uZGk6RE1ORWRnZSBpZD1cImRtbmVkZ2UtZHJnLV9CNjAwMkYzMy00ODg4LTQ4QzUtQjI2NS02MzYwMzBGOEMyRENcIiBkbW5FbGVtZW50UmVmPVwiX0I2MDAyRjMzLTQ4ODgtNDhDNS1CMjY1LTYzNjAzMEY4QzJEQ1wiIHNvdXJjZUVsZW1lbnQ9XCJkbW5zaGFwZS1kcmctXzJGRTUxREIxLTMwODMtNEJGNy1BQTcxLTBCMDA2NTMxMEU3MlwiIHRhcmdldEVsZW1lbnQ9XCJkbW5zaGFwZS1kcmctXzIxQzUwNzYzLUU0OUYtNEQ4My1BODI0LTE2REE2QUE4N0M2NFwiPlxuICAgICAgICA8ZGk6d2F5cG9pbnQgeD1cIjEwNDhcIiB5PVwiMjIwXCIgLz5cbiAgICAgICAgPGRpOndheXBvaW50IHg9XCI2MDBcIiB5PVwiMTUxXCIgLz5cbiAgICAgIDwvZG1uZGk6RE1ORWRnZT5cbiAgICAgIDxkbW5kaTpETU5FZGdlIGlkPVwiZG1uZWRnZS1kcmctX0EzRTk1QjMyLTJFRkQtNDBBRC1CNUU0LTBBNzNBMTU0MjAxMVwiIGRtbkVsZW1lbnRSZWY9XCJfQTNFOTVCMzItMkVGRC00MEFELUI1RTQtMEE3M0ExNTQyMDExXCIgc291cmNlRWxlbWVudD1cImRtbnNoYXBlLWRyZy1fRDZGNDIzNEYtMTVCMy00RjVCLUI4MTQtNUY2RkYyOUQyOTA3XCIgdGFyZ2V0RWxlbWVudD1cImRtbnNoYXBlLWRyZy1fMjFDNTA3NjMtRTQ5Ri00RDgzLUE4MjQtMTZEQTZBQTg3QzY0XCI+XG4gICAgICAgIDxkaTp3YXlwb2ludCB4PVwiMzgzXCIgeT1cIjIyNVwiIC8+XG4gICAgICAgIDxkaTp3YXlwb2ludCB4PVwiNjAwXCIgeT1cIjE1MVwiIC8+XG4gICAgICA8L2RtbmRpOkRNTkVkZ2U+XG4gICAgPC9kbW5kaTpETU5EaWFncmFtPlxuICA8L2RtbmRpOkRNTkRJPlxuICA8ZG1uOmltcG9ydCBpZD1cIl9FNDU2MjYwOC1CMTRDLTQ4NDUtQTRDMy02QzFBMUZCQzAyMTlcIiBuYW1lPVwic3VtQmttXCIgaW1wb3J0VHlwZT1cImh0dHBzOi8vd3d3Lm9tZy5vcmcvc3BlYy9ETU4vMjAyMzAzMjQvTU9ERUwvXCIgbmFtZXNwYWNlPVwiaHR0cHM6Ly9raWUuYXBhY2hlLm9yZy9kbW4vXzkyMzc4NEJELUNEMzEtNDg4QS05QzMxLUMxQTgzQzU0ODNDMFwiIC8+XG4gIDxkbW46aW1wb3J0IGlkPVwiX0M3MjZBODI0LTkzNDktNENGOC05MUZBLUY5NjkyNTBDODQyMVwiIG5hbWU9XCJzdW1EaWZmRHNcIiBpbXBvcnRUeXBlPVwiaHR0cHM6Ly93d3cub21nLm9yZy9zcGVjL0RNTi8yMDIzMDMyNC9NT0RFTC9cIiBuYW1lc3BhY2U9XCJodHRwczovL2tpZS5hcGFjaGUub3JnL2Rtbi9fRDE5QjAwMTUtMkNCRC00QkE4LTg0QTktNUY1NTREODRBOUUxXCIgLz5cbiAgPGRtbjppbXBvcnQgaWQ9XCJfODdDREQ2MDAtNzU2NC1DRjg3LTU0N0UtQThCODc2Q0QwODEyXCIgbmFtZT1cInRlc3RUcmVlUG1tbFwiIGltcG9ydFR5cGU9XCJodHRwczovL3d3dy5kbWcub3JnL1BNTUwtNF8yXCIgbmFtZXNwYWNlPVwiaHR0cHM6Ly9raWUub3JnL3BtbWwjZGV2LXdlYmFwcC9hdmFpbGFibGUtbW9kZWxzLXRvLWluY2x1ZGUvdGVzdFRyZWUucG1tbFwiIC8+XG48L2RtbjpkZWZpbml0aW9ucz5cbmA7XG5mdW5jdGlvbiBFdmFsdWF0aW9uSGlnaGxpZ2h0cyhhcmdzOiBEbW5FZGl0b3JQcm9wcykge1xuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlPHtcbiAgICBtYXJzaGFsbGVyOiBEbW5NYXJzaGFsbGVyO1xuICAgIHN0YWNrOiBOb3JtYWxpemVkPERtbkxhdGVzdE1vZGVsPltdO1xuICAgIHBvaW50ZXI6IG51bWJlcjtcbiAgfT4oKCkgPT4ge1xuICAgIGNvbnN0IGluaXRpYWxEbW5NYXJzaGFsbGVyID0gZ2V0TWFyc2hhbGxlcihpbml0aWFsTW9kZWwsIHtcbiAgICAgIHVwZ3JhZGVUbzogXCJsYXRlc3RcIlxuICAgIH0pO1xuICAgIHJldHVybiB7XG4gICAgICBtYXJzaGFsbGVyOiBpbml0aWFsRG1uTWFyc2hhbGxlcixcbiAgICAgIHN0YWNrOiBbbm9ybWFsaXplKGluaXRpYWxEbW5NYXJzaGFsbGVyLnBhcnNlci5wYXJzZSgpKV0sXG4gICAgICBwb2ludGVyOiAwXG4gICAgfTtcbiAgfSk7XG4gIGNvbnN0IGN1cnJlbnRNb2RlbCA9IHN0YXRlLnN0YWNrW3N0YXRlLnBvaW50ZXJdO1xuICBjb25zdCBvbk1vZGVsQ2hhbmdlID0gdXNlQ2FsbGJhY2s8T25EbW5Nb2RlbENoYW5nZT4obW9kZWwgPT4ge1xuICAgIHNldFN0YXRlKHByZXYgPT4ge1xuICAgICAgY29uc3QgbmV3U3RhY2sgPSBwcmV2LnN0YWNrLnNsaWNlKDAsIHByZXYucG9pbnRlciArIDEpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4ucHJldixcbiAgICAgICAgc3RhY2s6IFsuLi5uZXdTdGFjaywgbW9kZWxdLFxuICAgICAgICBwb2ludGVyOiBuZXdTdGFjay5sZW5ndGhcbiAgICAgIH07XG4gICAgfSk7XG4gIH0sIFtdKTtcbiAgcmV0dXJuIDw+XG4gICAgICB7RG1uRWRpdG9yV3JhcHBlcih7XG4gICAgICBtb2RlbDogY3VycmVudE1vZGVsLFxuICAgICAgb3JpZ2luYWxWZXJzaW9uOiBhcmdzLm9yaWdpbmFsVmVyc2lvbixcbiAgICAgIG9uTW9kZWxDaGFuZ2UsXG4gICAgICBleHRlcm5hbENvbnRleHROYW1lOiBhcmdzLmV4dGVybmFsQ29udGV4dE5hbWUsXG4gICAgICBleHRlcm5hbENvbnRleHREZXNjcmlwdGlvbjogYXJncy5leHRlcm5hbENvbnRleHREZXNjcmlwdGlvbixcbiAgICAgIHZhbGlkYXRpb25NZXNzYWdlczogYXJncy52YWxpZGF0aW9uTWVzc2FnZXMsXG4gICAgICBldmFsdWF0aW9uUmVzdWx0c0J5Tm9kZUlkOiBhcmdzLmV2YWx1YXRpb25SZXN1bHRzQnlOb2RlSWQsXG4gICAgICBpc3N1ZVRyYWNrZXJIcmVmOiBhcmdzLmlzc3VlVHJhY2tlckhyZWZcbiAgICB9KX1cbiAgICA8Lz47XG59XG5jb25zdCBtZXRhOiBNZXRhPERtbkVkaXRvclByb3BzPiA9IHtcbiAgdGl0bGU6IFwiTWlzYy9FdmFsdWF0aW9uSGlnaGxpZ2h0c1wiLFxuICBjb21wb25lbnQ6IERtbkVkaXRvcixcbiAgaW5jbHVkZVN0b3JpZXM6IC9eW0EtWl0vXG59O1xuZXhwb3J0IGRlZmF1bHQgbWV0YTtcbnR5cGUgU3RvcnkgPSBTdG9yeU9iajx0eXBlb2YgRXZhbHVhdGlvbkhpZ2hsaWdodHM+O1xuZXhwb3J0IGNvbnN0IEV2YWx1YXRpb25IaWdobGlnaHRzU3Rvcnk6IFN0b3J5ID0ge1xuICByZW5kZXI6IGFyZ3MgPT4gRXZhbHVhdGlvbkhpZ2hsaWdodHMoYXJncyksXG4gIGFyZ3M6IHtcbiAgICBtb2RlbDogZ2V0TWFyc2hhbGxlcihpbml0aWFsTW9kZWwsIHtcbiAgICAgIHVwZ3JhZGVUbzogXCJsYXRlc3RcIlxuICAgIH0pLnBhcnNlci5wYXJzZSgpLFxuICAgIG9yaWdpbmFsVmVyc2lvbjogXCIxLjVcIixcbiAgICBldmFsdWF0aW9uUmVzdWx0c0J5Tm9kZUlkOiBuZXcgTWFwKFtbXCJfRjBEQzg5MjMtNUZDNy00MjAwLThCRDEtNDYxRDVGMzcxNEJFXCIsIHtcbiAgICAgIGV2YWx1YXRpb25SZXN1bHQ6IFwic2tpcHBlZFwiLFxuICAgICAgZXZhbHVhdGlvbkhpdHNDb3VudEJ5UnVsZU9yUm93SWQ6IG5ldyBNYXAoKVxuICAgIH1dLCBbXCJfRDZGNDIzNEYtMTVCMy00RjVCLUI4MTQtNUY2RkYyOUQyOTA3XCIsIHtcbiAgICAgIGV2YWx1YXRpb25SZXN1bHQ6IFwiZmFpbGVkXCIsXG4gICAgICBldmFsdWF0aW9uSGl0c0NvdW50QnlSdWxlT3JSb3dJZDogbmV3IE1hcCgpXG4gICAgfV0sIFtcIl8yRkU1MURCMS0zMDgzLTRCRjctQUE3MS0wQjAwNjUzMTBFNzJcIiwge1xuICAgICAgZXZhbHVhdGlvblJlc3VsdDogXCJzdWNjZWVkZWRcIixcbiAgICAgIGV2YWx1YXRpb25IaXRzQ291bnRCeVJ1bGVPclJvd0lkOiBuZXcgTWFwKFtbXCJfMTE5NzZFQkEtNjBCQy00MjFCLUEyNzAtMDg5QTQ1RTlCMTY3XCIsIDEwXV0pXG4gICAgfV1dKSxcbiAgICBleHRlcm5hbENvbnRleHREZXNjcmlwdGlvbjogXCJFeHRlcm5hbCBjb250ZXh0IGRlc2NyaXB0aW9uXCIsXG4gICAgZXh0ZXJuYWxDb250ZXh0TmFtZTogXCJTdG9yeWJvb2sgLSBETU4gRWRpdG9yXCIsXG4gICAgZXh0ZXJuYWxNb2RlbHNCeU5hbWVzcGFjZToge30sXG4gICAgaXNzdWVUcmFja2VySHJlZjogXCJcIixcbiAgICB2YWxpZGF0aW9uTWVzc2FnZXM6IHt9XG4gIH1cbn07XG5FdmFsdWF0aW9uSGlnaGxpZ2h0c1N0b3J5LnBhcmFtZXRlcnMgPSB7XG4gIC4uLkV2YWx1YXRpb25IaWdobGlnaHRzU3RvcnkucGFyYW1ldGVycyxcbiAgZG9jczoge1xuICAgIC4uLkV2YWx1YXRpb25IaWdobGlnaHRzU3RvcnkucGFyYW1ldGVycz8uZG9jcyxcbiAgICBzb3VyY2U6IHtcbiAgICAgIG9yaWdpbmFsU291cmNlOiBcIntcXG4gIHJlbmRlcjogYXJncyA9PiBFdmFsdWF0aW9uSGlnaGxpZ2h0cyhhcmdzKSxcXG4gIGFyZ3M6IHtcXG4gICAgbW9kZWw6IGdldE1hcnNoYWxsZXIoaW5pdGlhbE1vZGVsLCB7XFxuICAgICAgdXBncmFkZVRvOiBcXFwibGF0ZXN0XFxcIlxcbiAgICB9KS5wYXJzZXIucGFyc2UoKSxcXG4gICAgb3JpZ2luYWxWZXJzaW9uOiBcXFwiMS41XFxcIixcXG4gICAgZXZhbHVhdGlvblJlc3VsdHNCeU5vZGVJZDogbmV3IE1hcChbW1xcXCJfRjBEQzg5MjMtNUZDNy00MjAwLThCRDEtNDYxRDVGMzcxNEJFXFxcIiwge1xcbiAgICAgIGV2YWx1YXRpb25SZXN1bHQ6IFxcXCJza2lwcGVkXFxcIixcXG4gICAgICBldmFsdWF0aW9uSGl0c0NvdW50QnlSdWxlT3JSb3dJZDogbmV3IE1hcCgpXFxuICAgIH1dLCBbXFxcIl9ENkY0MjM0Ri0xNUIzLTRGNUItQjgxNC01RjZGRjI5RDI5MDdcXFwiLCB7XFxuICAgICAgZXZhbHVhdGlvblJlc3VsdDogXFxcImZhaWxlZFxcXCIsXFxuICAgICAgZXZhbHVhdGlvbkhpdHNDb3VudEJ5UnVsZU9yUm93SWQ6IG5ldyBNYXAoKVxcbiAgICB9XSwgW1xcXCJfMkZFNTFEQjEtMzA4My00QkY3LUFBNzEtMEIwMDY1MzEwRTcyXFxcIiwge1xcbiAgICAgIGV2YWx1YXRpb25SZXN1bHQ6IFxcXCJzdWNjZWVkZWRcXFwiLFxcbiAgICAgIGV2YWx1YXRpb25IaXRzQ291bnRCeVJ1bGVPclJvd0lkOiBuZXcgTWFwKFtbXFxcIl8xMTk3NkVCQS02MEJDLTQyMUItQTI3MC0wODlBNDVFOUIxNjdcXFwiLCAxMF1dKVxcbiAgICB9XV0pLFxcbiAgICBleHRlcm5hbENvbnRleHREZXNjcmlwdGlvbjogXFxcIkV4dGVybmFsIGNvbnRleHQgZGVzY3JpcHRpb25cXFwiLFxcbiAgICBleHRlcm5hbENvbnRleHROYW1lOiBcXFwiU3Rvcnlib29rIC0gRE1OIEVkaXRvclxcXCIsXFxuICAgIGV4dGVybmFsTW9kZWxzQnlOYW1lc3BhY2U6IHt9LFxcbiAgICBpc3N1ZVRyYWNrZXJIcmVmOiBcXFwiXFxcIixcXG4gICAgdmFsaWRhdGlvbk1lc3NhZ2VzOiB7fVxcbiAgfVxcbn1cIixcbiAgICAgIC4uLkV2YWx1YXRpb25IaWdobGlnaHRzU3RvcnkucGFyYW1ldGVycz8uZG9jcz8uc291cmNlXG4gICAgfVxuICB9XG59OyJdLCJuYW1lcyI6WyJ1c2VDYWxsYmFjayIsInVzZVN0YXRlIiwiZ2V0TWFyc2hhbGxlciIsIkRtbkVkaXRvciIsIm5vcm1hbGl6ZSIsIkRtbkVkaXRvcldyYXBwZXIiLCJpbml0aWFsTW9kZWwiLCJFdmFsdWF0aW9uSGlnaGxpZ2h0cyIsImFyZ3MiLCJzdGF0ZSIsInNldFN0YXRlIiwiaW5pdGlhbERtbk1hcnNoYWxsZXIiLCJ1cGdyYWRlVG8iLCJtYXJzaGFsbGVyIiwic3RhY2siLCJwYXJzZXIiLCJwYXJzZSIsInBvaW50ZXIiLCJjdXJyZW50TW9kZWwiLCJvbk1vZGVsQ2hhbmdlIiwibW9kZWwiLCJwcmV2IiwibmV3U3RhY2siLCJzbGljZSIsImxlbmd0aCIsIl9qc3giLCJfRnJhZ21lbnQiLCJjaGlsZHJlbiIsIm9yaWdpbmFsVmVyc2lvbiIsImV4dGVybmFsQ29udGV4dE5hbWUiLCJleHRlcm5hbENvbnRleHREZXNjcmlwdGlvbiIsInZhbGlkYXRpb25NZXNzYWdlcyIsImV2YWx1YXRpb25SZXN1bHRzQnlOb2RlSWQiLCJpc3N1ZVRyYWNrZXJIcmVmIiwibWV0YSIsInRpdGxlIiwiY29tcG9uZW50IiwiaW5jbHVkZVN0b3JpZXMiLCJFdmFsdWF0aW9uSGlnaGxpZ2h0c1N0b3J5IiwicmVuZGVyIiwiTWFwIiwiZXZhbHVhdGlvblJlc3VsdCIsImV2YWx1YXRpb25IaXRzQ291bnRCeVJ1bGVPclJvd0lkIiwiZXh0ZXJuYWxNb2RlbHNCeU5hbWVzcGFjZSIsInBhcmFtZXRlcnMiLCJkb2NzIiwiX2EiLCJzb3VyY2UiLCJvcmlnaW5hbFNvdXJjZSIsIl9jIiwiX2IiLCJfX25hbWVkRXhwb3J0c09yZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==