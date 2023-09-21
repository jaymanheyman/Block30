import { useState } from 'react';
import BASE_URL from '../../API';
import { useNavigate } from 'react-router-dom';

export default function UpdatePost({ token, posts_id }) {
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleUpdate = async () => {
        try {
            const response = await fetch(`${BASE_URL}/post/${posts_id}`, {
                method: "PATCH",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    post: {
                        title: title,
                        description: description,
                    }
                })
            });

            const result = await response.json();
            console.log(result);

            const isAuthor = true; // Replace this with your logic to determine if the user is the author
            if (isAuthor) {
                navigate('/post');
            } else {
                console.log("Not the author");
            }

            return result;
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <h2>Update Post</h2>
            <label>Title:</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />

            <label>Description:</label>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} />

            <button onClick={handleUpdate}>Update Post</button>
        </div>
    );
}
