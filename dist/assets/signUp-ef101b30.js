import{a as e,c as t}from"./envConfig-2c904499.js";const c=async o=>{try{return await e.post(`${t.BASE_URL}/auth/register-user`,o)}catch(s){console.log("error in fetching",s)}},i=async o=>{try{return await e.post(`${t.BASE_URL}/auth/user-login`,o)}catch(s){throw console.log("error in login",s),(s==null?void 0:s.response.status)==401?new Error("invalid user name or password"):new Error("login error")}},g=async(o,s)=>{try{return await e.get(`${t.BASE_URL}/auth/user-email-verify/${o}/${s}`)}catch(r){console.log(r)}},l=async(o,s,r)=>{try{return await e.get(`${t.BASE_URL}/auth/user-OTP-verify/${o}/${s}/${r}`)}catch(n){console.log(n)}},u=async o=>{try{return await e.get(`${t.BASE_URL}/auth/user-google-login/${o}`)}catch(s){console.log(s)}},h=async(o,s)=>{const r={email:o,newPassword:s};try{return await e.post(`${t.BASE_URL}/auth/forgot-password`,r)}catch(n){console.log(n)}};export{g as O,l as a,i as b,h as f,u as l,c as s};
