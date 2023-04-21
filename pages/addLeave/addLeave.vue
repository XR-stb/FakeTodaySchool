<template>
	<view class="container">
		<view>请假类型</view>
		<radio-group @change="getType">
			<radio :value="'病假'"/> 病假
			<radio :value="'事假'"/> 事假
		</radio-group>
		<view>请假性质</view>
		<radio-group @change="getPro">
			<radio :value="'因私请假'"/> 因私请假
			<radio :value="'因公请假'"/> 因公请假
		</radio-group>
		<view>请假天数</view>
		<radio-group @change="getLen">
			<radio :value="'1'"/> 1
			<radio :value="'2'"/> 2
		</radio-group>
		<view>请假事由</view>
		<input class="input" maxlength="20" placeholder="请输入请假事由" @input="getReason"/>
		<view>手机号</view>
		<input class="input" maxlength="20" placeholder="请输入手机号" @input="getPhone"/>
		<view>审核人</view>
		<input class="input" maxlength="20" placeholder="请输入审核人" @input="getPerson"/>
		<view>审核意见</view>
		<input class="input" maxlength="20" placeholder="请输入审核意见" @input="getRes"/>
		
		<button @tap="cli" type="primary" class="btn">确定</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				type:'事假',
				property:'因私请假',
				len:'1',
				reason:'外出考试',
				phone:'15117469748',
				person:'李老师',
				res:'审核通过'
			}
		},
		methods: {
			cli() {
				// uni.setStorage({
				//     key: 'type',
				//     data: this.type,
				// }).then(res => {
				// 	return uni.setStorage({
				// 		key:'property',
				// 		data: this.property,
				// 	})
				// }).then(res => {
				// 	return uni.setStorage({
				// 		key:'len',
				// 		data: this.len,
				// 	})
				// }).then(res => {
				// 	return uni.setStorage({
				// 		key:'reason',
				// 		data: this.reason,
				// 	})
				// }).then(res => {
				// 	return uni.setStorage({
				// 		key:'phone',
				// 		data: this.phone,
				// 	})
				// });
				//console.log('jump');
				uni.redirectTo({
					url:`../leave/leave?type=${this.type}&property=${this.property}&len=${this.len}&reason=${this.reason}&phone=${this.phone}&person=${this.person}&res=${this.res}`
				});
			},
			getType: function(event) {
				this.type = event.detail.value
			},
			getPro: function(event) {
				this.property = event.detail.value;
			},
			getLen: function(event) {
				this.len = event.detail.value;
			},
			getReason: function(event) {
				this.reason = event.detail.value;
			},
			getPhone: function(event) {
				this.phone = event.detail.value;
			},
			getPerson:function(event) {
				this.person = event.detail.value;
			},
			getRes:function(event) {
				this.res = event.detail.value;
			}
		}
	}
</script>

<style>
	.container{
		margin-top: 150rpx;
	}
	.input{
		border: solid 5rpx darkgray;
		
	}
	.btn{
		margin: 100rpx;
		width: 300rpx;
		height: 100rpx;
	}
</style>
