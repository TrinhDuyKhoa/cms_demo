import { IsNotEmpty } from 'class-validator';
import { generateValidationMessage } from 'src/utils';
import { LengthValidator } from 'src/validators/length.validator';

export class PermissionDto {
  @IsNotEmpty({
    message: (arg) =>
      generateValidationMessage(arg, 'Please enter permission code'),
  })
  @LengthValidator(1, 10, {
    message: (arg) =>
      generateValidationMessage(
        arg,
        'Max length of permission code is 10 characters',
      ),
  })
  code: string;
}