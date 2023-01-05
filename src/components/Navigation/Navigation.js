import { Outlet } from 'react-router-dom';
import { Header, Nav, Link } from './Navigation.styled';

export const Navigation = () => {
  return (
    <>
      <Header>
        <Nav>
          <Link to="home">Home</Link>
          <Link to="/movies">Movies</Link>
        </Nav>
      </Header>
      <Outlet />
    </>
  );
};
