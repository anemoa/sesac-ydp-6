import React from 'react';

export const PracTable = (props) => {

    // console.log(props);
    const {list} = props;


  return (
    <div>
      <table border='1'>
        <tr>
          <th>번호</th>
          <th>제목</th>
          <th>작성자</th>
        </tr>

        {list.map((ele) => {
          return (
            <tr>
              <td>{ele.id}</td>
              <td>{ele.title}</td>
              <td>{ele.user}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};
