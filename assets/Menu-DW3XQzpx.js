import{S as V,Y as E,h as C,G as I,V as O}from"./transition-BLwDm2c7.js";import{r as h,l as T,c as n,a as e,e as i,F as M,f as j,w as l,u as r,o as c,n as A,t as o,i as m,m as G}from"./index-CB1BGczu.js";const N={class:"py-12 bg-coffee-50"},W={class:"container mx-auto px-4"},B={class:"flex justify-center mb-8","data-aos":"fade-up","data-aos-delay":"200"},H={class:"inline-flex rounded-lg border border-coffee-200 p-1 bg-white"},L=["onClick"],R={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"},z=["src","alt"],F={class:"p-6"},P={class:"flex justify-between items-start mb-2"},Y={class:"text-xl font-serif text-coffee-900"},$={class:"text-coffee-600 font-medium"},J={class:"text-gray-600 mb-4"},K={class:"flex items-center justify-between"},Q={class:"text-sm text-coffee-500"},U=["onClick"],X={class:"fixed inset-0 overflow-y-auto"},Z={class:"flex min-h-full items-center justify-center p-4 text-center"},ee={class:"mt-2"},te=["src","alt"],ae={class:"text-gray-600 mb-4"},se={class:"space-y-2"},oe={class:"text-coffee-800"},ie={class:"text-coffee-800"},le={key:0,class:"text-coffee-800"},de={__name:"Menu",setup(re){const q=[{id:"all",name:"All"},{id:"coffee",name:"Coffee"},{id:"tea",name:"Tea"},{id:"desserts",name:"Desserts"}],g=[{id:1,category:"coffee",name:"Classic Espresso",description:"Rich and full-bodied espresso shot with a perfect crema",price:380,image:"https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",attributes:["Single Origin","Medium Roast"],allergens:[]},{id:2,category:"coffee",name:"Cappuccino",description:"Espresso with steamed milk and a thick layer of milk foam",price:450,image:"https://images.unsplash.com/photo-1517256064527-09c73fc73e38?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",attributes:["Whole Milk","Double Shot"],allergens:["Milk"]},{id:3,category:"coffee",name:"Caramel Latte",description:"Smooth latte with house-made caramel syrup",price:480,image:"https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",attributes:["House Syrup","Whipped Cream"],allergens:["Milk"]},{id:4,category:"tea",name:"Earl Grey",description:"Premium black tea with bergamot oil",price:380,image:"https://images.unsplash.com/photo-1519831802596-6aadd85ff671?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",attributes:["Organic","Caffeine"],allergens:[]},{id:5,category:"tea",name:"Green Tea",description:"Japanese sencha green tea",price:380,image:"https://images.unsplash.com/photo-1556881286-fc6915169721?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",attributes:["Organic","Light Caffeine"],allergens:[]},{id:6,category:"desserts",name:"Tiramisu",description:"Classic Italian dessert with coffee-soaked ladyfingers",price:580,image:"https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",attributes:["House Made","Contains Alcohol"],allergens:["Milk","Eggs","Wheat"]},{id:7,category:"desserts",name:"Chocolate Cake",description:"Rich chocolate layer cake with ganache",price:550,image:"https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",attributes:["House Made","Dark Chocolate"],allergens:["Milk","Eggs","Wheat"]}],d=h("all"),p=h(!1),a=h(null),D=T(()=>d.value==="all"?g:g.filter(f=>f.category===d.value)),S=f=>{a.value=f,p.value=!0},b=()=>{p.value=!1,setTimeout(()=>{a.value=null},200)};return(f,s)=>(c(),n("div",N,[e("div",W,[s[0]||(s[0]=e("div",{class:"text-center mb-12"},[e("h1",{class:"text-4xl font-serif text-coffee-900 mb-4","data-aos":"fade-up"},"Our Menu"),e("p",{class:"text-lg text-coffee-600 max-w-2xl mx-auto","data-aos":"fade-up","data-aos-delay":"100"}," Discover our carefully curated selection of coffee, tea, and delightful treats ")],-1)),e("div",B,[e("div",H,[(c(),n(M,null,j(q,t=>e("button",{key:t.id,onClick:u=>d.value=t.id,class:A([d.value===t.id?"bg-coffee-500 text-white":"text-coffee-600 hover:text-coffee-800","px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"])},o(t.name),11,L)),64))])]),e("div",R,[(c(!0),n(M,null,j(D.value,t=>(c(),n("div",{key:t.id,class:"bg-white rounded-lg shadow-md overflow-hidden","data-aos":"fade-up","data-aos-delay":"300"},[e("img",{src:t.image,alt:t.name,class:"w-full h-48 object-cover"},null,8,z),e("div",F,[e("div",P,[e("h3",Y,o(t.name),1),e("span",$,"¥"+o(t.price),1)]),e("p",J,o(t.description),1),e("div",K,[e("span",Q,o(t.attributes.join(" • ")),1),e("button",{onClick:u=>S(t),class:"btn btn-secondary text-sm"}," View Details ",8,U)])])]))),128))])]),i(r(V),{appear:"",show:p.value,as:"template"},{default:l(()=>[i(r(E),{as:"div",onClose:b,class:"relative z-10"},{default:l(()=>[i(r(C),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:l(()=>s[1]||(s[1]=[e("div",{class:"fixed inset-0 bg-black bg-opacity-25"},null,-1)])),_:1}),e("div",X,[e("div",Z,[i(r(C),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:l(()=>[i(r(I),{class:"w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"},{default:l(()=>{var t,u,x,_,v,y,w;return[i(r(O),{as:"h3",class:"text-2xl font-serif leading-6 text-coffee-900 mb-4"},{default:l(()=>{var k;return[m(o((k=a.value)==null?void 0:k.name),1)]}),_:1}),e("div",ee,[e("img",{src:(t=a.value)==null?void 0:t.image,alt:(u=a.value)==null?void 0:u.name,class:"w-full h-64 object-cover rounded-lg mb-4"},null,8,te),e("p",ae,o((x=a.value)==null?void 0:x.description),1),e("div",se,[e("p",oe,[s[2]||(s[2]=e("span",{class:"font-medium"},"Price:",-1)),m(" ¥"+o((_=a.value)==null?void 0:_.price),1)]),e("p",ie,[s[3]||(s[3]=e("span",{class:"font-medium"},"Attributes:",-1)),m(" "+o((v=a.value)==null?void 0:v.attributes.join(", ")),1)]),(y=a.value)!=null&&y.allergens?(c(),n("p",le,[s[4]||(s[4]=e("span",{class:"font-medium"},"Allergens:",-1)),m(" "+o((w=a.value)==null?void 0:w.allergens.join(", ")),1)])):G("",!0)])]),e("div",{class:"mt-6"},[e("button",{type:"button",class:"btn btn-primary w-full",onClick:b}," Close ")])]}),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])]))}};export{de as default};
