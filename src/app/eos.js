import Eos from "eosjs"

function eos(config) {
  const client = Eos(config);

  return {
    fetchNextBlockNumber: fetchNextBlockNumber.bind(null, client),
    fetchBlock: fetchBlock.bind(null, client)
  }
}

function fetchBlock(client, blockNumber) {
  if (!client) {
    throw new Error("You must pass a configured eos object to fetch the next block")
  }

  return client.getBlock(blockNumber)
    .catch(err => console.error("Error getting block info", err))
}

function fetchNextBlockNumber(client) {
  if (!client) {
    throw new Error("You must pass a configured eos object to fetch the next block")
  }

  return client.getInfo({})
    .then(info => info["last_irreversible_block_num"])
    .catch(err => console.error("Error getting blockchain info", err));
}

export { eos };
