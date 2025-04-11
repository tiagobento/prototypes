"use strict";
(self["webpackChunk_kie_tools_boxed_expression_component"] = self["webpackChunk_kie_tools_boxed_expression_component"] || []).push([["boxedExpressions-For-For-stories"],{

/***/ "./stories/boxedExpressions/For/For.stories.tsx":
/*!******************************************************!*\
  !*** ./stories/boxedExpressions/For/For.stories.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Base: () => (/* binding */ Base),
/* harmony export */   Readonly: () => (/* binding */ Readonly),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _src_BoxedExpressionEditor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/BoxedExpressionEditor */ "./src/BoxedExpressionEditor.tsx");
/* harmony import */ var _boxedExpressionStoriesWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../boxedExpressionStoriesWrapper */ "./stories/boxedExpressionStoriesWrapper.tsx");
/* harmony import */ var _src_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../src/api */ "./src/api/index.ts");
/* harmony import */ var _misc_Empty_EmptyExpression_stories__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../misc/Empty/EmptyExpression.stories */ "./stories/misc/Empty/EmptyExpression.stories.tsx");
var _a, _b, _c, _d, _e, _f;




const meta = {
  title: "Boxed Expressions/For",
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
      __$$element: "for",
      "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_2__.generateUuid)(),
      "@_label": "Expression Name",
      in: {
        "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_2__.generateUuid)(),
        expression: undefined
      },
      return: {
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
      __$$element: "for",
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
      return: {
        "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_2__.generateUuid)(),
        expression: {
          "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_2__.generateUuid)(),
          __$$element: "literalExpression",
          text: {
            __$$text: "readOnlyTest(itemReadOnly)"
          }
        }
      },
      "@_iteratorVariable": "itemReadOnly"
    },
    isReadOnly: true
  }
};
Base.parameters = {
  ...Base.parameters,
  docs: {
    ...((_a = Base.parameters) === null || _a === void 0 ? void 0 : _a.docs),
    source: {
      originalSource: "{\n  render: args => BoxedExpressionEditorStory(),\n  parameters: {\n    exclude: [\"dataTypes\", \"beeGwtService\", \"pmmlDocuments\"]\n  },\n  args: {\n    ...EmptyExpression.args,\n    expression: {\n      __$$element: \"for\",\n      \"@_id\": generateUuid(),\n      \"@_label\": \"Expression Name\",\n      in: {\n        \"@_id\": generateUuid(),\n        expression: undefined! // SPEC DISCREPANCY: Starting without an expression gives users the ability to select the expression type.\n      },\n      return: {\n        \"@_id\": generateUuid(),\n        expression: undefined! // SPEC DISCREPANCY: Starting without an expression gives users the ability to select the expression type.\n      }\n    }\n  }\n}",
      ...((_c = (_b = Base.parameters) === null || _b === void 0 ? void 0 : _b.docs) === null || _c === void 0 ? void 0 : _c.source)
    }
  }
};
Readonly.parameters = {
  ...Readonly.parameters,
  docs: {
    ...((_d = Readonly.parameters) === null || _d === void 0 ? void 0 : _d.docs),
    source: {
      originalSource: "{\n  render: args => BoxedExpressionEditorStory(),\n  parameters: {\n    exclude: [\"dataTypes\", \"beeGwtService\", \"pmmlDocuments\"]\n  },\n  args: {\n    ...EmptyExpression.args,\n    expression: {\n      __$$element: \"for\",\n      \"@_id\": generateUuid(),\n      \"@_label\": \"Expression Name\",\n      in: {\n        \"@_id\": generateUuid(),\n        expression: {\n          \"@_id\": generateUuid(),\n          __$$element: \"literalExpression\",\n          text: {\n            __$$text: \"['read', 'only']\"\n          }\n        }\n      },\n      return: {\n        \"@_id\": generateUuid(),\n        expression: {\n          \"@_id\": generateUuid(),\n          __$$element: \"literalExpression\",\n          text: {\n            __$$text: \"readOnlyTest(itemReadOnly)\"\n          }\n        }\n      },\n      \"@_iteratorVariable\": \"itemReadOnly\"\n    },\n    isReadOnly: true\n  }\n}",
      ...((_f = (_e = Readonly.parameters) === null || _e === void 0 ? void 0 : _e.docs) === null || _f === void 0 ? void 0 : _f.source)
    }
  }
};
const __namedExportsOrder = ["Base", "Readonly"];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm94ZWRFeHByZXNzaW9ucy1Gb3ItRm9yLXN0b3JpZXMuMTBlOGM1MzUuaWZyYW1lLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQnVHO0FBQ1U7QUFDakU7QUFDbUM7QUFHbkYsTUFBTUssSUFBSSxHQUFxQztFQUM3Q0MsS0FBSyxFQUFFLHVCQUF1QjtFQUM5QkMsU0FBUyxFQUFFUCw2RUFBcUI7RUFDaENRLGNBQWMsRUFBRTtDQUNqQjtBQUNELGlFQUFlSCxJQUFJLEVBQUM7QUFJYixNQUFNRixJQUFJLEdBQVU7RUFDekJNLE1BQU0sRUFBRUMsSUFBSSxJQUFJVCwwRkFBMEIsRUFBRTtFQUM1Q1UsVUFBVSxFQUFFO0lBQ1ZDLE9BQU8sRUFBRSxDQUFDLFdBQVcsRUFBRSxlQUFlLEVBQUUsZUFBZTtHQUN4RDtFQUNERixJQUFJLEVBQUU7SUFDSixHQUFHTixxRUFBZSxDQUFDTSxJQUFJO0lBQ3ZCRyxVQUFVLEVBQUU7TUFDVkMsV0FBVyxFQUFFLEtBQUs7TUFDbEIsTUFBTSxFQUFFWixzREFBWSxFQUFFO01BQ3RCLFNBQVMsRUFBRSxpQkFBaUI7TUFDNUJhLEVBQUUsRUFBRTtRQUNGLE1BQU0sRUFBRWIsc0RBQVksRUFBRTtRQUN0QlcsVUFBVSxFQUFFRztPQUNiO01BQ0RDLE1BQU0sRUFBRTtRQUNOLE1BQU0sRUFBRWYsc0RBQVksRUFBRTtRQUN0QlcsVUFBVSxFQUFFRzs7OztDQUluQjtBQUNNLE1BQU1FLFFBQVEsR0FBVTtFQUM3QlQsTUFBTSxFQUFFQyxJQUFJLElBQUlULDBGQUEwQixFQUFFO0VBQzVDVSxVQUFVLEVBQUU7SUFDVkMsT0FBTyxFQUFFLENBQUMsV0FBVyxFQUFFLGVBQWUsRUFBRSxlQUFlO0dBQ3hEO0VBQ0RGLElBQUksRUFBRTtJQUNKLEdBQUdOLHFFQUFlLENBQUNNLElBQUk7SUFDdkJHLFVBQVUsRUFBRTtNQUNWQyxXQUFXLEVBQUUsS0FBSztNQUNsQixNQUFNLEVBQUVaLHNEQUFZLEVBQUU7TUFD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c3Rvcmllcy9ib3hlZEV4cHJlc3Npb25zL0Zvci9Gb3Iuc3Rvcmllcy50c3giLCJ3ZWJwYWNrOi8vQGtpZS10b29scy9ib3hlZC1leHByZXNzaW9uLWNvbXBvbmVudC8uL3N0b3JpZXMvbWlzYy9FbXB0eS9FbXB0eUV4cHJlc3Npb24uc3Rvcmllcy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIExpY2Vuc2VkIHRvIHRoZSBBcGFjaGUgU29mdHdhcmUgRm91bmRhdGlvbiAoQVNGKSB1bmRlciBvbmVcbiAqIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiAgU2VlIHRoZSBOT1RJQ0UgZmlsZVxuICogZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb25cbiAqIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLiAgVGhlIEFTRiBsaWNlbnNlcyB0aGlzIGZpbGVcbiAqIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGVcbiAqIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuICogd2l0aCB0aGUgTGljZW5zZS4gIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsXG4gKiBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxuICogXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcbiAqIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZVxuICogc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9uc1xuICogdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgTWV0YSwgU3RvcnlPYmogfSBmcm9tIFwiQHN0b3J5Ym9vay9yZWFjdFwiO1xuaW1wb3J0IHsgQm94ZWRFeHByZXNzaW9uRWRpdG9yLCBCb3hlZEV4cHJlc3Npb25FZGl0b3JQcm9wcyB9IGZyb20gXCIuLi8uLi8uLi9zcmMvQm94ZWRFeHByZXNzaW9uRWRpdG9yXCI7XG5pbXBvcnQgeyBCb3hlZEV4cHJlc3Npb25FZGl0b3JTdG9yeSwgQm94ZWRFeHByZXNzaW9uRWRpdG9yU3RvcnlBcmdzIH0gZnJvbSBcIi4uLy4uL2JveGVkRXhwcmVzc2lvblN0b3JpZXNXcmFwcGVyXCI7XG5pbXBvcnQgeyBnZW5lcmF0ZVV1aWQgfSBmcm9tIFwiLi4vLi4vLi4vc3JjL2FwaVwiO1xuaW1wb3J0IHsgQmFzZSBhcyBFbXB0eUV4cHJlc3Npb24gfSBmcm9tIFwiLi4vLi4vbWlzYy9FbXB0eS9FbXB0eUV4cHJlc3Npb24uc3Rvcmllc1wiO1xuXG4vLyBNb3JlIG9uIGhvdyB0byBzZXQgdXAgc3RvcmllcyBhdDogaHR0cHM6Ly9zdG9yeWJvb2suanMub3JnL2RvY3MvcmVhY3Qvd3JpdGluZy1zdG9yaWVzL2ludHJvZHVjdGlvbiNkZWZhdWx0LWV4cG9ydFxuY29uc3QgbWV0YTogTWV0YTxCb3hlZEV4cHJlc3Npb25FZGl0b3JQcm9wcz4gPSB7XG4gIHRpdGxlOiBcIkJveGVkIEV4cHJlc3Npb25zL0ZvclwiLFxuICBjb21wb25lbnQ6IEJveGVkRXhwcmVzc2lvbkVkaXRvcixcbiAgaW5jbHVkZVN0b3JpZXM6IC9eW0EtWl0vXG59O1xuZXhwb3J0IGRlZmF1bHQgbWV0YTtcbnR5cGUgU3RvcnkgPSBTdG9yeU9iajxCb3hlZEV4cHJlc3Npb25FZGl0b3JTdG9yeUFyZ3M+O1xuXG4vLyBNb3JlIG9uIHdyaXRpbmcgc3RvcmllcyB3aXRoIGFyZ3M6IGh0dHBzOi8vc3Rvcnlib29rLmpzLm9yZy9kb2NzL3JlYWN0L3dyaXRpbmctc3Rvcmllcy9hcmdzXG5leHBvcnQgY29uc3QgQmFzZTogU3RvcnkgPSB7XG4gIHJlbmRlcjogYXJncyA9PiBCb3hlZEV4cHJlc3Npb25FZGl0b3JTdG9yeSgpLFxuICBwYXJhbWV0ZXJzOiB7XG4gICAgZXhjbHVkZTogW1wiZGF0YVR5cGVzXCIsIFwiYmVlR3d0U2VydmljZVwiLCBcInBtbWxEb2N1bWVudHNcIl1cbiAgfSxcbiAgYXJnczoge1xuICAgIC4uLkVtcHR5RXhwcmVzc2lvbi5hcmdzLFxuICAgIGV4cHJlc3Npb246IHtcbiAgICAgIF9fJCRlbGVtZW50OiBcImZvclwiLFxuICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgXCJAX2xhYmVsXCI6IFwiRXhwcmVzc2lvbiBOYW1lXCIsXG4gICAgICBpbjoge1xuICAgICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICAgIGV4cHJlc3Npb246IHVuZGVmaW5lZCEgLy8gU1BFQyBESVNDUkVQQU5DWTogU3RhcnRpbmcgd2l0aG91dCBhbiBleHByZXNzaW9uIGdpdmVzIHVzZXJzIHRoZSBhYmlsaXR5IHRvIHNlbGVjdCB0aGUgZXhwcmVzc2lvbiB0eXBlLlxuICAgICAgfSxcbiAgICAgIHJldHVybjoge1xuICAgICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICAgIGV4cHJlc3Npb246IHVuZGVmaW5lZCEgLy8gU1BFQyBESVNDUkVQQU5DWTogU3RhcnRpbmcgd2l0aG91dCBhbiBleHByZXNzaW9uIGdpdmVzIHVzZXJzIHRoZSBhYmlsaXR5IHRvIHNlbGVjdCB0aGUgZXhwcmVzc2lvbiB0eXBlLlxuICAgICAgfVxuICAgIH1cbiAgfVxufTtcbmV4cG9ydCBjb25zdCBSZWFkb25seTogU3RvcnkgPSB7XG4gIHJlbmRlcjogYXJncyA9PiBCb3hlZEV4cHJlc3Npb25FZGl0b3JTdG9yeSgpLFxuICBwYXJhbWV0ZXJzOiB7XG4gICAgZXhjbHVkZTogW1wiZGF0YVR5cGVzXCIsIFwiYmVlR3d0U2VydmljZVwiLCBcInBtbWxEb2N1bWVudHNcIl1cbiAgfSxcbiAgYXJnczoge1xuICAgIC4uLkVtcHR5RXhwcmVzc2lvbi5hcmdzLFxuICAgIGV4cHJlc3Npb246IHtcbiAgICAgIF9fJCRlbGVtZW50OiBcImZvclwiLFxuICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgXCJAX2xhYmVsXCI6IFwiRXhwcmVzc2lvbiBOYW1lXCIsXG4gICAgICBpbjoge1xuICAgICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICAgIGV4cHJlc3Npb246IHtcbiAgICAgICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICAgICAgX18kJGVsZW1lbnQ6IFwibGl0ZXJhbEV4cHJlc3Npb25cIixcbiAgICAgICAgICB0ZXh0OiB7XG4gICAgICAgICAgICBfXyQkdGV4dDogXCJbJ3JlYWQnLCAnb25seSddXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICByZXR1cm46IHtcbiAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgICBleHByZXNzaW9uOiB7XG4gICAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgICAgIF9fJCRlbGVtZW50OiBcImxpdGVyYWxFeHByZXNzaW9uXCIsXG4gICAgICAgICAgdGV4dDoge1xuICAgICAgICAgICAgX18kJHRleHQ6IFwicmVhZE9ubHlUZXN0KGl0ZW1SZWFkT25seSlcIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiQF9pdGVyYXRvclZhcmlhYmxlXCI6IFwiaXRlbVJlYWRPbmx5XCJcbiAgICB9LFxuICAgIGlzUmVhZE9ubHk6IHRydWVcbiAgfVxufTtcbkJhc2UucGFyYW1ldGVycyA9IHtcbiAgLi4uQmFzZS5wYXJhbWV0ZXJzLFxuICBkb2NzOiB7XG4gICAgLi4uQmFzZS5wYXJhbWV0ZXJzPy5kb2NzLFxuICAgIHNvdXJjZToge1xuICAgICAgb3JpZ2luYWxTb3VyY2U6IFwie1xcbiAgcmVuZGVyOiBhcmdzID0+IEJveGVkRXhwcmVzc2lvbkVkaXRvclN0b3J5KCksXFxuICBwYXJhbWV0ZXJzOiB7XFxuICAgIGV4Y2x1ZGU6IFtcXFwiZGF0YVR5cGVzXFxcIiwgXFxcImJlZUd3dFNlcnZpY2VcXFwiLCBcXFwicG1tbERvY3VtZW50c1xcXCJdXFxuICB9LFxcbiAgYXJnczoge1xcbiAgICAuLi5FbXB0eUV4cHJlc3Npb24uYXJncyxcXG4gICAgZXhwcmVzc2lvbjoge1xcbiAgICAgIF9fJCRlbGVtZW50OiBcXFwiZm9yXFxcIixcXG4gICAgICBcXFwiQF9pZFxcXCI6IGdlbmVyYXRlVXVpZCgpLFxcbiAgICAgIFxcXCJAX2xhYmVsXFxcIjogXFxcIkV4cHJlc3Npb24gTmFtZVxcXCIsXFxuICAgICAgaW46IHtcXG4gICAgICAgIFxcXCJAX2lkXFxcIjogZ2VuZXJhdGVVdWlkKCksXFxuICAgICAgICBleHByZXNzaW9uOiB1bmRlZmluZWQhIC8vIFNQRUMgRElTQ1JFUEFOQ1k6IFN0YXJ0aW5nIHdpdGhvdXQgYW4gZXhwcmVzc2lvbiBnaXZlcyB1c2VycyB0aGUgYWJpbGl0eSB0byBzZWxlY3QgdGhlIGV4cHJlc3Npb24gdHlwZS5cXG4gICAgICB9LFxcbiAgICAgIHJldHVybjoge1xcbiAgICAgICAgXFxcIkBfaWRcXFwiOiBnZW5lcmF0ZVV1aWQoKSxcXG4gICAgICAgIGV4cHJlc3Npb246IHVuZGVmaW5lZCEgLy8gU1BFQyBESVNDUkVQQU5DWTogU3RhcnRpbmcgd2l0aG91dCBhbiBleHByZXNzaW9uIGdpdmVzIHVzZXJzIHRoZSBhYmlsaXR5IHRvIHNlbGVjdCB0aGUgZXhwcmVzc2lvbiB0eXBlLlxcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cIixcbiAgICAgIC4uLkJhc2UucGFyYW1ldGVycz8uZG9jcz8uc291cmNlXG4gICAgfVxuICB9XG59O1xuUmVhZG9ubHkucGFyYW1ldGVycyA9IHtcbiAgLi4uUmVhZG9ubHkucGFyYW1ldGVycyxcbiAgZG9jczoge1xuICAgIC4uLlJlYWRvbmx5LnBhcmFtZXRlcnM/LmRvY3MsXG4gICAgc291cmNlOiB7XG4gICAgICBvcmlnaW5hbFNvdXJjZTogXCJ7XFxuICByZW5kZXI6IGFyZ3MgPT4gQm94ZWRFeHByZXNzaW9uRWRpdG9yU3RvcnkoKSxcXG4gIHBhcmFtZXRlcnM6IHtcXG4gICAgZXhjbHVkZTogW1xcXCJkYXRhVHlwZXNcXFwiLCBcXFwiYmVlR3d0U2VydmljZVxcXCIsIFxcXCJwbW1sRG9jdW1lbnRzXFxcIl1cXG4gIH0sXFxuICBhcmdzOiB7XFxuICAgIC4uLkVtcHR5RXhwcmVzc2lvbi5hcmdzLFxcbiAgICBleHByZXNzaW9uOiB7XFxuICAgICAgX18kJGVsZW1lbnQ6IFxcXCJmb3JcXFwiLFxcbiAgICAgIFxcXCJAX2lkXFxcIjogZ2VuZXJhdGVVdWlkKCksXFxuICAgICAgXFxcIkBfbGFiZWxcXFwiOiBcXFwiRXhwcmVzc2lvbiBOYW1lXFxcIixcXG4gICAgICBpbjoge1xcbiAgICAgICAgXFxcIkBfaWRcXFwiOiBnZW5lcmF0ZVV1aWQoKSxcXG4gICAgICAgIGV4cHJlc3Npb246IHtcXG4gICAgICAgICAgXFxcIkBfaWRcXFwiOiBnZW5lcmF0ZVV1aWQoKSxcXG4gICAgICAgICAgX18kJGVsZW1lbnQ6IFxcXCJsaXRlcmFsRXhwcmVzc2lvblxcXCIsXFxuICAgICAgICAgIHRleHQ6IHtcXG4gICAgICAgICAgICBfXyQkdGV4dDogXFxcIlsncmVhZCcsICdvbmx5J11cXFwiXFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICB9LFxcbiAgICAgIHJldHVybjoge1xcbiAgICAgICAgXFxcIkBfaWRcXFwiOiBnZW5lcmF0ZVV1aWQoKSxcXG4gICAgICAgIGV4cHJlc3Npb246IHtcXG4gICAgICAgICAgXFxcIkBfaWRcXFwiOiBnZW5lcmF0ZVV1aWQoKSxcXG4gICAgICAgICAgX18kJGVsZW1lbnQ6IFxcXCJsaXRlcmFsRXhwcmVzc2lvblxcXCIsXFxuICAgICAgICAgIHRleHQ6IHtcXG4gICAgICAgICAgICBfXyQkdGV4dDogXFxcInJlYWRPbmx5VGVzdChpdGVtUmVhZE9ubHkpXFxcIlxcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgfSxcXG4gICAgICBcXFwiQF9pdGVyYXRvclZhcmlhYmxlXFxcIjogXFxcIml0ZW1SZWFkT25seVxcXCJcXG4gICAgfSxcXG4gICAgaXNSZWFkT25seTogdHJ1ZVxcbiAgfVxcbn1cIixcbiAgICAgIC4uLlJlYWRvbmx5LnBhcmFtZXRlcnM/LmRvY3M/LnNvdXJjZVxuICAgIH1cbiAgfVxufTsiLCIvKlxuICogTGljZW5zZWQgdG8gdGhlIEFwYWNoZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIChBU0YpIHVuZGVyIG9uZVxuICogb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuICBTZWUgdGhlIE5PVElDRSBmaWxlXG4gKiBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvblxuICogcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuICBUaGUgQVNGIGxpY2Vuc2VzIHRoaXMgZmlsZVxuICogdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZVxuICogXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4gKiB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZyxcbiAqIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXG4gKiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxuICogS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlXG4gKiBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zXG4gKiB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgdHlwZSB7IE1ldGEsIFN0b3J5T2JqIH0gZnJvbSBcIkBzdG9yeWJvb2svcmVhY3RcIjtcbmltcG9ydCB7IEJveGVkRXhwcmVzc2lvbkVkaXRvciwgQm94ZWRFeHByZXNzaW9uRWRpdG9yUHJvcHMgfSBmcm9tIFwiLi4vLi4vLi4vc3JjL0JveGVkRXhwcmVzc2lvbkVkaXRvclwiO1xuaW1wb3J0IHsgYmVlR3d0U2VydmljZSwgQm94ZWRFeHByZXNzaW9uRWRpdG9yU3RvcnksIEJveGVkRXhwcmVzc2lvbkVkaXRvclN0b3J5QXJncywgZGF0YVR5cGVzLCBwbW1sRG9jdW1lbnRzIH0gZnJvbSBcIi4uLy4uL2JveGVkRXhwcmVzc2lvblN0b3JpZXNXcmFwcGVyXCI7XG5cbi8vIE1vcmUgb24gaG93IHRvIHNldCB1cCBzdG9yaWVzIGF0OiBodHRwczovL3N0b3J5Ym9vay5qcy5vcmcvZG9jcy9yZWFjdC93cml0aW5nLXN0b3JpZXMvaW50cm9kdWN0aW9uI2RlZmF1bHQtZXhwb3J0XG5jb25zdCBtZXRhOiBNZXRhPEJveGVkRXhwcmVzc2lvbkVkaXRvclByb3BzPiA9IHtcbiAgdGl0bGU6IFwiTWlzYy9FbXB0eSBCb3hlZCBFeHByZXNzaW9uXCIsXG4gIGNvbXBvbmVudDogQm94ZWRFeHByZXNzaW9uRWRpdG9yLFxuICBpbmNsdWRlU3RvcmllczogL15bQS1aXS9cbn07XG5leHBvcnQgZGVmYXVsdCBtZXRhO1xudHlwZSBTdG9yeSA9IFN0b3J5T2JqPEJveGVkRXhwcmVzc2lvbkVkaXRvclN0b3J5QXJncz47XG5cbi8vIE1vcmUgb24gd3JpdGluZyBzdG9yaWVzIHdpdGggYXJnczogaHR0cHM6Ly9zdG9yeWJvb2suanMub3JnL2RvY3MvcmVhY3Qvd3JpdGluZy1zdG9yaWVzL2FyZ3NcbmV4cG9ydCBjb25zdCBCYXNlOiBTdG9yeSA9IHtcbiAgcmVuZGVyOiBhcmdzID0+IEJveGVkRXhwcmVzc2lvbkVkaXRvclN0b3J5KCksXG4gIGFyZ3M6IHtcbiAgICBleHByZXNzaW9uSG9sZGVySWQ6IFwiXzAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMFwiLFxuICAgIGV4cHJlc3Npb246IHVuZGVmaW5lZCxcbiAgICB3aWR0aHNCeUlkOiB7fSxcbiAgICBkYXRhVHlwZXMsXG4gICAgYmVlR3d0U2VydmljZSxcbiAgICBwbW1sRG9jdW1lbnRzLFxuICAgIGlzUmVzZXRTdXBwb3J0ZWRPblJvb3RFeHByZXNzaW9uOiB0cnVlXG4gIH1cbn07XG5CYXNlLnBhcmFtZXRlcnMgPSB7XG4gIC4uLkJhc2UucGFyYW1ldGVycyxcbiAgZG9jczoge1xuICAgIC4uLkJhc2UucGFyYW1ldGVycz8uZG9jcyxcbiAgICBzb3VyY2U6IHtcbiAgICAgIG9yaWdpbmFsU291cmNlOiBcIntcXG4gIHJlbmRlcjogYXJncyA9PiBCb3hlZEV4cHJlc3Npb25FZGl0b3JTdG9yeSgpLFxcbiAgYXJnczoge1xcbiAgICBleHByZXNzaW9uSG9sZGVySWQ6IFxcXCJfMDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwXFxcIixcXG4gICAgZXhwcmVzc2lvbjogdW5kZWZpbmVkLFxcbiAgICB3aWR0aHNCeUlkOiB7fSxcXG4gICAgZGF0YVR5cGVzLFxcbiAgICBiZWVHd3RTZXJ2aWNlLFxcbiAgICBwbW1sRG9jdW1lbnRzLFxcbiAgICBpc1Jlc2V0U3VwcG9ydGVkT25Sb290RXhwcmVzc2lvbjogdHJ1ZVxcbiAgfVxcbn1cIixcbiAgICAgIC4uLkJhc2UucGFyYW1ldGVycz8uZG9jcz8uc291cmNlXG4gICAgfVxuICB9XG59OyJdLCJuYW1lcyI6WyJCb3hlZEV4cHJlc3Npb25FZGl0b3IiLCJCb3hlZEV4cHJlc3Npb25FZGl0b3JTdG9yeSIsImdlbmVyYXRlVXVpZCIsIkJhc2UiLCJFbXB0eUV4cHJlc3Npb24iLCJtZXRhIiwidGl0bGUiLCJjb21wb25lbnQiLCJpbmNsdWRlU3RvcmllcyIsInJlbmRlciIsImFyZ3MiLCJwYXJhbWV0ZXJzIiwiZXhjbHVkZSIsImV4cHJlc3Npb24iLCJfXyQkZWxlbWVudCIsImluIiwidW5kZWZpbmVkIiwicmV0dXJuIiwiUmVhZG9ubHkiLCJ0ZXh0IiwiX18kJHRleHQiLCJpc1JlYWRPbmx5IiwiZG9jcyIsIl9hIiwic291cmNlIiwib3JpZ2luYWxTb3VyY2UiLCJfYyIsIl9iIiwiX2QiLCJfZiIsIl9lIiwiX19uYW1lZEV4cG9ydHNPcmRlciIsImJlZUd3dFNlcnZpY2UiLCJkYXRhVHlwZXMiLCJwbW1sRG9jdW1lbnRzIiwiZXhwcmVzc2lvbkhvbGRlcklkIiwid2lkdGhzQnlJZCIsImlzUmVzZXRTdXBwb3J0ZWRPblJvb3RFeHByZXNzaW9uIl0sInNvdXJjZVJvb3QiOiIifQ==