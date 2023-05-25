import React from 'react';
import { mount } from 'enzyme';
import Notifications from './Notifications';

describe('Notifications', () => {
    it('should not rerender when updating props with the same list', () => {
        const listNotifications = [
            { id: 1, type: 'default', value: 'Notification 1' },
            { id: 2, type: 'urgent', value: 'Notification 2' },
        ];

        const wrapper = mount(<Notifications displayDrawer listNotifications={listNotifications} />);
        const shouldComponentUpdateSpy = jest.spyOn(
            Notifications.prototype,
            'shouldComponentUpdate'
        );

        wrapper.setProps({ displayDrawer: true, listNotifications });

        expect(shouldComponentUpdateSpy).toHaveBeenCalledTimes(1);
        expect(wrapper.find('NotificationItem')).toHaveLength(2);

        shouldComponentUpdateSpy.mockRestore();
    });

    it('should rerender when updating props with a longer list', () => {
        const initialList = [
            { id: 1, type: 'default', value: 'Notification 1' },
            { id: 2, type: 'urgent', value: 'Notification 2' },
        ];

        const updatedList = [
            { id: 1, type: 'default', value: 'Notification 1' },
            { id: 2, type: 'urgent', value: 'Notification 2' },
            { id: 3, type: 'default', value: 'Notification 3' },
        ];

        const wrapper = mount(<Notifications displayDrawer listNotifications={initialList} />);
        const shouldComponentUpdateSpy = jest.spyOn(
            Notifications.prototype,
            'shouldComponentUpdate'
        );

        wrapper.setProps({ displayDrawer: true, listNotifications: updatedList });

        expect(shouldComponentUpdateSpy).toHaveBeenCalledTimes(1);
        expect(wrapper.find('NotificationItem')).toHaveLength(3);

        shouldComponentUpdateSpy.mockRestore();
    });
});
