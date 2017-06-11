var router = require('koa-router')();
router.prefix('/room')//路由头
router.get('/', async function (ctx, next) {
  let loginbean = ctx.session.loginbean;
  console.log('loginbean:'+loginbean);
  if(!loginbean){
  	ctx.body='0';
  	return;
  }
  ctx.body='1';
})
module.exports = router;