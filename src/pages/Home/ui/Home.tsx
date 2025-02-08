import Counter from 'entities/Counter/ui/Counter';
import { FC } from 'react';
import { PageWrapper } from 'shared/ui/PageWrapper';

const Home: FC = () => {
  return (
    <PageWrapper>
      Home
      <Counter></Counter>
    </PageWrapper>
  );
};

export default Home;
