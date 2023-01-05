import { useEffect, useState } from 'react';
import { FetchTrendingMovies } from 'components/Api/MoviesDB';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'components/Navigation/Navigation.styled';

export default function HomePage() {
  const [list, setList] = useState([]);

  useEffect(() => {
    async function fetchPictures() {
      try {
        const response = await FetchTrendingMovies();
        setList(response);
      } catch (error) {
        toast.error('Wrong!');
      }
    }
    fetchPictures();
  }, []);

  return (
    <>
      <main>
        <h1>Trending today</h1>
        <ul>
          {list.map(item => (
            <li key={item.id}>
              <Link to={`/movies/${item.id}`}>{item.name ?? item.title}</Link>
            </li>
          ))}
        </ul>
      </main>
      <ToastContainer autoClose={3000} />
    </>
  );
}
