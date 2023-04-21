<template>
	<view class="container">
		<view class="top">
			<view class="head">
				<h2 class="title">贵州商学院</h2>
				<image src="../../images/logo.png">
			</view>
			<view class="swip">
				<swiper :autoplay="true" :circular="true">
					<swiper-item>
						<view class="swiper-item">
							<image src="../../images/sw1.jpg" mode=""></image>
						</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item">
							<image src="../../images/sw2.jpg" mode=""></image>
						</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item">
							<image src="../../images/sw3.png" mode=""></image>
						</view>
					</swiper-item>
				</swiper>
			</view>
			
			<view class="menu">
				<image src="../../images/top_half.jpg"></image>
				<view class="opt">
					<image src="../../images/weixiu.jpg" class="f"></image>
					<!-- <button class="leave"></button> -->
					<image src="../../images/qin.jpg" class="s" @tap="to_leave"></image>
					<image src="../../images/half.jpg" class="t"></image>
				</view>
			</view>
		</view>
		
		<view class="bottom">
			<image src="../../images/bottom.jpg"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'hello'
			}
		},
		methods: {
			to_leave() {
				uni.navigateTo({
					url:"../newLeave/newLeave"
				});
				//return true;
			}
		}
		
	}
</script>

<style>
	.container {
		width: 100%;
		height: 1550rpx;
		display: flex;
		flex-direction: column;
		background-color: rgb(241,242,246);
		margin-top: 60rpx;
		position: fixed;
	}
	.top{
	    display: flex;
		flex-direction: column;
	    background-color: white;
	    width: 100%;
	    height: 50%;
	    border-radius: 15rpx;
		
	}
	.head{
	   display: flex;
	   flex-direction: row;
	   justify-content: space-between;
	   padding-left: 56rpx;
	   padding-right: 50rpx;
	}
	.head .title{
		margin-top: 6rpx;
		font-size: 44rpx;
	}
	.head image{
	   width: 60rpx;
	   height: 60rpx;
	   margin-top: 10rpx;
	}
	.swip{
		width: 100%;
		height: 100rpx;
		margin-top: 50rpx;
	}
	.swip image{
		display: block;
		margin: 0 auto;
		border-radius: 30rpx;
		height: 250rpx;
	}
	.menu{
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 340rpx;
		margin-top: 150rpx;
	}
	.menu image{
		width: 100%;
		height: 170rpx;
	}
	.opt{
		display: flex;
		flex-direction: row;
		width: 100%;
		height: 100rpx;
	}
	.opt .f{
		margin-left: 20rpx;
		width: 36%;
		height: 160rpx;
	}
	.opt .s{
		width: 36%;
		height: 160rpx;
	}
	.opt .t{
		width: 100%;
		height: 160rpx;
	}
	.bottom{
		width: 100%;
		background-color: white;
		border-radius: 15rpx;
		margin-top: 20rpx;
		bottom: 0;
	}
	.bottom image{
		margin-left: 10rpx;
		width: 100%;
		height: 800rpx;
	}
</style>
