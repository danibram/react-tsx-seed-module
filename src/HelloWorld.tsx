import * as React from 'react'

export interface HelloWorldProps {
  text?: string
}

export default class HelloWorld extends React.Component<HelloWorldProps, any> {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        {this.props.text}
      </div>
    )
  }
}
