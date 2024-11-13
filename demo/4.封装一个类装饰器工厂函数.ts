
// 类装饰器工厂,是一个返回装饰器的函数,可以接收参数来控制装饰器的行为
const logCalssNameWithPrams = (message: string) => {
	return (constructor: Function) => {
		console.log(constructor.name, message)
	}
}

@logCalssNameWithPrams('class created')
class Car {

}

@logCalssNameWithPrams('class created~')
class Person {

}
