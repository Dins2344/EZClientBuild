import{r as n,j as e,L as u,u as x}from"./index-1fe445a4.js";import{O as h,a as g}from"./signUp-68e8cbcd.js";import{a as p}from"./loginForm-da0544ba.js";import{u as f}from"./formik.esm-7c9d2bbc.js";import{c as b,a as j}from"./index.esm-7df76759.js";import"./envConfig-9a8092f4.js";import"./ReactToastify-97604f09.js";import"./useDispatch-7ef66e2e.js";const v=b().shape({email:j().email("Invalid email address").required("Email is required")}),y=()=>{const[l,o]=n.useState(""),[t,r]=n.useState(0),[d,m]=n.useState(""),a=f({initialValues:{email:""},validationSchema:v,onSubmit:async i=>{console.log(i),m(i.email);const c="emailVerification",s=await h(i.email,c);console.log(s),(s==null?void 0:s.data.error)==="user exist"?(o("Email already registered. Please login or reset password."),setTimeout(()=>{o("")},4e3)):(s==null?void 0:s.data.message)=="OTP has send"&&r(1)}});return e.jsxs("div",{className:"flex justify-center items-center h-screen overflow-hidden",children:[e.jsx("div",{className:"w-full lg:w-1/2 ",children:e.jsxs("div",{className:"lg:max-w-lg mx-auto flex justify-center",children:[t==0&&e.jsxs("form",{onSubmit:a.handleSubmit,className:"bg-white shadow-md rounded px-2 pt-6 pb-8 mb-4 w-3/4",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"text-2xl font-bold mb-6",children:"Verify your email"}),e.jsxs("div",{className:"mb-6",children:[l&&e.jsx("div",{className:"text-red-500",children:l}),e.jsx("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"email",children:"Email"}),e.jsx("input",{id:"email",type:"email",placeholder:"Enter your email",value:a.values.email,onChange:a.handleChange,onBlur:a.handleBlur,className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"}),a.touched.email&&a.errors.email&&e.jsx("div",{className:"text-red-500",children:a.errors.email})]}),e.jsx("div",{className:"flex items-center justify-between",children:e.jsx("button",{className:" w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",type:"submit",children:"Send OTP"})})]}),e.jsxs("p",{className:"mt-4",children:["already have an account ..?",e.jsxs(u,{className:"text-blue-600",to:"/register/user-login",children:[" ","Login"]})]})]}),t==1&&e.jsx(w,{email:d})]})}),e.jsx(p,{})]})},w=({email:l})=>{const[o,t]=n.useState(""),[r,d]=n.useState(""),m=x(),a=async i=>{i.preventDefault();const s=await g(r,l,"signUpOTP");console.log(s),(s==null?void 0:s.data.message)=="OTP is invalid"?(t("enter valid OTP"),setTimeout(()=>{t("")},3e3)):(s==null?void 0:s.data.message)=="OTP is expired"?(t(s.data.message),setTimeout(()=>{t("")},3e3)):s!=null&&s.data.OTPValidation&&m(`/register/user-sign-up/?email=${l}`)};return e.jsx(e.Fragment,{children:e.jsxs("form",{onSubmit:a,className:"bg-white shadow-md rounded px-2 pt-6 pb-8 mb-4 w-3/4",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"text-2xl font-bold mb-6",children:"Enter OTP"}),e.jsxs("div",{className:"mb-6",children:[o&&e.jsx("div",{className:"text-red-500",children:o}),e.jsx("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"OTP",children:"Enter OTP"}),e.jsx("input",{id:"OTP",type:"number",placeholder:"Enter your OTP",value:r,onChange:i=>{d(i.target.value)},className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"}),e.jsx("div",{className:"text-red-500"})]}),e.jsx("div",{className:"flex items-center justify-between",children:e.jsx("button",{className:" w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",type:"submit",children:"Submit OTP"})})]}),e.jsxs("p",{className:"mt-4",children:["already have an account ..?",e.jsxs(u,{className:"text-blue-600",to:"/register/user-login",children:[" ","Login"]})]})]})})},C=()=>e.jsx(e.Fragment,{children:e.jsx(y,{})});export{C as default};
