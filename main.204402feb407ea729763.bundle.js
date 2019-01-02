(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{194:function(module,exports,__webpack_require__){__webpack_require__(195),__webpack_require__(274),module.exports=__webpack_require__(275)},275:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(86);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)(function(){__webpack_require__(375)},module)}.call(this,__webpack_require__(142)(module))},375:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(12),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(86),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(87),random_words__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(123),random_words__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(random_words__WEBPACK_IMPORTED_MODULE_3__),_index__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(88),optionsWithValues=random_words__WEBPACK_IMPORTED_MODULE_3___default()({exactly:10,wordsPerString:2,formatter:function(word,index){return 0===index?word.slice(0,1).toUpperCase().concat(word.slice(1)):word}}).map(function(w){return{text:w,value:w.toLowerCase()}});Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Select",module).add("array of strings",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_index__WEBPACK_IMPORTED_MODULE_4__.a,{onChange:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("selected"),options:random_words__WEBPACK_IMPORTED_MODULE_3___default()(5)})}).add("custom value",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_index__WEBPACK_IMPORTED_MODULE_4__.a,{onChange:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("selected"),options:optionsWithValues})}).add("custom value return just value",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_index__WEBPACK_IMPORTED_MODULE_4__.a,{onChangeValue:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("value"),options:optionsWithValues})})}.call(this,__webpack_require__(142)(module))},88:function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(12),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(51),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__),_createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj};var Options=function(_ref){var options=_ref.options;return options.length>0&&"object"===_typeof(options[1])?options.map(function(o){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option",{key:o.value,value:o.value},o.text)}):options.map(function(o){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option",{key:o},o)})},Select=function(_Component){function Select(props){!function(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Select);var _this=function(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}(this,(Select.__proto__||Object.getPrototypeOf(Select)).call(this,props));return _this.options=_this.props.options||[],_this.parentChange=_this.props.onChange||function(){},_this.parentChangeValue=_this.props.onChangeValue||function(){},_this.className=_this.props.className,_this.state={value:_this.props.value},_this.change=_this.change.bind(_this),_this}return function(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}(Select,react__WEBPACK_IMPORTED_MODULE_0__["Component"]),_createClass(Select,[{key:"change",value:function(event){this.setState({value:event.target.value,previous:this.state.value}),this.parentChange(event),this.parentChangeValue(event.target.value)}},{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select",{className:this.className,onChange:this.change,value:this.state.value},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Options,{className:!0,options:this.options})))}}]),Select}();Select.propTypes={options:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,onChange:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,onChangeValue:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,value:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,className:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string},__webpack_exports__.a=Select,Select.__docgenInfo={description:"",methods:[{name:"change",docblock:null,modifiers:[],params:[{name:"event",type:null}],returns:null}],displayName:"Select",props:{options:{type:{name:"array"},required:!1,description:""},onChange:{type:{name:"func"},required:!1,description:""},onChangeValue:{type:{name:"func"},required:!1,description:""},value:{type:{name:"string"},required:!1,description:""},className:{type:{name:"string"},required:!1,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.js"]={name:"Select",docgenInfo:Select.__docgenInfo,path:"src/index.js"})}},[[194,1,2]]]);
//# sourceMappingURL=main.204402feb407ea729763.bundle.js.map