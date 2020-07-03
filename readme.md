# 簡介

typescript todo list

# 遇到問題

物件含有 function，經過 JSON.parse(JSON.stringify(obj)) 完全複製，function 會消失

# 解決方法

https://larry850806.github.io/2016/09/20/shallow-vs-deep-copy/

使用 Object.assign
