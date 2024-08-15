import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as hootService from '../../services/hootService';


const HootDetails = (props) => {
    const { hootId } = useParams();
    const [hoot, setHoot] = useState(null);

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
            <p>
              {hoot.author.username} posted on&nbsp;
              {new Date(hoot.createdAt).toLocaleDateString()}
            </p>
          </header>
          <p>{hoot.text}</p>
          <section>
            <h2>Comments</h2>
          </section>
        </main>
    );
};
  
export default HootDetails;