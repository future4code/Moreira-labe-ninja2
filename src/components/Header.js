import React from "react"
import styled from "styled-components"

const Borda = styled.div `
border: 3px solid 



`

class Header extends React.Component{
    render(){
        return(
         <div>
             <Borda>o</Borda>
         </div>
        )
    }
}

export default Header;