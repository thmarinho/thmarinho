import { useTranslation } from "react-i18next";

const MainArea = () => {
  const { t } = useTranslation()
  return (
    <div className="bg-main h-full flex-grow">{t('current')}</div>
  )
}

export default MainArea;
