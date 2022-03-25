//劳动活动报名页面
const list = z.addPage('index');
list.style.background = 'linear-gradient(rgb(246, 176, 94) 15vw, rgb(245, 245, 245) calc((100vh - 29vw) / 2 + 15vw))';
//劳动活动报名页面顶部标题栏
const listHeader = addHeader(list);
//劳动活动报名页面顶部标题栏图片按钮
addHeaderImg(listHeader).addEventListener('click',() => {
    z.changePage(index);
});
//劳动活动报名页面顶部标题栏文字容器
addHeaderFont('劳动活动报名',listHeader);
//劳动活动报名页面顶部按钮
const listHeaderBtn = [];
for(let i = 0;i < 2;i++){
    listHeaderBtn[i] = z.addElementByArray([
        'div',
        'innerHTML',['未报名','已报名'][i],
        'style',[
            'display','inline-block',
            'vertical-align','top',
            'padding','2vw',
            'width','46vw',
            'height','8vw',
            'text-align','center',
            'background',i?'linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.3))':'linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.2))',
            'color','#f5f5f5',
            'font-size',z.getFontSize(4.5),
            'line-height',z.getFontSize(8)
        ],
        'function',[
            'click',function(){
                this.style.background = 'linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.2))';
                listHeaderBtn[1 - i].style.background = 'linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.3))';
                listMain[i].style.display = 'block';
                listMain[1 - i].style.display = 'none';
                let del = listMain[i].scrollTop / (window.innerHeight * 0.1) * 9;
                if(del >= 0){
                    if(del > 9){
                        del = 9;
                    }
                    list.style.background = 'linear-gradient(' + 'rgb(' + (246 + del) + ',' + (176 - del * 3) + ',' + (94 - del * 3) + ')' + ' 15vw,#f5f5f5 calc((100vh - 29vw) / 2 + 15vw))'
                    listHeader.style.background = 'rgb(' + (246 + del) + ',' + (176 - del * 3) + ',' + (94 - del * 3) + ')';
                }
                listMainN = i;
                listBoxCssReSet(i);
            }
        ]
    ],list);
}
//当前显示的劳动活动报名页面主要部分
let listMainN = 0;
//劳动活动报名页面主要部分
const listMain = [];
for(let i = 0;i < 2;i++){
    listMain[i] = addMain(list);
    Object.assign(listMain[i].style,{
        display: i?'none':'block',
        height: 'calc(100vh - 35vw - 12vw)',
        overflow: 'auto'
    });
    listMain[i].addEventListener('scroll',function(){
        let del = listMain[i].scrollTop / (window.innerHeight * 0.1) * 9;
        if(del >= 0){
            if(del > 9){
                del = 9;
            }
            list.style.background = 'linear-gradient(' + 'rgb(' + (246 + del) + ',' + (176 - del * 3) + ',' + (94 - del * 3) + ')' + ' 15vw,#f5f5f5 calc((100vh - 29vw) / 2 + 15vw))'
            listHeader.style.background = 'rgb(' + (246 + del) + ',' + (176 - del * 3) + ',' + (94 - del * 3) + ')';
        }
    });
}
//创建劳动活动报名页面活动信息容器
function addListBox(number,container){
    return z.addElementByArray([
        'div',
        'style',[
            'margin','3vw 0.5vw',
            'padding','2.5vw',
            'width','85vw',
            'border-radius','3vw',
            'box-shadow','0 0 2vw 0 #999999',
            'background','#FFFFFF url("background/my.png")',
            'background-size','100vw',
            'background-repeat','no-repeat',
            'background-position-x','-5vw'
        ]
    ],container);
}
//创建劳动活动报名页面提示信息容器
function addListMsgName(innerHTML,container){
    return z.addElementByArray([
        'div',
        'innerHTML',innerHTML,
        'style',[
            'display','inline-block',
            'vertical-align','top',
            'width','22vw',
            'height','8vw',
            'color','#232325',
            'font-size',z.getFontSize(4),
            'line-height',z.getFontSize(8)
        ]
    ],container);
}
//创建劳动活动报名页面发布组织级别信息
function addListGrade(grade,container){
    return z.addElementByArray([
        'div',
        'innerHTML',['校级','院级'][grade],
        'style',[
            'display','inline-block',
            'vertical-align','top',
            'width','15vw',
            'height','8vw',
            'text-align','right',
            'color','#232325',
            'font-size',z.getFontSize(3),
            'line-height',z.getFontSize(8)
        ]
    ],container);
}
//创建劳动活动报名页面劳动时间容器
function addListTimeBox(container){
    return z.addElementByArray([
        'div',
        'style',[
            'display','inline-block',
            'vertical-align','top',
            'width','48vw',
            'height','16vw'
        ]
    ],container);
}
//创建劳动活动报名页面劳动时间统计信息
function addListTimeMsg(innerHTML,container){
    return z.addElementByArray([
        'div',
        'innerHTML',innerHTML,
        'style',[
            'display','inline-block',
            'vertical-align','bottom',
            'width','15vw',
            'height','8vw',
            'text-align','right',
            'color','#232325',
            'font-size',z.getFontSize(3),
            'line-height',z.getFontSize(8)
        ]
    ],container);
}
//创建劳动活动报名页面活动信息
function addListMsg(innerHTML,container){
    return z.addElementByArray([
        'div',
        'innerHTML',innerHTML,
        'style',[
            'display','inline-block',
            'vertical-align','top',
            'width','63vw',
            'height','8vw',
            'font-size',z.getFontSize(4),
            'line-height',z.getFontSize(8)
        ]
    ],container);
}
//创建劳动活动报名页面按钮
function addListBtn(innerHTML,container){
    setFontSize(4,8,z.addElementByArray([
        'div',
        'innerHTML',innerHTML,
        'style',[
            'margin','2vw 32.1vw',
            'width','20vw',
            'height','8vw',
            'border','0.4vw #232325 solid',
            'border-radius','3vw',
            'text-align','center',
            'color','#232325'
        ]
    ],container));
}
//劳动活动报名页面未报名活动信息容器
const listBox1 = [];
//创建劳动活动报名页面未报名活动信息容器
function addListBox1(name,grade,startTime,endTime,type,address){
    //劳动活动报名页面未报名活动信息容器
    let newListBox = addListBox(listBox1.length,listMain[0]);
    listBox1.push(newListBox);
    //劳动活动报名页面未报名活动名
    let listActName = addListMsgName(name,newListBox);
    Object.assign(listActName.style,{
        width: '70vw',
        height: 'auto'
    });
    //劳动活动报名页面未报名活动发布组织级别信息
    addListGrade(grade,newListBox);
    //劳动活动报名页面未报名活动劳动时间信息提示
    addListMsgName('劳动时间：',newListBox);
    //劳动活动报名页面未报名活动劳动时间信息容器
    let listTimeBox = addListTimeBox(newListBox);
    //劳动活动报名页面未报名活动劳动时间信息
    addListMsg(z.getTime('Y/M/D',startTime,1),listTimeBox).style.width = '100%';
    addListMsg(z.getTime('h:m 至 ',startTime,1) + z.getTime('h:m',endTime,1),listTimeBox).style.width = '100%';
    addListTimeMsg('共' + ((endTime - startTime) / 3600).toFixed(1) + '小时',newListBox);
    //劳动活动报名页面未报名活动劳动类别信息提示
    addListMsgName('劳动类别：',newListBox);
    //劳动活动报名页面未报名活动劳动类别信息
    addListMsg(['日常生活劳动','生产劳动','服务性劳动'][type],newListBox);
    //劳动活动报名页面未报名活动劳动地点信息提示
    addListMsgName('劳动地点：',newListBox);
    //劳动活动报名页面未报名活动劳动地点信息
    addListMsg(address,newListBox).style.height = 'auto';
    //创建劳动活动报名页面未报名活动报名按钮
    addListBtn('提交报名',newListBox);
    listBoxCssReSet(0);
}
//劳动活动报名页面已报名活动信息容器
const listBox2 = [];
//创建劳动活动报名页面已报名活动信息容器
function addListBox2(name,grade,startTime,endTime,type,address){
    //劳动活动报名页面已报名活动信息容器
    let newListBox = addListBox(listBox2.length,listMain[1]);
    listBox2.push(newListBox);
    //劳动活动报名页面已报名活动名
    let listActName = addListMsgName(name,newListBox);
    Object.assign(listActName.style,{
        width: '70vw',
        height: 'auto'
    });
    //劳动活动报名页面已报名活动发布组织级别信息
    addListGrade(grade,newListBox);
    //劳动活动报名页面已报名活动劳动时间信息提示
    addListMsgName('劳动时间：',newListBox);
    //劳动活动报名页面已报名活动劳动时间信息容器
    let listTimeBox = addListTimeBox(newListBox);
    //劳动活动报名页面已报名活动劳动时间信息
    addListMsg(z.getTime('Y/M/D',startTime,1),listTimeBox).style.width = '100%';
    addListMsg(z.getTime('h:m 至 ',startTime,1) + z.getTime('h:m',endTime,1),listTimeBox).style.width = '100%';
    addListTimeMsg('共' + ((endTime - startTime) / 3600).toFixed(1) + '小时',newListBox);
    //劳动活动报名页面已报名活动劳动类别信息提示
    addListMsgName('劳动类别：',newListBox);
    //劳动活动报名页面已报名活动劳动类别信息
    addListMsg(['日常生活劳动','生产劳动','服务性劳动'][type],newListBox);
    //劳动活动报名页面已报名活动劳动地点信息提示
    addListMsgName('劳动地点：',newListBox);
    //劳动活动报名页面已报名活动劳动地点信息
    addListMsg(address,newListBox).style.height = 'auto';
    //劳动活动报名页面已报名活动完成情况信息提示
    addListMsgName('完成情况：',newListBox);
    //劳动活动报名页面已报名活动完成情况信息输入框
    setFontSize(4,8,z.addElementByArray([
        'div',
        'contentEditable',true,
        'style',[
            'display','inline-block',
            'vertical-align','top',
            'margin','0 2vw',
            'padding','0 2vw',
            'width','55vw',
            'height','24vw',
            'outline','none',
            'border-radius','1.5vw',
            'background','#f5f5f5',
            'color','#232325'
        ],
        'function',[
            'input',function(){
                let msg = this.innerHTML;
                let enterPress = 0;
                if(msg.split('<br>').length > 1 && msg.split('<br>')[msg.split('<br>').length - 1] == ''){
                    let n = 2;
                    let i = msg.split('<br>')[msg.split('<br>').length - n];
                    while(i == '' && msg.split('<br>').length - n > 0){
                        enterPress++;
                        n++;
                        i = msg.split('<br>')[msg.split('<br>').length - n];
                    }
                }
                this.style.height = '8vw';
                if(Math.round((this.scrollHeight) / (window.innerWidth * 0.08) + enterPress) > 3){
                    this.style.height = Math.round((this.scrollHeight) / (window.innerWidth * 0.08) + enterPress) * 8 + 'vw';
                }else{
                    this.style.height = 8 * 3 + 'vw';
                }
            }
        ]
    ],newListBox));
    //劳动活动报名页面已报名活动现场图片提示
    addListMsgName('现场图片：',newListBox);
    setFontSize(3,8,z.addElementByArray([
        'div',
        'innerHTML','仅允许上传.jpg和.png的图片',
        'style',[
            'display','inline-block',
            'vertical-align','top',
            'width','63vw',
            'height','8vw',
            'color','#807f7f'
        ]
    ],newListBox));
    //劳动活动报名页面已报名活动现场图片及按钮容器
    listActImgAndBtnBox = z.addElementByArray([
        'div',
        'style',[
            'margin','3vw 33vw',
            'width','20vw',
            'height','25vw'
        ]
    ],newListBox);
    //劳动活动报名页面已报名活动现场图片选择状态
    let listSelect = 0;
    //劳动活动报名页面已报名活动现场图片文件
    let listActImgFile;
    //劳动活动报名页面已报名活动选择图片事件
    function listBtnFunction(){
        listActImgBtn.click();
    }
    //劳动活动报名页面已报名活动现场图片
    let listActImg = z.addElementByArray([
        'img',
        'src','btn/picture.png',
        'style',[
            'width','20vw',
            'height','20vw'
        ],
        'function',[
            'click',listBtnFunction
        ]
    ],listActImgAndBtnBox);
    //劳动活动报名页面已报名活动现场图片点击选择按钮
    let listActBtn = z.addElementByArray([
        'div',
        'innerHTML','上传图片',
        'style',[
            'width','20vw',
            'height','5vw',
            'text-align','center',
            'color','#807f7f',
            'font-size',z.getFontSize(3),
            'line-height',z.getFontSize(5)
        ],
        'function',[
            'click',listBtnFunction
        ]
    ],listActImgAndBtnBox);
    //劳动活动报名页面已报名活动现场图片文件上传按钮
    let listActImgBtn = z.addElementByArray([
        'input',
        'type','file',
        'accept','image/jpeg,image/png',
        'style',[
            'width',0,
            'height',0
        ],
        'function',[
            'change',function(){
                if(this.files[0] != undefined){
                    listActImgFile = this.files[0];
                    listActImg.src = URL.createObjectURL(this.files[0]);
                    listSelect = 1;
                }
                if(listSelect){
                    listActBtn.innerHTML = '点击更换图片';
                    listActImg.removeEventListener('click',listBtnFunction);
                    listActImg.addEventListener('click',function(){
                        setImg(this.src);
                    });
                }
            }
        ]
    ],listActImgAndBtnBox);
    //创建劳动活动报名页面已报名活动报名按钮
    addListBtn('提交审核',newListBox);
    listBoxCssReSet(1);
}
//劳动活动报名页面活动信息容器背景位置重设
function listBoxCssReSet(needReSet){
    if(needReSet){
        for(let i in listBox2){
            listBox2[i].style.backgroundPositionY = - 0.08 * window.innerWidth + (listBox2[i].offsetHeight - 0.6 * window.innerWidth) / 2 + 'px';
            i == listBox2.length - 1?listBox2[i].style.marginBottom = 0:0;
        }
    }else{
        for(let i in listBox1){
            listBox1[i].style.backgroundPositionY = - 0.08 * window.innerWidth + (listBox1[i].offsetHeight - 0.6 * window.innerWidth) / 2 + 'px';
            i == listBox1.length - 1?listBox1[i].style.marginBottom = 0:0;
        }
    }
}
addListBox1('啊哈哈，鸡汤来了！...这喝汤多是一件美事啊！...代号穿山甲！...他奶奶地，玩阴的是吧！',0,'1638754200','1638757800',0,'福建省龙岩市新罗区东肖北路1号龙岩学院');
addListBox1('吃饭',0,'1638754200','1638757800',0,'福建省龙岩市新罗区东肖北路1号龙岩学院');
addListBox1('睡觉',1,'1638766800','1638772200',1,'福建省龙岩市新罗区东肖北路1号龙岩学院');
addListBox1('打豆豆',0,'1638772200','1638790200',2,'龙岩学院');
addListBox2('啊哈哈，鸡汤来了！...这喝汤多是一件美事啊！...代号穿山甲！...他奶奶地，玩阴的是吧！',0,'1638754200','1638757800',0,'福建省龙岩市新罗区东肖北路1号龙岩学院');
addListBox2('吃饭',0,'1638754200','1638757800',0,'福建省龙岩市新罗区东肖北路1号龙岩学院');
addListBox2('睡觉',1,'1638766800','1638772200',1,'福建省龙岩市新罗区东肖北路1号龙岩学院');
addListBox2('打豆豆',0,'1638772200','1638790200',2,'龙岩学院');