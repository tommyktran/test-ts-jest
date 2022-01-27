/*
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/svelte'
import Hello from './hello.svelte'
import '@testing-library/jest-dom';

test('should have button with text', () => {
    render(Hello);
    const text = screen.getByText('Primary button');
    expect(text).toBeVisible();
})