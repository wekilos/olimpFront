"use strict";(self.webpackChunkfront=self.webpackChunkfront||[]).push([[435],{7851:function(n,e,t){t.r(e),t.d(e,{default:function(){return m}});var a=t(1413),o=t(9439),s=t(2791),r=t(3695),l=t(8885),i=t(6503),c=t(8005),u=t(2703),d=t(2911),f=t(184),m=function(){var n=(0,s.useState)(!1),e=(0,o.Z)(n,2),t=e[0],m=e[1],x=(0,s.useState)(!1),p=(0,o.Z)(x,2),A=p[0],h=p[1],b=(0,s.useState)(),v=(0,o.Z)(b,2),N=v[0],g=v[1],j=(0,d.k6)();(0,s.useEffect)((function(){C()}),[]);var C=function(){var n=JSON.parse(localStorage.getItem("userData"));c.b.get("/api/user/one/"+n.id).then((function(n){g(n.data)})).catch((function(n){console.log(n)}))};return(0,f.jsxs)("div",{className:"w-full min-h-[70vh] mt-[100px]",children:[(0,f.jsx)(l.Z,{width:340,placement:"right",closable:!0,mask:!0,maskClosable:!0,onClose:function(){return h(!1)},visible:A,children:(0,f.jsxs)("div",{className:"w-full text-[#161616] text-left text-[16px] font-sans font-[400]",children:[(0,f.jsx)("h3",{className:" font-sans",children:"Ady famili\xfdasy:"}),(0,f.jsx)("input",{onChange:function(n){return g((0,a.Z)((0,a.Z)({},N),{},{fname:n.target.value}))},value:null===N||void 0===N?void 0:N.fname,type:"text",className:"w-full rounded-[4px] outline-none border-[1px] p-1 border-blue mb-[18px] font-sans"}),(0,f.jsx)("h3",{className:"  font-sans",children:"Telefon nomer:"}),(0,f.jsx)("input",{onChange:function(n){return g((0,a.Z)((0,a.Z)({},N),{},{phoneNumber:n.target.value}))},value:null===N||void 0===N?void 0:N.phoneNumber,type:"text",className:"w-full rounded-[4px] outline-none border-[1px] p-1 border-blue mb-[18px] font-sans"}),(0,f.jsx)("h3",{className:"  font-sans",children:"Edara ady:"}),(0,f.jsx)("input",{onChange:function(n){return g((0,a.Z)((0,a.Z)({},N),{},{companyName:n.target.value}))},value:null===N||void 0===N?void 0:N.companyName,type:"text",className:"w-full rounded-[4px] outline-none border-[1px] p-1 border-blue mb-[18px] font-sans"}),(0,f.jsx)("h3",{className:"  font-sans",children:"E-mail:"}),(0,f.jsx)("input",{disabled:!0,value:null===N||void 0===N?void 0:N.email,type:"text",className:"cursor-not-allowed w-full rounded-[4px] outline-none border-[1px] p-1 border-blue mb-[18px] font-sans"}),(0,f.jsxs)("h3",{className:"mb-[28px] font-[600] font-sans",children:[(0,f.jsx)("span",{onClick:function(){return h(!1)},className:"text-[#D33333] underline font-sans cursor-pointer",children:"Cancel"}),(0,f.jsx)("span",{onClick:function(){return function(){var n=JSON.parse(localStorage.getItem("userData"));c.b.patch("/api/user/update",{id:n.id,fname:null===N||void 0===N?void 0:N.fname,phoneNumber:null===N||void 0===N?void 0:N.phoneNumber,companyName:null===N||void 0===N?void 0:N.companyName}).then((function(n){r.ZP.success("Ustunlikli!"),h(!1)})).catch((function(n){console.log(n),r.ZP.warn("Gaytadan Barlan!")}))}()},className:"text-[#27AE60] underline font-sans ml-[30px] cursor-pointer",children:"Change"})]})]})}),(0,f.jsx)("div",{className:"h-[72px] w-full pl-[30px] mb-[20px] bg-[#F7F7FA] rounded-[10px] font-sans font-[600] text-[20px] text-black leading-[72px] text-left",children:"My profile"}),(0,f.jsxs)("div",{className:"w-full bg-[#F7F7FA] rounded-[10px] p-[30px] flex justify-start flex-wrap",children:[(0,f.jsxs)("div",{className:"w-[250px] text-[#161616] text-left text-[16px] font-sans font-[400]",children:[(0,f.jsx)("h3",{className:"md:mb-[28px] mb-0 font-sans",children:"Ady famili\xfdasy:"}),(0,f.jsx)("h3",{className:" md:hidden block  mb-[28px] font-[600]",children:null===N||void 0===N?void 0:N.fname}),(0,f.jsx)("h3",{className:"md:mb-[28px] mb-0 font-sans",children:"Telefon nomer:"}),(0,f.jsxs)("h3",{className:" md:hidden block mb-[28px] font-[600] font-sans",children:["+",null===N||void 0===N?void 0:N.phoneNumber]}),(0,f.jsx)("h3",{className:"md:mb-[28px] mb-0 font-sans",children:"Edara ady:"}),(0,f.jsx)("h3",{className:" md:hidden block mb-[28px] font-[600] font-sans",children:null===N||void 0===N?void 0:N.companyName}),(0,f.jsx)("h3",{className:"md:mb-[28px] mb-0 font-sans",children:"E-mail:"}),(0,f.jsx)("h3",{className:"md:hidden block mb-[28px] font-[600] font-sans",children:null===N||void 0===N?void 0:N.email}),(0,f.jsx)("h3",{className:"md:mb-[28px] mb-0 font-sans",children:"Accaunt"}),(0,f.jsxs)("h3",{className:"md:hidden block mb-[28px] font-[600] font-sans",children:[(0,f.jsx)("span",{onClick:function(){return m(!0)},className:"text-[#D33333] underline font-sans cursor-pointer",children:"Accaunt delete"}),(0,f.jsx)("span",{onClick:function(){return h(!0)},className:"text-[#27AE60] underline font-sans ml-[30px] cursor-pointer",children:"Change"})]})]}),(0,f.jsxs)("div",{className:"md:block hidden w-auto text-[#161616] text-left text-[16px] font-sans font-[600]",children:[(0,f.jsx)("h3",{className:"mb-[28px] font-[600]",children:null===N||void 0===N?void 0:N.fname}),(0,f.jsxs)("h3",{className:"mb-[28px] font-[600] font-sans",children:["+",null===N||void 0===N?void 0:N.phoneNumber]}),(0,f.jsx)("h3",{className:"mb-[28px] font-[600] font-sans",children:null===N||void 0===N?void 0:N.companyName}),(0,f.jsx)("h3",{className:"mb-[28px] font-[600] font-sans",children:null===N||void 0===N?void 0:N.email}),(0,f.jsxs)("h3",{className:"mb-[28px] font-[600] font-sans",children:[(0,f.jsx)("span",{onClick:function(){return m(!0)},className:"text-[#D33333] underline font-sans cursor-pointer",children:"Accaunt delete"}),(0,f.jsx)("span",{onClick:function(){return h(!0)},className:"text-[#27AE60] underline font-sans ml-[30px] cursor-pointer",children:"Change"})]})]})]}),(0,f.jsx)(i.Z,{visible:t,onCancel:function(){return m(!1)},backdrop:!0,footer:!1,className:"!rounded-[10px] !min-w-[320px] !ml-auto !mr-auto",children:(0,f.jsxs)("div",{className:"w-full",children:[(0,f.jsx)("div",{className:"w-full flex justify-center mt-[10px]",children:(0,f.jsx)("img",{className:"object-contain h-[113px]",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHEAAABxCAYAAADifkzQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATKSURBVHgB7d1RbhM5GAfwz+N0n1ba7Ak2+7haup2SIvE4ewLCCYATtJyA9gQtJ6B7gqUnILwh0ZSUgngknICgwgvJ2NhNggA1MNN+DvaX/0+qAjSdCfMfT2xP6o8IAAAAAAAAAAAAmClK3EmeF6R1x/3xD/fVrPGjQ/f1prGysvfXkycDSljSIT6/enVXKbVFl+S2sXfl8PAuJSrZELkCnEk5yCRDnF5CHxE3pf5dPTzsUmIySpDS+h6FYG2Y7QaWXIi+FVqigsIoTjY2CkpMciEGa4UzCbbGpEIM3ApnkmuNSYUYvBXOJNYakwlxQa1wJqnWmEyIC2uFMwm1RvZx4uuiaJ4Oh4WuNwX2XSbLWm4Mt/CDaqzdaRgzICaGaPBrs9n/s9sdEiPWEE/a7U33sE2MAUrjDvjAWru/enS0Q0zYQuSeBpOOc5qPJUQX4G33oh4Q1MM0zcfSscmUukVQH1PniSXEBXb9pSmIQZIT4PA1rpbI2mVeFr6nSgxYQlTW/kdwEV1iwBLi2JhtrrNqWfjjNSpLlrEiS4jr/f5wlGU3EWQ10wBvuuM2IAasMzbP8ryVNRodbe0N9z6ZE2ZuvjQ8m61R6mA8Hu/5E5+YBPuMzUs3AWAwAfBZZu2dv4+O9ikADDEEQIgCIEQBEKIADUqI64X13UPf9Xzf0eR3LzrEw/cc/XaP3eNv7u/5tHedhCRCnHbN71z55raNH9Jorf1Ew2Xuotwfl+X2t11+/xkbNxP1wIXZoshFfzmdDozPve/mB8v/9Hq33X25C818uCHQzmqvt3XemM3vz+83hQmM6EP0LfBHMxvugG/T5FJbmQ9nbfJzc/n9+v1T5KIOUSnVr3rn29SchPcfgqryPL9//zooYlGHaI15XPW5Da27VIM2pnIwLvBjiljsl9PK84sfR6Nac5Efa2zbdXAGFDGMEwVAiAIgRAEQogAIUQCEKABCFAAhCoAQBUCIAiBEARCiAAhRAIQoAEIUACEKgBAFQIgCIEQBEKIACFEAhCgAQhQAIQqAEAVAiAIgRAEQogAIUQCEKABCFAAhCoAQBYg9xMqrNP6yshJyRceoV4uMO0Sl1qo+tTSmRTVorSsvNqRqvI6fIfaWWLzO86qtoNbqUopos8rzXl2/3oq92kD074nvtf7hmqlnxVXqrypVqTLbeDTapcil0LHpvNjY2J3XIp+32x13ubvYgbb2f38CnPctX7jMl04ivvXjgklibTdr7dYHrTsn7fYBleVD/28my/JMqRt0uUtd05dHctu9Zaw9yIzxi/Q1VZatvT893XLfS2L562RWWZwulLfpeiRn72XMl5DCnRC+7HuSNesxThQAIQqAEAVAiAIgRAEQ4oKUSgWrbBcuRK2jXuh10VTAEIMOi9xsyluFelHecLXX+50CCXo5RV3FCXciP6SAwr4nZlnQF58KrjqJ8wQNcboI+31aYq4V7nPVSZwneO/UFw5Z1uKY05oedymw4CGeVTlNpEgIp1lRFs5il/MsZJzoLyf+P+TuRCxFR8cF6KvbrIe+jH6xv8XyN2HdbZ97KdRgqsuHZ33poooFWRj3+3M8u3Ytz8qy0JMPIbUoQXZS7W1YWntstO6uP32KCQ4AAAAAAAAAAAAZPgE1Tn0f5gcDnQAAAABJRU5ErkJggg==",alt:"icon"})}),(0,f.jsx)("h1",{className:"w-full text-[28px] font-[700] text-black font-sans  text-center",children:"Are you sure?"}),(0,f.jsxs)("p",{className:"w-full text-[16px] font-[400] text-black font-sans  text-center",children:["Are you sure to delete account, you ",(0,f.jsx)("br",{})," will not able to recover it"]}),(0,f.jsxs)("div",{className:"w-full flex justify-evenly mt-[20px] mb-[10px] ",children:[(0,f.jsx)("button",{onClick:function(){return m(!1)},className:"  h-[50px] w-[201px] border-[1px] border-[#6D757D] hover:bg-blue hover:text-white font-sans text-[#6D757D] rounded-[8px] text-[18px] font-[600]",children:"Cancel"}),(0,f.jsx)("button",{onClick:function(){return function(){var n=JSON.parse(localStorage.getItem("userData"));c.b.patch("/api/user/disActive/"+n.id).then((function(n){r.ZP.success("Ustunlikli!"),m(!1),(0,u.kS)(),j.push({pathname:"/home"})})).catch((function(n){console.log(n),r.ZP.warn("Gaytadan Barlan!")}))}()},className:"bg-[#D33333] hover:bg-[#ac2b2b] h-[50px] w-[201px] font-sans text-white rounded-[8px] text-[18px] font-[600]",children:"Delete account"})]})]})})]})}},8005:function(n,e,t){t.d(e,{_:function(){return o},b:function(){return s}});var a=t(4569),o="http://95.85.122.39:8282",s=t.n(a)().create({baseURL:o,timeout:1e7,headers:{Authorization:"Bearer "+function(){if(JSON.parse(localStorage.getItem("ChynarProfile")))return JSON.parse(localStorage.getItem("ChynarProfile")).token}(),"Content-Type":"application/json"}})},2703:function(n,e,t){t.d(e,{bg:function(){return o},gh:function(){return s},kS:function(){return a}});var a=function(){localStorage.removeItem("userData")},o=function(){if(localStorage.getItem("userData")&&JSON.parse(localStorage.getItem("userData")).token)return!0;return!1},s=function(){if(!localStorage.getItem("userData"))return!1;var n=JSON.parse(localStorage.getItem("userData"));return!(!n.permission||!n.token)||void 0}},1929:function(n,e,t){t.d(e,{C:function(){return o},E_:function(){return a}});var a=t(2791).createContext({getPrefixCls:function(n,e){return e||(n?"ant-".concat(n):"ant")}}),o=a.Consumer},1818:function(n,e,t){t.d(e,{Z:function(){return o}});var a=t(1413);function o(n,e){var t=(0,a.Z)({},n);return Array.isArray(e)&&e.forEach((function(n){delete t[n]})),t}},9199:function(n,e,t){function a(n){if("undefined"!==typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}t.d(e,{Z:function(){return a}})},3433:function(n,e,t){t.d(e,{Z:function(){return r}});var a=t(907);var o=t(9199),s=t(181);function r(n){return function(n){if(Array.isArray(n))return(0,a.Z)(n)}(n)||(0,o.Z)(n)||(0,s.Z)(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=435.dd449bc0.chunk.js.map