# Best practices for writing unit tests

## 1. Naming test cases

You can use 2 functions for testing - `test` and `it`.

- They are exactly the same, more precisely `it` is an alias for `test` (`const it = test;`)
- Choose one of them and use it in your project (keep consistency)
- They differ in the way they are read:
    - `test('if it does this thing', () => {});`
    - `it('should do this thing', () => {});`
- `"If it"` or `"should"` can be removed:
    - `test('does this thing', () => {});` or more likely `test('thing does this', () => {});`
    - `it('does this thing', () => {});`

```javascript
// ❌ Do not put too vague names that do not provide about what is being tested
it('works correctly', () => {
    // use expect() here
});
```

```javascript
// ✅ Rather put specific information about what is being tested
it('sums two numbers', () => {
    // use expect() here
});
```

## 2. Doing explicit assertions

Do not do assertions by yourself, because testing libraries implements it more likely in a different way.

- `toBe` is not using `===` for comparison, but it is using `Object.is`

```javascript
// ❌ DO NOT write comparison by yourself
expect(5 === 5).toBe(true);
```

```javascript
// ✅ Rather let testing framework to compare
expect(5).toBe(5);
```

## 3. Testing implementation details

Implementation details are things which users of your code will not typically use, see, or even know about.

- **End-users** and **developers** are the two "users" that our application code needs to consider.

```javascript
class Store {
    _data = [];
    update = (key, value) => {
        this._data[key] = value;
    };
    get = (key) => this._data[key];
}

const store = new Store();
store.update('age', 18);

// ❌ Do not test API that users (developers) should not use
expect(store._data.age).toBe(18);
```

```javascript
// ✅ Rather test public API that users actually use
expect(store.get('age')).toBe(18);
```

## 4. Testing too many things in one test

Each test should focus on a single functionality or behavior.

```javascript
// ❌ DO NOT test multiple functionalities in one test
it('creates and fetchs user', () => {
    createUser({ id: 1, name: 'John' });
    const user = fetchUser(1);
    expect(user.name).toBe('John');
    deleteUser(1);
    expect(fetchUser(1)).toBeNull();
});
```

```javascript
// ✅ Rather split tests into separate units
it('creates user', () => {
    createUser({ id: 1, name: 'John' });
    const user = fetchUser(1);
    expect(user.name).toBe('John');
});

it('deletes user', () => {
    createUser({ id: 1, name: 'John' });
    deleteUser(1);
    expect(fetchUser(1)).toBeNull();
});
```

## 5. Testing edge cases

Most of the time it is not possible to test every case. But try to think about edge cases that might happen.

> 💡 Note that some edge cases related to:
>
> 1. Testing data types like: null, undefined, ...
> 2. Testing mutations (changes) to the original object/array
>
> could be skipped when you are using type safe system like TypeScript

```javascript
// ❌ DO NOT ignore edge cases
it('converts string to uppercase', () => {
    expect(toUpperCase('hello')).toBe('HELLO');
});
```

```javascript
// ✅ Rather test various edge cases
it('converts string to uppercase', () => {
    expect(toUpperCase('hello')).toBe('HELLO');
});

it('handles empty strings', () => {
    expect(toUpperCase('')).toBe('');
});

it('handles strings with numbers and special characters', () => {
    expect(toUpperCase('0hello123!')).toBe('0HELLO123!');
});

it('handles strings with mixed case', () => {
    expect(toUpperCase('HeLLo')).toBe('HELLO');
});

it('handles strings with leading and trailing spaces', () => {
    expect(toUpperCase('  hello  ')).toBe('  HELLO  ');
});

it('handles strings with only spaces', () => {
    expect(toUpperCase('     ')).toBe('     ');
});
```
