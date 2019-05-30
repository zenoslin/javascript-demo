# 输入检查模块

## How to build

``` -sh
npm run build
```

example：

``` -javascript
import { InputCheck } from "./input-check.js";

const inputCheck = new InputCheck("77777");
inputCheck.isEmpty('输入不能为空').isEmail('请输入邮箱');

if (inputCheck.isPass) {
  // next
} else {
  console.log(inputCheck.errorMessage);
}
```

## How to test

``` -sh
npm run test
```