const Post = ({ post }) => {
    return (
    <div className="post" >
                    <img src={post.photo} />
                    <h5 className="fs-6 fw-bold">{post.category}</h5>
                    <h4 className="fs-5 fw-bold">{post.title}</h4>
                    <p className="pharagraphs">{post.content}</p>
                        <div className="d-flex">
                            <img src={post.authorPhoto} className="rounded-circle authorPhoto"/>
                            <div className="style px-3"> 
                            <p className="my-1 fw-bold">{post.author}</p>
                            <p>{post.authorRole}</p></div>
                        </div>
                        </div>
                        )

}
export default Post