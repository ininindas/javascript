
var username2 = '홍길동'
console.log(username2)
// 대화상자 alert, prompt, confirm
{
    // const name = prompt("이름을 입력하세요", "영업팀");
    // alert(`안녕하세요 ${name}님, 환영합니다.`)
    // const isCeck = confirm('확인하였습니까?')
    // console.log(isCeck)
    // document.write(name)
}

// variable 변수
// var, let, const

// var (이름) = value (값)

// 1 .var 
// 읽기와 쓰기가 가능 덮어쓰기 가능
// 블럭을 무시한다. 하지만 순서는 따라야한다
{
    var username = 'alice' 
    console.log(username)

    username = 'picasso'
    console.log(username)
}

console.log(username)

// 2 .let
// 이름만 선언해도 상관없음
// 읽기와 쓰기가 가능 덮어쓰기 가능
// 블럭안에서만 가능
// 가장 유연하게 쓸수있는 변수인듯 하다.(블럭안 한정)
{
    let title = 'html'
    console.log(title)

    title = 'css'
    console.log(title)
}

// console.log(title);


// 3. const
//읽기만 가능 변하지 않는다.
//상수 한번지정하면 덮어쓰기가 불가능

// ***const 쓰다 오류나면 let으로 바꾼다***

{
    const subject = 'html'
    console.log(subject);

    // subject = 'css'
    // console.log(subject);
}

// 변수는 문자와 숫자, $와 _만 사용가능.
// 첫글자 숫자는 불가능 무조건 문자나 $ _ 까지
// 예약어는 사용불가  js 예약어 모음


// 4. 변수의 데이터 타입 - 자료형 
// 원시데이터(premitive) : String, Number, Boolean, null, undefined
// Object : 싱글데이터를 묶어놓은 데이터

// function : 일급객체(first class Object)
// 변수에 담을수 있다, 함수나 메서드의 인자로 넘길 수 있다.
// 함수나 메서드에서 리턴 할 수 있다.

// 5. 문자형 string
// 의미가 나뉠수 있는것은 앞에 대문자로 쓰여진다.
{
    const name1 = 'alice'
    const name2 = 'alice'
    const name3 = 'alice'

    const firstName = 'pablo'
    const lastName = 'picaso'
    const fullName = firstName + ' ' + lastName
    console.log(fullName);
    console.log(`${firstName}   ${lastName}`);
    // ``(베틱)키보드 1 옆에 있는거  $(변수이름) 이게 편하다
}

// 6. 숫자형 Number
// '' 에 넣은 숫자는 문자
{
    const num = 10
    const PI = 3.14

    console.log(`값은 ${num}이고 타입은 ${typeof num}입니다.`);

    const a = 1 / 0
    console.log(a);

    const b = -1 / 0
    console.log(b);

    const c = 'html' / 10
    console.log(c);
}

// 7. 불린 Boolean
{ //코딩에서 자주쓰는 참 거짓
    const a = true
    const b = false

    const name = 'alice'
    const age = 16

    console.log(name == 'alice');
    console.log(age > 16);
}

// 8. null / undefined
// null - 존제하지 않는 값
// undefined - 값이 할당되지 않은 상태
// undefined는 열여있는 빈 상자  null은 포장되어있는 빈 상자(안에 아무것도 넣을수 없음)
{
    const box = null
    console.log(`값은 ${box}이고 타입은 ${typeof box}입니다.`);

    let box2 
    console.log(`값은 ${box2}이고 타입은 ${typeof box2}입니다.`);
}

// 9. 동적 타입
// 자바스크립트의 타입은 runtime(브라우저에서 실행될 때) 상태에서 타입이 정해진다.
// typescript 
{
    let word = 'winter'
    console.log(`값은 ${word}이고 타입은 ${typeof word}입니다.`);
    word = 100
    console.log(`값은 ${word}이고 타입은 ${typeof word}입니다.`);
    word = '100' + 10
    console.log(`값은 ${word}이고 타입은 ${typeof word}입니다.`);
    word = '100' / 10
    console.log(`값은 ${word}이고 타입은 ${typeof word}입니다.`);
    //각자의 상황에 따라 값이 자기 맘대로 바뀜 그래서 서서히 안쓰이는 추세
}
{
    // 형변환
    // const mathScore = prompt('당신의 수학점수는')
    // const engScore = prompt('당신의 영어점수는')
    // const average = (Number (mathScore) + Number(engScore)) / 2
    // alert('평균점수는 ${average} 입니다')
}
{
    console.log(
        String(1234),
        String(true),
        String(false),
        String(null),
        String(undefined),
    );
    // 그냥 다 문자로 다 바꿔줌

    console.log(
        Number('1234'),
        Number('1234hello'),
        Number(true),
        Number(false),
        Number(null),
        Number(undefined),
    );
    //문자에 숫자만 있음 숫자로 참 거짓은 1 0 null도 0 undefined는 안에 값이 없어서 NaN

    console.log(
        Boolean(0),
        Boolean('0'),
        Boolean(''),
        Boolean(' '),
        Boolean(null),
        Boolean(undefined),
        Boolean(NaN),
    );
    //이친구는 참 거짓만 보여줌  안에 값이 있으면 1(숫자는 0 제외) ''는 그냥은 안되고 공백이있어야함
    //안에 값이 비어있거나 존제하지 않으면 0
}
