// Array 배열
// 1. 배열 만들기
{
    const arr1 = new Array()
    console.log(arr1);
    arr1[0] = 10
    arr1[1] = 'hello'

    const arr2 = [1, 3, 5, 7, 9] // 주로 씀
    console.log(arr2);

    const arr3 = ['what', 'are','you','doing',100,true]
    console.log(arr2);
    const arr4 =[
        'a',
        {modle: 'apple', price: 1000},
        {modle: 'galexy', price: 2000}
    ]

    console.log(arr4);
    console.log(arr4[1].modle);
}

// 2. 배열 출력
{
    const books = ['html','css', 'javascript','react']
    console.log(books.length);
    console.log(books[0]); // 배열의 첫 요소
    console.log(books[books.length-1]); // 배열의 마지막 요소 확인

    for(let i = 0; i<books.length; i++){
        console.log(books[i]);
    }

    // for of
    for(let book of books){
        console.log(book);
    }

    // for in
    for(let key in books){
        console.log(books[key]);
    }

    // foreach****

    // function(){
    //     //실행문
    // }
    // () => {} //위에랑 같다..

    books.forEach(function(book){
        console.log(book + ` is good`);
    })
    books.forEach(book => {
        console.log(''+book);
    });

    // Map**** : 새로운 배열을 리턴
    const newbooks = books.map(book => {
        return ` 1 ${book}`
    })

    console.log(newbooks);

    const newbooks2 = books.map(item => `${item}  55`)

    console.log(newbooks2);

}

// 3. 배열 메서드
{
    const books = ['html','css', 'javascript','react', 'jquery']

    console.log(books.join('-')); // 배열을 문지열로 만들기  ()에 넣는 요소가 중간에 들어감 비어있으면 , 
    console.log(books.reverse()); // 순서를 반대로
    console.log(books.sort()); // 알파벳 순서대로

    books.push('php') // 맨뒤에 배열 추가하기
    console.log(books);

    books.unshift('jsp') // 맨앞 배열 추가
    console.log(books);

    books.pop() // 맨뒤 배열 삭제
    console.log(books);

    books.shift() // 맨앞 배열 삭제
    console.log(books);

    // splice  지정한 위치에서 삭제, 추가

    books.splice(2,1,'gkgkgk','ghghgh')  // 순서와 새로운 배열
    console.log(books);

    const books2 = ['get','nodlejs']
    const newbooks = books.concat(books2) // 배열 합치기
    console.log(newbooks);

    const antherbooks = newbooks.slice(2,4) // 원하는 구간 만큼 잘라서 새로운 배열 리턴    이런류는 항상 받을 곳이 새로 필요함
    console.log(antherbooks);

    console.log(books);
    console.log(books.indexOf('react')); // 검색기능
    console.log(books.includes('css'));  // 검색을 참 거짓으로 표현
    console.log(books.includes('213123'));
    
    
}

// 4. 활용
{
    const sojus = [
        { name: '대선', price: 1200, sale : true, score : 86},
        { name: '좋은대이', price: 1400, sale : false, score : 92},
        { name: '진로', price: 1150, sale : true, score : 80},
        { name: '금복주', price: 960, sale : false, score : 60},
        { name: '참이슬', price: 1250, sale : true, score : 46},
    ]

    // 점수가 80점인 소주 찾기

    const result = sojus.find(soju => soju.score === 80)
    console.log(result.name);

    // 판매중인 소주를 찾아서 새로운 배열로 만들기
    const result2 = sojus.filter(item =>item.sale) // ! 쓰면 부정이니까 반대
    console.log(result2);

    // 점수만 있는 새로운 배열 만들기
    const result3 = sojus.map(item => item.score)
    console.log(result3);

    //점수가 50 보다 작은 소주가 있는지 확인하기

    const result4 = sojus.some(item => item.score < 50) // 있냐 없나만 참 거짓으로 확인 뭔지 찾을 꺼면 find
    console.log(result4);

    const result5 = sojus.find(item => item.score < 50)
    console.log(result5);

    //소주들의 평균가격 구하기

    const result6 = sojus.reduce((prev,current)=>{        // (생략은 객체 한개만 쓸때 2개이상쓰면 ()를 써줘야함)
        return prev + current.price                       // 합계를 구하는 식
    },0)

    console.log(result6 / sojus.length);

    // 점수를 문자로 구하는 식 

    const result7 = sojus
    .map(item => item.score)
    .join(' - ')
    console.log(result7);

    // 점수가 낮은순으로 문자열로 정령하기
    const result8 = sojus
        .map(item => item.score)
        .sort((a,b) => a - b)
        .join()
    console.log(result8);
        
}

