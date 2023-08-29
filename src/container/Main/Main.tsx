import { Container } from "@mui/system";
import Menu from "../../components/Menu/Menu";
import ProductsList from "../../components/Products/ProductList";

type Props = {
    addProductToCart: (count: number, price: number) => void;
    onChange: (value: "USD" | "EUR" | "UAH" | "PLN") => void;
    typeCurrency: "USD" | "EUR" | "UAH" | "PLN";
};

const Main = ({ addProductToCart, onChange, typeCurrency }: Props) => {

    return (
        <main>
            <Container maxWidth="lg">
                <Menu onChange={onChange} typeCurrency={typeCurrency} />
                <ProductsList
                    addProductToCart={addProductToCart}
                    typeCurrency={typeCurrency}
                />
            </Container>
        </main>
    );
};

export default Main;
