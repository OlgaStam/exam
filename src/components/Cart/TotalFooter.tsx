import { currencyExchange } from "../../utils/currencyExchange";
import "./TotalFooter.scss";

type Props = {
    totalPrice: number;
    typeCurrency: "USD" | "EUR" | "UAH" | "PLN";
};

const TotalFooter = ({ totalPrice, typeCurrency }: Props) => {
    const newTotalPrice = currencyExchange(totalPrice, typeCurrency).toFixed(2);
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
            <div className="totalPrice">
                Total: {newTotalPrice} {prefix}
            </div>
        </div>
    );
};

export default TotalFooter;
