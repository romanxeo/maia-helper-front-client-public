"use strict";(self.webpackChunkmaia_helper_front_client=self.webpackChunkmaia_helper_front_client||[]).push([[176],{3803:(e,t,a)=>{a.d(t,{A:()=>r});const r={tradingPage:"FuXWGoIo"};var s,l;s='{"tradingPage":"FuXWGoIo"}',l=a(9140)(e.id,{}),e.hot.data&&e.hot.data.value&&e.hot.data.value!==s?e.hot.invalidate():e.hot.accept(),e.hot.dispose((function(e){e.value=s,l()}))},8430:(e,t,a)=>{a.d(t,{A:()=>r});const r={wrapper:"fKG5j6W1",header:"zMDmrAYU",cell:"ayTYW0sF",right:"oDZNlnDX"};var s,l;s='{"wrapper":"fKG5j6W1","header":"zMDmrAYU","cell":"ayTYW0sF","right":"oDZNlnDX"}',l=a(9140)(e.id,{}),e.hot.data&&e.hot.data.value&&e.hot.data.value!==s?e.hot.invalidate():e.hot.accept(),e.hot.dispose((function(e){e.value=s,l()}))},5342:(e,t,a)=>{a.d(t,{A:()=>r});const r={wrapper:"vIFzXaFC"};var s,l;s='{"wrapper":"vIFzXaFC"}',l=a(9140)(e.id,{}),e.hot.data&&e.hot.data.value&&e.hot.data.value!==s?e.hot.invalidate():e.hot.accept(),e.hot.dispose((function(e){e.value=s,l()}))},6326:(e,t,a)=>{a.d(t,{A:()=>r});const r={text:"QayQ1Yqp",red:"ULLufg01",green:"zqFI1gya",blue:"Q70BF6N1",orange:"zhoMDGXF",violet:"HZ91EYYQ"};var s,l;s='{"text":"QayQ1Yqp","red":"ULLufg01","green":"zqFI1gya","blue":"Q70BF6N1","orange":"zhoMDGXF","violet":"HZ91EYYQ"}',l=a(9140)(e.id,{}),e.hot.data&&e.hot.data.value&&e.hot.data.value!==s?e.hot.invalidate():e.hot.accept(),e.hot.dispose((function(e){e.value=s,l()}))},7366:(e,t,a)=>{a.d(t,{A:()=>r});const r={trade:"pl6YYusZ",cell:"hAVHPLtJ",right:"QYP_8Hys",small:"gMh0Q7DI",buttonBlock:"nfVUGjte"};var s,l;s='{"trade":"pl6YYusZ","cell":"hAVHPLtJ","right":"QYP_8Hys","small":"gMh0Q7DI","buttonBlock":"nfVUGjte"}',l=a(9140)(e.id,{}),e.hot.data&&e.hot.data.value&&e.hot.data.value!==s?e.hot.invalidate():e.hot.accept(),e.hot.dispose((function(e){e.value=s,l()}))},4700:(e,t,a)=>{a.d(t,{A:()=>r});const r={wrapper:"jDCocOjj",list:"Sl43_KL6"};var s,l;s='{"wrapper":"jDCocOjj","list":"Sl43_KL6"}',l=a(9140)(e.id,{}),e.hot.data&&e.hot.data.value&&e.hot.data.value!==s?e.hot.invalidate():e.hot.accept(),e.hot.dispose((function(e){e.value=s,l()}))},2176:(e,t,a)=>{a.r(t),a.d(t,{default:()=>O});var r=a(4848),s=a(6540),l=a(5510),i=a(3803),n=a(8430),o=a(6037),c=(0,s.memo)((function(e){var t=e.className;return(0,r.jsx)("div",{className:(0,l.x)(n.A.wrapper,{},[]),children:(0,r.jsxs)("div",{className:(0,l.x)(n.A.header,{},[t]),children:[(0,r.jsx)(o.E,{text:"Coin",className:n.A.cell}),(0,r.jsx)(o.E,{text:"Open $",className:(0,l.x)(n.A.cell,{},[n.A.right])}),(0,r.jsx)(o.E,{text:"Close $",className:(0,l.x)(n.A.cell,{},[n.A.right])}),(0,r.jsx)(o.E,{text:"Margin $",className:(0,l.x)(n.A.cell,{},[n.A.right])}),(0,r.jsx)(o.E,{text:"Quantity ₿",className:(0,l.x)(n.A.cell,{},[n.A.right])}),(0,r.jsx)(o.E,{text:"PNL $",className:(0,l.x)(n.A.cell,{},[n.A.right])}),(0,r.jsx)(o.E,{text:"ROE %",className:(0,l.x)(n.A.cell,{},[n.A.right])}),(0,r.jsx)(o.E,{text:"Start",className:(0,l.x)(n.A.cell,{},[n.A.right])}),(0,r.jsx)(o.E,{text:"Finish",className:(0,l.x)(n.A.cell,{},[n.A.right])}),(0,r.jsx)(o.E,{text:"Status",className:(0,l.x)(n.A.cell,{},[n.A.right])})]})})})),d=a(4700),u=a(1113),h=a(38),x=(0,h.Z0)({name:"tradeHistory",initialState:{trade_history_list:[],limit:10,page:1,realized_pnl:0},reducers:{setTradeHistoryList:function(e,t){var a=0;t.payload.forEach((function(e){a+=e.trade_pnl_current})),e.trade_history_list=t.payload,e.realized_pnl=a},setTradeHistoryLimit:function(e,t){e.limit=t.payload},setTradeHistoryPage:function(e,t){e.page=t.payload}}}),m=x.actions,p=x.reducer,f=a(7366),v=a(8717),A=a(7194),g=a(6326),j=a(7884),_=a(8592),y=a(3655),N=(0,s.memo)((function(e){var t=e.trade_status;return t===y.qr.OPEN?(0,r.jsx)(y.wi,{text:"O",className:g.A.green}):t===y.qr.TAKE_PROFIT?(0,r.jsx)(y.wi,{text:"TP",className:g.A.green}):t===y.qr.STOP_LOSS?(0,r.jsx)(y.wi,{text:"SL",className:g.A.red}):t===y.qr.TREILING_STOP?(0,r.jsx)(y.wi,{text:"TS",className:g.A.violet}):t===y.qr.MANUAL_CLOSE?(0,r.jsx)(y.wi,{text:"MC",className:g.A.blue}):t===y.qr.DIRECTION_SIGNAL?(0,r.jsx)(y.wi,{text:"DS",className:g.A.blue}):t===y.qr.REVERSE_SIGNAL?(0,r.jsx)(y.wi,{text:"RS",className:g.A.orange}):(0,r.jsx)(j.$,{size:"xs",form:"square",children:(0,r.jsx)(_.A,{className:v.A.svgIconS})})})),b=(0,s.memo)((function(e){var t=e.trade,a=e.className,s=new Date(t.trade_create_timestamp).toLocaleString(),i=t.trade_close_timestamp?new Date(t.trade_close_timestamp).toLocaleString():"",n=t.trade_close_timestamp?((t.trade_close_timestamp-t.trade_create_timestamp)/6e4).toFixed(0):0;return(0,r.jsxs)("div",{className:(0,l.x)(f.A.trade,{},[v.A["background_".concat((0,A.ZX)(t.trade_direction),"_primary_active")],a]),children:[(0,r.jsx)(o.E,{title:t.symbol.symbol_name,className:f.A.cell}),(0,r.jsx)(o.E,{title:t.trade_open_price,className:(0,l.x)(f.A.cell,{},[f.A.right])}),(0,r.jsx)(o.E,{title:t.trade_close_price,className:(0,l.x)(f.A.cell,{},[f.A.right])}),(0,r.jsx)(o.E,{title:t.trade_margin,className:(0,l.x)(f.A.cell,{},[f.A.right])}),(0,r.jsx)(o.E,{title:t.trade_quantity,className:(0,l.x)(f.A.cell,{},[f.A.right])}),(0,r.jsx)(o.E,{title:t.trade_pnl_current.toFixed(2),className:(0,l.x)(f.A.cell,{},[f.A.right])}),(0,r.jsx)(o.E,{title:t.trade_roe_current.toFixed(2),className:(0,l.x)(f.A.cell,{},[f.A.right])}),(0,r.jsx)(o.E,{text:s,className:(0,l.x)(f.A.cell,{},[f.A.right,f.A.small])}),(0,r.jsx)(o.E,{text:"".concat(i," (").concat(n,"mins)"),className:(0,l.x)(f.A.cell,{},[f.A.right,f.A.small])}),(0,r.jsx)("div",{className:f.A.buttonBlock,children:(0,r.jsx)(N,{trade_status:t.trade_status})})]})})),E=a(4288),w=(0,h.zD)("tradeHistory/fetchTradeHistoryList",(function(e,t){return a=void 0,r=void 0,l=function(){var a,r,s,l,i,n,o;return function(e,t){var a,r,s,l={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]},i=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return i.next=n(0),i.throw=n(1),i.return=n(2),"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function n(n){return function(o){return function(n){if(a)throw new TypeError("Generator is already executing.");for(;i&&(i=0,n[0]&&(l=0)),l;)try{if(a=1,r&&(s=2&n[0]?r.return:n[0]?r.throw||((s=r.return)&&s.call(r),0):r.next)&&!(s=s.call(r,n[1])).done)return s;switch(r=0,s&&(n=[2&n[0],s.value]),n[0]){case 0:case 1:s=n;break;case 4:return l.label++,{value:n[1],done:!1};case 5:l.label++,r=n[1],n=[0];continue;case 7:n=l.ops.pop(),l.trys.pop();continue;default:if(!((s=(s=l.trys).length>0&&s[s.length-1])||6!==n[0]&&2!==n[0])){l=0;continue}if(3===n[0]&&(!s||n[1]>s[0]&&n[1]<s[3])){l.label=n[1];break}if(6===n[0]&&l.label<s[1]){l.label=s[1],s=n;break}if(s&&l.label<s[2]){l.label=s[2],l.ops.push(n);break}s[2]&&l.ops.pop(),l.trys.pop();continue}n=t.call(e,l)}catch(e){n=[6,e],r=0}finally{a=s=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}([n,o])}}}(this,(function(c){switch(c.label){case 0:a=t.extra,r=t.dispatch,s=t.rejectWithValue,l=(e.page-1)*e.limit,c.label=1;case 1:return c.trys.push([1,3,,4]),[4,a.api.get("/trade/get_trades_history/",{params:{offset:l,limit:e.limit}})];case 2:if(!(i=c.sent()).data)throw new Error;return r(m.setTradeHistoryList((null===(o=i.data.result)||void 0===o?void 0:o.trade_list)||[])),[3,4];case 3:return n=c.sent(),[2,s((0,A.QU)(n))];case 4:return[2]}}))},new((s=void 0)||(s=Promise))((function(e,t){function i(e){try{o(l.next(e))}catch(e){t(e)}}function n(e){try{o(l.throw(e))}catch(e){t(e)}}function o(t){var a;t.done?e(t.value):(a=t.value,a instanceof s?a:new s((function(e){e(a)}))).then(i,n)}o((l=l.apply(a,r||[])).next())}));var a,r,s,l})),L=function(e){return e.tradeHistory},S=a(5739),z=function(){return(0,S.G)(L)||{limit:10,page:1}},F={tradeHistory:p},D=(0,s.memo)((function(e){var t=e.className,a=(0,E.j)();(0,u.c)(F);var i,n=(i=(0,S.G)(L))?i.trade_history_list:[],o=z(),c=o.limit,h=o.page,x=n.map((function(e){return(0,r.jsx)(b,{trade:e},e.trade_uuid)}));return(0,s.useEffect)((function(){a(w({limit:c,page:h}))}),[a,c,h]),(0,r.jsx)("div",{className:(0,l.x)(d.A.wrapper,{},[]),children:(0,r.jsx)("div",{className:(0,l.x)(d.A.list,{},[t]),children:x})})})),P=a(5342),T=a(4390),I=a(4730),k=a(2389),H=a(3247),Y=a(5041),G=(0,s.memo)((function(e){var t,a=e.className,i=(0,E.j)(),n=(0,k.Bd)().t,c=z(),d=c.limit,u=c.page,h=(t=(0,S.G)(L))?t.realized_pnl:0,x=(0,s.useCallback)((function(e,t){i(m.setTradeHistoryLimit(t))}),[i]),p=(0,s.useCallback)((function(e,t){i(m.setTradeHistoryPage(t))}),[i]);return(0,r.jsx)("div",{className:(0,l.x)(P.A.wrapper,{},[]),children:(0,r.jsxs)(T.z,{gap:24,className:a,children:[(0,r.jsxs)(T.z,{gap:8,justify:"between",children:[(0,r.jsx)(o.E,{text:n("Page")}),(0,r.jsx)(I.z,{value:u,keyValue:"trade_history_page",setKeyValue:p,step:1,minValue:0,maxValue:999999})]}),(0,r.jsxs)(T.z,{gap:8,justify:"between",children:[(0,r.jsx)(o.E,{text:n("Size")}),(0,r.jsx)(I.z,{value:d,keyValue:"trade_history_limit",setKeyValue:x,step:10,minValue:10,maxValue:100})]}),(0,r.jsx)(Y.m,{childrenTool:n("Realized PNL Describe"),children:(0,r.jsx)(H.v,{value:"".concat(n("Realized PNL for this page"),": ").concat(h.toFixed(2)," USD"),background:h>0?"green":"red",size:"xs"})})]})})}));const O=(0,s.memo)((function(){return(0,r.jsxs)("div",{className:(0,l.x)(i.A.tradingPage,{},["content"]),children:[(0,r.jsx)(G,{className:"layout-container"}),(0,r.jsx)(c,{className:"layout-container"}),(0,r.jsx)(D,{className:"layout-container"})]})}))}}]);