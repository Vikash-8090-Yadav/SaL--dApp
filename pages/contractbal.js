import {ethers} from "ethers"
import Wallet from "../Component/wallet"
const RPC = "https://polygon-mumbai.infura.io/v3/95688893704a4d5bac083296c3547383"

export default  function ContractBal() {
   return (
      <>
      <Wallet/>
      <h1>
      This is the Contract Balance page
      </h1>
      </>
    )
  }
  