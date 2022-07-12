import react from   'react';
import { CardsBazar } from './cards/cardsBazar';
import { CardsBijuteri } from './cards/cardBijureri';
import { CardsJuguetes } from './cards/cardJuguetes';
import { CardsTecnologia } from './cards/cardTecnologia';
import { CardsBelleza } from './cards/cardBelleza';



const Ejecucion = () => {
    
    return(
        <div>
            <CardsBazar />
            <CardsBijuteri />
            <CardsJuguetes />
            <CardsTecnologia />
            <CardsBelleza />
        </div>
    )}

export default Ejecucion;