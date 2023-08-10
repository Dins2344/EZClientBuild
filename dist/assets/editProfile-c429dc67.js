import{r as s,j as e,c as n,_ as b,u as N}from"./index-fb96649b.js";import{v as p,u as C,c as k}from"./userApis-d1de784e.js";import{O as S,a as E}from"./signUp-5cb5a434.js";import"./userInterceptor-c1588ff4.js";import"./axios-4a70c6fc.js";const O=()=>{const[a,i]=s.useState(""),[m,d]=s.useState(!1),[l,x]=s.useState(""),[r,f]=s.useState(!1),[h,u]=s.useState(""),[g,w]=s.useState(!1),t=()=>w(!g),j=async()=>{const o=await p(a);console.log(o),o!=null&&o.data.ok?d(!0):d(!1)},v=async()=>{const c=await S(l,"emailVerification");console.log(c),c!=null&&c.data.ok&&f(!0)},P=async()=>{const c=await E(h,l,"signUpOTP");if(console.log(c),c!=null&&c.data.OTPValidation){t();const y=await C(l);console.log(y)}};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"px-5 md:px-10 lg:px-40 mt-5",children:[e.jsx("h3",{className:"font-semibold text-sm md:text-lg lg:text-xl",children:"Change E-mail"}),r?e.jsx("div",{className:"mt-5",children:e.jsxs("div",{className:"flex w-4/12",children:[e.jsx(n.Input,{value:h,onChange:o=>u(o.target.value),label:"enter your OTP"}),e.jsx(n.Button,{onClick:P,className:"ml-3",children:"Submit"})]})}):e.jsx("div",{className:"mt-5",children:m?e.jsxs("div",{className:"flex w-4/12",children:[e.jsx(n.Input,{value:l,onChange:o=>x(o.target.value),label:"enter your new E-mail"}),e.jsx(n.Button,{onClick:v,className:"ml-3 px-3 w-32 h-10",children:"Send OTP"})]}):e.jsxs("div",{className:"flex w-4/12",children:[e.jsx(n.Input,{value:a,onChange:o=>i(o.target.value),label:"enter your password"}),e.jsx(n.Button,{onClick:j,className:"ml-3",children:"Verify"})]})})]}),e.jsx(e.Fragment,{children:e.jsx(n.Dialog,{size:"sm",open:g,handler:t,children:e.jsx(n.DialogBody,{children:e.jsx(T,{handleOpen:t})})})})]})},T=({handleOpen:a})=>{const[i,m]=s.useState(5);return s.useEffect(()=>{const d=setTimeout(()=>{m(l=>l-1)},1e3);return i===0&&(localStorage.removeItem("token"),a(),window.location.reload()),()=>{clearTimeout(d)}},[i]),e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx("p",{children:"You will be logged out soon, so please re-login!"}),e.jsxs("h3",{className:"font-semibold text-sm md:text-lg lg:text-xl",children:[i," Seconds"]})]})})},I=()=>{const[a,i]=s.useState(""),[m,d]=s.useState(!1),[l,x]=s.useState(""),[r,f]=s.useState(""),[h,u]=s.useState(""),g=async()=>{const t=await p(a);t!=null&&t.data.ok?(u(""),d(!0)):u("Entered password is not correct")},w=async()=>{if(l===r){const t=await k(l);t!=null&&t.data.ok&&u("")}else u("confirm password does not match with new password you entered")};return e.jsxs("div",{className:"px-5 md:px-10 lg:px-40 mt-5",children:[e.jsx("h3",{className:"font-semibold text-sm md:text-lg lg:text-xl",children:"Change password"}),e.jsxs("div",{className:"mt-5",children:[h.length>0&&e.jsx("p",{className:"text-red-500 my-2",children:h}),m?e.jsxs("div",{className:"flex flex-col items-end w-4/12",children:[e.jsx("div",{className:"my-2 w-full",children:e.jsx(n.Input,{value:l,onChange:t=>x(t.target.value),label:"enter your new password"})}),e.jsx("div",{className:"my-2 w-full",children:e.jsx(n.Input,{value:r,onChange:t=>f(t.target.value),label:"confirm your password"})}),e.jsx(n.Button,{size:"sm",onClick:w,className:"ml-3",children:"Submit"})]}):e.jsxs("div",{className:"flex w-4/12",children:[e.jsx(n.Input,{value:a,onChange:t=>i(t.target.value),label:"enter your current password"}),e.jsx(n.Button,{size:"sm",onClick:g,className:"ml-3 px-3 w-32 h-10",children:"Verify"})]})]})]})},V=s.lazy(()=>b(()=>import("./contactInfo-9ad23eb1.js"),["assets/contactInfo-9ad23eb1.js","assets/index-fb96649b.js","assets/index-53bd7d69.css","assets/index.esm-0a980d12.js","assets/userApis-d1de784e.js","assets/userInterceptor-c1588ff4.js","assets/axios-4a70c6fc.js","assets/useDispatch-22cd6ac8.js"])),D=()=>{const[a,i]=s.useState("contactInfo"),[m,d]=s.useState(""),l=N();s.useEffect(()=>{const r=localStorage.getItem("token");r&&d(r),r||l("/")},[]);const x=r=>{i(r)};return e.jsx(e.Fragment,{children:m&&e.jsxs("div",{className:"w-full min-h-screen",children:[e.jsx("div",{className:"w-full  bg-blue-gray-50 px-5 md:px-10 lg:px-40",children:e.jsxs("div",{className:"flex h-10 md:h-20 w-full items-center justify-between",children:[e.jsx("h4",{onClick:()=>x("contactInfo"),className:`text-sm md:text-lg lg:text-xl md:font-bold dark:text-white hover:cursor-pointer hover:bg-blue-gray-600 rounded-md p-3 ${a==="contactInfo"&&"bg-blue-gray-500"} `,children:"Account info"}),e.jsx("h4",{onClick:()=>x("changeEmail"),className:`text-sm md:text-lg lg:text-xl md:font-bold dark:text-white hover:cursor-pointer hover:bg-blue-gray-600 rounded-md p-3 ${a==="changeEmail"&&"bg-blue-gray-500"}`,children:"Change email"}),e.jsx("h4",{onClick:()=>x("changePassword"),className:`text-sm md:text-lg lg:text-xl md:font-bold dark:text-white hover:cursor-pointer hover:bg-blue-gray-600 rounded-md p-3 ${a==="changePassword"&&"bg-blue-gray-500"}`,children:"Change password"})]})}),e.jsx("div",{children:a==="contactInfo"&&e.jsx(s.Suspense,{children:e.jsx(V,{})})}),e.jsx("div",{children:a==="changeEmail"&&e.jsx(O,{})}),e.jsx("div",{children:a==="changePassword"&&e.jsx(I,{})})]})})};export{D as default};