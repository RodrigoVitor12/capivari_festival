import { Instagram } from 'lucide-react'
import logo from '../../assets/logo.png'
export default function Footer () {

    return (
        <footer className='flex flex-col items-center p-8 bg-[#000] text-white gap-4 '>
            <div>
                <img src={logo} alt="Logo capivari festival" className='w-[100px]' />
            </div>
            <div className='flex flex-col justify-center items-center'>
                <a href='https://www.instagram.com/capivarifestival/' target='_blank'><Instagram /></a>
                <p>Desenvolvido por <a className="underline text-white" href="https://github.com/RodrigoVitor12" target="_blank">Rodrigo Vitor</a> </p>
                <p >@ 2025 Capivari Festival</p>
            </div>
        </footer>
    )
}