/**
 * cn - 联动
 *    -- 出于性能的考虑，通常情况下，不通过 value 和 onChange 方式处理数据。
 *    -- 这种情况下，需要联动时，可以使用 Flow 组件来实现。如果设置了 names 属性，只监听 names 包含的字段变化，如果没有设置，会监听 Form 内所有数据的变化。
 * en - Flow
 *    -- For performance reasons, internal data of the Form is isolated and changing one component does not trigger another component to change.
 *    -- If one component depends on another component's value, place it in the Flow component.
 */
import React, { Component } from 'react'
import { Form, Input, Checkbox, DatePicker } from 'shineout'

export default class extends Component {
  constructor(props) {
    super(props)

    this.rules = {
      age: [
        { required: true, message: 'Please enter age.' },
        { min: 18, max: 60, message: 'Age must between {min} and {max}.' },
      ],
      colors: [
        { required: true, message: 'Please select your favorite colors.' },
        { min: 2, message: 'At least select 2 colors.' },
      ],
    }

    this.colors = ['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'violet']
  }

  render() {
    return (
      <Form
        rules={this.rules}
        onChange={this.handleChange}
        onSubmit={d => console.log(d)}
      >
        <Form.Item label="First Name">
          <Input name="firstName" delay={0} defaultValue="Harry" />
        </Form.Item>

        <Form.Item label="Last Name">
          <Input name="lastName" delay={0} defaultValue="Potter" />
        </Form.Item>

        <Form.Item label="Full Name">
          <Form.Flow names={['firstName', 'lastName']}>
            { datum => <div>{datum.get('firstName')} - {datum.get('lastName')}</div>}
          </Form.Flow>
        </Form.Item>

        <Form.Item label="Password">
          <Input name="password" type="password" />
        </Form.Item>

        <Form.Item label="">
          <Checkbox defaultValue name="showAge">Show age</Checkbox>
          <Checkbox name="showColors">Show colors</Checkbox>
          <Checkbox
            name="dateRange"
            beforeChange={
              // demo: clear date when dateRange value change.
              (v, datum) => datum.set({ startDate: undefined, endDate: undefined })
            }
          >
            Date range
          </Checkbox>
        </Form.Item>

        <Form.Flow names={['showAge']}>
          {
            datum => (
              datum.get('showAge') &&
              <Form.Item required label="Age" tip="between 18 and 60">
                <Input name="age" digits={0} defaultValue={18} style={{ width: 100 }} type="number" />
              </Form.Item>
            )
          }
        </Form.Flow>

        <Form.Flow>
          {
            datum => (
              datum.get('showColors') &&
              <Form.Item required label="Favorite Colors">
                <Checkbox.Group keygen={c => c} name="colors" data={this.colors} />
              </Form.Item>
            )
          }
        </Form.Flow>

        <Form.Item label="Date" tip="">
          <Form.Flow names={['dateRange']}>
            {
              datum => (
                datum.get('dateRange') === true
                ? <DatePicker key="r" range name={['startDate', 'endDate']} type="date" />
                : <DatePicker key="s" name="startDate" type="date" />
              )
            }
          </Form.Flow>
        </Form.Item>

        <Form.Item label="">
          <Form.Button>Sumbit</Form.Button>
        </Form.Item>
      </Form>
    )
  }
}
