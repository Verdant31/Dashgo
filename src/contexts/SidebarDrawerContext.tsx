import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';
import { ReactNode, useContext, createContext, useEffect } from 'react';

interface SidebarDrawerProviderProps {
  children: ReactNode;
}

type SidebarDrawerContextData = UseDisclosureReturn

const SidebarDrawerContext = createContext({} as SidebarDrawerContextData);

export function SidebarDrawerProvider({ children }: SidebarDrawerProviderProps) {
  const disClosure = useDisclosure();
  const router = useRouter()

  useEffect(() => {
    disClosure.onClose()
  }, [router.asPath])

  return (
    <SidebarDrawerContext.Provider value={disClosure}>
      {children}
    </SidebarDrawerContext.Provider>
  )
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext)