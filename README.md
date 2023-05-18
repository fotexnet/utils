# Table of contents

- [Table of contents](#table-of-contents)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Package contents](#package-contents)
  - [Form utils](#form-utils)
    - [extractDirty](#extractdirty)
  - [Response utils](#response-utils)
    - [onSuccess](#onsuccess)
    - [onFailure](#onfailure)
  - [Utils](#utils)
    - [mergeMap](#mergemap)
  - [Types](#types)
    - [IResponse](#iresponse)
    - [PaginationObject](#paginationobject)

# Prerequisites

1. You must use Node 14 or higher
2. In your project, you must have react installed since react is a peer dependency (16 or higher)
3. Create a [Personal Access Token (classic)](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token#creating-a-personal-access-token-classic)
4. Select `repo`, `workflow`, `write:packages` and `delete:packages` scopes
5. Setup a global `~/.npmrc` file with the following line where `TOKEN` equals to your PAT you just created: `//npm.pkg.github.com/:_authToken=TOKEN`

# Installation

1. In your project, setup a local `.npmrc` file with the following line: `@fotexnet:registry=https://npm.pkg.github.com`
2. Install the package using `yarn add @fotexnet/ui`

# Package contents

## Form utils

### extractDirty

## Response utils

### onSuccess

### onFailure

## Utils

### mergeMap

This utility merges 2 maps of the same type. The first argument is the **base** where the second argument will be merged into. It will override any `key-value` pair that already exist!

**Signature:** `<T extends Map<unknown, unknown>>(baseMap: T, submittedMap: T) => T`
**Returns:** A new map with the values of both argument.

| argument       | type  | required | default | description                                                         |
| -------------- | ----- | -------- | ------- | ------------------------------------------------------------------- |
| `baseMap`      | `Map` | Yes      | -       | Will be cloned and used for base                                    |
| `submittedMap` | `Map` | Yes      | -       | Will be merged into the cloned base and override any existing value |

**Example of merging:**

```typescript
const baseMap = new Map<string, string>([
  ['a', '1'],
  ['b', '2'],
  ['c', '3'],
]);

const submittedMap = new Map<string, string>([
  ['d', '1'],
  ['e', '2'],
  ['f', '3'],
]);

const map = mergeMap(baseMap, submittedMap);
/*
  Result:
  [
    ['a','1'],
    ['b','2'],
    ['c','3'],
    ['d','1'],
    ['e','2'],
    ['f','3']
  ]
*/
```

**Example of overriding:**

```typescript
const baseMap = new Map<string, string>([
  ['a', '1'],
  ['b', '2'],
  ['c', '3'],
]);

const submittedMap = new Map<string, string>([
  ['a', '3'],
  ['d', '4'],
]);

const map = mergeMap(baseMap, submittedMap);
/*
  Result:
  [
    ['a','3'],
    ['b','2'],
    ['c','3'],
    ['d','4']
  ]
*/
```

## Types

### IResponse

### PaginationObject
