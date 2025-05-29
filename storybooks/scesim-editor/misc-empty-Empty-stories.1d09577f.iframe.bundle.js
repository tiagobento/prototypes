"use strict";
(self["webpackChunk_kie_tools_scesim_editor"] = self["webpackChunk_kie_tools_scesim_editor"] || []).push([["misc-empty-Empty-stories"],{

/***/ "./stories/misc/empty/Empty.stories.tsx":
/*!**********************************************!*\
  !*** ./stories/misc/empty/Empty.stories.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Empty: () => (/* binding */ Empty),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   emptyFileName: () => (/* binding */ emptyFileName)
/* harmony export */ });
/* harmony import */ var _kie_tools_scesim_marshaller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @kie-tools/scesim-marshaller */ "../scesim-marshaller/dist/index.js");
/* harmony import */ var _src_TestScenarioEditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../src/TestScenarioEditor */ "./src/TestScenarioEditor.tsx");
/* harmony import */ var _src_resources_EmptyScesimFile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../src/resources/EmptyScesimFile */ "./src/resources/EmptyScesimFile.ts");
/* harmony import */ var _scesimEditorStoriesWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../scesimEditorStoriesWrapper */ "./stories/scesimEditorStoriesWrapper.tsx");
/* harmony import */ var _examples_ExternalDmnModels__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../examples/ExternalDmnModels */ "./stories/examples/ExternalDmnModels.ts");
/* harmony import */ var _kie_tools_dmn_marshaller_dist_normalization_normalize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @kie-tools/dmn-marshaller/dist/normalization/normalize */ "../dmn-marshaller/dist/normalization/normalize.js");
/* harmony import */ var _kie_tools_dmn_marshaller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @kie-tools/dmn-marshaller */ "../dmn-marshaller/dist/index.js");
var _a, _b, _c;







const emptyFileName = "Untitled.scesim";
const meta = {
  title: "Misc/Empty",
  component: _src_TestScenarioEditor__WEBPACK_IMPORTED_MODULE_1__.TestScenarioEditor,
  includeStories: /^[A-Z]/
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (meta);
const marshaller = (0,_kie_tools_scesim_marshaller__WEBPACK_IMPORTED_MODULE_0__.getMarshaller)(_src_resources_EmptyScesimFile__WEBPACK_IMPORTED_MODULE_5__.EMPTY_ONE_EIGHT);
const currentModel = marshaller.parser.parse();
const dmnModel = {
  normalizedPosixPathRelativeToTheOpenFile: "empty.dmn",
  type: "dmn",
  model: (0,_kie_tools_dmn_marshaller_dist_normalization_normalize__WEBPACK_IMPORTED_MODULE_3__.normalize)((0,_kie_tools_dmn_marshaller__WEBPACK_IMPORTED_MODULE_4__.getMarshaller)(_examples_ExternalDmnModels__WEBPACK_IMPORTED_MODULE_6__.EMPTY !== null && _examples_ExternalDmnModels__WEBPACK_IMPORTED_MODULE_6__.EMPTY !== void 0 ? _examples_ExternalDmnModels__WEBPACK_IMPORTED_MODULE_6__.EMPTY : "", {
    upgradeTo: "latest"
  }).parser.parse()),
  svg: ""
};
const Empty = {
  render: args => (0,_scesimEditorStoriesWrapper__WEBPACK_IMPORTED_MODULE_2__.SceSimEditorWrapper)(args),
  args: {
    model: marshaller.parser.parse(),
    openFileNormalizedPosixPathRelativeToTheWorkspaceRoot: emptyFileName,
    externalModelsByNamespace: new Map([["https://kie.org/dmn/_14487CEE-1B30-453E-976D-C11ED911548F", dmnModel]]),
    xml: marshaller.builder.build(currentModel),
    onRequestExternalModelsAvailableToInclude: () => Promise.resolve(["empty.dmn"]),
    onRequestExternalModelByPath: () => Promise.resolve(dmnModel)
  }
};
Empty.parameters = {
  ...Empty.parameters,
  docs: {
    ...((_a = Empty.parameters) === null || _a === void 0 ? void 0 : _a.docs),
    source: {
      originalSource: "{\n  render: args => SceSimEditorWrapper(args),\n  args: {\n    model: marshaller.parser.parse(),\n    openFileNormalizedPosixPathRelativeToTheWorkspaceRoot: emptyFileName,\n    externalModelsByNamespace: new Map([[\"https://kie.org/dmn/_14487CEE-1B30-453E-976D-C11ED911548F\", dmnModel]]),\n    xml: marshaller.builder.build(currentModel),\n    onRequestExternalModelsAvailableToInclude: () => Promise.resolve([\"empty.dmn\"]),\n    onRequestExternalModelByPath: () => Promise.resolve(dmnModel)\n  }\n}",
      ...((_c = (_b = Empty.parameters) === null || _b === void 0 ? void 0 : _b.docs) === null || _c === void 0 ? void 0 : _c.source)
    }
  }
};
const __namedExportsOrder = ["emptyFileName", "Empty"];

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlzYy1lbXB0eS1FbXB0eS1zdG9yaWVzLjFkMDk1NzdmLmlmcmFtZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0I2RDtBQUNRO0FBQ0k7QUFDZ0M7QUFDaEQ7QUFDMEI7QUFDTDtBQUN2RSxNQUFNTyxhQUFhLEdBQUcsaUJBQWlCO0FBQzlDLE1BQU1DLElBQUksR0FBYTtFQUNyQkMsS0FBSyxFQUFFLFlBQVk7RUFDbkJDLFNBQVMsRUFBRVQsdUVBQWtCO0VBQzdCVSxjQUFjLEVBQUU7Q0FDakI7QUFDRCxpRUFBZUgsSUFBSSxFQUFDO0FBRXBCLE1BQU1JLFVBQVUsR0FBR1osMkVBQWEsQ0FBQ0UsMkVBQWUsQ0FBQztBQUNqRCxNQUFNVyxZQUFZLEdBQUdELFVBQVUsQ0FBQ0UsTUFBTSxDQUFDQyxLQUFLLEVBQUU7QUFDOUMsTUFBTUMsUUFBUSxHQUFHO0VBQ2ZDLHdDQUF3QyxFQUFFLFdBQVc7RUFDckRDLElBQUksRUFBRSxLQUFLO0VBQ1hDLEtBQUssRUFBRWQsaUdBQVMsQ0FBQ0Msd0VBQWdCLENBQUNGLDhEQUFLLGFBQUxBLDhEQUFLLGNBQUxBLDhEQUFLLEdBQUksRUFBRSxFQUFFO0lBQzdDZ0IsU0FBUyxFQUFFO0dBQ1osQ0FBQyxDQUFDTixNQUFNLENBQUNDLEtBQUssRUFBRSxDQUFDO0VBQ2xCTSxHQUFHLEVBQUU7Q0FDTjtBQUNNLE1BQU1DLEtBQUssR0FBVTtFQUMxQkMsTUFBTSxFQUFFQyxJQUFJLElBQUlyQixnRkFBbUIsQ0FBQ3FCLElBQUksQ0FBQztFQUN6Q0EsSUFBSSxFQUFFO0lBQ0pMLEtBQUssRUFBRVAsVUFBVSxDQUFDRSxNQUFNLENBQUNDLEtBQUssRUFBRTtJQUNoQ1UscURBQXFELEVBQUVsQixhQUFhO0lBQ3BFbUIseUJBQXlCLEVBQUUsSUFBSUMsR0FBRyxDQUFDLENBQUMsQ0FBQywyREFBMkQsRUFBRVgsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUM3R1ksR0FBRyxFQUFFaEIsVUFBVSxDQUFDaUIsT0FBTyxDQUFDQyxLQUFLLENBQUNqQixZQUFZLENBQUM7SUFDM0NrQix5Q0FBeUMsRUFBRUEsQ0FBQSxLQUFNQyxPQUFPLENBQUNDLE9BQU8sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQy9FQyw0QkFBNEIsRUFBRUEsQ0FBQSxLQUFNRixPQUFPLENBQUNDLE9BQU8sQ0FBQ2pCLFFBQVE7O0NBRS9EO0FBQ0RNLEtBQUssQ0FBQ2EsVUFBVSxHQUFHO0VBQ2pCLEdBQUdiLEtBQUssQ0FBQ2EsVUFBVTtFQUNuQkMsSUFBSSxFQUFFO0lBQ0osSUFBRyxDQUFBQyxFQUFBLEdBQUFmLEtBQUssQ0FBQ2EsVUFBVSxjQUFBRSxFQUFBLHVCQUFBQSxFQUFBLENBQUVELElBQUk7SUFDekJFLE1BQU0sRUFBRTtNQUNOQyxjQUFjLEVBQUUseWZBQXlmO01BQ3pnQixJQUFHLENBQUFDLEVBQUEsSUFBQUMsRUFBQSxHQUFBbkIsS0FBSyxDQUFDYSxVQUFVLGNBQUFNLEVBQUEsdUJBQUFBLEVBQUEsQ0FBRUwsSUFBSSxjQUFBSSxFQUFBLHVCQUFBQSxFQUFBLENBQUVGLE1BQU07OztDQUd0QztBQUFDLE1BQUFJLG1CQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGtpZS10b29scy9zY2VzaW0tZWRpdG9yLy4vc3Rvcmllcy9taXNjL2VtcHR5L0VtcHR5LnN0b3JpZXMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBMaWNlbnNlZCB0byB0aGUgQXBhY2hlIFNvZnR3YXJlIEZvdW5kYXRpb24gKEFTRikgdW5kZXIgb25lXG4gKiBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gIFNlZSB0aGUgTk9USUNFIGZpbGVcbiAqIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uXG4gKiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC4gIFRoZSBBU0YgbGljZW5zZXMgdGhpcyBmaWxlXG4gKiB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlXG4gKiBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2VcbiAqIHdpdGggdGhlIExpY2Vuc2UuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLFxuICogc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cbiAqIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXG4gKiBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGVcbiAqIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnNcbiAqIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB0eXBlIHsgTWV0YSwgU3RvcnlPYmogfSBmcm9tIFwiQHN0b3J5Ym9vay9yZWFjdFwiO1xuaW1wb3J0IHsgZ2V0TWFyc2hhbGxlciB9IGZyb20gXCJAa2llLXRvb2xzL3NjZXNpbS1tYXJzaGFsbGVyXCI7XG5pbXBvcnQgeyBUZXN0U2NlbmFyaW9FZGl0b3IgfSBmcm9tIFwiLi4vLi4vLi4vc3JjL1Rlc3RTY2VuYXJpb0VkaXRvclwiO1xuaW1wb3J0IHsgRU1QVFlfT05FX0VJR0hUIH0gZnJvbSBcIi4uLy4uLy4uL3NyYy9yZXNvdXJjZXMvRW1wdHlTY2VzaW1GaWxlXCI7XG5pbXBvcnQgeyBTY2VTaW1FZGl0b3JXcmFwcGVyLCBTdG9yeWJvb2tUZXN0U2NlbmFyaW9FZGl0b3JQcm9wcyB9IGZyb20gXCIuLi8uLi9zY2VzaW1FZGl0b3JTdG9yaWVzV3JhcHBlclwiO1xuaW1wb3J0IHsgRU1QVFkgfSBmcm9tIFwiLi4vLi4vZXhhbXBsZXMvRXh0ZXJuYWxEbW5Nb2RlbHNcIjtcbmltcG9ydCB7IG5vcm1hbGl6ZSB9IGZyb20gXCJAa2llLXRvb2xzL2Rtbi1tYXJzaGFsbGVyL2Rpc3Qvbm9ybWFsaXphdGlvbi9ub3JtYWxpemVcIjtcbmltcG9ydCB7IGdldE1hcnNoYWxsZXIgYXMgZ2V0RG1uTWFyc2hhbGxlciB9IGZyb20gXCJAa2llLXRvb2xzL2Rtbi1tYXJzaGFsbGVyXCI7XG5leHBvcnQgY29uc3QgZW1wdHlGaWxlTmFtZSA9IFwiVW50aXRsZWQuc2Nlc2ltXCI7XG5jb25zdCBtZXRhOiBNZXRhPHt9PiA9IHtcbiAgdGl0bGU6IFwiTWlzYy9FbXB0eVwiLFxuICBjb21wb25lbnQ6IFRlc3RTY2VuYXJpb0VkaXRvcixcbiAgaW5jbHVkZVN0b3JpZXM6IC9eW0EtWl0vXG59O1xuZXhwb3J0IGRlZmF1bHQgbWV0YTtcbnR5cGUgU3RvcnkgPSBTdG9yeU9iajxTdG9yeWJvb2tUZXN0U2NlbmFyaW9FZGl0b3JQcm9wcz47XG5jb25zdCBtYXJzaGFsbGVyID0gZ2V0TWFyc2hhbGxlcihFTVBUWV9PTkVfRUlHSFQpO1xuY29uc3QgY3VycmVudE1vZGVsID0gbWFyc2hhbGxlci5wYXJzZXIucGFyc2UoKTtcbmNvbnN0IGRtbk1vZGVsID0ge1xuICBub3JtYWxpemVkUG9zaXhQYXRoUmVsYXRpdmVUb1RoZU9wZW5GaWxlOiBcImVtcHR5LmRtblwiLFxuICB0eXBlOiBcImRtblwiLFxuICBtb2RlbDogbm9ybWFsaXplKGdldERtbk1hcnNoYWxsZXIoRU1QVFkgPz8gXCJcIiwge1xuICAgIHVwZ3JhZGVUbzogXCJsYXRlc3RcIlxuICB9KS5wYXJzZXIucGFyc2UoKSksXG4gIHN2ZzogXCJcIlxufTtcbmV4cG9ydCBjb25zdCBFbXB0eTogU3RvcnkgPSB7XG4gIHJlbmRlcjogYXJncyA9PiBTY2VTaW1FZGl0b3JXcmFwcGVyKGFyZ3MpLFxuICBhcmdzOiB7XG4gICAgbW9kZWw6IG1hcnNoYWxsZXIucGFyc2VyLnBhcnNlKCksXG4gICAgb3BlbkZpbGVOb3JtYWxpemVkUG9zaXhQYXRoUmVsYXRpdmVUb1RoZVdvcmtzcGFjZVJvb3Q6IGVtcHR5RmlsZU5hbWUsXG4gICAgZXh0ZXJuYWxNb2RlbHNCeU5hbWVzcGFjZTogbmV3IE1hcChbW1wiaHR0cHM6Ly9raWUub3JnL2Rtbi9fMTQ0ODdDRUUtMUIzMC00NTNFLTk3NkQtQzExRUQ5MTE1NDhGXCIsIGRtbk1vZGVsXV0pLFxuICAgIHhtbDogbWFyc2hhbGxlci5idWlsZGVyLmJ1aWxkKGN1cnJlbnRNb2RlbCksXG4gICAgb25SZXF1ZXN0RXh0ZXJuYWxNb2RlbHNBdmFpbGFibGVUb0luY2x1ZGU6ICgpID0+IFByb21pc2UucmVzb2x2ZShbXCJlbXB0eS5kbW5cIl0pLFxuICAgIG9uUmVxdWVzdEV4dGVybmFsTW9kZWxCeVBhdGg6ICgpID0+IFByb21pc2UucmVzb2x2ZShkbW5Nb2RlbClcbiAgfVxufTtcbkVtcHR5LnBhcmFtZXRlcnMgPSB7XG4gIC4uLkVtcHR5LnBhcmFtZXRlcnMsXG4gIGRvY3M6IHtcbiAgICAuLi5FbXB0eS5wYXJhbWV0ZXJzPy5kb2NzLFxuICAgIHNvdXJjZToge1xuICAgICAgb3JpZ2luYWxTb3VyY2U6IFwie1xcbiAgcmVuZGVyOiBhcmdzID0+IFNjZVNpbUVkaXRvcldyYXBwZXIoYXJncyksXFxuICBhcmdzOiB7XFxuICAgIG1vZGVsOiBtYXJzaGFsbGVyLnBhcnNlci5wYXJzZSgpLFxcbiAgICBvcGVuRmlsZU5vcm1hbGl6ZWRQb3NpeFBhdGhSZWxhdGl2ZVRvVGhlV29ya3NwYWNlUm9vdDogZW1wdHlGaWxlTmFtZSxcXG4gICAgZXh0ZXJuYWxNb2RlbHNCeU5hbWVzcGFjZTogbmV3IE1hcChbW1xcXCJodHRwczovL2tpZS5vcmcvZG1uL18xNDQ4N0NFRS0xQjMwLTQ1M0UtOTc2RC1DMTFFRDkxMTU0OEZcXFwiLCBkbW5Nb2RlbF1dKSxcXG4gICAgeG1sOiBtYXJzaGFsbGVyLmJ1aWxkZXIuYnVpbGQoY3VycmVudE1vZGVsKSxcXG4gICAgb25SZXF1ZXN0RXh0ZXJuYWxNb2RlbHNBdmFpbGFibGVUb0luY2x1ZGU6ICgpID0+IFByb21pc2UucmVzb2x2ZShbXFxcImVtcHR5LmRtblxcXCJdKSxcXG4gICAgb25SZXF1ZXN0RXh0ZXJuYWxNb2RlbEJ5UGF0aDogKCkgPT4gUHJvbWlzZS5yZXNvbHZlKGRtbk1vZGVsKVxcbiAgfVxcbn1cIixcbiAgICAgIC4uLkVtcHR5LnBhcmFtZXRlcnM/LmRvY3M/LnNvdXJjZVxuICAgIH1cbiAgfVxufTsiXSwibmFtZXMiOlsiZ2V0TWFyc2hhbGxlciIsIlRlc3RTY2VuYXJpb0VkaXRvciIsIkVNUFRZX09ORV9FSUdIVCIsIlNjZVNpbUVkaXRvcldyYXBwZXIiLCJFTVBUWSIsIm5vcm1hbGl6ZSIsImdldERtbk1hcnNoYWxsZXIiLCJlbXB0eUZpbGVOYW1lIiwibWV0YSIsInRpdGxlIiwiY29tcG9uZW50IiwiaW5jbHVkZVN0b3JpZXMiLCJtYXJzaGFsbGVyIiwiY3VycmVudE1vZGVsIiwicGFyc2VyIiwicGFyc2UiLCJkbW5Nb2RlbCIsIm5vcm1hbGl6ZWRQb3NpeFBhdGhSZWxhdGl2ZVRvVGhlT3BlbkZpbGUiLCJ0eXBlIiwibW9kZWwiLCJ1cGdyYWRlVG8iLCJzdmciLCJFbXB0eSIsInJlbmRlciIsImFyZ3MiLCJvcGVuRmlsZU5vcm1hbGl6ZWRQb3NpeFBhdGhSZWxhdGl2ZVRvVGhlV29ya3NwYWNlUm9vdCIsImV4dGVybmFsTW9kZWxzQnlOYW1lc3BhY2UiLCJNYXAiLCJ4bWwiLCJidWlsZGVyIiwiYnVpbGQiLCJvblJlcXVlc3RFeHRlcm5hbE1vZGVsc0F2YWlsYWJsZVRvSW5jbHVkZSIsIlByb21pc2UiLCJyZXNvbHZlIiwib25SZXF1ZXN0RXh0ZXJuYWxNb2RlbEJ5UGF0aCIsInBhcmFtZXRlcnMiLCJkb2NzIiwiX2EiLCJzb3VyY2UiLCJvcmlnaW5hbFNvdXJjZSIsIl9jIiwiX2IiLCJfX25hbWVkRXhwb3J0c09yZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==