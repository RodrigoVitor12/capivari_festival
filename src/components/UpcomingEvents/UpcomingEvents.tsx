import warmup1 from '../../assets/warmup1.png'
import warmup2 from '../../assets/Warmup2.png'
import AnotherEvents from '../AnotherEvents/AnotherEvents'

function UpcomingEvents () {
    const TicketJazzCafe = "https://www.partiurole.app/party/9d5eff4d-347e-4969-96bd-4973d883e676?fbclid=PAZXh0bgNhZW0CMTEAAac8aF5I7GqBQ5Wqo0-fSzixEFRqq7Am0FvZg3klYOHsnXJQF2SxAFvyd3jPVg_aem_pbJuBqa430keiSxznEZUIQ"

    return (
        <div className="bg-[#191919]">
            <div className="ml-5 md:ml-55">
                <h2 className="text-white text-3xl md:text-6xl py-4">Outros Eventos</h2>
                <div className='flex flex-col items-center md:flex-row gap-4'>
                    <AnotherEvents 
                        event={warmup1} day='15' month='AGO' 
                        place='Jazz Café, Itájuba' tickect={TicketJazzCafe} isTicket
                        title='Warmup Capivari Festival' isHappening={true} 
                    />
                    <AnotherEvents 
                        event={warmup2} day='30' month='AGO' 
                        place='P35, Pouso Alegre' tickect='#' isTicket={false}
                        title='Warmup Capivari Festival' isHappening={true}
                    />
                </div>
            </div>
        </div>
    )
}

export default UpcomingEvents