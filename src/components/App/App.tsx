import css from './App.module.css';
import 'modern-normalize';
import SearchBar from '../SearchBar/SearchBar';
import MovieGrid from '../MovieGrid/MovieGrid';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
console.log(css);
function App() {
  return (
    <>
      <SearchBar />
      <MovieGrid />
      <Loader />
      <ErrorMessage />
    </>
  );
}

export default App;
