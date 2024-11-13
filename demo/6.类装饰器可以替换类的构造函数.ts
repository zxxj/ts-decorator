// 类装饰器可以替换类的构造函数
// 可以通过返回一个新的构造函数来替换原有的构造函数

function repalceConstructor<T extends { new (...args : any[]): {}}>(constructor: T) {
	return class extends constructor {
		constructor(...args) {
			super(...args)
			console.log(...args)
			console.log('instance created')
		}
	}
}

@repalceConstructor
class User {
	constructor(public userName: string) {
		console.log('User instance created')
	}
}

const user = new User("xin")
console.log(user.userName)