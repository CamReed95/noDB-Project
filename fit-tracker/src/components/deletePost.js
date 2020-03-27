import React from 'react';

export default function deletePost(props) {
    const {id} = props
    return <div>
        <button onClick={() => props.deletePost(id)}>Delete Post</button>
    </div>

// render() {
//     return() {
//         <div>
//             <button onClick={() => props.deletePost(id)}>Delete Post</button>
//         </div>
//     }
// }


}

