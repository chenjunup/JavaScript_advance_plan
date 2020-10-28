// 1. 判断对象类型
const isType = type => target => `[object ${type}]` === Object.prototype.toString.call(target)
const isArray = isType('Array')
console.log(isArray([]))

// 2. 实现map方法 Array.prototype.map(fn, context)
// context是fn执行时的this 如果fn是箭头函数 设置context会失效
const selfMap = function(fn, context) {
  const arr = Array.prototype.slice.call(this)
  let mappedArr = []
  for (let i = 0; i < arr.length; i++) {
    if (!arr.hasOwnProperty(i)) continue
    mappedArr[i] = fn.call(context, arr[i], i, this)
  }
  return mappedArr
}
Array.prototype.selfMap = selfMap
console.log([1,,3].selfMap(item => item+1))

// 3. reduce实现map方法
const selfMap2 = function(fn, context) {
  const arr = Array.prototype.slice.call(this)
  return arr.reduce((pre, cur, index) => {
    return [...pre, fn.call(context, cur, index, this)]
  }, [])
}
Array.prototype.selfMap2 = selfMap2
console.log([1,,3].selfMap2(item=>item+1))

// 4. 实现filter方法
const selfFilter = function(fn, context) {
  const arr = Array.prototype.slice.call(this)
  let filteredArr = []
  for (let i=0;i<arr.length;i++) {
    fn.call(context, arr[i], i, this) && filteredArr.push(arr[i])
  }
  return filteredArr
}
Array.prototype.selfFilter = selfFilter
console.log([1,,3].selfFilter(item=>item>2))
