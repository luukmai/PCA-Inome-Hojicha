function mm(A,B){return A.map((r,i)=>B[0].map((_,j)=>r.reduce((s,_,k)=>s+A[i][k]*B[k][j],0)))}
function tr3(A){return A[0].map((_,j)=>A.map(r=>r[j]))}
function eig3(M){let A=M.map(r=>r.slice()),V=[[1,0,0],[0,1,0],[0,0,1]];for(let it=0;it<60;it++){let p=0,q=1,mx=Math.abs(A[0][1]);[[0,2],[1,2]].forEach(([a,b])=>{if(Math.abs(A[a][b])>mx){mx=Math.abs(A[a][b]);p=a;q=b}});if(mx<1e-12)break;const th=(A[q][q]-A[p][p])/(2*A[p][q]),t=Math.sign(th||1)/(Math.abs(th)+Math.sqrt(th*th+1)),c=1/Math.sqrt(t*t+1),s=t*c,J=[[1,0,0],[0,1,0],[0,0,1]];J[p][p]=c;J[q][q]=c;J[p][q]=s;J[q][p]=-s;A=mm(tr3(J),mm(A,J));V=mm(V,J)}return{vals:[A[0][0],A[1][1],A[2][2]],V}}
function ellMesh(q,color){const n=q.length;if(n<4)return null;const m=[0,1,2].map(i=>q.reduce((s,p)=>s+[p.x,p.y,p.z][i],0)/n),C=[[0,0,0],[0,0,0],[0,0,0]];q.forEach(p=>{const d=[p.x-m[0],p.y-m[1],p.z-m[2]];for(let a=0;a<3;a++)for(let b=0;b<3;b++)C[a][b]+=d[a]*d[b]/(n-1)});
const{vals,V}=eig3(C),k=Math.sqrt(7.815),sc=vals.map(v=>k*Math.sqrt(Math.max(v,1e-6))),X=[],Y=[],Z=[],I=[],J=[],K=[],nu=18,nv=28;
for(let a=0;a<=nu;a++)for(let b=0;b<nv;b++){const th=Math.PI*a/nu,ph=2*Math.PI*b/nv,u=[sc[0]*Math.sin(th)*Math.cos(ph),sc[1]*Math.sin(th)*Math.sin(ph),sc[2]*Math.cos(th)];X.push(m[0]+V[0][0]*u[0]+V[0][1]*u[1]+V[0][2]*u[2]);Y.push(m[1]+V[1][0]*u[0]+V[1][1]*u[1]+V[1][2]*u[2]);Z.push(m[2]+V[2][0]*u[0]+V[2][1]*u[1]+V[2][2]*u[2])}
for(let a=0;a<nu;a++)for(let b=0;b<nv;b++){const p=a*nv+b,p1=a*nv+(b+1)%nv,r=(a+1)*nv+b,r1=(a+1)*nv+(b+1)%nv;I.push(p,p1);J.push(r,r);K.push(p1,r1)}
return{type:'mesh3d',x:X,y:Y,z:Z,i:I,j:J,k:K,color,opacity:.13,hoverinfo:'skip',showlegend:false,flatshading:true,lighting:{ambient:1,diffuse:0}}}

const PD=window.PAGEDATA,GR=PD.groups,RC={'1':'#0072B2','2':'#D55E00','3':'#009E73'};let pi=0,vi=0,ell=false,byRep=false;const hs=new Set(),hr=new Set(),hc=new Set();
const $=id=>document.getElementById(id);
function dark(){return matchMedia('(prefers-color-scheme: dark)').matches}
function btn(box,label,on,fn,col){const b=document.createElement('button');b.textContent=(col?'● ':'')+label;b.className=on?'on':'';if(col&&on)b.style.cssText='background:'+col+';border-color:'+col;b.onclick=fn;box.appendChild(b)}
function ui(){const part=PD.parts[pi],view=part.views[vi];
$('ti').textContent=PD.title;$('in').textContent=PD.intro;$('cv').textContent=PD.caveat;
$('pt').innerHTML='';PD.parts.forEach((p,i)=>btn($('pt'),p.label,i==pi,()=>{pi=i;vi=0;ell=i>0;draw()}));
$('vw').innerHTML='';if(part.views.length>1)part.views.forEach((v,i)=>btn($('vw'),v.label,i==vi,()=>{vi=i;draw()}));
$('tg').innerHTML='';btn($('tg'),'ทรงรี 95%',ell,()=>{ell=!ell;draw()});btn($('tg'),'สีตาม Rep',byRep,()=>{byRep=!byRep;draw()});
const names=[...new Set(view.pts.map(p=>p.s))];$('fs').innerHTML='';names.forEach(n=>btn($('fs'),n,!hs.has(n),()=>{hs.has(n)?hs.delete(n):hs.add(n);draw()},GR[n].color));
$('fr').innerHTML='';['1','2','3'].forEach(x=>btn($('fr'),'Rep'+x,!hr.has(x),()=>{hr.has(x)?hr.delete(x):hr.add(x);draw()}));PD.cycles.forEach(x=>btn($('fr'),'รอบ '+x,!hc.has(x),()=>{hc.has(x)?hc.delete(x):hc.add(x);draw()}));btn($('fr'),'แสดงทั้งหมด',false,()=>{hs.clear();hr.clear();hc.clear();draw()});
$('nt').textContent=part.desc;$('st').innerHTML='<table><tr><th>ผลทดสอบ (กับข้อมูลที่ไม่เคยเห็นตอนฝึก)</th><th>ค่า</th><th>อ้างอิง</th></tr>'+part.stats.map(r=>'<tr><td>'+r[0]+'</td><td>'+r[1]+'</td><td>'+r[2]+'</td></tr>').join('')+'</table>';return view}
function draw(){const view=ui(),pts=view.pts.filter(p=>!hs.has(p.s)&&!hr.has(p.rep)&&!hc.has(p.c)),names=[...new Set(pts.map(p=>p.s))],fg=dark()?'#e9f0e4':'#22301f',grid=dark()?'#2e3b2b':'#dcd8c6';
const tr=names.map(n=>{const q=pts.filter(p=>p.s==n),g=GR[n],op=/open|x|cross/.test(g.symbol);return{type:'scatter3d',mode:'markers',name:g.name,legendgroup:n,x:q.map(p=>p.x),y:q.map(p=>p.y),z:q.map(p=>p.z),text:q.map(p=>g.name+' · Rep'+p.rep+' · รอบ '+p.c),hoverinfo:'text',marker:{size:g.symbol=='x'?4:(op?7:6),color:byRep?q.map(p=>RC[p.rep]):g.color,symbol:g.symbol,line:{color:byRep?q.map(p=>RC[p.rep]):(op?g.color:'#000'),width:op?3:1}}}});
if(ell)names.forEach(n=>{const m=ellMesh(pts.filter(p=>p.s==n),GR[n].color);if(m){m.legendgroup=n;tr.push(m)}});
const ax=t=>({title:t,color:fg,gridcolor:grid,zerolinecolor:grid,backgroundcolor:'rgba(0,0,0,0)'}),a=view.axes;
Plotly.react('pl',tr,{margin:{l:0,r:0,t:0,b:0},paper_bgcolor:'rgba(0,0,0,0)',font:{color:fg},legend:{orientation:'h',y:-.05,font:{size:11},itemsizing:'constant'},scene:{xaxis:ax(a[0]),yaxis:ax(a[1]),zaxis:ax(a[2]),camera:{eye:{x:1.6,y:1.6,z:.9}}}},{responsive:true,displayModeBar:false})}
draw();