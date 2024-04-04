type Mods = Record<string, boolean | string>;

export function classNames(...clss: Array<Mods | string>): string {
  return clss
    .map((cls) => {
      if (typeof cls === 'string') return cls;
      return Object.entries(cls)
        .filter(([key, value]) => !!value)
        .map(([key]) => key)
        .join(' ');
    })
    .join(' ');
}
