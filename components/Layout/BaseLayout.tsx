"use client"

import Nav from "@/components/Nav/Nav"
import { LoadingContext } from "@/provider/LoadingProvider"
import Lottie from "react-lottie-player"
import { trip } from "@/lottie/trip"
import { useContext, useEffect } from "react"

interface BaseLayoutProps {
  children: React.ReactNode
}

const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
  const { isLoading, toggleLoading } = useContext(LoadingContext)

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        toggleLoading(false)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [isLoading, toggleLoading])

  return (
    <div className="flex items-center justify-center w-full min-h-screen">
      <main className="relative flex flex-col border-gray-500 border-solid border-x h-fit min-h-dvh w-full min-w-[400px] max-w-[650px] items-center justify-center ">
        <article className="flex w-full flex-1 flex-col">
          <div className="relative flex w-full flex-col">{children}</div>
        </article>
        <Nav />

        {isLoading && (
          <div className="absolute h-full inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
            <Lottie
              loop
              animationData={trip}
              play
              style={{ width: 250, height: 250 }}
            />
          </div>
        )}
      </main>
    </div>
  )
}

export default BaseLayout
