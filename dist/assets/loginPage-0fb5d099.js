import{r as o,u as n,j as t}from"./index-aa30c290.js";import{L as m}from"./loginForm-2d4cd5af.js";import"./signUp-ef101b30.js";import"./envConfig-2c904499.js";import"./formik.esm-170e3500.js";import"./index.esm-302d3935.js";import"./ReactToastify-31fa32d1.js";import"./useDispatch-907d60ab.js";const d=()=>{const[s,e]=o.useState(),r=n(),a=localStorage.getItem("token"),i=()=>{e(!!a)};if(o.useEffect(()=>{i()}),s)r("/");else return t.jsx(t.Fragment,{children:t.jsx(m,{})})};export{d as default};