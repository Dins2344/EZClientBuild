import{r as o,u as n,j as t}from"./index-eb407973.js";import{L as m}from"./loginForm-c4b9757f.js";import"./signUp-ef101b30.js";import"./envConfig-2c904499.js";import"./formik.esm-df9e034f.js";import"./index.esm-dcaf6c88.js";import"./ReactToastify-413d6879.js";import"./useDispatch-f9907035.js";const d=()=>{const[s,e]=o.useState(),r=n(),a=localStorage.getItem("token"),i=()=>{e(!!a)};if(o.useEffect(()=>{i()}),s)r("/");else return t.jsx(t.Fragment,{children:t.jsx(m,{})})};export{d as default};