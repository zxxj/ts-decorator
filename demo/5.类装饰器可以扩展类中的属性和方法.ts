
// 类装饰器还可以扩展类的功能,比如可以向类中添加新的属性和方法
// {}: 表示一个最简单最松散的对象,代表里面可以没有属性或者有任意属性
function addTimestamp<T extends { new (...args : any[]): {}}> (constructor: T) {
	return class extends constructor {
		timestamp = new Date()
	}
}

interface Document {
	title: string
	timestamp: Date
}

@addTimestamp
class Document {
	constructor(public title: string) {

	}
}

const doc = new Document("my document")
console.log(doc)

export {}