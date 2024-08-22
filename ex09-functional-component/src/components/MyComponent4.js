import { useState } from "react"

export default function MyComponent4(){

    //여기는 지역변수..
    //state변수를 만들어주는 HOOK메소드...useState()
    let message = useState('Hello world') //message라는 변수를 state변수로 만들어줌.초기값은 파라미터로
    
    function changeMessage(){
        message = "nice to meet you"
        alert(message)
        
        //setState()같은 함수가있어야 화면갱신됨!
    }

    // (실습2)usetState()를 사용할때는 state변수와 setState()메소드까지 만들어줘야함
    //useState()는 state용변수 & 그 값을변경하는 setState()메소드까지 한번에 배열로리턴해줌.
    //이를 분해할당한것임.
    let [title, setTitle] = useState('Hello React')

    let changeTitle= ()=>{
        //useState()같은 기능메소드
        setTitle('VERY GOOD HOOK')

    }


    return(
        <div style={{border:'2px solid black', padding:8, margin:4}}>

            <h4>함수형 컴포넌트에서 state사용실습</h4>

            {/* 리액트는 data binding기법을 사용함. 요소를제어하지않고, 요소가보여주는
            값을저장한 변수!!!를 제어하는 기법 */}
            {/*변수 중,화면UI가 자동갱신되는 아주특별한 Component클래스의 멤버변수state
            이 값을변경하기위한 method--setState()  */}
            {/* 문제는 함수형컴포넌트는 Component클래스를 상속하지않았기에..state라는특별한변수없음 */}
            {/* 그래서 함수형컴포넌트를 stateless컴포넌트라고불렀음
            (실습1)지금은React버전업-> 함수형컴포넌트에서도 클래스형에서사용하던 기술 적용가능! 이 기법을 HOOK기법
            HOOK - 후크. 걸다. 어떤상황이되면 걸게끔.. */}
            
            <p>{message}</p>
            <button onClick={changeMessage}>change message</button>
            
            <hr></hr>
            {/* (실습2)state를 사용하려면 setState()역할까지 같이사용해야됨 */}
            <p>{ title }</p>
            <button onClick={changeTitle}>changeTitle</button>




        </div>
    )

    
}