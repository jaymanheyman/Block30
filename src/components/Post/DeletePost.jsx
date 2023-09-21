import { useState } from 'react';
import BASE_URL from "../../API/index.js";
import { useNavigate } from 'react-router-dom';

export default function DeletePost({ token, posts_id }) {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const deletePost = async () => {
        setIsLoading(true);
        
        try {
            const response = await fetch(`${BASE_URL}/post/${posts_id}`, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
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
            <button onClick={deletePost} disabled={isLoading}>
                {isLoading ? 'Deleting...' : 'Delete Post'}
            </button>
        </div>
    );
}
