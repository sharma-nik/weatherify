function lr(r,a){if(r==null)return{};var e={},c=Object.keys(r),s,f;for(f=0;f<c.length;f++)s=c[f],!(a.indexOf(s)>=0)&&(e[s]=r[s]);return e}var kr="-ms-",dr="-moz-",gr="-webkit-",H="comm",J="rule",Q="decl",y="@import",rr="@keyframes",ar="@layer",er=Math.abs,F=String.fromCharCode,nr=Object.assign;function wr(r,a){return k(r,0)^45?(((a<<2^k(r,0))<<2^k(r,1))<<2^k(r,2))<<2^k(r,3):0}function V(r){return r.trim()}function mr(r,a){return(r=a.exec(r))?r[0]:r}function I(r,a,e){return r.replace(a,e)}function cr(r,a){return r.indexOf(a)}function k(r,a){return r.charCodeAt(a)|0}function K(r,a,e){return r.slice(a,e)}function p(r){return r.length}function X(r){return r.length}function z(r,a){return a.push(r),r}function pr(r,a){return r.map(a).join("")}var N=1,A=1,$=0,h=0,t=0,C="";function P(r,a,e,c,s,f,R){return{value:r,root:a,parent:e,type:c,props:s,children:f,line:N,column:A,length:R,return:""}}function Er(r,a){return nr(P("",null,null,"",null,null,0),r,{length:-r.length},a)}function sr(){return t}function tr(){return t=h>0?k(C,--h):0,A--,t===10&&(A=1,N--),t}function b(){return t=h<$?k(C,h++):0,A++,t===10&&(A=1,N++),t}function O(){return k(C,h)}function W(){return h}function Y(r,a){return K(C,r,a)}function q(r){switch(r){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ir(r){return N=A=1,$=p(C=r),h=0,[]}function ur(r){return C="",r}function _(r){return V(Y(h-1,B(r===91?r+2:r===40?r+1:r)))}function fr(r){for(;(t=O())&&t<33;)b();return q(r)>2||q(t)>3?"":" "}function or(r,a){for(;--a&&b()&&!(t<48||t>102||t>57&&t<65||t>70&&t<97););return Y(r,W()+(a<6&&O()==32&&b()==32))}function B(r){for(;b();)switch(t){case r:return h;case 34:case 39:r!==34&&r!==39&&B(t);break;case 40:r===41&&B(r);break;case 92:b();break}return h}function hr(r,a){for(;b()&&r+t!==47+10;)if(r+t===42+42&&O()===47)break;return"/*"+Y(a,h-1)+"*"+F(r===47?r:b())}function vr(r){for(;!q(O());)b();return Y(r,h)}function Mr(r){return ur(D("",null,null,null,[""],r=ir(r),0,[0],r))}function D(r,a,e,c,s,f,R,d,T){for(var j=0,w=0,i=R,E=0,x=0,g=0,v=1,L=1,o=1,u=0,m="",S=s,M=f,l=c,n=m;L;)switch(g=u,u=b()){case 40:if(g!=108&&k(n,i-1)==58){cr(n+=I(_(u),"&","&\f"),"&\f")!=-1&&(o=-1);break}case 34:case 39:case 91:n+=_(u);break;case 9:case 10:case 13:case 32:n+=fr(g);break;case 92:n+=or(W()-1,7);continue;case 47:switch(O()){case 42:case 47:z(br(hr(b(),W()),a,e),T);break;default:n+="/"}break;case 123*v:d[j++]=p(n)*o;case 125*v:case 59:case 0:switch(u){case 0:case 125:L=0;case 59+w:o==-1&&(n=I(n,/\f/g,"")),x>0&&p(n)-i&&z(x>32?Z(n+";",c,e,i-1):Z(I(n," ","")+";",c,e,i-2),T);break;case 59:n+=";";default:if(z(l=U(n,a,e,j,w,s,d,m,S=[],M=[],i),f),u===123)if(w===0)D(n,a,l,l,S,f,i,d,M);else switch(E===99&&k(n,3)===110?100:E){case 100:case 108:case 109:case 115:D(r,l,l,c&&z(U(r,l,l,0,0,s,d,m,s,S=[],i),M),s,M,i,d,c?S:M);break;default:D(n,l,l,l,[""],M,0,d,M)}}j=w=x=0,v=o=1,m=n="",i=R;break;case 58:i=1+p(n),x=g;default:if(v<1){if(u==123)--v;else if(u==125&&v++==0&&tr()==125)continue}switch(n+=F(u),u*v){case 38:o=w>0?1:(n+="\f",-1);break;case 44:d[j++]=(p(n)-1)*o,o=1;break;case 64:O()===45&&(n+=_(b())),E=O(),w=i=p(m=n+=vr(W())),u++;break;case 45:g===45&&p(n)==2&&(v=0)}}return f}function U(r,a,e,c,s,f,R,d,T,j,w){for(var i=s-1,E=s===0?f:[""],x=X(E),g=0,v=0,L=0;g<c;++g)for(var o=0,u=K(r,i+1,i=er(v=R[g])),m=r;o<x;++o)(m=V(v>0?E[o]+" "+u:I(u,/&\f/g,E[o])))&&(T[L++]=m);return P(r,a,e,s===0?J:d,T,j,w)}function br(r,a,e){return P(r,a,e,H,F(sr()),K(r,2,-2),0)}function Z(r,a,e,c){return P(r,a,e,Q,K(r,0,c),K(r,c+1,-1),c)}function G(r,a){for(var e="",c=X(r),s=0;s<c;s++)e+=a(r[s],s,r,a)||"";return e}function Or(r,a,e,c){switch(r.type){case ar:if(r.children.length)break;case y:case Q:return r.return=r.return||r.value;case H:return"";case rr:return r.return=r.value+"{"+G(r.children,c)+"}";case J:r.value=r.props.join(",")}return p(e=G(r.children,c))?r.return=r.value+"{"+e+"}":""}export{Q as D,rr as K,kr as M,J as R,gr as W,lr as _,G as a,Er as b,pr as c,Or as d,Mr as e,k as f,p as g,wr as h,cr as i,dr as j,ur as k,ir as l,mr as m,b as n,F as o,O as p,_ as q,I as r,X as s,q as t,Y as u,h as v};