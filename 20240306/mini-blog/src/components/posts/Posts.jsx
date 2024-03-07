import { useEffect } from "react";
import { useState } from "react";
import Post from "../post/Post";

const Posts = ({ reload }) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => { //duomenu istraukimas
        let data = localStorage.getItem('data');
        // console.log(data)

        if (!data) //if'as reikalingas, kad 
            return;

        data = JSON.parse(data);
        setPosts(data);

    }, [reload]) //lauztiniai skliaustai butini, kad isvengtume infinite loop'o

    return (
        <div className="posts">
            {posts.map((post, index) =>
           <Post post={post} key={index} />
          ) }
        
        </div>
    )
}

export default Posts