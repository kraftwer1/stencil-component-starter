import { Component, Element, State } from "@stencil/core";
import { Store } from "redux";
import { SelectState, Actions } from "../types";

@Component({
  tag: "my-component-child",
  shadow: true
})
export class MyComponentChild {

  @Element() el: HTMLMyComponentChildElement

  @State() one

  private store: Store<SelectState, Actions>;

  private getStore(): Store<SelectState, Actions> {
    let el: HTMLElement = this.el

    while (el.parentElement) {
      el = el.parentElement

      if ((el as any).__store) { // FIXME any
        return (el as any).__store; // FIXME any
      }
    }

    return
  }

  componentWillLoad() {
    this.store = this.getStore()

    this.one = this.store.getState().one // FIXME property bindings?

    this.store.subscribe(() => {
      this.one = this.store.getState().one // FIXME property bindings?
    })

    setTimeout(() => {
      this.store.dispatch({ type: "SET_ONE", one: "O-N-E" }); // FIXME type safety
    }, Math.round(Math.random() * 2000));
  }

  render() {
    return (
      <div>I'm the child! {this.one}</div>
    );
  }

}
