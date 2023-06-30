import{r as l,W as w,j as e,a as j,i as v,U as k,F as I,T as y,d as C}from"./index-398b3f9e.js";import{h as T}from"./3d-house-47cf2a53.js";const b="/weatherify/assets/rainy-8766ba36.png",N="/weatherify/assets/cloudy-94e8f0d9.png",W="/weatherify/assets/drizzle-c671aa13.svg",D="/weatherify/assets/rain-e61bb09c.png",S="/weatherify/assets/sun-9d8a7a01.png",B="/weatherify/assets/snow-7b7b7e72.png",_=[{weatherType:"Clear",weatherIcon:S},{weatherType:"Clouds",weatherIcon:N},{weatherType:"Rain",weatherIcon:D},{weatherType:"Drizzle",weatherIcon:W},{weatherType:"Snow",weatherIcon:B}],u=n=>{const r=_.filter(t=>{if(t.weatherType===n)return t.weatherIcon});if(r.length)return r[0].weatherIcon},z=(n,r,t,a)=>{const s={cityName:n,coordinates:r};if(t.length){for(const o of t)if(o.cityName===n)return;t.push(s),a(t)}else t.push(s),a(t)},H=n=>{if(localStorage.getItem("favouriteCities")){const r=JSON.parse(localStorage.getItem("favouriteCities"));for(const t of r)if(t.cityName===n)return!0;return!1}else return!1},E=(n,r)=>{if(r.length){let t;for(const a in r)if(r[a].cityName===n){t=a;break}return r.splice(t,1),r}else return};const M=({day:n,temp:r,weather:t,index:a})=>{const{weeklyDataIndex:s,setWeeklyDataIndex:o}=l.useContext(w);return e.jsxs("div",{className:"weatherTileWrapper",style:{background:s===a?"rgba(110, 49, 157, 0.6)":"",border:s===a?"1px solid rgba(255, 255, 255, 0.4)":"",cursor:s===a?"pointer":""},onClick:()=>{o(s===a?0:a)},children:[e.jsx("p",{className:"miniTemp",children:n}),e.jsx("img",{style:{height:"38px"},src:u(t),alt:"House logo"}),e.jsx("p",{className:"miniTemp",children:`${Math.round(r,2)}°`})]})};var m={},O=v;Object.defineProperty(m,"__esModule",{value:!0});var f=m.default=void 0,R=O(j()),$=e,q=(0,R.default)((0,$.jsx)("path",{d:"M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15-5-2.18L7 18V5h10v13z"}),"BookmarkBorder");f=m.default=q;const G=({cityName:n,coordinates:r})=>{const[t,a]=l.useState(null),{daily:s}=l.useContext(k),{weeklyDataIndex:o}=l.useContext(w),{favouriteLocations:x=[],setFavouriteLocation:g}=l.useContext(I);let i=new Date(s[o].dt*1e3),c=new Date(s[o].dt*1e3);return i=i.toDateString().split(" ").slice(1,4).join(" "),c=c.toDateString().split(" ")[0],l.useEffect(()=>{a(H(n))},[]),e.jsxs("div",{className:"weatherInfoWrapper",children:[e.jsxs("div",{className:"weatherStatsWrapper",children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"10px",minWidth:"80%"},children:[e.jsx("div",{className:"weatherIcon",children:e.jsx("img",{src:u(s[o].weather[0].main)?u(s[o].weather[0].main):b,style:{height:"150px"},alt:"House logo"})}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsxs("div",{style:{width:"300px"},children:[e.jsx("p",{className:"cityName",children:n}),e.jsxs("p",{className:"temperatureMain",children:[Math.round(s[o].temp.day,2),"°c"]}),e.jsxs("div",{style:{display:"flex",justifyContent:"center"},children:[e.jsxs("div",{className:"miniTemp dateWrapper",children:[e.jsx("div",{className:"weatherOverview",children:c}),e.jsx("div",{className:"temperatureHighLow",children:i})]}),e.jsxs("div",{style:{},className:"weatherWrapper",children:[e.jsx("p",{className:"weatherOverview",children:s[o].weather[0].main}),e.jsxs("p",{className:"temperatureHighLow",children:["H: ",Math.round(s[o].temp.max,2),"° | L:"," ",Math.round(s[o].temp.min,2),"°"]})]})]})]}),e.jsx("div",{style:{display:"flex",justifyContent:"flex-end",marginTop:"10px"},children:t?e.jsx(y,{title:"Added to favourite locations",arrow:!0,children:e.jsx(C,{style:{cursor:"pointer"},onClick:()=>{a(!1),E(n,x),a(!1)}})}):e.jsx(y,{title:"Add to favourite locations",arrow:!0,children:e.jsx(f,{style:{cursor:"pointer"},onClick:()=>{a(!0),z(n,r,x,g)}})})})]})]}),e.jsx("div",{style:{display:"flex",borderTop:"1px solid rgba(255, 255, 255, 0.40)",paddingTop:"10px"},children:s.map((d,h)=>{if(h>0){let p=new Date(d.dt*1e3);return p=p.toDateString().split(" ")[0],e.jsx(M,{index:h,day:p,temp:d.temp.day,weather:d.weather[0].main},`weatherTile ${h}`)}else return})})]}),e.jsx("img",{className:"houseLogo",src:T,alt:"House logo"})]})};export{G as default};
