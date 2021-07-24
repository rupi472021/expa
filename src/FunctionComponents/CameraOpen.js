import Webcam from "react-webcam";
import {useRef} from "react";


function CameraOpen(){
    const webRef=useRef(null);
    let img="httpL;';'";
    const showImage=()=>{
        img=webRef.current.getScreenshot();
    };
    return (
        <div className="App">
            react webcam
            <Webcam ref={webRef}/>
            <button
            onClick={()=>{
                showImage();
            }}>
                show image in console 
            </button>
            <br/>
        </div>
    );
}

export default CameraOpen;