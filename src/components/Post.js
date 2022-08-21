import React from 'react'
const Post = ({lists}) => {
    return (
        <div className="post">
            <h3>
                {lists.title}
            </h3>
            <p>
                {lists.body}
            </p>
        </div>
    )
}

export { Post }