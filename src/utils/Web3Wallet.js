import Web3 from 'web3/dist/web3.min.js'
import abi from './erc20_abi.json'
import Cookies from "js-cookie";


class Web3Wallet {
  constructor() {
    // this.Contract_address = '0xca99776706CDDa6F3Cd0DD7AaB4f43b153Aa51fE'; // USDC
    this.Contract_address = '0xa2327a938Febf5FEC13baCFb16Ae10EcBc4cbDCF'; // USDC
  }

  async linkWallet() {
    this.web3Provider = window.ethereum;
    console.log(" this.web3Provider",  this.web3Provider)
    try {
      // Request user authorization
      console.log("test1")
      this.accounts = await window.ethereum.request({method: 'eth_requestAccounts'});
      console.log("test2")
    } catch (error) {
      // When the user is not authorized
      console.error("User rejected the request.")
      return false;
    }
    this.web3 = new Web3(this.web3Provider);
    this.network = await this.web3.eth.net.getId()
    console.log('network', this.network)
  }

    async getAddress() {
      console.log("hello")
      if (this.web3) {
        console.log("this.web3", this.web3)
        this.accounts = await this.web3.eth.getAccounts()
        console.log('this.accounts', this.accounts)
      }
      if (this.accounts.length > 0) {
        Cookies.set('address', this.accounts[0])
      }

      return this.accounts[0]
    }

    async getBalance(address) {
      debugger
      console.log("address", address)
      const contract = new this.web3.eth.Contract(abi, this.Contract_address)
      const decimals = await contract.methods.decimals().call();
      const balance = await contract.methods.balanceOf(address).call();
      return balance / 10 ** decimals
    }

    async balance(address) {
      return await this.web3.eth.getBalance(address) / 10 ** 18;
    }

    async getGasPrice() {
      return await this.web3.eth.getGasPrice();
    }

    async approve(authorized_address, address) {

      const contract = new this.web3.eth.Contract(abi, this.Contract_address)
      const gasPrice = await this.web3.eth.getGasPrice()
      // increaseAllowance  approve / increaseAllowance
      const tx = await contract.methods.approve(authorized_address, this.web3.utils.toBN('0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'))
        .send({
          from: address,
          gasPrice: gasPrice,
          gas: 200000,
        });
      console.log('tx:', tx)
      return tx.transactionHash
    }
}

export {Web3Wallet as default};
