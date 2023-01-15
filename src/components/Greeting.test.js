import Greeting from "./Greeting";
import { render, screen } from '@testing-library/react';

describe('Greeting compoenent', () => {

    test('renders Hello World as a text', () => {

        // 1.Arrange
        render(<Greeting/>);
        
        // 2. Act
        
        // 3. Assert
        const helloWorldElement = screen.getByText('Hello World')
        
        expect(helloWorldElement).toBeInTheDocument();
        
        });


})

