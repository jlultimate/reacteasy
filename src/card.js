export function Card(props){
    return (
        <fieldset>
            <legend>{props.icon} {props.title}</legend>
            <br></br><br></br><br></br><br></br><br></br>
            {props.children}
            <br></br><br></br><br></br><br></br><br></br>
        </fieldset>
    );
};
export function Icon(){
    return <i>😎</i>;
};