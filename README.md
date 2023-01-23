## Test 1

Ici, le code va tester s’il y a le texte ‘learn react’

```javascript
import { render, screen } from '@testing-library/react';
import App from './App';


test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});



```

```javascript
npm test
```

## Test 2

Ici, le code va tester s’il y a le texte ‘Hello World’

```javascript
import Greeting from "./Greeting";
import { render, screen } from '@testing-library/react';


test('renders Hello World as a text', () => {
   
// 1.Arrange
render(<Greeting/>);


// 2. Act


// 3. Assert
const helloWorldElement = screen.getByText('Hello World')


expect(helloWorldElement).toBeInTheDocument();


});

```

## Test 3

Ici on va tester que l’on obtient le result qu’on veut en fonction de si le bouton est clique ou non.

```javascript
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

```

## Test Asynchronous code

```javascript
import { render, screen } from '@testing-library/react';
import Async from './Async'


describe ('Async component', () => {
    test('render posts if request succeeds', async () =>{
        render(<Async/>)


        const listItemElements = await screen.findAllByRole('listitem')
        expect(listItemElements).not.toHaveLength(0);
    });
})

```

Probleme ; je veux eviter de faire des requetes ou inserer des elements via post request et je veux pas tester des trucs que je n’ai pas ecrits

To do so, je peux creer un mocks, mocks function ou dummy function 


```javascript
import { render, screen } from '@testing-library/react';
import Async from './Async'


describe ('Async component', () => {
    test('render posts if request succeeds', async () =>{
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json:async() => [{id: 'p1', title: 'First post'}]
        });


        render(<Async/>)


        const listItemElements = await screen.findAllByRole('listitem')
        expect(listItemElements).not.toHaveLength(0);
    });
})

```
