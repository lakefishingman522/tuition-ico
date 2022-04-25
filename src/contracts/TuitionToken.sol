pragma solidity >=0.4.22 <0.9.0;

import './libs/BEP20.sol';
import './libs/Context.sol';
import './libs/Ownable.sol';

contract TuitionToken is BEP20("TUITION", "TUT"){
    uint rate = 1000;       // correspond to token price   0.001 bnb

    uint256 public tokensSold;

    event Sell(address _buyer, uint256 _amount);

    function multiply(uint x, uint y) internal pure returns (uint z) {
        require(y != 0 && (z = x * y) / y == x);
    }

    function buyTokens(uint256 _numberOfTokens) public payable {
        require(rate * msg.value >= _numberOfTokens);
        require(this.balanceOf(this.getOwner()) >= _numberOfTokens);
        // send required tokens to msg.sender as users
        _transfer(this.getOwner(), msg.sender, _numberOfTokens);

        tokensSold += _numberOfTokens * (10 ** decimals());
        // send correct amount of bnb to owner
        // payable(msg.sender).transfer(_numberOfTokens * tokenPrice);
        payable(this.getOwner()).transfer(_numberOfTokens / rate);

        emit Sell(msg.sender, _numberOfTokens);
    }

    function endSale() public onlyOwner {
        require(msg.sender == this.getOwner());
        require(this.transfer(this.getOwner(), this.balanceOf(address(this))));

        // UPDATE: Let's not destroy the contract here
        // Just transfer the balance to the admin
        payable(this.getOwner()).transfer(address(this).balance);
    }
}
