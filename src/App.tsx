import { RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { wagmiConfig } from './config/wagmi'
import { HomePage } from './pages/HomePage/HomePage'
import '@rainbow-me/rainbowkit/styles.css'

const queryClient = new QueryClient()

function App() {
  
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider modalSize="compact">
          <Router>
            <div className="grid min-h-screen w-full grid-rows-[auto_1fr_auto]">
              <main className="grid px-4 sm:px-10 py-8 md:py-12 lg:py-16 md:gap-10 lg:gap-20">
                <div>
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                  </Routes>
                </div>
              </main>
            </div>
          </Router>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}

export default App
