(()=>{var nr=(r,t,e)=>()=>{if(e)throw e[0];try{return r&&(t=r(r=0)),t}catch(n){throw e=[n],n}};var E_=(r,t)=>()=>{try{return t||r((t={exports:{}}).exports,t),t.exports}catch(e){throw t=0,e}};function A_(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function C_(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function qa(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Fp(){let r=qa("canvas");return r.style.display="block",r}function Xu(...r){let t="THREE."+r.shift();na?na("log",t,...r):console.log(t,...r)}function Op(r){let t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=r[1];e&&e.isStackTrace?r[0]+=" "+e.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function kt(...r){r=Op(r);let t="THREE."+r.shift();if(na)na("warn",t,...r);else{let e=r[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...r)}}function Ht(...r){r=Op(r);let t="THREE."+r.shift();if(na)na("error",t,...r);else{let e=r[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...r)}}function ss(...r){let t=r.join(" ");t in Ld||(Ld[t]=!0,kt(...r))}function Bp(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function To(){let r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Mn[r&255]+Mn[r>>8&255]+Mn[r>>16&255]+Mn[r>>24&255]+"-"+Mn[t&255]+Mn[t>>8&255]+"-"+Mn[t>>16&15|64]+Mn[t>>24&255]+"-"+Mn[e&63|128]+Mn[e>>8&255]+"-"+Mn[e>>16&255]+Mn[e>>24&255]+Mn[n&255]+Mn[n>>8&255]+Mn[n>>16&255]+Mn[n>>24&255]).toLowerCase()}function oe(r,t,e){return Math.max(t,Math.min(e,r))}function R_(r,t){return(r%t+t)%t}function Yh(r,t,e){return(1-e)*r+e*t}function kp(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function qu(r){switch(r.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function P_(r,t){if(t.constructor===Float32Array)return r;let e=qu(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(r/e,-1)}function I_(r,t){if(t.constructor===Float32Array)return r;let e=qu(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(r*e)}function L_(){let r={enabled:!0,workingColorSpace:Wa,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===ge&&(i.r=lr(i.r),i.g=lr(i.g),i.b=lr(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ge&&(i.r=Qs(i.r),i.g=Qs(i.g),i.b=Qs(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===pr?Xa:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[a].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Wa]:{primaries:t,whitePoint:n,transfer:Xa,toXYZ:Nd,fromXYZ:Ud,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ln},outputColorSpaceConfig:{drawingBufferColorSpace:ln}},[ln]:{primaries:t,whitePoint:n,transfer:ge,toXYZ:Nd,fromXYZ:Ud,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ln}}}),r}function lr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Qs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}function $h(r){return typeof HTMLImageElement!="undefined"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&r instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&r instanceof ImageBitmap?Hl.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(kt("Texture: Unable to serialize Texture."),{})}function jh(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}function ou(r,t,e,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){ns.fromArray(r,s);let o=i.x*Math.abs(ns.x)+i.y*Math.abs(ns.y)+i.z*Math.abs(ns.z),l=t.dot(ns),c=e.dot(ns),h=n.dot(ns);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}function Z_(r,t,e,n,i,s,a,o){let l;if(t.side===mn?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,t.side===Br,o),l===null)return null;Tl.copy(o),Tl.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(Tl);return c<e.near||c>e.far?null:{distance:c,point:Tl.clone(),object:r}}function wl(r,t,e,n,i,s,a,o,l,c){r.getVertexPosition(o,yl),r.getVertexPosition(l,Sl),r.getVertexPosition(c,Ml);let h=Z_(r,t,e,n,yl,Sl,Ml,qd);if(h){let d=new q;Lr.getBarycoord(qd,yl,Sl,Ml,d),i&&(h.uv=Lr.getInterpolatedAttribute(i,o,l,c,d,new jt)),s&&(h.uv1=Lr.getInterpolatedAttribute(s,o,l,c,d,new jt)),a&&(h.normal=Lr.getInterpolatedAttribute(a,o,l,c,d,new q),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new q,materialIndex:0};Lr.getNormal(yl,Sl,Ml,f.normal),h.face=f,h.barycoord=d}return h}function gs(r){let t={};for(let e in r){t[e]={};for(let n in r[e]){let i=r[e][n];if($d(i))i.isRenderTargetTexture?(kt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if($d(i[0])){let s=[];for(let a=0,o=i.length;a<o;a++)s[a]=i[a].clone();t[e][n]=s}else t[e][n]=i.slice();else t[e][n]=i}}return t}function En(r){let t={};for(let e=0;e<r.length;e++){let n=gs(r[e]);for(let i in n)t[i]=n[i]}return t}function $d(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function K_(r){let t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Yu(r){let t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ae.workingColorSpace}function Js(r,t){return!r||r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function Cl(r){return r!==void 0&&r.inTangents!==void 0&&r.outTangents!==void 0}function Hp(r,t,e,n,i){let s=1-r;return s*s*s*t+3*s*s*r*e+3*s*r*r*n+r*r*r*i}function t0(r,t,e,n,i){let s=1-r;return 3*s*s*(e-t)+6*s*r*(n-e)+3*r*r*(i-n)}function e0(r,t,e,n,i){let s=(r-t)/(i-t);for(let a=0;a<8;a++){let o=Hp(s,t,e,n,i)-r;if(Math.abs(o)<1e-10)break;let l=t0(s,t,e,n,i);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-o/l))}return s}function Kd(r,t){for(let e=0,n=r.length;e!==n;e+=2)r[e]+=t}function Qd(r,t){for(let e=0,n=r.length;e!==n;e+=2)r[e]*=t}function $u(r,t,e,n){let i=h0(n);switch(e){case zu:return r*t;case gc:return r*t/i.components*i.byteLength;case _c:return r*t/i.components*i.byteLength;case zr:return r*t*2/i.components*i.byteLength;case xc:return r*t*2/i.components*i.byteLength;case ku:return r*t*3/i.components*i.byteLength;case Ii:return r*t*4/i.components*i.byteLength;case vc:return r*t*4/i.components*i.byteLength;case _o:case xo:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case vo:case yo:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Sc:case bc:return Math.max(r,16)*Math.max(t,8)/4;case yc:case Mc:return Math.max(r,8)*Math.max(t,8)/2;case Tc:case wc:case Ac:case Cc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Ec:case So:case Rc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Pc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Ic:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Lc:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Dc:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Nc:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Uc:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Fc:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Oc:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Bc:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case zc:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case kc:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Gc:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Vc:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Hc:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Wc:case Xc:case qc:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Yc:case Zc:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Mo:case Jc:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function h0(r){switch(r){case Xn:case Uu:return{byteLength:1,components:1};case ha:case Fu:case Pi:return{byteLength:2,components:1};case pc:case mc:return{byteLength:2,components:4};case Ri:case dc:case pi:return{byteLength:4,components:1};case Ou:case Bu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}var ip,Mu,rp,us,sp,oa,Br,mn,Wi,fs,la,bu,Tu,wu,ap,ds,op,lp,cp,hp,up,fp,dp,pp,Eu,Au,mp,gp,_p,xp,vp,yp,Sp,Mp,bp,Dl,Nl,Ul,js,Fl,Ol,Bl,zl,cc,Tp,wp,Xi,Cu,Ru,Pu,mo,Iu,Lu,Du,Nu,ps,ca,hc,uc,ta,Ui,kl,hn,Ep,go,Un,fc,fr,Xn,Uu,Fu,ha,dc,Ri,pi,Pi,pc,mc,ms,Ou,Bu,zu,ku,Ii,cr,dr,gc,_c,zr,xc,vc,_o,xo,vo,yo,yc,Sc,Mc,bc,Tc,wc,Ec,Ac,Cc,So,Rc,Pc,Ic,Lc,Dc,Nc,Uc,Fc,Oc,Bc,zc,kc,Gc,Vc,Hc,Wc,Xc,qc,Yc,Zc,Mo,Jc,Ha,Gl,Il,pu,mu,gu,_u,Ap,bo,Cp,pr,ln,Wa,Xa,ge,Ll,Rp,Pp,Ip,Lp,Gu,Dp,Np,Vu,Hu,Up,Wu,di,ea,Ld,na,zp,Fi,Mn,qh,Vl,Ku,jt,Oi,Qu,q,Zh,Dd,ju,Wt,Jh,Nd,Ud,ae,Bs,Hl,D_,ia,N_,Kh,Fn,tf,Le,Wl,ni,Ya,Xl,lc,be,zs,bi,U_,F_,Ar,hl,ti,Fd,Od,Bi,Za,O_,Bd,ks,ir,ul,Oa,B_,z_,zd,kd,Gd,Vd,k_,Gs,Qh,un,Ai,G_,ra,Gp,Cr,fl,zt,bn,as,Ti,rr,tu,sr,Vs,Hs,Hd,eu,nu,iu,ru,su,au,Lr,zi,ar,wi,dl,Ws,Xs,qs,Rr,Pr,es,Ba,pl,ml,ns,Je,gl,V_,Ci,Ja,$a,cn,H_,za,lu,Dr,W_,fi,cu,Ys,ei,ka,on,ki,hu,X_,q_,Ei,Y_,Gi,or,uu,_l,xl,ql,sa,Wd,is,vl,Xd,yl,Sl,Ml,fu,bl,qd,Tl,Re,Ka,Qa,Zs,Yd,El,Zd,J_,Ga,Va,ja,rs,$_,Al,Nr,Jd,Yl,to,os,hr,eo,no,wn,io,ur,ro,so,Vp,Q_,j_,Vi,Zl,Hi,ls,ao,Jl,$l,Ur,Kl,Ql,jl,tc,ii,Fr,ec,nc,ic,oo,Or,rc,sc,Wp,ac,cs,lo,du,jd,tp,co,Rl,Pl,Ni,ho,Ir,ep,np,Tn,xu,uo,fo,vu,hs,po,$s,Ks,aa,oc,Zu,n0,Ju,i0,r0,s0,a0,o0,l0,c0,yu,Ce,dT,ef,Su,nf=nr(()=>{ip=0,Mu=1,rp=2,us=1,sp=2,oa=3,Br=0,mn=1,Wi=2,fs=0,la=1,bu=2,Tu=3,wu=4,ap=5,ds=100,op=101,lp=102,cp=103,hp=104,up=200,fp=201,dp=202,pp=203,Eu=204,Au=205,mp=206,gp=207,_p=208,xp=209,vp=210,yp=211,Sp=212,Mp=213,bp=214,Dl=0,Nl=1,Ul=2,js=3,Fl=4,Ol=5,Bl=6,zl=7,cc=0,Tp=1,wp=2,Xi=0,Cu=1,Ru=2,Pu=3,mo=4,Iu=5,Lu=6,Du=7,Nu=300,ps=301,ca=302,hc=303,uc=304,ta=1e3,Ui=1001,kl=1002,hn=1003,Ep=1004,go=1005,Un=1006,fc=1007,fr=1008,Xn=1009,Uu=1010,Fu=1011,ha=1012,dc=1013,Ri=1014,pi=1015,Pi=1016,pc=1017,mc=1018,ms=1020,Ou=35902,Bu=35899,zu=1021,ku=1022,Ii=1023,cr=1026,dr=1027,gc=1028,_c=1029,zr=1030,xc=1031,vc=1033,_o=33776,xo=33777,vo=33778,yo=33779,yc=35840,Sc=35841,Mc=35842,bc=35843,Tc=36196,wc=37492,Ec=37496,Ac=37488,Cc=37489,So=37490,Rc=37491,Pc=37808,Ic=37809,Lc=37810,Dc=37811,Nc=37812,Uc=37813,Fc=37814,Oc=37815,Bc=37816,zc=37817,kc=37818,Gc=37819,Vc=37820,Hc=37821,Wc=36492,Xc=36494,qc=36495,Yc=36283,Zc=36284,Mo=36285,Jc=36286,Ha=2300,Gl=2301,Il=2302,pu=2303,mu=2400,gu=2401,_u=2402,Ap=3200,bo=0,Cp=1,pr="",ln="srgb",Wa="srgb-linear",Xa="linear",ge="srgb",Ll=7680,Rp=519,Pp=512,Ip=513,Lp=514,Gu=515,Dp=516,Np=517,Vu=518,Hu=519,Up=35044,Wu="300 es",di=2e3,ea=2001;Ld={},na=null;zp={[Dl]:Dl,[Ul]:Bl,[Fl]:Fl,[js]:Ol,[Nl]:Nl,[Bl]:Ul,[zl]:zl,[Ol]:js},Fi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,t);t.target=null}}},Mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],qh=Math.PI/180,Vl=180/Math.PI;Ku=class Ku{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=oe(this.x,t.x,e.x),this.y=oe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=oe(this.x,t,e),this.y=oe(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(oe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*i+t.x,this.y=s*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ku.prototype.isVector2=!0;jt=Ku,Oi=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3],f=s[a+0],u=s[a+1],g=s[a+2],_=s[a+3];if(d!==_||l!==f||c!==u||h!==g){let p=l*f+c*u+h*g+d*_;p<0&&(f=-f,u=-u,g=-g,_=-_,p=-p);let m=1-o;if(p<.9995){let v=Math.acos(p),w=Math.sin(v);m=Math.sin(m*v)/w,o=Math.sin(o*v)/w,l=l*m+f*o,c=c*m+u*o,h=h*m+g*o,d=d*m+_*o}else{l=l*m+f*o,c=c*m+u*o,h=h*m+g*o,d=d*m+_*o;let v=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=v,c*=v,h*=v,d*=v}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,s,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=s[a],f=s[a+1],u=s[a+2],g=s[a+3];return t[e]=o*g+h*d+l*u-c*f,t[e+1]=l*g+h*f+c*d-o*u,t[e+2]=c*g+h*u+o*f-l*d,t[e+3]=h*g-o*d-l*f-c*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),d=o(s/2),f=l(n/2),u=l(i/2),g=l(s/2);switch(a){case"XYZ":this._x=f*h*d+c*u*g,this._y=c*u*d-f*h*g,this._z=c*h*g+f*u*d,this._w=c*h*d-f*u*g;break;case"YXZ":this._x=f*h*d+c*u*g,this._y=c*u*d-f*h*g,this._z=c*h*g-f*u*d,this._w=c*h*d+f*u*g;break;case"ZXY":this._x=f*h*d-c*u*g,this._y=c*u*d+f*h*g,this._z=c*h*g+f*u*d,this._w=c*h*d-f*u*g;break;case"ZYX":this._x=f*h*d-c*u*g,this._y=c*u*d+f*h*g,this._z=c*h*g-f*u*d,this._w=c*h*d+f*u*g;break;case"YZX":this._x=f*h*d+c*u*g,this._y=c*u*d+f*h*g,this._z=c*h*g-f*u*d,this._w=c*h*d-f*u*g;break;case"XZY":this._x=f*h*d-c*u*g,this._y=c*u*d-f*h*g,this._z=c*h*g+f*u*d,this._w=c*h*d+f*u*g;break;default:kt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],f=n+o+d;if(f>0){let u=.5/Math.sqrt(f+1);this._w=.25/u,this._x=(h-l)*u,this._y=(s-c)*u,this._z=(a-i)*u}else if(n>o&&n>d){let u=2*Math.sqrt(1+n-o-d);this._w=(h-l)/u,this._x=.25*u,this._y=(i+a)/u,this._z=(s+c)/u}else if(o>d){let u=2*Math.sqrt(1+o-n-d);this._w=(s-c)/u,this._x=(i+a)/u,this._y=.25*u,this._z=(l+h)/u}else{let u=2*Math.sqrt(1+d-n-o);this._w=(a-i)/u,this._x=(s+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(oe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-s*l,this._y=i*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,s=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,i=-i,s=-s,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+s*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+s*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Qu=class Qu{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Dd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Dd.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-s*i),d=2*(s*n-a*e);return this.x=e+l*c+a*d-o*h,this.y=n+l*h+o*c-s*d,this.z=i+l*d+s*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=oe(this.x,t.x,e.x),this.y=oe(this.y,t.y,e.y),this.z=oe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=oe(this.x,t,e),this.y=oe(this.y,t,e),this.z=oe(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(oe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Zh.copy(this).projectOnVector(t),this.sub(Zh)}reflect(t){return this.sub(Zh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Qu.prototype.isVector3=!0;q=Qu,Zh=new q,Dd=new Oi,ju=class ju{constructor(t,e,n,i,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c)}set(t,e,n,i,s,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],f=n[2],u=n[5],g=n[8],_=i[0],p=i[3],m=i[6],v=i[1],w=i[4],y=i[7],T=i[2],E=i[5],x=i[8];return s[0]=a*_+o*v+l*T,s[3]=a*p+o*w+l*E,s[6]=a*m+o*y+l*x,s[1]=c*_+h*v+d*T,s[4]=c*p+h*w+d*E,s[7]=c*m+h*y+d*x,s[2]=f*_+u*v+g*T,s[5]=f*p+u*w+g*E,s[8]=f*m+u*y+g*x,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*s*h+n*o*l+i*s*c-i*a*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,f=o*l-h*s,u=c*s-a*l,g=e*d+n*f+i*u;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=d*_,t[1]=(i*c-h*n)*_,t[2]=(o*n-i*a)*_,t[3]=f*_,t[4]=(h*e-i*l)*_,t[5]=(i*s-o*e)*_,t[6]=u*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*s)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return ss("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Jh.makeScale(t,e)),this}rotate(t){return ss("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Jh.makeRotation(-t)),this}translate(t,e){return ss("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Jh.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};ju.prototype.isMatrix3=!0;Wt=ju,Jh=new Wt,Nd=new Wt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ud=new Wt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ae=L_();Hl=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Bs===void 0&&(Bs=qa("canvas")),Bs.width=t.width,Bs.height=t.height;let i=Bs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Bs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=qa("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=lr(s[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(lr(e[n]/255)*255):e[n]=lr(e[n]);return{data:e,width:t.width,height:t.height}}else return kt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},D_=0,ia=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:D_++}),this.uuid=To(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement!="undefined"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame!="undefined"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push($h(i[a].image)):s.push($h(i[a]))}else s=$h(i);n.url=s}return e||(t.images[this.uuid]=n),n}};N_=0,Kh=new q,Fn=class r extends Fi{constructor(t=r.DEFAULT_IMAGE,e=r.DEFAULT_MAPPING,n=Ui,i=Ui,s=Un,a=fr,o=Ii,l=Xn,c=r.DEFAULT_ANISOTROPY,h=pr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:N_++}),this.uuid=To(),this.name="",this.source=new ia(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new jt(0,0),this.repeat=new jt(1,1),this.center=new jt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Kh).x}get height(){return this.source.getSize(Kh).y}get depth(){return this.source.getSize(Kh).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){kt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){kt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Nu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ta:t.x=t.x-Math.floor(t.x);break;case Ui:t.x=t.x<0?0:1;break;case kl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ta:t.y=t.y-Math.floor(t.y);break;case Ui:t.y=t.y<0?0:1;break;case kl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=Nu;Fn.DEFAULT_ANISOTROPY=1;tf=class tf{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s,l=t.elements,c=l[0],h=l[4],d=l[8],f=l[1],u=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+u+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let w=(c+1)/2,y=(u+1)/2,T=(m+1)/2,E=(h+f)/4,x=(d+_)/4,M=(g+p)/4;return w>y&&w>T?w<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(w),i=E/n,s=x/n):y>T?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=E/i,s=M/i):T<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(T),n=x/s,i=M/s),this.set(n,i,s,e),this}let v=Math.sqrt((p-g)*(p-g)+(d-_)*(d-_)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(p-g)/v,this.y=(d-_)/v,this.z=(f-h)/v,this.w=Math.acos((c+u+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=oe(this.x,t.x,e.x),this.y=oe(this.y,t.y,e.y),this.z=oe(this.z,t.z,e.z),this.w=oe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=oe(this.x,t,e),this.y=oe(this.y,t,e),this.z=oe(this.z,t,e),this.w=oe(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(oe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};tf.prototype.isVector4=!0;Le=tf,Wl=class extends Fi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Un,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Le(0,0,t,e),this.scissorTest=!1,this.viewport=new Le(0,0,t,e),this.textures=[];let i=n.count;for(let s=0;s<i;s++)this.textures[s]=new Fn({width:t,height:e,depth:n.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Un,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new ia(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ni=class extends Wl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ya=class extends Fn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=hn,this.minFilter=hn,this.wrapR=Ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}},Xl=class extends Fn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=hn,this.minFilter=hn,this.wrapR=Ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}},lc=class lc{constructor(t,e,n,i,s,a,o,l,c,h,d,f,u,g,_,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c,h,d,f,u,g,_,p)}set(t,e,n,i,s,a,o,l,c,h,d,f,u,g,_,p){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=s,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=d,m[14]=f,m[3]=u,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lc().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/zs.setFromMatrixColumn(t,0).length(),s=1/zs.setFromMatrixColumn(t,1).length(),a=1/zs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){let f=a*h,u=a*d,g=o*h,_=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=u+g*c,e[5]=f-_*c,e[9]=-o*l,e[2]=_-f*c,e[6]=g+u*c,e[10]=a*l}else if(t.order==="YXZ"){let f=l*h,u=l*d,g=c*h,_=c*d;e[0]=f+_*o,e[4]=g*o-u,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=u*o-g,e[6]=_+f*o,e[10]=a*l}else if(t.order==="ZXY"){let f=l*h,u=l*d,g=c*h,_=c*d;e[0]=f-_*o,e[4]=-a*d,e[8]=g+u*o,e[1]=u+g*o,e[5]=a*h,e[9]=_-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let f=a*h,u=a*d,g=o*h,_=o*d;e[0]=l*h,e[4]=g*c-u,e[8]=f*c+_,e[1]=l*d,e[5]=_*c+f,e[9]=u*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let f=a*l,u=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=_-f*d,e[8]=g*d+u,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=u*d+g,e[10]=f-_*d}else if(t.order==="XZY"){let f=a*l,u=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=f*d+_,e[5]=a*h,e[9]=u*d-g,e[2]=g*d-u,e[6]=o*h,e[10]=_*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(U_,t,F_)}lookAt(t,e,n){let i=this.elements;return ti.subVectors(t,e),ti.lengthSq()===0&&(ti.z=1),ti.normalize(),Ar.crossVectors(n,ti),Ar.lengthSq()===0&&(Math.abs(n.z)===1?ti.x+=1e-4:ti.z+=1e-4,ti.normalize(),Ar.crossVectors(n,ti)),Ar.normalize(),hl.crossVectors(ti,Ar),i[0]=Ar.x,i[4]=hl.x,i[8]=ti.x,i[1]=Ar.y,i[5]=hl.y,i[9]=ti.y,i[2]=Ar.z,i[6]=hl.z,i[10]=ti.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],f=n[9],u=n[13],g=n[2],_=n[6],p=n[10],m=n[14],v=n[3],w=n[7],y=n[11],T=n[15],E=i[0],x=i[4],M=i[8],P=i[12],C=i[1],N=i[5],D=i[9],B=i[13],I=i[2],z=i[6],V=i[10],O=i[14],j=i[3],H=i[7],R=i[11],et=i[15];return s[0]=a*E+o*C+l*I+c*j,s[4]=a*x+o*N+l*z+c*H,s[8]=a*M+o*D+l*V+c*R,s[12]=a*P+o*B+l*O+c*et,s[1]=h*E+d*C+f*I+u*j,s[5]=h*x+d*N+f*z+u*H,s[9]=h*M+d*D+f*V+u*R,s[13]=h*P+d*B+f*O+u*et,s[2]=g*E+_*C+p*I+m*j,s[6]=g*x+_*N+p*z+m*H,s[10]=g*M+_*D+p*V+m*R,s[14]=g*P+_*B+p*O+m*et,s[3]=v*E+w*C+y*I+T*j,s[7]=v*x+w*N+y*z+T*H,s[11]=v*M+w*D+y*V+T*R,s[15]=v*P+w*B+y*O+T*et,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],f=t[10],u=t[14],g=t[3],_=t[7],p=t[11],m=t[15],v=l*u-c*f,w=o*u-c*d,y=o*f-l*d,T=a*u-c*h,E=a*f-l*h,x=a*d-o*h;return e*(_*v-p*w+m*y)-n*(g*v-p*T+m*E)+i*(g*w-_*T+m*x)-s*(g*y-_*E+p*x)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(s*h-o*l)+i*(s*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],f=t[10],u=t[11],g=t[12],_=t[13],p=t[14],m=t[15],v=e*o-n*a,w=e*l-i*a,y=e*c-s*a,T=n*l-i*o,E=n*c-s*o,x=i*c-s*l,M=h*_-d*g,P=h*p-f*g,C=h*m-u*g,N=d*p-f*_,D=d*m-u*_,B=f*m-u*p,I=v*B-w*D+y*N+T*C-E*P+x*M;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let z=1/I;return t[0]=(o*B-l*D+c*N)*z,t[1]=(i*D-n*B-s*N)*z,t[2]=(_*x-p*E+m*T)*z,t[3]=(f*E-d*x-u*T)*z,t[4]=(l*C-a*B-c*P)*z,t[5]=(e*B-i*C+s*P)*z,t[6]=(p*y-g*x-m*w)*z,t[7]=(h*x-f*y+u*w)*z,t[8]=(a*D-o*C+c*M)*z,t[9]=(n*C-e*D-s*M)*z,t[10]=(g*E-_*y+m*v)*z,t[11]=(d*y-h*E-u*v)*z,t[12]=(o*P-a*N-l*M)*z,t[13]=(e*N-n*P+i*M)*z,t[14]=(_*w-g*T-p*v)*z,t[15]=(h*T-d*w+f*v)*z,this}scale(t){let e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),s=1-n,a=t.x,o=t.y,l=t.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,a){return this.set(1,n,s,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,h=a+a,d=o+o,f=s*c,u=s*h,g=s*d,_=a*h,p=a*d,m=o*d,v=l*c,w=l*h,y=l*d,T=n.x,E=n.y,x=n.z;return i[0]=(1-(_+m))*T,i[1]=(u+y)*T,i[2]=(g-w)*T,i[3]=0,i[4]=(u-y)*E,i[5]=(1-(f+m))*E,i[6]=(p+v)*E,i[7]=0,i[8]=(g+w)*x,i[9]=(p-v)*x,i[10]=(1-(f+_))*x,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),e.identity(),this;let a=zs.set(i[0],i[1],i[2]).length(),o=zs.set(i[4],i[5],i[6]).length(),l=zs.set(i[8],i[9],i[10]).length();s<0&&(a=-a),bi.copy(this);let c=1/a,h=1/o,d=1/l;return bi.elements[0]*=c,bi.elements[1]*=c,bi.elements[2]*=c,bi.elements[4]*=h,bi.elements[5]*=h,bi.elements[6]*=h,bi.elements[8]*=d,bi.elements[9]*=d,bi.elements[10]*=d,e.setFromRotationMatrix(bi),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,i,s,a,o=di,l=!1){let c=this.elements,h=2*s/(e-t),d=2*s/(n-i),f=(e+t)/(e-t),u=(n+i)/(n-i),g,_;if(l)g=s/(a-s),_=a*s/(a-s);else if(o===di)g=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===ea)g=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,s,a,o=di,l=!1){let c=this.elements,h=2/(e-t),d=2/(n-i),f=-(e+t)/(e-t),u=-(n+i)/(n-i),g,_;if(l)g=1/(a-s),_=a/(a-s);else if(o===di)g=-2/(a-s),_=-(a+s)/(a-s);else if(o===ea)g=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=u,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};lc.prototype.isMatrix4=!0;be=lc,zs=new q,bi=new be,U_=new q(0,0,0),F_=new q(1,1,1),Ar=new q,hl=new q,ti=new q,Fd=new be,Od=new Oi,Bi=class r{constructor(t=0,e=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],d=i[2],f=i[6],u=i[10];switch(e){case"XYZ":this._y=Math.asin(oe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-oe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(oe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,u),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-oe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,u),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(oe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-oe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,u),this._y=0);break;default:kt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Fd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Fd,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Od.setFromEuler(this),this.setFromQuaternion(Od,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Bi.DEFAULT_ORDER="XYZ";Za=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},O_=0,Bd=new q,ks=new Oi,ir=new be,ul=new q,Oa=new q,B_=new q,z_=new Oi,zd=new q(1,0,0),kd=new q(0,1,0),Gd=new q(0,0,1),Vd={type:"added"},k_={type:"removed"},Gs={type:"childadded",child:null},Qh={type:"childremoved",child:null},un=class r extends Fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:O_++}),this.uuid=To(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let t=new q,e=new Bi,n=new Oi,i=new q(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new be},normalMatrix:{value:new Wt}}),this.matrix=new be,this.matrixWorld=new be,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Za,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ks.setFromAxisAngle(t,e),this.quaternion.multiply(ks),this}rotateOnWorldAxis(t,e){return ks.setFromAxisAngle(t,e),this.quaternion.premultiply(ks),this}rotateX(t){return this.rotateOnAxis(zd,t)}rotateY(t){return this.rotateOnAxis(kd,t)}rotateZ(t){return this.rotateOnAxis(Gd,t)}translateOnAxis(t,e){return Bd.copy(t).applyQuaternion(this.quaternion),this.position.add(Bd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(zd,t)}translateY(t){return this.translateOnAxis(kd,t)}translateZ(t){return this.translateOnAxis(Gd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ir.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ul.copy(t):ul.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Oa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ir.lookAt(Oa,ul,this.up):ir.lookAt(ul,Oa,this.up),this.quaternion.setFromRotationMatrix(ir),i&&(ir.extractRotation(i.matrixWorld),ks.setFromRotationMatrix(ir),this.quaternion.premultiply(ks.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Ht("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Vd),Gs.child=t,this.dispatchEvent(Gs),Gs.child=null):Ht("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(k_),Qh.child=t,this.dispatchEvent(Qh),Qh.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ir.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ir.multiply(t.parent.matrixWorld)),t.applyMatrix4(ir),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Vd),Gs.child=t,this.dispatchEvent(Gs),Gs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oa,t,B_),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oa,z_,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,i=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*i,s[13]+=n-s[1]*e-s[5]*n-s[9]*i,s[14]+=i-s[2]*e-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));i.material=o}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(s(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),f=a(t.skeletons),u=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),u.length>0&&(n.animations=u),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};un.DEFAULT_UP=new q(0,1,0);un.DEFAULT_MATRIX_AUTO_UPDATE=!0;un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;Ai=class extends un{constructor(){super(),this.isGroup=!0,this.type="Group"}},G_={type:"move"},ra=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ai,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ai,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ai,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let _ of t.hand.values()){let p=e.getJointPose(_,n),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),u=.02,g=.005;c.inputState.pinching&&f>u+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=u-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(G_)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ai;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Gp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Cr={h:0,s:0,l:0},fl={h:0,s:0,l:0};zt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ln){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ae.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=ae.workingColorSpace){return this.r=t,this.g=e,this.b=n,ae.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=ae.workingColorSpace){if(t=R_(t,1),e=oe(e,0,1),n=oe(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=jh(a,s,t+1/3),this.g=jh(a,s,t),this.b=jh(a,s,t-1/3)}return ae.colorSpaceToWorking(this,i),this}setStyle(t,e=ln){function n(s){s!==void 0&&parseFloat(s)<1&&kt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,e);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:kt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);kt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ln){let n=Gp[t.toLowerCase()];return n!==void 0?this.setHex(n,e):kt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=lr(t.r),this.g=lr(t.g),this.b=lr(t.b),this}copyLinearToSRGB(t){return this.r=Qs(t.r),this.g=Qs(t.g),this.b=Qs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ln){return ae.workingToColorSpace(bn.copy(this),t),Math.round(oe(bn.r*255,0,255))*65536+Math.round(oe(bn.g*255,0,255))*256+Math.round(oe(bn.b*255,0,255))}getHexString(t=ln){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ae.workingColorSpace){ae.workingToColorSpace(bn.copy(this),e);let n=bn.r,i=bn.g,s=bn.b,a=Math.max(n,i,s),o=Math.min(n,i,s),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ae.workingColorSpace){return ae.workingToColorSpace(bn.copy(this),e),t.r=bn.r,t.g=bn.g,t.b=bn.b,t}getStyle(t=ln){ae.workingToColorSpace(bn.copy(this),t);let e=bn.r,n=bn.g,i=bn.b;return t!==ln?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Cr),this.setHSL(Cr.h+t,Cr.s+e,Cr.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Cr),t.getHSL(fl);let n=Yh(Cr.h,fl.h,e),i=Yh(Cr.s,fl.s,e),s=Yh(Cr.l,fl.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},bn=new zt;zt.NAMES=Gp;as=class extends un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bi,this.environmentIntensity=1,this.environmentRotation=new Bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ti=new q,rr=new q,tu=new q,sr=new q,Vs=new q,Hs=new q,Hd=new q,eu=new q,nu=new q,iu=new q,ru=new Le,su=new Le,au=new Le,Lr=class r{constructor(t=new q,e=new q,n=new q){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Ti.subVectors(t,e),i.cross(Ti);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){Ti.subVectors(i,e),rr.subVectors(n,e),tu.subVectors(t,e);let a=Ti.dot(Ti),o=Ti.dot(rr),l=Ti.dot(tu),c=rr.dot(rr),h=rr.dot(tu),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;let f=1/d,u=(c*l-o*h)*f,g=(a*h-o*l)*f;return s.set(1-u-g,g,u)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,sr)===null?!1:sr.x>=0&&sr.y>=0&&sr.x+sr.y<=1}static getInterpolation(t,e,n,i,s,a,o,l){return this.getBarycoord(t,e,n,i,sr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,sr.x),l.addScaledVector(a,sr.y),l.addScaledVector(o,sr.z),l)}static getInterpolatedAttribute(t,e,n,i,s,a){return ru.setScalar(0),su.setScalar(0),au.setScalar(0),ru.fromBufferAttribute(t,e),su.fromBufferAttribute(t,n),au.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(ru,s.x),a.addScaledVector(su,s.y),a.addScaledVector(au,s.z),a}static isFrontFacing(t,e,n,i){return Ti.subVectors(n,e),rr.subVectors(t,e),Ti.cross(rr).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ti.subVectors(this.c,this.b),rr.subVectors(this.a,this.b),Ti.cross(rr).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return r.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return r.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return r.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return r.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return r.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,s=this.c,a,o;Vs.subVectors(i,n),Hs.subVectors(s,n),eu.subVectors(t,n);let l=Vs.dot(eu),c=Hs.dot(eu);if(l<=0&&c<=0)return e.copy(n);nu.subVectors(t,i);let h=Vs.dot(nu),d=Hs.dot(nu);if(h>=0&&d<=h)return e.copy(i);let f=l*d-h*c;if(f<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),e.copy(n).addScaledVector(Vs,a);iu.subVectors(t,s);let u=Vs.dot(iu),g=Hs.dot(iu);if(g>=0&&u<=g)return e.copy(s);let _=u*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Hs,o);let p=h*g-u*d;if(p<=0&&d-h>=0&&u-g>=0)return Hd.subVectors(s,i),o=(d-h)/(d-h+(u-g)),e.copy(i).addScaledVector(Hd,o);let m=1/(p+_+f);return a=_*m,o=f*m,e.copy(n).addScaledVector(Vs,a).addScaledVector(Hs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},zi=class{constructor(t=new q(1/0,1/0,1/0),e=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(wi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(wi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=wi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,wi):wi.fromBufferAttribute(s,a),wi.applyMatrix4(t.matrixWorld),this.expandByPoint(wi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),dl.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),dl.copy(n.boundingBox)),dl.applyMatrix4(t.matrixWorld),this.union(dl)}let i=t.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,wi),wi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ba),pl.subVectors(this.max,Ba),Ws.subVectors(t.a,Ba),Xs.subVectors(t.b,Ba),qs.subVectors(t.c,Ba),Rr.subVectors(Xs,Ws),Pr.subVectors(qs,Xs),es.subVectors(Ws,qs);let e=[0,-Rr.z,Rr.y,0,-Pr.z,Pr.y,0,-es.z,es.y,Rr.z,0,-Rr.x,Pr.z,0,-Pr.x,es.z,0,-es.x,-Rr.y,Rr.x,0,-Pr.y,Pr.x,0,-es.y,es.x,0];return!ou(e,Ws,Xs,qs,pl)||(e=[1,0,0,0,1,0,0,0,1],!ou(e,Ws,Xs,qs,pl))?!1:(ml.crossVectors(Rr,Pr),e=[ml.x,ml.y,ml.z],ou(e,Ws,Xs,qs,pl))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,wi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(wi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ar[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ar[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ar[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ar[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ar[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ar[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ar[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ar[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ar),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ar=[new q,new q,new q,new q,new q,new q,new q,new q],wi=new q,dl=new zi,Ws=new q,Xs=new q,qs=new q,Rr=new q,Pr=new q,es=new q,Ba=new q,pl=new q,ml=new q,ns=new q;Je=new q,gl=new jt,V_=0,Ci=class extends Fi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:V_++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Up,this.updateRanges=[],this.gpuType=pi,this.version=0,this._normalizationScale=t!==void 0?qu(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)gl.fromBufferAttribute(this,e),gl.applyMatrix3(t),this.setXY(e,gl.x,gl.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.applyMatrix3(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.applyMatrix4(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.applyNormalMatrix(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.transformDirection(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):P_(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):I_(t,this.array)}},Ja=class extends Ci{constructor(t,e,n){super(new Uint16Array(t),e,n)}},$a=class extends Ci{constructor(t,e,n){super(new Uint32Array(t),e,n)}},cn=class extends Ci{constructor(t,e,n){super(new Float32Array(t),e,n)}},H_=new zi,za=new q,lu=new q,Dr=class{constructor(t=new q,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):H_.setFromPoints(t).getCenter(n);let i=0;for(let s=0,a=t.length;s<a;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;za.subVectors(t,this.center);let e=za.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(za,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(lu.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(za.copy(t.center).add(lu)),this.expandByPoint(za.copy(t.center).sub(lu))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},W_=0,fi=new be,cu=new un,Ys=new q,ei=new zi,ka=new zi,on=new q,ki=class r extends Fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:W_++}),this.uuid=To(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(A_(t)?$a:Ja)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Wt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return fi.makeRotationFromQuaternion(t),this.applyMatrix4(fi),this}rotateX(t){return fi.makeRotationX(t),this.applyMatrix4(fi),this}rotateY(t){return fi.makeRotationY(t),this.applyMatrix4(fi),this}rotateZ(t){return fi.makeRotationZ(t),this.applyMatrix4(fi),this}translate(t,e,n){return fi.makeTranslation(t,e,n),this.applyMatrix4(fi),this}scale(t,e,n){return fi.makeScale(t,e,n),this.applyMatrix4(fi),this}lookAt(t){return cu.lookAt(t),cu.updateMatrix(),this.applyMatrix4(cu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ys).negate(),this.translate(Ys.x,Ys.y,Ys.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,s=t.length;i<s;i++){let a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new cn(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&kt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ht("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let s=e[n];ei.setFromBufferAttribute(s),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ht('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Dr);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ht("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(t){let n=this.boundingSphere.center;if(ei.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){let o=e[s];ka.setFromBufferAttribute(o),this.morphTargetsRelative?(on.addVectors(ei.min,ka.min),ei.expandByPoint(on),on.addVectors(ei.max,ka.max),ei.expandByPoint(on)):(ei.expandByPoint(ka.min),ei.expandByPoint(ka.max))}ei.getCenter(n);let i=0;for(let s=0,a=t.count;s<a;s++)on.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(on));if(e)for(let s=0,a=e.length;s<a;s++){let o=e[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)on.fromBufferAttribute(o,c),l&&(Ys.fromBufferAttribute(t,c),on.add(Ys)),i=Math.max(i,n.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Ht('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Ht("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,s=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Ci(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let P=0;P<n.count;P++)o[P]=new q,l[P]=new q;let h=new q,d=new q,f=new q,u=new jt,g=new jt,_=new jt,p=new q,m=new q;function v(P,C,N){c[P]=c[C]=c[N]=1,h.fromBufferAttribute(n,P),d.fromBufferAttribute(n,C),f.fromBufferAttribute(n,N),u.fromBufferAttribute(s,P),g.fromBufferAttribute(s,C),_.fromBufferAttribute(s,N),d.sub(h),f.sub(h),g.sub(u),_.sub(u);let D=1/(g.x*_.y-_.x*g.y);isFinite(D)&&(p.copy(d).multiplyScalar(_.y).addScaledVector(f,-g.y).multiplyScalar(D),m.copy(f).multiplyScalar(g.x).addScaledVector(d,-_.x).multiplyScalar(D),o[P].add(p),o[C].add(p),o[N].add(p),l[P].add(m),l[C].add(m),l[N].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let P=0,C=w.length;P<C;++P){let N=w[P],D=N.start,B=N.count;for(let I=D,z=D+B;I<z;I+=3)v(t.getX(I+0),t.getX(I+1),t.getX(I+2))}let y=new q,T=new q,E=new q,x=new q;function M(P){E.fromBufferAttribute(i,P),x.copy(E);let C=o[P];y.copy(C),y.sub(E.multiplyScalar(E.dot(C))).normalize(),T.crossVectors(x,C);let D=T.dot(l[P])<0?-1:1;a.setXYZW(P,y.x,y.y,y.z,D)}for(let P=0,C=n.count;P<C;++P)c[P]&&M(P);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Ci(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,u=n.count;f<u;f++)n.setXYZ(f,0,0,0);let i=new q,s=new q,a=new q,o=new q,l=new q,c=new q,h=new q,d=new q;if(t)for(let f=0,u=t.count;f<u;f+=3){let g=t.getX(f+0),_=t.getX(f+1),p=t.getX(f+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),a.fromBufferAttribute(e,p),h.subVectors(a,s),d.subVectors(i,s),h.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,u=e.count;f<u;f+=3)i.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,s),d.subVectors(i,s),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)on.fromBufferAttribute(t,e),on.normalize(),t.setXYZ(e,on.x,on.y,on.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,d=o.normalized,f=new c.constructor(l.length*h),u=0,g=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?u=l[_]*o.data.stride+o.offset:u=l[_]*h;for(let m=0;m<h;m++)f[g++]=c[u++]}return new Ci(f,h,d)}if(this.index===null)return kt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new r,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=t(l,n);e.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,d=c.length;h<d;h++){let f=c[h],u=t(f,n);l.push(u)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){let u=c[d];h.push(u.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let s=t.morphAttributes;for(let c in s){let h=[],d=s[c];for(let f=0,u=d.length;f<u;f++)h.push(d[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},hu=new q,X_=new q,q_=new Wt,Ei=class{constructor(t=new q(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=hu.subVectors(n,e).cross(X_.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(hu),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(i,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||q_.getNormalMatrix(t),i=this.coplanarPoint(hu).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Y_=0,Gi=class extends Fi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Y_++}),this.uuid=To(),this.name="",this.type="Material",this.blending=la,this.side=Br,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Eu,this.blendDst=Au,this.blendEquation=ds,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new zt(0,0,0),this.blendAlpha=0,this.depthFunc=js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ll,this.stencilZFail=Ll,this.stencilZPass=Ll,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){kt(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){kt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(e){let s=i(t.textures),a=i(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new zt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Ei().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new jt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new jt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},or=new q,uu=new q,_l=new q,xl=new q,ql=class{constructor(t=new q,e=new q(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,or)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=or.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(or.copy(this.origin).addScaledVector(this.direction,e),or.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){uu.copy(t).add(e).multiplyScalar(.5),_l.copy(e).sub(t).normalize(),xl.copy(this.origin).sub(uu);let s=t.distanceTo(e)*.5,a=-this.direction.dot(_l),o=xl.dot(this.direction),l=-xl.dot(_l),c=xl.lengthSq(),h=Math.abs(1-a*a),d,f,u,g;if(h>0)if(d=a*l-o,f=a*o-l,g=s*h,d>=0)if(f>=-g)if(f<=g){let _=1/h;d*=_,f*=_,u=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=s,d=Math.max(0,-(a*f+o)),u=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(a*f+o)),u=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-a*s+o)),f=d>0?-s:Math.min(Math.max(-s,-l),s),u=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-s,-l),s),u=f*(f+2*l)+c):(d=Math.max(0,-(a*s+o)),f=d>0?s:Math.min(Math.max(-s,-l),s),u=-d*d+f*(f+2*l)+c);else f=a>0?-s:s,d=Math.max(0,-(a*f+o)),u=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(uu).addScaledVector(_l,f),u}intersectSphere(t,e){if(t.radius<0)return null;or.subVectors(t.center,this.origin);let n=or.dot(this.direction),i=or.dot(or)-n*n,s=t.radius*t.radius;if(i>s)return null;let a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),h>=0?(s=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(s=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),d>=0?(o=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(o=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,or)!==null}intersectTriangle(t,e,n,i,s){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=t.x-a.x,f=t.y-a.y,u=t.z-a.z,g=e.x-a.x,_=e.y-a.y,p=e.z-a.z,m=n.x-a.x,v=n.y-a.y,w=n.z-a.z,y=Math.abs(l),T=Math.abs(c),E=Math.abs(h),x,M,P,C,N,D,B,I,z,V,O,j;if(y>=T&&y>=E?(P=l,D=d,z=g,j=m,l>=0?(x=c,M=h,C=f,N=u,B=_,I=p,V=v,O=w):(x=h,M=c,C=u,N=f,B=p,I=_,V=w,O=v)):T>=E?(P=c,D=f,z=_,j=v,c>=0?(x=h,M=l,C=u,N=d,B=p,I=g,V=w,O=m):(x=l,M=h,C=d,N=u,B=g,I=p,V=m,O=w)):(P=h,D=u,z=p,j=w,h>=0?(x=l,M=c,C=d,N=f,B=g,I=_,V=m,O=v):(x=c,M=l,C=f,N=d,B=_,I=g,V=v,O=m)),P===0)return null;let H=x/P,R=M/P,et=1/P,Mt=C-H*D,Ft=N-R*D,Z=B-H*z,ht=I-R*z,rt=V-H*j,bt=O-R*j,ut=rt*ht-bt*Z,Pt=Mt*bt-Ft*rt,ue=Z*Ft-ht*Mt;if(i){if(ut<0||Pt<0||ue<0)return null}else if((ut<0||Pt<0||ue<0)&&(ut>0||Pt>0||ue>0))return null;let At=ut+Pt+ue;if(At===0)return null;let Gt=et*(ut*D+Pt*z+ue*j);return(At>0?Gt<0:Gt>0)?null:this.at(Gt/At,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},sa=class extends Gi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bi,this.combine=cc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Wd=new be,is=new ql,vl=new Dr,Xd=new q,yl=new q,Sl=new q,Ml=new q,fu=new q,bl=new q,qd=new q,Tl=new q,Re=class extends un{constructor(t=new ki,e=new sa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let o=this.morphTargetInfluences;if(s&&o){bl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],d=s[l];h!==0&&(fu.fromBufferAttribute(d,t),a?bl.addScaledVector(fu,h):bl.addScaledVector(fu.sub(e),h))}e.add(bl)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),vl.copy(n.boundingSphere),vl.applyMatrix4(s),is.copy(t.ray).recast(t.near),!(vl.containsPoint(is.origin)===!1&&(is.intersectSphere(vl,Xd)===null||is.origin.distanceToSquared(Xd)>(t.far-t.near)**2))&&(Wd.copy(s).invert(),is.copy(t.ray).applyMatrix4(Wd),!(n.boundingBox!==null&&is.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,is)))}_computeIntersections(t,e,n){let i,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,f=s.groups,u=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){let p=f[g],m=a[p.materialIndex],v=Math.max(p.start,u.start),w=Math.min(o.count,Math.min(p.start+p.count,u.start+u.count));for(let y=v,T=w;y<T;y+=3){let E=o.getX(y),x=o.getX(y+1),M=o.getX(y+2);i=wl(this,m,t,n,c,h,d,E,x,M),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{let g=Math.max(0,u.start),_=Math.min(o.count,u.start+u.count);for(let p=g,m=_;p<m;p+=3){let v=o.getX(p),w=o.getX(p+1),y=o.getX(p+2);i=wl(this,a,t,n,c,h,d,v,w,y),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){let p=f[g],m=a[p.materialIndex],v=Math.max(p.start,u.start),w=Math.min(l.count,Math.min(p.start+p.count,u.start+u.count));for(let y=v,T=w;y<T;y+=3){let E=y,x=y+1,M=y+2;i=wl(this,m,t,n,c,h,d,E,x,M),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{let g=Math.max(0,u.start),_=Math.min(l.count,u.start+u.count);for(let p=g,m=_;p<m;p+=3){let v=p,w=p+1,y=p+2;i=wl(this,a,t,n,c,h,d,v,w,y),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}};Ka=class extends Fn{constructor(t=null,e=1,n=1,i,s,a,o,l,c=hn,h=hn,d,f){super(null,a,o,l,c,h,i,s,d,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Qa=class extends Ci{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Zs=new be,Yd=new be,El=[],Zd=new zi,J_=new be,Ga=new Re,Va=new Dr,ja=class extends Re{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Qa(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,J_)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new zi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Zs),Zd.copy(t.boundingBox).applyMatrix4(Zs),this.boundingBox.union(Zd)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Dr),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Zs),Va.copy(t.boundingSphere).applyMatrix4(Zs),this.boundingSphere.union(Va)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,a=t*s+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(Ga.geometry=this.geometry,Ga.material=this.material,Ga.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Va.copy(this.boundingSphere),Va.applyMatrix4(n),t.ray.intersectsSphere(Va)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Zs),Yd.multiplyMatrices(n,Zs),Ga.matrixWorld=Yd,Ga.raycast(t,El);for(let a=0,o=El.length;a<o;a++){let l=El[a];l.instanceId=s,l.object=this,e.push(l)}El.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Qa(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ka(new Float32Array(i*this.count),i,this.count,gc,pi));let s=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=i*t;return s[l]=o,s.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},rs=new Dr,$_=new jt(.5,.5),Al=new q,Nr=class{constructor(t=new Ei,e=new Ei,n=new Ei,i=new Ei,s=new Ei,a=new Ei){this.planes=[t,e,n,i,s,a]}set(t,e,n,i,s,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=di,n=!1){let i=this.planes,s=t.elements,a=s[0],o=s[1],l=s[2],c=s[3],h=s[4],d=s[5],f=s[6],u=s[7],g=s[8],_=s[9],p=s[10],m=s[11],v=s[12],w=s[13],y=s[14],T=s[15];if(i[0].setComponents(c-a,u-h,m-g,T-v).normalize(),i[1].setComponents(c+a,u+h,m+g,T+v).normalize(),i[2].setComponents(c+o,u+d,m+_,T+w).normalize(),i[3].setComponents(c-o,u-d,m-_,T-w).normalize(),n)i[4].setComponents(l,f,p,y).normalize(),i[5].setComponents(c-l,u-f,m-p,T-y).normalize();else if(i[4].setComponents(c-l,u-f,m-p,T-y).normalize(),e===di)i[5].setComponents(c+l,u+f,m+p,T+y).normalize();else if(e===ea)i[5].setComponents(l,f,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),rs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),rs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(rs)}intersectsSprite(t){rs.center.set(0,0,0);let e=$_.distanceTo(t.center);return rs.radius=.7071067811865476+e,rs.applyMatrix4(t.matrixWorld),this.intersectsSphere(rs)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Al.x=i.normal.x>0?t.max.x:t.min.x,Al.y=i.normal.y>0?t.max.y:t.min.y,Al.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Al)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Jd=new be,Yl=class r{constructor(){this.coordinateSystem=di,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let i=0;i<e.length;i++){let s=e[i];Jd.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),n[i]===void 0&&(n[i]=new Nr),n[i].setFromProjectionMatrix(Jd,s.coordinateSystem,s.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let i=0;i<t._count;i++)e[i]===void 0&&(e[i]=new Nr),e[i].copy(n[i]);return this._count=t._count,this}clone(){return new r().copy(this)}},to=class extends Fn{constructor(t=[],e=ps,n,i,s,a,o,l,c,h){super(t,e,n,i,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},os=class extends Fn{constructor(t,e,n,i,s,a,o,l,c){super(t,e,n,i,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},hr=class extends Fn{constructor(t,e,n=Ri,i,s,a,o=hn,l=hn,c,h=cr,d=1){if(h!==cr&&h!==dr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:d};super(f,i,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ia(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},eo=class extends hr{constructor(t,e=Ri,n=ps,i,s,a=hn,o=hn,l,c=cr){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,i,s,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},no=class extends Fn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},wn=class r extends ki{constructor(t=1,e=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};let o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],h=[],d=[],f=0,u=0;g("z","y","x",-1,-1,n,e,t,a,s,0),g("z","y","x",1,-1,n,e,-t,a,s,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new cn(c,3)),this.setAttribute("normal",new cn(h,3)),this.setAttribute("uv",new cn(d,2));function g(_,p,m,v,w,y,T,E,x,M,P){let C=y/x,N=T/M,D=y/2,B=T/2,I=E/2,z=x+1,V=M+1,O=0,j=0,H=new q;for(let R=0;R<V;R++){let et=R*N-B;for(let Mt=0;Mt<z;Mt++){let Ft=Mt*C-D;H[_]=Ft*v,H[p]=et*w,H[m]=I,c.push(H.x,H.y,H.z),H[_]=0,H[p]=0,H[m]=E>0?1:-1,h.push(H.x,H.y,H.z),d.push(Mt/x),d.push(1-R/M),O+=1}}for(let R=0;R<M;R++)for(let et=0;et<x;et++){let Mt=f+et+z*R,Ft=f+et+z*(R+1),Z=f+(et+1)+z*(R+1),ht=f+(et+1)+z*R;l.push(Mt,Ft,ht),l.push(Ft,Z,ht),j+=6}o.addGroup(u,j,P),u+=j,f+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},io=class r extends ki{constructor(t=1,e=1,n=1,i=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),s=Math.floor(s);let h=[],d=[],f=[],u=[],g=0,_=[],p=n/2,m=0;v(),a===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new cn(d,3)),this.setAttribute("normal",new cn(f,3)),this.setAttribute("uv",new cn(u,2));function v(){let y=new q,T=new q,E=0,x=(e-t)/n;for(let M=0;M<=s;M++){let P=[],C=M/s,N=C*(e-t)+t;for(let D=0;D<=i;D++){let B=D/i,I=B*l+o,z=Math.sin(I),V=Math.cos(I);T.x=N*z,T.y=-C*n+p,T.z=N*V,d.push(T.x,T.y,T.z),y.set(z,x,V).normalize(),f.push(y.x,y.y,y.z),u.push(B,1-C),P.push(g++)}_.push(P)}for(let M=0;M<i;M++)for(let P=0;P<s;P++){let C=_[P][M],N=_[P+1][M],D=_[P+1][M+1],B=_[P][M+1];(t>0||P!==0)&&(h.push(C,N,B),E+=3),(e>0||P!==s-1)&&(h.push(N,D,B),E+=3)}c.addGroup(m,E,0),m+=E}function w(y){let T=g,E=new jt,x=new q,M=0,P=y===!0?t:e,C=y===!0?1:-1;for(let D=1;D<=i;D++)d.push(0,p*C,0),f.push(0,C,0),u.push(.5,.5),g++;let N=g;for(let D=0;D<=i;D++){let I=D/i*l+o,z=Math.cos(I),V=Math.sin(I);x.x=P*V,x.y=p*C,x.z=P*z,d.push(x.x,x.y,x.z),f.push(0,C,0),E.x=z*.5+.5,E.y=V*.5*C+.5,u.push(E.x,E.y),g++}for(let D=0;D<i;D++){let B=T+D,I=N+D;y===!0?h.push(I,I+1,B):h.push(I+1,I,B),M+=3}c.addGroup(m,M,y===!0?1:2),m+=M}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ur=class r extends ki{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let s=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,d=t/o,f=e/l,u=[],g=[],_=[],p=[];for(let m=0;m<h;m++){let v=m*f-a;for(let w=0;w<c;w++){let y=w*d-s;g.push(y,-v,0),_.push(0,0,1),p.push(w/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<o;v++){let w=v+c*m,y=v+c*(m+1),T=v+1+c*(m+1),E=v+1+c*m;u.push(w,y,E),u.push(y,T,E)}this.setIndex(u),this.setAttribute("position",new cn(g,3)),this.setAttribute("normal",new cn(_,3)),this.setAttribute("uv",new cn(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.widthSegments,t.heightSegments)}},ro=class r extends ki{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s,thetaStart:a,thetaLength:o},n=Math.floor(n),i=Math.floor(i);let l=[],c=[],h=[],d=[],f=new q,u=new q,g=new q;for(let _=0;_<=n;_++){let p=a+_/n*o;for(let m=0;m<=i;m++){let v=m/i*s;u.x=(t+e*Math.cos(p))*Math.cos(v),u.y=(t+e*Math.cos(p))*Math.sin(v),u.z=e*Math.sin(p),c.push(u.x,u.y,u.z),f.x=t*Math.cos(v),f.y=t*Math.sin(v),g.subVectors(u,f).normalize(),h.push(g.x,g.y,g.z),d.push(m/i),d.push(_/n)}}for(let _=1;_<=n;_++)for(let p=1;p<=i;p++){let m=(i+1)*_+p-1,v=(i+1)*(_-1)+p-1,w=(i+1)*(_-1)+p,y=(i+1)*_+p;l.push(m,v,y),l.push(v,w,y)}this.setIndex(l),this.setAttribute("position",new cn(c,3)),this.setAttribute("normal",new cn(h,3)),this.setAttribute("uv",new cn(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}},so=class extends Gi{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new zt(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}};Vp={clone:gs,merge:En},Q_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,j_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Vi=class extends Gi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Q_,this.fragmentShader=j_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=gs(t.uniforms),this.uniformsGroups=K_(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new zt().setHex(i.value);break;case"v2":this.uniforms[n].value=new jt().fromArray(i.value);break;case"v3":this.uniforms[n].value=new q().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Le().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Wt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new be().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Zl=class extends Vi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Hi=class extends Gi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bo,this.normalScale=new jt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},ls=class extends Hi{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new jt(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return oe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new zt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new zt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new zt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(t){this._diffuseRoughness>0!=t>0&&this.version++,this._diffuseRoughness=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}get iridescenceThicknessRange(){return ss('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(t){ss('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=t[0],this.iridescenceThicknessMaximum=t[1]}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.diffuseRoughness=t.diffuseRoughness,this.diffuseRoughnessMap=t.diffuseRoughnessMap,this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum,this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}},ao=class extends Gi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bo,this.normalScale=new jt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bi,this.combine=cc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Jl=class extends Gi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ap,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},$l=class extends Gi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};Ur=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let a;e:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=e[++n],t<i)break t}a=e.length;break e}if(!(t>=s)){let o=e[1];t<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=e[--n-1],t>=s)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let a=0;a!==i;++a)e[a]=n[s+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Kl=class extends Ur{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:mu,endingEnd:mu}}intervalChanged_(t,e,n){let i=this.parameterPositions,s=t-2,a=t+1,o=i[s],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case gu:s=t,o=2*e-n;break;case _u:s=i.length-2,o=e+i[s]-i[s+1];break;default:s=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case gu:a=t,l=2*n-e;break;case _u:a=1,l=n+i[1]-i[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(t,e,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,u=this._weightNext,g=(n-e)/(i-e),_=g*g,p=_*g,m=-f*p+2*f*_-f*g,v=(1+f)*p+(-1.5-2*f)*_+(-.5+f)*g+1,w=(-1-u)*p+(1.5+u)*_+.5*g,y=u*p-u*_;for(let T=0;T!==o;++T)s[T]=m*a[h+T]+v*a[c+T]+w*a[l+T]+y*a[d+T];return s}},Ql=class extends Ur{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(i-e),d=1-h;for(let f=0;f!==o;++f)s[f]=a[c+f]*d+a[l+f]*h;return s}},jl=class extends Ur{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},tc=class extends Ur{interpolate_(t,e,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let g=(n-e)/(i-e),_=1-g;for(let p=0;p!==o;++p)s[p]=a[c+p]*_+a[l+p]*g;return s}let f=o*2,u=t-1;for(let g=0;g!==o;++g){let _=a[c+g],p=a[l+g],m=u*f+g*2,v=d[m],w=d[m+1],y=t*f+g*2,T=h[y],E=h[y+1],x=e0(n,e,v,T,i);s[g]=Hp(x,_,w,E,p)}return s}};ii=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Js(e,this.TimeBufferType),this.values=Js(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Js(t.times,Array),values:Js(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i),Cl(t.settings)&&(n.settings={inTangents:Js(t.settings.inTangents,Array),outTangents:Js(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new jl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ql(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Kl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new tc(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Ha:e=this.InterpolantFactoryMethodDiscrete;break;case Gl:e=this.InterpolantFactoryMethodLinear;break;case Il:e=this.InterpolantFactoryMethodSmooth;break;case pu:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return kt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ha;case this.InterpolantFactoryMethodLinear:return Gl;case this.InterpolantFactoryMethodSmooth:return Il;case this.InterpolantFactoryMethodBezier:return pu}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t;Cl(this.settings)&&(Kd(this.settings.inTangents,t),Kd(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;Cl(this.settings)&&(Qd(this.settings.inTangents,t),Qd(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,i=n.length,s=0,a=i-1;for(;s!==i&&n[s]<t;)++s;for(;a!==-1&&n[a]>e;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Ht("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,s=n.length;s===0&&(Ht("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==s;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Ht("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Ht("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(i!==void 0&&C_(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){Ht("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Il,s=t.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(i)l=!0;else{let d=o*n,f=d-n,u=d+n;for(let g=0;g!==n;++g){let _=e[d+g];if(_!==e[f+g]||_!==e[u+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*n,f=a*n;for(let u=0;u!==n;++u)e[f+u]=e[d+u]}++a}}if(s>0){t[a]=t[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,Cl(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};ii.prototype.ValueTypeName="";ii.prototype.TimeBufferType=Float32Array;ii.prototype.ValueBufferType=Float32Array;ii.prototype.DefaultInterpolation=Gl;Fr=class extends ii{constructor(t,e,n){super(t,e,n)}};Fr.prototype.ValueTypeName="bool";Fr.prototype.ValueBufferType=Array;Fr.prototype.DefaultInterpolation=Ha;Fr.prototype.InterpolantFactoryMethodLinear=void 0;Fr.prototype.InterpolantFactoryMethodSmooth=void 0;ec=class extends ii{constructor(t,e,n,i){super(t,e,n,i)}};ec.prototype.ValueTypeName="color";nc=class extends ii{constructor(t,e,n,i){super(t,e,n,i)}};nc.prototype.ValueTypeName="number";ic=class extends Ur{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(i-e),c=t*o;for(let h=c+o;c!==h;c+=4)Oi.slerpFlat(s,0,a,c-o,a,c,l);return s}},oo=class extends ii{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new ic(this.times,this.values,this.getValueSize(),t)}};oo.prototype.ValueTypeName="quaternion";oo.prototype.InterpolantFactoryMethodSmooth=void 0;Or=class extends ii{constructor(t,e,n){super(t,e,n)}};Or.prototype.ValueTypeName="string";Or.prototype.ValueBufferType=Array;Or.prototype.DefaultInterpolation=Ha;Or.prototype.InterpolantFactoryMethodLinear=void 0;Or.prototype.InterpolantFactoryMethodSmooth=void 0;rc=class extends ii{constructor(t,e,n,i){super(t,e,n,i)}};rc.prototype.ValueTypeName="vector";sc=class{constructor(t,e,n){let i=this,s=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,s===!1&&i.onStart!==void 0&&i.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){let u=c[d],g=c[d+1];if(u.global&&(u.lastIndex=0),u.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Wp=new sc,ac=class{constructor(t){this.manager=t!==void 0?t:Wp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};ac.DEFAULT_MATERIAL_NAME="__DEFAULT";cs=class extends un{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new zt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},lo=class extends cs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(un.DEFAULT_UP),this.updateMatrix(),this.groundColor=new zt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},du=new be,jd=new q,tp=new q,co=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new jt(512,512),this.mapType=Xn,this.map=null,this.mapPass=null,this.matrix=new be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Nr,this._frameExtents=new jt(1,1),this._viewportCount=1,this._viewports=[new Le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;jd.setFromMatrixPosition(t.matrixWorld),e.position.copy(jd),tp.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(tp),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){du.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(du,t.coordinateSystem,t.reversedDepth);let s=this._frameExtents,a=i?i.z/s.x:1,o=i?i.w/s.y:1,l=i?i.x/s.x:0,c=i?i.y/s.y:0;t.coordinateSystem===ea||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(du)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Rl=new q,Pl=new Oi,Ni=new q,ho=class extends un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new be,this.projectionMatrix=new be,this.projectionMatrixInverse=new be,this.coordinateSystem=di,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Rl,Pl,Ni),Ni.x===1&&Ni.y===1&&Ni.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Rl,Pl,Ni.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Rl,Pl,Ni),Ni.x===1&&Ni.y===1&&Ni.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Rl,Pl,Ni.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ir=new q,ep=new jt,np=new jt,Tn=class extends ho{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Vl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(qh*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Vl*2*Math.atan(Math.tan(qh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ir.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ir.x,Ir.y).multiplyScalar(-t/Ir.z),Ir.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ir.x,Ir.y).multiplyScalar(-t/Ir.z)}getViewSize(t,e){return this.getViewBounds(t,ep,np),e.subVectors(np,ep)}setViewOffset(t,e,n,i,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(qh*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},xu=class extends co{constructor(){super(new Tn(90,1,.5,500)),this.isPointLightShadow=!0}},uo=class extends cs{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new xu}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},fo=class extends ho{constructor(t=-1,e=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},vu=class extends co{constructor(){super(new fo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},hs=class extends cs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(un.DEFAULT_UP),this.updateMatrix(),this.target=new un,this.shadow=new vu}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},po=class extends cs{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}},$s=-90,Ks=1,aa=class extends un{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Tn($s,Ks,t,e);i.layers=this.layers,this.add(i);let s=new Tn($s,Ks,t,e);s.layers=this.layers,this.add(s);let a=new Tn($s,Ks,t,e);a.layers=this.layers,this.add(a);let o=new Tn($s,Ks,t,e);o.layers=this.layers,this.add(o);let l=new Tn($s,Ks,t,e);l.layers=this.layers,this.add(l);let c=new Tn($s,Ks,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,s,a,o,l]=e;for(let c of e)this.remove(c);if(t===di)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ea)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(n,1,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=_,t.setRenderTarget(n,5,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,f,u),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},oc=class extends Tn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}},Zu="\\[\\]\\.:\\/",n0=new RegExp("["+Zu+"]","g"),Ju="[^"+Zu+"]",i0="[^"+Zu.replace("\\.","")+"]",r0=/((?:WC+[\/:])*)/.source.replace("WC",Ju),s0=/(WCOD+)?/.source.replace("WCOD",i0),a0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ju),o0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ju),l0=new RegExp("^"+r0+s0+a0+o0+"$"),c0=["material","materials","bones","map"],yu=class{constructor(t,e,n){let i=n||Ce.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ce=class r{constructor(t,e,n){this.path=e,this.parsedPath=n||r.parseTrackName(e),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new r.Composite(t,e,n):new r(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(n0,"")}static parseTrackName(t){let e=l0.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);c0.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,s=e.propertyIndex;if(t||(t=r.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){kt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Ht("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ht("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ht("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ht("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ht("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Ht("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Ht("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[i];if(a===void 0){let c=e.nodeName;Ht("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){Ht("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ht("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ce.Composite=yu;Ce.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ce.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ce.prototype.GetterByBindingType=[Ce.prototype._getValue_direct,Ce.prototype._getValue_array,Ce.prototype._getValue_arrayElement,Ce.prototype._getValue_toArray];Ce.prototype.SetterByBindingTypeAndVersioning=[[Ce.prototype._setValue_direct,Ce.prototype._setValue_direct_setNeedsUpdate,Ce.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_array,Ce.prototype._setValue_array_setNeedsUpdate,Ce.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_arrayElement,Ce.prototype._setValue_arrayElement_setNeedsUpdate,Ce.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_fromArray,Ce.prototype._setValue_fromArray_setNeedsUpdate,Ce.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];dT=new Float32Array(1),ef=class ef{constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let s=this.elements;return s[0]=t,s[2]=e,s[1]=n,s[3]=i,this}};ef.prototype.isMatrix2=!0;Su=ef;typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window!="undefined"&&(window.__THREE__?kt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187")});function fm(){let r=null,t=!1,e=null,n=null;function i(s,a){n=r.requestAnimationFrame(i),e(s,a)}return{start:function(){t!==!0&&e!==null&&r!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function f0(r){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,d=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,h),o.onUploadCallback();let u;if(c instanceof Float32Array)u=r.FLOAT;else if(typeof Float16Array!="undefined"&&c instanceof Float16Array)u=r.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?u=r.HALF_FLOAT:u=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=r.SHORT;else if(c instanceof Uint32Array)u=r.UNSIGNED_INT;else if(c instanceof Int32Array)u=r.INT;else if(c instanceof Int8Array)u=r.BYTE;else if(c instanceof Uint8Array)u=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let h=l.array,d=l.updateRanges;if(r.bindBuffer(c,o),d.length===0)r.bufferSubData(c,0,h);else{d.sort((u,g)=>u.start-g.start);let f=0;for(let u=1;u<d.length;u++){let g=d[f],_=d[u];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,d[f]=_)}d.length=f+1;for(let u=0,g=d.length;u<g;u++){let _=d[u];r.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(r.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}function Yv(r,t,e,n,i,s){let a=new zt(0),o=i===!0?0:1,l,c,h=null,d=0,f=null;function u(v){let w=v.isScene===!0?v.background:null;if(w&&w.isTexture){let y=v.backgroundBlurriness>0;w=t.get(w,y)}return w}function g(v){let w=!1,y=u(v);y===null?p(a,o):y&&y.isColor&&(p(y,1),w=!0);let T=r.xr.getEnvironmentBlendMode();T==="additive"?e.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(r.autoClear||w)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function _(v,w){let y=u(w);y&&y.isCubeTexture?(c===void 0&&(c=new Re(new wn(1,1,1),new Vi({name:"BackgroundCubeMaterial",uniforms:gs(Yi.backgroundCube.uniforms),vertexShader:Yi.backgroundCube.vertexShader,fragmentShader:Yi.backgroundCube.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,E,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(qv.makeRotationFromEuler(w.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(dm),c.material.toneMapped=ae.getTransfer(y.colorSpace)!==ge,(h!==y||d!==y.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,f=r.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Re(new ur(2,2),new Vi({name:"BackgroundMaterial",uniforms:gs(Yi.background.uniforms),vertexShader:Yi.background.vertexShader,fragmentShader:Yi.background.fragmentShader,side:Br,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=ae.getTransfer(y.colorSpace)!==ge,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||f!==r.toneMapping)&&(l.material.needsUpdate=!0,h=y,d=y.version,f=r.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,w){v.getRGB($c,Yu(r)),e.buffers.color.setClear($c.r,$c.g,$c.b,w,s)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,w=1){a.set(v),o=w,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,p(a,o)},render:g,addToRenderList:_,dispose:m}}function Zv(r,t){let e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null),s=i,a=!1;function o(N,D,B,I,z){let V=!1,O=d(N,I,B,D);s!==O&&(s=O,c(s.object)),V=u(N,I,B,z),V&&g(N,I,B,z),z!==null&&t.update(z,r.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,y(N,D,B,I),z!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return r.createVertexArray()}function c(N){return r.bindVertexArray(N)}function h(N){return r.deleteVertexArray(N)}function d(N,D,B,I){let z=I.wireframe===!0,V=n[D.id];V===void 0&&(V={},n[D.id]=V);let O=N.isInstancedMesh===!0?N.id:0,j=V[O];j===void 0&&(j={},V[O]=j);let H=j[B.id];H===void 0&&(H={},j[B.id]=H);let R=H[z];return R===void 0&&(R=f(l()),H[z]=R),R}function f(N){let D=[],B=[],I=[];for(let z=0;z<e;z++)D[z]=0,B[z]=0,I[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:B,attributeDivisors:I,object:N,attributes:{},index:null}}function u(N,D,B,I){let z=s.attributes,V=D.attributes,O=0,j=B.getAttributes();for(let H in j)if(j[H].location>=0){let et=z[H],Mt=V[H];if(Mt===void 0&&(H==="instanceMatrix"&&N.instanceMatrix&&(Mt=N.instanceMatrix),H==="instanceColor"&&N.instanceColor&&(Mt=N.instanceColor)),et===void 0||et.attribute!==Mt||Mt&&et.data!==Mt.data)return!0;O++}return s.attributesNum!==O||s.index!==I}function g(N,D,B,I){let z={},V=D.attributes,O=0,j=B.getAttributes();for(let H in j)if(j[H].location>=0){let et=V[H];et===void 0&&(H==="instanceMatrix"&&N.instanceMatrix&&(et=N.instanceMatrix),H==="instanceColor"&&N.instanceColor&&(et=N.instanceColor));let Mt={};Mt.attribute=et,et&&et.data&&(Mt.data=et.data),z[H]=Mt,O++}s.attributes=z,s.attributesNum=O,s.index=I}function _(){let N=s.newAttributes;for(let D=0,B=N.length;D<B;D++)N[D]=0}function p(N){m(N,0)}function m(N,D){let B=s.newAttributes,I=s.enabledAttributes,z=s.attributeDivisors;B[N]=1,I[N]===0&&(r.enableVertexAttribArray(N),I[N]=1),z[N]!==D&&(r.vertexAttribDivisor(N,D),z[N]=D)}function v(){let N=s.newAttributes,D=s.enabledAttributes;for(let B=0,I=D.length;B<I;B++)D[B]!==N[B]&&(r.disableVertexAttribArray(B),D[B]=0)}function w(N,D,B,I,z,V,O){O===!0?r.vertexAttribIPointer(N,D,B,z,V):r.vertexAttribPointer(N,D,B,I,z,V)}function y(N,D,B,I){_();let z=I.attributes,V=B.getAttributes(),O=D.defaultAttributeValues;for(let j in V){let H=V[j];if(H.location>=0){let R=z[j];if(R===void 0&&(j==="instanceMatrix"&&N.instanceMatrix&&(R=N.instanceMatrix),j==="instanceColor"&&N.instanceColor&&(R=N.instanceColor)),R!==void 0){let et=R.normalized,Mt=R.itemSize,Ft=t.get(R);if(Ft===void 0)continue;let Z=Ft.buffer,ht=Ft.type,rt=Ft.bytesPerElement,bt=ht===r.INT||ht===r.UNSIGNED_INT||R.gpuType===dc;if(R.isInterleavedBufferAttribute){let ut=R.data,Pt=ut.isInterleavedBuffer===!0?ut.stride:ut.itemSize,ue=R.offset;if(ut.isInstancedInterleavedBuffer||ut.isInstancedBufferAttribute){for(let At=0;At<H.locationSize;At++)m(H.location+At,ut.meshPerAttribute);N.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let At=0;At<H.locationSize;At++)p(H.location+At);r.bindBuffer(r.ARRAY_BUFFER,Z);for(let At=0;At<H.locationSize;At++)w(H.location+At,Mt/H.locationSize,ht,et,Pt*rt,(ue+Mt/H.locationSize*At)*rt,bt)}else{if(R.isInstancedBufferAttribute){for(let ut=0;ut<H.locationSize;ut++)m(H.location+ut,R.meshPerAttribute);N.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=R.meshPerAttribute*R.count)}else for(let ut=0;ut<H.locationSize;ut++)p(H.location+ut);r.bindBuffer(r.ARRAY_BUFFER,Z);for(let ut=0;ut<H.locationSize;ut++)w(H.location+ut,Mt/H.locationSize,ht,et,Mt*rt,Mt/H.locationSize*ut*rt,bt)}}else if(O!==void 0){let et=O[j];if(et!==void 0)switch(et.length){case 2:r.vertexAttrib2fv(H.location,et);break;case 3:r.vertexAttrib3fv(H.location,et);break;case 4:r.vertexAttrib4fv(H.location,et);break;default:r.vertexAttrib1fv(H.location,et)}}}}v()}function T(){P();for(let N in n){let D=n[N];for(let B in D){let I=D[B];for(let z in I){let V=I[z];for(let O in V)h(V[O].object),delete V[O];delete I[z]}}delete n[N]}}function E(N){if(n[N.id]===void 0)return;let D=n[N.id];for(let B in D){let I=D[B];for(let z in I){let V=I[z];for(let O in V)h(V[O].object),delete V[O];delete I[z]}}delete n[N.id]}function x(N){for(let D in n){let B=n[D];for(let I in B){let z=B[I];if(z[N.id]===void 0)continue;let V=z[N.id];for(let O in V)h(V[O].object),delete V[O];delete z[N.id]}}}function M(N){for(let D in n){let B=n[D],I=N.isInstancedMesh===!0?N.id:0,z=B[I];if(z!==void 0){for(let V in z){let O=z[V];for(let j in O)h(O[j].object),delete O[j];delete z[V]}delete B[I],Object.keys(B).length===0&&delete n[D]}}}function P(){C(),a=!0,s!==i&&(s=i,c(s.object))}function C(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:P,resetDefaultState:C,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfObject:M,releaseStatesOfProgram:x,initAttributes:_,enableAttribute:p,disableUnusedAttributes:v}}function Jv(r,t,e){let n;function i(l){n=l}function s(l,c){r.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(r.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let u=0;u<h;u++)f+=c[u];e.update(f,n,1)}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function $v(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let x=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(x){return!(x!==Ii&&n.convert(x)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(x){let M=x===Pi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(x!==Xn&&x!==pi&&!M&&n.convert(x)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(kt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=e.logarithmicDepthBuffer===!0&&d===!1;e.reversedDepthBuffer===!0&&d===!1&&kt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&d===!0&&kt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let u=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),v=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),w=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),T=r.getParameter(r.MAX_SAMPLES),E=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:u,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:v,maxVaryings:w,maxFragmentUniforms:y,maxSamples:T,samples:E}}function Kv(r){let t=this,e=null,n=0,i=!1,s=!1,a=new Ei,o=new Wt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let u=d.length!==0||f||n!==0||i;return i=f,n=d.length,u},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){e=h(d,f,0)},this.setState=function(d,f,u){let g=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,m=r.get(d);if(!i||g===null||g.length===0||s&&!p)s?h(null):c();else{let v=s?0:n,w=v*4,y=m.clippingState||null;l.value=y,y=h(g,f,w,u);for(let T=0;T!==w;++T)y[T]=e[T];m.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,f,u,g){let _=d!==null?d.length:0,p=null;if(_!==0){if(p=l.value,g!==!0||p===null){let m=u+_*4,v=f.matrixWorldInverse;o.getNormalMatrix(v),(p===null||p.length<m)&&(p=new Float32Array(m));for(let w=0,y=u;w!==_;++w,y+=4)a.copy(d[w]).applyMatrix4(v,o),a.normal.toArray(p,y),p[y+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function qp(r,t,e){return new Ao(r,{minFilter:fr,generateMipmaps:t,type:Pi,colorSpace:Wa,depthBuffer:e})}function Co(r,t,e){return new Vi({name:r,uniforms:t,vertexShader:Zt.cube_vert,fragmentShader:e,side:mn,blending:fs,depthTest:!1,depthWrite:!1})}function iy(){return Co("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${pm}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function ry(){return Co("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:mm}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function sy(){return Co("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${jv}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Yp(){return Co("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Zp(){return Co("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function ay(r){let t=new WeakMap,e=new WeakMap,n=null;function i(f,u=!1){return f==null?null:u?a(f):s(f)}function s(f){if(f&&f.isTexture){let u=f.mapping;if(u===hc||u===uc)if(t.has(f)){let g=t.get(f).texture;return o(g,f.mapping)}else{let g=f.image;if(g&&g.height>0){let _=new Ao(g.height);return _.fromEquirectangularTexture(r,f),t.set(f,_),f.addEventListener("dispose",c),o(_.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let u=f.mapping,g=u===hc||u===uc,_=u===ps||u===ca;if(g||_){let p=e.get(f),m=p!==void 0?p.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return n===null&&(n=new fa(r)),p=g?n.fromEquirectangular(f,p):n.fromCubemap(f,p),p.texture.pmremVersion=f.pmremVersion,e.set(f,p),p.texture;if(p!==void 0)return p.texture;{let v=f.image;return g&&v&&v.height>0||_&&v&&l(v)?(n===null&&(n=new fa(r)),p=g?n.fromEquirectangular(f):n.fromCubemap(f),p.texture.pmremVersion=f.pmremVersion,e.set(f,p),f.addEventListener("dispose",h),p.texture):null}}}return f}function o(f,u){return u===hc?f.mapping=ps:u===uc&&(f.mapping=ca),f}function l(f){let u=0,g=6;for(let _=0;_<g;_++)f[_]!==void 0&&u++;return u===g}function c(f){let u=f.target;u.removeEventListener("dispose",c);let g=t.get(u);g!==void 0&&(t.delete(u),g.dispose())}function h(f){let u=f.target;u.removeEventListener("dispose",h);let g=e.get(u);g!==void 0&&(e.delete(u),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function oy(r){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=r.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&ss("WebGLRenderer: "+n+" extension not supported."),i}}}function ly(r,t,e,n){let i={},s=new WeakMap,a=new FinalizationRegistry(g=>delete i[g]);function o(g){l(g.target)}function l(g){g.index!==null&&t.remove(g.index);for(let p in g.attributes)t.remove(g.attributes[p]);g.removeEventListener("dispose",o),delete i[g.id],a.unregister(g);let _=s.get(g);_&&(t.remove(_),s.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function c(g,_){return i[_.id]!==void 0||(_.addEventListener("dispose",o),i[_.id]=new WeakRef(_),a.register(_,_.id,_),e.memory.geometries++),_}function h(g){let _=g.attributes;for(let p in _)t.update(_[p],r.ARRAY_BUFFER)}function d(g){let _=g.index,p=g.attributes.position,m=0;if(p===void 0)return;let v=_!==null?_.array.length:p.array.length/3-1,w=p.count>=65535?$a:Ja,y=new w(Math.ceil(v/3)*6,1),T=y.array;if(_!==null){let x=_.array;m=_.version;for(let M=0,P=0;M<v;M+=3){let C=x[M+0],N=x[M+1],D=x[M+2];T[P++]=C,T[P++]=N,T[P++]=N,T[P++]=D,T[P++]=D,T[P++]=C}}else{m=p.version;for(let x=0,M=0;x<v;x+=3){let P=x+0,C=x+1,N=x+2;T[M++]=P,T[M++]=C,T[M++]=C,T[M++]=N,T[M++]=N,T[M++]=P}}y.version=m;let E=s.get(g);E&&t.remove(E),s.set(g,y)}function f(g){let _=s.get(g);if(_){let p=g.index;p!==null&&_.version<p.version&&d(g)}else d(g);return s.get(g)}function u(){for(let g in i){let _=i[g].deref();_!==void 0&&l(_)}}return{get:c,update:h,getWireframeAttribute:f,dispose:u}}function cy(r,t,e){let n;function i(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,f){r.drawElements(n,f,s,d*a),e.update(f,n,1)}function c(d,f,u){u!==0&&(r.drawElementsInstanced(n,f,s,d*a,u),e.update(f,n,u))}function h(d,f,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,u);let _=0;for(let p=0;p<u;p++)_+=f[p];e.update(_,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function hy(r){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case r.TRIANGLES:e.triangles+=o*(s/3);break;case r.LINES:e.lines+=o*(s/2);break;case r.LINE_STRIP:e.lines+=o*(s-1);break;case r.LINE_LOOP:e.lines+=o*s;break;case r.POINTS:e.points+=o*s;break;default:Ht("WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function uy(r,t,e){let n=new WeakMap,i=new Le;function s(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,f=n.get(o);if(f===void 0||f.count!==d){let P=function(){x.dispose(),n.delete(o),o.removeEventListener("dispose",P)};f!==void 0&&f.texture.dispose();let u=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],w=0;u===!0&&(w=1),g===!0&&(w=2),_===!0&&(w=3);let y=o.attributes.position.count*w,T=1;y>t.maxTextureSize&&(T=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let E=new Float32Array(y*T*4*d),x=new Ya(E,y,T,d);x.type=pi,x.needsUpdate=!0;let M=w*4;for(let C=0;C<d;C++){let N=p[C],D=m[C],B=v[C],I=y*T*4*C;for(let z=0;z<N.count;z++){let V=z*M;u===!0&&(i.fromBufferAttribute(N,z),E[I+V+0]=i.x,E[I+V+1]=i.y,E[I+V+2]=i.z,E[I+V+3]=0),g===!0&&(i.fromBufferAttribute(D,z),E[I+V+4]=i.x,E[I+V+5]=i.y,E[I+V+6]=i.z,E[I+V+7]=0),_===!0&&(i.fromBufferAttribute(B,z),E[I+V+8]=i.x,E[I+V+9]=i.y,E[I+V+10]=i.z,E[I+V+11]=B.itemSize===4?i.w:1)}}f={count:d,texture:x,size:new jt(y,T)},n.set(o,f),o.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,e);else{let u=0;for(let _=0;_<c.length;_++)u+=c[_];let g=o.morphTargetsRelative?1:1-u;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function fy(r,t,e,n,i){let s=new WeakMap;function a(c){let h=i.render.frame,d=c.geometry,f=t.get(c,d);if(s.get(f)!==h&&(t.update(f),s.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(e.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){let u=c.skeleton;s.get(u)!==h&&(u.update(),s.set(u,h))}return f}function o(){s=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}function py(r,t,e,n,i,s){let a=new ni(t,e,{type:r,depthBuffer:i,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new ki;h.setAttribute("position",new cn([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new cn([0,2,0,0,2,0],2));let d=new Zl({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new Re(h,d),u=new fo(-1,1,1,-1,0,1),g=null,_=null,p=!1,m,v=null,w=[],y=!1;this.setSize=function(T,E){a.setSize(T,E),o!==null&&o.setSize(T,E),l!==null&&l.setSize(T,E);for(let x=0;x<w.length;x++){let M=w[x];M.setSize&&M.setSize(T,E)}},this.setEffects=function(T){w=T,y=w.length>0&&w[0].isRenderPass===!0;let E=a.width,x=a.height;w.length>0&&o===null&&(o=new ni(E,x,{type:Pi,depthBuffer:!1,stencilBuffer:!1}),l=new ni(E,x,{type:Pi,depthBuffer:!1,stencilBuffer:!1}));let M=i===!0&&w.some(P=>P.needsDepthTexture===!0);M!==(a.depthTexture!==null)&&(M===!0&&c===null&&(c=new hr(E,x),s===!0&&(c.format=dr,c.type=ms)),a.dispose(),a.depthTexture=M?c:null,a.resolveDepthBuffer=M,a.storeMultisampledDepthBuffer=M);for(let P=0;P<w.length;P++){let C=w[P];C.setSize&&C.setSize(E,x),M&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(c)}},this.begin=function(T,E){if(p||T.toneMapping===Xi&&w.length===0)return!1;if(v=E,E!==null){let x=E.width,M=E.height;(a.width!==x||a.height!==M)&&this.setSize(x,M)}return y===!1&&T.setRenderTarget(a),m=T.toneMapping,T.toneMapping=Xi,!0},this.hasRenderPass=function(){return y},this.end=function(T,E){T.toneMapping=m,p=!0;let x=a,M=o;for(let P=0;P<w.length;P++){let C=w[P];C.enabled!==!1&&(C.render(T,M,x,E),C.needsSwap!==!1&&(x=M,M=M===o?l:o))}if(g!==T.outputColorSpace||_!==T.toneMapping){g=T.outputColorSpace,_=T.toneMapping,d.defines={},ae.getTransfer(g)===ge&&(d.defines.SRGB_TRANSFER="");let P=dy[_];P&&(d.defines[P]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=x.texture,T.setRenderTarget(v),T.render(f,u),v=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}function da(r,t,e){let n=r[0];if(n<=0||n>0)return r;let i=t*e,s=Jp[i];if(s===void 0&&(s=new Float32Array(i),Jp[i]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function en(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function nn(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function jc(r,t){let e=$p[t];e===void 0&&(e=new Int32Array(t),$p[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function my(r,t){let e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function gy(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(en(e,t))return;r.uniform2fv(this.addr,t),nn(e,t)}}function _y(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(en(e,t))return;r.uniform3fv(this.addr,t),nn(e,t)}}function xy(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(en(e,t))return;r.uniform4fv(this.addr,t),nn(e,t)}}function vy(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(en(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),nn(e,t)}else{if(en(e,n))return;jp.set(n),r.uniformMatrix2fv(this.addr,!1,jp),nn(e,n)}}function yy(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(en(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),nn(e,t)}else{if(en(e,n))return;Qp.set(n),r.uniformMatrix3fv(this.addr,!1,Qp),nn(e,n)}}function Sy(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(en(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),nn(e,t)}else{if(en(e,n))return;Kp.set(n),r.uniformMatrix4fv(this.addr,!1,Kp),nn(e,n)}}function My(r,t){let e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function by(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(en(e,t))return;r.uniform2iv(this.addr,t),nn(e,t)}}function Ty(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(en(e,t))return;r.uniform3iv(this.addr,t),nn(e,t)}}function wy(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(en(e,t))return;r.uniform4iv(this.addr,t),nn(e,t)}}function Ey(r,t){let e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function Ay(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(en(e,t))return;r.uniform2uiv(this.addr,t),nn(e,t)}}function Cy(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(en(e,t))return;r.uniform3uiv(this.addr,t),nn(e,t)}}function Ry(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(en(e,t))return;r.uniform4uiv(this.addr,t),nn(e,t)}}function th(r){return r.version===0&&(r.compareFunction=Hu,r.needsUpdate=!0),r}function Py(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?s=th(_m):s=gm,e.setTexture2D(t||s,i)}function Iy(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||ym,i)}function Ly(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_CUBE_SHADOW?s=th(xm):s=Sm,e.setTextureCube(t||s,i)}function Dy(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||vm,i)}function Ny(r){switch(r){case 5126:return my;case 35664:return gy;case 35665:return _y;case 35666:return xy;case 35674:return vy;case 35675:return yy;case 35676:return Sy;case 5124:case 35670:return My;case 35667:case 35671:return by;case 35668:case 35672:return Ty;case 35669:case 35673:return wy;case 5125:return Ey;case 36294:return Ay;case 36295:return Cy;case 36296:return Ry;case 35678:case 36198:case 36298:case 36306:case 35682:return Py;case 35679:case 36299:case 36307:return Iy;case 35680:case 36300:case 36308:case 36293:return Ly;case 36289:case 36303:case 36311:case 36292:return Dy}}function Uy(r,t){r.uniform1fv(this.addr,t)}function Fy(r,t){let e=da(t,this.size,2);r.uniform2fv(this.addr,e)}function Oy(r,t){let e=da(t,this.size,3);r.uniform3fv(this.addr,e)}function By(r,t){let e=da(t,this.size,4);r.uniform4fv(this.addr,e)}function zy(r,t){let e=da(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function ky(r,t){let e=da(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function Gy(r,t){let e=da(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function Vy(r,t){r.uniform1iv(this.addr,t)}function Hy(r,t){r.uniform2iv(this.addr,t)}function Wy(r,t){r.uniform3iv(this.addr,t)}function Xy(r,t){r.uniform4iv(this.addr,t)}function qy(r,t){r.uniform1uiv(this.addr,t)}function Yy(r,t){r.uniform2uiv(this.addr,t)}function Zy(r,t){r.uniform3uiv(this.addr,t)}function Jy(r,t){r.uniform4uiv(this.addr,t)}function $y(r,t,e){let n=this.cache,i=t.length,s=jc(e,i);en(n,s)||(r.uniform1iv(this.addr,s),nn(n,s));let a;this.type===r.SAMPLER_2D_SHADOW?a=th(_m):a=gm;for(let o=0;o!==i;++o)e.setTexture2D(t[o]||a,s[o])}function Ky(r,t,e){let n=this.cache,i=t.length,s=jc(e,i);en(n,s)||(r.uniform1iv(this.addr,s),nn(n,s));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||ym,s[a])}function Qy(r,t,e){let n=this.cache,i=t.length,s=jc(e,i);en(n,s)||(r.uniform1iv(this.addr,s),nn(n,s));let a;this.type===r.SAMPLER_CUBE_SHADOW?a=th(xm):a=Sm;for(let o=0;o!==i;++o)e.setTextureCube(t[o]||a,s[o])}function jy(r,t,e){let n=this.cache,i=t.length,s=jc(e,i);en(n,s)||(r.uniform1iv(this.addr,s),nn(n,s));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||vm,s[a])}function tS(r){switch(r){case 5126:return Uy;case 35664:return Fy;case 35665:return Oy;case 35666:return By;case 35674:return zy;case 35675:return ky;case 35676:return Gy;case 5124:case 35670:return Vy;case 35667:case 35671:return Hy;case 35668:case 35672:return Wy;case 35669:case 35673:return Xy;case 5125:return qy;case 36294:return Yy;case 36295:return Zy;case 36296:return Jy;case 35678:case 36198:case 36298:case 36306:case 35682:return $y;case 35679:case 36299:case 36307:return Ky;case 35680:case 36300:case 36308:case 36293:return Qy;case 36289:case 36303:case 36311:case 36292:return jy}}function tm(r,t){r.seq.push(t),r.map[t.id]=t}function eS(r,t,e){let n=r.name,i=n.length;for(rf.lastIndex=0;;){let s=rf.exec(n),a=rf.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){tm(e,c===void 0?new af(o,r,t):new of(o,r,t));break}else{let d=e.map[o];d===void 0&&(d=new lf(o),tm(e,d)),e=d}}}function em(r,t,e){let n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}function rS(r,t){let e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=i;a<s;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function sS(r){ae._getMatrix(nm,ae.workingColorSpace,r);let t=`mat3( ${nm.elements.map(e=>e.toFixed(4))} )`;switch(ae.getTransfer(r)){case Xa:return[t,"LinearTransferOETF"];case ge:return[t,"sRGBTransferOETF"];default:return kt("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function im(r,t,e){let n=r.getShaderParameter(t,r.COMPILE_STATUS),s=(r.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";let a=/ERROR: 0:(\d+)/.exec(s);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+rS(r.getShaderSource(t),o)}else return s}function aS(r,t){let e=sS(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}function lS(r,t){let e=oS[t];return e===void 0?(kt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function cS(){ae.getLuminanceCoefficients(Kc);let r=Kc.x.toFixed(4),t=Kc.y.toFixed(4),e=Kc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function hS(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Eo).join(`
`)}function uS(r){let t=[];for(let e in r){let n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function fS(r,t){let e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(t,i),a=s.name,o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function Eo(r){return r!==""}function rm(r,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function sm(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}function cf(r){return r.replace(dS,pS)}function pS(r,t){let e=Zt[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return cf(e)}function am(r){return r.replace(mS,gS)}function gS(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function om(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function xS(r){return _S[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}function yS(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":vS[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}function MS(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":SS[r.combine]||"ENVMAP_BLENDING_NONE"}function bS(r,t,e,n){let i=r.getContext(),s=e.defines,a=e.vertexShader,o=e.fragmentShader,l=xS(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=yS(e),d=MS(e),f=hS(e),u=uS(s),g=i.createProgram(),_,p,m=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u].filter(Eo).join(`
`),_.length>0&&(_+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u].filter(Eo).join(`
`),p.length>0&&(p+=`
`)):(_=[om(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Eo).join(`
`),p=[om(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Xi?"#define TONE_MAPPING":"",e.toneMapping!==Xi?Zt.tonemapping_pars_fragment:"",e.toneMapping!==Xi?lS("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,aS("linearToOutputTexel",e.outputColorSpace),cS(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Eo).join(`
`)),a=cf(a),a=rm(a,e),a=sm(a,e),o=cf(o),o=rm(o,e),o=sm(o,e),a=am(a),o=am(o),e.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,_=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,p=["#define varying in",e.glslVersion===Wu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Wu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=m+_+a,w=m+p+o,y=em(i,i.VERTEX_SHADER,v),T=em(i,i.FRAGMENT_SHADER,w);i.attachShader(g,y),i.attachShader(g,T),e.index0AttributeName!==void 0?i.bindAttribLocation(g,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function E(C){if(r.debug.checkShaderErrors){let N=i.getProgramInfoLog(g)||"",D=i.getShaderInfoLog(y)||"",B=i.getShaderInfoLog(T)||"",I=N.trim(),z=D.trim(),V=B.trim(),O=!0,j=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(O=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,y,T);else{let H=im(i,y,"vertex"),R=im(i,T,"fragment");Ht("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+I+`
`+H+`
`+R)}else I!==""?kt("WebGLProgram: Program Info Log:",I):(z===""||V==="")&&(j=!1);j&&(C.diagnostics={runnable:O,programLog:I,vertexShader:{log:z,prefix:_},fragmentShader:{log:V,prefix:p}})}i.deleteShader(y),i.deleteShader(T),x=new ua(i,g),M=fS(i,g)}let x;this.getUniforms=function(){return x===void 0&&E(this),x};let M;this.getAttributes=function(){return M===void 0&&E(this),M};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=i.getProgramParameter(g,nS)),P},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=iS++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=y,this.fragmentShader=T,this}function wS(r){return r===zr||r===So||r===Mo}function ES(r,t,e,n,i,s){let a=new Za,o=new hf,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function u(x){return l.add(x),x===0?"uv":`uv${x}`}function g(x,M,P,C,N,D){let B=C.fog,I=N.geometry,z=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?C.environment:null,V=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,O=t.get(x.envMap||z,V),j=f[x.type],H=n.precision;x.precision!==null&&(H=n.getMaxPrecision(x.precision),H!==x.precision&&kt("WebGLProgram.getParameters:",x.precision,"not supported, using",H,"instead."));let R=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,et=R!==void 0?R.length:0,Mt=0;I.morphAttributes.position!==void 0&&(Mt=1),I.morphAttributes.normal!==void 0&&(Mt=2),I.morphAttributes.color!==void 0&&(Mt=3);let Ft,Z,ht,rt;if(j){let it=Yi[j];Ft=it.vertexShader,Z=it.fragmentShader}else{Ft=x.vertexShader,Z=x.fragmentShader;let it=o.getVertexShaderStage(x),wt=o.getFragmentShaderStage(x);o.update(x,it,wt),ht=it.id,rt=wt.id}let bt=r.getRenderTarget(),ut=r.state.buffers.depth.getReversed(),Pt=N.isInstancedMesh===!0,ue=N.isBatchedMesh===!0,At=!!x.map,Gt=!!x.matcap,Lt=!!O,Ut=Lt&&O.isPMREMTexture===!0,le=!!x.aoMap,ne=!!x.lightMap,J=!!x.bumpMap&&x.wireframe===!1,Yt=!!x.normalMap,ze=!!x.displacementMap,de=!!x.emissiveMap,te=!!x.metalnessMap,we=!!x.roughnessMap,Ee=x.anisotropy>0,F=x.clearcoat>0,he=x.diffuseRoughness>0,ie=x.dispersion>0,Vt=x.retroreflectivity>0,$=x.iridescence>0,Ct=x.sheen>0,vt=x.transmission>0,Bt=Ee&&!!x.anisotropyMap,A=F&&!!x.clearcoatMap,S=F&&!!x.clearcoatNormalMap,k=F&&!!x.clearcoatRoughnessMap,ot=he&&!!x.diffuseRoughnessMap,st=$&&!!x.iridescenceMap,dt=$&&!!x.iridescenceThicknessMap,_t=Ct&&!!x.sheenColorMap,W=Ct&&!!x.sheenRoughnessMap,tt=!!x.specularMap,ft=!!x.specularColorMap,L=!!x.specularIntensityMap,Q=vt&&!!x.transmissionMap,K=vt&&!!x.thicknessMap,pt=!!x.gradientMap,ct=!!x.alphaMap,mt=x.alphaTest>0,lt=!!x.alphaHash,gt=!!x.extensions,at=Xi;x.toneMapped&&(bt===null||bt.isXRRenderTarget===!0)&&(at=r.toneMapping);let nt=Ut?O.isCompressedCubeTexture?O.image[0].mipmaps:O.mipmaps:null,xt={shaderID:j,shaderType:x.type,shaderName:x.name,vertexShader:Ft,fragmentShader:Z,defines:x.defines,customVertexShaderID:ht,customFragmentShaderID:rt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:H,batching:ue,batchingColor:ue&&N._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&N.instanceColor!==null,instancingMorph:Pt&&N.morphTexture!==null,outputColorSpace:bt===null?r.outputColorSpace:bt.isXRRenderTarget===!0?bt.texture.colorSpace:ae.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:At,matcap:Gt,envMap:Lt,envMapMode:Lt&&O.mapping,envMapPMREM:Ut,envMapMaxLod:Ut?nt.length-1:null,envMapSize:Ut?nt[0].width:null,aoMap:le,lightMap:ne,bumpMap:J,normalMap:Yt,displacementMap:ze,emissiveMap:de,normalMapObjectSpace:Yt&&x.normalMapType===Cp,normalMapTangentSpace:Yt&&x.normalMapType===bo,packedNormalMap:Yt&&x.normalMapType===bo&&wS(x.normalMap.format),metalnessMap:te,roughnessMap:we,anisotropy:Ee,anisotropyMap:Bt,clearcoat:F,clearcoatMap:A,clearcoatNormalMap:S,clearcoatRoughnessMap:k,diffuseRoughness:he,diffuseRoughnessMap:ot,dispersion:ie,retroreflection:Vt,iridescence:$,iridescenceMap:st,iridescenceThicknessMap:dt,sheen:Ct,sheenColorMap:_t,sheenRoughnessMap:W,specularMap:tt,specularColorMap:ft,specularIntensityMap:L,transmission:vt,transmissionMap:Q,thicknessMap:K,gradientMap:pt,opaque:x.transparent===!1&&x.blending===la&&x.alphaToCoverage===!1,alphaMap:ct,alphaTest:mt,alphaHash:lt,combine:x.combine,mapUv:At&&u(x.map.channel),aoMapUv:le&&u(x.aoMap.channel),lightMapUv:ne&&u(x.lightMap.channel),bumpMapUv:J&&u(x.bumpMap.channel),normalMapUv:Yt&&u(x.normalMap.channel),displacementMapUv:ze&&u(x.displacementMap.channel),emissiveMapUv:de&&u(x.emissiveMap.channel),metalnessMapUv:te&&u(x.metalnessMap.channel),roughnessMapUv:we&&u(x.roughnessMap.channel),anisotropyMapUv:Bt&&u(x.anisotropyMap.channel),clearcoatMapUv:A&&u(x.clearcoatMap.channel),clearcoatNormalMapUv:S&&u(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:k&&u(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ot&&u(x.diffuseRoughnessMap.channel),iridescenceMapUv:st&&u(x.iridescenceMap.channel),iridescenceThicknessMapUv:dt&&u(x.iridescenceThicknessMap.channel),sheenColorMapUv:_t&&u(x.sheenColorMap.channel),sheenRoughnessMapUv:W&&u(x.sheenRoughnessMap.channel),specularMapUv:tt&&u(x.specularMap.channel),specularColorMapUv:ft&&u(x.specularColorMap.channel),specularIntensityMapUv:L&&u(x.specularIntensityMap.channel),transmissionMapUv:Q&&u(x.transmissionMap.channel),thicknessMapUv:K&&u(x.thicknessMap.channel),alphaMapUv:ct&&u(x.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(Yt||Ee),vertexNormals:!!I.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!I.attributes.uv&&(At||ct),fog:!!B,useFog:x.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||I.attributes.normal===void 0&&Yt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ut,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:et,morphTextureStride:Mt,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:D.filter(it=>it.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:at,decodeVideoTexture:At&&x.map.isVideoTexture===!0&&ae.getTransfer(x.map.colorSpace)===ge,decodeVideoTextureEmissive:de&&x.emissiveMap.isVideoTexture===!0&&ae.getTransfer(x.emissiveMap.colorSpace)===ge,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Wi,flipSided:x.side===mn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:gt&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(gt&&x.extensions.multiDraw===!0||ue)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return xt.vertexUv1s=l.has(1),xt.vertexUv2s=l.has(2),xt.vertexUv3s=l.has(3),l.clear(),xt}function _(x){let M=[];if(x.shaderID?M.push(x.shaderID):(M.push(x.customVertexShaderID),M.push(x.customFragmentShaderID)),x.defines!==void 0)for(let P in x.defines)M.push(P),M.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(p(M,x),m(M,x),M.push(r.outputColorSpace)),M.push(x.customProgramCacheKey),M.join()}function p(x,M){x.push(M.precision),x.push(M.outputColorSpace),x.push(M.envMapMode),x.push(M.envMapPMREM),x.push(M.envMapMaxLod),x.push(M.envMapSize),x.push(M.mapUv),x.push(M.alphaMapUv),x.push(M.lightMapUv),x.push(M.aoMapUv),x.push(M.bumpMapUv),x.push(M.normalMapUv),x.push(M.displacementMapUv),x.push(M.emissiveMapUv),x.push(M.metalnessMapUv),x.push(M.roughnessMapUv),x.push(M.anisotropyMapUv),x.push(M.clearcoatMapUv),x.push(M.clearcoatNormalMapUv),x.push(M.clearcoatRoughnessMapUv),x.push(M.diffuseRoughnessMapUv),x.push(M.iridescenceMapUv),x.push(M.iridescenceThicknessMapUv),x.push(M.sheenColorMapUv),x.push(M.sheenRoughnessMapUv),x.push(M.specularMapUv),x.push(M.specularColorMapUv),x.push(M.specularIntensityMapUv),x.push(M.transmissionMapUv),x.push(M.thicknessMapUv),x.push(M.combine),x.push(M.fogExp2),x.push(M.sizeAttenuation),x.push(M.morphTargetsCount),x.push(M.numSunLights),x.push(M.numDirLights),x.push(M.numPointLights),x.push(M.numSpotLights),x.push(M.numSpotLightMaps),x.push(M.numHemiLights),x.push(M.numRectAreaLights),x.push(M.numSunLightShadows),x.push(M.numDirLightShadows),x.push(M.numPointLightShadows),x.push(M.numSpotLightShadows),x.push(M.numSpotLightShadowsWithMaps),x.push(M.numLightProbes),x.push(M.numLightProbeGrids),x.push(M.shadowMapType),x.push(M.toneMapping),x.push(M.numClippingPlanes),x.push(M.numClipIntersection),x.push(M.depthPacking)}function m(x,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.retroreflection&&a.enable(24),M.diffuseRoughness&&a.enable(25),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),M.packedNormalMap&&a.enable(22),M.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),M.numLightProbeGrids>0&&a.enable(22),M.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function v(x){let M=f[x.type],P;if(M){let C=Yi[M];P=Vp.clone(C.uniforms)}else P=x.uniforms;return P}function w(x,M){let P=h.get(M);return P!==void 0?++P.usedTimes:(P=new bS(r,M,x,i),c.push(P),h.set(M,P)),P}function y(x){if(--x.usedTimes===0){let M=c.indexOf(x);c[M]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function T(x){o.remove(x)}function E(){o.dispose()}return{getParameters:g,getProgramCacheKey:_,getUniforms:v,acquireProgram:w,releaseProgram:y,releaseShaderCache:T,programs:c,dispose:E}}function AS(){let r=new WeakMap;function t(a){return r.has(a)}function e(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function CS(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function lm(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function cm(){let r=[],t=0,e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function a(f){let u=0;return f.isInstancedMesh&&(u+=2),f.isSkinnedMesh&&(u+=1),u}function o(f,u,g,_,p,m){let v=r[t];return v===void 0?(v={id:f.id,object:f,geometry:u,material:g,materialVariant:a(f),groupOrder:_,renderOrder:f.renderOrder,z:p,group:m},r[t]=v):(v.id=f.id,v.object=f,v.geometry=u,v.material=g,v.materialVariant=a(f),v.groupOrder=_,v.renderOrder=f.renderOrder,v.z=p,v.group=m),t++,v}function l(f,u,g,_,p,m,v){v.reversedDepth===!0&&(p=-p);let w=o(f,u,g,_,p,m);g.transmission>0?n.push(w):g.transparent===!0?i.push(w):e.push(w)}function c(f,u,g,_,p,m){let v=o(f,u,g,_,p,m);g.transmission>0?n.unshift(v):g.transparent===!0?i.unshift(v):e.unshift(v)}function h(f,u){e.length>1&&e.sort(f||CS),n.length>1&&n.sort(u||lm),i.length>1&&i.sort(u||lm)}function d(){for(let f=t,u=r.length;f<u;f++){let g=r[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:l,unshift:c,finish:d,sort:h}}function RS(){let r=new WeakMap;function t(n,i){let s=r.get(n),a;return s===void 0?(a=new cm,r.set(n,[a])):i>=s.length?(a=new cm,s.push(a)):a=s[i],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function PS(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new q,color:new zt};break;case"SpotLight":e={position:new q,direction:new q,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new q,color:new zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new q,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":e={color:new zt,position:new q,halfWidth:new q,halfHeight:new q};break}return r[t.id]=e,e}}}function IS(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}function DS(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function NS(r){let t=new PS,e=IS(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new q);let i=new q,s=new be,a=new be;function o(c){let h=0,d=0,f=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let u=0,g=0,_=0,p=0,m=0,v=0,w=0,y=0,T=0,E=0,x=0,M=0,P=0,C=0;c.sort(DS);for(let D=0,B=c.length;D<B;D++){let I=c[D],z=I.color,V=I.intensity,O=I.distance,j=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===zr?j=I.shadow.map.texture:j=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=z.r*V,d+=z.g*V,f+=z.b*V;else if(I.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(I.sh.coefficients[H],V);C++}else if(I.isSunLight){let H=t.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let R=I.shadow,et=e.get(I);et.shadowIntensity=R.intensity,et.shadowBias=R.bias,et.shadowNormalBias=R.normalBias,et.shadowRadius=R.radius,et.shadowMapSize.copy(R.mapSize).multiply(R.getFrameExtents()),n.sunShadow[g]=et,n.sunShadowMap[g]=j;let Mt=R.getViewportCount();for(let Ft=0;Ft<Mt;Ft++)n.sunShadowMatrix[_+Ft]=R.getMatrix(Ft),n.sunShadowCascade[_+Ft]=R._cascadeData[Ft];_+=Mt,g++}n.sun[u]=H,u++}else if(I.isDirectionalLight){let H=t.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let R=I.shadow,et=e.get(I);et.shadowIntensity=R.intensity,et.shadowBias=R.bias,et.shadowNormalBias=R.normalBias,et.shadowRadius=R.radius,et.shadowMapSize=R.mapSize,n.directionalShadow[p]=et,n.directionalShadowMap[p]=j,n.directionalShadowMatrix[p]=I.shadow.matrix,T++}n.directional[p]=H,p++}else if(I.isSpotLight){let H=t.get(I);H.position.setFromMatrixPosition(I.matrixWorld),H.color.copy(z).multiplyScalar(V),H.distance=O,H.coneCos=Math.cos(I.angle),H.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),H.decay=I.decay,n.spot[v]=H;let R=I.shadow;if(I.map&&(n.spotLightMap[M]=I.map,M++,R.updateMatrices(I),I.castShadow&&P++),n.spotLightMatrix[v]=R.matrix,I.castShadow){let et=e.get(I);et.shadowIntensity=R.intensity,et.shadowBias=R.bias,et.shadowNormalBias=R.normalBias,et.shadowRadius=R.radius,et.shadowMapSize=R.mapSize,n.spotShadow[v]=et,n.spotShadowMap[v]=j,x++}v++}else if(I.isRectAreaLight){let H=t.get(I);H.color.copy(z).multiplyScalar(V),H.halfWidth.set(I.width*.5,0,0),H.halfHeight.set(0,I.height*.5,0),n.rectArea[w]=H,w++}else if(I.isPointLight){let H=t.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),H.distance=I.distance,H.decay=I.decay,I.castShadow){let R=I.shadow,et=e.get(I);et.shadowIntensity=R.intensity,et.shadowBias=R.bias,et.shadowNormalBias=R.normalBias,et.shadowRadius=R.radius,et.shadowMapSize=R.mapSize,et.shadowCameraNear=R.camera.near,et.shadowCameraFar=R.camera.far,n.pointShadow[m]=et,n.pointShadowMap[m]=j,n.pointShadowMatrix[m]=I.shadow.matrix,E++}n.point[m]=H,m++}else if(I.isHemisphereLight){let H=t.get(I);H.skyColor.copy(I.color).multiplyScalar(V),H.groundColor.copy(I.groundColor).multiplyScalar(V),n.hemi[y]=H,y++}}w>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Tt.LTC_FLOAT_1,n.rectAreaLTC2=Tt.LTC_FLOAT_2):(n.rectAreaLTC1=Tt.LTC_HALF_1,n.rectAreaLTC2=Tt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;let N=n.hash;(N.sunLength!==u||N.directionalLength!==p||N.pointLength!==m||N.spotLength!==v||N.rectAreaLength!==w||N.hemiLength!==y||N.numSunShadows!==g||N.numDirectionalShadows!==T||N.numPointShadows!==E||N.numSpotShadows!==x||N.numSpotMaps!==M||N.numLightProbes!==C)&&(n.sun.length=u,n.directional.length=p,n.spot.length=v,n.rectArea.length=w,n.point.length=m,n.hemi.length=y,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.directionalShadowMatrix.length=T,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+M-P,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=C,N.sunLength=u,N.directionalLength=p,N.pointLength=m,N.spotLength=v,N.rectAreaLength=w,N.hemiLength=y,N.numSunShadows=g,N.numDirectionalShadows=T,N.numPointShadows=E,N.numSpotShadows=x,N.numSpotMaps=M,N.numLightProbes=C,n.version=LS++)}function l(c,h){let d=0,f=0,u=0,g=0,_=0,p=0,m=h.matrixWorldInverse;for(let v=0,w=c.length;v<w;v++){let y=c[v];if(y.isSunLight){let T=n.sun[d];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(m),d++}else if(y.isDirectionalLight){let T=n.directional[f];T.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(i),T.direction.transformDirection(m),f++}else if(y.isSpotLight){let T=n.spot[g];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(i),T.direction.transformDirection(m),g++}else if(y.isRectAreaLight){let T=n.rectArea[_];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(m),a.identity(),s.copy(y.matrixWorld),s.premultiply(m),a.extractRotation(s),T.halfWidth.set(y.width*.5,0,0),T.halfHeight.set(0,y.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){let T=n.point[u];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(m),u++}else if(y.isHemisphereLight){let T=n.hemi[p];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(m),p++}}}return{setup:o,setupView:l,state:n}}function hm(r){let t=new NS(r),e=[],n=[],i=[];function s(d){h.camera=d,e.length=0,n.length=0,i.length=0}function a(d){d.isLightProbeGrid?i.push(d):e.push(d)}function o(d){n.push(d)}function l(){t.setup(e),i.sort((d,f)=>d.priority-f.priority||d.id-f.id)}function c(d){t.setupView(e,d)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function US(r){let t=new WeakMap;function e(i,s=0){let a=t.get(i),o;return a===void 0?(o=new hm(r),t.set(i,[o])):s>=a.length?(o=new hm(r),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function kS(r,t,e){let n=new Nr,i=new jt,s=new jt,a=new Le,o=new Jl,l=new $l,c={},h=e.maxTextureSize,d={[Br]:mn,[mn]:Br,[Wi]:Wi},f=new Vi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new jt},radius:{value:4}},vertexShader:FS,fragmentShader:OS}),u=f.clone();u.defines.HORIZONTAL_PASS=1;let g=new ki;g.setAttribute("position",new Ci(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Re(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=us;let m=this.type;this.render=function(E,x,M){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;this.type===sp&&(kt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=us);let P=r.getRenderTarget(),C=r.getActiveCubeFace(),N=r.getActiveMipmapLevel(),D=r.state;D.setBlending(fs),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let B=m!==this.type;B&&x.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(z=>z.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,z=E.length;I<z;I++){let V=E[I],O=V.shadow;if(O===void 0){kt("WebGLShadowMap:",V,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;i.copy(O.mapSize);let j=O.getFrameExtents();i.multiply(j),s.copy(O.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/j.x),i.x=s.x*j.x,O.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/j.y),i.y=s.y*j.y,O.mapSize.y=s.y));let H=r.state.buffers.depth.getReversed();if(O.camera._reversedDepth=H,O.map===null||B===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===oa){if(V.isPointLight){kt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new ni(i.x,i.y,{format:zr,type:Pi,minFilter:Un,magFilter:Un,generateMipmaps:!1}),O.map.texture.name=V.name+".shadowMap",O.map.depthTexture=new hr(i.x,i.y,pi),O.map.depthTexture.name=V.name+".shadowMapDepth",O.map.depthTexture.format=cr,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=hn,O.map.depthTexture.magFilter=hn}else V.isPointLight?(O.map=new Ao(i.x),O.map.depthTexture=new eo(i.x,Ri)):(O.map=new ni(i.x,i.y),O.map.depthTexture=new hr(i.x,i.y,Ri)),O.map.depthTexture.name=V.name+".shadowMap",O.map.depthTexture.format=cr,this.type===us?(O.map.depthTexture.compareFunction=H?Vu:Gu,O.map.depthTexture.minFilter=Un,O.map.depthTexture.magFilter=Un):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=hn,O.map.depthTexture.magFilter=hn);O.camera.updateProjectionMatrix()}O.map.isWebGLCubeRenderTarget!==!0&&(O.map.width!==i.x||O.map.height!==i.y)&&O.map.setSize(i.x,i.y);let R=O.map.isWebGLCubeRenderTarget?6:O.getViewportCount();V.isPointLight!==!0&&O.updateMatrices(V,M);let et=(O.camera.layers.mask&4294967294)!==0?O.camera.layers:M.layers;for(let Mt=0;Mt<R;Mt++){let Ft=O.getCamera(Mt);if(V.isPointLight){let Z=O.camera,ht=O.matrix,rt=V.distance||Z.far;rt!==Z.far&&(Z.far=rt,Z.updateProjectionMatrix()),wo.setFromMatrixPosition(V.matrixWorld),Z.position.copy(wo),sf.copy(Z.position),sf.add(BS[Mt]),Z.up.copy(zS[Mt]),Z.lookAt(sf),Z.updateMatrixWorld(),ht.makeTranslation(-wo.x,-wo.y,-wo.z),um.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),O._frustum.setFromProjectionMatrix(um,Z.coordinateSystem,Z.reversedDepth)}if(O.map.isWebGLCubeRenderTarget)r.setRenderTarget(O.map,Mt),r.clear();else{Mt===0&&(r.setRenderTarget(O.map),r.clear());let Z=O.getViewport(Mt);a.set(s.x*Z.x,s.y*Z.y,s.x*Z.z,s.y*Z.w),D.viewport(a)}n=O.getFrustum(Mt),y(x,M,Ft,V,et,this.type)}O.isPointLightShadow!==!0&&this.type===oa&&v(O,M),O.needsUpdate=!1}m=this.type,p.needsUpdate=!1,r.setRenderTarget(P,C,N)};function v(E,x){let M=t.update(_);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,u.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,u.needsUpdate=!0),E.mapPass===null?E.mapPass=new ni(i.x,i.y,{format:zr,type:Pi}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),f.uniforms.shadow_pass.value=E.map.depthTexture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(x,null,M,f,_,null),u.uniforms.shadow_pass.value=E.mapPass.texture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(x,null,M,u,_,null)}function w(E,x,M,P){let C=null,N=M.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(N!==void 0)C=N;else if(C=M.isPointLight===!0?l:o,r.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let D=C.uuid,B=x.uuid,I=c[D];I===void 0&&(I={},c[D]=I);let z=I[B];z===void 0&&(z=C.clone(),I[B]=z,x.addEventListener("dispose",T)),C=z}if(C.visible=x.visible,C.wireframe=x.wireframe,P===oa?C.side=x.shadowSide!==null?x.shadowSide:x.side:C.side=x.shadowSide!==null?x.shadowSide:d[x.side],C.alphaMap=x.alphaMap,C.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,C.map=x.map,C.clipShadows=x.clipShadows,C.clippingPlanes=x.clippingPlanes,C.clipIntersection=x.clipIntersection,C.displacementMap=x.displacementMap,C.displacementScale=x.displacementScale,C.displacementBias=x.displacementBias,C.wireframeLinewidth=x.wireframeLinewidth,C.linewidth=x.linewidth,M.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let D=r.properties.get(C);D.light=M}return C}function y(E,x,M,P,C,N){if(E.visible===!1)return;if(E.layers.test(C)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&N===oa)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,E.matrixWorld);let I=t.update(E),z=E.material;if(Array.isArray(z)){let V=I.groups;for(let O=0,j=V.length;O<j;O++){let H=V[O],R=z[H.materialIndex];if(R&&R.visible){let et=w(E,R,P,N);E.onBeforeShadow(r,E,x,M,I,et,H),r.renderBufferDirect(M,null,I,et,E,H),E.onAfterShadow(r,E,x,M,I,et,H)}}}else if(z.visible){let V=w(E,z,P,N);E.onBeforeShadow(r,E,x,M,I,V,null),r.renderBufferDirect(M,null,I,V,E,null),E.onAfterShadow(r,E,x,M,I,V,null)}}let B=E.children;for(let I=0,z=B.length;I<z;I++)y(B[I],x,M,P,C,N)}function T(E){E.target.removeEventListener("dispose",T);for(let M in c){let P=c[M],C=E.target.uuid;C in P&&(P[C].dispose(),delete P[C])}}}function GS(r,t){function e(){let L=!1,Q=new Le,K=null,pt=new Le(0,0,0,0);return{setMask:function(ct){K!==ct&&!L&&(r.colorMask(ct,ct,ct,ct),K=ct)},setLocked:function(ct){L=ct},setClear:function(ct,mt,lt,gt,at){at===!0&&(ct*=gt,mt*=gt,lt*=gt),Q.set(ct,mt,lt,gt),pt.equals(Q)===!1&&(r.clearColor(ct,mt,lt,gt),pt.copy(Q))},reset:function(){L=!1,K=null,pt.set(-1,0,0,0)}}}function n(){let L=!1,Q=!1,K=null,pt=null,ct=null;return{setReversed:function(mt){if(Q!==mt){let lt=t.get("EXT_clip_control");mt?lt.clipControlEXT(lt.LOWER_LEFT_EXT,lt.ZERO_TO_ONE_EXT):lt.clipControlEXT(lt.LOWER_LEFT_EXT,lt.NEGATIVE_ONE_TO_ONE_EXT),Q=mt;let gt=ct;ct=null,this.setClear(gt)}},getReversed:function(){return Q},setTest:function(mt){mt?ut(r.DEPTH_TEST):Pt(r.DEPTH_TEST)},setMask:function(mt){K!==mt&&!L&&(r.depthMask(mt),K=mt)},setFunc:function(mt){if(Q&&(mt=zp[mt]),pt!==mt){switch(mt){case Dl:r.depthFunc(r.NEVER);break;case Nl:r.depthFunc(r.ALWAYS);break;case Ul:r.depthFunc(r.LESS);break;case js:r.depthFunc(r.LEQUAL);break;case Fl:r.depthFunc(r.EQUAL);break;case Ol:r.depthFunc(r.GEQUAL);break;case Bl:r.depthFunc(r.GREATER);break;case zl:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}pt=mt}},setLocked:function(mt){L=mt},setClear:function(mt){ct!==mt&&(ct=mt,Q&&(mt=1-mt),r.clearDepth(mt))},reset:function(){L=!1,K=null,pt=null,ct=null,Q=!1}}}function i(){let L=!1,Q=null,K=null,pt=null,ct=null,mt=null,lt=null,gt=null,at=null;return{setTest:function(nt){L||(nt?ut(r.STENCIL_TEST):Pt(r.STENCIL_TEST))},setMask:function(nt){Q!==nt&&!L&&(r.stencilMask(nt),Q=nt)},setFunc:function(nt,xt,it){(K!==nt||pt!==xt||ct!==it)&&(r.stencilFunc(nt,xt,it),K=nt,pt=xt,ct=it)},setOp:function(nt,xt,it){(mt!==nt||lt!==xt||gt!==it)&&(r.stencilOp(nt,xt,it),mt=nt,lt=xt,gt=it)},setLocked:function(nt){L=nt},setClear:function(nt){at!==nt&&(r.clearStencil(nt),at=nt)},reset:function(){L=!1,Q=null,K=null,pt=null,ct=null,mt=null,lt=null,gt=null,at=null}}}let s=new e,a=new n,o=new i,l={},c=new WeakMap,h={},d={},f={},u=new WeakMap,g=[],_=null,p=!1,m=null,v=null,w=null,y=null,T=null,E=null,x=null,M=new zt(0,0,0),P=0,C=!1,N=null,D=null,B=null,I=null,z=null,V=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,j=0,H=r.getParameter(r.VERSION);H.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(H)[1]),O=j>=1):H.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),O=j>=2);let R=null,et={},Mt=r.getParameter(r.SCISSOR_BOX),Ft=r.getParameter(r.VIEWPORT),Z=new Le().fromArray(Mt),ht=new Le().fromArray(Ft);function rt(L,Q,K,pt){let ct=new Uint8Array(4),mt=r.createTexture();r.bindTexture(L,mt),r.texParameteri(L,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(L,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let lt=0;lt<K;lt++)L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY?r.texImage3D(Q,0,r.RGBA,1,1,pt,0,r.RGBA,r.UNSIGNED_BYTE,ct):r.texImage2D(Q+lt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ct);return mt}let bt={};bt[r.TEXTURE_2D]=rt(r.TEXTURE_2D,r.TEXTURE_2D,1),bt[r.TEXTURE_CUBE_MAP]=rt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),bt[r.TEXTURE_2D_ARRAY]=rt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),bt[r.TEXTURE_3D]=rt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ut(r.DEPTH_TEST),a.setFunc(js),J(!1),Yt(Mu),ut(r.CULL_FACE),le(fs);function ut(L){h[L]!==!0&&(r.enable(L),h[L]=!0)}function Pt(L){h[L]!==!1&&(r.disable(L),h[L]=!1)}function ue(L,Q){return f[L]!==Q?(r.bindFramebuffer(L,Q),f[L]=Q,L===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=Q),L===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=Q),!0):!1}function At(L,Q){let K=g,pt=!1;if(L){K=u.get(Q),K===void 0&&(K=[],u.set(Q,K));let ct=L.textures;if(K.length!==ct.length||K[0]!==r.COLOR_ATTACHMENT0){for(let mt=0,lt=ct.length;mt<lt;mt++)K[mt]=r.COLOR_ATTACHMENT0+mt;K.length=ct.length,pt=!0}}else K[0]!==r.BACK&&(K[0]=r.BACK,pt=!0);pt&&r.drawBuffers(K)}function Gt(L){return _!==L?(r.useProgram(L),_=L,!0):!1}let Lt={[ds]:r.FUNC_ADD,[op]:r.FUNC_SUBTRACT,[lp]:r.FUNC_REVERSE_SUBTRACT};Lt[cp]=r.MIN,Lt[hp]=r.MAX;let Ut={[up]:r.ZERO,[fp]:r.ONE,[dp]:r.SRC_COLOR,[Eu]:r.SRC_ALPHA,[vp]:r.SRC_ALPHA_SATURATE,[_p]:r.DST_COLOR,[mp]:r.DST_ALPHA,[pp]:r.ONE_MINUS_SRC_COLOR,[Au]:r.ONE_MINUS_SRC_ALPHA,[xp]:r.ONE_MINUS_DST_COLOR,[gp]:r.ONE_MINUS_DST_ALPHA,[yp]:r.CONSTANT_COLOR,[Sp]:r.ONE_MINUS_CONSTANT_COLOR,[Mp]:r.CONSTANT_ALPHA,[bp]:r.ONE_MINUS_CONSTANT_ALPHA};function le(L,Q,K,pt,ct,mt,lt,gt,at,nt){if(L===fs){p===!0&&(Pt(r.BLEND),p=!1);return}if(p===!1&&(ut(r.BLEND),p=!0),L!==ap){if(L!==m||nt!==C){if((v!==ds||T!==ds)&&(r.blendEquation(r.FUNC_ADD),v=ds,T=ds),nt)switch(L){case la:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case bu:r.blendFunc(r.ONE,r.ONE);break;case Tu:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case wu:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Ht("WebGLState: Invalid blending: ",L);break}else switch(L){case la:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case bu:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Tu:Ht("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case wu:Ht("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ht("WebGLState: Invalid blending: ",L);break}w=null,y=null,E=null,x=null,M.set(0,0,0),P=0,m=L,C=nt}return}ct=ct||Q,mt=mt||K,lt=lt||pt,(Q!==v||ct!==T)&&(r.blendEquationSeparate(Lt[Q],Lt[ct]),v=Q,T=ct),(K!==w||pt!==y||mt!==E||lt!==x)&&(r.blendFuncSeparate(Ut[K],Ut[pt],Ut[mt],Ut[lt]),w=K,y=pt,E=mt,x=lt),(gt.equals(M)===!1||at!==P)&&(r.blendColor(gt.r,gt.g,gt.b,at),M.copy(gt),P=at),m=L,C=!1}function ne(L,Q){L.side===Wi?Pt(r.CULL_FACE):ut(r.CULL_FACE);let K=L.side===mn;Q&&(K=!K),J(K),L.blending===la&&L.transparent===!1?le(fs):le(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),s.setMask(L.colorWrite);let pt=L.stencilWrite;o.setTest(pt),pt&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),de(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ut(r.SAMPLE_ALPHA_TO_COVERAGE):Pt(r.SAMPLE_ALPHA_TO_COVERAGE)}function J(L){N!==L&&(L?r.frontFace(r.CW):r.frontFace(r.CCW),N=L)}function Yt(L){L!==ip?(ut(r.CULL_FACE),L!==D&&(L===Mu?r.cullFace(r.BACK):L===rp?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Pt(r.CULL_FACE),D=L}function ze(L){L!==B&&(O&&r.lineWidth(L),B=L)}function de(L,Q,K){L?(ut(r.POLYGON_OFFSET_FILL),(I!==Q||z!==K)&&(I=Q,z=K,a.getReversed()&&(Q=-Q,K=-K),r.polygonOffset(Q,K))):Pt(r.POLYGON_OFFSET_FILL)}function te(L){L?ut(r.SCISSOR_TEST):Pt(r.SCISSOR_TEST)}function we(L){L===void 0&&(L=r.TEXTURE0+V-1),R!==L&&(r.activeTexture(L),R=L)}function Ee(L,Q,K){K===void 0&&(R===null?K=r.TEXTURE0+V-1:K=R);let pt=et[K];pt===void 0&&(pt={type:void 0,texture:void 0},et[K]=pt),(pt.type!==L||pt.texture!==Q)&&(R!==K&&(r.activeTexture(K),R=K),r.bindTexture(L,Q||bt[L]),pt.type=L,pt.texture=Q)}function F(){let L=et[R];L!==void 0&&L.type!==void 0&&(r.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function he(){try{r.compressedTexImage2D(...arguments)}catch(L){Ht("WebGLState:",L)}}function ie(){try{r.compressedTexImage3D(...arguments)}catch(L){Ht("WebGLState:",L)}}function Vt(){try{r.texSubImage2D(...arguments)}catch(L){Ht("WebGLState:",L)}}function $(){try{r.texSubImage3D(...arguments)}catch(L){Ht("WebGLState:",L)}}function Ct(){try{r.compressedTexSubImage2D(...arguments)}catch(L){Ht("WebGLState:",L)}}function vt(){try{r.compressedTexSubImage3D(...arguments)}catch(L){Ht("WebGLState:",L)}}function Bt(){try{r.texStorage2D(...arguments)}catch(L){Ht("WebGLState:",L)}}function A(){try{r.texStorage3D(...arguments)}catch(L){Ht("WebGLState:",L)}}function S(){try{r.texImage2D(...arguments)}catch(L){Ht("WebGLState:",L)}}function k(){try{r.texImage3D(...arguments)}catch(L){Ht("WebGLState:",L)}}function ot(L){return d[L]!==void 0?d[L]:r.getParameter(L)}function st(L,Q){d[L]!==Q&&(r.pixelStorei(L,Q),d[L]=Q)}function dt(L){Z.equals(L)===!1&&(r.scissor(L.x,L.y,L.z,L.w),Z.copy(L))}function _t(L){ht.equals(L)===!1&&(r.viewport(L.x,L.y,L.z,L.w),ht.copy(L))}function W(L,Q){let K=c.get(Q);K===void 0&&(K=new WeakMap,c.set(Q,K));let pt=K.get(L);pt===void 0&&(pt=r.getUniformBlockIndex(Q,L.name),r.uniformBlockBinding(Q,pt,pt),K.set(L,pt))}function tt(L,Q,K){let ct=c.get(Q).get(L);l[ct]!==K&&(r.bindBufferBase(r.UNIFORM_BUFFER,ct,K),l[ct]=K)}function ft(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),h={},d={},R=null,et={},f={},l={},u=new WeakMap,g=[],_=null,p=!1,m=null,v=null,w=null,y=null,T=null,E=null,x=null,M=new zt(0,0,0),P=0,C=!1,N=null,D=null,B=null,I=null,z=null,Z.set(0,0,r.canvas.width,r.canvas.height),ht.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ut,disable:Pt,bindFramebuffer:ue,drawBuffers:At,useProgram:Gt,setBlending:le,setMaterial:ne,setFlipSided:J,setCullFace:Yt,setLineWidth:ze,setPolygonOffset:de,setScissorTest:te,activeTexture:we,bindTexture:Ee,unbindTexture:F,compressedTexImage2D:he,compressedTexImage3D:ie,texImage2D:S,texImage3D:k,pixelStorei:st,getParameter:ot,updateUBOMapping:W,uniformBlockBinding:tt,texStorage2D:Bt,texStorage3D:A,texSubImage2D:Vt,texSubImage3D:$,compressedTexSubImage2D:Ct,compressedTexSubImage3D:vt,scissor:dt,viewport:_t,reset:ft}}function VS(r,t,e,n,i,s,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new jt,h=new WeakMap,d=new Set,f,u=new WeakMap,g=new Set,_=new FinalizationRegistry(A=>g.delete(A)),p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(A,S){return p?new OffscreenCanvas(A,S):qa("canvas")}function v(A,S,k){let ot=1,st=Bt(A);if((st.width>k||st.height>k)&&(ot=k/Math.max(st.width,st.height)),ot<1)if(typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&A instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&A instanceof ImageBitmap||typeof VideoFrame!="undefined"&&A instanceof VideoFrame){let dt=Math.floor(ot*st.width),_t=Math.floor(ot*st.height);f===void 0&&(f=m(dt,_t));let W=S?m(dt,_t):f;return W.width=dt,W.height=_t,W.getContext("2d").drawImage(A,0,0,dt,_t),kt("WebGLRenderer: Texture has been resized from ("+st.width+"x"+st.height+") to ("+dt+"x"+_t+")."),W}else return"data"in A&&kt("WebGLRenderer: Image in DataTexture is too big ("+st.width+"x"+st.height+")."),A;return A}function w(A){return A.generateMipmaps}function y(A){r.generateMipmap(A)}function T(A){return A.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?r.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function E(A,S,k,ot,st,dt=!1){if(A!==null){if(r[A]!==void 0)return r[A];kt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let _t;ot&&(_t=t.get("EXT_texture_norm16"),_t||kt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let W=S;if(S===r.RED&&(k===r.FLOAT&&(W=r.R32F),k===r.HALF_FLOAT&&(W=r.R16F),k===r.UNSIGNED_BYTE&&(W=r.R8),k===r.UNSIGNED_SHORT&&_t&&(W=_t.R16_EXT),k===r.SHORT&&_t&&(W=_t.R16_SNORM_EXT)),S===r.RED_INTEGER&&(k===r.UNSIGNED_BYTE&&(W=r.R8UI),k===r.UNSIGNED_SHORT&&(W=r.R16UI),k===r.UNSIGNED_INT&&(W=r.R32UI),k===r.BYTE&&(W=r.R8I),k===r.SHORT&&(W=r.R16I),k===r.INT&&(W=r.R32I)),S===r.RG&&(k===r.FLOAT&&(W=r.RG32F),k===r.HALF_FLOAT&&(W=r.RG16F),k===r.UNSIGNED_BYTE&&(W=r.RG8),k===r.UNSIGNED_SHORT&&_t&&(W=_t.RG16_EXT),k===r.SHORT&&_t&&(W=_t.RG16_SNORM_EXT)),S===r.RG_INTEGER&&(k===r.UNSIGNED_BYTE&&(W=r.RG8UI),k===r.UNSIGNED_SHORT&&(W=r.RG16UI),k===r.UNSIGNED_INT&&(W=r.RG32UI),k===r.BYTE&&(W=r.RG8I),k===r.SHORT&&(W=r.RG16I),k===r.INT&&(W=r.RG32I)),S===r.RGB_INTEGER&&(k===r.UNSIGNED_BYTE&&(W=r.RGB8UI),k===r.UNSIGNED_SHORT&&(W=r.RGB16UI),k===r.UNSIGNED_INT&&(W=r.RGB32UI),k===r.BYTE&&(W=r.RGB8I),k===r.SHORT&&(W=r.RGB16I),k===r.INT&&(W=r.RGB32I)),S===r.RGBA_INTEGER&&(k===r.UNSIGNED_BYTE&&(W=r.RGBA8UI),k===r.UNSIGNED_SHORT&&(W=r.RGBA16UI),k===r.UNSIGNED_INT&&(W=r.RGBA32UI),k===r.BYTE&&(W=r.RGBA8I),k===r.SHORT&&(W=r.RGBA16I),k===r.INT&&(W=r.RGBA32I)),S===r.RGB&&(k===r.UNSIGNED_SHORT&&_t&&(W=_t.RGB16_EXT),k===r.SHORT&&_t&&(W=_t.RGB16_SNORM_EXT),k===r.UNSIGNED_INT_5_9_9_9_REV&&(W=r.RGB9_E5),k===r.UNSIGNED_INT_10F_11F_11F_REV&&(W=r.R11F_G11F_B10F)),S===r.RGBA){let tt=dt?Xa:ae.getTransfer(st);k===r.FLOAT&&(W=r.RGBA32F),k===r.HALF_FLOAT&&(W=r.RGBA16F),k===r.UNSIGNED_BYTE&&(W=tt===ge?r.SRGB8_ALPHA8:r.RGBA8),k===r.UNSIGNED_SHORT&&_t&&(W=_t.RGBA16_EXT),k===r.SHORT&&_t&&(W=_t.RGBA16_SNORM_EXT),k===r.UNSIGNED_SHORT_4_4_4_4&&(W=r.RGBA4),k===r.UNSIGNED_SHORT_5_5_5_1&&(W=r.RGB5_A1)}return(W===r.R16F||W===r.R32F||W===r.RG16F||W===r.RG32F||W===r.RGBA16F||W===r.RGBA32F)&&t.get("EXT_color_buffer_float"),W}function x(A,S){let k;return A?S===null||S===Ri||S===ms?k=r.DEPTH24_STENCIL8:S===pi?k=r.DEPTH32F_STENCIL8:S===ha&&(k=r.DEPTH24_STENCIL8,kt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Ri||S===ms?k=r.DEPTH_COMPONENT24:S===pi?k=r.DEPTH_COMPONENT32F:S===ha&&(k=r.DEPTH_COMPONENT16),k}function M(A,S){return w(A)===!0||A.isFramebufferTexture&&A.minFilter!==hn&&A.minFilter!==Un?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function P(A){let S=new WeakRef(A);n.get(A).__ref=S,g.add(S),_.register(A,S,S)}function C(A){let S=n.get(A).__ref;S!==void 0&&(g.delete(S),_.unregister(S))}function N(A){B(A.target)}function D(A){I(A.target)}function B(A){A.removeEventListener("dispose",N),C(A),V(A),A.isVideoTexture&&h.delete(A),A.isHTMLTexture&&d.delete(A)}function I(A){A.removeEventListener("dispose",D),C(A),j(A)}function z(){for(let A of g){let S=A.deref();S!==void 0&&(S.isRenderTarget===!0?I(S):B(S))}g.clear(),d.clear()}function V(A){let S=n.get(A);if(S.__webglInit===void 0)return;let k=A.source,ot=u.get(k);if(ot){let st=ot[S.__cacheKey];st.usedTimes--,st.usedTimes===0&&O(A),Object.keys(ot).length===0&&u.delete(k)}n.remove(A)}function O(A){let S=n.get(A);r.deleteTexture(S.__webglTexture);let k=A.source,ot=u.get(k);delete ot[S.__cacheKey],a.memory.textures--}function j(A){let S=n.get(A);S.__depthDisposeCallback&&S.__depthDisposeCallback();let k=A.depthTexture;if(k&&k.renderTarget===A&&B(k),A.isWebGLCubeRenderTarget)for(let st=0;st<6;st++){if(Array.isArray(S.__webglFramebuffer[st]))for(let dt=0;dt<S.__webglFramebuffer[st].length;dt++)r.deleteFramebuffer(S.__webglFramebuffer[st][dt]);else r.deleteFramebuffer(S.__webglFramebuffer[st]);S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer[st])}else{if(Array.isArray(S.__webglFramebuffer))for(let st=0;st<S.__webglFramebuffer.length;st++)r.deleteFramebuffer(S.__webglFramebuffer[st]);else r.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&r.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let st=0;st<S.__webglColorRenderbuffer.length;st++)S.__webglColorRenderbuffer[st]&&r.deleteRenderbuffer(S.__webglColorRenderbuffer[st]);S.__webglDepthRenderbuffer&&r.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let ot=A.textures;for(let st=0,dt=ot.length;st<dt;st++){let _t=n.get(ot[st]);_t.__webglTexture&&(r.deleteTexture(_t.__webglTexture),a.memory.textures--),n.remove(ot[st])}n.remove(A)}let H=0;function R(){H=0}function et(){return H}function Mt(A){H=A}function Ft(){let A=H;return A>=i.maxTextures&&kt("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+i.maxTextures),H+=1,A}function Z(A){let S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.mipmapsAutoUpdate),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function ht(A,S){let k=n.get(A);if(A.isVideoTexture&&Ct(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&k.__version!==A.version){let ot=A.image;if(ot===null)kt("WebGLRenderer: Texture marked for update but no image data found.");else if(ot.complete===!1)kt("WebGLRenderer: Texture marked for update but image is incomplete");else{ne(k,A,S);return}}else A.isExternalTexture&&(k.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(r.TEXTURE_2D,k.__webglTexture,r.TEXTURE0+S)}function rt(A,S){let k=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){ne(k,A,S);return}else A.isExternalTexture&&(k.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(r.TEXTURE_2D_ARRAY,k.__webglTexture,r.TEXTURE0+S)}function bt(A,S){let k=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){ne(k,A,S);return}e.bindTexture(r.TEXTURE_3D,k.__webglTexture,r.TEXTURE0+S)}function ut(A,S){let k=n.get(A);if(A.version>0&&k.__version!==A.version){J(k,A,S);return}e.bindTexture(r.TEXTURE_CUBE_MAP,k.__webglTexture,r.TEXTURE0+S)}let Pt={[ta]:r.REPEAT,[Ui]:r.CLAMP_TO_EDGE,[kl]:r.MIRRORED_REPEAT},ue={[hn]:r.NEAREST,[Ep]:r.NEAREST_MIPMAP_NEAREST,[go]:r.NEAREST_MIPMAP_LINEAR,[Un]:r.LINEAR,[fc]:r.LINEAR_MIPMAP_NEAREST,[fr]:r.LINEAR_MIPMAP_LINEAR},At={[Pp]:r.NEVER,[Hu]:r.ALWAYS,[Ip]:r.LESS,[Gu]:r.LEQUAL,[Lp]:r.EQUAL,[Vu]:r.GEQUAL,[Dp]:r.GREATER,[Np]:r.NOTEQUAL};function Gt(A,S){if(S.type===pi&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Un||S.magFilter===fc||S.magFilter===go||S.magFilter===fr||S.minFilter===Un||S.minFilter===fc||S.minFilter===go||S.minFilter===fr)&&kt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(A,r.TEXTURE_WRAP_S,Pt[S.wrapS]),r.texParameteri(A,r.TEXTURE_WRAP_T,Pt[S.wrapT]),(A===r.TEXTURE_3D||A===r.TEXTURE_2D_ARRAY)&&r.texParameteri(A,r.TEXTURE_WRAP_R,Pt[S.wrapR]),r.texParameteri(A,r.TEXTURE_MAG_FILTER,ue[S.magFilter]),r.texParameteri(A,r.TEXTURE_MIN_FILTER,ue[S.minFilter]),S.compareFunction&&(r.texParameteri(A,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(A,r.TEXTURE_COMPARE_FUNC,At[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===hn||S.minFilter!==go&&S.minFilter!==fr||S.type===pi&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let k=t.get("EXT_texture_filter_anisotropic");r.texParameterf(A,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Lt(A,S){let k=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",N),P(S));let ot=S.source,st=u.get(ot);st===void 0&&(st={},u.set(ot,st));let dt=Z(S);if(dt!==A.__cacheKey){st[dt]===void 0&&(st[dt]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,k=!0),st[dt].usedTimes++;let _t=st[A.__cacheKey];_t!==void 0&&(st[A.__cacheKey].usedTimes--,_t.usedTimes===0&&O(S)),A.__cacheKey=dt,A.__webglTexture=st[dt].texture}return k}function Ut(A,S,k){return Math.floor(Math.floor(A/k)/S)}function le(A,S,k,ot){let dt=A.updateRanges;if(dt.length===0)e.texSubImage2D(r.TEXTURE_2D,0,0,0,S.width,S.height,k,ot,S.data);else{dt.sort((L,Q)=>L.start-Q.start);let _t=0;for(let L=1;L<dt.length;L++){let Q=dt[_t],K=dt[L],pt=Q.start+Q.count,ct=Ut(K.start,S.width,4),mt=Ut(Q.start,S.width,4);K.start<=pt+1&&ct===mt&&Ut(K.start+K.count-1,S.width,4)===ct?Q.count=Math.max(Q.count,K.start+K.count-Q.start):(++_t,dt[_t]=K)}dt.length=_t+1;let W=e.getParameter(r.UNPACK_ROW_LENGTH),tt=e.getParameter(r.UNPACK_SKIP_PIXELS),ft=e.getParameter(r.UNPACK_SKIP_ROWS);e.pixelStorei(r.UNPACK_ROW_LENGTH,S.width);for(let L=0,Q=dt.length;L<Q;L++){let K=dt[L],pt=Math.floor(K.start/4),ct=Math.ceil(K.count/4),mt=pt%S.width,lt=Math.floor(pt/S.width),gt=ct,at=1;e.pixelStorei(r.UNPACK_SKIP_PIXELS,mt),e.pixelStorei(r.UNPACK_SKIP_ROWS,lt),e.texSubImage2D(r.TEXTURE_2D,0,mt,lt,gt,at,k,ot,S.data)}A.clearUpdateRanges(),e.pixelStorei(r.UNPACK_ROW_LENGTH,W),e.pixelStorei(r.UNPACK_SKIP_PIXELS,tt),e.pixelStorei(r.UNPACK_SKIP_ROWS,ft)}}function ne(A,S,k){let ot=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ot=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ot=r.TEXTURE_3D);let st=Lt(A,S),dt=S.source;e.bindTexture(ot,A.__webglTexture,r.TEXTURE0+k);let _t=n.get(dt);if(dt.version!==_t.__version||st===!0){if(e.activeTexture(r.TEXTURE0+k),(typeof ImageBitmap!="undefined"&&S.image instanceof ImageBitmap)===!1){let at=ae.getPrimaries(ae.workingColorSpace),nt=S.colorSpace===pr?null:ae.getPrimaries(S.colorSpace),xt=S.colorSpace===pr||at===nt?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt)}e.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment);let tt=v(S.image,!1,i.maxTextureSize);tt=vt(S,tt);let ft=s.convert(S.format,S.colorSpace),L=s.convert(S.type),Q=E(S.internalFormat,ft,L,S.normalized,S.colorSpace,S.isVideoTexture);Gt(ot,S);let K,pt=S.mipmaps,ct=S.isVideoTexture!==!0,mt=_t.__version===void 0||st===!0,lt=dt.dataReady,gt=M(S,tt);if(S.isDepthTexture)Q=x(S.format===dr,S.type),mt&&(ct?e.texStorage2D(r.TEXTURE_2D,1,Q,tt.width,tt.height):e.texImage2D(r.TEXTURE_2D,0,Q,tt.width,tt.height,0,ft,L,null));else if(S.isDataTexture)if(pt.length>0){ct&&mt&&e.texStorage2D(r.TEXTURE_2D,gt,Q,pt[0].width,pt[0].height);for(let at=0,nt=pt.length;at<nt;at++)K=pt[at],ct?lt&&e.texSubImage2D(r.TEXTURE_2D,at,0,0,K.width,K.height,ft,L,K.data):e.texImage2D(r.TEXTURE_2D,at,Q,K.width,K.height,0,ft,L,K.data);S.generateMipmaps=!1}else ct?(mt&&e.texStorage2D(r.TEXTURE_2D,gt,Q,tt.width,tt.height),lt&&le(S,tt,ft,L)):e.texImage2D(r.TEXTURE_2D,0,Q,tt.width,tt.height,0,ft,L,tt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){ct&&mt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,gt,Q,pt[0].width,pt[0].height,tt.depth);for(let at=0,nt=pt.length;at<nt;at++)if(K=pt[at],S.format!==Ii)if(ft!==null)if(ct){if(lt)if(S.layerUpdates.size>0){let xt=$u(K.width,K.height,S.format,S.type);for(let it of S.layerUpdates){let wt=K.data.subarray(it*xt/K.data.BYTES_PER_ELEMENT,(it+1)*xt/K.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,at,0,0,it,K.width,K.height,1,ft,wt)}}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,at,0,0,0,K.width,K.height,tt.depth,ft,K.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,at,Q,K.width,K.height,tt.depth,0,K.data,0,0);else kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ct?lt&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,at,0,0,0,K.width,K.height,tt.depth,ft,L,K.data):e.texImage3D(r.TEXTURE_2D_ARRAY,at,Q,K.width,K.height,tt.depth,0,ft,L,K.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{ct&&mt&&e.texStorage2D(r.TEXTURE_2D,gt,Q,pt[0].width,pt[0].height);for(let at=0,nt=pt.length;at<nt;at++)K=pt[at],S.format!==Ii?ft!==null?ct?lt&&e.compressedTexSubImage2D(r.TEXTURE_2D,at,0,0,K.width,K.height,ft,K.data):e.compressedTexImage2D(r.TEXTURE_2D,at,Q,K.width,K.height,0,K.data):kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ct?lt&&e.texSubImage2D(r.TEXTURE_2D,at,0,0,K.width,K.height,ft,L,K.data):e.texImage2D(r.TEXTURE_2D,at,Q,K.width,K.height,0,ft,L,K.data)}else if(S.isDataArrayTexture)if(ct){if(mt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,gt,Q,tt.width,tt.height,tt.depth),lt)if(S.layerUpdates.size>0){let at=$u(tt.width,tt.height,S.format,S.type);for(let nt of S.layerUpdates){let xt=tt.data.subarray(nt*at/tt.data.BYTES_PER_ELEMENT,(nt+1)*at/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,nt,tt.width,tt.height,1,ft,L,xt)}S.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,ft,L,tt.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Q,tt.width,tt.height,tt.depth,0,ft,L,tt.data);else if(S.isData3DTexture)ct?(mt&&e.texStorage3D(r.TEXTURE_3D,gt,Q,tt.width,tt.height,tt.depth),lt&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,ft,L,tt.data)):e.texImage3D(r.TEXTURE_3D,0,Q,tt.width,tt.height,tt.depth,0,ft,L,tt.data);else if(S.isFramebufferTexture){if(mt)if(ct)e.texStorage2D(r.TEXTURE_2D,gt,Q,tt.width,tt.height);else{let at=tt.width,nt=tt.height;for(let xt=0;xt<gt;xt++)e.texImage2D(r.TEXTURE_2D,xt,Q,at,nt,0,ft,L,null),at>>=1,nt>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in r){let at=r.canvas;if(at.hasAttribute("layoutsubtree")||at.setAttribute("layoutsubtree","true"),tt.parentNode!==at){at.appendChild(tt),d.add(S),at.onpaint=nt=>{let xt=nt.changedElements;for(let it of d)xt.includes(it.image)&&(it.needsUpdate=!0)},at.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,tt);else{let xt=r.RGBA,it=r.RGBA,wt=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,xt,it,wt,tt)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(pt.length>0){if(ct&&mt){let at=Bt(pt[0]);e.texStorage2D(r.TEXTURE_2D,gt,Q,at.width,at.height)}for(let at=0,nt=pt.length;at<nt;at++)K=pt[at],ct?lt&&e.texSubImage2D(r.TEXTURE_2D,at,0,0,ft,L,K):e.texImage2D(r.TEXTURE_2D,at,Q,ft,L,K);S.generateMipmaps=!1}else if(ct){if(mt){let at=Bt(tt);e.texStorage2D(r.TEXTURE_2D,gt,Q,at.width,at.height)}lt&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,ft,L,tt)}else e.texImage2D(r.TEXTURE_2D,0,Q,ft,L,tt);w(S)&&S.mipmapsAutoUpdate===!0&&y(ot),_t.__version=dt.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function J(A,S,k){if(S.image.length!==6)return;let ot=Lt(A,S),st=S.source;e.bindTexture(r.TEXTURE_CUBE_MAP,A.__webglTexture,r.TEXTURE0+k);let dt=n.get(st);if(st.version!==dt.__version||ot===!0){e.activeTexture(r.TEXTURE0+k);let _t=ae.getPrimaries(ae.workingColorSpace),W=S.colorSpace===pr?null:ae.getPrimaries(S.colorSpace),tt=S.colorSpace===pr||_t===W?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);let ft=S.isCompressedTexture||S.image[0].isCompressedTexture,L=S.image[0]&&S.image[0].isDataTexture,Q=[];for(let it=0;it<6;it++)!ft&&!L?Q[it]=v(S.image[it],!0,i.maxCubemapSize):Q[it]=L?S.image[it].image:S.image[it],Q[it]=vt(S,Q[it]);let K=Q[0],pt=s.convert(S.format,S.colorSpace),ct=s.convert(S.type),mt=E(S.internalFormat,pt,ct,S.normalized,S.colorSpace),lt=S.isVideoTexture!==!0,gt=dt.__version===void 0||ot===!0,at=st.dataReady,nt=M(S,K);Gt(r.TEXTURE_CUBE_MAP,S);let xt;if(S.isDepthTexture){if(mt=x(S.format===dr,S.type),gt)if(lt)e.texStorage2D(r.TEXTURE_CUBE_MAP,1,mt,K.width,K.height);else for(let it=0;it<6;it++)e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,mt,K.width,K.height,0,pt,ct,null)}else if(ft){lt&&gt&&e.texStorage2D(r.TEXTURE_CUBE_MAP,nt,mt,K.width,K.height);for(let it=0;it<6;it++){xt=Q[it].mipmaps;for(let wt=0;wt<xt.length;wt++){let ee=xt[wt];S.format!==Ii?pt!==null?lt?at&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,wt,0,0,ee.width,ee.height,pt,ee.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,wt,mt,ee.width,ee.height,0,ee.data):kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):lt?at&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,wt,0,0,ee.width,ee.height,pt,ct,ee.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,wt,mt,ee.width,ee.height,0,pt,ct,ee.data)}}}else{if(xt=S.mipmaps,lt&&gt){xt.length>0&&nt++;let it=Bt(Q[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,nt,mt,it.width,it.height)}for(let it=0;it<6;it++)if(L){lt?at&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Q[it].width,Q[it].height,pt,ct,Q[it].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,mt,Q[it].width,Q[it].height,0,pt,ct,Q[it].data);for(let wt=0;wt<xt.length;wt++){let Xt=xt[wt].image[it].image;lt?at&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,wt+1,0,0,Xt.width,Xt.height,pt,ct,Xt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,wt+1,mt,Xt.width,Xt.height,0,pt,ct,Xt.data)}}else{lt?at&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,pt,ct,Q[it]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,mt,pt,ct,Q[it]);for(let wt=0;wt<xt.length;wt++){let ee=xt[wt];lt?at&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,wt+1,0,0,pt,ct,ee.image[it]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,wt+1,mt,pt,ct,ee.image[it])}}}w(S)&&S.mipmapsAutoUpdate===!0&&y(r.TEXTURE_CUBE_MAP),dt.__version=st.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function Yt(A,S,k,ot,st,dt){let _t=s.convert(k.format,k.colorSpace),W=s.convert(k.type),tt=E(k.internalFormat,_t,W,k.normalized,k.colorSpace),ft=n.get(S),L=n.get(k);if(L.__renderTarget=S,!ft.__hasExternalTextures){let Q=Math.max(1,S.width>>dt),K=Math.max(1,S.height>>dt);st===r.TEXTURE_3D||st===r.TEXTURE_2D_ARRAY?e.texImage3D(st,dt,tt,Q,K,S.depth,0,_t,W,null):e.texImage2D(st,dt,tt,Q,K,0,_t,W,null)}e.bindFramebuffer(r.FRAMEBUFFER,A),$(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ot,st,L.__webglTexture,0,Vt(S)):(st===r.TEXTURE_2D||st>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ot,st,L.__webglTexture,dt),e.bindFramebuffer(r.FRAMEBUFFER,null)}function ze(A,S,k){if(r.bindRenderbuffer(r.RENDERBUFFER,A),S.depthBuffer){let ot=S.depthTexture,st=ot&&ot.isDepthTexture?ot.type:null,dt=x(S.stencilBuffer,st),_t=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;$(S)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Vt(S),dt,S.width,S.height):k?r.renderbufferStorageMultisample(r.RENDERBUFFER,Vt(S),dt,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,dt,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,_t,r.RENDERBUFFER,A)}else{let ot=S.textures;for(let st=0;st<ot.length;st++){let dt=ot[st],_t=s.convert(dt.format,dt.colorSpace),W=s.convert(dt.type),tt=E(dt.internalFormat,_t,W,dt.normalized,dt.colorSpace);$(S)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Vt(S),tt,S.width,S.height):k?r.renderbufferStorageMultisample(r.RENDERBUFFER,Vt(S),tt,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,tt,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function de(A,S,k){let ot=S.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(r.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let st=n.get(S.depthTexture);st.__renderTarget=S;let dt=ot?S.depthTexture.image[0]:S.depthTexture.image;(!st.__webglTexture||dt.width!==S.width||dt.height!==S.height)&&(dt.width=S.width,dt.height=S.height,S.depthTexture.needsUpdate=!0),ot?ut(S.depthTexture,0):ht(S.depthTexture,0);let _t=st.__webglTexture,W=Vt(S),tt=ot?r.TEXTURE_CUBE_MAP_POSITIVE_X+k:r.TEXTURE_2D,ft=S.depthTexture.format===dr?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(S.depthTexture.format===cr)$(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ft,tt,_t,0,W):r.framebufferTexture2D(r.FRAMEBUFFER,ft,tt,_t,0);else if(S.depthTexture.format===dr)$(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ft,tt,_t,0,W):r.framebufferTexture2D(r.FRAMEBUFFER,ft,tt,_t,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function te(A){let S=n.get(A),k=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){let ot=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),ot){let st=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,ot.removeEventListener("dispose",st)};ot.addEventListener("dispose",st),S.__depthDisposeCallback=st}S.__boundDepthTexture=ot}if(A.depthTexture&&!S.__autoAllocateDepthBuffer)if(k)for(let ot=0;ot<6;ot++)de(S.__webglFramebuffer[ot],A,ot);else A.texture.mipmaps.length>0?de(S.__webglFramebuffer[0],A,0):de(S.__webglFramebuffer,A,0);else if(k){S.__webglDepthbuffer=[];for(let ot=0;ot<6;ot++)if(e.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[ot]),S.__webglDepthbuffer[ot]===void 0)S.__webglDepthbuffer[ot]=r.createRenderbuffer(),ze(S.__webglDepthbuffer[ot],A,!1);else{let st=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,dt=S.__webglDepthbuffer[ot];r.bindRenderbuffer(r.RENDERBUFFER,dt),r.framebufferRenderbuffer(r.FRAMEBUFFER,st,r.RENDERBUFFER,dt)}}else if(A.texture.mipmaps.length>0?e.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=r.createRenderbuffer(),ze(S.__webglDepthbuffer,A,!1);else{let st=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,dt=S.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,dt),r.framebufferRenderbuffer(r.FRAMEBUFFER,st,r.RENDERBUFFER,dt)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function we(A,S,k){let ot=n.get(A);S!==void 0&&Yt(ot.__webglFramebuffer,A,A.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),k!==void 0&&te(A)}function Ee(A){let S=A.texture,k=n.get(A),ot=n.get(S);A.addEventListener("dispose",D),P(A);let st=A.textures,dt=A.isWebGLCubeRenderTarget===!0,_t=st.length>1;if(_t||(ot.__webglTexture===void 0&&(ot.__webglTexture=r.createTexture()),ot.__version=S.version,a.memory.textures++),dt){k.__webglFramebuffer=[];for(let W=0;W<6;W++)if(S.mipmaps.length>0){k.__webglFramebuffer[W]=[];for(let tt=0;tt<S.mipmaps.length;tt++)k.__webglFramebuffer[W][tt]=r.createFramebuffer()}else k.__webglFramebuffer[W]=r.createFramebuffer()}else{if(S.mipmaps.length>0){k.__webglFramebuffer=[];for(let W=0;W<S.mipmaps.length;W++)k.__webglFramebuffer[W]=r.createFramebuffer()}else k.__webglFramebuffer=r.createFramebuffer();if(_t)for(let W=0,tt=st.length;W<tt;W++){let ft=n.get(st[W]);ft.__webglTexture===void 0&&(ft.__webglTexture=r.createTexture(),a.memory.textures++)}if(A.samples>0&&$(A)===!1){k.__webglMultisampledFramebuffer=r.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let W=0;W<st.length;W++){let tt=st[W];k.__webglColorRenderbuffer[W]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,k.__webglColorRenderbuffer[W]);let ft=s.convert(tt.format,tt.colorSpace),L=s.convert(tt.type),Q=E(tt.internalFormat,ft,L,tt.normalized,tt.colorSpace,A.isXRRenderTarget===!0),K=Vt(A);r.renderbufferStorageMultisample(r.RENDERBUFFER,K,Q,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+W,r.RENDERBUFFER,k.__webglColorRenderbuffer[W])}r.bindRenderbuffer(r.RENDERBUFFER,null),A.depthBuffer&&(k.__webglDepthRenderbuffer=r.createRenderbuffer(),ze(k.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(dt){e.bindTexture(r.TEXTURE_CUBE_MAP,ot.__webglTexture),Gt(r.TEXTURE_CUBE_MAP,S);for(let W=0;W<6;W++)if(S.mipmaps.length>0)for(let tt=0;tt<S.mipmaps.length;tt++)Yt(k.__webglFramebuffer[W][tt],A,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+W,tt);else Yt(k.__webglFramebuffer[W],A,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+W,0);w(S)?y(r.TEXTURE_CUBE_MAP):S.mipmaps.length>0&&r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),e.unbindTexture()}else if(_t){for(let W=0,tt=st.length;W<tt;W++){let ft=st[W],L=n.get(ft),Q=r.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Q=A.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(Q,L.__webglTexture),Gt(Q,ft),Yt(k.__webglFramebuffer,A,ft,r.COLOR_ATTACHMENT0+W,Q,0),w(ft)&&y(Q)}e.unbindTexture()}else{let W=r.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(W=A.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(W,ot.__webglTexture),Gt(W,S),S.mipmaps.length>0)for(let tt=0;tt<S.mipmaps.length;tt++)Yt(k.__webglFramebuffer[tt],A,S,r.COLOR_ATTACHMENT0,W,tt);else Yt(k.__webglFramebuffer,A,S,r.COLOR_ATTACHMENT0,W,0);w(S)?y(W):S.mipmaps.length>0&&r.texParameteri(W,r.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),e.unbindTexture()}A.depthBuffer&&te(A)}function F(A){let S=A.textures;for(let k=0,ot=S.length;k<ot;k++){let st=S[k];if(w(st)&&st.mipmapsAutoUpdate===!0){let dt=T(A),_t=n.get(st).__webglTexture;e.bindTexture(dt,_t),y(dt),e.unbindTexture()}}}let he=[];function ie(A){if(A.samples>0){if($(A)===!1){let S=A.textures,k=A.width,ot=A.height,st=r.COLOR_BUFFER_BIT,dt=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,_t=n.get(A),W=S.length>1;if(W)for(let ft=0;ft<S.length;ft++)e.bindFramebuffer(r.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ft,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,_t.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ft,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,_t.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?e.bindFramebuffer(r.DRAW_FRAMEBUFFER,_t.__webglFramebuffer[0]):e.bindFramebuffer(r.DRAW_FRAMEBUFFER,_t.__webglFramebuffer);for(let ft=0;ft<S.length;ft++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(st|=r.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(st|=r.STENCIL_BUFFER_BIT)),W){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,_t.__webglColorRenderbuffer[ft]);let L=n.get(S[ft]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,L,0)}r.blitFramebuffer(0,0,k,ot,0,0,k,ot,st,r.NEAREST),l===!0&&(he.length=0,he.push(r.COLOR_ATTACHMENT0+ft),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&he.push(dt),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,he))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),W)for(let ft=0;ft<S.length;ft++){e.bindFramebuffer(r.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ft,r.RENDERBUFFER,_t.__webglColorRenderbuffer[ft]);let L=n.get(S[ft]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,_t.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ft,r.TEXTURE_2D,L,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,_t.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){let S=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[S])}}}function Vt(A){return Math.min(i.maxSamples,A.samples)}function $(A){let S=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ct(A){let S=a.render.frame;h.get(A)!==S&&(h.set(A,S),A.update())}function vt(A,S){let k=A.colorSpace,ot=A.format,st=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||k!==Wa&&k!==pr&&(ae.getTransfer(k)===ge?(ot!==Ii||st!==Xn)&&kt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ht("WebGLTextures: Unsupported texture color space:",k)),S}function Bt(A){return typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame!="undefined"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=Ft,this.resetTextureUnits=R,this.getTextureUnits=et,this.setTextureUnits=Mt,this.setTexture2D=ht,this.setTexture2DArray=rt,this.setTexture3D=bt,this.setTextureCube=ut,this.rebindTextures=we,this.setupRenderTarget=Ee,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=ie,this.setupDepthRenderbuffer=te,this.setupFrameBufferTexture=Yt,this.useMultisampledRTT=$,this.dispose=z}function HS(r,t){function e(n,i=pr){let s,a=ae.getTransfer(i);if(n===Xn)return r.UNSIGNED_BYTE;if(n===pc)return r.UNSIGNED_SHORT_4_4_4_4;if(n===mc)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Ou)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Bu)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===Uu)return r.BYTE;if(n===Fu)return r.SHORT;if(n===ha)return r.UNSIGNED_SHORT;if(n===dc)return r.INT;if(n===Ri)return r.UNSIGNED_INT;if(n===pi)return r.FLOAT;if(n===Pi)return r.HALF_FLOAT;if(n===zu)return r.ALPHA;if(n===ku)return r.RGB;if(n===Ii)return r.RGBA;if(n===cr)return r.DEPTH_COMPONENT;if(n===dr)return r.DEPTH_STENCIL;if(n===gc)return r.RED;if(n===_c)return r.RED_INTEGER;if(n===zr)return r.RG;if(n===xc)return r.RG_INTEGER;if(n===vc)return r.RGBA_INTEGER;if(n===_o||n===xo||n===vo||n===yo)if(a===ge)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===_o)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===xo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===vo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===yo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===_o)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===xo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===vo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===yo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===yc||n===Sc||n===Mc||n===bc)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===yc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Sc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Mc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===bc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Tc||n===wc||n===Ec||n===Ac||n===Cc||n===So||n===Rc)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Tc||n===wc)return a===ge?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ec)return a===ge?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ac)return s.COMPRESSED_R11_EAC;if(n===Cc)return s.COMPRESSED_SIGNED_R11_EAC;if(n===So)return s.COMPRESSED_RG11_EAC;if(n===Rc)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Pc||n===Ic||n===Lc||n===Dc||n===Nc||n===Uc||n===Fc||n===Oc||n===Bc||n===zc||n===kc||n===Gc||n===Vc||n===Hc)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Pc)return a===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ic)return a===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Lc)return a===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Dc)return a===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Nc)return a===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Uc)return a===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Fc)return a===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Oc)return a===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Bc)return a===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===zc)return a===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===kc)return a===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Gc)return a===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Vc)return a===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Hc)return a===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Wc||n===Xc||n===qc)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Wc)return a===ge?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Xc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===qc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Yc||n===Zc||n===Mo||n===Jc)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Yc)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Zc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Mo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Jc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ms?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}function YS(r,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Yu(r)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,v,w,y){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?s(p,m):m.isMeshLambertMaterial?(s(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(s(p,m),d(p,m)):m.isMeshPhongMaterial?(s(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(s(p,m),f(p,m),m.isMeshPhysicalMaterial&&u(p,m,y)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),_(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,v,w):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===mn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===mn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let v=t.get(m),w=v.envMap,y=v.envMapRotation;w&&(p.envMap.value=w,p.envMapRotation.value.setFromMatrix4(qS.makeRotationFromEuler(y)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Mm),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,v,w){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*v,p.scale.value=w*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function u(p,m,v){p.ior.value=m.ior,m.diffuseRoughness>0&&(p.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=m.diffuseRoughnessMap,e(m.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===mn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){let v=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function ZS(r,t,e,n){let i={},s={};function a(v,w){let y=w.program;n.uniformBlockBinding(v,y,i[v.id])}function o(v,w){let y=i[v.id];y===void 0&&(g(v),y=l(v),i[v.id]=y,v.addEventListener("dispose",p));let T=w.program;n.updateUBOMapping(v,T);let E=t.render.frame;s[v.id]!==E&&(c(v),s[v.id]=E)}function l(v){let w=r.createBuffer(),y=v.__size,T=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,w),r.bufferData(r.UNIFORM_BUFFER,y,T),r.bindBuffer(r.UNIFORM_BUFFER,null),w}function c(v){let w=i[v.id],y=v.uniforms,T=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,w);for(let E=0,x=y.length;E<x;E++){let M=y[E];if(Array.isArray(M))for(let P=0,C=M.length;P<C;P++)h(M[P],E,P,T);else h(M,E,0,T)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function h(v,w,y,T){if(f(v,w,y,T)===!0){let E=v.__offset,x=v.value;if(Array.isArray(x)){let M=0;for(let P=0;P<x.length;P++){let C=x[P],N=_(C,!0);d(C,v.__data,M),M+=N.storage/Float32Array.BYTES_PER_ELEMENT}}else d(x,v.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,E,v.__data)}}function d(v,w,y){typeof v=="number"||typeof v=="boolean"?w[y]=v:v.isMatrix3?(w[y]=v.elements[0],w[y+1]=v.elements[1],w[y+2]=v.elements[2],w[y+3]=0,w[y+4]=v.elements[3],w[y+5]=v.elements[4],w[y+6]=v.elements[5],w[y+7]=0,w[y+8]=v.elements[6],w[y+9]=v.elements[7],w[y+10]=v.elements[8],w[y+11]=0):ArrayBuffer.isView(v)?w.set(v.subarray(0,w.length-y),y):v.toArray(w,y)}function f(v,w,y,T){let E=v.value,x=w+"_"+y;if(Array.isArray(E)){T[x]===void 0&&(T[x]=[]);let M=T[x],P=!1;for(let C=0;C<E.length;C++)u(E[C],M,C)===!0&&(P=!0);return P}return u(E,T,x)}function u(v,w,y){if(w[y]===void 0)return typeof v=="number"||typeof v=="boolean"?w[y]=v:ArrayBuffer.isView(v)?w[y]=v.slice():w[y]=v.clone(),!0;{let T=w[y];if(typeof v=="number"||typeof v=="boolean"){if(T!==v)return w[y]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(T.equals(v)===!1)return T.copy(v),!0}}return!1}function g(v){let w=v.uniforms,y=0,T=16;for(let x=0,M=w.length;x<M;x++){let P=Array.isArray(w[x])?w[x]:[w[x]];for(let C=0,N=P.length;C<N;C++){let D=P[C],B=Array.isArray(D.value)?D.value:[D.value],I=Array.isArray(w[x])||Array.isArray(D.value),z=y;for(let O=0,j=B.length;O<j;O++){let H=B[O],R=_(H,I),et=y%T,Mt=et%R.boundary,Ft=et+Mt;y+=Mt,Ft!==0&&T-Ft<R.storage&&(y+=T-Ft),O===0&&(z=y),y+=R.storage}let V=D.type==="int"?Int32Array:D.type==="uint"?Uint32Array:Float32Array;D.__data=new V((y-z)/Float32Array.BYTES_PER_ELEMENT),D.__offset=z}}let E=y%T;return E>0&&(y+=T-E),v.__size=y,v.__cache={},this}function _(v,w){let y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=16,y.storage=48):v.isMatrix4?(y.boundary=16,y.storage=64):v.isTexture?kt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(y.boundary=16,y.storage=v.byteLength):kt("WebGLRenderer: Unsupported uniform value type.",v),w===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function p(v){let w=v.target;w.removeEventListener("dispose",p),r.deleteBuffer(i[w.id]),delete i[w.id],delete s[w.id]}function m(){for(let v in i)r.deleteBuffer(i[v]);i={},s={}}return{bind:a,update:o,dispose:m}}function $S(){return qi===null&&(qi=new Ka(JS,16,16,zr,Pi),qi.name="DFG_LUT",qi.minFilter=Un,qi.magFilter=Un,qi.wrapS=Ui,qi.wrapT=Ui,qi.generateMipmaps=!1,qi.needsUpdate=!0),qi}var d0,p0,m0,g0,_0,x0,v0,y0,S0,M0,b0,T0,w0,E0,A0,C0,R0,P0,I0,L0,D0,N0,U0,F0,O0,B0,z0,k0,G0,V0,H0,W0,X0,q0,Y0,Z0,J0,$0,K0,Q0,j0,tx,ex,nx,ix,rx,sx,ax,ox,lx,cx,hx,ux,fx,dx,px,mx,gx,_x,xx,vx,yx,Sx,Mx,bx,Tx,wx,Ex,Ax,Cx,Rx,Px,Ix,Lx,Dx,Nx,Ux,Fx,Ox,Bx,zx,kx,Gx,Vx,Hx,Wx,Xx,qx,Yx,Zx,Jx,$x,Kx,Qx,jx,tv,ev,nv,iv,rv,sv,av,ov,lv,cv,hv,uv,fv,dv,pv,mv,gv,_v,xv,vv,yv,Sv,Mv,bv,Tv,wv,Ev,Av,Cv,Rv,Pv,Iv,Lv,Dv,Nv,Uv,Fv,Ov,Bv,zv,kv,Gv,Vv,Hv,Wv,Xv,Zt,Tt,Yi,$c,qv,dm,Ao,Xp,Qv,jv,pm,mm,ty,ey,ny,fa,dy,gm,_m,xm,vm,ym,Sm,Jp,$p,Kp,Qp,jp,af,of,lf,rf,ua,nS,iS,nm,oS,Kc,dS,mS,_S,vS,SS,TS,hf,uf,LS,FS,OS,BS,zS,um,wo,sf,WS,XS,ff,df,qS,Mm,JS,qi,Qc,eh=nr(()=>{nf();nf();d0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,p0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,m0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,g0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,x0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,v0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,y0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,S0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,M0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,b0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,T0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,w0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,E0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,A0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,C0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,R0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,P0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,I0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,L0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,D0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,N0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,U0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,F0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,O0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,B0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,z0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,k0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,G0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,V0="gl_FragColor = linearToOutputTexel( gl_FragColor );",H0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,W0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,X0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,q0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Y0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Z0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,J0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,K0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Q0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,j0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,tx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ex=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,nx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ix=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,rx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,sx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ax=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ox=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,hx=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ux=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,fx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,dx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,px=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,mx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_x=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Mx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Tx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ex=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ax=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Rx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Px=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ix=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Lx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Ux=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Fx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ox=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Bx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Gx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Vx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Zx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Jx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,$x=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Kx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Qx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,tv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ev=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,nv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,iv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,av=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ov=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,lv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,cv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,hv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,uv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,fv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mv=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_v=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,vv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,yv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Sv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Mv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ev=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Av=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Iv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Dv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Nv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Uv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ov=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Gv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Vv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Wv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Xv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Zt={alphahash_fragment:d0,alphahash_pars_fragment:p0,alphamap_fragment:m0,alphamap_pars_fragment:g0,alphatest_fragment:_0,alphatest_pars_fragment:x0,aomap_fragment:v0,aomap_pars_fragment:y0,batching_pars_vertex:S0,batching_vertex:M0,begin_vertex:b0,beginnormal_vertex:T0,bsdfs:w0,iridescence_fragment:E0,bumpmap_pars_fragment:A0,clipping_planes_fragment:C0,clipping_planes_pars_fragment:R0,clipping_planes_pars_vertex:P0,clipping_planes_vertex:I0,color_fragment:L0,color_pars_fragment:D0,color_pars_vertex:N0,color_vertex:U0,common:F0,defaultnormal_vertex:O0,displacementmap_pars_vertex:B0,displacementmap_vertex:z0,emissivemap_fragment:k0,emissivemap_pars_fragment:G0,colorspace_fragment:V0,colorspace_pars_fragment:H0,envmap_fragment:W0,envmap_common_pars_fragment:X0,envmap_pars_fragment:q0,envmap_pars_vertex:Y0,envmap_physical_pars_fragment:rx,envmap_vertex:Z0,fog_vertex:J0,fog_pars_vertex:$0,fog_fragment:K0,fog_pars_fragment:Q0,gradientmap_pars_fragment:j0,lightmap_pars_fragment:tx,lights_lambert_fragment:ex,lights_lambert_pars_fragment:nx,lights_pars_begin:ix,lights_toon_fragment:sx,lights_toon_pars_fragment:ax,lights_phong_fragment:ox,lights_phong_pars_fragment:lx,lights_physical_fragment:cx,lights_physical_pars_fragment:hx,lights_fragment_begin:ux,lights_fragment_maps:fx,lights_fragment_end:dx,lightprobes_pars_fragment:px,logdepthbuf_fragment:mx,logdepthbuf_pars_fragment:gx,logdepthbuf_pars_vertex:_x,logdepthbuf_vertex:xx,map_fragment:vx,map_pars_fragment:yx,map_particle_fragment:Sx,map_particle_pars_fragment:Mx,metalnessmap_fragment:bx,metalnessmap_pars_fragment:Tx,morphinstance_vertex:wx,morphcolor_vertex:Ex,morphnormal_vertex:Ax,morphtarget_pars_vertex:Cx,morphtarget_vertex:Rx,normal_fragment_begin:Px,normal_fragment_maps:Ix,normal_pars_fragment:Lx,normal_pars_vertex:Dx,normal_vertex:Nx,normalmap_pars_fragment:Ux,clearcoat_normal_fragment_begin:Fx,clearcoat_normal_fragment_maps:Ox,clearcoat_pars_fragment:Bx,iridescence_pars_fragment:zx,opaque_fragment:kx,packing:Gx,premultiplied_alpha_fragment:Vx,project_vertex:Hx,dithering_fragment:Wx,dithering_pars_fragment:Xx,roughnessmap_fragment:qx,roughnessmap_pars_fragment:Yx,shadowmap_pars_fragment:Zx,shadowmap_pars_vertex:Jx,shadowmap_vertex:$x,shadowmask_pars_fragment:Kx,skinbase_vertex:Qx,skinning_pars_vertex:jx,skinning_vertex:tv,skinnormal_vertex:ev,specularmap_fragment:nv,specularmap_pars_fragment:iv,tonemapping_fragment:rv,tonemapping_pars_fragment:sv,transmission_fragment:av,transmission_pars_fragment:ov,uv_pars_fragment:lv,uv_pars_vertex:cv,uv_vertex:hv,worldpos_vertex:uv,background_vert:fv,background_frag:dv,backgroundCube_vert:pv,backgroundCube_frag:mv,cube_vert:gv,cube_frag:_v,depth_vert:xv,depth_frag:vv,distance_vert:yv,distance_frag:Sv,equirect_vert:Mv,equirect_frag:bv,linedashed_vert:Tv,linedashed_frag:wv,meshbasic_vert:Ev,meshbasic_frag:Av,meshlambert_vert:Cv,meshlambert_frag:Rv,meshmatcap_vert:Pv,meshmatcap_frag:Iv,meshnormal_vert:Lv,meshnormal_frag:Dv,meshphong_vert:Nv,meshphong_frag:Uv,meshphysical_vert:Fv,meshphysical_frag:Ov,meshtoon_vert:Bv,meshtoon_frag:zv,points_vert:kv,points_frag:Gv,shadow_vert:Vv,shadow_frag:Hv,sprite_vert:Wv,sprite_frag:Xv},Tt={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Wt}},envmap:{envMap:{value:null},envMapRotation:{value:new Wt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Wt},normalScale:{value:new jt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new jt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}}},Yi={basic:{uniforms:En([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:En([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new zt(0)},envMapIntensity:{value:1}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:En([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:En([Tt.common,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.roughnessmap,Tt.metalnessmap,Tt.fog,Tt.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:En([Tt.common,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.gradientmap,Tt.fog,Tt.lights,{emissive:{value:new zt(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:En([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:En([Tt.points,Tt.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:En([Tt.common,Tt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:En([Tt.common,Tt.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:En([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:En([Tt.sprite,Tt.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Wt}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distance:{uniforms:En([Tt.common,Tt.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distance_vert,fragmentShader:Zt.distance_frag},shadow:{uniforms:En([Tt.lights,Tt.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};Yi.physical={uniforms:En([Yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Wt},clearcoatNormalScale:{value:new jt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Wt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Wt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Wt},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Wt},transmissionSamplerSize:{value:new jt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Wt},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Wt},anisotropyVector:{value:new jt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Wt}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};$c={r:0,b:0,g:0},qv=new be,dm=new Wt;dm.set(-1,0,0,0,1,0,0,0,1);Ao=class extends ni{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new to(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new wn(5,5,5),s=new Vi({name:"CubemapFromEquirect",uniforms:gs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:mn,blending:fs});s.uniforms.tEquirect.value=e;let a=new Re(i,s),o=e.minFilter;return e.minFilter===fr&&(e.minFilter=Un),new aa(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(s)}},Xp=256,Qv=3,jv=20,pm=256,mm=16,ty=3,ey=new q,ny=new zt,fa=class r{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new aa(1,10,null),this._boxMesh=new Re(new wn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,i=100,s={}){let{size:a=256,position:o=ey}=s,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,f=l.autoClearColor,u=l.autoClearDepth,g=l.autoClearStencil,_=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,_===null&&(t.background=l.getClearColor(ny));let p=new aa(n,i,h);return p.position.copy(o),p.update(l,t),l.autoClear=d,l.autoClearColor=f,l.autoClearDepth=u,l.autoClearStencil=g,t.background=_,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Xp,kp(t))}_fromTexture(t,e){t.mapping===ps||t.mapping===ca?this._setSize(t.image.length===0?Xp:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=qp(t,!1,!1),n=Math.log2(t)-Qv;for(let i=0;i<=n;i++)e.texture.mipmaps.push({width:t>>i,height:t>>i});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=qp(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let i=this._boxMesh,s=this._cubeCamera;i.material=n,s.renderTarget=t,s.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),s.update(this._renderer,i),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===ps||t.mapping===ca?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zp()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Yp()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=iy(),this._integrationMaterial=ry());let e=this._cubeSize,n=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(e/mm);for(let a=0;a<=n;a++){let o=r.lodToRoughness(a,n);if(a>n-ty)s.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let l=o>0?Math.log2(e)+.5*Math.log2(6/(pm*Math.pow(o,4)))+.5:0;i.roughness.value=o,i.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=sy());let n=this._blurMaterial,i=n.uniforms,s=this._sourceTarget;i.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,i.envMap.value=s.texture,this._renderCube(t,0,n),i.envMap.value=t.texture,this._renderCube(s,0,n)}};dy={[Cu]:"LINEAR_TONE_MAPPING",[Ru]:"REINHARD_TONE_MAPPING",[Pu]:"CINEON_TONE_MAPPING",[mo]:"ACES_FILMIC_TONE_MAPPING",[Lu]:"AGX_TONE_MAPPING",[Du]:"NEUTRAL_TONE_MAPPING",[Iu]:"CUSTOM_TONE_MAPPING"};gm=new Fn,_m=new hr(1,1),xm=new eo(1),vm=new Ya,ym=new Xl,Sm=new to,Jp=[],$p=[],Kp=new Float32Array(16),Qp=new Float32Array(9),jp=new Float32Array(4);af=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Ny(e.type)}},of=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=tS(e.type)}},lf=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let s=0,a=i.length;s!==a;++s){let o=i[s];o.setValue(t,e[o.id],n)}}},rf=/(\w+)(\])?(\[|\.)?/g;ua=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);eS(o,l,this)}let i=[],s=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(a):s.push(a);i.length>0&&(this.seq=i.concat(s))}setValue(t,e,n,i){let s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,a=e.length;s!==a;++s){let o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,s=t.length;i!==s;++i){let a=t[i];a.id in e&&n.push(a)}return n}};nS=37297,iS=0;nm=new Wt;oS={[Cu]:"Linear",[Ru]:"Reinhard",[Pu]:"Cineon",[mo]:"ACESFilmic",[Lu]:"AgX",[Du]:"Neutral",[Iu]:"Custom"};Kc=new q;dS=/^[ \t]*#include +<([\w\d./]+)>/gm;mS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;_S={[us]:"SHADOWMAP_TYPE_PCF",[oa]:"SHADOWMAP_TYPE_VSM"};vS={[ca]:"ENVMAP_MODE_REFRACTION"};SS={[cc]:"ENVMAP_BLENDING_MULTIPLY",[Tp]:"ENVMAP_BLENDING_MIX",[wp]:"ENVMAP_BLENDING_ADD"};TS=0,hf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new uf(t),e.set(t,n)),n}},uf=class{constructor(t){this.id=TS++,this.code=t,this.usedTimes=0}};LS=0;FS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,OS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,BS=[new q(1,0,0),new q(-1,0,0),new q(0,1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1)],zS=[new q(0,-1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1),new q(0,-1,0),new q(0,-1,0)],um=new be,wo=new q,sf=new q;WS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,XS=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,ff=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new no(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Vi({vertexShader:WS,fragmentShader:XS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Re(new ur(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},df=class extends Fi{constructor(t,e){super();let n=this,i=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,f=null,u=null,g=null,_=typeof XRWebGLBinding!="undefined",p=new ff,m={},v=e.getContextAttributes(),w=null,y=null,T=[],E=[],x=new jt,M=null,P=null,C=new Tn;C.viewport=new Le;let N=new Tn;N.viewport=new Le;let D=[C,N],B=new oc,I=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ht=T[Z];return ht===void 0&&(ht=new ra,T[Z]=ht),ht.getTargetRaySpace()},this.getControllerGrip=function(Z){let ht=T[Z];return ht===void 0&&(ht=new ra,T[Z]=ht),ht.getGripSpace()},this.getHand=function(Z){let ht=T[Z];return ht===void 0&&(ht=new ra,T[Z]=ht),ht.getHandSpace()};function V(Z){let ht=E.indexOf(Z.inputSource);if(ht===-1)return;let rt=T[ht];rt!==void 0&&(rt.update(Z.inputSource,Z.frame,c||a),rt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function O(){i.removeEventListener("select",V),i.removeEventListener("selectstart",V),i.removeEventListener("selectend",V),i.removeEventListener("squeeze",V),i.removeEventListener("squeezestart",V),i.removeEventListener("squeezeend",V),i.removeEventListener("end",O),i.removeEventListener("inputsourceschange",j);for(let Z=0;Z<T.length;Z++){let ht=E[Z];ht!==null&&(E[Z]=null,T[Z].disconnect(ht))}I=null,z=null,p.reset();for(let Z in m)delete m[Z];if(t.setRenderTarget(w),u=null,f=null,d=null,i=null,y=null,Ft.stop(),n.isPresenting=!1,t.setPixelRatio(M),t.setSize(x.width,x.height,!1),P!==null){let Z=P.camera;Z.fov=P.fov,Z.zoom=P.zoom,Z.updateProjectionMatrix(),P=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,n.isPresenting===!0&&kt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&kt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return f!==null?f:u},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(i,e)),d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Z){if(i=Z,i!==null){if(w=t.getRenderTarget(),i.addEventListener("select",V),i.addEventListener("selectstart",V),i.addEventListener("selectend",V),i.addEventListener("squeeze",V),i.addEventListener("squeezestart",V),i.addEventListener("squeezeend",V),i.addEventListener("end",O),i.addEventListener("inputsourceschange",j),v.xrCompatible!==!0&&await e.makeXRCompatible(),M=t.getPixelRatio(),t.getSize(x),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let rt=null,bt=null,ut=null;v.depth&&(ut=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,rt=v.stencil?dr:cr,bt=v.stencil?ms:Ri);let Pt={colorFormat:e.RGBA8,depthFormat:ut,scaleFactor:s};d=this.getBinding(),f=d.createProjectionLayer(Pt),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),y=new ni(f.textureWidth,f.textureHeight,{format:Ii,type:Xn,depthTexture:new hr(f.textureWidth,f.textureHeight,bt,void 0,void 0,void 0,void 0,void 0,void 0,rt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let rt={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};u=new XRWebGLLayer(i,e,rt),i.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),y=new ni(u.framebufferWidth,u.framebufferHeight,{format:Ii,type:Xn,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Ft.setContext(i),Ft.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function j(Z){for(let ht=0;ht<Z.removed.length;ht++){let rt=Z.removed[ht],bt=E.indexOf(rt);bt>=0&&(E[bt]=null,T[bt].disconnect(rt))}for(let ht=0;ht<Z.added.length;ht++){let rt=Z.added[ht],bt=E.indexOf(rt);if(bt===-1){for(let Pt=0;Pt<T.length;Pt++)if(Pt>=E.length){E.push(rt),bt=Pt;break}else if(E[Pt]===null){E[Pt]=rt,bt=Pt;break}if(bt===-1)break}let ut=T[bt];ut&&ut.connect(rt)}}function H(Z,ht){ht===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ht.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(i===null)return;let ht=Z.near,rt=Z.far;p.texture!==null&&(p.depthNear>0&&(ht=p.depthNear),p.depthFar>0&&(rt=p.depthFar)),B.near=N.near=C.near=ht,B.far=N.far=C.far=rt,(I!==B.near||z!==B.far)&&(i.updateRenderState({depthNear:B.near,depthFar:B.far}),I=B.near,z=B.far),B.layers.mask=Z.layers.mask|6,C.layers.mask=B.layers.mask&-5,N.layers.mask=B.layers.mask&-3;let bt=Z.parent,ut=B.cameras;H(B,bt);for(let Pt=0;Pt<ut.length;Pt++)H(ut[Pt],bt);B.projectionMatrix.copy(C.projectionMatrix),B.projectionMatrixInverse.copy(C.projectionMatrixInverse),P===null&&Z.isPerspectiveCamera&&(P={camera:Z,fov:Z.fov,zoom:Z.zoom}),R(Z,B,bt)};function R(Z,ht,rt){rt===null?Z.matrix.copy(ht.matrixWorld):(Z.matrix.copy(rt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ht.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ht.projectionMatrix),Z.projectionMatrixInverse.copy(ht.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Vl*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(f===null&&u===null))return l},this.setFoveation=function(Z){l=Z,f!==null&&(f.fixedFoveation=Z),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=Z)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(B)},this.getCameraTexture=function(Z){return m[Z]};let et=null;function Mt(Z,ht){if(h=ht.getViewerPose(c||a),g=ht,h!==null){let rt=h.views;u!==null&&(t.setRenderTargetFramebuffer(y,u.framebuffer),t.setRenderTarget(y));let bt=!1;rt.length!==B.cameras.length&&(B.cameras.length=0,bt=!0);for(let At=0;At<rt.length;At++){let Gt=rt[At],Lt=null;if(u!==null)Lt=u.getViewport(Gt);else{let le=d.getViewSubImage(f,Gt);Lt=le.viewport,At===0&&(t.setRenderTargetTextures(y,le.colorTexture,le.depthStencilTexture),t.setRenderTarget(y))}let Ut=D[At];Ut===void 0&&(Ut=new Tn,Ut.layers.enable(At),Ut.viewport=new Le,D[At]=Ut),Ut.matrix.fromArray(Gt.transform.matrix),Ut.matrix.decompose(Ut.position,Ut.quaternion,Ut.scale),Ut.projectionMatrix.fromArray(Gt.projectionMatrix),Ut.projectionMatrixInverse.copy(Ut.projectionMatrix).invert(),Ut.viewport.set(Lt.x,Lt.y,Lt.width,Lt.height),At===0&&(B.matrix.copy(Ut.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),bt===!0&&B.cameras.push(Ut)}let ut=i.enabledFeatures;if(ut&&ut.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){d=n.getBinding();let At=d.getDepthInformation(rt[0]);At&&At.isValid&&At.texture&&p.init(At,i.renderState)}if(ut&&ut.includes("camera-access")&&_){t.state.unbindTexture(),d=n.getBinding();for(let At=0;At<rt.length;At++){let Gt=rt[At].camera;if(Gt){let Lt=m[Gt];Lt||(Lt=new no,m[Gt]=Lt);let Ut=d.getCameraImage(Gt);Lt.sourceTexture=Ut}}}}for(let rt=0;rt<T.length;rt++){let bt=E[rt],ut=T[rt];bt!==null&&ut!==void 0&&ut.update(bt,ht,c||a)}et&&et(Z,ht),ht.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ht}),g=null}let Ft=new fm;Ft.setAnimationLoop(Mt),this.setAnimationLoop=function(Z){et=Z},this.dispose=function(){}}},qS=new be,Mm=new Wt;Mm.set(-1,0,0,0,1,0,0,0,1);JS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),qi=null;Qc=class{constructor(t={}){let{canvas:e=Fp(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:u=Xn}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let _=u,p=new Set([vc,xc,_c]),m=new Set([Xn,Ri,ha,ms,pc,mc]),v=new Uint32Array(4),w=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},T=null,E=null,x=[],M=[],P=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,N=!1,D=null,B=null,I=null,z=null;this._outputColorSpace=ln;let V=0,O=0,j=null,H=-1,R=null,et=new Le,Mt=new Le,Ft=null,Z=new zt(0),ht=0,rt=e.width,bt=e.height,ut=1,Pt=null,ue=null,At=new Le(0,0,rt,bt),Gt=new Le(0,0,rt,bt),Lt=!1,Ut=new Nr,le=new Yl,ne=!1,J=!1,Yt=new be,ze=new q,de=new Le,te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},we=!1;function Ee(){return j===null?ut:1}let F=n;function he(b,U){return e.getContext(b,U)}let ie,Vt,$,Ct,vt,Bt,A,S,k,ot,st,dt,_t,W,tt,ft,L,Q,K,pt,ct,mt,lt;try{let b={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",nt,!1),e.addEventListener("webglcontextrestored",xt,!1),e.addEventListener("webglcontextcreationerror",it,!1),F===null){let U="webgl2";if(F=he(U,b),F===null)throw he(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}gt()}catch(b){throw e.removeEventListener("webglcontextlost",nt,!1),e.removeEventListener("webglcontextrestored",xt,!1),e.removeEventListener("webglcontextcreationerror",it,!1),Ht("WebGLRenderer: "+b.message),b}function gt(){ie=new oy(F),ie.init(),ct=new HS(F,ie),Vt=new $v(F,ie,t,ct),$=new GS(F,ie),Vt.reversedDepthBuffer&&f&&$.buffers.depth.setReversed(!0),B=F.createFramebuffer(),I=F.createFramebuffer(),z=F.createFramebuffer(),Ct=new hy(F),vt=new AS,Bt=new VS(F,ie,$,vt,Vt,ct,Ct),A=new ay(C),S=new f0(F),mt=new Zv(F,S),k=new ly(F,S,Ct,mt),ot=new fy(F,k,S,mt,Ct),Q=new uy(F,Vt,Bt),tt=new Kv(vt),st=new ES(C,A,ie,Vt,mt,tt),dt=new YS(C,vt),_t=new RS,W=new US(ie),L=new Yv(C,A,$,ot,g,l),ft=new kS(C,ot,Vt),lt=new ZS(F,Ct,Vt,$),K=new Jv(F,ie,Ct),pt=new cy(F,ie,Ct),Ct.programs=st.programs,C.capabilities=Vt,C.extensions=ie,C.properties=vt,C.renderLists=_t,C.shadowMap=ft,C.state=$,C.info=Ct}_!==Xn&&(P=new py(_,e.width,e.height,o,i,s));let at=new df(C,F);this.xr=at,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let b=ie.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=ie.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return ut},this.setPixelRatio=function(b){b!==void 0&&(ut=b,this.setSize(rt,bt,!1))},this.getSize=function(b){return b.set(rt,bt)},this.setSize=function(b,U,Y=!0){if(at.isPresenting){kt("WebGLRenderer: Can't change size while VR device is presenting.");return}rt=b,bt=U,e.width=Math.floor(b*ut),e.height=Math.floor(U*ut),Y===!0&&(e.style.width=b+"px",e.style.height=U+"px"),P!==null&&P.setSize(e.width,e.height),this.setViewport(0,0,b,U)},this.getDrawingBufferSize=function(b){return b.set(rt*ut,bt*ut).floor()},this.setDrawingBufferSize=function(b,U,Y){rt=b,bt=U,ut=Y,e.width=Math.floor(b*Y),e.height=Math.floor(U*Y),this.setViewport(0,0,b,U)},this.setEffects=function(b){if(_===Xn){Ht("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let U=0;U<b.length;U++)if(b[U].isOutputPass===!0){kt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(et)},this.getViewport=function(b){return b.copy(At)},this.setViewport=function(b,U,Y,G){b.isVector4?At.set(b.x,b.y,b.z,b.w):At.set(b,U,Y,G),$.viewport(et.copy(At).multiplyScalar(Ee()).round())},this.getScissor=function(b){return b.copy(Gt)},this.setScissor=function(b,U,Y,G){b.isVector4?Gt.set(b.x,b.y,b.z,b.w):Gt.set(b,U,Y,G),$.scissor(Mt.copy(Gt).multiplyScalar(Ee()).round())},this.getScissorTest=function(){return Lt},this.setScissorTest=function(b){$.setScissorTest(Lt=b)},this.setOpaqueSort=function(b){Pt=b},this.setTransparentSort=function(b){ue=b},this.getClearColor=function(b){return b.copy(L.getClearColor())},this.setClearColor=function(){L.setClearColor(...arguments)},this.getClearAlpha=function(){return L.getClearAlpha()},this.setClearAlpha=function(){L.setClearAlpha(...arguments)},this.clear=function(b=!0,U=!0,Y=!0){let G=0;if(b){let X=!1;if(j!==null){let St=j.texture.format;X=p.has(St)}if(X){let St=j.texture.type,It=m.has(St),yt=L.getClearColor(),Et=L.getClearAlpha(),Ot=yt.r,qt=yt.g,re=yt.b;It?(v[0]=Ot,v[1]=qt,v[2]=re,v[3]=Et,F.clearBufferuiv(F.COLOR,0,v)):(w[0]=Ot,w[1]=qt,w[2]=re,w[3]=Et,F.clearBufferiv(F.COLOR,0,w))}else G|=F.COLOR_BUFFER_BIT}U&&(G|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(G|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&F.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),D=b},this.dispose=function(){e.removeEventListener("webglcontextlost",nt,!1),e.removeEventListener("webglcontextrestored",xt,!1),e.removeEventListener("webglcontextcreationerror",it,!1),L.dispose(),_t.dispose(),W.dispose(),Bt.dispose(),vt.dispose(),A.dispose(),ot.dispose(),k.dispose(),mt.dispose(),lt.dispose(),st.dispose(),at.dispose(),at.removeEventListener("sessionstart",ye),at.removeEventListener("sessionend",me),Qe.stop()};function nt(b){b.preventDefault(),Xu("WebGLRenderer: Context Lost."),N=!0}function xt(){Xu("WebGLRenderer: Context Restored."),N=!1;let b=Ct.autoReset,U=ft.enabled,Y=ft.autoUpdate,G=ft.needsUpdate,X=ft.type;gt(),Ct.autoReset=b,ft.enabled=U,ft.autoUpdate=Y,ft.needsUpdate=G,ft.type=X}function it(b){Ht("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function wt(b){let U=b.target;U.removeEventListener("dispose",wt),ee(U)}function ee(b){Xt(b),vt.remove(b)}function Xt(b){let U=vt.get(b).programs;U!==void 0&&(U.forEach(function(Y){st.releaseProgram(Y)}),b.isShaderMaterial&&st.releaseShaderCache(b))}this.renderBufferDirect=function(b,U,Y,G,X,St){U===null&&(U=te);let It=X.isMesh&&X.matrixWorld.determinantAffine()<0,yt=ui(b,U,Y,G,X);$.setMaterial(G,It);let Et=Y.index,Ot=1;if(G.wireframe===!0){if(Et=k.getWireframeAttribute(Y),Et===void 0)return;Ot=2}let qt=Y.drawRange,re=Y.attributes.position,Dt=qt.start*Ot,se=(qt.start+qt.count)*Ot;St!==null&&(Dt=Math.max(Dt,St.start*Ot),se=Math.min(se,(St.start+St.count)*Ot)),Et!==null?(Dt=Math.max(Dt,0),se=Math.min(se,Et.count)):re!=null&&(Dt=Math.max(Dt,0),se=Math.min(se,re.count));let Ze=se-Dt;if(Ze<0||Ze===1/0)return;mt.setup(X,G,yt,Y,Et);let Ae,Me=K;if(Et!==null&&(Ae=S.get(Et),Me=pt,Me.setIndex(Ae)),X.isMesh)G.wireframe===!0?($.setLineWidth(G.wireframeLinewidth*Ee()),Me.setMode(F.LINES)):Me.setMode(F.TRIANGLES);else if(X.isLine){let yn=G.linewidth;yn===void 0&&(yn=1),$.setLineWidth(yn*Ee()),X.isLineSegments?Me.setMode(F.LINES):X.isLineLoop?Me.setMode(F.LINE_LOOP):Me.setMode(F.LINE_STRIP)}else X.isPoints?Me.setMode(F.POINTS):X.isSprite&&Me.setMode(F.TRIANGLES);if(X.isBatchedMesh)if(ie.get("WEBGL_multi_draw"))Me.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let yn=X._multiDrawStarts,Nt=X._multiDrawCounts,Nn=X._multiDrawCount,pe=Et?S.get(Et).bytesPerElement:1,jr=vt.get(G).currentProgram.getUniforms();for(let Sn=0;Sn<Nn;Sn++)jr.setValue(F,"_gl_DrawID",Sn),Me.render(yn[Sn]/pe,Nt[Sn])}else if(X.isInstancedMesh)Me.renderInstances(Dt,Ze,X.count);else if(Y.isInstancedBufferGeometry){let yn=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Nt=Math.min(Y.instanceCount,yn);Me.renderInstances(Dt,Ze,Nt)}else Me.render(Dt,Ze)};function Pe(b,U,Y,G){D!==null&&b.isNodeMaterial&&D.setObject(G,b),ne===!0&&tt.setState(b,Y,!1),b.transparent===!0&&b.side===Wi&&b.forceSinglePass===!1?(b.side=mn,b.needsUpdate=!0,jn(b,U,G),b.side=Br,b.needsUpdate=!0,jn(b,U,G),b.side=Wi):jn(b,U,G)}this.compile=function(b,U,Y=null){Y===null&&(Y=b),D!==null&&D.renderStart(b,U,Y),E=W.get(Y),E.init(U),M.push(E),Y.traverseVisible(function(X){X.isLight&&X.layers.test(U.layers)&&(E.pushLight(X),X.castShadow&&E.pushShadow(X))}),b!==Y&&b.traverseVisible(function(X){X.isLight&&X.layers.test(U.layers)&&(E.pushLight(X),X.castShadow&&E.pushShadow(X))}),E.setupLights(),D!==null&&D.updateLights(E.state.lightsArray),J=this.localClippingEnabled,ne=tt.init(this.clippingPlanes,J),ne===!0&&tt.setGlobalState(this.clippingPlanes,U),D!==null&&ft.render(E.state.shadowsArray,Y,U);let G=new Set;return b.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let St=X.material;if(St)if(Array.isArray(St))for(let It=0;It<St.length;It++){let yt=St[It];Pe(yt,Y,U,X),G.add(yt)}else Pe(St,Y,U,X),G.add(St)}),E=M.pop(),D!==null&&D.renderEnd(),G},this.compileAsync=function(b,U,Y=null){let G=this.compile(b,U,Y);return new Promise(X=>{function St(){if(G.forEach(function(It){let Et=vt.get(It).currentProgram;(Et===void 0||Et.isReady())&&G.delete(It)}),G.size===0){X(b);return}setTimeout(St,10)}ie.get("KHR_parallel_shader_compile")!==null?St():setTimeout(St,10)})};let qe=null;function Ie(b){qe&&qe(b)}function ye(){Qe.stop()}function me(){Qe.start()}let Qe=new fm;Qe.setAnimationLoop(Ie),typeof self!="undefined"&&Qe.setContext(self),this.setAnimationLoop=function(b){qe=b,at.setAnimationLoop(b),b===null?Qe.stop():Qe.start()},at.addEventListener("sessionstart",ye),at.addEventListener("sessionend",me),this.render=function(b,U){if(U!==void 0&&U.isCamera!==!0){Ht("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;D!==null&&D.renderStart(b,U);let Y=at.enabled===!0&&at.isPresenting===!0,G=P!==null&&(j===null||Y)&&P.begin(C,j);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),at.enabled===!0&&at.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(at.cameraAutoUpdate===!0&&at.updateCamera(U),U=at.getCamera()),b.isScene===!0&&b.onBeforeRender(C,b,U,j),E=W.get(b,M.length),E.init(U),E.state.textureUnits=Bt.getTextureUnits(),M.push(E),Yt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),U.isArrayCamera?le.setFromArrayCamera(U):Ut.setFromProjectionMatrix(Yt,di,U.reversedDepth),J=this.localClippingEnabled,ne=tt.init(this.clippingPlanes,J),T=_t.get(b,x.length),T.init(),x.push(T),this.info.render.frame++,at.enabled===!0&&at.isPresenting===!0){let It=C.xr.getDepthSensingMesh();It!==null&&Se(It,U,-1/0,C.sortObjects)}Se(b,U,0,C.sortObjects),T.finish(),D!==null&&D.updateLights(E.state.lightsArray),C.sortObjects===!0&&T.sort(Pt,ue),we=at.enabled===!1||at.isPresenting===!1||at.hasDepthSensing()===!1,we&&L.addToRenderList(T,b),this.info.autoReset===!0&&this.info.reset(),ne===!0&&tt.beginShadows();let X=E.state.shadowsArray;if(ft.render(X,b,U),ne===!0&&tt.endShadows(),(G&&P.hasRenderPass())===!1){let It=T.opaque,yt=T.transmissive;if(E.setupLights(),U.isArrayCamera){let Et=U.cameras;if(yt.length>0)for(let Ot=0,qt=Et.length;Ot<qt;Ot++){let re=Et[Ot];Qn(It,yt,b,re)}we&&L.render(b);for(let Ot=0,qt=Et.length;Ot<qt;Ot++){let re=Et[Ot];vn(T,b,re,re.viewport)}}else yt.length>0&&Qn(It,yt,b,U),we&&L.render(b),vn(T,b,U)}j!==null&&O===0&&(Bt.updateMultisampleRenderTarget(j),Bt.updateRenderTargetMipmap(j)),G&&P.end(C),b.isScene===!0&&b.onAfterRender(C,b,U),mt.resetDefaultState(),H=-1,R=null,M.pop(),M.length>0?(E=M[M.length-1],Bt.setTextureUnits(E.state.textureUnits),ne===!0&&tt.setGlobalState(C.clippingPlanes,E.state.camera)):E=null,x.pop(),x.length>0?T=x[x.length-1]:T=null,D!==null&&D.renderEnd()};function Se(b,U,Y,G){if(b.visible===!1)return;if(b.layers.test(U.layers)){if(b.isGroup)Y=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(U);else if(b.isLight)E.pushLight(b),b.castShadow&&E.pushShadow(b);else if(b.isSprite){let It=U.isArrayCamera?le:Ut;if(!b.frustumCulled||b.intersectsFrustum(It)){G&&de.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Yt);let yt=ot.update(b),Et=b.material;Et.visible&&T.push(b,yt,Et,Y,de.z,null,U)}}else if(b.isMesh||b.isLine||b.isPoints){let It=U.isArrayCamera?le:Ut;if(!b.frustumCulled||b.intersectsFrustum(It)){let yt=ot.update(b),Et=b.material;if(G&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),de.copy(b.boundingSphere.center)):(yt.boundingSphere===null&&yt.computeBoundingSphere(),de.copy(yt.boundingSphere.center)),de.applyMatrix4(b.matrixWorld).applyMatrix4(Yt)),Array.isArray(Et)){let Ot=yt.groups;for(let qt=0,re=Ot.length;qt<re;qt++){let Dt=Ot[qt],se=Et[Dt.materialIndex];se&&se.visible&&T.push(b,yt,se,Y,de.z,Dt,U)}}else Et.visible&&T.push(b,yt,Et,Y,de.z,null,U)}}}let St=b.children;for(let It=0,yt=St.length;It<yt;It++)Se(St[It],U,Y,G)}function vn(b,U,Y,G){let{opaque:X,transmissive:St,transparent:It}=b;E.setupLightsView(Y),ne===!0&&tt.setGlobalState(C.clippingPlanes,Y),G&&$.viewport(et.copy(G)),X.length>0&&ke(X,U,Y),St.length>0&&ke(St,U,Y),It.length>0&&ke(It,U,Y),$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),$.setPolygonOffset(!1)}function Qn(b,U,Y,G){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[G.id]===void 0){let Dt=ie.has("EXT_color_buffer_half_float")||ie.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[G.id]=new ni(1,1,{generateMipmaps:!0,type:Dt?Pi:Xn,minFilter:fr,samples:Math.max(4,Vt.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ae.workingColorSpace})}let St=E.state.transmissionRenderTarget[G.id],It=G.viewport||et;St.setSize(It.z*C.transmissionResolutionScale,It.w*C.transmissionResolutionScale);let yt=C.getRenderTarget(),Et=C.getActiveCubeFace(),Ot=C.getActiveMipmapLevel();C.setRenderTarget(St),C.getClearColor(Z),ht=C.getClearAlpha(),ht<1&&C.setClearColor(16777215,.5),C.clear(),we&&L.render(Y);let qt=C.toneMapping;C.toneMapping=Xi;let re=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),E.setupLightsView(G),ne===!0&&tt.setGlobalState(C.clippingPlanes,G),ke(b,Y,G),Bt.updateMultisampleRenderTarget(St),Bt.updateRenderTargetMipmap(St),ie.has("WEBGL_multisampled_render_to_texture")===!1){let Dt=!1;for(let se=0,Ze=U.length;se<Ze;se++){let Ae=U[se],{object:Me,geometry:yn,material:Nt,group:Nn}=Ae;if(Nt.side===Wi&&Me.layers.test(G.layers)){let pe=Nt.side;Nt.side=mn,Nt.needsUpdate=!0,Ye(Me,Y,G,yn,Nt,Nn),Nt.side=pe,Nt.needsUpdate=!0,Dt=!0}}Dt===!0&&(Bt.updateMultisampleRenderTarget(St),Bt.updateRenderTargetMipmap(St))}C.setRenderTarget(yt,Et,Ot),C.setClearColor(Z,ht),re!==void 0&&(G.viewport=re),C.toneMapping=qt}function ke(b,U,Y){let G=U.isScene===!0?U.overrideMaterial:null;for(let X=0,St=b.length;X<St;X++){let It=b[X],{object:yt,geometry:Et,group:Ot}=It,qt=It.material;qt.allowOverride===!0&&G!==null&&(qt=G),yt.layers.test(Y.layers)&&Ye(yt,U,Y,Et,qt,Ot)}}function Ye(b,U,Y,G,X,St){D!==null&&X.isNodeMaterial&&D.setObject(b,X),b.onBeforeRender(C,U,Y,G,X,St),b.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),X.onBeforeRender(C,U,Y,G,b,St),X.transparent===!0&&X.side===Wi&&X.forceSinglePass===!1?(X.side=mn,X.needsUpdate=!0,C.renderBufferDirect(Y,U,G,X,b,St),X.side=Br,X.needsUpdate=!0,C.renderBufferDirect(Y,U,G,X,b,St),X.side=Wi):C.renderBufferDirect(Y,U,G,X,b,St),b.onAfterRender(C,U,Y,G,X,St)}function je(b){let U=0;for(let Y of b)Y.texture!==null&&U++;return U}function jn(b,U,Y){U.isScene!==!0&&(U=te);let G=vt.get(b),X=E.state.lights,St=E.state.shadowsArray,It=X.state.version,yt=st.getParameters(b,X.state,St,U,Y,E.state.lightProbeGridArray),Et=st.getProgramCacheKey(yt),Ot=G.programs;G.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?U.environment:null,G.fog=U.fog;let qt=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;G.envMap=A.get(b.envMap||G.environment,qt),G.envMapRotation=G.environment!==null&&b.envMap===null?U.environmentRotation:b.envMapRotation,Ot===void 0&&(b.addEventListener("dispose",wt),Ot=new Map,G.programs=Ot,G.programVariants=new Map);let re=Ot.get(Et);if(re!==void 0){if(G.currentProgram===re&&G.lightsStateVersion===It)return Ge(b,yt),re}else yt.uniforms=st.getUniforms(b),D!==null&&b.isNodeMaterial&&D.build(b,Y,yt),b.onBeforeCompile(yt,C),re=st.acquireProgram(yt,Et),Ot.set(Et,re),G.uniforms=yt.uniforms;let Dt=G.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Dt.clippingPlanes=tt.uniform),Ge(b,yt),G.needsLights=ll(b),G.lightsStateVersion=It,G.needsLights&&(Dt.ambientLightColor.value=X.state.ambient,Dt.lightProbe.value=X.state.probe,Dt.sunLights.value=X.state.sun,Dt.sunLightShadows.value=X.state.sunShadow,Dt.directionalLights.value=X.state.directional,Dt.directionalLightShadows.value=X.state.directionalShadow,Dt.spotLights.value=X.state.spot,Dt.spotLightShadows.value=X.state.spotShadow,Dt.rectAreaLights.value=X.state.rectArea,Dt.ltc_1.value=X.state.rectAreaLTC1,Dt.ltc_2.value=X.state.rectAreaLTC2,Dt.pointLights.value=X.state.point,Dt.pointLightShadows.value=X.state.pointShadow,Dt.hemisphereLights.value=X.state.hemi,Dt.sunShadowMatrix.value=X.state.sunShadowMatrix,Dt.sunShadowCascade.value=X.state.sunShadowCascade,Dt.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Dt.spotLightMatrix.value=X.state.spotLightMatrix,Dt.spotLightMap.value=X.state.spotLightMap,Dt.pointShadowMatrix.value=X.state.pointShadowMatrix),G.numLightProbeGrids=je(E.state.lightProbeGridArray),G.currentProgram=re,G.uniformsList=null,re}function Os(b,U,Y,G,X){let St=vt.get(b),It=St.currentProgram.id+","+G+","+X,yt=St.programVariants.get(It);return yt===void 0?(yt=jn(b,U,Y),St.programVariants.set(It,yt)):(St.currentProgram=yt,St.uniformsList=null,St.outputColorSpace=G,St.toneMapping=X),yt}function tn(b){if(b.uniformsList===null){let U=b.currentProgram.getUniforms();b.uniformsList=ua.seqWithValue(U.seq,b.uniforms)}return b.uniformsList}function Ge(b,U){let Y=vt.get(b);Y.outputColorSpace=U.outputColorSpace,Y.batching=U.batching,Y.batchingColor=U.batchingColor,Y.instancing=U.instancing,Y.instancingColor=U.instancingColor,Y.instancingMorph=U.instancingMorph,Y.skinning=U.skinning,Y.morphTargets=U.morphTargets,Y.morphNormals=U.morphNormals,Y.morphColors=U.morphColors,Y.morphTargetsCount=U.morphTargetsCount,Y.numClippingPlanes=U.numClippingPlanes,Y.numIntersection=U.numClipIntersection,Y.vertexAlphas=U.vertexAlphas,Y.vertexTangents=U.vertexTangents,Y.toneMapping=U.toneMapping}function ui(b,U,Y,G,X){U.isScene!==!0&&(U=te),Bt.resetTextureUnits();let St=U.fog,It=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?U.environment:null,yt=j===null?C.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:ae.workingColorSpace,Et=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Ot=A.get(G.envMap||It,Et),qt=G.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,re=!!Y.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Dt=!!Y.morphAttributes.position,se=!!Y.morphAttributes.normal,Ze=!!Y.morphAttributes.color,Ae=Xi;G.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Ae=C.toneMapping);let Me=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,yn=Me!==void 0?Me.length:0,Nt=vt.get(G),Nn=E.state.lights;if(ne===!0&&(J===!0||b!==R)){let Ue=b===R&&G.id===H;tt.setState(G,b,Ue)}let pe=!1,jr=!1;G.version===Nt.__version?Nt.needsLights&&Nt.lightsStateVersion!==Nn.state.version||X.isBatchedMesh&&Nt.batching===!1||!X.isBatchedMesh&&Nt.batching===!0||X.isBatchedMesh&&Nt.batchingColor===!0&&X._colorsTexture===null||X.isBatchedMesh&&Nt.batchingColor===!1&&X._colorsTexture!==null||X.isInstancedMesh&&Nt.instancing===!1||!X.isInstancedMesh&&Nt.instancing===!0||X.isSkinnedMesh&&Nt.skinning===!1||!X.isSkinnedMesh&&Nt.skinning===!0||X.isInstancedMesh&&Nt.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Nt.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Nt.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Nt.instancingMorph===!1&&X.morphTexture!==null||Nt.envMap!==Ot||G.fog===!0&&Nt.fog!==St||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==tt.numPlanes||Nt.numIntersection!==tt.numIntersection)||Nt.vertexAlphas!==qt||Nt.vertexTangents!==re||Nt.morphTargets!==Dt||Nt.morphNormals!==se||Nt.morphColors!==Ze||Nt.morphTargetsCount!==yn||Nt.numLightProbeGrids!==je(E.state.lightProbeGridArray)?pe=!0:(Nt.outputColorSpace!==yt||Nt.toneMapping!==Ae)&&(jr=!0):(pe=!0,Nt.__version=G.version);let Sn=Nt.currentProgram;(pe===!0||jr===!0)&&(Sn=jr===!0?Os(G,U,X,yt,Ae):jn(G,U,X),D&&G.isNodeMaterial&&D.onUpdateProgram(G,Sn,Nt));let cl=!1,Er=!1,ts=!1,fe=Sn.getUniforms(),pn=Nt.uniforms;if($.useProgram(Sn.program)&&(cl=!0,Er=!0,ts=!0),G.id!==H&&(H=G.id,Er=!0),cl||R!==b){$.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),fe.setValue(F,"projectionMatrix",b.projectionMatrix),fe.setValue(F,"viewMatrix",b.matrixWorldInverse);let an=fe.map.cameraPosition;an!==void 0&&an.setValue(F,ze.setFromMatrixPosition(b.matrixWorld)),Vt.logarithmicDepthBuffer&&fe.setValue(F,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&fe.setValue(F,"isOrthographic",b.isOrthographicCamera===!0),R!==b&&(R=b,Er=!0,ts=!0)}if(Nt.needsLights&&(Nn.state.sunShadowMap.length>0&&fe.setValue(F,"sunShadowMap",Nn.state.sunShadowMap,Bt),Nn.state.directionalShadowMap.length>0&&fe.setValue(F,"directionalShadowMap",Nn.state.directionalShadowMap,Bt),Nn.state.spotShadowMap.length>0&&fe.setValue(F,"spotShadowMap",Nn.state.spotShadowMap,Bt),Nn.state.pointShadowMap.length>0&&fe.setValue(F,"pointShadowMap",Nn.state.pointShadowMap,Bt)),X.isSkinnedMesh){fe.setOptional(F,X,"bindMatrix"),fe.setOptional(F,X,"bindMatrixInverse");let Ue=X.skeleton;Ue&&(Ue.boneTexture===null&&Ue.computeBoneTexture(),fe.setValue(F,"boneTexture",Ue.boneTexture,Bt))}X.isBatchedMesh&&(fe.setOptional(F,X,"batchingTexture"),fe.setValue(F,"batchingTexture",X._matricesTexture,Bt),fe.setOptional(F,X,"batchingIdTexture"),fe.setValue(F,"batchingIdTexture",X._indirectTexture,Bt),fe.setOptional(F,X,"batchingColorTexture"),X._colorsTexture!==null&&fe.setValue(F,"batchingColorTexture",X._colorsTexture,Bt));let Mi=Y.morphAttributes;if((Mi.position!==void 0||Mi.normal!==void 0||Mi.color!==void 0)&&Q.update(X,Y,Sn),(Er||Nt.receiveShadow!==X.receiveShadow)&&(Nt.receiveShadow=X.receiveShadow,fe.setValue(F,"receiveShadow",X.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&U.environment!==null&&(pn.envMapIntensity.value=U.environmentIntensity),pn.dfgLUT!==void 0&&(pn.dfgLUT.value=$S()),Er){if(fe.setValue(F,"toneMappingExposure",C.toneMappingExposure),Nt.needsLights&&Fa(pn,ts),St&&G.fog===!0&&dt.refreshFogUniforms(pn,St),dt.refreshMaterialUniforms(pn,G,ut,bt,E.state.transmissionRenderTarget[b.id]),Nt.needsLights&&Nt.numLightProbeGrids>0){let Ue=y,an=0;for(let er of E.state.lightProbeGridArray)er.texture!==null&&(Ue.textures[an]=er.texture,Ue.min[an]=er.boundingBox.min,Ue.max[an]=er.boundingBox.max,Ue.resolution[an]=er.resolution,an++);for(let er in Ue)Ue[er].length=an;pn.probesSH.value=Ue.textures,pn.probesMin.value=Ue.min,pn.probesMax.value=Ue.max,pn.probesResolution.value=Ue.resolution}ua.upload(F,tn(Nt),pn,Bt)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(ua.upload(F,tn(Nt),pn,Bt),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&fe.setValue(F,"center",X.center),fe.setValue(F,"modelViewMatrix",X.modelViewMatrix),fe.setValue(F,"normalMatrix",X.normalMatrix),fe.setValue(F,"modelMatrix",X.matrixWorld),G.uniformsGroups!==void 0){let Ue=G.uniformsGroups;for(let an=0,er=Ue.length;an<er;an++){let Id=Ue[an];lt.update(Id,Sn),lt.bind(Id,Sn)}}return Sn}function Fa(b,U){b.ambientLightColor.needsUpdate=U,b.lightProbe.needsUpdate=U,b.sunLights.needsUpdate=U,b.sunLightShadows.needsUpdate=U,b.directionalLights.needsUpdate=U,b.directionalLightShadows.needsUpdate=U,b.pointLights.needsUpdate=U,b.pointLightShadows.needsUpdate=U,b.spotLights.needsUpdate=U,b.spotLightShadows.needsUpdate=U,b.rectAreaLights.needsUpdate=U,b.hemisphereLights.needsUpdate=U}function ll(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(b,U,Y){let G=vt.get(b);G.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),vt.get(b.texture).__webglTexture=U,vt.get(b.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:Y,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,U){let Y=vt.get(b);Y.__webglFramebuffer=U,Y.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(b,U=0,Y=0){j=b,V=U,O=Y;let G=null,X=!1,St=!1;if(b){let yt=vt.get(b);if(yt.__useDefaultFramebuffer!==void 0){$.bindFramebuffer(F.FRAMEBUFFER,yt.__webglFramebuffer),et.copy(b.viewport),Mt.copy(b.scissor),Ft=b.scissorTest,$.viewport(et),$.scissor(Mt),$.setScissorTest(Ft),H=-1;return}else if(yt.__webglFramebuffer===void 0)Bt.setupRenderTarget(b);else if(yt.__hasExternalTextures)Bt.rebindTextures(b,vt.get(b.texture).__webglTexture,vt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let qt=b.depthTexture;if(yt.__boundDepthTexture!==qt){if(qt!==null&&vt.has(qt)&&(b.width!==qt.image.width||b.height!==qt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Bt.setupDepthRenderbuffer(b)}}let Et=b.texture;(Et.isData3DTexture||Et.isDataArrayTexture||Et.isCompressedArrayTexture)&&(St=!0);let Ot=vt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ot[U])?G=Ot[U][Y]:G=Ot[U],X=!0):b.samples>0&&Bt.useMultisampledRTT(b)===!1?G=vt.get(b).__webglMultisampledFramebuffer:Array.isArray(Ot)?G=Ot[Y]:G=Ot,et.copy(b.viewport),Mt.copy(b.scissor),Ft=b.scissorTest}else et.copy(At).multiplyScalar(ut).floor(),Mt.copy(Gt).multiplyScalar(ut).floor(),Ft=Lt;if(Y!==0&&(G=B),$.bindFramebuffer(F.FRAMEBUFFER,G)&&$.drawBuffers(b,G),$.viewport(et),$.scissor(Mt),$.setScissorTest(Ft),X){let yt=vt.get(b.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+U,yt.__webglTexture,Y)}else if(St){let yt=U;for(let Et=0;Et<b.textures.length;Et++){let Ot=vt.get(b.textures[Et]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Et,Ot.__webglTexture,Y,yt)}}else if(b!==null&&Y!==0){let yt=vt.get(b.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,yt.__webglTexture,Y)}H=-1};function wr(b){let U=vt.get(b);return(U.__readFormat!==b.format||U.__readType!==b.type)&&(U.__readFormat=b.format,U.__readType=b.type,U.__formatReadable=Vt.textureFormatReadable(b.format),U.__typeReadable=Vt.textureTypeReadable(b.type)),U}this.readRenderTargetPixels=function(b,U,Y,G,X,St,It,yt=0){if(!(b&&b.isWebGLRenderTarget)){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=vt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&It!==void 0&&(Et=Et[It],Array.isArray(Et)&&(Et=Et[0])),Et){$.bindFramebuffer(F.FRAMEBUFFER,Et);try{let Ot=b.textures[yt],qt=Ot.format,re=Ot.type;b.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+yt);let Dt=wr(Ot);if(Dt.__formatReadable===!1){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Dt.__typeReadable===!1){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=b.width-G&&Y>=0&&Y<=b.height-X&&F.readPixels(U,Y,G,X,ct.convert(qt),ct.convert(re),St)}finally{let Ot=j!==null?vt.get(j).__webglFramebuffer:null;$.bindFramebuffer(F.FRAMEBUFFER,Ot)}}},this.readRenderTargetPixelsAsync=async function(b,U,Y,G,X,St,It,yt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Et=vt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&It!==void 0&&(Et=Et[It],Array.isArray(Et)&&(Et=Et[0])),Et)if(U>=0&&U<=b.width-G&&Y>=0&&Y<=b.height-X){$.bindFramebuffer(F.FRAMEBUFFER,Et);let Ot=b.textures[yt],qt=Ot.format,re=Ot.type;b.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+yt);let Dt=wr(Ot);if(Dt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Dt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let se=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,se),F.bufferData(F.PIXEL_PACK_BUFFER,St.byteLength,F.STREAM_READ),F.readPixels(U,Y,G,X,ct.convert(qt),ct.convert(re),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let Ze=j!==null?vt.get(j).__webglFramebuffer:null;$.bindFramebuffer(F.FRAMEBUFFER,Ze);let Ae=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Bp(F,Ae,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,se),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,St),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(se),F.deleteSync(Ae),St}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,U=null,Y=0){let G=Math.pow(2,-Y),X=Math.floor(b.image.width*G),St=Math.floor(b.image.height*G),It=U!==null?U.x:0,yt=U!==null?U.y:0;Bt.setTexture2D(b,0),F.copyTexSubImage2D(F.TEXTURE_2D,Y,0,0,It,yt,X,St),$.unbindTexture()},this.copyTextureToTexture=function(b,U,Y=null,G=null,X=0,St=0){let It,yt,Et,Ot,qt,re,Dt,se,Ze,Ae=b.isCompressedTexture?b.mipmaps[St]:b.image;if(Y!==null)It=Y.max.x-Y.min.x,yt=Y.max.y-Y.min.y,Et=Y.isBox3?Y.max.z-Y.min.z:1,Ot=Y.min.x,qt=Y.min.y,re=Y.isBox3?Y.min.z:0;else{let fe=Math.pow(2,-X);It=Math.floor(Ae.width*fe),yt=Math.floor(Ae.height*fe),b.isDataArrayTexture?Et=Ae.depth:b.isData3DTexture?Et=Math.floor(Ae.depth*fe):Et=1,Ot=0,qt=0,re=0}G!==null?(Dt=G.x,se=G.y,Ze=G.z):(Dt=0,se=0,Ze=0);let Me=ct.convert(U.format),yn=ct.convert(U.type),Nt;U.isData3DTexture?(Bt.setTexture3D(U,0),Nt=F.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Bt.setTexture2DArray(U,0),Nt=F.TEXTURE_2D_ARRAY):(Bt.setTexture2D(U,0),Nt=F.TEXTURE_2D),$.activeTexture(F.TEXTURE0),$.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,U.flipY),$.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),$.pixelStorei(F.UNPACK_ALIGNMENT,U.unpackAlignment);let Nn=$.getParameter(F.UNPACK_ROW_LENGTH),pe=$.getParameter(F.UNPACK_IMAGE_HEIGHT),jr=$.getParameter(F.UNPACK_SKIP_PIXELS),Sn=$.getParameter(F.UNPACK_SKIP_ROWS),cl=$.getParameter(F.UNPACK_SKIP_IMAGES);$.pixelStorei(F.UNPACK_ROW_LENGTH,Ae.width),$.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ae.height),$.pixelStorei(F.UNPACK_SKIP_PIXELS,Ot),$.pixelStorei(F.UNPACK_SKIP_ROWS,qt),$.pixelStorei(F.UNPACK_SKIP_IMAGES,re);let Er=b.isDataArrayTexture||b.isData3DTexture,ts=U.isDataArrayTexture||U.isData3DTexture;if(b.isDepthTexture){let fe=vt.get(b),pn=vt.get(U),Mi=vt.get(fe.__renderTarget),Ue=vt.get(pn.__renderTarget);$.bindFramebuffer(F.READ_FRAMEBUFFER,Mi.__webglFramebuffer),$.bindFramebuffer(F.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let an=0;an<Et;an++)Er&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,vt.get(b).__webglTexture,X,re+an),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,vt.get(U).__webglTexture,St,Ze+an)),F.blitFramebuffer(Ot,qt,Ot+It,qt+yt,Dt,se,Dt+It,se+yt,F.DEPTH_BUFFER_BIT,F.NEAREST);$.bindFramebuffer(F.READ_FRAMEBUFFER,null),$.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(X!==0||b.isRenderTargetTexture||vt.has(b)){let fe=vt.get(b),pn=vt.get(U);$.bindFramebuffer(F.READ_FRAMEBUFFER,I),$.bindFramebuffer(F.DRAW_FRAMEBUFFER,z);for(let Mi=0;Mi<Et;Mi++)Er?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,fe.__webglTexture,X,re+Mi):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,fe.__webglTexture,X),ts?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,pn.__webglTexture,St,Ze+Mi):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,pn.__webglTexture,St),X!==0?F.blitFramebuffer(Ot,qt,Ot+It,qt+yt,Dt,se,Dt+It,se+yt,F.COLOR_BUFFER_BIT,F.NEAREST):ts?F.copyTexSubImage3D(Nt,St,Dt,se,Ze+Mi,Ot,qt,It,yt):F.copyTexSubImage2D(Nt,St,Dt,se,Ot,qt,It,yt);$.bindFramebuffer(F.READ_FRAMEBUFFER,null),$.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else ts?b.isDataTexture||b.isData3DTexture?F.texSubImage3D(Nt,St,Dt,se,Ze,It,yt,Et,Me,yn,Ae.data):U.isCompressedArrayTexture?F.compressedTexSubImage3D(Nt,St,Dt,se,Ze,It,yt,Et,Me,Ae.data):F.texSubImage3D(Nt,St,Dt,se,Ze,It,yt,Et,Me,yn,Ae):b.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,St,Dt,se,It,yt,Me,yn,Ae.data):b.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,St,Dt,se,Ae.width,Ae.height,Me,Ae.data):F.texSubImage2D(F.TEXTURE_2D,St,Dt,se,It,yt,Me,yn,Ae);$.pixelStorei(F.UNPACK_ROW_LENGTH,Nn),$.pixelStorei(F.UNPACK_IMAGE_HEIGHT,pe),$.pixelStorei(F.UNPACK_SKIP_PIXELS,jr),$.pixelStorei(F.UNPACK_SKIP_ROWS,Sn),$.pixelStorei(F.UNPACK_SKIP_IMAGES,cl),St===0&&U.generateMipmaps===!0&&U.mipmapsAutoUpdate===!0&&F.generateMipmap(Nt),$.unbindTexture()},this.initRenderTarget=function(b){vt.get(b).__webglFramebuffer===void 0&&Bt.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Bt.setTextureCube(b,0):b.isData3DTexture?Bt.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Bt.setTexture2DArray(b,0):Bt.setTexture2D(b,0),$.unbindTexture()},this.resetState=function(){V=0,O=0,j=null,$.reset(),mt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ae._getDrawingBufferColorSpace(t),e.unpackColorSpace=ae._getUnpackColorSpace()}}});function mi(r,t,e,n,i,s){let a=2*Math.PI*i/4,o=Math.max(s-2*i,0),l=Math.PI/4;Ro.copy(t),Ro[n]=0,Ro.normalize();let c=.5*a/(a+o),h=1-Ro.angleTo(r)/l;return Math.sign(Ro[e])===1?h*c:o/(a+o)+c+c*(1-h)}var Ro,_s,bm=nr(()=>{eh();Ro=new q;_s=class r extends wn{constructor(t=1,e=1,n=1,i=2,s=.1){let a=i*2+1;if(s=Math.min(t/2,e/2,n/2,s),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:i,radius:s},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let l=new q,c=new q,h=new q(t,e,n).divideScalar(2).subScalar(s),d=this.attributes.position.array,f=this.attributes.normal.array,u=this.attributes.uv.array,g=d.length/6,_=new q,p=.5/a;for(let m=0,v=0;m<d.length;m+=3,v+=2)switch(l.fromArray(d,m),c.copy(l),c.x-=Math.sign(c.x)*p,c.y-=Math.sign(c.y)*p,c.z-=Math.sign(c.z)*p,c.normalize(),d[m+0]=h.x*Math.sign(l.x)+c.x*s,d[m+1]=h.y*Math.sign(l.y)+c.y*s,d[m+2]=h.z*Math.sign(l.z)+c.z*s,f[m+0]=c.x,f[m+1]=c.y,f[m+2]=c.z,Math.floor(m/g)){case 0:_.set(1,0,0),u[v+0]=mi(_,c,"z","y",s,n),u[v+1]=1-mi(_,c,"y","z",s,e);break;case 1:_.set(-1,0,0),u[v+0]=1-mi(_,c,"z","y",s,n),u[v+1]=1-mi(_,c,"y","z",s,e);break;case 2:_.set(0,1,0),u[v+0]=1-mi(_,c,"x","z",s,t),u[v+1]=mi(_,c,"z","x",s,n);break;case 3:_.set(0,-1,0),u[v+0]=1-mi(_,c,"x","z",s,t),u[v+1]=1-mi(_,c,"z","x",s,n);break;case 4:_.set(0,0,1),u[v+0]=1-mi(_,c,"x","y",s,t),u[v+1]=1-mi(_,c,"y","x",s,e);break;case 5:_.set(0,0,-1),u[v+0]=mi(_,c,"x","y",s,t),u[v+1]=1-mi(_,c,"y","x",s,e);break}}static fromJSON(t){return new r(t.width,t.height,t.depth,t.segments,t.radius)}}});function pa(r){return new ao({color:0,emissive:16777215,emissiveIntensity:r})}var nh,Tm=nr(()=>{eh();nh=class extends as{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new wn;t.deleteAttribute("uv");let e=new Hi({side:mn}),n=new Hi,i=new uo(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let s=new Re(t,e);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);let a=new ja(t,n,6),o=new un;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new Re(t,pa(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new Re(t,pa(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new Re(t,pa(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let d=new Re(t,pa(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let f=new Re(t,pa(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);let u=new Re(t,pa(100));u.position.set(0,20,0),u.scale.set(1,.1,1),this.add(u)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}}});function mr(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Dm(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}var Jn,Uo,Rf,gn,De,_i,ve,Sf,KS,QS,Nm,jS,tM,rn,Ve,_r,ph,$i,Zn,Pf,ih,Um,Cn,eM,nM,wm,If,Ss,pf,Lf,iM,rM,Oe,Zi,Mf,Df,si,oh,Fm,Om,mh,Fo,Bm,Oo,sM,rh,aM,Nf,Gr,bf,zm,qn,mf,Em,sh,Uf,Ff,Vr,Of,On,He,Fe,Ms,oM,lh,Bf,km,Gm,Vm,ai,lM,ga,Am,ch,Lo,cM,Hm,gh,Hr,xs,hM,Tf,uM,Cm,_a,hh,_h,xh,Wm,Ji,Xm,qm,fM,uh,dM,pM,xa,Rm,mM,gi,Do,Wr,Go,_n,gM,wf,Ym,_M,xi,Ef,Zm,Jm,Af,$m,Km,xM,vM,yM,Qm,SM,MM,ya,jm,bM,Pm,ri,Po,ma,tg,eg,Te,Io,gf,ng,ig,Im,gr,TM,zf,Bo,Yn,va,ce,wM,EM,AM,CM,RM,PM,vs,bs,rg,_f,xf,kf,zo,An,IM,Gf,LM,Vf,kr,Cf,Hf,DM,NM,UM,No,fh,sg,Xe,Wf,ag,FM,OM,vh,og,BM,Xf,qf,zM,kM,GM,Yf,Bn,ys,ah,VM,Lm,HM,vf,ko,lg,WM,dh,XM,qM,yf,Rn,YM,ZM,JM,$M,KM,QM,jM,tb,eb,nb,ib,rb,sb,ab,ob,lb,cb,hb,Zf=nr(()=>{Jn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Uo={duration:.5,overwrite:!1,delay:0},_i=1e8,ve=1/_i,Sf=Math.PI*2,KS=Sf/4,QS=0,Nm=Math.sqrt,jS=Math.cos,tM=Math.sin,rn=function(t){return typeof t=="string"},Ve=function(t){return typeof t=="function"},_r=function(t){return typeof t=="number"},ph=function(t){return typeof t=="undefined"},$i=function(t){return typeof t=="object"},Zn=function(t){return t!==!1},Pf=function(){return typeof window!="undefined"},ih=function(t){return Ve(t)||rn(t)},Um=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Cn=Array.isArray,eM=/random\([^)]+\)/g,nM=/,\s*/g,wm=/(?:-?\.?\d|\.)+/gi,If=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ss=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,pf=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Lf=/[+-]=-?[.\d]+/,iM=/[^,'"\[\]\s]+/gi,rM=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,si={},oh={},Om=function(t){return(oh=ga(t,si))&&Rn},mh=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Fo=function(t,e){return!e&&console.warn(t)},Bm=function(t,e){return t&&(si[t]=e)&&oh&&(oh[t]=e)||si},Oo=function(){return 0},sM={suppressEvents:!0,isStart:!0,kill:!1},rh={suppressEvents:!0,kill:!1},aM={suppressEvents:!0},Nf={},Gr=[],bf={},qn={},mf={},Em=30,sh=[],Uf="",Ff=function(t){var e=t[0],n,i;if($i(e)||Ve(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=sh.length;i--&&!sh[i].targetTest(e););n=sh[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new kf(t[i],n)))||t.splice(i,1);return t},Vr=function(t){return t._gsap||Ff(xi(t))[0]._gsap},Of=function(t,e,n){return(n=t[e])&&Ve(n)?t[e]():ph(n)&&t.getAttribute&&t.getAttribute(e)||n},On=function(t,e){return(t=t.split(",")).forEach(e)||t},He=function(t){return Math.round(t*1e5)/1e5||0},Fe=function(t){return Math.round(t*1e7)/1e7||0},Ms=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},oM=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},lh=function(){var t=Gr.length,e=Gr.slice(0),n,i;for(bf={},Gr.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Bf=function(t){return!!(t._initted||t._startAt||t.add)},km=function(t,e,n,i){Gr.length&&!gn&&lh(),t.render(e,n,i||!!(gn&&e<0&&Bf(t))),Gr.length&&!gn&&lh()},Gm=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(iM).length<2?e:rn(t)?t.trim():t},Vm=function(t){return t},ai=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},lM=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},ga=function(t,e){for(var n in e)t[n]=e[n];return t},Am=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=$i(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},ch=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},Lo=function(t){var e=t.parent||Oe,n=t.keyframes?lM(Cn(t.keyframes)):ai;if(Zn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},cM=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},Hm=function(t,e,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=t[i],o;if(s)for(o=e[s];a&&a[s]>o;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=a,e.parent=e._dp=t,e},gh=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,a=e._next;s?s._next=a:t[n]===e&&(t[n]=a),a?a._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},Hr=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},xs=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},hM=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Tf=function(t,e,n,i){return t._startAt&&(gn?t._startAt.revert(rh):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},uM=function r(t){return!t||t._ts&&r(t.parent)},Cm=function(t){return t._repeat?_a(t._tTime,t=t.duration()+t._rDelay)*t:0},_a=function(t,e){var n=Math.floor(t=Fe(t/e));return t&&n===t?n-1:n},hh=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},_h=function(t){return t._end=Fe(t._start+(t._tDur/Math.abs(t._ts||t._rts||ve)||0))},xh=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Fe(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),_h(t),n._dirty||xs(n,t)),t},Wm=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=hh(t.rawTime(),e),(!e._dur||Go(0,e.totalDuration(),n)-e._tTime>ve)&&e.render(n,!0)),xs(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-ve}},Ji=function(t,e,n,i){return e.parent&&Hr(e),e._start=Fe((_r(n)?n:!n&&uh(e)&&(!t._last||t._last._start>=t._time)?t._last?t._last._start:t._time:n||t!==Oe?gi(t,n,e):t._time)+e._delay),e._end=Fe(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Hm(t,e,"_first","_last",t._sort?"_start":0),uh(e)||(t._recent=e),i||Wm(t,e),t._ts<0&&xh(t,t._tTime),t},Xm=function(t,e){return(si.ScrollTrigger||mh("scrollTrigger",e))&&si.ScrollTrigger.create(e,t)},qm=function(t,e,n,i,s){if(Hf(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!gn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&zm!==Yn.frame)return Gr.push(t),t._lazy=[s,i],1},fM=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},uh=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},dM=function(t,e,n,i){var s=t.ratio,a=e<0||!e&&(!t._start&&fM(t)&&!(!t._initted&&uh(t))||(t._ts<0||t._dp._ts<0)&&!uh(t))?0:1,o=t._rDelay,l=0,c,h,d;if(o&&t._repeat&&(l=Go(0,t._tDur,e),h=_a(l,o),t._yoyo&&h&1&&(a=1-a),h!==_a(t._tTime,o)&&(s=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==s||gn||i||t._zTime===ve||!e&&t._zTime){if(!t._initted&&qm(t,e,i,n,l))return;for(d=t._zTime,t._zTime=e||(n?ve:0),n||(n=e&&!d),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=l,c=t._pt;c;)c.r(a,c.d),c=c._next;e<0&&Tf(t,e,n,!0),t._onUpdate&&!n&&ri(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&ri(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&Hr(t,1),!n&&!gn&&(ri(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},pM=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},xa=function(t,e,n,i){var s=t._repeat,a=Fe(e)||0,o=t._tTime/t._tDur;return o&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=s?s<0?1e10:Fe(a*(s+1)+t._rDelay*s):a,o>0&&!i&&xh(t,t._tTime=t._tDur*o),t.parent&&_h(t),n||xs(t.parent,t),t},Rm=function(t){return t instanceof An?xs(t):xa(t,t._dur)},mM={_start:0,endTime:Oo,totalDuration:Oo},gi=function r(t,e,n){var i=t.labels,s=t._recent||mM,a=t.duration()>=_i?s.endTime(!1):t._dur,o,l,c;return rn(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",o=e.indexOf("="),l==="<"||l===">"?(o>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(e in i||(i[e]=a),i[e]):(l=parseFloat(e.charAt(o-1)+e.substr(o+1)),c&&n&&(l=l/100*(Cn(n)?n[0]:n).totalDuration()),o>1?r(t,e.substr(0,o-1),n)+l:a+l)):e==null?a:+e},Do=function(t,e,n){var i=_r(e[1]),s=(i?2:1)+(t<2?0:1),a=e[s],o,l;if(i&&(a.duration=e[1]),a.parent=n,t){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Zn(l.vars.inherit)&&l.parent;a.immediateRender=Zn(o.immediateRender),t<2?a.runBackwards=1:a.startAt=e[s-1]}return new Xe(e[0],a,e[s+1])},Wr=function(t,e){return t||t===0?e(t):e},Go=function(t,e,n){return n<t?t:n>e?e:n},_n=function(t,e){return!rn(t)||!(e=rM.exec(t))?"":e[1]},gM=function(t,e,n){return Wr(n,function(i){return Go(t,e,i)})},wf=[].slice,Ym=function(t,e){return t&&$i(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&$i(t[0]))&&!t.nodeType&&t!==Zi},_M=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return rn(i)&&!e||Ym(i,1)?(s=n).push.apply(s,xi(i)):n.push(i)})||n},xi=function(t,e,n){return De&&!e&&De.selector?De.selector(t):rn(t)&&!n&&(Mf||!va())?wf.call((e||Df).querySelectorAll(t),0):Cn(t)?_M(t,n):Ym(t)?wf.call(t,0):t?[t]:[]},Ef=function(t){return t=xi(t)[0]||Fo("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return xi(e,n.querySelectorAll?n:n===t?Fo("Invalid scope")||Df.createElement("div"):t)}},Zm=function(t){return t.sort(function(){return .5-Math.random()})},Jm=function(t){if(Ve(t))return t;var e=$i(t)?t:{each:t},n=vs(e.ease),i=e.from||0,s=parseFloat(e.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=e.axis,h=i,d=i;return rn(i)?h=d={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(h=i[0],d=i[1]),function(f,u,g){var _=(g||e).length,p=a[_],m,v,w,y,T,E,x,M,P;if(!p){if(P=e.grid==="auto"?0:(e.grid||[1,_i])[1],!P){for(x=-_i;x<(x=g[P++].getBoundingClientRect().left)&&P<_;);P<_&&P--}for(p=a[_]=[],m=l?Math.min(P,_)*h-.5:i%P,v=P===_i?0:l?_*d/P-.5:i/P|0,x=0,M=_i,E=0;E<_;E++)w=E%P-m,y=v-(E/P|0),p[E]=T=c?Math.abs(c==="y"?y:w):Nm(w*w+y*y),T>x&&(x=T),T<M&&(M=T);i==="random"&&Zm(p),p.max=x-M,p.min=M,p.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(P>_?_-1:c?c==="y"?_/P:P:Math.max(P,_/P))||0)*(i==="edges"?-1:1),p.b=_<0?s-_:s,p.u=_n(e.amount||e.each)||0,n=n&&_<0?PM(n):n}return _=(p[f]-p.min)/p.max||0,Fe(p.b+(n?n(_):_)*p.v)+p.u}},Af=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=Fe(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(_r(n)?0:_n(n))}},$m=function(t,e){var n=Cn(t),i,s;return!n&&$i(t)&&(i=n=t.radius||_i,t.values?(t=xi(t.values),(s=!_r(t[0]))&&(i*=i)):t=Af(t.increment)),Wr(e,n?Ve(t)?function(a){return s=t(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=_i,h=0,d=t.length,f,u;d--;)s?(f=t[d].x-o,u=t[d].y-l,f=f*f+u*u):f=Math.abs(t[d]-o),f<c&&(c=f,h=d);return h=!i||c<=i?t[h]:a,s||h===a||_r(a)?h:h+_n(a)}:Af(t))},Km=function(t,e,n,i){return Wr(Cn(t)?!e:n===!0?!!(n=0):!i,function(){return Cn(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},xM=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,a){return a(s)},i)}},vM=function(t,e){return function(n){return t(parseFloat(n))+(e||_n(n))}},yM=function(t,e,n){return jm(t,e,0,1,n)},Qm=function(t,e,n){return Wr(n,function(i){return t[~~e(i)]})},SM=function r(t,e,n){var i=e-t;return Cn(t)?Qm(t,r(0,t.length),e):Wr(n,function(s){return(i+(s-t)%i)%i+t})},MM=function r(t,e,n){var i=e-t,s=i*2;return Cn(t)?Qm(t,r(0,t.length-1),e):Wr(n,function(a){return a=(s+(a-t)%s)%s||0,t+(a>i?s-a:a)})},ya=function(t){return t.replace(eM,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(nM);return Km(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},jm=function(t,e,n,i,s){var a=e-t,o=i-n;return Wr(s,function(l){return n+((l-t)/a*o||0)})},bM=function r(t,e,n,i){var s=isNaN(t+e)?0:function(u){return(1-u)*t+u*e};if(!s){var a=rn(t),o={},l,c,h,d,f;if(n===!0&&(i=1)&&(n=null),a)t={p:t},e={p:e};else if(Cn(t)&&!Cn(e)){for(h=[],d=t.length,f=d-2,c=1;c<d;c++)h.push(r(t[c-1],t[c]));d--,s=function(g){g*=d;var _=Math.min(f,~~g);return h[_](g-_)},n=e}else i||(t=ga(Cn(t)?[]:{},t));if(!h){for(l in e)Gf.call(o,t,l,"get",e[l]);s=function(g){return qf(g,o)||(a?t.p:t)}}}return Wr(n,s)},Pm=function(t,e,n){var i=t.labels,s=_i,a,o,l;for(a in i)o=i[a]-e,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},ri=function(t,e,n){var i=t.vars,s=i[e],a=De,o=t._ctx,l,c,h;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&Gr.length&&lh(),o&&(De=o),h=l?s.apply(c,l):s.call(c),De=a,h},Po=function(t){return Hr(t),t.scrollTrigger&&t.scrollTrigger.kill(!!gn),t.progress()<1&&ri(t,"onInterrupt"),t},tg=[],eg=function(t){if(t)if(t=!t.name&&t.default||t,Pf()||t.headless){var e=t.name,n=Ve(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:Oo,render:qf,add:Gf,kill:kM,modifier:zM,rawVars:0},a={targetTest:0,get:0,getSetter:vh,aliases:{},register:0};if(va(),t!==i){if(qn[e])return;ai(i,ai(ch(t,s),a)),ga(i.prototype,ga(s,ch(t,a))),qn[i.prop=e]=i,t.targetTest&&(sh.push(i),Nf[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Bm(e,i),t.register&&t.register(Rn,i,Bn)}else tg.push(t)},Te=255,Io={aqua:[0,Te,Te],lime:[0,Te,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Te],navy:[0,0,128],white:[Te,Te,Te],olive:[128,128,0],yellow:[Te,Te,0],orange:[Te,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Te,0,0],pink:[Te,192,203],cyan:[0,Te,Te],transparent:[Te,Te,Te,0]},gf=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Te+.5|0},ng=function(t,e,n){var i=t?_r(t)?[t>>16,t>>8&Te,t&Te]:0:Io.black,s,a,o,l,c,h,d,f,u,g;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Io[t])i=Io[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),a=t.charAt(2),o=t.charAt(3),t="#"+s+s+a+a+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&Te,i&Te,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&Te,t&Te]}else if(t.substr(0,3)==="hsl"){if(i=g=t.match(wm),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,a=h<=.5?h*(c+1):h+c-h*c,s=h*2-a,i.length>3&&(i[3]*=1),i[0]=gf(l+1/3,s,a),i[1]=gf(l,s,a),i[2]=gf(l-1/3,s,a);else if(~t.indexOf("="))return i=t.match(If),n&&i.length<4&&(i[3]=1),i}else i=t.match(wm)||Io.transparent;i=i.map(Number)}return e&&!g&&(s=i[0]/Te,a=i[1]/Te,o=i[2]/Te,d=Math.max(s,a,o),f=Math.min(s,a,o),h=(d+f)/2,d===f?l=c=0:(u=d-f,c=h>.5?u/(2-d-f):u/(d+f),l=d===s?(a-o)/u+(a<o?6:0):d===a?(o-s)/u+2:(s-a)/u+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},ig=function(t){var e=[],n=[],i=-1;return t.split(gr).forEach(function(s){var a=s.match(Ss)||[];e.push.apply(e,a),n.push(i+=a.length+1)}),e.c=n,e},Im=function(t,e,n){var i="",s=(t+i).match(gr),a=e?"hsla(":"rgba(",o=0,l,c,h,d;if(!s)return t;if(s=s.map(function(f){return(f=ng(f,e,1))&&a+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(h=ig(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(gr,"1").split(Ss),d=c.length-1;o<d;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=t.split(gr),d=c.length-1;o<d;o++)i+=c[o]+s[o];return i+c[d]},gr=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Io)r+="|"+t+"\\b";return new RegExp(r+")","gi")})(),TM=/hsl[a]?\(/,zf=function(t){var e=t.join(" "),n;if(gr.lastIndex=0,gr.test(e))return n=TM.test(e),t[1]=Im(t[1],n),t[0]=Im(t[0],n,ig(t[1])),!0},Yn=(function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,h,d,f,u,g=function _(p){var m=r()-i,v=p===!0,w,y,T,E;if((m>t||m<0)&&(n+=m-e),i+=m,T=i-n,w=T-a,(w>0||v)&&(E=++d.frame,f=T-d.time*1e3,d.time=T=T/1e3,a+=w+(w>=s?0:s-w),y=1),v||(l=c(_)),y)for(u=0;u<o.length;u++)o[u](T,f,E,p)};return d={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){Fm&&(!Mf&&Pf()&&(Zi=Mf=window,Df=Zi.document||{},si.gsap=Rn,(Zi.gsapVersions||(Zi.gsapVersions=[])).push(Rn.version),Om(oh||Zi.GreenSockGlobals||!Zi.gsap&&Zi||{}),tg.forEach(eg)),h=typeof requestAnimationFrame!="undefined"&&requestAnimationFrame,l&&d.sleep(),c=h||function(p){return setTimeout(p,a-d.time*1e3+1|0)},Bo=1,g(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),Bo=0,c=Oo},lagSmoothing:function(p,m){t=p||1/0,e=Math.min(m||33,t)},fps:function(p){s=1e3/(p||240),a=d.time*1e3+s},add:function(p,m,v){var w=m?function(y,T,E,x){p(y,T,E,x),d.remove(w)}:p;return d.remove(p),o[v?"unshift":"push"](w),va(),w},remove:function(p,m){~(m=o.indexOf(p))&&o.splice(m,1)&&u>=m&&u--},_listeners:o},d})(),va=function(){return!Bo&&Yn.wake()},ce={},wM=/^[\d.\-M][\d.\-,\s]/,EM=/["']/g,AM=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),e[i]=isNaN(c)?c.replace(EM,"").trim():+c,i=l.substr(o+1).trim();return e},CM=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},RM=function(t){var e=(t+"").split("("),n=ce[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[AM(e[1])]:CM(t).split(",").map(Gm)):ce._CE&&wM.test(t)?ce._CE("",t):n},PM=function(t){return function(e){return 1-t(1-e)}},vs=function(t,e){return t&&(Ve(t)?t:ce[t]||RM(t))||e},bs=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},a;return On(t,function(o){ce[o]=si[o]=s,ce[a=o.toLowerCase()]=n;for(var l in s)ce[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ce[o+"."+l]=s[l]}),s},rg=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},_f=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),a=s/Sf*(Math.asin(1/i)||0),o=function(h){return h===1?1:i*Math.pow(2,-10*h)*tM((h-a)*s)+1},l=t==="out"?o:t==="in"?function(c){return 1-o(1-c)}:rg(o);return s=Sf/s,l.config=function(c,h){return r(t,c,h)},l},xf=function r(t,e){e===void 0&&(e=1.70158);var n=function(a){return a?--a*a*((e+1)*a+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:rg(n);return i.config=function(s){return r(t,s)},i};On("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;bs(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});ce.Linear.easeNone=ce.none=ce.Linear.easeIn;bs("Elastic",_f("in"),_f("out"),_f());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(o){return o<e?r*o*o:o<n?r*Math.pow(o-1.5/t,2)+.75:o<i?r*(o-=2.25/t)*o+.9375:r*Math.pow(o-2.625/t,2)+.984375};bs("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);bs("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});bs("Circ",function(r){return-(Nm(1-r*r)-1)});bs("Sine",function(r){return r===1?1:-jS(r*KS)+1});bs("Back",xf("in"),xf("out"),xf());ce.SteppedEase=ce.steps=si.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,a=1-ve;return function(o){return((i*Go(0,a,o)|0)+s)*n}}};Uo.ease=ce["quad.out"];On("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Uf+=r+","+r+"Params,"});kf=function(t,e){this.id=QS++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Of,this.set=e?e.getSetter:vh},zo=(function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,xa(this,+e.duration,1,1),this.data=e.data,De&&(this._ctx=De,De.data.push(this)),Bo||Yn.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,xa(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(va(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(xh(this,n),!s._dp||s.parent||Wm(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Ji(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===ve||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),km(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Cm(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Cm(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?_a(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-ve?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?hh(this.parent._time,this):this._tTime,a=this._rts<0;this._rts=+n||0,this._ts=this._ps||n===-ve?0:this._rts;var o=this.totalDuration();return(a!==this._rts<0||s>0&&s<o)&&this.totalTime(Go(-Math.abs(this._delay),o,s),i!==!1),_h(this),hM(this)},t.paused=function(n){if(!arguments.length)return this._ps;if(this._ps!==n)if(this._ps=n,n)this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0;else{va(),this._ts=this._rts;var i=this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,s=this.progress()===1&&Math.abs(this._zTime)!==ve,a;if(s)for(this._tTime-=ve,a=this._first;a;){if(!a._dur&&a._zTime<0&&a._ts&&a._start<=i+ve){s=!1;break}a=a._next}this.totalTime(i,s)}return this},t.startTime=function(n){if(arguments.length){this._start=Fe(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Ji(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Zn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?hh(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=aM);var i=gn;return gn=n,Bf(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),gn=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Rm(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Rm(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(gi(this,n),Zn(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Zn(i)),this._dur||(this._zTime=-ve),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-ve:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-ve,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-ve)},t.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},t.then=function(n){var i=this,s=i._prom;return new Promise(function(a){var o=Ve(n)?n:Vm,l=function(){var h=i.then;i.then=null,s&&s(),Ve(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=h),a(o),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){Po(this)},r})();ai(zo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ve,_prom:0,_ps:!1,_rts:1});An=(function(r){Dm(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Zn(n.sortChildren),Oe&&Ji(n.parent||Oe,mr(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Xm(mr(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,a){return Do(0,arguments,this),this},e.from=function(i,s,a){return Do(1,arguments,this),this},e.fromTo=function(i,s,a,o){return Do(2,arguments,this),this},e.set=function(i,s,a){return s.duration=0,s.parent=this,Lo(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Xe(i,s,gi(this,a),1),this},e.call=function(i,s,a){return Ji(this,Xe.delayedCall(0,i,s),a)},e.staggerTo=function(i,s,a,o,l,c,h){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=h,a.parent=this,new Xe(i,a,gi(this,l)),this},e.staggerFrom=function(i,s,a,o,l,c,h){return a.runBackwards=1,Lo(a).immediateRender=Zn(a.immediateRender),this.staggerTo(i,s,a,o,l,c,h)},e.staggerFromTo=function(i,s,a,o,l,c,h,d){return o.startAt=a,Lo(o).immediateRender=Zn(o.immediateRender),this.staggerTo(i,s,o,l,c,h,d)},e.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:Fe(i),d=this._zTime<0!=i<0&&(this._initted||!c),f,u,g,_,p,m,v,w,y,T,E,x;if(this!==Oe&&h>l&&i>=0&&(h=l),h!==this._tTime||a||d){if(o!==this._time&&c&&(h+=this._time-o,i+=this._time-o),f=h,y=this._start,w=this._ts,m=!w,d&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(E=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,a);if(f=Fe(h%p),h===l?(_=this._repeat,f=c):(T=Fe(h/p),_=~~T,_&&_===T&&(f=c,_--),f>c&&(f=c)),T=_a(this._tTime,p),!o&&this._tTime&&T!==_&&this._tTime-T*p-this._dur<=0&&(T=_),E&&_&1&&(f=c-f,x=1),_!==T&&!this._lock){var M=E&&T&1,P=M===(E&&_&1);if(_<T&&(M=!M),o=M?0:h%c?c:h,this._lock=1,this.render(o||(x?0:Fe(_*p)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&ri(this,"onRepeat"),this.vars.repeatRefresh&&!x&&(this.invalidate()._lock=1,T=_),o&&o!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,P&&(this._lock=2,o=M?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!x&&this.invalidate()),this._lock=0,!this._ts&&!m)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=pM(this,Fe(o),Fe(f)),v&&(h-=f-(f=v._start))),this._tTime=h,this._time=f,this._act=!!w,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&h&&c&&!s&&!T&&(ri(this,"onStart"),this._tTime!==h))return this;if(f>=o&&i>=0)for(u=this._first;u;){if(g=u._next,(u._act||f>=u._start)&&u._ts&&v!==u){if(u.parent!==this)return this.render(i,s,a);if(u.render(u._ts>0?(f-u._start)*u._ts:(u._dirty?u.totalDuration():u._tDur)+(f-u._start)*u._ts,s,a),f!==this._time||!this._ts&&!m){v=0,g&&(h+=this._zTime=-ve);break}}u=g}else{u=this._last;for(var C=i<0?i:f;u;){if(g=u._prev,(u._act||C<=u._end)&&u._ts&&v!==u){if(u.parent!==this)return this.render(i,s,a);if(u.render(u._ts>0?(C-u._start)*u._ts:(u._dirty?u.totalDuration():u._tDur)+(C-u._start)*u._ts,s,a||gn&&Bf(u)),f!==this._time||!this._ts&&!m){v=0,g&&(h+=this._zTime=C?-ve:ve);break}}u=g}}if(v&&!s&&(this.pause(),v.render(f>=o?0:-ve)._zTime=f>=o?1:-1,this._ts))return this._start=y,_h(this),this.render(i,s,a);this._onUpdate&&!s&&ri(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&o)&&(y===this._start||Math.abs(w)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Hr(this,1),!s&&!(i<0&&!o)&&(h||o||!l)&&(ri(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var a=this;if(_r(s)||(s=gi(this,s,i)),!(i instanceof zo)){if(Cn(i))return i.forEach(function(o){return a.add(o,s)}),this;if(rn(i))return this.addLabel(i,s);if(Ve(i))i=Xe.delayedCall(0,i);else return this}return this!==i?Ji(this,i,s):this},e.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-_i);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Xe?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},e.remove=function(i){return rn(i)?this.removeLabel(i):Ve(i)?this.killTweensOf(i):(i.parent===this&&gh(this,i),i===this._recent&&(this._recent=this._last),xs(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Fe(Yn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=gi(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,a){var o=Xe.delayedCall(0,s||Oo,a);return o.data="isPause",this._hasPause=1,Ji(this,o,gi(this,i))},e.removePause=function(i){var s=this._first;for(i=gi(this,i);s;)s._start===i&&s.data==="isPause"&&Hr(s),s=s._next},e.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)kr!==o[l]&&o[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var a=[],o=xi(i),l=this._first,c=_r(s),h;l;)l instanceof Xe?oM(l._targets,o)&&(c?(!kr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(h=l.getTweensOf(o,s)).length&&a.push.apply(a,h),l=l._next;return a},e.tweenTo=function(i,s){s=s||{};var a=this,o=gi(a,i),l=s,c=l.startAt,h=l.onStart,d=l.onStartParams,f=l.immediateRender,u,g=Xe.to(a,ai({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||ve,onStart:function(){if(a.pause(),!u){var p=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==p&&xa(g,p,0,1).render(g._time,!0,!0),u=1}h&&h.apply(g,d||[])}},s));return f?g.render(0):g},e.tweenFromTo=function(i,s,a){return this.tweenTo(s,ai({startAt:{time:gi(this,i)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Pm(this,gi(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Pm(this,gi(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+ve)},e.shiftChildren=function(i,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=Fe(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return xs(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),xs(this)},e.totalDuration=function(i){var s=0,a=this,o=a._last,l=_i,c,h,d;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(d=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),h=o._start,h>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Ji(a,o,h-o._delay,1)._lock=0):l=h,h<0&&o._ts&&(s-=h,(!d&&!a._dp||d&&d.smoothChildTiming)&&(a._start+=Fe(h/a._ts),a._time-=h,a._tTime-=h),a.shiftChildren(-h,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;xa(a,a===Oe&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(i){if(Oe._ts&&(km(Oe,hh(i,Oe)),zm=Yn.frame),Yn.frame>=Em){Em+=Jn.autoSleep||120;var s=Oe._first;if((!s||!s._ts)&&Jn.autoSleep&&Yn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Yn.sleep()}}},t})(zo);ai(An.prototype,{_lock:0,_hasPause:0,_forcing:0});IM=function(t,e,n,i,s,a,o){var l=new Bn(this._pt,t,e,0,1,Xf,null,s),c=0,h=0,d,f,u,g,_,p,m,v;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=ya(i)),a&&(v=[n,i],a(v,t,e),n=v[0],i=v[1]),f=n.match(pf)||[];d=pf.exec(i);)g=d[0],_=i.substring(c,d.index),u?u=(u+1)%5:_.substr(-5)==="rgba("&&(u=1),g!==f[h++]&&(p=parseFloat(f[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:",",s:p,c:g.charAt(1)==="="?Ms(p,g)-p:parseFloat(g)-p,m:u&&u<4?Math.round:0},c=pf.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(Lf.test(i)||m)&&(l.e=0),this._pt=l,l},Gf=function(t,e,n,i,s,a,o,l,c,h){Ve(i)&&(i=i(s||0,t,a));var d=t[e],f=n!=="get"?n:Ve(d)?c?t[e.indexOf("set")||!Ve(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():d,u=Ve(d)?c?FM:ag:Wf,g;if(rn(i)&&(~i.indexOf("random(")&&(i=ya(i)),i.charAt(1)==="="&&(g=Ms(f,i)+(_n(f)||0),(g||g===0)&&(i=g))),!h||f!==i||Cf)return!isNaN(f*i)&&i!==""?(g=new Bn(this._pt,t,e,+f||0,i-(f||0),typeof d=="boolean"?BM:og,0,u),c&&(g.fp=c),o&&g.modifier(o,this,t),this._pt=g):(!d&&!(e in t)&&mh(e,i),IM.call(this,t,e,f,i,u,l||Jn.stringFilter,c))},LM=function(t,e,n,i,s){if(Ve(t)&&(t=No(t,s,e,n,i)),!$i(t)||t.style&&t.nodeType||Cn(t)||Um(t))return rn(t)?No(t,s,e,n,i):t;var a={},o;for(o in t)a[o]=No(t[o],s,e,n,i);return a},Vf=function(t,e,n,i,s,a){var o,l,c,h;if(qn[t]&&(o=new qn[t]).init(s,o.rawVars?e[t]:LM(e[t],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new Bn(n._pt,s,t,0,1,o.render,o,0,o.priority),n!==ma))for(c=n._ptLookup[n._targets.indexOf(s)],h=o._props.length;h--;)c[o._props[h]]=l;return o},Hf=function r(t,e,n){var i=t.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,d=i.yoyoEase,f=i.keyframes,u=i.autoRevert,g=t._dur,_=t._startAt,p=t._targets,m=t.parent,v=m&&m.data==="nested"?m.vars.targets:p,w=t._overwrite==="auto"&&!Rf,y=t.timeline,T=i.easeReverse||d,E,x,M,P,C,N,D,B,I,z,V,O,j;if(y&&(!f||!s)&&(s="none"),t._ease=vs(s,Uo.ease),t._rEase=T&&(vs(T)||t._ease),t._from=!y&&!!i.runBackwards,t._from&&(t.ratio=1),!y||f&&!i.stagger){if(B=p[0]?Vr(p[0]).harness:0,O=B&&i[B.prop],E=ch(i,Nf),_&&(_._zTime<0&&_.progress(1),e<0&&h&&o&&!u?_.render(-1,!0):_.revert(h&&g?rh:sM),_._lazy=0),a){if(Hr(t._startAt=Xe.set(p,ai({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!_&&Zn(l),startAt:null,delay:0,onUpdate:c&&function(){return ri(t,"onUpdate")},stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(gn||!o&&!u)&&t._startAt.revert(rh),o&&g&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&g&&!_){if(e&&(o=!1),M=ai({overwrite:!1,data:"isFromStart",lazy:o&&!_&&Zn(l),immediateRender:o,stagger:0,parent:m},E),O&&(M[B.prop]=O),Hr(t._startAt=Xe.set(p,M)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(gn?t._startAt.revert(rh):t._startAt.render(-1,!0)),t._zTime=e,!o)r(t._startAt,ve,ve);else if(!e)return}for(t._pt=t._ptCache=0,l=g&&Zn(l)||l&&!g,x=0;x<p.length;x++){if(C=p[x],D=C._gsap||Ff(p)[x]._gsap,t._ptLookup[x]=z={},bf[D.id]&&Gr.length&&lh(),V=v===p?x:v.indexOf(C),B&&(I=new B).init(C,O||E,t,V,v)!==!1&&(t._pt=P=new Bn(t._pt,C,I.name,0,1,I.render,I,0,I.priority),I._props.forEach(function(H){z[H]=P}),I.priority&&(N=1)),!B||O)for(M in E)qn[M]&&(I=Vf(M,E,t,V,C,v))?I.priority&&(N=1):z[M]=P=Gf.call(t,C,M,"get",E[M],V,v,0,i.stringFilter);t._op&&t._op[x]&&t.kill(C,t._op[x]),w&&t._pt&&(kr=t,Oe.killTweensOf(C,z,t.globalTime(e)),j=!t.parent,kr=0),t._pt&&l&&(bf[D.id]=1)}N&&Yf(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!j,f&&e<=0&&y.render(_i,!0,!0)},DM=function(t,e,n,i,s,a,o,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,d,f,u;if(!c)for(c=t._ptCache[e]=[],f=t._ptLookup,u=t._targets.length;u--;){if(h=f[u][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return Cf=1,t.vars[e]="+=0",Hf(t,o),Cf=0,l?Fo(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(u=c.length;u--;)d=c[u],h=d._pt||d,h.s=(i||i===0)&&!s?i:h.s+(i||0)+a*h.c,h.c=n-h.s,d.e&&(d.e=He(n)+_n(d.e)),d.b&&(d.b=h.s+_n(d.b))},NM=function(t,e){var n=t[0]?Vr(t[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return e;s=ga({},e);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},UM=function(t,e,n,i){var s=e.ease||i||"power1.inOut",a,o;if(Cn(e))o=n[t]||(n[t]=[]),e.forEach(function(l,c){return o.push({t:c/(e.length-1)*100,v:l,e:s})});else for(a in e)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(t),v:e[a],e:s})},No=function(t,e,n,i,s){return Ve(t)?t.call(e,n,i,s):rn(t)&&~t.indexOf("random(")?ya(t):t},fh=Uf+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",sg={};On(fh+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return sg[r]=1});fh=fh.split(",");Xe=(function(r){Dm(t,r);function t(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:Lo(i))||this;var l=o.vars,c=l.duration,h=l.delay,d=l.immediateRender,f=l.stagger,u=l.overwrite,g=l.keyframes,_=l.defaults,p=l.scrollTrigger,m=i.parent||Oe,v=(Cn(n)||Um(n)?_r(n[0]):"length"in i)?[n]:xi(n),w,y,T,E,x,M,P,C;if(o._targets=v.length?Ff(v):Fo("GSAP target "+n+" not found. https://gsap.com",!Jn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=u,g||f||ih(c)||ih(h)){i=o.vars;var N=i.easeReverse||i.yoyoEase;if(w=o.timeline=new An({data:"nested",defaults:_||{},targets:m&&m.data==="nested"?m.vars.targets:v}),w.kill(),w.parent=w._dp=mr(o),w._start=0,f||ih(c)||ih(h)){if(E=v.length,P=f&&Jm(f),$i(f))for(x in f)~fh.indexOf(x)&&(C||(C={}),C[x]=f[x]);for(y=0;y<E;y++)T=ch(i,sg),T.stagger=0,N&&(T.easeReverse=N),C&&ga(T,C),M=v[y],T.duration=+No(c,mr(o),y,M,v),T.delay=(+No(h,mr(o),y,M,v)||0)-o._delay,!f&&E===1&&T.delay&&(o._delay=h=T.delay,o._start+=h,T.delay=0),w.to(M,T,P?P(y,M,v):0),w._ease=ce.none;w.duration()?c=h=0:o.timeline=0}else if(g){Lo(ai(w.vars.defaults,{ease:"none"})),w._ease=vs(g.ease||i.ease||"none");var D=0,B,I,z;if(Cn(g))g.forEach(function(V){return w.to(v,V,">")}),w.duration();else{T={};for(x in g)x==="ease"||x==="easeEach"||UM(x,g[x],T,g.easeEach);for(x in T)for(B=T[x].sort(function(V,O){return V.t-O.t}),D=0,y=0;y<B.length;y++)I=B[y],z={ease:I.e,duration:(I.t-(y?B[y-1].t:0))/100*c},z[x]=I.v,w.to(v,z,D),D+=z.duration;w.duration()<c&&w.to({},{duration:c-w.duration()})}}c||o.duration(c=w.duration())}else o.timeline=0;return u===!0&&!Rf&&(kr=mr(o),Oe.killTweensOf(v),kr=0),Ji(m,mr(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(d||!c&&!g&&o._start===Fe(m._time)&&Zn(d)&&uM(mr(o))&&m.data!=="nested")&&(o._tTime=-ve,o.render(Math.max(0,-h)||0)),p&&Xm(mr(o),p),o}var e=t.prototype;return e.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,h=i<0,d=i>l-ve&&!h?l:i<ve?0:i,f,u,g,_,p,m,v,w;if(!c)dM(this,i,s,a);else if(d!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(f=d,w=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+i,s,a);if(f=Fe(d%_),d===l?(g=this._repeat,f=c):(p=Fe(d/_),g=~~p,g&&g===p?(f=c,g--):f>c&&(f=c)),m=this._yoyo&&g&1,m&&(f=c-f),p=_a(this._tTime,_),f===o&&!a&&this._initted&&g===p)return this._tTime=d,this;g!==p&&this.vars.repeatRefresh&&!m&&!this._lock&&f!==_&&this._initted&&(this._lock=a=1,this.render(Fe(_*g),!0).invalidate()._lock=0)}if(!this._initted){if(qm(this,h?i:f,a,s,d))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==p))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._rEase){var y=f<o;if(y!==this._inv){var T=y?o:c-o;this._inv=y,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=T?(y?-1:1)/T:0,this._invScale=y?-this.ratio:1-this.ratio,this._invEase=y?this._rEase:this._ease}this.ratio=v=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=v=this._ease(f/c);if(this._from&&(this.ratio=v=1-v),this._tTime=d,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&d&&!s&&!p&&(ri(this,"onStart"),this._tTime!==d))return this;for(u=this._pt;u;)u.r(v,u.d),u=u._next;w&&w.render(i<0?i:w._dur*w._ease(f/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&Tf(this,i,s,a),ri(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!s&&this.parent&&ri(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(h&&!this._onUpdate&&Tf(this,i,!0,!0),(i||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Hr(this,1),!s&&!(h&&!o)&&(d||o||m)&&(ri(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,a,o,l){Bo||Yn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Hf(this,c),h=this._ease(c/this._dur),DM(this,i,s,a,o,h,c,l)?this.resetTo(i,s,a,o,1):(xh(this,0),this.parent||Hm(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Po(this):this.scrollTrigger&&this.scrollTrigger.kill(!!gn),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,kr&&kr.vars.overwrite!==!0)._first||Po(this),this.parent&&a!==this.timeline.totalDuration()&&xa(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?xi(i):o,c=this._ptLookup,h=this._pt,d,f,u,g,_,p,m;if((!s||s==="all")&&cM(o,l))return s==="all"&&(this._pt=0),Po(this);for(d=this._op=this._op||[],s!=="all"&&(rn(s)&&(_={},On(s,function(v){return _[v]=1}),s=_),s=NM(o,s)),m=o.length;m--;)if(~l.indexOf(o[m])){f=c[m],s==="all"?(d[m]=s,g=f,u={}):(u=d[m]=d[m]||{},g=s);for(_ in g)p=f&&f[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&gh(this,p,"_pt"),delete f[_]),u!=="all"&&(u[_]=1)}return this._initted&&!this._pt&&h&&Po(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return Do(1,arguments)},t.delayedCall=function(i,s,a,o){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},t.fromTo=function(i,s,a){return Do(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,a){return Oe.killTweensOf(i,s,a)},t})(zo);ai(Xe.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});On("staggerTo,staggerFrom,staggerFromTo",function(r){Xe[r]=function(){var t=new An,e=wf.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});Wf=function(t,e,n){return t[e]=n},ag=function(t,e,n){return t[e](n)},FM=function(t,e,n,i){return t[e](i.fp,n)},OM=function(t,e,n){return t.setAttribute(e,n)},vh=function(t,e){return Ve(t[e])?ag:ph(t[e])&&t.setAttribute?OM:Wf},og=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},BM=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Xf=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},qf=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},zM=function(t,e,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(t,e,n),s=a},kM=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?gh(this,e,"_pt"):e.dep||(n=1),e=i;return!n},GM=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},Yf=function(t){for(var e=t._pt,n,i,s,a;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:a)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:a=e,e=n}t._pt=s},Bn=(function(){function r(e,n,i,s,a,o,l,c,h){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||og,this.d=l||this,this.set=c||Wf,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=GM,this.m=n,this.mt=s,this.tween=i},r})();On(Uf+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return Nf[r]=1});si.TweenMax=si.TweenLite=Xe;si.TimelineLite=si.TimelineMax=An;Oe=new An({sortChildren:!1,defaults:Uo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Jn.stringFilter=zf;ys=[],ah={},VM=[],Lm=0,HM=0,vf=function(t){return(ah[t]||VM).map(function(e){return e()})},ko=function(){var t=Date.now(),e=[];t-Lm>2&&(vf("matchMediaInit"),ys.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=Zi.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&e.push(n))}),vf("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Lm=t,vf("matchMedia"))},lg=(function(){function r(e,n){this.selector=n&&Ef(n),this.data=[],this._r=[],this.isReverted=!1,this.id=HM++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){Ve(n)&&(s=i,i=n,n=Ve);var a=this,o=function(){var c=De,h=a.selector,d;return c&&c!==a&&c.data.push(a),s&&(a.selector=Ef(s)),De=a,d=i.apply(a,arguments),Ve(d)&&a._r.push(d),De=c,a.selector=h,a.isReverted=!1,d};return a.last=o,n===Ve?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},t.ignore=function(n){var i=De;De=null,n(this),De=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Xe&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?(function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return o.splice(o.indexOf(h),1)}));for(o.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,d){return d.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof An?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Xe)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i){for(var a=ys.length;a--;)ys[a].id===this.id&&ys.splice(a,1);this._mqs&&this._mqs.forEach(function(o){return o.removeListener?o.removeListener(ko):o.removeEventListener("change",ko)}),this._mqs=null}},t.revert=function(n){this.kill(n||{})},r})(),WM=(function(){function r(e){this.contexts=[],this.scope=e,De&&De.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){$i(n)||(n={matches:n});var a=new lg(0,s||this.scope),o=a.conditions={},l,c,h;De&&!a.selector&&(a.selector=De.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?h=1:(l=Zi.matchMedia(n[c]),l&&(ys.indexOf(a)<0&&ys.push(a),(o[c]=l.matches)&&(h=1),l.addListener?l.addListener(ko):l.addEventListener("change",ko),(a._mqs||(a._mqs=[])).push(l)));return h&&i(a,function(d){return a.add(null,d)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),dh={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return eg(i)})},timeline:function(t){return new An(t)},getTweensOf:function(t,e){return Oe.getTweensOf(t,e)},getProperty:function(t,e,n,i){rn(t)&&(t=xi(t)[0]);var s=Vr(t||{}).get,a=n?Vm:Gm;return n==="native"&&(n=""),t&&(e?a((qn[e]&&qn[e].get||s)(t,e,n,i)):function(o,l,c){return a((qn[o]&&qn[o].get||s)(t,o,l,c))})},quickSetter:function(t,e,n){if(t=xi(t),t.length>1){var i=t.map(function(h){return Rn.quickSetter(h,e,n)}),s=i.length;return function(h){for(var d=s;d--;)i[d](h)}}t=t[0]||{};var a=qn[e],o=Vr(t),l=o.harness&&(o.harness.aliases||{})[e]||e,c=a?function(h){var d=new a;ma._pt=0,d.init(t,n?h+n:h,ma,0,[t]),d.render(1,d),ma._pt&&qf(1,ma)}:o.set(t,l);return a?c:function(h){return c(t,l,n?h+n:h,o,1)}},quickTo:function(t,e,n){var i,s=Rn.to(t,ai((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,h){return s.resetTo(e,l,c,h)};return a.tween=s,a},isTweening:function(t){return Oe.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=vs(t.ease,Uo.ease)),Am(Uo,t||{})},config:function(t){return Am(Jn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,a=t.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!qn[o]&&!si[o]&&Fo(e+" effect requires "+o+" plugin.")}),mf[e]=function(o,l,c){return n(xi(o),ai(l||{},s),c)},a&&(An.prototype[e]=function(o,l,c){return this.add(mf[e](o,$i(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){ce[t]=vs(e)},parseEase:function(t,e){return arguments.length?vs(t,e):ce},getById:function(t){return Oe.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new An(t),i,s;for(n.smoothChildTiming=Zn(t.smoothChildTiming),Oe.remove(n),n._dp=0,n._time=n._tTime=Oe._time,i=Oe._first;i;)s=i._next,(e||!(!i._dur&&i instanceof Xe&&i.vars.onComplete===i._targets[0]))&&Ji(n,i,i._start-i._delay),i=s;return Ji(Oe,n,0),n},context:function(t,e){return t?new lg(t,e):De},matchMedia:function(t){return new WM(t)},matchMediaRefresh:function(){return ys.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||ko()},addEventListener:function(t,e){var n=ah[t]||(ah[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=ah[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:SM,wrapYoyo:MM,distribute:Jm,random:Km,snap:$m,normalize:yM,getUnit:_n,clamp:gM,splitColor:ng,toArray:xi,selector:Ef,mapRange:jm,pipe:xM,unitize:vM,interpolate:bM,shuffle:Zm},install:Om,effects:mf,ticker:Yn,updateRoot:An.updateRoot,plugins:qn,globalTimeline:Oe,core:{PropTween:Bn,globals:Bm,Tween:Xe,Timeline:An,Animation:zo,getCache:Vr,_removeLinkedListItem:gh,reverting:function(){return gn},context:function(t){return t&&De&&(De.data.push(t),t._ctx=De),De},suppressOverwrites:function(t){return Rf=t}}};On("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return dh[r]=Xe[r]});Yn.add(An.updateRoot);ma=dh.to({},{duration:0});XM=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},qM=function(t,e){var n=t._targets,i,s,a;for(i in e)for(s=n.length;s--;)a=t._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=XM(a,i)),a&&a.modifier&&a.modifier(e[i],t,n[s],i))},yf=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(rn(s)&&(l={},On(s,function(h){return l[h]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}qM(o,s)}}}},Rn=dh.registerPlugin({name:"attr",init:function(t,e,n,i,s){var a,o,l;this.tween=n;for(a in e)l=t.getAttribute(a)||"",o=this.add(t,"setAttribute",(l||0)+"",e[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(t,e){for(var n=e._pt;n;)gn?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},yf("roundProps",Af),yf("modifiers"),yf("snap",$m))||dh;Xe.version=An.version=Rn.version="3.15.1";Fm=1;Pf()&&va();YM=ce.Power0,ZM=ce.Power1,JM=ce.Power2,$M=ce.Power3,KM=ce.Power4,QM=ce.Linear,jM=ce.Quad,tb=ce.Cubic,eb=ce.Quart,nb=ce.Quint,ib=ce.Strong,rb=ce.Elastic,sb=ce.Back,ab=ce.SteppedEase,ob=ce.Bounce,lb=ce.Sine,cb=ce.Expo,hb=ce.Circ});var cg,Xr,Ma,td,As,ub,hg,ed,fb,vr,Es,ba,Sa,ug,nd,db,pb,Ki,$f,mb,gb,_b,xb,vg,yg,vb,yb,Sb,Mb,bb,Tb,Be,$n,wb,Sg,Eb,Mg,bg,Kf,oi,fg,Ta,Qf,dg,pg,Tg,wg,Yr,qr,mg,Ab,Zr,xr,Cb,gg,Rb,Pb,yh,Ho,Eg,Ag,_g,id,jf,Wo,Sh,Jf,Ib,Ts,Vo,ws,Cg,Lb,Db,xg,Nb,rd,Rg=nr(()=>{Zf();fb=function(){return typeof window!="undefined"},vr={},Es=180/Math.PI,ba=Math.PI/180,Sa=Math.atan2,ug=1e8,nd=/([A-Z])/g,db=/(left|right|width|margin|padding|x)/i,pb=/[\s,\(]\S/,Ki={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},$f=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},mb=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},gb=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},_b=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},xb=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},vg=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},yg=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},vb=function(t,e,n){return t.style[e]=n},yb=function(t,e,n){return t.style.setProperty(e,n)},Sb=function(t,e,n){return t._gsap[e]=n},Mb=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},bb=function(t,e,n,i,s){var a=t._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},Tb=function(t,e,n,i,s){var a=t._gsap;a[e]=n,a.renderTransform(s,a)},Be="transform",$n=Be+"Origin",wb=function r(t,e){var n=this,i=this.target,s=i.style,a=i._gsap;if(t in vr&&s){if(this.tfm=this.tfm||{},t!=="transform")t=Ki[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return n.tfm[o]=xr(i,o)}):this.tfm[t]=a.x?a[t]:xr(i,t),t===$n&&(this.tfm.zOrigin=a.zOrigin);else return Ki.transform.split(",").forEach(function(o){return r.call(n,o,e)});if(this.props.indexOf(Be)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push($n,e,"")),t=Be}(s||e)&&this.props.push(t,e,s[t])},Sg=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},Eb=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,a;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(nd,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=ed(),(!s||!s.isStart)&&!n[Be]&&(Sg(n),i.zOrigin&&n[$n]&&(n[$n]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Mg=function(t,e){var n={target:t,props:[],revert:Eb,save:wb};return t._gsap||Rn.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},Kf=function(t,e){var n=Xr.createElementNS?Xr.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Xr.createElement(t);return n&&n.style?n:Xr.createElement(t)},oi=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(nd,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,Ta(e)||e,1)||""},fg="O,Moz,ms,Ms,Webkit".split(","),Ta=function(t,e,n){var i=e||As,s=i.style,a=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(fg[a]+t in s););return a<0?null:(a===3?"ms":a>=0?fg[a]:"")+t},Qf=function(){fb()&&window.document&&(cg=window,Xr=cg.document,Ma=Xr.documentElement,As=Kf("div")||{style:{}},ub=Kf("div"),Be=Ta(Be),$n=Be+"Origin",As.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",bg=!!Ta("perspective"),ed=Rn.core.reverting,td=1)},dg=function(t){var e=t.ownerSVGElement,n=Kf("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Ma.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Ma.removeChild(n),s},pg=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Tg=function(t){var e,n;try{e=t.getBBox()}catch{e=dg(t),n=1}return e&&(e.width||e.height)||n||(e=dg(t)),e&&!e.width&&!e.x&&!e.y?{x:+pg(t,["x","cx","x1"])||0,y:+pg(t,["y","cy","y1"])||0,width:0,height:0}:e},wg=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Tg(t))},Yr=function(t,e){if(e){var n=t.style,i;e in vr&&e!==$n&&(e=Be),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(nd,"-$1").toLowerCase())):n.removeAttribute(e)}},qr=function(t,e,n,i,s,a){var o=new Bn(t._pt,e,n,0,1,a?yg:vg);return t._pt=o,o.b=i,o.e=s,t._props.push(n),o},mg={deg:1,rad:1,turn:1},Ab={grid:1,flex:1},Zr=function r(t,e,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=As.style,l=db.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),d=100,f=i==="px",u=i==="%",g,_,p,m;if(i===a||!s||mg[i]||mg[a])return s;if(a!=="px"&&!f&&(s=r(t,e,n,"px")),m=t.getCTM&&wg(t),(u||a==="%")&&(vr[e]||~e.indexOf("adius")))return g=m?t.getBBox()[l?"width":"height"]:t[h],He(u?s/g*d:s/100*g);if(o[l?"width":"height"]=d+(f?a:i),_=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,m&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===Xr||!_.appendChild)&&(_=Xr.body),p=_._gsap,p&&u&&p.width&&l&&p.time===Yn.time&&!p.uncache)return He(s/p.width*d);if(u&&(e==="height"||e==="width")){var v=t.style[e];t.style[e]=d+i,g=t[h],v?t.style[e]=v:Yr(t,e)}else(u||a==="%")&&!Ab[oi(_,"display")]&&(o.position=oi(t,"position")),_===t&&(o.position="static"),_.appendChild(As),g=As[h],_.removeChild(As),o.position="absolute";return l&&u&&(p=Vr(_),p.time=Yn.time,p.width=_[h]),He(f?g*s/d:g&&s?d/g*s:0)},xr=function(t,e,n,i){var s;return td||Qf(),e in Ki&&e!=="transform"&&(e=Ki[e],~e.indexOf(",")&&(e=e.split(",")[0])),vr[e]&&e!=="transform"?(s=Wo(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:Sh(oi(t,$n))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=yh[e]&&yh[e](t,e,n)||oi(t,e)||Of(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Zr(t,e,s,n)+n:s},Cb=function(t,e,n,i){if(!n||n==="none"){var s=Ta(e,t,1),a=s&&oi(t,s,1);a&&a!==n?(e=s,n=a):e==="borderColor"&&(n=oi(t,"borderTopColor"))}var o=new Bn(this._pt,t.style,e,0,1,Xf),l=0,c=0,h,d,f,u,g,_,p,m,v,w,y,T;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=oi(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=t.style[e],t.style[e]=i,i=oi(t,e)||i,_?t.style[e]=_:Yr(t,e)),h=[n,i],zf(h),n=h[0],i=h[1],f=n.match(Ss)||[],T=i.match(Ss)||[],T.length){for(;d=Ss.exec(i);)p=d[0],v=i.substring(l,d.index),g?g=(g+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(g=1),p!==(_=f[c++]||"")&&(u=parseFloat(_)||0,y=_.substr((u+"").length),p.charAt(1)==="="&&(p=Ms(u,p)+y),m=parseFloat(p),w=p.substr((m+"").length),l=Ss.lastIndex-w.length,w||(w=w||Jn.units[e]||y,l===i.length&&(i+=w,o.e+=w)),y!==w&&(u=Zr(t,e,_,w)||0),o._pt={_next:o._pt,p:v||c===1?v:",",s:u,c:m-u,m:g&&g<4||e==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=e==="display"&&i==="none"?yg:vg;return Lf.test(i)&&(o.e=0),this._pt=o,o},gg={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Rb=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=gg[n]||n,e[1]=gg[i]||i,e.join(" ")},Pb=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],vr[o]&&(l=1,o=o==="transformOrigin"?$n:Be),Yr(n,o);l&&(Yr(n,Be),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Wo(n,1),a.uncache=1,Sg(i)))}},yh={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var a=t._pt=new Bn(t._pt,e,n,0,0,Pb);return a.u=i,a.pr=-10,a.tween=s,t._props.push(n),1}}},Ho=[1,0,0,1,0,0],Eg={},Ag=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},_g=function(t){var e=oi(t,Be);return Ag(e)?Ho:e.substr(7).match(If).map(He)},id=function(t,e){var n=t._gsap||Vr(t),i=t.style,s=_g(t),a,o,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Ho:s):(s===Ho&&!t.offsetParent&&t!==Ma&&!n.svg&&(l=i.display,i.display="block",a=t.parentNode,(!a||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,o=t.nextElementSibling,Ma.appendChild(t)),s=_g(t),l?i.display=l:Yr(t,"display"),c&&(o?a.insertBefore(t,o):a?a.appendChild(t):Ma.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},jf=function(t,e,n,i,s,a){var o=t._gsap,l=s||id(t,!0),c=o.xOrigin||0,h=o.yOrigin||0,d=o.xOffset||0,f=o.yOffset||0,u=l[0],g=l[1],_=l[2],p=l[3],m=l[4],v=l[5],w=e.split(" "),y=parseFloat(w[0])||0,T=parseFloat(w[1])||0,E,x,M,P;n?l!==Ho&&(x=u*p-g*_)&&(M=y*(p/x)+T*(-_/x)+(_*v-p*m)/x,P=y*(-g/x)+T*(u/x)-(u*v-g*m)/x,y=M,T=P):(E=Tg(t),y=E.x+(~w[0].indexOf("%")?y/100*E.width:y),T=E.y+(~(w[1]||w[0]).indexOf("%")?T/100*E.height:T)),i||i!==!1&&o.smooth?(m=y-c,v=T-h,o.xOffset=d+(m*u+v*_)-m,o.yOffset=f+(m*g+v*p)-v):o.xOffset=o.yOffset=0,o.xOrigin=y,o.yOrigin=T,o.smooth=!!i,o.origin=e,o.originIsAbsolute=!!n,t.style[$n]="0px 0px",a&&(qr(a,o,"xOrigin",c,y),qr(a,o,"yOrigin",h,T),qr(a,o,"xOffset",d,o.xOffset),qr(a,o,"yOffset",f,o.yOffset)),t.setAttribute("data-svg-origin",y+" "+T)},Wo=function(t,e){var n=t._gsap||new kf(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(t),c=oi(t,$n)||"0",h,d,f,u,g,_,p,m,v,w,y,T,E,x,M,P,C,N,D,B,I,z,V,O,j,H,R,et,Mt,Ft,Z,ht;return h=d=f=_=p=m=v=w=y=0,u=g=1,n.svg=!!(t.getCTM&&wg(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Be]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Be]!=="none"?l[Be]:"")),i.scale=i.rotate=i.translate="none"),x=id(t,n.svg),n.svg&&(n.uncache?(j=t.getBBox(),c=n.xOrigin-j.x+"px "+(n.yOrigin-j.y)+"px",O=""):O=!e&&t.getAttribute("data-svg-origin"),jf(t,O||c,!!O||n.originIsAbsolute,n.smooth!==!1,x)),T=n.xOrigin||0,E=n.yOrigin||0,x!==Ho&&(N=x[0],D=x[1],B=x[2],I=x[3],h=z=x[4],d=V=x[5],x.length===6?(u=Math.sqrt(N*N+D*D),g=Math.sqrt(I*I+B*B),_=N||D?Sa(D,N)*Es:0,v=B||I?Sa(B,I)*Es+_:0,v&&(g*=Math.abs(Math.cos(v*ba))),n.svg&&(h-=T-(T*N+E*B),d-=E-(T*D+E*I))):(ht=x[6],Ft=x[7],R=x[8],et=x[9],Mt=x[10],Z=x[11],h=x[12],d=x[13],f=x[14],M=Sa(ht,Mt),p=M*Es,M&&(P=Math.cos(-M),C=Math.sin(-M),O=z*P+R*C,j=V*P+et*C,H=ht*P+Mt*C,R=z*-C+R*P,et=V*-C+et*P,Mt=ht*-C+Mt*P,Z=Ft*-C+Z*P,z=O,V=j,ht=H),M=Sa(-B,Mt),m=M*Es,M&&(P=Math.cos(-M),C=Math.sin(-M),O=N*P-R*C,j=D*P-et*C,H=B*P-Mt*C,Z=I*C+Z*P,N=O,D=j,B=H),M=Sa(D,N),_=M*Es,M&&(P=Math.cos(M),C=Math.sin(M),O=N*P+D*C,j=z*P+V*C,D=D*P-N*C,V=V*P-z*C,N=O,z=j),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,m=180-m),u=He(Math.sqrt(N*N+D*D+B*B)),g=He(Math.sqrt(V*V+ht*ht)),M=Sa(z,V),v=Math.abs(M)>2e-4?M*Es:0,y=Z?1/(Z<0?-Z:Z):0),n.svg&&(O=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Ag(oi(t,Be)),O&&t.setAttribute("transform",O))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(u*=-1,v+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,v+=v<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+a,n.y=d-((n.yPercent=d&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-d)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+a,n.z=f+a,n.scaleX=He(u),n.scaleY=He(g),n.rotation=He(_)+o,n.rotationX=He(p)+o,n.rotationY=He(m)+o,n.skewX=v+o,n.skewY=w+o,n.transformPerspective=y+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[$n]=Sh(c)),n.xOffset=n.yOffset=0,n.force3D=Jn.force3D,n.renderTransform=n.svg?Lb:bg?Cg:Ib,n.uncache=0,n},Sh=function(t){return(t=t.split(" "))[0]+" "+t[1]},Jf=function(t,e,n){var i=_n(e);return He(parseFloat(e)+parseFloat(Zr(t,"x",n+"px",i)))+i},Ib=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Cg(t,e)},Ts="0deg",Vo="0px",ws=") ",Cg=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,h=n.rotationY,d=n.rotationX,f=n.skewX,u=n.skewY,g=n.scaleX,_=n.scaleY,p=n.transformPerspective,m=n.force3D,v=n.target,w=n.zOrigin,y="",T=m==="auto"&&t&&t!==1||m===!0;if(w&&(d!==Ts||h!==Ts)){var E=parseFloat(h)*ba,x=Math.sin(E),M=Math.cos(E),P;E=parseFloat(d)*ba,P=Math.cos(E),a=Jf(v,a,x*P*-w),o=Jf(v,o,-Math.sin(E)*-w),l=Jf(v,l,M*P*-w+w)}p!==Vo&&(y+="perspective("+p+ws),(i||s)&&(y+="translate("+i+"%, "+s+"%) "),(T||a!==Vo||o!==Vo||l!==Vo)&&(y+=l!==Vo||T?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+ws),c!==Ts&&(y+="rotate("+c+ws),h!==Ts&&(y+="rotateY("+h+ws),d!==Ts&&(y+="rotateX("+d+ws),(f!==Ts||u!==Ts)&&(y+="skew("+f+", "+u+ws),(g!==1||_!==1)&&(y+="scale("+g+", "+_+ws),v.style[Be]=y||"translate(0, 0)"},Lb=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,h=n.skewY,d=n.scaleX,f=n.scaleY,u=n.target,g=n.xOrigin,_=n.yOrigin,p=n.xOffset,m=n.yOffset,v=n.forceCSS,w=parseFloat(a),y=parseFloat(o),T,E,x,M,P;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=ba,c*=ba,T=Math.cos(l)*d,E=Math.sin(l)*d,x=Math.sin(l-c)*-f,M=Math.cos(l-c)*f,c&&(h*=ba,P=Math.tan(c-h),P=Math.sqrt(1+P*P),x*=P,M*=P,h&&(P=Math.tan(h),P=Math.sqrt(1+P*P),T*=P,E*=P)),T=He(T),E=He(E),x=He(x),M=He(M)):(T=d,M=f,E=x=0),(w&&!~(a+"").indexOf("px")||y&&!~(o+"").indexOf("px"))&&(w=Zr(u,"x",a,"px"),y=Zr(u,"y",o,"px")),(g||_||p||m)&&(w=He(w+g-(g*T+_*x)+p),y=He(y+_-(g*E+_*M)+m)),(i||s)&&(P=u.getBBox(),w=He(w+i/100*P.width),y=He(y+s/100*P.height)),P="matrix("+T+","+E+","+x+","+M+","+w+","+y+")",u.setAttribute("transform",P),v&&(u.style[Be]=P)},Db=function(t,e,n,i,s){var a=360,o=rn(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Es:1),c=l-i,h=i+c+"deg",d,f;return o&&(d=s.split("_")[1],d==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),d==="cw"&&c<0?c=(c+a*ug)%a-~~(c/a)*a:d==="ccw"&&c>0&&(c=(c-a*ug)%a-~~(c/a)*a)),t._pt=f=new Bn(t._pt,e,n,i,c,mb),f.e=h,f.u="deg",t._props.push(n),f},xg=function(t,e){for(var n in e)t[n]=e[n];return t},Nb=function(t,e,n){var i=xg({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,h,d,f,u,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[Be]=e,o=Wo(n,1),Yr(n,Be),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Be],a[Be]=e,o=Wo(n,1),a[Be]=c);for(l in vr)c=i[l],h=o[l],c!==h&&s.indexOf(l)<0&&(u=_n(c),g=_n(h),d=u!==g?Zr(n,l,c,g):parseFloat(c),f=parseFloat(h),t._pt=new Bn(t._pt,o,l,d,f-d,$f),t._pt.u=g||0,t._props.push(l));xg(o,i)};On("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",a=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(o){return t<2?r+o:"border"+o+r});yh[t>1?"border"+r:r]=function(o,l,c,h,d){var f,u;if(arguments.length<4)return f=a.map(function(g){return xr(o,g,c)}),u=f.join(" "),u.split(f[0]).length===5?f[0]:u;f=(h+"").split(" "),u={},a.forEach(function(g,_){return u[g]=f[_]=f[_]||f[(_-1)/2|0]}),o.init(l,u,d)}});rd={name:"css",register:Qf,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var a=this._props,o=t.style,l=n.vars.startAt,c,h,d,f,u,g,_,p,m,v,w,y,T,E,x,M,P;td||Qf(),this.styles=this.styles||Mg(t),M=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(h=e[_],!(qn[_]&&Vf(_,e,n,i,t,s)))){if(u=typeof h,g=yh[_],u==="function"&&(h=h.call(n,i,t,s),u=typeof h),u==="string"&&~h.indexOf("random(")&&(h=ya(h)),g)g(this,t,_,h,n)&&(x=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),h+="",gr.lastIndex=0,gr.test(c)||(p=_n(c),m=_n(h),m?p!==m&&(c=Zr(t,_,c,m)+m):p&&(h+=p)),this.add(o,"setProperty",c,h,i,s,0,0,_),a.push(_),M.push(_,0,o[_]);else if(u!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,t,s):l[_],rn(c)&&~c.indexOf("random(")&&(c=ya(c)),_n(c+"")||c==="auto"||(c+=Jn.units[_]||_n(xr(t,_))||""),(c+"").charAt(1)==="="&&(c=xr(t,_))):c=xr(t,_),f=parseFloat(c),v=u==="string"&&h.charAt(1)==="="&&h.substr(0,2),v&&(h=h.substr(2)),d=parseFloat(h),_ in Ki&&(_==="autoAlpha"&&(f===1&&xr(t,"visibility")==="hidden"&&d&&(f=0),M.push("visibility",0,o.visibility),qr(this,o,"visibility",f?"inherit":"hidden",d?"inherit":"hidden",!d)),_!=="scale"&&_!=="transform"&&(_=Ki[_],~_.indexOf(",")&&(_=_.split(",")[0]))),w=_ in vr,w){if(this.styles.save(_),P=h,u==="string"&&h.substring(0,6)==="var(--"){if(h=oi(t,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var C=t.style.perspective;t.style.perspective=h,h=oi(t,"perspective"),C?t.style.perspective=C:Yr(t,"perspective")}d=parseFloat(h)}if(y||(T=t._gsap,T.renderTransform&&!e.parseTransform||Wo(t,e.parseTransform),E=e.smoothOrigin!==!1&&T.smooth,y=this._pt=new Bn(this._pt,o,Be,0,1,T.renderTransform,T,0,-1),y.dep=1),_==="scale")this._pt=new Bn(this._pt,T,"scaleY",T.scaleY,(v?Ms(T.scaleY,v+d):d)-T.scaleY||0,$f),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){M.push($n,0,o[$n]),h=Rb(h),T.svg?jf(t,h,0,E,0,this):(m=parseFloat(h.split(" ")[2])||0,m!==T.zOrigin&&qr(this,T,"zOrigin",T.zOrigin,m),qr(this,o,_,Sh(c),Sh(h)));continue}else if(_==="svgOrigin"){jf(t,h,1,E,0,this);continue}else if(_ in Eg){Db(this,T,_,f,v?Ms(f,v+h):h);continue}else if(_==="smoothOrigin"){qr(this,T,"smooth",T.smooth,h);continue}else if(_==="force3D"){T[_]=h;continue}else if(_==="transform"){Nb(this,h,t);continue}}else _ in o||(_=Ta(_)||_);if(w||(d||d===0)&&(f||f===0)&&!pb.test(h)&&_ in o)p=(c+"").substr((f+"").length),d||(d=0),m=_n(h)||(_ in Jn.units?Jn.units[_]:p),p!==m&&(f=Zr(t,_,c,m)),this._pt=new Bn(this._pt,w?T:o,_,f,(v?Ms(f,v+d):d)-f,!w&&(m==="px"||_==="zIndex")&&e.autoRound!==!1?xb:$f),this._pt.u=m||0,w&&P!==h?(this._pt.b=c,this._pt.e=P,this._pt.r=_b):p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=gb);else if(_ in o)Cb.call(this,t,_,c,v?v+h:h);else if(_ in t)this.add(t,_,c||t[_],v?v+h:h,i,s);else if(_!=="parseTransform"){mh(_,h);continue}w||(_ in o?M.push(_,0,o[_]):typeof t[_]=="function"?M.push(_,2,t[_]()):M.push(_,1,c||t[_])),a.push(_)}}x&&Yf(this)},render:function(t,e){if(e.tween._time||!ed())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:xr,aliases:Ki,getSetter:function(t,e,n){var i=Ki[e];return i&&i.indexOf(",")<0&&(e=i),e in vr&&e!==$n&&(t._gsap.x||xr(t,"x"))?n&&hg===n?e==="scale"?Mb:Sb:(hg=n||{})&&(e==="scale"?bb:Tb):t.style&&!ph(t.style[e])?vb:~e.indexOf("-")?yb:vh(t,e)},core:{_removeProperty:Yr,_getMatrix:id}};Rn.utils.checkPrefix=Ta;Rn.core.getStyleSaver=Mg;(function(r,t,e,n){var i=On(r+","+t+","+e,function(s){vr[s]=1});On(t,function(s){Jn.units[s]="deg",Eg[s]=1}),Ki[i[13]]=r+","+t,On(n,function(s){var a=s.split(":");Ki[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");On("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Jn.units[r]="px"});Rn.registerPlugin(rd)});var Ne,tA,Pg=nr(()=>{Zf();Rg();Ne=Rn.registerPlugin(rd)||Rn,tA=Ne.core.Tween});function Ig(r,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function Ub(r,t,e){return t&&Ig(r.prototype,t),e&&Ig(r,e),r}var xn,Th,Fb,Kn,Jr,$r,Ea,Dg,Cs,Aa,Ng,yr,Li,Ug,Fg,Og,wa,Jt,Di,qo,sd,Ob,Mr,Yo,kn,zn,Mh,bh,ad,wh,Pn,$e,Gn,Bb,Sr,Eh,Xo,Lg,Bg,zg,We,kg=nr(()=>{Fg=function(){return xn||typeof window!="undefined"&&(xn=window.gsap)&&xn.registerPlugin&&xn},Og=1,wa=[],Jt=[],Di=[],qo=Date.now,sd=function(t,e){return e},Ob=function(){var t=Aa.core,e=t.bridge||{},n=t._scrollers,i=t._proxies;n.push.apply(n,Jt),i.push.apply(i,Di),Jt=n,Di=i,sd=function(a,o){return e[a](o)}},Mr=function(t,e){return~Di.indexOf(t)&&Di[Di.indexOf(t)+1][e]},Yo=function(t){return!!~Ng.indexOf(t)},kn=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:i!==!1,capture:!!s})},zn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},Mh="scrollLeft",bh="scrollTop",ad=function(){return yr&&yr.isPressed||Jt.cache++},wh=function(t,e){var n=function i(s){if(s||s===0){Og&&Kn.history.scrollRestoration!=="manual"&&(Kn.history.scrollRestoration="manual");var a=yr&&yr.isPressed;s=i.v=Math.round(s)||(yr&&yr.iOS?1:0),t(s),i.cacheID=Jt.cache,a&&sd("ss",s)}else(e||Jt.cache!==i.cacheID||sd("ref"))&&(i.cacheID=Jt.cache,i.v=t());return i.v+i.offset};return n.offset=0,t&&n},Pn={s:Mh,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:wh(function(r){return arguments.length?Kn.scrollTo(r,$e.sc()):Kn.pageXOffset||Jr[Mh]||$r[Mh]||Ea[Mh]||0})},$e={s:bh,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Pn,sc:wh(function(r){return arguments.length?Kn.scrollTo(Pn.sc(),r):Kn.pageYOffset||Jr[bh]||$r[bh]||Ea[bh]||0})},Gn=function(t,e){return(e&&e._ctx&&e._ctx.selector||xn.utils.toArray)(t)[0]||(typeof t=="string"&&xn.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},Bb=function(t,e){for(var n=e.length;n--;)if(e[n]===t||e[n].contains(t))return!0;return!1},Sr=function(t,e){var n=e.s,i=e.sc;Yo(t)&&(t=Jr.scrollingElement||$r);var s=Jt.indexOf(t),a=i===$e.sc?1:2;!~s&&(s=Jt.push(t)-1),Jt[s+a]||kn(t,"scroll",ad);var o=Jt[s+a],l=o||(Jt[s+a]=wh(Mr(t,n),!0)||(Yo(t)?i:wh(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,o||(l.smooth=xn.getProperty(t,"scrollBehavior")==="smooth"),l},Eh=function(t,e,n){var i=t,s=t,a=qo(),o=a,l=e||50,c=Math.max(500,l*3),h=function(g,_){var p=qo();_||p-a>l?(s=i,i=g,o=a,a=p):n?i+=g:i=s+(g-s)/(p-o)*(a-o)},d=function(){s=i=n?0:i,o=a=0},f=function(g){var _=o,p=s,m=qo();return(g||g===0)&&g!==i&&h(g),a===o||m-o>c?0:(i+(n?p:-p))/((n?m:a)-_)*1e3};return{update:h,reset:d,getVelocity:f}},Xo=function(t,e){return e&&!t._gsapAllow&&t.cancelable!==!1&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},Lg=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},Bg=function(){Aa=xn.core.globals().ScrollTrigger,Aa&&Aa.core&&Ob()},zg=function(t){return xn=t||Fg(),!Th&&xn&&typeof document!="undefined"&&document.body&&(Kn=window,Jr=document,$r=Jr.documentElement,Ea=Jr.body,Ng=[Kn,Jr,$r,Ea],Fb=xn.utils.clamp,Ug=xn.core.context||function(){},Cs="onpointerenter"in Ea?"pointer":"mouse",Dg=We.isTouch=Kn.matchMedia&&Kn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Kn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Li=We.eventTypes=("ontouchstart"in $r?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in $r?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Og=0},500),Th=1),Aa||Bg(),Th};Pn.op=$e;Jt.cache=0;We=(function(){function r(e){this.init(e)}var t=r.prototype;return t.init=function(n){Th||zg(xn)||console.warn("Please gsap.registerPlugin(Observer)"),Aa||Bg();var i=n.tolerance,s=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,c=n.debounce,h=n.preventDefault,d=n.onStop,f=n.onStopDelay,u=n.ignore,g=n.wheelSpeed,_=n.event,p=n.onDragStart,m=n.onDragEnd,v=n.onDrag,w=n.onPress,y=n.onRelease,T=n.onRight,E=n.onLeft,x=n.onUp,M=n.onDown,P=n.onChangeX,C=n.onChangeY,N=n.onChange,D=n.onToggleX,B=n.onToggleY,I=n.onHover,z=n.onHoverEnd,V=n.onMove,O=n.ignoreCheck,j=n.isNormalizer,H=n.onGestureStart,R=n.onGestureEnd,et=n.onWheel,Mt=n.onEnable,Ft=n.onDisable,Z=n.onClick,ht=n.scrollSpeed,rt=n.capture,bt=n.allowClicks,ut=n.lockAxis,Pt=n.onLockAxis;this.target=o=Gn(o)||$r,this.vars=n,u&&(u=xn.utils.toArray(u)),i=i||1e-9,s=s||0,g=g||1,ht=ht||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Kn.getComputedStyle(Ea).lineHeight)||22);var ue,At,Gt,Lt,Ut,le,ne,J=this,Yt=0,ze=0,de=n.passive||!h&&n.passive!==!1,te=Sr(o,Pn),we=Sr(o,$e),Ee=te(),F=we(),he=~a.indexOf("touch")&&!~a.indexOf("pointer")&&Li[0]==="pointerdown",ie=Yo(o),Vt=o.ownerDocument||Jr,$=[0,0,0],Ct=[0,0,0],vt=0,Bt=function(){return vt=qo()},A=function(gt,at){return(J.event=gt)&&u&&Bb(gt.target,u)||at&&he&&gt.pointerType!=="touch"||O&&O(gt,at)},S=function(){J._vx.reset(),J._vy.reset(),At.pause(),d&&d(J)},k=function(){var gt=J.deltaX=Lg($),at=J.deltaY=Lg(Ct),nt=Math.abs(gt)>=i,xt=Math.abs(at)>=i;N&&(nt||xt)&&N(J,gt,at,$,Ct),nt&&(T&&J.deltaX>0&&T(J),E&&J.deltaX<0&&E(J),P&&P(J),D&&J.deltaX<0!=Yt<0&&D(J),Yt=J.deltaX,$[0]=$[1]=$[2]=0),xt&&(M&&J.deltaY>0&&M(J),x&&J.deltaY<0&&x(J),C&&C(J),B&&J.deltaY<0!=ze<0&&B(J),ze=J.deltaY,Ct[0]=Ct[1]=Ct[2]=0),(Lt||Gt)&&(V&&V(J),Gt&&(p&&Gt===1&&p(J),v&&v(J),Gt=0),Lt=!1),le&&!(le=!1)&&Pt&&Pt(J),Ut&&(et(J),Ut=!1),ue=0},ot=function(gt,at,nt){$[nt]+=gt,Ct[nt]+=at,J._vx.update(gt),J._vy.update(at),c?ue||(ue=requestAnimationFrame(k)):k()},st=function(gt,at){ut&&!ne&&(J.axis=ne=Math.abs(gt)>Math.abs(at)?"x":"y",le=!0),ne!=="y"&&($[2]+=gt,J._vx.update(gt,!0)),ne!=="x"&&(Ct[2]+=at,J._vy.update(at,!0)),c?ue||(ue=requestAnimationFrame(k)):k()},dt=function(gt){if(!A(gt,1)){gt=Xo(gt,h);var at=gt.clientX,nt=gt.clientY,xt=at-J.x,it=nt-J.y,wt=J.isDragging;J.x=at,J.y=nt,(wt||(xt||it)&&(Math.abs(J.startX-at)>=s||Math.abs(J.startY-nt)>=s))&&(Gt||(Gt=wt?2:1),wt||(J.isDragging=!0),st(xt,it))}},_t=J.onPress=function(lt){A(lt,1)||lt&&lt.button||(J.axis=ne=null,At.pause(),J.isPressed=!0,lt=Xo(lt),Yt=ze=0,J.startX=J.x=lt.clientX,J.startY=J.y=lt.clientY,J._vx.reset(),J._vy.reset(),kn(j?o:Vt,Li[1],dt,de,!0),J.deltaX=J.deltaY=0,w&&w(J))},W=J.onRelease=function(lt){if(!A(lt,1)){zn(j?o:Vt,Li[1],dt,!0);var gt=!isNaN(J.y-J.startY),at=J.isDragging,nt=at&&(Math.abs(J.x-J.startX)>3||Math.abs(J.y-J.startY)>3),xt=Xo(lt);!nt&&gt&&(J._vx.reset(),J._vy.reset(),h&&bt&&xn.delayedCall(.08,function(){if(qo()-vt>300&&!lt.defaultPrevented){if(lt.target.click)lt.target.click();else if(Vt.createEvent){var it=Vt.createEvent("MouseEvents");it.initMouseEvent("click",!0,!0,Kn,1,xt.screenX,xt.screenY,xt.clientX,xt.clientY,!1,!1,!1,!1,0,null),lt.target.dispatchEvent(it)}}})),J.isDragging=J.isGesturing=J.isPressed=!1,d&&at&&!j&&At.restart(!0),Gt&&k(),m&&at&&m(J),y&&y(J,nt)}},tt=function(gt){return gt.touches&&gt.touches.length>1&&(J.isGesturing=!0)&&H(gt,J.isDragging)},ft=function(){return(J.isGesturing=!1)||R(J)},L=function(gt){if(!A(gt)){var at=te(),nt=we();ot((at-Ee)*ht,(nt-F)*ht,1),Ee=at,F=nt,d&&At.restart(!0)}},Q=function(gt){if(!A(gt)){gt=Xo(gt,h),et&&(Ut=!0);var at=(gt.deltaMode===1?l:gt.deltaMode===2?Kn.innerHeight:1)*g;ot(gt.deltaX*at,gt.deltaY*at,0),d&&!j&&At.restart(!0)}},K=function(gt){if(!A(gt)){var at=gt.clientX,nt=gt.clientY,xt=at-J.x,it=nt-J.y;J.x=at,J.y=nt,Lt=!0,d&&At.restart(!0),(xt||it)&&st(xt,it)}},pt=function(gt){J.event=gt,I(J)},ct=function(gt){J.event=gt,z(J)},mt=function(gt){return A(gt)||Xo(gt,h)&&Z(J)};At=J._dc=xn.delayedCall(f||.25,S).pause(),J.deltaX=J.deltaY=0,J._vx=Eh(0,50,!0),J._vy=Eh(0,50,!0),J.scrollX=te,J.scrollY=we,J.isDragging=J.isGesturing=J.isPressed=!1,Ug(this),J.enable=function(lt){return J.isEnabled||(kn(ie?Vt:o,"scroll",ad),a.indexOf("scroll")>=0&&kn(ie?Vt:o,"scroll",L,de,rt),a.indexOf("wheel")>=0&&kn(o,"wheel",Q,de,rt),(a.indexOf("touch")>=0&&Dg||a.indexOf("pointer")>=0)&&(kn(o,Li[0],_t,de,rt),kn(Vt,Li[2],W),kn(Vt,Li[3],W),bt&&kn(o,"click",Bt,!0,!0),Z&&kn(o,"click",mt),H&&kn(Vt,"gesturestart",tt),R&&kn(Vt,"gestureend",ft),I&&kn(o,Cs+"enter",pt),z&&kn(o,Cs+"leave",ct),V&&kn(o,Cs+"move",K)),J.isEnabled=!0,J.isDragging=J.isGesturing=J.isPressed=Lt=Gt=!1,J._vx.reset(),J._vy.reset(),Ee=te(),F=we(),lt&&lt.type&&_t(lt),Mt&&Mt(J)),J},J.disable=function(){J.isEnabled&&(wa.filter(function(lt){return lt!==J&&Yo(lt.target)}).length||zn(ie?Vt:o,"scroll",ad),J.isPressed&&(J._vx.reset(),J._vy.reset(),zn(j?o:Vt,Li[1],dt,!0)),zn(ie?Vt:o,"scroll",L,rt),zn(o,"wheel",Q,rt),zn(o,Li[0],_t,rt),zn(Vt,Li[2],W),zn(Vt,Li[3],W),zn(o,"click",Bt,!0),zn(o,"click",mt),zn(Vt,"gesturestart",tt),zn(Vt,"gestureend",ft),zn(o,Cs+"enter",pt),zn(o,Cs+"leave",ct),zn(o,Cs+"move",K),J.isEnabled=J.isPressed=J.isDragging=!1,Ft&&Ft(J))},J.kill=J.revert=function(){J.disable();var lt=wa.indexOf(J);lt>=0&&wa.splice(lt,1),yr===J&&(yr=0)},wa.push(J),j&&Yo(o)&&(yr=J),J.enable(_)},Ub(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();We.version="3.15.1";We.create=function(r){return new We(r)};We.register=zg;We.getAll=function(){return wa.slice()};We.getById=function(r){return wa.filter(function(t){return t.vars.id===r})[0]};Fg()&&xn.registerPlugin(We)});var Rt,Ia,Kt,xe,hi,_e,yd,Vh,al,tl,Jo,Ah,In,Xh,dd,Hn,Gg,Vg,La,r_,od,s_,Vn,pd,a_,o_,Kr,md,Sd,Da,Md,Qr,gd,ld,Ch,Ln,cd,Si,$o,Hg,Wg,zb,Xg,qg,Qi,Ko,l_,c_,Ns,h_,u_,kb,Gb,ji,Rh,ci,Dn,Qo,Rs,Zo,Ca,Ra,f_,d_,bd,Td,Is,Ls,el,nl,il,rl,Ke,vi,Ua,wd,sn,yi,Vb,Yg,br,Hh,p_,Hb,Ed,Wb,Ph,dn,fn,Ih,Zg,Lh,Wh,Oh,Dh,Bh,$t,_d,ol,Jg,Pa,hd,jo,Us,Xb,m_,Fs,li,g_,__,Ad,x_,Wn,Ds,$g,qb,v_,Kg,Ps,xd,zh,sl,Tr,vd,kh,Yb,ud,Zb,Na,Nh,Jb,Gh,Qg,$b,jg,y_,Uh,t_,Qt,e_,fd,Fh,Kb,S_,Qb,n_,i_,jb,M_=nr(()=>{kg();Ch=1,Ln=Date.now,cd=Ln(),Si=0,$o=0,Hg=function(t,e,n){var i=ci(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=i,i?t.substr(6,t.length-7):t},Wg=function(t,e){return e&&(!ci(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},zb=function r(){return $o&&requestAnimationFrame(r)},Xg=function(){return Xh=1},qg=function(){return Xh=0},Qi=function(t){return t},Ko=function(t){return Math.round(t*1e5)/1e5||0},l_=function(){return typeof window!="undefined"},c_=function(){return Rt||l_()&&(Rt=window.gsap)&&Rt.registerPlugin&&Rt},Ns=function(t){return!!~yd.indexOf(t)},h_=function(t){return(t==="Height"?Md:Kt["inner"+t])||hi["client"+t]||_e["client"+t]},u_=function(t){return Mr(t,"getBoundingClientRect")||(Ns(t)?function(){return Gh.width=Kt.innerWidth,Gh.height=Md,Gh}:function(){return br(t)})},kb=function(t,e,n){var i=n.d,s=n.d2,a=n.a;return(a=Mr(t,"getBoundingClientRect"))?function(){return a()[i]}:function(){return(e?h_(s):t["client"+s])||0}},Gb=function(t,e){return!e||~Di.indexOf(t)?u_(t):function(){return Gh}},ji=function(t,e){var n=e.s,i=e.d2,s=e.d,a=e.a;return Math.max(0,(n="scroll"+i)&&(a=Mr(t,n))?a()-u_(t)()[s]:Ns(t)?(hi[n]||_e[n])-h_(i):t[n]-t["offset"+i])},Rh=function(t,e){for(var n=0;n<La.length;n+=3)(!e||~e.indexOf(La[n+1]))&&t(La[n],La[n+1],La[n+2])},ci=function(t){return typeof t=="string"},Dn=function(t){return typeof t=="function"},Qo=function(t){return typeof t=="number"},Rs=function(t){return typeof t=="object"},Zo=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},Ca=function(t,e,n){if(t.enabled){var i=t._ctx?t._ctx.add(function(){return e(t,n)}):e(t,n);i&&i.totalTime&&(t.callbackAnimation=i)}},Ra=Math.abs,f_="left",d_="top",bd="right",Td="bottom",Is="width",Ls="height",el="Right",nl="Left",il="Top",rl="Bottom",Ke="padding",vi="margin",Ua="Width",wd="Height",sn="px",yi=function(t){return Kt.getComputedStyle(t.nodeType===Node.DOCUMENT_NODE?t.scrollingElement:t)},Vb=function(t){var e=yi(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},Yg=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},br=function(t,e){var n=e&&yi(t)[dd]!=="matrix(1, 0, 0, 1, 0, 0)"&&Rt.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=t.getBoundingClientRect?t.getBoundingClientRect():t.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},Hh=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},p_=function(t){var e=[],n=t.labels,i=t.duration(),s;for(s in n)e.push(n[s]/i);return e},Hb=function(t){return function(e){return Rt.utils.snap(p_(t),e)}},Ed=function(t){var e=Rt.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(i,s){return i-s});return n?function(i,s,a){a===void 0&&(a=.001);var o;if(!s)return e(i);if(s>0){for(i-=a,o=0;o<n.length;o++)if(n[o]>=i)return n[o];return n[o-1]}else for(o=n.length,i+=a;o--;)if(n[o]<=i)return n[o];return n[0]}:function(i,s,a){a===void 0&&(a=.001);var o=e(i);return!s||Math.abs(o-i)<a||o-i<0==s<0?o:e(s<0?i-t:i+t)}},Wb=function(t){return function(e,n){return Ed(p_(t))(e,n.direction)}},Ph=function(t,e,n,i){return n.split(",").forEach(function(s){return t(e,s,i)})},dn=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:!i,capture:!!s})},fn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},Ih=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},Zg={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Lh={toggleActions:"play",anticipatePin:0},Wh={top:0,left:0,center:.5,bottom:1,right:1},Oh=function(t,e){if(ci(t)){var n=t.indexOf("="),i=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(i*=e/100),t=t.substr(0,n-1)),t=i+(t in Wh?Wh[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},Dh=function(t,e,n,i,s,a,o,l){var c=s.startColor,h=s.endColor,d=s.fontSize,f=s.indent,u=s.fontWeight,g=xe.createElement("div"),_=Ns(n)||Mr(n,"pinType")==="fixed",p=t.indexOf("scroller")!==-1,m=_?_e:n.tagName==="IFRAME"?n.contentDocument.body:n,v=t.indexOf("start")!==-1,w=v?c:h,y="border-color:"+w+";font-size:"+d+";color:"+w+";font-weight:"+u+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((p||l)&&_?"fixed;":"absolute;"),(p||l||!_)&&(y+=(i===$e?bd:Td)+":"+(a+parseFloat(f))+"px;"),o&&(y+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),g._isStart=v,g.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),g.style.cssText=y,g.innerText=e||e===0?t+"-"+e:t,m.children[0]?m.insertBefore(g,m.children[0]):m.appendChild(g),g._offset=g["offset"+i.op.d2],Bh(g,0,i,v),g},Bh=function(t,e,n,i){var s={display:"block"},a=n[i?"os2":"p2"],o=n[i?"p2":"os2"];t._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+a+Ua]=1,s["border"+o+Ua]=0,s[n.p]=e+"px",Rt.set(t,s)},$t=[],_d={},Jg=function(){return Ln()-Si>34&&(ol||(ol=requestAnimationFrame(Tr)))},Pa=function(){(!Vn||!Vn.isPressed||Vn.startX>_e.clientWidth)&&(Jt.cache++,Vn?ol||(ol=requestAnimationFrame(Tr)):Tr(),Si||Fs("scrollStart"),Si=Ln())},hd=function(){o_=Kt.innerWidth,a_=Kt.innerHeight},jo=function(t){Jt.cache++,(t===!0||!In&&!s_&&!xe.fullscreenElement&&!xe.webkitFullscreenElement&&(!pd||o_!==Kt.innerWidth||Math.abs(Kt.innerHeight-a_)>Kt.innerHeight*.25))&&Vh.restart(!0)},Us={},Xb=[],m_=function r(){return fn(Qt,"scrollEnd",r)||Ps(!0)},Fs=function(t){return Us[t]&&Us[t].map(function(e){return e()})||Xb},li=[],g_=function(t){for(var e=0;e<li.length;e+=5)(!t||li[e+4]&&li[e+4].query===t)&&(li[e].style.cssText=li[e+1],li[e].getBBox&&li[e].setAttribute("transform",li[e+2]||""),li[e+3].uncache=1)},__=function(){Jt.cache++,Jt.forEach(function(t){return Dn(t)&&(t.rec=t())})},Ad=function(t,e){var n;for(Hn=0;Hn<$t.length;Hn++)n=$t[Hn],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));Qr=!0,e&&g_(e),e||Fs("revert")},x_=function(t,e){Jt.cache++,(e||!Wn)&&Jt.forEach(function(n){return Dn(n)&&n.cacheID++&&(n.rec=0)}),ci(t)&&(Sd=t,Kt.history.scrollRestoration!==t&&(Kt.history.scrollRestoration=t))},Ds=0,qb=function(){if($g!==Ds){var t=$g=Ds;requestAnimationFrame(function(){return t===Ds&&Ps(!0)})}},v_=function(){_e.appendChild(Da),Md=!Vn&&Da.offsetHeight||Kt.innerHeight,_e.removeChild(Da)},Kg=function(t){return al(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},Ps=function(t,e){if(hi=xe.documentElement,_e=xe.body,yd=[Kt,xe,hi,_e],Si&&!t&&!Qr){dn(Qt,"scrollEnd",m_);return}v_(),Wn=Qt.isRefreshing=!0,Qr||__();var n=Fs("refreshInit");r_&&Qt.sort(),e||Ad(),Jt.forEach(function(i){Dn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),$t.slice(0).forEach(function(i){return i.refresh()}),Qr=!1,$t.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",a=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-a),i.refresh()}}),gd=1,Kg(!0),$t.forEach(function(i){var s=ji(i.scroller,i._dir),a=i.vars.end==="max"||i._endClamp&&i.end>s,o=i._startClamp&&i.start>=s;(a||o)&&i.setPositions(o?s-1:i.start,a?Math.max(o?s:i.start+1,s):i.end,!0)}),Kg(!1),gd=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),Jt.forEach(function(i){Dn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),x_(Sd,1),Vh.pause(),Ds++,Wn=2,Tr(2),$t.forEach(function(i){return Dn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Wn=Qt.isRefreshing=!1,Fs("refresh")},xd=0,zh=1,Tr=function(t){if(t===2||!Wn&&!Qr){Qt.isUpdating=!0,sl&&sl.update(0);var e=$t.length,n=Ln(),i=n-cd>=50,s=e&&$t[0].scroll();if(zh=xd>s?-1:1,Wn||(xd=s),i&&(Si&&!Xh&&n-Si>200&&(Si=0,Fs("scrollEnd")),Jo=cd,cd=n),zh<0){for(Hn=e;Hn-- >0;)$t[Hn]&&$t[Hn].update(0,i);zh=1}else for(Hn=0;Hn<e;Hn++)$t[Hn]&&$t[Hn].update(0,i);Qt.isUpdating=!1}ol=0},vd=[f_,d_,Td,bd,vi+rl,vi+el,vi+il,vi+nl,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],kh=vd.concat([Is,Ls,"boxSizing","max"+Ua,"max"+wd,"position",vi,Ke,Ke+il,Ke+el,Ke+rl,Ke+nl]),Yb=function(t,e,n){Na(n);var i=t._gsap;if(i.spacerIsNative)Na(i.spacerState);else if(t._gsap.swappedIn){var s=e.parentNode;s&&(s.insertBefore(t,e),s.removeChild(e))}t._gsap.swappedIn=!1},ud=function(t,e,n,i){if(!t._gsap.swappedIn){for(var s=vd.length,a=e.style,o=t.style,l;s--;)l=vd[s],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[Td]=o[bd]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[Is]=Hh(t,Pn)+sn,a[Ls]=Hh(t,$e)+sn,a[Ke]=o[vi]=o[d_]=o[f_]="0",Na(i),o[Is]=o["max"+Ua]=n[Is],o[Ls]=o["max"+wd]=n[Ls],o[Ke]=n[Ke],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},Zb=/([A-Z])/g,Na=function(t){if(t){var e=t.t.style,n=t.length,i=0,s,a;for((t.t._gsap||Rt.core.getCache(t.t)).uncache=1;i<n;i+=2)a=t[i+1],s=t[i],a?e[s]=a:e[s]&&e.removeProperty(s.replace(Zb,"-$1").toLowerCase())}},Nh=function(t){for(var e=kh.length,n=t.style,i=[],s=0;s<e;s++)i.push(kh[s],n[kh[s]]);return i.t=t,i},Jb=function(t,e,n){for(var i=[],s=t.length,a=n?8:0,o;a<s;a+=2)o=t[a],i.push(o,o in e?e[o]:t[a+1]);return i.t=t.t,i},Gh={left:0,top:0},Qg=function(t,e,n,i,s,a,o,l,c,h,d,f,u,g){Dn(t)&&(t=t(l)),ci(t)&&t.substr(0,3)==="max"&&(t=f+(t.charAt(4)==="="?Oh("0"+t.substr(3),n):0));var _=u?u.time():0,p,m,v;if(u&&u.seek(0),isNaN(t)||(t=+t),Qo(t))u&&(t=Rt.utils.mapRange(u.scrollTrigger.start,u.scrollTrigger.end,0,f,t)),o&&Bh(o,n,i,!0);else{Dn(e)&&(e=e(l));var w=(t||"0").split(" "),y,T,E,x;v=Gn(e,l)||_e,y=br(v)||{},(!y||!y.left&&!y.top)&&yi(v).display==="none"&&(x=v.style.display,v.style.display="block",y=br(v),x?v.style.display=x:v.style.removeProperty("display")),T=Oh(w[0],y[i.d]),E=Oh(w[1]||"0",n),t=y[i.p]-c[i.p]-h+T+s-E,o&&Bh(o,E,i,n-E<20||o._isStart&&E>20),n-=n-E}if(g&&(l[g]=t||-.001,t<0&&(t=0)),a){var M=t+n,P=a._isStart;p="scroll"+i.d2,Bh(a,M,i,P&&M>20||!P&&(d?Math.max(_e[p],hi[p]):a.parentNode[p])<=M+1),d&&(c=br(o),d&&(a.style[i.op.p]=c[i.op.p]-i.op.m-a._offset+sn))}return u&&v&&(p=br(v),u.seek(f),m=br(v),u._caScrollDist=p[i.p]-m[i.p],t=t/u._caScrollDist*f),u&&u.seek(_),u?t:Math.round(t)},$b=/(webkit|moz|length|cssText|inset)/i,jg=function(t,e,n,i){if(t.parentNode!==e){var s=t.style,a,o;if(e===_e){t._stOrig=s.cssText,o=yi(t);for(a in o)!+a&&!$b.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=n,s.left=i}else s.cssText=t._stOrig;Rt.core.getCache(t).uncache=1,e.appendChild(t)}},y_=function(t,e,n){var i=e,s=i;return function(a){var o=Math.round(t());return o!==i&&o!==s&&Math.abs(o-i)>3&&Math.abs(o-s)>3&&(a=o,n&&n()),s=i,i=Math.round(a),i}},Uh=function(t,e,n){var i={};i[e.p]="+="+n,Rt.set(t,i)},t_=function(t,e){var n=Sr(t,e),i="_scroll"+e.p2,s=function a(o,l,c,h,d){var f=a.tween,u=l.onComplete,g={};c=c||n();var _=y_(n,c,function(){f.kill(),a.tween=0});return d=h&&d||0,h=h||o-c,f&&f.kill(),l[i]=o,l.inherit=!1,l.modifiers=g,g[i]=function(){return _(c+h*f.ratio+d*f.ratio*f.ratio)},l.onUpdate=function(){Jt.cache++,a.tween&&Tr()},l.onComplete=function(){a.tween=0,u&&u.call(f)},f=a.tween=Rt.to(t,l),f};return t[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},dn(t,"wheel",n.wheelHandler),Qt.isTouch&&dn(t,"touchmove",n.wheelHandler),s},Qt=(function(){function r(e,n){Ia||r.register(Rt)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),md(this),this.init(e,n)}var t=r.prototype;return t.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!$o){this.update=this.refresh=this.kill=Qi;return}n=Yg(ci(n)||Qo(n)||n.nodeType?{trigger:n}:n,Lh);var s=n,a=s.onUpdate,o=s.toggleClass,l=s.id,c=s.onToggle,h=s.onRefresh,d=s.scrub,f=s.trigger,u=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,p=s.anticipatePin,m=s.onScrubComplete,v=s.onSnapComplete,w=s.once,y=s.snap,T=s.pinReparent,E=s.pinSpacer,x=s.containerAnimation,M=s.fastScrollEnd,P=s.preventOverlaps,C=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Pn:$e,N=!d&&d!==0,D=Gn(n.scroller||Kt),B=Rt.core.getCache(D),I=Ns(D),z=("pinType"in n?n.pinType:Mr(D,"pinType")||I&&"fixed")==="fixed",V=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],O=N&&n.toggleActions.split(" "),j="markers"in n?n.markers:Lh.markers,H=I?0:parseFloat(yi(D)["border"+C.p2+Ua])||0,R=this,et=n.onRefreshInit&&function(){return n.onRefreshInit(R)},Mt=kb(D,I,C),Ft=Gb(D,I),Z=0,ht=0,rt=0,bt=Sr(D,C),ut,Pt,ue,At,Gt,Lt,Ut,le,ne,J,Yt,ze,de,te,we,Ee,F,he,ie,Vt,$,Ct,vt,Bt,A,S,k,ot,st,dt,_t,W,tt,ft,L,Q,K,pt,ct;if(R._startClamp=R._endClamp=!1,R._dir=C,p*=45,R.scroller=D,R.scroll=x?x.time.bind(x):bt,At=bt(),Qr&&bt.rec==null&&(bt.rec=At),R.vars=n,i=i||n.animation,"refreshPriority"in n&&(r_=1,n.refreshPriority===-9999&&(sl=R)),B.tweenScroll=B.tweenScroll||{top:t_(D,$e),left:t_(D,Pn)},R.tweenTo=ut=B.tweenScroll[C.p],R.scrubDuration=function(nt){tt=Qo(nt)&&nt,tt?W?W.duration(nt):W=Rt.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:tt,paused:!0,onComplete:function(){return m&&m(R)}}):(W&&W.progress(1).kill(),W=0)},i&&(i.vars.lazy=!1,i._initted&&!R.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),R.animation=i.pause(),i.scrollTrigger=R,R.scrubDuration(d),dt=0,l||(l=i.vars.id)),y&&((!Rs(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in _e.style&&Rt.set(I?[_e,hi]:D,{scrollBehavior:"auto"}),Jt.forEach(function(nt){return Dn(nt)&&nt.target===(I?xe.scrollingElement||hi:D)&&(nt.smooth=!1)}),ue=Dn(y.snapTo)?y.snapTo:y.snapTo==="labels"?Hb(i):y.snapTo==="labelsDirectional"?Wb(i):y.directional!==!1?function(nt,xt){return Ed(y.snapTo)(nt,Ln()-ht<500?0:xt.direction)}:Rt.utils.snap(y.snapTo),ft=y.duration||{min:.1,max:2},ft=Rs(ft)?tl(ft.min,ft.max):tl(ft,ft),L=Rt.delayedCall(y.delay||tt/2||.1,function(){var nt=bt(),xt=Ln()-ht<500,it=ut.tween;if((xt||Math.abs(R.getVelocity())<10)&&!it&&!Xh&&Z!==nt){var wt=(nt-Lt)/te,ee=i&&!N?i.totalProgress():wt,Xt=xt?0:(ee-_t)/(Ln()-Jo)*1e3||0,Pe=Rt.utils.clamp(-wt,1-wt,Ra(Xt/2)*Xt/.185),qe=wt+(y.inertia===!1?0:Pe),Ie,ye,me=y,Qe=me.onStart,Se=me.onInterrupt,vn=me.onComplete;if(Ie=ue(qe,R),Qo(Ie)||(Ie=qe),ye=Math.max(0,Math.round(Lt+Ie*te)),nt<=Ut&&nt>=Lt&&ye!==nt){if(it&&!it._initted&&it.data<=Ra(ye-nt))return;y.inertia===!1&&(Pe=Ie-wt),ut(ye,{duration:ft(Ra(Math.max(Ra(qe-ee),Ra(Ie-ee))*.185/Xt/.05||0)),ease:y.ease||"power3",data:Ra(ye-nt),onInterrupt:function(){return L.restart(!0)&&Se&&Ca(R,Se)},onComplete:function(){R.update(),Z=bt(),i&&!N&&(W?W.resetTo("totalProgress",Ie,i._tTime/i._tDur):i.progress(Ie)),dt=_t=i&&!N?i.totalProgress():R.progress,v&&v(R),vn&&Ca(R,vn)}},nt,Pe*te,ye-nt-Pe*te),Qe&&Ca(R,Qe,ut.tween)}}else R.isActive&&Z!==nt&&L.restart(!0)}).pause()),l&&(_d[l]=R),f=R.trigger=Gn(f||u!==!0&&u),ct=f&&f._gsap&&f._gsap.stRevert,ct&&(ct=ct(R)),u=u===!0?f:Gn(u),ci(o)&&(o={targets:f,className:o}),u&&(g===!1||g===vi||(g=!g&&u.parentNode&&u.parentNode.style&&yi(u.parentNode).display==="flex"?!1:Ke),R.pin=u,Pt=Rt.core.getCache(u),Pt.spacer?we=Pt.pinState:(E&&(E=Gn(E),E&&!E.nodeType&&(E=E.current||E.nativeElement),Pt.spacerIsNative=!!E,E&&(Pt.spacerState=Nh(E))),Pt.spacer=he=E||xe.createElement("div"),he.classList.add("pin-spacer"),l&&he.classList.add("pin-spacer-"+l),Pt.pinState=we=Nh(u)),n.force3D!==!1&&Rt.set(u,{force3D:!0}),R.spacer=he=Pt.spacer,st=yi(u),Bt=st[g+C.os2],Vt=Rt.getProperty(u),$=Rt.quickSetter(u,C.a,sn),ud(u,he,st),F=Nh(u)),j){ze=Rs(j)?Yg(j,Zg):Zg,J=Dh("scroller-start",l,D,C,ze,0),Yt=Dh("scroller-end",l,D,C,ze,0,J),ie=J["offset"+C.op.d2];var mt=Gn(Mr(D,"content")||D);le=this.markerStart=Dh("start",l,mt,C,ze,ie,0,x),ne=this.markerEnd=Dh("end",l,mt,C,ze,ie,0,x),x&&(pt=Rt.quickSetter([le,ne],C.a,sn)),!z&&!(Di.length&&Mr(D,"fixedMarkers")===!0)&&(Vb(I?_e:D),Rt.set([J,Yt],{force3D:!0}),S=Rt.quickSetter(J,C.a,sn),ot=Rt.quickSetter(Yt,C.a,sn))}if(x){var lt=x.vars.onUpdate,gt=x.vars.onUpdateParams;x.eventCallback("onUpdate",function(){R.update(0,0,1),lt&&lt.apply(x,gt||[])})}if(R.previous=function(){return $t[$t.indexOf(R)-1]},R.next=function(){return $t[$t.indexOf(R)+1]},R.revert=function(nt,xt){if(!xt)return R.kill(!0);var it=nt!==!1||!R.enabled,wt=In;it!==R.isReverted&&(it&&(Q=Math.max(bt(),R.scroll.rec||0),rt=R.progress,K=i&&i.progress()),le&&[le,ne,J,Yt].forEach(function(ee){return ee.style.display=it?"none":"block"}),it&&(In=R,R.update(it)),u&&(!T||!R.isActive)&&(it?Yb(u,he,we):ud(u,he,yi(u),A)),it||R.update(it),In=wt,R.isReverted=it)},R.refresh=function(nt,xt,it,wt){if(!((In||!R.enabled)&&!xt)){if(u&&nt&&Si){dn(r,"scrollEnd",m_);return}!Wn&&et&&et(R),In=R,ut.tween&&!it&&(ut.tween.kill(),ut.tween=0),W&&W.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(G){return G.vars.immediateRender&&G.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),R.isReverted||R.revert(!0,!0),R._subPinOffset=!1;var ee=Mt(),Xt=Ft(),Pe=x?x.duration():ji(D,C),qe=te<=.01||!te,Ie=0,ye=wt||0,me=Rs(it)?it.end:n.end,Qe=n.endTrigger||f,Se=Rs(it)?it.start:n.start||(n.start===0||!f?0:u?"0 0":"0 100%"),vn=R.pinnedContainer=n.pinnedContainer&&Gn(n.pinnedContainer,R),Qn=f&&Math.max(0,$t.indexOf(R))||0,ke=Qn,Ye,je,jn,Os,tn,Ge,ui,Fa,ll,wr,b,U,Y;for(j&&Rs(it)&&(U=Rt.getProperty(J,C.p),Y=Rt.getProperty(Yt,C.p));ke-- >0;)Ge=$t[ke],Ge.end||Ge.refresh(0,1)||(In=R),ui=Ge.pin,ui&&(ui===f||ui===u||ui===vn)&&!Ge.isReverted&&(wr||(wr=[]),wr.unshift(Ge),Ge.revert(!0,!0)),Ge!==$t[ke]&&(Qn--,ke--);for(Dn(Se)&&(Se=Se(R)),Se=Hg(Se,"start",R),Lt=Qg(Se,f,ee,C,bt(),le,J,R,Xt,H,z,Pe,x,R._startClamp&&"_startClamp")||(u?-.001:0),Dn(me)&&(me=me(R)),ci(me)&&!me.indexOf("+=")&&(~me.indexOf(" ")?me=(ci(Se)?Se.split(" ")[0]:"")+me:(Ie=Oh(me.substr(2),ee),me=ci(Se)?Se:(x?Rt.utils.mapRange(0,x.duration(),x.scrollTrigger.start,x.scrollTrigger.end,Lt):Lt)+Ie,Qe=f)),me=Hg(me,"end",R),Ut=Math.max(Lt,Qg(me||(Qe?"100% 0":Pe),Qe,ee,C,bt()+Ie,ne,Yt,R,Xt,H,z,Pe,x,R._endClamp&&"_endClamp"))||-.001,Ie=0,ke=Qn;ke--;)Ge=$t[ke]||{},ui=Ge.pin,ui&&Ge.start-Ge._pinPush<=Lt&&!x&&Ge.end>0&&(Ye=Ge.end-(R._startClamp?Math.max(0,Ge.start):Ge.start),(ui===f&&Ge.start-Ge._pinPush<Lt||ui===vn)&&isNaN(Se)&&(Ie+=Ye*(1-Ge.progress)),ui===u&&(ye+=Ye));if(Lt+=Ie,Ut+=Ie,R._startClamp&&(R._startClamp+=Ie),R._endClamp&&!Wn&&(R._endClamp=Ut||-.001,Ut=Math.min(Ut,ji(D,C))),te=Ut-Lt||(Lt-=.01)&&.001,qe&&(rt=Rt.utils.clamp(0,1,Rt.utils.normalize(Lt,Ut,Q))),R._pinPush=ye,le&&Ie&&(Ye={},Ye[C.a]="+="+Ie,vn&&(Ye[C.p]="-="+bt()),Rt.set([le,ne],Ye)),u&&!(gd&&R.end>=ji(D,C)))Ye=yi(u),Os=C===$e,jn=bt(),Ct=parseFloat(Vt(C.a))+ye,!Pe&&Ut>1&&(b=(I?xe.scrollingElement||hi:D).style,b={style:b,value:b["overflow"+C.a.toUpperCase()]},I&&yi(_e)["overflow"+C.a.toUpperCase()]!=="scroll"&&(b.style["overflow"+C.a.toUpperCase()]="scroll")),ud(u,he,Ye),F=Nh(u),je=br(u,!0),Fa=z&&Sr(D,Os?Pn:$e)(),g?(A=[g+C.os2,te+ye+sn],A.t=he,ke=g===Ke?Hh(u,C)+te+ye:0,ke&&(A.push(C.d,ke+sn),he.style.flexBasis!=="auto"&&(he.style.flexBasis=ke+sn)),Na(A),vn&&$t.forEach(function(G){G.pin===vn&&G.vars.pinSpacing!==!1&&(G._subPinOffset=!0)}),z&&bt(Q)):(ke=Hh(u,C),ke&&he.style.flexBasis!=="auto"&&(he.style.flexBasis=ke+sn)),z&&(tn={top:je.top+(Os?jn-Lt:Fa)+sn,left:je.left+(Os?Fa:jn-Lt)+sn,boxSizing:"border-box",position:"fixed"},tn[Is]=tn["max"+Ua]=Math.ceil(je.width)+sn,tn[Ls]=tn["max"+wd]=Math.ceil(je.height)+sn,tn[vi]=tn[vi+il]=tn[vi+el]=tn[vi+rl]=tn[vi+nl]="0",tn[Ke]=Ye[Ke],tn[Ke+il]=Ye[Ke+il],tn[Ke+el]=Ye[Ke+el],tn[Ke+rl]=Ye[Ke+rl],tn[Ke+nl]=Ye[Ke+nl],Ee=Jb(we,tn,T),Wn&&bt(0)),i?(ll=i._initted,od(1),i.render(i.duration(),!0,!0),vt=Vt(C.a)-Ct+te+ye,k=Math.abs(te-vt)>1,z&&k&&Ee.splice(Ee.length-2,2),i.render(0,!0,!0),ll||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),od(0)):vt=te,b&&(b.value?b.style["overflow"+C.a.toUpperCase()]=b.value:b.style.removeProperty("overflow-"+C.a));else if(f&&bt()&&!x)for(je=f.parentNode;je&&je!==_e;)je._pinOffset&&(Lt-=je._pinOffset,Ut-=je._pinOffset),je=je.parentNode;wr&&wr.forEach(function(G){return G.revert(!1,!0)}),R.start=Lt,R.end=Ut,At=Gt=Wn?Q:bt(),!x&&!Wn&&!Qr&&(At<Q&&bt(Q),R.scroll.rec=0),R.revert(!1,!0),ht=Ln(),L&&(Z=-1,L.restart(!0)),In=0,i&&N&&(i._initted||K)&&i.progress()!==K&&i.progress(K||0,!0).render(i.time(),!0,!0),(qe||rt!==R.progress||x||_||i&&!i._initted)&&(i&&!N&&(i._initted||rt||i.vars.immediateRender!==!1)&&i.totalProgress(x&&Lt<-.001&&!rt?Rt.utils.normalize(Lt,Ut,0):rt,!0),R.progress=qe||(At-Lt)/te===rt?0:rt),u&&g&&(he._pinOffset=Math.round(R.progress*vt)),W&&W.invalidate(),isNaN(U)||(U-=Rt.getProperty(J,C.p),Y-=Rt.getProperty(Yt,C.p),Uh(J,C,U),Uh(le,C,U-(wt||0)),Uh(Yt,C,Y),Uh(ne,C,Y-(wt||0))),qe&&!Wn&&R.update(),h&&!Wn&&!de&&(de=!0,h(R),de=!1)}},R.getVelocity=function(){return(bt()-Gt)/(Ln()-Jo)*1e3||0},R.endAnimation=function(){Zo(R.callbackAnimation),i&&(W?W.progress(1):i.paused()?N||Zo(i,R.direction<0,1):Zo(i,i.reversed()))},R.labelToScroll=function(nt){return i&&i.labels&&(Lt||R.refresh()||Lt)+i.labels[nt]/i.duration()*te||0},R.getTrailing=function(nt){var xt=$t.indexOf(R),it=R.direction>0?$t.slice(0,xt).reverse():$t.slice(xt+1);return(ci(nt)?it.filter(function(wt){return wt.vars.preventOverlaps===nt}):it).filter(function(wt){return R.direction>0?wt.end<=Lt:wt.start>=Ut})},R.update=function(nt,xt,it){if(!(x&&!it&&!nt)){var wt=Wn===!0?Q:R.scroll(),ee=nt?0:(wt-Lt)/te,Xt=ee<0?0:ee>1?1:ee||0,Pe=R.progress,qe,Ie,ye,me,Qe,Se,vn,Qn;if(xt&&(Gt=At,At=x?bt():wt,y&&(_t=dt,dt=i&&!N?i.totalProgress():Xt)),p&&u&&!In&&!Ch&&Si&&(!Xt&&Lt<wt+(wt-Gt)/(Ln()-Jo)*p?Xt=1e-4:Xt===1&&Ut>wt+(wt-Gt)/(Ln()-Jo)*p&&(Xt=.9999)),Xt!==Pe&&R.enabled){if(qe=R.isActive=!!Xt&&Xt<1,Ie=!!Pe&&Pe<1,Se=qe!==Ie,Qe=Se||!!Xt!=!!Pe,R.direction=Xt>Pe?1:-1,R.progress=Xt,Qe&&!In&&(ye=Xt&&!Pe?0:Xt===1?1:Pe===1?2:3,N&&(me=!Se&&O[ye+1]!=="none"&&O[ye+1]||O[ye],Qn=i&&(me==="complete"||me==="reset"||me in i))),P&&(Se||Qn)&&(Qn||d||!i)&&(Dn(P)?P(R):R.getTrailing(P).forEach(function(jn){return jn.endAnimation()})),N||(W&&!In&&!Ch?(W._dp._time-W._start!==W._time&&W.render(W._dp._time-W._start),W.resetTo?W.resetTo("totalProgress",Xt,i._tTime/i._tDur):(W.vars.totalProgress=Xt,W.invalidate().restart())):i&&i.totalProgress(Xt,!!(In&&(ht||nt)))),u){if(nt&&g&&(he.style[g+C.os2]=Bt),!z)$(Ko(Ct+vt*Xt));else if(Qe){if(vn=!nt&&Xt>Pe&&Ut+1>wt&&wt+1>=ji(D,C),T)if(!nt&&(qe||vn)){var ke=br(u,!0),Ye=wt-Lt;jg(u,_e,ke.top+(C===$e?Ye:0)+sn,ke.left+(C===$e?0:Ye)+sn)}else jg(u,he);Na(qe||vn?Ee:F),k&&Xt<1&&qe||$(Ct+(Xt===1&&!vn?vt:0))}}y&&!ut.tween&&!In&&!Ch&&L.restart(!0),o&&(Se||w&&Xt&&(Xt<1||!ld))&&al(o.targets).forEach(function(jn){return jn.classList[qe||w?"add":"remove"](o.className)}),a&&!N&&!nt&&a(R),Qe&&!In?(N&&(Qn&&(me==="complete"?i.pause().totalProgress(1):me==="reset"?i.restart(!0).pause():me==="restart"?i.restart(!0):i[me]()),a&&a(R)),(Se||!ld)&&(c&&Se&&Ca(R,c),V[ye]&&Ca(R,V[ye]),w&&(Xt===1?R.kill(!1,1):V[ye]=0),Se||(ye=Xt===1?1:3,V[ye]&&Ca(R,V[ye]))),M&&!qe&&Math.abs(R.getVelocity())>(Qo(M)?M:2500)&&(Zo(R.callbackAnimation),W?W.progress(1):Zo(i,me==="reverse"?1:!Xt,1))):N&&a&&!In&&a(R)}if(ot){var je=x?wt/x.duration()*(x._caScrollDist||0):wt;S(je+(J._isFlipped?1:0)),ot(je)}pt&&pt(-wt/x.duration()*(x._caScrollDist||0))}},R.enable=function(nt,xt){R.enabled||(R.enabled=!0,dn(D,"resize",jo),I||dn(D,"scroll",Pa),et&&dn(r,"refreshInit",et),nt!==!1&&(R.progress=rt=0,At=Gt=Z=bt()),xt!==!1&&R.refresh())},R.getTween=function(nt){return nt&&ut?ut.tween:W},R.setPositions=function(nt,xt,it,wt){if(x){var ee=x.scrollTrigger,Xt=x.duration(),Pe=ee.end-ee.start;nt=ee.start+Pe*nt/Xt,xt=ee.start+Pe*xt/Xt}R.refresh(!1,!1,{start:Wg(nt,it&&!!R._startClamp),end:Wg(xt,it&&!!R._endClamp)},wt),R.update()},R.adjustPinSpacing=function(nt){if(A&&nt){var xt=A.indexOf(C.d)+1;A[xt]=parseFloat(A[xt])+nt+sn,A[1]=parseFloat(A[1])+nt+sn,Na(A)}},R.disable=function(nt,xt){if(nt!==!1&&R.revert(!0,!0),R.enabled&&(R.enabled=R.isActive=!1,xt||W&&W.pause(),Q=0,Pt&&(Pt.uncache=1),et&&fn(r,"refreshInit",et),L&&(L.pause(),ut.tween&&ut.tween.kill()&&(ut.tween=0)),!I)){for(var it=$t.length;it--;)if($t[it].scroller===D&&$t[it]!==R)return;fn(D,"resize",jo),I||fn(D,"scroll",Pa)}},R.kill=function(nt,xt){R.disable(nt,xt),W&&!xt&&W.kill(),l&&delete _d[l];var it=$t.indexOf(R);it>=0&&$t.splice(it,1),it===Hn&&zh>0&&Hn--,it=0,$t.forEach(function(wt){return wt.scroller===R.scroller&&(it=1)}),it||Wn||Qr||(R.scroll.rec=0),i&&(i.scrollTrigger=null,nt&&i.revert({kill:!1}),xt||i.kill()),le&&[le,ne,J,Yt].forEach(function(wt){return wt.parentNode&&wt.parentNode.removeChild(wt)}),sl===R&&(sl=0),u&&(Pt&&(Pt.uncache=1),it=0,$t.forEach(function(wt){return wt.pin===u&&it++}),it||(Pt.spacer=0)),n.onKill&&n.onKill(R)},$t.push(R),R.enable(!1,!1),ct&&ct(R),i&&i.add&&!te){var at=R.update;R.update=function(){R.update=at,Jt.cache++,Lt||Ut||R.refresh()},Rt.delayedCall(.01,R.update),te=.01,Lt=Ut=0}else R.refresh();u&&qb()},r.register=function(n){return Ia||(Rt=n||c_(),l_()&&window.document&&r.enable(),Ia=$o),Ia},r.defaults=function(n){if(n)for(var i in n)Lh[i]=n[i];return Lh},r.disable=function(n,i){$o=0,$t.forEach(function(a){return a[i?"kill":"disable"](n)}),fn(Kt,"wheel",Pa),fn(xe,"scroll",Pa),clearInterval(Ah),fn(xe,"touchcancel",Qi),fn(_e,"touchstart",Qi),Ph(fn,xe,"pointerdown,touchstart,mousedown",Xg),Ph(fn,xe,"pointerup,touchend,mouseup",qg),Vh.kill(),Rh(fn);for(var s=0;s<Jt.length;s+=3)Ih(fn,Jt[s],Jt[s+1]),Ih(fn,Jt[s],Jt[s+2])},r.enable=function(){if(Kt=window,xe=document,hi=xe.documentElement,_e=xe.body,Rt){if(al=Rt.utils.toArray,tl=Rt.utils.clamp,md=Rt.core.context||Qi,od=Rt.core.suppressOverwrites||Qi,Sd=Kt.history.scrollRestoration||"auto",xd=Kt.pageYOffset||0,Rt.core.globals("ScrollTrigger",r),_e){$o=1,Da=document.createElement("div"),Da.style.height="100vh",Da.style.position="absolute",v_(),zb(),We.register(Rt),r.isTouch=We.isTouch,Kr=We.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),pd=We.isTouch===1,dn(Kt,"wheel",Pa),yd=[Kt,xe,hi,_e],Rt.matchMedia?(r.matchMedia=function(h){var d=Rt.matchMedia(),f;for(f in h)d.add(f,h[f]);return d},Rt.addEventListener("matchMediaInit",function(){__(),Ad()}),Rt.addEventListener("matchMediaRevert",function(){return g_()}),Rt.addEventListener("matchMedia",function(){Ps(0,1),Fs("matchMedia")}),Rt.matchMedia().add("(orientation: portrait)",function(){return hd(),hd})):console.warn("Requires GSAP 3.11.0 or later"),hd(),dn(xe,"scroll",Pa);var n=_e.hasAttribute("style"),i=_e.style,s=i.borderTopStyle,a=Rt.core.Animation.prototype,o,l;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",o=br(_e),$e.m=Math.round(o.top+$e.sc())||0,Pn.m=Math.round(o.left+Pn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(_e.setAttribute("style",""),_e.removeAttribute("style")),Ah=setInterval(Jg,250),Rt.delayedCall(.5,function(){return Ch=0}),dn(xe,"touchcancel",Qi),dn(_e,"touchstart",Qi),Ph(dn,xe,"pointerdown,touchstart,mousedown",Xg),Ph(dn,xe,"pointerup,touchend,mouseup",qg),dd=Rt.utils.checkPrefix("transform"),kh.push(dd),Ia=Ln(),Vh=Rt.delayedCall(.2,Ps).pause(),La=[xe,"visibilitychange",function(){var h=Kt.innerWidth,d=Kt.innerHeight;xe.hidden?(Gg=h,Vg=d):(Gg!==h||Vg!==d)&&jo()},xe,"DOMContentLoaded",Ps,Kt,"load",Ps,Kt,"resize",jo],Rh(dn),$t.forEach(function(h){return h.enable(0,1)}),l=0;l<Jt.length;l+=3)Ih(fn,Jt[l],Jt[l+1]),Ih(fn,Jt[l],Jt[l+2])}else if(xe){var c=function h(){r.enable(),xe.removeEventListener("DOMContentLoaded",h)};xe.addEventListener("DOMContentLoaded",c)}}},r.config=function(n){"limitCallbacks"in n&&(ld=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Ah)||(Ah=i)&&setInterval(Jg,i),"ignoreMobileResize"in n&&(pd=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Rh(fn)||Rh(dn,n.autoRefreshEvents||"none"),s_=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Gn(n),a=Jt.indexOf(s),o=Ns(s);~a&&Jt.splice(a,o?6:2),i&&(o?Di.unshift(Kt,i,_e,i,hi,i):Di.unshift(s,i))},r.clearMatchMedia=function(n){$t.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var a=(ci(n)?Gn(n):n).getBoundingClientRect(),o=a[s?Is:Ls]*i||0;return s?a.right-o>0&&a.left+o<Kt.innerWidth:a.bottom-o>0&&a.top+o<Kt.innerHeight},r.positionInViewport=function(n,i,s){ci(n)&&(n=Gn(n));var a=n.getBoundingClientRect(),o=a[s?Is:Ls],l=i==null?o/2:i in Wh?Wh[i]*o:~i.indexOf("%")?parseFloat(i)*o/100:parseFloat(i)||0;return s?(a.left+l)/Kt.innerWidth:(a.top+l)/Kt.innerHeight},r.killAll=function(n){if($t.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=Us.killAll||[];Us={},i.forEach(function(s){return s()})}},r})();Qt.version="3.15.1";Qt.saveStyles=function(r){return r?al(r).forEach(function(t){if(t&&t.style){var e=li.indexOf(t);e>=0&&li.splice(e,5),li.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),Rt.core.getCache(t),md())}}):li};Qt.revert=function(r,t){return Ad(!r,t)};Qt.create=function(r,t){return new Qt(r,t)};Qt.refresh=function(r){return r?jo(!0):(Ia||Qt.register())&&Ps(!0)};Qt.update=function(r){return++Jt.cache&&Tr(r===!0?2:0)};Qt.clearScrollMemory=x_;Qt.maxScroll=function(r,t){return ji(r,t?Pn:$e)};Qt.getScrollFunc=function(r,t){return Sr(Gn(r),t?Pn:$e)};Qt.getById=function(r){return _d[r]};Qt.getAll=function(){return $t.filter(function(r){return r.vars.id!=="ScrollSmoother"})};Qt.isScrolling=function(){return!!Si};Qt.snapDirectional=Ed;Qt.addEventListener=function(r,t){var e=Us[r]||(Us[r]=[]);~e.indexOf(t)||e.push(t)};Qt.removeEventListener=function(r,t){var e=Us[r],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};Qt.batch=function(r,t){var e=[],n={},i=t.interval||.016,s=t.batchMax||1e9,a=function(c,h){var d=[],f=[],u=Rt.delayedCall(i,function(){h(d,f),d=[],f=[]}).pause();return function(g){d.length||u.restart(!0),d.push(g.trigger),f.push(g),s<=d.length&&u.progress(1)}},o;for(o in t)n[o]=o.substr(0,2)==="on"&&Dn(t[o])&&o!=="onRefreshInit"?a(o,t[o]):t[o];return Dn(s)&&(s=s(),dn(Qt,"refresh",function(){return s=t.batchMax()})),al(r).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,e.push(Qt.create(c))}),e};e_=function(t,e,n,i){return e>i?t(i):e<0&&t(0),n>i?(i-e)/(n-e):n<0?e/(e-n):1},fd=function r(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(We.isTouch?" pinch-zoom":""):"none",t===hi&&r(_e,e)},Fh={auto:1,scroll:1},Kb=function(t){var e=t.event,n=t.target,i=t.axis,s=(e.changedTouches?e.changedTouches[0]:e).target,a=s._gsap||Rt.core.getCache(s),o=Ln(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s!==_e&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Fh[(l=yi(s)).overflowY]||Fh[l.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==n&&!Ns(s)&&(Fh[(l=yi(s)).overflowY]||Fh[l.overflowX]),a._isScrollT=o}(a._isScroll||i==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},S_=function(t,e,n,i){return We.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:i=i&&Kb,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&dn(xe,We.eventTypes[0],i_,!1,!0)},onDisable:function(){return fn(xe,We.eventTypes[0],i_,!0)}})},Qb=/(input|label|select|textarea)/i,i_=function(t){var e=Qb.test(t.target.tagName);(e||n_)&&(t._gsapAllow=!0,n_=e)},jb=function(t){Rs(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,i=e.momentum,s=e.allowNestedScroll,a=e.onRelease,o,l,c=Gn(t.target)||hi,h=Rt.core.globals().ScrollSmoother,d=h&&h.get(),f=Kr&&(t.content&&Gn(t.content)||d&&t.content!==!1&&!d.smooth()&&d.content()),u=Sr(c,$e),g=Sr(c,Pn),_=1,p=(We.isTouch&&Kt.visualViewport?Kt.visualViewport.scale*Kt.visualViewport.width:Kt.outerWidth)/Kt.innerWidth,m=0,v=Dn(i)?function(){return i(o)}:function(){return i||2.8},w,y,T=S_(c,t.type,!0,s),E=function(){return y=!1},x=Qi,M=Qi,P=function(){l=ji(c,$e),M=tl(Kr?1:0,l),n&&(x=tl(0,ji(c,Pn))),w=Ds},C=function(){f._gsap.y=Ko(parseFloat(f._gsap.y)+u.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",u.offset=u.cacheID=0},N=function(){if(y){requestAnimationFrame(E);var j=Ko(o.deltaY/2),H=M(u.v-j);if(f&&H!==u.v+u.offset){u.offset=H-u.v;var R=Ko((parseFloat(f&&f._gsap.y)||0)-u.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+R+", 0, 1)",f._gsap.y=R+"px",u.cacheID=Jt.cache,Tr()}return!0}u.offset&&C(),y=!0},D,B,I,z,V=function(){P(),D.isActive()&&D.vars.scrollY>l&&(u()>l?D.progress(1)&&u(l):D.resetTo("scrollY",l))};return f&&Rt.set(f,{y:"+=0"}),t.ignoreCheck=function(O){return Kr&&O.type==="touchmove"&&N(O)||_>1.05&&O.type!=="touchstart"||o.isGesturing||O.touches&&O.touches.length>1},t.onPress=function(){y=!1;var O=_;_=Ko((Kt.visualViewport&&Kt.visualViewport.scale||1)/p),D.pause(),O!==_&&fd(c,_>1.01?!0:n?!1:"x"),B=g(),I=u(),P(),w=Ds},t.onRelease=t.onGestureStart=function(O,j){if(u.offset&&C(),!j)z.restart(!0);else{Jt.cache++;var H=v(),R,et;n&&(R=g(),et=R+H*.05*-O.velocityX/.227,H*=e_(g,R,et,ji(c,Pn)),D.vars.scrollX=x(et)),R=u(),et=R+H*.05*-O.velocityY/.227,H*=e_(u,R,et,ji(c,$e)),D.vars.scrollY=M(et),D.invalidate().duration(H).play(.01),(Kr&&D.vars.scrollY>=l||R>=l-1)&&Rt.to({},{onUpdate:V,duration:H})}a&&a(O)},t.onWheel=function(){D._ts&&D.pause(),Ln()-m>1e3&&(w=0,m=Ln())},t.onChange=function(O,j,H,R,et){if(Ds!==w&&P(),j&&n&&g(x(R[2]===j?B+(O.startX-O.x):g()+j-R[1])),H){u.offset&&C();var Mt=et[2]===H,Ft=Mt?I+O.startY-O.y:u()+H-et[1],Z=M(Ft);Mt&&Ft!==Z&&(I+=Z-Ft),u(Z)}(H||j)&&Tr()},t.onEnable=function(){fd(c,n?!1:"x"),Qt.addEventListener("refresh",V),dn(Kt,"resize",V),u.smooth&&(u.target.style.scrollBehavior="auto",u.smooth=g.smooth=!1),T.enable()},t.onDisable=function(){fd(c,!0),fn(Kt,"resize",V),Qt.removeEventListener("refresh",V),T.kill()},t.lockAxis=t.lockAxis!==!1,o=new We(t),o.iOS=Kr,Kr&&!u()&&u(1),Kr&&Rt.ticker.add(Qi),z=o._dc,D=Rt.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:y_(u,u(),function(){return D.pause()})},onUpdate:Tr,onComplete:z.vars.onComplete}),o};Qt.sort=function(r){if(Dn(r))return $t.sort(r);var t=Kt.pageYOffset||0;return Qt.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+Kt.innerHeight}),$t.sort(r||function(e,n){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};Qt.observe=function(r){return new We(r)};Qt.normalizeScroll=function(r){if(typeof r=="undefined")return Vn;if(r===!0&&Vn)return Vn.enable();if(r===!1){Vn&&Vn.kill(),Vn=r;return}var t=r instanceof We?r:jb(r);return Vn&&Vn.target===t.target&&Vn.kill(),Ns(t.target)&&(Vn=t),t};Qt.core={_getVelocityProp:Eh,_inputObserver:S_,_scrollers:Jt,_proxies:Di,bridge:{ss:function(){Si||Fs("scrollStart"),Si=Ln()},ref:function(){return In}}};c_()&&Rt.registerPlugin(Qt)});var uT=E_(()=>{eh();bm();Tm();Pg();M_();Ne.registerPlugin(Qt);var tr=window.matchMedia("(prefers-reduced-motion: reduce)").matches,Pd=window.matchMedia("(pointer: fine)").matches;function tT(){try{let r=document.createElement("canvas");return!!(window.WebGLRenderingContext&&(r.getContext("webgl2")||r.getContext("webgl")))}catch{return!1}}var Cd=(r,t,e)=>Math.min(e,Math.max(t,r));function b_(){let t=document.createElement("canvas");t.width=t.height=256;let e=t.getContext("2d"),n=e.createImageData(256,256);for(let s=0;s<n.data.length;s+=4){let a=118+Math.random()*40;n.data[s]=n.data[s+1]=n.data[s+2]=a,n.data[s+3]=255}e.putImageData(n,0,0);let i=new os(t);return i.wrapS=i.wrapT=ta,i.repeat.set(7,7),i.colorSpace=ln,i}function eT(r,t){let n=document.createElement("canvas");n.width=n.height=256;let i=n.getContext("2d"),s=i.createRadialGradient(256/2,256/2,8,256/2,256/2,256/2);s.addColorStop(0,r),s.addColorStop(.5,t),s.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=s,i.fillRect(0,0,256,256);let a=new os(n);return a.colorSpace=ln,a}function nT(){let t="ATHER",e='600 118px "Amiri","Noto Naskh Arabic",serif',n='600 78px "Cormorant Garamond",Georgia,serif',l=document.createElement("canvas").getContext("2d");l.font=e;let c=l.measureText("\u0623\u062B\u0631").width;l.font=n;let h=0;for(let x of t)h+=l.measureText(x).width+17;h-=17;let d=c+38+3+38+h,f=108,u=d*.035,g=f*.1,_=2,p=Math.ceil((d+u*2)*_),m=Math.ceil((f+g*2)*_),v=document.createElement("canvas");v.width=p,v.height=m;let w=v.getContext("2d");w.clearRect(0,0,p,m),w.scale(_,_),w.fillStyle="#ffffff",w.textBaseline="middle",w.textAlign="left";let y=u,T=m/_/2+2;w.font=e,w.fillText("\u0623\u062B\u0631",y,T),y+=c+38,w.fillRect(y,T-108/2,3,108),y+=41,w.font=n;for(let x of t)w.fillText(x,y,T+2),y+=w.measureText(x).width+17;let E=new os(v);return E.colorSpace=ln,E.anisotropy=8,{texture:E,aspect:p/m}}var Rd={noir:{color:1118229,foil:15189613},plum:{color:2891071,foil:15189613},bone:{color:15129803,foil:2891071}},iT={W:2.2,D:1.6,H:.46,LID:.34,WALL:.07,RADIUS:.045},T_=26;function rT(r,t){let e=new Qc({canvas:t,antialias:!0,alpha:!0,powerPreference:"high-performance"}),n=window.matchMedia("(max-width: 760px)").matches;e.setPixelRatio(Math.min(window.devicePixelRatio||1,n?1.6:2)),e.outputColorSpace=ln,e.toneMapping=mo,e.toneMappingExposure=1,e.shadowMap.enabled=!0,e.shadowMap.type=us,e.setClearColor(0,0);let i=new as,s=new Tn(T_,1,.1,100),a=new fa(e),o=new nh,l=a.fromScene(o,.035);i.environment=l.texture,i.environmentIntensity=.5,o.dispose&&o.dispose(),a.dispose();let c=new hs(16775148,1.45);c.position.set(3.6,4.9,3.3),c.castShadow=!0;let h=n?1024:2048;c.shadow.mapSize.set(h,h),c.shadow.camera.near=.5,c.shadow.camera.far=16,c.shadow.camera.left=-3.2,c.shadow.camera.right=3.2,c.shadow.camera.top=3.2,c.shadow.camera.bottom=-3.2,c.shadow.bias=-6e-4,c.shadow.normalBias=.018,c.shadow.radius=6,i.add(c);let d=new hs(9069508,1);d.position.set(-4.2,2.6,2.8),i.add(d);let f=new hs(16766874,2.2);f.position.set(-1.4,3.8,-4.4),i.add(f),i.add(new po(2759229,.5)),i.add(new lo(9272509,656912,.55));let u=new Re(new ur(16,16),new so({opacity:.34,color:0}));u.rotation.x=-Math.PI/2,u.position.y=.001,u.receiveShadow=!0,i.add(u);let g=new Re(new ur(4.6,3.8),new sa({map:eT("rgba(0,0,0,.55)","rgba(0,0,0,.18)"),transparent:!0,depthWrite:!1,opacity:.7}));g.rotation.x=-Math.PI/2,g.position.set(0,.004,0),g.renderOrder=1,i.add(g);let _=new ls({color:new zt(Rd.noir.color),roughness:.72,metalness:.06,clearcoat:.12,clearcoatRoughness:.85,sheen:.18,sheenRoughness:.9,sheenColor:new zt(6965906),bumpMap:b_(),bumpScale:.0035,envMapIntensity:.55}),p=new ls({color:12823947,roughness:.98,metalness:0,sheen:.45,sheenRoughness:.9,sheenColor:new zt(16774109),envMapIntensity:.35,bumpMap:b_(),bumpScale:.0018}),m=new Hi({color:723470,roughness:1,metalness:.03,envMapIntensity:.25}),v=new Hi({color:13214810,roughness:.32,metalness:1,envMapIntensity:1.5}),w=nT();w.texture.anisotropy=e.capabilities.getMaxAnisotropy();let y=new ls({map:w.texture,color:new zt(Rd.noir.foil),transparent:!0,metalness:1,roughness:.3,clearcoat:.4,clearcoatRoughness:.35,depthWrite:!1,envMapIntensity:1.7,polygonOffset:!0,polygonOffsetFactor:-2}),T=new Ai;T.rotation.y=-.62,i.add(T);let E=($,Ct,vt,Bt,A)=>{let S=new Re($,Ct);return S.position.set(vt,Bt,A),S.castShadow=!0,S.receiveShadow=!0,S},{W:x,D:M,H:P,LID:C,WALL:N,RADIUS:D}=iT,B=new Ai;B.add(E(new wn(x,.06,M),_,0,.03,0)),B.add(E(new wn(x,P,N),_,0,P/2,-M/2+N/2)),B.add(E(new wn(x,P,N),_,0,P/2,M/2-N/2)),B.add(E(new wn(N,P,M-N*2),_,-x/2+N/2,P/2,0)),B.add(E(new wn(N,P,M-N*2),_,x/2-N/2,P/2,0)),T.add(B);let I=E(new _s(x-.16,.24,M-.16,2,.02),p,0,.18,0);I.castShadow=!1,T.add(I);let z=E(new _s(.86,.1,1.14,2,.012),m,-.46,.35,.04);z.rotation.y=.045,T.add(z);let V=E(new io(.028,.028,1,18),v,.58,.33,.12);V.rotation.x=Math.PI/2,T.add(V);let O=E(new ro(.115,.019,12,28),v,.58,.33,-.48);O.rotation.x=Math.PI/2,T.add(O);let j=new Ai;j.position.set(0,P,-M/2),T.add(j);let H=E(new _s(x+.06,C,M+.06,4,D),_,0,C/2,M/2);j.add(H);let R=$=>new Re(new ur($,$/w.aspect),y),et=R(1.44);et.rotation.x=-Math.PI/2,et.position.set(0,C/2+.0015,.04),H.add(et);let Mt=R(.94);Mt.position.set(0,0,(M+.06)/2+.0015),H.add(Mt);let Ft=R(.46);Ft.rotation.x=-Math.PI/2,Ft.position.set(0,.0505,-.4),z.add(Ft);let Z=E(new _s(x-.12,.018,M-.12,2,.008),p,0,-C/2-.004,0);Z.castShadow=!1,H.add(Z);let ht=R(.64);ht.rotation.x=Math.PI/2,ht.position.set(0,-.0105,0),Z.add(ht);let rt={yaw:-.62,pitch:.06,smoothYaw:-.62,smoothPitch:.06,auto:!tr,dragging:!1,idle:0,scrollSpin:0,introSpin:-.85,introY:-.85,introScale:.92,open:!1,active:!1,ready:!1};function bt(){let $=r.clientWidth,Ct=r.clientHeight;if(!$||!Ct)return;e.setSize($,Ct,!1);let vt=$/Ct,Bt=2*Math.tan(T_*Math.PI/360),A=Math.max(3.65/Bt,4.1/(Bt*vt)),S=.0785,k=.9;s.position.set(0,k+A*S,A*Math.cos(S)),s.lookAt(0,k,0),s.aspect=vt,s.updateProjectionMatrix()}bt(),"ResizeObserver"in window&&new ResizeObserver(bt).observe(r),window.addEventListener("resize",bt,{passive:!0});let ut=null,Pt=0,ue=0,At=0;function Gt($){$.button!==0&&$.pointerType==="mouse"||(ut=$.pointerId,rt.dragging=!0,rt.auto=!1,rt.idle=0,At=0,Pt=$.clientX,ue=$.clientY,r.classList.add("is-dragging"),t.setPointerCapture(ut),J())}function Lt($){if(!rt.dragging||$.pointerId!==ut)return;let Ct=$.clientX-Pt,vt=$.clientY-ue;Pt=$.clientX,ue=$.clientY,At+=Math.abs(Ct)+Math.abs(vt),rt.yaw+=Ct*.0085,rt.pitch=Cd(rt.pitch+vt*.0055,-.22,.62)}function Ut($){$.pointerId===ut&&(rt.dragging=!1,ut=null,r.classList.remove("is-dragging"),At<6&&Yt(),rt.idle=0)}t.addEventListener("pointerdown",Gt),t.addEventListener("pointermove",Lt),t.addEventListener("pointerup",Ut),t.addEventListener("pointercancel",Ut),t.addEventListener("lostpointercapture",Ut),t.addEventListener("keydown",$=>{$.key==="ArrowLeft"&&(rt.yaw-=.16,$.preventDefault()),$.key==="ArrowRight"&&(rt.yaw+=.16,$.preventDefault()),$.key==="ArrowUp"&&(rt.pitch=Cd(rt.pitch-.08,-.22,.62),$.preventDefault()),$.key==="ArrowDown"&&(rt.pitch=Cd(rt.pitch+.08,-.22,.62),$.preventDefault()),($.key==="Enter"||$.key===" ")&&(Yt(),$.preventDefault()),rt.idle=0});let le=document.getElementById("box3dHint"),ne=!1;function J(){ne||!le||(ne=!0,le.classList.add("is-hidden"))}function Yt($){let Ct=typeof $=="boolean"?$:!rt.open;if(Ct===rt.open)return;rt.open=Ct,Ne.to(j.rotation,{x:Ct?-2.02:0,duration:Ct?1.25:1.05,ease:Ct?"power3.inOut":"power2.inOut",overwrite:!0});let vt=document.getElementById("box3dToggle");vt&&(vt.textContent=Ct?"Close the lid":"Open the lid",vt.setAttribute("aria-pressed",Ct?"true":"false")),r.classList.toggle("is-open",Ct)}function ze($){let Ct=Rd[$];Ct&&(Ne.to(_.color,{r:new zt(Ct.color).r,g:new zt(Ct.color).g,b:new zt(Ct.color).b,duration:.65,ease:"power2.out",overwrite:!0}),Ne.to(y.color,{r:new zt(Ct.foil).r,g:new zt(Ct.foil).g,b:new zt(Ct.foil).b,duration:.65,ease:"power2.out",overwrite:!0}),r.dataset.finish=$,document.querySelectorAll(".box3d-swatch").forEach(vt=>{let Bt=vt.dataset.finish===$;vt.classList.toggle("is-active",Bt),vt.setAttribute("aria-pressed",Bt?"true":"false")}))}Qt.create({trigger:r,start:"top bottom",end:"bottom top",scrub:1.1,onUpdate:$=>{rt.scrollSpin=($.progress-.5)*.85}});let de=tr?{y:0,scale:1,spin:0}:{y:-.85,scale:.92,spin:-.85};function te(){tr||Ne.to(de,{y:0,scale:1,spin:0,duration:1.7,ease:"power3.out"})}let we=0,Ee=0;function F($){if(!rt.active)return;let Ct=Ee?Math.min(($-Ee)/1e3,.05):.016;Ee=$,rt.auto&&!rt.dragging&&!tr?rt.yaw+=Ct*.16:rt.dragging||(rt.idle+=Ct,rt.idle>3.2&&!tr&&(rt.auto=!0)),rt.smoothYaw+=(rt.yaw-rt.smoothYaw)*Math.min(1,Ct*9),rt.smoothPitch+=(rt.pitch-rt.smoothPitch)*Math.min(1,Ct*9),T.rotation.y=rt.smoothYaw+rt.scrollSpin+de.spin,T.rotation.x=rt.smoothPitch,T.position.y=de.y;let vt=de.scale;T.scale.set(vt,vt,vt),e.render(i,s),rt.ready||(rt.ready=!0,r.classList.add("is-ready"),te()),we=requestAnimationFrame(F)}function he(){rt.active||(rt.active=!0,Ee=0,we=requestAnimationFrame(F))}function ie(){rt.active=!1,cancelAnimationFrame(we)}if(new IntersectionObserver($=>{$.forEach(Ct=>{Ct.isIntersecting?he():ie()})},{rootMargin:"120px 0px"}).observe(r),!tr){let $=new IntersectionObserver(Ct=>{Ct.forEach(vt=>{vt.isIntersecting&&($.disconnect(),setTimeout(()=>Yt(!0),760))})},{threshold:.42});$.observe(r)}return document.addEventListener("visibilitychange",()=>{if(document.hidden)ie();else{let $=r.getBoundingClientRect();$.bottom>-120&&$.top<window.innerHeight+120&&he()}}),{state:rt,toggleBox:Yt,setFinish:ze,resize:bt,debug:()=>({open:rt.open,lid:+j.rotation.x.toFixed(3),yaw:+T.rotation.y.toFixed(3),pitch:+T.rotation.x.toFixed(3),rigY:+T.position.y.toFixed(3),scale:+T.scale.x.toFixed(3),camera:s.position.toArray().map($=>+$.toFixed(2)),canvas:[e.domElement.width,e.domElement.height],calls:e.info.render.calls,tris:e.info.render.triangles})}}function sT(){let r=document.getElementById("box3dStage"),t=document.getElementById("box3dCanvas");if(!r||!t)return;if(!tT()){r.classList.add("is-fallback");return}let e=()=>{let n;try{n=rT(r,t)}catch{r.classList.add("is-fallback");return}let i=document.getElementById("box3dToggle");i&&i.addEventListener("click",()=>n.toggleBox()),document.querySelectorAll(".box3d-swatch").forEach(a=>{a.addEventListener("click",()=>{n.setFinish(a.dataset.finish),n.state.idle=0})}),r.dataset.finish="noir";let s={ready:!0,openBox:()=>n.toggleBox(!0),closeBox:()=>n.toggleBox(!1),setFinish:n.setFinish};/[?&]qa(?:=|&|$)/.test(window.location.search)&&(s.debug=n.debug,s.settle=()=>Ne.ticker.lagSmoothing(0)),window.ATHER3D=s};if(document.fonts&&document.fonts.ready){let n=!1,i=()=>{n||(n=!0,e())};document.fonts.ready.then(i),setTimeout(i,1200)}else e()}function aT(){if(tr)return;Ne.matchMedia().add("(min-width: 1021px)",()=>{document.querySelectorAll(".atelier-visual img, .story-image img").forEach(e=>{Ne.fromTo(e,{yPercent:-4.5,scale:1.1},{yPercent:4.5,scale:1.1,ease:"none",scrollTrigger:{trigger:e.parentElement,start:"top bottom",end:"bottom top",scrub:.6}})}),Ne.fromTo(".hero-media",{yPercent:0},{yPercent:6,ease:"none",scrollTrigger:{trigger:".hero",start:"top top",end:"bottom top",scrub:!0}})})}function oT(){if(tr)return;let r=document.querySelector(".hero"),t=document.querySelector(".hero-copy"),e=document.querySelector(".hero-dust");if(!r)return;let n=[];if(e&&!e.childElementCount){let u=[12,20,30],g=window.matchMedia("(max-width: 760px)").matches?12:20,_=u.map(()=>{let p=document.createElement("div");return p.className="hero-dust__layer",e.appendChild(p),p});for(let p=0;p<g;p++){let m=document.createElement("i"),v=p<4,w=v?9+Math.random()*7:2.2+Math.random()*4.2;m.style.cssText="left:"+(Math.random()*100).toFixed(2)+"%;top:"+(Math.random()*100).toFixed(2)+"%;width:"+w.toFixed(1)+"px;height:"+w.toFixed(1)+"px;--o:"+(v?.07+Math.random()*.08:.22+Math.random()*.4).toFixed(2)+";--dur:"+(13+Math.random()*17).toFixed(1)+"s;--delay:"+(-Math.random()*24).toFixed(1)+"s;--dx:"+(6+Math.random()*20).toFixed(0)+"px;--dy:"+(-8-Math.random()*26).toFixed(0)+"px;--blur:"+(v?"1.6px":Math.random()<.4?"0.6px":"0px"),_[p%_.length].appendChild(m)}Pd&&_.forEach((p,m)=>{n.push({depth:u[m],x:Ne.quickTo(p,"x",{duration:1.1,ease:"power3.out"}),y:Ne.quickTo(p,"y",{duration:1.1,ease:"power3.out"})})})}if(!Pd||!t)return;Ne.set(t,{transformPerspective:1400,transformOrigin:"50% 50%"});let i=Ne.quickTo(t,"x",{duration:.9,ease:"power3.out"}),s=Ne.quickTo(t,"y",{duration:.9,ease:"power3.out"}),a=Ne.quickTo(t,"rotationY",{duration:.9,ease:"power3.out"}),o=Ne.quickTo(t,"rotationX",{duration:.9,ease:"power3.out"}),l=0,c=0,h=0,d=()=>{h=0,i(l*16),s(c*12),a(l*2.2),o(-c*2.2),n.forEach(u=>{u.x(-l*u.depth),u.y(-c*u.depth)})},f=()=>{h||(h=requestAnimationFrame(d))};r.addEventListener("pointermove",u=>{let g=r.getBoundingClientRect();l=(u.clientX-g.left)/g.width-.5,c=(u.clientY-g.top)/g.height-.5,f()},{passive:!0}),r.addEventListener("pointerleave",()=>{l=0,c=0,f()})}function lT(){if(!Pd||tr)return;let r=5.5;document.querySelectorAll(".slide, .vip-card").forEach(n=>{let i=n.querySelector(".slide-media")||n.querySelector(".vip-card__media");if(!i)return;let s=o=>{let l=n.getBoundingClientRect(),c=(o.clientX-l.left)/l.width-.5,h=(o.clientY-l.top)/l.height-.5;Ne.to(i,{rotateY:c*r,rotateX:-h*r,scale:1.018,transformPerspective:900,transformOrigin:"center",duration:.55,ease:"power2.out",overwrite:"auto"})},a=()=>{Ne.to(i,{rotateY:0,rotateX:0,scale:1,duration:.8,ease:"power3.out",overwrite:"auto"})};n.addEventListener("pointerenter",s),n.addEventListener("pointermove",s),n.addEventListener("pointerleave",a)}),document.querySelectorAll(".atelier-visual, .story-image").forEach(n=>{let i=n.querySelector("img");if(!i)return;Ne.set(i,{transformPerspective:1200});let s=Ne.quickTo(i,"rotationY",{duration:1,ease:"power3.out"}),a=Ne.quickTo(i,"rotationX",{duration:1,ease:"power3.out"});n.addEventListener("pointermove",o=>{let l=n.getBoundingClientRect();s(((o.clientX-l.left)/l.width-.5)*5.2),a(((o.clientY-l.top)/l.height-.5)*-5.2)}),n.addEventListener("pointerleave",()=>{s(0),a(0)})})}function cT(){if(tr)return;let r=document.querySelector(".vip-main");r&&document.addEventListener("ather:vip-change",()=>{Ne.fromTo(r,{rotateY:7,scale:.985,transformPerspective:1400},{rotateY:0,scale:1,duration:1,ease:"power3.out",overwrite:!0})})}function hT(){let r=document.querySelector(".contact-card");if(!r||!("IntersectionObserver"in window))return;let t=n=>document.body.classList.toggle("fab-tucked",n);new IntersectionObserver(n=>{n.forEach(i=>t(i.isIntersecting))},{rootMargin:"0px 0px -12% 0px",threshold:0}).observe(r)}function w_(){sT(),aT(),oT(),lT(),cT(),hT()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",w_,{once:!0}):w_()});uT();})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

gsap/gsap-core.js:
  (*!
   * GSAP 3.15.1
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CSSPlugin.js:
  (*!
   * CSSPlugin 3.15.1
   * https://gsap.com
   *
   * Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/Observer.js:
  (*!
   * Observer 3.15.1
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/ScrollTrigger.js:
  (*!
   * ScrollTrigger 3.15.1
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)
*/
