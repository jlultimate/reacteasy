export function Conditional({num}){
    if(num % 5 === 0 && num % 3 === 0){
        return <p>FizzBuzz</p>;
    } else if(num % 3 === 0){
        return <p>Fizz</p>;
    } else if(num % 5 === 0){
        return <p>Buzz</p>;
    } else {
        return <p>{num}</p>
    }
};
export function LoadingButton(props){
    return (
        <button onClick={props.onClick}>
            {props.isLoading ? <div className="loader"></div> : props.label}
        </button>
    );
};