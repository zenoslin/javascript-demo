# 分解图集

用于分解序列帧动画图集，要求打包时文件夹内png用{0.png，1.png...}命名

example:

``` -js
import { resolveAtlas } from './resolveAtlas.js';
import Atlas from './img/Atlas.png';
import Config from './img/Atlas.json';

let animationImgArr = [];

resolveAtlas(Atlas, Config).then(res => {
  animationImgArr = res;
});
```
