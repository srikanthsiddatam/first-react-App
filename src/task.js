

const task= (props)=>
{
    const {name , password,children} = props
    

    return<>
    <div style={{height:"100vh",width:"100vw",backgroundColor:"rgb(140,140,140)", display:"flex", justifyContent:"center", alignItems:"center",}}>
        <div style={{width:'600px', height:'500px',backgroundColor:'white' , border:'2px solid red', padding:'30px',borderRadius:'20px'}}>
            
            <h1 style={{textAlign:'center', color:'aquamarine', fontSize:'60px'}}>Sign in</h1>
            <label style={{marginRight:"30px",fontSize:'20px',color:'brown'}} for='name'>User ID :</label>
            <input type="Email" id="name" style={{width:"100vw",maxWidth:"400px", padding:"10px"}}></input><br></br><br></br>
            <label style={{marginRight:"30px",fontSize:'20px',color:'brown'}} for='pwd'>password  :</label>
            <input type="password" id="pwd" style={{width:"100vw",maxWidth:"400px", padding:"10px"}}></input><br></br><br></br>
            <button type="submit" style={{padding:"10px", width:"100px", textAlign:'center',marginLeft:'250px', fontFamily:'cursive', backgroundColor:'rgb(120,120,10)' , fontWeight:'20px' ,fontSize:'medium',borderRadius:'40px'}}  > Log In</button><br></br><br></br>
            <a href="#123">{password}</a>
            <div style={{display:'flex',justifyContent:'space-around'}}>
            <p>Create a <a href="#qwer"> {name} </a></p>
            <p>check your <a href="#qwer"> {name} </a> login or not</p>
            </div>
        </div>
        {children}
        


        
    </div>
    </>
}
export default task