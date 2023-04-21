<view class="swip">
	<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" class="carousel">
		<swiper-item>
			<image src="images/sw1.jpg" class="carousel"></image>
		</swiper-item>
		<swiper-item>
			<image src="images/sw2.jpg"  class="carousel"></image>
		</swiper-item>
		<swiper-item>
			<image src="images/sw3.png"  class="carousel"></image>
		</swiper-item>
	</swiper>
<view class="swip">
<script>
	export default {
		data() {
			return {
				bannerList: [
					"images/sw1.jpg",
					"images/sw2.jpg",
					"images/sw3.jpg"
				],
			}
		}
	}
</script>
<script>
	
	export default {
		onLaunch: function() {
			console.warn('当前组件仅支持 uni_modules 目录结构 ，请升级 HBuilderX 到 3.1.0 版本以上！')
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import '@/uni_modules/uni-scss/index.scss';
	/* #ifndef APP-NVUE */
	@import '@/static/customicons.css';
	// 设置整个项目的背景色
	page {
		background-color: #f5f5f5;
	}

	/* #endif */
	.example-info {
		font-size: 14px;
		color: #333;
	}
</style>
