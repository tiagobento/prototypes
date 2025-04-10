"use strict";
(self["webpackChunk_kie_tools_boxed_expression_component"] = self["webpackChunk_kie_tools_boxed_expression_component"] || []).push([["useCases-LoanOriginations-RequiredMonthlyInstallment-RequiredMonthlyInstallment-stories"],{

/***/ "./stories/useCases/LoanOriginations/RequiredMonthlyInstallment/RequiredMonthlyInstallment.stories.tsx":
/*!*************************************************************************************************************!*\
  !*** ./stories/useCases/LoanOriginations/RequiredMonthlyInstallment/RequiredMonthlyInstallment.stories.tsx ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Expression: () => (/* binding */ Expression),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   requiredMonthlyInstallmentExpression: () => (/* binding */ requiredMonthlyInstallmentExpression),
/* harmony export */   requiredMonthlyInstallmentWidthsById: () => (/* binding */ requiredMonthlyInstallmentWidthsById)
/* harmony export */ });
/* harmony import */ var _src_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/api */ "./src/api/index.ts");
/* harmony import */ var _boxedExpressionStoriesWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../boxedExpressionStoriesWrapper */ "./stories/boxedExpressionStoriesWrapper.tsx");
/* harmony import */ var _src_BoxedExpressionEditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../src/BoxedExpressionEditor */ "./src/BoxedExpressionEditor.tsx");
/* harmony import */ var _boxedExpressionEditorBase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../boxedExpressionEditorBase */ "./stories/useCases/LoanOriginations/boxedExpressionEditorBase.tsx");
var _a, _b, _c;




const meta = {
  title: "Use cases/Loan Originations/Required monthly installment",
  component: _src_BoxedExpressionEditor__WEBPACK_IMPORTED_MODULE_2__.BoxedExpressionEditor,
  includeStories: /^[A-Z]/
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (meta);
const requiredMonthlyInstallmentExpression = {
  __$$element: "invocation",
  "@_id": "_EF51A747-D5E1-414E-9DD5-964362FB2AEC",
  "@_label": "Required monthly installment",
  "@_typeRef": _src_api__WEBPACK_IMPORTED_MODULE_0__.DmnBuiltInDataType.Number,
  expression: {
    __$$element: "literalExpression",
    "@_id": "_99D8F2CD-01CF-499B-9D51-410C59865F15",
    text: {
      __$$text: "f.Installment calculation"
    }
  },
  binding: [{
    parameter: {
      "@_id": "_189F1672-7BED-47F9-884F-6A1FB31DFE34",
      "@_name": "Product Type",
      "@_typeRef": "t.ProductType"
    },
    expression: {
      __$$element: "literalExpression",
      "@_id": "_EE98C97E-4CFE-463D-A500-B8D6D7FC69BD",
      "@_label": "Product Type",
      "@_typeRef": "t.ProductType",
      text: {
        __$$text: "Requested product.ProductType"
      }
    }
  }, {
    parameter: {
      "@_id": "_38FC5DFF-390B-42FE-A29D-35EF44EC6BB8",
      "@_name": "Rate",
      "@_typeRef": _src_api__WEBPACK_IMPORTED_MODULE_0__.DmnBuiltInDataType.Number
    },
    expression: {
      __$$element: "literalExpression",
      "@_id": "_25149F92-AA1B-45F0-92F6-8B478803E61C",
      "@_label": "Rate",
      "@_typeRef": _src_api__WEBPACK_IMPORTED_MODULE_0__.DmnBuiltInDataType.Number,
      text: {
        __$$text: "Requested product.Rate"
      }
    }
  }, {
    parameter: {
      "@_id": "_3C364710-888A-455C-B70C-6DE20914A6F4",
      "@_name": "Term",
      "@_typeRef": _src_api__WEBPACK_IMPORTED_MODULE_0__.DmnBuiltInDataType.Number
    },
    expression: {
      __$$element: "literalExpression",
      "@_id": "_A245D6C9-1A2D-48E1-B001-B7CA9318A82F",
      "@_label": "Term",
      "@_typeRef": _src_api__WEBPACK_IMPORTED_MODULE_0__.DmnBuiltInDataType.Number,
      text: {
        __$$text: "Requested product.Term"
      }
    }
  }, {
    parameter: {
      "@_id": "_DCCB50E0-CB3D-483D-9D13-3BD221A236E3",
      "@_name": "Amount",
      "@_typeRef": _src_api__WEBPACK_IMPORTED_MODULE_0__.DmnBuiltInDataType.Number
    },
    expression: {
      __$$element: "literalExpression",
      "@_id": "_CCBA629B-04C7-4B45-9FBF-AF9AED2FE10D",
      "@_label": "Amount",
      "@_typeRef": _src_api__WEBPACK_IMPORTED_MODULE_0__.DmnBuiltInDataType.Number,
      text: {
        __$$text: "Requested product.Amount"
      }
    }
  }]
};
const requiredMonthlyInstallmentWidthsById = {
  "_EF51A747-D5E1-414E-9DD5-964362FB2AEC": [120],
  "_EE98C97E-4CFE-463D-A500-B8D6D7FC69BD": [250]
};
const Expression = {
  render: args => (0,_boxedExpressionStoriesWrapper__WEBPACK_IMPORTED_MODULE_1__.BoxedExpressionEditorStory)(),
  args: {
    expressionHolderId: "_00000000-0000-0000-0000-000000000000",
    expression: requiredMonthlyInstallmentExpression,
    widthsById: requiredMonthlyInstallmentWidthsById,
    dataTypes: _boxedExpressionEditorBase__WEBPACK_IMPORTED_MODULE_3__.loanOriginationsDataTypes,
    beeGwtService: _boxedExpressionStoriesWrapper__WEBPACK_IMPORTED_MODULE_1__.beeGwtService,
    pmmlDocuments: _boxedExpressionStoriesWrapper__WEBPACK_IMPORTED_MODULE_1__.pmmlDocuments,
    isResetSupportedOnRootExpression: false
  }
};
Expression.parameters = {
  ...Expression.parameters,
  docs: {
    ...((_a = Expression.parameters) === null || _a === void 0 ? void 0 : _a.docs),
    source: {
      originalSource: "{\n  render: args => BoxedExpressionEditorStory(),\n  args: {\n    expressionHolderId: \"_00000000-0000-0000-0000-000000000000\",\n    expression: requiredMonthlyInstallmentExpression,\n    widthsById: requiredMonthlyInstallmentWidthsById,\n    dataTypes: loanOriginationsDataTypes,\n    beeGwtService,\n    pmmlDocuments,\n    isResetSupportedOnRootExpression: false\n  }\n}",
      ...((_c = (_b = Expression.parameters) === null || _b === void 0 ? void 0 : _b.docs) === null || _c === void 0 ? void 0 : _c.source)
    }
  }
};
const __namedExportsOrder = ["requiredMonthlyInstallmentExpression", "requiredMonthlyInstallmentWidthsById", "Expression"];

/***/ }),

/***/ "./stories/useCases/LoanOriginations/boxedExpressionEditorBase.tsx":
/*!*************************************************************************!*\
  !*** ./stories/useCases/LoanOriginations/boxedExpressionEditorBase.tsx ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loanOriginationsDataTypes: () => (/* binding */ loanOriginationsDataTypes)
/* harmony export */ });
/* harmony import */ var _boxedExpressionStoriesWrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../boxedExpressionStoriesWrapper */ "./stories/boxedExpressionStoriesWrapper.tsx");

const loanOriginationsDataTypes = [..._boxedExpressionStoriesWrapper__WEBPACK_IMPORTED_MODULE_0__.dataTypes, {
  name: "t.Adjudication",
  isCustom: true
}, {
  name: "t.ApplicantData",
  isCustom: true
}, {
  name: "t.BureauCallType",
  isCustom: true
}, {
  name: "t.BureauData",
  isCustom: true
}, {
  name: "t.BureauRiskCategory",
  isCustom: true
}, {
  name: "t.Eligibility",
  isCustom: true
}, {
  name: "t.EmploymentStatus",
  isCustom: true
}, {
  name: "t.MaritalStatus",
  isCustom: true
}, {
  name: "t.ProductType",
  isCustom: true
}, {
  name: "t.RequestedProduc",
  isCustom: true
}, {
  name: "t.Routing",
  isCustom: true
}, {
  name: "t.Strategy",
  isCustom: true
}];

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlQ2FzZXMtTG9hbk9yaWdpbmF0aW9ucy1SZXF1aXJlZE1vbnRobHlJbnN0YWxsbWVudC1SZXF1aXJlZE1vbnRobHlJbnN0YWxsbWVudC1zdG9yaWVzLjc2MmM3NDIwLmlmcmFtZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1Cc0Y7QUFFNEQ7QUFDeEM7QUFDakM7QUFHekUsTUFBTU0sSUFBSSxHQUFxQztFQUM3Q0MsS0FBSyxFQUFFLDBEQUEwRDtFQUNqRUMsU0FBUyxFQUFFSiw2RUFBcUI7RUFDaENLLGNBQWMsRUFBRTtDQUNqQjtBQUNELGlFQUFlSCxJQUFJLEVBQUM7QUFFYixNQUFNSSxvQ0FBb0MsR0FBZ0M7RUFDL0VDLFdBQVcsRUFBRSxZQUFZO0VBQ3pCLE1BQU0sRUFBRSx1Q0FBdUM7RUFDL0MsU0FBUyxFQUFFLDhCQUE4QjtFQUN6QyxXQUFXLEVBQUVYLHdEQUFrQixDQUFDWSxNQUFNO0VBQ3RDQyxVQUFVLEVBQUU7SUFDVkYsV0FBVyxFQUFFLG1CQUFtQjtJQUNoQyxNQUFNLEVBQUUsdUNBQXVDO0lBQy9DRyxJQUFJLEVBQUU7TUFDSkMsUUFBUSxFQUFFOztHQUViO0VBQ0RDLE9BQU8sRUFBRSxDQUFDO0lBQ1JDLFNBQVMsRUFBRTtNQUNULE1BQU0sRUFBRSx1Q0FBdUM7TUFDL0MsUUFBUSxFQUFFLGNBQWM7TUFDeEIsV0FBVyxFQUFFO0tBQ2Q7SUFDREosVUFBVSxFQUFFO01BQ1ZGLFdBQVcsRUFBRSxtQkFBbUI7TUFDaEMsTUFBTSxFQUFFLHVDQUF1QztNQUMvQyxTQUFTLEVBQUUsY0FBYztNQUN6QixXQUFXLEVBQUUsZUFBZTtNQUM1QkcsSUFBSSxFQUFFO1FBQ0pDLFFBQVEsRUFBRTs7O0dBR2YsRUFBRTtJQUNERSxTQUFTLEVBQUU7TUFDVCxNQUFNLEVBQUUsdUNBQXVDO01BQy9DLFFBQVEsRUFBRSxNQUFNO01BQ2hCLFdBQVcsRUFBRWpCLHdEQUFrQixDQUFDWTtLQUNqQztJQUNEQyxVQUFVLEVB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QUFFQyxRQUFRLEVBQUU7QUFBSSxDQUFFLEVBQzNDO0VBQUVELElBQUksRUFBRSxlQUFlO0VBQUVDLFFBQVEsRUFBRTtBQUFJLENBQUUsRUFDekM7RUFBRUQsSUFBSSxFQUFFLG1CQUFtQjtFQUFFQyxRQUFRLEVBQUU7QUFBSSxDQUFFLEVBQzdDO0VBQUVELElBQUksRUFBRSxXQUFXO0VBQUVDLFFBQVEsRUFBRTtBQUFJLENBQUUsRUFDckM7RUFBRUQsSUFBSSxFQUFFLFlBQVk7RUFBRUMsUUFBUSxFQUFFO0FBQUksQ0FBRSxDQUN2QyIsInNvdXJjZXMiOlsid2VicGFjazovL0BraWUtdG9vbHMvYm94ZWQtZXhwcmVzc2lvbi1jb21wb25lbnQvLi9zdG9yaWVzL3VzZUNhc2VzL0xvYW5PcmlnaW5hdGlvbnMvUmVxdWlyZWRNb250aGx5SW5zdGFsbG1lbnQvUmVxdWlyZWRNb250aGx5SW5zdGFsbG1lbnQuc3Rvcmllcy50c3giLCJ3ZWJwYWNrOi8vQGtpZS10b29scy9ib3hlZC1leHByZXNzaW9uLWNvbXBvbmVudC8uL3N0b3JpZXMvdXNlQ2FzZXMvTG9hbk9yaWdpbmF0aW9ucy9ib3hlZEV4cHJlc3Npb25FZGl0b3JCYXNlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogTGljZW5zZWQgdG8gdGhlIEFwYWNoZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIChBU0YpIHVuZGVyIG9uZVxuICogb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuICBTZWUgdGhlIE5PVElDRSBmaWxlXG4gKiBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvblxuICogcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuICBUaGUgQVNGIGxpY2Vuc2VzIHRoaXMgZmlsZVxuICogdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZVxuICogXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4gKiB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZyxcbiAqIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXG4gKiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxuICogS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlXG4gKiBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zXG4gKiB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgeyBEbW5CdWlsdEluRGF0YVR5cGUsIEJveGVkSW52b2NhdGlvbiwgTm9ybWFsaXplZCB9IGZyb20gXCIuLi8uLi8uLi8uLi9zcmMvYXBpXCI7XG5pbXBvcnQgdHlwZSB7IE1ldGEsIFN0b3J5T2JqIH0gZnJvbSBcIkBzdG9yeWJvb2svcmVhY3RcIjtcbmltcG9ydCB7IGJlZUd3dFNlcnZpY2UsIEJveGVkRXhwcmVzc2lvbkVkaXRvclN0b3J5LCBCb3hlZEV4cHJlc3Npb25FZGl0b3JTdG9yeUFyZ3MsIHBtbWxEb2N1bWVudHMgfSBmcm9tIFwiLi4vLi4vLi4vYm94ZWRFeHByZXNzaW9uU3Rvcmllc1dyYXBwZXJcIjtcbmltcG9ydCB7IEJveGVkRXhwcmVzc2lvbkVkaXRvciwgQm94ZWRFeHByZXNzaW9uRWRpdG9yUHJvcHMgfSBmcm9tIFwiLi4vLi4vLi4vLi4vc3JjL0JveGVkRXhwcmVzc2lvbkVkaXRvclwiO1xuaW1wb3J0IHsgbG9hbk9yaWdpbmF0aW9uc0RhdGFUeXBlcyB9IGZyb20gXCIuLi9ib3hlZEV4cHJlc3Npb25FZGl0b3JCYXNlXCI7XG5cbi8vIE1vcmUgb24gaG93IHRvIHNldCB1cCBzdG9yaWVzIGF0OiBodHRwczovL3N0b3J5Ym9vay5qcy5vcmcvZG9jcy9yZWFjdC93cml0aW5nLXN0b3JpZXMvaW50cm9kdWN0aW9uI2RlZmF1bHQtZXhwb3J0XG5jb25zdCBtZXRhOiBNZXRhPEJveGVkRXhwcmVzc2lvbkVkaXRvclByb3BzPiA9IHtcbiAgdGl0bGU6IFwiVXNlIGNhc2VzL0xvYW4gT3JpZ2luYXRpb25zL1JlcXVpcmVkIG1vbnRobHkgaW5zdGFsbG1lbnRcIixcbiAgY29tcG9uZW50OiBCb3hlZEV4cHJlc3Npb25FZGl0b3IsXG4gIGluY2x1ZGVTdG9yaWVzOiAvXltBLVpdL1xufTtcbmV4cG9ydCBkZWZhdWx0IG1ldGE7XG50eXBlIFN0b3J5ID0gU3RvcnlPYmo8Qm94ZWRFeHByZXNzaW9uRWRpdG9yU3RvcnlBcmdzPjtcbmV4cG9ydCBjb25zdCByZXF1aXJlZE1vbnRobHlJbnN0YWxsbWVudEV4cHJlc3Npb246IE5vcm1hbGl6ZWQ8Qm94ZWRJbnZvY2F0aW9uPiA9IHtcbiAgX18kJGVsZW1lbnQ6IFwiaW52b2NhdGlvblwiLFxuICBcIkBfaWRcIjogXCJfRUY1MUE3NDctRDVFMS00MTRFLTlERDUtOTY0MzYyRkIyQUVDXCIsXG4gIFwiQF9sYWJlbFwiOiBcIlJlcXVpcmVkIG1vbnRobHkgaW5zdGFsbG1lbnRcIixcbiAgXCJAX3R5cGVSZWZcIjogRG1uQnVpbHRJbkRhdGFUeXBlLk51bWJlcixcbiAgZXhwcmVzc2lvbjoge1xuICAgIF9fJCRlbGVtZW50OiBcImxpdGVyYWxFeHByZXNzaW9uXCIsXG4gICAgXCJAX2lkXCI6IFwiXzk5RDhGMkNELTAxQ0YtNDk5Qi05RDUxLTQxMEM1OTg2NUYxNVwiLFxuICAgIHRleHQ6IHtcbiAgICAgIF9fJCR0ZXh0OiBcImYuSW5zdGFsbG1lbnQgY2FsY3VsYXRpb25cIlxuICAgIH1cbiAgfSxcbiAgYmluZGluZzogW3tcbiAgICBwYXJhbWV0ZXI6IHtcbiAgICAgIFwiQF9pZFwiOiBcIl8xODlGMTY3Mi03QkVELTQ3RjktODg0Ri02QTFGQjMxREZFMzRcIixcbiAgICAgIFwiQF9uYW1lXCI6IFwiUHJvZHVjdCBUeXBlXCIsXG4gICAgICBcIkBfdHlwZVJlZlwiOiBcInQuUHJvZHVjdFR5cGVcIlxuICAgIH0sXG4gICAgZXhwcmVzc2lvbjoge1xuICAgICAgX18kJGVsZW1lbnQ6IFwibGl0ZXJhbEV4cHJlc3Npb25cIixcbiAgICAgIFwiQF9pZFwiOiBcIl9FRTk4Qzk3RS00Q0ZFLTQ2M0QtQTUwMC1COEQ2RDdGQzY5QkRcIixcbiAgICAgIFwiQF9sYWJlbFwiOiBcIlByb2R1Y3QgVHlwZVwiLFxuICAgICAgXCJAX3R5cGVSZWZcIjogXCJ0LlByb2R1Y3RUeXBlXCIsXG4gICAgICB0ZXh0OiB7XG4gICAgICAgIF9fJCR0ZXh0OiBcIlJlcXVlc3RlZCBwcm9kdWN0LlByb2R1Y3RUeXBlXCJcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBwYXJhbWV0ZXI6IHtcbiAgICAgIFwiQF9pZFwiOiBcIl8zOEZDNURGRi0zOTBCLTQyRkUtQTI5RC0zNUVGNDRFQzZCQjhcIixcbiAgICAgIFwiQF9uYW1lXCI6IFwiUmF0ZVwiLFxuICAgICAgXCJAX3R5cGVSZWZcIjogRG1uQnVpbHRJbkRhdGFUeXBlLk51bWJlclxuICAgIH0sXG4gICAgZXhwcmVzc2lvbjoge1xuICAgICAgX18kJGVsZW1lbnQ6IFwibGl0ZXJhbEV4cHJlc3Npb25cIixcbiAgICAgIFwiQF9pZFwiOiBcIl8yNTE0OUY5Mi1BQTFCLTQ1RjAtOTJGNi04QjQ3ODgwM0U2MUNcIixcbiAgICAgIFwiQF9sYWJlbFwiOiBcIlJhdGVcIixcbiAgICAgIFwiQF90eXBlUmVmXCI6IERtbkJ1aWx0SW5EYXRhVHlwZS5OdW1iZXIsXG4gICAgICB0ZXh0OiB7XG4gICAgICAgIF9fJCR0ZXh0OiBcIlJlcXVlc3RlZCBwcm9kdWN0LlJhdGVcIlxuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIHBhcmFtZXRlcjoge1xuICAgICAgXCJAX2lkXCI6IFwiXzNDMzY0NzEwLTg4OEEtNDU1Qy1CNzBDLTZERTIwOTE0QTZGNFwiLFxuICAgICAgXCJAX25hbWVcIjogXCJUZXJtXCIsXG4gICAgICBcIkBfdHlwZVJlZlwiOiBEbW5CdWlsdEluRGF0YVR5cGUuTnVtYmVyXG4gICAgfSxcbiAgICBleHByZXNzaW9uOiB7XG4gICAgICBfXyQkZWxlbWVudDogXCJsaXRlcmFsRXhwcmVzc2lvblwiLFxuICAgICAgXCJAX2lkXCI6IFwiX0EyNDVENkM5LTFBMkQtNDhFMS1CMDAxLUI3Q0E5MzE4QTgyRlwiLFxuICAgICAgXCJAX2xhYmVsXCI6IFwiVGVybVwiLFxuICAgICAgXCJAX3R5cGVSZWZcIjogRG1uQnVpbHRJbkRhdGFUeXBlLk51bWJlcixcbiAgICAgIHRleHQ6IHtcbiAgICAgICAgX18kJHRleHQ6IFwiUmVxdWVzdGVkIHByb2R1Y3QuVGVybVwiXG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAgcGFyYW1ldGVyOiB7XG4gICAgICBcIkBfaWRcIjogXCJfRENDQjUwRTAtQ0IzRC00ODNELTlEMTMtM0JEMjIxQTIzNkUzXCIsXG4gICAgICBcIkBfbmFtZVwiOiBcIkFtb3VudFwiLFxuICAgICAgXCJAX3R5cGVSZWZcIjogRG1uQnVpbHRJbkRhdGFUeXBlLk51bWJlclxuICAgIH0sXG4gICAgZXhwcmVzc2lvbjoge1xuICAgICAgX18kJGVsZW1lbnQ6IFwibGl0ZXJhbEV4cHJlc3Npb25cIixcbiAgICAgIFwiQF9pZFwiOiBcIl9DQ0JBNjI5Qi0wNEM3LTRCNDUtOUZCRi1BRjlBRUQyRkUxMERcIixcbiAgICAgIFwiQF9sYWJlbFwiOiBcIkFtb3VudFwiLFxuICAgICAgXCJAX3R5cGVSZWZcIjogRG1uQnVpbHRJbkRhdGFUeXBlLk51bWJlcixcbiAgICAgIHRleHQ6IHtcbiAgICAgICAgX18kJHRleHQ6IFwiUmVxdWVzdGVkIHByb2R1Y3QuQW1vdW50XCJcbiAgICAgIH1cbiAgICB9XG4gIH1dXG59O1xuZXhwb3J0IGNvbnN0IHJlcXVpcmVkTW9udGhseUluc3RhbGxtZW50V2lkdGhzQnlJZCA9IHtcbiAgXCJfRUY1MUE3NDctRDVFMS00MTRFLTlERDUtOTY0MzYyRkIyQUVDXCI6IFsxMjBdLFxuICBcIl9FRTk4Qzk3RS00Q0ZFLTQ2M0QtQTUwMC1COEQ2RDdGQzY5QkRcIjogWzI1MF1cbn07XG5cbi8vIE1vcmUgb24gd3JpdGluZyBzdG9yaWVzIHdpdGggYXJnczogaHR0cHM6Ly9zdG9yeWJvb2suanMub3JnL2RvY3MvcmVhY3Qvd3JpdGluZy1zdG9yaWVzL2FyZ3NcbmV4cG9ydCBjb25zdCBFeHByZXNzaW9uOiBTdG9yeSA9IHtcbiAgcmVuZGVyOiBhcmdzID0+IEJveGVkRXhwcmVzc2lvbkVkaXRvclN0b3J5KCksXG4gIGFyZ3M6IHtcbiAgICBleHByZXNzaW9uSG9sZGVySWQ6IFwiXzAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMFwiLFxuICAgIGV4cHJlc3Npb246IHJlcXVpcmVkTW9udGhseUluc3RhbGxtZW50RXhwcmVzc2lvbixcbiAgICB3aWR0aHNCeUlkOiByZXF1aXJlZE1vbnRobHlJbnN0YWxsbWVudFdpZHRoc0J5SWQsXG4gICAgZGF0YVR5cGVzOiBsb2FuT3JpZ2luYXRpb25zRGF0YVR5cGVzLFxuICAgIGJlZUd3dFNlcnZpY2UsXG4gICAgcG1tbERvY3VtZW50cyxcbiAgICBpc1Jlc2V0U3VwcG9ydGVkT25Sb290RXhwcmVzc2lvbjogZmFsc2VcbiAgfVxufTtcbkV4cHJlc3Npb24ucGFyYW1ldGVycyA9IHtcbiAgLi4uRXhwcmVzc2lvbi5wYXJhbWV0ZXJzLFxuICBkb2NzOiB7XG4gICAgLi4uRXhwcmVzc2lvbi5wYXJhbWV0ZXJzPy5kb2NzLFxuICAgIHNvdXJjZToge1xuICAgICAgb3JpZ2luYWxTb3VyY2U6IFwie1xcbiAgcmVuZGVyOiBhcmdzID0+IEJveGVkRXhwcmVzc2lvbkVkaXRvclN0b3J5KCksXFxuICBhcmdzOiB7XFxuICAgIGV4cHJlc3Npb25Ib2xkZXJJZDogXFxcIl8wMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDBcXFwiLFxcbiAgICBleHByZXNzaW9uOiByZXF1aXJlZE1vbnRobHlJbnN0YWxsbWVudEV4cHJlc3Npb24sXFxuICAgIHdpZHRoc0J5SWQ6IHJlcXVpcmVkTW9udGhseUluc3RhbGxtZW50V2lkdGhzQnlJZCxcXG4gICAgZGF0YVR5cGVzOiBsb2FuT3JpZ2luYXRpb25zRGF0YVR5cGVzLFxcbiAgICBiZWVHd3RTZXJ2aWNlLFxcbiAgICBwbW1sRG9jdW1lbnRzLFxcbiAgICBpc1Jlc2V0U3VwcG9ydGVkT25Sb290RXhwcmVzc2lvbjogZmFsc2VcXG4gIH1cXG59XCIsXG4gICAgICAuLi5FeHByZXNzaW9uLnBhcmFtZXRlcnM/LmRvY3M/LnNvdXJjZVxuICAgIH1cbiAgfVxufTsiLCIvKlxuICogTGljZW5zZWQgdG8gdGhlIEFwYWNoZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIChBU0YpIHVuZGVyIG9uZVxuICogb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuICBTZWUgdGhlIE5PVElDRSBmaWxlXG4gKiBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvblxuICogcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuICBUaGUgQVNGIGxpY2Vuc2VzIHRoaXMgZmlsZVxuICogdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZVxuICogXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4gKiB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZyxcbiAqIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXG4gKiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxuICogS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlXG4gKiBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zXG4gKiB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgeyBkYXRhVHlwZXMgfSBmcm9tIFwiLi4vLi4vYm94ZWRFeHByZXNzaW9uU3Rvcmllc1dyYXBwZXJcIjtcblxuZXhwb3J0IGNvbnN0IGxvYW5PcmlnaW5hdGlvbnNEYXRhVHlwZXMgPSBbXG4gIC4uLmRhdGFUeXBlcyxcbiAgeyBuYW1lOiBcInQuQWRqdWRpY2F0aW9uXCIsIGlzQ3VzdG9tOiB0cnVlIH0sXG4gIHsgbmFtZTogXCJ0LkFwcGxpY2FudERhdGFcIiwgaXNDdXN0b206IHRydWUgfSxcbiAgeyBuYW1lOiBcInQuQnVyZWF1Q2FsbFR5cGVcIiwgaXNDdXN0b206IHRydWUgfSxcbiAgeyBuYW1lOiBcInQuQnVyZWF1RGF0YVwiLCBpc0N1c3RvbTogdHJ1ZSB9LFxuICB7IG5hbWU6IFwidC5CdXJlYXVSaXNrQ2F0ZWdvcnlcIiwgaXNDdXN0b206IHRydWUgfSxcbiAgeyBuYW1lOiBcInQuRWxpZ2liaWxpdHlcIiwgaXNDdXN0b206IHRydWUgfSxcbiAgeyBuYW1lOiBcInQuRW1wbG95bWVudFN0YXR1c1wiLCBpc0N1c3RvbTogdHJ1ZSB9LFxuICB7IG5hbWU6IFwidC5NYXJpdGFsU3RhdHVzXCIsIGlzQ3VzdG9tOiB0cnVlIH0sXG4gIHsgbmFtZTogXCJ0LlByb2R1Y3RUeXBlXCIsIGlzQ3VzdG9tOiB0cnVlIH0sXG4gIHsgbmFtZTogXCJ0LlJlcXVlc3RlZFByb2R1Y1wiLCBpc0N1c3RvbTogdHJ1ZSB9LFxuICB7IG5hbWU6IFwidC5Sb3V0aW5nXCIsIGlzQ3VzdG9tOiB0cnVlIH0sXG4gIHsgbmFtZTogXCJ0LlN0cmF0ZWd5XCIsIGlzQ3VzdG9tOiB0cnVlIH0sXG5dO1xuIl0sIm5hbWVzIjpbIkRtbkJ1aWx0SW5EYXRhVHlwZSIsImJlZUd3dFNlcnZpY2UiLCJCb3hlZEV4cHJlc3Npb25FZGl0b3JTdG9yeSIsInBtbWxEb2N1bWVudHMiLCJCb3hlZEV4cHJlc3Npb25FZGl0b3IiLCJsb2FuT3JpZ2luYXRpb25zRGF0YVR5cGVzIiwibWV0YSIsInRpdGxlIiwiY29tcG9uZW50IiwiaW5jbHVkZVN0b3JpZXMiLCJyZXF1aXJlZE1vbnRobHlJbnN0YWxsbWVudEV4cHJlc3Npb24iLCJfXyQkZWxlbWVudCIsIk51bWJlciIsImV4cHJlc3Npb24iLCJ0ZXh0IiwiX18kJHRleHQiLCJiaW5kaW5nIiwicGFyYW1ldGVyIiwicmVxdWlyZWRNb250aGx5SW5zdGFsbG1lbnRXaWR0aHNCeUlkIiwiRXhwcmVzc2lvbiIsInJlbmRlciIsImFyZ3MiLCJleHByZXNzaW9uSG9sZGVySWQiLCJ3aWR0aHNCeUlkIiwiZGF0YVR5cGVzIiwiaXNSZXNldFN1cHBvcnRlZE9uUm9vdEV4cHJlc3Npb24iLCJwYXJhbWV0ZXJzIiwiZG9jcyIsIl9hIiwic291cmNlIiwib3JpZ2luYWxTb3VyY2UiLCJfYyIsIl9iIiwiX19uYW1lZEV4cG9ydHNPcmRlciIsIm5hbWUiLCJpc0N1c3RvbSJdLCJzb3VyY2VSb290IjoiIn0=