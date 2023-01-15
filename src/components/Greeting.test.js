import Greeting from "./Greeting";
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

describe('Greeting compoenent', () => {

    test('renders Hello World as a text', () => {

        // 1.Arrange
        render(<Greeting/>);
        
        // 2. Act
        
        // 3. Assert
        const helloWorldElement = screen.getByText('Hello World')
        
        expect(helloWorldElement).toBeInTheDocument();
        
        });

    test('renders good to see you if the button is not clicked', () => {
        render(<Greeting/>);

        const outputElement = screen.getByText('good to see you', {exact: false})
        
        expect(outputElement).toBeInTheDocument();
    });

    test('renders changed if the button is clicked', () => {
        
        // 1.Arrange
        render(<Greeting/>);
        
        // 2. Act
        const buttonElement = screen.getByRole('button')
        userEvent.click(buttonElement)
        // 3. Assert
        const outputElement = screen.getByText('Changed')
        expect(outputElement).toBeInTheDocument();
        
        
    })

    test('does not render good to see you if the button was clicked', () => {
        
        // 1.Arrange
        render(<Greeting/>);
        
        // 2. Act
        const buttonElement = screen.getByRole('button')
        userEvent.click(buttonElement)
        // 3. Assert
        const outputElement = screen.queryByText('good to see you', {exact: false})
        expect(outputElement).toBeNull()
        
        
    })
})

