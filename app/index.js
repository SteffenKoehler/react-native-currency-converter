import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import Home from './screens/Home';
import CurrencyList from './screens/CurrencyList';
import Options from './screens/Options';

EStyleSheet.build({
  $primaryBlue: '#4f6d7a',
  $lightGray: '#F0F0F0',

  $white: '#fff',
  $border: '#E2E2E2',
  $inputText: '#797979',
  $darkText: '#343434',
})

export default () => <Options / > ;