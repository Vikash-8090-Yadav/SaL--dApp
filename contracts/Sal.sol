// SPDX-License-Identifier: GPL-3.0
pragma solidity >0.7.0 <=0.9.0;
error Transaction_Unsuccesfull();
contract allemp {
    address[] public deployedSal;
    mapping(address => Sal) s_Employees;

    event salcreated(
        string FirstName,
        string LastName,
        address indexed owner,
        address salAddress,
        string image,
        uint indexed timestamp,
        string indexed Position
    );

    function addemp(
        string memory _FirstName,
        string memory _LastName,
        string memory _wallet_ddress,
        string memory _Country,
        string memory _image,
        string memory _Position
    ) public {
        Sal newSal = new Sal(
            _FirstName,
            _LastName,
            _wallet_ddress,
            _Position,
            _Country,
            _image
        );
        deployedSal.push(address(newSal));
        s_Employees[address(newSal)] = newSal;

        emit salcreated(
            _FirstName,
            _LastName,
            msg.sender,
            address(newSal),
            _image,
            block.timestamp,
            _Position
        );
    }

    function getEmployee(address _employeeAddress) public returns (Sal) {
        Sal memory employee = s_Employees[_employeeAddress];
        return employee;
    }
}

contract Sal {
    string public FirstName;
    string public LastName;
    string public wallet_address;
    string public Position;
    string public Country;
    string public image;

    uint public recievedamnt;
    address payable public owner;

    event donated(
        address indexed donar,
        uint indexed amount,
        uint indexed timestamp
    );

    constructor(
        string memory _FirstName,
        string memory _LastName,
        string memory _wallet_ddress,
        string memory _Position,
        string memory _Country,
        string memory _image
    ) {
        FirstName = _FirstName;
        LastName = _LastName;
        wallet_address = _wallet_ddress;
        Position = _Position;
        Country = _Country;
        image = _image;
        owner = payable(msg.sender);
    }

    function donate() public payable {
        uint256 amount = msg.value;
        (bool success, ) = payable(campaign.owner).call{value: amount}("")

        if(!success){
            revert Transaction_Unsuccesfull();
        }
        recievedamnt += amount;

        emit donated(msg.sender, msg.value, block.timestamp);
    }
}
