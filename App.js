import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';

function Dog(props) {
  const [isHungry, setIsHungry] = useState(true);

  return (
    <View>
      <Text>
        I am {props.name}, and I am {isHungry ? 'hungry' : 'full'}!
      </Text>
      <Button
        onPress={() => {
          setIsHungry(false);
        }}
        disabled={!isHungry}
        title={isHungry ? 'Pour me some milk, please!' : 'Thank you!'}
      />
    </View>
  );
}

export default function Cafe() {
  return (
    <>
      <Dog name="Munkustrap" />
      <Dog name="Spot" />
    </>
  );
}
