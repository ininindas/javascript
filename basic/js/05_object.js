// Object 객체
// 자바스크립트는 객체기반 언어
// 모든 객체는 속성(property)과 기능(method)을 가지고있다
// 형식 {키 : 값 , 키2 : 값}

// 객체의 종류 
// 내장객체 : 문자(String), 날자(Date), 배열(Array), 수학(Math) 등등... 자바스크립트가 가지고 있는객체
// 브라우저 객체 모델(BOM) : window, screen, location, history, navigator...
// 문서 객체 모델(DOM) : html 문서구조

//샘플객체
{
    const user = {
        name: 'Picasso',
        age: 36,
        email: 'Picasso@gmail.com',
        works: [
            {id: 1,title: '게르니카',price: 1000,like: 50},
            {id: 2,title: '아비뇽의 처녀들',price: 30000,like: 80},
            {id: 3,title: '우는여인',price: 50000,like: 200},
        ],

        goodworks(){
            console.log('피카소의 대표작');
            this.works.forEach((work) => {
                console.log( `${work.id}. ${work.title}, ${work.price}원, 좋아요${work.like}`);
               
            })
        },

        paintWorks(){
            let goods = ''
            this.work.map((work) => {
                goods += `<div>${work.id}. ${work.title}, ${work.price}원, 좋아요${work.like}</div>`
            })

            document.querySelector('.text').innerHTML = goods
        },

        login: function(){
            console.log('환영합니다.');
        },

        login(){
            console.log('환영합니다.');
        },
        logout(){
            console.log('안녕히 가세요.');
        }
    }
//  {}쓰면 빈객체는 만든다
    
console.log(user.age);

// 수정
user.age = 48
console.log(user.age);

//타입확인
console.log(typeof user);

//method
user.login()
user.logout()
user.goodworks()
user.paintWorks()
}