import{S as j,i as p,a as y}from"./assets/vendor-c493984e.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();const d=document.querySelector(".js-gallery"),f=document.querySelector(".js-load-more"),g=document.querySelector(".js-loader-container");function L(e){const s=e.map(({largeImageURL:r,webformatURL:a,tags:t,likes:o,views:i,comments:S,downloads:q})=>`<li class="gallery-item js-gallery-item">
	<a class="gallery-link js-gallery-link" href="${r}">
		<img 
			class="gallery-image js-gallery-image" 
			src="${a}" 
			alt="${t}" 
			/>
	</a>
    <ul class="inform-container">
    <li class="inform-item">
    <h3 class="inform-title">Likes</h3>
    <p>${o}</p>
    </li>
    <li class="inform-item">
    <h3 class="inform-title">Views</h3>
    <p>${i}</p>
    </li>
    <li class="inform-item">
    <h3 class="inform-title">Comments</h3>
    <p>${S}</p>
    </li>
    <li class="inform-item">
    <h3 class="inform-title">Downloads</h3>
    <p>${q}</p>
    </li>
    </ul>
</li>`).join("");d.insertAdjacentHTML("beforeend",s)}function c(e){return p.error({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#ef4040",maxWidth:432,timeout:3e3,messageColor:"#fafafb",messageSize:"16",theme:"dark",progressBarColor:"#b51b1",position:"topRight"})}const h=new j(".js-gallery a",{captionsData:"alt",captionDelay:250,scrollZoom:!1});h.on("show.simplelightbox",function(){});const M=()=>{p.warning({message:"We are sorry, but you have reached the end of search results.",backgroundColor:"#ef6c40",maxWidth:432,timeout:3e3,messageColor:"ef6c40",messageSize:"16",theme:"dark",progressBarColor:"#ab360e",position:"topRight"})},l=e=>{e?f.classList.remove("hidden"):f.classList.add("hidden")},n=e=>{e?g.classList.remove("hidden"):g.classList.add("hidden")},v="44747047-4a0d613af8d61822ad6089110";y.defaults.baseURL="https://pixabay.com/api/";async function b(e,s){const r={key:v,q:e,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15,page:s};return(await y.get("",{params:r})).data}const C=document.querySelector(".js-search-form");let u=1,m="",w=0;const H=async e=>{e.preventDefault();const s=e.currentTarget;if(m=s.elements.query.value.trim(),!m)return d.innerHTML="",l(!1),c();u=1,d.innerHTML="",l(!1),n(!0);try{const{hits:r,totalHits:a}=await b(m,u);if(r.length===0)return n(!1),c("No images found. Please try another search term.");L(r),h.refresh(),a>r.length&&l(!0)}catch(r){c(),console.error(r)}finally{n(!1)}s.reset()},P=async(e,s)=>{const r=await b(e,s);if(r.hits.length===0)throw d.innerHTML="",new Error("No images found");return w=r.totalHits,r},x=async()=>{u+=1,n(!0),l(!1);try{const{hits:e}=await P(m,u);L(e),h.refresh(),document.querySelectorAll(".gallery-item").length<w?l(!0):M(),E()}catch(e){c(),console.error(e)}finally{n(!1)}},E=()=>{const e=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})};C.addEventListener("submit",H);f.addEventListener("click",x);
//# sourceMappingURL=commonHelpers.js.map
