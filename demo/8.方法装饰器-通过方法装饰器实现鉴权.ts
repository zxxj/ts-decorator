
const authorize = (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {

	// 先获取老的函数
	const originalMethod = descriptor.value

	// 重写原型上的属性
	descriptor.value = function(...args: any[]) {
		// 根据传入的userId参数匹配users数组中的数据
		const user = users[args[0]] 

		// 如果当前用户数据存在并且当前用户的角色包含了admin则会调用原始的deleteUser方法,并将原始参数传递给他,否则抛出一个异常
		if(user && user.roles.includes('admin')) {
			originalMethod.apply(this, args)
		}else {
			throw new Error('没有权限删除用户')
		}

		console.log('descriptor',descriptor)
		// 返回 descriptor：方法装饰器可以返回一个新的或修改过的属性描述符对象 descriptor。这个返回值将用来替换或更新原有的方法描述符。
		// 如果你修改了 descriptor（如在代码中重写了 descriptor.value），并返回这个 descriptor，TypeScript 或 JavaScript 会将这个新的描述符应用到目标对象的方法上。
		return descriptor
	}
}

class AdminPanel {
	@authorize
	deleteUser(userId: string) {
		console.log(`deleted ${ userId }`)
	}
}

const users = {
	"1": { roles: ['admin'] },
	"2": { roles: ['member'] },
}

const test = new AdminPanel()
test.deleteUser('1')