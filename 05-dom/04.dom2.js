// 요소 가져오기
const div1 = document.getElementById('div1');
console.log(div1);

// 태그 내부 내용 변경
// innerHTML: 태그 사용  가능
// innerText, textContent: 태그가 문자(기호)로 그대로 노출

console.log("innerText >", div1.innerText);
console.log("textContent >", div1.textContent);

div1.innerHTML = '여기는 <b>첫번째</b> 태그';
console.log('innerHTML >', div1);

// innerText와 textContent
// # 공통점
// - 둘 모두 텍스트를 추가한다
// # 차이점
// innerText = HTML 태그를 해석하지 않는다. 보여지는 텍스트만 그대로
// textConent = HTML 태그를 포함하여 처리

// div1.innerText = "여기는 <b>두 번째</b> 태그";
// console.log(div1);

div1.textContent = "여기는 <b>세 번째</b> 태그";
console.log(div1);

// 속성 (attribute) 변경
// setAttribute(속성명, 변경할 속성 값)  -> 속성 값을 "설정"
const naver = document.getElementById('naver');
naver.setAttribute('href', 'https://www.google.com');

const sweet = document.getElementById('sweet');
// sweet.setAttribute('src', '03-css/img/grass.png');

// getAttribute -> 속성 값 "얻기"
console.log(document.getElementById('sweet').getAttribute('src'));

// # 참고! 속성 접근(.) 연산자로도 가능
console.log(document.getElementById('sweet').id); // sweet
console.log(document.getElementById('naver').href); // https://www.google.com

// # 참고2 . 연산자로 속성에 접근하고 = 할당 연산자로 속성 값 변경
document.getElementById('naver').href = '#'; // 내부 앵커 // 현재 페이지의 상단으로 스크롤


// CSS 지정
const h1 = document.querySelector('h1');
const list = document.querySelectorAll('ul > li'); // 유사배열

// CSS 지정
// # 1. style 속성
// style 속성을 이용해 css 지정 가능
// style.XXX (xxx: camelCase)

list[0].style.backgroundColor = 'purple';
list[0].style.fontSize = '20px';
list[0].style.color = 'yellow';

for(let li of list){
    li.style.backgroundColor = 'purple';
    li.style.fontSize = '20px';
    li.style.color = 'yellow';
}

// #2. classList 활용
// xxx.classList.add
// xxx.classList.remove
// xxx.classList.contains: 있는지 없는지 확인 (true / false)
// xxx.classList.toggle: 있으면 제거, 없으면 추가

// h1.classList.add('add-h1');
h1.classList.remove('add-h1');
console.log(h1.classList.contains('add-h1'));
h1.classList.toggle('add-h1');

console.log('---------------------------');

// 요소 찾기
// 계층 구조 (형제, 자식, 부모, 조상, 자손)

const friends = document.querySelector('#friends');
const tigger = document.querySelector('#tigger');

// 1. 자식 요소
console.log(friends.children); // 유사 배열, 자식 모두 선택
console.log(friends.children[0]); // 인덱스 접근

// 2. 부모  요소
console.log(tigger.parentNode);
console.log(tigger.parentNode.parentNode);


// 3. 형제 요소
console.log(tigger.previousElementSibling); // 이전
console.log(tigger.nextElementSibling); // 다음
console.log(tigger.nextElementSibling.nextElementSibling); // 다다음


// 실습

// const mint = document.querySelector('span');
// console.log(mint);

// mint.innerHTML = '민트 초코는 <b>맛 있다!</b>';
// mint.style.color = 'red';


// 새로운 요소 생성
const container = document.querySelector('.container');
const p = document.createElement('p'); // p 태그 생성
console.log(p);
p.innerText = '새로 추가된 p 요소 이다'
p.style.fontWeight = 700;
p.style.backgroundColor = 'green';

// 새로 만든 요소를 추가해보자
// x.append(y): x 요소의 맨 마지막 자식으로 y 요소가 추가된다.
// x.appendChild(y)
div1.appendChild(p);

const p2 = document.createElement('p');
const p3 = document.createElement('p');

p2.innerHTML = 'p2';
p3.innerHTML = 'p3';

p2.classList.add('p-2');
p3.classList.add('p-3');

container.append(p2, p3); // apend는 여러개 추가 가능

// x.prepend(y): x요소의 맨 처음 자식으로 y 요소 추가

const li1 = document.createElement('li');
li1.textContent = '하이';
friends.prepend(li1);

const li0 = document.createElement('li');
li0.innerHTML = '<b>친구를 소개한다</b>';
friends.prepend(li0);

// 요소 삭제
// x.remove(): x요소 자체를 삭제
// x.removeChild(y): x의 자식 요소 y를 삭제

const firstLi = document.querySelector('li');
console.log(firstLi); // 친구를 소개한다 li 태그

const ul = firstLi.parentNode;
// ul.removeChild(firstLi);

// firstLi.remove();
// ul.remove();