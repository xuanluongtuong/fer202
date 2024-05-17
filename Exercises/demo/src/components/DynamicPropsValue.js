export default function DynamicProperties(){
    const arr = ["Flutter", "Vue", "React", "Next"];
    const obj = {
        "Flutter" : 1,
        "Vue" : 2,
        "React" : 3,
        "Next" : 4
    };

    return (
        <div>
            <h1>Dynamic Properties</h1>
            <ul>
                {arr.map((item) => (
                    <li class={item} >{item}</li>
                ))}
            </ul>
            <ul>
                {Object.keys(obj).map((key, index) => (
                    <li class={key} key={index}>{key} - {obj[key]}</li>
                ))}
            </ul>
        </div>
    );
}