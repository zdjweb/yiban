//SStyle类
class SStyle{
    //行类上对齐
    top(e){
        Object.assign(e.style,{
            display: 'inline-block',
            verticalAlign: 'top'
        });
    }
    //单行可滚动
    line(e){
        Object.assign(e.style,{
            whiteSpace: 'nowrap',
            overflow: 'auto hidden'
        });
    }
}