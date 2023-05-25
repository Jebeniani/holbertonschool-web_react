import React from 'react';
import { render } from '@testing-library/react';
import CourseList from './CourseList';

describe('CourseList', () => {
    it('renders CourseList component without crashing', () => {
        render(<CourseList />);
    });

    it('renders the 5 different rows', () => {
        const { getByText } = render(<CourseList />);
        expect(getByText('Available courses')).toBeInTheDocument();
        expect(getByText('Course name')).toBeInTheDocument();
        expect(getByText('ES6')).toBeInTheDocument();
        expect(getByText('Webpack')).toBeInTheDocument();
        expect(getByText('React')).toBeInTheDocument();
    });

    it('renders correctly with an empty array or no listCourses prop', () => {
        const { getByText } = render(<CourseList />);
        expect(getByText('No course available yet')).toBeInTheDocument();
    });

    it('renders the listCourses correctly', () => {
        const listCourses = [
            { id: 1, name: 'ES6', credit: 60 },
            { id: 2, name: 'Webpack', credit: 20 },
            { id: 3, name: 'React', credit: 40 },
        ];
        const { getByText } = render(<CourseList listCourses={listCourses} />);
        listCourses.forEach((course) => {
            expect(getByText(course.name)).toBeInTheDocument();
            expect(getByText(course.credit.toString())).toBeInTheDocument();
        });
    });
});
