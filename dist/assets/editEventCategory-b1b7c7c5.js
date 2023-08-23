import{r as i,g,j as e,L as u}from"./index-f1de148d.js";import{l as b,m as x}from"./admin-405496b7.js";import{u as y}from"./formik.esm-7d1734b8.js";import{c as p,a as d}from"./index.esm-a8ae67a7.js";import"./envConfig-2c904499.js";const h=p().shape({categoryName:d().required("Category Name is required"),subCategoryName:d(),description:d().required("Description is required")}),C=()=>{const[t,c]=i.useState(),{id:l}=g(),m=async a=>{const s=await b(a);c(s==null?void 0:s.data.data)};i.useEffect(()=>{m(l)},[]);const n={categoryName:t==null?void 0:t.categoryName,subCategoryName:t==null?void 0:t.subCategoryName,description:t==null?void 0:t.description,id:t==null?void 0:t._id},r=y({initialValues:n,validationSchema:h,onSubmit:async a=>{const s=new FormData;a.categoryName!==void 0&&s.append("categoryName",a.categoryName),a.subCategoryName!==void 0&&s.append("subCategoryName",a.subCategoryName),a.description!==void 0&&s.append("description",a.description),a.id!==void 0&&s.append("id",a.id);const o=await x(a);(o==null?void 0:o.statusText)=="OK"}});return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex flex-col justify-center w-full h-screen place-items-center p-3 ",children:[e.jsx("div",{className:"flex w-full md:w-2/3 lg:w-1/3",children:e.jsx("p",{className:"my-4 text-sm text-gray-500 ",children:e.jsx(u,{to:"/admin/category-management",children:"Go back"})})}),e.jsx("div",{className:"w-full text-center mb-4 mt-1",children:e.jsx("h2",{className:"text-4xl font-extrabold dark:text-white place-self-center",children:"Edit Category"})}),e.jsxs("form",{onSubmit:r.handleSubmit,className:"w-full md:w-2/3 lg:w-1/3 h-min p-6 bg-white border border-gray-200 rounded-lg shadow",children:[e.jsx("input",{className:"hidden",...r.getFieldProps("id")}),e.jsxs("div",{className:"grid gap-6 mb-6 md:grid-cols-2",children:[e.jsxs("div",{className:"mb-6",children:[e.jsx("label",{htmlFor:"categoryName",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Category Name"}),e.jsx("input",{value:r.values.categoryName,onChange:r.handleChange,onBlur:r.handleBlur,id:"categoryName",type:"text",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}),r.touched.categoryName&&r.errors.categoryName&&e.jsx("div",{className:"text-red-500 text-sm",children:r.errors.categoryName})]}),e.jsxs("div",{className:"mb-6",children:[e.jsx("label",{htmlFor:"subcategory",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Sub category"}),e.jsx("input",{...r.getFieldProps("subCategoryName"),id:"subCategoryName",type:"text",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}),r.touched.subCategoryName&&r.errors.subCategoryName&&e.jsx("div",{className:"text-red-500 text-sm",children:r.errors.subCategoryName})]})]}),e.jsx("label",{htmlFor:"description",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Description"}),e.jsx("textarea",{...r.getFieldProps("description"),id:"description",rows:4,className:"block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}),r.touched.description&&r.errors.description&&e.jsx("div",{className:"text-red-500 text-sm",children:r.errors.description}),e.jsx("div",{className:"flex justify-center mt-4",children:e.jsx("button",{type:"submit",className:"px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",children:"Save changes"})})]})]})})};export{C as default};
