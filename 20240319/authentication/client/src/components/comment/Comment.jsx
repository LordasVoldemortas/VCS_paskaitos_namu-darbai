import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SingleComment from '../single-comment/SingleComment.jsx';
import NewComment from '../new-comment/NewComment.jsx';
import style from './Comment.module.css';
import axios from 'axios';

const Comment = ({ setViewComment, data }) => {
    const [commentsData, setCommentsData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if(loading) return
        
        axios.get('http://localhost:3000/comments/' + data._id)
        .then(resp => setCommentsData(resp.data));
    }, [loading]);

  
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div className={style.comment}>
            <div 
                className={style.close}
                onClick={() => setViewComment(false)}
            >
                <i className='bi bi-x'></i>
            </div>
           
            <div className={style.modal}>
                <div className={style.leftSide}>
                    <img 
                        src={'http://localhost:3000/uploads/' + data.photo} 
                        className={style.mainPhoto}
                    /> 
                </div>
                <div className={style.rightSide}>
                    <div className={style.userInfo}>
                        <img 
                            src={'http://localhost:3000/uploads/' + data.author.photo} 
                            className={style.userPhoto}
                        />
                        <strong className={style.userName}>{data.author.user_name}</strong>
                    </div>
                    <div className={style.commentsList}>
                        {/* Originalus aprašymas */}
                        <SingleComment data={{
                            ...data,
                            text: data.description
                        }} />  
                        {commentsData.map(comment => 
                            <SingleComment data={comment} key={comment._id} />  
                        )}
                    </div>
                    <div className={style.newComment}>
                        {loading && <div className={style.loader}>Kraunasi...</div>}
                        <NewComment 
                            post_id={data._id} 
                            setLoading={setLoading}
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Comment

