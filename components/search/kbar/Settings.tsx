import { SettingsIcon } from '../icons'
import LangButton from './LangButton'
import { fallbackLng, secondLng } from 'app/[locale]/i18n/locales'

interface SettingsProps {
  t: (key: string) => string
  handleThemeChange: (theme: string) => void
  handleLinkClick: (locale: string) => void
}

const Settings: React.FC<SettingsProps> = ({ t, handleLinkClick }) => (
  <>
    <div className="text-heading-400 mb-5 ml-4 mt-5 flex flex-row items-center text-3xl font-semibold">
      <span>
        <SettingsIcon className="mr-1 h-6 w-6" />
      </span>
      <div>{t('settings')}</div>
    </div>
    <div className="my-auto mb-20 mt-10 flex max-h-[230px] flex-col space-y-4 overflow-y-auto">
      <div className="ml-4 text-3xl font-semibold text-primary-400">{t('language')}</div>
      <LangButton t={t} handleLinkClick={handleLinkClick} locale={fallbackLng} lang="english" />
      <LangButton t={t} handleLinkClick={handleLinkClick} locale={secondLng} lang="french" />
    </div>
  </>
)

export default Settings
