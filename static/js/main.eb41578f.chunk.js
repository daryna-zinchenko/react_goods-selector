(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var s=c(3),n=c.n(s),a=c(4),o=c(5),l=c(8),r=c(7),i=c(1),d=(c(13),c(14),c(6)),u=c.n(d),b=c(0),j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],h=function(e){Object(l.a)(c,e);var t=Object(r.a)(c);function c(){var e;Object(a.a)(this,c);for(var s=arguments.length,n=new Array(s),o=0;o<s;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={selectedGood:"Jam"},e.clearSelection=function(){e.setState({selectedGood:""})},e.selectGood=function(t){e.setState({selectedGood:t})},e}return Object(o.a)(c,[{key:"render",value:function(){var e=this,t=this.state.selectedGood;return Object(b.jsxs)("main",{className:"section container",children:[t?Object(b.jsxs)("h1",{className:"title is-flex is-align-items-center",children:["".concat(t," is selected"),Object(b.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete ml-3",onClick:this.clearSelection})]}):Object(b.jsx)("h1",{className:"title",children:"No goods selected"}),Object(b.jsx)("table",{className:"table",children:Object(b.jsx)("tbody",{children:j.map((function(c){var s=c===t;return Object(b.jsxs)("tr",{"data-cy":"Good",className:u()({"has-background-success-light":s}),children:[Object(b.jsx)("td",{children:s?Object(b.jsx)("button",{"data-cy":"RemoveButton",type:"button",className:"button is-info",onClick:e.clearSelection,children:"-"}):Object(b.jsx)("button",{"data-cy":"AddButton",type:"button",className:"button",onClick:function(){return e.selectGood(c)},children:"+"})}),Object(b.jsx)("td",{"data-cy":"GoodTitle",className:"is-vcentered",children:c})]},c)}))})})]})}}]),c}(i.Component);n.a.render(Object(b.jsx)(h,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.eb41578f.chunk.js.map