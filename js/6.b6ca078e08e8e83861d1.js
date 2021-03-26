webpackJsonp([6],{PU1I:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("Xxa5"),a=n.n(r),s=n("exGp"),c=n.n(s),i=n("o8EA"),o={filters:{parseTime:function(t){return Object(i.a)(new Date(t))},initSize:function(t){var e=t/1024;return(e=e.toFixed(2))>1024?(e=(e/=1024).toFixed(2))>1024?(e=(e/=1024).toFixed(2),e+="GB"):e+="MB":e+="KB",e}},data:function(){return{list:[],fix:location.protocol+"//"+location.host+"/s/"}},mounted:function(){var t=this;return c()(a.a.mark(function e(){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.init(),t.$store.commit("setMatched",[{path:"/home",title:"首页"},{path:"/share",title:"我的分享"}]);case 2:case"end":return e.stop()}},e,t)}))()},methods:{doCp:function(t){var e=this;return c()(a.a.mark(function n(){return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,e.$copyText(t);case 3:e.$message({message:"链接已成功复制到剪贴板",type:"success"}),n.next=9;break;case 6:n.prev=6,n.t0=n.catch(0),e.$message.error("复制失败");case 9:case"end":return n.stop()}},n,e,[[0,6]])}))()},init:function(){var t=this;return c()(a.a.mark(function e(){var n;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("/share/list",{params:{t:(new Date).getTime()}});case 2:n=e.sent,console.log(n),t.list=n;case 5:case"end":return e.stop()}},e,t)}))()},chancelShare:function(t){var e=this;return c()(a.a.mark(function n(){return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:e.$confirm("此操作将永久删除该分享链接, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(c()(a.a.mark(function n(){var r;return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.$http.delete("/share/list",{data:{id:t}});case 2:r=n.sent,e.init(),e.$message({type:"success",message:r});case 5:case"end":return n.stop()}},n,e)}))).catch(function(){});case 1:case"end":return n.stop()}},n,e)}))()},stopShare:function(t){var e=this;return c()(a.a.mark(function n(){return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:e.$confirm("此操作将暂停该分享链接, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(c()(a.a.mark(function n(){var r;return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.$http.post("/share/list",{id:t,type:!1});case 2:r=n.sent,e.init(),e.$message({type:"success",message:r});case 5:case"end":return n.stop()}},n,e)}))).catch(function(){});case 1:case"end":return n.stop()}},n,e)}))()},openShare:function(t){var e=this;return c()(a.a.mark(function n(){var r;return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.$http.post("/share/list",{id:t,type:!0});case 2:r=n.sent,e.init(),e.$message({type:"success",message:r});case 5:case"end":return n.stop()}},n,e)}))()},rvPw:function(t){var e=this;return c()(a.a.mark(function n(){var r;return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.$http.post("/share/list",{id:t,password:null});case 2:r=n.sent,e.init(),e.$message({type:"success",message:r});case 5:case"end":return n.stop()}},n,e)}))()},addPw:function(t){var e=this;return c()(a.a.mark(function n(){return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:e.$prompt("请输入密码","提示",{confirmButtonText:"确定",cancelButtonText:"取消"}).then(function(){var n=c()(a.a.mark(function n(r){var s,c=r.value;return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.$http.post("/share/list",{id:t,password:c});case 2:s=n.sent,e.init(),e.$message({type:"success",message:s});case 5:case"end":return n.stop()}},n,e)}));return function(t){return n.apply(this,arguments)}}()).catch(function(){});case 1:case"end":return n.stop()}},n,e)}))()}}},u={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-table",{staticStyle:{width:"100%"},attrs:{height:"400",data:t.list,border:""}},[n("el-table-column",{attrs:{prop:"name",label:"文件夹名"}}),t._v(" "),n("el-table-column",{attrs:{prop:"fileSize",label:"分享地址"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-link",{attrs:{type:"primary"},on:{click:function(n){return t.doCp(t.fix+e.row.id)}}},[t._v(t._s(t.fix+e.row.id))])]}}])}),t._v(" "),n("el-table-column",{attrs:{prop:"password",label:"密码"}}),t._v(" "),n("el-table-column",{attrs:{prop:"fileSize",label:"状态",width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.type?n("el-tag",{attrs:{type:"success"}},[t._v("分享中")]):n("el-tag",{attrs:{type:"danger"}},[t._v("已暂停")])]}}])}),t._v(" "),n("el-table-column",{attrs:{prop:"time",label:"创建时间",width:"165"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t._f("parseTime")(e.row.time)))]}}])}),t._v(" "),n("el-table-column",{attrs:{prop:"time",label:"操作",width:"220"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("div",{staticStyle:{"margin-bottom":"20px"}},[n("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(n){return t.chancelShare(e.row.id)}}},[t._v("取消")]),t._v(" "),n("el-button",{attrs:{disabled:!e.row.type,type:"warning",size:"mini"},on:{click:function(n){return t.stopShare(e.row.id)}}},[t._v("暂停")])],1),t._v(" "),n("div",[e.row.password?n("el-button",{attrs:{type:"success",size:"mini"},on:{click:function(n){return t.rvPw(e.row.id)}}},[t._v("取消密码")]):n("el-button",{attrs:{type:"success",size:"mini"},on:{click:function(n){return t.addPw(e.row.id)}}},[t._v("添加密码")]),t._v(" "),n("el-button",{attrs:{disabled:e.row.type,type:"primary",size:"mini"},on:{click:function(n){return t.openShare(e.row.id)}}},[t._v("开启")])],1)]}}])})],1)],1)},staticRenderFns:[]},p=n("VU/8")(o,u,!1,null,null,null);e.default=p.exports}});