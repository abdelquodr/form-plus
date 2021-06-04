import React, { useState,useRef,Suspense, useEffect} from 'react'
import Input from './components/Input'
// import EachCard from './components/Card'
import Search from './components/Search'
import Message from './components/Message'
import Paginate from './components/Paginate'
import Spinner from './style/icons/spinner.gif'
import Localbase from 'localbase'

// dependencies
import {connect} from 'react-redux'
import Fuse from "fuse.js"

const EachCard = React.lazy(() => import('./components/Card'))

function App({loading, post, err}) {

  // state
  const [pageNumber, setPageNumber] = useState(1)
  const [ search, setSearch] = useState("");
  const DisplayDataPerPage = useRef([]); 
  const [template, setTemplate] = useState('All')


  // get values from the child component
  const getWhichClick = (num) => {
    setPageNumber(num)
  }
  const sortBy = (inputVal) => {
    setTemplate(inputVal)
  }
  const getSearchVal = (inputVal) => {
    setSearch(inputVal)
  }

  const getOrder = (e) => {
    
  }


  // rerun and sliced the needed data for each page when page number changed
  useEffect(() => {
      if(pageNumber === 1){
        const slicedData = post.length > 0 && post?.slice(0, 15)
        DisplayDataPerPage.current = slicedData;
      }else if(pageNumber > 1 ){
        const start = (pageNumber - 1) * 15
        const end =  start + 15;
        const slicedData = post.length > 0 && post?.slice(start, end)
        DisplayDataPerPage.current = slicedData;
      }else if (pageNumber){
        const slicedData = post.length > 0 && post?.slice(0, 15)
        DisplayDataPerPage.current = slicedData;
      }

  }, [pageNumber, DisplayDataPerPage, post, template, search])  

  
  // get my data from my created dataBase
  //  post.length > 0 && new Localbase('db').collection('posts').get().then( post => DisplayDataPerPage.current = post[0].post.slice(pageNumber, pageNumber + 15)).catch((err) => alert(err))
    DisplayDataPerPage.current = post.length > 0 && post?.slice(pageNumber, pageNumber + 15);

  // search option for  category 
  const options = {
    includeScore: true,
    keys: ['category'],
  }

  const fuse = new Fuse(post, options)
  post = fuse.search(template)

  const searchingVal = {
    // includeScore: true,
    isCaseSensitive: false,
    // includeMatches: true,
    // distance: 10,
    keys: ["name"]
  }

  const theSearch = new Fuse(post, searchingVal ).search('Amet, officia dolore')

  console.log(post, loading, err, DisplayDataPerPage)

  console.log(theSearch, search)

  return (
    <div className="mx-8 lg:mx-24 my-12">
      <div className="flex justify-between mx-0 filter__inputs md:h-10">
          <Search placeholder="Search Template" getSearchVal={getSearchVal} />
          <div className="flex flex-row space-between gap-x-3 w-5/5 lg:w-2/5">  
            <Input label="Category" valueList={["All","Health","E-commerce","Education"]} sortBy={sortBy}  />
            <Input label="Order"  valueList={["Default","Ascending","Descending"]}  />
            <Input label="Date" />
          </div>
      </div>
      
      { <Message err={err} />}
      {DisplayDataPerPage.current.length > 0 && <h3 className="font-semimedium text-base mb-5" >{`${template} Templates`}</h3>}
      { loading && <div className="my-auto mx-auto"> <img className="mx-auto my-56" src={Spinner} alt='spinner' /> </div> }
      <Suspense fallback={<div className="my-auto mx-auto"> <img className="mx-auto my-56" src={Spinner} alt='spinner' /> </div> }>
        <div className="for__smallsize gap-8 lg:gap:16 ">
          { DisplayDataPerPage.current.length > 0 && 
              DisplayDataPerPage.current.map((obj, i) => ( <EachCard title={obj.name} desc={obj.description} key={i} /> ))
          } 
        </div>
      </Suspense>
      {DisplayDataPerPage.current.length > 0 && <Paginate totalPage={Math.ceil(post.length / 15)} currentpage={pageNumber} getWhichClick={getWhichClick} /> }
    </div>
  );
}


const mapStateToProps = (state) => ({
  loading: state.loading,
  post: state.post,
  err: state.err
})

export default connect(mapStateToProps)(App);
