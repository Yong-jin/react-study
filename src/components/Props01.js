import Box from './Box';

function Props01(){

    let arr = ['아침', '점심', '저녁'];
    let detail = ['배고프다', '졸리다', '피곤하다'];

    return (
        <div>
            <Box text={arr[0]} detail={detail[0]}/>
            <Box text={arr[1]} detail={detail[1]}/>
            <Box text={arr[2]} detail={detail[2]}/>
        </div>
    );
}

export default Props01;