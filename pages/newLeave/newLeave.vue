<template>
	<view class="container">
		<view class="top">
			<view class="back" @tap="gotoPre">
				<image src="../../images/back.png"></image>
			</view>
			
			<text class="title">请假</text>
		</view>
		<view class="info" @tap="toLeave">
			<view class="left">
				<p>事假</p>
				<p class="data">2022-03-05 至 2022-03-05 / 共1天</p>
			</view>
			<view class="right">
				<view class="shang">
					<view class="dot"></view>
					<text>已销假</text>
				</view>
				<view class="res">
					已定位返校签到
				</view>
			</view>	
		</view>
		<view class="info">
			<view class="left">
				<p>事假</p>
				<p class="data">2022-03-05 至 2022-03-05 / 共1天</p>
			</view>
			<view class="right">
				<view class="shang">
					<view class="dot"></view>
					<text>已销假</text>
				</view>
				<view class="res">
					已定位返校签到
				</view>
			</view>	
		</view>
		<view class="info">
			<view class="left">
				<p>事假</p>
				<p class="data">2022-03-05 至 2022-03-05 / 共1天</p>
			</view>
			<view class="right">
				<view class="shang">
					<view class="dot"></view>
					<text>已销假</text>
				</view>
				<view class="res">
					已定位返校签到
				</view>
			</view>	
		</view>
		<view class="info">
			<view class="left">
				<p>病假</p>
				<p class="data">2022-03-05 至 2022-03-05 / 共1天</p>
			</view>
			<view class="right">
				<view class="shang">
					<view class="dot"></view>
					<text>已销假</text>
				</view>
				<view class="res">
					已定位返校签到
				</view>
			</view>	
		</view>
		<view class="info">
			<view class="left">
				<p>事假</p>
				<p class="data">2022-03-05 至 2022-03-05 / 共1天</p>
			</view>
			<view class="right">
				<view class="shang">
					<view class="dot"></view>
					<text>已销假</text>
				</view>
				<view class="res">
					已定位返校签到
				</view>
			</view>	
		</view>
		<view class="info">
			<view class="left">
				<p>病假</p>
				<p class="data">2022-03-05 至 2022-03-05 / 共1天</p>
			</view>
			<view class="right">
				<view class="shang">
					<view class="dot"></view>
					<text>已销假</text>
				</view>
				<view class="res">
					已定位返校签到
				</view>
			</view>	
		</view>
		<view class="add" @tap="toAdd">
			<image src="../../images/add.png"></image>
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
			gotoPre:function(){
			    uni.navigateBack()//返回上一页
			},
			toAdd() {
				uni.navigateTo({
					url:"../addLeave/addLeave"
				});
			},
			toLeave() {
				uni.navigateTo({
					url:"../leave/leave"
				});
			}
		}
		
	}
</script>

<style>
	.txtColor{
		color: #696969;
		font-size: 32rpx;
	}
	.rightText{
		font-size: 32rpx;
	}
	.container{
		width: 100%;
		height: 1630rpx;
		margin-top: 100rpx;
		position: fixed;
	}
	.top{
		width: 100%;
		height: 90rpx;
		background: white;
		text-align: center;
		display: flex;
		flex-direction: row;
		border-bottom: rgb(232,232,232) solid 1rpx;
	}
	.back{
		display: flex;
		flex-direction: row;
		width: 140rpx;
		margin-left: 40rpx;
		justify-content: space-between;
	}
	.top image{
	   width: 50rpx;
	   height: 50rpx;
	   margin-top: 5rpx;
	}
	.top text{
		font-size: 36rpx;
		width: 56%;
		text-align: center;
	}
	.info{
		width: 100%;
		height: 170rpx;
		border-bottom: rgb(232,232,232) solid 1rpx;
		margin-top: 15rpx;
		display: flex;
		flex-direction: row;
	}
	.left{
		margin-left: 50rpx;
		width: 40%;
	}
	.data{
		margin-top: 20rpx;
		font-size: 30rpx;
		color: rgb(146,149,156);
	}
	
	.right{
		display: flex;
		flex-direction: column;
		height: 100%;
		width: 50%;
		/* background-color: red; */
		overflow: hidden;
	}
	.shang{
		display: flex;
		flex-direction: row;
		width: 100%;
		margin-left: 250rpx;
		margin-top: 5rpx;
		/* background-color: green; */
	}
	.dot{
		width: 13rpx;
		height: 13rpx;
		background: rgb(162,209,107);
		border-radius: 50%;
		margin-top: 15rpx;
		
	}
	.shang text{
		font-size: 30rpx;
		margin-left: 15rpx;
	}
	.res{
		font-size: 30rpx;
		color: rgb(81,199,201);
		margin-top: 50rpx;
		margin-left: 160rpx;
	}
	.add{
		left: 82%;
		top: 90%;
		position: fixed;
	}
	.add image{
		width: 100rpx;
		height: 100rpx;
	}
</style>
