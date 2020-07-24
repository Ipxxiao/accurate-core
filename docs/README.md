<a name="module_accurate-core"></a>

## accurate-core
<p>accurate-core module.</p>

**See**: doc https://github.com/Ipxxiao/accurate-core/tree/master/docs  

* [accurate-core](#module_accurate-core)
    * _static_
        * [.addition](#module_accurate-core.addition) ⇒ <code>number</code>
        * [.subtraction](#module_accurate-core.subtraction) ⇒ <code>number</code>
        * [.multiplication](#module_accurate-core.multiplication) ⇒ <code>number</code>
        * [.divide](#module_accurate-core.divide) ⇒ <code>number</code>
    * _inner_
        * [~getDecimalDigits(num)](#module_accurate-core..getDecimalDigits) ⇒ <code>number</code>
        * [~getOffsetData(num1, num2)](#module_accurate-core..getOffsetData) ⇒ <code>OffsetData</code>
        * [~add(num1, num2)](#module_accurate-core..add) ⇒ <code>number</code>

<a name="module_accurate-core.addition"></a>

### accurate-core.addition ⇒ <code>number</code>
<p>精度减法计算</p>

**Kind**: static property of [<code>accurate-core</code>](#module_accurate-core)  

| Param | Type |
| --- | --- |
| num1 | <code>number</code> | 
| num2 | <code>number</code> | 

**Example**  
```js
subtract(1.1, 0.2)
//=> 0.9
```
<a name="module_accurate-core.subtraction"></a>

### accurate-core.subtraction ⇒ <code>number</code>
<p>精度乘法计算</p>

**Kind**: static property of [<code>accurate-core</code>](#module_accurate-core)  

| Param | Type |
| --- | --- |
| num1 | <code>number</code> | 
| num2 | <code>number</code> | 

**Example**  
```js
multiply(1.1, 0.1)
//=> 0.11
```
<a name="module_accurate-core.multiplication"></a>

### accurate-core.multiplication ⇒ <code>number</code>
<p>精度除法计算</p>

**Kind**: static property of [<code>accurate-core</code>](#module_accurate-core)  

| Param | Type |
| --- | --- |
| num1 | <code>number</code> | 
| num2 | <code>number</code> | 

**Example**  
```js
division(1.1, 10)
//=> 0.11
```
<a name="module_accurate-core.divide"></a>

### accurate-core.divide ⇒ <code>number</code>
<p>精度取模计算</p>

**Kind**: static property of [<code>accurate-core</code>](#module_accurate-core)  

| Param | Type |
| --- | --- |
| num1 | <code>number</code> | 
| num2 | <code>number</code> | 

**Example**  
```js
modulo(1.1, 1)
//=> 0.1
```
<a name="module_accurate-core..getDecimalDigits"></a>

### accurate-core~getDecimalDigits(num) ⇒ <code>number</code>
<p>获取小数位数</p>

**Kind**: inner method of [<code>accurate-core</code>](#module_accurate-core)  

| Param | Type |
| --- | --- |
| num | <code>number</code> | 

<a name="module_accurate-core..getOffsetData"></a>

### accurate-core~getOffsetData(num1, num2) ⇒ <code>OffsetData</code>
<p>获取偏移数据</p>

**Kind**: inner method of [<code>accurate-core</code>](#module_accurate-core)  

| Param | Type |
| --- | --- |
| num1 | <code>number</code> | 
| num2 | <code>number</code> | 

<a name="module_accurate-core..add"></a>

### accurate-core~add(num1, num2) ⇒ <code>number</code>
<p>精度加法计算</p>

**Kind**: inner method of [<code>accurate-core</code>](#module_accurate-core)  

| Param | Type |
| --- | --- |
| num1 | <code>number</code> | 
| num2 | <code>number</code> | 

**Example**  
```js
add(1.1, 0.3)
//=> 1.4
```
