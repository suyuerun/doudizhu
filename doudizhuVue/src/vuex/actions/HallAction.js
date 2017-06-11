import { axGet } from '../../common/HttpBean'

export function getRoomList(thisa) {
	axGet('/api/hall/getRoomList', {}, function(res) {
		//			alert(res.data);
		thisa.roomList = res.data;
	}, function(err) {
		alert(err);
	});
};
export function newRoom(formObj,thisa){//注册方法
	axGet('/api/hall/newroom?'+formObj,{},function(res){//提交到服务端
	console.log("22222222222222222222222222222222")
       console.log(res.data);
	   if (res.data){
      	 // thisa.$router.push('/room');//跳转到游戏大厅
      	 thisa.$router.push({path:'/room',query:res.data});//带参跳转
       }

    },function(err){
        alert(err);
    });
}
