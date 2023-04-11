import './style'
import Button from '../Button/Button';

export default function Card({ movie }) {
    return (
        <div className='card'>
            <img src={movie.url} />
            <Button className="edit" text="⋮" />
            <div className='description'>
                <div className='year'>{movie.year}</div>
                <p className='title'>{movie.name}</p>
                <p className='genre'>{movie.genre}</p>
            </div>
        </div>
    );
}