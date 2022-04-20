import React from "react";
import "./app.css";
import { FaCloudUploadAlt } from "react-icons/fa";

class ImageUpload extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            files: '',
            urls: ''
        }
        this.onChange = this.onChange.bind(this);
        this.onRemove = this.onRemove.bind(this);

    }
    onRemove() {
        var index = [this.state.files]
        console.log(index)
        index.pop()
        console.log(index)
        this.setState({
            files: index,
            urls: null
        })

    }
    onChange(e) {
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];
        reader.onloadend = () => {
            this.setState({
                files: file,
                urls: reader.result
            });
        }

        reader.readAsDataURL(file)

    }
    render() {
        let { urls, files } = this.state;
        let $imagePreview = null
        let $deleteButton = null
        if (urls) {
            $imagePreview = (<><img src={urls} alt="" /></>);
            $deleteButton = <button style={{ marginLeft: "100px" }} onClick={(e) => this.onRemove(e)}>Delete</button>

        } else {
            $imagePreview = (
                <div className="item-wrapper one">
                    <div className="item">
                        <form data-validation="true" action="#" method="post" >
                            <div className="item-inner">
                                <div className="item-content">
                                    <div className="image-upload w-90"> <label style={{ cursor: "pointer" }} >
                                        <div className="h-100">

                                            <div className="dplay-tbl mr-5">
                                                <div className="dplay-tbl-cell"><FaCloudUploadAlt size={100} />
                                                    <h5><b>Choose Your Image to Upload</b></h5>
                                                    <h6 className="mt-10 mb-70">Or Drop Your Image Here</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <input onChange={(e) => this.onChange(e)} data-required="image" type="file" name="image_name" id="file_upload" className="image-input" data-traget-resolution="image_resolution" value=""></input>
                                    </label> </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            );

        }
        return (<div>
            <div className="item-wrapper one">
                <div className="image-upload w-90"> <label style={{ cursor: "pointer" }} >
                    <input onChange={(e) => this.onChange(e)} data-required="image" type="file" name="image_name" id="file_upload" className="image-input" data-traget-resolution="image_resolution" value=""></input>
                    <div style={{ height: "400px" }}>
                        {$imagePreview}
                    </div>
                </label>
                </div>
            </div>
            <div style={{ marginLeft: "300px" }}>
                Name of Image:{this.state.files.name}{$deleteButton}
            </div>
        </div >
        );
    }
}
export default ImageUpload