(()=>{var fC=Object.create;var Bd=Object.defineProperty,dC=Object.defineProperties,pC=Object.getOwnPropertyDescriptor,vC=Object.getOwnPropertyDescriptors,mC=Object.getOwnPropertyNames,cc=Object.getOwnPropertySymbols,hC=Object.getPrototypeOf,Vd=Object.prototype.hasOwnProperty,Zh=Object.prototype.propertyIsEnumerable;var Jh=(d,s,v)=>s in d?Bd(d,s,{enumerable:!0,configurable:!0,writable:!0,value:v}):d[s]=v,Jn=(d,s)=>{for(var v in s||(s={}))Vd.call(s,v)&&Jh(d,v,s[v]);if(cc)for(var v of cc(s))Zh.call(s,v)&&Jh(d,v,s[v]);return d},cl=(d,s)=>dC(d,vC(s));var sc=(d,s)=>{var v={};for(var S in d)Vd.call(d,S)&&s.indexOf(S)<0&&(v[S]=d[S]);if(d!=null&&cc)for(var S of cc(d))s.indexOf(S)<0&&Zh.call(d,S)&&(v[S]=d[S]);return v};var Fr=(d,s)=>()=>(s||d((s={exports:{}}).exports,s),s.exports);var yC=(d,s,v,S)=>{if(s&&typeof s=="object"||typeof s=="function")for(let g of mC(s))!Vd.call(d,g)&&g!==v&&Bd(d,g,{get:()=>s[g],enumerable:!(S=pC(s,g))||S.enumerable});return d};var Zn=(d,s,v)=>(v=d!=null?fC(hC(d)):{},yC(s||!d||!d.__esModule?Bd(v,"default",{value:d,enumerable:!0}):v,d));var On=(d,s,v)=>new Promise((S,g)=>{var x=U=>{try{L(v.next(U))}catch(y){g(y)}},B=U=>{try{L(v.throw(U))}catch(y){g(y)}},L=U=>U.done?S(U.value):Promise.resolve(U.value).then(x,B);L((v=v.apply(d,s)).next())});var uy=Fr((we,mc)=>{"use strict";(function(){"use strict";typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error);var d="18.3.1",s=Symbol.for("react.element"),v=Symbol.for("react.portal"),S=Symbol.for("react.fragment"),g=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),B=Symbol.for("react.provider"),L=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),j=Symbol.for("react.suspense_list"),q=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),Q=Symbol.for("react.offscreen"),ce=Symbol.iterator,Ce="@@iterator";function Ne(l){if(l===null||typeof l!="object")return null;var m=ce&&l[ce]||l[Ce];return typeof m=="function"?m:null}var ie={current:null},ue={transition:null},Le={current:null,isBatchingLegacy:!1,didScheduleLegacyUpdate:!1},Ze={current:null},gt={},Te=null;function se(l){Te=l}gt.setExtraStackFrame=function(l){Te=l},gt.getCurrentStack=null,gt.getStackAddendum=function(){var l="";Te&&(l+=Te);var m=gt.getCurrentStack;return m&&(l+=m()||""),l};var ft=!1,te=!1,Ae=!1,ne=!1,be=!1,_e={ReactCurrentDispatcher:ie,ReactCurrentBatchConfig:ue,ReactCurrentOwner:Ze};_e.ReactDebugCurrentFrame=gt,_e.ReactCurrentActQueue=Le;function vt(l){{for(var m=arguments.length,C=new Array(m>1?m-1:0),_=1;_<m;_++)C[_-1]=arguments[_];Tt("warn",l,C)}}function pe(l){{for(var m=arguments.length,C=new Array(m>1?m-1:0),_=1;_<m;_++)C[_-1]=arguments[_];Tt("error",l,C)}}function Tt(l,m,C){{var _=_e.ReactDebugCurrentFrame,V=_.getStackAddendum();V!==""&&(m+="%s",C=C.concat([V]));var de=C.map(function(W){return String(W)});de.unshift("Warning: "+m),Function.prototype.apply.call(console[l],console,de)}}var je={};function xt(l,m){{var C=l.constructor,_=C&&(C.displayName||C.name)||"ReactClass",V=_+"."+m;if(je[V])return;pe("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",m,_),je[V]=!0}}var Pe={isMounted:function(l){return!1},enqueueForceUpdate:function(l,m,C){xt(l,"forceUpdate")},enqueueReplaceState:function(l,m,C,_){xt(l,"replaceState")},enqueueSetState:function(l,m,C,_){xt(l,"setState")}},dt=Object.assign,Fe={};Object.freeze(Fe);function _t(l,m,C){this.props=l,this.context=m,this.refs=Fe,this.updater=C||Pe}_t.prototype.isReactComponent={},_t.prototype.setState=function(l,m){if(typeof l!="object"&&typeof l!="function"&&l!=null)throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,l,m,"setState")},_t.prototype.forceUpdate=function(l){this.updater.enqueueForceUpdate(this,l,"forceUpdate")};{var Wt={isMounted:["isMounted","Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],replaceState:["replaceState","Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]},Wn=function(l,m){Object.defineProperty(_t.prototype,l,{get:function(){vt("%s(...) is deprecated in plain JavaScript React classes. %s",m[0],m[1])}})};for(var Et in Wt)Wt.hasOwnProperty(Et)&&Wn(Et,Wt[Et])}function bn(){}bn.prototype=_t.prototype;function ut(l,m,C){this.props=l,this.context=m,this.refs=Fe,this.updater=C||Pe}var It=ut.prototype=new bn;It.constructor=ut,dt(It,_t.prototype),It.isPureReactComponent=!0;function ca(){var l={current:null};return Object.seal(l),l}var In=Array.isArray;function Un(l){return In(l)}function Mn(l){{var m=typeof Symbol=="function"&&Symbol.toStringTag,C=m&&l[Symbol.toStringTag]||l.constructor.name||"Object";return C}}function $n(l){try{return Fn(l),!1}catch(m){return!0}}function Fn(l){return""+l}function wt(l){if($n(l))return pe("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",Mn(l)),Fn(l)}function En(l,m,C){var _=l.displayName;if(_)return _;var V=m.displayName||m.name||"";return V!==""?C+"("+V+")":C}function Bn(l){return l.displayName||"Context"}function Rt(l){if(l==null)return null;if(typeof l.tag=="number"&&pe("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof l=="function")return l.displayName||l.name||null;if(typeof l=="string")return l;switch(l){case S:return"Fragment";case v:return"Portal";case x:return"Profiler";case g:return"StrictMode";case y:return"Suspense";case j:return"SuspenseList"}if(typeof l=="object")switch(l.$$typeof){case L:var m=l;return Bn(m)+".Consumer";case B:var C=l;return Bn(C._context)+".Provider";case U:return En(l,l.render,"ForwardRef");case q:var _=l.displayName||null;return _!==null?_:Rt(l.type)||"Memo";case X:{var V=l,de=V._payload,W=V._init;try{return Rt(W(de))}catch(Re){return null}}}return null}var Yt=Object.prototype.hasOwnProperty,sa={key:!0,ref:!0,__self:!0,__source:!0},ea,lt,Vn;Vn={};function er(l){if(Yt.call(l,"ref")){var m=Object.getOwnPropertyDescriptor(l,"ref").get;if(m&&m.isReactWarning)return!1}return l.ref!==void 0}function Na(l){if(Yt.call(l,"key")){var m=Object.getOwnPropertyDescriptor(l,"key").get;if(m&&m.isReactWarning)return!1}return l.key!==void 0}function Ua(l,m){var C=function(){ea||(ea=!0,pe("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",m))};C.isReactWarning=!0,Object.defineProperty(l,"key",{get:C,configurable:!0})}function wn(l,m){var C=function(){lt||(lt=!0,pe("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",m))};C.isReactWarning=!0,Object.defineProperty(l,"ref",{get:C,configurable:!0})}function vr(l){if(typeof l.ref=="string"&&Ze.current&&l.__self&&Ze.current.stateNode!==l.__self){var m=Rt(Ze.current.type);Vn[m]||(pe('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',m,l.ref),Vn[m]=!0)}}var fa=function(l,m,C,_,V,de,W){var Re={$$typeof:s,type:l,key:m,ref:C,props:W,_owner:de};return Re._store={},Object.defineProperty(Re._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(Re,"_self",{configurable:!1,enumerable:!1,writable:!1,value:_}),Object.defineProperty(Re,"_source",{configurable:!1,enumerable:!1,writable:!1,value:V}),Object.freeze&&(Object.freeze(Re.props),Object.freeze(Re)),Re};function mr(l,m,C){var _,V={},de=null,W=null,Re=null,He=null;if(m!=null){er(m)&&(W=m.ref,vr(m)),Na(m)&&(wt(m.key),de=""+m.key),Re=m.__self===void 0?null:m.__self,He=m.__source===void 0?null:m.__source;for(_ in m)Yt.call(m,_)&&!sa.hasOwnProperty(_)&&(V[_]=m[_])}var Ie=arguments.length-2;if(Ie===1)V.children=C;else if(Ie>1){for(var at=Array(Ie),ct=0;ct<Ie;ct++)at[ct]=arguments[ct+2];Object.freeze&&Object.freeze(at),V.children=at}if(l&&l.defaultProps){var pt=l.defaultProps;for(_ in pt)V[_]===void 0&&(V[_]=pt[_])}if(de||W){var St=typeof l=="function"?l.displayName||l.name||"Unknown":l;de&&Ua(V,St),W&&wn(V,St)}return fa(l,de,W,Re,He,Ze.current,V)}function Y(l,m){var C=fa(l.type,m,l.ref,l._self,l._source,l._owner,l.props);return C}function le(l,m,C){if(l==null)throw new Error("React.cloneElement(...): The argument must be a React element, but you passed "+l+".");var _,V=dt({},l.props),de=l.key,W=l.ref,Re=l._self,He=l._source,Ie=l._owner;if(m!=null){er(m)&&(W=m.ref,Ie=Ze.current),Na(m)&&(wt(m.key),de=""+m.key);var at;l.type&&l.type.defaultProps&&(at=l.type.defaultProps);for(_ in m)Yt.call(m,_)&&!sa.hasOwnProperty(_)&&(m[_]===void 0&&at!==void 0?V[_]=at[_]:V[_]=m[_])}var ct=arguments.length-2;if(ct===1)V.children=C;else if(ct>1){for(var pt=Array(ct),St=0;St<ct;St++)pt[St]=arguments[St+2];V.children=pt}return fa(l.type,de,W,Re,He,Ie,V)}function Ee(l){return typeof l=="object"&&l!==null&&l.$$typeof===s}var ae=".",ot=":";function Pt(l){var m=/[=:]/g,C={"=":"=0",":":"=2"},_=l.replace(m,function(V){return C[V]});return"$"+_}var $=!1,J=/\/+/g;function nt(l){return l.replace(J,"$&/")}function Ke(l,m){return typeof l=="object"&&l!==null&&l.key!=null?(wt(l.key),Pt(""+l.key)):m.toString(36)}function he(l,m,C,_,V){var de=typeof l;(de==="undefined"||de==="boolean")&&(l=null);var W=!1;if(l===null)W=!0;else switch(de){case"string":case"number":W=!0;break;case"object":switch(l.$$typeof){case s:case v:W=!0}}if(W){var Re=l,He=V(Re),Ie=_===""?ae+Ke(Re,0):_;if(Un(He)){var at="";Ie!=null&&(at=nt(Ie)+"/"),he(He,m,at,"",function(Fc){return Fc})}else He!=null&&(Ee(He)&&(He.key&&(!Re||Re.key!==He.key)&&wt(He.key),He=Y(He,C+(He.key&&(!Re||Re.key!==He.key)?nt(""+He.key)+"/":"")+Ie)),m.push(He));return 1}var ct,pt,St=0,Ot=_===""?ae:_+ot;if(Un(l))for(var Rr=0;Rr<l.length;Rr++)ct=l[Rr],pt=Ot+Ke(ct,Rr),St+=he(ct,m,C,pt,V);else{var su=Ne(l);if(typeof su=="function"){var Ol=l;su===Ol.entries&&($||vt("Using Maps as children is not supported. Use an array of keyed ReactElements instead."),$=!0);for(var hi=su.call(Ol),Nl,jc=0;!(Nl=hi.next()).done;)ct=Nl.value,pt=Ot+Ke(ct,jc++),St+=he(ct,m,C,pt,V)}else if(de==="object"){var Ul=String(l);throw new Error("Objects are not valid as a React child (found: "+(Ul==="[object Object]"?"object with keys {"+Object.keys(l).join(", ")+"}":Ul)+"). If you meant to render a collection of children, use an array instead.")}}return St}function $t(l,m,C){if(l==null)return l;var _=[],V=0;return he(l,_,"","",function(de){return m.call(C,de,V++)}),_}function da(l){var m=0;return $t(l,function(){m++}),m}function hr(l,m,C){$t(l,function(){m.apply(this,arguments)},C)}function Be(l){return $t(l,function(m){return m})||[]}function Ln(l){if(!Ee(l))throw new Error("React.Children.only expected to receive a single React element child.");return l}function ta(l){var m={$$typeof:L,_currentValue:l,_currentValue2:l,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null};m.Provider={$$typeof:B,_context:m};var C=!1,_=!1,V=!1;{var de={$$typeof:L,_context:m};Object.defineProperties(de,{Provider:{get:function(){return _||(_=!0,pe("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")),m.Provider},set:function(W){m.Provider=W}},_currentValue:{get:function(){return m._currentValue},set:function(W){m._currentValue=W}},_currentValue2:{get:function(){return m._currentValue2},set:function(W){m._currentValue2=W}},_threadCount:{get:function(){return m._threadCount},set:function(W){m._threadCount=W}},Consumer:{get:function(){return C||(C=!0,pe("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")),m.Consumer}},displayName:{get:function(){return m.displayName},set:function(W){V||(vt("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.",W),V=!0)}}}),m.Consumer=de}return m._currentRenderer=null,m._currentRenderer2=null,m}var dn=-1,qt=0,An=1,pa=2;function tr(l){if(l._status===dn){var m=l._result,C=m();if(C.then(function(de){if(l._status===qt||l._status===dn){var W=l;W._status=An,W._result=de}},function(de){if(l._status===qt||l._status===dn){var W=l;W._status=pa,W._result=de}}),l._status===dn){var _=l;_._status=qt,_._result=C}}if(l._status===An){var V=l._result;return V===void 0&&pe(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`,V),"default"in V||pe(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`,V),V.default}else throw l._result}function si(l){var m={_status:dn,_result:l},C={$$typeof:X,_payload:m,_init:tr};{var _,V;Object.defineProperties(C,{defaultProps:{configurable:!0,get:function(){return _},set:function(de){pe("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."),_=de,Object.defineProperty(C,"defaultProps",{enumerable:!0})}},propTypes:{configurable:!0,get:function(){return V},set:function(de){pe("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."),V=de,Object.defineProperty(C,"propTypes",{enumerable:!0})}}})}return C}function $i(l){l!=null&&l.$$typeof===q?pe("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."):typeof l!="function"?pe("forwardRef requires a render function but was given %s.",l===null?"null":typeof l):l.length!==0&&l.length!==2&&pe("forwardRef render functions accept exactly two parameters: props and ref. %s",l.length===1?"Did you forget to use the ref parameter?":"Any additional parameter will be undefined."),l!=null&&(l.defaultProps!=null||l.propTypes!=null)&&pe("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");var m={$$typeof:U,render:l};{var C;Object.defineProperty(m,"displayName",{enumerable:!1,configurable:!0,get:function(){return C},set:function(_){C=_,!l.name&&!l.displayName&&(l.displayName=_)}})}return m}var Ma;Ma=Symbol.for("react.module.reference");function Dt(l){return!!(typeof l=="string"||typeof l=="function"||l===S||l===x||be||l===g||l===y||l===j||ne||l===Q||ft||te||Ae||typeof l=="object"&&l!==null&&(l.$$typeof===X||l.$$typeof===q||l.$$typeof===B||l.$$typeof===L||l.$$typeof===U||l.$$typeof===Ma||l.getModuleId!==void 0))}function wr(l,m){Dt(l)||pe("memo: The first argument must be a component. Instead received: %s",l===null?"null":typeof l);var C={$$typeof:q,type:l,compare:m===void 0?null:m};{var _;Object.defineProperty(C,"displayName",{enumerable:!1,configurable:!0,get:function(){return _},set:function(V){_=V,!l.name&&!l.displayName&&(l.displayName=V)}})}return C}function p(){var l=ie.current;return l===null&&pe(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`),l}function H(l){var m=p();if(l._context!==void 0){var C=l._context;C.Consumer===l?pe("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?"):C.Provider===l&&pe("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?")}return m.useContext(l)}function w(l){var m=p();return m.useState(l)}function fe(l,m,C){var _=p();return _.useReducer(l,m,C)}function De(l){var m=p();return m.useRef(l)}function Qe(l,m){var C=p();return C.useEffect(l,m)}function Me(l,m){var C=p();return C.useInsertionEffect(l,m)}function xe(l,m){var C=p();return C.useLayoutEffect(l,m)}function mt(l,m){var C=p();return C.useCallback(l,m)}function We(l,m){var C=p();return C.useMemo(l,m)}function ke(l,m,C){var _=p();return _.useImperativeHandle(l,m,C)}function pn(l,m){{var C=p();return C.useDebugValue(l,m)}}function Yn(){var l=p();return l.useTransition()}function va(l){var m=p();return m.useDeferredValue(l)}function Qt(){var l=p();return l.useId()}function yr(l,m,C){var _=p();return _.useSyncExternalStore(l,m,C)}var La=0,gr,eu,ml,tu,hl,vn,fi;function yl(){}yl.__reactDisabledLog=!0;function Cc(){{if(La===0){gr=console.log,eu=console.info,ml=console.warn,tu=console.error,hl=console.group,vn=console.groupCollapsed,fi=console.groupEnd;var l={configurable:!0,enumerable:!0,value:yl,writable:!0};Object.defineProperties(console,{info:l,log:l,warn:l,error:l,group:l,groupCollapsed:l,groupEnd:l})}La++}}function Tc(){{if(La--,La===0){var l={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:dt({},l,{value:gr}),info:dt({},l,{value:eu}),warn:dt({},l,{value:ml}),error:dt({},l,{value:tu}),group:dt({},l,{value:hl}),groupCollapsed:dt({},l,{value:vn}),groupEnd:dt({},l,{value:fi})})}La<0&&pe("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var nu=_e.ReactCurrentDispatcher,au;function Sr(l,m,C){{if(au===void 0)try{throw Error()}catch(V){var _=V.stack.trim().match(/\n( *(at )?)/);au=_&&_[1]||""}return`
`+au+l}}var di=!1,Yr;{var ru=typeof WeakMap=="function"?WeakMap:Map;Yr=new ru}function iu(l,m){if(!l||di)return"";{var C=Yr.get(l);if(C!==void 0)return C}var _;di=!0;var V=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var de;de=nu.current,nu.current=null,Cc();try{if(m){var W=function(){throw Error()};if(Object.defineProperty(W.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(W,[])}catch(Ot){_=Ot}Reflect.construct(l,[],W)}else{try{W.call()}catch(Ot){_=Ot}l.call(W.prototype)}}else{try{throw Error()}catch(Ot){_=Ot}l()}}catch(Ot){if(Ot&&_&&typeof Ot.stack=="string"){for(var Re=Ot.stack.split(`
`),He=_.stack.split(`
`),Ie=Re.length-1,at=He.length-1;Ie>=1&&at>=0&&Re[Ie]!==He[at];)at--;for(;Ie>=1&&at>=0;Ie--,at--)if(Re[Ie]!==He[at]){if(Ie!==1||at!==1)do if(Ie--,at--,at<0||Re[Ie]!==He[at]){var ct=`
`+Re[Ie].replace(" at new "," at ");return l.displayName&&ct.includes("<anonymous>")&&(ct=ct.replace("<anonymous>",l.displayName)),typeof l=="function"&&Yr.set(l,ct),ct}while(Ie>=1&&at>=0);break}}}finally{di=!1,nu.current=de,Tc(),Error.prepareStackTrace=V}var pt=l?l.displayName||l.name:"",St=pt?Sr(pt):"";return typeof l=="function"&&Yr.set(l,St),St}function gl(l,m,C){return iu(l,!1)}function xc(l){var m=l.prototype;return!!(m&&m.isReactComponent)}function br(l,m,C){if(l==null)return"";if(typeof l=="function")return iu(l,xc(l));if(typeof l=="string")return Sr(l);switch(l){case y:return Sr("Suspense");case j:return Sr("SuspenseList")}if(typeof l=="object")switch(l.$$typeof){case U:return gl(l.render);case q:return br(l.type,m,C);case X:{var _=l,V=_._payload,de=_._init;try{return br(de(V),m,C)}catch(W){}}}return""}var Pr={},Sl=_e.ReactDebugCurrentFrame;function Gt(l){if(l){var m=l._owner,C=br(l.type,l._source,m?m.type:null);Sl.setExtraStackFrame(C)}else Sl.setExtraStackFrame(null)}function pi(l,m,C,_,V){{var de=Function.call.bind(Yt);for(var W in l)if(de(l,W)){var Re=void 0;try{if(typeof l[W]!="function"){var He=Error((_||"React class")+": "+C+" type `"+W+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof l[W]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw He.name="Invariant Violation",He}Re=l[W](m,W,_,C,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(Ie){Re=Ie}Re&&!(Re instanceof Error)&&(Gt(V),pe("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",_||"React class",C,W,typeof Re),Gt(null)),Re instanceof Error&&!(Re.message in Pr)&&(Pr[Re.message]=!0,Gt(V),pe("Failed %s type: %s",C,Re.message),Gt(null))}}}function At(l){if(l){var m=l._owner,C=br(l.type,l._source,m?m.type:null);se(C)}else se(null)}var uu;uu=!1;function _c(){if(Ze.current){var l=Rt(Ze.current.type);if(l)return`

Check the render method of \``+l+"`."}return""}function sp(l){if(l!==void 0){var m=l.fileName.replace(/^.*[\\\/]/,""),C=l.lineNumber;return`

Check your code at `+m+":"+C+"."}return""}function Dc(l){return l!=null?sp(l.__source):""}var Oc={};function fp(l){var m=_c();if(!m){var C=typeof l=="string"?l:l.displayName||l.name;C&&(m=`

Check the top-level render call using <`+C+">.")}return m}function bl(l,m){if(!(!l._store||l._store.validated||l.key!=null)){l._store.validated=!0;var C=fp(m);if(!Oc[C]){Oc[C]=!0;var _="";l&&l._owner&&l._owner!==Ze.current&&(_=" It was passed a child from "+Rt(l._owner.type)+"."),At(l),pe('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',C,_),At(null)}}}function El(l,m){if(typeof l=="object"){if(Un(l))for(var C=0;C<l.length;C++){var _=l[C];Ee(_)&&bl(_,m)}else if(Ee(l))l._store&&(l._store.validated=!0);else if(l){var V=Ne(l);if(typeof V=="function"&&V!==l.entries)for(var de=V.call(l),W;!(W=de.next()).done;)Ee(W.value)&&bl(W.value,m)}}}function Rl(l){{var m=l.type;if(m==null||typeof m=="string")return;var C;if(typeof m=="function")C=m.propTypes;else if(typeof m=="object"&&(m.$$typeof===U||m.$$typeof===q))C=m.propTypes;else return;if(C){var _=Rt(m);pi(C,l.props,"prop",_,l)}else if(m.PropTypes!==void 0&&!uu){uu=!0;var V=Rt(m);pe("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",V||"Unknown")}typeof m.getDefaultProps=="function"&&!m.getDefaultProps.isReactClassApproved&&pe("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function Nc(l){{for(var m=Object.keys(l.props),C=0;C<m.length;C++){var _=m[C];if(_!=="children"&&_!=="key"){At(l),pe("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",_),At(null);break}}l.ref!==null&&(At(l),pe("Invalid attribute `ref` supplied to `React.Fragment`."),At(null))}}function nr(l,m,C){var _=Dt(l);if(!_){var V="";(l===void 0||typeof l=="object"&&l!==null&&Object.keys(l).length===0)&&(V+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var de=Dc(m);de?V+=de:V+=_c();var W;l===null?W="null":Un(l)?W="array":l!==void 0&&l.$$typeof===s?(W="<"+(Rt(l.type)||"Unknown")+" />",V=" Did you accidentally export a JSX literal instead of a component?"):W=typeof l,pe("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",W,V)}var Re=mr.apply(this,arguments);if(Re==null)return Re;if(_)for(var He=2;He<arguments.length;He++)El(arguments[He],l);return l===S?Nc(Re):Rl(Re),Re}var Cl=!1;function Uc(l){var m=nr.bind(null,l);return m.type=l,Cl||(Cl=!0,vt("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")),Object.defineProperty(m,"type",{enumerable:!1,get:function(){return vt("Factory.type is deprecated. Access the class directly before passing it to createFactory."),Object.defineProperty(this,"type",{value:l}),l}}),m}function Mc(l,m,C){for(var _=le.apply(this,arguments),V=2;V<arguments.length;V++)El(arguments[V],_.type);return Rl(_),_}function qr(l,m){var C=ue.transition;ue.transition={};var _=ue.transition;ue.transition._updatedFibers=new Set;try{l()}finally{if(ue.transition=C,C===null&&_._updatedFibers){var V=_._updatedFibers.size;V>10&&vt("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."),_._updatedFibers.clear()}}}var Tl=!1,vi=null;function Lc(l){if(vi===null)try{var m=("require"+Math.random()).slice(0,7),C=mc&&mc[m];vi=C.call(mc,"timers").setImmediate}catch(_){vi=function(V){Tl===!1&&(Tl=!0,typeof MessageChannel=="undefined"&&pe("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));var de=new MessageChannel;de.port1.onmessage=V,de.port2.postMessage(void 0)}}return vi(l)}var Er=0,xl=!1;function _l(l){{var m=Er;Er++,Le.current===null&&(Le.current=[]);var C=Le.isBatchingLegacy,_;try{if(Le.isBatchingLegacy=!0,_=l(),!C&&Le.didScheduleLegacyUpdate){var V=Le.current;V!==null&&(Le.didScheduleLegacyUpdate=!1,cu(V))}}catch(pt){throw mi(m),pt}finally{Le.isBatchingLegacy=C}if(_!==null&&typeof _=="object"&&typeof _.then=="function"){var de=_,W=!1,Re={then:function(pt,St){W=!0,de.then(function(Ot){mi(m),Er===0?lu(Ot,pt,St):pt(Ot)},function(Ot){mi(m),St(Ot)})}};return!xl&&typeof Promise!="undefined"&&Promise.resolve().then(function(){}).then(function(){W||(xl=!0,pe("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"))}),Re}else{var He=_;if(mi(m),Er===0){var Ie=Le.current;Ie!==null&&(cu(Ie),Le.current=null);var at={then:function(pt,St){Le.current===null?(Le.current=[],lu(He,pt,St)):pt(He)}};return at}else{var ct={then:function(pt,St){pt(He)}};return ct}}}}function mi(l){l!==Er-1&&pe("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "),Er=l}function lu(l,m,C){{var _=Le.current;if(_!==null)try{cu(_),Lc(function(){_.length===0?(Le.current=null,m(l)):lu(l,m,C)})}catch(V){C(V)}else m(l)}}var ou=!1;function cu(l){if(!ou){ou=!0;var m=0;try{for(;m<l.length;m++){var C=l[m];do C=C(!0);while(C!==null)}l.length=0}catch(_){throw l=l.slice(m+1),_}finally{ou=!1}}}var Ac=nr,zc=Mc,Dl=Uc,Hc={map:$t,forEach:hr,count:da,toArray:Be,only:Ln};we.Children=Hc,we.Component=_t,we.Fragment=S,we.Profiler=x,we.PureComponent=ut,we.StrictMode=g,we.Suspense=y,we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_e,we.act=_l,we.cloneElement=zc,we.createContext=ta,we.createElement=Ac,we.createFactory=Dl,we.createRef=ca,we.forwardRef=$i,we.isValidElement=Ee,we.lazy=si,we.memo=wr,we.startTransition=qr,we.unstable_act=_l,we.useCallback=mt,we.useContext=H,we.useDebugValue=pn,we.useDeferredValue=va,we.useEffect=Qe,we.useId=Qt,we.useImperativeHandle=ke,we.useInsertionEffect=Me,we.useLayoutEffect=xe,we.useMemo=We,we.useReducer=fe,we.useRef=De,we.useState=w,we.useSyncExternalStore=yr,we.useTransition=Yn,we.version=d,typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error)})()});var Ia=Fr((UT,ly)=>{"use strict";ly.exports=uy()});var oy=Fr(it=>{"use strict";(function(){"use strict";typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error);var d=!1,s=!1,v=5;function S(Y,le){var Ee=Y.length;Y.push(le),B(Y,le,Ee)}function g(Y){return Y.length===0?null:Y[0]}function x(Y){if(Y.length===0)return null;var le=Y[0],Ee=Y.pop();return Ee!==le&&(Y[0]=Ee,L(Y,Ee,0)),le}function B(Y,le,Ee){for(var ae=Ee;ae>0;){var ot=ae-1>>>1,Pt=Y[ot];if(U(Pt,le)>0)Y[ot]=le,Y[ae]=Pt,ae=ot;else return}}function L(Y,le,Ee){for(var ae=Ee,ot=Y.length,Pt=ot>>>1;ae<Pt;){var $=(ae+1)*2-1,J=Y[$],nt=$+1,Ke=Y[nt];if(U(J,le)<0)nt<ot&&U(Ke,J)<0?(Y[ae]=Ke,Y[nt]=le,ae=nt):(Y[ae]=J,Y[$]=le,ae=$);else if(nt<ot&&U(Ke,le)<0)Y[ae]=Ke,Y[nt]=le,ae=nt;else return}}function U(Y,le){var Ee=Y.sortIndex-le.sortIndex;return Ee!==0?Ee:Y.id-le.id}var y=1,j=2,q=3,X=4,Q=5;function ce(Y,le){}var Ce=typeof performance=="object"&&typeof performance.now=="function";if(Ce){var Ne=performance;it.unstable_now=function(){return Ne.now()}}else{var ie=Date,ue=ie.now();it.unstable_now=function(){return ie.now()-ue}}var Le=1073741823,Ze=-1,gt=250,Te=5e3,se=1e4,ft=Le,te=[],Ae=[],ne=1,be=null,_e=q,vt=!1,pe=!1,Tt=!1,je=typeof setTimeout=="function"?setTimeout:null,xt=typeof clearTimeout=="function"?clearTimeout:null,Pe=typeof setImmediate!="undefined"?setImmediate:null,dt=typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0?navigator.scheduling.isInputPending.bind(navigator.scheduling):null;function Fe(Y){for(var le=g(Ae);le!==null;){if(le.callback===null)x(Ae);else if(le.startTime<=Y)x(Ae),le.sortIndex=le.expirationTime,S(te,le);else return;le=g(Ae)}}function _t(Y){if(Tt=!1,Fe(Y),!pe)if(g(te)!==null)pe=!0,Ua(Wt);else{var le=g(Ae);le!==null&&wn(_t,le.startTime-Y)}}function Wt(Y,le){pe=!1,Tt&&(Tt=!1,vr()),vt=!0;var Ee=_e;try{if(s)try{return Wn(Y,le)}catch(ot){if(be!==null){var ae=it.unstable_now();be.isQueued=!1}throw ot}else return Wn(Y,le)}finally{be=null,_e=Ee,vt=!1}}function Wn(Y,le){var Ee=le;for(Fe(Ee),be=g(te);be!==null&&!d&&!(be.expirationTime>Ee&&(!Y||Yt()));){var ae=be.callback;if(typeof ae=="function"){be.callback=null,_e=be.priorityLevel;var ot=be.expirationTime<=Ee,Pt=ae(ot);Ee=it.unstable_now(),typeof Pt=="function"?be.callback=Pt:be===g(te)&&x(te),Fe(Ee)}else x(te);be=g(te)}if(be!==null)return!0;var $=g(Ae);return $!==null&&wn(_t,$.startTime-Ee),!1}function Et(Y,le){switch(Y){case y:case j:case q:case X:case Q:break;default:Y=q}var Ee=_e;_e=Y;try{return le()}finally{_e=Ee}}function bn(Y){var le;switch(_e){case y:case j:case q:le=q;break;default:le=_e;break}var Ee=_e;_e=le;try{return Y()}finally{_e=Ee}}function ut(Y){var le=_e;return function(){var Ee=_e;_e=le;try{return Y.apply(this,arguments)}finally{_e=Ee}}}function It(Y,le,Ee){var ae=it.unstable_now(),ot;if(typeof Ee=="object"&&Ee!==null){var Pt=Ee.delay;typeof Pt=="number"&&Pt>0?ot=ae+Pt:ot=ae}else ot=ae;var $;switch(Y){case y:$=Ze;break;case j:$=gt;break;case Q:$=ft;break;case X:$=se;break;case q:default:$=Te;break}var J=ot+$,nt={id:ne++,callback:le,priorityLevel:Y,startTime:ot,expirationTime:J,sortIndex:-1};return ot>ae?(nt.sortIndex=ot,S(Ae,nt),g(te)===null&&nt===g(Ae)&&(Tt?vr():Tt=!0,wn(_t,ot-ae))):(nt.sortIndex=J,S(te,nt),!pe&&!vt&&(pe=!0,Ua(Wt))),nt}function ca(){}function In(){!pe&&!vt&&(pe=!0,Ua(Wt))}function Un(){return g(te)}function Mn(Y){Y.callback=null}function $n(){return _e}var Fn=!1,wt=null,En=-1,Bn=v,Rt=-1;function Yt(){var Y=it.unstable_now()-Rt;return!(Y<Bn)}function sa(){}function ea(Y){if(Y<0||Y>125){console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");return}Y>0?Bn=Math.floor(1e3/Y):Bn=v}var lt=function(){if(wt!==null){var Y=it.unstable_now();Rt=Y;var le=!0,Ee=!0;try{Ee=wt(le,Y)}finally{Ee?Vn():(Fn=!1,wt=null)}}else Fn=!1},Vn;if(typeof Pe=="function")Vn=function(){Pe(lt)};else if(typeof MessageChannel!="undefined"){var er=new MessageChannel,Na=er.port2;er.port1.onmessage=lt,Vn=function(){Na.postMessage(null)}}else Vn=function(){je(lt,0)};function Ua(Y){wt=Y,Fn||(Fn=!0,Vn())}function wn(Y,le){En=je(function(){Y(it.unstable_now())},le)}function vr(){xt(En),En=-1}var fa=sa,mr=null;it.unstable_IdlePriority=Q,it.unstable_ImmediatePriority=y,it.unstable_LowPriority=X,it.unstable_NormalPriority=q,it.unstable_Profiling=mr,it.unstable_UserBlockingPriority=j,it.unstable_cancelCallback=Mn,it.unstable_continueExecution=In,it.unstable_forceFrameRate=ea,it.unstable_getCurrentPriorityLevel=$n,it.unstable_getFirstCallbackNode=Un,it.unstable_next=bn,it.unstable_pauseExecution=ca,it.unstable_requestPaint=fa,it.unstable_runWithPriority=Et,it.unstable_scheduleCallback=It,it.unstable_shouldYield=Yt,it.unstable_wrapCallback=ut,typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error)})()});var sy=Fr((LT,cy)=>{"use strict";cy.exports=oy()});var dy=Fr((AT,fy)=>{"use strict";fy.exports=function(s){var v={},S=Ia(),g=sy(),x=S.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,B=!1;function L(e){B=e}function U(e){if(!B){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];j("warn",e,n)}}function y(e){if(!B){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];j("error",e,n)}}function j(e,t,n){{var a=x.ReactDebugCurrentFrame,r=a.getStackAddendum();r!==""&&(t+="%s",n=n.concat([r]));var i=n.map(function(u){return String(u)});i.unshift("Warning: "+t),Function.prototype.apply.call(console[e],console,i)}}var q=Object.assign;function X(e){return e._reactInternals}function Q(e,t){e._reactInternals=t}var ce=!1,Ce=!1,Ne=!1,ie=!1,ue=!1,Le=!0,Ze=!0,gt=!0,Te=0,se=1,ft=2,te=3,Ae=4,ne=5,be=6,_e=7,vt=8,pe=9,Tt=10,je=11,xt=12,Pe=13,dt=14,Fe=15,_t=16,Wt=17,Wn=18,Et=19,bn=21,ut=22,It=23,ca=24,In=25,Un=Symbol.for("react.element"),Mn=Symbol.for("react.portal"),$n=Symbol.for("react.fragment"),Fn=Symbol.for("react.strict_mode"),wt=Symbol.for("react.profiler"),En=Symbol.for("react.provider"),Bn=Symbol.for("react.context"),Rt=Symbol.for("react.forward_ref"),Yt=Symbol.for("react.suspense"),sa=Symbol.for("react.suspense_list"),ea=Symbol.for("react.memo"),lt=Symbol.for("react.lazy"),Vn=Symbol.for("react.scope"),er=Symbol.for("react.debug_trace_mode"),Na=Symbol.for("react.offscreen"),Ua=Symbol.for("react.legacy_hidden"),wn=Symbol.for("react.cache"),vr=Symbol.for("react.tracing_marker"),fa=Symbol.iterator,mr="@@iterator";function Y(e){if(e===null||typeof e!="object")return null;var t=fa&&e[fa]||e[mr];return typeof t=="function"?t:null}function le(e,t,n){var a=e.displayName;if(a)return a;var r=t.displayName||t.name||"";return r!==""?n+"("+r+")":n}function Ee(e){return e.displayName||"Context"}function ae(e){if(e==null)return null;if(typeof e.tag=="number"&&y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case $n:return"Fragment";case Mn:return"Portal";case wt:return"Profiler";case Fn:return"StrictMode";case Yt:return"Suspense";case sa:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Bn:var t=e;return Ee(t)+".Consumer";case En:var n=e;return Ee(n._context)+".Provider";case Rt:return le(e,e.render,"ForwardRef");case ea:var a=e.displayName||null;return a!==null?a:ae(e.type)||"Memo";case lt:{var r=e,i=r._payload,u=r._init;try{return ae(u(i))}catch(o){return null}}}return null}function ot(e,t,n){var a=t.displayName||t.name||"";return e.displayName||(a!==""?n+"("+a+")":n)}function Pt(e){return e.displayName||"Context"}function $(e){var t=e.tag,n=e.type;switch(t){case ca:return"Cache";case pe:var a=n;return Pt(a)+".Consumer";case Tt:var r=n;return Pt(r._context)+".Provider";case Wn:return"DehydratedFragment";case je:return ot(n,n.render,"ForwardRef");case _e:return"Fragment";case ne:return n;case Ae:return"Portal";case te:return"Root";case be:return"Text";case _t:return ae(n);case vt:return n===Fn?"StrictMode":"Mode";case ut:return"Offscreen";case xt:return"Profiler";case bn:return"Scope";case Pe:return"Suspense";case Et:return"SuspenseList";case In:return"TracingMarker";case se:case Te:case Wt:case ft:case dt:case Fe:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;break}return null}var J=0,nt=1,Ke=2,he=4,$t=16,da=32,hr=64,Be=128,Ln=256,ta=512,dn=1024,qt=2048,An=4096,pa=8192,tr=16384,si=qt|he|hr|ta|dn|tr,$i=32767,Ma=32768,Dt=65536,wr=131072,p=1048576,H=2097152,w=4194304,fe=8388608,De=16777216,Qe=33554432,Me=he|dn|0,xe=Ke|he|$t|da|ta|An|pa,mt=he|hr|ta|pa,We=qt|$t,ke=w|fe|H,pn=x.ReactCurrentOwner;function Yn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{var a=t;do t=a,(t.flags&(Ke|An))!==J&&(n=t.return),a=t.return;while(a)}return t.tag===te?n:null}function va(e){return Yn(e)===e}function Qt(e){{var t=pn.current;if(t!==null&&t.tag===se){var n=t,a=n.stateNode;a._warnedAboutRefsInRender||y("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.",$(n)||"A component"),a._warnedAboutRefsInRender=!0}}var r=X(e);return r?Yn(r)===r:!1}function yr(e){if(Yn(e)!==e)throw new Error("Unable to find node on an unmounted component.")}function La(e){var t=e.alternate;if(!t){var n=Yn(e);if(n===null)throw new Error("Unable to find node on an unmounted component.");return n!==e?null:e}for(var a=e,r=t;;){var i=a.return;if(i===null)break;var u=i.alternate;if(u===null){var o=i.return;if(o!==null){a=r=o;continue}break}if(i.child===u.child){for(var c=i.child;c;){if(c===a)return yr(i),e;if(c===r)return yr(i),t;c=c.sibling}throw new Error("Unable to find node on an unmounted component.")}if(a.return!==r.return)a=i,r=u;else{for(var f=!1,h=i.child;h;){if(h===a){f=!0,a=i,r=u;break}if(h===r){f=!0,r=i,a=u;break}h=h.sibling}if(!f){for(h=u.child;h;){if(h===a){f=!0,a=u,r=i;break}if(h===r){f=!0,r=u,a=i;break}h=h.sibling}if(!f)throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.")}}if(a.alternate!==r)throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.")}if(a.tag!==te)throw new Error("Unable to find node on an unmounted component.");return a.stateNode.current===a?e:t}function gr(e){var t=La(e);return t!==null?eu(t):null}function eu(e){if(e.tag===ne||e.tag===be)return e;for(var t=e.child;t!==null;){var n=eu(t);if(n!==null)return n;t=t.sibling}return null}function ml(e){var t=La(e);return t!==null?tu(t):null}function tu(e){if(e.tag===ne||e.tag===be)return e;for(var t=e.child;t!==null;){if(t.tag!==Ae){var n=tu(t);if(n!==null)return n}t=t.sibling}return null}var hl=Array.isArray;function vn(e){return hl(e)}var fi=s.getPublicInstance,yl=s.getRootHostContext,Cc=s.getChildHostContext,Tc=s.prepareForCommit,nu=s.resetAfterCommit,au=s.createInstance,Sr=s.appendInitialChild,di=s.finalizeInitialChildren,Yr=s.prepareUpdate,ru=s.shouldSetTextContent,iu=s.createTextInstance,gl=s.scheduleTimeout,xc=s.cancelTimeout,br=s.noTimeout,Pr=s.isPrimaryRenderer,Sl=s.warnsIfNotActing,Gt=s.supportsMutation,pi=s.supportsPersistence,At=s.supportsHydration,uu=s.getInstanceFromNode,_c=s.beforeActiveInstanceBlur,sp=s.afterActiveInstanceBlur,Dc=s.preparePortalMount,Oc=s.prepareScopeUpdate,fp=s.getInstanceFromScope,bl=s.getCurrentEventPriority,El=s.detachDeletedInstance,Rl=s.supportsMicrotasks,Nc=s.scheduleMicrotask,nr=s.supportsTestSelectors,Cl=s.findFiberRoot,Uc=s.getBoundingRect,Mc=s.getTextContent,qr=s.isHiddenSubtree,Tl=s.matchAccessibilityRole,vi=s.setFocusIfFocusable,Lc=s.setupIntersectionObserver,Er=s.appendChild,xl=s.appendChildToContainer,_l=s.commitTextUpdate,mi=s.commitMount,lu=s.commitUpdate,ou=s.insertBefore,cu=s.insertInContainerBefore,Ac=s.removeChild,zc=s.removeChildFromContainer,Dl=s.resetTextContent,Hc=s.hideInstance,l=s.hideTextInstance,m=s.unhideInstance,C=s.unhideTextInstance,_=s.clearContainer,V=s.cloneInstance,de=s.createContainerChildSet,W=s.appendChildToContainerChildSet,Re=s.finalizeContainerChildren,He=s.replaceContainerChildren,Ie=s.cloneHiddenInstance,at=s.cloneHiddenTextInstance,ct=s.canHydrateInstance,pt=s.canHydrateTextInstance,St=s.canHydrateSuspenseInstance,Ot=s.isSuspenseInstancePending,Rr=s.isSuspenseInstanceFallback,su=s.getSuspenseInstanceFallbackErrorDetails,Ol=s.registerSuspenseInstanceRetry,hi=s.getNextHydratableSibling,Nl=s.getFirstHydratableChild,jc=s.getFirstHydratableChildWithinContainer,Ul=s.getFirstHydratableChildWithinSuspenseInstance,Fc=s.hydrateInstance,By=s.hydrateTextInstance,Vy=s.hydrateSuspenseInstance,wy=s.getNextHydratableInstanceAfterSuspenseInstance,Yy=s.commitHydratedContainer,Py=s.commitHydratedSuspenseInstance,qy=s.clearSuspenseBoundary,Qy=s.clearSuspenseBoundaryFromContainer,Gy=s.shouldDeleteUnhydratedTailInstances,Ky=s.didNotMatchHydratedContainerTextInstance,ky=s.didNotMatchHydratedTextInstance,Xy=s.didNotHydrateInstanceWithinContainer,Jy=s.didNotHydrateInstanceWithinSuspenseInstance,Zy=s.didNotHydrateInstance,Wy=s.didNotFindHydratableInstanceWithinContainer,Iy=s.didNotFindHydratableTextInstanceWithinContainer,$y=s.didNotFindHydratableSuspenseInstanceWithinContainer,eg=s.didNotFindHydratableInstanceWithinSuspenseInstance,tg=s.didNotFindHydratableTextInstanceWithinSuspenseInstance,ng=s.didNotFindHydratableSuspenseInstanceWithinSuspenseInstance,ag=s.didNotFindHydratableInstance,rg=s.didNotFindHydratableTextInstance,ig=s.didNotFindHydratableSuspenseInstance,ug=s.errorHydratingContainer,fu=0,dp,pp,vp,mp,hp,yp,gp;function Sp(){}Sp.__reactDisabledLog=!0;function lg(){{if(fu===0){dp=console.log,pp=console.info,vp=console.warn,mp=console.error,hp=console.group,yp=console.groupCollapsed,gp=console.groupEnd;var e={configurable:!0,enumerable:!0,value:Sp,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}fu++}}function og(){{if(fu--,fu===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:q({},e,{value:dp}),info:q({},e,{value:pp}),warn:q({},e,{value:vp}),error:q({},e,{value:mp}),group:q({},e,{value:hp}),groupCollapsed:q({},e,{value:yp}),groupEnd:q({},e,{value:gp})})}fu<0&&y("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var Bc=x.ReactCurrentDispatcher,Vc;function Cr(e,t,n){{if(Vc===void 0)try{throw Error()}catch(r){var a=r.stack.trim().match(/\n( *(at )?)/);Vc=a&&a[1]||""}return`
`+Vc+e}}var wc=!1,Ml;{var cg=typeof WeakMap=="function"?WeakMap:Map;Ml=new cg}function Yc(e,t){if(!e||wc)return"";{var n=Ml.get(e);if(n!==void 0)return n}var a;wc=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var i;i=Bc.current,Bc.current=null,lg();try{if(t){var u=function(){throw Error()};if(Object.defineProperty(u.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(u,[])}catch(A){a=A}Reflect.construct(e,[],u)}else{try{u.call()}catch(A){a=A}e.call(u.prototype)}}else{try{throw Error()}catch(A){a=A}e()}}catch(A){if(A&&a&&typeof A.stack=="string"){for(var o=A.stack.split(`
`),c=a.stack.split(`
`),f=o.length-1,h=c.length-1;f>=1&&h>=0&&o[f]!==c[h];)h--;for(;f>=1&&h>=0;f--,h--)if(o[f]!==c[h]){if(f!==1||h!==1)do if(f--,h--,h<0||o[f]!==c[h]){var b=`
`+o[f].replace(" at new "," at ");return e.displayName&&b.includes("<anonymous>")&&(b=b.replace("<anonymous>",e.displayName)),typeof e=="function"&&Ml.set(e,b),b}while(f>=1&&h>=0);break}}}finally{wc=!1,Bc.current=i,og(),Error.prepareStackTrace=r}var T=e?e.displayName||e.name:"",N=T?Cr(T):"";return typeof e=="function"&&Ml.set(e,N),N}function sg(e,t,n){return Yc(e,!0)}function Pc(e,t,n){return Yc(e,!1)}function fg(e){var t=e.prototype;return!!(t&&t.isReactComponent)}function qc(e,t,n){if(e==null)return"";if(typeof e=="function")return Yc(e,fg(e));if(typeof e=="string")return Cr(e);switch(e){case Yt:return Cr("Suspense");case sa:return Cr("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case Rt:return Pc(e.render);case ea:return qc(e.type,t,n);case lt:{var a=e,r=a._payload,i=a._init;try{return qc(i(r),t,n)}catch(u){}}}return""}var bp=Object.prototype.hasOwnProperty,Ep={},Rp=x.ReactDebugCurrentFrame;function Ll(e){if(e){var t=e._owner,n=qc(e.type,e._source,t?t.type:null);Rp.setExtraStackFrame(n)}else Rp.setExtraStackFrame(null)}function ma(e,t,n,a,r){{var i=Function.call.bind(bp);for(var u in e)if(i(e,u)){var o=void 0;try{if(typeof e[u]!="function"){var c=Error((a||"React class")+": "+n+" type `"+u+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[u]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw c.name="Invariant Violation",c}o=e[u](t,u,a,n,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(f){o=f}o&&!(o instanceof Error)&&(Ll(r),y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",a||"React class",n,u,typeof o),Ll(null)),o instanceof Error&&!(o.message in Ep)&&(Ep[o.message]=!0,Ll(r),y("Failed %s type: %s",n,o.message),Ll(null))}}}var Qc=[],Al;Al=[];var ar=-1;function Tr(e){return{current:e}}function mn(e,t){if(ar<0){y("Unexpected pop.");return}t!==Al[ar]&&y("Unexpected Fiber popped."),e.current=Qc[ar],Qc[ar]=null,Al[ar]=null,ar--}function en(e,t,n){ar++,Qc[ar]=e.current,Al[ar]=n,e.current=t}var Gc;Gc={};var Pn={};Object.freeze(Pn);var rr=Tr(Pn),Aa=Tr(!1),Kc=Pn;function yi(e,t,n){return n&&za(t)?Kc:rr.current}function Cp(e,t,n){{var a=e.stateNode;a.__reactInternalMemoizedUnmaskedChildContext=t,a.__reactInternalMemoizedMaskedChildContext=n}}function gi(e,t){{var n=e.type,a=n.contextTypes;if(!a)return Pn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={};for(var u in a)i[u]=t[u];{var o=$(e)||"Unknown";ma(a,i,"context",o)}return r&&Cp(e,t,i),i}}function zl(){return Aa.current}function za(e){{var t=e.childContextTypes;return t!=null}}function Hl(e){mn(Aa,e),mn(rr,e)}function kc(e){mn(Aa,e),mn(rr,e)}function Tp(e,t,n){{if(rr.current!==Pn)throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");en(rr,t,e),en(Aa,n,e)}}function xp(e,t,n){{var a=e.stateNode,r=t.childContextTypes;if(typeof a.getChildContext!="function"){{var i=$(e)||"Unknown";Gc[i]||(Gc[i]=!0,y("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.",i,i))}return n}var u=a.getChildContext();for(var o in u)if(!(o in r))throw new Error(($(e)||"Unknown")+'.getChildContext(): key "'+o+'" is not defined in childContextTypes.');{var c=$(e)||"Unknown";ma(r,u,"child context",c)}return q({},n,u)}}function jl(e){{var t=e.stateNode,n=t&&t.__reactInternalMemoizedMergedChildContext||Pn;return Kc=rr.current,en(rr,n,e),en(Aa,Aa.current,e),!0}}function _p(e,t,n){{var a=e.stateNode;if(!a)throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");if(n){var r=xp(e,t,Kc);a.__reactInternalMemoizedMergedChildContext=r,mn(Aa,e),mn(rr,e),en(rr,r,e),en(Aa,n,e)}else mn(Aa,e),en(Aa,n,e)}}function dg(e){{if(!va(e)||e.tag!==se)throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");var t=e;do{switch(t.tag){case te:return t.stateNode.context;case se:{var n=t.type;if(za(n))return t.stateNode.__reactInternalMemoizedMergedChildContext;break}}t=t.return}while(t!==null);throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.")}}var Si=0,Dp=1,ve=0,qe=1,$e=2,Nt=8,Ha=16,Op=Math.clz32?Math.clz32:mg,pg=Math.log,vg=Math.LN2;function mg(e){var t=e>>>0;return t===0?32:31-(pg(t)/vg|0)|0}var Xc=31,z=0,Kt=0,ye=1,bi=2,ir=4,Qr=8,ja=16,du=32,Ei=4194240,pu=64,Jc=128,Zc=256,Wc=512,Ic=1024,$c=2048,es=4096,ts=8192,ns=16384,as=32768,rs=65536,is=131072,us=262144,ls=524288,os=1048576,cs=2097152,Fl=130023424,Ri=4194304,ss=8388608,fs=16777216,ds=33554432,ps=67108864,Np=Ri,vu=134217728,Up=268435455,mu=268435456,Gr=536870912,qn=1073741824;function hg(e){{if(e&ye)return"Sync";if(e&bi)return"InputContinuousHydration";if(e&ir)return"InputContinuous";if(e&Qr)return"DefaultHydration";if(e&ja)return"Default";if(e&du)return"TransitionHydration";if(e&Ei)return"Transition";if(e&Fl)return"Retry";if(e&vu)return"SelectiveHydration";if(e&mu)return"IdleHydration";if(e&Gr)return"Idle";if(e&qn)return"Offscreen"}}var st=-1,Bl=pu,Vl=Ri;function hu(e){switch(Kr(e)){case ye:return ye;case bi:return bi;case ir:return ir;case Qr:return Qr;case ja:return ja;case du:return du;case pu:case Jc:case Zc:case Wc:case Ic:case $c:case es:case ts:case ns:case as:case rs:case is:case us:case ls:case os:case cs:return e&Ei;case Ri:case ss:case fs:case ds:case ps:return e&Fl;case vu:return vu;case mu:return mu;case Gr:return Gr;case qn:return qn;default:return y("Should have found matching lanes. This is a bug in React."),e}}function wl(e,t){var n=e.pendingLanes;if(n===z)return z;var a=z,r=e.suspendedLanes,i=e.pingedLanes,u=n&Up;if(u!==z){var o=u&~r;if(o!==z)a=hu(o);else{var c=u&i;c!==z&&(a=hu(c))}}else{var f=n&~r;f!==z?a=hu(f):i!==z&&(a=hu(i))}if(a===z)return z;if(t!==z&&t!==a&&(t&r)===z){var h=Kr(a),b=Kr(t);if(h>=b||h===ja&&(b&Ei)!==z)return t}(a&ir)!==z&&(a|=n&ja);var T=e.entangledLanes;if(T!==z)for(var N=e.entanglements,A=a&T;A>0;){var M=kr(A),ee=1<<M;a|=N[M],A&=~ee}return a}function yg(e,t){for(var n=e.eventTimes,a=st;t>0;){var r=kr(t),i=1<<r,u=n[r];u>a&&(a=u),t&=~i}return a}function gg(e,t){switch(e){case ye:case bi:case ir:return t+250;case Qr:case ja:case du:case pu:case Jc:case Zc:case Wc:case Ic:case $c:case es:case ts:case ns:case as:case rs:case is:case us:case ls:case os:case cs:return t+5e3;case Ri:case ss:case fs:case ds:case ps:return st;case vu:case mu:case Gr:case qn:return st;default:return y("Should have found matching lanes. This is a bug in React."),st}}function Sg(e,t){for(var n=e.pendingLanes,a=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,u=n;u>0;){var o=kr(u),c=1<<o,f=i[o];f===st?((c&a)===z||(c&r)!==z)&&(i[o]=gg(c,t)):f<=t&&(e.expiredLanes|=c),u&=~c}}function bg(e){return hu(e.pendingLanes)}function vs(e){var t=e.pendingLanes&~qn;return t!==z?t:t&qn?qn:z}function Eg(e){return(e&ye)!==z}function ms(e){return(e&Up)!==z}function Mp(e){return(e&Fl)===e}function Rg(e){var t=ye|ir|ja;return(e&t)===z}function Cg(e){return(e&Ei)===e}function Yl(e,t){var n=bi|ir|Qr|ja;return(t&n)!==z}function Tg(e,t){return(t&e.expiredLanes)!==z}function Lp(e){return(e&Ei)!==z}function Ap(){var e=Bl;return Bl<<=1,(Bl&Ei)===z&&(Bl=pu),e}function xg(){var e=Vl;return Vl<<=1,(Vl&Fl)===z&&(Vl=Ri),e}function Kr(e){return e&-e}function yu(e){return Kr(e)}function kr(e){return 31-Op(e)}function hs(e){return kr(e)}function Qn(e,t){return(e&t)!==z}function Ci(e,t){return(e&t)===t}function Oe(e,t){return e|t}function Pl(e,t){return e&~t}function zp(e,t){return e&t}function HC(e){return e}function _g(e,t){return e!==Kt&&e<t?e:t}function ys(e){for(var t=[],n=0;n<Xc;n++)t.push(e);return t}function gu(e,t,n){e.pendingLanes|=t,t!==Gr&&(e.suspendedLanes=z,e.pingedLanes=z);var a=e.eventTimes,r=hs(t);a[r]=n}function Dg(e,t){e.suspendedLanes|=t,e.pingedLanes&=~t;for(var n=e.expirationTimes,a=t;a>0;){var r=kr(a),i=1<<r;n[r]=st,a&=~i}}function Hp(e,t,n){e.pingedLanes|=e.suspendedLanes&t}function Og(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=z,e.pingedLanes=z,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t;for(var a=e.entanglements,r=e.eventTimes,i=e.expirationTimes,u=n;u>0;){var o=kr(u),c=1<<o;a[o]=z,r[o]=st,i[o]=st,u&=~c}}function gs(e,t){for(var n=e.entangledLanes|=t,a=e.entanglements,r=n;r;){var i=kr(r),u=1<<i;u&t|a[i]&t&&(a[i]|=t),r&=~u}}function Ng(e,t){var n=Kr(t),a;switch(n){case ir:a=bi;break;case ja:a=Qr;break;case pu:case Jc:case Zc:case Wc:case Ic:case $c:case es:case ts:case ns:case as:case rs:case is:case us:case ls:case os:case cs:case Ri:case ss:case fs:case ds:case ps:a=du;break;case Gr:a=mu;break;default:a=Kt;break}return(a&(e.suspendedLanes|t))!==Kt?Kt:a}function jp(e,t,n){if(ya)for(var a=e.pendingUpdatersLaneMap;n>0;){var r=hs(n),i=1<<r,u=a[r];u.add(t),n&=~i}}function Fp(e,t){if(ya)for(var n=e.pendingUpdatersLaneMap,a=e.memoizedUpdaters;t>0;){var r=hs(t),i=1<<r,u=n[r];u.size>0&&(u.forEach(function(o){var c=o.alternate;(c===null||!a.has(c))&&a.add(o)}),u.clear()),t&=~i}}function Bp(e,t){return null}var Fa=ye,Su=ir,bu=ja,Ss=Gr,Eu=Kt;function ha(){return Eu}function kt(e){Eu=e}function Ug(e,t){var n=Eu;try{return Eu=e,t()}finally{Eu=n}}function Mg(e,t){return e!==0&&e<t?e:t}function Lg(e,t){return e===0||e>t?e:t}function Vp(e,t){return e!==0&&e<t}function wp(e){var t=Kr(e);return Vp(Fa,t)?Vp(Su,t)?ms(t)?bu:Ss:Su:Fa}var Yp=g.unstable_scheduleCallback,Ag=g.unstable_cancelCallback,zg=g.unstable_shouldYield,Hg=g.unstable_requestPaint,Xt=g.unstable_now,ql=g.unstable_ImmediatePriority,Pp=g.unstable_UserBlockingPriority,Ti=g.unstable_NormalPriority,qp=g.unstable_IdlePriority,jg=g.unstable_yieldValue,Fg=g.unstable_setDisableYieldValue,Xr=null,tn=null,G=null,Ba=!1,ya=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined";function Bg(e){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined")return!1;var t=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(t.isDisabled)return!0;if(!t.supportsFiber)return y("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"),!0;try{Le&&(e=q({},e,{getLaneLabelMap:Qg,injectProfilingHooks:qg})),Xr=t.inject(e),tn=t}catch(n){y("React instrumentation encountered an error: %s.",n)}return!!t.checkDCE}function Vg(e,t){if(tn&&typeof tn.onScheduleFiberRoot=="function")try{tn.onScheduleFiberRoot(Xr,e,t)}catch(n){Ba||(Ba=!0,y("React instrumentation encountered an error: %s",n))}}function wg(e,t){if(tn&&typeof tn.onCommitFiberRoot=="function")try{var n=(e.current.flags&Be)===Be;if(Ze){var a;switch(t){case Fa:a=ql;break;case Su:a=Pp;break;case bu:a=Ti;break;case Ss:a=qp;break;default:a=Ti;break}tn.onCommitFiberRoot(Xr,e,a,n)}else tn.onCommitFiberRoot(Xr,e,void 0,n)}catch(r){Ba||(Ba=!0,y("React instrumentation encountered an error: %s",r))}}function Yg(e){if(tn&&typeof tn.onPostCommitFiberRoot=="function")try{tn.onPostCommitFiberRoot(Xr,e)}catch(t){Ba||(Ba=!0,y("React instrumentation encountered an error: %s",t))}}function Pg(e){if(tn&&typeof tn.onCommitFiberUnmount=="function")try{tn.onCommitFiberUnmount(Xr,e)}catch(t){Ba||(Ba=!0,y("React instrumentation encountered an error: %s",t))}}function Jt(e){if(typeof jg=="function"&&(Fg(e),L(e)),tn&&typeof tn.setStrictMode=="function")try{tn.setStrictMode(Xr,e)}catch(t){Ba||(Ba=!0,y("React instrumentation encountered an error: %s",t))}}function qg(e){G=e}function Qg(){{for(var e=new Map,t=1,n=0;n<Xc;n++){var a=hg(t);e.set(t,a),t*=2}return e}}function Gg(e){G!==null&&typeof G.markCommitStarted=="function"&&G.markCommitStarted(e)}function Qp(){G!==null&&typeof G.markCommitStopped=="function"&&G.markCommitStopped()}function Ru(e){G!==null&&typeof G.markComponentRenderStarted=="function"&&G.markComponentRenderStarted(e)}function xi(){G!==null&&typeof G.markComponentRenderStopped=="function"&&G.markComponentRenderStopped()}function Kg(e){G!==null&&typeof G.markComponentPassiveEffectMountStarted=="function"&&G.markComponentPassiveEffectMountStarted(e)}function kg(){G!==null&&typeof G.markComponentPassiveEffectMountStopped=="function"&&G.markComponentPassiveEffectMountStopped()}function Xg(e){G!==null&&typeof G.markComponentPassiveEffectUnmountStarted=="function"&&G.markComponentPassiveEffectUnmountStarted(e)}function Jg(){G!==null&&typeof G.markComponentPassiveEffectUnmountStopped=="function"&&G.markComponentPassiveEffectUnmountStopped()}function Zg(e){G!==null&&typeof G.markComponentLayoutEffectMountStarted=="function"&&G.markComponentLayoutEffectMountStarted(e)}function Wg(){G!==null&&typeof G.markComponentLayoutEffectMountStopped=="function"&&G.markComponentLayoutEffectMountStopped()}function Gp(e){G!==null&&typeof G.markComponentLayoutEffectUnmountStarted=="function"&&G.markComponentLayoutEffectUnmountStarted(e)}function Kp(){G!==null&&typeof G.markComponentLayoutEffectUnmountStopped=="function"&&G.markComponentLayoutEffectUnmountStopped()}function Ig(e,t,n){G!==null&&typeof G.markComponentErrored=="function"&&G.markComponentErrored(e,t,n)}function $g(e,t,n){G!==null&&typeof G.markComponentSuspended=="function"&&G.markComponentSuspended(e,t,n)}function eS(e){G!==null&&typeof G.markLayoutEffectsStarted=="function"&&G.markLayoutEffectsStarted(e)}function tS(){G!==null&&typeof G.markLayoutEffectsStopped=="function"&&G.markLayoutEffectsStopped()}function nS(e){G!==null&&typeof G.markPassiveEffectsStarted=="function"&&G.markPassiveEffectsStarted(e)}function aS(){G!==null&&typeof G.markPassiveEffectsStopped=="function"&&G.markPassiveEffectsStopped()}function kp(e){G!==null&&typeof G.markRenderStarted=="function"&&G.markRenderStarted(e)}function rS(){G!==null&&typeof G.markRenderYielded=="function"&&G.markRenderYielded()}function Xp(){G!==null&&typeof G.markRenderStopped=="function"&&G.markRenderStopped()}function iS(e){G!==null&&typeof G.markRenderScheduled=="function"&&G.markRenderScheduled(e)}function uS(e,t){G!==null&&typeof G.markForceUpdateScheduled=="function"&&G.markForceUpdateScheduled(e,t)}function bs(e,t){G!==null&&typeof G.markStateUpdateScheduled=="function"&&G.markStateUpdateScheduled(e,t)}function lS(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Gn=typeof Object.is=="function"?Object.is:lS,ur=null,Es=!1,Rs=!1;function Jp(e){ur===null?ur=[e]:ur.push(e)}function oS(e){Es=!0,Jp(e)}function Zp(){Es&&Va()}function Va(){if(!Rs&&ur!==null){Rs=!0;var e=0,t=ha();try{var n=!0,a=ur;for(kt(Fa);e<a.length;e++){var r=a[e];do r=r(n);while(r!==null)}ur=null,Es=!1}catch(i){throw ur!==null&&(ur=ur.slice(e+1)),Yp(ql,Va),i}finally{kt(t),Rs=!1}}return null}function Wp(e){var t=e.current.memoizedState;return t.isDehydrated}var _i=[],Di=0,Ql=null,Gl=0,na=[],aa=0,Jr=null,lr=1,or="";function cS(e){return Wr(),(e.flags&p)!==J}function sS(e){return Wr(),Gl}function fS(){var e=or,t=lr,n=t&~dS(t);return n.toString(32)+e}function Zr(e,t){Wr(),_i[Di++]=Gl,_i[Di++]=Ql,Ql=e,Gl=t}function Ip(e,t,n){Wr(),na[aa++]=lr,na[aa++]=or,na[aa++]=Jr,Jr=e;var a=lr,r=or,i=Kl(a)-1,u=a&~(1<<i),o=n+1,c=Kl(t)+i;if(c>30){var f=i-i%5,h=(1<<f)-1,b=(u&h).toString(32),T=u>>f,N=i-f,A=Kl(t)+N,M=o<<N,ee=M|T,me=b+r;lr=1<<A|ee,or=me}else{var re=o<<i,Je=re|u,Ye=r;lr=1<<c|Je,or=Ye}}function Cs(e){Wr();var t=e.return;if(t!==null){var n=1,a=0;Zr(e,n),Ip(e,n,a)}}function Kl(e){return 32-Op(e)}function dS(e){return 1<<Kl(e)-1}function Ts(e){for(;e===Ql;)Ql=_i[--Di],_i[Di]=null,Gl=_i[--Di],_i[Di]=null;for(;e===Jr;)Jr=na[--aa],na[aa]=null,or=na[--aa],na[aa]=null,lr=na[--aa],na[aa]=null}function pS(){return Wr(),Jr!==null?{id:lr,overflow:or}:null}function vS(e,t){Wr(),na[aa++]=lr,na[aa++]=or,na[aa++]=Jr,lr=t.id,or=t.overflow,Jr=e}function Wr(){an()||y("Expected to be hydrating. This is a bug in React. Please file an issue.")}var nn=null,ra=null,ga=!1,xr=!1,_r=null;function mS(){ga&&y("We should not be hydrating here. This is a bug in React. Please file a bug.")}function $p(){xr=!0}function hS(){return xr}function yS(e){if(!At)return!1;var t=e.stateNode.containerInfo;return ra=jc(t),nn=e,ga=!0,_r=null,xr=!1,!0}function gS(e,t,n){return At?(ra=Ul(t),nn=e,ga=!0,_r=null,xr=!1,n!==null&&vS(e,n),!0):!1}function ev(e,t){switch(e.tag){case te:{Xy(e.stateNode.containerInfo,t);break}case ne:{var n=(e.mode&qe)!==ve;Zy(e.type,e.memoizedProps,e.stateNode,t,n);break}case Pe:{var a=e.memoizedState;a.dehydrated!==null&&Jy(a.dehydrated,t);break}}}function tv(e,t){ev(e,t);var n=QR();n.stateNode=t,n.return=e;var a=e.deletions;a===null?(e.deletions=[n],e.flags|=$t):a.push(n)}function xs(e,t){{if(xr)return;switch(e.tag){case te:{var n=e.stateNode.containerInfo;switch(t.tag){case ne:var a=t.type,r=t.pendingProps;Wy(n,a,r);break;case be:var i=t.pendingProps;Iy(n,i);break;case Pe:$y(n);break}break}case ne:{var u=e.type,o=e.memoizedProps,c=e.stateNode;switch(t.tag){case ne:{var f=t.type,h=t.pendingProps,b=(e.mode&qe)!==ve;ag(u,o,c,f,h,b);break}case be:{var T=t.pendingProps,N=(e.mode&qe)!==ve;rg(u,o,c,T,N);break}case Pe:{ig(u,o,c);break}}break}case Pe:{var A=e.memoizedState,M=A.dehydrated;if(M!==null)switch(t.tag){case ne:var ee=t.type,me=t.pendingProps;eg(M,ee,me);break;case be:var re=t.pendingProps;tg(M,re);break;case Pe:ng(M);break}break}default:return}}}function nv(e,t){t.flags=t.flags&~An|Ke,xs(e,t)}function av(e,t){switch(e.tag){case ne:{var n=e.type,a=e.pendingProps,r=ct(t,n,a);return r!==null?(e.stateNode=r,nn=e,ra=Nl(r),!0):!1}case be:{var i=e.pendingProps,u=pt(t,i);return u!==null?(e.stateNode=u,nn=e,ra=null,!0):!1}case Pe:{var o=St(t);if(o!==null){var c={dehydrated:o,treeContext:pS(),retryLane:qn};e.memoizedState=c;var f=GR(o);return f.return=e,e.child=f,nn=e,ra=null,!0}return!1}default:return!1}}function _s(e){return(e.mode&qe)!==ve&&(e.flags&Be)===J}function Ds(e){throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.")}function Os(e){if(ga){var t=ra;if(!t){_s(e)&&(xs(nn,e),Ds()),nv(nn,e),ga=!1,nn=e;return}var n=t;if(!av(e,t)){_s(e)&&(xs(nn,e),Ds()),t=hi(n);var a=nn;if(!t||!av(e,t)){nv(nn,e),ga=!1,nn=e;return}tv(a,n)}}}function SS(e,t,n){if(!At)throw new Error("Expected prepareToHydrateHostInstance() to never be called. This error is likely caused by a bug in React. Please file an issue.");var a=e.stateNode,r=!xr,i=Fc(a,e.type,e.memoizedProps,t,n,e,r);return e.updateQueue=i,i!==null}function bS(e){if(!At)throw new Error("Expected prepareToHydrateHostTextInstance() to never be called. This error is likely caused by a bug in React. Please file an issue.");var t=e.stateNode,n=e.memoizedProps,a=!xr,r=By(t,n,e,a);if(r){var i=nn;if(i!==null)switch(i.tag){case te:{var u=i.stateNode.containerInfo,o=(i.mode&qe)!==ve;Ky(u,t,n,o);break}case ne:{var c=i.type,f=i.memoizedProps,h=i.stateNode,b=(i.mode&qe)!==ve;ky(c,f,h,t,n,b);break}}}return r}function ES(e){if(!At)throw new Error("Expected prepareToHydrateHostSuspenseInstance() to never be called. This error is likely caused by a bug in React. Please file an issue.");var t=e.memoizedState,n=t!==null?t.dehydrated:null;if(!n)throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");Vy(n,e)}function RS(e){if(!At)throw new Error("Expected skipPastDehydratedSuspenseInstance() to never be called. This error is likely caused by a bug in React. Please file an issue.");var t=e.memoizedState,n=t!==null?t.dehydrated:null;if(!n)throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");return wy(n)}function rv(e){for(var t=e.return;t!==null&&t.tag!==ne&&t.tag!==te&&t.tag!==Pe;)t=t.return;nn=t}function kl(e){if(!At||e!==nn)return!1;if(!ga)return rv(e),ga=!0,!1;if(e.tag!==te&&(e.tag!==ne||Gy(e.type)&&!ru(e.type,e.memoizedProps))){var t=ra;if(t)if(_s(e))iv(e),Ds();else for(;t;)tv(e,t),t=hi(t)}return rv(e),e.tag===Pe?ra=RS(e):ra=nn?hi(e.stateNode):null,!0}function CS(){return ga&&ra!==null}function iv(e){for(var t=ra;t;)ev(e,t),t=hi(t)}function Oi(){At&&(nn=null,ra=null,ga=!1,xr=!1)}function uv(){_r!==null&&(uh(_r),_r=null)}function an(){return ga}function Ns(e){_r===null?_r=[e]:_r.push(e)}var TS=x.ReactCurrentBatchConfig,xS=null;function _S(){return TS.transition}function Xl(e,t){if(Gn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(var r=0;r<n.length;r++){var i=n[r];if(!bp.call(t,i)||!Gn(e[i],t[i]))return!1}return!0}function DS(e){var t=e._debugOwner?e._debugOwner.type:null,n=e._debugSource;switch(e.tag){case ne:return Cr(e.type);case _t:return Cr("Lazy");case Pe:return Cr("Suspense");case Et:return Cr("SuspenseList");case Te:case ft:case Fe:return Pc(e.type);case je:return Pc(e.type.render);case se:return sg(e.type);default:return""}}function lv(e){try{var t="",n=e;do t+=DS(n),n=n.return;while(n);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var ov=x.ReactDebugCurrentFrame,Kn=null,Cu=!1;function OS(){{if(Kn===null)return null;var e=Kn._debugOwner;if(e!==null&&typeof e!="undefined")return $(e)}return null}function NS(){return Kn===null?"":lv(Kn)}function Rn(){ov.getCurrentStack=null,Kn=null,Cu=!1}function Ct(e){ov.getCurrentStack=e===null?null:NS,Kn=e,Cu=!1}function US(){return Kn}function wa(e){Cu=e}var Sa={recordUnsafeLifecycleWarnings:function(e,t){},flushPendingUnsafeLifecycleWarnings:function(){},recordLegacyContextWarning:function(e,t){},flushLegacyContextWarning:function(){},discardPendingWarnings:function(){}};{var MS=function(e){for(var t=null,n=e;n!==null;)n.mode&Nt&&(t=n),n=n.return;return t},Ir=function(e){var t=[];return e.forEach(function(n){t.push(n)}),t.sort().join(", ")},Tu=[],xu=[],_u=[],Du=[],Ou=[],Nu=[],$r=new Set;Sa.recordUnsafeLifecycleWarnings=function(e,t){$r.has(e.type)||(typeof t.componentWillMount=="function"&&t.componentWillMount.__suppressDeprecationWarning!==!0&&Tu.push(e),e.mode&Nt&&typeof t.UNSAFE_componentWillMount=="function"&&xu.push(e),typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps.__suppressDeprecationWarning!==!0&&_u.push(e),e.mode&Nt&&typeof t.UNSAFE_componentWillReceiveProps=="function"&&Du.push(e),typeof t.componentWillUpdate=="function"&&t.componentWillUpdate.__suppressDeprecationWarning!==!0&&Ou.push(e),e.mode&Nt&&typeof t.UNSAFE_componentWillUpdate=="function"&&Nu.push(e))},Sa.flushPendingUnsafeLifecycleWarnings=function(){var e=new Set;Tu.length>0&&(Tu.forEach(function(T){e.add($(T)||"Component"),$r.add(T.type)}),Tu=[]);var t=new Set;xu.length>0&&(xu.forEach(function(T){t.add($(T)||"Component"),$r.add(T.type)}),xu=[]);var n=new Set;_u.length>0&&(_u.forEach(function(T){n.add($(T)||"Component"),$r.add(T.type)}),_u=[]);var a=new Set;Du.length>0&&(Du.forEach(function(T){a.add($(T)||"Component"),$r.add(T.type)}),Du=[]);var r=new Set;Ou.length>0&&(Ou.forEach(function(T){r.add($(T)||"Component"),$r.add(T.type)}),Ou=[]);var i=new Set;if(Nu.length>0&&(Nu.forEach(function(T){i.add($(T)||"Component"),$r.add(T.type)}),Nu=[]),t.size>0){var u=Ir(t);y(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`,u)}if(a.size>0){var o=Ir(a);y(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`,o)}if(i.size>0){var c=Ir(i);y(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`,c)}if(e.size>0){var f=Ir(e);U(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,f)}if(n.size>0){var h=Ir(n);U(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,h)}if(r.size>0){var b=Ir(r);U(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,b)}};var Jl=new Map,cv=new Set;Sa.recordLegacyContextWarning=function(e,t){var n=MS(e);if(n===null){y("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");return}if(!cv.has(e.type)){var a=Jl.get(n);(e.type.contextTypes!=null||e.type.childContextTypes!=null||t!==null&&typeof t.getChildContext=="function")&&(a===void 0&&(a=[],Jl.set(n,a)),a.push(e))}},Sa.flushLegacyContextWarning=function(){Jl.forEach(function(e,t){if(e.length!==0){var n=e[0],a=new Set;e.forEach(function(i){a.add($(i)||"Component"),cv.add(i.type)});var r=Ir(a);try{Ct(n),y(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`,r)}finally{Rn()}}})},Sa.discardPendingWarnings=function(){Tu=[],xu=[],_u=[],Du=[],Ou=[],Nu=[],Jl=new Map}}function sv(e){{var t=typeof Symbol=="function"&&Symbol.toStringTag,n=t&&e[Symbol.toStringTag]||e.constructor.name||"Object";return n}}function fv(e){try{return Us(e),!1}catch(t){return!0}}function Us(e){return""+e}function LS(e){if(fv(e))return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",sv(e)),Us(e)}function AS(e,t){if(fv(e))return y("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.",t,sv(e)),Us(e)}function ba(e,t){if(e&&e.defaultProps){var n=q({},t),a=e.defaultProps;for(var r in a)n[r]===void 0&&(n[r]=a[r]);return n}return t}var Zl=Tr(null),Uu;Uu={};var Wl=null,Ni=null,Ms=null,Il=!1;function $l(){Wl=null,Ni=null,Ms=null,Il=!1}function dv(){Il=!0}function pv(){Il=!1}function vv(e,t,n){Pr?(en(Zl,t._currentValue,e),t._currentValue=n,t._currentRenderer!==void 0&&t._currentRenderer!==null&&t._currentRenderer!==Uu&&y("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."),t._currentRenderer=Uu):(en(Zl,t._currentValue2,e),t._currentValue2=n,t._currentRenderer2!==void 0&&t._currentRenderer2!==null&&t._currentRenderer2!==Uu&&y("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."),t._currentRenderer2=Uu)}function Ls(e,t){var n=Zl.current;mn(Zl,t),Pr?e._currentValue=n:e._currentValue2=n}function As(e,t,n){for(var a=e;a!==null;){var r=a.alternate;if(Ci(a.childLanes,t)?r!==null&&!Ci(r.childLanes,t)&&(r.childLanes=Oe(r.childLanes,t)):(a.childLanes=Oe(a.childLanes,t),r!==null&&(r.childLanes=Oe(r.childLanes,t))),a===n)break;a=a.return}a!==n&&y("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.")}function zS(e,t,n){HS(e,t,n)}function HS(e,t,n){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var r=void 0,i=a.dependencies;if(i!==null){r=a.child;for(var u=i.firstContext;u!==null;){if(u.context===t){if(a.tag===se){var o=yu(n),c=cr(st,o);c.tag=to;var f=a.updateQueue;if(f!==null){var h=f.shared,b=h.pending;b===null?c.next=c:(c.next=b.next,b.next=c),h.pending=c}}a.lanes=Oe(a.lanes,n);var T=a.alternate;T!==null&&(T.lanes=Oe(T.lanes,n)),As(a.return,n,e),i.lanes=Oe(i.lanes,n);break}u=u.next}}else if(a.tag===Tt)r=a.type===e.type?null:a.child;else if(a.tag===Wn){var N=a.return;if(N===null)throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");N.lanes=Oe(N.lanes,n);var A=N.alternate;A!==null&&(A.lanes=Oe(A.lanes,n)),As(N,n,e),r=a.sibling}else r=a.child;if(r!==null)r.return=a;else for(r=a;r!==null;){if(r===e){r=null;break}var M=r.sibling;if(M!==null){M.return=r.return,r=M;break}r=r.return}a=r}}function Ui(e,t){Wl=e,Ni=null,Ms=null;var n=e.dependencies;if(n!==null){var a=n.firstContext;a!==null&&(Qn(n.lanes,t)&&Gu(),n.firstContext=null)}}function Ut(e){Il&&y("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");var t=Pr?e._currentValue:e._currentValue2;if(Ms!==e){var n={context:e,memoizedValue:t,next:null};if(Ni===null){if(Wl===null)throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");Ni=n,Wl.dependencies={lanes:z,firstContext:n}}else Ni=Ni.next=n}return t}var ei=null;function zs(e){ei===null?ei=[e]:ei.push(e)}function jS(){if(ei!==null){for(var e=0;e<ei.length;e++){var t=ei[e],n=t.interleaved;if(n!==null){t.interleaved=null;var a=n.next,r=t.pending;if(r!==null){var i=r.next;r.next=a,n.next=i}t.pending=n}}ei=null}}function mv(e,t,n,a){var r=t.interleaved;return r===null?(n.next=n,zs(t)):(n.next=r.next,r.next=n),t.interleaved=n,eo(e,a)}function FS(e,t,n,a){var r=t.interleaved;r===null?(n.next=n,zs(t)):(n.next=r.next,r.next=n),t.interleaved=n}function BS(e,t,n,a){var r=t.interleaved;return r===null?(n.next=n,zs(t)):(n.next=r.next,r.next=n),t.interleaved=n,eo(e,a)}function Cn(e,t){return eo(e,t)}var VS=eo;function eo(e,t){e.lanes=Oe(e.lanes,t);var n=e.alternate;n!==null&&(n.lanes=Oe(n.lanes,t)),n===null&&(e.flags&(Ke|An))!==J&&yh(e);for(var a=e,r=e.return;r!==null;)r.childLanes=Oe(r.childLanes,t),n=r.alternate,n!==null?n.childLanes=Oe(n.childLanes,t):(r.flags&(Ke|An))!==J&&yh(e),a=r,r=r.return;if(a.tag===te){var i=a.stateNode;return i}else return null}var hv=0,yv=1,to=2,Hs=3,no=!1,js,ao;js=!1,ao=null;function Fs(e){var t={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:z},effects:null};e.updateQueue=t}function gv(e,t){var n=t.updateQueue,a=e.updateQueue;if(n===a){var r={baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,effects:a.effects};t.updateQueue=r}}function cr(e,t){var n={eventTime:e,lane:t,tag:hv,payload:null,callback:null,next:null};return n}function Dr(e,t,n){var a=e.updateQueue;if(a===null)return null;var r=a.shared;if(ao===r&&!js&&(y("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."),js=!0),IE()){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,VS(e,n)}else return BS(e,r,t,n)}function ro(e,t,n){var a=t.updateQueue;if(a!==null){var r=a.shared;if(Lp(n)){var i=r.lanes;i=zp(i,e.pendingLanes);var u=Oe(i,n);r.lanes=u,gs(e,u)}}}function Bs(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null){var r=a.updateQueue;if(n===r){var i=null,u=null,o=n.firstBaseUpdate;if(o!==null){var c=o;do{var f={eventTime:c.eventTime,lane:c.lane,tag:c.tag,payload:c.payload,callback:c.callback,next:null};u===null?i=u=f:(u.next=f,u=f),c=c.next}while(c!==null);u===null?i=u=t:(u.next=t,u=t)}else i=u=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:u,shared:r.shared,effects:r.effects},e.updateQueue=n;return}}var h=n.lastBaseUpdate;h===null?n.firstBaseUpdate=t:h.next=t,n.lastBaseUpdate=t}function wS(e,t,n,a,r,i){switch(n.tag){case yv:{var u=n.payload;if(typeof u=="function"){dv();var o=u.call(i,a,r);{if(e.mode&Nt){Jt(!0);try{u.call(i,a,r)}finally{Jt(!1)}}pv()}return o}return u}case Hs:e.flags=e.flags&~Dt|Be;case hv:{var c=n.payload,f;if(typeof c=="function"){dv(),f=c.call(i,a,r);{if(e.mode&Nt){Jt(!0);try{c.call(i,a,r)}finally{Jt(!1)}}pv()}}else f=c;return f==null?a:q({},a,f)}case to:return no=!0,a}return a}function io(e,t,n,a){var r=e.updateQueue;no=!1,ao=r.shared;var i=r.firstBaseUpdate,u=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var c=o,f=c.next;c.next=null,u===null?i=f:u.next=f,u=c;var h=e.alternate;if(h!==null){var b=h.updateQueue,T=b.lastBaseUpdate;T!==u&&(T===null?b.firstBaseUpdate=f:T.next=f,b.lastBaseUpdate=c)}}if(i!==null){var N=r.baseState,A=z,M=null,ee=null,me=null,re=i;do{var Je=re.lane,Ye=re.eventTime;if(Ci(a,Je)){if(me!==null){var D={eventTime:Ye,lane:Kt,tag:re.tag,payload:re.payload,callback:re.callback,next:null};me=me.next=D}N=wS(e,r,re,N,t,n);var E=re.callback;if(E!==null&&re.lane!==Kt){e.flags|=hr;var F=r.effects;F===null?r.effects=[re]:F.push(re)}}else{var R={eventTime:Ye,lane:Je,tag:re.tag,payload:re.payload,callback:re.callback,next:null};me===null?(ee=me=R,M=N):me=me.next=R,A=Oe(A,Je)}if(re=re.next,re===null){if(o=r.shared.pending,o===null)break;var I=o,k=I.next;I.next=null,re=k,r.lastBaseUpdate=I,r.shared.pending=null}}while(!0);me===null&&(M=N),r.baseState=M,r.firstBaseUpdate=ee,r.lastBaseUpdate=me;var Ve=r.shared.interleaved;if(Ve!==null){var ge=Ve;do A=Oe(A,ge.lane),ge=ge.next;while(ge!==Ve)}else i===null&&(r.shared.lanes=z);il(A),e.lanes=A,e.memoizedState=N}ao=null}function YS(e,t){if(typeof e!="function")throw new Error("Invalid argument passed as callback. Expected a function. Instead "+("received: "+e));e.call(t)}function Sv(){no=!1}function uo(){return no}function bv(e,t,n){var a=t.effects;if(t.effects=null,a!==null)for(var r=0;r<a.length;r++){var i=a[r],u=i.callback;u!==null&&(i.callback=null,YS(u,n))}}var Vs={},Ev=new S.Component().refs,ws,Ys,Ps,qs,Qs,Rv,lo,Gs,Ks,ks;{ws=new Set,Ys=new Set,Ps=new Set,qs=new Set,Gs=new Set,Qs=new Set,Ks=new Set,ks=new Set;var Cv=new Set;lo=function(e,t){if(!(e===null||typeof e=="function")){var n=t+"_"+e;Cv.has(n)||(Cv.add(n),y("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.",t,e))}},Rv=function(e,t){if(t===void 0){var n=ae(e)||"Component";Qs.has(n)||(Qs.add(n),y("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.",n))}},Object.defineProperty(Vs,"_processChildContext",{enumerable:!1,value:function(){throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).")}}),Object.freeze(Vs)}function Xs(e,t,n,a){var r=e.memoizedState,i=n(a,r);{if(e.mode&Nt){Jt(!0);try{i=n(a,r)}finally{Jt(!1)}}Rv(t,i)}var u=i==null?r:q({},r,i);if(e.memoizedState=u,e.lanes===z){var o=e.updateQueue;o.baseState=u}}var Js={isMounted:Qt,enqueueSetState:function(e,t,n){var a=X(e),r=yn(),i=zr(a),u=cr(r,i);u.payload=t,n!=null&&(lo(n,"setState"),u.callback=n);var o=Dr(a,u,i);o!==null&&(Lt(o,a,i,r),ro(o,a,i)),bs(a,i)},enqueueReplaceState:function(e,t,n){var a=X(e),r=yn(),i=zr(a),u=cr(r,i);u.tag=yv,u.payload=t,n!=null&&(lo(n,"replaceState"),u.callback=n);var o=Dr(a,u,i);o!==null&&(Lt(o,a,i,r),ro(o,a,i)),bs(a,i)},enqueueForceUpdate:function(e,t){var n=X(e),a=yn(),r=zr(n),i=cr(a,r);i.tag=to,t!=null&&(lo(t,"forceUpdate"),i.callback=t);var u=Dr(n,i,r);u!==null&&(Lt(u,n,r,a),ro(u,n,r)),uS(n,r)}};function Tv(e,t,n,a,r,i,u){var o=e.stateNode;if(typeof o.shouldComponentUpdate=="function"){var c=o.shouldComponentUpdate(a,i,u);{if(e.mode&Nt){Jt(!0);try{c=o.shouldComponentUpdate(a,i,u)}finally{Jt(!1)}}c===void 0&&y("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.",ae(t)||"Component")}return c}return t.prototype&&t.prototype.isPureReactComponent?!Xl(n,a)||!Xl(r,i):!0}function PS(e,t,n){var a=e.stateNode;{var r=ae(t)||"Component",i=a.render;i||(t.prototype&&typeof t.prototype.render=="function"?y("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?",r):y("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.",r)),a.getInitialState&&!a.getInitialState.isReactClassApproved&&!a.state&&y("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?",r),a.getDefaultProps&&!a.getDefaultProps.isReactClassApproved&&y("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.",r),a.propTypes&&y("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.",r),a.contextType&&y("contextType was defined as an instance property on %s. Use a static property to define contextType instead.",r),a.contextTypes&&y("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.",r),t.contextType&&t.contextTypes&&!Ks.has(t)&&(Ks.add(t),y("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.",r)),typeof a.componentShouldUpdate=="function"&&y("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",r),t.prototype&&t.prototype.isPureReactComponent&&typeof a.shouldComponentUpdate!="undefined"&&y("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.",ae(t)||"A pure component"),typeof a.componentDidUnmount=="function"&&y("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?",r),typeof a.componentDidReceiveProps=="function"&&y("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().",r),typeof a.componentWillRecieveProps=="function"&&y("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?",r),typeof a.UNSAFE_componentWillRecieveProps=="function"&&y("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?",r);var u=a.props!==n;a.props!==void 0&&u&&y("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.",r,r),a.defaultProps&&y("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.",r,r),typeof a.getSnapshotBeforeUpdate=="function"&&typeof a.componentDidUpdate!="function"&&!Ps.has(t)&&(Ps.add(t),y("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.",ae(t))),typeof a.getDerivedStateFromProps=="function"&&y("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.",r),typeof a.getDerivedStateFromError=="function"&&y("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.",r),typeof t.getSnapshotBeforeUpdate=="function"&&y("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.",r);var o=a.state;o&&(typeof o!="object"||vn(o))&&y("%s.state: must be set to an object or null",r),typeof a.getChildContext=="function"&&typeof t.childContextTypes!="object"&&y("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().",r)}}function xv(e,t){t.updater=Js,e.stateNode=t,Q(t,e),t._reactInternalInstance=Vs}function _v(e,t,n){var a=!1,r=Pn,i=Pn,u=t.contextType;if("contextType"in t){var o=u===null||u!==void 0&&u.$$typeof===Bn&&u._context===void 0;if(!o&&!ks.has(t)){ks.add(t);var c="";u===void 0?c=" However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file.":typeof u!="object"?c=" However, it is set to a "+typeof u+".":u.$$typeof===En?c=" Did you accidentally pass the Context.Provider instead?":u._context!==void 0?c=" Did you accidentally pass the Context.Consumer instead?":c=" However, it is set to an object with keys {"+Object.keys(u).join(", ")+"}.",y("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s",ae(t)||"Component",c)}}if(typeof u=="object"&&u!==null)i=Ut(u);else{r=yi(e,t,!0);var f=t.contextTypes;a=f!=null,i=a?gi(e,r):Pn}var h=new t(n,i);if(e.mode&Nt){Jt(!0);try{h=new t(n,i)}finally{Jt(!1)}}var b=e.memoizedState=h.state!==null&&h.state!==void 0?h.state:null;xv(e,h);{if(typeof t.getDerivedStateFromProps=="function"&&b===null){var T=ae(t)||"Component";Ys.has(T)||(Ys.add(T),y("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.",T,h.state===null?"null":"undefined",T))}if(typeof t.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"){var N=null,A=null,M=null;if(typeof h.componentWillMount=="function"&&h.componentWillMount.__suppressDeprecationWarning!==!0?N="componentWillMount":typeof h.UNSAFE_componentWillMount=="function"&&(N="UNSAFE_componentWillMount"),typeof h.componentWillReceiveProps=="function"&&h.componentWillReceiveProps.__suppressDeprecationWarning!==!0?A="componentWillReceiveProps":typeof h.UNSAFE_componentWillReceiveProps=="function"&&(A="UNSAFE_componentWillReceiveProps"),typeof h.componentWillUpdate=="function"&&h.componentWillUpdate.__suppressDeprecationWarning!==!0?M="componentWillUpdate":typeof h.UNSAFE_componentWillUpdate=="function"&&(M="UNSAFE_componentWillUpdate"),N!==null||A!==null||M!==null){var ee=ae(t)||"Component",me=typeof t.getDerivedStateFromProps=="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";qs.has(ee)||(qs.add(ee),y(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`,ee,me,N!==null?`
  `+N:"",A!==null?`
  `+A:"",M!==null?`
  `+M:""))}}}return a&&Cp(e,r,i),h}function qS(e,t){var n=t.state;typeof t.componentWillMount=="function"&&t.componentWillMount(),typeof t.UNSAFE_componentWillMount=="function"&&t.UNSAFE_componentWillMount(),n!==t.state&&(y("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",$(e)||"Component"),Js.enqueueReplaceState(t,t.state,null))}function Dv(e,t,n,a){var r=t.state;if(typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==r){{var i=$(e)||"Component";ws.has(i)||(ws.add(i),y("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",i))}Js.enqueueReplaceState(t,t.state,null)}}function Zs(e,t,n,a){PS(e,t,n);var r=e.stateNode;r.props=n,r.state=e.memoizedState,r.refs=Ev,Fs(e);var i=t.contextType;if(typeof i=="object"&&i!==null)r.context=Ut(i);else{var u=yi(e,t,!0);r.context=gi(e,u)}{if(r.state===n){var o=ae(t)||"Component";Gs.has(o)||(Gs.add(o),y("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",o))}e.mode&Nt&&Sa.recordLegacyContextWarning(e,r),Sa.recordUnsafeLifecycleWarnings(e,r)}r.state=e.memoizedState;var c=t.getDerivedStateFromProps;if(typeof c=="function"&&(Xs(e,t,c,n),r.state=e.memoizedState),typeof t.getDerivedStateFromProps!="function"&&typeof r.getSnapshotBeforeUpdate!="function"&&(typeof r.UNSAFE_componentWillMount=="function"||typeof r.componentWillMount=="function")&&(qS(e,r),io(e,n,r,a),r.state=e.memoizedState),typeof r.componentDidMount=="function"){var f=he;f|=w,(e.mode&Ha)!==ve&&(f|=De),e.flags|=f}}function QS(e,t,n,a){var r=e.stateNode,i=e.memoizedProps;r.props=i;var u=r.context,o=t.contextType,c=Pn;if(typeof o=="object"&&o!==null)c=Ut(o);else{var f=yi(e,t,!0);c=gi(e,f)}var h=t.getDerivedStateFromProps,b=typeof h=="function"||typeof r.getSnapshotBeforeUpdate=="function";!b&&(typeof r.UNSAFE_componentWillReceiveProps=="function"||typeof r.componentWillReceiveProps=="function")&&(i!==n||u!==c)&&Dv(e,r,n,c),Sv();var T=e.memoizedState,N=r.state=T;if(io(e,n,r,a),N=e.memoizedState,i===n&&T===N&&!zl()&&!uo()){if(typeof r.componentDidMount=="function"){var A=he;A|=w,(e.mode&Ha)!==ve&&(A|=De),e.flags|=A}return!1}typeof h=="function"&&(Xs(e,t,h,n),N=e.memoizedState);var M=uo()||Tv(e,t,i,n,T,N,c);if(M){if(!b&&(typeof r.UNSAFE_componentWillMount=="function"||typeof r.componentWillMount=="function")&&(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"){var ee=he;ee|=w,(e.mode&Ha)!==ve&&(ee|=De),e.flags|=ee}}else{if(typeof r.componentDidMount=="function"){var me=he;me|=w,(e.mode&Ha)!==ve&&(me|=De),e.flags|=me}e.memoizedProps=n,e.memoizedState=N}return r.props=n,r.state=N,r.context=c,M}function GS(e,t,n,a,r){var i=t.stateNode;gv(e,t);var u=t.memoizedProps,o=t.type===t.elementType?u:ba(t.type,u);i.props=o;var c=t.pendingProps,f=i.context,h=n.contextType,b=Pn;if(typeof h=="object"&&h!==null)b=Ut(h);else{var T=yi(t,n,!0);b=gi(t,T)}var N=n.getDerivedStateFromProps,A=typeof N=="function"||typeof i.getSnapshotBeforeUpdate=="function";!A&&(typeof i.UNSAFE_componentWillReceiveProps=="function"||typeof i.componentWillReceiveProps=="function")&&(u!==c||f!==b)&&Dv(t,i,a,b),Sv();var M=t.memoizedState,ee=i.state=M;if(io(t,a,i,r),ee=t.memoizedState,u===c&&M===ee&&!zl()&&!uo()&&!Ce)return typeof i.componentDidUpdate=="function"&&(u!==e.memoizedProps||M!==e.memoizedState)&&(t.flags|=he),typeof i.getSnapshotBeforeUpdate=="function"&&(u!==e.memoizedProps||M!==e.memoizedState)&&(t.flags|=dn),!1;typeof N=="function"&&(Xs(t,n,N,a),ee=t.memoizedState);var me=uo()||Tv(t,n,o,a,M,ee,b)||Ce;return me?(!A&&(typeof i.UNSAFE_componentWillUpdate=="function"||typeof i.componentWillUpdate=="function")&&(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,ee,b),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,ee,b)),typeof i.componentDidUpdate=="function"&&(t.flags|=he),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=dn)):(typeof i.componentDidUpdate=="function"&&(u!==e.memoizedProps||M!==e.memoizedState)&&(t.flags|=he),typeof i.getSnapshotBeforeUpdate=="function"&&(u!==e.memoizedProps||M!==e.memoizedState)&&(t.flags|=dn),t.memoizedProps=a,t.memoizedState=ee),i.props=a,i.state=ee,i.context=b,me}var Ws,Is,$s,ef,tf,Ov=function(e,t){};Ws=!1,Is=!1,$s={},ef={},tf={},Ov=function(e,t){if(!(e===null||typeof e!="object")&&!(!e._store||e._store.validated||e.key!=null)){if(typeof e._store!="object")throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");e._store.validated=!0;var n=$(t)||"Component";ef[n]||(ef[n]=!0,y('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'))}};function Mu(e,t,n){var a=n.ref;if(a!==null&&typeof a!="function"&&typeof a!="object"){if((e.mode&Nt||ue)&&!(n._owner&&n._self&&n._owner.stateNode!==n._self)){var r=$(e)||"Component";$s[r]||(y('A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',a),$s[r]=!0)}if(n._owner){var i=n._owner,u;if(i){var o=i;if(o.tag!==se)throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");u=o.stateNode}if(!u)throw new Error("Missing owner for string ref "+a+". This error is likely caused by a bug in React. Please file an issue.");var c=u;AS(a,"ref");var f=""+a;if(t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===f)return t.ref;var h=function(b){var T=c.refs;T===Ev&&(T=c.refs={}),b===null?delete T[f]:T[f]=b};return h._stringRef=f,h}else{if(typeof a!="string")throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");if(!n._owner)throw new Error("Element ref was specified as a string ("+a+`) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`)}}return a}function oo(e,t){var n=Object.prototype.toString.call(t);throw new Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.")}function co(e){{var t=$(e)||"Component";if(tf[t])return;tf[t]=!0,y("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.")}}function Nv(e){var t=e._payload,n=e._init;return n(t)}function Uv(e){function t(R,D){if(e){var E=R.deletions;E===null?(R.deletions=[D],R.flags|=$t):E.push(D)}}function n(R,D){if(!e)return null;for(var E=D;E!==null;)t(R,E),E=E.sibling;return null}function a(R,D){for(var E=new Map,F=D;F!==null;)F.key!==null?E.set(F.key,F):E.set(F.index,F),F=F.sibling;return E}function r(R,D){var E=oi(R,D);return E.index=0,E.sibling=null,E}function i(R,D,E){if(R.index=E,!e)return R.flags|=p,D;var F=R.alternate;if(F!==null){var I=F.index;return I<D?(R.flags|=Ke,D):I}else return R.flags|=Ke,D}function u(R){return e&&R.alternate===null&&(R.flags|=Ke),R}function o(R,D,E,F){if(D===null||D.tag!==be){var I=Ad(E,R.mode,F);return I.return=R,I}else{var k=r(D,E);return k.return=R,k}}function c(R,D,E,F){var I=E.type;if(I===$n)return h(R,D,E.props.children,F,E.key);if(D!==null&&(D.elementType===I||Eh(D,E)||typeof I=="object"&&I!==null&&I.$$typeof===lt&&Nv(I)===D.type)){var k=r(D,E.props);return k.ref=Mu(R,D,E),k.return=R,k._debugSource=E._source,k._debugOwner=E._owner,k}var Ve=Ld(E,R.mode,F);return Ve.ref=Mu(R,D,E),Ve.return=R,Ve}function f(R,D,E,F){if(D===null||D.tag!==Ae||D.stateNode.containerInfo!==E.containerInfo||D.stateNode.implementation!==E.implementation){var I=zd(E,R.mode,F);return I.return=R,I}else{var k=r(D,E.children||[]);return k.return=R,k}}function h(R,D,E,F,I){if(D===null||D.tag!==_e){var k=jr(E,R.mode,F,I);return k.return=R,k}else{var Ve=r(D,E);return Ve.return=R,Ve}}function b(R,D,E){if(typeof D=="string"&&D!==""||typeof D=="number"){var F=Ad(""+D,R.mode,E);return F.return=R,F}if(typeof D=="object"&&D!==null){switch(D.$$typeof){case Un:{var I=Ld(D,R.mode,E);return I.ref=Mu(R,null,D),I.return=R,I}case Mn:{var k=zd(D,R.mode,E);return k.return=R,k}case lt:{var Ve=D._payload,ge=D._init;return b(R,ge(Ve),E)}}if(vn(D)||Y(D)){var Ge=jr(D,R.mode,E,null);return Ge.return=R,Ge}oo(R,D)}return typeof D=="function"&&co(R),null}function T(R,D,E,F){var I=D!==null?D.key:null;if(typeof E=="string"&&E!==""||typeof E=="number")return I!==null?null:o(R,D,""+E,F);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Un:return E.key===I?c(R,D,E,F):null;case Mn:return E.key===I?f(R,D,E,F):null;case lt:{var k=E._payload,Ve=E._init;return T(R,D,Ve(k),F)}}if(vn(E)||Y(E))return I!==null?null:h(R,D,E,F,null);oo(R,E)}return typeof E=="function"&&co(R),null}function N(R,D,E,F,I){if(typeof F=="string"&&F!==""||typeof F=="number"){var k=R.get(E)||null;return o(D,k,""+F,I)}if(typeof F=="object"&&F!==null){switch(F.$$typeof){case Un:{var Ve=R.get(F.key===null?E:F.key)||null;return c(D,Ve,F,I)}case Mn:{var ge=R.get(F.key===null?E:F.key)||null;return f(D,ge,F,I)}case lt:var Ge=F._payload,ze=F._init;return N(R,D,E,ze(Ge),I)}if(vn(F)||Y(F)){var rt=R.get(E)||null;return h(D,rt,F,I,null)}oo(D,F)}return typeof F=="function"&&co(D),null}function A(R,D,E){{if(typeof R!="object"||R===null)return D;switch(R.$$typeof){case Un:case Mn:Ov(R,E);var F=R.key;if(typeof F!="string")break;if(D===null){D=new Set,D.add(F);break}if(!D.has(F)){D.add(F);break}y("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted \u2014 the behavior is unsupported and could change in a future version.",F);break;case lt:var I=R._payload,k=R._init;A(k(I),D,E);break}}return D}function M(R,D,E,F){for(var I=null,k=0;k<E.length;k++){var Ve=E[k];I=A(Ve,I,R)}for(var ge=null,Ge=null,ze=D,rt=0,oe=0,bt=null;ze!==null&&oe<E.length;oe++){ze.index>oe?(bt=ze,ze=null):bt=ze.sibling;var gn=T(R,ze,E[oe],F);if(gn===null){ze===null&&(ze=bt);break}e&&ze&&gn.alternate===null&&t(R,ze),rt=i(gn,rt,oe),Ge===null?ge=gn:Ge.sibling=gn,Ge=gn,ze=bt}if(oe===E.length){if(n(R,ze),an()){var sn=oe;Zr(R,sn)}return ge}if(ze===null){for(;oe<E.length;oe++){var Xn=b(R,E[oe],F);Xn!==null&&(rt=i(Xn,rt,oe),Ge===null?ge=Xn:Ge.sibling=Xn,Ge=Xn)}if(an()){var _n=oe;Zr(R,_n)}return ge}for(var Dn=a(R,ze);oe<E.length;oe++){var Sn=N(Dn,R,oe,E[oe],F);Sn!==null&&(e&&Sn.alternate!==null&&Dn.delete(Sn.key===null?oe:Sn.key),rt=i(Sn,rt,oe),Ge===null?ge=Sn:Ge.sibling=Sn,Ge=Sn)}if(e&&Dn.forEach(function(ki){return t(R,ki)}),an()){var pr=oe;Zr(R,pr)}return ge}function ee(R,D,E,F){var I=Y(E);if(typeof I!="function")throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");{typeof Symbol=="function"&&E[Symbol.toStringTag]==="Generator"&&(Is||y("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."),Is=!0),E.entries===I&&(Ws||y("Using Maps as children is not supported. Use an array of keyed ReactElements instead."),Ws=!0);var k=I.call(E);if(k)for(var Ve=null,ge=k.next();!ge.done;ge=k.next()){var Ge=ge.value;Ve=A(Ge,Ve,R)}}var ze=I.call(E);if(ze==null)throw new Error("An iterable object provided no iterator.");for(var rt=null,oe=null,bt=D,gn=0,sn=0,Xn=null,_n=ze.next();bt!==null&&!_n.done;sn++,_n=ze.next()){bt.index>sn?(Xn=bt,bt=null):Xn=bt.sibling;var Dn=T(R,bt,_n.value,F);if(Dn===null){bt===null&&(bt=Xn);break}e&&bt&&Dn.alternate===null&&t(R,bt),gn=i(Dn,gn,sn),oe===null?rt=Dn:oe.sibling=Dn,oe=Dn,bt=Xn}if(_n.done){if(n(R,bt),an()){var Sn=sn;Zr(R,Sn)}return rt}if(bt===null){for(;!_n.done;sn++,_n=ze.next()){var pr=b(R,_n.value,F);pr!==null&&(gn=i(pr,gn,sn),oe===null?rt=pr:oe.sibling=pr,oe=pr)}if(an()){var ki=sn;Zr(R,ki)}return rt}for(var ol=a(R,bt);!_n.done;sn++,_n=ze.next()){var Wa=N(ol,R,sn,_n.value,F);Wa!==null&&(e&&Wa.alternate!==null&&ol.delete(Wa.key===null?sn:Wa.key),gn=i(Wa,gn,sn),oe===null?rt=Wa:oe.sibling=Wa,oe=Wa)}if(e&&ol.forEach(function(sC){return t(R,sC)}),an()){var cC=sn;Zr(R,cC)}return rt}function me(R,D,E,F){if(D!==null&&D.tag===be){n(R,D.sibling);var I=r(D,E);return I.return=R,I}n(R,D);var k=Ad(E,R.mode,F);return k.return=R,k}function re(R,D,E,F){for(var I=E.key,k=D;k!==null;){if(k.key===I){var Ve=E.type;if(Ve===$n){if(k.tag===_e){n(R,k.sibling);var ge=r(k,E.props.children);return ge.return=R,ge._debugSource=E._source,ge._debugOwner=E._owner,ge}}else if(k.elementType===Ve||Eh(k,E)||typeof Ve=="object"&&Ve!==null&&Ve.$$typeof===lt&&Nv(Ve)===k.type){n(R,k.sibling);var Ge=r(k,E.props);return Ge.ref=Mu(R,k,E),Ge.return=R,Ge._debugSource=E._source,Ge._debugOwner=E._owner,Ge}n(R,k);break}else t(R,k);k=k.sibling}if(E.type===$n){var ze=jr(E.props.children,R.mode,F,E.key);return ze.return=R,ze}else{var rt=Ld(E,R.mode,F);return rt.ref=Mu(R,D,E),rt.return=R,rt}}function Je(R,D,E,F){for(var I=E.key,k=D;k!==null;){if(k.key===I)if(k.tag===Ae&&k.stateNode.containerInfo===E.containerInfo&&k.stateNode.implementation===E.implementation){n(R,k.sibling);var Ve=r(k,E.children||[]);return Ve.return=R,Ve}else{n(R,k);break}else t(R,k);k=k.sibling}var ge=zd(E,R.mode,F);return ge.return=R,ge}function Ye(R,D,E,F){var I=typeof E=="object"&&E!==null&&E.type===$n&&E.key===null;if(I&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case Un:return u(re(R,D,E,F));case Mn:return u(Je(R,D,E,F));case lt:var k=E._payload,Ve=E._init;return Ye(R,D,Ve(k),F)}if(vn(E))return M(R,D,E,F);if(Y(E))return ee(R,D,E,F);oo(R,E)}return typeof E=="string"&&E!==""||typeof E=="number"?u(me(R,D,""+E,F)):(typeof E=="function"&&co(R),n(R,D))}return Ye}var Mi=Uv(!0),Mv=Uv(!1);function KS(e,t){if(e!==null&&t.child!==e.child)throw new Error("Resuming work not yet implemented.");if(t.child!==null){var n=t.child,a=oi(n,n.pendingProps);for(t.child=a,a.return=t;n.sibling!==null;)n=n.sibling,a=a.sibling=oi(n,n.pendingProps),a.return=t;a.sibling=null}}function kS(e,t){for(var n=e.child;n!==null;)VR(n,t),n=n.sibling}var Lu={},Or=Tr(Lu),Au=Tr(Lu),so=Tr(Lu);function fo(e){if(e===Lu)throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");return e}function nf(){var e=fo(so.current);return e}function af(e,t){en(so,t,e),en(Au,e,e),en(Or,Lu,e);var n=yl(t);mn(Or,e),en(Or,n,e)}function Li(e){mn(Or,e),mn(Au,e),mn(so,e)}function zu(){var e=fo(Or.current);return e}function Lv(e){var t=fo(so.current),n=fo(Or.current),a=Cc(n,e.type,t);n!==a&&(en(Au,e,e),en(Or,a,e))}function rf(e){Au.current===e&&(mn(Or,e),mn(Au,e))}var XS=0,Av=1,zv=1,Hu=2,Ea=Tr(XS);function uf(e,t){return(e&t)!==0}function Ai(e){return e&Av}function lf(e,t){return e&Av|t}function JS(e,t){return e|t}function Nr(e,t){en(Ea,t,e)}function zi(e){mn(Ea,e)}function ZS(e,t){var n=e.memoizedState;if(n!==null)return n.dehydrated!==null;var a=e.memoizedProps;return!0}function po(e){for(var t=e;t!==null;){if(t.tag===Pe){var n=t.memoizedState;if(n!==null){var a=n.dehydrated;if(a===null||Ot(a)||Rr(a))return t}}else if(t.tag===Et&&t.memoizedProps.revealOrder!==void 0){var r=(t.flags&Be)!==J;if(r)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)return null;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var zn=0,zt=1,Ya=2,Ht=4,rn=8,of=[];function cf(){for(var e=0;e<of.length;e++){var t=of[e];Pr?t._workInProgressVersionPrimary=null:t._workInProgressVersionSecondary=null}of.length=0}function WS(e,t){var n=t._getVersion,a=n(t._source);e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,a]:e.mutableSourceEagerHydrationData.push(t,a)}var K=x.ReactCurrentDispatcher,ju=x.ReactCurrentBatchConfig,sf,Hi;sf=new Set;var ti=z,et=null,jt=null,Ft=null,vo=!1,Fu=!1,Bu=0,IS=0,$S=25,O=null,ia=null,Ur=-1,ff=!1;function Xe(){{var e=O;ia===null?ia=[e]:ia.push(e)}}function P(){{var e=O;ia!==null&&(Ur++,ia[Ur]!==e&&eb(e))}}function ji(e){e!=null&&!vn(e)&&y("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.",O,typeof e)}function eb(e){{var t=$(et);if(!sf.has(t)&&(sf.add(t),ia!==null)){for(var n="",a=30,r=0;r<=Ur;r++){for(var i=ia[r],u=r===Ur?e:i,o=r+1+". "+i;o.length<a;)o+=" ";o+=u+`
`,n+=o}y(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`,t,n)}}}function hn(){throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`)}function df(e,t){if(ff)return!1;if(t===null)return y("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.",O),!1;e.length!==t.length&&y(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`,O,"["+t.join(", ")+"]","["+e.join(", ")+"]");for(var n=0;n<t.length&&n<e.length;n++)if(!Gn(e[n],t[n]))return!1;return!0}function Fi(e,t,n,a,r,i){ti=i,et=t,ia=e!==null?e._debugHookTypes:null,Ur=-1,ff=e!==null&&e.type!==t.type,t.memoizedState=null,t.updateQueue=null,t.lanes=z,e!==null&&e.memoizedState!==null?K.current=nm:ia!==null?K.current=tm:K.current=em;var u=n(a,r);if(Fu){var o=0;do{if(Fu=!1,Bu=0,o>=$S)throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");o+=1,ff=!1,jt=null,Ft=null,t.updateQueue=null,Ur=-1,K.current=am,u=n(a,r)}while(Fu)}K.current=Do,t._debugHookTypes=ia;var c=jt!==null&&jt.next!==null;if(ti=z,et=null,jt=null,Ft=null,O=null,ia=null,Ur=-1,e!==null&&(e.flags&ke)!==(t.flags&ke)&&(e.mode&qe)!==ve&&y("Internal React error: Expected static flag was missing. Please notify the React team."),vo=!1,c)throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");return u}function Bi(){var e=Bu!==0;return Bu=0,e}function Hv(e,t,n){t.updateQueue=e.updateQueue,(t.mode&Ha)!==ve?t.flags&=~(Qe|De|qt|he):t.flags&=~(qt|he),e.lanes=Pl(e.lanes,n)}function jv(){if(K.current=Do,vo){for(var e=et.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}vo=!1}ti=z,et=null,jt=null,Ft=null,ia=null,Ur=-1,O=null,Jv=!1,Fu=!1,Bu=0}function Pa(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ft===null?et.memoizedState=Ft=e:Ft=Ft.next=e,Ft}function ua(){var e;if(jt===null){var t=et.alternate;t!==null?e=t.memoizedState:e=null}else e=jt.next;var n;if(Ft===null?n=et.memoizedState:n=Ft.next,n!==null)Ft=n,n=Ft.next,jt=e;else{if(e===null)throw new Error("Rendered more hooks than during the previous render.");jt=e;var a={memoizedState:jt.memoizedState,baseState:jt.baseState,baseQueue:jt.baseQueue,queue:jt.queue,next:null};Ft===null?et.memoizedState=Ft=a:Ft=Ft.next=a}return Ft}function Fv(){return{lastEffect:null,stores:null}}function pf(e,t){return typeof t=="function"?t(e):t}function vf(e,t,n){var a=Pa(),r;n!==void 0?r=n(t):r=t,a.memoizedState=a.baseState=r;var i={pending:null,interleaved:null,lanes:z,dispatch:null,lastRenderedReducer:e,lastRenderedState:r};a.queue=i;var u=i.dispatch=rb.bind(null,et,i);return[a.memoizedState,u]}function mf(e,t,n){var a=ua(),r=a.queue;if(r===null)throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");r.lastRenderedReducer=e;var i=jt,u=i.baseQueue,o=r.pending;if(o!==null){if(u!==null){var c=u.next,f=o.next;u.next=f,o.next=c}i.baseQueue!==u&&y("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."),i.baseQueue=u=o,r.pending=null}if(u!==null){var h=u.next,b=i.baseState,T=null,N=null,A=null,M=h;do{var ee=M.lane;if(Ci(ti,ee)){if(A!==null){var re={lane:Kt,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null};A=A.next=re}if(M.hasEagerState)b=M.eagerState;else{var Je=M.action;b=e(b,Je)}}else{var me={lane:ee,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null};A===null?(N=A=me,T=b):A=A.next=me,et.lanes=Oe(et.lanes,ee),il(ee)}M=M.next}while(M!==null&&M!==h);A===null?T=b:A.next=N,Gn(b,a.memoizedState)||Gu(),a.memoizedState=b,a.baseState=T,a.baseQueue=A,r.lastRenderedState=b}var Ye=r.interleaved;if(Ye!==null){var R=Ye;do{var D=R.lane;et.lanes=Oe(et.lanes,D),il(D),R=R.next}while(R!==Ye)}else u===null&&(r.lanes=z);var E=r.dispatch;return[a.memoizedState,E]}function hf(e,t,n){var a=ua(),r=a.queue;if(r===null)throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");r.lastRenderedReducer=e;var i=r.dispatch,u=r.pending,o=a.memoizedState;if(u!==null){r.pending=null;var c=u.next,f=c;do{var h=f.action;o=e(o,h),f=f.next}while(f!==c);Gn(o,a.memoizedState)||Gu(),a.memoizedState=o,a.baseQueue===null&&(a.baseState=o),r.lastRenderedState=o}return[o,i]}function jC(e,t,n){}function FC(e,t,n){}function yf(e,t,n){var a=et,r=Pa(),i,u=an();if(u){if(n===void 0)throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");i=n(),Hi||i!==n()&&(y("The result of getServerSnapshot should be cached to avoid an infinite loop"),Hi=!0)}else{if(i=t(),!Hi){var o=t();Gn(i,o)||(y("The result of getSnapshot should be cached to avoid an infinite loop"),Hi=!0)}var c=tc();if(c===null)throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");Yl(c,ti)||Bv(a,t,i)}r.memoizedState=i;var f={value:i,getSnapshot:t};return r.queue=f,So(wv.bind(null,a,f,e),[e]),a.flags|=qt,Vu(zt|rn,Vv.bind(null,a,f,i,t),void 0,null),i}function mo(e,t,n){var a=et,r=ua(),i=t();if(!Hi){var u=t();Gn(i,u)||(y("The result of getSnapshot should be cached to avoid an infinite loop"),Hi=!0)}var o=r.memoizedState,c=!Gn(o,i);c&&(r.memoizedState=i,Gu());var f=r.queue;if(Yu(wv.bind(null,a,f,e),[e]),f.getSnapshot!==t||c||Ft!==null&&Ft.memoizedState.tag&zt){a.flags|=qt,Vu(zt|rn,Vv.bind(null,a,f,i,t),void 0,null);var h=tc();if(h===null)throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");Yl(h,ti)||Bv(a,t,i)}return i}function Bv(e,t,n){e.flags|=tr;var a={getSnapshot:t,value:n},r=et.updateQueue;if(r===null)r=Fv(),et.updateQueue=r,r.stores=[a];else{var i=r.stores;i===null?r.stores=[a]:i.push(a)}}function Vv(e,t,n,a){t.value=n,t.getSnapshot=a,Yv(t)&&Pv(e)}function wv(e,t,n){var a=function(){Yv(t)&&Pv(e)};return n(a)}function Yv(e){var t=e.getSnapshot,n=e.value;try{var a=t();return!Gn(n,a)}catch(r){return!0}}function Pv(e){var t=Cn(e,ye);t!==null&&Lt(t,e,ye,st)}function ho(e){var t=Pa();typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e;var n={pending:null,interleaved:null,lanes:z,dispatch:null,lastRenderedReducer:pf,lastRenderedState:e};t.queue=n;var a=n.dispatch=ib.bind(null,et,n);return[t.memoizedState,a]}function gf(e){return mf(pf)}function Sf(e){return hf(pf)}function Vu(e,t,n,a){var r={tag:e,create:t,destroy:n,deps:a,next:null},i=et.updateQueue;if(i===null)i=Fv(),et.updateQueue=i,i.lastEffect=r.next=r;else{var u=i.lastEffect;if(u===null)i.lastEffect=r.next=r;else{var o=u.next;u.next=r,r.next=o,i.lastEffect=r}}return r}function bf(e){var t=Pa();{var n={current:e};return t.memoizedState=n,n}}function yo(e){var t=ua();return t.memoizedState}function wu(e,t,n,a){var r=Pa(),i=a===void 0?null:a;et.flags|=e,r.memoizedState=Vu(zt|t,n,void 0,i)}function go(e,t,n,a){var r=ua(),i=a===void 0?null:a,u=void 0;if(jt!==null){var o=jt.memoizedState;if(u=o.destroy,i!==null){var c=o.deps;if(df(i,c)){r.memoizedState=Vu(t,n,u,i);return}}}et.flags|=e,r.memoizedState=Vu(zt|t,n,u,i)}function So(e,t){return(et.mode&Ha)!==ve?wu(Qe|qt|fe,rn,e,t):wu(qt|fe,rn,e,t)}function Yu(e,t){return go(qt,rn,e,t)}function Ef(e,t){return wu(he,Ya,e,t)}function bo(e,t){return go(he,Ya,e,t)}function Rf(e,t){var n=he;return n|=w,(et.mode&Ha)!==ve&&(n|=De),wu(n,Ht,e,t)}function Eo(e,t){return go(he,Ht,e,t)}function qv(e,t){if(typeof t=="function"){var n=t,a=e();return n(a),function(){n(null)}}else if(t!=null){var r=t;r.hasOwnProperty("current")||y("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.","an object with keys {"+Object.keys(r).join(", ")+"}");var i=e();return r.current=i,function(){r.current=null}}}function Cf(e,t,n){typeof t!="function"&&y("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",t!==null?typeof t:"null");var a=n!=null?n.concat([e]):null,r=he;return r|=w,(et.mode&Ha)!==ve&&(r|=De),wu(r,Ht,qv.bind(null,t,e),a)}function Ro(e,t,n){typeof t!="function"&&y("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",t!==null?typeof t:"null");var a=n!=null?n.concat([e]):null;return go(he,Ht,qv.bind(null,t,e),a)}function tb(e,t){}var Co=tb;function Tf(e,t){var n=Pa(),a=t===void 0?null:t;return n.memoizedState=[e,a],e}function To(e,t){var n=ua(),a=t===void 0?null:t,r=n.memoizedState;if(r!==null&&a!==null){var i=r[1];if(df(a,i))return r[0]}return n.memoizedState=[e,a],e}function xf(e,t){var n=Pa(),a=t===void 0?null:t,r=e();return n.memoizedState=[r,a],r}function xo(e,t){var n=ua(),a=t===void 0?null:t,r=n.memoizedState;if(r!==null&&a!==null){var i=r[1];if(df(a,i))return r[0]}var u=e();return n.memoizedState=[u,a],u}function _f(e){var t=Pa();return t.memoizedState=e,e}function Qv(e){var t=ua(),n=jt,a=n.memoizedState;return Kv(t,a,e)}function Gv(e){var t=ua();if(jt===null)return t.memoizedState=e,e;var n=jt.memoizedState;return Kv(t,n,e)}function Kv(e,t,n){var a=!Rg(ti);if(a){if(!Gn(n,t)){var r=Ap();et.lanes=Oe(et.lanes,r),il(r),e.baseState=!0}return t}else return e.baseState&&(e.baseState=!1,Gu()),e.memoizedState=n,n}function nb(e,t,n){var a=ha();kt(Mg(a,Su)),e(!0);var r=ju.transition;ju.transition={};var i=ju.transition;ju.transition._updatedFibers=new Set;try{e(!1),t()}finally{if(kt(a),ju.transition=r,r===null&&i._updatedFibers){var u=i._updatedFibers.size;u>10&&U("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."),i._updatedFibers.clear()}}}function Df(){var e=ho(!1),t=e[0],n=e[1],a=nb.bind(null,n),r=Pa();return r.memoizedState=a,[t,a]}function kv(){var e=gf(),t=e[0],n=ua(),a=n.memoizedState;return[t,a]}function Xv(){var e=Sf(),t=e[0],n=ua(),a=n.memoizedState;return[t,a]}var Jv=!1;function ab(){return Jv}function Of(){var e=Pa(),t=tc(),n=t.identifierPrefix,a;if(an()){var r=fS();a=":"+n+"R"+r;var i=Bu++;i>0&&(a+="H"+i.toString(32)),a+=":"}else{var u=IS++;a=":"+n+"r"+u.toString(32)+":"}return e.memoizedState=a,a}function _o(){var e=ua(),t=e.memoizedState;return t}function rb(e,t,n){typeof arguments[3]=="function"&&y("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");var a=zr(e),r={lane:a,action:n,hasEagerState:!1,eagerState:null,next:null};if(Zv(e))Wv(t,r);else{var i=mv(e,t,r,a);if(i!==null){var u=yn();Lt(i,e,a,u),Iv(i,t,a)}}$v(e,a)}function ib(e,t,n){typeof arguments[3]=="function"&&y("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");var a=zr(e),r={lane:a,action:n,hasEagerState:!1,eagerState:null,next:null};if(Zv(e))Wv(t,r);else{var i=e.alternate;if(e.lanes===z&&(i===null||i.lanes===z)){var u=t.lastRenderedReducer;if(u!==null){var o;o=K.current,K.current=Ra;try{var c=t.lastRenderedState,f=u(c,n);if(r.hasEagerState=!0,r.eagerState=f,Gn(f,c)){FS(e,t,r,a);return}}catch(T){}finally{K.current=o}}}var h=mv(e,t,r,a);if(h!==null){var b=yn();Lt(h,e,a,b),Iv(h,t,a)}}$v(e,a)}function Zv(e){var t=e.alternate;return e===et||t!==null&&t===et}function Wv(e,t){Fu=vo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Iv(e,t,n){if(Lp(n)){var a=t.lanes;a=zp(a,e.pendingLanes);var r=Oe(a,n);t.lanes=r,gs(e,r)}}function $v(e,t,n){bs(e,t)}var Do={readContext:Ut,useCallback:hn,useContext:hn,useEffect:hn,useImperativeHandle:hn,useInsertionEffect:hn,useLayoutEffect:hn,useMemo:hn,useReducer:hn,useRef:hn,useState:hn,useDebugValue:hn,useDeferredValue:hn,useTransition:hn,useMutableSource:hn,useSyncExternalStore:hn,useId:hn,unstable_isNewReconciler:ce},em=null,tm=null,nm=null,am=null,qa=null,Ra=null,Oo=null;{var Nf=function(){y("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().")},Se=function(){y("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks")};em={readContext:function(e){return Ut(e)},useCallback:function(e,t){return O="useCallback",Xe(),ji(t),Tf(e,t)},useContext:function(e){return O="useContext",Xe(),Ut(e)},useEffect:function(e,t){return O="useEffect",Xe(),ji(t),So(e,t)},useImperativeHandle:function(e,t,n){return O="useImperativeHandle",Xe(),ji(n),Cf(e,t,n)},useInsertionEffect:function(e,t){return O="useInsertionEffect",Xe(),ji(t),Ef(e,t)},useLayoutEffect:function(e,t){return O="useLayoutEffect",Xe(),ji(t),Rf(e,t)},useMemo:function(e,t){O="useMemo",Xe(),ji(t);var n=K.current;K.current=qa;try{return xf(e,t)}finally{K.current=n}},useReducer:function(e,t,n){O="useReducer",Xe();var a=K.current;K.current=qa;try{return vf(e,t,n)}finally{K.current=a}},useRef:function(e){return O="useRef",Xe(),bf(e)},useState:function(e){O="useState",Xe();var t=K.current;K.current=qa;try{return ho(e)}finally{K.current=t}},useDebugValue:function(e,t){return O="useDebugValue",Xe(),void 0},useDeferredValue:function(e){return O="useDeferredValue",Xe(),_f(e)},useTransition:function(){return O="useTransition",Xe(),Df()},useMutableSource:function(e,t,n){return O="useMutableSource",Xe(),void 0},useSyncExternalStore:function(e,t,n){return O="useSyncExternalStore",Xe(),yf(e,t,n)},useId:function(){return O="useId",Xe(),Of()},unstable_isNewReconciler:ce},tm={readContext:function(e){return Ut(e)},useCallback:function(e,t){return O="useCallback",P(),Tf(e,t)},useContext:function(e){return O="useContext",P(),Ut(e)},useEffect:function(e,t){return O="useEffect",P(),So(e,t)},useImperativeHandle:function(e,t,n){return O="useImperativeHandle",P(),Cf(e,t,n)},useInsertionEffect:function(e,t){return O="useInsertionEffect",P(),Ef(e,t)},useLayoutEffect:function(e,t){return O="useLayoutEffect",P(),Rf(e,t)},useMemo:function(e,t){O="useMemo",P();var n=K.current;K.current=qa;try{return xf(e,t)}finally{K.current=n}},useReducer:function(e,t,n){O="useReducer",P();var a=K.current;K.current=qa;try{return vf(e,t,n)}finally{K.current=a}},useRef:function(e){return O="useRef",P(),bf(e)},useState:function(e){O="useState",P();var t=K.current;K.current=qa;try{return ho(e)}finally{K.current=t}},useDebugValue:function(e,t){return O="useDebugValue",P(),void 0},useDeferredValue:function(e){return O="useDeferredValue",P(),_f(e)},useTransition:function(){return O="useTransition",P(),Df()},useMutableSource:function(e,t,n){return O="useMutableSource",P(),void 0},useSyncExternalStore:function(e,t,n){return O="useSyncExternalStore",P(),yf(e,t,n)},useId:function(){return O="useId",P(),Of()},unstable_isNewReconciler:ce},nm={readContext:function(e){return Ut(e)},useCallback:function(e,t){return O="useCallback",P(),To(e,t)},useContext:function(e){return O="useContext",P(),Ut(e)},useEffect:function(e,t){return O="useEffect",P(),Yu(e,t)},useImperativeHandle:function(e,t,n){return O="useImperativeHandle",P(),Ro(e,t,n)},useInsertionEffect:function(e,t){return O="useInsertionEffect",P(),bo(e,t)},useLayoutEffect:function(e,t){return O="useLayoutEffect",P(),Eo(e,t)},useMemo:function(e,t){O="useMemo",P();var n=K.current;K.current=Ra;try{return xo(e,t)}finally{K.current=n}},useReducer:function(e,t,n){O="useReducer",P();var a=K.current;K.current=Ra;try{return mf(e,t,n)}finally{K.current=a}},useRef:function(e){return O="useRef",P(),yo()},useState:function(e){O="useState",P();var t=K.current;K.current=Ra;try{return gf(e)}finally{K.current=t}},useDebugValue:function(e,t){return O="useDebugValue",P(),Co()},useDeferredValue:function(e){return O="useDeferredValue",P(),Qv(e)},useTransition:function(){return O="useTransition",P(),kv()},useMutableSource:function(e,t,n){return O="useMutableSource",P(),void 0},useSyncExternalStore:function(e,t,n){return O="useSyncExternalStore",P(),mo(e,t)},useId:function(){return O="useId",P(),_o()},unstable_isNewReconciler:ce},am={readContext:function(e){return Ut(e)},useCallback:function(e,t){return O="useCallback",P(),To(e,t)},useContext:function(e){return O="useContext",P(),Ut(e)},useEffect:function(e,t){return O="useEffect",P(),Yu(e,t)},useImperativeHandle:function(e,t,n){return O="useImperativeHandle",P(),Ro(e,t,n)},useInsertionEffect:function(e,t){return O="useInsertionEffect",P(),bo(e,t)},useLayoutEffect:function(e,t){return O="useLayoutEffect",P(),Eo(e,t)},useMemo:function(e,t){O="useMemo",P();var n=K.current;K.current=Oo;try{return xo(e,t)}finally{K.current=n}},useReducer:function(e,t,n){O="useReducer",P();var a=K.current;K.current=Oo;try{return hf(e,t,n)}finally{K.current=a}},useRef:function(e){return O="useRef",P(),yo()},useState:function(e){O="useState",P();var t=K.current;K.current=Oo;try{return Sf(e)}finally{K.current=t}},useDebugValue:function(e,t){return O="useDebugValue",P(),Co()},useDeferredValue:function(e){return O="useDeferredValue",P(),Gv(e)},useTransition:function(){return O="useTransition",P(),Xv()},useMutableSource:function(e,t,n){return O="useMutableSource",P(),void 0},useSyncExternalStore:function(e,t,n){return O="useSyncExternalStore",P(),mo(e,t)},useId:function(){return O="useId",P(),_o()},unstable_isNewReconciler:ce},qa={readContext:function(e){return Nf(),Ut(e)},useCallback:function(e,t){return O="useCallback",Se(),Xe(),Tf(e,t)},useContext:function(e){return O="useContext",Se(),Xe(),Ut(e)},useEffect:function(e,t){return O="useEffect",Se(),Xe(),So(e,t)},useImperativeHandle:function(e,t,n){return O="useImperativeHandle",Se(),Xe(),Cf(e,t,n)},useInsertionEffect:function(e,t){return O="useInsertionEffect",Se(),Xe(),Ef(e,t)},useLayoutEffect:function(e,t){return O="useLayoutEffect",Se(),Xe(),Rf(e,t)},useMemo:function(e,t){O="useMemo",Se(),Xe();var n=K.current;K.current=qa;try{return xf(e,t)}finally{K.current=n}},useReducer:function(e,t,n){O="useReducer",Se(),Xe();var a=K.current;K.current=qa;try{return vf(e,t,n)}finally{K.current=a}},useRef:function(e){return O="useRef",Se(),Xe(),bf(e)},useState:function(e){O="useState",Se(),Xe();var t=K.current;K.current=qa;try{return ho(e)}finally{K.current=t}},useDebugValue:function(e,t){return O="useDebugValue",Se(),Xe(),void 0},useDeferredValue:function(e){return O="useDeferredValue",Se(),Xe(),_f(e)},useTransition:function(){return O="useTransition",Se(),Xe(),Df()},useMutableSource:function(e,t,n){return O="useMutableSource",Se(),Xe(),void 0},useSyncExternalStore:function(e,t,n){return O="useSyncExternalStore",Se(),Xe(),yf(e,t,n)},useId:function(){return O="useId",Se(),Xe(),Of()},unstable_isNewReconciler:ce},Ra={readContext:function(e){return Nf(),Ut(e)},useCallback:function(e,t){return O="useCallback",Se(),P(),To(e,t)},useContext:function(e){return O="useContext",Se(),P(),Ut(e)},useEffect:function(e,t){return O="useEffect",Se(),P(),Yu(e,t)},useImperativeHandle:function(e,t,n){return O="useImperativeHandle",Se(),P(),Ro(e,t,n)},useInsertionEffect:function(e,t){return O="useInsertionEffect",Se(),P(),bo(e,t)},useLayoutEffect:function(e,t){return O="useLayoutEffect",Se(),P(),Eo(e,t)},useMemo:function(e,t){O="useMemo",Se(),P();var n=K.current;K.current=Ra;try{return xo(e,t)}finally{K.current=n}},useReducer:function(e,t,n){O="useReducer",Se(),P();var a=K.current;K.current=Ra;try{return mf(e,t,n)}finally{K.current=a}},useRef:function(e){return O="useRef",Se(),P(),yo()},useState:function(e){O="useState",Se(),P();var t=K.current;K.current=Ra;try{return gf(e)}finally{K.current=t}},useDebugValue:function(e,t){return O="useDebugValue",Se(),P(),Co()},useDeferredValue:function(e){return O="useDeferredValue",Se(),P(),Qv(e)},useTransition:function(){return O="useTransition",Se(),P(),kv()},useMutableSource:function(e,t,n){return O="useMutableSource",Se(),P(),void 0},useSyncExternalStore:function(e,t,n){return O="useSyncExternalStore",Se(),P(),mo(e,t)},useId:function(){return O="useId",Se(),P(),_o()},unstable_isNewReconciler:ce},Oo={readContext:function(e){return Nf(),Ut(e)},useCallback:function(e,t){return O="useCallback",Se(),P(),To(e,t)},useContext:function(e){return O="useContext",Se(),P(),Ut(e)},useEffect:function(e,t){return O="useEffect",Se(),P(),Yu(e,t)},useImperativeHandle:function(e,t,n){return O="useImperativeHandle",Se(),P(),Ro(e,t,n)},useInsertionEffect:function(e,t){return O="useInsertionEffect",Se(),P(),bo(e,t)},useLayoutEffect:function(e,t){return O="useLayoutEffect",Se(),P(),Eo(e,t)},useMemo:function(e,t){O="useMemo",Se(),P();var n=K.current;K.current=Ra;try{return xo(e,t)}finally{K.current=n}},useReducer:function(e,t,n){O="useReducer",Se(),P();var a=K.current;K.current=Ra;try{return hf(e,t,n)}finally{K.current=a}},useRef:function(e){return O="useRef",Se(),P(),yo()},useState:function(e){O="useState",Se(),P();var t=K.current;K.current=Ra;try{return Sf(e)}finally{K.current=t}},useDebugValue:function(e,t){return O="useDebugValue",Se(),P(),Co()},useDeferredValue:function(e){return O="useDeferredValue",Se(),P(),Gv(e)},useTransition:function(){return O="useTransition",Se(),P(),Xv()},useMutableSource:function(e,t,n){return O="useMutableSource",Se(),P(),void 0},useSyncExternalStore:function(e,t,n){return O="useSyncExternalStore",Se(),P(),mo(e,t)},useId:function(){return O="useId",Se(),P(),_o()},unstable_isNewReconciler:ce}}var Mr=g.unstable_now,rm=0,No=-1,Pu=-1,Uo=-1,Uf=!1,Mo=!1;function im(){return Uf}function ub(){Mo=!0}function lb(){Uf=!1,Mo=!1}function ob(){Uf=Mo,Mo=!1}function um(){return rm}function lm(){rm=Mr()}function Mf(e){Pu=Mr(),e.actualStartTime<0&&(e.actualStartTime=Mr())}function om(e){Pu=-1}function Lo(e,t){if(Pu>=0){var n=Mr()-Pu;e.actualDuration+=n,t&&(e.selfBaseDuration=n),Pu=-1}}function Qa(e){if(No>=0){var t=Mr()-No;No=-1;for(var n=e.return;n!==null;){switch(n.tag){case te:var a=n.stateNode;a.effectDuration+=t;return;case xt:var r=n.stateNode;r.effectDuration+=t;return}n=n.return}}}function Lf(e){if(Uo>=0){var t=Mr()-Uo;Uo=-1;for(var n=e.return;n!==null;){switch(n.tag){case te:var a=n.stateNode;a!==null&&(a.passiveEffectDuration+=t);return;case xt:var r=n.stateNode;r!==null&&(r.passiveEffectDuration+=t);return}n=n.return}}}function Ga(){No=Mr()}function Af(){Uo=Mr()}function zf(e){for(var t=e.child;t;)e.actualDuration+=t.actualDuration,t=t.sibling}function ni(e,t){return{value:e,source:t,stack:lv(t),digest:null}}function Hf(e,t,n){return{value:e,source:null,stack:n!=null?n:null,digest:t!=null?t:null}}function cb(e,t){return!0}function jf(e,t){try{var n=cb(e,t);if(n===!1)return;var a=t.value,r=t.source,i=t.stack,u=i!==null?i:"";if(a!=null&&a._suppressLogging){if(e.tag===se)return;console.error(a)}var o=r?$(r):null,c=o?"The above error occurred in the <"+o+"> component:":"The above error occurred in one of your React components:",f;if(e.tag===te)f=`Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;else{var h=$(e)||"Anonymous";f="React will try to recreate this component tree from scratch "+("using the error boundary you provided, "+h+".")}var b=c+`
`+u+`

`+(""+f);console.error(b)}catch(T){setTimeout(function(){throw T})}}var sb=typeof WeakMap=="function"?WeakMap:Map;function cm(e,t,n){var a=cr(st,n);a.tag=Hs,a.payload={element:null};var r=t.value;return a.callback=function(){SR(r),jf(e,t)},a}function Ff(e,t,n){var a=cr(st,n);a.tag=Hs;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;a.payload=function(){return r(i)},a.callback=function(){Rh(e),jf(e,t)}}var u=e.stateNode;return u!==null&&typeof u.componentDidCatch=="function"&&(a.callback=function(){Rh(e),jf(e,t),typeof r!="function"&&yR(this);var c=t.value,f=t.stack;this.componentDidCatch(c,{componentStack:f!==null?f:""}),typeof r!="function"&&(Qn(e.lanes,ye)||y("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.",$(e)||"Unknown"))}),a}function sm(e,t,n){var a=e.pingCache,r;if(a===null?(a=e.pingCache=new sb,r=new Set,a.set(t,r)):(r=a.get(t),r===void 0&&(r=new Set,a.set(t,r))),!r.has(n)){r.add(n);var i=bR.bind(null,e,t,n);ya&&ul(e,n),t.then(i,i)}}function fb(e,t,n,a){var r=e.updateQueue;if(r===null){var i=new Set;i.add(n),e.updateQueue=i}else r.add(n)}function db(e,t){var n=e.tag;if((e.mode&qe)===ve&&(n===Te||n===je||n===Fe)){var a=e.alternate;a?(e.updateQueue=a.updateQueue,e.memoizedState=a.memoizedState,e.lanes=a.lanes):(e.updateQueue=null,e.memoizedState=null)}}function fm(e){var t=e;do{if(t.tag===Pe&&ZS(t))return t;t=t.return}while(t!==null);return null}function dm(e,t,n,a,r){if((e.mode&qe)===ve){if(e===t)e.flags|=Dt;else{if(e.flags|=Be,n.flags|=wr,n.flags&=~(si|Ma),n.tag===se){var i=n.alternate;if(i===null)n.tag=Wt;else{var u=cr(st,ye);u.tag=to,Dr(n,u,ye)}}n.lanes=Oe(n.lanes,ye)}return e}return e.flags|=Dt,e.lanes=r,e}function pb(e,t,n,a,r){if(n.flags|=Ma,ya&&ul(e,r),a!==null&&typeof a=="object"&&typeof a.then=="function"){var i=a;db(n),an()&&n.mode&qe&&$p();var u=fm(t);if(u!==null){u.flags&=~Ln,dm(u,t,n,e,r),u.mode&qe&&sm(e,i,r),fb(u,e,i);return}else{if(!Eg(r)){sm(e,i,r),Ed();return}var o=new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");a=o}}else if(an()&&n.mode&qe){$p();var c=fm(t);if(c!==null){(c.flags&Dt)===J&&(c.flags|=Ln),dm(c,t,n,e,r),Ns(ni(a,n));return}}a=ni(a,n),cR(a);var f=t;do{switch(f.tag){case te:{var h=a;f.flags|=Dt;var b=yu(r);f.lanes=Oe(f.lanes,b);var T=cm(f,h,b);Bs(f,T);return}case se:var N=a,A=f.type,M=f.stateNode;if((f.flags&Be)===J&&(typeof A.getDerivedStateFromError=="function"||M!==null&&typeof M.componentDidCatch=="function"&&!ph(M))){f.flags|=Dt;var ee=yu(r);f.lanes=Oe(f.lanes,ee);var me=Ff(f,N,ee);Bs(f,me);return}break}f=f.return}while(f!==null)}function vb(){return null}var qu=x.ReactCurrentOwner,Ca=!1,Bf,Qu,Vf,wf,Yf,ai,Pf,Ao;Bf={},Qu={},Vf={},wf={},Yf={},ai=!1,Pf={},Ao={};function Tn(e,t,n,a){e===null?t.child=Mv(t,null,n,a):t.child=Mi(t,e.child,n,a)}function mb(e,t,n,a){t.child=Mi(t,e.child,null,a),t.child=Mi(t,null,n,a)}function pm(e,t,n,a,r){if(t.type!==t.elementType){var i=n.propTypes;i&&ma(i,a,"prop",ae(n))}var u=n.render,o=t.ref,c,f;Ui(t,r),Ru(t);{if(qu.current=t,wa(!0),c=Fi(e,t,u,a,o,r),f=Bi(),t.mode&Nt){Jt(!0);try{c=Fi(e,t,u,a,o,r),f=Bi()}finally{Jt(!1)}}wa(!1)}return xi(),e!==null&&!Ca?(Hv(e,t,r),sr(e,t,r)):(an()&&f&&Cs(t),t.flags|=nt,Tn(e,t,c,r),t.child)}function vm(e,t,n,a,r){if(e===null){var i=n.type;if(FR(i)&&n.compare===null&&n.defaultProps===void 0){var u=i;return u=Ki(i),t.tag=Fe,t.type=u,Gf(t,i),mm(e,t,u,a,r)}{var o=i.propTypes;o&&ma(o,a,"prop",ae(i))}var c=Md(n.type,null,a,t,t.mode,r);return c.ref=t.ref,c.return=t,t.child=c,c}{var f=n.type,h=f.propTypes;h&&ma(h,a,"prop",ae(f))}var b=e.child,T=Wf(e,r);if(!T){var N=b.memoizedProps,A=n.compare;if(A=A!==null?A:Xl,A(N,a)&&e.ref===t.ref)return sr(e,t,r)}t.flags|=nt;var M=oi(b,a);return M.ref=t.ref,M.return=t,t.child=M,M}function mm(e,t,n,a,r){if(t.type!==t.elementType){var i=t.elementType;if(i.$$typeof===lt){var u=i,o=u._payload,c=u._init;try{i=c(o)}catch(b){i=null}var f=i&&i.propTypes;f&&ma(f,a,"prop",ae(i))}}if(e!==null){var h=e.memoizedProps;if(Xl(h,a)&&e.ref===t.ref&&t.type===e.type)if(Ca=!1,t.pendingProps=a=h,Wf(e,r))(e.flags&wr)!==J&&(Ca=!0);else return t.lanes=e.lanes,sr(e,t,r)}return qf(e,t,n,a,r)}function hm(e,t,n){var a=t.pendingProps,r=a.children,i=e!==null?e.memoizedState:null;if(a.mode==="hidden"||Ne)if((t.mode&qe)===ve){var u={baseLanes:z,cachePool:null,transitions:null};t.memoizedState=u,ac(t,n)}else if(Qn(n,qn)){var b={baseLanes:z,cachePool:null,transitions:null};t.memoizedState=b;var T=i!==null?i.baseLanes:n;ac(t,T)}else{var o=null,c;if(i!==null){var f=i.baseLanes;c=Oe(f,n)}else c=n;t.lanes=t.childLanes=qn;var h={baseLanes:c,cachePool:o,transitions:null};return t.memoizedState=h,t.updateQueue=null,ac(t,c),null}else{var N;i!==null?(N=Oe(i.baseLanes,n),t.memoizedState=null):N=n,ac(t,N)}return Tn(e,t,r,n),t.child}function hb(e,t,n){var a=t.pendingProps;return Tn(e,t,a,n),t.child}function yb(e,t,n){var a=t.pendingProps.children;return Tn(e,t,a,n),t.child}function gb(e,t,n){{t.flags|=he;{var a=t.stateNode;a.effectDuration=0,a.passiveEffectDuration=0}}var r=t.pendingProps,i=r.children;return Tn(e,t,i,n),t.child}function ym(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=ta,t.flags|=H)}function qf(e,t,n,a,r){if(t.type!==t.elementType){var i=n.propTypes;i&&ma(i,a,"prop",ae(n))}var u;{var o=yi(t,n,!0);u=gi(t,o)}var c,f;Ui(t,r),Ru(t);{if(qu.current=t,wa(!0),c=Fi(e,t,n,a,u,r),f=Bi(),t.mode&Nt){Jt(!0);try{c=Fi(e,t,n,a,u,r),f=Bi()}finally{Jt(!1)}}wa(!1)}return xi(),e!==null&&!Ca?(Hv(e,t,r),sr(e,t,r)):(an()&&f&&Cs(t),t.flags|=nt,Tn(e,t,c,r),t.child)}function gm(e,t,n,a,r){{switch(Mh(t)){case!1:{var i=t.stateNode,u=t.type,o=new u(t.memoizedProps,i.context),c=o.state;i.updater.enqueueSetState(i,c,null);break}case!0:{t.flags|=Be,t.flags|=Dt;var f=new Error("Simulated error coming from DevTools"),h=yu(r);t.lanes=Oe(t.lanes,h);var b=Ff(t,ni(f,t),h);Bs(t,b);break}}if(t.type!==t.elementType){var T=n.propTypes;T&&ma(T,a,"prop",ae(n))}}var N;za(n)?(N=!0,jl(t)):N=!1,Ui(t,r);var A=t.stateNode,M;A===null?(Ho(e,t),_v(t,n,a),Zs(t,n,a,r),M=!0):e===null?M=QS(t,n,a,r):M=GS(e,t,n,a,r);var ee=Qf(e,t,n,M,N,r);{var me=t.stateNode;M&&me.props!==a&&(ai||y("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.",$(t)||"a component"),ai=!0)}return ee}function Qf(e,t,n,a,r,i){ym(e,t);var u=(t.flags&Be)!==J;if(!a&&!u)return r&&_p(t,n,!1),sr(e,t,i);var o=t.stateNode;qu.current=t;var c;if(u&&typeof n.getDerivedStateFromError!="function")c=null,om();else{Ru(t);{if(wa(!0),c=o.render(),t.mode&Nt){Jt(!0);try{o.render()}finally{Jt(!1)}}wa(!1)}xi()}return t.flags|=nt,e!==null&&u?mb(e,t,c,i):Tn(e,t,c,i),t.memoizedState=o.state,r&&_p(t,n,!0),t.child}function Sm(e){var t=e.stateNode;t.pendingContext?Tp(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Tp(e,t.context,!1),af(e,t.containerInfo)}function Sb(e,t,n){if(Sm(t),e===null)throw new Error("Should have a current fiber. This is a bug in React.");var a=t.pendingProps,r=t.memoizedState,i=r.element;gv(e,t),io(t,a,null,n);var u=t.memoizedState,o=t.stateNode,c=u.element;if(At&&r.isDehydrated){var f={element:c,isDehydrated:!1,cache:u.cache,pendingSuspenseBoundaries:u.pendingSuspenseBoundaries,transitions:u.transitions},h=t.updateQueue;if(h.baseState=f,t.memoizedState=f,t.flags&Ln){var b=ni(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."),t);return bm(e,t,c,n,b)}else if(c!==i){var T=ni(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."),t);return bm(e,t,c,n,T)}else{yS(t);var N=Mv(t,null,c,n);t.child=N;for(var A=N;A;)A.flags=A.flags&~Ke|An,A=A.sibling}}else{if(Oi(),c===i)return sr(e,t,n);Tn(e,t,c,n)}return t.child}function bm(e,t,n,a,r){return Oi(),Ns(r),t.flags|=Ln,Tn(e,t,n,a),t.child}function bb(e,t,n){Lv(t),e===null&&Os(t);var a=t.type,r=t.pendingProps,i=e!==null?e.memoizedProps:null,u=r.children,o=ru(a,r);return o?u=null:i!==null&&ru(a,i)&&(t.flags|=da),ym(e,t),Tn(e,t,u,n),t.child}function Eb(e,t){return e===null&&Os(t),null}function Rb(e,t,n,a){Ho(e,t);var r=t.pendingProps,i=n,u=i._payload,o=i._init,c=o(u);t.type=c;var f=t.tag=BR(c),h=ba(c,r),b;switch(f){case Te:return Gf(t,c),t.type=c=Ki(c),b=qf(null,t,c,h,a),b;case se:return t.type=c=xd(c),b=gm(null,t,c,h,a),b;case je:return t.type=c=_d(c),b=pm(null,t,c,h,a),b;case dt:{if(t.type!==t.elementType){var T=c.propTypes;T&&ma(T,h,"prop",ae(c))}return b=vm(null,t,c,ba(c.type,h),a),b}}var N="";throw c!==null&&typeof c=="object"&&c.$$typeof===lt&&(N=" Did you wrap a component in React.lazy() more than once?"),new Error("Element type is invalid. Received a promise that resolves to: "+c+". "+("Lazy element type must resolve to a class or function."+N))}function Cb(e,t,n,a,r){Ho(e,t),t.tag=se;var i;return za(n)?(i=!0,jl(t)):i=!1,Ui(t,r),_v(t,n,a),Zs(t,n,a,r),Qf(null,t,n,!0,i,r)}function Tb(e,t,n,a){Ho(e,t);var r=t.pendingProps,i;{var u=yi(t,n,!1);i=gi(t,u)}Ui(t,a);var o,c;Ru(t);{if(n.prototype&&typeof n.prototype.render=="function"){var f=ae(n)||"Unknown";Bf[f]||(y("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",f,f),Bf[f]=!0)}t.mode&Nt&&Sa.recordLegacyContextWarning(t,null),wa(!0),qu.current=t,o=Fi(null,t,n,r,i,a),c=Bi(),wa(!1)}if(xi(),t.flags|=nt,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0){var h=ae(n)||"Unknown";Qu[h]||(y("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.",h,h,h),Qu[h]=!0)}if(typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0){{var b=ae(n)||"Unknown";Qu[b]||(y("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.",b,b,b),Qu[b]=!0)}t.tag=se,t.memoizedState=null,t.updateQueue=null;var T=!1;return za(n)?(T=!0,jl(t)):T=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Fs(t),xv(t,o),Zs(t,n,r,a),Qf(null,t,n,!0,T,a)}else{if(t.tag=Te,t.mode&Nt){Jt(!0);try{o=Fi(null,t,n,r,i,a),c=Bi()}finally{Jt(!1)}}return an()&&c&&Cs(t),Tn(null,t,o,a),Gf(t,n),t.child}}function Gf(e,t){{if(t&&t.childContextTypes&&y("%s(...): childContextTypes cannot be defined on a function component.",t.displayName||t.name||"Component"),e.ref!==null){var n="",a=OS();a&&(n+=`

Check the render method of \``+a+"`.");var r=a||"",i=e._debugSource;i&&(r=i.fileName+":"+i.lineNumber),Yf[r]||(Yf[r]=!0,y("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s",n))}if(typeof t.getDerivedStateFromProps=="function"){var u=ae(t)||"Unknown";wf[u]||(y("%s: Function components do not support getDerivedStateFromProps.",u),wf[u]=!0)}if(typeof t.contextType=="object"&&t.contextType!==null){var o=ae(t)||"Unknown";Vf[o]||(y("%s: Function components do not support contextType.",o),Vf[o]=!0)}}}var Kf={dehydrated:null,treeContext:null,retryLane:Kt};function kf(e){return{baseLanes:e,cachePool:vb(),transitions:null}}function xb(e,t){var n=null;return{baseLanes:Oe(e.baseLanes,t),cachePool:n,transitions:e.transitions}}function _b(e,t,n,a){if(t!==null){var r=t.memoizedState;if(r===null)return!1}return uf(e,Hu)}function Db(e,t){return Pl(e.childLanes,t)}function Em(e,t,n){var a=t.pendingProps;Ah(t)&&(t.flags|=Be);var r=Ea.current,i=!1,u=(t.flags&Be)!==J;if(u||_b(r,e)?(i=!0,t.flags&=~Be):(e===null||e.memoizedState!==null)&&(r=JS(r,zv)),r=Ai(r),Nr(t,r),e===null){Os(t);var o=t.memoizedState;if(o!==null){var c=o.dehydrated;if(c!==null)return Lb(t,c)}var f=a.children,h=a.fallback;if(i){var b=Ob(t,f,h,n),T=t.child;return T.memoizedState=kf(n),t.memoizedState=Kf,b}else return Xf(t,f)}else{var N=e.memoizedState;if(N!==null){var A=N.dehydrated;if(A!==null)return Ab(e,t,u,a,A,N,n)}if(i){var M=a.fallback,ee=a.children,me=Ub(e,t,ee,M,n),re=t.child,Je=e.child.memoizedState;return re.memoizedState=Je===null?kf(n):xb(Je,n),re.childLanes=Db(e,n),t.memoizedState=Kf,me}else{var Ye=a.children,R=Nb(e,t,Ye,n);return t.memoizedState=null,R}}}function Xf(e,t,n){var a=e.mode,r={mode:"visible",children:t},i=Jf(r,a);return i.return=e,e.child=i,i}function Ob(e,t,n,a){var r=e.mode,i=e.child,u={mode:"hidden",children:t},o,c;return(r&qe)===ve&&i!==null?(o=i,o.childLanes=z,o.pendingProps=u,e.mode&$e&&(o.actualDuration=0,o.actualStartTime=-1,o.selfBaseDuration=0,o.treeBaseDuration=0),c=jr(n,r,a,null)):(o=Jf(u,r),c=jr(n,r,a,null)),o.return=e,c.return=e,o.sibling=c,e.child=o,c}function Jf(e,t,n){return Th(e,t,z,null)}function Rm(e,t){return oi(e,t)}function Nb(e,t,n,a){var r=e.child,i=r.sibling,u=Rm(r,{mode:"visible",children:n});if((t.mode&qe)===ve&&(u.lanes=a),u.return=t,u.sibling=null,i!==null){var o=t.deletions;o===null?(t.deletions=[i],t.flags|=$t):o.push(i)}return t.child=u,u}function Ub(e,t,n,a,r){var i=t.mode,u=e.child,o=u.sibling,c={mode:"hidden",children:n},f;if((i&qe)===ve&&t.child!==u){var h=t.child;f=h,f.childLanes=z,f.pendingProps=c,t.mode&$e&&(f.actualDuration=0,f.actualStartTime=-1,f.selfBaseDuration=u.selfBaseDuration,f.treeBaseDuration=u.treeBaseDuration),t.deletions=null}else f=Rm(u,c),f.subtreeFlags=u.subtreeFlags&ke;var b;return o!==null?b=oi(o,a):(b=jr(a,i,r,null),b.flags|=Ke),b.return=t,f.return=t,f.sibling=b,t.child=f,b}function zo(e,t,n,a){a!==null&&Ns(a),Mi(t,e.child,null,n);var r=t.pendingProps,i=r.children,u=Xf(t,i);return u.flags|=Ke,t.memoizedState=null,u}function Mb(e,t,n,a,r){var i=t.mode,u={mode:"visible",children:n},o=Jf(u,i),c=jr(a,i,r,null);return c.flags|=Ke,o.return=t,c.return=t,o.sibling=c,t.child=o,(t.mode&qe)!==ve&&Mi(t,e.child,null,r),c}function Lb(e,t,n){return(e.mode&qe)===ve?(y("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."),e.lanes=ye):Rr(t)?e.lanes=Qr:e.lanes=qn,null}function Ab(e,t,n,a,r,i,u){if(n)if(t.flags&Ln){t.flags&=~Ln;var R=Hf(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));return zo(e,t,u,R)}else{if(t.memoizedState!==null)return t.child=e.child,t.flags|=Be,null;var D=a.children,E=a.fallback,F=Mb(e,t,D,E,u),I=t.child;return I.memoizedState=kf(u),t.memoizedState=Kf,F}else{if(mS(),(t.mode&qe)===ve)return zo(e,t,u,null);if(Rr(r)){var o,c,f;{var h=su(r);o=h.digest,c=h.message,f=h.stack}var b;c?b=new Error(c):b=new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");var T=Hf(b,o,f);return zo(e,t,u,T)}var N=Qn(u,e.childLanes);if(Ca||N){var A=tc();if(A!==null){var M=Ng(A,u);if(M!==Kt&&M!==i.retryLane){i.retryLane=M;var ee=st;Cn(e,M),Lt(A,e,M,ee)}}Ed();var me=Hf(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));return zo(e,t,u,me)}else if(Ot(r)){t.flags|=Be,t.child=e.child;var re=ER.bind(null,e);return Ol(r,re),null}else{gS(t,r,i.treeContext);var Je=a.children,Ye=Xf(t,Je);return Ye.flags|=An,Ye}}}function Cm(e,t,n){e.lanes=Oe(e.lanes,t);var a=e.alternate;a!==null&&(a.lanes=Oe(a.lanes,t)),As(e.return,t,n)}function zb(e,t,n){for(var a=t;a!==null;){if(a.tag===Pe){var r=a.memoizedState;r!==null&&Cm(a,n,e)}else if(a.tag===Et)Cm(a,n,e);else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)return;for(;a.sibling===null;){if(a.return===null||a.return===e)return;a=a.return}a.sibling.return=a.return,a=a.sibling}}function Hb(e){for(var t=e,n=null;t!==null;){var a=t.alternate;a!==null&&po(a)===null&&(n=t),t=t.sibling}return n}function jb(e){if(e!==void 0&&e!=="forwards"&&e!=="backwards"&&e!=="together"&&!Pf[e])if(Pf[e]=!0,typeof e=="string")switch(e.toLowerCase()){case"together":case"forwards":case"backwards":{y('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.',e,e.toLowerCase());break}case"forward":case"backward":{y('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.',e,e.toLowerCase());break}default:y('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?',e);break}else y('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?',e)}function Fb(e,t){e!==void 0&&!Ao[e]&&(e!=="collapsed"&&e!=="hidden"?(Ao[e]=!0,y('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?',e)):t!=="forwards"&&t!=="backwards"&&(Ao[e]=!0,y('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?',e)))}function Tm(e,t){{var n=vn(e),a=!n&&typeof Y(e)=="function";if(n||a){var r=n?"array":"iterable";return y("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>",r,t,r),!1}}return!0}function Bb(e,t){if((t==="forwards"||t==="backwards")&&e!==void 0&&e!==null&&e!==!1)if(vn(e)){for(var n=0;n<e.length;n++)if(!Tm(e[n],n))return}else{var a=Y(e);if(typeof a=="function"){var r=a.call(e);if(r)for(var i=r.next(),u=0;!i.done;i=r.next()){if(!Tm(i.value,u))return;u++}}else y('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?',t)}}function Zf(e,t,n,a,r){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:r}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=a,i.tail=n,i.tailMode=r)}function xm(e,t,n){var a=t.pendingProps,r=a.revealOrder,i=a.tail,u=a.children;jb(r),Fb(i,r),Bb(u,r),Tn(e,t,u,n);var o=Ea.current,c=uf(o,Hu);if(c)o=lf(o,Hu),t.flags|=Be;else{var f=e!==null&&(e.flags&Be)!==J;f&&zb(t,t.child,n),o=Ai(o)}if(Nr(t,o),(t.mode&qe)===ve)t.memoizedState=null;else switch(r){case"forwards":{var h=Hb(t.child),b;h===null?(b=t.child,t.child=null):(b=h.sibling,h.sibling=null),Zf(t,!1,b,h,i);break}case"backwards":{var T=null,N=t.child;for(t.child=null;N!==null;){var A=N.alternate;if(A!==null&&po(A)===null){t.child=N;break}var M=N.sibling;N.sibling=T,T=N,N=M}Zf(t,!0,T,null,i);break}case"together":{Zf(t,!1,null,null,void 0);break}default:t.memoizedState=null}return t.child}function Vb(e,t,n){af(t,t.stateNode.containerInfo);var a=t.pendingProps;return e===null?t.child=Mi(t,null,a,n):Tn(e,t,a,n),t.child}var _m=!1;function wb(e,t,n){var a=t.type,r=a._context,i=t.pendingProps,u=t.memoizedProps,o=i.value;{"value"in i||_m||(_m=!0,y("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));var c=t.type.propTypes;c&&ma(c,i,"prop","Context.Provider")}if(vv(t,r,o),u!==null){var f=u.value;if(Gn(f,o)){if(u.children===i.children&&!zl())return sr(e,t,n)}else zS(t,r,n)}var h=i.children;return Tn(e,t,h,n),t.child}var Dm=!1;function Yb(e,t,n){var a=t.type;a._context===void 0?a!==a.Consumer&&(Dm||(Dm=!0,y("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))):a=a._context;var r=t.pendingProps,i=r.children;typeof i!="function"&&y("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."),Ui(t,n);var u=Ut(a);Ru(t);var o;return qu.current=t,wa(!0),o=i(u),wa(!1),xi(),t.flags|=nt,Tn(e,t,o,n),t.child}function Gu(){Ca=!0}function Ho(e,t){(t.mode&qe)===ve&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=Ke)}function sr(e,t,n){return e!==null&&(t.dependencies=e.dependencies),om(),il(t.lanes),Qn(n,t.childLanes)?(KS(e,t),t.child):null}function Pb(e,t,n){{var a=t.return;if(a===null)throw new Error("Cannot swap the root fiber.");if(e.alternate=null,t.alternate=null,n.index=t.index,n.sibling=t.sibling,n.return=t.return,n.ref=t.ref,t===a.child)a.child=n;else{var r=a.child;if(r===null)throw new Error("Expected parent to have a child.");for(;r.sibling!==t;)if(r=r.sibling,r===null)throw new Error("Expected to find the previous sibling.");r.sibling=n}var i=a.deletions;return i===null?(a.deletions=[e],a.flags|=$t):i.push(e),n.flags|=Ke,n}}function Wf(e,t){var n=e.lanes;return!!Qn(n,t)}function qb(e,t,n){switch(t.tag){case te:Sm(t);var a=t.stateNode;Oi();break;case ne:Lv(t);break;case se:{var r=t.type;za(r)&&jl(t);break}case Ae:af(t,t.stateNode.containerInfo);break;case Tt:{var i=t.memoizedProps.value,u=t.type._context;vv(t,u,i);break}case xt:{var o=Qn(n,t.childLanes);o&&(t.flags|=he);{var c=t.stateNode;c.effectDuration=0,c.passiveEffectDuration=0}}break;case Pe:{var f=t.memoizedState;if(f!==null){if(f.dehydrated!==null)return Nr(t,Ai(Ea.current)),t.flags|=Be,null;var h=t.child,b=h.childLanes;if(Qn(n,b))return Em(e,t,n);Nr(t,Ai(Ea.current));var T=sr(e,t,n);return T!==null?T.sibling:null}else Nr(t,Ai(Ea.current));break}case Et:{var N=(e.flags&Be)!==J,A=Qn(n,t.childLanes);if(N){if(A)return xm(e,t,n);t.flags|=Be}var M=t.memoizedState;if(M!==null&&(M.rendering=null,M.tail=null,M.lastEffect=null),Nr(t,Ea.current),A)break;return null}case ut:case It:return t.lanes=z,hm(e,t,n)}return sr(e,t,n)}function Om(e,t,n){if(t._debugNeedsRemount&&e!==null)return Pb(e,t,Md(t.type,t.key,t.pendingProps,t._debugOwner||null,t.mode,t.lanes));if(e!==null){var a=e.memoizedProps,r=t.pendingProps;if(a!==r||zl()||t.type!==e.type)Ca=!0;else{var i=Wf(e,n);if(!i&&(t.flags&Be)===J)return Ca=!1,qb(e,t,n);(e.flags&wr)!==J?Ca=!0:Ca=!1}}else if(Ca=!1,an()&&cS(t)){var u=t.index,o=sS();Ip(t,o,u)}switch(t.lanes=z,t.tag){case ft:return Tb(e,t,t.type,n);case _t:{var c=t.elementType;return Rb(e,t,c,n)}case Te:{var f=t.type,h=t.pendingProps,b=t.elementType===f?h:ba(f,h);return qf(e,t,f,b,n)}case se:{var T=t.type,N=t.pendingProps,A=t.elementType===T?N:ba(T,N);return gm(e,t,T,A,n)}case te:return Sb(e,t,n);case ne:return bb(e,t,n);case be:return Eb(e,t);case Pe:return Em(e,t,n);case Ae:return Vb(e,t,n);case je:{var M=t.type,ee=t.pendingProps,me=t.elementType===M?ee:ba(M,ee);return pm(e,t,M,me,n)}case _e:return hb(e,t,n);case vt:return yb(e,t,n);case xt:return gb(e,t,n);case Tt:return wb(e,t,n);case pe:return Yb(e,t,n);case dt:{var re=t.type,Je=t.pendingProps,Ye=ba(re,Je);if(t.type!==t.elementType){var R=re.propTypes;R&&ma(R,Ye,"prop",ae(re))}return Ye=ba(re.type,Ye),vm(e,t,re,Ye,n)}case Fe:return mm(e,t,t.type,t.pendingProps,n);case Wt:{var D=t.type,E=t.pendingProps,F=t.elementType===D?E:ba(D,E);return Cb(e,t,D,F,n)}case Et:return xm(e,t,n);case bn:break;case ut:return hm(e,t,n)}throw new Error("Unknown unit of work tag ("+t.tag+"). This error is likely caused by a bug in React. Please file an issue.")}function Ka(e){e.flags|=he}function Nm(e){e.flags|=ta,e.flags|=H}function Um(e,t){var n=e!==null&&e.child===t.child;if(n)return!0;if((t.flags&$t)!==J)return!1;for(var a=t.child;a!==null;){if((a.flags&xe)!==J||(a.subtreeFlags&xe)!==J)return!1;a=a.sibling}return!0}var Ku,ku,jo,Fo;if(Gt)Ku=function(e,t,n,a){for(var r=t.child;r!==null;){if(r.tag===ne||r.tag===be)Sr(e,r.stateNode);else if(r.tag!==Ae){if(r.child!==null){r.child.return=r,r=r.child;continue}}if(r===t)return;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},ku=function(e,t){},jo=function(e,t,n,a,r){var i=e.memoizedProps;if(i!==a){var u=t.stateNode,o=zu(),c=Yr(u,n,i,a,r,o);t.updateQueue=c,c&&Ka(t)}},Fo=function(e,t,n,a){n!==a&&Ka(t)};else if(pi){Ku=function(e,t,n,a){for(var r=t.child;r!==null;){if(r.tag===ne){var i=r.stateNode;if(n&&a){var u=r.memoizedProps,o=r.type;i=Ie(i,o,u,r)}Sr(e,i)}else if(r.tag===be){var c=r.stateNode;if(n&&a){var f=r.memoizedProps;c=at(c,f,r)}Sr(e,c)}else if(r.tag!==Ae){if(r.tag===ut&&r.memoizedState!==null){var h=r.child;h!==null&&(h.return=r),Ku(e,r,!0,!0)}else if(r.child!==null){r.child.return=r,r=r.child;continue}}if(r=r,r===t)return;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};var Mm=function(e,t,n,a){for(var r=t.child;r!==null;){if(r.tag===ne){var i=r.stateNode;if(n&&a){var u=r.memoizedProps,o=r.type;i=Ie(i,o,u,r)}W(e,i)}else if(r.tag===be){var c=r.stateNode;if(n&&a){var f=r.memoizedProps;c=at(c,f,r)}W(e,c)}else if(r.tag!==Ae){if(r.tag===ut&&r.memoizedState!==null){var h=r.child;h!==null&&(h.return=r),Mm(e,r,!0,!0)}else if(r.child!==null){r.child.return=r,r=r.child;continue}}if(r=r,r===t)return;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};ku=function(e,t){var n=t.stateNode,a=Um(e,t);if(!a){var r=n.containerInfo,i=de(r);Mm(i,t,!1,!1),n.pendingChildren=i,Ka(t),Re(r,i)}},jo=function(e,t,n,a,r){var i=e.stateNode,u=e.memoizedProps,o=Um(e,t);if(o&&u===a){t.stateNode=i;return}var c=t.stateNode,f=zu(),h=null;if(u!==a&&(h=Yr(c,n,u,a,r,f)),o&&h===null){t.stateNode=i;return}var b=V(i,h,n,u,a,t,o,c);di(b,n,a,r,f)&&Ka(t),t.stateNode=b,o?Ka(t):Ku(b,t,!1,!1)},Fo=function(e,t,n,a){if(n!==a){var r=nf(),i=zu();t.stateNode=iu(a,r,i,t),Ka(t)}else t.stateNode=e.stateNode}}else ku=function(e,t){},jo=function(e,t,n,a,r){},Fo=function(e,t,n,a){};function Xu(e,t){if(!an())switch(e.tailMode){case"hidden":{for(var n=e.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break}case"collapsed":{for(var r=e.tail,i=null;r!==null;)r.alternate!==null&&(i=r),r=r.sibling;i===null?!t&&e.tail!==null?e.tail.sibling=null:e.tail=null:i.sibling=null;break}}}function un(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=z,a=J;if(t){if((e.mode&$e)!==ve){for(var c=e.selfBaseDuration,f=e.child;f!==null;)n=Oe(n,Oe(f.lanes,f.childLanes)),a|=f.subtreeFlags&ke,a|=f.flags&ke,c+=f.treeBaseDuration,f=f.sibling;e.treeBaseDuration=c}else for(var h=e.child;h!==null;)n=Oe(n,Oe(h.lanes,h.childLanes)),a|=h.subtreeFlags&ke,a|=h.flags&ke,h.return=e,h=h.sibling;e.subtreeFlags|=a}else{if((e.mode&$e)!==ve){for(var r=e.actualDuration,i=e.selfBaseDuration,u=e.child;u!==null;)n=Oe(n,Oe(u.lanes,u.childLanes)),a|=u.subtreeFlags,a|=u.flags,r+=u.actualDuration,i+=u.treeBaseDuration,u=u.sibling;e.actualDuration=r,e.treeBaseDuration=i}else for(var o=e.child;o!==null;)n=Oe(n,Oe(o.lanes,o.childLanes)),a|=o.subtreeFlags,a|=o.flags,o.return=e,o=o.sibling;e.subtreeFlags|=a}return e.childLanes=n,t}function Qb(e,t,n){if(CS()&&(t.mode&qe)!==ve&&(t.flags&Be)===J)return iv(t),Oi(),t.flags|=Ln|Ma|Dt,!1;var a=kl(t);if(n!==null&&n.dehydrated!==null)if(e===null){if(!a)throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");if(ES(t),un(t),(t.mode&$e)!==ve){var r=n!==null;if(r){var i=t.child;i!==null&&(t.treeBaseDuration-=i.treeBaseDuration)}}return!1}else{if(Oi(),(t.flags&Be)===J&&(t.memoizedState=null),t.flags|=he,un(t),(t.mode&$e)!==ve){var u=n!==null;if(u){var o=t.child;o!==null&&(t.treeBaseDuration-=o.treeBaseDuration)}}return!1}else return uv(),!0}function Lm(e,t,n){var a=t.pendingProps;switch(Ts(t),t.tag){case ft:case _t:case Fe:case Te:case je:case _e:case vt:case xt:case pe:case dt:return un(t),null;case se:{var r=t.type;return za(r)&&Hl(t),un(t),null}case te:{var i=t.stateNode;if(Li(t),kc(t),cf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),e===null||e.child===null){var u=kl(t);if(u)Ka(t);else if(e!==null){var o=e.memoizedState;(!o.isDehydrated||(t.flags&Ln)!==J)&&(t.flags|=dn,uv())}}return ku(e,t),un(t),null}case ne:{rf(t);var c=nf(),f=t.type;if(e!==null&&t.stateNode!=null)jo(e,t,f,a,c),e.ref!==t.ref&&Nm(t);else{if(!a){if(t.stateNode===null)throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");return un(t),null}var h=zu(),b=kl(t);if(b)SS(t,c,h)&&Ka(t);else{var T=au(f,a,c,h,t);Ku(T,t,!1,!1),t.stateNode=T,di(T,f,a,c,h)&&Ka(t)}t.ref!==null&&Nm(t)}return un(t),null}case be:{var N=a;if(e&&t.stateNode!=null){var A=e.memoizedProps;Fo(e,t,A,N)}else{if(typeof N!="string"&&t.stateNode===null)throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");var M=nf(),ee=zu(),me=kl(t);me?bS(t)&&Ka(t):t.stateNode=iu(N,M,ee,t)}return un(t),null}case Pe:{zi(t);var re=t.memoizedState;if(e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){var Je=Qb(e,t,re);if(!Je)return t.flags&Dt?t:null}if((t.flags&Be)!==J)return t.lanes=n,(t.mode&$e)!==ve&&zf(t),t;var Ye=re!==null,R=e!==null&&e.memoizedState!==null;if(Ye!==R&&Ye){var D=t.child;if(D.flags|=pa,(t.mode&qe)!==ve){var E=e===null&&(t.memoizedProps.unstable_avoidThisFallback!==!0||!ie);E||uf(Ea.current,zv)?oR():Ed()}}var F=t.updateQueue;if(F!==null&&(t.flags|=he),un(t),(t.mode&$e)!==ve&&Ye){var I=t.child;I!==null&&(t.treeBaseDuration-=I.treeBaseDuration)}return null}case Ae:return Li(t),ku(e,t),e===null&&Dc(t.stateNode.containerInfo),un(t),null;case Tt:var k=t.type._context;return Ls(k,t),un(t),null;case Wt:{var Ve=t.type;return za(Ve)&&Hl(t),un(t),null}case Et:{zi(t);var ge=t.memoizedState;if(ge===null)return un(t),null;var Ge=(t.flags&Be)!==J,ze=ge.rendering;if(ze===null)if(Ge)Xu(ge,!1);else{var rt=sR()&&(e===null||(e.flags&Be)===J);if(!rt)for(var oe=t.child;oe!==null;){var bt=po(oe);if(bt!==null){Ge=!0,t.flags|=Be,Xu(ge,!1);var gn=bt.updateQueue;return gn!==null&&(t.updateQueue=gn,t.flags|=he),t.subtreeFlags=J,kS(t,n),Nr(t,lf(Ea.current,Hu)),t.child}oe=oe.sibling}ge.tail!==null&&Xt()>ah()&&(t.flags|=Be,Ge=!0,Xu(ge,!1),t.lanes=Np)}else{if(!Ge){var sn=po(ze);if(sn!==null){t.flags|=Be,Ge=!0;var Xn=sn.updateQueue;if(Xn!==null&&(t.updateQueue=Xn,t.flags|=he),Xu(ge,!0),ge.tail===null&&ge.tailMode==="hidden"&&!ze.alternate&&!an())return un(t),null}else Xt()*2-ge.renderingStartTime>ah()&&n!==qn&&(t.flags|=Be,Ge=!0,Xu(ge,!1),t.lanes=Np)}if(ge.isBackwards)ze.sibling=t.child,t.child=ze;else{var _n=ge.last;_n!==null?_n.sibling=ze:t.child=ze,ge.last=ze}}if(ge.tail!==null){var Dn=ge.tail;ge.rendering=Dn,ge.tail=Dn.sibling,ge.renderingStartTime=Xt(),Dn.sibling=null;var Sn=Ea.current;return Ge?Sn=lf(Sn,Hu):Sn=Ai(Sn),Nr(t,Sn),Dn}return un(t),null}case bn:break;case ut:case It:{bd(t);var pr=t.memoizedState,ki=pr!==null;if(e!==null){var ol=e.memoizedState,Wa=ol!==null;Wa!==ki&&!Ne&&(t.flags|=pa)}return!ki||(t.mode&qe)===ve?un(t):Qn(Ja,qn)&&(un(t),Gt&&t.subtreeFlags&(Ke|he)&&(t.flags|=pa)),null}case ca:return null;case In:return null}throw new Error("Unknown unit of work tag ("+t.tag+"). This error is likely caused by a bug in React. Please file an issue.")}function Gb(e,t,n){switch(Ts(t),t.tag){case se:{var a=t.type;za(a)&&Hl(t);var r=t.flags;return r&Dt?(t.flags=r&~Dt|Be,(t.mode&$e)!==ve&&zf(t),t):null}case te:{var i=t.stateNode;Li(t),kc(t),cf();var u=t.flags;return(u&Dt)!==J&&(u&Be)===J?(t.flags=u&~Dt|Be,t):null}case ne:return rf(t),null;case Pe:{zi(t);var o=t.memoizedState;if(o!==null&&o.dehydrated!==null){if(t.alternate===null)throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");Oi()}var c=t.flags;return c&Dt?(t.flags=c&~Dt|Be,(t.mode&$e)!==ve&&zf(t),t):null}case Et:return zi(t),null;case Ae:return Li(t),null;case Tt:var f=t.type._context;return Ls(f,t),null;case ut:case It:return bd(t),null;case ca:return null;default:return null}}function Am(e,t,n){switch(Ts(t),t.tag){case se:{var a=t.type.childContextTypes;a!=null&&Hl(t);break}case te:{var r=t.stateNode;Li(t),kc(t),cf();break}case ne:{rf(t);break}case Ae:Li(t);break;case Pe:zi(t);break;case Et:zi(t);break;case Tt:var i=t.type._context;Ls(i,t);break;case ut:case It:bd(t);break}}function zm(e,t,n,a,r,i,u,o,c){var f=Array.prototype.slice.call(arguments,3);try{t.apply(n,f)}catch(h){this.onError(h)}}var Hm=zm;if(typeof window!="undefined"&&typeof window.dispatchEvent=="function"&&typeof document!="undefined"&&typeof document.createEvent=="function"){var If=document.createElement("react");Hm=function(t,n,a,r,i,u,o,c,f){if(typeof document=="undefined"||document===null)throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");var h=document.createEvent("Event"),b=!1,T=!0,N=window.event,A=Object.getOwnPropertyDescriptor(window,"event");function M(){If.removeEventListener(D,me,!1),typeof window.event!="undefined"&&window.hasOwnProperty("event")&&(window.event=N)}var ee=Array.prototype.slice.call(arguments,3);function me(){b=!0,M(),n.apply(a,ee),T=!1}var re,Je=!1,Ye=!1;function R(E){if(re=E.error,Je=!0,re===null&&E.colno===0&&E.lineno===0&&(Ye=!0),E.defaultPrevented&&re!=null&&typeof re=="object")try{re._suppressLogging=!0}catch(F){}}var D="react-"+(t||"invokeguardedcallback");if(window.addEventListener("error",R),If.addEventListener(D,me,!1),h.initEvent(D,!1,!1),If.dispatchEvent(h),A&&Object.defineProperty(window,"event",A),b&&T&&(Je?Ye&&(re=new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")):re=new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`),this.onError(re)),window.removeEventListener("error",R),!b)return M(),zm.apply(this,arguments)}}var Kb=Hm,Ju=!1,Bo=null,kb={onError:function(e){Ju=!0,Bo=e}};function jm(e,t,n,a,r,i,u,o,c){Ju=!1,Bo=null,Kb.apply(kb,arguments)}function Xb(){return Ju}function Fm(){if(Ju){var e=Bo;return Ju=!1,Bo=null,e}else throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.")}var Bm=null;Bm=new Set;var Vo=!1,ln=!1,Jb=typeof WeakSet=="function"?WeakSet:Set,Z=null,Vi=null,wi=null;function Zb(e){jm(null,function(){throw e}),Fm()}var Wb=function(e,t){if(t.props=e.memoizedProps,t.state=e.memoizedState,e.mode&$e)try{Ga(),t.componentWillUnmount()}finally{Qa(e)}else t.componentWillUnmount()};function Vm(e,t){try{Lr(Ht,e)}catch(n){tt(e,t,n)}}function $f(e,t,n){try{Wb(e,n)}catch(a){tt(e,t,a)}}function Ib(e,t,n){try{n.componentDidMount()}catch(a){tt(e,t,a)}}function wm(e,t){try{qm(e)}catch(n){tt(e,t,n)}}function Yi(e,t){var n=e.ref;if(n!==null)if(typeof n=="function"){var a;try{if(Ze&&gt&&e.mode&$e)try{Ga(),a=n(null)}finally{Qa(e)}else a=n(null)}catch(r){tt(e,t,r)}typeof a=="function"&&y("Unexpected return value from a callback ref in %s. A callback ref should not return a function.",$(e))}else n.current=null}function wo(e,t,n){try{n()}catch(a){tt(e,t,a)}}var Ym=null,Pm=!1;function $b(e,t){Ym=Tc(e.containerInfo),Z=t,eE();var n=Pm;return Pm=!1,Ym=null,n}function eE(){for(;Z!==null;){var e=Z,t=e.child;(e.subtreeFlags&Me)!==J&&t!==null?(t.return=e,Z=t):tE()}}function tE(){for(;Z!==null;){var e=Z;Ct(e);try{nE(e)}catch(n){tt(e,e.return,n)}Rn();var t=e.sibling;if(t!==null){t.return=e.return,Z=t;return}Z=e.return}}function nE(e){var t=e.alternate,n=e.flags;if((n&dn)!==J){switch(Ct(e),e.tag){case Te:case je:case Fe:break;case se:{if(t!==null){var a=t.memoizedProps,r=t.memoizedState,i=e.stateNode;e.type===e.elementType&&!ai&&(i.props!==e.memoizedProps&&y("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",$(e)||"instance"),i.state!==e.memoizedState&&y("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",$(e)||"instance"));var u=i.getSnapshotBeforeUpdate(e.elementType===e.type?a:ba(e.type,a),r);{var o=Bm;u===void 0&&!o.has(e.type)&&(o.add(e.type),y("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.",$(e)))}i.__reactInternalSnapshotBeforeUpdate=u}break}case te:{if(Gt){var c=e.stateNode;_(c.containerInfo)}break}case ne:case be:case Ae:case Wt:break;default:throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.")}Rn()}}function Ta(e,t,n){var a=t.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var i=r.next,u=i;do{if((u.tag&e)===e){var o=u.destroy;u.destroy=void 0,o!==void 0&&((e&rn)!==zn?Xg(t):(e&Ht)!==zn&&Gp(t),(e&Ya)!==zn&&ll(!0),wo(t,n,o),(e&Ya)!==zn&&ll(!1),(e&rn)!==zn?Jg():(e&Ht)!==zn&&Kp())}u=u.next}while(u!==i)}}function Lr(e,t){var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var r=a.next,i=r;do{if((i.tag&e)===e){(e&rn)!==zn?Kg(t):(e&Ht)!==zn&&Zg(t);var u=i.create;(e&Ya)!==zn&&ll(!0),i.destroy=u(),(e&Ya)!==zn&&ll(!1),(e&rn)!==zn?kg():(e&Ht)!==zn&&Wg();{var o=i.destroy;if(o!==void 0&&typeof o!="function"){var c=void 0;(i.tag&Ht)!==J?c="useLayoutEffect":(i.tag&Ya)!==J?c="useInsertionEffect":c="useEffect";var f=void 0;o===null?f=" You returned null. If your effect does not require clean up, return undefined (or nothing).":typeof o.then=="function"?f=`

It looks like you wrote `+c+`(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

`+c+`(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching`:f=" You returned: "+o,y("%s must not return anything besides a function, which is used for clean-up.%s",c,f)}}}i=i.next}while(i!==r)}}function aE(e,t){if((t.flags&he)!==J)switch(t.tag){case xt:{var n=t.stateNode.passiveEffectDuration,a=t.memoizedProps,r=a.id,i=a.onPostCommit,u=um(),o=t.alternate===null?"mount":"update";im()&&(o="nested-update"),typeof i=="function"&&i(r,o,n,u);var c=t.return;e:for(;c!==null;){switch(c.tag){case te:var f=c.stateNode;f.passiveEffectDuration+=n;break e;case xt:var h=c.stateNode;h.passiveEffectDuration+=n;break e}c=c.return}break}}}function rE(e,t,n,a){if((n.flags&mt)!==J)switch(n.tag){case Te:case je:case Fe:{if(!ln)if(n.mode&$e)try{Ga(),Lr(Ht|zt,n)}finally{Qa(n)}else Lr(Ht|zt,n);break}case se:{var r=n.stateNode;if(n.flags&he&&!ln)if(t===null)if(n.type===n.elementType&&!ai&&(r.props!==n.memoizedProps&&y("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",$(n)||"instance"),r.state!==n.memoizedState&&y("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",$(n)||"instance")),n.mode&$e)try{Ga(),r.componentDidMount()}finally{Qa(n)}else r.componentDidMount();else{var i=n.elementType===n.type?t.memoizedProps:ba(n.type,t.memoizedProps),u=t.memoizedState;if(n.type===n.elementType&&!ai&&(r.props!==n.memoizedProps&&y("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",$(n)||"instance"),r.state!==n.memoizedState&&y("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",$(n)||"instance")),n.mode&$e)try{Ga(),r.componentDidUpdate(i,u,r.__reactInternalSnapshotBeforeUpdate)}finally{Qa(n)}else r.componentDidUpdate(i,u,r.__reactInternalSnapshotBeforeUpdate)}var o=n.updateQueue;o!==null&&(n.type===n.elementType&&!ai&&(r.props!==n.memoizedProps&&y("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",$(n)||"instance"),r.state!==n.memoizedState&&y("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",$(n)||"instance")),bv(n,o,r));break}case te:{var c=n.updateQueue;if(c!==null){var f=null;if(n.child!==null)switch(n.child.tag){case ne:f=fi(n.child.stateNode);break;case se:f=n.child.stateNode;break}bv(n,c,f)}break}case ne:{var h=n.stateNode;if(t===null&&n.flags&he){var b=n.type,T=n.memoizedProps;mi(h,b,T,n)}break}case be:break;case Ae:break;case xt:{{var N=n.memoizedProps,A=N.onCommit,M=N.onRender,ee=n.stateNode.effectDuration,me=um(),re=t===null?"mount":"update";im()&&(re="nested-update"),typeof M=="function"&&M(n.memoizedProps.id,re,n.actualDuration,n.treeBaseDuration,n.actualStartTime,me);{typeof A=="function"&&A(n.memoizedProps.id,re,ee,me),mR(n);var Je=n.return;e:for(;Je!==null;){switch(Je.tag){case te:var Ye=Je.stateNode;Ye.effectDuration+=ee;break e;case xt:var R=Je.stateNode;R.effectDuration+=ee;break e}Je=Je.return}}}break}case Pe:{pE(e,n);break}case Et:case Wt:case bn:case ut:case It:case In:break;default:throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.")}ln||n.flags&ta&&qm(n)}function iE(e){switch(e.tag){case Te:case je:case Fe:{if(e.mode&$e)try{Ga(),Vm(e,e.return)}finally{Qa(e)}else Vm(e,e.return);break}case se:{var t=e.stateNode;typeof t.componentDidMount=="function"&&Ib(e,e.return,t),wm(e,e.return);break}case ne:{wm(e,e.return);break}}}function uE(e,t){var n=null;if(Gt)for(var a=e;;){if(a.tag===ne){if(n===null){n=a;try{var r=a.stateNode;t?Hc(r):m(a.stateNode,a.memoizedProps)}catch(u){tt(e,e.return,u)}}}else if(a.tag===be){if(n===null)try{var i=a.stateNode;t?l(i):C(i,a.memoizedProps)}catch(u){tt(e,e.return,u)}}else if(!((a.tag===ut||a.tag===It)&&a.memoizedState!==null&&a!==e)){if(a.child!==null){a.child.return=a,a=a.child;continue}}if(a===e)return;for(;a.sibling===null;){if(a.return===null||a.return===e)return;n===a&&(n=null),a=a.return}n===a&&(n=null),a.sibling.return=a.return,a=a.sibling}}function qm(e){var t=e.ref;if(t!==null){var n=e.stateNode,a;switch(e.tag){case ne:a=fi(n);break;default:a=n}if(typeof t=="function"){var r;if(e.mode&$e)try{Ga(),r=t(a)}finally{Qa(e)}else r=t(a);typeof r=="function"&&y("Unexpected return value from a callback ref in %s. A callback ref should not return a function.",$(e))}else t.hasOwnProperty("current")||y("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().",$(e)),t.current=a}}function lE(e){var t=e.alternate;t!==null&&(t.return=null),e.return=null}function Qm(e){var t=e.alternate;t!==null&&(e.alternate=null,Qm(t));{if(e.child=null,e.deletions=null,e.sibling=null,e.tag===ne){var n=e.stateNode;n!==null&&El(n)}e.stateNode=null,e._debugOwner=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}}function oE(e){if(pi){var t=e.stateNode,n=t.containerInfo,a=de(n);He(n,a)}}function cE(e){for(var t=e.return;t!==null;){if(Gm(t))return t;t=t.return}throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.")}function Gm(e){return e.tag===ne||e.tag===te||e.tag===Ae}function Km(e){var t=e;e:for(;;){for(;t.sibling===null;){if(t.return===null||Gm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==ne&&t.tag!==be&&t.tag!==Wn;){if(t.flags&Ke||t.child===null||t.tag===Ae)continue e;t.child.return=t,t=t.child}if(!(t.flags&Ke))return t.stateNode}}function sE(e){if(Gt){var t=cE(e);switch(t.tag){case ne:{var n=t.stateNode;t.flags&da&&(Dl(n),t.flags&=~da);var a=Km(e);td(e,a,n);break}case te:case Ae:{var r=t.stateNode.containerInfo,i=Km(e);ed(e,i,r);break}default:throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.")}}}function ed(e,t,n){var a=e.tag,r=a===ne||a===be;if(r){var i=e.stateNode;t?cu(n,i,t):xl(n,i)}else if(a!==Ae){var u=e.child;if(u!==null){ed(u,t,n);for(var o=u.sibling;o!==null;)ed(o,t,n),o=o.sibling}}}function td(e,t,n){var a=e.tag,r=a===ne||a===be;if(r){var i=e.stateNode;t?ou(n,i,t):Er(n,i)}else if(a!==Ae){var u=e.child;if(u!==null){td(u,t,n);for(var o=u.sibling;o!==null;)td(o,t,n),o=o.sibling}}}var on=null,xa=!1;function fE(e,t,n){if(Gt){var a=t;e:for(;a!==null;){switch(a.tag){case ne:{on=a.stateNode,xa=!1;break e}case te:{on=a.stateNode.containerInfo,xa=!0;break e}case Ae:{on=a.stateNode.containerInfo,xa=!0;break e}}a=a.return}if(on===null)throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");nd(e,t,n),on=null,xa=!1}else nd(e,t,n);lE(n)}function ka(e,t,n){for(var a=n.child;a!==null;)nd(e,t,a),a=a.sibling}function nd(e,t,n){switch(Pg(n),n.tag){case ne:ln||Yi(n,t);case be:{if(Gt){var a=on,r=xa;on=null,ka(e,t,n),on=a,xa=r,on!==null&&(xa?zc(on,n.stateNode):Ac(on,n.stateNode))}else ka(e,t,n);return}case Wn:{Gt&&on!==null&&(xa?Qy(on,n.stateNode):qy(on,n.stateNode));return}case Ae:{if(Gt){var i=on,u=xa;on=n.stateNode.containerInfo,xa=!0,ka(e,t,n),on=i,xa=u}else oE(n),ka(e,t,n);return}case Te:case je:case dt:case Fe:{if(!ln){var o=n.updateQueue;if(o!==null){var c=o.lastEffect;if(c!==null){var f=c.next,h=f;do{var b=h,T=b.destroy,N=b.tag;T!==void 0&&((N&Ya)!==zn?wo(n,t,T):(N&Ht)!==zn&&(Gp(n),n.mode&$e?(Ga(),wo(n,t,T),Qa(n)):wo(n,t,T),Kp())),h=h.next}while(h!==f)}}}ka(e,t,n);return}case se:{if(!ln){Yi(n,t);var A=n.stateNode;typeof A.componentWillUnmount=="function"&&$f(n,t,A)}ka(e,t,n);return}case bn:{ka(e,t,n);return}case ut:{if(n.mode&qe){var M=ln;ln=M||n.memoizedState!==null,ka(e,t,n),ln=M}else ka(e,t,n);break}default:{ka(e,t,n);return}}}function dE(e){var t=e.memoizedState}function pE(e,t){if(At){var n=t.memoizedState;if(n===null){var a=t.alternate;if(a!==null){var r=a.memoizedState;if(r!==null){var i=r.dehydrated;i!==null&&Py(i)}}}}}function km(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Jb),t.forEach(function(a){var r=RR.bind(null,e,a);if(!n.has(a)){if(n.add(a),ya)if(Vi!==null&&wi!==null)ul(wi,Vi);else throw Error("Expected finished root and lanes to be set. This is a bug in React.");a.then(r,r)}})}}function vE(e,t,n){Vi=n,wi=e,Ct(t),Xm(t,e),Ct(t),Vi=null,wi=null}function _a(e,t,n){var a=t.deletions;if(a!==null)for(var r=0;r<a.length;r++){var i=a[r];try{fE(e,t,i)}catch(c){tt(i,t,c)}}var u=US();if(t.subtreeFlags&xe)for(var o=t.child;o!==null;)Ct(o),Xm(o,e),o=o.sibling;Ct(u)}function Xm(e,t,n){var a=e.alternate,r=e.flags;switch(e.tag){case Te:case je:case dt:case Fe:{if(_a(t,e),Xa(e),r&he){try{Ta(Ya|zt,e,e.return),Lr(Ya|zt,e)}catch(oe){tt(e,e.return,oe)}if(e.mode&$e){try{Ga(),Ta(Ht|zt,e,e.return)}catch(oe){tt(e,e.return,oe)}Qa(e)}else try{Ta(Ht|zt,e,e.return)}catch(oe){tt(e,e.return,oe)}}return}case se:{_a(t,e),Xa(e),r&ta&&a!==null&&Yi(a,a.return);return}case ne:{if(_a(t,e),Xa(e),r&ta&&a!==null&&Yi(a,a.return),Gt){if(e.flags&da){var i=e.stateNode;try{Dl(i)}catch(oe){tt(e,e.return,oe)}}if(r&he){var u=e.stateNode;if(u!=null){var o=e.memoizedProps,c=a!==null?a.memoizedProps:o,f=e.type,h=e.updateQueue;if(e.updateQueue=null,h!==null)try{lu(u,h,f,c,o,e)}catch(oe){tt(e,e.return,oe)}}}}return}case be:{if(_a(t,e),Xa(e),r&he&&Gt){if(e.stateNode===null)throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");var b=e.stateNode,T=e.memoizedProps,N=a!==null?a.memoizedProps:T;try{_l(b,N,T)}catch(oe){tt(e,e.return,oe)}}return}case te:{if(_a(t,e),Xa(e),r&he){if(Gt&&At&&a!==null){var A=a.memoizedState;if(A.isDehydrated)try{Yy(t.containerInfo)}catch(oe){tt(e,e.return,oe)}}if(pi){var M=t.containerInfo,ee=t.pendingChildren;try{He(M,ee)}catch(oe){tt(e,e.return,oe)}}}return}case Ae:{if(_a(t,e),Xa(e),r&he&&pi){var me=e.stateNode,re=me.containerInfo,Je=me.pendingChildren;try{He(re,Je)}catch(oe){tt(e,e.return,oe)}}return}case Pe:{_a(t,e),Xa(e);var Ye=e.child;if(Ye.flags&pa){var R=Ye.stateNode,D=Ye.memoizedState,E=D!==null;if(R.isHidden=E,E){var F=Ye.alternate!==null&&Ye.alternate.memoizedState!==null;F||lR()}}if(r&he){try{dE(e)}catch(oe){tt(e,e.return,oe)}km(e)}return}case ut:{var I=a!==null&&a.memoizedState!==null;if(e.mode&qe){var k=ln;ln=k||I,_a(t,e),ln=k}else _a(t,e);if(Xa(e),r&pa){var Ve=e.stateNode,ge=e.memoizedState,Ge=ge!==null,ze=e;if(Ve.isHidden=Ge,Ge&&!I&&(ze.mode&qe)!==ve){Z=ze;for(var rt=ze.child;rt!==null;)Z=rt,hE(rt),rt=rt.sibling}Gt&&uE(ze,Ge)}return}case Et:{_a(t,e),Xa(e),r&he&&km(e);return}case bn:return;default:{_a(t,e),Xa(e);return}}}function Xa(e){var t=e.flags;if(t&Ke){try{sE(e)}catch(n){tt(e,e.return,n)}e.flags&=~Ke}t&An&&(e.flags&=~An)}function mE(e,t,n){Vi=n,wi=t,Z=e,Jm(e,t,n),Vi=null,wi=null}function Jm(e,t,n){for(var a=(e.mode&qe)!==ve;Z!==null;){var r=Z,i=r.child;if(r.tag===ut&&a){var u=r.memoizedState!==null,o=u||Vo;if(o){ad(e,t,n);continue}else{var c=r.alternate,f=c!==null&&c.memoizedState!==null,h=f||ln,b=Vo,T=ln;Vo=o,ln=h,ln&&!T&&(Z=r,yE(r));for(var N=i;N!==null;)Z=N,Jm(N,t,n),N=N.sibling;Z=r,Vo=b,ln=T,ad(e,t,n);continue}}(r.subtreeFlags&mt)!==J&&i!==null?(i.return=r,Z=i):ad(e,t,n)}}function ad(e,t,n){for(;Z!==null;){var a=Z;if((a.flags&mt)!==J){var r=a.alternate;Ct(a);try{rE(t,r,a,n)}catch(u){tt(a,a.return,u)}Rn()}if(a===e){Z=null;return}var i=a.sibling;if(i!==null){i.return=a.return,Z=i;return}Z=a.return}}function hE(e){for(;Z!==null;){var t=Z,n=t.child;switch(t.tag){case Te:case je:case dt:case Fe:{if(t.mode&$e)try{Ga(),Ta(Ht,t,t.return)}finally{Qa(t)}else Ta(Ht,t,t.return);break}case se:{Yi(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&$f(t,t.return,a);break}case ne:{Yi(t,t.return);break}case ut:{var r=t.memoizedState!==null;if(r){Zm(e);continue}break}}n!==null?(n.return=t,Z=n):Zm(e)}}function Zm(e){for(;Z!==null;){var t=Z;if(t===e){Z=null;return}var n=t.sibling;if(n!==null){n.return=t.return,Z=n;return}Z=t.return}}function yE(e){for(;Z!==null;){var t=Z,n=t.child;if(t.tag===ut){var a=t.memoizedState!==null;if(a){Wm(e);continue}}n!==null?(n.return=t,Z=n):Wm(e)}}function Wm(e){for(;Z!==null;){var t=Z;Ct(t);try{iE(t)}catch(a){tt(t,t.return,a)}if(Rn(),t===e){Z=null;return}var n=t.sibling;if(n!==null){n.return=t.return,Z=n;return}Z=t.return}}function gE(e,t,n,a){Z=t,SE(t,e,n,a)}function SE(e,t,n,a){for(;Z!==null;){var r=Z,i=r.child;(r.subtreeFlags&We)!==J&&i!==null?(i.return=r,Z=i):bE(e,t,n,a)}}function bE(e,t,n,a){for(;Z!==null;){var r=Z;if((r.flags&qt)!==J){Ct(r);try{EE(t,r,n,a)}catch(u){tt(r,r.return,u)}Rn()}if(r===e){Z=null;return}var i=r.sibling;if(i!==null){i.return=r.return,Z=i;return}Z=r.return}}function EE(e,t,n,a){switch(t.tag){case Te:case je:case Fe:{if(t.mode&$e){Af();try{Lr(rn|zt,t)}finally{Lf(t)}}else Lr(rn|zt,t);break}}}function RE(e){Z=e,CE()}function CE(){for(;Z!==null;){var e=Z,t=e.child;if((Z.flags&$t)!==J){var n=e.deletions;if(n!==null){for(var a=0;a<n.length;a++){var r=n[a];Z=r,_E(r,e)}{var i=e.alternate;if(i!==null){var u=i.child;if(u!==null){i.child=null;do{var o=u.sibling;u.sibling=null,u=o}while(u!==null)}}}Z=e}}(e.subtreeFlags&We)!==J&&t!==null?(t.return=e,Z=t):TE()}}function TE(){for(;Z!==null;){var e=Z;(e.flags&qt)!==J&&(Ct(e),xE(e),Rn());var t=e.sibling;if(t!==null){t.return=e.return,Z=t;return}Z=e.return}}function xE(e){switch(e.tag){case Te:case je:case Fe:{e.mode&$e?(Af(),Ta(rn|zt,e,e.return),Lf(e)):Ta(rn|zt,e,e.return);break}}}function _E(e,t){for(;Z!==null;){var n=Z;Ct(n),OE(n,t),Rn();var a=n.child;a!==null?(a.return=n,Z=a):DE(e)}}function DE(e){for(;Z!==null;){var t=Z,n=t.sibling,a=t.return;if(Qm(t),t===e){Z=null;return}if(n!==null){n.return=a,Z=n;return}Z=a}}function OE(e,t){switch(e.tag){case Te:case je:case Fe:{e.mode&$e?(Af(),Ta(rn,e,t),Lf(e)):Ta(rn,e,t);break}}}function NE(e){switch(e.tag){case Te:case je:case Fe:{try{Lr(Ht|zt,e)}catch(n){tt(e,e.return,n)}break}case se:{var t=e.stateNode;try{t.componentDidMount()}catch(n){tt(e,e.return,n)}break}}}function UE(e){switch(e.tag){case Te:case je:case Fe:{try{Lr(rn|zt,e)}catch(t){tt(e,e.return,t)}break}}}function ME(e){switch(e.tag){case Te:case je:case Fe:{try{Ta(Ht|zt,e,e.return)}catch(n){tt(e,e.return,n)}break}case se:{var t=e.stateNode;typeof t.componentWillUnmount=="function"&&$f(e,e.return,t);break}}}function LE(e){switch(e.tag){case Te:case je:case Fe:try{Ta(rn|zt,e,e.return)}catch(t){tt(e,e.return,t)}}}var Yo=0,Po=1,qo=2,Qo=3,Go=4;if(typeof Symbol=="function"&&Symbol.for){var Zu=Symbol.for;Yo=Zu("selector.component"),Po=Zu("selector.has_pseudo_class"),qo=Zu("selector.role"),Qo=Zu("selector.test_id"),Go=Zu("selector.text")}function AE(e){return{$$typeof:Yo,value:e}}function zE(e){return{$$typeof:Po,value:e}}function HE(e){return{$$typeof:qo,value:e}}function jE(e){return{$$typeof:Go,value:e}}function FE(e){return{$$typeof:Qo,value:e}}function rd(e){var t=uu(e);if(t!=null){if(typeof t.memoizedProps["data-testname"]!="string")throw new Error("Invalid host root specified. Should be either a React container or a node with a testname attribute.");return t}else{var n=Cl(e);if(n===null)throw new Error("Could not find React container within specified host subtree.");return n.stateNode.current}}function id(e,t){switch(t.$$typeof){case Yo:if(e.type===t.value)return!0;break;case Po:return BE(e,t.value);case qo:if(e.tag===ne){var n=e.stateNode;if(Tl(n,t.value))return!0}break;case Go:if(e.tag===ne||e.tag===be){var a=Mc(e);if(a!==null&&a.indexOf(t.value)>=0)return!0}break;case Qo:if(e.tag===ne){var r=e.memoizedProps["data-testname"];if(typeof r=="string"&&r.toLowerCase()===t.value.toLowerCase())return!0}break;default:throw new Error("Invalid selector type specified.")}return!1}function ud(e){switch(e.$$typeof){case Yo:var t=ae(e.value)||"Unknown";return"<"+t+">";case Po:return":has("+(ud(e)||"")+")";case qo:return'[role="'+e.value+'"]';case Go:return'"'+e.value+'"';case Qo:return'[data-testname="'+e.value+'"]';default:throw new Error("Invalid selector type specified.")}}function Im(e,t){for(var n=[],a=[e,0],r=0;r<a.length;){var i=a[r++],u=a[r++],o=t[u];if(!(i.tag===ne&&qr(i))){for(;o!=null&&id(i,o);)u++,o=t[u];if(u===t.length)n.push(i);else for(var c=i.child;c!==null;)a.push(c,u),c=c.sibling}}return n}function BE(e,t){for(var n=[e,0],a=0;a<n.length;){var r=n[a++],i=n[a++],u=t[i];if(!(r.tag===ne&&qr(r))){for(;u!=null&&id(r,u);)i++,u=t[i];if(i===t.length)return!0;for(var o=r.child;o!==null;)n.push(o,i),o=o.sibling}}return!1}function Ko(e,t){if(!nr)throw new Error("Test selector API is not supported by this renderer.");for(var n=rd(e),a=Im(n,t),r=[],i=Array.from(a),u=0;u<i.length;){var o=i[u++];if(o.tag===ne){if(qr(o))continue;r.push(o.stateNode)}else for(var c=o.child;c!==null;)i.push(c),c=c.sibling}return r}function VE(e,t){if(!nr)throw new Error("Test selector API is not supported by this renderer.");for(var n=rd(e),a=0,r=[],i=[n,0],u=0;u<i.length;){var o=i[u++],c=i[u++],f=t[c];if(!(o.tag===ne&&qr(o))&&(id(o,f)&&(r.push(ud(f)),c++,c>a&&(a=c)),c<t.length))for(var h=o.child;h!==null;)i.push(h,c),h=h.sibling}if(a<t.length){for(var b=[],T=a;T<t.length;T++)b.push(ud(t[T]));return`findAllNodes was able to match part of the selector:
`+("  "+r.join(" > ")+`

`)+`No matching component was found for:
`+("  "+b.join(" > "))}return null}function wE(e,t){if(!nr)throw new Error("Test selector API is not supported by this renderer.");for(var n=Ko(e,t),a=[],r=0;r<n.length;r++)a.push(Uc(n[r]));for(var i=a.length-1;i>0;i--)for(var u=a[i],o=u.x,c=o+u.width,f=u.y,h=f+u.height,b=i-1;b>=0;b--)if(i!==b){var T=a[b],N=T.x,A=N+T.width,M=T.y,ee=M+T.height;if(o>=N&&f>=M&&c<=A&&h<=ee){a.splice(i,1);break}else if(o===N&&u.width===T.width&&!(ee<f)&&!(M>h)){M>f&&(T.height+=M-f,T.y=f),ee<h&&(T.height=h-M),a.splice(i,1);break}else if(f===M&&u.height===T.height&&!(A<o)&&!(N>c)){N>o&&(T.width+=N-o,T.x=o),A<c&&(T.width=c-N),a.splice(i,1);break}}return a}function YE(e,t){if(!nr)throw new Error("Test selector API is not supported by this renderer.");for(var n=rd(e),a=Im(n,t),r=Array.from(a),i=0;i<r.length;){var u=r[i++];if(!qr(u)){if(u.tag===ne){var o=u.stateNode;if(vi(o))return!0}for(var c=u.child;c!==null;)r.push(c),c=c.sibling}}return!1}var ko=[];function PE(){nr&&ko.forEach(function(e){return e()})}function qE(e,t,n,a){if(!nr)throw new Error("Test selector API is not supported by this renderer.");var r=Ko(e,t),i=Lc(r,n,a),u=i.disconnect,o=i.observe,c=i.unobserve,f=function(){var h=Ko(e,t);r.forEach(function(b){h.indexOf(b)<0&&c(b)}),h.forEach(function(b){r.indexOf(b)<0&&o(b)})};return ko.push(f),{disconnect:function(){var h=ko.indexOf(f);h>=0&&ko.splice(h,1),u()}}}var QE=x.ReactCurrentActQueue;function GE(e){{var t=typeof IS_REACT_ACT_ENVIRONMENT!="undefined"?IS_REACT_ACT_ENVIRONMENT:void 0,n=typeof jest!="undefined";return Sl&&n&&t!==!1}}function $m(){{var e=typeof IS_REACT_ACT_ENVIRONMENT!="undefined"?IS_REACT_ACT_ENVIRONMENT:void 0;return!e&&QE.current!==null&&y("The current testing environment is not configured to support act(...)"),e}}var KE=Math.ceil,ld=x.ReactCurrentDispatcher,od=x.ReactCurrentOwner,ht=x.ReactCurrentBatchConfig,Da=x.ReactCurrentActQueue,Mt=0,cd=1,cn=2,la=4,fr=0,Wu=1,ri=2,Xo=3,Iu=4,eh=5,sd=6,Ue=Mt,xn=null,yt=null,Bt=z,Ja=z,fd=Tr(z),Vt=fr,$u=null,dd=z,Jo=z,el=z,Zo=z,tl=null,Hn=null,pd=0,th=500,nh=1/0,kE=500,dr=null;function Pi(){nh=Xt()+kE}function ah(){return nh}var Wo=!1,vd=null,qi=null,ii=!1,Ar=null,nl=z,md=[],hd=null,XE=50,al=0,yd=null,gd=!1,Io=!1,JE=50,Qi=0,$o=null,rl=st,ec=z,rh=!1;function tc(){return xn}function yn(){return(Ue&(cn|la))!==Mt?Xt():(rl!==st||(rl=Xt()),rl)}function zr(e){var t=e.mode;if((t&qe)===ve)return ye;if((Ue&cn)!==Mt&&Bt!==z)return yu(Bt);var n=_S()!==xS;if(n){if(ht.transition!==null){var a=ht.transition;a._updatedFibers||(a._updatedFibers=new Set),a._updatedFibers.add(e)}return ec===Kt&&(ec=Ap()),ec}var r=ha();if(r!==Kt)return r;var i=bl();return i}function ZE(e){var t=e.mode;return(t&qe)===ve?ye:xg()}function Lt(e,t,n,a){TR(),rh&&y("useInsertionEffect must not schedule updates."),gd&&(Io=!0),gu(e,n,a),(Ue&cn)!==z&&e===xn?DR(t):(ya&&jp(e,t,n),OR(t),e===xn&&((Ue&cn)===Mt&&(el=Oe(el,n)),Vt===Iu&&Hr(e,Bt)),jn(e,a),n===ye&&Ue===Mt&&(t.mode&qe)===ve&&!Da.isBatchingLegacy&&(Pi(),Zp()))}function WE(e,t,n){var a=e.current;a.lanes=t,gu(e,t,n),jn(e,n)}function IE(e){return(Ue&cn)!==Mt}function jn(e,t){var n=e.callbackNode;Sg(e,t);var a=wl(e,e===xn?Bt:z);if(a===z){n!==null&&Sh(n),e.callbackNode=null,e.callbackPriority=Kt;return}var r=Kr(a),i=e.callbackPriority;if(i===r&&!(Da.current!==null&&n!==Td)){n==null&&i!==ye&&y("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");return}n!=null&&Sh(n);var u;if(r===ye)e.tag===Si?(Da.isBatchingLegacy!==null&&(Da.didScheduleLegacyUpdate=!0),oS(lh.bind(null,e))):Jp(lh.bind(null,e)),Rl?Da.current!==null?Da.current.push(Va):Nc(function(){(Ue&(cn|la))===Mt&&Va()}):lc(ql,Va),u=null;else{var o;switch(wp(a)){case Fa:o=ql;break;case Su:o=Pp;break;case bu:o=Ti;break;case Ss:o=qp;break;default:o=Ti;break}u=lc(o,ih.bind(null,e))}e.callbackPriority=r,e.callbackNode=u}function ih(e,t){if(lb(),rl=st,ec=z,(Ue&(cn|la))!==Mt)throw new Error("Should not already be working.");var n=e.callbackNode,a=Za();if(a&&e.callbackNode!==n)return null;var r=wl(e,e===xn?Bt:z);if(r===z)return null;var i=!Yl(e,r)&&!Tg(e,r)&&!t,u=i?dR(e,r):rc(e,r);if(u!==fr){if(u===ri){var o=vs(e);o!==z&&(r=o,u=Sd(e,o))}if(u===Wu){var c=$u;throw ui(e,z),Hr(e,r),jn(e,Xt()),c}if(u===sd)Hr(e,r);else{var f=!Yl(e,r),h=e.current.alternate;if(f&&!eR(h)){if(u=rc(e,r),u===ri){var b=vs(e);b!==z&&(r=b,u=Sd(e,b))}if(u===Wu){var T=$u;throw ui(e,z),Hr(e,r),jn(e,Xt()),T}}e.finishedWork=h,e.finishedLanes=r,$E(e,u,r)}}return jn(e,Xt()),e.callbackNode===n?ih.bind(null,e):null}function Sd(e,t){var n=tl;if(Wp(e)){var a=ui(e,t);a.flags|=Ln,ug(e.containerInfo)}var r=rc(e,t);if(r!==ri){var i=Hn;Hn=n,i!==null&&uh(i)}return r}function uh(e){Hn===null?Hn=e:Hn.push.apply(Hn,e)}function $E(e,t,n){switch(t){case fr:case Wu:throw new Error("Root did not complete. This is a bug in React.");case ri:{li(e,Hn,dr);break}case Xo:{if(Hr(e,n),Mp(n)&&!bh()){var a=pd+th-Xt();if(a>10){var r=wl(e,z);if(r!==z)break;var i=e.suspendedLanes;if(!Ci(i,n)){var u=yn();Hp(e,i);break}e.timeoutHandle=gl(li.bind(null,e,Hn,dr),a);break}}li(e,Hn,dr);break}case Iu:{if(Hr(e,n),Cg(n))break;if(!bh()){var o=yg(e,n),c=o,f=Xt()-c,h=CR(f)-f;if(h>10){e.timeoutHandle=gl(li.bind(null,e,Hn,dr),h);break}}li(e,Hn,dr);break}case eh:{li(e,Hn,dr);break}default:throw new Error("Unknown root exit status.")}}function eR(e){for(var t=e;;){if(t.flags&tr){var n=t.updateQueue;if(n!==null){var a=n.stores;if(a!==null)for(var r=0;r<a.length;r++){var i=a[r],u=i.getSnapshot,o=i.value;try{if(!Gn(u(),o))return!1}catch(f){return!1}}}}var c=t.child;if(t.subtreeFlags&tr&&c!==null){c.return=t,t=c;continue}if(t===e)return!0;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}return!0}function Hr(e,t){t=Pl(t,Zo),t=Pl(t,el),Dg(e,t)}function lh(e){if(ob(),(Ue&(cn|la))!==Mt)throw new Error("Should not already be working.");Za();var t=wl(e,z);if(!Qn(t,ye))return jn(e,Xt()),null;var n=rc(e,t);if(e.tag!==Si&&n===ri){var a=vs(e);a!==z&&(t=a,n=Sd(e,a))}if(n===Wu){var r=$u;throw ui(e,z),Hr(e,t),jn(e,Xt()),r}if(n===sd)throw new Error("Root did not complete. This is a bug in React.");var i=e.current.alternate;return e.finishedWork=i,e.finishedLanes=t,li(e,Hn,dr),jn(e,Xt()),null}function tR(e,t){t!==z&&(gs(e,Oe(t,ye)),jn(e,Xt()),(Ue&(cn|la))===Mt&&(Pi(),Va()))}function nR(e){var t=ha(),n=ht.transition;try{return ht.transition=null,kt(bu),e()}finally{kt(t),ht.transition=n}}function aR(e,t){var n=Ue;Ue|=cd;try{return e(t)}finally{Ue=n,Ue===Mt&&!Da.isBatchingLegacy&&(Pi(),Zp())}}function rR(e,t,n,a,r){var i=ha(),u=ht.transition;try{return ht.transition=null,kt(Fa),e(t,n,a,r)}finally{kt(i),ht.transition=u,Ue===Mt&&Pi()}}function nc(e){Ar!==null&&Ar.tag===Si&&(Ue&(cn|la))===Mt&&Za();var t=Ue;Ue|=cd;var n=ht.transition,a=ha();try{return ht.transition=null,kt(Fa),e?e():void 0}finally{kt(a),ht.transition=n,Ue=t,(Ue&(cn|la))===Mt&&Va()}}function iR(){return(Ue&(cn|la))!==Mt}function uR(e){var t=Ue;Ue|=cd;var n=ht.transition,a=ha();try{ht.transition=null,kt(Fa),e()}finally{kt(a),ht.transition=n,Ue=t,Ue===Mt&&(Pi(),Va())}}function ac(e,t){en(fd,Ja,e),Ja=Oe(Ja,t),dd=Oe(dd,t)}function bd(e){Ja=fd.current,mn(fd,e)}function ui(e,t){e.finishedWork=null,e.finishedLanes=z;var n=e.timeoutHandle;if(n!==br&&(e.timeoutHandle=br,xc(n)),yt!==null)for(var a=yt.return;a!==null;){var r=a.alternate;Am(r,a),a=a.return}xn=e;var i=oi(e.current,null);return yt=i,Bt=Ja=dd=t,Vt=fr,$u=null,Jo=z,el=z,Zo=z,tl=null,Hn=null,jS(),Sa.discardPendingWarnings(),i}function oh(e,t){do{var n=yt;try{if($l(),jv(),Rn(),od.current=null,n===null||n.return===null){Vt=Wu,$u=t,yt=null;return}if(Ze&&n.mode&$e&&Lo(n,!0),Le)if(xi(),t!==null&&typeof t=="object"&&typeof t.then=="function"){var a=t;$g(n,a,Bt)}else Ig(n,t,Bt);pb(e,n.return,n,t,Bt),dh(n)}catch(r){t=r,yt===n&&n!==null?(n=n.return,yt=n):n=yt;continue}return}while(!0)}function ch(){var e=ld.current;return ld.current=Do,e===null?Do:e}function sh(e){ld.current=e}function lR(){pd=Xt()}function il(e){Jo=Oe(e,Jo)}function oR(){Vt===fr&&(Vt=Xo)}function Ed(){(Vt===fr||Vt===Xo||Vt===ri)&&(Vt=Iu),xn!==null&&(ms(Jo)||ms(el))&&Hr(xn,Bt)}function cR(e){Vt!==Iu&&(Vt=ri),tl===null?tl=[e]:tl.push(e)}function sR(){return Vt===fr}function rc(e,t){var n=Ue;Ue|=cn;var a=ch();if(xn!==e||Bt!==t){if(ya){var r=e.memoizedUpdaters;r.size>0&&(ul(e,Bt),r.clear()),Fp(e,t)}dr=Bp(),ui(e,t)}kp(t);do try{fR();break}catch(i){oh(e,i)}while(!0);if($l(),Ue=n,sh(a),yt!==null)throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");return Xp(),xn=null,Bt=z,Vt}function fR(){for(;yt!==null;)fh(yt)}function dR(e,t){var n=Ue;Ue|=cn;var a=ch();if(xn!==e||Bt!==t){if(ya){var r=e.memoizedUpdaters;r.size>0&&(ul(e,Bt),r.clear()),Fp(e,t)}dr=Bp(),Pi(),ui(e,t)}kp(t);do try{pR();break}catch(i){oh(e,i)}while(!0);return $l(),sh(a),Ue=n,yt!==null?(rS(),fr):(Xp(),xn=null,Bt=z,Vt)}function pR(){for(;yt!==null&&!zg();)fh(yt)}function fh(e){var t=e.alternate;Ct(e);var n;(e.mode&$e)!==ve?(Mf(e),n=Rd(t,e,Ja),Lo(e,!0)):n=Rd(t,e,Ja),Rn(),e.memoizedProps=e.pendingProps,n===null?dh(e):yt=n,od.current=null}function dh(e){var t=e;do{var n=t.alternate,a=t.return;if((t.flags&Ma)===J){Ct(t);var r=void 0;if((t.mode&$e)===ve?r=Lm(n,t,Ja):(Mf(t),r=Lm(n,t,Ja),Lo(t,!1)),Rn(),r!==null){yt=r;return}}else{var i=Gb(n,t);if(i!==null){i.flags&=$i,yt=i;return}if((t.mode&$e)!==ve){Lo(t,!1);for(var u=t.actualDuration,o=t.child;o!==null;)u+=o.actualDuration,o=o.sibling;t.actualDuration=u}if(a!==null)a.flags|=Ma,a.subtreeFlags=J,a.deletions=null;else{Vt=sd,yt=null;return}}var c=t.sibling;if(c!==null){yt=c;return}t=a,yt=t}while(t!==null);Vt===fr&&(Vt=eh)}function li(e,t,n){var a=ha(),r=ht.transition;try{ht.transition=null,kt(Fa),vR(e,t,n,a)}finally{ht.transition=r,kt(a)}return null}function vR(e,t,n,a){do Za();while(Ar!==null);if(xR(),(Ue&(cn|la))!==Mt)throw new Error("Should not already be working.");var r=e.finishedWork,i=e.finishedLanes;if(Gg(i),r===null)return Qp(),null;if(i===z&&y("root.finishedLanes should not be empty during a commit. This is a bug in React."),e.finishedWork=null,e.finishedLanes=z,r===e.current)throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");e.callbackNode=null,e.callbackPriority=Kt;var u=Oe(r.lanes,r.childLanes);Og(e,u),e===xn&&(xn=null,yt=null,Bt=z),((r.subtreeFlags&We)!==J||(r.flags&We)!==J)&&(ii||(ii=!0,hd=n,lc(Ti,function(){return Za(),null})));var o=(r.subtreeFlags&(Me|xe|mt|We))!==J,c=(r.flags&(Me|xe|mt|We))!==J;if(o||c){var f=ht.transition;ht.transition=null;var h=ha();kt(Fa);var b=Ue;Ue|=la,od.current=null;var T=$b(e,r);lm(),vE(e,r,i),nu(e.containerInfo),e.current=r,eS(i),mE(r,e,i),tS(),Hg(),Ue=b,kt(h),ht.transition=f}else e.current=r,lm();var N=ii;if(ii?(ii=!1,Ar=e,nl=i):(Qi=0,$o=null),u=e.pendingLanes,u===z&&(qi=null),N||hh(e.current,!1),wg(r.stateNode,a),ya&&e.memoizedUpdaters.clear(),PE(),jn(e,Xt()),t!==null)for(var A=e.onRecoverableError,M=0;M<t.length;M++){var ee=t[M],me=ee.stack,re=ee.digest;A(ee.value,{componentStack:me,digest:re})}if(Wo){Wo=!1;var Je=vd;throw vd=null,Je}return Qn(nl,ye)&&e.tag!==Si&&Za(),u=e.pendingLanes,Qn(u,ye)?(ub(),e===yd?al++:(al=0,yd=e)):al=0,Va(),Qp(),null}function Za(){if(Ar!==null){var e=wp(nl),t=Lg(bu,e),n=ht.transition,a=ha();try{return ht.transition=null,kt(t),hR()}finally{kt(a),ht.transition=n}}return!1}function mR(e){md.push(e),ii||(ii=!0,lc(Ti,function(){return Za(),null}))}function hR(){if(Ar===null)return!1;var e=hd;hd=null;var t=Ar,n=nl;if(Ar=null,nl=z,(Ue&(cn|la))!==Mt)throw new Error("Cannot flush passive effects while already rendering.");gd=!0,Io=!1,nS(n);var a=Ue;Ue|=la,RE(t.current),gE(t,t.current,n,e);{var r=md;md=[];for(var i=0;i<r.length;i++){var u=r[i];aE(t,u)}}aS(),hh(t.current,!0),Ue=a,Va(),Io?t===$o?Qi++:(Qi=0,$o=t):Qi=0,gd=!1,Io=!1,Yg(t);{var o=t.current.stateNode;o.effectDuration=0,o.passiveEffectDuration=0}return!0}function ph(e){return qi!==null&&qi.has(e)}function yR(e){qi===null?qi=new Set([e]):qi.add(e)}function gR(e){Wo||(Wo=!0,vd=e)}var SR=gR;function vh(e,t,n){var a=ni(n,t),r=cm(e,a,ye),i=Dr(e,r,ye),u=yn();i!==null&&(gu(i,ye,u),jn(i,u))}function tt(e,t,n){if(Zb(n),ll(!1),e.tag===te){vh(e,e,n);return}var a=null;for(a=t;a!==null;){if(a.tag===te){vh(a,e,n);return}else if(a.tag===se){var r=a.type,i=a.stateNode;if(typeof r.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&!ph(i)){var u=ni(n,e),o=Ff(a,u,ye),c=Dr(a,o,ye),f=yn();c!==null&&(gu(c,ye,f),jn(c,f));return}}a=a.return}y(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`,n)}function bR(e,t,n){var a=e.pingCache;a!==null&&a.delete(t);var r=yn();Hp(e,n),NR(e),xn===e&&Ci(Bt,n)&&(Vt===Iu||Vt===Xo&&Mp(Bt)&&Xt()-pd<th?ui(e,z):Zo=Oe(Zo,n)),jn(e,r)}function mh(e,t){t===Kt&&(t=ZE(e));var n=yn(),a=Cn(e,t);a!==null&&(gu(a,t,n),jn(a,n))}function ER(e){var t=e.memoizedState,n=Kt;t!==null&&(n=t.retryLane),mh(e,n)}function RR(e,t){var n=Kt,a;switch(e.tag){case Pe:a=e.stateNode;var r=e.memoizedState;r!==null&&(n=r.retryLane);break;case Et:a=e.stateNode;break;default:throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.")}a!==null&&a.delete(t),mh(e,n)}function CR(e){return e<120?120:e<480?480:e<1080?1080:e<1920?1920:e<3e3?3e3:e<4320?4320:KE(e/1960)*1960}function TR(){if(al>XE)throw al=0,yd=null,new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");Qi>JE&&(Qi=0,$o=null,y("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."))}function xR(){Sa.flushLegacyContextWarning(),Sa.flushPendingUnsafeLifecycleWarnings()}function hh(e,t){Ct(e),ic(e,De,ME),t&&ic(e,Qe,LE),ic(e,De,NE),t&&ic(e,Qe,UE),Rn()}function ic(e,t,n){for(var a=e,r=null;a!==null;){var i=a.subtreeFlags&t;a!==r&&a.child!==null&&i!==J?a=a.child:((a.flags&t)!==J&&n(a),a.sibling!==null?a=a.sibling:a=r=a.return)}}var uc=null;function yh(e){{if((Ue&cn)!==Mt||!(e.mode&qe))return;var t=e.tag;if(t!==ft&&t!==te&&t!==se&&t!==Te&&t!==je&&t!==dt&&t!==Fe)return;var n=$(e)||"ReactComponent";if(uc!==null){if(uc.has(n))return;uc.add(n)}else uc=new Set([n]);var a=Kn;try{Ct(e),y("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.")}finally{a?Ct(e):Rn()}}}var Rd;{var _R=null;Rd=function(e,t,n){var a=xh(_R,t);try{return Om(e,t,n)}catch(i){if(hS()||i!==null&&typeof i=="object"&&typeof i.then=="function")throw i;if($l(),jv(),Am(e,t),xh(t,a),t.mode&$e&&Mf(t),jm(null,Om,null,e,t,n),Xb()){var r=Fm();typeof r=="object"&&r!==null&&r._suppressLogging&&typeof i=="object"&&i!==null&&!i._suppressLogging&&(i._suppressLogging=!0)}throw i}}}var gh=!1,Cd;Cd=new Set;function DR(e){if(Cu&&!ab())switch(e.tag){case Te:case je:case Fe:{var t=yt&&$(yt)||"Unknown",n=t;if(!Cd.has(n)){Cd.add(n);var a=$(e)||"Unknown";y("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render",a,t,t)}break}case se:{gh||(y("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."),gh=!0);break}}}function ul(e,t){if(ya){var n=e.memoizedUpdaters;n.forEach(function(a){jp(e,a,t)})}}var Td={};function lc(e,t){{var n=Da.current;return n!==null?(n.push(t),Td):Yp(e,t)}}function Sh(e){if(e!==Td)return Ag(e)}function bh(){return Da.current!==null}function OR(e){{if(e.mode&qe){if(!$m())return}else if(!GE()||Ue!==Mt||e.tag!==Te&&e.tag!==je&&e.tag!==Fe)return;if(Da.current===null){var t=Kn;try{Ct(e),y(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`,$(e))}finally{t?Ct(e):Rn()}}}}function NR(e){e.tag!==Si&&$m()&&Da.current===null&&y(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`)}function ll(e){rh=e}var oa=null,Gi=null,UR=function(e){oa=e};function Ki(e){{if(oa===null)return e;var t=oa(e);return t===void 0?e:t.current}}function xd(e){return Ki(e)}function _d(e){{if(oa===null)return e;var t=oa(e);if(t===void 0){if(e!=null&&typeof e.render=="function"){var n=Ki(e.render);if(e.render!==n){var a={$$typeof:Rt,render:n};return e.displayName!==void 0&&(a.displayName=e.displayName),a}}return e}return t.current}}function Eh(e,t){{if(oa===null)return!1;var n=e.elementType,a=t.type,r=!1,i=typeof a=="object"&&a!==null?a.$$typeof:null;switch(e.tag){case se:{typeof a=="function"&&(r=!0);break}case Te:{(typeof a=="function"||i===lt)&&(r=!0);break}case je:{(i===Rt||i===lt)&&(r=!0);break}case dt:case Fe:{(i===ea||i===lt)&&(r=!0);break}default:return!1}if(r){var u=oa(n);if(u!==void 0&&u===oa(a))return!0}return!1}}function Rh(e){{if(oa===null||typeof WeakSet!="function")return;Gi===null&&(Gi=new WeakSet),Gi.add(e)}}var MR=function(e,t){{if(oa===null)return;var n=t.staleFamilies,a=t.updatedFamilies;Za(),nc(function(){Dd(e.current,a,n)})}},LR=function(e,t){{if(e.context!==Pn)return;Za(),nc(function(){Oh(t,e,null,null)})}};function Dd(e,t,n){{var a=e.alternate,r=e.child,i=e.sibling,u=e.tag,o=e.type,c=null;switch(u){case Te:case Fe:case se:c=o;break;case je:c=o.render;break}if(oa===null)throw new Error("Expected resolveFamily to be set during hot reload.");var f=!1,h=!1;if(c!==null){var b=oa(c);b!==void 0&&(n.has(b)?h=!0:t.has(b)&&(u===se?h=!0:f=!0))}if(Gi!==null&&(Gi.has(e)||a!==null&&Gi.has(a))&&(h=!0),h&&(e._debugNeedsRemount=!0),h||f){var T=Cn(e,ye);T!==null&&Lt(T,e,ye,st)}r!==null&&!h&&Dd(r,t,n),i!==null&&Dd(i,t,n)}}var AR=function(e,t){{var n=new Set,a=new Set(t.map(function(r){return r.current}));return Od(e.current,a,n),n}};function Od(e,t,n){{var a=e.child,r=e.sibling,i=e.tag,u=e.type,o=null;switch(i){case Te:case Fe:case se:o=u;break;case je:o=u.render;break}var c=!1;o!==null&&t.has(o)&&(c=!0),c?zR(e,n):a!==null&&Od(a,t,n),r!==null&&Od(r,t,n)}}function zR(e,t){{var n=HR(e,t);if(n)return;for(var a=e;;){switch(a.tag){case ne:t.add(a.stateNode);return;case Ae:t.add(a.stateNode.containerInfo);return;case te:t.add(a.stateNode.containerInfo);return}if(a.return===null)throw new Error("Expected to reach root first.");a=a.return}}}function HR(e,t){for(var n=e,a=!1;;){if(n.tag===ne)a=!0,t.add(n.stateNode);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)return a;for(;n.sibling===null;){if(n.return===null||n.return===e)return a;n=n.return}n.sibling.return=n.return,n=n.sibling}return!1}var Nd;{Nd=!1;try{var Ch=Object.preventExtensions({})}catch(e){Nd=!0}}function jR(e,t,n,a){this.tag=e,this.key=n,this.elementType=null,this.type=null,this.stateNode=null,this.return=null,this.child=null,this.sibling=null,this.index=0,this.ref=null,this.pendingProps=t,this.memoizedProps=null,this.updateQueue=null,this.memoizedState=null,this.dependencies=null,this.mode=a,this.flags=J,this.subtreeFlags=J,this.deletions=null,this.lanes=z,this.childLanes=z,this.alternate=null,this.actualDuration=Number.NaN,this.actualStartTime=Number.NaN,this.selfBaseDuration=Number.NaN,this.treeBaseDuration=Number.NaN,this.actualDuration=0,this.actualStartTime=-1,this.selfBaseDuration=0,this.treeBaseDuration=0,this._debugSource=null,this._debugOwner=null,this._debugNeedsRemount=!1,this._debugHookTypes=null,!Nd&&typeof Object.preventExtensions=="function"&&Object.preventExtensions(this)}var kn=function(e,t,n,a){return new jR(e,t,n,a)};function Ud(e){var t=e.prototype;return!!(t&&t.isReactComponent)}function FR(e){return typeof e=="function"&&!Ud(e)&&e.defaultProps===void 0}function BR(e){if(typeof e=="function")return Ud(e)?se:Te;if(e!=null){var t=e.$$typeof;if(t===Rt)return je;if(t===ea)return dt}return ft}function oi(e,t){var n=e.alternate;n===null?(n=kn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n._debugSource=e._debugSource,n._debugOwner=e._debugOwner,n._debugHookTypes=e._debugHookTypes,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=J,n.subtreeFlags=J,n.deletions=null,n.actualDuration=0,n.actualStartTime=-1),n.flags=e.flags&ke,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue;var a=e.dependencies;switch(n.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.selfBaseDuration=e.selfBaseDuration,n.treeBaseDuration=e.treeBaseDuration,n._debugNeedsRemount=e._debugNeedsRemount,n.tag){case ft:case Te:case Fe:n.type=Ki(e.type);break;case se:n.type=xd(e.type);break;case je:n.type=_d(e.type);break}return n}function VR(e,t){e.flags&=ke|Ke;var n=e.alternate;if(n===null)e.childLanes=z,e.lanes=t,e.child=null,e.subtreeFlags=J,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null,e.selfBaseDuration=0,e.treeBaseDuration=0;else{e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=J,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type;var a=n.dependencies;e.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},e.selfBaseDuration=n.selfBaseDuration,e.treeBaseDuration=n.treeBaseDuration}return e}function wR(e,t,n){var a;return e===Dp?(a=qe,t===!0&&(a|=Nt,a|=Ha)):a=ve,ya&&(a|=$e),kn(te,null,null,a)}function Md(e,t,n,a,r,i){var u=ft,o=e;if(typeof e=="function")Ud(e)?(u=se,o=xd(o)):o=Ki(o);else if(typeof e=="string")u=ne;else e:switch(e){case $n:return jr(n.children,r,i,t);case Fn:u=vt,r|=Nt,(r&qe)!==ve&&(r|=Ha);break;case wt:return YR(n,r,i,t);case Yt:return PR(n,r,i,t);case sa:return qR(n,r,i,t);case Na:return Th(n,r,i,t);case Ua:case Vn:case wn:case vr:case er:default:{if(typeof e=="object"&&e!==null)switch(e.$$typeof){case En:u=Tt;break e;case Bn:u=pe;break e;case Rt:u=je,o=_d(o);break e;case ea:u=dt;break e;case lt:u=_t,o=null;break e}var c="";{(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(c+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var f=a?$(a):null;f&&(c+=`

Check the render method of \``+f+"`.")}throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) "+("but got: "+(e==null?e:typeof e)+"."+c))}}var h=kn(u,n,t,r);return h.elementType=e,h.type=o,h.lanes=i,h._debugOwner=a,h}function Ld(e,t,n){var a=null;a=e._owner;var r=e.type,i=e.key,u=e.props,o=Md(r,i,u,a,t,n);return o._debugSource=e._source,o._debugOwner=e._owner,o}function jr(e,t,n,a){var r=kn(_e,e,a,t);return r.lanes=n,r}function YR(e,t,n,a){typeof e.id!="string"&&y('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.',typeof e.id);var r=kn(xt,e,a,t|$e);return r.elementType=wt,r.lanes=n,r.stateNode={effectDuration:0,passiveEffectDuration:0},r}function PR(e,t,n,a){var r=kn(Pe,e,a,t);return r.elementType=Yt,r.lanes=n,r}function qR(e,t,n,a){var r=kn(Et,e,a,t);return r.elementType=sa,r.lanes=n,r}function Th(e,t,n,a){var r=kn(ut,e,a,t);r.elementType=Na,r.lanes=n;var i={isHidden:!1};return r.stateNode=i,r}function Ad(e,t,n){var a=kn(be,e,null,t);return a.lanes=n,a}function QR(){var e=kn(ne,null,null,ve);return e.elementType="DELETED",e}function GR(e){var t=kn(Wn,null,null,ve);return t.stateNode=e,t}function zd(e,t,n){var a=e.children!==null?e.children:[],r=kn(Ae,a,e.key,t);return r.lanes=n,r.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},r}function xh(e,t){return e===null&&(e=kn(ft,null,null,ve)),e.tag=t.tag,e.key=t.key,e.elementType=t.elementType,e.type=t.type,e.stateNode=t.stateNode,e.return=t.return,e.child=t.child,e.sibling=t.sibling,e.index=t.index,e.ref=t.ref,e.pendingProps=t.pendingProps,e.memoizedProps=t.memoizedProps,e.updateQueue=t.updateQueue,e.memoizedState=t.memoizedState,e.dependencies=t.dependencies,e.mode=t.mode,e.flags=t.flags,e.subtreeFlags=t.subtreeFlags,e.deletions=t.deletions,e.lanes=t.lanes,e.childLanes=t.childLanes,e.alternate=t.alternate,e.actualDuration=t.actualDuration,e.actualStartTime=t.actualStartTime,e.selfBaseDuration=t.selfBaseDuration,e.treeBaseDuration=t.treeBaseDuration,e._debugSource=t._debugSource,e._debugOwner=t._debugOwner,e._debugNeedsRemount=t._debugNeedsRemount,e._debugHookTypes=t._debugHookTypes,e}function KR(e,t,n,a,r){this.tag=t,this.containerInfo=e,this.pendingChildren=null,this.current=null,this.pingCache=null,this.finishedWork=null,this.timeoutHandle=br,this.context=null,this.pendingContext=null,this.callbackNode=null,this.callbackPriority=Kt,this.eventTimes=ys(z),this.expirationTimes=ys(st),this.pendingLanes=z,this.suspendedLanes=z,this.pingedLanes=z,this.expiredLanes=z,this.mutableReadLanes=z,this.finishedLanes=z,this.entangledLanes=z,this.entanglements=ys(z),this.identifierPrefix=a,this.onRecoverableError=r,At&&(this.mutableSourceEagerHydrationData=null),this.effectDuration=0,this.passiveEffectDuration=0;{this.memoizedUpdaters=new Set;for(var i=this.pendingUpdatersLaneMap=[],u=0;u<Xc;u++)i.push(new Set)}switch(t){case Dp:this._debugRootType=n?"hydrateRoot()":"createRoot()";break;case Si:this._debugRootType=n?"hydrate()":"render()";break}}function _h(e,t,n,a,r,i,u,o,c,f){var h=new KR(e,t,n,o,c),b=wR(t,i);h.current=b,b.stateNode=h;{var T={element:a,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null};b.memoizedState=T}return Fs(b),h}var kR="18.2.0";function XR(e,t,n){var a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null;return LS(a),{$$typeof:Mn,key:a==null?null:""+a,children:e,containerInfo:t,implementation:n}}var Hd,jd;Hd=!1,jd={};function Dh(e){if(!e)return Pn;var t=X(e),n=dg(t);if(t.tag===se){var a=t.type;if(za(a))return xp(t,a,n)}return n}function JR(e){var t=X(e);if(t===void 0){if(typeof e.render=="function")throw new Error("Unable to find node on an unmounted component.");var n=Object.keys(e).join(",");throw new Error("Argument appears to not be a ReactComponent. Keys: "+n)}var a=gr(t);return a===null?null:a.stateNode}function ZR(e,t){{var n=X(e);if(n===void 0){if(typeof e.render=="function")throw new Error("Unable to find node on an unmounted component.");var a=Object.keys(e).join(",");throw new Error("Argument appears to not be a ReactComponent. Keys: "+a)}var r=gr(n);if(r===null)return null;if(r.mode&Nt){var i=$(n)||"Component";if(!jd[i]){jd[i]=!0;var u=Kn;try{Ct(r),n.mode&Nt?y("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node",t,t,i):y("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node",t,t,i)}finally{u?Ct(u):Rn()}}}return r.stateNode}}function WR(e,t,n,a,r,i,u,o){var c=!1,f=null;return _h(e,t,c,f,n,a,r,i,u)}function IR(e,t,n,a,r,i,u,o,c,f){var h=!0,b=_h(n,a,h,e,r,i,u,o,c);b.context=Dh(null);var T=b.current,N=yn(),A=zr(T),M=cr(N,A);return M.callback=t!=null?t:null,Dr(T,M,A),WE(b,A,N),b}function Oh(e,t,n,a){Vg(t,e);var r=t.current,i=yn(),u=zr(r);iS(u);var o=Dh(n);t.context===null?t.context=o:t.pendingContext=o,Cu&&Kn!==null&&!Hd&&(Hd=!0,y(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`,$(Kn)||"Unknown"));var c=cr(i,u);c.payload={element:e},a=a===void 0?null:a,a!==null&&(typeof a!="function"&&y("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.",a),c.callback=a);var f=Dr(r,c,u);return f!==null&&(Lt(f,r,u,i),ro(f,r,u)),u}function $R(e){var t=e.current;if(!t.child)return null;switch(t.child.tag){case ne:return fi(t.child.stateNode);default:return t.child.stateNode}}function eC(e){switch(e.tag){case te:{var t=e.stateNode;if(Wp(t)){var n=bg(t);tR(t,n)}break}case Pe:{nc(function(){var r=Cn(e,ye);if(r!==null){var i=yn();Lt(r,e,ye,i)}});var a=ye;oc(e,a);break}}}function Nh(e,t){var n=e.memoizedState;n!==null&&n.dehydrated!==null&&(n.retryLane=_g(n.retryLane,t))}function oc(e,t){Nh(e,t);var n=e.alternate;n&&Nh(n,t)}function tC(e){if(e.tag===Pe){var t=ye,n=Cn(e,t);if(n!==null){var a=yn();Lt(n,e,t,a)}oc(e,t)}}function nC(e){if(e.tag===Pe){var t=vu,n=Cn(e,t);if(n!==null){var a=yn();Lt(n,e,t,a)}oc(e,t)}}function aC(e){if(e.tag===Pe){var t=zr(e),n=Cn(e,t);if(n!==null){var a=yn();Lt(n,e,t,a)}oc(e,t)}}function rC(e){var t=ml(e);return t===null?null:t.stateNode}var Uh=function(e){return null};function Mh(e){return Uh(e)}var Lh=function(e){return!1};function Ah(e){return Lh(e)}var zh=null,Hh=null,jh=null,Fh=null,Bh=null,Vh=null,wh=null,Yh=null,Ph=null;{var qh=function(e,t,n){var a=t[n],r=vn(e)?e.slice():q({},e);return n+1===t.length?(vn(r)?r.splice(a,1):delete r[a],r):(r[a]=qh(e[a],t,n+1),r)},Qh=function(e,t){return qh(e,t,0)},Gh=function(e,t,n,a){var r=t[a],i=vn(e)?e.slice():q({},e);if(a+1===t.length){var u=n[a];i[u]=i[r],vn(i)?i.splice(r,1):delete i[r]}else i[r]=Gh(e[r],t,n,a+1);return i},Kh=function(e,t,n){if(t.length!==n.length){U("copyWithRename() expects paths of the same length");return}else for(var a=0;a<n.length-1;a++)if(t[a]!==n[a]){U("copyWithRename() expects paths to be the same except for the deepest key");return}return Gh(e,t,n,0)},kh=function(e,t,n,a){if(n>=t.length)return a;var r=t[n],i=vn(e)?e.slice():q({},e);return i[r]=kh(e[r],t,n+1,a),i},Xh=function(e,t,n){return kh(e,t,0,n)},Fd=function(e,t){for(var n=e.memoizedState;n!==null&&t>0;)n=n.next,t--;return n};zh=function(e,t,n,a){var r=Fd(e,t);if(r!==null){var i=Xh(r.memoizedState,n,a);r.memoizedState=i,r.baseState=i,e.memoizedProps=q({},e.memoizedProps);var u=Cn(e,ye);u!==null&&Lt(u,e,ye,st)}},Hh=function(e,t,n){var a=Fd(e,t);if(a!==null){var r=Qh(a.memoizedState,n);a.memoizedState=r,a.baseState=r,e.memoizedProps=q({},e.memoizedProps);var i=Cn(e,ye);i!==null&&Lt(i,e,ye,st)}},jh=function(e,t,n,a){var r=Fd(e,t);if(r!==null){var i=Kh(r.memoizedState,n,a);r.memoizedState=i,r.baseState=i,e.memoizedProps=q({},e.memoizedProps);var u=Cn(e,ye);u!==null&&Lt(u,e,ye,st)}},Fh=function(e,t,n){e.pendingProps=Xh(e.memoizedProps,t,n),e.alternate&&(e.alternate.pendingProps=e.pendingProps);var a=Cn(e,ye);a!==null&&Lt(a,e,ye,st)},Bh=function(e,t){e.pendingProps=Qh(e.memoizedProps,t),e.alternate&&(e.alternate.pendingProps=e.pendingProps);var n=Cn(e,ye);n!==null&&Lt(n,e,ye,st)},Vh=function(e,t,n){e.pendingProps=Kh(e.memoizedProps,t,n),e.alternate&&(e.alternate.pendingProps=e.pendingProps);var a=Cn(e,ye);a!==null&&Lt(a,e,ye,st)},wh=function(e){var t=Cn(e,ye);t!==null&&Lt(t,e,ye,st)},Yh=function(e){Uh=e},Ph=function(e){Lh=e}}function iC(e){var t=gr(e);return t===null?null:t.stateNode}function uC(e){return null}function lC(){return Kn}function oC(e){var t=e.findFiberByHostInstance,n=x.ReactCurrentDispatcher;return Bg({bundleType:e.bundleType,version:e.version,rendererPackageName:e.rendererPackageName,rendererConfig:e.rendererConfig,overrideHookState:zh,overrideHookStateDeletePath:Hh,overrideHookStateRenamePath:jh,overrideProps:Fh,overridePropsDeletePath:Bh,overridePropsRenamePath:Vh,setErrorHandler:Yh,setSuspenseHandler:Ph,scheduleUpdate:wh,currentDispatcherRef:n,findHostInstanceByFiber:iC,findFiberByHostInstance:t||uC,findHostInstancesForRefresh:AR,scheduleRefresh:MR,scheduleRoot:LR,setRefreshHandler:UR,getCurrentFiber:lC,reconcilerVersion:kR})}return v.attemptContinuousHydration=nC,v.attemptDiscreteHydration=tC,v.attemptHydrationAtCurrentPriority=aC,v.attemptSynchronousHydration=eC,v.batchedUpdates=aR,v.createComponentSelector=AE,v.createContainer=WR,v.createHasPseudoClassSelector=zE,v.createHydrationContainer=IR,v.createPortal=XR,v.createRoleSelector=HE,v.createTestNameSelector=FE,v.createTextSelector=jE,v.deferredUpdates=nR,v.discreteUpdates=rR,v.findAllNodes=Ko,v.findBoundingRects=wE,v.findHostInstance=JR,v.findHostInstanceWithNoPortals=rC,v.findHostInstanceWithWarning=ZR,v.flushControlled=uR,v.flushPassiveEffects=Za,v.flushSync=nc,v.focusWithin=YE,v.getCurrentUpdatePriority=ha,v.getFindAllNodesFailureDescription=VE,v.getPublicRootInstance=$R,v.injectIntoDevTools=oC,v.isAlreadyRendering=iR,v.observeVisibleRects=qE,v.registerMutableSourceForHydration=WS,v.runWithPriority=Ug,v.shouldError=Mh,v.shouldSuspend=Ah,v.updateContainer=Oh,v}});var vy=Fr((zT,py)=>{"use strict";py.exports=dy()});var by=Fr(yc=>{"use strict";(function(){"use strict";var d=Ia(),s=Symbol.for("react.element"),v=Symbol.for("react.portal"),S=Symbol.for("react.fragment"),g=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),B=Symbol.for("react.provider"),L=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),j=Symbol.for("react.suspense_list"),q=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),Q=Symbol.for("react.offscreen"),ce=Symbol.iterator,Ce="@@iterator";function Ne(p){if(p===null||typeof p!="object")return null;var H=ce&&p[ce]||p[Ce];return typeof H=="function"?H:null}var ie=d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function ue(p){{for(var H=arguments.length,w=new Array(H>1?H-1:0),fe=1;fe<H;fe++)w[fe-1]=arguments[fe];Le("error",p,w)}}function Le(p,H,w){{var fe=ie.ReactDebugCurrentFrame,De=fe.getStackAddendum();De!==""&&(H+="%s",w=w.concat([De]));var Qe=w.map(function(Me){return String(Me)});Qe.unshift("Warning: "+H),Function.prototype.apply.call(console[p],console,Qe)}}var Ze=!1,gt=!1,Te=!1,se=!1,ft=!1,te;te=Symbol.for("react.module.reference");function Ae(p){return!!(typeof p=="string"||typeof p=="function"||p===S||p===x||ft||p===g||p===y||p===j||se||p===Q||Ze||gt||Te||typeof p=="object"&&p!==null&&(p.$$typeof===X||p.$$typeof===q||p.$$typeof===B||p.$$typeof===L||p.$$typeof===U||p.$$typeof===te||p.getModuleId!==void 0))}function ne(p,H,w){var fe=p.displayName;if(fe)return fe;var De=H.displayName||H.name||"";return De!==""?w+"("+De+")":w}function be(p){return p.displayName||"Context"}function _e(p){if(p==null)return null;if(typeof p.tag=="number"&&ue("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof p=="function")return p.displayName||p.name||null;if(typeof p=="string")return p;switch(p){case S:return"Fragment";case v:return"Portal";case x:return"Profiler";case g:return"StrictMode";case y:return"Suspense";case j:return"SuspenseList"}if(typeof p=="object")switch(p.$$typeof){case L:var H=p;return be(H)+".Consumer";case B:var w=p;return be(w._context)+".Provider";case U:return ne(p,p.render,"ForwardRef");case q:var fe=p.displayName||null;return fe!==null?fe:_e(p.type)||"Memo";case X:{var De=p,Qe=De._payload,Me=De._init;try{return _e(Me(Qe))}catch(xe){return null}}}return null}var vt=Object.assign,pe=0,Tt,je,xt,Pe,dt,Fe,_t;function Wt(){}Wt.__reactDisabledLog=!0;function Wn(){{if(pe===0){Tt=console.log,je=console.info,xt=console.warn,Pe=console.error,dt=console.group,Fe=console.groupCollapsed,_t=console.groupEnd;var p={configurable:!0,enumerable:!0,value:Wt,writable:!0};Object.defineProperties(console,{info:p,log:p,warn:p,error:p,group:p,groupCollapsed:p,groupEnd:p})}pe++}}function Et(){{if(pe--,pe===0){var p={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:vt({},p,{value:Tt}),info:vt({},p,{value:je}),warn:vt({},p,{value:xt}),error:vt({},p,{value:Pe}),group:vt({},p,{value:dt}),groupCollapsed:vt({},p,{value:Fe}),groupEnd:vt({},p,{value:_t})})}pe<0&&ue("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var bn=ie.ReactCurrentDispatcher,ut;function It(p,H,w){{if(ut===void 0)try{throw Error()}catch(De){var fe=De.stack.trim().match(/\n( *(at )?)/);ut=fe&&fe[1]||""}return`
`+ut+p}}var ca=!1,In;{var Un=typeof WeakMap=="function"?WeakMap:Map;In=new Un}function Mn(p,H){if(!p||ca)return"";{var w=In.get(p);if(w!==void 0)return w}var fe;ca=!0;var De=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var Qe;Qe=bn.current,bn.current=null,Wn();try{if(H){var Me=function(){throw Error()};if(Object.defineProperty(Me.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Me,[])}catch(Qt){fe=Qt}Reflect.construct(p,[],Me)}else{try{Me.call()}catch(Qt){fe=Qt}p.call(Me.prototype)}}else{try{throw Error()}catch(Qt){fe=Qt}p()}}catch(Qt){if(Qt&&fe&&typeof Qt.stack=="string"){for(var xe=Qt.stack.split(`
`),mt=fe.stack.split(`
`),We=xe.length-1,ke=mt.length-1;We>=1&&ke>=0&&xe[We]!==mt[ke];)ke--;for(;We>=1&&ke>=0;We--,ke--)if(xe[We]!==mt[ke]){if(We!==1||ke!==1)do if(We--,ke--,ke<0||xe[We]!==mt[ke]){var pn=`
`+xe[We].replace(" at new "," at ");return p.displayName&&pn.includes("<anonymous>")&&(pn=pn.replace("<anonymous>",p.displayName)),typeof p=="function"&&In.set(p,pn),pn}while(We>=1&&ke>=0);break}}}finally{ca=!1,bn.current=Qe,Et(),Error.prepareStackTrace=De}var Yn=p?p.displayName||p.name:"",va=Yn?It(Yn):"";return typeof p=="function"&&In.set(p,va),va}function $n(p,H,w){return Mn(p,!1)}function Fn(p){var H=p.prototype;return!!(H&&H.isReactComponent)}function wt(p,H,w){if(p==null)return"";if(typeof p=="function")return Mn(p,Fn(p));if(typeof p=="string")return It(p);switch(p){case y:return It("Suspense");case j:return It("SuspenseList")}if(typeof p=="object")switch(p.$$typeof){case U:return $n(p.render);case q:return wt(p.type,H,w);case X:{var fe=p,De=fe._payload,Qe=fe._init;try{return wt(Qe(De),H,w)}catch(Me){}}}return""}var En=Object.prototype.hasOwnProperty,Bn={},Rt=ie.ReactDebugCurrentFrame;function Yt(p){if(p){var H=p._owner,w=wt(p.type,p._source,H?H.type:null);Rt.setExtraStackFrame(w)}else Rt.setExtraStackFrame(null)}function sa(p,H,w,fe,De){{var Qe=Function.call.bind(En);for(var Me in p)if(Qe(p,Me)){var xe=void 0;try{if(typeof p[Me]!="function"){var mt=Error((fe||"React class")+": "+w+" type `"+Me+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof p[Me]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw mt.name="Invariant Violation",mt}xe=p[Me](H,Me,fe,w,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(We){xe=We}xe&&!(xe instanceof Error)&&(Yt(De),ue("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",fe||"React class",w,Me,typeof xe),Yt(null)),xe instanceof Error&&!(xe.message in Bn)&&(Bn[xe.message]=!0,Yt(De),ue("Failed %s type: %s",w,xe.message),Yt(null))}}}var ea=Array.isArray;function lt(p){return ea(p)}function Vn(p){{var H=typeof Symbol=="function"&&Symbol.toStringTag,w=H&&p[Symbol.toStringTag]||p.constructor.name||"Object";return w}}function er(p){try{return Na(p),!1}catch(H){return!0}}function Na(p){return""+p}function Ua(p){if(er(p))return ue("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",Vn(p)),Na(p)}var wn=ie.ReactCurrentOwner,vr={key:!0,ref:!0,__self:!0,__source:!0},fa,mr,Y;Y={};function le(p){if(En.call(p,"ref")){var H=Object.getOwnPropertyDescriptor(p,"ref").get;if(H&&H.isReactWarning)return!1}return p.ref!==void 0}function Ee(p){if(En.call(p,"key")){var H=Object.getOwnPropertyDescriptor(p,"key").get;if(H&&H.isReactWarning)return!1}return p.key!==void 0}function ae(p,H){if(typeof p.ref=="string"&&wn.current&&H&&wn.current.stateNode!==H){var w=_e(wn.current.type);Y[w]||(ue('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',_e(wn.current.type),p.ref),Y[w]=!0)}}function ot(p,H){{var w=function(){fa||(fa=!0,ue("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",H))};w.isReactWarning=!0,Object.defineProperty(p,"key",{get:w,configurable:!0})}}function Pt(p,H){{var w=function(){mr||(mr=!0,ue("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",H))};w.isReactWarning=!0,Object.defineProperty(p,"ref",{get:w,configurable:!0})}}var $=function(p,H,w,fe,De,Qe,Me){var xe={$$typeof:s,type:p,key:H,ref:w,props:Me,_owner:Qe};return xe._store={},Object.defineProperty(xe._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(xe,"_self",{configurable:!1,enumerable:!1,writable:!1,value:fe}),Object.defineProperty(xe,"_source",{configurable:!1,enumerable:!1,writable:!1,value:De}),Object.freeze&&(Object.freeze(xe.props),Object.freeze(xe)),xe};function J(p,H,w,fe,De){{var Qe,Me={},xe=null,mt=null;w!==void 0&&(Ua(w),xe=""+w),Ee(H)&&(Ua(H.key),xe=""+H.key),le(H)&&(mt=H.ref,ae(H,De));for(Qe in H)En.call(H,Qe)&&!vr.hasOwnProperty(Qe)&&(Me[Qe]=H[Qe]);if(p&&p.defaultProps){var We=p.defaultProps;for(Qe in We)Me[Qe]===void 0&&(Me[Qe]=We[Qe])}if(xe||mt){var ke=typeof p=="function"?p.displayName||p.name||"Unknown":p;xe&&ot(Me,ke),mt&&Pt(Me,ke)}return $(p,xe,mt,De,fe,wn.current,Me)}}var nt=ie.ReactCurrentOwner,Ke=ie.ReactDebugCurrentFrame;function he(p){if(p){var H=p._owner,w=wt(p.type,p._source,H?H.type:null);Ke.setExtraStackFrame(w)}else Ke.setExtraStackFrame(null)}var $t;$t=!1;function da(p){return typeof p=="object"&&p!==null&&p.$$typeof===s}function hr(){{if(nt.current){var p=_e(nt.current.type);if(p)return`

Check the render method of \``+p+"`."}return""}}function Be(p){{if(p!==void 0){var H=p.fileName.replace(/^.*[\\\/]/,""),w=p.lineNumber;return`

Check your code at `+H+":"+w+"."}return""}}var Ln={};function ta(p){{var H=hr();if(!H){var w=typeof p=="string"?p:p.displayName||p.name;w&&(H=`

Check the top-level render call using <`+w+">.")}return H}}function dn(p,H){{if(!p._store||p._store.validated||p.key!=null)return;p._store.validated=!0;var w=ta(H);if(Ln[w])return;Ln[w]=!0;var fe="";p&&p._owner&&p._owner!==nt.current&&(fe=" It was passed a child from "+_e(p._owner.type)+"."),he(p),ue('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',w,fe),he(null)}}function qt(p,H){{if(typeof p!="object")return;if(lt(p))for(var w=0;w<p.length;w++){var fe=p[w];da(fe)&&dn(fe,H)}else if(da(p))p._store&&(p._store.validated=!0);else if(p){var De=Ne(p);if(typeof De=="function"&&De!==p.entries)for(var Qe=De.call(p),Me;!(Me=Qe.next()).done;)da(Me.value)&&dn(Me.value,H)}}}function An(p){{var H=p.type;if(H==null||typeof H=="string")return;var w;if(typeof H=="function")w=H.propTypes;else if(typeof H=="object"&&(H.$$typeof===U||H.$$typeof===q))w=H.propTypes;else return;if(w){var fe=_e(H);sa(w,p.props,"prop",fe,p)}else if(H.PropTypes!==void 0&&!$t){$t=!0;var De=_e(H);ue("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",De||"Unknown")}typeof H.getDefaultProps=="function"&&!H.getDefaultProps.isReactClassApproved&&ue("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function pa(p){{for(var H=Object.keys(p.props),w=0;w<H.length;w++){var fe=H[w];if(fe!=="children"&&fe!=="key"){he(p),ue("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",fe),he(null);break}}p.ref!==null&&(he(p),ue("Invalid attribute `ref` supplied to `React.Fragment`."),he(null))}}var tr={};function si(p,H,w,fe,De,Qe){{var Me=Ae(p);if(!Me){var xe="";(p===void 0||typeof p=="object"&&p!==null&&Object.keys(p).length===0)&&(xe+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var mt=Be(De);mt?xe+=mt:xe+=hr();var We;p===null?We="null":lt(p)?We="array":p!==void 0&&p.$$typeof===s?(We="<"+(_e(p.type)||"Unknown")+" />",xe=" Did you accidentally export a JSX literal instead of a component?"):We=typeof p,ue("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",We,xe)}var ke=J(p,H,w,De,Qe);if(ke==null)return ke;if(Me){var pn=H.children;if(pn!==void 0)if(fe)if(lt(pn)){for(var Yn=0;Yn<pn.length;Yn++)qt(pn[Yn],p);Object.freeze&&Object.freeze(pn)}else ue("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else qt(pn,p)}if(En.call(H,"key")){var va=_e(p),Qt=Object.keys(H).filter(function(gr){return gr!=="key"}),yr=Qt.length>0?"{key: someKey, "+Qt.join(": ..., ")+": ...}":"{key: someKey}";if(!tr[va+yr]){var La=Qt.length>0?"{"+Qt.join(": ..., ")+": ...}":"{}";ue(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,yr,va,La,va),tr[va+yr]=!0}}return p===S?pa(ke):An(ke),ke}}function $i(p,H,w){return si(p,H,w,!0)}function Ma(p,H,w){return si(p,H,w,!1)}var Dt=Ma,wr=$i;yc.Fragment=S,yc.jsx=Dt,yc.jsxs=wr})()});var Wi=Fr((VT,Ey)=>{"use strict";Ey.exports=by()});function Xi(d){if(d==null||typeof d!="object")return!1;let s=Object.getPrototypeOf(d);return s==null||s===Object.prototype}function Oa(d){return d!=null&&d.kind===3}var sl="__current",wd={},bC=[];function Qd(d,{strict:s=!0,components:v}={}){let S=0,g={strict:s,mounted:!1,channel:d,children:bC,nodes:new WeakSet,parents:new WeakMap,tops:new WeakMap,components:new WeakMap,fragments:new WeakMap};s&&Object.freeze(v);let x={kind:0,options:s?Object.freeze({strict:s,components:v}):{strict:s,components:v},get children(){return g.children},createComponent(B,...L){if(v&&v.indexOf(B)<0)throw new Error(`Unsupported component: ${B}`);let[U,y,...j]=L,q=U!=null?U:{},X=[],Q={};if(U)for(let ie of Object.keys(U))ie!=="children"&&(Q[ie]=Vr(ay(U[ie])));if(y)if(Array.isArray(y))for(let ie of y)X.push(Zt(ie,x));else{X.push(Zt(y,x));for(let ie of j)X.push(Zt(ie,x))}let ce=`${S++}`,Ce={externalProps:s?Object.freeze(q):q,internalProps:Q,children:s?Object.freeze(X):X},Ne=Jn({kind:1,get children(){return Ce.children},get props(){return Ce.externalProps},get remoteProps(){return Ce.internalProps},remove:()=>Ih(Ne),updateProps:ie=>CC(Ne,ie,Ce,g),append:(...ie)=>fc(Ne,ie.map(ue=>Zt(ue,x)),Ce,g),appendChild:ie=>dc(Ne,Zt(ie,x),Ce,g),removeChild:ie=>pc(Ne,ie,Ce,g),replaceChildren:(...ie)=>Yd(Ne,ie.map(ue=>Zt(ue,x)),Ce,g),insertBefore:(ie,ue)=>Ji(Ne,Zt(ie,x),ue,Ce,g),insertChildBefore:(ie,ue)=>Ji(Ne,Zt(ie,x),ue,Ce,g)},wd);g.components.set(Ne,Ce),Object.defineProperty(Ne,"type",{value:B,configurable:!1,writable:!1,enumerable:!0}),Pd(Ne,g),qd(Ne,ce,x);for(let ie of Ce.children)dl(Ne,ie,g);return Ne},createText(B=""){let L=`${S++}`,U={text:B},y=q=>RC(j,q,U,g),j=Jn({kind:2,get text(){return U.text},update:y,updateText:y,remove:()=>Ih(j)},wd);return Pd(j,g),qd(j,L,x),j},createFragment(){let B=`${S++}`,L={children:s?Object.freeze([]):[]},U=Jn({kind:3,get children(){return L.children},append:(...y)=>fc(U,y.map(j=>Zt(j,x)),L,g),appendChild:y=>dc(U,Zt(y,x),L,g),removeChild:y=>pc(U,y,L,g),replaceChildren:(...y)=>Yd(U,y.map(j=>Zt(j,x)),L,g),insertBefore:(y,j)=>Ji(U,Zt(y,x),j,L,g),insertChildBefore:(y,j)=>Ji(U,Zt(y,x),j,L,g)},wd);return g.fragments.set(U,L),Pd(U,g),qd(U,B,x),U},append:(...B)=>fc(x,B.map(L=>Zt(L,x)),g,g),appendChild:B=>dc(x,Zt(B,x),g,g),replaceChildren:(...B)=>Yd(x,B.map(L=>Zt(L,x)),g,g),removeChild:B=>pc(x,B,g,g),insertBefore:(B,L)=>Ji(x,Zt(B,x),L,g,g),insertChildBefore:(B,L)=>Ji(x,Zt(B,x),L,g,g),mount(){return g.mounted?Promise.resolve():(g.mounted=!0,Promise.resolve(d(0,g.children.map(pl))))}};return x}function EC(d,{tops:s}){var v;return((v=s.get(d))===null||v===void 0?void 0:v.kind)===0}function ny(d,s){let v=S=>{if("children"in S)for(let g of S.children)s(g),v(g)};v(d)}function fl(d,s,{remote:v,local:S}){let{mounted:g,channel:x}=s;g&&(d.kind===0||EC(d,s))&&v(x),S()}function RC(d,s,v,S){return fl(d,S,{remote:g=>g(3,d.id,s),local:()=>{v.text=s}})}var Br=Symbol("ignore");function CC(d,s,v,S){let{strict:g}=S,{internalProps:x,externalProps:B}=v,L={},U=[],y=!1;for(let j of Object.keys(s)){if(j==="children")continue;let q=B[j],X=s[j],Q=x[j],ce=ay(X);if(Q===ce&&(ce==null||typeof ce!="object"))continue;let[Ce,Ne]=Gd(Q,ce);Ne&&U.push(...Ne),Ce!==Br&&(y=!0,L[j]=Ce,Oa(q)&&Kd(q,S),Oa(X)&&dl(d,X,S))}return fl(d,S,{remote:j=>{y&&j(4,d.id,L)},local:()=>{let j=Jn(Jn({},B),s);v.externalProps=g?Object.freeze(j):j,v.internalProps=Jn(Jn({},v.internalProps),L);for(let[q,X]of U)q[sl]=X}})}function Gd(d,s,v=new Set){return v.has(d)?[Br]:(v.add(d),typeof d=="function"&&sl in d?[typeof s=="function"?Br:Vr(s),[[d,s]]]:Array.isArray(d)?_C(d,s,v):Xi(d)&&!Oa(d)?xC(d,s,v):[d===s?Br:s])}function Vr(d,s=new Map){let v=s.get(d);if(v)return v;if(Oa(d))return s.set(d,d),d;if(Array.isArray(d)){let S=[];s.set(d,S);for(let g of d)S.push(Vr(g,s));return S}if(Xi(d)){let S={};s.set(d,S);for(let g of Object.keys(d))S[g]=Vr(d[g],s);return S}if(typeof d=="function"){let S=(...g)=>S[sl](...g);return Object.defineProperty(S,sl,{enumerable:!1,configurable:!1,writable:!0,value:d}),s.set(d,S),S}return s.set(d,d),d}function Zi(d,s=new Set){if(!s.has(d)){if(s.add(d),Array.isArray(d))return d.reduce((v,S)=>{let g=Zi(S,s);return g?[...v,...g]:v},[]);if(Xi(d))return Object.keys(d).reduce((v,S)=>{let g=Zi(d[S],s);return g?[...v,...g]:v},[]);if(typeof d=="function")return sl in d?[d]:void 0}}function Ih(d){var s;(s=d.parent)===null||s===void 0||s.removeChild(d)}function fc(d,s,v,S){for(let g of s)dc(d,g,v,S)}function dc(d,s,v,S){var g;let{nodes:x,strict:B}=S;if(!x.has(s))throw new Error("Cannot append a node that was not created by this remote root");let L=s.parent,U=(g=L==null?void 0:L.children.indexOf(s))!==null&&g!==void 0?g:-1;return fl(d,S,{remote:y=>{y(1,d.id,U<0?d.children.length:d.children.length-1,pl(s),L?L.id:!1)},local:()=>{dl(d,s,S);let y;if(L){let j=ry(L,S),q=[...j.children];q.splice(U,1),L===d?y=q:(j.children=B?Object.freeze(q):q,y=[...v.children])}else y=[...v.children];y.push(s),v.children=B?Object.freeze(y):y}})}function Yd(d,s,v,S){for(let g of d.children)pc(d,g,v,S);fc(d,s,v,S)}function pc(d,s,v,S){let{strict:g}=S;return fl(d,S,{remote:x=>x(2,d.id,d.children.indexOf(s)),local:()=>{Kd(s,S);let x=[...v.children];x.splice(x.indexOf(s),1),v.children=g?Object.freeze(x):x}})}function Ji(d,s,v,S,g){var x;let{strict:B,nodes:L}=g;if(!L.has(s))throw new Error("Cannot insert a node that was not created by this remote root");let U=s.parent,y=(x=U==null?void 0:U.children.indexOf(s))!==null&&x!==void 0?x:-1;return fl(d,g,{remote:j=>{let q=v==null?d.children.length-1:d.children.indexOf(v);j(1,d.id,q<y||y<0?q:q-1,pl(s),U?U.id:!1)},local:()=>{dl(d,s,g);let j;if(U){let q=ry(U,g),X=[...q.children];X.splice(y,1),U===d?j=X:(q.children=B?Object.freeze(X):X,j=[...S.children])}else j=[...S.children];v==null?j.push(s):j.splice(j.indexOf(v),0,s),S.children=B?Object.freeze(j):j}})}function Zt(d,s){return typeof d=="string"?s.createText(d):d}function dl(d,s,v){let{tops:S,parents:g}=v,x=d.kind===0?d:S.get(d);S.set(s,x),g.set(s,d),$h(s,v),ny(s,B=>{S.set(B,x),$h(B,v)})}function $h(d,s){if(d.kind!==1)return;let v=d.props;v&&Object.values(v).forEach(S=>{Oa(S)&&dl(d,S,s)})}function Kd(d,s){let{tops:v,parents:S}=s;v.delete(d),S.delete(d),ny(d,g=>{v.delete(g),ey(g,s)}),ey(d,s)}function ey(d,s){if(d.kind!==1)return;let v=d.remoteProps;for(let S of Object.keys(v!=null?v:{})){let g=v[S];Oa(g)&&Kd(g,s)}}function Pd(d,{parents:s,tops:v,nodes:S}){S.add(d),Object.defineProperty(d,"parent",{get(){return s.get(d)},configurable:!0,enumerable:!0}),Object.defineProperty(d,"top",{get(){return v.get(d)},configurable:!0,enumerable:!0})}function pl(d){return d.kind===2?{id:d.id,kind:d.kind,text:d.text}:{id:d.id,kind:d.kind,type:d.type,props:d.remoteProps,children:d.children.map(s=>pl(s))}}function ay(d){return Oa(d)?TC(d):d}function TC(d){return{id:d.id,kind:d.kind,get children(){return d.children.map(s=>pl(s))}}}function ry(d,s){return d.kind===0?s:d.kind===3?s.fragments.get(d):s.components.get(d)}function qd(d,s,v){Object.defineProperty(d,"id",{value:s,configurable:!0,writable:!1,enumerable:!1}),Object.defineProperty(d,"root",{value:v,configurable:!0,writable:!1,enumerable:!1})}function xC(d,s,v){if(!Xi(s)){var S;return[Vr(s),(S=Zi(d))===null||S===void 0?void 0:S.map(L=>[L,void 0])]}let g=!1,x=[],B={};for(let L in d){let U=d[L];if(!(L in s)){g=!0;let X=Zi(U);X&&x.push(...X.map(Q=>[Q,void 0]))}let y=s[L],[j,q]=Gd(U,y,v);q&&x.push(...q),j!==Br&&(g=!0,B[L]=j)}for(let L in s)L in B||(g=!0,B[L]=Vr(s[L]));return[g?B:Br,x]}function _C(d,s,v){if(!Array.isArray(s)){var S;return[Vr(s),(S=Zi(d))===null||S===void 0?void 0:S.map(j=>[j,void 0])]}let g=!1,x=[],B=s.length,L=d.length,U=Math.max(L,B),y=[];for(let j=0;j<U;j++){let q=d[j],X=s[j];if(j<B){if(j>=L){g=!0,y[j]=Vr(X);continue}let[Q,ce]=Gd(q,X,v);if(ce&&x.push(...ce),Q===Br){y[j]=q;continue}g=!0,y[j]=Q}else{g=!0;let Q=Zi(q);Q&&x.push(...Q.map(ce=>[ce,void 0]))}}return[g?y:Br,x]}function iy(){return(s,v)=>{var S;function g(...x){return On(this,null,function*(){if(x.length===1)return v(...x);let[{channel:B,components:L},U]=x,y=Qd(B,{components:L,strict:!0}),j=v(y,U);return typeof j=="object"&&j!=null&&"then"in j&&(j=yield j),y.mount(),j})}return(S=globalThis.shopify)===null||S===void 0||S.extend(s,g),g}}var kd=iy();var Xd="AdminBlock";var Jd="BlockStack";var Zd="Box";var Wd="Button";var Id="Heading";var $d="InlineStack";var ep="NumberField";var tp="Text";var Ty=Zn(Ia(),1);var yy=Zn(vy(),1);var gy=d=>{var s;return(0,yy.default)({now:Date.now,scheduleTimeout:setTimeout,cancelTimeout:clearTimeout,noTimeout:!1,supportsMicrotasks:!0,scheduleMicrotask:my,queueMicrotask:my,isPrimaryRenderer:(s=d==null?void 0:d.primary)!==null&&s!==void 0?s:!0,supportsMutation:!0,supportsHydration:!1,supportsPersistence:!1,getRootHostContext(){return{}},getChildHostContext(v){return v},createTextInstance(v,S){return S.createText(v)},createInstance(v,S,g){let L=S,{children:x}=L,B=sc(L,["children"]);return g.createComponent(v,B)},commitTextUpdate(v,S,g){v.update(g)},prepareUpdate(v,S,g,x){let B={},L=!1;for(let U in g)!hy(g,U)||U==="children"||(U in x?g[U]!==x[U]&&(L=!0,B[U]=x[U]):(L=!0,B[U]=void 0));for(let U in x)!hy(x,U)||U==="children"||U in g||(L=!0,B[U]=x[U]);return L?B:null},commitUpdate(v,S){v.updateProps(S)},appendChildToContainer(v,S){v.append(S)},insertInContainerBefore(v,S,g){v.insertBefore(S,g)},removeChildFromContainer(v,S){v.removeChild(S)},clearContainer(v){for(let S of v.children)v.removeChild(S)},appendInitialChild(v,S){v.append(S)},appendChild(v,S){v.append(S)},insertBefore(v,S,g){v.insertBefore(S,g)},removeChild(v,S){v.removeChild(S)},finalizeInitialChildren(){return!1},shouldSetTextContent(){return!1},getPublicInstance(){},prepareForCommit(){return null},resetAfterCommit(){},commitMount(){},preparePortalMount(){},detachDeletedInstance(){}})};function my(d){return typeof queueMicrotask=="function"?queueMicrotask:Promise.resolve(null).then(d).catch(DC)}function DC(d){setTimeout(()=>{throw d})}var{hasOwnProperty:OC}={};function hy(d,s){return OC.call(d,s)}var Sy=Zn(Ia(),1),hc=(0,Sy.createContext)(null);var xy=Zn(Wi(),1),Ry=new WeakMap,Cy=0,NC=gy();function np(d,s,v,S=NC){let g=Ry.get(s);if(!g){var x;let y={container:Number(((x=Ty.version.split("."))===null||x===void 0?void 0:x[0])||18)>=18?S.createContainer(s,Cy,null,!1,null,"r-ui",()=>null,null):S.createContainer(s,Cy,!1,null),renderContext:{root:s,reconciler:S}};Ry.set(s,y),g=y}let{container:B,renderContext:L}=g;S.updateContainer(d&&(0,xy.jsx)(hc.Provider,{value:L,children:d}),B,null,v)}var $a=Zn(Ia(),1);var Oy=Zn(Wi(),1);var _y=Zn(Ia(),1);function Dy(){let d=(0,_y.useContext)(hc);if(d==null)throw new Error("No remote-ui Render instance found in context");return d}function fn(d,{fragmentProps:s}={}){if(!s||!s.length)return d;let v=UC(d,s);return v.displayName=d,v}function UC(d,s){let v=d;return(0,$a.memo)(function(B){var L=B,{children:g=[]}=L,x=sc(L,["children"]);let U=(0,$a.useRef)({}),{root:y,reconciler:j}=Dy(),{props:q,children:X}=(0,$a.useMemo)(()=>{let Q=[],ce={};for(let Ce of Object.keys(x)){let Ne=x[Ce];if(s.includes(Ce)&&(0,$a.isValidElement)(Ne)){let ie=U.current[Ce],ue=Oa(ie)?ie:y.createFragment();U.current[Ce]=ue,Object.assign(ue,{createText(...Ze){return y.createText(...Ze)},createComponent(Ze,...gt){return y.createComponent(Ze,...gt)}});let Le=j.createPortal(Ne,ue,null,null);Q.push(Le),ce[Ce]=ue}else ce[Ce]=Ne,delete U.current[Ce]}return{props:ce,children:[...$a.Children.toArray(g),...Q]}},[g,x,y,j,U]);return(0,Oy.jsx)(v,cl(Jn({},q),{children:X}))})}var Ny=Zn(Ia(),1),gc=(0,Ny.createContext)(null);var Uy=Zn(Wi(),1);function Sc(d,s){return kd(d,(v,S)=>On(this,null,function*(){let g=yield s(S);yield new Promise((x,B)=>{try{np((0,Uy.jsx)(gc.Provider,{value:S,children:g}),v,()=>{x()})}catch(L){console.error(L),B(L)}})}))}var ap=fn(Xd);var rp=fn(Jd);var ip=fn(Zd);var up=fn(Wd);var lp=fn(Id);var bc=fn($d);var vl=fn(ep);var Ec=fn(tp);var My=Zn(Ia(),1);var Rc=class extends Error{constructor(...s){super(...s),this.name="AdminUIExtensionError"}};function op(d){let s=(0,My.useContext)(gc);if(s==null)throw new Rc("No extension api found.");return s}var Ii=Zn(Ia());function MC(d,s){return On(this,null,function*(){let v=(s==null?void 0:s.collectionName)+","+(s==null?void 0:s.collectionMin)+","+(s==null?void 0:s.collectionMax)+","+(s==null?void 0:s.collectionMultiple);return yield ci(`mutation SetMetafield($namespace: String!, $ownerId: ID!, $key: String!, $type: String!, $value: String!) {
        metafieldDefinitionCreate(
          definition: {namespace: $namespace, key: $key, name: "Tracked Issues", ownerType: PRODUCT, type: $type, access: {admin: MERCHANT_READ_WRITE}}
        ) {
          createdDefinition {
            id
          }
        }
        metafieldsSet(metafields: [{ownerId:$ownerId, namespace:$namespace, key:$key, type:$type, value:$value}]) {
          userErrors {
            field
            message
            code
          }
        }
      }
      `,{ownerId:d,namespace:"collectionLimit",key:"collectionLimit",type:"string",value:v})})}function Ay(d,s){return On(this,null,function*(){return yield ci(`query collection {
            collection(id: "${d}") {
                id
                title
                productsCount {
                    count
                }
                hasProduct(id: "${s}")
            }
        }`,{})})}function zy(d,s){return On(this,null,function*(){var S,g,x,B;let v=yield cp();for(let L of v){let U=yield Ay(d,(S=L==null?void 0:L.node)==null?void 0:S.id);(x=(g=U==null?void 0:U.data)==null?void 0:g.collection)!=null&&x.hasProduct&&(yield MC((B=L==null?void 0:L.node)==null?void 0:B.id,s))}return{success:!0}})}function Hy(d){return On(this,null,function*(){var g,x,B,L,U,y,j,q,X,Q,ce,Ce,Ne,ie,ue,Le,Ze,gt,Te,se;let s={},v=yield ci(`{
    currentAppInstallation {
      id
      planMetaField: metafield(namespace:"hasPlan", key: "hasPlan") {
        value
      }
      freePlanLimitersMetaField: metafield(namespace:"freePlanLimiters", key: "freePlanLimiters") {
        value
      }
  
    }
  }`,{});((B=(x=(g=v==null?void 0:v.data)==null?void 0:g.currentAppInstallation)==null?void 0:x.planMetaField)==null?void 0:B.value)=="false"?(s.plan=!1,(y=(U=(L=v==null?void 0:v.data)==null?void 0:L.currentAppInstallation)==null?void 0:U.freePlanLimitersMetaField)!=null&&y.value&&(s.freePlanLimiters=JSON.parse((X=(q=(j=v==null?void 0:v.data)==null?void 0:j.currentAppInstallation)==null?void 0:q.freePlanLimitersMetaField)==null?void 0:X.value))):s.plan=!0;let S=yield cp();for(let ft of S){let te=yield Ay(d,(Q=ft==null?void 0:ft.node)==null?void 0:Q.id);if((Ce=(ce=te==null?void 0:te.data)==null?void 0:ce.collection)!=null&&Ce.hasProduct&&(s.collectionName=(ie=(Ne=te==null?void 0:te.data)==null?void 0:Ne.collection)==null?void 0:ie.title,(Le=(ue=ft==null?void 0:ft.node)==null?void 0:ue.collectionLimitField)!=null&&Le.value)){let[Ae,ne,be,_e]=(gt=(Ze=ft==null?void 0:ft.node)==null?void 0:Ze.collectionLimitField)==null?void 0:gt.value.split(",");if(Ae===((se=(Te=te==null?void 0:te.data)==null?void 0:Te.collection)==null?void 0:se.title)){s.collectionMin=ne,s.collectionMax=be,s.collectionMultiple=_e;break}}}return s})}function ci(d,s){return On(this,null,function*(){let S=yield fetch("shopify:admin/api/graphql.json",{method:"POST",body:JSON.stringify({query:d,variables:s})});return S.ok||console.error("Network error"),yield S.json()})}function LC(d,s){let v=0,S={};for(let g of s)(g.node.category?g.node.category.name:null)===d&&v++;return S.categoryName=d,S.quantityLimit=v,v}function AC(d,s){var x,B;let v=0,S=d,g={};for(let L of s)((x=L.node)!=null&&x.vendor?(B=L.node)==null?void 0:B.vendor:null)===S&&v++;return g.vendorName=S,g.quantityLimit=v,v}function Ly(d,s){var S,g,x;return(x=(g=(S=s.find(B=>{var L;return((L=B.node)==null?void 0:L.title)===d}))==null?void 0:S.node)==null?void 0:g.productsCount)==null?void 0:x.count}function jy(d){return On(this,null,function*(){var X,Q,ce,Ce;let s=0,v={},S={},g={},x={},B=yield ci(`query AllCollections {
    collections(first: 250) {
      edges {
        node {
          id
          title
          productsCount {
            count
          }
        }
      }
    }
  }`,{}),L=yield ci(`query collection {
            collection(id: "${d}") {
              id
              title
              productsCount {
                  count
              }
            }
        }`,{}),U=(Q=(X=B==null?void 0:B.data)==null?void 0:X.collections)==null?void 0:Q.edges,y=yield cp(),j=(Ce=(ce=L==null?void 0:L.data)==null?void 0:ce.collection)==null?void 0:Ce.title,q=Ly(j,U);return y.forEach(Ne=>{let ie=Ne.node;if(ie.productLimitField&&ie.productLimitField.value){let ue=ie.productLimitField.value.split(","),Le=ue.slice(0,2).map(Number),Ze=ue[2],gt=ue.slice(3,5).map(Number),Te=ue[5];Le.some(se=>se!==0)&&(v[Te]||(v[Te]=0,s=s+1),v[Te]++),gt.some(se=>se!==0)&&(S[Ze]||(S[Ze]=0,s=s+AC(Ze,y)),S[Ze]++)}if(ie.categoryLimitField&&ie.categoryLimitField.value){let ue=ie.categoryLimitField.value.split(","),Le=ue[0].trim();ue.slice(1).map(Number).some(gt=>gt!==0)&&(g[Le]||(g[Le]=0,s=s+LC(Le,y)),g[Le]++)}if(ie.collectionLimitField&&ie.collectionLimitField.value){let ue=ie.collectionLimitField.value.split(","),Le=ue[0].trim();ue.slice(1).map(Number).some(gt=>gt!==0)&&(x[Le]||(x[Le]=0,s=s+Ly(Le,U)),x[Le]++)}}),s+q})}function cp(){return On(this,null,function*(){var S,g,x,B,L,U,y,j,q,X,Q;let d=[],s=yield ci(`query AllProducts{
        products(first: 2) {
            edges {
                cursor
                node {
                  id
                  vendor
                  category {
                    name
                  }
                  productLimitField: metafield(namespace: "productLimit", key: "productLimit") {
                    id
                    value
                  }
                  categoryLimitField: metafield(namespace: "categoryLimit", key: "categoryLimit") {
                    id
                    value
                  }
                  collectionLimitField: metafield(namespace: "collectionLimit", key: "collectionLimit") {
                    id
                    value
                  }
                }    
            }
        }
    }`,{});d=d.concat((g=(S=s==null?void 0:s.data)==null?void 0:S.products)==null?void 0:g.edges);let v=(x=d[d.length-1])==null?void 0:x.cursor;for(;;){let ce=yield ci(`query GetProductsPaginated($after: String) {
            products(first: 250, after: $after) {
              edges {
                cursor
                node {
                  id
                  vendor
                  category {
                    name
                  }
                  productLimitField: metafield(namespace: "productLimit", key: "productLimit") {
                    id
                    value
                  }
                  categoryLimitField: metafield(namespace: "categoryLimit", key: "categoryLimit") {
                    id
                    value
                  }
                  collectionLimitField: metafield(namespace: "collectionLimit", key: "collectionLimit") {
                    id
                    value
                  }
                }
              }
              pageInfo {
                hasNextPage
              }
            }
        }`,{after:v});if(d=d.concat((L=(B=ce==null?void 0:ce.data)==null?void 0:B.products)==null?void 0:L.edges),(j=(y=(U=ce==null?void 0:ce.data)==null?void 0:U.products)==null?void 0:y.pageInfo)!=null&&j.hasNextPage){let Ce=(X=(q=ce==null?void 0:ce.data)==null?void 0:q.products)==null?void 0:X.edges;if(Ce)v=(Q=Ce[Ce.length-1])==null?void 0:Q.cursor;else break}else break}return d})}var Nn=Zn(Wi()),Fy="admin.collection-details.block.render",$x=Sc(Fy,()=>(0,Nn.jsx)(zC,{}));function zC(){let{i18n:d,data:s}=op(Fy),[v,S]=(0,Ii.useState)({collectionName:"",collectionMin:0,collectionMax:0,collectionMultiple:0,plan:""}),[g,x]=(0,Ii.useState)(!0),[B,L]=(0,Ii.useState)(!1),U=s.selected[0].id,y={products:0};(0,Ii.useEffect)(()=>{(function(){return On(this,null,function*(){var ce;let Q=yield Hy(U);if(Q){let Ce=Q==null?void 0:Q.freePlanLimiters;if(Q.plan===!1&&(y.products=(ce=Ce.find(Ne=>Ne.typeName=="products"))==null?void 0:ce.value),y){let Ne=yield jy(U);Number(y.products)>=Ne&&Number(y.products)>0&&L(!0)}Q.plan&&L(!0),S(Ne=>cl(Jn({},Ne),{collectionName:Q!=null&&Q.collectionName?Q==null?void 0:Q.collectionName:"",collectionMin:Q!=null&&Q.collectionMin?Number(Q==null?void 0:Q.collectionMin):0,collectionMax:Q!=null&&Q.collectionMax?Number(Q==null?void 0:Q.collectionMax):0,collectionMultiple:Q!=null&&Q.collectionMultiple?Number(Q==null?void 0:Q.collectionMultiple):0,plan:Q!=null&&Q.plan?Q==null?void 0:Q.plan:!1})),x(!1)}})})()},[U]);let j=(X,Q)=>{S(ce=>cl(Jn({},ce),{[Q]:X}))},q=()=>On(this,null,function*(){x(!0);let X=yield zy(U,v);X!=null&&X.success&&x(!1)});return(0,Nn.jsxs)(ap,{title:"CartControl: Order Limit app limiters",children:[g&&(0,Nn.jsx)(Ec,{children:"Loading..."}),!g&&!(v!=null&&v.plan)&&!B&&(0,Nn.jsx)(Ec,{as:"p",tone:"critical",children:"You used allowed Product limits. To continue please select a plan or set existing limits to 0."}),!g&&B&&(0,Nn.jsx)(ip,{children:(0,Nn.jsxs)(rp,{gap:!0,children:[(0,Nn.jsxs)(lp,{size:"6",children:["Collection Name: ",v==null?void 0:v.collectionName]}),(0,Nn.jsxs)(bc,{gap:!0,children:[(0,Nn.jsx)(vl,{value:v.collectionMin,label:"Collection Min Limit",type:"number",onChange:X=>{j(X,"collectionMin")}}),(0,Nn.jsx)(vl,{value:v.collectionMax,label:"Collection Max Limit",type:"number",onChange:X=>{j(X,"collectionMax")}}),(0,Nn.jsx)(vl,{value:v.collectionMultiple,label:"Collection Multiple Limit",type:"number",onChange:X=>{j(X,"collectionMultiple")}})]}),(0,Nn.jsx)(bc,{inlineAlignment:"end",gap:"none",children:(0,Nn.jsx)(up,{onClick:q,variant:"primary",children:"Save"})})]})})]})}})();
                    enterDisallowedContextReadInDEV();
                  }
                  partialState = _payload.call(instance, prevState, nextProps);
                  {
                    if (workInProgress2.mode & StrictLegacyMode) {
                      setIsStrictModeForDevtools(true);
                      try {
                        _payload.call(instance, prevState, nextProps);
                      } finally {
                        setIsStrictModeForDevtools(false);
                      }
                    }
                    exitDisallowedContextReadInDEV();
                  }
                } else {
                  partialState = _payload;
                }
                if (partialState === null || partialState === void 0) {
                  return prevState;
                }
                return assign({}, prevState, partialState);
              }
              case ForceUpdate: {
                hasForceUpdate = true;
                return prevState;
              }
            }
            return prevState;
          }
          function processUpdateQueue(workInProgress2, props, instance, renderLanes2) {
            var queue = workInProgress2.updateQueue;
            hasForceUpdate = false;
            {
              currentlyProcessingQueue = queue.shared;
            }
            var firstBaseUpdate = queue.firstBaseUpdate;
            var lastBaseUpdate = queue.lastBaseUpdate;
            var pendingQueue = queue.shared.pending;
            if (pendingQueue !== null) {
              queue.shared.pending = null;
              var lastPendingUpdate = pendingQueue;
              var firstPendingUpdate = lastPendingUpdate.next;
              lastPendingUpdate.next = null;
              if (lastBaseUpdate === null) {
                firstBaseUpdate = firstPendingUpdate;
              } else {
                lastBaseUpdate.next = firstPendingUpdate;
              }
              lastBaseUpdate = lastPendingUpdate;
              var current2 = workInProgress2.alternate;
              if (current2 !== null) {
                var currentQueue = current2.updateQueue;
                var currentLastBaseUpdate = currentQueue.lastBaseUpdate;
                if (currentLastBaseUpdate !== lastBaseUpdate) {
                  if (currentLastBaseUpdate === null) {
                    currentQueue.firstBaseUpdate = firstPendingUpdate;
                  } else {
                    currentLastBaseUpdate.next = firstPendingUpdate;
                  }
                  currentQueue.lastBaseUpdate = lastPendingUpdate;
                }
              }
            }
            if (firstBaseUpdate !== null) {
              var newState = queue.baseState;
              var newLanes = NoLanes;
              var newBaseState = null;
              var newFirstBaseUpdate = null;
              var newLastBaseUpdate = null;
              var update = firstBaseUpdate;
              do {
                var updateLane = update.lane;
                var updateEventTime = update.eventTime;
                if (!isSubsetOfLanes(renderLanes2, updateLane)) {
                  var clone = {
                    eventTime: updateEventTime,
                    lane: updateLane,
                    tag: update.tag,
                    payload: update.payload,
                    callback: update.callback,
                    next: null
                  };
                  if (newLastBaseUpdate === null) {
                    newFirstBaseUpdate = newLastBaseUpdate = clone;
                    newBaseState = newState;
                  } else {
                    newLastBaseUpdate = newLastBaseUpdate.next = clone;
                  }
                  newLanes = mergeLanes(newLanes, updateLane);
                } else {
                  if (newLastBaseUpdate !== null) {
                    var _clone = {
                      eventTime: updateEventTime,
                      // This update is going to be committed so we never want uncommit
                      // it. Using NoLane works because 0 is a subset of all bitmasks, so
                      // this will never be skipped by the check above.
                      lane: NoLane,
                      tag: update.tag,
                      payload: update.payload,
                      callback: update.callback,
                      next: null
                    };
                    newLastBaseUpdate = newLastBaseUpdate.next = _clone;
                  }
                  newState = getStateFromUpdate(workInProgress2, queue, update, newState, props, instance);
                  var callback = update.callback;
                  if (callback !== null && // If the update was already committed, we should not queue its
                  // callback again.
                  update.lane !== NoLane) {
                    workInProgress2.flags |= Callback;
                    var effects = queue.effects;
                    if (effects === null) {
                      queue.effects = [update];
                    } else {
                      effects.push(update);
                    }
                  }
                }
                update = update.next;
                if (update === null) {
                  pendingQueue = queue.shared.pending;
                  if (pendingQueue === null) {
                    break;
                  } else {
                    var _lastPendingUpdate = pendingQueue;
                    var _firstPendingUpdate = _lastPendingUpdate.next;
                    _lastPendingUpdate.next = null;
                    update = _firstPendingUpdate;
                    queue.lastBaseUpdate = _lastPendingUpdate;
                    queue.shared.pending = null;
                  }
                }
              } while (true);
              if (newLastBaseUpdate === null) {
                newBaseState = newState;
              }
              queue.baseState = newBaseState;
              queue.firstBaseUpdate = newFirstBaseUpdate;
              queue.lastBaseUpdate = newLastBaseUpdate;
              var lastInterleaved = queue.shared.interleaved;
              if (lastInterleaved !== null) {
                var interleaved = lastInterleaved;
                do {
                  newLanes = mergeLanes(newLanes, interleaved.lane);
                  interleaved = interleaved.next;
                } while (interleaved !== lastInterleaved);
              } else if (firstBaseUpdate === null) {
                queue.shared.lanes = NoLanes;
              }
              markSkippedUpdateLanes(newLanes);
              workInProgress2.lanes = newLanes;
              workInProgress2.memoizedState = newState;
            }
            {
              currentlyProcessingQueue = null;
            }
          }
          function callCallback(callback, context) {
            if (typeof callback !== "function") {
              throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + callback));
            }
            callback.call(context);
          }
          function resetHasForceUpdateBeforeProcessing() {
            hasForceUpdate = false;
          }
          function checkHasForceUpdateAfterProcessing() {
            return hasForceUpdate;
          }
          function commitUpdateQueue(finishedWork, finishedQueue, instance) {
            var effects = finishedQueue.effects;
            finishedQueue.effects = null;
            if (effects !== null) {
              for (var i = 0; i < effects.length; i++) {
                var effect = effects[i];
                var callback = effect.callback;
                if (callback !== null) {
                  effect.callback = null;
                  callCallback(callback, instance);
                }
              }
            }
          }
          var fakeInternalInstance = {};
          var emptyRefsObject = new React.Component().refs;
          var didWarnAboutStateAssignmentForComponent;
          var didWarnAboutUninitializedState;
          var didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate;
          var didWarnAboutLegacyLifecyclesAndDerivedState;
          var didWarnAboutUndefinedDerivedState;
          var warnOnUndefinedDerivedState;
          var warnOnInvalidCallback;
          var didWarnAboutDirectlyAssigningPropsToState;
          var didWarnAboutContextTypeAndContextTypes;
          var didWarnAboutInvalidateContextType;
          {
            didWarnAboutStateAssignmentForComponent = /* @__PURE__ */ new Set();
            didWarnAboutUninitializedState = /* @__PURE__ */ new Set();
            didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate = /* @__PURE__ */ new Set();
            didWarnAboutLegacyLifecyclesAndDerivedState = /* @__PURE__ */ new Set();
            didWarnAboutDirectlyAssigningPropsToState = /* @__PURE__ */ new Set();
            didWarnAboutUndefinedDerivedState = /* @__PURE__ */ new Set();
            didWarnAboutContextTypeAndContextTypes = /* @__PURE__ */ new Set();
            didWarnAboutInvalidateContextType = /* @__PURE__ */ new Set();
            var didWarnOnInvalidCallback = /* @__PURE__ */ new Set();
            warnOnInvalidCallback = function(callback, callerName) {
              if (callback === null || typeof callback === "function") {
                return;
              }
              var key = callerName + "_" + callback;
              if (!didWarnOnInvalidCallback.has(key)) {
                didWarnOnInvalidCallback.add(key);
                error("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", callerName, callback);
              }
            };
            warnOnUndefinedDerivedState = function(type, partialState) {
              if (partialState === void 0) {
                var componentName = getComponentNameFromType(type) || "Component";
                if (!didWarnAboutUndefinedDerivedState.has(componentName)) {
                  didWarnAboutUndefinedDerivedState.add(componentName);
                  error("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", componentName);
                }
              }
            };
            Object.defineProperty(fakeInternalInstance, "_processChildContext", {
              enumerable: false,
              value: function() {
                throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
              }
            });
            Object.freeze(fakeInternalInstance);
          }
          function applyDerivedStateFromProps(workInProgress2, ctor, getDerivedStateFromProps, nextProps) {
            var prevState = workInProgress2.memoizedState;
            var partialState = getDerivedStateFromProps(nextProps, prevState);
            {
              if (workInProgress2.mode & StrictLegacyMode) {
                setIsStrictModeForDevtools(true);
                try {
                  partialState = getDerivedStateFromProps(nextProps, prevState);
                } finally {
                  setIsStrictModeForDevtools(false);
                }
              }
              warnOnUndefinedDerivedState(ctor, partialState);
            }
            var memoizedState = partialState === null || partialState === void 0 ? prevState : assign({}, prevState, partialState);
            workInProgress2.memoizedState = memoizedState;
            if (workInProgress2.lanes === NoLanes) {
              var updateQueue = workInProgress2.updateQueue;
              updateQueue.baseState = memoizedState;
            }
          }
          var classComponentUpdater = {
            isMounted,
            enqueueSetState: function(inst, payload, callback) {
              var fiber = get(inst);
              var eventTime = requestEventTime();
              var lane = requestUpdateLane(fiber);
              var update = createUpdate(eventTime, lane);
              update.payload = payload;
              if (callback !== void 0 && callback !== null) {
                {
                  warnOnInvalidCallback(callback, "setState");
                }
                update.callback = callback;
              }
              var root = enqueueUpdate(fiber, update, lane);
              if (root !== null) {
                scheduleUpdateOnFiber(root, fiber, lane, eventTime);
                entangleTransitions(root, fiber, lane);
              }
              {
                markStateUpdateScheduled(fiber, lane);
              }
            },
            enqueueReplaceState: function(inst, payload, callback) {
              var fiber = get(inst);
              var eventTime = requestEventTime();
              var lane = requestUpdateLane(fiber);
              var update = createUpdate(eventTime, lane);
              update.tag = ReplaceState;
              update.payload = payload;
              if (callback !== void 0 && callback !== null) {
                {
                  warnOnInvalidCallback(callback, "replaceState");
                }
                update.callback = callback;
              }
              var root = enqueueUpdate(fiber, update, lane);
              if (root !== null) {
                scheduleUpdateOnFiber(root, fiber, lane, eventTime);
                entangleTransitions(root, fiber, lane);
              }
              {
                markStateUpdateScheduled(fiber, lane);
              }
            },
            enqueueForceUpdate: function(inst, callback) {
              var fiber = get(inst);
              var eventTime = requestEventTime();
              var lane = requestUpdateLane(fiber);
              var update = createUpdate(eventTime, lane);
              update.tag = ForceUpdate;
              if (callback !== void 0 && callback !== null) {
                {
                  warnOnInvalidCallback(callback, "forceUpdate");
                }
                update.callback = callback;
              }
              var root = enqueueUpdate(fiber, update, lane);
              if (root !== null) {
                scheduleUpdateOnFiber(root, fiber, lane, eventTime);
                entangleTransitions(root, fiber, lane);
              }
              {
                markForceUpdateScheduled(fiber, lane);
              }
            }
          };
          function checkShouldComponentUpdate(workInProgress2, ctor, oldProps, newProps, oldState, newState, nextContext) {
            var instance = workInProgress2.stateNode;
            if (typeof instance.shouldComponentUpdate === "function") {
              var shouldUpdate = instance.shouldComponentUpdate(newProps, newState, nextContext);
              {
                if (workInProgress2.mode & StrictLegacyMode) {
                  setIsStrictModeForDevtools(true);
                  try {
                    shouldUpdate = instance.shouldComponentUpdate(newProps, newState, nextContext);
                  } finally {
                    setIsStrictModeForDevtools(false);
                  }
                }
                if (shouldUpdate === void 0) {
                  error("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", getComponentNameFromType(ctor) || "Component");
                }
              }
              return shouldUpdate;
            }
            if (ctor.prototype && ctor.prototype.isPureReactComponent) {
              return !shallowEqual(oldProps, newProps) || !shallowEqual(oldState, newState);
            }
            return true;
          }
          function checkClassInstance(workInProgress2, ctor, newProps) {
            var instance = workInProgress2.stateNode;
            {
              var name = getComponentNameFromType(ctor) || "Component";
              var renderPresent = instance.render;
              if (!renderPresent) {
                if (ctor.prototype && typeof ctor.prototype.render === "function") {
                  error("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", name);
                } else {
                  error("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", name);
                }
              }
              if (instance.getInitialState && !instance.getInitialState.isReactClassApproved && !instance.state) {
                error("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", name);
              }
              if (instance.getDefaultProps && !instance.getDefaultProps.isReactClassApproved) {
                error("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", name);
              }
              if (instance.propTypes) {
                error("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", name);
              }
              if (instance.contextType) {
                error("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", name);
              }
              {
                if (instance.contextTypes) {
                  error("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", name);
                }
                if (ctor.contextType && ctor.contextTypes && !didWarnAboutContextTypeAndContextTypes.has(ctor)) {
                  didWarnAboutContextTypeAndContextTypes.add(ctor);
                  error("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", name);
                }
              }
              if (typeof instance.componentShouldUpdate === "function") {
                error("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", name);
              }
              if (ctor.prototype && ctor.prototype.isPureReactComponent && typeof instance.shouldComponentUpdate !== "undefined") {
                error("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", getComponentNameFromType(ctor) || "A pure component");
              }
              if (typeof instance.componentDidUnmount === "function") {
                error("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", name);
              }
              if (typeof instance.componentDidReceiveProps === "function") {
                error("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", name);
              }
              if (typeof instance.componentWillRecieveProps === "function") {
                error("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", name);
              }
              if (typeof instance.UNSAFE_componentWillRecieveProps === "function") {
                error("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", name);
              }
              var hasMutatedProps = instance.props !== newProps;
              if (instance.props !== void 0 && hasMutatedProps) {
                error("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", name, name);
              }
              if (instance.defaultProps) {
                error("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", name, name);
              }
              if (typeof instance.getSnapshotBeforeUpdate === "function" && typeof instance.componentDidUpdate !== "function" && !didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate.has(ctor)) {
                didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate.add(ctor);
                error("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", getComponentNameFromType(ctor));
              }
              if (typeof instance.getDerivedStateFromProps === "function") {
                error("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", name);
              }
              if (typeof instance.getDerivedStateFromError === "function") {
                error("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", name);
              }
              if (typeof ctor.getSnapshotBeforeUpdate === "function") {
                error("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", name);
              }
              var _state = instance.state;
              if (_state && (typeof _state !== "object" || isArray(_state))) {
                error("%s.state: must be set to an object or null", name);
              }
              if (typeof instance.getChildContext === "function" && typeof ctor.childContextTypes !== "object") {
                error("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", name);
              }
            }
          }
          function adoptClassInstance(workInProgress2, instance) {
            instance.updater = classComponentUpdater;
            workInProgress2.stateNode = instance;
            set(instance, workInProgress2);
            {
              instance._reactInternalInstance = fakeInternalInstance;
            }
          }
          function constructClassInstance(workInProgress2, ctor, props) {
            var isLegacyContextConsumer = false;
            var unmaskedContext = emptyContextObject;
            var context = emptyContextObject;
            var contextType = ctor.contextType;
            {
              if ("contextType" in ctor) {
                var isValid = (
                  // Allow null for conditional declaration
                  contextType === null || contextType !== void 0 && contextType.$$typeof === REACT_CONTEXT_TYPE && contextType._context === void 0
                );
                if (!isValid && !didWarnAboutInvalidateContextType.has(ctor)) {
                  didWarnAboutInvalidateContextType.add(ctor);
                  var addendum = "";
                  if (contextType === void 0) {
                    addendum = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file.";
                  } else if (typeof contextType !== "object") {
                    addendum = " However, it is set to a " + typeof contextType + ".";
                  } else if (contextType.$$typeof === REACT_PROVIDER_TYPE) {
                    addendum = " Did you accidentally pass the Context.Provider instead?";
                  } else if (contextType._context !== void 0) {
                    addendum = " Did you accidentally pass the Context.Consumer instead?";
                  } else {
                    addendum = " However, it is set to an object with keys {" + Object.keys(contextType).join(", ") + "}.";
                  }
                  error("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", getComponentNameFromType(ctor) || "Component", addendum);
                }
              }
            }
            if (typeof contextType === "object" && contextType !== null) {
              context = readContext(contextType);
            } else {
              unmaskedContext = getUnmaskedContext(workInProgress2, ctor, true);
              var contextTypes = ctor.contextTypes;
              isLegacyContextConsumer = contextTypes !== null && contextTypes !== void 0;
              context = isLegacyContextConsumer ? getMaskedContext(workInProgress2, unmaskedContext) : emptyContextObject;
            }
            var instance = new ctor(props, context);
            {
              if (workInProgress2.mode & StrictLegacyMode) {
                setIsStrictModeForDevtools(true);
                try {
                  instance = new ctor(props, context);
                } finally {
                  setIsStrictModeForDevtools(false);
                }
              }
            }
            var state = workInProgress2.memoizedState = instance.state !== null && instance.state !== void 0 ? instance.state : null;
            adoptClassInstance(workInProgress2, instance);
            {
              if (typeof ctor.getDerivedStateFromProps === "function" && state === null) {
                var componentName = getComponentNameFromType(ctor) || "Component";
                if (!didWarnAboutUninitializedState.has(componentName)) {
                  didWarnAboutUninitializedState.add(componentName);
                  error("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", componentName, instance.state === null ? "null" : "undefined", componentName);
                }
              }
              if (typeof ctor.getDerivedStateFromProps === "function" || typeof instance.getSnapshotBeforeUpdate === "function") {
                var foundWillMountName = null;
                var foundWillReceivePropsName = null;
                var foundWillUpdateName = null;
                if (typeof instance.componentWillMount === "function" && instance.componentWillMount.__suppressDeprecationWarning !== true) {
                  foundWillMountName = "componentWillMount";
                } else if (typeof instance.UNSAFE_componentWillMount === "function") {
                  foundWillMountName = "UNSAFE_componentWillMount";
                }
                if (typeof instance.componentWillReceiveProps === "function" && instance.componentWillReceiveProps.__suppressDeprecationWarning !== true) {
                  foundWillReceivePropsName = "componentWillReceiveProps";
                } else if (typeof instance.UNSAFE_componentWillReceiveProps === "function") {
                  foundWillReceivePropsName = "UNSAFE_componentWillReceiveProps";
                }
                if (typeof instance.componentWillUpdate === "function" && instance.componentWillUpdate.__suppressDeprecationWarning !== true) {
                  foundWillUpdateName = "componentWillUpdate";
                } else if (typeof instance.UNSAFE_componentWillUpdate === "function") {
                  foundWillUpdateName = "UNSAFE_componentWillUpdate";
                }
                if (foundWillMountName !== null || foundWillReceivePropsName !== null || foundWillUpdateName !== null) {
                  var _componentName = getComponentNameFromType(ctor) || "Component";
                  var newApiName = typeof ctor.getDerivedStateFromProps === "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
                  if (!didWarnAboutLegacyLifecyclesAndDerivedState.has(_componentName)) {
                    didWarnAboutLegacyLifecyclesAndDerivedState.add(_componentName);
                    error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n%s uses %s but also contains the following legacy lifecycles:%s%s%s\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://reactjs.org/link/unsafe-component-lifecycles", _componentName, newApiName, foundWillMountName !== null ? "\n  " + foundWillMountName : "", foundWillReceivePropsName !== null ? "\n  " + foundWillReceivePropsName : "", foundWillUpdateName !== null ? "\n  " + foundWillUpdateName : "");
                  }
                }
              }
            }
            if (isLegacyContextConsumer) {
              cacheContext(workInProgress2, unmaskedContext, context);
            }
            return instance;
          }
          function callComponentWillMount(workInProgress2, instance) {
            var oldState = instance.state;
            if (typeof instance.componentWillMount === "function") {
              instance.componentWillMount();
            }
            if (typeof instance.UNSAFE_componentWillMount === "function") {
              instance.UNSAFE_componentWillMount();
            }
            if (oldState !== instance.state) {
              {
                error("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", getComponentNameFromFiber(workInProgress2) || "Component");
              }
              classComponentUpdater.enqueueReplaceState(instance, instance.state, null);
            }
          }
          function callComponentWillReceiveProps(workInProgress2, instance, newProps, nextContext) {
            var oldState = instance.state;
            if (typeof instance.componentWillReceiveProps === "function") {
              instance.componentWillReceiveProps(newProps, nextContext);
            }
            if (typeof instance.UNSAFE_componentWillReceiveProps === "function") {
              instance.UNSAFE_componentWillReceiveProps(newProps, nextContext);
            }
            if (instance.state !== oldState) {
              {
                var componentName = getComponentNameFromFiber(workInProgress2) || "Component";
                if (!didWarnAboutStateAssignmentForComponent.has(componentName)) {
                  didWarnAboutStateAssignmentForComponent.add(componentName);
                  error("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", componentName);
                }
              }
              classComponentUpdater.enqueueReplaceState(instance, instance.state, null);
            }
          }
          function mountClassInstance(workInProgress2, ctor, newProps, renderLanes2) {
            {
              checkClassInstance(workInProgress2, ctor, newProps);
            }
            var instance = workInProgress2.stateNode;
            instance.props = newProps;
            instance.state = workInProgress2.memoizedState;
            instance.refs = emptyRefsObject;
            initializeUpdateQueue(workInProgress2);
            var contextType = ctor.contextType;
            if (typeof contextType === "object" && contextType !== null) {
              instance.context = readContext(contextType);
            } else {
              var unmaskedContext = getUnmaskedContext(workInProgress2, ctor, true);
              instance.context = getMaskedContext(workInProgress2, unmaskedContext);
            }
            {
              if (instance.state === newProps) {
                var componentName = getComponentNameFromType(ctor) || "Component";
                if (!didWarnAboutDirectlyAssigningPropsToState.has(componentName)) {
                  didWarnAboutDirectlyAssigningPropsToState.add(componentName);
                  error("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", componentName);
                }
              }
              if (workInProgress2.mode & StrictLegacyMode) {
                ReactStrictModeWarnings.recordLegacyContextWarning(workInProgress2, instance);
              }
              {
                ReactStrictModeWarnings.recordUnsafeLifecycleWarnings(workInProgress2, instance);
              }
            }
            instance.state = workInProgress2.memoizedState;
            var getDerivedStateFromProps = ctor.getDerivedStateFromProps;
            if (typeof getDerivedStateFromProps === "function") {
              applyDerivedStateFromProps(workInProgress2, ctor, getDerivedStateFromProps, newProps);
              instance.state = workInProgress2.memoizedState;
            }
            if (typeof ctor.getDerivedStateFromProps !== "function" && typeof instance.getSnapshotBeforeUpdate !== "function" && (typeof instance.UNSAFE_componentWillMount === "function" || typeof instance.componentWillMount === "function")) {
              callComponentWillMount(workInProgress2, instance);
              processUpdateQueue(workInProgress2, newProps, instance, renderLanes2);
              instance.state = workInProgress2.memoizedState;
            }
            if (typeof instance.componentDidMount === "function") {
              var fiberFlags = Update;
              {
                fiberFlags |= LayoutStatic;
              }
              if ((workInProgress2.mode & StrictEffectsMode) !== NoMode) {
                fiberFlags |= MountLayoutDev;
              }
              workInProgress2.flags |= fiberFlags;
            }
          }
          function resumeMountClassInstance(workInProgress2, ctor, newProps, renderLanes2) {
            var instance = workInProgress2.stateNode;
            var oldProps = workInProgress2.memoizedProps;
            instance.props = oldProps;
            var oldContext = instance.context;
            var contextType = ctor.contextType;
            var nextContext = emptyContextObject;
            if (typeof contextType === "object" && contextType !== null) {
              nextContext = readContext(contextType);
            } else {
              var nextLegacyUnmaskedContext = getUnmaskedContext(workInProgress2, ctor, true);
              nextContext = getMaskedContext(workInProgress2, nextLegacyUnmaskedContext);
            }
            var getDerivedStateFromProps = ctor.getDerivedStateFromProps;
            var hasNewLifecycles = typeof getDerivedStateFromProps === "function" || typeof instance.getSnapshotBeforeUpdate === "function";
            if (!hasNewLifecycles && (typeof instance.UNSAFE_componentWillReceiveProps === "function" || typeof instance.componentWillReceiveProps === "function")) {
              if (oldProps !== newProps || oldContext !== nextContext) {
                callComponentWillReceiveProps(workInProgress2, instance, newProps, nextContext);
              }
            }
            resetHasForceUpdateBeforeProcessing();
            var oldState = workInProgress2.memoizedState;
            var newState = instance.state = oldState;
            processUpdateQueue(workInProgress2, newProps, instance, renderLanes2);
            newState = workInProgress2.memoizedState;
            if (oldProps === newProps && oldState === newState && !hasContextChanged() && !checkHasForceUpdateAfterProcessing()) {
              if (typeof instance.componentDidMount === "function") {
                var fiberFlags = Update;
                {
                  fiberFlags |= LayoutStatic;
                }
                if ((workInProgress2.mode & StrictEffectsMode) !== NoMode) {
                  fiberFlags |= MountLayoutDev;
                }
                workInProgress2.flags |= fiberFlags;
              }
              return false;
            }
            if (typeof getDerivedStateFromProps === "function") {
              applyDerivedStateFromProps(workInProgress2, ctor, getDerivedStateFromProps, newProps);
              newState = workInProgress2.memoizedState;
            }
            var shouldUpdate = checkHasForceUpdateAfterProcessing() || checkShouldComponentUpdate(workInProgress2, ctor, oldProps, newProps, oldState, newState, nextContext);
            if (shouldUpdate) {
              if (!hasNewLifecycles && (typeof instance.UNSAFE_componentWillMount === "function" || typeof instance.componentWillMount === "function")) {
                if (typeof instance.componentWillMount === "function") {
                  instance.componentWillMount();
                }
                if (typeof instance.UNSAFE_componentWillMount === "function") {
                  instance.UNSAFE_componentWillMount();
                }
              }
              if (typeof instance.componentDidMount === "function") {
                var _fiberFlags = Update;
                {
                  _fiberFlags |= LayoutStatic;
                }
                if ((workInProgress2.mode & StrictEffectsMode) !== NoMode) {
                  _fiberFlags |= MountLayoutDev;
                }
                workInProgress2.flags |= _fiberFlags;
              }
            } else {
              if (typeof instance.componentDidMount === "function") {
                var _fiberFlags2 = Update;
                {
                  _fiberFlags2 |= LayoutStatic;
                }
                if ((workInProgress2.mode & StrictEffectsMode) !== NoMode) {
                  _fiberFlags2 |= MountLayoutDev;
                }
                workInProgress2.flags |= _fiberFlags2;
              }
              workInProgress2.memoizedProps = newProps;
              workInProgress2.memoizedState = newState;
            }
            instance.props = newProps;
            instance.state = newState;
            instance.context = nextContext;
            return shouldUpdate;
          }
          function updateClassInstance(current2, workInProgress2, ctor, newProps, renderLanes2) {
            var instance = workInProgress2.stateNode;
            cloneUpdateQueue(current2, workInProgress2);
            var unresolvedOldProps = workInProgress2.memoizedProps;
            var oldProps = workInProgress2.type === workInProgress2.elementType ? unresolvedOldProps : resolveDefaultProps(workInProgress2.type, unresolvedOldProps);
            instance.props = oldProps;
            var unresolvedNewProps = workInProgress2.pendingProps;
            var oldContext = instance.context;
            var contextType = ctor.contextType;
            var nextContext = emptyContextObject;
            if (typeof contextType === "object" && contextType !== null) {
              nextContext = readContext(contextType);
            } else {
              var nextUnmaskedContext = getUnmaskedContext(workInProgress2, ctor, true);
              nextContext = getMaskedContext(workInProgress2, nextUnmaskedContext);
            }
            var getDerivedStateFromProps = ctor.getDerivedStateFromProps;
            var hasNewLifecycles = typeof getDerivedStateFromProps === "function" || typeof instance.getSnapshotBeforeUpdate === "function";
            if (!hasNewLifecycles && (typeof instance.UNSAFE_componentWillReceiveProps === "function" || typeof instance.componentWillReceiveProps === "function")) {
              if (unresolvedOldProps !== unresolvedNewProps || oldContext !== nextContext) {
                callComponentWillReceiveProps(workInProgress2, instance, newProps, nextContext);
              }
            }
            resetHasForceUpdateBeforeProcessing();
            var oldState = workInProgress2.memoizedState;
            var newState = instance.state = oldState;
            processUpdateQueue(workInProgress2, newProps, instance, renderLanes2);
            newState = workInProgress2.memoizedState;
            if (unresolvedOldProps === unresolvedNewProps && oldState === newState && !hasContextChanged() && !checkHasForceUpdateAfterProcessing() && !enableLazyContextPropagation) {
              if (typeof instance.componentDidUpdate === "function") {
                if (unresolvedOldProps !== current2.memoizedProps || oldState !== current2.memoizedState) {
                  workInProgress2.flags |= Update;
                }
              }
              if (typeof instance.getSnapshotBeforeUpdate === "function") {
                if (unresolvedOldProps !== current2.memoizedProps || oldState !== current2.memoizedState) {
                  workInProgress2.flags |= Snapshot;
                }
              }
              return false;
            }
            if (typeof getDerivedStateFromProps === "function") {
              applyDerivedStateFromProps(workInProgress2, ctor, getDerivedStateFromProps, newProps);
              newState = workInProgress2.memoizedState;
            }
            var shouldUpdate = checkHasForceUpdateAfterProcessing() || checkShouldComponentUpdate(workInProgress2, ctor, oldProps, newProps, oldState, newState, nextContext) || // TODO: In some cases, we'll end up checking if context has changed twice,
            // both before and after `shouldComponentUpdate` has been called. Not ideal,
            // but I'm loath to refactor this function. This only happens for memoized
            // components so it's not that common.
            enableLazyContextPropagation;
            if (shouldUpdate) {
              if (!hasNewLifecycles && (typeof instance.UNSAFE_componentWillUpdate === "function" || typeof instance.componentWillUpdate === "function")) {
                if (typeof instance.componentWillUpdate === "function") {
                  instance.componentWillUpdate(newProps, newState, nextContext);
                }
                if (typeof instance.UNSAFE_componentWillUpdate === "function") {
                  instance.UNSAFE_componentWillUpdate(newProps, newState, nextContext);
                }
              }
              if (typeof instance.componentDidUpdate === "function") {
                workInProgress2.flags |= Update;
              }
              if (typeof instance.getSnapshotBeforeUpdate === "function") {
                workInProgress2.flags |= Snapshot;
              }
            } else {
              if (typeof instance.componentDidUpdate === "function") {
                if (unresolvedOldProps !== current2.memoizedProps || oldState !== current2.memoizedState) {
                  workInProgress2.flags |= Update;
                }
              }
              if (typeof instance.getSnapshotBeforeUpdate === "function") {
                if (unresolvedOldProps !== current2.memoizedProps || oldState !== current2.memoizedState) {
                  workInProgress2.flags |= Snapshot;
                }
              }
              workInProgress2.memoizedProps = newProps;
              workInProgress2.memoizedState = newState;
            }
            instance.props = newProps;
            instance.state = newState;
            instance.context = nextContext;
            return shouldUpdate;
          }
          var didWarnAboutMaps;
          var didWarnAboutGenerators;
          var didWarnAboutStringRefs;
          var ownerHasKeyUseWarning;
          var ownerHasFunctionTypeWarning;
          var warnForMissingKey = function(child, returnFiber) {
          };
          {
            didWarnAboutMaps = false;
            didWarnAboutGenerators = false;
            didWarnAboutStringRefs = {};
            ownerHasKeyUseWarning = {};
            ownerHasFunctionTypeWarning = {};
            warnForMissingKey = function(child, returnFiber) {
              if (child === null || typeof child !== "object") {
                return;
              }
              if (!child._store || child._store.validated || child.key != null) {
                return;
              }
              if (typeof child._store !== "object") {
                throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
              }
              child._store.validated = true;
              var componentName = getComponentNameFromFiber(returnFiber) || "Component";
              if (ownerHasKeyUseWarning[componentName]) {
                return;
              }
              ownerHasKeyUseWarning[componentName] = true;
              error('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.');
            };
          }
          function coerceRef(returnFiber, current2, element) {
            var mixedRef = element.ref;
            if (mixedRef !== null && typeof mixedRef !== "function" && typeof mixedRef !== "object") {
              {
                if ((returnFiber.mode & StrictLegacyMode || warnAboutStringRefs) && // We warn in ReactElement.js if owner and self are equal for string refs
                // because these cannot be automatically converted to an arrow function
                // using a codemod. Therefore, we don't have to warn about string refs again.
                !(element._owner && element._self && element._owner.stateNode !== element._self)) {
                  var componentName = getComponentNameFromFiber(returnFiber) || "Component";
                  if (!didWarnAboutStringRefs[componentName]) {
                    {
                      error('A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', mixedRef);
                    }
                    didWarnAboutStringRefs[componentName] = true;
                  }
                }
              }
              if (element._owner) {
                var owner = element._owner;
                var inst;
                if (owner) {
                  var ownerFiber = owner;
                  if (ownerFiber.tag !== ClassComponent) {
                    throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
                  }
                  inst = ownerFiber.stateNode;
                }
                if (!inst) {
                  throw new Error("Missing owner for string ref " + mixedRef + ". This error is likely caused by a bug in React. Please file an issue.");
                }
                var resolvedInst = inst;
                {
                  checkPropStringCoercion(mixedRef, "ref");
                }
                var stringRef = "" + mixedRef;
                if (current2 !== null && current2.ref !== null && typeof current2.ref === "function" && current2.ref._stringRef === stringRef) {
                  return current2.ref;
                }
                var ref = function(value) {
                  var refs = resolvedInst.refs;
                  if (refs === emptyRefsObject) {
                    refs = resolvedInst.refs = {};
                  }
                  if (value === null) {
                    delete refs[stringRef];
                  } else {
                    refs[stringRef] = value;
                  }
                };
                ref._stringRef = stringRef;
                return ref;
              } else {
                if (typeof mixedRef !== "string") {
                  throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
                }
                if (!element._owner) {
                  throw new Error("Element ref was specified as a string (" + mixedRef + ") but no owner was set. This could happen for one of the following reasons:\n1. You may be adding a ref to a function component\n2. You may be adding a ref to a component that was not created inside a component's render method\n3. You have multiple copies of React loaded\nSee https://reactjs.org/link/refs-must-have-owner for more information.");
                }
              }
            }
            return mixedRef;
          }
          function throwOnInvalidObjectType(returnFiber, newChild) {
            var childString = Object.prototype.toString.call(newChild);
            throw new Error("Objects are not valid as a React child (found: " + (childString === "[object Object]" ? "object with keys {" + Object.keys(newChild).join(", ") + "}" : childString) + "). If you meant to render a collection of children, use an array instead.");
          }
          function warnOnFunctionType(returnFiber) {
            {
              var componentName = getComponentNameFromFiber(returnFiber) || "Component";
              if (ownerHasFunctionTypeWarning[componentName]) {
                return;
              }
              ownerHasFunctionTypeWarning[componentName] = true;
              error("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
            }
          }
          function resolveLazy(lazyType) {
            var payload = lazyType._payload;
            var init = lazyType._init;
            return init(payload);
          }
          function ChildReconciler(shouldTrackSideEffects) {
            function deleteChild(returnFiber, childToDelete) {
              if (!shouldTrackSideEffects) {
                return;
              }
              var deletions = returnFiber.deletions;
              if (deletions === null) {
                returnFiber.deletions = [childToDelete];
                returnFiber.flags |= ChildDeletion;
              } else {
                deletions.push(childToDelete);
              }
            }
            function deleteRemainingChildren(returnFiber, currentFirstChild) {
              if (!shouldTrackSideEffects) {
                return null;
              }
              var childToDelete = currentFirstChild;
              while (childToDelete !== null) {
                deleteChild(returnFiber, childToDelete);
                childToDelete = childToDelete.sibling;
              }
              return null;
            }
            function mapRemainingChildren(returnFiber, currentFirstChild) {
              var existingChildren = /* @__PURE__ */ new Map();
              var existingChild = currentFirstChild;
              while (existingChild !== null) {
                if (existingChild.key !== null) {
                  existingChildren.set(existingChild.key, existingChild);
                } else {
                  existingChildren.set(existingChild.index, existingChild);
                }
                existingChild = existingChild.sibling;
              }
              return existingChildren;
            }
            function useFiber(fiber, pendingProps) {
              var clone = createWorkInProgress(fiber, pendingProps);
              clone.index = 0;
              clone.sibling = null;
              return clone;
            }
            function placeChild(newFiber, lastPlacedIndex, newIndex) {
              newFiber.index = newIndex;
              if (!shouldTrackSideEffects) {
                newFiber.flags |= Forked;
                return lastPlacedIndex;
              }
              var current2 = newFiber.alternate;
              if (current2 !== null) {
                var oldIndex = current2.index;
                if (oldIndex < lastPlacedIndex) {
                  newFiber.flags |= Placement;
                  return lastPlacedIndex;
                } else {
                  return oldIndex;
                }
              } else {
                newFiber.flags |= Placement;
                return lastPlacedIndex;
              }
            }
            function placeSingleChild(newFiber) {
              if (shouldTrackSideEffects && newFiber.alternate === null) {
                newFiber.flags |= Placement;
              }
              return newFiber;
            }
            function updateTextNode(returnFiber, current2, textContent, lanes) {
              if (current2 === null || current2.tag !== HostText) {
                var created = createFiberFromText(textContent, returnFiber.mode, lanes);
                created.return = returnFiber;
                return created;
              } else {
                var existing = useFiber(current2, textContent);
                existing.return = returnFiber;
                return existing;
              }
            }
            function updateElement(returnFiber, current2, element, lanes) {
              var elementType = element.type;
              if (elementType === REACT_FRAGMENT_TYPE) {
                return updateFragment2(returnFiber, current2, element.props.children, lanes, element.key);
              }
              if (current2 !== null) {
                if (current2.elementType === elementType || // Keep this check inline so it only runs on the false path:
                isCompatibleFamilyForHotReloading(current2, element) || // Lazy types should reconcile their resolved type.
                // We need to do this after the Hot Reloading check above,
                // because hot reloading has different semantics than prod because
                // it doesn't resuspend. So we can't let the call below suspend.
                typeof elementType === "object" && elementType !== null && elementType.$$typeof === REACT_LAZY_TYPE && resolveLazy(elementType) === current2.type) {
                  var existing = useFiber(current2, element.props);
                  existing.ref = coerceRef(returnFiber, current2, element);
                  existing.return = returnFiber;
                  {
                    existing._debugSource = element._source;
                    existing._debugOwner = element._owner;
                  }
                  return existing;
                }
              }
              var created = createFiberFromElement(element, returnFiber.mode, lanes);
              created.ref = coerceRef(returnFiber, current2, element);
              created.return = returnFiber;
              return created;
            }
            function updatePortal(returnFiber, current2, portal, lanes) {
              if (current2 === null || current2.tag !== HostPortal || current2.stateNode.containerInfo !== portal.containerInfo || current2.stateNode.implementation !== portal.implementation) {
                var created = createFiberFromPortal(portal, returnFiber.mode, lanes);
                created.return = returnFiber;
                return created;
              } else {
                var existing = useFiber(current2, portal.children || []);
                existing.return = returnFiber;
                return existing;
              }
            }
            function updateFragment2(returnFiber, current2, fragment, lanes, key) {
              if (current2 === null || current2.tag !== Fragment) {
                var created = createFiberFromFragment(fragment, returnFiber.mode, lanes, key);
                created.return = returnFiber;
                return created;
              } else {
                var existing = useFiber(current2, fragment);
                existing.return = returnFiber;
                return existing;
              }
            }
            function createChild(returnFiber, newChild, lanes) {
              if (typeof newChild === "string" && newChild !== "" || typeof newChild === "number") {
                var created = createFiberFromText("" + newChild, returnFiber.mode, lanes);
                created.return = returnFiber;
                return created;
              }
              if (typeof newChild === "object" && newChild !== null) {
                switch (newChild.$$typeof) {
                  case REACT_ELEMENT_TYPE: {
                    var _created = createFiberFromElement(newChild, returnFiber.mode, lanes);
                    _created.ref = coerceRef(returnFiber, null, newChild);
                    _created.return = returnFiber;
                    return _created;
                  }
                  case REACT_PORTAL_TYPE: {
                    var _created2 = createFiberFromPortal(newChild, returnFiber.mode, lanes);
                    _created2.return = returnFiber;
                    return _created2;
                  }
                  case REACT_LAZY_TYPE: {
                    var payload = newChild._payload;
                    var init = newChild._init;
                    return createChild(returnFiber, init(payload), lanes);
                  }
                }
                if (isArray(newChild) || getIteratorFn(newChild)) {
                  var _created3 = createFiberFromFragment(newChild, returnFiber.mode, lanes, null);
                  _created3.return = returnFiber;
                  return _created3;
                }
                throwOnInvalidObjectType(returnFiber, newChild);
              }
              {
                if (typeof newChild === "function") {
                  warnOnFunctionType(returnFiber);
                }
              }
              return null;
            }
            function updateSlot(returnFiber, oldFiber, newChild, lanes) {
              var key = oldFiber !== null ? oldFiber.key : null;
              if (typeof newChild === "string" && newChild !== "" || typeof newChild === "number") {
                if (key !== null) {
                  return null;
                }
                return updateTextNode(returnFiber, oldFiber, "" + newChild, lanes);
              }
              if (typeof newChild === "object" && newChild !== null) {
                switch (newChild.$$typeof) {
                  case REACT_ELEMENT_TYPE: {
                    if (newChild.key === key) {
                      return updateElement(returnFiber, oldFiber, newChild, lanes);
                    } else {
                      return null;
                    }
                  }
                  case REACT_PORTAL_TYPE: {
                    if (newChild.key === key) {
                      return updatePortal(returnFiber, oldFiber, newChild, lanes);
                    } else {
                      return null;
                    }
                  }
                  case REACT_LAZY_TYPE: {
                    var payload = newChild._payload;
                    var init = newChild._init;
                    return updateSlot(returnFiber, oldFiber, init(payload), lanes);
                  }
                }
                if (isArray(newChild) || getIteratorFn(newChild)) {
                  if (key !== null) {
                    return null;
                  }
                  return updateFragment2(returnFiber, oldFiber, newChild, lanes, null);
                }
                throwOnInvalidObjectType(returnFiber, newChild);
              }
              {
                if (typeof newChild === "function") {
                  warnOnFunctionType(returnFiber);
                }
              }
              return null;
            }
            function updateFromMap(existingChildren, returnFiber, newIdx, newChild, lanes) {
              if (typeof newChild === "string" && newChild !== "" || typeof newChild === "number") {
                var matchedFiber = existingChildren.get(newIdx) || null;
                return updateTextNode(returnFiber, matchedFiber, "" + newChild, lanes);
              }
              if (typeof newChild === "object" && newChild !== null) {
                switch (newChild.$$typeof) {
                  case REACT_ELEMENT_TYPE: {
                    var _matchedFiber = existingChildren.get(newChild.key === null ? newIdx : newChild.key) || null;
                    return updateElement(returnFiber, _matchedFiber, newChild, lanes);
                  }
                  case REACT_PORTAL_TYPE: {
                    var _matchedFiber2 = existingChildren.get(newChild.key === null ? newIdx : newChild.key) || null;
                    return updatePortal(returnFiber, _matchedFiber2, newChild, lanes);
                  }
                  case REACT_LAZY_TYPE:
                    var payload = newChild._payload;
                    var init = newChild._init;
                    return updateFromMap(existingChildren, returnFiber, newIdx, init(payload), lanes);
                }
                if (isArray(newChild) || getIteratorFn(newChild)) {
                  var _matchedFiber3 = existingChildren.get(newIdx) || null;
                  return updateFragment2(returnFiber, _matchedFiber3, newChild, lanes, null);
                }
                throwOnInvalidObjectType(returnFiber, newChild);
              }
              {
                if (typeof newChild === "function") {
                  warnOnFunctionType(returnFiber);
                }
              }
              return null;
            }
            function warnOnInvalidKey(child, knownKeys, returnFiber) {
              {
                if (typeof child !== "object" || child === null) {
                  return knownKeys;
                }
                switch (child.$$typeof) {
                  case REACT_ELEMENT_TYPE:
                  case REACT_PORTAL_TYPE:
                    warnForMissingKey(child, returnFiber);
                    var key = child.key;
                    if (typeof key !== "string") {
                      break;
                    }
                    if (knownKeys === null) {
                      knownKeys = /* @__PURE__ */ new Set();
                      knownKeys.add(key);
                      break;
                    }
                    if (!knownKeys.has(key)) {
                      knownKeys.add(key);
                      break;
                    }
                    error("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted \u2014 the behavior is unsupported and could change in a future version.", key);
                    break;
                  case REACT_LAZY_TYPE:
                    var payload = child._payload;
                    var init = child._init;
                    warnOnInvalidKey(init(payload), knownKeys, returnFiber);
                    break;
                }
              }
              return knownKeys;
            }
            function reconcileChildrenArray(returnFiber, currentFirstChild, newChildren, lanes) {
              {
                var knownKeys = null;
                for (var i = 0; i < newChildren.length; i++) {
                  var child = newChildren[i];
                  knownKeys = warnOnInvalidKey(child, knownKeys, returnFiber);
                }
              }
              var resultingFirstChild = null;
              var previousNewFiber = null;
              var oldFiber = currentFirstChild;
              var lastPlacedIndex = 0;
              var newIdx = 0;
              var nextOldFiber = null;
              for (; oldFiber !== null && newIdx < newChildren.length; newIdx++) {
                if (oldFiber.index > newIdx) {
                  nextOldFiber = oldFiber;
                  oldFiber = null;
                } else {
                  nextOldFiber = oldFiber.sibling;
                }
                var newFiber = updateSlot(returnFiber, oldFiber, newChildren[newIdx], lanes);
                if (newFiber === null) {
                  if (oldFiber === null) {
                    oldFiber = nextOldFiber;
                  }
                  break;
                }
                if (shouldTrackSideEffects) {
                  if (oldFiber && newFiber.alternate === null) {
                    deleteChild(returnFiber, oldFiber);
                  }
                }
                lastPlacedIndex = placeChild(newFiber, lastPlacedIndex, newIdx);
                if (previousNewFiber === null) {
                  resultingFirstChild = newFiber;
                } else {
                  previousNewFiber.sibling = newFiber;
                }
                previousNewFiber = newFiber;
                oldFiber = nextOldFiber;
              }
              if (newIdx === newChildren.length) {
                deleteRemainingChildren(returnFiber, oldFiber);
                if (getIsHydrating()) {
                  var numberOfForks = newIdx;
                  pushTreeFork(returnFiber, numberOfForks);
                }
                return resultingFirstChild;
              }
              if (oldFiber === null) {
                for (; newIdx < newChildren.length; newIdx++) {
                  var _newFiber = createChild(returnFiber, newChildren[newIdx], lanes);
                  if (_newFiber === null) {
                    continue;
                  }
                  lastPlacedIndex = placeChild(_newFiber, lastPlacedIndex, newIdx);
                  if (previousNewFiber === null) {
                    resultingFirstChild = _newFiber;
                  } else {
                    previousNewFiber.sibling = _newFiber;
                  }
                  previousNewFiber = _newFiber;
                }
                if (getIsHydrating()) {
                  var _numberOfForks = newIdx;
                  pushTreeFork(returnFiber, _numberOfForks);
                }
                return resultingFirstChild;
              }
              var existingChildren = mapRemainingChildren(returnFiber, oldFiber);
              for (; newIdx < newChildren.length; newIdx++) {
                var _newFiber2 = updateFromMap(existingChildren, returnFiber, newIdx, newChildren[newIdx], lanes);
                if (_newFiber2 !== null) {
                  if (shouldTrackSideEffects) {
                    if (_newFiber2.alternate !== null) {
                      existingChildren.delete(_newFiber2.key === null ? newIdx : _newFiber2.key);
                    }
                  }
                  lastPlacedIndex = placeChild(_newFiber2, lastPlacedIndex, newIdx);
                  if (previousNewFiber === null) {
                    resultingFirstChild = _newFiber2;
                  } else {
                    previousNewFiber.sibling = _newFiber2;
                  }
                  previousNewFiber = _newFiber2;
                }
              }
              if (shouldTrackSideEffects) {
                existingChildren.forEach(function(child2) {
                  return deleteChild(returnFiber, child2);
                });
              }
              if (getIsHydrating()) {
                var _numberOfForks2 = newIdx;
                pushTreeFork(returnFiber, _numberOfForks2);
              }
              return resultingFirstChild;
            }
            function reconcileChildrenIterator(returnFiber, currentFirstChild, newChildrenIterable, lanes) {
              var iteratorFn = getIteratorFn(newChildrenIterable);
              if (typeof iteratorFn !== "function") {
                throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
              }
              {
                if (typeof Symbol === "function" && // $FlowFixMe Flow doesn't know about toStringTag
                newChildrenIterable[Symbol.toStringTag] === "Generator") {
                  if (!didWarnAboutGenerators) {
                    error("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers.");
                  }
                  didWarnAboutGenerators = true;
                }
                if (newChildrenIterable.entries === iteratorFn) {
                  if (!didWarnAboutMaps) {
                    error("Using Maps as children is not supported. Use an array of keyed ReactElements instead.");
                  }
                  didWarnAboutMaps = true;
                }
                var _newChildren = iteratorFn.call(newChildrenIterable);
                if (_newChildren) {
                  var knownKeys = null;
                  var _step = _newChildren.next();
                  for (; !_step.done; _step = _newChildren.next()) {
                    var child = _step.value;
                    knownKeys = warnOnInvalidKey(child, knownKeys, returnFiber);
                  }
                }
              }
              var newChildren = iteratorFn.call(newChildrenIterable);
              if (newChildren == null) {
                throw new Error("An iterable object provided no iterator.");
              }
              var resultingFirstChild = null;
              var previousNewFiber = null;
              var oldFiber = currentFirstChild;
              var lastPlacedIndex = 0;
              var newIdx = 0;
              var nextOldFiber = null;
              var step = newChildren.next();
              for (; oldFiber !== null && !step.done; newIdx++, step = newChildren.next()) {
                if (oldFiber.index > newIdx) {
                  nextOldFiber = oldFiber;
                  oldFiber = null;
                } else {
                  nextOldFiber = oldFiber.sibling;
                }
                var newFiber = updateSlot(returnFiber, oldFiber, step.value, lanes);
                if (newFiber === null) {
                  if (oldFiber === null) {
                    oldFiber = nextOldFiber;
                  }
                  break;
                }
                if (shouldTrackSideEffects) {
                  if (oldFiber && newFiber.alternate === null) {
                    deleteChild(returnFiber, oldFiber);
                  }
                }
                lastPlacedIndex = placeChild(newFiber, lastPlacedIndex, newIdx);
                if (previousNewFiber === null) {
                  resultingFirstChild = newFiber;
                } else {
                  previousNewFiber.sibling = newFiber;
                }
                previousNewFiber = newFiber;
                oldFiber = nextOldFiber;
              }
              if (step.done) {
                deleteRemainingChildren(returnFiber, oldFiber);
                if (getIsHydrating()) {
                  var numberOfForks = newIdx;
                  pushTreeFork(returnFiber, numberOfForks);
                }
                return resultingFirstChild;
              }
              if (oldFiber === null) {
                for (; !step.done; newIdx++, step = newChildren.next()) {
                  var _newFiber3 = createChild(returnFiber, step.value, lanes);
                  if (_newFiber3 === null) {
                    continue;
                  }
                  lastPlacedIndex = placeChild(_newFiber3, lastPlacedIndex, newIdx);
                  if (previousNewFiber === null) {
                    resultingFirstChild = _newFiber3;
                  } else {
                    previousNewFiber.sibling = _newFiber3;
                  }
                  previousNewFiber = _newFiber3;
                }
                if (getIsHydrating()) {
                  var _numberOfForks3 = newIdx;
                  pushTreeFork(returnFiber, _numberOfForks3);
                }
                return resultingFirstChild;
              }
              var existingChildren = mapRemainingChildren(returnFiber, oldFiber);
              for (; !step.done; newIdx++, step = newChildren.next()) {
                var _newFiber4 = updateFromMap(existingChildren, returnFiber, newIdx, step.value, lanes);
                if (_newFiber4 !== null) {
                  if (shouldTrackSideEffects) {
                    if (_newFiber4.alternate !== null) {
                      existingChildren.delete(_newFiber4.key === null ? newIdx : _newFiber4.key);
                    }
                  }
                  lastPlacedIndex = placeChild(_newFiber4, lastPlacedIndex, newIdx);
                  if (previousNewFiber === null) {
                    resultingFirstChild = _newFiber4;
                  } else {
                    previousNewFiber.sibling = _newFiber4;
                  }
                  previousNewFiber = _newFiber4;
                }
              }
              if (shouldTrackSideEffects) {
                existingChildren.forEach(function(child2) {
                  return deleteChild(returnFiber, child2);
                });
              }
              if (getIsHydrating()) {
                var _numberOfForks4 = newIdx;
                pushTreeFork(returnFiber, _numberOfForks4);
              }
              return resultingFirstChild;
            }
            function reconcileSingleTextNode(returnFiber, currentFirstChild, textContent, lanes) {
              if (currentFirstChild !== null && currentFirstChild.tag === HostText) {
                deleteRemainingChildren(returnFiber, currentFirstChild.sibling);
                var existing = useFiber(currentFirstChild, textContent);
                existing.return = returnFiber;
                return existing;
              }
              deleteRemainingChildren(returnFiber, currentFirstChild);
              var created = createFiberFromText(textContent, returnFiber.mode, lanes);
              created.return = returnFiber;
              return created;
            }
            function reconcileSingleElement(returnFiber, currentFirstChild, element, lanes) {
              var key = element.key;
              var child = currentFirstChild;
              while (child !== null) {
                if (child.key === key) {
                  var elementType = element.type;
                  if (elementType === REACT_FRAGMENT_TYPE) {
                    if (child.tag === Fragment) {
                      deleteRemainingChildren(returnFiber, child.sibling);
                      var existing = useFiber(child, element.props.children);
                      existing.return = returnFiber;
                      {
                        existing._debugSource = element._source;
                        existing._debugOwner = element._owner;
                      }
                      return existing;
                    }
                  } else {
                    if (child.elementType === elementType || // Keep this check inline so it only runs on the false path:
                    isCompatibleFamilyForHotReloading(child, element) || // Lazy types should reconcile their resolved type.
                    // We need to do this after the Hot Reloading check above,
                    // because hot reloading has different semantics than prod because
                    // it doesn't resuspend. So we can't let the call below suspend.
                    typeof elementType === "object" && elementType !== null && elementType.$$typeof === REACT_LAZY_TYPE && resolveLazy(elementType) === child.type) {
                      deleteRemainingChildren(returnFiber, child.sibling);
                      var _existing = useFiber(child, element.props);
                      _existing.ref = coerceRef(returnFiber, child, element);
                      _existing.return = returnFiber;
                      {
                        _existing._debugSource = element._source;
                        _existing._debugOwner = element._owner;
                      }
                      return _existing;
                    }
                  }
                  deleteRemainingChildren(returnFiber, child);
                  break;
                } else {
                  deleteChild(returnFiber, child);
                }
                child = child.sibling;
              }
              if (element.type === REACT_FRAGMENT_TYPE) {
                var created = createFiberFromFragment(element.props.children, returnFiber.mode, lanes, element.key);
                created.return = returnFiber;
                return created;
              } else {
                var _created4 = createFiberFromElement(element, returnFiber.mode, lanes);
                _created4.ref = coerceRef(returnFiber, currentFirstChild, element);
                _created4.return = returnFiber;
                return _created4;
              }
            }
            function reconcileSinglePortal(returnFiber, currentFirstChild, portal, lanes) {
              var key = portal.key;
              var child = currentFirstChild;
              while (child !== null) {
                if (child.key === key) {
                  if (child.tag === HostPortal && child.stateNode.containerInfo === portal.containerInfo && child.stateNode.implementation === portal.implementation) {
                    deleteRemainingChildren(returnFiber, child.sibling);
                    var existing = useFiber(child, portal.children || []);
                    existing.return = returnFiber;
                    return existing;
                  } else {
                    deleteRemainingChildren(returnFiber, child);
                    break;
                  }
                } else {
                  deleteChild(returnFiber, child);
                }
                child = child.sibling;
              }
              var created = createFiberFromPortal(portal, returnFiber.mode, lanes);
              created.return = returnFiber;
              return created;
            }
            function reconcileChildFibers2(returnFiber, currentFirstChild, newChild, lanes) {
              var isUnkeyedTopLevelFragment = typeof newChild === "object" && newChild !== null && newChild.type === REACT_FRAGMENT_TYPE && newChild.key === null;
              if (isUnkeyedTopLevelFragment) {
                newChild = newChild.props.children;
              }
              if (typeof newChild === "object" && newChild !== null) {
                switch (newChild.$$typeof) {
                  case REACT_ELEMENT_TYPE:
                    return placeSingleChild(reconcileSingleElement(returnFiber, currentFirstChild, newChild, lanes));
                  case REACT_PORTAL_TYPE:
                    return placeSingleChild(reconcileSinglePortal(returnFiber, currentFirstChild, newChild, lanes));
                  case REACT_LAZY_TYPE:
                    var payload = newChild._payload;
                    var init = newChild._init;
                    return reconcileChildFibers2(returnFiber, currentFirstChild, init(payload), lanes);
                }
                if (isArray(newChild)) {
                  return reconcileChildrenArray(returnFiber, currentFirstChild, newChild, lanes);
                }
                if (getIteratorFn(newChild)) {
                  return reconcileChildrenIterator(returnFiber, currentFirstChild, newChild, lanes);
                }
                throwOnInvalidObjectType(returnFiber, newChild);
              }
              if (typeof newChild === "string" && newChild !== "" || typeof newChild === "number") {
                return placeSingleChild(reconcileSingleTextNode(returnFiber, currentFirstChild, "" + newChild, lanes));
              }
              {
                if (typeof newChild === "function") {
                  warnOnFunctionType(returnFiber);
                }
              }
              return deleteRemainingChildren(returnFiber, currentFirstChild);
            }
            return reconcileChildFibers2;
          }
          var reconcileChildFibers = ChildReconciler(true);
          var mountChildFibers = ChildReconciler(false);
          function cloneChildFibers(current2, workInProgress2) {
            if (current2 !== null && workInProgress2.child !== current2.child) {
              throw new Error("Resuming work not yet implemented.");
            }
            if (workInProgress2.child === null) {
              return;
            }
            var currentChild = workInProgress2.child;
            var newChild = createWorkInProgress(currentChild, currentChild.pendingProps);
            workInProgress2.child = newChild;
            newChild.return = workInProgress2;
            while (currentChild.sibling !== null) {
              currentChild = currentChild.sibling;
              newChild = newChild.sibling = createWorkInProgress(currentChild, currentChild.pendingProps);
              newChild.return = workInProgress2;
            }
            newChild.sibling = null;
          }
          function resetChildFibers(workInProgress2, lanes) {
            var child = workInProgress2.child;
            while (child !== null) {
              resetWorkInProgress(child, lanes);
              child = child.sibling;
            }
          }
          var NO_CONTEXT = {};
          var contextStackCursor$1 = createCursor(NO_CONTEXT);
          var contextFiberStackCursor = createCursor(NO_CONTEXT);
          var rootInstanceStackCursor = createCursor(NO_CONTEXT);
          function requiredContext(c) {
            if (c === NO_CONTEXT) {
              throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
            }
            return c;
          }
          function getRootHostContainer() {
            var rootInstance = requiredContext(rootInstanceStackCursor.current);
            return rootInstance;
          }
          function pushHostContainer(fiber, nextRootInstance) {
            push(rootInstanceStackCursor, nextRootInstance, fiber);
            push(contextFiberStackCursor, fiber, fiber);
            push(contextStackCursor$1, NO_CONTEXT, fiber);
            var nextRootContext = getRootHostContext(nextRootInstance);
            pop(contextStackCursor$1, fiber);
            push(contextStackCursor$1, nextRootContext, fiber);
          }
          function popHostContainer(fiber) {
            pop(contextStackCursor$1, fiber);
            pop(contextFiberStackCursor, fiber);
            pop(rootInstanceStackCursor, fiber);
          }
          function getHostContext() {
            var context = requiredContext(contextStackCursor$1.current);
            return context;
          }
          function pushHostContext(fiber) {
            var rootInstance = requiredContext(rootInstanceStackCursor.current);
            var context = requiredContext(contextStackCursor$1.current);
            var nextContext = getChildHostContext(context, fiber.type, rootInstance);
            if (context === nextContext) {
              return;
            }
            push(contextFiberStackCursor, fiber, fiber);
            push(contextStackCursor$1, nextContext, fiber);
          }
          function popHostContext(fiber) {
            if (contextFiberStackCursor.current !== fiber) {
              return;
            }
            pop(contextStackCursor$1, fiber);
            pop(contextFiberStackCursor, fiber);
          }
          var DefaultSuspenseContext = 0;
          var SubtreeSuspenseContextMask = 1;
          var InvisibleParentSuspenseContext = 1;
          var ForceSuspenseFallback = 2;
          var suspenseStackCursor = createCursor(DefaultSuspenseContext);
          function hasSuspenseContext(parentContext, flag) {
            return (parentContext & flag) !== 0;
          }
          function setDefaultShallowSuspenseContext(parentContext) {
            return parentContext & SubtreeSuspenseContextMask;
          }
          function setShallowSuspenseContext(parentContext, shallowContext) {
            return parentContext & SubtreeSuspenseContextMask | shallowContext;
          }
          function addSubtreeSuspenseContext(parentContext, subtreeContext) {
            return parentContext | subtreeContext;
          }
          function pushSuspenseContext(fiber, newContext) {
            push(suspenseStackCursor, newContext, fiber);
          }
          function popSuspenseContext(fiber) {
            pop(suspenseStackCursor, fiber);
          }
          function shouldCaptureSuspense(workInProgress2, hasInvisibleParent) {
            var nextState = workInProgress2.memoizedState;
            if (nextState !== null) {
              if (nextState.dehydrated !== null) {
                return true;
              }
              return false;
            }
            var props = workInProgress2.memoizedProps;
            {
              return true;
            }
          }
          function findFirstSuspended(row) {
            var node = row;
            while (node !== null) {
              if (node.tag === SuspenseComponent) {
                var state = node.memoizedState;
                if (state !== null) {
                  var dehydrated = state.dehydrated;
                  if (dehydrated === null || isSuspenseInstancePending(dehydrated) || isSuspenseInstanceFallback(dehydrated)) {
                    return node;
                  }
                }
              } else if (node.tag === SuspenseListComponent && // revealOrder undefined can't be trusted because it don't
              // keep track of whether it suspended or not.
              node.memoizedProps.revealOrder !== void 0) {
                var didSuspend = (node.flags & DidCapture) !== NoFlags;
                if (didSuspend) {
                  return node;
                }
              } else if (node.child !== null) {
                node.child.return = node;
                node = node.child;
                continue;
              }
              if (node === row) {
                return null;
              }
              while (node.sibling === null) {
                if (node.return === null || node.return === row) {
                  return null;
                }
                node = node.return;
              }
              node.sibling.return = node.return;
              node = node.sibling;
            }
            return null;
          }
          var NoFlags$1 = (
            /*   */
            0
          );
          var HasEffect = (
            /* */
            1
          );
          var Insertion = (
            /*  */
            2
          );
          var Layout = (
            /*    */
            4
          );
          var Passive$1 = (
            /*   */
            8
          );
          var workInProgressSources = [];
          function resetWorkInProgressVersions() {
            for (var i = 0; i < workInProgressSources.length; i++) {
              var mutableSource = workInProgressSources[i];
              if (isPrimaryRenderer) {
                mutableSource._workInProgressVersionPrimary = null;
              } else {
                mutableSource._workInProgressVersionSecondary = null;
              }
            }
            workInProgressSources.length = 0;
          }
          function registerMutableSourceForHydration(root, mutableSource) {
            var getVersion = mutableSource._getVersion;
            var version2 = getVersion(mutableSource._source);
            if (root.mutableSourceEagerHydrationData == null) {
              root.mutableSourceEagerHydrationData = [mutableSource, version2];
            } else {
              root.mutableSourceEagerHydrationData.push(mutableSource, version2);
            }
          }
          var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher, ReactCurrentBatchConfig$1 = ReactSharedInternals.ReactCurrentBatchConfig;
          var didWarnAboutMismatchedHooksForComponent;
          var didWarnUncachedGetSnapshot;
          {
            didWarnAboutMismatchedHooksForComponent = /* @__PURE__ */ new Set();
          }
          var renderLanes = NoLanes;
          var currentlyRenderingFiber$1 = null;
          var currentHook = null;
          var workInProgressHook = null;
          var didScheduleRenderPhaseUpdate = false;
          var didScheduleRenderPhaseUpdateDuringThisPass = false;
          var localIdCounter = 0;
          var globalClientIdCounter = 0;
          var RE_RENDER_LIMIT = 25;
          var currentHookNameInDev = null;
          var hookTypesDev = null;
          var hookTypesUpdateIndexDev = -1;
          var ignorePreviousDependencies = false;
          function mountHookTypesDev() {
            {
              var hookName = currentHookNameInDev;
              if (hookTypesDev === null) {
                hookTypesDev = [hookName];
              } else {
                hookTypesDev.push(hookName);
              }
            }
          }
          function updateHookTypesDev() {
            {
              var hookName = currentHookNameInDev;
              if (hookTypesDev !== null) {
                hookTypesUpdateIndexDev++;
                if (hookTypesDev[hookTypesUpdateIndexDev] !== hookName) {
                  warnOnHookMismatchInDev(hookName);
                }
              }
            }
          }
          function checkDepsAreArrayDev(deps) {
            {
              if (deps !== void 0 && deps !== null && !isArray(deps)) {
                error("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", currentHookNameInDev, typeof deps);
              }
            }
          }
          function warnOnHookMismatchInDev(currentHookName) {
            {
              var componentName = getComponentNameFromFiber(currentlyRenderingFiber$1);
              if (!didWarnAboutMismatchedHooksForComponent.has(componentName)) {
                didWarnAboutMismatchedHooksForComponent.add(componentName);
                if (hookTypesDev !== null) {
                  var table = "";
                  var secondColumnStart = 30;
                  for (var i = 0; i <= hookTypesUpdateIndexDev; i++) {
                    var oldHookName = hookTypesDev[i];
                    var newHookName = i === hookTypesUpdateIndexDev ? currentHookName : oldHookName;
                    var row = i + 1 + ". " + oldHookName;
                    while (row.length < secondColumnStart) {
                      row += " ";
                    }
                    row += newHookName + "\n";
                    table += row;
                  }
                  error("React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks\n\n   Previous render            Next render\n   ------------------------------------------------------\n%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n", componentName, table);
                }
              }
            }
          }
          function throwInvalidHookError() {
            throw new Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");
          }
          function areHookInputsEqual(nextDeps, prevDeps) {
            {
              if (ignorePreviousDependencies) {
                return false;
              }
            }
            if (prevDeps === null) {
              {
                error("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", currentHookNameInDev);
              }
              return false;
            }
            {
              if (nextDeps.length !== prevDeps.length) {
                error("The final argument passed to %s changed size between renders. The order and size of this array must remain constant.\n\nPrevious: %s\nIncoming: %s", currentHookNameInDev, "[" + prevDeps.join(", ") + "]", "[" + nextDeps.join(", ") + "]");
              }
            }
            for (var i = 0; i < prevDeps.length && i < nextDeps.length; i++) {
              if (objectIs(nextDeps[i], prevDeps[i])) {
                continue;
              }
              return false;
            }
            return true;
          }
          function renderWithHooks(current2, workInProgress2, Component, props, secondArg, nextRenderLanes) {
            renderLanes = nextRenderLanes;
            currentlyRenderingFiber$1 = workInProgress2;
            {
              hookTypesDev = current2 !== null ? current2._debugHookTypes : null;
              hookTypesUpdateIndexDev = -1;
              ignorePreviousDependencies = current2 !== null && current2.type !== workInProgress2.type;
            }
            workInProgress2.memoizedState = null;
            workInProgress2.updateQueue = null;
            workInProgress2.lanes = NoLanes;
            {
              if (current2 !== null && current2.memoizedState !== null) {
                ReactCurrentDispatcher$1.current = HooksDispatcherOnUpdateInDEV;
              } else if (hookTypesDev !== null) {
                ReactCurrentDispatcher$1.current = HooksDispatcherOnMountWithHookTypesInDEV;
              } else {
                ReactCurrentDispatcher$1.current = HooksDispatcherOnMountInDEV;
              }
            }
            var children = Component(props, secondArg);
            if (didScheduleRenderPhaseUpdateDuringThisPass) {
              var numberOfReRenders = 0;
              do {
                didScheduleRenderPhaseUpdateDuringThisPass = false;
                localIdCounter = 0;
                if (numberOfReRenders >= RE_RENDER_LIMIT) {
                  throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
                }
                numberOfReRenders += 1;
                {
                  ignorePreviousDependencies = false;
                }
                currentHook = null;
                workInProgressHook = null;
                workInProgress2.updateQueue = null;
                {
                  hookTypesUpdateIndexDev = -1;
                }
                ReactCurrentDispatcher$1.current = HooksDispatcherOnRerenderInDEV;
                children = Component(props, secondArg);
              } while (didScheduleRenderPhaseUpdateDuringThisPass);
            }
            ReactCurrentDispatcher$1.current = ContextOnlyDispatcher;
            {
              workInProgress2._debugHookTypes = hookTypesDev;
            }
            var didRenderTooFewHooks = currentHook !== null && currentHook.next !== null;
            renderLanes = NoLanes;
            currentlyRenderingFiber$1 = null;
            currentHook = null;
            workInProgressHook = null;
            {
              currentHookNameInDev = null;
              hookTypesDev = null;
              hookTypesUpdateIndexDev = -1;
              if (current2 !== null && (current2.flags & StaticMask) !== (workInProgress2.flags & StaticMask) && // Disable this warning in legacy mode, because legacy Suspense is weird
              // and creates false positives. To make this work in legacy mode, we'd
              // need to mark fibers that commit in an incomplete state, somehow. For
              // now I'll disable the warning that most of the bugs that would trigger
              // it are either exclusive to concurrent mode or exist in both.
              (current2.mode & ConcurrentMode) !== NoMode) {
                error("Internal React error: Expected static flag was missing. Please notify the React team.");
              }
            }
            didScheduleRenderPhaseUpdate = false;
            if (didRenderTooFewHooks) {
              throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
            }
            return children;
          }
          function checkDidRenderIdHook() {
            var didRenderIdHook = localIdCounter !== 0;
            localIdCounter = 0;
            return didRenderIdHook;
          }
          function bailoutHooks(current2, workInProgress2, lanes) {
            workInProgress2.updateQueue = current2.updateQueue;
            if ((workInProgress2.mode & StrictEffectsMode) !== NoMode) {
              workInProgress2.flags &= ~(MountPassiveDev | MountLayoutDev | Passive | Update);
            } else {
              workInProgress2.flags &= ~(Passive | Update);
            }
            current2.lanes = removeLanes(current2.lanes, lanes);
          }
          function resetHooksAfterThrow() {
            ReactCurrentDispatcher$1.current = ContextOnlyDispatcher;
            if (didScheduleRenderPhaseUpdate) {
              var hook = currentlyRenderingFiber$1.memoizedState;
              while (hook !== null) {
                var queue = hook.queue;
                if (queue !== null) {
                  queue.pending = null;
                }
                hook = hook.next;
              }
              didScheduleRenderPhaseUpdate = false;
            }
            renderLanes = NoLanes;
            currentlyRenderingFiber$1 = null;
            currentHook = null;
            workInProgressHook = null;
            {
              hookTypesDev = null;
              hookTypesUpdateIndexDev = -1;
              currentHookNameInDev = null;
              isUpdatingOpaqueValueInRenderPhase = false;
            }
            didScheduleRenderPhaseUpdateDuringThisPass = false;
            localIdCounter = 0;
          }
          function mountWorkInProgressHook() {
            var hook = {
              memoizedState: null,
              baseState: null,
              baseQueue: null,
              queue: null,
              next: null
            };
            if (workInProgressHook === null) {
              currentlyRenderingFiber$1.memoizedState = workInProgressHook = hook;
            } else {
              workInProgressHook = workInProgressHook.next = hook;
            }
            return workInProgressHook;
          }
          function updateWorkInProgressHook() {
            var nextCurrentHook;
            if (currentHook === null) {
              var current2 = currentlyRenderingFiber$1.alternate;
              if (current2 !== null) {
                nextCurrentHook = current2.memoizedState;
              } else {
                nextCurrentHook = null;
              }
            } else {
              nextCurrentHook = currentHook.next;
            }
            var nextWorkInProgressHook;
            if (workInProgressHook === null) {
              nextWorkInProgressHook = currentlyRenderingFiber$1.memoizedState;
            } else {
              nextWorkInProgressHook = workInProgressHook.next;
            }
            if (nextWorkInProgressHook !== null) {
              workInProgressHook = nextWorkInProgressHook;
              nextWorkInProgressHook = workInProgressHook.next;
              currentHook = nextCurrentHook;
            } else {
              if (nextCurrentHook === null) {
                throw new Error("Rendered more hooks than during the previous render.");
              }
              currentHook = nextCurrentHook;
              var newHook = {
                memoizedState: currentHook.memoizedState,
                baseState: currentHook.baseState,
                baseQueue: currentHook.baseQueue,
                queue: currentHook.queue,
                next: null
              };
              if (workInProgressHook === null) {
                currentlyRenderingFiber$1.memoizedState = workInProgressHook = newHook;
              } else {
                workInProgressHook = workInProgressHook.next = newHook;
              }
            }
            return workInProgressHook;
          }
          function createFunctionComponentUpdateQueue() {
            return {
              lastEffect: null,
              stores: null
            };
          }
          function basicStateReducer(state, action) {
            return typeof action === "function" ? action(state) : action;
          }
          function mountReducer(reducer, initialArg, init) {
            var hook = mountWorkInProgressHook();
            var initialState;
            if (init !== void 0) {
              initialState = init(initialArg);
            } else {
              initialState = initialArg;
            }
            hook.memoizedState = hook.baseState = initialState;
            var queue = {
              pending: null,
              interleaved: null,
              lanes: NoLanes,
              dispatch: null,
              lastRenderedReducer: reducer,
              lastRenderedState: initialState
            };
            hook.queue = queue;
            var dispatch = queue.dispatch = dispatchReducerAction.bind(null, currentlyRenderingFiber$1, queue);
            return [hook.memoizedState, dispatch];
          }
          function updateReducer(reducer, initialArg, init) {
            var hook = updateWorkInProgressHook();
            var queue = hook.queue;
            if (queue === null) {
              throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
            }
            queue.lastRenderedReducer = reducer;
            var current2 = currentHook;
            var baseQueue = current2.baseQueue;
            var pendingQueue = queue.pending;
            if (pendingQueue !== null) {
              if (baseQueue !== null) {
                var baseFirst = baseQueue.next;
                var pendingFirst = pendingQueue.next;
                baseQueue.next = pendingFirst;
                pendingQueue.next = baseFirst;
              }
              {
                if (current2.baseQueue !== baseQueue) {
                  error("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React.");
                }
              }
              current2.baseQueue = baseQueue = pendingQueue;
              queue.pending = null;
            }
            if (baseQueue !== null) {
              var first = baseQueue.next;
              var newState = current2.baseState;
              var newBaseState = null;
              var newBaseQueueFirst = null;
              var newBaseQueueLast = null;
              var update = first;
              do {
                var updateLane = update.lane;
                if (!isSubsetOfLanes(renderLanes, updateLane)) {
                  var clone = {
                    lane: updateLane,
                    action: update.action,
                    hasEagerState: update.hasEagerState,
                    eagerState: update.eagerState,
                    next: null
                  };
                  if (newBaseQueueLast === null) {
                    newBaseQueueFirst = newBaseQueueLast = clone;
                    newBaseState = newState;
                  } else {
                    newBaseQueueLast = newBaseQueueLast.next = clone;
                  }
                  currentlyRenderingFiber$1.lanes = mergeLanes(currentlyRenderingFiber$1.lanes, updateLane);
                  markSkippedUpdateLanes(updateLane);
                } else {
                  if (newBaseQueueLast !== null) {
                    var _clone = {
                      // This update is going to be committed so we never want uncommit
                      // it. Using NoLane works because 0 is a subset of all bitmasks, so
                      // this will never be skipped by the check above.
                      lane: NoLane,
                      action: update.action,
                      hasEagerState: update.hasEagerState,
                      eagerState: update.eagerState,
                      next: null
                    };
                    newBaseQueueLast = newBaseQueueLast.next = _clone;
                  }
                  if (update.hasEagerState) {
                    newState = update.eagerState;
                  } else {
                    var action = update.action;
                    newState = reducer(newState, action);
                  }
                }
                update = update.next;
              } while (update !== null && update !== first);
              if (newBaseQueueLast === null) {
                newBaseState = newState;
              } else {
                newBaseQueueLast.next = newBaseQueueFirst;
              }
              if (!objectIs(newState, hook.memoizedState)) {
                markWorkInProgressReceivedUpdate();
              }
              hook.memoizedState = newState;
              hook.baseState = newBaseState;
              hook.baseQueue = newBaseQueueLast;
              queue.lastRenderedState = newState;
            }
            var lastInterleaved = queue.interleaved;
            if (lastInterleaved !== null) {
              var interleaved = lastInterleaved;
              do {
                var interleavedLane = interleaved.lane;
                currentlyRenderingFiber$1.lanes = mergeLanes(currentlyRenderingFiber$1.lanes, interleavedLane);
                markSkippedUpdateLanes(interleavedLane);
                interleaved = interleaved.next;
              } while (interleaved !== lastInterleaved);
            } else if (baseQueue === null) {
              queue.lanes = NoLanes;
            }
            var dispatch = queue.dispatch;
            return [hook.memoizedState, dispatch];
          }
          function rerenderReducer(reducer, initialArg, init) {
            var hook = updateWorkInProgressHook();
            var queue = hook.queue;
            if (queue === null) {
              throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
            }
            queue.lastRenderedReducer = reducer;
            var dispatch = queue.dispatch;
            var lastRenderPhaseUpdate = queue.pending;
            var newState = hook.memoizedState;
            if (lastRenderPhaseUpdate !== null) {
              queue.pending = null;
              var firstRenderPhaseUpdate = lastRenderPhaseUpdate.next;
              var update = firstRenderPhaseUpdate;
              do {
                var action = update.action;
                newState = reducer(newState, action);
                update = update.next;
              } while (update !== firstRenderPhaseUpdate);
              if (!objectIs(newState, hook.memoizedState)) {
                markWorkInProgressReceivedUpdate();
              }
              hook.memoizedState = newState;
              if (hook.baseQueue === null) {
                hook.baseState = newState;
              }
              queue.lastRenderedState = newState;
            }
            return [newState, dispatch];
          }
          function mountMutableSource(source, getSnapshot, subscribe) {
            {
              return void 0;
            }
          }
          function updateMutableSource(source, getSnapshot, subscribe) {
            {
              return void 0;
            }
          }
          function mountSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
            var fiber = currentlyRenderingFiber$1;
            var hook = mountWorkInProgressHook();
            var nextSnapshot;
            var isHydrating2 = getIsHydrating();
            if (isHydrating2) {
              if (getServerSnapshot === void 0) {
                throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
              }
              nextSnapshot = getServerSnapshot();
              {
                if (!didWarnUncachedGetSnapshot) {
                  if (nextSnapshot !== getServerSnapshot()) {
                    error("The result of getServerSnapshot should be cached to avoid an infinite loop");
                    didWarnUncachedGetSnapshot = true;
                  }
                }
              }
            } else {
              nextSnapshot = getSnapshot();
              {
                if (!didWarnUncachedGetSnapshot) {
                  var cachedSnapshot = getSnapshot();
                  if (!objectIs(nextSnapshot, cachedSnapshot)) {
                    error("The result of getSnapshot should be cached to avoid an infinite loop");
                    didWarnUncachedGetSnapshot = true;
                  }
                }
              }
              var root = getWorkInProgressRoot();
              if (root === null) {
                throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
              }
              if (!includesBlockingLane(root, renderLanes)) {
                pushStoreConsistencyCheck(fiber, getSnapshot, nextSnapshot);
              }
            }
            hook.memoizedState = nextSnapshot;
            var inst = {
              value: nextSnapshot,
              getSnapshot
            };
            hook.queue = inst;
            mountEffect(subscribeToStore.bind(null, fiber, inst, subscribe), [subscribe]);
            fiber.flags |= Passive;
            pushEffect(HasEffect | Passive$1, updateStoreInstance.bind(null, fiber, inst, nextSnapshot, getSnapshot), void 0, null);
            return nextSnapshot;
          }
          function updateSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
            var fiber = currentlyRenderingFiber$1;
            var hook = updateWorkInProgressHook();
            var nextSnapshot = getSnapshot();
            {
              if (!didWarnUncachedGetSnapshot) {
                var cachedSnapshot = getSnapshot();
                if (!objectIs(nextSnapshot, cachedSnapshot)) {
                  error("The result of getSnapshot should be cached to avoid an infinite loop");
                  didWarnUncachedGetSnapshot = true;
                }
              }
            }
            var prevSnapshot = hook.memoizedState;
            var snapshotChanged = !objectIs(prevSnapshot, nextSnapshot);
            if (snapshotChanged) {
              hook.memoizedState = nextSnapshot;
              markWorkInProgressReceivedUpdate();
            }
            var inst = hook.queue;
            updateEffect(subscribeToStore.bind(null, fiber, inst, subscribe), [subscribe]);
            if (inst.getSnapshot !== getSnapshot || snapshotChanged || // Check if the susbcribe function changed. We can save some memory by
            // checking whether we scheduled a subscription effect above.
            workInProgressHook !== null && workInProgressHook.memoizedState.tag & HasEffect) {
              fiber.flags |= Passive;
              pushEffect(HasEffect | Passive$1, updateStoreInstance.bind(null, fiber, inst, nextSnapshot, getSnapshot), void 0, null);
              var root = getWorkInProgressRoot();
              if (root === null) {
                throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
              }
              if (!includesBlockingLane(root, renderLanes)) {
                pushStoreConsistencyCheck(fiber, getSnapshot, nextSnapshot);
              }
            }
            return nextSnapshot;
          }
          function pushStoreConsistencyCheck(fiber, getSnapshot, renderedSnapshot) {
            fiber.flags |= StoreConsistency;
            var check = {
              getSnapshot,
              value: renderedSnapshot
            };
            var componentUpdateQueue = currentlyRenderingFiber$1.updateQueue;
            if (componentUpdateQueue === null) {
              componentUpdateQueue = createFunctionComponentUpdateQueue();
              currentlyRenderingFiber$1.updateQueue = componentUpdateQueue;
              componentUpdateQueue.stores = [check];
            } else {
              var stores = componentUpdateQueue.stores;
              if (stores === null) {
                componentUpdateQueue.stores = [check];
              } else {
                stores.push(check);
              }
            }
          }
          function updateStoreInstance(fiber, inst, nextSnapshot, getSnapshot) {
            inst.value = nextSnapshot;
            inst.getSnapshot = getSnapshot;
            if (checkIfSnapshotChanged(inst)) {
              forceStoreRerender(fiber);
            }
          }
          function subscribeToStore(fiber, inst, subscribe) {
            var handleStoreChange = function() {
              if (checkIfSnapshotChanged(inst)) {
                forceStoreRerender(fiber);
              }
            };
            return subscribe(handleStoreChange);
          }
          function checkIfSnapshotChanged(inst) {
            var latestGetSnapshot = inst.getSnapshot;
            var prevValue = inst.value;
            try {
              var nextValue = latestGetSnapshot();
              return !objectIs(prevValue, nextValue);
            } catch (error2) {
              return true;
            }
          }
          function forceStoreRerender(fiber) {
            var root = enqueueConcurrentRenderForLane(fiber, SyncLane);
            if (root !== null) {
              scheduleUpdateOnFiber(root, fiber, SyncLane, NoTimestamp);
            }
          }
          function mountState(initialState) {
            var hook = mountWorkInProgressHook();
            if (typeof initialState === "function") {
              initialState = initialState();
            }
            hook.memoizedState = hook.baseState = initialState;
            var queue = {
              pending: null,
              interleaved: null,
              lanes: NoLanes,
              dispatch: null,
              lastRenderedReducer: basicStateReducer,
              lastRenderedState: initialState
            };
            hook.queue = queue;
            var dispatch = queue.dispatch = dispatchSetState.bind(null, currentlyRenderingFiber$1, queue);
            return [hook.memoizedState, dispatch];
          }
          function updateState(initialState) {
            return updateReducer(basicStateReducer);
          }
          function rerenderState(initialState) {
            return rerenderReducer(basicStateReducer);
          }
          function pushEffect(tag, create, destroy, deps) {
            var effect = {
              tag,
              create,
              destroy,
              deps,
              // Circular
              next: null
            };
            var componentUpdateQueue = currentlyRenderingFiber$1.updateQueue;
            if (componentUpdateQueue === null) {
              componentUpdateQueue = createFunctionComponentUpdateQueue();
              currentlyRenderingFiber$1.updateQueue = componentUpdateQueue;
              componentUpdateQueue.lastEffect = effect.next = effect;
            } else {
              var lastEffect = componentUpdateQueue.lastEffect;
              if (lastEffect === null) {
                componentUpdateQueue.lastEffect = effect.next = effect;
              } else {
                var firstEffect = lastEffect.next;
                lastEffect.next = effect;
                effect.next = firstEffect;
                componentUpdateQueue.lastEffect = effect;
              }
            }
            return effect;
          }
          function mountRef(initialValue) {
            var hook = mountWorkInProgressHook();
            {
              var _ref2 = {
                current: initialValue
              };
              hook.memoizedState = _ref2;
              return _ref2;
            }
          }
          function updateRef(initialValue) {
            var hook = updateWorkInProgressHook();
            return hook.memoizedState;
          }
          function mountEffectImpl(fiberFlags, hookFlags, create, deps) {
            var hook = mountWorkInProgressHook();
            var nextDeps = deps === void 0 ? null : deps;
            currentlyRenderingFiber$1.flags |= fiberFlags;
            hook.memoizedState = pushEffect(HasEffect | hookFlags, create, void 0, nextDeps);
          }
          function updateEffectImpl(fiberFlags, hookFlags, create, deps) {
            var hook = updateWorkInProgressHook();
            var nextDeps = deps === void 0 ? null : deps;
            var destroy = void 0;
            if (currentHook !== null) {
              var prevEffect = currentHook.memoizedState;
              destroy = prevEffect.destroy;
              if (nextDeps !== null) {
                var prevDeps = prevEffect.deps;
                if (areHookInputsEqual(nextDeps, prevDeps)) {
                  hook.memoizedState = pushEffect(hookFlags, create, destroy, nextDeps);
                  return;
                }
              }
            }
            currentlyRenderingFiber$1.flags |= fiberFlags;
            hook.memoizedState = pushEffect(HasEffect | hookFlags, create, destroy, nextDeps);
          }
          function mountEffect(create, deps) {
            if ((currentlyRenderingFiber$1.mode & StrictEffectsMode) !== NoMode) {
              return mountEffectImpl(MountPassiveDev | Passive | PassiveStatic, Passive$1, create, deps);
            } else {
              return mountEffectImpl(Passive | PassiveStatic, Passive$1, create, deps);
            }
          }
          function updateEffect(create, deps) {
            return updateEffectImpl(Passive, Passive$1, create, deps);
          }
          function mountInsertionEffect(create, deps) {
            return mountEffectImpl(Update, Insertion, create, deps);
          }
          function updateInsertionEffect(create, deps) {
            return updateEffectImpl(Update, Insertion, create, deps);
          }
          function mountLayoutEffect(create, deps) {
            var fiberFlags = Update;
            {
              fiberFlags |= LayoutStatic;
            }
            if ((currentlyRenderingFiber$1.mode & StrictEffectsMode) !== NoMode) {
              fiberFlags |= MountLayoutDev;
            }
            return mountEffectImpl(fiberFlags, Layout, create, deps);
          }
          function updateLayoutEffect(create, deps) {
            return updateEffectImpl(Update, Layout, create, deps);
          }
          function imperativeHandleEffect(create, ref) {
            if (typeof ref === "function") {
              var refCallback = ref;
              var _inst = create();
              refCallback(_inst);
              return function() {
                refCallback(null);
              };
            } else if (ref !== null && ref !== void 0) {
              var refObject = ref;
              {
                if (!refObject.hasOwnProperty("current")) {
                  error("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(refObject).join(", ") + "}");
                }
              }
              var _inst2 = create();
              refObject.current = _inst2;
              return function() {
                refObject.current = null;
              };
            }
          }
          function mountImperativeHandle(ref, create, deps) {
            {
              if (typeof create !== "function") {
                error("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", create !== null ? typeof create : "null");
              }
            }
            var effectDeps = deps !== null && deps !== void 0 ? deps.concat([ref]) : null;
            var fiberFlags = Update;
            {
              fiberFlags |= LayoutStatic;
            }
            if ((currentlyRenderingFiber$1.mode & StrictEffectsMode) !== NoMode) {
              fiberFlags |= MountLayoutDev;
            }
            return mountEffectImpl(fiberFlags, Layout, imperativeHandleEffect.bind(null, create, ref), effectDeps);
          }
          function updateImperativeHandle(ref, create, deps) {
            {
              if (typeof create !== "function") {
                error("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", create !== null ? typeof create : "null");
              }
            }
            var effectDeps = deps !== null && deps !== void 0 ? deps.concat([ref]) : null;
            return updateEffectImpl(Update, Layout, imperativeHandleEffect.bind(null, create, ref), effectDeps);
          }
          function mountDebugValue(value, formatterFn) {
          }
          var updateDebugValue = mountDebugValue;
          function mountCallback(callback, deps) {
            var hook = mountWorkInProgressHook();
            var nextDeps = deps === void 0 ? null : deps;
            hook.memoizedState = [callback, nextDeps];
            return callback;
          }
          function updateCallback(callback, deps) {
            var hook = updateWorkInProgressHook();
            var nextDeps = deps === void 0 ? null : deps;
            var prevState = hook.memoizedState;
            if (prevState !== null) {
              if (nextDeps !== null) {
                var prevDeps = prevState[1];
                if (areHookInputsEqual(nextDeps, prevDeps)) {
                  return prevState[0];
                }
              }
            }
            hook.memoizedState = [callback, nextDeps];
            return callback;
          }
          function mountMemo(nextCreate, deps) {
            var hook = mountWorkInProgressHook();
            var nextDeps = deps === void 0 ? null : deps;
            var nextValue = nextCreate();
            hook.memoizedState = [nextValue, nextDeps];
            return nextValue;
          }
          function updateMemo(nextCreate, deps) {
            var hook = updateWorkInProgressHook();
            var nextDeps = deps === void 0 ? null : deps;
            var prevState = hook.memoizedState;
            if (prevState !== null) {
              if (nextDeps !== null) {
                var prevDeps = prevState[1];
                if (areHookInputsEqual(nextDeps, prevDeps)) {
                  return prevState[0];
                }
              }
            }
            var nextValue = nextCreate();
            hook.memoizedState = [nextValue, nextDeps];
            return nextValue;
          }
          function mountDeferredValue(value) {
            var hook = mountWorkInProgressHook();
            hook.memoizedState = value;
            return value;
          }
          function updateDeferredValue(value) {
            var hook = updateWorkInProgressHook();
            var resolvedCurrentHook = currentHook;
            var prevValue = resolvedCurrentHook.memoizedState;
            return updateDeferredValueImpl(hook, prevValue, value);
          }
          function rerenderDeferredValue(value) {
            var hook = updateWorkInProgressHook();
            if (currentHook === null) {
              hook.memoizedState = value;
              return value;
            } else {
              var prevValue = currentHook.memoizedState;
              return updateDeferredValueImpl(hook, prevValue, value);
            }
          }
          function updateDeferredValueImpl(hook, prevValue, value) {
            var shouldDeferValue = !includesOnlyNonUrgentLanes(renderLanes);
            if (shouldDeferValue) {
              if (!objectIs(value, prevValue)) {
                var deferredLane = claimNextTransitionLane();
                currentlyRenderingFiber$1.lanes = mergeLanes(currentlyRenderingFiber$1.lanes, deferredLane);
                markSkippedUpdateLanes(deferredLane);
                hook.baseState = true;
              }
              return prevValue;
            } else {
              if (hook.baseState) {
                hook.baseState = false;
                markWorkInProgressReceivedUpdate();
              }
              hook.memoizedState = value;
              return value;
            }
          }
          function startTransition(setPending, callback, options) {
            var previousPriority = getCurrentUpdatePriority();
            setCurrentUpdatePriority(higherEventPriority(previousPriority, ContinuousEventPriority));
            setPending(true);
            var prevTransition = ReactCurrentBatchConfig$1.transition;
            ReactCurrentBatchConfig$1.transition = {};
            var currentTransition = ReactCurrentBatchConfig$1.transition;
            {
              ReactCurrentBatchConfig$1.transition._updatedFibers = /* @__PURE__ */ new Set();
            }
            try {
              setPending(false);
              callback();
            } finally {
              setCurrentUpdatePriority(previousPriority);
              ReactCurrentBatchConfig$1.transition = prevTransition;
              {
                if (prevTransition === null && currentTransition._updatedFibers) {
                  var updatedFibersCount = currentTransition._updatedFibers.size;
                  if (updatedFibersCount > 10) {
                    warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.");
                  }
                  currentTransition._updatedFibers.clear();
                }
              }
            }
          }
          function mountTransition() {
            var _mountState = mountState(false), isPending = _mountState[0], setPending = _mountState[1];
            var start = startTransition.bind(null, setPending);
            var hook = mountWorkInProgressHook();
            hook.memoizedState = start;
            return [isPending, start];
          }
          function updateTransition() {
            var _updateState = updateState(), isPending = _updateState[0];
            var hook = updateWorkInProgressHook();
            var start = hook.memoizedState;
            return [isPending, start];
          }
          function rerenderTransition() {
            var _rerenderState = rerenderState(), isPending = _rerenderState[0];
            var hook = updateWorkInProgressHook();
            var start = hook.memoizedState;
            return [isPending, start];
          }
          var isUpdatingOpaqueValueInRenderPhase = false;
          function getIsUpdatingOpaqueValueInRenderPhaseInDEV() {
            {
              return isUpdatingOpaqueValueInRenderPhase;
            }
          }
          function mountId() {
            var hook = mountWorkInProgressHook();
            var root = getWorkInProgressRoot();
            var identifierPrefix = root.identifierPrefix;
            var id;
            if (getIsHydrating()) {
              var treeId = getTreeId();
              id = ":" + identifierPrefix + "R" + treeId;
              var localId = localIdCounter++;
              if (localId > 0) {
                id += "H" + localId.toString(32);
              }
              id += ":";
            } else {
              var globalClientId = globalClientIdCounter++;
              id = ":" + identifierPrefix + "r" + globalClientId.toString(32) + ":";
            }
            hook.memoizedState = id;
            return id;
          }
          function updateId() {
            var hook = updateWorkInProgressHook();
            var id = hook.memoizedState;
            return id;
          }
          function dispatchReducerAction(fiber, queue, action) {
            {
              if (typeof arguments[3] === "function") {
                error("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
              }
            }
            var lane = requestUpdateLane(fiber);
            var update = {
              lane,
              action,
              hasEagerState: false,
              eagerState: null,
              next: null
            };
            if (isRenderPhaseUpdate(fiber)) {
              enqueueRenderPhaseUpdate(queue, update);
            } else {
              var root = enqueueConcurrentHookUpdate(fiber, queue, update, lane);
              if (root !== null) {
                var eventTime = requestEventTime();
                scheduleUpdateOnFiber(root, fiber, lane, eventTime);
                entangleTransitionUpdate(root, queue, lane);
              }
            }
            markUpdateInDevTools(fiber, lane);
          }
          function dispatchSetState(fiber, queue, action) {
            {
              if (typeof arguments[3] === "function") {
                error("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
              }
            }
            var lane = requestUpdateLane(fiber);
            var update = {
              lane,
              action,
              hasEagerState: false,
              eagerState: null,
              next: null
            };
            if (isRenderPhaseUpdate(fiber)) {
              enqueueRenderPhaseUpdate(queue, update);
            } else {
              var alternate = fiber.alternate;
              if (fiber.lanes === NoLanes && (alternate === null || alternate.lanes === NoLanes)) {
                var lastRenderedReducer = queue.lastRenderedReducer;
                if (lastRenderedReducer !== null) {
                  var prevDispatcher;
                  {
                    prevDispatcher = ReactCurrentDispatcher$1.current;
                    ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnUpdateInDEV;
                  }
                  try {
                    var currentState = queue.lastRenderedState;
                    var eagerState = lastRenderedReducer(currentState, action);
                    update.hasEagerState = true;
                    update.eagerState = eagerState;
                    if (objectIs(eagerState, currentState)) {
                      enqueueConcurrentHookUpdateAndEagerlyBailout(fiber, queue, update, lane);
                      return;
                    }
                  } catch (error2) {
                  } finally {
                    {
                      ReactCurrentDispatcher$1.current = prevDispatcher;
                    }
                  }
                }
              }
              var root = enqueueConcurrentHookUpdate(fiber, queue, update, lane);
              if (root !== null) {
                var eventTime = requestEventTime();
                scheduleUpdateOnFiber(root, fiber, lane, eventTime);
                entangleTransitionUpdate(root, queue, lane);
              }
            }
            markUpdateInDevTools(fiber, lane);
          }
          function isRenderPhaseUpdate(fiber) {
            var alternate = fiber.alternate;
            return fiber === currentlyRenderingFiber$1 || alternate !== null && alternate === currentlyRenderingFiber$1;
          }
          function enqueueRenderPhaseUpdate(queue, update) {
            didScheduleRenderPhaseUpdateDuringThisPass = didScheduleRenderPhaseUpdate = true;
            var pending = queue.pending;
            if (pending === null) {
              update.next = update;
            } else {
              update.next = pending.next;
              pending.next = update;
            }
            queue.pending = update;
          }
          function entangleTransitionUpdate(root, queue, lane) {
            if (isTransitionLane(lane)) {
              var queueLanes = queue.lanes;
              queueLanes = intersectLanes(queueLanes, root.pendingLanes);
              var newQueueLanes = mergeLanes(queueLanes, lane);
              queue.lanes = newQueueLanes;
              markRootEntangled(root, newQueueLanes);
            }
          }
          function markUpdateInDevTools(fiber, lane, action) {
            {
              markStateUpdateScheduled(fiber, lane);
            }
          }
          var ContextOnlyDispatcher = {
            readContext,
            useCallback: throwInvalidHookError,
            useContext: throwInvalidHookError,
            useEffect: throwInvalidHookError,
            useImperativeHandle: throwInvalidHookError,
            useInsertionEffect: throwInvalidHookError,
            useLayoutEffect: throwInvalidHookError,
            useMemo: throwInvalidHookError,
            useReducer: throwInvalidHookError,
            useRef: throwInvalidHookError,
            useState: throwInvalidHookError,
            useDebugValue: throwInvalidHookError,
            useDeferredValue: throwInvalidHookError,
            useTransition: throwInvalidHookError,
            useMutableSource: throwInvalidHookError,
            useSyncExternalStore: throwInvalidHookError,
            useId: throwInvalidHookError,
            unstable_isNewReconciler: enableNewReconciler
          };
          var HooksDispatcherOnMountInDEV = null;
          var HooksDispatcherOnMountWithHookTypesInDEV = null;
          var HooksDispatcherOnUpdateInDEV = null;
          var HooksDispatcherOnRerenderInDEV = null;
          var InvalidNestedHooksDispatcherOnMountInDEV = null;
          var InvalidNestedHooksDispatcherOnUpdateInDEV = null;
          var InvalidNestedHooksDispatcherOnRerenderInDEV = null;
          {
            var warnInvalidContextAccess = function() {
              error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
            };
            var warnInvalidHookAccess = function() {
              error("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
            };
            HooksDispatcherOnMountInDEV = {
              readContext: function(context) {
                return readContext(context);
              },
              useCallback: function(callback, deps) {
                currentHookNameInDev = "useCallback";
                mountHookTypesDev();
                checkDepsAreArrayDev(deps);
                return mountCallback(callback, deps);
              },
              useContext: function(context) {
                currentHookNameInDev = "useContext";
                mountHookTypesDev();
                return readContext(context);
              },
              useEffect: function(create, deps) {
                currentHookNameInDev = "useEffect";
                mountHookTypesDev();
                checkDepsAreArrayDev(deps);
                return mountEffect(create, deps);
              },
              useImperativeHandle: function(ref, create, deps) {
                currentHookNameInDev = "useImperativeHandle";
                mountHookTypesDev();
                checkDepsAreArrayDev(deps);
                return mountImperativeHandle(ref, create, deps);
              },
              useInsertionEffect: function(create, deps) {
                currentHookNameInDev = "useInsertionEffect";
                mountHookTypesDev();
                checkDepsAreArrayDev(deps);
                return mountInsertionEffect(create, deps);
              },
              useLayoutEffect: function(create, deps) {
                currentHookNameInDev = "useLayoutEffect";
                mountHookTypesDev();
                checkDepsAreArrayDev(deps);
                return mountLayoutEffect(create, deps);
              },
              useMemo: function(create, deps) {
                currentHookNameInDev = "useMemo";
                mountHookTypesDev();
                checkDepsAreArrayDev(deps);
                var prevDispatcher = ReactCurrentDispatcher$1.current;
                ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnMountInDEV;
                try {
                  return mountMemo(create, deps);
                } finally {
                  ReactCurrentDispatcher$1.current = prevDispatcher;
                }
              },
              useReducer: function(reducer, initialArg, init) {
                currentHookNameInDev = "useReducer";
                mountHookTypesDev();
                var prevDispatcher = ReactCurrentDispatcher$1.current;
                ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnMountInDEV;
                try {
                  return mountReducer(reducer, initialArg, init);
                } finally {
                  ReactCurrentDispatcher$1.current = prevDispatcher;
                }
              },
              useRef: function(initialValue) {
                currentHookNameInDev = "useRef";
                mountHookTypesDev();
                return mountRef(initialValue);
              },
              useState: function(initialState) {
                currentHookNameInDev = "useState";
                mountHookTypesDev();
                var prevDispatcher = ReactCurrentDispatcher$1.current;
                ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnMountInDEV;
                try {
                  return mountState(initialState);
                } finally {
                  ReactCurrentDispatcher$1.current = prevDispatcher;
                }
              },
              useDebugValue: function(value, formatterFn) {
                currentHookNameInDev = "useDebugValue";
                mountHookTypesDev();
                return mountDebugValue();
              },
              useDeferredValue: function(value) {
                currentHookNameInDev = "useDeferredValue";
                mountHookTypesDev();
                return mountDeferredValue(value);
              },
              useTransition: function() {
                currentHookNameInDev = "useTransition";
                mountHookTypesDev();
                return mountTransition();
              },
              useMutableSource: function(source, getSnapshot, subscribe) {
                currentHookNameInDev = "useMutableSource";
                mountHookTypesDev();
                return mountMutableSource();
              },
              useSyncExternalStore: function(subscribe, getSnapshot, getServerSnapshot) {
                currentHookNameInDev = "useSyncExternalStore";
                mountHookTypesDev();
                return mountSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
              },
              useId: function() {
                currentHookNameInDev = "useId";
                mountHookTypesDev();
                return mountId();
              },
              unstable_isNewReconciler: enableNewReconciler
            };
            HooksDispatcherOnMountWithHookTypesInDEV = {
              readContext: function(context) {
                return readContext(context);
              },
              useCallback: function(callback, deps) {
                currentHookNameInDev = "useCallback";
                updateHookTypesDev();
                return mountCallback(callback, deps);
              },
              useContext: function(context) {
                currentHookNameInDev = "useContext";
                updateHookTypesDev();
                return readContext(context);
              },
              useEffect: function(create, deps) {
                currentHookNameInDev = "useEffect";
                updateHookTypesDev();
                return mountEffect(create, deps);
              },
              useImperativeHandle: function(ref, create, deps) {
                currentHookNameInDev = "useImperativeHandle";
                updateHookTypesDev();
                return mountImperativeHandle(ref, create, deps);
              },
              useInsertionEffect: function(create, deps) {
                currentHookNameInDev = "useInsertionEffect";
                updateHookTypesDev();
                return mountInsertionEffect(create, deps);
              },
              useLayoutEffect: function(create, deps) {
                currentHookNameInDev = "useLayoutEffect";
                updateHookTypesDev();
                return mountLayoutEffect(create, deps);
              },
              useMemo: function(create, deps) {
                currentHookNameInDev = "useMemo";
                updateHookTypesDev();
                var prevDispatcher = ReactCurrentDispatcher$1.current;
                ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnMountInDEV;
                try {
                  return mountMemo(create, deps);
                } finally {
                  ReactCurrentDispatcher$1.current = prevDispatcher;
                }
              },
              useReducer: function(reducer, initialArg, init) {
                currentHookNameInDev = "useReducer";
                updateHookTypesDev();
                var prevDispatcher = ReactCurrentDispatcher$1.current;
                ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnMountInDEV;
                try {
                  return mountReducer(reducer, initialArg, init);
                } finally {
                  ReactCurrentDispatcher$1.current = prevDispatcher;
                }
              },
              useRef: function(initialValue) {
                currentHookNameInDev = "useRef";
                updateHookTypesDev();
                return mountRef(initialValue);
              },
              useState: function(initialState) {
                currentHookNameInDev = "useState";
                updateHookTypesDev();
                var prevDispatcher = ReactCurrentDispatcher$1.current;
                ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnMountInDEV;
                try {
                  return mountState(initialState);
                } finally {
                  ReactCurrentDispatcher$1.current = prevDispatcher;
                }
              },
              useDebugValue: function(value, formatterFn) {
                currentHookNameInDev = "useDebugValue";
                updateHookTypesDev();
                return mountDebugValue();
              },
              useDeferredValue: function(value) {
                currentHookNameInDev = "useDeferredValue";
                updateHookTypesDev();
                return mountDeferredValue(value);
              },
              useTransition: function() {
                currentHookNameInDev = "useTransition";
                updateHookTypesDev();
                return mountTransition();
              },
              useMutableSource: function(source, getSnapshot, subscribe) {
                currentHookNameInDev = "useMutableSource";
                updateHookTypesDev();
                return mountMutableSource();
              },
              useSyncExternalStore: function(subscribe, getSnapshot, getServerSnapshot) {
                currentHookNameInDev = "useSyncExternalStore";
                updateHookTypesDev();
                return mountSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
              },
              useId: function() {
                currentHookNameInDev = "useId";
                updateHookTypesDev();
                return mountId();
              },
              unstable_isNewReconciler: enableNewReconciler
            };
            HooksDispatcherOnUpdateInDEV = {
              readContext: function(context) {
                return readContext(context);
              },
              useCallback: function(callback, deps) {
                currentHookNameInDev = "useCallback";
                updateHookTypesDev();
                return updateCallback(callback, deps);
              },
              useContext: function(context) {
                currentHookNameInDev = "useContext";
                updateHookTypesDev();
                return readContext(context);
              },
              useEffect: function(create, deps) {
                currentHookNameInDev = "useEffect";
                updateHookTypesDev();
                return updateEffect(create, deps);
              },
              useImperativeHandle: function(ref, create, deps) {
                currentHookNameInDev = "useImperativeHandle";
                updateHookTypesDev();
                return updateImperativeHandle(ref, create, deps);
              },
              useInsertionEffect: function(create, deps) {
                currentHookNameInDev = "useInsertionEffect";
                updateHookTypesDev();
                return updateInsertionEffect(create, deps);
              },
              useLayoutEffect: function(create, deps) {
                currentHookNameInDev = "useLayoutEffect";
                updateHookTypesDev();
                return updateLayoutEffect(create, deps);
              },
              useMemo: function(create, deps) {
                currentHookNameInDev = "useMemo";
                updateHookTypesDev();
                var prevDispatcher = ReactCurrentDispatcher$1.current;
                ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnUpdateInDEV;
                try {
                  return updateMemo(create, deps);
                } finally {
                  ReactCurrentDispatcher$1.current = prevDispatcher;
                }
              },
              useReducer: function(reducer, initialArg, init) {
                currentHookNameInDev = "useReducer";
                updateHookTypesDev();
                var prevDispatcher = ReactCurrentDispatcher$1.current;
                ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnUpdateInDEV;
                try {
                  return updateReducer(reducer, initialArg, init);
                } finally {
                  ReactCurrentDispatcher$1.current = prevDispatcher;
                }
              },
              useRef: function(initialValue) {
                currentHookNameInDev = "useRef";
                updateHookTypesDev();
                return updateRef();
              },
              useState: function(initialState) {
                currentHookNameInDev = "useState";
                updateHookTypesDev();
                var prevDispatcher = ReactCurrentDispatcher$1.current;
                ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnUpdateInDEV;
                try {
                  return updateState(initialState);
                } finally {
                  ReactCurrentDispatcher$1.current = prevDispatcher;
                }
              },
              useDebugValue: function(value, formatterFn) {
                currentHookNameInDev = "useDebugValue";
                updateHookTypesDev();
                return updateDebugValue();
              },
              useDeferredValue: function(value) {
                currentHookNameInDev = "useDeferredValue";
                updateHookTypesDev();
                return updateDeferredValue(value);
              },
              useTransition: function() {
                currentHookNameInDev = "useTransition";
                updateHookTypesDev();
                return updateTransition();
              },
              useMutableSource: function(source, getSnapshot, subscribe) {
                currentHookNameInDev = "useMutableSource";
                updateHookTypesDev();
                return updateMutableSource();
              },
              useSyncExternalStore: function(subscribe, getSnapshot, getServerSnapshot) {
                currentHookNameInDev = "useSyncExternalStore";
                updateHookTypesDev();
                return updateSyncExternalStore(subscribe, getSnapshot);
              },
              useId: function() {
                currentHookNameInDev = "useId";
                updateHookTypesDev();
                return updateId();
              },
              unstable_isNewReconciler: enableNewReconciler
            };
            HooksDispatcherOnRerenderInDEV = {
              readContext: function(context) {
                return readContext(context);
              },
              useCallback: function(callback, deps) {
                currentHookNameInDev = "useCallback";
                updateHookTypesDev();
                return updateCallback(callback, deps);
              },
              useContext: function(context) {
                currentHookNameInDev = "useContext";
                updateHookTypesDev();
                return readContext(context);
              },
              useEffect: function(create, deps) {
                currentHookNameInDev = "useEffect";
                updateHookTypesDev();
                return updateEffect(create, deps);
              },
              useImperativeHandle: function(ref, create, deps) {
                currentHookNameInDev = "useImperativeHandle";
                updateHookTypesDev();
                return updateImperativeHandle(ref, create, deps);
              },
              useInsertionEffect: function(create, deps) {
                currentHookNameInDev = "useInsertionEffect";
                updateHookTypesDev();
                return updateInsertionEffect(create, deps);
              },
              useLayoutEffect: function(create, deps) {
                currentHookNameInDev = "useLayoutEffect";
                updateHookTypesDev();
                return updateLayoutEffect(create, deps);
              },
              useMemo: function(create, deps) {
                currentHookNameInDev = "useMemo";
                updateHookTypesDev();
                var prevDispatcher = ReactCurrentDispatcher$1.current;
                ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnRerenderInDEV;
                try {
                  return updateMemo(create, deps);
                } finally {
                  ReactCurrentDispatcher$1.current = prevDispatcher;
                }
              },
              useReducer: function(reducer, initialArg, init) {
                currentHookNameInDev = "useReducer";
                updateHookTypesDev();
                var prevDispatcher = ReactCurrentDispatcher$1.current;
                ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnRerenderInDEV;
                try {
                  return rerenderReducer(reducer, initialArg, init);
                } finally {
                  ReactCurrentDispatcher$1.current = prevDispatcher;
                }
              },
              useRef: function(initialValue) {
                currentHookNameInDev = "useRef";
                updateHookTypesDev();
                return updateRef();
              },
              useState: function(initialState) {
                currentHookNameInDev = "useState";
                updateHookTypesDev();
                var prevDispatcher = ReactCurrentDispatcher$1.current;
                ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnRerenderInDEV;
                try {
                  return rerenderState(initialState);
                } finally {
                  ReactCurrentDispatcher$1.current = prevDispatcher;
                }
              },
              useDebugValue: function(value, formatterFn) {
                currentHookNameInDev = "useDebugValue";
                updateHookTypesDev();
                return updateDebugValue();
              },
              useDeferredValue: function(value) {
                currentHookNameInDev = "useDeferredValue";
                updateHookTypesDev();
                return rerenderDeferredValue(value);
              },
              useTransition: function() {
                currentHookNameInDev = "useTransition";
                updateHookTypesDev();
                return rerenderTransition();
              },
              useMutableSource: function(source, getSnapshot, subscribe) {
                currentHookNameInDev = "useMutableSource";
                updateHookTypesDev();
                return updateMutableSource();
              },
              useSyncExternalStore: function(subscribe, getSnapshot, getServerSnapshot) {
                currentHookNameInDev = "useSyncExternalStore";
                updateHookTypesDev();
                return updateSyncExternalStore(subscribe, getSnapshot);
              },
              useId: function() {
                currentHookNameInDev = "useId";
                updateHookTypesDev();
                return updateId();
              },
              unstable_isNewReconciler: enableNewReconciler
            };
            InvalidNestedHooksDispatcherOnMountInDEV = {
              readContext: function(context) {
                warnInvalidContextAccess();
                return readContext(context);
              },
              useCallback: function(callback, deps) {
                currentHookNameInDev = "useCallback";
                warnInvalidHookAccess();
                mountHookTypesDev();
                return mountCallback(callback, deps);
              },
              useContext: function(context) {
                currentHookNameInDev = "useContext";
                warnInvalidHookAccess();
                mountHookTypesDev();
                return readContext(context);
              },
              useEffect: function(create, deps) {
                currentHookNameInDev = "useEffect";
                warnInvalidHookAccess();
                mountHookTypesDev();
                return mountEffect(create, deps);
              },
              useImperativeHandle: function(ref, create, deps) {
                currentHookNameInDev = "useImperativeHandle";
                warnInvalidHookAccess();
                mountHookTypesDev();
                return mountImperativeHandle(ref, create, deps);
              },
              useInsertionEffect: function(create, deps) {
                currentHookNameInDev = "useInsertionEffect";
                warnInvalidHookAccess();
                mountHookTypesDev();
                return mountInsertionEffect(create, deps);
              },
              useLayoutEffect: function(create, deps) {
                currentHookNameInDev = "useLayoutEffect";
                warnInvalidHookAccess();
                mountHookTypesDev();
                return mountLayoutEffect(create, deps);
              },
              useMemo: function(create, deps) {
                currentHookNameInDev = "useMemo";
                warnInvalidHookAccess();
                mountHookTypesDev();
                var prevDispatcher = ReactCurrentDispatcher$1.current;
                ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnMountInDEV;
                try {
                  return mountMemo(create, deps);
                } finally {
                  ReactCurrentDispatcher$1.current = prevDispatcher;
                }
              },
              useReducer: function(reducer, initialArg, init) {
                currentHookNameInDev = "useReducer";
                warnInvalidHookAccess();
                mountHookTypesDev();
                var prevDispatcher = ReactCurrentDispatcher$1.current;
                ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnMountInDEV;
                try {
                  return mountReducer(reducer, initialArg, init);
                } finally {
                  ReactCurrentDispatcher$1.current = prevDispatcher;
                }
              },
              useRef: function(initialValue) {
                currentHookNameInDev = "useRef";
                warnInvalidHookAccess();
                mountHookTypesDev();
                return mountRef(initialValue);
              },
              useState: function(initialState) {
                currentHookNameInDev = "useState";
                warnInvalidHookAccess();
                mountHookTypesDev();
                var prevDispatcher = ReactCurrentDispatcher$1.current;
                ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnMountInDEV;
                try {
                  return mountState(initialState);
                } finally {
                  ReactCurrentDispatcher$1.current = prevDispatcher;
                }
              },
              useDebugValue: function(value, formatterFn) {
                currentHookNameInDev = "useDebugValue";
                warnInvalidHookAccess();
                mountHookTypesDev();
                return mountDebugValue();
              },
              useDeferredValue: function(value) {
                currentHookNameInDev = "useDeferredValue";
                warnInvalidHookAccess();
                mountHookTypesDev();
                return mountDeferredValue(value);
              },
              useTransition: function() {
                currentHookNameInDev = "useTransition";
                warnInvalidHookAccess();
                mountHookTypesDev();
                return mountTransition();
              },
              useMutableSource: function(source, getSnapshot, subscribe) {
                currentHookNameInDev = "useMutableSource";
                warnInvalidHookAccess();
                mountHookTypesDev();
                return mountMutableSource();
              },
              useSyncExternalStore: function(subscribe, getSnapshot, getServerSnapshot) {
                currentHookNameInDev = "useSyncExternalStore";
                warnInvalidHookAccess();
                mountHookTypesDev();
                return mountSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
              },
              useId: function() {
                currentHookNameInDev = "useId";
                warnInvalidHookAccess();
                mountHookTypesDev();
                return mountId();
              },
              unstable_isNewReconciler: enableNewReconciler
            };
            InvalidNestedHooksDispatcherOnUpdateInDEV = {
              readContext: function(context) {
                warnInvalidContextAccess();
                return readContext(context);
              },
              useCallback: function(callback, deps) {
                currentHookNameInDev = "useCallback";
                warnInvalidHookAccess();
                updateHookTypesDev();
                return updateCallback(callback, deps);
              },
              useContext: function(context) {
                currentHookNameInDev = "useContext";
                warnInvalidHookAccess();
                updateHookTypesDev();
                return readContext(context);
              },
              useEffect: function(create, deps) {
                currentHookNameInDev = "useEffect";
                warnInvalidHookAccess();
                updateHookTypesDev();
                return updateEffect(create, deps);
              },
              useImperativeHandle: function(ref, create, deps) {
                currentHookNameInDev = "useImperativeHandle";
                warnInvalidHookAccess();
                updateHookTypesDev();
                return updateImperativeHandle(ref, create, deps);
              },
              useInsertionEffect: function(create, deps) {
                currentHookNameInDev = "useInsertionEffect";
                warnInvalidHookAccess();
                updateHookTypesDev();
                return updateInsertionEffect(create, deps);
              },
              useLayoutEffect: function(create, deps) {
                currentHookNameInDev = "useLayoutEffect";
                warnInvalidHookAccess();
                updateHookTypesDev();
                return updateLayoutEffect(create, deps);
              },
              useMemo: function(create, deps) {
                currentHookNameInDev = "useMemo";
                warnInvalidHookAccess();
                updateHookTypesDev();
                var prevDispatcher = ReactCurrentDispatcher$1.current;
                ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnUpdateInDEV;
                try {
                  return updateMemo(create, deps);
                } finally {
                  ReactCurrentDispatcher$1.current = prevDispatcher;
                }
              },
              useReducer: function(reducer, initialArg, init) {
                currentHookNameInDev = "useReducer";
                warnInvalidHookAccess();
                updateHookTypesDev();
                var prevDispatcher = ReactCurrentDispatcher$1.current;
                ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnUpdateInDEV;
                try {
                  return updateReducer(reducer, initialArg, init);
                } finally {
                  ReactCurrentDispatcher$1.current = prevDispatcher;
                }
              },
              useRef: function(initialValue) {
                currentHookNameInDev = "useRef";
                warnInvalidHookAccess();
                updateHookTypesDev();
                return updateRef();
              },
              useState: function(initialState) {
                currentHookNameInDev = "useState";
                warnInvalidHookAccess();
                updateHookTypesDev();
                var prevDispatcher = ReactCurrentDispatcher$1.current;
                ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnUpdateInDEV;
                try {
                  return updateState(initialState);
                } finally {
                  ReactCurrentDispatcher$1.current = prevDispatcher;
                }
              },
              useDebugValue: function(value, formatterFn) {
                currentHookNameInDev = "useDebugValue";
                warnInvalidHookAccess();
                updateHookTypesDev();
                return updateDebugValue();
              },
              useDeferredValue: function(value) {
                currentHookNameInDev = "useDeferredValue";
                warnInvalidHookAccess();
                updateHookTypesDev();
                return updateDeferredValue(value);
              },
              useTransition: function() {
                currentHookNameInDev = "useTransition";
                warnInvalidHookAccess();
                updateHookTypesDev();
                return updateTransition();
              },
              useMutableSource: function(source, getSnapshot, subscribe) {
                currentHookNameInDev = "useMutableSource";
                warnInvalidHookAccess();
                updateHookTypesDev();
                return updateMutableSource();
              },
              useSyncExternalStore: function(subscribe, getSnapshot, getServerSnapshot) {
                currentHookNameInDev = "useSyncExternalStore";
                warnInvalidHookAccess();
                updateHookTypesDev();
                return updateSyncExternalStore(subscribe, getSnapshot);
              },
              useId: function() {
                currentHookNameInDev = "useId";
                warnInvalidHookAccess();
                updateHookTypesDev();
                return updateId();
              },
              unstable_isNewReconciler: enableNewReconciler
            };
            InvalidNestedHooksDispatcherOnRerenderInDEV = {
              readContext: function(context) {
                warnInvalidContextAccess();
                return readContext(context);
              },
              useCallback: function(callback, deps) {
                currentHookNameInDev = "useCallback";
                warnInvalidHookAccess();
                updateHookTypesDev();
                return updateCallback(callback, deps);
              },
              useContext: function(context) {
                currentHookNameInDev = "useContext";
                warnInvalidHookAccess();
                updateHookTypesDev();
                return readContext(context);
              },
              useEffect: function(create, deps) {
                currentHookNameInDev = "useEffect";
                warnInvalidHookAccess();
                updateHookTypesDev();
                return updateEffect(create, deps);
              },
              useImperativeHandle: function(ref, create, deps) {
                currentHookNameInDev = "useImperativeHandle";
                warnInvalidHookAccess();
                updateHookTypesDev();
                return updateImperativeHandle(ref, create, deps);
              },
              useInsertionEffect: function(create, deps) {
                currentHookNameInDev = "useInsertionEffect";
                warnInvalidHookAccess();
                updateHookTypesDev();
                return updateInsertionEffect(create, deps);
              },
              useLayoutEffect: function(create, deps) {
                currentHookNameInDev = "useLayoutEffect";
                warnInvalidHookAccess();
                updateHookTypesDev();
                return updateLayoutEffect(create, deps);
              },
              useMemo: function(create, deps) {
                currentHookNameInDev = "useMemo";
                warnInvalidHookAccess();
                updateHookTypesDev();
                var prevDispatcher = ReactCurrentDispatcher$1.current;
                ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnUpdateInDEV;
                try {
                  return updateMemo(create, deps);
                } finally {
                  ReactCurrentDispatcher$1.current = prevDispatcher;
                }
              },
              useReducer: function(reducer, initialArg, init) {
                currentHookNameInDev = "useReducer";
                warnInvalidHookAccess();
                updateHookTypesDev();
                var prevDispatcher = ReactCurrentDispatcher$1.current;
                ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnUpdateInDEV;
                try {
                  return rerenderReducer(reducer, initialArg, init);
                } finally {
                  ReactCurrentDispatcher$1.current = prevDispatcher;
                }
              },
              useRef: function(initialValue) {
                currentHookNameInDev = "useRef";
                warnInvalidHookAccess();
                updateHookTypesDev();
                return updateRef();
              },
              useState: function(initialState) {
                currentHookNameInDev = "useState";
                warnInvalidHookAccess();
                updateHookTypesDev();
                var prevDispatcher = ReactCurrentDispatcher$1.current;
                ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnUpdateInDEV;
                try {
                  return rerenderState(initialState);
                } finally {
                  ReactCurrentDispatcher$1.current = prevDispatcher;
                }
              },
              useDebugValue: function(value, formatterFn) {
                currentHookNameInDev = "useDebugValue";
                warnInvalidHookAccess();
                updateHookTypesDev();
                return updateDebugValue();
              },
              useDeferredValue: function(value) {
                currentHookNameInDev = "useDeferredValue";
                warnInvalidHookAccess();
                updateHookTypesDev();
                return rerenderDeferredValue(value);
              },
              useTransition: function() {
                currentHookNameInDev = "useTransition";
                warnInvalidHookAccess();
                updateHookTypesDev();
                return rerenderTransition();
              },
              useMutableSource: function(source, getSnapshot, subscribe) {
                currentHookNameInDev = "useMutableSource";
                warnInvalidHookAccess();
                updateHookTypesDev();
                return updateMutableSource();
              },
              useSyncExternalStore: function(subscribe, getSnapshot, getServerSnapshot) {
                currentHookNameInDev = "useSyncExternalStore";
                warnInvalidHookAccess();
                updateHookTypesDev();
                return updateSyncExternalStore(subscribe, getSnapshot);
              },
              useId: function() {
                currentHookNameInDev = "useId";
                warnInvalidHookAccess();
                updateHookTypesDev();
                return updateId();
              },
              unstable_isNewReconciler: enableNewReconciler
            };
          }
          var now$1 = Scheduler.unstable_now;
          var commitTime = 0;
          var layoutEffectStartTime = -1;
          var profilerStartTime = -1;
          var passiveEffectStartTime = -1;
          var currentUpdateIsNested = false;
          var nestedUpdateScheduled = false;
          function isCurrentUpdateNested() {
            return currentUpdateIsNested;
          }
          function markNestedUpdateScheduled() {
            {
              nestedUpdateScheduled = true;
            }
          }
          function resetNestedUpdateFlag() {
            {
              currentUpdateIsNested = false;
              nestedUpdateScheduled = false;
            }
          }
          function syncNestedUpdateFlag() {
            {
              currentUpdateIsNested = nestedUpdateScheduled;
              nestedUpdateScheduled = false;
            }
          }
          function getCommitTime() {
            return commitTime;
          }
          function recordCommitTime() {
            commitTime = now$1();
          }
          function startProfilerTimer(fiber) {
            profilerStartTime = now$1();
            if (fiber.actualStartTime < 0) {
              fiber.actualStartTime = now$1();
            }
          }
          function stopProfilerTimerIfRunning(fiber) {
            profilerStartTime = -1;
          }
          function stopProfilerTimerIfRunningAndRecordDelta(fiber, overrideBaseTime) {
            if (profilerStartTime >= 0) {
              var elapsedTime = now$1() - profilerStartTime;
              fiber.actualDuration += elapsedTime;
              if (overrideBaseTime) {
                fiber.selfBaseDuration = elapsedTime;
              }
              profilerStartTime = -1;
            }
          }
          function recordLayoutEffectDuration(fiber) {
            if (layoutEffectStartTime >= 0) {
              var elapsedTime = now$1() - layoutEffectStartTime;
              layoutEffectStartTime = -1;
              var parentFiber = fiber.return;
              while (parentFiber !== null) {
                switch (parentFiber.tag) {
                  case HostRoot:
                    var root = parentFiber.stateNode;
                    root.effectDuration += elapsedTime;
                    return;
                  case Profiler:
                    var parentStateNode = parentFiber.stateNode;
                    parentStateNode.effectDuration += elapsedTime;
                    return;
                }
                parentFiber = parentFiber.return;
              }
            }
          }
          function recordPassiveEffectDuration(fiber) {
            if (passiveEffectStartTime >= 0) {
              var elapsedTime = now$1() - passiveEffectStartTime;
              passiveEffectStartTime = -1;
              var parentFiber = fiber.return;
              while (parentFiber !== null) {
                switch (parentFiber.tag) {
                  case HostRoot:
                    var root = parentFiber.stateNode;
                    if (root !== null) {
                      root.passiveEffectDuration += elapsedTime;
                    }
                    return;
                  case Profiler:
                    var parentStateNode = parentFiber.stateNode;
                    if (parentStateNode !== null) {
                      parentStateNode.passiveEffectDuration += elapsedTime;
                    }
                    return;
                }
                parentFiber = parentFiber.return;
              }
            }
          }
          function startLayoutEffectTimer() {
            layoutEffectStartTime = now$1();
          }
          function startPassiveEffectTimer() {
            passiveEffectStartTime = now$1();
          }
          function transferActualDuration(fiber) {
            var child = fiber.child;
            while (child) {
              fiber.actualDuration += child.actualDuration;
              child = child.sibling;
            }
          }
          function createCapturedValueAtFiber(value, source) {
            return {
              value,
              source,
              stack: getStackByFiberInDevAndProd(source),
              digest: null
            };
          }
          function createCapturedValue(value, digest, stack) {
            return {
              value,
              source: null,
              stack: stack != null ? stack : null,
              digest: digest != null ? digest : null
            };
          }
          function showErrorDialog(boundary, errorInfo) {
            return true;
          }
          function logCapturedError(boundary, errorInfo) {
            try {
              var logError = showErrorDialog(boundary, errorInfo);
              if (logError === false) {
                return;
              }
              var error2 = errorInfo.value;
              if (true) {
                var source = errorInfo.source;
                var stack = errorInfo.stack;
                var componentStack = stack !== null ? stack : "";
                if (error2 != null && error2._suppressLogging) {
                  if (boundary.tag === ClassComponent) {
                    return;
                  }
                  console["error"](error2);
                }
                var componentName = source ? getComponentNameFromFiber(source) : null;
                var componentNameMessage = componentName ? "The above error occurred in the <" + componentName + "> component:" : "The above error occurred in one of your React components:";
                var errorBoundaryMessage;
                if (boundary.tag === HostRoot) {
                  errorBoundaryMessage = "Consider adding an error boundary to your tree to customize error handling behavior.\nVisit https://reactjs.org/link/error-boundaries to learn more about error boundaries.";
                } else {
                  var errorBoundaryName = getComponentNameFromFiber(boundary) || "Anonymous";
                  errorBoundaryMessage = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + errorBoundaryName + ".");
                }
                var combinedMessage = componentNameMessage + "\n" + componentStack + "\n\n" + ("" + errorBoundaryMessage);
                console["error"](combinedMessage);
              } else {
                console["error"](error2);
              }
            } catch (e) {
              setTimeout(function() {
                throw e;
              });
            }
          }
          var PossiblyWeakMap$1 = typeof WeakMap === "function" ? WeakMap : Map;
          function createRootErrorUpdate(fiber, errorInfo, lane) {
            var update = createUpdate(NoTimestamp, lane);
            update.tag = CaptureUpdate;
            update.payload = {
              element: null
            };
            var error2 = errorInfo.value;
            update.callback = function() {
              onUncaughtError(error2);
              logCapturedError(fiber, errorInfo);
            };
            return update;
          }
          function createClassErrorUpdate(fiber, errorInfo, lane) {
            var update = createUpdate(NoTimestamp, lane);
            update.tag = CaptureUpdate;
            var getDerivedStateFromError = fiber.type.getDerivedStateFromError;
            if (typeof getDerivedStateFromError === "function") {
              var error$1 = errorInfo.value;
              update.payload = function() {
                return getDerivedStateFromError(error$1);
              };
              update.callback = function() {
                {
                  markFailedErrorBoundaryForHotReloading(fiber);
                }
                logCapturedError(fiber, errorInfo);
              };
            }
            var inst = fiber.stateNode;
            if (inst !== null && typeof inst.componentDidCatch === "function") {
              update.callback = function callback() {
                {
                  markFailedErrorBoundaryForHotReloading(fiber);
                }
                logCapturedError(fiber, errorInfo);
                if (typeof getDerivedStateFromError !== "function") {
                  markLegacyErrorBoundaryAsFailed(this);
                }
                var error$12 = errorInfo.value;
                var stack = errorInfo.stack;
                this.componentDidCatch(error$12, {
                  componentStack: stack !== null ? stack : ""
                });
                {
                  if (typeof getDerivedStateFromError !== "function") {
                    if (!includesSomeLane(fiber.lanes, SyncLane)) {
                      error("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", getComponentNameFromFiber(fiber) || "Unknown");
                    }
                  }
                }
              };
            }
            return update;
          }
          function attachPingListener(root, wakeable, lanes) {
            var pingCache = root.pingCache;
            var threadIDs;
            if (pingCache === null) {
              pingCache = root.pingCache = new PossiblyWeakMap$1();
              threadIDs = /* @__PURE__ */ new Set();
              pingCache.set(wakeable, threadIDs);
            } else {
              threadIDs = pingCache.get(wakeable);
              if (threadIDs === void 0) {
                threadIDs = /* @__PURE__ */ new Set();
                pingCache.set(wakeable, threadIDs);
              }
            }
            if (!threadIDs.has(lanes)) {
              threadIDs.add(lanes);
              var ping = pingSuspendedRoot.bind(null, root, wakeable, lanes);
              {
                if (isDevToolsPresent) {
                  restorePendingUpdaters(root, lanes);
                }
              }
              wakeable.then(ping, ping);
            }
          }
          function attachRetryListener(suspenseBoundary, root, wakeable, lanes) {
            var wakeables = suspenseBoundary.updateQueue;
            if (wakeables === null) {
              var updateQueue = /* @__PURE__ */ new Set();
              updateQueue.add(wakeable);
              suspenseBoundary.updateQueue = updateQueue;
            } else {
              wakeables.add(wakeable);
            }
          }
          function resetSuspendedComponent(sourceFiber, rootRenderLanes) {
            var tag = sourceFiber.tag;
            if ((sourceFiber.mode & ConcurrentMode) === NoMode && (tag === FunctionComponent || tag === ForwardRef || tag === SimpleMemoComponent)) {
              var currentSource = sourceFiber.alternate;
              if (currentSource) {
                sourceFiber.updateQueue = currentSource.updateQueue;
                sourceFiber.memoizedState = currentSource.memoizedState;
                sourceFiber.lanes = currentSource.lanes;
              } else {
                sourceFiber.updateQueue = null;
                sourceFiber.memoizedState = null;
              }
            }
          }
          function getNearestSuspenseBoundaryToCapture(returnFiber) {
            var node = returnFiber;
            do {
              if (node.tag === SuspenseComponent && shouldCaptureSuspense(node)) {
                return node;
              }
              node = node.return;
            } while (node !== null);
            return null;
          }
          function markSuspenseBoundaryShouldCapture(suspenseBoundary, returnFiber, sourceFiber, root, rootRenderLanes) {
            if ((suspenseBoundary.mode & ConcurrentMode) === NoMode) {
              if (suspenseBoundary === returnFiber) {
                suspenseBoundary.flags |= ShouldCapture;
              } else {
                suspenseBoundary.flags |= DidCapture;
                sourceFiber.flags |= ForceUpdateForLegacySuspense;
                sourceFiber.flags &= ~(LifecycleEffectMask | Incomplete);
                if (sourceFiber.tag === ClassComponent) {
                  var currentSourceFiber = sourceFiber.alternate;
                  if (currentSourceFiber === null) {
                    sourceFiber.tag = IncompleteClassComponent;
                  } else {
                    var update = createUpdate(NoTimestamp, SyncLane);
                    update.tag = ForceUpdate;
                    enqueueUpdate(sourceFiber, update, SyncLane);
                  }
                }
                sourceFiber.lanes = mergeLanes(sourceFiber.lanes, SyncLane);
              }
              return suspenseBoundary;
            }
            suspenseBoundary.flags |= ShouldCapture;
            suspenseBoundary.lanes = rootRenderLanes;
            return suspenseBoundary;
          }
          function throwException(root, returnFiber, sourceFiber, value, rootRenderLanes) {
            sourceFiber.flags |= Incomplete;
            {
              if (isDevToolsPresent) {
                restorePendingUpdaters(root, rootRenderLanes);
              }
            }
            if (value !== null && typeof value === "object" && typeof value.then === "function") {
              var wakeable = value;
              resetSuspendedComponent(sourceFiber);
              {
                if (getIsHydrating() && sourceFiber.mode & ConcurrentMode) {
                  markDidThrowWhileHydratingDEV();
                }
              }
              var suspenseBoundary = getNearestSuspenseBoundaryToCapture(returnFiber);
              if (suspenseBoundary !== null) {
                suspenseBoundary.flags &= ~ForceClientRender;
                markSuspenseBoundaryShouldCapture(suspenseBoundary, returnFiber, sourceFiber, root, rootRenderLanes);
                if (suspenseBoundary.mode & ConcurrentMode) {
                  attachPingListener(root, wakeable, rootRenderLanes);
                }
                attachRetryListener(suspenseBoundary, root, wakeable);
                return;
              } else {
                if (!includesSyncLane(rootRenderLanes)) {
                  attachPingListener(root, wakeable, rootRenderLanes);
                  renderDidSuspendDelayIfPossible();
                  return;
                }
                var uncaughtSuspenseError = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
                value = uncaughtSuspenseError;
              }
            } else {
              if (getIsHydrating() && sourceFiber.mode & ConcurrentMode) {
                markDidThrowWhileHydratingDEV();
                var _suspenseBoundary = getNearestSuspenseBoundaryToCapture(returnFiber);
                if (_suspenseBoundary !== null) {
                  if ((_suspenseBoundary.flags & ShouldCapture) === NoFlags) {
                    _suspenseBoundary.flags |= ForceClientRender;
                  }
                  markSuspenseBoundaryShouldCapture(_suspenseBoundary, returnFiber, sourceFiber, root, rootRenderLanes);
                  queueHydrationError(createCapturedValueAtFiber(value, sourceFiber));
                  return;
                }
              }
            }
            value = createCapturedValueAtFiber(value, sourceFiber);
            renderDidError(value);
            var workInProgress2 = returnFiber;
            do {
              switch (workInProgress2.tag) {
                case HostRoot: {
                  var _errorInfo = value;
                  workInProgress2.flags |= ShouldCapture;
                  var lane = pickArbitraryLane(rootRenderLanes);
                  workInProgress2.lanes = mergeLanes(workInProgress2.lanes, lane);
                  var update = createRootErrorUpdate(workInProgress2, _errorInfo, lane);
                  enqueueCapturedUpdate(workInProgress2, update);
                  return;
                }
                case ClassComponent:
                  var errorInfo = value;
                  var ctor = workInProgress2.type;
                  var instance = workInProgress2.stateNode;
                  if ((workInProgress2.flags & DidCapture) === NoFlags && (typeof ctor.getDerivedStateFromError === "function" || instance !== null && typeof instance.componentDidCatch === "function" && !isAlreadyFailedLegacyErrorBoundary(instance))) {
                    workInProgress2.flags |= ShouldCapture;
                    var _lane = pickArbitraryLane(rootRenderLanes);
                    workInProgress2.lanes = mergeLanes(workInProgress2.lanes, _lane);
                    var _update = createClassErrorUpdate(workInProgress2, errorInfo, _lane);
                    enqueueCapturedUpdate(workInProgress2, _update);
                    return;
                  }
                  break;
              }
              workInProgress2 = workInProgress2.return;
            } while (workInProgress2 !== null);
          }
          function getSuspendedCache() {
            {
              return null;
            }
          }
          var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
          var didReceiveUpdate = false;
          var didWarnAboutBadClass;
          var didWarnAboutModulePatternComponent;
          var didWarnAboutContextTypeOnFunctionComponent;
          var didWarnAboutGetDerivedStateOnFunctionComponent;
          var didWarnAboutFunctionRefs;
          var didWarnAboutReassigningProps;
          var didWarnAboutRevealOrder;
          var didWarnAboutTailOptions;
          {
            didWarnAboutBadClass = {};
            didWarnAboutModulePatternComponent = {};
            didWarnAboutContextTypeOnFunctionComponent = {};
            didWarnAboutGetDerivedStateOnFunctionComponent = {};
            didWarnAboutFunctionRefs = {};
            didWarnAboutReassigningProps = false;
            didWarnAboutRevealOrder = {};
            didWarnAboutTailOptions = {};
          }
          function reconcileChildren(current2, workInProgress2, nextChildren, renderLanes2) {
            if (current2 === null) {
              workInProgress2.child = mountChildFibers(workInProgress2, null, nextChildren, renderLanes2);
            } else {
              workInProgress2.child = reconcileChildFibers(workInProgress2, current2.child, nextChildren, renderLanes2);
            }
          }
          function forceUnmountCurrentAndReconcile(current2, workInProgress2, nextChildren, renderLanes2) {
            workInProgress2.child = reconcileChildFibers(workInProgress2, current2.child, null, renderLanes2);
            workInProgress2.child = reconcileChildFibers(workInProgress2, null, nextChildren, renderLanes2);
          }
          function updateForwardRef(current2, workInProgress2, Component, nextProps, renderLanes2) {
            {
              if (workInProgress2.type !== workInProgress2.elementType) {
                var innerPropTypes = Component.propTypes;
                if (innerPropTypes) {
                  checkPropTypes(
                    innerPropTypes,
                    nextProps,
                    // Resolved props
                    "prop",
                    getComponentNameFromType(Component)
                  );
                }
              }
            }
            var render2 = Component.render;
            var ref = workInProgress2.ref;
            var nextChildren;
            var hasId;
            prepareToReadContext(workInProgress2, renderLanes2);
            {
              markComponentRenderStarted(workInProgress2);
            }
            {
              ReactCurrentOwner$1.current = workInProgress2;
              setIsRendering(true);
              nextChildren = renderWithHooks(current2, workInProgress2, render2, nextProps, ref, renderLanes2);
              hasId = checkDidRenderIdHook();
              if (workInProgress2.mode & StrictLegacyMode) {
                setIsStrictModeForDevtools(true);
                try {
                  nextChildren = renderWithHooks(current2, workInProgress2, render2, nextProps, ref, renderLanes2);
                  hasId = checkDidRenderIdHook();
                } finally {
                  setIsStrictModeForDevtools(false);
                }
              }
              setIsRendering(false);
            }
            {
              markComponentRenderStopped();
            }
            if (current2 !== null && !didReceiveUpdate) {
              bailoutHooks(current2, workInProgress2, renderLanes2);
              return bailoutOnAlreadyFinishedWork(current2, workInProgress2, renderLanes2);
            }
            if (getIsHydrating() && hasId) {
              pushMaterializedTreeId(workInProgress2);
            }
            workInProgress2.flags |= PerformedWork;
            reconcileChildren(current2, workInProgress2, nextChildren, renderLanes2);
            return workInProgress2.child;
          }
          function updateMemoComponent(current2, workInProgress2, Component, nextProps, renderLanes2) {
            if (current2 === null) {
              var type = Component.type;
              if (isSimpleFunctionComponent(type) && Component.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
              Component.defaultProps === void 0) {
                var resolvedType = type;
                {
                  resolvedType = resolveFunctionForHotReloading(type);
                }
                workInProgress2.tag = SimpleMemoComponent;
                workInProgress2.type = resolvedType;
                {
                  validateFunctionComponentInDev(workInProgress2, type);
                }
                return updateSimpleMemoComponent(current2, workInProgress2, resolvedType, nextProps, renderLanes2);
              }
              {
                var innerPropTypes = type.propTypes;
                if (innerPropTypes) {
                  checkPropTypes(
                    innerPropTypes,
                    nextProps,
                    // Resolved props
                    "prop",
                    getComponentNameFromType(type)
                  );
                }
              }
              var child = createFiberFromTypeAndProps(Component.type, null, nextProps, workInProgress2, workInProgress2.mode, renderLanes2);
              child.ref = workInProgress2.ref;
              child.return = workInProgress2;
              workInProgress2.child = child;
              return child;
            }
            {
              var _type = Component.type;
              var _innerPropTypes = _type.propTypes;
              if (_innerPropTypes) {
                checkPropTypes(
                  _innerPropTypes,
                  nextProps,
                  // Resolved props
                  "prop",
                  getComponentNameFromType(_type)
                );
              }
            }
            var currentChild = current2.child;
            var hasScheduledUpdateOrContext = checkScheduledUpdateOrContext(current2, renderLanes2);
            if (!hasScheduledUpdateOrContext) {
              var prevProps = currentChild.memoizedProps;
              var compare = Component.compare;
              compare = compare !== null ? compare : shallowEqual;
              if (compare(prevProps, nextProps) && current2.ref === workInProgress2.ref) {
                return bailoutOnAlreadyFinishedWork(current2, workInProgress2, renderLanes2);
              }
            }
            workInProgress2.flags |= PerformedWork;
            var newChild = createWorkInProgress(currentChild, nextProps);
            newChild.ref = workInProgress2.ref;
            newChild.return = workInProgress2;
            workInProgress2.child = newChild;
            return newChild;
          }
          function updateSimpleMemoComponent(current2, workInProgress2, Component, nextProps, renderLanes2) {
            {
              if (workInProgress2.type !== workInProgress2.elementType) {
                var outerMemoType = workInProgress2.elementType;
                if (outerMemoType.$$typeof === REACT_LAZY_TYPE) {
                  var lazyComponent = outerMemoType;
                  var payload = lazyComponent._payload;
                  var init = lazyComponent._init;
                  try {
                    outerMemoType = init(payload);
                  } catch (x) {
                    outerMemoType = null;
                  }
                  var outerPropTypes = outerMemoType && outerMemoType.propTypes;
                  if (outerPropTypes) {
                    checkPropTypes(
                      outerPropTypes,
                      nextProps,
                      // Resolved (SimpleMemoComponent has no defaultProps)
                      "prop",
                      getComponentNameFromType(outerMemoType)
                    );
                  }
                }
              }
            }
            if (current2 !== null) {
              var prevProps = current2.memoizedProps;
              if (shallowEqual(prevProps, nextProps) && current2.ref === workInProgress2.ref && // Prevent bailout if the implementation changed due to hot reload.
              workInProgress2.type === current2.type) {
                didReceiveUpdate = false;
                workInProgress2.pendingProps = nextProps = prevProps;
                if (!checkScheduledUpdateOrContext(current2, renderLanes2)) {
                  workInProgress2.lanes = current2.lanes;
                  return bailoutOnAlreadyFinishedWork(current2, workInProgress2, renderLanes2);
                } else if ((current2.flags & ForceUpdateForLegacySuspense) !== NoFlags) {
                  didReceiveUpdate = true;
                }
              }
            }
            return updateFunctionComponent(current2, workInProgress2, Component, nextProps, renderLanes2);
          }
          function updateOffscreenComponent(current2, workInProgress2, renderLanes2) {
            var nextProps = workInProgress2.pendingProps;
            var nextChildren = nextProps.children;
            var prevState = current2 !== null ? current2.memoizedState : null;
            if (nextProps.mode === "hidden" || enableLegacyHidden) {
              if ((workInProgress2.mode & ConcurrentMode) === NoMode) {
                var nextState = {
                  baseLanes: NoLanes,
                  cachePool: null,
                  transitions: null
                };
                workInProgress2.memoizedState = nextState;
                pushRenderLanes(workInProgress2, renderLanes2);
              } else if (!includesSomeLane(renderLanes2, OffscreenLane)) {
                var spawnedCachePool = null;
                var nextBaseLanes;
                if (prevState !== null) {
                  var prevBaseLanes = prevState.baseLanes;
                  nextBaseLanes = mergeLanes(prevBaseLanes, renderLanes2);
                } else {
                  nextBaseLanes = renderLanes2;
                }
                workInProgress2.lanes = workInProgress2.childLanes = laneToLanes(OffscreenLane);
                var _nextState = {
                  baseLanes: nextBaseLanes,
                  cachePool: spawnedCachePool,
                  transitions: null
                };
                workInProgress2.memoizedState = _nextState;
                workInProgress2.updateQueue = null;
                pushRenderLanes(workInProgress2, nextBaseLanes);
                return null;
              } else {
                var _nextState2 = {
                  baseLanes: NoLanes,
                  cachePool: null,
                  transitions: null
                };
                workInProgress2.memoizedState = _nextState2;
                var subtreeRenderLanes2 = prevState !== null ? prevState.baseLanes : renderLanes2;
                pushRenderLanes(workInProgress2, subtreeRenderLanes2);
              }
            } else {
              var _subtreeRenderLanes;
              if (prevState !== null) {
                _subtreeRenderLanes = mergeLanes(prevState.baseLanes, renderLanes2);
                workInProgress2.memoizedState = null;
              } else {
                _subtreeRenderLanes = renderLanes2;
              }
              pushRenderLanes(workInProgress2, _subtreeRenderLanes);
            }
            reconcileChildren(current2, workInProgress2, nextChildren, renderLanes2);
            return workInProgress2.child;
          }
          function updateFragment(current2, workInProgress2, renderLanes2) {
            var nextChildren = workInProgress2.pendingProps;
            reconcileChildren(current2, workInProgress2, nextChildren, renderLanes2);
            return workInProgress2.child;
          }
          function updateMode(current2, workInProgress2, renderLanes2) {
            var nextChildren = workInProgress2.pendingProps.children;
            reconcileChildren(current2, workInProgress2, nextChildren, renderLanes2);
            return workInProgress2.child;
          }
          function updateProfiler(current2, workInProgress2, renderLanes2) {
            {
              workInProgress2.flags |= Update;
              {
                var stateNode = workInProgress2.stateNode;
                stateNode.effectDuration = 0;
                stateNode.passiveEffectDuration = 0;
              }
            }
            var nextProps = workInProgress2.pendingProps;
            var nextChildren = nextProps.children;
            reconcileChildren(current2, workInProgress2, nextChildren, renderLanes2);
            return workInProgress2.child;
          }
          function markRef(current2, workInProgress2) {
            var ref = workInProgress2.ref;
            if (current2 === null && ref !== null || current2 !== null && current2.ref !== ref) {
              workInProgress2.flags |= Ref;
              {
                workInProgress2.flags |= RefStatic;
              }
            }
          }
          function updateFunctionComponent(current2, workInProgress2, Component, nextProps, renderLanes2) {
            {
              if (workInProgress2.type !== workInProgress2.elementType) {
                var innerPropTypes = Component.propTypes;
                if (innerPropTypes) {
                  checkPropTypes(
                    innerPropTypes,
                    nextProps,
                    // Resolved props
                    "prop",
                    getComponentNameFromType(Component)
                  );
                }
              }
            }
            var context;
            {
              var unmaskedContext = getUnmaskedContext(workInProgress2, Component, true);
              context = getMaskedContext(workInProgress2, unmaskedContext);
            }
            var nextChildren;
            var hasId;
            prepareToReadContext(workInProgress2, renderLanes2);
            {
              markComponentRenderStarted(workInProgress2);
            }
            {
              ReactCurrentOwner$1.current = workInProgress2;
              setIsRendering(true);
              nextChildren = renderWithHooks(current2, workInProgress2, Component, nextProps, context, renderLanes2);
              hasId = checkDidRenderIdHook();
              if (workInProgress2.mode & StrictLegacyMode) {
                setIsStrictModeForDevtools(true);
                try {
                  nextChildren = renderWithHooks(current2, workInProgress2, Component, nextProps, context, renderLanes2);
                  hasId = checkDidRenderIdHook();
                } finally {
                  setIsStrictModeForDevtools(false);
                }
              }
              setIsRendering(false);
            }
            {
              markComponentRenderStopped();
            }
            if (current2 !== null && !didReceiveUpdate) {
              bailoutHooks(current2, workInProgress2, renderLanes2);
              return bailoutOnAlreadyFinishedWork(current2, workInProgress2, renderLanes2);
            }
            if (getIsHydrating() && hasId) {
              pushMaterializedTreeId(workInProgress2);
            }
            workInProgress2.flags |= PerformedWork;
            reconcileChildren(current2, workInProgress2, nextChildren, renderLanes2);
            return workInProgress2.child;
          }
          function updateClassComponent(current2, workInProgress2, Component, nextProps, renderLanes2) {
            {
              switch (shouldError(workInProgress2)) {
                case false: {
                  var _instance = workInProgress2.stateNode;
                  var ctor = workInProgress2.type;
                  var tempInstance = new ctor(workInProgress2.memoizedProps, _instance.context);
                  var state = tempInstance.state;
                  _instance.updater.enqueueSetState(_instance, state, null);
                  break;
                }
                case true: {
                  workInProgress2.flags |= DidCapture;
                  workInProgress2.flags |= ShouldCapture;
                  var error$1 = new Error("Simulated error coming from DevTools");
                  var lane = pickArbitraryLane(renderLanes2);
                  workInProgress2.lanes = mergeLanes(workInProgress2.lanes, lane);
                  var update = createClassErrorUpdate(workInProgress2, createCapturedValueAtFiber(error$1, workInProgress2), lane);
                  enqueueCapturedUpdate(workInProgress2, update);
                  break;
                }
              }
              if (workInProgress2.type !== workInProgress2.elementType) {
                var innerPropTypes = Component.propTypes;
                if (innerPropTypes) {
                  checkPropTypes(
                    innerPropTypes,
                    nextProps,
                    // Resolved props
                    "prop",
                    getComponentNameFromType(Component)
                  );
                }
              }
            }
            var hasContext;
            if (isContextProvider(Component)) {
              hasContext = true;
              pushContextProvider(workInProgress2);
            } else {
              hasContext = false;
            }
            prepareToReadContext(workInProgress2, renderLanes2);
            var instance = workInProgress2.stateNode;
            var shouldUpdate;
            if (instance === null) {
              resetSuspendedCurrentOnMountInLegacyMode(current2, workInProgress2);
              constructClassInstance(workInProgress2, Component, nextProps);
              mountClassInstance(workInProgress2, Component, nextProps, renderLanes2);
              shouldUpdate = true;
            } else if (current2 === null) {
              shouldUpdate = resumeMountClassInstance(workInProgress2, Component, nextProps, renderLanes2);
            } else {
              shouldUpdate = updateClassInstance(current2, workInProgress2, Component, nextProps, renderLanes2);
            }
            var nextUnitOfWork = finishClassComponent(current2, workInProgress2, Component, shouldUpdate, hasContext, renderLanes2);
            {
              var inst = workInProgress2.stateNode;
              if (shouldUpdate && inst.props !== nextProps) {
                if (!didWarnAboutReassigningProps) {
                  error("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", getComponentNameFromFiber(workInProgress2) || "a component");
                }
                didWarnAboutReassigningProps = true;
              }
            }
            return nextUnitOfWork;
          }
          function finishClassComponent(current2, workInProgress2, Component, shouldUpdate, hasContext, renderLanes2) {
            markRef(current2, workInProgress2);
            var didCaptureError = (workInProgress2.flags & DidCapture) !== NoFlags;
            if (!shouldUpdate && !didCaptureError) {
              if (hasContext) {
                invalidateContextProvider(workInProgress2, Component, false);
              }
              return bailoutOnAlreadyFinishedWork(current2, workInProgress2, renderLanes2);
            }
            var instance = workInProgress2.stateNode;
            ReactCurrentOwner$1.current = workInProgress2;
            var nextChildren;
            if (didCaptureError && typeof Component.getDerivedStateFromError !== "function") {
              nextChildren = null;
              {
                stopProfilerTimerIfRunning();
              }
            } else {
              {
                markComponentRenderStarted(workInProgress2);
              }
              {
                setIsRendering(true);
                nextChildren = instance.render();
                if (workInProgress2.mode & StrictLegacyMode) {
                  setIsStrictModeForDevtools(true);
                  try {
                    instance.render();
                  } finally {
                    setIsStrictModeForDevtools(false);
                  }
                }
                setIsRendering(false);
              }
              {
                markComponentRenderStopped();
              }
            }
            workInProgress2.flags |= PerformedWork;
            if (current2 !== null && didCaptureError) {
              forceUnmountCurrentAndReconcile(current2, workInProgress2, nextChildren, renderLanes2);
            } else {
              reconcileChildren(current2, workInProgress2, nextChildren, renderLanes2);
            }
            workInProgress2.memoizedState = instance.state;
            if (hasContext) {
              invalidateContextProvider(workInProgress2, Component, true);
            }
            return workInProgress2.child;
          }
          function pushHostRootContext(workInProgress2) {
            var root = workInProgress2.stateNode;
            if (root.pendingContext) {
              pushTopLevelContextObject(workInProgress2, root.pendingContext, root.pendingContext !== root.context);
            } else if (root.context) {
              pushTopLevelContextObject(workInProgress2, root.context, false);
            }
            pushHostContainer(workInProgress2, root.containerInfo);
          }
          function updateHostRoot(current2, workInProgress2, renderLanes2) {
            pushHostRootContext(workInProgress2);
            if (current2 === null) {
              throw new Error("Should have a current fiber. This is a bug in React.");
            }
            var nextProps = workInProgress2.pendingProps;
            var prevState = workInProgress2.memoizedState;
            var prevChildren = prevState.element;
            cloneUpdateQueue(current2, workInProgress2);
            processUpdateQueue(workInProgress2, nextProps, null, renderLanes2);
            var nextState = workInProgress2.memoizedState;
            var root = workInProgress2.stateNode;
            var nextChildren = nextState.element;
            if (supportsHydration && prevState.isDehydrated) {
              var overrideState = {
                element: nextChildren,
                isDehydrated: false,
                cache: nextState.cache,
                pendingSuspenseBoundaries: nextState.pendingSuspenseBoundaries,
                transitions: nextState.transitions
              };
              var updateQueue = workInProgress2.updateQueue;
              updateQueue.baseState = overrideState;
              workInProgress2.memoizedState = overrideState;
              if (workInProgress2.flags & ForceClientRender) {
                var recoverableError = createCapturedValueAtFiber(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), workInProgress2);
                return mountHostRootWithoutHydrating(current2, workInProgress2, nextChildren, renderLanes2, recoverableError);
              } else if (nextChildren !== prevChildren) {
                var _recoverableError = createCapturedValueAtFiber(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), workInProgress2);
                return mountHostRootWithoutHydrating(current2, workInProgress2, nextChildren, renderLanes2, _recoverableError);
              } else {
                enterHydrationState(workInProgress2);
                var child = mountChildFibers(workInProgress2, null, nextChildren, renderLanes2);
                workInProgress2.child = child;
                var node = child;
                while (node) {
                  node.flags = node.flags & ~Placement | Hydrating;
                  node = node.sibling;
                }
              }
            } else {
              resetHydrationState();
              if (nextChildren === prevChildren) {
                return bailoutOnAlreadyFinishedWork(current2, workInProgress2, renderLanes2);
              }
              reconcileChildren(current2, workInProgress2, nextChildren, renderLanes2);
            }
            return workInProgress2.child;
          }
          function mountHostRootWithoutHydrating(current2, workInProgress2, nextChildren, renderLanes2, recoverableError) {
            resetHydrationState();
            queueHydrationError(recoverableError);
            workInProgress2.flags |= ForceClientRender;
            reconcileChildren(current2, workInProgress2, nextChildren, renderLanes2);
            return workInProgress2.child;
          }
          function updateHostComponent(current2, workInProgress2, renderLanes2) {
            pushHostContext(workInProgress2);
            if (current2 === null) {
              tryToClaimNextHydratableInstance(workInProgress2);
            }
            var type = workInProgress2.type;
            var nextProps = workInProgress2.pendingProps;
            var prevProps = current2 !== null ? current2.memoizedProps : null;
            var nextChildren = nextProps.children;
            var isDirectTextChild = shouldSetTextContent(type, nextProps);
            if (isDirectTextChild) {
              nextChildren = null;
            } else if (prevProps !== null && shouldSetTextContent(type, prevProps)) {
              workInProgress2.flags |= ContentReset;
            }
            markRef(current2, workInProgress2);
            reconcileChildren(current2, workInProgress2, nextChildren, renderLanes2);
            return workInProgress2.child;
          }
          function updateHostText(current2, workInProgress2) {
            if (current2 === null) {
              tryToClaimNextHydratableInstance(workInProgress2);
            }
            return null;
          }
          function mountLazyComponent(_current, workInProgress2, elementType, renderLanes2) {
            resetSuspendedCurrentOnMountInLegacyMode(_current, workInProgress2);
            var props = workInProgress2.pendingProps;
            var lazyComponent = elementType;
            var payload = lazyComponent._payload;
            var init = lazyComponent._init;
            var Component = init(payload);
            workInProgress2.type = Component;
            var resolvedTag = workInProgress2.tag = resolveLazyComponentTag(Component);
            var resolvedProps = resolveDefaultProps(Component, props);
            var child;
            switch (resolvedTag) {
              case FunctionComponent: {
                {
                  validateFunctionComponentInDev(workInProgress2, Component);
                  workInProgress2.type = Component = resolveFunctionForHotReloading(Component);
                }
                child = updateFunctionComponent(null, workInProgress2, Component, resolvedProps, renderLanes2);
                return child;
              }
              case ClassComponent: {
                {
                  workInProgress2.type = Component = resolveClassForHotReloading(Component);
                }
                child = updateClassComponent(null, workInProgress2, Component, resolvedProps, renderLanes2);
                return child;
              }
              case ForwardRef: {
                {
                  workInProgress2.type = Component = resolveForwardRefForHotReloading(Component);
                }
                child = updateForwardRef(null, workInProgress2, Component, resolvedProps, renderLanes2);
                return child;
              }
              case MemoComponent: {
                {
                  if (workInProgress2.type !== workInProgress2.elementType) {
                    var outerPropTypes = Component.propTypes;
                    if (outerPropTypes) {
                      checkPropTypes(
                        outerPropTypes,
                        resolvedProps,
                        // Resolved for outer only
                        "prop",
                        getComponentNameFromType(Component)
                      );
                    }
                  }
                }
                child = updateMemoComponent(
                  null,
                  workInProgress2,
                  Component,
                  resolveDefaultProps(Component.type, resolvedProps),
                  // The inner type can have defaults too
                  renderLanes2
                );
                return child;
              }
            }
            var hint = "";
            {
              if (Component !== null && typeof Component === "object" && Component.$$typeof === REACT_LAZY_TYPE) {
                hint = " Did you wrap a component in React.lazy() more than once?";
              }
            }
            throw new Error("Element type is invalid. Received a promise that resolves to: " + Component + ". " + ("Lazy element type must resolve to a class or function." + hint));
          }
          function mountIncompleteClassComponent(_current, workInProgress2, Component, nextProps, renderLanes2) {
            resetSuspendedCurrentOnMountInLegacyMode(_current, workInProgress2);
            workInProgress2.tag = ClassComponent;
            var hasContext;
            if (isContextProvider(Component)) {
              hasContext = true;
              pushContextProvider(workInProgress2);
            } else {
              hasContext = false;
            }
            prepareToReadContext(workInProgress2, renderLanes2);
            constructClassInstance(workInProgress2, Component, nextProps);
            mountClassInstance(workInProgress2, Component, nextProps, renderLanes2);
            return finishClassComponent(null, workInProgress2, Component, true, hasContext, renderLanes2);
          }
          function mountIndeterminateComponent(_current, workInProgress2, Component, renderLanes2) {
            resetSuspendedCurrentOnMountInLegacyMode(_current, workInProgress2);
            var props = workInProgress2.pendingProps;
            var context;
            {
              var unmaskedContext = getUnmaskedContext(workInProgress2, Component, false);
              context = getMaskedContext(workInProgress2, unmaskedContext);
            }
            prepareToReadContext(workInProgress2, renderLanes2);
            var value;
            var hasId;
            {
              markComponentRenderStarted(workInProgress2);
            }
            {
              if (Component.prototype && typeof Component.prototype.render === "function") {
                var componentName = getComponentNameFromType(Component) || "Unknown";
                if (!didWarnAboutBadClass[componentName]) {
                  error("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", componentName, componentName);
                  didWarnAboutBadClass[componentName] = true;
                }
              }
              if (workInProgress2.mode & StrictLegacyMode) {
                ReactStrictModeWarnings.recordLegacyContextWarning(workInProgress2, null);
              }
              setIsRendering(true);
              ReactCurrentOwner$1.current = workInProgress2;
              value = renderWithHooks(null, workInProgress2, Component, props, context, renderLanes2);
              hasId = checkDidRenderIdHook();
              setIsRendering(false);
            }
            {
              markComponentRenderStopped();
            }
            workInProgress2.flags |= PerformedWork;
            {
              if (typeof value === "object" && value !== null && typeof value.render === "function" && value.$$typeof === void 0) {
                var _componentName = getComponentNameFromType(Component) || "Unknown";
                if (!didWarnAboutModulePatternComponent[_componentName]) {
                  error("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", _componentName, _componentName, _componentName);
                  didWarnAboutModulePatternComponent[_componentName] = true;
                }
              }
            }
            if (
              // Run these checks in production only if the flag is off.
              // Eventually we'll delete this branch altogether.
              typeof value === "object" && value !== null && typeof value.render === "function" && value.$$typeof === void 0
            ) {
              {
                var _componentName2 = getComponentNameFromType(Component) || "Unknown";
                if (!didWarnAboutModulePatternComponent[_componentName2]) {
                  error("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", _componentName2, _componentName2, _componentName2);
                  didWarnAboutModulePatternComponent[_componentName2] = true;
                }
              }
              workInProgress2.tag = ClassComponent;
              workInProgress2.memoizedState = null;
              workInProgress2.updateQueue = null;
              var hasContext = false;
              if (isContextProvider(Component)) {
                hasContext = true;
                pushContextProvider(workInProgress2);
              } else {
                hasContext = false;
              }
              workInProgress2.memoizedState = value.state !== null && value.state !== void 0 ? value.state : null;
              initializeUpdateQueue(workInProgress2);
              adoptClassInstance(workInProgress2, value);
              mountClassInstance(workInProgress2, Component, props, renderLanes2);
              return finishClassComponent(null, workInProgress2, Component, true, hasContext, renderLanes2);
            } else {
              workInProgress2.tag = FunctionComponent;
              {
                if (workInProgress2.mode & StrictLegacyMode) {
                  setIsStrictModeForDevtools(true);
                  try {
                    value = renderWithHooks(null, workInProgress2, Component, props, context, renderLanes2);
                    hasId = checkDidRenderIdHook();
                  } finally {
                    setIsStrictModeForDevtools(false);
                  }
                }
              }
              if (getIsHydrating() && hasId) {
                pushMaterializedTreeId(workInProgress2);
              }
              reconcileChildren(null, workInProgress2, value, renderLanes2);
              {
                validateFunctionComponentInDev(workInProgress2, Component);
              }
              return workInProgress2.child;
            }
          }
          function validateFunctionComponentInDev(workInProgress2, Component) {
            {
              if (Component) {
                if (Component.childContextTypes) {
                  error("%s(...): childContextTypes cannot be defined on a function component.", Component.displayName || Component.name || "Component");
                }
              }
              if (workInProgress2.ref !== null) {
                var info = "";
                var ownerName = getCurrentFiberOwnerNameInDevOrNull();
                if (ownerName) {
                  info += "\n\nCheck the render method of `" + ownerName + "`.";
                }
                var warningKey = ownerName || "";
                var debugSource = workInProgress2._debugSource;
                if (debugSource) {
                  warningKey = debugSource.fileName + ":" + debugSource.lineNumber;
                }
                if (!didWarnAboutFunctionRefs[warningKey]) {
                  didWarnAboutFunctionRefs[warningKey] = true;
                  error("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", info);
                }
              }
              if (typeof Component.getDerivedStateFromProps === "function") {
                var _componentName3 = getComponentNameFromType(Component) || "Unknown";
                if (!didWarnAboutGetDerivedStateOnFunctionComponent[_componentName3]) {
                  error("%s: Function components do not support getDerivedStateFromProps.", _componentName3);
                  didWarnAboutGetDerivedStateOnFunctionComponent[_componentName3] = true;
                }
              }
              if (typeof Component.contextType === "object" && Component.contextType !== null) {
                var _componentName4 = getComponentNameFromType(Component) || "Unknown";
                if (!didWarnAboutContextTypeOnFunctionComponent[_componentName4]) {
                  error("%s: Function components do not support contextType.", _componentName4);
                  didWarnAboutContextTypeOnFunctionComponent[_componentName4] = true;
                }
              }
            }
          }
          var SUSPENDED_MARKER = {
            dehydrated: null,
            treeContext: null,
            retryLane: NoLane
          };
          function mountSuspenseOffscreenState(renderLanes2) {
            return {
              baseLanes: renderLanes2,
              cachePool: getSuspendedCache(),
              transitions: null
            };
          }
          function updateSuspenseOffscreenState(prevOffscreenState, renderLanes2) {
            var cachePool = null;
            return {
              baseLanes: mergeLanes(prevOffscreenState.baseLanes, renderLanes2),
              cachePool,
              transitions: prevOffscreenState.transitions
            };
          }
          function shouldRemainOnFallback(suspenseContext, current2, workInProgress2, renderLanes2) {
            if (current2 !== null) {
              var suspenseState = current2.memoizedState;
              if (suspenseState === null) {
                return false;
              }
            }
            return hasSuspenseContext(suspenseContext, ForceSuspenseFallback);
          }
          function getRemainingWorkInPrimaryTree(current2, renderLanes2) {
            return removeLanes(current2.childLanes, renderLanes2);
          }
          function updateSuspenseComponent(current2, workInProgress2, renderLanes2) {
            var nextProps = workInProgress2.pendingProps;
            {
              if (shouldSuspend(workInProgress2)) {
                workInProgress2.flags |= DidCapture;
              }
            }
            var suspenseContext = suspenseStackCursor.current;
            var showFallback = false;
            var didSuspend = (workInProgress2.flags & DidCapture) !== NoFlags;
            if (didSuspend || shouldRemainOnFallback(suspenseContext, current2)) {
              showFallback = true;
              workInProgress2.flags &= ~DidCapture;
            } else {
              if (current2 === null || current2.memoizedState !== null) {
                {
                  suspenseContext = addSubtreeSuspenseContext(suspenseContext, InvisibleParentSuspenseContext);
                }
              }
            }
            suspenseContext = setDefaultShallowSuspenseContext(suspenseContext);
            pushSuspenseContext(workInProgress2, suspenseContext);
            if (current2 === null) {
              tryToClaimNextHydratableInstance(workInProgress2);
              var suspenseState = workInProgress2.memoizedState;
              if (suspenseState !== null) {
                var dehydrated = suspenseState.dehydrated;
                if (dehydrated !== null) {
                  return mountDehydratedSuspenseComponent(workInProgress2, dehydrated);
                }
              }
              var nextPrimaryChildren = nextProps.children;
              var nextFallbackChildren = nextProps.fallback;
              if (showFallback) {
                var fallbackFragment = mountSuspenseFallbackChildren(workInProgress2, nextPrimaryChildren, nextFallbackChildren, renderLanes2);
                var primaryChildFragment = workInProgress2.child;
                primaryChildFragment.memoizedState = mountSuspenseOffscreenState(renderLanes2);
                workInProgress2.memoizedState = SUSPENDED_MARKER;
                return fallbackFragment;
              } else {
                return mountSuspensePrimaryChildren(workInProgress2, nextPrimaryChildren);
              }
            } else {
              var prevState = current2.memoizedState;
              if (prevState !== null) {
                var _dehydrated = prevState.dehydrated;
                if (_dehydrated !== null) {
                  return updateDehydratedSuspenseComponent(current2, workInProgress2, didSuspend, nextProps, _dehydrated, prevState, renderLanes2);
                }
              }
              if (showFallback) {
                var _nextFallbackChildren = nextProps.fallback;
                var _nextPrimaryChildren = nextProps.children;
                var fallbackChildFragment = updateSuspenseFallbackChildren(current2, workInProgress2, _nextPrimaryChildren, _nextFallbackChildren, renderLanes2);
                var _primaryChildFragment2 = workInProgress2.child;
                var prevOffscreenState = current2.child.memoizedState;
                _primaryChildFragment2.memoizedState = prevOffscreenState === null ? mountSuspenseOffscreenState(renderLanes2) : updateSuspenseOffscreenState(prevOffscreenState, renderLanes2);
                _primaryChildFragment2.childLanes = getRemainingWorkInPrimaryTree(current2, renderLanes2);
                workInProgress2.memoizedState = SUSPENDED_MARKER;
                return fallbackChildFragment;
              } else {
                var _nextPrimaryChildren2 = nextProps.children;
                var _primaryChildFragment3 = updateSuspensePrimaryChildren(current2, workInProgress2, _nextPrimaryChildren2, renderLanes2);
                workInProgress2.memoizedState = null;
                return _primaryChildFragment3;
              }
            }
          }
          function mountSuspensePrimaryChildren(workInProgress2, primaryChildren, renderLanes2) {
            var mode = workInProgress2.mode;
            var primaryChildProps = {
              mode: "visible",
              children: primaryChildren
            };
            var primaryChildFragment = mountWorkInProgressOffscreenFiber(primaryChildProps, mode);
            primaryChildFragment.return = workInProgress2;
            workInProgress2.child = primaryChildFragment;
            return primaryChildFragment;
          }
          function mountSuspenseFallbackChildren(workInProgress2, primaryChildren, fallbackChildren, renderLanes2) {
            var mode = workInProgress2.mode;
            var progressedPrimaryFragment = workInProgress2.child;
            var primaryChildProps = {
              mode: "hidden",
              children: primaryChildren
            };
            var primaryChildFragment;
            var fallbackChildFragment;
            if ((mode & ConcurrentMode) === NoMode && progressedPrimaryFragment !== null) {
              primaryChildFragment = progressedPrimaryFragment;
              primaryChildFragment.childLanes = NoLanes;
              primaryChildFragment.pendingProps = primaryChildProps;
              if (workInProgress2.mode & ProfileMode) {
                primaryChildFragment.actualDuration = 0;
                primaryChildFragment.actualStartTime = -1;
                primaryChildFragment.selfBaseDuration = 0;
                primaryChildFragment.treeBaseDuration = 0;
              }
              fallbackChildFragment = createFiberFromFragment(fallbackChildren, mode, renderLanes2, null);
            } else {
              primaryChildFragment = mountWorkInProgressOffscreenFiber(primaryChildProps, mode);
              fallbackChildFragment = createFiberFromFragment(fallbackChildren, mode, renderLanes2, null);
            }
            primaryChildFragment.return = workInProgress2;
            fallbackChildFragment.return = workInProgress2;
            primaryChildFragment.sibling = fallbackChildFragment;
            workInProgress2.child = primaryChildFragment;
            return fallbackChildFragment;
          }
          function mountWorkInProgressOffscreenFiber(offscreenProps, mode, renderLanes2) {
            return createFiberFromOffscreen(offscreenProps, mode, NoLanes, null);
          }
          function updateWorkInProgressOffscreenFiber(current2, offscreenProps) {
            return createWorkInProgress(current2, offscreenProps);
          }
          function updateSuspensePrimaryChildren(current2, workInProgress2, primaryChildren, renderLanes2) {
            var currentPrimaryChildFragment = current2.child;
            var currentFallbackChildFragment = currentPrimaryChildFragment.sibling;
            var primaryChildFragment = updateWorkInProgressOffscreenFiber(currentPrimaryChildFragment, {
              mode: "visible",
              children: primaryChildren
            });
            if ((workInProgress2.mode & ConcurrentMode) === NoMode) {
              primaryChildFragment.lanes = renderLanes2;
            }
            primaryChildFragment.return = workInProgress2;
            primaryChildFragment.sibling = null;
            if (currentFallbackChildFragment !== null) {
              var deletions = workInProgress2.deletions;
              if (deletions === null) {
                workInProgress2.deletions = [currentFallbackChildFragment];
                workInProgress2.flags |= ChildDeletion;
              } else {
                deletions.push(currentFallbackChildFragment);
              }
            }
            workInProgress2.child = primaryChildFragment;
            return primaryChildFragment;
          }
          function updateSuspenseFallbackChildren(current2, workInProgress2, primaryChildren, fallbackChildren, renderLanes2) {
            var mode = workInProgress2.mode;
            var currentPrimaryChildFragment = current2.child;
            var currentFallbackChildFragment = currentPrimaryChildFragment.sibling;
            var primaryChildProps = {
              mode: "hidden",
              children: primaryChildren
            };
            var primaryChildFragment;
            if (
              // In legacy mode, we commit the primary tree as if it successfully
              // completed, even though it's in an inconsistent state.
              (mode & ConcurrentMode) === NoMode && // Make sure we're on the second pass, i.e. the primary child fragment was
              // already cloned. In legacy mode, the only case where this isn't true is
              // when DevTools forces us to display a fallback; we skip the first render
              // pass entirely and go straight to rendering the fallback. (In Concurrent
              // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
              // only codepath.)
              workInProgress2.child !== currentPrimaryChildFragment
            ) {
              var progressedPrimaryFragment = workInProgress2.child;
              primaryChildFragment = progressedPrimaryFragment;
              primaryChildFragment.childLanes = NoLanes;
              primaryChildFragment.pendingProps = primaryChildProps;
              if (workInProgress2.mode & ProfileMode) {
                primaryChildFragment.actualDuration = 0;
                primaryChildFragment.actualStartTime = -1;
                primaryChildFragment.selfBaseDuration = currentPrimaryChildFragment.selfBaseDuration;
                primaryChildFragment.treeBaseDuration = currentPrimaryChildFragment.treeBaseDuration;
              }
              workInProgress2.deletions = null;
            } else {
              primaryChildFragment = updateWorkInProgressOffscreenFiber(currentPrimaryChildFragment, primaryChildProps);
              primaryChildFragment.subtreeFlags = currentPrimaryChildFragment.subtreeFlags & StaticMask;
            }
            var fallbackChildFragment;
            if (currentFallbackChildFragment !== null) {
              fallbackChildFragment = createWorkInProgress(currentFallbackChildFragment, fallbackChildren);
            } else {
              fallbackChildFragment = createFiberFromFragment(fallbackChildren, mode, renderLanes2, null);
              fallbackChildFragment.flags |= Placement;
            }
            fallbackChildFragment.return = workInProgress2;
            primaryChildFragment.return = workInProgress2;
            primaryChildFragment.sibling = fallbackChildFragment;
            workInProgress2.child = primaryChildFragment;
            return fallbackChildFragment;
          }
          function retrySuspenseComponentWithoutHydrating(current2, workInProgress2, renderLanes2, recoverableError) {
            if (recoverableError !== null) {
              queueHydrationError(recoverableError);
            }
            reconcileChildFibers(workInProgress2, current2.child, null, renderLanes2);
            var nextProps = workInProgress2.pendingProps;
            var primaryChildren = nextProps.children;
            var primaryChildFragment = mountSuspensePrimaryChildren(workInProgress2, primaryChildren);
            primaryChildFragment.flags |= Placement;
            workInProgress2.memoizedState = null;
            return primaryChildFragment;
          }
          function mountSuspenseFallbackAfterRetryWithoutHydrating(current2, workInProgress2, primaryChildren, fallbackChildren, renderLanes2) {
            var fiberMode = workInProgress2.mode;
            var primaryChildProps = {
              mode: "visible",
              children: primaryChildren
            };
            var primaryChildFragment = mountWorkInProgressOffscreenFiber(primaryChildProps, fiberMode);
            var fallbackChildFragment = createFiberFromFragment(fallbackChildren, fiberMode, renderLanes2, null);
            fallbackChildFragment.flags |= Placement;
            primaryChildFragment.return = workInProgress2;
            fallbackChildFragment.return = workInProgress2;
            primaryChildFragment.sibling = fallbackChildFragment;
            workInProgress2.child = primaryChildFragment;
            if ((workInProgress2.mode & ConcurrentMode) !== NoMode) {
              reconcileChildFibers(workInProgress2, current2.child, null, renderLanes2);
            }
            return fallbackChildFragment;
          }
          function mountDehydratedSuspenseComponent(workInProgress2, suspenseInstance, renderLanes2) {
            if ((workInProgress2.mode & ConcurrentMode) === NoMode) {
              {
                error("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components.");
              }
              workInProgress2.lanes = laneToLanes(SyncLane);
            } else if (isSuspenseInstanceFallback(suspenseInstance)) {
              workInProgress2.lanes = laneToLanes(DefaultHydrationLane);
            } else {
              workInProgress2.lanes = laneToLanes(OffscreenLane);
            }
            return null;
          }
          function updateDehydratedSuspenseComponent(current2, workInProgress2, didSuspend, nextProps, suspenseInstance, suspenseState, renderLanes2) {
            if (!didSuspend) {
              warnIfHydrating();
              if ((workInProgress2.mode & ConcurrentMode) === NoMode) {
                return retrySuspenseComponentWithoutHydrating(
                  current2,
                  workInProgress2,
                  renderLanes2,
                  // TODO: When we delete legacy mode, we should make this error argument
                  // required — every concurrent mode path that causes hydration to
                  // de-opt to client rendering should have an error message.
                  null
                );
              }
              if (isSuspenseInstanceFallback(suspenseInstance)) {
                var digest, message, stack;
                {
                  var _getSuspenseInstanceF = getSuspenseInstanceFallbackErrorDetails(suspenseInstance);
                  digest = _getSuspenseInstanceF.digest;
                  message = _getSuspenseInstanceF.message;
                  stack = _getSuspenseInstanceF.stack;
                }
                var error2;
                if (message) {
                  error2 = new Error(message);
                } else {
                  error2 = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
                }
                var capturedValue = createCapturedValue(error2, digest, stack);
                return retrySuspenseComponentWithoutHydrating(current2, workInProgress2, renderLanes2, capturedValue);
              }
              var hasContextChanged2 = includesSomeLane(renderLanes2, current2.childLanes);
              if (didReceiveUpdate || hasContextChanged2) {
                var root = getWorkInProgressRoot();
                if (root !== null) {
                  var attemptHydrationAtLane = getBumpedLaneForHydration(root, renderLanes2);
                  if (attemptHydrationAtLane !== NoLane && attemptHydrationAtLane !== suspenseState.retryLane) {
                    suspenseState.retryLane = attemptHydrationAtLane;
                    var eventTime = NoTimestamp;
                    enqueueConcurrentRenderForLane(current2, attemptHydrationAtLane);
                    scheduleUpdateOnFiber(root, current2, attemptHydrationAtLane, eventTime);
                  }
                }
                renderDidSuspendDelayIfPossible();
                var _capturedValue = createCapturedValue(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
                return retrySuspenseComponentWithoutHydrating(current2, workInProgress2, renderLanes2, _capturedValue);
              } else if (isSuspenseInstancePending(suspenseInstance)) {
                workInProgress2.flags |= DidCapture;
                workInProgress2.child = current2.child;
                var retry = retryDehydratedSuspenseBoundary.bind(null, current2);
                registerSuspenseInstanceRetry(suspenseInstance, retry);
                return null;
              } else {
                reenterHydrationStateFromDehydratedSuspenseInstance(workInProgress2, suspenseInstance, suspenseState.treeContext);
                var primaryChildren = nextProps.children;
                var primaryChildFragment = mountSuspensePrimaryChildren(workInProgress2, primaryChildren);
                primaryChildFragment.flags |= Hydrating;
                return primaryChildFragment;
              }
            } else {
              if (workInProgress2.flags & ForceClientRender) {
                workInProgress2.flags &= ~ForceClientRender;
                var _capturedValue2 = createCapturedValue(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
                return retrySuspenseComponentWithoutHydrating(current2, workInProgress2, renderLanes2, _capturedValue2);
              } else if (workInProgress2.memoizedState !== null) {
                workInProgress2.child = current2.child;
                workInProgress2.flags |= DidCapture;
                return null;
              } else {
                var nextPrimaryChildren = nextProps.children;
                var nextFallbackChildren = nextProps.fallback;
                var fallbackChildFragment = mountSuspenseFallbackAfterRetryWithoutHydrating(current2, workInProgress2, nextPrimaryChildren, nextFallbackChildren, renderLanes2);
                var _primaryChildFragment4 = workInProgress2.child;
                _primaryChildFragment4.memoizedState = mountSuspenseOffscreenState(renderLanes2);
                workInProgress2.memoizedState = SUSPENDED_MARKER;
                return fallbackChildFragment;
              }
            }
          }
          function scheduleSuspenseWorkOnFiber(fiber, renderLanes2, propagationRoot) {
            fiber.lanes = mergeLanes(fiber.lanes, renderLanes2);
            var alternate = fiber.alternate;
            if (alternate !== null) {
              alternate.lanes = mergeLanes(alternate.lanes, renderLanes2);
            }
            scheduleContextWorkOnParentPath(fiber.return, renderLanes2, propagationRoot);
          }
          function propagateSuspenseContextChange(workInProgress2, firstChild, renderLanes2) {
            var node = firstChild;
            while (node !== null) {
              if (node.tag === SuspenseComponent) {
                var state = node.memoizedState;
                if (state !== null) {
                  scheduleSuspenseWorkOnFiber(node, renderLanes2, workInProgress2);
                }
              } else if (node.tag === SuspenseListComponent) {
                scheduleSuspenseWorkOnFiber(node, renderLanes2, workInProgress2);
              } else if (node.child !== null) {
                node.child.return = node;
                node = node.child;
                continue;
              }
              if (node === workInProgress2) {
                return;
              }
              while (node.sibling === null) {
                if (node.return === null || node.return === workInProgress2) {
                  return;
                }
                node = node.return;
              }
              node.sibling.return = node.return;
              node = node.sibling;
            }
          }
          function findLastContentRow(firstChild) {
            var row = firstChild;
            var lastContentRow = null;
            while (row !== null) {
              var currentRow = row.alternate;
              if (currentRow !== null && findFirstSuspended(currentRow) === null) {
                lastContentRow = row;
              }
              row = row.sibling;
            }
            return lastContentRow;
          }
          function validateRevealOrder(revealOrder) {
            {
              if (revealOrder !== void 0 && revealOrder !== "forwards" && revealOrder !== "backwards" && revealOrder !== "together" && !didWarnAboutRevealOrder[revealOrder]) {
                didWarnAboutRevealOrder[revealOrder] = true;
                if (typeof revealOrder === "string") {
                  switch (revealOrder.toLowerCase()) {
                    case "together":
                    case "forwards":
                    case "backwards": {
                      error('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', revealOrder, revealOrder.toLowerCase());
                      break;
                    }
                    case "forward":
                    case "backward": {
                      error('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', revealOrder, revealOrder.toLowerCase());
                      break;
                    }
                    default:
                      error('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', revealOrder);
                      break;
                  }
                } else {
                  error('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', revealOrder);
                }
              }
            }
          }
          function validateTailOptions(tailMode, revealOrder) {
            {
              if (tailMode !== void 0 && !didWarnAboutTailOptions[tailMode]) {
                if (tailMode !== "collapsed" && tailMode !== "hidden") {
                  didWarnAboutTailOptions[tailMode] = true;
                  error('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', tailMode);
                } else if (revealOrder !== "forwards" && revealOrder !== "backwards") {
                  didWarnAboutTailOptions[tailMode] = true;
                  error('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', tailMode);
                }
              }
            }
          }
          function validateSuspenseListNestedChild(childSlot, index2) {
            {
              var isAnArray = isArray(childSlot);
              var isIterable = !isAnArray && typeof getIteratorFn(childSlot) === "function";
              if (isAnArray || isIterable) {
                var type = isAnArray ? "array" : "iterable";
                error("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", type, index2, type);
                return false;
              }
            }
            return true;
          }
          function validateSuspenseListChildren(children, revealOrder) {
            {
              if ((revealOrder === "forwards" || revealOrder === "backwards") && children !== void 0 && children !== null && children !== false) {
                if (isArray(children)) {
                  for (var i = 0; i < children.length; i++) {
                    if (!validateSuspenseListNestedChild(children[i], i)) {
                      return;
                    }
                  }
                } else {
                  var iteratorFn = getIteratorFn(children);
                  if (typeof iteratorFn === "function") {
                    var childrenIterator = iteratorFn.call(children);
                    if (childrenIterator) {
                      var step = childrenIterator.next();
                      var _i = 0;
                      for (; !step.done; step = childrenIterator.next()) {
                        if (!validateSuspenseListNestedChild(step.value, _i)) {
                          return;
                        }
                        _i++;
                      }
                    }
                  } else {
                    error('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', revealOrder);
                  }
                }
              }
            }
          }
          function initSuspenseListRenderState(workInProgress2, isBackwards, tail, lastContentRow, tailMode) {
            var renderState = workInProgress2.memoizedState;
            if (renderState === null) {
              workInProgress2.memoizedState = {
                isBackwards,
                rendering: null,
                renderingStartTime: 0,
                last: lastContentRow,
                tail,
                tailMode
              };
            } else {
              renderState.isBackwards = isBackwards;
              renderState.rendering = null;
              renderState.renderingStartTime = 0;
              renderState.last = lastContentRow;
              renderState.tail = tail;
              renderState.tailMode = tailMode;
            }
          }
          function updateSuspenseListComponent(current2, workInProgress2, renderLanes2) {
            var nextProps = workInProgress2.pendingProps;
            var revealOrder = nextProps.revealOrder;
            var tailMode = nextProps.tail;
            var newChildren = nextProps.children;
            validateRevealOrder(revealOrder);
            validateTailOptions(tailMode, revealOrder);
            validateSuspenseListChildren(newChildren, revealOrder);
            reconcileChildren(current2, workInProgress2, newChildren, renderLanes2);
            var suspenseContext = suspenseStackCursor.current;
            var shouldForceFallback = hasSuspenseContext(suspenseContext, ForceSuspenseFallback);
            if (shouldForceFallback) {
              suspenseContext = setShallowSuspenseContext(suspenseContext, ForceSuspenseFallback);
              workInProgress2.flags |= DidCapture;
            } else {
              var didSuspendBefore = current2 !== null && (current2.flags & DidCapture) !== NoFlags;
              if (didSuspendBefore) {
                propagateSuspenseContextChange(workInProgress2, workInProgress2.child, renderLanes2);
              }
              suspenseContext = setDefaultShallowSuspenseContext(suspenseContext);
            }
            pushSuspenseContext(workInProgress2, suspenseContext);
            if ((workInProgress2.mode & ConcurrentMode) === NoMode) {
              workInProgress2.memoizedState = null;
            } else {
              switch (revealOrder) {
                case "forwards": {
                  var lastContentRow = findLastContentRow(workInProgress2.child);
                  var tail;
                  if (lastContentRow === null) {
                    tail = workInProgress2.child;
                    workInProgress2.child = null;
                  } else {
                    tail = lastContentRow.sibling;
                    lastContentRow.sibling = null;
                  }
                  initSuspenseListRenderState(
                    workInProgress2,
                    false,
                    // isBackwards
                    tail,
                    lastContentRow,
                    tailMode
                  );
                  break;
                }
                case "backwards": {
                  var _tail = null;
                  var row = workInProgress2.child;
                  workInProgress2.child = null;
                  while (row !== null) {
                    var currentRow = row.alternate;
                    if (currentRow !== null && findFirstSuspended(currentRow) === null) {
                      workInProgress2.child = row;
                      break;
                    }
                    var nextRow = row.sibling;
                    row.sibling = _tail;
                    _tail = row;
                    row = nextRow;
                  }
                  initSuspenseListRenderState(
                    workInProgress2,
                    true,
                    // isBackwards
                    _tail,
                    null,
                    // last
                    tailMode
                  );
                  break;
                }
                case "together": {
                  initSuspenseListRenderState(
                    workInProgress2,
                    false,
                    // isBackwards
                    null,
                    // tail
                    null,
                    // last
                    void 0
                  );
                  break;
                }
                default: {
                  workInProgress2.memoizedState = null;
                }
              }
            }
            return workInProgress2.child;
          }
          function updatePortalComponent(current2, workInProgress2, renderLanes2) {
            pushHostContainer(workInProgress2, workInProgress2.stateNode.containerInfo);
            var nextChildren = workInProgress2.pendingProps;
            if (current2 === null) {
              workInProgress2.child = reconcileChildFibers(workInProgress2, null, nextChildren, renderLanes2);
            } else {
              reconcileChildren(current2, workInProgress2, nextChildren, renderLanes2);
            }
            return workInProgress2.child;
          }
          var hasWarnedAboutUsingNoValuePropOnContextProvider = false;
          function updateContextProvider(current2, workInProgress2, renderLanes2) {
            var providerType = workInProgress2.type;
            var context = providerType._context;
            var newProps = workInProgress2.pendingProps;
            var oldProps = workInProgress2.memoizedProps;
            var newValue = newProps.value;
            {
              if (!("value" in newProps)) {
                if (!hasWarnedAboutUsingNoValuePropOnContextProvider) {
                  hasWarnedAboutUsingNoValuePropOnContextProvider = true;
                  error("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?");
                }
              }
              var providerPropTypes = workInProgress2.type.propTypes;
              if (providerPropTypes) {
                checkPropTypes(providerPropTypes, newProps, "prop", "Context.Provider");
              }
            }
            pushProvider(workInProgress2, context, newValue);
            {
              if (oldProps !== null) {
                var oldValue = oldProps.value;
                if (objectIs(oldValue, newValue)) {
                  if (oldProps.children === newProps.children && !hasContextChanged()) {
                    return bailoutOnAlreadyFinishedWork(current2, workInProgress2, renderLanes2);
                  }
                } else {
                  propagateContextChange(workInProgress2, context, renderLanes2);
                }
              }
            }
            var newChildren = newProps.children;
            reconcileChildren(current2, workInProgress2, newChildren, renderLanes2);
            return workInProgress2.child;
          }
          var hasWarnedAboutUsingContextAsConsumer = false;
          function updateContextConsumer(current2, workInProgress2, renderLanes2) {
            var context = workInProgress2.type;
            {
              if (context._context === void 0) {
                if (context !== context.Consumer) {
                  if (!hasWarnedAboutUsingContextAsConsumer) {
                    hasWarnedAboutUsingContextAsConsumer = true;
                    error("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?");
                  }
                }
              } else {
                context = context._context;
              }
            }
            var newProps = workInProgress2.pendingProps;
            var render2 = newProps.children;
            {
              if (typeof render2 !== "function") {
                error("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it.");
              }
            }
            prepareToReadContext(workInProgress2, renderLanes2);
            var newValue = readContext(context);
            {
              markComponentRenderStarted(workInProgress2);
            }
            var newChildren;
            {
              ReactCurrentOwner$1.current = workInProgress2;
              setIsRendering(true);
              newChildren = render2(newValue);
              setIsRendering(false);
            }
            {
              markComponentRenderStopped();
            }
            workInProgress2.flags |= PerformedWork;
            reconcileChildren(current2, workInProgress2, newChildren, renderLanes2);
            return workInProgress2.child;
          }
          function markWorkInProgressReceivedUpdate() {
            didReceiveUpdate = true;
          }
          function resetSuspendedCurrentOnMountInLegacyMode(current2, workInProgress2) {
            if ((workInProgress2.mode & ConcurrentMode) === NoMode) {
              if (current2 !== null) {
                current2.alternate = null;
                workInProgress2.alternate = null;
                workInProgress2.flags |= Placement;
              }
            }
          }
          function bailoutOnAlreadyFinishedWork(current2, workInProgress2, renderLanes2) {
            if (current2 !== null) {
              workInProgress2.dependencies = current2.dependencies;
            }
            {
              stopProfilerTimerIfRunning();
            }
            markSkippedUpdateLanes(workInProgress2.lanes);
            if (!includesSomeLane(renderLanes2, workInProgress2.childLanes)) {
              {
                return null;
              }
            }
            cloneChildFibers(current2, workInProgress2);
            return workInProgress2.child;
          }
          function remountFiber(current2, oldWorkInProgress, newWorkInProgress) {
            {
              var returnFiber = oldWorkInProgress.return;
              if (returnFiber === null) {
                throw new Error("Cannot swap the root fiber.");
              }
              current2.alternate = null;
              oldWorkInProgress.alternate = null;
              newWorkInProgress.index = oldWorkInProgress.index;
              newWorkInProgress.sibling = oldWorkInProgress.sibling;
              newWorkInProgress.return = oldWorkInProgress.return;
              newWorkInProgress.ref = oldWorkInProgress.ref;
              if (oldWorkInProgress === returnFiber.child) {
                returnFiber.child = newWorkInProgress;
              } else {
                var prevSibling = returnFiber.child;
                if (prevSibling === null) {
                  throw new Error("Expected parent to have a child.");
                }
                while (prevSibling.sibling !== oldWorkInProgress) {
                  prevSibling = prevSibling.sibling;
                  if (prevSibling === null) {
                    throw new Error("Expected to find the previous sibling.");
                  }
                }
                prevSibling.sibling = newWorkInProgress;
              }
              var deletions = returnFiber.deletions;
              if (deletions === null) {
                returnFiber.deletions = [current2];
                returnFiber.flags |= ChildDeletion;
              } else {
                deletions.push(current2);
              }
              newWorkInProgress.flags |= Placement;
              return newWorkInProgress;
            }
          }
          function checkScheduledUpdateOrContext(current2, renderLanes2) {
            var updateLanes = current2.lanes;
            if (includesSomeLane(updateLanes, renderLanes2)) {
              return true;
            }
            return false;
          }
          function attemptEarlyBailoutIfNoScheduledUpdate(current2, workInProgress2, renderLanes2) {
            switch (workInProgress2.tag) {
              case HostRoot:
                pushHostRootContext(workInProgress2);
                var root = workInProgress2.stateNode;
                resetHydrationState();
                break;
              case HostComponent:
                pushHostContext(workInProgress2);
                break;
              case ClassComponent: {
                var Component = workInProgress2.type;
                if (isContextProvider(Component)) {
                  pushContextProvider(workInProgress2);
                }
                break;
              }
              case HostPortal:
                pushHostContainer(workInProgress2, workInProgress2.stateNode.containerInfo);
                break;
              case ContextProvider: {
                var newValue = workInProgress2.memoizedProps.value;
                var context = workInProgress2.type._context;
                pushProvider(workInProgress2, context, newValue);
                break;
              }
              case Profiler:
                {
                  var hasChildWork = includesSomeLane(renderLanes2, workInProgress2.childLanes);
                  if (hasChildWork) {
                    workInProgress2.flags |= Update;
                  }
                  {
                    var stateNode = workInProgress2.stateNode;
                    stateNode.effectDuration = 0;
                    stateNode.passiveEffectDuration = 0;
                  }
                }
                break;
              case SuspenseComponent: {
                var state = workInProgress2.memoizedState;
                if (state !== null) {
                  if (state.dehydrated !== null) {
                    pushSuspenseContext(workInProgress2, setDefaultShallowSuspenseContext(suspenseStackCursor.current));
                    workInProgress2.flags |= DidCapture;
                    return null;
                  }
                  var primaryChildFragment = workInProgress2.child;
                  var primaryChildLanes = primaryChildFragment.childLanes;
                  if (includesSomeLane(renderLanes2, primaryChildLanes)) {
                    return updateSuspenseComponent(current2, workInProgress2, renderLanes2);
                  } else {
                    pushSuspenseContext(workInProgress2, setDefaultShallowSuspenseContext(suspenseStackCursor.current));
                    var child = bailoutOnAlreadyFinishedWork(current2, workInProgress2, renderLanes2);
                    if (child !== null) {
                      return child.sibling;
                    } else {
                      return null;
                    }
                  }
                } else {
                  pushSuspenseContext(workInProgress2, setDefaultShallowSuspenseContext(suspenseStackCursor.current));
                }
                break;
              }
              case SuspenseListComponent: {
                var didSuspendBefore = (current2.flags & DidCapture) !== NoFlags;
                var _hasChildWork = includesSomeLane(renderLanes2, workInProgress2.childLanes);
                if (didSuspendBefore) {
                  if (_hasChildWork) {
                    return updateSuspenseListComponent(current2, workInProgress2, renderLanes2);
                  }
                  workInProgress2.flags |= DidCapture;
                }
                var renderState = workInProgress2.memoizedState;
                if (renderState !== null) {
                  renderState.rendering = null;
                  renderState.tail = null;
                  renderState.lastEffect = null;
                }
                pushSuspenseContext(workInProgress2, suspenseStackCursor.current);
                if (_hasChildWork) {
                  break;
                } else {
                  return null;
                }
              }
              case OffscreenComponent:
              case LegacyHiddenComponent: {
                workInProgress2.lanes = NoLanes;
                return updateOffscreenComponent(current2, workInProgress2, renderLanes2);
              }
            }
            return bailoutOnAlreadyFinishedWork(current2, workInProgress2, renderLanes2);
          }
          function beginWork(current2, workInProgress2, renderLanes2) {
            {
              if (workInProgress2._debugNeedsRemount && current2 !== null) {
                return remountFiber(current2, workInProgress2, createFiberFromTypeAndProps(workInProgress2.type, workInProgress2.key, workInProgress2.pendingProps, workInProgress2._debugOwner || null, workInProgress2.mode, workInProgress2.lanes));
              }
            }
            if (current2 !== null) {
              var oldProps = current2.memoizedProps;
              var newProps = workInProgress2.pendingProps;
              if (oldProps !== newProps || hasContextChanged() || // Force a re-render if the implementation changed due to hot reload:
              workInProgress2.type !== current2.type) {
                didReceiveUpdate = true;
              } else {
                var hasScheduledUpdateOrContext = checkScheduledUpdateOrContext(current2, renderLanes2);
                if (!hasScheduledUpdateOrContext && // If this is the second pass of an error or suspense boundary, there
                // may not be work scheduled on `current`, so we check for this flag.
                (workInProgress2.flags & DidCapture) === NoFlags) {
                  didReceiveUpdate = false;
                  return attemptEarlyBailoutIfNoScheduledUpdate(current2, workInProgress2, renderLanes2);
                }
                if ((current2.flags & ForceUpdateForLegacySuspense) !== NoFlags) {
                  didReceiveUpdate = true;
                } else {
                  didReceiveUpdate = false;
                }
              }
            } else {
              didReceiveUpdate = false;
              if (getIsHydrating() && isForkedChild(workInProgress2)) {
                var slotIndex = workInProgress2.index;
                var numberOfForks = getForksAtLevel();
                pushTreeId(workInProgress2, numberOfForks, slotIndex);
              }
            }
            workInProgress2.lanes = NoLanes;
            switch (workInProgress2.tag) {
              case IndeterminateComponent: {
                return mountIndeterminateComponent(current2, workInProgress2, workInProgress2.type, renderLanes2);
              }
              case LazyComponent: {
                var elementType = workInProgress2.elementType;
                return mountLazyComponent(current2, workInProgress2, elementType, renderLanes2);
              }
              case FunctionComponent: {
                var Component = workInProgress2.type;
                var unresolvedProps = workInProgress2.pendingProps;
                var resolvedProps = workInProgress2.elementType === Component ? unresolvedProps : resolveDefaultProps(Component, unresolvedProps);
                return updateFunctionComponent(current2, workInProgress2, Component, resolvedProps, renderLanes2);
              }
              case ClassComponent: {
                var _Component = workInProgress2.type;
                var _unresolvedProps = workInProgress2.pendingProps;
                var _resolvedProps = workInProgress2.elementType === _Component ? _unresolvedProps : resolveDefaultProps(_Component, _unresolvedProps);
                return updateClassComponent(current2, workInProgress2, _Component, _resolvedProps, renderLanes2);
              }
              case HostRoot:
                return updateHostRoot(current2, workInProgress2, renderLanes2);
              case HostComponent:
                return updateHostComponent(current2, workInProgress2, renderLanes2);
              case HostText:
                return updateHostText(current2, workInProgress2);
              case SuspenseComponent:
                return updateSuspenseComponent(current2, workInProgress2, renderLanes2);
              case HostPortal:
                return updatePortalComponent(current2, workInProgress2, renderLanes2);
              case ForwardRef: {
                var type = workInProgress2.type;
                var _unresolvedProps2 = workInProgress2.pendingProps;
                var _resolvedProps2 = workInProgress2.elementType === type ? _unresolvedProps2 : resolveDefaultProps(type, _unresolvedProps2);
                return updateForwardRef(current2, workInProgress2, type, _resolvedProps2, renderLanes2);
              }
              case Fragment:
                return updateFragment(current2, workInProgress2, renderLanes2);
              case Mode:
                return updateMode(current2, workInProgress2, renderLanes2);
              case Profiler:
                return updateProfiler(current2, workInProgress2, renderLanes2);
              case ContextProvider:
                return updateContextProvider(current2, workInProgress2, renderLanes2);
              case ContextConsumer:
                return updateContextConsumer(current2, workInProgress2, renderLanes2);
              case MemoComponent: {
                var _type2 = workInProgress2.type;
                var _unresolvedProps3 = workInProgress2.pendingProps;
                var _resolvedProps3 = resolveDefaultProps(_type2, _unresolvedProps3);
                {
                  if (workInProgress2.type !== workInProgress2.elementType) {
                    var outerPropTypes = _type2.propTypes;
                    if (outerPropTypes) {
                      checkPropTypes(
                        outerPropTypes,
                        _resolvedProps3,
                        // Resolved for outer only
                        "prop",
                        getComponentNameFromType(_type2)
                      );
                    }
                  }
                }
                _resolvedProps3 = resolveDefaultProps(_type2.type, _resolvedProps3);
                return updateMemoComponent(current2, workInProgress2, _type2, _resolvedProps3, renderLanes2);
              }
              case SimpleMemoComponent: {
                return updateSimpleMemoComponent(current2, workInProgress2, workInProgress2.type, workInProgress2.pendingProps, renderLanes2);
              }
              case IncompleteClassComponent: {
                var _Component2 = workInProgress2.type;
                var _unresolvedProps4 = workInProgress2.pendingProps;
                var _resolvedProps4 = workInProgress2.elementType === _Component2 ? _unresolvedProps4 : resolveDefaultProps(_Component2, _unresolvedProps4);
                return mountIncompleteClassComponent(current2, workInProgress2, _Component2, _resolvedProps4, renderLanes2);
              }
              case SuspenseListComponent: {
                return updateSuspenseListComponent(current2, workInProgress2, renderLanes2);
              }
              case ScopeComponent: {
                break;
              }
              case OffscreenComponent: {
                return updateOffscreenComponent(current2, workInProgress2, renderLanes2);
              }
            }
            throw new Error("Unknown unit of work tag (" + workInProgress2.tag + "). This error is likely caused by a bug in React. Please file an issue.");
          }
          function markUpdate(workInProgress2) {
            workInProgress2.flags |= Update;
          }
          function markRef$1(workInProgress2) {
            workInProgress2.flags |= Ref;
            {
              workInProgress2.flags |= RefStatic;
            }
          }
          function hadNoMutationsEffects(current2, completedWork) {
            var didBailout = current2 !== null && current2.child === completedWork.child;
            if (didBailout) {
              return true;
            }
            if ((completedWork.flags & ChildDeletion) !== NoFlags) {
              return false;
            }
            var child = completedWork.child;
            while (child !== null) {
              if ((child.flags & MutationMask) !== NoFlags || (child.subtreeFlags & MutationMask) !== NoFlags) {
                return false;
              }
              child = child.sibling;
            }
            return true;
          }
          var appendAllChildren;
          var updateHostContainer;
          var updateHostComponent$1;
          var updateHostText$1;
          if (supportsMutation) {
            appendAllChildren = function(parent, workInProgress2, needsVisibilityToggle, isHidden) {
              var node = workInProgress2.child;
              while (node !== null) {
                if (node.tag === HostComponent || node.tag === HostText) {
                  appendInitialChild(parent, node.stateNode);
                } else if (node.tag === HostPortal)
                  ;
                else if (node.child !== null) {
                  node.child.return = node;
                  node = node.child;
                  continue;
                }
                if (node === workInProgress2) {
                  return;
                }
                while (node.sibling === null) {
                  if (node.return === null || node.return === workInProgress2) {
                    return;
                  }
                  node = node.return;
                }
                node.sibling.return = node.return;
                node = node.sibling;
              }
            };
            updateHostContainer = function(current2, workInProgress2) {
            };
            updateHostComponent$1 = function(current2, workInProgress2, type, newProps, rootContainerInstance) {
              var oldProps = current2.memoizedProps;
              if (oldProps === newProps) {
                return;
              }
              var instance = workInProgress2.stateNode;
              var currentHostContext = getHostContext();
              var updatePayload = prepareUpdate(instance, type, oldProps, newProps, rootContainerInstance, currentHostContext);
              workInProgress2.updateQueue = updatePayload;
              if (updatePayload) {
                markUpdate(workInProgress2);
              }
            };
            updateHostText$1 = function(current2, workInProgress2, oldText, newText) {
              if (oldText !== newText) {
                markUpdate(workInProgress2);
              }
            };
          } else if (supportsPersistence) {
            appendAllChildren = function(parent, workInProgress2, needsVisibilityToggle, isHidden) {
              var node = workInProgress2.child;
              while (node !== null) {
                if (node.tag === HostComponent) {
                  var instance = node.stateNode;
                  if (needsVisibilityToggle && isHidden) {
                    var props = node.memoizedProps;
                    var type = node.type;
                    instance = cloneHiddenInstance(instance, type, props, node);
                  }
                  appendInitialChild(parent, instance);
                } else if (node.tag === HostText) {
                  var _instance = node.stateNode;
                  if (needsVisibilityToggle && isHidden) {
                    var text = node.memoizedProps;
                    _instance = cloneHiddenTextInstance(_instance, text, node);
                  }
                  appendInitialChild(parent, _instance);
                } else if (node.tag === HostPortal)
                  ;
                else if (node.tag === OffscreenComponent && node.memoizedState !== null) {
                  var child = node.child;
                  if (child !== null) {
                    child.return = node;
                  }
                  appendAllChildren(parent, node, true, true);
                } else if (node.child !== null) {
                  node.child.return = node;
                  node = node.child;
                  continue;
                }
                node = node;
                if (node === workInProgress2) {
                  return;
                }
                while (node.sibling === null) {
                  if (node.return === null || node.return === workInProgress2) {
                    return;
                  }
                  node = node.return;
                }
                node.sibling.return = node.return;
                node = node.sibling;
              }
            };
            var appendAllChildrenToContainer = function(containerChildSet, workInProgress2, needsVisibilityToggle, isHidden) {
              var node = workInProgress2.child;
              while (node !== null) {
                if (node.tag === HostComponent) {
                  var instance = node.stateNode;
                  if (needsVisibilityToggle && isHidden) {
                    var props = node.memoizedProps;
                    var type = node.type;
                    instance = cloneHiddenInstance(instance, type, props, node);
                  }
                  appendChildToContainerChildSet(containerChildSet, instance);
                } else if (node.tag === HostText) {
                  var _instance2 = node.stateNode;
                  if (needsVisibilityToggle && isHidden) {
                    var text = node.memoizedProps;
                    _instance2 = cloneHiddenTextInstance(_instance2, text, node);
                  }
                  appendChildToContainerChildSet(containerChildSet, _instance2);
                } else if (node.tag === HostPortal)
                  ;
                else if (node.tag === OffscreenComponent && node.memoizedState !== null) {
                  var child = node.child;
                  if (child !== null) {
                    child.return = node;
                  }
                  appendAllChildrenToContainer(containerChildSet, node, true, true);
                } else if (node.child !== null) {
                  node.child.return = node;
                  node = node.child;
                  continue;
                }
                node = node;
                if (node === workInProgress2) {
                  return;
                }
                while (node.sibling === null) {
                  if (node.return === null || node.return === workInProgress2) {
                    return;
                  }
                  node = node.return;
                }
                node.sibling.return = node.return;
                node = node.sibling;
              }
            };
            updateHostContainer = function(current2, workInProgress2) {
              var portalOrRoot = workInProgress2.stateNode;
              var childrenUnchanged = hadNoMutationsEffects(current2, workInProgress2);
              if (childrenUnchanged)
                ;
              else {
                var container = portalOrRoot.containerInfo;
                var newChildSet = createContainerChildSet(container);
                appendAllChildrenToContainer(newChildSet, workInProgress2, false, false);
                portalOrRoot.pendingChildren = newChildSet;
                markUpdate(workInProgress2);
                finalizeContainerChildren(container, newChildSet);
              }
            };
            updateHostComponent$1 = function(current2, workInProgress2, type, newProps, rootContainerInstance) {
              var currentInstance = current2.stateNode;
              var oldProps = current2.memoizedProps;
              var childrenUnchanged = hadNoMutationsEffects(current2, workInProgress2);
              if (childrenUnchanged && oldProps === newProps) {
                workInProgress2.stateNode = currentInstance;
                return;
              }
              var recyclableInstance = workInProgress2.stateNode;
              var currentHostContext = getHostContext();
              var updatePayload = null;
              if (oldProps !== newProps) {
                updatePayload = prepareUpdate(recyclableInstance, type, oldProps, newProps, rootContainerInstance, currentHostContext);
              }
              if (childrenUnchanged && updatePayload === null) {
                workInProgress2.stateNode = currentInstance;
                return;
              }
              var newInstance = cloneInstance(currentInstance, updatePayload, type, oldProps, newProps, workInProgress2, childrenUnchanged, recyclableInstance);
              if (finalizeInitialChildren(newInstance, type, newProps, rootContainerInstance, currentHostContext)) {
                markUpdate(workInProgress2);
              }
              workInProgress2.stateNode = newInstance;
              if (childrenUnchanged) {
                markUpdate(workInProgress2);
              } else {
                appendAllChildren(newInstance, workInProgress2, false, false);
              }
            };
            updateHostText$1 = function(current2, workInProgress2, oldText, newText) {
              if (oldText !== newText) {
                var rootContainerInstance = getRootHostContainer();
                var currentHostContext = getHostContext();
                workInProgress2.stateNode = createTextInstance(newText, rootContainerInstance, currentHostContext, workInProgress2);
                markUpdate(workInProgress2);
              } else {
                workInProgress2.stateNode = current2.stateNode;
              }
            };
          } else {
            updateHostContainer = function(current2, workInProgress2) {
            };
            updateHostComponent$1 = function(current2, workInProgress2, type, newProps, rootContainerInstance) {
            };
            updateHostText$1 = function(current2, workInProgress2, oldText, newText) {
            };
          }
          function cutOffTailIfNeeded(renderState, hasRenderedATailFallback) {
            if (getIsHydrating()) {
              return;
            }
            switch (renderState.tailMode) {
              case "hidden": {
                var tailNode = renderState.tail;
                var lastTailNode = null;
                while (tailNode !== null) {
                  if (tailNode.alternate !== null) {
                    lastTailNode = tailNode;
                  }
                  tailNode = tailNode.sibling;
                }
                if (lastTailNode === null) {
                  renderState.tail = null;
                } else {
                  lastTailNode.sibling = null;
                }
                break;
              }
              case "collapsed": {
                var _tailNode = renderState.tail;
                var _lastTailNode = null;
                while (_tailNode !== null) {
                  if (_tailNode.alternate !== null) {
                    _lastTailNode = _tailNode;
                  }
                  _tailNode = _tailNode.sibling;
                }
                if (_lastTailNode === null) {
                  if (!hasRenderedATailFallback && renderState.tail !== null) {
                    renderState.tail.sibling = null;
                  } else {
                    renderState.tail = null;
                  }
                } else {
                  _lastTailNode.sibling = null;
                }
                break;
              }
            }
          }
          function bubbleProperties(completedWork) {
            var didBailout = completedWork.alternate !== null && completedWork.alternate.child === completedWork.child;
            var newChildLanes = NoLanes;
            var subtreeFlags = NoFlags;
            if (!didBailout) {
              if ((completedWork.mode & ProfileMode) !== NoMode) {
                var actualDuration = completedWork.actualDuration;
                var treeBaseDuration = completedWork.selfBaseDuration;
                var child = completedWork.child;
                while (child !== null) {
                  newChildLanes = mergeLanes(newChildLanes, mergeLanes(child.lanes, child.childLanes));
                  subtreeFlags |= child.subtreeFlags;
                  subtreeFlags |= child.flags;
                  actualDuration += child.actualDuration;
                  treeBaseDuration += child.treeBaseDuration;
                  child = child.sibling;
                }
                completedWork.actualDuration = actualDuration;
                completedWork.treeBaseDuration = treeBaseDuration;
              } else {
                var _child = completedWork.child;
                while (_child !== null) {
                  newChildLanes = mergeLanes(newChildLanes, mergeLanes(_child.lanes, _child.childLanes));
                  subtreeFlags |= _child.subtreeFlags;
                  subtreeFlags |= _child.flags;
                  _child.return = completedWork;
                  _child = _child.sibling;
                }
              }
              completedWork.subtreeFlags |= subtreeFlags;
            } else {
              if ((completedWork.mode & ProfileMode) !== NoMode) {
                var _treeBaseDuration = completedWork.selfBaseDuration;
                var _child2 = completedWork.child;
                while (_child2 !== null) {
                  newChildLanes = mergeLanes(newChildLanes, mergeLanes(_child2.lanes, _child2.childLanes));
                  subtreeFlags |= _child2.subtreeFlags & StaticMask;
                  subtreeFlags |= _child2.flags & StaticMask;
                  _treeBaseDuration += _child2.treeBaseDuration;
                  _child2 = _child2.sibling;
                }
                completedWork.treeBaseDuration = _treeBaseDuration;
              } else {
                var _child3 = completedWork.child;
                while (_child3 !== null) {
                  newChildLanes = mergeLanes(newChildLanes, mergeLanes(_child3.lanes, _child3.childLanes));
                  subtreeFlags |= _child3.subtreeFlags & StaticMask;
                  subtreeFlags |= _child3.flags & StaticMask;
                  _child3.return = completedWork;
                  _child3 = _child3.sibling;
                }
              }
              completedWork.subtreeFlags |= subtreeFlags;
            }
            completedWork.childLanes = newChildLanes;
            return didBailout;
          }
          function completeDehydratedSuspenseBoundary(current2, workInProgress2, nextState) {
            if (hasUnhydratedTailNodes() && (workInProgress2.mode & ConcurrentMode) !== NoMode && (workInProgress2.flags & DidCapture) === NoFlags) {
              warnIfUnhydratedTailNodes(workInProgress2);
              resetHydrationState();
              workInProgress2.flags |= ForceClientRender | Incomplete | ShouldCapture;
              return false;
            }
            var wasHydrated = popHydrationState(workInProgress2);
            if (nextState !== null && nextState.dehydrated !== null) {
              if (current2 === null) {
                if (!wasHydrated) {
                  throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
                }
                prepareToHydrateHostSuspenseInstance(workInProgress2);
                bubbleProperties(workInProgress2);
                {
                  if ((workInProgress2.mode & ProfileMode) !== NoMode) {
                    var isTimedOutSuspense = nextState !== null;
                    if (isTimedOutSuspense) {
                      var primaryChildFragment = workInProgress2.child;
                      if (primaryChildFragment !== null) {
                        workInProgress2.treeBaseDuration -= primaryChildFragment.treeBaseDuration;
                      }
                    }
                  }
                }
                return false;
              } else {
                resetHydrationState();
                if ((workInProgress2.flags & DidCapture) === NoFlags) {
                  workInProgress2.memoizedState = null;
                }
                workInProgress2.flags |= Update;
                bubbleProperties(workInProgress2);
                {
                  if ((workInProgress2.mode & ProfileMode) !== NoMode) {
                    var _isTimedOutSuspense = nextState !== null;
                    if (_isTimedOutSuspense) {
                      var _primaryChildFragment = workInProgress2.child;
                      if (_primaryChildFragment !== null) {
                        workInProgress2.treeBaseDuration -= _primaryChildFragment.treeBaseDuration;
                      }
                    }
                  }
                }
                return false;
              }
            } else {
              upgradeHydrationErrorsToRecoverable();
              return true;
            }
          }
          function completeWork(current2, workInProgress2, renderLanes2) {
            var newProps = workInProgress2.pendingProps;
            popTreeContext(workInProgress2);
            switch (workInProgress2.tag) {
              case IndeterminateComponent:
              case LazyComponent:
              case SimpleMemoComponent:
              case FunctionComponent:
              case ForwardRef:
              case Fragment:
              case Mode:
              case Profiler:
              case ContextConsumer:
              case MemoComponent:
                bubbleProperties(workInProgress2);
                return null;
              case ClassComponent: {
                var Component = workInProgress2.type;
                if (isContextProvider(Component)) {
                  popContext(workInProgress2);
                }
                bubbleProperties(workInProgress2);
                return null;
              }
              case HostRoot: {
                var fiberRoot = workInProgress2.stateNode;
                popHostContainer(workInProgress2);
                popTopLevelContextObject(workInProgress2);
                resetWorkInProgressVersions();
                if (fiberRoot.pendingContext) {
                  fiberRoot.context = fiberRoot.pendingContext;
                  fiberRoot.pendingContext = null;
                }
                if (current2 === null || current2.child === null) {
                  var wasHydrated = popHydrationState(workInProgress2);
                  if (wasHydrated) {
                    markUpdate(workInProgress2);
                  } else {
                    if (current2 !== null) {
                      var prevState = current2.memoizedState;
                      if (
                        // Check if this is a client root
                        !prevState.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
                        (workInProgress2.flags & ForceClientRender) !== NoFlags
                      ) {
                        workInProgress2.flags |= Snapshot;
                        upgradeHydrationErrorsToRecoverable();
                      }
                    }
                  }
                }
                updateHostContainer(current2, workInProgress2);
                bubbleProperties(workInProgress2);
                return null;
              }
              case HostComponent: {
                popHostContext(workInProgress2);
                var rootContainerInstance = getRootHostContainer();
                var type = workInProgress2.type;
                if (current2 !== null && workInProgress2.stateNode != null) {
                  updateHostComponent$1(current2, workInProgress2, type, newProps, rootContainerInstance);
                  if (current2.ref !== workInProgress2.ref) {
                    markRef$1(workInProgress2);
                  }
                } else {
                  if (!newProps) {
                    if (workInProgress2.stateNode === null) {
                      throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
                    }
                    bubbleProperties(workInProgress2);
                    return null;
                  }
                  var currentHostContext = getHostContext();
                  var _wasHydrated = popHydrationState(workInProgress2);
                  if (_wasHydrated) {
                    if (prepareToHydrateHostInstance(workInProgress2, rootContainerInstance, currentHostContext)) {
                      markUpdate(workInProgress2);
                    }
                  } else {
                    var instance = createInstance(type, newProps, rootContainerInstance, currentHostContext, workInProgress2);
                    appendAllChildren(instance, workInProgress2, false, false);
                    workInProgress2.stateNode = instance;
                    if (finalizeInitialChildren(instance, type, newProps, rootContainerInstance, currentHostContext)) {
                      markUpdate(workInProgress2);
                    }
                  }
                  if (workInProgress2.ref !== null) {
                    markRef$1(workInProgress2);
                  }
                }
                bubbleProperties(workInProgress2);
                return null;
              }
              case HostText: {
                var newText = newProps;
                if (current2 && workInProgress2.stateNode != null) {
                  var oldText = current2.memoizedProps;
                  updateHostText$1(current2, workInProgress2, oldText, newText);
                } else {
                  if (typeof newText !== "string") {
                    if (workInProgress2.stateNode === null) {
                      throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
                    }
                  }
                  var _rootContainerInstance = getRootHostContainer();
                  var _currentHostContext = getHostContext();
                  var _wasHydrated2 = popHydrationState(workInProgress2);
                  if (_wasHydrated2) {
                    if (prepareToHydrateHostTextInstance(workInProgress2)) {
                      markUpdate(workInProgress2);
                    }
                  } else {
                    workInProgress2.stateNode = createTextInstance(newText, _rootContainerInstance, _currentHostContext, workInProgress2);
                  }
                }
                bubbleProperties(workInProgress2);
                return null;
              }
              case SuspenseComponent: {
                popSuspenseContext(workInProgress2);
                var nextState = workInProgress2.memoizedState;
                if (current2 === null || current2.memoizedState !== null && current2.memoizedState.dehydrated !== null) {
                  var fallthroughToNormalSuspensePath = completeDehydratedSuspenseBoundary(current2, workInProgress2, nextState);
                  if (!fallthroughToNormalSuspensePath) {
                    if (workInProgress2.flags & ShouldCapture) {
                      return workInProgress2;
                    } else {
                      return null;
                    }
                  }
                }
                if ((workInProgress2.flags & DidCapture) !== NoFlags) {
                  workInProgress2.lanes = renderLanes2;
                  if ((workInProgress2.mode & ProfileMode) !== NoMode) {
                    transferActualDuration(workInProgress2);
                  }
                  return workInProgress2;
                }
                var nextDidTimeout = nextState !== null;
                var prevDidTimeout = current2 !== null && current2.memoizedState !== null;
                if (nextDidTimeout !== prevDidTimeout) {
                  if (nextDidTimeout) {
                    var _offscreenFiber2 = workInProgress2.child;
                    _offscreenFiber2.flags |= Visibility;
                    if ((workInProgress2.mode & ConcurrentMode) !== NoMode) {
                      var hasInvisibleChildContext = current2 === null && (workInProgress2.memoizedProps.unstable_avoidThisFallback !== true || !enableSuspenseAvoidThisFallback);
                      if (hasInvisibleChildContext || hasSuspenseContext(suspenseStackCursor.current, InvisibleParentSuspenseContext)) {
                        renderDidSuspend();
                      } else {
                        renderDidSuspendDelayIfPossible();
                      }
                    }
                  }
                }
                var wakeables = workInProgress2.updateQueue;
                if (wakeables !== null) {
                  workInProgress2.flags |= Update;
                }
                bubbleProperties(workInProgress2);
                {
                  if ((workInProgress2.mode & ProfileMode) !== NoMode) {
                    if (nextDidTimeout) {
                      var primaryChildFragment = workInProgress2.child;
                      if (primaryChildFragment !== null) {
                        workInProgress2.treeBaseDuration -= primaryChildFragment.treeBaseDuration;
                      }
                    }
                  }
                }
                return null;
              }
              case HostPortal:
                popHostContainer(workInProgress2);
                updateHostContainer(current2, workInProgress2);
                if (current2 === null) {
                  preparePortalMount(workInProgress2.stateNode.containerInfo);
                }
                bubbleProperties(workInProgress2);
                return null;
              case ContextProvider:
                var context = workInProgress2.type._context;
                popProvider(context, workInProgress2);
                bubbleProperties(workInProgress2);
                return null;
              case IncompleteClassComponent: {
                var _Component = workInProgress2.type;
                if (isContextProvider(_Component)) {
                  popContext(workInProgress2);
                }
                bubbleProperties(workInProgress2);
                return null;
              }
              case SuspenseListComponent: {
                popSuspenseContext(workInProgress2);
                var renderState = workInProgress2.memoizedState;
                if (renderState === null) {
                  bubbleProperties(workInProgress2);
                  return null;
                }
                var didSuspendAlready = (workInProgress2.flags & DidCapture) !== NoFlags;
                var renderedTail = renderState.rendering;
                if (renderedTail === null) {
                  if (!didSuspendAlready) {
                    var cannotBeSuspended = renderHasNotSuspendedYet() && (current2 === null || (current2.flags & DidCapture) === NoFlags);
                    if (!cannotBeSuspended) {
                      var row = workInProgress2.child;
                      while (row !== null) {
                        var suspended = findFirstSuspended(row);
                        if (suspended !== null) {
                          didSuspendAlready = true;
                          workInProgress2.flags |= DidCapture;
                          cutOffTailIfNeeded(renderState, false);
                          var newThenables = suspended.updateQueue;
                          if (newThenables !== null) {
                            workInProgress2.updateQueue = newThenables;
                            workInProgress2.flags |= Update;
                          }
                          workInProgress2.subtreeFlags = NoFlags;
                          resetChildFibers(workInProgress2, renderLanes2);
                          pushSuspenseContext(workInProgress2, setShallowSuspenseContext(suspenseStackCursor.current, ForceSuspenseFallback));
                          return workInProgress2.child;
                        }
                        row = row.sibling;
                      }
                    }
                    if (renderState.tail !== null && now() > getRenderTargetTime()) {
                      workInProgress2.flags |= DidCapture;
                      didSuspendAlready = true;
                      cutOffTailIfNeeded(renderState, false);
                      workInProgress2.lanes = SomeRetryLane;
                    }
                  } else {
                    cutOffTailIfNeeded(renderState, false);
                  }
                } else {
                  if (!didSuspendAlready) {
                    var _suspended = findFirstSuspended(renderedTail);
                    if (_suspended !== null) {
                      workInProgress2.flags |= DidCapture;
                      didSuspendAlready = true;
                      var _newThenables = _suspended.updateQueue;
                      if (_newThenables !== null) {
                        workInProgress2.updateQueue = _newThenables;
                        workInProgress2.flags |= Update;
                      }
                      cutOffTailIfNeeded(renderState, true);
                      if (renderState.tail === null && renderState.tailMode === "hidden" && !renderedTail.alternate && !getIsHydrating()) {
                        bubbleProperties(workInProgress2);
                        return null;
                      }
                    } else if (
                      // The time it took to render last row is greater than the remaining
                      // time we have to render. So rendering one more row would likely
                      // exceed it.
                      now() * 2 - renderState.renderingStartTime > getRenderTargetTime() && renderLanes2 !== OffscreenLane
                    ) {
                      workInProgress2.flags |= DidCapture;
                      didSuspendAlready = true;
                      cutOffTailIfNeeded(renderState, false);
                      workInProgress2.lanes = SomeRetryLane;
                    }
                  }
                  if (renderState.isBackwards) {
                    renderedTail.sibling = workInProgress2.child;
                    workInProgress2.child = renderedTail;
                  } else {
                    var previousSibling = renderState.last;
                    if (previousSibling !== null) {
                      previousSibling.sibling = renderedTail;
                    } else {
                      workInProgress2.child = renderedTail;
                    }
                    renderState.last = renderedTail;
                  }
                }
                if (renderState.tail !== null) {
                  var next = renderState.tail;
                  renderState.rendering = next;
                  renderState.tail = next.sibling;
                  renderState.renderingStartTime = now();
                  next.sibling = null;
                  var suspenseContext = suspenseStackCursor.current;
                  if (didSuspendAlready) {
                    suspenseContext = setShallowSuspenseContext(suspenseContext, ForceSuspenseFallback);
                  } else {
                    suspenseContext = setDefaultShallowSuspenseContext(suspenseContext);
                  }
                  pushSuspenseContext(workInProgress2, suspenseContext);
                  return next;
                }
                bubbleProperties(workInProgress2);
                return null;
              }
              case ScopeComponent: {
                break;
              }
              case OffscreenComponent:
              case LegacyHiddenComponent: {
                popRenderLanes(workInProgress2);
                var _nextState = workInProgress2.memoizedState;
                var nextIsHidden = _nextState !== null;
                if (current2 !== null) {
                  var _prevState = current2.memoizedState;
                  var prevIsHidden = _prevState !== null;
                  if (prevIsHidden !== nextIsHidden && // LegacyHidden doesn't do any hiding — it only pre-renders.
                  !enableLegacyHidden) {
                    workInProgress2.flags |= Visibility;
                  }
                }
                if (!nextIsHidden || (workInProgress2.mode & ConcurrentMode) === NoMode) {
                  bubbleProperties(workInProgress2);
                } else {
                  if (includesSomeLane(subtreeRenderLanes, OffscreenLane)) {
                    bubbleProperties(workInProgress2);
                    if (supportsMutation) {
                      if (workInProgress2.subtreeFlags & (Placement | Update)) {
                        workInProgress2.flags |= Visibility;
                      }
                    }
                  }
                }
                return null;
              }
              case CacheComponent: {
                return null;
              }
              case TracingMarkerComponent: {
                return null;
              }
            }
            throw new Error("Unknown unit of work tag (" + workInProgress2.tag + "). This error is likely caused by a bug in React. Please file an issue.");
          }
          function unwindWork(current2, workInProgress2, renderLanes2) {
            popTreeContext(workInProgress2);
            switch (workInProgress2.tag) {
              case ClassComponent: {
                var Component = workInProgress2.type;
                if (isContextProvider(Component)) {
                  popContext(workInProgress2);
                }
                var flags = workInProgress2.flags;
                if (flags & ShouldCapture) {
                  workInProgress2.flags = flags & ~ShouldCapture | DidCapture;
                  if ((workInProgress2.mode & ProfileMode) !== NoMode) {
                    transferActualDuration(workInProgress2);
                  }
                  return workInProgress2;
                }
                return null;
              }
              case HostRoot: {
                var root = workInProgress2.stateNode;
                popHostContainer(workInProgress2);
                popTopLevelContextObject(workInProgress2);
                resetWorkInProgressVersions();
                var _flags = workInProgress2.flags;
                if ((_flags & ShouldCapture) !== NoFlags && (_flags & DidCapture) === NoFlags) {
                  workInProgress2.flags = _flags & ~ShouldCapture | DidCapture;
                  return workInProgress2;
                }
                return null;
              }
              case HostComponent: {
                popHostContext(workInProgress2);
                return null;
              }
              case SuspenseComponent: {
                popSuspenseContext(workInProgress2);
                var suspenseState = workInProgress2.memoizedState;
                if (suspenseState !== null && suspenseState.dehydrated !== null) {
                  if (workInProgress2.alternate === null) {
                    throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
                  }
                  resetHydrationState();
                }
                var _flags2 = workInProgress2.flags;
                if (_flags2 & ShouldCapture) {
                  workInProgress2.flags = _flags2 & ~ShouldCapture | DidCapture;
                  if ((workInProgress2.mode & ProfileMode) !== NoMode) {
                    transferActualDuration(workInProgress2);
                  }
                  return workInProgress2;
                }
                return null;
              }
              case SuspenseListComponent: {
                popSuspenseContext(workInProgress2);
                return null;
              }
              case HostPortal:
                popHostContainer(workInProgress2);
                return null;
              case ContextProvider:
                var context = workInProgress2.type._context;
                popProvider(context, workInProgress2);
                return null;
              case OffscreenComponent:
              case LegacyHiddenComponent:
                popRenderLanes(workInProgress2);
                return null;
              case CacheComponent:
                return null;
              default:
                return null;
            }
          }
          function unwindInterruptedWork(current2, interruptedWork, renderLanes2) {
            popTreeContext(interruptedWork);
            switch (interruptedWork.tag) {
              case ClassComponent: {
                var childContextTypes = interruptedWork.type.childContextTypes;
                if (childContextTypes !== null && childContextTypes !== void 0) {
                  popContext(interruptedWork);
                }
                break;
              }
              case HostRoot: {
                var root = interruptedWork.stateNode;
                popHostContainer(interruptedWork);
                popTopLevelContextObject(interruptedWork);
                resetWorkInProgressVersions();
                break;
              }
              case HostComponent: {
                popHostContext(interruptedWork);
                break;
              }
              case HostPortal:
                popHostContainer(interruptedWork);
                break;
              case SuspenseComponent:
                popSuspenseContext(interruptedWork);
                break;
              case SuspenseListComponent:
                popSuspenseContext(interruptedWork);
                break;
              case ContextProvider:
                var context = interruptedWork.type._context;
                popProvider(context, interruptedWork);
                break;
              case OffscreenComponent:
              case LegacyHiddenComponent:
                popRenderLanes(interruptedWork);
                break;
            }
          }
          function invokeGuardedCallbackProd(name, func, context, a, b, c, d, e, f) {
            var funcArgs = Array.prototype.slice.call(arguments, 3);
            try {
              func.apply(context, funcArgs);
            } catch (error2) {
              this.onError(error2);
            }
          }
          var invokeGuardedCallbackImpl = invokeGuardedCallbackProd;
          {
            if (typeof window !== "undefined" && typeof window.dispatchEvent === "function" && typeof document !== "undefined" && typeof document.createEvent === "function") {
              var fakeNode = document.createElement("react");
              invokeGuardedCallbackImpl = function invokeGuardedCallbackDev(name, func, context, a, b, c, d, e, f) {
                if (typeof document === "undefined" || document === null) {
                  throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
                }
                var evt = document.createEvent("Event");
                var didCall = false;
                var didError = true;
                var windowEvent = window.event;
                var windowEventDescriptor = Object.getOwnPropertyDescriptor(window, "event");
                function restoreAfterDispatch() {
                  fakeNode.removeEventListener(evtType, callCallback2, false);
                  if (typeof window.event !== "undefined" && window.hasOwnProperty("event")) {
                    window.event = windowEvent;
                  }
                }
                var funcArgs = Array.prototype.slice.call(arguments, 3);
                function callCallback2() {
                  didCall = true;
                  restoreAfterDispatch();
                  func.apply(context, funcArgs);
                  didError = false;
                }
                var error2;
                var didSetError = false;
                var isCrossOriginError = false;
                function handleWindowError(event) {
                  error2 = event.error;
                  didSetError = true;
                  if (error2 === null && event.colno === 0 && event.lineno === 0) {
                    isCrossOriginError = true;
                  }
                  if (event.defaultPrevented) {
                    if (error2 != null && typeof error2 === "object") {
                      try {
                        error2._suppressLogging = true;
                      } catch (inner) {
                      }
                    }
                  }
                }
                var evtType = "react-" + (name ? name : "invokeguardedcallback");
                window.addEventListener("error", handleWindowError);
                fakeNode.addEventListener(evtType, callCallback2, false);
                evt.initEvent(evtType, false, false);
                fakeNode.dispatchEvent(evt);
                if (windowEventDescriptor) {
                  Object.defineProperty(window, "event", windowEventDescriptor);
                }
                if (didCall && didError) {
                  if (!didSetError) {
                    error2 = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`);
                  } else if (isCrossOriginError) {
                    error2 = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.");
                  }
                  this.onError(error2);
                }
                window.removeEventListener("error", handleWindowError);
                if (!didCall) {
                  restoreAfterDispatch();
                  return invokeGuardedCallbackProd.apply(this, arguments);
                }
              };
            }
          }
          var invokeGuardedCallbackImpl$1 = invokeGuardedCallbackImpl;
          var hasError = false;
          var caughtError = null;
          var reporter = {
            onError: function(error2) {
              hasError = true;
              caughtError = error2;
            }
          };
          function invokeGuardedCallback(name, func, context, a, b, c, d, e, f) {
            hasError = false;
            caughtError = null;
            invokeGuardedCallbackImpl$1.apply(reporter, arguments);
          }
          function hasCaughtError() {
            return hasError;
          }
          function clearCaughtError() {
            if (hasError) {
              var error2 = caughtError;
              hasError = false;
              caughtError = null;
              return error2;
            } else {
              throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
            }
          }
          var didWarnAboutUndefinedSnapshotBeforeUpdate = null;
          {
            didWarnAboutUndefinedSnapshotBeforeUpdate = /* @__PURE__ */ new Set();
          }
          var offscreenSubtreeIsHidden = false;
          var offscreenSubtreeWasHidden = false;
          var PossiblyWeakSet = typeof WeakSet === "function" ? WeakSet : Set;
          var nextEffect = null;
          var inProgressLanes = null;
          var inProgressRoot = null;
          function reportUncaughtErrorInDEV(error2) {
            {
              invokeGuardedCallback(null, function() {
                throw error2;
              });
              clearCaughtError();
            }
          }
          var callComponentWillUnmountWithTimer = function(current2, instance) {
            instance.props = current2.memoizedProps;
            instance.state = current2.memoizedState;
            if (current2.mode & ProfileMode) {
              try {
                startLayoutEffectTimer();
                instance.componentWillUnmount();
              } finally {
                recordLayoutEffectDuration(current2);
              }
            } else {
              instance.componentWillUnmount();
            }
          };
          function safelyCallCommitHookLayoutEffectListMount(current2, nearestMountedAncestor) {
            try {
              commitHookEffectListMount(Layout, current2);
            } catch (error2) {
              captureCommitPhaseError(current2, nearestMountedAncestor, error2);
            }
          }
          function safelyCallComponentWillUnmount(current2, nearestMountedAncestor, instance) {
            try {
              callComponentWillUnmountWithTimer(current2, instance);
            } catch (error2) {
              captureCommitPhaseError(current2, nearestMountedAncestor, error2);
            }
          }
          function safelyCallComponentDidMount(current2, nearestMountedAncestor, instance) {
            try {
              instance.componentDidMount();
            } catch (error2) {
              captureCommitPhaseError(current2, nearestMountedAncestor, error2);
            }
          }
          function safelyAttachRef(current2, nearestMountedAncestor) {
            try {
              commitAttachRef(current2);
            } catch (error2) {
              captureCommitPhaseError(current2, nearestMountedAncestor, error2);
            }
          }
          function safelyDetachRef(current2, nearestMountedAncestor) {
            var ref = current2.ref;
            if (ref !== null) {
              if (typeof ref === "function") {
                var retVal;
                try {
                  if (enableProfilerTimer && enableProfilerCommitHooks && current2.mode & ProfileMode) {
                    try {
                      startLayoutEffectTimer();
                      retVal = ref(null);
                    } finally {
                      recordLayoutEffectDuration(current2);
                    }
                  } else {
                    retVal = ref(null);
                  }
                } catch (error2) {
                  captureCommitPhaseError(current2, nearestMountedAncestor, error2);
                }
                {
                  if (typeof retVal === "function") {
                    error("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", getComponentNameFromFiber(current2));
                  }
                }
              } else {
                ref.current = null;
              }
            }
          }
          function safelyCallDestroy(current2, nearestMountedAncestor, destroy) {
            try {
              destroy();
            } catch (error2) {
              captureCommitPhaseError(current2, nearestMountedAncestor, error2);
            }
          }
          var focusedInstanceHandle = null;
          var shouldFireAfterActiveInstanceBlur = false;
          function commitBeforeMutationEffects(root, firstChild) {
            focusedInstanceHandle = prepareForCommit(root.containerInfo);
            nextEffect = firstChild;
            commitBeforeMutationEffects_begin();
            var shouldFire = shouldFireAfterActiveInstanceBlur;
            shouldFireAfterActiveInstanceBlur = false;
            focusedInstanceHandle = null;
            return shouldFire;
          }
          function commitBeforeMutationEffects_begin() {
            while (nextEffect !== null) {
              var fiber = nextEffect;
              var child = fiber.child;
              if ((fiber.subtreeFlags & BeforeMutationMask) !== NoFlags && child !== null) {
                child.return = fiber;
                nextEffect = child;
              } else {
                commitBeforeMutationEffects_complete();
              }
            }
          }
          function commitBeforeMutationEffects_complete() {
            while (nextEffect !== null) {
              var fiber = nextEffect;
              setCurrentFiber(fiber);
              try {
                commitBeforeMutationEffectsOnFiber(fiber);
              } catch (error2) {
                captureCommitPhaseError(fiber, fiber.return, error2);
              }
              resetCurrentFiber();
              var sibling = fiber.sibling;
              if (sibling !== null) {
                sibling.return = fiber.return;
                nextEffect = sibling;
                return;
              }
              nextEffect = fiber.return;
            }
          }
          function commitBeforeMutationEffectsOnFiber(finishedWork) {
            var current2 = finishedWork.alternate;
            var flags = finishedWork.flags;
            if ((flags & Snapshot) !== NoFlags) {
              setCurrentFiber(finishedWork);
              switch (finishedWork.tag) {
                case FunctionComponent:
                case ForwardRef:
                case SimpleMemoComponent: {
                  break;
                }
                case ClassComponent: {
                  if (current2 !== null) {
                    var prevProps = current2.memoizedProps;
                    var prevState = current2.memoizedState;
                    var instance = finishedWork.stateNode;
                    {
                      if (finishedWork.type === finishedWork.elementType && !didWarnAboutReassigningProps) {
                        if (instance.props !== finishedWork.memoizedProps) {
                          error("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", getComponentNameFromFiber(finishedWork) || "instance");
                        }
                        if (instance.state !== finishedWork.memoizedState) {
                          error("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", getComponentNameFromFiber(finishedWork) || "instance");
                        }
                      }
                    }
                    var snapshot = instance.getSnapshotBeforeUpdate(finishedWork.elementType === finishedWork.type ? prevProps : resolveDefaultProps(finishedWork.type, prevProps), prevState);
                    {
                      var didWarnSet = didWarnAboutUndefinedSnapshotBeforeUpdate;
                      if (snapshot === void 0 && !didWarnSet.has(finishedWork.type)) {
                        didWarnSet.add(finishedWork.type);
                        error("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", getComponentNameFromFiber(finishedWork));
                      }
                    }
                    instance.__reactInternalSnapshotBeforeUpdate = snapshot;
                  }
                  break;
                }
                case HostRoot: {
                  if (supportsMutation) {
                    var root = finishedWork.stateNode;
                    clearContainer(root.containerInfo);
                  }
                  break;
                }
                case HostComponent:
                case HostText:
                case HostPortal:
                case IncompleteClassComponent:
                  break;
                default: {
                  throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
                }
              }
              resetCurrentFiber();
            }
          }
          function commitHookEffectListUnmount(flags, finishedWork, nearestMountedAncestor) {
            var updateQueue = finishedWork.updateQueue;
            var lastEffect = updateQueue !== null ? updateQueue.lastEffect : null;
            if (lastEffect !== null) {
              var firstEffect = lastEffect.next;
              var effect = firstEffect;
              do {
                if ((effect.tag & flags) === flags) {
                  var destroy = effect.destroy;
                  effect.destroy = void 0;
                  if (destroy !== void 0) {
                    {
                      if ((flags & Passive$1) !== NoFlags$1) {
                        markComponentPassiveEffectUnmountStarted(finishedWork);
                      } else if ((flags & Layout) !== NoFlags$1) {
                        markComponentLayoutEffectUnmountStarted(finishedWork);
                      }
                    }
                    {
                      if ((flags & Insertion) !== NoFlags$1) {
                        setIsRunningInsertionEffect(true);
                      }
                    }
                    safelyCallDestroy(finishedWork, nearestMountedAncestor, destroy);
                    {
                      if ((flags & Insertion) !== NoFlags$1) {
                        setIsRunningInsertionEffect(false);
                      }
                    }
                    {
                      if ((flags & Passive$1) !== NoFlags$1) {
                        markComponentPassiveEffectUnmountStopped();
                      } else if ((flags & Layout) !== NoFlags$1) {
                        markComponentLayoutEffectUnmountStopped();
                      }
                    }
                  }
                }
                effect = effect.next;
              } while (effect !== firstEffect);
            }
          }
          function commitHookEffectListMount(flags, finishedWork) {
            var updateQueue = finishedWork.updateQueue;
            var lastEffect = updateQueue !== null ? updateQueue.lastEffect : null;
            if (lastEffect !== null) {
              var firstEffect = lastEffect.next;
              var effect = firstEffect;
              do {
                if ((effect.tag & flags) === flags) {
                  {
                    if ((flags & Passive$1) !== NoFlags$1) {
                      markComponentPassiveEffectMountStarted(finishedWork);
                    } else if ((flags & Layout) !== NoFlags$1) {
                      markComponentLayoutEffectMountStarted(finishedWork);
                    }
                  }
                  var create = effect.create;
                  {
                    if ((flags & Insertion) !== NoFlags$1) {
                      setIsRunningInsertionEffect(true);
                    }
                  }
                  effect.destroy = create();
                  {
                    if ((flags & Insertion) !== NoFlags$1) {
                      setIsRunningInsertionEffect(false);
                    }
                  }
                  {
                    if ((flags & Passive$1) !== NoFlags$1) {
                      markComponentPassiveEffectMountStopped();
                    } else if ((flags & Layout) !== NoFlags$1) {
                      markComponentLayoutEffectMountStopped();
                    }
                  }
                  {
                    var destroy = effect.destroy;
                    if (destroy !== void 0 && typeof destroy !== "function") {
                      var hookName = void 0;
                      if ((effect.tag & Layout) !== NoFlags) {
                        hookName = "useLayoutEffect";
                      } else if ((effect.tag & Insertion) !== NoFlags) {
                        hookName = "useInsertionEffect";
                      } else {
                        hookName = "useEffect";
                      }
                      var addendum = void 0;
                      if (destroy === null) {
                        addendum = " You returned null. If your effect does not require clean up, return undefined (or nothing).";
                      } else if (typeof destroy.then === "function") {
                        addendum = "\n\nIt looks like you wrote " + hookName + "(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:\n\n" + hookName + "(() => {\n  async function fetchData() {\n    // You can await here\n    const response = await MyAPI.getData(someId);\n    // ...\n  }\n  fetchData();\n}, [someId]); // Or [] if effect doesn't need props or state\n\nLearn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching";
                      } else {
                        addendum = " You returned: " + destroy;
                      }
                      error("%s must not return anything besides a function, which is used for clean-up.%s", hookName, addendum);
                    }
                  }
                }
                effect = effect.next;
              } while (effect !== firstEffect);
            }
          }
          function commitPassiveEffectDurations(finishedRoot, finishedWork) {
            {
              if ((finishedWork.flags & Update) !== NoFlags) {
                switch (finishedWork.tag) {
                  case Profiler: {
                    var passiveEffectDuration = finishedWork.stateNode.passiveEffectDuration;
                    var _finishedWork$memoize = finishedWork.memoizedProps, id = _finishedWork$memoize.id, onPostCommit = _finishedWork$memoize.onPostCommit;
                    var commitTime2 = getCommitTime();
                    var phase = finishedWork.alternate === null ? "mount" : "update";
                    {
                      if (isCurrentUpdateNested()) {
                        phase = "nested-update";
                      }
                    }
                    if (typeof onPostCommit === "function") {
                      onPostCommit(id, phase, passiveEffectDuration, commitTime2);
                    }
                    var parentFiber = finishedWork.return;
                    outer:
                      while (parentFiber !== null) {
                        switch (parentFiber.tag) {
                          case HostRoot:
                            var root = parentFiber.stateNode;
                            root.passiveEffectDuration += passiveEffectDuration;
                            break outer;
                          case Profiler:
                            var parentStateNode = parentFiber.stateNode;
                            parentStateNode.passiveEffectDuration += passiveEffectDuration;
                            break outer;
                        }
                        parentFiber = parentFiber.return;
                      }
                    break;
                  }
                }
              }
            }
          }
          function commitLayoutEffectOnFiber(finishedRoot, current2, finishedWork, committedLanes) {
            if ((finishedWork.flags & LayoutMask) !== NoFlags) {
              switch (finishedWork.tag) {
                case FunctionComponent:
                case ForwardRef:
                case SimpleMemoComponent: {
                  if (!offscreenSubtreeWasHidden) {
                    if (finishedWork.mode & ProfileMode) {
                      try {
                        startLayoutEffectTimer();
                        commitHookEffectListMount(Layout | HasEffect, finishedWork);
                      } finally {
                        recordLayoutEffectDuration(finishedWork);
                      }
                    } else {
                      commitHookEffectListMount(Layout | HasEffect, finishedWork);
                    }
                  }
                  break;
                }
                case ClassComponent: {
                  var instance = finishedWork.stateNode;
                  if (finishedWork.flags & Update) {
                    if (!offscreenSubtreeWasHidden) {
                      if (current2 === null) {
                        {
                          if (finishedWork.type === finishedWork.elementType && !didWarnAboutReassigningProps) {
                            if (instance.props !== finishedWork.memoizedProps) {
                              error("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", getComponentNameFromFiber(finishedWork) || "instance");
                            }
                            if (instance.state !== finishedWork.memoizedState) {
                              error("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", getComponentNameFromFiber(finishedWork) || "instance");
                            }
                          }
                        }
                        if (finishedWork.mode & ProfileMode) {
                          try {
                            startLayoutEffectTimer();
                            instance.componentDidMount();
                          } finally {
                            recordLayoutEffectDuration(finishedWork);
                          }
                        } else {
                          instance.componentDidMount();
                        }
                      } else {
                        var prevProps = finishedWork.elementType === finishedWork.type ? current2.memoizedProps : resolveDefaultProps(finishedWork.type, current2.memoizedProps);
                        var prevState = current2.memoizedState;
                        {
                          if (finishedWork.type === finishedWork.elementType && !didWarnAboutReassigningProps) {
                            if (instance.props !== finishedWork.memoizedProps) {
                              error("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", getComponentNameFromFiber(finishedWork) || "instance");
                            }
                            if (instance.state !== finishedWork.memoizedState) {
                              error("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", getComponentNameFromFiber(finishedWork) || "instance");
                            }
                          }
                        }
                        if (finishedWork.mode & ProfileMode) {
                          try {
                            startLayoutEffectTimer();
                            instance.componentDidUpdate(prevProps, prevState, instance.__reactInternalSnapshotBeforeUpdate);
                          } finally {
                            recordLayoutEffectDuration(finishedWork);
                          }
                        } else {
                          instance.componentDidUpdate(prevProps, prevState, instance.__reactInternalSnapshotBeforeUpdate);
                        }
                      }
                    }
                  }
                  var updateQueue = finishedWork.updateQueue;
                  if (updateQueue !== null) {
                    {
                      if (finishedWork.type === finishedWork.elementType && !didWarnAboutReassigningProps) {
                        if (instance.props !== finishedWork.memoizedProps) {
                          error("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", getComponentNameFromFiber(finishedWork) || "instance");
                        }
                        if (instance.state !== finishedWork.memoizedState) {
                          error("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", getComponentNameFromFiber(finishedWork) || "instance");
                        }
                      }
                    }
                    commitUpdateQueue(finishedWork, updateQueue, instance);
                  }
                  break;
                }
                case HostRoot: {
                  var _updateQueue = finishedWork.updateQueue;
                  if (_updateQueue !== null) {
                    var _instance = null;
                    if (finishedWork.child !== null) {
                      switch (finishedWork.child.tag) {
                        case HostComponent:
                          _instance = getPublicInstance(finishedWork.child.stateNode);
                          break;
                        case ClassComponent:
                          _instance = finishedWork.child.stateNode;
                          break;
                      }
                    }
                    commitUpdateQueue(finishedWork, _updateQueue, _instance);
                  }
                  break;
                }
                case HostComponent: {
                  var _instance2 = finishedWork.stateNode;
                  if (current2 === null && finishedWork.flags & Update) {
                    var type = finishedWork.type;
                    var props = finishedWork.memoizedProps;
                    commitMount(_instance2, type, props, finishedWork);
                  }
                  break;
                }
                case HostText: {
                  break;
                }
                case HostPortal: {
                  break;
                }
                case Profiler: {
                  {
                    var _finishedWork$memoize2 = finishedWork.memoizedProps, onCommit = _finishedWork$memoize2.onCommit, onRender = _finishedWork$memoize2.onRender;
                    var effectDuration = finishedWork.stateNode.effectDuration;
                    var commitTime2 = getCommitTime();
                    var phase = current2 === null ? "mount" : "update";
                    {
                      if (isCurrentUpdateNested()) {
                        phase = "nested-update";
                      }
                    }
                    if (typeof onRender === "function") {
                      onRender(finishedWork.memoizedProps.id, phase, finishedWork.actualDuration, finishedWork.treeBaseDuration, finishedWork.actualStartTime, commitTime2);
                    }
                    {
                      if (typeof onCommit === "function") {
                        onCommit(finishedWork.memoizedProps.id, phase, effectDuration, commitTime2);
                      }
                      enqueuePendingPassiveProfilerEffect(finishedWork);
                      var parentFiber = finishedWork.return;
                      outer:
                        while (parentFiber !== null) {
                          switch (parentFiber.tag) {
                            case HostRoot:
                              var root = parentFiber.stateNode;
                              root.effectDuration += effectDuration;
                              break outer;
                            case Profiler:
                              var parentStateNode = parentFiber.stateNode;
                              parentStateNode.effectDuration += effectDuration;
                              break outer;
                          }
                          parentFiber = parentFiber.return;
                        }
                    }
                  }
                  break;
                }
                case SuspenseComponent: {
                  commitSuspenseHydrationCallbacks(finishedRoot, finishedWork);
                  break;
                }
                case SuspenseListComponent:
                case IncompleteClassComponent:
                case ScopeComponent:
                case OffscreenComponent:
                case LegacyHiddenComponent:
                case TracingMarkerComponent: {
                  break;
                }
                default:
                  throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
              }
            }
            if (!offscreenSubtreeWasHidden) {
              {
                if (finishedWork.flags & Ref) {
                  commitAttachRef(finishedWork);
                }
              }
            }
          }
          function reappearLayoutEffectsOnFiber(node) {
            switch (node.tag) {
              case FunctionComponent:
              case ForwardRef:
              case SimpleMemoComponent: {
                if (node.mode & ProfileMode) {
                  try {
                    startLayoutEffectTimer();
                    safelyCallCommitHookLayoutEffectListMount(node, node.return);
                  } finally {
                    recordLayoutEffectDuration(node);
                  }
                } else {
                  safelyCallCommitHookLayoutEffectListMount(node, node.return);
                }
                break;
              }
              case ClassComponent: {
                var instance = node.stateNode;
                if (typeof instance.componentDidMount === "function") {
                  safelyCallComponentDidMount(node, node.return, instance);
                }
                safelyAttachRef(node, node.return);
                break;
              }
              case HostComponent: {
                safelyAttachRef(node, node.return);
                break;
              }
            }
          }
          function hideOrUnhideAllChildren(finishedWork, isHidden) {
            var hostSubtreeRoot = null;
            if (supportsMutation) {
              var node = finishedWork;
              while (true) {
                if (node.tag === HostComponent) {
                  if (hostSubtreeRoot === null) {
                    hostSubtreeRoot = node;
                    try {
                      var instance = node.stateNode;
                      if (isHidden) {
                        hideInstance(instance);
                      } else {
                        unhideInstance(node.stateNode, node.memoizedProps);
                      }
                    } catch (error2) {
                      captureCommitPhaseError(finishedWork, finishedWork.return, error2);
                    }
                  }
                } else if (node.tag === HostText) {
                  if (hostSubtreeRoot === null) {
                    try {
                      var _instance3 = node.stateNode;
                      if (isHidden) {
                        hideTextInstance(_instance3);
                      } else {
                        unhideTextInstance(_instance3, node.memoizedProps);
                      }
                    } catch (error2) {
                      captureCommitPhaseError(finishedWork, finishedWork.return, error2);
                    }
                  }
                } else if ((node.tag === OffscreenComponent || node.tag === LegacyHiddenComponent) && node.memoizedState !== null && node !== finishedWork)
                  ;
                else if (node.child !== null) {
                  node.child.return = node;
                  node = node.child;
                  continue;
                }
                if (node === finishedWork) {
                  return;
                }
                while (node.sibling === null) {
                  if (node.return === null || node.return === finishedWork) {
                    return;
                  }
                  if (hostSubtreeRoot === node) {
                    hostSubtreeRoot = null;
                  }
                  node = node.return;
                }
                if (hostSubtreeRoot === node) {
                  hostSubtreeRoot = null;
                }
                node.sibling.return = node.return;
                node = node.sibling;
              }
            }
          }
          function commitAttachRef(finishedWork) {
            var ref = finishedWork.ref;
            if (ref !== null) {
              var instance = finishedWork.stateNode;
              var instanceToUse;
              switch (finishedWork.tag) {
                case HostComponent:
                  instanceToUse = getPublicInstance(instance);
                  break;
                default:
                  instanceToUse = instance;
              }
              if (typeof ref === "function") {
                var retVal;
                if (finishedWork.mode & ProfileMode) {
                  try {
                    startLayoutEffectTimer();
                    retVal = ref(instanceToUse);
                  } finally {
                    recordLayoutEffectDuration(finishedWork);
                  }
                } else {
                  retVal = ref(instanceToUse);
                }
                {
                  if (typeof retVal === "function") {
                    error("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", getComponentNameFromFiber(finishedWork));
                  }
                }
              } else {
                {
                  if (!ref.hasOwnProperty("current")) {
                    error("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", getComponentNameFromFiber(finishedWork));
                  }
                }
                ref.current = instanceToUse;
              }
            }
          }
          function detachFiberMutation(fiber) {
            var alternate = fiber.alternate;
            if (alternate !== null) {
              alternate.return = null;
            }
            fiber.return = null;
          }
          function detachFiberAfterEffects(fiber) {
            var alternate = fiber.alternate;
            if (alternate !== null) {
              fiber.alternate = null;
              detachFiberAfterEffects(alternate);
            }
            {
              fiber.child = null;
              fiber.deletions = null;
              fiber.sibling = null;
              if (fiber.tag === HostComponent) {
                var hostInstance = fiber.stateNode;
                if (hostInstance !== null) {
                  detachDeletedInstance(hostInstance);
                }
              }
              fiber.stateNode = null;
              {
                fiber._debugOwner = null;
              }
              {
                fiber.return = null;
                fiber.dependencies = null;
                fiber.memoizedProps = null;
                fiber.memoizedState = null;
                fiber.pendingProps = null;
                fiber.stateNode = null;
                fiber.updateQueue = null;
              }
            }
          }
          function emptyPortalContainer(current2) {
            if (!supportsPersistence) {
              return;
            }
            var portal = current2.stateNode;
            var containerInfo = portal.containerInfo;
            var emptyChildSet = createContainerChildSet(containerInfo);
            replaceContainerChildren(containerInfo, emptyChildSet);
          }
          function getHostParentFiber(fiber) {
            var parent = fiber.return;
            while (parent !== null) {
              if (isHostParent(parent)) {
                return parent;
              }
              parent = parent.return;
            }
            throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
          }
          function isHostParent(fiber) {
            return fiber.tag === HostComponent || fiber.tag === HostRoot || fiber.tag === HostPortal;
          }
          function getHostSibling(fiber) {
            var node = fiber;
            siblings:
              while (true) {
                while (node.sibling === null) {
                  if (node.return === null || isHostParent(node.return)) {
                    return null;
                  }
                  node = node.return;
                }
                node.sibling.return = node.return;
                node = node.sibling;
                while (node.tag !== HostComponent && node.tag !== HostText && node.tag !== DehydratedFragment) {
                  if (node.flags & Placement) {
                    continue siblings;
                  }
                  if (node.child === null || node.tag === HostPortal) {
                    continue siblings;
                  } else {
                    node.child.return = node;
                    node = node.child;
                  }
                }
                if (!(node.flags & Placement)) {
                  return node.stateNode;
                }
              }
          }
          function commitPlacement(finishedWork) {
            if (!supportsMutation) {
              return;
            }
            var parentFiber = getHostParentFiber(finishedWork);
            switch (parentFiber.tag) {
              case HostComponent: {
                var parent = parentFiber.stateNode;
                if (parentFiber.flags & ContentReset) {
                  resetTextContent(parent);
                  parentFiber.flags &= ~ContentReset;
                }
                var before = getHostSibling(finishedWork);
                insertOrAppendPlacementNode(finishedWork, before, parent);
                break;
              }
              case HostRoot:
              case HostPortal: {
                var _parent = parentFiber.stateNode.containerInfo;
                var _before = getHostSibling(finishedWork);
                insertOrAppendPlacementNodeIntoContainer(finishedWork, _before, _parent);
                break;
              }
              default:
                throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
            }
          }
          function insertOrAppendPlacementNodeIntoContainer(node, before, parent) {
            var tag = node.tag;
            var isHost = tag === HostComponent || tag === HostText;
            if (isHost) {
              var stateNode = node.stateNode;
              if (before) {
                insertInContainerBefore(parent, stateNode, before);
              } else {
                appendChildToContainer(parent, stateNode);
              }
            } else if (tag === HostPortal)
              ;
            else {
              var child = node.child;
              if (child !== null) {
                insertOrAppendPlacementNodeIntoContainer(child, before, parent);
                var sibling = child.sibling;
                while (sibling !== null) {
                  insertOrAppendPlacementNodeIntoContainer(sibling, before, parent);
                  sibling = sibling.sibling;
                }
              }
            }
          }
          function insertOrAppendPlacementNode(node, before, parent) {
            var tag = node.tag;
            var isHost = tag === HostComponent || tag === HostText;
            if (isHost) {
              var stateNode = node.stateNode;
              if (before) {
                insertBefore2(parent, stateNode, before);
              } else {
                appendChild2(parent, stateNode);
              }
            } else if (tag === HostPortal)
              ;
            else {
              var child = node.child;
              if (child !== null) {
                insertOrAppendPlacementNode(child, before, parent);
                var sibling = child.sibling;
                while (sibling !== null) {
                  insertOrAppendPlacementNode(sibling, before, parent);
                  sibling = sibling.sibling;
                }
              }
            }
          }
          var hostParent = null;
          var hostParentIsContainer = false;
          function commitDeletionEffects(root, returnFiber, deletedFiber) {
            if (supportsMutation) {
              var parent = returnFiber;
              findParent:
                while (parent !== null) {
                  switch (parent.tag) {
                    case HostComponent: {
                      hostParent = parent.stateNode;
                      hostParentIsContainer = false;
                      break findParent;
                    }
                    case HostRoot: {
                      hostParent = parent.stateNode.containerInfo;
                      hostParentIsContainer = true;
                      break findParent;
                    }
                    case HostPortal: {
                      hostParent = parent.stateNode.containerInfo;
                      hostParentIsContainer = true;
                      break findParent;
                    }
                  }
                  parent = parent.return;
                }
              if (hostParent === null) {
                throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
              }
              commitDeletionEffectsOnFiber(root, returnFiber, deletedFiber);
              hostParent = null;
              hostParentIsContainer = false;
            } else {
              commitDeletionEffectsOnFiber(root, returnFiber, deletedFiber);
            }
            detachFiberMutation(deletedFiber);
          }
          function recursivelyTraverseDeletionEffects(finishedRoot, nearestMountedAncestor, parent) {
            var child = parent.child;
            while (child !== null) {
              commitDeletionEffectsOnFiber(finishedRoot, nearestMountedAncestor, child);
              child = child.sibling;
            }
          }
          function commitDeletionEffectsOnFiber(finishedRoot, nearestMountedAncestor, deletedFiber) {
            onCommitUnmount(deletedFiber);
            switch (deletedFiber.tag) {
              case HostComponent: {
                if (!offscreenSubtreeWasHidden) {
                  safelyDetachRef(deletedFiber, nearestMountedAncestor);
                }
              }
              case HostText: {
                if (supportsMutation) {
                  var prevHostParent = hostParent;
                  var prevHostParentIsContainer = hostParentIsContainer;
                  hostParent = null;
                  recursivelyTraverseDeletionEffects(finishedRoot, nearestMountedAncestor, deletedFiber);
                  hostParent = prevHostParent;
                  hostParentIsContainer = prevHostParentIsContainer;
                  if (hostParent !== null) {
                    if (hostParentIsContainer) {
                      removeChildFromContainer(hostParent, deletedFiber.stateNode);
                    } else {
                      removeChild2(hostParent, deletedFiber.stateNode);
                    }
                  }
                } else {
                  recursivelyTraverseDeletionEffects(finishedRoot, nearestMountedAncestor, deletedFiber);
                }
                return;
              }
              case DehydratedFragment: {
                if (supportsMutation) {
                  if (hostParent !== null) {
                    if (hostParentIsContainer) {
                      clearSuspenseBoundaryFromContainer(hostParent, deletedFiber.stateNode);
                    } else {
                      clearSuspenseBoundary(hostParent, deletedFiber.stateNode);
                    }
                  }
                }
                return;
              }
              case HostPortal: {
                if (supportsMutation) {
                  var _prevHostParent = hostParent;
                  var _prevHostParentIsContainer = hostParentIsContainer;
                  hostParent = deletedFiber.stateNode.containerInfo;
                  hostParentIsContainer = true;
                  recursivelyTraverseDeletionEffects(finishedRoot, nearestMountedAncestor, deletedFiber);
                  hostParent = _prevHostParent;
                  hostParentIsContainer = _prevHostParentIsContainer;
                } else {
                  emptyPortalContainer(deletedFiber);
                  recursivelyTraverseDeletionEffects(finishedRoot, nearestMountedAncestor, deletedFiber);
                }
                return;
              }
              case FunctionComponent:
              case ForwardRef:
              case MemoComponent:
              case SimpleMemoComponent: {
                if (!offscreenSubtreeWasHidden) {
                  var updateQueue = deletedFiber.updateQueue;
                  if (updateQueue !== null) {
                    var lastEffect = updateQueue.lastEffect;
                    if (lastEffect !== null) {
                      var firstEffect = lastEffect.next;
                      var effect = firstEffect;
                      do {
                        var _effect = effect, destroy = _effect.destroy, tag = _effect.tag;
                        if (destroy !== void 0) {
                          if ((tag & Insertion) !== NoFlags$1) {
                            safelyCallDestroy(deletedFiber, nearestMountedAncestor, destroy);
                          } else if ((tag & Layout) !== NoFlags$1) {
                            {
                              markComponentLayoutEffectUnmountStarted(deletedFiber);
                            }
                            if (deletedFiber.mode & ProfileMode) {
                              startLayoutEffectTimer();
                              safelyCallDestroy(deletedFiber, nearestMountedAncestor, destroy);
                              recordLayoutEffectDuration(deletedFiber);
                            } else {
                              safelyCallDestroy(deletedFiber, nearestMountedAncestor, destroy);
                            }
                            {
                              markComponentLayoutEffectUnmountStopped();
                            }
                          }
                        }
                        effect = effect.next;
                      } while (effect !== firstEffect);
                    }
                  }
                }
                recursivelyTraverseDeletionEffects(finishedRoot, nearestMountedAncestor, deletedFiber);
                return;
              }
              case ClassComponent: {
                if (!offscreenSubtreeWasHidden) {
                  safelyDetachRef(deletedFiber, nearestMountedAncestor);
                  var instance = deletedFiber.stateNode;
                  if (typeof instance.componentWillUnmount === "function") {
                    safelyCallComponentWillUnmount(deletedFiber, nearestMountedAncestor, instance);
                  }
                }
                recursivelyTraverseDeletionEffects(finishedRoot, nearestMountedAncestor, deletedFiber);
                return;
              }
              case ScopeComponent: {
                recursivelyTraverseDeletionEffects(finishedRoot, nearestMountedAncestor, deletedFiber);
                return;
              }
              case OffscreenComponent: {
                if (
                  // TODO: Remove this dead flag
                  deletedFiber.mode & ConcurrentMode
                ) {
                  var prevOffscreenSubtreeWasHidden = offscreenSubtreeWasHidden;
                  offscreenSubtreeWasHidden = prevOffscreenSubtreeWasHidden || deletedFiber.memoizedState !== null;
                  recursivelyTraverseDeletionEffects(finishedRoot, nearestMountedAncestor, deletedFiber);
                  offscreenSubtreeWasHidden = prevOffscreenSubtreeWasHidden;
                } else {
                  recursivelyTraverseDeletionEffects(finishedRoot, nearestMountedAncestor, deletedFiber);
                }
                break;
              }
              default: {
                recursivelyTraverseDeletionEffects(finishedRoot, nearestMountedAncestor, deletedFiber);
                return;
              }
            }
          }
          function commitSuspenseCallback(finishedWork) {
            var newState = finishedWork.memoizedState;
          }
          function commitSuspenseHydrationCallbacks(finishedRoot, finishedWork) {
            if (!supportsHydration) {
              return;
            }
            var newState = finishedWork.memoizedState;
            if (newState === null) {
              var current2 = finishedWork.alternate;
              if (current2 !== null) {
                var prevState = current2.memoizedState;
                if (prevState !== null) {
                  var suspenseInstance = prevState.dehydrated;
                  if (suspenseInstance !== null) {
                    commitHydratedSuspenseInstance(suspenseInstance);
                  }
                }
              }
            }
          }
          function attachSuspenseRetryListeners(finishedWork) {
            var wakeables = finishedWork.updateQueue;
            if (wakeables !== null) {
              finishedWork.updateQueue = null;
              var retryCache = finishedWork.stateNode;
              if (retryCache === null) {
                retryCache = finishedWork.stateNode = new PossiblyWeakSet();
              }
              wakeables.forEach(function(wakeable) {
                var retry = resolveRetryWakeable.bind(null, finishedWork, wakeable);
                if (!retryCache.has(wakeable)) {
                  retryCache.add(wakeable);
                  {
                    if (isDevToolsPresent) {
                      if (inProgressLanes !== null && inProgressRoot !== null) {
                        restorePendingUpdaters(inProgressRoot, inProgressLanes);
                      } else {
                        throw Error("Expected finished root and lanes to be set. This is a bug in React.");
                      }
                    }
                  }
                  wakeable.then(retry, retry);
                }
              });
            }
          }
          function commitMutationEffects(root, finishedWork, committedLanes) {
            inProgressLanes = committedLanes;
            inProgressRoot = root;
            setCurrentFiber(finishedWork);
            commitMutationEffectsOnFiber(finishedWork, root);
            setCurrentFiber(finishedWork);
            inProgressLanes = null;
            inProgressRoot = null;
          }
          function recursivelyTraverseMutationEffects(root, parentFiber, lanes) {
            var deletions = parentFiber.deletions;
            if (deletions !== null) {
              for (var i = 0; i < deletions.length; i++) {
                var childToDelete = deletions[i];
                try {
                  commitDeletionEffects(root, parentFiber, childToDelete);
                } catch (error2) {
                  captureCommitPhaseError(childToDelete, parentFiber, error2);
                }
              }
            }
            var prevDebugFiber = getCurrentFiber();
            if (parentFiber.subtreeFlags & MutationMask) {
              var child = parentFiber.child;
              while (child !== null) {
                setCurrentFiber(child);
                commitMutationEffectsOnFiber(child, root);
                child = child.sibling;
              }
            }
            setCurrentFiber(prevDebugFiber);
          }
          function commitMutationEffectsOnFiber(finishedWork, root, lanes) {
            var current2 = finishedWork.alternate;
            var flags = finishedWork.flags;
            switch (finishedWork.tag) {
              case FunctionComponent:
              case ForwardRef:
              case MemoComponent:
              case SimpleMemoComponent: {
                recursivelyTraverseMutationEffects(root, finishedWork);
                commitReconciliationEffects(finishedWork);
                if (flags & Update) {
                  try {
                    commitHookEffectListUnmount(Insertion | HasEffect, finishedWork, finishedWork.return);
                    commitHookEffectListMount(Insertion | HasEffect, finishedWork);
                  } catch (error2) {
                    captureCommitPhaseError(finishedWork, finishedWork.return, error2);
                  }
                  if (finishedWork.mode & ProfileMode) {
                    try {
                      startLayoutEffectTimer();
                      commitHookEffectListUnmount(Layout | HasEffect, finishedWork, finishedWork.return);
                    } catch (error2) {
                      captureCommitPhaseError(finishedWork, finishedWork.return, error2);
                    }
                    recordLayoutEffectDuration(finishedWork);
                  } else {
                    try {
                      commitHookEffectListUnmount(Layout | HasEffect, finishedWork, finishedWork.return);
                    } catch (error2) {
                      captureCommitPhaseError(finishedWork, finishedWork.return, error2);
                    }
                  }
                }
                return;
              }
              case ClassComponent: {
                recursivelyTraverseMutationEffects(root, finishedWork);
                commitReconciliationEffects(finishedWork);
                if (flags & Ref) {
                  if (current2 !== null) {
                    safelyDetachRef(current2, current2.return);
                  }
                }
                return;
              }
              case HostComponent: {
                recursivelyTraverseMutationEffects(root, finishedWork);
                commitReconciliationEffects(finishedWork);
                if (flags & Ref) {
                  if (current2 !== null) {
                    safelyDetachRef(current2, current2.return);
                  }
                }
                if (supportsMutation) {
                  if (finishedWork.flags & ContentReset) {
                    var instance = finishedWork.stateNode;
                    try {
                      resetTextContent(instance);
                    } catch (error2) {
                      captureCommitPhaseError(finishedWork, finishedWork.return, error2);
                    }
                  }
                  if (flags & Update) {
                    var _instance4 = finishedWork.stateNode;
                    if (_instance4 != null) {
                      var newProps = finishedWork.memoizedProps;
                      var oldProps = current2 !== null ? current2.memoizedProps : newProps;
                      var type = finishedWork.type;
                      var updatePayload = finishedWork.updateQueue;
                      finishedWork.updateQueue = null;
                      if (updatePayload !== null) {
                        try {
                          commitUpdate(_instance4, updatePayload, type, oldProps, newProps, finishedWork);
                        } catch (error2) {
                          captureCommitPhaseError(finishedWork, finishedWork.return, error2);
                        }
                      }
                    }
                  }
                }
                return;
              }
              case HostText: {
                recursivelyTraverseMutationEffects(root, finishedWork);
                commitReconciliationEffects(finishedWork);
                if (flags & Update) {
                  if (supportsMutation) {
                    if (finishedWork.stateNode === null) {
                      throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
                    }
                    var textInstance = finishedWork.stateNode;
                    var newText = finishedWork.memoizedProps;
                    var oldText = current2 !== null ? current2.memoizedProps : newText;
                    try {
                      commitTextUpdate(textInstance, oldText, newText);
                    } catch (error2) {
                      captureCommitPhaseError(finishedWork, finishedWork.return, error2);
                    }
                  }
                }
                return;
              }
              case HostRoot: {
                recursivelyTraverseMutationEffects(root, finishedWork);
                commitReconciliationEffects(finishedWork);
                if (flags & Update) {
                  if (supportsMutation && supportsHydration) {
                    if (current2 !== null) {
                      var prevRootState = current2.memoizedState;
                      if (prevRootState.isDehydrated) {
                        try {
                          commitHydratedContainer(root.containerInfo);
                        } catch (error2) {
                          captureCommitPhaseError(finishedWork, finishedWork.return, error2);
                        }
                      }
                    }
                  }
                  if (supportsPersistence) {
                    var containerInfo = root.containerInfo;
                    var pendingChildren = root.pendingChildren;
                    try {
                      replaceContainerChildren(containerInfo, pendingChildren);
                    } catch (error2) {
                      captureCommitPhaseError(finishedWork, finishedWork.return, error2);
                    }
                  }
                }
                return;
              }
              case HostPortal: {
                recursivelyTraverseMutationEffects(root, finishedWork);
                commitReconciliationEffects(finishedWork);
                if (flags & Update) {
                  if (supportsPersistence) {
                    var portal = finishedWork.stateNode;
                    var _containerInfo = portal.containerInfo;
                    var _pendingChildren = portal.pendingChildren;
                    try {
                      replaceContainerChildren(_containerInfo, _pendingChildren);
                    } catch (error2) {
                      captureCommitPhaseError(finishedWork, finishedWork.return, error2);
                    }
                  }
                }
                return;
              }
              case SuspenseComponent: {
                recursivelyTraverseMutationEffects(root, finishedWork);
                commitReconciliationEffects(finishedWork);
                var offscreenFiber = finishedWork.child;
                if (offscreenFiber.flags & Visibility) {
                  var offscreenInstance = offscreenFiber.stateNode;
                  var newState = offscreenFiber.memoizedState;
                  var isHidden = newState !== null;
                  offscreenInstance.isHidden = isHidden;
                  if (isHidden) {
                    var wasHidden = offscreenFiber.alternate !== null && offscreenFiber.alternate.memoizedState !== null;
                    if (!wasHidden) {
                      markCommitTimeOfFallback();
                    }
                  }
                }
                if (flags & Update) {
                  try {
                    commitSuspenseCallback(finishedWork);
                  } catch (error2) {
                    captureCommitPhaseError(finishedWork, finishedWork.return, error2);
                  }
                  attachSuspenseRetryListeners(finishedWork);
                }
                return;
              }
              case OffscreenComponent: {
                var _wasHidden = current2 !== null && current2.memoizedState !== null;
                if (
                  // TODO: Remove this dead flag
                  finishedWork.mode & ConcurrentMode
                ) {
                  var prevOffscreenSubtreeWasHidden = offscreenSubtreeWasHidden;
                  offscreenSubtreeWasHidden = prevOffscreenSubtreeWasHidden || _wasHidden;
                  recursivelyTraverseMutationEffects(root, finishedWork);
                  offscreenSubtreeWasHidden = prevOffscreenSubtreeWasHidden;
                } else {
                  recursivelyTraverseMutationEffects(root, finishedWork);
                }
                commitReconciliationEffects(finishedWork);
                if (flags & Visibility) {
                  var _offscreenInstance = finishedWork.stateNode;
                  var _newState = finishedWork.memoizedState;
                  var _isHidden = _newState !== null;
                  var offscreenBoundary = finishedWork;
                  _offscreenInstance.isHidden = _isHidden;
                  {
                    if (_isHidden) {
                      if (!_wasHidden) {
                        if ((offscreenBoundary.mode & ConcurrentMode) !== NoMode) {
                          nextEffect = offscreenBoundary;
                          var offscreenChild = offscreenBoundary.child;
                          while (offscreenChild !== null) {
                            nextEffect = offscreenChild;
                            disappearLayoutEffects_begin(offscreenChild);
                            offscreenChild = offscreenChild.sibling;
                          }
                        }
                      }
                    }
                  }
                  if (supportsMutation) {
                    hideOrUnhideAllChildren(offscreenBoundary, _isHidden);
                  }
                }
                return;
              }
              case SuspenseListComponent: {
                recursivelyTraverseMutationEffects(root, finishedWork);
                commitReconciliationEffects(finishedWork);
                if (flags & Update) {
                  attachSuspenseRetryListeners(finishedWork);
                }
                return;
              }
              case ScopeComponent: {
                return;
              }
              default: {
                recursivelyTraverseMutationEffects(root, finishedWork);
                commitReconciliationEffects(finishedWork);
                return;
              }
            }
          }
          function commitReconciliationEffects(finishedWork) {
            var flags = finishedWork.flags;
            if (flags & Placement) {
              try {
                commitPlacement(finishedWork);
              } catch (error2) {
                captureCommitPhaseError(finishedWork, finishedWork.return, error2);
              }
              finishedWork.flags &= ~Placement;
            }
            if (flags & Hydrating) {
              finishedWork.flags &= ~Hydrating;
            }
          }
          function commitLayoutEffects(finishedWork, root, committedLanes) {
            inProgressLanes = committedLanes;
            inProgressRoot = root;
            nextEffect = finishedWork;
            commitLayoutEffects_begin(finishedWork, root, committedLanes);
            inProgressLanes = null;
            inProgressRoot = null;
          }
          function commitLayoutEffects_begin(subtreeRoot, root, committedLanes) {
            var isModernRoot = (subtreeRoot.mode & ConcurrentMode) !== NoMode;
            while (nextEffect !== null) {
              var fiber = nextEffect;
              var firstChild = fiber.child;
              if (fiber.tag === OffscreenComponent && isModernRoot) {
                var isHidden = fiber.memoizedState !== null;
                var newOffscreenSubtreeIsHidden = isHidden || offscreenSubtreeIsHidden;
                if (newOffscreenSubtreeIsHidden) {
                  commitLayoutMountEffects_complete(subtreeRoot, root, committedLanes);
                  continue;
                } else {
                  var current2 = fiber.alternate;
                  var wasHidden = current2 !== null && current2.memoizedState !== null;
                  var newOffscreenSubtreeWasHidden = wasHidden || offscreenSubtreeWasHidden;
                  var prevOffscreenSubtreeIsHidden = offscreenSubtreeIsHidden;
                  var prevOffscreenSubtreeWasHidden = offscreenSubtreeWasHidden;
                  offscreenSubtreeIsHidden = newOffscreenSubtreeIsHidden;
                  offscreenSubtreeWasHidden = newOffscreenSubtreeWasHidden;
                  if (offscreenSubtreeWasHidden && !prevOffscreenSubtreeWasHidden) {
                    nextEffect = fiber;
                    reappearLayoutEffects_begin(fiber);
                  }
                  var child = firstChild;
                  while (child !== null) {
                    nextEffect = child;
                    commitLayoutEffects_begin(
                      child,
                      // New root; bubble back up to here and stop.
                      root,
                      committedLanes
                    );
                    child = child.sibling;
                  }
                  nextEffect = fiber;
                  offscreenSubtreeIsHidden = prevOffscreenSubtreeIsHidden;
                  offscreenSubtreeWasHidden = prevOffscreenSubtreeWasHidden;
                  commitLayoutMountEffects_complete(subtreeRoot, root, committedLanes);
                  continue;
                }
              }
              if ((fiber.subtreeFlags & LayoutMask) !== NoFlags && firstChild !== null) {
                firstChild.return = fiber;
                nextEffect = firstChild;
              } else {
                commitLayoutMountEffects_complete(subtreeRoot, root, committedLanes);
              }
            }
          }
          function commitLayoutMountEffects_complete(subtreeRoot, root, committedLanes) {
            while (nextEffect !== null) {
              var fiber = nextEffect;
              if ((fiber.flags & LayoutMask) !== NoFlags) {
                var current2 = fiber.alternate;
                setCurrentFiber(fiber);
                try {
                  commitLayoutEffectOnFiber(root, current2, fiber, committedLanes);
                } catch (error2) {
                  captureCommitPhaseError(fiber, fiber.return, error2);
                }
                resetCurrentFiber();
              }
              if (fiber === subtreeRoot) {
                nextEffect = null;
                return;
              }
              var sibling = fiber.sibling;
              if (sibling !== null) {
                sibling.return = fiber.return;
                nextEffect = sibling;
                return;
              }
              nextEffect = fiber.return;
            }
          }
          function disappearLayoutEffects_begin(subtreeRoot) {
            while (nextEffect !== null) {
              var fiber = nextEffect;
              var firstChild = fiber.child;
              switch (fiber.tag) {
                case FunctionComponent:
                case ForwardRef:
                case MemoComponent:
                case SimpleMemoComponent: {
                  if (fiber.mode & ProfileMode) {
                    try {
                      startLayoutEffectTimer();
                      commitHookEffectListUnmount(Layout, fiber, fiber.return);
                    } finally {
                      recordLayoutEffectDuration(fiber);
                    }
                  } else {
                    commitHookEffectListUnmount(Layout, fiber, fiber.return);
                  }
                  break;
                }
                case ClassComponent: {
                  safelyDetachRef(fiber, fiber.return);
                  var instance = fiber.stateNode;
                  if (typeof instance.componentWillUnmount === "function") {
                    safelyCallComponentWillUnmount(fiber, fiber.return, instance);
                  }
                  break;
                }
                case HostComponent: {
                  safelyDetachRef(fiber, fiber.return);
                  break;
                }
                case OffscreenComponent: {
                  var isHidden = fiber.memoizedState !== null;
                  if (isHidden) {
                    disappearLayoutEffects_complete(subtreeRoot);
                    continue;
                  }
                  break;
                }
              }
              if (firstChild !== null) {
                firstChild.return = fiber;
                nextEffect = firstChild;
              } else {
                disappearLayoutEffects_complete(subtreeRoot);
              }
            }
          }
          function disappearLayoutEffects_complete(subtreeRoot) {
            while (nextEffect !== null) {
              var fiber = nextEffect;
              if (fiber === subtreeRoot) {
                nextEffect = null;
                return;
              }
              var sibling = fiber.sibling;
              if (sibling !== null) {
                sibling.return = fiber.return;
                nextEffect = sibling;
                return;
              }
              nextEffect = fiber.return;
            }
          }
          function reappearLayoutEffects_begin(subtreeRoot) {
            while (nextEffect !== null) {
              var fiber = nextEffect;
              var firstChild = fiber.child;
              if (fiber.tag === OffscreenComponent) {
                var isHidden = fiber.memoizedState !== null;
                if (isHidden) {
                  reappearLayoutEffects_complete(subtreeRoot);
                  continue;
                }
              }
              if (firstChild !== null) {
                firstChild.return = fiber;
                nextEffect = firstChild;
              } else {
                reappearLayoutEffects_complete(subtreeRoot);
              }
            }
          }
          function reappearLayoutEffects_complete(subtreeRoot) {
            while (nextEffect !== null) {
              var fiber = nextEffect;
              setCurrentFiber(fiber);
              try {
                reappearLayoutEffectsOnFiber(fiber);
              } catch (error2) {
                captureCommitPhaseError(fiber, fiber.return, error2);
              }
              resetCurrentFiber();
              if (fiber === subtreeRoot) {
                nextEffect = null;
                return;
              }
              var sibling = fiber.sibling;
              if (sibling !== null) {
                sibling.return = fiber.return;
                nextEffect = sibling;
                return;
              }
              nextEffect = fiber.return;
            }
          }
          function commitPassiveMountEffects(root, finishedWork, committedLanes, committedTransitions) {
            nextEffect = finishedWork;
            commitPassiveMountEffects_begin(finishedWork, root, committedLanes, committedTransitions);
          }
          function commitPassiveMountEffects_begin(subtreeRoot, root, committedLanes, committedTransitions) {
            while (nextEffect !== null) {
              var fiber = nextEffect;
              var firstChild = fiber.child;
              if ((fiber.subtreeFlags & PassiveMask) !== NoFlags && firstChild !== null) {
                firstChild.return = fiber;
                nextEffect = firstChild;
              } else {
                commitPassiveMountEffects_complete(subtreeRoot, root, committedLanes, committedTransitions);
              }
            }
          }
          function commitPassiveMountEffects_complete(subtreeRoot, root, committedLanes, committedTransitions) {
            while (nextEffect !== null) {
              var fiber = nextEffect;
              if ((fiber.flags & Passive) !== NoFlags) {
                setCurrentFiber(fiber);
                try {
                  commitPassiveMountOnFiber(root, fiber, committedLanes, committedTransitions);
                } catch (error2) {
                  captureCommitPhaseError(fiber, fiber.return, error2);
                }
                resetCurrentFiber();
              }
              if (fiber === subtreeRoot) {
                nextEffect = null;
                return;
              }
              var sibling = fiber.sibling;
              if (sibling !== null) {
                sibling.return = fiber.return;
                nextEffect = sibling;
                return;
              }
              nextEffect = fiber.return;
            }
          }
          function commitPassiveMountOnFiber(finishedRoot, finishedWork, committedLanes, committedTransitions) {
            switch (finishedWork.tag) {
              case FunctionComponent:
              case ForwardRef:
              case SimpleMemoComponent: {
                if (finishedWork.mode & ProfileMode) {
                  startPassiveEffectTimer();
                  try {
                    commitHookEffectListMount(Passive$1 | HasEffect, finishedWork);
                  } finally {
                    recordPassiveEffectDuration(finishedWork);
                  }
                } else {
                  commitHookEffectListMount(Passive$1 | HasEffect, finishedWork);
                }
                break;
              }
            }
          }
          function commitPassiveUnmountEffects(firstChild) {
            nextEffect = firstChild;
            commitPassiveUnmountEffects_begin();
          }
          function commitPassiveUnmountEffects_begin() {
            while (nextEffect !== null) {
              var fiber = nextEffect;
              var child = fiber.child;
              if ((nextEffect.flags & ChildDeletion) !== NoFlags) {
                var deletions = fiber.deletions;
                if (deletions !== null) {
                  for (var i = 0; i < deletions.length; i++) {
                    var fiberToDelete = deletions[i];
                    nextEffect = fiberToDelete;
                    commitPassiveUnmountEffectsInsideOfDeletedTree_begin(fiberToDelete, fiber);
                  }
                  {
                    var previousFiber = fiber.alternate;
                    if (previousFiber !== null) {
                      var detachedChild = previousFiber.child;
                      if (detachedChild !== null) {
                        previousFiber.child = null;
                        do {
                          var detachedSibling = detachedChild.sibling;
                          detachedChild.sibling = null;
                          detachedChild = detachedSibling;
                        } while (detachedChild !== null);
                      }
                    }
                  }
                  nextEffect = fiber;
                }
              }
              if ((fiber.subtreeFlags & PassiveMask) !== NoFlags && child !== null) {
                child.return = fiber;
                nextEffect = child;
              } else {
                commitPassiveUnmountEffects_complete();
              }
            }
          }
          function commitPassiveUnmountEffects_complete() {
            while (nextEffect !== null) {
              var fiber = nextEffect;
              if ((fiber.flags & Passive) !== NoFlags) {
                setCurrentFiber(fiber);
                commitPassiveUnmountOnFiber(fiber);
                resetCurrentFiber();
              }
              var sibling = fiber.sibling;
              if (sibling !== null) {
                sibling.return = fiber.return;
                nextEffect = sibling;
                return;
              }
              nextEffect = fiber.return;
            }
          }
          function commitPassiveUnmountOnFiber(finishedWork) {
            switch (finishedWork.tag) {
              case FunctionComponent:
              case ForwardRef:
              case SimpleMemoComponent: {
                if (finishedWork.mode & ProfileMode) {
                  startPassiveEffectTimer();
                  commitHookEffectListUnmount(Passive$1 | HasEffect, finishedWork, finishedWork.return);
                  recordPassiveEffectDuration(finishedWork);
                } else {
                  commitHookEffectListUnmount(Passive$1 | HasEffect, finishedWork, finishedWork.return);
                }
                break;
              }
            }
          }
          function commitPassiveUnmountEffectsInsideOfDeletedTree_begin(deletedSubtreeRoot, nearestMountedAncestor) {
            while (nextEffect !== null) {
              var fiber = nextEffect;
              setCurrentFiber(fiber);
              commitPassiveUnmountInsideDeletedTreeOnFiber(fiber, nearestMountedAncestor);
              resetCurrentFiber();
              var child = fiber.child;
              if (child !== null) {
                child.return = fiber;
                nextEffect = child;
              } else {
                commitPassiveUnmountEffectsInsideOfDeletedTree_complete(deletedSubtreeRoot);
              }
            }
          }
          function commitPassiveUnmountEffectsInsideOfDeletedTree_complete(deletedSubtreeRoot) {
            while (nextEffect !== null) {
              var fiber = nextEffect;
              var sibling = fiber.sibling;
              var returnFiber = fiber.return;
              {
                detachFiberAfterEffects(fiber);
                if (fiber === deletedSubtreeRoot) {
                  nextEffect = null;
                  return;
                }
              }
              if (sibling !== null) {
                sibling.return = returnFiber;
                nextEffect = sibling;
                return;
              }
              nextEffect = returnFiber;
            }
          }
          function commitPassiveUnmountInsideDeletedTreeOnFiber(current2, nearestMountedAncestor) {
            switch (current2.tag) {
              case FunctionComponent:
              case ForwardRef:
              case SimpleMemoComponent: {
                if (current2.mode & ProfileMode) {
                  startPassiveEffectTimer();
                  commitHookEffectListUnmount(Passive$1, current2, nearestMountedAncestor);
                  recordPassiveEffectDuration(current2);
                } else {
                  commitHookEffectListUnmount(Passive$1, current2, nearestMountedAncestor);
                }
                break;
              }
            }
          }
          function invokeLayoutEffectMountInDEV(fiber) {
            {
              switch (fiber.tag) {
                case FunctionComponent:
                case ForwardRef:
                case SimpleMemoComponent: {
                  try {
                    commitHookEffectListMount(Layout | HasEffect, fiber);
                  } catch (error2) {
                    captureCommitPhaseError(fiber, fiber.return, error2);
                  }
                  break;
                }
                case ClassComponent: {
                  var instance = fiber.stateNode;
                  try {
                    instance.componentDidMount();
                  } catch (error2) {
                    captureCommitPhaseError(fiber, fiber.return, error2);
                  }
                  break;
                }
              }
            }
          }
          function invokePassiveEffectMountInDEV(fiber) {
            {
              switch (fiber.tag) {
                case FunctionComponent:
                case ForwardRef:
                case SimpleMemoComponent: {
                  try {
                    commitHookEffectListMount(Passive$1 | HasEffect, fiber);
                  } catch (error2) {
                    captureCommitPhaseError(fiber, fiber.return, error2);
                  }
                  break;
                }
              }
            }
          }
          function invokeLayoutEffectUnmountInDEV(fiber) {
            {
              switch (fiber.tag) {
                case FunctionComponent:
                case ForwardRef:
                case SimpleMemoComponent: {
                  try {
                    commitHookEffectListUnmount(Layout | HasEffect, fiber, fiber.return);
                  } catch (error2) {
                    captureCommitPhaseError(fiber, fiber.return, error2);
                  }
                  break;
                }
                case ClassComponent: {
                  var instance = fiber.stateNode;
                  if (typeof instance.componentWillUnmount === "function") {
                    safelyCallComponentWillUnmount(fiber, fiber.return, instance);
                  }
                  break;
                }
              }
            }
          }
          function invokePassiveEffectUnmountInDEV(fiber) {
            {
              switch (fiber.tag) {
                case FunctionComponent:
                case ForwardRef:
                case SimpleMemoComponent: {
                  try {
                    commitHookEffectListUnmount(Passive$1 | HasEffect, fiber, fiber.return);
                  } catch (error2) {
                    captureCommitPhaseError(fiber, fiber.return, error2);
                  }
                }
              }
            }
          }
          var COMPONENT_TYPE = 0;
          var HAS_PSEUDO_CLASS_TYPE = 1;
          var ROLE_TYPE = 2;
          var TEST_NAME_TYPE = 3;
          var TEXT_TYPE = 4;
          if (typeof Symbol === "function" && Symbol.for) {
            var symbolFor = Symbol.for;
            COMPONENT_TYPE = symbolFor("selector.component");
            HAS_PSEUDO_CLASS_TYPE = symbolFor("selector.has_pseudo_class");
            ROLE_TYPE = symbolFor("selector.role");
            TEST_NAME_TYPE = symbolFor("selector.test_id");
            TEXT_TYPE = symbolFor("selector.text");
          }
          function createComponentSelector(component) {
            return {
              $$typeof: COMPONENT_TYPE,
              value: component
            };
          }
          function createHasPseudoClassSelector(selectors) {
            return {
              $$typeof: HAS_PSEUDO_CLASS_TYPE,
              value: selectors
            };
          }
          function createRoleSelector(role) {
            return {
              $$typeof: ROLE_TYPE,
              value: role
            };
          }
          function createTextSelector(text) {
            return {
              $$typeof: TEXT_TYPE,
              value: text
            };
          }
          function createTestNameSelector(id) {
            return {
              $$typeof: TEST_NAME_TYPE,
              value: id
            };
          }
          function findFiberRootForHostRoot(hostRoot) {
            var maybeFiber = getInstanceFromNode(hostRoot);
            if (maybeFiber != null) {
              if (typeof maybeFiber.memoizedProps["data-testname"] !== "string") {
                throw new Error("Invalid host root specified. Should be either a React container or a node with a testname attribute.");
              }
              return maybeFiber;
            } else {
              var fiberRoot = findFiberRoot(hostRoot);
              if (fiberRoot === null) {
                throw new Error("Could not find React container within specified host subtree.");
              }
              return fiberRoot.stateNode.current;
            }
          }
          function matchSelector(fiber, selector) {
            switch (selector.$$typeof) {
              case COMPONENT_TYPE:
                if (fiber.type === selector.value) {
                  return true;
                }
                break;
              case HAS_PSEUDO_CLASS_TYPE:
                return hasMatchingPaths(fiber, selector.value);
              case ROLE_TYPE:
                if (fiber.tag === HostComponent) {
                  var node = fiber.stateNode;
                  if (matchAccessibilityRole(node, selector.value)) {
                    return true;
                  }
                }
                break;
              case TEXT_TYPE:
                if (fiber.tag === HostComponent || fiber.tag === HostText) {
                  var textContent = getTextContent(fiber);
                  if (textContent !== null && textContent.indexOf(selector.value) >= 0) {
                    return true;
                  }
                }
                break;
              case TEST_NAME_TYPE:
                if (fiber.tag === HostComponent) {
                  var dataTestID = fiber.memoizedProps["data-testname"];
                  if (typeof dataTestID === "string" && dataTestID.toLowerCase() === selector.value.toLowerCase()) {
                    return true;
                  }
                }
                break;
              default:
                throw new Error("Invalid selector type specified.");
            }
            return false;
          }
          function selectorToString(selector) {
            switch (selector.$$typeof) {
              case COMPONENT_TYPE:
                var displayName = getComponentNameFromType(selector.value) || "Unknown";
                return "<" + displayName + ">";
              case HAS_PSEUDO_CLASS_TYPE:
                return ":has(" + (selectorToString(selector) || "") + ")";
              case ROLE_TYPE:
                return '[role="' + selector.value + '"]';
              case TEXT_TYPE:
                return '"' + selector.value + '"';
              case TEST_NAME_TYPE:
                return '[data-testname="' + selector.value + '"]';
              default:
                throw new Error("Invalid selector type specified.");
            }
          }
          function findPaths(root, selectors) {
            var matchingFibers = [];
            var stack = [root, 0];
            var index2 = 0;
            while (index2 < stack.length) {
              var fiber = stack[index2++];
              var selectorIndex = stack[index2++];
              var selector = selectors[selectorIndex];
              if (fiber.tag === HostComponent && isHiddenSubtree(fiber)) {
                continue;
              } else {
                while (selector != null && matchSelector(fiber, selector)) {
                  selectorIndex++;
                  selector = selectors[selectorIndex];
                }
              }
              if (selectorIndex === selectors.length) {
                matchingFibers.push(fiber);
              } else {
                var child = fiber.child;
                while (child !== null) {
                  stack.push(child, selectorIndex);
                  child = child.sibling;
                }
              }
            }
            return matchingFibers;
          }
          function hasMatchingPaths(root, selectors) {
            var stack = [root, 0];
            var index2 = 0;
            while (index2 < stack.length) {
              var fiber = stack[index2++];
              var selectorIndex = stack[index2++];
              var selector = selectors[selectorIndex];
              if (fiber.tag === HostComponent && isHiddenSubtree(fiber)) {
                continue;
              } else {
                while (selector != null && matchSelector(fiber, selector)) {
                  selectorIndex++;
                  selector = selectors[selectorIndex];
                }
              }
              if (selectorIndex === selectors.length) {
                return true;
              } else {
                var child = fiber.child;
                while (child !== null) {
                  stack.push(child, selectorIndex);
                  child = child.sibling;
                }
              }
            }
            return false;
          }
          function findAllNodes(hostRoot, selectors) {
            if (!supportsTestSelectors) {
              throw new Error("Test selector API is not supported by this renderer.");
            }
            var root = findFiberRootForHostRoot(hostRoot);
            var matchingFibers = findPaths(root, selectors);
            var instanceRoots = [];
            var stack = Array.from(matchingFibers);
            var index2 = 0;
            while (index2 < stack.length) {
              var node = stack[index2++];
              if (node.tag === HostComponent) {
                if (isHiddenSubtree(node)) {
                  continue;
                }
                instanceRoots.push(node.stateNode);
              } else {
                var child = node.child;
                while (child !== null) {
                  stack.push(child);
                  child = child.sibling;
                }
              }
            }
            return instanceRoots;
          }
          function getFindAllNodesFailureDescription(hostRoot, selectors) {
            if (!supportsTestSelectors) {
              throw new Error("Test selector API is not supported by this renderer.");
            }
            var root = findFiberRootForHostRoot(hostRoot);
            var maxSelectorIndex = 0;
            var matchedNames = [];
            var stack = [root, 0];
            var index2 = 0;
            while (index2 < stack.length) {
              var fiber = stack[index2++];
              var selectorIndex = stack[index2++];
              var selector = selectors[selectorIndex];
              if (fiber.tag === HostComponent && isHiddenSubtree(fiber)) {
                continue;
              } else if (matchSelector(fiber, selector)) {
                matchedNames.push(selectorToString(selector));
                selectorIndex++;
                if (selectorIndex > maxSelectorIndex) {
                  maxSelectorIndex = selectorIndex;
                }
              }
              if (selectorIndex < selectors.length) {
                var child = fiber.child;
                while (child !== null) {
                  stack.push(child, selectorIndex);
                  child = child.sibling;
                }
              }
            }
            if (maxSelectorIndex < selectors.length) {
              var unmatchedNames = [];
              for (var i = maxSelectorIndex; i < selectors.length; i++) {
                unmatchedNames.push(selectorToString(selectors[i]));
              }
              return "findAllNodes was able to match part of the selector:\n" + ("  " + matchedNames.join(" > ") + "\n\n") + "No matching component was found for:\n" + ("  " + unmatchedNames.join(" > "));
            }
            return null;
          }
          function findBoundingRects(hostRoot, selectors) {
            if (!supportsTestSelectors) {
              throw new Error("Test selector API is not supported by this renderer.");
            }
            var instanceRoots = findAllNodes(hostRoot, selectors);
            var boundingRects = [];
            for (var i = 0; i < instanceRoots.length; i++) {
              boundingRects.push(getBoundingRect(instanceRoots[i]));
            }
            for (var _i = boundingRects.length - 1; _i > 0; _i--) {
              var targetRect = boundingRects[_i];
              var targetLeft = targetRect.x;
              var targetRight = targetLeft + targetRect.width;
              var targetTop = targetRect.y;
              var targetBottom = targetTop + targetRect.height;
              for (var j = _i - 1; j >= 0; j--) {
                if (_i !== j) {
                  var otherRect = boundingRects[j];
                  var otherLeft = otherRect.x;
                  var otherRight = otherLeft + otherRect.width;
                  var otherTop = otherRect.y;
                  var otherBottom = otherTop + otherRect.height;
                  if (targetLeft >= otherLeft && targetTop >= otherTop && targetRight <= otherRight && targetBottom <= otherBottom) {
                    boundingRects.splice(_i, 1);
                    break;
                  } else if (targetLeft === otherLeft && targetRect.width === otherRect.width && !(otherBottom < targetTop) && !(otherTop > targetBottom)) {
                    if (otherTop > targetTop) {
                      otherRect.height += otherTop - targetTop;
                      otherRect.y = targetTop;
                    }
                    if (otherBottom < targetBottom) {
                      otherRect.height = targetBottom - otherTop;
                    }
                    boundingRects.splice(_i, 1);
                    break;
                  } else if (targetTop === otherTop && targetRect.height === otherRect.height && !(otherRight < targetLeft) && !(otherLeft > targetRight)) {
                    if (otherLeft > targetLeft) {
                      otherRect.width += otherLeft - targetLeft;
                      otherRect.x = targetLeft;
                    }
                    if (otherRight < targetRight) {
                      otherRect.width = targetRight - otherLeft;
                    }
                    boundingRects.splice(_i, 1);
                    break;
                  }
                }
              }
            }
            return boundingRects;
          }
          function focusWithin(hostRoot, selectors) {
            if (!supportsTestSelectors) {
              throw new Error("Test selector API is not supported by this renderer.");
            }
            var root = findFiberRootForHostRoot(hostRoot);
            var matchingFibers = findPaths(root, selectors);
            var stack = Array.from(matchingFibers);
            var index2 = 0;
            while (index2 < stack.length) {
              var fiber = stack[index2++];
              if (isHiddenSubtree(fiber)) {
                continue;
              }
              if (fiber.tag === HostComponent) {
                var node = fiber.stateNode;
                if (setFocusIfFocusable(node)) {
                  return true;
                }
              }
              var child = fiber.child;
              while (child !== null) {
                stack.push(child);
                child = child.sibling;
              }
            }
            return false;
          }
          var commitHooks = [];
          function onCommitRoot$1() {
            if (supportsTestSelectors) {
              commitHooks.forEach(function(commitHook) {
                return commitHook();
              });
            }
          }
          function observeVisibleRects(hostRoot, selectors, callback, options) {
            if (!supportsTestSelectors) {
              throw new Error("Test selector API is not supported by this renderer.");
            }
            var instanceRoots = findAllNodes(hostRoot, selectors);
            var _setupIntersectionObs = setupIntersectionObserver(instanceRoots, callback, options), disconnect = _setupIntersectionObs.disconnect, observe = _setupIntersectionObs.observe, unobserve = _setupIntersectionObs.unobserve;
            var commitHook = function() {
              var nextInstanceRoots = findAllNodes(hostRoot, selectors);
              instanceRoots.forEach(function(target) {
                if (nextInstanceRoots.indexOf(target) < 0) {
                  unobserve(target);
                }
              });
              nextInstanceRoots.forEach(function(target) {
                if (instanceRoots.indexOf(target) < 0) {
                  observe(target);
                }
              });
            };
            commitHooks.push(commitHook);
            return {
              disconnect: function() {
                var index2 = commitHooks.indexOf(commitHook);
                if (index2 >= 0) {
                  commitHooks.splice(index2, 1);
                }
                disconnect();
              }
            };
          }
          var ReactCurrentActQueue = ReactSharedInternals.ReactCurrentActQueue;
          function isLegacyActEnvironment(fiber) {
            {
              var isReactActEnvironmentGlobal = (
                // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
                typeof IS_REACT_ACT_ENVIRONMENT !== "undefined" ? IS_REACT_ACT_ENVIRONMENT : void 0
              );
              var jestIsDefined = typeof jest !== "undefined";
              return warnsIfNotActing && jestIsDefined && isReactActEnvironmentGlobal !== false;
            }
          }
          function isConcurrentActEnvironment() {
            {
              var isReactActEnvironmentGlobal = (
                // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
                typeof IS_REACT_ACT_ENVIRONMENT !== "undefined" ? IS_REACT_ACT_ENVIRONMENT : void 0
              );
              if (!isReactActEnvironmentGlobal && ReactCurrentActQueue.current !== null) {
                error("The current testing environment is not configured to support act(...)");
              }
              return isReactActEnvironmentGlobal;
            }
          }
          var ceil = Math.ceil;
          var ReactCurrentDispatcher$2 = ReactSharedInternals.ReactCurrentDispatcher, ReactCurrentOwner$2 = ReactSharedInternals.ReactCurrentOwner, ReactCurrentBatchConfig$2 = ReactSharedInternals.ReactCurrentBatchConfig, ReactCurrentActQueue$1 = ReactSharedInternals.ReactCurrentActQueue;
          var NoContext = (
            /*             */
            0
          );
          var BatchedContext = (
            /*               */
            1
          );
          var RenderContext2 = (
            /*                */
            2
          );
          var CommitContext = (
            /*                */
            4
          );
          var RootInProgress = 0;
          var RootFatalErrored = 1;
          var RootErrored = 2;
          var RootSuspended = 3;
          var RootSuspendedWithDelay = 4;
          var RootCompleted = 5;
          var RootDidNotComplete = 6;
          var executionContext = NoContext;
          var workInProgressRoot = null;
          var workInProgress = null;
          var workInProgressRootRenderLanes = NoLanes;
          var subtreeRenderLanes = NoLanes;
          var subtreeRenderLanesCursor = createCursor(NoLanes);
          var workInProgressRootExitStatus = RootInProgress;
          var workInProgressRootFatalError = null;
          var workInProgressRootIncludedLanes = NoLanes;
          var workInProgressRootSkippedLanes = NoLanes;
          var workInProgressRootInterleavedUpdatedLanes = NoLanes;
          var workInProgressRootPingedLanes = NoLanes;
          var workInProgressRootConcurrentErrors = null;
          var workInProgressRootRecoverableErrors = null;
          var globalMostRecentFallbackTime = 0;
          var FALLBACK_THROTTLE_MS = 500;
          var workInProgressRootRenderTargetTime = Infinity;
          var RENDER_TIMEOUT_MS = 500;
          var workInProgressTransitions = null;
          function resetRenderTimer() {
            workInProgressRootRenderTargetTime = now() + RENDER_TIMEOUT_MS;
          }
          function getRenderTargetTime() {
            return workInProgressRootRenderTargetTime;
          }
          var hasUncaughtError = false;
          var firstUncaughtError = null;
          var legacyErrorBoundariesThatAlreadyFailed = null;
          var rootDoesHavePassiveEffects = false;
          var rootWithPendingPassiveEffects = null;
          var pendingPassiveEffectsLanes = NoLanes;
          var pendingPassiveProfilerEffects = [];
          var pendingPassiveTransitions = null;
          var NESTED_UPDATE_LIMIT = 50;
          var nestedUpdateCount = 0;
          var rootWithNestedUpdates = null;
          var isFlushingPassiveEffects = false;
          var didScheduleUpdateDuringPassiveEffects = false;
          var NESTED_PASSIVE_UPDATE_LIMIT = 50;
          var nestedPassiveUpdateCount = 0;
          var rootWithPassiveNestedUpdates = null;
          var currentEventTime = NoTimestamp;
          var currentEventTransitionLane = NoLanes;
          var isRunningInsertionEffect = false;
          function getWorkInProgressRoot() {
            return workInProgressRoot;
          }
          function requestEventTime() {
            if ((executionContext & (RenderContext2 | CommitContext)) !== NoContext) {
              return now();
            }
            if (currentEventTime !== NoTimestamp) {
              return currentEventTime;
            }
            currentEventTime = now();
            return currentEventTime;
          }
          function requestUpdateLane(fiber) {
            var mode = fiber.mode;
            if ((mode & ConcurrentMode) === NoMode) {
              return SyncLane;
            } else if ((executionContext & RenderContext2) !== NoContext && workInProgressRootRenderLanes !== NoLanes) {
              return pickArbitraryLane(workInProgressRootRenderLanes);
            }
            var isTransition = requestCurrentTransition() !== NoTransition;
            if (isTransition) {
              if (ReactCurrentBatchConfig$2.transition !== null) {
                var transition = ReactCurrentBatchConfig$2.transition;
                if (!transition._updatedFibers) {
                  transition._updatedFibers = /* @__PURE__ */ new Set();
                }
                transition._updatedFibers.add(fiber);
              }
              if (currentEventTransitionLane === NoLane) {
                currentEventTransitionLane = claimNextTransitionLane();
              }
              return currentEventTransitionLane;
            }
            var updateLane = getCurrentUpdatePriority();
            if (updateLane !== NoLane) {
              return updateLane;
            }
            var eventLane = getCurrentEventPriority();
            return eventLane;
          }
          function requestRetryLane(fiber) {
            var mode = fiber.mode;
            if ((mode & ConcurrentMode) === NoMode) {
              return SyncLane;
            }
            return claimNextRetryLane();
          }
          function scheduleUpdateOnFiber(root, fiber, lane, eventTime) {
            checkForNestedUpdates();
            {
              if (isRunningInsertionEffect) {
                error("useInsertionEffect must not schedule updates.");
              }
            }
            {
              if (isFlushingPassiveEffects) {
                didScheduleUpdateDuringPassiveEffects = true;
              }
            }
            markRootUpdated(root, lane, eventTime);
            if ((executionContext & RenderContext2) !== NoLanes && root === workInProgressRoot) {
              warnAboutRenderPhaseUpdatesInDEV(fiber);
            } else {
              {
                if (isDevToolsPresent) {
                  addFiberToLanesMap(root, fiber, lane);
                }
              }
              warnIfUpdatesNotWrappedWithActDEV(fiber);
              if (root === workInProgressRoot) {
                if ((executionContext & RenderContext2) === NoContext) {
                  workInProgressRootInterleavedUpdatedLanes = mergeLanes(workInProgressRootInterleavedUpdatedLanes, lane);
                }
                if (workInProgressRootExitStatus === RootSuspendedWithDelay) {
                  markRootSuspended$1(root, workInProgressRootRenderLanes);
                }
              }
              ensureRootIsScheduled(root, eventTime);
              if (lane === SyncLane && executionContext === NoContext && (fiber.mode & ConcurrentMode) === NoMode && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
              !ReactCurrentActQueue$1.isBatchingLegacy) {
                resetRenderTimer();
                flushSyncCallbacksOnlyInLegacyMode();
              }
            }
          }
          function scheduleInitialHydrationOnRoot(root, lane, eventTime) {
            var current2 = root.current;
            current2.lanes = lane;
            markRootUpdated(root, lane, eventTime);
            ensureRootIsScheduled(root, eventTime);
          }
          function isUnsafeClassRenderPhaseUpdate(fiber) {
            return (
              // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
              // decided not to enable it.
              (executionContext & RenderContext2) !== NoContext
            );
          }
          function ensureRootIsScheduled(root, currentTime) {
            var existingCallbackNode = root.callbackNode;
            markStarvedLanesAsExpired(root, currentTime);
            var nextLanes = getNextLanes(root, root === workInProgressRoot ? workInProgressRootRenderLanes : NoLanes);
            if (nextLanes === NoLanes) {
              if (existingCallbackNode !== null) {
                cancelCallback$1(existingCallbackNode);
              }
              root.callbackNode = null;
              root.callbackPriority = NoLane;
              return;
            }
            var newCallbackPriority = getHighestPriorityLane(nextLanes);
            var existingCallbackPriority = root.callbackPriority;
            if (existingCallbackPriority === newCallbackPriority && // Special case related to `act`. If the currently scheduled task is a
            // Scheduler task, rather than an `act` task, cancel it and re-scheduled
            // on the `act` queue.
            !(ReactCurrentActQueue$1.current !== null && existingCallbackNode !== fakeActCallbackNode)) {
              {
                if (existingCallbackNode == null && existingCallbackPriority !== SyncLane) {
                  error("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
                }
              }
              return;
            }
            if (existingCallbackNode != null) {
              cancelCallback$1(existingCallbackNode);
            }
            var newCallbackNode;
            if (newCallbackPriority === SyncLane) {
              if (root.tag === LegacyRoot) {
                if (ReactCurrentActQueue$1.isBatchingLegacy !== null) {
                  ReactCurrentActQueue$1.didScheduleLegacyUpdate = true;
                }
                scheduleLegacySyncCallback(performSyncWorkOnRoot.bind(null, root));
              } else {
                scheduleSyncCallback(performSyncWorkOnRoot.bind(null, root));
              }
              if (supportsMicrotasks) {
                if (ReactCurrentActQueue$1.current !== null) {
                  ReactCurrentActQueue$1.current.push(flushSyncCallbacks);
                } else {
                  scheduleMicrotask2(function() {
                    if ((executionContext & (RenderContext2 | CommitContext)) === NoContext) {
                      flushSyncCallbacks();
                    }
                  });
                }
              } else {
                scheduleCallback$1(ImmediatePriority, flushSyncCallbacks);
              }
              newCallbackNode = null;
            } else {
              var schedulerPriorityLevel;
              switch (lanesToEventPriority(nextLanes)) {
                case DiscreteEventPriority:
                  schedulerPriorityLevel = ImmediatePriority;
                  break;
                case ContinuousEventPriority:
                  schedulerPriorityLevel = UserBlockingPriority;
                  break;
                case DefaultEventPriority:
                  schedulerPriorityLevel = NormalPriority;
                  break;
                case IdleEventPriority:
                  schedulerPriorityLevel = IdlePriority;
                  break;
                default:
                  schedulerPriorityLevel = NormalPriority;
                  break;
              }
              newCallbackNode = scheduleCallback$1(schedulerPriorityLevel, performConcurrentWorkOnRoot.bind(null, root));
            }
            root.callbackPriority = newCallbackPriority;
            root.callbackNode = newCallbackNode;
          }
          function performConcurrentWorkOnRoot(root, didTimeout) {
            {
              resetNestedUpdateFlag();
            }
            currentEventTime = NoTimestamp;
            currentEventTransitionLane = NoLanes;
            if ((executionContext & (RenderContext2 | CommitContext)) !== NoContext) {
              throw new Error("Should not already be working.");
            }
            var originalCallbackNode = root.callbackNode;
            var didFlushPassiveEffects = flushPassiveEffects();
            if (didFlushPassiveEffects) {
              if (root.callbackNode !== originalCallbackNode) {
                return null;
              }
            }
            var lanes = getNextLanes(root, root === workInProgressRoot ? workInProgressRootRenderLanes : NoLanes);
            if (lanes === NoLanes) {
              return null;
            }
            var shouldTimeSlice = !includesBlockingLane(root, lanes) && !includesExpiredLane(root, lanes) && !didTimeout;
            var exitStatus = shouldTimeSlice ? renderRootConcurrent(root, lanes) : renderRootSync(root, lanes);
            if (exitStatus !== RootInProgress) {
              if (exitStatus === RootErrored) {
                var errorRetryLanes = getLanesToRetrySynchronouslyOnError(root);
                if (errorRetryLanes !== NoLanes) {
                  lanes = errorRetryLanes;
                  exitStatus = recoverFromConcurrentError(root, errorRetryLanes);
                }
              }
              if (exitStatus === RootFatalErrored) {
                var fatalError = workInProgressRootFatalError;
                prepareFreshStack(root, NoLanes);
                markRootSuspended$1(root, lanes);
                ensureRootIsScheduled(root, now());
                throw fatalError;
              }
              if (exitStatus === RootDidNotComplete) {
                markRootSuspended$1(root, lanes);
              } else {
                var renderWasConcurrent = !includesBlockingLane(root, lanes);
                var finishedWork = root.current.alternate;
                if (renderWasConcurrent && !isRenderConsistentWithExternalStores(finishedWork)) {
                  exitStatus = renderRootSync(root, lanes);
                  if (exitStatus === RootErrored) {
                    var _errorRetryLanes = getLanesToRetrySynchronouslyOnError(root);
                    if (_errorRetryLanes !== NoLanes) {
                      lanes = _errorRetryLanes;
                      exitStatus = recoverFromConcurrentError(root, _errorRetryLanes);
                    }
                  }
                  if (exitStatus === RootFatalErrored) {
                    var _fatalError = workInProgressRootFatalError;
                    prepareFreshStack(root, NoLanes);
                    markRootSuspended$1(root, lanes);
                    ensureRootIsScheduled(root, now());
                    throw _fatalError;
                  }
                }
                root.finishedWork = finishedWork;
                root.finishedLanes = lanes;
                finishConcurrentRender(root, exitStatus, lanes);
              }
            }
            ensureRootIsScheduled(root, now());
            if (root.callbackNode === originalCallbackNode) {
              return performConcurrentWorkOnRoot.bind(null, root);
            }
            return null;
          }
          function recoverFromConcurrentError(root, errorRetryLanes) {
            var errorsFromFirstAttempt = workInProgressRootConcurrentErrors;
            if (isRootDehydrated(root)) {
              var rootWorkInProgress = prepareFreshStack(root, errorRetryLanes);
              rootWorkInProgress.flags |= ForceClientRender;
              {
                errorHydratingContainer(root.containerInfo);
              }
            }
            var exitStatus = renderRootSync(root, errorRetryLanes);
            if (exitStatus !== RootErrored) {
              var errorsFromSecondAttempt = workInProgressRootRecoverableErrors;
              workInProgressRootRecoverableErrors = errorsFromFirstAttempt;
              if (errorsFromSecondAttempt !== null) {
                queueRecoverableErrors(errorsFromSecondAttempt);
              }
            }
            return exitStatus;
          }
          function queueRecoverableErrors(errors) {
            if (workInProgressRootRecoverableErrors === null) {
              workInProgressRootRecoverableErrors = errors;
            } else {
              workInProgressRootRecoverableErrors.push.apply(workInProgressRootRecoverableErrors, errors);
            }
          }
          function finishConcurrentRender(root, exitStatus, lanes) {
            switch (exitStatus) {
              case RootInProgress:
              case RootFatalErrored: {
                throw new Error("Root did not complete. This is a bug in React.");
              }
              case RootErrored: {
                commitRoot(root, workInProgressRootRecoverableErrors, workInProgressTransitions);
                break;
              }
              case RootSuspended: {
                markRootSuspended$1(root, lanes);
                if (includesOnlyRetries(lanes) && // do not delay if we're inside an act() scope
                !shouldForceFlushFallbacksInDEV()) {
                  var msUntilTimeout = globalMostRecentFallbackTime + FALLBACK_THROTTLE_MS - now();
                  if (msUntilTimeout > 10) {
                    var nextLanes = getNextLanes(root, NoLanes);
                    if (nextLanes !== NoLanes) {
                      break;
                    }
                    var suspendedLanes = root.suspendedLanes;
                    if (!isSubsetOfLanes(suspendedLanes, lanes)) {
                      var eventTime = requestEventTime();
                      markRootPinged(root, suspendedLanes);
                      break;
                    }
                    root.timeoutHandle = scheduleTimeout(commitRoot.bind(null, root, workInProgressRootRecoverableErrors, workInProgressTransitions), msUntilTimeout);
                    break;
                  }
                }
                commitRoot(root, workInProgressRootRecoverableErrors, workInProgressTransitions);
                break;
              }
              case RootSuspendedWithDelay: {
                markRootSuspended$1(root, lanes);
                if (includesOnlyTransitions(lanes)) {
                  break;
                }
                if (!shouldForceFlushFallbacksInDEV()) {
                  var mostRecentEventTime = getMostRecentEventTime(root, lanes);
                  var eventTimeMs = mostRecentEventTime;
                  var timeElapsedMs = now() - eventTimeMs;
                  var _msUntilTimeout = jnd(timeElapsedMs) - timeElapsedMs;
                  if (_msUntilTimeout > 10) {
                    root.timeoutHandle = scheduleTimeout(commitRoot.bind(null, root, workInProgressRootRecoverableErrors, workInProgressTransitions), _msUntilTimeout);
                    break;
                  }
                }
                commitRoot(root, workInProgressRootRecoverableErrors, workInProgressTransitions);
                break;
              }
              case RootCompleted: {
                commitRoot(root, workInProgressRootRecoverableErrors, workInProgressTransitions);
                break;
              }
              default: {
                throw new Error("Unknown root exit status.");
              }
            }
          }
          function isRenderConsistentWithExternalStores(finishedWork) {
            var node = finishedWork;
            while (true) {
              if (node.flags & StoreConsistency) {
                var updateQueue = node.updateQueue;
                if (updateQueue !== null) {
                  var checks = updateQueue.stores;
                  if (checks !== null) {
                    for (var i = 0; i < checks.length; i++) {
                      var check = checks[i];
                      var getSnapshot = check.getSnapshot;
                      var renderedValue = check.value;
                      try {
                        if (!objectIs(getSnapshot(), renderedValue)) {
                          return false;
                        }
                      } catch (error2) {
                        return false;
                      }
                    }
                  }
                }
              }
              var child = node.child;
              if (node.subtreeFlags & StoreConsistency && child !== null) {
                child.return = node;
                node = child;
                continue;
              }
              if (node === finishedWork) {
                return true;
              }
              while (node.sibling === null) {
                if (node.return === null || node.return === finishedWork) {
                  return true;
                }
                node = node.return;
              }
              node.sibling.return = node.return;
              node = node.sibling;
            }
            return true;
          }
          function markRootSuspended$1(root, suspendedLanes) {
            suspendedLanes = removeLanes(suspendedLanes, workInProgressRootPingedLanes);
            suspendedLanes = removeLanes(suspendedLanes, workInProgressRootInterleavedUpdatedLanes);
            markRootSuspended(root, suspendedLanes);
          }
          function performSyncWorkOnRoot(root) {
            {
              syncNestedUpdateFlag();
            }
            if ((executionContext & (RenderContext2 | CommitContext)) !== NoContext) {
              throw new Error("Should not already be working.");
            }
            flushPassiveEffects();
            var lanes = getNextLanes(root, NoLanes);
            if (!includesSomeLane(lanes, SyncLane)) {
              ensureRootIsScheduled(root, now());
              return null;
            }
            var exitStatus = renderRootSync(root, lanes);
            if (root.tag !== LegacyRoot && exitStatus === RootErrored) {
              var errorRetryLanes = getLanesToRetrySynchronouslyOnError(root);
              if (errorRetryLanes !== NoLanes) {
                lanes = errorRetryLanes;
                exitStatus = recoverFromConcurrentError(root, errorRetryLanes);
              }
            }
            if (exitStatus === RootFatalErrored) {
              var fatalError = workInProgressRootFatalError;
              prepareFreshStack(root, NoLanes);
              markRootSuspended$1(root, lanes);
              ensureRootIsScheduled(root, now());
              throw fatalError;
            }
            if (exitStatus === RootDidNotComplete) {
              throw new Error("Root did not complete. This is a bug in React.");
            }
            var finishedWork = root.current.alternate;
            root.finishedWork = finishedWork;
            root.finishedLanes = lanes;
            commitRoot(root, workInProgressRootRecoverableErrors, workInProgressTransitions);
            ensureRootIsScheduled(root, now());
            return null;
          }
          function flushRoot(root, lanes) {
            if (lanes !== NoLanes) {
              markRootEntangled(root, mergeLanes(lanes, SyncLane));
              ensureRootIsScheduled(root, now());
              if ((executionContext & (RenderContext2 | CommitContext)) === NoContext) {
                resetRenderTimer();
                flushSyncCallbacks();
              }
            }
          }
          function deferredUpdates(fn) {
            var previousPriority = getCurrentUpdatePriority();
            var prevTransition = ReactCurrentBatchConfig$2.transition;
            try {
              ReactCurrentBatchConfig$2.transition = null;
              setCurrentUpdatePriority(DefaultEventPriority);
              return fn();
            } finally {
              setCurrentUpdatePriority(previousPriority);
              ReactCurrentBatchConfig$2.transition = prevTransition;
            }
          }
          function batchedUpdates(fn, a) {
            var prevExecutionContext = executionContext;
            executionContext |= BatchedContext;
            try {
              return fn(a);
            } finally {
              executionContext = prevExecutionContext;
              if (executionContext === NoContext && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
              !ReactCurrentActQueue$1.isBatchingLegacy) {
                resetRenderTimer();
                flushSyncCallbacksOnlyInLegacyMode();
              }
            }
          }
          function discreteUpdates(fn, a, b, c, d) {
            var previousPriority = getCurrentUpdatePriority();
            var prevTransition = ReactCurrentBatchConfig$2.transition;
            try {
              ReactCurrentBatchConfig$2.transition = null;
              setCurrentUpdatePriority(DiscreteEventPriority);
              return fn(a, b, c, d);
            } finally {
              setCurrentUpdatePriority(previousPriority);
              ReactCurrentBatchConfig$2.transition = prevTransition;
              if (executionContext === NoContext) {
                resetRenderTimer();
              }
            }
          }
          function flushSync(fn) {
            if (rootWithPendingPassiveEffects !== null && rootWithPendingPassiveEffects.tag === LegacyRoot && (executionContext & (RenderContext2 | CommitContext)) === NoContext) {
              flushPassiveEffects();
            }
            var prevExecutionContext = executionContext;
            executionContext |= BatchedContext;
            var prevTransition = ReactCurrentBatchConfig$2.transition;
            var previousPriority = getCurrentUpdatePriority();
            try {
              ReactCurrentBatchConfig$2.transition = null;
              setCurrentUpdatePriority(DiscreteEventPriority);
              if (fn) {
                return fn();
              } else {
                return void 0;
              }
            } finally {
              setCurrentUpdatePriority(previousPriority);
              ReactCurrentBatchConfig$2.transition = prevTransition;
              executionContext = prevExecutionContext;
              if ((executionContext & (RenderContext2 | CommitContext)) === NoContext) {
                flushSyncCallbacks();
              }
            }
          }
          function isAlreadyRendering() {
            return (executionContext & (RenderContext2 | CommitContext)) !== NoContext;
          }
          function flushControlled(fn) {
            var prevExecutionContext = executionContext;
            executionContext |= BatchedContext;
            var prevTransition = ReactCurrentBatchConfig$2.transition;
            var previousPriority = getCurrentUpdatePriority();
            try {
              ReactCurrentBatchConfig$2.transition = null;
              setCurrentUpdatePriority(DiscreteEventPriority);
              fn();
            } finally {
              setCurrentUpdatePriority(previousPriority);
              ReactCurrentBatchConfig$2.transition = prevTransition;
              executionContext = prevExecutionContext;
              if (executionContext === NoContext) {
                resetRenderTimer();
                flushSyncCallbacks();
              }
            }
          }
          function pushRenderLanes(fiber, lanes) {
            push(subtreeRenderLanesCursor, subtreeRenderLanes, fiber);
            subtreeRenderLanes = mergeLanes(subtreeRenderLanes, lanes);
            workInProgressRootIncludedLanes = mergeLanes(workInProgressRootIncludedLanes, lanes);
          }
          function popRenderLanes(fiber) {
            subtreeRenderLanes = subtreeRenderLanesCursor.current;
            pop(subtreeRenderLanesCursor, fiber);
          }
          function prepareFreshStack(root, lanes) {
            root.finishedWork = null;
            root.finishedLanes = NoLanes;
            var timeoutHandle = root.timeoutHandle;
            if (timeoutHandle !== noTimeout) {
              root.timeoutHandle = noTimeout;
              cancelTimeout(timeoutHandle);
            }
            if (workInProgress !== null) {
              var interruptedWork = workInProgress.return;
              while (interruptedWork !== null) {
                var current2 = interruptedWork.alternate;
                unwindInterruptedWork(current2, interruptedWork);
                interruptedWork = interruptedWork.return;
              }
            }
            workInProgressRoot = root;
            var rootWorkInProgress = createWorkInProgress(root.current, null);
            workInProgress = rootWorkInProgress;
            workInProgressRootRenderLanes = subtreeRenderLanes = workInProgressRootIncludedLanes = lanes;
            workInProgressRootExitStatus = RootInProgress;
            workInProgressRootFatalError = null;
            workInProgressRootSkippedLanes = NoLanes;
            workInProgressRootInterleavedUpdatedLanes = NoLanes;
            workInProgressRootPingedLanes = NoLanes;
            workInProgressRootConcurrentErrors = null;
            workInProgressRootRecoverableErrors = null;
            finishQueueingConcurrentUpdates();
            {
              ReactStrictModeWarnings.discardPendingWarnings();
            }
            return rootWorkInProgress;
          }
          function handleError(root, thrownValue) {
            do {
              var erroredWork = workInProgress;
              try {
                resetContextDependencies();
                resetHooksAfterThrow();
                resetCurrentFiber();
                ReactCurrentOwner$2.current = null;
                if (erroredWork === null || erroredWork.return === null) {
                  workInProgressRootExitStatus = RootFatalErrored;
                  workInProgressRootFatalError = thrownValue;
                  workInProgress = null;
                  return;
                }
                if (enableProfilerTimer && erroredWork.mode & ProfileMode) {
                  stopProfilerTimerIfRunningAndRecordDelta(erroredWork, true);
                }
                if (enableSchedulingProfiler) {
                  markComponentRenderStopped();
                  if (thrownValue !== null && typeof thrownValue === "object" && typeof thrownValue.then === "function") {
                    var wakeable = thrownValue;
                    markComponentSuspended(erroredWork, wakeable, workInProgressRootRenderLanes);
                  } else {
                    markComponentErrored(erroredWork, thrownValue, workInProgressRootRenderLanes);
                  }
                }
                throwException(root, erroredWork.return, erroredWork, thrownValue, workInProgressRootRenderLanes);
                completeUnitOfWork(erroredWork);
              } catch (yetAnotherThrownValue) {
                thrownValue = yetAnotherThrownValue;
                if (workInProgress === erroredWork && erroredWork !== null) {
                  erroredWork = erroredWork.return;
                  workInProgress = erroredWork;
                } else {
                  erroredWork = workInProgress;
                }
                continue;
              }
              return;
            } while (true);
          }
          function pushDispatcher() {
            var prevDispatcher = ReactCurrentDispatcher$2.current;
            ReactCurrentDispatcher$2.current = ContextOnlyDispatcher;
            if (prevDispatcher === null) {
              return ContextOnlyDispatcher;
            } else {
              return prevDispatcher;
            }
          }
          function popDispatcher(prevDispatcher) {
            ReactCurrentDispatcher$2.current = prevDispatcher;
          }
          function markCommitTimeOfFallback() {
            globalMostRecentFallbackTime = now();
          }
          function markSkippedUpdateLanes(lane) {
            workInProgressRootSkippedLanes = mergeLanes(lane, workInProgressRootSkippedLanes);
          }
          function renderDidSuspend() {
            if (workInProgressRootExitStatus === RootInProgress) {
              workInProgressRootExitStatus = RootSuspended;
            }
          }
          function renderDidSuspendDelayIfPossible() {
            if (workInProgressRootExitStatus === RootInProgress || workInProgressRootExitStatus === RootSuspended || workInProgressRootExitStatus === RootErrored) {
              workInProgressRootExitStatus = RootSuspendedWithDelay;
            }
            if (workInProgressRoot !== null && (includesNonIdleWork(workInProgressRootSkippedLanes) || includesNonIdleWork(workInProgressRootInterleavedUpdatedLanes))) {
              markRootSuspended$1(workInProgressRoot, workInProgressRootRenderLanes);
            }
          }
          function renderDidError(error2) {
            if (workInProgressRootExitStatus !== RootSuspendedWithDelay) {
              workInProgressRootExitStatus = RootErrored;
            }
            if (workInProgressRootConcurrentErrors === null) {
              workInProgressRootConcurrentErrors = [error2];
            } else {
              workInProgressRootConcurrentErrors.push(error2);
            }
          }
          function renderHasNotSuspendedYet() {
            return workInProgressRootExitStatus === RootInProgress;
          }
          function renderRootSync(root, lanes) {
            var prevExecutionContext = executionContext;
            executionContext |= RenderContext2;
            var prevDispatcher = pushDispatcher();
            if (workInProgressRoot !== root || workInProgressRootRenderLanes !== lanes) {
              {
                if (isDevToolsPresent) {
                  var memoizedUpdaters = root.memoizedUpdaters;
                  if (memoizedUpdaters.size > 0) {
                    restorePendingUpdaters(root, workInProgressRootRenderLanes);
                    memoizedUpdaters.clear();
                  }
                  movePendingFibersToMemoized(root, lanes);
                }
              }
              workInProgressTransitions = getTransitionsForLanes();
              prepareFreshStack(root, lanes);
            }
            {
              markRenderStarted(lanes);
            }
            do {
              try {
                workLoopSync();
                break;
              } catch (thrownValue) {
                handleError(root, thrownValue);
              }
            } while (true);
            resetContextDependencies();
            executionContext = prevExecutionContext;
            popDispatcher(prevDispatcher);
            if (workInProgress !== null) {
              throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
            }
            {
              markRenderStopped();
            }
            workInProgressRoot = null;
            workInProgressRootRenderLanes = NoLanes;
            return workInProgressRootExitStatus;
          }
          function workLoopSync() {
            while (workInProgress !== null) {
              performUnitOfWork(workInProgress);
            }
          }
          function renderRootConcurrent(root, lanes) {
            var prevExecutionContext = executionContext;
            executionContext |= RenderContext2;
            var prevDispatcher = pushDispatcher();
            if (workInProgressRoot !== root || workInProgressRootRenderLanes !== lanes) {
              {
                if (isDevToolsPresent) {
                  var memoizedUpdaters = root.memoizedUpdaters;
                  if (memoizedUpdaters.size > 0) {
                    restorePendingUpdaters(root, workInProgressRootRenderLanes);
                    memoizedUpdaters.clear();
                  }
                  movePendingFibersToMemoized(root, lanes);
                }
              }
              workInProgressTransitions = getTransitionsForLanes();
              resetRenderTimer();
              prepareFreshStack(root, lanes);
            }
            {
              markRenderStarted(lanes);
            }
            do {
              try {
                workLoopConcurrent();
                break;
              } catch (thrownValue) {
                handleError(root, thrownValue);
              }
            } while (true);
            resetContextDependencies();
            popDispatcher(prevDispatcher);
            executionContext = prevExecutionContext;
            if (workInProgress !== null) {
              {
                markRenderYielded();
              }
              return RootInProgress;
            } else {
              {
                markRenderStopped();
              }
              workInProgressRoot = null;
              workInProgressRootRenderLanes = NoLanes;
              return workInProgressRootExitStatus;
            }
          }
          function workLoopConcurrent() {
            while (workInProgress !== null && !shouldYield()) {
              performUnitOfWork(workInProgress);
            }
          }
          function performUnitOfWork(unitOfWork) {
            var current2 = unitOfWork.alternate;
            setCurrentFiber(unitOfWork);
            var next;
            if ((unitOfWork.mode & ProfileMode) !== NoMode) {
              startProfilerTimer(unitOfWork);
              next = beginWork$1(current2, unitOfWork, subtreeRenderLanes);
              stopProfilerTimerIfRunningAndRecordDelta(unitOfWork, true);
            } else {
              next = beginWork$1(current2, unitOfWork, subtreeRenderLanes);
            }
            resetCurrentFiber();
            unitOfWork.memoizedProps = unitOfWork.pendingProps;
            if (next === null) {
              completeUnitOfWork(unitOfWork);
            } else {
              workInProgress = next;
            }
            ReactCurrentOwner$2.current = null;
          }
          function completeUnitOfWork(unitOfWork) {
            var completedWork = unitOfWork;
            do {
              var current2 = completedWork.alternate;
              var returnFiber = completedWork.return;
              if ((completedWork.flags & Incomplete) === NoFlags) {
                setCurrentFiber(completedWork);
                var next = void 0;
                if ((completedWork.mode & ProfileMode) === NoMode) {
                  next = completeWork(current2, completedWork, subtreeRenderLanes);
                } else {
                  startProfilerTimer(completedWork);
                  next = completeWork(current2, completedWork, subtreeRenderLanes);
                  stopProfilerTimerIfRunningAndRecordDelta(completedWork, false);
                }
                resetCurrentFiber();
                if (next !== null) {
                  workInProgress = next;
                  return;
                }
              } else {
                var _next = unwindWork(current2, completedWork);
                if (_next !== null) {
                  _next.flags &= HostEffectMask;
                  workInProgress = _next;
                  return;
                }
                if ((completedWork.mode & ProfileMode) !== NoMode) {
                  stopProfilerTimerIfRunningAndRecordDelta(completedWork, false);
                  var actualDuration = completedWork.actualDuration;
                  var child = completedWork.child;
                  while (child !== null) {
                    actualDuration += child.actualDuration;
                    child = child.sibling;
                  }
                  completedWork.actualDuration = actualDuration;
                }
                if (returnFiber !== null) {
                  returnFiber.flags |= Incomplete;
                  returnFiber.subtreeFlags = NoFlags;
                  returnFiber.deletions = null;
                } else {
                  workInProgressRootExitStatus = RootDidNotComplete;
                  workInProgress = null;
                  return;
                }
              }
              var siblingFiber = completedWork.sibling;
              if (siblingFiber !== null) {
                workInProgress = siblingFiber;
                return;
              }
              completedWork = returnFiber;
              workInProgress = completedWork;
            } while (completedWork !== null);
            if (workInProgressRootExitStatus === RootInProgress) {
              workInProgressRootExitStatus = RootCompleted;
            }
          }
          function commitRoot(root, recoverableErrors, transitions) {
            var previousUpdateLanePriority = getCurrentUpdatePriority();
            var prevTransition = ReactCurrentBatchConfig$2.transition;
            try {
              ReactCurrentBatchConfig$2.transition = null;
              setCurrentUpdatePriority(DiscreteEventPriority);
              commitRootImpl(root, recoverableErrors, transitions, previousUpdateLanePriority);
            } finally {
              ReactCurrentBatchConfig$2.transition = prevTransition;
              setCurrentUpdatePriority(previousUpdateLanePriority);
            }
            return null;
          }
          function commitRootImpl(root, recoverableErrors, transitions, renderPriorityLevel) {
            do {
              flushPassiveEffects();
            } while (rootWithPendingPassiveEffects !== null);
            flushRenderPhaseStrictModeWarningsInDEV();
            if ((executionContext & (RenderContext2 | CommitContext)) !== NoContext) {
              throw new Error("Should not already be working.");
            }
            var finishedWork = root.finishedWork;
            var lanes = root.finishedLanes;
            {
              markCommitStarted(lanes);
            }
            if (finishedWork === null) {
              {
                markCommitStopped();
              }
              return null;
            } else {
              {
                if (lanes === NoLanes) {
                  error("root.finishedLanes should not be empty during a commit. This is a bug in React.");
                }
              }
            }
            root.finishedWork = null;
            root.finishedLanes = NoLanes;
            if (finishedWork === root.current) {
              throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
            }
            root.callbackNode = null;
            root.callbackPriority = NoLane;
            var remainingLanes = mergeLanes(finishedWork.lanes, finishedWork.childLanes);
            markRootFinished(root, remainingLanes);
            if (root === workInProgressRoot) {
              workInProgressRoot = null;
              workInProgress = null;
              workInProgressRootRenderLanes = NoLanes;
            }
            if ((finishedWork.subtreeFlags & PassiveMask) !== NoFlags || (finishedWork.flags & PassiveMask) !== NoFlags) {
              if (!rootDoesHavePassiveEffects) {
                rootDoesHavePassiveEffects = true;
                pendingPassiveTransitions = transitions;
                scheduleCallback$1(NormalPriority, function() {
                  flushPassiveEffects();
                  return null;
                });
              }
            }
            var subtreeHasEffects = (finishedWork.subtreeFlags & (BeforeMutationMask | MutationMask | LayoutMask | PassiveMask)) !== NoFlags;
            var rootHasEffect = (finishedWork.flags & (BeforeMutationMask | MutationMask | LayoutMask | PassiveMask)) !== NoFlags;
            if (subtreeHasEffects || rootHasEffect) {
              var prevTransition = ReactCurrentBatchConfig$2.transition;
              ReactCurrentBatchConfig$2.transition = null;
              var previousPriority = getCurrentUpdatePriority();
              setCurrentUpdatePriority(DiscreteEventPriority);
              var prevExecutionContext = executionContext;
              executionContext |= CommitContext;
              ReactCurrentOwner$2.current = null;
              var shouldFireAfterActiveInstanceBlur2 = commitBeforeMutationEffects(root, finishedWork);
              {
                recordCommitTime();
              }
              commitMutationEffects(root, finishedWork, lanes);
              resetAfterCommit(root.containerInfo);
              root.current = finishedWork;
              {
                markLayoutEffectsStarted(lanes);
              }
              commitLayoutEffects(finishedWork, root, lanes);
              {
                markLayoutEffectsStopped();
              }
              requestPaint();
              executionContext = prevExecutionContext;
              setCurrentUpdatePriority(previousPriority);
              ReactCurrentBatchConfig$2.transition = prevTransition;
            } else {
              root.current = finishedWork;
              {
                recordCommitTime();
              }
            }
            var rootDidHavePassiveEffects = rootDoesHavePassiveEffects;
            if (rootDoesHavePassiveEffects) {
              rootDoesHavePassiveEffects = false;
              rootWithPendingPassiveEffects = root;
              pendingPassiveEffectsLanes = lanes;
            } else {
              {
                nestedPassiveUpdateCount = 0;
                rootWithPassiveNestedUpdates = null;
              }
            }
            remainingLanes = root.pendingLanes;
            if (remainingLanes === NoLanes) {
              legacyErrorBoundariesThatAlreadyFailed = null;
            }
            {
              if (!rootDidHavePassiveEffects) {
                commitDoubleInvokeEffectsInDEV(root.current, false);
              }
            }
            onCommitRoot(finishedWork.stateNode, renderPriorityLevel);
            {
              if (isDevToolsPresent) {
                root.memoizedUpdaters.clear();
              }
            }
            {
              onCommitRoot$1();
            }
            ensureRootIsScheduled(root, now());
            if (recoverableErrors !== null) {
              var onRecoverableError = root.onRecoverableError;
              for (var i = 0; i < recoverableErrors.length; i++) {
                var recoverableError = recoverableErrors[i];
                var componentStack = recoverableError.stack;
                var digest = recoverableError.digest;
                onRecoverableError(recoverableError.value, {
                  componentStack,
                  digest
                });
              }
            }
            if (hasUncaughtError) {
              hasUncaughtError = false;
              var error$1 = firstUncaughtError;
              firstUncaughtError = null;
              throw error$1;
            }
            if (includesSomeLane(pendingPassiveEffectsLanes, SyncLane) && root.tag !== LegacyRoot) {
              flushPassiveEffects();
            }
            remainingLanes = root.pendingLanes;
            if (includesSomeLane(remainingLanes, SyncLane)) {
              {
                markNestedUpdateScheduled();
              }
              if (root === rootWithNestedUpdates) {
                nestedUpdateCount++;
              } else {
                nestedUpdateCount = 0;
                rootWithNestedUpdates = root;
              }
            } else {
              nestedUpdateCount = 0;
            }
            flushSyncCallbacks();
            {
              markCommitStopped();
            }
            return null;
          }
          function flushPassiveEffects() {
            if (rootWithPendingPassiveEffects !== null) {
              var renderPriority = lanesToEventPriority(pendingPassiveEffectsLanes);
              var priority = lowerEventPriority(DefaultEventPriority, renderPriority);
              var prevTransition = ReactCurrentBatchConfig$2.transition;
              var previousPriority = getCurrentUpdatePriority();
              try {
                ReactCurrentBatchConfig$2.transition = null;
                setCurrentUpdatePriority(priority);
                return flushPassiveEffectsImpl();
              } finally {
                setCurrentUpdatePriority(previousPriority);
                ReactCurrentBatchConfig$2.transition = prevTransition;
              }
            }
            return false;
          }
          function enqueuePendingPassiveProfilerEffect(fiber) {
            {
              pendingPassiveProfilerEffects.push(fiber);
              if (!rootDoesHavePassiveEffects) {
                rootDoesHavePassiveEffects = true;
                scheduleCallback$1(NormalPriority, function() {
                  flushPassiveEffects();
                  return null;
                });
              }
            }
          }
          function flushPassiveEffectsImpl() {
            if (rootWithPendingPassiveEffects === null) {
              return false;
            }
            var transitions = pendingPassiveTransitions;
            pendingPassiveTransitions = null;
            var root = rootWithPendingPassiveEffects;
            var lanes = pendingPassiveEffectsLanes;
            rootWithPendingPassiveEffects = null;
            pendingPassiveEffectsLanes = NoLanes;
            if ((executionContext & (RenderContext2 | CommitContext)) !== NoContext) {
              throw new Error("Cannot flush passive effects while already rendering.");
            }
            {
              isFlushingPassiveEffects = true;
              didScheduleUpdateDuringPassiveEffects = false;
            }
            {
              markPassiveEffectsStarted(lanes);
            }
            var prevExecutionContext = executionContext;
            executionContext |= CommitContext;
            commitPassiveUnmountEffects(root.current);
            commitPassiveMountEffects(root, root.current, lanes, transitions);
            {
              var profilerEffects = pendingPassiveProfilerEffects;
              pendingPassiveProfilerEffects = [];
              for (var i = 0; i < profilerEffects.length; i++) {
                var _fiber = profilerEffects[i];
                commitPassiveEffectDurations(root, _fiber);
              }
            }
            {
              markPassiveEffectsStopped();
            }
            {
              commitDoubleInvokeEffectsInDEV(root.current, true);
            }
            executionContext = prevExecutionContext;
            flushSyncCallbacks();
            {
              if (didScheduleUpdateDuringPassiveEffects) {
                if (root === rootWithPassiveNestedUpdates) {
                  nestedPassiveUpdateCount++;
                } else {
                  nestedPassiveUpdateCount = 0;
                  rootWithPassiveNestedUpdates = root;
                }
              } else {
                nestedPassiveUpdateCount = 0;
              }
              isFlushingPassiveEffects = false;
              didScheduleUpdateDuringPassiveEffects = false;
            }
            onPostCommitRoot(root);
            {
              var stateNode = root.current.stateNode;
              stateNode.effectDuration = 0;
              stateNode.passiveEffectDuration = 0;
            }
            return true;
          }
          function isAlreadyFailedLegacyErrorBoundary(instance) {
            return legacyErrorBoundariesThatAlreadyFailed !== null && legacyErrorBoundariesThatAlreadyFailed.has(instance);
          }
          function markLegacyErrorBoundaryAsFailed(instance) {
            if (legacyErrorBoundariesThatAlreadyFailed === null) {
              legacyErrorBoundariesThatAlreadyFailed = /* @__PURE__ */ new Set([instance]);
            } else {
              legacyErrorBoundariesThatAlreadyFailed.add(instance);
            }
          }
          function prepareToThrowUncaughtError(error2) {
            if (!hasUncaughtError) {
              hasUncaughtError = true;
              firstUncaughtError = error2;
            }
          }
          var onUncaughtError = prepareToThrowUncaughtError;
          function captureCommitPhaseErrorOnRoot(rootFiber, sourceFiber, error2) {
            var errorInfo = createCapturedValueAtFiber(error2, sourceFiber);
            var update = createRootErrorUpdate(rootFiber, errorInfo, SyncLane);
            var root = enqueueUpdate(rootFiber, update, SyncLane);
            var eventTime = requestEventTime();
            if (root !== null) {
              markRootUpdated(root, SyncLane, eventTime);
              ensureRootIsScheduled(root, eventTime);
            }
          }
          function captureCommitPhaseError(sourceFiber, nearestMountedAncestor, error$1) {
            {
              reportUncaughtErrorInDEV(error$1);
              setIsRunningInsertionEffect(false);
            }
            if (sourceFiber.tag === HostRoot) {
              captureCommitPhaseErrorOnRoot(sourceFiber, sourceFiber, error$1);
              return;
            }
            var fiber = null;
            {
              fiber = nearestMountedAncestor;
            }
            while (fiber !== null) {
              if (fiber.tag === HostRoot) {
                captureCommitPhaseErrorOnRoot(fiber, sourceFiber, error$1);
                return;
              } else if (fiber.tag === ClassComponent) {
                var ctor = fiber.type;
                var instance = fiber.stateNode;
                if (typeof ctor.getDerivedStateFromError === "function" || typeof instance.componentDidCatch === "function" && !isAlreadyFailedLegacyErrorBoundary(instance)) {
                  var errorInfo = createCapturedValueAtFiber(error$1, sourceFiber);
                  var update = createClassErrorUpdate(fiber, errorInfo, SyncLane);
                  var root = enqueueUpdate(fiber, update, SyncLane);
                  var eventTime = requestEventTime();
                  if (root !== null) {
                    markRootUpdated(root, SyncLane, eventTime);
                    ensureRootIsScheduled(root, eventTime);
                  }
                  return;
                }
              }
              fiber = fiber.return;
            }
            {
              error("Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.\n\nError message:\n\n%s", error$1);
            }
          }
          function pingSuspendedRoot(root, wakeable, pingedLanes) {
            var pingCache = root.pingCache;
            if (pingCache !== null) {
              pingCache.delete(wakeable);
            }
            var eventTime = requestEventTime();
            markRootPinged(root, pingedLanes);
            warnIfSuspenseResolutionNotWrappedWithActDEV(root);
            if (workInProgressRoot === root && isSubsetOfLanes(workInProgressRootRenderLanes, pingedLanes)) {
              if (workInProgressRootExitStatus === RootSuspendedWithDelay || workInProgressRootExitStatus === RootSuspended && includesOnlyRetries(workInProgressRootRenderLanes) && now() - globalMostRecentFallbackTime < FALLBACK_THROTTLE_MS) {
                prepareFreshStack(root, NoLanes);
              } else {
                workInProgressRootPingedLanes = mergeLanes(workInProgressRootPingedLanes, pingedLanes);
              }
            }
            ensureRootIsScheduled(root, eventTime);
          }
          function retryTimedOutBoundary(boundaryFiber, retryLane) {
            if (retryLane === NoLane) {
              retryLane = requestRetryLane(boundaryFiber);
            }
            var eventTime = requestEventTime();
            var root = enqueueConcurrentRenderForLane(boundaryFiber, retryLane);
            if (root !== null) {
              markRootUpdated(root, retryLane, eventTime);
              ensureRootIsScheduled(root, eventTime);
            }
          }
          function retryDehydratedSuspenseBoundary(boundaryFiber) {
            var suspenseState = boundaryFiber.memoizedState;
            var retryLane = NoLane;
            if (suspenseState !== null) {
              retryLane = suspenseState.retryLane;
            }
            retryTimedOutBoundary(boundaryFiber, retryLane);
          }
          function resolveRetryWakeable(boundaryFiber, wakeable) {
            var retryLane = NoLane;
            var retryCache;
            switch (boundaryFiber.tag) {
              case SuspenseComponent:
                retryCache = boundaryFiber.stateNode;
                var suspenseState = boundaryFiber.memoizedState;
                if (suspenseState !== null) {
                  retryLane = suspenseState.retryLane;
                }
                break;
              case SuspenseListComponent:
                retryCache = boundaryFiber.stateNode;
                break;
              default:
                throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
            }
            if (retryCache !== null) {
              retryCache.delete(wakeable);
            }
            retryTimedOutBoundary(boundaryFiber, retryLane);
          }
          function jnd(timeElapsed) {
            return timeElapsed < 120 ? 120 : timeElapsed < 480 ? 480 : timeElapsed < 1080 ? 1080 : timeElapsed < 1920 ? 1920 : timeElapsed < 3e3 ? 3e3 : timeElapsed < 4320 ? 4320 : ceil(timeElapsed / 1960) * 1960;
          }
          function checkForNestedUpdates() {
            if (nestedUpdateCount > NESTED_UPDATE_LIMIT) {
              nestedUpdateCount = 0;
              rootWithNestedUpdates = null;
              throw new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
            }
            {
              if (nestedPassiveUpdateCount > NESTED_PASSIVE_UPDATE_LIMIT) {
                nestedPassiveUpdateCount = 0;
                rootWithPassiveNestedUpdates = null;
                error("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render.");
              }
            }
          }
          function flushRenderPhaseStrictModeWarningsInDEV() {
            {
              ReactStrictModeWarnings.flushLegacyContextWarning();
              {
                ReactStrictModeWarnings.flushPendingUnsafeLifecycleWarnings();
              }
            }
          }
          function commitDoubleInvokeEffectsInDEV(fiber, hasPassiveEffects) {
            {
              setCurrentFiber(fiber);
              invokeEffectsInDev(fiber, MountLayoutDev, invokeLayoutEffectUnmountInDEV);
              if (hasPassiveEffects) {
                invokeEffectsInDev(fiber, MountPassiveDev, invokePassiveEffectUnmountInDEV);
              }
              invokeEffectsInDev(fiber, MountLayoutDev, invokeLayoutEffectMountInDEV);
              if (hasPassiveEffects) {
                invokeEffectsInDev(fiber, MountPassiveDev, invokePassiveEffectMountInDEV);
              }
              resetCurrentFiber();
            }
          }
          function invokeEffectsInDev(firstChild, fiberFlags, invokeEffectFn) {
            {
              var current2 = firstChild;
              var subtreeRoot = null;
              while (current2 !== null) {
                var primarySubtreeFlag = current2.subtreeFlags & fiberFlags;
                if (current2 !== subtreeRoot && current2.child !== null && primarySubtreeFlag !== NoFlags) {
                  current2 = current2.child;
                } else {
                  if ((current2.flags & fiberFlags) !== NoFlags) {
                    invokeEffectFn(current2);
                  }
                  if (current2.sibling !== null) {
                    current2 = current2.sibling;
                  } else {
                    current2 = subtreeRoot = current2.return;
                  }
                }
              }
            }
          }
          var didWarnStateUpdateForNotYetMountedComponent = null;
          function warnAboutUpdateOnNotYetMountedFiberInDEV(fiber) {
            {
              if ((executionContext & RenderContext2) !== NoContext) {
                return;
              }
              if (!(fiber.mode & ConcurrentMode)) {
                return;
              }
              var tag = fiber.tag;
              if (tag !== IndeterminateComponent && tag !== HostRoot && tag !== ClassComponent && tag !== FunctionComponent && tag !== ForwardRef && tag !== MemoComponent && tag !== SimpleMemoComponent) {
                return;
              }
              var componentName = getComponentNameFromFiber(fiber) || "ReactComponent";
              if (didWarnStateUpdateForNotYetMountedComponent !== null) {
                if (didWarnStateUpdateForNotYetMountedComponent.has(componentName)) {
                  return;
                }
                didWarnStateUpdateForNotYetMountedComponent.add(componentName);
              } else {
                didWarnStateUpdateForNotYetMountedComponent = /* @__PURE__ */ new Set([componentName]);
              }
              var previousFiber = current;
              try {
                setCurrentFiber(fiber);
                error("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
              } finally {
                if (previousFiber) {
                  setCurrentFiber(fiber);
                } else {
                  resetCurrentFiber();
                }
              }
            }
          }
          var beginWork$1;
          {
            var dummyFiber = null;
            beginWork$1 = function(current2, unitOfWork, lanes) {
              var originalWorkInProgressCopy = assignFiberPropertiesInDEV(dummyFiber, unitOfWork);
              try {
                return beginWork(current2, unitOfWork, lanes);
              } catch (originalError) {
                if (didSuspendOrErrorWhileHydratingDEV() || originalError !== null && typeof originalError === "object" && typeof originalError.then === "function") {
                  throw originalError;
                }
                resetContextDependencies();
                resetHooksAfterThrow();
                unwindInterruptedWork(current2, unitOfWork);
                assignFiberPropertiesInDEV(unitOfWork, originalWorkInProgressCopy);
                if (unitOfWork.mode & ProfileMode) {
                  startProfilerTimer(unitOfWork);
                }
                invokeGuardedCallback(null, beginWork, null, current2, unitOfWork, lanes);
                if (hasCaughtError()) {
                  var replayError = clearCaughtError();
                  if (typeof replayError === "object" && replayError !== null && replayError._suppressLogging && typeof originalError === "object" && originalError !== null && !originalError._suppressLogging) {
                    originalError._suppressLogging = true;
                  }
                }
                throw originalError;
              }
            };
          }
          var didWarnAboutUpdateInRender = false;
          var didWarnAboutUpdateInRenderForAnotherComponent;
          {
            didWarnAboutUpdateInRenderForAnotherComponent = /* @__PURE__ */ new Set();
          }
          function warnAboutRenderPhaseUpdatesInDEV(fiber) {
            {
              if (isRendering && !getIsUpdatingOpaqueValueInRenderPhaseInDEV()) {
                switch (fiber.tag) {
                  case FunctionComponent:
                  case ForwardRef:
                  case SimpleMemoComponent: {
                    var renderingComponentName = workInProgress && getComponentNameFromFiber(workInProgress) || "Unknown";
                    var dedupeKey = renderingComponentName;
                    if (!didWarnAboutUpdateInRenderForAnotherComponent.has(dedupeKey)) {
                      didWarnAboutUpdateInRenderForAnotherComponent.add(dedupeKey);
                      var setStateComponentName = getComponentNameFromFiber(fiber) || "Unknown";
                      error("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", setStateComponentName, renderingComponentName, renderingComponentName);
                    }
                    break;
                  }
                  case ClassComponent: {
                    if (!didWarnAboutUpdateInRender) {
                      error("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state.");
                      didWarnAboutUpdateInRender = true;
                    }
                    break;
                  }
                }
              }
            }
          }
          function restorePendingUpdaters(root, lanes) {
            {
              if (isDevToolsPresent) {
                var memoizedUpdaters = root.memoizedUpdaters;
                memoizedUpdaters.forEach(function(schedulingFiber) {
                  addFiberToLanesMap(root, schedulingFiber, lanes);
                });
              }
            }
          }
          var fakeActCallbackNode = {};
          function scheduleCallback$1(priorityLevel, callback) {
            {
              var actQueue = ReactCurrentActQueue$1.current;
              if (actQueue !== null) {
                actQueue.push(callback);
                return fakeActCallbackNode;
              } else {
                return scheduleCallback(priorityLevel, callback);
              }
            }
          }
          function cancelCallback$1(callbackNode) {
            if (callbackNode === fakeActCallbackNode) {
              return;
            }
            return cancelCallback(callbackNode);
          }
          function shouldForceFlushFallbacksInDEV() {
            return ReactCurrentActQueue$1.current !== null;
          }
          function warnIfUpdatesNotWrappedWithActDEV(fiber) {
            {
              if (fiber.mode & ConcurrentMode) {
                if (!isConcurrentActEnvironment()) {
                  return;
                }
              } else {
                if (!isLegacyActEnvironment()) {
                  return;
                }
                if (executionContext !== NoContext) {
                  return;
                }
                if (fiber.tag !== FunctionComponent && fiber.tag !== ForwardRef && fiber.tag !== SimpleMemoComponent) {
                  return;
                }
              }
              if (ReactCurrentActQueue$1.current === null) {
                var previousFiber = current;
                try {
                  setCurrentFiber(fiber);
                  error("An update to %s inside a test was not wrapped in act(...).\n\nWhen testing, code that causes React state updates should be wrapped into act(...):\n\nact(() => {\n  /* fire events that update state */\n});\n/* assert on the output */\n\nThis ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act", getComponentNameFromFiber(fiber));
                } finally {
                  if (previousFiber) {
                    setCurrentFiber(fiber);
                  } else {
                    resetCurrentFiber();
                  }
                }
              }
            }
          }
          function warnIfSuspenseResolutionNotWrappedWithActDEV(root) {
            {
              if (root.tag !== LegacyRoot && isConcurrentActEnvironment() && ReactCurrentActQueue$1.current === null) {
                error("A suspended resource finished loading inside a test, but the event was not wrapped in act(...).\n\nWhen testing, code that resolves suspended data should be wrapped into act(...):\n\nact(() => {\n  /* finish loading suspended data */\n});\n/* assert on the output */\n\nThis ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act");
              }
            }
          }
          function setIsRunningInsertionEffect(isRunning) {
            {
              isRunningInsertionEffect = isRunning;
            }
          }
          var resolveFamily = null;
          var failedBoundaries = null;
          var setRefreshHandler = function(handler) {
            {
              resolveFamily = handler;
            }
          };
          function resolveFunctionForHotReloading(type) {
            {
              if (resolveFamily === null) {
                return type;
              }
              var family = resolveFamily(type);
              if (family === void 0) {
                return type;
              }
              return family.current;
            }
          }
          function resolveClassForHotReloading(type) {
            return resolveFunctionForHotReloading(type);
          }
          function resolveForwardRefForHotReloading(type) {
            {
              if (resolveFamily === null) {
                return type;
              }
              var family = resolveFamily(type);
              if (family === void 0) {
                if (type !== null && type !== void 0 && typeof type.render === "function") {
                  var currentRender = resolveFunctionForHotReloading(type.render);
                  if (type.render !== currentRender) {
                    var syntheticType = {
                      $$typeof: REACT_FORWARD_REF_TYPE,
                      render: currentRender
                    };
                    if (type.displayName !== void 0) {
                      syntheticType.displayName = type.displayName;
                    }
                    return syntheticType;
                  }
                }
                return type;
              }
              return family.current;
            }
          }
          function isCompatibleFamilyForHotReloading(fiber, element) {
            {
              if (resolveFamily === null) {
                return false;
              }
              var prevType = fiber.elementType;
              var nextType = element.type;
              var needsCompareFamilies = false;
              var $$typeofNextType = typeof nextType === "object" && nextType !== null ? nextType.$$typeof : null;
              switch (fiber.tag) {
                case ClassComponent: {
                  if (typeof nextType === "function") {
                    needsCompareFamilies = true;
                  }
                  break;
                }
                case FunctionComponent: {
                  if (typeof nextType === "function") {
                    needsCompareFamilies = true;
                  } else if ($$typeofNextType === REACT_LAZY_TYPE) {
                    needsCompareFamilies = true;
                  }
                  break;
                }
                case ForwardRef: {
                  if ($$typeofNextType === REACT_FORWARD_REF_TYPE) {
                    needsCompareFamilies = true;
                  } else if ($$typeofNextType === REACT_LAZY_TYPE) {
                    needsCompareFamilies = true;
                  }
                  break;
                }
                case MemoComponent:
                case SimpleMemoComponent: {
                  if ($$typeofNextType === REACT_MEMO_TYPE) {
                    needsCompareFamilies = true;
                  } else if ($$typeofNextType === REACT_LAZY_TYPE) {
                    needsCompareFamilies = true;
                  }
                  break;
                }
                default:
                  return false;
              }
              if (needsCompareFamilies) {
                var prevFamily = resolveFamily(prevType);
                if (prevFamily !== void 0 && prevFamily === resolveFamily(nextType)) {
                  return true;
                }
              }
              return false;
            }
          }
          function markFailedErrorBoundaryForHotReloading(fiber) {
            {
              if (resolveFamily === null) {
                return;
              }
              if (typeof WeakSet !== "function") {
                return;
              }
              if (failedBoundaries === null) {
                failedBoundaries = /* @__PURE__ */ new WeakSet();
              }
              failedBoundaries.add(fiber);
            }
          }
          var scheduleRefresh = function(root, update) {
            {
              if (resolveFamily === null) {
                return;
              }
              var staleFamilies = update.staleFamilies, updatedFamilies = update.updatedFamilies;
              flushPassiveEffects();
              flushSync(function() {
                scheduleFibersWithFamiliesRecursively(root.current, updatedFamilies, staleFamilies);
              });
            }
          };
          var scheduleRoot = function(root, element) {
            {
              if (root.context !== emptyContextObject) {
                return;
              }
              flushPassiveEffects();
              flushSync(function() {
                updateContainer(element, root, null, null);
              });
            }
          };
          function scheduleFibersWithFamiliesRecursively(fiber, updatedFamilies, staleFamilies) {
            {
              var alternate = fiber.alternate, child = fiber.child, sibling = fiber.sibling, tag = fiber.tag, type = fiber.type;
              var candidateType = null;
              switch (tag) {
                case FunctionComponent:
                case SimpleMemoComponent:
                case ClassComponent:
                  candidateType = type;
                  break;
                case ForwardRef:
                  candidateType = type.render;
                  break;
              }
              if (resolveFamily === null) {
                throw new Error("Expected resolveFamily to be set during hot reload.");
              }
              var needsRender = false;
              var needsRemount = false;
              if (candidateType !== null) {
                var family = resolveFamily(candidateType);
                if (family !== void 0) {
                  if (staleFamilies.has(family)) {
                    needsRemount = true;
                  } else if (updatedFamilies.has(family)) {
                    if (tag === ClassComponent) {
                      needsRemount = true;
                    } else {
                      needsRender = true;
                    }
                  }
                }
              }
              if (failedBoundaries !== null) {
                if (failedBoundaries.has(fiber) || alternate !== null && failedBoundaries.has(alternate)) {
                  needsRemount = true;
                }
              }
              if (needsRemount) {
                fiber._debugNeedsRemount = true;
              }
              if (needsRemount || needsRender) {
                var _root = enqueueConcurrentRenderForLane(fiber, SyncLane);
                if (_root !== null) {
                  scheduleUpdateOnFiber(_root, fiber, SyncLane, NoTimestamp);
                }
              }
              if (child !== null && !needsRemount) {
                scheduleFibersWithFamiliesRecursively(child, updatedFamilies, staleFamilies);
              }
              if (sibling !== null) {
                scheduleFibersWithFamiliesRecursively(sibling, updatedFamilies, staleFamilies);
              }
            }
          }
          var findHostInstancesForRefresh = function(root, families) {
            {
              var hostInstances = /* @__PURE__ */ new Set();
              var types = new Set(families.map(function(family) {
                return family.current;
              }));
              findHostInstancesForMatchingFibersRecursively(root.current, types, hostInstances);
              return hostInstances;
            }
          };
          function findHostInstancesForMatchingFibersRecursively(fiber, types, hostInstances) {
            {
              var child = fiber.child, sibling = fiber.sibling, tag = fiber.tag, type = fiber.type;
              var candidateType = null;
              switch (tag) {
                case FunctionComponent:
                case SimpleMemoComponent:
                case ClassComponent:
                  candidateType = type;
                  break;
                case ForwardRef:
                  candidateType = type.render;
                  break;
              }
              var didMatch = false;
              if (candidateType !== null) {
                if (types.has(candidateType)) {
                  didMatch = true;
                }
              }
              if (didMatch) {
                findHostInstancesForFiberShallowly(fiber, hostInstances);
              } else {
                if (child !== null) {
                  findHostInstancesForMatchingFibersRecursively(child, types, hostInstances);
                }
              }
              if (sibling !== null) {
                findHostInstancesForMatchingFibersRecursively(sibling, types, hostInstances);
              }
            }
          }
          function findHostInstancesForFiberShallowly(fiber, hostInstances) {
            {
              var foundHostInstances = findChildHostInstancesForFiberShallowly(fiber, hostInstances);
              if (foundHostInstances) {
                return;
              }
              var node = fiber;
              while (true) {
                switch (node.tag) {
                  case HostComponent:
                    hostInstances.add(node.stateNode);
                    return;
                  case HostPortal:
                    hostInstances.add(node.stateNode.containerInfo);
                    return;
                  case HostRoot:
                    hostInstances.add(node.stateNode.containerInfo);
                    return;
                }
                if (node.return === null) {
                  throw new Error("Expected to reach root first.");
                }
                node = node.return;
              }
            }
          }
          function findChildHostInstancesForFiberShallowly(fiber, hostInstances) {
            {
              var node = fiber;
              var foundHostInstances = false;
              while (true) {
                if (node.tag === HostComponent) {
                  foundHostInstances = true;
                  hostInstances.add(node.stateNode);
                } else if (node.child !== null) {
                  node.child.return = node;
                  node = node.child;
                  continue;
                }
                if (node === fiber) {
                  return foundHostInstances;
                }
                while (node.sibling === null) {
                  if (node.return === null || node.return === fiber) {
                    return foundHostInstances;
                  }
                  node = node.return;
                }
                node.sibling.return = node.return;
                node = node.sibling;
              }
            }
            return false;
          }
          var hasBadMapPolyfill;
          {
            hasBadMapPolyfill = false;
            try {
              var nonExtensibleObject = Object.preventExtensions({});
              /* @__PURE__ */ new Map([[nonExtensibleObject, null]]);
              /* @__PURE__ */ new Set([nonExtensibleObject]);
            } catch (e) {
              hasBadMapPolyfill = true;
            }
          }
          function FiberNode(tag, pendingProps, key, mode) {
            this.tag = tag;
            this.key = key;
            this.elementType = null;
            this.type = null;
            this.stateNode = null;
            this.return = null;
            this.child = null;
            this.sibling = null;
            this.index = 0;
            this.ref = null;
            this.pendingProps = pendingProps;
            this.memoizedProps = null;
            this.updateQueue = null;
            this.memoizedState = null;
            this.dependencies = null;
            this.mode = mode;
            this.flags = NoFlags;
            this.subtreeFlags = NoFlags;
            this.deletions = null;
            this.lanes = NoLanes;
            this.childLanes = NoLanes;
            this.alternate = null;
            {
              this.actualDuration = Number.NaN;
              this.actualStartTime = Number.NaN;
              this.selfBaseDuration = Number.NaN;
              this.treeBaseDuration = Number.NaN;
              this.actualDuration = 0;
              this.actualStartTime = -1;
              this.selfBaseDuration = 0;
              this.treeBaseDuration = 0;
            }
            {
              this._debugSource = null;
              this._debugOwner = null;
              this._debugNeedsRemount = false;
              this._debugHookTypes = null;
              if (!hasBadMapPolyfill && typeof Object.preventExtensions === "function") {
                Object.preventExtensions(this);
              }
            }
          }
          var createFiber = function(tag, pendingProps, key, mode) {
            return new FiberNode(tag, pendingProps, key, mode);
          };
          function shouldConstruct$1(Component) {
            var prototype = Component.prototype;
            return !!(prototype && prototype.isReactComponent);
          }
          function isSimpleFunctionComponent(type) {
            return typeof type === "function" && !shouldConstruct$1(type) && type.defaultProps === void 0;
          }
          function resolveLazyComponentTag(Component) {
            if (typeof Component === "function") {
              return shouldConstruct$1(Component) ? ClassComponent : FunctionComponent;
            } else if (Component !== void 0 && Component !== null) {
              var $$typeof = Component.$$typeof;
              if ($$typeof === REACT_FORWARD_REF_TYPE) {
                return ForwardRef;
              }
              if ($$typeof === REACT_MEMO_TYPE) {
                return MemoComponent;
              }
            }
            return IndeterminateComponent;
          }
          function createWorkInProgress(current2, pendingProps) {
            var workInProgress2 = current2.alternate;
            if (workInProgress2 === null) {
              workInProgress2 = createFiber(current2.tag, pendingProps, current2.key, current2.mode);
              workInProgress2.elementType = current2.elementType;
              workInProgress2.type = current2.type;
              workInProgress2.stateNode = current2.stateNode;
              {
                workInProgress2._debugSource = current2._debugSource;
                workInProgress2._debugOwner = current2._debugOwner;
                workInProgress2._debugHookTypes = current2._debugHookTypes;
              }
              workInProgress2.alternate = current2;
              current2.alternate = workInProgress2;
            } else {
              workInProgress2.pendingProps = pendingProps;
              workInProgress2.type = current2.type;
              workInProgress2.flags = NoFlags;
              workInProgress2.subtreeFlags = NoFlags;
              workInProgress2.deletions = null;
              {
                workInProgress2.actualDuration = 0;
                workInProgress2.actualStartTime = -1;
              }
            }
            workInProgress2.flags = current2.flags & StaticMask;
            workInProgress2.childLanes = current2.childLanes;
            workInProgress2.lanes = current2.lanes;
            workInProgress2.child = current2.child;
            workInProgress2.memoizedProps = current2.memoizedProps;
            workInProgress2.memoizedState = current2.memoizedState;
            workInProgress2.updateQueue = current2.updateQueue;
            var currentDependencies = current2.dependencies;
            workInProgress2.dependencies = currentDependencies === null ? null : {
              lanes: currentDependencies.lanes,
              firstContext: currentDependencies.firstContext
            };
            workInProgress2.sibling = current2.sibling;
            workInProgress2.index = current2.index;
            workInProgress2.ref = current2.ref;
            {
              workInProgress2.selfBaseDuration = current2.selfBaseDuration;
              workInProgress2.treeBaseDuration = current2.treeBaseDuration;
            }
            {
              workInProgress2._debugNeedsRemount = current2._debugNeedsRemount;
              switch (workInProgress2.tag) {
                case IndeterminateComponent:
                case FunctionComponent:
                case SimpleMemoComponent:
                  workInProgress2.type = resolveFunctionForHotReloading(current2.type);
                  break;
                case ClassComponent:
                  workInProgress2.type = resolveClassForHotReloading(current2.type);
                  break;
                case ForwardRef:
                  workInProgress2.type = resolveForwardRefForHotReloading(current2.type);
                  break;
              }
            }
            return workInProgress2;
          }
          function resetWorkInProgress(workInProgress2, renderLanes2) {
            workInProgress2.flags &= StaticMask | Placement;
            var current2 = workInProgress2.alternate;
            if (current2 === null) {
              workInProgress2.childLanes = NoLanes;
              workInProgress2.lanes = renderLanes2;
              workInProgress2.child = null;
              workInProgress2.subtreeFlags = NoFlags;
              workInProgress2.memoizedProps = null;
              workInProgress2.memoizedState = null;
              workInProgress2.updateQueue = null;
              workInProgress2.dependencies = null;
              workInProgress2.stateNode = null;
              {
                workInProgress2.selfBaseDuration = 0;
                workInProgress2.treeBaseDuration = 0;
              }
            } else {
              workInProgress2.childLanes = current2.childLanes;
              workInProgress2.lanes = current2.lanes;
              workInProgress2.child = current2.child;
              workInProgress2.subtreeFlags = NoFlags;
              workInProgress2.deletions = null;
              workInProgress2.memoizedProps = current2.memoizedProps;
              workInProgress2.memoizedState = current2.memoizedState;
              workInProgress2.updateQueue = current2.updateQueue;
              workInProgress2.type = current2.type;
              var currentDependencies = current2.dependencies;
              workInProgress2.dependencies = currentDependencies === null ? null : {
                lanes: currentDependencies.lanes,
                firstContext: currentDependencies.firstContext
              };
              {
                workInProgress2.selfBaseDuration = current2.selfBaseDuration;
                workInProgress2.treeBaseDuration = current2.treeBaseDuration;
              }
            }
            return workInProgress2;
          }
          function createHostRootFiber(tag, isStrictMode, concurrentUpdatesByDefaultOverride) {
            var mode;
            if (tag === ConcurrentRoot) {
              mode = ConcurrentMode;
              if (isStrictMode === true) {
                mode |= StrictLegacyMode;
                {
                  mode |= StrictEffectsMode;
                }
              }
            } else {
              mode = NoMode;
            }
            if (isDevToolsPresent) {
              mode |= ProfileMode;
            }
            return createFiber(HostRoot, null, null, mode);
          }
          function createFiberFromTypeAndProps(type, key, pendingProps, owner, mode, lanes) {
            var fiberTag = IndeterminateComponent;
            var resolvedType = type;
            if (typeof type === "function") {
              if (shouldConstruct$1(type)) {
                fiberTag = ClassComponent;
                {
                  resolvedType = resolveClassForHotReloading(resolvedType);
                }
              } else {
                {
                  resolvedType = resolveFunctionForHotReloading(resolvedType);
                }
              }
            } else if (typeof type === "string") {
              fiberTag = HostComponent;
            } else {
              getTag:
                switch (type) {
                  case REACT_FRAGMENT_TYPE:
                    return createFiberFromFragment(pendingProps.children, mode, lanes, key);
                  case REACT_STRICT_MODE_TYPE:
                    fiberTag = Mode;
                    mode |= StrictLegacyMode;
                    if ((mode & ConcurrentMode) !== NoMode) {
                      mode |= StrictEffectsMode;
                    }
                    break;
                  case REACT_PROFILER_TYPE:
                    return createFiberFromProfiler(pendingProps, mode, lanes, key);
                  case REACT_SUSPENSE_TYPE:
                    return createFiberFromSuspense(pendingProps, mode, lanes, key);
                  case REACT_SUSPENSE_LIST_TYPE:
                    return createFiberFromSuspenseList(pendingProps, mode, lanes, key);
                  case REACT_OFFSCREEN_TYPE:
                    return createFiberFromOffscreen(pendingProps, mode, lanes, key);
                  case REACT_LEGACY_HIDDEN_TYPE:
                  case REACT_SCOPE_TYPE:
                  case REACT_CACHE_TYPE:
                  case REACT_TRACING_MARKER_TYPE:
                  case REACT_DEBUG_TRACING_MODE_TYPE:
                  default: {
                    if (typeof type === "object" && type !== null) {
                      switch (type.$$typeof) {
                        case REACT_PROVIDER_TYPE:
                          fiberTag = ContextProvider;
                          break getTag;
                        case REACT_CONTEXT_TYPE:
                          fiberTag = ContextConsumer;
                          break getTag;
                        case REACT_FORWARD_REF_TYPE:
                          fiberTag = ForwardRef;
                          {
                            resolvedType = resolveForwardRefForHotReloading(resolvedType);
                          }
                          break getTag;
                        case REACT_MEMO_TYPE:
                          fiberTag = MemoComponent;
                          break getTag;
                        case REACT_LAZY_TYPE:
                          fiberTag = LazyComponent;
                          resolvedType = null;
                          break getTag;
                      }
                    }
                    var info = "";
                    {
                      if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
                        info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
                      }
                      var ownerName = owner ? getComponentNameFromFiber(owner) : null;
                      if (ownerName) {
                        info += "\n\nCheck the render method of `" + ownerName + "`.";
                      }
                    }
                    throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (type == null ? type : typeof type) + "." + info));
                  }
                }
            }
            var fiber = createFiber(fiberTag, pendingProps, key, mode);
            fiber.elementType = type;
            fiber.type = resolvedType;
            fiber.lanes = lanes;
            {
              fiber._debugOwner = owner;
            }
            return fiber;
          }
          function createFiberFromElement(element, mode, lanes) {
            var owner = null;
            {
              owner = element._owner;
            }
            var type = element.type;
            var key = element.key;
            var pendingProps = element.props;
            var fiber = createFiberFromTypeAndProps(type, key, pendingProps, owner, mode, lanes);
            {
              fiber._debugSource = element._source;
              fiber._debugOwner = element._owner;
            }
            return fiber;
          }
          function createFiberFromFragment(elements, mode, lanes, key) {
            var fiber = createFiber(Fragment, elements, key, mode);
            fiber.lanes = lanes;
            return fiber;
          }
          function createFiberFromProfiler(pendingProps, mode, lanes, key) {
            {
              if (typeof pendingProps.id !== "string") {
                error('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof pendingProps.id);
              }
            }
            var fiber = createFiber(Profiler, pendingProps, key, mode | ProfileMode);
            fiber.elementType = REACT_PROFILER_TYPE;
            fiber.lanes = lanes;
            {
              fiber.stateNode = {
                effectDuration: 0,
                passiveEffectDuration: 0
              };
            }
            return fiber;
          }
          function createFiberFromSuspense(pendingProps, mode, lanes, key) {
            var fiber = createFiber(SuspenseComponent, pendingProps, key, mode);
            fiber.elementType = REACT_SUSPENSE_TYPE;
            fiber.lanes = lanes;
            return fiber;
          }
          function createFiberFromSuspenseList(pendingProps, mode, lanes, key) {
            var fiber = createFiber(SuspenseListComponent, pendingProps, key, mode);
            fiber.elementType = REACT_SUSPENSE_LIST_TYPE;
            fiber.lanes = lanes;
            return fiber;
          }
          function createFiberFromOffscreen(pendingProps, mode, lanes, key) {
            var fiber = createFiber(OffscreenComponent, pendingProps, key, mode);
            fiber.elementType = REACT_OFFSCREEN_TYPE;
            fiber.lanes = lanes;
            var primaryChildInstance = {
              isHidden: false
            };
            fiber.stateNode = primaryChildInstance;
            return fiber;
          }
          function createFiberFromText(content, mode, lanes) {
            var fiber = createFiber(HostText, content, null, mode);
            fiber.lanes = lanes;
            return fiber;
          }
          function createFiberFromHostInstanceForDeletion() {
            var fiber = createFiber(HostComponent, null, null, NoMode);
            fiber.elementType = "DELETED";
            return fiber;
          }
          function createFiberFromDehydratedFragment(dehydratedNode) {
            var fiber = createFiber(DehydratedFragment, null, null, NoMode);
            fiber.stateNode = dehydratedNode;
            return fiber;
          }
          function createFiberFromPortal(portal, mode, lanes) {
            var pendingProps = portal.children !== null ? portal.children : [];
            var fiber = createFiber(HostPortal, pendingProps, portal.key, mode);
            fiber.lanes = lanes;
            fiber.stateNode = {
              containerInfo: portal.containerInfo,
              pendingChildren: null,
              // Used by persistent updates
              implementation: portal.implementation
            };
            return fiber;
          }
          function assignFiberPropertiesInDEV(target, source) {
            if (target === null) {
              target = createFiber(IndeterminateComponent, null, null, NoMode);
            }
            target.tag = source.tag;
            target.key = source.key;
            target.elementType = source.elementType;
            target.type = source.type;
            target.stateNode = source.stateNode;
            target.return = source.return;
            target.child = source.child;
            target.sibling = source.sibling;
            target.index = source.index;
            target.ref = source.ref;
            target.pendingProps = source.pendingProps;
            target.memoizedProps = source.memoizedProps;
            target.updateQueue = source.updateQueue;
            target.memoizedState = source.memoizedState;
            target.dependencies = source.dependencies;
            target.mode = source.mode;
            target.flags = source.flags;
            target.subtreeFlags = source.subtreeFlags;
            target.deletions = source.deletions;
            target.lanes = source.lanes;
            target.childLanes = source.childLanes;
            target.alternate = source.alternate;
            {
              target.actualDuration = source.actualDuration;
              target.actualStartTime = source.actualStartTime;
              target.selfBaseDuration = source.selfBaseDuration;
              target.treeBaseDuration = source.treeBaseDuration;
            }
            target._debugSource = source._debugSource;
            target._debugOwner = source._debugOwner;
            target._debugNeedsRemount = source._debugNeedsRemount;
            target._debugHookTypes = source._debugHookTypes;
            return target;
          }
          function FiberRootNode(containerInfo, tag, hydrate, identifierPrefix, onRecoverableError) {
            this.tag = tag;
            this.containerInfo = containerInfo;
            this.pendingChildren = null;
            this.current = null;
            this.pingCache = null;
            this.finishedWork = null;
            this.timeoutHandle = noTimeout;
            this.context = null;
            this.pendingContext = null;
            this.callbackNode = null;
            this.callbackPriority = NoLane;
            this.eventTimes = createLaneMap(NoLanes);
            this.expirationTimes = createLaneMap(NoTimestamp);
            this.pendingLanes = NoLanes;
            this.suspendedLanes = NoLanes;
            this.pingedLanes = NoLanes;
            this.expiredLanes = NoLanes;
            this.mutableReadLanes = NoLanes;
            this.finishedLanes = NoLanes;
            this.entangledLanes = NoLanes;
            this.entanglements = createLaneMap(NoLanes);
            this.identifierPrefix = identifierPrefix;
            this.onRecoverableError = onRecoverableError;
            if (supportsHydration) {
              this.mutableSourceEagerHydrationData = null;
            }
            {
              this.effectDuration = 0;
              this.passiveEffectDuration = 0;
            }
            {
              this.memoizedUpdaters = /* @__PURE__ */ new Set();
              var pendingUpdatersLaneMap = this.pendingUpdatersLaneMap = [];
              for (var _i = 0; _i < TotalLanes; _i++) {
                pendingUpdatersLaneMap.push(/* @__PURE__ */ new Set());
              }
            }
            {
              switch (tag) {
                case ConcurrentRoot:
                  this._debugRootType = hydrate ? "hydrateRoot()" : "createRoot()";
                  break;
                case LegacyRoot:
                  this._debugRootType = hydrate ? "hydrate()" : "render()";
                  break;
              }
            }
          }
          function createFiberRoot(containerInfo, tag, hydrate, initialChildren, hydrationCallbacks, isStrictMode, concurrentUpdatesByDefaultOverride, identifierPrefix, onRecoverableError, transitionCallbacks) {
            var root = new FiberRootNode(containerInfo, tag, hydrate, identifierPrefix, onRecoverableError);
            var uninitializedFiber = createHostRootFiber(tag, isStrictMode);
            root.current = uninitializedFiber;
            uninitializedFiber.stateNode = root;
            {
              var _initialState = {
                element: initialChildren,
                isDehydrated: hydrate,
                cache: null,
                // not enabled yet
                transitions: null,
                pendingSuspenseBoundaries: null
              };
              uninitializedFiber.memoizedState = _initialState;
            }
            initializeUpdateQueue(uninitializedFiber);
            return root;
          }
          var ReactVersion = "18.2.0";
          function createPortal(children, containerInfo, implementation) {
            var key = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
            {
              checkKeyStringCoercion(key);
            }
            return {
              // This tag allow us to uniquely identify this as a React Portal
              $$typeof: REACT_PORTAL_TYPE,
              key: key == null ? null : "" + key,
              children,
              containerInfo,
              implementation
            };
          }
          var didWarnAboutNestedUpdates;
          var didWarnAboutFindNodeInStrictMode;
          {
            didWarnAboutNestedUpdates = false;
            didWarnAboutFindNodeInStrictMode = {};
          }
          function getContextForSubtree(parentComponent) {
            if (!parentComponent) {
              return emptyContextObject;
            }
            var fiber = get(parentComponent);
            var parentContext = findCurrentUnmaskedContext(fiber);
            if (fiber.tag === ClassComponent) {
              var Component = fiber.type;
              if (isContextProvider(Component)) {
                return processChildContext(fiber, Component, parentContext);
              }
            }
            return parentContext;
          }
          function findHostInstance(component) {
            var fiber = get(component);
            if (fiber === void 0) {
              if (typeof component.render === "function") {
                throw new Error("Unable to find node on an unmounted component.");
              } else {
                var keys = Object.keys(component).join(",");
                throw new Error("Argument appears to not be a ReactComponent. Keys: " + keys);
              }
            }
            var hostFiber = findCurrentHostFiber(fiber);
            if (hostFiber === null) {
              return null;
            }
            return hostFiber.stateNode;
          }
          function findHostInstanceWithWarning(component, methodName) {
            {
              var fiber = get(component);
              if (fiber === void 0) {
                if (typeof component.render === "function") {
                  throw new Error("Unable to find node on an unmounted component.");
                } else {
                  var keys = Object.keys(component).join(",");
                  throw new Error("Argument appears to not be a ReactComponent. Keys: " + keys);
                }
              }
              var hostFiber = findCurrentHostFiber(fiber);
              if (hostFiber === null) {
                return null;
              }
              if (hostFiber.mode & StrictLegacyMode) {
                var componentName = getComponentNameFromFiber(fiber) || "Component";
                if (!didWarnAboutFindNodeInStrictMode[componentName]) {
                  didWarnAboutFindNodeInStrictMode[componentName] = true;
                  var previousFiber = current;
                  try {
                    setCurrentFiber(hostFiber);
                    if (fiber.mode & StrictLegacyMode) {
                      error("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", methodName, methodName, componentName);
                    } else {
                      error("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", methodName, methodName, componentName);
                    }
                  } finally {
                    if (previousFiber) {
                      setCurrentFiber(previousFiber);
                    } else {
                      resetCurrentFiber();
                    }
                  }
                }
              }
              return hostFiber.stateNode;
            }
          }
          function createContainer(containerInfo, tag, hydrationCallbacks, isStrictMode, concurrentUpdatesByDefaultOverride, identifierPrefix, onRecoverableError, transitionCallbacks) {
            var hydrate = false;
            var initialChildren = null;
            return createFiberRoot(containerInfo, tag, hydrate, initialChildren, hydrationCallbacks, isStrictMode, concurrentUpdatesByDefaultOverride, identifierPrefix, onRecoverableError);
          }
          function createHydrationContainer(initialChildren, callback, containerInfo, tag, hydrationCallbacks, isStrictMode, concurrentUpdatesByDefaultOverride, identifierPrefix, onRecoverableError, transitionCallbacks) {
            var hydrate = true;
            var root = createFiberRoot(containerInfo, tag, hydrate, initialChildren, hydrationCallbacks, isStrictMode, concurrentUpdatesByDefaultOverride, identifierPrefix, onRecoverableError);
            root.context = getContextForSubtree(null);
            var current2 = root.current;
            var eventTime = requestEventTime();
            var lane = requestUpdateLane(current2);
            var update = createUpdate(eventTime, lane);
            update.callback = callback !== void 0 && callback !== null ? callback : null;
            enqueueUpdate(current2, update, lane);
            scheduleInitialHydrationOnRoot(root, lane, eventTime);
            return root;
          }
          function updateContainer(element, container, parentComponent, callback) {
            {
              onScheduleRoot(container, element);
            }
            var current$1 = container.current;
            var eventTime = requestEventTime();
            var lane = requestUpdateLane(current$1);
            {
              markRenderScheduled(lane);
            }
            var context = getContextForSubtree(parentComponent);
            if (container.context === null) {
              container.context = context;
            } else {
              container.pendingContext = context;
            }
            {
              if (isRendering && current !== null && !didWarnAboutNestedUpdates) {
                didWarnAboutNestedUpdates = true;
                error("Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.\n\nCheck the render method of %s.", getComponentNameFromFiber(current) || "Unknown");
              }
            }
            var update = createUpdate(eventTime, lane);
            update.payload = {
              element
            };
            callback = callback === void 0 ? null : callback;
            if (callback !== null) {
              {
                if (typeof callback !== "function") {
                  error("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", callback);
                }
              }
              update.callback = callback;
            }
            var root = enqueueUpdate(current$1, update, lane);
            if (root !== null) {
              scheduleUpdateOnFiber(root, current$1, lane, eventTime);
              entangleTransitions(root, current$1, lane);
            }
            return lane;
          }
          function getPublicRootInstance(container) {
            var containerFiber = container.current;
            if (!containerFiber.child) {
              return null;
            }
            switch (containerFiber.child.tag) {
              case HostComponent:
                return getPublicInstance(containerFiber.child.stateNode);
              default:
                return containerFiber.child.stateNode;
            }
          }
          function attemptSynchronousHydration(fiber) {
            switch (fiber.tag) {
              case HostRoot: {
                var root = fiber.stateNode;
                if (isRootDehydrated(root)) {
                  var lanes = getHighestPriorityPendingLanes(root);
                  flushRoot(root, lanes);
                }
                break;
              }
              case SuspenseComponent: {
                flushSync(function() {
                  var root2 = enqueueConcurrentRenderForLane(fiber, SyncLane);
                  if (root2 !== null) {
                    var eventTime = requestEventTime();
                    scheduleUpdateOnFiber(root2, fiber, SyncLane, eventTime);
                  }
                });
                var retryLane = SyncLane;
                markRetryLaneIfNotHydrated(fiber, retryLane);
                break;
              }
            }
          }
          function markRetryLaneImpl(fiber, retryLane) {
            var suspenseState = fiber.memoizedState;
            if (suspenseState !== null && suspenseState.dehydrated !== null) {
              suspenseState.retryLane = higherPriorityLane(suspenseState.retryLane, retryLane);
            }
          }
          function markRetryLaneIfNotHydrated(fiber, retryLane) {
            markRetryLaneImpl(fiber, retryLane);
            var alternate = fiber.alternate;
            if (alternate) {
              markRetryLaneImpl(alternate, retryLane);
            }
          }
          function attemptDiscreteHydration(fiber) {
            if (fiber.tag !== SuspenseComponent) {
              return;
            }
            var lane = SyncLane;
            var root = enqueueConcurrentRenderForLane(fiber, lane);
            if (root !== null) {
              var eventTime = requestEventTime();
              scheduleUpdateOnFiber(root, fiber, lane, eventTime);
            }
            markRetryLaneIfNotHydrated(fiber, lane);
          }
          function attemptContinuousHydration(fiber) {
            if (fiber.tag !== SuspenseComponent) {
              return;
            }
            var lane = SelectiveHydrationLane;
            var root = enqueueConcurrentRenderForLane(fiber, lane);
            if (root !== null) {
              var eventTime = requestEventTime();
              scheduleUpdateOnFiber(root, fiber, lane, eventTime);
            }
            markRetryLaneIfNotHydrated(fiber, lane);
          }
          function attemptHydrationAtCurrentPriority(fiber) {
            if (fiber.tag !== SuspenseComponent) {
              return;
            }
            var lane = requestUpdateLane(fiber);
            var root = enqueueConcurrentRenderForLane(fiber, lane);
            if (root !== null) {
              var eventTime = requestEventTime();
              scheduleUpdateOnFiber(root, fiber, lane, eventTime);
            }
            markRetryLaneIfNotHydrated(fiber, lane);
          }
          function findHostInstanceWithNoPortals(fiber) {
            var hostFiber = findCurrentHostFiberWithNoPortals(fiber);
            if (hostFiber === null) {
              return null;
            }
            return hostFiber.stateNode;
          }
          var shouldErrorImpl = function(fiber) {
            return null;
          };
          function shouldError(fiber) {
            return shouldErrorImpl(fiber);
          }
          var shouldSuspendImpl = function(fiber) {
            return false;
          };
          function shouldSuspend(fiber) {
            return shouldSuspendImpl(fiber);
          }
          var overrideHookState = null;
          var overrideHookStateDeletePath = null;
          var overrideHookStateRenamePath = null;
          var overrideProps = null;
          var overridePropsDeletePath = null;
          var overridePropsRenamePath = null;
          var scheduleUpdate = null;
          var setErrorHandler = null;
          var setSuspenseHandler = null;
          {
            var copyWithDeleteImpl = function(obj, path, index2) {
              var key = path[index2];
              var updated = isArray(obj) ? obj.slice() : assign({}, obj);
              if (index2 + 1 === path.length) {
                if (isArray(updated)) {
                  updated.splice(key, 1);
                } else {
                  delete updated[key];
                }
                return updated;
              }
              updated[key] = copyWithDeleteImpl(obj[key], path, index2 + 1);
              return updated;
            };
            var copyWithDelete = function(obj, path) {
              return copyWithDeleteImpl(obj, path, 0);
            };
            var copyWithRenameImpl = function(obj, oldPath, newPath, index2) {
              var oldKey = oldPath[index2];
              var updated = isArray(obj) ? obj.slice() : assign({}, obj);
              if (index2 + 1 === oldPath.length) {
                var newKey = newPath[index2];
                updated[newKey] = updated[oldKey];
                if (isArray(updated)) {
                  updated.splice(oldKey, 1);
                } else {
                  delete updated[oldKey];
                }
              } else {
                updated[oldKey] = copyWithRenameImpl(
                  // $FlowFixMe number or string is fine here
                  obj[oldKey],
                  oldPath,
                  newPath,
                  index2 + 1
                );
              }
              return updated;
            };
            var copyWithRename = function(obj, oldPath, newPath) {
              if (oldPath.length !== newPath.length) {
                warn("copyWithRename() expects paths of the same length");
                return;
              } else {
                for (var i = 0; i < newPath.length - 1; i++) {
                  if (oldPath[i] !== newPath[i]) {
                    warn("copyWithRename() expects paths to be the same except for the deepest key");
                    return;
                  }
                }
              }
              return copyWithRenameImpl(obj, oldPath, newPath, 0);
            };
            var copyWithSetImpl = function(obj, path, index2, value) {
              if (index2 >= path.length) {
                return value;
              }
              var key = path[index2];
              var updated = isArray(obj) ? obj.slice() : assign({}, obj);
              updated[key] = copyWithSetImpl(obj[key], path, index2 + 1, value);
              return updated;
            };
            var copyWithSet = function(obj, path, value) {
              return copyWithSetImpl(obj, path, 0, value);
            };
            var findHook = function(fiber, id) {
              var currentHook2 = fiber.memoizedState;
              while (currentHook2 !== null && id > 0) {
                currentHook2 = currentHook2.next;
                id--;
              }
              return currentHook2;
            };
            overrideHookState = function(fiber, id, path, value) {
              var hook = findHook(fiber, id);
              if (hook !== null) {
                var newState = copyWithSet(hook.memoizedState, path, value);
                hook.memoizedState = newState;
                hook.baseState = newState;
                fiber.memoizedProps = assign({}, fiber.memoizedProps);
                var root = enqueueConcurrentRenderForLane(fiber, SyncLane);
                if (root !== null) {
                  scheduleUpdateOnFiber(root, fiber, SyncLane, NoTimestamp);
                }
              }
            };
            overrideHookStateDeletePath = function(fiber, id, path) {
              var hook = findHook(fiber, id);
              if (hook !== null) {
                var newState = copyWithDelete(hook.memoizedState, path);
                hook.memoizedState = newState;
                hook.baseState = newState;
                fiber.memoizedProps = assign({}, fiber.memoizedProps);
                var root = enqueueConcurrentRenderForLane(fiber, SyncLane);
                if (root !== null) {
                  scheduleUpdateOnFiber(root, fiber, SyncLane, NoTimestamp);
                }
              }
            };
            overrideHookStateRenamePath = function(fiber, id, oldPath, newPath) {
              var hook = findHook(fiber, id);
              if (hook !== null) {
                var newState = copyWithRename(hook.memoizedState, oldPath, newPath);
                hook.memoizedState = newState;
                hook.baseState = newState;
                fiber.memoizedProps = assign({}, fiber.memoizedProps);
                var root = enqueueConcurrentRenderForLane(fiber, SyncLane);
                if (root !== null) {
                  scheduleUpdateOnFiber(root, fiber, SyncLane, NoTimestamp);
                }
              }
            };
            overrideProps = function(fiber, path, value) {
              fiber.pendingProps = copyWithSet(fiber.memoizedProps, path, value);
              if (fiber.alternate) {
                fiber.alternate.pendingProps = fiber.pendingProps;
              }
              var root = enqueueConcurrentRenderForLane(fiber, SyncLane);
              if (root !== null) {
                scheduleUpdateOnFiber(root, fiber, SyncLane, NoTimestamp);
              }
            };
            overridePropsDeletePath = function(fiber, path) {
              fiber.pendingProps = copyWithDelete(fiber.memoizedProps, path);
              if (fiber.alternate) {
                fiber.alternate.pendingProps = fiber.pendingProps;
              }
              var root = enqueueConcurrentRenderForLane(fiber, SyncLane);
              if (root !== null) {
                scheduleUpdateOnFiber(root, fiber, SyncLane, NoTimestamp);
              }
            };
            overridePropsRenamePath = function(fiber, oldPath, newPath) {
              fiber.pendingProps = copyWithRename(fiber.memoizedProps, oldPath, newPath);
              if (fiber.alternate) {
                fiber.alternate.pendingProps = fiber.pendingProps;
              }
              var root = enqueueConcurrentRenderForLane(fiber, SyncLane);
              if (root !== null) {
                scheduleUpdateOnFiber(root, fiber, SyncLane, NoTimestamp);
              }
            };
            scheduleUpdate = function(fiber) {
              var root = enqueueConcurrentRenderForLane(fiber, SyncLane);
              if (root !== null) {
                scheduleUpdateOnFiber(root, fiber, SyncLane, NoTimestamp);
              }
            };
            setErrorHandler = function(newShouldErrorImpl) {
              shouldErrorImpl = newShouldErrorImpl;
            };
            setSuspenseHandler = function(newShouldSuspendImpl) {
              shouldSuspendImpl = newShouldSuspendImpl;
            };
          }
          function findHostInstanceByFiber(fiber) {
            var hostFiber = findCurrentHostFiber(fiber);
            if (hostFiber === null) {
              return null;
            }
            return hostFiber.stateNode;
          }
          function emptyFindFiberByHostInstance(instance) {
            return null;
          }
          function getCurrentFiberForDevTools() {
            return current;
          }
          function injectIntoDevTools(devToolsConfig) {
            var findFiberByHostInstance = devToolsConfig.findFiberByHostInstance;
            var ReactCurrentDispatcher2 = ReactSharedInternals.ReactCurrentDispatcher;
            return injectInternals({
              bundleType: devToolsConfig.bundleType,
              version: devToolsConfig.version,
              rendererPackageName: devToolsConfig.rendererPackageName,
              rendererConfig: devToolsConfig.rendererConfig,
              overrideHookState,
              overrideHookStateDeletePath,
              overrideHookStateRenamePath,
              overrideProps,
              overridePropsDeletePath,
              overridePropsRenamePath,
              setErrorHandler,
              setSuspenseHandler,
              scheduleUpdate,
              currentDispatcherRef: ReactCurrentDispatcher2,
              findHostInstanceByFiber,
              findFiberByHostInstance: findFiberByHostInstance || emptyFindFiberByHostInstance,
              // React Refresh
              findHostInstancesForRefresh,
              scheduleRefresh,
              scheduleRoot,
              setRefreshHandler,
              // Enables DevTools to append owner stacks to error messages in DEV mode.
              getCurrentFiber: getCurrentFiberForDevTools,
              // Enables DevTools to detect reconciler version rather than renderer version
              // which may not match for third party renderers.
              reconcilerVersion: ReactVersion
            });
          }
          exports2.attemptContinuousHydration = attemptContinuousHydration;
          exports2.attemptDiscreteHydration = attemptDiscreteHydration;
          exports2.attemptHydrationAtCurrentPriority = attemptHydrationAtCurrentPriority;
          exports2.attemptSynchronousHydration = attemptSynchronousHydration;
          exports2.batchedUpdates = batchedUpdates;
          exports2.createComponentSelector = createComponentSelector;
          exports2.createContainer = createContainer;
          exports2.createHasPseudoClassSelector = createHasPseudoClassSelector;
          exports2.createHydrationContainer = createHydrationContainer;
          exports2.createPortal = createPortal;
          exports2.createRoleSelector = createRoleSelector;
          exports2.createTestNameSelector = createTestNameSelector;
          exports2.createTextSelector = createTextSelector;
          exports2.deferredUpdates = deferredUpdates;
          exports2.discreteUpdates = discreteUpdates;
          exports2.findAllNodes = findAllNodes;
          exports2.findBoundingRects = findBoundingRects;
          exports2.findHostInstance = findHostInstance;
          exports2.findHostInstanceWithNoPortals = findHostInstanceWithNoPortals;
          exports2.findHostInstanceWithWarning = findHostInstanceWithWarning;
          exports2.flushControlled = flushControlled;
          exports2.flushPassiveEffects = flushPassiveEffects;
          exports2.flushSync = flushSync;
          exports2.focusWithin = focusWithin;
          exports2.getCurrentUpdatePriority = getCurrentUpdatePriority;
          exports2.getFindAllNodesFailureDescription = getFindAllNodesFailureDescription;
          exports2.getPublicRootInstance = getPublicRootInstance;
          exports2.injectIntoDevTools = injectIntoDevTools;
          exports2.isAlreadyRendering = isAlreadyRendering;
          exports2.observeVisibleRects = observeVisibleRects;
          exports2.registerMutableSourceForHydration = registerMutableSourceForHydration;
          exports2.runWithPriority = runWithPriority;
          exports2.shouldError = shouldError;
          exports2.shouldSuspend = shouldSuspend;
          exports2.updateContainer = updateContainer;
          return exports2;
        };
      }
    }
  });

  // node_modules/react-reconciler/index.js
  var require_react_reconciler = __commonJS({
    "node_modules/react-reconciler/index.js"(exports, module) {
      "use strict";
      if (false) {
        module.exports = null;
      } else {
        module.exports = require_react_reconciler_development();
      }
    }
  });

  // node_modules/react/cjs/react-jsx-runtime.development.js
  var require_react_jsx_runtime_development = __commonJS({
    "node_modules/react/cjs/react-jsx-runtime.development.js"(exports) {
      "use strict";
      if (true) {
        (function() {
          "use strict";
          var React = require_react();
          var REACT_ELEMENT_TYPE = Symbol.for("react.element");
          var REACT_PORTAL_TYPE = Symbol.for("react.portal");
          var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
          var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
          var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
          var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
          var REACT_CONTEXT_TYPE = Symbol.for("react.context");
          var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
          var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
          var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
          var REACT_MEMO_TYPE = Symbol.for("react.memo");
          var REACT_LAZY_TYPE = Symbol.for("react.lazy");
          var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
          var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
          var FAUX_ITERATOR_SYMBOL = "@@iterator";
          function getIteratorFn(maybeIterable) {
            if (maybeIterable === null || typeof maybeIterable !== "object") {
              return null;
            }
            var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
            if (typeof maybeIterator === "function") {
              return maybeIterator;
            }
            return null;
          }
          var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
          function error(format) {
            {
              {
                for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                  args[_key2 - 1] = arguments[_key2];
                }
                printWarning("error", format, args);
              }
            }
          }
          function printWarning(level, format, args) {
            {
              var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
              var stack = ReactDebugCurrentFrame2.getStackAddendum();
              if (stack !== "") {
                format += "%s";
                args = args.concat([stack]);
              }
              var argsWithFormat = args.map(function(item) {
                return String(item);
              });
              argsWithFormat.unshift("Warning: " + format);
              Function.prototype.apply.call(console[level], console, argsWithFormat);
            }
          }
          var enableScopeAPI = false;
          var enableCacheElement = false;
          var enableTransitionTracing = false;
          var enableLegacyHidden = false;
          var enableDebugTracing = false;
          var REACT_MODULE_REFERENCE;
          {
            REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
          }
          function isValidElementType(type) {
            if (typeof type === "string" || typeof type === "function") {
              return true;
            }
            if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
              return true;
            }
            if (typeof type === "object" && type !== null) {
              if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
              // types supported by any Flight configuration anywhere since
              // we don't know which Flight build this will end up being used
              // with.
              type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
                return true;
              }
            }
            return false;
          }
          function getWrappedName(outerType, innerType, wrapperName) {
            var displayName = outerType.displayName;
            if (displayName) {
              return displayName;
            }
            var functionName = innerType.displayName || innerType.name || "";
            return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
          }
          function getContextName(type) {
            return type.displayName || "Context";
          }
          function getComponentNameFromType(type) {
            if (type == null) {
              return null;
            }
            {
              if (typeof type.tag === "number") {
                error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
              }
            }
            if (typeof type === "function") {
              return type.displayName || type.name || null;
            }
            if (typeof type === "string") {
              return type;
            }
            switch (type) {
              case REACT_FRAGMENT_TYPE:
                return "Fragment";
              case REACT_PORTAL_TYPE:
                return "Portal";
              case REACT_PROFILER_TYPE:
                return "Profiler";
              case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
              case REACT_SUSPENSE_TYPE:
                return "Suspense";
              case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            }
            if (typeof type === "object") {
              switch (type.$$typeof) {
                case REACT_CONTEXT_TYPE:
                  var context = type;
                  return getContextName(context) + ".Consumer";
                case REACT_PROVIDER_TYPE:
                  var provider = type;
                  return getContextName(provider._context) + ".Provider";
                case REACT_FORWARD_REF_TYPE:
                  return getWrappedName(type, type.render, "ForwardRef");
                case REACT_MEMO_TYPE:
                  var outerName = type.displayName || null;
                  if (outerName !== null) {
                    return outerName;
                  }
                  return getComponentNameFromType(type.type) || "Memo";
                case REACT_LAZY_TYPE: {
                  var lazyComponent = type;
                  var payload = lazyComponent._payload;
                  var init = lazyComponent._init;
                  try {
                    return getComponentNameFromType(init(payload));
                  } catch (x) {
                    return null;
                  }
                }
              }
            }
            return null;
          }
          var assign = Object.assign;
          var disabledDepth = 0;
          var prevLog;
          var prevInfo;
          var prevWarn;
          var prevError;
          var prevGroup;
          var prevGroupCollapsed;
          var prevGroupEnd;
          function disabledLog() {
          }
          disabledLog.__reactDisabledLog = true;
          function disableLogs() {
            {
              if (disabledDepth === 0) {
                prevLog = console.log;
                prevInfo = console.info;
                prevWarn = console.warn;
                prevError = console.error;
                prevGroup = console.group;
                prevGroupCollapsed = console.groupCollapsed;
                prevGroupEnd = console.groupEnd;
                var props = {
                  configurable: true,
                  enumerable: true,
                  value: disabledLog,
                  writable: true
                };
                Object.defineProperties(console, {
                  info: props,
                  log: props,
                  warn: props,
                  error: props,
                  group: props,
                  groupCollapsed: props,
                  groupEnd: props
                });
              }
              disabledDepth++;
            }
          }
          function reenableLogs() {
            {
              disabledDepth--;
              if (disabledDepth === 0) {
                var props = {
                  configurable: true,
                  enumerable: true,
                  writable: true
                };
                Object.defineProperties(console, {
                  log: assign({}, props, {
                    value: prevLog
                  }),
                  info: assign({}, props, {
                    value: prevInfo
                  }),
                  warn: assign({}, props, {
                    value: prevWarn
                  }),
                  error: assign({}, props, {
                    value: prevError
                  }),
                  group: assign({}, props, {
                    value: prevGroup
                  }),
                  groupCollapsed: assign({}, props, {
                    value: prevGroupCollapsed
                  }),
                  groupEnd: assign({}, props, {
                    value: prevGroupEnd
                  })
                });
              }
              if (disabledDepth < 0) {
                error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
              }
            }
          }
          var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
          var prefix;
          function describeBuiltInComponentFrame(name, source, ownerFn) {
            {
              if (prefix === void 0) {
                try {
                  throw Error();
                } catch (x) {
                  var match = x.stack.trim().match(/\n( *(at )?)/);
                  prefix = match && match[1] || "";
                }
              }
              return "\n" + prefix + name;
            }
          }
          var reentry = false;
          var componentFrameCache;
          {
            var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
            componentFrameCache = new PossiblyWeakMap();
          }
          function describeNativeComponentFrame(fn, construct) {
            if (!fn || reentry) {
              return "";
            }
            {
              var frame = componentFrameCache.get(fn);
              if (frame !== void 0) {
                return frame;
              }
            }
            var control;
            reentry = true;
            var previousPrepareStackTrace = Error.prepareStackTrace;
            Error.prepareStackTrace = void 0;
            var previousDispatcher;
            {
              previousDispatcher = ReactCurrentDispatcher.current;
              ReactCurrentDispatcher.current = null;
              disableLogs();
            }
            try {
              if (construct) {
                var Fake = function() {
                  throw Error();
                };
                Object.defineProperty(Fake.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                });
                if (typeof Reflect === "object" && Reflect.construct) {
                  try {
                    Reflect.construct(Fake, []);
                  } catch (x) {
                    control = x;
                  }
                  Reflect.construct(fn, [], Fake);
                } else {
                  try {
                    Fake.call();
                  } catch (x) {
                    control = x;
                  }
                  fn.call(Fake.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (x) {
                  control = x;
                }
                fn();
              }
            } catch (sample) {
              if (sample && control && typeof sample.stack === "string") {
                var sampleLines = sample.stack.split("\n");
                var controlLines = control.stack.split("\n");
                var s = sampleLines.length - 1;
                var c = controlLines.length - 1;
                while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
                  c--;
                }
                for (; s >= 1 && c >= 0; s--, c--) {
                  if (sampleLines[s] !== controlLines[c]) {
                    if (s !== 1 || c !== 1) {
                      do {
                        s--;
                        c--;
                        if (c < 0 || sampleLines[s] !== controlLines[c]) {
                          var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
                          if (fn.displayName && _frame.includes("<anonymous>")) {
                            _frame = _frame.replace("<anonymous>", fn.displayName);
                          }
                          {
                            if (typeof fn === "function") {
                              componentFrameCache.set(fn, _frame);
                            }
                          }
                          return _frame;
                        }
                      } while (s >= 1 && c >= 0);
                    }
                    break;
                  }
                }
              }
            } finally {
              reentry = false;
              {
                ReactCurrentDispatcher.current = previousDispatcher;
                reenableLogs();
              }
              Error.prepareStackTrace = previousPrepareStackTrace;
            }
            var name = fn ? fn.displayName || fn.name : "";
            var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
            {
              if (typeof fn === "function") {
                componentFrameCache.set(fn, syntheticFrame);
              }
            }
            return syntheticFrame;
          }
          function describeFunctionComponentFrame(fn, source, ownerFn) {
            {
              return describeNativeComponentFrame(fn, false);
            }
          }
          function shouldConstruct(Component) {
            var prototype = Component.prototype;
            return !!(prototype && prototype.isReactComponent);
          }
          function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
            if (type == null) {
              return "";
            }
            if (typeof type === "function") {
              {
                return describeNativeComponentFrame(type, shouldConstruct(type));
              }
            }
            if (typeof type === "string") {
              return describeBuiltInComponentFrame(type);
            }
            switch (type) {
              case REACT_SUSPENSE_TYPE:
                return describeBuiltInComponentFrame("Suspense");
              case REACT_SUSPENSE_LIST_TYPE:
                return describeBuiltInComponentFrame("SuspenseList");
            }
            if (typeof type === "object") {
              switch (type.$$typeof) {
                case REACT_FORWARD_REF_TYPE:
                  return describeFunctionComponentFrame(type.render);
                case REACT_MEMO_TYPE:
                  return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
                case REACT_LAZY_TYPE: {
                  var lazyComponent = type;
                  var payload = lazyComponent._payload;
                  var init = lazyComponent._init;
                  try {
                    return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                  } catch (x) {
                  }
                }
              }
            }
            return "";
          }
          var hasOwnProperty2 = Object.prototype.hasOwnProperty;
          var loggedTypeFailures = {};
          var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
          function setCurrentlyValidatingElement(element) {
            {
              if (element) {
                var owner = element._owner;
                var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
                ReactDebugCurrentFrame.setExtraStackFrame(stack);
              } else {
                ReactDebugCurrentFrame.setExtraStackFrame(null);
              }
            }
          }
          function checkPropTypes(typeSpecs, values, location, componentName, element) {
            {
              var has2 = Function.call.bind(hasOwnProperty2);
              for (var typeSpecName in typeSpecs) {
                if (has2(typeSpecs, typeSpecName)) {
                  var error$1 = void 0;
                  try {
                    if (typeof typeSpecs[typeSpecName] !== "function") {
                      var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                      err.name = "Invariant Violation";
                      throw err;
                    }
                    error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                  } catch (ex) {
                    error$1 = ex;
                  }
                  if (error$1 && !(error$1 instanceof Error)) {
                    setCurrentlyValidatingElement(element);
                    error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                    setCurrentlyValidatingElement(null);
                  }
                  if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                    loggedTypeFailures[error$1.message] = true;
                    setCurrentlyValidatingElement(element);
                    error("Failed %s type: %s", location, error$1.message);
                    setCurrentlyValidatingElement(null);
                  }
                }
              }
            }
          }
          var isArrayImpl = Array.isArray;
          function isArray(a) {
            return isArrayImpl(a);
          }
          function typeName(value) {
            {
              var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
              var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
              return type;
            }
          }
          function willCoercionThrow(value) {
            {
              try {
                testStringCoercion(value);
                return false;
              } catch (e) {
                return true;
              }
            }
          }
          function testStringCoercion(value) {
            return "" + value;
          }
          function checkKeyStringCoercion(value) {
            {
              if (willCoercionThrow(value)) {
                error("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
                return testStringCoercion(value);
              }
            }
          }
          var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
          var RESERVED_PROPS = {
            key: true,
            ref: true,
            __self: true,
            __source: true
          };
          var specialPropKeyWarningShown;
          var specialPropRefWarningShown;
          var didWarnAboutStringRefs;
          {
            didWarnAboutStringRefs = {};
          }
          function hasValidRef(config) {
            {
              if (hasOwnProperty2.call(config, "ref")) {
                var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
                if (getter && getter.isReactWarning) {
                  return false;
                }
              }
            }
            return config.ref !== void 0;
          }
          function hasValidKey(config) {
            {
              if (hasOwnProperty2.call(config, "key")) {
                var getter = Object.getOwnPropertyDescriptor(config, "key").get;
                if (getter && getter.isReactWarning) {
                  return false;
                }
              }
            }
            return config.key !== void 0;
          }
          function warnIfStringRefCannotBeAutoConverted(config, self) {
            {
              if (typeof config.ref === "string" && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
                var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
                if (!didWarnAboutStringRefs[componentName]) {
                  error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', getComponentNameFromType(ReactCurrentOwner.current.type), config.ref);
                  didWarnAboutStringRefs[componentName] = true;
                }
              }
            }
          }
          function defineKeyPropWarningGetter(props, displayName) {
            {
              var warnAboutAccessingKey = function() {
                if (!specialPropKeyWarningShown) {
                  specialPropKeyWarningShown = true;
                  error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
                }
              };
              warnAboutAccessingKey.isReactWarning = true;
              Object.defineProperty(props, "key", {
                get: warnAboutAccessingKey,
                configurable: true
              });
            }
          }
          function defineRefPropWarningGetter(props, displayName) {
            {
              var warnAboutAccessingRef = function() {
                if (!specialPropRefWarningShown) {
                  specialPropRefWarningShown = true;
                  error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
                }
              };
              warnAboutAccessingRef.isReactWarning = true;
              Object.defineProperty(props, "ref", {
                get: warnAboutAccessingRef,
                configurable: true
              });
            }
          }
          var ReactElement = function(type, key, ref, self, source, owner, props) {
            var element = {
              // This tag allows us to uniquely identify this as a React Element
              $$typeof: REACT_ELEMENT_TYPE,
              // Built-in properties that belong on the element
              type,
              key,
              ref,
              props,
              // Record the component responsible for creating this element.
              _owner: owner
            };
            {
              element._store = {};
              Object.defineProperty(element._store, "validated", {
                configurable: false,
                enumerable: false,
                writable: true,
                value: false
              });
              Object.defineProperty(element, "_self", {
                configurable: false,
                enumerable: false,
                writable: false,
                value: self
              });
              Object.defineProperty(element, "_source", {
                configurable: false,
                enumerable: false,
                writable: false,
                value: source
              });
              if (Object.freeze) {
                Object.freeze(element.props);
                Object.freeze(element);
              }
            }
            return element;
          };
          function jsxDEV(type, config, maybeKey, source, self) {
            {
              var propName;
              var props = {};
              var key = null;
              var ref = null;
              if (maybeKey !== void 0) {
                {
                  checkKeyStringCoercion(maybeKey);
                }
                key = "" + maybeKey;
              }
              if (hasValidKey(config)) {
                {
                  checkKeyStringCoercion(config.key);
                }
                key = "" + config.key;
              }
              if (hasValidRef(config)) {
                ref = config.ref;
                warnIfStringRefCannotBeAutoConverted(config, self);
              }
              for (propName in config) {
                if (hasOwnProperty2.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                  props[propName] = config[propName];
                }
              }
              if (type && type.defaultProps) {
                var defaultProps = type.defaultProps;
                for (propName in defaultProps) {
                  if (props[propName] === void 0) {
                    props[propName] = defaultProps[propName];
                  }
                }
              }
              if (key || ref) {
                var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
                if (key) {
                  defineKeyPropWarningGetter(props, displayName);
                }
                if (ref) {
                  defineRefPropWarningGetter(props, displayName);
                }
              }
              return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
            }
          }
          var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
          var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
          function setCurrentlyValidatingElement$1(element) {
            {
              if (element) {
                var owner = element._owner;
                var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
                ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
              } else {
                ReactDebugCurrentFrame$1.setExtraStackFrame(null);
              }
            }
          }
          var propTypesMisspellWarningShown;
          {
            propTypesMisspellWarningShown = false;
          }
          function isValidElement2(object) {
            {
              return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
            }
          }
          function getDeclarationErrorAddendum() {
            {
              if (ReactCurrentOwner$1.current) {
                var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);
                if (name) {
                  return "\n\nCheck the render method of `" + name + "`.";
                }
              }
              return "";
            }
          }
          function getSourceInfoErrorAddendum(source) {
            {
              if (source !== void 0) {
                var fileName = source.fileName.replace(/^.*[\\\/]/, "");
                var lineNumber = source.lineNumber;
                return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
              }
              return "";
            }
          }
          var ownerHasKeyUseWarning = {};
          function getCurrentComponentErrorInfo(parentType) {
            {
              var info = getDeclarationErrorAddendum();
              if (!info) {
                var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
                if (parentName) {
                  info = "\n\nCheck the top-level render call using <" + parentName + ">.";
                }
              }
              return info;
            }
          }
          function validateExplicitKey(element, parentType) {
            {
              if (!element._store || element._store.validated || element.key != null) {
                return;
              }
              element._store.validated = true;
              var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
              if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
                return;
              }
              ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
              var childOwner = "";
              if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
                childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
              }
              setCurrentlyValidatingElement$1(element);
              error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
              setCurrentlyValidatingElement$1(null);
            }
          }
          function validateChildKeys(node, parentType) {
            {
              if (typeof node !== "object") {
                return;
              }
              if (isArray(node)) {
                for (var i = 0; i < node.length; i++) {
                  var child = node[i];
                  if (isValidElement2(child)) {
                    validateExplicitKey(child, parentType);
                  }
                }
              } else if (isValidElement2(node)) {
                if (node._store) {
                  node._store.validated = true;
                }
              } else if (node) {
                var iteratorFn = getIteratorFn(node);
                if (typeof iteratorFn === "function") {
                  if (iteratorFn !== node.entries) {
                    var iterator = iteratorFn.call(node);
                    var step;
                    while (!(step = iterator.next()).done) {
                      if (isValidElement2(step.value)) {
                        validateExplicitKey(step.value, parentType);
                      }
                    }
                  }
                }
              }
            }
          }
          function validatePropTypes(element) {
            {
              var type = element.type;
              if (type === null || type === void 0 || typeof type === "string") {
                return;
              }
              var propTypes;
              if (typeof type === "function") {
                propTypes = type.propTypes;
              } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
              // Inner props are checked in the reconciler.
              type.$$typeof === REACT_MEMO_TYPE)) {
                propTypes = type.propTypes;
              } else {
                return;
              }
              if (propTypes) {
                var name = getComponentNameFromType(type);
                checkPropTypes(propTypes, element.props, "prop", name, element);
              } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
                propTypesMisspellWarningShown = true;
                var _name = getComponentNameFromType(type);
                error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
              }
              if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
                error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
              }
            }
          }
          function validateFragmentProps(fragment) {
            {
              var keys = Object.keys(fragment.props);
              for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                if (key !== "children" && key !== "key") {
                  setCurrentlyValidatingElement$1(fragment);
                  error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                  setCurrentlyValidatingElement$1(null);
                  break;
                }
              }
              if (fragment.ref !== null) {
                setCurrentlyValidatingElement$1(fragment);
                error("Invalid attribute `ref` supplied to `React.Fragment`.");
                setCurrentlyValidatingElement$1(null);
              }
            }
          }
          var didWarnAboutKeySpread = {};
          function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
            {
              var validType = isValidElementType(type);
              if (!validType) {
                var info = "";
                if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
                  info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
                }
                var sourceInfo = getSourceInfoErrorAddendum(source);
                if (sourceInfo) {
                  info += sourceInfo;
                } else {
                  info += getDeclarationErrorAddendum();
                }
                var typeString;
                if (type === null) {
                  typeString = "null";
                } else if (isArray(type)) {
                  typeString = "array";
                } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
                  typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />";
                  info = " Did you accidentally export a JSX literal instead of a component?";
                } else {
                  typeString = typeof type;
                }
                error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
              }
              var element = jsxDEV(type, props, key, source, self);
              if (element == null) {
                return element;
              }
              if (validType) {
                var children = props.children;
                if (children !== void 0) {
                  if (isStaticChildren) {
                    if (isArray(children)) {
                      for (var i = 0; i < children.length; i++) {
                        validateChildKeys(children[i], type);
                      }
                      if (Object.freeze) {
                        Object.freeze(children);
                      }
                    } else {
                      error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
                    }
                  } else {
                    validateChildKeys(children, type);
                  }
                }
              }
              {
                if (hasOwnProperty2.call(props, "key")) {
                  var componentName = getComponentNameFromType(type);
                  var keys = Object.keys(props).filter(function(k) {
                    return k !== "key";
                  });
                  var beforeExample = keys.length > 0 ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
                  if (!didWarnAboutKeySpread[componentName + beforeExample]) {
                    var afterExample = keys.length > 0 ? "{" + keys.join(": ..., ") + ": ...}" : "{}";
                    error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', beforeExample, componentName, afterExample, componentName);
                    didWarnAboutKeySpread[componentName + beforeExample] = true;
                  }
                }
              }
              if (type === REACT_FRAGMENT_TYPE) {
                validateFragmentProps(element);
              } else {
                validatePropTypes(element);
              }
              return element;
            }
          }
          function jsxWithValidationStatic(type, props, key) {
            {
              return jsxWithValidation(type, props, key, true);
            }
          }
          function jsxWithValidationDynamic(type, props, key) {
            {
              return jsxWithValidation(type, props, key, false);
            }
          }
          var jsx5 = jsxWithValidationDynamic;
          var jsxs2 = jsxWithValidationStatic;
          exports.Fragment = REACT_FRAGMENT_TYPE;
          exports.jsx = jsx5;
          exports.jsxs = jsxs2;
        })();
      }
    }
  });

  // node_modules/react/jsx-runtime.js
  var require_jsx_runtime = __commonJS({
    "node_modules/react/jsx-runtime.js"(exports, module) {
      "use strict";
      if (false) {
        module.exports = null;
      } else {
        module.exports = require_react_jsx_runtime_development();
      }
    }
  });

  // node_modules/@remote-ui/rpc/build/esm/memory.mjs
  function isBasicObject(value) {
    if (value == null || typeof value !== "object")
      return false;
    const prototype = Object.getPrototypeOf(value);
    return prototype == null || prototype === Object.prototype;
  }

  // node_modules/@remote-ui/core/build/esm/component.mjs
  function createRemoteComponent(componentType) {
    return componentType;
  }

  // node_modules/@remote-ui/core/build/esm/types.mjs
  var ACTION_MOUNT = 0;
  var ACTION_INSERT_CHILD = 1;
  var ACTION_REMOVE_CHILD = 2;
  var ACTION_UPDATE_TEXT = 3;
  var ACTION_UPDATE_PROPS = 4;
  var KIND_ROOT = 0;
  var KIND_COMPONENT = 1;
  var KIND_TEXT = 2;
  var KIND_FRAGMENT = 3;

  // node_modules/@remote-ui/core/build/esm/utilities.mjs
  function isRemoteFragment(object) {
    return object != null && object.kind === KIND_FRAGMENT;
  }

  // node_modules/@remote-ui/core/build/esm/root.mjs
  var FUNCTION_CURRENT_IMPLEMENTATION_KEY = "__current";
  var EMPTY_OBJECT = {};
  var EMPTY_ARRAY = [];
  function createRemoteRoot(channel, {
    strict = true,
    components
  } = {}) {
    let currentId = 0;
    const rootInternals = {
      strict,
      mounted: false,
      channel,
      children: EMPTY_ARRAY,
      nodes: /* @__PURE__ */ new WeakSet(),
      parents: /* @__PURE__ */ new WeakMap(),
      tops: /* @__PURE__ */ new WeakMap(),
      components: /* @__PURE__ */ new WeakMap(),
      fragments: /* @__PURE__ */ new WeakMap()
    };
    if (strict)
      Object.freeze(components);
    const remoteRoot = {
      kind: KIND_ROOT,
      options: strict ? Object.freeze({
        strict,
        components
      }) : {
        strict,
        components
      },
      get children() {
        return rootInternals.children;
      },
      createComponent(type, ...rest) {
        if (components && components.indexOf(type) < 0) {
          throw new Error(`Unsupported component: ${type}`);
        }
        const [initialProps, initialChildren, ...moreChildren] = rest;
        const normalizedInitialProps = initialProps !== null && initialProps !== void 0 ? initialProps : {};
        const normalizedInitialChildren = [];
        const normalizedInternalProps = {};
        if (initialProps) {
          for (const key of Object.keys(initialProps)) {
            if (key === "children")
              continue;
            normalizedInternalProps[key] = makeValueHotSwappable(serializeProp(initialProps[key]));
          }
        }
        if (initialChildren) {
          if (Array.isArray(initialChildren)) {
            for (const child of initialChildren) {
              normalizedInitialChildren.push(normalizeChild(child, remoteRoot));
            }
          } else {
            normalizedInitialChildren.push(normalizeChild(initialChildren, remoteRoot));
            for (const child of moreChildren) {
              normalizedInitialChildren.push(normalizeChild(child, remoteRoot));
            }
          }
        }
        const id = `${currentId++}`;
        const internals = {
          externalProps: strict ? Object.freeze(normalizedInitialProps) : normalizedInitialProps,
          internalProps: normalizedInternalProps,
          children: strict ? Object.freeze(normalizedInitialChildren) : normalizedInitialChildren
        };
        const component = __spreadValues({
          kind: KIND_COMPONENT,
          get children() {
            return internals.children;
          },
          get props() {
            return internals.externalProps;
          },
          get remoteProps() {
            return internals.internalProps;
          },
          remove: () => remove(component),
          updateProps: (newProps) => updateProps(component, newProps, internals, rootInternals),
          append: (...children) => append(component, children.map((child) => normalizeChild(child, remoteRoot)), internals, rootInternals),
          appendChild: (child) => appendChild(component, normalizeChild(child, remoteRoot), internals, rootInternals),
          removeChild: (child) => removeChild(component, child, internals, rootInternals),
          replaceChildren: (...children) => replaceChildren(component, children.map((child) => normalizeChild(child, remoteRoot)), internals, rootInternals),
          insertBefore: (child, before) => insertBefore(component, normalizeChild(child, remoteRoot), before, internals, rootInternals),
          insertChildBefore: (child, before) => insertBefore(component, normalizeChild(child, remoteRoot), before, internals, rootInternals)
        }, EMPTY_OBJECT);
        rootInternals.components.set(component, internals);
        Object.defineProperty(component, "type", {
          value: type,
          configurable: false,
          writable: false,
          enumerable: true
        });
        makePartOfTree(component, rootInternals);
        makeRemote(component, id, remoteRoot);
        for (const child of internals.children) {
          moveNodeToContainer(component, child, rootInternals);
        }
        return component;
      },
      createText(content = "") {
        const id = `${currentId++}`;
        const internals = {
          text: content
        };
        const update = (newText) => updateText(text, newText, internals, rootInternals);
        const text = __spreadValues({
          kind: KIND_TEXT,
          get text() {
            return internals.text;
          },
          update,
          updateText: update,
          remove: () => remove(text)
        }, EMPTY_OBJECT);
        makePartOfTree(text, rootInternals);
        makeRemote(text, id, remoteRoot);
        return text;
      },
      createFragment() {
        const id = `${currentId++}`;
        const internals = {
          children: strict ? Object.freeze([]) : []
        };
        const fragment = __spreadValues({
          kind: KIND_FRAGMENT,
          get children() {
            return internals.children;
          },
          append: (...children) => append(fragment, children.map((child) => normalizeChild(child, remoteRoot)), internals, rootInternals),
          appendChild: (child) => appendChild(fragment, normalizeChild(child, remoteRoot), internals, rootInternals),
          removeChild: (child) => removeChild(fragment, child, internals, rootInternals),
          replaceChildren: (...children) => replaceChildren(fragment, children.map((child) => normalizeChild(child, remoteRoot)), internals, rootInternals),
          insertBefore: (child, before) => insertBefore(fragment, normalizeChild(child, remoteRoot), before, internals, rootInternals),
          insertChildBefore: (child, before) => insertBefore(fragment, normalizeChild(child, remoteRoot), before, internals, rootInternals)
        }, EMPTY_OBJECT);
        rootInternals.fragments.set(fragment, internals);
        makePartOfTree(fragment, rootInternals);
        makeRemote(fragment, id, remoteRoot);
        return fragment;
      },
      append: (...children) => append(remoteRoot, children.map((child) => normalizeChild(child, remoteRoot)), rootInternals, rootInternals),
      appendChild: (child) => appendChild(remoteRoot, normalizeChild(child, remoteRoot), rootInternals, rootInternals),
      replaceChildren: (...children) => replaceChildren(remoteRoot, children.map((child) => normalizeChild(child, remoteRoot)), rootInternals, rootInternals),
      removeChild: (child) => removeChild(remoteRoot, child, rootInternals, rootInternals),
      insertBefore: (child, before) => insertBefore(remoteRoot, normalizeChild(child, remoteRoot), before, rootInternals, rootInternals),
      insertChildBefore: (child, before) => insertBefore(remoteRoot, normalizeChild(child, remoteRoot), before, rootInternals, rootInternals),
      mount() {
        if (rootInternals.mounted)
          return Promise.resolve();
        rootInternals.mounted = true;
        return Promise.resolve(channel(ACTION_MOUNT, rootInternals.children.map(serializeChild)));
      }
    };
    return remoteRoot;
  }
  function connected(element, {
    tops
  }) {
    var _tops$get;
    return ((_tops$get = tops.get(element)) === null || _tops$get === void 0 ? void 0 : _tops$get.kind) === KIND_ROOT;
  }
  function allDescendants(element, withEach) {
    const recurse = (element2) => {
      if ("children" in element2) {
        for (const child of element2.children) {
          withEach(child);
          recurse(child);
        }
      }
    };
    recurse(element);
  }
  function perform(element, rootInternals, {
    remote,
    local
  }) {
    const {
      mounted,
      channel
    } = rootInternals;
    if (mounted && (element.kind === KIND_ROOT || connected(element, rootInternals))) {
      remote(channel);
    }
    local();
  }
  function updateText(text, newText, internals, rootInternals) {
    return perform(text, rootInternals, {
      remote: (channel) => channel(ACTION_UPDATE_TEXT, text.id, newText),
      local: () => {
        internals.text = newText;
      }
    });
  }
  var IGNORE = Symbol("ignore");
  function updateProps(component, newProps, internals, rootInternals) {
    const {
      strict
    } = rootInternals;
    const {
      internalProps: currentProps,
      externalProps: currentExternalProps
    } = internals;
    const normalizedNewProps = {};
    const hotSwapFunctions = [];
    let hasRemoteChange = false;
    for (const key of Object.keys(newProps)) {
      if (key === "children")
        continue;
      const currentExternalValue = currentExternalProps[key];
      const newExternalValue = newProps[key];
      const currentValue = currentProps[key];
      const newValue = serializeProp(newExternalValue);
      if (currentValue === newValue && (newValue == null || typeof newValue !== "object")) {
        continue;
      }
      const [value, hotSwaps] = tryHotSwappingValues(currentValue, newValue);
      if (hotSwaps) {
        hotSwapFunctions.push(...hotSwaps);
      }
      if (value === IGNORE)
        continue;
      hasRemoteChange = true;
      normalizedNewProps[key] = value;
      if (isRemoteFragment(currentExternalValue)) {
        removeNodeFromContainer(currentExternalValue, rootInternals);
      }
      if (isRemoteFragment(newExternalValue)) {
        moveNodeToContainer(component, newExternalValue, rootInternals);
      }
    }
    return perform(component, rootInternals, {
      remote: (channel) => {
        if (hasRemoteChange) {
          channel(ACTION_UPDATE_PROPS, component.id, normalizedNewProps);
        }
      },
      local: () => {
        const mergedExternalProps = __spreadValues(__spreadValues({}, currentExternalProps), newProps);
        internals.externalProps = strict ? Object.freeze(mergedExternalProps) : mergedExternalProps;
        internals.internalProps = __spreadValues(__spreadValues({}, internals.internalProps), normalizedNewProps);
        for (const [hotSwappable, newValue] of hotSwapFunctions) {
          hotSwappable[FUNCTION_CURRENT_IMPLEMENTATION_KEY] = newValue;
        }
      }
    });
  }
  function tryHotSwappingValues(currentValue, newValue, seen = /* @__PURE__ */ new Set()) {
    if (seen.has(currentValue)) {
      return [IGNORE];
    }
    seen.add(currentValue);
    if (typeof currentValue === "function" && FUNCTION_CURRENT_IMPLEMENTATION_KEY in currentValue) {
      const result2 = [typeof newValue === "function" ? IGNORE : makeValueHotSwappable(newValue), [[currentValue, newValue]]];
      return result2;
    }
    if (Array.isArray(currentValue)) {
      const result2 = tryHotSwappingArrayValues(currentValue, newValue, seen);
      return result2;
    }
    if (isBasicObject(currentValue) && !isRemoteFragment(currentValue)) {
      const result2 = tryHotSwappingObjectValues(currentValue, newValue, seen);
      return result2;
    }
    const result = [currentValue === newValue ? IGNORE : newValue];
    return result;
  }
  function makeValueHotSwappable(value, seen = /* @__PURE__ */ new Map()) {
    const seenValue = seen.get(value);
    if (seenValue)
      return seenValue;
    if (isRemoteFragment(value)) {
      seen.set(value, value);
      return value;
    }
    if (Array.isArray(value)) {
      const result = [];
      seen.set(value, result);
      for (const nested of value) {
        result.push(makeValueHotSwappable(nested, seen));
      }
      return result;
    }
    if (isBasicObject(value)) {
      const result = {};
      seen.set(value, result);
      for (const key of Object.keys(value)) {
        result[key] = makeValueHotSwappable(value[key], seen);
      }
      return result;
    }
    if (typeof value === "function") {
      const wrappedFunction = (...args) => {
        return wrappedFunction[FUNCTION_CURRENT_IMPLEMENTATION_KEY](...args);
      };
      Object.defineProperty(wrappedFunction, FUNCTION_CURRENT_IMPLEMENTATION_KEY, {
        enumerable: false,
        configurable: false,
        writable: true,
        value
      });
      seen.set(value, wrappedFunction);
      return wrappedFunction;
    }
    seen.set(value, value);
    return value;
  }
  function collectNestedHotSwappableValues(value, seen = /* @__PURE__ */ new Set()) {
    if (seen.has(value))
      return void 0;
    seen.add(value);
    if (Array.isArray(value)) {
      return value.reduce((all, element) => {
        const nested = collectNestedHotSwappableValues(element, seen);
        return nested ? [...all, ...nested] : all;
      }, []);
    }
    if (isBasicObject(value)) {
      return Object.keys(value).reduce((all, key) => {
        const nested = collectNestedHotSwappableValues(value[key], seen);
        return nested ? [...all, ...nested] : all;
      }, []);
    }
    if (typeof value === "function") {
      return FUNCTION_CURRENT_IMPLEMENTATION_KEY in value ? [value] : void 0;
    }
    return void 0;
  }
  function remove(child) {
    var _child$parent;
    (_child$parent = child.parent) === null || _child$parent === void 0 ? void 0 : _child$parent.removeChild(child);
  }
  function append(container, children, internals, rootInternals) {
    for (const child of children) {
      appendChild(container, child, internals, rootInternals);
    }
  }
  function appendChild(container, child, internals, rootInternals) {
    var _currentParent$childr;
    const {
      nodes,
      strict
    } = rootInternals;
    if (!nodes.has(child)) {
      throw new Error(`Cannot append a node that was not created by this remote root`);
    }
    const currentParent = child.parent;
    const existingIndex = (_currentParent$childr = currentParent === null || currentParent === void 0 ? void 0 : currentParent.children.indexOf(child)) !== null && _currentParent$childr !== void 0 ? _currentParent$childr : -1;
    return perform(container, rootInternals, {
      remote: (channel) => {
        channel(ACTION_INSERT_CHILD, container.id, existingIndex < 0 ? container.children.length : container.children.length - 1, serializeChild(child), currentParent ? currentParent.id : false);
      },
      local: () => {
        moveNodeToContainer(container, child, rootInternals);
        let newChildren;
        if (currentParent) {
          const currentInternals = getCurrentInternals(currentParent, rootInternals);
          const currentChildren = [...currentInternals.children];
          currentChildren.splice(existingIndex, 1);
          if (currentParent === container) {
            newChildren = currentChildren;
          } else {
            currentInternals.children = strict ? Object.freeze(currentChildren) : currentChildren;
            newChildren = [...internals.children];
          }
        } else {
          newChildren = [...internals.children];
        }
        newChildren.push(child);
        internals.children = strict ? Object.freeze(newChildren) : newChildren;
      }
    });
  }
  function replaceChildren(container, children, internals, rootInternals) {
    for (const child of container.children) {
      removeChild(container, child, internals, rootInternals);
    }
    append(container, children, internals, rootInternals);
  }
  function removeChild(container, child, internals, rootInternals) {
    const {
      strict
    } = rootInternals;
    return perform(container, rootInternals, {
      remote: (channel) => channel(ACTION_REMOVE_CHILD, container.id, container.children.indexOf(child)),
      local: () => {
        removeNodeFromContainer(child, rootInternals);
        const newChildren = [...internals.children];
        newChildren.splice(newChildren.indexOf(child), 1);
        internals.children = strict ? Object.freeze(newChildren) : newChildren;
      }
    });
  }
  function insertBefore(container, child, before, internals, rootInternals) {
    var _currentParent$childr2;
    const {
      strict,
      nodes
    } = rootInternals;
    if (!nodes.has(child)) {
      throw new Error(`Cannot insert a node that was not created by this remote root`);
    }
    const currentParent = child.parent;
    const existingIndex = (_currentParent$childr2 = currentParent === null || currentParent === void 0 ? void 0 : currentParent.children.indexOf(child)) !== null && _currentParent$childr2 !== void 0 ? _currentParent$childr2 : -1;
    return perform(container, rootInternals, {
      remote: (channel) => {
        const beforeIndex = before == null ? container.children.length - 1 : container.children.indexOf(before);
        channel(ACTION_INSERT_CHILD, container.id, beforeIndex < existingIndex || existingIndex < 0 ? beforeIndex : beforeIndex - 1, serializeChild(child), currentParent ? currentParent.id : false);
      },
      local: () => {
        moveNodeToContainer(container, child, rootInternals);
        let newChildren;
        if (currentParent) {
          const currentInternals = getCurrentInternals(currentParent, rootInternals);
          const currentChildren = [...currentInternals.children];
          currentChildren.splice(existingIndex, 1);
          if (currentParent === container) {
            newChildren = currentChildren;
          } else {
            currentInternals.children = strict ? Object.freeze(currentChildren) : currentChildren;
            newChildren = [...internals.children];
          }
        } else {
          newChildren = [...internals.children];
        }
        if (before == null) {
          newChildren.push(child);
        } else {
          newChildren.splice(newChildren.indexOf(before), 0, child);
        }
        internals.children = strict ? Object.freeze(newChildren) : newChildren;
      }
    });
  }
  function normalizeChild(child, root) {
    return typeof child === "string" ? root.createText(child) : child;
  }
  function moveNodeToContainer(container, node, rootInternals) {
    const {
      tops,
      parents
    } = rootInternals;
    const newTop = container.kind === KIND_ROOT ? container : tops.get(container);
    tops.set(node, newTop);
    parents.set(node, container);
    moveFragmentToContainer(node, rootInternals);
    allDescendants(node, (descendant) => {
      tops.set(descendant, newTop);
      moveFragmentToContainer(descendant, rootInternals);
    });
  }
  function moveFragmentToContainer(node, rootInternals) {
    if (node.kind !== KIND_COMPONENT)
      return;
    const props = node.props;
    if (!props)
      return;
    Object.values(props).forEach((prop) => {
      if (!isRemoteFragment(prop))
        return;
      moveNodeToContainer(node, prop, rootInternals);
    });
  }
  function removeNodeFromContainer(node, rootInternals) {
    const {
      tops,
      parents
    } = rootInternals;
    tops.delete(node);
    parents.delete(node);
    allDescendants(node, (descendant) => {
      tops.delete(descendant);
      removeFragmentFromContainer(descendant, rootInternals);
    });
    removeFragmentFromContainer(node, rootInternals);
  }
  function removeFragmentFromContainer(node, rootInternals) {
    if (node.kind !== KIND_COMPONENT)
      return;
    const props = node.remoteProps;
    for (const key of Object.keys(props !== null && props !== void 0 ? props : {})) {
      const prop = props[key];
      if (!isRemoteFragment(prop))
        continue;
      removeNodeFromContainer(prop, rootInternals);
    }
  }
  function makePartOfTree(node, {
    parents,
    tops,
    nodes
  }) {
    nodes.add(node);
    Object.defineProperty(node, "parent", {
      get() {
        return parents.get(node);
      },
      configurable: true,
      enumerable: true
    });
    Object.defineProperty(node, "top", {
      get() {
        return tops.get(node);
      },
      configurable: true,
      enumerable: true
    });
  }
  function serializeChild(value) {
    return value.kind === KIND_TEXT ? {
      id: value.id,
      kind: value.kind,
      text: value.text
    } : {
      id: value.id,
      kind: value.kind,
      type: value.type,
      props: value.remoteProps,
      children: value.children.map((child) => serializeChild(child))
    };
  }
  function serializeProp(prop) {
    if (isRemoteFragment(prop)) {
      return serializeFragment(prop);
    }
    return prop;
  }
  function serializeFragment(value) {
    return {
      id: value.id,
      kind: value.kind,
      get children() {
        return value.children.map((child) => serializeChild(child));
      }
    };
  }
  function getCurrentInternals(currentParent, rootInternals) {
    if (currentParent.kind === KIND_ROOT) {
      return rootInternals;
    }
    if (currentParent.kind === KIND_FRAGMENT) {
      return rootInternals.fragments.get(currentParent);
    }
    return rootInternals.components.get(currentParent);
  }
  function makeRemote(value, id, root) {
    Object.defineProperty(value, "id", {
      value: id,
      configurable: true,
      writable: false,
      enumerable: false
    });
    Object.defineProperty(value, "root", {
      value: root,
      configurable: true,
      writable: false,
      enumerable: false
    });
  }
  function tryHotSwappingObjectValues(currentValue, newValue, seen) {
    if (!isBasicObject(newValue)) {
      var _collectNestedHotSwap;
      return [makeValueHotSwappable(newValue), (_collectNestedHotSwap = collectNestedHotSwappableValues(currentValue)) === null || _collectNestedHotSwap === void 0 ? void 0 : _collectNestedHotSwap.map((hotSwappable) => [hotSwappable, void 0])];
    }
    let hasChanged = false;
    const hotSwaps = [];
    const normalizedNewValue = {};
    for (const key in currentValue) {
      const currentObjectValue = currentValue[key];
      if (!(key in newValue)) {
        hasChanged = true;
        const nestedHotSwappables = collectNestedHotSwappableValues(currentObjectValue);
        if (nestedHotSwappables) {
          hotSwaps.push(...nestedHotSwappables.map((hotSwappable) => [hotSwappable, void 0]));
        }
      }
      const newObjectValue = newValue[key];
      const [updatedValue, elementHotSwaps] = tryHotSwappingValues(currentObjectValue, newObjectValue, seen);
      if (elementHotSwaps) {
        hotSwaps.push(...elementHotSwaps);
      }
      if (updatedValue !== IGNORE) {
        hasChanged = true;
        normalizedNewValue[key] = updatedValue;
      }
    }
    for (const key in newValue) {
      if (key in normalizedNewValue)
        continue;
      hasChanged = true;
      normalizedNewValue[key] = makeValueHotSwappable(newValue[key]);
    }
    return [hasChanged ? normalizedNewValue : IGNORE, hotSwaps];
  }
  function tryHotSwappingArrayValues(currentValue, newValue, seen) {
    if (!Array.isArray(newValue)) {
      var _collectNestedHotSwap2;
      return [makeValueHotSwappable(newValue), (_collectNestedHotSwap2 = collectNestedHotSwappableValues(currentValue)) === null || _collectNestedHotSwap2 === void 0 ? void 0 : _collectNestedHotSwap2.map((hotSwappable) => [hotSwappable, void 0])];
    }
    let hasChanged = false;
    const hotSwaps = [];
    const newLength = newValue.length;
    const currentLength = currentValue.length;
    const maxLength = Math.max(currentLength, newLength);
    const normalizedNewValue = [];
    for (let i = 0; i < maxLength; i++) {
      const currentArrayValue = currentValue[i];
      const newArrayValue = newValue[i];
      if (i < newLength) {
        if (i >= currentLength) {
          hasChanged = true;
          normalizedNewValue[i] = makeValueHotSwappable(newArrayValue);
          continue;
        }
        const [updatedValue, elementHotSwaps] = tryHotSwappingValues(currentArrayValue, newArrayValue, seen);
        if (elementHotSwaps)
          hotSwaps.push(...elementHotSwaps);
        if (updatedValue === IGNORE) {
          normalizedNewValue[i] = currentArrayValue;
          continue;
        }
        hasChanged = true;
        normalizedNewValue[i] = updatedValue;
      } else {
        hasChanged = true;
        const nestedHotSwappables = collectNestedHotSwappableValues(currentArrayValue);
        if (nestedHotSwappables) {
          hotSwaps.push(...nestedHotSwappables.map((hotSwappable) => [hotSwappable, void 0]));
        }
      }
    }
    return [hasChanged ? normalizedNewValue : IGNORE, hotSwaps];
  }

  // node_modules/@shopify/ui-extensions/build/esm/utilities/registration.mjs
  function createExtensionRegistrationFunction() {
    const extensionWrapper = (target, implementation) => {
      var _shopify;
      function extension2(...args) {
        return __async(this, null, function* () {
          if (args.length === 1) {
            return implementation(...args);
          }
          const [{
            channel,
            components
          }, api] = args;
          const root = createRemoteRoot(channel, {
            components,
            strict: true
          });
          let renderResult = implementation(root, api);
          if (typeof renderResult === "object" && renderResult != null && "then" in renderResult) {
            renderResult = yield renderResult;
          }
          root.mount();
          return renderResult;
        });
      }
      (_shopify = globalThis.shopify) === null || _shopify === void 0 ? void 0 : _shopify.extend(target, extension2);
      return extension2;
    };
    return extensionWrapper;
  }

  // node_modules/@shopify/ui-extensions/build/esm/surfaces/admin/extension.mjs
  var extension = createExtensionRegistrationFunction();

  // node_modules/@shopify/ui-extensions/build/esm/surfaces/admin/components/AdminBlock/AdminBlock.mjs
  var AdminBlock = createRemoteComponent("AdminBlock");

  // node_modules/@shopify/ui-extensions/build/esm/surfaces/admin/components/BlockStack/BlockStack.mjs
  var BlockStack = createRemoteComponent("BlockStack");

  // node_modules/@shopify/ui-extensions/build/esm/surfaces/admin/components/Box/Box.mjs
  var Box = createRemoteComponent("Box");

  // node_modules/@shopify/ui-extensions/build/esm/surfaces/admin/components/Button/Button.mjs
  var Button = createRemoteComponent("Button");

  // node_modules/@shopify/ui-extensions/build/esm/surfaces/admin/components/Heading/Heading.mjs
  var Heading = createRemoteComponent("Heading");

  // node_modules/@shopify/ui-extensions/build/esm/surfaces/admin/components/InlineStack/InlineStack.mjs
  var InlineStack = createRemoteComponent("InlineStack");

  // node_modules/@shopify/ui-extensions/build/esm/surfaces/admin/components/NumberField/NumberField.mjs
  var NumberField = createRemoteComponent("NumberField");

  // node_modules/@shopify/ui-extensions/build/esm/surfaces/admin/components/Text/Text.mjs
  var Text = createRemoteComponent("Text");

  // node_modules/@remote-ui/react/build/esm/render.mjs
  var import_react2 = __toESM(require_react(), 1);

  // node_modules/@remote-ui/react/build/esm/reconciler.mjs
  var import_react_reconciler = __toESM(require_react_reconciler(), 1);
  var createReconciler = (options) => {
    var _options$primary;
    return (0, import_react_reconciler.default)({
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore - Compat for React <= 17.x
      now: Date.now,
      // Timeout
      scheduleTimeout: setTimeout,
      cancelTimeout: clearTimeout,
      noTimeout: false,
      // Microtask scheduling
      // @see https://github.com/facebook/react/blob/2c8a1452b82b9ec5ebfa3f370b31fda19610ae92/packages/react-dom/src/client/ReactDOMHostConfig.js#L391-L401
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore - types in `@types/react-reconciler` are outdated
      supportsMicrotasks: true,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore - types in `@types/react-reconciler` are outdated
      scheduleMicrotask,
      // Compat for React <= 17.x
      queueMicrotask: scheduleMicrotask,
      isPrimaryRenderer: (_options$primary = options === null || options === void 0 ? void 0 : options.primary) !== null && _options$primary !== void 0 ? _options$primary : true,
      supportsMutation: true,
      supportsHydration: false,
      supportsPersistence: false,
      // Context
      getRootHostContext() {
        return {};
      },
      getChildHostContext(context) {
        return context;
      },
      // Instances
      createTextInstance(text, root) {
        return root.createText(text);
      },
      createInstance(type, allProps, root) {
        const _a = allProps, {
          children: _children
        } = _a, props = __objRest(_a, [
          "children"
        ]);
        return root.createComponent(type, props);
      },
      // Updates
      commitTextUpdate(text, _oldText, newText) {
        text.update(newText);
      },
      prepareUpdate(_instance, _type, oldProps, newProps) {
        const updateProps2 = {};
        let needsUpdate = false;
        for (const key in oldProps) {
          if (!has(oldProps, key) || key === "children") {
            continue;
          }
          if (!(key in newProps)) {
            needsUpdate = true;
            updateProps2[key] = void 0;
          } else if (oldProps[key] !== newProps[key]) {
            needsUpdate = true;
            updateProps2[key] = newProps[key];
          }
        }
        for (const key in newProps) {
          if (!has(newProps, key) || key === "children") {
            continue;
          }
          if (!(key in oldProps)) {
            needsUpdate = true;
            updateProps2[key] = newProps[key];
          }
        }
        return needsUpdate ? updateProps2 : null;
      },
      commitUpdate(instance, payload) {
        instance.updateProps(payload);
      },
      // Update root
      appendChildToContainer(remoteRoot, child) {
        remoteRoot.append(child);
      },
      insertInContainerBefore(remoteRoot, child, beforeChild) {
        remoteRoot.insertBefore(child, beforeChild);
      },
      removeChildFromContainer(remoteRoot, child) {
        remoteRoot.removeChild(child);
      },
      clearContainer(remoteRoot) {
        for (const child of remoteRoot.children) {
          remoteRoot.removeChild(child);
        }
      },
      // Update children
      appendInitialChild(parent, child) {
        parent.append(child);
      },
      appendChild(parent, child) {
        parent.append(child);
      },
      insertBefore(parent, newChild, beforeChild) {
        parent.insertBefore(newChild, beforeChild);
      },
      removeChild(parent, child) {
        parent.removeChild(child);
      },
      // Unknown
      finalizeInitialChildren() {
        return false;
      },
      shouldSetTextContent() {
        return false;
      },
      getPublicInstance() {
      },
      prepareForCommit() {
        return null;
      },
      resetAfterCommit() {
      },
      commitMount() {
      },
      preparePortalMount() {
      },
      detachDeletedInstance() {
      }
    });
  };
  function scheduleMicrotask(callback) {
    return typeof queueMicrotask === "function" ? queueMicrotask : Promise.resolve(null).then(callback).catch(handleErrorInNextTick);
  }
  function handleErrorInNextTick(error) {
    setTimeout(() => {
      throw error;
    });
  }
  var {
    hasOwnProperty
  } = {};
  function has(object, property) {
    return hasOwnProperty.call(object, property);
  }

  // node_modules/@remote-ui/react/build/esm/context.mjs
  var import_react = __toESM(require_react(), 1);
  var RenderContext = /* @__PURE__ */ (0, import_react.createContext)(null);

  // node_modules/@remote-ui/react/build/esm/render.mjs
  var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
  var cache = /* @__PURE__ */ new WeakMap();
  var LEGACY_ROOT = 0;
  var defaultReconciler = createReconciler();
  function render(element, root, callback, reconciler = defaultReconciler) {
    let cached = cache.get(root);
    if (!cached) {
      var _version$split;
      const major = Number(((_version$split = import_react2.version.split(".")) === null || _version$split === void 0 ? void 0 : _version$split[0]) || 18);
      const value = {
        container: major >= 18 ? reconciler.createContainer(
          root,
          LEGACY_ROOT,
          null,
          false,
          null,
          // Might not be necessary
          "r-ui",
          () => null,
          null
        ) : (
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore - this is to support React 17
          reconciler.createContainer(root, LEGACY_ROOT, false, null)
        ),
        // We also cache the render context to avoid re-creating it on subsequent render calls
        renderContext: {
          root,
          reconciler
        }
      };
      cache.set(root, value);
      cached = value;
    }
    const {
      container,
      renderContext
    } = cached;
    reconciler.updateContainer(element && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RenderContext.Provider, {
      value: renderContext,
      children: element
    }), container, null, callback);
  }

  // node_modules/@remote-ui/react/build/esm/components.mjs
  var import_react4 = __toESM(require_react(), 1);
  var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);

  // node_modules/@remote-ui/react/build/esm/hooks/render.mjs
  var import_react3 = __toESM(require_react(), 1);
  function useRender() {
    const render2 = (0, import_react3.useContext)(RenderContext);
    if (render2 == null) {
      throw new Error("No remote-ui Render instance found in context");
    }
    return render2;
  }

  // node_modules/@remote-ui/react/build/esm/components.mjs
  function createRemoteReactComponent(componentType, {
    fragmentProps
  } = {}) {
    if (!fragmentProps || !fragmentProps.length) {
      return componentType;
    }
    const wrapper = createComponentWrapper(componentType, fragmentProps);
    wrapper.displayName = componentType;
    return wrapper;
  }
  function createComponentWrapper(componentType, fragmentProps) {
    const Component = componentType;
    return /* @__PURE__ */ (0, import_react4.memo)(function ComponentWrapper(_a) {
      var _b = _a, {
        children: externalChildren = []
      } = _b, externalProps = __objRest(_b, [
        "children"
      ]);
      const fragments = (0, import_react4.useRef)({});
      const {
        root,
        reconciler
      } = useRender();
      const {
        props,
        children
      } = (0, import_react4.useMemo)(() => {
        const portals = [];
        const props2 = {};
        for (const key of Object.keys(externalProps)) {
          const element = externalProps[key];
          if (fragmentProps.includes(key) && /* @__PURE__ */ (0, import_react4.isValidElement)(element)) {
            const currentFragment = fragments.current[key];
            const fragment = isRemoteFragment(currentFragment) ? currentFragment : root.createFragment();
            fragments.current[key] = fragment;
            Object.assign(fragment, {
              createText(...args) {
                return root.createText(...args);
              },
              createComponent(type, ...args) {
                return root.createComponent(type, ...args);
              }
            });
            const portal = reconciler.createPortal(element, fragment, null, null);
            portals.push(portal);
            props2[key] = fragment;
          } else {
            props2[key] = element;
            delete fragments.current[key];
          }
        }
        return {
          props: props2,
          children: [...import_react4.Children.toArray(externalChildren), ...portals]
        };
      }, [externalChildren, externalProps, root, reconciler, fragments]);
      return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Component, __spreadProps(__spreadValues({}, props), {
        children
      }));
    });
  }

  // node_modules/@shopify/ui-extensions-react/build/esm/surfaces/admin/context.mjs
  var import_react5 = __toESM(require_react(), 1);
  var ExtensionApiContext = /* @__PURE__ */ (0, import_react5.createContext)(null);

  // node_modules/@shopify/ui-extensions-react/build/esm/surfaces/admin/render.mjs
  var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
  function reactExtension(target, render$1) {
    return extension(target, (root, api) => __async(this, null, function* () {
      const element = yield render$1(api);
      yield new Promise((resolve, reject) => {
        try {
          render(/* @__PURE__ */ (0, import_jsx_runtime3.jsx)(ExtensionApiContext.Provider, {
            value: api,
            children: element
          }), root, () => {
            resolve();
          });
        } catch (error) {
          console.error(error);
          reject(error);
        }
      });
    }));
  }

  // node_modules/@shopify/ui-extensions-react/build/esm/surfaces/admin/components/AdminBlock/AdminBlock.mjs
  var AdminBlock2 = createRemoteReactComponent(AdminBlock);

  // node_modules/@shopify/ui-extensions-react/build/esm/surfaces/admin/components/BlockStack/BlockStack.mjs
  var BlockStack2 = createRemoteReactComponent(BlockStack);

  // node_modules/@shopify/ui-extensions-react/build/esm/surfaces/admin/components/Box/Box.mjs
  var Box2 = createRemoteReactComponent(Box);

  // node_modules/@shopify/ui-extensions-react/build/esm/surfaces/admin/components/Button/Button.mjs
  var Button2 = createRemoteReactComponent(Button);

  // node_modules/@shopify/ui-extensions-react/build/esm/surfaces/admin/components/Heading/Heading.mjs
  var Heading2 = createRemoteReactComponent(Heading);

  // node_modules/@shopify/ui-extensions-react/build/esm/surfaces/admin/components/InlineStack/InlineStack.mjs
  var InlineStack2 = createRemoteReactComponent(InlineStack);

  // node_modules/@shopify/ui-extensions-react/build/esm/surfaces/admin/components/NumberField/NumberField.mjs
  var NumberField2 = createRemoteReactComponent(NumberField);

  // node_modules/@shopify/ui-extensions-react/build/esm/surfaces/admin/components/Text/Text.mjs
  var Text2 = createRemoteReactComponent(Text);

  // node_modules/@shopify/ui-extensions-react/build/esm/surfaces/admin/hooks/api.mjs
  var import_react15 = __toESM(require_react(), 1);

  // node_modules/@shopify/ui-extensions-react/build/esm/surfaces/admin/errors.mjs
  var AdminUIExtensionError = class extends Error {
    constructor(...args) {
      super(...args);
      this.name = "AdminUIExtensionError";
    }
  };

  // node_modules/@shopify/ui-extensions-react/build/esm/surfaces/admin/hooks/api.mjs
  function useApi(_target) {
    const api = (0, import_react15.useContext)(ExtensionApiContext);
    if (api == null) {
      throw new AdminUIExtensionError("No extension api found.");
    }
    return api;
  }

  // extensions/limiter-display-collection-block/src/BlockExtension.jsx
  var import_react16 = __toESM(require_react());

  // extensions/limiter-display-collection-block/src/utils.js
  function updateCollectionLimit(productId, limiters) {
    return __async(this, null, function* () {
      const collectionValue = (limiters == null ? void 0 : limiters.collectionName) + "," + (limiters == null ? void 0 : limiters.collectionMin) + "," + (limiters == null ? void 0 : limiters.collectionMax) + "," + (limiters == null ? void 0 : limiters.collectionMultiple);
      return yield makeGraphQLQuery(
        `mutation SetMetafield($namespace: String!, $ownerId: ID!, $key: String!, $type: String!, $value: String!) {
        metafieldDefinitionCreate(
          definition: {namespace: $namespace, key: $key, name: "Tracked Issues", ownerType: PRODUCT, type: $type, access: {admin: MERCHANT_READ_WRITE}}
        ) {
          createdDefinition {
            id
          }
        }
        metafieldsSet(metafields: [{ownerId:$ownerId, namespace:$namespace, key:$key, type:$type, value:$value}]) {
          userErrors {
            field
            message
            code
          }
        }
      }
      `,
        {
          ownerId: productId,
          namespace: "collectionLimit",
          key: "collectionLimit",
          type: "string",
          value: collectionValue
        }
      );
    });
  }
  function getCollection(collectionId, productId) {
    return __async(this, null, function* () {
      return yield makeGraphQLQuery(
        `query collection {
            collection(id: "${collectionId}") {
                id
                title
                productsCount {
                    count
                }
                hasProduct(id: "${productId}")
            }
        }`,
        {}
      );
    });
  }
  function updateLimiters(collectionId, limiters) {
    return __async(this, null, function* () {
      var _a, _b, _c, _d;
      const allProductsData = yield getAllProductsData();
      for (const edge of allProductsData) {
        const collectionData = yield getCollection(collectionId, (_a = edge == null ? void 0 : edge.node) == null ? void 0 : _a.id);
        if ((_c = (_b = collectionData == null ? void 0 : collectionData.data) == null ? void 0 : _b.collection) == null ? void 0 : _c.hasProduct) {
          yield updateCollectionLimit((_d = edge == null ? void 0 : edge.node) == null ? void 0 : _d.id, limiters);
        }
      }
      return { success: true };
    });
  }
  function getLimiters(collectionId) {
    return __async(this, null, function* () {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t;
      const limiters = {};
      const planDetails = yield makeGraphQLQuery(`{
    currentAppInstallation {
      id
      planMetaField: metafield(namespace:"hasPlan", key: "hasPlan") {
        value
      }
      freePlanLimitersMetaField: metafield(namespace:"freePlanLimiters", key: "freePlanLimiters") {
        value
      }
  
    }
  }`, {});
      if (((_c = (_b = (_a = planDetails == null ? void 0 : planDetails.data) == null ? void 0 : _a.currentAppInstallation) == null ? void 0 : _b.planMetaField) == null ? void 0 : _c.value) == "false") {
        limiters["plan"] = false;
        if ((_f = (_e = (_d = planDetails == null ? void 0 : planDetails.data) == null ? void 0 : _d.currentAppInstallation) == null ? void 0 : _e.freePlanLimitersMetaField) == null ? void 0 : _f.value) {
          limiters["freePlanLimiters"] = JSON.parse((_i = (_h = (_g = planDetails == null ? void 0 : planDetails.data) == null ? void 0 : _g.currentAppInstallation) == null ? void 0 : _h.freePlanLimitersMetaField) == null ? void 0 : _i.value);
        }
      } else {
        limiters["plan"] = true;
      }
      const allProductsData = yield getAllProductsData();
      for (const edge of allProductsData) {
        const collectionData = yield getCollection(collectionId, (_j = edge == null ? void 0 : edge.node) == null ? void 0 : _j.id);
        if ((_l = (_k = collectionData == null ? void 0 : collectionData.data) == null ? void 0 : _k.collection) == null ? void 0 : _l.hasProduct) {
          limiters["collectionName"] = (_n = (_m = collectionData == null ? void 0 : collectionData.data) == null ? void 0 : _m.collection) == null ? void 0 : _n.title;
          if ((_p = (_o = edge == null ? void 0 : edge.node) == null ? void 0 : _o.collectionLimitField) == null ? void 0 : _p.value) {
            const [collectionName, collectionMin, collectionMax, collectionMultiple] = (_r = (_q = edge == null ? void 0 : edge.node) == null ? void 0 : _q.collectionLimitField) == null ? void 0 : _r.value.split(",");
            if (collectionName === ((_t = (_s = collectionData == null ? void 0 : collectionData.data) == null ? void 0 : _s.collection) == null ? void 0 : _t.title)) {
              limiters["collectionMin"] = collectionMin;
              limiters["collectionMax"] = collectionMax;
              limiters["collectionMultiple"] = collectionMultiple;
              break;
            }
          }
        }
      }
      return limiters;
    });
  }
  function makeGraphQLQuery(query, variables) {
    return __async(this, null, function* () {
      const graphQLQuery = {
        query,
        variables
      };
      const res = yield fetch("shopify:admin/api/graphql.json", {
        method: "POST",
        body: JSON.stringify(graphQLQuery)
      });
      if (!res.ok) {
        console.error("Network error");
      }
      return yield res.json();
    });
  }
  function getAllProductsInCategory(categoryName, allProductsData) {
    let quantityLimit = 0;
    let obj = {};
    for (const edge of allProductsData) {
      const productCategory = edge.node.category ? edge.node.category.name : null;
      if (productCategory === categoryName) {
        quantityLimit++;
      }
    }
    obj["categoryName"] = categoryName;
    obj["quantityLimit"] = quantityLimit;
    return quantityLimit;
  }
  function getAllProductsInVendor(vendorName, allProductsData) {
    var _a, _b;
    let quantityLimit = 0;
    let name = vendorName;
    let obj = {};
    for (const edge of allProductsData) {
      const productVendor = ((_a = edge.node) == null ? void 0 : _a.vendor) ? (_b = edge.node) == null ? void 0 : _b.vendor : null;
      if (productVendor === name) {
        quantityLimit++;
      }
    }
    obj["vendorName"] = name;
    obj["quantityLimit"] = quantityLimit;
    return quantityLimit;
  }
  function getAllProductsInCollection(collectionName, allCollectionsData) {
    var _a, _b, _c;
    const countOfProducts = (_c = (_b = (_a = allCollectionsData.find((item) => {
      var _a2;
      return ((_a2 = item.node) == null ? void 0 : _a2.title) === collectionName;
    })) == null ? void 0 : _a.node) == null ? void 0 : _b.productsCount) == null ? void 0 : _c.count;
    return countOfProducts;
  }
  function getExistingProductLimits(collectionId) {
    return __async(this, null, function* () {
      var _a, _b, _c, _d;
      let totalProductsCount = 0;
      let productLimitCounts = {};
      let vendorCounts = {};
      let categoryCounts = {};
      let collectionCounts = {};
      const collectionData = yield makeGraphQLQuery(`query AllCollections {
    collections(first: 250) {
      edges {
        node {
          id
          title
          productsCount {
            count
          }
        }
      }
    }
  }`, {});
      const currentCollection = yield makeGraphQLQuery(
        `query collection {
            collection(id: "${collectionId}") {
              id
              title
              productsCount {
                  count
              }
            }
        }`,
        {}
      );
      const allCollectionsData = (_b = (_a = collectionData == null ? void 0 : collectionData.data) == null ? void 0 : _a.collections) == null ? void 0 : _b.edges;
      const allProductsData = yield getAllProductsData();
      const currentCollectionName = (_d = (_c = currentCollection == null ? void 0 : currentCollection.data) == null ? void 0 : _c.collection) == null ? void 0 : _d.title;
      const productsInCurrentCollection = getAllProductsInCollection(currentCollectionName, allCollectionsData);
      allProductsData.forEach((item) => {
        const node = item.node;
        if (node.productLimitField && node.productLimitField.value) {
          const productLimitValues = node.productLimitField.value.split(",");
          const productLimits = productLimitValues.slice(0, 2).map(Number);
          const vendorName = productLimitValues[2];
          const vendorLimits = productLimitValues.slice(3, 5).map(Number);
          const productName = productLimitValues[5];
          if (productLimits.some((value) => value !== 0)) {
            if (!productLimitCounts[productName]) {
              productLimitCounts[productName] = 0;
              totalProductsCount = totalProductsCount + 1;
            }
            productLimitCounts[productName]++;
          }
          if (vendorLimits.some((value) => value !== 0)) {
            if (!vendorCounts[vendorName]) {
              vendorCounts[vendorName] = 0;
              totalProductsCount = totalProductsCount + getAllProductsInVendor(vendorName, allProductsData);
            }
            vendorCounts[vendorName]++;
          }
        }
        if (node.categoryLimitField && node.categoryLimitField.value) {
          const categoryValues = node.categoryLimitField.value.split(",");
          const categoryName = categoryValues[0].trim();
          const categoryLimits = categoryValues.slice(1).map(Number);
          if (categoryLimits.some((value) => value !== 0)) {
            if (!categoryCounts[categoryName]) {
              categoryCounts[categoryName] = 0;
              totalProductsCount = totalProductsCount + getAllProductsInCategory(categoryName, allProductsData);
            }
            categoryCounts[categoryName]++;
          }
        }
        if (node.collectionLimitField && node.collectionLimitField.value) {
          const collectionValues = node.collectionLimitField.value.split(",");
          const collectionName = collectionValues[0].trim();
          const collectionLimits = collectionValues.slice(1).map(Number);
          if (collectionLimits.some((value) => value !== 0)) {
            if (!collectionCounts[collectionName]) {
              collectionCounts[collectionName] = 0;
              totalProductsCount = totalProductsCount + getAllProductsInCollection(collectionName, allCollectionsData);
            }
            collectionCounts[collectionName]++;
          }
        }
      });
      return totalProductsCount + productsInCurrentCollection;
    });
  }
  function getAllProductsData() {
    return __async(this, null, function* () {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
      let allProductsData = [];
      const allData = yield makeGraphQLQuery(
        `query AllProducts{
        products(first: 2) {
            edges {
                cursor
                node {
                  id
                  vendor
                  category {
                    name
                  }
                  productLimitField: metafield(namespace: "productLimit", key: "productLimit") {
                    id
                    value
                  }
                  categoryLimitField: metafield(namespace: "categoryLimit", key: "categoryLimit") {
                    id
                    value
                  }
                  collectionLimitField: metafield(namespace: "collectionLimit", key: "collectionLimit") {
                    id
                    value
                  }
                }    
            }
        }
    }`,
        {}
      );
      allProductsData = allProductsData.concat((_b = (_a = allData == null ? void 0 : allData.data) == null ? void 0 : _a.products) == null ? void 0 : _b.edges);
      let cursor = (_c = allProductsData[allProductsData.length - 1]) == null ? void 0 : _c.cursor;
      while (true) {
        let productData = yield makeGraphQLQuery(
          `query GetProductsPaginated($after: String) {
            products(first: 250, after: $after) {
              edges {
                cursor
                node {
                  id
                  vendor
                  category {
                    name
                  }
                  productLimitField: metafield(namespace: "productLimit", key: "productLimit") {
                    id
                    value
                  }
                  categoryLimitField: metafield(namespace: "categoryLimit", key: "categoryLimit") {
                    id
                    value
                  }
                  collectionLimitField: metafield(namespace: "collectionLimit", key: "collectionLimit") {
                    id
                    value
                  }
                }
              }
              pageInfo {
                hasNextPage
              }
            }
        }`,
          {
            after: cursor
          }
        );
        allProductsData = allProductsData.concat((_e = (_d = productData == null ? void 0 : productData.data) == null ? void 0 : _d.products) == null ? void 0 : _e.edges);
        if ((_h = (_g = (_f = productData == null ? void 0 : productData.data) == null ? void 0 : _f.products) == null ? void 0 : _g.pageInfo) == null ? void 0 : _h.hasNextPage) {
          const products = (_j = (_i = productData == null ? void 0 : productData.data) == null ? void 0 : _i.products) == null ? void 0 : _j.edges;
          if (products) {
            cursor = (_k = products[products.length - 1]) == null ? void 0 : _k.cursor;
          } else {
            break;
          }
        } else {
          break;
        }
      }
      return allProductsData;
    });
  }

  // extensions/limiter-display-collection-block/src/BlockExtension.jsx
  var import_jsx_runtime4 = __toESM(require_jsx_runtime());
  var TARGET = "admin.collection-details.block.render";
  var BlockExtension_default = reactExtension(TARGET, () => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(App, {}));
  function App() {
    const { i18n, data } = useApi(TARGET);
    const [limiters, setLimiters] = (0, import_react16.useState)({
      collectionName: "",
      collectionMin: 0,
      collectionMax: 0,
      collectionMultiple: 0,
      plan: ""
    });
    const [loading, setLoading] = (0, import_react16.useState)(true);
    const [isAllow, setIsAllow] = (0, import_react16.useState)(false);
    const collectionId = data.selected[0].id;
    const freePlanLimiters = {
      products: 0
    };
    (0, import_react16.useEffect)(() => {
      (function getCollectionInfo() {
        return __async(this, null, function* () {
          var _a;
          const collectionData = yield getLimiters(collectionId);
          if (collectionData) {
            const existingLimiters = collectionData == null ? void 0 : collectionData.freePlanLimiters;
            if (collectionData.plan === false) {
              freePlanLimiters.products = (_a = existingLimiters.find((item) => item.typeName == "products")) == null ? void 0 : _a.value;
            }
            if (freePlanLimiters) {
              const existingProductsLimit = yield getExistingProductLimits(collectionId);
              if (Number(freePlanLimiters.products) >= existingProductsLimit && Number(freePlanLimiters.products) > 0) {
                setIsAllow(true);
              }
            }
            if (collectionData.plan) {
              setIsAllow(true);
            }
            setLimiters((prevState) => __spreadProps(__spreadValues({}, prevState), {
              collectionName: (collectionData == null ? void 0 : collectionData.collectionName) ? collectionData == null ? void 0 : collectionData.collectionName : "",
              collectionMin: (collectionData == null ? void 0 : collectionData.collectionMin) ? Number(collectionData == null ? void 0 : collectionData.collectionMin) : 0,
              collectionMax: (collectionData == null ? void 0 : collectionData.collectionMax) ? Number(collectionData == null ? void 0 : collectionData.collectionMax) : 0,
              collectionMultiple: (collectionData == null ? void 0 : collectionData.collectionMultiple) ? Number(collectionData == null ? void 0 : collectionData.collectionMultiple) : 0,
              plan: (collectionData == null ? void 0 : collectionData.plan) ? collectionData == null ? void 0 : collectionData.plan : false
            }));
            setLoading(false);
          }
        });
      })();
    }, [collectionId]);
    const handleLimiters = (value, name) => {
      setLimiters((prevState) => __spreadProps(__spreadValues({}, prevState), {
        [name]: value
      }));
    };
    const handleSave = () => __async(this, null, function* () {
      setLoading(true);
      const result = yield updateLimiters(collectionId, limiters);
      if (result == null ? void 0 : result.success) {
        setLoading(false);
      }
    });
    return (
      // The AdminBlock component provides an API for setting the title of the Block extension wrapper.
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(AdminBlock2, { title: "CartControl: Order Limit app limiters", children: [
        loading && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Text2, { children: "Loading..." }),
        !loading && !(limiters == null ? void 0 : limiters.plan) && !isAllow && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Text2, { as: "p", tone: "critical", children: "You used allowed Product limits. To continue please select a plan or set existing limits to 0." }),
        !loading && isAllow && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Box2, { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(BlockStack2, { gap: true, children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(Heading2, { size: "6", children: [
            "Collection Name: ",
            limiters == null ? void 0 : limiters.collectionName
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(InlineStack2, { gap: true, children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
              NumberField2,
              {
                value: limiters.collectionMin,
                label: "Collection Min Limit",
                type: "number",
                onChange: (value) => {
                  handleLimiters(value, "collectionMin");
                }
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
              NumberField2,
              {
                value: limiters.collectionMax,
                label: "Collection Max Limit",
                type: "number",
                onChange: (value) => {
                  handleLimiters(value, "collectionMax");
                }
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
              NumberField2,
              {
                value: limiters.collectionMultiple,
                label: "Collection Multiple Limit",
                type: "number",
                onChange: (value) => {
                  handleLimiters(value, "collectionMultiple");
                }
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(InlineStack2, { inlineAlignment: "end", gap: "none", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Button2, { onClick: handleSave, variant: "primary", children: "Save" }) })
        ] }) })
      ] })
    );
  }
})();
//# sourceMappingURL=limiter-collection-block.js.map
