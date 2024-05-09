import Web3 from 'web3'
import { useContext } from 'react'

const Price = function ({ base }) {
  const web3 = new Web3(Web3.givenProvider)

  if (base) {
    return parseFloat(web3.utils.fromWei(base, "ether")).toFixed(0) + " $KHA"
  } else {
    return "0 $KHA"
  }
}

export default Price