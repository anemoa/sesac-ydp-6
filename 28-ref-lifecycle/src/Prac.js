import React from 'react';
import axios from 'axios';
import { PostList } from './PostList';
import { useEffect, useState } from 'react';


export const Prac = () => {

const [fakePosts, setFakePosts] = useState([]);

  const getPost = async() => {
    try{
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/posts`
      );

      setFakePosts(res.data);
    } catch (error){
      console.log(error);
    }

    console.log(fakePosts);
  };

  
  useEffect(() => {
    getPost();
  },[fakePosts] )


  return (
    <div>

    <PostList post={fakePosts} />
    </div>
  )
}
