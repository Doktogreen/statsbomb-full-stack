
import React from 'react'
import { shallow } from 'enzyme'
import Teams from '.'

describe('<Teams />', () => {
  let component

  beforeEach(() => {
    component = shallow(<Teams />)
  })

  test('It should mount', () => {
    expect(component.length).toBe(1)
  })
})
