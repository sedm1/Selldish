if(!self.define){let l,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const l=document.createElement("script");l.src=i,l.onload=s,document.head.appendChild(l)}else l=i,importScripts(i),s()})).then((()=>{let l=s[i];if(!l)throw new Error(`Module ${i} didn’t register its module`);return l})));self.define=(r,e)=>{const n=l||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let u={};const o=l=>i(l,n),c={module:{uri:n},exports:u,require:o};s[n]=Promise.all(r.map((l=>c[l]||o(l)))).then((l=>(e(...l),u)))}}define(["./workbox-79ffe3e0"],(function(l){"use strict";l.setCacheNameDetails({prefix:"selldish"}),self.addEventListener("message",(l=>{l.data&&"SKIP_WAITING"===l.data.type&&self.skipWaiting()})),l.precacheAndRoute([{url:"css/369.a6f515dd.css",revision:null},{url:"css/391.e9236e1e.css",revision:null},{url:"css/4.b21c3682.css",revision:null},{url:"css/49.b59d8946.css",revision:null},{url:"css/644.54eb751f.css",revision:null},{url:"css/795.9256f3ae.css",revision:null},{url:"css/835.c30cebc7.css",revision:null},{url:"css/app.df6e6d0f.css",revision:null},{url:"img/PR-2.bc654c22.jpg",revision:null},{url:"img/PR-3.e23595ce.png",revision:null},{url:"img/Pr-1.9f855c59.jpg",revision:null},{url:"img/Pr-10.61add5e3.jpg",revision:null},{url:"img/Pr-11.4e663317.jpg",revision:null},{url:"img/Pr-12.009f170f.jpg",revision:null},{url:"img/Pr-13.3b35c4c4.jpg",revision:null},{url:"img/Pr-4.bfd780e4.jpg",revision:null},{url:"img/Pr-5.6f7f79ff.jpg",revision:null},{url:"img/Pr-6.33375628.jpg",revision:null},{url:"img/Pr-7.9a156188.jpg",revision:null},{url:"img/Pr-8.08577d98.jpg",revision:null},{url:"img/Pr-9.add5f775.jpg",revision:null},{url:"img/StarLiked.f2c6539e.svg",revision:null},{url:"img/mainBg.971d1992.jpg",revision:null},{url:"img/sterNoLiked.9baa2391.svg",revision:null},{url:"index.html",revision:"70bf303ab8042bd6f71f720197422e7f"},{url:"js/14.b16f5688.js",revision:null},{url:"js/369.014e74bb.js",revision:null},{url:"js/391.a329ce11.js",revision:null},{url:"js/4.f07c93f8.js",revision:null},{url:"js/49.def9444b.js",revision:null},{url:"js/644.907948da.js",revision:null},{url:"js/748.b77bc915.js",revision:null},{url:"js/795.f1a4c773.js",revision:null},{url:"js/835.09296ac0.js",revision:null},{url:"js/app.297887bf.js",revision:null},{url:"js/chunk-vendors.17139e62.js",revision:null},{url:"manifest.json",revision:"fd8255e1881f0f6f467cee8ea0bade53"},{url:"robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
