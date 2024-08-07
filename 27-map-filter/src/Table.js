import React,{useState} from 'react'

export const Table = () => {

  const [list, setList] = useState([]);

  const [user, setUser] = useState('');
  const [title, setTitle] = useState('');


  const addTxt = () => {
    const newTxt = list.concat({
      id: list.length + 1,
      user: user,
      title: title
    });
    console.log(newTxt);
    setList(newTxt);  
  }

  return (
    <div>

      <label htmlFor="user">작성자: </label>
      <input type="text" id='user' value={user} onChange={(e) => {
        setUser(e.target.value);
      }}/>

      <label htmlFor="title">제목: </label>
      <input type="text" id='title' value={title} onChange={(e) => {
        setTitle(e.target.value);
      }} />
      <button type='submit' onClick={addTxt} >작성</button>


      <div>
        <select name="" id="">
          <option value="user">작성자</option>
          <option value="title">제목</option>
        </select>

        <input type="text" />
        <button type='submit'>검색</button>

      </div>

      <table border='1'>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>

          {list.map((ele) => {
            return (
              <tr >
                <td>{ele.id}</td>
                <td>{ele.title}</td>
                <td>{ele.user}</td>
              </tr>
            );
          })}
      </table>
    </div>
  )
}
