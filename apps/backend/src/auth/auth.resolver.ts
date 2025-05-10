import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { SignInInput } from "../dto/sign-in.input";
import { AuthResponse } from "../models/auth-response.model";
import { User } from "../models/user.model";
import { AuthService } from "./auth.service";

@Resolver(() => User)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Query(() => User, { name: "me", description: "Get the current user" })
  // In a real app, you would add a guard: @UseGuards(JwtAuthGuard)
  async getCurrentUser(): Promise<User> {
    return this.authService.getCurrentUser();
  }

  @Mutation(() => AuthResponse, { description: "Sign in to get access token" })
  async signIn(
    @Args("signInInput") signInInput: SignInInput
  ): Promise<AuthResponse> {
    return this.authService.signIn(signInInput);
  }
}
