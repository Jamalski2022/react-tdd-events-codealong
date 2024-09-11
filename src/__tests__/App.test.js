import { render, screen } from "@testing-library/react";
import App from "../App";

import '@testing-library/jest-dom';

// Code tests here

describe('App Component', () => {
    it('renders the App component without crashing', () => {
        render(<App />);
        const element = screen.getByText(/Welcome to the Movie App/i); // Adjust this based on your actual App content
        expect(element).toBeInTheDocument();
    });
});

