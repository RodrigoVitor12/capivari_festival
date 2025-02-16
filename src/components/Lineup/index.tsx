import lineup from '../../assets/lineup.jpg'
export default function Lineup () {
    return (
        <div  className="p-6 bg-[#000] text-white">
            <h2 className="text-center text-3xl md:text-6xl font-normal"> LINE UP 2025</h2>
            <div className='mt-6 flex justify-center'>
                <img src={lineup} alt="Line up 2025" className='md:w-2xl' />
            </div>
        </div>
    )
}