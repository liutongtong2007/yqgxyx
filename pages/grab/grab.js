const utils = require('../../utils/util.js');
Page({
	data:{
		goodsData: '',
		idx: 1
	},
	onLoad: function(){
		const that = this;
		this.getGoods();
	},
	getGoods: function(idx){
		const that = this;
		idx ? idx : idx = 1;

		utils.getData(utils.baseUrl + 'grab.php?idx='+idx, 'get', '', function (res) {
			that.setData({
				goodsData: res
			})
		})
	},
	onReachBottom: function () {
		let idx = parseInt(this.data.idx);

		idx++;
		this.setData({
			idx: idx
		})
		this.getGoods(idx);
	}
})