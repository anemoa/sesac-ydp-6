// 컴포넌트 작성법
// 1. function 만들기
// 2. return () 안에서 html 작성
// 3. <함수명></함수명> or <함수명 /> 도 가능

// 화살표 함수도 가능
// const Larva = () => {}

// Q. 언제 사용하면 좋을까?
// A. 반복적으로 html 축약 버전으로 사용
// A. 큰 페이지
// A. 자주 변경되는 UI
// + 장점: html 지저분한 코드를 깔끔하게 정리 할 수 있다.
// 다른사람이 보거나 나중에 본인이 봐도 한 눈에 이 컴포넌트가 무슨 용도의 html인지 알 수 있다.


// 지역변수 개념
import './Larva.css';


function Larva() {
  return (
    <>
      <div class='bug_container'>
        <div class='box bug1'>
          <div class='eye_w'></div>
          <div class='eye_b'></div>
        </div>
        <div class='box bug2'></div>
        <div class='box bug3'></div>
        <div class='box bug4'></div>
        <div class='box bug5'></div>
      </div>
    </>
  );
}

export default Larva;
