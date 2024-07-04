import{S as f,i as h}from"./assets/vendor-8c59ed88.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const a=document.querySelector(".js-gallery");function d(i){return i.map(({largeImageURL:t,webformatURL:o,tags:s,likes:e,views:r,comments:n,downloads:u})=>`<li class="gallery-item js-gallery-item">
	<a class="gallery-link js-gallery-link" href="${t}">
		<img 
			class="gallery-image js-gallery-image" 
			src="${o}" 
			alt="${s}" 
                width=340
                height=200
			/>
	</a>
    <ul class="inform-container">
    <li class="inform-item">
    <h3 class="inform-title">Likes</h3>
    <p>${e}</p>
    </li>
    <li class="inform-item">
    <h3 class="inform-title">Views</h3>
    <p>${r}</p>
    </li>
    <li class="inform-item">
    <h3 class="inform-title">Comments</h3>
    <p>${n}</p>
    </li>
    <li class="inform-item">
    <h3 class="inform-title">Downloads</h3>
    <p>${u}</p>
    </li>
    </ul>
</li>`).join("")}function c(i){return h.error({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#ef4040",maxWidth:432,timeout:3e3,messageColor:"#fafafb",messageSize:"16",theme:"dark",progressBarColor:"#b51b1",position:"topRight"})}const m=new f(".js-gallery a",{captionsData:"alt",captionDelay:250,scrollZoom:!1});m.on("show.simplelightbox",function(){});const p="44747047-4a0d613af8d61822ad6089110";function g(i){const t=`https://pixabay.com/api/?key=${p}&q=${encodeURIComponent(i)}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(t).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()})}const y=document.querySelector(".js-search-form"),l=document.querySelector(".js-loader-container");y.addEventListener("submit",L);function L(i){i.preventDefault();const t=i.currentTarget,o=t.elements.query.value.trim();if(o==="")return a.innerHTML="",c();a.innerHTML="",g(o).then(s=>{if(s.hits.length===0)throw new Error("No images found");l.classList.remove("hidden"),setTimeout(()=>{l.classList.add("hidden");const e=d(s.hits);a.innerHTML=e,m.refresh()},1500)}).catch(s=>{l.classList.add("hidden"),c()}),t.reset()}
//# sourceMappingURL=commonHelpers.js.map
