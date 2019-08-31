  var result_mark;
  var pageConfig = {
      //右鍵菜單
      createRightMenu: function (divDom, map) {
          var controlUI = document.createElement('div');
          var waiDiv = document.createElement('div');
          waiDiv.className = "mytool";

          var a1 = document.createElement('a');
          a1.href = "javascript:;";
          a1.innerText = "編輯";
          a1.addEventListener('click', function (source, event) {
              waitRemovePolygon.setEditable(true);
              document.getElementById('rightMenu').remove();
          });
          waiDiv.appendChild(a1);

          var a2 = document.createElement('a');
          a2.href = "javascript:;";
          a2.innerText = "完成";
          a2.addEventListener('click', function (source, event) {
              waitRemovePolygon.setEditable(false);
              document.getElementById('rightMenu').remove();

              //記錄多邊形坐標點
              console.log(waitRemovePolygon);
              var array = waitRemovePolygon.getPath().getArray();
              var pathStrArr = [];
              for (var i = 0; i < array.length; i++) {
                  var item = array[i];
                  var txt = item.lat() + "," + item.lng();
                  pathStrArr.push(txt);
                  console.log(txt);
              }
          });
          waiDiv.appendChild(a2);

          var a3 = document.createElement('a');
          a3.href = "javascript:;";
          a3.innerText = "刪除";
          a3.addEventListener('click', function (source, event) {
              waitRemovePolygon.setMap(null);
              document.getElementById('rightMenu').remove();
          });
          waiDiv.appendChild(a3);

          divDom.appendChild(waiDiv);
      },

      //多邊形右鍵事件
      polygonRightClick: function (obj, event) {
          waitRemovePolygon = obj;
          //console.log(event);
          var txt = event.Ha.clientX + ',' + event.Ha.clientY;
          //测试demo没有全屏，水平方向与左侧屏幕边有距离，所以要减去
          var positionX = event.Ha.clientX-230;
          var positionY = event.Ha.clientY;
          console.log("右鍵坐標"+txt);
          //判斷是否存在此菜單
          if (document.getElementById('rightMenu') != undefined) {
              document.getElementById('rightMenu').remove();
          }
          var controlDiv = document.createElement('div');
          controlDiv.id = 'rightMenu';
          controlDiv.index = 1;
          controlDiv.style.position = "absolute";
          controlDiv.style.zIndex = "20000";
          controlDiv.style.left = positionX + 'px';
          controlDiv.style.top = positionY + 'px';
          controlDiv.style.display = "none";

          var rightMenu = new pageConfig.createRightMenu(controlDiv, map);
          map.controls[google.maps.ControlPosition.CENTER].push(controlDiv);
          setTimeout(function () {
              controlDiv.style.left = positionX + 'px';
              controlDiv.style.top = positionY + 'px';
              controlDiv.style.display = "block";
          }, 10);
          //10秒不操作移除右鍵菜單
          setTimeout(function () {
              controlDiv.remove();
          }, 10000);
      },

      //加載多邊形，服務範圍
      loadPolygon: function (areaList) {
          console.log( JSON.stringify(areaList));
          for (var i = 0; i < areaList.length; i++) {
              var item = areaList[i];

              var postions = item.list;

              var triangleCoords = [];

              for (var g = 0; g < postions.length; g++) {
                  var item_g = postions[g];

                  var lat = parseFloat(item_g['lat']);
                  var lng = parseFloat(item_g['lng']);
                  triangleCoords.push({ lat: lat, lng: lng });
              }

              //计算多边形中心坐标
              var centerLatLng = getCenter(triangleCoords);

              // Construct the polygon.
              var _old_Polygon = new google.maps.Polygon({
                  paths: triangleCoords,
                  strokeColor: item.strokeColor,
                  strokeOpacity: 0.8,
                  strokeWeight: 2,
                  fillColor: item.strokeColor,
                  fillOpacity: 0.1,
                  //title:'測試服務範圍1'
              });


              //中心坐标
              _old_Polygon.CenterLatLng = centerLatLng;
              polygonArr.push(_old_Polygon);

              _old_Polygon.setMap(map);
              //清理集合
              triangleCoords.length = 0;

              _old_Polygon.info = {
                  area: item.area
              };
              //服務範圍點擊，信息提示
              _old_Polygon.addListener("click",function(event){
                  setSelection(_old_Polygon);
                  //clearSelection();
                  clearSelection();
                  selectedShape = this;
                  editarea=selectedShape.info.area;
                  console.log(editarea);
                  console.log(selectedShape);
                  this.setEditable(true);
                  selectColor(this.get('fillColor') || this.get('strokeColor'));
              });
              google.maps.event.addListener(map, 'click', clearSelection);
              //註冊多邊形右鍵事件

          }
          //定位服务范围第一个服务区
          if (polygonArr.length > 0) {
              var firstOne = polygonArr[0];
              map.panTo(firstOne.CenterLatLng);
          }
      },

      //改變位置定位
      changePosition: function (thisObj) {
          var position = new google.maps.LatLng(thisObj.value.split(',')[0], thisObj.value.split(',')[1]);
          if (result_mark != null) {
              result_mark.setMap(null);
          }
          result_mark = new google.maps.Marker({ position: position });
          result_mark.setMap(map);
          map.panTo(position, 15);
      },

      //搜索地址
      searchAddress: function () {
          var index = 0;
          var waitShow = setInterval(function () {
              if (index == 4) {
                  index = 1;
              }
              var points = "。。。。。";
              var shouPoints = points.substring(0, index);
              document.getElementById('tishiMsg').innerHTML = "查找中" + shouPoints;
              index++;
          }, 200);

          var address = document.getElementById("serarchAddressTxt").value;
          var request = {
              address: address
          };
          var geocoder = new google.maps.Geocoder();
          geocoder.geocode(request,
              function (GeocoderResult, GeocoderStatus) {
                  //移除加载等待效果...
                  window.clearInterval(waitShow);
                  document.getElementById('tishiMsg').innerHTML = "";

                  console.log("GeocoderStatus:" + GeocoderStatus);
                  console.log(GeocoderResult);
                  //GeocoderResult.geometry.location
                  var location = GeocoderResult[0].geometry.location;
                  console.log(GeocoderResult[0].geometry.location);
                  if (result_mark != null) {
                      result_mark.setMap(null);
                  }
                  result_mark = new google.maps.Marker({ position: location });
                  result_mark.setMap(map);
                  //定位到搜索結果
                  map.panTo(location);
              });
      },

      //计算多边形中心点
      getCenter: function (triangleCoords) {
          var x = 0.0;
          var y = 0.0;
          for (var i = 0; i < triangleCoords.length; i++) {
              x = x + parseFloat(triangleCoords[i].lat);
              y = y + parseFloat(triangleCoords[i].lng);
          }
          x = x / triangleCoords.length;
          y = y / triangleCoords.length;
          return new google.maps.LatLng(x, y);
      },

      //弹出消息框
      markerTips: function (msg, position) {
          infoWindow.setContent(msg);
          infoWindow.setPosition(position);
          infoWindow.open(map);
      },

      //店铺改变时
      storeChange: function (obj, event) {
          //失去焦点后还原填充色
          if (select_OldPolygon != undefined && select_OldPolygon != null) {
              select_OldPolygon.setOptions({ fillColor: '#FF0000' });
          }
          //高亮定位到选择的服务区
          var storeId = obj.value;
          //console.log("storeId=" + storeId);
          var polygonResult = polygonArr.find(w => w.SysNo == storeId);
          polygonResult.setOptions({ fillColor: '#33CC33' });
          //定位此图
          map.panTo(polygonResult.CenterLatLng);
          //显示出此中心

          select_OldPolygon = polygonResult;

      }
  }
