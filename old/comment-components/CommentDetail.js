import React from 'react';
// import faker from 'faker';

// const get_avatar = function(img_src) {
//     if (img_src === undefined) {
//         return faker.image.avatar()
//     } else {
//         return img_src
//     }
// }

const CommentDetail = (props) => {

    return (
        <div className="comment">
            <a className="avatar" href="/"><img src={props.img_src} alt="avatar"></img></a>
            <div className="content">
                <a className="author">{props.authorName}</a>
                <div className="metadata"><span className="date">{props.timestamp}</span></div>
                <div className="text">{props.content}</div>
                <button className="reply-button" style={{ borderRadius: "10px" }}>Reply</button>
            </div>
        </div>
    )
}

export default CommentDetail;