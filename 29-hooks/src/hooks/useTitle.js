import React, {useEffect} from 'react'

// custom hooks
export const useTitle = (custom) => {
    useEffect(() => {
        // Mount 시 실행 공간
        const prevTitle = document.title;
        document.title = custom;

        // unMount 시 실행 공간 (return을 기준으로 나뉨)
        return () => {document.title = prevTitle}
    }, [custom]); // custom이 변경 될 때 마다 문서의 제목을 업데이트 함
}


// 페이지의 제목을 동적으로 설정
// 컴포넌트가 언마운트 될 때 이전 제목으로 복원하는 기능