import{a as t}from"./axios-4a70c6fc.js";const a=async s=>{try{return await t.post("http://localhost:4000/auth/register-user",s)}catch(o){console.log("error in fetching",o)}},c=async s=>{try{return await t.post("http://localhost:4000/auth/user-login",s)}catch(o){throw console.log("error in login",o),(o==null?void 0:o.response.status)==401?new Error("invalid user name or password"):new Error("login error")}},l=async(s,o)=>{try{return await t.get(`http://localhost:4000/auth/user-email-verify/${s}/${o}`)}catch(r){console.log(r)}},i=async(s,o,r)=>{try{return await t.get(`http://localhost:4000/auth/user-OTP-verify/${s}/${o}/${r}`)}catch(e){console.log(e)}},h=async s=>{try{return await t.get(`http://localhost:4000/auth/user-google-login/${s}`)}catch(o){console.log(o)}};export{l as O,i as a,c as b,h as l,a as s};
