"use strict";
(self["webpackChunk_kie_tools_dmn_editor"] = self["webpackChunk_kie_tools_dmn_editor"] || []).push([["misc-emptyWithAvailableExternalModels-EmptyWithAvailableExternalModels-stories"],{

/***/ "../pmml-editor-marshaller/dist/index.js":
/*!***********************************************!*\
  !*** ../pmml-editor-marshaller/dist/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   XML2PMML: () => (/* reexport safe */ _marshaller__WEBPACK_IMPORTED_MODULE_1__.XML2PMML)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "../pmml-editor-marshaller/dist/api/index.js");
/* harmony import */ var _marshaller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./marshaller */ "../pmml-editor-marshaller/dist/marshaller/index.js");



/***/ }),

/***/ "./stories/misc/emptyWithAvailableExternalModels/EmptyWithAvailableExternalModels.stories.tsx":
/*!****************************************************************************************************!*\
  !*** ./stories/misc/emptyWithAvailableExternalModels/EmptyWithAvailableExternalModels.stories.tsx ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmptyWithAvailableExternalModels: () => (/* binding */ EmptyWithAvailableExternalModels),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _kie_tools_dmn_marshaller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @kie-tools/dmn-marshaller */ "../dmn-marshaller/dist/index.js");
/* harmony import */ var _kie_tools_dmn_editor_dist_DmnEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @kie-tools/dmn-editor/dist/DmnEditor */ "./dist/DmnEditor.js");
/* harmony import */ var _kie_tools_dmn_marshaller_dist_normalization_normalize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @kie-tools/dmn-marshaller/dist/normalization/normalize */ "../dmn-marshaller/dist/normalization/normalize.js");
/* harmony import */ var _dmnEditorStoriesWrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../dmnEditorStoriesWrapper */ "./stories/dmnEditorStoriesWrapper.tsx");
/* harmony import */ var _availableModelsToInclude__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./availableModelsToInclude */ "./stories/misc/emptyWithAvailableExternalModels/availableModelsToInclude.ts");
/* harmony import */ var _reference_models_models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../reference/models/models */ "./stories/reference/models/models.ts");
var _a, _b, _c;








function EmptyStoryWithIncludedModels(args) {
  const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(() => {
    const initialDmnMarshaller = (0,_kie_tools_dmn_marshaller__WEBPACK_IMPORTED_MODULE_2__.getMarshaller)(_reference_models_models__WEBPACK_IMPORTED_MODULE_7__.REFERENCE_MODELS.empty.raw, {
      upgradeTo: "latest"
    });
    return {
      marshaller: initialDmnMarshaller,
      stack: [(0,_kie_tools_dmn_marshaller_dist_normalization_normalize__WEBPACK_IMPORTED_MODULE_4__.normalize)(initialDmnMarshaller.parser.parse())],
      pointer: 0
    };
  });
  const currentModel = state.stack[state.pointer];
  const externalModelsByNamespace = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    var _a;
    return ((_a = currentModel.definitions.import) !== null && _a !== void 0 ? _a : []).reduce((acc, i) => {
      acc[i["@_namespace"]] = _availableModelsToInclude__WEBPACK_IMPORTED_MODULE_6__.modelsByNamespace[i["@_namespace"]];
      return acc;
    }, {});
  }, [currentModel.definitions.import]);
  const onRequestExternalModelByPath = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async path => {
    var _a;
    return (_a = _availableModelsToInclude__WEBPACK_IMPORTED_MODULE_6__.availableModelsByPath[path]) !== null && _a !== void 0 ? _a : null;
  }, []);
  const onRequestExternalModelsAvailableToInclude = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async () => {
    return Object.keys(_availableModelsToInclude__WEBPACK_IMPORTED_MODULE_6__.availableModelsByPath);
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
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: (0,_dmnEditorStoriesWrapper__WEBPACK_IMPORTED_MODULE_5__.DmnEditorWrapper)({
      model: currentModel,
      originalVersion: args.originalVersion,
      onModelChange,
      onRequestExternalModelByPath,
      onRequestExternalModelsAvailableToInclude,
      externalModelsByNamespace,
      externalContextName: args.externalContextName,
      externalContextDescription: args.externalContextDescription,
      validationMessages: args.validationMessages,
      evaluationResultsByNodeId: args.evaluationResultsByNodeId,
      issueTrackerHref: args.issueTrackerHref
    })
  });
}
const meta = {
  title: "Misc/EmptyWithAvailableExternalModels",
  component: _kie_tools_dmn_editor_dist_DmnEditor__WEBPACK_IMPORTED_MODULE_3__.DmnEditor,
  includeStories: /^[A-Z]/
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (meta);
const EmptyWithAvailableExternalModels = {
  render: args => EmptyStoryWithIncludedModels(args),
  args: {
    model: _reference_models_models__WEBPACK_IMPORTED_MODULE_7__.REFERENCE_MODELS.empty.model,
    originalVersion: "1.5",
    evaluationResultsByNodeId: new Map(),
    externalContextDescription: "The Storybook for the DMN Editor",
    externalContextName: "Apache KIE :: DMN Editor :: Storybook",
    externalModelsByNamespace: {},
    issueTrackerHref: "",
    validationMessages: {}
  }
};
EmptyWithAvailableExternalModels.parameters = {
  ...EmptyWithAvailableExternalModels.parameters,
  docs: {
    ...((_a = EmptyWithAvailableExternalModels.parameters) === null || _a === void 0 ? void 0 : _a.docs),
    source: {
      originalSource: "{\n  render: args => EmptyStoryWithIncludedModels(args),\n  args: {\n    model: REFERENCE_MODELS.empty.model,\n    originalVersion: \"1.5\",\n    evaluationResultsByNodeId: new Map(),\n    externalContextDescription: \"The Storybook for the DMN Editor\",\n    externalContextName: \"Apache KIE :: DMN Editor :: Storybook\",\n    externalModelsByNamespace: {},\n    issueTrackerHref: \"\",\n    validationMessages: {}\n  }\n}",
      ...((_c = (_b = EmptyWithAvailableExternalModels.parameters) === null || _b === void 0 ? void 0 : _b.docs) === null || _c === void 0 ? void 0 : _c.source)
    }
  }
};
const __namedExportsOrder = ["EmptyWithAvailableExternalModels"];

/***/ }),

/***/ "./stories/misc/emptyWithAvailableExternalModels/availableModelsToInclude.ts":
/*!***********************************************************************************!*\
  !*** ./stories/misc/emptyWithAvailableExternalModels/availableModelsToInclude.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   availableModelsByPath: () => (/* binding */ availableModelsByPath),
/* harmony export */   modelsByNamespace: () => (/* binding */ modelsByNamespace)
/* harmony export */ });
/* unused harmony exports testTreePmmlModel, availableModels */
/* harmony import */ var _kie_tools_dmn_marshaller_dist_normalization_normalize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @kie-tools/dmn-marshaller/dist/normalization/normalize */ "../dmn-marshaller/dist/normalization/normalize.js");
/* harmony import */ var _kie_tools_pmml_editor_marshaller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @kie-tools/pmml-editor-marshaller */ "../pmml-editor-marshaller/dist/index.js");
/* harmony import */ var _kie_tools_dmn_editor_dist_pmml_pmml__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @kie-tools/dmn-editor/dist/pmml/pmml */ "./dist/pmml/pmml.js");
/* harmony import */ var _useCases_models_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../useCases/models/models */ "./stories/useCases/models/models.ts");
/* harmony import */ var _reference_models_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../reference/models/models */ "./stories/reference/models/models.ts");
/* harmony import */ var _testTreePmml__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./testTreePmml */ "./stories/misc/emptyWithAvailableExternalModels/testTreePmml.ts");






const testTreePmmlModel = (0,_kie_tools_pmml_editor_marshaller__WEBPACK_IMPORTED_MODULE_1__.XML2PMML)(_testTreePmml__WEBPACK_IMPORTED_MODULE_5__.testTreePmml);
const availableModels = [{
  type: "dmn",
  model: (0,_kie_tools_dmn_marshaller_dist_normalization_normalize__WEBPACK_IMPORTED_MODULE_0__.normalize)(_useCases_models_models__WEBPACK_IMPORTED_MODULE_3__.USE_CASE_MODELS.sumBkm.model),
  normalizedPosixPathRelativeToTheOpenFile: "storybook/useCases/sumBkm.dmn",
  svg: ""
}, {
  type: "dmn",
  model: (0,_kie_tools_dmn_marshaller_dist_normalization_normalize__WEBPACK_IMPORTED_MODULE_0__.normalize)(_useCases_models_models__WEBPACK_IMPORTED_MODULE_3__.USE_CASE_MODELS.sumDiffDs.model),
  normalizedPosixPathRelativeToTheOpenFile: "storybook/useCases/sumDiffDs.dmn",
  svg: ""
}, {
  type: "dmn",
  model: (0,_kie_tools_dmn_marshaller_dist_normalization_normalize__WEBPACK_IMPORTED_MODULE_0__.normalize)(_reference_models_models__WEBPACK_IMPORTED_MODULE_4__.REFERENCE_MODELS.empty.model),
  normalizedPosixPathRelativeToTheOpenFile: "storybook/reference/empty.dmn",
  svg: ""
}, {
  type: "pmml",
  model: testTreePmmlModel,
  normalizedPosixPathRelativeToTheOpenFile: "storybook/useCases/testTree.pmml"
}];
const availableModelsByPath = Object.values(availableModels).reduce((acc, v) => {
  acc[v.normalizedPosixPathRelativeToTheOpenFile] = v;
  return acc;
}, {});
const modelsByNamespace = Object.values(availableModels).reduce((acc, v) => {
  if (v.type === "dmn") {
    acc[v.model.definitions["@_namespace"]] = v;
  } else if (v.type === "pmml") {
    acc[(0,_kie_tools_dmn_editor_dist_pmml_pmml__WEBPACK_IMPORTED_MODULE_2__.getPmmlNamespace)({
      normalizedPosixPathRelativeToTheOpenFile: v.normalizedPosixPathRelativeToTheOpenFile
    })] = v;
  }
  return acc;
}, {});

/***/ }),

/***/ "./stories/misc/emptyWithAvailableExternalModels/testTreePmml.ts":
/*!***********************************************************************!*\
  !*** ./stories/misc/emptyWithAvailableExternalModels/testTreePmml.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   testTreePmml: () => (/* binding */ testTreePmml)
/* harmony export */ });
const testTreePmml = `<PMML version="4.2" xsi:schemaLocation="http://www.dmg.org/PMML-4_2 http://www.dmg.org/v4-2-1/pmml-4-2.xsd" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
xmlns="http://www.dmg.org/PMML-4_2">
<Header>
 <Application name="Drools-PMML" version="7.0.0-SNAPSHOT" />
</Header>

<DataDictionary numberOfFields="3">
 <DataField name="temperature" dataType="double" optype="continuous" />
 <DataField name="humidity" dataType="double" optype="continuous" />   
 <DataField name="decision" dataType="string" optype="categorical"> 
   <Value value="sunglasses" />
   <Value value="umbrella" />
   <Value value="nothing" />     
 </DataField>
</DataDictionary>

<TreeModel modelName="DecisionTree" functionName="classification">
 <MiningSchema>
   <MiningField name="temperature"  usageType="active" />
   <MiningField name="humidity"  usageType="active" />
   <MiningField name="decision" usageType="predicted" />
 </MiningSchema>
 <Output>
   <OutputField name="weatherdecision" targetField="decision" />
 </Output>
 
 <Node score="nothing" id="1">
   <True />
   <Node score="sunglasses" id="2">
     <CompoundPredicate booleanOperator="and">
       <SimplePredicate field="temperature" operator="greaterThan" value="25" />
       <SimplePredicate field="humidity" operator="lessOrEqual" value="20" />
     </CompoundPredicate>
   </Node>
   <Node score="umbrella" id="3">
     <SimplePredicate field="humidity" operator="greaterThan" value="50" />
   </Node>
   <Node score="nothing" id="4">
     <True />
   </Node>
 </Node>
</TreeModel>
</PMML>
`;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlzYy1lbXB0eVdpdGhBdmFpbGFibGVFeHRlcm5hbE1vZGVscy1FbXB0eVdpdGhBdmFpbGFibGVFeHRlcm5hbE1vZGVscy1zdG9yaWVzLmFmYzc1ZGU1LmlmcmFtZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFtQnNCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNDaUM7QUFFa0M7QUFDd0c7QUFDbEc7QUFDOUI7QUFDcUI7QUFDckI7QUFDakUsU0FBU1UsNEJBQTRCQSxDQUFDQyxJQUFvQjtFQUN4RCxNQUFNLENBQUNDLEtBQUssRUFBRUMsUUFBUSxDQUFDLEdBQUdYLCtDQUFRLENBSS9CLE1BQUs7SUFDTixNQUFNWSxvQkFBb0IsR0FBR1gsd0VBQWEsQ0FBQ00sc0VBQWdCLENBQUNNLEtBQUssQ0FBQ0MsR0FBRyxFQUFFO01BQ3JFQyxTQUFTLEVBQUU7S0FDWixDQUFDO0lBQ0YsT0FBTztNQUNMQyxVQUFVLEVBQUVKLG9CQUFvQjtNQUNoQ0ssS0FBSyxFQUFFLENBQUNkLGlHQUFTLENBQUNTLG9CQUFvQixDQUFDTSxNQUFNLENBQUNDLEtBQUssRUFBRSxDQUFDLENBQUM7TUFDdkRDLE9BQU8sRUFBRTtLQUNWO0VBQ0gsQ0FBQyxDQUFDO0VBQ0YsTUFBTUMsWUFBWSxHQUFHWCxLQUFLLENBQUNPLEtBQUssQ0FBQ1AsS0FBSyxDQUFDVSxPQUFPLENBQUM7RUFDL0MsTUFBTUUseUJBQXlCLEdBQUd2Qiw4Q0FBTyxDQUFzQixNQUFLOztJQUNsRSxPQUFPLENBQUMsQ0FBQXdCLEVBQUEsR0FBQUYsWUFBWSxDQUFDRyxXQUFXLENBQUNDLE1BQU0sY0FBQUYsRUFBQSxjQUFBQSxFQUFBLEdBQUksRUFBRSxFQUFFRyxNQUFNLENBQUMsQ0FBQ0MsR0FBRyxFQUFFQyxDQUFDLEtBQUk7TUFDL0RELEdBQUcsQ0FBQ0MsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLEdBQUd0Qix3RUFBaUIsQ0FBQ3NCLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQztNQUMzRCxPQUFPRCxHQUFHO0lBQ1osQ0FBQyxFQUFFLEVBQXlCLENBQUM7RUFDL0IsQ0FBQyxFQUFFLENBQUNOLFlBQVksQ0FBQ0csV0FBVyxDQUFDQyxNQUFNLENBQUMsQ0FBQztFQUNyQyxNQUFNSSw0QkFBNEIsR0FBRy9CLGtEQUFXLENBQStCLE1BQU1nQyxJQUFJLElBQUc7O0lBQzFGLE9BQU8sQ0FBQVAsRUFBQSxHQUFBbEIsNEVBQXFCLENBQUN5QixJQUFJLENBQUMsY0FBQVAsRUFBQSxjQUFBQSxFQUFBLEdBQUksSUFBSTtFQUM1QyxDQUFDLEVBQUUsRUFBRSxDQUFDO0VBQ04sTUFBTVEseUNBQXlDLEdBQUdqQyxrREFBVyxDQUE0QyxZQUFXO0lBQ2xILE9BQU9rQyxNQUFNLENBQUNDLElBQUksQ0FBQzVCLDRFQUFxQixDQUFDO0VBQzNDLENBQUMsRUFBRSxFQUFFLENBQUM7RUFDTixNQUFNNkIsYUFBYSxHQUFHcEMsa0RBQVcsQ0FBbUJxQyxLQUFLLElBQUc7SUFDMUR4QixRQUFRLENBQUN5QixJQUFJLElBQUc7TUFDZCxNQUFNQyxRQUFRLEdBQUdELElBQUksQ0FBQ25CLEtBQUssQ0FBQ3FCLEtBQUssQ0FBQyxDQUFDLEVBQUVGLElBQUksQ0FBQ2hCLE9BQU8sR0FBRyxDQUFDLENBQUM7TUFDdEQsT0FBTztRQUNMLEdBQUdnQixJQUFJO1FBQ1BuQixLQUFLLEVBQUUsQ0FBQyxHQUFHb0IsUUFBUSxFQUFFRixLQUFLLENBQUM7UUFDM0JmLE9BQU8sRUFBRWlCLFFBQVEsQ0FBQ0U7T0FDbkI7SUFDSCxDQUFDLENBQUM7RUFDSixDQUFDLEVBQUUsRUFBRSxDQUFDO0VBQ04sT0FBT0Msc0RBQUEsQ0FBQUMsdURBQUE7SUFBQUMsUUFBQSxFQUNGdEMsMEVBQWdCLENBQUM7TUFDbEIrQixLQUFLLEVBQUVkLFlBQVk7TUFDbkJzQixlQUFlLEVBQUVsQyxJQUFJLENBQUNrQyxlQUFlO01BQ3JDVCxhQUFhO01BQ2JMLDRCQUE0QjtNQUM1QkUseUNBQXlDO01BQ3pDVCx5QkFBeUI7TUFDekJzQixtQkFBbUIsRUFBRW5DLElBQUksQ0FBQ21DLG1CQUFtQjtNQUM3Q0MsMEJBQTBCLEVBQUVwQyxJQUFJLENBQUNvQywwQkFBMEI7TUFDM0RDLGtCQUFrQixFQUFFckMsSUFBSSxDQUFDcUMsa0JBQWtCO01BQzNDQyx5QkFBeUIsRUFBRXRDLElBQUksQ0FBQ3NDLHlCQUF5QjtNQUN6REMsZ0JBQWdCLEVBQUV2QyxJQUFJLENBQUN1QztLQUN4QjtFQUFDLEVBQ0M7QUFDUDtBQUNBLE1BQU1DLElBQUksR0FBeUI7RUFDakNDLEtBQUssRUFBRSx1Q0FBdUM7RUFDOUNDLFNBQVMsRUFBRWpELDJFQUFTO0VBQ3BCa0QsY0FBYyxFQUFFO0NBQ2pCO0FBQ0QsaUVBQWVILElBQUksRUFBQztBQUViLE1BQU1JLGdDQUFnQyxHQUFVO0VBQ3JEQyxNQUFNLEVBQUU3QyxJQUFJLElBQUlELDRCQUE0QixDQUFDQyxJQUFJLENBQUM7RUFDbERBLElBQUksRUFBRTtJQUNKMEIsS0FBSyxFQUFFNUIsc0VBQWdCLENBQUNNLEtBQUssQ0FBQ3NCLEtBQUs7SUFDbkNRLGVBQWUsRUFBRSxLQUFLO0lBQ3RCSSx5QkFBeUIsRUFBRSxJQUFJUSxHQUFHLEVBQUU7SUFDcENWLDBCQUEwQixFQUFFLGtDQUFrQztJQUM5REQsbUJBQW1CLEVBQUUsdUNBQXVDO0lBQzVEdEIseUJBQXlCLEVBQUUsRUFBRTtJQUM3QjBCLGdCQUFnQixFQUFFLEVBQUU7SUFDcEJGLGtCQUFrQixFQUFFOztDQUV2QjtBQUNETyxnQ0FBZ0MsQ0FBQ0csVUFBVSxHQUFHO0VBQzVDLEdBQUdILGdDQUFnQyxDQUFDRyxVQUFVO0VBQzlDQyxJQUFJLEVBQUU7SUFDSixJQUFHLENBQUFsQyxFQUFBLEdBQUE4QixnQ0FBZ0MsQ0FBQ0csVUFBVSxjQUFBakMsRUFBQSx1QkFBQUEsRUFBQSxDQUFFa0MsSUFBSTtJQUNwREMsTUFBTSxFQUFFO01BQ05DLGNBQWMsRUFBRSwwYUFBMGE7TUFDMWIsSUFBRyxDQUFBQyxFQUFBLElBQUFDLEVBQUEsR0FBQVIsZ0NBQWdDLENBQUNHLFVBQVUsY0FBQUssRUFBQSx1QkFBQUEsRUFBQSxDQUFFSixJQUFJLGNBQUFHLEVBQUEsdUJBQUFBLEVBQUEsQ0FBRUYsTUFBTTs7O0NBR2pFO0FBQUMsTUFBQUksbUJBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVGaUY7QUFDdEI7QUFFVztBQUNUO0FBQ0U7QUFDbkI7QUFFdkMsTUFBTUssaUJBQWlCLEdBQUdKLDJFQUFRLENBQUNHLHVEQUFZLENBQUM7QUFFaEQsTUFBTUUsZUFBZSxHQUE4QixDQUN4RDtFQUNFQyxJQUFJLEVBQUUsS0FBSztFQUNYbEMsS0FBSyxFQUFFaEMsaUdBQVMsQ0FBQzhELG9FQUFlLENBQUNLLE1BQU0sQ0FBQ25DLEtBQUssQ0FBQztFQUM5Q29DLHdDQUF3QyxFQUFFLCtCQUErQjtFQUN6RUMsR0FBRyxFQUFFO0NBQ04sRUFDRDtFQUNFSCxJQUFJLEVBQUUsS0FBSztFQUNYbEMsS0FBSyxFQUFFaEMsaUdBQVMsQ0FBQzhELG9FQUFlLENBQUNRLFNBQVMsQ0FBQ3RDLEtBQUssQ0FBQztFQUNqRG9DLHdDQUF3QyxFQUFFLGtDQUFrQztFQUM1RUMsR0FBRyxFQUFFO0NBQ04sRUFDRDtFQUNFSCxJQUFJLEVBQUUsS0FBSztFQUNYbEMsS0FBSyxFQUFFaEMsaUdBQVMsQ0FBQ0ksc0VBQWdCLENBQUNNLEtBQUssQ0FBQ3NCLEtBQUssQ0FBQztFQUM5Q29DLHdDQUF3QyxFQUFFLCtCQUErQjtFQUN6RUMsR0FBRyxFQUFFO0NBQ04sRUFDRDtFQUNFSCxJQUFJLEVBQUUsTUFBTTtFQUNabEMsS0FBSyxFQUFFZ0MsaUJBQWlCO0VBQ3hCSSx3Q0FBd0MsRUFBRTtDQUMzQyxDQUNGO0FBRU0sTUFBTWxFLHFCQUFxQixHQUE0QzJCLE1BQU0sQ0FBQzBDLE1BQU0sQ0FBQ04sZUFBZSxDQUFDLENBQUMxQyxNQUFNLENBQ2pILENBQUNDLEdBQUcsRUFBRWdELENBQUMsS0FBSTtFQUNUaEQsR0FBRyxDQUFDZ0QsQ0FBQyxDQUFDSix3Q0FBd0MsQ0FBQyxHQUFHSSxDQUFDO0VBQ25ELE9BQU9oRCxHQUFHO0FBQ1osQ0FBQyxFQUNELEVBQTZDLENBQzlDO0FBRU0sTUFBTXJCLGlCQUFpQixHQUFHMEIsTUFBTSxDQUFDMEMsTUFBTSxDQUFDTixlQUFlLENBQUMsQ0FBQzFDLE1BQU0sQ0FBQyxDQUFDQyxHQUFHLEVBQUVnRCxDQUFDLEtBQUk7RUFDaEYsSUFBSUEsQ0FBQyxDQUFDTixJQUFJLEtBQUssS0FBSyxFQUFFO0lBQ3BCMUMsR0FBRyxDQUFDZ0QsQ0FBQyxDQUFDeEMsS0FBSyxDQUFDWCxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUMsR0FBR21ELENBQUM7RUFDN0MsQ0FBQyxNQUFNLElBQUlBLENBQUMsQ0FBQ04sSUFBSSxLQUFLLE1BQU0sRUFBRTtJQUM1QjFDLEdBQUcsQ0FBQ3FDLHNGQUFnQixDQUFDO01BQUVPLHdDQUF3QyxFQUFFSSxDQUFDLENBQUNKO0lBQXdDLENBQUUsQ0FBQyxDQUFDLEdBQUdJLENBQUM7RUFDckg7RUFDQSxPQUFPaEQsR0FBRztBQUNaLENBQUMsRUFBRSxFQUFtQyxDQUFDOzs7Ozs7Ozs7Ozs7O0FDbERoQyxNQUFNdUMsWUFBWSxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBMkMzQiIsInNvdXJjZXMiOlsid2VicGFjazovL0BraWUtdG9vbHMvZG1uLWVkaXRvci8uLi9wbW1sLWVkaXRvci1tYXJzaGFsbGVyL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9Aa2llLXRvb2xzL2Rtbi1lZGl0b3IvLi9zdG9yaWVzL21pc2MvZW1wdHlXaXRoQXZhaWxhYmxlRXh0ZXJuYWxNb2RlbHMvRW1wdHlXaXRoQXZhaWxhYmxlRXh0ZXJuYWxNb2RlbHMuc3Rvcmllcy50c3giLCJ3ZWJwYWNrOi8vQGtpZS10b29scy9kbW4tZWRpdG9yLy4vc3Rvcmllcy9taXNjL2VtcHR5V2l0aEF2YWlsYWJsZUV4dGVybmFsTW9kZWxzL2F2YWlsYWJsZU1vZGVsc1RvSW5jbHVkZS50cyIsIndlYnBhY2s6Ly9Aa2llLXRvb2xzL2Rtbi1lZGl0b3IvLi9zdG9yaWVzL21pc2MvZW1wdHlXaXRoQXZhaWxhYmxlRXh0ZXJuYWxNb2RlbHMvdGVzdFRyZWVQbW1sLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBMaWNlbnNlZCB0byB0aGUgQXBhY2hlIFNvZnR3YXJlIEZvdW5kYXRpb24gKEFTRikgdW5kZXIgb25lXG4gKiBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gIFNlZSB0aGUgTk9USUNFIGZpbGVcbiAqIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uXG4gKiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC4gIFRoZSBBU0YgbGljZW5zZXMgdGhpcyBmaWxlXG4gKiB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlXG4gKiBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2VcbiAqIHdpdGggdGhlIExpY2Vuc2UuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLFxuICogc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cbiAqIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXG4gKiBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGVcbiAqIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnNcbiAqIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmV4cG9ydCAqIGZyb20gXCIuL2FwaVwiO1xuZXhwb3J0ICogZnJvbSBcIi4vbWFyc2hhbGxlclwiO1xuIiwiLypcbiAqIExpY2Vuc2VkIHRvIHRoZSBBcGFjaGUgU29mdHdhcmUgRm91bmRhdGlvbiAoQVNGKSB1bmRlciBvbmVcbiAqIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiAgU2VlIHRoZSBOT1RJQ0UgZmlsZVxuICogZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb25cbiAqIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLiAgVGhlIEFTRiBsaWNlbnNlcyB0aGlzIGZpbGVcbiAqIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGVcbiAqIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuICogd2l0aCB0aGUgTGljZW5zZS4gIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsXG4gKiBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxuICogXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcbiAqIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZVxuICogc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9uc1xuICogdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB0eXBlIHsgTWV0YSwgU3RvcnlPYmogfSBmcm9tIFwiQHN0b3J5Ym9vay9yZWFjdFwiO1xuaW1wb3J0IHsgRG1uTGF0ZXN0TW9kZWwsIERtbk1hcnNoYWxsZXIsIGdldE1hcnNoYWxsZXIgfSBmcm9tIFwiQGtpZS10b29scy9kbW4tbWFyc2hhbGxlclwiO1xuaW1wb3J0IHsgRG1uRWRpdG9yLCBEbW5FZGl0b3JQcm9wcywgRXh0ZXJuYWxNb2RlbHNJbmRleCwgT25SZXF1ZXN0RXh0ZXJuYWxNb2RlbEJ5UGF0aCwgT25SZXF1ZXN0RXh0ZXJuYWxNb2RlbHNBdmFpbGFibGVUb0luY2x1ZGUsIE9uRG1uTW9kZWxDaGFuZ2UgfSBmcm9tIFwiQGtpZS10b29scy9kbW4tZWRpdG9yL2Rpc3QvRG1uRWRpdG9yXCI7XG5pbXBvcnQgeyBub3JtYWxpemUsIE5vcm1hbGl6ZWQgfSBmcm9tIFwiQGtpZS10b29scy9kbW4tbWFyc2hhbGxlci9kaXN0L25vcm1hbGl6YXRpb24vbm9ybWFsaXplXCI7XG5pbXBvcnQgeyBEbW5FZGl0b3JXcmFwcGVyIH0gZnJvbSBcIi4uLy4uL2RtbkVkaXRvclN0b3JpZXNXcmFwcGVyXCI7XG5pbXBvcnQgeyBhdmFpbGFibGVNb2RlbHNCeVBhdGgsIG1vZGVsc0J5TmFtZXNwYWNlIH0gZnJvbSBcIi4vYXZhaWxhYmxlTW9kZWxzVG9JbmNsdWRlXCI7XG5pbXBvcnQgeyBSRUZFUkVOQ0VfTU9ERUxTIH0gZnJvbSBcIi4uLy4uL3JlZmVyZW5jZS9tb2RlbHMvbW9kZWxzXCI7XG5mdW5jdGlvbiBFbXB0eVN0b3J5V2l0aEluY2x1ZGVkTW9kZWxzKGFyZ3M6IERtbkVkaXRvclByb3BzKSB7XG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGU8e1xuICAgIG1hcnNoYWxsZXI6IERtbk1hcnNoYWxsZXI7XG4gICAgc3RhY2s6IE5vcm1hbGl6ZWQ8RG1uTGF0ZXN0TW9kZWw+W107XG4gICAgcG9pbnRlcjogbnVtYmVyO1xuICB9PigoKSA9PiB7XG4gICAgY29uc3QgaW5pdGlhbERtbk1hcnNoYWxsZXIgPSBnZXRNYXJzaGFsbGVyKFJFRkVSRU5DRV9NT0RFTFMuZW1wdHkucmF3LCB7XG4gICAgICB1cGdyYWRlVG86IFwibGF0ZXN0XCJcbiAgICB9KTtcbiAgICByZXR1cm4ge1xuICAgICAgbWFyc2hhbGxlcjogaW5pdGlhbERtbk1hcnNoYWxsZXIsXG4gICAgICBzdGFjazogW25vcm1hbGl6ZShpbml0aWFsRG1uTWFyc2hhbGxlci5wYXJzZXIucGFyc2UoKSldLFxuICAgICAgcG9pbnRlcjogMFxuICAgIH07XG4gIH0pO1xuICBjb25zdCBjdXJyZW50TW9kZWwgPSBzdGF0ZS5zdGFja1tzdGF0ZS5wb2ludGVyXTtcbiAgY29uc3QgZXh0ZXJuYWxNb2RlbHNCeU5hbWVzcGFjZSA9IHVzZU1lbW88RXh0ZXJuYWxNb2RlbHNJbmRleD4oKCkgPT4ge1xuICAgIHJldHVybiAoY3VycmVudE1vZGVsLmRlZmluaXRpb25zLmltcG9ydCA/PyBbXSkucmVkdWNlKChhY2MsIGkpID0+IHtcbiAgICAgIGFjY1tpW1wiQF9uYW1lc3BhY2VcIl1dID0gbW9kZWxzQnlOYW1lc3BhY2VbaVtcIkBfbmFtZXNwYWNlXCJdXTtcbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30gYXMgRXh0ZXJuYWxNb2RlbHNJbmRleCk7XG4gIH0sIFtjdXJyZW50TW9kZWwuZGVmaW5pdGlvbnMuaW1wb3J0XSk7XG4gIGNvbnN0IG9uUmVxdWVzdEV4dGVybmFsTW9kZWxCeVBhdGggPSB1c2VDYWxsYmFjazxPblJlcXVlc3RFeHRlcm5hbE1vZGVsQnlQYXRoPihhc3luYyBwYXRoID0+IHtcbiAgICByZXR1cm4gYXZhaWxhYmxlTW9kZWxzQnlQYXRoW3BhdGhdID8/IG51bGw7XG4gIH0sIFtdKTtcbiAgY29uc3Qgb25SZXF1ZXN0RXh0ZXJuYWxNb2RlbHNBdmFpbGFibGVUb0luY2x1ZGUgPSB1c2VDYWxsYmFjazxPblJlcXVlc3RFeHRlcm5hbE1vZGVsc0F2YWlsYWJsZVRvSW5jbHVkZT4oYXN5bmMgKCkgPT4ge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhhdmFpbGFibGVNb2RlbHNCeVBhdGgpO1xuICB9LCBbXSk7XG4gIGNvbnN0IG9uTW9kZWxDaGFuZ2UgPSB1c2VDYWxsYmFjazxPbkRtbk1vZGVsQ2hhbmdlPihtb2RlbCA9PiB7XG4gICAgc2V0U3RhdGUocHJldiA9PiB7XG4gICAgICBjb25zdCBuZXdTdGFjayA9IHByZXYuc3RhY2suc2xpY2UoMCwgcHJldi5wb2ludGVyICsgMSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5wcmV2LFxuICAgICAgICBzdGFjazogWy4uLm5ld1N0YWNrLCBtb2RlbF0sXG4gICAgICAgIHBvaW50ZXI6IG5ld1N0YWNrLmxlbmd0aFxuICAgICAgfTtcbiAgICB9KTtcbiAgfSwgW10pO1xuICByZXR1cm4gPD5cbiAgICAgIHtEbW5FZGl0b3JXcmFwcGVyKHtcbiAgICAgIG1vZGVsOiBjdXJyZW50TW9kZWwsXG4gICAgICBvcmlnaW5hbFZlcnNpb246IGFyZ3Mub3JpZ2luYWxWZXJzaW9uLFxuICAgICAgb25Nb2RlbENoYW5nZSxcbiAgICAgIG9uUmVxdWVzdEV4dGVybmFsTW9kZWxCeVBhdGgsXG4gICAgICBvblJlcXVlc3RFeHRlcm5hbE1vZGVsc0F2YWlsYWJsZVRvSW5jbHVkZSxcbiAgICAgIGV4dGVybmFsTW9kZWxzQnlOYW1lc3BhY2UsXG4gICAgICBleHRlcm5hbENvbnRleHROYW1lOiBhcmdzLmV4dGVybmFsQ29udGV4dE5hbWUsXG4gICAgICBleHRlcm5hbENvbnRleHREZXNjcmlwdGlvbjogYXJncy5leHRlcm5hbENvbnRleHREZXNjcmlwdGlvbixcbiAgICAgIHZhbGlkYXRpb25NZXNzYWdlczogYXJncy52YWxpZGF0aW9uTWVzc2FnZXMsXG4gICAgICBldmFsdWF0aW9uUmVzdWx0c0J5Tm9kZUlkOiBhcmdzLmV2YWx1YXRpb25SZXN1bHRzQnlOb2RlSWQsXG4gICAgICBpc3N1ZVRyYWNrZXJIcmVmOiBhcmdzLmlzc3VlVHJhY2tlckhyZWZcbiAgICB9KX1cbiAgICA8Lz47XG59XG5jb25zdCBtZXRhOiBNZXRhPERtbkVkaXRvclByb3BzPiA9IHtcbiAgdGl0bGU6IFwiTWlzYy9FbXB0eVdpdGhBdmFpbGFibGVFeHRlcm5hbE1vZGVsc1wiLFxuICBjb21wb25lbnQ6IERtbkVkaXRvcixcbiAgaW5jbHVkZVN0b3JpZXM6IC9eW0EtWl0vXG59O1xuZXhwb3J0IGRlZmF1bHQgbWV0YTtcbnR5cGUgU3RvcnkgPSBTdG9yeU9iajx0eXBlb2YgRW1wdHlTdG9yeVdpdGhJbmNsdWRlZE1vZGVscz47XG5leHBvcnQgY29uc3QgRW1wdHlXaXRoQXZhaWxhYmxlRXh0ZXJuYWxNb2RlbHM6IFN0b3J5ID0ge1xuICByZW5kZXI6IGFyZ3MgPT4gRW1wdHlTdG9yeVdpdGhJbmNsdWRlZE1vZGVscyhhcmdzKSxcbiAgYXJnczoge1xuICAgIG1vZGVsOiBSRUZFUkVOQ0VfTU9ERUxTLmVtcHR5Lm1vZGVsLFxuICAgIG9yaWdpbmFsVmVyc2lvbjogXCIxLjVcIixcbiAgICBldmFsdWF0aW9uUmVzdWx0c0J5Tm9kZUlkOiBuZXcgTWFwKCksXG4gICAgZXh0ZXJuYWxDb250ZXh0RGVzY3JpcHRpb246IFwiVGhlIFN0b3J5Ym9vayBmb3IgdGhlIERNTiBFZGl0b3JcIixcbiAgICBleHRlcm5hbENvbnRleHROYW1lOiBcIkFwYWNoZSBLSUUgOjogRE1OIEVkaXRvciA6OiBTdG9yeWJvb2tcIixcbiAgICBleHRlcm5hbE1vZGVsc0J5TmFtZXNwYWNlOiB7fSxcbiAgICBpc3N1ZVRyYWNrZXJIcmVmOiBcIlwiLFxuICAgIHZhbGlkYXRpb25NZXNzYWdlczoge31cbiAgfVxufTtcbkVtcHR5V2l0aEF2YWlsYWJsZUV4dGVybmFsTW9kZWxzLnBhcmFtZXRlcnMgPSB7XG4gIC4uLkVtcHR5V2l0aEF2YWlsYWJsZUV4dGVybmFsTW9kZWxzLnBhcmFtZXRlcnMsXG4gIGRvY3M6IHtcbiAgICAuLi5FbXB0eVdpdGhBdmFpbGFibGVFeHRlcm5hbE1vZGVscy5wYXJhbWV0ZXJzPy5kb2NzLFxuICAgIHNvdXJjZToge1xuICAgICAgb3JpZ2luYWxTb3VyY2U6IFwie1xcbiAgcmVuZGVyOiBhcmdzID0+IEVtcHR5U3RvcnlXaXRoSW5jbHVkZWRNb2RlbHMoYXJncyksXFxuICBhcmdzOiB7XFxuICAgIG1vZGVsOiBSRUZFUkVOQ0VfTU9ERUxTLmVtcHR5Lm1vZGVsLFxcbiAgICBvcmlnaW5hbFZlcnNpb246IFxcXCIxLjVcXFwiLFxcbiAgICBldmFsdWF0aW9uUmVzdWx0c0J5Tm9kZUlkOiBuZXcgTWFwKCksXFxuICAgIGV4dGVybmFsQ29udGV4dERlc2NyaXB0aW9uOiBcXFwiVGhlIFN0b3J5Ym9vayBmb3IgdGhlIERNTiBFZGl0b3JcXFwiLFxcbiAgICBleHRlcm5hbENvbnRleHROYW1lOiBcXFwiQXBhY2hlIEtJRSA6OiBETU4gRWRpdG9yIDo6IFN0b3J5Ym9va1xcXCIsXFxuICAgIGV4dGVybmFsTW9kZWxzQnlOYW1lc3BhY2U6IHt9LFxcbiAgICBpc3N1ZVRyYWNrZXJIcmVmOiBcXFwiXFxcIixcXG4gICAgdmFsaWRhdGlvbk1lc3NhZ2VzOiB7fVxcbiAgfVxcbn1cIixcbiAgICAgIC4uLkVtcHR5V2l0aEF2YWlsYWJsZUV4dGVybmFsTW9kZWxzLnBhcmFtZXRlcnM/LmRvY3M/LnNvdXJjZVxuICAgIH1cbiAgfVxufTsiLCIvKlxuICogTGljZW5zZWQgdG8gdGhlIEFwYWNoZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIChBU0YpIHVuZGVyIG9uZVxuICogb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuICBTZWUgdGhlIE5PVElDRSBmaWxlXG4gKiBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvblxuICogcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuICBUaGUgQVNGIGxpY2Vuc2VzIHRoaXMgZmlsZVxuICogdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZVxuICogXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4gKiB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZyxcbiAqIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXG4gKiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxuICogS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlXG4gKiBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zXG4gKiB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgeyBub3JtYWxpemUgfSBmcm9tIFwiQGtpZS10b29scy9kbW4tbWFyc2hhbGxlci9kaXN0L25vcm1hbGl6YXRpb24vbm9ybWFsaXplXCI7XG5pbXBvcnQgeyBYTUwyUE1NTCB9IGZyb20gXCJAa2llLXRvb2xzL3BtbWwtZWRpdG9yLW1hcnNoYWxsZXJcIjtcbmltcG9ydCAqIGFzIERtbkVkaXRvciBmcm9tIFwiQGtpZS10b29scy9kbW4tZWRpdG9yL2Rpc3QvRG1uRWRpdG9yXCI7XG5pbXBvcnQgeyBnZXRQbW1sTmFtZXNwYWNlIH0gZnJvbSBcIkBraWUtdG9vbHMvZG1uLWVkaXRvci9kaXN0L3BtbWwvcG1tbFwiO1xuaW1wb3J0IHsgVVNFX0NBU0VfTU9ERUxTIH0gZnJvbSBcIi4uLy4uL3VzZUNhc2VzL21vZGVscy9tb2RlbHNcIjtcbmltcG9ydCB7IFJFRkVSRU5DRV9NT0RFTFMgfSBmcm9tIFwiLi4vLi4vcmVmZXJlbmNlL21vZGVscy9tb2RlbHNcIjtcbmltcG9ydCB7IHRlc3RUcmVlUG1tbCB9IGZyb20gXCIuL3Rlc3RUcmVlUG1tbFwiO1xuXG5leHBvcnQgY29uc3QgdGVzdFRyZWVQbW1sTW9kZWwgPSBYTUwyUE1NTCh0ZXN0VHJlZVBtbWwpO1xuXG5leHBvcnQgY29uc3QgYXZhaWxhYmxlTW9kZWxzOiBEbW5FZGl0b3IuRXh0ZXJuYWxNb2RlbFtdID0gW1xuICB7XG4gICAgdHlwZTogXCJkbW5cIixcbiAgICBtb2RlbDogbm9ybWFsaXplKFVTRV9DQVNFX01PREVMUy5zdW1Ca20ubW9kZWwpLFxuICAgIG5vcm1hbGl6ZWRQb3NpeFBhdGhSZWxhdGl2ZVRvVGhlT3BlbkZpbGU6IFwic3Rvcnlib29rL3VzZUNhc2VzL3N1bUJrbS5kbW5cIixcbiAgICBzdmc6IFwiXCIsXG4gIH0sXG4gIHtcbiAgICB0eXBlOiBcImRtblwiLFxuICAgIG1vZGVsOiBub3JtYWxpemUoVVNFX0NBU0VfTU9ERUxTLnN1bURpZmZEcy5tb2RlbCksXG4gICAgbm9ybWFsaXplZFBvc2l4UGF0aFJlbGF0aXZlVG9UaGVPcGVuRmlsZTogXCJzdG9yeWJvb2svdXNlQ2FzZXMvc3VtRGlmZkRzLmRtblwiLFxuICAgIHN2ZzogXCJcIixcbiAgfSxcbiAge1xuICAgIHR5cGU6IFwiZG1uXCIsXG4gICAgbW9kZWw6IG5vcm1hbGl6ZShSRUZFUkVOQ0VfTU9ERUxTLmVtcHR5Lm1vZGVsKSxcbiAgICBub3JtYWxpemVkUG9zaXhQYXRoUmVsYXRpdmVUb1RoZU9wZW5GaWxlOiBcInN0b3J5Ym9vay9yZWZlcmVuY2UvZW1wdHkuZG1uXCIsXG4gICAgc3ZnOiBcIlwiLFxuICB9LFxuICB7XG4gICAgdHlwZTogXCJwbW1sXCIsXG4gICAgbW9kZWw6IHRlc3RUcmVlUG1tbE1vZGVsLFxuICAgIG5vcm1hbGl6ZWRQb3NpeFBhdGhSZWxhdGl2ZVRvVGhlT3BlbkZpbGU6IFwic3Rvcnlib29rL3VzZUNhc2VzL3Rlc3RUcmVlLnBtbWxcIixcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBhdmFpbGFibGVNb2RlbHNCeVBhdGg6IFJlY29yZDxzdHJpbmcsIERtbkVkaXRvci5FeHRlcm5hbE1vZGVsPiA9IE9iamVjdC52YWx1ZXMoYXZhaWxhYmxlTW9kZWxzKS5yZWR1Y2UoXG4gIChhY2MsIHYpID0+IHtcbiAgICBhY2Nbdi5ub3JtYWxpemVkUG9zaXhQYXRoUmVsYXRpdmVUb1RoZU9wZW5GaWxlXSA9IHY7XG4gICAgcmV0dXJuIGFjYztcbiAgfSxcbiAge30gYXMgUmVjb3JkPHN0cmluZywgRG1uRWRpdG9yLkV4dGVybmFsTW9kZWw+XG4pO1xuXG5leHBvcnQgY29uc3QgbW9kZWxzQnlOYW1lc3BhY2UgPSBPYmplY3QudmFsdWVzKGF2YWlsYWJsZU1vZGVscykucmVkdWNlKChhY2MsIHYpID0+IHtcbiAgaWYgKHYudHlwZSA9PT0gXCJkbW5cIikge1xuICAgIGFjY1t2Lm1vZGVsLmRlZmluaXRpb25zW1wiQF9uYW1lc3BhY2VcIl1dID0gdjtcbiAgfSBlbHNlIGlmICh2LnR5cGUgPT09IFwicG1tbFwiKSB7XG4gICAgYWNjW2dldFBtbWxOYW1lc3BhY2UoeyBub3JtYWxpemVkUG9zaXhQYXRoUmVsYXRpdmVUb1RoZU9wZW5GaWxlOiB2Lm5vcm1hbGl6ZWRQb3NpeFBhdGhSZWxhdGl2ZVRvVGhlT3BlbkZpbGUgfSldID0gdjtcbiAgfVxuICByZXR1cm4gYWNjO1xufSwge30gYXMgRG1uRWRpdG9yLkV4dGVybmFsTW9kZWxzSW5kZXgpO1xuIiwiLypcbiAqIExpY2Vuc2VkIHRvIHRoZSBBcGFjaGUgU29mdHdhcmUgRm91bmRhdGlvbiAoQVNGKSB1bmRlciBvbmVcbiAqIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiAgU2VlIHRoZSBOT1RJQ0UgZmlsZVxuICogZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb25cbiAqIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLiAgVGhlIEFTRiBsaWNlbnNlcyB0aGlzIGZpbGVcbiAqIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGVcbiAqIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuICogd2l0aCB0aGUgTGljZW5zZS4gIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsXG4gKiBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxuICogXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcbiAqIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZVxuICogc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9uc1xuICogdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLy8gQ29waWVkIGZyb20ga29naXRvLWV4YW1wbGVzL2tvZ2l0by1xdWFya3VzLWV4YW1wbGVzL2Rtbi1wbW1sLXF1YXJrdXMtZXhhbXBsZS9zcmMvbWFpbi9yZXNvdXJjZXNcbmV4cG9ydCBjb25zdCB0ZXN0VHJlZVBtbWwgPSBgPFBNTUwgdmVyc2lvbj1cIjQuMlwiIHhzaTpzY2hlbWFMb2NhdGlvbj1cImh0dHA6Ly93d3cuZG1nLm9yZy9QTU1MLTRfMiBodHRwOi8vd3d3LmRtZy5vcmcvdjQtMi0xL3BtbWwtNC0yLnhzZFwiIHhtbG5zOnhzaT1cImh0dHA6Ly93d3cudzMub3JnLzIwMDEvWE1MU2NoZW1hLWluc3RhbmNlXCJcbnhtbG5zPVwiaHR0cDovL3d3dy5kbWcub3JnL1BNTUwtNF8yXCI+XG48SGVhZGVyPlxuIDxBcHBsaWNhdGlvbiBuYW1lPVwiRHJvb2xzLVBNTUxcIiB2ZXJzaW9uPVwiNy4wLjAtU05BUFNIT1RcIiAvPlxuPC9IZWFkZXI+XG5cbjxEYXRhRGljdGlvbmFyeSBudW1iZXJPZkZpZWxkcz1cIjNcIj5cbiA8RGF0YUZpZWxkIG5hbWU9XCJ0ZW1wZXJhdHVyZVwiIGRhdGFUeXBlPVwiZG91YmxlXCIgb3B0eXBlPVwiY29udGludW91c1wiIC8+XG4gPERhdGFGaWVsZCBuYW1lPVwiaHVtaWRpdHlcIiBkYXRhVHlwZT1cImRvdWJsZVwiIG9wdHlwZT1cImNvbnRpbnVvdXNcIiAvPiAgIFxuIDxEYXRhRmllbGQgbmFtZT1cImRlY2lzaW9uXCIgZGF0YVR5cGU9XCJzdHJpbmdcIiBvcHR5cGU9XCJjYXRlZ29yaWNhbFwiPiBcbiAgIDxWYWx1ZSB2YWx1ZT1cInN1bmdsYXNzZXNcIiAvPlxuICAgPFZhbHVlIHZhbHVlPVwidW1icmVsbGFcIiAvPlxuICAgPFZhbHVlIHZhbHVlPVwibm90aGluZ1wiIC8+ICAgICBcbiA8L0RhdGFGaWVsZD5cbjwvRGF0YURpY3Rpb25hcnk+XG5cbjxUcmVlTW9kZWwgbW9kZWxOYW1lPVwiRGVjaXNpb25UcmVlXCIgZnVuY3Rpb25OYW1lPVwiY2xhc3NpZmljYXRpb25cIj5cbiA8TWluaW5nU2NoZW1hPlxuICAgPE1pbmluZ0ZpZWxkIG5hbWU9XCJ0ZW1wZXJhdHVyZVwiICB1c2FnZVR5cGU9XCJhY3RpdmVcIiAvPlxuICAgPE1pbmluZ0ZpZWxkIG5hbWU9XCJodW1pZGl0eVwiICB1c2FnZVR5cGU9XCJhY3RpdmVcIiAvPlxuICAgPE1pbmluZ0ZpZWxkIG5hbWU9XCJkZWNpc2lvblwiIHVzYWdlVHlwZT1cInByZWRpY3RlZFwiIC8+XG4gPC9NaW5pbmdTY2hlbWE+XG4gPE91dHB1dD5cbiAgIDxPdXRwdXRGaWVsZCBuYW1lPVwid2VhdGhlcmRlY2lzaW9uXCIgdGFyZ2V0RmllbGQ9XCJkZWNpc2lvblwiIC8+XG4gPC9PdXRwdXQ+XG4gXG4gPE5vZGUgc2NvcmU9XCJub3RoaW5nXCIgaWQ9XCIxXCI+XG4gICA8VHJ1ZSAvPlxuICAgPE5vZGUgc2NvcmU9XCJzdW5nbGFzc2VzXCIgaWQ9XCIyXCI+XG4gICAgIDxDb21wb3VuZFByZWRpY2F0ZSBib29sZWFuT3BlcmF0b3I9XCJhbmRcIj5cbiAgICAgICA8U2ltcGxlUHJlZGljYXRlIGZpZWxkPVwidGVtcGVyYXR1cmVcIiBvcGVyYXRvcj1cImdyZWF0ZXJUaGFuXCIgdmFsdWU9XCIyNVwiIC8+XG4gICAgICAgPFNpbXBsZVByZWRpY2F0ZSBmaWVsZD1cImh1bWlkaXR5XCIgb3BlcmF0b3I9XCJsZXNzT3JFcXVhbFwiIHZhbHVlPVwiMjBcIiAvPlxuICAgICA8L0NvbXBvdW5kUHJlZGljYXRlPlxuICAgPC9Ob2RlPlxuICAgPE5vZGUgc2NvcmU9XCJ1bWJyZWxsYVwiIGlkPVwiM1wiPlxuICAgICA8U2ltcGxlUHJlZGljYXRlIGZpZWxkPVwiaHVtaWRpdHlcIiBvcGVyYXRvcj1cImdyZWF0ZXJUaGFuXCIgdmFsdWU9XCI1MFwiIC8+XG4gICA8L05vZGU+XG4gICA8Tm9kZSBzY29yZT1cIm5vdGhpbmdcIiBpZD1cIjRcIj5cbiAgICAgPFRydWUgLz5cbiAgIDwvTm9kZT5cbiA8L05vZGU+XG48L1RyZWVNb2RlbD5cbjwvUE1NTD5cbmA7XG4iXSwibmFtZXMiOlsidXNlQ2FsbGJhY2siLCJ1c2VNZW1vIiwidXNlU3RhdGUiLCJnZXRNYXJzaGFsbGVyIiwiRG1uRWRpdG9yIiwibm9ybWFsaXplIiwiRG1uRWRpdG9yV3JhcHBlciIsImF2YWlsYWJsZU1vZGVsc0J5UGF0aCIsIm1vZGVsc0J5TmFtZXNwYWNlIiwiUkVGRVJFTkNFX01PREVMUyIsIkVtcHR5U3RvcnlXaXRoSW5jbHVkZWRNb2RlbHMiLCJhcmdzIiwic3RhdGUiLCJzZXRTdGF0ZSIsImluaXRpYWxEbW5NYXJzaGFsbGVyIiwiZW1wdHkiLCJyYXciLCJ1cGdyYWRlVG8iLCJtYXJzaGFsbGVyIiwic3RhY2siLCJwYXJzZXIiLCJwYXJzZSIsInBvaW50ZXIiLCJjdXJyZW50TW9kZWwiLCJleHRlcm5hbE1vZGVsc0J5TmFtZXNwYWNlIiwiX2EiLCJkZWZpbml0aW9ucyIsImltcG9ydCIsInJlZHVjZSIsImFjYyIsImkiLCJvblJlcXVlc3RFeHRlcm5hbE1vZGVsQnlQYXRoIiwicGF0aCIsIm9uUmVxdWVzdEV4dGVybmFsTW9kZWxzQXZhaWxhYmxlVG9JbmNsdWRlIiwiT2JqZWN0Iiwia2V5cyIsIm9uTW9kZWxDaGFuZ2UiLCJtb2RlbCIsInByZXYiLCJuZXdTdGFjayIsInNsaWNlIiwibGVuZ3RoIiwiX2pzeCIsIl9GcmFnbWVudCIsImNoaWxkcmVuIiwib3JpZ2luYWxWZXJzaW9uIiwiZXh0ZXJuYWxDb250ZXh0TmFtZSIsImV4dGVybmFsQ29udGV4dERlc2NyaXB0aW9uIiwidmFsaWRhdGlvbk1lc3NhZ2VzIiwiZXZhbHVhdGlvblJlc3VsdHNCeU5vZGVJZCIsImlzc3VlVHJhY2tlckhyZWYiLCJtZXRhIiwidGl0bGUiLCJjb21wb25lbnQiLCJpbmNsdWRlU3RvcmllcyIsIkVtcHR5V2l0aEF2YWlsYWJsZUV4dGVybmFsTW9kZWxzIiwicmVuZGVyIiwiTWFwIiwicGFyYW1ldGVycyIsImRvY3MiLCJzb3VyY2UiLCJvcmlnaW5hbFNvdXJjZSIsIl9jIiwiX2IiLCJfX25hbWVkRXhwb3J0c09yZGVyIiwiWE1MMlBNTUwiLCJnZXRQbW1sTmFtZXNwYWNlIiwiVVNFX0NBU0VfTU9ERUxTIiwidGVzdFRyZWVQbW1sIiwidGVzdFRyZWVQbW1sTW9kZWwiLCJhdmFpbGFibGVNb2RlbHMiLCJ0eXBlIiwic3VtQmttIiwibm9ybWFsaXplZFBvc2l4UGF0aFJlbGF0aXZlVG9UaGVPcGVuRmlsZSIsInN2ZyIsInN1bURpZmZEcyIsInZhbHVlcyIsInYiXSwic291cmNlUm9vdCI6IiJ9