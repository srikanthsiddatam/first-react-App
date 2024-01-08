const test=()=>{
    return<>
    <div style={{height:"400px",backgroundColor:"red"}}>
        <h1>Form Element</h1>
        <form >
            <label for="name">FirstName</label>
            <input type="text" id="name"></input><br></br><br></br>
            <label for="last">LastName</label>
            <input type="text"></input><br></br><br></br>
            <button type="submit" onClick={submitform}>click me to Submit Form</button>
        </form>
        </div>
       

        </>

}
const submitform=()=>{
    alert("form has being submitted")
}
export default test