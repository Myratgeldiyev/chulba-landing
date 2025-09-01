export const defaultLanguage = 'tk'

export const availableLanguages = [defaultLanguage, 'ru', 'en']

export const namespaces = ['translation']

export function getOptions(lng = defaultLanguage) {
	return {
		lng,
		defaultNS: defaultLanguage,
		fallbackLng: defaultLanguage,
		fallbackNS: namespaces[0],
		ns: namespaces,
		supportedLngs: availableLanguages,
	}
}
