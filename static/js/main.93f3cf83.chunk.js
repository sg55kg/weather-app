(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],[,,,,,,,,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var c=n(1),r=n(5),a=n.n(r),s=(n(11),n(2)),i=(n(12),n(0)),o=function(t){t.city;var e=t.setCity,n=(t.country,t.setCountry);return Object(i.jsx)("div",{className:"user-input-div",children:Object(i.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(t.target.elements.city.value),n(t.target.elements.city.value)},children:[Object(i.jsx)("p",{children:"City"}),Object(i.jsx)("input",{type:"text",name:"city",placeholder:"Enter city",autoComplete:"off"}),Object(i.jsx)("p",{children:"Country"}),Object(i.jsx)("input",{type:"text",name:"country",placeholder:"Enter country",autoComplete:"off"}),Object(i.jsx)("button",{type:"submit",children:"Enter"})]})})},u=function(){return Object(i.jsx)("p",{children:"Loading..."})},j=function(t){var e=t.error;return Object(i.jsxs)("div",{children:[Object(i.jsx)("h3",{children:"There was an issue loading this"}),Object(i.jsx)("p",{children:"".concat(e)})]})},d=function(t){var e=t.day;return Object(i.jsx)("p",{className:"day",children:"".concat(e)})},l=function(t){var e=t.id;return Object(i.jsx)("img",{src:"http://openweathermap.org/img/w/".concat(e,".png"),alt:"pic"})},p=function(t){var e=t.current,n=t.min,c=t.max;return Object(i.jsxs)("div",{className:"temp",children:[Object(i.jsxs)("h4",{children:[e,"\xb0"]}),Object(i.jsxs)("div",{className:"minor-temps",children:[Object(i.jsxs)("p",{children:[n,"\xb0"]}),Object(i.jsxs)("p",{children:[c,"\xb0"]})]})]})},b=(n(14),function(t){var e=t.dataDay,n=t.today;return Object(i.jsxs)("div",{className:n?"today":"weather-card",children:[Object(i.jsx)(d,{day:n?"Today":e.date}),Object(i.jsx)(l,{id:e.icon}),Object(i.jsx)(p,{current:e.current,min:e.min,max:e.max})]})}),m=(n(15),function(t){var e=t.data;return console.log(e),Object(i.jsx)("div",{className:"weather-group",children:e.map((function(t,e){return Object(i.jsx)(b,{today:0===e,dataDay:t},t.date)}))})}),x=n(4),f=n.n(x),h=n(6),O=function(t,e){return e%8===0},y=function(){var t=Object(c.useState)("London"),e=Object(s.a)(t,2),n=e[0],r=e[1],a=Object(c.useState)("GB"),d=Object(s.a)(a,2),l=d[0],p=d[1],b=function(t,e,n){var r=Object(c.useState)(!0),a=Object(s.a)(r,2),i=a[0],o=a[1],u=Object(c.useState)(null),j=Object(s.a)(u,2),d=j[0],l=j[1],p=Object(c.useState)(),b=Object(s.a)(p,2),m=b[0],x=b[1],y=function(t,e,n){var c=n.units,r=void 0===c?"standard":c;return"https://api.openweathermap.org/data/2.5/forecast?q=".concat(t,",").concat(e,"&units=").concat(r,"&appid=").concat("d9ef9f4b2c58b21137d07d1bef1fc433")}(t,e,n);return Object(c.useEffect)((function(){var t=function(){var t=Object(h.a)(f.a.mark((function t(){var e,n,c;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(y);case 2:if(e=t.sent,t.prev=3,e.ok){t.next=6;break}throw new Error("".concat(e.status));case 6:return t.next=8,e.json();case 8:n=t.sent,c=n.list.filter(O).map((function(t){var e=t.dt_txt,n=t.main;return{icon:t.weather[0].icon,current:n.temp,min:n.temp_min,max:n.temp_max,date:new Date(e).toLocaleDateString("en-US",{weekday:"short"})}})),console.log(n),console.log(c),x(c),o(!1),t.next=20;break;case 16:t.prev=16,t.t0=t.catch(3),l(t.t0),o(!1);case 20:case"end":return t.stop()}}),t,null,[[3,16]])})));return function(){return t.apply(this,arguments)}}();t()}),[y]),{loading:i,error:d,data:m}}("".concat(n),"".concat(l),{units:"imperial"}),x=b.data,y=b.loading,v=b.error;return Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)(o,{city:n,setCity:r,country:l,setCountry:p}),y&&!v&&Object(i.jsx)(u,{loading:y}),v&&Object(i.jsx)(j,{error:v}),!v&&!y&&Object(i.jsx)(m,{data:x})]})};a.a.render(Object(i.jsx)(y,{}),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.93f3cf83.chunk.js.map