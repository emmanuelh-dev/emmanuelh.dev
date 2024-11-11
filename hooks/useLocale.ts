"use client";

import { useParams } from 'next/navigation';
import { LocaleTypes } from 'app/[locale]/i18n/settings';

export const useLocale = (): LocaleTypes | undefined => {
  const params = useParams();
  return params?.locale as LocaleTypes;
};
