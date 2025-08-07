import image1 from '../../assets/pesqueiro1.jpg'
import image2 from '../../assets/pesqueiro2.jpg'
import image3 from '../../assets/pesqueiro3.jpeg'

type URL = {
  ticket: string
}

function NewEdition ({ticket}: URL) {
    return (
        <div className="bg-[#191919] text-white pt-8">
            <h2 className="ml-5 md:ml-55 text-3xl md:text-6xl">2º Edição Pesqueiro to Atoa</h2>
            <p className='ml-5 md:ml-55 my-4'>
                Prepare-se! Vem aí a 2ª edição do Capivari Festival — no coração de Santa Rita do Sapucaí, no incrível Pesqueiro Tô Atoa. Música, natureza e vibrações únicas te esperam!
            </p>
            <div className="flex gap-4 overflow-x-auto whitespace-nowrap px-4 md:justify-center">
                <img src={image1} alt="imagem do pesqueiro to atoa" className="w-60 flex-shrink-0 rounded" />
                <img src={image2} alt="imagem do pesqueiro to atoa" className="w-60 flex-shrink-0 rounded" />
                <img src={image3} alt="imagem do pesqueiro to atoa" className="w-60 flex-shrink-0 rounded" />
            </div>
            <div className='flex justify-center mt-4'>
                <a target='_blank' href={ticket} className='bg-[#01160d] hover:bg-[#000000] p-4 text-2xl rounded-2xl'>Garante seu ingresso!</a>
            </div>
        </div>
    )
}

export default NewEdition