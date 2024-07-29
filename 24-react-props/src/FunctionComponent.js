// 함수형
// 직관적으로 함수 이름 만들고, 보여줄 html 요소 return문에 작성
// 화살표 함수(함수 표현식)로 작성해도 되고, 함수선언문 으로 작성해도 된다
import PropTypes from 'prop-types';

const FunctionComponent = (props) => {
    console.log('Function props >> ', props); // {name: 'SeSAC 6기'}
    const {name} = props;
    const teacher = 'damon';
    return(
        <>
            <h1>Hi, {teacher}</h1>
            <p>여기는 Functional Component</p>
            {/* props 사용할 때 */}
            {/* <p>
                새로운 컴포넌트의 이름은 <b>{props.name}</b>
            </p> */}
            <p>
                새로운 컴포넌트의 이름은 <b>{name}</b>
            </p>
        </>
    );
}

// defaultProps: 부모 컴포넌트에서 props를 미전달시 기본 값을 보여줄 props 설정
// FunctionComponent.defaultProps = {
//     name: 'didi'
// }

//propTypes: 컴포넌트의 필수 props를 지정 or props 타입을 지정할 때 사용
// TypeScript가 아닌 Javascript의 "유연한 특성" 때문에 문제가 생길 수 있다
// --> 이를 해결하기 위해 권장


// default도 없어야 isRequired 동작을 함.
FunctionComponent.propTypes = {
    // 프로퍼티의 자료형을 객체 형태로 지정하여 FunctionComponent.prototype에 저장
    name: PropTypes.string
    // "string" 타입이자 "필수값" 으로 지정
    // props가 반드시 제공되어야 함을 의미
}


export default FunctionComponent;


// TMI
// 리액트 18부터, React.StrictMode가 기본적으로 활성화가 된다
// 이는 개발모드에서 컴포넌트의 렌더링과 라이프사이클(생명주기) 메소드가 2번 호출되도록 해서
// 부작용을 테스트하고 식별하는데 도움을 준다
// 이로 인해서 console.lop가 두 번 찍힐 수 있다.