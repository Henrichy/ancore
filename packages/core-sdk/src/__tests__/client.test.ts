import { AncoreClient } from '../client';
import { StellarClient } from '@ancore/stellar';

describe('AncoreClient', () => {
  const stellar = new StellarClient({ network: 'testnet' });
  const client = new AncoreClient(stellar);

  it('should create a wallet from mnemonic', () => {
    const keypair = AncoreClient.createWalletFromMnemonic('test mnemonic');
    expect(keypair).toBeDefined();
  });

  it('should import a wallet from secret', () => {
    const keypair = AncoreClient.importWalletFromSecret('S...');
    expect(keypair).toBeDefined();
  });

  it('should get a balance (mocked)', async () => {
    // This test assumes a mocked or testnet account
    const balance = await client.getBalance('GABC...');
    expect(typeof balance).toBe('string');
  });

  it('should return a transaction builder', () => {
    const builder = client.getTransactionBuilder(
      { publicKey: 'GABC...' },
      {
        server: stellar,
        accountContractId: 'C...',
        networkPassphrase: 'Test SDF Network ; September 2015',
      }
    );
    expect(builder).toBeDefined();
  });
});
