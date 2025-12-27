import '../styles/MovieCard.css';

const MovieCard = ({ image, rank }) => {
    return (
        <div className="movie-card">
            {/* Rank Number */}
            <div className="movie-rank">{rank}</div>

            {/* Movie Poster */}
            <div className="movie-poster">
                <img src={image} alt="" />
            </div>
        </div>
    );
};

export default MovieCard;