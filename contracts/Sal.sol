// SPDX-License-Identifier: GPL-3.0
pragma solidity >0.7.0 <=0.9.0;

contract AllEmp {
    struct Employee {
        string firstName;
        string lastName;
        string walletAddress;
        string country;
        string image;
        string position;
    }

    mapping(address => Employee) public employees;
    address[] public deployedSal;

    event SalCreated(
        string firstName,
        string lastName,
        address indexed owner,
        address salAddress,
        string image,
        uint256 timestamp,
        string position
    );

    function addEmp(
        string memory _firstName,
        string memory _lastName,
        string memory _walletAddress,
        string memory _country,
        string memory _image,
        string memory _position
    ) public {
        Employee memory newEmployee = Employee({
            firstName: _firstName,
            lastName: _lastName,
            walletAddress: _walletAddress,
            country: _country,
            image: _image,
            position: _position
        });

        employees[msg.sender] = newEmployee;

        Sal newSal = new Sal(
            _firstName,
            _lastName,
            _walletAddress,
            _position,
            _country,
            _image,
            msg.sender
        );
        deployedSal.push(address(newSal));

        emit SalCreated(
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
    string public firstName;
    string public lastName;
    string public walletAddress;
    string public position;
    string public country;
    string public image;

    uint256 public receivedAmount;
    address payable public owner;

    event Donated(address indexed donor, uint256 amount, uint256 timestamp);

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the contract owner can call this function");
        _;
    }

    constructor(
        string memory _firstName,
        string memory _lastName,
        string memory _walletAddress,
        string memory _position,
        string memory _country,
        string memory _image,
        address payable _owner
    ) {
        firstName = _firstName;
        lastName = _lastName;
        walletAddress = _walletAddress;
        position = _position;
        country = _country;
        image = _image;
        owner = _owner;
    }

    function donate() public payable {
        require(msg.value > 0, "Donation amount must be greater than zero");

        owner.transfer(msg.value);
        receivedAmount += msg.value;

        emit Donated(msg.sender, msg.value, block.timestamp);
    }

    function updateDetails(
        string memory _firstName,
        string memory _lastName,
        string memory _walletAddress,
        string memory _position,
        string memory _country,
        string memory _image
    ) public onlyOwner {
        firstName = _firstName;
        lastName = _lastName;
        walletAddress = _walletAddress;
        position = _position;
        country = _country;
        image = _image;
    }
}
