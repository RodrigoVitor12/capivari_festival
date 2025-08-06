import { CalendarDays, MapPin } from "lucide-react";
// import capivari from "../../assets/capvari.jpg";

type URL = {
  ticket: string
}

export default function Main({ticket}: URL) {
  return (
    <main>
      <div className="bg-[url('./assets/bg-mobile.png')] md:bg-[url('./assets/bg-image.jpg')] bg-cover bg-center min-h-120 md:min-h-150 flex flex-col justify-end p-4">
      
        {/* <img src={capivari} alt="image" className="w-[350px] mx-auto mt-8" />
        <p className="text-white text-center text-xl mt-4  font-bold">
          Se prepara para 2º Edição do Capivari Festival
        </p> */}
        <div className="md:ml-50">
          <h1 className="text-white font-bold text-4xl">CAPIVARI FESTIVAL, MG</h1>
          <p className="text-white mt-2 flex gap-4"><CalendarDays />06. Setembro de 2025</p>
          <p className="text-white mt-2 flex gap-4"><MapPin /> Pesqueiro to atoa, Santa Rita do Sapucaí | MG</p>
          <div className="mt-12">
            <a target="_blank" href={ticket} className="bg-[#01160d] hover:bg-[#191919] md:text-2xl rounded-md w-[300px] p-2 cursor-pointer text-white">
              GARANTA JÁ SEU INGRESSO
            </a>
        </div>
        </div>
      </div>
    </main>
  );
}
