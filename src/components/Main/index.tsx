export default function Main () {
    return (
    <main>
        <div 
          className="bg-[url('./assets/bg-mobile.png')] md:bg-[url('./assets/bg-image.jpg')] bg-cover bg-center min-h-120 md:min-h-150 flex flex-col justify-center p-4" 
        >
          <h1 className="text-white text-5xl md:text-8xl  font-bold text-center">Capivari Festival</h1>
          <p className="text-white text-center text-xl mt-4  font-light">08 de fevereiro de 2025 | Jardim Secreto, Santa Rita do Sapucai - MG</p>

          <div className='mx-auto mt-12'>
            <button className='bg-[#58952e] md:text-2xl rounded-md w-[300px] p-2 cursor-pointer text-white'>Mais informações em breve</button>
          </div>
        </div>
      </main>
    )
}