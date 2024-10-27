import { Children, createContext, useState } from "react";

export const FavCityContext = createContext();

export const FavCityProvider = ({children}) => {
    const [favCity, setFavCity] = useState('');

    return(
        <FavCityContext.Provider value = {{favCity, setFavCity}}>
            {children}
        </FavCityContext.Provider>
    )
}