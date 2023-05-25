import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import App from './App';

describe('App', () => {
    let container = null;
    let logOutMock = jest.fn();

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        logOutMock.mockClear();
    });

    afterEach(() => {
        unmountComponentAtNode(container);
        container.remove();
        container = null;
    });

    it('calls logOut function when pressing control + h keys', () => {
        act(() => {
            render(<App isLoggedIn logOut={logOutMock} />, container);
        });

        const event = new KeyboardEvent('keydown', { ctrlKey: true, key: 'h' });
        document.dispatchEvent(event);

        expect(alert).toHaveBeenCalledWith('Logging you out');
        expect(logOutMock).toHaveBeenCalled();
    });
});
