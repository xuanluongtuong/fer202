import React from 'react';

// class component
class MyComponent extends React.Component {
    render() {
        return (
            <div>
                <h1>My Component - Type: Class component</h1>
                <p>This is content of MyComponent.</p>
            </div>
        );
    }
}

//functional component
function Hello() {
    let name = "Tuong Luong";
    return (
        <>
            <hr/>
            <div>Welcome {name} to Hello component</div>
        </>
    );
}

export default MyComponent;
export {Hello};