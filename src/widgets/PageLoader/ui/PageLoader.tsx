import { FC } from 'react';
import styles from './PageLoader.module.scss';
import { classNames } from 'shared/lib/classNames';
import { Loader } from 'shared/ui/Loader';


const PageLoader: FC = () => {
    return <div className={classNames(styles.pageLoader)}>
        <Loader />
    </div>;
};

export default PageLoader;