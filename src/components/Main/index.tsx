import capivari from "../../assets/capvari.jpg";

export default function Main() {
  return (
    <main>
      <div className="bg-[url('./assets/bg-mobile.png')] md:bg-[url('./assets/bg-image.jpg')] bg-cover bg-center min-h-120 md:min-h-150 flex flex-col justify-center p-4">
        <img src={capivari} alt="image" className="w-[350px] mx-auto" />
        <p className="text-white text-center text-xl mt-4  font-bold">
          Se prepara para 2º Edição do Capivari Festival
        </p>
        <div className="mx-auto mt-12">
          <button className="bg-[#03511d] hover:bg-[#01160d] md:text-2xl rounded-md w-[300px] p-2 cursor-pointer text-white">
            Mais informações em breve
          </button>
        </div>
      </div>
    </main>
  );
}
