import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker"; //npx expo install @react-native-picker/picker

const AppPicker = () => {
  const [selectedLanguage, setSelectedLanguage] = useState();
  return (
    <Picker
      selectedValue={selectedLanguage}
      onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}
    >
        <Picker.Item label='Java' value={'java'} />
        <Picker.Item label='Javascript' value={'javascript'} />
        <Picker.Item label='HTML' value={'html'} />
        <Picker.Item label='CSS' value={'css'} />
        <Picker.Item label='C#' value={'c#'} />
        <Picker.Item label='React' value={'react'} />
        <Picker.Item label='Angular' value={'angular'} />
    </Picker>
  );
};

export default AppPicker;
