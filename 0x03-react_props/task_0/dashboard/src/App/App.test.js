import { shallow } from 'enzyme';
import App from './App';
import React from 'react';

let wrapper = null;
beforeEach(() => {
    wrapper = shallow(<App />);
});


describe('App HTML', () => {
    it("checks if the first div is rendered properly without error", () => {
        expect(wrapper.exists('.App')).toBeTruthy()
    });
});