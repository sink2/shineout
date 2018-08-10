/**
 * cn - 加载中
 *    -- 设定 loading 属性，可以让按钮变成加载中状态
 * en - Loading
 *    -- Setting loading property can make the button become loading.
 */
import React from 'react'
import { Button } from 'shineout'

export default function () {
  return (
    <div>
      <Button loading size="small" type="primary">Small</Button>
      <Button loading type="primary">Default</Button>
      <Button loading size="large" type="primary">Large</Button>
    </div>
  )
}
