"use strict";(self.webpackChunkmaia_helper_front_client=self.webpackChunkmaia_helper_front_client||[]).push([[168],{114:(e,a,t)=>{t.d(a,{A:()=>r});const r={body:"ZCKA1h9y",title:"DzSAUahz"};var o,i;o='{"body":"ZCKA1h9y","title":"DzSAUahz"}',i=t(9140)(e.id,{}),e.hot.data&&e.hot.data.value&&e.hot.data.value!==o?e.hot.invalidate():e.hot.accept(),e.hot.dispose((function(e){e.value=o,i()}))},1168:(e,a,t)=>{t.r(a),t.d(a,{default:()=>h});var r=t(4848),o=t(4001),i=t(5510),n=t(6540),c=t(3561),l=t(1417),s=t(3858),d=t(2126),u=t(4155),p=t(7194),m=t(5396),v=t(3602);const h=(0,n.memo)((function(e){var a=e.className,t=(0,m.D)().theme,n=(0,c.d4)(s.L),h=(0,c.d4)(d.c);if(n&&h){var y=[{min:n.min_price,max:n.max_price}];return(0,r.jsxs)("div",{className:(0,i.x)(o.A.body,{},[a]),children:[(0,r.jsx)(l.w,{theme:t,dataPrice:n.price_dataset,dataVolume:n.volume_dataset,priceScaleList:y}),(0,r.jsxs)("div",{className:o.A.dataGrid,children:[(0,r.jsx)(u.N,{value:n.open_price,title:"Price at start of period",accent:"primary",variant:"idle"}),(0,r.jsx)(u.N,{value:n.close_price,title:"Current Price",accent:"primary",variant:"idle"}),(0,r.jsx)(u.N,{value:(0,p.vK)(h.trend_moment),title:"Changing price from last update",background:(0,p.J4)(h.trend_moment),accent:"primary",variant:"idle"}),(0,r.jsx)(u.N,{Icon:v.A,value:Math.abs(h.trend_prediction).toFixed(2),title:"Prediction of Bitcoin trend",background:(0,p.rD)(h.trend_prediction),accent:"primary",variant:"idle"}),(0,r.jsx)(u.N,{value:n.min_price,title:"Minimum price of period",accent:"primary",variant:"idle"}),(0,r.jsx)(u.N,{value:n.max_price,title:"Maximum price of period",accent:"primary",variant:"idle"}),(0,r.jsx)(u.N,{value:(100*n.delta_to_min_price).toFixed(2),title:"Minimum percent of period",accent:"primary",variant:"idle",postfix:" %"}),(0,r.jsx)(u.N,{value:(100*n.delta_to_max_price).toFixed(2),title:"Maximum percent of period",accent:"primary",variant:"idle",postfix:" %"})]})]})}}))},1417:(e,a,t)=>{t.d(a,{w:()=>C});var r,o,i=t(4848),n=t(5510),c=t(6540),l=t(4731),s=t(6728),d=t(7154);function u(){return u=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},u.apply(null,arguments)}const p=function(e){return c.createElement("svg",u({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},e),r||(r=c.createElement("path",{fill:"currentColor",d:"M22 16h2V8h-8v2h6zM8 24h8v-2h-6v-6H8z"})),o||(o=c.createElement("path",{fill:"currentColor",d:"M26 28H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2M6 6v20h20.001L26 6z"})))};var m,v;function h(){return h=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},h.apply(null,arguments)}const y=function(e){return c.createElement("svg",h({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},e),m||(m=c.createElement("path",{fill:"currentColor",d:"M13 17H7a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2m-6 8v-6h6v6z"})),v||(v=c.createElement("path",{fill:"currentColor",d:"M19 21v2h6a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H11a2 2 0 0 0-2 2v6h2V7h14v14"})))};var f=t(8717),x=t(7884),b=t(399),g=t(5788);d.t1.register(d.PP,d.kc,d.FN,d.No,d.E8,d.hE,d.m_,d.s$);var C=(0,c.memo)((function(e){for(var a=e.className,t=e.theme,r=void 0===t?g.S.LIGHT:t,o=e.dataPrice,d=e.dataVolume,u=e.dataTradeOpenPrice,m=e.dataStopLossPrice,v=e.dataTakeProfitPrice,h=e.dataTreilingStopPrice,C=e.priceScaleList,A=(0,c.useRef)(null),k=(0,c.useState)(!1),j=k[0],N=k[1],_=(0,c.useState)(0),P=_[0],U=_[1],w=[],z=o.length;z>0;z--)w.push(z);var S=(0,b.oU)(r,"color","gray","primary"),I=(0,b.oU)(r,"color","gray","secondary"),D={responsive:!0,maintainAspectRatio:!1,interaction:{mode:"index",intersect:!1},animation:{duration:250,easing:"easeInOutCubic"},stacked:!1,plugins:{legend:{display:!0,labels:{color:S,font:{size:13}}}},scales:{x:{grid:{display:!0,drawOnChartArea:!1,drawTicks:!1},ticks:{color:S,maxTicksLimit:10,font:{size:14}},border:{color:S}},y:{beginAtZero:!1,type:"linear",display:!0,position:"left",min:C[P].min,max:C[P].max,grid:{color:I,tickColor:S},ticks:{color:S,stepSize:(C[P].max-C[P].min)/10,font:{size:14}},border:{color:S}},y1:{type:"linear",display:!0,position:"right",grid:{drawOnChartArea:!1,tickColor:S},ticks:{color:S,font:{size:14}},border:{color:S}}}},E={labels:w,datasets:[{type:"line",label:"Price",data:o,backgroundColor:(0,b.oU)(r,"color","violet","secondary","22"),borderColor:(0,b.oU)(r,"color","violet","primary"),yAxisID:"y",pointRadius:0,tension:.4},{type:"bar",label:"Volume",data:d,backgroundColor:(0,b.oU)(r,"color","green","secondary","22"),borderColor:(0,b.oU)(r,"color","green","primary"),yAxisID:"y1",pointRadius:0,tension:.04,fill:!0,borderWidth:2}]};return u&&E.datasets.push({type:"line",label:"Trade Open Price",data:u,backgroundColor:(0,b.oU)(r,"color","yellow","secondary","22"),borderColor:(0,b.oU)(r,"color","yellow","primary"),yAxisID:"y",pointRadius:0,tension:.4}),m&&E.datasets.push({type:"line",label:"Stop Loss Price",data:m,backgroundColor:(0,b.oU)(r,"color","red","secondary","22"),borderColor:(0,b.oU)(r,"color","red","primary"),yAxisID:"y",pointRadius:0,tension:.4}),v&&E.datasets.push({type:"line",label:"Take Profit Price",data:v,backgroundColor:(0,b.oU)(r,"color","blue","secondary","22"),borderColor:(0,b.oU)(r,"color","blue","primary"),yAxisID:"y",pointRadius:0,tension:.4}),h&&E.datasets.push({type:"line",label:"Treiling Stop Price",data:h,backgroundColor:(0,b.oU)(r,"color","orange","secondary","22"),borderColor:(0,b.oU)(r,"color","orange","primary"),yAxisID:"y",pointRadius:0,tension:.4}),(0,c.useEffect)((function(){return A.current=setTimeout((function(){N(!0)}),150),function(){A.current&&clearTimeout(A.current)}}),[]),(0,i.jsx)("div",{className:(0,n.x)(s.A.chart,{},[a]),children:(0,i.jsx)("div",{className:s.A.inner,children:(0,i.jsxs)("div",{className:s.A.content,children:[j&&(0,i.jsx)(l.t1,{type:"line",data:E,options:D}),C.length>1&&(0,i.jsx)(x.$,{size:"xs",form:"square",className:s.A.scaleButton,onClick:function(){U((function(e){return C.length-1===e?0:e+1}))},children:P%2?(0,i.jsx)(y,{className:f.A.svgIconS}):(0,i.jsx)(p,{className:f.A.svgIconS})})]})})})}))},4001:(e,a,t)=>{t.d(a,{A:()=>r});const r={body:"eHxKUQVt",dataGrid:"DFIPgmUz"};var o,i;o='{"body":"eHxKUQVt","dataGrid":"DFIPgmUz"}',i=t(9140)(e.id,{}),e.hot.data&&e.hot.data.value&&e.hot.data.value!==o?e.hot.invalidate():e.hot.accept(),e.hot.dispose((function(e){e.value=o,i()}))},4155:(e,a,t)=>{t.d(a,{N:()=>l});var r=t(4848),o=t(114),i=t(5510),n=t(6540),c=t(3247),l=(0,n.memo)((function(e){var a=e.title,t=e.Icon,n=e.value,l=e.className,s=e.background,d=void 0===s?"gray":s,u=e.variant,p=void 0===u?"active":u,m=e.accent,v=void 0===m?"secondary":m,h=e.postfix,y=e.prefix,f=e.onClick;return(0,r.jsxs)("div",{className:(0,i.x)(o.A.body,{},[l]),children:[(0,r.jsx)("div",{className:o.A.title,children:a}),(0,r.jsx)(c.v,{Icon:t,value:n,background:d,variant:p,accent:v,postfix:h,prefix:y,onClick:f})]})}))},6728:(e,a,t)=>{t.d(a,{A:()=>r});const r={chart:"Nf49qyRY",inner:"SyUFKHFm",content:"vofQC9XE",scaleButton:"jbA2c87p"};var o,i;o='{"chart":"Nf49qyRY","inner":"SyUFKHFm","content":"vofQC9XE","scaleButton":"jbA2c87p"}',i=t(9140)(e.id,{}),e.hot.data&&e.hot.data.value&&e.hot.data.value!==o?e.hot.invalidate():e.hot.accept(),e.hot.dispose((function(e){e.value=o,i()}))}}]);