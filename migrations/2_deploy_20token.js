const CodexCoin = artifacts.require('./CodexCoin.sol')

module.exports = (deployer, network, accounts) => {
  deployer.deploy(CodexCoin, { from: accounts[2] })
}
