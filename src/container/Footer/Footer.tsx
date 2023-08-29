import TotalFooter from "../../components/Cart/TotalFooter"

type Props = {
    cartData: {
        totalPrice: number
    }
    typeCurrency: 'USD' | 'EUR' | 'UAH' | 'PLN'
}

const Footer = ({ cartData, typeCurrency }: Props) => {
    
    return (
        <div>
            <TotalFooter 
                totalPrice={cartData.totalPrice}
                typeCurrency={typeCurrency}
            />
        </div>
    )
}

export default Footer
