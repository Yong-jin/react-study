import './Quiz003.css';
import {useState} from 'react';

function Quiz003(){

    let [boxes, setBoxes] = useState([<div className="box">박스</div>,<div className="box">박스</div>]);

    let [arr, setArr] = useState([1,1]);

    // for(let i=0; i<3; i++){
    //     boxes.push(<div className="box">박스</div>);
    // }

    return (
        <div>
            <div style={{margin:'10px'}}>
                <button onClick={()=>{
                    //let temp = [...arr];
                    //temp.push(0);
                    //temp.unshift(0);
                    let temp = [...arr , 1];
                    //let temp = [0, ...arr];
                    setArr(temp);
                }}>추가</button>
            </div>
            {
                arr.map(()=>{
                    return <div className="box">박스</div>;
                })
            }

        </div>  
    )

    /*
    return (
        <div>
            <div style={{margin:'10px'}}>
                <button onClick={()=>{
                    let temp = [...boxes];
                    temp.push(<div className="box">박스</div>);
                    setBoxes(temp);
                }}>추가</button>
            </div>
            {
                boxes
            }

        </div>  
    )
    */
}

export default Quiz003;