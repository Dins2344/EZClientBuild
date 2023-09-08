import{r as t,j as e,L as h,u as v}from"./index-0cc785ab.js";import{u as g}from"./formik.esm-2ff7ae21.js";import{c as f,a as u,b as y}from"./index.esm-5b801ad0.js";import{O as P,f as N,a as O}from"./signUp-84196a95.js";import{Q as p,k as b}from"./ReactToastify-d29681fd.js";import{a as C}from"./loginForm-72034c8b.js";import"./envConfig-9a8092f4.js";import"./useDispatch-d5111a95.js";const S=()=>{const[n,a]=t.useState(""),[l,d]=t.useState(!1),[s,c]=t.useState(""),[i,r]=t.useState(),o=g({initialValues:{email:""},validationSchema:f({email:u().email("Invalid email address").required("Email is required")}),onSubmit:async x=>{const j="OTPLogin";try{c(x.email);const m=await P(x.email,j);m!=null&&m.data.status?(r(!0),w()):a("Entered email is not registered")}catch(m){a(m.toString())}}}),w=()=>{p.success("OTP has been successfully sent to this email address.",{position:"bottom-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"})};return e.jsxs(e.Fragment,{children:[e.jsx(b,{position:"bottom-right",autoClose:3e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"colored"}),e.jsx("div",{className:"lg:max-w-lg mx-auto flex justify-center",children:e.jsx("div",{className:"bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-9/12 lg:w-9/12 md:w-6/12 ",children:l?e.jsx(T,{email:s}):e.jsx(e.Fragment,{children:i?e.jsx(k,{setEmailVerified:d,email:s}):e.jsxs("form",{onSubmit:o.handleSubmit,children:[e.jsx("h2",{className:"text-2xl font-bold mb-6",children:"Confirm email"}),e.jsxs("div",{className:"mb-6",children:[n&&e.jsx("div",{className:"text-red-500",children:n}),e.jsx("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"email",children:"Email"}),e.jsx("input",{name:"email",value:o.values.email,onChange:o.handleChange,onBlur:o.handleBlur,className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"email",type:"email",placeholder:"Enter your email"}),o.touched.email&&o.errors.email&&e.jsx("div",{className:"text-red-500",children:o.errors.email})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(h,{className:"inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800",to:"/register/user-login",children:"Back to login"}),e.jsx("button",{className:"bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",type:"submit",children:"Send OTP"})]})]})})})})]})},k=({email:n,setEmailVerified:a})=>{const[l,d]=t.useState(""),[s,c]=t.useState(""),i=async()=>{const o=await O(l,n,"signUpOTP");o!=null&&o.data.OTPValidation?a(!0):c(o==null?void 0:o.data.message)};return e.jsx(e.Fragment,{children:e.jsxs("div",{children:[e.jsx("h2",{className:"text-2xl font-bold mb-6",children:"Enter your OTP"}),e.jsxs("div",{className:"mb-6",children:[s&&e.jsx("div",{className:"text-red-500",children:s}),e.jsx("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"email",children:"Enter OTP"}),e.jsx("input",{name:"OTP",value:l,onChange:r=>d(r.target.value),className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"email",placeholder:"Enter your OTP"})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(h,{className:"inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800",to:"/register/user-login",children:"Back to login"}),e.jsx("button",{className:"bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",onClick:i,children:"verify"})]})]})})},T=({email:n})=>{const[a,l]=t.useState(""),d=v(),s=g({initialValues:{email:n,password:"",confirmPassword:""},validationSchema:f({email:u().email("Invalid email address").required("Email is required"),password:u().required("Password is required"),confirmPassword:u().oneOf([y("password")],"Passwords must match").required("Confirm password is required")}),onSubmit:async i=>{try{const r=await N(i.email,i.password);r!=null&&r.data.ok&&c()}catch(r){l(r.toString())}}}),c=()=>{p.success("Successfully changed password. Please login with your new password",{position:"bottom-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}),setTimeout(()=>d("/register/user-login"),3e3)};return e.jsxs(e.Fragment,{children:[e.jsx(b,{position:"bottom-right",autoClose:3e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"colored"}),e.jsxs("form",{onSubmit:s.handleSubmit,children:[a.length&&e.jsx(e.Fragment,{children:e.jsx("div",{className:"text-red-500",children:a})}),e.jsx("h2",{className:"text-2xl font-bold mb-6",children:"Enter new password"}),e.jsxs("div",{className:"mb-6",children:[e.jsx("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"password",children:"Password"}),e.jsx("input",{name:"password",value:s.values.password,onChange:s.handleChange,onBlur:s.handleBlur,className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"password",type:"password",placeholder:"Enter your password"}),s.touched.password&&s.errors.password&&e.jsx("div",{className:"text-red-500",children:s.errors.password})]}),e.jsxs("div",{className:"mb-6",children:[e.jsx("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"confirmPassword",children:"Confirm password"}),e.jsx("input",{name:"confirmPassword",value:s.values.confirmPassword,onChange:s.handleChange,onBlur:s.handleBlur,className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"confirmPassword",type:"password",placeholder:"Re-enter password"}),s.touched.password&&s.errors.confirmPassword&&e.jsx("div",{className:"text-red-500",children:s.errors.confirmPassword})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(h,{className:"inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800",to:"/register/user-login",children:"Back to login"}),e.jsx("button",{className:"bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",type:"submit",children:"Change"})]})]})]})},R=()=>e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex w-full h-screen justify-center overflow-hidden items-center",children:[e.jsx("div",{className:"lg:w-1/2 w-full",children:e.jsx(S,{})}),e.jsx(C,{})]})});export{R as default};
