import image from '../../assets/image4.jpg'

export default function Memory() {
  return (
    <div className="py-6 bg-[#000] text-white">
      <h2 className="text-center text-3xl md:text-6xl font-normal">
        NA ESTRADA DA MEMORIA
      </h2>
      <p className="text-center text-xl mt-4 font-light">
        1º Edição Capivari Festival
      </p>
      <p className="text-center font-light">
        Fomentar encontros e relações significativas por meio da arte e da
        música.
      </p>

      <div className="md:grid grid-cols-2">
        <div className="mt-4">
          <img
            className="mx-auto"
            src={image}
            alt="foto do evento"
            width="300"
          />
        </div>
        <div className="bg-white text-black w-[300px] p-2 mx-auto mt-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            consectetur impedit cupiditate pariatur eveniet, totam officia ea ad
            aliquid repellat optio odio aliquam quam, autem, doloribus dolorem
            ut repudiandae porro!
          </p>
        </div>
      </div>
    </div>
  );
}
