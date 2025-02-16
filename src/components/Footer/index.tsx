import logo from '../../assets/logo.png'
export default function Footer () {

    return (
        <footer className='flex flex-col items-center p-8 bg-[#000] text-white gap-4 '>
            <div>
                <img src={logo} alt="Logo capivari festival" className='w-[100px]' />
            </div>
            <div>
                <p>Desenvolvido por <a className="underline text-[#dd5c47]" href="https://github.com/RodrigoVitor" target="_blank">Rodrigo Vitor</a> </p>
            </div>
        </footer>
    )
}