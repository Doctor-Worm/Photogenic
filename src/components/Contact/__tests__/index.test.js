import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '..';

afterEach(cleanup);

describe('Contact component', () => {
    it('renders', () => {
        render(<ContactForm />);
    });
    

    it('renders', () => {
        const { asFragment } = render(<ContactForm />)
        expect(asFragment()).toMatchSnapshot()
    });
});

    it('link is visable', () => {
        // Arrange - deconstruct the test ids from the Nav render
        const { getByTestId } = render(<ContactForm />)
        // Assert
        expect(getByTestId('contact')).toHaveTextContent('Contact Me');
        expect(getByTestId('submit')).toHaveTextContent('Submit');
    });