"use client";

import { createContext, useState, ReactNode, useContext } from "react";

// LoadingContext의 값에 대한 인터페이스 정의
interface LoadingContextType {
  isLoading: boolean;
  toggleLoading: (isLoading: boolean) => void;
}

// 초기 값에 대한 타입 명시
const initialValue: LoadingContextType = {
  isLoading: false,
  toggleLoading: (isLoading: boolean) => {},
};

// createContext의 제네릭을 사용하여 타입 지정
const LoadingContext = createContext<LoadingContextType>(initialValue);

// LoadingProvider의 props에 대한 인터페이스 정의
interface LoadingProviderProps {
  children: ReactNode;
}

const LoadingProvider: React.FC<LoadingProviderProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const toggleLoading = (isLoading: boolean) => {
    setIsLoading(isLoading);
  };

  return (
    <LoadingContext.Provider
      value={{
        isLoading,
        toggleLoading,
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
};

export { LoadingContext, LoadingProvider };
