//成员劳动信息页面
let memberMsg = z.addPage('member');
memberMsg.style.background = '#99ccff';
//审核信息页面关闭按钮
let memberMsgCloseBtn = z.addElementByArray([
    'div',
    'innerHTML','X',
    'style',[
        'margin-left','79vw',
        'width','3vw',
        'height','3vw',
        'text-align','center',
        'color','#FFFFFF'
    ],
    'function',[
        'click',function(){
            z.changePage(member);
        }
    ]
],memberMsg);
setFontSize(1.25,3,memberMsgCloseBtn);
//审核信息容器
let memberMsgBox = z.addElementByArray([
    'div',
    'style',[
        'margin','0 1vw',
        'padding','1vw',
        'width','78vw',
        'height','calc(100vh - 16vw)',
        'border-radius','1vw',
        'background','#FFFFFF',
        'overflow','auto'
    ],
],memberMsg);
//活动名
let memberMsgActName = z.addElementByArray([
    'div',
    'style',[
        'width','75vw',
        'height','3vw'
    ],
    'function',[
        'mousewheel',function(event){
            if(this.scrollWidth > this.offsetWidth){
                event.preventDefault();
            }
            this.scrollLeft -= event.wheelDelta / 12;
        }
    ]
],memberMsgBox);
s.top(memberMsgActName);
s.line(memberMsgActName);
setFontSize(1.25,3,memberMsgActName);
//等级
let memberMsgGrade = z.addElementByArray([
    'div',
    'style',[
        'width','3vw',
        'height','3vw',
        'text-align','right'
    ]
],memberMsgBox);
s.top(memberMsgGrade);
setFontSize(1.25,3,memberMsgGrade);
//劳动类别
let memberMsgType = z.addElementByArray([
    'div',
    'style',[
        'width','58vw',
        'height','3vw'
    ]
],memberMsgBox);
s.top(memberMsgType);
setFontSize(1.25,3,memberMsgType);
//申请人姓名
let memberMsgName = z.addElementByArray([
    'div',
    'style',[
        'width','20vw',
        'height','3vw',
        'text-align','right'
    ]
],memberMsgBox);
s.top(memberMsgName);
setFontSize(1.25,3,memberMsgName);
//劳动时间
let memberMsgTime = z.addElementByArray([
    'div',
    'style',[
        'width','58vw',
        'height','3vw'
    ]
],memberMsgBox);
s.top(memberMsgTime);
setFontSize(1.25,3,memberMsgTime);
//申请人学号
let memberMsgNumber = z.addElementByArray([
    'div',
    'style',[
        'width','20vw',
        'height','3vw',
        'text-align','right'
    ]
],memberMsgBox);
s.top(memberMsgNumber);
setFontSize(1.25,3,memberMsgNumber);
//劳动地点
let memberMsgAddress = z.addElementByArray([
    'div',
    'style',[
        'width','78vw'
    ]
],memberMsgBox);
setFontSize(1.25,3,memberMsgAddress);
//劳动强度
let memberMsgIntensity = z.addElementByArray([
    'div',
    'style',[
        'width','78vw'
    ]
],memberMsgBox);
setFontSize(1.25,3,memberMsgIntensity);
//劳动态度
let memberMsgManner = z.addElementByArray([
    'div',
    'style',[
        'width','78vw'
    ]
],memberMsgBox);
setFontSize(1.25,3,memberMsgManner);
//劳动质量
let memberMsgQuality = z.addElementByArray([
    'div',
    'style',[
        'width','78vw'
    ]
],memberMsgBox);
//完成情况
let memberMsgState = z.addElementByArray([
    'div',
    'style',[
        'width','78vw'
    ]
],memberMsgBox);
setFontSize(1.25,3,memberMsgState);
//劳动图片信息
let memberMsgImgText = z.addElementByArray([
    'div',
    'innerHTML','劳动图片：',
    'style',[
        'width','78vw'
    ]
],memberMsgBox);
setFontSize(1.25,3,memberMsgImgText);
//劳动图片
let memberMsgImg = z.addElementByArray([
    'img',
    'style',[
        'margin','0 19.5vw',
        'width','39vw'
    ]
],memberMsgBox);
//设置审核信息
function memberMsgSet(actName,grade,type,name,number,startTime,endTime,address,intensity,manner,quality,state,src){
    memberMsgActName.innerHTML = actName;
    memberMsgGrade.innerHTML = ['校级','院级'][grade];
    memberMsgType.innerHTML = '劳动类别：' + typeArray[type];
    memberMsgName.innerHTML = '姓名：' + name;
    memberMsgTime.innerHTML = '劳动时间：' + z.getTime('Y/M/D h:m',startTime,1) + ' 至 ' + z.getTime('h:m',endTime,1);
    memberMsgNumber.innerHTML = '学号：' + number;
    memberMsgAddress.innerHTML = '劳动地点：' + address;
    memberMsgIntensity.innerHTML = '劳动强度：' + ['一般','中等','高'][intensity];
    memberMsgManner.innerHTML = '劳动态度：' + ['一般','中等','好'][manner];
    memberMsgQuality.innerHTML = '劳动质量：' + ['一般','中等','高'][quality];
    memberMsgState.innerHTML = '完成情况：' + state;
    memberMsgImg.src = src;
}
memberMsgSet('我的天啊现在就有十七个字了哦知道吗',0,0,'たかなし りっか',20210340000,1642145811,1642146698,'福建省龙岩市新罗区东肖北路1号龙岩学院',2,2,2,'很好','img/1.jpg');