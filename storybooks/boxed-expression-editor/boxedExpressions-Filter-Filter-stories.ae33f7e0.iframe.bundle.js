"use strict";
(self["webpackChunk_kie_tools_boxed_expression_component"] = self["webpackChunk_kie_tools_boxed_expression_component"] || []).push([["boxedExpressions-Filter-Filter-stories"],{

/***/ "./stories/boxedExpressions/Filter/Filter.stories.tsx":
/*!************************************************************!*\
  !*** ./stories/boxedExpressions/Filter/Filter.stories.tsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Base: () => (/* binding */ Base),
/* harmony export */   Nested: () => (/* binding */ Nested),
/* harmony export */   Readonly: () => (/* binding */ Readonly),
/* harmony export */   RebookedFlights: () => (/* binding */ RebookedFlights),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _src_BoxedExpressionEditor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/BoxedExpressionEditor */ "./src/BoxedExpressionEditor.tsx");
/* harmony import */ var _boxedExpressionStoriesWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../boxedExpressionStoriesWrapper */ "./stories/boxedExpressionStoriesWrapper.tsx");
/* harmony import */ var _src_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../src/api */ "./src/api/index.ts");
/* harmony import */ var _misc_Empty_EmptyExpression_stories__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../misc/Empty/EmptyExpression.stories */ "./stories/misc/Empty/EmptyExpression.stories.tsx");
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;




const meta = {
  title: "Boxed Expressions/Filter",
  component: _src_BoxedExpressionEditor__WEBPACK_IMPORTED_MODULE_0__.BoxedExpressionEditor,
  includeStories: /^[A-Z]/
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (meta);
const Base = {
  render: args => (0,_boxedExpressionStoriesWrapper__WEBPACK_IMPORTED_MODULE_1__.BoxedExpressionEditorStory)(),
  parameters: {
    exclude: ["dataTypes", "beeGwtService", "pmmlDocuments"]
  },
  args: {
    ..._misc_Empty_EmptyExpression_stories__WEBPACK_IMPORTED_MODULE_3__.Base.args,
    expression: {
      __$$element: "filter",
      "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_2__.generateUuid)(),
      "@_label": "Expression Name",
      in: {
        "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_2__.generateUuid)(),
        expression: undefined
      },
      match: {
        "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_2__.generateUuid)(),
        expression: undefined
      }
    }
  }
};
const Readonly = {
  render: args => (0,_boxedExpressionStoriesWrapper__WEBPACK_IMPORTED_MODULE_1__.BoxedExpressionEditorStory)(),
  parameters: {
    exclude: ["dataTypes", "beeGwtService", "pmmlDocuments"]
  },
  args: {
    ..._misc_Empty_EmptyExpression_stories__WEBPACK_IMPORTED_MODULE_3__.Base.args,
    expression: {
      __$$element: "filter",
      "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_2__.generateUuid)(),
      "@_label": "Expression Name",
      in: {
        "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_2__.generateUuid)(),
        expression: {
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_2__.generateUuid)(),
          __$$element: "literalExpression",
          text: {
            __$$text: "['read', 'only']"
          }
        }
      },
      match: {
        "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_2__.generateUuid)(),
        expression: {
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_2__.generateUuid)(),
          __$$element: "literalExpression",
          text: {
            __$$text: "readOnlyTest(itemReadOnly)"
          }
        }
      }
    },
    isReadOnly: true
  }
};
const RebookedFlights = {
  render: args => (0,_boxedExpressionStoriesWrapper__WEBPACK_IMPORTED_MODULE_1__.BoxedExpressionEditorStory)(),
  parameters: {
    exclude: ["dataTypes", "beeGwtService", "pmmlDocuments"]
  },
  args: {
    ..._misc_Empty_EmptyExpression_stories__WEBPACK_IMPORTED_MODULE_3__.Base.args,
    expression: {
      __$$element: "filter",
      "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_2__.generateUuid)(),
      "@_label": "Rebooked Flights",
      "@_typeRef": "tFlights",
      in: {
        "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_2__.generateUuid)(),
        expression: {
          __$$element: "literalExpression",
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_2__.generateUuid)(),
          text: {
            __$$text: "Passengers"
          }
        }
      },
      match: {
        "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_2__.generateUuid)(),
        expression: {
          __$$element: "literalExpression",
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_2__.generateUuid)(),
          text: {
            __$$text: "item.Flight Number = Flight.Flight Number"
          }
        }
      }
    }
  }
};
const Nested = {
  render: args => (0,_boxedExpressionStoriesWrapper__WEBPACK_IMPORTED_MODULE_1__.BoxedExpressionEditorStory)(),
  parameters: {
    exclude: ["dataTypes", "beeGwtService", "pmmlDocuments"]
  },
  args: {
    ..._misc_Empty_EmptyExpression_stories__WEBPACK_IMPORTED_MODULE_3__.Base.args,
    expression: {
      __$$element: "context",
      "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_2__.generateUuid)(),
      "@_label": "Expression Name",
      contextEntry: [{
        "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_2__.generateUuid)(),
        variable: {
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_2__.generateUuid)(),
          "@_name": "ContextEntry-1"
        },
        expression: {
          __$$element: "filter",
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_2__.generateUuid)(),
          "@_label": "Expression Name",
          in: {
            "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_2__.generateUuid)(),
            expression: {
              __$$element: "literalExpression",
              "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_2__.generateUuid)()
            }
          },
          match: {
            "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_2__.generateUuid)(),
            expression: {
              __$$element: "literalExpression",
              "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_2__.generateUuid)()
            }
          }
        }
      }]
    }
  }
};
Base.parameters = {
  ...Base.parameters,
  docs: {
    ...((_a = Base.parameters) === null || _a === void 0 ? void 0 : _a.docs),
    source: {
      originalSource: "{\n  render: args => BoxedExpressionEditorStory(),\n  parameters: {\n    exclude: [\"dataTypes\", \"beeGwtService\", \"pmmlDocuments\"]\n  },\n  args: {\n    ...EmptyExpression.args,\n    expression: {\n      __$$element: \"filter\",\n      \"@_id\": generateUuid(),\n      \"@_label\": \"Expression Name\",\n      in: {\n        \"@_id\": generateUuid(),\n        expression: undefined! // SPEC DISCREPANCY: Starting without an expression gives users the ability to select the expression type.\n      },\n      match: {\n        \"@_id\": generateUuid(),\n        expression: undefined! // SPEC DISCREPANCY: Starting without an expression gives users the ability to select the expression type.\n      }\n    }\n  }\n}",
      ...((_c = (_b = Base.parameters) === null || _b === void 0 ? void 0 : _b.docs) === null || _c === void 0 ? void 0 : _c.source)
    }
  }
};
Readonly.parameters = {
  ...Readonly.parameters,
  docs: {
    ...((_d = Readonly.parameters) === null || _d === void 0 ? void 0 : _d.docs),
    source: {
      originalSource: "{\n  render: args => BoxedExpressionEditorStory(),\n  parameters: {\n    exclude: [\"dataTypes\", \"beeGwtService\", \"pmmlDocuments\"]\n  },\n  args: {\n    ...EmptyExpression.args,\n    expression: {\n      __$$element: \"filter\",\n      \"@_id\": generateUuid(),\n      \"@_label\": \"Expression Name\",\n      in: {\n        \"@_id\": generateUuid(),\n        expression: {\n          \"@_id\": generateUuid(),\n          __$$element: \"literalExpression\",\n          text: {\n            __$$text: \"['read', 'only']\"\n          }\n        }\n      },\n      match: {\n        \"@_id\": generateUuid(),\n        expression: {\n          \"@_id\": generateUuid(),\n          __$$element: \"literalExpression\",\n          text: {\n            __$$text: \"readOnlyTest(itemReadOnly)\"\n          }\n        }\n      }\n    },\n    isReadOnly: true\n  }\n}",
      ...((_f = (_e = Readonly.parameters) === null || _e === void 0 ? void 0 : _e.docs) === null || _f === void 0 ? void 0 : _f.source)
    }
  }
};
RebookedFlights.parameters = {
  ...RebookedFlights.parameters,
  docs: {
    ...((_g = RebookedFlights.parameters) === null || _g === void 0 ? void 0 : _g.docs),
    source: {
      originalSource: "{\n  render: args => BoxedExpressionEditorStory(),\n  parameters: {\n    exclude: [\"dataTypes\", \"beeGwtService\", \"pmmlDocuments\"]\n  },\n  args: {\n    ...EmptyExpression.args,\n    expression: {\n      __$$element: \"filter\",\n      \"@_id\": generateUuid(),\n      \"@_label\": \"Rebooked Flights\",\n      \"@_typeRef\": \"tFlights\",\n      in: {\n        \"@_id\": generateUuid(),\n        expression: {\n          __$$element: \"literalExpression\",\n          \"@_id\": generateUuid(),\n          text: {\n            __$$text: \"Passengers\"\n          }\n        }\n      },\n      match: {\n        \"@_id\": generateUuid(),\n        expression: {\n          __$$element: \"literalExpression\",\n          \"@_id\": generateUuid(),\n          text: {\n            __$$text: \"item.Flight Number = Flight.Flight Number\"\n          }\n        }\n      }\n    }\n  }\n}",
      ...((_j = (_h = RebookedFlights.parameters) === null || _h === void 0 ? void 0 : _h.docs) === null || _j === void 0 ? void 0 : _j.source)
    }
  }
};
Nested.parameters = {
  ...Nested.parameters,
  docs: {
    ...((_k = Nested.parameters) === null || _k === void 0 ? void 0 : _k.docs),
    source: {
      originalSource: "{\n  render: args => BoxedExpressionEditorStory(),\n  parameters: {\n    exclude: [\"dataTypes\", \"beeGwtService\", \"pmmlDocuments\"]\n  },\n  args: {\n    ...EmptyExpression.args,\n    expression: {\n      __$$element: \"context\",\n      \"@_id\": generateUuid(),\n      \"@_label\": \"Expression Name\",\n      contextEntry: [{\n        \"@_id\": generateUuid(),\n        variable: {\n          \"@_id\": generateUuid(),\n          \"@_name\": \"ContextEntry-1\"\n        },\n        expression: {\n          __$$element: \"filter\",\n          \"@_id\": generateUuid(),\n          \"@_label\": \"Expression Name\",\n          in: {\n            \"@_id\": generateUuid(),\n            expression: {\n              __$$element: \"literalExpression\",\n              \"@_id\": generateUuid()\n            }\n          },\n          match: {\n            \"@_id\": generateUuid(),\n            expression: {\n              __$$element: \"literalExpression\",\n              \"@_id\": generateUuid()\n            }\n          }\n        }\n      }]\n    }\n  }\n}",
      ...((_m = (_l = Nested.parameters) === null || _l === void 0 ? void 0 : _l.docs) === null || _m === void 0 ? void 0 : _m.source)
    }
  }
};
const __namedExportsOrder = ["Base", "Readonly", "RebookedFlights", "Nested"];

/***/ }),

/***/ "./stories/misc/Empty/EmptyExpression.stories.tsx":
/*!********************************************************!*\
  !*** ./stories/misc/Empty/EmptyExpression.stories.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Base: () => (/* binding */ Base),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _src_BoxedExpressionEditor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/BoxedExpressionEditor */ "./src/BoxedExpressionEditor.tsx");
/* harmony import */ var _boxedExpressionStoriesWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../boxedExpressionStoriesWrapper */ "./stories/boxedExpressionStoriesWrapper.tsx");
var _a, _b, _c;


const meta = {
  title: "Misc/Empty Boxed Expression",
  component: _src_BoxedExpressionEditor__WEBPACK_IMPORTED_MODULE_0__.BoxedExpressionEditor,
  includeStories: /^[A-Z]/
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (meta);
const Base = {
  render: args => (0,_boxedExpressionStoriesWrapper__WEBPACK_IMPORTED_MODULE_1__.BoxedExpressionEditorStory)(),
  args: {
    expressionHolderId: "_00000000-0000-0000-0000-000000000000",
    expression: undefined,
    widthsById: {},
    dataTypes: _boxedExpressionStoriesWrapper__WEBPACK_IMPORTED_MODULE_1__.dataTypes,
    beeGwtService: _boxedExpressionStoriesWrapper__WEBPACK_IMPORTED_MODULE_1__.beeGwtService,
    pmmlDocuments: _boxedExpressionStoriesWrapper__WEBPACK_IMPORTED_MODULE_1__.pmmlDocuments,
    isResetSupportedOnRootExpression: true
  }
};
Base.parameters = {
  ...Base.parameters,
  docs: {
    ...((_a = Base.parameters) === null || _a === void 0 ? void 0 : _a.docs),
    source: {
      originalSource: "{\n  render: args => BoxedExpressionEditorStory(),\n  args: {\n    expressionHolderId: \"_00000000-0000-0000-0000-000000000000\",\n    expression: undefined,\n    widthsById: {},\n    dataTypes,\n    beeGwtService,\n    pmmlDocuments,\n    isResetSupportedOnRootExpression: true\n  }\n}",
      ...((_c = (_b = Base.parameters) === null || _b === void 0 ? void 0 : _b.docs) === null || _c === void 0 ? void 0 : _c.source)
    }
  }
};
const __namedExportsOrder = ["Base"];

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm94ZWRFeHByZXNzaW9ucy1GaWx0ZXItRmlsdGVyLXN0b3JpZXMuYWUzM2Y3ZTAuaWZyYW1lLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CdUc7QUFDVTtBQUNqRTtBQUNtQztBQUduRixNQUFNSyxJQUFJLEdBQXFDO0VBQzdDQyxLQUFLLEVBQUUsMEJBQTBCO0VBQ2pDQyxTQUFTLEVBQUVQLDZFQUFxQjtFQUNoQ1EsY0FBYyxFQUFFO0NBQ2pCO0FBQ0QsaUVBQWVILElBQUksRUFBQztBQUliLE1BQU1GLElBQUksR0FBVTtFQUN6Qk0sTUFBTSxFQUFFQyxJQUFJLElBQUlULDBGQUEwQixFQUFFO0VBQzVDVSxVQUFVLEVBQUU7SUFDVkMsT0FBTyxFQUFFLENBQUMsV0FBVyxFQUFFLGVBQWUsRUFBRSxlQUFlO0dBQ3hEO0VBQ0RGLElBQUksRUFBRTtJQUNKLEdBQUdOLHFFQUFlLENBQUNNLElBQUk7SUFDdkJHLFVBQVUsRUFBRTtNQUNWQyxXQUFXLEVBQUUsUUFBUTtNQUNyQixNQUFNLEVBQUVaLHNEQUFZLEVBQUU7TUFDdEIsU0FBUyxFQUFFLGlCQUFpQjtNQUM1QmEsRUFBRSxFQUFFO1FBQ0YsTUFBTSxFQUFFYixzREFBWSxFQUFFO1FBQ3RCVyxVQUFVLEVBQUVHO09BQ2I7TUFDREMsS0FBSyxFQUFFO1FBQ0wsTUFBTSxFQUFFZixzREFBWSxFQUFFO1FBQ3RCVyxVQUFVLEVBQUVHOzs7O0NBSW5CO0FBQ00sTUFBTUUsUUFBUSxHQUFVO0VBQzdCVCxNQUFNLEVBQUVDLElBQUksSUFBSVQsMEZBQTBCLEVBQUU7RUFDNUNVLFVBQVUsRUFBRTtJQUNWQyxPQUFPLEVBQUUsQ0FBQyxXQUFXLEVBQUUsZUFBZSxFQUFFLGVBQWU7R0FDeEQ7RUFDREYsSUFBSSxFQUFFO0lBQ0osR0FBR04scUVBQWUsQ0FBQ00sSUFBSTtJQUN2QkcsVUFBVSxFQUFFO01BQ1ZDLFdBQVcsRUFBRSxRQUFRO01BQ3JCLE1BQU0sRUFBRVosc0RBQVks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QSxFQUFBLENBQUVMLElBQUksY0FBQUksRUFBQSx1QkFBQUEsRUFBQSxDQUFFRixNQUFNOzs7Q0FHckM7QUFBQyxNQUFBYSxtQkFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL0BraWUtdG9vbHMvYm94ZWQtZXhwcmVzc2lvbi1jb21wb25lbnQvLi9zdG9yaWVzL2JveGVkRXhwcmVzc2lvbnMvRmlsdGVyL0ZpbHRlci5zdG9yaWVzLnRzeCIsIndlYnBhY2s6Ly9Aa2llLXRvb2xzL2JveGVkLWV4cHJlc3Npb24tY29tcG9uZW50Ly4vc3Rvcmllcy9taXNjL0VtcHR5L0VtcHR5RXhwcmVzc2lvbi5zdG9yaWVzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogTGljZW5zZWQgdG8gdGhlIEFwYWNoZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIChBU0YpIHVuZGVyIG9uZVxuICogb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuICBTZWUgdGhlIE5PVElDRSBmaWxlXG4gKiBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvblxuICogcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuICBUaGUgQVNGIGxpY2Vuc2VzIHRoaXMgZmlsZVxuICogdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZVxuICogXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4gKiB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZyxcbiAqIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXG4gKiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxuICogS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlXG4gKiBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zXG4gKiB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgeyBNZXRhLCBTdG9yeU9iaiB9IGZyb20gXCJAc3Rvcnlib29rL3JlYWN0XCI7XG5pbXBvcnQgeyBCb3hlZEV4cHJlc3Npb25FZGl0b3IsIEJveGVkRXhwcmVzc2lvbkVkaXRvclByb3BzIH0gZnJvbSBcIi4uLy4uLy4uL3NyYy9Cb3hlZEV4cHJlc3Npb25FZGl0b3JcIjtcbmltcG9ydCB7IEJveGVkRXhwcmVzc2lvbkVkaXRvclN0b3J5LCBCb3hlZEV4cHJlc3Npb25FZGl0b3JTdG9yeUFyZ3MgfSBmcm9tIFwiLi4vLi4vYm94ZWRFeHByZXNzaW9uU3Rvcmllc1dyYXBwZXJcIjtcbmltcG9ydCB7IGdlbmVyYXRlVXVpZCB9IGZyb20gXCIuLi8uLi8uLi9zcmMvYXBpXCI7XG5pbXBvcnQgeyBCYXNlIGFzIEVtcHR5RXhwcmVzc2lvbiB9IGZyb20gXCIuLi8uLi9taXNjL0VtcHR5L0VtcHR5RXhwcmVzc2lvbi5zdG9yaWVzXCI7XG5cbi8vIE1vcmUgb24gaG93IHRvIHNldCB1cCBzdG9yaWVzIGF0OiBodHRwczovL3N0b3J5Ym9vay5qcy5vcmcvZG9jcy9yZWFjdC93cml0aW5nLXN0b3JpZXMvaW50cm9kdWN0aW9uI2RlZmF1bHQtZXhwb3J0XG5jb25zdCBtZXRhOiBNZXRhPEJveGVkRXhwcmVzc2lvbkVkaXRvclByb3BzPiA9IHtcbiAgdGl0bGU6IFwiQm94ZWQgRXhwcmVzc2lvbnMvRmlsdGVyXCIsXG4gIGNvbXBvbmVudDogQm94ZWRFeHByZXNzaW9uRWRpdG9yLFxuICBpbmNsdWRlU3RvcmllczogL15bQS1aXS9cbn07XG5leHBvcnQgZGVmYXVsdCBtZXRhO1xudHlwZSBTdG9yeSA9IFN0b3J5T2JqPEJveGVkRXhwcmVzc2lvbkVkaXRvclN0b3J5QXJncz47XG5cbi8vIE1vcmUgb24gd3JpdGluZyBzdG9yaWVzIHdpdGggYXJnczogaHR0cHM6Ly9zdG9yeWJvb2suanMub3JnL2RvY3MvcmVhY3Qvd3JpdGluZy1zdG9yaWVzL2FyZ3NcbmV4cG9ydCBjb25zdCBCYXNlOiBTdG9yeSA9IHtcbiAgcmVuZGVyOiBhcmdzID0+IEJveGVkRXhwcmVzc2lvbkVkaXRvclN0b3J5KCksXG4gIHBhcmFtZXRlcnM6IHtcbiAgICBleGNsdWRlOiBbXCJkYXRhVHlwZXNcIiwgXCJiZWVHd3RTZXJ2aWNlXCIsIFwicG1tbERvY3VtZW50c1wiXVxuICB9LFxuICBhcmdzOiB7XG4gICAgLi4uRW1wdHlFeHByZXNzaW9uLmFyZ3MsXG4gICAgZXhwcmVzc2lvbjoge1xuICAgICAgX18kJGVsZW1lbnQ6IFwiZmlsdGVyXCIsXG4gICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICBcIkBfbGFiZWxcIjogXCJFeHByZXNzaW9uIE5hbWVcIixcbiAgICAgIGluOiB7XG4gICAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICAgICAgZXhwcmVzc2lvbjogdW5kZWZpbmVkISAvLyBTUEVDIERJU0NSRVBBTkNZOiBTdGFydGluZyB3aXRob3V0IGFuIGV4cHJlc3Npb24gZ2l2ZXMgdXNlcnMgdGhlIGFiaWxpdHkgdG8gc2VsZWN0IHRoZSBleHByZXNzaW9uIHR5cGUuXG4gICAgICB9LFxuICAgICAgbWF0Y2g6IHtcbiAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgICBleHByZXNzaW9uOiB1bmRlZmluZWQhIC8vIFNQRUMgRElTQ1JFUEFOQ1k6IFN0YXJ0aW5nIHdpdGhvdXQgYW4gZXhwcmVzc2lvbiBnaXZlcyB1c2VycyB0aGUgYWJpbGl0eSB0byBzZWxlY3QgdGhlIGV4cHJlc3Npb24gdHlwZS5cbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5leHBvcnQgY29uc3QgUmVhZG9ubHk6IFN0b3J5ID0ge1xuICByZW5kZXI6IGFyZ3MgPT4gQm94ZWRFeHByZXNzaW9uRWRpdG9yU3RvcnkoKSxcbiAgcGFyYW1ldGVyczoge1xuICAgIGV4Y2x1ZGU6IFtcImRhdGFUeXBlc1wiLCBcImJlZUd3dFNlcnZpY2VcIiwgXCJwbW1sRG9jdW1lbnRzXCJdXG4gIH0sXG4gIGFyZ3M6IHtcbiAgICAuLi5FbXB0eUV4cHJlc3Npb24uYXJncyxcbiAgICBleHByZXNzaW9uOiB7XG4gICAgICBfXyQkZWxlbWVudDogXCJmaWx0ZXJcIixcbiAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICAgIFwiQF9sYWJlbFwiOiBcIkV4cHJlc3Npb24gTmFtZVwiLFxuICAgICAgaW46IHtcbiAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgICBleHByZXNzaW9uOiB7XG4gICAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgICAgIF9fJCRlbGVtZW50OiBcImxpdGVyYWxFeHByZXNzaW9uXCIsXG4gICAgICAgICAgdGV4dDoge1xuICAgICAgICAgICAgX18kJHRleHQ6IFwiWydyZWFkJywgJ29ubHknXVwiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgbWF0Y2g6IHtcbiAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgICBleHByZXNzaW9uOiB7XG4gICAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgICAgIF9fJCRlbGVtZW50OiBcImxpdGVyYWxFeHByZXNzaW9uXCIsXG4gICAgICAgICAgdGV4dDoge1xuICAgICAgICAgICAgX18kJHRleHQ6IFwicmVhZE9ubHlUZXN0KGl0ZW1SZWFkT25seSlcIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgaXNSZWFkT25seTogdHJ1ZVxuICB9XG59O1xuZXhwb3J0IGNvbnN0IFJlYm9va2VkRmxpZ2h0czogU3RvcnkgPSB7XG4gIHJlbmRlcjogYXJncyA9PiBCb3hlZEV4cHJlc3Npb25FZGl0b3JTdG9yeSgpLFxuICBwYXJhbWV0ZXJzOiB7XG4gICAgZXhjbHVkZTogW1wiZGF0YVR5cGVzXCIsIFwiYmVlR3d0U2VydmljZVwiLCBcInBtbWxEb2N1bWVudHNcIl1cbiAgfSxcbiAgYXJnczoge1xuICAgIC4uLkVtcHR5RXhwcmVzc2lvbi5hcmdzLFxuICAgIGV4cHJlc3Npb246IHtcbiAgICAgIF9fJCRlbGVtZW50OiBcImZpbHRlclwiLFxuICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgXCJAX2xhYmVsXCI6IFwiUmVib29rZWQgRmxpZ2h0c1wiLFxuICAgICAgXCJAX3R5cGVSZWZcIjogXCJ0RmxpZ2h0c1wiLFxuICAgICAgaW46IHtcbiAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgICBleHByZXNzaW9uOiB7XG4gICAgICAgICAgX18kJGVsZW1lbnQ6IFwibGl0ZXJhbEV4cHJlc3Npb25cIixcbiAgICAgICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICAgICAgdGV4dDoge1xuICAgICAgICAgICAgX18kJHRleHQ6IFwiUGFzc2VuZ2Vyc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgbWF0Y2g6IHtcbiAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgICBleHByZXNzaW9uOiB7XG4gICAgICAgICAgX18kJGVsZW1lbnQ6IFwibGl0ZXJhbEV4cHJlc3Npb25cIixcbiAgICAgICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICAgICAgdGV4dDoge1xuICAgICAgICAgICAgX18kJHRleHQ6IFwiaXRlbS5GbGlnaHQgTnVtYmVyID0gRmxpZ2h0LkZsaWdodCBOdW1iZXJcIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufTtcbmV4cG9ydCBjb25zdCBOZXN0ZWQ6IFN0b3J5ID0ge1xuICByZW5kZXI6IGFyZ3MgPT4gQm94ZWRFeHByZXNzaW9uRWRpdG9yU3RvcnkoKSxcbiAgcGFyYW1ldGVyczoge1xuICAgIGV4Y2x1ZGU6IFtcImRhdGFUeXBlc1wiLCBcImJlZUd3dFNlcnZpY2VcIiwgXCJwbW1sRG9jdW1lbnRzXCJdXG4gIH0sXG4gIGFyZ3M6IHtcbiAgICAuLi5FbXB0eUV4cHJlc3Npb24uYXJncyxcbiAgICBleHByZXNzaW9uOiB7XG4gICAgICBfXyQkZWxlbWVudDogXCJjb250ZXh0XCIsXG4gICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICBcIkBfbGFiZWxcIjogXCJFeHByZXNzaW9uIE5hbWVcIixcbiAgICAgIGNvbnRleHRFbnRyeTogW3tcbiAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgICB2YXJpYWJsZToge1xuICAgICAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICAgICAgICBcIkBfbmFtZVwiOiBcIkNvbnRleHRFbnRyeS0xXCJcbiAgICAgICAgfSxcbiAgICAgICAgZXhwcmVzc2lvbjoge1xuICAgICAgICAgIF9fJCRlbGVtZW50OiBcImZpbHRlclwiLFxuICAgICAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICAgICAgICBcIkBfbGFiZWxcIjogXCJFeHByZXNzaW9uIE5hbWVcIixcbiAgICAgICAgICBpbjoge1xuICAgICAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgICAgICAgZXhwcmVzc2lvbjoge1xuICAgICAgICAgICAgICBfXyQkZWxlbWVudDogXCJsaXRlcmFsRXhwcmVzc2lvblwiLFxuICAgICAgICAgICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIG1hdGNoOiB7XG4gICAgICAgICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICAgICAgICBleHByZXNzaW9uOiB7XG4gICAgICAgICAgICAgIF9fJCRlbGVtZW50OiBcImxpdGVyYWxFeHByZXNzaW9uXCIsXG4gICAgICAgICAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfV1cbiAgICB9XG4gIH1cbn07XG5CYXNlLnBhcmFtZXRlcnMgPSB7XG4gIC4uLkJhc2UucGFyYW1ldGVycyxcbiAgZG9jczoge1xuICAgIC4uLkJhc2UucGFyYW1ldGVycz8uZG9jcyxcbiAgICBzb3VyY2U6IHtcbiAgICAgIG9yaWdpbmFsU291cmNlOiBcIntcXG4gIHJlbmRlcjogYXJncyA9PiBCb3hlZEV4cHJlc3Npb25FZGl0b3JTdG9yeSgpLFxcbiAgcGFyYW1ldGVyczoge1xcbiAgICBleGNsdWRlOiBbXFxcImRhdGFUeXBlc1xcXCIsIFxcXCJiZWVHd3RTZXJ2aWNlXFxcIiwgXFxcInBtbWxEb2N1bWVudHNcXFwiXVxcbiAgfSxcXG4gIGFyZ3M6IHtcXG4gICAgLi4uRW1wdHlFeHByZXNzaW9uLmFyZ3MsXFxuICAgIGV4cHJlc3Npb246IHtcXG4gICAgICBfXyQkZWxlbWVudDogXFxcImZpbHRlclxcXCIsXFxuICAgICAgXFxcIkBfaWRcXFwiOiBnZW5lcmF0ZVV1aWQoKSxcXG4gICAgICBcXFwiQF9sYWJlbFxcXCI6IFxcXCJFeHByZXNzaW9uIE5hbWVcXFwiLFxcbiAgICAgIGluOiB7XFxuICAgICAgICBcXFwiQF9pZFxcXCI6IGdlbmVyYXRlVXVpZCgpLFxcbiAgICAgICAgZXhwcmVzc2lvbjogdW5kZWZpbmVkISAvLyBTUEVDIERJU0NSRVBBTkNZOiBTdGFydGluZyB3aXRob3V0IGFuIGV4cHJlc3Npb24gZ2l2ZXMgdXNlcnMgdGhlIGFiaWxpdHkgdG8gc2VsZWN0IHRoZSBleHByZXNzaW9uIHR5cGUuXFxuICAgICAgfSxcXG4gICAgICBtYXRjaDoge1xcbiAgICAgICAgXFxcIkBfaWRcXFwiOiBnZW5lcmF0ZVV1aWQoKSxcXG4gICAgICAgIGV4cHJlc3Npb246IHVuZGVmaW5lZCEgLy8gU1BFQyBESVNDUkVQQU5DWTogU3RhcnRpbmcgd2l0aG91dCBhbiBleHByZXNzaW9uIGdpdmVzIHVzZXJzIHRoZSBhYmlsaXR5IHRvIHNlbGVjdCB0aGUgZXhwcmVzc2lvbiB0eXBlLlxcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cIixcbiAgICAgIC4uLkJhc2UucGFyYW1ldGVycz8uZG9jcz8uc291cmNlXG4gICAgfVxuICB9XG59O1xuUmVhZG9ubHkucGFyYW1ldGVycyA9IHtcbiAgLi4uUmVhZG9ubHkucGFyYW1ldGVycyxcbiAgZG9jczoge1xuICAgIC4uLlJlYWRvbmx5LnBhcmFtZXRlcnM/LmRvY3MsXG4gICAgc291cmNlOiB7XG4gICAgICBvcmlnaW5hbFNvdXJjZTogXCJ7XFxuICByZW5kZXI6IGFyZ3MgPT4gQm94ZWRFeHByZXNzaW9uRWRpdG9yU3RvcnkoKSxcXG4gIHBhcmFtZXRlcnM6IHtcXG4gICAgZXhjbHVkZTogW1xcXCJkYXRhVHlwZXNcXFwiLCBcXFwiYmVlR3d0U2VydmljZVxcXCIsIFxcXCJwbW1sRG9jdW1lbnRzXFxcIl1cXG4gIH0sXFxuICBhcmdzOiB7XFxuICAgIC4uLkVtcHR5RXhwcmVzc2lvbi5hcmdzLFxcbiAgICBleHByZXNzaW9uOiB7XFxuICAgICAgX18kJGVsZW1lbnQ6IFxcXCJmaWx0ZXJcXFwiLFxcbiAgICAgIFxcXCJAX2lkXFxcIjogZ2VuZXJhdGVVdWlkKCksXFxuICAgICAgXFxcIkBfbGFiZWxcXFwiOiBcXFwiRXhwcmVzc2lvbiBOYW1lXFxcIixcXG4gICAgICBpbjoge1xcbiAgICAgICAgXFxcIkBfaWRcXFwiOiBnZW5lcmF0ZVV1aWQoKSxcXG4gICAgICAgIGV4cHJlc3Npb246IHtcXG4gICAgICAgICAgXFxcIkBfaWRcXFwiOiBnZW5lcmF0ZVV1aWQoKSxcXG4gICAgICAgICAgX18kJGVsZW1lbnQ6IFxcXCJsaXRlcmFsRXhwcmVzc2lvblxcXCIsXFxuICAgICAgICAgIHRleHQ6IHtcXG4gICAgICAgICAgICBfXyQkdGV4dDogXFxcIlsncmVhZCcsICdvbmx5J11cXFwiXFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICB9LFxcbiAgICAgIG1hdGNoOiB7XFxuICAgICAgICBcXFwiQF9pZFxcXCI6IGdlbmVyYXRlVXVpZCgpLFxcbiAgICAgICAgZXhwcmVzc2lvbjoge1xcbiAgICAgICAgICBcXFwiQF9pZFxcXCI6IGdlbmVyYXRlVXVpZCgpLFxcbiAgICAgICAgICBfXyQkZWxlbWVudDogXFxcImxpdGVyYWxFeHByZXNzaW9uXFxcIixcXG4gICAgICAgICAgdGV4dDoge1xcbiAgICAgICAgICAgIF9fJCR0ZXh0OiBcXFwicmVhZE9ubHlUZXN0KGl0ZW1SZWFkT25seSlcXFwiXFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH0sXFxuICAgIGlzUmVhZE9ubHk6IHRydWVcXG4gIH1cXG59XCIsXG4gICAgICAuLi5SZWFkb25seS5wYXJhbWV0ZXJzPy5kb2NzPy5zb3VyY2VcbiAgICB9XG4gIH1cbn07XG5SZWJvb2tlZEZsaWdodHMucGFyYW1ldGVycyA9IHtcbiAgLi4uUmVib29rZWRGbGlnaHRzLnBhcmFtZXRlcnMsXG4gIGRvY3M6IHtcbiAgICAuLi5SZWJvb2tlZEZsaWdodHMucGFyYW1ldGVycz8uZG9jcyxcbiAgICBzb3VyY2U6IHtcbiAgICAgIG9yaWdpbmFsU291cmNlOiBcIntcXG4gIHJlbmRlcjogYXJncyA9PiBCb3hlZEV4cHJlc3Npb25FZGl0b3JTdG9yeSgpLFxcbiAgcGFyYW1ldGVyczoge1xcbiAgICBleGNsdWRlOiBbXFxcImRhdGFUeXBlc1xcXCIsIFxcXCJiZWVHd3RTZXJ2aWNlXFxcIiwgXFxcInBtbWxEb2N1bWVudHNcXFwiXVxcbiAgfSxcXG4gIGFyZ3M6IHtcXG4gICAgLi4uRW1wdHlFeHByZXNzaW9uLmFyZ3MsXFxuICAgIGV4cHJlc3Npb246IHtcXG4gICAgICBfXyQkZWxlbWVudDogXFxcImZpbHRlclxcXCIsXFxuICAgICAgXFxcIkBfaWRcXFwiOiBnZW5lcmF0ZVV1aWQoKSxcXG4gICAgICBcXFwiQF9sYWJlbFxcXCI6IFxcXCJSZWJvb2tlZCBGbGlnaHRzXFxcIixcXG4gICAgICBcXFwiQF90eXBlUmVmXFxcIjogXFxcInRGbGlnaHRzXFxcIixcXG4gICAgICBpbjoge1xcbiAgICAgICAgXFxcIkBfaWRcXFwiOiBnZW5lcmF0ZVV1aWQoKSxcXG4gICAgICAgIGV4cHJlc3Npb246IHtcXG4gICAgICAgICAgX18kJGVsZW1lbnQ6IFxcXCJsaXRlcmFsRXhwcmVzc2lvblxcXCIsXFxuICAgICAgICAgIFxcXCJAX2lkXFxcIjogZ2VuZXJhdGVVdWlkKCksXFxuICAgICAgICAgIHRleHQ6IHtcXG4gICAgICAgICAgICBfXyQkdGV4dDogXFxcIlBhc3NlbmdlcnNcXFwiXFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICB9LFxcbiAgICAgIG1hdGNoOiB7XFxuICAgICAgICBcXFwiQF9pZFxcXCI6IGdlbmVyYXRlVXVpZCgpLFxcbiAgICAgICAgZXhwcmVzc2lvbjoge1xcbiAgICAgICAgICBfXyQkZWxlbWVudDogXFxcImxpdGVyYWxFeHByZXNzaW9uXFxcIixcXG4gICAgICAgICAgXFxcIkBfaWRcXFwiOiBnZW5lcmF0ZVV1aWQoKSxcXG4gICAgICAgICAgdGV4dDoge1xcbiAgICAgICAgICAgIF9fJCR0ZXh0OiBcXFwiaXRlbS5GbGlnaHQgTnVtYmVyID0gRmxpZ2h0LkZsaWdodCBOdW1iZXJcXFwiXFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XCIsXG4gICAgICAuLi5SZWJvb2tlZEZsaWdodHMucGFyYW1ldGVycz8uZG9jcz8uc291cmNlXG4gICAgfVxuICB9XG59O1xuTmVzdGVkLnBhcmFtZXRlcnMgPSB7XG4gIC4uLk5lc3RlZC5wYXJhbWV0ZXJzLFxuICBkb2NzOiB7XG4gICAgLi4uTmVzdGVkLnBhcmFtZXRlcnM/LmRvY3MsXG4gICAgc291cmNlOiB7XG4gICAgICBvcmlnaW5hbFNvdXJjZTogXCJ7XFxuICByZW5kZXI6IGFyZ3MgPT4gQm94ZWRFeHByZXNzaW9uRWRpdG9yU3RvcnkoKSxcXG4gIHBhcmFtZXRlcnM6IHtcXG4gICAgZXhjbHVkZTogW1xcXCJkYXRhVHlwZXNcXFwiLCBcXFwiYmVlR3d0U2VydmljZVxcXCIsIFxcXCJwbW1sRG9jdW1lbnRzXFxcIl1cXG4gIH0sXFxuICBhcmdzOiB7XFxuICAgIC4uLkVtcHR5RXhwcmVzc2lvbi5hcmdzLFxcbiAgICBleHByZXNzaW9uOiB7XFxuICAgICAgX18kJGVsZW1lbnQ6IFxcXCJjb250ZXh0XFxcIixcXG4gICAgICBcXFwiQF9pZFxcXCI6IGdlbmVyYXRlVXVpZCgpLFxcbiAgICAgIFxcXCJAX2xhYmVsXFxcIjogXFxcIkV4cHJlc3Npb24gTmFtZVxcXCIsXFxuICAgICAgY29udGV4dEVudHJ5OiBbe1xcbiAgICAgICAgXFxcIkBfaWRcXFwiOiBnZW5lcmF0ZVV1aWQoKSxcXG4gICAgICAgIHZhcmlhYmxlOiB7XFxuICAgICAgICAgIFxcXCJAX2lkXFxcIjogZ2VuZXJhdGVVdWlkKCksXFxuICAgICAgICAgIFxcXCJAX25hbWVcXFwiOiBcXFwiQ29udGV4dEVudHJ5LTFcXFwiXFxuICAgICAgICB9LFxcbiAgICAgICAgZXhwcmVzc2lvbjoge1xcbiAgICAgICAgICBfXyQkZWxlbWVudDogXFxcImZpbHRlclxcXCIsXFxuICAgICAgICAgIFxcXCJAX2lkXFxcIjogZ2VuZXJhdGVVdWlkKCksXFxuICAgICAgICAgIFxcXCJAX2xhYmVsXFxcIjogXFxcIkV4cHJlc3Npb24gTmFtZVxcXCIsXFxuICAgICAgICAgIGluOiB7XFxuICAgICAgICAgICAgXFxcIkBfaWRcXFwiOiBnZW5lcmF0ZVV1aWQoKSxcXG4gICAgICAgICAgICBleHByZXNzaW9uOiB7XFxuICAgICAgICAgICAgICBfXyQkZWxlbWVudDogXFxcImxpdGVyYWxFeHByZXNzaW9uXFxcIixcXG4gICAgICAgICAgICAgIFxcXCJAX2lkXFxcIjogZ2VuZXJhdGVVdWlkKClcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIG1hdGNoOiB7XFxuICAgICAgICAgICAgXFxcIkBfaWRcXFwiOiBnZW5lcmF0ZVV1aWQoKSxcXG4gICAgICAgICAgICBleHByZXNzaW9uOiB7XFxuICAgICAgICAgICAgICBfXyQkZWxlbWVudDogXFxcImxpdGVyYWxFeHByZXNzaW9uXFxcIixcXG4gICAgICAgICAgICAgIFxcXCJAX2lkXFxcIjogZ2VuZXJhdGVVdWlkKClcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICB9XVxcbiAgICB9XFxuICB9XFxufVwiLFxuICAgICAgLi4uTmVzdGVkLnBhcmFtZXRlcnM/LmRvY3M/LnNvdXJjZVxuICAgIH1cbiAgfVxufTsiLCIvKlxuICogTGljZW5zZWQgdG8gdGhlIEFwYWNoZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIChBU0YpIHVuZGVyIG9uZVxuICogb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuICBTZWUgdGhlIE5PVElDRSBmaWxlXG4gKiBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvblxuICogcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuICBUaGUgQVNGIGxpY2Vuc2VzIHRoaXMgZmlsZVxuICogdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZVxuICogXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4gKiB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZyxcbiAqIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXG4gKiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxuICogS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlXG4gKiBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zXG4gKiB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgdHlwZSB7IE1ldGEsIFN0b3J5T2JqIH0gZnJvbSBcIkBzdG9yeWJvb2svcmVhY3RcIjtcbmltcG9ydCB7IEJveGVkRXhwcmVzc2lvbkVkaXRvciwgQm94ZWRFeHByZXNzaW9uRWRpdG9yUHJvcHMgfSBmcm9tIFwiLi4vLi4vLi4vc3JjL0JveGVkRXhwcmVzc2lvbkVkaXRvclwiO1xuaW1wb3J0IHsgYmVlR3d0U2VydmljZSwgQm94ZWRFeHByZXNzaW9uRWRpdG9yU3RvcnksIEJveGVkRXhwcmVzc2lvbkVkaXRvclN0b3J5QXJncywgZGF0YVR5cGVzLCBwbW1sRG9jdW1lbnRzIH0gZnJvbSBcIi4uLy4uL2JveGVkRXhwcmVzc2lvblN0b3JpZXNXcmFwcGVyXCI7XG5cbi8vIE1vcmUgb24gaG93IHRvIHNldCB1cCBzdG9yaWVzIGF0OiBodHRwczovL3N0b3J5Ym9vay5qcy5vcmcvZG9jcy9yZWFjdC93cml0aW5nLXN0b3JpZXMvaW50cm9kdWN0aW9uI2RlZmF1bHQtZXhwb3J0XG5jb25zdCBtZXRhOiBNZXRhPEJveGVkRXhwcmVzc2lvbkVkaXRvclByb3BzPiA9IHtcbiAgdGl0bGU6IFwiTWlzYy9FbXB0eSBCb3hlZCBFeHByZXNzaW9uXCIsXG4gIGNvbXBvbmVudDogQm94ZWRFeHByZXNzaW9uRWRpdG9yLFxuICBpbmNsdWRlU3RvcmllczogL15bQS1aXS9cbn07XG5leHBvcnQgZGVmYXVsdCBtZXRhO1xudHlwZSBTdG9yeSA9IFN0b3J5T2JqPEJveGVkRXhwcmVzc2lvbkVkaXRvclN0b3J5QXJncz47XG5cbi8vIE1vcmUgb24gd3JpdGluZyBzdG9yaWVzIHdpdGggYXJnczogaHR0cHM6Ly9zdG9yeWJvb2suanMub3JnL2RvY3MvcmVhY3Qvd3JpdGluZy1zdG9yaWVzL2FyZ3NcbmV4cG9ydCBjb25zdCBCYXNlOiBTdG9yeSA9IHtcbiAgcmVuZGVyOiBhcmdzID0+IEJveGVkRXhwcmVzc2lvbkVkaXRvclN0b3J5KCksXG4gIGFyZ3M6IHtcbiAgICBleHByZXNzaW9uSG9sZGVySWQ6IFwiXzAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMFwiLFxuICAgIGV4cHJlc3Npb246IHVuZGVmaW5lZCxcbiAgICB3aWR0aHNCeUlkOiB7fSxcbiAgICBkYXRhVHlwZXMsXG4gICAgYmVlR3d0U2VydmljZSxcbiAgICBwbW1sRG9jdW1lbnRzLFxuICAgIGlzUmVzZXRTdXBwb3J0ZWRPblJvb3RFeHByZXNzaW9uOiB0cnVlXG4gIH1cbn07XG5CYXNlLnBhcmFtZXRlcnMgPSB7XG4gIC4uLkJhc2UucGFyYW1ldGVycyxcbiAgZG9jczoge1xuICAgIC4uLkJhc2UucGFyYW1ldGVycz8uZG9jcyxcbiAgICBzb3VyY2U6IHtcbiAgICAgIG9yaWdpbmFsU291cmNlOiBcIntcXG4gIHJlbmRlcjogYXJncyA9PiBCb3hlZEV4cHJlc3Npb25FZGl0b3JTdG9yeSgpLFxcbiAgYXJnczoge1xcbiAgICBleHByZXNzaW9uSG9sZGVySWQ6IFxcXCJfMDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwXFxcIixcXG4gICAgZXhwcmVzc2lvbjogdW5kZWZpbmVkLFxcbiAgICB3aWR0aHNCeUlkOiB7fSxcXG4gICAgZGF0YVR5cGVzLFxcbiAgICBiZWVHd3RTZXJ2aWNlLFxcbiAgICBwbW1sRG9jdW1lbnRzLFxcbiAgICBpc1Jlc2V0U3VwcG9ydGVkT25Sb290RXhwcmVzc2lvbjogdHJ1ZVxcbiAgfVxcbn1cIixcbiAgICAgIC4uLkJhc2UucGFyYW1ldGVycz8uZG9jcz8uc291cmNlXG4gICAgfVxuICB9XG59OyJdLCJuYW1lcyI6WyJCb3hlZEV4cHJlc3Npb25FZGl0b3IiLCJCb3hlZEV4cHJlc3Npb25FZGl0b3JTdG9yeSIsImdlbmVyYXRlVXVpZCIsIkJhc2UiLCJFbXB0eUV4cHJlc3Npb24iLCJtZXRhIiwidGl0bGUiLCJjb21wb25lbnQiLCJpbmNsdWRlU3RvcmllcyIsInJlbmRlciIsImFyZ3MiLCJwYXJhbWV0ZXJzIiwiZXhjbHVkZSIsImV4cHJlc3Npb24iLCJfXyQkZWxlbWVudCIsImluIiwidW5kZWZpbmVkIiwibWF0Y2giLCJSZWFkb25seSIsInRleHQiLCJfXyQkdGV4dCIsImlzUmVhZE9ubHkiLCJSZWJvb2tlZEZsaWdodHMiLCJOZXN0ZWQiLCJjb250ZXh0RW50cnkiLCJ2YXJpYWJsZSIsImRvY3MiLCJfYSIsInNvdXJjZSIsIm9yaWdpbmFsU291cmNlIiwiX2MiLCJfYiIsIl9kIiwiX2YiLCJfZSIsIl9nIiwiX2oiLCJfaCIsIl9rIiwiX20iLCJfbCIsIl9fbmFtZWRFeHBvcnRzT3JkZXIiLCJiZWVHd3RTZXJ2aWNlIiwiZGF0YVR5cGVzIiwicG1tbERvY3VtZW50cyIsImV4cHJlc3Npb25Ib2xkZXJJZCIsIndpZHRoc0J5SWQiLCJpc1Jlc2V0U3VwcG9ydGVkT25Sb290RXhwcmVzc2lvbiJdLCJzb3VyY2VSb290IjoiIn0=