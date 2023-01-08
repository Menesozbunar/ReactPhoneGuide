import React, { useState } from "react";
import "./FormIndex.css"
const formInitialValue = { NameInput: "", PhoneNumberInput: "" }
const FromIndex = ({user, setUser}) => {

    const [form, setFrom] = useState(formInitialValue)



    const onchangeInput = (e) => { setFrom({ ...form, [e.target.name]: e.target.value }) }

    const onSubmit = (e) => {

        e.preventDefault();

        if (form.NameInput === "" || form.PhoneNumberInput === "") { return false; }


        setUser([...user, form]);
        setFrom(formInitialValue);
    }

    return (


        <div>
            <form onSubmit={onSubmit}>
                <div className="NameInput">
                    <input name="NameInput" placeholder="Name" onChange={onchangeInput} value={form.NameInput} />
                </div>
                <div>
                    <input name="PhoneNumberInput" placeholder="Phone Number" onChange={onchangeInput} value={form.PhoneNumberInput} />
                </div>
                <div className="Btn">
                    <button>Add</button>
                </div>
            </form>
        </div>)
}
export default FromIndex;