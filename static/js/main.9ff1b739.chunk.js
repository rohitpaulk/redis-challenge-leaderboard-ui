(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{44:function(e,t,c){e.exports=c.p+"static/media/crown.c7e9fe22.png"},46:function(e,t,c){e.exports=c(86)},7:function(e,t,c){e.exports={container:"styles_container__3jOMG",board:"styles_board__8b-4F",title:"styles_title__1Pv4S",icon:"styles_icon__2jYrZ","brand-title":"styles_brand-title__1_f0O",row:"styles_row__3Y41K","fade-in-up":"styles_fade-in-up__34Sna",index:"styles_index__XjcDa",crown:"styles_crown__3KYbk",wreath:"styles_wreath__1UBe8",name:"styles_name__Tn-oF",stages:"styles_stages__1_hRn",stage:"styles_stage__MVS14",status:"styles_status__1tRQw",success:"styles_success__3BG6q",pending:"styles_pending__2fih1",pulsate:"styles_pulsate__32eHa",failed:"styles_failed__20b3S",future:"styles_future__Wu_Va",bar:"styles_bar__1U0FP",points:"styles_points__3qlPm","stage-1":"styles_stage-1__1jtY5"}},83:function(e,t,c){},86:function(e,t,c){"use strict";c.r(t);var a=c(17),n=c(1),r=c.n(n),l=c(38),s=c.n(l),o=c(14),i=c(39),u=c(23),p=(c(42),c(45)),C=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function d(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var E,h=c(4),m={HOME_FETCH_REQUEST:"HOME_FETCH_REQUEST",HOME_FETCH_SUCCESS:"HOME_FETCH_SUCCESS",HOME_FETCH_FAILURE:"HOME_FETCH_FAILURE"};function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{type:m.HOME_FETCH_SUCCESS,payload:e}}function v(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{type:m.HOME_FETCH_FAILURE,payload:e}}!function(e){e.REQUEST="REQUEST",e.SUCCESS="SUCCESS",e.FAILURE="FAILURE",e.DORMANT="DORMANT"}(E||(E={}));var M,_={data:null,status:E.DORMANT},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m.HOME_FETCH_REQUEST:return Object(h.a)({},e,{status:E.REQUEST});case m.HOME_FETCH_SUCCESS:return Object(h.a)({},e,{data:t.payload,status:E.SUCCESS});case m.HOME_FETCH_FAILURE:return Object(h.a)({},e,{data:null,status:E.FAILURE});default:return e}},w=Object(o.combineReducers)({home:g}),b=c(8),z=c.n(b),O=c(15),y=c(18),j=c(11),S=c.n(j);!function(e){e.GENERIC="GENERIC"}(M||(M={}));var F=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:M.GENERIC;switch(e="string"===typeof e?JSON.parse(e):e,t){case M.GENERIC:return x(e);default:return e}},R=function(e){switch(arguments.length>1&&void 0!==arguments[1]?arguments[1]:M.GENERIC){case M.GENERIC:return L(e);default:return e}},x=function(e){return Object(h.a)({},e)},L=function(e){return Object(h.a)({},e)},N=(c(43),3e4),T=function(e){return"https://redis-challenge-leaderboard.herokuapp.com"+e};var k=function(){var e=Object(y.a)(z.a.mark(function e(t){var c,a,n,r=arguments;return z.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return c=r.length>1&&void 0!==r[1]?r[1]:{},a=r.length>2&&void 0!==r[2]?r[2]:M.GENERIC,c=H(Object(h.a)({},c,{method:"get"}),a),e.next=5,S()(Object(h.a)({url:T(t)},c));case 5:return n=e.sent,e.abrupt("return",n.data);case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}();function H(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:M.GENERIC,c=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t.formData&&(e=Object(h.a)({},t.headers,{"Content-Type":"application/x-www-form-urlencoded"}));return Object(h.a)({},e)}(e||{});return delete e.formData,delete(e="get"===e.method?Object(h.a)({},e,{params:e.body}):Object(h.a)({},e,{data:e.body})).body,Object(h.a)({headers:c,transformRequest:[].concat(Object(a.a)(S.a.defaults.transformRequest),[function(e){return R(e,t)}]),transformResponse:[].concat(Object(a.a)(S.a.defaults.transformResponse),[function(e){return F(e,t)}]),timeout:N},e)}var U={JSON:"/json"},I=z.a.mark(A);function A(){var e;return z.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,k(U.JSON);case 3:return e=t.sent,t.next=6,Object(O.a)(f(e));case 6:return t.abrupt("return",t.sent);case 9:return t.prev=9,t.t0=t.catch(0),console.error(t.t0),t.next=14,Object(O.a)(v());case 14:return t.abrupt("return",t.sent);case 15:case"end":return t.stop()}},I,this,[[0,9]])}var B=[z.a.mark(function e(){return z.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.b)(m.HOME_FETCH_REQUEST,A);case 2:case"end":return e.stop()}},e,this)})],G=(c(83),c(19)),Q=c(20),D=c(24),W=c(21),P=c(25),J=c(88),Y=c(29),q=c.n(Y);function X(){return(X=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var c=arguments[t];for(var a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a])}return e}).apply(this,arguments)}var K=r.a.createElement("g",null,r.a.createElement("path",{d:"M245.969687,168.943256 C232.308259,176.064479 161.536048,205.163388 146.468577,213.017633 C131.402107,220.873879 123.031844,220.797876 111.129473,215.107699 C99.2271007,209.417521 23.9127473,178.99557 10.3463234,172.511368 C3.56511141,169.270267 0,166.535181 0,163.9511 L0,138.075292 C0,138.075292 98.0490639,116.729625 113.878559,111.051447 C129.707053,105.372269 135.199225,105.167264 148.669646,110.101418 C162.141067,115.036572 242.686583,129.569026 256,134.445178 C256,134.445178 255.993999,157.5559 255.993999,159.954975 C255.996,162.513055 252.923904,165.319143 245.969687,168.943256",fill:"#912626"}),r.a.createElement("path",{d:"M245.964922,143.220067 C232.303935,150.33806 161.534003,179.438032 146.467017,187.292024 C131.401031,195.149018 123.031039,195.072017 111.12905,189.382023 C99.2260618,183.696028 23.9151336,153.269057 10.3491466,146.788063 C-3.21684053,140.303069 -3.50184026,135.840074 9.82514705,130.622079 C23.1511343,125.402084 98.0490629,96.0171117 113.880047,90.3381172 C129.708033,84.6611226 135.199028,84.4541228 148.669014,89.3901181 C162.140002,94.3241134 232.487935,122.325087 245.799922,127.200082 C259.11491,132.081078 259.625908,136.099073 245.964922,143.220067",fill:"#C6302B"}),r.a.createElement("path",{d:"M245.969687,127.074354 C232.308259,134.195577 161.536048,163.294486 146.468577,171.151732 C131.402107,179.004977 123.031844,178.928975 111.129473,173.238797 C99.2261007,167.551619 23.9127473,137.126668 10.3463234,130.642465 C3.56511141,127.401364 0,124.669279 0,122.085199 L0,96.2063895 C0,96.2063895 98.0490639,74.8617226 113.878559,69.182545 C129.707053,63.5043676 135.199225,63.2983612 148.669646,68.2325154 C162.141067,73.1676697 242.686583,87.6971237 256,92.5742761 C256,92.5742761 255.993999,115.684998 255.993999,118.087073 C255.996,120.644153 252.923904,123.450241 245.969687,127.074354",fill:"#912626"}),r.a.createElement("path",{d:"M245.964922,101.351164 C232.303935,108.471157 161.534003,137.569129 146.467017,145.426122 C131.401031,153.280114 123.031039,153.203114 111.12905,147.51312 C99.2260618,141.827125 23.9151336,111.401154 10.3491466,104.91916 C-3.21684053,98.4361664 -3.50184026,93.9721706 9.82514705,88.7521756 C23.1511343,83.5351806 98.0490629,54.1482087 113.880047,48.4702141 C129.708033,42.7922195 135.199028,42.5862197 148.669014,47.521215 C162.140002,52.4552102 232.487935,80.4541835 245.799922,85.3311789 C259.11491,90.2101742 259.625908,94.2301704 245.964922,101.350163 L245.964922,101.351164",fill:"#C6302B"}),r.a.createElement("path",{d:"M245.969687,83.6525661 C232.308259,90.7737887 161.536048,119.873698 146.468577,127.730944 C131.402107,135.585189 123.031844,135.508187 111.129473,129.818008 C99.2261007,124.130831 23.9127473,93.7048802 10.3463234,87.2226777 C3.56511141,83.9805764 0,81.2474909 0,78.6654102 L0,52.7856015 C0,52.7856015 98.0490639,31.4419345 113.878559,25.7637571 C129.707053,20.0845797 135.199225,19.8795733 148.669646,24.8137275 C162.141067,29.7488817 242.686583,44.2783357 256,49.1554881 C256,49.1554881 255.993999,72.2662103 255.993999,74.6672853 C255.996,77.2223652 252.923904,80.0284528 245.969687,83.6525661",fill:"#912626"}),r.a.createElement("path",{d:"M245.964922,57.929387 C232.303935,65.0493802 161.534003,94.1493524 146.467017,102.004345 C131.401031,109.858338 123.031039,109.781338 111.12905,104.093343 C99.2270617,98.4053484 23.9151336,67.9813773 10.3491466,61.4983836 C-3.21684053,55.0153898 -3.50184026,50.550394 9.82514705,45.331399 C23.1511343,40.113404 98.0490629,10.729432 113.880047,5.04943744 C129.708033,-0.629557148 135.199028,-0.833556953 148.669014,4.10143834 C162.140002,9.03643363 232.487935,37.0354069 245.799922,41.9124022 C259.11491,46.7883976 259.625908,50.8093938 245.964922,57.929387",fill:"#C6302B"}),r.a.createElement("path",{d:"M159.282977,32.7570853 L137.273922,35.0422326 L132.346419,46.8976124 L124.387597,33.667969 L98.973147,31.383814 L117.936992,24.5452403 L112.247442,14.0472558 L130.001736,20.9910078 L146.739969,15.5108217 L142.21631,26.3660155 L159.282977,32.7570853",fill:"#FFFFFF"}),r.a.createElement("path",{d:"M131.03169,90.2747287 L89.9546047,73.2378295 L148.815752,64.2034109 L131.03169,90.2747287",fill:"#FFFFFF"}),r.a.createElement("path",{d:"M74.0816124,39.3466047 C91.4568682,39.3466047 105.541829,44.8069457 105.541829,51.5413333 C105.541829,58.2767132 91.4568682,63.736062 74.0816124,63.736062 C56.7073488,63.736062 42.6213953,58.2767132 42.6213953,51.5413333 C42.6213953,44.8069457 56.7073488,39.3466047 74.0816124,39.3466047",fill:"#FFFFFF"}),r.a.createElement("path",{d:"M185.29476,35.9977674 L220.130605,49.7642171 L185.324527,63.5167752 L185.29476,35.9977674",fill:"#621B1C"}),r.a.createElement("path",{d:"M146.754853,51.2426667 L185.29476,35.9977674 L185.324527,63.5167752 L181.546047,64.9952248 L146.754853,51.2426667",fill:"#9A2928"})),V=function(e){return r.a.createElement("svg",X({width:"256px",height:"220px",viewBox:"0 0 256 220",version:1.1,xmlnsXlink:"http://www.w3.org/1999/xlink",preserveAspectRatio:"xMidYMid"},e),K)};c.p;function Z(){return(Z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var c=arguments[t];for(var a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a])}return e}).apply(this,arguments)}var $=r.a.createElement("path",{d:"M93.146,53.175c2.949-1.872,3.821-6.621,4.664-8.872l0.024-0.169l-0.17,0.017c-4.612,0.469-7.021,2.95-8.284,4.802  c0.308-1.953,0.468-3.929,0.468-5.919c0-0.024-0.001-0.047-0.001-0.071l0.02,0.027c0,0,2.312-0.332,4.461-2.856  c2.264-2.66,1.694-7.454,1.835-9.854l-0.027-0.169l-0.157,0.067c-4.351,1.846-5.896,5.012-6.531,7.159  c-0.242-1.709-0.596-3.394-1.051-5.045c0.445-0.238,2.202-1.305,3.388-3.925c1.438-3.183-0.437-7.632-0.966-9.977l-0.072-0.155  l-0.133,0.107c-3.421,2.776-4.181,5.979-4.282,8.215c-0.536-1.193-1.13-2.36-1.782-3.499l0.024,0.011c0,0,1.777-1.425,2.328-4.61  c0.581-3.356-2.275-7.098-3.348-9.182l-0.106-0.128l-0.099,0.134c-2.648,3.588-2.477,6.911-1.983,9.04  c-0.399-0.513-0.813-1.018-1.24-1.514c-0.071-1.121-0.642-2.509-1.95-3.98c-1.437-1.618-4.195-3.92-9.004-3.632l-0.166,0.01  l0.051,0.159c1.163,2.035,2.745,6.469,5.876,7.809c1.76,0.753,3.229,0.81,4.141,0.731c0.478,0.559,0.938,1.13,1.381,1.712  c-0.042-0.017-0.081-0.033-0.122-0.049c-2.021-0.772-5.531-1.543-9.664,0.929l-0.144,0.085l0.117,0.118  c1.971,1.269,5.419,4.474,8.815,4.22c1.728-0.129,2.98-0.656,3.776-1.119c0.786,1.371,1.484,2.787,2.095,4.239  c-0.113-0.087-0.231-0.175-0.353-0.261c-1.809-1.286-5.096-2.953-9.835-1.561l-0.164,0.048l0.087,0.147  c1.63,1.767,4.231,5.834,7.668,6.454c1.856,0.335,3.302,0.088,4.204-0.188c0.455,1.647,0.804,3.329,1.038,5.036  c-0.009-0.011-0.016-0.021-0.024-0.032c-1.382-1.736-4.079-4.248-9.02-4.222l-0.17,0.001l0.042,0.166  c1.077,2.149,2.451,6.778,5.582,8.325c1.611,0.797,3.008,0.981,3.953,0.984c0,0.032,0.001,0.064,0.001,0.096  c0,2.039-0.171,4.064-0.508,6.063c-0.019-0.049-0.035-0.098-0.055-0.148c-0.807-2.068-2.642-5.264-7.368-6.698l-0.163-0.05  l-0.009,0.17c0.395,2.372,0.339,7.2,2.873,9.604c1.321,1.253,2.618,1.841,3.521,2.118c-0.572,1.825-1.288,3.616-2.138,5.365  c-0.003-0.17-0.009-0.344-0.021-0.523c-0.136-2.215-0.903-5.818-4.965-8.631l-0.142-0.097l-0.06,0.16  c-0.35,2.379-1.88,6.958-0.203,10.021c0.998,1.822,2.232,2.814,3.016,3.301c-1.044,1.63-2.214,3.212-3.504,4.734  c0.032-0.146,0.062-0.294,0.089-0.446c0.407-2.275,0.518-6.111-2.901-9.956l-0.118-0.133l-0.101,0.146  c-0.938,2.32-3.614,6.578-2.67,10.091c0.546,2.031,1.509,3.32,2.18,4.021c-0.188,0.178-0.374,0.356-0.564,0.532  c-1.361,1.253-2.711,2.37-4.043,3.374c0.043-0.107,0.087-0.214,0.127-0.326c0.845-2.292,1.667-6.265-1.181-10.897l-0.099-0.161  l-0.133,0.135c-1.405,2.242-4.976,6.18-4.642,10.01c0.173,1.992,0.81,3.421,1.351,4.31c-1.962,1.158-3.866,2.094-5.695,2.87  c0.175-0.195,0.351-0.402,0.524-0.626c1.399-1.802,3.255-5.104,2.031-10.033l-0.042-0.17l-0.155,0.082  c-1.886,1.598-6.177,4.091-6.964,7.595c-0.509,2.264-0.136,3.958,0.154,4.812c-2.058,0.672-3.977,1.184-5.719,1.649  c-0.014,0.003-0.028,0.007-0.042,0.01c-0.014-0.003-0.028-0.007-0.042-0.01c-1.743-0.466-3.662-0.978-5.719-1.649  c0.29-0.854,0.662-2.549,0.154-4.812c-0.787-3.504-5.079-5.997-6.964-7.595l-0.156-0.082l-0.042,0.17  c-1.224,4.929,0.631,8.231,2.032,10.033c0.173,0.224,0.349,0.431,0.524,0.626c-1.83-0.776-3.734-1.712-5.696-2.87  c0.541-0.889,1.177-2.317,1.35-4.31c0.334-3.83-3.236-7.768-4.642-10.01l-0.131-0.135l-0.098,0.161  c-2.848,4.633-2.026,8.605-1.183,10.897c0.042,0.112,0.085,0.219,0.128,0.325c-1.332-1.003-2.681-2.12-4.042-3.373  c-0.191-0.176-0.378-0.354-0.566-0.532c0.671-0.7,1.635-1.989,2.18-4.021c0.944-3.513-1.731-7.771-2.67-10.091l-0.101-0.146  L24.2,58.021c-3.419,3.845-3.31,7.681-2.902,9.956c0.027,0.152,0.058,0.301,0.089,0.446c-1.29-1.522-2.459-3.104-3.503-4.734  c0.783-0.486,2.017-1.479,3.015-3.301c1.678-3.063,0.148-7.643-0.203-10.021l-0.06-0.16l-0.14,0.097  c-4.062,2.812-4.83,6.416-4.966,8.631c-0.011,0.18-0.017,0.354-0.02,0.523c-0.85-1.749-1.566-3.54-2.139-5.365  c0.903-0.277,2.2-0.865,3.521-2.118c2.535-2.404,2.479-7.232,2.873-9.604l-0.008-0.17l-0.164,0.05  c-4.728,1.435-6.561,4.63-7.368,6.698c-0.02,0.05-0.036,0.099-0.055,0.148c-0.336-2-0.508-4.025-0.508-6.064  c0-0.032,0.001-0.064,0.001-0.096c0.944-0.003,2.341-0.187,3.953-0.984c3.131-1.547,4.504-6.176,5.583-8.325l0.042-0.166  l-0.171-0.001c-4.94-0.026-7.636,2.486-9.019,4.222c-0.008,0.011-0.016,0.022-0.024,0.033c0.234-1.707,0.582-3.389,1.037-5.037  c0.903,0.276,2.348,0.523,4.205,0.188c3.438-0.62,6.039-4.688,7.669-6.454l0.086-0.147l-0.164-0.048  c-4.74-1.393-8.026,0.274-9.835,1.561c-0.122,0.086-0.239,0.174-0.353,0.261c0.61-1.452,1.309-2.868,2.095-4.239  c0.796,0.462,2.049,0.99,3.776,1.119c3.396,0.254,6.845-2.951,8.815-4.22l0.118-0.118l-0.143-0.085  c-4.134-2.473-7.644-1.702-9.664-0.929c-0.042,0.016-0.081,0.033-0.123,0.049c0.443-0.582,0.902-1.153,1.38-1.712  c0.912,0.079,2.382,0.022,4.141-0.731c3.131-1.34,4.713-5.774,5.876-7.809l0.051-0.159l-0.167-0.01  c-4.808-0.288-7.567,2.014-9.004,3.632c-1.308,1.471-1.877,2.859-1.949,3.98c-0.427,0.496-0.841,1.001-1.241,1.514  c0.495-2.129,0.666-5.452-1.982-9.04l-0.099-0.134l-0.106,0.128c-1.073,2.084-3.929,5.826-3.348,9.182  c0.552,3.185,2.328,4.61,2.328,4.61l0.025-0.011c-0.653,1.138-1.247,2.306-1.782,3.499c-0.101-2.235-0.861-5.439-4.282-8.215  l-0.132-0.107L9.182,18.39c-0.53,2.345-2.404,6.794-0.965,9.977c1.186,2.62,2.942,3.688,3.388,3.925  c-0.456,1.651-0.809,3.336-1.051,5.045c-0.636-2.146-2.182-5.313-6.533-7.159l-0.157-0.067L3.837,30.28  c0.14,2.4-0.43,7.194,1.834,9.854c2.149,2.525,4.46,2.856,4.46,2.856l0.021-0.027c0,0.024-0.001,0.047-0.001,0.071  c0,1.99,0.16,3.965,0.467,5.918c-1.262-1.852-3.672-4.332-8.284-4.801l-0.17-0.017l0.024,0.169c0.843,2.251,1.715,7,4.664,8.872  c2.686,1.705,4.912,1.438,5.088,1.413c0.495,1.571,1.092,3.118,1.785,4.636c-1.802-1.326-4.772-2.747-9.082-1.83l-0.167,0.035  l0.075,0.154c1.491,1.885,3.774,6.139,7.154,7.019c2.412,0.628,4.188,0.188,4.921-0.068c0.935,1.458,1.964,2.878,3.089,4.253  c-2.141-0.933-5.566-1.733-9.813,0.307l-0.161,0.078l0.114,0.137c1.973,1.541,5.33,5.284,8.967,5.344  c2.779,0.045,4.516-0.969,5.089-1.365c0.179,0.168,0.355,0.337,0.537,0.505c1.251,1.151,2.491,2.191,3.718,3.137  c-2.385-0.622-6.229-0.959-10.432,2.064l-0.152,0.109l0.144,0.121c2.337,1.239,6.522,4.516,10.318,3.907  c3.604-0.581,5.237-2.564,5.237-2.564l-0.046-0.112c-0.014-0.035-0.031-0.068-0.046-0.104c1.618,0.964,3.197,1.777,4.729,2.477  c-2.281,0.229-5.458,1.187-8.103,4.743l-0.104,0.142l0.162,0.067c2.432,0.441,7.083,2.173,10.29,0.556  c2.121-1.07,3.194-2.475,3.652-3.229c1.15,0.374,2.259,0.7,3.317,0.996c-3.044,0.89-5.489,1.872-7.147,3.748l1.132,1.001  c1.79-2.025,4.92-2.915,8.881-3.974c3.961,1.059,7.091,1.948,8.881,3.974l1.133-1.001c-1.658-1.876-4.104-2.858-7.147-3.748  c1.059-0.296,2.168-0.622,3.318-0.996c0.456,0.754,1.531,2.158,3.651,3.229c3.206,1.617,7.858-0.114,10.289-0.556l0.162-0.067  l-0.104-0.142c-2.646-3.557-5.822-4.515-8.104-4.743c1.531-0.699,3.111-1.513,4.728-2.476c-0.015,0.034-0.032,0.067-0.046,0.103  l-0.045,0.112c0,0,1.633,1.983,5.236,2.564c3.796,0.608,7.981-2.668,10.318-3.907l0.145-0.121l-0.153-0.109  c-4.201-3.023-8.046-2.687-10.431-2.064c1.226-0.945,2.467-1.985,3.718-3.137c0.181-0.168,0.357-0.337,0.536-0.505  c0.573,0.396,2.311,1.41,5.089,1.365c3.637-0.06,6.994-3.803,8.967-5.344l0.114-0.137l-0.16-0.078  c-4.248-2.041-7.673-1.239-9.814-0.307c1.126-1.375,2.155-2.795,3.09-4.253c0.734,0.257,2.509,0.696,4.921,0.068  c3.381-0.88,5.663-5.134,7.155-7.019l0.074-0.154l-0.167-0.035c-4.31-0.917-7.279,0.504-9.081,1.83  c0.692-1.518,1.289-3.064,1.784-4.636C88.235,54.612,90.462,54.879,93.146,53.175z M23.856,61.577  c-0.297,4.328-0.406,7.138-0.648,8.873c-0.033-0.034-0.067-0.069-0.099-0.104C23.042,68.83,22.953,64.545,23.856,61.577z   M19.368,53.545c-1.281,4.041-2.024,6.661-2.649,8.216c-0.019-0.033-0.039-0.066-0.057-0.099  C16.918,60.335,17.812,56.176,19.368,53.545z M17.529,44.991c-2.291,3.223-3.758,5.411-4.814,6.737  c-0.016-0.065-0.032-0.131-0.047-0.195C13.486,50.084,15.44,46.846,17.529,44.991z M18.289,35.47  c-3.104,2.374-5.139,4.019-6.539,4.979c0.005-0.071,0.008-0.143,0.013-0.213C13,39.071,15.781,36.608,18.289,35.47z M21.631,27.377  c-3.798,1.483-6.259,2.527-7.868,3.042c0.018-0.052,0.037-0.102,0.054-0.153C15.194,29.547,18.762,27.798,21.631,27.377z   M26.003,20.802c-3.785,0.453-6.311,0.825-7.961,0.936c0.038-0.057,0.075-0.114,0.113-0.171  C19.766,21.204,23.33,20.513,26.003,20.802z M28.013,11.004c-3.152,2.148-5.222,3.644-6.636,4.503l-0.104-0.098  C22.463,14.396,25.419,12.014,28.013,11.004z M16.67,12.628c0.653,3.148,0.034,7.696-0.1,8.597c-0.01,0.016-0.021,0.032-0.032,0.049  C16.423,19.666,16.573,16.963,16.67,12.628z M10.265,21.659c1.334,2.71,1.912,6.86,2.075,8.252c-0.019,0.053-0.035,0.106-0.053,0.16  C11.78,28.475,11.238,25.801,10.265,21.659z M5.782,33.122c2.3,2.527,4.178,7.093,4.431,7.723c-0.001,0.009-0.001,0.02-0.002,0.029  C9.268,39.524,7.984,37.046,5.782,33.122z M4.888,46.442c2.808,1.656,5.797,5.196,6.438,5.976c0.006,0.023,0.012,0.047,0.018,0.07  C10.043,51.462,8.097,49.49,4.888,46.442z M7.776,58.794c2.749,0.62,6.058,2.54,7.453,3.401c0.04,0.071,0.078,0.142,0.117,0.213  C13.781,61.769,11.417,60.547,7.776,58.794z M13.418,69.741c3.105-0.052,7.207,1.215,8.642,1.695  c0.042,0.044,0.085,0.087,0.127,0.13C20.456,71.329,17.709,70.656,13.418,69.741z M21.513,79.018c3.97-0.774,9.885,0.26,9.885,0.26  C29.598,79.402,26.518,79.19,21.513,79.018z M38.562,74.599c1.829,4.152,3.06,6.718,3.603,8.334  c-0.017-0.007-0.034-0.013-0.052-0.02C41.593,82.042,39.19,77.902,38.562,74.599z M30.87,68.593  c0.467,4.354,0.858,7.236,0.953,9.099c-0.058-0.039-0.116-0.076-0.174-0.115C31.269,75.811,30.499,71.672,30.87,68.593z   M33.185,86.523c2.435-1.331,6.076-2.091,7.84-2.4c0.092,0.036,0.187,0.072,0.279,0.106C39.65,84.786,37.044,85.441,33.185,86.523z   M78.487,79.018c-5.006,0.173-8.086,0.385-9.886,0.26C68.602,79.277,74.517,78.243,78.487,79.018z M69.13,68.593  c0.371,3.079-0.398,7.218-0.778,8.983c-0.059,0.039-0.117,0.076-0.174,0.115C68.272,75.829,68.663,72.946,69.13,68.593z   M61.438,74.599c-0.628,3.304-3.03,7.443-3.551,8.314c-0.018,0.007-0.035,0.013-0.052,0.02  C58.378,81.316,59.608,78.751,61.438,74.599z M66.814,86.523c-3.858-1.082-6.465-1.737-8.118-2.294  c0.092-0.034,0.187-0.07,0.278-0.106C60.738,84.433,64.38,85.192,66.814,86.523z M95.112,46.442  c-3.209,3.048-5.155,5.02-6.455,6.046c0.005-0.023,0.011-0.047,0.018-0.07C89.314,51.64,92.304,48.098,95.112,46.442z   M94.218,33.122c-2.202,3.925-3.485,6.403-4.429,7.752c0-0.01-0.001-0.02-0.001-0.029C90.04,40.215,91.919,35.649,94.218,33.122z   M89.736,21.659c-0.975,4.142-1.517,6.816-2.022,8.412c-0.019-0.053-0.035-0.107-0.054-0.16  C87.823,28.517,88.4,24.369,89.736,21.659z M83.33,12.628c0.098,4.335,0.247,7.038,0.132,8.646  c-0.011-0.017-0.021-0.033-0.032-0.049C83.295,20.322,82.678,15.776,83.33,12.628z M71.986,11.004c2.594,1.01,5.55,3.393,6.74,4.405  l-0.104,0.099C77.209,14.647,75.139,13.152,71.986,11.004z M73.997,20.802c2.674-0.289,6.236,0.402,7.849,0.765  c0.038,0.057,0.074,0.115,0.112,0.171C80.308,21.627,77.782,21.255,73.997,20.802z M78.368,27.377  c2.87,0.421,6.437,2.169,7.813,2.889c0.019,0.051,0.037,0.101,0.055,0.153C84.628,29.904,82.167,28.861,78.368,27.377z   M81.712,35.47c2.507,1.138,5.288,3.601,6.524,4.765c0.006,0.071,0.009,0.143,0.013,0.214C86.851,39.489,84.815,37.843,81.712,35.47  z M82.472,44.991c2.088,1.854,4.042,5.093,4.859,6.541c-0.016,0.065-0.031,0.131-0.046,0.196  C86.229,50.402,84.762,48.214,82.472,44.991z M80.633,53.545c1.555,2.631,2.449,6.789,2.706,8.117  c-0.019,0.032-0.038,0.064-0.058,0.099C82.656,60.205,81.913,57.586,80.633,53.545z M76.891,70.348  c-0.032,0.034-0.066,0.068-0.1,0.103c-0.24-1.735-0.351-4.544-0.647-8.873C77.047,64.545,76.957,68.83,76.891,70.348z   M86.582,69.741c-4.292,0.915-7.037,1.588-8.769,1.825c0.042-0.043,0.085-0.087,0.127-0.13  C79.377,70.956,83.477,69.689,86.582,69.741z M92.224,58.794c-3.641,1.753-6.005,2.975-7.569,3.614  c0.039-0.071,0.077-0.142,0.117-0.213C86.166,61.334,89.475,59.414,92.224,58.794z"}),ee=function(e){return r.a.createElement("svg",Z({xmlnsXlink:"http://www.w3.org/1999/xlink",version:1.1,x:"0px",y:"0px",viewBox:"0 0 100 100",enableBackground:"new 0 0 100 100",xmlSpace:"preserve"},e),$)};c.p;function te(){return(te=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var c=arguments[t];for(var a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a])}return e}).apply(this,arguments)}var ce=r.a.createElement("path",{d:"M48.54,79.356c0,0-1.15,3.427-8.086,4.166c-6.936,0.74-9.895-0.739-9.895-0.739s4.624-3.605,9.063-3.791  C44.061,78.807,48.54,79.356,48.54,79.356z"}),ae=r.a.createElement("path",{d:"M48.54,79.356c0,0,0.522-3.585-5.222-7.542c-5.745-3.956-9.052-4.066-9.052-4.066s1.898,4.885,6.521,7.745  C44.565,77.83,48.54,79.356,48.54,79.356z"}),ne=r.a.createElement("path",{d:"M40.315,76.818c0,0-3.537-1.596-8.878-1.596s-9.363,2.775-9.363,2.775s3.953,1.594,9.641,1.594  C37.402,79.592,40.315,76.818,40.315,76.818z"}),re=r.a.createElement("path",{d:"M33.777,73.42c0,0-0.287-3.87-2.836-8.562c-2.549-4.694-6.907-6.904-6.907-6.904s0.485,4.235,3.2,9.233  C29.949,72.184,33.777,73.42,33.777,73.42z"}),le=r.a.createElement("path",{d:"M31.11,72.937c0,0-3.065-2.38-8.257-3.63c-5.192-1.251-9.752,0.504-9.752,0.504s3.47,2.478,9,3.81  C27.629,74.952,31.11,72.937,31.11,72.937z"}),se=r.a.createElement("path",{d:"M26.514,68.811c0,0-1.908-3.378-6.214-6.538c-4.306-3.16-9.189-3.304-9.189-3.304s2.244,3.625,6.828,6.991  C22.524,69.325,26.514,68.811,26.514,68.811z"}),oe=r.a.createElement("path",{d:"M21.951,61.863c0,0,1.292-3.459,0.954-8.528c-0.337-5.07-3.224-8.714-3.224-8.714s-1.266,3.854-0.907,9.254  C19.134,59.272,21.951,61.863,21.951,61.863z"}),ie=r.a.createElement("path",{d:"M18.328,58.586c0,0-1.328-3.078-4.735-6.188c-3.408-3.111-7.59-3.684-7.59-3.684s1.593,3.321,5.222,6.633  C14.853,58.659,18.328,58.586,18.328,58.586z"}),ue=r.a.createElement("path",{d:"M16.273,51.764c0,0-0.164-3.349-2.264-7.457c-2.1-4.108-5.815-6.112-5.815-6.112s0.328,3.668,2.564,8.043  C12.994,50.614,16.273,51.764,16.273,51.764z"}),pe=r.a.createElement("path",{d:"M14.839,41.772c0,0,0.288-3.34-1.24-7.693c-1.529-4.354-4.94-6.839-4.94-6.839s-0.169,3.679,1.458,8.314  C11.744,40.192,14.839,41.772,14.839,41.772z"}),Ce=r.a.createElement("path",{d:"M16.223,35.188c0,0,1.533-2.981,1.77-7.589c0.237-4.608-1.978-8.201-1.978-8.201s-1.552,3.339-1.805,8.246  C13.957,32.552,16.223,35.188,16.223,35.188z"}),de=r.a.createElement("path",{d:"M20.001,27.265c0,0,1.997-2.692,2.98-7.2c0.982-4.508-0.619-8.414-0.619-8.414s-2.075,3.043-3.121,7.844  C18.195,24.296,20.001,27.265,20.001,27.265z"}),Ee=r.a.createElement("path",{d:"M16.448,47.467c0,0,2.497-2.236,4.363-6.456s1.081-8.368,1.081-8.368s-2.643,2.566-4.63,7.059  C15.274,44.196,16.448,47.467,16.448,47.467z"}),he=r.a.createElement("path",{d:"M19.208,32.384c0,0,3.191-1.027,6.614-4.121c3.422-3.094,4.393-7.202,4.393-7.202s-3.458,1.268-7.102,4.563  C19.467,28.919,19.208,32.384,19.208,32.384z"}),me=r.a.createElement("path",{d:"M23.923,23.153c0,0,3.02-1.458,5.983-4.992c2.964-3.536,3.36-7.739,3.36-7.739s-3.25,1.731-6.407,5.497  C23.704,19.684,23.923,23.153,23.923,23.153z"}),fe=r.a.createElement("path",{d:"M49.02,81.525c0,4.641-7.635,9.691-7.635,7.225S49.02,83.17,49.02,81.525z"}),ve=r.a.createElement("path",{d:"M53.443,81.525c0,4.641,7.635,9.691,7.635,7.225S53.443,83.17,53.443,81.525z"}),Me=r.a.createElement("path",{d:"M53.923,79.356c0,0,1.15,3.427,8.086,4.166c6.936,0.74,9.895-0.739,9.895-0.739s-4.624-3.605-9.063-3.791  C58.402,78.807,53.923,79.356,53.923,79.356z"}),_e=r.a.createElement("path",{d:"M53.923,79.356c0,0-0.522-3.585,5.222-7.542c5.745-3.956,9.052-4.066,9.052-4.066s-1.897,4.885-6.521,7.745  C57.897,77.83,53.923,79.356,53.923,79.356z"}),ge=r.a.createElement("path",{d:"M62.147,76.818c0,0,3.538-1.596,8.877-1.596c5.342,0,9.365,2.775,9.365,2.775s-3.954,1.594-9.642,1.594  C65.06,79.592,62.147,76.818,62.147,76.818z"}),we=r.a.createElement("path",{d:"M68.686,73.42c0,0,0.287-3.87,2.835-8.562c2.549-4.694,6.907-6.904,6.907-6.904s-0.485,4.235-3.198,9.233  C72.514,72.184,68.686,73.42,68.686,73.42z"}),be=r.a.createElement("path",{d:"M71.353,72.937c0,0,3.064-2.38,8.257-3.63c5.192-1.251,9.752,0.504,9.752,0.504s-3.47,2.478-8.999,3.81  C74.834,74.952,71.353,72.937,71.353,72.937z"}),ze=r.a.createElement("path",{d:"M75.948,68.811c0,0,1.909-3.378,6.214-6.538c4.307-3.16,9.19-3.304,9.19-3.304s-2.243,3.625-6.828,6.991  C79.939,69.325,75.948,68.811,75.948,68.811z"}),Oe=r.a.createElement("path",{d:"M80.512,61.863c0,0-1.292-3.459-0.955-8.528c0.338-5.07,3.225-8.714,3.225-8.714s1.266,3.854,0.906,9.254  C83.329,59.272,80.512,61.863,80.512,61.863z"}),ye=r.a.createElement("path",{d:"M84.135,58.586c0,0,1.328-3.078,4.735-6.188c3.408-3.111,7.591-3.684,7.591-3.684s-1.595,3.321-5.223,6.633  C87.609,58.659,84.135,58.586,84.135,58.586z"}),je=r.a.createElement("path",{d:"M86.188,51.764c0,0,0.163-3.349,2.264-7.457c2.101-4.108,5.815-6.112,5.815-6.112s-0.327,3.668-2.563,8.043  C89.468,50.614,86.188,51.764,86.188,51.764z"}),Se=r.a.createElement("path",{d:"M87.624,41.772c0,0-0.289-3.34,1.239-7.693c1.528-4.354,4.94-6.839,4.94-6.839s0.17,3.679-1.459,8.314  C90.718,40.192,87.624,41.772,87.624,41.772z"}),Fe=r.a.createElement("path",{d:"M86.24,35.188c0,0-1.533-2.981-1.771-7.589c-0.236-4.608,1.978-8.201,1.978-8.201s1.553,3.339,1.806,8.246  C88.505,32.552,86.24,35.188,86.24,35.188z"}),Re=r.a.createElement("path",{d:"M82.461,27.265c0,0-1.997-2.692-2.979-7.2C78.5,15.557,80.1,11.651,80.1,11.651s2.074,3.043,3.121,7.844  C84.269,24.296,82.461,27.265,82.461,27.265z"}),xe=r.a.createElement("path",{d:"M86.016,47.467c0,0-2.499-2.236-4.365-6.456s-1.081-8.368-1.081-8.368s2.643,2.566,4.631,7.059  C87.188,44.196,86.016,47.467,86.016,47.467z"}),Le=r.a.createElement("path",{d:"M83.255,32.384c0,0-3.191-1.027-6.613-4.121c-3.424-3.094-4.394-7.202-4.394-7.202s3.457,1.268,7.103,4.563  C82.995,28.919,83.255,32.384,83.255,32.384z"}),Ne=r.a.createElement("path",{d:"M78.538,23.153c0,0-3.019-1.458-5.982-4.992c-2.964-3.536-3.361-7.739-3.361-7.739s3.252,1.731,6.408,5.497  C78.759,19.684,78.538,23.153,78.538,23.153z"}),Te=function(e){return r.a.createElement("svg",te({xmlnsXlink:"http://www.w3.org/1999/xlink",version:1.1,x:"0px",y:"0px",viewBox:"0 0 100 100",enableBackground:"new 0 0 100 100",xmlSpace:"preserve"},e),ce,ae,ne,re,le,se,oe,ie,ue,pe,Ce,de,Ee,he,me,fe,ve,Me,_e,ge,we,be,ze,Oe,ye,je,Se,Fe,Re,xe,Le,Ne)},ke=(c.p,c(44)),He=c.n(ke),Ue=c(7),Ie=c.n(Ue),Ae=function(e){function t(){return Object(G.a)(this,t),Object(D.a)(this,Object(W.a)(t).apply(this,arguments))}return Object(P.a)(t,e),Object(Q.a)(t,[{key:"componentDidMount",value:function(){this.props.getResources()}},{key:"render",value:function(){var e=this.props.data;console.log(e);var t="",c=0;return e&&(t=Ie.a["stage-1"],e=Array(3).fill(Object.values(e)).flatMap(function(e){return e}).sort(function(e,t){return t.points-e.points}),c=e.reduce(function(e,t){return Math.max(e,t.points)},0)),r.a.createElement("div",{className:q()(Ie.a.container,t)},r.a.createElement("div",{className:Ie.a.title},r.a.createElement("div",{className:Ie.a.icon},r.a.createElement(V,null)),r.a.createElement("div",{className:Ie.a["brand-title"]},r.a.createElement("span",null,"The"),r.a.createElement("span",null,"R E D I S"),r.a.createElement("span",null,"Challenge"))),r.a.createElement("div",{className:Ie.a.board},e?e.map(function(e,t){return r.a.createElement("div",{key:t,className:Ie.a.row},console.log(e),r.a.createElement("div",{className:Ie.a.index},0===t?r.a.createElement(n.Fragment,null,r.a.createElement("img",{height:28,width:28,className:Ie.a.crown,src:He.a}),r.a.createElement(ee,{className:Ie.a.wreath})):"",1===t?r.a.createElement(Te,{className:Ie.a.wreath}):"",t+1),r.a.createElement("div",{className:Ie.a.name},e.title),r.a.createElement("div",{className:Ie.a.stages},e.stages.map(function(e,t){return r.a.createElement("div",{key:t,className:q()(Ie.a.status,Ie.a[e.status])})})),r.a.createElement("div",{className:Ie.a.bar,style:{width:10+(c>0?e.points/c*110:0)}}),r.a.createElement("div",{className:Ie.a.points},e.points))}):""))}}]),t}(n.Component),Be=Object(u.b)(function(e){var t=e.home;return{data:t.data,status:t.status}},function(e){return{getResources:function(){e(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{type:m.HOME_FETCH_REQUEST,payload:e}}())}}})(Ae),Ge=function(e){function t(){return Object(G.a)(this,t),Object(D.a)(this,Object(W.a)(t).apply(this,arguments))}return Object(P.a)(t,e),Object(Q.a)(t,[{key:"render",value:function(){return r.a.createElement(J.a,null,r.a.createElement(Be,null))}}]),t}(n.Component);c.d(t,"saga",function(){return Qe}),c.d(t,"store",function(){return We});var Qe=Object(p.a)(),De=[Qe];De=De;var We=Object(o.createStore)(w,Object(i.composeWithDevTools)(o.applyMiddleware.apply(void 0,Object(a.a)(De))));B.map(Qe.run),s.a.render(r.a.createElement(u.a,{store:We},r.a.createElement(Ge,null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");C?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):d(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):d(e)})}}()}},[[46,2,1]]]);
//# sourceMappingURL=main.9ff1b739.chunk.js.map