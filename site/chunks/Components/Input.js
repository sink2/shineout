/**
 * 此文件根据 scripts/components-page.ejs 生成，不要手动修改
 */
import React from 'react'
import navable from 'docs/Navable'
import MarkDown from 'docs/MarkDown'

import locate from 'doc/locate'

import cn from 'doc/pages/components/Input/cn.md'
import en from 'doc/pages/components/Input/en.md'

const source = locate(cn, en)

const examples = [
  {
    name: '1-base',
    title: locate('基本用法 \n Input 通常需要和其他的组件配合使用，所以默认的宽度是 100%，默认 display 为 block \n 如果设置了 style.width，默认 display 为 inline-flex', 'Base \n Input usually needs to be used with other components, so the default width is 100% and the default display is block. \n If the style.width is set, the default display is inline-flex.'),
    component: require('doc/pages/components/Input/example-1-base.js').default,
    rawText: require('!raw-loader!doc/pages/components/Input/example-1-base.js'),
  },
  {
    name: '2-size',
    title: locate('大小 \n 提供了三种尺寸的输入框，small、default、large', 'Size \n There are three size of input, small、default、large.'),
    component: require('doc/pages/components/Input/example-2-size.js').default,
    rawText: require('!raw-loader!doc/pages/components/Input/example-2-size.js'),
  },
  {
    name: '3-number',
    title: locate('数字 \n type=number 时，输入时会做一次校验，禁止输入非数字类型字符，并且根据 digits 属性限制小数位数', 'number type \n When type=number, a check is made when inputting, it is forbidden to input non-numeric characters, and the number of decimal places is limited according to the digits property'),
    component: require('doc/pages/components/Input/example-3-number.js').default,
    rawText: require('!raw-loader!doc/pages/components/Input/example-3-number.js'),
  },
  {
    name: '4-number',
    title: locate(' \n Input.Number 组件，可以通过鼠标和上下箭头辅助输入', 'number type \n Input.Number component can be assisted by mouse and up and down arrows.'),
    component: require('doc/pages/components/Input/example-4-number.js').default,
    rawText: require('!raw-loader!doc/pages/components/Input/example-4-number.js'),
  },
  {
    name: '5-group',
    title: locate('组合 \n Icon, span, string, Button 类型可以直接放入 Input.Group 中。需要背景色可以放在 b 标签中。', 'Group \n The Icon, span, string and Button types can be placed directly into the Input.Group. The background color is required can be placed in the b tag.'),
    component: require('doc/pages/components/Input/example-5-group.js').default,
    rawText: require('!raw-loader!doc/pages/components/Input/example-5-group.js'),
  },
  {
    name: '6-tip',
    title: locate('提示文字 \n 在 input 上设置的 tip 在 focus 时弹出', 'tip \n The tip set on input pops up when it is focused.'),
    component: require('doc/pages/components/Input/example-6-tip.js').default,
    rawText: require('!raw-loader!doc/pages/components/Input/example-6-tip.js'),
  },
  {
    name: '7-validate',
    title: locate('校验 \n 设置了 rules，会自动校验输入数据，设置了 popover 会在指定位置弹出 \n 如果没有设置 popover，不会弹出错误提示。 \n 有错误时，提示框不会隐藏。', 'validate \n When the rules property is set, it will automatically verify the input data. When the popover property is set, it will pop up at the specified location. \n If the popover property is not set, no error message will pop up. \n When there is an error, the prompt box will not be hidden.'),
    component: require('doc/pages/components/Input/example-7-validate.js').default,
    rawText: require('!raw-loader!doc/pages/components/Input/example-7-validate.js'),
  },
  {
    name: '8-disabled',
    title: locate('禁用 \n 设置 disabled 属性禁用组件', 'Disabled \n Setting the disabled property disable the component.'),
    component: require('doc/pages/components/Input/example-8-disabled.js').default,
    rawText: require('!raw-loader!doc/pages/components/Input/example-8-disabled.js'),
  },
]

const codes = undefined

export default navable(props => (
  <MarkDown {...props} codes={codes} source={source} examples={examples} />
))
