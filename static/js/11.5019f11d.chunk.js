(this["webpackJsonpreact-novin-dev-test"]=this["webpackJsonpreact-novin-dev-test"]||[]).push([[11],{331:function(e,t,a){"use strict";a.r(t);var n=a(215),c=a.n(n),s=a(330),r=a(14),o=a(216),i=a(43),l=a(0),j=a(44),d=a(118),b=a(264),u=a.n(b),m=a(661),O=a(652),h=a(119),p=a(643),f=a(644),x=a(645),v=a(648),g=a(305),w=a(327),N=a(261),y=a(649),C=a(326),P=a.n(C),k=a(2),D=function(e){var t=e.rowData,a=e.close,n=function(e){switch(e){case 1:return"First Name: ";case 2:return"Last Name: ";case 3:return"E-mail: ";default:return null}};return Object(k.jsx)(k.Fragment,{children:Object(k.jsxs)(p.a,{children:[Object(k.jsx)(f.a,{avatar:t[0],title:t[1],action:Object(k.jsx)(g.a,{children:Object(k.jsx)(w.a,{title:"Edit"})}),subheader:P()().format("YYYY MMM DD ")}),Object(k.jsx)(y.a,{className:"bg-primary",variant:"middle"}),Object(k.jsx)(x.a,{children:Object(k.jsx)(d.a,{container:!0,direction:"column",children:t.map((function(e,a){return c=e,0===(s=a)?null:Object(k.jsxs)(d.a,{item:!0,className:"d-flex my-1 my-md-3 p-md-2",children:[Object(k.jsx)("div",{className:"col col-6",children:Object(k.jsx)(h.a,{children:n(s),className:"fw-bold"})}),Object(k.jsx)("div",{className:"col col-6",children:Object(k.jsx)(h.a,{children:t[s]})})]},c);var c,s}))})}),Object(k.jsx)(y.a,{className:"bg-primary",variant:"middle"}),Object(k.jsx)(v.a,{children:Object(k.jsx)(N.a,{variant:"contained",color:"secondary",onClick:a,children:Object(k.jsx)(h.a,{children:"Close",variant:"button"})})})]})})},E=a(658);t.default=function(){var e=Object(l.useState)({columns:[],options:{}}),t=Object(i.a)(e,2),a=t[0],n=t[1],b=Object(l.useState)({data:[],page:0,per_page:6,total:12}),h=Object(i.a)(b,2),p=h[0],f=h[1],x=Object(l.useState)({show:!1,content:void 0}),v=Object(i.a)(x,2),g=v[0],w=v[1],N=Object(l.useContext)(j.a).fetchUsersListRestAPI,y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;Object(o.a)(c.a.mark((function t(){var a,n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N(e);case 2:a=t.sent,n=a.data,f(Object(r.a)(Object(r.a)({},p),{},{data:[].concat(Object(s.a)(p.data),Object(s.a)(n.data)),page:--n.page}));case 5:case"end":return t.stop()}}),t)})))()},C={count:p.total,elevation:24,filter:!1,page:p.page,rowsPerPage:p.per_page,rowsPerPageOptions:[2,4,6],search:!1,onRowClick:function(e){w({show:!g.show,content:Object(k.jsx)(D,{rowData:e,close:P})})},onChangePage:function(e){y(++e)}},P=function(){w({show:!1,content:void 0})};return Object(l.useEffect)((function(){n({columns:[{name:"avatar",label:"Avatar",options:{filter:!0,sort:!0,customBodyRender:function(e){return Object(k.jsx)(m.a,{src:e})}}},{name:"first_name",label:"First Name",options:{filter:!0,sort:!0}},{name:"last_name",label:"Last Name",options:{filter:!0,sort:!0}},{name:"email",label:"E-mail",options:{filter:!0,sort:!0}}],options:C}),y()}),[]),Object(k.jsx)(k.Fragment,{children:Object(k.jsx)(d.a,{container:!0,direction:"column",className:"h-100 align-items-center justify-content-center",children:Object(k.jsxs)(d.a,{item:!0,className:"w-75 border",children:[Object(k.jsx)(u.a,{title:"List of Users",columns:a.columns,data:p.data,options:C}),Object(k.jsx)(E.a,{open:g.show,onClose:P,fullWidth:!0,classes:{paper:"bg-transparent"},children:Object(k.jsx)(O.a,{children:g.content})})]})})})}}}]);
//# sourceMappingURL=11.5019f11d.chunk.js.map