# Proto Type
### 객체 생성자

객체 생성자는 함수를 통해서 새로운 객체를 만들고 그 안에 넣고 싶은 값 혹은 함수들을 구현 할 수 있게 해줍니다.
```javascript
function Data(url, val, prod){
    this.url = url; 
    this.val = val;
    this.prod = prod;
    this.output = function(){
        console.log(this.url + this.val + this.prod);
    };
}

var mainUrl = new data('www.naver.com?','page=',3);

mainUrl.output();

```
응용
```
function Data(url, val, prod){
    this.url = url; 
    this.val = val;
    this.prod = prod;
    this.output = function(){
        console.log(this.url + this.val + this.prod);
    };
}

var mainUrl = new data('www.naver.com?','page=',3);

mainUrl.output();
```

