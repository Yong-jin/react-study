import logo from '../logo.svg';
import './Practice001.css';
import { useState } from 'react';

function Practice001() {

    let txtArr = ['하나', '둘', '셋'];
    let [index, setIndex] = useState(0);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    {txtArr[index]}
                </p>
                <button onClick={()=>{
                    
                    setIndex( (index+1) % txtArr.length );

                    /*
                    let value = (index +1) == 3 ? 0 : (index + 1);
                    setIndex(value);
                    */

                    /*
                    index++;
                    if(index > 2){
                        index = 0;
                    }
                    setIndex(index);
                    */
                }}>변경버튼</button>
            </header>
        </div>
    );

    /*
    let [flag, setFlag] = useState(1);

    if(flag == 1){
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        하나
                    </p>
                    <button onClick={()=>{
                        setFlag(2);
                    }}>변경버튼</button>
                </header>
            </div>
        );
    } else if(flag == 2){
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        둘
                    </p>
                    <button onClick={()=>{
                        setFlag(3);
                    }}>변경버튼</button>
                </header>
            </div>
        );
    } else {  //flag == 3
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        셋
                    </p>
                    <button onClick={()=>{
                        setFlag(1);
                    }}>변경버튼</button>
                </header>
            </div>
        );
    }
    */

    /*
    let [txt, setTxt] = useState('하나');

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    {txt}
                </p>
                <button onClick={()=>{
                    
                    if(txt == '하나')
                        setTxt('둘');
                    else if(txt == '둘')
                        setTxt('셋');
                    else
                        setTxt('하나');

                }}>변경버튼</button>
            </header>
        </div>
    );
    */
}

export default Practice001;