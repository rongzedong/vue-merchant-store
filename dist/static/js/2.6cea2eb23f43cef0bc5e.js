webpackJsonp([2],{"4hDM":function(t,s){},"6RB9":function(t,s){},R1hA:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("IHPB"),i=e.n(a),n=e("lC5x"),o=e.n(n),r=e("J0Oq"),c=e.n(r),l=e("+vOg"),u=e("tUcG"),d=e("0xDb"),p={name:"InputNumber",props:{product:"",cartAnimation:{default:!0,type:Boolean}},computed:{cartInfo:function(){return this.$store.getters["cartModule/getCartById"](this.product)}},methods:{add:function(){this.cartInfo.store_nums<=0||this.cartInfo.count==this.cartInfo.store_nums||(this.$store.dispatch("cartModule/joinCart",this.cartInfo),this.cartAnimation&&u.a.$emit("JoinCartAnimation",this.$el.querySelector(".ask-inadd"),this.cartInfo.pic))},reduce:function(){this.$store.dispatch("cartModule/removeCart",this.cartInfo.id)}}},v={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"ask-input-number"},[e("transition",{attrs:{name:"islide"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.cartInfo.count>0,expression:"cartInfo.count > 0"}],staticClass:"ask-inreduce",on:{click:t.reduce}})]),t._v(" "),e("transition",{attrs:{name:"ifade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.cartInfo.count>0,expression:"cartInfo.count > 0"}],staticClass:"ask-ininput"},[t._v("\n\t\t\t"+t._s(t.cartInfo.count)+"\n\t\t")])]),t._v(" "),e("div",{staticClass:"ask-inadd",class:{disabled:t.cartInfo.store_nums<=0||t.cartInfo.count==t.cartInfo.store_nums},on:{click:t.add}},[e("i",{staticClass:"iconfont icon-tianjiagouwuche"})])],1)},staticRenderFns:[]};var h=e("Z0/y")(p,v,!1,function(t){e("Xqih")},null,null).exports,m={name:"ProductItem",props:["product"],components:{"input-number":h},computed:{twoFloat:function(){return d.n}}},f={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"product-item"},[e("div",{staticClass:"cover"},[e("div",{staticClass:"box"},[e("img",{attrs:{src:t.product.pic,alt:"封面"}})])]),t._v(" "),e("div",{staticClass:"info"},[e("div",{staticClass:"detail"},[e("div",{staticClass:"title"},[t._v(t._s(t.product.name))]),t._v(" "),e("div",{staticClass:"text gray"},[t._v("库存"+t._s(t.product.store_nums))])]),t._v(" "),e("div",{staticClass:"other"},[e("div",{staticClass:"price"},[e("i",[t._v("￥")]),t._v(t._s(t.twoFloat(t.product.price).split(".")[0])),e("i",[t._v("."+t._s(t.twoFloat(t.product.price).split(".")[1]))])]),t._v(" "),e("input-number",{attrs:{product:t.product}})],1)])])},staticRenderFns:[]};var C={name:"ProductList",props:["product"],components:{"product-item":e("Z0/y")(m,f,!1,function(t){e("pRcV")},null,null).exports}},_={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"product-list"},[this._l(this.product,function(t){return[s("product-item",{attrs:{product:t}})]})],2)},staticRenderFns:[]};var w={name:"ShopCart",inject:["rootMain"],components:{"input-number":h},computed:{cartNum:function(){return this.$store.getters["cartModule/getCartNum"]},cartListModal:function(){return this.cartNum>0&&this.modalShow},cartList:function(){return this.$store.getters["cartModule/getAllCart"]},allPrice:function(){var t=0;return this.cartList.length>0&&(t=this.cartList.reduce(function(t,s){return t+s.count*Number(Object(d.n)(s.price))},0)),Object(d.d)(Object(d.n)(t))},shopTwoFloat:function(){return d.n}},watch:{cartNum:function(t,s){0==t&&(this.modalShow=!1)}},data:function(){return{modalShow:!1}},mounted:function(){u.a.$on("JoinCartAnimation",this.joinCartAnimation)},beforeDestroy:function(){u.a.$off("JoinCartAnimation",this.joinCartAnimation)},methods:{joinCartAnimation:function(t,s){var e=t.getBoundingClientRect(),a=document.createElement("div"),i=document.createElement("div");if(Object(d.b)(a,"ask-shop-verball"),Object(d.b)(i,"ask-shop-horball"),s){var n=document.createElement("img");n.src=s,i.appendChild(n)}a.appendChild(i),this.$el.appendChild(a);var o=this.$el.querySelector(".asc-cart-icon>.icon-box").getBoundingClientRect(),r=o.top+o.height/2,c=o.left+o.width/2;a.style.transform="translate3d(0,-"+Math.floor(r-e.top+e.height/2)+"px,0)",i.style.transform="translate3d("+Math.floor(e.left-c+e.width/2)+"px,0,0)",window.getComputedStyle(a).getPropertyValue("opacity"),window.getComputedStyle(i).getPropertyValue("opacity"),a.style.transitionDuration="300ms",a.style.transform="translate3d(0,0,0)",i.style.transitionDuration="300ms",i.style.transform="translate3d(0,0,0)",setTimeout(function(){a.remove()},300)},closeModal:function(){this.modalShow=!1},showModal:function(){this.modalShow=!0},toggleModal:function(){0!=this.cartNum?this.modalShow?this.closeModal():this.showModal():this.closeModal()},clearCart:function(){var t=this;Object(d.e)({title:"提示",theme:"accent",content:"是否清空购物车内所有商品？",sure:"清空",shadeClick:!1,showClose:!1},function(s){t.$store.dispatch("cartModule/clearCart"),t.closeModal(),s.close()},function(t){})}}},y={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"ask-shop-cart"},[e("div",{staticClass:"asc-body",class:{active:t.cartNum>0}},[e("div",{staticClass:"asc-cart-icon",on:{click:t.toggleModal}},[e("div",{staticClass:"icon-box"},[e("i",{staticClass:"iconfont icon-gouwuche"}),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.cartNum>0,expression:"cartNum > 0"}],staticClass:"asc-cibadge",domProps:{textContent:t._s(t.cartNum)}})])]),t._v(" "),e("div",{staticClass:"asc-cart-tip",on:{click:t.toggleModal}},[e("div",{directives:[{name:"show",rawName:"v-show",value:0==t.cartNum,expression:"cartNum == 0"}],staticClass:"text"},[t._v("购物车空空的，赶快添加一点宝贝吧...")]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.cartNum>0,expression:"cartNum > 0"}],staticClass:"text"},[t._v("￥"),e("span",[t._v(t._s(t.allPrice))])])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.cartNum>0,expression:"cartNum > 0"}],staticClass:"asc-cart-btns"},[e("router-link",{attrs:{to:{name:"clearing",query:this.$route.query}}},[e("ask-button",{attrs:{hover:!1,text:"立即下单"}})],1)],1)]),t._v(" "),e("transition",{attrs:{name:"shop-cart-fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.cartListModal,expression:"cartListModal"}],staticClass:"asc-overlay",on:{click:t.closeModal}})]),t._v(" "),e("transition",{attrs:{name:"shop-cart-slide"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.cartListModal,expression:"cartListModal"}],staticClass:"asc-list-modal"},[e("div",{staticClass:"asc-lmtitle"},[e("div",{staticClass:"caption"},[t._v("购物车")]),t._v(" "),e("ask-button",{attrs:{hover:!1,ripple:!1},nativeOn:{click:function(s){return t.clearCart(s)}}},[e("i",{staticClass:"iconfont icon-shanchu"}),t._v("\n\t\t\t\t\t清空购物车\n\t\t\t\t")])],1),t._v(" "),e("div",{staticClass:"asc-lminfo"},[e("div",{staticClass:"limit-box"},[e("ul",{staticClass:"list"},[t._l(t.cartList,function(s,a){return[e("li",{key:a,staticClass:"once"},[e("div",{staticClass:"o-info"},[e("div",{staticClass:"o-itext"},[t._v(t._s(s.name))]),t._v(" "),e("div",{staticClass:"o-itext price"},[t._v("￥"+t._s(t.shopTwoFloat(s.price)))])]),t._v(" "),e("input-number",{attrs:{product:s,cartAnimation:!1}})],1)]})],2)])])])])],1)},staticRenderFns:[]};var g={name:"ShopList",components:{"product-list":e("Z0/y")(C,_,!1,function(t){e("s/lV")},null,null).exports,"shop-cart":e("Z0/y")(w,y,!1,function(t){e("6RB9")},null,null).exports},data:function(){return{typeList:[],typeId:null,loader:!1,product:[],allowClick:!0,offset:0,infiniteMore:!1,productServer:new l.d}},computed:{typeName:function(){var t=this,s="";this.typeList.length>0&&null!=this.typeId&&(s=this.typeList.filter(function(s){return s.id==t.typeId})[0].name||"");return s}},mounted:function(){var t=this;return c()(o.a.mark(function s(){return o.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,t.initType();case 2:t.getProduct();case 3:case"end":return s.stop()}},s,t)}))()},methods:{changeSub:function(t){t!=this.typeId&&(this.allowClick=!0),this.allowClick&&(this.typeId=t,this.allowClick=!1,this.infiniteMore=!0,this.offset=0,this.product=[],this.getProduct())},initType:function(){var t=this;return c()(o.a.mark(function s(){var e;return o.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,t.productServer.getType();case 2:if(0!=(e=s.sent).data.list.length){s.next=6;break}return Object(d.f)({msg:"暂无分类信息",class:"info"}),s.abrupt("return");case 6:t.typeList=e.data.list,t.typeId=e.data.list[0].id;case 8:case"end":return s.stop()}},s,t)}))()},getProduct:function(){var t=this;null!=this.typeId&&(this.loader=!0,this.productServer.getGoods({type_id:this.typeId,offset:this.offset}).then(function(s){if(t.allowClick=!0,t.loader=!1,s.data.ok){var e=[];s.data.list.length>0&&(s.data.list.map(function(t){e.push(t)}),t.product=[].concat(i()(t.product),e)),t.infiniteMore=s.data.hasmore,t.offset++}},function(s){t.allowClick=!0,t.loader=!1,console.log(s)}))},onInfinite:function(t){var s=this;return c()(o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(s.infiniteMore){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,s.getProduct();case 4:t();case 5:case"end":return e.stop()}},e,s)}))()}},watch:{}},b={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{directives:[{name:"nav",rawName:"v-nav",value:t.$route.meta,expression:"$route.meta"}],staticClass:"ask-view index"},[e("div",{staticClass:"ask-view-box"},[e("div",{staticClass:"ms-shoplist-menu"},[e("ask-scroll",{staticClass:"noscroll"},[e("ul",{staticClass:"ms-smlist"},[t._l(t.typeList,function(s){return[e("li",{key:s.id,staticClass:"ms-smli",class:{active:t.typeId==s.id},on:{click:function(e){t.changeSub(s.id)}}},[e("div",{staticClass:"text"},[t._v(t._s(s.name))])])]})],2)])],1),t._v(" "),e("div",{staticClass:"ms-shoplist-sub"},[0!=t.typeList.length?e("div",{staticClass:"ms-sstitle"},[t._v(t._s(t.typeName))]):t._e(),t._v(" "),e("div",{staticClass:"ms-ssinfo"},[e("ask-scroll",{staticClass:"noscroll ms-ssscorll",attrs:{"on-infinite":t.onInfinite}},[e("product-list",{attrs:{product:t.product}}),t._v(" "),e("ask-inline-loader",{attrs:{show:t.loader}}),t._v(" "),t.infiniteMore?t._e():e("template",{slot:"infinite"},[e("div",{staticClass:"bottom-line-text"},[e("span",[0==t.typeList.length?[t._v("暂无分类数据")]:0==t.product.length?[t._v("该分类暂无数据")]:[t._v("已加载全部数据")]],2)])])],2)],1)]),t._v(" "),e("shop-cart")],1)])},staticRenderFns:[]};var x=e("Z0/y")(g,b,!1,function(t){e("4hDM")},null,null);s.default=x.exports},Xqih:function(t,s){},pRcV:function(t,s){},"s/lV":function(t,s){}});