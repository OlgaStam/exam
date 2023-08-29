import CartFooter from "../../components/Cart/CartFooter"

type Props = {
    cartData: {
        totalPrice: number
    }
    typeCurrency: 'USD' | 'EUR' | 'UAH' | 'PLN'
}

const Footer = ({ cartData, typeCurrency }: Props) => {
    
    return (
        <div>
            <CartFooter
                totalPrice={cartData.totalPrice}
                typeCurrency={typeCurrency}
            />
        </div>
    )
}

export default Footer
