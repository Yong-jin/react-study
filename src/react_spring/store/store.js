import {configureStore, createSlice} from '@reduxjs/toolkit';

// let [username, setUsername] = useState('tom');
// let [username, setUsername] = useState([1,2,3,4]);
// let [username, setUsername] = useState({content:"햄버거", name:"싸이버거"});
//      setUsername('abc');

// username[0] = 0
// setUsername( [0,2,3,4] );
// [...username]   copy[0] = 0   setUsername(copy)

let userSlice = createSlice({
    name : 'username',
    initialState : 'tom',
    reducers : {

        /*
        saveUserName(name){
            this.name = name;
        }
        */

        //           state : 기존 값
        saveUserName(state, action){        //tom    tomadd  tomaddadd + add

            console.log(action.payload);
            //action.payload  = 매개변수로 들어온 'abc'

            //return state + 'add';           
            return action.payload;  // -> state 변수 값으로 저장
        },
        clearUserName(state){
            return "clean";
        },
        saveUserInfo(state, action){

            console.log(action.payload);  //{id:'abc', name:'Bob' }
            console.log(action.payload.id);
            console.log(action.payload.name);

            //props    props.id  props.name
            // { id, name }

            let {id, name} = action.payload;
            console.log(id);
            console.log(name);

            return state;
        }
    }
})

//store 전체기준 리덕스 저장 객체

export let {saveUserName, clearUserName, saveUserInfo} = userSlice.actions;
//actions : 상태관리하는 slice(변수)에 속한 상태변경 함수가 모여있는 객체


let weather = createSlice({
    name : 'weather',
    initialState : {
        weather: "snowy",
        temperature : "2",
        hmdt : "70"
    },
    reducers : {
        setWeatherInfo(state, action){
            let {weather, temperature, hmdt} = action.payload;
            console.log(weather);
            console.log(temperature);
            console.log(hmdt);

            state.weather = weather;
            state.temperature = temperature;
            state.hmdt = hmdt;

            /*return {
                weather : weather,
            temperature : temperature,
                   hmdt : hmdt 
            };*/
        }
    }
})

export let {setWeatherInfo} = weather.actions;


let companySlice = createSlice({
    name : "company",
    initialState : {
        name :"qwerComp",
        sid : "10248832",
        address : "어디어디"
    },
    reducers : {
        changeAddress(state, action){
            state.address = action.payload;  
            //  dispatch(changeAddress('어디주소'));

            state.address = action.payload.address;  
            //  changeAddress( {address:'어디주소'} );

            // dispatch(changeAddress( {address:'어디주소'} ));
        }
    }
}
)

export let {changeAddress} = companySlice.actions;
// import {changeAddress} ...
//useSelector((state)=>{return state.company})


export default configureStore(
    {
        reducer: {
            user: userSlice.reducer,
            weather: weather.reducer,
            company: companySlice.reducer
        }
    }
)

