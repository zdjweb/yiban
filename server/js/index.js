//获取body
let body = document.body;
//设置body背景色
body.style.background = '#F5F5F5';
//zdjJs对象
let z = new zdjJs;
//SStyle对象
let s = new SStyle;
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
}
//顶部标题栏
let header = z.addElementByArray([
    'header',
    'innerHTML','劳动素养登记系统-后台端',
    'style',[
        'position','relative',
        'z-index','2',
        'width','100vw',
        'height','4vw',
        'text-align','center',
        'background','#99ccff',
        'color','#f5f5f5',
        'box-shadow','0 0.25vw 1vw 0 #999999'
    ]
],body);
setFontSize(1.5,4,header);
//导航栏
let navBox = z.addElementByArray([
    'div',
    'style',[
        'position','relative',
        'z-index','1',
        'width','12vw',
        'height','calc(100vh - 4vw)',
        'background','#8ec1ff',
        'box-shadow','0.25vw 0 1vw 0 #999999'
    ]
],body);
s.top(navBox);
//导航栏按钮容器
let navBtnBox = z.addElementByArray([
    'div',
    'style',[
        'margin','calc((100vh - 19vw) / 2) 0',
        'background','rgba(255,255,255,0.15)'
    ]
],navBox);
//导航栏按钮
let nav = [];
//增加导航栏按钮
let addNavBtn = (innerHTML) => {
    let navBtn = z.addElementByArray([
        'nav',
        'innerHTML',innerHTML,
        'style',[
            'width','100%',
            'height','3vw',
            'text-align','center',
            'background',nav.length?'none':'rgba(255,255,255,0.2)',
            'color','#f5f5f5'
        ],
        'function',[
            'click',(e) => {
                for(let i in nav){
                    nav[i].style.background = '';
                }
                e.target.style.background = 'rgba(255,255,255,0.2)';
                z.changePageTypeN(navBtnFont.indexOf(e.target.innerHTML));
            }
        ]
    ],navBtnBox);
    setFontSize(1.25,3,navBtn);
    nav.push(navBtn);
    navBtnBox.style.margin = 'calc((100vh - ' + (4 + 3 * nav.length) + 'vw) / 2) 0';
}
//导航栏按钮文字信息
let navBtnFont = ['成员管理','管理员管理','审核管理','任务管理','积分商城管理'];
for(let i in navBtnFont){
    addNavBtn(navBtnFont[i]);
}
//页面主要内容显示区域
let main = z.addElementByArray([
    'main',
    'style',[
        'position','relative',
        'z-index','0',
        'margin','2vw',
        'padding','1vw',
        'width','82vw',
        'height','calc(100vh - 10vw)',
        'border-radius','1vw',
        'background','#EEEEEE',
        'box-shadow','0.25vw 0 1vw 0 #999999'
    ]
],body);
s.top(main);
//设置增加页面方法
z.setPage([
    'div',
    'style',[
        'display','none',
        'width','100%',
        'height','100%',
        'border-radius','1vw',
        'background','#FFFFFF'
    ]
],main);
//创建灰色遮罩
function addGreyBox(container){
    return z.addElementByArray([
        'div',
        'style',[
            'position','absolute',
            'display','none',
            'top','1vw',
            'left','1vw',
            'width','82vw',
            'height','calc(100vh - 10vw)',
            'background','rgba(153,153,153,.8)',
            'border-radius','1vw'
        ]
    ],container);
}
//学院列表
let college = [
    '师范教育学院',
    '外国语学院',
    '经济与管理学院',
    '传播与设计学院',
    '数学与信息工程学院',
    '物理与机电工程学院',
    '化学与材料学院',
    '生命科学学院',
    '资源工程学院',
    '体育与健康学院'
];
//劳动类别
let typeArray = [
    '日常生活劳动',
    '生产劳动',
    '服务性劳动'
];