import DJS from "../DJS";

// import lineup from '../../assets/lineup.jpg'
export default function Lineup () {
    return (
        <div className="p-6 bg-[#191919] text-white">
            <div className="md:ml-50">
                <p>
                    No coração de Minas Gerais, cercado por montanhas e natureza exuberante, o Capivari Festival transforma o Pesqueiro Tô À Toa em um refúgio sonoro. Uma experiência ao ar livre como nenhuma outra — conecte-se e sinta a vibração da música guiando cada passo. <br />

                    Prepare-se para uma jornada inesquecível onde beats envolventes, luzes hipnóticas e uma atmosfera única se encontram. <br />

                    Garanta seu ingresso agora e viva essa conexão.
                </p>
                <h2 className="text-6xl mt-8">LINEUP</h2>
                <div className="grid grid-cols-2 md:flex gap-4">
                    <DJS name="IN-D6" instagram="#" />
                    <DJS name="RASEC" instagram="#" />
                    <DJS name="FCOST" instagram="#" />
                    <DJS name="CORELIO" instagram="#" />
                </div>
                <div className="border-0 w-55 text-center p-2 rounded-2xl mt-4 bg-[#252525] hover:bg-amber-50">
                    <p className="text-blue-600 font-bold">EM BREVE MAIS A CONFIRMAR</p>
                </div>
            </div>
        </div>
    )
}
{/* <img src={lineup} alt="Line up 2025" className='md:w-2xl' /> */}