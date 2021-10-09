import React, {
  createContext,
  useContext,
} from "react";

interface Environment {
  GHOST_CONTENT_API_URL: string;
}

interface IEnvironmentContext {
  environment: Environment;
}

const EnvironmentContext = createContext<IEnvironmentContext>(undefined!);

export const EnvironmentProvider = (props: React.PropsWithChildren<Record<string, unknown>>) => {
  const value = { environment: {
    GHOST_CONTENT_API_URL: process.env.NEXT_PUBLIC_GHOST_CONTENT_API_URL as string
  }};

  return <EnvironmentContext.Provider value={value} {...props} />;
};

export const useEnvironment: () => IEnvironmentContext = () => {
  const context = useContext(EnvironmentContext);

  if (!context) {
    throw new Error(`useEnvironment must be used within an EnvironmentProvider`);
  }

  return context;
};
