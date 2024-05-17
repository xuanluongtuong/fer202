function First(props123) {
    return (
        <div>
            First Component
            {props123.children}
        </div>
    ); 
}

function Second() {
    return (
        <div>
            Second Component
        </div>
    );
}

export default function Parent(props) {
    return (
        <div>
            <hr/>
            {props.children}
        </div>
    );
}

//chỉ định các children components
Parent.First = First;
Parent.Second = Second;

export {First, Second};
