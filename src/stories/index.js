import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import randomWords from 'random-words'

import Select from '../index'

const optionsWithValues = randomWords({exactly: 10,
  wordsPerString: 2,
  formatter: (word, index) => {
    return index === 0 ? word.slice(0, 1).toUpperCase().concat(word.slice(1)) : word
  }}).map(w => {
  return {text: w, value: w.toLowerCase()}
})

storiesOf('Select', module)
  .add('array of strings', () => <Select onChange={action('selected')} options={randomWords(5)} />)
  .add('custom value', () => <Select onChange={action('selected')} options={optionsWithValues} />)
  .add('custom value return just value', () => <Select onChangeValue={action('value')} options={optionsWithValues} />)
