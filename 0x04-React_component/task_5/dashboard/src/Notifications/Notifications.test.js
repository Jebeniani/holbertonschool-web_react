import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';


describe('Notifications', () => {
    it('renders without crashing', () => {
        shallow(<Notifications />);
    });

    it('displays the menu item when displayDrawer is false', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find('.menuItem').exists()).toBe(true);
    });

    it('does not display the div.Notifications when displayDrawer is false', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find('div.Notifications').exists()).toBe(false);
    });

    it('displays the menu item when displayDrawer is true', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        expect(wrapper.find('.menuItem').exists()).toBe(true);
    });

    it('displays the div.Notifications when displayDrawer is true', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        expect(wrapper.find('div.Notifications').exists()).toBe(true);
    });

    it('renders correctly with an empty array or no listNotifications prop', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find('.notification-list').children().length).toBe(0);
    });

    it('renders the listNotifications correctly and with the right number of NotificationItem', () => {
        const listNotifications = [
            { id: 1, type: 'default', value: 'New course available' },
            { id: 2, type: 'urgent', value: 'New resume available' },
        ];
        const wrapper = shallow(<Notifications listNotifications={listNotifications} />);
        expect(wrapper.find('.notification-list').children().length).toBe(listNotifications.length);
    });

    it('does not display the message "Here is the list of notifications" when listNotifications is empty', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find('p').text()).not.toEqual('Here is the list of notifications');
    });

    it('displays the message "No new notification for now" when listNotifications is empty', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find('p').text()).toEqual('No new notification for now');
    });

    it('should call markAsRead with the right message when calling the function', () => {
        const markAsRead = jest.fn();
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        const instance = wrapper.instance();
        instance.markAsRead(1);
        expect(markAsRead).toHaveBeenCalledWith(1);
    });
});
