import{r as c,j as e,c as s,M as w,C as S,P as E}from"./index-49fb6d1c.js";import{h as D,i as L,j as I,u as R}from"./admin-cf162092.js";import"./envConfig-9a8092f4.js";const N=["Organization","Category","Followers","Created",""],F=()=>{const[u,y]=c.useState();c.useEffect(()=>{x()},[]);const x=async()=>{const l=await D();console.log(l),y(l==null?void 0:l.data.data)},t=u;return e.jsxs(s.Card,{className:"h-full w-full mt-10",children:[e.jsxs(s.CardHeader,{floated:!1,shadow:!1,className:"rounded-none",children:[e.jsx("div",{className:"mb-8 flex items-center justify-between gap-8",children:e.jsxs("div",{children:[e.jsx(s.Typography,{variant:"h5",color:"blue-gray",children:"Organizations list"}),e.jsx(s.Typography,{color:"gray",className:"mt-1 font-normal",children:"See information about all organizations"})]})}),e.jsx("div",{className:"flex flex-col items-center justify-between gap-4 md:flex-row",children:e.jsx("div",{className:"w-full md:w-72",children:e.jsx(s.Input,{label:"Search",icon:e.jsx(w,{className:"h-5 w-5"})})})})]}),e.jsx(s.CardBody,{className:"overflow-scroll px-0",children:e.jsxs("table",{className:"mt-4 w-full min-w-max table-auto text-left",children:[e.jsx("thead",{children:e.jsx("tr",{children:N.map((l,h)=>e.jsx("th",{className:"cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50",children:e.jsxs(s.Typography,{variant:"small",color:"blue-gray",className:"flex items-center justify-between gap-2 font-normal leading-none opacity-70",children:[l," ",h!==N.length-1&&e.jsx(S,{strokeWidth:2,className:"h-4 w-4"})]})},l))})}),e.jsx("tbody",{children:t&&t.map(({logo:l,orgName:h,orgType:p,_id:r,followers:i,createdOn:f},d)=>{const o=d===t.length-1?"p-4":"p-4 border-b border-blue-gray-50";return e.jsxs("tr",{children:[e.jsx("td",{className:o,children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(s.Avatar,{src:l||"https://img.freepik.com/free-icon/user_318-159711.jpg",size:"sm"}),e.jsx("div",{className:"flex flex-col",children:e.jsx(s.Typography,{variant:"small",color:"blue-gray",className:"font-normal",children:h})})]})}),e.jsx("td",{className:o,children:e.jsx("div",{className:"flex flex-col",children:e.jsx(s.Typography,{variant:"small",color:"blue-gray",className:"font-normal",children:p})})}),e.jsx("td",{className:o,children:e.jsx("div",{className:"w-max",children:e.jsxs(s.Typography,{variant:"small",color:"blue-gray",className:"font-normal",children:[i==null?void 0:i.length," followers"]})})}),e.jsx("td",{className:o,children:e.jsx(s.Typography,{variant:"small",color:"blue-gray",className:"font-normal",children:f})}),e.jsx("td",{className:o,children:e.jsx(s.Tooltip,{content:"Edit User",children:e.jsx(s.IconButton,{variant:"text",color:"blue-gray",children:e.jsx(E,{className:"h-4 w-4"})})})})]},r)})})]})}),e.jsxs(s.CardFooter,{className:"flex items-center justify-between border-t border-blue-gray-50 p-4",children:[e.jsx(s.Typography,{variant:"small",color:"blue-gray",className:"font-normal",children:"Page 1 of 10"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(s.Button,{variant:"outlined",color:"blue-gray",size:"sm",children:"Previous"}),e.jsx(s.Button,{variant:"outlined",color:"blue-gray",size:"sm",children:"Next"})]})]})]})},P=()=>{const[u,y]=c.useState(),[x,t]=c.useState(!1),[l,h]=c.useState(!1),[p,r]=c.useState(""),[i,f]=c.useState(!1),d=()=>h(!l),m=()=>f(!i);c.useEffect(()=>{T()},[x]);const o=async()=>{const a=await I(p);a!=null&&a.data.response.ok&&(r(""),t(!x))},k=async()=>{const a=await R(p);a!=null&&a.data.response.ok&&(r(""),t(!x))},b=u,T=async()=>{const a=await L();console.log(a==null?void 0:a.data.data),a&&y(a.data.data)},B=["User","Joined on","Organizations","Status","Actions"];return e.jsxs(e.Fragment,{children:[e.jsxs(s.Card,{className:"h-full w-full",children:[e.jsxs(s.CardHeader,{floated:!1,shadow:!1,className:"rounded-none",children:[e.jsx("div",{className:"mb-8 flex items-center justify-between gap-8",children:e.jsxs("div",{children:[e.jsx(s.Typography,{variant:"h5",color:"blue-gray",children:"Users list"}),e.jsx(s.Typography,{color:"gray",className:"mt-1 font-normal",children:"See information about all Users"})]})}),e.jsx("div",{className:"flex flex-col items-center justify-between gap-4 md:flex-row",children:e.jsx("div",{className:"w-full md:w-72",children:e.jsx(s.Input,{label:"Search",icon:e.jsx(w,{className:"h-5 w-5"})})})})]}),e.jsx(s.CardBody,{className:"overflow-scroll px-0",children:e.jsxs("table",{className:"mt-4 w-full min-w-max table-auto text-left",children:[e.jsx("thead",{children:e.jsx("tr",{children:B.map(a=>e.jsx("th",{className:"border-y border-blue-gray-100 bg-blue-gray-50/50 p-4",children:e.jsx(s.Typography,{variant:"small",color:"blue-gray",className:"font-normal leading-none opacity-70",children:a})},a))})}),e.jsx("tbody",{children:b&&b.map(({profileImage:a,firstName:C,email:z,lastName:U,status:n,joinedDate:O,organizations:v,_id:j},A)=>{const g=A===b.length-1?"p-4":"p-4 border-b border-blue-gray-50";return e.jsxs("tr",{children:[e.jsx("td",{className:g,children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(s.Avatar,{src:a||"https://img.freepik.com/free-icon/user_318-159711.jpg",size:"sm"}),e.jsxs("div",{className:"flex flex-col",children:[e.jsxs(s.Typography,{variant:"small",color:"blue-gray",className:"font-normal",children:[C," ",U]}),e.jsx(s.Typography,{variant:"small",color:"blue-gray",className:"font-normal opacity-70",children:z})]})]})}),e.jsx("td",{className:g,children:e.jsx("div",{className:"flex flex-col",children:e.jsx(s.Typography,{variant:"small",color:"blue-gray",className:"font-normal",children:O})})}),e.jsx("td",{className:g,children:e.jsx(s.Typography,{variant:"small",color:"blue-gray",className:"font-normal",children:v==null?void 0:v.length})}),e.jsx("td",{className:g,children:e.jsx("div",{className:"w-max",children:e.jsx(s.Chip,{variant:"ghost",size:"sm",value:n&&n==="active"?"active":n==="blocked"?"blocked":"",color:n&&n==="active"?"green":n==="blocked"?"blue-gray":"gray"})})}),e.jsx("td",{className:g,children:e.jsxs("div",{className:"flex",children:[n==="active"&&e.jsx(s.Button,{onClick:()=>{j&&r(j),d()},size:"sm",color:"red",variant:"outlined",children:"Block"}),n==="blocked"&&e.jsx(s.Button,{onClick:()=>{j&&r(j),m()},size:"sm",color:"green",children:"Unblock"})]})})]},j)})})]})}),e.jsxs(s.CardFooter,{className:"flex items-center justify-between border-t border-blue-gray-50 p-4",children:[e.jsx(s.Typography,{variant:"small",color:"blue-gray",className:"font-normal",children:"Page 1 of 10"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(s.Button,{variant:"outlined",color:"blue-gray",size:"sm",children:"Previous"}),e.jsx(s.Button,{variant:"outlined",color:"blue-gray",size:"sm",children:"Next"})]})]})]}),e.jsxs(s.Dialog,{open:l,handler:d,children:[e.jsxs(s.DialogBody,{divider:!0,className:"grid place-items-center gap-4",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"h-16 w-16 text-red-500",children:e.jsx("path",{fillRule:"evenodd",d:"M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z",clipRule:"evenodd"})}),e.jsx(s.Typography,{color:"red",variant:"h4",children:"Are you sure...!"}),e.jsx(s.Typography,{className:"text-center font-normal",children:"Once blocked user can't log in"})]}),e.jsxs(s.DialogFooter,{className:"space-x-2",children:[e.jsx(s.Button,{variant:"text",color:"blue-gray",onClick:()=>{d(),r("")},children:"cancel"}),e.jsx(s.Button,{variant:"gradient",onClick:()=>{o(),d()},children:"block"})]})]}),e.jsxs(s.Dialog,{open:i,handler:m,children:[e.jsxs(s.DialogBody,{divider:!0,className:"grid place-items-center gap-4",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"h-16 w-16 text-red-500",children:e.jsx("path",{fillRule:"evenodd",d:"M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z",clipRule:"evenodd"})}),e.jsx(s.Typography,{color:"red",variant:"h4",children:"Are you sure...!"}),e.jsx(s.Typography,{className:"text-center font-normal",children:"Once unblocked user can experience the platform"})]}),e.jsxs(s.DialogFooter,{className:"space-x-2",children:[e.jsx(s.Button,{variant:"text",color:"blue-gray",onClick:()=>{r(""),m()},children:"cancel"}),e.jsx(s.Button,{variant:"gradient",onClick:()=>{k(),m()},children:"Unblock"})]})]})]})},_=()=>e.jsxs("div",{className:"min-h-screen px-4",children:[e.jsx(P,{}),e.jsx(F,{})]});export{_ as default};
