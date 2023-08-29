import { Grid } from '@mui/material'
import ProductListItem from './ProductListItem'
import productsArray from './productsArray'

type ProductProps = {
    id: number
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
                    ({ id, name, description, price }: ProductProps) => (
                        <Grid item xs={12} sm={6} md={4} key={id}>
                            <ProductListItem
                                id={id}
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
