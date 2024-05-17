export default function Section(props) {
    return (
        <section>
            <h1>{props.title}</h1>
            {/*Hien thi content trong the <section>Content<section/>*/}
            {props.children}
        </section>
    );
}

function Button(props) {
    return (
        <button className={props.class}>
            {props.children}
        </button>
    );
}

export {Button};