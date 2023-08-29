// Импортируются необходимые зависимости:
import { useState } from 'react'
// useState из пакета 'react' для использования состояния в функциональном компоненте.
import CssBaseline from '@mui/material/CssBaseline'
// CssBaseline из пакета '@mui/material/CssBaseline' для нормализации стилей и сброса стилей браузера.
import { Container } from '@mui/system'
// Container из пакета '@mui/system' для создания контейнеров сетки Material-UI.
import { StyledEngineProvider } from '@mui/material'
// StyledEngineProvider из пакета '@mui/material' для обеспечения совместимости с Emotion CSS-in-JS.
import Main from '../Main/Main'
import Footer from '../Footer/Footer'

type CartData = {
  // totalCount: number
  totalPrice: number
}
const App = () => {
  const [cartData, setCartData] = useState<CartData>({
    // totalCount: 0,
    totalPrice: 0,
  })

  const [typeCurrency, setTypeCurrency] = useState<
    'USD' | 'EUR' | 'UAH' | 'PLN'
  >('USD')

  const addProductToCart = (count: number, price: number) => {
    setCartData((prevState: CartData) => ({
      // totalCount: prevState.totalCount + count,
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