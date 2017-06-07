<template>
	<div>
		<el-button type="success" @click='openNewRoom'>新建房间</el-button><br/>
		<el-form ref="newRoomForm" name='newRoomForm' style='display:none'>
			<br/>
					<el-form-item style='text-align: center;margin:0px;'>
					</el-form-item>
				  <el-form-item >
				    <el-input placeholder="设置密码,无密码任何人都可进入" class='elInputClass' name='roompwd'></el-input>
				    <center>
				    <el-button type="primary">创建房间</el-button>
				    <el-button @click='hidNewRoom'>收起</el-button>
				    </center>
				  </el-form-item>
				</el-form>
	</div>
</template>
<script>
export default {
  methods:{
  	openNewRoom:function(){
  		$(newRoomForm).show();
  	},
  	hidNewRoom:function(){
  		$(newRoomForm).hide();
  	}
  }
}
</script>