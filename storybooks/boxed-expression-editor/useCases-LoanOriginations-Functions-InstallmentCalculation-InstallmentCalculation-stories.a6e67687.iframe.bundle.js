"use strict";
(self["webpackChunk_kie_tools_boxed_expression_component"] = self["webpackChunk_kie_tools_boxed_expression_component"] || []).push([["useCases-LoanOriginations-Functions-InstallmentCalculation-InstallmentCalculation-stories"],{

/***/ "./stories/useCases/LoanOriginations/Functions/InstallmentCalculation/InstallmentCalculation.stories.tsx":
/*!***************************************************************************************************************!*\
  !*** ./stories/useCases/LoanOriginations/Functions/InstallmentCalculation/InstallmentCalculation.stories.tsx ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Expression: () => (/* binding */ Expression),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   installmentCalculationExpression: () => (/* binding */ installmentCalculationExpression),
/* harmony export */   installmentCalculationWidthsById: () => (/* binding */ installmentCalculationWidthsById)
/* harmony export */ });
/* harmony import */ var _src_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../src/api */ "./src/api/index.ts");
/* harmony import */ var _boxedExpressionStoriesWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../boxedExpressionStoriesWrapper */ "./stories/boxedExpressionStoriesWrapper.tsx");
/* harmony import */ var _src_BoxedExpressionEditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../src/BoxedExpressionEditor */ "./src/BoxedExpressionEditor.tsx");
/* harmony import */ var _boxedExpressionEditorBase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../boxedExpressionEditorBase */ "./stories/useCases/LoanOriginations/boxedExpressionEditorBase.tsx");
var _a, _b, _c;




const meta = {
  title: "Use cases/Loan Originations/Functions/Installment Calculation",
  component: _src_BoxedExpressionEditor__WEBPACK_IMPORTED_MODULE_2__.BoxedExpressionEditor,
  includeStories: /^[A-Z]/
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (meta);
const installmentCalculationExpression = {
  __$$element: "functionDefinition",
  "@_id": "_1E31E836-0609-4B4C-8FAF-389F774B1FE3",
  "@_label": "Installment calculation",
  "@_typeRef": _src_api__WEBPACK_IMPORTED_MODULE_0__.DmnBuiltInDataType.Number,
  formalParameter: [{
    "@_id": "_18DFB02E-9A87-44A2-AE57-997D6FE092B6",
    "@_name": "Product Type",
    "@_typeRef": "t.ProductType"
  }, {
    "@_id": "_907026CD-42C1-4731-B0B3-CC65A00180B1",
    "@_name": "Rate",
    "@_typeRef": _src_api__WEBPACK_IMPORTED_MODULE_0__.DmnBuiltInDataType.Number
  }, {
    "@_id": "_BF350457-ED49-42CD-A087-7E6CBCB0B0E0",
    "@_name": "Term",
    "@_typeRef": _src_api__WEBPACK_IMPORTED_MODULE_0__.DmnBuiltInDataType.Number
  }, {
    "@_id": "_F5D2470B-A1F2-4E40-98D7-DBCD286149FB",
    "@_name": "Amount",
    "@_typeRef": _src_api__WEBPACK_IMPORTED_MODULE_0__.DmnBuiltInDataType.Number
  }],
  "@_kind": _src_api__WEBPACK_IMPORTED_MODULE_0__.BoxedFunctionKind.Feel,
  expression: {
    __$$element: "context",
    "@_id": "_7A96C527-9D9E-4199-987B-A6A0C8308296",
    "@_label": "Feel Expression",
    contextEntry: [{
      "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_0__.generateUuid)(),
      variable: {
        "@_id": "_4AAFD507-11D2-4C6A-82E0-CBEEFA26FCE9",
        "@_name": "Monthly Fee",
        "@_typeRef": _src_api__WEBPACK_IMPORTED_MODULE_0__.DmnBuiltInDataType.Number
      },
      expression: {
        __$$element: "literalExpression",
        "@_id": "_6B635731-73ED-41B8-9D3C-72F174D68036",
        "@_label": "Monthly Fee",
        "@_typeRef": _src_api__WEBPACK_IMPORTED_MODULE_0__.DmnBuiltInDataType.Number,
        text: {
          __$$text: 'if Product Type = "Standard Loan"\nthen 20.00\nelse if Product Type = "Special Loan"\nthen 25.00\nelse null'
        }
      }
    }, {
      "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_0__.generateUuid)(),
      variable: {
        "@_id": "_1852E1E0-A49C-49D8-BB83-18D395672ECB",
        "@_name": "Monthly Repayments",
        "@_typeRef": _src_api__WEBPACK_IMPORTED_MODULE_0__.DmnBuiltInDataType.Number
      },
      expression: {
        __$$element: "literalExpression",
        "@_id": "_68539BE5-8AA0-4C5B-8AE6-D4A8F1118B7B",
        "@_label": "Monthly Repayments",
        "@_typeRef": _src_api__WEBPACK_IMPORTED_MODULE_0__.DmnBuiltInDataType.Number,
        text: {
          __$$text: "(Amount*Rate/12)/(1-(1+Rate/12)**-Term)"
        }
      }
    }, {
      "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_0__.generateUuid)(),
      expression: {
        __$$element: "literalExpression",
        "@_id": "_94444797-708D-418A-A22A-5CE6CAB35F6F",
        "@_label": "Result Expression",
        text: {
          __$$text: "Monthly Fee + Monthly Repayments"
        }
      }
    }]
  }
};
const installmentCalculationWidthsById = {
  "_1E31E836-0609-4B4C-8FAF-389F774B1FE3": [],
  "_7A96C527-9D9E-4199-987B-A6A0C8308296": [120, 320],
  "_6B635731-73ED-41B8-9D3C-72F174D68036": [320],
  "_68539BE5-8AA0-4C5B-8AE6-D4A8F1118B7B": [320],
  "_94444797-708D-418A-A22A-5CE6CAB35F6F": [320]
};
const Expression = {
  render: args => (0,_boxedExpressionStoriesWrapper__WEBPACK_IMPORTED_MODULE_1__.BoxedExpressionEditorStory)(),
  args: {
    expressionHolderId: "_00000000-0000-0000-0000-000000000000",
    expression: installmentCalculationExpression,
    widthsById: installmentCalculationWidthsById,
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
      originalSource: "{\n  render: args => BoxedExpressionEditorStory(),\n  args: {\n    expressionHolderId: \"_00000000-0000-0000-0000-000000000000\",\n    expression: installmentCalculationExpression,\n    widthsById: installmentCalculationWidthsById,\n    dataTypes: loanOriginationsDataTypes,\n    beeGwtService,\n    pmmlDocuments,\n    isResetSupportedOnRootExpression: false\n  }\n}",
      ...((_c = (_b = Expression.parameters) === null || _b === void 0 ? void 0 : _b.docs) === null || _c === void 0 ? void 0 : _c.source)
    }
  }
};
const __namedExportsOrder = ["installmentCalculationExpression", "installmentCalculationWidthsById", "Expression"];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlQ2FzZXMtTG9hbk9yaWdpbmF0aW9ucy1GdW5jdGlvbnMtSW5zdGFsbG1lbnRDYWxjdWxhdGlvbi1JbnN0YWxsbWVudENhbGN1bGF0aW9uLXN0b3JpZXMuYTZlNjc2ODcuaWZyYW1lLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUJ3SDtBQUU2QjtBQUN4QztBQUNqQztBQUc1RSxNQUFNUSxJQUFJLEdBQXFDO0VBQzdDQyxLQUFLLEVBQUUsK0RBQStEO0VBQ3RFQyxTQUFTLEVBQUVKLDZFQUFxQjtFQUNoQ0ssY0FBYyxFQUFFO0NBQ2pCO0FBQ0QsaUVBQWVILElBQUksRUFBQztBQUViLE1BQU1JLGdDQUFnQyxHQUE4QjtFQUN6RUMsV0FBVyxFQUFFLG9CQUFvQjtFQUNqQyxNQUFNLEVBQUUsdUNBQXVDO0VBQy9DLFNBQVMsRUFBRSx5QkFBeUI7RUFDcEMsV0FBVyxFQUFFYix3REFBa0IsQ0FBQ2MsTUFBTTtFQUN0Q0MsZUFBZSxFQUFFLENBQUM7SUFDaEIsTUFBTSxFQUFFLHVDQUF1QztJQUMvQyxRQUFRLEVBQUUsY0FBYztJQUN4QixXQUFXLEVBQUU7R0FDZCxFQUFFO0lBQ0QsTUFBTSxFQUFFLHVDQUF1QztJQUMvQyxRQUFRLEVBQUUsTUFBTTtJQUNoQixXQUFXLEVBQUVmLHdEQUFrQixDQUFDYztHQUNqQyxFQUFFO0lBQ0QsTUFBTSxFQUFFLHVDQUF1QztJQUMvQyxRQUFRLEVBQUUsTUFBTTtJQUNoQixXQUFXLEVBQUVkLHdEQUFrQixDQUFDYztHQUNqQyxFQUFFO0lBQ0QsTUFBTSxFQUFFLHVDQUF1QztJQUMvQyxRQUFRLEVBQUUsUUFBUTtJQUNsQixXQUFXLEVBQUVkLHdEQUFrQixDQUFDYztHQUNqQyxDQUFDO0VBQ0YsUUFBUSxFQUFFYix1REFBaUIsQ0FBQ2UsSUFBSTtFQUNoQ0MsVUFBVSxFQUFFO0lBQ1ZKLFdBQVcsRUFBRSxTQUFTO0lBQ3RCLE1BQU0sRUFBRSx1Q0FBdUM7SUFDL0MsU0FBUyxFQUFFLGlC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SSxDQUFFLEVBQ3hDO0VBQUVELElBQUksRUFBRSxzQkFBc0I7RUFBRUMsUUFBUSxFQUFFO0FBQUksQ0FBRSxFQUNoRDtFQUFFRCxJQUFJLEVBQUUsZUFBZTtFQUFFQyxRQUFRLEVBQUU7QUFBSSxDQUFFLEVBQ3pDO0VBQUVELElBQUksRUFBRSxvQkFBb0I7RUFBRUMsUUFBUSxFQUFFO0FBQUksQ0FBRSxFQUM5QztFQUFFRCxJQUFJLEVBQUUsaUJBQWlCO0VBQUVDLFFBQVEsRUFBRTtBQUFJLENBQUUsRUFDM0M7RUFBRUQsSUFBSSxFQUFFLGVBQWU7RUFBRUMsUUFBUSxFQUFFO0FBQUksQ0FBRSxFQUN6QztFQUFFRCxJQUFJLEVBQUUsbUJBQW1CO0VBQUVDLFFBQVEsRUFBRTtBQUFJLENBQUUsRUFDN0M7RUFBRUQsSUFBSSxFQUFFLFdBQVc7RUFBRUMsUUFBUSxFQUFFO0FBQUksQ0FBRSxFQUNyQztFQUFFRCxJQUFJLEVBQUUsWUFBWTtFQUFFQyxRQUFRLEVBQUU7QUFBSSxDQUFFLENBQ3ZDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGtpZS10b29scy9ib3hlZC1leHByZXNzaW9uLWNvbXBvbmVudC8uL3N0b3JpZXMvdXNlQ2FzZXMvTG9hbk9yaWdpbmF0aW9ucy9GdW5jdGlvbnMvSW5zdGFsbG1lbnRDYWxjdWxhdGlvbi9JbnN0YWxsbWVudENhbGN1bGF0aW9uLnN0b3JpZXMudHN4Iiwid2VicGFjazovL0BraWUtdG9vbHMvYm94ZWQtZXhwcmVzc2lvbi1jb21wb25lbnQvLi9zdG9yaWVzL3VzZUNhc2VzL0xvYW5PcmlnaW5hdGlvbnMvYm94ZWRFeHByZXNzaW9uRWRpdG9yQmFzZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIExpY2Vuc2VkIHRvIHRoZSBBcGFjaGUgU29mdHdhcmUgRm91bmRhdGlvbiAoQVNGKSB1bmRlciBvbmVcbiAqIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiAgU2VlIHRoZSBOT1RJQ0UgZmlsZVxuICogZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb25cbiAqIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLiAgVGhlIEFTRiBsaWNlbnNlcyB0aGlzIGZpbGVcbiAqIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGVcbiAqIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuICogd2l0aCB0aGUgTGljZW5zZS4gIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsXG4gKiBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxuICogXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcbiAqIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZVxuICogc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9uc1xuICogdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgRG1uQnVpbHRJbkRhdGFUeXBlLCBCb3hlZEZ1bmN0aW9uLCBCb3hlZEZ1bmN0aW9uS2luZCwgTm9ybWFsaXplZCwgZ2VuZXJhdGVVdWlkIH0gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL3NyYy9hcGlcIjtcbmltcG9ydCB0eXBlIHsgTWV0YSwgU3RvcnlPYmogfSBmcm9tIFwiQHN0b3J5Ym9vay9yZWFjdFwiO1xuaW1wb3J0IHsgYmVlR3d0U2VydmljZSwgQm94ZWRFeHByZXNzaW9uRWRpdG9yU3RvcnksIEJveGVkRXhwcmVzc2lvbkVkaXRvclN0b3J5QXJncywgcG1tbERvY3VtZW50cyB9IGZyb20gXCIuLi8uLi8uLi8uLi9ib3hlZEV4cHJlc3Npb25TdG9yaWVzV3JhcHBlclwiO1xuaW1wb3J0IHsgQm94ZWRFeHByZXNzaW9uRWRpdG9yLCBCb3hlZEV4cHJlc3Npb25FZGl0b3JQcm9wcyB9IGZyb20gXCIuLi8uLi8uLi8uLi8uLi9zcmMvQm94ZWRFeHByZXNzaW9uRWRpdG9yXCI7XG5pbXBvcnQgeyBsb2FuT3JpZ2luYXRpb25zRGF0YVR5cGVzIH0gZnJvbSBcIi4uLy4uL2JveGVkRXhwcmVzc2lvbkVkaXRvckJhc2VcIjtcblxuLy8gTW9yZSBvbiBob3cgdG8gc2V0IHVwIHN0b3JpZXMgYXQ6IGh0dHBzOi8vc3Rvcnlib29rLmpzLm9yZy9kb2NzL3JlYWN0L3dyaXRpbmctc3Rvcmllcy9pbnRyb2R1Y3Rpb24jZGVmYXVsdC1leHBvcnRcbmNvbnN0IG1ldGE6IE1ldGE8Qm94ZWRFeHByZXNzaW9uRWRpdG9yUHJvcHM+ID0ge1xuICB0aXRsZTogXCJVc2UgY2FzZXMvTG9hbiBPcmlnaW5hdGlvbnMvRnVuY3Rpb25zL0luc3RhbGxtZW50IENhbGN1bGF0aW9uXCIsXG4gIGNvbXBvbmVudDogQm94ZWRFeHByZXNzaW9uRWRpdG9yLFxuICBpbmNsdWRlU3RvcmllczogL15bQS1aXS9cbn07XG5leHBvcnQgZGVmYXVsdCBtZXRhO1xudHlwZSBTdG9yeSA9IFN0b3J5T2JqPEJveGVkRXhwcmVzc2lvbkVkaXRvclN0b3J5QXJncz47XG5leHBvcnQgY29uc3QgaW5zdGFsbG1lbnRDYWxjdWxhdGlvbkV4cHJlc3Npb246IE5vcm1hbGl6ZWQ8Qm94ZWRGdW5jdGlvbj4gPSB7XG4gIF9fJCRlbGVtZW50OiBcImZ1bmN0aW9uRGVmaW5pdGlvblwiLFxuICBcIkBfaWRcIjogXCJfMUUzMUU4MzYtMDYwOS00QjRDLThGQUYtMzg5Rjc3NEIxRkUzXCIsXG4gIFwiQF9sYWJlbFwiOiBcIkluc3RhbGxtZW50IGNhbGN1bGF0aW9uXCIsXG4gIFwiQF90eXBlUmVmXCI6IERtbkJ1aWx0SW5EYXRhVHlwZS5OdW1iZXIsXG4gIGZvcm1hbFBhcmFtZXRlcjogW3tcbiAgICBcIkBfaWRcIjogXCJfMThERkIwMkUtOUE4Ny00NEEyLUFFNTctOTk3RDZGRTA5MkI2XCIsXG4gICAgXCJAX25hbWVcIjogXCJQcm9kdWN0IFR5cGVcIixcbiAgICBcIkBfdHlwZVJlZlwiOiBcInQuUHJvZHVjdFR5cGVcIlxuICB9LCB7XG4gICAgXCJAX2lkXCI6IFwiXzkwNzAyNkNELTQyQzEtNDczMS1CMEIzLUNDNjVBMDAxODBCMVwiLFxuICAgIFwiQF9uYW1lXCI6IFwiUmF0ZVwiLFxuICAgIFwiQF90eXBlUmVmXCI6IERtbkJ1aWx0SW5EYXRhVHlwZS5OdW1iZXJcbiAgfSwge1xuICAgIFwiQF9pZFwiOiBcIl9CRjM1MDQ1Ny1FRDQ5LTQyQ0QtQTA4Ny03RTZDQkNCMEIwRTBcIixcbiAgICBcIkBfbmFtZVwiOiBcIlRlcm1cIixcbiAgICBcIkBfdHlwZVJlZlwiOiBEbW5CdWlsdEluRGF0YVR5cGUuTnVtYmVyXG4gIH0sIHtcbiAgICBcIkBfaWRcIjogXCJfRjVEMjQ3MEItQTFGMi00RTQwLTk4RDctREJDRDI4NjE0OUZCXCIsXG4gICAgXCJAX25hbWVcIjogXCJBbW91bnRcIixcbiAgICBcIkBfdHlwZVJlZlwiOiBEbW5CdWlsdEluRGF0YVR5cGUuTnVtYmVyXG4gIH1dLFxuICBcIkBfa2luZFwiOiBCb3hlZEZ1bmN0aW9uS2luZC5GZWVsLFxuICBleHByZXNzaW9uOiB7XG4gICAgX18kJGVsZW1lbnQ6IFwiY29udGV4dFwiLFxuICAgIFwiQF9pZFwiOiBcIl83QTk2QzUyNy05RDlFLTQxOTktOTg3Qi1BNkEwQzgzMDgyOTZcIixcbiAgICBcIkBfbGFiZWxcIjogXCJGZWVsIEV4cHJlc3Npb25cIixcbiAgICBjb250ZXh0RW50cnk6IFt7XG4gICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICB2YXJpYWJsZToge1xuICAgICAgICBcIkBfaWRcIjogXCJfNEFBRkQ1MDctMTFEMi00QzZBLTgyRTAtQ0JFRUZBMjZGQ0U5XCIsXG4gICAgICAgIFwiQF9uYW1lXCI6IFwiTW9udGhseSBGZWVcIixcbiAgICAgICAgXCJAX3R5cGVSZWZcIjogRG1uQnVpbHRJbkRhdGFUeXBlLk51bWJlclxuICAgICAgfSxcbiAgICAgIGV4cHJlc3Npb246IHtcbiAgICAgICAgX18kJGVsZW1lbnQ6IFwibGl0ZXJhbEV4cHJlc3Npb25cIixcbiAgICAgICAgXCJAX2lkXCI6IFwiXzZCNjM1NzMxLTczRUQtNDFCOC05RDNDLTcyRjE3NEQ2ODAzNlwiLFxuICAgICAgICBcIkBfbGFiZWxcIjogXCJNb250aGx5IEZlZVwiLFxuICAgICAgICBcIkBfdHlwZVJlZlwiOiBEbW5CdWlsdEluRGF0YVR5cGUuTnVtYmVyLFxuICAgICAgICB0ZXh0OiB7XG4gICAgICAgICAgX18kJHRleHQ6ICdpZiBQcm9kdWN0IFR5cGUgPSBcIlN0YW5kYXJkIExvYW5cIlxcbnRoZW4gMjAuMDBcXG5lbHNlIGlmIFByb2R1Y3QgVHlwZSA9IFwiU3BlY2lhbCBMb2FuXCJcXG50aGVuIDI1LjAwXFxuZWxzZSBudWxsJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgdmFyaWFibGU6IHtcbiAgICAgICAgXCJAX2lkXCI6IFwiXzE4NTJFMUUwLUE0OUMtNDlEOC1CQjgzLTE4RDM5NTY3MkVDQlwiLFxuICAgICAgICBcIkBfbmFtZVwiOiBcIk1vbnRobHkgUmVwYXltZW50c1wiLFxuICAgICAgICBcIkBfdHlwZVJlZlwiOiBEbW5CdWlsdEluRGF0YVR5cGUuTnVtYmVyXG4gICAgICB9LFxuICAgICAgZXhwcmVzc2lvbjoge1xuICAgICAgICBfXyQkZWxlbWVudDogXCJsaXRlcmFsRXhwcmVzc2lvblwiLFxuICAgICAgICBcIkBfaWRcIjogXCJfNjg1MzlCRTUtOEFBMC00QzVCLThBRTYtRDRBOEYxMTE4QjdCXCIsXG4gICAgICAgIFwiQF9sYWJlbFwiOiBcIk1vbnRobHkgUmVwYXltZW50c1wiLFxuICAgICAgICBcIkBfdHlwZVJlZlwiOiBEbW5CdWlsdEluRGF0YVR5cGUuTnVtYmVyLFxuICAgICAgICB0ZXh0OiB7XG4gICAgICAgICAgX18kJHRleHQ6IFwiKEFtb3VudCpSYXRlLzEyKS8oMS0oMStSYXRlLzEyKSoqLVRlcm0pXCJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICAgIGV4cHJlc3Npb246IHtcbiAgICAgICAgX18kJGVsZW1lbnQ6IFwibGl0ZXJhbEV4cHJlc3Npb25cIixcbiAgICAgICAgXCJAX2lkXCI6IFwiXzk0NDQ0Nzk3LTcwOEQtNDE4QS1BMjJBLTVDRTZDQUIzNUY2RlwiLFxuICAgICAgICBcIkBfbGFiZWxcIjogXCJSZXN1bHQgRXhwcmVzc2lvblwiLFxuICAgICAgICB0ZXh0OiB7XG4gICAgICAgICAgX18kJHRleHQ6IFwiTW9udGhseSBGZWUgKyBNb250aGx5IFJlcGF5bWVudHNcIlxuICAgICAgICB9XG4gICAgICB9XG4gICAgfV1cbiAgfVxufTtcbmV4cG9ydCBjb25zdCBpbnN0YWxsbWVudENhbGN1bGF0aW9uV2lkdGhzQnlJZCA9IHtcbiAgXCJfMUUzMUU4MzYtMDYwOS00QjRDLThGQUYtMzg5Rjc3NEIxRkUzXCI6IFtdLFxuICBcIl83QTk2QzUyNy05RDlFLTQxOTktOTg3Qi1BNkEwQzgzMDgyOTZcIjogWzEyMCwgMzIwXSxcbiAgXCJfNkI2MzU3MzEtNzNFRC00MUI4LTlEM0MtNzJGMTc0RDY4MDM2XCI6IFszMjBdLFxuICBcIl82ODUzOUJFNS04QUEwLTRDNUItOEFFNi1ENEE4RjExMThCN0JcIjogWzMyMF0sXG4gIFwiXzk0NDQ0Nzk3LTcwOEQtNDE4QS1BMjJBLTVDRTZDQUIzNUY2RlwiOiBbMzIwXVxufTtcblxuLy8gTW9yZSBvbiB3cml0aW5nIHN0b3JpZXMgd2l0aCBhcmdzOiBodHRwczovL3N0b3J5Ym9vay5qcy5vcmcvZG9jcy9yZWFjdC93cml0aW5nLXN0b3JpZXMvYXJnc1xuZXhwb3J0IGNvbnN0IEV4cHJlc3Npb246IFN0b3J5ID0ge1xuICByZW5kZXI6IGFyZ3MgPT4gQm94ZWRFeHByZXNzaW9uRWRpdG9yU3RvcnkoKSxcbiAgYXJnczoge1xuICAgIGV4cHJlc3Npb25Ib2xkZXJJZDogXCJfMDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwXCIsXG4gICAgZXhwcmVzc2lvbjogaW5zdGFsbG1lbnRDYWxjdWxhdGlvbkV4cHJlc3Npb24sXG4gICAgd2lkdGhzQnlJZDogaW5zdGFsbG1lbnRDYWxjdWxhdGlvbldpZHRoc0J5SWQsXG4gICAgZGF0YVR5cGVzOiBsb2FuT3JpZ2luYXRpb25zRGF0YVR5cGVzLFxuICAgIGJlZUd3dFNlcnZpY2UsXG4gICAgcG1tbERvY3VtZW50cyxcbiAgICBpc1Jlc2V0U3VwcG9ydGVkT25Sb290RXhwcmVzc2lvbjogZmFsc2VcbiAgfVxufTtcbkV4cHJlc3Npb24ucGFyYW1ldGVycyA9IHtcbiAgLi4uRXhwcmVzc2lvbi5wYXJhbWV0ZXJzLFxuICBkb2NzOiB7XG4gICAgLi4uRXhwcmVzc2lvbi5wYXJhbWV0ZXJzPy5kb2NzLFxuICAgIHNvdXJjZToge1xuICAgICAgb3JpZ2luYWxTb3VyY2U6IFwie1xcbiAgcmVuZGVyOiBhcmdzID0+IEJveGVkRXhwcmVzc2lvbkVkaXRvclN0b3J5KCksXFxuICBhcmdzOiB7XFxuICAgIGV4cHJlc3Npb25Ib2xkZXJJZDogXFxcIl8wMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDBcXFwiLFxcbiAgICBleHByZXNzaW9uOiBpbnN0YWxsbWVudENhbGN1bGF0aW9uRXhwcmVzc2lvbixcXG4gICAgd2lkdGhzQnlJZDogaW5zdGFsbG1lbnRDYWxjdWxhdGlvbldpZHRoc0J5SWQsXFxuICAgIGRhdGFUeXBlczogbG9hbk9yaWdpbmF0aW9uc0RhdGFUeXBlcyxcXG4gICAgYmVlR3d0U2VydmljZSxcXG4gICAgcG1tbERvY3VtZW50cyxcXG4gICAgaXNSZXNldFN1cHBvcnRlZE9uUm9vdEV4cHJlc3Npb246IGZhbHNlXFxuICB9XFxufVwiLFxuICAgICAgLi4uRXhwcmVzc2lvbi5wYXJhbWV0ZXJzPy5kb2NzPy5zb3VyY2VcbiAgICB9XG4gIH1cbn07IiwiLypcbiAqIExpY2Vuc2VkIHRvIHRoZSBBcGFjaGUgU29mdHdhcmUgRm91bmRhdGlvbiAoQVNGKSB1bmRlciBvbmVcbiAqIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiAgU2VlIHRoZSBOT1RJQ0UgZmlsZVxuICogZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb25cbiAqIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLiAgVGhlIEFTRiBsaWNlbnNlcyB0aGlzIGZpbGVcbiAqIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGVcbiAqIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuICogd2l0aCB0aGUgTGljZW5zZS4gIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsXG4gKiBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxuICogXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcbiAqIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZVxuICogc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9uc1xuICogdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgZGF0YVR5cGVzIH0gZnJvbSBcIi4uLy4uL2JveGVkRXhwcmVzc2lvblN0b3JpZXNXcmFwcGVyXCI7XG5cbmV4cG9ydCBjb25zdCBsb2FuT3JpZ2luYXRpb25zRGF0YVR5cGVzID0gW1xuICAuLi5kYXRhVHlwZXMsXG4gIHsgbmFtZTogXCJ0LkFkanVkaWNhdGlvblwiLCBpc0N1c3RvbTogdHJ1ZSB9LFxuICB7IG5hbWU6IFwidC5BcHBsaWNhbnREYXRhXCIsIGlzQ3VzdG9tOiB0cnVlIH0sXG4gIHsgbmFtZTogXCJ0LkJ1cmVhdUNhbGxUeXBlXCIsIGlzQ3VzdG9tOiB0cnVlIH0sXG4gIHsgbmFtZTogXCJ0LkJ1cmVhdURhdGFcIiwgaXNDdXN0b206IHRydWUgfSxcbiAgeyBuYW1lOiBcInQuQnVyZWF1Umlza0NhdGVnb3J5XCIsIGlzQ3VzdG9tOiB0cnVlIH0sXG4gIHsgbmFtZTogXCJ0LkVsaWdpYmlsaXR5XCIsIGlzQ3VzdG9tOiB0cnVlIH0sXG4gIHsgbmFtZTogXCJ0LkVtcGxveW1lbnRTdGF0dXNcIiwgaXNDdXN0b206IHRydWUgfSxcbiAgeyBuYW1lOiBcInQuTWFyaXRhbFN0YXR1c1wiLCBpc0N1c3RvbTogdHJ1ZSB9LFxuICB7IG5hbWU6IFwidC5Qcm9kdWN0VHlwZVwiLCBpc0N1c3RvbTogdHJ1ZSB9LFxuICB7IG5hbWU6IFwidC5SZXF1ZXN0ZWRQcm9kdWNcIiwgaXNDdXN0b206IHRydWUgfSxcbiAgeyBuYW1lOiBcInQuUm91dGluZ1wiLCBpc0N1c3RvbTogdHJ1ZSB9LFxuICB7IG5hbWU6IFwidC5TdHJhdGVneVwiLCBpc0N1c3RvbTogdHJ1ZSB9LFxuXTtcbiJdLCJuYW1lcyI6WyJEbW5CdWlsdEluRGF0YVR5cGUiLCJCb3hlZEZ1bmN0aW9uS2luZCIsImdlbmVyYXRlVXVpZCIsImJlZUd3dFNlcnZpY2UiLCJCb3hlZEV4cHJlc3Npb25FZGl0b3JTdG9yeSIsInBtbWxEb2N1bWVudHMiLCJCb3hlZEV4cHJlc3Npb25FZGl0b3IiLCJsb2FuT3JpZ2luYXRpb25zRGF0YVR5cGVzIiwibWV0YSIsInRpdGxlIiwiY29tcG9uZW50IiwiaW5jbHVkZVN0b3JpZXMiLCJpbnN0YWxsbWVudENhbGN1bGF0aW9uRXhwcmVzc2lvbiIsIl9fJCRlbGVtZW50IiwiTnVtYmVyIiwiZm9ybWFsUGFyYW1ldGVyIiwiRmVlbCIsImV4cHJlc3Npb24iLCJjb250ZXh0RW50cnkiLCJ2YXJpYWJsZSIsInRleHQiLCJfXyQkdGV4dCIsImluc3RhbGxtZW50Q2FsY3VsYXRpb25XaWR0aHNCeUlkIiwiRXhwcmVzc2lvbiIsInJlbmRlciIsImFyZ3MiLCJleHByZXNzaW9uSG9sZGVySWQiLCJ3aWR0aHNCeUlkIiwiZGF0YVR5cGVzIiwiaXNSZXNldFN1cHBvcnRlZE9uUm9vdEV4cHJlc3Npb24iLCJwYXJhbWV0ZXJzIiwiZG9jcyIsIl9hIiwic291cmNlIiwib3JpZ2luYWxTb3VyY2UiLCJfYyIsIl9iIiwiX19uYW1lZEV4cG9ydHNPcmRlciIsIm5hbWUiLCJpc0N1c3RvbSJdLCJzb3VyY2VSb290IjoiIn0=