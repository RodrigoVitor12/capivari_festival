type AnotherEventsType = {
    event: string;
    month: string;
    day: string;
    title: string;
    place: string;
    tickect: string;
    isHappening: boolean;
    isTicket: boolean
}

function AnotherEvents({event, month, day, title, place, tickect, isHappening, isTicket}: AnotherEventsType) {
  return (
    <div className="relative">
      <div className="bg-white absolute p-2 text-center rounded-2xl">
        <span className="block">{month}</span>
        <span>{day}</span>
      </div>
      <img src={event} alt="Warmup do capivari festival" className="w-70" />
      <div className="text-white absolute bottom-0 bg-black/80 w-70 text-left px-4 py-2">
        <span className="block font-bold text-xl">
          {title}
        </span>
        <span className="block text-xs">{place}</span>
        {isHappening ? (
          <>
            {isTicket ? (
              <a href={tickect} className="text-zinc-300" target="_blank">
                INGRESSOS
              </a>
            ) : (
              <p>Ingressos em breve</p>
            )}
           
          </>
        ) : (
          <p>Evento Finalizado</p>
        )}
       
      </div>
    </div>
  );
}

export default AnotherEvents
