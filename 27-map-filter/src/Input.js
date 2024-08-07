import React, { useState } from 'react';

export const Input = () => {
  const [info, setInfo] = useState([
    {
      id: 1,
      name: '코디',
      email: 'gg@gmail.com',
    },
  ]);

  const [inputName, setInputName] = useState('');
  const [inputMail, setInputMail] = useState('');

  // 글자 추가

  const addInfo = () => {

    if ((inputName.trim().length || inputMail.trim().length) === 0) {
      return;
    }

    const newInfo = info.concat({
      id: info.length + 1,
      name: inputName,
      email: inputMail,
    });
    setInfo(newInfo);
  };

  // 키보드 이벤트
  const handleKeyDown = (e) => {
    if (e.code == 'Enter') {
      addInfo();
    }
  };


  // 글자 삭제
  const deleteInfo = (targetId) => {
    const newInfo = info.filter((user) => user.id !== targetId);

    setInfo(newInfo);
  }

  return (
    <div>
      <input
        type='text'
        value={inputName}
        onChange={(e) => {
          setInputName(e.target.value);
        }}

        placeholder='이름 입력'
      />
      <input
        type='mail'
        value={inputMail}
        onChange={(e) => {
          setInputMail(e.target.value);
        }}
        onKeyDown={(e) => handleKeyDown(e)}
        placeholder='이메일 입력'
      />
      <button type='submit' onClick={addInfo}>
        등록
      </button>

      <ul>
        {info.map((user) => {
          return (
            <li key={user.id} onDoubleClick={(e) => deleteInfo(user.id)}>
              {user.name}: {user.email}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
