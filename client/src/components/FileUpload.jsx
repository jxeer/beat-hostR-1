import React, { Component } from 'react';
import axios from 'axios';

// Found from medium article
// https://medium.com/@fabianopb/upload-files-with-node-and-react-to-aws-s3-in-3-steps-fdaa8581f2bd

class FileUpload extends Component {
  constructor () {
    super();
    this.state = {
      file: null
    };
  }

  submitFile = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', this.state.file[0]);
    axios.post(`http://localhost:4000/create-file`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(response => {
      console.log(response.data.Location);
    }).catch(error => {
      console.log(error);
    });
  }

  handleFileUpload = (event) => {
    this.setState({file: event.target.files});
  }

  render () {
    return (
      <form onSubmit={this.submitFile}>
        <input label='upload file' type='file' onChange={this.handleFileUpload} />
        <button type='submit'>Send</button>
      </form>
    );
  }
}

export default FileUpload;
