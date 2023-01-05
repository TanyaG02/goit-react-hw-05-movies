import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { MovieReview } from 'components/Api/MoviesDB';
import { Item, TextAuthor, TextContent } from './Reviews.styled';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  const location = useLocation();
  const preId = location.pathname.slice(8);
  const id = preId.slice(0, -8);

  useEffect(() => {
    async function Reviews() {
      try {
        const reviewItem = await MovieReview(id);
        setReviews(reviewItem);
      } catch (error) {
        console.log(error);
      }
    }
    Reviews();
  }, [id]);

  if (reviews.length !== 0) {
    return (
      <ul>
        {reviews.map(({ id, author, content }) => (
          <Item key={id}>
            <TextAuthor>Author: {author}</TextAuthor>
            <TextContent>{content}</TextContent>
          </Item>
        ))}
      </ul>
    );
  } else {
    return <h3>We don`t have any reviews for this movie</h3>;
  }
};
