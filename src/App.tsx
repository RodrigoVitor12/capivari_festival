import logo from './assets/logo.png'

import Main from './components/Main'
import Memory from './components/Memory'

export default function App () {
  return (
    <div>
      <nav className='p-2 flex justify-center'>
        <img src={logo} alt="Logo capivari festival" width="200px" />
      </nav>
      <Main />
      <Memory />
    </div>
  )
}