//我的页面
const my = z.addPage('my');
//我的页面顶部标题栏
const myHeader = addHeader(my);
Object.assign(myHeader.style,{
    textAlign: 'center',
    fontSize: z.getFontSize(5),
    lineHeight: z.getFontSize(15)
});
myHeader.innerHTML = '我的';
//我的页面主要部分
const myMain = addMain(my);
Object.assign(myMain.style,{
    background: 'url("background/index.png")',
    backgroundSize: '100vw 100vw',
    backgroundRepeat: 'no-repeat',
    backgroundPositionY: '-25vw',
    overflow: 'auto'
})
myMain.addEventListener('scroll',function(){
    let del = myMain.scrollTop / (window.innerHeight * 0.1) * 9;
    if(del >= 0){
        if(del > 9){
            del = 9;
        }
        myHeader.style.background = 'rgb(' + (246 + del) + ',' + (176 - del * 3) + ',' + (94 - del * 3) + ')';
        myRecordHeader.style.background = 'rgb(' + (246 + del) + ',' + (176 - del * 1.5) + ',' + (94 - del * 1.5) + ')';
    }
});
//我的页面我的信息容器
const myMsgBox = z.addElementByArray([
    'div',
    'style',[
        'margin','0 0.5vw',
        'width','90vw',
        'height','60vw',
        'border-radius','3vw',
        'background','#FFFFFF url("background/my.png")',
        'background-size','100vw',
        'background-repeat','no-repeat',
        'background-position-x','-5vw',
        'background-position-y','-8vw'
    ]
],myMain);
//我的页面我的头像
const myFace = z.addElementByArray([
    'img',
    'style',[
        'margin','17.5vw 5vw',
        'width','25vw',
        'height','25vw',
        'border-radius','12.5vw',
        'background','#f6b05e'
    ]
],myMsgBox);
//我的页面我的信息文字信息容器
const myMsgFont = z.addElementByArray([
    'div',
    'style',[
        'display','inline-block',
        'vertical-align','top',
        'margin','14.375vw 0',
        'width','50vw',
        'height','31.25vw'
    ]
],myMsgBox);
//我的页面我的信息文字信息
const myMsg = [];
for(let i = 0;i < 5;i++){
    myMsg[i] = z.addElementByArray([
        'div',
        'style',[
            'width','100%',
            'height','6.25vw',
            'color','#232325',
            'font-size',z.getFontSize(4),
            'line-height',z.getFontSize(6.25)
        ]
    ],myMsgFont);
}
//加载我的信息
function setMyMsg(src,name,college,className,number,time){
    myFace.src = src;
    myMsg[0].innerHTML = '姓名：' + name;
    myMsg[1].innerHTML = '院系：' + college;
    myMsg[2].innerHTML = '班级：' + className;
    myMsg[3].innerHTML = '学号：' + number;
    myMsg[4].innerHTML = '劳动时长：' + time + '小时';
}
setMyMsg('1.jpg','たかなし りっか','数学与信息工程学院','21级软件工程一班',20210340000,100);
//我的劳动记录顶部标题栏
const myRecordHeader = z.addElementByArray([
    'div',
    'innerHTML','劳动记录',
    'style',[
        'margin','3vw 0.5vw 0 0.5vw',
        'width','90vw',
        'height','10vw',
        'border-radius','3vw 3vw 0 0',
        'background','#f6b05e',
        'text-align','center',
        'color','#f5f5f5',
        'font-size',z.getFontSize(4.5),
        'line-height',z.getFontSize(10)
    ]
],myMain);
//我的页面我的劳动信息容器
const myRecordBox = [];
//创建我的页面我的劳动信息容器
function addMyRecordBox(name,time,type){
    //我的页面我的劳动信息容器
    newMyRecordBox = z.addElementByArray([
        'div',
        'style',[
            'margin',myRecordBox.length?'3vw 0.5vw 0vw 0.5vw':'0vw 0.5vw 0vw 0.5vw',
            'padding','3vw 2vw',
            'width','86vw',
            'border-radius',myRecordBox.length?'3vw':'0 0 3vw 3vw',
            'background','#FFFFFF'
        ]
    ],myMain);
    myRecordBox.push(newMyRecordBox);
    //我的页面我的劳动信息文字信息容器
    let myRecordFont = z.addElementByArray([
        'div',
        'style',[
            'display','inline-block',
            'vertical-align','top',
            'margin-right','3vw',
            'width','66vw'
        ]
    ],newMyRecordBox);
    for(let i = 0;i < 3;i++){
        //我的页面我的劳动信息提示信息容器
        setFontSize(4,8,z.addElementByArray([
            'div',
            'innerHTML',['劳动名称','劳动时间','劳动类别'][i],
            'style',[
                'display','inline-block',
                'vertical-align','top',
                'margin-top',i?'2vw':0,
                'width','18vw',
                'height','8vw',
                'color','#232325'
            ]
        ],myRecordFont));
        //我的页面我的劳动信息
        setFontSize(4,8,z.addElementByArray([
            'div',
            'innerHTML',[name,time + '小时',['日常生活劳动','生产劳动','服务性劳动'][type]][i],
            'style',[
                'display','inline-block',
                'vertical-align','top',
                'margin-top',i?'2vw':0,
                'padding','0 1.5vw',
                'width','45vw',
                'height','8vw',
                'border-radius','1.5vw',
                'background','#f5f5f5',
                'white-space','nowrap',
                'overflow','auto hidden',
                'text-align','center',
                'color','#807f7f'
            ]
        ],myRecordFont));
    }
    //我的页面我的劳动信息查看按钮
    myRecordBtn = z.addElementByArray([
        'div',
        'innerHTML','查看',
        'style',[
            'display','inline-block',
            'vertical-align','top',
            'margin','9.6vw 0',
            'width','14.2vw',
            'height','8vw',
            'border','0.4vw #232325 solid',
            'border-radius','3vw',
            'text-align','center',
            'color','#232325',
            'font-size',z.getFontSize(4),
            'line-height',z.getFontSize(8)
        ],
        'function',[
            'click',() => {
                z.changePage(record);
                recordGet();
            }
        ]
    ],newMyRecordBox);
}
addMyRecordBox('吃饭','1',0);
addMyRecordBox('睡觉','12',1);
addMyRecordBox('打豆豆','5',2);
addMyRecordBox('我只是一个用来测试的东西而已','24',0);