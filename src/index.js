import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

const Options = ({ options }) => {
  if (options.length > 0 && typeof options[1] === 'object') {
    return options.map((o) => <option key={o.value} value={o.value}>{o.text}</option>)
  } else {
    return options.map(o => <option key={o}>{o}</option>)
  }
}

export default class Select extends Component {
  static propTypes = {
    options: PropTypes.array,
    onChange: PropTypes.func,
    onChangeValue: PropTypes.func,
    value: PropTypes.string,
    className: PropTypes.string
  }

  constructor(props) {
    super(props)

    this.options = this.props.options || []
    this.parentChange = this.props.onChange || function() {}
    this.parentChangeValue = this.props.onChangeValue || function() {}
    this.className = this.props.className

    this.state = {
      value: this.props.value
    }

    this.change = this.change.bind(this)
  }

  change(event) {
    this.setState({
      value: event.target.value,
      previous: this.state.value
    })
    this.parentChange(event)
    this.parentChangeValue(event.target.value)
  }

  render() {
    return (
      <Fragment>
        <select className={this.className} onChange={this.change} value={this.state.value}>
          <Options className options={this.options} />
        </select>
      </Fragment>
    )
  }
}
