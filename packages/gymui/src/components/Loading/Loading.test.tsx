import { render } from '@testing-library/react'
import { Loading } from './Loading'

describe('Loading', () => {
  it('Loading.Text should render successfully', () => {
    const { baseElement } = render(<Loading.Text>Text</Loading.Text>)

    expect(baseElement).toBeTruthy()
  })
})
