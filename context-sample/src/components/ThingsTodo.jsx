import { useContext } from "react"
import { FavCityContext } from "./FavCityContext"

export const ThingsTodo = () => {
    const favCityContext = useContext(FavCityContext);

    return (
        <div className='Card'>
            <h4> Plan what to do in ...</h4>
            <p>
                <b> {favCityContext.favCity} </b>
            </p>
        </div>
    )
}