import { currencyExchange } from '../../helpers/currencyExchange'
import './Total.scss'

type Props = {
    totalCount: number
    totalPrice: number
    typeCurrency: 'USD' | 'EUR' | 'UAH' | 'PLN'
}

const CartFooter = ({ totalCount, totalPrice, typeCurrency }: Props) => {
    const newTotalPrice = currencyExchange(totalPrice, typeCurrency)

    return (
        <div>
            <div className="totalPrice">Total: {newTotalPrice}</div>
        </div>
    )
}

export default CartFooter
