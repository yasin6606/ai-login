(this["webpackJsonpreact-novin-dev-test"]=this["webpackJsonpreact-novin-dev-test"]||[]).push([[6,11],{331:function(e,t,a){"use strict";a.r(t);var c=a(215),n=a.n(c),s=a(330),r=a(14),i=a(216),o=a(43),l=a(0),j=a(44),b=a(118),d=a(264),u=a.n(d),O=a(661),h=a(652),m=a(119),x=a(643),f=a(644),p=a(645),v=a(648),g=a(305),w=a(327),N=a(261),C=a(649),y=a(326),k=a.n(y),F=a(2),P=function(e){var t=e.rowData,a=e.close,c=function(e){switch(e){case 1:return"First Name: ";case 2:return"Last Name: ";case 3:return"E-mail: ";default:return null}};return Object(F.jsx)(F.Fragment,{children:Object(F.jsxs)(x.a,{children:[Object(F.jsx)(f.a,{avatar:t[0],title:t[1],action:Object(F.jsx)(g.a,{children:Object(F.jsx)(w.a,{title:"Edit"})}),subheader:k()().format("YYYY MMM DD ")}),Object(F.jsx)(C.a,{className:"bg-primary",variant:"middle"}),Object(F.jsx)(p.a,{children:Object(F.jsx)(b.a,{container:!0,direction:"column",children:t.map((function(e,a){return n=e,0===(s=a)?null:Object(F.jsxs)(b.a,{item:!0,className:"d-flex my-1 my-md-3 p-md-2",children:[Object(F.jsx)("div",{className:"col col-6",children:Object(F.jsx)(m.a,{children:c(s),className:"fw-bold"})}),Object(F.jsx)("div",{className:"col col-6",children:Object(F.jsx)(m.a,{children:t[s]})})]},n);var n,s}))})}),Object(F.jsx)(C.a,{className:"bg-primary",variant:"middle"}),Object(F.jsx)(v.a,{children:Object(F.jsx)(N.a,{variant:"contained",color:"secondary",onClick:a,children:Object(F.jsx)(m.a,{children:"Close",variant:"button"})})})]})})},E=a(658);t.default=function(){var e=Object(l.useState)({columns:[],options:{}}),t=Object(o.a)(e,2),a=t[0],c=t[1],d=Object(l.useState)({data:[],page:0,per_page:6,total:12}),m=Object(o.a)(d,2),x=m[0],f=m[1],p=Object(l.useState)({show:!1,content:void 0}),v=Object(o.a)(p,2),g=v[0],w=v[1],N=Object(l.useContext)(j.a).fetchUsersListRestAPI,C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;Object(i.a)(n.a.mark((function t(){var a,c;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N(e);case 2:a=t.sent,c=a.data,f(Object(r.a)(Object(r.a)({},x),{},{data:[].concat(Object(s.a)(x.data),Object(s.a)(c.data)),page:--c.page}));case 5:case"end":return t.stop()}}),t)})))()},y={count:x.total,elevation:24,filter:!1,page:x.page,rowsPerPage:x.per_page,rowsPerPageOptions:[2,4,6],search:!1,onRowClick:function(e){w({show:!g.show,content:Object(F.jsx)(P,{rowData:e,close:k})})},onChangePage:function(e){C(++e)}},k=function(){w({show:!1,content:void 0})};return Object(l.useEffect)((function(){c({columns:[{name:"avatar",label:"Avatar",options:{filter:!0,sort:!0,customBodyRender:function(e){return Object(F.jsx)(O.a,{src:e})}}},{name:"first_name",label:"First Name",options:{filter:!0,sort:!0}},{name:"last_name",label:"Last Name",options:{filter:!0,sort:!0}},{name:"email",label:"E-mail",options:{filter:!0,sort:!0}}],options:y}),C()}),[]),Object(F.jsx)(F.Fragment,{children:Object(F.jsx)(b.a,{container:!0,direction:"column",className:"h-100 align-items-center justify-content-center",children:Object(F.jsxs)(b.a,{item:!0,className:"w-75 border",children:[Object(F.jsx)(u.a,{title:"List of Users",columns:a.columns,data:x.data,options:y}),Object(F.jsx)(E.a,{open:g.show,onClose:k,fullWidth:!0,classes:{paper:"bg-transparent"},children:Object(F.jsx)(h.a,{children:g.content})})]})})})}},611:function(e,t,a){},659:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(118),s=a(43),r=a(650),i=a(262),o=a(133),l=a(119),j=a(353),b=a(355),d=a(620),u=a(335),O=a(649),h=a(651),m=a(356),x=a(263),f=a(19),p=a(32),v=a(2),g=function(){var e=Object(c.useState)(null),t=Object(s.a)(e,2),a=t[0],n=t[1],g=Object(c.useContext)(f.a).dispatch;return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(r.a,{position:"relative",elevation:10,children:Object(v.jsxs)(i.a,{className:"justify-content-between",children:[Object(v.jsx)(o.a,{children:Object(v.jsx)(l.a,{children:"Users",variant:"h6"})}),Object(v.jsxs)(o.a,{children:[Object(v.jsx)(j.a,{className:"mouse-pointer",onClick:function(e){n(e.currentTarget)},children:Object(v.jsx)(b.a,{})}),Object(v.jsxs)(d.a,{anchorEl:a,open:!!a,onClose:function(){n(null)},children:[Object(v.jsx)(u.a,{children:Object(v.jsx)(l.a,{children:"email and password",variant:"subtitle2"})}),Object(v.jsx)(O.a,{}),Object(v.jsxs)(u.a,{onClick:function(){g({type:p.b})},children:[Object(v.jsx)(h.a,{children:Object(v.jsx)(m.a,{})}),Object(v.jsx)(x.a,{children:Object(v.jsx)(l.a,{children:"Logout",variant:"subtitle2",color:"error"})})]})]})]})]})})})},w=a(331);a(611),t.default=function(){return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)(n.a,{container:!0,direction:"column",className:"h-100 d-grid dashboard-griding",children:[Object(v.jsx)(n.a,{item:!0,children:Object(v.jsx)(g,{})}),Object(v.jsx)(n.a,{item:!0,children:Object(v.jsx)(w.default,{})})]})})}}}]);
//# sourceMappingURL=6.8597c5ca.chunk.js.map