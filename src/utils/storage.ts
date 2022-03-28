interface StorageProps {
  get: () => any;
  set: (val: any) => void;
  destroy: () => void;
}

export const persistToken: StorageProps = {
  set: (val) => {
    localStorage.setItem("project.token", JSON.stringify(val));
  },
  get: () => {
    const storedData = localStorage.getItem("project.token");
    return storedData ? JSON.parse(storedData) : null;
  },
  destroy: () => {
    localStorage.removeItem("project.token");
  },
};

export const persistTheme: StorageProps = {
  set: (val) => {
    localStorage.setItem("project.theme", JSON.stringify({
      theme: val
    }));
  },
  get: () => {
    const storedData = localStorage.getItem("project.theme");
    return storedData ? JSON.parse(storedData) : null;
  },
  destroy: () => {
    localStorage.removeItem("project.theme");
  },
};
