import{r as t,u as c,j as e,L as m}from"./index-aa30c290.js";import{s as u}from"./signUp-ef101b30.js";import{a as h}from"./loginForm-2d4cd5af.js";import{u as p}from"./formik.esm-170e3500.js";import{c as f,a as r,b as x}from"./index.esm-302d3935.js";import{Q as g,k as w}from"./ReactToastify-31fa32d1.js";import"./envConfig-2c904499.js";import"./useDispatch-907d60ab.js";const N=f().shape({firstName:r().required("First name is required"),lastName:r().required("Last name is required"),password:r().required("Password is required"),confirmPassword:r().oneOf([x("password")],"Passwords must match").required("Confirm password is required")}),b=()=>{const[l,n]=t.useState(""),i=c();t.useEffect(()=>{const a=new URLSearchParams(window.location.search).get("email");a&&n(a)},[]);const s=p({initialValues:{firstName:"",lastName:"",email:"",password:"",confirmPassword:""},validationSchema:N,onSubmit:async o=>{o.email=l;const a=await u(o);a!=null&&a.data&&(localStorage.setItem("token",a.data.token),d())}}),d=async()=>{g.success("Account registered. Redirecting to home page soon.",{position:"top-center",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}),setTimeout(()=>{i("/")},3e3)};return e.jsxs("div",{className:"flex justify-center items-center h-screen overflow-hidden",children:[e.jsx(w,{position:"top-center",autoClose:3e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"colored"}),e.jsx("div",{className:"w-full lg:w-1/2 ",children:e.jsx("div",{className:"lg:max-w-lg mx-auto flex justify-center",children:e.jsxs("form",{onSubmit:s.handleSubmit,className:"bg-white shadow-md rounded px-2 pt-6 pb-8 mb-4 w-3/4",children:[e.jsx("h2",{className:"text-2xl font-bold mb-6",children:"Sign Up"}),e.jsxs("div",{className:"mb-4 flex",children:[e.jsxs("div",{className:"mr-1 w-full",children:[e.jsx("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"firstName",children:"First name"}),e.jsx("input",{id:"firstName",value:s.values.firstName,onChange:s.handleChange,onBlur:s.handleBlur,type:"text",placeholder:"First name",className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"}),s.touched.firstName&&s.errors.firstName&&e.jsx("div",{className:"text-red-500",children:s.errors.firstName})]}),e.jsxs("div",{className:"w-full",children:[e.jsx("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"lastName",children:"Last name"}),e.jsx("input",{id:"lastName",value:s.values.lastName,onChange:s.handleChange,onBlur:s.handleBlur,type:"text",placeholder:"Last name",className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"}),s.touched.lastName&&s.errors.lastName&&e.jsx("div",{className:"text-red-500",children:s.errors.lastName})]})]}),e.jsxs("div",{className:"mb-6",children:[e.jsx("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"password",children:"Password"}),e.jsx("input",{id:"password",type:"password",placeholder:"Enter your password",value:s.values.password,onChange:s.handleChange,onBlur:s.handleBlur,className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"}),s.touched.password&&s.errors.password&&e.jsx("div",{className:"text-red-500",children:s.errors.password})]}),e.jsxs("div",{className:"mb-6",children:[e.jsx("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"confirmPassword",children:"Confirm password"}),e.jsx("input",{id:"confirmPassword",type:"password",placeholder:"Reenter your password",value:s.values.confirmPassword,onChange:s.handleChange,onBlur:s.handleBlur,className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"}),s.touched.confirmPassword&&s.errors.confirmPassword&&e.jsx("div",{className:"text-red-500",children:s.errors.confirmPassword})]}),e.jsx("div",{className:"flex items-center justify-between",children:e.jsx("button",{className:" w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",type:"submit",children:"Sign Up"})}),e.jsxs("p",{className:"mt-4",children:["already have an account ..?",e.jsxs(m,{className:"text-blue-600",to:"/register/user-login",children:[" ","Login"]})]})]})})}),e.jsx(h,{})]})},B=()=>e.jsx(e.Fragment,{children:e.jsx(b,{})});export{B as default};
