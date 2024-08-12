import React from 'react'
import styles from './styles/cssModule.module.css';

// CSS module
// 클래스명 중복 방지

export const CssModuleComponents = () => {
    console.log(styles);
    // 새로운 고유 번호 부여

  return (
    <div className={styles.container}>
        <div className={[styles.box, styles.red].join(' ')}>1</div>
        {/* 두 클래스를 동시에 적용 */}
        {/* 배열의 요소들을 문자열로 합쳐서 클래스명을 한 줄로 만들어야 함 */}
        {/* styles.box styles.red */}
        <div className={[styles.box, styles.orange].join(' ')}>2</div>
        <div className={`${styles.box} ${styles.yellow}`}>3</div>
        {/* 백틱을 사용한 템플릿 리터럴, 두 클래스를 함께 적용 */}
        {/* 가장 간단하며 가독성 좋음. 추천 */}
    </div>
  )
}
