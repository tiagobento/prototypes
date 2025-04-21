"use strict";
(self["webpackChunk_kie_tools_bpmn_editor"] = self["webpackChunk_kie_tools_bpmn_editor"] || []).push([["dev-Playground-stories"],{

/***/ "./stories/dev/Playground.stories.tsx":
/*!********************************************!*\
  !*** ./stories/dev/Playground.stories.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Playground: () => (/* binding */ Playground),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _patternfly_react_core_dist_styles_base_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core/dist/styles/base.css */ "../../node_modules/.pnpm/@patternfly+react-core@4.276.6_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@patternfly/react-core/dist/styles/base.css");
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @patternfly/react-core/dist/js/layouts/Flex */ "../../node_modules/.pnpm/@patternfly+react-core@4.276.6_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@patternfly/react-core/dist/js/layouts/Flex/index.js");
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Flex__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_layouts_Flex__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _patternfly_react_core_dist_js_components_Page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Page */ "../../node_modules/.pnpm/@patternfly+react-core@4.276.6_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@patternfly/react-core/dist/js/components/Page/index.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Page__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Page__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _kie_tools_bpmn_marshaller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @kie-tools/bpmn-marshaller */ "../bpmn-marshaller/dist/index.js");
/* harmony import */ var _kie_tools_bpmn_editor_dist_normalization_normalize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @kie-tools/bpmn-editor/dist/normalization/normalize */ "./dist/normalization/normalize.js");
/* harmony import */ var _misc_empty_Empty_stories__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../misc/empty/Empty.stories */ "./stories/misc/empty/Empty.stories.tsx");
/* harmony import */ var _bpmnEditorStoriesWrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../bpmnEditorStoriesWrapper */ "./stories/bpmnEditorStoriesWrapper.tsx");
var _a, _b, _c;









const initialModel = (0,_misc_empty_Empty_stories__WEBPACK_IMPORTED_MODULE_5__.generateEmptyBpmn20)();
function DevPlayground(args) {
  const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(() => {
    const initialBpmnMarshaller = (0,_kie_tools_bpmn_marshaller__WEBPACK_IMPORTED_MODULE_3__.getMarshaller)(initialModel, {
      upgradeTo: "latest"
    });
    return {
      marshaller: initialBpmnMarshaller,
      stack: [(0,_kie_tools_bpmn_editor_dist_normalization_normalize__WEBPACK_IMPORTED_MODULE_4__.normalize)(initialBpmnMarshaller.parser.parse())],
      pointer: 0
    };
  });
  const onDrop = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(e => {
    console.log("BPMN Editor :: Playground :: File(s) dropped! Opening it.");
    e.preventDefault();
    if (e.dataTransfer.items) {
      [...e.dataTransfer.items].forEach((item, i) => {
        if (item.kind === "file") {
          const reader = new FileReader();
          reader.addEventListener("load", _ref => {
            let {
              target
            } = _ref;
            const marshaller = (0,_kie_tools_bpmn_marshaller__WEBPACK_IMPORTED_MODULE_3__.getMarshaller)(target === null || target === void 0 ? void 0 : target.result, {
              upgradeTo: "latest"
            });
            setState({
              marshaller,
              stack: [(0,_kie_tools_bpmn_editor_dist_normalization_normalize__WEBPACK_IMPORTED_MODULE_4__.normalize)(marshaller.parser.parse())],
              pointer: 0
            });
          });
          reader.readAsText(item.getAsFile());
        }
      });
    }
  }, []);
  const onDragOver = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(e => {
    e.preventDefault();
  }, []);
  const reset = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    const marshaller = (0,_kie_tools_bpmn_marshaller__WEBPACK_IMPORTED_MODULE_3__.getMarshaller)((0,_misc_empty_Empty_stories__WEBPACK_IMPORTED_MODULE_5__.generateEmptyBpmn20)(), {
      upgradeTo: "latest"
    });
    setState({
      marshaller,
      stack: [(0,_kie_tools_bpmn_editor_dist_normalization_normalize__WEBPACK_IMPORTED_MODULE_4__.normalize)(marshaller.parser.parse())],
      pointer: 0
    });
  }, []);
  const currentModel = state.stack[state.pointer];
  const downloadRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const downloadAsXml = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    if (downloadRef.current) {
      const fileBlob = new Blob([state.marshaller.builder.build(currentModel)], {
        type: "text/xml"
      });
      downloadRef.current.download = `bpmn-${createId(10)}.bpmn`;
      downloadRef.current.href = URL.createObjectURL(fileBlob);
      downloadRef.current.click();
    }
  }, [currentModel, state.marshaller.builder]);
  const copyAsXml = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    navigator.clipboard.writeText(state.marshaller.builder.build(currentModel));
  }, [currentModel, state.marshaller.builder]);
  const undo = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    setState(prev => ({
      ...prev,
      pointer: Math.max(0, prev.pointer - 1)
    }));
  }, []);
  const redo = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    setState(prev => ({
      ...prev,
      pointer: Math.min(prev.stack.length - 1, prev.pointer + 1)
    }));
  }, []);
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
  const onSelectModel = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(newModel => {
    onModelChange((0,_kie_tools_bpmn_editor_dist_normalization_normalize__WEBPACK_IMPORTED_MODULE_4__.normalize)((0,_kie_tools_bpmn_marshaller__WEBPACK_IMPORTED_MODULE_3__.getMarshaller)(newModel, {
      upgradeTo: "latest"
    }).parser.parse()));
  }, [onModelChange]);
  const onRequestToJumpToPath = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(path => {
    alert("Jumping to file " + path);
  }, []);
  const isUndoEnabled = state.pointer > 0;
  const isRedoEnabled = state.pointer !== state.stack.length - 1;
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: currentModel && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      style: {
        width: "100vw",
        height: "100vh"
      },
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_js_components_Page__WEBPACK_IMPORTED_MODULE_7__.Page, {
        onDragOver: onDragOver,
        onDrop: onDrop,
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_js_components_Page__WEBPACK_IMPORTED_MODULE_7__.PageSection, {
          variant: "light",
          isFilled: false,
          padding: {
            default: "padding"
          },
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_js_layouts_Flex__WEBPACK_IMPORTED_MODULE_8__.Flex, {
            justifyContent: {
              default: "justifyContentSpaceBetween"
            },
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_js_layouts_Flex__WEBPACK_IMPORTED_MODULE_8__.FlexItem, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h5", {
                children: "(Drag & drop a file anywhere to open it)"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_js_layouts_Flex__WEBPACK_IMPORTED_MODULE_8__.FlexItem, {
              shrink: {
                default: "shrink"
              },
              children: ["\u00A0 \u00A0 | \u00A0 \u00A0", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                disabled: !isUndoEnabled,
                style: {
                  opacity: isUndoEnabled ? 1 : 0.5
                },
                onClick: undo,
                children: `Undo (${state.pointer})`
              }), "\u00A0 \u00A0", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                disabled: !isRedoEnabled,
                style: {
                  opacity: isRedoEnabled ? 1 : 0.5
                },
                onClick: redo,
                children: `Redo (${state.stack.length - 1 - state.pointer})`
              }), "\u00A0 \u00A0 | \u00A0 \u00A0", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                onClick: reset,
                children: "Reset"
              }), "\u00A0 \u00A0", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                onClick: copyAsXml,
                children: "Copy XML"
              }), "\u00A0 \u00A0", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                onClick: downloadAsXml,
                children: "Download as .bpmn"
              })]
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
            ref: downloadRef
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("hr", {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_js_components_Page__WEBPACK_IMPORTED_MODULE_7__.PageSection, {
          variant: "light",
          isFilled: true,
          hasOverflowScroll: true,
          "aria-label": "editor",
          padding: {
            default: "noPadding"
          },
          children: (0,_bpmnEditorStoriesWrapper__WEBPACK_IMPORTED_MODULE_6__.BpmnEditorWrapper)({
            model: currentModel,
            originalVersion: args.originalVersion,
            onModelChange,
            externalContextName: args.externalContextName,
            externalContextDescription: args.externalContextDescription,
            issueTrackerHref: args.issueTrackerHref,
            onRequestToJumpToPath
          })
        })]
      })
    })
  });
}
function createId(length) {
  let result = "";
  const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}
const meta = {
  title: "Dev/Playground",
  component: DevPlayground
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (meta);
const Playground = {
  render: args => DevPlayground(args),
  args: {
    model: (0,_kie_tools_bpmn_marshaller__WEBPACK_IMPORTED_MODULE_3__.getMarshaller)(initialModel, {
      upgradeTo: "latest"
    }).parser.parse(),
    originalVersion: "2.0",
    externalContextDescription: "You're using the BPMN Editor Playground.",
    externalContextName: "Apache KIE :: BPMN Editor :: Storybook :: Playground",
    issueTrackerHref: "https://github.com/apache/incubator-kie-issues/issues/new"
  }
};
Playground.parameters = {
  ...Playground.parameters,
  docs: {
    ...((_a = Playground.parameters) === null || _a === void 0 ? void 0 : _a.docs),
    source: {
      originalSource: "{\n  render: args => DevPlayground(args),\n  args: {\n    model: getMarshaller(initialModel, {\n      upgradeTo: \"latest\"\n    }).parser.parse(),\n    originalVersion: \"2.0\",\n    externalContextDescription: \"You're using the BPMN Editor Playground.\",\n    externalContextName: \"Apache KIE :: BPMN Editor :: Storybook :: Playground\",\n    issueTrackerHref: \"https://github.com/apache/incubator-kie-issues/issues/new\"\n  }\n}",
      ...((_c = (_b = Playground.parameters) === null || _b === void 0 ? void 0 : _b.docs) === null || _c === void 0 ? void 0 : _c.source)
    }
  }
};
const __namedExportsOrder = ["Playground"];

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2LVBsYXlncm91bmQtc3Rvcmllcy41NDNkZDJkOS5pZnJhbWUuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQitEO0FBQ1Y7QUFDd0I7QUFDTTtBQUNTO0FBQ0E7QUFDMUI7QUFDRjtBQUVoRSxNQUFNVyxZQUFZLEdBQUdGLDhFQUFtQixFQUFFO0FBQzFDLFNBQVNHLGFBQWFBLENBQUNDLElBQXFCO0VBQzFDLE1BQU0sQ0FBQ0MsS0FBSyxFQUFFQyxRQUFRLENBQUMsR0FBR2IsK0NBQVEsQ0FJL0IsTUFBSztJQUNOLE1BQU1jLHFCQUFxQixHQUFHVCx5RUFBYSxDQUFDSSxZQUFZLEVBQUU7TUFDeERNLFNBQVMsRUFBRTtLQUNaLENBQUM7SUFDRixPQUFPO01BQ0xDLFVBQVUsRUFBRUYscUJBQXFCO01BQ2pDRyxLQUFLLEVBQUUsQ0FBQ1gsOEZBQVMsQ0FBQ1EscUJBQXFCLENBQUNJLE1BQU0sQ0FBQ0MsS0FBSyxFQUFFLENBQUMsQ0FBQztNQUN4REMsT0FBTyxFQUFFO0tBQ1Y7RUFDSCxDQUFDLENBQUM7RUFDRixNQUFNQyxNQUFNLEdBQUd2QixrREFBVyxDQUFFd0IsQ0FBa0IsSUFBSTtJQUNoREMsT0FBTyxDQUFDQyxHQUFHLENBQUMsMkRBQTJELENBQUM7SUFDeEVGLENBQUMsQ0FBQ0csY0FBYyxFQUFFO0lBRWxCLElBQUlILENBQUMsQ0FBQ0ksWUFBWSxDQUFDQyxLQUFLLEVBQUU7TUFFeEIsQ0FBQyxHQUFHTCxDQUFDLENBQUNJLFlBQVksQ0FBQ0MsS0FBSyxDQUFDLENBQUNDLE9BQU8sQ0FBQyxDQUFDQyxJQUFJLEVBQUVDLENBQUMsS0FBSTtRQUM1QyxJQUFJRCxJQUFJLENBQUNFLElBQUksS0FBSyxNQUFNLEVBQUU7VUFDeEIsTUFBTUMsTUFBTSxHQUFHLElBQUlDLFVBQVUsRUFBRTtVQUMvQkQsTUFBTSxDQUFDRSxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUVDLElBQUEsSUFFM0I7WUFBQSxJQUY0Qjtj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QUMsRUFBQSxHQUFBUixVQUFVLENBQUNFLFVBQVUsY0FBQU0sRUFBQSx1QkFBQUEsRUFBQSxDQUFFTCxJQUFJLGNBQUFJLEVBQUEsdUJBQUFBLEVBQUEsQ0FBRUYsTUFBTTs7O0NBRzNDO0FBQUMsTUFBQUksbUJBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Aa2llLXRvb2xzL2JwbW4tZWRpdG9yLy4vc3Rvcmllcy9kZXYvUGxheWdyb3VuZC5zdG9yaWVzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogTGljZW5zZWQgdG8gdGhlIEFwYWNoZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIChBU0YpIHVuZGVyIG9uZVxuICogb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuICBTZWUgdGhlIE5PVElDRSBmaWxlXG4gKiBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvblxuICogcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuICBUaGUgQVNGIGxpY2Vuc2VzIHRoaXMgZmlsZVxuICogdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZVxuICogXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4gKiB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZyxcbiAqIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXG4gKiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxuICogS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlXG4gKiBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zXG4gKiB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB0eXBlIHsgTWV0YSwgU3RvcnlPYmogfSBmcm9tIFwiQHN0b3J5Ym9vay9yZWFjdFwiO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZU1lbW8sIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBcIkBwYXR0ZXJuZmx5L3JlYWN0LWNvcmUvZGlzdC9zdHlsZXMvYmFzZS5jc3NcIjtcbmltcG9ydCB7IEZsZXgsIEZsZXhJdGVtIH0gZnJvbSBcIkBwYXR0ZXJuZmx5L3JlYWN0LWNvcmUvZGlzdC9qcy9sYXlvdXRzL0ZsZXhcIjtcbmltcG9ydCB7IFBhZ2UsIFBhZ2VTZWN0aW9uIH0gZnJvbSBcIkBwYXR0ZXJuZmx5L3JlYWN0LWNvcmUvZGlzdC9qcy9jb21wb25lbnRzL1BhZ2VcIjtcbmltcG9ydCB7IEJwbW5MYXRlc3RNb2RlbCwgZ2V0TWFyc2hhbGxlciwgQnBtbk1hcnNoYWxsZXIgfSBmcm9tIFwiQGtpZS10b29scy9icG1uLW1hcnNoYWxsZXJcIjtcbmltcG9ydCB7IE5vcm1hbGl6ZWQsIG5vcm1hbGl6ZSB9IGZyb20gXCJAa2llLXRvb2xzL2JwbW4tZWRpdG9yL2Rpc3Qvbm9ybWFsaXphdGlvbi9ub3JtYWxpemVcIjtcbmltcG9ydCB7IGdlbmVyYXRlRW1wdHlCcG1uMjAgfSBmcm9tIFwiLi4vbWlzYy9lbXB0eS9FbXB0eS5zdG9yaWVzXCI7XG5pbXBvcnQgeyBCcG1uRWRpdG9yV3JhcHBlciB9IGZyb20gXCIuLi9icG1uRWRpdG9yU3Rvcmllc1dyYXBwZXJcIjtcbmltcG9ydCB7IEJwbW5FZGl0b3JQcm9wcywgT25CcG1uTW9kZWxDaGFuZ2UsIE9uUmVxdWVzdFRvSnVtcFRvUGF0aCB9IGZyb20gXCIuLi8uLi9zcmMvQnBtbkVkaXRvclwiO1xuY29uc3QgaW5pdGlhbE1vZGVsID0gZ2VuZXJhdGVFbXB0eUJwbW4yMCgpO1xuZnVuY3Rpb24gRGV2UGxheWdyb3VuZChhcmdzOiBCcG1uRWRpdG9yUHJvcHMpIHtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZTx7XG4gICAgbWFyc2hhbGxlcjogQnBtbk1hcnNoYWxsZXI7XG4gICAgc3RhY2s6IE5vcm1hbGl6ZWQ8QnBtbkxhdGVzdE1vZGVsPltdO1xuICAgIHBvaW50ZXI6IG51bWJlcjtcbiAgfT4oKCkgPT4ge1xuICAgIGNvbnN0IGluaXRpYWxCcG1uTWFyc2hhbGxlciA9IGdldE1hcnNoYWxsZXIoaW5pdGlhbE1vZGVsLCB7XG4gICAgICB1cGdyYWRlVG86IFwibGF0ZXN0XCJcbiAgICB9KTtcbiAgICByZXR1cm4ge1xuICAgICAgbWFyc2hhbGxlcjogaW5pdGlhbEJwbW5NYXJzaGFsbGVyLFxuICAgICAgc3RhY2s6IFtub3JtYWxpemUoaW5pdGlhbEJwbW5NYXJzaGFsbGVyLnBhcnNlci5wYXJzZSgpKV0sXG4gICAgICBwb2ludGVyOiAwXG4gICAgfTtcbiAgfSk7XG4gIGNvbnN0IG9uRHJvcCA9IHVzZUNhbGxiYWNrKChlOiBSZWFjdC5EcmFnRXZlbnQpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIkJQTU4gRWRpdG9yIDo6IFBsYXlncm91bmQgOjogRmlsZShzKSBkcm9wcGVkISBPcGVuaW5nIGl0LlwiKTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7IC8vIE5lY2Vzc2FyeSB0byBkaXNhYmxlIHRoZSBicm93c2VyJ3MgZGVmYXVsdCAnb25Ecm9wJyBoYW5kbGluZy5cblxuICAgIGlmIChlLmRhdGFUcmFuc2Zlci5pdGVtcykge1xuICAgICAgLy8gVXNlIERhdGFUcmFuc2Zlckl0ZW1MaXN0IGludGVyZmFjZSB0byBhY2Nlc3MgdGhlIGZpbGUocylcbiAgICAgIFsuLi5lLmRhdGFUcmFuc2Zlci5pdGVtc10uZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICBpZiAoaXRlbS5raW5kID09PSBcImZpbGVcIikge1xuICAgICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgICAgcmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICh7XG4gICAgICAgICAgICB0YXJnZXRcbiAgICAgICAgICB9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtYXJzaGFsbGVyID0gZ2V0TWFyc2hhbGxlcih0YXJnZXQ/LnJlc3VsdCBhcyBzdHJpbmcsIHtcbiAgICAgICAgICAgICAgdXBncmFkZVRvOiBcImxhdGVzdFwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNldFN0YXRlKHtcbiAgICAgICAgICAgICAgbWFyc2hhbGxlcixcbiAgICAgICAgICAgICAgc3RhY2s6IFtub3JtYWxpemUobWFyc2hhbGxlci5wYXJzZXIucGFyc2UoKSldLFxuICAgICAgICAgICAgICBwb2ludGVyOiAwXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZWFkZXIucmVhZEFzVGV4dChpdGVtLmdldEFzRmlsZSgpIGFzIGFueSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgW10pO1xuICBjb25zdCBvbkRyYWdPdmVyID0gdXNlQ2FsbGJhY2soKGU6IFJlYWN0LkRyYWdFdmVudCkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTsgLy8gTmVjZXNzYXJ5IHRvIGRpc2FibGUgdGhlIGJyb3dzZXIncyBkZWZhdWx0ICdvbkRyb3AnIGhhbmRsaW5nLlxuICB9LCBbXSk7XG4gIGNvbnN0IHJlc2V0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGNvbnN0IG1hcnNoYWxsZXIgPSBnZXRNYXJzaGFsbGVyKGdlbmVyYXRlRW1wdHlCcG1uMjAoKSwge1xuICAgICAgdXBncmFkZVRvOiBcImxhdGVzdFwiXG4gICAgfSk7XG4gICAgc2V0U3RhdGUoe1xuICAgICAgbWFyc2hhbGxlcixcbiAgICAgIHN0YWNrOiBbbm9ybWFsaXplKG1hcnNoYWxsZXIucGFyc2VyLnBhcnNlKCkpXSxcbiAgICAgIHBvaW50ZXI6IDBcbiAgICB9KTtcbiAgfSwgW10pO1xuICBjb25zdCBjdXJyZW50TW9kZWwgPSBzdGF0ZS5zdGFja1tzdGF0ZS5wb2ludGVyXTtcbiAgY29uc3QgZG93bmxvYWRSZWYgPSB1c2VSZWY8SFRNTEFuY2hvckVsZW1lbnQ+KG51bGwpO1xuICBjb25zdCBkb3dubG9hZEFzWG1sID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmIChkb3dubG9hZFJlZi5jdXJyZW50KSB7XG4gICAgICBjb25zdCBmaWxlQmxvYiA9IG5ldyBCbG9iKFtzdGF0ZS5tYXJzaGFsbGVyLmJ1aWxkZXIuYnVpbGQoY3VycmVudE1vZGVsKV0sIHtcbiAgICAgICAgdHlwZTogXCJ0ZXh0L3htbFwiXG4gICAgICB9KTtcbiAgICAgIGRvd25sb2FkUmVmLmN1cnJlbnQuZG93bmxvYWQgPSBgYnBtbi0ke2NyZWF0ZUlkKDEwKX0uYnBtbmA7XG4gICAgICBkb3dubG9hZFJlZi5jdXJyZW50LmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGVCbG9iKTtcbiAgICAgIGRvd25sb2FkUmVmLmN1cnJlbnQuY2xpY2soKTtcbiAgICB9XG4gIH0sIFtjdXJyZW50TW9kZWwsIHN0YXRlLm1hcnNoYWxsZXIuYnVpbGRlcl0pO1xuICBjb25zdCBjb3B5QXNYbWwgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoc3RhdGUubWFyc2hhbGxlci5idWlsZGVyLmJ1aWxkKGN1cnJlbnRNb2RlbCkpO1xuICB9LCBbY3VycmVudE1vZGVsLCBzdGF0ZS5tYXJzaGFsbGVyLmJ1aWxkZXJdKTtcbiAgY29uc3QgdW5kbyA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRTdGF0ZShwcmV2ID0+ICh7XG4gICAgICAuLi5wcmV2LFxuICAgICAgcG9pbnRlcjogTWF0aC5tYXgoMCwgcHJldi5wb2ludGVyIC0gMSlcbiAgICB9KSk7XG4gIH0sIFtdKTtcbiAgY29uc3QgcmVkbyA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRTdGF0ZShwcmV2ID0+ICh7XG4gICAgICAuLi5wcmV2LFxuICAgICAgcG9pbnRlcjogTWF0aC5taW4ocHJldi5zdGFjay5sZW5ndGggLSAxLCBwcmV2LnBvaW50ZXIgKyAxKVxuICAgIH0pKTtcbiAgfSwgW10pO1xuICBjb25zdCBvbk1vZGVsQ2hhbmdlID0gdXNlQ2FsbGJhY2s8T25CcG1uTW9kZWxDaGFuZ2U+KG1vZGVsID0+IHtcbiAgICBzZXRTdGF0ZShwcmV2ID0+IHtcbiAgICAgIGNvbnN0IG5ld1N0YWNrID0gcHJldi5zdGFjay5zbGljZSgwLCBwcmV2LnBvaW50ZXIgKyAxKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnByZXYsXG4gICAgICAgIHN0YWNrOiBbLi4ubmV3U3RhY2ssIG1vZGVsXSxcbiAgICAgICAgcG9pbnRlcjogbmV3U3RhY2subGVuZ3RoXG4gICAgICB9O1xuICAgIH0pO1xuICB9LCBbXSk7XG4gIGNvbnN0IG9uU2VsZWN0TW9kZWwgPSB1c2VDYWxsYmFjayhuZXdNb2RlbCA9PiB7XG4gICAgb25Nb2RlbENoYW5nZShub3JtYWxpemUoZ2V0TWFyc2hhbGxlcihuZXdNb2RlbCwge1xuICAgICAgdXBncmFkZVRvOiBcImxhdGVzdFwiXG4gICAgfSkucGFyc2VyLnBhcnNlKCkpKTtcbiAgfSwgW29uTW9kZWxDaGFuZ2VdKTtcbiAgY29uc3Qgb25SZXF1ZXN0VG9KdW1wVG9QYXRoID0gdXNlQ2FsbGJhY2s8T25SZXF1ZXN0VG9KdW1wVG9QYXRoPihwYXRoID0+IHtcbiAgICBhbGVydChcIkp1bXBpbmcgdG8gZmlsZSBcIiArIHBhdGgpO1xuICB9LCBbXSk7XG4gIGNvbnN0IGlzVW5kb0VuYWJsZWQgPSBzdGF0ZS5wb2ludGVyID4gMDtcbiAgY29uc3QgaXNSZWRvRW5hYmxlZCA9IHN0YXRlLnBvaW50ZXIgIT09IHN0YXRlLnN0YWNrLmxlbmd0aCAtIDE7XG4gIHJldHVybiA8PlxuICAgICAge2N1cnJlbnRNb2RlbCAmJiA8ZGl2IHN0eWxlPXt7XG4gICAgICB3aWR0aDogXCIxMDB2d1wiLFxuICAgICAgaGVpZ2h0OiBcIjEwMHZoXCJcbiAgICB9fT5cbiAgICAgICAgICA8UGFnZSBvbkRyYWdPdmVyPXtvbkRyYWdPdmVyfSBvbkRyb3A9e29uRHJvcH0+XG4gICAgICAgICAgICA8UGFnZVNlY3Rpb24gdmFyaWFudD17XCJsaWdodFwifSBpc0ZpbGxlZD17ZmFsc2V9IHBhZGRpbmc9e3tcbiAgICAgICAgICBkZWZhdWx0OiBcInBhZGRpbmdcIlxuICAgICAgICB9fT5cbiAgICAgICAgICAgICAgPEZsZXgganVzdGlmeUNvbnRlbnQ9e3tcbiAgICAgICAgICAgIGRlZmF1bHQ6IFwianVzdGlmeUNvbnRlbnRTcGFjZUJldHdlZW5cIlxuICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgIDxGbGV4SXRlbT5cbiAgICAgICAgICAgICAgICAgIDxoNT4oRHJhZyAmIGRyb3AgYSBmaWxlIGFueXdoZXJlIHRvIG9wZW4gaXQpPC9oNT5cbiAgICAgICAgICAgICAgICA8L0ZsZXhJdGVtPlxuICAgICAgICAgICAgICAgIDxGbGV4SXRlbSBzaHJpbms9e3tcbiAgICAgICAgICAgICAgZGVmYXVsdDogXCJzaHJpbmtcIlxuICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAmbmJzcDsgJm5ic3A7IHwgJm5ic3A7ICZuYnNwO1xuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBkaXNhYmxlZD17IWlzVW5kb0VuYWJsZWR9IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogaXNVbmRvRW5hYmxlZCA/IDEgOiAwLjVcbiAgICAgICAgICAgICAgfX0gb25DbGljaz17dW5kb30+XG4gICAgICAgICAgICAgICAgICAgIHtgVW5kbyAoJHtzdGF0ZS5wb2ludGVyfSlgfVxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAmbmJzcDsgJm5ic3A7XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGRpc2FibGVkPXshaXNSZWRvRW5hYmxlZH0gc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiBpc1JlZG9FbmFibGVkID8gMSA6IDAuNVxuICAgICAgICAgICAgICB9fSBvbkNsaWNrPXtyZWRvfT5cbiAgICAgICAgICAgICAgICAgICAge2BSZWRvICgke3N0YXRlLnN0YWNrLmxlbmd0aCAtIDEgLSBzdGF0ZS5wb2ludGVyfSlgfVxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAmbmJzcDsgJm5ic3A7IHwgJm5ic3A7ICZuYnNwO1xuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtyZXNldH0+UmVzZXQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICZuYnNwOyAmbmJzcDtcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17Y29weUFzWG1sfT5Db3B5IFhNTDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgJm5ic3A7ICZuYnNwO1xuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtkb3dubG9hZEFzWG1sfT5Eb3dubG9hZCBhcyAuYnBtbjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvRmxleEl0ZW0+XG4gICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgICAgPGEgcmVmPXtkb3dubG9hZFJlZn0gLz5cbiAgICAgICAgICAgIDwvUGFnZVNlY3Rpb24+XG4gICAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICAgIDxQYWdlU2VjdGlvbiB2YXJpYW50PXtcImxpZ2h0XCJ9IGlzRmlsbGVkPXt0cnVlfSBoYXNPdmVyZmxvd1Njcm9sbD17dHJ1ZX0gYXJpYS1sYWJlbD17XCJlZGl0b3JcIn0gcGFkZGluZz17e1xuICAgICAgICAgIGRlZmF1bHQ6IFwibm9QYWRkaW5nXCJcbiAgICAgICAgfX0+XG4gICAgICAgICAgICAgIHtCcG1uRWRpdG9yV3JhcHBlcih7XG4gICAgICAgICAgICBtb2RlbDogY3VycmVudE1vZGVsLFxuICAgICAgICAgICAgb3JpZ2luYWxWZXJzaW9uOiBhcmdzLm9yaWdpbmFsVmVyc2lvbixcbiAgICAgICAgICAgIG9uTW9kZWxDaGFuZ2UsXG4gICAgICAgICAgICBleHRlcm5hbENvbnRleHROYW1lOiBhcmdzLmV4dGVybmFsQ29udGV4dE5hbWUsXG4gICAgICAgICAgICBleHRlcm5hbENvbnRleHREZXNjcmlwdGlvbjogYXJncy5leHRlcm5hbENvbnRleHREZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGlzc3VlVHJhY2tlckhyZWY6IGFyZ3MuaXNzdWVUcmFja2VySHJlZixcbiAgICAgICAgICAgIG9uUmVxdWVzdFRvSnVtcFRvUGF0aFxuICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9QYWdlU2VjdGlvbj5cbiAgICAgICAgICA8L1BhZ2U+XG4gICAgICAgIDwvZGl2Pn1cbiAgICA8Lz47XG59XG5mdW5jdGlvbiBjcmVhdGVJZChsZW5ndGg6IG51bWJlcikge1xuICBsZXQgcmVzdWx0ID0gXCJcIjtcbiAgY29uc3QgY2hhcmFjdGVycyA9IFwiYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5XCI7XG4gIGNvbnN0IGNoYXJhY3RlcnNMZW5ndGggPSBjaGFyYWN0ZXJzLmxlbmd0aDtcbiAgbGV0IGNvdW50ZXIgPSAwO1xuICB3aGlsZSAoY291bnRlciA8IGxlbmd0aCkge1xuICAgIHJlc3VsdCArPSBjaGFyYWN0ZXJzLmNoYXJBdChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjaGFyYWN0ZXJzTGVuZ3RoKSk7XG4gICAgY291bnRlciArPSAxO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8vIE1vcmUgb24gaG93IHRvIHNldCB1cCBzdG9yaWVzIGF0OiBodHRwczovL3N0b3J5Ym9vay5qcy5vcmcvZG9jcy93cml0aW5nLXN0b3JpZXMjZGVmYXVsdC1leHBvcnRcbmNvbnN0IG1ldGE6IE1ldGE8dHlwZW9mIERldlBsYXlncm91bmQ+ID0ge1xuICB0aXRsZTogXCJEZXYvUGxheWdyb3VuZFwiLFxuICBjb21wb25lbnQ6IERldlBsYXlncm91bmRcbn07XG5leHBvcnQgZGVmYXVsdCBtZXRhO1xudHlwZSBTdG9yeSA9IFN0b3J5T2JqPHR5cGVvZiBEZXZQbGF5Z3JvdW5kPjtcblxuLy8gTW9yZSBvbiB3cml0aW5nIHN0b3JpZXMgd2l0aCBhcmdzOiBodHRwczovL3N0b3J5Ym9vay5qcy5vcmcvZG9jcy93cml0aW5nLXN0b3JpZXMvYXJnc1xuZXhwb3J0IGNvbnN0IFBsYXlncm91bmQ6IFN0b3J5ID0ge1xuICByZW5kZXI6IGFyZ3MgPT4gRGV2UGxheWdyb3VuZChhcmdzKSxcbiAgYXJnczoge1xuICAgIG1vZGVsOiBnZXRNYXJzaGFsbGVyKGluaXRpYWxNb2RlbCwge1xuICAgICAgdXBncmFkZVRvOiBcImxhdGVzdFwiXG4gICAgfSkucGFyc2VyLnBhcnNlKCksXG4gICAgb3JpZ2luYWxWZXJzaW9uOiBcIjIuMFwiLFxuICAgIGV4dGVybmFsQ29udGV4dERlc2NyaXB0aW9uOiBcIllvdSdyZSB1c2luZyB0aGUgQlBNTiBFZGl0b3IgUGxheWdyb3VuZC5cIixcbiAgICBleHRlcm5hbENvbnRleHROYW1lOiBcIkFwYWNoZSBLSUUgOjogQlBNTiBFZGl0b3IgOjogU3Rvcnlib29rIDo6IFBsYXlncm91bmRcIixcbiAgICBpc3N1ZVRyYWNrZXJIcmVmOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9hcGFjaGUvaW5jdWJhdG9yLWtpZS1pc3N1ZXMvaXNzdWVzL25ld1wiXG4gIH1cbn07XG5QbGF5Z3JvdW5kLnBhcmFtZXRlcnMgPSB7XG4gIC4uLlBsYXlncm91bmQucGFyYW1ldGVycyxcbiAgZG9jczoge1xuICAgIC4uLlBsYXlncm91bmQucGFyYW1ldGVycz8uZG9jcyxcbiAgICBzb3VyY2U6IHtcbiAgICAgIG9yaWdpbmFsU291cmNlOiBcIntcXG4gIHJlbmRlcjogYXJncyA9PiBEZXZQbGF5Z3JvdW5kKGFyZ3MpLFxcbiAgYXJnczoge1xcbiAgICBtb2RlbDogZ2V0TWFyc2hhbGxlcihpbml0aWFsTW9kZWwsIHtcXG4gICAgICB1cGdyYWRlVG86IFxcXCJsYXRlc3RcXFwiXFxuICAgIH0pLnBhcnNlci5wYXJzZSgpLFxcbiAgICBvcmlnaW5hbFZlcnNpb246IFxcXCIyLjBcXFwiLFxcbiAgICBleHRlcm5hbENvbnRleHREZXNjcmlwdGlvbjogXFxcIllvdSdyZSB1c2luZyB0aGUgQlBNTiBFZGl0b3IgUGxheWdyb3VuZC5cXFwiLFxcbiAgICBleHRlcm5hbENvbnRleHROYW1lOiBcXFwiQXBhY2hlIEtJRSA6OiBCUE1OIEVkaXRvciA6OiBTdG9yeWJvb2sgOjogUGxheWdyb3VuZFxcXCIsXFxuICAgIGlzc3VlVHJhY2tlckhyZWY6IFxcXCJodHRwczovL2dpdGh1Yi5jb20vYXBhY2hlL2luY3ViYXRvci1raWUtaXNzdWVzL2lzc3Vlcy9uZXdcXFwiXFxuICB9XFxufVwiLFxuICAgICAgLi4uUGxheWdyb3VuZC5wYXJhbWV0ZXJzPy5kb2NzPy5zb3VyY2VcbiAgICB9XG4gIH1cbn07Il0sIm5hbWVzIjpbInVzZUNhbGxiYWNrIiwidXNlUmVmIiwidXNlU3RhdGUiLCJGbGV4IiwiRmxleEl0ZW0iLCJQYWdlIiwiUGFnZVNlY3Rpb24iLCJnZXRNYXJzaGFsbGVyIiwibm9ybWFsaXplIiwiZ2VuZXJhdGVFbXB0eUJwbW4yMCIsIkJwbW5FZGl0b3JXcmFwcGVyIiwiaW5pdGlhbE1vZGVsIiwiRGV2UGxheWdyb3VuZCIsImFyZ3MiLCJzdGF0ZSIsInNldFN0YXRlIiwiaW5pdGlhbEJwbW5NYXJzaGFsbGVyIiwidXBncmFkZVRvIiwibWFyc2hhbGxlciIsInN0YWNrIiwicGFyc2VyIiwicGFyc2UiLCJwb2ludGVyIiwib25Ecm9wIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJwcmV2ZW50RGVmYXVsdCIsImRhdGFUcmFuc2ZlciIsIml0ZW1zIiwiZm9yRWFjaCIsIml0ZW0iLCJpIiwia2luZCIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiX3JlZiIsInRhcmdldCIsInJlc3VsdCIsInJlYWRBc1RleHQiLCJnZXRBc0ZpbGUiLCJvbkRyYWdPdmVyIiwicmVzZXQiLCJjdXJyZW50TW9kZWwiLCJkb3dubG9hZFJlZiIsImRvd25sb2FkQXNYbWwiLCJjdXJyZW50IiwiZmlsZUJsb2IiLCJCbG9iIiwiYnVpbGRlciIsImJ1aWxkIiwidHlwZSIsImRvd25sb2FkIiwiY3JlYXRlSWQiLCJocmVmIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiY2xpY2siLCJjb3B5QXNYbWwiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJ1bmRvIiwicHJldiIsIk1hdGgiLCJtYXgiLCJyZWRvIiwibWluIiwibGVuZ3RoIiwib25Nb2RlbENoYW5nZSIsIm1vZGVsIiwibmV3U3RhY2siLCJzbGljZSIsIm9uU2VsZWN0TW9kZWwiLCJuZXdNb2RlbCIsIm9uUmVxdWVzdFRvSnVtcFRvUGF0aCIsInBhdGgiLCJhbGVydCIsImlzVW5kb0VuYWJsZWQiLCJpc1JlZG9FbmFibGVkIiwiX2pzeCIsIl9GcmFnbWVudCIsImNoaWxkcmVuIiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsIl9qc3hzIiwidmFyaWFudCIsImlzRmlsbGVkIiwicGFkZGluZyIsImRlZmF1bHQiLCJqdXN0aWZ5Q29udGVudCIsInNocmluayIsImRpc2FibGVkIiwib3BhY2l0eSIsIm9uQ2xpY2siLCJyZWYiLCJoYXNPdmVyZmxvd1Njcm9sbCIsIm9yaWdpbmFsVmVyc2lvbiIsImV4dGVybmFsQ29udGV4dE5hbWUiLCJleHRlcm5hbENvbnRleHREZXNjcmlwdGlvbiIsImlzc3VlVHJhY2tlckhyZWYiLCJjaGFyYWN0ZXJzIiwiY2hhcmFjdGVyc0xlbmd0aCIsImNvdW50ZXIiLCJjaGFyQXQiLCJmbG9vciIsInJhbmRvbSIsIm1ldGEiLCJ0aXRsZSIsImNvbXBvbmVudCIsIlBsYXlncm91bmQiLCJyZW5kZXIiLCJwYXJhbWV0ZXJzIiwiZG9jcyIsIl9hIiwic291cmNlIiwib3JpZ2luYWxTb3VyY2UiLCJfYyIsIl9iIiwiX19uYW1lZEV4cG9ydHNPcmRlciJdLCJzb3VyY2VSb290IjoiIn0=