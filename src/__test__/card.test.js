import React from 'react';
import {screen, render} from '@testing-library/react'
import Card from  '../components/Card'

test('check that it has a title and description', () => {
    const title = "some title"
    const desc = "some description"
    render(<Card title = {title} desc = {desc} />)

    const titleVal = screen.getByText('some title').innerHTML
    const titleDesc = screen.getByText('some description').innerHTML

    expect(titleVal).toBe('some title')
    expect(titleDesc).toBe('some description')
})