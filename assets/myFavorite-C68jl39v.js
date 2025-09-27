import"./main-BtBtHIJh.js";document.addEventListener("DOMContentLoaded",()=>{const m=document.getElementById("favorites-list"),l=document.getElementById("favorites-pagination"),t=6,o=[{id:"classic",name:"經典甜甜",price:65,img:"../assets/images/經典甜甜.png",padding:"p-0"},{id:"berry",name:"莓果甜甜",price:65,img:"../assets/images/莓果甜甜.png",padding:"p-0"},{id:"sesame",name:"芝麻甜甜",price:65,img:"../assets/images/芝麻甜甜.png",padding:"p-0"},{id:"matcha",name:"抹茶甜甜",price:65,img:"../assets/images/抹茶甜甜.png",padding:"p-0"},{id:"caramelcocoa",name:"焦糖可可甜甜",price:65,img:"../assets/images/焦糖可可甜甜.png",padding:"p-0"},{id:"creamlemon",name:"生乳檸檬甜甜",price:65,img:"../assets/images/生乳檸檬甜甜.png",padding:"p-0"},{id:"starberry",name:"星塵草莓",price:90,img:"../assets/images/星塵草莓（光暈）.png",padding:"p-18"},{id:"snowberry",name:"白雪綿霜莓",price:90,img:"../assets/images/白雪綿霜莓（光暈）.png",padding:"p-18"},{id:"berrycoco",name:"莓果可可",price:90,img:"../assets/images/莓果可可（光暈）.png",padding:"p-18"},{id:"SnowberryMont",name:"雪莓蒙布朗",price:90,img:"../assets/images/雪莓蒙布朗（光暈）.png",padding:"p-18"},{id:"wineberry",name:"熱紅酒莓果",price:90,img:"../assets/images/熱紅酒莓果（光暈）.png",padding:"p-18"},{id:"frostBerry",name:"莓果夾心",price:80,img:"../assets/images/莓果夾心（光暈）.png",padding:"p-25"},{id:"giftbox_Six",name:"經典甜甜-禮盒-6入",price:360,img:"../assets/images/經典甜甜-禮盒-6入-去背.png",padding:"p-25"},{id:"giftbox_twelve",name:"經典甜甜-禮盒-12入",price:750,img:"../assets/images/經典甜甜-禮盒-12入-去背.png",padding:"p-25"},{id:"comp_giftbox_Six",name:"綜合甜甜-禮盒-6入",price:360,img:"../assets/images/綜合甜甜-禮盒-6入-去背.png",padding:"p-25"},{id:"comp_giftbox_twelve",name:"綜合甜甜-禮盒-12入",price:750,img:"../assets/images/綜合甜甜-禮盒-12入-去背.png",padding:"p-25"}].filter(d=>localStorage.getItem(d.id)==="true");let e=1;const p=Math.ceil(o.length/t);function r(d){m.innerHTML="";const c=(d-1)*t,a=c+t;o.slice(c,a).forEach(i=>{const g=document.createElement("div");g.classList.add("col-12","col-lg-6","mb-8","favorite-item"),g.dataset.id=i.id,g.innerHTML=`
            <div class="mb-lg-8 product" data-id="${i.id}">
                <a href="./item_details-${i.id}.html" class="position-relative d-inline-block">
                    <div class="img-box ${i.padding}">
                        <img src="${i.img}" alt="${i.name}" class="img-fluid">
                    </div>
                    <button
                        type="button"
                        class="favorite-btn active position-absolute top-0 end-0 fs-3 fs-lg-1"
                        data-bs-toggle="modal"
                        data-bs-target="#favoriteModal"
                    >
                        <i class="bi bi-heart empty"></i>
                        <i class="bi bi-heart-fill full"></i>
                    </button>
                </a>
                <div class="d-flex justify-content-between align-items-center">
                    <div>
                        <h2 class="fs-6 mb-2">${i.name}</h2>
                        <p class="fs-6">$ ${i.price}</p>
                    </div>
                    <button
                        type="button"
                        class="producList-cart-btn br-999"
                        data-bs-toggle="modal"
                        data-bs-target="#cartModal">
                        <i class="bi bi-cart2 fs-3 fs-lg-2"></i>
                    </button>
                </div>
            </div>
        </div>
        `,m.appendChild(g)}),f()}function f(){l.querySelectorAll(".page-number").forEach(a=>a.remove());for(let a=1;a<=p;a++){const n=document.createElement("li");n.classList.add("px-3","page-number"),a===e&&n.classList.add("text-primary-60"),n.textContent=a,n.dataset.page=a;const i=document.getElementById("next-page");l.insertBefore(n,i),n.addEventListener("click",()=>{e=a,r(e)})}const d=document.getElementById("prev-page"),c=document.getElementById("next-page");d.style.pointerEvents=e===1?"none":"auto",c.style.pointerEvents=e===p?"none":"auto",d.onclick=()=>{e>1&&(e--,r(e))},c.onclick=()=>{e<p&&(e++,r(e))}}r(e)});document.addEventListener("DOMContentLoaded",()=>{document.getElementById("favorites-list").addEventListener("click",t=>{const s=t.target.closest(".favorite-btn");if(!s)return;t.preventDefault(),t.stopPropagation();const e=s.closest(".favorite-item").dataset.id;s.classList.toggle("active"),s.classList.contains("active")?(localStorage.setItem(e,"true"),s.setAttribute("data-bs-target","#cancelFavoriteModal"),favoriteModal.show()):(localStorage.removeItem(e),s.setAttribute("data-bs-target","#favoriteModal"))}),document.querySelectorAll(".favorite-btn").forEach(t=>{const o=t.closest(".product").dataset.id;localStorage.getItem(o)==="true"&&(t.classList.add("active"),t.setAttribute("data-bs-target","#cancelFavoriteModal"))})});
