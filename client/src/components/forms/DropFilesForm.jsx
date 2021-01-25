import React, {Component} from 'react';
//import Jumbotron from 'react-bootstrap/Jumbotron';
import Alert from '../Alert';
import api from '../../api/api';

class DropFilesForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uploading: false,
      showAlert: false,
      alert: {}
    };
  }
  preventAndStop(e) {
    e.preventDefault();
    e.stopPropagation();
  }
  showAlert(alert){
    if( this.state.showAlert) {
      return (
        <Alert
          alert={alert}
          onClose={() => this.setState({
            showAlert: false
          })}
        />
      );
    }
  }
  async onSubmit(e) {
    this.preventAndStop(e);
    if(!e.dataTransfer.files.length || this.state.uploading) {
      return
    };
    this.setState({
      uploading: true
    });
    let response = {};

    try {
      const data = new FormData();
      for(let i = 0; i < e.dataTransfer.files.length; i++) {
        data.append('file', e.dataTransfer.files[i]);
      }
      response = await api.uploadFiles(this.props.uploadTo || '', data);
      this.props.reload();
    } catch(e) {
      response = e;
      console.log(e);
    }
    this.setState({
      uploading: false,
      alert: response,
      showAlert: true
    });
  }

}
export default DropFilesForm; 