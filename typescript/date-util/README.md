# 时间日期处理模块

## How to build

``` -sh
npm run build
```

example：

``` -javascript
import { DateUtil } from "../utils/date-util";

const dateUtil = new DateUtil();
dateUtil.setYear(2019).setMonth(5).setDay(30).setHours(0).setMinute(0).setSecond(0);

let result = dateUtil.getTotalTime();
```

## How to test

``` -sh
npm run test
```