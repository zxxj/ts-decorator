// 属性装饰器用来装饰类的属性
// 元数据添加,实现参数校验
import "reflect-metadata"

/**
 * @param target: 装饰的目标对象,对于静态属性来说就是类的构造函数,对于实例属性来说就是类的原型对象
 * @param propertyKey: 装饰的属性名称
 */

const required = (target: any, propertyKey: string) => {
	// 添加元数据,就是给类的原型对象的userName属性上添加元数据required: true
	Reflect.defineMetadata("required",true, target, propertyKey)
}

const validate = (user: User) => {
	for(let key in user) {

		// 如果当前属性已经设置了必传,并且值为空则抛出异常
		if(Reflect.getMetadata("required", user, key) && !user[key]) {
			throw new Error(`${key}属性为必传并且不能为空字符串`)
		}
	}
}

class User {
	@required
	 userName: string
}

const user = new User()
user.userName = 'xin'
validate(user)

export {}