---
sidebar: auto
---

# 基础算法

一些Js中常用的基本算法

## 数组去重
改变原数组的写法，在原型上面添加一个方法。
```js
Array.prototype.delRepeat = function (){
  let newArr = [];
  let delArr = [];
  this.forEach((item,index)=>{
    if(newArr.indexOf(item) === -1){
      newArr.push(item)
    }else{
      if(delArr.indexOf(item) === -1 ){
        delArr.push(item)
      }
    }
  })
  this.forEach((item,index)=>{
    this[index] = newArr[index]
  })
  this.length = newArr.length
  return delArr;
}
```