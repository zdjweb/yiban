//首页
const index = z.addPage('index');
index.style.display = 'block';
//首页顶部标题栏
const indexHeader = addHeader(index);
indexHeader.innerHTML = '劳动素养登记系统';
setFontSize(5,15,indexHeader);
//首页背景
const indexBackground = z.addElementByArray([
    'div',
    'style',[
        'position','absolute',
        'width','100vw',
        'height','100vw',
        'background','url("background/index.png")',
        'background-size','100vw 100vw',
        'background-repeat','no-repeat',
        'background-position-y','-15vw'
    ]
],index);
//首页背景文字
z.addElementByArray([
    'img',
    'src','background/font.png',
    'style',[
        'position','absolute',
        'z-index',0,
        'top','15vw',
        'left',0,
        'width','60vw'
    ]
],indexBackground);
//首页背景小熊
z.addElementByArray([
    'img',
    'src','background/bear.png',
    'style',[
        'position','absolute',
        'z-index',0,
        'top','3vw',
        'left','55vw',
        'width','45vw'
    ]
],indexBackground);
//首页主要部分
const indexMain = addMain(index);
Object.assign(indexMain.style,{
    position: 'absolute',
    zIndex: 1
});
//首页按钮
for(let i = 0;i < 2;i++){
    //首页按钮
    const indexBtn = z.addElementByArray([
        'div',
        'style',[
            'display','inline-block',
            'vertical-align','top',
            'margin','0 1.75vw',
            'padding','2.5vw 1vw',
            'width','40vw',
            'height','7vw',
            'border-radius','2vw',
            'background','#FFFFFF'
        ],
        'function',[
            'click',() => {
                z.changePage([register,list][i]);
                i?listBoxCssReSet(listMainN):0;
            }
        ]
    ],indexMain);
    //首页按钮图片
    z.addElementByArray([
        'img',
        'src',['btn/register.png','btn/sign up.png'][i],
        'style',[
            'width','7vw',
            'height','7vw'
        ]
    ],indexBtn);
    //首页按钮文字
    setFontSize(4.5,7,z.addElementByArray([
        'div',
        'innerHTML',['劳动活动登记','劳动活动报名'][i],
        'style',[
            'display','inline-block',
            'vertical-align','top',
            'width','33vw',
            'height','7vw',
            'text-align','center',
            'color','#232325'
        ]
    ],indexBtn));
}
//首页广告容器
const indexAdBox = addAdBox(indexMain);
indexAdBox.style.boxShadow = '0 0 2vw 0 #999999';
//设置首页广告容器的marginTop样式
function indexAdBoxMarginTopSet(){
    let marginTopA = 0.55 * window.innerWidth + ((window.innerHeight - 0.35 * window.innerWidth) - 0.12 * window.innerWidth - 0.6 * window.innerWidth - 0.1 * window.innerWidth - 0.55 * window.innerWidth) / 2;
    let marginTopB = (window.innerHeight - 0.35 * window.innerWidth) - (0.55 * window.innerWidth + ((window.innerHeight - 0.35 * window.innerWidth) - 0.12 * window.innerWidth - 0.6 * window.innerWidth - 0.1 * window.innerWidth - 0.55 * window.innerWidth) / 2 + 0.12 * window.innerWidth + 0.6 * window.innerWidth + 0.1 * window.innerWidth);
    if(0 < marginTopB){
        indexAdBox.style.marginTop = marginTopA + 'px';
    }else{
        indexAdBox.style.marginTop = marginTopA + marginTopB + 'px';
    }
}
indexAdBoxMarginTopSet();
//首页广告按钮容器
const indexAdBtnBox = addAdBtnBox(indexMain);