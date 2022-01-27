/**
 * @jest-environment jsdom
 */

 import { render, screen, fireEvent } from "@testing-library/svelte";
 import HomePage from "../routes/index.svelte";
 import Counter from "../lib/Counter.svelte"
 
 xtest("should render 0 for counter", () => {
   render(HomePage);
   expect(screen.getByText('0'));
 });

 test('counter works', async () => {
   jest.useFakeTimers()
   const { getByTestId, getByRole } = render(Counter)
 
   const increment = getByRole('button', {name: 'Increase the counter by one'})
   const decrement = getByRole('button', {name: 'Decrease the counter by one'})
   const counter = getByTestId('counter-value')
 
   await fireEvent.click(increment)
   await fireEvent.click(increment)
   await fireEvent.click(increment)
   await fireEvent.click(decrement)
 
   setTimeout(() => {
     expect(counter.textContent).toBe('2')
   }, 1000)
 })