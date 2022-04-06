import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <div>Travel Blog</div>
      <Link to={'/'}>Home</Link>
      <Link to={'/Posts'}>Posts</Link>
    </div>
  )
}

export default Nav
