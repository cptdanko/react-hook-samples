import { useContext } from "react"
import { FavCityContext } from "./FavCityContext"

export const Book = () => {
    const cityContext = useContext(FavCityContext);

    return (
        <div className='Card'>
            <h4> Book tickets for ...</h4>
            <p>
                <b> {cityContext.favCity} </b>
            </p>
        </div>
    )
}