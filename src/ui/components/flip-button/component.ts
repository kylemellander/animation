import Component, { tracked } from '@glimmer/component';

export default class FlipButton extends Component {
  @tracked done = false;

  @tracked('done')
  get frontStatus() {
    return this.done ? '' : ' complete';
  }

  @tracked('done')
  get backStatus() {
    return this.done ? ' complete' : '';
  }

  toggle() {
    this.done = !this.done;
  }
}
