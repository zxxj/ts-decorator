// 简单的类装饰器
// constructor: 是TestClass这个类构造函数的定义
const logClass = (constructor: Function) => {
	console.log("TestClass created", constructor.name)
}

@logClass
class TestClass {

	constructor(public name: string) {

	}
}