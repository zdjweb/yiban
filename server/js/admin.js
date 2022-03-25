//管理员管理页面
let admin = z.addPage('admin');
admin.style.background = '#99ccff';
//管理员列表提示栏
let adminList = z.addElementByArray([
    'div',
    'innerHTML','管理员列表',
    'style',[
        'margin','0 1vw',
        'width','50vw',
        'height','3vw',
        'color','#FFFFFF'
    ]
],admin);
s.top(adminList);
setFontSize(1.25,3,adminList);
//新增按钮
let adminBtn = z.addElementByArray([
    'div',
    'innerHTML','添加',
    'style',[
        'margin','0.375vw 0 0 24vw',
        'padding','0 1vw',
        'width','3vw',
        'height','2.25vw',
        'border-radius','1vw',
        'background','#FFFFFF',
        'color','#99ccff',
        'text-align','center'
    ],
    'function',[
        'click',function(){
            adminGreyBox.style.display = 'block';
            adminAddBox.style.display = 'block';
        }
    ]
],admin);
s.top(adminBtn);
setFontSize(1.2,2.25,adminBtn);
//管理员列表容器
let adminBox = z.addElementByArray([
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
],admin);
//当前信息容器
let adminTextNow;
//创建信息容器
function addAdminText(name,college,className){
    //信息容器
    let adminText = z.addElementByArray([
        'div',
        'style',[
            'margin','1vw',
            'padding','0 1vw',
            'width','74vw',
            'box-shadow','#99ccff 0px 0px .5vw 0px',
            'border-radius','.5vw',
            'background','#FFFFFF'
        ]
    ],adminBox);
    //信息主容器
    let adminTextBox = z.addElementByArray([
        'div',
        'style',[
            'margin-right','2vw',
            'width','65vw'
        ]
    ],adminText);
    s.top(adminTextBox);
    //姓名
    let nameMsg = z.addElementByArray([
        'div',
        'innerHTML',name,
        'style',[
            'width','30%',
            'height','2.5vw'
        ]
    ],adminTextBox);
    s.top(nameMsg);
    setFontSize(1.2,2.5,nameMsg);
    //院系
    collegeMsg = z.addElementByArray([
        'div',
        'innerHTML',college,
        'style',[
            'width','70%',
            'height','2.5vw',
            'text-align','right'
        ]
    ],adminTextBox);
    s.top(collegeMsg);
    setFontSize(1.2,2.5,collegeMsg);
    classText = z.addElementByArray([
        'div',
        'innerHTML','管理班级：',
        'style',[
            'height','2.5vw'
        ]
    ],adminTextBox);
    s.top(classText);
    setFontSize(1.2,2.5,classText);
    //行数
    let line = 0;
    //一行字数限制-45
    for(let i = 0,font = 45;i < className.length;i++){
        font -= className[i].length + (i != className.length - 1?1:0);
        if(font < 0){
            z.addElementByArray(['br'],adminTextBox);
            line++;
        }
        //班级
        let classMsg = z.addElementByArray([
            'div',
            'innerHTML',className[i],
            'style',[
                'margin-left',font < 0?'6vw':0,
                'height','2.5vw'
            ]
        ],adminTextBox);
        s.top(classMsg);
        setFontSize(1.2,2.5,classMsg);
        //用于分割的顿号
        if(i != className.length - 1){
            let sign = z.addElementByArray([
                'div',
                'innerHTML','、',
                'style',[
                    'height','2.5vw'
                ]
            ],adminTextBox);
            s.top(sign);
            setFontSize(1.2,2.5,sign);
        }
        font < 0?font = 45 - className[i].length - (i != className.length - 1?1:0):0;
    }
    //撤销按钮
    let returnBtn = z.addElementByArray([
        'div',
        'innerHTML','撤销',
        'style',[
            'margin',1.25 * (1 + line) + 'vw .5vw',
            'width','6vw',
            'height','2.5vw',
            'box-shadow','#99ccff 0px 0px .25vw 0px',
            'border-radius','.5vw',
            'text-align','center',
            'color','#99ccff'
        ],
        'function',[
            'click',function(){
                adminGreyBox.style.display = 'block';
                adminSureBox.style.display = 'block';
                adminTextNow = this.parentElement;
            }
        ]
    ],adminText);
    s.top(returnBtn);
    setFontSize(1.2,2.5,returnBtn);
}
addAdminText('我が魔王','辅导员之家',['软工211']);
addAdminText('我が救世主','辅导员之家',['21软1','21软2','21软3','21软1z','21软2z']);
addAdminText('オーマジオウ','辅导员之家',['数学与信息工程学院21级软件工程一班','数学与信息工程学院21级软件工程二班','数学与信息工程学院21级软件工程三班']);
addAdminText('Ohma Zi-O','辅导员之家',['21级软件工程一班','21级软件工程二班','21级软件工程三班','21级软件工程专升本一班','21级软件工程专升本二班']);
addAdminText('たかなし りっか','辅导员之家',['数学与信息工程学院21级软件工程一班','数学与信息工程学院21级软件工程二班','数学与信息工程学院21级软件工程三班','21级软件工程一班','21级软件工程二班','21级软件工程三班','21级软件工程专升本一班','21级软件工程专升本二班','21软1','21软2','21软3','21软1z','21软2z']);
//灰色遮罩
let adminGreyBox = addGreyBox(admin);
//撤销容器
let adminSureBox = z.addElementByArray([
    'div',
    'style',[
        'display','none',
        'margin','calc((100vh - 16vw) / 2) 35vw',
        'width','12vw',
        'height','6vw',
        'box-shadow','#99ccff 0px 0px .5vw 0px',
        'background','#FFFFFF',
        'border-radius','1vw'
    ]
],adminGreyBox);
//撤销容器信息
let adminSureText = z.addElementByArray([
    'div',
    'innerHTML','确认撤销管理员？',
    'style',[
        'padding','.5vw 0',
        'width','100%',
        'height','2.5vw',
        'text-align','center',
        'color','#99ccff',
        'border-bottom','.1vw solid #99ccff'
    ]
],adminSureBox);
setFontSize(1.2,2.5,adminSureText);
//撤销容器按钮
for(let i = 0;i < 2;i++){
    //撤销容器是按钮
    let adminSureBtn = z.addElementByArray([
        'div',
        'innerHTML',['是','否'][i],
        'style',[
            'width',['5.9vw','6vw'][i],
            'height','2.4vw',
            'text-align','center',
            'color','#99ccff',
            'border-right',['#99ccff solid .1vw',0][i]
        ],
        'function',[
            'click',function(){
                adminGreyBox.style.display = 'none';
                adminSureBox.style.display = 'none';
                i?0:adminBox.removeChild(adminTextNow);
            }
        ]
    ],adminSureBox);
    s.top(adminSureBtn);
    setFontSize(1.2,2.4,adminSureBtn);
}
//添加容器
let adminAddBox = z.addElementByArray([
    'div',
    'style',[
        'display','none',
        'margin','calc((100vh - 31vw) / 2) 23.8vw',
        'width','34.4vw',
        'height','21vw',
        'box-shadow','#99ccff 0px 0px .5vw 0px',
        'background','#FFFFFF',
        'border-radius','1vw'
    ]
],adminGreyBox);
//关闭按钮
let adminAddBoxClose = z.addElementByArray([
    'div',
    'innerHTML','X',
    'style',[
        'margin-left','31.9vw',
        'width','2.5vw',
        'height','2.5vw',
        'text-align','center',
        'color','#99ccff'
    ],
    'function',[
        'click',function(){
            adminGreyBox.style.display = 'none';
            adminAddBox.style.display = 'none';
        }
    ]
],adminAddBox);
setFontSize(1.2,2.5,adminAddBoxClose);
//添加容器搜索框
let adminAddBoxSearch = z.addElementByArray([
    'div',
    'contentEditable',true,
    'placeholder','输入姓名或工号',
    'class','search',
    'style',[
        'margin-left','3vw',
        'padding','0 .5vw',
        'width','23.4vw',
        'height','2.3vw',
        'outline',0,
        'color','#99ccff',
        'border','.1vw solid #99ccff',
        'border-radius','.5vw 0 0 .5vw'
    ],
    'function',[
        'keydown',function(event){
            if(event.keyCode == 13){
                event.preventDefault();
                this.blur();
            }
        },
    ]
],adminAddBox);
s.top(adminAddBoxSearch);
s.line(adminAddBoxSearch);
setFontSize(1.2,2.3,adminAddBoxSearch);
//添加容器搜索按钮
let adminAddBoxBtn = z.addElementByArray([
    'div',
    'innerHTML','搜索',
    'style',[
        'padding','0 .5vw',
        'width','2.7vw',
        'height','2.3vw',
        'text-align','center',
        'color','#99ccff',
        'border','#99ccff solid .1vw',
        'border-left','none',
        'border-radius','0 .5vw .5vw 0'
    ],
    'function',[
        'click',function(){
        }
    ]
],adminAddBox);
s.top(adminAddBoxBtn);
setFontSize(1.2,2.3,adminAddBoxBtn);
//信息容器
let adminAddTextBox = z.addElementByArray([
    'div',
    'style',[
        'margin','0.5vw 3vw',
        'width','28.4vw',
        'height','14vw',
        'overflow','auto'
    ]
],adminAddBox);
//当前信息容器
let adminAddTextNow;
//创建信息容器
function addAdminAddText(name,id,college){
    //信息容器
    let adminAddText = z.addElementByArray([
        'div',
        'style',[
            'margin-top','.5vw',
            'padding','0 .5vw',
            'width','27.2vw',
            'height','4.8vw',
            'border','#99ccff solid .1vw',
            'border-radius','.5vw'
        ]
    ],adminAddTextBox);
    //信息
    let adminAddMsg = z.addElementByArray([
        'div',
        'style',[
            'width','22.8vw',
            'height','4.8vw'
        ]
    ],adminAddText);
    s.top(adminAddMsg);
    //姓名
    let nameMsg = z.addElementByArray([
        'div',
        'innerHTML',name,
        'style',[
            'width','9.6vw',
            'height','2.3vw'
        ]
    ],adminAddMsg);
    s.top(nameMsg);
    setFontSize(1.2,2.3,nameMsg);
    //院系
    let collegeMsg = z.addElementByArray([
        'div',
        'innerHTML',college,
        'style',[
            'width','13.2vw',
            'height','2.3vw',
            'text-align','right'
        ]
    ],adminAddMsg);
    s.top(collegeMsg);
    setFontSize(1.2,2.3,collegeMsg);
    //工号
    let idMsg = z.addElementByArray([
        'div',
        'innerHTML','工号：' + id,
        'style',[
            'margin-top','.2vw',
            'width','100%',
            'height','2.3vw'
        ]
    ],adminAddMsg);
    setFontSize(1.2,2.3,idMsg);
    //设置按钮
    let setBtn = z.addElementByArray([
        'div',
        'innerHTML','设置',
        'style',[
            'margin','1.15vw 0 1.15vw .5vw',
            'padding','0 .5vw',
            'width','2.7vw',
            'height','2.3vw',
            'text-align','center',
            'color','#99ccff',
            'border','#99ccff solid .1vw',
            'border-radius','.5vw'
        ],
        'function',[
            'click',function(){
                adminSetGreyBox.style.display = 'block';
                adminAddTextNow = this.parentElement;
            }
        ]
    ],adminAddText);
    s.top(setBtn);
    setFontSize(1.2,2.3,setBtn);
}
addAdminAddText('我が魔王','??????????','数学与信息工程学院');
addAdminAddText('我が救世主','我不知道','数学与信息工程学院');
addAdminAddText('オーマジオウ','未知','数学与信息工程学院');
addAdminAddText('Ohma Zi-O','??????????','数学与信息工程学院');
addAdminAddText('たかなし りっか','未知','数学与信息工程学院');
//灰色遮罩
let adminSetGreyBox = addGreyBox(admin);
//确认设置容器
let adminSetSureBox = z.addElementByArray([
    'div',
    'style',[
        'margin','calc((100vh - 16vw) / 2) 35vw',
        'width','12vw',
        'height','6vw',
        'box-shadow','#99ccff 0px 0px .5vw 0px',
        'background','#FFFFFF',
        'border-radius','1vw'
    ]
],adminSetGreyBox);
//确认设置容器信息
let adminSetSureMsg = z.addElementByArray([
    'div',
    'innerHTML','确认设置管理员？',
    'style',[
        'padding','.5vw 0',
        'width','100%',
        'height','2.5vw',
        'text-align','center',
        'color','#99ccff',
        'border-bottom','.1vw solid #99ccff'
    ]
],adminSetSureBox);
setFontSize(1.2,2.5,adminSetSureMsg);
//确认设置容器按钮
for(let i = 0;i < 2;i++){
    let adminSetSureBtn = z.addElementByArray([
        'div',
        'innerHTML',['是','否'][i],
        'style',[
            'width',['5.9vw','6vw'][i],
            'height','2.4vw',
            'text-align','center',
            'color','#99ccff',
            'border-right',['#99ccff solid .1vw',0][i],
        ],
        'function',[
            'click',function(){
                adminSetGreyBox.style.display = 'none';
                i?0:adminAddTextBox.removeChild(adminAddTextNow);
            }
        ]
    ],adminSetSureBox);
    s.top(adminSetSureBtn);
    setFontSize(1.2,2.4,adminSetSureBtn);
}