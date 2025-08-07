import warmup1 from '../../assets/warmup1.png'
import warmup2 from '../../assets/warmup2.png'
import AnotherEvents from '../AnotherEvents/AnotherEvents'

function UpcomingEvents () {

    return (
        <div className="bg-[#191919]">
            <div className="ml-5 md:ml-55">
                <h2 className="text-white text-3xl md:text-6xl py-4">Outros Eventos</h2>
                <div className='flex flex-col items-center md:flex-row gap-4'>
                    <AnotherEvents event={warmup1} day='15' month='AGO' place='Jazz Café, Itájuba' tickect='#' title='Warmup Capivari Festival' />
                    <AnotherEvents event={warmup2} day='30' month='AGO' place='P35, Pouso Alegre' tickect='#' title='Warmup Capivari Festival' />
                </div>
            </div>
        </div>
    )
}

export default UpcomingEvents