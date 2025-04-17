import { useState } from "react";

const useInputField = (defaultValue) => {
    const  [fieldValue, setFieldValue] = useState(defaultValue);

    const handleOnChange = (e) => {
        setFieldValue(e.target.value);
    }

    return[fieldValue,handleOnChange];
}

export default useInputField;