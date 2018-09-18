const expect = chai.expect;

describe('#capitalize', function() {
  it('should be a function', function() {
    expect(capitalize).to.be.a('function');
  });

  it('should capitalize a string', function() {
    expect(capitalize('hello')).to.equal('Hello');
  });
});

describe('#fadeMeOut', function() {
  it('should be a function', function() {
    expect(fadeMeOut).to.be.a('function');
  });
  it('should fade out an element', function() {
    fadeMeOut(hello);
    setTimeout(doIt, 2000);
      function doIt () {
        expect(hello.style.opacity).to.equal(0);
      }
  });
});

describe('#fadeMeIn', function() {
  it('should be a function', function() {
    expect(fadeMeIn).to.be.a('function');
  });
  it('should fade in an element', function() {
    fadeMeIn(hello);
    setTimeout(doIt2, 2000);
      function doIt2 () {
        expect(hello.style.opacity).to.equal(1);
      }
  });
});
