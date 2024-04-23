import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom'
import { getFirestore, collection, getDocs } from 'firebase/firestore';

jest.mock('firebase/firestore');

describe('App Component', () => {
    beforeEach(() => {

        jest.clearAllMocks();

        getFirestore.mockReturnValue({});
        collection.mockReturnValue({});

        getDocs.mockResolvedValue({
            docs: [
                {data: () => ({ text: 'Hello', time: 'Now' }), id: '1'}
            ]
        });
    });

    test('allows the user to add a message when typing and clicking send', async () => {
        render(<App />);

        fireEvent.change(screen.getByPlaceholderText('Insira sua mensagem'), {target: {value: 'Test message'}});
        
        fireEvent.click(screen.getByText('Enviar'));

        await waitFor(() => {
            expect(screen.getByText('Test message')).toBeInTheDocument();
        });
    });
});
