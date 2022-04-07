export interface DefinitionsProps {
  api_url: string;
}

export const definitions: DefinitionsProps = {
  api_url: import.meta.env.VITE_APP_API_URL,
};
