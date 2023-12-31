import { Grid } from '@mui/material'
import ProductListItem from './ProductListItem'
import productsArray from '../../utils/productsArray'

type ProductProps = {
    name: string
    description: string
    price: number
}

type Props = {
    addProductToCart: (count: number, price: number) => void
    typeCurrency: 'USD' | 'EUR' | 'UAH' | 'PLN'
}

const ProductsList = ({ addProductToCart, typeCurrency }: Props) => {
    return (
        <>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={4}
            >
                {productsArray.map(
                    ({ 
                        name, description, price }: ProductProps) => (
                        <Grid item xs={12} sm={6} md={4}>
                            <ProductListItem
                                name={name}
                                description={description}
                                price={price}
                                addProductToCart={addProductToCart}
                                typeCurrency={typeCurrency}
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </>
    )
}

export default ProductsList
