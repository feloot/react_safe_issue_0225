import { wagmiConfig } from "@/config/wagmi";
import { useCallback, useState } from "react";
import { signMessage } from "wagmi/actions";
import { useChainModal, useConnectModal } from '@rainbow-me/rainbowkit'
import { useAccount } from "wagmi";

export const HomePage = () => {
  const { connectModalOpen, openConnectModal } = useConnectModal();
  const { openChainModal } = useChainModal()

  const handleOpenConnectModal = useCallback(() => {
    if (openConnectModal) openConnectModal();
  }, [openConnectModal]);

  const handleOpenChainModal = () => openChainModal && openChainModal()
  const { address: account, isConnected, chainId } = useAccount();
  
  const [signedMessage, setSignedMessage] = useState("");

  const signHandler = useCallback(async () => {
    const signature = await signMessage(wagmiConfig, {
      message: "abc",
    })

    setSignedMessage(signature)
  }, [])

  return (
    <div className="max-w-2xl mx-auto grid grid-cols-1 gap-6">
      <h1 className="text-3xl sm:text-4xl text-center">Test</h1>
      {!isConnected && <button onClick={handleOpenConnectModal}>
        Connect Wallet
      </button>}
      <button onClick={signHandler}>Sign message</button><br /><br />
      <code>
        {signedMessage}
      </code>
    </div>
  )
}
