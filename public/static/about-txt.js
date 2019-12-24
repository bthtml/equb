//页面级XMLHttp对象
var xmlhttp;
//向服务器发送信息函数
function getPage(pageURL) {
    xmlhttp = createXMLHttp();
    if (xmlhttp)
    {
        xmlhttp.onreadystatechange = setPageData;
        xmlhttp.open('GET', pageURL);
        xmlhttp.send(null);
    }else{
        /*alert("XMLHttpRequest对象为空");*/
    }
}
//回调函数，获得从服务器回发的文档信息并显示在disp层中
function setPageData(){
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
        var word = bytes2BSTR(xmlhttp.responseBody);
        document.getElementById("disp").innerHTML = word ;
    }
}
//创建XMLHttp对象，用于读取远程文档
function createXMLHttp(){
    try {
        return new ActiveXObject ("Microsoft.XMLHTTP");
    }catch(e){
        try {
            return new XMLHttpRequest();
        }catch(e) {
            return null;
        }
    }
}
export {
    getPage
}