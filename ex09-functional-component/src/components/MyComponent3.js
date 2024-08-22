export default function MyComponent3(props){ //파라미터 props:전달받은속성값 모두가진객체!!!

    // const type = props.type
    // const placeholder = props.placeholder
    //위 작업을 구조분해할당
    const {type, placeholder, aaa} = props //이름은 꼭 똑같아야된다.

    return(
        <div>
            {/* 클래스형 컴포넌트에는 전달받은속성을 저장하는 아주 특별한 멤버변수! props가있지만
            함수형에는 없음  props는 extends한 Component가갖고있던 멤버변수였다.*/}
            {/* 함수형 컴포넌트가 속성을 전달받는 방법은 파라미터로 받음*/}
            {/* 여기는함수니까 당연 this.안씀 */}
            <span>Hello~~~~~~~{props.aaa}</span> 

            <input type={props.type} placeholder={props.placeholder} style={{marginLeft:'1rem', padding:'.5rem'}}></input>
       
            {/* 매번 사용할때마다 props.쓰는게짜증. 그래서 구조분해할당하자!!^^ */}
            <input type={type} placeholder={placeholder} value={aaa}></input>
       
        </div>
    )
}