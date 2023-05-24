// SPDX-License-Identifier: GPL-3.0
pragma solidity >0.7.0 <=0.9.0;

contract allemp {
    address[] public deployedSals;

    event salCreated(
        string firstName,
        string lastName,
        address indexed owner,
        address salAddress,
        string image,
        uint indexed timestamp,
        string indexed position
    );

    function addemp(
        string memory _firstName,
        string memory _lastName,
        string memory _walletAddress,
        string memory _country,
        string memory _image,
        string memory _position
    ) public {
        Sal newSal = new Sal(
            _firstName,
            _lastName,
            _walletAddress,
            _position,
            _country,
            _image
        );
        deployedSals.push(address(newSal));

        emit salCreated(
            _firstName,
            _lastName,
            msg.sender,
            address(newSal),
            _image,
            block.timestamp,
            _position
        );
    }
}

contract Sal {
    struct Person {
        string firstName;
        string lastName;
        string walletAddress;
        string position;
        string country;
        string image;
    }
    Person public person;

    uint public receivedAmount;
    address payable public owner;

    event donated(
        address indexed donar,
        uint indexed amount,
        uint indexed timestamp
    );

    constructor(
        string memory _firstName,
        string memory _lastName,
        string memory _walletAddress,
        string memory _position,
        string memory _country,
        string memory _image
    ) {
        person = Person(
            _firstName,
            _lastName,
            _walletAddress,
            _position,
            _country,
            _image
        );
        owner = payable(msg.sender);
    }

    function donate() public payable {
        owner.transfer(msg.value);
        receivedAmount += msg.value;

        emit donated(msg.sender, msg.value, block.timestamp);
    }
}
