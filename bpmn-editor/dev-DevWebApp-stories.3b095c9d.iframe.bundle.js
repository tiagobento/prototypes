"use strict";
(self["webpackChunk_kie_tools_bpmn_editor"] = self["webpackChunk_kie_tools_bpmn_editor"] || []).push([["dev-DevWebApp-stories"],{

/***/ "./stories/dev/DevWebApp.stories.tsx":
/*!*******************************************!*\
  !*** ./stories/dev/DevWebApp.stories.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WebApp: () => (/* binding */ WebApp),
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
function DevWebApp(args) {
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
    console.log("BPMN Editor :: Dev webapp :: File(s) dropped! Opening it.");
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
              shrink: {
                default: "shrink"
              },
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", {
                children: "BPMN Editor :: Dev webapp "
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_js_layouts_Flex__WEBPACK_IMPORTED_MODULE_8__.FlexItem, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h5", {
                children: "(Drag & drop a file anywhere to open it)"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_js_layouts_Flex__WEBPACK_IMPORTED_MODULE_8__.FlexItem, {
              shrink: {
                default: "shrink"
              },
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                onClick: () => onSelectModel((0,_misc_empty_Empty_stories__WEBPACK_IMPORTED_MODULE_5__.generateEmptyBpmn20)()),
                children: "Empty"
              }), "\u00A0 \u00A0 | \u00A0 \u00A0", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
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
                children: "Copy as XML"
              }), "\u00A0 \u00A0", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                onClick: downloadAsXml,
                children: "Download as XML"
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
  title: "Dev/Web App",
  component: DevWebApp
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (meta);
const WebApp = {
  render: args => DevWebApp(args),
  args: {
    model: (0,_kie_tools_bpmn_marshaller__WEBPACK_IMPORTED_MODULE_3__.getMarshaller)(initialModel, {
      upgradeTo: "latest"
    }).parser.parse(),
    originalVersion: "2.0",
    externalContextDescription: "You're using the BPMN Dev webapp, so there's only two simple external models that can be included.",
    externalContextName: "Dev webapp",
    issueTrackerHref: "https://github.com/apache/incubator-kie-issues/issues/new"
  }
};
WebApp.parameters = {
  ...WebApp.parameters,
  docs: {
    ...((_a = WebApp.parameters) === null || _a === void 0 ? void 0 : _a.docs),
    source: {
      originalSource: "{\n  render: args => DevWebApp(args),\n  args: {\n    model: getMarshaller(initialModel, {\n      upgradeTo: \"latest\"\n    }).parser.parse(),\n    originalVersion: \"2.0\",\n    externalContextDescription: \"You're using the BPMN Dev webapp, so there's only two simple external models that can be included.\",\n    externalContextName: \"Dev webapp\",\n    issueTrackerHref: \"https://github.com/apache/incubator-kie-issues/issues/new\"\n  }\n}",
      ...((_c = (_b = WebApp.parameters) === null || _b === void 0 ? void 0 : _b.docs) === null || _c === void 0 ? void 0 : _c.source)
    }
  }
};
const __namedExportsOrder = ["WebApp"];

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2LURldldlYkFwcC1zdG9yaWVzLjNiMDk1YzlkLmlmcmFtZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFCK0Q7QUFDVjtBQUN3QjtBQUNNO0FBQ1M7QUFDQTtBQUMxQjtBQUNGO0FBRWhFLE1BQU1XLFlBQVksR0FBR0YsOEVBQW1CLEVBQUU7QUFDMUMsU0FBU0csU0FBU0EsQ0FBQ0MsSUFBcUI7RUFDdEMsTUFBTSxDQUFDQyxLQUFLLEVBQUVDLFFBQVEsQ0FBQyxHQUFHYiwrQ0FBUSxDQUkvQixNQUFLO0lBQ04sTUFBTWMscUJBQXFCLEdBQUdULHlFQUFhLENBQUNJLFlBQVksRUFBRTtNQUN4RE0sU0FBUyxFQUFFO0tBQ1osQ0FBQztJQUNGLE9BQU87TUFDTEMsVUFBVSxFQUFFRixxQkFBcUI7TUFDakNHLEtBQUssRUFBRSxDQUFDWCw4RkFBUyxDQUFDUSxxQkFBcUIsQ0FBQ0ksTUFBTSxDQUFDQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO01BQ3hEQyxPQUFPLEVBQUU7S0FDVjtFQUNILENBQUMsQ0FBQztFQUNGLE1BQU1DLE1BQU0sR0FBR3ZCLGtEQUFXLENBQUV3QixDQUFrQixJQUFJO0lBQ2hEQyxPQUFPLENBQUNDLEdBQUcsQ0FBQywyREFBMkQsQ0FBQztJQUN4RUYsQ0FBQyxDQUFDRyxjQUFjLEVBQUU7SUFFbEIsSUFBSUgsQ0FBQyxDQUFDSSxZQUFZLENBQUNDLEtBQUssRUFBRTtNQUV4QixDQUFDLEdBQUdMLENBQUMsQ0FBQ0ksWUFBWSxDQUFDQyxLQUFLLENBQUMsQ0FBQ0MsT0FBTyxDQUFDLENBQUNDLElBQUksRUFBRUMsQ0FBQyxLQUFJO1FBQzVDLElBQUlELElBQUksQ0FBQ0UsSUFBSSxLQUFLLE1BQU0sRUFBRTtVQUN4QixNQUFNQyxNQUFNLEdBQUcsSUFBSUMsVUFBVSxFQUFFO1VBQy9CRCxNQUFNLENBQUNFLGdCQUFnQixDQUFDLE1BQU0sRUFBRUMsSUFBQSxJQUUzQjtZQUFBLElBRjRCO2NB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TUFBTSxDQUFDRSxVQUFVLEdBQUc7RUFDbEIsR0FBR0YsTUFBTSxDQUFDRSxVQUFVO0VBQ3BCQyxJQUFJLEVBQUU7SUFDSixJQUFHLENBQUFDLEVBQUEsR0FBQUosTUFBTSxDQUFDRSxVQUFVLGNBQUFFLEVBQUEsdUJBQUFBLEVBQUEsQ0FBRUQsSUFBSTtJQUMxQkUsTUFBTSxFQUFFO01BQ05DLGNBQWMsRUFBRSxnY0FBZ2M7TUFDaGQsSUFBRyxDQUFBQyxFQUFBLElBQUFDLEVBQUEsR0FBQVIsTUFBTSxDQUFDRSxVQUFVLGNBQUFNLEVBQUEsdUJBQUFBLEVBQUEsQ0FBRUwsSUFBSSxjQUFBSSxFQUFBLHVCQUFBQSxFQUFBLENBQUVGLE1BQU07OztDQUd2QztBQUFDLE1BQUFJLG1CQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGtpZS10b29scy9icG1uLWVkaXRvci8uL3N0b3JpZXMvZGV2L0RldldlYkFwcC5zdG9yaWVzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogTGljZW5zZWQgdG8gdGhlIEFwYWNoZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIChBU0YpIHVuZGVyIG9uZVxuICogb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuICBTZWUgdGhlIE5PVElDRSBmaWxlXG4gKiBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvblxuICogcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuICBUaGUgQVNGIGxpY2Vuc2VzIHRoaXMgZmlsZVxuICogdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZVxuICogXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4gKiB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZyxcbiAqIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXG4gKiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxuICogS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlXG4gKiBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zXG4gKiB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB0eXBlIHsgTWV0YSwgU3RvcnlPYmogfSBmcm9tIFwiQHN0b3J5Ym9vay9yZWFjdFwiO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZU1lbW8sIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBcIkBwYXR0ZXJuZmx5L3JlYWN0LWNvcmUvZGlzdC9zdHlsZXMvYmFzZS5jc3NcIjtcbmltcG9ydCB7IEZsZXgsIEZsZXhJdGVtIH0gZnJvbSBcIkBwYXR0ZXJuZmx5L3JlYWN0LWNvcmUvZGlzdC9qcy9sYXlvdXRzL0ZsZXhcIjtcbmltcG9ydCB7IFBhZ2UsIFBhZ2VTZWN0aW9uIH0gZnJvbSBcIkBwYXR0ZXJuZmx5L3JlYWN0LWNvcmUvZGlzdC9qcy9jb21wb25lbnRzL1BhZ2VcIjtcbmltcG9ydCB7IEJwbW5MYXRlc3RNb2RlbCwgZ2V0TWFyc2hhbGxlciwgQnBtbk1hcnNoYWxsZXIgfSBmcm9tIFwiQGtpZS10b29scy9icG1uLW1hcnNoYWxsZXJcIjtcbmltcG9ydCB7IE5vcm1hbGl6ZWQsIG5vcm1hbGl6ZSB9IGZyb20gXCJAa2llLXRvb2xzL2JwbW4tZWRpdG9yL2Rpc3Qvbm9ybWFsaXphdGlvbi9ub3JtYWxpemVcIjtcbmltcG9ydCB7IGdlbmVyYXRlRW1wdHlCcG1uMjAgfSBmcm9tIFwiLi4vbWlzYy9lbXB0eS9FbXB0eS5zdG9yaWVzXCI7XG5pbXBvcnQgeyBCcG1uRWRpdG9yV3JhcHBlciB9IGZyb20gXCIuLi9icG1uRWRpdG9yU3Rvcmllc1dyYXBwZXJcIjtcbmltcG9ydCB7IEJwbW5FZGl0b3JQcm9wcywgT25CcG1uTW9kZWxDaGFuZ2UsIE9uUmVxdWVzdFRvSnVtcFRvUGF0aCB9IGZyb20gXCIuLi8uLi9zcmMvQnBtbkVkaXRvclwiO1xuY29uc3QgaW5pdGlhbE1vZGVsID0gZ2VuZXJhdGVFbXB0eUJwbW4yMCgpO1xuZnVuY3Rpb24gRGV2V2ViQXBwKGFyZ3M6IEJwbW5FZGl0b3JQcm9wcykge1xuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlPHtcbiAgICBtYXJzaGFsbGVyOiBCcG1uTWFyc2hhbGxlcjtcbiAgICBzdGFjazogTm9ybWFsaXplZDxCcG1uTGF0ZXN0TW9kZWw+W107XG4gICAgcG9pbnRlcjogbnVtYmVyO1xuICB9PigoKSA9PiB7XG4gICAgY29uc3QgaW5pdGlhbEJwbW5NYXJzaGFsbGVyID0gZ2V0TWFyc2hhbGxlcihpbml0aWFsTW9kZWwsIHtcbiAgICAgIHVwZ3JhZGVUbzogXCJsYXRlc3RcIlxuICAgIH0pO1xuICAgIHJldHVybiB7XG4gICAgICBtYXJzaGFsbGVyOiBpbml0aWFsQnBtbk1hcnNoYWxsZXIsXG4gICAgICBzdGFjazogW25vcm1hbGl6ZShpbml0aWFsQnBtbk1hcnNoYWxsZXIucGFyc2VyLnBhcnNlKCkpXSxcbiAgICAgIHBvaW50ZXI6IDBcbiAgICB9O1xuICB9KTtcbiAgY29uc3Qgb25Ecm9wID0gdXNlQ2FsbGJhY2soKGU6IFJlYWN0LkRyYWdFdmVudCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiQlBNTiBFZGl0b3IgOjogRGV2IHdlYmFwcCA6OiBGaWxlKHMpIGRyb3BwZWQhIE9wZW5pbmcgaXQuXCIpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTsgLy8gTmVjZXNzYXJ5IHRvIGRpc2FibGUgdGhlIGJyb3dzZXIncyBkZWZhdWx0ICdvbkRyb3AnIGhhbmRsaW5nLlxuXG4gICAgaWYgKGUuZGF0YVRyYW5zZmVyLml0ZW1zKSB7XG4gICAgICAvLyBVc2UgRGF0YVRyYW5zZmVySXRlbUxpc3QgaW50ZXJmYWNlIHRvIGFjY2VzcyB0aGUgZmlsZShzKVxuICAgICAgWy4uLmUuZGF0YVRyYW5zZmVyLml0ZW1zXS5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XG4gICAgICAgIGlmIChpdGVtLmtpbmQgPT09IFwiZmlsZVwiKSB7XG4gICAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgICByZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKHtcbiAgICAgICAgICAgIHRhcmdldFxuICAgICAgICAgIH0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1hcnNoYWxsZXIgPSBnZXRNYXJzaGFsbGVyKCh0YXJnZXQ/LnJlc3VsdCBhcyBzdHJpbmcpLCB7XG4gICAgICAgICAgICAgIHVwZ3JhZGVUbzogXCJsYXRlc3RcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIG1hcnNoYWxsZXIsXG4gICAgICAgICAgICAgIHN0YWNrOiBbbm9ybWFsaXplKG1hcnNoYWxsZXIucGFyc2VyLnBhcnNlKCkpXSxcbiAgICAgICAgICAgICAgcG9pbnRlcjogMFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmVhZGVyLnJlYWRBc1RleHQoKGl0ZW0uZ2V0QXNGaWxlKCkgYXMgYW55KSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgW10pO1xuICBjb25zdCBvbkRyYWdPdmVyID0gdXNlQ2FsbGJhY2soKGU6IFJlYWN0LkRyYWdFdmVudCkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTsgLy8gTmVjZXNzYXJ5IHRvIGRpc2FibGUgdGhlIGJyb3dzZXIncyBkZWZhdWx0ICdvbkRyb3AnIGhhbmRsaW5nLlxuICB9LCBbXSk7XG4gIGNvbnN0IHJlc2V0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGNvbnN0IG1hcnNoYWxsZXIgPSBnZXRNYXJzaGFsbGVyKGdlbmVyYXRlRW1wdHlCcG1uMjAoKSwge1xuICAgICAgdXBncmFkZVRvOiBcImxhdGVzdFwiXG4gICAgfSk7XG4gICAgc2V0U3RhdGUoe1xuICAgICAgbWFyc2hhbGxlcixcbiAgICAgIHN0YWNrOiBbbm9ybWFsaXplKG1hcnNoYWxsZXIucGFyc2VyLnBhcnNlKCkpXSxcbiAgICAgIHBvaW50ZXI6IDBcbiAgICB9KTtcbiAgfSwgW10pO1xuICBjb25zdCBjdXJyZW50TW9kZWwgPSBzdGF0ZS5zdGFja1tzdGF0ZS5wb2ludGVyXTtcbiAgY29uc3QgZG93bmxvYWRSZWYgPSB1c2VSZWY8SFRNTEFuY2hvckVsZW1lbnQ+KG51bGwpO1xuICBjb25zdCBkb3dubG9hZEFzWG1sID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmIChkb3dubG9hZFJlZi5jdXJyZW50KSB7XG4gICAgICBjb25zdCBmaWxlQmxvYiA9IG5ldyBCbG9iKFtzdGF0ZS5tYXJzaGFsbGVyLmJ1aWxkZXIuYnVpbGQoY3VycmVudE1vZGVsKV0sIHtcbiAgICAgICAgdHlwZTogXCJ0ZXh0L3htbFwiXG4gICAgICB9KTtcbiAgICAgIGRvd25sb2FkUmVmLmN1cnJlbnQuZG93bmxvYWQgPSBgYnBtbi0ke2NyZWF0ZUlkKDEwKX0uYnBtbmA7XG4gICAgICBkb3dubG9hZFJlZi5jdXJyZW50LmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGVCbG9iKTtcbiAgICAgIGRvd25sb2FkUmVmLmN1cnJlbnQuY2xpY2soKTtcbiAgICB9XG4gIH0sIFtjdXJyZW50TW9kZWwsIHN0YXRlLm1hcnNoYWxsZXIuYnVpbGRlcl0pO1xuICBjb25zdCBjb3B5QXNYbWwgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoc3RhdGUubWFyc2hhbGxlci5idWlsZGVyLmJ1aWxkKGN1cnJlbnRNb2RlbCkpO1xuICB9LCBbY3VycmVudE1vZGVsLCBzdGF0ZS5tYXJzaGFsbGVyLmJ1aWxkZXJdKTtcbiAgY29uc3QgdW5kbyA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRTdGF0ZShwcmV2ID0+ICh7XG4gICAgICAuLi5wcmV2LFxuICAgICAgcG9pbnRlcjogTWF0aC5tYXgoMCwgcHJldi5wb2ludGVyIC0gMSlcbiAgICB9KSk7XG4gIH0sIFtdKTtcbiAgY29uc3QgcmVkbyA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRTdGF0ZShwcmV2ID0+ICh7XG4gICAgICAuLi5wcmV2LFxuICAgICAgcG9pbnRlcjogTWF0aC5taW4ocHJldi5zdGFjay5sZW5ndGggLSAxLCBwcmV2LnBvaW50ZXIgKyAxKVxuICAgIH0pKTtcbiAgfSwgW10pO1xuICBjb25zdCBvbk1vZGVsQ2hhbmdlID0gdXNlQ2FsbGJhY2s8T25CcG1uTW9kZWxDaGFuZ2U+KG1vZGVsID0+IHtcbiAgICBzZXRTdGF0ZShwcmV2ID0+IHtcbiAgICAgIGNvbnN0IG5ld1N0YWNrID0gcHJldi5zdGFjay5zbGljZSgwLCBwcmV2LnBvaW50ZXIgKyAxKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnByZXYsXG4gICAgICAgIHN0YWNrOiBbLi4ubmV3U3RhY2ssIG1vZGVsXSxcbiAgICAgICAgcG9pbnRlcjogbmV3U3RhY2subGVuZ3RoXG4gICAgICB9O1xuICAgIH0pO1xuICB9LCBbXSk7XG4gIGNvbnN0IG9uU2VsZWN0TW9kZWwgPSB1c2VDYWxsYmFjayhuZXdNb2RlbCA9PiB7XG4gICAgb25Nb2RlbENoYW5nZShub3JtYWxpemUoZ2V0TWFyc2hhbGxlcihuZXdNb2RlbCwge1xuICAgICAgdXBncmFkZVRvOiBcImxhdGVzdFwiXG4gICAgfSkucGFyc2VyLnBhcnNlKCkpKTtcbiAgfSwgW29uTW9kZWxDaGFuZ2VdKTtcbiAgY29uc3Qgb25SZXF1ZXN0VG9KdW1wVG9QYXRoID0gdXNlQ2FsbGJhY2s8T25SZXF1ZXN0VG9KdW1wVG9QYXRoPihwYXRoID0+IHtcbiAgICBhbGVydChcIkp1bXBpbmcgdG8gZmlsZSBcIiArIHBhdGgpO1xuICB9LCBbXSk7XG4gIGNvbnN0IGlzVW5kb0VuYWJsZWQgPSBzdGF0ZS5wb2ludGVyID4gMDtcbiAgY29uc3QgaXNSZWRvRW5hYmxlZCA9IHN0YXRlLnBvaW50ZXIgIT09IHN0YXRlLnN0YWNrLmxlbmd0aCAtIDE7XG4gIHJldHVybiA8PlxuICAgICAge2N1cnJlbnRNb2RlbCAmJiA8ZGl2IHN0eWxlPXt7XG4gICAgICB3aWR0aDogXCIxMDB2d1wiLFxuICAgICAgaGVpZ2h0OiBcIjEwMHZoXCJcbiAgICB9fT5cbiAgICAgICAgICA8UGFnZSBvbkRyYWdPdmVyPXtvbkRyYWdPdmVyfSBvbkRyb3A9e29uRHJvcH0+XG4gICAgICAgICAgICA8UGFnZVNlY3Rpb24gdmFyaWFudD17XCJsaWdodFwifSBpc0ZpbGxlZD17ZmFsc2V9IHBhZGRpbmc9e3tcbiAgICAgICAgICBkZWZhdWx0OiBcInBhZGRpbmdcIlxuICAgICAgICB9fT5cbiAgICAgICAgICAgICAgPEZsZXgganVzdGlmeUNvbnRlbnQ9e3tcbiAgICAgICAgICAgIGRlZmF1bHQ6IFwianVzdGlmeUNvbnRlbnRTcGFjZUJldHdlZW5cIlxuICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgIDxGbGV4SXRlbSBzaHJpbms9e3tcbiAgICAgICAgICAgICAgZGVmYXVsdDogXCJzaHJpbmtcIlxuICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICA8aDM+QlBNTiBFZGl0b3IgOjogRGV2IHdlYmFwcCA8L2gzPlxuICAgICAgICAgICAgICAgIDwvRmxleEl0ZW0+XG4gICAgICAgICAgICAgICAgPEZsZXhJdGVtPlxuICAgICAgICAgICAgICAgICAgPGg1PihEcmFnICYgZHJvcCBhIGZpbGUgYW55d2hlcmUgdG8gb3BlbiBpdCk8L2g1PlxuICAgICAgICAgICAgICAgIDwvRmxleEl0ZW0+XG4gICAgICAgICAgICAgICAgPEZsZXhJdGVtIHNocmluaz17e1xuICAgICAgICAgICAgICBkZWZhdWx0OiBcInNocmlua1wiXG4gICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gb25TZWxlY3RNb2RlbChnZW5lcmF0ZUVtcHR5QnBtbjIwKCkpfT5FbXB0eTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgJm5ic3A7ICZuYnNwOyB8ICZuYnNwOyAmbmJzcDtcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gZGlzYWJsZWQ9eyFpc1VuZG9FbmFibGVkfSBzdHlsZT17e1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IGlzVW5kb0VuYWJsZWQgPyAxIDogMC41XG4gICAgICAgICAgICAgIH19IG9uQ2xpY2s9e3VuZG99PlxuICAgICAgICAgICAgICAgICAgICB7YFVuZG8gKCR7c3RhdGUucG9pbnRlcn0pYH1cbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgJm5ic3A7ICZuYnNwO1xuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBkaXNhYmxlZD17IWlzUmVkb0VuYWJsZWR9IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogaXNSZWRvRW5hYmxlZCA/IDEgOiAwLjVcbiAgICAgICAgICAgICAgfX0gb25DbGljaz17cmVkb30+XG4gICAgICAgICAgICAgICAgICAgIHtgUmVkbyAoJHtzdGF0ZS5zdGFjay5sZW5ndGggLSAxIC0gc3RhdGUucG9pbnRlcn0pYH1cbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgJm5ic3A7ICZuYnNwOyB8ICZuYnNwOyAmbmJzcDtcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17cmVzZXR9PlJlc2V0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAmbmJzcDsgJm5ic3A7XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2NvcHlBc1htbH0+Q29weSBhcyBYTUw8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICZuYnNwOyAmbmJzcDtcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17ZG93bmxvYWRBc1htbH0+RG93bmxvYWQgYXMgWE1MPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9GbGV4SXRlbT5cbiAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgICA8YSByZWY9e2Rvd25sb2FkUmVmfSAvPlxuICAgICAgICAgICAgPC9QYWdlU2VjdGlvbj5cbiAgICAgICAgICAgIDxociAvPlxuICAgICAgICAgICAgPFBhZ2VTZWN0aW9uIHZhcmlhbnQ9e1wibGlnaHRcIn0gaXNGaWxsZWQ9e3RydWV9IGhhc092ZXJmbG93U2Nyb2xsPXt0cnVlfSBhcmlhLWxhYmVsPXtcImVkaXRvclwifSBwYWRkaW5nPXt7XG4gICAgICAgICAgZGVmYXVsdDogXCJub1BhZGRpbmdcIlxuICAgICAgICB9fT5cbiAgICAgICAgICAgICAge0JwbW5FZGl0b3JXcmFwcGVyKHtcbiAgICAgICAgICAgIG1vZGVsOiBjdXJyZW50TW9kZWwsXG4gICAgICAgICAgICBvcmlnaW5hbFZlcnNpb246IGFyZ3Mub3JpZ2luYWxWZXJzaW9uLFxuICAgICAgICAgICAgb25Nb2RlbENoYW5nZSxcbiAgICAgICAgICAgIGV4dGVybmFsQ29udGV4dE5hbWU6IGFyZ3MuZXh0ZXJuYWxDb250ZXh0TmFtZSxcbiAgICAgICAgICAgIGV4dGVybmFsQ29udGV4dERlc2NyaXB0aW9uOiBhcmdzLmV4dGVybmFsQ29udGV4dERlc2NyaXB0aW9uLFxuICAgICAgICAgICAgaXNzdWVUcmFja2VySHJlZjogYXJncy5pc3N1ZVRyYWNrZXJIcmVmLFxuICAgICAgICAgICAgb25SZXF1ZXN0VG9KdW1wVG9QYXRoXG4gICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L1BhZ2VTZWN0aW9uPlxuICAgICAgICAgIDwvUGFnZT5cbiAgICAgICAgPC9kaXY+fVxuICAgIDwvPjtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUlkKGxlbmd0aDogbnVtYmVyKSB7XG4gIGxldCByZXN1bHQgPSBcIlwiO1xuICBjb25zdCBjaGFyYWN0ZXJzID0gXCJhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODlcIjtcbiAgY29uc3QgY2hhcmFjdGVyc0xlbmd0aCA9IGNoYXJhY3RlcnMubGVuZ3RoO1xuICBsZXQgY291bnRlciA9IDA7XG4gIHdoaWxlIChjb3VudGVyIDwgbGVuZ3RoKSB7XG4gICAgcmVzdWx0ICs9IGNoYXJhY3RlcnMuY2hhckF0KE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNoYXJhY3RlcnNMZW5ndGgpKTtcbiAgICBjb3VudGVyICs9IDE7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLy8gTW9yZSBvbiBob3cgdG8gc2V0IHVwIHN0b3JpZXMgYXQ6IGh0dHBzOi8vc3Rvcnlib29rLmpzLm9yZy9kb2NzL3dyaXRpbmctc3RvcmllcyNkZWZhdWx0LWV4cG9ydFxuY29uc3QgbWV0YTogTWV0YTx0eXBlb2YgRGV2V2ViQXBwPiA9IHtcbiAgdGl0bGU6IFwiRGV2L1dlYiBBcHBcIixcbiAgY29tcG9uZW50OiBEZXZXZWJBcHBcbn07XG5leHBvcnQgZGVmYXVsdCBtZXRhO1xudHlwZSBTdG9yeSA9IFN0b3J5T2JqPHR5cGVvZiBEZXZXZWJBcHA+O1xuXG4vLyBNb3JlIG9uIHdyaXRpbmcgc3RvcmllcyB3aXRoIGFyZ3M6IGh0dHBzOi8vc3Rvcnlib29rLmpzLm9yZy9kb2NzL3dyaXRpbmctc3Rvcmllcy9hcmdzXG5leHBvcnQgY29uc3QgV2ViQXBwOiBTdG9yeSA9IHtcbiAgcmVuZGVyOiBhcmdzID0+IERldldlYkFwcChhcmdzKSxcbiAgYXJnczoge1xuICAgIG1vZGVsOiBnZXRNYXJzaGFsbGVyKGluaXRpYWxNb2RlbCwge1xuICAgICAgdXBncmFkZVRvOiBcImxhdGVzdFwiXG4gICAgfSkucGFyc2VyLnBhcnNlKCksXG4gICAgb3JpZ2luYWxWZXJzaW9uOiBcIjIuMFwiLFxuICAgIGV4dGVybmFsQ29udGV4dERlc2NyaXB0aW9uOiBcIllvdSdyZSB1c2luZyB0aGUgQlBNTiBEZXYgd2ViYXBwLCBzbyB0aGVyZSdzIG9ubHkgdHdvIHNpbXBsZSBleHRlcm5hbCBtb2RlbHMgdGhhdCBjYW4gYmUgaW5jbHVkZWQuXCIsXG4gICAgZXh0ZXJuYWxDb250ZXh0TmFtZTogXCJEZXYgd2ViYXBwXCIsXG4gICAgaXNzdWVUcmFja2VySHJlZjogXCJodHRwczovL2dpdGh1Yi5jb20vYXBhY2hlL2luY3ViYXRvci1raWUtaXNzdWVzL2lzc3Vlcy9uZXdcIlxuICB9XG59O1xuV2ViQXBwLnBhcmFtZXRlcnMgPSB7XG4gIC4uLldlYkFwcC5wYXJhbWV0ZXJzLFxuICBkb2NzOiB7XG4gICAgLi4uV2ViQXBwLnBhcmFtZXRlcnM/LmRvY3MsXG4gICAgc291cmNlOiB7XG4gICAgICBvcmlnaW5hbFNvdXJjZTogXCJ7XFxuICByZW5kZXI6IGFyZ3MgPT4gRGV2V2ViQXBwKGFyZ3MpLFxcbiAgYXJnczoge1xcbiAgICBtb2RlbDogZ2V0TWFyc2hhbGxlcihpbml0aWFsTW9kZWwsIHtcXG4gICAgICB1cGdyYWRlVG86IFxcXCJsYXRlc3RcXFwiXFxuICAgIH0pLnBhcnNlci5wYXJzZSgpLFxcbiAgICBvcmlnaW5hbFZlcnNpb246IFxcXCIyLjBcXFwiLFxcbiAgICBleHRlcm5hbENvbnRleHREZXNjcmlwdGlvbjogXFxcIllvdSdyZSB1c2luZyB0aGUgQlBNTiBEZXYgd2ViYXBwLCBzbyB0aGVyZSdzIG9ubHkgdHdvIHNpbXBsZSBleHRlcm5hbCBtb2RlbHMgdGhhdCBjYW4gYmUgaW5jbHVkZWQuXFxcIixcXG4gICAgZXh0ZXJuYWxDb250ZXh0TmFtZTogXFxcIkRldiB3ZWJhcHBcXFwiLFxcbiAgICBpc3N1ZVRyYWNrZXJIcmVmOiBcXFwiaHR0cHM6Ly9naXRodWIuY29tL2FwYWNoZS9pbmN1YmF0b3Ita2llLWlzc3Vlcy9pc3N1ZXMvbmV3XFxcIlxcbiAgfVxcbn1cIixcbiAgICAgIC4uLldlYkFwcC5wYXJhbWV0ZXJzPy5kb2NzPy5zb3VyY2VcbiAgICB9XG4gIH1cbn07Il0sIm5hbWVzIjpbInVzZUNhbGxiYWNrIiwidXNlUmVmIiwidXNlU3RhdGUiLCJGbGV4IiwiRmxleEl0ZW0iLCJQYWdlIiwiUGFnZVNlY3Rpb24iLCJnZXRNYXJzaGFsbGVyIiwibm9ybWFsaXplIiwiZ2VuZXJhdGVFbXB0eUJwbW4yMCIsIkJwbW5FZGl0b3JXcmFwcGVyIiwiaW5pdGlhbE1vZGVsIiwiRGV2V2ViQXBwIiwiYXJncyIsInN0YXRlIiwic2V0U3RhdGUiLCJpbml0aWFsQnBtbk1hcnNoYWxsZXIiLCJ1cGdyYWRlVG8iLCJtYXJzaGFsbGVyIiwic3RhY2siLCJwYXJzZXIiLCJwYXJzZSIsInBvaW50ZXIiLCJvbkRyb3AiLCJlIiwiY29uc29sZSIsImxvZyIsInByZXZlbnREZWZhdWx0IiwiZGF0YVRyYW5zZmVyIiwiaXRlbXMiLCJmb3JFYWNoIiwiaXRlbSIsImkiLCJraW5kIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJfcmVmIiwidGFyZ2V0IiwicmVzdWx0IiwicmVhZEFzVGV4dCIsImdldEFzRmlsZSIsIm9uRHJhZ092ZXIiLCJyZXNldCIsImN1cnJlbnRNb2RlbCIsImRvd25sb2FkUmVmIiwiZG93bmxvYWRBc1htbCIsImN1cnJlbnQiLCJmaWxlQmxvYiIsIkJsb2IiLCJidWlsZGVyIiwiYnVpbGQiLCJ0eXBlIiwiZG93bmxvYWQiLCJjcmVhdGVJZCIsImhyZWYiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJjbGljayIsImNvcHlBc1htbCIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsInVuZG8iLCJwcmV2IiwiTWF0aCIsIm1heCIsInJlZG8iLCJtaW4iLCJsZW5ndGgiLCJvbk1vZGVsQ2hhbmdlIiwibW9kZWwiLCJuZXdTdGFjayIsInNsaWNlIiwib25TZWxlY3RNb2RlbCIsIm5ld01vZGVsIiwib25SZXF1ZXN0VG9KdW1wVG9QYXRoIiwicGF0aCIsImFsZXJ0IiwiaXNVbmRvRW5hYmxlZCIsImlzUmVkb0VuYWJsZWQiLCJfanN4IiwiX0ZyYWdtZW50IiwiY2hpbGRyZW4iLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwiX2pzeHMiLCJ2YXJpYW50IiwiaXNGaWxsZWQiLCJwYWRkaW5nIiwiZGVmYXVsdCIsImp1c3RpZnlDb250ZW50Iiwic2hyaW5rIiwib25DbGljayIsImRpc2FibGVkIiwib3BhY2l0eSIsInJlZiIsImhhc092ZXJmbG93U2Nyb2xsIiwib3JpZ2luYWxWZXJzaW9uIiwiZXh0ZXJuYWxDb250ZXh0TmFtZSIsImV4dGVybmFsQ29udGV4dERlc2NyaXB0aW9uIiwiaXNzdWVUcmFja2VySHJlZiIsImNoYXJhY3RlcnMiLCJjaGFyYWN0ZXJzTGVuZ3RoIiwiY291bnRlciIsImNoYXJBdCIsImZsb29yIiwicmFuZG9tIiwibWV0YSIsInRpdGxlIiwiY29tcG9uZW50IiwiV2ViQXBwIiwicmVuZGVyIiwicGFyYW1ldGVycyIsImRvY3MiLCJfYSIsInNvdXJjZSIsIm9yaWdpbmFsU291cmNlIiwiX2MiLCJfYiIsIl9fbmFtZWRFeHBvcnRzT3JkZXIiXSwic291cmNlUm9vdCI6IiJ9