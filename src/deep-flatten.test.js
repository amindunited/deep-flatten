/**
 * @license
 * Copyright Robin Buckley. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */
'use strict';

const deepFlatten = require('./index');
const expect = require('chai').expect;

describe('Deep Flatten', () => {

  it('should export a function', () => {
    expect(deepFlatten).to.be.a('function');
  });

  it('should return the input if invalid', () => {
    const mockArray = 'a, b, c';
    const results = deepFlatten(mockArray);
    expect(results).to.deep.equal(mockArray);
  });

  it('should return a flat array as it was', () => {
    const mockArray = ['a', 'b', 'c'];
    const results = deepFlatten(mockArray);
    expect(results).to.deep.equal(mockArray);
  });

  it('should hold array order', () => {
    const mockArray = ['a', 'b', [1, 2, 3], 'c'];
    const results = deepFlatten(mockArray);
    const expected = ['a', 'b', 1, 2, 3, 'c'];
    expect(results).to.deep.equal(expected);
  });

  it('should handle depply nested', () => {
    const mockArray = ['a', 'b', [1, 2, 3, [9, 8, 7]], 'c', ['x', 'y', 'z']];
    const results = deepFlatten(mockArray);
    const expected = ['a', 'b', 1, 2, 3, 9, 8, 7, 'c', 'x', 'y', 'z'];
    expect(results).to.deep.equal(expected);
  });

});
