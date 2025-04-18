"use strict";
(self["webpackChunk_kie_tools_bpmn_editor"] = self["webpackChunk_kie_tools_bpmn_editor"] || []).push([["dev-DevWebApp-stories"],{

/***/ "./stories/dev/DevWebApp.stories.tsx":
/*!*******************************************!*\
  !*** ./stories/dev/DevWebApp.stories.tsx ***!
  \*******************************************/
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2LURldldlYkFwcC1zdG9yaWVzLmE0OWRmMDQ5LmlmcmFtZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFCK0Q7QUFDVjtBQUN3QjtBQUNNO0FBQ1M7QUFDQTtBQUMxQjtBQUNGO0FBRWhFLE1BQU1XLFlBQVksR0FBR0YsOEVBQW1CLEVBQUU7QUFDMUMsU0FBU0csYUFBYUEsQ0FBQ0MsSUFBcUI7RUFDMUMsTUFBTSxDQUFDQyxLQUFLLEVBQUVDLFFBQVEsQ0FBQyxHQUFHYiwrQ0FBUSxDQUkvQixNQUFLO0lBQ04sTUFBTWMscUJBQXFCLEdBQUdULHlFQUFhLENBQUNJLFlBQVksRUFBRTtNQUN4RE0sU0FBUyxFQUFFO0tBQ1osQ0FBQztJQUNGLE9BQU87TUFDTEMsVUFBVSxFQUFFRixxQkFBcUI7TUFDakNHLEtBQUssRUFBRSxDQUFDWCw4RkFBUyxDQUFDUSxxQkFBcUIsQ0FBQ0ksTUFBTSxDQUFDQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO01BQ3hEQyxPQUFPLEVBQUU7S0FDVjtFQUNILENBQUMsQ0FBQztFQUNGLE1BQU1DLE1BQU0sR0FBR3ZCLGtEQUFXLENBQUV3QixDQUFrQixJQUFJO0lBQ2hEQyxPQUFPLENBQUNDLEdBQUcsQ0FBQywyREFBMkQsQ0FBQztJQUN4RUYsQ0FBQyxDQUFDRyxjQUFjLEVBQUU7SUFFbEIsSUFBSUgsQ0FBQyxDQUFDSSxZQUFZLENBQUNDLEtBQUssRUFBRTtNQUV4QixDQUFDLEdBQUdMLENBQUMsQ0FBQ0ksWUFBWSxDQUFDQyxLQUFLLENBQUMsQ0FBQ0MsT0FBTyxDQUFDLENBQUNDLElBQUksRUFBRUMsQ0FBQyxLQUFJO1FBQzVDLElBQUlELElBQUksQ0FBQ0UsSUFBSSxLQUFLLE1BQU0sRUFBRTtVQUN4QixNQUFNQyxNQUFNLEdBQUcsSUFBSUMsVUFBVSxFQUFFO1VBQy9CRCxNQUFNLENBQUNFLGdCQUFnQixDQUFDLE1BQU0sRUFBRUMsSUFBQSxJQUUzQjtZQUFBLElBRjRCO2NB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QyxFQUFBLEdBQUFSLFVBQVUsQ0FBQ0UsVUFBVSxjQUFBTSxFQUFBLHVCQUFBQSxFQUFBLENBQUVMLElBQUksY0FBQUksRUFBQSx1QkFBQUEsRUFBQSxDQUFFRixNQUFNOzs7Q0FHM0M7QUFBQyxNQUFBSSxtQkFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL0BraWUtdG9vbHMvYnBtbi1lZGl0b3IvLi9zdG9yaWVzL2Rldi9EZXZXZWJBcHAuc3Rvcmllcy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIExpY2Vuc2VkIHRvIHRoZSBBcGFjaGUgU29mdHdhcmUgRm91bmRhdGlvbiAoQVNGKSB1bmRlciBvbmVcbiAqIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiAgU2VlIHRoZSBOT1RJQ0UgZmlsZVxuICogZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb25cbiAqIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLiAgVGhlIEFTRiBsaWNlbnNlcyB0aGlzIGZpbGVcbiAqIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGVcbiAqIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuICogd2l0aCB0aGUgTGljZW5zZS4gIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsXG4gKiBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxuICogXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcbiAqIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZVxuICogc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9uc1xuICogdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdHlwZSB7IE1ldGEsIFN0b3J5T2JqIH0gZnJvbSBcIkBzdG9yeWJvb2svcmVhY3RcIjtcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VNZW1vLCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgXCJAcGF0dGVybmZseS9yZWFjdC1jb3JlL2Rpc3Qvc3R5bGVzL2Jhc2UuY3NzXCI7XG5pbXBvcnQgeyBGbGV4LCBGbGV4SXRlbSB9IGZyb20gXCJAcGF0dGVybmZseS9yZWFjdC1jb3JlL2Rpc3QvanMvbGF5b3V0cy9GbGV4XCI7XG5pbXBvcnQgeyBQYWdlLCBQYWdlU2VjdGlvbiB9IGZyb20gXCJAcGF0dGVybmZseS9yZWFjdC1jb3JlL2Rpc3QvanMvY29tcG9uZW50cy9QYWdlXCI7XG5pbXBvcnQgeyBCcG1uTGF0ZXN0TW9kZWwsIGdldE1hcnNoYWxsZXIsIEJwbW5NYXJzaGFsbGVyIH0gZnJvbSBcIkBraWUtdG9vbHMvYnBtbi1tYXJzaGFsbGVyXCI7XG5pbXBvcnQgeyBOb3JtYWxpemVkLCBub3JtYWxpemUgfSBmcm9tIFwiQGtpZS10b29scy9icG1uLWVkaXRvci9kaXN0L25vcm1hbGl6YXRpb24vbm9ybWFsaXplXCI7XG5pbXBvcnQgeyBnZW5lcmF0ZUVtcHR5QnBtbjIwIH0gZnJvbSBcIi4uL21pc2MvZW1wdHkvRW1wdHkuc3Rvcmllc1wiO1xuaW1wb3J0IHsgQnBtbkVkaXRvcldyYXBwZXIgfSBmcm9tIFwiLi4vYnBtbkVkaXRvclN0b3JpZXNXcmFwcGVyXCI7XG5pbXBvcnQgeyBCcG1uRWRpdG9yUHJvcHMsIE9uQnBtbk1vZGVsQ2hhbmdlLCBPblJlcXVlc3RUb0p1bXBUb1BhdGggfSBmcm9tIFwiLi4vLi4vc3JjL0JwbW5FZGl0b3JcIjtcbmNvbnN0IGluaXRpYWxNb2RlbCA9IGdlbmVyYXRlRW1wdHlCcG1uMjAoKTtcbmZ1bmN0aW9uIERldlBsYXlncm91bmQoYXJnczogQnBtbkVkaXRvclByb3BzKSB7XG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGU8e1xuICAgIG1hcnNoYWxsZXI6IEJwbW5NYXJzaGFsbGVyO1xuICAgIHN0YWNrOiBOb3JtYWxpemVkPEJwbW5MYXRlc3RNb2RlbD5bXTtcbiAgICBwb2ludGVyOiBudW1iZXI7XG4gIH0+KCgpID0+IHtcbiAgICBjb25zdCBpbml0aWFsQnBtbk1hcnNoYWxsZXIgPSBnZXRNYXJzaGFsbGVyKGluaXRpYWxNb2RlbCwge1xuICAgICAgdXBncmFkZVRvOiBcImxhdGVzdFwiXG4gICAgfSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1hcnNoYWxsZXI6IGluaXRpYWxCcG1uTWFyc2hhbGxlcixcbiAgICAgIHN0YWNrOiBbbm9ybWFsaXplKGluaXRpYWxCcG1uTWFyc2hhbGxlci5wYXJzZXIucGFyc2UoKSldLFxuICAgICAgcG9pbnRlcjogMFxuICAgIH07XG4gIH0pO1xuICBjb25zdCBvbkRyb3AgPSB1c2VDYWxsYmFjaygoZTogUmVhY3QuRHJhZ0V2ZW50KSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJCUE1OIEVkaXRvciA6OiBQbGF5Z3JvdW5kIDo6IEZpbGUocykgZHJvcHBlZCEgT3BlbmluZyBpdC5cIik7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAvLyBOZWNlc3NhcnkgdG8gZGlzYWJsZSB0aGUgYnJvd3NlcidzIGRlZmF1bHQgJ29uRHJvcCcgaGFuZGxpbmcuXG5cbiAgICBpZiAoZS5kYXRhVHJhbnNmZXIuaXRlbXMpIHtcbiAgICAgIC8vIFVzZSBEYXRhVHJhbnNmZXJJdGVtTGlzdCBpbnRlcmZhY2UgdG8gYWNjZXNzIHRoZSBmaWxlKHMpXG4gICAgICBbLi4uZS5kYXRhVHJhbnNmZXIuaXRlbXNdLmZvckVhY2goKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgaWYgKGl0ZW0ua2luZCA9PT0gXCJmaWxlXCIpIHtcbiAgICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICAgIHJlYWRlci5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoe1xuICAgICAgICAgICAgdGFyZ2V0XG4gICAgICAgICAgfSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWFyc2hhbGxlciA9IGdldE1hcnNoYWxsZXIodGFyZ2V0Py5yZXN1bHQgYXMgc3RyaW5nLCB7XG4gICAgICAgICAgICAgIHVwZ3JhZGVUbzogXCJsYXRlc3RcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIG1hcnNoYWxsZXIsXG4gICAgICAgICAgICAgIHN0YWNrOiBbbm9ybWFsaXplKG1hcnNoYWxsZXIucGFyc2VyLnBhcnNlKCkpXSxcbiAgICAgICAgICAgICAgcG9pbnRlcjogMFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmVhZGVyLnJlYWRBc1RleHQoaXRlbS5nZXRBc0ZpbGUoKSBhcyBhbnkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIFtdKTtcbiAgY29uc3Qgb25EcmFnT3ZlciA9IHVzZUNhbGxiYWNrKChlOiBSZWFjdC5EcmFnRXZlbnQpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7IC8vIE5lY2Vzc2FyeSB0byBkaXNhYmxlIHRoZSBicm93c2VyJ3MgZGVmYXVsdCAnb25Ecm9wJyBoYW5kbGluZy5cbiAgfSwgW10pO1xuICBjb25zdCByZXNldCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBjb25zdCBtYXJzaGFsbGVyID0gZ2V0TWFyc2hhbGxlcihnZW5lcmF0ZUVtcHR5QnBtbjIwKCksIHtcbiAgICAgIHVwZ3JhZGVUbzogXCJsYXRlc3RcIlxuICAgIH0pO1xuICAgIHNldFN0YXRlKHtcbiAgICAgIG1hcnNoYWxsZXIsXG4gICAgICBzdGFjazogW25vcm1hbGl6ZShtYXJzaGFsbGVyLnBhcnNlci5wYXJzZSgpKV0sXG4gICAgICBwb2ludGVyOiAwXG4gICAgfSk7XG4gIH0sIFtdKTtcbiAgY29uc3QgY3VycmVudE1vZGVsID0gc3RhdGUuc3RhY2tbc3RhdGUucG9pbnRlcl07XG4gIGNvbnN0IGRvd25sb2FkUmVmID0gdXNlUmVmPEhUTUxBbmNob3JFbGVtZW50PihudWxsKTtcbiAgY29uc3QgZG93bmxvYWRBc1htbCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBpZiAoZG93bmxvYWRSZWYuY3VycmVudCkge1xuICAgICAgY29uc3QgZmlsZUJsb2IgPSBuZXcgQmxvYihbc3RhdGUubWFyc2hhbGxlci5idWlsZGVyLmJ1aWxkKGN1cnJlbnRNb2RlbCldLCB7XG4gICAgICAgIHR5cGU6IFwidGV4dC94bWxcIlxuICAgICAgfSk7XG4gICAgICBkb3dubG9hZFJlZi5jdXJyZW50LmRvd25sb2FkID0gYGJwbW4tJHtjcmVhdGVJZCgxMCl9LmJwbW5gO1xuICAgICAgZG93bmxvYWRSZWYuY3VycmVudC5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlQmxvYik7XG4gICAgICBkb3dubG9hZFJlZi5jdXJyZW50LmNsaWNrKCk7XG4gICAgfVxuICB9LCBbY3VycmVudE1vZGVsLCBzdGF0ZS5tYXJzaGFsbGVyLmJ1aWxkZXJdKTtcbiAgY29uc3QgY29weUFzWG1sID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KHN0YXRlLm1hcnNoYWxsZXIuYnVpbGRlci5idWlsZChjdXJyZW50TW9kZWwpKTtcbiAgfSwgW2N1cnJlbnRNb2RlbCwgc3RhdGUubWFyc2hhbGxlci5idWlsZGVyXSk7XG4gIGNvbnN0IHVuZG8gPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0U3RhdGUocHJldiA9PiAoe1xuICAgICAgLi4ucHJldixcbiAgICAgIHBvaW50ZXI6IE1hdGgubWF4KDAsIHByZXYucG9pbnRlciAtIDEpXG4gICAgfSkpO1xuICB9LCBbXSk7XG4gIGNvbnN0IHJlZG8gPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0U3RhdGUocHJldiA9PiAoe1xuICAgICAgLi4ucHJldixcbiAgICAgIHBvaW50ZXI6IE1hdGgubWluKHByZXYuc3RhY2subGVuZ3RoIC0gMSwgcHJldi5wb2ludGVyICsgMSlcbiAgICB9KSk7XG4gIH0sIFtdKTtcbiAgY29uc3Qgb25Nb2RlbENoYW5nZSA9IHVzZUNhbGxiYWNrPE9uQnBtbk1vZGVsQ2hhbmdlPihtb2RlbCA9PiB7XG4gICAgc2V0U3RhdGUocHJldiA9PiB7XG4gICAgICBjb25zdCBuZXdTdGFjayA9IHByZXYuc3RhY2suc2xpY2UoMCwgcHJldi5wb2ludGVyICsgMSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5wcmV2LFxuICAgICAgICBzdGFjazogWy4uLm5ld1N0YWNrLCBtb2RlbF0sXG4gICAgICAgIHBvaW50ZXI6IG5ld1N0YWNrLmxlbmd0aFxuICAgICAgfTtcbiAgICB9KTtcbiAgfSwgW10pO1xuICBjb25zdCBvblNlbGVjdE1vZGVsID0gdXNlQ2FsbGJhY2sobmV3TW9kZWwgPT4ge1xuICAgIG9uTW9kZWxDaGFuZ2Uobm9ybWFsaXplKGdldE1hcnNoYWxsZXIobmV3TW9kZWwsIHtcbiAgICAgIHVwZ3JhZGVUbzogXCJsYXRlc3RcIlxuICAgIH0pLnBhcnNlci5wYXJzZSgpKSk7XG4gIH0sIFtvbk1vZGVsQ2hhbmdlXSk7XG4gIGNvbnN0IG9uUmVxdWVzdFRvSnVtcFRvUGF0aCA9IHVzZUNhbGxiYWNrPE9uUmVxdWVzdFRvSnVtcFRvUGF0aD4ocGF0aCA9PiB7XG4gICAgYWxlcnQoXCJKdW1waW5nIHRvIGZpbGUgXCIgKyBwYXRoKTtcbiAgfSwgW10pO1xuICBjb25zdCBpc1VuZG9FbmFibGVkID0gc3RhdGUucG9pbnRlciA+IDA7XG4gIGNvbnN0IGlzUmVkb0VuYWJsZWQgPSBzdGF0ZS5wb2ludGVyICE9PSBzdGF0ZS5zdGFjay5sZW5ndGggLSAxO1xuICByZXR1cm4gPD5cbiAgICAgIHtjdXJyZW50TW9kZWwgJiYgPGRpdiBzdHlsZT17e1xuICAgICAgd2lkdGg6IFwiMTAwdndcIixcbiAgICAgIGhlaWdodDogXCIxMDB2aFwiXG4gICAgfX0+XG4gICAgICAgICAgPFBhZ2Ugb25EcmFnT3Zlcj17b25EcmFnT3Zlcn0gb25Ecm9wPXtvbkRyb3B9PlxuICAgICAgICAgICAgPFBhZ2VTZWN0aW9uIHZhcmlhbnQ9e1wibGlnaHRcIn0gaXNGaWxsZWQ9e2ZhbHNlfSBwYWRkaW5nPXt7XG4gICAgICAgICAgZGVmYXVsdDogXCJwYWRkaW5nXCJcbiAgICAgICAgfX0+XG4gICAgICAgICAgICAgIDxGbGV4IGp1c3RpZnlDb250ZW50PXt7XG4gICAgICAgICAgICBkZWZhdWx0OiBcImp1c3RpZnlDb250ZW50U3BhY2VCZXR3ZWVuXCJcbiAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICA8RmxleEl0ZW0+XG4gICAgICAgICAgICAgICAgICA8aDU+KERyYWcgJiBkcm9wIGEgZmlsZSBhbnl3aGVyZSB0byBvcGVuIGl0KTwvaDU+XG4gICAgICAgICAgICAgICAgPC9GbGV4SXRlbT5cbiAgICAgICAgICAgICAgICA8RmxleEl0ZW0gc2hyaW5rPXt7XG4gICAgICAgICAgICAgIGRlZmF1bHQ6IFwic2hyaW5rXCJcbiAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgJm5ic3A7ICZuYnNwOyB8ICZuYnNwOyAmbmJzcDtcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gZGlzYWJsZWQ9eyFpc1VuZG9FbmFibGVkfSBzdHlsZT17e1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IGlzVW5kb0VuYWJsZWQgPyAxIDogMC41XG4gICAgICAgICAgICAgIH19IG9uQ2xpY2s9e3VuZG99PlxuICAgICAgICAgICAgICAgICAgICB7YFVuZG8gKCR7c3RhdGUucG9pbnRlcn0pYH1cbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgJm5ic3A7ICZuYnNwO1xuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBkaXNhYmxlZD17IWlzUmVkb0VuYWJsZWR9IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogaXNSZWRvRW5hYmxlZCA/IDEgOiAwLjVcbiAgICAgICAgICAgICAgfX0gb25DbGljaz17cmVkb30+XG4gICAgICAgICAgICAgICAgICAgIHtgUmVkbyAoJHtzdGF0ZS5zdGFjay5sZW5ndGggLSAxIC0gc3RhdGUucG9pbnRlcn0pYH1cbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgJm5ic3A7ICZuYnNwOyB8ICZuYnNwOyAmbmJzcDtcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17cmVzZXR9PlJlc2V0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAmbmJzcDsgJm5ic3A7XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2NvcHlBc1htbH0+Q29weSBYTUw8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICZuYnNwOyAmbmJzcDtcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17ZG93bmxvYWRBc1htbH0+RG93bmxvYWQgYXMgLmJwbW48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L0ZsZXhJdGVtPlxuICAgICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICAgIDxhIHJlZj17ZG93bmxvYWRSZWZ9IC8+XG4gICAgICAgICAgICA8L1BhZ2VTZWN0aW9uPlxuICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgICA8UGFnZVNlY3Rpb24gdmFyaWFudD17XCJsaWdodFwifSBpc0ZpbGxlZD17dHJ1ZX0gaGFzT3ZlcmZsb3dTY3JvbGw9e3RydWV9IGFyaWEtbGFiZWw9e1wiZWRpdG9yXCJ9IHBhZGRpbmc9e3tcbiAgICAgICAgICBkZWZhdWx0OiBcIm5vUGFkZGluZ1wiXG4gICAgICAgIH19PlxuICAgICAgICAgICAgICB7QnBtbkVkaXRvcldyYXBwZXIoe1xuICAgICAgICAgICAgbW9kZWw6IGN1cnJlbnRNb2RlbCxcbiAgICAgICAgICAgIG9yaWdpbmFsVmVyc2lvbjogYXJncy5vcmlnaW5hbFZlcnNpb24sXG4gICAgICAgICAgICBvbk1vZGVsQ2hhbmdlLFxuICAgICAgICAgICAgZXh0ZXJuYWxDb250ZXh0TmFtZTogYXJncy5leHRlcm5hbENvbnRleHROYW1lLFxuICAgICAgICAgICAgZXh0ZXJuYWxDb250ZXh0RGVzY3JpcHRpb246IGFyZ3MuZXh0ZXJuYWxDb250ZXh0RGVzY3JpcHRpb24sXG4gICAgICAgICAgICBpc3N1ZVRyYWNrZXJIcmVmOiBhcmdzLmlzc3VlVHJhY2tlckhyZWYsXG4gICAgICAgICAgICBvblJlcXVlc3RUb0p1bXBUb1BhdGhcbiAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvUGFnZVNlY3Rpb24+XG4gICAgICAgICAgPC9QYWdlPlxuICAgICAgICA8L2Rpdj59XG4gICAgPC8+O1xufVxuZnVuY3Rpb24gY3JlYXRlSWQobGVuZ3RoOiBudW1iZXIpIHtcbiAgbGV0IHJlc3VsdCA9IFwiXCI7XG4gIGNvbnN0IGNoYXJhY3RlcnMgPSBcImFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OVwiO1xuICBjb25zdCBjaGFyYWN0ZXJzTGVuZ3RoID0gY2hhcmFjdGVycy5sZW5ndGg7XG4gIGxldCBjb3VudGVyID0gMDtcbiAgd2hpbGUgKGNvdW50ZXIgPCBsZW5ndGgpIHtcbiAgICByZXN1bHQgKz0gY2hhcmFjdGVycy5jaGFyQXQoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2hhcmFjdGVyc0xlbmd0aCkpO1xuICAgIGNvdW50ZXIgKz0gMTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vLyBNb3JlIG9uIGhvdyB0byBzZXQgdXAgc3RvcmllcyBhdDogaHR0cHM6Ly9zdG9yeWJvb2suanMub3JnL2RvY3Mvd3JpdGluZy1zdG9yaWVzI2RlZmF1bHQtZXhwb3J0XG5jb25zdCBtZXRhOiBNZXRhPHR5cGVvZiBEZXZQbGF5Z3JvdW5kPiA9IHtcbiAgdGl0bGU6IFwiRGV2L1BsYXlncm91bmRcIixcbiAgY29tcG9uZW50OiBEZXZQbGF5Z3JvdW5kXG59O1xuZXhwb3J0IGRlZmF1bHQgbWV0YTtcbnR5cGUgU3RvcnkgPSBTdG9yeU9iajx0eXBlb2YgRGV2UGxheWdyb3VuZD47XG5cbi8vIE1vcmUgb24gd3JpdGluZyBzdG9yaWVzIHdpdGggYXJnczogaHR0cHM6Ly9zdG9yeWJvb2suanMub3JnL2RvY3Mvd3JpdGluZy1zdG9yaWVzL2FyZ3NcbmV4cG9ydCBjb25zdCBQbGF5Z3JvdW5kOiBTdG9yeSA9IHtcbiAgcmVuZGVyOiBhcmdzID0+IERldlBsYXlncm91bmQoYXJncyksXG4gIGFyZ3M6IHtcbiAgICBtb2RlbDogZ2V0TWFyc2hhbGxlcihpbml0aWFsTW9kZWwsIHtcbiAgICAgIHVwZ3JhZGVUbzogXCJsYXRlc3RcIlxuICAgIH0pLnBhcnNlci5wYXJzZSgpLFxuICAgIG9yaWdpbmFsVmVyc2lvbjogXCIyLjBcIixcbiAgICBleHRlcm5hbENvbnRleHREZXNjcmlwdGlvbjogXCJZb3UncmUgdXNpbmcgdGhlIEJQTU4gRWRpdG9yIFBsYXlncm91bmQuXCIsXG4gICAgZXh0ZXJuYWxDb250ZXh0TmFtZTogXCJBcGFjaGUgS0lFIDo6IEJQTU4gRWRpdG9yIDo6IFN0b3J5Ym9vayA6OiBQbGF5Z3JvdW5kXCIsXG4gICAgaXNzdWVUcmFja2VySHJlZjogXCJodHRwczovL2dpdGh1Yi5jb20vYXBhY2hlL2luY3ViYXRvci1raWUtaXNzdWVzL2lzc3Vlcy9uZXdcIlxuICB9XG59O1xuUGxheWdyb3VuZC5wYXJhbWV0ZXJzID0ge1xuICAuLi5QbGF5Z3JvdW5kLnBhcmFtZXRlcnMsXG4gIGRvY3M6IHtcbiAgICAuLi5QbGF5Z3JvdW5kLnBhcmFtZXRlcnM/LmRvY3MsXG4gICAgc291cmNlOiB7XG4gICAgICBvcmlnaW5hbFNvdXJjZTogXCJ7XFxuICByZW5kZXI6IGFyZ3MgPT4gRGV2UGxheWdyb3VuZChhcmdzKSxcXG4gIGFyZ3M6IHtcXG4gICAgbW9kZWw6IGdldE1hcnNoYWxsZXIoaW5pdGlhbE1vZGVsLCB7XFxuICAgICAgdXBncmFkZVRvOiBcXFwibGF0ZXN0XFxcIlxcbiAgICB9KS5wYXJzZXIucGFyc2UoKSxcXG4gICAgb3JpZ2luYWxWZXJzaW9uOiBcXFwiMi4wXFxcIixcXG4gICAgZXh0ZXJuYWxDb250ZXh0RGVzY3JpcHRpb246IFxcXCJZb3UncmUgdXNpbmcgdGhlIEJQTU4gRWRpdG9yIFBsYXlncm91bmQuXFxcIixcXG4gICAgZXh0ZXJuYWxDb250ZXh0TmFtZTogXFxcIkFwYWNoZSBLSUUgOjogQlBNTiBFZGl0b3IgOjogU3Rvcnlib29rIDo6IFBsYXlncm91bmRcXFwiLFxcbiAgICBpc3N1ZVRyYWNrZXJIcmVmOiBcXFwiaHR0cHM6Ly9naXRodWIuY29tL2FwYWNoZS9pbmN1YmF0b3Ita2llLWlzc3Vlcy9pc3N1ZXMvbmV3XFxcIlxcbiAgfVxcbn1cIixcbiAgICAgIC4uLlBsYXlncm91bmQucGFyYW1ldGVycz8uZG9jcz8uc291cmNlXG4gICAgfVxuICB9XG59OyJdLCJuYW1lcyI6WyJ1c2VDYWxsYmFjayIsInVzZVJlZiIsInVzZVN0YXRlIiwiRmxleCIsIkZsZXhJdGVtIiwiUGFnZSIsIlBhZ2VTZWN0aW9uIiwiZ2V0TWFyc2hhbGxlciIsIm5vcm1hbGl6ZSIsImdlbmVyYXRlRW1wdHlCcG1uMjAiLCJCcG1uRWRpdG9yV3JhcHBlciIsImluaXRpYWxNb2RlbCIsIkRldlBsYXlncm91bmQiLCJhcmdzIiwic3RhdGUiLCJzZXRTdGF0ZSIsImluaXRpYWxCcG1uTWFyc2hhbGxlciIsInVwZ3JhZGVUbyIsIm1hcnNoYWxsZXIiLCJzdGFjayIsInBhcnNlciIsInBhcnNlIiwicG9pbnRlciIsIm9uRHJvcCIsImUiLCJjb25zb2xlIiwibG9nIiwicHJldmVudERlZmF1bHQiLCJkYXRhVHJhbnNmZXIiLCJpdGVtcyIsImZvckVhY2giLCJpdGVtIiwiaSIsImtpbmQiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9yZWYiLCJ0YXJnZXQiLCJyZXN1bHQiLCJyZWFkQXNUZXh0IiwiZ2V0QXNGaWxlIiwib25EcmFnT3ZlciIsInJlc2V0IiwiY3VycmVudE1vZGVsIiwiZG93bmxvYWRSZWYiLCJkb3dubG9hZEFzWG1sIiwiY3VycmVudCIsImZpbGVCbG9iIiwiQmxvYiIsImJ1aWxkZXIiLCJidWlsZCIsInR5cGUiLCJkb3dubG9hZCIsImNyZWF0ZUlkIiwiaHJlZiIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImNsaWNrIiwiY29weUFzWG1sIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwidW5kbyIsInByZXYiLCJNYXRoIiwibWF4IiwicmVkbyIsIm1pbiIsImxlbmd0aCIsIm9uTW9kZWxDaGFuZ2UiLCJtb2RlbCIsIm5ld1N0YWNrIiwic2xpY2UiLCJvblNlbGVjdE1vZGVsIiwibmV3TW9kZWwiLCJvblJlcXVlc3RUb0p1bXBUb1BhdGgiLCJwYXRoIiwiYWxlcnQiLCJpc1VuZG9FbmFibGVkIiwiaXNSZWRvRW5hYmxlZCIsIl9qc3giLCJfRnJhZ21lbnQiLCJjaGlsZHJlbiIsInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJfanN4cyIsInZhcmlhbnQiLCJpc0ZpbGxlZCIsInBhZGRpbmciLCJkZWZhdWx0IiwianVzdGlmeUNvbnRlbnQiLCJzaHJpbmsiLCJkaXNhYmxlZCIsIm9wYWNpdHkiLCJvbkNsaWNrIiwicmVmIiwiaGFzT3ZlcmZsb3dTY3JvbGwiLCJvcmlnaW5hbFZlcnNpb24iLCJleHRlcm5hbENvbnRleHROYW1lIiwiZXh0ZXJuYWxDb250ZXh0RGVzY3JpcHRpb24iLCJpc3N1ZVRyYWNrZXJIcmVmIiwiY2hhcmFjdGVycyIsImNoYXJhY3RlcnNMZW5ndGgiLCJjb3VudGVyIiwiY2hhckF0IiwiZmxvb3IiLCJyYW5kb20iLCJtZXRhIiwidGl0bGUiLCJjb21wb25lbnQiLCJQbGF5Z3JvdW5kIiwicmVuZGVyIiwicGFyYW1ldGVycyIsImRvY3MiLCJfYSIsInNvdXJjZSIsIm9yaWdpbmFsU291cmNlIiwiX2MiLCJfYiIsIl9fbmFtZWRFeHBvcnRzT3JkZXIiXSwic291cmNlUm9vdCI6IiJ9