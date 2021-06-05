import React, { useState,useRef,Suspense, useEffect} from 'react'
import Input, {WritableInput} from './components/Input'
import Search from './components/Search'
import Message from './components/Message'
import Paginate from './components/Paginate'
import Spinner from './style/icons/spinner.gif'

// dependencies
import {connect} from 'react-redux'
import Fuse from "fuse.js"

const EachCard = React.lazy(() => import('./components/Card'))

function App({loading, post, err}) {

  // state
  const [pageNumber, setPageNumber] = useState(1)
  const [ search, setSearch] = useState("");
  const DisplayDataPerPage = useRef([]); 
  const [template, setTemplate] = useState({ Category :'All'})
  const [searchResult, setSearchResult] = useState([]);


  // get values from the child component
  const getWhichClick = (num) => {
    setPageNumber(num)
  }
  const sortBy = (inputVal, inputName) => {
    console.log(inputVal, inputName)
    setTemplate((state) => ({ ...state, [inputName]: inputVal}))
  }
  const getSearchVal = (inputVal) => {
    setSearch(inputVal)
  }


    // search option for  category 
    const options = {
      includeScore: true,
      shouldSort: true,
      keys: ["name"]
    }
 

  // rerun and sliced the needed data for each page when page number changed
  useEffect(() => {

      if(search.length > 1){
        const fuse = new Fuse(post, options)
        const result = fuse.search(search)
        
        setSearchResult( result )
      }else if(pageNumber === 1){
        const slicedData = post.length > 0 && post?.slice(0, 15)
        DisplayDataPerPage.current = slicedData;
      }else if(pageNumber > 1){
        const start = (pageNumber - 1) * 15
        const end =  start + 15;
        const slicedData = post.length > 0 && post?.slice(start, end)
        DisplayDataPerPage.current = slicedData;
      }else if (pageNumber){
        const slicedData = post.length > 0 && post?.slice(0, 15)
        DisplayDataPerPage.current = slicedData;
      }

  }, [pageNumber, DisplayDataPerPage, post, template, search]) 
  
  

  useEffect(() => {
    const options = {
      useExtendedSearch: true,
      includeScore: true,
      shouldSort: true,
      keys: [
        'category',
        'created'
      ]
    }

    const fuse = new Fuse(post, options)
    const result = fuse.search(template.Category, template.Date).sort((a,b) => b-a)

    post = result
    console.log(post, result)
  }, [template])

    DisplayDataPerPage.current = search.length > 0 ? searchResult.slice(pageNumber, pageNumber + 15) : post?.slice(pageNumber, pageNumber + 15);

    console.log(template)

  return (
    <div className="mx-8 lg:mx-24 my-12">
      <div className="flex justify-between mx-0 filter__inputs md:h-10">
          <Search placeholder="Search Template" getSearchVal={getSearchVal} />
          <div className="flex flex-row space-between gap-x-3 w-5/5 lg:w-2/5">  
            <Input label="Category" valueList={["All","Health","E-commerce","Education"]} sortBy={sortBy} />
            <Input label="Order"  valueList={["Default","Ascending","Descending"]} sortBy={sortBy}  />
            <WritableInput label="Date" sortBy={sortBy} />
          </div>
      </div>
      
      { <Message err={err} />}
      {DisplayDataPerPage.current.length > 0 && <h3 className="font-semibold text-base mb-5 text-gray-800" >{`${template.Category} Templates`}</h3>}
      { loading && <div className="my-auto mx-auto"> <img className="mx-auto my-56" src={Spinner} alt='spinner' /> </div> }
      <Suspense fallback={<div className="my-auto mx-auto"> <img className="mx-auto my-56" src={Spinner} alt='spinner' /> </div> }>
        <div className="for__smallsize gap-8 lg:gap:16 ">
          { 
          search.length > 0 ? DisplayDataPerPage.current.map((obj, i) => <EachCard title={obj.item.name} desc={obj.item.description} key={i} /> ) :
          (DisplayDataPerPage.current.length > 0 && 
              DisplayDataPerPage.current.map((obj, i) => ( <EachCard title={obj.name} desc={obj.description} key={i} /> )))
          } 
        </div>
      </Suspense>
      {DisplayDataPerPage.current.length > 0 && <Paginate totalPage={Math.ceil(post.length / 15)} currentpage={ pageNumber} getWhichClick={getWhichClick} /> }
    </div>
  );
}


const mapStateToProps = (state) => ({
  loading: state.loading,
  post: state.post,
  err: state.err
})

export default connect(mapStateToProps)(App);
