// 문자열 String
// 문자형 데이터를 객체로 취급

{
    const str = 'you he she they we he me' // 공백까지 객체가 됨
    console.log(str.length);
    console.log(str.charAt(4)); // 인덱스에 해당하는 문자열만 
    console.log(str.indexOf('he')); // 제일먼저 해당하는 문자만 취급 *없으면 -1 이 나옴*
    console.log(str.lastIndexOf('he')); // 뒤에서부터 먼저 해당하는 놈 찾음 똑같이 없으면 -1
    console.log(str.match('he'));
    console.log(str.match('he').input);
    console.log(str.match('he').input);
    console.log(str.replace('they','html')); // 교체 바꾸기
    console.log(str.search('she'));
    console.log(str.slice(4,10));
    console.log(str.substring(3,12)); //3부터 12이전까지
}

// 문자열을 배열로 만들기
{
    const str = 'html,css,javascript'
    const result = str.split(',')  //  ()안의 것을 기준으로 잘라서 나뉜다.
    console.log(result);
}

// 대소문자
{
    const str = 'hello'
    console.log(str.toUpperCase());
    console.log(str.toLowerCase());
}

// 문자열 합치기
{
    const str = 'hello'
    const result = str .concat('       world')
    console.log(result);
}

//공백  제거
{
    const str = ' hello world'
    const result = str.trim()
    console.log(str);
    console.log(result);
}

// 방문자의 이름을 문자로 출력
// 전화번호의 뒷자리 4개를 *로 출력
{
    // const name = prompt('당신의 이름은?')
    // const phone = prompt('당신의 연락처는?', '')
    // const name2 = name.toUpperCase()
    // const phone2 = phone.substring(0,phone.length - 4) + '****'
    // document.write(name2,'<br>')
    // document.write(phone2,'<br>')
}