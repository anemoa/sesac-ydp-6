import React from 'react';
import { useForm } from 'react-hook-form';

export const FormPractice = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const valid = (data) => {
    console.log('data >>', data);
  };

  const errValid = (err) => {
    console.log('err >>>', err);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(valid, errValid)}>
        <input
          type='text'
          placeholder='name'
          {...register('name', {
            required: '이름은 필수!',
            minLength: {
              message: '최소 2글자는 입력!',
              value: 2,
            },
          })}
        />
        {errors.name?.message}

        <br />

        <input
          type='text'
          placeholder='age'
          {...register('age', {
            required: '입력!!', 
            minLength: {
              message: '0 이상의 숫자 입력!',
              value: 1,
            },
          })}
        />
        {errors.age?.message}
        <br />
        <button type='submit'>제출</button>
      </form>
    </div>
  );
};
