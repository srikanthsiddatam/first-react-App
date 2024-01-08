
const Header1=()=>{
    return(
       <div style={{
        height:"100vh",
        maxHeight:"400px",
        width:"100vw",
        backgroundColor:"rgb(90,90,90)",
        margin:"0px",
        padding:"0px"
         }}>
        <h1>
            Header component
        </h1>
        <h2>Table</h2>
        <table border={2} style={{
            width:"100vw",
            borderCollapse:"collapse"
        }}>
            <tr style={{
                background:"green",
                textAlign:"center",
                fontSize:"20px"
            }}>
                <th>
                    Name

                </th>
                <th>
                    Class

                </th>
                <th>
                    Section

                </th>
            </tr>

            <tr style={{
                textAlign:"center",
                fontSize:"15px",
                color:"blue"
            }}>
                <td>
                    Srikanth
                </td>
                <td>
                    intermediate
                </td>
                <td>
                    A - Section
                </td>
            </tr>
            <tr style={{
                textAlign:"center",
                fontSize:"15px",
                color:"blue"
            }}>
                <td>
                    RAvi
                </td>
                <td>
                    intermediate
                </td>
                <td>
                    B - Section
                </td>
            </tr>
            <tr style={{
                textAlign:"center",
                fontSize:"15px",
                color:"blue"
            }}>
                <td>
                    Nandu
                </td>
                <td>
                    intermediate
                </td>
                <td>
                    C - Section
                </td>
            </tr>
            <tr style={{
                textAlign:"center",
                fontSize:"15px",
                color:"blue"
            }}>
                <td>
                    Smith
                </td>
                <td>
                    intermediate
                </td>
                <td>
                    A - Section
                </td>
            </tr>
        </table>
       </div>
       
        

        
    )
}
export default Header1