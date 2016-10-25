var chai = require('chai');
var should = chai.should();
var expect = chai.expect;
var en = require(__dirname+'/../bin/lang/en');
//languages
var pt = require(__dirname+'/../bin/lang/pt');

var existAll_pt = true;

describe('#valid all messages', function() {

  for(i in en){
    if(!pt[i]){
      existAll_pt=false;
      console.log(">> ", i," not transater!");
    }
  }

  it('should [pt] messages translator', function() {
    expect(existAll_pt).to.be.true;
  });
});
