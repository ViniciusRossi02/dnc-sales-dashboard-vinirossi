import { Box, Container } from '@mui/material'
import Grid from '@mui/material/Grid'
import { BannerImage, FormComponent, Logo,StyledH1, StyledP, StyledUl} from '@/components'
import { pxToRem } from '@/utils'

function Registration() {
return(
 <>
    
    
    <Box sx={{ overflow: "hidden", height: "100vh" }}>
                <Grid container spacing={2}>
                    {/* Lado do Login */}
                    <Grid sx={{ flex: 1, display: "flex", alignItems: "center", height: "100vh" }}>
                        <Container maxWidth="sm">
                             <Box sx={{marginBottom: pxToRem(24)}}>
                                <Logo height={41} width={100}/>
                            </Box>
                            <Box sx={{marginBottom: pxToRem(24)}}>
                                <StyledH1>Faça seu cadastro</StyledH1>
                                <StyledP>Primeiro, diga-nos quem você é.</StyledP>
                                <StyledUl>
                                    <li>Entre 8 e 16 caracteres;</li>
                                    <li>Pelo menos uma letra maiúscula;</li>
                                    <li>Pelo menos um caractere especial.</li>
                                    <li>Pelo menos um número</li>

                                </StyledUl>
                            </Box>
                            
                             <FormComponent inputs={[
                                {type: 'email', placeholder: 'Email'},
                                {type: 'passaword', placeholder: 'Senha'}
                            ]}
                            buttons={[
                                {className: 'primary', type:'submit', children: 'login'},
                            ]}
                            message={{
                                msg:'ERRO!!!',
                                type: 'error',
                            }}
                            />
                        </Container>
                    </Grid>

                    {/* Lado da Imagem */}
                    <Grid
                        sx={{
                            flex: 1,
                            display: { xs: "none", sm: "block" },
                            height: "100vh",
                        }}
                    >
                        <BannerImage/>
                    </Grid>
                </Grid>
            </Box>
 </>
 
  )   
}

export default Registration