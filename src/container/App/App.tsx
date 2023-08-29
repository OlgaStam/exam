import { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import { Container } from '@mui/system'
import { StyledEngineProvider } from '@mui/material'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

type CartData = {
  totalPrice: number
}
const App = () => {
  const [cartData, setCartData] = useState<CartData>({
    totalPrice: 0,
  })

  const [typeCurrency, setTypeCurrency] = useState<
    'USD' | 'EUR' | 'UAH' | 'PLN'
  >('USD')

  const addProductToCart = (count: number, price: number) => {
    setCartData((prevState: CartData) => ({
      totalPrice: prevState.totalPrice + count * price,
    }))
  }

  return (
    <div><>
      <StyledEngineProvider injectFirst>
        <CssBaseline />
        <Container maxWidth="lg">
          <Header/>
          <Main
            addProductToCart={addProductToCart}
            onChange={setTypeCurrency}
            typeCurrency={typeCurrency}
          />
          <Footer cartData={cartData} typeCurrency={typeCurrency} />
        </Container>
      </StyledEngineProvider>
    </></div>
  )
}

export default App