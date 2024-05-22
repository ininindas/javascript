// Date
{
    // const today = new Date()
    // console.log(today);
    // console.log(today.toLocaleString());

    // const someday = new Date('2022/11/10')
    // console.log(someday);
    // console.log(someday.toLocaleString());
}
{
    const now = new Date()
    const year = now.getFullYear()
    const month = now.getMonth()
    const date = now.getDate()

    const today = `${year}년 ${month + 1}월 ${date}일`
    document.querySelector('.text').innerHTML = today
}

// 현제 날짜부터 특정 날짜까지 몇일이 남았는지 구하는 식
// 남은 일수(밀리초) = 특정날짜(밀리초) - 현제날짜(밀리초) 
// getTime() : 1970 1 월 1 일 부터 현재까지 경과된 시간을 밀리초로 표시
// Math.ceil : 소숫점 첫째 자리부터 무조건 올림하여 점수를 구함
// 1초 = 1000 , 1분 = 1000 * 60 , 1시간 1000 * 60 * 60 , 1일 = 1000 * 60 * 60 * 24

// 현제날짜부터 연말까지 남은 일수 구하기
{
    const today = new Date()
    console.log(today.getTime());
    const year = today.getFullYear()
    const endDate = new Date(year, 11, 31)
    const remainDate = endDate.getTime() - today.getTime()

    const result = Math.ceil(remainDate / (1000 * 60 * 60 * 24))

    console.log(result);
}