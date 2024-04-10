type Mods = Record<string, boolean | string>;

export function classNames(...clss: Array<Mods | string>): string {
  return clss
    .map((cls) => {
      // if cls is undefined return empty string
      if (cls) {
        // if cls is string return cls
        if (typeof cls === 'string') return cls;
        // else cls is Mods, then if value is true return key
        return Object.entries(cls)
          .filter(([key, value]) => !!value)
          .map(([key]) => key)
          .join(' ');
      }
      return '';
    })
    .join(' ');
}
