"use strict";
(self["webpackChunk_kie_tools_boxed_expression_component"] = self["webpackChunk_kie_tools_boxed_expression_component"] || []).push([["misc-StandaloneTable-StandaloneTable-stories"],{

/***/ "./stories/misc/StandaloneTable/StandaloneTable.stories.tsx":
/*!******************************************************************!*\
  !*** ./stories/misc/StandaloneTable/StandaloneTable.stories.tsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Base: () => (/* binding */ Base),
/* harmony export */   People: () => (/* binding */ People),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _src_resizing_ResizingWidthsContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../src/resizing/ResizingWidthsContext */ "./src/resizing/ResizingWidthsContext.tsx");
/* harmony import */ var _src_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../src/api */ "./src/api/index.ts");
/* harmony import */ var _src_table_BeeTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../src/table/BeeTable */ "./src/table/BeeTable/index.ts");
var _a, _b, _c, _d, _e, _f;





const meta = {
  title: "Misc/Standalone Table",
  component: _src_table_BeeTable__WEBPACK_IMPORTED_MODULE_4__.StandaloneBeeTable
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (meta);
function StandaloneBeeTableWrapper(props) {
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
    ref: ref,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_table_BeeTable__WEBPACK_IMPORTED_MODULE_4__.StandaloneBeeTable, {
      ...props,
      scrollableParentRef: ref
    })
  });
}
const baseTableProps = {
  columns: [{
    accessor: "x",
    label: "y",
    isRowIndexColumn: false,
    minWidth: 100,
    width: 100
  }],
  rows: [{
    ["x"]: {
      content: "",
      id: "y"
    }
  }],
  allowedOperations: () => [],
  resizerStopBehavior: _src_resizing_ResizingWidthsContext__WEBPACK_IMPORTED_MODULE_2__.ResizerStopBehavior.SET_WIDTH_WHEN_SMALLER,
  shouldShowRowsInlineControls: false,
  shouldShowColumnsInlineControls: false,
  shouldRenderRowIndexColumn: true,
  headerVisibility: _src_api__WEBPACK_IMPORTED_MODULE_3__.BeeTableHeaderVisibility.AllLevels,
  operationConfig: []
};
const Base = {
  render: args => StandaloneBeeTableWrapper(args),
  args: {
    ...baseTableProps
  }
};
const peopleTableProps = {
  columns: [{
    accessor: "people",
    label: "People",
    isRowIndexColumn: false,
    columns: [{
      label: "Name",
      accessor: "name",
      isRowIndexColumn: false,
      width: 200,
      minWidth: 200
    }, {
      label: "Age",
      accessor: "age",
      isRowIndexColumn: false,
      width: 100,
      minWidth: 100
    }, {
      label: "Country",
      accessor: "country",
      isRowIndexColumn: false,
      width: 100,
      minWidth: 100
    }]
  }],
  rows: [{
    ["name"]: {
      id: (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
      content: `Joao Ninguem`
    },
    ["age"]: {
      id: (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
      content: "30"
    },
    ["country"]: {
      id: (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
      content: `Brazil`
    }
  }, {
    ["name"]: {
      id: (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
      content: `John Doe`
    },
    ["age"]: {
      id: (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
      content: "37"
    },
    ["country"]: {
      id: (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
      content: `US`
    }
  }, {
    ["name"]: {
      id: (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
      content: `Jane Doe`
    },
    ["age"]: {
      id: (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
      content: "32"
    },
    ["country"]: {
      id: (0,_src_api__WEBPACK_IMPORTED_MODULE_3__.generateUuid)(),
      content: `Canada`
    }
  }],
  allowedOperations: () => [],
  resizerStopBehavior: _src_resizing_ResizingWidthsContext__WEBPACK_IMPORTED_MODULE_2__.ResizerStopBehavior.SET_WIDTH_WHEN_SMALLER,
  shouldShowRowsInlineControls: false,
  shouldShowColumnsInlineControls: false,
  shouldRenderRowIndexColumn: true,
  headerVisibility: _src_api__WEBPACK_IMPORTED_MODULE_3__.BeeTableHeaderVisibility.AllLevels,
  operationConfig: []
};
const People = {
  render: args => StandaloneBeeTableWrapper(args),
  args: {
    ...peopleTableProps
  }
};
Base.parameters = {
  ...Base.parameters,
  docs: {
    ...((_a = Base.parameters) === null || _a === void 0 ? void 0 : _a.docs),
    source: {
      originalSource: "{\n  render: args => StandaloneBeeTableWrapper(args),\n  args: {\n    ...baseTableProps\n  }\n}",
      ...((_c = (_b = Base.parameters) === null || _b === void 0 ? void 0 : _b.docs) === null || _c === void 0 ? void 0 : _c.source)
    }
  }
};
People.parameters = {
  ...People.parameters,
  docs: {
    ...((_d = People.parameters) === null || _d === void 0 ? void 0 : _d.docs),
    source: {
      originalSource: "{\n  render: args => StandaloneBeeTableWrapper(args),\n  args: {\n    ...peopleTableProps\n  }\n}",
      ...((_f = (_e = People.parameters) === null || _e === void 0 ? void 0 : _e.docs) === null || _f === void 0 ? void 0 : _f.source)
    }
  }
};
const __namedExportsOrder = ["Base", "People"];

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlzYy1TdGFuZGFsb25lVGFibGUtU3RhbmRhbG9uZVRhYmxlLXN0b3JpZXMuMTYzMmM4ZjguaWZyYW1lLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CK0I7QUFFbUQ7QUFDTztBQUN4QjtBQUdqRSxNQUFNSyxJQUFJLEdBQW9DO0VBQzVDQyxLQUFLLEVBQUUsdUJBQXVCO0VBQzlCQyxTQUFTLEVBQUVILG1FQUFrQkE7Q0FDOUI7QUFDRCxpRUFBZUMsSUFBSSxFQUFDO0FBRXBCLFNBQVNHLHlCQUF5QkEsQ0FBQ0MsS0FBNEI7RUFDN0QsTUFBTUMsR0FBRyxHQUFHViw2Q0FBTSxDQUFDLElBQUksQ0FBQztFQUN4QixPQUFPVyxzREFBQTtJQUFLRCxHQUFHLEVBQUVBLEdBQUc7SUFBQUUsUUFBQSxFQUNoQkQsc0RBQUEsQ0FBQ1AsbUVBQWtCO01BQUEsR0FBS0ssS0FBSztNQUFFSSxtQkFBbUIsRUFBRUg7SUFBRztFQUFJLEVBQ3ZEO0FBQ1Y7QUFDQSxNQUFNSSxjQUFjLEdBQTBCO0VBQzVDQyxPQUFPLEVBQUUsQ0FBQztJQUNSQyxRQUFRLEVBQUUsR0FBRztJQUNiQyxLQUFLLEVBQUUsR0FBRztJQUNWQyxnQkFBZ0IsRUFBRSxLQUFLO0lBQ3ZCQyxRQUFRLEVBQUUsR0FBRztJQUNiQyxLQUFLLEVBQUU7R0FDUixDQUFRO0VBQ1RDLElBQUksRUFBRSxDQUFDO0lBQ0wsQ0FBQyxHQUFHLEdBQUc7TUFDTEMsT0FBTyxFQUFFLEVBQUU7TUFDWEMsRUFBRSxFQUFFOztHQUVQLENBQUM7RUFDRkMsaUJBQWlCLEVBQUVBLENBQUEsS0FBTSxFQUFFO0VBQzNCQyxtQkFBbUIsRUFBRXhCLG9GQUFtQixDQUFDeUIsc0JBQXNCO0VBQy9EQyw0QkFBNEIsRUFBRSxLQUFLO0VBQ25DQywrQkFBK0IsRUFBRSxLQUFLO0VBQ3RDQywwQkFBMEIsRUFBRSxJQUFJO0VBQ2hDQyxnQkFBZ0IsRUFBRTVCLDhEQUF3QixDQUFDNkIsU0FBUztFQUNw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LGlHQUFpRztNQUNqSCxJQUFHLENBQUFDLEVBQUEsSUFBQUMsRUFBQSxHQUFBWCxJQUFJLENBQUNLLFVBQVUsY0FBQU0sRUFBQSx1QkFBQUEsRUFBQSxDQUFFTCxJQUFJLGNBQUFJLEVBQUEsdUJBQUFBLEVBQUEsQ0FBRUYsTUFBTTs7O0NBR3JDO0FBQ0RKLE1BQU0sQ0FBQ0MsVUFBVSxHQUFHO0VBQ2xCLEdBQUdELE1BQU0sQ0FBQ0MsVUFBVTtFQUNwQkMsSUFBSSxFQUFFO0lBQ0osSUFBRyxDQUFBTSxFQUFBLEdBQUFSLE1BQU0sQ0FBQ0MsVUFBVSxjQUFBTyxFQUFBLHVCQUFBQSxFQUFBLENBQUVOLElBQUk7SUFDMUJFLE1BQU0sRUFBRTtNQUNOQyxjQUFjLEVBQUUsbUdBQW1HO01BQ25ILElBQUcsQ0FBQUksRUFBQSxJQUFBQyxFQUFBLEdBQUFWLE1BQU0sQ0FBQ0MsVUFBVSxjQUFBUyxFQUFBLHVCQUFBQSxFQUFBLENBQUVSLElBQUksY0FBQU8sRUFBQSx1QkFBQUEsRUFBQSxDQUFFTCxNQUFNOzs7Q0FHdkM7QUFBQyxNQUFBTyxtQkFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL0BraWUtdG9vbHMvYm94ZWQtZXhwcmVzc2lvbi1jb21wb25lbnQvLi9zdG9yaWVzL21pc2MvU3RhbmRhbG9uZVRhYmxlL1N0YW5kYWxvbmVUYWJsZS5zdG9yaWVzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogTGljZW5zZWQgdG8gdGhlIEFwYWNoZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIChBU0YpIHVuZGVyIG9uZVxuICogb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuICBTZWUgdGhlIE5PVElDRSBmaWxlXG4gKiBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvblxuICogcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuICBUaGUgQVNGIGxpY2Vuc2VzIHRoaXMgZmlsZVxuICogdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZVxuICogXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4gKiB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZyxcbiAqIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXG4gKiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxuICogS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlXG4gKiBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zXG4gKiB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHR5cGUgeyBNZXRhLCBTdG9yeU9iaiB9IGZyb20gXCJAc3Rvcnlib29rL3JlYWN0XCI7XG5pbXBvcnQgeyBSZXNpemVyU3RvcEJlaGF2aW9yIH0gZnJvbSBcIi4uLy4uLy4uL3NyYy9yZXNpemluZy9SZXNpemluZ1dpZHRoc0NvbnRleHRcIjtcbmltcG9ydCB7IEJlZVRhYmxlSGVhZGVyVmlzaWJpbGl0eSwgQmVlVGFibGVQcm9wcywgZ2VuZXJhdGVVdWlkIH0gZnJvbSBcIi4uLy4uLy4uL3NyYy9hcGlcIjtcbmltcG9ydCB7IFN0YW5kYWxvbmVCZWVUYWJsZSB9IGZyb20gXCIuLi8uLi8uLi9zcmMvdGFibGUvQmVlVGFibGVcIjtcblxuLy8gTW9yZSBvbiBob3cgdG8gc2V0IHVwIHN0b3JpZXMgYXQ6IGh0dHBzOi8vc3Rvcnlib29rLmpzLm9yZy9kb2NzL3JlYWN0L3dyaXRpbmctc3Rvcmllcy9pbnRyb2R1Y3Rpb24jZGVmYXVsdC1leHBvcnRcbmNvbnN0IG1ldGE6IE1ldGE8dHlwZW9mIFN0YW5kYWxvbmVCZWVUYWJsZT4gPSB7XG4gIHRpdGxlOiBcIk1pc2MvU3RhbmRhbG9uZSBUYWJsZVwiLFxuICBjb21wb25lbnQ6IFN0YW5kYWxvbmVCZWVUYWJsZVxufTtcbmV4cG9ydCBkZWZhdWx0IG1ldGE7XG50eXBlIFN0b3J5ID0gU3RvcnlPYmo8dHlwZW9mIFN0YW5kYWxvbmVCZWVUYWJsZT47XG5mdW5jdGlvbiBTdGFuZGFsb25lQmVlVGFibGVXcmFwcGVyKHByb3BzOiBCZWVUYWJsZVByb3BzPG9iamVjdD4pIHtcbiAgY29uc3QgcmVmID0gdXNlUmVmKG51bGwpO1xuICByZXR1cm4gPGRpdiByZWY9e3JlZn0+XG4gICAgICA8U3RhbmRhbG9uZUJlZVRhYmxlIHsuLi5wcm9wc30gc2Nyb2xsYWJsZVBhcmVudFJlZj17cmVmfSAvPlxuICAgIDwvZGl2Pjtcbn1cbmNvbnN0IGJhc2VUYWJsZVByb3BzOiBCZWVUYWJsZVByb3BzPG9iamVjdD4gPSB7XG4gIGNvbHVtbnM6IFt7XG4gICAgYWNjZXNzb3I6IFwieFwiLFxuICAgIGxhYmVsOiBcInlcIixcbiAgICBpc1Jvd0luZGV4Q29sdW1uOiBmYWxzZSxcbiAgICBtaW5XaWR0aDogMTAwLFxuICAgIHdpZHRoOiAxMDBcbiAgfV0gYXMgYW55LFxuICByb3dzOiBbe1xuICAgIFtcInhcIl06IHtcbiAgICAgIGNvbnRlbnQ6IFwiXCIsXG4gICAgICBpZDogXCJ5XCJcbiAgICB9XG4gIH1dLFxuICBhbGxvd2VkT3BlcmF0aW9uczogKCkgPT4gW10sXG4gIHJlc2l6ZXJTdG9wQmVoYXZpb3I6IFJlc2l6ZXJTdG9wQmVoYXZpb3IuU0VUX1dJRFRIX1dIRU5fU01BTExFUixcbiAgc2hvdWxkU2hvd1Jvd3NJbmxpbmVDb250cm9sczogZmFsc2UsXG4gIHNob3VsZFNob3dDb2x1bW5zSW5saW5lQ29udHJvbHM6IGZhbHNlLFxuICBzaG91bGRSZW5kZXJSb3dJbmRleENvbHVtbjogdHJ1ZSxcbiAgaGVhZGVyVmlzaWJpbGl0eTogQmVlVGFibGVIZWFkZXJWaXNpYmlsaXR5LkFsbExldmVscyxcbiAgb3BlcmF0aW9uQ29uZmlnOiBbXVxufTtcblxuLy8gTW9yZSBvbiB3cml0aW5nIHN0b3JpZXMgd2l0aCBhcmdzOiBodHRwczovL3N0b3J5Ym9vay5qcy5vcmcvZG9jcy9yZWFjdC93cml0aW5nLXN0b3JpZXMvYXJnc1xuZXhwb3J0IGNvbnN0IEJhc2U6IFN0b3J5ID0ge1xuICByZW5kZXI6IGFyZ3MgPT4gU3RhbmRhbG9uZUJlZVRhYmxlV3JhcHBlcihhcmdzKSxcbiAgYXJnczoge1xuICAgIC4uLmJhc2VUYWJsZVByb3BzXG4gIH1cbn07XG5jb25zdCBwZW9wbGVUYWJsZVByb3BzOiBCZWVUYWJsZVByb3BzPG9iamVjdD4gPSB7XG4gIGNvbHVtbnM6IFt7XG4gICAgYWNjZXNzb3I6IFwicGVvcGxlXCIsXG4gICAgbGFiZWw6IFwiUGVvcGxlXCIsXG4gICAgaXNSb3dJbmRleENvbHVtbjogZmFsc2UsXG4gICAgY29sdW1uczogW3tcbiAgICAgIGxhYmVsOiBcIk5hbWVcIixcbiAgICAgIGFjY2Vzc29yOiBcIm5hbWVcIixcbiAgICAgIGlzUm93SW5kZXhDb2x1bW46IGZhbHNlLFxuICAgICAgd2lkdGg6IDIwMCxcbiAgICAgIG1pbldpZHRoOiAyMDBcbiAgICB9LCB7XG4gICAgICBsYWJlbDogXCJBZ2VcIixcbiAgICAgIGFjY2Vzc29yOiBcImFnZVwiLFxuICAgICAgaXNSb3dJbmRleENvbHVtbjogZmFsc2UsXG4gICAgICB3aWR0aDogMTAwLFxuICAgICAgbWluV2lkdGg6IDEwMFxuICAgIH0sIHtcbiAgICAgIGxhYmVsOiBcIkNvdW50cnlcIixcbiAgICAgIGFjY2Vzc29yOiBcImNvdW50cnlcIixcbiAgICAgIGlzUm93SW5kZXhDb2x1bW46IGZhbHNlLFxuICAgICAgd2lkdGg6IDEwMCxcbiAgICAgIG1pbldpZHRoOiAxMDBcbiAgICB9XVxuICB9XSBhcyBhbnksXG4gIHJvd3M6IFt7XG4gICAgW1wibmFtZVwiXToge1xuICAgICAgaWQ6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgY29udGVudDogYEpvYW8gTmluZ3VlbWBcbiAgICB9LFxuICAgIFtcImFnZVwiXToge1xuICAgICAgaWQ6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgY29udGVudDogXCIzMFwiXG4gICAgfSxcbiAgICBbXCJjb3VudHJ5XCJdOiB7XG4gICAgICBpZDogZ2VuZXJhdGVVdWlkKCksXG4gICAgICBjb250ZW50OiBgQnJhemlsYFxuICAgIH1cbiAgfSwge1xuICAgIFtcIm5hbWVcIl06IHtcbiAgICAgIGlkOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICAgIGNvbnRlbnQ6IGBKb2huIERvZWBcbiAgICB9LFxuICAgIFtcImFnZVwiXToge1xuICAgICAgaWQ6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgY29udGVudDogXCIzN1wiXG4gICAgfSxcbiAgICBbXCJjb3VudHJ5XCJdOiB7XG4gICAgICBpZDogZ2VuZXJhdGVVdWlkKCksXG4gICAgICBjb250ZW50OiBgVVNgXG4gICAgfVxuICB9LCB7XG4gICAgW1wibmFtZVwiXToge1xuICAgICAgaWQ6IGdlbmVyYXRlVXVpZCgpLFxuICAgICAgY29udGVudDogYEphbmUgRG9lYFxuICAgIH0sXG4gICAgW1wiYWdlXCJdOiB7XG4gICAgICBpZDogZ2VuZXJhdGVVdWlkKCksXG4gICAgICBjb250ZW50OiBcIjMyXCJcbiAgICB9LFxuICAgIFtcImNvdW50cnlcIl06IHtcbiAgICAgIGlkOiBnZW5lcmF0ZVV1aWQoKSxcbiAgICAgIGNvbnRlbnQ6IGBDYW5hZGFgXG4gICAgfVxuICB9XSxcbiAgYWxsb3dlZE9wZXJhdGlvbnM6ICgpID0+IFtdLFxuICByZXNpemVyU3RvcEJlaGF2aW9yOiBSZXNpemVyU3RvcEJlaGF2aW9yLlNFVF9XSURUSF9XSEVOX1NNQUxMRVIsXG4gIHNob3VsZFNob3dSb3dzSW5saW5lQ29udHJvbHM6IGZhbHNlLFxuICBzaG91bGRTaG93Q29sdW1uc0lubGluZUNvbnRyb2xzOiBmYWxzZSxcbiAgc2hvdWxkUmVuZGVyUm93SW5kZXhDb2x1bW46IHRydWUsXG4gIGhlYWRlclZpc2liaWxpdHk6IEJlZVRhYmxlSGVhZGVyVmlzaWJpbGl0eS5BbGxMZXZlbHMsXG4gIG9wZXJhdGlvbkNvbmZpZzogW11cbn07XG5cbi8vIE1vcmUgb24gd3JpdGluZyBzdG9yaWVzIHdpdGggYXJnczogaHR0cHM6Ly9zdG9yeWJvb2suanMub3JnL2RvY3MvcmVhY3Qvd3JpdGluZy1zdG9yaWVzL2FyZ3NcbmV4cG9ydCBjb25zdCBQZW9wbGU6IFN0b3J5ID0ge1xuICByZW5kZXI6IGFyZ3MgPT4gU3RhbmRhbG9uZUJlZVRhYmxlV3JhcHBlcihhcmdzKSxcbiAgYXJnczoge1xuICAgIC4uLnBlb3BsZVRhYmxlUHJvcHNcbiAgfVxufTtcbkJhc2UucGFyYW1ldGVycyA9IHtcbiAgLi4uQmFzZS5wYXJhbWV0ZXJzLFxuICBkb2NzOiB7XG4gICAgLi4uQmFzZS5wYXJhbWV0ZXJzPy5kb2NzLFxuICAgIHNvdXJjZToge1xuICAgICAgb3JpZ2luYWxTb3VyY2U6IFwie1xcbiAgcmVuZGVyOiBhcmdzID0+IFN0YW5kYWxvbmVCZWVUYWJsZVdyYXBwZXIoYXJncyksXFxuICBhcmdzOiB7XFxuICAgIC4uLmJhc2VUYWJsZVByb3BzXFxuICB9XFxufVwiLFxuICAgICAgLi4uQmFzZS5wYXJhbWV0ZXJzPy5kb2NzPy5zb3VyY2VcbiAgICB9XG4gIH1cbn07XG5QZW9wbGUucGFyYW1ldGVycyA9IHtcbiAgLi4uUGVvcGxlLnBhcmFtZXRlcnMsXG4gIGRvY3M6IHtcbiAgICAuLi5QZW9wbGUucGFyYW1ldGVycz8uZG9jcyxcbiAgICBzb3VyY2U6IHtcbiAgICAgIG9yaWdpbmFsU291cmNlOiBcIntcXG4gIHJlbmRlcjogYXJncyA9PiBTdGFuZGFsb25lQmVlVGFibGVXcmFwcGVyKGFyZ3MpLFxcbiAgYXJnczoge1xcbiAgICAuLi5wZW9wbGVUYWJsZVByb3BzXFxuICB9XFxufVwiLFxuICAgICAgLi4uUGVvcGxlLnBhcmFtZXRlcnM/LmRvY3M/LnNvdXJjZVxuICAgIH1cbiAgfVxufTsiXSwibmFtZXMiOlsidXNlUmVmIiwiUmVzaXplclN0b3BCZWhhdmlvciIsIkJlZVRhYmxlSGVhZGVyVmlzaWJpbGl0eSIsImdlbmVyYXRlVXVpZCIsIlN0YW5kYWxvbmVCZWVUYWJsZSIsIm1ldGEiLCJ0aXRsZSIsImNvbXBvbmVudCIsIlN0YW5kYWxvbmVCZWVUYWJsZVdyYXBwZXIiLCJwcm9wcyIsInJlZiIsIl9qc3giLCJjaGlsZHJlbiIsInNjcm9sbGFibGVQYXJlbnRSZWYiLCJiYXNlVGFibGVQcm9wcyIsImNvbHVtbnMiLCJhY2Nlc3NvciIsImxhYmVsIiwiaXNSb3dJbmRleENvbHVtbiIsIm1pbldpZHRoIiwid2lkdGgiLCJyb3dzIiwiY29udGVudCIsImlkIiwiYWxsb3dlZE9wZXJhdGlvbnMiLCJyZXNpemVyU3RvcEJlaGF2aW9yIiwiU0VUX1dJRFRIX1dIRU5fU01BTExFUiIsInNob3VsZFNob3dSb3dzSW5saW5lQ29udHJvbHMiLCJzaG91bGRTaG93Q29sdW1uc0lubGluZUNvbnRyb2xzIiwic2hvdWxkUmVuZGVyUm93SW5kZXhDb2x1bW4iLCJoZWFkZXJWaXNpYmlsaXR5IiwiQWxsTGV2ZWxzIiwib3BlcmF0aW9uQ29uZmlnIiwiQmFzZSIsInJlbmRlciIsImFyZ3MiLCJwZW9wbGVUYWJsZVByb3BzIiwiUGVvcGxlIiwicGFyYW1ldGVycyIsImRvY3MiLCJfYSIsInNvdXJjZSIsIm9yaWdpbmFsU291cmNlIiwiX2MiLCJfYiIsIl9kIiwiX2YiLCJfZSIsIl9fbmFtZWRFeHBvcnRzT3JkZXIiXSwic291cmNlUm9vdCI6IiJ9