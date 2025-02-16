import logo from './assets/logo.png'
import Footer from './components/Footer'
import Lineup from './components/Lineup'

import Main from './components/Main'
import Memory from './components/Memory'

export default function App () {
  return (
    <div>
      <nav className='bg-[#000] p-2 flex justify-center'>
        <img src={logo} alt="Logo capivari festival" width="200px" />
      </nav>
      <Main />
      <Memory />
      <Lineup />
      <Footer />
    </div>
  )
}