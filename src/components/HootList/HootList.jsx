import { Link } from 'react-router-dom';
import AuthorDate from '../common/AuthorDate';
import styles from './HootList.module.css';

const HootList = ({hoots}) => {
    return (
        <main className={styles.container}>
        {hoots.map((hoot) => (
            <Link key={hoot._id} to={`/hoots/${hoot._id}`}>
              <article>
                <header>
                  <h2>{hoot.title}</h2>
                  <AuthorDate name={hoot.author.username} date={hoot.createdAt} />
                </header>
                <p>{hoot.text}</p>
              </article>
            </Link>
        ))}
        </main>
    );
};
  
export default HootList;