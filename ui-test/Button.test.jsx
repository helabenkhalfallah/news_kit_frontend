import React from 'react'
import Button from '../ui-api/components/button/Button'

/* eslint-disable */
describe('Components', () => {
  describe('Button', () => {
    it('should render without throwing an error', () => {
      const wrap = mount(<Button>Hello Next.js</Button>)
      expect(wrap.find('button').text()).toBe('Hello Next.js')
    })
  })
})
