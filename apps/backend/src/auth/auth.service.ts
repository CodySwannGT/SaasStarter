import { Injectable } from "@nestjs/common";
import { SignInInput } from "../dto/sign-in.input";
import { AuthResponse } from "../models/auth-response.model";
import { User } from "../models/user.model";

@Injectable()
export class AuthService {
  // Mock user database
  private readonly users: User[] = [
    {
      id: "1",
      email: "user@example.com",
      firstName: "John",
      lastName: "Doe",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  async getCurrentUser(_userId?: string): Promise<User> {
    // For mock purposes, just return the first user
    return this.users[0];
  }

  async signIn(_signInInput: SignInInput): Promise<AuthResponse> {
    // Mock authentication
    // In a real app, you would validate credentials and generate tokens

    return {
      accessToken: "mock-access-token",
      refreshToken: "mock-refresh-token",
      user: this.users[0],
    };
  }
}
