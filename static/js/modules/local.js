_jsload2&&_jsload2('local', 'Za.PL=function(a,b){return!a||"undefined"==typeof b||"s"==a&&11!=b&&7!=b&&2!=b&&26!=b&&28!=b||"nb"==a&&12!=b||"bd"==a&&21!=b||"bda"==a&&45!=b||"sa"==a&&46!=b||"nba"==a&&47!=b?q:o}; w.extend(Za.prototype,{nz:function(){for(var a=0,b=this.Na.length;a<b;a++){var c=this.Na[a];this[c.method].apply(this,c.arguments)}delete this.Na;this.pa()},pa:function(){this.Tm=new Yg(this);this.Sm=new Zg(this)},search:function(a,b,c){if(!a||a instanceof Array&&(1>a.length||10<a.length))this.Me(),this.qb(5),this.Qa(W.Qc);else if(b=b||{},b.customData)this.yz(),this.ds.search({rb:a,Bp:"local",Ew:b.customData}),this.Jl=o;else{this.Jl=q;var d=c||{},e=this;this.Jg(this.ud,function(c){c=c||1;e.Dc=e.qA(a); c=e.Dc?{qt:"sa",c:c,wd:a.join("$$"),wdn:a.length,rn:e.mf()}:{qt:b.forceLocal?"con":"s",c:c,wd:a,rn:e.mf()};e.k.up&&w.extend(c,{from:e.k.up});w.extend(c,d.Xc);b.log&&(c.log="center");var g={Xc:c,options:b,od:d.od||a};w.extend(g,d);$c.$a(function(a,b){e.Hf(a,b)},c,g)})}},qA:function(a){return a&&a instanceof Array?o:q},Vm:function(a,b,c){if(!a||!b||a instanceof Array&&(1>a.length||10<a.length))this.Me(),this.qb(5),this.Qa(W.Qc);else{var c=c||{},d=this;if(c.customData)this.yz(),this.ds.search({rb:a, fb:b,Bp:"bound",Ew:c.customData}),this.Jl=o;else{this.Jl=q;var e=c||{};this.Jg(this.ud,function(c){var c=c||1,g=b.pe(),i=b.lf(),g=Q.wb(g),i=Q.wb(i),g="("+g.lng+","+g.lat+";"+i.lng+","+i.lat+")";d.Dc=d.qA(a);c=d.Dc?{qt:"bda",c:c,wd:a.join("$$"),wdn:a.length,ar:g,rn:d.mf(),l:18}:{qt:"bd",c:c,wd:a,ar:g,rn:d.k.Ak,l:18};d.k.up&&w.extend(c,{from:d.k.up});w.extend(c,e.Xc);$c.$a(function(a,b){d.Hf(a,b)},c,e&&e.Ea&&e.va?{Xc:c,fb:b,Ea:e.Ea,va:e.va,od:e.od||a}:{Xc:c,fb:b,od:e.od||a})})}}},Ap:function(a,b,c, d){if(!a||!b||!(b instanceof H)&&"object"==typeof b&&!b.uid||a instanceof Array&&(1>a.length||10<a.length))this.Me(),this.qb(5),this.Qa(W.Qc);else if(d=d||{},d.customData)this.yz(),this.ds.search({rb:a,Ea:b,va:c,Bp:"nearby",Ew:d.customData}),this.Jl=o;else{this.Jl=q;var c=c||Za.VF,c=0>c?Za.VF:c>Za.bG?Za.bG:c,e=this,f=d||{};if(b instanceof H){var g=Q.wb(b),d=new H(g.lng-c,g.lat-c),g=new H(g.lng+c,g.lat+c),d=Q.Cb(d),g=Q.Cb(g),d=new bb(new H(d.lng,d.lat),new H(g.lng,g.lat));f.Ea=b;f.va=c;this.Vm(a,d, f)}else this.Jg(this.ud,function(d){d=d||1;e.Dc=e.qA(a);d=e.Dc?{qt:"nba",c:d,wd:a.join("$$"),wdn:a.length,rn:e.mf(),uid:b.uid,r:c}:{qt:"nb",c:d,wd:a,rn:e.mf(),uid:b.uid,r:c};if("string"==typeof b){if(e.Dc){d.qt="sa";for(var g=[],l=0;l<a.length;l++)g.push(b+" "+a[l]);d.wd=g.join("$$");d.wdn=g.length}else d.qt="s",d.wd=b+" "+a;delete d.r;delete d.uid}e.k.up&&w.extend(d,{from:e.k.up});w.extend(d,f.Xc);$c.$a(function(a,b){e.Hf(a,b)},d,{Xc:d,Ea:b,va:c,od:f.od||a})})}},Hf:function(a,b){var c=this;c.Dc= 45==a.result.type||46==a.result.type||47==a.result.type?o:q;this.Me();c.Da=a;this.fa=b;var d=a.result,e=b.Xc.qt;if(c.Dc){if(0!=d.error||!Za.PL(e,d.type)){i=a.current_city;this.Gi=[];for(var d=b.od,e=0,f=d.length;e<f;e++){var g=new $g({rb:d[e],city:i.name,province:i.up_province_name||"",ow:i.code,pp:c.mf(),Ea:b.Ea,va:b.va,fb:b.Ea&&b.va?j:b.fb,oi:""});g.WA=b.Xc.qt;this.Gi.push(g)}this.qb(2);this.Qa(W.Qc,this.Gi);c.Sm.dispatchEvent("render");return}}else if(0!=d.error||!Za.PL(e,d.type)){var i=a.current_city; this.ia=new $g({rb:b.od,city:i.name,province:i.up_province_name||"",ow:i.code,pp:c.mf(),Ea:b.Ea,va:b.va,fb:b.Ea&&b.va?j:b.fb,oi:this.Su(b,i)});this.ia.WA=b.Xc.qt;this.qb(2);this.Qa(W.Qc,this.ia);c.Sm.dispatchEvent("render");return}c.yl(b);c.Tm.dispatchEvent("render");c.Sm.dispatchEvent("render");(d=this.fa.Ea)&&("string"!=typeof d&&!(d instanceof H))&&this.Tm.Yv(d);d={};switch(this.Da.result&&this.Da.result.type){case 11:case 12:case 21:case 45:case 46:case 47:d.ha=this.bz;break;case 2:d.Ea=this.ia.sk(0).point; d.ug=this.Da.content.level;break;case 28:d.Ea=this.ia.sk(0).point;d.ug=13;break;case 26:d.Ea=this.ia.sk(0).point,d.ug=parseInt(this.Da.content[1])}this.Tm.PK(d);d=this.Dc?this.Tz():this.ia;this.k.ja.At&&(d&&0<d.Ls())&&(c=this,setTimeout(function(){c.select(0)},240))},yl:function(a){var b=this.Da.result,c=this.Da.content,d=this.Da.current_city,e=b.type,f=b.page_num||0,g=0,i=0,k=[],l=[],m=[],n=[],u=[],v=[];if(this.Da.psrs&&this.Da.psrs.SEResult){var x=this.Da.psrs.SEResult;if(0<x.length)for(var y=0, C=x.length;y<C;++y)v.push(x[y])}if(x=this.Da.suggest_query){y=0;for(C=x.length;y<C;++y)x[y]&&x[y].query&&v.push(x[y].query)}v=O.unique(v);if(7!=e&&26!=e){var A;this.Dc||(i=b.count-(0==f?b.spec_dispnum||0:0),g=760>b.total?b.total:760,A=0==f?b.spec_dispnum||0:0);if(2!=e)if(this.Dc){C=b.result_array;f=a.od.length;for(y=0;y<f;y++)if(n[y]=[],u[y]=[],m[y]=[],C[y])if(7==C[y].type){if(c&&c[y])for(A=0;A<c[y].length;A++)x=c[y][A],m[y].push({city:x.name,vz:x.code,numResults:x.num});if(this.Da.more_city&&this.Da.more_city[y]){var D= this.Da.more_city[y];A=0;for(var B=D.length;A<B;A++)for(var G=0,K=D[A].city.length;G<K;G++)x=D[A].city[G],m[y].push({city:x.name,vz:x.code,numResults:x.num})}}else{x=C[y].count;u[y].push({count:x,FY:C[y].page_num||0,total:760<C[y].total?760:C[y].total});for(A=0;A<x;A++)if(c&&(c[y]&&c[y][A])&&(B=c[y][A],B.addr!==p)){G=this.$G(B.addr,B.poiType);D=[];if(B.cla&&0<B.cla.length)for(K=B.cla.length;K--;)R=B.cla[K][1],R=R.replace("<b>","").replace("</b>",""),D.unshift(R);B={title:B.name,uid:B.uid,point:O.sb(B.geo, o).point,url:W.Lh(B.uid,d.code),detailUrl:"http://api.map.baidu.com/place/detail?uid="+B.uid+"&output=html&source=jsapi",address:G,city:d.name,province:d.up_province_name||"",phoneNumber:B.tel,postcode:B.zip,type:B.poiType||0,isAccurate:B.acc_flag&&1==B.acc_flag?o:q,tags:D};n[y].push(B);l.push(B.point);this.sf.push(B)}}}else for(y=A;y<b.count;y++){if(c&&c[y]&&(B=c[y],B.addr!==p)){G=this.$G(B.addr,B.poiType);D=[];if(B.cla&&0<B.cla.length)for(K=B.cla.length;K--;){var R=B.cla[K][1],R=R.replace("<b>", "").replace("</b>","");D.unshift(R)}B={title:B.name,uid:B.uid,point:O.sb(B.geo,o).point,url:W.Lh(B.uid,d.code),detailUrl:"http://api.map.baidu.com/place/detail?uid="+B.uid+"&output=html&source=jsapi",address:G,city:d.name,province:d.up_province_name||"",phoneNumber:B.tel,postcode:B.zip,type:B.poiType||0,isAccurate:B.acc_flag&&1==B.acc_flag?o:q};0<D.length&&(B.tags=D);k.push(B);l.push(B.point);this.sf.push(B)}}else i=g=1,B={title:c.cname,uid:c.uid,point:O.sb(c.geo,o).point,address:c.cname,url:z.kp+ "?s="+encodeURIComponent("s&wd="+b.wd)},k.push(B),this.sf.push(B),l.push(B.point)}else if(26==e&&(i=g=1,B={title:b.wd,point:O.KY(c[0]),url:z.kp+"?s="+encodeURIComponent("s&wd="+b.wd)},k.push(B),this.sf.push(B),l.push(B.point)),7==e){for(y=i=g=0;y<c.length;y++)m.push({city:c[y].name,vz:c[y].code,numResults:c[y].num});if(this.Da.more_city){D=this.Da.more_city;y=0;for(B=D.length;y<B;y++){A=0;for(K=D[y].city.length;A<K;A++)c=D[y].city[A],m.push({city:c.name,vz:c.code,numResults:c.num})}}}this.bz=l;if(this.Dc){this.Gi= [];f=a.od.length;b=o;for(y=0;y<f;y++)0<u[y].length&&0<u[y][0].total&&(b=q),k=new $g({rb:a.od[y]||"",count:0<u[y].length?u[y][0].count:0,total:0<u[y].length?u[y][0].total:0,zE:0<u[y].length?u[y][0].FY:0,city:d.name,province:d.up_province_name||"",ow:d.code,Bk:n[y]||[],SB:m[y]||[],pp:this.mf(),Ea:a.Ea,va:a.va,fb:a.Ea&&a.va?j:a.fb,oi:"",TN:v}),k.WA=a.Xc.qt,this.Gi.push(k);b?this.qb(2):this.qb(0);this.Qa(W.Qc,this.Gi)}else this.ia=new $g({rb:a.od,count:i,total:g,zE:b.page_num,city:d.name,province:d.up_province_name|| "",ow:d.code,Bk:k,SB:m,pp:this.mf(),Ea:a.Ea,va:a.va,fb:a.Ea&&a.va?j:a.fb,oi:this.Su(a,d),TN:v}),this.ia.WA=a.Xc.qt,0==g&&7!=e?this.qb(2):7!=e?this.qb(0):this.qb(1),this.Qa(W.Qc,this.ia)},Su:function(a,b){var c="",c="string"==typeof a.Ea?a.Ea+" "+a.od:a.od,d=b.name,e,f,g;"object"==typeof a.Ea&&!(a.Ea instanceof H)&&(f=a.Ea.point,e=a.va);a.fb&&!a.Ea&&(g=a.fb);a.Ea&&a.Ea instanceof H&&(f=a.Ea,e=a.va);c=z.Ec+"place/search?res=jsapi&query="+c+"&region="+d+"&output=html";f&&(c+="&location="+f.lat+","+f.lng+ "&radius="+e);g&&(e=g.pe(),g=g.lf(),c+="&bounds="+e.lat+","+e.lng+","+g.lat+","+g.lng);return c},$G:function(a,b){b=b||0;return 1==b||3==b?O.unique(a.split(";")).join("; "):a},e0:function(a){for(var b=0,c=a.length;b<c;b++)if(0<a[b].VK())return o;return q},Hj:function(){for(var a=0,b=this.ua.length;a<b;a++)this.ua[a].remove(),this.ua[a]=p;a=this.ua.length=0;for(b=this.sf.length;a<b;a++)this.sf[a]=p;this.sf.length=0;this.mz&&(this.mz.remove(),this.mz=p)},Tz:function(){if(!this.Dc)return this.ia;for(var a, b=-1,c=0,d=this.Gi.length;c<d;c++){var e=this.Gi[c];e.So()>b&&(a=e,b=e.So())}return a},Me:function(){delete this.Da;delete this.yd;delete this.ia;this.Dc&&delete this.Gi;delete this.fa;this.ib=-1;this.qb();this.Hj();this.k.ja.Fa&&(this.k.ja.Fa.innerHTML="")},vm:function(a){if(this.Jl)this.ds.vm(a);else if(this.fa){var b;b=this.Dc?this.Tz():this.ia;if("number"==typeof a&&!isNaN(a)&&0<=a&&a<=b.So()-1)switch(this.fa.Xc.pn=a,this.fa.Xc.qt){case "s":case "con":this.search(this.fa.Xc.wd,this.fa.options, this.fa);break;case "bd":this.Vm(this.fa.Xc.wd,this.fa.fb,this.fa);break;case "nb":this.Ap(this.fa.Xc.wd,this.fa.Ea,this.fa.va,this.fa);break;case "bda":this.Vm(this.fa.od,this.fa.fb,this.fa);break;case "sa":this.search(this.fa.od,this.fa.options,this.fa);break;case "nba":this.Ap(this.fa.od,this.fa.Ea,this.fa.va,this.fa)}else this.qb(5),this.Qa(W.Qc)}},yz:function(){this.ds||(this.ds=new ah(this))},select:function(a){this.Tm.select(a);this.Sm.select(a);this.ib=a}}); T(od,{gotoPage:od.vm,searchNearby:od.Ap,searchInBounds:od.Vm,search:od.search,clearResults:od.Me});function $g(a){this.keyword=a.rb||"";this.XS=a.zE||0;this.HQ=a.count||0;this.JA=a.total||0;this.OS=Math.ceil(a.total/a.pp);this.center=a.Ea;this.radius=a.va;this.bounds=a.fb;this.city=a.city;this.province=a.province;this.viewport=a.viewport;this.moreResultsUrl=a.oi;this.or=a.Bk&&a.Bk.slice(0)||[];this.dQ=a.SB&&a.SB.slice(0);this.suggestions=a.TN||[]}w.extend($g.prototype,{sk:function(a){if(this.or[a])return this.or[a]},Ls:t("JA"),So:t("OS"),VK:t("HQ"),bL:t("XS"),Tw:t("dQ"),toString:ca("LocalResult")}); var bh=$g.prototype;T(bh,{getPoi:bh.sk,getCurrentNumPois:bh.VK,getNumPois:bh.Ls,getNumPages:bh.So,getPageIndex:bh.bL,getCityList:bh.Tw});function ah(a){w.lang.Aa.call(this);this.ma=a;this.ma.ib=-1}w.lang.sa(ah,w.lang.Aa,"CustomSearch"); w.extend(ah.prototype,{search:function(a){this.Bp=a.Bp;this.ma.Dc=q;if(this.nz(a)){var b=this;this.ma.Jg(this.ma.ud,function(c){a.region=c;c=b.OR(a);b.wN(c,{Xc:c,options:a})})}},nz:function(){var a=o;oa||(this.ma.qb(4),this.ma.Qa(W.Qc),a=q);return a},OR:function(a){var b=this.Ew=a.Ew;b&&b.geotableId&&(this.bt=o);var c={region:a.region,page_size:this.ma.mf(),ak:oa};a.EY&&(c.page_index=a.EY);a.rb&&(c.q=a.rb);if(a.fb){var d=a.fb.pe(),e=a.fb.lf();c.bounds=this.bt?d.lng+","+d.lat+";"+e.lng+","+e.lat:d.lat+ ","+d.lng+";"+e.lat+","+e.lng}if(a.Ea&&(a.Ea instanceof H||a.Ea.point instanceof H))d=p,a.Ea instanceof H?d=a.Ea:a.Ea.point instanceof H&&(d=a.Ea.point),c.location=this.bt?d.lng+","+d.lat:d.lat+","+d.lng;"string"==typeof a.Ea&&(c.q=a.Ea+" "+a.rb,this.Bp="local");a.va&&(c.radius=a.va);this.bt?c.geotable_id=b.geotableId:b&&b.databoxId&&(c.filter="databox:"+b.databoxId);b.tags&&(c.tags=b.tags);b.filter&&(c.filter=b.filter);return c},wN:function(a,b){var c=this,d="geosearch/poi";this.bt&&(d="geosearch/v2/"+ this.Bp);$c.$a(function(a,b){c.Hf(a,b)},a,b,d)},Hf:function(a,b){this.ma.Me();this.ma.fa=b;if(0!=a.status)this.ia=new $g({rb:b.options.rb,pp:this.ma.mf(),Ea:b.options.Ea||"",va:b.options.va||"",fb:b.options.fb||"",oi:""}),5==a.status?this.ma.qb(4):this.ma.qb(2),this.ma.ia=this.ia,this.ma.Qa(W.Qc,this.ia),this.ma.Sm.dispatchEvent("render");else{this.yl(a,b);this.ma.Tm.dispatchEvent("render");this.ma.Sm.dispatchEvent("render");var c=b.options.Ea;c&&("string"!=typeof c&&!(c instanceof H)&&0==this.ma.qm())&& this.ma.Tm.Yv(c);c={};c.ha=this.ma.bz;this.ma.Tm.PK(c);c=this.ma.ia;if(this.ma.k.ja.At&&c&&0<c.Ls()){var d=this;setTimeout(function(){d.ma.select(0)},240)}}},yl:function(a,b){var c=a.content||{},d=[],e=[],f=this.bt;f&&(c=a.contents);for(var g=0,i=a.size;g<i&&c[g];g++){var k=c[g],l=f?new H(k.location[0],k.location[1]):new H(k.longitude,k.latitude);d.push({title:f?k.title:k.name,uid:k.uid,point:l,url:"",address:f?k.address:k.addr,city:k.city,province:k.province,phoneNumber:k.tel,postcode:k.zip,type:k.cla}); e.push(l)}this.ma.sf=d;this.ma.bz=e;this.ia=new $g({rb:b.options.rb,count:a.size,total:a.total,zE:b.Xc.page_index,city:"",province:"",ow:"",Bk:d,pp:this.ma.mf(),Ea:b.options.Ea,va:b.options.va,fb:b.options.fb,oi:""});0==a.total?this.ma.qb(2):this.ma.qb(0);this.ma.ia=this.ia;this.ma.Qa(W.Qc,this.ia)},vm:function(a){var b=this.ma.ia;"number"==typeof a&&!isNaN(a)&&0<=a&&a<=b.So()-1?(this.ma.fa.Xc.page_index=a,this.wN(this.ma.fa.Xc,this.ma.fa)):(this.ma.qb(5),this.ma.Qa(W.Qc))}});function Yg(a){w.lang.Aa.call(this);this.ma=a;this.map=a.k.ja.map;this.ua=a.ua;this.pa()}w.lang.sa(Yg,w.lang.Aa,"RenderMap"); w.extend(Yg.prototype,{pa:function(){this.addEventListener("render",this.ya)},ya:function(){if(this.map){for(var a=this,b=this.ma.sf,c=[],d=0,e=b.length;d<e;d++){var f=b[d];c.push(f.point);var g=this.AP(f.point,d,f.title);g&&(f.marker=g,function(){var b=d;g.addEventListener("click",function(){a.ma.select(b)})}(),this.ua.push(g))}this.ma.Qa(W.Rp,b)}},Yv:function(a){var b=this;if(a&&"string"!=typeof a&&!(a instanceof H)){var c=this.ma.mz=V.Yv(this.map,a.point,a.title);c.addEventListener("click",function(){b.ma.select(-1); b.ma.ib="c";var d=b.NG(a);c.Kb(d)})}},AP:function(a,b,c){return this.ma.k.Ak<=Za.Up&&!this.ma.Dc?V.xU(this.map,a,b,c):V.wU(this.map,a,c)},select:function(a){if(this.map&&-1<a&&this.ua[a]){if(F())for(var b=p,c=0,d=this.ua.length;c<d;c++)b=this.ua[c],a==c?b.Sb(b.BL):b.Sb(b.RD),b.draw;else{c=0;for(d=this.ua.length;c<d;c++)b=this.ua[c],b.wi(q)}this.map.Uc();if(b=this.ma.sf[a])b=this.NG(b),a=this.ua[a],a.wi(o),a.Kb(b)}},NG:function(a){var b=V.BV({title:a.title,Pr:a.address,e_:a.phoneNumber,url:a.url,LV:a.detailUrl, uid:a.uid,FE:a.type}),c=this;b.addEventListener("close",function(){c.ma.Sm.iV()});b.addEventListener("open",function(){c.ma.Qa(W.un,a,V.Hs(c.map))});return b},PK:function(a){var b=this.ma.k.ja;if(this.map)if(a.ha){var c=!b.Xg,b=!b.At&&b.Xg,a=this.map.Qs(a.ha,{margins:[30,30,30,30]});c||this.map.zh(a,{enableAnimation:b})}else a.ug=O.Qw(a.ug,this.map),b.Xg&&this.map.zd(a.Ea,a.ug)}});function Zg(a){w.lang.Aa.call(this);this.ma=a;this.Fa=a.k.ja.Fa;this.pa()}w.lang.sa(Zg,w.lang.Aa,"RenderList"); w.extend(Zg.prototype,{pa:function(){this.addEventListener("render",this.ya)},ya:function(){if(this.Fa){var a=L("div",{style:"font:12px "+E.fontFamily+";border:1px solid #999;"}),b=L("div",{style:"background:#fff"}),c=L("ol",{style:"list-style:none;padding:0;margin:0"}),d=this.ma.qm(),e=p;if(0==d)for(var e=0,f=this.ma.sf.length;e<f;e++)d=this.vQ(e),c.appendChild(d);else if(1==d){if(1==d&&!this.ma.Dc){e=0;for(f=Math.min(6,this.ma.ia.Tw().length);e<f;e++)d=this.tQ(e),c.appendChild(d)}}else{e="";switch(d){case 2:e= "\\u62b1\\u6b49\\uff0c\\u672a\\u627e\\u5230\\u76f8\\u5173\\u5730\\u70b9\\u3002";break;case 4:e="\\u62b1\\u6b49\\uff0c\\u60a8\\u6240\\u63d0\\u4f9b\\u7684key\\u65e0\\u6548\\u3002"}d=L("li",{style:"margin:2px 0;padding:0 5px 0 3px;overflow:hidden;line-height:17px"});d.innerHTML=e;c.appendChild(d)}b.appendChild(c);a.appendChild(b);e=this.BQ();a.appendChild(e);this.Fa.appendChild(a);this.ma.Qa(W.mu,a)}},vQ:function(a){var b=this.ma.sf;if(b&&b[a]){var b=b[a],c=L("li",{style:"margin:2px 0;padding:0 5px 5px 0px;cursor:pointer;overflow:hidden;line-height:17px;*zoom:1;"}); -1<this.ma.ib&&a==this.ma.ib&&(c.style.backgroundColor="#f0f0f0");var d=0==a?"0px":"-"+25*a+"px";if(this.ma.k.Ak>Za.Up||this.ma.Dc)d="-275px";var d=["<span style=\'background:url("+z.Ec+"images/markers.png) -23px "+d+" no-repeat;width:19px;height:25px;cursor:pointer;float:left;*zoom:1;overflow:hidden;margin:2px 3px 0 5px;*margin-right:0px;display:inline;\'>&nbsp;</span>"],e,f=RegExp(this.ma.Dc?this.ma.fa.od.join("|"):this.ma.ia.keyword,"ig");b.title&&(e=b.title.replace(f,"<b>$&</b>"));1==b.type?e+= "-\\u516c\\u4ea4\\u8f66\\u7ad9":3==b.type&&(e+="-\\u5730\\u94c1\\u7ad9");d.push("<div style=\'zoom:1;overflow:hidden;padding:0 5px;\'>");d.push("<div style=\'line-height:20px;font-size:12px;\'><span style=\'color:#00c;\'>"+e+"</span>");b.detailUrl&&d.push("<a target=\'_blank\' href=\'"+b.detailUrl+"\' style=\'margin-left:5px;font-size:12px;color:#3d6dcc;font-weight:normal;text-decoration:none;\'>\\u8be6\\u60c5&raquo;</a>");d.push("</div>");b.address&&(e=b.address.replace(f,"<b>$&</b>"),d.push("<div style=\'padding:2px 0;line-height:18px;*zoom:1;overflow:hidden;\'><b style=\'float:left;font-weight:bold;*zoom:1;overflow:hidden;padding-right:5px;*margin-right:-3px;\'>\\u5730\\u5740:</b><span style=\'color:#666;display:block;zoom:1;overflow:hidden;\'>"+ e+"</span></div>"));b.phoneNumber&&d.push("<div style=\'padding:2px 0;line-height:18px;*zoom:1;overflow:hidden;\'><b style=\'float:left;font-weight:bold;*zoom:1;overflow:hidden;padding-right:5px;*margin-right:-3px;\'>\\u7535\\u8bdd:</b><span style=\'color:#666;\'>"+b.phoneNumber+"</span></div>");d.push("</div>");c.innerHTML=d.join("");var g=this;c.onclick=function(){g.ma.select(a)};return c}},BQ:function(){var a=this,b=L("div",{style:"white-space:nowrap;text-align:right;background:#e5ecf9;margin-top:5px;padding:2px;overflow:hidden;zoom:1;"}); if(!this.ma.Dc&&!this.ma.Jl){var c=L("a",{style:"color:#7777cc;float:right;",href:this.ma.ia.moreResultsUrl,target:"_blank",title:"\\u5230\\u767e\\u5ea6\\u5730\\u56fe\\u67e5\\u770b\\u66f4\\u591a\\u7ed3\\u679c"});c.innerHTML="\\u66f4\\u591a\\u7ed3\\u679c&#187;";b.appendChild(c)}var c=L("div",{style:"float:left;margin-right:5px"}),d=this.ma.Tz();0<this.ma.sf.length&&new nd(c,function(b){a.ma.vm(b-1)},{Fd:d.So(),page:d.bL()+1,update:q});b.appendChild(c);return b},iV:function(){this.Fa&&("number"==typeof this.ma.ib&& -1!=this.ma.ib&&this.Fa.getElementsByTagName("li")[this.ma.ib])&&(this.Fa.getElementsByTagName("li")[this.ma.ib].childNodes[1].style.backgroundColor="");this.ma.ib=-1},select:function(a){if(this.Fa){var b=this.ma.ib;"number"==typeof b&&(-1!=b&&this.Fa.getElementsByTagName("li")[b])&&(this.Fa.getElementsByTagName("li")[b].childNodes[1].style.backgroundColor="");"number"==typeof a&&(-1!=a&&this.Fa.getElementsByTagName("li")[a])&&(this.Fa.getElementsByTagName("li")[a].childNodes[1].style.backgroundColor= "#f0f0f0")}},tQ:function(a){var b=L("li",{style:"margin:2px 0;padding:0 5px 0 3px;cursor:pointer;overflow:hidden;line-height:17px"});b.Pj=a;var c=this.ma.ia.Tw();b.innerHTML="<span style=\'color:#00c;text-decoration:underline\'>"+c[a].city+"</span> <span style=\'color:#666\'>(\\u5171"+c[a].numResults+"\\u6761\\u7ed3\\u679c)</span>";var d=this.ma,e=d.ia;b.onclick=function(){d.Ym(e.Tw()[a].city);d.search(e.keyword)};return b}}); ');
