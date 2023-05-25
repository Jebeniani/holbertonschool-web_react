import React from 'react';
import { shallow } from 'enzyme';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import BodySection from './BodySection';

describe('BodySectionWithMarginBottom', () => {
    it('renders BodySection component with correct props', () => {
        const title = 'test title';
        const children = <p>test children node</p>;

        const wrapper = shallow(
            <BodySectionWithMarginBottom title={title}>
                {children}
            </BodySectionWithMarginBottom>
        );

        const bodySectionComponent = wrapper.find(BodySection);

        expect(bodySectionComponent).toHaveLength(1);
        expect(bodySectionComponent.prop('title')).toBe(title);
        expect(bodySectionComponent.contains(children)).toBe(true);
    });
});
