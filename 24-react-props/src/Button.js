
// props.children
// 부모 컴포넌트에서 자식 컴포넌트 호출 시 태그 사이에 작성한
// 문자열, 숫자, JSX, 배열 등등 다양한 형태
import './Button.css';
import PropTypes from 'prop-types';

const Button = (props) =>{
    console.log('Btn', props);
    const {Link, children} = props;
    return (
        <>
            <a href={Link}>
                <button className='Btn'>{children}</button>
            </a>
        </>
    )
};

Button.defaultProps = {
    children: '네이버',
    Link: 'https://naver.com'
}

Button.propTypes = {
    children: PropTypes.string.isRequired,
    Link: PropTypes.string
}

export default Button;