import { UNITS } from '../constant'

const getOppositUnit = (unit)=>{
    return unit === UNITS.celsius ? UNITS.faranheit : UNITS.celsius

}

const convertTemperatureTo = (unit, value)=>{
    if(unit === UNITS.celsius){
        return (value - 32) / 1.8
    }
    else {
        return value * 1.8 + 32
    }
}


const isIceTemperature = (value, unit) => {
    if (unit === UNITS.celsius){
        return value <= 0
    }
    else {
        return value <= 32
    }
}

export { getOppositUnit, convertTemperatureTo, isIceTemperature}