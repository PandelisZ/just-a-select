# just-a-select

> Plain no jazz select

[![NPM](https://img.shields.io/npm/v/just-a-select.svg)](https://www.npmjs.com/package/just-a-select) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save just-a-select
```

```bash
yarn add just-a-select
```

## Usage

[Storybook example](https://pandelisz.github.io/just-a-select/)

```jsx
import React, { Component } from 'react'

import Select from 'just-a-select'

class Example extends Component {
  render () {
    return (
      <Select onChange={selectHasChanged()} options={
        [
          'Sarcoline',
          'Coquelicot',
          'Smaragdine',
          'Mikado',
          'Glaucous'
        ]
      } />
    )
  }
}
```

## License

MIT © [PandelisZ](https://github.com/PandelisZ)
