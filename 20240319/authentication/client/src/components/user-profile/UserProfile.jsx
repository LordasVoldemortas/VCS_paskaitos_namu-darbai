import style from './UserProfile.module.css'

const UserProfile = ({ data }) => {
    // console.log(data);
    return (
        <div className={style.profile}>
            <div className={style.photo}>
                <img src={'http://localhost:3000/uploads/' + data.photo} />
            </div>
            <div className={style.info}>
                <div className={style.userName}>
                    {data.user_name}
                </div>
                <div className={style.postsCount}>
                    <strong>{data.postCount}</strong>
                    <span>posts</span>
                </div>
                <div className={style.bio}>
                    {data.bio}
                </div>
            </div>
        </div>        
    )
}

export default UserProfile