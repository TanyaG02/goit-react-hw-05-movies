import { useParams } from 'react-router-dom';
import { MovieDetails } from 'components/Api/MoviesDB';
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { CardFilm } from 'components/CardFilm/CardFilm';

export default function MovieDetailsPage() {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    async function fetchItem() {
      try {
        const item = await MovieDetails(itemId);
        setItem(item);
      } catch (error) {
        toast.error('Wrong!');
      }
    }
    fetchItem();
  }, [itemId]);

  return (
    <>
      {item && <CardFilm item={item} />}
      <ToastContainer autoClose={3000} />
    </>
  );
}
