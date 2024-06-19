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
## Looking for Flutter / Dart version? 
#### Also available in pub.dev, take a look! <br />
[![npm](https://img.shields.io/badge/do__validator-blue.svg?logo=dart&logoColor=white)](https://pub.dev/packages/do_validator) 

# Author
#### DevKevs 
[![LinkedIn](https://img.shields.io/badge/LinkedIn-blue.svg?logo=linkedin&logoColor=white)](https://linkedin.com/in/kevin-féliz-encarnación-a20888200)
[![X](https://img.shields.io/badge/Twitter(X)-black.svg?logo=X&logoColor=white)](https://x.com/DevKevs_) [![Portfolio](https://img.shields.io/badge/Portfolio-blue.svg?logo=angular&logoColor=white)](https://devkevs.netlify.app) 