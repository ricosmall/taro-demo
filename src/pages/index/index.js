import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {
  config = {
    navigationBarTitleText: '首页'
  }
  constructor () {
    super(...arguments)
    this.state = {
      now: null
    }
  }

  tick () {
    this.setState({
      now: this.getRealTime()
    })
  }

  getRealTime () {
    const now = new Date()
    let year = now.getFullYear()
    let month = now.getMonth() + 1
    let day = now.getDate()
    let hour = now.getHours()
    let minute = now.getMinutes()
    let second = now.getSeconds()
    let trans = val => val < 10 ? `0${val}` : val
    return [[year, trans(month), trans(day)].join('-'), [trans(hour), trans(minute), trans(second)].join(':')].join(' ')
  }

  componentWillMount () {

  }

  componentDidMount () { }

  componentWillUnmount () {
    clearInterval(this.interval)
  }

  componentDidShow () {
    this.interval = setInterval(() => {
      this.tick()
    }, 1000)
  }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text className="now">{ this.state.now }</Text>
      </View>
    )
  }
}

