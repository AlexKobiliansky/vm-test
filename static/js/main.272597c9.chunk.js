(this["webpackJsonpvm-test"]=this["webpackJsonpvm-test"]||[]).push([[0],{17:function(e,t,c){},19:function(e,t,c){},20:function(e,t,c){},21:function(e,t,c){},23:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),a=c(8),i=c.n(a),l=c(6),r=c.n(l),o=c(9),d=c(2),j=c(7),b=(c(16),c(17),c(0)),u=function(){return Object(b.jsxs)("div",{className:"sk-circle-bounce",children:[Object(b.jsx)("div",{className:"sk-child sk-circle-1"}),Object(b.jsx)("div",{className:"sk-child sk-circle-2"}),Object(b.jsx)("div",{className:"sk-child sk-circle-3"}),Object(b.jsx)("div",{className:"sk-child sk-circle-4"}),Object(b.jsx)("div",{className:"sk-child sk-circle-5"}),Object(b.jsx)("div",{className:"sk-child sk-circle-6"}),Object(b.jsx)("div",{className:"sk-child sk-circle-7"}),Object(b.jsx)("div",{className:"sk-child sk-circle-8"}),Object(b.jsx)("div",{className:"sk-child sk-circle-9"}),Object(b.jsx)("div",{className:"sk-child sk-circle-10"}),Object(b.jsx)("div",{className:"sk-child sk-circle-11"}),Object(b.jsx)("div",{className:"sk-child sk-circle-12"})]})},m=(c(19),function(e){var t=e.data,c=e.onSort,s=e.sortOrder,n=e.sortField,a=e.onRowSelect,i=e.selectedRow;return Object(b.jsxs)("table",{className:"table vm-table",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{onClick:function(){return c("id")},className:"".concat("id"===n?"sorting":""," ").concat(s),children:"ID"}),Object(b.jsx)("th",{onClick:function(){return c("firstName")},className:"".concat("firstName"===n?"sorting":""," ").concat(s),children:"First Name"}),Object(b.jsx)("th",{onClick:function(){return c("lastName")},className:"".concat("lastName"===n?"sorting":""," ").concat(s),children:"Last Name"}),Object(b.jsx)("th",{onClick:function(){return c("email")},className:"".concat("email"===n?"sorting":""," ").concat(s),children:"Email"}),Object(b.jsx)("th",{onClick:function(){return c("phone")},className:"".concat("phone"===n?"sorting":""," ").concat(s),children:"Phone"})]})}),Object(b.jsx)("tbody",{children:null===t||void 0===t?void 0:t.map((function(e){return Object(b.jsxs)("tr",{onClick:function(){return a(e)},className:"".concat((null===e||void 0===e?void 0:e.id)+(null===e||void 0===e?void 0:e.phone)===(null===i||void 0===i?void 0:i.id)+(null===i||void 0===i?void 0:i.phone)?"selected":""),children:[Object(b.jsx)("td",{children:e.id}),Object(b.jsx)("td",{children:e.firstName}),Object(b.jsx)("td",{children:e.lastName}),Object(b.jsx)("td",{children:e.email}),Object(b.jsx)("td",{children:e.phone})]},"".concat(e.id,"-").concat(e.phone))}))})]})}),O=(c(20),function(e){var t,c,s,n,a=e.item;return Object(b.jsxs)("div",{className:"detail-row",children:[Object(b.jsxs)("p",{children:["\u0412\u044b\u0431\u0440\u0430\u043d \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c ",Object(b.jsxs)("b",{children:[a.firstName," ",a.lastName]})]}),"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435:",Object(b.jsx)("div",{className:"description",children:a.description}),Object(b.jsxs)("p",{children:["\u0410\u0434\u0440\u0435\u0441 \u043f\u0440\u043e\u0436\u0438\u0432\u0430\u043d\u0438\u044f: ",Object(b.jsx)("b",{children:null===a||void 0===a||null===(t=a.address)||void 0===t?void 0:t.streetAddress})]}),Object(b.jsxs)("p",{children:["\u0413\u043e\u0440\u043e\u0434: ",Object(b.jsx)("b",{children:null===a||void 0===a||null===(c=a.address)||void 0===c?void 0:c.city})]}),Object(b.jsxs)("p",{children:["\u041f\u0440\u043e\u0432\u0438\u043d\u0446\u0438\u044f/\u0448\u0442\u0430\u0442: ",Object(b.jsx)("b",{children:null===a||void 0===a||null===(s=a.address)||void 0===s?void 0:s.state})]}),Object(b.jsxs)("p",{children:["\u0418\u043d\u0434\u0435\u043a\u0441: ",Object(b.jsx)("b",{children:null===a||void 0===a||null===(n=a.address)||void 0===n?void 0:n.zip})]})]})}),x=(c(21),function(e){var t=e.onSelectMode;return Object(b.jsxs)("div",{className:"mode-selector",children:[Object(b.jsx)("button",{onClick:function(){return t("http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}")},className:"btn btn-info",children:"\u041f\u043e\u0434\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u043c\u0430\u043b\u044b\u0439 \u043e\u0431\u044a\u0435\u043c"}),Object(b.jsx)("button",{onClick:function(){return t("http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}")},className:"btn btn-danger",children:"\u041f\u043e\u0434\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u043e\u0439 \u043e\u0431\u044a\u0435\u043c"})]})}),h=c(10),v=c.n(h),p=function(e){var t=e.onSearch,c=Object(s.useState)(""),n=Object(d.a)(c,2),a=n[0],i=n[1];return Object(b.jsxs)("div",{className:"input-group mb-3 mt-3",children:[Object(b.jsx)("div",{className:"input-group-prepend",children:Object(b.jsx)("button",{className:"btn btn-outline-secondary",onClick:function(){return t(a)},children:"\u041f\u043e\u0438\u0441\u043a"})}),Object(b.jsx)("input",{type:"text",className:"form-control",value:a,onChange:function(e){i(e.target.value)}})]})},N=function(e,t){for(var c=Object(j.a)(e),s=[];c.length>0;)s.push(c.splice(0,t));return s};var f=function(){var e=Object(s.useState)(!1),t=Object(d.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(!1),i=Object(d.a)(a,2),l=i[0],h=i[1],f=Object(s.useState)(!1),k=Object(d.a)(f,2),g=k[0],C=k[1],w=Object(s.useState)(null),S=Object(d.a)(w,2),L=S[0],y=S[1],R=Object(s.useState)(g),F=Object(d.a)(R,2),M=F[0],P=F[1],D=Object(s.useState)("asc"),E=Object(d.a)(D,2),I=E[0],J=E[1],z=Object(s.useState)(null),A=Object(d.a)(z,2),B=A[0],q=A[1],G=Object(s.useState)(null),H=Object(d.a)(G,2),K=H[0],Q=H[1],T=Object(s.useState)(0),U=Object(d.a)(T,2),V=U[0],W=U[1],X=Object(s.useState)(""),Y=Object(d.a)(X,2),Z=Y[0],$=Y[1];Object(s.useEffect)((function(){if(g){var e=Z?g.filter((function(e){return e.firstName.toLowerCase().includes(Z.toLowerCase())||e.lastName.toLowerCase().includes(Z.toLowerCase())||e.email.toLowerCase().includes(Z.toLowerCase())})):g;y(N(e,50)[V]),P(e)}}),[V,g,Z]);var _=function(){var e=Object(o.a)(r.a.mark((function e(t){var c,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(!0),h(!0),e.next=4,fetch(t);case 4:return c=e.sent,e.next=7,c.json();case 7:s=e.sent,C(s),h(!1),N(s,50);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return c?Object(b.jsxs)("div",{className:"container",children:[l?Object(b.jsx)(u,{}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(p,{onSearch:function(e){W(0),$(e)}}),Object(b.jsx)(m,{data:L,onSort:function(e){var t=Object(j.a)(g),c="asc"===I?"desc":"asc",s=t.sort((function(t,c){return"asc"===I?t[e]<c[e]?1:-1:t[e]>c[e]?1:-1}));C(s),J(c),q(e)},sortOrder:I,sortField:B,onRowSelect:function(e){Q(e)},selectedRow:K})]}),(null===g||void 0===g?void 0:g.length)>50&&Object(b.jsx)(v.a,{previousLabel:"<<",nextLabel:">>",breakLabel:"...",pageCount:Math.ceil((null===M||void 0===M?void 0:M.length)/50),marginPagesDisplayed:2,pageRangeDisplayed:5,onPageChange:function(e){var t=e.selected;W(t)},containerClassName:"pagination",activeClassName:"active",pageClassName:"page-item",pageLinkClassName:"page-link",previousClassName:"page-item",nextClassName:"page-item",breakClassName:"page-item",previousLinkClassName:"page-link",nextLinkClassName:"page-link",breakLinkClassName:"page-link",forcePage:V}),K&&Object(b.jsx)(O,{item:K})]}):Object(b.jsx)("div",{className:"container",children:Object(b.jsx)(x,{onSelectMode:_})})};i.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(f,{})}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.272597c9.chunk.js.map