'use client'

const idUser = (props) => {
    
    localStorage.setItem('value', props.value);

    return (
        <>
            <div>id</div>
            <p>{props.value}</p>
        </>
    )
}
export default idUser