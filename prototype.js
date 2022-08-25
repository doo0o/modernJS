function data(url, val, prod){
    this.url = url;
    this.val = val;
    this.prod = prod;
    this.output = function(){
        console.log(this.url + this.val + this.prod);
    };
}

var mainUrl = new data('www.naver.com?','page=',3);
var mainUrl = new data('www.daum.net?','page=',3);

// mainUrl.output();


