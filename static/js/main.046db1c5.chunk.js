(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(6),l=a.n(o),i=a(1),r=a(2),s=a(4),m=a(3),u=(a(12),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={date:new Date},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.timer=setInterval((function(){e.setState({date:new Date})}),1e3)}},{key:"componentDidUpdate",value:function(e){e.name!==this.props.name&&console.log("The Clock was renamed from "+"".concat(e.name," to ").concat(this.props.name))}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"render",value:function(){var e=this.state.date,t=this.props.name;return c.a.createElement(c.a.Fragment,null,"Current time:"," ",e.toLocaleTimeString()," ",c.a.createElement("span",{className:"random"},t))}}]),a}(c.a.Component)),h=(a(13),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={isClockVisible:!0,clockName:Math.ceil(100*Math.random())},e.showClock=function(){e.setState({isClockVisible:!0})},e.hideClock=function(){e.setState({isClockVisible:!1})},e.randomSetName=function(){e.setState({clockName:Math.ceil(100*Math.random())})},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;setInterval((function(){var t=new Date;e.state.isClockVisible&&console.log(t.toLocaleTimeString())}),1e3)}},{key:"render",value:function(){var e=this.state,t=e.isClockVisible,a=e.clockName,n=this.showClock,o=this.hideClock,l=this.randomSetName;return c.a.createElement("div",{className:"app"},c.a.createElement("section",{className:"text"},c.a.createElement("h1",{className:"text__title"},"React clock"),c.a.createElement("p",{className:"text__subtitle"},t&&c.a.createElement(u,{name:a}))),c.a.createElement("section",{className:"btn"},c.a.createElement("button",{className:"btn__clock",type:"button",onClick:n},"Show clock"),c.a.createElement("button",{className:"btn__clock",type:"button",onClick:o},"Hide clock"),c.a.createElement("button",{className:"btn__clock",type:"button",onClick:l},"Set random name")))}}]),a}(c.a.Component));l.a.render(c.a.createElement(h,null),document.getElementById("root"))},7:function(e,t,a){e.exports=a(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.046db1c5.chunk.js.map