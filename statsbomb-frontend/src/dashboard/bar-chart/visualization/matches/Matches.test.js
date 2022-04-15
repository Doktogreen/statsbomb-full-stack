
import React from 'react'
import { shallow } from 'enzyme'
import Matches from '.'

describe('<Matches />', () => {
  let component

  beforeEach(() => {
    component = shallow(<Matches />)
  })

  test('It should mount', () => {
    expect(component.length).toBe(1)
  })
})
