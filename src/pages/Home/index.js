import React from 'react'
import { Button } from 'antd-mobile'

class Home extends React.Component {
  render() {
    return (
      <div>
        home组件
        <Button type="primary" disabled>
          我是一个按钮
        </Button>
      </div>
    )
  }
}

export default Home
