import { FC, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames';

const PageWrapper: FC<{ children: ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return <main className={classNames('page', className)}>{children}</main>;
};

export default PageWrapper;
