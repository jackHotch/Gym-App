export type useToggleType = [boolean, () => void, () => void, () => void]

export type useArrayToggleType = [
  boolean[], 
  (i: number) => void,
  (i: number) => void,
  (i: number) => void
]