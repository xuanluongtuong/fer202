import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import MyComponent, {Hello} from "./MyComponent";
import Section, {Button} from "./components/Nested";
import Parent, {First, Second} from "./components/NameSpace";
import DynamicProperties from "./components/DynamicPropsValue";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <MyComponent/>
        <Hello/>


        <Section title="New Section component">
            <Button class="btnClass">Click me</Button>
        </Section>


        <Parent>
            <Parent.First/>
            <Parent.Second/>
            <First> <Second/> </First>
        </Parent>

        <DynamicProperties/>
    </React.StrictMode>
);

