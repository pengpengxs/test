_jsload2&&_jsload2('groundoverlay', 'w.extend(sc.prototype,{vb:function(){if(this.map){this.U||this.Ej();var a=this.map.ea();if(a<this.w.is||a>this.w.hs)this.R();else{var b=this.w.fb.pe(),c=this.w.fb.lf(),a=this.map.Re(b).x,d=this.map.Re(c).y,c=this.map.Re(c).x,b=this.map.Re(b).y;this.U.style.left=a+"px";this.U.style.top=d+"px";this.U.style.width=c-a+"px";this.U.style.height=b-d+"px";this.show()}}},draw:function(){this.vb()},Ej:function(){if(!this.U){this.U=document.createElement("div");var a=this.U.style;a.cssText="position: absolute; -moz-user-select: none; overflow: hidden;"; a.zIndex=jc.um(this.w.fb.pe().lat);this.w.opacity&&(a.opacity=this.w.opacity,a.filter="alpha(opacity="+100*parseInt(this.w.opacity,10)+")");this.Lg=document.createElement("img");this.Lg.style.width="100%";this.w.WZ&&(this.Lg.style.height="100%");this.U.appendChild(this.Lg);var b=this;this.Lg.onload=function(){b.w0=b.Lg.naturalWidth||b.Lg.width;b.v0=b.Lg.naturalHeight||b.Lg.height};this.w.Am&&(this.Lg.src=this.w.Am);this.map.Qf().jE.appendChild(this.U);b=this;w.K(this.U,"click",function(a){b.dispatchEvent(new N("click"), a)});w.K(this.U,"dblclick",function(a){b.dispatchEvent(new N("dblclick"),a)})}},rZ:function(a){this.w.fb=a;this.map&&this.vb();this.U.style.zIndex=jc.um(this.w.fb.pe().lat)},Dd:function(){return this.w.fb},fF:function(a){this.w.opacity=a;this.U.style.opacity=a;this.U.style.filter="alpha(opacity="+100*parseInt(a,10)+")"},YW:function(){return this.w.opacity},xZ:function(a){this.w.Am=a;this.Lg&&(this.Lg.src=a)},MW:function(){return this.w.Am},z3:function(a){this.w.is=a},N1:function(){return this.w.is}, y3:function(a){this.w.hs=a},M1:function(){return this.w.hs}});sc.prototype.setBounds=sc.prototype.rZ;sc.prototype.getBounds=sc.prototype.Dd;sc.prototype.setOpacity=sc.prototype.fF;sc.prototype.getOpacity=sc.prototype.YW;sc.prototype.setImageURL=sc.prototype.xZ;sc.prototype.getImageURL=sc.prototype.MW;sc.prototype.setDispalyOnMinLevel=sc.prototype.x3;sc.prototype.setDispalyOnMaxLevel=sc.prototype.w3; ');
