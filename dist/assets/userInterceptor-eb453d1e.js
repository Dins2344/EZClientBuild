import{a as t,c as a}from"./envConfig-9a8092f4.js";const o=t.create({baseURL:a.BASE_URL});o.interceptors.request.use(e=>{const r=localStorage.getItem("token");return r&&(e.headers.Authorization=`Bearer ${r}`),e},e=>Promise.reject(e));export{o as a};
