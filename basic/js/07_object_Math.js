// Math Object
{
    console.log(Math);
    console.log(Math.PI);

    const sum = 9.4
    const sum2 = '12.123456'

    console.log(Math.round(sum));// 소수점 첫째자리에서 반올림
    console.log(Math.ceil(sum));// 소수점 첫째자리에서 반드시 올림
    console.log(Math.floor(sum));// 소수점 첫째자리에서 반드시 내림
    console.log(parseInt(sum2));// 문자에 있는 숫자를 *정수*로 변환
    console.log(Number(sum2));// 문자에 있는 숫자를 *그숫자 그대로* 변환

}

// random
{
    const num = Math.random() //소숫점 난수 발생
    console.log(num);

   // 0 ~ 9 사이의 정수 랜덤 출력
   console.log(Math.floor(Math.random()*10));
   
   // 1 ~ 10 사이의 정수 랜덤 출력
   console.log(Math.floor(Math.random()*10) + 1);

   const food = ['라면', '김밥', '우동', '칼국수', '햄버거']
   const randomNum = Math.floor(Math.random()*food.length)

   document.querySelector('.text').innerHTML = food[randomNum]

}