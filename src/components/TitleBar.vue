<template>
  <transition name="slide-down">
    <div  v-show="ifTitleAndMenuShow">
      <div class="title-wrapper" v-show="isShow" :style="{paddingTop:paddingTop}">
        <div class="left" id="gobackAction">
          <span class="icon-back icon"></span>
          <div class="name-css">{{name}}</div>
        </div>
<!--        <div class="right">
          <div class="icon-wrapper">
            <span class="icon-cart icon"></span>
          </div>
          <div class="icon-wrapper">
            <span class="icon-person icon"></span>
          </div>
          <div class="icon-wrapper">
            <span class="icon-more icon"></span>
          </div>
        </div>-->
      </div>
    </div>
    </transition>
</template>

<script>
export default {
  props: {
    ifTitleAndMenuShow: {
      type: Boolean,
      default: false
    }
  },
  data(){
    return{
      paddingTop:'0',
      isShow:true,
      name:''
    }
  },
  beforeMount() {
    let that=this;
    if(that.getUrlParam('plat')){
      that.name=decodeURI(that.getUrlParam('tname'))
      let plat=that.getUrlParam('plat');
      if(plat=='android'){
        that.paddingTop=that.getUrlParam('h')+'px'
      }
    }else {
      that.isShow=false;
    }
  },
  methods:{
    getUrlParam(name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); // 构造一个含有目标参数的正则表达式对象
      var r = window.location.search.substr(1).match(reg); // 匹配目标参数
      if (r != null) return r[2];
      return null; // 返回参数值
    }
  }
}


</script>

<style lang='scss' scoped>
@import '../assets/styles/global';
.title-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 101;
    display: flex;
  justify-content: flex-start;
  align-items: center;
    width: 100%;
    height: px2rem(48);
    background: white;
    box-shadow: 0 px2rem(8) px2rem(8) rgba(0, 0, 0, .15);
    .left {
      cursor: pointer;
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
  .name-css{
    padding-left:px2rem(12);
    font-size: px2rem(12);
    color: #666666;
  }
    .right {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      .icon-wrapper {
        flex: 0 0 px2rem(40);
        @include center;
        .icon-cart {
          font-size: px2rem(22);
        }
      }
    }
  }
</style>
