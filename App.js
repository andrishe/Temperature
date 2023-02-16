
import { useEffect, useState } from 'react';
import { ImageBackground, Text, View } from 'react-native';
import { styles }  from './Appstyle';
import hot from './assets/hot.png';
import cold from './assets/cold.png';
import { ButtonConvert } from './ButtonConvert/ButtonConvert';
import { InputTemperature } from './components/InpoutTemperature/InputTemperature';
import { TemperatureDisplay } from './components/TemperatureDisplay/TemperatureDisplay';
import { DEFAULT_TEMPERATURE, DEFAULT_UNIT } from './constant'
import { getOppositUnit, convertTemperatureTo, isIceTemperature } from './services/temp-service';

export default function App() {
  const [inputValue, setInputValue] = useState(DEFAULT_TEMPERATURE)
  const [currentUnit, setCurrentUnit] = useState(DEFAULT_UNIT)
  const oppositeUnit = getOppositUnit(currentUnit)
  const [currentBackground, setCurrentBackground] = useState()


  useEffect(() =>{
    const temperatureAsFloat = Number.parseFloat(inputValue)
    if(! isNaN(temperatureAsFloat)) {
      const isCold = isIceTemperature(inputValue, currentUnit)
      setCurrentBackground(isCold ? cold : hot)
    }

  }, [inputValue])


  const getConvertedTemperature = ()=>{
    const valueAsFloat = Number.parseFloat(inputValue)
    return isNaN(valueAsFloat) ? "" : convertTemperatureTo(oppositeUnit, valueAsFloat).toFixed(1)
  }

  console.log(inputValue)
  return (
    <ImageBackground source={currentBackground} style={styles.container}>
      <View style={styles.work}>
        <View>
          <TemperatureDisplay 
          value={getConvertedTemperature()} 
          unit={oppositeUnit}/>
        </View>
      
          <InputTemperature 
          onChangeText={setInputValue} 
          defaultValue={DEFAULT_TEMPERATURE}
          unit={currentUnit}
          />
      
        <View>
          <ButtonConvert onPress={()=>{
            setCurrentUnit(oppositeUnit)
          }}
          unit={currentUnit}/>
          </View>
      </View>
    </ImageBackground>
  );
}


