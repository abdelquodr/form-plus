import React from 'react'
import { screen, render } from '@testing-library/react'
import Input from '../components/Input'

test('check if the label value is received and display', () => {
    const label = 'test';
    render(<Input label={label} />)

    const labelVal = screen.getByText('test').innerHTML;

    expect(labelVal).toBe('test')
})  