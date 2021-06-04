import React from 'react'
import { screen, render } from '@testing-library/react'
import Input from '../components/Input'

test('check if the label value is received and display', () => {
    const label = 'test';
    const valueList = []
    render(<Input label={label} valueList={valueList} />)

    const labelVal = screen.getByText('test').innerHTML;
    console.log(valueList)
    const imgAlt = 

    expect(labelVal).toBe('test')
})   