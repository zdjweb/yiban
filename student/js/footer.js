//底部导航栏
const footer = z.addElementByArray([
    'footer',
    'style',[
        'position','absolute',
        'padding','0 4.5vw',
        'background','#FFFFFF'
    ]
],body);
//底部导航栏的按钮名
const footerBtnName = ['index','store','my'];
//底部导航栏按钮
const footerBtn = [];
//底部导航栏按钮图片
const footerImg = [];
//底部导航栏按钮文字
const footerFont = [];
//底部导航栏按钮
for(let i = 0;i < 3;i++){
    //底部导航栏按钮
    footerBtn[i] = z.addElementByArray([
        'div',
        'style',[
            'display','inline-block',
            'vertical-align','top',
            'margin',i == 1?'0 18.5vw':0,
            'width','18vw',
            'height','14vw'
        ],
        'function',[
            'click',function(e){
                //重设底部导航栏按钮样式
                for(let i = 0;i < footerBtn.length;i++){
                    if(footerBtn[i] == e.target || footerBtn[i] == e.target.parentElement){
                        footerImg[i].src = 'btn/' + footerBtnName[i] + '_now.png';
                        footerFont[i].style.color = '#f6b05e';
                    }else{
                        footerImg[i].src = 'btn/' + footerBtnName[i] + '.png';
                        footerFont[i].style.color = '#232325';
                    }
                }
                z.changePageType(['index','store','my'][i]);
            }
        ]
    ],footer);
    //底部导航栏按钮图片
    footerImg[i] = z.addElementByArray([
        'img',
        'src','btn/' + footerBtnName[i] + (i?'':'_now') + '.png',
        'style',[
            'margin','0 4.75vw',
            'width','8.5vw',
            'height','8.5vw'
        ]
    ],footerBtn[i]);
    //底部导航栏按钮文字
    footerFont[i] = z.addElementByArray([
        'div',
        'innerHTML',['首页','商城','我的'][i],
        'style',[
            'width','18vw',
            'text-align','center',
            'color',i?'#232325':'#f6b05e',
            'font-size',z.getFontSize(3)
        ]
    ],footerBtn[i]);
}