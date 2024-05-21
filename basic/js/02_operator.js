//연산자
// 1. 산술 연산자
{
    console.log(100+10);
    console.log(100+10);
    console.log(100*10);
    console.log(100/10);
    console.log(100%10);
    console.log(100**10);
}

// 2. 문자열 연결 연산자
{
    const say1 = 'winter'
    const say2 = 'is'
    const say3 = 'coming'

    console.log(say1 + say2 + say3);
    console.log(say1 + ' ' + say2 + ' ' + say3);
    console.log(`${say1} ${say2} ${say3}`);
    console.log('html'+2);
    console.log('10'+2);
}

// 3. 대입 연산자
{
    let x = 10
    let y = 5

    x = x + y // x += y
    console.log(x);

    x = x - y// x -= y
    console.log(x);

    x = x * y // x *= y
    console.log(x);

    x = x / y // x/= y
    console.log(x);

    x = x % y // x %= y
    console.log(x);
}

{
    let tbl = '<table>'
    tbl += '<tr>'
    tbl += '<td>1</td><td>2</td><td>3</td><td>4</td><td>5</td>'
    tbl += '</tr>'
    tbl += '<tr>'
    tbl += '<td>6</td><td>7</td><td>8</td><td>9</td><td>10</td>'
    tbl += '</tr>'
    tbl += '</table>'

    document.querySelector('.box').innerHTML = tbl
}

// 4. 증강 연산자
{
    let number = 8
    console.log(number);

    number++
    console.log(number);

    number--
    console.log(number);

    let num1 = 10
    let num2 = ++num1
    console.log(num1,num2);

    let count1 = 10
    let count2 = count1++
    console.log(count1,count2);
    //부호가 앞에있으면 ++이 먼저 적용후 =이 적용됨  뒤에있음 = 적용후 뒤에 ++적용
}

// 5. 비교연산자
{
    console.log(10 > 100);
    console.log(10 < 100);
    console.log(10 <= 100);
    console.log(10 <= 100);
    console.log(10 == 100);
    console.log(10 != 100);
    // !는not 즉 위에 부호는 다르거나 같냐?
}

// 6. 논리 연산자
// ||(엔터위에)= or , &&(and) , !(not)
{
    let a = 100 > 50
    let b = 10 < 5
    let c = true

    console.log(a || b || c);
    // || -> 하나라도 참이면 결과값이 참   진짜 or 임

    console.log(a && b && c);
    // && -> 전부다 참이여야만 결과값이 참

    b = !b
    // !는 값을 반대로 바꿈 참 <-> 거짓
}

// 7. 동등 일치 연산자
// == , === , != , !==
{
    const value1 = '100'
    const value2 = 100
    console.log(value1 == value2);
    console.log(value1 != value2);
    console.log(value1 === value2);
    // ===는 섬세한거(타입)까지 채크한다고함
    console.log(value1 !== value2);

    console.log('-----------------------');
    console.log(0 === false);
    console.log(0 == false);
    console.log('' == false);
    console.log('' === false);
    console.log(null == undefined);
    console.log(null === undefined);
}