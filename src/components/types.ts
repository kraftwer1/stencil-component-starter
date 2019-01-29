export interface SelectState {
  one: string;
  two: string;
}

export interface SetOneAction {
  type: "SET_ONE",
  one: string
}

export interface SetTwoAction {
  type: "SET_TWO",
  two: string
}

export type Actions = SetOneAction | SetTwoAction
