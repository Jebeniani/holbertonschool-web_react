import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from "./uiActionTypes";
import { login, logout, displayNotificationDrawer, hideNotificationDrawer } from "./uiActionCreators";

describe("uiActionCreators", () => {
    it("login", () => {
        const data = login('holberton@holberton.com', '123456789');

        expect(data).toEqual({
            type: LOGIN,
            user: {
                email: 'holberton@holberton.com',
                password: '123456789'
            }
        });
    });

    it("logout", () => {
        const data = logout();

        expect(data).toEqual({
            type: LOGOUT
        });
    });

    it("displayNotificationDrawer", () => {
        const data = displayNotificationDrawer();

        expect(data).toEqual({
            type: DISPLAY_NOTIFICATION_DRAWER
        });
    });

    it("hideNotificationDrawer", () => {
        const data = hideNotificationDrawer();

        expect(data).toEqual({
            type: HIDE_NOTIFICATION_DRAWER
        });
    });
});

import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { loginRequest, login, loginFailure, loginSuccess } from './uiActionCreators';
import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE } from './uiActionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('loginRequest', () => {
    it('login success', () => {
        fetchMock.get('http://localhost:3000/login-success.json', {
            body: {
                email: 'johann.salva@holberton.nz',
                password: 'test',
            },
            headers: { 'content-type': 'application/json' },
        });

        const expectedActions = [
            dispatch(loginSuccess('email', 'password')),
        ];

        const store = mockStore({});
        return store.dispatch(loginRequest('email', 'password')).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        }
        );
    });

    it('login failure', () => {
        fetchMock.get('http://localhost:3000/login-success.json', {
            body: {
                email: 'jben@jben.com',
                password: 'jben',
            },
            headers: { 'content-type': 'application/json' },
        });

        const expectedActions = [
            dispatch(loginFailure()),
        ];

        const store = mockStore({});
        return store.dispatch(loginRequest('email', 'password')).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        }
        );
    });
});