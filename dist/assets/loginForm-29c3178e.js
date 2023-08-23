import{j as e,u as d,r as u,b as m,L as i}from"./index-f1de148d.js";import{l as f,b}from"./signUp-ef101b30.js";import{u as w}from"./formik.esm-7d1734b8.js";import{c as j,a as c}from"./index.esm-a8ae67a7.js";import{Q as g,k as h}from"./ReactToastify-95ee8c6f.js";import{u as p}from"./useDispatch-48aee4ac.js";const v=({text:o})=>e.jsxs("div",{className:"flex items-center my-4",children:[e.jsx("hr",{className:"flex-grow border-gray-300 border-t"}),e.jsx("span",{className:"px-4 font-bold text-gray-500",children:o}),e.jsx("hr",{className:"flex-grow border-gray-300 border-t"})]}),y="911191795022-ltd690s4mdomnhauinctv40t26joismt.apps.googleusercontent.com",N=()=>{const o=p(),r=d();u.useEffect(()=>{const s=document.createElement("script");s.src="https://accounts.google.com/gsi/client",s.async=!0,document.head.appendChild(s),s.onload=()=>{window.google.accounts.id.initialize({client_id:y,callback:l}),window.google.accounts.id.renderButton(document.getElementById("signInDiv"),{theme:"outline",size:"large"})}},[]);const l=async s=>{const a=await f(s.credential);a!=null&&a.data.ok&&(localStorage.setItem("token",a.data.token),o(m(a==null?void 0:a.data.isUser)),n())},n=async()=>{g.success("successfully logged in",{position:"bottom-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}),setTimeout(()=>{r("/")},3e3)};return e.jsxs(e.Fragment,{children:[e.jsx(h,{position:"bottom-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"colored"}),e.jsx("div",{id:"signInDiv"})]})},k=()=>e.jsx("div",{className:"w-full lg:w-1/2 hidden lg:block",children:e.jsx("img",{className:"w-full h-auto",src:"https://cdn.evbstatic.com/s3-build/perm_001/c24baa/django/images/login/lateral-image-3.jpg",alt:"Your Image"})}),F=()=>{const[o,r]=u.useState(null),l=d(),n=p(),s=w({initialValues:{email:"",password:""},validationSchema:j({email:c().email("Invalid email address").required("Email is required"),password:c().required("Password is required")}),onSubmit:async x=>{try{const t=await b(x);t!=null&&t.data.userData&&(localStorage.setItem("token",t.data.token),n(m(t==null?void 0:t.data.userData)),await a())}catch(t){r(t.toString())}}}),a=async()=>{g.success("successfully logged in",{position:"bottom-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}),setTimeout(()=>{l("/")},3e3)};return e.jsxs("div",{className:"flex justify-center items-center h-screen overflow-hidden",children:[e.jsx(h,{position:"bottom-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"colored"}),e.jsx("div",{className:"w-full lg:w-1/2 ",children:e.jsx("div",{className:"lg:max-w-lg mx-auto flex justify-center",children:e.jsxs("div",{className:"bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-9/12 lg:w-9/12 md:w-6/12 ",children:[e.jsxs("form",{onSubmit:s.handleSubmit,children:[e.jsx("h2",{className:"text-2xl font-bold mb-6",children:"Login"}),e.jsxs("div",{className:"mb-6",children:[o&&e.jsx("div",{className:"text-red-500",children:o}),e.jsx("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"email",children:"Email"}),e.jsx("input",{name:"email",value:s.values.email,onChange:s.handleChange,onBlur:s.handleBlur,className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"email",type:"email",placeholder:"Enter your email"}),s.touched.email&&s.errors.email&&e.jsx("div",{className:"text-red-500",children:s.errors.email})]}),e.jsxs("div",{className:"mb-6",children:[e.jsx("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"password",children:"Password"}),e.jsx("input",{name:"password",value:s.values.password,onChange:s.handleChange,onBlur:s.handleBlur,className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"password",type:"password",placeholder:"Enter your password"}),s.touched.password&&s.errors.password&&e.jsx("div",{className:"text-red-500",children:s.errors.password})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("button",{className:"bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",type:"submit",children:"Login"}),e.jsx(i,{className:"inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800",to:"/register/forgot-password",children:"Forgot Password?"})]})]}),e.jsxs("p",{className:"mt-4",children:["don't have an account ..?",e.jsx(i,{className:"text-blue-600",to:"/register/user-sign-up-email-verify",children:"sign up"})]}),e.jsx(v,{text:"or"}),e.jsx("div",{className:"w-full flex justify-center",children:e.jsx(N,{})}),e.jsxs("p",{className:"mt-2",children:["Login with"," ",e.jsx(i,{className:"text-blue-500",to:"/register/OTP-login",children:"OTP"})]})]})})}),e.jsx(k,{})]})};export{F as L,k as a};
