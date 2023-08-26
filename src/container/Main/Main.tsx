import { Typography } from '@mui/material'
import { Container } from '@mui/system'
import Menu from './Menu'
import Home from '../../pages/Home/Home'

type Props = {
    addProductToCart: (count: number, price: number) => void
    onChange: (value: 'USD' | 'EUR' | 'UAH' | 'PLN') => void
    typeCurrency: 'USD' | 'EUR' | 'UAH' | 'PLN'
}

const Main = ({ addProductToCart, onChange, typeCurrency }: Props) => {
    return (
        <main>
            <Container maxWidth="lg">
                <Typography
                    sx={{
                        fontWeight: 'bold',
                        textAlign: 'center',
                        fontSize: [40],
                        marginTop: '50px',
                        marginBottom: '30px',
                    }}
                >
                    Our Shop Page
                </Typography>
                <Menu onChange={onChange} />
                <Home
                    addProductToCart={addProductToCart}
                    typeCurrency={typeCurrency}
                />
            </Container>
        </main>
    )
}

export default Main
