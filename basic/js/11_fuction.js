// function 함수

// 함수 선언 과 호출
function hello() {
    console.log('안녕 자바스크립트~~~'); // 함수를 선언만 해선 아무것도 나오지 않음
}

hello()                                // 함수 호출


const sayhello = function(){
    console.log('😎😎hello');
}

sayhello()

const sayhello2 = () => console.log('😎😎hello')
sayhello2()


// 2. 매개변수 parameter
function printMassage(massage){
    console.log(massage);
}
printMassage('하하하')
printMassage('파파파')

// 3. 기본 매개변수
function showInfo(title,name = '스티브잡스'){
    console.log(`${title} by ${name}`);
}
showInfo('베르니카','피카소')
showInfo('풍경')                          // 매개변수는 두겐대 하나만 적으면 변수에 잡힌 기본값이 나오고 그것도 없으면 undefined

// 4. Rest 매개변수 / Spread 연산자
function printALL(...items){                // 여러게의 변수를 표현할때 앞에 ...을 씀 3개만
    for(let i =0; i<3; i++) {
        console.log(items[i]);
    }
}
printALL('봄','여름','가을','겨울','안녕','자바')

// 5. Scope 
const movie = '하하하'                          //함수 밖에서 자유로운 변수 global변수(전역변수)

function printMovie(){
    const myMovie = '생활의 발견'
    console.log(myMovie);                       // 함수안에 있는 변수를 local변수 (지역변수)
    console.log(movie);
}
printMovie()

// console.log(myMovie);
console.log(movie);

// 6. Return
function plus(a,b){
    return a+b                                  //return 리턴은 만나면 뒷줄 무시하고 끝남
    console.log('계산을 마쳤습니다'); 
}
const result = plus(5,10) 
console.log(result);

// 7. callback function 콜백함수                       
const call = function(myname, printPicasso,printJobs){
    if(myname === 'Picasso') {
        printPicasso()
    } else{
        printJobs()
    }
}

const printPicasso = function(){
    console.log('Im Picasso');
}

const printJobs = function(){
    console.log('Im Jobs');
}

call('Picasso',printPicasso,printJobs)

// 8. arrow function
const add = function(a,b){
    return a+b
}

const add2 = (a,b) => a+b

const sum = add(8,8)
const sum2 = add(10, 20)

console.log(sum,sum2);