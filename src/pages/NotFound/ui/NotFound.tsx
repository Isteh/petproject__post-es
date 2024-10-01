import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { firstLetterCapitalize } from 'shared/lib/firstLetterCapitalize';

const NotFound: FC = () => {
    const { t } = useTranslation();
    return <div>
        {firstLetterCapitalize(t('page not found'))}
    </div>
}

export default NotFound