// 반복문 repeat

// 1. while 문
// {
//     while(조건) {
//         실행문
//         한계조건
//     }
// }

// 2. for 문
{
    // for(초기값;조건식;증강식) {
    //     실행문
    // }

    for(let i =3; i>0; i--) {
        console.log(`i는 ${i}`);
    }

    for(let i =1; i<=3; i++) {
        console.log(`i는 ${i}`);
    }
}

{
    const day = ['월', '화', '수', '목', '금']
    for(let i = 0; i<day.length; i++){
        console.log(day[i]);
    }
}


// 3. break / continue
// break: 반복문을 종료
// continue : 실행문을 무시하고 증강연산을 실행  (실행문을 무시하고 윗식을 실행)
{
    // for(let i = 0; i<=10; i++){
    //     if(i > 7){
    //         break
    //     }
    //     console.log(i);
    // }
}

// 0 ~ 10  -> 홀수만 출력 : continue
{
    // for(let i = 0; i<=10; i++){
    //     if(i % 2 == 0){
    //         continue
    //     }
    //     console.log(i);
    // }
}

// 연습 구구단
{
    let i = 1
    while(i < 10){
        console.log(`6 x ${i} = ${6 * i}`);
        i++
    }

    for(let i = 1; i<10; i++){
        console.log(`${i}단 시작-----------`);
        for(let j = 1; j<10; j++){
            console.log(`${i} x ${j} = ${i * j}`);
        }
    }
}