import { Field, InputType } from "@nestjs/graphql";
import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

@InputType()
export class SignInInput {
  @Field()
  @IsEmail({}, { message: "Please provide a valid email address" })
  email: string;

  @Field()
  @IsNotEmpty()
  @MinLength(8, { message: "Password must be at least 8 characters long" })
  password: string;
}
