import { useTranslation } from 'react-i18next';
import MovieCard from './MovieCard';
import '../styles/Trending.css';

const Trending = ({ movies }) => {
    const { t } = useTranslation();

    return (
        <section className="trending">
            <div className="trending-container">
                <div className="trending-header">
                    <h2 className="trending-title">{t('trending.title')}</h2>
                    <p className="trending-subtitle">{t('trending.subtitle')}</p>
                </div>

                <div className="trending-scroll-wrapper">
                    <div className="trending-cards">
                        {movies.map((movie) => (
                            <MovieCard
                                key={movie.id}
                                image={movie.image}
                                rank={movie.rank}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Trending;