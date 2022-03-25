//我的订单页面
const order = z.addPage('store');
//我的订单页面顶部标题栏
const orderHeader = addHeader(order);
//我的订单页面顶部标题栏图片按钮
addHeaderImg(orderHeader).addEventListener('click',() => {
    z.changePage(store);
});
//劳动记录详情页面顶部标题栏文字容器
addHeaderFont('我的订单',orderHeader);
//劳动记录详情页面主要部分
const orderMain = addMain(order);
Object.assign(orderMain.style,{
    background: 'linear-gradient(#f6b05e 0,#f5f5f5 calc((100vh - 29vw) / 2))',
    overflow: 'auto'
})
orderMain.addEventListener('scroll',function(){
    let del = orderMain.scrollTop / (window.innerHeight * 0.1) * 9;
    if(del >= 0){
        if(del > 9){
            del = 9;
        }
        orderHeader.style.background = 'rgb(' + (246 + del) + ',' + (176 - del * 3) + ',' + (94 - del * 3) + ')';
    }
});
function addOrderNOrM(type,innerHTML,container){
    setFontSize(4,8,z.addElementByArray([
        'div',
        'innerHTML',innerHTML,
        'style',[
            'display','inline-block',
            'vertical-align','top',
            'width',[22,63][type] + 'vw',
            'height',['8vw',''][type],
            'color','#232325'
        ]
    ],container));
}
//增加我的订单页面的信息容器
function orderBoxAdd(name,score,time,state){
    const orderBox = z.addElementByArray([
        'div',
        'style',[
            'margin','3vw 0.5vw',
            'padding','2.5vw',
            'width','85vw',
            'border-radius','3vw',
            'background','#FFFFFF',
            'box-shadow','0 0 2vw 0 #999999'
        ]
    ],orderMain);
    addOrderNOrM(0,'奖品名称：',orderBox);
    addOrderNOrM(1,name,orderBox);
    addOrderNOrM(0,'花费积分：',orderBox);
    addOrderNOrM(1,score,orderBox);
    addOrderNOrM(0,'兑奖时间：',orderBox);
    addOrderNOrM(1,z.getTime('Y/M/D',time,1),orderBox);
    addOrderNOrM(0,'领取状态：',orderBox);
    addOrderNOrM(1,['未领取','已领取'][state],orderBox);
}
orderBoxAdd('漆黑泽克斯原始型第二',100,'1638790200',1);
orderBoxAdd('小水杯',10,'1638790200',0);
orderBoxAdd('名字超级超级超级超级超级长的蓝牙耳机',30,'1638790200',0);
orderBoxAdd('蓝牙音箱',50,'1638790200',1);