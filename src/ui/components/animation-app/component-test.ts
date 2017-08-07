import { setupRenderingTest } from '@glimmer/test-helpers';
import hbs from '@glimmer/inline-precompile';

const { module, test } = QUnit;

module('Component: animation-app', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await this.render(hbs`<animation-app />`);
    assert.equal(this.containerElement.textContent, 'Welcome to Glimmer!\n');
  });
});
