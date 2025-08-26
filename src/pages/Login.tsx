import { Box, Container } from '@mui/material'
import Grid from '@mui/material/Grid'
import { BannerImage, FormComponent, Logo,StyledH1,StyledP } from '@/components'
import { pxToRem } from '@/utils'


function Login() {
    return (
        <>
            <Box>
                <Grid container spacing={2}>
                    {/* Lado do Login */}
                    <Grid sx={{ flex: 1, display: "flex", alignItems: "center", height: "100vh" }}>
                        <Container maxWidth="sm">
                            <Box sx={{marginBottom: pxToRem(24)}}>
                                <Logo height={41} width={100}/>
                            </Box>
                            <Box sx={{marginBottom: pxToRem(24)}}>
                                <StyledH1>Bem-vindo</StyledH1>
                                <StyledP>Digite sua senha e email para logar</StyledP>
                            </Box>
                            
                            <FormComponent inputs={[
                                {type: 'email', placeholder: 'Email', disabled: false},
                                {type: 'passaword', placeholder: 'Senha'},
                            ]}
                            buttons={[
                                {className: 'primary', type:'submit', children: 'login', disabled: true},
                            ]}
                            message={{
                                msg:'Sucesso!!!',
                                type: 'success',
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

export default Login