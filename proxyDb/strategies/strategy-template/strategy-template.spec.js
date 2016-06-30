const Template = require('./')

describe('Strategy Template', () => {

  it('has the correct properties', () => {
    expect(typeof Template).toEqual('object');
    expect(typeof Template.model).toEqual('function');
    expect(typeof Template.instance).toEqual('function');
  });

});