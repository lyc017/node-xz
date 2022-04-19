## 安装

```
npm install itheima-tools-xz
```
## 导入

```
const itheima = require('itheima-tools-xz')
```

## 格式化时间

```
// 调用dataFormat对时间进行格式化
const data = itheima.dataFormat(new Date())
// 结果 2020-12-12 12:12:12
```
## 转移html中的特殊字符

```
// 调用dataFormat对时间进行格式化
const data = itheima.htmlEscape('<h1 title="abc">123&nbsp;</h1>')
// 结果 &lt;h1 title=&quot;abc&quot;&gt;123&amp;nbsp;&lt;/h1&gt;
console.log(data)
```
## 开源协议
ISC
