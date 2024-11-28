
function ColorBox(props){
//function ColorBox({bgColor, boxes, setBoxes}){

    //props = {bgColor: '' , boxes: [], setBoxes: (), index:4}

    return (
        <div className="box" style={{backgroundColor : props.bgColor}}>
            <button onClick={()=>{

                let temp = [...props.boxes];
                temp.splice(props.index, 1);
                props.setBoxes(temp);

            }}>X</button>
        </div>
    )
}

export default ColorBox;