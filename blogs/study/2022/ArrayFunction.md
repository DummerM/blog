---
title: Js数组方法合集
date: 2022-08-11
sidebar: 'auto'
tags:
 - JavaScript
categories:
 - 前端
---

### Array.map()

`map()` 方法创建一个新数组，这个新数组由原数组中的每个元素都调用一次提供的函数后的返回值组成。

``` javascript
const list = [😫, 😫, 😫, 😫];
list.map((⚪️) => 😀); // [😀, 😀, 😀, 😀]

const list = [1, 2, 3, 4];
list.map((el) => el * 2); // [2, 4, 6, 8]
```

### Array.filter()

`filter()` 方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。

``` javascript
const list = [😀, 😫, 😀, 😫];
list.filter((⚪️) => ⚪️ === 😀); // [😀, 😀]

// Code
const list = [1, 2, 3, 4];
list.filter((el) => el % 2 === 0); // [2, 4]
```

### Array.reduce()

`reduce()` 方法对数组中的每个元素按序执行一个由您提供的 `reducer` 函数，每一次运行 `reducer` 会将先前元素的计算结果作为参数传入，最后将其结果汇总为单个返回值。

``` javascript
const list = [😀, 😫, 😀, 😫, 🤪];
list.reduce((⬜️, ⚪️) => ⬜️ + ⚪️); // 😀 + 😫 + 😀 + 😫 + 🤪

// OR
const list = [1, 2, 3, 4, 5];
list.reduce((total, item) => total + item, 0); // 15
```

### Array.reduceRight()

`reduceRight()` 方法的功能和 `reduce()` 功能是一样的，不同的是 `reduceRight()` 从数组的末尾向前将数组中的数组项做累加。
 
``` javascript
const list = [😀, 😫, 😀, 😫, 🤪];
list.reduceRight((⬜️, ⚪️) => ⬜️ + ⚪️); // 🤪 + 😫 + 😀 + 😫 + 😀

// Code
const list = [1, 2, 3, 4, 5];
list.reduceRight((total, item) => total + item, 0); // 15
```

### Array.fill()

`fill()` 方法用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。不包括终止索引。

``` javascript
const list = [😀, 😫, 😀, 😫, 🤪];
list.fill(😀); // [😀, 😀, 😀, 😀, 😀]


const list = [1, 2, 3, 4, 5];
list.fill(0); // [0, 0, 0, 0, 0]
```

### Array.find()

`find()` 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 `undefined`。

``` javascript
const list = [😀, 😫, 😀, 😫, 🤪];
list.find((⚪️) => ⚪️ === 😀); // 😀
list.find((⚪️) => ⚪️ === 😝); // undefined


const list = [1, 2, 3, 4, 5];
list.find((el) => el === 3); // 3
list.find((el) => el === 6); // undefined
```

### Array.indexOf()

`indexOf()` 方法返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回`-1`。

``` javascript
const list = [😀, 😫, 😀, 😫, 🤪];
list.indexOf(😀); // 0
list.indexOf(😡); // -1

// Code
const list = [1, 2, 3, 4, 5];
list.indexOf(3); // 2
list.indexOf(6); // -1
```

### Array.lastIndexOf()

``` javascript
arr.lastIndexOf(searchElement[, fromIndex])
```

`lastIndexOf()` 方法返回指定元素（也即有效的 JavaScript 值或变量）在数组中的最后一个的索引，如果不存在则返回 -1。从数组的后面向前查找，从 `fromIndex` 处开始。

``` javascript
const list = [😀, 😫, 😀, 😫, 🤪];
list.lastIndexOf(😀); // 3
list.lastIndexOf(😀, 1); // 0

// Code
const list = [1, 2, 3, 4, 5];
list.lastIndexOf(3); // 2
list.lastIndexOf(3, 1); // -1
```

### Array.findIndex()

`findIndex()` 方法返回数组中满足提供的测试函数的第一个元素的索引。若没有找到对应元素则返回`-1`。

``` javascript
const list = [😀, 😫, 😀, 😫, 🤪];
list.findIndex((⚪️) => ⚪️ === 😀); // 0

// You might be thinking how it's different from `indexOf` 🤔
const array = [5, 12, 8, 130, 44];
array.findIndex((element) => element > 13); // 3

// OR
const array = [{
  id: 😀
}, {
  id: 😫
}, {
  id: 🤪
}];

array.findIndex((element) => element.id === 🤪); // 2
```

### Array.includes()

`includes()` 方法用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 `true`，否则返回 `false`。

``` javascript
const list = [😀, 😫, 😀, 😫, 🤪];
list.includes(😀); // true

// Code
const list = [1, 2, 3, 4, 5];
list.includes(3); // true
list.includes(6); // false
```

### Array.pop()

`pop()` 方法从数组中删除最后一个元素，并返回该元素的值。此方法会更改数组的长度。

``` javascript
const list = [😀, 😫, 😀, 😫, 🤪];
list.pop(); // 🤪
list; // [😀, 😫, 😀, 😫]

// Code
const list = [1, 2, 3, 4, 5];
list.pop(); // 5
list; // [1, 2, 3, 4]
```

### Array.push()

`push()` 方法将一个或多个元素添加到数组的末尾，并返回该数组的新长度。

``` javascript
const list = [😀, 😫, 😀, 😫, 🤪];
list.push(😡); // 5
list; // [😀, 😫, 😀, 😫, 🤪, 😡]

// Code
const list = [1, 2, 3, 4, 5];
list.push(6); // 6
list; // [1, 2, 3, 4, 5, 6]
```

### Array.shift()

`shift()` 方法从数组中删除第一个元素，并返回该元素的值。此方法更改数组的长度。

``` javascript

const list = [😀, 😫, 😀, 😫, 🤪];list.shift(); // 😀list; // [😫, 😀, 😫, 🤪]

// Codeconst list = [1, 2, 3, 4, 5];list.shift(); // 1list; // [2, 3, 4, 5]

```
### Array.unshift()

`unshift()` 方法将一个或多个元素添加到数组的开头，并返回该数组的新长度(该方法修改原有数组)。

``` javascript
const list = [😀, 😫, 😀, 😫, 🤪];
list.unshift(😡); // 6
list; // [😡, 😀, 😫, 😀, 😫, 🤪]

// Code
const list = [1, 2, 3, 4, 5];
list.unshift(0); // 6
list; // [0, 1, 2, 3, 4, 5]
```

### Array.splice()

`splice()` 方法通过删除或替换现有元素或者原地添加新的元素来修改数组,并以数组形式返回被修改的内容。此方法会改变原数组。

``` javascript
const list = [😀, 😫, 😀, 😫, 🤪];
list.splice(1, 2); // [😀, 😫]
list; // [😀, 😫, 🤪]

// Code
const list = [1, 2, 3, 4, 5];
list.splice(1, 2); // [2, 3]
list; // [1, 4, 5]
```

### Array.slice()

`slice()` 方法返回一个新的数组对象，这一对象是一个由 `begin` 和 `end` 决定的原数组的浅拷贝（包括 `begin`，不包括`end`）。原始数组不会被改变。

``` javascript
const list = [😀, 😫, 😀, 😫, 🤪];
list.slice(1, 3); // [😫, 😀]
list; // [😀, 😫, 😀, 😫, 🤪]

// Code
const list = [1, 2, 3, 4, 5];
list.slice(1, 3); // [2, 3]
list; // [1, 2, 3, 4, 5]
```

### Array.join()

`join()` 方法将一个数组（或一个类数组对象）的所有元素连接成一个字符串并返回这个字符串。如果数组只有一个项目，那么将返回该项目而不使用分隔符。

``` javascript
const list = [😀, 😫, 😀, 😫, 🤪];
list.join('〰️'); // "😀〰️😫〰️😀〰️😫〰️🤪"

// Code
const list = [1, 2, 3, 4, 5];
list.join(', '); // "1, 2, 3, 4, 5"
```

### Array.reverse()

`reverse()` 方法将数组中元素的位置颠倒，并返回该数组。数组的第一个元素会变成最后一个，数组的最后一个元素变成第一个。该方法会改变原数组。

``` javascript
const list = [😀, 😫, 😀, 😫, 🤪];
list.reverse(); // [🤪, 😫, 😀, 😫, 😀]
list; // [🤪, 😫, 😀, 😫, 😀]

// Code
const list = [1, 2, 3, 4, 5];
list.reverse(); // [5, 4, 3, 2, 1]
list; // [5, 4, 3, 2, 1]
```

### Array.sort()

`sort()` 方法用原地算法对数组的元素进行排序，并返回数组。默认排序顺序是在将元素转换为字符串，然后比较它们的UTF-16代码单元值序列时构建的。

``` javascript
const list = [😀, 😫, 😀, 😫, 🤪];
list.sort(); // [😀, 😀, 😫, 😫, 🤪]

// This make more sense 🤔
const array = ['D', 'B', 'A', 'C'];
array.sort(); // 😀 ['A', 'B', 'C', 'D']

// OR
const array = [4, 1, 3, 2, 10];
array.sort(); // 😧 [1, 10, 2, 3, 4]
array.sort((a, b) => a - b); // 😀 [1, 2, 3, 4, 10]
```

### Array.some()

`some()` 方法测试数组中是不是至少有1个元素通过了被提供的函数测试。它返回的是一个Boolean类型的值。

``` javascript
const list = [😀, 😫, 😀, 😫, 🤪];
list.some((⚪️) => ⚪️ === 😀); // true
list.some((⚪️) => ⚪️ === 😡); // false

// Code
const list = [1, 2, 3, 4, 5];
list.some((el) => el === 3); // true
list.some((el) => el === 6); // false
```

### Array.every()

`every()` 方法测试一个数组内的所有元素是否都能通过某个指定函数的测试。它返回一个布尔值。

``` javascript
const list = [😀, 😫, 😀, 😫, 🤪];
list.every((⚪️) => ⚪️ === 😀); // false

const list = [😀, 😀, 😀, 😀, 😀];
list.every((⚪️) => ⚪️ === 😀); // true

// Code
const list = [1, 2, 3, 4, 5];
list.every((el) => el === 3); // false

const list = [2, 4, 6, 8, 10];
list.every((el) => el%2 === 0); // true
```

### Array.from()

`Array.from()` 方法对一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例。

``` javascript
const list = 😀😫😀😫🤪;
Array.from(list); // [😀, 😫, 😀, 😫, 🤪]

const set = new Set(['😀', '😫', '😀', '😫', '🤪']);
Array.from(set); // [😀, 😫, 🤪]

const range = (n) => Array.from({ length: n }, (_, i) => i + 1);
console.log(range(10)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

### Array.of()

`Array.of()` 方法创建一个具有可变数量参数的新数组实例，而不考虑参数的数量或类型。

`Array.of()` 和 Array 构造函数之间的区别在于处理整数参数：`Array.of(7)` 创建一个具有单个元素 7 的数组，而 Array(7) 创建一个长度为7的空数组（注意：这是指一个有7个空位(empty)的数组，而不是由7个 `undefined` 组成的数组）。

``` javascript
Array.of(7);       // [7]
Array.of(1, 2, 3); // [1, 2, 3]

Array(7);          // [ , , , , , , ]
Array(1, 2, 3);    // [1, 2, 3]
```

### Array.isArray()

`Array.isArray()` 用于确定传递的值是否是一个 Array。

``` javascript
Array.isArray([😀, 😫, 😀, 😫, 🤪]); // true
Array.isArray(🤪); // false

// Code
Array.isArray([1, 2, 3, 4, 5]); // true
Array.isArray(5); // false
```

### Array.at()

`at()` 方法接收一个整数值并返回该索引的项目，允许正数和负数。负整数从数组中的最后一个项目开始倒数。

``` javascript
const list = [😀, 😫, 😀, 😫, 🤪];
list.at(1); // 😫

// Return from last 🤔
list.at(-1); // 🤪
list.at(-2); // 😫

// Code
const list = [1, 2, 3, 4, 5];
list.at(1); // 2
list.at(-1); // 5
list.at(-2); // 4
```

### Array.copyWithin()

``` javascript
arr.copyWithin(target[, start[, end]])
```

`copyWithin()` 方法浅复制数组的一部分到同一数组中的另一个位置，并返回它，不会改变原数组的长度。

``` javascript
const list = [😀, 😫, 😀, 😫, 🤪];
list.copyWithin(1, 3); // [😀, 😀, 🤪, 😫, 🤪]

const list = [😀, 😫, 😀, 😫, 🤪];
list.copyWithin(0, 3, 4); // [😫, 😫, 😀, 😫, 🤪]

// Code
const list = [1, 2, 3, 4, 5];
list.copyWithin(0, 3, 4); // [4, 2, 3, 4, 5]
```

> 如果没看懂，可以看MDN介绍： [developer.mozilla.org/zh-CN/docs/…](https://link.juejin.cn?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FJavaScript%2FReference%2FGlobal_Objects%2FArray%2FcopyWithin)

### Array.flat()

``` javascript
var newArray = arr.flat([depth])
// depth 可选:指定要提取嵌套数组的结构深度，默认值为 1。
```

`flat()` 方法会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。

``` javascript
const list = [😀, 😫, [😀, 😫, 🤪]];
list.flat(Infinity); // [😀, 😫, 😀, 😫, 🤪]

// Code
const list = [1, 2, [3, 4, [5, 6]]];
list.flat(Infinity); // [1, 2, 3, 4, 5, 6]
```

### Array.flatMap()

`flatMap()` 方法首先使用映射函数映射每个元素，然后将结果压缩成一个新数组。它与 map 连着深度值为1的 flat 几乎相同，但 flatMap 通常在合并成一种方法的效率稍微高一些。

``` javascript
const list = [😀, 😫, [😀, 😫, 🤪]];
list.flatMap((⚪️) => [⚪️, ⚪️ + ⚪️ ]); // [😀, 😀😀, 😫, 😫😫, 😀, 😀😀, 😫, 😫😫, 🤪, 🤪🤪]

// Code
const list = [1, 2, 3];
list.flatMap((el) => [el, el * el]); // [1, 1, 2, 4, 3, 9]
```