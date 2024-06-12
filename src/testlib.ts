import { documentValidator, electoralRollValidation } from ".";

const document = '10000000001';

//Locally validation (No API call needed)
console.log(documentValidator(document));

//Server side, by API call validation
const validation = async () =>  console.log(await electoralRollValidation(document));
validation();