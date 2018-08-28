import  Koa from "koa"

const app:Koa = new Koa()

const timeout:number = 86400

const log = async (ctx:Koa.Context, next:Function) => {
	const start:number = Date.now()
	await next()
	const end:number = Date.now();
	const diff = end - start
	console.log(`cost is: ${diff}`)
}

app.use(log)

app.use(async function(ctx: Koa.Context) {
	ctx.body = `${app.env}`
})


const server = app.listen(3000)
server.timeout = timeout