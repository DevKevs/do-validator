# Dominican document validation

This package offers a simple and efficient way to validate Dominican Republic ID numbers. Perfect for developers who need to ensure the validity of identity documents in their applications. It checks the format and integrity of the ID number according to official rules.

# Installation

You can install the package using:

```sh
npm install do-validator
```

# Use

```ts
import { documentValidator, electoralRollValidation } from 'do-validator';

const document = '10000000001';

console.log(documentValidator(document));

const validation = async () =>  console.log(await electoralRollValidation(document));

validation();
```
# API 
```ts
documentValidator(document) //Faster
```

Validates a Dominican identity card number.

### Parameters
document (string): The identity card number to validate 11 characters without special characters.

### Return
boolean: true if the ID number is valid, false otherwise.
<hr>

```ts
//validation by API Call
await electoralRollValidation(document) 
```
Validates a Dominican identity card number by an API Call in the Electoral roll.

### Parameters
document (string): The identity card number to validate 11 characters without special characters.

### Return
```ts
{
    statusCode: number,
    valid: boolean,
    message: string
}
```


# Examples
```ts
import { documentValidator } from 'do-validator';

const validId = 'YOUR_DOMINICAN_DOCUMENT';
const invalidId = '12345678901';

console.log(documentValidator(validId));  // true
console.log(documentValidator(invalidId));  // false

```

```ts
import { electoralRollValidation } from 'do-validator';

const validId = 'YOUR_DOMINICAN_DOCUMENT';
const invalidId = '12345678901';

const validation = async (document) =>  console.log(await electoralRollValidation(document));

validation(validId); // valid json response
validation(invalidId) // invalid json response

```
# Author
DevKevs
<a href="https://www.linkedin.com/in/kevin-f%C3%A9liz-encarnaci%C3%B3n-a20888200/" target="_blank">LinkedIn</a> <a href="https://devkevs.netlify.app/#/home" target="_blank">Portfolio</a> <a href="https://x.com/DevKevs_" target="_blank">Twitter (X)</a>