import Carrousel from "../Carrousel";

export default function Memory() {
  return (
    <div className="py-6 bg-[#000] text-white">
      <h2 className="text-center text-3xl md:text-6xl font-normal">
        NA ESTRADA DA MEMORIA
      </h2>
      <h2 className="text-3xl font-[Shrikhand]! md:text-9xl mx-24 text-right font-normal mt-6">
        2025
      </h2>

      <div className="md:grid grid-cols-2">
        <div className="mt-4">
            <Carrousel />
        </div>
        <div className="bg-white text-black w-[300px] md:w-[400px] p-6 mx-auto mt-4 leading-[26px]">
          <p className="text-slate-700 text-2xl text-bold mb-16">Capivari Festival 2025</p>
          <p>A primeira edição do Capivari Festival foi um sucesso. </p>
          <p>Amantes da música eletrônica se reuniram num Sabado ensolarado para curtir 9h de música eletrônica</p>
          <p>Dia 08 de fevereiro, o Jardim Secreto ficou pequeno, Capivari Festival transformou o local num verdadeiro paraíso da música eletrônica. As Flash Tattoos, piercings, bebidas, batatas fritas, piscina e muita música boa estavam à disposição do público.</p>
          <p>O festival teve intuito de trazer mais a cena eletrônica para a cidade de Santa Rita do Sapucaí, MG e divulgar excelentes djs para mostrar seu trabalho.</p>
          <p>O line up foi de total pesos, com Djs que agitaram a multidão.</p>
        </div>
      </div>
    </div>
  );
}
