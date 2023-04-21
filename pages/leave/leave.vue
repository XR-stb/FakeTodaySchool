<template>
	<view class="container">
		<view class="top" @tap="gotoPre">
			<view class="back" >
				<image src="../../images/back.png"></image>
			</view>
			
			<text class="title">请假</text>
		</view>
		<view class="mid">
			<view class="left txtColor">
				<p>请假类型</p>
				<p>请假性质</p>
				<p>请假日期</p>
				<p>请假天数</p>
				<p>请假事由</p>
				<p>证明材料</p>
				<p>手机号</p>
			</view>
			<view class="right rightText">
				<p>{{this.type}}</p>
				<p>{{this.property}}</p>
				<p>{{this.year}}-{{this.month}}-{{this.day}} 至 {{this.endyear}}-{{this.endmonth}}-{{this.endday}}</p>
				<p>{{this.len}}</p>
				<p>{{this.reason}}</p>
				<p>暂无</p>
				<p>{{this.phone}}</p>
			</view>
		</view>
		
		<view class="bottom">
			<view class="shang">
				<h3>审核流程</h3>
				<view class="line"></view>
			</view>
			<view class="xia txtColor">
				<view class="time">
					<view class="start">{{this.year}}-{{this.month}}-{{this.day}}</view>
					<view class="end">{{this.year}}-{{this.month}}-{{this.day}}</view>
					<view class="hour">{{this.hour}}:{{this.minute}}:{{this.second}}</view>
				</view>
				<view class="logo">
					<image src="../../images/yesLogo.png"></image>
				</view>
				<view class="result">
					<text>提交申请</text><br /><br />
					<text>辅导员审核</text>
					<text>通过</text>
					<text>审核人：{{this.person}}</text>
					<text>审核意见：{{this.res}}</text>
					<text class="res_end">结束</text>
				</view>
			</view>
			<view class="xiaojia">定位销假</view>
		</view>
	</view>
</template>
<script>
	import dayjs from '@/pages/leave/dayjs.min.js';
	export default {
		data() {
			return {
				nowTime: '',
				type:'事假',
				property:'因私请假',
				len:'1',
				reason:'外出考试',
				phone:'15337469748',
				person:'李老师',
				res:'审核通过',
				year:'',
				month:'',
				day:'',
				endyear:'',
				endmonth:'',
				endday:'',
				hour:'',
				minute:'',
				second:''
			}
		},
		methods: {
			gotoPre:function(){
			    uni.navigateBack()//返回上一页
			},
			onLoad : function(option){
				var date = new Date();
				this.year = date.getFullYear(); //年
				if(date.getMonth()+1 < 10) this.month += '0';
				this.month += (date.getMonth() + 1); //月
				this.day = date.getDate(); //日
				//dayjs().add(1, 'day')
				//console.log(dayjs().add(1, 'day').format('YYYY-MM-DD'));
				this.endyear = dayjs().add(parseInt(this.len)-1, 'day').format('YYYY');
				this.endmonth = dayjs().add(parseInt(this.len)-1, 'day').format('MM');
				this.endday = dayjs().add(parseInt(this.len)-1, 'day').format('DD');
				this.hour = dayjs().add(Math.floor((Math.random()*1)+1), 'hour').add(Math.floor((Math.random()*60)+1)).format('HH');
				this.minute = dayjs().add(Math.floor((Math.random()*1)+1), 'hour').add(Math.floor((Math.random()*60)+1), 'minute').format('mm');
				this.second = dayjs().add(Math.floor((Math.random()*1)+1), 'hour').add(Math.floor((Math.random()*60)+1), 'minute').add(Math.floor((Math.random()*60)+1),'second').format('ss');
				//console.log(parseInt(this.len)+2);
				// uni.getStorage({
				// 	key:'type',
				// 	success: function (res) {
				// 		console.log(res.type);
				// 	}
				// }).then(res => {
				// 	return uni.getStorage({
				// 		key:'property',
				// 		success: function (res) {
				// 			console.log(res.property);
				// 		}
				// 	})
				// }).then(res => {
				// 	return uni.getStorage({
				// 		key:'len',
				// 		success: function (res) {
				// 			console.log(res.len);
				// 		}
				// 	})
				// }).then(res => {
				// 	return uni.getStorage({
				// 		key:'reason',
				// 		success: function (res) {
				// 			console.log(res.reason);
				// 		}
				// 	})
				// }).then(res => {
				// 	return uni.getStorage({
				// 		key:'phone',
				// 		success: function (res) {
				// 			console.log(res.phone);
				// 		}
				// 	})
				// });
				// this.type = '事假';
				// this.property = '因私请假';
				// this.len = '1';
				// this.reason = '寝室睡觉';
				// this.phone = '12345678912';
				// this.person = '辅导员';
				// this.red = '审核通过';
				if(option.type){
					this.type = option.type;
					this.property = option.property;
					this.len = option.len;
					this.reason = option.reason;
					this.phone = option.phone;
					this.person = option.person;
					this.red = option.res;
				}
				
				uni.setStorage({
				    key: 'type',
				    data: this.type,
				}).then(res => {
					return uni.setStorage({
						key:'property',
						data: this.property,
					})
				}).then(res => {
					return uni.setStorage({
						key:'len',
						data: this.len,
					})
				}).then(res => {
					return uni.setStorage({
						key:'reason',
						data: this.reason,
					})
				}).then(res => {
					return uni.setStorage({
						key:'phone',
						data: this.phone,
					})
				})
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
		background: rgb(249,249,249);
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
	.mid{
		width: 100%;
		height: 520rpx;
		background: white;
		margin-top: 30rpx;
		display: flex;
		flex-direction: row;
	}
	.mid p{
		margin-top: 20rpx;
	}
	.left{
		margin-left: 50rpx;
	}
	.right{
		margin-left: 100rpx;
	}
	.bottom{
		width: 100%;
		height: 800rpx;
		background: white;
		margin-top: 50rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.shang{
		width: 100%;
		height: 100rpx;
		background: white;
		
	}
	.shang h3{
		margin-left: 50rpx;
		margin-top: 25rpx;
		font-size: 35rpx;
		font-weight: 400;
	}
	.line{
		width: 95%;
		height: rpx;
		border-top: solid rgba(211,211,211, 0.5) 1px;
		margin-left: 50rpx;
		margin-top: 30rpx;
	}
	
	.xia{
		width: 100%;
		height: 500rpx;
		background: white;
		display: flex;
		flex-direction: row;
		margin-top: 15rpx;
		background-color: white;
	}
	.time{
		height: 300;
		display: flex;
		flex-direction: column;
		background: white;
	}
	.start{
		margin-top: 20rpx;
		margin-left: 100rpx;
	}
	.end{
		margin-top: 80rpx;
		margin-left: 100rpx;
	}
	.hour{
		margin-top: 30rpx;
		margin-left: 146rpx;
	}
	.logo image{
		width: 100rpx;
		transform: scale(0.9);
		margin-top: -25rpx;
	}
	.result{
		display: flex;
		flex-direction: column;
		margin-top: 15rpx;
	}
	.res_end{
		margin-top: 65rpx;
	}
	.xiaojia{
		width: 90%;
		height: 80rpx;
		text-align: center;
		border: solid rgba(211,211,211, 0.5) 1px;
		font-size: 36rpx;
		line-height: 80rpx;
		border-radius: 8rpx;
	}
</style>
