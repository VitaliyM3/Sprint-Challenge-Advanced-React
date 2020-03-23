import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("Does the app work", () => {
  expect(true).toBe(true);
});

test('navbar returns', () => {
  const navbar = jest.fn(() => true);
  navbar();
  expect(navbar).toHaveReturned();
});

test("Women's World Cup", () => {
  expect('World').toMatch(/World/);
});