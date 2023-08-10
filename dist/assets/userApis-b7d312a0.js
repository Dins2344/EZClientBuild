import{a as s}from"./userInterceptor-c1588ff4.js";const a={BASE_URL:"http://localhost:4000/api"},g=async t=>{try{const e={email:t};return s.post(`${a.BASE_URL}/user/update-email`,e)}catch(e){console.log(e)}},i=async t=>{try{const e=await s.post(`${a.BASE_URL}/user/register-organization`,t);return console.log(e),e.data}catch(e){console.log("error in fetching",e)}},d=async()=>{try{return await s.get(`${a.BASE_URL}/user/get-user-details`)}catch(t){console.log(t)}},u=async()=>{try{return await s.get(`${a.BASE_URL}/user/get-user-details-by-Id`)}catch(t){console.log(t)}},y=async()=>{try{return await s.get(`${a.BASE_URL}/user/get-all-approved-events`)}catch(t){console.log(t)}},h=async()=>{try{return await s.get(`${a.BASE_URL}/user/get-all-events-from-following-organizers`)}catch(t){console.log(t)}},w=async t=>{try{return await s.get(`${a.BASE_URL}/user/get-complete-event-details/${t}`)}catch(e){console.log(e)}},$=async t=>{try{return await s.post(`${a.BASE_URL}/user/ticket-booking`,t)}catch(e){console.log(e)}},E=async()=>{try{return await s.get(`${a.BASE_URL}/user/get-booking-details`)}catch(t){console.log(t)}},p=async t=>{try{return await s.get(`${a.BASE_URL}/user/get-one-booking-details/${t}`)}catch(e){console.log(e)}},B=async t=>{try{return await s.get(`${a.BASE_URL}/user/cancel-booking/${t}`)}catch(e){console.log(e)}},A=async()=>{try{return await s.get(`${a.BASE_URL}/user/get-all-organizers`)}catch(t){console.log(t)}},U=async t=>{console.log(t);try{return await s.post(`${a.BASE_URL}/user/add-profile-contact-info`,t)}catch(e){console.log(e)}},L=async t=>{try{return await s.post(`${a.BASE_URL}/user/add-address`,t)}catch(e){console.log(e)}},R=async()=>{try{return await s.get(`${a.BASE_URL}/user/get-address-info`)}catch(t){console.log(t)}},S=async t=>{try{const e={password:t};return await s.post(`${a.BASE_URL}/user/verify-password`,e)}catch(e){console.log(e)}},_=async(t,e,r,o,c)=>{try{return await s.get(`${a.BASE_URL}/user/search`,{params:{searchFor:t,searchText:e,city:r,price:o,category:c}})}catch(n){console.log(n)}},k=async(t,e,r)=>{const o={secondUserId:t,orgName:e,logo:r};try{return await s.post(`${a.BASE_URL}/user/chat`,o)}catch(c){console.log(c)}},v=async()=>{try{return await s.get(`${a.BASE_URL}/user/chat/get-chats`)}catch(t){console.log(t)}},f=async(t,e)=>{const r={chatId:t,content:e};try{return await s.post(`${a.BASE_URL}/user/chat/send-message`,r)}catch(o){console.log(o)}},m=async t=>{try{return await s.get(`${a.BASE_URL}/user/chat/get-chat-messages/${t}`)}catch(e){console.log(e)}},b=async t=>{try{return await s.put(`${a.BASE_URL}/user/update-following/${t}`)}catch(e){console.log(e)}},z=async t=>{try{return await s.get(`${a.BASE_URL}/user/update-following/${t}`)}catch(e){console.log(e)}},D=async t=>{try{return await s.get(`${a.BASE_URL}/user/update-like-list/${t}`)}catch(e){console.log(e)}},C=async t=>{try{return await s.put(`${a.BASE_URL}/user/update-like-list/${t}`)}catch(e){console.log(e)}},F=async()=>{try{return await s.get(`${a.BASE_URL}/user/get-all-liked-events`)}catch(t){console.log(t)}},O=async()=>{try{return await s.get(`${a.BASE_URL}/user/get-all-following-orgs`)}catch(t){console.log(t)}},I=async t=>{try{await s.get(`${a.BASE_URL}/user/update-booking-attended/${t}`)}catch(e){console.log(e)}},P=async t=>{try{return await s.post(`${a.BASE_URL}/user/add-review`,t)}catch(e){console.log(e)}},x=async t=>{try{return await s.get(`${a.BASE_URL}/user/get-reviews/${t}`)}catch(e){console.log(e)}},M=async t=>{const e={newPassword:t};try{return await s.post(`${a.BASE_URL}/user/change-password`,e)}catch(r){console.log(r)}};export{L as A,_ as B,v as C,m as D,f as E,x as a,w as b,M as c,p as d,B as e,P as f,d as g,u as h,k as i,b as j,z as k,i as l,C as m,D as n,A as o,h as p,y as q,F as r,O as s,$ as t,g as u,S as v,E as w,I as x,R as y,U as z};
