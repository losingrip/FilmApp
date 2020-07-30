//设置导航栏的头像与名字
// function changeloginname(){
//      let name=window.localStorage.getItem("userName");
//      let headimg = window.localStorage.getItem("userheadimg");
//      if(name==null||name==''){
//          name='用户';
//      }
//      if(headimg == null || headimg.length == 0){
//          headimg='img/head/user.png';
//      }
//      let oLoginName = document.getElementById('LoginName');
//      // oLoginName.innerText=name;
//      var oImg = document.createElement('img');
//      oImg.src = 'img/head/'+headimg;
//      oImg.classList.add("layui-nav-img");
//      oLoginName.insertBefore(oImg,document.getElementById('before-user'))
//      let nameBox = $('#before-user');
//      nameBox.innerText = name;//本地缓存赋值
//  }

 //获取请求参数
 function getQueryString() {  
     var qs = location.search.substr(1), // 获取url中"?"符后的字串  
         args = {}, // 保存参数数据的对象
         items = qs.length ? qs.split("&") : [], // 取得每一个参数项,
         item = null,
         len = items.length;
     
     for(var i = 0; i < len; i++) {
         item = items[i].split("=");
         var name = decodeURIComponent(item[0]),
         value = decodeURIComponent(item[1]);
         if(name) {
         args[name] = value;
         }
     }
     return args;
     }


//推出登录
function DelectClick(){
    var Storage= window.localStorage;
    Storage.removeItem('token');
    Storage.removeItem('userName');
    Storage.removeItem('userId');
    Storage.removeItem('userheadimg');
    alert("退出成功！")
    console.log("yes");
}