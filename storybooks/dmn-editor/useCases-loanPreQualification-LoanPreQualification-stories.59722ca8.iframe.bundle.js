"use strict";
(self["webpackChunk_kie_tools_dmn_editor"] = self["webpackChunk_kie_tools_dmn_editor"] || []).push([["useCases-loanPreQualification-LoanPreQualification-stories"],{

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
  <dmn:import id="_87CDD600-7564-CF87-547E-A8B876CD0812" name="testTreePmml" importType="https://www.dmg.org/PMML-4_2" namespace="https://kie.org/pmml#dev-webapp/available-models-to-include/testTree.pmml" />
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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlQ2FzZXMtbG9hblByZVF1YWxpZmljYXRpb24tTG9hblByZVF1YWxpZmljYXRpb24tc3Rvcmllcy41OTcyMmNhOC5pZnJhbWUuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUIwRDtBQUNIO0FBQ1k7QUFFNUQsTUFBTUcsdUJBQXVCLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0ErdUJ0QztBQUNELE1BQU1DLElBQUksR0FBeUI7RUFDakNDLEtBQUssRUFBRSxrQ0FBa0M7RUFDekNDLFNBQVMsRUFBRUoscURBQVM7RUFDcEJLLGNBQWMsRUFBRTtDQUNqQjtBQUNELGlFQUFlSCxJQUFJLEVBQUM7QUFFcEIsTUFBTUksVUFBVSxHQUFHUix3RUFBYSxDQUFDRyx1QkFBdUIsRUFBRTtFQUN4RE0sU0FBUyxFQUFFO0NBQ1osQ0FBQztBQUNGLE1BQU1DLEtBQUssR0FBR0YsVUFBVSxDQUFDRyxNQUFNLENBQUNDLEtBQUssRUFBRTtBQUNoQyxNQUFNQyxvQkFBb0IsR0FBVTtFQUN6Q0MsTUFBTSxFQUFFYiw0REFBSyxDQUFDYSxNQUFNO0VBQ3BCQyxJQUFJLEVBQUU7SUFDSkwsS0FBSyxFQUFFQSxLQUFLO0lBQ1pNLEdBQUcsRUFBRVIsVUFBVSxDQUFDUyxPQUFPLENBQUNDLEtBQUssQ0FBQ1IsS0FBSzs7Q0FFdEM7QUFDREcsb0JBQW9CLENBQUNNLFVBQVUsR0FBRztFQUNoQyxHQUFHTixvQkFBb0IsQ0FBQ00sVUFBVTtFQUNsQ0MsSUFBSSxFQUFFO0lBQ0osSUFBRyxDQUFBQyxFQUFBLEdBQUFSLG9CQUFvQixDQUFDTSxVQUFVLGNBQUFFLEVBQUEsdUJBQUFBLEVBQUEsQ0FBRUQsSUFBSTtJQUN4Q0UsTUFBTSxFQUFFO01BQ05DLGNBQWMsRUFBRSw0R0FBNEc7TUFDNUgsSUFBRyxDQUFBQyxFQUFBLElBQUFDLEVBQUEsR0FBQVosb0JBQW9CLENBQUNNLFVBQVUsY0FBQU0sRUFBQSx1QkFBQUEsRUFBQSxDQUFFTCxJQUFJLGNBQUFJLEVBQUEsdUJBQUFBLEVBQUEsQ0FBRUYsTUFBTTs7O0NBR3JEO0FBQUMsTUFBQUksbUJBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Aa2llLXRvb2xzL2Rtbi1lZGl0b3IvLi9zdG9yaWVzL3VzZUNhc2VzL2xvYW5QcmVRdWFsaWZpY2F0aW9uL0xvYW5QcmVRdWFsaWZpY2F0aW9uLnN0b3JpZXMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBMaWNlbnNlZCB0byB0aGUgQXBhY2hlIFNvZnR3YXJlIEZvdW5kYXRpb24gKEFTRikgdW5kZXIgb25lXG4gKiBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gIFNlZSB0aGUgTk9USUNFIGZpbGVcbiAqIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uXG4gKiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC4gIFRoZSBBU0YgbGljZW5zZXMgdGhpcyBmaWxlXG4gKiB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlXG4gKiBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2VcbiAqIHdpdGggdGhlIExpY2Vuc2UuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLFxuICogc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cbiAqIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXG4gKiBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGVcbiAqIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnNcbiAqIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHR5cGUgeyBNZXRhLCBTdG9yeU9iaiB9IGZyb20gXCJAc3Rvcnlib29rL3JlYWN0XCI7XG5pbXBvcnQgeyBnZXRNYXJzaGFsbGVyIH0gZnJvbSBcIkBraWUtdG9vbHMvZG1uLW1hcnNoYWxsZXJcIjtcbmltcG9ydCB7IEVtcHR5IH0gZnJvbSBcIi4uLy4uL21pc2MvZW1wdHkvRW1wdHkuc3Rvcmllc1wiO1xuaW1wb3J0IHsgRG1uRWRpdG9yLCBEbW5FZGl0b3JQcm9wcyB9IGZyb20gXCIuLi8uLi8uLi9zcmMvRG1uRWRpdG9yXCI7XG5pbXBvcnQgeyBTdG9yeWJvb2tEbW5FZGl0b3JQcm9wcyB9IGZyb20gXCIuLi8uLi9kbW5FZGl0b3JTdG9yaWVzV3JhcHBlclwiO1xuZXhwb3J0IGNvbnN0IGxvYW5QcmVRdWFsaWZpY2F0aW9uRG1uID0gYDw/eG1sIHZlcnNpb249XCIxLjBcIiBlbmNvZGluZz1cIlVURi04XCIgPz5cbjxkbW46ZGVmaW5pdGlvbnMgeG1sbnM6ZG1uPVwiaHR0cDovL3d3dy5vbWcub3JnL3NwZWMvRE1OLzIwMTgwNTIxL01PREVML1wiXG4gICAgeG1sbnM6ZGk9XCJodHRwOi8vd3d3Lm9tZy5vcmcvc3BlYy9ETU4vMjAxODA1MjEvREkvXCJcbiAgICB4bWxuczpraWU9XCJodHRwczovL2tpZS5hcGFjaGUub3JnL2Rtbi9leHRlbnNpb25zLzEuMFwiXG4gICAgeG1sbnM6ZG1uZGk9XCJodHRwOi8vd3d3Lm9tZy5vcmcvc3BlYy9ETU4vMjAxODA1MjEvRE1OREkvXCJcbiAgICB4bWxuczpkYz1cImh0dHA6Ly93d3cub21nLm9yZy9zcGVjL0RNTi8yMDE4MDUyMS9EQy9cIlxuICAgIHhtbG5zOmZlZWw9XCJodHRwOi8vd3d3Lm9tZy5vcmcvc3BlYy9ETU4vMjAxODA1MjEvRkVFTC9cIlxuICAgIHhtbG5zOmluY2x1ZGVkMD1cImh0dHBzOi8va2llLmFwYWNoZS5vcmcvZG1uL185MjM3ODRCRC1DRDMxLTQ4OEEtOUMzMS1DMUE4M0M1NDgzQzBcIlxuICAgIHhtbG5zOmluY2x1ZGVkMT1cImh0dHBzOi8va2llLmFwYWNoZS5vcmcvZG1uL19EMTlCMDAxNS0yQ0JELTRCQTgtODRBOS01RjU1NEQ4NEE5RTFcIlxuICAgIGV4cHJlc3Npb25MYW5ndWFnZT1cImh0dHA6Ly93d3cub21nLm9yZy9zcGVjL0RNTi8yMDE4MDUyMS9GRUVML1wiXG4gICAgdHlwZUxhbmd1YWdlPVwiaHR0cDovL3d3dy5vbWcub3JnL3NwZWMvRE1OLzIwMjExMTA4L0ZFRUwvXCJcbiAgICBuYW1lc3BhY2U9XCJodHRwczovL2tpZS5hcGFjaGUub3JnL2Rtbi9fODU3RkU0MjQtQkVEQS00NzcyLUFCOEUtMkY0Q0REQjg2NEFCXCJcbiAgICBpZD1cIl9DNkNCRUNFQi0yQkJDLTRFMTQtODBCMC0xN0Y1NzZCMkNGOTJcIlxuICAgIG5hbWU9XCJsb2FuX3ByZV9xdWFsaWZpY2F0aW9uXCI+XG4gIDxkbW46ZXh0ZW5zaW9uRWxlbWVudHMgLz5cbiAgPGRtbjppdGVtRGVmaW5pdGlvbiBpZD1cIl9ENDBCMDEwNi02MkU4LTRBQzAtQTM5QS1DNkM5NTA2MTk0QTlcIiBuYW1lPVwiUmVxdWVzdGVkX1Byb2R1Y3RcIiBpc0NvbGxlY3Rpb249XCJmYWxzZVwiPlxuICAgIDxkbW46aXRlbUNvbXBvbmVudCBpZD1cIl82OGI0YTk2Yy0xOThhLTQ1NzUtYjI5YS1hMmM4YjA1MzlhMmNcIiBuYW1lPVwiVHlwZVwiIGlzQ29sbGVjdGlvbj1cImZhbHNlXCI+XG4gICAgICA8ZG1uOnR5cGVSZWY+UHJvZHVjdF9UeXBlPC9kbW46dHlwZVJlZj5cbiAgICA8L2RtbjppdGVtQ29tcG9uZW50PlxuICAgIDxkbW46aXRlbUNvbXBvbmVudCBpZD1cIl9hYjE2NDdjMi1jYjYzLTQ4MDgtOGQ5MC0zNmQ0MTU5MWE0MGNcIiBuYW1lPVwiUmF0ZVwiIGlzQ29sbGVjdGlvbj1cImZhbHNlXCI+XG4gICAgICA8ZG1uOnR5cGVSZWY+bnVtYmVyPC9kbW46dHlwZVJlZj5cbiAgICA8L2RtbjppdGVtQ29tcG9uZW50PlxuICAgIDxkbW46aXRlbUNvbXBvbmVudCBpZD1cIl8xNTI5MTdiYi02MDk1LTQwNTctODYxMy01YjA4Yjc3ZGIyMzVcIiBuYW1lPVwiVGVybVwiIGlzQ29sbGVjdGlvbj1cImZhbHNlXCI+XG4gICAgICA8ZG1uOnR5cGVSZWY+bnVtYmVyPC9kbW46dHlwZVJlZj5cbiAgICA8L2RtbjppdGVtQ29tcG9uZW50PlxuICAgIDxkbW46aXRlbUNvbXBvbmVudCBpZD1cIl9lMmYwZThjZC04ZjVhLTQzZDQtYjI2My1hYWE1YjlhZTQ0MjBcIiBuYW1lPVwiQW1vdW50XCIgaXNDb2xsZWN0aW9uPVwiZmFsc2VcIj5cbiAgICAgIDxkbW46dHlwZVJlZj5udW1iZXI8L2Rtbjp0eXBlUmVmPlxuICAgIDwvZG1uOml0ZW1Db21wb25lbnQ+XG4gIDwvZG1uOml0ZW1EZWZpbml0aW9uPlxuICA8ZG1uOml0ZW1EZWZpbml0aW9uIGlkPVwiXzJCNEU5NTkzLTMyMzktNEUwNC1BMjEzLTM0NUYwQUEwQUY5RFwiIG5hbWU9XCJNYXJpdGFsX1N0YXR1c1wiIGlzQ29sbGVjdGlvbj1cImZhbHNlXCI+XG4gICAgPGRtbjp0eXBlUmVmPnN0cmluZzwvZG1uOnR5cGVSZWY+XG4gICAgPGRtbjphbGxvd2VkVmFsdWVzIGlkPVwiXzVCRDEzRDlELTQxMkYtNEU2Qi05MTRBLTNEOEFBQUM2QTcwNVwiPlxuICAgICAgPGRtbjp0ZXh0PiZxdW90O00mcXVvdDssJnF1b3Q7RCZxdW90OywmcXVvdDtTJnF1b3Q7PC9kbW46dGV4dD5cbiAgICA8L2RtbjphbGxvd2VkVmFsdWVzPlxuICA8L2RtbjppdGVtRGVmaW5pdGlvbj5cbiAgPGRtbjppdGVtRGVmaW5pdGlvbiBpZD1cIl9GMDkwQ0JCNy1GNUMzLTRDNTQtOTkwNS01MTdEQzE0NjlCNTJcIiBuYW1lPVwiQXBwbGljYW50X0RhdGFcIiBpc0NvbGxlY3Rpb249XCJmYWxzZVwiPlxuICAgIDxkbW46aXRlbUNvbXBvbmVudCBpZD1cIl9mNTJlMmI5Zi01NDRjLTQ4YWMtOTFlMC0xNjhhNmUxM2ZjOGJcIiBuYW1lPVwiQWdlXCIgaXNDb2xsZWN0aW9uPVwiZmFsc2VcIj5cbiAgICAgIDxkbW46dHlwZVJlZj5udW1iZXI8L2Rtbjp0eXBlUmVmPlxuICAgIDwvZG1uOml0ZW1Db21wb25lbnQ+XG4gICAgPGRtbjppdGVtQ29tcG9uZW50IGlkPVwiXzVhMjBkNGMyLTBlNjYtNGJiOS1iNWVhLTNiOWYyY2Q4ZTA1MFwiIG5hbWU9XCJNYXJpdGFsIFN0YXR1c1wiIGlzQ29sbGVjdGlvbj1cImZhbHNlXCI+XG4gICAgICA8ZG1uOnR5cGVSZWY+TWFyaXRhbF9TdGF0dXM8L2Rtbjp0eXBlUmVmPlxuICAgIDwvZG1uOml0ZW1Db21wb25lbnQ+XG4gICAgPGRtbjppdGVtQ29tcG9uZW50IGlkPVwiXzcwMTExN2I4LTJmOGQtNGU5NC1hNWRiLWQ1MDNmMGZiYTNhZlwiIG5hbWU9XCJFbXBsb3ltZW50IFN0YXR1c1wiIGlzQ29sbGVjdGlvbj1cImZhbHNlXCI+XG4gICAgICA8ZG1uOnR5cGVSZWY+c3RyaW5nPC9kbW46dHlwZVJlZj5cbiAgICAgIDxkbW46YWxsb3dlZFZhbHVlcyBpZD1cIl80QThFMzZGQy1BNDBDLTRDQjUtOUFFMS03MzA4MkRBMjREMTNcIj5cbiAgICAgICAgPGRtbjp0ZXh0PiZxdW90O1VuZW1wbG95ZWQmcXVvdDssJnF1b3Q7RW1wbG95ZWQmcXVvdDssJnF1b3Q7U2VsZi1lbXBsb3llZCZxdW90OywmcXVvdDtTdHVkZW50JnF1b3Q7PC9kbW46dGV4dD5cbiAgICAgIDwvZG1uOmFsbG93ZWRWYWx1ZXM+XG4gICAgPC9kbW46aXRlbUNvbXBvbmVudD5cbiAgICA8ZG1uOml0ZW1Db21wb25lbnQgaWQ9XCJfMTdhZDJhMjQtNDI1Zi00ZGY3LTkyZmMtNjA5ZTEwMjE3YjhiXCIgbmFtZT1cIkV4aXN0aW5nIEN1c3RvbWVyXCIgaXNDb2xsZWN0aW9uPVwiZmFsc2VcIj5cbiAgICAgIDxkbW46dHlwZVJlZj5ib29sZWFuPC9kbW46dHlwZVJlZj5cbiAgICA8L2RtbjppdGVtQ29tcG9uZW50PlxuICAgIDxkbW46aXRlbUNvbXBvbmVudCBpZD1cIl9iYjllZjcyZS0yZTBkLTQxNzUtYmE1OC1kNjEzYmRhN2U5YjNcIiBuYW1lPVwiTW9udGhseVwiIGlzQ29sbGVjdGlvbj1cImZhbHNlXCI+XG4gICAgICA8ZG1uOml0ZW1Db21wb25lbnQgaWQ9XCJfMzJkNWVhMzktNGJiYy00YjE2LTg4Y2QtZjdlNmU0N2E4ODVlXCIgbmFtZT1cIkluY29tZVwiIGlzQ29sbGVjdGlvbj1cImZhbHNlXCI+XG4gICAgICAgIDxkbW46dHlwZVJlZj5udW1iZXI8L2Rtbjp0eXBlUmVmPlxuICAgICAgPC9kbW46aXRlbUNvbXBvbmVudD5cbiAgICAgIDxkbW46aXRlbUNvbXBvbmVudCBpZD1cIl83ODUwNDY4Yi0xNzNkLTQxNjItOWM3YS05NDQ1M2E0YjAyZDdcIiBuYW1lPVwiUmVwYXltZW50c1wiIGlzQ29sbGVjdGlvbj1cImZhbHNlXCI+XG4gICAgICAgIDxkbW46dHlwZVJlZj5udW1iZXI8L2Rtbjp0eXBlUmVmPlxuICAgICAgPC9kbW46aXRlbUNvbXBvbmVudD5cbiAgICAgIDxkbW46aXRlbUNvbXBvbmVudCBpZD1cIl9hZjU3ODE4Mi01YzcxLTRiNzEtOTAyNy0wZjBjZjgzNzcwYWJcIiBuYW1lPVwiRXhwZW5zZXNcIiBpc0NvbGxlY3Rpb249XCJmYWxzZVwiPlxuICAgICAgICA8ZG1uOnR5cGVSZWY+bnVtYmVyPC9kbW46dHlwZVJlZj5cbiAgICAgIDwvZG1uOml0ZW1Db21wb25lbnQ+XG4gICAgICA8ZG1uOml0ZW1Db21wb25lbnQgaWQ9XCJfNGE0ZDAxYmUtZmU5Ny00OWEyLThjNGMtM2E0OWZmMjc5NjhkXCIgbmFtZT1cIlRheFwiIGlzQ29sbGVjdGlvbj1cImZhbHNlXCI+XG4gICAgICAgIDxkbW46dHlwZVJlZj5udW1iZXI8L2Rtbjp0eXBlUmVmPlxuICAgICAgPC9kbW46aXRlbUNvbXBvbmVudD5cbiAgICAgIDxkbW46aXRlbUNvbXBvbmVudCBpZD1cIl9mOTVkYmY3MC1kMjU2LTRkNDAtYTYxZC1jNjMzMmQ4NjRlOGZcIiBuYW1lPVwiSW5zdXJhbmNlXCIgaXNDb2xsZWN0aW9uPVwiZmFsc2VcIj5cbiAgICAgICAgPGRtbjp0eXBlUmVmPm51bWJlcjwvZG1uOnR5cGVSZWY+XG4gICAgICA8L2RtbjppdGVtQ29tcG9uZW50PlxuICAgIDwvZG1uOml0ZW1Db21wb25lbnQ+XG4gIDwvZG1uOml0ZW1EZWZpbml0aW9uPlxuICA8ZG1uOml0ZW1EZWZpbml0aW9uIGlkPVwiXzE5NDVCRDJFLUM4MkMtNEU3QS1BNTlFLTQ4NEI1NkEzQUU0NlwiIG5hbWU9XCJQb3N0LUJ1cmVhdV9SaXNrX0NhdGVnb3J5XCIgaXNDb2xsZWN0aW9uPVwiZmFsc2VcIj5cbiAgICA8ZG1uOml0ZW1Db21wb25lbnQgaWQ9XCJfMTllY2M2MjItZTcyYy00ODJkLTlkZTMtNjU3OGExYzc2ZjFlXCIgbmFtZT1cIlJpc2sgQ2F0ZWdvcnlcIiBpc0NvbGxlY3Rpb249XCJmYWxzZVwiPlxuICAgICAgPGRtbjp0eXBlUmVmPlJpc2tfQ2F0ZWdvcnk8L2Rtbjp0eXBlUmVmPlxuICAgIDwvZG1uOml0ZW1Db21wb25lbnQ+XG4gICAgPGRtbjppdGVtQ29tcG9uZW50IGlkPVwiXzJmYTcyNGQxLWIyNzYtNGEzZi1hMmVmLTJlN2RiM2QzNjJmM1wiIG5hbWU9XCJDcmVkaXQgQ29udGluZ2VuY3kgRmFjdG9yXCIgaXNDb2xsZWN0aW9uPVwiZmFsc2VcIj5cbiAgICAgIDxkbW46dHlwZVJlZj5udW1iZXI8L2Rtbjp0eXBlUmVmPlxuICAgIDwvZG1uOml0ZW1Db21wb25lbnQ+XG4gIDwvZG1uOml0ZW1EZWZpbml0aW9uPlxuICA8ZG1uOml0ZW1EZWZpbml0aW9uIGlkPVwiXzQ4MTY3MDRCLUFCN0YtNDYyNC04MzY4LTBCQkJBRkMwNEZCOVwiIG5hbWU9XCJQcmUtQnVyZWF1X1Jpc2tfQ2F0ZWdvcnlcIiBpc0NvbGxlY3Rpb249XCJmYWxzZVwiPlxuICAgIDxkbW46aXRlbUNvbXBvbmVudCBpZD1cIl83OGI0NGUxMC1lMTY2LTQ0YTQtODNhMy01ZDEyYzk5NTI5ZThcIiBuYW1lPVwiUmlzayBDYXRlZ29yeVwiIGlzQ29sbGVjdGlvbj1cImZhbHNlXCI+XG4gICAgICA8ZG1uOnR5cGVSZWY+c3RyaW5nPC9kbW46dHlwZVJlZj5cbiAgICA8L2RtbjppdGVtQ29tcG9uZW50PlxuICAgIDxkbW46aXRlbUNvbXBvbmVudCBpZD1cIl9mYTQxYTQ4Mi1hODZhLTRiNTItYTc1MC0zNTE3MGNkNmJiYTNcIiBuYW1lPVwiQ3JlZGl0IENvbnRpbmdlbmN5IEZhY3RvclwiIGlzQ29sbGVjdGlvbj1cImZhbHNlXCI+XG4gICAgICA8ZG1uOnR5cGVSZWY+bnVtYmVyPC9kbW46dHlwZVJlZj5cbiAgICA8L2RtbjppdGVtQ29tcG9uZW50PlxuICA8L2RtbjppdGVtRGVmaW5pdGlvbj5cbiAgPGRtbjppdGVtRGVmaW5pdGlvbiBpZD1cIl85QUVBRTUwRS02N0JGLTQ0MjgtQTZDRC1CNDhEMjk5RkQ3M0NcIiBuYW1lPVwiRWxpZ2liaWxpdHlcIiBpc0NvbGxlY3Rpb249XCJmYWxzZVwiPlxuICAgIDxkbW46dHlwZVJlZj5zdHJpbmc8L2Rtbjp0eXBlUmVmPlxuICAgIDxkbW46YWxsb3dlZFZhbHVlcyBpZD1cIl83OUM3RjQ1RC0yMjhGLTQzN0ItQUY3RS02MTVGQzcyQTUzNTRcIj5cbiAgICAgIDxkbW46dGV4dD4mcXVvdDtJbmVsaWdpYmxlJnF1b3Q7LCZxdW90O0VsaWdpYmxlJnF1b3Q7PC9kbW46dGV4dD5cbiAgICA8L2RtbjphbGxvd2VkVmFsdWVzPlxuICA8L2RtbjppdGVtRGVmaW5pdGlvbj5cbiAgPGRtbjppdGVtRGVmaW5pdGlvbiBpZD1cIl9GQkYyNDVFNy05QTkzLTRENTItOUYwMi1BRjY4OTMwMTFBNUZcIiBuYW1lPVwiU3RyYXRlZ3lcIiBpc0NvbGxlY3Rpb249XCJmYWxzZVwiPlxuICAgIDxkbW46dHlwZVJlZj5zdHJpbmc8L2Rtbjp0eXBlUmVmPlxuICAgIDxkbW46YWxsb3dlZFZhbHVlcyBpZD1cIl8wQjAwNTM1NS0xOUQwLTQ0N0ItQjJERS02RDEyOTBDNzUwNENcIj5cbiAgICAgIDxkbW46dGV4dD4mcXVvdDtEZWNsaW5lJnF1b3Q7LCZxdW90O0J1cmVhdSZxdW90OywmcXVvdDtUaHJvdWdoJnF1b3Q7PC9kbW46dGV4dD5cbiAgICA8L2RtbjphbGxvd2VkVmFsdWVzPlxuICA8L2RtbjppdGVtRGVmaW5pdGlvbj5cbiAgPGRtbjppdGVtRGVmaW5pdGlvbiBpZD1cIl81RDM0RTcxMy1FOTRFLTQwM0UtQTY4MS1ERDY5NDhCRTRGNzlcIiBuYW1lPVwiQnVyZWF1X0NhbGxfVHlwZVwiIGlzQ29sbGVjdGlvbj1cImZhbHNlXCI+XG4gICAgPGRtbjp0eXBlUmVmPnN0cmluZzwvZG1uOnR5cGVSZWY+XG4gICAgPGRtbjphbGxvd2VkVmFsdWVzIGlkPVwiXzk0N0RCQkExLTcwQTAtNDJEQS1CQzM3LUZEMkZEOTNCRjYxQlwiPlxuICAgICAgPGRtbjp0ZXh0PiZxdW90O0Z1bGwmcXVvdDssJnF1b3Q7TWluaSZxdW90OywmcXVvdDtOb25lJnF1b3Q7PC9kbW46dGV4dD5cbiAgICA8L2RtbjphbGxvd2VkVmFsdWVzPlxuICA8L2RtbjppdGVtRGVmaW5pdGlvbj5cbiAgPGRtbjppdGVtRGVmaW5pdGlvbiBpZD1cIl85QUY1OEVENi1BNTI2LTQzNDYtODc4MC0wRDFFNjAzOENBNkZcIiBuYW1lPVwiUHJvZHVjdF9UeXBlXCIgaXNDb2xsZWN0aW9uPVwiZmFsc2VcIj5cbiAgICA8ZG1uOnR5cGVSZWY+c3RyaW5nPC9kbW46dHlwZVJlZj5cbiAgICA8ZG1uOmFsbG93ZWRWYWx1ZXMgaWQ9XCJfQTI1NTQxNDAtODA2MC00RjY2LUJBMTYtM0E4REZFMTJDMTdDXCI+XG4gICAgICA8ZG1uOnRleHQ+JnF1b3Q7U3RhbmRhcmQgTG9hbiZxdW90OywmcXVvdDtTcGVjaWFsIExvYW4mcXVvdDs8L2Rtbjp0ZXh0PlxuICAgIDwvZG1uOmFsbG93ZWRWYWx1ZXM+XG4gIDwvZG1uOml0ZW1EZWZpbml0aW9uPlxuICA8ZG1uOml0ZW1EZWZpbml0aW9uIGlkPVwiXzREMzZBMjVFLTlBMzctNDdBRS1COUJGLTk0MzM4QUU2NzYwOVwiIG5hbWU9XCJSaXNrX0NhdGVnb3J5XCIgaXNDb2xsZWN0aW9uPVwiZmFsc2VcIj5cbiAgICA8ZG1uOnR5cGVSZWY+c3RyaW5nPC9kbW46dHlwZVJlZj5cbiAgICA8ZG1uOmFsbG93ZWRWYWx1ZXMgaWQ9XCJfMDQxNDI2QzItQjlEMi00QzE4LTlBQzMtNUE1MDhEMDAwODM5XCI+XG4gICAgICA8ZG1uOnRleHQ+JnF1b3Q7SGlnaCZxdW90OywmcXVvdDtNZWRpdW0mcXVvdDssJnF1b3Q7TG93JnF1b3Q7LCZxdW90O1ZlcnkgTG93JnF1b3Q7LCZxdW90O0RlY2xpbmUmcXVvdDs8L2Rtbjp0ZXh0PlxuICAgIDwvZG1uOmFsbG93ZWRWYWx1ZXM+XG4gIDwvZG1uOml0ZW1EZWZpbml0aW9uPlxuICA8ZG1uOml0ZW1EZWZpbml0aW9uIGlkPVwiXzQ2Qzg3MEZDLTJBOTktNDNBMC05RDFCLTNEM0M1NTE2RkIyM1wiIG5hbWU9XCJDcmVkaXRfU2NvcmVfUmF0aW5nXCIgaXNDb2xsZWN0aW9uPVwiZmFsc2VcIj5cbiAgICA8ZG1uOnR5cGVSZWY+c3RyaW5nPC9kbW46dHlwZVJlZj5cbiAgICA8ZG1uOmFsbG93ZWRWYWx1ZXMgaWQ9XCJfODQ3MEFFNjktMjgxNC00OTExLTk1M0QtM0ZDNjFBNjgxMDYzXCI+XG4gICAgICA8ZG1uOnRleHQ+JnF1b3Q7UG9vciZxdW90OywmcXVvdDtCYWQmcXVvdDssJnF1b3Q7RmFpciZxdW90OywmcXVvdDtHb29kJnF1b3Q7LCZxdW90O0V4Y2VsbGVudCZxdW90OzwvZG1uOnRleHQ+XG4gICAgPC9kbW46YWxsb3dlZFZhbHVlcz5cbiAgPC9kbW46aXRlbURlZmluaXRpb24+XG4gIDxkbW46aXRlbURlZmluaXRpb24gaWQ9XCJfNzY0MUE2RkEtQkNGMy00NUQxLUEwQjYtNzFCMDYzNEFCQjNFXCIgbmFtZT1cIkJhY2tfRW5kX1JhdGlvXCIgaXNDb2xsZWN0aW9uPVwiZmFsc2VcIj5cbiAgICA8ZG1uOnR5cGVSZWY+c3RyaW5nPC9kbW46dHlwZVJlZj5cbiAgICA8ZG1uOmFsbG93ZWRWYWx1ZXMgaWQ9XCJfQ0ExQzZGMEUtMTg2Ri00MURELThEOEQtRDQwNTc4OUJBM0YxXCI+XG4gICAgICA8ZG1uOnRleHQ+JnF1b3Q7SW5zdWZmaWNpZW50JnF1b3Q7LCZxdW90O1N1ZmZpY2llbnQmcXVvdDs8L2Rtbjp0ZXh0PlxuICAgIDwvZG1uOmFsbG93ZWRWYWx1ZXM+XG4gIDwvZG1uOml0ZW1EZWZpbml0aW9uPlxuICA8ZG1uOml0ZW1EZWZpbml0aW9uIGlkPVwiX0I1RTAwQTJELTNDOTUtNEE5Qy1CQ0E2LUJERTg1MjkzOUY2RFwiIG5hbWU9XCJGcm9udF9FbmRfUmF0aW9cIiBpc0NvbGxlY3Rpb249XCJmYWxzZVwiPlxuICAgIDxkbW46dHlwZVJlZj5zdHJpbmc8L2Rtbjp0eXBlUmVmPlxuICAgIDxkbW46YWxsb3dlZFZhbHVlcyBpZD1cIl9CODY1OENBMi1GNDcyLTQzOTAtOEFCMC0xREQ0OTEwMEIyMENcIj5cbiAgICAgIDxkbW46dGV4dD4mcXVvdDtTdWZmaWNpZW50JnF1b3Q7LCZxdW90O0luc3VmZmljaWVudCZxdW90OzwvZG1uOnRleHQ+XG4gICAgPC9kbW46YWxsb3dlZFZhbHVlcz5cbiAgPC9kbW46aXRlbURlZmluaXRpb24+XG4gIDxkbW46aXRlbURlZmluaXRpb24gaWQ9XCJfQjhBQ0UyMTAtMkM1NS00QzY2LUIzRDgtNDg4NUVFMUM1MkEwXCIgbmFtZT1cIlF1YWxpZmljYXRpb25cIiBpc0NvbGxlY3Rpb249XCJmYWxzZVwiPlxuICAgIDxkbW46dHlwZVJlZj5zdHJpbmc8L2Rtbjp0eXBlUmVmPlxuICAgIDxkbW46YWxsb3dlZFZhbHVlcyBpZD1cIl8xRjY2QjhCRi02QUI3LTQ5NjUtOEE2OS04OTdEREMxQThCMzRcIj5cbiAgICAgIDxkbW46dGV4dD4mcXVvdDtOb3QgUXVhbGlmaWVkJnF1b3Q7LCZxdW90O1F1YWxpZmllZCZxdW90OzwvZG1uOnRleHQ+XG4gICAgPC9kbW46YWxsb3dlZFZhbHVlcz5cbiAgPC9kbW46aXRlbURlZmluaXRpb24+XG4gIDxkbW46aXRlbURlZmluaXRpb24gaWQ9XCJfMkNDMkU4RDctMUJFMi00RTRBLTgwNzItNTVBMUVDOTREQjZFXCIgbmFtZT1cIkNyZWRpdF9TY29yZVwiIGlzQ29sbGVjdGlvbj1cImZhbHNlXCI+XG4gICAgPGRtbjppdGVtQ29tcG9uZW50IGlkPVwiX2Q1M2NlOTIwLTg3ZjUtNGE0Zi1iYWJhLTg1YzJhODMwZDYwZlwiIG5hbWU9XCJGSUNPXCIgaXNDb2xsZWN0aW9uPVwiZmFsc2VcIj5cbiAgICAgIDxkbW46dHlwZVJlZj5udW1iZXI8L2Rtbjp0eXBlUmVmPlxuICAgICAgPGRtbjphbGxvd2VkVmFsdWVzIGlkPVwiX0UzMEFBREJELUQwMjgtNDc1RC1COEQ4LUI1Njg3RDQ1NEJFRFwiPlxuICAgICAgICA8ZG1uOnRleHQ+WzMwMC4uODUwXTwvZG1uOnRleHQ+XG4gICAgICA8L2RtbjphbGxvd2VkVmFsdWVzPlxuICAgIDwvZG1uOml0ZW1Db21wb25lbnQ+XG4gIDwvZG1uOml0ZW1EZWZpbml0aW9uPlxuICA8ZG1uOml0ZW1EZWZpbml0aW9uIGlkPVwiXzNDMzdBNkYxLUMxMTMtNDk5My1CQjU3LUU4OUI5OUM3MEIwMlwiIG5hbWU9XCJMb2FuX1F1YWxpZmljYXRpb25cIiBpc0NvbGxlY3Rpb249XCJmYWxzZVwiPlxuICAgIDxkbW46aXRlbUNvbXBvbmVudCBpZD1cIl9lMTFjM2FjMy03MzcwLTQzNzgtOTY3Yi05MWU5Y2IyMjFmZTFcIiBuYW1lPVwiUXVhbGlmaWNhdGlvblwiIGlzQ29sbGVjdGlvbj1cImZhbHNlXCI+XG4gICAgICA8ZG1uOnR5cGVSZWY+c3RyaW5nPC9kbW46dHlwZVJlZj5cbiAgICAgIDxkbW46YWxsb3dlZFZhbHVlcyBpZD1cIl9CMEFEMDY0MS0wMDIzLTQ2MUQtQjIwRS00MUNBRTAyRjlCRTRcIj5cbiAgICAgICAgPGRtbjp0ZXh0PiZxdW90O1F1YWxpZmllZCZxdW90OywmcXVvdDtOb3QgUXVhbGlmaWVkJnF1b3Q7PC9kbW46dGV4dD5cbiAgICAgIDwvZG1uOmFsbG93ZWRWYWx1ZXM+XG4gICAgPC9kbW46aXRlbUNvbXBvbmVudD5cbiAgICA8ZG1uOml0ZW1Db21wb25lbnQgaWQ9XCJfYjM1NDFmODItNWJjOS00ZmFiLWJhOWItYzQyM2E5YTJjZDZjXCIgbmFtZT1cIlJlYXNvblwiIGlzQ29sbGVjdGlvbj1cImZhbHNlXCI+XG4gICAgICA8ZG1uOnR5cGVSZWY+c3RyaW5nPC9kbW46dHlwZVJlZj5cbiAgICA8L2RtbjppdGVtQ29tcG9uZW50PlxuICA8L2RtbjppdGVtRGVmaW5pdGlvbj5cbiAgPGRtbjppbnB1dERhdGEgaWQ9XCJfNEM4OUU1OUMtRkREQS00MzhDLThEMUYtMEIxMTk0RUY2REFFXCIgbmFtZT1cIkNyZWRpdCBTY29yZVwiPlxuICAgIDxkbW46ZXh0ZW5zaW9uRWxlbWVudHMgLz5cbiAgICA8ZG1uOnZhcmlhYmxlIGlkPVwiX0E5NzAxOUZDLUVFMDEtNDUxRi1BN0FBLTVBOTdFRDAwNUZCOVwiIG5hbWU9XCJDcmVkaXQgU2NvcmVcIiB0eXBlUmVmPVwiQ3JlZGl0X1Njb3JlXCIgLz5cbiAgPC9kbW46aW5wdXREYXRhPlxuICA8ZG1uOmJ1c2luZXNzS25vd2xlZGdlTW9kZWwgaWQ9XCJfNEM3ODhEQkQtQzY3Mi00RjQxLTlBRkUtOUM3RDJDMTQ1NzM0XCIgbmFtZT1cIkxlbmRlciBBY2NlcHRhYmxlIERUSVwiPlxuICAgIDxkbW46ZXh0ZW5zaW9uRWxlbWVudHMgLz5cbiAgICA8ZG1uOnZhcmlhYmxlIGlkPVwiXzg1NTA4OTQzLTdBRDItNEFBMC04MEU1LTIwOTIzQ0EyMzA4RFwiIG5hbWU9XCJMZW5kZXIgQWNjZXB0YWJsZSBEVElcIiB0eXBlUmVmPVwibnVtYmVyXCIgLz5cbiAgICA8ZG1uOmVuY2Fwc3VsYXRlZExvZ2ljIGlkPVwiXzlGMDI1N0VFLUNGODItNDlGRC1BRURELTMxNTU4OTA4NjRGRlwiIGtpbmQ9XCJGRUVMXCI+XG4gICAgICA8ZG1uOmxpdGVyYWxFeHByZXNzaW9uIGlkPVwiXzIxRThGQTM4LUM5NDctNDczMy05RTUyLUNGODFBOTdBREY5MVwiPlxuICAgICAgICA8ZG1uOnRleHQ+MC4zNjwvZG1uOnRleHQ+XG4gICAgICA8L2RtbjpsaXRlcmFsRXhwcmVzc2lvbj5cbiAgICA8L2RtbjplbmNhcHN1bGF0ZWRMb2dpYz5cbiAgPC9kbW46YnVzaW5lc3NLbm93bGVkZ2VNb2RlbD5cbiAgPGRtbjpkZWNpc2lvbiBpZD1cIl9GMERDODkyMy01RkM3LTQyMDAtOEJEMS00NjFENUYzNzE0QkVcIiBuYW1lPVwiRnJvbnQgRW5kIFJhdGlvXCI+XG4gICAgPGRtbjpleHRlbnNpb25FbGVtZW50cyAvPlxuICAgIDxkbW46dmFyaWFibGUgaWQ9XCJfQTBCMEIwMzItRjYzRi00OTFGLUE2NUUtNzJFNjhBODZCOEZEXCIgbmFtZT1cIkZyb250IEVuZCBSYXRpb1wiIHR5cGVSZWY9XCJGcm9udF9FbmRfUmF0aW9cIiAvPlxuICAgIDxkbW46aW5mb3JtYXRpb25SZXF1aXJlbWVudCBpZD1cIl84OUVFQUY5Ri01QTVELTRGNTktOTFCNy1FQTQxOEE3MjI5QUZcIj5cbiAgICAgIDxkbW46cmVxdWlyZWRJbnB1dCBocmVmPVwiI18xQ0Y1Q0VGQS1BRjk3LTQ2RjktOUNENS05QThBRUJCMjBCNEVcIiAvPlxuICAgIDwvZG1uOmluZm9ybWF0aW9uUmVxdWlyZW1lbnQ+XG4gICAgPGRtbjppbmZvcm1hdGlvblJlcXVpcmVtZW50IGlkPVwiXzg3NzMwQzVBLTU2NDgtNDE1Qi05MTg5LUVGNEQ4ODA1RjhDOVwiPlxuICAgICAgPGRtbjpyZXF1aXJlZElucHV0IGhyZWY9XCIjXzZFMzIwNUFGLTdFM0QtNEFCRS1BMzY3LTk2RjNGNkU4MjEwRVwiIC8+XG4gICAgPC9kbW46aW5mb3JtYXRpb25SZXF1aXJlbWVudD5cbiAgICA8ZG1uOmtub3dsZWRnZVJlcXVpcmVtZW50IGlkPVwiXzYzREU3QzNCLUE3NjctNEI4QS1BMDk4LTkxRUNCNEI4RDMzMFwiPlxuICAgICAgPGRtbjpyZXF1aXJlZEtub3dsZWRnZSBocmVmPVwiI19GQUY5MDgwRS1GNEVGLTQ5RjctQUVGRC0wRDI5OTBEOEZGREFcIiAvPlxuICAgIDwvZG1uOmtub3dsZWRnZVJlcXVpcmVtZW50PlxuICAgIDxkbW46a25vd2xlZGdlUmVxdWlyZW1lbnQgaWQ9XCJfMkM5NTgyOUQtRkNGOS00NEY1LThGNUEtMEE2Q0RCNjA2MDBEXCI+XG4gICAgICA8ZG1uOnJlcXVpcmVkS25vd2xlZGdlIGhyZWY9XCIjX0M5OEJFOTM5LUI5QzctNDNFMC04M0U4LUVFN0ExNkM1Mjc2RFwiIC8+XG4gICAgPC9kbW46a25vd2xlZGdlUmVxdWlyZW1lbnQ+XG4gICAgPGRtbjpjb250ZXh0IGlkPVwiXzA4QTlDMzNELTcxOUYtNEIwNS1BQzQyLUQxNTQ2NDc5OEJDNFwiIGxhYmVsPVwiRnJvbnQgRW5kIFJhdGlvXCIgdHlwZVJlZj1cIkZyb250X0VuZF9SYXRpb1wiPlxuICAgICAgPGRtbjpjb250ZXh0RW50cnkgaWQ9XCJfQzhGOThEMEYtMjE4Ri00QjYwLUJEOTktN0ZEOTgwNzhGRTU2XCI+XG4gICAgICAgIDxkbW46aW52b2NhdGlvbiBpZD1cIl9FQjY1ODU4Ni1DM0M4LTQ4OEUtODExOC1FNjlFMzE1ODMxMDZcIiB0eXBlUmVmPVwiJmx0O1VuZGVmaW5lZCZndDtcIj5cbiAgICAgICAgICA8ZG1uOmxpdGVyYWxFeHByZXNzaW9uIGlkPVwiXzZFNzlFNEQ5LUJCRkItNEU5MC04QUEzLUE2QzE1M0MzQzk0NlwiPlxuICAgICAgICAgICAgPGRtbjp0ZXh0PlBJVEk8L2Rtbjp0ZXh0PlxuICAgICAgICAgIDwvZG1uOmxpdGVyYWxFeHByZXNzaW9uPlxuICAgICAgICAgIDxkbW46YmluZGluZyBpZD1cIl80QjkzRThDOC1BMDkyLTRFQUMtQjIzQS1DQzEzODIyNUFDQzNcIj5cbiAgICAgICAgICAgIDxkbW46bGl0ZXJhbEV4cHJlc3Npb24gaWQ9XCJfNTFBQ0VDM0MtNDIwNy00RjVGLThGREQtOUVEQUEzMjcwRTYwXCIgdHlwZVJlZj1cIiZsdDtVbmRlZmluZWQmZ3Q7XCI+XG4gICAgICAgICAgICAgIDxkbW46dGV4dD4oUmVxdWVzdGVkIFByb2R1Y3QuQW1vdW50KigoUmVxdWVzdGVkIFByb2R1Y3QuUmF0ZS8xMDApLzEyKSkvKDEtKDEvKDErKFJlcXVlc3RlZCBQcm9kdWN0LlJhdGUvMTAwKS8xMikqKi1SZXF1ZXN0ZWQgUHJvZHVjdC5UZXJtKSk8L2Rtbjp0ZXh0PlxuICAgICAgICAgICAgPC9kbW46bGl0ZXJhbEV4cHJlc3Npb24+XG4gICAgICAgICAgICA8ZG1uOnBhcmFtZXRlciBuYW1lPVwicG10XCIgdHlwZVJlZj1cIiZsdDtVbmRlZmluZWQmZ3Q7XCIgLz5cbiAgICAgICAgICA8L2RtbjpiaW5kaW5nPlxuICAgICAgICAgIDxkbW46YmluZGluZyBpZD1cIl9COUQwRkI0NC02MDVBLTQyREItODFGNy00REY0QzRDQzFDRERcIj5cbiAgICAgICAgICAgIDxkbW46bGl0ZXJhbEV4cHJlc3Npb24gaWQ9XCJfNUQwNTBCOEQtREY1NS00NUZELTk4OEItOUM1NkJFRDUzRDVCXCIgdHlwZVJlZj1cIiZsdDtVbmRlZmluZWQmZ3Q7XCI+XG4gICAgICAgICAgICAgIDxkbW46dGV4dD5BcHBsaWNhbnQgRGF0YS5Nb250aGx5LlRheDwvZG1uOnRleHQ+XG4gICAgICAgICAgICA8L2RtbjpsaXRlcmFsRXhwcmVzc2lvbj5cbiAgICAgICAgICAgIDxkbW46cGFyYW1ldGVyIG5hbWU9XCJ0YXhcIiB0eXBlUmVmPVwiJmx0O1VuZGVmaW5lZCZndDtcIiAvPlxuICAgICAgICAgIDwvZG1uOmJpbmRpbmc+XG4gICAgICAgICAgPGRtbjpiaW5kaW5nIGlkPVwiXzY3MzcyODg0LTA0MDctNDgxMi05ODZGLTNBMkNDNEMzQTdCMVwiPlxuICAgICAgICAgICAgPGRtbjpsaXRlcmFsRXhwcmVzc2lvbiBpZD1cIl8xNEM0NEE2OS01NkRCLTRCNjgtQjc1Ny00MjI1QzgwRTREODhcIiB0eXBlUmVmPVwiJmx0O1VuZGVmaW5lZCZndDtcIj5cbiAgICAgICAgICAgICAgPGRtbjp0ZXh0PkFwcGxpY2FudCBEYXRhLk1vbnRobHkuSW5zdXJhbmNlPC9kbW46dGV4dD5cbiAgICAgICAgICAgIDwvZG1uOmxpdGVyYWxFeHByZXNzaW9uPlxuICAgICAgICAgICAgPGRtbjpwYXJhbWV0ZXIgbmFtZT1cImluc3VyYW5jZVwiIHR5cGVSZWY9XCImbHQ7VW5kZWZpbmVkJmd0O1wiIC8+XG4gICAgICAgICAgPC9kbW46YmluZGluZz5cbiAgICAgICAgICA8ZG1uOmJpbmRpbmcgaWQ9XCJfRURFMDEwN0MtOTczNi00QkI2LTk1MDAtMTczRkZBRkYwMERCXCI+XG4gICAgICAgICAgICA8ZG1uOmxpdGVyYWxFeHByZXNzaW9uIGlkPVwiXzBEQjVERTA1LUEyQUQtNDAxMy1CMTkxLURDMUQxNjM3QTEzMlwiIHR5cGVSZWY9XCImbHQ7VW5kZWZpbmVkJmd0O1wiPlxuICAgICAgICAgICAgICA8ZG1uOnRleHQ+QXBwbGljYW50IERhdGEuTW9udGhseS5JbmNvbWU8L2Rtbjp0ZXh0PlxuICAgICAgICAgICAgPC9kbW46bGl0ZXJhbEV4cHJlc3Npb24+XG4gICAgICAgICAgICA8ZG1uOnBhcmFtZXRlciBuYW1lPVwiaW5jb21lXCIgdHlwZVJlZj1cIiZsdDtVbmRlZmluZWQmZ3Q7XCIgLz5cbiAgICAgICAgICA8L2RtbjpiaW5kaW5nPlxuICAgICAgICA8L2RtbjppbnZvY2F0aW9uPlxuICAgICAgICA8ZG1uOnZhcmlhYmxlIG5hbWU9XCJDbGllbnQgUElUSVwiIHR5cGVSZWY9XCJudW1iZXJcIiAvPlxuICAgICAgPC9kbW46Y29udGV4dEVudHJ5PlxuICAgICAgPGRtbjpjb250ZXh0RW50cnkgaWQ9XCJfM0Y5NUVGRDAtOTRENy00RDFBLTlFQTktQzhFMTI5ODJEN0U4XCI+XG4gICAgICAgIDxkbW46bGl0ZXJhbEV4cHJlc3Npb24gaWQ9XCJfM0Y5NUVGRDAtOTRENy00RDFBLTlFQTktQzhFMTI5ODJEN0U4XCIgdHlwZVJlZj1cIiZsdDtVbmRlZmluZWQmZ3Q7XCI+XG4gICAgICAgICAgPGRtbjp0ZXh0PmlmIENsaWVudCBQSVRJICZsdDs9IExlbmRlciBBY2NlcHRhYmxlIFBJVEkoKVxudGhlbiAmcXVvdDtTdWZmaWNpZW50JnF1b3Q7XG5lbHNlICZxdW90O0luc3VmZmljaWVudCZxdW90OzwvZG1uOnRleHQ+XG4gICAgICAgIDwvZG1uOmxpdGVyYWxFeHByZXNzaW9uPlxuICAgICAgPC9kbW46Y29udGV4dEVudHJ5PlxuICAgIDwvZG1uOmNvbnRleHQ+XG4gIDwvZG1uOmRlY2lzaW9uPlxuICA8ZG1uOmJ1c2luZXNzS25vd2xlZGdlTW9kZWwgaWQ9XCJfRkFGOTA4MEUtRjRFRi00OUY3LUFFRkQtMEQyOTkwRDhGRkRBXCIgbmFtZT1cIlBJVElcIj5cbiAgICA8ZG1uOmV4dGVuc2lvbkVsZW1lbnRzIC8+XG4gICAgPGRtbjp2YXJpYWJsZSBpZD1cIl85OTRGNDkwRS0xMEFDLTQ3MDQtQkZEQS0xNEEzQjk4QTk4MUVcIiBuYW1lPVwiUElUSVwiIHR5cGVSZWY9XCJudW1iZXJcIiAvPlxuICAgIDxkbW46ZW5jYXBzdWxhdGVkTG9naWMgaWQ9XCJfRDMzRDlBRUEtNDlERi00ODlGLTk4RUMtNEI0MkZGOEMyMDI3XCIgbGFiZWw9XCJQSVRJXCIga2luZD1cIkZFRUxcIiB0eXBlUmVmPVwibnVtYmVyXCI+XG4gICAgICA8ZG1uOmZvcm1hbFBhcmFtZXRlciBpZD1cIl82NjQyODBDMS1ENUUwLTQ3QkUtODJFRi0wQTY1Nzk5NzVBNjJcIiBuYW1lPVwicG10XCIgdHlwZVJlZj1cIm51bWJlclwiIC8+XG4gICAgICA8ZG1uOmZvcm1hbFBhcmFtZXRlciBpZD1cIl8zRTdERjBCMy1DNDhCLTQ4MUQtQjA5Mi1GQzgyRUMyRjZFMzdcIiBuYW1lPVwidGF4XCIgdHlwZVJlZj1cIm51bWJlclwiIC8+XG4gICAgICA8ZG1uOmZvcm1hbFBhcmFtZXRlciBpZD1cIl9ERjY5MUY4Ni1BRDEyLTQ2QkEtQjE0OS1BQzg3NTgzNkExMTZcIiBuYW1lPVwiaW5zdXJhbmNlXCIgdHlwZVJlZj1cIm51bWJlclwiIC8+XG4gICAgICA8ZG1uOmZvcm1hbFBhcmFtZXRlciBpZD1cIl85RTJFMjU3Ri05MEVCLTRGQzQtOEREOS0wODk3ODRFNzU3OUVcIiBuYW1lPVwiaW5jb21lXCIgdHlwZVJlZj1cIm51bWJlclwiIC8+XG4gICAgICA8ZG1uOmxpdGVyYWxFeHByZXNzaW9uIGlkPVwiX0EzMkVENEE1LTdCODktNDBGNy1CRTI1LUNEQjYzNkZFMDcxQ1wiIHR5cGVSZWY9XCImbHQ7VW5kZWZpbmVkJmd0O1wiPlxuICAgICAgICA8ZG1uOnRleHQ+KHBtdCArIHRheCArIGluc3VyYW5jZSkgLyBpbmNvbWU8L2Rtbjp0ZXh0PlxuICAgICAgPC9kbW46bGl0ZXJhbEV4cHJlc3Npb24+XG4gICAgPC9kbW46ZW5jYXBzdWxhdGVkTG9naWM+XG4gIDwvZG1uOmJ1c2luZXNzS25vd2xlZGdlTW9kZWw+XG4gIDxkbW46aW5wdXREYXRhIGlkPVwiXzFDRjVDRUZBLUFGOTctNDZGOS05Q0Q1LTlBOEFFQkIyMEI0RVwiIG5hbWU9XCJBcHBsaWNhbnQgRGF0YVwiPlxuICAgIDxkbW46ZXh0ZW5zaW9uRWxlbWVudHMgLz5cbiAgICA8ZG1uOnZhcmlhYmxlIGlkPVwiXzJCQkYyOEQyLURGMDktNDIwMS04RDdBLTU4MjBFMjYwNTkyQlwiIG5hbWU9XCJBcHBsaWNhbnQgRGF0YVwiIHR5cGVSZWY9XCJBcHBsaWNhbnRfRGF0YVwiIC8+XG4gIDwvZG1uOmlucHV0RGF0YT5cbiAgPGRtbjpkZWNpc2lvbiBpZD1cIl9ENkY0MjM0Ri0xNUIzLTRGNUItQjgxNC01RjZGRjI5RDI5MDdcIiBuYW1lPVwiQmFjayBFbmQgUmF0aW9cIj5cbiAgICA8ZG1uOmV4dGVuc2lvbkVsZW1lbnRzIC8+XG4gICAgPGRtbjp2YXJpYWJsZSBpZD1cIl81QUY1NzFGNy1BRDQxLTQzREMtQUJGRC0yNjY3MjU4NTA0MkZcIiBuYW1lPVwiQmFjayBFbmQgUmF0aW9cIiB0eXBlUmVmPVwiQmFja19FbmRfUmF0aW9cIiAvPlxuICAgIDxkbW46aW5mb3JtYXRpb25SZXF1aXJlbWVudCBpZD1cIl83N0JBNDA5Qi1FMDBELTRGQkMtQjUyMi04RjY1NkQ0RjZGMEVcIj5cbiAgICAgIDxkbW46cmVxdWlyZWRJbnB1dCBocmVmPVwiI18xQ0Y1Q0VGQS1BRjk3LTQ2RjktOUNENS05QThBRUJCMjBCNEVcIiAvPlxuICAgIDwvZG1uOmluZm9ybWF0aW9uUmVxdWlyZW1lbnQ+XG4gICAgPGRtbjprbm93bGVkZ2VSZXF1aXJlbWVudCBpZD1cIl80RDQ0MUMxMS03MDQyLTQ5Q0YtQTQyQy0xN0E0MzQ4QTdGMjlcIj5cbiAgICAgIDxkbW46cmVxdWlyZWRLbm93bGVkZ2UgaHJlZj1cIiNfNEM3ODhEQkQtQzY3Mi00RjQxLTlBRkUtOUM3RDJDMTQ1NzM0XCIgLz5cbiAgICA8L2Rtbjprbm93bGVkZ2VSZXF1aXJlbWVudD5cbiAgICA8ZG1uOmtub3dsZWRnZVJlcXVpcmVtZW50IGlkPVwiXzMyMTdENjU1LTQ0ODQtNDczMy1BOUFFLTRGOUNGMzBEOTkyNFwiPlxuICAgICAgPGRtbjpyZXF1aXJlZEtub3dsZWRnZSBocmVmPVwiI19EQTVDQ0Y2Mi05MEE4LTRDRkMtQTEzNy05OEI1Mjg1MjI1ODhcIiAvPlxuICAgIDwvZG1uOmtub3dsZWRnZVJlcXVpcmVtZW50PlxuICAgIDxkbW46Y29udGV4dCBpZD1cIl81RjlGRUE0RS1CM0ZDLTRCQzItOTEzRS0zNkI4MDcxRkE3NzdcIiBsYWJlbD1cIkJhY2sgRW5kIFJhdGlvXCIgdHlwZVJlZj1cIkJhY2tfRW5kX1JhdGlvXCI+XG4gICAgICA8ZG1uOmNvbnRleHRFbnRyeSBpZD1cIl9GM0VEOTA1OS00MDBGLTRCRTgtQjI1MC1DMkFCQ0Q5RkYwMjJcIj5cbiAgICAgICAgPGRtbjppbnZvY2F0aW9uIGlkPVwiXzRBN0ZDOEUwLTI1RUYtNERBRi04NDVBLTkzQkQ4OUMyQkM4Q1wiIHR5cGVSZWY9XCImbHQ7VW5kZWZpbmVkJmd0O1wiPlxuICAgICAgICAgIDxkbW46bGl0ZXJhbEV4cHJlc3Npb24gaWQ9XCJfRjBFODA5MDAtMTk2NC00MTQyLTlBMDUtNzNFN0EyRTBGMkNEXCI+XG4gICAgICAgICAgICA8ZG1uOnRleHQ+RFRJPC9kbW46dGV4dD5cbiAgICAgICAgICA8L2RtbjpsaXRlcmFsRXhwcmVzc2lvbj5cbiAgICAgICAgICA8ZG1uOmJpbmRpbmc+XG4gICAgICAgICAgICA8ZG1uOmxpdGVyYWxFeHByZXNzaW9uIGlkPVwiXzNEMEExOTc5LUU1OUEtNDgzRi1CREE4LTEzOEY5OUJBNUFCM1wiIHR5cGVSZWY9XCImbHQ7VW5kZWZpbmVkJmd0O1wiPlxuICAgICAgICAgICAgICA8ZG1uOnRleHQ+QXBwbGljYW50IERhdGEuTW9udGhseS5SZXBheW1lbnRzICsgQXBwbGljYW50IERhdGEuTW9udGhseS5FeHBlbnNlczwvZG1uOnRleHQ+XG4gICAgICAgICAgICA8L2RtbjpsaXRlcmFsRXhwcmVzc2lvbj5cbiAgICAgICAgICAgIDxkbW46cGFyYW1ldGVyIG5hbWU9XCJkXCIgdHlwZVJlZj1cIiZsdDtVbmRlZmluZWQmZ3Q7XCIgLz5cbiAgICAgICAgICA8L2RtbjpiaW5kaW5nPlxuICAgICAgICAgIDxkbW46YmluZGluZz5cbiAgICAgICAgICAgIDxkbW46bGl0ZXJhbEV4cHJlc3Npb24gaWQ9XCJfRDk4NUY4ODYtNzFDMC00RjY1LTg4MDgtMkNFRjM2NkJFQ0M4XCIgdHlwZVJlZj1cIiZsdDtVbmRlZmluZWQmZ3Q7XCI+XG4gICAgICAgICAgICAgIDxkbW46dGV4dD5BcHBsaWNhbnQgRGF0YS5Nb250aGx5LkluY29tZTwvZG1uOnRleHQ+XG4gICAgICAgICAgICA8L2RtbjpsaXRlcmFsRXhwcmVzc2lvbj5cbiAgICAgICAgICAgIDxkbW46cGFyYW1ldGVyIG5hbWU9XCJpXCIgdHlwZVJlZj1cIiZsdDtVbmRlZmluZWQmZ3Q7XCIgLz5cbiAgICAgICAgICA8L2RtbjpiaW5kaW5nPlxuICAgICAgICA8L2RtbjppbnZvY2F0aW9uPlxuICAgICAgICA8ZG1uOnZhcmlhYmxlIG5hbWU9XCJDbGllbnQgRFRJXCIgdHlwZVJlZj1cIm51bWJlclwiIC8+XG4gICAgICA8L2Rtbjpjb250ZXh0RW50cnk+XG4gICAgICA8ZG1uOmNvbnRleHRFbnRyeSBpZD1cIl9EMUY5NjEwMi00MTU4LTQ1QkItOEM5QS1CN0EzQkUyQzAyMDZcIj5cbiAgICAgICAgPGRtbjpsaXRlcmFsRXhwcmVzc2lvbiBpZD1cIl9EMUY5NjEwMi00MTU4LTQ1QkItOEM5QS1CN0EzQkUyQzAyMDZcIiB0eXBlUmVmPVwiJmx0O1VuZGVmaW5lZCZndDtcIj5cbiAgICAgICAgICA8ZG1uOnRleHQ+aWYgQ2xpZW50IERUSSAmbHQ7PSBMZW5kZXIgQWNjZXB0YWJsZSBEVEkoKVxudGhlbiAmcXVvdDtTdWZmaWNpZW50JnF1b3Q7XG5lbHNlICZxdW90O0luc3VmZmljaWVudCZxdW90OzwvZG1uOnRleHQ+XG4gICAgICAgIDwvZG1uOmxpdGVyYWxFeHByZXNzaW9uPlxuICAgICAgPC9kbW46Y29udGV4dEVudHJ5PlxuICAgIDwvZG1uOmNvbnRleHQ+XG4gIDwvZG1uOmRlY2lzaW9uPlxuICA8ZG1uOmRlY2lzaW9uIGlkPVwiXzJGRTUxREIxLTMwODMtNEJGNy1BQTcxLTBCMDA2NTMxMEU3MlwiIG5hbWU9XCJDcmVkaXQgU2NvcmUgUmF0aW5nXCI+XG4gICAgPGRtbjpleHRlbnNpb25FbGVtZW50cyAvPlxuICAgIDxkbW46dmFyaWFibGUgaWQ9XCJfODIyMjhFNDEtMjJEMS00NzU4LTk3QzMtQkJGRTkwRURCNUZCXCIgbmFtZT1cIkNyZWRpdCBTY29yZSBSYXRpbmdcIiB0eXBlUmVmPVwiQ3JlZGl0X1Njb3JlX1JhdGluZ1wiIC8+XG4gICAgPGRtbjppbmZvcm1hdGlvblJlcXVpcmVtZW50IGlkPVwiXzMxQTFCNkIyLUEyQTYtNEUwMy1CODk4LTI2NTczQTVDRjNCQVwiPlxuICAgICAgPGRtbjpyZXF1aXJlZElucHV0IGhyZWY9XCIjXzRDODlFNTlDLUZEREEtNDM4Qy04RDFGLTBCMTE5NEVGNkRBRVwiIC8+XG4gICAgPC9kbW46aW5mb3JtYXRpb25SZXF1aXJlbWVudD5cbiAgICA8ZG1uOmRlY2lzaW9uVGFibGUgaWQ9XCJfNEFDRUZGRjAtQUQyQy00REI4LTlCQUQtN0JDQ0ZCMDNGMjk1XCIgbGFiZWw9XCJDcmVkaXQgU2NvcmUgUmF0aW5nXCIgdHlwZVJlZj1cIkNyZWRpdF9TY29yZV9SYXRpbmdcIiBoaXRQb2xpY3k9XCJVTklRVUVcIj5cbiAgICAgIDxkbW46aW5wdXQgaWQ9XCJfNDRDOTM2MjctNjI5Qy00OEI4LUI3MUEtQUUyMjY2QTQyNjc0XCI+XG4gICAgICAgIDxkbW46aW5wdXRFeHByZXNzaW9uIGlkPVwiXzAwOTMyQTAwLTVFQ0UtNEFFRi1BQTY4LTkyRTY3OUNFRjRBQlwiIHR5cGVSZWY9XCJudW1iZXJcIj5cbiAgICAgICAgICA8ZG1uOnRleHQ+Q3JlZGl0IFNjb3JlLkZJQ088L2Rtbjp0ZXh0PlxuICAgICAgICA8L2RtbjppbnB1dEV4cHJlc3Npb24+XG4gICAgICA8L2RtbjppbnB1dD5cbiAgICAgIDxkbW46b3V0cHV0IGlkPVwiXzlDMjAxRkFCLUI0OUMtNEQyMi05MDBCLUI0RTgyRDU0NjlGQlwiIG5hbWU9XCJcIiB0eXBlUmVmPVwiJmx0O1VuZGVmaW5lZCZndDtcIiAvPlxuICAgICAgPGRtbjphbm5vdGF0aW9uIG5hbWU9XCJBbm5vdGF0aW9uc1wiIC8+XG4gICAgICA8ZG1uOnJ1bGUgaWQ9XCJfQUVENzAzRTEtOEU1Ni00RDI3LUE1MTEtMzg3NUFEMUQxMjJFXCI+XG4gICAgICAgIDxkbW46aW5wdXRFbnRyeSBpZD1cIl9FMkM5RjMwQi1ENTI5LTQ4RDgtQTUxQy1BMkFDQ0M4MTA5QjNcIj5cbiAgICAgICAgICA8ZG1uOnRleHQ+Jmd0Oz0gNzUwPC9kbW46dGV4dD5cbiAgICAgICAgPC9kbW46aW5wdXRFbnRyeT5cbiAgICAgICAgPGRtbjpvdXRwdXRFbnRyeSBpZD1cIl9BMUZGMkIyRC1FRjM0LTQyQUQtQTQ1QS01RkZERkEyMUZBNkRcIj5cbiAgICAgICAgICA8ZG1uOnRleHQ+JnF1b3Q7RXhjZWxsZW50JnF1b3Q7PC9kbW46dGV4dD5cbiAgICAgICAgPC9kbW46b3V0cHV0RW50cnk+XG4gICAgICAgIDxkbW46YW5ub3RhdGlvbkVudHJ5PlxuICAgICAgICAgIDxkbW46dGV4dD48L2Rtbjp0ZXh0PlxuICAgICAgICA8L2Rtbjphbm5vdGF0aW9uRW50cnk+XG4gICAgICA8L2RtbjpydWxlPlxuICAgICAgPGRtbjpydWxlIGlkPVwiXzFGQTEyQjlGLTI4OEMtNDJFOC1CNzdGLUJFMkQzNzAyQjdCNlwiPlxuICAgICAgICA8ZG1uOmlucHV0RW50cnkgaWQ9XCJfQ0E1QUUwNjctMEUxQS00NENBLUI4NUMtOTEyRjlFRDQ1OTRDXCI+XG4gICAgICAgICAgPGRtbjp0ZXh0Pls3MDAuLjc1MCk8L2Rtbjp0ZXh0PlxuICAgICAgICA8L2RtbjppbnB1dEVudHJ5PlxuICAgICAgICA8ZG1uOm91dHB1dEVudHJ5IGlkPVwiXzgzMzMwN0EyLUI5MjQtNDIyQy1BNEY1LUJGRkFCMjdEODZENVwiPlxuICAgICAgICAgIDxkbW46dGV4dD4mcXVvdDtHb29kJnF1b3Q7PC9kbW46dGV4dD5cbiAgICAgICAgPC9kbW46b3V0cHV0RW50cnk+XG4gICAgICAgIDxkbW46YW5ub3RhdGlvbkVudHJ5PlxuICAgICAgICAgIDxkbW46dGV4dD48L2Rtbjp0ZXh0PlxuICAgICAgICA8L2Rtbjphbm5vdGF0aW9uRW50cnk+XG4gICAgICA8L2RtbjpydWxlPlxuICAgICAgPGRtbjpydWxlIGlkPVwiXzExOTc2RUJBLTYwQkMtNDIxQi1BMjcwLTA4OUE0NUU5QjE2N1wiPlxuICAgICAgICA8ZG1uOmlucHV0RW50cnkgaWQ9XCJfNzVENjEyRDUtRDIwMS00OTMyLTg1MjQtRTQ5MTgzRjUxRDJEXCI+XG4gICAgICAgICAgPGRtbjp0ZXh0Pls2NTAuLjcwMCk8L2Rtbjp0ZXh0PlxuICAgICAgICA8L2RtbjppbnB1dEVudHJ5PlxuICAgICAgICA8ZG1uOm91dHB1dEVudHJ5IGlkPVwiX0UxOEZFMkIyLTcyOUMtNDFGMC1CNUNDLTBFNUU1RUE0MzFFM1wiPlxuICAgICAgICAgIDxkbW46dGV4dD4mcXVvdDtGYWlyJnF1b3Q7PC9kbW46dGV4dD5cbiAgICAgICAgPC9kbW46b3V0cHV0RW50cnk+XG4gICAgICAgIDxkbW46YW5ub3RhdGlvbkVudHJ5PlxuICAgICAgICAgIDxkbW46dGV4dD48L2Rtbjp0ZXh0PlxuICAgICAgICA8L2Rtbjphbm5vdGF0aW9uRW50cnk+XG4gICAgICA8L2RtbjpydWxlPlxuICAgICAgPGRtbjpydWxlIGlkPVwiXzEyRjgwNzdGLUU2MDEtNDg4Mi05M0UxLTMxNTA4QjE0MDJFMVwiPlxuICAgICAgICA8ZG1uOmlucHV0RW50cnkgaWQ9XCJfNjEzNzRFN0QtNEVGMy00NjAzLTk3QTEtOUQxRkFCQUFBM0M4XCI+XG4gICAgICAgICAgPGRtbjp0ZXh0Pls2MDAuLjY1MCk8L2Rtbjp0ZXh0PlxuICAgICAgICA8L2RtbjppbnB1dEVudHJ5PlxuICAgICAgICA8ZG1uOm91dHB1dEVudHJ5IGlkPVwiXzc1MTM1RjRDLTZCQTctNDE4MC1CNzI2LUEwRDc5NUIzRDdGRlwiPlxuICAgICAgICAgIDxkbW46dGV4dD4mcXVvdDtQb29yJnF1b3Q7PC9kbW46dGV4dD5cbiAgICAgICAgPC9kbW46b3V0cHV0RW50cnk+XG4gICAgICAgIDxkbW46YW5ub3RhdGlvbkVudHJ5PlxuICAgICAgICAgIDxkbW46dGV4dD48L2Rtbjp0ZXh0PlxuICAgICAgICA8L2Rtbjphbm5vdGF0aW9uRW50cnk+XG4gICAgICA8L2RtbjpydWxlPlxuICAgICAgPGRtbjpydWxlIGlkPVwiX0QwMjUyNTRDLTkzNzYtNDQyNS04MDg0LTQ1MUUwOTI0M0NFMlwiPlxuICAgICAgICA8ZG1uOmlucHV0RW50cnkgaWQ9XCJfNkMxM0I1MDctRkI2MC00MEFELThGNUMtMjQwN0YxNDEzQTVDXCI+XG4gICAgICAgICAgPGRtbjp0ZXh0PiZsdDsgNjAwPC9kbW46dGV4dD5cbiAgICAgICAgPC9kbW46aW5wdXRFbnRyeT5cbiAgICAgICAgPGRtbjpvdXRwdXRFbnRyeSBpZD1cIl8xRkI3MzA4QS1FMzdCLTQ2RUEtODA3MC1DNjdFMjM4OEE4NjlcIj5cbiAgICAgICAgICA8ZG1uOnRleHQ+JnF1b3Q7QmFkJnF1b3Q7PC9kbW46dGV4dD5cbiAgICAgICAgPC9kbW46b3V0cHV0RW50cnk+XG4gICAgICAgIDxkbW46YW5ub3RhdGlvbkVudHJ5PlxuICAgICAgICAgIDxkbW46dGV4dD48L2Rtbjp0ZXh0PlxuICAgICAgICA8L2Rtbjphbm5vdGF0aW9uRW50cnk+XG4gICAgICA8L2RtbjpydWxlPlxuICAgIDwvZG1uOmRlY2lzaW9uVGFibGU+XG4gIDwvZG1uOmRlY2lzaW9uPlxuICA8ZG1uOmRlY2lzaW9uIGlkPVwiXzIxQzUwNzYzLUU0OUYtNEQ4My1BODI0LTE2REE2QUE4N0M2NFwiIG5hbWU9XCJMb2FuIFByZS1RdWFsaWZpY2F0aW9uXCI+XG4gICAgPGRtbjpleHRlbnNpb25FbGVtZW50cyAvPlxuICAgIDxkbW46dmFyaWFibGUgaWQ9XCJfMDQ3QTI1RjUtREVGMi00NEJELTk1QjctRkI0OUE0MzNGODc4XCIgbmFtZT1cIkxvYW4gUHJlLVF1YWxpZmljYXRpb25cIiB0eXBlUmVmPVwiTG9hbl9RdWFsaWZpY2F0aW9uXCIgLz5cbiAgICA8ZG1uOmluZm9ybWF0aW9uUmVxdWlyZW1lbnQgaWQ9XCJfQTNFOTVCMzItMkVGRC00MEFELUI1RTQtMEE3M0ExNTQyMDExXCI+XG4gICAgICA8ZG1uOnJlcXVpcmVkRGVjaXNpb24gaHJlZj1cIiNfRDZGNDIzNEYtMTVCMy00RjVCLUI4MTQtNUY2RkYyOUQyOTA3XCIgLz5cbiAgICA8L2RtbjppbmZvcm1hdGlvblJlcXVpcmVtZW50PlxuICAgIDxkbW46aW5mb3JtYXRpb25SZXF1aXJlbWVudCBpZD1cIl8wQjk5MkYwMS1CQTc3LTRGMDYtQTgzMC1EODk0OEI0NjcyNzJcIj5cbiAgICAgIDxkbW46cmVxdWlyZWREZWNpc2lvbiBocmVmPVwiI19GMERDODkyMy01RkM3LTQyMDAtOEJEMS00NjFENUYzNzE0QkVcIiAvPlxuICAgIDwvZG1uOmluZm9ybWF0aW9uUmVxdWlyZW1lbnQ+XG4gICAgPGRtbjppbmZvcm1hdGlvblJlcXVpcmVtZW50IGlkPVwiX0I2MDAyRjMzLTQ4ODgtNDhDNS1CMjY1LTYzNjAzMEY4QzJEQ1wiPlxuICAgICAgPGRtbjpyZXF1aXJlZERlY2lzaW9uIGhyZWY9XCIjXzJGRTUxREIxLTMwODMtNEJGNy1BQTcxLTBCMDA2NTMxMEU3MlwiIC8+XG4gICAgPC9kbW46aW5mb3JtYXRpb25SZXF1aXJlbWVudD5cbiAgICA8ZG1uOmRlY2lzaW9uVGFibGUgaWQ9XCJfRUY3RjQwNEEtOTM5RS00ODg5LTk1RDgtRTQwNTNERDFFRUQ5XCIgbGFiZWw9XCJMb2FuIFByZS1RdWFsaWZpY2F0aW9uXCIgdHlwZVJlZj1cIkxvYW5fUXVhbGlmaWNhdGlvblwiIGhpdFBvbGljeT1cIkZJUlNUXCI+XG4gICAgICA8ZG1uOmlucHV0IGlkPVwiXzU4QUJEODFCLUZEMTYtNDVDMy05RTY0LURCMjcxQUE5MTdDMFwiPlxuICAgICAgICA8ZG1uOmlucHV0RXhwcmVzc2lvbiBpZD1cIl81MjYyNDQxRS1GODEyLTQ1NTQtQUYwMi01MjY3QkRERjgwRjVcIiB0eXBlUmVmPVwiQ3JlZGl0X1Njb3JlX1JhdGluZ1wiPlxuICAgICAgICAgIDxkbW46dGV4dD5DcmVkaXQgU2NvcmUgUmF0aW5nPC9kbW46dGV4dD5cbiAgICAgICAgPC9kbW46aW5wdXRFeHByZXNzaW9uPlxuICAgICAgPC9kbW46aW5wdXQ+XG4gICAgICA8ZG1uOmlucHV0IGlkPVwiXzM2MjU4REEwLUU1MjctNDI5Qy04RkExLTdERUE2MzY0NzY4OVwiPlxuICAgICAgICA8ZG1uOmlucHV0RXhwcmVzc2lvbiBpZD1cIl80RTlGMEUwNi04NUYxLTREMTAtQjMwRC1GQjU1NzQxQjkwQkNcIiB0eXBlUmVmPVwiQmFja19FbmRfUmF0aW9cIj5cbiAgICAgICAgICA8ZG1uOnRleHQ+QmFjayBFbmQgUmF0aW88L2Rtbjp0ZXh0PlxuICAgICAgICA8L2RtbjppbnB1dEV4cHJlc3Npb24+XG4gICAgICA8L2RtbjppbnB1dD5cbiAgICAgIDxkbW46aW5wdXQgaWQ9XCJfQTEwMkNEOEEtQzM4RC00OEU0LUJDNTktQ0E2NjBENkZCRjBBXCI+XG4gICAgICAgIDxkbW46aW5wdXRFeHByZXNzaW9uIGlkPVwiXzVENzlFRUY1LTcxQjItNDM2MC1CNTlBLTIxNUFBNTU5M0RDQlwiIHR5cGVSZWY9XCJGcm9udF9FbmRfUmF0aW9cIj5cbiAgICAgICAgICA8ZG1uOnRleHQ+RnJvbnQgRW5kIFJhdGlvPC9kbW46dGV4dD5cbiAgICAgICAgPC9kbW46aW5wdXRFeHByZXNzaW9uPlxuICAgICAgPC9kbW46aW5wdXQ+XG4gICAgICA8ZG1uOm91dHB1dCBpZD1cIl9CODk1QjA5NS1DM0Q2LTQ4QjQtOEE1MC1EMkQzQjhDQzZBNDVcIiBuYW1lPVwiUXVhbGlmaWNhdGlvblwiIHR5cGVSZWY9XCJzdHJpbmdcIiAvPlxuICAgICAgPGRtbjpvdXRwdXQgaWQ9XCJfQThEMkQzQjEtMDdCMy00NjE5LThERTAtRjkyM0Y1MTEwNThCXCIgbmFtZT1cIlJlYXNvblwiIHR5cGVSZWY9XCJzdHJpbmdcIiAvPlxuICAgICAgPGRtbjphbm5vdGF0aW9uIG5hbWU9XCJBbm5vdGF0aW9uc1wiIC8+XG4gICAgICA8ZG1uOnJ1bGUgaWQ9XCJfQjQ5RTE2NDItRjM1Mi00RDJFLTkyQjYtRTVERkE1OUFBRkFDXCI+XG4gICAgICAgIDxkbW46aW5wdXRFbnRyeSBpZD1cIl82QzgzQzQ0Ni0xQTlBLTRGRkMtQjMwQy0yMzkxNUZGOUNDNDNcIj5cbiAgICAgICAgICA8ZG1uOnRleHQ+JnF1b3Q7UG9vciZxdW90OywgJnF1b3Q7QmFkJnF1b3Q7PC9kbW46dGV4dD5cbiAgICAgICAgPC9kbW46aW5wdXRFbnRyeT5cbiAgICAgICAgPGRtbjppbnB1dEVudHJ5IGlkPVwiXzBCQzkzQ0I5LUZEMjAtNDVDOC1BNDk4LTM5RTQ0NjRCNjIyNFwiPlxuICAgICAgICAgIDxkbW46dGV4dD4tPC9kbW46dGV4dD5cbiAgICAgICAgPC9kbW46aW5wdXRFbnRyeT5cbiAgICAgICAgPGRtbjppbnB1dEVudHJ5IGlkPVwiXzE1NTRBOTgzLUIyQzEtNDBBNy05NjE0LTUwNzIwNDIwRjRCMlwiPlxuICAgICAgICAgIDxkbW46dGV4dD4tPC9kbW46dGV4dD5cbiAgICAgICAgPC9kbW46aW5wdXRFbnRyeT5cbiAgICAgICAgPGRtbjpvdXRwdXRFbnRyeSBpZD1cIl83QjM5Qjk2NC00RTI1LTQ3MTctOTJGRS1BMzZGMkIzOUZBQjlcIj5cbiAgICAgICAgICA8ZG1uOnRleHQ+JnF1b3Q7Tm90IFF1YWxpZmllZCZxdW90OzwvZG1uOnRleHQ+XG4gICAgICAgIDwvZG1uOm91dHB1dEVudHJ5PlxuICAgICAgICA8ZG1uOm91dHB1dEVudHJ5IGlkPVwiX0E4NTJGNUI2LUM1REYtNEFERC04QjkzLTk3MDFGMDcyNDkxMlwiPlxuICAgICAgICAgIDxkbW46dGV4dD4mcXVvdDtDcmVkaXQgU2NvcmUgdG9vIGxvdy4mcXVvdDs8L2Rtbjp0ZXh0PlxuICAgICAgICA8L2RtbjpvdXRwdXRFbnRyeT5cbiAgICAgICAgPGRtbjphbm5vdGF0aW9uRW50cnk+XG4gICAgICAgICAgPGRtbjp0ZXh0PjwvZG1uOnRleHQ+XG4gICAgICAgIDwvZG1uOmFubm90YXRpb25FbnRyeT5cbiAgICAgIDwvZG1uOnJ1bGU+XG4gICAgICA8ZG1uOnJ1bGUgaWQ9XCJfMjE0ODY1RjQtQzk2OC00MzhDLUEzODUtNkIyODIzQUYxQkMzXCI+XG4gICAgICAgIDxkbW46aW5wdXRFbnRyeSBpZD1cIl8xODYxN0EyQS02REQzLTQxQTktODdENi02OEM5MTU1NDYyMEVcIj5cbiAgICAgICAgICA8ZG1uOnRleHQ+LTwvZG1uOnRleHQ+XG4gICAgICAgIDwvZG1uOmlucHV0RW50cnk+XG4gICAgICAgIDxkbW46aW5wdXRFbnRyeSBpZD1cIl81QzcwQkI4MS1DQUZELTQ2OTUtQTI0MS02OEY0NDFGRjlBMjlcIj5cbiAgICAgICAgICA8ZG1uOnRleHQ+JnF1b3Q7SW5zdWZmaWNpZW50JnF1b3Q7PC9kbW46dGV4dD5cbiAgICAgICAgPC9kbW46aW5wdXRFbnRyeT5cbiAgICAgICAgPGRtbjppbnB1dEVudHJ5IGlkPVwiXzc4QTNDM0EwLUVFQkMtNDQ4Qi1CMUMxLTVDRkY2QzdGMkFDNVwiPlxuICAgICAgICAgIDxkbW46dGV4dD4mcXVvdDtTdWZmaWNpZW50JnF1b3Q7PC9kbW46dGV4dD5cbiAgICAgICAgPC9kbW46aW5wdXRFbnRyeT5cbiAgICAgICAgPGRtbjpvdXRwdXRFbnRyeSBpZD1cIl8zQzM4RDE4MS1DQ0ExLTQ2NzgtQTNERC0wQTVDRTZENTlGRENcIj5cbiAgICAgICAgICA8ZG1uOnRleHQ+JnF1b3Q7Tm90IFF1YWxpZmllZCZxdW90OzwvZG1uOnRleHQ+XG4gICAgICAgIDwvZG1uOm91dHB1dEVudHJ5PlxuICAgICAgICA8ZG1uOm91dHB1dEVudHJ5IGlkPVwiX0Y0Mjg0QjlGLUM3N0EtNDI5Qi1BNjg5LUUyMTJDRkIxOUNCN1wiPlxuICAgICAgICAgIDxkbW46dGV4dD4mcXVvdDtEZWJ0IHRvIGluY29tZSByYXRpbyBpcyB0b28gaGlnaC4mcXVvdDs8L2Rtbjp0ZXh0PlxuICAgICAgICA8L2RtbjpvdXRwdXRFbnRyeT5cbiAgICAgICAgPGRtbjphbm5vdGF0aW9uRW50cnk+XG4gICAgICAgICAgPGRtbjp0ZXh0PjwvZG1uOnRleHQ+XG4gICAgICAgIDwvZG1uOmFubm90YXRpb25FbnRyeT5cbiAgICAgIDwvZG1uOnJ1bGU+XG4gICAgICA8ZG1uOnJ1bGUgaWQ9XCJfNzNFOTY3NzMtMDY0RS00OUY2LTkyQjItQUE3NkU2QkY2QjhBXCI+XG4gICAgICAgIDxkbW46aW5wdXRFbnRyeSBpZD1cIl8yNEE4MjVGMC1COEM3LTQyQzktQkJBMi00NDQyQ0FFNkY5MUFcIj5cbiAgICAgICAgICA8ZG1uOnRleHQ+LTwvZG1uOnRleHQ+XG4gICAgICAgIDwvZG1uOmlucHV0RW50cnk+XG4gICAgICAgIDxkbW46aW5wdXRFbnRyeSBpZD1cIl9CN0Y1OUE1Qy00QUYxLTRFOTAtQkIwRC04M0M2M0E4MzkwRTZcIj5cbiAgICAgICAgICA8ZG1uOnRleHQ+JnF1b3Q7U3VmZmljaWVudCZxdW90OzwvZG1uOnRleHQ+XG4gICAgICAgIDwvZG1uOmlucHV0RW50cnk+XG4gICAgICAgIDxkbW46aW5wdXRFbnRyeSBpZD1cIl8wOUEyM0ZENC05QTk4LTRDMzQtOUU5Qi05RThFRTY1MkFCQkNcIj5cbiAgICAgICAgICA8ZG1uOnRleHQ+JnF1b3Q7SW5zdWZmaWNpZW50JnF1b3Q7PC9kbW46dGV4dD5cbiAgICAgICAgPC9kbW46aW5wdXRFbnRyeT5cbiAgICAgICAgPGRtbjpvdXRwdXRFbnRyeSBpZD1cIl85QkYxMDk2QS0xQUYzLTREMjEtOTI3My00NjBERTU1NUYwQjZcIj5cbiAgICAgICAgICA8ZG1uOnRleHQ+JnF1b3Q7Tm90IFF1YWxpZmllZCZxdW90OzwvZG1uOnRleHQ+XG4gICAgICAgIDwvZG1uOm91dHB1dEVudHJ5PlxuICAgICAgICA8ZG1uOm91dHB1dEVudHJ5IGlkPVwiXzREODA1QkIyLUI3OUUtNDJDMi1BNTYyLTY3NEVDQkRGQTAxQ1wiPlxuICAgICAgICAgIDxkbW46dGV4dD4mcXVvdDtNb3J0Z2FnZSBwYXltZW50IHRvIGluY29tZSByYXRpbyBpcyB0b28gaGlnaC4mcXVvdDs8L2Rtbjp0ZXh0PlxuICAgICAgICA8L2RtbjpvdXRwdXRFbnRyeT5cbiAgICAgICAgPGRtbjphbm5vdGF0aW9uRW50cnk+XG4gICAgICAgICAgPGRtbjp0ZXh0PjwvZG1uOnRleHQ+XG4gICAgICAgIDwvZG1uOmFubm90YXRpb25FbnRyeT5cbiAgICAgIDwvZG1uOnJ1bGU+XG4gICAgICA8ZG1uOnJ1bGUgaWQ9XCJfN0MyNDJDNTgtNkNBQi00M0NGLTkyMzUtMzQ3QTcyQUUzRjlFXCI+XG4gICAgICAgIDxkbW46aW5wdXRFbnRyeSBpZD1cIl85REYyQTAyNi04Qjg3LTRDNzUtQkIzRC01NEZGMEUyQTJFMzZcIj5cbiAgICAgICAgICA8ZG1uOnRleHQ+LTwvZG1uOnRleHQ+XG4gICAgICAgIDwvZG1uOmlucHV0RW50cnk+XG4gICAgICAgIDxkbW46aW5wdXRFbnRyeSBpZD1cIl9GRjNFOTc4Mi1CRTlDLTRCMEMtQTYzQi1FOTA2RjYxMTYyNTFcIj5cbiAgICAgICAgICA8ZG1uOnRleHQ+JnF1b3Q7SW5zdWZmaWNpZW50JnF1b3Q7PC9kbW46dGV4dD5cbiAgICAgICAgPC9kbW46aW5wdXRFbnRyeT5cbiAgICAgICAgPGRtbjppbnB1dEVudHJ5IGlkPVwiXzU0NDY4N0NELUYzQTItNDZDNy04NDM5LUU1RTJFN0I2NDgzRFwiPlxuICAgICAgICAgIDxkbW46dGV4dD4mcXVvdDtJbnN1ZmZpY2llbnQmcXVvdDs8L2Rtbjp0ZXh0PlxuICAgICAgICA8L2RtbjppbnB1dEVudHJ5PlxuICAgICAgICA8ZG1uOm91dHB1dEVudHJ5IGlkPVwiXzVBOTU4RDJFLUIzMTAtNEFCOS1CRjVCLTQ5NjIzQkU1REI1NVwiPlxuICAgICAgICAgIDxkbW46dGV4dD4mcXVvdDtOb3QgUXVhbGlmaWVkJnF1b3Q7PC9kbW46dGV4dD5cbiAgICAgICAgPC9kbW46b3V0cHV0RW50cnk+XG4gICAgICAgIDxkbW46b3V0cHV0RW50cnkgaWQ9XCJfRjBCRDdEQzItQTFCNi00Q0Y0LTk1RDAtOTA2REJCNTQwRUZDXCI+XG4gICAgICAgICAgPGRtbjp0ZXh0PiZxdW90O0RlYnQgdG8gaW5jb21lIHJhdGlvIGlzIHRvbyBoaWdoIEFORCBtb3J0Z2FnZSBwYXltZW50IHRvIGluY29tZSByYXRpbyBpcyB0b28gaGlnaC4mcXVvdDs8L2Rtbjp0ZXh0PlxuICAgICAgICA8L2RtbjpvdXRwdXRFbnRyeT5cbiAgICAgICAgPGRtbjphbm5vdGF0aW9uRW50cnk+XG4gICAgICAgICAgPGRtbjp0ZXh0PjwvZG1uOnRleHQ+XG4gICAgICAgIDwvZG1uOmFubm90YXRpb25FbnRyeT5cbiAgICAgIDwvZG1uOnJ1bGU+XG4gICAgICA8ZG1uOnJ1bGUgaWQ9XCJfQzhGQTMzQjEtQUY2RS00QTU5LUI3QjktNkZERjFGNDk1QzQ0XCI+XG4gICAgICAgIDxkbW46aW5wdXRFbnRyeSBpZD1cIl84MkZCQ0VFMi1DMTZDLTRGRkYtQTdGMy01NTEyQzIxMUUyOUJcIj5cbiAgICAgICAgICA8ZG1uOnRleHQ+JnF1b3Q7RmFpciZxdW90OywgJnF1b3Q7R29vZCZxdW90OywgJnF1b3Q7RXhjZWxsZW50JnF1b3Q7PC9kbW46dGV4dD5cbiAgICAgICAgPC9kbW46aW5wdXRFbnRyeT5cbiAgICAgICAgPGRtbjppbnB1dEVudHJ5IGlkPVwiX0JGN0NEQUUxLTY2RTMtNEIwNi04NzI5LTg5NjQ1M0FENzg2N1wiPlxuICAgICAgICAgIDxkbW46dGV4dD4mcXVvdDtTdWZmaWNpZW50JnF1b3Q7PC9kbW46dGV4dD5cbiAgICAgICAgPC9kbW46aW5wdXRFbnRyeT5cbiAgICAgICAgPGRtbjppbnB1dEVudHJ5IGlkPVwiXzQxQ0I2MTIzLTgxMjItNEZBNC1BNUMxLTU0OEI5MkNBMzFBRVwiPlxuICAgICAgICAgIDxkbW46dGV4dD4mcXVvdDtTdWZmaWNpZW50JnF1b3Q7PC9kbW46dGV4dD5cbiAgICAgICAgPC9kbW46aW5wdXRFbnRyeT5cbiAgICAgICAgPGRtbjpvdXRwdXRFbnRyeSBpZD1cIl85RTA0OTdEMC1GMkYyLTQxOUUtQTU1OC0zNjY0NTJCMzc5QTFcIj5cbiAgICAgICAgICA8ZG1uOnRleHQ+JnF1b3Q7UXVhbGlmaWVkJnF1b3Q7PC9kbW46dGV4dD5cbiAgICAgICAgPC9kbW46b3V0cHV0RW50cnk+XG4gICAgICAgIDxkbW46b3V0cHV0RW50cnkgaWQ9XCJfMTEzQ0E1NjYtNjA0NC00ODU4LUI4RDktNUFDQkE0QTkxQ0Y0XCI+XG4gICAgICAgICAgPGRtbjp0ZXh0PiZxdW90O1RoZSBib3Jyb3dlciBoYXMgYmVlbiBzdWNjZXNzZnVsbHkgcHJlcXVhbGlmaWVkIGZvciB0aGUgcmVxdWVzdGVkIGxvYW4uJnF1b3Q7PC9kbW46dGV4dD5cbiAgICAgICAgPC9kbW46b3V0cHV0RW50cnk+XG4gICAgICAgIDxkbW46YW5ub3RhdGlvbkVudHJ5PlxuICAgICAgICAgIDxkbW46dGV4dD48L2Rtbjp0ZXh0PlxuICAgICAgICA8L2Rtbjphbm5vdGF0aW9uRW50cnk+XG4gICAgICA8L2RtbjpydWxlPlxuICAgIDwvZG1uOmRlY2lzaW9uVGFibGU+XG4gIDwvZG1uOmRlY2lzaW9uPlxuICA8ZG1uOmlucHV0RGF0YSBpZD1cIl82RTMyMDVBRi03RTNELTRBQkUtQTM2Ny05NkYzRjZFODIxMEVcIiBuYW1lPVwiUmVxdWVzdGVkIFByb2R1Y3RcIj5cbiAgICA8ZG1uOmV4dGVuc2lvbkVsZW1lbnRzIC8+XG4gICAgPGRtbjp2YXJpYWJsZSBpZD1cIl9FRTA1RTFDNy02N0VELTRBNzEtQkRFRS04MDA1MjU5MzUxRThcIiBuYW1lPVwiUmVxdWVzdGVkIFByb2R1Y3RcIiB0eXBlUmVmPVwiUmVxdWVzdGVkX1Byb2R1Y3RcIiAvPlxuICA8L2RtbjppbnB1dERhdGE+XG4gIDxkbW46YnVzaW5lc3NLbm93bGVkZ2VNb2RlbCBpZD1cIl9EQTVDQ0Y2Mi05MEE4LTRDRkMtQTEzNy05OEI1Mjg1MjI1ODhcIiBuYW1lPVwiRFRJXCI+XG4gICAgPGRtbjpleHRlbnNpb25FbGVtZW50cyAvPlxuICAgIDxkbW46dmFyaWFibGUgaWQ9XCJfMkY4OTIxRDEtNjM4NC00RUNCLTg0OEUtQ0U4NEEyMEIyNTczXCIgbmFtZT1cIkRUSVwiIHR5cGVSZWY9XCJudW1iZXJcIiAvPlxuICAgIDxkbW46ZW5jYXBzdWxhdGVkTG9naWMgaWQ9XCJfNDc4QzgxNUUtNjBDOS00NjM3LUFBNDItMTk1REYxNkI2M0E1XCIgbGFiZWw9XCJEVElcIiBraW5kPVwiRkVFTFwiIHR5cGVSZWY9XCJudW1iZXJcIj5cbiAgICAgIDxkbW46Zm9ybWFsUGFyYW1ldGVyIGlkPVwiX0I3QTlDMjIyLUM1NjAtNEQzNy1BODIxLTBDQUM4ODYxMUYxMFwiIG5hbWU9XCJkXCIgdHlwZVJlZj1cIm51bWJlclwiIC8+XG4gICAgICA8ZG1uOmZvcm1hbFBhcmFtZXRlciBpZD1cIl80M0MwNDcyMS0zOEY2LTRBQkYtOUYyRi1CRDI5NTZDMDU0NDFcIiBuYW1lPVwiaVwiIHR5cGVSZWY9XCJudW1iZXJcIiAvPlxuICAgICAgPGRtbjpsaXRlcmFsRXhwcmVzc2lvbiBpZD1cIl8wNjRGQTg4RS1CMDZGLTQ5NDQtODVDMy1EQTg2QzNGNjYwRERcIiB0eXBlUmVmPVwiJmx0O1VuZGVmaW5lZCZndDtcIj5cbiAgICAgICAgPGRtbjp0ZXh0PmQgLyBpPC9kbW46dGV4dD5cbiAgICAgIDwvZG1uOmxpdGVyYWxFeHByZXNzaW9uPlxuICAgIDwvZG1uOmVuY2Fwc3VsYXRlZExvZ2ljPlxuICA8L2RtbjpidXNpbmVzc0tub3dsZWRnZU1vZGVsPlxuICA8ZG1uOmJ1c2luZXNzS25vd2xlZGdlTW9kZWwgaWQ9XCJfQzk4QkU5MzktQjlDNy00M0UwLTgzRTgtRUU3QTE2QzUyNzZEXCIgbmFtZT1cIkxlbmRlciBBY2NlcHRhYmxlIFBJVElcIj5cbiAgICA8ZG1uOmV4dGVuc2lvbkVsZW1lbnRzIC8+XG4gICAgPGRtbjp2YXJpYWJsZSBpZD1cIl85RDc4MjE0Qi1FQzA3LTQzNjAtOEQxQi0zRDkyN0FDOTBBMjBcIiBuYW1lPVwiTGVuZGVyIEFjY2VwdGFibGUgUElUSVwiIHR5cGVSZWY9XCJudW1iZXJcIiAvPlxuICAgIDxkbW46ZW5jYXBzdWxhdGVkTG9naWMgaWQ9XCJfRTMxMkQ4MEUtMEVDRS00RDY2LTg3RUItMzBERTIwODkwQkJDXCIga2luZD1cIkZFRUxcIj5cbiAgICAgIDxkbW46bGl0ZXJhbEV4cHJlc3Npb24gaWQ9XCJfRUVERjJDMTUtN0ZENy00MDlGLUIyM0ItRjlBMTk4RTIxMzVEXCI+XG4gICAgICAgIDxkbW46dGV4dD4wLjI4PC9kbW46dGV4dD5cbiAgICAgIDwvZG1uOmxpdGVyYWxFeHByZXNzaW9uPlxuICAgIDwvZG1uOmVuY2Fwc3VsYXRlZExvZ2ljPlxuICA8L2RtbjpidXNpbmVzc0tub3dsZWRnZU1vZGVsPlxuICA8ZG1uZGk6RE1OREk+XG4gICAgPGRtbmRpOkRNTkRpYWdyYW0gaWQ9XCJfMTYwODU4NUYtMDFDOC00QTY2LUIzRTUtRjQ0MjJENEREMkNBXCIgbmFtZT1cIkRlZmF1bHQgRFJEXCIgdXNlQWx0ZXJuYXRpdmVJbnB1dERhdGFTaGFwZT1cImZhbHNlXCI+XG4gICAgICA8ZGk6ZXh0ZW5zaW9uPlxuICAgICAgICA8a2llOkNvbXBvbmVudHNXaWR0aHNFeHRlbnNpb24+XG4gICAgICAgICAgPGtpZTpDb21wb25lbnRXaWR0aHMgZG1uRWxlbWVudFJlZj1cIl8yMUU4RkEzOC1DOTQ3LTQ3MzMtOUU1Mi1DRjgxQTk3QURGOTFcIj5cbiAgICAgICAgICAgIDxraWU6d2lkdGg+MjA5PC9raWU6d2lkdGg+XG4gICAgICAgICAgPC9raWU6Q29tcG9uZW50V2lkdGhzPlxuICAgICAgICAgIDxraWU6Q29tcG9uZW50V2lkdGhzIGRtbkVsZW1lbnRSZWY9XCJfOUYwMjU3RUUtQ0Y4Mi00OUZELUFFREQtMzE1NTg5MDg2NEZGXCI+XG4gICAgICAgICAgICA8a2llOndpZHRoPjUwPC9raWU6d2lkdGg+XG4gICAgICAgICAgICA8a2llOndpZHRoPjIwOTwva2llOndpZHRoPlxuICAgICAgICAgIDwva2llOkNvbXBvbmVudFdpZHRocz5cbiAgICAgICAgICA8a2llOkNvbXBvbmVudFdpZHRocyBkbW5FbGVtZW50UmVmPVwiXzA4QTlDMzNELTcxOUYtNEIwNS1BQzQyLUQxNTQ2NDc5OEJDNFwiPlxuICAgICAgICAgICAgPGtpZTp3aWR0aD41MDwva2llOndpZHRoPlxuICAgICAgICAgIDwva2llOkNvbXBvbmVudFdpZHRocz5cbiAgICAgICAgICA8a2llOkNvbXBvbmVudFdpZHRocyBkbW5FbGVtZW50UmVmPVwiX0VCNjU4NTg2LUMzQzgtNDg4RS04MTE4LUU2OUUzMTU4MzEwNlwiPlxuICAgICAgICAgICAgPGtpZTp3aWR0aD4xMjA8L2tpZTp3aWR0aD5cbiAgICAgICAgICA8L2tpZTpDb21wb25lbnRXaWR0aHM+XG4gICAgICAgICAgPGtpZTpDb21wb25lbnRXaWR0aHMgZG1uRWxlbWVudFJlZj1cIl82RTc5RTREOS1CQkZCLTRFOTAtOEFBMy1BNkMxNTNDM0M5NDZcIiAvPlxuICAgICAgICAgIDxraWU6Q29tcG9uZW50V2lkdGhzIGRtbkVsZW1lbnRSZWY9XCJfNTFBQ0VDM0MtNDIwNy00RjVGLThGREQtOUVEQUEzMjcwRTYwXCI+XG4gICAgICAgICAgICA8a2llOndpZHRoPjEwMzY8L2tpZTp3aWR0aD5cbiAgICAgICAgICA8L2tpZTpDb21wb25lbnRXaWR0aHM+XG4gICAgICAgICAgPGtpZTpDb21wb25lbnRXaWR0aHMgZG1uRWxlbWVudFJlZj1cIl81RDA1MEI4RC1ERjU1LTQ1RkQtOTg4Qi05QzU2QkVENTNENUJcIj5cbiAgICAgICAgICAgIDxraWU6d2lkdGg+MTAzNjwva2llOndpZHRoPlxuICAgICAgICAgIDwva2llOkNvbXBvbmVudFdpZHRocz5cbiAgICAgICAgICA8a2llOkNvbXBvbmVudFdpZHRocyBkbW5FbGVtZW50UmVmPVwiXzE0QzQ0QTY5LTU2REItNEI2OC1CNzU3LTQyMjVDODBFNEQ4OFwiPlxuICAgICAgICAgICAgPGtpZTp3aWR0aD4xMDM2PC9raWU6d2lkdGg+XG4gICAgICAgICAgPC9raWU6Q29tcG9uZW50V2lkdGhzPlxuICAgICAgICAgIDxraWU6Q29tcG9uZW50V2lkdGhzIGRtbkVsZW1lbnRSZWY9XCJfMERCNURFMDUtQTJBRC00MDEzLUIxOTEtREMxRDE2MzdBMTMyXCI+XG4gICAgICAgICAgICA8a2llOndpZHRoPjEwMzY8L2tpZTp3aWR0aD5cbiAgICAgICAgICA8L2tpZTpDb21wb25lbnRXaWR0aHM+XG4gICAgICAgICAgPGtpZTpDb21wb25lbnRXaWR0aHMgZG1uRWxlbWVudFJlZj1cIl8zRjk1RUZEMC05NEQ3LTREMUEtOUVBOS1DOEUxMjk4MkQ3RThcIj5cbiAgICAgICAgICAgIDxraWU6d2lkdGg+MTE1ODwva2llOndpZHRoPlxuICAgICAgICAgIDwva2llOkNvbXBvbmVudFdpZHRocz5cbiAgICAgICAgICA8a2llOkNvbXBvbmVudFdpZHRocyBkbW5FbGVtZW50UmVmPVwiX0EzMkVENEE1LTdCODktNDBGNy1CRTI1LUNEQjYzNkZFMDcxQ1wiPlxuICAgICAgICAgICAgPGtpZTp3aWR0aD40NTQ8L2tpZTp3aWR0aD5cbiAgICAgICAgICA8L2tpZTpDb21wb25lbnRXaWR0aHM+XG4gICAgICAgICAgPGtpZTpDb21wb25lbnRXaWR0aHMgZG1uRWxlbWVudFJlZj1cIl9EMzNEOUFFQS00OURGLTQ4OUYtOThFQy00QjQyRkY4QzIwMjdcIj5cbiAgICAgICAgICAgIDxraWU6d2lkdGg+NTA8L2tpZTp3aWR0aD5cbiAgICAgICAgICAgIDxraWU6d2lkdGg+MzAwPC9raWU6d2lkdGg+XG4gICAgICAgICAgPC9raWU6Q29tcG9uZW50V2lkdGhzPlxuICAgICAgICAgIDxraWU6Q29tcG9uZW50V2lkdGhzIGRtbkVsZW1lbnRSZWY9XCJfNUY5RkVBNEUtQjNGQy00QkMyLTkxM0UtMzZCODA3MUZBNzc3XCI+XG4gICAgICAgICAgICA8a2llOndpZHRoPjUwPC9raWU6d2lkdGg+XG4gICAgICAgICAgPC9raWU6Q29tcG9uZW50V2lkdGhzPlxuICAgICAgICAgIDxraWU6Q29tcG9uZW50V2lkdGhzIGRtbkVsZW1lbnRSZWY9XCJfNEE3RkM4RTAtMjVFRi00REFGLTg0NUEtOTNCRDg5QzJCQzhDXCI+XG4gICAgICAgICAgICA8a2llOndpZHRoPjEyMDwva2llOndpZHRoPlxuICAgICAgICAgIDwva2llOkNvbXBvbmVudFdpZHRocz5cbiAgICAgICAgICA8a2llOkNvbXBvbmVudFdpZHRocyBkbW5FbGVtZW50UmVmPVwiX0YwRTgwOTAwLTE5NjQtNDE0Mi05QTA1LTczRTdBMkUwRjJDRFwiIC8+XG4gICAgICAgICAgPGtpZTpDb21wb25lbnRXaWR0aHMgZG1uRWxlbWVudFJlZj1cIl8zRDBBMTk3OS1FNTlBLTQ4M0YtQkRBOC0xMzhGOTlCQTVBQjNcIj5cbiAgICAgICAgICAgIDxraWU6d2lkdGg+NTUwPC9raWU6d2lkdGg+XG4gICAgICAgICAgPC9raWU6Q29tcG9uZW50V2lkdGhzPlxuICAgICAgICAgIDxraWU6Q29tcG9uZW50V2lkdGhzIGRtbkVsZW1lbnRSZWY9XCJfRDk4NUY4ODYtNzFDMC00RjY1LTg4MDgtMkNFRjM2NkJFQ0M4XCI+XG4gICAgICAgICAgICA8a2llOndpZHRoPjU1MDwva2llOndpZHRoPlxuICAgICAgICAgIDwva2llOkNvbXBvbmVudFdpZHRocz5cbiAgICAgICAgICA8a2llOkNvbXBvbmVudFdpZHRocyBkbW5FbGVtZW50UmVmPVwiX0QxRjk2MTAyLTQxNTgtNDVCQi04QzlBLUI3QTNCRTJDMDIwNlwiPlxuICAgICAgICAgICAgPGtpZTp3aWR0aD42NzI8L2tpZTp3aWR0aD5cbiAgICAgICAgICA8L2tpZTpDb21wb25lbnRXaWR0aHM+XG4gICAgICAgICAgPGtpZTpDb21wb25lbnRXaWR0aHMgZG1uRWxlbWVudFJlZj1cIl80QUNFRkZGMC1BRDJDLTREQjgtOUJBRC03QkNDRkIwM0YyOTVcIj5cbiAgICAgICAgICAgIDxraWU6d2lkdGg+NjA8L2tpZTp3aWR0aD5cbiAgICAgICAgICAgIDxraWU6d2lkdGg+MTMzPC9raWU6d2lkdGg+XG4gICAgICAgICAgICA8a2llOndpZHRoPjE0Nzwva2llOndpZHRoPlxuICAgICAgICAgICAgPGtpZTp3aWR0aD4zMzU8L2tpZTp3aWR0aD5cbiAgICAgICAgICA8L2tpZTpDb21wb25lbnRXaWR0aHM+XG4gICAgICAgICAgPGtpZTpDb21wb25lbnRXaWR0aHMgZG1uRWxlbWVudFJlZj1cIl9FRjdGNDA0QS05MzlFLTQ4ODktOTVEOC1FNDA1M0REMUVFRDlcIj5cbiAgICAgICAgICAgIDxraWU6d2lkdGg+NjA8L2tpZTp3aWR0aD5cbiAgICAgICAgICAgIDxraWU6d2lkdGg+MjMzPC9raWU6d2lkdGg+XG4gICAgICAgICAgICA8a2llOndpZHRoPjEzMzwva2llOndpZHRoPlxuICAgICAgICAgICAgPGtpZTp3aWR0aD4xMjk8L2tpZTp3aWR0aD5cbiAgICAgICAgICAgIDxraWU6d2lkdGg+MTM1PC9raWU6d2lkdGg+XG4gICAgICAgICAgICA8a2llOndpZHRoPjY4MTwva2llOndpZHRoPlxuICAgICAgICAgICAgPGtpZTp3aWR0aD4xMzg8L2tpZTp3aWR0aD5cbiAgICAgICAgICA8L2tpZTpDb21wb25lbnRXaWR0aHM+XG4gICAgICAgICAgPGtpZTpDb21wb25lbnRXaWR0aHMgZG1uRWxlbWVudFJlZj1cIl8wNjRGQTg4RS1CMDZGLTQ5NDQtODVDMy1EQTg2QzNGNjYwRERcIj5cbiAgICAgICAgICAgIDxraWU6d2lkdGg+MTUwPC9raWU6d2lkdGg+XG4gICAgICAgICAgPC9raWU6Q29tcG9uZW50V2lkdGhzPlxuICAgICAgICAgIDxraWU6Q29tcG9uZW50V2lkdGhzIGRtbkVsZW1lbnRSZWY9XCJfNDc4QzgxNUUtNjBDOS00NjM3LUFBNDItMTk1REYxNkI2M0E1XCI+XG4gICAgICAgICAgICA8a2llOndpZHRoPjUwPC9raWU6d2lkdGg+XG4gICAgICAgICAgICA8a2llOndpZHRoPjE1MDwva2llOndpZHRoPlxuICAgICAgICAgIDwva2llOkNvbXBvbmVudFdpZHRocz5cbiAgICAgICAgICA8a2llOkNvbXBvbmVudFdpZHRocyBkbW5FbGVtZW50UmVmPVwiX0VFREYyQzE1LTdGRDctNDA5Ri1CMjNCLUY5QTE5OEUyMTM1RFwiPlxuICAgICAgICAgICAgPGtpZTp3aWR0aD4yMjg8L2tpZTp3aWR0aD5cbiAgICAgICAgICA8L2tpZTpDb21wb25lbnRXaWR0aHM+XG4gICAgICAgICAgPGtpZTpDb21wb25lbnRXaWR0aHMgZG1uRWxlbWVudFJlZj1cIl9FMzEyRDgwRS0wRUNFLTRENjYtODdFQi0zMERFMjA4OTBCQkNcIj5cbiAgICAgICAgICAgIDxraWU6d2lkdGg+NTA8L2tpZTp3aWR0aD5cbiAgICAgICAgICAgIDxraWU6d2lkdGg+MjI4PC9raWU6d2lkdGg+XG4gICAgICAgICAgPC9raWU6Q29tcG9uZW50V2lkdGhzPlxuICAgICAgICA8L2tpZTpDb21wb25lbnRzV2lkdGhzRXh0ZW5zaW9uPlxuICAgICAgPC9kaTpleHRlbnNpb24+XG4gICAgICA8ZG1uZGk6RE1OU2hhcGUgaWQ9XCJkbW5zaGFwZS1kcmctXzRDODlFNTlDLUZEREEtNDM4Qy04RDFGLTBCMTE5NEVGNkRBRVwiIGRtbkVsZW1lbnRSZWY9XCJfNEM4OUU1OUMtRkREQS00MzhDLThEMUYtMEIxMTk0RUY2REFFXCIgaXNDb2xsYXBzZWQ9XCJmYWxzZVwiPlxuICAgICAgICA8ZG1uZGk6RE1OU3R5bGU+XG4gICAgICAgICAgPGRtbmRpOkZpbGxDb2xvciByZWQ9XCIyNTVcIiBncmVlbj1cIjI1NVwiIGJsdWU9XCIyNTVcIiAvPlxuICAgICAgICAgIDxkbW5kaTpTdHJva2VDb2xvciByZWQ9XCIwXCIgZ3JlZW49XCIwXCIgYmx1ZT1cIjBcIiAvPlxuICAgICAgICAgIDxkbW5kaTpGb250Q29sb3IgcmVkPVwiMFwiIGdyZWVuPVwiMFwiIGJsdWU9XCIwXCIgLz5cbiAgICAgICAgPC9kbW5kaTpETU5TdHlsZT5cbiAgICAgICAgPGRjOkJvdW5kcyB4PVwiOTgwXCIgeT1cIjM2MFwiIHdpZHRoPVwiMTM0XCIgaGVpZ2h0PVwiNjFcIiAvPlxuICAgICAgICA8ZG1uZGk6RE1OTGFiZWwgLz5cbiAgICAgIDwvZG1uZGk6RE1OU2hhcGU+XG4gICAgICA8ZG1uZGk6RE1OU2hhcGUgaWQ9XCJkbW5zaGFwZS1kcmctXzRDNzg4REJELUM2NzItNEY0MS05QUZFLTlDN0QyQzE0NTczNFwiIGRtbkVsZW1lbnRSZWY9XCJfNEM3ODhEQkQtQzY3Mi00RjQxLTlBRkUtOUM3RDJDMTQ1NzM0XCIgaXNDb2xsYXBzZWQ9XCJmYWxzZVwiPlxuICAgICAgICA8ZG1uZGk6RE1OU3R5bGU+XG4gICAgICAgICAgPGRtbmRpOkZpbGxDb2xvciByZWQ9XCIyNTVcIiBncmVlbj1cIjI1NVwiIGJsdWU9XCIyNTVcIiAvPlxuICAgICAgICAgIDxkbW5kaTpTdHJva2VDb2xvciByZWQ9XCIwXCIgZ3JlZW49XCIwXCIgYmx1ZT1cIjBcIiAvPlxuICAgICAgICAgIDxkbW5kaTpGb250Q29sb3IgcmVkPVwiMFwiIGdyZWVuPVwiMFwiIGJsdWU9XCIwXCIgLz5cbiAgICAgICAgPC9kbW5kaTpETU5TdHlsZT5cbiAgICAgICAgPGRjOkJvdW5kcyB4PVwiOTkuMDkzNDU3OTQzOTI1MjRcIiB5PVwiMjIzLjY3MTA1MjYzMTU3ODk2XCIgd2lkdGg9XCIxMzZcIiBoZWlnaHQ9XCI2M1wiIC8+XG4gICAgICAgIDxkbW5kaTpETU5MYWJlbCAvPlxuICAgICAgPC9kbW5kaTpETU5TaGFwZT5cbiAgICAgIDxkbW5kaTpETU5TaGFwZSBpZD1cImRtbnNoYXBlLWRyZy1fRjBEQzg5MjMtNUZDNy00MjAwLThCRDEtNDYxRDVGMzcxNEJFXCIgZG1uRWxlbWVudFJlZj1cIl9GMERDODkyMy01RkM3LTQyMDAtOEJEMS00NjFENUYzNzE0QkVcIiBpc0NvbGxhcHNlZD1cImZhbHNlXCI+XG4gICAgICAgIDxkbW5kaTpETU5TdHlsZT5cbiAgICAgICAgICA8ZG1uZGk6RmlsbENvbG9yIHJlZD1cIjI1NVwiIGdyZWVuPVwiMjU1XCIgYmx1ZT1cIjI1NVwiIC8+XG4gICAgICAgICAgPGRtbmRpOlN0cm9rZUNvbG9yIHJlZD1cIjBcIiBncmVlbj1cIjBcIiBibHVlPVwiMFwiIC8+XG4gICAgICAgICAgPGRtbmRpOkZvbnRDb2xvciByZWQ9XCIwXCIgZ3JlZW49XCIwXCIgYmx1ZT1cIjBcIiAvPlxuICAgICAgICA8L2RtbmRpOkRNTlN0eWxlPlxuICAgICAgICA8ZGM6Qm91bmRzIHg9XCI1MzFcIiB5PVwiMjI1XCIgd2lkdGg9XCIxMzZcIiBoZWlnaHQ9XCI2MlwiIC8+XG4gICAgICAgIDxkbW5kaTpETU5MYWJlbCAvPlxuICAgICAgPC9kbW5kaTpETU5TaGFwZT5cbiAgICAgIDxkbW5kaTpETU5TaGFwZSBpZD1cImRtbnNoYXBlLWRyZy1fRkFGOTA4MEUtRjRFRi00OUY3LUFFRkQtMEQyOTkwRDhGRkRBXCIgZG1uRWxlbWVudFJlZj1cIl9GQUY5MDgwRS1GNEVGLTQ5RjctQUVGRC0wRDI5OTBEOEZGREFcIiBpc0NvbGxhcHNlZD1cImZhbHNlXCI+XG4gICAgICAgIDxkbW5kaTpETU5TdHlsZT5cbiAgICAgICAgICA8ZG1uZGk6RmlsbENvbG9yIHJlZD1cIjI1NVwiIGdyZWVuPVwiMjU1XCIgYmx1ZT1cIjI1NVwiIC8+XG4gICAgICAgICAgPGRtbmRpOlN0cm9rZUNvbG9yIHJlZD1cIjBcIiBncmVlbj1cIjBcIiBibHVlPVwiMFwiIC8+XG4gICAgICAgICAgPGRtbmRpOkZvbnRDb2xvciByZWQ9XCIwXCIgZ3JlZW49XCIwXCIgYmx1ZT1cIjBcIiAvPlxuICAgICAgICA8L2RtbmRpOkRNTlN0eWxlPlxuICAgICAgICA8ZGM6Qm91bmRzIHg9XCI3NjBcIiB5PVwiMzYwXCIgd2lkdGg9XCIxMzVcIiBoZWlnaHQ9XCI2M1wiIC8+XG4gICAgICAgIDxkbW5kaTpETU5MYWJlbCAvPlxuICAgICAgPC9kbW5kaTpETU5TaGFwZT5cbiAgICAgIDxkbW5kaTpETU5TaGFwZSBpZD1cImRtbnNoYXBlLWRyZy1fMUNGNUNFRkEtQUY5Ny00NkY5LTlDRDUtOUE4QUVCQjIwQjRFXCIgZG1uRWxlbWVudFJlZj1cIl8xQ0Y1Q0VGQS1BRjk3LTQ2RjktOUNENS05QThBRUJCMjBCNEVcIiBpc0NvbGxhcHNlZD1cImZhbHNlXCI+XG4gICAgICAgIDxkbW5kaTpETU5TdHlsZT5cbiAgICAgICAgICA8ZG1uZGk6RmlsbENvbG9yIHJlZD1cIjI1NVwiIGdyZWVuPVwiMjU1XCIgYmx1ZT1cIjI1NVwiIC8+XG4gICAgICAgICAgPGRtbmRpOlN0cm9rZUNvbG9yIHJlZD1cIjBcIiBncmVlbj1cIjBcIiBibHVlPVwiMFwiIC8+XG4gICAgICAgICAgPGRtbmRpOkZvbnRDb2xvciByZWQ9XCIwXCIgZ3JlZW49XCIwXCIgYmx1ZT1cIjBcIiAvPlxuICAgICAgICA8L2RtbmRpOkRNTlN0eWxlPlxuICAgICAgICA8ZGM6Qm91bmRzIHg9XCIzMTYuMDYwNzQ3NjYzNTUxNFwiIHk9XCIzNjFcIiB3aWR0aD1cIjEzNFwiIGhlaWdodD1cIjYxXCIgLz5cbiAgICAgICAgPGRtbmRpOkRNTkxhYmVsIC8+XG4gICAgICA8L2RtbmRpOkRNTlNoYXBlPlxuICAgICAgPGRtbmRpOkRNTlNoYXBlIGlkPVwiZG1uc2hhcGUtZHJnLV9ENkY0MjM0Ri0xNUIzLTRGNUItQjgxNC01RjZGRjI5RDI5MDdcIiBkbW5FbGVtZW50UmVmPVwiX0Q2RjQyMzRGLTE1QjMtNEY1Qi1CODE0LTVGNkZGMjlEMjkwN1wiIGlzQ29sbGFwc2VkPVwiZmFsc2VcIj5cbiAgICAgICAgPGRtbmRpOkRNTlN0eWxlPlxuICAgICAgICAgIDxkbW5kaTpGaWxsQ29sb3IgcmVkPVwiMjU1XCIgZ3JlZW49XCIyNTVcIiBibHVlPVwiMjU1XCIgLz5cbiAgICAgICAgICA8ZG1uZGk6U3Ryb2tlQ29sb3IgcmVkPVwiMFwiIGdyZWVuPVwiMFwiIGJsdWU9XCIwXCIgLz5cbiAgICAgICAgICA8ZG1uZGk6Rm9udENvbG9yIHJlZD1cIjBcIiBncmVlbj1cIjBcIiBibHVlPVwiMFwiIC8+XG4gICAgICAgIDwvZG1uZGk6RE1OU3R5bGU+XG4gICAgICAgIDxkYzpCb3VuZHMgeD1cIjMxNVwiIHk9XCIyMjVcIiB3aWR0aD1cIjEzNlwiIGhlaWdodD1cIjYyXCIgLz5cbiAgICAgICAgPGRtbmRpOkRNTkxhYmVsIC8+XG4gICAgICA8L2RtbmRpOkRNTlNoYXBlPlxuICAgICAgPGRtbmRpOkRNTlNoYXBlIGlkPVwiZG1uc2hhcGUtZHJnLV8yRkU1MURCMS0zMDgzLTRCRjctQUE3MS0wQjAwNjUzMTBFNzJcIiBkbW5FbGVtZW50UmVmPVwiXzJGRTUxREIxLTMwODMtNEJGNy1BQTcxLTBCMDA2NTMxMEU3MlwiIGlzQ29sbGFwc2VkPVwiZmFsc2VcIj5cbiAgICAgICAgPGRtbmRpOkRNTlN0eWxlPlxuICAgICAgICAgIDxkbW5kaTpGaWxsQ29sb3IgcmVkPVwiMjU1XCIgZ3JlZW49XCIyNTVcIiBibHVlPVwiMjU1XCIgLz5cbiAgICAgICAgICA8ZG1uZGk6U3Ryb2tlQ29sb3IgcmVkPVwiMFwiIGdyZWVuPVwiMFwiIGJsdWU9XCIwXCIgLz5cbiAgICAgICAgICA8ZG1uZGk6Rm9udENvbG9yIHJlZD1cIjBcIiBncmVlbj1cIjBcIiBibHVlPVwiMFwiIC8+XG4gICAgICAgIDwvZG1uZGk6RE1OU3R5bGU+XG4gICAgICAgIDxkYzpCb3VuZHMgeD1cIjk4MFwiIHk9XCIyMjBcIiB3aWR0aD1cIjEzNlwiIGhlaWdodD1cIjYyXCIgLz5cbiAgICAgICAgPGRtbmRpOkRNTkxhYmVsIC8+XG4gICAgICA8L2RtbmRpOkRNTlNoYXBlPlxuICAgICAgPGRtbmRpOkRNTlNoYXBlIGlkPVwiZG1uc2hhcGUtZHJnLV8yMUM1MDc2My1FNDlGLTREODMtQTgyNC0xNkRBNkFBODdDNjRcIiBkbW5FbGVtZW50UmVmPVwiXzIxQzUwNzYzLUU0OUYtNEQ4My1BODI0LTE2REE2QUE4N0M2NFwiIGlzQ29sbGFwc2VkPVwiZmFsc2VcIj5cbiAgICAgICAgPGRtbmRpOkRNTlN0eWxlPlxuICAgICAgICAgIDxkbW5kaTpGaWxsQ29sb3IgcmVkPVwiMjU1XCIgZ3JlZW49XCIyNTVcIiBibHVlPVwiMjU1XCIgLz5cbiAgICAgICAgICA8ZG1uZGk6U3Ryb2tlQ29sb3IgcmVkPVwiMFwiIGdyZWVuPVwiMFwiIGJsdWU9XCIwXCIgLz5cbiAgICAgICAgICA8ZG1uZGk6Rm9udENvbG9yIHJlZD1cIjBcIiBncmVlbj1cIjBcIiBibHVlPVwiMFwiIC8+XG4gICAgICAgIDwvZG1uZGk6RE1OU3R5bGU+XG4gICAgICAgIDxkYzpCb3VuZHMgeD1cIjUzMlwiIHk9XCI4OVwiIHdpZHRoPVwiMTM2XCIgaGVpZ2h0PVwiNjJcIiAvPlxuICAgICAgICA8ZG1uZGk6RE1OTGFiZWwgLz5cbiAgICAgIDwvZG1uZGk6RE1OU2hhcGU+XG4gICAgICA8ZG1uZGk6RE1OU2hhcGUgaWQ9XCJkbW5zaGFwZS1kcmctXzZFMzIwNUFGLTdFM0QtNEFCRS1BMzY3LTk2RjNGNkU4MjEwRVwiIGRtbkVsZW1lbnRSZWY9XCJfNkUzMjA1QUYtN0UzRC00QUJFLUEzNjctOTZGM0Y2RTgyMTBFXCIgaXNDb2xsYXBzZWQ9XCJmYWxzZVwiPlxuICAgICAgICA8ZG1uZGk6RE1OU3R5bGU+XG4gICAgICAgICAgPGRtbmRpOkZpbGxDb2xvciByZWQ9XCIyNTVcIiBncmVlbj1cIjI1NVwiIGJsdWU9XCIyNTVcIiAvPlxuICAgICAgICAgIDxkbW5kaTpTdHJva2VDb2xvciByZWQ9XCIwXCIgZ3JlZW49XCIwXCIgYmx1ZT1cIjBcIiAvPlxuICAgICAgICAgIDxkbW5kaTpGb250Q29sb3IgcmVkPVwiMFwiIGdyZWVuPVwiMFwiIGJsdWU9XCIwXCIgLz5cbiAgICAgICAgPC9kbW5kaTpETU5TdHlsZT5cbiAgICAgICAgPGRjOkJvdW5kcyB4PVwiNTMxLjEyMTQ5NTMyNzEwMjhcIiB5PVwiMzYwXCIgd2lkdGg9XCIxMzRcIiBoZWlnaHQ9XCI2MVwiIC8+XG4gICAgICAgIDxkbW5kaTpETU5MYWJlbCAvPlxuICAgICAgPC9kbW5kaTpETU5TaGFwZT5cbiAgICAgIDxkbW5kaTpETU5TaGFwZSBpZD1cImRtbnNoYXBlLWRyZy1fREE1Q0NGNjItOTBBOC00Q0ZDLUExMzctOThCNTI4NTIyNTg4XCIgZG1uRWxlbWVudFJlZj1cIl9EQTVDQ0Y2Mi05MEE4LTRDRkMtQTEzNy05OEI1Mjg1MjI1ODhcIiBpc0NvbGxhcHNlZD1cImZhbHNlXCI+XG4gICAgICAgIDxkbW5kaTpETU5TdHlsZT5cbiAgICAgICAgICA8ZG1uZGk6RmlsbENvbG9yIHJlZD1cIjI1NVwiIGdyZWVuPVwiMjU1XCIgYmx1ZT1cIjI1NVwiIC8+XG4gICAgICAgICAgPGRtbmRpOlN0cm9rZUNvbG9yIHJlZD1cIjBcIiBncmVlbj1cIjBcIiBibHVlPVwiMFwiIC8+XG4gICAgICAgICAgPGRtbmRpOkZvbnRDb2xvciByZWQ9XCIwXCIgZ3JlZW49XCIwXCIgYmx1ZT1cIjBcIiAvPlxuICAgICAgICA8L2RtbmRpOkRNTlN0eWxlPlxuICAgICAgICA8ZGM6Qm91bmRzIHg9XCI5OS4wOTM0NTc5NDM5MjUyNFwiIHk9XCIzNTlcIiB3aWR0aD1cIjEzNlwiIGhlaWdodD1cIjYzXCIgLz5cbiAgICAgICAgPGRtbmRpOkRNTkxhYmVsIC8+XG4gICAgICA8L2RtbmRpOkRNTlNoYXBlPlxuICAgICAgPGRtbmRpOkRNTlNoYXBlIGlkPVwiZG1uc2hhcGUtZHJnLV9DOThCRTkzOS1COUM3LTQzRTAtODNFOC1FRTdBMTZDNTI3NkRcIiBkbW5FbGVtZW50UmVmPVwiX0M5OEJFOTM5LUI5QzctNDNFMC04M0U4LUVFN0ExNkM1Mjc2RFwiIGlzQ29sbGFwc2VkPVwiZmFsc2VcIj5cbiAgICAgICAgPGRtbmRpOkRNTlN0eWxlPlxuICAgICAgICAgIDxkbW5kaTpGaWxsQ29sb3IgcmVkPVwiMjU1XCIgZ3JlZW49XCIyNTVcIiBibHVlPVwiMjU1XCIgLz5cbiAgICAgICAgICA8ZG1uZGk6U3Ryb2tlQ29sb3IgcmVkPVwiMFwiIGdyZWVuPVwiMFwiIGJsdWU9XCIwXCIgLz5cbiAgICAgICAgICA8ZG1uZGk6Rm9udENvbG9yIHJlZD1cIjBcIiBncmVlbj1cIjBcIiBibHVlPVwiMFwiIC8+XG4gICAgICAgIDwvZG1uZGk6RE1OU3R5bGU+XG4gICAgICAgIDxkYzpCb3VuZHMgeD1cIjc2MFwiIHk9XCIyMjBcIiB3aWR0aD1cIjEzNFwiIGhlaWdodD1cIjY1XCIgLz5cbiAgICAgICAgPGRtbmRpOkRNTkxhYmVsIC8+XG4gICAgICA8L2RtbmRpOkRNTlNoYXBlPlxuICAgICAgPGRtbmRpOkRNTkVkZ2UgaWQ9XCJkbW5lZGdlLWRyZy1fODlFRUFGOUYtNUE1RC00RjU5LTkxQjctRUE0MThBNzIyOUFGXCIgZG1uRWxlbWVudFJlZj1cIl84OUVFQUY5Ri01QTVELTRGNTktOTFCNy1FQTQxOEE3MjI5QUZcIj5cbiAgICAgICAgPGRpOndheXBvaW50IHg9XCIzODMuMDYwNzQ3NjYzNTUxNFwiIHk9XCIzNjFcIiAvPlxuICAgICAgICA8ZGk6d2F5cG9pbnQgeD1cIjU5OVwiIHk9XCIyODdcIiAvPlxuICAgICAgPC9kbW5kaTpETU5FZGdlPlxuICAgICAgPGRtbmRpOkRNTkVkZ2UgaWQ9XCJkbW5lZGdlLWRyZy1fODc3MzBDNUEtNTY0OC00MTVCLTkxODktRUY0RDg4MDVGOEM5XCIgZG1uRWxlbWVudFJlZj1cIl84NzczMEM1QS01NjQ4LTQxNUItOTE4OS1FRjREODgwNUY4QzlcIj5cbiAgICAgICAgPGRpOndheXBvaW50IHg9XCI1OTguMTIxNDk1MzI3MTAyOFwiIHk9XCIzOTAuNVwiIC8+XG4gICAgICAgIDxkaTp3YXlwb2ludCB4PVwiNTk5XCIgeT1cIjI4N1wiIC8+XG4gICAgICA8L2RtbmRpOkRNTkVkZ2U+XG4gICAgICA8ZG1uZGk6RE1ORWRnZSBpZD1cImRtbmVkZ2UtZHJnLV82M0RFN0MzQi1BNzY3LTRCOEEtQTA5OC05MUVDQjRCOEQzMzBcIiBkbW5FbGVtZW50UmVmPVwiXzYzREU3QzNCLUE3NjctNEI4QS1BMDk4LTkxRUNCNEI4RDMzMFwiPlxuICAgICAgICA8ZGk6d2F5cG9pbnQgeD1cIjgyNy41XCIgeT1cIjM2MFwiIC8+XG4gICAgICAgIDxkaTp3YXlwb2ludCB4PVwiNTk5XCIgeT1cIjI4N1wiIC8+XG4gICAgICA8L2RtbmRpOkRNTkVkZ2U+XG4gICAgICA8ZG1uZGk6RE1ORWRnZSBpZD1cImRtbmVkZ2UtZHJnLV8yQzk1ODI5RC1GQ0Y5LTQ0RjUtOEY1QS0wQTZDREI2MDYwMERcIiBkbW5FbGVtZW50UmVmPVwiXzJDOTU4MjlELUZDRjktNDRGNS04RjVBLTBBNkNEQjYwNjAwRFwiPlxuICAgICAgICA8ZGk6d2F5cG9pbnQgeD1cIjgyN1wiIHk9XCIyNTIuNVwiIC8+XG4gICAgICAgIDxkaTp3YXlwb2ludCB4PVwiNjY3XCIgeT1cIjI1NlwiIC8+XG4gICAgICA8L2RtbmRpOkRNTkVkZ2U+XG4gICAgICA8ZG1uZGk6RE1ORWRnZSBpZD1cImRtbmVkZ2UtZHJnLV83N0JBNDA5Qi1FMDBELTRGQkMtQjUyMi04RjY1NkQ0RjZGMEVcIiBkbW5FbGVtZW50UmVmPVwiXzc3QkE0MDlCLUUwMEQtNEZCQy1CNTIyLThGNjU2RDRGNkYwRVwiPlxuICAgICAgICA8ZGk6d2F5cG9pbnQgeD1cIjM4My4wNjA3NDc2NjM1NTE0XCIgeT1cIjM5MS41XCIgLz5cbiAgICAgICAgPGRpOndheXBvaW50IHg9XCIzODNcIiB5PVwiMjg3XCIgLz5cbiAgICAgIDwvZG1uZGk6RE1ORWRnZT5cbiAgICAgIDxkbW5kaTpETU5FZGdlIGlkPVwiZG1uZWRnZS1kcmctXzRENDQxQzExLTcwNDItNDlDRi1BNDJDLTE3QTQzNDhBN0YyOVwiIGRtbkVsZW1lbnRSZWY9XCJfNEQ0NDFDMTEtNzA0Mi00OUNGLUE0MkMtMTdBNDM0OEE3RjI5XCI+XG4gICAgICAgIDxkaTp3YXlwb2ludCB4PVwiMTY3LjA5MzQ1Nzk0MzkyNTI0XCIgeT1cIjI1NS4xNzEwNTI2MzE1Nzg5NlwiIC8+XG4gICAgICAgIDxkaTp3YXlwb2ludCB4PVwiMzE1XCIgeT1cIjI1NlwiIC8+XG4gICAgICA8L2RtbmRpOkRNTkVkZ2U+XG4gICAgICA8ZG1uZGk6RE1ORWRnZSBpZD1cImRtbmVkZ2UtZHJnLV8zMjE3RDY1NS00NDg0LTQ3MzMtQTlBRS00RjlDRjMwRDk5MjRcIiBkbW5FbGVtZW50UmVmPVwiXzMyMTdENjU1LTQ0ODQtNDczMy1BOUFFLTRGOUNGMzBEOTkyNFwiPlxuICAgICAgICA8ZGk6d2F5cG9pbnQgeD1cIjE2Ny4wOTM0NTc5NDM5MjUyNFwiIHk9XCIzNTlcIiAvPlxuICAgICAgICA8ZGk6d2F5cG9pbnQgeD1cIjM4M1wiIHk9XCIyODdcIiAvPlxuICAgICAgPC9kbW5kaTpETU5FZGdlPlxuICAgICAgPGRtbmRpOkRNTkVkZ2UgaWQ9XCJkbW5lZGdlLWRyZy1fMzFBMUI2QjItQTJBNi00RTAzLUI4OTgtMjY1NzNBNUNGM0JBXCIgZG1uRWxlbWVudFJlZj1cIl8zMUExQjZCMi1BMkE2LTRFMDMtQjg5OC0yNjU3M0E1Q0YzQkFcIj5cbiAgICAgICAgPGRpOndheXBvaW50IHg9XCIxMDQ3XCIgeT1cIjM5MC41XCIgLz5cbiAgICAgICAgPGRpOndheXBvaW50IHg9XCIxMDQ4XCIgeT1cIjI4MlwiIC8+XG4gICAgICA8L2RtbmRpOkRNTkVkZ2U+XG4gICAgICA8ZG1uZGk6RE1ORWRnZSBpZD1cImRtbmVkZ2UtZHJnLV8wQjk5MkYwMS1CQTc3LTRGMDYtQTgzMC1EODk0OEI0NjcyNzJcIiBkbW5FbGVtZW50UmVmPVwiXzBCOTkyRjAxLUJBNzctNEYwNi1BODMwLUQ4OTQ4QjQ2NzI3MlwiPlxuICAgICAgICA8ZGk6d2F5cG9pbnQgeD1cIjU5OVwiIHk9XCIyNTZcIiAvPlxuICAgICAgICA8ZGk6d2F5cG9pbnQgeD1cIjYwMFwiIHk9XCIxNTFcIiAvPlxuICAgICAgPC9kbW5kaTpETU5FZGdlPlxuICAgICAgPGRtbmRpOkRNTkVkZ2UgaWQ9XCJkbW5lZGdlLWRyZy1fQjYwMDJGMzMtNDg4OC00OEM1LUIyNjUtNjM2MDMwRjhDMkRDXCIgZG1uRWxlbWVudFJlZj1cIl9CNjAwMkYzMy00ODg4LTQ4QzUtQjI2NS02MzYwMzBGOEMyRENcIiBzb3VyY2VFbGVtZW50PVwiZG1uc2hhcGUtZHJnLV8yRkU1MURCMS0zMDgzLTRCRjctQUE3MS0wQjAwNjUzMTBFNzJcIiB0YXJnZXRFbGVtZW50PVwiZG1uc2hhcGUtZHJnLV8yMUM1MDc2My1FNDlGLTREODMtQTgyNC0xNkRBNkFBODdDNjRcIj5cbiAgICAgICAgPGRpOndheXBvaW50IHg9XCIxMDQ4XCIgeT1cIjIyMFwiIC8+XG4gICAgICAgIDxkaTp3YXlwb2ludCB4PVwiNjAwXCIgeT1cIjE1MVwiIC8+XG4gICAgICA8L2RtbmRpOkRNTkVkZ2U+XG4gICAgICA8ZG1uZGk6RE1ORWRnZSBpZD1cImRtbmVkZ2UtZHJnLV9BM0U5NUIzMi0yRUZELTQwQUQtQjVFNC0wQTczQTE1NDIwMTFcIiBkbW5FbGVtZW50UmVmPVwiX0EzRTk1QjMyLTJFRkQtNDBBRC1CNUU0LTBBNzNBMTU0MjAxMVwiIHNvdXJjZUVsZW1lbnQ9XCJkbW5zaGFwZS1kcmctX0Q2RjQyMzRGLTE1QjMtNEY1Qi1CODE0LTVGNkZGMjlEMjkwN1wiIHRhcmdldEVsZW1lbnQ9XCJkbW5zaGFwZS1kcmctXzIxQzUwNzYzLUU0OUYtNEQ4My1BODI0LTE2REE2QUE4N0M2NFwiPlxuICAgICAgICA8ZGk6d2F5cG9pbnQgeD1cIjM4M1wiIHk9XCIyMjVcIiAvPlxuICAgICAgICA8ZGk6d2F5cG9pbnQgeD1cIjYwMFwiIHk9XCIxNTFcIiAvPlxuICAgICAgPC9kbW5kaTpETU5FZGdlPlxuICAgIDwvZG1uZGk6RE1ORGlhZ3JhbT5cbiAgPC9kbW5kaTpETU5EST5cbiAgPGRtbjppbXBvcnQgaWQ9XCJfRTQ1NjI2MDgtQjE0Qy00ODQ1LUE0QzMtNkMxQTFGQkMwMjE5XCIgbmFtZT1cInN1bUJrbVwiIGltcG9ydFR5cGU9XCJodHRwczovL3d3dy5vbWcub3JnL3NwZWMvRE1OLzIwMjMwMzI0L01PREVML1wiIG5hbWVzcGFjZT1cImh0dHBzOi8va2llLmFwYWNoZS5vcmcvZG1uL185MjM3ODRCRC1DRDMxLTQ4OEEtOUMzMS1DMUE4M0M1NDgzQzBcIiAvPlxuICA8ZG1uOmltcG9ydCBpZD1cIl9DNzI2QTgyNC05MzQ5LTRDRjgtOTFGQS1GOTY5MjUwQzg0MjFcIiBuYW1lPVwic3VtRGlmZkRzXCIgaW1wb3J0VHlwZT1cImh0dHBzOi8vd3d3Lm9tZy5vcmcvc3BlYy9ETU4vMjAyMzAzMjQvTU9ERUwvXCIgbmFtZXNwYWNlPVwiaHR0cHM6Ly9raWUuYXBhY2hlLm9yZy9kbW4vX0QxOUIwMDE1LTJDQkQtNEJBOC04NEE5LTVGNTU0RDg0QTlFMVwiIC8+XG4gIDxkbW46aW1wb3J0IGlkPVwiXzg3Q0RENjAwLTc1NjQtQ0Y4Ny01NDdFLUE4Qjg3NkNEMDgxMlwiIG5hbWU9XCJ0ZXN0VHJlZVBtbWxcIiBpbXBvcnRUeXBlPVwiaHR0cHM6Ly93d3cuZG1nLm9yZy9QTU1MLTRfMlwiIG5hbWVzcGFjZT1cImh0dHBzOi8va2llLm9yZy9wbW1sI2Rldi13ZWJhcHAvYXZhaWxhYmxlLW1vZGVscy10by1pbmNsdWRlL3Rlc3RUcmVlLnBtbWxcIiAvPlxuPC9kbW46ZGVmaW5pdGlvbnM+XG5gO1xuY29uc3QgbWV0YTogTWV0YTxEbW5FZGl0b3JQcm9wcz4gPSB7XG4gIHRpdGxlOiBcIlVzZSBjYXNlcy9Mb2FuIFByZSBRdWFsaWZpY2F0aW9uXCIsXG4gIGNvbXBvbmVudDogRG1uRWRpdG9yLFxuICBpbmNsdWRlU3RvcmllczogL15bQS1aXS9cbn07XG5leHBvcnQgZGVmYXVsdCBtZXRhO1xudHlwZSBTdG9yeSA9IFN0b3J5T2JqPFN0b3J5Ym9va0RtbkVkaXRvclByb3BzPjtcbmNvbnN0IG1hcnNoYWxsZXIgPSBnZXRNYXJzaGFsbGVyKGxvYW5QcmVRdWFsaWZpY2F0aW9uRG1uLCB7XG4gIHVwZ3JhZGVUbzogXCJsYXRlc3RcIlxufSk7XG5jb25zdCBtb2RlbCA9IG1hcnNoYWxsZXIucGFyc2VyLnBhcnNlKCk7XG5leHBvcnQgY29uc3QgTG9hblByZVF1YWxpZmljYXRpb246IFN0b3J5ID0ge1xuICByZW5kZXI6IEVtcHR5LnJlbmRlcixcbiAgYXJnczoge1xuICAgIG1vZGVsOiBtb2RlbCxcbiAgICB4bWw6IG1hcnNoYWxsZXIuYnVpbGRlci5idWlsZChtb2RlbClcbiAgfVxufTtcbkxvYW5QcmVRdWFsaWZpY2F0aW9uLnBhcmFtZXRlcnMgPSB7XG4gIC4uLkxvYW5QcmVRdWFsaWZpY2F0aW9uLnBhcmFtZXRlcnMsXG4gIGRvY3M6IHtcbiAgICAuLi5Mb2FuUHJlUXVhbGlmaWNhdGlvbi5wYXJhbWV0ZXJzPy5kb2NzLFxuICAgIHNvdXJjZToge1xuICAgICAgb3JpZ2luYWxTb3VyY2U6IFwie1xcbiAgcmVuZGVyOiBFbXB0eS5yZW5kZXIsXFxuICBhcmdzOiB7XFxuICAgIG1vZGVsOiBtb2RlbCxcXG4gICAgeG1sOiBtYXJzaGFsbGVyLmJ1aWxkZXIuYnVpbGQobW9kZWwpXFxuICB9XFxufVwiLFxuICAgICAgLi4uTG9hblByZVF1YWxpZmljYXRpb24ucGFyYW1ldGVycz8uZG9jcz8uc291cmNlXG4gICAgfVxuICB9XG59OyJdLCJuYW1lcyI6WyJnZXRNYXJzaGFsbGVyIiwiRW1wdHkiLCJEbW5FZGl0b3IiLCJsb2FuUHJlUXVhbGlmaWNhdGlvbkRtbiIsIm1ldGEiLCJ0aXRsZSIsImNvbXBvbmVudCIsImluY2x1ZGVTdG9yaWVzIiwibWFyc2hhbGxlciIsInVwZ3JhZGVUbyIsIm1vZGVsIiwicGFyc2VyIiwicGFyc2UiLCJMb2FuUHJlUXVhbGlmaWNhdGlvbiIsInJlbmRlciIsImFyZ3MiLCJ4bWwiLCJidWlsZGVyIiwiYnVpbGQiLCJwYXJhbWV0ZXJzIiwiZG9jcyIsIl9hIiwic291cmNlIiwib3JpZ2luYWxTb3VyY2UiLCJfYyIsIl9iIiwiX19uYW1lZEV4cG9ydHNPcmRlciJdLCJzb3VyY2VSb290IjoiIn0=