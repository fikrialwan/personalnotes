import React from "react";
import Content from "./component/content/Content";
import FormCard from "./component/form/FormCard";

class App extends React.Component {
    render() {
        return <div className="container-app">
            <FormCard />
            <Content />
        </div>
    }
}

export default App;