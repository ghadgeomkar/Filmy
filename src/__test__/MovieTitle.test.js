import { render, screen } from "@testing-library/react"
import MovieTitle from "../Comopnents/MovieTitle"
import { Provider } from "react-redux"
import store from "../Store/Store"
import { BrowserRouter } from "react-router-dom"

const MockMovieTitle = () => {
   return <BrowserRouter>
        <Provider store={store} >
            <MovieTitle />
        </Provider>
    </BrowserRouter>
}

test('Check the MovieTitle Component is render or not', () => {
    render(<MockMovieTitle />)
    const getText = screen.getByRole('heading', { name: 'The Marvels' })
    expect(getText).toBeInTheDocument()
})
test('Check the description of MovieTitle Component is render or not', () => {
    render(<MockMovieTitle />)
    const getText = screen.getByTestId('description')
    expect(getText).toBeInTheDocument()
})