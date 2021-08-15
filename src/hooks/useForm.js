import {useState} from 'react';
// write your custom hook here to control your checkout form
const useForm = (initialValue) => {
    const [formValue, setFormValue] = useState(initialValue);

    const handleInput = e => {
        console.log(e);
    
        const {name, value} = e.target;
        setFormValue({
            ...formValue,
            [name] : value
        });
    };

    return [formValue, setFormValue, handleInput];
};

export default useForm;