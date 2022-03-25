//TSelect类
class TSelect{
    constructor(e){
        //当前选择选项的编号
        let code = 0;
        //选项值
        let values = [];
        Object.defineProperties(this,{
            //版本信息
            version: {
                get: () => '1.0.0'
            },
            //作者信息
            author: {
                get: () => 'zdj0123'
            },
            //设置信息
            set: {
                get: () => e
            },
            //选项数量
            number: {
                get: () => values.length
            },
            //当前选择选项的编号
            code: {
                get: () => code
            },
            //当前选择选项的值
            value: {
                get: () => values[code]
            }
        });
        //获取、修正选项值
        if(Array.isArray(e.values)){
            if(e.values.length){
                values = [...e.values];
            }else{

            }
        }else{

        }
        //创建zdjJs对象
        let z = new zdjJs();
        //创建容器
        let container = z.addElementByArray([
            'iframe',
            'style',[
                'width','100%',
                'height','100%',
                'border',0
            ]
        ],e.container);
        //结束事件
        let end;
        //获取窗口
        let w = container.contentWindow;
        //移出事件
        let outFunction = (event) => {
            if(!event.touches){
                if(event.clientX <= 0 || event.clientX >= w.innerWidth || event.clientY <= 0 || event.clientY >= w.innerHeight){
                    end();
                }
            }else{
                if(event.touches[0].clientX <= 0 ||event.touches[0].clientX >= w.innerWidth || event.touches[0].clientY <= 0 || event.touches[0].clientY >= w.innerHeight){
                    end();
                }
            }
        }
        w.addEventListener('mouseout',outFunction);
        //更新容器
        container = w;
        //当前对象
        let o = this;
        //选项信息高度
        let msgHeight;
        //最大marginTop
        let maxMarginTop;
        //最小marginTop
        let minMarginTop;
        //选项信息容器
        let msgBox;
        //选项信息
        let msg = [];
        //增加选项信息
        let addMsg;
        //设置TSelect主要部分
        let setTSelect = () => {
            //更新容器
            container = container.document.body;
            //设置容器样式
            Object.assign(container.style,{
                margin: 0,
                padding: 0,
                width: '100vw',
                height: '100vh',
                background: e.background,
                fontSize: 0,
                overflow: 'hidden'
            });
            //获取系统设置导致字体放大的倍数
            z.getFontTimes(container);
            //设置字体大小单位
            z.setFontSuffix('vh');
            //样式修正定时器
            let timer;
            //刚刚移动的距离
            let lastY;
            //现在移动的距离
            let nowY;
            //开始事件
            let start = (event) => {
                event.preventDefault();
                clearInterval(timer);
                if(!event.touches){
                    nowY = event.clientY;
                }else{
                    nowY = event.touches[0].clientY;
                }
            }
            //移动事件
            let move = (event) => {
                event.preventDefault();
                if(nowY != undefined){
                    lastY = nowY;
                    if(!event.touches){
                        nowY = event.clientY;
                    }else{
                        nowY = event.touches[0].clientY;
                        outFunction(event);
                    }
                    let setMargin = z.strRemove(msgBox.style.marginTop) + ((nowY - lastY) / w.innerHeight) * 100;
                    if(setMargin > maxMarginTop){
                        msgBox.style.marginTop = maxMarginTop + 'vh';
                    }else if(setMargin < minMarginTop){
                        msgBox.style.marginTop = minMarginTop + 'vh';
                    }else{
                        msgBox.style.marginTop = setMargin + 'vh';
                    }
                }
            }
            //结束事件
            end = () => {
                if(nowY != undefined){
                    nowY = undefined;
                    timer = setInterval(msgBoxReSet,5)
                }
            }
            //创建容器
            container = z.addElementByArray([
                'main',
                'style',[
                    'width','100%',
                    'height','100%'
                ],
                'function',[
                    'touchstart',start,
                    'touchmove',move,
                    'touchend',end,
                    'mousedown',start,
                    'mousemove',move,
                    'mouseup',end
                ]
            ],container);
            //选项信息高度
            msgHeight = (100 - (e.number - 1) * e.line.height) / e.number;
            //最大marginTop
            maxMarginTop = msgHeight * parseInt(e.number / 2) + e.line.height * (parseInt(e.number / 2) - 1);
            //最小marginTop
            minMarginTop = maxMarginTop - (values.length - 1) * (e.line.height + msgHeight);
            //选择线
            for(let i = 0;i < 2;i++){
                z.addElementByArray([
                    'div',
                    'style',[
                        'position','fixed',
                        'z-index',-1,
                        'top',maxMarginTop + (msgHeight + e.line.height) * i + 'vh',
                        'left',0,
                        'margin','',
                        'width','100%',
                        'height',e.line.height + '%',
                        'background',e.line.background
                    ]
                ],container);
            }
            //选项信息容器
            msgBox = z.addElementByArray([
                'div',
                'style',[
                    'display','inline-block',
                    'margin-top',maxMarginTop + 'vh',
                    'width','100%'
                ]
            ],container);
            let msgBoxReSet = () => {
                //用于计算的选择线高度
                let lineHeight = e.line.height;
                //一次移动的距离
                let marginMove = (lineHeight + msgHeight) / 50;
                if(z.strRemove(msgBox.style.marginTop) >= maxMarginTop - (lineHeight + msgHeight / 2)){
                    if(z.strRemove(msgBox.style.marginTop) + marginMove >= maxMarginTop){
                        msgBox.style.marginTop = maxMarginTop + 'vh';
                        code = 0;
                        clearInterval(timer);
                    }else{
                        msgBox.style.marginTop = z.strRemove(msgBox.style.marginTop) + marginMove + 'vh';
                    }
                }else if(z.strRemove(msgBox.style.marginTop) <= minMarginTop + msgHeight / 2){
                    if(z.strRemove(msgBox.style.marginTop) - marginMove <= minMarginTop){
                        msgBox.style.marginTop = minMarginTop + 'vh';
                        code = values.length - 1;
                        clearInterval(timer);
                    }else{
                        msgBox.style.marginTop = z.strRemove(msgBox.style.marginTop) - marginMove + 'vh';
                    }
                }else{
                    for(let i = 1;i < values.length - 1;i++){
                        if(z.strRemove(msgBox.style.marginTop) <= maxMarginTop - i * (lineHeight + msgHeight) + msgHeight / 2 && z.strRemove(msgBox.style.marginTop) >= maxMarginTop - (i + 1) * (lineHeight + msgHeight) + msgHeight / 2){
                            if(z.strRemove(msgBox.style.marginTop) >= maxMarginTop - i * (lineHeight + msgHeight)){
                                if(z.strRemove(msgBox.style.marginTop) - marginMove <= maxMarginTop - i * (lineHeight + msgHeight)){
                                    msgBox.style.marginTop = maxMarginTop - i * (lineHeight + msgHeight) + 'vh';
                                    code = i;
                                    clearInterval(timer);
                                    break;
                                }else{
                                    msgBox.style.marginTop = z.strRemove(msgBox.style.marginTop) - marginMove + 'vh';
                                }
                            }else{
                                if(z.strRemove(msgBox.style.marginTop) + marginMove >= maxMarginTop - i * (lineHeight + msgHeight)){
                                    msgBox.style.marginTop = maxMarginTop - i * (lineHeight + msgHeight) + 'vh';
                                    code = i;
                                    clearInterval(timer);
                                    break;
                                }else{
                                    msgBox.style.marginTop = z.strRemove(msgBox.style.marginTop) + marginMove + 'vh';
                                }
                            }
                        }
                    }
                }
            }
            //增加选项信息
            addMsg = function(value){
                return z.addElementByArray([
                    'div',
                    'innerHTML',value,
                    'style',[
                        'margin-top',e.line.height + 'vh',
                        'width','100%',
                        'height',msgHeight + 'vh',
                        'color',e.font.color,
                        'text-align','center',
                        'font-size',z.getFontSize(msgHeight / 2 * e.font.size),
                        'line-height',msgHeight + 'vh'
                    ]
                ]);
            }
            //选项信息
            for(let i = 0;i < o.number;i++){
                msg[i] = addMsg(values[i]);
                msgBox.appendChild(msg[i]);
            }
        }
        if(navigator.userAgent.toUpperCase().includes('Firefox'.toUpperCase())){
            container.addEventListener('load',() => {
                setTSelect();
            });
        }else{
            setTSelect();
        }
        //修改指定选项
        this.changeValue = (uCode,uValue) => {
            msg[uCode].innerHTML = values[uCode] = uValue;
        }
        //删除指定选项
        this.deleteValue = (uCode) => {
            values.splice(uCode,1);
            msgBox.removeChild(msg[uCode]);
            msg.splice(uCode,1);
            minMarginTop = maxMarginTop - (this.number - 1) * (e.line.height + msgHeight);
            //如果是最后一个
            if(code == this.number){
                //如果剩余选项数量大于0
                if(this.number > 0){
                    code--;
                }
                msgBox.style.marginTop = minMarginTop + 'vh';
            }else if(code > uCode){
                code--;
                msgBox.style.marginTop = z.strRemove(msgBox.style.marginTop) + (e.line.height + msgHeight) + 'vh';
            }
        }
        //在指定位置增加选项
        this.addValue = (uValue,uCode) => {
            let newMsg = addMsg(uValue);
            if(uCode != undefined){
                values.splice(uCode,0,uValue);
                msgBox.insertBefore(newMsg,msg[uCode]);
                msg.splice(uCode,0,newMsg);
            }else{
                values.push(uValue);
                msg.push(newMsg);
                msgBox.appendChild(newMsg);
            }
            minMarginTop = maxMarginTop - (this.number - 1) * (e.line.height + msgHeight);
            if(uCode <= code){
                code++;
                msgBox.style.marginTop = z.strRemove(msgBox.style.marginTop) - (e.line.height + msgHeight) + 'vh';
            }
        }
    }
}