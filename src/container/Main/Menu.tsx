import { FC } from 'react'
import './Main.scss'
import { Button } from '@mui/material'

type Props = {
    onChange: (value: 'USD' | 'EUR' | 'UAH' | 'PLN') => void
    typeCurrency: 'USD' | 'EUR' | 'UAH' | 'PLN'
}

const Menu: FC<Props> = ({ onChange, typeCurrency }) => {
    
    const isUSD = typeCurrency === 'USD'
    const isEUR = typeCurrency === 'EUR'
    const isUAH = typeCurrency === 'UAH'
    const isPLN = typeCurrency === 'PLN'

    return (
        <>
            <div className="currencies ">
                <Button
                    variant="outlined"
                    className={`currency ${isUSD ? "active" : ""}`} onClick={() => onChange('USD')}>USD</Button>
                <Button
                    variant="outlined" className={`currency ${isEUR ? "active" : ""}`} onClick={() => onChange('EUR')}>EUR</Button>
                <Button
                    variant="outlined" className={`currency ${isUAH ? "active" : ""}`} onClick={() => onChange('UAH')}>UAH</Button>
                <Button
                    variant="outlined" className={`currency ${isPLN ? "active" : ""}`} onClick={() => onChange('PLN')}>PLN</Button>
            </div>
        </>
    )
}

export default Menu
