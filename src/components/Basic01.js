
function Basic01() {
    
    let hello = "안녕하세요";
    let hello2 = "Nice to meet you";
    let flag = false;

    let hi = "";
    for (let i = 0; i < 5; i++) {
        hi += "안녕~";
    }

    //flag: true -> hello
    //flag: false -> hello2

    return (
        <div className="App">
            <h1>리액트</h1>
            <h2 className="font-red">hello</h2>  { /* 문자 그대로 인식 */}
            {
                //삼항연산자
                //flag == true ? <h2>{hello}</h2> : <h2>{hello2}</h2>
            }
            {
                // && 연산자
                flag && <h2>{hello}</h2>
            }
            {
                flag == false && <h2>{hello2}</h2>
                // !flag && 
            }

            <h2 style={{ color: 'blue' }}>{hi}</h2>
        </div>
    );

    //if 사용시
    //주석 Ctrl + K,C
    // if(flag){

    //   return (
    //     <div className="App">
    //       <h1>리액트</h1>
    //       <h2>hello</h2>  { /* 문자 그대로 인식 */ }
    //         <h2>{hello}</h2> { /* 변수로 인식 */ }
    //       <h2>{hi}</h2>
    //     </div>
    //   );

    // } else {

    //   return (
    //     <div className="App">
    //       <h1>리액트</h1>
    //       <h2>hello</h2>  { /* 문자 그대로 인식 */ }
    //         <h2>{hello2}</h2> { /* 변수로 인식 */ }
    //       <h2>{hi}</h2>
    //     </div>
    //   );

    // }



}

export default Basic01;