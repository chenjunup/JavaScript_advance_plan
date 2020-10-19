## 定义单个对象属性Object.defineProperty(obj, prop, descriptor)

或者定义多个对象属性Object.defineProperties(obj, {
  prop1: descriptor,
  prop2: descriptor,
  ...
})

### descriptor 对象属性描述符

1. descriptor是一个对象
2. 数据描述符的可选键值
  * value（默认为 undefined）
  * writable（默认为false）
3. 存取描述符的可选键值
  * get：属性的getter函数，传入this（默认为 undefined）
  * set：属性的setter函数，接受赋予的新值，传入赋值时的对象（默认为 undefined）
4. 共同（共享）的可选键值
  * configurable（默认为false）
  * enumerable（默认为false）
5. descriptor只能是`数据描述符`或`存取描述符`中的一个再加上可选的共享键值，如果一个描述符不具有 value、writable、get 和 set 中的任意一个键，那么它将被认为是一个数据描述符。如果一个描述符同时拥有 value 或 writable 和 get 或 set 键，则会产生一个异常。
