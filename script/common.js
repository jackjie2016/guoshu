/*
 * 自定义常用函数
 */

 // var public_key='TEST-d32dd1e7-9fed-47c5-9347-6c113189665d';
 // var access_token='TEST-6401462572750738-060808-9f75c05f8aea8dd3dbd2409bcb0c78cb-386740815';
 var public_key='APP_USR-f34aa4a4-6106-41e9-bad2-434eba7b83a6';
 var access_token='APP_USR-6401462572750738-060808-be9cf2d2b96974424581d085cd4b2b57-386740815';

 var js_version='1.6.15';
 var Siteurl = 'https://api.mercadopago.com/v1/';//域名url

 var Is_debug=0;//1 是，0不是
 //获取证件类型
 var identification_url = Siteurl + 'identification_types';
 //获取token和激活token
 var card_tokens_url = Siteurl + 'card_tokens';
 //付款卡类型
 var payment_methods_url = Siteurl + 'payment_methods';
  var customers_url = Siteurl + 'customers';
 var customers_search_url = Siteurl + 'customers/search';

  var get_installments_url=Siteurl+'payment_methods/installments';

//  var TURL="http://penglian.titrol.vip/index.php/api/index/";


// var Baseurl = 'http://ps.code688.com/app/';//域名url
// var Baseurl = 'http://ps-cn.code688.com/app/';//域名url
var Baseurl = 'http://ps-arg.code688.com/app/';//域名url




var tag_list = Baseurl + 'index/recommendpage';
var tags_goods_list = Baseurl + 'index/recommendgoods';
var goods_info_url = Baseurl + 'goods/detail';
var index_url = Baseurl + 'index/index';
var cate_list_url = Baseurl+'category/lists';
var cate_pushlist_url= Baseurl+'category/push';
var children_cate_list_url = Baseurl+'index/children_cate_list';
var cate_goodslist_url = Baseurl+'goods/lists';
var zuji_url = Baseurl + 'goods/goods_review_list';
var up_url = Baseurl + 'Upload/imageComment';
var like_goods_url = Baseurl + 'goods/lists';

var comment_url=Baseurl + 'user.comment/submit';
var comment_list_url=Baseurl+'comment/lists';

var receipt_url=Baseurl + 'user.order/receipt';
var delete_url=Baseurl + 'user.order/delete';
var qiandao_url =Baseurl+'point.log/sign';
var jifen_list_url=Baseurl+'point.log/lists';
var hot_keywords_url=Baseurl+'index/tagslist';
var add_zuji_url=Baseurl+'goods/add_goods_review';

//结算时间选择
var get_date_list_url=Baseurl+'index/getdatelist';
var get_time_list_url=Baseurl+'index/gettimelist';
var get_time_info_url=Baseurl+'index/gettimeformat';

//vip模块链接
var vip_list_url=Baseurl+'user.vip/index';
var vip_coupons_url=Baseurl+'coupon/viplists';
var buy_vip_submit_url=Baseurl+'user.vip/buy';
var vip_goods_url=Baseurl+'user.vip/goodslist';


var rebuy_url=Baseurl+'goods/nearbuylists';

var xinxi_url=Baseurl+'user.msg/index';
var recharge_submit_url=Baseurl+'Recharge/submit';
var balance_url=Baseurl+'Balance.Log/lists';


var login_url = Baseurl + 'user/login';
var register_url = Baseurl + 'user/register';
var sendsms_url = Baseurl + 'user/sendsms';
var check_mobile_url = Baseurl + 'user/check_mobile';
var resetPassword_sendsms_url = Baseurl + 'user/resetPassword_sendsms';
var resetPassword_url = Baseurl + 'user/resetPassword';
var updatePassword_url = Baseurl + 'user/updatePassword';
var update_username_url = Baseurl + 'user/update_username';

//活动页面
var flashpage_url=Baseurl+'index/flashpage';
var flashpage_list_url=Baseurl+'index/flashgoods';

//用户中心首页
var user_center_url = Baseurl + 'user/detail';
var coupon_url = Baseurl + 'coupon/lists';
var receive_coupon_url = Baseurl + 'user.coupon/receive';
var user_coupon_url = Baseurl + 'user.coupon/lists';
var morenka_url = Baseurl + 'Creditcard/setDefault';
var card_url = Baseurl + 'Creditcard/lists';
var card_add_url = Baseurl + 'Creditcard/add';
var card_del_url = Baseurl + 'Creditcard/delete';
var push_init_url = Baseurl + 'user/appinit';
var im_init_url = Baseurl + 'user/iminit';

//地址管理
var list_address_url = Baseurl + 'address/lists';
var push_list_address_url = Baseurl + 'address/auto_push_address';
var is_allow_area_url = Baseurl + 'address/is_allow_area';
var default_address_url = Baseurl + 'address/default_address';
var add_address_url = Baseurl + 'address/add';
var set_default_address_url = Baseurl + 'address/setDefault';
var delete_address_url = Baseurl + 'address/delete';
var update_addres_before_url = Baseurl + 'address/detail';
var update_address_url = Baseurl + 'address/edit';

//配送区域
var peisong_url=Baseurl+'map/districlist';

//添加到购物车
var add_to_cart_url = Baseurl + 'cart/add';
var readd_to_cart_url = Baseurl + 'cart/readd';
var cutdown_to_cart_url = Baseurl + 'cart/sub';
var cart_list_url = Baseurl + 'cart/lists';
var total_goods_sum_url = Baseurl + '/cart/total_goods_sum';
var update_cart_status_url = Baseurl + '/cart/update_cart_status';
var update_allcart_status_url = Baseurl + '/cart/update_allcart_status';
var delete_to_cart_url = Baseurl + '/cart/delete';

//收藏管理
var add_goods_collect_url = Baseurl + "index/add_goods_collect";
var delete_goods_collect_url = Baseurl + "index/delete_goods_collect";
var list_goods_collect_url = Baseurl + "index/list_goods_collect";

//订单管理
var order_confirm_url = Baseurl + "order/order_confirm";
var order_create_url = Baseurl + "order/create";
var order_cart_create = Baseurl + "order/cart";
var order_cart_confirm = Baseurl + "order/cart";
var alipay_before_url = Baseurl + "order/alipay_before";
var wxpay_before_url = Baseurl + "order/wxpay_before";
var order_list_url = Baseurl + "user.order/lists";
var order_cancel_url = Baseurl + "user.order/cancel";//取消订单
var order_info_url =Baseurl+"user.order/detail";


//分销
var my_wallet_url = Baseurl + "member/my_wallet";//我的钱包
var withdraw_before_url = Baseurl + "member/withdraw_before";//提现
var member_withdraw_delete_url = Baseurl + "member/member_withdraw_delete";//删除提现记录
var withdraw_after_url = Baseurl + "member/withdraw_after";//提交
var member_card_before_url = Baseurl + "member/member_card_before";//提现认证
var member_card_update_url = Baseurl + "member/member_card_update";//提现认证
var withdraw_order_list_url = Baseurl + "member/withdraw_order_list";//分佣记录


//区域代理
var daili_info_url = Baseurl + 'member/daili_info';
var add_area_deliveryman_url = Baseurl + 'member/add_area_deliveryman';
var area_deliveryman_detail_url = Baseurl + 'member/area_deliveryman_detail';
var delete_area_deliveryman_url = Baseurl + 'member/delete_area_deliveryman';
var set_area_deliveryman_url = Baseurl + 'member/set_area_deliveryman';

var area_agent_order_url = Baseurl + 'member/area_agent_order';//服务指派
var deliveryman_list_url = Baseurl + 'member/deliveryman_list';//业务员列表
var add_area_deliveryman_order_url = Baseurl + 'member/add_area_deliveryman_order';//指派提交
var delete_area_deliveryman_order_url = Baseurl + 'member/delete_area_deliveryman_order';//删除指派
var my_deliveryman_order_url = Baseurl + 'member/my_deliveryman_order';//我的任务
var usercenter_help_url = Baseurl + 'index/usercenter_help';//帮助
var about_us_url = Baseurl + 'index/about_us';//关于我们
var agreement_content_url = Baseurl + 'index/agreement_content';//关于我们
var explain_content_url = Baseurl + 'index/explain_content';//关于我们
var article_list_url = Baseurl + 'index/article_list';//消息列表
var goods_share_url = Baseurl + 'index/goods_share';//分享朋友圈


var erweima_reg_url = Baseurl + 'index/erweima_reg';//推广链接
var erweima_qrcode_url = Baseurl + 'index/erweima_qrcode';//二维码地址

//信用卡管理
var createCard_url = Baseurl + 'payment/createCard';//添加信用卡
var get_customerID_url = Baseurl +'payment/getId';
var active_token_url = Baseurl +'payment/active_pay_token';
var pay_url = Baseurl +'payment/pay';
var recharge_pay_url = Baseurl +'payment/recharge_pay';
var vip_pay_url = Baseurl +'payment/vip_pay';
var searchPaystatus_url = Baseurl +'payment/searchPaystatus';

//google 接口
var google_autocomplete_url=Baseurl +'google/autocomplete';
var google_queryautocomplete_url=Baseurl +'google/queryautocomplete';
var google_nearbysearch_url=Baseurl +'google/nearbysearch';
var google_findplacefromtext_url=Baseurl +'google/findplacefromtext';
var google_details_url=Baseurl +'google/details';
var google_geocode_url=Baseurl +'google/geocode';
var upload_avater_url=Baseurl+'Upload/avater';
var update_user_info_url=Baseurl+'user/updateField';
// IM模块
var Im_Url='http://im-server.code688.com/api/'
var add_im_User_url=Im_Url+'Index/addUser';
var Get_User=Im_Url+'Index/getUser';
var chat_log_url=Im_Url+'chatlog/detail';
//地图区域限制
var districlist_url =Baseurl +'map/districlist';
//店铺位置
var store_position_url= Baseurl + 'map/store_position';
 //自定义函数
 //获取json长度
 function json_num(json2){
 var jslength=0;
 for(var js2 in json2){
 jslength++;
 }
 return jslength;
 }
 //判断有没有网络
 function isweb(){
     var connectionType = api.connectionType;
     if(connectionType=='none'){
     return false;
     }
     return true;
 }

 //购物车加1/n
 function  add_to_cart(goods_id,goods_sku_id,goods_sum) {

     if(!is_login()){
         openWin('member', 'login');
         return false;
     }
     api.ajax({
         url: add_to_cart_url,
         method: 'post',
         timeout: 30,
         dataType: 'json',
         returnAll: false,
         data: {
             values: {
                 goods_id: goods_id,
                 goods_sku_id: goods_sku_id,
                 goods_num: goods_sum,
                 token: api.getPrefs({sync: true,key:'login_id'}),
                 deviceid: api.deviceId,
             }
         }
     }, function (ret, err) {
         if (ret) {
             console.log(JSON.stringify(ret));
             if(ret.code == 1){
                 //更新全局购物车数量显示function
                 api.sendEvent({
                     name: 'tatal_goods_sum',
                 });
                 //更新全局购物车总价
                 api.sendEvent({
                     name: 'tatal_goods_total_price',
                     extra: {
                         total_price:ret.data.total_price
                     }});
             }
         } else {
             console.log(JSON.stringify(err));
         }
     });
 }
 function tishi(msg){
     api.toast({msg: msg,duration: 2000,location: 'bottom'});
 }
 //返回
 function fanhui(){
     api.closeWin();
 }

 //清空本地$api.clearStorage();
 function qingkong(){
     $api.clearStorage();
     api.toast({msg: '退出成功',duration: 2000,location: 'bottom'});
 }
 //判断有没有登录
 function isdenglu(){
     var login_id=api.getPrefs({sync: true,key:'login_id'});
     /*var u=api.getPrefs({sync: true,key:'user'});
     u=JSON.parse(u);*/
     if(!login_id){
     return false;
     }else{
         return true;
     }
 }
 function to_loading(){
   api.openFrame({
       name: 'loading',
       url: '../loading/t1.html'
       });
 }
function to_denglu(){
  api.openWin({
      name: 'login',
      url: 'widget://html/v1/login.html'
      });
}
 function to_zhuce(){
     if(isdenglu()==false){
     api.openWin({
             name: 'zhuce',
             url: 'widget://html/v1/zhuce.html',
             pageParam: {
                 name: 'aaa'
            }
         });
     }
 }
 //我的信息
 function wode_xinxi(){
   api.openWin({
       name: 'to_my_xinxi',
       url: 'widget://html/v1/common_win.html',
       pageParam: {
           id:0,
           title:"我的消息",
           muban: 'xiaoxi'
       }
   });
 }
 //打开url
 function to_url(url,title){
     api.openWin({
     name: 'to_url',
     url: 'widget://html/v1/kk_url.html',
     progress:{
         type:"default",
         title:"正在加载"
     },
     pageParam: {
         title:title,
         muban: url+"?uid="+api.getPrefs({sync: true,key:'login_id'})
     }
 });
 }
 //是不是数字
 function isNumber(val){
   var regPos = /^\d+(\.\d+)?$/; //非负浮点数
   var regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/; //负浮点数
   if(regPos.test(val) || regNeg.test(val)){
       return true;
   }else{
       return false;
   }

}

//返回时间格式
function shijian(mm){

  var date = new Date(mm);
Y = date.getFullYear() + '-';
M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
D = date.getDate() + ' ';
h = date.getHours() + ':';
m = date.getMinutes() + ':';
s = date.getSeconds();

if (new Date(mm).toDateString() == new Date().toDateString()) {
    //今天
    return (h+m+s);
} else {
    //之前
   return (Y+M+D);
}
}

function shijian4(mm){

  var date = new Date(mm*1000);
Y = date.getFullYear() + '-';
M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
D = date.getDate() + ' ';
h = date.getHours() + ':';
m = date.getMinutes();
if(m<10){
  m="0"+m
}
s = date.getSeconds();

if (new Date(mm*1000).toDateString() == new Date().toDateString()) {
    //今天
    return (h+m);
} else {
    //之前
   return (Y+M+D);
}
}

function shijian2(mm){

  var date = new Date(mm);
Y = date.getFullYear() + '-';
M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
D = date.getDate() + ' ';
h = (date.getHours()<10?"0"+date.getHours():date.getHours()) + ':';
m = (date.getMinutes()<10?"0"+date.getMinutes():date.getMinutes());
//s = (date.getSeconds()<10?"0"+date.getSeconds():date.getSeconds());
return (h+m);
}

function shijian3(time = +new Date()) {
    var date = new Date(parseInt(time)*1000 + 8 * 3600 * 1000); // 增加8小时
    //console.log(time)
    //console.log(date)
    return date.toJSON().substr(0, 19).replace('T', ' ');
}

function isshouji(m) {
      var reg = /(^1[3|4|5|6|7|8][0-9]{9}$)/;
      if (reg.test(m)) {
          return true;
      }else{
          return false;
      };
  }


  function up_car_num(){
    //is_login();
    api.ajax({
        url: total_goods_sum_url,
        method: 'post',
        data: {
          values: {
              token: api.getPrefs({sync: true,key:'login_id'}),
              deviceid: api.deviceId
          }
        }
    },function(ret, err){
        if (ret) {
            //alert( JSON.stringify( ret ) );
            if(ret.code==1){
            var num=ret.data.data.total_goods_sum;
            if(num>0){
              api.sendEvent({
                  name: 'update_cart_num',
                  extra: {
                      num: num
                  }
              });
            }
            }
        } else {
            //alert( JSON.stringify( err ) );
        }
    });

  }

  function open_chat(){
    api.openWin({
        name: 'chat_win',
        url: 'widget://html/v2/chat/index_win.html'
        });
  }
  // 秒杀
  function open_flash(){
    api.openWin({
        name: 'falsh',
        url: 'widget://html/v2/market/flash_win.html',
    });
  }

function open_vip_center() {
        api.openWin({
            name: 'vip_center',
            url: 'widget://html/v4/vip/center_body.html',

        });

}
function open_buy_vip() {
        api.openWin({
            name: 'vip_center',
            url: 'widget://html/v4/vip/buy_win.html',
        });

}

function open_goods_detail(goods_id) {
      api.openWin({
          name: 'goods_detail_'+goods_id,
          url: 'widget://html/v4/product/detail_frm.html',
          pageParam: {
              goods_id:goods_id,
          }
      });

  }
    // 订单详情
function open_order_detail(order_id){
    api.openWin({
              name: 'order_detail',
              url: 'widget://html/v2/order/detail_win.html',
              pageParam: {
                  order_id:order_id,
              }
    });
}
// 评价
function open_comment_order(order_id){
      api.openWin({
          name: 'to_pingjia',
          url: 'widget://html/v1/pingjia.html',
          pageParam: {
              id:order_id,
              title:'添加评价',
              muban:'pingjia'
          }
      });
    }
function open_comment_detail(order_id){
      api.openWin({
          name: 'comment_detail',
          url: 'widget://html/v2/order/comment_detail_win.html',
          pageParam: {
              order_id:order_id,
          }
      });
    }
    //商品评价

function open_goods_comment(goods_id){
          api.openWin({
              name: 'goods_comment',
              url: 'widget://html/v2/goods/comment_win.html',
              pageParam: {
                  goods_id:goods_id,
              }
          });
        }
        //打开订单详情
        function open_order_list(index){
          api.openWin({
              name: 'order_list',
              url: 'widget://html/v2/order/list_win.html',
              pageParam: {
                  index:index
              }
          });
        }
        // 订单详情
        function open_order_detail(order_id){
              api.openWin({
                  name: 'goods_comment',
                  url: 'widget://html/v2/order/detail_win.html',
                  pageParam: {
                      order_id:order_id,
                  }
              });
            }
 // 常够清单
function open_hotbuygoods(){
    api.openWin({
        name: 'to_changgou',
        url: 'widget://html/v1/common_win.html',
        pageParam: {
            id:0,
            title:'常购清单',
            muban:'changgou'
        }
      });
    }
  //推荐商品猜你喜欢
  function get_tuijian(){
    api.ajax({
        url: cate_goodslist_url,
        method: 'post',
        data: {
          values:{category_id:1}
        }
    },function(ret, err){
        if (ret) {
            if(ret.code==1){
              var data=ret.data.list.data,str='';

              for (var i = 0; i < json_num(data); i++) {
                if(i<=7){
                str+='<div class="t_list">';
          		    str+='<div class="t_k">';
                  if(data[i].stock_num==0){
                    str+='<div class="meiyoulek"  onclick="to_goods_info('+data[i].goods_id+')"><span class="meiyoule">抢光了</span></div>';
                  }
                    str+='<img src="'+data[i].image+'"  onclick="to_goods_info('+data[i].goods_id+')" id="ttj_'+data[i].goods_id+'" class="widthall">';
                    str+='<div class="wenzi12 over-cang"   onclick="to_goods_info('+data[i].goods_id+')">'+data[i].goods_name+'</div>';
                    str+='<div class="t_tags">';
                    if(data[i].prom){
                    if(data[i].prom.style.value==1){
                      str+='<span>秒杀</span>';
                    }else if(data[i].prom.style.value==2){
                        str+='<span>限时抢购</span>';
                    }
                    }
                    str+='</div>';
                    str+='<div class="hanggao24 wenzi12 money">￥<span><span class="wenzi16">'+data[i].now_price.value.substr(0,data[i].now_price.value.length-3)+'</span>'+data[i].now_price.value.substr(-3, 3)+'</span><s class="yanse0">￥'+data[i].origin_price+'</s>';

                    str+='</div>';
                    str+='<div class="hanggao18 height18 wenzi12 lvka-yanse">';
                    if(data[i].vip_price>0){
                    str+='￥<span>'+data[i].vip_price+'</span><span class="price-lvka">绿卡价</span>';
                    }
                    str+='</div>';
                    str+='<div class="cart_btn"><img src="../../image/jian.png" class="jian2" onclick="jian(this)"/> <span data-goods_id="'+data[i].goods_id+'" data-goods_sku_id="'+data[i].goods_sku_id+'" data-danwei="'+data[i].unit_name+'" class="liang">1g</span> <img onclick="jia(this)" src="../../image/jia.png" class="jia2"/></div>';
                    str+='<div class="cart_btn2"><img src="../../image/buy.png" onclick="kaishi_buy(this)"  height="25" ></div>';
          		    str+='</div>';
          		  str+='</div>';

              }

              //$(".meiyoulek").click(function(){  tishi("抢光了");});
            }
            $("#tuijian2").html(str+'<div class="clear"></div>');
            }
        } else {
            tishi( err.msg );
        }
    });
  }


  function lingqu(id){
      api.ajax({
          url: lqkaquan_url,
          method: 'post',
          data: {
              values: {
                token: api.getPrefs({sync: true,key:'login_id'}),
                coupon_id:id
              }
          }
      },function(ret, err){
         tishi(ret.msg);
         jiazai();
    });


  }

  function to_goods_info(id){
        api.openWin({
            name: 'to_goods_info',
            url: 'widget://html/v1/shop_info.html',
            pageParam: {
                id:id,
            }
        });
      }

      function check_login() {
          if(!is_login()){
              go_login();
          }
      }

   function go_login(){
     api.openWin({
         name: 'login',
         url: 'widget://html/v1/login.html'
         });
   }

    function is_login() {
    if (!api.getPrefs({sync: true,key:'login_id'})) {
        setTimeout(function(){to_denglu();},1500);
        return false;
    }else{
      api.ajax({
          url: user_center_url,
          method: 'post',
          timeout: 30,
          dataType: 'json',
          returnAll: false,
          data: {
              values: {
                  token: api.getPrefs({sync: true,key:'login_id'}),
                  deviceid: api.deviceId,
              }
          }
      }, function (ret, err) {
          if (ret) {
              if(ret.code == -1){
                api.removePrefs({
                    key: 'login_id'
                });
                api.removePrefs({
                    key: 'user'
                });
                tishi("Your account has been logged on to other devices. Please log on again.");
                setTimeout(function(){to_denglu();},1500);
                     return false;
              }
          } else {
              //console.log(JSON.stringify(err));
          }
      });
        return true;
    }
}
function open_cart(){
  api.openWin({
      name: 'member_cart',
      url: 'widget://html/v2/mainFrame/cart_win.html',

  });

}

function open_search() {
    api.openWin({
        name: 'member_search',
        url: 'widget://html/v2/goods/search_win.html',

    });
}

function open_user_coupon_list() {
    api.openWin({
        name: 'user_coupon_list',
        url: 'widget://html/v2/coupon/list_win.html',

    });
}
function open_receive_coupon_list() {
    api.openWin({
        name: 'receive_coupon_list',
        url: 'widget://html/v2/coupon/receive_win.html',

    });
}
function sousuo(m){
  if($(m).prev().val()==''){
    tishi("请输入搜索内容");return false;
  }
  api.openWin({
      name: 'to_sousuo',
      url: 'widget://html/v1/common_win.html',
      pageParam: {
          id:$(m).prev().val(),
          title:"搜索",
          muban:'sousuo'
      }
  });
}

function meiqia(){
  var mq = api.require('meiQia');
//配置初始化美洽需要的appkey
var param = {
    appkey: "b27e42a1c40426f498a1ffc53083b749"
};
//初始化美洽
mq.initMeiQia(param, function(ret, err) {
    if (ret) {
        //初始化成功
        //alert(JSON.stringify(ret));
        mq.show({showAvatar:false});
    } else {
        //初始化失败
        //alert(JSON.stringify(err));
        tishi(err.msg);
    }
})
}



function to_scrollTo(ele, speed){
	if(!speed) speed = 300;
	if(!ele){
		$("html,body").animate({scrollTop:0},speed);
	}else{
		if(ele.length>0) $("html,body").animate({scrollTop:$(ele).offset().top-72},speed);
	}
  console.log(123)
	return false;
}

function to_gouwuche(){
  api.sendEvent({
      name: 'to_qiehuan',
      extra: {
          name: 2
      }
  });
  api.closeToWin({
    name: 'root'
});
}


function to_fenleis(cate_id){
  				console.log(cate_id);
  api.sendEvent({
      name: 'to_qiehuan',
      extra: {
          name: 1
      }
  });
  if(cate_id){
  api.sendEvent({
      name: 'to_cate',
      extra: {
          cate_id: cate_id
      }
  });
  }
  api.closeToWin({
    name: 'root'
});
}

function to_home(){
  api.sendEvent({
      name: 'to_qiehuan',
      extra: {
          name: 0
      }
  });
  api.closeToWin({
    name: 'root'
});
}

function open_buy_center(){
  api.openWin({
      name: 'to_buy_vip',
      url: 'widget://html/v1/common_win.html',
      pageParam: {
          id:0,
          title:"Tarjeta Verde abierta",
          // muban: 'lvka'
            muban: 'vip_frm'
      }
  });
}

function open_buy_buy(){
  api.openWin({
      name: 'to_buy_vip',
      url: 'widget://html/v2/member/vip_buy_win.html',
      pageParam: {
          id:0,
          title:"Tarjeta Verde abierta",
          // muban: 'lvka'
          muban: 'vip_frm'
      }
  });
}
// 个人资料设置
function open_profile(){
  api.openWin({
      name: 'profile',
      url: 'widget://html/v4/member/profile_win.html',
   });
}
// 消息中心
function open_info_center(){
  api.openWin({
      name: 'profile',
      url: 'widget://html/v4/info/index_win.html',
   });
}
// 订单消息
function open_order_info_center(){
  api.openWin({
      name: 'profile',
      url: 'widget://html/v2/info/order_info_win.html',
   });
}

// 退款消息
function open_refund_info_center(){
  api.openWin({
      name: 'profile',
      url: 'widget://html/v2/info/refund_info_win.html',
   });
}

// 退款消息
function open_coupon_info_center(){
  api.openWin({
      name: 'profile',
      url: 'widget://html/v2/info/coupon_info_win.html',
   });
}

function to_jifen(){
  api.openWin({
      name: 'to_jifen',
      url: 'widget://html/v1/points_win.html',
      pageParam: {
          id:0,
          title:"Mis puntos",
          muban: 'points_frm'
      }
  });
}
function to_pointslist(){
  api.openWin({
      name: 'pointslist',
      url: 'widget://html/v1/common_win.html',
      pageParam: {
          id:0,
          title:"Puntos de detalles",
          muban: 'pointslist_frm'
      }
  });
}
function to_pointsrule(){
  api.openWin({
      name: 'pointsrule',
      url: 'widget://html/v1/common_win.html',
      pageParam: {
          id:0,
          title:"Reglas integrales",
          muban: 'pointsrule_frm'
      }
  });
}



function to_card(){
  api.openWin({
      name: 'to_card',
      url: 'widget://html/v1/common_win.html',
      pageParam: {
          id:0,
          title:"信用卡管理",
          muban:"cardlist"
      }
  });
}



function to_kefu(){
  api.openWin({
      name: 'to_kefu',
      url: 'widget://html/v1/common_win.html',
      pageParam: {
          id:0,
          title:"联系我们",
          muban:"lianxikefu"
      }
  });
}

function to_chongzhi(){
  api.openWin({
      name: 'recharge',
      url: 'widget://html/v1/common_win.html',
      pageParam: {
          id:0,
          title:"Recarga",
          muban:"recharge_frm"
      }
  });
}
//充值
function open_recharge(){
  api.openWin({
      name: 'recharge',
      url: 'widget://html/v2/member/recharge_win.html',
      pageParam: {
          id:0,
          title:"Recarga",
          muban:"recharge_frm"
      }
  });
}

function to_dingdan(t){
  api.openWin({
      name: 'to_order_list',
      url: 'widget://html/v1/common_win.html',
      pageParam: {
          id:t,
          // title:"我的订单",
          title:"Mi pedido",
          // muban:"mydingdan"
          muban:"order_list_frm"
      }
  });
}



function to_myzuji(){
  api.openWin({
      name: 'to_myzuji',
      url: 'widget://html/v1/common_win.html',
      pageParam: {
          id:0,
          title:"我的足迹",
          muban:"myzuji"
      }
  });
}

function to_kaquan(){
  api.openWin({
      name: 'to_kaquan',
      url: 'widget://html/v1/common_win.html',
      pageParam: {
          id:0,
          title:"领取卡券",
          muban:"kaquan"
      }
  });
}

function to_my_coupon(){
  api.openWin({
      name: 'my_coupon',
      url: 'widget://html/v1/common_win.html',
      pageParam: {
          id:0,
          title:"Mi cupon de Tarjeta",
          muban:"my_coupon_frm"
      }
  });
}


function kaishi_buy(m){
  $(m).parent().hide();
  $(m).parent().prev().show();
  $(m).parent().prev().find(".jia2").click();
  $(m).parent().prev().find(".jia").click();
}
function jian(m){
  var num=parseInt($(m).next().html());
  if(num<=1){
    $(m).parent().hide();
    $(m).parent().next().show();
  }
  del_to_cart_num(1,$(m).next().data('goods_id'),$(m).next().data('goods_sku_id'),$(m));
}

function jia(m){
  var num=parseInt($(m).prev().html());
  add_to_cart_num(1,$(m).prev().data('goods_id'),$(m).prev().data('goods_sku_id'),$(m));
}


function add_to_cart_num(num,goods_id,goods_sku_id,m){
  api.ajax({
      url: add_to_cart_url,
      method: 'post',
      data: {
          values: {
              token: api.getPrefs({sync: true,key:'login_id'}),
              goods_id:goods_id,
              goods_sku_id:goods_sku_id,
              goods_num:num
          }
      }
  },function(ret, err){
      if (ret) {
            //tishi(ret.msg);
            if(ret.code==1){
              //update_cart_list();
              m.prev().html(ret.data.clc_now_goods_num);
              $("#money").html(ret.data.total_price);
              api.sendEvent({
                  name: 'update_cart_num'
              });
              api.sendEvent({
                  name: 'update_cart_list'
              });
            }

      } else {
          //alert( JSON.stringify( err ) );
          tishi(err.msg)
      }
  });

}

//购物车减1/n
function  cutdown_to_cart(goods_id,goods_sku_id) {
    is_login();
    api.ajax({
        url: cutdown_to_cart_url,
        method: 'post',
        timeout: 30,
        dataType: 'json',
        returnAll: false,
        data: {
            values: {
                goods_id:goods_id,
                token: api.getPrefs({sync: true,key:'login_id'}),
                deviceid: api.deviceId,
            }
        }
    }, function (ret, err) {
              console.log(JSON.stringify(ret));
        if (ret) {
            if(ret.code == 1){
                //更新全局购物车数量显示function
                api.sendEvent({
                    name: 'tatal_goods_sum',
                    extra: {
                        total_price:ret.data.total_price
                    }
                });

                //更新全局购物车总价
                api.sendEvent({
                    name: 'tatal_goods_total_price',
                    extra: {
                        total_price:ret.data.total_price
                    }
                });
            }
        } else {
            console.log(JSON.stringify(err));
        }
    });
}
function del_to_cart_num(num,goods_id,goods_sku_id,m){
  api.ajax({
      url: cutdown_to_cart_url,
      method: 'post',
      data: {
          values: {
              token: api.getPrefs({sync: true,key:'login_id'}),
              goods_id:goods_id,
              goods_sku_id:goods_sku_id,
              goods_num:num
          }
      }
  },function(ret, err){
      if (ret) {
            //tishi(ret.msg);
            if(ret.code==1){
              //update_cart_list();
              if(ret.data.now_goods_num){
              m.next().html(ret.data.clc_now_goods_num);
              api.sendEvent({
                  name: 'update_cart_num'
              });
            }else{
              //减少购物车
              m.parent().hide();
              m.parent().next().show();
            }
            }

      } else {
          //alert( JSON.stringify( err ) );
          tishi(err.msg)
      }
  });

}


//打电话
function call(mobile){
	api.call({
    type: 'tel_prompt',
    number: mobile
});
}
//加载中
function jiazaizhong(){
  $("body").append('<div class="zhong pings"><img src="../../image/loading.gif"></div>');
  $(".pings").fadeIn();
}
function jiazaiend(){
  $(".pings").fadeOut(300);
  setTimeout(function(){$(".pings").remove()},300);
}


function to_balance(){
  api.openWin({
      name: 'to_balance',
      url: 'widget://html/v1/common_win.html',
      pageParam: {
          id:0,
          title:"Detalle del balance",
          muban:"balance"
      }
  });
}

function to_sousuo(){
  api.openWin({
      name: 'to_sousuo',
      url: 'widget://html/v1/sousuo.html',
      pageParam: {
          id:0,
          title:"搜索商品",
          muban:"sousuo"
      }
  });
}

function to_xuanze_dizhi(){
  api.openWin({
      name: 'to_xuanze_dizhi',
      url: 'widget://html/v1/select_address.html',
      pageParam: {
          id:0,
          title:"Selección de dirección",
          muban:"sousuo"
      }
  });
}


function open_address(){
  api.openWin({
      name: 'to_dizhi',
      url: 'widget://html/v4/address/list_win.html',

  });
}
function add_address() {
    api.openWin({
        name: 'address_add_win',
        url: 'widget://html/v4/address/address_add_win.html',

    });
}
function edit_address(address_id) {
    api.openWin({
        name: 'address_add_win',
        url: 'widget://html/v4/address/address_add_win.html',
        pageParam: {
            address_id: address_id
        }
    });
}

function select_address() {

  api.openWin({
    name: 'to_addresslist',
    url: 'widget://html/v4/address/list_win.html',
    pageParam: {
      type: 1,
      title: "Gestion de Direcciones",
    }
  });
}
function to_cart_goods_list() {
  api.openWin({
    name: 'to_cart_goods_list',
    url: 'widget://html/v1/common_win.html',
    pageParam: {
      id: 0,
      title: "商品清单",
      muban: "cart_goods_list"
    }
  });
}
// 最简单数组去重法
/*
* 新建一新数组，遍历传入数组，值不在新数组就push进该新数组中
* IE8以下不支持数组的indexOf方法
* */
function uniq(array){
    var temp = []; //一个新的临时数组
    for(var i = 0; i < array.length; i++){
        if(temp.indexOf(array[i]) == -1){
            temp.push(array[i]);
        }
    }
    return temp;
}


function to_myxinxi(){
  api.openWin({
      name: 'to_myxinxi',
      url: 'widget://html/v1/common_win.html',
      pageParam: {
          id:0,
          title:"我的消息",
          muban:"myxinxi"
      }
  });
}
function to_add_card(){
  api.openWin({
      name: 'to_add_creditcard',
      url: 'widget://html/v2/card/add_card_win.html',

  });
}

function to_creditcardlist(){
  api.openWin({
      name: 'creditcardlist',
      url: 'widget://html/v2/card/card_list_win.html',
      pageParam: {

          // title:"我的订单",
          title:"Mis tarjetas",
          // muban:"mydingdan"
          muban:"card/card_list_frm"
      }
  });
}

function saoma(){
  var FNScanner = api.require('FNScanner');
FNScanner.open({
autorotation: true
}, function(ret, err) {
if (ret) {
    //alert(JSON.stringify(ret));
    if(ret.eventType=='success'){
      tishi(ret.content);
    }
} else {
    //alert(JSON.stringify(err));
}
});
}

function closeWin() {
    api.closeWin();
}
function openWin(model, htmlname) {
    if (arguments[2] == 1) {
        if (!$api.getStorage('member_id')) {
            api.openWin({
                name: 'member_login',
                url: 'widget://html/member/login.html'
            });
            return
        }
    }
    var pageParam = [];
    if (arguments[3]) {
        pageParam = arguments[3]
    }
    api.openWin({
        name: model + '_' + htmlname,
        url: 'widget://html/' + model + '/' + htmlname + '.html',
        pageParam: pageParam
    });
}

function Log(str){
  console.log(JSON.stringify(str));
}

//启动幻灯片
function banner(imgs,H,W,X,Y){

   var UIScrollPicture = api.require('UIScrollPicture');
     console.log(X+'-'+Y);
   console.log(H+'-'+W);
   UIScrollPicture.open({
    rect: {
        x: X,
        y: Y,
        w: W,
        h: H
    },
    data: {
        paths:imgs
    },
    styles: {
        caption: {
            height: 35,
            color: '#E0FFFF',
            size: 13,
            bgColor: '#696969',
            position: 'bottom'
        },
        indicator: {
           dot:{
             w:10,
             h:10,
             r:5,
             margin:4
          },
            align: 'right',
            color: '#888',
            activeColor: '#38bd60'
        }
    },
    placeholderImg: 'widget://image/goods_img.png',
    contentMode: 'scaleToFill',
    interval: 3,
    fixedOn: api.frameName,
    loop: true,
    fixed: false
   }, function(ret, err) {
    if (ret) {
        console.log(JSON.stringify(ret));
    } else {
        //alert(JSON.stringify(err));
    }
  });
}

function returnToTop(){
       	//一键回到顶部
           api.pageUp({
           	top:true
           },function(ret,err){
           	if (!ret.scrolled) {//是否滚动，为false时说明当前页面已经到达顶部了
       	        //alert("已经滚动到顶部了");
       	    }
           });
       }
function close_couplist() {
   api.setFrameAttr({
      name: 'get_couplist',
      hidden:true,
   });
  api.setFrameAttr({
      name: 'couplist_frm',
      hidden:true,
  });
  api.setFrameAttr({
      name: 'couplist',
      hidden:true,
  });

    //  api.closeFrame();
    // api.sendEvent({
    //   name: 'close_couplist_select',
    //  });
    // api.closeFrame();
}

function open_my_heart(){
  api.openWin({
      name: 'member_login',
      url: 'widget://html/v4/product/favoritos_win.html'
  });
}
function open_emotion(){
    console.log("打开表情包");
     var emoData=[];
    api.readFile({
                path: 'widget://image/emotion/emotion.json'
        }, function(ret, err) {
                if(ret.status) {
                        var data = $api.strToJson(ret.data);
                        if(data) {
                           return data;
                        }
                }
        });

        return emoData;
  }
 function up(str){

   str = str.replace(/\img\[([^\[]*)\]/ig,'<img src="$1" border="0" />');
   str=transEmo(str);
  //  console.log(str)


   return str;
  }
  //文字表情转换
        function transEmo(emoMsg) {
          var emoData = ["[微笑]","[撇嘴]","[色]","[发呆]","[得意]","[流泪]","[害羞]","[闭嘴]","[睡]","[大哭]","[尴尬]","[发怒]","[调皮]","[呲牙]","[惊讶]","[难过]","[酷]","[冷汗]","[抓狂]","[吐]","[偷笑]","[愉快]","[白眼]","[傲慢]","[饥饿]","[困]","[恐惧]","[流汗]","[憨笑]","[悠闲]","[奋斗]","[咒骂]","[疑问]","[嘘]","[晕]","[疯了]","[衰]","[骷髅]","[敲打]","[再见]","[擦汗]","[抠鼻]","[鼓掌]","[糗大了]","[坏笑]","[左哼哼]","[右哼哼]","[哈欠]","[鄙视]","[委屈]","[快哭了]","[阴险]","[亲亲]","[吓]","[可怜]","[菜刀]","[西瓜]","[啤酒]","[篮球]","[乒乓]","[咖啡]","[饭]","[猪头]","[玫瑰]","[凋谢]","[嘴唇]","[爱心]","[心碎]","[蛋糕]","[闪电]","[炸弹]","[刀]","[足球]","[瓢虫]","[便便]","[月亮]","[太阳]","[礼物]","[拥抱]","[强]","[弱]","[握手]","[胜利]","[抱拳]","[勾引]","[拳头]","[差劲]","[爱你]","[NO]","[OK]","[爱情]","[飞吻]","[跳跳]","[发抖]","[怄火]","[转圈]","[磕头]","[回头]","[跳绳]","[投降]","[激动]","[街舞]","[献吻]","[左太极]","[右太极]"], arr = {};
          // console.log('表情包转换')
          var emoPath, transMsg;

          var reg = /face\[([^\[]*)\]/ig;
          transMsg = emoMsg.replace(reg, function(match,pos) {
                  // console.log(match);
                      // console.log(pos);
                  for (var i = 0, len = emoData.length; i < len; i++) {

                        if (emoData[i] == "["+pos+"]") {
                              emoPath = '../../../image/emotion/Expression_' + (i+1) + '.png';
                                return '<img width="20" height="20" style="float:left;" src="' + emoPath + '" />'
                          }
                    }
                    return match;
                });
                return transMsg;
        }
 //文字表情转换
     function Emoformat(emoMsg) {
                      var emoPath, transMsg;
                      var reg = /\[(.*?)\]/gm;
                         str = emoMsg.replace(reg,'face[$1]');

                      return str;
                      // console.log(str);
              }
