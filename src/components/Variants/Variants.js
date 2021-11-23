import { useEffect, useState } from "react";
import { ToggleButton } from "react-bootstrap";


function Variants({ type, option, onChange }) {

    const [radioValue, setRadioValue] = useState();
    const [SelectedProd, setSelectedProd] = useState()

    const logCheck = JSON.parse(localStorage.getItem("role"));

    const updateRadioState = (index) => {

        setSelectedProd(() => (
            {
                type,
                options: option[index]
            }
        ))
    }

    useEffect(() => {

        onChange(SelectedProd, radioValue)
    }, [SelectedProd])

    return (
        option.map((option, index) => (
            <ToggleButton
                key={`${option.name+index}`}
                id={`${type}-${index}`}
                type="radio"
                variant="outline-primary"
                name={type}
                checked={radioValue === index}
                disabled={logCheck.role === "admin"}
                onChange={() => {
                    setRadioValue(index)
                    updateRadioState(index)
                }}
            >
                {option.name}
            </ToggleButton>
        ))
    )

}

export default Variants;