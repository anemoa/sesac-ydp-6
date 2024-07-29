// render() 함수 필수
// return에 실제로 보여주고 싶은 html 요소를 작성
import React from 'react';
import PropTypes from 'prop-types';
// 여기서 React는 Component를 import 하기 위해 필요
// 상속받기 때문

// ** 이렇게도 가능하다 
// import {Component} from 'react';

class ClassComponent extends React.Component {
    // class ClassComponent extends Component{}
    // 클래스 인스턴스 속성, 키워드 없이 정의 가능 (let, const, var)
    // 클래스 메소드 내에선 어디서든 this.키워드로 접근 가능
    student = '이길동';
    
    // 클래스형 컴포넌트는 render 함수 필수!
    render() {
        const teacher = 'yves';
        console.log('props', this.props); // name: "SeSAC 6기"
        const {name} = this.props;

        return (
            <>
                <h1>hello, {teacher} </h1>
                <h2>hi, {this.student}</h2>
                <p>여기는 Class Component</p>
                {/* props 사용할 때 */}
                <p>
                    {/* 이름은 <b>{this.props.name}</b> */}
                </p>
                <p>
                    이름은 <b>{name}</b>
                </p>
            </>
        );
    }

    static defaultProps = {
        name: '이름일까'
    }

    static propTypes = {
        name: PropTypes.string
    }
}

// ClassComponent.defaultProps = {
//     name: '기본 이름'
// }

// ClassComponent.propTypes = {
//     name: PropTypes.string
// }

export default ClassComponent;

// props 작성법

// 부모가 자식한테 줄거임 (반대 x, 형제 친구 다 안됨)
// 1. 부모 쪽에  <자식 컴포넌트 작명={줄 내용} />

// 2. 자식 쪽에 function(props){
//  <h1>props.작명</h1>    
// }