按照uni-app正常的引入内部web页面一样的流程引入当前文件即可

引入html教程 [URL](https://ask.dcloud.net.cn/article/35083).
### 具体方法
```
<template>  
    <view>  
        <web-view :src="websrc"></web-view>  
    </view>  
</template>  

<script>  
    export default { 
	data() {
		return {
			websrc: '',
		};
	},
    onLoad(option) {
		let that = this;
		 //url-equb电子书的下载路径
		let url=option.weburl;
		//#ifdef APP-PLUS
		uni.getSystemInfo({
			success: function(res) {
				//platform-区分ios与安卓
				that.platform=res.platform;
				uni.showLoading({
				    title: '电子书加载中...'
				});
				//tname-电子书名称
				that.websrc = '/hybrid/html/index.html?plat=' + res.platform + '&h=' + res.statusBarHeight+'&url='+encodeURIComponent(url)+'&tname='+encodeURI(option.name);
				setTimeout(function () {
				    uni.hideLoading();
				}, 5000);
			}
		});
		//#endif
	},
    }  
</script>
```

