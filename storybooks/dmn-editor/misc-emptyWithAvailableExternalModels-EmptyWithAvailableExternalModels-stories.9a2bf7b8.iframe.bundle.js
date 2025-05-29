(self["webpackChunk_kie_tools_dmn_editor"] = self["webpackChunk_kie_tools_dmn_editor"] || []).push([["misc-emptyWithAvailableExternalModels-EmptyWithAvailableExternalModels-stories"],{

/***/ "../pmml-editor-marshaller/dist/index.js":
/*!***********************************************!*\
  !*** ../pmml-editor-marshaller/dist/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

/***/ }),

/***/ "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_assignValue.js":
/*!***********************************************************************************!*\
  !*** ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_assignValue.js ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseAssignValue.js"),
    eq = __webpack_require__(/*! ./eq */ "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/eq.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),

/***/ "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseCreate.js":
/*!**********************************************************************************!*\
  !*** ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseCreate.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./isObject */ "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isObject.js");

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

module.exports = baseCreate;


/***/ }),

/***/ "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseKeysIn.js":
/*!**********************************************************************************!*\
  !*** ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseKeysIn.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./isObject */ "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isObject.js"),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_isPrototype.js"),
    nativeKeysIn = __webpack_require__(/*! ./_nativeKeysIn */ "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_nativeKeysIn.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeysIn;


/***/ }),

/***/ "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_cloneArrayBuffer.js":
/*!****************************************************************************************!*\
  !*** ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_cloneArrayBuffer.js ***!
  \****************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Uint8Array = __webpack_require__(/*! ./_Uint8Array */ "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_Uint8Array.js");

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

module.exports = cloneArrayBuffer;


/***/ }),

/***/ "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_cloneBuffer.js":
/*!***********************************************************************************!*\
  !*** ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_cloneBuffer.js ***!
  \***********************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var root = __webpack_require__(/*! ./_root */ "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_root.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;


/***/ }),

/***/ "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_cloneTypedArray.js":
/*!***************************************************************************************!*\
  !*** ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_cloneTypedArray.js ***!
  \***************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer */ "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_cloneArrayBuffer.js");

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

module.exports = cloneTypedArray;


/***/ }),

/***/ "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_copyArray.js":
/*!*********************************************************************************!*\
  !*** ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_copyArray.js ***!
  \*********************************************************************************/
/***/ ((module) => {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = copyArray;


/***/ }),

/***/ "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_copyObject.js":
/*!**********************************************************************************!*\
  !*** ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_copyObject.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assignValue = __webpack_require__(/*! ./_assignValue */ "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_assignValue.js"),
    baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseAssignValue.js");

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;


/***/ }),

/***/ "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_initCloneObject.js":
/*!***************************************************************************************!*\
  !*** ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_initCloneObject.js ***!
  \***************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseCreate = __webpack_require__(/*! ./_baseCreate */ "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseCreate.js"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getPrototype.js"),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_isPrototype.js");

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

module.exports = initCloneObject;


/***/ }),

/***/ "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_nativeKeysIn.js":
/*!************************************************************************************!*\
  !*** ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_nativeKeysIn.js ***!
  \************************************************************************************/
/***/ ((module) => {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


/***/ }),

/***/ "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/keysIn.js":
/*!*****************************************************************************!*\
  !*** ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/keysIn.js ***!
  \*****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_arrayLikeKeys.js"),
    baseKeysIn = __webpack_require__(/*! ./_baseKeysIn */ "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseKeysIn.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isArrayLike.js");

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlzYy1lbXB0eVdpdGhBdmFpbGFibGVFeHRlcm5hbE1vZGVscy1FbXB0eVdpdGhBdmFpbGFibGVFeHRlcm5hbE1vZGVscy1zdG9yaWVzLjlhMmJmN2I4LmlmcmFtZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFtQnNCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQ2lDO0FBRWtDO0FBQ3dHO0FBQ2xHO0FBQzlCO0FBQ3FCO0FBQ3JCO0FBQ2pFLFNBQVNVLDRCQUE0QkEsQ0FBQ0MsSUFBb0I7RUFDeEQsTUFBTSxDQUFDQyxLQUFLLEVBQUVDLFFBQVEsQ0FBQyxHQUFHWCwrQ0FBUSxDQUkvQixNQUFLO0lBQ04sTUFBTVksb0JBQW9CLEdBQUdYLHdFQUFhLENBQUNNLHNFQUFnQixDQUFDTSxLQUFLLENBQUNDLEdBQUcsRUFBRTtNQUNyRUMsU0FBUyxFQUFFO0tBQ1osQ0FBQztJQUNGLE9BQU87TUFDTEMsVUFBVSxFQUFFSixvQkFBb0I7TUFDaENLLEtBQUssRUFBRSxDQUFDZCxpR0FBUyxDQUFDUyxvQkFBb0IsQ0FBQ00sTUFBTSxDQUFDQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO01BQ3ZEQyxPQUFPLEVBQUU7S0FDVjtFQUNILENBQUMsQ0FBQztFQUNGLE1BQU1DLFlBQVksR0FBR1gsS0FBSyxDQUFDTyxLQUFLLENBQUNQLEtBQUssQ0FBQ1UsT0FBTyxDQUFDO0VBQy9DLE1BQU1FLHlCQUF5QixHQUFHdkIsOENBQU8sQ0FBc0IsTUFBSzs7SUFDbEUsT0FBTyxDQUFDLENBQUF3QixFQUFBLEdBQUFGLFlBQVksQ0FBQ0csV0FBVyxDQUFDQyxNQUFNLGNBQUFGLEVBQUEsY0FBQUEsRUFBQSxHQUFJLEVBQUUsRUFBRUcsTUFBTSxDQUFDLENBQUNDLEdBQUcsRUFBRUMsQ0FBQyxLQUFJO01BQy9ERCxHQUFHLENBQUNDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxHQUFHdEIsd0VBQWlCLENBQUNzQixDQUFDLENBQUMsYUFBYSxDQUFDLENBQUM7TUFDM0QsT0FBT0QsR0FBRztJQUNaLENBQUMsRUFBRSxFQUF5QixDQUFDO0VBQy9CLENBQUMsRUFBRSxDQUFDTixZQUFZLENBQUNHLFdBQVcsQ0FBQ0MsTUFBTSxDQUFDLENBQUM7RUFDckMsTUFBTUksNEJBQTRCLEdBQUcvQixrREFBVyxDQUErQixNQUFNZ0MsSUFBSSxJQUFHOztJQUMxRixPQUFPLENBQUFQLEVBQUEsR0FBQWxCLDRFQUFxQixDQUFDeUIsSUFBSSxDQUFDLGNBQUFQLEVBQUEsY0FBQUEsRUFBQSxHQUFJLElBQUk7RUFDNUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztFQUNOLE1BQU1RLHlDQUF5QyxHQUFHakMsa0RBQVcsQ0FBNEMsWUFBVztJQUNsSCxPQUFPa0MsTUFBTSxDQUFDQyxJQUFJLENBQUM1Qiw0RUFBcUIsQ0FBQztFQUMzQyxDQUFDLEVBQUUsRUFBRSxDQUFDO0VBQ04sTUFBTTZCLGFBQWEsR0FBR3BDLGtEQUFXLENBQW1CcUMsS0FBSyxJQUFHO0lBQzFEeEIsUUFBUSxDQUFDeUIsSUFBSSxJQUFHO01BQ2QsTUFBTUMsUUFBUSxHQUFHRCxJQUFJLENBQUNuQixLQUFLLENBQUNxQixLQUFLLENBQUMsQ0FBQyxFQUFFRixJQUFJLENBQUNoQixPQUFPLEdBQUcsQ0FBQyxDQUFDO01BQ3RELE9BQU87UUFDTCxHQUFHZ0IsSUFBSTtRQUNQbkIsS0FBSyxFQUFFLENBQUMsR0FBR29CLFFBQVEsRUFBRUYsS0FBSyxDQUFDO1FBQzNCZixPQUFPLEVBQUVpQixRQUFRLENBQUNFO09BQ25CO0lBQ0gsQ0FBQyxDQUFDO0VBQ0osQ0FBQyxFQUFFLEVBQUUsQ0FBQztFQUNOLE9BQU9DLHNEQUFBLENBQUFDLHVEQUFBO0lBQUFDLFFBQUEsRUFDRnRDLDBFQUFnQixDQUFDO01BQ2xCK0IsS0FBSyxFQUFFZCxZQUFZO01BQ25Cc0IsZUFBZSxFQUFFbEMsSUFBSSxDQUFDa0MsZUFBZTtNQUNyQ1QsYUFBYTtNQUNiTCw0QkFBNEI7TUFDNUJFLHlDQUF5QztNQUN6Q1QseUJBQXlCO01BQ3pCc0IsbUJBQW1CLEVBQUVuQyxJQUFJLENBQUNtQyxtQkFBbUI7TUFDN0NDLDBCQUEwQixFQUFFcEMsSUFBSSxDQUFDb0MsMEJBQTBCO01BQzNEQyxrQkFBa0IsRUFBRXJDLElBQUksQ0FBQ3FDLGtCQUFrQjtNQUMzQ0MseUJBQXlCLEVBQUV0QyxJQUFJLENBQUNzQyx5QkFBeUI7TUFDekRDLGdCQUFnQixFQUFFdkMsSUFBSSxDQUFDdUM7S0FDeEI7RUFBQyxFQUNDO0FBQ1A7QUFDQSxNQUFNQyxJQUFJLEdBQXlCO0VBQ2pDQyxLQUFLLEVBQUUsdUNBQXVDO0VBQzlDQyxTQUFTLEVBQUVqRCwyRUFBUztFQUNwQmtELGNBQWMsRUFBRTtDQUNqQjtBQUNELGlFQUFlSCxJQUFJLEVBQUM7QUFFYixNQUFNSSxnQ0FBZ0MsR0FBVTtFQUNyREMsTUFBTSxFQUFFN0MsSUFBSSxJQUFJRCw0QkFBNEIsQ0FBQ0MsSUFBSSxDQUFDO0VBQ2xEQSxJQUFJLEVBQUU7SUFDSjBCLEtBQUssRUFBRTVCLHNFQUFnQixDQUFDTSxLQUFLLENBQUNzQixLQUFLO0lBQ25DUSxlQUFlLEVBQUUsS0FBSztJQUN0QkkseUJBQXlCLEVBQUUsSUFBSVEsR0FBRyxFQUFFO0lBQ3BDViwwQkFBMEIsRUFBRSxrQ0FBa0M7SUFDOURELG1CQUFtQixFQUFFLHVDQUF1QztJQUM1RHRCLHlCQUF5QixFQUFFLEVBQUU7SUFDN0IwQixnQkFBZ0IsRUFBRSxFQUFFO0lBQ3BCRixrQkFBa0IsRUFBRTs7Q0FFdkI7QUFDRE8sZ0NBQWdDLENBQUNHLFVBQVUsR0FBRztFQUM1QyxHQUFHSCxnQ0FBZ0MsQ0FBQ0csVUFBVTtFQUM5Q0MsSUFBSSxFQUFFO0lBQ0osSUFBRyxDQUFBbEMsRUFBQSxHQUFBOEIsZ0NBQWdDLENBQUNHLFVBQVUsY0FBQWpDLEVBQUEsdUJBQUFBLEVBQUEsQ0FBRWtDLElBQUk7SUFDcERDLE1BQU0sRUFBRTtNQUNOQyxjQUFjLEVBQUUsMGFBQTBhO01BQzFiLElBQUcsQ0FBQUMsRUFBQSxJQUFBQyxFQUFBLEdBQUFSLGdDQUFnQyxDQUFDRyxVQUFVLGNBQUFLLEVBQUEsdUJBQUFBLEVBQUEsQ0FBRUosSUFBSSxjQUFBRyxFQUFBLHVCQUFBQSxFQUFBLENBQUVGLE1BQU07OztDQUdqRTtBQUFDLE1BQUFJLG1CQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUZpRjtBQUN0QjtBQUVXO0FBQ1Q7QUFDRTtBQUNuQjtBQUV2QyxNQUFNSyxpQkFBaUIsR0FBR0osMkVBQVEsQ0FBQ0csdURBQVksQ0FBQztBQUVoRCxNQUFNRSxlQUFlLEdBQThCLENBQ3hEO0VBQ0VDLElBQUksRUFBRSxLQUFLO0VBQ1hsQyxLQUFLLEVBQUVoQyxpR0FBUyxDQUFDOEQsb0VBQWUsQ0FBQ0ssTUFBTSxDQUFDbkMsS0FBSyxDQUFDO0VBQzlDb0Msd0NBQXdDLEVBQUUsK0JBQStCO0VBQ3pFQyxHQUFHLEVBQUU7Q0FDTixFQUNEO0VBQ0VILElBQUksRUFBRSxLQUFLO0VBQ1hsQyxLQUFLLEVBQUVoQyxpR0FBUyxDQUFDOEQsb0VBQWUsQ0FBQ1EsU0FBUyxDQUFDdEMsS0FBSyxDQUFDO0VBQ2pEb0Msd0NBQXdDLEVBQUUsa0NBQWtDO0VBQzVFQyxHQUFHLEVBQUU7Q0FDTixFQUNEO0VBQ0VILElBQUksRUFBRSxLQUFLO0VBQ1hsQyxLQUFLLEVBQUVoQyxpR0FBUyxDQUFDSSxzRUFBZ0IsQ0FBQ00sS0FBSyxDQUFDc0IsS0FBSyxDQUFDO0VBQzlDb0Msd0NBQXdDLEVBQUUsK0JBQStCO0VBQ3pFQyxHQUFHLEVBQUU7Q0FDTixFQUNEO0VBQ0VILElBQUksRUFBRSxNQUFNO0VBQ1psQyxLQUFLLEVBQUVnQyxpQkFBaUI7RUFDeEJJLHdDQUF3QyxFQUFFO0NBQzNDLENBQ0Y7QUFFTSxNQUFNbEUscUJBQXFCLEdBQTRDMkIsTUFBTSxDQUFDMEMsTUFBTSxDQUFDTixlQUFlLENBQUMsQ0FBQzFDLE1BQU0sQ0FDakgsQ0FBQ0MsR0FBRyxFQUFFZ0QsQ0FBQyxLQUFJO0VBQ1RoRCxHQUFHLENBQUNnRCxDQUFDLENBQUNKLHdDQUF3QyxDQUFDLEdBQUdJLENBQUM7RUFDbkQsT0FBT2hELEdBQUc7QUFDWixDQUFDLEVBQ0QsRUFBNkMsQ0FDOUM7QUFFTSxNQUFNckIsaUJBQWlCLEdBQUcwQixNQUFNLENBQUMwQyxNQUFNLENBQUNOLGVBQWUsQ0FBQyxDQUFDMUMsTUFBTSxDQUFDLENBQUNDLEdBQUcsRUFBRWdELENBQUMsS0FBSTtFQUNoRixJQUFJQSxDQUFDLENBQUNOLElBQUksS0FBSyxLQUFLLEVBQUU7SUFDcEIxQyxHQUFHLENBQUNnRCxDQUFDLENBQUN4QyxLQUFLLENBQUNYLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxHQUFHbUQsQ0FBQztFQUM3QyxDQUFDLE1BQU0sSUFBSUEsQ0FBQyxDQUFDTixJQUFJLEtBQUssTUFBTSxFQUFFO0lBQzVCMUMsR0FBRyxDQUFDcUMsc0ZBQWdCLENBQUM7TUFBRU8sd0NBQXdDLEVBQUVJLENBQUMsQ0FBQ0o7SUFBd0MsQ0FBRSxDQUFDLENBQUMsR0FBR0ksQ0FBQztFQUNySDtFQUNBLE9BQU9oRCxHQUFHO0FBQ1osQ0FBQyxFQUFFLEVBQW1DLENBQUM7Ozs7Ozs7Ozs7Ozs7O0FDbERoQyxNQUFNdUMsWUFBWSxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBMkMzQjs7Ozs7Ozs7OztBQy9ERCxzQkFBc0IsbUJBQU8sQ0FBQywyR0FBb0I7QUFDbEQsU0FBUyxtQkFBTyxDQUFDLCtFQUFNOztBQUV2QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLEdBQUc7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQzNCQSxlQUFlLG1CQUFPLENBQUMsMkZBQVk7O0FBRW5DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7Ozs7Ozs7Ozs7QUM3QkEsZUFBZSxtQkFBTyxDQUFDLDJGQUFZO0FBQ25DLGtCQUFrQixtQkFBTyxDQUFDLG1HQUFnQjtBQUMxQyxtQkFBbUIsbUJBQU8sQ0FBQyxxR0FBaUI7O0FBRTVDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDaENBLGlCQUFpQixtQkFBTyxDQUFDLGlHQUFlOztBQUV4QztBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixhQUFhLGFBQWE7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUNmQSxXQUFXLG1CQUFPLENBQUMscUZBQVM7O0FBRTVCO0FBQ0Esa0JBQWtCLEtBQTBCOztBQUU1QztBQUNBLGdDQUFnQyxRQUFhOztBQUU3QztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFNBQVM7QUFDcEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUNsQ0EsdUJBQXVCLG1CQUFPLENBQUMsNkdBQXFCOztBQUVwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFNBQVM7QUFDcEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDbkJBLGtCQUFrQixtQkFBTyxDQUFDLG1HQUFnQjtBQUMxQyxzQkFBc0IsbUJBQU8sQ0FBQywyR0FBb0I7O0FBRWxEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsT0FBTztBQUNsQixXQUFXLFFBQVEsVUFBVTtBQUM3QixXQUFXLFVBQVU7QUFDckIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qjs7QUFFeEI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDdkNBLGlCQUFpQixtQkFBTyxDQUFDLGlHQUFlO0FBQ3hDLG1CQUFtQixtQkFBTyxDQUFDLHFHQUFpQjtBQUM1QyxrQkFBa0IsbUJBQU8sQ0FBQyxtR0FBZ0I7O0FBRTFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDbkJBLG9CQUFvQixtQkFBTyxDQUFDLHVHQUFrQjtBQUM5QyxpQkFBaUIsbUJBQU8sQ0FBQyxpR0FBZTtBQUN4QyxrQkFBa0IsbUJBQU8sQ0FBQyxpR0FBZTs7QUFFekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Aa2llLXRvb2xzL2Rtbi1lZGl0b3IvLi4vcG1tbC1lZGl0b3ItbWFyc2hhbGxlci9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vQGtpZS10b29scy9kbW4tZWRpdG9yLy4vc3Rvcmllcy9taXNjL2VtcHR5V2l0aEF2YWlsYWJsZUV4dGVybmFsTW9kZWxzL0VtcHR5V2l0aEF2YWlsYWJsZUV4dGVybmFsTW9kZWxzLnN0b3JpZXMudHN4Iiwid2VicGFjazovL0BraWUtdG9vbHMvZG1uLWVkaXRvci8uL3N0b3JpZXMvbWlzYy9lbXB0eVdpdGhBdmFpbGFibGVFeHRlcm5hbE1vZGVscy9hdmFpbGFibGVNb2RlbHNUb0luY2x1ZGUudHMiLCJ3ZWJwYWNrOi8vQGtpZS10b29scy9kbW4tZWRpdG9yLy4vc3Rvcmllcy9taXNjL2VtcHR5V2l0aEF2YWlsYWJsZUV4dGVybmFsTW9kZWxzL3Rlc3RUcmVlUG1tbC50cyIsIndlYnBhY2s6Ly9Aa2llLXRvb2xzL2Rtbi1lZGl0b3IvLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2xvZGFzaEA0LjE3LjIxL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Fzc2lnblZhbHVlLmpzIiwid2VicGFjazovL0BraWUtdG9vbHMvZG1uLWVkaXRvci8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vbG9kYXNoQDQuMTcuMjEvbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUNyZWF0ZS5qcyIsIndlYnBhY2s6Ly9Aa2llLXRvb2xzL2Rtbi1lZGl0b3IvLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2xvZGFzaEA0LjE3LjIxL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VLZXlzSW4uanMiLCJ3ZWJwYWNrOi8vQGtpZS10b29scy9kbW4tZWRpdG9yLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9sb2Rhc2hANC4xNy4yMS9ub2RlX21vZHVsZXMvbG9kYXNoL19jbG9uZUFycmF5QnVmZmVyLmpzIiwid2VicGFjazovL0BraWUtdG9vbHMvZG1uLWVkaXRvci8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vbG9kYXNoQDQuMTcuMjEvbm9kZV9tb2R1bGVzL2xvZGFzaC9fY2xvbmVCdWZmZXIuanMiLCJ3ZWJwYWNrOi8vQGtpZS10b29scy9kbW4tZWRpdG9yLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9sb2Rhc2hANC4xNy4yMS9ub2RlX21vZHVsZXMvbG9kYXNoL19jbG9uZVR5cGVkQXJyYXkuanMiLCJ3ZWJwYWNrOi8vQGtpZS10b29scy9kbW4tZWRpdG9yLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9sb2Rhc2hANC4xNy4yMS9ub2RlX21vZHVsZXMvbG9kYXNoL19jb3B5QXJyYXkuanMiLCJ3ZWJwYWNrOi8vQGtpZS10b29scy9kbW4tZWRpdG9yLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9sb2Rhc2hANC4xNy4yMS9ub2RlX21vZHVsZXMvbG9kYXNoL19jb3B5T2JqZWN0LmpzIiwid2VicGFjazovL0BraWUtdG9vbHMvZG1uLWVkaXRvci8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vbG9kYXNoQDQuMTcuMjEvbm9kZV9tb2R1bGVzL2xvZGFzaC9faW5pdENsb25lT2JqZWN0LmpzIiwid2VicGFjazovL0BraWUtdG9vbHMvZG1uLWVkaXRvci8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vbG9kYXNoQDQuMTcuMjEvbm9kZV9tb2R1bGVzL2xvZGFzaC9fbmF0aXZlS2V5c0luLmpzIiwid2VicGFjazovL0BraWUtdG9vbHMvZG1uLWVkaXRvci8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vbG9kYXNoQDQuMTcuMjEvbm9kZV9tb2R1bGVzL2xvZGFzaC9rZXlzSW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIExpY2Vuc2VkIHRvIHRoZSBBcGFjaGUgU29mdHdhcmUgRm91bmRhdGlvbiAoQVNGKSB1bmRlciBvbmVcbiAqIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiAgU2VlIHRoZSBOT1RJQ0UgZmlsZVxuICogZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb25cbiAqIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLiAgVGhlIEFTRiBsaWNlbnNlcyB0aGlzIGZpbGVcbiAqIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGVcbiAqIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuICogd2l0aCB0aGUgTGljZW5zZS4gIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsXG4gKiBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxuICogXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcbiAqIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZVxuICogc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9uc1xuICogdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuZXhwb3J0ICogZnJvbSBcIi4vYXBpXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9tYXJzaGFsbGVyXCI7XG4iLCIvKlxuICogTGljZW5zZWQgdG8gdGhlIEFwYWNoZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIChBU0YpIHVuZGVyIG9uZVxuICogb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuICBTZWUgdGhlIE5PVElDRSBmaWxlXG4gKiBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvblxuICogcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuICBUaGUgQVNGIGxpY2Vuc2VzIHRoaXMgZmlsZVxuICogdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZVxuICogXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4gKiB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZyxcbiAqIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXG4gKiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxuICogS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlXG4gKiBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zXG4gKiB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHR5cGUgeyBNZXRhLCBTdG9yeU9iaiB9IGZyb20gXCJAc3Rvcnlib29rL3JlYWN0XCI7XG5pbXBvcnQgeyBEbW5MYXRlc3RNb2RlbCwgRG1uTWFyc2hhbGxlciwgZ2V0TWFyc2hhbGxlciB9IGZyb20gXCJAa2llLXRvb2xzL2Rtbi1tYXJzaGFsbGVyXCI7XG5pbXBvcnQgeyBEbW5FZGl0b3IsIERtbkVkaXRvclByb3BzLCBFeHRlcm5hbE1vZGVsc0luZGV4LCBPblJlcXVlc3RFeHRlcm5hbE1vZGVsQnlQYXRoLCBPblJlcXVlc3RFeHRlcm5hbE1vZGVsc0F2YWlsYWJsZVRvSW5jbHVkZSwgT25EbW5Nb2RlbENoYW5nZSB9IGZyb20gXCJAa2llLXRvb2xzL2Rtbi1lZGl0b3IvZGlzdC9EbW5FZGl0b3JcIjtcbmltcG9ydCB7IG5vcm1hbGl6ZSwgTm9ybWFsaXplZCB9IGZyb20gXCJAa2llLXRvb2xzL2Rtbi1tYXJzaGFsbGVyL2Rpc3Qvbm9ybWFsaXphdGlvbi9ub3JtYWxpemVcIjtcbmltcG9ydCB7IERtbkVkaXRvcldyYXBwZXIgfSBmcm9tIFwiLi4vLi4vZG1uRWRpdG9yU3Rvcmllc1dyYXBwZXJcIjtcbmltcG9ydCB7IGF2YWlsYWJsZU1vZGVsc0J5UGF0aCwgbW9kZWxzQnlOYW1lc3BhY2UgfSBmcm9tIFwiLi9hdmFpbGFibGVNb2RlbHNUb0luY2x1ZGVcIjtcbmltcG9ydCB7IFJFRkVSRU5DRV9NT0RFTFMgfSBmcm9tIFwiLi4vLi4vcmVmZXJlbmNlL21vZGVscy9tb2RlbHNcIjtcbmZ1bmN0aW9uIEVtcHR5U3RvcnlXaXRoSW5jbHVkZWRNb2RlbHMoYXJnczogRG1uRWRpdG9yUHJvcHMpIHtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZTx7XG4gICAgbWFyc2hhbGxlcjogRG1uTWFyc2hhbGxlcjtcbiAgICBzdGFjazogTm9ybWFsaXplZDxEbW5MYXRlc3RNb2RlbD5bXTtcbiAgICBwb2ludGVyOiBudW1iZXI7XG4gIH0+KCgpID0+IHtcbiAgICBjb25zdCBpbml0aWFsRG1uTWFyc2hhbGxlciA9IGdldE1hcnNoYWxsZXIoUkVGRVJFTkNFX01PREVMUy5lbXB0eS5yYXcsIHtcbiAgICAgIHVwZ3JhZGVUbzogXCJsYXRlc3RcIlxuICAgIH0pO1xuICAgIHJldHVybiB7XG4gICAgICBtYXJzaGFsbGVyOiBpbml0aWFsRG1uTWFyc2hhbGxlcixcbiAgICAgIHN0YWNrOiBbbm9ybWFsaXplKGluaXRpYWxEbW5NYXJzaGFsbGVyLnBhcnNlci5wYXJzZSgpKV0sXG4gICAgICBwb2ludGVyOiAwXG4gICAgfTtcbiAgfSk7XG4gIGNvbnN0IGN1cnJlbnRNb2RlbCA9IHN0YXRlLnN0YWNrW3N0YXRlLnBvaW50ZXJdO1xuICBjb25zdCBleHRlcm5hbE1vZGVsc0J5TmFtZXNwYWNlID0gdXNlTWVtbzxFeHRlcm5hbE1vZGVsc0luZGV4PigoKSA9PiB7XG4gICAgcmV0dXJuIChjdXJyZW50TW9kZWwuZGVmaW5pdGlvbnMuaW1wb3J0ID8/IFtdKS5yZWR1Y2UoKGFjYywgaSkgPT4ge1xuICAgICAgYWNjW2lbXCJAX25hbWVzcGFjZVwiXV0gPSBtb2RlbHNCeU5hbWVzcGFjZVtpW1wiQF9uYW1lc3BhY2VcIl1dO1xuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB7fSBhcyBFeHRlcm5hbE1vZGVsc0luZGV4KTtcbiAgfSwgW2N1cnJlbnRNb2RlbC5kZWZpbml0aW9ucy5pbXBvcnRdKTtcbiAgY29uc3Qgb25SZXF1ZXN0RXh0ZXJuYWxNb2RlbEJ5UGF0aCA9IHVzZUNhbGxiYWNrPE9uUmVxdWVzdEV4dGVybmFsTW9kZWxCeVBhdGg+KGFzeW5jIHBhdGggPT4ge1xuICAgIHJldHVybiBhdmFpbGFibGVNb2RlbHNCeVBhdGhbcGF0aF0gPz8gbnVsbDtcbiAgfSwgW10pO1xuICBjb25zdCBvblJlcXVlc3RFeHRlcm5hbE1vZGVsc0F2YWlsYWJsZVRvSW5jbHVkZSA9IHVzZUNhbGxiYWNrPE9uUmVxdWVzdEV4dGVybmFsTW9kZWxzQXZhaWxhYmxlVG9JbmNsdWRlPihhc3luYyAoKSA9PiB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGF2YWlsYWJsZU1vZGVsc0J5UGF0aCk7XG4gIH0sIFtdKTtcbiAgY29uc3Qgb25Nb2RlbENoYW5nZSA9IHVzZUNhbGxiYWNrPE9uRG1uTW9kZWxDaGFuZ2U+KG1vZGVsID0+IHtcbiAgICBzZXRTdGF0ZShwcmV2ID0+IHtcbiAgICAgIGNvbnN0IG5ld1N0YWNrID0gcHJldi5zdGFjay5zbGljZSgwLCBwcmV2LnBvaW50ZXIgKyAxKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnByZXYsXG4gICAgICAgIHN0YWNrOiBbLi4ubmV3U3RhY2ssIG1vZGVsXSxcbiAgICAgICAgcG9pbnRlcjogbmV3U3RhY2subGVuZ3RoXG4gICAgICB9O1xuICAgIH0pO1xuICB9LCBbXSk7XG4gIHJldHVybiA8PlxuICAgICAge0RtbkVkaXRvcldyYXBwZXIoe1xuICAgICAgbW9kZWw6IGN1cnJlbnRNb2RlbCxcbiAgICAgIG9yaWdpbmFsVmVyc2lvbjogYXJncy5vcmlnaW5hbFZlcnNpb24sXG4gICAgICBvbk1vZGVsQ2hhbmdlLFxuICAgICAgb25SZXF1ZXN0RXh0ZXJuYWxNb2RlbEJ5UGF0aCxcbiAgICAgIG9uUmVxdWVzdEV4dGVybmFsTW9kZWxzQXZhaWxhYmxlVG9JbmNsdWRlLFxuICAgICAgZXh0ZXJuYWxNb2RlbHNCeU5hbWVzcGFjZSxcbiAgICAgIGV4dGVybmFsQ29udGV4dE5hbWU6IGFyZ3MuZXh0ZXJuYWxDb250ZXh0TmFtZSxcbiAgICAgIGV4dGVybmFsQ29udGV4dERlc2NyaXB0aW9uOiBhcmdzLmV4dGVybmFsQ29udGV4dERlc2NyaXB0aW9uLFxuICAgICAgdmFsaWRhdGlvbk1lc3NhZ2VzOiBhcmdzLnZhbGlkYXRpb25NZXNzYWdlcyxcbiAgICAgIGV2YWx1YXRpb25SZXN1bHRzQnlOb2RlSWQ6IGFyZ3MuZXZhbHVhdGlvblJlc3VsdHNCeU5vZGVJZCxcbiAgICAgIGlzc3VlVHJhY2tlckhyZWY6IGFyZ3MuaXNzdWVUcmFja2VySHJlZlxuICAgIH0pfVxuICAgIDwvPjtcbn1cbmNvbnN0IG1ldGE6IE1ldGE8RG1uRWRpdG9yUHJvcHM+ID0ge1xuICB0aXRsZTogXCJNaXNjL0VtcHR5V2l0aEF2YWlsYWJsZUV4dGVybmFsTW9kZWxzXCIsXG4gIGNvbXBvbmVudDogRG1uRWRpdG9yLFxuICBpbmNsdWRlU3RvcmllczogL15bQS1aXS9cbn07XG5leHBvcnQgZGVmYXVsdCBtZXRhO1xudHlwZSBTdG9yeSA9IFN0b3J5T2JqPHR5cGVvZiBFbXB0eVN0b3J5V2l0aEluY2x1ZGVkTW9kZWxzPjtcbmV4cG9ydCBjb25zdCBFbXB0eVdpdGhBdmFpbGFibGVFeHRlcm5hbE1vZGVsczogU3RvcnkgPSB7XG4gIHJlbmRlcjogYXJncyA9PiBFbXB0eVN0b3J5V2l0aEluY2x1ZGVkTW9kZWxzKGFyZ3MpLFxuICBhcmdzOiB7XG4gICAgbW9kZWw6IFJFRkVSRU5DRV9NT0RFTFMuZW1wdHkubW9kZWwsXG4gICAgb3JpZ2luYWxWZXJzaW9uOiBcIjEuNVwiLFxuICAgIGV2YWx1YXRpb25SZXN1bHRzQnlOb2RlSWQ6IG5ldyBNYXAoKSxcbiAgICBleHRlcm5hbENvbnRleHREZXNjcmlwdGlvbjogXCJUaGUgU3Rvcnlib29rIGZvciB0aGUgRE1OIEVkaXRvclwiLFxuICAgIGV4dGVybmFsQ29udGV4dE5hbWU6IFwiQXBhY2hlIEtJRSA6OiBETU4gRWRpdG9yIDo6IFN0b3J5Ym9va1wiLFxuICAgIGV4dGVybmFsTW9kZWxzQnlOYW1lc3BhY2U6IHt9LFxuICAgIGlzc3VlVHJhY2tlckhyZWY6IFwiXCIsXG4gICAgdmFsaWRhdGlvbk1lc3NhZ2VzOiB7fVxuICB9XG59O1xuRW1wdHlXaXRoQXZhaWxhYmxlRXh0ZXJuYWxNb2RlbHMucGFyYW1ldGVycyA9IHtcbiAgLi4uRW1wdHlXaXRoQXZhaWxhYmxlRXh0ZXJuYWxNb2RlbHMucGFyYW1ldGVycyxcbiAgZG9jczoge1xuICAgIC4uLkVtcHR5V2l0aEF2YWlsYWJsZUV4dGVybmFsTW9kZWxzLnBhcmFtZXRlcnM/LmRvY3MsXG4gICAgc291cmNlOiB7XG4gICAgICBvcmlnaW5hbFNvdXJjZTogXCJ7XFxuICByZW5kZXI6IGFyZ3MgPT4gRW1wdHlTdG9yeVdpdGhJbmNsdWRlZE1vZGVscyhhcmdzKSxcXG4gIGFyZ3M6IHtcXG4gICAgbW9kZWw6IFJFRkVSRU5DRV9NT0RFTFMuZW1wdHkubW9kZWwsXFxuICAgIG9yaWdpbmFsVmVyc2lvbjogXFxcIjEuNVxcXCIsXFxuICAgIGV2YWx1YXRpb25SZXN1bHRzQnlOb2RlSWQ6IG5ldyBNYXAoKSxcXG4gICAgZXh0ZXJuYWxDb250ZXh0RGVzY3JpcHRpb246IFxcXCJUaGUgU3Rvcnlib29rIGZvciB0aGUgRE1OIEVkaXRvclxcXCIsXFxuICAgIGV4dGVybmFsQ29udGV4dE5hbWU6IFxcXCJBcGFjaGUgS0lFIDo6IERNTiBFZGl0b3IgOjogU3Rvcnlib29rXFxcIixcXG4gICAgZXh0ZXJuYWxNb2RlbHNCeU5hbWVzcGFjZToge30sXFxuICAgIGlzc3VlVHJhY2tlckhyZWY6IFxcXCJcXFwiLFxcbiAgICB2YWxpZGF0aW9uTWVzc2FnZXM6IHt9XFxuICB9XFxufVwiLFxuICAgICAgLi4uRW1wdHlXaXRoQXZhaWxhYmxlRXh0ZXJuYWxNb2RlbHMucGFyYW1ldGVycz8uZG9jcz8uc291cmNlXG4gICAgfVxuICB9XG59OyIsIi8qXG4gKiBMaWNlbnNlZCB0byB0aGUgQXBhY2hlIFNvZnR3YXJlIEZvdW5kYXRpb24gKEFTRikgdW5kZXIgb25lXG4gKiBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gIFNlZSB0aGUgTk9USUNFIGZpbGVcbiAqIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uXG4gKiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC4gIFRoZSBBU0YgbGljZW5zZXMgdGhpcyBmaWxlXG4gKiB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlXG4gKiBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2VcbiAqIHdpdGggdGhlIExpY2Vuc2UuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLFxuICogc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cbiAqIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXG4gKiBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGVcbiAqIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnNcbiAqIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IG5vcm1hbGl6ZSB9IGZyb20gXCJAa2llLXRvb2xzL2Rtbi1tYXJzaGFsbGVyL2Rpc3Qvbm9ybWFsaXphdGlvbi9ub3JtYWxpemVcIjtcbmltcG9ydCB7IFhNTDJQTU1MIH0gZnJvbSBcIkBraWUtdG9vbHMvcG1tbC1lZGl0b3ItbWFyc2hhbGxlclwiO1xuaW1wb3J0ICogYXMgRG1uRWRpdG9yIGZyb20gXCJAa2llLXRvb2xzL2Rtbi1lZGl0b3IvZGlzdC9EbW5FZGl0b3JcIjtcbmltcG9ydCB7IGdldFBtbWxOYW1lc3BhY2UgfSBmcm9tIFwiQGtpZS10b29scy9kbW4tZWRpdG9yL2Rpc3QvcG1tbC9wbW1sXCI7XG5pbXBvcnQgeyBVU0VfQ0FTRV9NT0RFTFMgfSBmcm9tIFwiLi4vLi4vdXNlQ2FzZXMvbW9kZWxzL21vZGVsc1wiO1xuaW1wb3J0IHsgUkVGRVJFTkNFX01PREVMUyB9IGZyb20gXCIuLi8uLi9yZWZlcmVuY2UvbW9kZWxzL21vZGVsc1wiO1xuaW1wb3J0IHsgdGVzdFRyZWVQbW1sIH0gZnJvbSBcIi4vdGVzdFRyZWVQbW1sXCI7XG5cbmV4cG9ydCBjb25zdCB0ZXN0VHJlZVBtbWxNb2RlbCA9IFhNTDJQTU1MKHRlc3RUcmVlUG1tbCk7XG5cbmV4cG9ydCBjb25zdCBhdmFpbGFibGVNb2RlbHM6IERtbkVkaXRvci5FeHRlcm5hbE1vZGVsW10gPSBbXG4gIHtcbiAgICB0eXBlOiBcImRtblwiLFxuICAgIG1vZGVsOiBub3JtYWxpemUoVVNFX0NBU0VfTU9ERUxTLnN1bUJrbS5tb2RlbCksXG4gICAgbm9ybWFsaXplZFBvc2l4UGF0aFJlbGF0aXZlVG9UaGVPcGVuRmlsZTogXCJzdG9yeWJvb2svdXNlQ2FzZXMvc3VtQmttLmRtblwiLFxuICAgIHN2ZzogXCJcIixcbiAgfSxcbiAge1xuICAgIHR5cGU6IFwiZG1uXCIsXG4gICAgbW9kZWw6IG5vcm1hbGl6ZShVU0VfQ0FTRV9NT0RFTFMuc3VtRGlmZkRzLm1vZGVsKSxcbiAgICBub3JtYWxpemVkUG9zaXhQYXRoUmVsYXRpdmVUb1RoZU9wZW5GaWxlOiBcInN0b3J5Ym9vay91c2VDYXNlcy9zdW1EaWZmRHMuZG1uXCIsXG4gICAgc3ZnOiBcIlwiLFxuICB9LFxuICB7XG4gICAgdHlwZTogXCJkbW5cIixcbiAgICBtb2RlbDogbm9ybWFsaXplKFJFRkVSRU5DRV9NT0RFTFMuZW1wdHkubW9kZWwpLFxuICAgIG5vcm1hbGl6ZWRQb3NpeFBhdGhSZWxhdGl2ZVRvVGhlT3BlbkZpbGU6IFwic3Rvcnlib29rL3JlZmVyZW5jZS9lbXB0eS5kbW5cIixcbiAgICBzdmc6IFwiXCIsXG4gIH0sXG4gIHtcbiAgICB0eXBlOiBcInBtbWxcIixcbiAgICBtb2RlbDogdGVzdFRyZWVQbW1sTW9kZWwsXG4gICAgbm9ybWFsaXplZFBvc2l4UGF0aFJlbGF0aXZlVG9UaGVPcGVuRmlsZTogXCJzdG9yeWJvb2svdXNlQ2FzZXMvdGVzdFRyZWUucG1tbFwiLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IGF2YWlsYWJsZU1vZGVsc0J5UGF0aDogUmVjb3JkPHN0cmluZywgRG1uRWRpdG9yLkV4dGVybmFsTW9kZWw+ID0gT2JqZWN0LnZhbHVlcyhhdmFpbGFibGVNb2RlbHMpLnJlZHVjZShcbiAgKGFjYywgdikgPT4ge1xuICAgIGFjY1t2Lm5vcm1hbGl6ZWRQb3NpeFBhdGhSZWxhdGl2ZVRvVGhlT3BlbkZpbGVdID0gdjtcbiAgICByZXR1cm4gYWNjO1xuICB9LFxuICB7fSBhcyBSZWNvcmQ8c3RyaW5nLCBEbW5FZGl0b3IuRXh0ZXJuYWxNb2RlbD5cbik7XG5cbmV4cG9ydCBjb25zdCBtb2RlbHNCeU5hbWVzcGFjZSA9IE9iamVjdC52YWx1ZXMoYXZhaWxhYmxlTW9kZWxzKS5yZWR1Y2UoKGFjYywgdikgPT4ge1xuICBpZiAodi50eXBlID09PSBcImRtblwiKSB7XG4gICAgYWNjW3YubW9kZWwuZGVmaW5pdGlvbnNbXCJAX25hbWVzcGFjZVwiXV0gPSB2O1xuICB9IGVsc2UgaWYgKHYudHlwZSA9PT0gXCJwbW1sXCIpIHtcbiAgICBhY2NbZ2V0UG1tbE5hbWVzcGFjZSh7IG5vcm1hbGl6ZWRQb3NpeFBhdGhSZWxhdGl2ZVRvVGhlT3BlbkZpbGU6IHYubm9ybWFsaXplZFBvc2l4UGF0aFJlbGF0aXZlVG9UaGVPcGVuRmlsZSB9KV0gPSB2O1xuICB9XG4gIHJldHVybiBhY2M7XG59LCB7fSBhcyBEbW5FZGl0b3IuRXh0ZXJuYWxNb2RlbHNJbmRleCk7XG4iLCIvKlxuICogTGljZW5zZWQgdG8gdGhlIEFwYWNoZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIChBU0YpIHVuZGVyIG9uZVxuICogb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuICBTZWUgdGhlIE5PVElDRSBmaWxlXG4gKiBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvblxuICogcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuICBUaGUgQVNGIGxpY2Vuc2VzIHRoaXMgZmlsZVxuICogdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZVxuICogXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4gKiB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZyxcbiAqIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXG4gKiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxuICogS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlXG4gKiBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zXG4gKiB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vLyBDb3BpZWQgZnJvbSBrb2dpdG8tZXhhbXBsZXMva29naXRvLXF1YXJrdXMtZXhhbXBsZXMvZG1uLXBtbWwtcXVhcmt1cy1leGFtcGxlL3NyYy9tYWluL3Jlc291cmNlc1xuZXhwb3J0IGNvbnN0IHRlc3RUcmVlUG1tbCA9IGA8UE1NTCB2ZXJzaW9uPVwiNC4yXCIgeHNpOnNjaGVtYUxvY2F0aW9uPVwiaHR0cDovL3d3dy5kbWcub3JnL1BNTUwtNF8yIGh0dHA6Ly93d3cuZG1nLm9yZy92NC0yLTEvcG1tbC00LTIueHNkXCIgeG1sbnM6eHNpPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMS9YTUxTY2hlbWEtaW5zdGFuY2VcIlxueG1sbnM9XCJodHRwOi8vd3d3LmRtZy5vcmcvUE1NTC00XzJcIj5cbjxIZWFkZXI+XG4gPEFwcGxpY2F0aW9uIG5hbWU9XCJEcm9vbHMtUE1NTFwiIHZlcnNpb249XCI3LjAuMC1TTkFQU0hPVFwiIC8+XG48L0hlYWRlcj5cblxuPERhdGFEaWN0aW9uYXJ5IG51bWJlck9mRmllbGRzPVwiM1wiPlxuIDxEYXRhRmllbGQgbmFtZT1cInRlbXBlcmF0dXJlXCIgZGF0YVR5cGU9XCJkb3VibGVcIiBvcHR5cGU9XCJjb250aW51b3VzXCIgLz5cbiA8RGF0YUZpZWxkIG5hbWU9XCJodW1pZGl0eVwiIGRhdGFUeXBlPVwiZG91YmxlXCIgb3B0eXBlPVwiY29udGludW91c1wiIC8+ICAgXG4gPERhdGFGaWVsZCBuYW1lPVwiZGVjaXNpb25cIiBkYXRhVHlwZT1cInN0cmluZ1wiIG9wdHlwZT1cImNhdGVnb3JpY2FsXCI+IFxuICAgPFZhbHVlIHZhbHVlPVwic3VuZ2xhc3Nlc1wiIC8+XG4gICA8VmFsdWUgdmFsdWU9XCJ1bWJyZWxsYVwiIC8+XG4gICA8VmFsdWUgdmFsdWU9XCJub3RoaW5nXCIgLz4gICAgIFxuIDwvRGF0YUZpZWxkPlxuPC9EYXRhRGljdGlvbmFyeT5cblxuPFRyZWVNb2RlbCBtb2RlbE5hbWU9XCJEZWNpc2lvblRyZWVcIiBmdW5jdGlvbk5hbWU9XCJjbGFzc2lmaWNhdGlvblwiPlxuIDxNaW5pbmdTY2hlbWE+XG4gICA8TWluaW5nRmllbGQgbmFtZT1cInRlbXBlcmF0dXJlXCIgIHVzYWdlVHlwZT1cImFjdGl2ZVwiIC8+XG4gICA8TWluaW5nRmllbGQgbmFtZT1cImh1bWlkaXR5XCIgIHVzYWdlVHlwZT1cImFjdGl2ZVwiIC8+XG4gICA8TWluaW5nRmllbGQgbmFtZT1cImRlY2lzaW9uXCIgdXNhZ2VUeXBlPVwicHJlZGljdGVkXCIgLz5cbiA8L01pbmluZ1NjaGVtYT5cbiA8T3V0cHV0PlxuICAgPE91dHB1dEZpZWxkIG5hbWU9XCJ3ZWF0aGVyZGVjaXNpb25cIiB0YXJnZXRGaWVsZD1cImRlY2lzaW9uXCIgLz5cbiA8L091dHB1dD5cbiBcbiA8Tm9kZSBzY29yZT1cIm5vdGhpbmdcIiBpZD1cIjFcIj5cbiAgIDxUcnVlIC8+XG4gICA8Tm9kZSBzY29yZT1cInN1bmdsYXNzZXNcIiBpZD1cIjJcIj5cbiAgICAgPENvbXBvdW5kUHJlZGljYXRlIGJvb2xlYW5PcGVyYXRvcj1cImFuZFwiPlxuICAgICAgIDxTaW1wbGVQcmVkaWNhdGUgZmllbGQ9XCJ0ZW1wZXJhdHVyZVwiIG9wZXJhdG9yPVwiZ3JlYXRlclRoYW5cIiB2YWx1ZT1cIjI1XCIgLz5cbiAgICAgICA8U2ltcGxlUHJlZGljYXRlIGZpZWxkPVwiaHVtaWRpdHlcIiBvcGVyYXRvcj1cImxlc3NPckVxdWFsXCIgdmFsdWU9XCIyMFwiIC8+XG4gICAgIDwvQ29tcG91bmRQcmVkaWNhdGU+XG4gICA8L05vZGU+XG4gICA8Tm9kZSBzY29yZT1cInVtYnJlbGxhXCIgaWQ9XCIzXCI+XG4gICAgIDxTaW1wbGVQcmVkaWNhdGUgZmllbGQ9XCJodW1pZGl0eVwiIG9wZXJhdG9yPVwiZ3JlYXRlclRoYW5cIiB2YWx1ZT1cIjUwXCIgLz5cbiAgIDwvTm9kZT5cbiAgIDxOb2RlIHNjb3JlPVwibm90aGluZ1wiIGlkPVwiNFwiPlxuICAgICA8VHJ1ZSAvPlxuICAgPC9Ob2RlPlxuIDwvTm9kZT5cbjwvVHJlZU1vZGVsPlxuPC9QTU1MPlxuYDtcbiIsInZhciBiYXNlQXNzaWduVmFsdWUgPSByZXF1aXJlKCcuL19iYXNlQXNzaWduVmFsdWUnKSxcbiAgICBlcSA9IHJlcXVpcmUoJy4vZXEnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBBc3NpZ25zIGB2YWx1ZWAgdG8gYGtleWAgb2YgYG9iamVjdGAgaWYgdGhlIGV4aXN0aW5nIHZhbHVlIGlzIG5vdCBlcXVpdmFsZW50XG4gKiB1c2luZyBbYFNhbWVWYWx1ZVplcm9gXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1zYW1ldmFsdWV6ZXJvKVxuICogZm9yIGVxdWFsaXR5IGNvbXBhcmlzb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBhc3NpZ24uXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBhc3NpZ24uXG4gKi9cbmZ1bmN0aW9uIGFzc2lnblZhbHVlKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICB2YXIgb2JqVmFsdWUgPSBvYmplY3Rba2V5XTtcbiAgaWYgKCEoaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkgJiYgZXEob2JqVmFsdWUsIHZhbHVlKSkgfHxcbiAgICAgICh2YWx1ZSA9PT0gdW5kZWZpbmVkICYmICEoa2V5IGluIG9iamVjdCkpKSB7XG4gICAgYmFzZUFzc2lnblZhbHVlKG9iamVjdCwga2V5LCB2YWx1ZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhc3NpZ25WYWx1ZTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0Q3JlYXRlID0gT2JqZWN0LmNyZWF0ZTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5jcmVhdGVgIHdpdGhvdXQgc3VwcG9ydCBmb3IgYXNzaWduaW5nXG4gKiBwcm9wZXJ0aWVzIHRvIHRoZSBjcmVhdGVkIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHByb3RvIFRoZSBvYmplY3QgdG8gaW5oZXJpdCBmcm9tLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbmV3IG9iamVjdC5cbiAqL1xudmFyIGJhc2VDcmVhdGUgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIG9iamVjdCgpIHt9XG4gIHJldHVybiBmdW5jdGlvbihwcm90bykge1xuICAgIGlmICghaXNPYmplY3QocHJvdG8pKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuICAgIGlmIChvYmplY3RDcmVhdGUpIHtcbiAgICAgIHJldHVybiBvYmplY3RDcmVhdGUocHJvdG8pO1xuICAgIH1cbiAgICBvYmplY3QucHJvdG90eXBlID0gcHJvdG87XG4gICAgdmFyIHJlc3VsdCA9IG5ldyBvYmplY3Q7XG4gICAgb2JqZWN0LnByb3RvdHlwZSA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xufSgpKTtcblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlQ3JlYXRlO1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpLFxuICAgIGlzUHJvdG90eXBlID0gcmVxdWlyZSgnLi9faXNQcm90b3R5cGUnKSxcbiAgICBuYXRpdmVLZXlzSW4gPSByZXF1aXJlKCcuL19uYXRpdmVLZXlzSW4nKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5rZXlzSW5gIHdoaWNoIGRvZXNuJ3QgdHJlYXQgc3BhcnNlIGFycmF5cyBhcyBkZW5zZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gYmFzZUtleXNJbihvYmplY3QpIHtcbiAgaWYgKCFpc09iamVjdChvYmplY3QpKSB7XG4gICAgcmV0dXJuIG5hdGl2ZUtleXNJbihvYmplY3QpO1xuICB9XG4gIHZhciBpc1Byb3RvID0gaXNQcm90b3R5cGUob2JqZWN0KSxcbiAgICAgIHJlc3VsdCA9IFtdO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICBpZiAoIShrZXkgPT0gJ2NvbnN0cnVjdG9yJyAmJiAoaXNQcm90byB8fCAhaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkpKSkge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlS2V5c0luO1xuIiwidmFyIFVpbnQ4QXJyYXkgPSByZXF1aXJlKCcuL19VaW50OEFycmF5Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIGBhcnJheUJ1ZmZlcmAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXlCdWZmZXJ9IGFycmF5QnVmZmVyIFRoZSBhcnJheSBidWZmZXIgdG8gY2xvbmUuXG4gKiBAcmV0dXJucyB7QXJyYXlCdWZmZXJ9IFJldHVybnMgdGhlIGNsb25lZCBhcnJheSBidWZmZXIuXG4gKi9cbmZ1bmN0aW9uIGNsb25lQXJyYXlCdWZmZXIoYXJyYXlCdWZmZXIpIHtcbiAgdmFyIHJlc3VsdCA9IG5ldyBhcnJheUJ1ZmZlci5jb25zdHJ1Y3RvcihhcnJheUJ1ZmZlci5ieXRlTGVuZ3RoKTtcbiAgbmV3IFVpbnQ4QXJyYXkocmVzdWx0KS5zZXQobmV3IFVpbnQ4QXJyYXkoYXJyYXlCdWZmZXIpKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjbG9uZUFycmF5QnVmZmVyO1xuIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZXhwb3J0c2AuICovXG52YXIgZnJlZUV4cG9ydHMgPSB0eXBlb2YgZXhwb3J0cyA9PSAnb2JqZWN0JyAmJiBleHBvcnRzICYmICFleHBvcnRzLm5vZGVUeXBlICYmIGV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgbW9kdWxlYC4gKi9cbnZhciBmcmVlTW9kdWxlID0gZnJlZUV4cG9ydHMgJiYgdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiYgIW1vZHVsZS5ub2RlVHlwZSAmJiBtb2R1bGU7XG5cbi8qKiBEZXRlY3QgdGhlIHBvcHVsYXIgQ29tbW9uSlMgZXh0ZW5zaW9uIGBtb2R1bGUuZXhwb3J0c2AuICovXG52YXIgbW9kdWxlRXhwb3J0cyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5leHBvcnRzID09PSBmcmVlRXhwb3J0cztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgQnVmZmVyID0gbW9kdWxlRXhwb3J0cyA/IHJvb3QuQnVmZmVyIDogdW5kZWZpbmVkLFxuICAgIGFsbG9jVW5zYWZlID0gQnVmZmVyID8gQnVmZmVyLmFsbG9jVW5zYWZlIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiAgYGJ1ZmZlcmAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QnVmZmVyfSBidWZmZXIgVGhlIGJ1ZmZlciB0byBjbG9uZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgY2xvbmUuXG4gKiBAcmV0dXJucyB7QnVmZmVyfSBSZXR1cm5zIHRoZSBjbG9uZWQgYnVmZmVyLlxuICovXG5mdW5jdGlvbiBjbG9uZUJ1ZmZlcihidWZmZXIsIGlzRGVlcCkge1xuICBpZiAoaXNEZWVwKSB7XG4gICAgcmV0dXJuIGJ1ZmZlci5zbGljZSgpO1xuICB9XG4gIHZhciBsZW5ndGggPSBidWZmZXIubGVuZ3RoLFxuICAgICAgcmVzdWx0ID0gYWxsb2NVbnNhZmUgPyBhbGxvY1Vuc2FmZShsZW5ndGgpIDogbmV3IGJ1ZmZlci5jb25zdHJ1Y3RvcihsZW5ndGgpO1xuXG4gIGJ1ZmZlci5jb3B5KHJlc3VsdCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2xvbmVCdWZmZXI7XG4iLCJ2YXIgY2xvbmVBcnJheUJ1ZmZlciA9IHJlcXVpcmUoJy4vX2Nsb25lQXJyYXlCdWZmZXInKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgYHR5cGVkQXJyYXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gdHlwZWRBcnJheSBUaGUgdHlwZWQgYXJyYXkgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlZXBdIFNwZWNpZnkgYSBkZWVwIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2xvbmVkIHR5cGVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBjbG9uZVR5cGVkQXJyYXkodHlwZWRBcnJheSwgaXNEZWVwKSB7XG4gIHZhciBidWZmZXIgPSBpc0RlZXAgPyBjbG9uZUFycmF5QnVmZmVyKHR5cGVkQXJyYXkuYnVmZmVyKSA6IHR5cGVkQXJyYXkuYnVmZmVyO1xuICByZXR1cm4gbmV3IHR5cGVkQXJyYXkuY29uc3RydWN0b3IoYnVmZmVyLCB0eXBlZEFycmF5LmJ5dGVPZmZzZXQsIHR5cGVkQXJyYXkubGVuZ3RoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjbG9uZVR5cGVkQXJyYXk7XG4iLCIvKipcbiAqIENvcGllcyB0aGUgdmFsdWVzIG9mIGBzb3VyY2VgIHRvIGBhcnJheWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IHNvdXJjZSBUaGUgYXJyYXkgdG8gY29weSB2YWx1ZXMgZnJvbS5cbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheT1bXV0gVGhlIGFycmF5IHRvIGNvcHkgdmFsdWVzIHRvLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIGBhcnJheWAuXG4gKi9cbmZ1bmN0aW9uIGNvcHlBcnJheShzb3VyY2UsIGFycmF5KSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gc291cmNlLmxlbmd0aDtcblxuICBhcnJheSB8fCAoYXJyYXkgPSBBcnJheShsZW5ndGgpKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBhcnJheVtpbmRleF0gPSBzb3VyY2VbaW5kZXhdO1xuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb3B5QXJyYXk7XG4iLCJ2YXIgYXNzaWduVmFsdWUgPSByZXF1aXJlKCcuL19hc3NpZ25WYWx1ZScpLFxuICAgIGJhc2VBc3NpZ25WYWx1ZSA9IHJlcXVpcmUoJy4vX2Jhc2VBc3NpZ25WYWx1ZScpO1xuXG4vKipcbiAqIENvcGllcyBwcm9wZXJ0aWVzIG9mIGBzb3VyY2VgIHRvIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIGZyb20uXG4gKiBAcGFyYW0ge0FycmF5fSBwcm9wcyBUaGUgcHJvcGVydHkgaWRlbnRpZmllcnMgdG8gY29weS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0PXt9XSBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyB0by5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjdXN0b21pemVyXSBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvcGllZCB2YWx1ZXMuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBjb3B5T2JqZWN0KHNvdXJjZSwgcHJvcHMsIG9iamVjdCwgY3VzdG9taXplcikge1xuICB2YXIgaXNOZXcgPSAhb2JqZWN0O1xuICBvYmplY3QgfHwgKG9iamVjdCA9IHt9KTtcblxuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHByb3BzLmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBrZXkgPSBwcm9wc1tpbmRleF07XG5cbiAgICB2YXIgbmV3VmFsdWUgPSBjdXN0b21pemVyXG4gICAgICA/IGN1c3RvbWl6ZXIob2JqZWN0W2tleV0sIHNvdXJjZVtrZXldLCBrZXksIG9iamVjdCwgc291cmNlKVxuICAgICAgOiB1bmRlZmluZWQ7XG5cbiAgICBpZiAobmV3VmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgbmV3VmFsdWUgPSBzb3VyY2Vba2V5XTtcbiAgICB9XG4gICAgaWYgKGlzTmV3KSB7XG4gICAgICBiYXNlQXNzaWduVmFsdWUob2JqZWN0LCBrZXksIG5ld1ZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXNzaWduVmFsdWUob2JqZWN0LCBrZXksIG5ld1ZhbHVlKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG9iamVjdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb3B5T2JqZWN0O1xuIiwidmFyIGJhc2VDcmVhdGUgPSByZXF1aXJlKCcuL19iYXNlQ3JlYXRlJyksXG4gICAgZ2V0UHJvdG90eXBlID0gcmVxdWlyZSgnLi9fZ2V0UHJvdG90eXBlJyksXG4gICAgaXNQcm90b3R5cGUgPSByZXF1aXJlKCcuL19pc1Byb3RvdHlwZScpO1xuXG4vKipcbiAqIEluaXRpYWxpemVzIGFuIG9iamVjdCBjbG9uZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgaW5pdGlhbGl6ZWQgY2xvbmUuXG4gKi9cbmZ1bmN0aW9uIGluaXRDbG9uZU9iamVjdChvYmplY3QpIHtcbiAgcmV0dXJuICh0eXBlb2Ygb2JqZWN0LmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgIWlzUHJvdG90eXBlKG9iamVjdCkpXG4gICAgPyBiYXNlQ3JlYXRlKGdldFByb3RvdHlwZShvYmplY3QpKVxuICAgIDoge307XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5pdENsb25lT2JqZWN0O1xuIiwiLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIGxpa2VcbiAqIFtgT2JqZWN0LmtleXNgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3Qua2V5cylcbiAqIGV4Y2VwdCB0aGF0IGl0IGluY2x1ZGVzIGluaGVyaXRlZCBlbnVtZXJhYmxlIHByb3BlcnRpZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIG5hdGl2ZUtleXNJbihvYmplY3QpIHtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBpZiAob2JqZWN0ICE9IG51bGwpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gT2JqZWN0KG9iamVjdCkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbmF0aXZlS2V5c0luO1xuIiwidmFyIGFycmF5TGlrZUtleXMgPSByZXF1aXJlKCcuL19hcnJheUxpa2VLZXlzJyksXG4gICAgYmFzZUtleXNJbiA9IHJlcXVpcmUoJy4vX2Jhc2VLZXlzSW4nKSxcbiAgICBpc0FycmF5TGlrZSA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2UnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gYW5kIGluaGVyaXRlZCBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIGBvYmplY3RgLlxuICpcbiAqICoqTm90ZToqKiBOb24tb2JqZWN0IHZhbHVlcyBhcmUgY29lcmNlZCB0byBvYmplY3RzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy4wLjBcbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIEZvbygpIHtcbiAqICAgdGhpcy5hID0gMTtcbiAqICAgdGhpcy5iID0gMjtcbiAqIH1cbiAqXG4gKiBGb28ucHJvdG90eXBlLmMgPSAzO1xuICpcbiAqIF8ua2V5c0luKG5ldyBGb28pO1xuICogLy8gPT4gWydhJywgJ2InLCAnYyddIChpdGVyYXRpb24gb3JkZXIgaXMgbm90IGd1YXJhbnRlZWQpXG4gKi9cbmZ1bmN0aW9uIGtleXNJbihvYmplY3QpIHtcbiAgcmV0dXJuIGlzQXJyYXlMaWtlKG9iamVjdCkgPyBhcnJheUxpa2VLZXlzKG9iamVjdCwgdHJ1ZSkgOiBiYXNlS2V5c0luKG9iamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ga2V5c0luO1xuIl0sIm5hbWVzIjpbInVzZUNhbGxiYWNrIiwidXNlTWVtbyIsInVzZVN0YXRlIiwiZ2V0TWFyc2hhbGxlciIsIkRtbkVkaXRvciIsIm5vcm1hbGl6ZSIsIkRtbkVkaXRvcldyYXBwZXIiLCJhdmFpbGFibGVNb2RlbHNCeVBhdGgiLCJtb2RlbHNCeU5hbWVzcGFjZSIsIlJFRkVSRU5DRV9NT0RFTFMiLCJFbXB0eVN0b3J5V2l0aEluY2x1ZGVkTW9kZWxzIiwiYXJncyIsInN0YXRlIiwic2V0U3RhdGUiLCJpbml0aWFsRG1uTWFyc2hhbGxlciIsImVtcHR5IiwicmF3IiwidXBncmFkZVRvIiwibWFyc2hhbGxlciIsInN0YWNrIiwicGFyc2VyIiwicGFyc2UiLCJwb2ludGVyIiwiY3VycmVudE1vZGVsIiwiZXh0ZXJuYWxNb2RlbHNCeU5hbWVzcGFjZSIsIl9hIiwiZGVmaW5pdGlvbnMiLCJpbXBvcnQiLCJyZWR1Y2UiLCJhY2MiLCJpIiwib25SZXF1ZXN0RXh0ZXJuYWxNb2RlbEJ5UGF0aCIsInBhdGgiLCJvblJlcXVlc3RFeHRlcm5hbE1vZGVsc0F2YWlsYWJsZVRvSW5jbHVkZSIsIk9iamVjdCIsImtleXMiLCJvbk1vZGVsQ2hhbmdlIiwibW9kZWwiLCJwcmV2IiwibmV3U3RhY2siLCJzbGljZSIsImxlbmd0aCIsIl9qc3giLCJfRnJhZ21lbnQiLCJjaGlsZHJlbiIsIm9yaWdpbmFsVmVyc2lvbiIsImV4dGVybmFsQ29udGV4dE5hbWUiLCJleHRlcm5hbENvbnRleHREZXNjcmlwdGlvbiIsInZhbGlkYXRpb25NZXNzYWdlcyIsImV2YWx1YXRpb25SZXN1bHRzQnlOb2RlSWQiLCJpc3N1ZVRyYWNrZXJIcmVmIiwibWV0YSIsInRpdGxlIiwiY29tcG9uZW50IiwiaW5jbHVkZVN0b3JpZXMiLCJFbXB0eVdpdGhBdmFpbGFibGVFeHRlcm5hbE1vZGVscyIsInJlbmRlciIsIk1hcCIsInBhcmFtZXRlcnMiLCJkb2NzIiwic291cmNlIiwib3JpZ2luYWxTb3VyY2UiLCJfYyIsIl9iIiwiX19uYW1lZEV4cG9ydHNPcmRlciIsIlhNTDJQTU1MIiwiZ2V0UG1tbE5hbWVzcGFjZSIsIlVTRV9DQVNFX01PREVMUyIsInRlc3RUcmVlUG1tbCIsInRlc3RUcmVlUG1tbE1vZGVsIiwiYXZhaWxhYmxlTW9kZWxzIiwidHlwZSIsInN1bUJrbSIsIm5vcm1hbGl6ZWRQb3NpeFBhdGhSZWxhdGl2ZVRvVGhlT3BlbkZpbGUiLCJzdmciLCJzdW1EaWZmRHMiLCJ2YWx1ZXMiLCJ2Il0sInNvdXJjZVJvb3QiOiIifQ==