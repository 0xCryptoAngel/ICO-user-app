import Web3 from 'web3/dist/web3.min.js'
import abi from './erc20_abi.json'
import Cookies from "js-cookie";


class Web3Wallet {
  constructor() {
    this.Contract_address = '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48'; // USDC
  }

  async linkWallet() {
    this.web3Provider = window.ethereum;
    try {
      // Request user authorization
      this.accounts = await window.ethereum.request({method: 'eth_requestAccounts'});
    } catch (error) {
      // When the user is not authorized
      console.error("User rejected the request.")
      return false;
    }
    this.web3 = new Web3(this.web3Provider);
    this.network = await this.web3.eth.net.getId()
  }

    async getAddress() {
      if (this.web3) {
        this.accounts = await this.web3.eth.getAccounts()
      }
      if (this.accounts.length > 0) {
        Cookies.set('address', this.accounts[0])
      }

      return this.accounts[0]
    }

    async getBalance(address) {
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

    async getAllowance(walletAddress, contractAddress) {
      const contract = new this.web3.eth.Contract(abi, this.Contract_address)
      return await contract.methods.allowance(walletAddress, contractAddress).call();
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
      return tx.transactionHash
    }
}

export {Web3Wallet as default};
