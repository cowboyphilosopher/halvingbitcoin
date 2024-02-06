import React, { useEffect, useState } from 'react';

interface UTXO {
  value: number;
}

interface WalletBalanceProps {
  zpubKey: string;
}

const WalletBalance: React.FC<WalletBalanceProps> = ({ zpubKey }) => {
  const [balance, setBalance] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const response = await fetch(`https://blockchain.info/rawaddr/${zpubKey}`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const responseData: unknown = await response.json();

        if (!Array.isArray(responseData)) {
          throw new Error('Unexpected response format');
        }

        const utxos: UTXO[] = responseData as UTXO[];

        const totalBalance = utxos.reduce((acc: number, utxo: UTXO) => acc + utxo.value, 0);
        setBalance(totalBalance);
        setLoading(false);
      } catch (error) {
        setError(error instanceof Error ? error.message : "ERROR HAPPENED");
        setLoading(false);
      }
    };

    fetchBalance();
  }, [zpubKey]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return <div>Total Balance: {balance} Satoshi</div>;
};

export default WalletBalance;
