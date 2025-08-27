import {CardComponent, Header} from "@/components"
import AvatarList from "@/components/AvatarList"
import { currencyConverter } from "@/utils"
import { Container } from "@mui/material"


function Home() {
  const mockListData = [
    {
      avatar: '/dnc-avatar.svg',
      name: 'Nome Sobrenome 1',
      subtitle: currencyConverter(4234.54)
    },
    {
      avatar: '/dnc-avatar.svg',
      name: 'Nome Sobrenome 2',
      subtitle: currencyConverter(3334.54)
    },
     {
      avatar: '/dnc-avatar.svg',
      name: 'Nome Sobrenome 3',
      subtitle: currencyConverter(2264.74)
    }
  ]

return(
 <>
   <Header/>
   <Container maxWidth="lg">
      <CardComponent>CARD</CardComponent>
      <CardComponent>
        <AvatarList ListData={mockListData} />
      </CardComponent>
   </Container>
    
 </>
  )   
}

export default Home