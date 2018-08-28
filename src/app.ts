import  Koa from "koa"

const app:Koa = new Koa()

const timeout:number = 86400

app.use(async function(ctx: Koa.Context) {
	ctx.body = 'hello, ts koa'
})

app.listen(3000)