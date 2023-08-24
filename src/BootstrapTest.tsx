import {
    Container,
    Row,
    Col,
    ButtonGroup,
    ToggleButton,
} from "react-bootstrap";
import { useState } from "react";

const BootstrapTest = () => {
    const [radioValue, setRadioValue] = useState("1");

    const radios = [
        { name: "USD", value: "1" },
        { name: "EUR", value: "2" },
        { name: "UAH", value: "3" },
        { name: "PLN", value: "4" },
    ];
    return (
        <Container>

            <Row>

                <Col>1 of 3</Col>
                <Col>
                        <ButtonGroup>
                            {radios.map((radio, idx) => (
                                <ToggleButton
                                    key={idx}
                                    id={`radio-${idx}`}
                                    type="radio"
                                    variant="outline-primary"
                                    name="radio"
                                    value={radio.value}
                                    checked={radioValue === radio.value}
                                    onChange={(e) => setRadioValue(e.currentTarget.value)}
                                >
                                    {radio.name}
                                </ToggleButton>
                            ))}
                        </ButtonGroup>
                </Col>
                <Col>3 of 3</Col>
            </Row>
        </Container>
    );
};

export default BootstrapTest;
