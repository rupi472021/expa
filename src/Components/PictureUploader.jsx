import React from 'react';
import $ from 'jquery';
import FCRegister from '../FunctionComponents/FCRegister';

export default class PictureUploader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      picture: false,
      src: false
    }
  }



  handlePictureSelected=(event)=> {
      
    var picture= event.target.files[0];
    var src= URL.createObjectURL(picture);
  
    this.setState({
      picture: picture,
      src: src
    });
    
  }

   renderPreview=()=> {
    if(this.state.src) {
      return (
        <img src={this.state.src} style={{height:100}}/>
      );
    } else {
      return (
        <p>
          No Preview
        </p>
      );
    }
  }

  upload=()=> {
    alert("got it");


    // var formData = new FormData();

    // formData.append("file", this.state.picture);

    // $.ajax({
    //   url: `http://localhost:53281/api/User`,
    //   method: "POST",
    //   data: formData,
    //   cache: false,
    //   contentType: false,
    //   processData: false,
    //   success: function(response) {
    //     // Code to handle a succesful upload
    //   }
    // });


    // //Like nirHen Fetch
    // const s = { //pay attention case sensitive!!!! should be exactly as the prop in C#!
     
    //     Image: "asoiduga"
    //     };

    // fetch(this.apiUrl, {
    //     method: 'POST',
    //     body: JSON.stringify(s),
    //     headers: new Headers({
    //     'Content-type': 'application/json; charset=UTF-8' //very important to add the 'charset=UTF-8'!!!!
    //     })
    //     })
    //     .then(res => {
    //     console.log('res=', res);
    //     return res.json()
    //     })
    //     .then(
    //     (result) => {
    //     console.log("fetch POST= ", result);
    //     console.log(result.Avg);
    //     },
    //     (error) => {
    //     console.log("err post=", error);
    //     });
        



  }


  render() {
    
    return (
        <div>
        <h5>Picture Uploader</h5>

        <input
          type="file"
          onChange={this.handlePictureSelected.bind(this)}
        />
        <br/>
        <div>
        {this.renderPreview()}
        </div>
        <hr/>
        <button
          onClick={this.upload.bind(this)}
        >
          Upload
        </button>
      </div>
    );
  }
}