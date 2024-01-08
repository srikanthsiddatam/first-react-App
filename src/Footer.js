const myfun = ( ) => {
    alert(Date());

    
}

const footer=()=>{
    return(
    <div style={{ width:"100vw",background:"rgb(170,170,0)",height:"40vh", margin:"0"}}>
    <p style={{fontSize:"70px"}}>Footer </p>
    <div>
        <button onClick={myfun}>Click Me to display date</button>
        
    </div>
    <ul>
        <h3>Hobbies</h3>
        <li> Playing Games</li>
        <li>Cricket</li>
        <li>Reading books</li>
    </ul>
    
    </div>
    
    )
}
export default footer