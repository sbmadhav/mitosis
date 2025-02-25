export const GETTER = /^\s*get /;
export const SETTER = /^\s*set /;

export const checkIsGetter = (code: string) => code.match(GETTER);
export const stripGetter = (str: string) => str.replace(GETTER, '');

export const replaceGetterWithFunction = (str: string) => str.replace(/^(get )?/, 'function ');

export const prefixWithFunction = (str: string) => `function ${str}`;
