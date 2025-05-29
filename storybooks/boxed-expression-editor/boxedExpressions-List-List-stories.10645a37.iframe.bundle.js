"use strict";
(self["webpackChunk_kie_tools_boxed_expression_component"] = self["webpackChunk_kie_tools_boxed_expression_component"] || []).push([["boxedExpressions-List-List-stories"],{

/***/ "./stories/boxedExpressions/List/List.stories.tsx":
/*!********************************************************!*\
  !*** ./stories/boxedExpressions/List/List.stories.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AgeGroups: () => (/* binding */ AgeGroups),
/* harmony export */   Base: () => (/* binding */ Base),
/* harmony export */   Nested: () => (/* binding */ Nested),
/* harmony export */   Readonly: () => (/* binding */ Readonly),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _src_BoxedExpressionEditor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/BoxedExpressionEditor */ "./src/BoxedExpressionEditor.tsx");
/* harmony import */ var _boxedExpressionStoriesWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../boxedExpressionStoriesWrapper */ "./stories/boxedExpressionStoriesWrapper.tsx");
/* harmony import */ var _misc_Empty_EmptyExpression_stories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../misc/Empty/EmptyExpression.stories */ "./stories/misc/Empty/EmptyExpression.stories.tsx");
/* harmony import */ var _src_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../src/api */ "./src/api/index.ts");
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;




const meta = {
  title: "Boxed Expressions/List",
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
    ..._misc_Empty_EmptyExpression_stories__WEBPACK_IMPORTED_MODULE_2__.Base.args,
    expression: {
      __$$element: "list",
      "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
      "@_label": "Expression Name",
      expression: [undefined]
    },
    isResetSupportedOnRootExpression: true
  }
};
const Readonly = {
  render: args => (0,_boxedExpressionStoriesWrapper__WEBPACK_IMPORTED_MODULE_1__.BoxedExpressionEditorStory)(),
  parameters: {
    exclude: ["dataTypes", "beeGwtService", "pmmlDocuments"]
  },
  args: {
    ..._misc_Empty_EmptyExpression_stories__WEBPACK_IMPORTED_MODULE_2__.Base.args,
    expression: {
      __$$element: "list",
      "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
      "@_label": "Expression Name",
      expression: [{
        __$$element: "literalExpression",
        "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
        text: {
          __$$text: "read only"
        }
      }]
    },
    isResetSupportedOnRootExpression: true,
    isReadOnly: true
  }
};
const AgeGroups = {
  render: args => (0,_boxedExpressionStoriesWrapper__WEBPACK_IMPORTED_MODULE_1__.BoxedExpressionEditorStory)(),
  parameters: {
    exclude: ["dataTypes", "beeGwtService", "pmmlDocuments"]
  },
  args: {
    ..._misc_Empty_EmptyExpression_stories__WEBPACK_IMPORTED_MODULE_2__.Base.args,
    expression: {
      __$$element: "list",
      "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
      "@_label": "Age group",
      "@_typeRef": _src_api__WEBPACK_IMPORTED_MODULE_3__.DmnBuiltInDataType.Number,
      expression: [{
        __$$element: "literalExpression",
        "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
        text: {
          __$$text: `[18..30)`
        }
      }, {
        __$$element: "literalExpression",
        "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
        text: {
          __$$text: `[30..50)`
        }
      }, {
        __$$element: "literalExpression",
        "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
        text: {
          __$$text: `[50..70)`
        }
      }, {
        __$$element: "literalExpression",
        "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
        text: {
          __$$text: `>= 70`
        }
      }]
    },
    isResetSupportedOnRootExpression: false
  }
};
const Nested = {
  render: args => (0,_boxedExpressionStoriesWrapper__WEBPACK_IMPORTED_MODULE_1__.BoxedExpressionEditorStory)(),
  parameters: {
    exclude: ["dataTypes", "beeGwtService", "pmmlDocuments"]
  },
  args: {
    ..._misc_Empty_EmptyExpression_stories__WEBPACK_IMPORTED_MODULE_2__.Base.args,
    expression: {
      __$$element: "list",
      "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
      "@_label": "Expression Name",
      expression: [{
        __$$element: "literalExpression",
        "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)()
      }, {
        __$$element: "list",
        "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
        expression: [{
          __$$element: "literalExpression",
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)()
        }]
      }]
    },
    isResetSupportedOnRootExpression: false
  }
};
Base.parameters = {
  ...Base.parameters,
  docs: {
    ...((_a = Base.parameters) === null || _a === void 0 ? void 0 : _a.docs),
    source: {
      originalSource: "{\n  render: args => BoxedExpressionEditorStory(),\n  parameters: {\n    exclude: [\"dataTypes\", \"beeGwtService\", \"pmmlDocuments\"]\n  },\n  args: {\n    ...EmptyExpression.args,\n    expression: {\n      __$$element: \"list\",\n      \"@_id\": generateUuid(),\n      \"@_label\": \"Expression Name\",\n      expression: [undefined!]\n    },\n    isResetSupportedOnRootExpression: true\n  }\n}",
      ...((_c = (_b = Base.parameters) === null || _b === void 0 ? void 0 : _b.docs) === null || _c === void 0 ? void 0 : _c.source)
    }
  }
};
Readonly.parameters = {
  ...Readonly.parameters,
  docs: {
    ...((_d = Readonly.parameters) === null || _d === void 0 ? void 0 : _d.docs),
    source: {
      originalSource: "{\n  render: args => BoxedExpressionEditorStory(),\n  parameters: {\n    exclude: [\"dataTypes\", \"beeGwtService\", \"pmmlDocuments\"]\n  },\n  args: {\n    ...EmptyExpression.args,\n    expression: {\n      __$$element: \"list\",\n      \"@_id\": generateUuid(),\n      \"@_label\": \"Expression Name\",\n      expression: [{\n        __$$element: \"literalExpression\",\n        \"@_id\": generateUuid(),\n        text: {\n          __$$text: \"read only\"\n        }\n      }]\n    },\n    isResetSupportedOnRootExpression: true,\n    isReadOnly: true\n  }\n}",
      ...((_f = (_e = Readonly.parameters) === null || _e === void 0 ? void 0 : _e.docs) === null || _f === void 0 ? void 0 : _f.source)
    }
  }
};
AgeGroups.parameters = {
  ...AgeGroups.parameters,
  docs: {
    ...((_g = AgeGroups.parameters) === null || _g === void 0 ? void 0 : _g.docs),
    source: {
      originalSource: "{\n  render: args => BoxedExpressionEditorStory(),\n  parameters: {\n    exclude: [\"dataTypes\", \"beeGwtService\", \"pmmlDocuments\"]\n  },\n  args: {\n    ...EmptyExpression.args,\n    expression: {\n      __$$element: \"list\",\n      \"@_id\": generateUuid(),\n      \"@_label\": \"Age group\",\n      \"@_typeRef\": DmnBuiltInDataType.Number,\n      expression: [{\n        __$$element: \"literalExpression\",\n        \"@_id\": generateUuid(),\n        text: {\n          __$$text: `[18..30)`\n        }\n      }, {\n        __$$element: \"literalExpression\",\n        \"@_id\": generateUuid(),\n        text: {\n          __$$text: `[30..50)`\n        }\n      }, {\n        __$$element: \"literalExpression\",\n        \"@_id\": generateUuid(),\n        text: {\n          __$$text: `[50..70)`\n        }\n      }, {\n        __$$element: \"literalExpression\",\n        \"@_id\": generateUuid(),\n        text: {\n          __$$text: `>= 70`\n        }\n      }]\n    },\n    isResetSupportedOnRootExpression: false\n  }\n}",
      ...((_j = (_h = AgeGroups.parameters) === null || _h === void 0 ? void 0 : _h.docs) === null || _j === void 0 ? void 0 : _j.source)
    }
  }
};
Nested.parameters = {
  ...Nested.parameters,
  docs: {
    ...((_k = Nested.parameters) === null || _k === void 0 ? void 0 : _k.docs),
    source: {
      originalSource: "{\n  render: args => BoxedExpressionEditorStory(),\n  parameters: {\n    exclude: [\"dataTypes\", \"beeGwtService\", \"pmmlDocuments\"]\n  },\n  args: {\n    ...EmptyExpression.args,\n    expression: {\n      __$$element: \"list\",\n      \"@_id\": generateUuid(),\n      \"@_label\": \"Expression Name\",\n      expression: [{\n        __$$element: \"literalExpression\",\n        \"@_id\": generateUuid()\n      }, {\n        __$$element: \"list\",\n        \"@_id\": generateUuid(),\n        expression: [{\n          __$$element: \"literalExpression\",\n          \"@_id\": generateUuid()\n        }]\n      }]\n    },\n    isResetSupportedOnRootExpression: false\n  }\n}",
      ...((_m = (_l = Nested.parameters) === null || _l === void 0 ? void 0 : _l.docs) === null || _m === void 0 ? void 0 : _m.source)
    }
  }
};
const __namedExportsOrder = ["Base", "Readonly", "AgeGroups", "Nested"];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm94ZWRFeHByZXNzaW9ucy1MaXN0LUxpc3Qtc3Rvcmllcy4xMDY0NWEzNy5pZnJhbWUuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0J1RztBQUNVO0FBQzlCO0FBQ2Y7QUFHcEUsTUFBTU0sSUFBSSxHQUFxQztFQUM3Q0MsS0FBSyxFQUFFLHdCQUF3QjtFQUMvQkMsU0FBUyxFQUFFUiw2RUFBcUI7RUFDaENTLGNBQWMsRUFBRTtDQUNqQjtBQUNELGlFQUFlSCxJQUFJLEVBQUM7QUFJYixNQUFNSixJQUFJLEdBQVU7RUFDekJRLE1BQU0sRUFBRUMsSUFBSSxJQUFJViwwRkFBMEIsRUFBRTtFQUM1Q1csVUFBVSxFQUFFO0lBQ1ZDLE9BQU8sRUFBRSxDQUFDLFdBQVcsRUFBRSxlQUFlLEVBQUUsZUFBZTtHQUN4RDtFQUNERixJQUFJLEVBQUU7SUFDSixHQUFHUixxRUFBZSxDQUFDUSxJQUFJO0lBQ3ZCRyxVQUFVLEVBQUU7TUFDVkMsV0FBVyxFQUFFLE1BQU07TUFDbkIsTUFBTSxFQUFFVixzREFBWSxFQUFFO01BQ3RCLFNBQVMsRUFBRSxpQkFBaUI7TUFDNUJTLFVBQVUsRUFBRSxDQUFDRSxTQUFVO0tBQ3hCO0lBQ0RDLGdDQUFnQyxFQUFFOztDQUVyQztBQUNNLE1BQU1DLFFBQVEsR0FBVTtFQUM3QlIsTUFBTSxFQUFFQyxJQUFJLElBQUlWLDBGQUEwQixFQUFFO0VBQzVDVyxVQUFVLEVBQUU7SUFDVkMsT0FBTyxFQUFFLENBQUMsV0FBVyxFQUFFLGVBQWUsRUFBRSxlQUFlO0dBQ3hEO0VBQ0RGLElBQUksRUFBRTtJQUNKLEdBQUdSLHFFQUFlLENBQUNRLElBQUk7SUFDdkJHLFVBQVUsRUFBRTtNQUNWQyxXQUFXLEVBQUUsTUFBTTtNQUNuQixNQUFNLEVBQUVWLHNEQUFZLEVBQUU7TUFDdEIsU0FBUyxFQUFFLGlCQUFpQjtNQUM1QlMsVUFBVSxFQUFFLENBQUM7UUFDWEMsV0FBVyxFQUFFLG1CQUFtQjtRQUNoQyxNQUFN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QXFDO0VBQzdDQyxLQUFLLEVBQUUsNkJBQTZCO0VBQ3BDQyxTQUFTLEVBQUVSLDZFQUFxQjtFQUNoQ1MsY0FBYyxFQUFFO0NBQ2pCO0FBQ0QsaUVBQWVILElBQUksRUFBQztBQUliLE1BQU1KLElBQUksR0FBVTtFQUN6QlEsTUFBTSxFQUFFQyxJQUFJLElBQUlWLDBGQUEwQixFQUFFO0VBQzVDVSxJQUFJLEVBQUU7SUFDSmlDLGtCQUFrQixFQUFFLHVDQUF1QztJQUMzRDlCLFVBQVUsRUFBRUUsU0FBUztJQUNyQjZCLFVBQVUsRUFBRSxFQUFFO0lBQ2RILFNBQVM7SUFDVEQsYUFBYTtJQUNiRSxhQUFhO0lBQ2IxQixnQ0FBZ0MsRUFBRTs7Q0FFckM7QUFDRGYsSUFBSSxDQUFDVSxVQUFVLEdBQUc7RUFDaEIsR0FBR1YsSUFBSSxDQUFDVSxVQUFVO0VBQ2xCYSxJQUFJLEVBQUU7SUFDSixJQUFHLENBQUFDLEVBQUEsR0FBQXhCLElBQUksQ0FBQ1UsVUFBVSxjQUFBYyxFQUFBLHVCQUFBQSxFQUFBLENBQUVELElBQUk7SUFDeEJFLE1BQU0sRUFBRTtNQUNOQyxjQUFjLEVBQUUsZ1NBQWdTO01BQ2hULElBQUcsQ0FBQUMsRUFBQSxJQUFBQyxFQUFBLEdBQUE1QixJQUFJLENBQUNVLFVBQVUsY0FBQWtCLEVBQUEsdUJBQUFBLEVBQUEsQ0FBRUwsSUFBSSxjQUFBSSxFQUFBLHVCQUFBQSxFQUFBLENBQUVGLE1BQU07OztDQUdyQztBQUFDLE1BQUFhLG1CQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGtpZS10b29scy9ib3hlZC1leHByZXNzaW9uLWNvbXBvbmVudC8uL3N0b3JpZXMvYm94ZWRFeHByZXNzaW9ucy9MaXN0L0xpc3Quc3Rvcmllcy50c3giLCJ3ZWJwYWNrOi8vQGtpZS10b29scy9ib3hlZC1leHByZXNzaW9uLWNvbXBvbmVudC8uL3N0b3JpZXMvbWlzYy9FbXB0eS9FbXB0eUV4cHJlc3Npb24uc3Rvcmllcy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIExpY2Vuc2VkIHRvIHRoZSBBcGFjaGUgU29mdHdhcmUgRm91bmRhdGlvbiAoQVNGKSB1bmRlciBvbmVcbiAqIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiAgU2VlIHRoZSBOT1RJQ0UgZmlsZVxuICogZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb25cbiAqIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLiAgVGhlIEFTRiBsaWNlbnNlcyB0aGlzIGZpbGVcbiAqIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGVcbiAqIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuICogd2l0aCB0aGUgTGljZW5zZS4gIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsXG4gKiBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxuICogXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcbiAqIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZVxuICogc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9uc1xuICogdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHR5cGUgeyBNZXRhLCBTdG9yeU9iaiB9IGZyb20gXCJAc3Rvcnlib29rL3JlYWN0XCI7XG5pbXBvcnQgeyBCb3hlZEV4cHJlc3Npb25FZGl0b3IsIEJveGVkRXhwcmVzc2lvbkVkaXRvclByb3BzIH0gZnJvbSBcIi4uLy4uLy4uL3NyYy9Cb3hlZEV4cHJlc3Npb25FZGl0b3JcIjtcbmltcG9ydCB7IEJveGVkRXhwcmVzc2lvbkVkaXRvclN0b3J5LCBCb3hlZEV4cHJlc3Npb25FZGl0b3JTdG9yeUFyZ3MgfSBmcm9tIFwiLi4vLi4vYm94ZWRFeHByZXNzaW9uU3Rvcmllc1dyYXBwZXJcIjtcbmltcG9ydCB7IEJhc2UgYXMgRW1wdHlFeHByZXNzaW9uIH0gZnJvbSBcIi4uLy4uL21pc2MvRW1wdHkvRW1wdHlFeHByZXNzaW9uLnN0b3JpZXNcIjtcbmltcG9ydCB7IERtbkJ1aWx0SW5EYXRhVHlwZSwgZ2VuZXJhdGVVdWlkIH0gZnJvbSBcIi4uLy4uLy4uL3NyYy9hcGlcIjtcblxuLy8gTW9yZSBvbiBob3cgdG8gc2V0IHVwIHN0b3JpZXMgYXQ6IGh0dHBzOi8vc3Rvcnlib29rLmpzLm9yZy9kb2NzL3JlYWN0L3dyaXRpbmctc3Rvcmllcy9pbnRyb2R1Y3Rpb24jZGVmYXVsdC1leHBvcnRcbmNvbnN0IG1ldGE6IE1ldGE8Qm94ZWRFeHByZXNzaW9uRWRpdG9yUHJvcHM+ID0ge1xuICB0aXRsZTogXCJCb3hlZCBFeHByZXNzaW9ucy9MaXN0XCIsXG4gIGNvbXBvbmVudDogQm94ZWRFeHByZXNzaW9uRWRpdG9yLFxuICBpbmNsdWRlU3RvcmllczogL15bQS1aXS9cbn07XG5leHBvcnQgZGVmYXVsdCBtZXRhO1xudHlwZSBTdG9yeSA9IFN0b3J5T2JqPEJveGVkRXhwcmVzc2lvbkVkaXRvclN0b3J5QXJncz47XG5cbi8vIE1vcmUgb24gd3JpdGluZyBzdG9yaWVzIHdpdGggYXJnczogaHR0cHM6Ly9zdG9yeWJvb2suanMub3JnL2RvY3MvcmVhY3Qvd3JpdGluZy1zdG9yaWVzL2FyZ3NcbmV4cG9ydCBjb25zdCBCYXNlOiBTdG9yeSA9IHtcbiAgcmVuZGVyOiBhcmdzID0+IEJveGVkRXhwcmVzc2lvbkVkaXRvclN0b3J5KCksXG4gIHBhcmFtZXRlcnM6IHtcbiAgICBleGNsdWRlOiBbXCJkYXRhVHlwZXNcIiwgXCJiZWVHd3RTZXJ2aWNlXCIsIFwicG1tbERvY3VtZW50c1wiXVxuICB9LFxuICBhcmdzOiB7XG4gICAgLi4uRW1wdHlFeHByZXNzaW9uLmFyZ3MsXG4gICAgZXhwcmVzc2lvbjoge1xuICAgICAgX18kJGVsZW1lbnQ6IFwibGlzdFwiLFxuICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgXCJAX2xhYmVsXCI6IFwiRXhwcmVzc2lvbiBOYW1lXCIsXG4gICAgICBleHByZXNzaW9uOiBbdW5kZWZpbmVkIV1cbiAgICB9LFxuICAgIGlzUmVzZXRTdXBwb3J0ZWRPblJvb3RFeHByZXNzaW9uOiB0cnVlXG4gIH1cbn07XG5leHBvcnQgY29uc3QgUmVhZG9ubHk6IFN0b3J5ID0ge1xuICByZW5kZXI6IGFyZ3MgPT4gQm94ZWRFeHByZXNzaW9uRWRpdG9yU3RvcnkoKSxcbiAgcGFyYW1ldGVyczoge1xuICAgIGV4Y2x1ZGU6IFtcImRhdGFUeXBlc1wiLCBcImJlZUd3dFNlcnZpY2VcIiwgXCJwbW1sRG9jdW1lbnRzXCJdXG4gIH0sXG4gIGFyZ3M6IHtcbiAgICAuLi5FbXB0eUV4cHJlc3Npb24uYXJncyxcbiAgICBleHByZXNzaW9uOiB7XG4gICAgICBfXyQkZWxlbWVudDogXCJsaXN0XCIsXG4gICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICBcIkBfbGFiZWxcIjogXCJFeHByZXNzaW9uIE5hbWVcIixcbiAgICAgIGV4cHJlc3Npb246IFt7XG4gICAgICAgIF9fJCRlbGVtZW50OiBcImxpdGVyYWxFeHByZXNzaW9uXCIsXG4gICAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICAgICAgdGV4dDoge1xuICAgICAgICAgIF9fJCR0ZXh0OiBcInJlYWQgb25seVwiXG4gICAgICAgIH1cbiAgICAgIH1dXG4gICAgfSxcbiAgICBpc1Jlc2V0U3VwcG9ydGVkT25Sb290RXhwcmVzc2lvbjogdHJ1ZSxcbiAgICBpc1JlYWRPbmx5OiB0cnVlXG4gIH1cbn07XG5leHBvcnQgY29uc3QgQWdlR3JvdXBzOiBTdG9yeSA9IHtcbiAgcmVuZGVyOiBhcmdzID0+IEJveGVkRXhwcmVzc2lvbkVkaXRvclN0b3J5KCksXG4gIHBhcmFtZXRlcnM6IHtcbiAgICBleGNsdWRlOiBbXCJkYXRhVHlwZXNcIiwgXCJiZWVHd3RTZXJ2aWNlXCIsIFwicG1tbERvY3VtZW50c1wiXVxuICB9LFxuICBhcmdzOiB7XG4gICAgLi4uRW1wdHlFeHByZXNzaW9uLmFyZ3MsXG4gICAgZXhwcmVzc2lvbjoge1xuICAgICAgX18kJGVsZW1lbnQ6IFwibGlzdFwiLFxuICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgXCJAX2xhYmVsXCI6IFwiQWdlIGdyb3VwXCIsXG4gICAgICBcIkBfdHlwZVJlZlwiOiBEbW5CdWlsdEluRGF0YVR5cGUuTnVtYmVyLFxuICAgICAgZXhwcmVzc2lvbjogW3tcbiAgICAgICAgX18kJGVsZW1lbnQ6IFwibGl0ZXJhbEV4cHJlc3Npb25cIixcbiAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgICB0ZXh0OiB7XG4gICAgICAgICAgX18kJHRleHQ6IGBbMTguLjMwKWBcbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICBfXyQkZWxlbWVudDogXCJsaXRlcmFsRXhwcmVzc2lvblwiLFxuICAgICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICAgIHRleHQ6IHtcbiAgICAgICAgICBfXyQkdGV4dDogYFszMC4uNTApYFxuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIF9fJCRlbGVtZW50OiBcImxpdGVyYWxFeHByZXNzaW9uXCIsXG4gICAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICAgICAgdGV4dDoge1xuICAgICAgICAgIF9fJCR0ZXh0OiBgWzUwLi43MClgXG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAgX18kJGVsZW1lbnQ6IFwibGl0ZXJhbEV4cHJlc3Npb25cIixcbiAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgICB0ZXh0OiB7XG4gICAgICAgICAgX18kJHRleHQ6IGA+PSA3MGBcbiAgICAgICAgfVxuICAgICAgfV1cbiAgICB9LFxuICAgIGlzUmVzZXRTdXBwb3J0ZWRPblJvb3RFeHByZXNzaW9uOiBmYWxzZVxuICB9XG59O1xuZXhwb3J0IGNvbnN0IE5lc3RlZDogU3RvcnkgPSB7XG4gIHJlbmRlcjogYXJncyA9PiBCb3hlZEV4cHJlc3Npb25FZGl0b3JTdG9yeSgpLFxuICBwYXJhbWV0ZXJzOiB7XG4gICAgZXhjbHVkZTogW1wiZGF0YVR5cGVzXCIsIFwiYmVlR3d0U2VydmljZVwiLCBcInBtbWxEb2N1bWVudHNcIl1cbiAgfSxcbiAgYXJnczoge1xuICAgIC4uLkVtcHR5RXhwcmVzc2lvbi5hcmdzLFxuICAgIGV4cHJlc3Npb246IHtcbiAgICAgIF9fJCRlbGVtZW50OiBcImxpc3RcIixcbiAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICAgIFwiQF9sYWJlbFwiOiBcIkV4cHJlc3Npb24gTmFtZVwiLFxuICAgICAgZXhwcmVzc2lvbjogW3tcbiAgICAgICAgX18kJGVsZW1lbnQ6IFwibGl0ZXJhbEV4cHJlc3Npb25cIixcbiAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpXG4gICAgICB9LCB7XG4gICAgICAgIF9fJCRlbGVtZW50OiBcImxpc3RcIixcbiAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgICBleHByZXNzaW9uOiBbe1xuICAgICAgICAgIF9fJCRlbGVtZW50OiBcImxpdGVyYWxFeHByZXNzaW9uXCIsXG4gICAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpXG4gICAgICAgIH1dXG4gICAgICB9XVxuICAgIH0sXG4gICAgaXNSZXNldFN1cHBvcnRlZE9uUm9vdEV4cHJlc3Npb246IGZhbHNlXG4gIH1cbn07XG5CYXNlLnBhcmFtZXRlcnMgPSB7XG4gIC4uLkJhc2UucGFyYW1ldGVycyxcbiAgZG9jczoge1xuICAgIC4uLkJhc2UucGFyYW1ldGVycz8uZG9jcyxcbiAgICBzb3VyY2U6IHtcbiAgICAgIG9yaWdpbmFsU291cmNlOiBcIntcXG4gIHJlbmRlcjogYXJncyA9PiBCb3hlZEV4cHJlc3Npb25FZGl0b3JTdG9yeSgpLFxcbiAgcGFyYW1ldGVyczoge1xcbiAgICBleGNsdWRlOiBbXFxcImRhdGFUeXBlc1xcXCIsIFxcXCJiZWVHd3RTZXJ2aWNlXFxcIiwgXFxcInBtbWxEb2N1bWVudHNcXFwiXVxcbiAgfSxcXG4gIGFyZ3M6IHtcXG4gICAgLi4uRW1wdHlFeHByZXNzaW9uLmFyZ3MsXFxuICAgIGV4cHJlc3Npb246IHtcXG4gICAgICBfXyQkZWxlbWVudDogXFxcImxpc3RcXFwiLFxcbiAgICAgIFxcXCJAX2lkXFxcIjogZ2VuZXJhdGVVdWlkKCksXFxuICAgICAgXFxcIkBfbGFiZWxcXFwiOiBcXFwiRXhwcmVzc2lvbiBOYW1lXFxcIixcXG4gICAgICBleHByZXNzaW9uOiBbdW5kZWZpbmVkIV1cXG4gICAgfSxcXG4gICAgaXNSZXNldFN1cHBvcnRlZE9uUm9vdEV4cHJlc3Npb246IHRydWVcXG4gIH1cXG59XCIsXG4gICAgICAuLi5CYXNlLnBhcmFtZXRlcnM/LmRvY3M/LnNvdXJjZVxuICAgIH1cbiAgfVxufTtcblJlYWRvbmx5LnBhcmFtZXRlcnMgPSB7XG4gIC4uLlJlYWRvbmx5LnBhcmFtZXRlcnMsXG4gIGRvY3M6IHtcbiAgICAuLi5SZWFkb25seS5wYXJhbWV0ZXJzPy5kb2NzLFxuICAgIHNvdXJjZToge1xuICAgICAgb3JpZ2luYWxTb3VyY2U6IFwie1xcbiAgcmVuZGVyOiBhcmdzID0+IEJveGVkRXhwcmVzc2lvbkVkaXRvclN0b3J5KCksXFxuICBwYXJhbWV0ZXJzOiB7XFxuICAgIGV4Y2x1ZGU6IFtcXFwiZGF0YVR5cGVzXFxcIiwgXFxcImJlZUd3dFNlcnZpY2VcXFwiLCBcXFwicG1tbERvY3VtZW50c1xcXCJdXFxuICB9LFxcbiAgYXJnczoge1xcbiAgICAuLi5FbXB0eUV4cHJlc3Npb24uYXJncyxcXG4gICAgZXhwcmVzc2lvbjoge1xcbiAgICAgIF9fJCRlbGVtZW50OiBcXFwibGlzdFxcXCIsXFxuICAgICAgXFxcIkBfaWRcXFwiOiBnZW5lcmF0ZVV1aWQoKSxcXG4gICAgICBcXFwiQF9sYWJlbFxcXCI6IFxcXCJFeHByZXNzaW9uIE5hbWVcXFwiLFxcbiAgICAgIGV4cHJlc3Npb246IFt7XFxuICAgICAgICBfXyQkZWxlbWVudDogXFxcImxpdGVyYWxFeHByZXNzaW9uXFxcIixcXG4gICAgICAgIFxcXCJAX2lkXFxcIjogZ2VuZXJhdGVVdWlkKCksXFxuICAgICAgICB0ZXh0OiB7XFxuICAgICAgICAgIF9fJCR0ZXh0OiBcXFwicmVhZCBvbmx5XFxcIlxcbiAgICAgICAgfVxcbiAgICAgIH1dXFxuICAgIH0sXFxuICAgIGlzUmVzZXRTdXBwb3J0ZWRPblJvb3RFeHByZXNzaW9uOiB0cnVlLFxcbiAgICBpc1JlYWRPbmx5OiB0cnVlXFxuICB9XFxufVwiLFxuICAgICAgLi4uUmVhZG9ubHkucGFyYW1ldGVycz8uZG9jcz8uc291cmNlXG4gICAgfVxuICB9XG59O1xuQWdlR3JvdXBzLnBhcmFtZXRlcnMgPSB7XG4gIC4uLkFnZUdyb3Vwcy5wYXJhbWV0ZXJzLFxuICBkb2NzOiB7XG4gICAgLi4uQWdlR3JvdXBzLnBhcmFtZXRlcnM/LmRvY3MsXG4gICAgc291cmNlOiB7XG4gICAgICBvcmlnaW5hbFNvdXJjZTogXCJ7XFxuICByZW5kZXI6IGFyZ3MgPT4gQm94ZWRFeHByZXNzaW9uRWRpdG9yU3RvcnkoKSxcXG4gIHBhcmFtZXRlcnM6IHtcXG4gICAgZXhjbHVkZTogW1xcXCJkYXRhVHlwZXNcXFwiLCBcXFwiYmVlR3d0U2VydmljZVxcXCIsIFxcXCJwbW1sRG9jdW1lbnRzXFxcIl1cXG4gIH0sXFxuICBhcmdzOiB7XFxuICAgIC4uLkVtcHR5RXhwcmVzc2lvbi5hcmdzLFxcbiAgICBleHByZXNzaW9uOiB7XFxuICAgICAgX18kJGVsZW1lbnQ6IFxcXCJsaXN0XFxcIixcXG4gICAgICBcXFwiQF9pZFxcXCI6IGdlbmVyYXRlVXVpZCgpLFxcbiAgICAgIFxcXCJAX2xhYmVsXFxcIjogXFxcIkFnZSBncm91cFxcXCIsXFxuICAgICAgXFxcIkBfdHlwZVJlZlxcXCI6IERtbkJ1aWx0SW5EYXRhVHlwZS5OdW1iZXIsXFxuICAgICAgZXhwcmVzc2lvbjogW3tcXG4gICAgICAgIF9fJCRlbGVtZW50OiBcXFwibGl0ZXJhbEV4cHJlc3Npb25cXFwiLFxcbiAgICAgICAgXFxcIkBfaWRcXFwiOiBnZW5lcmF0ZVV1aWQoKSxcXG4gICAgICAgIHRleHQ6IHtcXG4gICAgICAgICAgX18kJHRleHQ6IGBbMTguLjMwKWBcXG4gICAgICAgIH1cXG4gICAgICB9LCB7XFxuICAgICAgICBfXyQkZWxlbWVudDogXFxcImxpdGVyYWxFeHByZXNzaW9uXFxcIixcXG4gICAgICAgIFxcXCJAX2lkXFxcIjogZ2VuZXJhdGVVdWlkKCksXFxuICAgICAgICB0ZXh0OiB7XFxuICAgICAgICAgIF9fJCR0ZXh0OiBgWzMwLi41MClgXFxuICAgICAgICB9XFxuICAgICAgfSwge1xcbiAgICAgICAgX18kJGVsZW1lbnQ6IFxcXCJsaXRlcmFsRXhwcmVzc2lvblxcXCIsXFxuICAgICAgICBcXFwiQF9pZFxcXCI6IGdlbmVyYXRlVXVpZCgpLFxcbiAgICAgICAgdGV4dDoge1xcbiAgICAgICAgICBfXyQkdGV4dDogYFs1MC4uNzApYFxcbiAgICAgICAgfVxcbiAgICAgIH0sIHtcXG4gICAgICAgIF9fJCRlbGVtZW50OiBcXFwibGl0ZXJhbEV4cHJlc3Npb25cXFwiLFxcbiAgICAgICAgXFxcIkBfaWRcXFwiOiBnZW5lcmF0ZVV1aWQoKSxcXG4gICAgICAgIHRleHQ6IHtcXG4gICAgICAgICAgX18kJHRleHQ6IGA+PSA3MGBcXG4gICAgICAgIH1cXG4gICAgICB9XVxcbiAgICB9LFxcbiAgICBpc1Jlc2V0U3VwcG9ydGVkT25Sb290RXhwcmVzc2lvbjogZmFsc2VcXG4gIH1cXG59XCIsXG4gICAgICAuLi5BZ2VHcm91cHMucGFyYW1ldGVycz8uZG9jcz8uc291cmNlXG4gICAgfVxuICB9XG59O1xuTmVzdGVkLnBhcmFtZXRlcnMgPSB7XG4gIC4uLk5lc3RlZC5wYXJhbWV0ZXJzLFxuICBkb2NzOiB7XG4gICAgLi4uTmVzdGVkLnBhcmFtZXRlcnM/LmRvY3MsXG4gICAgc291cmNlOiB7XG4gICAgICBvcmlnaW5hbFNvdXJjZTogXCJ7XFxuICByZW5kZXI6IGFyZ3MgPT4gQm94ZWRFeHByZXNzaW9uRWRpdG9yU3RvcnkoKSxcXG4gIHBhcmFtZXRlcnM6IHtcXG4gICAgZXhjbHVkZTogW1xcXCJkYXRhVHlwZXNcXFwiLCBcXFwiYmVlR3d0U2VydmljZVxcXCIsIFxcXCJwbW1sRG9jdW1lbnRzXFxcIl1cXG4gIH0sXFxuICBhcmdzOiB7XFxuICAgIC4uLkVtcHR5RXhwcmVzc2lvbi5hcmdzLFxcbiAgICBleHByZXNzaW9uOiB7XFxuICAgICAgX18kJGVsZW1lbnQ6IFxcXCJsaXN0XFxcIixcXG4gICAgICBcXFwiQF9pZFxcXCI6IGdlbmVyYXRlVXVpZCgpLFxcbiAgICAgIFxcXCJAX2xhYmVsXFxcIjogXFxcIkV4cHJlc3Npb24gTmFtZVxcXCIsXFxuICAgICAgZXhwcmVzc2lvbjogW3tcXG4gICAgICAgIF9fJCRlbGVtZW50OiBcXFwibGl0ZXJhbEV4cHJlc3Npb25cXFwiLFxcbiAgICAgICAgXFxcIkBfaWRcXFwiOiBnZW5lcmF0ZVV1aWQoKVxcbiAgICAgIH0sIHtcXG4gICAgICAgIF9fJCRlbGVtZW50OiBcXFwibGlzdFxcXCIsXFxuICAgICAgICBcXFwiQF9pZFxcXCI6IGdlbmVyYXRlVXVpZCgpLFxcbiAgICAgICAgZXhwcmVzc2lvbjogW3tcXG4gICAgICAgICAgX18kJGVsZW1lbnQ6IFxcXCJsaXRlcmFsRXhwcmVzc2lvblxcXCIsXFxuICAgICAgICAgIFxcXCJAX2lkXFxcIjogZ2VuZXJhdGVVdWlkKClcXG4gICAgICAgIH1dXFxuICAgICAgfV1cXG4gICAgfSxcXG4gICAgaXNSZXNldFN1cHBvcnRlZE9uUm9vdEV4cHJlc3Npb246IGZhbHNlXFxuICB9XFxufVwiLFxuICAgICAgLi4uTmVzdGVkLnBhcmFtZXRlcnM/LmRvY3M/LnNvdXJjZVxuICAgIH1cbiAgfVxufTsiLCIvKlxuICogTGljZW5zZWQgdG8gdGhlIEFwYWNoZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIChBU0YpIHVuZGVyIG9uZVxuICogb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuICBTZWUgdGhlIE5PVElDRSBmaWxlXG4gKiBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvblxuICogcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuICBUaGUgQVNGIGxpY2Vuc2VzIHRoaXMgZmlsZVxuICogdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZVxuICogXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4gKiB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZyxcbiAqIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXG4gKiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxuICogS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlXG4gKiBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zXG4gKiB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgdHlwZSB7IE1ldGEsIFN0b3J5T2JqIH0gZnJvbSBcIkBzdG9yeWJvb2svcmVhY3RcIjtcbmltcG9ydCB7IEJveGVkRXhwcmVzc2lvbkVkaXRvciwgQm94ZWRFeHByZXNzaW9uRWRpdG9yUHJvcHMgfSBmcm9tIFwiLi4vLi4vLi4vc3JjL0JveGVkRXhwcmVzc2lvbkVkaXRvclwiO1xuaW1wb3J0IHsgYmVlR3d0U2VydmljZSwgQm94ZWRFeHByZXNzaW9uRWRpdG9yU3RvcnksIEJveGVkRXhwcmVzc2lvbkVkaXRvclN0b3J5QXJncywgZGF0YVR5cGVzLCBwbW1sRG9jdW1lbnRzIH0gZnJvbSBcIi4uLy4uL2JveGVkRXhwcmVzc2lvblN0b3JpZXNXcmFwcGVyXCI7XG5cbi8vIE1vcmUgb24gaG93IHRvIHNldCB1cCBzdG9yaWVzIGF0OiBodHRwczovL3N0b3J5Ym9vay5qcy5vcmcvZG9jcy9yZWFjdC93cml0aW5nLXN0b3JpZXMvaW50cm9kdWN0aW9uI2RlZmF1bHQtZXhwb3J0XG5jb25zdCBtZXRhOiBNZXRhPEJveGVkRXhwcmVzc2lvbkVkaXRvclByb3BzPiA9IHtcbiAgdGl0bGU6IFwiTWlzYy9FbXB0eSBCb3hlZCBFeHByZXNzaW9uXCIsXG4gIGNvbXBvbmVudDogQm94ZWRFeHByZXNzaW9uRWRpdG9yLFxuICBpbmNsdWRlU3RvcmllczogL15bQS1aXS9cbn07XG5leHBvcnQgZGVmYXVsdCBtZXRhO1xudHlwZSBTdG9yeSA9IFN0b3J5T2JqPEJveGVkRXhwcmVzc2lvbkVkaXRvclN0b3J5QXJncz47XG5cbi8vIE1vcmUgb24gd3JpdGluZyBzdG9yaWVzIHdpdGggYXJnczogaHR0cHM6Ly9zdG9yeWJvb2suanMub3JnL2RvY3MvcmVhY3Qvd3JpdGluZy1zdG9yaWVzL2FyZ3NcbmV4cG9ydCBjb25zdCBCYXNlOiBTdG9yeSA9IHtcbiAgcmVuZGVyOiBhcmdzID0+IEJveGVkRXhwcmVzc2lvbkVkaXRvclN0b3J5KCksXG4gIGFyZ3M6IHtcbiAgICBleHByZXNzaW9uSG9sZGVySWQ6IFwiXzAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMFwiLFxuICAgIGV4cHJlc3Npb246IHVuZGVmaW5lZCxcbiAgICB3aWR0aHNCeUlkOiB7fSxcbiAgICBkYXRhVHlwZXMsXG4gICAgYmVlR3d0U2VydmljZSxcbiAgICBwbW1sRG9jdW1lbnRzLFxuICAgIGlzUmVzZXRTdXBwb3J0ZWRPblJvb3RFeHByZXNzaW9uOiB0cnVlXG4gIH1cbn07XG5CYXNlLnBhcmFtZXRlcnMgPSB7XG4gIC4uLkJhc2UucGFyYW1ldGVycyxcbiAgZG9jczoge1xuICAgIC4uLkJhc2UucGFyYW1ldGVycz8uZG9jcyxcbiAgICBzb3VyY2U6IHtcbiAgICAgIG9yaWdpbmFsU291cmNlOiBcIntcXG4gIHJlbmRlcjogYXJncyA9PiBCb3hlZEV4cHJlc3Npb25FZGl0b3JTdG9yeSgpLFxcbiAgYXJnczoge1xcbiAgICBleHByZXNzaW9uSG9sZGVySWQ6IFxcXCJfMDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwXFxcIixcXG4gICAgZXhwcmVzc2lvbjogdW5kZWZpbmVkLFxcbiAgICB3aWR0aHNCeUlkOiB7fSxcXG4gICAgZGF0YVR5cGVzLFxcbiAgICBiZWVHd3RTZXJ2aWNlLFxcbiAgICBwbW1sRG9jdW1lbnRzLFxcbiAgICBpc1Jlc2V0U3VwcG9ydGVkT25Sb290RXhwcmVzc2lvbjogdHJ1ZVxcbiAgfVxcbn1cIixcbiAgICAgIC4uLkJhc2UucGFyYW1ldGVycz8uZG9jcz8uc291cmNlXG4gICAgfVxuICB9XG59OyJdLCJuYW1lcyI6WyJCb3hlZEV4cHJlc3Npb25FZGl0b3IiLCJCb3hlZEV4cHJlc3Npb25FZGl0b3JTdG9yeSIsIkJhc2UiLCJFbXB0eUV4cHJlc3Npb24iLCJEbW5CdWlsdEluRGF0YVR5cGUiLCJnZW5lcmF0ZVV1aWQiLCJtZXRhIiwidGl0bGUiLCJjb21wb25lbnQiLCJpbmNsdWRlU3RvcmllcyIsInJlbmRlciIsImFyZ3MiLCJwYXJhbWV0ZXJzIiwiZXhjbHVkZSIsImV4cHJlc3Npb24iLCJfXyQkZWxlbWVudCIsInVuZGVmaW5lZCIsImlzUmVzZXRTdXBwb3J0ZWRPblJvb3RFeHByZXNzaW9uIiwiUmVhZG9ubHkiLCJ0ZXh0IiwiX18kJHRleHQiLCJpc1JlYWRPbmx5IiwiQWdlR3JvdXBzIiwiTnVtYmVyIiwiTmVzdGVkIiwiZG9jcyIsIl9hIiwic291cmNlIiwib3JpZ2luYWxTb3VyY2UiLCJfYyIsIl9iIiwiX2QiLCJfZiIsIl9lIiwiX2ciLCJfaiIsIl9oIiwiX2siLCJfbSIsIl9sIiwiX19uYW1lZEV4cG9ydHNPcmRlciIsImJlZUd3dFNlcnZpY2UiLCJkYXRhVHlwZXMiLCJwbW1sRG9jdW1lbnRzIiwiZXhwcmVzc2lvbkhvbGRlcklkIiwid2lkdGhzQnlJZCJdLCJzb3VyY2VSb290IjoiIn0=