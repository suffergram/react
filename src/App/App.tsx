import { useState } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import MovieModal from '../MovieModal/MovieModal';
import DeleteModal from '../DeleteModal/DeleteModal';
import * as info from '../Main/info';

interface MovieObject {
  id: number,
  name: string,
  year: number,
  duration: string,
  rating: number,
  genre: string,
  url: string,
  description: string
}

export default function App() {
  const [isMovieModalOpen, setIsMovieModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [modalType, setModalType] = useState<string | null>(null);

  const [isMovieInfoOpen, setIsMovieInfoOpen] = useState(false);
  const [movie, setMovie] = useState<MovieObject | null>(null);

  const handleMovieModalOpen = (name: string) => {
    setModalType(name);
    setIsMovieModalOpen(true);
  };

  const handleMovieModalClose = () => setIsMovieModalOpen(false);

  const handleDeleteModalOpen = () => setIsDeleteModalOpen(true);

  const handleDeleteModalClose = () => setIsDeleteModalOpen(false);

  const handleMovieInfoOpen = (currentMovie: MovieObject) => {
    setIsMovieInfoOpen(true);
    setMovie(currentMovie);
  };

  const handleMovieInfoClose = () => setIsMovieInfoOpen(false);

  return (
    <>
      <Header
        onMovieModalOpen={handleMovieModalOpen}
        onMovieInfoClose={handleMovieInfoClose}
        isMovieInfoOpen={isMovieInfoOpen}
        movie={movie}
      />
      <Main
        onMovieModalOpen={handleMovieModalOpen}
        onDeleteModalOpen={handleDeleteModalOpen}
        onMovieInfoOpen={handleMovieInfoOpen}
        movies={info.movies}
      />
      <Footer />
      <MovieModal
        onModalClose={handleMovieModalClose}
        isModalOpen={isMovieModalOpen}
        title={`${modalType} movie`}
      />
      <DeleteModal
        onModalClose={handleDeleteModalClose}
        isModalOpen={isDeleteModalOpen}
      />
    </>
  );
}
