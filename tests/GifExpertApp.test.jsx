import { fireEvent, screen } from "@testing-library/dom";
import { render } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";


describe('pruebas en <GifExpertApp />', () => {

    test('Debe hacer match con el snapshot', () => { 
        
        const { container } = render( <GifExpertApp/> );

        expect( container ).toMatchSnapshot();

     });
    
    test('Debe mostrarse el titulo GifExpertApp', () => { 
        
        render(<GifExpertApp/>);

        expect(screen.getByText("GifExpertApp")).toBeTruthy();

     });
    
    test('Debe agregar una nueva categoria', () => { 
        
        const newCategory = 'Fortnite';

        render(<GifExpertApp/>);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: newCategory } });
        fireEvent.submit( form );

        expect( screen.getByText(newCategory )).toBeTruthy();


     });
    
    test('No debe agregar una categoria ya existente ', () => { 
        
        const categoria = 'Valorant';

        render(<GifExpertApp/>);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target : { value: categoria } });
        fireEvent.submit(form);
        fireEvent.input(input, { target : { value: categoria } });
        fireEvent.submit(form);

        expect(screen.getAllByText(categoria).length).toBe(1);

     });

 });
