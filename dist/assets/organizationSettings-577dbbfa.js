import{m as n,r as c,j as e,c as t,u as y}from"./index-f1de148d.js";import{d as v,b as z}from"./organizer-ff67fd88.js";import{l as O}from"./userApis-31423af4.js";import"./userInterceptor-ef0a808e.js";import"./envConfig-2c904499.js";const b=({updated:i,setUpdated:d})=>{const[r,g]=n.useState(!1),[o,m]=n.useState(""),[s,h]=n.useState(""),[x,p]=n.useState(),f=async()=>{const a=await v();a&&p(a.data.data)};c.useEffect(()=>{f()},[]);const l=()=>g(!r),j=a=>{const u=a.target.value;h(u)},N=async()=>{await O({orgName:o,orgType:s})&&(l(),d(!i))};return e.jsx(n.Fragment,{children:e.jsxs("form",{className:"grid gap-6",children:[e.jsx(t.Button,{variant:"outlined",size:"sm",color:"gray",onClick:l,children:"Add Organization"}),e.jsxs(t.Dialog,{open:r,handler:l,children:[e.jsxs(t.DialogBody,{className:"mt-10",children:[e.jsx(t.Input,{value:o,onChange:a=>{m(a.target.value)},label:"Organization name"}),e.jsxs("div",{className:"w-72 mt-3",children:[e.jsx("label",{className:"mr-2",children:"choose type"}),e.jsx("select",{className:"w-2/3 h-10 border border-spacing-4 rounded-md",id:"orgType",value:s,onChange:j,children:x&&x.map(a=>e.jsx("option",{value:a.categoryName,children:a.categoryName},a.categoryName))})]})]}),e.jsxs(t.DialogFooter,{className:"space-x-2",children:[e.jsx(t.Button,{size:"sm",variant:"outlined",color:"red",onClick:l,children:"Cancel"}),e.jsx(t.Button,{size:"sm",variant:"gradient",color:"green",type:"submit",onClick:N,children:"Create"})]})]})]})})},w=()=>{const[i,d]=c.useState(),[r,g]=c.useState(!1),o=y(),m=async()=>{const s=await z();d(s.data.data)};return c.useEffect(()=>{m()},[r]),e.jsxs(e.Fragment,{children:[e.jsx("h2",{className:"text-4xl font-extrabold text-black mt-10",children:"Organization Settings"}),e.jsx("h3",{className:"text-2xl  text-black mt-10",children:"Organizer profiles"}),e.jsx("p",{className:"text-sm",children:"Each profile describes a unique organizer and shows all of their events on one page. Having a complete profile can encourage attendees to follow you."}),e.jsx("div",{className:"flex justify-end mt-10",children:e.jsx(b,{updated:r,setUpdated:g})}),e.jsx("div",{className:"flex flex-col mt-2 w-full",children:i&&i.map(s=>e.jsxs("div",{className:"flex flex-wrap justify-between w-full my-2 px-4 py-2 border border-gray-300 rounded-sm",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("img",{src:s.logo?s.logo:"https://img.freepik.com/free-icon/user_318-159711.jpg",alt:"https://img.freepik.com/free-icon/user_318-159711.jpg",className:"w-16 h-16 rounded-full"}),e.jsx("p",{className:"ml-3",children:s.orgName})]}),e.jsx("div",{className:"flex items-center",children:e.jsx(t.Button,{onClick:()=>{o(`/organization/settings/edit-organization/?id=${s._id}`)},color:"red",className:"rounded-sm",children:"Edit"})})]},s._id))})]})},F=()=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"min-h-screen px-4",children:e.jsx(w,{})})});export{F as default};
