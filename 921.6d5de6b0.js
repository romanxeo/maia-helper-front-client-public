"use strict";(self.webpackChunkmaia_helper_front_client=self.webpackChunkmaia_helper_front_client||[]).push([[921],{114:(e,t,a)=>{a.d(t,{A:()=>r});const r={body:"ZCKA1h9y",title:"DzSAUahz"};var n,o;n='{"body":"ZCKA1h9y","title":"DzSAUahz"}',o=a(9140)(e.id,{}),e.hot.data&&e.hot.data.value&&e.hot.data.value!==n?e.hot.invalidate():e.hot.accept(),e.hot.dispose((function(e){e.value=n,o()}))},1417:(e,t,a)=>{a.d(t,{w:()=>w});var r,n,o=a(4848),i=a(5510),l=a(6540),s=a(4731),c=a(6728),u=a(7154);function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)({}).hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},d.apply(null,arguments)}const p=function(e){return l.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},e),r||(r=l.createElement("path",{fill:"currentColor",d:"M22 16h2V8h-8v2h6zM8 24h8v-2h-6v-6H8z"})),n||(n=l.createElement("path",{fill:"currentColor",d:"M26 28H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2M6 6v20h20.001L26 6z"})))};var h,f;function v(){return v=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)({}).hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},v.apply(null,arguments)}const y=function(e){return l.createElement("svg",v({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},e),h||(h=l.createElement("path",{fill:"currentColor",d:"M13 17H7a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2m-6 8v-6h6v6z"})),f||(f=l.createElement("path",{fill:"currentColor",d:"M19 21v2h6a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H11a2 2 0 0 0-2 2v6h2V7h14v14"})))};var m=a(8717),b=a(7884),g=a(399),x=a(5788);u.t1.register(u.PP,u.kc,u.FN,u.No,u.E8,u.hE,u.m_,u.s$);var w=(0,l.memo)((function(e){for(var t=e.className,a=e.theme,r=void 0===a?x.S.LIGHT:a,n=e.dataPrice,u=e.dataVolume,d=e.dataTradeOpenPrice,h=e.dataStopLossPrice,f=e.dataTakeProfitPrice,v=e.dataTreilingStopPrice,w=e.priceScaleList,j=(0,l.useRef)(null),_=(0,l.useState)(!1),k=_[0],A=_[1],C=(0,l.useState)(0),S=C[0],E=C[1],N=[],P=n.length;P>0;P--)N.push(P);var I=(0,g.oU)(r,"color","gray","primary"),U=(0,g.oU)(r,"color","gray","secondary"),z={responsive:!0,maintainAspectRatio:!1,interaction:{mode:"index",intersect:!1},animation:{duration:250,easing:"easeInOutCubic"},stacked:!1,plugins:{legend:{display:!0,labels:{color:I,font:{size:13}}}},scales:{x:{grid:{display:!0,drawOnChartArea:!1,drawTicks:!1},ticks:{color:I,maxTicksLimit:10,font:{size:14}},border:{color:I}},y:{beginAtZero:!1,type:"linear",display:!0,position:"left",min:w[S].min,max:w[S].max,grid:{color:U,tickColor:I},ticks:{color:I,stepSize:(w[S].max-w[S].min)/10,font:{size:14}},border:{color:I}},y1:{type:"linear",display:!0,position:"right",grid:{drawOnChartArea:!1,tickColor:I},ticks:{color:I,font:{size:14}},border:{color:I}}}},T={labels:N,datasets:[{type:"line",label:"Price",data:n,backgroundColor:(0,g.oU)(r,"color","violet","secondary","22"),borderColor:(0,g.oU)(r,"color","violet","primary"),yAxisID:"y",pointRadius:0,tension:.4},{type:"bar",label:"Volume",data:u,backgroundColor:(0,g.oU)(r,"color","green","secondary","22"),borderColor:(0,g.oU)(r,"color","green","primary"),yAxisID:"y1",pointRadius:0,tension:.04,fill:!0,borderWidth:2}]};return d&&T.datasets.push({type:"line",label:"Trade Open Price",data:d,backgroundColor:(0,g.oU)(r,"color","yellow","secondary","22"),borderColor:(0,g.oU)(r,"color","yellow","primary"),yAxisID:"y",pointRadius:0,tension:.4}),h&&T.datasets.push({type:"line",label:"Stop Loss Price",data:h,backgroundColor:(0,g.oU)(r,"color","red","secondary","22"),borderColor:(0,g.oU)(r,"color","red","primary"),yAxisID:"y",pointRadius:0,tension:.4}),f&&T.datasets.push({type:"line",label:"Take Profit Price",data:f,backgroundColor:(0,g.oU)(r,"color","blue","secondary","22"),borderColor:(0,g.oU)(r,"color","blue","primary"),yAxisID:"y",pointRadius:0,tension:.4}),v&&T.datasets.push({type:"line",label:"Treiling Stop Price",data:v,backgroundColor:(0,g.oU)(r,"color","orange","secondary","22"),borderColor:(0,g.oU)(r,"color","orange","primary"),yAxisID:"y",pointRadius:0,tension:.4}),(0,l.useEffect)((function(){return j.current=setTimeout((function(){A(!0)}),150),function(){j.current&&clearTimeout(j.current)}}),[]),(0,o.jsx)("div",{className:(0,i.x)(c.A.chart,{},[t]),children:(0,o.jsx)("div",{className:c.A.inner,children:(0,o.jsxs)("div",{className:c.A.content,children:[k&&(0,o.jsx)(s.t1,{type:"line",data:T,options:z}),w.length>1&&(0,o.jsx)(b.$,{size:"xs",form:"square",className:c.A.scaleButton,onClick:function(){E((function(e){return w.length-1===e?0:e+1}))},children:S%2?(0,o.jsx)(y,{className:m.A.svgIconS}):(0,o.jsx)(p,{className:m.A.svgIconS})})]})})})}))},1834:(e,t,a)=>{a.d(t,{A:()=>r});const r={skeleton:"vZEwYrlg",shimmer:"WwKm8gKT"};var n,o;n='{"skeleton":"vZEwYrlg","shimmer":"WwKm8gKT"}',o=a(9140)(e.id,{}),e.hot.data&&e.hot.data.value&&e.hot.data.value!==n?e.hot.invalidate():e.hot.accept(),e.hot.dispose((function(e){e.value=n,o()}))},4155:(e,t,a)=>{a.d(t,{N:()=>s});var r=a(4848),n=a(114),o=a(5510),i=a(6540),l=a(3247),s=(0,i.memo)((function(e){var t=e.title,a=e.Icon,i=e.value,s=e.className,c=e.background,u=void 0===c?"gray":c,d=e.variant,p=void 0===d?"active":d,h=e.accent,f=void 0===h?"secondary":h,v=e.postfix,y=e.prefix,m=e.onClick;return(0,r.jsxs)("div",{className:(0,o.x)(n.A.body,{},[s]),children:[(0,r.jsx)("div",{className:n.A.title,children:t}),(0,r.jsx)(l.v,{Icon:a,value:i,background:u,variant:p,accent:f,postfix:v,prefix:y,onClick:m})]})}))},4900:(e,t,a)=>{a.d(t,{A:()=>r});const r={container:"BCFGEs6E"};var n,o;n='{"container":"BCFGEs6E"}',o=a(9140)(e.id,{}),e.hot.data&&e.hot.data.value&&e.hot.data.value!==n?e.hot.invalidate():e.hot.accept(),e.hot.dispose((function(e){e.value=n,o()}))},6728:(e,t,a)=>{a.d(t,{A:()=>r});const r={chart:"Nf49qyRY",inner:"SyUFKHFm",content:"vofQC9XE",scaleButton:"jbA2c87p"};var n,o;n='{"chart":"Nf49qyRY","inner":"SyUFKHFm","content":"vofQC9XE","scaleButton":"jbA2c87p"}',o=a(9140)(e.id,{}),e.hot.data&&e.hot.data.value&&e.hot.data.value!==n?e.hot.invalidate():e.hot.accept(),e.hot.dispose((function(e){e.value=n,o()}))},7921:(e,t,a)=>{a.r(t),a.d(t,{default:()=>N});var r=a(4848),n=a(8380),o=a(6540),i=a(1417),l=a(4155),s=a(5739),c=a(7673),u=a(4900),d=a(6037),p=a(2393),h=a(5510),f=(0,o.memo)((function(e){var t=e.signal_history,a=e.className,n=new Date(t.created_at);return(0,r.jsxs)(p.m,{variant:"hover",padding:"s",className:(0,h.x)(u.A.container,{},[a]),children:[(0,r.jsx)(d.E,{title:t.signal_direction_created.toUpperCase(),whiteSpace:!0}),(0,r.jsx)(d.E,{text:"".concat(t.signal_price_enter," $"),whiteSpace:!0}),(0,r.jsx)(d.E,{title:"".concat(t.signal_percent.toFixed(2)," %"),whiteSpace:!0}),(0,r.jsx)(d.E,{text:"".concat(t.signal_age_minutes," mins ago"),whiteSpace:!0}),(0,r.jsx)(d.E,{text:n.toISOString().slice(0,10),whiteSpace:!0}),(0,r.jsx)(d.E,{text:n.toTimeString().slice(0,5),whiteSpace:!0})]})})),v=a(4288),y=a(38),m=a(7194),b=a(7048),g=(0,y.zD)("signal/fetchSignalHistoryData",(function(e,t){return a=void 0,r=void 0,o=function(){var a,r,n,o,i;return function(e,t){var a,r,n,o={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]},i=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return i.next=l(0),i.throw=l(1),i.return=l(2),"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(l){return function(s){return function(l){if(a)throw new TypeError("Generator is already executing.");for(;i&&(i=0,l[0]&&(o=0)),o;)try{if(a=1,r&&(n=2&l[0]?r.return:l[0]?r.throw||((n=r.return)&&n.call(r),0):r.next)&&!(n=n.call(r,l[1])).done)return n;switch(r=0,n&&(l=[2&l[0],n.value]),l[0]){case 0:case 1:n=l;break;case 4:return o.label++,{value:l[1],done:!1};case 5:o.label++,r=l[1],l=[0];continue;case 7:l=o.ops.pop(),o.trys.pop();continue;default:if(!((n=(n=o.trys).length>0&&n[n.length-1])||6!==l[0]&&2!==l[0])){o=0;continue}if(3===l[0]&&(!n||l[1]>n[0]&&l[1]<n[3])){o.label=l[1];break}if(6===l[0]&&o.label<n[1]){o.label=n[1],n=l;break}if(n&&o.label<n[2]){o.label=n[2],o.ops.push(l);break}n[2]&&o.ops.pop(),o.trys.pop();continue}l=t.call(e,o)}catch(e){l=[6,e],r=0}finally{a=n=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,s])}}}(this,(function(l){switch(l.label){case 0:a=t.extra,r=t.dispatch,n=t.rejectWithValue,l.label=1;case 1:return l.trys.push([1,3,,4]),[4,a.api.get("/signal/get_signal_history_by_uuid/".concat(e,"/"))];case 2:if(!(o=l.sent()).data.result)throw new Error;return r(b._E.setSignalHistoryData(o.data.result)),[3,4];case 3:return i=l.sent(),[2,n((0,m.QU)(i))];case 4:return[2]}}))},new((n=void 0)||(n=Promise))((function(e,t){function i(e){try{s(o.next(e))}catch(e){t(e)}}function l(e){try{s(o.throw(e))}catch(e){t(e)}}function s(t){var a;t.done?e(t.value):(a=t.value,a instanceof n?a:new n((function(e){e(a)}))).then(i,l)}s((o=o.apply(a,r||[])).next())}));var a,r,n,o})),x=a(1834),w=(0,o.memo)((function(e){var t=e.className,a={width:e.width,height:e.height,borderRadius:e.borderRadius};return(0,r.jsx)("div",{className:(0,h.x)(x.A.skeleton,{},[t]),style:a})})),j=a(4390),_=a(6844),k=a(9194),A=a(6489),C=a(1503),S=a(5396),E=Array.from({length:10},(function(e,t){return t})).map((function(e,t){return(0,r.jsx)(w,{width:"9%",height:"148px",borderRadius:"8px"},t)}));const N=(0,o.memo)((function(e){var t,a,u=e.className,p=(0,v.j)(),h=(0,S.D)().theme,y=(0,C.H)(),m=(t=null==y?void 0:y.signal_uuid,a=(0,s.G)(c.V),t&&a&&a.signal_history_dict[t]?a.signal_history_dict[t]:[]),b=(0,o.useState)(!1),x=b[0],w=b[1],N=(0,o.useCallback)((function(e){return t=void 0,a=void 0,n=function(){return function(e,t){var a,r,n,o={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]},i=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return i.next=l(0),i.throw=l(1),i.return=l(2),"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(l){return function(s){return function(l){if(a)throw new TypeError("Generator is already executing.");for(;i&&(i=0,l[0]&&(o=0)),o;)try{if(a=1,r&&(n=2&l[0]?r.return:l[0]?r.throw||((n=r.return)&&n.call(r),0):r.next)&&!(n=n.call(r,l[1])).done)return n;switch(r=0,n&&(l=[2&l[0],n.value]),l[0]){case 0:case 1:n=l;break;case 4:return o.label++,{value:l[1],done:!1};case 5:o.label++,r=l[1],l=[0];continue;case 7:l=o.ops.pop(),o.trys.pop();continue;default:if(!((n=(n=o.trys).length>0&&n[n.length-1])||6!==l[0]&&2!==l[0])){o=0;continue}if(3===l[0]&&(!n||l[1]>n[0]&&l[1]<n[3])){o.label=l[1];break}if(6===l[0]&&o.label<n[1]){o.label=n[1],n=l;break}if(n&&o.label<n[2]){o.label=n[2],o.ops.push(l);break}n[2]&&o.ops.pop(),o.trys.pop();continue}l=t.call(e,o)}catch(e){l=[6,e],r=0}finally{a=n=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,s])}}}(this,(function(t){switch(t.label){case 0:return e?(w(!0),[4,p(g(e))]):[2];case 1:return t.sent(),w(!1),[2]}}))},new((r=void 0)||(r=Promise))((function(e,o){function i(e){try{s(n.next(e))}catch(e){o(e)}}function l(e){try{s(n.throw(e))}catch(e){o(e)}}function s(t){var a;t.done?e(t.value):(a=t.value,a instanceof r?a:new r((function(e){e(a)}))).then(i,l)}s((n=n.apply(t,a||[])).next())}));var t,a,r,n}),[p]);if((0,o.useEffect)((function(){N(null==y?void 0:y.signal_uuid)}),[N,y]),y){var P=[{min:y.parsed_min_price,max:y.parsed_max_price}],I=m.map((function(e){return(0,r.jsx)(f,{signal_history:e,className:n.A.historyItem},e.signal_uuid)}));return(0,r.jsxs)(j.T,{fullw:!0,gap:12,className:u,children:[(0,r.jsx)(i.w,{theme:h,dataPrice:y.parsed_price_dataset,dataVolume:y.parsed_volume_dataset,priceScaleList:P}),(0,r.jsxs)(j.z,{fullw:!0,justify:"between",gap:12,children:[(0,r.jsxs)(j.z,{gap:8,children:[(0,r.jsx)(d.E,{title:y.symbol.symbol_name}),(0,r.jsx)(_.ru,{platform:y.platform}),y.neuron&&(0,r.jsx)(k.M,{neuron:y.neuron})]}),(0,r.jsx)(j.z,{gap:8,children:(0,r.jsx)(A.$,{signal:y})})]}),(0,r.jsxs)("div",{className:n.A.dataGrid,children:[(0,r.jsx)(l.N,{value:y.parsed_open_price,title:"Price at start of period",accent:"primary",variant:"idle"}),(0,r.jsx)(l.N,{value:y.parsed_close_price,title:"Current Price",accent:"primary",variant:"idle"}),(0,r.jsx)(l.N,{value:y.parsed_min_price,title:"Minimum price of period",accent:"primary",variant:"idle"}),(0,r.jsx)(l.N,{value:y.parsed_max_price,title:"Maximum price of period",accent:"primary",variant:"idle"})]}),(0,r.jsx)(j.z,{fullw:!0,justify:"between",children:x?E:I})]})}}))},8380:(e,t,a)=>{a.d(t,{A:()=>r});const r={dataGrid:"JyAZgVVI",historyItem:"GNyx1Php"};var n,o;n='{"dataGrid":"JyAZgVVI","historyItem":"GNyx1Php"}',o=a(9140)(e.id,{}),e.hot.data&&e.hot.data.value&&e.hot.data.value!==n?e.hot.invalidate():e.hot.accept(),e.hot.dispose((function(e){e.value=n,o()}))}}]);