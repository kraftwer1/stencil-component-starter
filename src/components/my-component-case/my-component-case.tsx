import { Component } from "@stencil/core";

@Component({
  tag: "my-component-case",
  shadow: true
})
export class MyComponentCase {

  render() {
    return (
      <div>I'm the case! <slot /></div>
    );
  }

}
