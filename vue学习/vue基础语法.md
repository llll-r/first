# vue基础语法

## VUE插值操作

## 1.v-once

- 该指令后面不需要跟任何表达式。
- 在加入了v-once的标签中，元素和数据只会渲染一次，不会随着
  message的改变而更改。

```html
<div id="app" v-once>{{message}}></div>
  <script>
    var vm = new Vue({
    el:"#app",
    data:{
        message:"hello!"
       },
    })
  </script>
```

## 2. v-cloak

- 在某些情况下，我们浏览器可能会直接显然出未编译的Mustache标签。这时候加入v-cloak属性。

- （原理） 在vue解析之前div中有v-cloak属性，vue解析之后div中不存在v-cloak属性。

  <img src="https://i.loli.net/2020/08/02/4YigMULwSsD9zOa.png" alt="image-20200726184115946" style="zoom:50%;" />

  ![image-20200726184130923](C:\Users\LvRui\AppData\Roaming\Typora\typora-user-images\image-20200726184130923.png)

  

## ３.v-html 

某些情况下，我们从服务器请求到的数据本身就是一个HTML代码。如果我们直接通过{{}}来输出，会将HTML代码也一起输出。但是我们可能希望的是按照HTML格式进行解析，并且显示对应的内容。

如果我们希望解析出HTML展示,可以使用v-html指令。该指令后面往往会跟上一个string类型,会将string的html解析出来并且进行渲染。

```html
<div id="app">
      <div v-html="url"></div>
  </div>
  <script>
    var vm = new Vue({
    el:"#app",
    data:{
        message:"hello!",
        url:"<a>http://www.baidu.com</a>"
       },
    })
</script>
```

##  4. v-text

- v-text作用和Mustache一致：
- v-text通常情况下，接受一个string类型
- 若元素或者组件加入v-text, 会覆盖其原有的内容。

![image-20200726182912805](C:\Users\LvRui\AppData\Roaming\Typora\typora-user-images\image-20200726182912805.png)

## 5. v-pre

- nv-pre用于跳过这个元素和它子元素的编译过程，用于显示原本的Mustache语法。

- 比如下面的代码：

第一个h2元素中的内容会被编译解析出来对应的内容

第二个h2元素中会直接显示{{message}}

<img src="C:\Users\LvRui\AppData\Roaming\Typora\typora-user-images\image-20200726183236225.png" alt="image-20200726183236225"  /><img src="C:\Users\LvRui\AppData\Roaming\Typora\typora-user-images\image-20200726183310214.png" alt="image-20200726183310214" style![(https://i.loli.net/2020/08/03/2jYAyFRBrDNnV5T.jpg)="zoom:67%;" />

## VUE绑定属性

## 1.v-bind

1. v-bind用来绑定属性

2. v-bind绑定class

3. 简写方式   :

   #### 绑定属性

   

   <img src="https://i.loli.net/2020/08/04/TSfh47MHuRcEX2Y.png" alt="image-20200804112534313" style="zoom:80%;" />

   #### 绑定class

   1.  对象方式绑定

   ```html
   用法一：直接通过{}绑定一个类
   <h2 :class="{'active': isActive}">Hello World</h2>
                   // 类名：布尔值
   用法二：也可以通过判断，传入多个值
   <h2 :class="{'active': isActive, 'line': isLine}">Hello World</h2>
   
   用法三：和普通的类同时存在，并不冲突
   注：如果isActive和isLine都为true，那么会有title/active/line三个类
   <h2 class="title" :class="{'active': isActive, 'line': isLine}">Hello World</h2>
   
   用法四：如果过于复杂，可以放在一个methods或者computed中
   注：classes是一个计算属性
   <h2 class="title" :class="classes">Hello World</h2>
   
   ```

   

   2. 数组方式绑定

      ```html
      <h2 class="title" :class="['active', 'line']">Hello World</h2>
      ```

      - [ ] 此方法使用较少。

        #### 绑定style

      ```html
      <div :style="{color: currentColor, fontSize: fontSize + 'px'}" >
      </div>
      ```

- style后面跟的是一个对象类型
  
- 对象的key是CSS属性名称
  
- 对象的value是具体赋的值，值可以来自于data中的属性]
      
      

## 2. 计算属性

1.  在某些情况，我们可能需要对数据进行一些转化后再显示，或者需要将多个数据结合起来进行显示。

   <img src="C:\Users\LvRui\AppData\Roaming\Typora\typora-user-images\image-20200804155246486.png" alt="image-20200804155246486" style="zoom:80%;" /><img src="https://i.loli.net/2020/08/04/mILujHnJhg9KXWQ.png" alt="image-20200804155457094" style="zoom:80%;" />

2. 计算属性的复杂操作:

   <img src="https://i.loli.net/2020/08/04/ZXucs9OjHBFbxCy.png" alt="image-20200804155556713" style="zoom:80%;" />

#### 计算属性的setter和getter:

1. 每个计算属性都包含一个getter和一个setter。
2.  我们只是使用getter来读取。
3. <img src="C:\Users\LvRui\AppData\Roaming\Typora\typora-user-images\image-20200804162510829.png" alt="image-20200804162510829" style="zoom:80%;" />

 #### 计算属性内部有缓存，计算性能比methods高



## 3. v-on

1.  简写方式 @

2. 可以监听点击事件、 键盘事件等

   - 情况一：如果该方法不需要额外参数，那么方法后的()可以不添加。  但是注意：如果方法本身中有一个参数，那么会默认将原生事件event参数传递进去

   - 情况二：如果需要同时传入某个参数，同时需要event时，可以通过$event传入事件。

<img src="https://i.loli.net/2020/08/04/xDnACWFkGmQ5dR7.png" alt="image-20200804170843945" style="zoom:80%;" />

<img src="https://i.loli.net/2020/08/04/MBxSbjqIfnA89Je.png" alt="image-20200804170859387" style="zoom:80%;" />

3. v-on修饰符

   - .stop - 调用 event.stopPropagation()。

   - .prevent - 调用 event.preventDefault()。

   - .{keyCode | keyAlias} - 只当事件是从特定键触发时才触发回调。

   - .native - 监听组件根元素的原生事件。

   - .once - 只触发一次回调。

<img src="https://i.loli.net/2020/08/04/Y1hZJmnX8lH3S4a.png" alt="image-20200804171143564" style="zoom: 80%;" />

## 条件判断

###  1.v-if 和 v-else

- v-if的原理： v-if后面的条件为false时，对应的元素以及其子元素不会渲染。也就是根本没有不会有对应的标签出现在DOM中。

### 2.  v-show

- v-if和v-show都可以决定一个元素是否渲染，那么开发中我们如何选择呢？

1.  v-if当条件为false时，压根不会有对应的元素在DOM中。

2.  v-show当条件为false时，仅仅是将元素的display属性设置为none而已。

- 开发中如何选择呢？

1. 当需要在显示与隐藏之间切片很频繁时，使用v-show

2. 当只有一次切换时，通过使用v-if

​		

## 遍历数组

### 1. v-for

1. 遍历数组

   - 如果在遍历的过程中不需要使用索引值

     1. v-for="movie in movies"

     2. 依次从movies中取出movie，并且在元素的内容中，我们可以使用Mustache语法，来使用movie

   - 如果在遍历的过程中，我们需要拿到元素在数组中的索引值呢？

     1. 语法格式：v-for=(item, index) in items

     2. 其中的index就代表了取出的item在原数组的索引值。

        <img src="https://i.loli.net/2020/08/04/NZxRWTD2sqOQ1uv.png" alt="image-20200804203854099" style="zoom:80%;" />

2. 遍历对象

   - ​	(value, key, index)

     <img src="https://i.loli.net/2020/08/04/Ct4SDGbheOE9MpA.png" alt="image-20200804204650821" style="zoom:80%;" />	

## 数组的响应式方法

- Vue中包含了一组观察数组编译的方法，使用它们改变数组也会触发视图的更新。

  1. push()

  2. pop()

  3. shift()

  4. unshift()

  5. splice()

  6. sort()

  7. reverse()

<img src="https://i.loli.net/2020/08/04/R4atJYSiyprMGUq.png" alt="image-20200804204908634" style="zoom: 80%;" />

### 2. v-model（表单绑定）

	#### 1. v-model:radio

- 表单控件在实际开发中是非常常见的。特别是对于用户信息的提交，需要大量的表单。

- 案例的解析：当我们在输入框输入内容时，因为input中的v-model绑定了message，所以会实时将输入的内容传递给message，message发生改变。当message发生改变时，因为上面我们使用Mustache语法，将message的值插入到DOM中，所以DOM会发生响应的改变。所以，通过v-model实现了双向的绑定。

- 我们也可以将v-model用于textarea元素。

  <img src="C:\Users\LvRui\AppData\Roaming\Typora\typora-user-images\image-20200805085637046.png" alt="image-20200805085637046" style="zoom:80%;" /><img src="C:\Users\LvRui\AppData\Roaming\Typora\typora-user-images\image-20200805085703579.png" alt="image-20200805085703579" style="zoom:80%;" />

- v-model其实是一个语法糖，它的背后本质上是包含两个操作：

  1.v-bind绑定一个value属性

  2.v-on指令给当前元素绑定input事件

```html
<input type="text" v-model="message">
等同于
<input type="text" v-bind:value="message" v-on:input="message = $event.target.value">

```

<img src="https://i.loli.net/2020/08/05/HPARq2E5SkgnG1o.png" alt="image-20200805090323882" style="zoom:80%;" />

## 2. v-model:checkbox

- 复选框分为两种情况：单个勾选框和多个勾选框

  1. 单个勾选框：

     - v-model即为布尔值。

     - 此时input的value并不影响v-model的值。

  2. 多个复选框：

     - 当是多个复选框时，因为可以选中多个，所以对应的data中属性是一个数组。

     - 当选中某一个时，就会将input的value添加到数组中。

<img src="C:\Users\LvRui\AppData\Roaming\Typora\typora-user-images\image-20200805090900499.png" alt="image-20200805090900499" style="zoom:80%;" />

<img src="https://i.loli.net/2020/08/05/rXNdm7sneJ32WUx.png" alt="image-20200805090910699  " style="zoom:80%;" />

## 3. v-model:select

和checkbox一样，select也分单选和多选两种情况。

1. 单选：只能选中一个值。

   - v-model绑定的是一个值。

   - 当我们选中option中的一个时，会将它对应的value赋值到mySelect中

2. 多选：可以选中多个值。

   - v-model绑定的是一个数组。

   - 当选中多个值时，就会将选中的option对应的value添加到数组mySelects中

<img src="https://i.loli.net/2020/08/05/v52QYIlKWuNXa3s.png" alt="image-20200805091748093" style="zoom:80%;" />   <img src="C:\Users\LvRui\AppData\Roaming\Typora\typora-user-images\image-20200805091809982.png" alt="image-20200805091809982" style="zoom:80%;" />      

<img src="C:\Users\LvRui\AppData\Roaming\Typora\typora-user-images\image-20200805091932167.png" alt="image-20200805091932167" style="zoom:80%;" />

### 修饰符

- lazy修饰符：
  1. 默认情况下，v-model默认是在input事件中同步输入框的数据的。也就是说，一旦有数据发生改变对应的data中的数据就会自动发生改变。  lazy修饰符可以让数据在失去焦点或者回车时才会更新：

- number修饰符：
  1. 默认情况下，在输入框中无论我们输入的是字母还是数字，都会被当做字符串类型进行处理。但是如果我们希望处理的是数字类型，那么最好直接将内容当做数字处理。  number修饰符可以让在输入框中输入的内容自动转成数字类型：

- trim修饰符：
  1. 如果输入的内容首尾有很多空格，通常我们希望将其去除 。  trim修饰符可以过滤内容左右两边的空格

<img src="https://i.loli.net/2020/08/05/9vlfiuqPIXTo3hy.png" alt="image-20200805092334915" style="zoom:80%;" />















