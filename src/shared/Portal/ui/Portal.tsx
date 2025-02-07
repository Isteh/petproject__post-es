import { FC } from 'react';
import { createPortal } from 'react-dom';
import { IPortalProps } from 'shared/Portal/ui/Portal.interface';

const Portal: FC<IPortalProps> = ({ children, container = document.body }) => {
  return createPortal(children, container);
};

export default Portal;
