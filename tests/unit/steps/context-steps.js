import yadda from '../../helpers/yadda';

export default function(assert) {
  return yadda.localisation.English.library()
    .when('I have no annotations', function() {
    })
    .then('the test context should have "$name"', function(property) {
      assert.ok(this[property], this.step);
    });
}