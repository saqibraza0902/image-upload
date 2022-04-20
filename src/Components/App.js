import React from "react";
import "./app.css"
import ImagePreview2 from "./imagePreview";

class App extends React.Component {
    render() {
        return (
            <div className="previewComponent">
                <ImagePreview2 />
                <ImagePreview2 />
                <ImagePreview2 />
            </div>
        )
    }
}

export default App;