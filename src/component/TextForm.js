import React, {useState} from 'react'

export default function TextForm(props) {
    const UpperCase = ()=>{
        console.log("UpperCase");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted in to UpperCase...!","success")
    }

    const LowerCase = ()=>{
        console.log("UpperCase");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted in to LowerCase...!","success")
    }

    const Copy = ()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Text has been Copied...!","success");
    }

    const RmoveXspace = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Space removed...!","success");
    }

    const Clear = ()=>{
        console.log("UpperCase");
        let newText = '';
        setText(newText);
        props.showAlert("TextArea has been Cleared...!","success")
    }

    const Change = (event)=>{
        console.log("Change");
        setText(event.target.value)
    }

    const [text, setText] = useState('');
    return (
        <>
        <div className="mb-3" style={{color: props.mode==='light' ?'black':'white'}}>
            <h2 className='my-4'>{props.heading}</h2>
            <textarea className="form-control" value={text} onChange={Change} id="box" rows="5" style={{backgroundColor: props.mode==='light' ?'white':'lightgrey', color: props.mode==='light' ?'black':'darkgreen'}}></textarea>
            {/* <div className='container'> */}
                <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={UpperCase}>Uppercase</button>
                <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={LowerCase}>LowerCase</button>
                <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={RmoveXspace}>Remove Extra Space</button>
                <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={Copy}>Copy</button>
                <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={Clear}>Clear</button>
            {/* </div> */}
        </div>
        <div className='container my-3' style={{color: props.mode==='light' ?'black':'white'}}>
            <h4>Summary of the content:</h4>
            <p>Characters: {text.length}</p>
            <p>Words: {text.split(/\s+/).filter((ele)=>{return ele.length!==0}).length}</p>
            <p>Time to read: {0.008 * text.split(/\s+/).filter((ele)=>{return ele.length!==0}).length}minutes</p>
        </div>
        </>
    )
}
