# 삼항연산자 ( Ternary operator )
아래와 같이 조건에 따라 text 값이 바뀌는 코드를 삼항연산자로 표기
```javascript
const array = [];
let text = '';
if (array.length === 0) {
  text = '배열이 비어있습니다.';
} else {
  text = '배열이 비어있지 않습니다.';
}
console.log(text);
```
---
```javascript
const array = [];
let text = array.length === 0 ? '배열이 비어있습니다' : '배열이 비어있지 않습니다.';

console.log(text);
```
## 구문
### _var name = 조건 ? true func_ : _false func_
