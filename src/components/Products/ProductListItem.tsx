import {
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
} from "@mui/material";
import { useState } from "react";
import "./ProductListItem.scss";
import { currencyExchange } from "../../helpers/currencyExchange";

type Props = {
  id: number;
  name: string;
  description: String;
  price: number;
  addProductToCart: (count: number, price: number) => void;
  typeCurrency: "USD" | "EUR" | "UAH" | "PLN";
};

const ProductListItem = ({
  id,
  name,
  description,
  price,
  addProductToCart,
  typeCurrency,
}: Props) => {

  let prefix = "";

  typeCurrency === "USD"
    ? (prefix = "$")
    : typeCurrency === "EUR"
    ? (prefix = "€")
    : typeCurrency === "UAH"
    ? (prefix = "₴")
    : (prefix = "zł");

  const [count, setCount] = useState<number>(1);

  // const onIncrementClick = () =>
  //     setCount((prevState: number) => prevState + 0)

  // const onDecrementClick = () =>
  //     setCount((prevState: number) => prevState - 0)

  const newValue = currencyExchange(price, typeCurrency).toFixed(2);

  return (
    <Card className="product">
      <CardContent>
        <h4>{name}</h4>
        <p className="product-description">{description}</p>
        <div className="product-price">
          Price: {newValue} {prefix}
        </div>
     
      </CardContent>
      <CardActions className="btn-wrap">
        <Button className=" buy"
          variant="outlined"
          onClick={() => addProductToCart(count, price)}
        >
          Buy
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductListItem;
