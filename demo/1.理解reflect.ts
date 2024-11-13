/**
 * Reflect
 * 其实是ES6新引入的一个对象,他提供了一些反射方法
 * 他提供的方法中,其实以前都分散在Object或Function上
*/

interface T {
	userName: string
	age: number
	address: string
}

const testObj: T = {
	userName: "张三",
	age: 0,
	address: ''
}

// 获取某个对象中的某个属性
const userName = Reflect.get(testObj, 'userName')
console.log(userName) // 张三

// 为某个对象中添加某个属性
Reflect.set(testObj, 'age', 18)
console.log(testObj) // { userName: '张三', age: 18 }

// 检查某个对象中是否包含某个属性?
const isHasAge = Reflect.has(testObj, 'age')
console.log(isHasAge) // true

// Reflect.defineProperty == Object.defineProperty
Reflect.defineProperty(testObj, 'address', {
	value: '北京市',
	writable: false // 不可写的,只读,修改无效
})

testObj.address = '天津市'
console.log(testObj) // { userName: '张三', age: 18, address: '北京市' }

// 删除某个对象中的某个属性
Reflect.deleteProperty(testObj, 'age')
console.log(testObj) // { userName: '张三', address: '北京市' }