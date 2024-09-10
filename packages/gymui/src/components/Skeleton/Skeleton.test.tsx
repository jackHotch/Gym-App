import { render } from '@testing-library/react'
import { Skeleton } from './Skeleton'

describe('Skeleton', () => {
  it('Skeleton.Block should render successfully', () => {
    const { baseElement, getAllByTestId } = render(<Skeleton.Block count={5} />)

    expect(baseElement).toBeTruthy()
    expect(getAllByTestId('block')).toHaveLength(5)
  })
})
