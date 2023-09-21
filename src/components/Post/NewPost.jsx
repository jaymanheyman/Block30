import { useState } from 'react';
import BASE_URL from "../../API/index.js";
import { useNavigate } from 'react-router-dom';

export default function CreatePost({ token }) {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const createNewPost = async () => {
        setIsLoading(true);

        try {
            const response = await fetch(`${BASE_URL}/post`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ title, content })
            });

            const result = await response.json();
            console.log(result);

            navigate('/post');
        } catch (err) {
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            <h2>Create a New Post</h2>
            <form onSubmit={(e) => { e.preventDefault(); createNewPost(); }}>
                <label>Title:</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />

                <label>Content:</label>
                <textarea value={content} onChange={(e) => setContent(e.target.value)} />

                <button type="submit" disabled={isLoading}>
                    {isLoading ? 'Creating...' : 'Create Post'}
                </button>
            </form>
        </div>
    );
}
