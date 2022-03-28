export const normalizeBaseUrl = (base_url: string) => base_url[base_url.length - 1] === '/' ? base_url : `${base_url}/`
