//积分商城页面
const store = z.addPage('store');
//积分商城页面顶部标题栏
const storeHeader = addHeader(store);
Object.assign(storeHeader.style,{
    textAlign: 'center',
    fontSize: z.getFontSize(5),
    lineHeight: z.getFontSize(15)
});
storeHeader.innerHTML = '积分兑换商城';
//积分商城页面主要部分
const storeMain = addMain(store);
Object.assign(storeMain.style,{
    background: 'linear-gradient(#f6b05e 8vw,#f5f5f5 100vw)',
    overflow: 'auto'
})
storeMain.addEventListener('scroll',function(){
    let del = storeMain.scrollTop / (window.innerHeight * 0.1) * 9;
    if(del >= 0){
        if(del > 9){
            del = 9;
        }
        storeHeader.style.background = 'rgb(' + (246 + del) + ',' + (176 - del * 3) + ',' + (94 - del * 3) + ')';
    }
});
//积分商城页面广告容器
const storeAdBox = addAdBox(storeMain);
Object.assign(storeAdBox.style,{
    height: '56.25vw'
});
//积分商城页面广告按钮容器
const storeAdBtnBox = addAdBtnBox(storeMain);
let storeAd = new adImg({
    container: storeAdBox,
    btnContainer: storeAdBtnBox,
    size: 56.25
});
storeAd.addImg('img/5.jpg');
storeAd.addImg('6.jpg');
storeAd.addImg('img/7.jpg');
storeAd.addImg('img/8.jpg');
//积分商城页面信息容器
const storeBox = z.addElementByArray([
    'div',
    'style',[
        'margin','0 0.5vw',
        'padding','2.5vw 2vw',
        'width','86vw',
        'border-radius','3vw',
        'background','#FFFFFF'
    ]
],storeMain);
//积分商城页面按钮
for(let i = 0;i < 2;i++){
    setFontSize(4.5,8,z.addElementByArray([
        'div',
        'innerHTML',['我的积分：10000','我的订单'][i],
        'style',[
            'display','inline-block',
            'vertical-align','top',
            'margin-right',i?0:'6vw',
            'padding','1vw',
            'width','38vw',
            'border-radius','3vw',
            'background','#f6b05e',
            'line-height','8vw',
            'text-align','center',
            'color','#f5f5f5'
        ],
        'function',[
            'click',i?function(){
                z.changePage(order);
            }:() => {}
        ]
    ],storeBox));
}
//创建积分商城页面的信息容器
function addStoreMsg(src,name,price,number){
    //积分商城页面信息分割线
    z.addElementByArray([
        'div',
        'style',[
            'margin','3vw auto 0 auto',
            'width','86vw',
            'height','1px',
            'background','linear-gradient(to right,#FFFFFF 0vw,#999999 43vw,#FFFFFF 86vw)'
        ]
    ],storeBox);
    //积分商城页面信息容器
    const storeMsgBox = z.addElementByArray([
        'div',
        'style',[
            'margin','3vw 0',
            'width','86vw',
            'height','20vw'
        ]
    ],storeBox);
    //积分商城页面图片信息
    z.addElementByArray([
        'img',
        'src',src,
        'style',[
            'width','20vw',
            'height','20vw',
            'border-radius','2vw'
        ]
    ],storeMsgBox);
    //积分商城页面文字信息容器
    const storeMsgFont = z.addElementByArray([
        'div',
        'style',[
            'display','inline-block',
            'vertical-align','top',
            'margin','0 3vw',
            'width','43vw',
            'height','20vw'
        ]
    ],storeMsgBox);
    //积分商城页面商品名信息
    setFontSize(4.5,8,z.addElementByArray([
        'div',
        'innerHTML',name,
        'style',[
            'width','100%',
            'height','8vw',
            'white-space','nowrap',
            'overflow','auto hidden',
            'color','#232325'
        ]
    ],storeMsgFont));
    //积分商城页面商品价格信息
    setFontSize(4,7,z.addElementByArray([
        'div',
        'innerHTML',price + '积分',
        'style',[
            'width','100%',
            'height','7vw',
            'color','#f6b05e'
        ]
    ],storeMsgFont));
    //积分商城页面商品库存信息
    setFontSize(3,5,z.addElementByArray([
        'div',
        'innerHTML','库存：' + number,
        'style',[
            'width','100%',
            'height','5vw',
            'color','#232325'
        ]
    ],storeMsgFont));
    //积分商城页面商品兑换按钮
    setFontSize(4,8,z.addElementByArray([
        'div',
        'innerHTML','兑换',
        'style',[
            'display','inline-block',
            'vertical-align','top',
            'margin','5.6vw 0',
            'border','0.4vw #232325 solid',
            'border-radius','3vw',
            'width','14.2vw',
            'height','8vw',
            'text-align','center',
            'color','#232325'
        ],
        'function',[
            'click',function(){
                storeGrey.style.display = 'block';
            }
        ]
    ],storeMsgBox));
}
addStoreMsg('1.jpg','漆黑泽克斯原始型第二',100,1);
addStoreMsg('1.jpg','小水杯',10,100);
addStoreMsg('1.jpg','名字超级超级超级超级超级长的蓝牙耳机',30,50);
addStoreMsg('1.jpg','蓝牙音箱',50,10);
//积分商城页面灰色遮罩
const storeGrey = addGrey(store);
//积分商城页面确认容器
const storeSure = z.addElementByArray([
    'div',
    'style',[
        'margin','calc((100vh - 59vw) / 2) 20vw',
        'width','60vw',
        'height','30vw',
        'border-radius','3vw',
        'background','#FFFFFF'
    ]
],storeGrey);
//积分商城页面确认容器文字信息
setFontSize(4.5,8,z.addElementByArray([
    'div',
    'innerHTML','是否确认兑换？',
    'style',[
        'padding','5.75vw 0',
        'width','60vw',
        'height','8vw',
        'border-bottom','0.5vw solid #f6b05e',
        'text-align','center',
        'color','#232325'
    ]
],storeSure));
//积分商城页面确认容器按钮
for(let i = 0;i < 2;i++){
    setFontSize(4.5,10,z.addElementByArray([
        'div',
        'innerHTML',['是','否'][i],
        'style',[
            'display','inline-block',
            'vertical-align','top',
            'width','29.75vw',
            'height','10vw',
            'border-right',['0.5vw solid #f6b05e',''][i],
            'text-align','center',
            'color','#232325'
        ],
        'function',[
            'click',() => {
                storeGrey.style.display = 'none';
            }
        ]
    ],storeSure));
}