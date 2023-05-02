const {ethers} = require("hardhat");


async function main(){
  const allemp = await ethers.getContractFactory("allemp")
  const [deployer] = await ethers.getSigners();

  const empadd = await allemp.connect(deployer).deploy();

  await empadd.deployed();
  console.log("Factory deployed to:",empadd.address);
}

//  contract address( Currently in use ) : 0x5F61cAacCEe71d36D7a3d9c1dE73Db9237e04505 
// 0x5179677c8e3B40791CFf2CB2dB4b154CE2a6C92B
// 0x7c73D7e12b5eA8809B1261cF7b8513F6E6E5d528
main()
.then(()=>
  process.exit(0))
  .catch((error)=>{
    console.log(error);
    process.exit(1);
  });
