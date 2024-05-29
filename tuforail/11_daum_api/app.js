// key - 	07600a7b8d1c6461701d9041f14de5fb
// https://dapi.kakao.com/v3/search/book?target=title
// query=미움받을 용기
// Authorization: KakaoAK ${REST_API_KEY}

const input = document.querySelector('form input')
const btn = document.getElementById('btn')
const bookContanier = document.querySelector('.book_container')

let bookName = 'html'

function getBooks(){
    $.ajax(
    {
        method: 'GET',
		url: 'https://dapi.kakao.com/v3/search/book' , 		
		data: {
            query: bookName,
            size: 20 
        },
        headers : {
            Authorization: 'KakaoAK 07600a7b8d1c6461701d9041f14de5fb'
        }
	 }).done(function(books){
        const bookItems = books.documents

        console.log(bookItems);

        const bookItem = bookItems.map(itme => {
            return `<div class="book">
                        <img src="${itme.thumbnail}" alt="">
                        <h4>${itme.title}</h4>
                        <p>가격 : ${itme.price}</p>
                        <p>출판사 : ${itme.publisher}</p>
                    </div>`
        }).join('')

        bookContanier.innerHTML = bookItem
     })
}

getBooks()

btn.addEventListener('click',function(e){
    e.preventDefault()
    if(input.value === '') return
    bookName = input.value
    getBooks()
    input.value = ''
})