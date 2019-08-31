/**
 * 打开图片裁剪页面
 *
 * 本地图片路径 : imgPath
 * return 接受event"zknight_img_cut_event"，返回 ret.value.cutOutImg
 */
zknightH5ImgcutOpenCut = function(imgPath){
	api.openFrame({
        name: 'zknight_h5imgcut_imgcutfrm',
        url: 'widget://html/v4/image/zknight_h5imgcut.html',
        reload : true,
        bgColor : '#000000',
        rect: {
	        x:0,
	        y:0,
	        w:'auto',
	        h:api.winHeight
        },
        pageParam : {
        	imgPath : imgPath
        },
        slidBackEnabled : false
    });
}
