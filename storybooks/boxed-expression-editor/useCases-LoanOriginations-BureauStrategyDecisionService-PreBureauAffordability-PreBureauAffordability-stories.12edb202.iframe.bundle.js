"use strict";
(self["webpackChunk_kie_tools_boxed_expression_component"] = self["webpackChunk_kie_tools_boxed_expression_component"] || []).push([["useCases-LoanOriginations-BureauStrategyDecisionService-PreBureauAffordability-PreBureauAffordability-stories"],{

/***/ "./stories/useCases/LoanOriginations/BureauStrategyDecisionService/PreBureauAffordability/PreBureauAffordability.stories.tsx":
/*!***********************************************************************************************************************************!*\
  !*** ./stories/useCases/LoanOriginations/BureauStrategyDecisionService/PreBureauAffordability/PreBureauAffordability.stories.tsx ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Expression: () => (/* binding */ Expression),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   preBureauAffordabilityExpression: () => (/* binding */ preBureauAffordabilityExpression),
/* harmony export */   preBureauAffordabilityWidthsById: () => (/* binding */ preBureauAffordabilityWidthsById)
/* harmony export */ });
/* harmony import */ var _src_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../src/api */ "./src/api/index.ts");
/* harmony import */ var _boxedExpressionStoriesWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../boxedExpressionStoriesWrapper */ "./stories/boxedExpressionStoriesWrapper.tsx");
/* harmony import */ var _src_BoxedExpressionEditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../src/BoxedExpressionEditor */ "./src/BoxedExpressionEditor.tsx");
/* harmony import */ var _boxedExpressionEditorBase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../boxedExpressionEditorBase */ "./stories/useCases/LoanOriginations/boxedExpressionEditorBase.tsx");
var _a, _b, _c;




const meta = {
  title: "Use cases/Loan Originations/Bureau Strategy Decision Service/Pre Bureau Affordability",
  component: _src_BoxedExpressionEditor__WEBPACK_IMPORTED_MODULE_2__.BoxedExpressionEditor,
  includeStories: /^[A-Z]/
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (meta);
const preBureauAffordabilityExpression = {
  __$$element: "invocation",
  "@_id": "_1E880009-77B2-4309-AE2A-8964E05636B1",
  "@_label": "Pre-bureau affordability",
  "@_typeRef": _src_api__WEBPACK_IMPORTED_MODULE_0__.DmnBuiltInDataType.Boolean,
  expression: {
    __$$element: "literalExpression",
    "@_id": "_0B151359-63F6-4DAB-BC88-53F34446F9C7",
    text: {
      __$$text: "f.Affordability calculation"
    }
  },
  binding: [{
    parameter: {
      "@_id": "_2882DEEF-03E9-431B-9E96-0B9E06DBDBFA",
      "@_name": "Monthly Income",
      "@_typeRef": _src_api__WEBPACK_IMPORTED_MODULE_0__.DmnBuiltInDataType.Number
    },
    expression: {
      "@_id": "_FAD12087-C2B6-4060-840B-077972DCCB80",
      "@_label": "Monthly Income",
      __$$element: "literalExpression",
      text: {
        __$$text: "Applicant data.Monthly.Income"
      },
      "@_typeRef": _src_api__WEBPACK_IMPORTED_MODULE_0__.DmnBuiltInDataType.Number
    }
  }, {
    parameter: {
      "@_id": "_ECCC661F-9489-494A-81A9-CADD18075235",
      "@_name": "Monthly Repayments",
      "@_typeRef": _src_api__WEBPACK_IMPORTED_MODULE_0__.DmnBuiltInDataType.Number
    },
    expression: {
      "@_id": "_79F0E706-6018-49AB-86EB-78AC55582CE7",
      __$$element: "literalExpression",
      text: {
        __$$text: "Applicant data.Monthly.Repayments"
      },
      "@_label": "Monthly Repayments",
      "@_typeRef": _src_api__WEBPACK_IMPORTED_MODULE_0__.DmnBuiltInDataType.Number
    }
  }, {
    parameter: {
      "@_id": "_50CB1671-8A51-40A2-B86C-5A59A76ADA99",
      "@_name": "Monthly Expenses",
      "@_typeRef": _src_api__WEBPACK_IMPORTED_MODULE_0__.DmnBuiltInDataType.Number
    },
    expression: {
      "@_id": "_A541AA7D-2DE8-4E04-B5C9-0320EE7D26BE",
      __$$element: "literalExpression",
      text: {
        __$$text: "Applicant data.Monthly.Expenses"
      },
      "@_label": "Monthly Expenses",
      "@_typeRef": _src_api__WEBPACK_IMPORTED_MODULE_0__.DmnBuiltInDataType.Number
    }
  }, {
    parameter: {
      "@_id": "_1B4A9572-B67B-4D52-94B0-A990B3114810",
      "@_name": "Risk Category",
      "@_typeRef": "t.BureauRiskCategory"
    },
    expression: {
      "@_id": "_9C3C6ED5-F875-4C5B-A7C1-76D10DC2E5DF",
      __$$element: "literalExpression",
      text: {
        __$$text: "Pre-bureau risk category"
      },
      "@_label": "Risk Category",
      "@_typeRef": "t.BureauRiskCategory"
    }
  }, {
    parameter: {
      "@_id": "_6C831C67-F80C-44FC-B4B6-55FD4BAE1A79",
      "@_name": "Required Monthly Installment",
      "@_typeRef": _src_api__WEBPACK_IMPORTED_MODULE_0__.DmnBuiltInDataType.Number
    },
    expression: {
      __$$element: "literalExpression",
      "@_id": "_656110E9-A234-46A4-B4CF-7FD691F8F565",
      "@_label": "Required Monthly Installment",
      "@_typeRef": _src_api__WEBPACK_IMPORTED_MODULE_0__.DmnBuiltInDataType.Number,
      text: {
        __$$text: "Required monthly installment"
      }
    }
  }]
};
const preBureauAffordabilityWidthsById = {
  "_1E880009-77B2-4309-AE2A-8964E05636B1": [180, 300],
  "_FAD12087-C2B6-4060-840B-077972DCCB80": [300],
  "_79F0E706-6018-49AB-86EB-78AC55582CE7": [300],
  "_A541AA7D-2DE8-4E04-B5C9-0320EE7D26BE": [300],
  "_9C3C6ED5-F875-4C5B-A7C1-76D10DC2E5DF": [300],
  "_656110E9-A234-46A4-B4CF-7FD691F8F565": [300]
};
const Expression = {
  render: args => (0,_boxedExpressionStoriesWrapper__WEBPACK_IMPORTED_MODULE_1__.BoxedExpressionEditorStory)(),
  args: {
    expressionHolderId: "_00000000-0000-0000-0000-000000000000",
    expression: preBureauAffordabilityExpression,
    widthsById: preBureauAffordabilityWidthsById,
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
      originalSource: "{\n  render: args => BoxedExpressionEditorStory(),\n  args: {\n    expressionHolderId: \"_00000000-0000-0000-0000-000000000000\",\n    expression: preBureauAffordabilityExpression,\n    widthsById: preBureauAffordabilityWidthsById,\n    dataTypes: loanOriginationsDataTypes,\n    beeGwtService,\n    pmmlDocuments,\n    isResetSupportedOnRootExpression: false\n  }\n}",
      ...((_c = (_b = Expression.parameters) === null || _b === void 0 ? void 0 : _b.docs) === null || _c === void 0 ? void 0 : _c.source)
    }
  }
};
const __namedExportsOrder = ["preBureauAffordabilityExpression", "preBureauAffordabilityWidthsById", "Expression"];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlQ2FzZXMtTG9hbk9yaWdpbmF0aW9ucy1CdXJlYXVTdHJhdGVneURlY2lzaW9uU2VydmljZS1QcmVCdXJlYXVBZmZvcmRhYmlsaXR5LVByZUJ1cmVhdUFmZm9yZGFiaWxpdHktc3Rvcmllcy4xMmVkYjIwMi5pZnJhbWUuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQnlGO0FBRTREO0FBQ3hDO0FBQ2pDO0FBRzVFLE1BQU1NLElBQUksR0FBcUM7RUFDN0NDLEtBQUssRUFBRSx1RkFBdUY7RUFDOUZDLFNBQVMsRUFBRUosNkVBQXFCO0VBQ2hDSyxjQUFjLEVBQUU7Q0FDakI7QUFDRCxpRUFBZUgsSUFBSSxFQUFDO0FBRWIsTUFBTUksZ0NBQWdDLEdBQWdDO0VBQzNFQyxXQUFXLEVBQUUsWUFBWTtFQUN6QixNQUFNLEVBQUUsdUNBQXVDO0VBQy9DLFNBQVMsRUFBRSwwQkFBMEI7RUFDckMsV0FBVyxFQUFFWCx3REFBa0IsQ0FBQ1ksT0FBTztFQUN2Q0MsVUFBVSxFQUFFO0lBQ1ZGLFdBQVcsRUFBRSxtQkFBbUI7SUFDaEMsTUFBTSxFQUFFLHVDQUF1QztJQUMvQ0csSUFBSSxFQUFFO01BQ0pDLFFBQVEsRUFBRTs7R0FFYjtFQUNEQyxPQUFPLEVBQUUsQ0FBQztJQUNSQyxTQUFTLEVBQUU7TUFDVCxNQUFNLEVBQUUsdUNBQXVDO01BQy9DLFFBQVEsRUFBRSxnQkFBZ0I7TUFDMUIsV0FBVyxFQUFFakIsd0RBQWtCLENBQUNrQjtLQUNqQztJQUNETCxVQUFVLEVBQUU7TUFDVixNQUFNLEVBQUUsdUNBQXVDO01BQy9DLFNBQVMsRUFBRSxnQkFBZ0I7TUFDM0JGLFdBQVcsRUFBRSxtQkFBbUI7TUFDaENHLElBQUksRUFBRTtRQUNKQyxRQUFRLEVBQUU7T0FDWDtNQUNELFdBQVcsRUFBRWYsd0RBQWtCLENBQUNrQjs7R0FFbkMsRUFBRTtJQUNERCxTQUFTLEVBQUU7TUFDVCxNQUFNLEVBQUUsdUNBQXVDO01BQy9DLFFBQVEsRUFB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Qix5QkFBeUIsR0FBRyxDQUN2QyxHQUFHb0IscUVBQVMsRUFDWjtFQUFFVSxJQUFJLEVBQUUsZ0JBQWdCO0VBQUVDLFFBQVEsRUFBRTtBQUFJLENBQUUsRUFDMUM7RUFBRUQsSUFBSSxFQUFFLGlCQUFpQjtFQUFFQyxRQUFRLEVBQUU7QUFBSSxDQUFFLEVBQzNDO0VBQUVELElBQUksRUFBRSxrQkFBa0I7RUFBRUMsUUFBUSxFQUFFO0FBQUksQ0FBRSxFQUM1QztFQUFFRCxJQUFJLEVBQUUsY0FBYztFQUFFQyxRQUFRLEVBQUU7QUFBSSxDQUFFLEVBQ3hDO0VBQUVELElBQUksRUFBRSxzQkFBc0I7RUFBRUMsUUFBUSxFQUFFO0FBQUksQ0FBRSxFQUNoRDtFQUFFRCxJQUFJLEVBQUUsZUFBZTtFQUFFQyxRQUFRLEVBQUU7QUFBSSxDQUFFLEVBQ3pDO0VBQUVELElBQUksRUFBRSxvQkFBb0I7RUFBRUMsUUFBUSxFQUFFO0FBQUksQ0FBRSxFQUM5QztFQUFFRCxJQUFJLEVBQUUsaUJBQWlCO0VBQUVDLFFBQVEsRUFBRTtBQUFJLENBQUUsRUFDM0M7RUFBRUQsSUFBSSxFQUFFLGVBQWU7RUFBRUMsUUFBUSxFQUFFO0FBQUksQ0FBRSxFQUN6QztFQUFFRCxJQUFJLEVBQUUsbUJBQW1CO0VBQUVDLFFBQVEsRUFBRTtBQUFJLENBQUUsRUFDN0M7RUFBRUQsSUFBSSxFQUFFLFdBQVc7RUFBRUMsUUFBUSxFQUFFO0FBQUksQ0FBRSxFQUNyQztFQUFFRCxJQUFJLEVBQUUsWUFBWTtFQUFFQyxRQUFRLEVBQUU7QUFBSSxDQUFFLENBQ3ZDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGtpZS10b29scy9ib3hlZC1leHByZXNzaW9uLWNvbXBvbmVudC8uL3N0b3JpZXMvdXNlQ2FzZXMvTG9hbk9yaWdpbmF0aW9ucy9CdXJlYXVTdHJhdGVneURlY2lzaW9uU2VydmljZS9QcmVCdXJlYXVBZmZvcmRhYmlsaXR5L1ByZUJ1cmVhdUFmZm9yZGFiaWxpdHkuc3Rvcmllcy50c3giLCJ3ZWJwYWNrOi8vQGtpZS10b29scy9ib3hlZC1leHByZXNzaW9uLWNvbXBvbmVudC8uL3N0b3JpZXMvdXNlQ2FzZXMvTG9hbk9yaWdpbmF0aW9ucy9ib3hlZEV4cHJlc3Npb25FZGl0b3JCYXNlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogTGljZW5zZWQgdG8gdGhlIEFwYWNoZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIChBU0YpIHVuZGVyIG9uZVxuICogb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuICBTZWUgdGhlIE5PVElDRSBmaWxlXG4gKiBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvblxuICogcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuICBUaGUgQVNGIGxpY2Vuc2VzIHRoaXMgZmlsZVxuICogdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZVxuICogXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4gKiB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZyxcbiAqIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXG4gKiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxuICogS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlXG4gKiBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zXG4gKiB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgeyBCb3hlZEludm9jYXRpb24sIERtbkJ1aWx0SW5EYXRhVHlwZSwgTm9ybWFsaXplZCB9IGZyb20gXCIuLi8uLi8uLi8uLi8uLi9zcmMvYXBpXCI7XG5pbXBvcnQgdHlwZSB7IE1ldGEsIFN0b3J5T2JqIH0gZnJvbSBcIkBzdG9yeWJvb2svcmVhY3RcIjtcbmltcG9ydCB7IGJlZUd3dFNlcnZpY2UsIEJveGVkRXhwcmVzc2lvbkVkaXRvclN0b3J5LCBCb3hlZEV4cHJlc3Npb25FZGl0b3JTdG9yeUFyZ3MsIHBtbWxEb2N1bWVudHMgfSBmcm9tIFwiLi4vLi4vLi4vLi4vYm94ZWRFeHByZXNzaW9uU3Rvcmllc1dyYXBwZXJcIjtcbmltcG9ydCB7IEJveGVkRXhwcmVzc2lvbkVkaXRvciwgQm94ZWRFeHByZXNzaW9uRWRpdG9yUHJvcHMgfSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vc3JjL0JveGVkRXhwcmVzc2lvbkVkaXRvclwiO1xuaW1wb3J0IHsgbG9hbk9yaWdpbmF0aW9uc0RhdGFUeXBlcyB9IGZyb20gXCIuLi8uLi9ib3hlZEV4cHJlc3Npb25FZGl0b3JCYXNlXCI7XG5cbi8vIE1vcmUgb24gaG93IHRvIHNldCB1cCBzdG9yaWVzIGF0OiBodHRwczovL3N0b3J5Ym9vay5qcy5vcmcvZG9jcy9yZWFjdC93cml0aW5nLXN0b3JpZXMvaW50cm9kdWN0aW9uI2RlZmF1bHQtZXhwb3J0XG5jb25zdCBtZXRhOiBNZXRhPEJveGVkRXhwcmVzc2lvbkVkaXRvclByb3BzPiA9IHtcbiAgdGl0bGU6IFwiVXNlIGNhc2VzL0xvYW4gT3JpZ2luYXRpb25zL0J1cmVhdSBTdHJhdGVneSBEZWNpc2lvbiBTZXJ2aWNlL1ByZSBCdXJlYXUgQWZmb3JkYWJpbGl0eVwiLFxuICBjb21wb25lbnQ6IEJveGVkRXhwcmVzc2lvbkVkaXRvcixcbiAgaW5jbHVkZVN0b3JpZXM6IC9eW0EtWl0vXG59O1xuZXhwb3J0IGRlZmF1bHQgbWV0YTtcbnR5cGUgU3RvcnkgPSBTdG9yeU9iajxCb3hlZEV4cHJlc3Npb25FZGl0b3JTdG9yeUFyZ3M+O1xuZXhwb3J0IGNvbnN0IHByZUJ1cmVhdUFmZm9yZGFiaWxpdHlFeHByZXNzaW9uOiBOb3JtYWxpemVkPEJveGVkSW52b2NhdGlvbj4gPSB7XG4gIF9fJCRlbGVtZW50OiBcImludm9jYXRpb25cIixcbiAgXCJAX2lkXCI6IFwiXzFFODgwMDA5LTc3QjItNDMwOS1BRTJBLTg5NjRFMDU2MzZCMVwiLFxuICBcIkBfbGFiZWxcIjogXCJQcmUtYnVyZWF1IGFmZm9yZGFiaWxpdHlcIixcbiAgXCJAX3R5cGVSZWZcIjogRG1uQnVpbHRJbkRhdGFUeXBlLkJvb2xlYW4sXG4gIGV4cHJlc3Npb246IHtcbiAgICBfXyQkZWxlbWVudDogXCJsaXRlcmFsRXhwcmVzc2lvblwiLFxuICAgIFwiQF9pZFwiOiBcIl8wQjE1MTM1OS02M0Y2LTREQUItQkM4OC01M0YzNDQ0NkY5QzdcIixcbiAgICB0ZXh0OiB7XG4gICAgICBfXyQkdGV4dDogXCJmLkFmZm9yZGFiaWxpdHkgY2FsY3VsYXRpb25cIlxuICAgIH1cbiAgfSxcbiAgYmluZGluZzogW3tcbiAgICBwYXJhbWV0ZXI6IHtcbiAgICAgIFwiQF9pZFwiOiBcIl8yODgyREVFRi0wM0U5LTQzMUItOUU5Ni0wQjlFMDZEQkRCRkFcIixcbiAgICAgIFwiQF9uYW1lXCI6IFwiTW9udGhseSBJbmNvbWVcIixcbiAgICAgIFwiQF90eXBlUmVmXCI6IERtbkJ1aWx0SW5EYXRhVHlwZS5OdW1iZXJcbiAgICB9LFxuICAgIGV4cHJlc3Npb246IHtcbiAgICAgIFwiQF9pZFwiOiBcIl9GQUQxMjA4Ny1DMkI2LTQwNjAtODQwQi0wNzc5NzJEQ0NCODBcIixcbiAgICAgIFwiQF9sYWJlbFwiOiBcIk1vbnRobHkgSW5jb21lXCIsXG4gICAgICBfXyQkZWxlbWVudDogXCJsaXRlcmFsRXhwcmVzc2lvblwiLFxuICAgICAgdGV4dDoge1xuICAgICAgICBfXyQkdGV4dDogXCJBcHBsaWNhbnQgZGF0YS5Nb250aGx5LkluY29tZVwiXG4gICAgICB9LFxuICAgICAgXCJAX3R5cGVSZWZcIjogRG1uQnVpbHRJbkRhdGFUeXBlLk51bWJlclxuICAgIH1cbiAgfSwge1xuICAgIHBhcmFtZXRlcjoge1xuICAgICAgXCJAX2lkXCI6IFwiX0VDQ0M2NjFGLTk0ODktNDk0QS04MUE5LUNBREQxODA3NTIzNVwiLFxuICAgICAgXCJAX25hbWVcIjogXCJNb250aGx5IFJlcGF5bWVudHNcIixcbiAgICAgIFwiQF90eXBlUmVmXCI6IERtbkJ1aWx0SW5EYXRhVHlwZS5OdW1iZXJcbiAgICB9LFxuICAgIGV4cHJlc3Npb246IHtcbiAgICAgIFwiQF9pZFwiOiBcIl83OUYwRTcwNi02MDE4LTQ5QUItODZFQi03OEFDNTU1ODJDRTdcIixcbiAgICAgIF9fJCRlbGVtZW50OiBcImxpdGVyYWxFeHByZXNzaW9uXCIsXG4gICAgICB0ZXh0OiB7XG4gICAgICAgIF9fJCR0ZXh0OiBcIkFwcGxpY2FudCBkYXRhLk1vbnRobHkuUmVwYXltZW50c1wiXG4gICAgICB9LFxuICAgICAgXCJAX2xhYmVsXCI6IFwiTW9udGhseSBSZXBheW1lbnRzXCIsXG4gICAgICBcIkBfdHlwZVJlZlwiOiBEbW5CdWlsdEluRGF0YVR5cGUuTnVtYmVyXG4gICAgfVxuICB9LCB7XG4gICAgcGFyYW1ldGVyOiB7XG4gICAgICBcIkBfaWRcIjogXCJfNTBDQjE2NzEtOEE1MS00MEEyLUI4NkMtNUE1OUE3NkFEQTk5XCIsXG4gICAgICBcIkBfbmFtZVwiOiBcIk1vbnRobHkgRXhwZW5zZXNcIixcbiAgICAgIFwiQF90eXBlUmVmXCI6IERtbkJ1aWx0SW5EYXRhVHlwZS5OdW1iZXJcbiAgICB9LFxuICAgIGV4cHJlc3Npb246IHtcbiAgICAgIFwiQF9pZFwiOiBcIl9BNTQxQUE3RC0yREU4LTRFMDQtQjVDOS0wMzIwRUU3RDI2QkVcIixcbiAgICAgIF9fJCRlbGVtZW50OiBcImxpdGVyYWxFeHByZXNzaW9uXCIsXG4gICAgICB0ZXh0OiB7XG4gICAgICAgIF9fJCR0ZXh0OiBcIkFwcGxpY2FudCBkYXRhLk1vbnRobHkuRXhwZW5zZXNcIlxuICAgICAgfSxcbiAgICAgIFwiQF9sYWJlbFwiOiBcIk1vbnRobHkgRXhwZW5zZXNcIixcbiAgICAgIFwiQF90eXBlUmVmXCI6IERtbkJ1aWx0SW5EYXRhVHlwZS5OdW1iZXJcbiAgICB9XG4gIH0sIHtcbiAgICBwYXJhbWV0ZXI6IHtcbiAgICAgIFwiQF9pZFwiOiBcIl8xQjRBOTU3Mi1CNjdCLTRENTItOTRCMC1BOTkwQjMxMTQ4MTBcIixcbiAgICAgIFwiQF9uYW1lXCI6IFwiUmlzayBDYXRlZ29yeVwiLFxuICAgICAgXCJAX3R5cGVSZWZcIjogXCJ0LkJ1cmVhdVJpc2tDYXRlZ29yeVwiXG4gICAgfSxcbiAgICBleHByZXNzaW9uOiB7XG4gICAgICBcIkBfaWRcIjogXCJfOUMzQzZFRDUtRjg3NS00QzVCLUE3QzEtNzZEMTBEQzJFNURGXCIsXG4gICAgICBfXyQkZWxlbWVudDogXCJsaXRlcmFsRXhwcmVzc2lvblwiLFxuICAgICAgdGV4dDoge1xuICAgICAgICBfXyQkdGV4dDogXCJQcmUtYnVyZWF1IHJpc2sgY2F0ZWdvcnlcIlxuICAgICAgfSxcbiAgICAgIFwiQF9sYWJlbFwiOiBcIlJpc2sgQ2F0ZWdvcnlcIixcbiAgICAgIFwiQF90eXBlUmVmXCI6IFwidC5CdXJlYXVSaXNrQ2F0ZWdvcnlcIlxuICAgIH1cbiAgfSwge1xuICAgIHBhcmFtZXRlcjoge1xuICAgICAgXCJAX2lkXCI6IFwiXzZDODMxQzY3LUY4MEMtNDRGQy1CNEI2LTU1RkQ0QkFFMUE3OVwiLFxuICAgICAgXCJAX25hbWVcIjogXCJSZXF1aXJlZCBNb250aGx5IEluc3RhbGxtZW50XCIsXG4gICAgICBcIkBfdHlwZVJlZlwiOiBEbW5CdWlsdEluRGF0YVR5cGUuTnVtYmVyXG4gICAgfSxcbiAgICBleHByZXNzaW9uOiB7XG4gICAgICBfXyQkZWxlbWVudDogXCJsaXRlcmFsRXhwcmVzc2lvblwiLFxuICAgICAgXCJAX2lkXCI6IFwiXzY1NjExMEU5LUEyMzQtNDZBNC1CNENGLTdGRDY5MUY4RjU2NVwiLFxuICAgICAgXCJAX2xhYmVsXCI6IFwiUmVxdWlyZWQgTW9udGhseSBJbnN0YWxsbWVudFwiLFxuICAgICAgXCJAX3R5cGVSZWZcIjogRG1uQnVpbHRJbkRhdGFUeXBlLk51bWJlcixcbiAgICAgIHRleHQ6IHtcbiAgICAgICAgX18kJHRleHQ6IFwiUmVxdWlyZWQgbW9udGhseSBpbnN0YWxsbWVudFwiXG4gICAgICB9XG4gICAgfVxuICB9XVxufTtcbmV4cG9ydCBjb25zdCBwcmVCdXJlYXVBZmZvcmRhYmlsaXR5V2lkdGhzQnlJZCA9IHtcbiAgXCJfMUU4ODAwMDktNzdCMi00MzA5LUFFMkEtODk2NEUwNTYzNkIxXCI6IFsxODAsIDMwMF0sXG4gIFwiX0ZBRDEyMDg3LUMyQjYtNDA2MC04NDBCLTA3Nzk3MkRDQ0I4MFwiOiBbMzAwXSxcbiAgXCJfNzlGMEU3MDYtNjAxOC00OUFCLTg2RUItNzhBQzU1NTgyQ0U3XCI6IFszMDBdLFxuICBcIl9BNTQxQUE3RC0yREU4LTRFMDQtQjVDOS0wMzIwRUU3RDI2QkVcIjogWzMwMF0sXG4gIFwiXzlDM0M2RUQ1LUY4NzUtNEM1Qi1BN0MxLTc2RDEwREMyRTVERlwiOiBbMzAwXSxcbiAgXCJfNjU2MTEwRTktQTIzNC00NkE0LUI0Q0YtN0ZENjkxRjhGNTY1XCI6IFszMDBdXG59O1xuXG4vLyBNb3JlIG9uIHdyaXRpbmcgc3RvcmllcyB3aXRoIGFyZ3M6IGh0dHBzOi8vc3Rvcnlib29rLmpzLm9yZy9kb2NzL3JlYWN0L3dyaXRpbmctc3Rvcmllcy9hcmdzXG5leHBvcnQgY29uc3QgRXhwcmVzc2lvbjogU3RvcnkgPSB7XG4gIHJlbmRlcjogYXJncyA9PiBCb3hlZEV4cHJlc3Npb25FZGl0b3JTdG9yeSgpLFxuICBhcmdzOiB7XG4gICAgZXhwcmVzc2lvbkhvbGRlcklkOiBcIl8wMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDBcIixcbiAgICBleHByZXNzaW9uOiBwcmVCdXJlYXVBZmZvcmRhYmlsaXR5RXhwcmVzc2lvbixcbiAgICB3aWR0aHNCeUlkOiBwcmVCdXJlYXVBZmZvcmRhYmlsaXR5V2lkdGhzQnlJZCxcbiAgICBkYXRhVHlwZXM6IGxvYW5PcmlnaW5hdGlvbnNEYXRhVHlwZXMsXG4gICAgYmVlR3d0U2VydmljZSxcbiAgICBwbW1sRG9jdW1lbnRzLFxuICAgIGlzUmVzZXRTdXBwb3J0ZWRPblJvb3RFeHByZXNzaW9uOiBmYWxzZVxuICB9XG59O1xuRXhwcmVzc2lvbi5wYXJhbWV0ZXJzID0ge1xuICAuLi5FeHByZXNzaW9uLnBhcmFtZXRlcnMsXG4gIGRvY3M6IHtcbiAgICAuLi5FeHByZXNzaW9uLnBhcmFtZXRlcnM/LmRvY3MsXG4gICAgc291cmNlOiB7XG4gICAgICBvcmlnaW5hbFNvdXJjZTogXCJ7XFxuICByZW5kZXI6IGFyZ3MgPT4gQm94ZWRFeHByZXNzaW9uRWRpdG9yU3RvcnkoKSxcXG4gIGFyZ3M6IHtcXG4gICAgZXhwcmVzc2lvbkhvbGRlcklkOiBcXFwiXzAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMFxcXCIsXFxuICAgIGV4cHJlc3Npb246IHByZUJ1cmVhdUFmZm9yZGFiaWxpdHlFeHByZXNzaW9uLFxcbiAgICB3aWR0aHNCeUlkOiBwcmVCdXJlYXVBZmZvcmRhYmlsaXR5V2lkdGhzQnlJZCxcXG4gICAgZGF0YVR5cGVzOiBsb2FuT3JpZ2luYXRpb25zRGF0YVR5cGVzLFxcbiAgICBiZWVHd3RTZXJ2aWNlLFxcbiAgICBwbW1sRG9jdW1lbnRzLFxcbiAgICBpc1Jlc2V0U3VwcG9ydGVkT25Sb290RXhwcmVzc2lvbjogZmFsc2VcXG4gIH1cXG59XCIsXG4gICAgICAuLi5FeHByZXNzaW9uLnBhcmFtZXRlcnM/LmRvY3M/LnNvdXJjZVxuICAgIH1cbiAgfVxufTsiLCIvKlxuICogTGljZW5zZWQgdG8gdGhlIEFwYWNoZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIChBU0YpIHVuZGVyIG9uZVxuICogb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuICBTZWUgdGhlIE5PVElDRSBmaWxlXG4gKiBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvblxuICogcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuICBUaGUgQVNGIGxpY2Vuc2VzIHRoaXMgZmlsZVxuICogdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZVxuICogXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4gKiB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZyxcbiAqIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXG4gKiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxuICogS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlXG4gKiBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zXG4gKiB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgeyBkYXRhVHlwZXMgfSBmcm9tIFwiLi4vLi4vYm94ZWRFeHByZXNzaW9uU3Rvcmllc1dyYXBwZXJcIjtcblxuZXhwb3J0IGNvbnN0IGxvYW5PcmlnaW5hdGlvbnNEYXRhVHlwZXMgPSBbXG4gIC4uLmRhdGFUeXBlcyxcbiAgeyBuYW1lOiBcInQuQWRqdWRpY2F0aW9uXCIsIGlzQ3VzdG9tOiB0cnVlIH0sXG4gIHsgbmFtZTogXCJ0LkFwcGxpY2FudERhdGFcIiwgaXNDdXN0b206IHRydWUgfSxcbiAgeyBuYW1lOiBcInQuQnVyZWF1Q2FsbFR5cGVcIiwgaXNDdXN0b206IHRydWUgfSxcbiAgeyBuYW1lOiBcInQuQnVyZWF1RGF0YVwiLCBpc0N1c3RvbTogdHJ1ZSB9LFxuICB7IG5hbWU6IFwidC5CdXJlYXVSaXNrQ2F0ZWdvcnlcIiwgaXNDdXN0b206IHRydWUgfSxcbiAgeyBuYW1lOiBcInQuRWxpZ2liaWxpdHlcIiwgaXNDdXN0b206IHRydWUgfSxcbiAgeyBuYW1lOiBcInQuRW1wbG95bWVudFN0YXR1c1wiLCBpc0N1c3RvbTogdHJ1ZSB9LFxuICB7IG5hbWU6IFwidC5NYXJpdGFsU3RhdHVzXCIsIGlzQ3VzdG9tOiB0cnVlIH0sXG4gIHsgbmFtZTogXCJ0LlByb2R1Y3RUeXBlXCIsIGlzQ3VzdG9tOiB0cnVlIH0sXG4gIHsgbmFtZTogXCJ0LlJlcXVlc3RlZFByb2R1Y1wiLCBpc0N1c3RvbTogdHJ1ZSB9LFxuICB7IG5hbWU6IFwidC5Sb3V0aW5nXCIsIGlzQ3VzdG9tOiB0cnVlIH0sXG4gIHsgbmFtZTogXCJ0LlN0cmF0ZWd5XCIsIGlzQ3VzdG9tOiB0cnVlIH0sXG5dO1xuIl0sIm5hbWVzIjpbIkRtbkJ1aWx0SW5EYXRhVHlwZSIsImJlZUd3dFNlcnZpY2UiLCJCb3hlZEV4cHJlc3Npb25FZGl0b3JTdG9yeSIsInBtbWxEb2N1bWVudHMiLCJCb3hlZEV4cHJlc3Npb25FZGl0b3IiLCJsb2FuT3JpZ2luYXRpb25zRGF0YVR5cGVzIiwibWV0YSIsInRpdGxlIiwiY29tcG9uZW50IiwiaW5jbHVkZVN0b3JpZXMiLCJwcmVCdXJlYXVBZmZvcmRhYmlsaXR5RXhwcmVzc2lvbiIsIl9fJCRlbGVtZW50IiwiQm9vbGVhbiIsImV4cHJlc3Npb24iLCJ0ZXh0IiwiX18kJHRleHQiLCJiaW5kaW5nIiwicGFyYW1ldGVyIiwiTnVtYmVyIiwicHJlQnVyZWF1QWZmb3JkYWJpbGl0eVdpZHRoc0J5SWQiLCJFeHByZXNzaW9uIiwicmVuZGVyIiwiYXJncyIsImV4cHJlc3Npb25Ib2xkZXJJZCIsIndpZHRoc0J5SWQiLCJkYXRhVHlwZXMiLCJpc1Jlc2V0U3VwcG9ydGVkT25Sb290RXhwcmVzc2lvbiIsInBhcmFtZXRlcnMiLCJkb2NzIiwiX2EiLCJzb3VyY2UiLCJvcmlnaW5hbFNvdXJjZSIsIl9jIiwiX2IiLCJfX25hbWVkRXhwb3J0c09yZGVyIiwibmFtZSIsImlzQ3VzdG9tIl0sInNvdXJjZVJvb3QiOiIifQ==