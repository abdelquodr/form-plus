import React, { useState, useEffect } from 'react'
import Input from './components/Input'
import Card from './components/Card'
import Search from './components/Search'
import Message from './components/Message'
import Paginate from './components/Paginate'
import Spinner from './style/icons/spinner.gif'

// dependencies
import {connect} from 'react-redux'
import Fuse from "fuse.js"

function App({loading, post, err}) {

  console.log(post, err, loading)

  // state
  const [pageNumber, setPageNumber] = useState(1)
  const [ DisplayDataPerPage, SetDisplayDataPerPage] = useState([])
  const [ search, setSearch] = useState("");



  const getWhichClick = (num) => {
    setPageNumber(num)
  }

  const sortBy = (inputVal) => {
    setSearch(inputVal)
  }


  useEffect(() => {
      if(pageNumber === 1){
        const slicedData = post.slice(0, 15)
        SetDisplayDataPerPage(slicedData)
      }else if(pageNumber > 1 ){
        const start = (pageNumber - 1) * 15
        const end =  start + 15;
        const slicedData = post.slice(start, end)
        SetDisplayDataPerPage(slicedData)
      }

  }, [DisplayDataPerPage])  


  const fuse = new Fuse(post, {
    keys: [
      "category",
      "created",
    ],
    includeScore: true
  })

  const results = fuse.search(search)

  console.log(DisplayDataPerPage)
  console.log(results )

  return (
    <div className="mx-8 lg:mx-24 my-12">
      <div className="flex justify-between mx-0 md:h-10">
          <Search placeholder="Search Template" />
          <div className="flex flex-row space-between gap-x-3 w-5/5 lg:w-2/5">  
            <Input label="Category" placeholder="All" valueList={["All","Health","E-commerce","Education"]} sortBy={sortBy} />
            <Input label="Order" placeholder="Default" valueList={["Default","Ascending","Descending"]} sortBy={sortBy} />
            <Input label="Date" placeholder="Default" sortBy={sortBy} />
          </div>
      </div>
      
      <Message err={err} />
      { loading && <div className="my-auto mx-auto"> <img className="mx-auto my-56" src={Spinner} alt='spinner' /> </div> }
      <div className="for__smallsize gap-8 lg:gap:16 ">
        { post.length > 0 && 
            DisplayDataPerPage.map((obj) => (<Card title={obj.name} desc={obj.description} />))
        } 
      </div>
      {DisplayDataPerPage.length > 0 && <Paginate totalPage={Math.ceil(post.length / 15)} currentpage={pageNumber} getWhichClick={getWhichClick} /> }
    </div>
  );
}


const mapStateToProps = (state) => ({
  loading: state.loading,
  post: state.post,
  err: state.err
})

export default connect(mapStateToProps)(App);
