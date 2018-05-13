!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react")):"function"==typeof define&&define.amd?define(["exports","react"],t):t(e.SSRRenderer={},e.React)}(this,function(e,t){"use strict";t=t&&t.hasOwnProperty("default")?t.default:t;var r=0,n=1,o=2,a=3;function s(e){var t={};function s(e,n){var o=t[e];if(void 0!==o){var a=o[n];if(void 0!==a)return a}else o={},t[e]=o;var s={status:r,suspender:null,value:null,error:null};return o[n]=s,s}function u(e,t){var r=e;r.status=n,r.suspender=t,t.then(function(e){var t=r;t.status=o,t.suspender=null,t.value=e},function(e){var t=r;t.status=a,t.suspender=null,t.error=e})}return{invalidate:function(){e()},preload:function(e,t,c,i){var f=s(e.name,t);switch(f.status){case r:return void u(f,c(i));case n:case o:case a:return}},get:function(e,t,u,c){var i=s(e.name,t);switch(i.status){case r:return;case n:return i.suspender;case o:return i.value;case a:default:throw i.error}},read:function(e,t,c,i){var f=s(e.name,t);switch(f.status){case r:var p=c(i);return u(f,p),p;case n:return f.suspender;case o:return f.value;case a:default:throw f.error}},serialize:function(){return JSON.stringify(t,function(e,t){if("suspender"!==e)return t})},deserialize:function(e){t=e}}}var u=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},c=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},f=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},p=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t};function d(){}var l=t.createContext({markSSRDone:d}),v=function(e){function t(){return u(this,t),p(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return f(t,e),c(t,[{key:"componentDidMount",value:function(){this.props.done()}},{key:"render",value:function(){return null}}]),t}(t.Component),h=function(e){function r(e){u(this,r);var t=p(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,e));t.increaseRequests=function(){t.requestCounter+=1},t.decreaseRequests=function(){t.requestCounter-=1,0===t.requestCounter&&t.markSSRDone(t.state.context.cache)};var n=s(d);return e.cacheData&&n.deserialize(e.cacheData),t.markSSRDone=function(){e.markSSRDone&&e.markSSRDone(n)},t.requestCounter=0,t.state={context:{increaseRequests:t.increaseRequests,decreaseRequests:t.decreaseRequests,markSSRDone:t.markSSRDone,cache:n}},t}return f(r,e),c(r,[{key:"render",value:function(){return t.createElement(l.Provider,{value:this.state.context},this.props.children)}}]),r}(t.Component),y=function(e){function t(e){u(this,t);var r=p(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),n=void 0,o=void 0;try{n=r.props.resource.get(r.props.cache,r.props.resourceKey)}catch(e){o=e}return r.state={isLoading:!1,data:n,error:o},r}return f(t,e),c(t,[{key:"componentDidMount",value:function(){var e=this;this.state.data||this.state.isLoading||this.setState({isLoading:!0},function(){e.props.increaseRequests();var t=void 0,r=void 0;try{t=e.props.resource.read(e.props.cache,e.props.resourceKey)}catch(e){r=e}r?e.setState({isLoading:!1,error:r},function(){e.props.decreaseRequests()}):t instanceof Promise?t.then(function(t){e.setState({isLoading:!1,data:t},function(){e.props.decreaseRequests()})}).catch(function(t){e.setState({isLoading:!1,error:t},function(){e.props.decreaseRequests()})}):t&&e.setState({isLoading:!1,data:t},function(){e.props.decreaseRequests()})})}},{key:"render",value:function(){return this.props.children({data:this.state.data,error:this.state.error})}}]),t}(t.Component),R=t.forwardRef(function(e,r){return t.createElement(l.Consumer,null,function(n){var o=n.cache,a=n.increaseRequests,s=n.decreaseRequests;return t.createElement(y,i({},e,{cache:o,increaseRequests:a,decreaseRequests:s,ref:r}))})});e.SSRContext=l,e.MarkSSRDone=function(){return t.createElement(l.Consumer,null,function(e){var r=e.markSSRDone;return t.createElement(v,{done:r})})},e.SSRContextProvider=h,e.FetcherInner=y,e.Fetcher=R,e.createCache=s,e.createResource=function(e,t,r){var n={name:e,get:function(e,o){if(void 0===r)return e.get(n,o,t,o);var a=r(o);return e.get(n,a,t,o)},read:function(e,o){if(void 0===r)return e.read(n,o,t,o);var a=r(o);return e.read(n,a,t,o)},preload:function(e,o){if(void 0!==r){var a=r(o);e.preload(n,a,t,o)}else e.preload(n,o,t,o)}};return n},Object.defineProperty(e,"__esModule",{value:!0})});
