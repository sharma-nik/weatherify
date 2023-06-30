import{r as l,W as w,j as e,U as j,F as k}from"./index-a7c33fa2.js";import{h as v}from"./3d-house-2241f3e9.js";import{r as I,k as C}from"./createSvgIcon-589b22d0.js";import{d as f,e as T}from"./Tooltip-39143a58.js";import"./Serializer-259e5f7f.js";const b=""+new URL("rainy-8766ba36.png",import.meta.url).href,N=""+new URL("cloudy-94e8f0d9.png",import.meta.url).href,W=""+new URL("drizzle-c671aa13.svg",import.meta.url).href,D=""+new URL("rain-e61bb09c.png",import.meta.url).href,R=""+new URL("sun-9d8a7a01.png",import.meta.url).href,S=""+new URL("snow-7b7b7e72.png",import.meta.url).href,B=[{weatherType:"Clear",weatherIcon:R},{weatherType:"Clouds",weatherIcon:N},{weatherType:"Rain",weatherIcon:D},{weatherType:"Drizzle",weatherIcon:W},{weatherType:"Snow",weatherIcon:S}],m=n=>{const s=B.filter(t=>{if(t.weatherType===n)return t.weatherIcon});if(s.length)return s[0].weatherIcon},_=(n,s,t,a)=>{const r={cityName:n,coordinates:s};if(t.length){for(const o of t)if(o.cityName===n)return;t.push(r),a(t)}else t.push(r),a(t)},z=n=>{if(localStorage.getItem("favouriteCities")){const s=JSON.parse(localStorage.getItem("favouriteCities"));for(const t of s)if(t.cityName===n)return!0;return!1}else return!1},H=(n,s)=>{if(s.length){let t;for(const a in s)if(s[a].cityName===n){t=a;break}return s.splice(t,1),s}else return};const L=({day:n,temp:s,weather:t,index:a})=>{const{weeklyDataIndex:r,setWeeklyDataIndex:o}=l.useContext(w);return e.jsxs("div",{className:"weatherTileWrapper",style:{background:r===a?"rgba(110, 49, 157, 0.6)":"",border:r===a?"1px solid rgba(255, 255, 255, 0.4)":"",cursor:r===a?"pointer":""},onClick:()=>{o(r===a?0:a)},children:[e.jsx("p",{className:"miniTemp",children:n}),e.jsx("img",{style:{height:"38px"},src:m(t),alt:"House logo"}),e.jsx("p",{className:"miniTemp",children:`${Math.round(s,2)}°`})]})};var u={},U=C;Object.defineProperty(u,"__esModule",{value:!0});var y=u.default=void 0,E=U(I()),M=e,O=(0,E.default)((0,M.jsx)("path",{d:"M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15-5-2.18L7 18V5h10v13z"}),"BookmarkBorder");y=u.default=O;const P=({cityName:n,coordinates:s})=>{const[t,a]=l.useState(null),{daily:r}=l.useContext(j),{weeklyDataIndex:o}=l.useContext(w),{favouriteLocations:x=[],setFavouriteLocation:g}=l.useContext(k);let i=new Date(r[o].dt*1e3),c=new Date(r[o].dt*1e3);return i=i.toDateString().split(" ").slice(1,4).join(" "),c=c.toDateString().split(" ")[0],l.useEffect(()=>{a(z(n))},[]),e.jsxs("div",{className:"weatherInfoWrapper",children:[e.jsxs("div",{className:"weatherStatsWrapper",children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"10px",minWidth:"80%"},children:[e.jsx("div",{className:"weatherIcon",children:e.jsx("img",{src:m(r[o].weather[0].main)?m(r[o].weather[0].main):b,style:{height:"150px"},alt:"House logo"})}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsxs("div",{style:{width:"300px"},children:[e.jsx("p",{className:"cityName",children:n}),e.jsxs("p",{className:"temperatureMain",children:[Math.round(r[o].temp.day,2),"°c"]}),e.jsxs("div",{style:{display:"flex",justifyContent:"center"},children:[e.jsxs("div",{className:"miniTemp dateWrapper",children:[e.jsx("div",{className:"weatherOverview",children:c}),e.jsx("div",{className:"temperatureHighLow",children:i})]}),e.jsxs("div",{style:{},className:"weatherWrapper",children:[e.jsx("p",{className:"weatherOverview",children:r[o].weather[0].main}),e.jsxs("p",{className:"temperatureHighLow",children:["H: ",Math.round(r[o].temp.max,2),"° | L:"," ",Math.round(r[o].temp.min,2),"°"]})]})]})]}),e.jsx("div",{style:{display:"flex",justifyContent:"flex-end",marginTop:"10px"},children:t?e.jsx(f,{title:"Added to favourite locations",arrow:!0,children:e.jsx(T,{style:{cursor:"pointer"},onClick:()=>{a(!1),H(n,x),a(!1)}})}):e.jsx(f,{title:"Add to favourite locations",arrow:!0,children:e.jsx(y,{style:{cursor:"pointer"},onClick:()=>{a(!0),_(n,s,x,g)}})})})]})]}),e.jsx("div",{style:{display:"flex",borderTop:"1px solid rgba(255, 255, 255, 0.40)",paddingTop:"10px"},children:r.map((d,p)=>{if(p>0){let h=new Date(d.dt*1e3);return h=h.toDateString().split(" ")[0],e.jsx(L,{index:p,day:h,temp:d.temp.day,weather:d.weather[0].main},`weatherTile ${p}`)}else return})})]}),e.jsx("img",{className:"houseLogo",src:v,alt:"House logo"})]})};export{P as default};
