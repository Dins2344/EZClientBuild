import{r as l,u as i,j as e}from"./index-115ee365.js";import{a as m}from"./signUp-ef101b30.js";import{a as d}from"./loginForm-83e994d1.js";import"./envConfig-2c904499.js";import"./formik.esm-0b07e758.js";import"./index.esm-7979f4ab.js";import"./ReactToastify-004524da.js";import"./useDispatch-549d81b8.js";const u=()=>{const[s,a]=l.useState(""),n=i(),r=async t=>{const c=new URLSearchParams(window.location.search).get("email");t.preventDefault();const o=await m(s,c,"OTPLogin");o!=null&&o.data.OTPValidation&&(localStorage.setItem("token",o.data.token),n("/"))};return e.jsxs("div",{className:"flex justify-center items-center h-screen overflow-hidden",children:[e.jsx("div",{className:"w-full lg:w-1/2 ",children:e.jsx("div",{className:"lg:max-w-lg mx-auto flex justify-center",children:e.jsxs("form",{onSubmit:r,className:"bg-white shadow-md rounded px-2 pt-6 pb-8 mb-4 w-3/4",children:[e.jsx("h2",{className:"text-2xl font-bold mb-6",children:"OTP Login"}),e.jsxs("div",{className:"mb-6",children:[e.jsx("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"OTP",children:"Enter OTP"}),e.jsx("input",{value:s,onChange:t=>{a(t.target.value)},className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"OTP",type:"number",placeholder:"Enter your OTP"})]}),e.jsx("div",{className:"flex items-center justify-between",children:e.jsx("button",{className:" w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",type:"submit",children:"Submit"})})]})})}),e.jsx(d,{})]})},v=()=>{const[s,a]=l.useState(),n=i(),r=localStorage.getItem("token"),t=()=>{a(!!r)};if(l.useEffect(()=>{t()}),s)n("/");else return e.jsx(e.Fragment,{children:e.jsx(u,{})})};export{v as default};
