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
  totalCount: number
  totalPrice: number
}
// Определение типа CartData, который представляет данные о корзине.

const App = () => {
  // Определение компонента App, который является основным компонентом вашего приложения.

  const [cartData, setCartData] = useState<CartData>({
    totalCount: 0,
    totalPrice: 0,
  })
  // Использование useState для создания состояния cartData, которое хранит общее количество товаров и общую стоимость в корзине.


  const [typeCurrency, setTypeCurrency] = useState<
    'USD' | 'EUR' | 'UAH' | 'PLN'
  >('USD')
  // Использование useState для создания состояния typeCurrency, которое хранит текущую выбранную валюту.


  const addProductToCart = (count: number, price: number) => {
    setCartData((prevState: CartData) => ({
      totalCount: prevState.totalCount + count,
      totalPrice: prevState.totalPrice + count * price,
    }))
  }
  // Определение функции addProductToCart, которая добавляет товары в корзину и обновляет состояние cartData.


  return (
    // Возвращение разметки компонента App, которая содержит компоненты Main и Footer из вашего проекта.
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
// Экспорт компонента App.