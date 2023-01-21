const hre = require("hardhat");

async function main(){
  const allemp = await hre.ethers.getContractFactory("allemp")

  const empadd = await allemp.deploy();

  await empadd.deployed();
  console.log("Factory deployed to:",empadd.address);
}

//  contract address : 0x5F61cAacCEe71d36D7a3d9c1dE73Db9237e04505
main()
.then(()=>
  process.exit(0))
  .catch((error)=>{
    console.log(error);
    process.exit(1);
  });
