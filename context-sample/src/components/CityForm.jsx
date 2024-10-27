import { useContext } from "react"
import { FavCityContext } from "./FavCityContext"

export const CityForm = () => {
    const { favCity, setFavCity } = useContext(FavCityContext);

    return (
        <div>
            <fieldset>
                <label htmlFor="city">Favourite city </label>
                <input value={favCity}
                    name="city"
                    onChange={e => setFavCity(e.target.value)}
                    placeholder='Type your city here' type='text' />
            </fieldset>
        </div>
    )
}