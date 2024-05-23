// Browser Object Model
{
    // window.open('https://naver.com')
    // window.alert('녕안')
    // window.prompt('사람이싶니까?')
    // window.confirm("정말 삭제 하시갰습까?")

    // window.setInterval(()=>{               영원히 하는놈
    //     console.log('아아아아아');    
    // },1000)
    // window.setTimeout(()=>{                한번만 하는놈
    //     console.log('hello');
    // },3000)
}

{
    window.open(
        './popup.html',
        'popup1',
        'width=300, height=200, left=200, top=50'
    )
}

// screen 객체
{
    console.log(screen.width);
    console.log(screen.height);
}

// location 객체
{
    console.log(location.href);                 // 내가 어디있는지 페이지 체크
    console.log(location.hash);
    console.log(location.hostname);
    console.log(location.protocol);
}

// navigator 객체
{
    console.log(navigator.userAgent);
}