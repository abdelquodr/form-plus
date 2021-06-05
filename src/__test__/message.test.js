import React from 'react';
import {screen, render} from '@testing-library/react'
import Message from  '../components/Message'

test('if err is truthy', () => {

    const error = 'something went wrong'
    const {container} = render(<Message err={true}>{error}</Message>)

    console.log(container.innerHTML)

    expect(container).toBeTruthy()
})