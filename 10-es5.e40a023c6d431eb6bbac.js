!function(){function t(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function n(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function e(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{FQ1g:function(n,i,r){"use strict";r.r(i),r.d(i,"AboutPageModule",(function(){return x}));var a,o,s=r("ofXK"),c=r("3Pt+"),u=r("TEn/"),b=r("tyNb"),d=r("fXoL"),l=r("tk/3"),f=r("mrSG"),p=((o=function(){function n(e,i){t(this,n),this.loadingController=e,this.alertCtrl=i,this.ip="http://localhost:8012/pdo/"}return e(n,[{key:"loadingAlert",value:function(){return Object(f.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.loadingController.create({spinner:"bubbles",message:"\u0e01\u0e33\u0e25\u0e31\u0e07\u0e42\u0e2b\u0e25\u0e14\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25..."});case 2:return n=t.sent,t.next=5,n.present();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t,this)})))}},{key:"ChkformAlert",value:function(t){return Object(f.a)(this,void 0,void 0,regeneratorRuntime.mark((function n(){var e;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.alertCtrl.create({message:t,buttons:["\u0e15\u0e01\u0e25\u0e07"]});case 2:return e=n.sent,n.next=5,e.present();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n,this)})))}}]),n}()).\u0275fac=function(t){return new(t||o)(d.Ob(u.y),d.Ob(u.a))},o.\u0275prov=d.Db({token:o,factory:o.\u0275fac,providedIn:"root"}),o),h=((a=function(){function n(e,i){t(this,n),this.http=e,this.config=i}return e(n,[{key:"getCourse",value:function(t,n){var e;return e={padding:t,limit:n},this.http.post(this.config.ip+"fecthdata_json.php",e,{headers:{"Content-Type":"application/json"}})}}]),n}()).\u0275fac=function(t){return new(t||a)(d.Ob(l.a),d.Ob(p))},a.\u0275prov=d.Db({token:a,factory:a.\u0275fac,providedIn:"root"}),a);function g(t,n){if(1&t&&(d.Kb(0,"ion-item",4),d.Kb(1,"ion-label"),d.Kb(2,"ion-text",5),d.Kb(3,"h3"),d.ec(4),d.Jb(),d.Jb(),d.Kb(5,"p"),d.ec(6),d.Jb(),d.Jb(),d.Kb(7,"ion-badge",6),d.ec(8),d.Jb(),d.Jb()),2&t){var e=n.$implicit;d.xb(4),d.fc(e.name),d.xb(2),d.fc(e.email),d.xb(2),d.fc(e.id)}}var m,v,y,w=[{path:"",component:(m=function(){function n(e,i){t(this,n),this.dataService=e,this.configService=i,this.data=[],this.page=0,this.maxpadding=0,this.limit=50}return e(n,[{key:"ngOnInit",value:function(){this.loaddata(this.page)}},{key:"loaddata",value:function(t,n){var e,i=this;this.sub=this.dataService.getCourse(t,this.limit).subscribe((function(t){if(null!==t){i.maxpadding=t.maxpadding,e=t.limit;for(var r=0;r<e;r++)i.data.push({id:t.data_detail[r].id,name:t.data_detail[r].name,createdate:t.data_detail[r].createdate,formatdate:t.data_detail[r].formatdate});n&&n.target.complete()}}))}},{key:"ngOnDestroy",value:function(){this.sub.unsubscribe()}},{key:"doInfinite",value:function(t){this.page++,console.log(this.page,this.maxpadding),this.loaddata(this.page*this.limit,t),this.page===this.maxpadding&&(t.target.disabled=!0,this.configService.ChkformAlert("\u0e44\u0e21\u0e48\u0e1e\u0e1a\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e41\u0e25\u0e49\u0e27"))}}]),n}(),m.\u0275fac=function(t){return new(t||m)(d.Hb(h),d.Hb(p))},m.\u0275cmp=d.Bb({type:m,selectors:[["app-about"]],decls:11,vars:1,consts:[["slot","start"],["detail","",4,"ngFor","ngForOf"],[3,"ionInfinite"],["loadingSpinner","bubbles","loadingText","Loading more data..."],["detail",""],["color","primary"],["slot","end","color","danger"]],template:function(t,n){1&t&&(d.Kb(0,"ion-header"),d.Kb(1,"ion-toolbar"),d.Kb(2,"ion-buttons",0),d.Ib(3,"ion-menu-button"),d.Jb(),d.Kb(4,"ion-title"),d.ec(5,"about"),d.Jb(),d.Jb(),d.Jb(),d.Kb(6,"ion-content"),d.Kb(7,"ion-list"),d.dc(8,g,9,3,"ion-item",1),d.Jb(),d.Kb(9,"ion-infinite-scroll",2),d.Sb("ionInfinite",(function(t){return n.doInfinite(t)})),d.Ib(10,"ion-infinite-scroll-content",3),d.Jb(),d.Jb()),2&t&&(d.xb(8),d.Xb("ngForOf",n.data))},directives:[u.f,u.v,u.d,u.o,u.u,u.e,u.l,s.h,u.h,u.i,u.j,u.k,u.t,u.c],styles:[""]}),m)}],k=((y=function n(){t(this,n)}).\u0275mod=d.Fb({type:y}),y.\u0275inj=d.Eb({factory:function(t){return new(t||y)},imports:[[b.i.forChild(w)],b.i]}),y),x=((v=function n(){t(this,n)}).\u0275mod=d.Fb({type:v}),v.\u0275inj=d.Eb({factory:function(t){return new(t||v)},imports:[[s.b,c.a,u.w,k]]}),v)}}])}();