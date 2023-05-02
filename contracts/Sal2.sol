// SPDX-License-Identifier: GPL-3.0

pragma solidity >0.7.0 <=0.9.0;

import "@openzeppelin/contracts/token/ERC1155/IERC1155.sol";
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

contract Sal is ERC1155 {

    uint256 constant ORGANIZATION = 0;
    uint256 constant EMPLOYEE = 1;
    uint256 constant MAX_ORGANIZATIONS_COUNT = 10;

    enum PaymentType {
        NATIVE,
        SAL,
        USDT
    }

    event EmployeeRegistered (
        uint256 indexed tokenId,
        uint256 indexed organizationId,
        uint256 timestamp,
        address indexed empAddress
    );
    
    event OrganizationRegistered (
        uint256 indexed tokenId,
        uint256 timestamp,
        address indexed owner
    );

    event Payment (
        uint256 indexed fromId,
        uint256 indexed toId,
        uint256 amount,
        PaymentType ptype
    );

    struct Employee {
        uint256 id;
        uint256 organizationId;
        address payable empAddress;
        string name;
    }

    struct Organization {
        uint256 id;
        address payable owner;
        string name;
        string ownerName;
        uint256 [] employees;
        bool isDeleted;
    }


    string public baseUri;
    uint256 private currentEmployeeId = 1;
    uint256 private currentOrganizationId = 1;
    mapping(uint256 => Organization) private organizations;
    mapping(uint256 => Employee) private employees;
    mapping(address => uint256[]) private yourOrganizations;
    mapping(address => uint256[]) private employeeAt;


    // IERC1155 userTokenContract;

    constructor (string memory _baseUri) ERC1155 (_baseUri) {
        baseUri = _baseUri;
    }


    function registerOrganization (
        string memory _name,
        string memory _ownerName
    ) external 
    {
        require(getUserOrganizations(msg.sender).length <= MAX_ORGANIZATIONS_COUNT, "SAL: You cannot create more than 10 organizations.");
        

        uint256 newId = currentOrganizationId++;
        
        organizations[newId].id = newId;
        organizations[newId].name = _name;
        organizations[newId].ownerName = _ownerName;
        organizations[newId].owner = payable(msg.sender);

        yourOrganizations[msg.sender].push(newId);

        _mint(msg.sender, ORGANIZATION, 1, "");

        emit OrganizationRegistered(newId, block.timestamp, msg.sender);
    }


    function deleteOrganization (uint256 _organizationId) external {
        require(organizations[_organizationId].employees.length == 0, "SAL: Organization still has employees in it.");
        require (organizations[_organizationId].owner == msg.sender, "SAL: Only owner can delete organization.");

        organizations[_organizationId].isDeleted = true;

        _burn(msg.sender, ORGANIZATION, 1);
    }


    function registerEmployee (address _empAddress, string memory _name, uint256 _organizationId) external {
        require (_organizationId >= 1 && _organizationId <= currentOrganizationId, "SAL: Organization with given id does not exist");
        require (organizations[_organizationId].owner == msg.sender, "SAL: Only owner can add employees.");
        require (!_checkEmployeeAt(_empAddress, _organizationId), "SAL: Employee is already added to organization.");

        uint256 newId = currentEmployeeId++;

        employees[newId].id = newId;
        employees[newId].organizationId = _organizationId;
        employees[newId].name = _name;
        employees[newId].empAddress = payable(_empAddress);

        organizations[_organizationId].employees.push(newId);

        employeeAt[_empAddress].push(_organizationId);

        _mint(_empAddress, EMPLOYEE, 1, "");

        emit EmployeeRegistered(newId, _organizationId, block.timestamp, _empAddress);
    }


    function deleteEmployee (uint256 _empId, uint256 _organizationId) external {
        require (organizations[_organizationId].owner == msg.sender, "SAL: Only owner can add employees.");

        uint256 len = organizations[_organizationId].employees.length;
        uint256 c = 0;
        uint256 [] memory newEmployees = new uint256[] (len - 1);
        
        bool found = false;
        for (uint256 i = 0; i < organizations[_organizationId].employees.length; i++) {
            if (organizations[_organizationId].employees[i] != _empId) {
                newEmployees[c++] = organizations[_organizationId].employees[i];
            }
            else {
                found = true;
            }
        }

        if (!found) {
                revert("SAL: Employee with given id was not found");
        }

        organizations[_organizationId].employees = newEmployees;

        _burn(employees[_empId].empAddress, EMPLOYEE, 1);
    }


    function _checkEmployeeAt(address _user, uint256 _organizationId) internal view returns (bool isEmployeeAt) {
        uint256 [] memory empAt = employeeAt[_user];

        for(uint256 i = 0; i < empAt.length; i++) {
            if (empAt[i] == _organizationId) {
                isEmployeeAt = true;
            }
        }

        return isEmployeeAt;
    }


    function getUserOrganizations (address _user) public view returns (uint256[] memory) {
        return yourOrganizations[_user];
    }

    function getUserEmployeeAt (address _user) public view returns (uint256[] memory) {
        return employeeAt[_user];
    }

    function getOrganizationById (uint256 _organizationId) public view returns (Organization memory) {
        require (_organizationId >= 1 && _organizationId <= currentOrganizationId, "SAL: Organization with given id does not exist");
        return organizations[_organizationId];
    }

    function getEmployeeById (uint256 _empId) public view returns (Employee memory) {
        require (_empId >= 1 && _empId <= currentEmployeeId, "SAL: Employee with given id does not exist");
        return employees[_empId];
    }
}


// contract Sal{
//     string public FirstName;
//     string public LastName;
//     string public wallet_address;
//     string public Position;
//     string public Country;
//     string public image;

//     uint public recievedamnt;
//     address payable public owner;


//     event donated(address indexed donar , uint indexed amount , uint indexed timestamp);

//     constructor(
//         string memory _FirstName,
//         string memory _LastName,
//         string memory _wallet_ddress,
//         string memory _Position,
//         string memory _Country,
//         string memory _image
//     )
//     {
//         FirstName = _FirstName;
//         LastName = _LastName;
//         wallet_address = _wallet_ddress;
//         Position =_Position;
//         Country =_Country;
//         image = _image;
//         owner = payable(msg.sender);


//     }

//     function donate () public payable {
//         owner.transfer(msg.value);
//         recievedamnt+=msg.value;

//         emit donated(msg.sender , msg.value ,block.timestamp);
//     }

// }
