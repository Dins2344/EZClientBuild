import{r as o,u as n,j as t}from"./index-1b70dfac.js";import{L as m}from"./loginForm-67bef48c.js";import"./signUp-ef101b30.js";import"./envConfig-2c904499.js";import"./formik.esm-e75dca06.js";import"./index.esm-346b85e4.js";import"./ReactToastify-9ad22707.js";import"./useDispatch-f6aaab02.js";const d=()=>{const[s,e]=o.useState(),r=n(),a=localStorage.getItem("token"),i=()=>{e(!!a)};if(o.useEffect(()=>{i()}),s)r("/");else return t.jsx(t.Fragment,{children:t.jsx(m,{})})};export{d as default};