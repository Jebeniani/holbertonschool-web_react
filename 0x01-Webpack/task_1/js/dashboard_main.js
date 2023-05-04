import $ from 'jquery';
import debounce from 'lodash/debounce';

const button = $('<button>', {
  text: 'Click here to get started',
});

const count = $('<p>', {
  id: 'count',
});

$('body').append(
  $('<p>').text('Holberton Dashboard'),
  $('<p>').text('Dashboard data for the students'),
  button,
  count,
  $('<p>').text('Copyright - Holberton School'),
);

let counter = 0;

function updateCounter() {
  // eslint-disable-next-line no-plusplus
  counter++;
  count.text(`${counter} clicks on the button`);
}

button.on('click', debounce(updateCounter, 500));
