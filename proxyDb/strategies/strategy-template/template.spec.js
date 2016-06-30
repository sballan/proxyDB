describe('Strategy Template', () => {
  console.log("template", Template)

  it('has the correct properties', () => {
    expect(typeof Template).toEqual('object');
    expect(typeof Template.model).toEqual('object');
    expect(typeof Template.instance).toEqual('object');
  });

});