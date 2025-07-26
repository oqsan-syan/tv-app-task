import { FC, ReactNode } from 'react';

import { CustomContainer } from './style';

interface ContainerProps {
  children: ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => {
  return <CustomContainer>{children}</CustomContainer>;
};

export default Container;