const CodexCoin = artifacts.require('./CodexCoin.sol')
const CodexStakeContainer = artifacts.require('./CodexStakeContainer.sol')

module.exports = (deployer, network) => {

    deployer.deploy(
      CodexStakeContainer,
      CodexCoin.address,
      7776000,
      web3.toWei(0.1, 'ether')
    )

}
