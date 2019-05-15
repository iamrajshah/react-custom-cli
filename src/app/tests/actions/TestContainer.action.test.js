import { defaultAction } from '../../actions/TestContainer.action';
import { DEFAULT_ACTION } from '../../constants/TestContainer.constant';

describe('TestContainer actions', () => {
  describe('Default Action', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const expected = {
        type: DEFAULT_ACTION,
      };
      expect(defaultAction()).toEqual(expected);
    });
  });
});
