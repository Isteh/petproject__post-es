import { classNames } from 'shared/lib/classNames/lib/classNames';

describe('classNames', () => {
  test('one_string', () => {
    expect(classNames('someClass')).toBe('someClass');
  });
  test('few_strings', () => {
    expect(classNames('someClass', 'anotherClass')).toBe(
      'someClass anotherClass'
    );
  });
  test('one_mod_positive', () => {
    expect(classNames({ someClass: true })).toBe('someClass');
  });
  test('one_mod_negative', () => {
    expect(classNames({ someClass: false })).toBe('');
  });
  test('one_deep_mod_positive', () => {
    expect(classNames({ someClass: true, anotherClass: true })).toBe(
      'someClass anotherClass'
    );
  });
  test('few_mods', () => {
    expect(
      classNames(
        { someClass: true },
        { anotherClass: true },
        { oneMoreClass: false }
      )
    ).toBe('someClass anotherClass');
  });
  test('few_mods_with_deep', () => {
    expect(
      classNames(
        { someClass: true },
        { anotherClass: true },
        { oneMoreClass: false, lastClass: true }
      )
    ).toBe('someClass anotherClass lastClass');
  });
  test('mixed', () => {
    expect(
      classNames(
        'someClass',
        { anotherClass: true },
        { oneMoreClass: false, lastClass: true }
      )
    ).toBe('someClass anotherClass lastClass');
  });
  test('undefined', () => {
    expect(classNames('someClass', undefined)).toBe('someClass');
  });
});
