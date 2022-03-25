//MScrollbar类
class MScrollbar{
    constructor(e){
        Object.defineProperties(this,{
            //版本信息
            version: {
                get: () => '2.0.1'
            },
            //作者信息
            author: {
                get: () => '2002-2003'
            }
        });
        //判断对象是否是窗口
        let isWindow = (obj) => {
            return obj != null && obj == obj.window;
        }
        //创建zdjJs对象
        let z = new zdjJs();
        //隐藏原有的滚动条
        let hideBar = (box) => {
            z.addElementByArray([
                'style',
                'id','MScrollbar_Style',
                'innerHTML','::-webkit-scrollbar{width: 0;height: 0;}*{scrollbar-width: none;}'
            ],box);
        }
        //被控制对象
        let controlled = e.controlled;
        //隐藏被控制对象原有的滚动条
        let setHideBarStyle = () => {
            if(isWindow(controlled)){
                if(controlled.document.querySelector('#MScrollbar_Style') == undefined){
                    hideBar(controlled.document.body);
                }
            }else{
                if(document.querySelector('#MScrollbar_Style') == undefined){
                    hideBar(document.body);
                }
            }
        }
        setHideBarStyle();
        //如果被控制对象不是窗口
        if(!isWindow(controlled)){
            //如果被控制对象是框架
            if(['frame','iframe'].includes(controlled.localName)){
                //更新被控制对象为窗口
                controlled = controlled.contentWindow;
                //被控制窗口加载成功后隐藏其滚动条
                controlled.addEventListener('load',function(){
                    setHideBarStyle();
                });
            }
        }
        //滚动条控制的方向
        let direction = e.direction;
        //总大小
        let total;
        //显示出的部分的大小
        let show;
        //滚动的部分的大小
        let hide;
        //滚动条容器
        let container = e.container;
        //被控制对象的部分信息
        let getMsg = () => {
            //窗口对象
            if(isWindow(controlled)){
                //水平方向
                if(direction){
                    total = controlled.document.documentElement.scrollWidth;
                    show = controlled.innerWidth;
                    hide = controlled.document.documentElement.scrollLeft;
                }else{
                    total = controlled.document.documentElement.scrollHeight;
                    show = controlled.innerHeight;
                    hide = controlled.document.documentElement.scrollTop;
                }
            }else{
                //水平方向
                if(direction){
                    total = controlled.scrollWidth;
                    show = controlled.offsetWidth;
                    hide = controlled.scrollLeft;
                }else{
                    total = controlled.scrollHeight;
                    show = controlled.offsetHeight;
                    hide = controlled.scrollTop;
                }
            }
        }
        getMsg();
        //现在滚动条滑块所在的位置
        let now;
        //鼠标点击的需要位置
        let need;
        //开始移动前的滚动距离
        let move;
        //开始时的鼠标位置
        let start;
        //结束时的鼠标位置
        let end;
        //键盘控制的滚动的方向
        let press;
        //键盘控制的滚动的垂直方向
        let otherPress;
        //获取滚动条滑块的宽度并调整
        let width = e.thumb.width;
        width = width < 0?0:(width > 100?100:width);
        //为了支持Firefox才搞成这样的
        let setThumbStyle = () => {};
        //被控制对象鼠标滚动事件
        controlled.addEventListener('scroll',() => {
            getMsg();
            setThumbStyle();
        });
        //更新容器
        container = z.addElementByArray([
            'iframe',
            'style',[
                'width','100%',
                'height','100%',
                'border',0
            ]
        ],container);
        //获取窗口
        let w = container.contentWindow;
        //更新容器
        container = w;
        //设置MScrollbar主要部分
        let setMScrollbar = () => {
            //更新容器
            let body = container.document.body;
            //设置容器样式
            Object.assign(body.style,{
                margin: 0,
                padding: 0
            });
            //隐藏容器原有的滚动条
            hideBar(body);
            //获取已滚动距离
            let getHide = (direction) => {
                if(isWindow(controlled)){
                    if(direction){
                        return controlled.document.documentElement.scrollLeft;
                    }else{
                        return controlled.document.documentElement.scrollTop;
                    }
                }else{
                    if(direction){
                        return controlled.scrollLeft;
                    }else{
                        return controlled.scrollTop;
                    }
                }
            }
            //滚动事件
            let roll = (direction,wheel) => {
                for(let i = 0;i < 120;i++){
                    setTimeout(() => {
                        getMsg();
                        //判断被控制对象是否是窗口
                        if(isWindow(controlled)){
                            if(direction){
                                controlled.document.documentElement.scrollLeft = Math.round(getHide(direction)) + wheel;
                            }else{
                                controlled.document.documentElement.scrollTop = Math.round(getHide(direction)) + wheel;
                            }
                        }else{
                            if(direction){
                                controlled.scrollLeft = Math.round(getHide(direction)) + wheel;
                            }else{
                                controlled.scrollTop = Math.round(getHide(direction)) + wheel;
                            }
                        }
                    },i);
                }
                start = undefined;
            };
            //滚动条轨道
            let track = z.addElementByArray([
                'div',
                'style',[
                    'display','inline-block',
                    'width','100%',
                    'height','100%',
                    'background',e.track.background
                ],
                'function',[
                    //鼠标按下事件
                    'mousedown',(event) => {
                        //鼠标左键
                        if(!event.button){
                            now = direction?thumb.offsetLeft:thumb.offsetTop;
                            need = direction?event.clientX:event.clientY;
                            //水平方向
                            if(direction){
                                if(now <= need && need <= now + thumb.offsetWidth){
                                    return;
                                }
                                if(need > now + thumb.offsetWidth){
                                    need -= thumb.offsetWidth;
                                }
                            }else{
                                if(now <= need && need <= now + thumb.offsetHeight){
                                    return;
                                }
                                if(need > now + thumb.offsetHeight){
                                    need -= thumb.offsetHeight;
                                }
                            }
                            move = hide;
                            //保存的滚动条滑块所在的位置
                            let keepNow = now;
                            for(let i = 0;i < 100;i++){
                                setTimeout(() => {
                                    if(need != undefined && now == keepNow){
                                        getMsg();
                                        if(isWindow(controlled)){
                                            if(direction){
                                                controlled.document.documentElement.scrollLeft = move + (need - now) / 100 * (i + 1) / track.offsetWidth * total;
                                            }else{
                                                controlled.document.documentElement.scrollTop = move + (need - now) / 100 * (i + 1) / track.offsetHeight * total;
                                            }
                                        }else{
                                            if(direction){
                                                controlled.scrollLeft = move + (need - now) / 100 * (i + 1) / track.offsetWidth * total;
                                            }else{
                                                controlled.scrollTop = move + (need - now) / 100 * (i + 1) / track.offsetHeight * total;
                                            }
                                        }
                                    }
                                },i * 2);
                            }
                        }
                    },
                    //鼠标滚动事件
                    'mousewheel',(event) => {
                        event.preventDefault();
                        roll(direction,event.wheelDelta < 0?1:-1);
                    },
                    //FireFox的mousewheel事件兼容
                    'DOMMouseScroll',(event) => {
                        event.preventDefault();
                        roll(direction,event.detail > 0?1:-1);
                    },
                    //隐藏滚动条部分的默认右键菜单
                    'contextmenu',(event) => {
                        event.preventDefault();
                    }
                ]
            ],body);
            //滚动条滑块
            let thumb = z.addElementByArray([
                'div',
                'style',[
                    'margin-Top',direction?thumbMargin():0,
                    'margin-Left',direction?0:thumbMargin(),
                    'width',direction?show / total * track.offsetWidth + 'px':width + '%',
                    'height',direction?width + '%':show / total * track.offsetHeight + 'px',
                    'background',e.thumb.background
                ],
                'function',[
                    'mousedown',function(event){
                        if(!event.button){
                            start = direction?event.clientX:event.clientY;
                            move = hide;
                        }
                    }
                ]
            ],track);
            //防止滚动条超出
            function stopBar(){
                getMsg();
                if((hide <= 0) || (hide + show + 1 >= total)){
                    start = end;
                    move = hide;
                }
            }
            //滚动条移动事件
            function moveBar(start,end){
                getMsg();
                //被控制对象是窗口
                if(isWindow(controlled)){
                    if(direction){
                        controlled.document.documentElement.scrollLeft = move + (end - start) / track.offsetWidth * total;
                    }else{
                        controlled.document.documentElement.scrollTop = move + (end - start) / track.offsetHeight * total;
                    }
                }else{
                    if(direction){
                        controlled.scrollLeft = move + (end - start) / track.offsetWidth * total;
                    }else{
                        controlled.scrollTop = move + (end - start) / track.offsetHeight * total;
                    }
                }
                stopBar();
            }
            //鼠标松开事件
            w.addEventListener('mouseup',(event) => {
                if(start != undefined){
                    end = direction?event.clientX:event.clientY;
                    moveBar(start,end);
                }
                start = undefined;
                need = undefined;
            });
            //鼠标移动事件
            w.addEventListener('mousemove',(event) => {
                if(start != undefined){
                    if((!direction && (event.clientX < -50 || event.clientX > track.offsetWidth + 50)) || (direction && (event.clientY < -50 || event.clientY > track.offsetHeight + 50))){
                        start = undefined;
                        return;
                    }
                    end = direction?event.clientX:event.clientY;
                    moveBar(start,end);
                }
            });
            //键盘按键事件
            w.addEventListener('keydown',(event) => {
                event.preventDefault();
                //水平方向
                if(direction){
                    if([37,65,100,109].includes(event.keyCode)){
                        press = -1;
                    }else if([39,68,102,107].includes(event.keyCode)){
                        press = 1;
                    }else if([38,87,104].includes(event.keyCode)){
                        otherPress = -1;
                        roll(0,otherPress);
                        return;
                    }else if([32,40,83,98].includes(event.keyCode)){
                        otherPress = 1;
                        roll(0,otherPress);
                        return;
                    }else{
                        //其余按键直接返回
                        return;
                    }
                }else{
                    if([38,87,104,109].includes(event.keyCode)){
                        press = -1;
                    }else if([32,40,83,98,107].includes(event.keyCode)){
                        press = 1;
                    }else if([37,65,100].includes(event.keyCode)){
                        otherPress = -1;
                        roll(1,otherPress);
                        return;
                    }else if([39,68,102].includes(event.keyCode)){
                        otherPress = 1;
                        roll(1,otherPress);
                        return;
                    }else{
                        //其余按键直接返回
                        return;
                    }
                }
                roll(direction,press);
            });
            //获取滚动条滑块的部分margin信息
            function thumbMargin(){
                if(direction){
                    return (1 - width / 100) / 2 * track.offsetHeight + 'px';
                }else{
                    return (1 - width / 100) / 2 * track.offsetWidth + 'px';
                }
            }
            //定时设置滚动条滑块的部分样式
            setThumbStyle = function setThumbStyle(){
                getMsg();
                //水平方向
                if(direction){
                    thumb.style.marginTop = thumbMargin();
                    thumb.style.marginLeft = hide / total * track.offsetWidth + 'px';
                    thumb.style.width = show / total * track.offsetWidth + 'px';
                }else{
                    thumb.style.marginTop = hide / total * track.offsetHeight + 'px';
                    thumb.style.marginLeft = thumbMargin();
                    thumb.style.height = show / total * track.offsetHeight + 'px';
                }
                if(thumb.scrollWidth > thumb.scrollHeight){
                    thumb.style.borderRadius = (thumb.scrollHeight / 2) * e.thumb.rounded / 100 + 'px';
                }else{
                    thumb.style.borderRadius = (thumb.scrollWidth / 2) * e.thumb.rounded / 100 + 'px';
                }
            }
            setThumbStyle();
            setInterval(setThumbStyle,40);
        };
        if(navigator.userAgent.toUpperCase().includes('Firefox'.toUpperCase())){
            container.addEventListener('load',() => {
                setMScrollbar();
            });
        }else{
            container.addEventListener('load',() => {
                console.log(6);
            });            
            setMScrollbar();
        }
    }
}