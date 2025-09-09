import { useContext } from "react"

import { AppThemeContext } from "@/contexts/AppThemeContext"

//COMPONENTES
import { Container, Grid } from "@mui/system"
import {CardComponent,Header, StyledH2,StyledButton} from "@/components"

//SERVICES
import { logout } from "@/services"

function Profile() {
  const themeContext = useContext(AppThemeContext)

return(
 <>
   <Header/>
   <Container className='mb-2' maxWidth="lg">
        <Grid container spacing={4}>
            <Grid>
                <CardComponent>seus dados...</CardComponent>
            </Grid>
        </Grid>
   </Container>
    <CardComponent>
      <StyledH2 className="mb-1">Definições de conta</StyledH2>
      <StyledButton className="primary mb-1" onClick={themeContext?.toggleTheme}>
        Trocar para tema {themeContext?.appTheme === 'light' ? 'eschuro' : 'claro'}
      </StyledButton>
      <StyledButton className="alert" onClick={logout}>
          Logout
      </StyledButton>
    </CardComponent>
 </>
  )   
}

export default Profile