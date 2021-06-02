import React from 'react';
import ReactDOM from 'react-dom';
import ApprovalCard from './ApprovalCard.js';
import CommentDetail from './CommentDetail.js';
import faker from 'faker';
import ava from './www-avatar.png'

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail
                    authorName="Mary"
                    timestamp="12:32PM"
                    content="My name is Mary and I approve this message!"
                    img_src={ava}
                    />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    authorName="Corrin"
                    timestamp="6:11 PM"
                    content="Thanks for letting us know Mary."
                    img_src={faker.image.avatar()}
                    />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    authorName="Collin"
                    timestamp="1:57 PM"
                    content="Who even are you Mary?"
                    img_src={faker.image.avatar()}
                    />
            </ApprovalCard>
        </div>
    )
};

ReactDOM.render(<App />, document.querySelector('#root'))