import { fireEvent, render, screen } from "@testing-library/react";
import WatchList from "../Comopnents/WatchList";
import { BrowserRouter } from "react-router-dom";
import store from "../Store/Store";
import { Provider } from "react-redux";


beforeEach(() => {
    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem: jest.fn(() => JSON.stringify([
          {
            id: 1,
            poster_path: "/wkfG7DaExmcVsGLR4kLouMwxeT5.jpg",
          },
        ])),
        setItem: jest.fn(), // Mock setItem method
      },
      writable: true,
    });
  });
  
  const MockWatchList = () => {
    return <BrowserRouter>
         <Provider store={store} >
             <WatchList />
         </Provider>
     </BrowserRouter>
 }
 
  
  test('renders movies from localStorage in WatchList component', () => {
    render(<MockWatchList />);
    
    
    const moviePosters = screen.getAllByAltText('movie_poster');
    expect(moviePosters).toHaveLength(1); 
  });


  it('removes a movie from watchlist when close button is clicked', () => {
    render(<MockWatchList />);
    fireEvent.click(screen.getByAltText('close'));
    
    const moviePosters = screen.queryAllByAltText('movie_poster');
    expect(moviePosters).toHaveLength(0); 
    
    expect(localStorage.setItem).toHaveBeenCalledWith(
      'watchList', 
      JSON.stringify([])
    );
  });