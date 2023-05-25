// SPDX-License-Identifier: GPL-3.0
pragma solidity >0.8.0 <=0.9.0;



contract allemp{

    address [] public deployedSal;

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
        string memory _wallet_ddress,
        string memory _Country,
        string memory _image,
        string memory _Position)
        public {
        Sal newSal= new Sal(
            _FirstName,_LastName,_wallet_ddress,_Position,_Country,_image
        );
        deployedSal.push(address(newSal));

        emit salcreated(_FirstName,_LastName,msg.sender,address(newSal),_image, block.timestamp,_Position);
    }
}


contract Sal{
    string public FirstName;
    string public LastName;
    string public wallet_address;
    string public Position;
    string public Country;
    string public image;

    uint public recievedamnt;
    address payable public owner;


    event donated(address indexed donar , uint indexed amount , uint indexed timestamp);

    constructor(
        string memory _FirstName,
        string memory _LastName,
        string memory _wallet_ddress,
        string memory _Position,
        string memory _Country,
        string memory _image
    )
    {
        FirstName = _FirstName;
        LastName = _LastName;
        wallet_address = _wallet_ddress;
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
