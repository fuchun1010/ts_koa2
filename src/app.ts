import  Koa from "koa"
import  KoaRouter from 'koa-router'

const app:Koa = new Koa()
const router = new KoaRouter()

const timeout:number = 86400

const log = async (ctx:Koa.Context, next:Function) => {
	const start:number = Date.now()
	await next()
	const end:number = Date.now();
	const diff = end - start
	console.log(`cost is: ${diff}`)
}

const display = async (ctx:Koa.Context, next:Function) => {
	console.log(`this is display`)
	await next();
}

app.use(log)
app.use(display)

app.on('error', (error:Error, ctx:Koa.Context) => {
	ctx.throw(500, 'server error')
	console.log('server error:', error.message)
})

app.use(async function(ctx: Koa.Context) {
	ctx.body = `${app.env}`
})



const server = app.listen(3000)
server.timeout = timeout