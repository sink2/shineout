/**
 * 此文件根据 scripts/components-page.ejs 生成，不要手动修改
 */
import React from 'react'
import navable from 'docs/Navable'
import MarkDown from 'docs/MarkDown'

import locate from 'doc/locate'

import cn from 'doc/pages/components/Upload/cn.md'
import en from 'doc/pages/components/Upload/en.md'

const source = locate(cn, en)

const examples = [
  {
    name: '1-base',
    title: locate('基本用法 \n 基础的文件上传', 'Base \n Basic usage for uploading file'),
    component: require('doc/pages/components/Upload/example-1-base.js').default,
    rawText: require('!raw-loader!doc/pages/components/Upload/example-1-base.js'),
  },
  {
    name: '2-image',
    title: locate('上传图片 \n 使用 Upload.Image 处理带预览的图片上传', 'Image \n Use Upload.Image to handle to upload images with preview.'),
    component: require('doc/pages/components/Upload/example-2-image.js').default,
    rawText: require('!raw-loader!doc/pages/components/Upload/example-2-image.js'),
  },
  {
    name: '3-validator',
    title: locate('图片尺寸 \n 通过 validator.imageSize 校验图片尺寸，本例为 200px * 100px', 'Size \n Use validator.imageSize to check the size of the image. This example is 200px * 100px.'),
    component: require('doc/pages/components/Upload/example-3-validator.js').default,
    rawText: require('!raw-loader!doc/pages/components/Upload/example-3-validator.js'),
  },
  {
    name: '4-filesize',
    title: locate('文件大小 \n 文件大小校验，本例为 10KB', ' \n Check the size of the file. This example is 10KB.'),
    component: require('doc/pages/components/Upload/example-4-filesize.js').default,
    rawText: require('!raw-loader!doc/pages/components/Upload/example-4-filesize.js'),
  },
  {
    name: '5-error',
    title: locate('异常处理 \n onUploadError 用来处理上传到服务器返回的异常', 'Error \n The onUploadError is used to handle exceptions returned by uploading to the server.'),
    component: require('doc/pages/components/Upload/example-5-error.js').default,
    rawText: require('!raw-loader!doc/pages/components/Upload/example-5-error.js'),
  },
]

const codes = undefined

export default navable(props => (
  <MarkDown {...props} codes={codes} source={source} examples={examples} />
))
