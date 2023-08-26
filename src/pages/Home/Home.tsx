import ProductList from "../../components/Products/ProductList"


type Props = {
    addProductToCart: (count: number, price: number) => void
    typeCurrency: 'USD' | 'EUR' | 'UAH' | 'PLN'
}

const Home = ({ addProductToCart, typeCurrency }: Props) => {
    return (
        <>
            <ProductList
                addProductToCart={addProductToCart}
                typeCurrency={typeCurrency}
            />
        </>
    )
}

export default Home
