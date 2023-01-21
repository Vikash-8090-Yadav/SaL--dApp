
require ('@nomiclabs/hardhat-waffle');

task("accounts","Prints the list of the accounts",async (taskArgs , hre )=>{
  const accounts = await hre.ethers.getSigners();

  for(const account of accounts){
    console.log(account.address);
  }
})

module.exports = {
  solidity: "0.8.10",

  defaultNetwork: "polygon",
  networks:{
    hardhat:{},
    polygon :{
      url : "https://polygon-mumbai.infura.io/v3/95688893704a4d5bac083296c3547383",
      accounts: ["0x37bc73c37be457345023a4530554b1483db764b5b49d80874d95a24c41713054"]
    }
  }
};
