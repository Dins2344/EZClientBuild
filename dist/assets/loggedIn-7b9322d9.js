import{m as o,u as v,r as m,j as e,c as a,X as C,q as b,L as w,_ as k,a as M,s as S,t as I,b as z,v as L,w as O,I as B,x as E,y as D}from"./index-0cc785ab.js";import{n as T}from"./logo-no-background-0edf3043.js";import{l as _,g as A}from"./userApis-55b75794.js";import{d as P,m as U}from"./organizer-46a8c21f.js";import{u as y}from"./useDispatch-d5111a95.js";import"./userInterceptor-eb453d1e.js";import"./envConfig-9a8092f4.js";function H(){const[l,c]=o.useState(!1),[n,h]=o.useState(""),[d,x]=o.useState(""),[t,r]=o.useState(),g=v(),u=async()=>{const s=await P();s&&r(s.data.data)};m.useEffect(()=>{u()},[]);const i=()=>c(!l),p=s=>{const j=s.target.value;x(j)},f=async()=>{await _({orgName:n,orgType:d})&&(i(),g("/organization/home"))};return e.jsx(o.Fragment,{children:e.jsxs("form",{className:"grid gap-6",children:[e.jsx(a.Button,{variant:"text",onClick:i,children:"Create An Event"}),e.jsxs(a.Dialog,{open:l,handler:i,children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(a.DialogHeader,{children:"Are you ready for more..?"}),e.jsx(C,{className:"mr-3 h-5 w-5",onClick:i})]}),e.jsxs(a.DialogBody,{divider:!0,children:[e.jsx(a.Input,{value:n,onChange:s=>{h(s.target.value)},label:"Organization name"}),e.jsxs("div",{className:"w-72 mt-3",children:[e.jsx("label",{className:"mr-2",children:"choose type"}),e.jsx("select",{className:"w-2/3 h-10 border border-spacing-4",id:"orgType",value:d,onChange:p,children:t&&t.map(s=>e.jsx("option",{value:s.categoryName,children:s.categoryName},s.categoryName))})]})]}),e.jsxs(a.DialogFooter,{className:"space-x-2",children:[e.jsx(a.Button,{size:"sm",variant:"outlined",color:"red",onClick:i,children:"Cancel"}),e.jsx(a.Button,{size:"sm",variant:"gradient",color:"green",type:"submit",onClick:f,children:"Create"})]})]})]})})}const W=()=>{const[l,c]=o.useState(!1),[n,h]=m.useState(),[d,x]=m.useState(""),[t,r]=m.useState(""),g=y(),u=v(),i=()=>c(!l);m.useEffect(()=>{p()},[]);const p=async()=>{const s=await U();h(s==null?void 0:s.data.data)},f=async()=>{g(b({searchText:d,city:t})),i(),u("/search-events")};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{onClick:i,className:"flex p-3 h-8 md:h-12 w-min md:w-80 items-center self-center hover:cursor-pointer text-gray-400 md:bg-blue-gray-50",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"w-6 h-6",children:e.jsx("path",{"fill-rule":"evenodd",d:"M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z","clip-rule":"evenodd"})}),e.jsx("p",{className:"ml-4 hidden md:block",children:"Search events"})]}),e.jsx(a.Dialog,{size:"xxl",open:l,handler:i,children:e.jsxs(a.DialogBody,{children:[e.jsx("div",{className:"flex w-full justify-end ",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"w-8 h-8 hover:cursor-pointer",onClick:i,children:e.jsx("path",{"fill-rule":"evenodd",d:"M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z","clip-rule":"evenodd"})})}),e.jsxs("form",{className:"flex flex-col lg:mt-28 md:mt-16 mt-5 lg:px-40 md:px-24 px-2 w-full",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"w-8 h-8 mr-3",children:e.jsx("path",{"fill-rule":"evenodd",d:"M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z","clip-rule":"evenodd"})}),e.jsx("div",{className:"w-52 mr-3",children:e.jsx(a.Input,{variant:"standard",placeholder:"Search anything",className:"w-52 h-10 border-b-2",value:d,onChange:s=>{x(s.target.value)}})}),e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"w-8 h-8 hover:cursor-pointer",onClick:f,children:e.jsx("path",{"fill-rule":"evenodd",d:"M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z","clip-rule":"evenodd"})})]}),e.jsxs("div",{className:"flex items-center md:mt-4",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"w-8 h-8 mr-3",children:e.jsx("path",{"fill-rule":"evenodd",d:"M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z","clip-rule":"evenodd"})}),e.jsxs("select",{id:"countries",className:"border-none text-gray-900 text-sm rounded-lg",onChange:s=>{r(s.target.value)},children:[e.jsx("option",{value:"",selected:!0,children:"Choose a city"}),n&&n.map(s=>e.jsx("option",{value:s.cityName,children:s.cityName},s._id))]})]})]})]})})]})},F=W,$=m.lazy(()=>k(()=>import("./chatBox-3b2670a5.js"),["assets/chatBox-3b2670a5.js","assets/index-0cc785ab.js","assets/index-24626ca1.css","assets/userApis-55b75794.js","assets/userInterceptor-eb453d1e.js","assets/envConfig-9a8092f4.js"])),N=[{label:"My Profile",icon:L},{label:"Edit Profile",icon:O},{label:"Inbox",icon:B},{label:"Help",icon:E},{label:"Sign Out",icon:D}];function R(){const[l,c]=o.useState(!1),n=v(),h=M(S),d=()=>c(!1),x=t=>{t==="My Profile"?n("/user/user-profile"):t==="Edit Profile"?n("/user/edit-profile"):t==="Inbox"||t==="Help"||t==="Sign Out"&&(localStorage.removeItem("token"),window.location.reload()),d()};return e.jsxs(a.Menu,{open:l,handler:c,placement:"bottom-end",children:[e.jsx(a.MenuHandler,{children:e.jsxs(a.Button,{variant:"text",color:"blue-gray",className:"flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto",children:[e.jsx(a.Avatar,{variant:"circular",size:"sm",alt:"https://img.freepik.com/free-icon/user_318-159711.jpg",className:"border border-blue-500 p-0.5",src:h.profileImage}),e.jsx(I,{strokeWidth:2.5,className:`h-3 w-3 transition-transform ${l?"rotate-180":""}`})]})}),e.jsx(a.MenuList,{className:"p-1",children:N.map(({label:t,icon:r},g)=>{const u=g===N.length-1;return e.jsxs(a.MenuItem,{onClick:()=>x(t),className:`flex items-center gap-2 rounded ${u?"hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10":""}`,children:[o.createElement(r,{className:`h-4 w-4 ${u?"text-red-500":""}`,strokeWidth:2}),e.jsx(a.Typography,{as:"span",variant:"small",className:"font-normal",color:u?"red":"inherit",children:t})]},t)})})]})}function Y(){const[l,c]=o.useState(!1),[n,h]=o.useState(),d=y(),x=async()=>{const r=await A();r!=null&&r.data&&(h(r==null?void 0:r.data.data),d(z(r.data.data)))};m.useEffect(()=>{x()},[]),o.useEffect(()=>{window.addEventListener("resize",()=>window.innerWidth>=960&&c(!1))},[]);const t=e.jsxs("ul",{className:"mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6",children:[e.jsx(a.Typography,{as:"li",variant:"small",color:"blue-gray",className:"p-1 font-normal",children:n&&(n!=null&&n.organizations.length)?e.jsx(w,{to:"/organization/home",className:"flex items-center",children:"Organization"}):e.jsx(H,{})}),e.jsx(m.Suspense,{children:e.jsx($,{})})]});return e.jsx(e.Fragment,{children:e.jsxs(a.Navbar,{className:"sticky top z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4 ",children:[e.jsxs("div",{className:"flex items-center justify-between text-blue-gray-900",children:[e.jsxs("div",{className:"flex",children:[e.jsx(w,{className:"mr-3 md:mr-10",to:"/",children:e.jsx("img",{className:"w-32",src:T})}),e.jsx(F,{})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("div",{className:"mr-4 hidden lg:block",children:t}),e.jsx(a.IconButton,{variant:"text",className:"ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden",ripple:!1,onClick:()=>c(!l),children:l?e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",className:"h-6 w-6",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"})}):e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",stroke:"currentColor",strokeWidth:2,children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4 6h16M4 12h16M4 18h16"})})}),e.jsx(R,{})]})]}),e.jsx(a.Collapse,{open:l,children:t})]})})}export{Y as default};
