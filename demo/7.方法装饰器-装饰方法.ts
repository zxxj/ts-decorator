
/**
 * @param target: 装饰的目标对象,如果是静态成员则是类的构造函数,如果是实例成员则是类的原型对象
 * @param propertyKey: 装饰的成员名称
 * @param descriptor: 成员的属性描述符
 * 
 * AOP: 面向切面编程: 如何理解? 包装原先的老逻辑,在老逻辑前面或后面做一些额外的事情
 */
const log = (target, propertyKey, descriptor) => {
	console.log('target', target) // {}
	console.log('propertyKey', propertyKey) // propertyKey sum
	console.log('descriptor', descriptor)
	console.log(TestClass.prototype) // {}

	// 获取老的函数
	const originalMethod = descriptor.value

	// 重写原型上的属性
	descriptor.value = function(...args: any[]) {
		console.log(`谁调用的:${propertyKey}, 参数是:${args}`) // 谁调用的:sum, 参数是:1,2
		const result = originalMethod.apply(this, args)
		console.log(`result: ${result}`) // result: 3
		return result
	}
}

class TestClass {
	public name: string
	constructor() {
		console.log("instace created")
	}
	
	@log
	sum(num1: number, num2: number) {
		return num1 + num2
	}
}

const test = new TestClass()
test.sum(1, 2)

export {}