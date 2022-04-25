// const V7sionToken = artifacts.require("V7sionToken");
// var V7sionTokenSale = artifacts.require("V7sionTokenSale");
var TuitionToken = artifacts.require("TuitionToken");

module.exports = function (deployer) {
  deployer.deploy(TuitionToken);
  // deployer.deploy(V7sionToken, 1000000).then(function() {
  //   // Token price is 0.001 Ether
  //   var tokenPrice = 1000000000000000;
  //   return deployer.deploy(V7sionTokenSale, V7sionToken.address, tokenPrice);
  // });
};
