/**
 * reflect-metadata是一个用于ts和ecma的元数据反射库提案
 * 它通过提供对元数据定义和检查的支持,简化了装饰器的使用
 * 可以在类/方法/参数/属性上设置和获取元数据
 */

import "reflect-metadata" // 引入反射元数据

class TestClass {

	private userName: string

	constructor(value: string) {
		this.userName = value
	}

	@Reflect.metadata("customKey", "costomValue")
	eat() {
		console.log("eat fn")
	}
}

const instance = new TestClass("xin")
// 为instance上的userName属性上定义一个元数据,属性是key1,值是value1
Reflect.defineMetadata("key1", "value1", instance, 'userName')

// 检查某个实例中是否具有指定的元数据
const isHasMetadata = Reflect.hasMetadata("key1", instance, 'userName')
console.log(isHasMetadata) // true

// 获取某个元数据
const matadataValue = Reflect.getMetadata('key1', instance, 'userName')
console.log(matadataValue) // value1

// 获取自有元数据(非原型上的) 针对方法
const ownMetadataValue = Reflect.getOwnMetadata("customKey", TestClass.prototype, "eat")
console.log(ownMetadataValue) // costomValue

const ownMetadataValue2 = Reflect.getOwnMetadata("customKey", Reflect.getPrototypeOf(instance), "eat")
console.log(ownMetadataValue2) // costomValue

const ownMetadataValue3 = Reflect.getOwnMetadata("customKey", instance, "eat")
console.log(ownMetadataValue3) // undefined, 直接用new出来的类实例取是undefined,因为方法挂在了原型上

// 删除元数据
Reflect.deleteMetadata("key1", instance, "userName")
const metadataValueAfter = Reflect.hasMetadata("key1", instance, "userName")
console.log(metadataValueAfter) // false





 
