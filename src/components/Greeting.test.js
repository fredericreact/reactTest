import Greeting from "./Greeting";
import { render, screen } from '@testing-library/react';

test('renders Hello World as a text', () => {
render(<Greeting/>);

const helloWorldElement = screen.getByText('Hello World')

expect(helloWorldElement).toBeInTheDocument();

});