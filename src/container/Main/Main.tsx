// Импорт необходимых компонентов из пакетов @mui/material и @mui/system:
import { Typography } from "@mui/material";
import { Container } from "@mui/system";
// Импорт компонентов Menu и Home из соответствующих файлов:
import Menu from "./Menu";
import Home from "../../pages/Home/Home";

// Определение типа Props, содержащего свойства addProductToCart, onChange и typeCurrency:
type Props = {
    // [addProductToCart](https://www.google.com/search?q=addProductToCart): Это функция, которая принимает два аргумента - count (количество товаров) и price (цена товара) - и не возвращает никакого значения (void). Она используется для добавления товара в корзину.
    addProductToCart: (count: number, price: number) => void;

    //    [onChange](https://www.google.com/search?q=onChange): Это функция, которая принимает один аргумент - value - который может быть одним из значений 'USD', 'EUR', 'UAH' или 'PLN'. Она также не возвращает никакого значения (void). Эта функция используется для обработки изменения типа валюты.
    onChange: (value: "USD" | "EUR" | "UAH" | "PLN") => void;

    // [typeCurrency](https://www.google.com/search?q=typeCurrency): Это строковое значение, которое может быть одним из 'USD', 'EUR', 'UAH' или 'PLN'. Оно указывает текущий выбранный тип валюты и используется для отображения соответствующей информации или выполнения операций, связанных с валютой.
    typeCurrency: "USD" | "EUR" | "UAH" | "PLN";
};

// Определение компонента Main, который принимает свойства addProductToCart, onChange и typeCurrency:
const Main = ({ addProductToCart, onChange, typeCurrency }: Props) => {

    // В приведенном коде определен компонент Main с использованием деструктуризации свойств из объекта Props. Это означает, что компонент Main будет использовать свойства addProductToCart, onChange и typeCurrency, которые передаются ему в качестве аргумента.

    //   В данном случае, свойства addProductToCart, onChange и typeCurrency доступны внутри тела компонента Main и могут быть использованы для выполнения необходимых операций или передачи в другие компоненты, как показано в коде.

    //   Например, вы можете вызывать функцию addProductToCart и передавать ей соответствующие значения:

    //   addProductToCart(5, 10.99); // Вызов функции addProductToCart с аргументами 5 и 10.99
    //   Вы также можете использовать значение typeCurrency для отображения информации или выполнения операций, связанных с выбранной валютой:

    //   console.log(typeCurrency); // Вывод значения typeCurrency в консоль
    //   Таким образом, деструктуризация свойств addProductToCart, onChange и typeCurrency позволяет упростить доступ к ним внутри компонента Main и использовать их по необходимости.

    return (
        <main>
            <Container maxWidth="lg">
                {/* В коде, <Container maxWidth="lg"> представляет собой компонент Container из пакета @mui/system с атрибутом maxWidth установленным на значение "lg".

                Компонент Container используется для создания контейнера с определенными ограничениями ширины и выравнивания. Атрибут maxWidth позволяет указать максимальную ширину контейнера. В данном случае, значение "lg" указывает на использование ширины, определенной для больших экранов (large screens).

                В этом примере, контейнер будет иметь максимальную ширину, соответствующую большим экранам. Вы можете поместить нужное содержимое внутри контейнера, и оно будет выровнено и ограничено внутри указанной ширины.

                Обратите внимание, что maxWidth может принимать и другие значения, такие как "xs", "sm", "md", "xl", или числовые значения, чтобы указать различные ограничения ширины для разных размеров экранов. */}

                <Typography
                /* Typography используется для отображения заголовка страницы. 
                Свойство sx в компоненте Typography позволяет применить инлайн-стили к тексту.*/
                    sx={{
                        fontWeight: "bold",
                        textAlign: "center",
                        fontSize: [40],
                        marginTop: "50px",
                        marginBottom: "30px",
                    }}
                >
                    Our Shop Page
                </Typography>
                <Menu onChange={onChange} />
                <Home
                    addProductToCart={addProductToCart}
                    typeCurrency={typeCurrency}
                />
            </Container>
        </main>
    );
};

// Экспорт компонента Main по умолчанию:
export default Main;
// Таким образом, когда компонент Main используется в других местах кода, ожидается, что ему будут переданы свойства [addProductToCart](https://www.google.com/search?q=addProductToCart), [onChange](https://www.google.com/search?q=onChange) и [typeCurrency](https://www.google.com/search?q=typeCurrency) с соответствующими типами и значениями.


