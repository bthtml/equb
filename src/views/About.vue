<template>
    <div class="about">
      <div id="disp" class="txt-css"></div>
    </div>
</template>
<script>
/*    import { getPage } from '../assets/js/about-txt'*/
    var xmlhttp,that;
    export default {
        data() {
            return {}
        },
      mounted(){
          that=this;
        let txt=that.getPage(that.$route.query.url);
        window.console.log(txt);
      },
        methods: {
            getPage(pageURL) {
                xmlhttp = new XMLHttpRequest();
                if (xmlhttp)
                {
                    xmlhttp.open('GET', pageURL);
                    xmlhttp.overrideMimeType("text/html;charset=gbk");
                    xmlhttp.send(null);
                    xmlhttp.onreadystatechange = function () {
                        if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
                            window.console.log(xmlhttp)
                            var word = xmlhttp.responseText;
                            word=word.replace(/(\r)*\n/g,"<br/>").replace(/\s/g,"&nbsp;")
                            document.getElementById("disp").innerHTML = word ;
                        }
                    };
                }else{
                    alert("XMLHttpRequest对象为空");
                }
            },
/*            createXMLHttp(){
                try {
                    return new ActiveXObject("Microsoft.XMLHTTP");
                }catch(e){
                    try {
                        return new XMLHttpRequest();
                    }catch(e) {
                        return null;
                    }
                }
            }*/
        }
    }
</script>
<style lang='scss' scoped>
    @import '../assets/styles/global';
    .txt-css{
        font-size: px2rem(14);
        line-height: px2rem(28);
    }
</style>

