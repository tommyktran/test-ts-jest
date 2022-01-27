/**
 * @jest-environment jsdom
 */

import Index from '../routes/Todos/index.svelte'
import { render, screen } from '@testing-library/svelte'
import '@testing-library/jest-dom';

test('render Todo page', async () => {
    await render(Index)
    const text = screen.getByText('Todos')
    const text2 = screen.getByRole('textbox', {name: 'Add todo'})
    expect(text).toBeVisible()
    expect(text2).toBeInTheDocument()
})
