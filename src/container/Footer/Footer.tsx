import CartFooter from "../../components/Cart/CartFooter"

type Props = {
    cartData: {
        totalCount: number
        totalPrice: number
    }
    typeCurrency: 'USD' | 'EUR' | 'UAH' | 'PLN'
}

const Footer = ({ cartData, typeCurrency }: Props) => {
    return (
        <div>
            <CartFooter
                totalCount={cartData.totalCount}
                totalPrice={cartData.totalPrice}
                typeCurrency={typeCurrency}
            />
        </div>
    )
}

export default Footer
