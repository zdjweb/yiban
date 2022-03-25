//劳动记录详情页面
const record = z.addPage('my');
//劳动记录详情页面顶部标题栏
const recordHeader = addHeader(record);
//劳动记录详情页面顶部标题栏图片按钮
addHeaderImg(recordHeader).addEventListener('click',() => {
    z.changePage(my);
});
//劳动记录详情页面顶部标题栏文字容器
addHeaderFont('劳动记录详情',recordHeader);
//劳动记录详情页面主要部分
const recordMain = addMain(record);
Object.assign(recordMain.style,{
    background: 'url("background/index.png")',
    backgroundSize: '100vw 100vw',
    backgroundRepeat: 'no-repeat',
    backgroundPositionY: '-25vw',
    overflow: 'auto'
})
recordMain.addEventListener('scroll',function(){
    let del = recordMain.scrollTop / (window.innerHeight * 0.1) * 9;
    if(del >= 0){
        if(del > 9){
            del = 9;
        }
        recordHeader.style.background = 'rgb(' + (246 + del) + ',' + (176 - del * 3) + ',' + (94 - del * 3) + ')';
    }
});
//劳动记录详情容器
const recordBox = z.addElementByArray([
    'div',
    'style',[
        'padding','5vw 2vw',
        'width','86vw',
        'border-radius','3vw',
        'background','#FFFFFF',
    ]
],recordMain);
function addRecordName(innerHTML){
    return z.addElementByArray([
        'div',
        'innerHTML',innerHTML,
        'style',[
            'display','inline-block',
            'vertical-align','top',
            'margin-top','3vw',
            'width','18vw',
            'height','8vw',
            'color','#232325',
            'font-size',z.getFontSize(4),
            'line-height',z.getFontSize(8)
        ]
    ],recordBox);
}
function addRecordMsg(){
    return z.addElementByArray([
        'div',
        'style',[
            'display','inline-block',
            'vertical-align','top',
            'margin','3vw 2vw 0',
            'padding','0 2vw',
            'width','60vw',
            'min-height','8vw',
            'outline','none',
            'border-radius','1.5vw',
            'background','#f5f5f5',
            'color','#232325',
            'text-align','center',
            'font-size',z.getFontSize(4),
            'line-height',z.getFontSize(8)
        ]
    ],recordBox);
}
const recordMsg = [];
addRecordName('活动名称').style.marginTop = 0;
recordMsg.push(addRecordMsg());
recordMsg[0].style.marginTop = 0;
addRecordName('发布组织');
recordMsg.push(addRecordMsg());
addRecordName('劳动时间');
recordMsg.push(addRecordMsg());
recordMsg.push(addRecordMsg());
Object.assign(recordMsg[3].style,{
    margin: '3vw 0 0 20vw',
    width: '22vw'
});
//“至”字
setFontSize(4,8,z.addElementByArray([
    'div',
    'innerHTML','至',
    'style',[
        'display','inline-block',
        'vertical-align','top',
        'margin','3vw 0 0 0',
        'width','12vw',
        'height','8vw',
        'text-align','center',
        'color','#232325'
    ]
],recordBox));
recordMsg.push(addRecordMsg());
Object.assign(recordMsg[4].style,{
    margin: '3vw 0 0 0vw',
    width: '22vw'
});
addRecordName('劳动时长');
recordMsg.push(addRecordMsg());
addRecordName('劳动类别');
recordMsg.push(addRecordMsg());
addRecordName('劳动强度');
recordMsg.push(addRecordMsg());
addRecordName('劳动态度');
recordMsg.push(addRecordMsg());
addRecordName('劳动质量');
recordMsg.push(addRecordMsg());
addRecordName('劳动地点');
recordMsg.push(addRecordMsg());
addRecordName('现场图片');
setFontSize(3,8,z.addElementByArray([
    'div',
    'innerHTML','点击图片可以放大查看哦！',
    'style',[
        'display','inline-block',
        'vertical-align','top',
        'margin','3vw 4vw 0',
        'width','60vw',
        'min-height','8vw',
        'color','#807f7f'
    ]
],recordBox));
const recordImg = z.addElementByArray([
    'img',
    'src','btn/picture.png',
    'style',[
        'display','block',
        'margin','3vw 33vw 0',
        'width','20vw',
        'height','20vw'
    ]
],recordBox);
//放置获取到的劳动记录信息
function recordSet(name,grade,startTime,endTime,type,intensity,manner,quality,address,src){
    recordMsg[0].innerHTML = name;
    recordMsg[1].innerHTML = ['校级','院级'][grade];
    recordMsg[2].innerHTML = z.getTime('Y/M/D',startTime,1);
    recordMsg[3].innerHTML = z.getTime('h:m',startTime,1);
    recordMsg[4].innerHTML = z.getTime('h:m',endTime,1);
    recordMsg[5].innerHTML = ((endTime - startTime) / 3600).toFixed(1) + '小时';
    recordMsg[6].innerHTML = ['日常生活劳动','生产劳动','服务性劳动'][type];
    recordMsg[7].innerHTML = ['一般','中等','高'][intensity];
    recordMsg[8].innerHTML = ['一般','中等','好'][manner];
    recordMsg[9].innerHTML = ['一般','中等','高'][quality];
    recordMsg[10].innerHTML = address;
    recordImg.src = src;
}
//获取劳动记录信息
function recordGet(){
    recordSet('吃饭',0,1638754200,1638757800,0,2,2,2,'福建省龙岩市新罗区东肖北路1号龙岩学院','1.jpg');
}