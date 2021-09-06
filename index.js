import { connect, WalletConnection } from 'near-api-js';
import { init, requestSignIn } from '@textile/near-storage';

// See https://github.com/textileio/storage-js-basic-demo/ for an example of initializing a NEAR dApp

// Defaults to Testnet: https://near.github.io/near-api-js/modules/browserconnect.html.
const near = await connect();

// Need to access wallet
const wallet = new WalletConnection(near, null);

// Sign-in and authorize the @textile/near-storage smart contract (`filecoin-bridge.testnet`)
await requestSignIn(wallet);

// Initialize the storage object, and you're ready to go
const storage = await init(wallet);
