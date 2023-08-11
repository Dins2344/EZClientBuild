import{j as e,L as o}from"./index-2f93e65a.js";import{u as d}from"./formik.esm-12c9931e.js";import{c,a as s}from"./index.esm-d72b666c.js";import{s as m}from"./admin-5c35e7a4.js";import{k as u,Q as n}from"./ReactToastify-ee635d44.js";import"./envConfig-25a527f2.js";const x=c().shape({cityName:s().required("City Name is required"),state:s().required("State is required")}),k=()=>{const t=d({initialValues:{cityName:"",state:""},validationSchema:x,onSubmit:async(l,{resetForm:i})=>{const r=await m(l);r!=null&&r.data.ok&&(a(),i())}}),a=()=>{n.success("successfully added a city!",{position:"bottom-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"})};return e.jsxs(e.Fragment,{children:[e.jsx(u,{position:"bottom-right",autoClose:3e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"colored"}),e.jsxs("div",{className:"flex flex-col justify-center w-full min-h-screen -mt-14 place-items-center p-3 ",children:[e.jsx("div",{className:"flex w-full md:w-2/3 lg:w-1/3",children:e.jsx("p",{className:"my-4 text-sm text-gray-500",children:e.jsx(o,{to:"/admin/add-cities",children:"Go back"})})}),e.jsx("div",{className:"w-full text-center mb-4 mt-1",children:e.jsx("h2",{className:"text-4xl font-extrabold dark:text-white place-self-center",children:"Add a city"})}),e.jsxs("form",{onSubmit:t.handleSubmit,className:"w-full md:w-2/3 lg:w-1/3 h-min p-6 bg-white border border-gray-200 rounded-lg shadow",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsxs("div",{className:"mb-6",children:[e.jsx("label",{htmlFor:"cityName",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"City Name"}),e.jsx("input",{id:"cityName",type:"text",placeholder:"Write city name",...t.getFieldProps("cityName"),className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}),t.touched.cityName&&t.errors.cityName&&e.jsx("div",{className:"text-red-500 text-sm",children:t.errors.cityName})]}),e.jsxs("div",{className:"mb-6",children:[e.jsx("label",{htmlFor:"state",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"State"}),e.jsx("input",{id:"state",type:"text",placeholder:"State",...t.getFieldProps("state"),className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}),t.touched.state&&t.errors.state&&e.jsx("div",{className:"text-red-500 text-sm",children:t.errors.state})]})]}),e.jsx("div",{className:"flex justify-center mt-4",children:e.jsx("button",{type:"submit",className:"px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",children:"Add City"})})]})]})]})};export{k as default};
