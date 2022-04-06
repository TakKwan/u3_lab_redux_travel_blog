import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './components/Home'
import Comments from './components/Comments'
import Posts from './components/Posts'
import './style/App.css'

function App() {
  return (
    <div className="app">
      <header className="App-header">
        <Nav />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:id" element={<Comments />} />
      </Routes>
    </div>
  )
}

export default App
