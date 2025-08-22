import { Box, Container } from '@mui/material'
import Grid from '@mui/material/Grid'
import { BannerImage } from '@/components'


function Login() {
    return (
        <>
            <Box>
                <Grid container spacing={2}>
                    {/* Lado do Login */}
                    <Grid sx={{ flex: 1, display: "flex", alignItems: "center", height: "100vh" }}>
                        <Container maxWidth="sm">
                            <h1>LOGIN</h1>
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