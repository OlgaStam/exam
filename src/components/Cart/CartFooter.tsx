import { currencyExchange } from '../../helpers/currencyExchange'
import './Total.scss'

type Props = {
    totalPrice: number
    typeCurrency: 'USD' | 'EUR' | 'UAH' | 'PLN'
}

const CartFooter = ({ totalPrice, typeCurrency }: Props) => {
    const newTotalPrice = currencyExchange(totalPrice, typeCurrency)
    let prefix = "";

    typeCurrency === "USD"
      ? (prefix = "$")
      : typeCurrency === "EUR"
      ? (prefix = "€")
      : typeCurrency === "UAH"
      ? (prefix = "₴")
      : (prefix = "zł");
    return (
        <div>
            <div className="totalPrice">Total: {newTotalPrice} {prefix}</div>
        </div>
    )
}

export default CartFooter
