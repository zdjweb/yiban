class adImg{
    constructor(e){
        const imgBox = [];
        const img = [];
        //当前播放的广告
        let now = 0;
        //准备播放的广告
        let next = 0;
        //当前用户移动广告图片的方向
        let direction;
        //刚刚用户移动广告图片的方向
        let lastDirection;
        //用于判断用户移动广告图片方向是否改变
        let turn;
        //现在用户移动广告图片的距离
        let x;
        //刚刚用户移动广告图片的距离
        let lastX;
        //广告图片复位定时器
        let timer;
        //广告图片自动轮播定时器
        let autoTimer;
        //广告图片轮播动画定时器
        let moveTimer;
        //判断广告图片是否存在并修正
        function nReSet(n){
            if(n < 0){
                n = img.length - 1;
            }else if(n > img.length - 1){
                n = 0;
            }
            return n;
        }

        //设置广告容器触摸开始的功能
        e.container.addEventListener('touchstart',(event) => {
            event.preventDefault();
            clearInterval(moveTimer);
            clearInterval(autoTimer);
            autoTimer = null;
            clearInterval(timer);
            if(img.length > 1){
                x = event.touches[0].clientX;
            }
        });
        e.container.addEventListener('touchmove',(event) => {
            event.preventDefault();
            if(x != null){
                lastX = x;
                x = event.touches[0].clientX;
                direction = x - lastX < 0?0:1;
                direction != lastDirection?turn = 1:0;
                if(now == next){
                    next = nReSet(direction?now - 1:now + 1);
                    imgBox[next].style.marginLeft =  (x - lastX > 0?-90:90) + 'vw'; 
                }
                imgBox[now].style.marginLeft = z.strRemove(imgBox[now].style.marginLeft) + (x - lastX) / window.innerWidth * 100 + 'vw';
                imgBox[next].style.marginLeft = z.strRemove(imgBox[next].style.marginLeft) + (x - lastX) / window.innerWidth * 100 + 'vw';
                lastDirection = direction;
                if(turn){
                    if(direction){
                        if(z.strRemove(imgBox[now].style.marginLeft) >= 0){
                            turn = 0;
                            next = nReSet(now - 1);
                            imgBox[next].style.marginLeft = -90 + z.strRemove(imgBox[now].style.marginLeft) + 'vw';
                        }
                    }else{
                        if(z.strRemove(imgBox[next].style.marginLeft) <= 0){
                            turn = 0;
                            next = nReSet(now + 1);
                            imgBox[next].style.marginLeft = 90 + z.strRemove(imgBox[now].style.marginLeft) + 'vw';
                        }
                    }
                }
                if(!direction && z.strRemove(imgBox[next].style.marginLeft) <= 0 && !turn){
                    
                    now = next;

                }
                if(direction && z.strRemove(imgBox[next].style.marginLeft) >= 0 && !turn){

                    now = next;
                }
            }
        });
        window.addEventListener('touchend',() => {
            if(x != null){
                x = null;
                lastX = null;
                lastDirection = null;
                clearInterval(moveTimer);
                clearInterval(autoTimer);
                autoTimer = null;
                if(now != next){
                    timer = setInterval(,5);
                }else{

                }
            }
        });
        this.addImg = (src) => {
            imgBox.push(z.addElementByArray([
                'div',
                'style',[
                    'position','relative',
                    'display','block',
                    'top',-(imgBox.length * e.size) + 'vw',
                    'margin-left',imgBox.length * 90 + 'vw',
                    'height',e.size + 'vw'
                ]
            ],e.container));
            img.push(z.addElementByArray([
                'img',
                'src',src
            ],imgBox[imgBox.length - 1]));
        }
        let imgSizeReSet = () => {
            for(let i in img){
                if(img[i].offsetWidth / img[i].offsetHeight > 90 / e.size){
                    Object.assign(img[i].style,{
                        marginTop: (e.size - 90 / img[i].offsetWidth * img[i].offsetHeight) / 2 + 'vw',
                        marginLeft: 0,
                        width: '90vw',
                        height: 'auto'
                    });
                }else{
                    Object.assign(img[i].style,{
                        marginTop: 0,
                        marginLeft: (90 - e.size / img[i].offsetHeight * img[i].offsetWidth) / 2 + 'vw',
                        width: 'auto',
                        height: '56.25vw'
                    });
                }
            }
        }
        window.addEventListener('resize',() => {
            imgSizeReSet();
        });
    }
}