import { shallow } from 'enzyme';
import Notifications from './Notifications'
import React from 'react';
import NotificationItem from './NotificationItem';

let wrapper = null;
beforeEach(() => {
    wrapper = shallow(<Notifications />);
});

describe('Notification HTML', () => {
    it("checks if the first div is rendered properly without error", () => {
        expect(wrapper.exists('.Notifications')).toBeTruthy()
    });

    it("renders three list elements properly", () => {
        expect(wrapper.find(NotificationItem).length).toBe(3);
    });

    it("renders correct text for the first li tag", () => {
        expect(wrapper.find(NotificationItem).first().prop('value')).toBe('New course available');
    });

    it("renders correct text for p tag", () => {
        expect(wrapper.find('p').text()).toBe('Here is the list of notifications');
    });
});