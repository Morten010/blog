import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Page from './pages/Page'

import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";
import BlogPage from './pages/BlogPage'
import AllBlogsPage from './pages/AllBlogsPage'
import AuthorPage from './pages/AuthorPage'
import NotFound from './pages/NotFound'
import AllAuthorsPage from './pages/AllAuthorsPage'

loadDevMessages();
loadErrorMessages();

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route index element={<HomePage />}/>
          <Route path='/page/:slug' element={<Page />}/>
          <Route path='/blogs' element={<AllBlogsPage />}/>
          <Route  path='/blogs/:slug' element={<BlogPage />}/>
          <Route  path='/authors' element={<AllAuthorsPage />}/>
          <Route  path='/authors/:id' element={<AuthorPage />}/>
          <Route  path='*' element={<NotFound title='Page not found' />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
