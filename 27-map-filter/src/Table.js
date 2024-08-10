import React,{useState, useRef} from 'react'
import { PracTable } from './PracTable';

export const Table = () => {

  const [list, setList] = useState([]); // 글 작성시 내용을 배열
  const [user, setUser] = useState(''); // input에서 작성자 감지
  const [title, setTitle] = useState(''); // input에서 제목 감지
  const [typeVal, setTypeVal] = useState('user'); // select 에서 value 감지
  const [search, setSearch] = useState(''); // 검색창 상태 감지
  const [searchRes, setSearchRes] = useState([]); // 검색한 결과의 배열

  const inputRef = useRef();
  const inputFocus = () => {

    inputRef.current.focus();
  }


  const addTxt = () => { // 작성한 글을 출력하게 해주는 함수

    if( (title.trim().length && user.trim().length) === 0){
      return inputFocus();
  }

    const newTxt = list.concat({
      id: list.length + 1,
      user: user,
      title: title
    });
    console.log(newTxt);
    setList(newTxt);  
  }

  const typeChange = (e) => { // select 에서 선택한 value의 상태를 확인
    setTypeVal(e.target.value);

  }


  const searchResult = (ele) => {
    console.log('searchResult >?>', ele);
    const {id, user, title} = ele;
    console.log(id, user, title);
    const newList2 = searchRes.push({
      id: id,
      user: user,
      title: title
    });

    setSearchRes(newList2);
    console.log('이건 결과야!! >> ', searchRes);
  }

  const searchBtn = (id) => {
    console.log('typeVal >>> ', typeVal);
    // console.log(e);
    if(typeVal == 'user'){
      const newList = list.filter((ele) => console.log(ele.user)
      );
  
    }else if(typeVal == 'title'){
      const newList = list.filter((ele) => {
        if(ele.title.includes(search)){
          return searchResult(ele);
        }else{
          return;
        }
      });
    }
  }

  const searchAll = () => {

  }

  return (
    <div>

      <label htmlFor="user">작성자: </label>
      <input type="text" id='user' ref={inputRef} value={user} onChange={(e) => {
        setUser(e.target.value);
      }}/>

      <label htmlFor="title">제목: </label>
      <input type="text" id='title' value={title} onChange={(e) => {
        setTitle(e.target.value);
      }} />
      <button type='submit' onClick={addTxt} >작성</button>


      <div>
        <select onChange={typeChange}>
          <option value="user">작성자</option>
          <option value="title">제목</option>
        </select>

        <input type="text" value={search} onChange={(e) => {
          setSearch(e.target.value);
        }}/>
        <button type='submit' onClick={searchBtn}>검색</button>
        <button type='button' onClick={searchAll}>전체</button>

      </div>

      {searchRes}

      <PracTable list={list} /> 
      {/* 테이블은 컴포넌트로 따로 만들었으며, list를 props로 보내줍니다. */}
      <hr />

      {/* {searchRes.length > 0 ? <PracTable list={searchRes} /> : <div>검색없어요</div>} */}


    </div>
  )
}
