import { Component, State, Element } from "@stencil/core";
import { createStore, Store, Reducer } from "redux";
import { SelectState, Actions } from "../types";

const reducer: Reducer<SelectState, Actions> = (state, action): SelectState => {
  switch (action.type) {
    case "SET_ONE":
      return { ...state, one: action.one }
  }

  return state;
}

@Component({
  tag: "my-component",
  shadow: true
})
export class MyComponent {

  private store: Store<SelectState, Actions>;

  private initialState: SelectState = {
    one: "ooone",
    two: "two"
  }

  @State() one

  @Element() el: HTMLMyComponentChildElement;

  componentWillLoad() {
    this.store = (this.el as any).__store = createStore(reducer, this.initialState); // FIXME any

    this.one = this.store.getState().one // FIXME property bindings?

    this.store.subscribe(() => {
      this.one = this.store.getState().one // FIXME property bindings?
    })
  }

  render() {
    return (
      <div>
        <div>I'm the parent! {this.one}</div>

        <my-component-case>
          <slot />
        </my-component-case>
      </div>
    );
  }

}
