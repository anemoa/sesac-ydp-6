import React, {useEffect, useState} from 'react'

export const PostList = (props) => {
    console.log(props.post);

    const {post} = props;
    const [posts, setPosts] = useState([]);
    // console.log();

    useEffect(() => {
      setTimeout(function(){
        setPosts(post);
      }, 2000);
    }, [posts]);



  return (
    <div>
      {posts.length === 0 ? <h1>로딩중</h1> : posts.map((ele) => {
        return (
          <div key={ele.id} style={{width: '50%',
           backgroundColor: '#eee',
           padding: '10px 20px',
           marginBottom: '30px',
           borderRadius: '10px',
           boxShadow: '3px 8px 15px 3px'
           }}>
            <span>{ele.id}. </span>
            <span>{ele.title}</span>
            <p>{ele.body}</p>
          </div>
        )
      })}
    </div>
  )
}
