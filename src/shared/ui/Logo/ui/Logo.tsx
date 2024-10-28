import { FC } from 'react';
import { Link } from 'react-router-dom';
import { AppRoutes, RoutePath } from 'shared/config/routeConfig';
import styles from './Logo.module.scss';
import { ILogoProps } from './Logo.interface';
import { classNames } from 'shared/lib/classNames';

const Logo: FC<ILogoProps> = ({ className }) => {
    return <Link to={RoutePath[AppRoutes.HOME]}
        className={classNames(styles.logo, { [className]: className })}>
        Post ES
    </Link>;
};

export default Logo;