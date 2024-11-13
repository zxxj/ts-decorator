// 可以使用属性装饰器来进行访问控制或设置初始值

const defalutValue = (value: any) => {
	return (target: any, propertyKey: string) => {
		let val = value

		const getter = () => {
			return val
		}

		const setter = (newValue) => {
			val = newValue
		}

		Object.defineProperty(target,propertyKey, {
			enumerable: true,
			configurable: true,
			get: getter,
			set: setter
		})
	}
}

class Settings {
	@defalutValue('dark')
	theme: string
	@defalutValue('cn')
	lang: string
}

const setting = new Settings()
console.log(setting.theme) // dark
console.log(setting.lang) // cn