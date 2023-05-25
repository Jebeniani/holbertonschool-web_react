import React from 'react';
import { render } from '@testing-library/react';
import CourseListRow from './CourseListRow';

describe('CourseListRow', () => {
  it('renders one cell with colspan = 2 when textSecondCell does not exist', () => {
    const { container } = render(<CourseListRow isHeader textFirstCell="Header Cell" />);
    const thElement = container.querySelector('th');
    expect(thElement).toHaveTextContent('Header Cell');
    expect(thElement.getAttribute('colSpan')).toBe('2');
  });

  it('renders two cells when textSecondCell is present', () => {
    const { container } = render(
      <CourseListRow isHeader textFirstCell="Header Cell 1" textSecondCell="Header Cell 2" />
    );
    const thElements = container.querySelectorAll('th');
    expect(thElements.length).toBe(2);
    expect(thElements[0]).toHaveTextContent('Header Cell 1');
    expect(thElements[1]).toHaveTextContent('Header Cell 2');
  });

  it('renders correctly two td elements within a tr element', () => {
    const { container } = render(
      <CourseListRow isHeader={false} textFirstCell="Data Cell 1" textSecondCell="Data Cell 2" />
    );
    const trElement = container.querySelector('tr');
    const tdElements = container.querySelectorAll('td');
    expect(trElement).toBeInTheDocument();
    expect(tdElements.length).toBe(2);
    expect(tdElements[0]).toHaveTextContent('Data Cell 1');
    expect(tdElements[1]).toHaveTextContent('Data Cell 2');
  });
});
