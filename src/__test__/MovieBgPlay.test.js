import { render, screen } from "@testing-library/react"
import MovieBgPlay from "../Comopnents/MovieBgPlay"

test('Check the MovieBgPlay Component is render or not', () => {
    render(<MovieBgPlay />)
    const getId = screen.getByTestId('MovieBgPlay')
    expect(getId).toBeInTheDocument()
}) 