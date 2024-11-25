/*
//<Box text={arr[0]} detail={detail[0]}/>
function Box(props) {  //매개변수 props     
    //props = {text:'아침', detail:'배고프다'};
    //props = {text:'점심'};
    //props = {text:'저녁'};

    return (
        <div style={{ backgroundColor: 'gray' }}>
            <h1>{props.text}</h1>
            <p>{props.detail}</p>
        </div>
    );
}
*/

function Box( {text, detail} ) {  //매개변수 props     
    //props = {text:'아침', detail:'배고프다'};
    //props = {text:'점심'};
    //props = {text:'저녁'};

    return (
        <div style={{ backgroundColor: 'gray' }}>
            <h1>{text}</h1>
            <p>{detail}</p>
        </div>
    );
}

export default Box;