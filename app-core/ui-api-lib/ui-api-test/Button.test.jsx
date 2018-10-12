import React from "react";
import Components from "../ui-api";

const { Button } = Components;
/* eslint-disable */
describe('Components', () => {
  describe('Button', () => {
    it('should render without throwing an error', () => {
      const wrap = mount(<Button>Hello Next.js</Button>)
      expect(wrap.find('button').text()).toBe('Hello Next.js')
    })
  })
})
