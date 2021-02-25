import React, {Component} from 'react';

class FileInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fileName: ''
        }

        this.ref = React.createRef();
    }

    onFile = (e) => {
        e.preventDefault();
        if (this.ref.current.files.length === 0) {
            this.setState({fileName: 'Select Files'});
        } else {
            this.setState({fileName: this.ref.current.files[0].name});

        }


    }

    render() {
        return (
            <div className='FileInput_div'>
                <form action="" onSubmit={this.onFile}>
                    <label htmlFor="file"> UpLoad File </label>
                    <input type="file" id='file' ref={this.ref}/>
                    <br/>
                    <br/>
                    <input type="submit" value='SUBMIT'/>


                </form>
                <p>{this.state.fileName}</p>
            </div>
        );
    }
}

export default FileInput;