//zdjJs类
class zdjJs{
    constructor(){
        //用于获取系统设置导致字体放大的倍数的字
        let font;
        //系统设置导致字体放大的倍数
        let fontTimes;
        //字体单位
        let fontSuffix;
        //页面信息
        let page = {
            //页面类别
            type: [],
            //当前页面类别编号
            typeN: 0,
            //页面类别所在页面编号
            pageN: [],
            //当前页面
            now: null,
            //用于创建页面的数组
            arr: [],
            //用于放置页面的容器
            container: null
        };
        Object.defineProperties(this,{
            //版本信息
            version: {
                get: () => '1.0.2'
            },
            //作者信息
            author: {
                get: () => 'zdj0123'
            },
            //通过数组生成元素
            addElementByArray: {
                get: () => {
                    return (uArr,uContainer) => {
                        let element = document.createElement(uArr[0]);
                        for(let i = 1;i < uArr.length;i += 2){
                            if(uArr[i] == 'innerHTML'){
                                element.innerHTML = uArr[i + 1];
                            }else if(uArr[i] == 'style'){
                                for(let j = 0;j < uArr[i + 1].length;j += 2){
                                    element.style.cssText += (uArr[i + 1][j] + ':' + uArr[i + 1][j + 1] + ';'); 
                                }
                            }else if(uArr[i] == 'function'){
                                for(let j = 0;j < uArr[i + 1].length;j += 2){
                                    element.addEventListener(uArr[i + 1][j],uArr[i + 1][j + 1]);
                                }
                            }else{
                                element.setAttribute(uArr[i],uArr[i + 1]);
                            }
                        }
                        uContainer != undefined?uContainer.appendChild(element):0;
                        return element;
                    }
                }
            },
            //动态加载JavaScript文件
            loadScript: {
                get: () => {
                    return (uPath,uContainer) => {
                        this.addElementByArray([
                            'script',
                            'src',uPath
                        ],uContainer == undefined?document.body:uContainer);
                    }
                }
            },
            //移除字符串的单位并返回数字类型
            strRemove: {
                get: () => {
                    return (uStr) => {
                        let arr = ['cm','mm','vmax','vmin','in','px','pt','pc','rem','em','ex','ch','vw','vh','%'];
                        for(let i in arr){
                            uStr.includes(arr[i])?uStr = uStr.replace(arr[i],''):0;
                        }
                        return Number(uStr);
                    }
                }
            },
            //系统设置导致字体放大的倍数
            fontTimes: {
                get: () => fontTimes
            },
            //获取系统设置导致字体放大的倍数
            getFontTimes: {
                get: () => {
                    return (uContainer) => {
                        font = this.addElementByArray([
                            'div',
                            'innerHTML','我',
                            'style',[
                                'position','fixed',
                                'display','inline-block',
                                'z-index','-1',
                                'font-size','12px'
                            ]
                        ],uContainer != undefined?uContainer:document.body);
                        fontTimes = this.strRemove((font.offsetWidth / 12).toFixed(2));
                        //隐藏用于获取系统设置导致字体放大的倍数的字
                        font.style.fontSize = 0;
                        return fontTimes;
                    }
                }
            },
            //字体单位
            fontSuffix: {
                get: () => fontSuffix
            },
            //设置字体单位
            setFontSuffix: {
                get: () => {
                    return (uStr) => {
                        fontSuffix = uStr;
                    }
                }
            },
            //获取重新设置后的字体大小
            getFontSize: {
                get: () => {
                    return (uSet,uFontTimes,uFontSuffix) => {
                        return (uSet / (uFontTimes == undefined?fontTimes:uFontTimes)).toFixed(2) + (uFontSuffix != undefined?uFontSuffix:fontSuffix);
                    }
                }
            },
            //获取格式化的时间信息
            getTime: {
                get: () => {
                    return (uStr,uTime,uType) => {
                        uStr?0:uStr = 'Y/M/D h:m:s';
                        let state = 0;
                        let arr = ['Y','M','D','h','m','s'];
                        let date = uTime != undefined?new Date(uType?uTime * 1000:uTime):new Date();
                        let str = '';
                        for(let i in uStr){
                            if(state == 0){
                                if(uStr[i] == '!'){
                                    state = 1;
                                }else{
                                    if(arr.includes(uStr[i])){
                                        let text = date[[
                                            'getFullYear',
                                            'getMonth',
                                            'getDate',
                                            'getHours',
                                            'getMinutes',
                                            'getSeconds'
                                        ][arr.indexOf(uStr[i])]]();
                                        arr.indexOf(uStr[i]) == 1?text++:0;
                                        text < 10?str += '0' + text:str += text;
                                    }else{
                                        str += uStr[i];
                                    }
                                }
                            }else{
                                str += uStr[i];
                                state = 0;
                            }
                        }
                        return str;
                    }
                }
            },
            //获取最大值
            getMax: {
                get: () => {
                    return (uArr) => {
                        let max = uArr != undefined?(uArr.length?uArr[0]:'error'):'error';
                        if(max == 'error'){
                            return max;
                        }else{
                            for(let i in uArr){
                                uArr[i] > max?max = uArr[i]:0;
                            }
                        }
                        return max;
                    }
                }
            },
            //设置用于创建页面的数组
            setPage: {
                get: () => {
                    return (uArr,uContainer) => {
                        page.arr = [...uArr];
                        page.container = uContainer;
                    }
                }
            },
            //创建页面并加入页面分类
            addPage: {
                get: () => {
                    return (uType) => {
                        //页面分类不存在时创建分类
                        page[uType] == undefined?(() => {
                            page.type.push(uType.toString());
                            page[uType] = [];
                            page.pageN.push(0);
                        })():0;
                        let newPage = this.addElementByArray(page.arr,page.container);
                        if(!page.type.indexOf(uType) && !page[uType].length){
                            page.now = newPage;
                        }
                        page[uType].push(newPage);
                        return newPage;
                    }
                }
            },
            //切换页面
            changePage: {
                get: () => {
                    return (uPage) => {
                        for(let i in page.type){
                            for(let j in page[page.type[i]]){
                                if(uPage == page[page.type[i]][j]){
                                    page.typeN = i;
                                    page.pageN[i] = j;
                                    page.now.style.display = 'none';
                                    page.now = uPage;
                                    uPage.style.display = 'block';
                                    return;
                                }
                            }
                        }
                    }
                }
            },
            //通过页面类别名切换页面类别
            changePageType: {
                get: () => {
                    return (uType) => {
                        let needTypeN = page.type.indexOf(uType);
                        this.typeN = needTypeN;
                        this.changePage(page[page.type[needTypeN]][page.pageN[needTypeN]]);
                    }
                }
            },
            //通过页面类别编号切换页面类别
            changePageTypeN: {
                get: () => {
                    return (uTypeN) => {
                        this.typeN = uTypeN;
                        this.changePage(page[page.type[uTypeN]][page.pageN[uTypeN]]);
                    }
                }
            }
        });
    }
}