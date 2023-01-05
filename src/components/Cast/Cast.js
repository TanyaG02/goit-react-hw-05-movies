import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { MovieCredits } from 'components/Api/MoviesDB';
import { ActorImg, Img, ActorContainer } from './Cast.styled';

export const Cast = () => {
  const [actors, setActors] = useState([]);

  const location = useLocation();
  const preId = location.pathname.slice(8);
  const id = preId.slice(0, -5);

  useEffect(() => {
    async function FetchActors() {
      try {
        const findActors = await MovieCredits(id);
        setActors(findActors);
      } catch (error) {
        console.log(error);
      }
    }
    FetchActors();
  }, [id]);

  return (
    <>
      {actors !== [] && (
        <ActorContainer>
          {actors.map(({ id, profile_path, original_name, character }) => (
            <li key={id}>
              {profile_path ? (
                <ActorImg
                  src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                  alt="No image"
                />
              ) : (
                <Img
                  src="https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg"
                  alt="No image"
                  height={300}
                  width={200}
                />
              )}
              <div>
                <p>Name: {original_name}</p>
                <p>Character: {character}</p>
              </div>
            </li>
          ))}
        </ActorContainer>
      )}
    </>
  );
};
