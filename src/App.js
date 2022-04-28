import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import BlogPage from './pages/BlogPage'
import SingleBlogPage from './pages/SingleBlogPage'
import CreateBlogPage from './pages/CreateBlogPage'
import Header from './components/Header'


function App() {
  return (
    <>
      <Router>
        <div className='container'>
          <Header />
          <Routes>
            <Route path ='/' element={<BlogPage/>} />
            <Route path ='/singleblog/:id' element={<SingleBlogPage/>} />
            <Route path ='/createblog' element={<CreateBlogPage />}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
