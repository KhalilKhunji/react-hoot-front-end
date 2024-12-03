import { Link } from 'react-router-dom';
import AuthorDate from '../common/AuthorDate';
import styles from './HootList.module.css';
import Icon from '../Icon/Icon';

const HootList = ({hoots}) => {
    return (
        <main className={styles.container}>
        {hoots.map((hoot) => (
            <Link key={hoot._id} to={`/hoots/${hoot._id}`}>
              <article>
                <header>
                <div>
                  <h2>{hoot.title}</h2>
                  <Icon category={hoot.category} />
                </div>
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