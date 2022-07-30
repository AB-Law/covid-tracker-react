import { NativeSelect, FormControl } from "@mui/material";

import styles from "./CountryPicker.module.css";


const CountryPicker = ({ data, onValueChange }) => {
    // const { data: { Countries } } = covidAPI;

    //Map all the Countries[] to the country array
    const countries = data.map((country) => {
        return country.Country;
    })

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={onValueChange}>
                <option value="">Global</option>
                {countries.map((country, i) => {
                    return <option key={i} value={country} >{country}</option>
                }
                )}
            </NativeSelect>
        </FormControl >
    );

}

export default CountryPicker;