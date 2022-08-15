import {useState} from "react";
export function TextIn(){
    var [label, setLabel] = useState("");
    var eventHandler = function(event){
        setLabel(event.target.value);
    };

    return (
        <>
            <input
                type="text"
                placeholder="Type something for me"
                onChange={eventHandler}
            ></input>
            <p>Your text: {label}</p>
        </>
    )
};