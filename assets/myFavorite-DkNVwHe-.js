import"./main-BE_LZuRY.js";document.addEventListener("DOMContentLoaded",()=>{const l=document.getElementById("favorites-list"),p=document.getElementById("favorites-pagination"),t=6,o=[{id:"classic",name:"經典甜甜",price:65,img:"/TenTenPanda/assets/經典甜甜.png",padding:"p-0"},{id:"berry",name:"莓果甜甜",price:65,img:"/TenTenPanda/assets/莓果甜甜.png",padding:"p-0"},{id:"sesame",name:"芝麻甜甜",price:65,img:"/TenTenPanda/assets/芝麻甜甜.png",padding:"p-0"},{id:"matcha",name:"抹茶甜甜",price:65,img:"/TenTenPanda/assets/抹茶甜甜.png",padding:"p-0"},{id:"caramelcocoa",name:"焦糖可可甜甜",price:65,img:"/TenTenPanda/assets/焦糖可可甜甜.png",padding:"p-0"},{id:"creamlemon",name:"生乳檸檬甜甜",price:65,img:"/TenTenPanda/assets/生乳檸檬甜甜.png",padding:"p-0"},{id:"starberry",name:"星塵草莓",price:90,img:"/TenTenPanda/assets/星塵草莓（光暈）.png",padding:"p-18"},{id:"snowberry",name:"白雪綿霜莓",price:90,img:"/TenTenPanda/assets/白雪綿霜莓（光暈）.png",padding:"p-18"},{id:"berrycoco",name:"莓果可可",price:90,img:"/TenTenPanda/assets/莓果可可（光暈）.png",padding:"p-18"},{id:"SnowberryMont",name:"雪莓蒙布朗",price:90,img:"/TenTenPanda/assets/雪莓蒙布朗（光暈）.png",padding:"p-18"},{id:"wineberry",name:"熱紅酒莓果",price:90,img:"/TenTenPanda/assets/熱紅酒莓果（光暈）.png",padding:"p-18"},{id:"frostBerry",name:"莓果夾心",price:80,img:"/TenTenPanda/assets/莓果夾心（光暈）.png",padding:"p-25"},{id:"giftbox_Six",name:"經典甜甜-禮盒-6入",price:360,img:"/TenTenPanda/assets/經典甜甜-禮盒-6入-去背.png",padding:"p-25"},{id:"giftbox_twelve",name:"經典甜甜-禮盒-12入",price:750,img:"/TenTenPanda/assets/經典甜甜-禮盒-12入-去背.png",padding:"p-25"},{id:"comp_giftbox_Six",name:"綜合甜甜-禮盒-6入",price:360,img:"/TenTenPanda/assets/綜合甜甜-禮盒-6入-去背.png",padding:"p-25"},{id:"comp_giftbox_twelve",name:"綜合甜甜-禮盒-12入",price:750,img:"/TenTenPanda/assets/綜合甜甜-禮盒-12入-去背.png",padding:"p-25"}].filter(d=>localStorage.getItem(d.id)==="true");let e=1;const m=Math.ceil(o.length/t);function r(d){l.innerHTML="";const c=(d-1)*t,a=c+t;o.slice(c,a).forEach(n=>{const g=document.createElement("div");g.classList.add("col-12","col-lg-6","mb-8","favorite-item"),g.dataset.id=n.id,g.innerHTML=`
            <div class="mb-lg-8 product" data-id="${n.id}">
                <a href="./item_details-${n.id}.html" class="position-relative d-inline-block">
                    <div class="img-box ${n.padding}">
                        <img src="${n.img}" alt="${n.name}" class="img-fluid">
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
                        <h2 class="fs-6 mb-2">${n.name}</h2>
                        <p class="fs-6">$ ${n.price}</p>
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
        `,l.appendChild(g)}),f()}function f(){p.querySelectorAll(".page-number").forEach(a=>a.remove());for(let a=1;a<=m;a++){const s=document.createElement("li");s.classList.add("px-3","page-number"),a===e&&s.classList.add("text-primary-60"),s.textContent=a,s.dataset.page=a;const n=document.getElementById("next-page");p.insertBefore(s,n),s.addEventListener("click",()=>{e=a,r(e)})}const d=document.getElementById("prev-page"),c=document.getElementById("next-page");d.style.pointerEvents=e===1?"none":"auto",c.style.pointerEvents=e===m?"none":"auto",d.onclick=()=>{e>1&&(e--,r(e))},c.onclick=()=>{e<m&&(e++,r(e))}}r(e)});document.addEventListener("DOMContentLoaded",()=>{document.getElementById("favorites-list").addEventListener("click",t=>{const i=t.target.closest(".favorite-btn");if(!i)return;t.preventDefault(),t.stopPropagation();const e=i.closest(".favorite-item").dataset.id;i.classList.toggle("active"),i.classList.contains("active")?(localStorage.setItem(e,"true"),i.setAttribute("data-bs-target","#cancelFavoriteModal"),favoriteModal.show()):(localStorage.removeItem(e),i.setAttribute("data-bs-target","#favoriteModal"))}),document.querySelectorAll(".favorite-btn").forEach(t=>{const o=t.closest(".product").dataset.id;localStorage.getItem(o)==="true"&&(t.classList.add("active"),t.setAttribute("data-bs-target","#cancelFavoriteModal"))})});
