require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-ignition");

const DEPLOYER_PRIVATE_KEY = vars.get("DEPLOYER_PRIVATE_KEY");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
	paths: {
		sources: "./contracts",
	},
	networks: {
		hardhat: {
		  	chainId: 1337,
		  	allowBlocksWithSameTimestamp: true,
		  	gas: 8000000,
		 	mining: {
				auto: true,
				interval: 0
		  	}
		},
		sepolia: {
			chainId: 11155111,
			url: `https://rpc.sepolia.ethpandaops.io/`,
      		accounts: [DEPLOYER_PRIVATE_KEY],
		},
		holesky: {
			chainId: 11155111,
			url: `https://rpc.sepolia.ethpandaops.io/`,
      		accounts: [DEPLOYER_PRIVATE_KEY],
		},
		ephemery: {
			url: `http://10.16.72.103:8545`,
      		accounts: [DEPLOYER_PRIVATE_KEY],
		},
	},
	solidity: {
		version: "0.8.21",
		settings: {
			optimizer: {
				enabled: true,
				runs: 2000,
			},
		},
	},
};
