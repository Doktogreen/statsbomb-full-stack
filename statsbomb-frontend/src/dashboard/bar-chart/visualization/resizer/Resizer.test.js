
import React from 'react'
import { shallow } from 'enzyme'
import useResizeObserver from '.'

describe('<useResizeObserver />', () => {
  let component

  beforeEach(() => {
    component = shallow(<useResizeObserver />)
  })

  test('It should mount', () => {
    expect(component.length).toBe(1)
  })
})
