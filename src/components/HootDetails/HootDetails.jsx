import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import AuthorDate from '../common/AuthorDate';
import CommentForm from '../CommentForm/CommentForm';
import * as commentService from '../../services/commentService';
import * as hootService from '../../services/hootService';


const HootDetails = (props) => {
    const { hootId } = useParams();
    const [hoot, setHoot] = useState(null);

    const handleAddComment = async (commentFormData) => {
      const newComment = await commentService.create(hootId, commentFormData);
      setHoot({...hoot, comments: [...hoot.comments, newComment]});
    };

    useEffect(() => {
        const getHoot = async () => {
          const hootData = await hootService.show(hootId);
          setHoot(hootData);
        };
        getHoot();
    }, [hootId]);

    if (!hoot) return <main>Loading...</main>;
    
    return (
        <main>
          <header>
            <p>{hoot.category.toUpperCase()}</p>
            <h1>{hoot.title}</h1>
            <AuthorDate name={hoot.author.username} date={hoot.createdAt} />
          </header>
          <p>{hoot.text}</p>
          <section>
            <h2>Comments</h2>
            <CommentForm handleAddComment={handleAddComment} />
            {!hoot.comments.length && <p>There are no comments.</p>}
            {hoot.comments.map((comment) => (
                <article key={comment._id}>
                <header>
                <AuthorDate name={comment.author.username} date={comment.createdAt} />
                </header>
                <p>{comment.text}</p>
                </article>
            ))}
            </section>
        </main>
    );
};
  
export default HootDetails;