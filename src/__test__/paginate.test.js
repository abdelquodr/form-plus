import React from 'react';
import {screen, render} from '@testing-library/react'
import Paginate from  '../components/Paginate'

test('check if currentpage and totalpage is truthy', () => {
    const currentpage = 3
    const totalPage = 1000
    const {container} = render(<Paginate currentpage={currentpage} totalPage={totalPage} />)
    
   expect(container.textContent.includes(currentpage && totalPage)).toBeTruthy()
})