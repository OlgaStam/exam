import { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import { Container } from '@mui/system'
import { StyledEngineProvider } from '@mui/material'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'

type CartData = {
  totalCount: number
  totalPrice: number
}

const App = () => {
  const [cartData, setCartData] = useState<CartData>({
    totalCount: 0,
    totalPrice: 0,
})
const [typeCurrency, setTypeCurrency] = useState<
        'USD' | 'EUR' | 'UAH' | 'PLN'
    >('USD')
    const addProductToCart = (count: number, price: number) => {
      setCartData((prevState: CartData) => ({
          totalCount: prevState.totalCount + count,
          totalPrice: prevState.totalPrice + count * price,
      }))
  }
  return (
    <div><>
    <StyledEngineProvider injectFirst>
        <CssBaseline />
        <Container maxWidth="lg">
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