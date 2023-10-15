// SPDX-License-Identifier: GPL-3.0
pragma solidity >0.7.0 <=0.9.0;



contract allemp{

    address [] public deployedSal;
    mapping(address => bool) public isEmployeeRegistered; // New mapping to check duplicate employees

    event salcreated(
        string FirstName,
        string LastName,
        address indexed owner,
        address salAddress,
        string image,
        uint indexed timestamp,
        string indexed Position
    );

    function addemp (
        string memory _FirstName,
        string memory _LastName,
        address _wallet_address,
        string memory _Country,
        string memory _image,
        string memory _Position)
        public {

      require(!isEmployeeRegistered[_wallet_address], "Employee already registered"); // Check if employee is already registered

        Sal newSal= new Sal(_FirstName,_LastName,_wallet_address,_Position,_Country,_image);
        deployedSal.push(address(newSal));
        
         isEmployeeRegistered[_wallet_address] = true; // Mark employee as registered

        emit salcreated(_FirstName,_LastName,msg.sender,address(newSal),_image, block.timestamp,_Position);      

      
    }
}


contract Sal{
    string public FirstName;
    string public LastName;
    address public wallet_address;
    string public Position;
    string public Country;
    string public image;

    uint public recievedamnt;
    address payable public owner;


    event donated(address indexed donar , uint indexed amount , uint indexed timestamp);

    constructor(
        string memory _FirstName,
        string memory _LastName,
         address _wallet_address,
        string memory _Position,
        string memory _Country,
        string memory _image
    )
    {
        FirstName = _FirstName;
        LastName = _LastName;
        wallet_address = _wallet_address;
        Position =_Position;
        Country =_Country;
        image = _image;
        owner = payable(msg.sender);


    }

    function donate () public payable {
        owner.transfer(msg.value);
        recievedamnt+=msg.value;

        emit donated(msg.sender , msg.value ,block.timestamp);
    }

}
