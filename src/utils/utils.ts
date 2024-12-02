const removeAfterColon = (str: string) => str.slice(0, str.indexOf(':'));

const getDynamicURL = ({ path, id }: { path: string; id: string }) =>
  removeAfterColon(path) + id;

export { getDynamicURL };
