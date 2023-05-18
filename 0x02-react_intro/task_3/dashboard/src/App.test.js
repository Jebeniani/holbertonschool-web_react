import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders App without crashing', () => {
    render(<App />);
});

test('renders div with class App-header', () => {
    const { getByTestId } = render(<App />);
    const appHeader = getByTestId('app-header');
    expect(appHeader).toBeInTheDocument();
});

test('renders div with class App-body', () => {
    const { getByTestId } = render(<App />);
    const appBody = getByTestId('app-body');
    expect(appBody).toBeInTheDocument();
});

test('renders div with class App-footer', () => {
    const { getByTestId } = render(<App />);
    const appFooter = getByTestId('app-footer');
    expect(appFooter).toBeInTheDocument();
});
