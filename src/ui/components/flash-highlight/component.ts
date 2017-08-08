import Component, { tracked } from '@glimmer/component';

export default class FlashHighlight extends Component {
  @tracked animating = false;

  @tracked('animating')
  get class() {
    let classes = 'flash-highlight flash-highlight-example-box';
    if (this.animating) {
      classes += ' highlight';
    }
    return classes;
  }

  highlight() {
    this.animating = false;
    setTimeout(() => this.animating = true, 10)
  }
}
