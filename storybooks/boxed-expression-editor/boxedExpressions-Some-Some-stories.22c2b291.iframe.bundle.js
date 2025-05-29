"use strict";
(self["webpackChunk_kie_tools_boxed_expression_component"] = self["webpackChunk_kie_tools_boxed_expression_component"] || []).push([["boxedExpressions-Some-Some-stories"],{

/***/ "./stories/boxedExpressions/Some/Some.stories.tsx":
/*!********************************************************!*\
  !*** ./stories/boxedExpressions/Some/Some.stories.tsx ***!
  \********************************************************/
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
  title: "Boxed Expressions/Some",
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
      __$$element: "some",
      "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_2__.generateUuid)(),
      "@_label": "Expression Name",
      in: {
        "@_id": (0,_src_api__WEBPACK_IMPORTED_MODULE_2__.generateUuid)(),
        expression: undefined
      },
      satisfies: {
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
      __$$element: "some",
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
      satisfies: {
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
      originalSource: "{\n  render: args => BoxedExpressionEditorStory(),\n  parameters: {\n    exclude: [\"dataTypes\", \"beeGwtService\", \"pmmlDocuments\"]\n  },\n  args: {\n    ...EmptyExpression.args,\n    expression: {\n      __$$element: \"some\",\n      \"@_id\": generateUuid(),\n      \"@_label\": \"Expression Name\",\n      in: {\n        \"@_id\": generateUuid(),\n        expression: undefined! // SPEC DISCREPANCY: Starting without an expression gives users the ability to select the expression type.\n      },\n      satisfies: {\n        \"@_id\": generateUuid(),\n        expression: undefined! // SPEC DISCREPANCY: Starting without an expression gives users the ability to select the expression type.\n      }\n    }\n  }\n}",
      ...((_c = (_b = Base.parameters) === null || _b === void 0 ? void 0 : _b.docs) === null || _c === void 0 ? void 0 : _c.source)
    }
  }
};
Readonly.parameters = {
  ...Readonly.parameters,
  docs: {
    ...((_d = Readonly.parameters) === null || _d === void 0 ? void 0 : _d.docs),
    source: {
      originalSource: "{\n  render: args => BoxedExpressionEditorStory(),\n  parameters: {\n    exclude: [\"dataTypes\", \"beeGwtService\", \"pmmlDocuments\"]\n  },\n  args: {\n    ...EmptyExpression.args,\n    expression: {\n      __$$element: \"some\",\n      \"@_id\": generateUuid(),\n      \"@_label\": \"Expression Name\",\n      in: {\n        \"@_id\": generateUuid(),\n        expression: {\n          \"@_id\": generateUuid(),\n          __$$element: \"literalExpression\",\n          text: {\n            __$$text: \"['read', 'only']\"\n          }\n        }\n      },\n      satisfies: {\n        \"@_id\": generateUuid(),\n        expression: {\n          \"@_id\": generateUuid(),\n          __$$element: \"literalExpression\",\n          text: {\n            __$$text: \"readOnlyTest(itemReadOnly)\"\n          }\n        }\n      },\n      \"@_iteratorVariable\": \"itemReadOnly\"\n    },\n    isReadOnly: true\n  }\n}",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm94ZWRFeHByZXNzaW9ucy1Tb21lLVNvbWUtc3Rvcmllcy4yMmMyYjI5MS5pZnJhbWUuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CdUc7QUFDVTtBQUNqRTtBQUNtQztBQUduRixNQUFNSyxJQUFJLEdBQXFDO0VBQzdDQyxLQUFLLEVBQUUsd0JBQXdCO0VBQy9CQyxTQUFTLEVBQUVQLDZFQUFxQjtFQUNoQ1EsY0FBYyxFQUFFO0NBQ2pCO0FBQ0QsaUVBQWVILElBQUksRUFBQztBQUliLE1BQU1GLElBQUksR0FBVTtFQUN6Qk0sTUFBTSxFQUFFQyxJQUFJLElBQUlULDBGQUEwQixFQUFFO0VBQzVDVSxVQUFVLEVBQUU7SUFDVkMsT0FBTyxFQUFFLENBQUMsV0FBVyxFQUFFLGVBQWUsRUFBRSxlQUFlO0dBQ3hEO0VBQ0RGLElBQUksRUFBRTtJQUNKLEdBQUdOLHFFQUFlLENBQUNNLElBQUk7SUFDdkJHLFVBQVUsRUFBRTtNQUNWQyxXQUFXLEVBQUUsTUFBTTtNQUNuQixNQUFNLEVBQUVaLHNEQUFZLEVBQUU7TUFDdEIsU0FBUyxFQUFFLGlCQUFpQjtNQUM1QmEsRUFBRSxFQUFFO1FBQ0YsTUFBTSxFQUFFYixzREFBWSxFQUFFO1FBQ3RCVyxVQUFVLEVBQUVHO09BQ2I7TUFDREMsU0FBUyxFQUFFO1FBQ1QsTUFBTSxFQUFFZixzREFBWSxFQUFFO1FBQ3RCVyxVQUFVLEVBQUVHOzs7O0NBSW5CO0FBQ00sTUFBTUUsUUFBUSxHQUFVO0VBQzdCVCxNQUFNLEVBQUVDLElBQUksSUFBSVQsMEZBQTBCLEVBQUU7RUFDNUNVLFVBQVUsRUFBRTtJQUNWQyxPQUFPLEVBQUUsQ0FBQyxXQUFXLEVBQUUsZUFBZSxFQUFFLGVBQWU7R0FDeEQ7RUFDREYsSUFBSSxFQUFFO0lBQ0osR0FBR04scUVBQWUsQ0FBQ00sSUFBSTtJQUN2QkcsVUFBVSxFQUFFO01BQ1ZDLFdBQVcsRUFBRSxNQUFNO01BQ25CLE1BQU0sRUFBRVosc0RBQVksRUFBRTtN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Li9zdG9yaWVzL2JveGVkRXhwcmVzc2lvbnMvU29tZS9Tb21lLnN0b3JpZXMudHN4Iiwid2VicGFjazovL0BraWUtdG9vbHMvYm94ZWQtZXhwcmVzc2lvbi1jb21wb25lbnQvLi9zdG9yaWVzL21pc2MvRW1wdHkvRW1wdHlFeHByZXNzaW9uLnN0b3JpZXMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBMaWNlbnNlZCB0byB0aGUgQXBhY2hlIFNvZnR3YXJlIEZvdW5kYXRpb24gKEFTRikgdW5kZXIgb25lXG4gKiBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gIFNlZSB0aGUgTk9USUNFIGZpbGVcbiAqIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uXG4gKiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC4gIFRoZSBBU0YgbGljZW5zZXMgdGhpcyBmaWxlXG4gKiB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlXG4gKiBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2VcbiAqIHdpdGggdGhlIExpY2Vuc2UuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLFxuICogc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cbiAqIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXG4gKiBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGVcbiAqIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnNcbiAqIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IE1ldGEsIFN0b3J5T2JqIH0gZnJvbSBcIkBzdG9yeWJvb2svcmVhY3RcIjtcbmltcG9ydCB7IEJveGVkRXhwcmVzc2lvbkVkaXRvciwgQm94ZWRFeHByZXNzaW9uRWRpdG9yUHJvcHMgfSBmcm9tIFwiLi4vLi4vLi4vc3JjL0JveGVkRXhwcmVzc2lvbkVkaXRvclwiO1xuaW1wb3J0IHsgQm94ZWRFeHByZXNzaW9uRWRpdG9yU3RvcnksIEJveGVkRXhwcmVzc2lvbkVkaXRvclN0b3J5QXJncyB9IGZyb20gXCIuLi8uLi9ib3hlZEV4cHJlc3Npb25TdG9yaWVzV3JhcHBlclwiO1xuaW1wb3J0IHsgZ2VuZXJhdGVVdWlkIH0gZnJvbSBcIi4uLy4uLy4uL3NyYy9hcGlcIjtcbmltcG9ydCB7IEJhc2UgYXMgRW1wdHlFeHByZXNzaW9uIH0gZnJvbSBcIi4uLy4uL21pc2MvRW1wdHkvRW1wdHlFeHByZXNzaW9uLnN0b3JpZXNcIjtcblxuLy8gTW9yZSBvbiBob3cgdG8gc2V0IHVwIHN0b3JpZXMgYXQ6IGh0dHBzOi8vc3Rvcnlib29rLmpzLm9yZy9kb2NzL3JlYWN0L3dyaXRpbmctc3Rvcmllcy9pbnRyb2R1Y3Rpb24jZGVmYXVsdC1leHBvcnRcbmNvbnN0IG1ldGE6IE1ldGE8Qm94ZWRFeHByZXNzaW9uRWRpdG9yUHJvcHM+ID0ge1xuICB0aXRsZTogXCJCb3hlZCBFeHByZXNzaW9ucy9Tb21lXCIsXG4gIGNvbXBvbmVudDogQm94ZWRFeHByZXNzaW9uRWRpdG9yLFxuICBpbmNsdWRlU3RvcmllczogL15bQS1aXS9cbn07XG5leHBvcnQgZGVmYXVsdCBtZXRhO1xudHlwZSBTdG9yeSA9IFN0b3J5T2JqPEJveGVkRXhwcmVzc2lvbkVkaXRvclN0b3J5QXJncz47XG5cbi8vIE1vcmUgb24gd3JpdGluZyBzdG9yaWVzIHdpdGggYXJnczogaHR0cHM6Ly9zdG9yeWJvb2suanMub3JnL2RvY3MvcmVhY3Qvd3JpdGluZy1zdG9yaWVzL2FyZ3NcbmV4cG9ydCBjb25zdCBCYXNlOiBTdG9yeSA9IHtcbiAgcmVuZGVyOiBhcmdzID0+IEJveGVkRXhwcmVzc2lvbkVkaXRvclN0b3J5KCksXG4gIHBhcmFtZXRlcnM6IHtcbiAgICBleGNsdWRlOiBbXCJkYXRhVHlwZXNcIiwgXCJiZWVHd3RTZXJ2aWNlXCIsIFwicG1tbERvY3VtZW50c1wiXVxuICB9LFxuICBhcmdzOiB7XG4gICAgLi4uRW1wdHlFeHByZXNzaW9uLmFyZ3MsXG4gICAgZXhwcmVzc2lvbjoge1xuICAgICAgX18kJGVsZW1lbnQ6IFwic29tZVwiLFxuICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgXCJAX2xhYmVsXCI6IFwiRXhwcmVzc2lvbiBOYW1lXCIsXG4gICAgICBpbjoge1xuICAgICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICAgIGV4cHJlc3Npb246IHVuZGVmaW5lZCEgLy8gU1BFQyBESVNDUkVQQU5DWTogU3RhcnRpbmcgd2l0aG91dCBhbiBleHByZXNzaW9uIGdpdmVzIHVzZXJzIHRoZSBhYmlsaXR5IHRvIHNlbGVjdCB0aGUgZXhwcmVzc2lvbiB0eXBlLlxuICAgICAgfSxcbiAgICAgIHNhdGlzZmllczoge1xuICAgICAgICBcIkBfaWRcIjogZ2VuZXJhdGVVdWlkKCksXG4gICAgICAgIGV4cHJlc3Npb246IHVuZGVmaW5lZCEgLy8gU1BFQyBESVNDUkVQQU5DWTogU3RhcnRpbmcgd2l0aG91dCBhbiBleHByZXNzaW9uIGdpdmVzIHVzZXJzIHRoZSBhYmlsaXR5IHRvIHNlbGVjdCB0aGUgZXhwcmVzc2lvbiB0eXBlLlxuICAgICAgfVxuICAgIH1cbiAgfVxufTtcbmV4cG9ydCBjb25zdCBSZWFkb25seTogU3RvcnkgPSB7XG4gIHJlbmRlcjogYXJncyA9PiBCb3hlZEV4cHJlc3Npb25FZGl0b3JTdG9yeSgpLFxuICBwYXJhbWV0ZXJzOiB7XG4gICAgZXhjbHVkZTogW1wiZGF0YVR5cGVzXCIsIFwiYmVlR3d0U2VydmljZVwiLCBcInBtbWxEb2N1bWVudHNcIl1cbiAgfSxcbiAgYXJnczoge1xuICAgIC4uLkVtcHR5RXhwcmVzc2lvbi5hcmdzLFxuICAgIGV4cHJlc3Npb246IHtcbiAgICAgIF9fJCRlbGVtZW50OiBcInNvbWVcIixcbiAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICAgIFwiQF9sYWJlbFwiOiBcIkV4cHJlc3Npb24gTmFtZVwiLFxuICAgICAgaW46IHtcbiAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgICBleHByZXNzaW9uOiB7XG4gICAgICAgICAgXCJAX2lkXCI6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgICAgIF9fJCRlbGVtZW50OiBcImxpdGVyYWxFeHByZXNzaW9uXCIsXG4gICAgICAgICAgdGV4dDoge1xuICAgICAgICAgICAgX18kJHRleHQ6IFwiWydyZWFkJywgJ29ubHknXVwiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgc2F0aXNmaWVzOiB7XG4gICAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICAgICAgZXhwcmVzc2lvbjoge1xuICAgICAgICAgIFwiQF9pZFwiOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICAgICAgICBfXyQkZWxlbWVudDogXCJsaXRlcmFsRXhwcmVzc2lvblwiLFxuICAgICAgICAgIHRleHQ6IHtcbiAgICAgICAgICAgIF9fJCR0ZXh0OiBcInJlYWRPbmx5VGVzdChpdGVtUmVhZE9ubHkpXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcIkBfaXRlcmF0b3JWYXJpYWJsZVwiOiBcIml0ZW1SZWFkT25seVwiXG4gICAgfSxcbiAgICBpc1JlYWRPbmx5OiB0cnVlXG4gIH1cbn07XG5CYXNlLnBhcmFtZXRlcnMgPSB7XG4gIC4uLkJhc2UucGFyYW1ldGVycyxcbiAgZG9jczoge1xuICAgIC4uLkJhc2UucGFyYW1ldGVycz8uZG9jcyxcbiAgICBzb3VyY2U6IHtcbiAgICAgIG9yaWdpbmFsU291cmNlOiBcIntcXG4gIHJlbmRlcjogYXJncyA9PiBCb3hlZEV4cHJlc3Npb25FZGl0b3JTdG9yeSgpLFxcbiAgcGFyYW1ldGVyczoge1xcbiAgICBleGNsdWRlOiBbXFxcImRhdGFUeXBlc1xcXCIsIFxcXCJiZWVHd3RTZXJ2aWNlXFxcIiwgXFxcInBtbWxEb2N1bWVudHNcXFwiXVxcbiAgfSxcXG4gIGFyZ3M6IHtcXG4gICAgLi4uRW1wdHlFeHByZXNzaW9uLmFyZ3MsXFxuICAgIGV4cHJlc3Npb246IHtcXG4gICAgICBfXyQkZWxlbWVudDogXFxcInNvbWVcXFwiLFxcbiAgICAgIFxcXCJAX2lkXFxcIjogZ2VuZXJhdGVVdWlkKCksXFxuICAgICAgXFxcIkBfbGFiZWxcXFwiOiBcXFwiRXhwcmVzc2lvbiBOYW1lXFxcIixcXG4gICAgICBpbjoge1xcbiAgICAgICAgXFxcIkBfaWRcXFwiOiBnZW5lcmF0ZVV1aWQoKSxcXG4gICAgICAgIGV4cHJlc3Npb246IHVuZGVmaW5lZCEgLy8gU1BFQyBESVNDUkVQQU5DWTogU3RhcnRpbmcgd2l0aG91dCBhbiBleHByZXNzaW9uIGdpdmVzIHVzZXJzIHRoZSBhYmlsaXR5IHRvIHNlbGVjdCB0aGUgZXhwcmVzc2lvbiB0eXBlLlxcbiAgICAgIH0sXFxuICAgICAgc2F0aXNmaWVzOiB7XFxuICAgICAgICBcXFwiQF9pZFxcXCI6IGdlbmVyYXRlVXVpZCgpLFxcbiAgICAgICAgZXhwcmVzc2lvbjogdW5kZWZpbmVkISAvLyBTUEVDIERJU0NSRVBBTkNZOiBTdGFydGluZyB3aXRob3V0IGFuIGV4cHJlc3Npb24gZ2l2ZXMgdXNlcnMgdGhlIGFiaWxpdHkgdG8gc2VsZWN0IHRoZSBleHByZXNzaW9uIHR5cGUuXFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufVwiLFxuICAgICAgLi4uQmFzZS5wYXJhbWV0ZXJzPy5kb2NzPy5zb3VyY2VcbiAgICB9XG4gIH1cbn07XG5SZWFkb25seS5wYXJhbWV0ZXJzID0ge1xuICAuLi5SZWFkb25seS5wYXJhbWV0ZXJzLFxuICBkb2NzOiB7XG4gICAgLi4uUmVhZG9ubHkucGFyYW1ldGVycz8uZG9jcyxcbiAgICBzb3VyY2U6IHtcbiAgICAgIG9yaWdpbmFsU291cmNlOiBcIntcXG4gIHJlbmRlcjogYXJncyA9PiBCb3hlZEV4cHJlc3Npb25FZGl0b3JTdG9yeSgpLFxcbiAgcGFyYW1ldGVyczoge1xcbiAgICBleGNsdWRlOiBbXFxcImRhdGFUeXBlc1xcXCIsIFxcXCJiZWVHd3RTZXJ2aWNlXFxcIiwgXFxcInBtbWxEb2N1bWVudHNcXFwiXVxcbiAgfSxcXG4gIGFyZ3M6IHtcXG4gICAgLi4uRW1wdHlFeHByZXNzaW9uLmFyZ3MsXFxuICAgIGV4cHJlc3Npb246IHtcXG4gICAgICBfXyQkZWxlbWVudDogXFxcInNvbWVcXFwiLFxcbiAgICAgIFxcXCJAX2lkXFxcIjogZ2VuZXJhdGVVdWlkKCksXFxuICAgICAgXFxcIkBfbGFiZWxcXFwiOiBcXFwiRXhwcmVzc2lvbiBOYW1lXFxcIixcXG4gICAgICBpbjoge1xcbiAgICAgICAgXFxcIkBfaWRcXFwiOiBnZW5lcmF0ZVV1aWQoKSxcXG4gICAgICAgIGV4cHJlc3Npb246IHtcXG4gICAgICAgICAgXFxcIkBfaWRcXFwiOiBnZW5lcmF0ZVV1aWQoKSxcXG4gICAgICAgICAgX18kJGVsZW1lbnQ6IFxcXCJsaXRlcmFsRXhwcmVzc2lvblxcXCIsXFxuICAgICAgICAgIHRleHQ6IHtcXG4gICAgICAgICAgICBfXyQkdGV4dDogXFxcIlsncmVhZCcsICdvbmx5J11cXFwiXFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICB9LFxcbiAgICAgIHNhdGlzZmllczoge1xcbiAgICAgICAgXFxcIkBfaWRcXFwiOiBnZW5lcmF0ZVV1aWQoKSxcXG4gICAgICAgIGV4cHJlc3Npb246IHtcXG4gICAgICAgICAgXFxcIkBfaWRcXFwiOiBnZW5lcmF0ZVV1aWQoKSxcXG4gICAgICAgICAgX18kJGVsZW1lbnQ6IFxcXCJsaXRlcmFsRXhwcmVzc2lvblxcXCIsXFxuICAgICAgICAgIHRleHQ6IHtcXG4gICAgICAgICAgICBfXyQkdGV4dDogXFxcInJlYWRPbmx5VGVzdChpdGVtUmVhZE9ubHkpXFxcIlxcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgfSxcXG4gICAgICBcXFwiQF9pdGVyYXRvclZhcmlhYmxlXFxcIjogXFxcIml0ZW1SZWFkT25seVxcXCJcXG4gICAgfSxcXG4gICAgaXNSZWFkT25seTogdHJ1ZVxcbiAgfVxcbn1cIixcbiAgICAgIC4uLlJlYWRvbmx5LnBhcmFtZXRlcnM/LmRvY3M/LnNvdXJjZVxuICAgIH1cbiAgfVxufTsiLCIvKlxuICogTGljZW5zZWQgdG8gdGhlIEFwYWNoZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIChBU0YpIHVuZGVyIG9uZVxuICogb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuICBTZWUgdGhlIE5PVElDRSBmaWxlXG4gKiBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvblxuICogcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuICBUaGUgQVNGIGxpY2Vuc2VzIHRoaXMgZmlsZVxuICogdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZVxuICogXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4gKiB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZyxcbiAqIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXG4gKiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxuICogS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlXG4gKiBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zXG4gKiB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgdHlwZSB7IE1ldGEsIFN0b3J5T2JqIH0gZnJvbSBcIkBzdG9yeWJvb2svcmVhY3RcIjtcbmltcG9ydCB7IEJveGVkRXhwcmVzc2lvbkVkaXRvciwgQm94ZWRFeHByZXNzaW9uRWRpdG9yUHJvcHMgfSBmcm9tIFwiLi4vLi4vLi4vc3JjL0JveGVkRXhwcmVzc2lvbkVkaXRvclwiO1xuaW1wb3J0IHsgYmVlR3d0U2VydmljZSwgQm94ZWRFeHByZXNzaW9uRWRpdG9yU3RvcnksIEJveGVkRXhwcmVzc2lvbkVkaXRvclN0b3J5QXJncywgZGF0YVR5cGVzLCBwbW1sRG9jdW1lbnRzIH0gZnJvbSBcIi4uLy4uL2JveGVkRXhwcmVzc2lvblN0b3JpZXNXcmFwcGVyXCI7XG5cbi8vIE1vcmUgb24gaG93IHRvIHNldCB1cCBzdG9yaWVzIGF0OiBodHRwczovL3N0b3J5Ym9vay5qcy5vcmcvZG9jcy9yZWFjdC93cml0aW5nLXN0b3JpZXMvaW50cm9kdWN0aW9uI2RlZmF1bHQtZXhwb3J0XG5jb25zdCBtZXRhOiBNZXRhPEJveGVkRXhwcmVzc2lvbkVkaXRvclByb3BzPiA9IHtcbiAgdGl0bGU6IFwiTWlzYy9FbXB0eSBCb3hlZCBFeHByZXNzaW9uXCIsXG4gIGNvbXBvbmVudDogQm94ZWRFeHByZXNzaW9uRWRpdG9yLFxuICBpbmNsdWRlU3RvcmllczogL15bQS1aXS9cbn07XG5leHBvcnQgZGVmYXVsdCBtZXRhO1xudHlwZSBTdG9yeSA9IFN0b3J5T2JqPEJveGVkRXhwcmVzc2lvbkVkaXRvclN0b3J5QXJncz47XG5cbi8vIE1vcmUgb24gd3JpdGluZyBzdG9yaWVzIHdpdGggYXJnczogaHR0cHM6Ly9zdG9yeWJvb2suanMub3JnL2RvY3MvcmVhY3Qvd3JpdGluZy1zdG9yaWVzL2FyZ3NcbmV4cG9ydCBjb25zdCBCYXNlOiBTdG9yeSA9IHtcbiAgcmVuZGVyOiBhcmdzID0+IEJveGVkRXhwcmVzc2lvbkVkaXRvclN0b3J5KCksXG4gIGFyZ3M6IHtcbiAgICBleHByZXNzaW9uSG9sZGVySWQ6IFwiXzAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMFwiLFxuICAgIGV4cHJlc3Npb246IHVuZGVmaW5lZCxcbiAgICB3aWR0aHNCeUlkOiB7fSxcbiAgICBkYXRhVHlwZXMsXG4gICAgYmVlR3d0U2VydmljZSxcbiAgICBwbW1sRG9jdW1lbnRzLFxuICAgIGlzUmVzZXRTdXBwb3J0ZWRPblJvb3RFeHByZXNzaW9uOiB0cnVlXG4gIH1cbn07XG5CYXNlLnBhcmFtZXRlcnMgPSB7XG4gIC4uLkJhc2UucGFyYW1ldGVycyxcbiAgZG9jczoge1xuICAgIC4uLkJhc2UucGFyYW1ldGVycz8uZG9jcyxcbiAgICBzb3VyY2U6IHtcbiAgICAgIG9yaWdpbmFsU291cmNlOiBcIntcXG4gIHJlbmRlcjogYXJncyA9PiBCb3hlZEV4cHJlc3Npb25FZGl0b3JTdG9yeSgpLFxcbiAgYXJnczoge1xcbiAgICBleHByZXNzaW9uSG9sZGVySWQ6IFxcXCJfMDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwXFxcIixcXG4gICAgZXhwcmVzc2lvbjogdW5kZWZpbmVkLFxcbiAgICB3aWR0aHNCeUlkOiB7fSxcXG4gICAgZGF0YVR5cGVzLFxcbiAgICBiZWVHd3RTZXJ2aWNlLFxcbiAgICBwbW1sRG9jdW1lbnRzLFxcbiAgICBpc1Jlc2V0U3VwcG9ydGVkT25Sb290RXhwcmVzc2lvbjogdHJ1ZVxcbiAgfVxcbn1cIixcbiAgICAgIC4uLkJhc2UucGFyYW1ldGVycz8uZG9jcz8uc291cmNlXG4gICAgfVxuICB9XG59OyJdLCJuYW1lcyI6WyJCb3hlZEV4cHJlc3Npb25FZGl0b3IiLCJCb3hlZEV4cHJlc3Npb25FZGl0b3JTdG9yeSIsImdlbmVyYXRlVXVpZCIsIkJhc2UiLCJFbXB0eUV4cHJlc3Npb24iLCJtZXRhIiwidGl0bGUiLCJjb21wb25lbnQiLCJpbmNsdWRlU3RvcmllcyIsInJlbmRlciIsImFyZ3MiLCJwYXJhbWV0ZXJzIiwiZXhjbHVkZSIsImV4cHJlc3Npb24iLCJfXyQkZWxlbWVudCIsImluIiwidW5kZWZpbmVkIiwic2F0aXNmaWVzIiwiUmVhZG9ubHkiLCJ0ZXh0IiwiX18kJHRleHQiLCJpc1JlYWRPbmx5IiwiZG9jcyIsIl9hIiwic291cmNlIiwib3JpZ2luYWxTb3VyY2UiLCJfYyIsIl9iIiwiX2QiLCJfZiIsIl9lIiwiX19uYW1lZEV4cG9ydHNPcmRlciIsImJlZUd3dFNlcnZpY2UiLCJkYXRhVHlwZXMiLCJwbW1sRG9jdW1lbnRzIiwiZXhwcmVzc2lvbkhvbGRlcklkIiwid2lkdGhzQnlJZCIsImlzUmVzZXRTdXBwb3J0ZWRPblJvb3RFeHByZXNzaW9uIl0sInNvdXJjZVJvb3QiOiIifQ==