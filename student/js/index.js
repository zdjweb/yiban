//获取body
let body = document.body;
//zdjJs对象
let z = new zdjJs;
//系统设置导致字体放大的倍数
z.getFontTimes(body);
//设置字体单位
z.setFontSuffix('vw');
//设置字体大小、行高
function setFontSize(fontSize,lineHeight,element){
    Object.assign(element.style,{
        fontSize: z.getFontSize(fontSize),
        lineHeight: z.getFontSize(lineHeight)
    });
    return element;
}
//设置增加页面方法
z.setPage([
    'div',
    'style',[
        'display','none',
        'width','100vw',
        'height','calc(100vh - 14vw)',
        'background','#f5f5f5'
    ]
],body);
//创建页面顶部标题栏
function addHeader(container){
    return z.addElementByArray([
        'header',
        'style',[
            'padding','0 4.5vw',
            'width','91vw',
            'height','15vw',
            'background','#f6b05e',
            'color','#f5f5f5'
        ]
    ],container);
}
//创建页面顶部标题栏图片按钮
function addHeaderImg(container){
    return z.addElementByArray([
        'img',
        'src','btn/back.png',
        'style',[
            'width','15vw',
            'height','15vw'
        ]
    ],container);
}
//创建页面顶部标题栏文字容器
function addHeaderFont(innerHTML,container){
    return z.addElementByArray([
        'div',
        'innerHTML',innerHTML,
        'style',[
            'display','inline-block',
            'vertical-align','top',
            'width','61vw',
            'height','15vw',
            'text-align','center',
            'font-size',z.getFontSize(5),
            'line-height',z.getFontSize(15)
        ]
    ],container);
}
//创建页面主要部分
function addMain(container){
    return z.addElementByArray([
        'main',
        'style',[
            'padding','3vw 4.5vw',
            'width','91vw',
            'height','calc(100vh - 35vw)'
        ]
    ],container);
}
//创建广告容器
function addAdBox(container){
    return z.addElementByArray([
        'div',
        'style',[
            'position','relative',
            'display','inline-block',
            'margin','0 0.5vw',
            'width','90vw',
            'height','60vw',
            'border-radius','3vw',
            'background','#FFFFFF',
            'white-space','nowrap',
            'overflow','hidden'
        ]
    ],container);
}
//创建广告按钮容器
function addAdBtnBox(container){
    return z.addElementByArray([
        'div',
        'style',[
            'margin','0 0.5vw',
            'padding','3.75vw 0',
            'width','90vw',
            'height','2.5vw',
            'text-align','center'
        ]
    ],container);
}
//创建灰色遮罩
function addGrey(container){
    return z.addElementByArray([
        'div',
        'style',[
            'position','fixed',
            'display','none',
            'top','15vw',
            'width','100vw',
            'height','calc(100vh - 29vw)',
            'background','rgba(153,153,153,0.8)'
        ]
    ],container);
}
//增加选择容器
function addSelectBox(container){
    return z.addElementByArray([
        'div',
        'style',[
            'position','fixed',
            'display','none',
            'top','calc(100vh - 65vw)',
            'width','100vw',
            'height','50.5vw',
            'border-bottom','0.5vw solid #EEEEEE',
            'box-shadow','0 0 2vw 0 #999999',
            'background','#FFFFFF'
        ]
    ],container);
}
//增加选择确认按钮
function addSelectSureBtn(container){
    return z.addElementByArray([
        'div',
        'innerHTML','完成',
        'style',[
            'margin','0 4vw 0 84vw',
            'width','12vw',
            'height','8vw',
            'color','#f6b05e',
            'text-align','center',
            'font-size',z.getFontSize(4),
            'line-height',z.getFontSize(8)
        ],
        'function',[
            'click',function(){
                container.parentElement.style.display = 'none';
                container.style.display = 'none';
            }
        ]
    ],container);
}
//增加选择容器分割线
function addSelectHr(container){
    return z.addElementByArray([
        'div',
        'style',[
            'width','100vw',
            'height','0.5vw',
            'background','#EEEEEE'
        ]
    ],container);
}
//增加选择功能放置容器
function addSelectSetBox(container){
    return z.addElementByArray([
        'div',
        'style',[
            'width','100vw',
            'height','42vw'
        ]
    ],container);
}
//创建选择功能
function addTSelect(container,arr){
    return new TSelect({
        container: container,
        values: arr,
        number: 5,
        background: '#FFFFFF',
        font: {
            size: 1,
            color: '#807F7F'
        },
        line: {
            height: 1,
            background: '#EEEEEE'
        }
    })
}
//页面大小改变时重设部分样式
window.addEventListener('resize',function(){
    indexAdBoxMarginTopSet();
    listBoxCssReSet(listMainN);
});