import{r,j as e,L as u,u as x}from"./index-1b70dfac.js";import{O as h,a as g}from"./signUp-ef101b30.js";import{a as p}from"./loginForm-67bef48c.js";import{u as f}from"./formik.esm-e75dca06.js";import{c as b,a as j}from"./index.esm-346b85e4.js";import"./envConfig-2c904499.js";import"./ReactToastify-9ad22707.js";import"./useDispatch-f6aaab02.js";const v=b().shape({email:j().email("Invalid email address").required("Email is required")}),y=()=>{const[l,n]=r.useState(""),[t,o]=r.useState(0),[d,m]=r.useState(""),a=f({initialValues:{email:""},validationSchema:v,onSubmit:async i=>{m(i.email);const c="emailVerification",s=await h(i.email,c);(s==null?void 0:s.data.error)==="user exist"?(n("Email already registered. Please login or reset password."),setTimeout(()=>{n("")},4e3)):(s==null?void 0:s.data.message)=="OTP has send"&&o(1)}});return e.jsxs("div",{className:"flex justify-center items-center h-screen overflow-hidden",children:[e.jsx("div",{className:"w-full lg:w-1/2 ",children:e.jsxs("div",{className:"lg:max-w-lg mx-auto flex justify-center",children:[t==0&&e.jsxs("form",{onSubmit:a.handleSubmit,className:"bg-white shadow-md rounded px-2 pt-6 pb-8 mb-4 w-3/4",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"text-2xl font-bold mb-6",children:"Verify your email"}),e.jsxs("div",{className:"mb-6",children:[l&&e.jsx("div",{className:"text-red-500",children:l}),e.jsx("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"email",children:"Email"}),e.jsx("input",{id:"email",type:"email",placeholder:"Enter your email",value:a.values.email,onChange:a.handleChange,onBlur:a.handleBlur,className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"}),a.touched.email&&a.errors.email&&e.jsx("div",{className:"text-red-500",children:a.errors.email})]}),e.jsx("div",{className:"flex items-center justify-between",children:e.jsx("button",{className:" w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",type:"submit",children:"Send OTP"})})]}),e.jsxs("p",{className:"mt-4",children:["already have an account ..?",e.jsxs(u,{className:"text-blue-600",to:"/register/user-login",children:[" ","Login"]})]})]}),t==1&&e.jsx(w,{email:d})]})}),e.jsx(p,{})]})},w=({email:l})=>{const[n,t]=r.useState(""),[o,d]=r.useState(""),m=x(),a=async i=>{i.preventDefault();const s=await g(o,l,"signUpOTP");(s==null?void 0:s.data.message)=="OTP is invalid"?(t("enter valid OTP"),setTimeout(()=>{t("")},3e3)):(s==null?void 0:s.data.message)=="OTP is expired"?(t(s.data.message),setTimeout(()=>{t("")},3e3)):s!=null&&s.data.OTPValidation&&m(`/register/user-sign-up/?email=${l}`)};return e.jsx(e.Fragment,{children:e.jsxs("form",{onSubmit:a,className:"bg-white shadow-md rounded px-2 pt-6 pb-8 mb-4 w-3/4",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"text-2xl font-bold mb-6",children:"Enter OTP"}),e.jsxs("div",{className:"mb-6",children:[n&&e.jsx("div",{className:"text-red-500",children:n}),e.jsx("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"OTP",children:"Enter OTP"}),e.jsx("input",{id:"OTP",type:"number",placeholder:"Enter your OTP",value:o,onChange:i=>{d(i.target.value)},className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"}),e.jsx("div",{className:"text-red-500"})]}),e.jsx("div",{className:"flex items-center justify-between",children:e.jsx("button",{className:" w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",type:"submit",children:"Submit OTP"})})]}),e.jsxs("p",{className:"mt-4",children:["already have an account ..?",e.jsxs(u,{className:"text-blue-600",to:"/register/user-login",children:[" ","Login"]})]})]})})},C=()=>e.jsx(e.Fragment,{children:e.jsx(y,{})});export{C as default};
