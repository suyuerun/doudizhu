var router = require('koa-router')();

router.get('/getRoomList', async function (ctx, next) {
	console.log('aaaaaaaaaaa');
  let loginbean = ctx.session.loginbean;
  console.log('loginbean:'+loginbean);
  if(!loginbean){
  	ctx.body='登陆过期';
  	return;
  }
  ctx.body=[];
})
module.exports = router;