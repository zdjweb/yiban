//劳动登记页面
const register = z.addPage('index');
//劳动登记页面顶部标题栏
const registerHeader = addHeader(register);
//劳动登记页面顶部标题栏图片按钮
addHeaderImg(registerHeader).addEventListener('click',() => {
    z.changePage(index);
});
//劳动登记页面顶部标题栏文字容器
addHeaderFont('劳动活动登记',registerHeader);
//劳动登记页面主要部分
const registerMain = addMain(register);
registerMain.style.overflow = 'auto';
registerMain.addEventListener('scroll',function(){
    let del = registerMain.scrollTop / (window.innerHeight * 0.1) * 9;
    if(del >= 0){
        if(del > 9){
            del = 9;
        }
        registerHeader.style.background = 'rgb(' + (246 + del) + ',' + (176 - del * 3) + ',' + (94 - del * 3) + ')';
    }
});
//劳动登记页面信息容器
const registerBox = z.addElementByArray([
    'div',
    'style',[
        'margin','0 0.5vw',
        'padding','3vw 2vw',
        'width','86vw',
        'border-radius','3vw',
        'background','#FFFFFF'
    ]
],registerMain);
//创建劳动登记页面提示信息容器
function addRegisterMsgName(innerHTML){
    return z.addElementByArray([
        'div',
        'innerHTML',innerHTML,
        'style',[
            'display','inline-block',
            'vertical-align','top',
            'width','18vw',
            'height','8vw',
            'color','#232325',
            'font-size',z.getFontSize(4),
            'line-height',z.getFontSize(8)
        ]
    ],registerBox);
}
//创建劳动登记页面信息容器
function addRegisterMsg(placeholder){
    return z.addElementByArray([
        'div',
        'placeholder',placeholder != undefined?placeholder:'',
        'style',[
            'display','inline-block',
            'vertical-align','top',
            'margin','0 2vw',
            'padding','0 2vw',
            'width','60vw',
            'height','8vw',
            'outline','none',
            'border-radius','1.5vw',
            'background','#f5f5f5',
            'color','#232325',
            'overflow','visible',
            'font-size',z.getFontSize(4),
            'line-height',z.getFontSize(8)
        ]
    ],registerBox);
}
//创建劳动登记页面信息分割线
function addRegisterHr(){
    return z.addElementByArray([
        'div',
        'style',[
            'margin','3vw auto 3vw auto',
            'width','86vw',
            'height','.1vw',
            'background','linear-gradient(to right,#FFFFFF 0vw,#999999 43vw,#FFFFFF 86vw)'
        ]
    ],registerBox);
}
//劳动登记页面劳动名称提示信息
addRegisterMsgName('劳动名称');
//劳动登记页面劳动名称输入框
const registerActName = addRegisterMsg();
registerActName.contentEditable = true;
registerActName.addEventListener('input',function(){
    let Msg = this.innerHTML;
    let enterPress = 0;
    if(Msg.split('<br>').length > 1 && Msg.split('<br>')[Msg.split('<br>').length - 1] == ''){
        let n = 2;
        let j = Msg.split('<br>')[Msg.split('<br>').length - n];
        while(j == '' && Msg.split('<br>').length - n > 0){
            enterPress++;
            n++;
            j = Msg.split('<br>')[Msg.split('<br>').length - n];
        }
    }
    this.style.height = window.innerWidth * 0.08 + 'px';
    this.style.height = Math.round((this.scrollHeight) / (window.innerWidth * 0.08) + enterPress) * (window.innerWidth * 0.08) + 'px';
});
//劳动登记页面信息分割线
addRegisterHr();
//劳动登记页面劳动类别提示信息
addRegisterMsgName('劳动类别');
//劳动登记页面劳动类别点击选择按钮
const registerActType = addRegisterMsg('点击选择劳动类别');
registerActType.className = 'registerMsg';
registerActType.style.textAlign = 'center';
registerActType.addEventListener('click',function(){
    registerNone.style.display = 'block';
    registerTypeSelectBox.style.display = 'block';
    if(registerTypeTSelect == null){
        registerTypeTSelect = addTSelect(addSelectSetBox(registerTypeSelectBox),['日常生活劳动','生产劳动','服务性劳动']);
    }
});
//劳动登记页面信息分割线
addRegisterHr();
//劳动登记页面劳动时间提示信息
addRegisterMsgName('劳动时间');
//劳动登记页面劳动日期点击选择按钮
const registerActDate = addRegisterMsg('XXXX/XX/XX');
registerActDate.className = 'registerMsg';
registerActDate.style.textAlign = 'center';
registerActDate.addEventListener('click',() => {
    registerNone.style.display = 'block';
    registerActDateSelectBox.style.display = 'block';
    if(registerYearTSelect == null){
        const nowDate = new Date;
        const yearSelectBox = addSelectSetBox(registerActDateSelectBox);
        Object.assign(yearSelectBox.style,{
            display: 'inline-block',
            verticalAlign: 'top',
            width: '35vw'
        });
        const monthSelectBox = addSelectSetBox(registerActDateSelectBox);
        Object.assign(monthSelectBox.style,{
            display: 'inline-block',
            verticalAlign: 'top',
            width: '32.5vw'
        });
        const dateSelectBox = addSelectSetBox(registerActDateSelectBox);
        Object.assign(dateSelectBox.style,{
            display: 'inline-block',
            verticalAlign: 'top',
            width: '32.5vw'
        });
        const dateSet = () => {
            const lastCode = registerDateTSelect.code;
            while(registerDateTSelect.number){
                registerDateTSelect.deleteValue(0);
            }
            const newDate = new Date(registerYearTSelect.code + 2021,registerMonthTSelect.code + 1,0);
            for(let i = 1;i <= newDate.getDate();i++){
                registerDateTSelect.addValue(i + '日');
            }
            registerDateTSelect.code = lastCode < newDate?lastCode:newDate - 1;
        }
        registerYearTSelect = addTSelect(yearSelectBox,[]);
        for(let i = 2021;i <= nowDate.getFullYear();i++){
            registerYearTSelect.addValue(i + '年');
        }
        registerYearTSelect.setValueChangeFunction(dateSet);
        registerYearTSelect.code = nowDate.getFullYear() - 2021;
        registerMonthTSelect = addTSelect(monthSelectBox,[]);
        for(let i = 0;i < 12;i++){
            registerMonthTSelect.addValue(i + 1 + '月');
        }
        registerMonthTSelect.setValueChangeFunction(dateSet);
        registerMonthTSelect.code = nowDate.getMonth();
        registerDateTSelect = addTSelect(dateSelectBox,[]);
        dateSet();
        registerDateTSelect.code = nowDate.getDate() - 1;
    }
});
const timeTSelectSet = () => {
    registerNone.style.display = 'block';
    registerActTimeSelectBox.style.display = 'block';
    if(registerHourTSelect == null){
        const hourSelectBox = addSelectSetBox(registerActTimeSelectBox);
        Object.assign(hourSelectBox.style,{
            display: 'inline-block',
            verticalAlign: 'top',
            width: '50vw'
        });
        const minuteSelectBox = addSelectSetBox(registerActTimeSelectBox);
        Object.assign(minuteSelectBox.style,{
            display: 'inline-block',
            verticalAlign: 'top',
            width: '50vw'
        });
        registerHourTSelect = addTSelect(hourSelectBox,[]);
        for(let i = 0;i < 24;i++){
            registerHourTSelect.addValue((i < 10?'0' + i:i) + '时');
        }
        registerMinuteTSelect = addTSelect(minuteSelectBox,[]);
        for(let i = 0;i < 60;i++){
            registerMinuteTSelect.addValue((i < 10?'0' + i:i) + '分');
        }
        const nowDate = new Date;
        registerHourTSelect.code = nowDate.getHours();
        registerMinuteTSelect.code = nowDate.getMinutes();
    }
};
//劳动登记页面劳动开始时间点击选择按钮
const registerActStartTime = addRegisterMsg('XX:XX');
registerActStartTime.className = 'registerMsg';
Object.assign(registerActStartTime.style,{
    margin: '3vw 0 0 20vw',
    width: '15vw',
    textAlign: 'center'
});
registerActStartTime.addEventListener('click',() => {
    registerTimeSelectType = 0;
    if(registerHourStart != null){
        registerHourTSelect.value = registerHourStart + '时';
        registerMinuteTSelect.value = registerMinuteStart + '分';
    }
    timeTSelectSet();
});
//劳动登记页面“至”字
const registerTo = z.addElementByArray([
    'div',
    'innerHTML','至',
    'style',[
        'display','inline-block',
        'vertical-align','top',
        'margin','3vw 0 0 0',
        'width','8vw',
        'height','8vw',
        'text-align','center',
        'color','#232325',
        'font-size',z.getFontSize(4),
        'line-height',z.getFontSize(8)
    ]
],registerBox);
//劳动登记页面劳动结束时间点击选择按钮
const registerActEndTime = addRegisterMsg('XX:XX');
registerActEndTime.className = 'registerMsg';
Object.assign(registerActEndTime.style,{
    margin: '3vw 0 0 0',
    width: '15vw',
    textAlign: 'center'
});
registerActEndTime.addEventListener('click',() => {
    registerTimeSelectType = 1;
    if(registerHourEnd != null){
        registerHourTSelect.value = registerHourEnd + '时';
        registerMinuteTSelect.value = registerMinuteEnd + '分';
    }
    timeTSelectSet();
});
//劳动登记页面劳动时间统计信息
const registerActTime = z.addElementByArray([
    'div',
    'innerHTML','共X小时',
    'style',[
        'display','inline-block',
        'vertical-align','top',
        'margin','3vw 0 0 0',
        'width','18vw',
        'height','8vw',
        'text-align','center',
        'color','#807f7f',
        'font-size',z.getFontSize(3),
        'line-height',z.getFontSize(8)
    ]
],registerBox);
//劳动登记页面信息分割线
addRegisterHr();
//劳动登记页面发布组织提示信息
addRegisterMsgName('发布组织');
//劳动登记页面发布组织点击选择按钮
const registerActDepartment = addRegisterMsg('点击选择发布组织');
registerActDepartment.className = 'registerMsg';
registerActDepartment.style.textAlign = 'center';
registerActDepartment.addEventListener('click',() => {
    registerNone.style.display = 'block';
    registerActDepartmentSelectBox.style.display = 'block';
    if(registerActDepartmentTSelect == null){
        registerActDepartmentTSelect = addTSelect(addSelectSetBox(registerActDepartmentSelectBox),['校级','院级']);
    }
});
//劳动登记页面信息分割线
addRegisterHr();
//劳动登记页面劳动地点提示信息
addRegisterMsgName('劳动地点');
//劳动登记页面劳动地点输入框
const registerActAddress = addRegisterMsg();
registerActAddress.contentEditable = true;
registerActAddress.addEventListener('input',function(){
    let Msg = this.innerHTML;
    let enterPress = 0;
    if(Msg.split('<br>').length > 1 && Msg.split('<br>')[Msg.split('<br>').length - 1] == ''){
        let n = 2;
        let j = Msg.split('<br>')[Msg.split('<br>').length - n];
        while(j == '' && Msg.split('<br>').length - n > 0){
            enterPress++;
            n++;
            j = Msg.split('<br>')[Msg.split('<br>').length - n];
        }
    }
    this.style.height = window.innerWidth * 0.08 + 'px';
    this.style.height = Math.round((this.scrollHeight) / (window.innerWidth * 0.08) + enterPress) * (window.innerWidth * 0.08) + 'px';
});
//劳动登记页面信息分割线
addRegisterHr();
//劳动登记页面完成情况提示信息
addRegisterMsgName('完成情况');
//劳动登记页面完成情况输入框
const registerActState = addRegisterMsg();
registerActState.style.height = '24vw';
registerActState.contentEditable = true;
registerActState.addEventListener('input',function(){
    let Msg = this.innerHTML;
    let enterPress = 0;
    if(Msg.split('<br>').length > 1 && Msg.split('<br>')[Msg.split('<br>').length - 1] == ''){
        let n = 2;
        let j = Msg.split('<br>')[Msg.split('<br>').length - n];
        while(j == '' && Msg.split('<br>').length - n > 0){
            enterPress++;
            n++;
            j = Msg.split('<br>')[Msg.split('<br>').length - n];
        }
    }
    this.style.height = window.innerWidth * 0.08 + 'px';
    if(Math.round((this.scrollHeight) / (window.innerWidth * 0.08) + enterPress) > 3){
        this.style.height = Math.round((this.scrollHeight) / (window.innerWidth * 0.08) + enterPress) * (window.innerWidth * 0.08) + 'px';
    }else{
        this.style.height = window.innerWidth * 0.08 * 3 + 'px';
    }
});
//劳动登记页面信息分割线
addRegisterHr();
//劳动登记页面现场图片提示信息
addRegisterMsgName('现场图片');
z.addElementByArray([
    'div',
    'innerHTML','仅允许上传.jpg和.png的图片',
    'style',[
        'display','inline-block',
        'vertical-align','top',
        'margin','0 4vw',
        'width','60vw',
        'height','8vw',
        'color','#807f7f',
        'font-size',z.getFontSize(3),
        'line-height',z.getFontSize(8)
    ]
],registerBox);
//劳动登记页面现场图片及按钮容器
const registerActImgAndBtnBox = z.addElementByArray([
    'div',
    'style',[
        'margin','3vw 33vw',
        'width','20vw',
        'height','25vw'
    ]
],registerBox);
//劳动登记页面现场图片选择状态
let registerSelect = 0;
//劳动登记页面现场图片文件
let registerActImgFile;
//劳动登记页面选择图片事件
function registerBtnFunction(){
    registerActImgBtn.click();
}
//劳动登记页面现场图片
const registerActImg = z.addElementByArray([
    'img',
    'src','btn/picture.png',
    'style',[
        'width','20vw',
        'height','20vw'
    ],
    'function',[
        'click',registerBtnFunction
    ]
],registerActImgAndBtnBox);
//劳动登记页面现场图片点击选择按钮
const registerActBtn = z.addElementByArray([
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
        'click',registerBtnFunction
    ]
],registerActImgAndBtnBox);
//劳动登记页面现场图片文件上传按钮
const registerActImgBtn = z.addElementByArray([
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
                registerActImgFile = this.files[0];
                registerActImg.src = URL.createObjectURL(this.files[0]);
                registerSelect = 1;
            }
            if(registerSelect){
                registerActBtn.innerHTML = '点击更换图片';
                registerActImg.removeEventListener('click',registerBtnFunction);
            }
            //imgFunction(img);
        }
    ]
],registerActImgAndBtnBox);
//劳动登记页面提交按钮
const registerSubmitBtn = z.addElementByArray([
    'div',
    'innerHTML','提交审核',
    'style',[
        'margin','0 30.5vw',
        'width','25vw',
        'height','8.2vw',
        'border','0.4vw #232325 solid',
        'border-radius','3vw',
        'text-align','center',
        'color','#232325',
        'font-size',z.getFontSize(4),
        'line-height',z.getFontSize(8.2)
    ],
    'function',[
        'click',() => {
            registerGrey.style.display = 'block';
        }
    ]
],registerBox);
//劳动登记页面灰色遮罩
const registerGrey = addGrey(register);
//劳动登记页面确认容器
const registerSure = z.addElementByArray([
    'div',
    'style',[
        'margin','calc((100vh - 65vw) / 2) 20vw',
        'width','60vw',
        'height','36vw',
        'border-radius','3vw',
        'background','#FFFFFF'
    ]
],registerGrey);
//劳动登记页面确认容器文字信息
setFontSize(4.5,8,z.addElementByArray([
    'div',
    'innerHTML','请确认信息是否无误!<br>是否确认提交？',
    'style',[
        'padding','4.75vw 0',
        'width','60vw',
        'height','16vw',
        'border-bottom','0.5vw solid #f6b05e',
        'text-align','center',
        'color','#232325'
    ]
],registerSure));
//劳动登记页面确认容器按钮
for(let i = 0;i < 2;i++){
    setFontSize(4.5,10,z.addElementByArray([
        'div',
        'innerHTML',['是','否'][i],
        'style',[
            'display','inline-block',
            'vertical-align','top',
            'width','29.75vw',
            'height','10vw',
            'border-right',['0.5vw solid #f6b05e',''][i],
            'text-align','center',
            'color','#232325'
        ],
        'function',[
            'click',() => {
                registerGrey.style.display = 'none';
            }
        ]
    ],registerSure));
}
//劳动登记页面透明遮罩
const registerNone = z.addElementByArray([
    'div',
    'style',[
        'position','fixed',
        'display','none',
        'top','15vw',
        'width','100vw',
        'height','calc(100vh - 29vw)',
        'background','rgba(0,0,0,0)'
    ]
],register);
//劳动登记页面劳动类别选择容器
const registerTypeSelectBox = addSelectBox(registerNone);
//劳动登记页面劳动类别选择确认按钮
addSelectSureBtn(registerTypeSelectBox).addEventListener('click',() => {
    registerActType.innerHTML = registerTypeTSelect.value;
});
//劳动登记页面劳动类别选择容器分割线
addSelectHr(registerTypeSelectBox);
let registerTypeTSelect = null;

//劳动登记页面劳动日期选择容器
const registerActDateSelectBox = addSelectBox(registerNone);
//劳动登记页面劳动日期选择确认按钮
addSelectSureBtn(registerActDateSelectBox).addEventListener('click',() => {
    const date = new Date();
    date.setFullYear(registerYearTSelect.value.replace('年',''));
    date.setMonth(registerMonthTSelect.value.replace('月','') - 1);
    date.setDate(registerDateTSelect.value.replace('日',''));
    registerActDate.innerHTML = z.getTime('Y/M/D',date);
});
//劳动登记页面劳动日期选择容器分割线
addSelectHr(registerActDateSelectBox);
let registerYearTSelect = null;
let registerMonthTSelect = null;
let registerDateTSelect = null;

//劳动登记发布组织类别选择容器
const registerActDepartmentSelectBox = addSelectBox(registerNone);
//劳动登记页面发布组织选择确认按钮
addSelectSureBtn(registerActDepartmentSelectBox).addEventListener('click',() => {
    registerActDepartment.innerHTML = registerActDepartmentTSelect.value;
});
//劳动登记页面发布组织选择容器分割线
addSelectHr(registerActDepartmentSelectBox);
let registerActDepartmentTSelect = null;

//劳动登记发布组织类别选择容器
const registerActTimeSelectBox = addSelectBox(registerNone);
//劳动登记页面发布组织选择确认按钮
addSelectSureBtn(registerActTimeSelectBox).addEventListener('click',() => {
    if(registerTimeSelectType){
        registerHourEnd = registerHourTSelect.value.replace('时','');
        registerMinuteEnd = registerMinuteTSelect.value.replace('分','');
        registerActEndTime.innerHTML = registerHourEnd + ':' + registerMinuteEnd;
    }else{
        registerHourStart = registerHourTSelect.value.replace('时','');
        registerMinuteStart = registerMinuteTSelect.value.replace('分','');
        registerActStartTime.innerHTML = registerHourStart + ':' + registerMinuteStart;
    }
    registerActTime.innerHTML = '共' + ((((+registerHourEnd) - (+registerHourStart)) * 60 + (+registerMinuteEnd) - (+registerMinuteStart)) / 60).toFixed(2) + '小时';
});
//劳动登记页面发布组织选择容器分割线
addSelectHr(registerActTimeSelectBox);
let registerHourTSelect = null;
let registerMinuteTSelect = null;
let registerTimeSelectType = 0;
let registerHourStart = null;
let registerMinuteStart = null;
let registerHourEnd = null;
let registerMinuteEnd = null;