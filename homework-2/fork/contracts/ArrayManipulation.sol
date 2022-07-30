// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.4;

contract ArrayManipulation {
    uint256[] internal _array;

    constructor(uint256[] memory array_) {
        _array = array_;
    }

    function setArray(uint256[] memory array_) public {
        _array = array_;
    }

    function removeArrayItemAtIndexUsingSwap(uint256 index_) public {
        uint256 arrayLength_ = getArrayLength();

        require(index_ < arrayLength_, "INVALID_INDEX");

        uint256 lastIndex_ = arrayLength_ - 1;
        uint256 lastIndexValue_ = _array[lastIndex_];

        // if index_ is the lastIndex_ then swap is unnecessary
        if (index_ != lastIndex_) {
            // swap the lastIndexValue_ at index_
            _array[index_] = lastIndexValue_;
        }

        // delete last position
        _array.pop();
    }

    function removeArrayItemAtIndexInOrder(uint256 index_) public {
        uint256 arrayLength_ = getArrayLength();

        require(index_ < arrayLength_, "INVALID_INDEX");

        uint256 lastIndex_ = arrayLength_ - 1;

        if (index_ != lastIndex_) {
            for (uint256 i = index_; i < lastIndex_; ) {
                _array[i] = _array[i + 1];

                unchecked {
                    ++i;
                }
            }
        }

        // delete last position
        _array.pop();
    }

    function getArray() public view returns (uint256[] memory) {
        return _array;
    }

    function getArrayLength() public view returns (uint256) {
        return _array.length;
    }
}
