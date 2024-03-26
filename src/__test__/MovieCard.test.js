import { render, screen } from '@testing-library/react';
import MovieCard from '../Comopnents/MovieCard'


jest.mock('react-dnd', () => ({
    useDrag: jest.fn(),
  }));
  it('renders movie card with provided poster path', () => {
    const mockDrag = {
      isDragging: false,
      drag: jest.fn(),
    };

    
    require('react-dnd').useDrag.mockReturnValue([mockDrag]);

    const posterPath =  "/wkfG7DaExmcVsGLR4kLouMwxeT5.jpg";
    const movie = {
      id: 1,
      title: 'Movie 1',
    };

    
    render(<MovieCard poster_path={posterPath} movie={movie} />);

    
    const moviePoster = screen.getByAltText('movie_poster');
    expect(moviePoster).toBeInTheDocument();
  });  