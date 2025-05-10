import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: string;
  JSONObject: Record<string, any>;
  URL: any;
};

export type AcceptInvitationInput = {
  id: Scalars['ID'];
};

export type ActivateOrganizationUserInput = {
  userId: Scalars['ID'];
};

export type AddPlayerToWatchlistInput = {
  playerId: Scalars['ID'];
  watchlistId: Scalars['ID'];
};

export type AddShadowTeamPlayersInput = {
  playerIds: Array<Scalars['ID']>;
  shadowTeamId: Scalars['ID'];
};

export enum AuthAllow {
  Groups = 'groups',
  Private = 'private'
}

export type AuthRule = {
  allow: AuthAllow;
  groups?: InputMaybe<Array<Group>>;
};

export type AuthenticationResult = {
  __typename?: 'AuthenticationResult';
  accessToken?: Maybe<Scalars['String']>;
  expiresIn?: Maybe<Scalars['Int']>;
  idToken?: Maybe<Scalars['String']>;
  newDeviceMetadata?: Maybe<NewDeviceMetadata>;
  refreshToken?: Maybe<Scalars['String']>;
  tokenType?: Maybe<Scalars['String']>;
};

export type AuthenticationResultWithMessage = {
  __typename?: 'AuthenticationResultWithMessage';
  data?: Maybe<AuthenticationResult>;
  message?: Maybe<Scalars['String']>;
};

export type ChallengeInput = {
  challengeName: ChallengeNameType;
  challengeResponses: Scalars['JSONObject'];
  session: Scalars['String'];
};

export enum ChallengeNameType {
  CustomChallenge = 'CUSTOM_CHALLENGE',
  NewPasswordRequired = 'NEW_PASSWORD_REQUIRED',
  SmsMfa = 'SMS_MFA',
  SoftwareTokenMfa = 'SOFTWARE_TOKEN_MFA'
}

export type ChallengeParametersResult = {
  __typename?: 'ChallengeParametersResult';
  USERNAME?: Maybe<Scalars['String']>;
  attempts?: Maybe<Scalars['String']>;
  attemptsLeft?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  maxAttempts?: Maybe<Scalars['String']>;
};

export type ChallengeResult = {
  __typename?: 'ChallengeResult';
  ChallengeName?: Maybe<Scalars['String']>;
  ChallengeParameters?: Maybe<ChallengeParametersResult>;
  Session?: Maybe<Scalars['String']>;
};

export type CognitoUser = {
  __typename?: 'CognitoUser';
  Attributes?: Maybe<Array<CognitoUserAttribute>>;
  Enabled: Scalars['Boolean'];
  UserAttributes?: Maybe<Array<CognitoUserAttribute>>;
  UserStatus: CognitoUserStatus;
  Username: Scalars['String'];
};

export type CognitoUserAttribute = {
  __typename?: 'CognitoUserAttribute';
  Name: Scalars['String'];
  Value: Scalars['String'];
};

export enum CognitoUserStatus {
  Confirmed = 'CONFIRMED',
  ForceChangePassword = 'FORCE_CHANGE_PASSWORD',
  ResetRequired = 'RESET_REQUIRED',
  Unconfirmed = 'UNCONFIRMED',
  Unknown = 'UNKNOWN'
}

/** Represents a comment on a player note */
export type Comment = Node & {
  __typename?: 'Comment';
  body: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  note: Note;
  updatedAt: Scalars['DateTime'];
  user: User;
};

export type CommentConnection = Connection & {
  __typename?: 'CommentConnection';
  edges: Array<CommentEdge>;
  pageInfo: PageInfo;
};

export type CommentEdge = Edge & {
  __typename?: 'CommentEdge';
  cursor: Scalars['String'];
  node: Comment;
};

export type ConfirmSignInInput = {
  identifier: Scalars['String'];
  otpCode: Scalars['String'];
  session: Scalars['String'];
};

export type ConfirmSignInResult = {
  __typename?: 'ConfirmSignInResult';
  authResult?: Maybe<AuthenticationResultWithMessage>;
  errorMessage?: Maybe<Message>;
  signInResult?: Maybe<SignInResult>;
};

export type ConfirmSignInResultOrSignInResult = ConfirmSignInResult | Message | SignInResult;

export type Connection = {
  edges: Array<Edge>;
  pageInfo: PageInfo;
};

export type CreateCommentInput = {
  body: Scalars['String'];
  noteId: Scalars['ID'];
};

export type CreateDeviceInput = {
  deviceToken: Scalars['String'];
  platform: Scalars['String'];
};

export type CreateInvitationInput = {
  phoneNumber: Scalars['String'];
  roleId: Scalars['ID'];
};

export type CreateNoteInput = {
  body: Scalars['String'];
  /** Determines if this note will be visible to other users in the organization */
  isPublic: Scalars['Boolean'];
  playerId: Scalars['ID'];
  title: Scalars['String'];
};

export type CreateOrganizationInput = {
  currencyCode?: InputMaybe<CurrencyCode>;
  intakeFormUrl?: InputMaybe<Scalars['URL']>;
  name: Scalars['String'];
  sportId?: InputMaybe<Scalars['ID']>;
};

export type CreateOrganizationLeagueInput = {
  leagueId: Scalars['ID'];
  organizationId: Scalars['ID'];
};

export type CreateOrganizationTeamInput = {
  organizationId: Scalars['ID'];
  teamId: Scalars['ID'];
};

/** Input type for creating a PlayerDataSummary and generating a presigned URL for upload. */
export type CreatePlayerDataSummaryInput = {
  /** The name of the file to be uploaded. */
  fileName: Scalars['String'];
  /** The ID of the organization. */
  organizationId: Scalars['String'];
  /** The GGID of the player. */
  playerGGID?: InputMaybe<Scalars['String']>;
  /** The ID of the player. */
  playerId?: InputMaybe<Scalars['String']>;
};

export type CreateShadowTeamInput = {
  formation?: InputMaybe<ShadowTeamFormation>;
  name?: InputMaybe<Scalars['String']>;
};

export type CreateUserWatchlistInput = {
  /** The role of the user on the watchlist. */
  role: UserWatchlistRole;
  /** The id of the user associated with the record. */
  userId: Scalars['ID'];
  /** The id of the watchlist associated with the record. */
  watchlistId: Scalars['ID'];
};

export type CreateWatchlistInput = {
  name: Scalars['String'];
};

export enum CurrencyCode {
  Eur = 'EUR',
  Gbp = 'GBP',
  Usd = 'USD'
}

export type DeactivateOrganizationUserInput = {
  userId: Scalars['ID'];
};

export type DeleteCommentInput = {
  id: Scalars['ID'];
};

export type DeleteInvitationInput = {
  id: Scalars['ID'];
};

export type DeleteNoteInput = {
  id: Scalars['ID'];
};

export type DeleteOrganizationLeagueInput = {
  leagueId: Scalars['ID'];
  organizationId: Scalars['ID'];
};

export type DeleteOrganizationTeamInput = {
  organizationId: Scalars['ID'];
  teamId: Scalars['ID'];
};

export type DeleteReportFileInput = {
  reportFileKey: Scalars['String'];
};

export type DeleteShadowTeamInput = {
  id: Scalars['ID'];
};

export type DeleteUserWatchlistInput = {
  id: Scalars['ID'];
};

export type DeleteWatchlistInput = {
  id: Scalars['ID'];
};

export type Device = {
  __typename?: 'Device';
  createdAt: Scalars['String'];
  deviceToken: Scalars['String'];
  id: Scalars['ID'];
  isActive: Scalars['Boolean'];
  platform: Scalars['String'];
  updatedAt: Scalars['String'];
  userId: Scalars['ID'];
};

export type Edge = {
  cursor: Scalars['String'];
  node: Node;
};

/** Base game statistic type that defines a measurable game-level metric */
export type GameStat = {
  __typename?: 'GameStat';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  sportId: Scalars['ID'];
  type: StatType;
  updatedAt: Scalars['DateTime'];
};

export enum Group {
  Admins = 'Admins'
}

export type Invitation = Node & {
  __typename?: 'Invitation';
  createdAt: Scalars['DateTime'];
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  organization: Organization;
  organizationId: Scalars['ID'];
  phoneNumber: Scalars['String'];
  receiver?: Maybe<User>;
  role: Role;
  roleId: Scalars['ID'];
  status: InvitationStatus;
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['ID'];
};

export type InvitationConnection = Connection & {
  __typename?: 'InvitationConnection';
  edges: Array<InvitationEdge>;
  pageInfo: PageInfo;
};

export type InvitationEdge = Edge & {
  __typename?: 'InvitationEdge';
  cursor: Scalars['String'];
  node: Invitation;
};

/** Status of an invitation to join an organization */
export enum InvitationStatus {
  Accepted = 'ACCEPTED',
  Expired = 'EXPIRED',
  Pending = 'PENDING',
  Rejected = 'REJECTED'
}

export type League = Node & {
  __typename?: 'League';
  country?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  isMyOrganizationLeague?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  sport: Sport;
  sportId: Scalars['ID'];
  updatedAt: Scalars['DateTime'];
};

export type LeagueConnection = Connection & {
  __typename?: 'LeagueConnection';
  edges: Array<LeagueEdge>;
  pageInfo: PageInfo;
};

export type LeagueEdge = Edge & {
  __typename?: 'LeagueEdge';
  cursor: Scalars['String'];
  node: League;
};

/** Base lifetime statistic type that defines a measurable career-level metric */
export type LifetimeStat = {
  __typename?: 'LifetimeStat';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  sportId: Scalars['ID'];
  type: StatType;
  updatedAt: Scalars['DateTime'];
};

export type ListMyUserWatchlistsFilterInput = {
  role?: InputMaybe<UserWatchlistRole>;
};

export type ListShadowTeamOrderByInput = {
  createdAt?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
};

export type LogIntoOrganizationInput = {
  organizationId: Scalars['ID'];
};

export type MatchDetail = {
  __typename?: 'MatchDetail';
  ground?: Maybe<Scalars['String']>;
  matchDate?: Maybe<Scalars['DateTime']>;
  opponent?: Maybe<Scalars['String']>;
  team?: Maybe<Scalars['String']>;
};

export type Message = {
  __typename?: 'Message';
  message: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Accepts an invitation to join an organization */
  acceptInvitation: Invitation;
  /** Activates a user's access to an organization */
  activateUser: OrganizationUser;
  /** Adds a player to a specified watchlist. */
  addPlayerToWatchlist: Watchlist;
  addShadowTeamPlayers: Array<ShadowTeamPlayer>;
  /** Bulk set priorities for game stats */
  bulkSetGameStatPriorities: Array<StatPriority>;
  /** Bulk set priorities for lifetime stats */
  bulkSetLifetimeStatPriorities: Array<StatPriority>;
  /** Bulk set priorities for season stats */
  bulkSetSeasonStatPriorities: Array<StatPriority>;
  challenge: ConfirmSignInResultOrSignInResult;
  /** Confirms the sign in process for a user. This will verify the OTP sent to the user's email or phone number. */
  confirmSignIn: ConfirmSignInResult;
  /** Creates a new comment on a note */
  createComment: Comment;
  createDevice: Device;
  /** Creates and sends an invitation to join the organization */
  createInvitation: Invitation;
  /** Creates a new note for a player */
  createNote: Note;
  createOrganization: Organization;
  /** Adds a league association to the organization. */
  createOrganizationLeague: OrganizationLeague;
  /** Associates a team with the organization. */
  createOrganizationTeam: OrganizationTeam;
  /**
   * Creates a presigned URL for uploading a file and returns the URL.
   *
   * Use the url obtained from this request to make a put request (as seen in the sample_script.py) with the actual file.
   *
   * This is what kicks of the regeneration of the knowledge base summary.
   *
   * It's an async process and can take up to 5 minutes to complete.
   */
  createPresignedUrlForUpload: Scalars['String'];
  createShadowTeam: ShadowTeam;
  /**
   * Adds a user to a watchlist.
   * Can only be peformed by the owner and/or editors of the watchlist.
   */
  createUserWatchlist: UserWatchlist;
  /** Creates a new watchlist for the authenticated user. */
  createWatchlist: Watchlist;
  /** Deactivates the authenticated user's account. */
  deactivateMe: User;
  /** Deactivates a user's access to an organization */
  deactivateUser: OrganizationUser;
  /** Permanently deletes a comment */
  deleteComment: Comment;
  /** Deletes a pending invitation */
  deleteInvitation: Invitation;
  /** Permanently deletes a note */
  deleteNote: Note;
  /** Removes a league association from the organization. */
  deleteOrganizationLeague: OrganizationLeague;
  /** Removes a team association from the organization. */
  deleteOrganizationTeam: OrganizationTeam;
  deleteReportFile: Scalars['String'];
  deleteShadowTeam: ShadowTeam;
  /**
   * Removes a user from a watchlist.
   * Can only be peformed by the owner and/or editors of the watchlist.
   */
  deleteUserWatchlist: UserWatchlist;
  /** Deletes a watchlist and all its associated player entries. */
  deleteWatchlist: Watchlist;
  logIntoOrganization: User;
  refreshToken: AuthenticationResultWithMessage;
  /** Rejects an invitation to join an organization */
  rejectInvitation: Invitation;
  /** Remove a player from recommendations. The player will no longer appear in any recommendation type. */
  removePlayerFromRecommendations?: Maybe<Player>;
  /** Removes a player from a specified watchlist. */
  removePlayerFromWatchlist: Watchlist;
  removeShadowTeamPlayer: ShadowTeamPlayer;
  /** Resends an invitation SMS to the invitee */
  resendInvitation: Invitation;
  /** Resends the OTP to the user's email or phone number. */
  resendOTP: SignInResult;
  sendMyDevicesAPushNotification: Array<Device>;
  /** Set priority for a game stat */
  setGameStatPriority: StatPriority;
  /** Set priority for a lifetime stat */
  setLifetimeStatPriority: StatPriority;
  /** Set priority for a season stat */
  setSeasonStatPriority: StatPriority;
  /** Initiates a sign in process for a user. This will send an OTP to the user's email or phone number. */
  signIn: SignInResult;
  signOut: Message;
  /** Undo the removal of a player from recommendations. The player will appear in recommendations again. */
  undoRemovePlayerFromRecommendations?: Maybe<Player>;
  /** Updates an existing comment */
  updateComment: Comment;
  /** Updates the authenticated user's profile information such as firstName, lastName, and title. */
  updateMyProfile: User;
  /** Updates an existing note */
  updateNote: Note;
  updateOrganization: Organization;
  updateShadowTeam: ShadowTeam;
  /**
   * Updates the display order of a watchlist in the user's list of watchlists.
   * Used when users manually reorder their watchlists.
   */
  updateUserWatchlistPosition: Watchlist;
  /** Updates an existing watchlist's details (e.g., name). */
  updateWatchlist: Watchlist;
  /**
   * Updates the display order of a player within a watchlist.
   * Used when users manually reorder players in their list.
   */
  updateWatchlistPlayerPosition: Watchlist;
  /**
   * Updates the display order of a player within a watchlist.
   * Used when users manually reorder players in their list while having sorting enable.
   */
  updateWatchlistPlayerPositions: Watchlist;
  validateCurrentUser: ValidationResponse;
};


export type MutationAcceptInvitationArgs = {
  input: AcceptInvitationInput;
};


export type MutationActivateUserArgs = {
  input: ActivateOrganizationUserInput;
};


export type MutationAddPlayerToWatchlistArgs = {
  input: AddPlayerToWatchlistInput;
};


export type MutationAddShadowTeamPlayersArgs = {
  input: AddShadowTeamPlayersInput;
};


export type MutationBulkSetGameStatPrioritiesArgs = {
  priorities: Array<StatPriorityInput>;
};


export type MutationBulkSetLifetimeStatPrioritiesArgs = {
  priorities: Array<StatPriorityInput>;
};


export type MutationBulkSetSeasonStatPrioritiesArgs = {
  priorities: Array<StatPriorityInput>;
};


export type MutationChallengeArgs = {
  input: ChallengeInput;
};


export type MutationConfirmSignInArgs = {
  input: ConfirmSignInInput;
};


export type MutationCreateCommentArgs = {
  input: CreateCommentInput;
};


export type MutationCreateDeviceArgs = {
  input: CreateDeviceInput;
};


export type MutationCreateInvitationArgs = {
  input: CreateInvitationInput;
};


export type MutationCreateNoteArgs = {
  input: CreateNoteInput;
};


export type MutationCreateOrganizationArgs = {
  input: CreateOrganizationInput;
};


export type MutationCreateOrganizationLeagueArgs = {
  input: CreateOrganizationLeagueInput;
};


export type MutationCreateOrganizationTeamArgs = {
  input: CreateOrganizationTeamInput;
};


export type MutationCreatePresignedUrlForUploadArgs = {
  input: CreatePlayerDataSummaryInput;
};


export type MutationCreateShadowTeamArgs = {
  input: CreateShadowTeamInput;
};


export type MutationCreateUserWatchlistArgs = {
  input: CreateUserWatchlistInput;
};


export type MutationCreateWatchlistArgs = {
  input: CreateWatchlistInput;
};


export type MutationDeactivateUserArgs = {
  input: DeactivateOrganizationUserInput;
};


export type MutationDeleteCommentArgs = {
  input: DeleteCommentInput;
};


export type MutationDeleteInvitationArgs = {
  input: DeleteInvitationInput;
};


export type MutationDeleteNoteArgs = {
  input: DeleteNoteInput;
};


export type MutationDeleteOrganizationLeagueArgs = {
  input: DeleteOrganizationLeagueInput;
};


export type MutationDeleteOrganizationTeamArgs = {
  input: DeleteOrganizationTeamInput;
};


export type MutationDeleteReportFileArgs = {
  input: DeleteReportFileInput;
};


export type MutationDeleteShadowTeamArgs = {
  input: DeleteShadowTeamInput;
};


export type MutationDeleteUserWatchlistArgs = {
  input: DeleteUserWatchlistInput;
};


export type MutationDeleteWatchlistArgs = {
  input: DeleteWatchlistInput;
};


export type MutationLogIntoOrganizationArgs = {
  input: LogIntoOrganizationInput;
};


export type MutationRefreshTokenArgs = {
  input: RefreshTokenInput;
};


export type MutationRejectInvitationArgs = {
  input: RejectInvitationInput;
};


export type MutationRemovePlayerFromRecommendationsArgs = {
  playerId: Scalars['ID'];
};


export type MutationRemovePlayerFromWatchlistArgs = {
  input: RemovePlayerFromWatchlistInput;
};


export type MutationRemoveShadowTeamPlayerArgs = {
  input: RemoveShadowTeamPlayerInput;
};


export type MutationResendInvitationArgs = {
  input: ResendInvitationInput;
};


export type MutationResendOtpArgs = {
  input: ResendOtpInput;
};


export type MutationSendMyDevicesAPushNotificationArgs = {
  input: SendMyDevicesAPushNotificationInput;
};


export type MutationSetGameStatPriorityArgs = {
  priority?: InputMaybe<Scalars['Float']>;
  statId: Scalars['ID'];
};


export type MutationSetLifetimeStatPriorityArgs = {
  priority?: InputMaybe<Scalars['Float']>;
  statId: Scalars['ID'];
};


export type MutationSetSeasonStatPriorityArgs = {
  priority?: InputMaybe<Scalars['Float']>;
  statId: Scalars['ID'];
};


export type MutationSignInArgs = {
  input: SignInInput;
};


export type MutationUndoRemovePlayerFromRecommendationsArgs = {
  playerId: Scalars['ID'];
};


export type MutationUpdateCommentArgs = {
  input: UpdateCommentInput;
};


export type MutationUpdateMyProfileArgs = {
  input: UpdateMyProfileInput;
};


export type MutationUpdateNoteArgs = {
  input: UpdateNoteInput;
};


export type MutationUpdateOrganizationArgs = {
  input: UpdateOrganizationInput;
};


export type MutationUpdateShadowTeamArgs = {
  input: UpdateShadowTeamInput;
};


export type MutationUpdateUserWatchlistPositionArgs = {
  input: UpdateUserWatchlistPositionInput;
};


export type MutationUpdateWatchlistArgs = {
  input: UpdateWatchlistInput;
};


export type MutationUpdateWatchlistPlayerPositionArgs = {
  input: UpdateWatchlistPlayerPositionInput;
};


export type MutationUpdateWatchlistPlayerPositionsArgs = {
  input: UpdateWatchlistPlayerPositionsInput;
};

export type Nationality = Node & {
  __typename?: 'Nationality';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type NationalityConnection = Connection & {
  __typename?: 'NationalityConnection';
  edges: Array<NationalityEdge>;
  pageInfo: PageInfo;
};

export type NationalityEdge = Edge & {
  __typename?: 'NationalityEdge';
  cursor: Scalars['String'];
  node: Nationality;
};

export type NewDeviceMetadata = {
  __typename?: 'NewDeviceMetadata';
  deviceGroupKey?: Maybe<Scalars['String']>;
  deviceKey?: Maybe<Scalars['String']>;
};

export type NewPosition = {
  playerId: Scalars['ID'];
  position: Scalars['Int'];
};

export type Node = {
  id: Scalars['ID'];
};

/** Represents a note about a player in the system */
export type Note = Node & {
  __typename?: 'Note';
  body: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  /** When true, the note is visible to all users in the organization. */
  isPublic: Scalars['Boolean'];
  player: Player;
  playerId: Scalars['ID'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['ID'];
};

export type NoteConnection = Connection & {
  __typename?: 'NoteConnection';
  edges: Array<NoteEdge>;
  pageInfo: PageInfo;
};

export type NoteEdge = Edge & {
  __typename?: 'NoteEdge';
  cursor: Scalars['String'];
  node: Note;
};

export type OpenAiContent = {
  __typename?: 'OpenAiContent';
  refusal?: Maybe<Scalars['String']>;
  text?: Maybe<OpenAiTextContent>;
  type: Scalars['String'];
};

export type OpenAiMessage = {
  __typename?: 'OpenAiMessage';
  content: Array<OpenAiContent>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  metadata?: Maybe<Scalars['JSONObject']>;
  role: Scalars['String'];
};

export type OpenAiMessageConnection = {
  __typename?: 'OpenAiMessageConnection';
  edges: Array<OpenAiMessageEdge>;
  pageInfo: PageInfo;
};

export type OpenAiMessageEdge = {
  __typename?: 'OpenAiMessageEdge';
  cursor: Scalars['String'];
  node: OpenAiMessage;
};

export type OpenAiTextContent = {
  __typename?: 'OpenAiTextContent';
  value: Scalars['String'];
};

export enum OrderByDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type OrderByInput = {
  createdAt?: InputMaybe<OrderByDirection>;
  updatedAt?: InputMaybe<OrderByDirection>;
};

export type Organization = Node & {
  __typename?: 'Organization';
  createdAt: Scalars['DateTime'];
  currencyCode: CurrencyCode;
  id: Scalars['ID'];
  intakeFormUrl?: Maybe<Scalars['URL']>;
  name: Scalars['String'];
  organizationTeams: Array<OrganizationTeam>;
  recommendationTypes: Array<RecommendationType>;
  sport?: Maybe<Sport>;
  sportId?: Maybe<Scalars['ID']>;
  updatedAt: Scalars['DateTime'];
};

export type OrganizationConnection = Connection & {
  __typename?: 'OrganizationConnection';
  edges: Array<OrganizationEdge>;
  pageInfo: PageInfo;
};

export type OrganizationEdge = Edge & {
  __typename?: 'OrganizationEdge';
  cursor: Scalars['String'];
  node: Organization;
};

/** Represents an organization's priority settings for a game statistic */
export type OrganizationGameStatPriority = {
  __typename?: 'OrganizationGameStatPriority';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  organizationId: Scalars['ID'];
  priority?: Maybe<Scalars['Int']>;
  stat: GameStat;
  statId: Scalars['ID'];
  updatedAt: Scalars['DateTime'];
};

export type OrganizationLeague = {
  __typename?: 'OrganizationLeague';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  leagueId: Scalars['ID'];
  organizationId: Scalars['ID'];
  updatedAt: Scalars['DateTime'];
};

/** Represents an organization's priority settings for a lifetime statistic */
export type OrganizationLifetimeStatPriority = {
  __typename?: 'OrganizationLifetimeStatPriority';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  organizationId: Scalars['ID'];
  priority?: Maybe<Scalars['Int']>;
  stat: LifetimeStat;
  statId: Scalars['ID'];
  updatedAt: Scalars['DateTime'];
};

/** Represents an organization's priority settings for a season statistic */
export type OrganizationSeasonStatPriority = {
  __typename?: 'OrganizationSeasonStatPriority';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  organizationId: Scalars['ID'];
  priority?: Maybe<Scalars['Int']>;
  stat: SeasonStat;
  statId: Scalars['ID'];
  updatedAt: Scalars['DateTime'];
};

export type OrganizationTeam = {
  __typename?: 'OrganizationTeam';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  organizationId: Scalars['ID'];
  teamId: Scalars['ID'];
  updatedAt: Scalars['DateTime'];
};

export type OrganizationUser = Node & {
  __typename?: 'OrganizationUser';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  organization: Organization;
  organizationId: Scalars['ID'];
  role?: Maybe<Role>;
  status: OrganizationUserStatus;
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['ID'];
};

export type OrganizationUserConnection = Connection & {
  __typename?: 'OrganizationUserConnection';
  edges: Array<OrganizationUserEdge>;
  pageInfo: PageInfo;
};

export type OrganizationUserEdge = Edge & {
  __typename?: 'OrganizationUserEdge';
  cursor: Scalars['String'];
  node: OrganizationUser;
};

/** Status of a user's membership within an organization */
export enum OrganizationUserStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE'
}

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export type Player = Node & {
  __typename?: 'Player';
  bioData?: Maybe<PlayerBioData>;
  createdAt: Scalars['DateTime'];
  doesBelongToCurrentUsersOrganization?: Maybe<Scalars['Boolean']>;
  firstName: Scalars['String'];
  gpm?: Maybe<Scalars['Float']>;
  gpr?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  isOnShadowTeam?: Maybe<Scalars['Boolean']>;
  isOnWatchlist: Scalars['Boolean'];
  isWatchedByCurrentUser?: Maybe<Scalars['Boolean']>;
  knownName: Scalars['String'];
  lastName: Scalars['String'];
  league: League;
  nationality?: Maybe<Nationality>;
  /** Time series data for player ratings including GPR, Z-VAEP, and Z-GPM scores */
  playerRatingTimeSeries?: Maybe<Array<PlayerRatingTimeSeries>>;
  positions?: Maybe<Array<Maybe<Position>>>;
  scoutReports?: Maybe<Array<Maybe<PlayerScoutReport>>>;
  seasonCategoricalScores?: Maybe<Array<Maybe<PlayerSeasonCategoricalScore>>>;
  seasonWeightedAvgMetrics?: Maybe<Array<Maybe<PlayerSeasonWeightedAvgMetrics>>>;
  team?: Maybe<Team>;
  /** Time-decayed Gemini Player Rating (GPR) */
  timeDecayedGPR?: Maybe<Scalars['Float']>;
  updatedAt: Scalars['DateTime'];
  vaep?: Maybe<Scalars['Float']>;
  zGpm?: Maybe<Scalars['Float']>;
  zVaep?: Maybe<Scalars['Float']>;
};


export type PlayerIsOnShadowTeamArgs = {
  shadowTeamId?: InputMaybe<Scalars['ID']>;
};


export type PlayerIsOnWatchlistArgs = {
  watchlistId: Scalars['ID'];
};

export type PlayerAdvancedFilterInput = {
  leagueIds?: InputMaybe<Array<Scalars['ID']>>;
  maxAge?: InputMaybe<Scalars['Float']>;
  maxCarrying?: InputMaybe<Scalars['Float']>;
  maxDribbling?: InputMaybe<Scalars['Float']>;
  maxFitScore?: InputMaybe<Scalars['Float']>;
  maxGkPassing?: InputMaybe<Scalars['Float']>;
  maxGkPositioning?: InputMaybe<Scalars['Float']>;
  maxGkShotStopping?: InputMaybe<Scalars['Float']>;
  maxGpm?: InputMaybe<Scalars['Float']>;
  maxGpr?: InputMaybe<Scalars['Float']>;
  maxHeight?: InputMaybe<Scalars['Float']>;
  maxMonthsRemaining?: InputMaybe<Scalars['Float']>;
  maxPassing?: InputMaybe<Scalars['Float']>;
  maxShooting?: InputMaybe<Scalars['Float']>;
  maxTeamStyleFit?: InputMaybe<Scalars['Float']>;
  maxVaep?: InputMaybe<Scalars['Float']>;
  maxValuation?: InputMaybe<Scalars['Float']>;
  minAge?: InputMaybe<Scalars['Float']>;
  minCarrying?: InputMaybe<Scalars['Float']>;
  minDribbling?: InputMaybe<Scalars['Float']>;
  minFitScore?: InputMaybe<Scalars['Float']>;
  minGkPassing?: InputMaybe<Scalars['Float']>;
  minGkPositioning?: InputMaybe<Scalars['Float']>;
  minGkShotStopping?: InputMaybe<Scalars['Float']>;
  minGpm?: InputMaybe<Scalars['Float']>;
  minGpr?: InputMaybe<Scalars['Float']>;
  minHeight?: InputMaybe<Scalars['Float']>;
  minMonthsRemaining?: InputMaybe<Scalars['Float']>;
  minPassing?: InputMaybe<Scalars['Float']>;
  minShooting?: InputMaybe<Scalars['Float']>;
  minTeamStyleFit?: InputMaybe<Scalars['Float']>;
  minVaep?: InputMaybe<Scalars['Float']>;
  minValuation?: InputMaybe<Scalars['Float']>;
  nationalities?: InputMaybe<Array<Scalars['String']>>;
  outerClusterName?: InputMaybe<Scalars['String']>;
  roleArchetypes?: InputMaybe<Array<Scalars['String']>>;
  teamIds?: InputMaybe<Array<Scalars['ID']>>;
};

export type PlayerBioData = {
  __typename?: 'PlayerBioData';
  age?: Maybe<Scalars['Float']>;
  archetypeGgPlayerKey?: Maybe<Scalars['String']>;
  carryingTransGlobalCategoricalScore?: Maybe<Scalars['Float']>;
  contractExpires?: Maybe<Scalars['DateTime']>;
  contractOption?: Maybe<Scalars['String']>;
  currentClub?: Maybe<Scalars['String']>;
  currentLeague?: Maybe<Scalars['String']>;
  dateOfBirth?: Maybe<Scalars['DateTime']>;
  dribblingTransGlobalCategoricalScore?: Maybe<Scalars['Float']>;
  fitScore?: Maybe<Scalars['Float']>;
  foot?: Maybe<Scalars['String']>;
  generalPosition?: Maybe<Scalars['String']>;
  ggPlayerKey: Scalars['ID'];
  gkPassingTransCategoricalScore?: Maybe<Scalars['Float']>;
  gkPositioningTransCategoricalScore?: Maybe<Scalars['Float']>;
  gkShotStoppingTransCategoricalScore?: Maybe<Scalars['Float']>;
  gpm?: Maybe<Scalars['Float']>;
  gpr?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  injuredUntil?: Maybe<Scalars['DateTime']>;
  isInjured: Scalars['Boolean'];
  llmDerivedSummary?: Maybe<Scalars['String']>;
  nationality?: Maybe<Scalars['String']>;
  opportunities?: Maybe<Array<Scalars['String']>>;
  passingTransGlobalCategoricalScore?: Maybe<Scalars['Float']>;
  playerAgent?: Maybe<Scalars['String']>;
  playerValuation?: Maybe<Scalars['Float']>;
  primaryPosition?: Maybe<Scalars['String']>;
  roleArchetype?: Maybe<Scalars['String']>;
  shotLocationTransGlobalCategoricalScore?: Maybe<Scalars['Float']>;
  strengths?: Maybe<Array<Scalars['String']>>;
  teamStyleFit?: Maybe<Scalars['Float']>;
  threats?: Maybe<Array<Scalars['String']>>;
  timeDecayedSeasonalGpm?: Maybe<Scalars['Float']>;
  timeDecayedVaep?: Maybe<Scalars['Float']>;
  timeDecayedZVaep?: Maybe<Scalars['Float']>;
  vaep?: Maybe<Scalars['Float']>;
  weaknesses?: Maybe<Array<Scalars['String']>>;
  zGpm?: Maybe<Scalars['Float']>;
  zVaep?: Maybe<Scalars['Float']>;
};

export type PlayerConnection = Connection & {
  __typename?: 'PlayerConnection';
  edges: Array<PlayerEdge>;
  pageInfo: PageInfo;
};

/** Represents a summary of player data. */
export type PlayerDataSummary = {
  __typename?: 'PlayerDataSummary';
  /** The date and time when the PlayerDataSummary was created. */
  createdAt: Scalars['String'];
  /** The unique ID of the PlayerDataSummary. */
  id: Scalars['ID'];
  /** The summary generated by OpenAI. */
  openAiSummary?: Maybe<Scalars['String']>;
  /** The OpenAI thread ID associated with the summary. */
  openAiThreadId?: Maybe<Scalars['String']>;
  /** The OpenAI vector store ID associated with the summary. */
  openAiVectorStoreId?: Maybe<Scalars['String']>;
  /** The ID of the organization. */
  organizationId: Scalars['ID'];
  /** The ID of the player. */
  playerId: Scalars['ID'];
  /** The date and time when the PlayerDataSummary was last updated. */
  updatedAt: Scalars['String'];
};

export type PlayerEdge = Edge & {
  __typename?: 'PlayerEdge';
  cursor: Scalars['String'];
  node: Player;
};

/**
 * Input type for basic player filtering by team or league.
 * Only one filter can be applied at a time.
 */
export type PlayerFilterInput = {
  /** Filter players by league ID. */
  leagueId?: InputMaybe<Scalars['ID']>;
  /** Filter players by team ID. */
  teamId?: InputMaybe<Scalars['ID']>;
};

export type PlayerMatch = {
  __typename?: 'PlayerMatch';
  competitionKey: Scalars['String'];
  ground: Scalars['String'];
  id: Scalars['ID'];
  matchDate: Scalars['DateTime'];
  matchId: Scalars['String'];
  oppositionName: Scalars['String'];
  seasonKey: Scalars['String'];
  selectBox: Scalars['String'];
  teamName: Scalars['String'];
};

export type PlayerMatchConnection = {
  __typename?: 'PlayerMatchConnection';
  edges: Array<PlayerMatchEdge>;
  pageInfo: PageInfo;
};

export type PlayerMatchEdge = {
  __typename?: 'PlayerMatchEdge';
  cursor: Scalars['String'];
  node: PlayerMatch;
};

/** Time series data point for player ratings */
export type PlayerRatingTimeSeries = {
  __typename?: 'PlayerRatingTimeSeries';
  /** The season key for this data point */
  ggUnifiedSeasonKey?: Maybe<Scalars['Int']>;
  /** Gemini Player Rating for this season */
  gpr?: Maybe<Scalars['Float']>;
  /** Z-score of GPM for this season */
  zGpm?: Maybe<Scalars['Float']>;
  /** Z-score of VAEP for this season */
  zVaep?: Maybe<Scalars['Float']>;
};

export type PlayerRecommendationResult = {
  __typename?: 'PlayerRecommendationResult';
  currentRank: Scalars['Int'];
  id: Scalars['ID'];
  player: Player;
  previousRank?: Maybe<Scalars['Int']>;
  previousTimestamp?: Maybe<Scalars['DateTime']>;
  rankChange?: Maybe<Scalars['Int']>;
  recommendationScore: Scalars['Float'];
  recommendationType: Scalars['String'];
  timestamp: Scalars['DateTime'];
};

export type PlayerScoutReport = {
  __typename?: 'PlayerScoutReport';
  ggPlayerKey: Scalars['String'];
  ground?: Maybe<Scalars['String']>;
  matches?: Maybe<Array<Maybe<MatchDetail>>>;
  opponent?: Maybe<Scalars['String']>;
  overallScore?: Maybe<Scalars['Float']>;
  qnaText?: Maybe<Scalars['String']>;
  reportDate?: Maybe<Scalars['DateTime']>;
  reportId?: Maybe<Scalars['ID']>;
  scoutName?: Maybe<Scalars['String']>;
  team?: Maybe<Scalars['String']>;
};

export type PlayerSeasonCategoricalScore = {
  __typename?: 'PlayerSeasonCategoricalScore';
  carryingGlobalCategoricalScore?: Maybe<Scalars['Float']>;
  carryingPositionalCategoricalScore?: Maybe<Scalars['Float']>;
  carryingTransGlobalCategoricalScore?: Maybe<Scalars['Float']>;
  carryingTransPositionalCategoricalScore?: Maybe<Scalars['Float']>;
  dribblingGlobalCategoricalScore?: Maybe<Scalars['Float']>;
  dribblingPositionalCategoricalScore?: Maybe<Scalars['Float']>;
  dribblingTransGlobalCategoricalScore?: Maybe<Scalars['Float']>;
  dribblingTransPositionalCategoricalScore?: Maybe<Scalars['Float']>;
  ggPlayerKey: Scalars['String'];
  ggUnifiedSeasonKey: Scalars['Int'];
  gkPassingCategoricalScore?: Maybe<Scalars['Float']>;
  gkPassingTransCategoricalScore?: Maybe<Scalars['Float']>;
  gkPositioningCategoricalScore?: Maybe<Scalars['Float']>;
  gkPositioningTransCategoricalScore?: Maybe<Scalars['Float']>;
  gkShotStoppingCategoricalScore?: Maybe<Scalars['Float']>;
  gkShotStoppingTransCategoricalScore?: Maybe<Scalars['Float']>;
  passingGlobalCategoricalScore?: Maybe<Scalars['Float']>;
  passingPositionalCategoricalScore?: Maybe<Scalars['Float']>;
  passingTransGlobalCategoricalScore?: Maybe<Scalars['Float']>;
  passingTransPositionalCategoricalScore?: Maybe<Scalars['Float']>;
  shotLocationGlobalCategoricalScore?: Maybe<Scalars['Float']>;
  shotLocationPositionalCategoricalScore?: Maybe<Scalars['Float']>;
  shotLocationTransGlobalCategoricalScore?: Maybe<Scalars['Float']>;
  shotLocationTransPositionalCategoricalScore?: Maybe<Scalars['Float']>;
  shotPlacementGlobalCategoricalScore?: Maybe<Scalars['Float']>;
  shotPlacementPositionalCategoricalScore?: Maybe<Scalars['Float']>;
  shotPlacementTransGlobalCategoricalScore?: Maybe<Scalars['Float']>;
  shotPlacementTransPositionalCategoricalScore?: Maybe<Scalars['Float']>;
};

export type PlayerSeasonWeightedAvgMetrics = {
  __typename?: 'PlayerSeasonWeightedAvgMetrics';
  epm?: Maybe<Scalars['Float']>;
  ggPlayerKey: Scalars['String'];
  ggUnifiedSeasonKey: Scalars['Int'];
  rapm?: Maybe<Scalars['Float']>;
  seasonalGpm?: Maybe<Scalars['Float']>;
  spm?: Maybe<Scalars['Float']>;
  stdEpm?: Maybe<Scalars['Float']>;
  stdEpmTransform?: Maybe<Scalars['Float']>;
};

export type Position = {
  __typename?: 'Position';
  abbreviation?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  /** Returns a list of players that match the specified advanced filtering criteria. */
  filterPlayers: PlayerConnection;
  /** Get game stat priorities for the current user's organization */
  gameStatPriorities: Array<StatPriority>;
  /** Retrieves a single comment by its ID */
  getComment: Comment;
  /** Retrieves a single note by its ID */
  getNote: Note;
  getOrganization: Organization;
  getOrganizationTeamByOrganizationIdAndTeamId: OrganizationTeam;
  /** Retrieves a single player by their unique identifier. */
  getPlayer?: Maybe<Player>;
  /** Returns biographical and statistical data for a specific player. */
  getPlayerBioDataByPlayerId?: Maybe<PlayerBioData>;
  /** Retrieves a single player by their unique player.gg identifier. */
  getPlayerByPlayerGGID: Player;
  /** Retrieves a PlayerDataSummary by its ID. */
  getPlayerDataSummary: PlayerDataSummary;
  /** Retrieves a PlayerDataSummary by its organization ID and player ID. */
  getPlayerDataSummaryByOrganizationIdAndPlayerId: PlayerDataSummary;
  /** Retrieves a PlayerDataSummary by the player's GGID and organizationId. */
  getPlayerDataSummaryByPlayerGGIDAndOrganizationId: PlayerDataSummary;
  /** Retrieves a PlayerDataSummary by the player's ID and the authenticated user's organizationId. */
  getPlayerDataSummaryByPlayerId: PlayerDataSummary;
  /** Returns season categorical scores for a player. */
  getPlayerSeasonCategoricalScores: Array<PlayerSeasonCategoricalScore>;
  getShadowTeam?: Maybe<ShadowTeam>;
  getSignedUrlForOpenAiFileId: Scalars['String'];
  /** Retrieves a specific user's profile by their ID. */
  getUser?: Maybe<User>;
  /**
   * Fetches a specific watchlist by ID. Optional playerId parameter to check player's presence
   * in the watchlist.
   */
  getWatchlist?: Maybe<Watchlist>;
  /** Get lifetime stat priorities for the current user's organization */
  lifetimeStatPriorities: Array<StatPriority>;
  /** Lists all comments for a specific note */
  listCommentsByNoteId: CommentConnection;
  /** Returns the current list of feature flags and their status */
  listFeatureFlags?: Maybe<Scalars['JSONObject']>;
  /** Searches and retrieves a list of all leagues. */
  listLeagues: LeagueConnection;
  /** Retrieves a list of leagues filtered by sport. */
  listLeaguesBySportId: LeagueConnection;
  listMyOrganizations: OrganizationConnection;
  /**
   * Searches and retrieves a list of teams that can be added to the organization's roster.
   * Teams that are already associated with the organization are excluded.
   */
  listMyOrganizationsEligibleTeams: TeamConnection;
  /** Retrieves a list of leagues that the organization is interested in or participating in. */
  listMyOrganizationsLeagues: LeagueConnection;
  /** Lists all users in organizations that the current user belongs to */
  listMyOrganizationsOrganizationUsers: OrganizationUserConnection;
  /** Retrieves a list of players that belong to the current user's organization's roster. */
  listMyOrganizationsPlayers: PlayerConnection;
  /** Lists all invitations sent within the current user's organization */
  listMyOrganizationsSentInvitations: InvitationConnection;
  /** Retrieves a list of teams that the organization is tracking or associated with. */
  listMyOrganizationsTeams: TeamConnection;
  /** Lists all invitations received by the current user */
  listMyReceivedInvitations: InvitationConnection;
  /** Lists all invitations sent by the current user */
  listMySentInvitations: InvitationConnection;
  /** Retrieves UserWatchlist records by watchlist id. */
  listMyUserWatchlists: UserWatchlistConnection;
  listNationalities: NationalityConnection;
  /** Lists all notes for a specific player that the current user can see. */
  listNotesByPlayerId: NoteConnection;
  listOpenAiMessagesByThreadId: OpenAiMessageConnection;
  listOrganizations: OrganizationConnection;
  listPlayerMatches: PlayerMatchConnection;
  /** Returns a list of top 10 recommended players based on various factors. */
  listPlayerRecommendations: Array<PlayerRecommendationResult>;
  /** Returns weighted average metrics across seasons for a specific player. */
  listPlayerSeasonWeightedAvgMetricsByPlayerId: Array<PlayerSeasonWeightedAvgMetrics>;
  /** Returns players that match the specified leagues and positions. */
  listPlayersByLeagueIdsAndPositionIds: PlayerConnection;
  /** Returns players that match the specified teams and positions. */
  listPlayersByTeamIdsAndPositionIds: PlayerConnection;
  /** Returns a list of all player profiles used for classification. */
  listProfiles: Array<Maybe<Scalars['String']>>;
  /** Returns a paginated list of players that have been removed from recommendations. */
  listRemovedPlayerRecommendations: PlayerConnection;
  listReportFileKeysForPlayerIdAndOrganizationId: Array<S3File>;
  /** Returns a list of all role archetypes used for player classification. */
  listRoleArchetypes: Array<Maybe<Scalars['String']>>;
  /** Lists all available roles that can be assigned to users within an organization. */
  listRoles: RoleConnection;
  listShadowTeamPlayers: ShadowTeamPlayerConnection;
  listShadowTeams: ShadowTeamConnection;
  /** Returns a paginated list of players similar to the specified player, with a maximum of 100 total results available. */
  listSimilarPlayers: SimilarPlayerConnection;
  /** Retrieves a list of available sports. */
  listSports: SportConnection;
  /** Returns a list of all teams. */
  listTeams: Array<Maybe<Team>>;
  /** Retrieves UserWatchlist records by watchlist id. */
  listUserWatchlistsByWatchlistId: UserWatchlistConnection;
  /** Returns players from a specific watchlist with optional sorting. */
  listWatchlistPlayers: PlayerConnection;
  /** Returns the currently authenticated user's profile information. */
  me?: Maybe<User>;
  searchAvailablePlayersForShadowTeam: PlayerConnection;
  /** Performs a text-based search across players with optional filtering. */
  searchPlayers: PlayerConnection;
  /** Get season stat priorities for the current user's organization */
  seasonStatPriorities: Array<StatPriority>;
};


export type QueryFilterPlayersArgs = {
  after?: InputMaybe<Scalars['String']>;
  filter: PlayerAdvancedFilterInput;
  first?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<SortField>;
  sortOrder?: InputMaybe<OrderByDirection>;
};


export type QueryGetCommentArgs = {
  id: Scalars['ID'];
};


export type QueryGetNoteArgs = {
  id: Scalars['ID'];
};


export type QueryGetOrganizationArgs = {
  id: Scalars['ID'];
};


export type QueryGetOrganizationTeamByOrganizationIdAndTeamIdArgs = {
  organizationId: Scalars['ID'];
  teamId: Scalars['ID'];
};


export type QueryGetPlayerArgs = {
  id: Scalars['ID'];
};


export type QueryGetPlayerBioDataByPlayerIdArgs = {
  playerId: Scalars['ID'];
};


export type QueryGetPlayerByPlayerGgidArgs = {
  playerGGID: Scalars['ID'];
};


export type QueryGetPlayerDataSummaryArgs = {
  id: Scalars['String'];
};


export type QueryGetPlayerDataSummaryByOrganizationIdAndPlayerIdArgs = {
  organizationId: Scalars['String'];
  playerId: Scalars['String'];
};


export type QueryGetPlayerDataSummaryByPlayerGgidAndOrganizationIdArgs = {
  organizationId: Scalars['ID'];
  playerGGID: Scalars['ID'];
};


export type QueryGetPlayerDataSummaryByPlayerIdArgs = {
  playerId: Scalars['ID'];
};


export type QueryGetPlayerSeasonCategoricalScoresArgs = {
  playerId: Scalars['ID'];
};


export type QueryGetShadowTeamArgs = {
  id: Scalars['ID'];
};


export type QueryGetSignedUrlForOpenAiFileIdArgs = {
  fileId: Scalars['String'];
  playerGGID?: InputMaybe<Scalars['ID']>;
  playerId?: InputMaybe<Scalars['ID']>;
};


export type QueryGetUserArgs = {
  id: Scalars['ID'];
};


export type QueryGetWatchlistArgs = {
  id: Scalars['ID'];
  playerId?: InputMaybe<Scalars['ID']>;
};


export type QueryListCommentsByNoteIdArgs = {
  noteId: Scalars['ID'];
};


export type QueryListLeaguesArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type QueryListLeaguesBySportIdArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sportId: Scalars['ID'];
};


export type QueryListMyOrganizationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


export type QueryListMyOrganizationsEligibleTeamsArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type QueryListMyOrganizationsLeaguesArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


export type QueryListMyOrganizationsOrganizationUsersArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


export type QueryListMyOrganizationsPlayersArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  positionIds?: InputMaybe<Array<Scalars['ID']>>;
  sortBy?: InputMaybe<SortField>;
  sortOrder?: InputMaybe<OrderByDirection>;
};


export type QueryListMyOrganizationsSentInvitationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<InvitationStatus>;
};


export type QueryListMyOrganizationsTeamsArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


export type QueryListMyReceivedInvitationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<InvitationStatus>;
};


export type QueryListMySentInvitationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


export type QueryListMyUserWatchlistsArgs = {
  after?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<ListMyUserWatchlistsFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
};


export type QueryListNationalitiesArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


export type QueryListNotesByPlayerIdArgs = {
  playerId: Scalars['ID'];
};


export type QueryListOpenAiMessagesByThreadIdArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  threadId: Scalars['ID'];
};


export type QueryListOrganizationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


export type QueryListPlayerMatchesArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  playerId: Scalars['ID'];
};


export type QueryListPlayerRecommendationsArgs = {
  recommendationType: Scalars['String'];
};


export type QueryListPlayerSeasonWeightedAvgMetricsByPlayerIdArgs = {
  playerId: Scalars['ID'];
};


export type QueryListPlayersByLeagueIdsAndPositionIdsArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  leagueIds: Array<Scalars['ID']>;
  positionIds: Array<Scalars['ID']>;
};


export type QueryListPlayersByTeamIdsAndPositionIdsArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  positionIds: Array<Scalars['ID']>;
  teamIds: Array<Scalars['ID']>;
};


export type QueryListRemovedPlayerRecommendationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


export type QueryListReportFileKeysForPlayerIdAndOrganizationIdArgs = {
  organizationId: Scalars['ID'];
  playerId: Scalars['ID'];
};


export type QueryListRolesArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


export type QueryListShadowTeamPlayersArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
  shadowTeamId: Scalars['ID'];
};


export type QueryListShadowTeamsArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ListShadowTeamOrderByInput>;
};


export type QueryListSimilarPlayersArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  leagueIds?: InputMaybe<Array<Scalars['String']>>;
  maxAge?: InputMaybe<Scalars['Int']>;
  maxMonthsRemaining?: InputMaybe<Scalars['Float']>;
  maxValuation?: InputMaybe<Scalars['Float']>;
  minAge?: InputMaybe<Scalars['Int']>;
  minMonthsRemaining?: InputMaybe<Scalars['Float']>;
  minValuation?: InputMaybe<Scalars['Float']>;
  playerId: Scalars['ID'];
  sortBy?: InputMaybe<SimilarPlayerSortField>;
  sortOrder?: InputMaybe<SortOrder>;
};


export type QueryListSportsArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


export type QueryListUserWatchlistsByWatchlistIdArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  watchlistId: Scalars['ID'];
};


export type QueryListWatchlistPlayersArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<SortField>;
  sortOrder?: InputMaybe<OrderByDirection>;
  watchlistId: Scalars['ID'];
};


export type QuerySearchAvailablePlayersForShadowTeamArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
  shadowTeamId: Scalars['ID'];
  sortBy?: InputMaybe<SortField>;
  sortOrder?: InputMaybe<OrderByDirection>;
};


export type QuerySearchPlayersArgs = {
  after?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<PlayerFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
  shadowTeamId?: InputMaybe<Scalars['ID']>;
  sortBy?: InputMaybe<SortField>;
  sortOrder?: InputMaybe<OrderByDirection>;
  watchlistId?: InputMaybe<Scalars['ID']>;
};

export type RecommendationType = {
  __typename?: 'RecommendationType';
  id: Scalars['ID'];
  label: Scalars['String'];
  type: Scalars['String'];
};

export type RefreshTokenInput = {
  refreshToken: Scalars['String'];
};

export type RejectInvitationInput = {
  id: Scalars['ID'];
};

export type RemovePlayerFromWatchlistInput = {
  playerId: Scalars['ID'];
  watchlistId: Scalars['ID'];
};

export type RemoveShadowTeamPlayerInput = {
  playerId: Scalars['ID'];
  shadowTeamId: Scalars['ID'];
};

export type ResendInvitationInput = {
  id: Scalars['ID'];
};

export type ResendOtpInput = {
  identifier: Scalars['String'];
};

export type Role = Node & {
  __typename?: 'Role';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: RoleName;
  updatedAt: Scalars['DateTime'];
};

export type RoleConnection = Connection & {
  __typename?: 'RoleConnection';
  edges: Array<RoleEdge>;
  pageInfo: PageInfo;
};

export type RoleEdge = Edge & {
  __typename?: 'RoleEdge';
  cursor: Scalars['String'];
  node: Role;
};

/** Available user role types within an organization */
export enum RoleName {
  Admin = 'ADMIN',
  Manager = 'MANAGER',
  Member = 'MEMBER'
}

export type S3File = {
  __typename?: 'S3File';
  key: Scalars['String'];
  modifiedAt: Scalars['DateTime'];
};

/** Base season statistic type that defines a measurable season-level metric */
export type SeasonStat = {
  __typename?: 'SeasonStat';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  sportId: Scalars['ID'];
  type: StatType;
  updatedAt: Scalars['DateTime'];
};

export type SendMyDevicesAPushNotificationInput = {
  body: Scalars['String'];
  title: Scalars['String'];
};

export type ShadowTeam = {
  __typename?: 'ShadowTeam';
  assignedPlayers?: Maybe<Array<ShadowTeamPlayer>>;
  avgTeamGPR: Scalars['Float'];
  createdAt: Scalars['DateTime'];
  formation?: Maybe<ShadowTeamFormation>;
  id: Scalars['ID'];
  name: Scalars['String'];
  players?: Maybe<Array<ShadowTeamPlayer>>;
  updatedAt: Scalars['DateTime'];
};

export type ShadowTeamConnection = {
  __typename?: 'ShadowTeamConnection';
  edges: Array<ShadowTeamEdge>;
  pageInfo: PageInfo;
};

export type ShadowTeamEdge = {
  __typename?: 'ShadowTeamEdge';
  cursor: Scalars['String'];
  node: ShadowTeam;
};

export enum ShadowTeamFormation {
  F_334 = 'F_334',
  F_343 = 'F_343',
  F_352 = 'F_352',
  F_361 = 'F_361',
  F_424 = 'F_424',
  F_433 = 'F_433',
  F_442 = 'F_442',
  F_451 = 'F_451',
  F_532 = 'F_532',
  F_541 = 'F_541',
  F_3241 = 'F_3241',
  F_3313 = 'F_3313',
  F_3331 = 'F_3331',
  F_3412 = 'F_3412',
  F_4123 = 'F_4123',
  F_4132 = 'F_4132',
  F_4213 = 'F_4213',
  F_4222 = 'F_4222',
  F_4231 = 'F_4231',
  F_4312 = 'F_4312',
  F_4321 = 'F_4321',
  F_4411 = 'F_4411',
  F_5221 = 'F_5221',
  F_41212 = 'F_41212'
}

export type ShadowTeamPlayer = {
  __typename?: 'ShadowTeamPlayer';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  isManualAdding: Scalars['Boolean'];
  order?: Maybe<Scalars['Int']>;
  player: Player;
  playerId: Scalars['ID'];
  position?: Maybe<Scalars['Int']>;
  shadowTeamId: Scalars['ID'];
  updatedAt: Scalars['DateTime'];
};

export type ShadowTeamPlayerConnection = {
  __typename?: 'ShadowTeamPlayerConnection';
  edges: Array<ShadowTeamPlayerEdge>;
  pageInfo: PageInfo;
};

export type ShadowTeamPlayerEdge = {
  __typename?: 'ShadowTeamPlayerEdge';
  cursor: Scalars['String'];
  node: ShadowTeamPlayer;
};

export type ShadowTeamPlayerPositionInput = {
  order: Scalars['Int'];
  position: Scalars['Int'];
  shadowPlayerId: Scalars['ID'];
};

export type SignInInput = {
  /** The identifier used to sign in. This can be an email or phone number. */
  identifier: Scalars['String'];
};

export type SignInResult = {
  __typename?: 'SignInResult';
  data: ChallengeResult;
  message: Scalars['String'];
};

export type SimilarPlayerConnection = Connection & {
  __typename?: 'SimilarPlayerConnection';
  edges: Array<SimilarPlayerEdge>;
  pageInfo: PageInfo;
};

export type SimilarPlayerEdge = Edge & {
  __typename?: 'SimilarPlayerEdge';
  cursor: Scalars['String'];
  node: SimilarPlayerResult;
};

export type SimilarPlayerResult = Node & {
  __typename?: 'SimilarPlayerResult';
  id: Scalars['ID'];
  player?: Maybe<Player>;
  similarityScore?: Maybe<Scalars['Float']>;
};

export enum SimilarPlayerSortField {
  Carrying = 'carrying',
  ContractExpires = 'contractExpires',
  Dribbling = 'dribbling',
  FitScore = 'fitScore',
  GkPassing = 'gkPassing',
  GkPositioning = 'gkPositioning',
  GkShotStopping = 'gkShotStopping',
  Gpm = 'gpm',
  Gpr = 'gpr',
  MonthsRemaining = 'monthsRemaining',
  Passing = 'passing',
  PlayerValuation = 'playerValuation',
  Shooting = 'shooting',
  SimilarityScore = 'similarityScore',
  TeamStyleFit = 'teamStyleFit'
}

export enum SortField {
  Carrying = 'carrying',
  ContractExpires = 'contractExpires',
  Dribbling = 'dribbling',
  FitScore = 'fitScore',
  GkPassing = 'gkPassing',
  GkPositioning = 'gkPositioning',
  GkShotStopping = 'gkShotStopping',
  Gpm = 'gpm',
  Gpr = 'gpr',
  MonthsRemaining = 'monthsRemaining',
  Passing = 'passing',
  PlayerValuation = 'playerValuation',
  Shooting = 'shooting',
  TeamStyleFit = 'teamStyleFit'
}

export enum SortOrder {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type Sport = Node & {
  __typename?: 'Sport';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type SportConnection = Connection & {
  __typename?: 'SportConnection';
  edges: Array<SportEdge>;
  pageInfo: PageInfo;
};

export type SportEdge = Edge & {
  __typename?: 'SportEdge';
  cursor: Scalars['String'];
  node: Sport;
};

export type StatPriority = Node & {
  __typename?: 'StatPriority';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  organizationId: Scalars['ID'];
  priority?: Maybe<Scalars['Float']>;
  statId: Scalars['ID'];
  updatedAt: Scalars['DateTime'];
};

export type StatPriorityInput = {
  priority?: InputMaybe<Scalars['Float']>;
  statId: Scalars['ID'];
};

/** Enum representing the possible types of statistics */
export enum StatType {
  Float = 'FLOAT',
  Int = 'INT',
  Varchar = 'VARCHAR'
}

export type Team = Node & {
  __typename?: 'Team';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  isMyOrganizationTeam?: Maybe<Scalars['Boolean']>;
  league?: Maybe<League>;
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type TeamConnection = Connection & {
  __typename?: 'TeamConnection';
  edges: Array<TeamEdge>;
  pageInfo: PageInfo;
};

export type TeamEdge = Edge & {
  __typename?: 'TeamEdge';
  cursor: Scalars['String'];
  node: Team;
};

export type UpdateCommentInput = {
  body?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
};

export type UpdateMyProfileInput = {
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type UpdateNoteInput = {
  body?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  isPublic?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
};

export type UpdateOrganizationInput = {
  currencyCode?: InputMaybe<CurrencyCode>;
  id: Scalars['ID'];
  intakeFormUrl?: InputMaybe<Scalars['URL']>;
  name?: InputMaybe<Scalars['String']>;
  sportId?: InputMaybe<Scalars['ID']>;
};

export type UpdateShadowTeamInput = {
  formation?: InputMaybe<ShadowTeamFormation>;
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
  playerPositions?: InputMaybe<Array<ShadowTeamPlayerPositionInput>>;
};

export type UpdateUserWatchlistPositionInput = {
  newPosition: Scalars['Int'];
  watchlistId: Scalars['ID'];
};

export type UpdateWatchlistInput = {
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateWatchlistPlayerPositionInput = {
  newPosition: Scalars['Int'];
  playerId: Scalars['ID'];
  watchlistId: Scalars['ID'];
};

export type UpdateWatchlistPlayerPositionsInput = {
  newPositions: Array<NewPosition>;
  watchlistId: Scalars['ID'];
};

export type User = {
  __typename?: 'User';
  cognitoUser?: Maybe<CognitoUser>;
  createdAt: Scalars['DateTime'];
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isAdmin: Scalars['Boolean'];
  organization?: Maybe<Organization>;
  organizationId?: Maybe<Scalars['ID']>;
  phoneNumber: Scalars['String'];
  role?: Maybe<Role>;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

/** Join record between users and watchlists. */
export type UserWatchlist = Node & {
  __typename?: 'UserWatchlist';
  /** The date and time the record was created. */
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  isDefault: Scalars['Boolean'];
  /** The organization associated with the record. */
  organization: Organization;
  /** The id of the organization associated with the record. */
  organizationId: Scalars['ID'];
  /** For sorting, the user defined position the record should appear in. */
  position: Scalars['Int'];
  /** The role of the user on the watchlist. */
  role: UserWatchlistRole;
  /** The date and time the record was last updated. */
  updatedAt: Scalars['DateTime'];
  /** The user associated with the record. */
  user: User;
  /** The id of the user associated with the record. */
  userId: Scalars['ID'];
  /** The watchlist associated with the record. */
  watchlist: Watchlist;
  /** The id of the watchlist associated with the record. */
  watchlistId: Scalars['ID'];
};

export type UserWatchlistConnection = Connection & {
  __typename?: 'UserWatchlistConnection';
  edges: Array<UserWatchlistEdge>;
  pageInfo: PageInfo;
};

export type UserWatchlistEdge = Edge & {
  __typename?: 'UserWatchlistEdge';
  cursor: Scalars['String'];
  node: UserWatchlist;
};

/** The valid roles for collaborators on a watchlist. */
export enum UserWatchlistRole {
  Editor = 'EDITOR',
  Owner = 'OWNER',
  Viewer = 'VIEWER'
}

export enum ValidationCodes {
  MissingFirstName = 'MISSING_FIRST_NAME',
  MissingLastName = 'MISSING_LAST_NAME',
  MissingTitle = 'MISSING_TITLE'
}

export type ValidationResponse = {
  __typename?: 'ValidationResponse';
  codes: Array<ValidationCodes>;
};

export type Watchlist = Node & {
  __typename?: 'Watchlist';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  isOnWatchlist: Scalars['Boolean'];
  name: Scalars['String'];
  players: PlayerConnection;
  updatedAt: Scalars['DateTime'];
  users?: Maybe<Array<Maybe<User>>>;
};


export type WatchlistIsOnWatchlistArgs = {
  playerId?: InputMaybe<Scalars['ID']>;
};


export type WatchlistPlayersArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<SortField>;
  sortOrder?: InputMaybe<OrderByDirection>;
};

export type WatchlistConnection = Connection & {
  __typename?: 'WatchlistConnection';
  edges: Array<WatchlistEdge>;
  pageInfo: PageInfo;
};

export type WatchlistEdge = Edge & {
  __typename?: 'WatchlistEdge';
  cursor: Scalars['String'];
  node: Watchlist;
};

export type AuthValidationResponseFragment = { __typename?: 'ValidationResponse', codes: Array<ValidationCodes> };

export type AuthCognitoUserAttributeFragment = { __typename?: 'CognitoUserAttribute', Name: string, Value: string };

export type AuthOrganizationFragment = { __typename?: 'Organization', id: string, name: string, currencyCode: CurrencyCode, intakeFormUrl?: any | null, sportId?: string | null, organizationTeams: Array<{ __typename?: 'OrganizationTeam', id: string, teamId: string }>, recommendationTypes: Array<{ __typename?: 'RecommendationType', type: string, label: string }> };

export type AuthCognitoUserFragment = { __typename?: 'CognitoUser', Username: string, Enabled: boolean, UserStatus: CognitoUserStatus, UserAttributes?: Array<{ __typename?: 'CognitoUserAttribute', Name: string, Value: string }> | null, Attributes?: Array<{ __typename?: 'CognitoUserAttribute', Name: string, Value: string }> | null };

export type AuthAuthenticationResultFragment = { __typename?: 'AuthenticationResult', accessToken?: string | null, expiresIn?: number | null, tokenType?: string | null, refreshToken?: string | null, idToken?: string | null };

export type AuthSignInResultFragment = { __typename?: 'SignInResult', message: string, data: { __typename?: 'ChallengeResult', ChallengeName?: string | null, Session?: string | null, ChallengeParameters?: { __typename?: 'ChallengeParametersResult', USERNAME?: string | null, attempts?: string | null, attemptsLeft?: string | null, email?: string | null, maxAttempts?: string | null } | null } };

export type AuthGetUserQueryVariables = Exact<{ [key: string]: never; }>;


export type AuthGetUserQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: string, email?: string | null, organizationId?: string | null, phoneNumber: string, isAdmin: boolean, title?: string | null, cognitoUser?: { __typename?: 'CognitoUser', Username: string, Enabled: boolean, UserStatus: CognitoUserStatus, UserAttributes?: Array<{ __typename?: 'CognitoUserAttribute', Name: string, Value: string }> | null, Attributes?: Array<{ __typename?: 'CognitoUserAttribute', Name: string, Value: string }> | null } | null, organization?: { __typename?: 'Organization', id: string, name: string, currencyCode: CurrencyCode, intakeFormUrl?: any | null, sportId?: string | null, organizationTeams: Array<{ __typename?: 'OrganizationTeam', id: string, teamId: string }>, recommendationTypes: Array<{ __typename?: 'RecommendationType', type: string, label: string }> } | null } | null };

export type AuthRefreshTokenMutationVariables = Exact<{
  input: RefreshTokenInput;
}>;


export type AuthRefreshTokenMutation = { __typename?: 'Mutation', refreshToken: { __typename?: 'AuthenticationResultWithMessage', message?: string | null, data?: { __typename?: 'AuthenticationResult', accessToken?: string | null, expiresIn?: number | null, tokenType?: string | null, refreshToken?: string | null, idToken?: string | null } | null } };

export type MessageFragment = { __typename?: 'Message', message: string };

export type AuthChallengeParametersResultFragment = { __typename?: 'ChallengeParametersResult', USERNAME?: string | null, attempts?: string | null, attemptsLeft?: string | null, email?: string | null, maxAttempts?: string | null };

export type AuthChallengeResultFragment = { __typename?: 'ChallengeResult', ChallengeName?: string | null, Session?: string | null, ChallengeParameters?: { __typename?: 'ChallengeParametersResult', USERNAME?: string | null, attempts?: string | null, attemptsLeft?: string | null, email?: string | null, maxAttempts?: string | null } | null };

export type AuthAuthenticationResultWithMessageFragment = { __typename?: 'AuthenticationResultWithMessage', message?: string | null, data?: { __typename?: 'AuthenticationResult', accessToken?: string | null, expiresIn?: number | null, tokenType?: string | null, refreshToken?: string | null, idToken?: string | null } | null };

export type AuthConfirmSignInResultFragment = { __typename?: 'ConfirmSignInResult', errorMessage?: { __typename?: 'Message', message: string } | null, authResult?: { __typename?: 'AuthenticationResultWithMessage', message?: string | null, data?: { __typename?: 'AuthenticationResult', accessToken?: string | null, expiresIn?: number | null, tokenType?: string | null, refreshToken?: string | null, idToken?: string | null } | null } | null, signInResult?: { __typename?: 'SignInResult', message: string, data: { __typename?: 'ChallengeResult', ChallengeName?: string | null, Session?: string | null, ChallengeParameters?: { __typename?: 'ChallengeParametersResult', USERNAME?: string | null, attempts?: string | null, attemptsLeft?: string | null, email?: string | null, maxAttempts?: string | null } | null } } | null };

export type AuthUserFragment = { __typename?: 'User', id: string, email?: string | null, organizationId?: string | null, phoneNumber: string, isAdmin: boolean, title?: string | null, cognitoUser?: { __typename?: 'CognitoUser', Username: string, Enabled: boolean, UserStatus: CognitoUserStatus, UserAttributes?: Array<{ __typename?: 'CognitoUserAttribute', Name: string, Value: string }> | null, Attributes?: Array<{ __typename?: 'CognitoUserAttribute', Name: string, Value: string }> | null } | null, organization?: { __typename?: 'Organization', id: string, name: string, currencyCode: CurrencyCode, intakeFormUrl?: any | null, sportId?: string | null, organizationTeams: Array<{ __typename?: 'OrganizationTeam', id: string, teamId: string }>, recommendationTypes: Array<{ __typename?: 'RecommendationType', type: string, label: string }> } | null };

export type AuthSignInMutationVariables = Exact<{
  input: SignInInput;
}>;


export type AuthSignInMutation = { __typename?: 'Mutation', signIn: { __typename?: 'SignInResult', message: string, data: { __typename?: 'ChallengeResult', Session?: string | null } } };

export type AuthResendVerifyIdentifierMutationVariables = Exact<{
  input: ResendOtpInput;
}>;


export type AuthResendVerifyIdentifierMutation = { __typename?: 'Mutation', resendOTP: { __typename?: 'SignInResult', data: { __typename?: 'ChallengeResult', Session?: string | null } } };

export type AuthValidateCurrentUserMutationVariables = Exact<{ [key: string]: never; }>;


export type AuthValidateCurrentUserMutation = { __typename?: 'Mutation', validateCurrentUser: { __typename?: 'ValidationResponse', codes: Array<ValidationCodes> } };

export type AuthConfirmSignInMutationVariables = Exact<{
  input: ConfirmSignInInput;
}>;


export type AuthConfirmSignInMutation = { __typename?: 'Mutation', confirmSignIn: { __typename?: 'ConfirmSignInResult', errorMessage?: { __typename?: 'Message', message: string } | null, authResult?: { __typename?: 'AuthenticationResultWithMessage', message?: string | null, data?: { __typename?: 'AuthenticationResult', accessToken?: string | null, expiresIn?: number | null, tokenType?: string | null, refreshToken?: string | null, idToken?: string | null } | null } | null, signInResult?: { __typename?: 'SignInResult', message: string, data: { __typename?: 'ChallengeResult', ChallengeName?: string | null, Session?: string | null, ChallengeParameters?: { __typename?: 'ChallengeParametersResult', USERNAME?: string | null, attempts?: string | null, attemptsLeft?: string | null, email?: string | null, maxAttempts?: string | null } | null } } | null } };

export type AuthUpdateMyProfileMutationVariables = Exact<{
  input: UpdateMyProfileInput;
}>;


export type AuthUpdateMyProfileMutation = { __typename?: 'Mutation', updateMyProfile: { __typename?: 'User', id: string, email?: string | null, organizationId?: string | null, phoneNumber: string, isAdmin: boolean, title?: string | null, cognitoUser?: { __typename?: 'CognitoUser', Username: string, Enabled: boolean, UserStatus: CognitoUserStatus, UserAttributes?: Array<{ __typename?: 'CognitoUserAttribute', Name: string, Value: string }> | null, Attributes?: Array<{ __typename?: 'CognitoUserAttribute', Name: string, Value: string }> | null } | null, organization?: { __typename?: 'Organization', id: string, name: string, currencyCode: CurrencyCode, intakeFormUrl?: any | null, sportId?: string | null, organizationTeams: Array<{ __typename?: 'OrganizationTeam', id: string, teamId: string }>, recommendationTypes: Array<{ __typename?: 'RecommendationType', type: string, label: string }> } | null } };

export type AuthSignOutMutationVariables = Exact<{ [key: string]: never; }>;


export type AuthSignOutMutation = { __typename?: 'Mutation', signOut: { __typename?: 'Message', message: string } };

export type AuthMeQueryVariables = Exact<{ [key: string]: never; }>;


export type AuthMeQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: string, email?: string | null, organizationId?: string | null, phoneNumber: string, isAdmin: boolean, title?: string | null, cognitoUser?: { __typename?: 'CognitoUser', Username: string, Enabled: boolean, UserStatus: CognitoUserStatus, UserAttributes?: Array<{ __typename?: 'CognitoUserAttribute', Name: string, Value: string }> | null, Attributes?: Array<{ __typename?: 'CognitoUserAttribute', Name: string, Value: string }> | null } | null, organization?: { __typename?: 'Organization', id: string, name: string, currencyCode: CurrencyCode, intakeFormUrl?: any | null, sportId?: string | null, organizationTeams: Array<{ __typename?: 'OrganizationTeam', id: string, teamId: string }>, recommendationTypes: Array<{ __typename?: 'RecommendationType', type: string, label: string }> } | null } | null };

export type AuthDeactivateMeMutationVariables = Exact<{ [key: string]: never; }>;


export type AuthDeactivateMeMutation = { __typename?: 'Mutation', deactivateMe: { __typename?: 'User', id: string, email?: string | null, organizationId?: string | null, phoneNumber: string, isAdmin: boolean, title?: string | null, cognitoUser?: { __typename?: 'CognitoUser', Username: string, Enabled: boolean, UserStatus: CognitoUserStatus, UserAttributes?: Array<{ __typename?: 'CognitoUserAttribute', Name: string, Value: string }> | null, Attributes?: Array<{ __typename?: 'CognitoUserAttribute', Name: string, Value: string }> | null } | null, organization?: { __typename?: 'Organization', id: string, name: string, currencyCode: CurrencyCode, intakeFormUrl?: any | null, sportId?: string | null, organizationTeams: Array<{ __typename?: 'OrganizationTeam', id: string, teamId: string }>, recommendationTypes: Array<{ __typename?: 'RecommendationType', type: string, label: string }> } | null } };

export type ComparePlayersPlayerResultFragment = { __typename?: 'SimilarPlayerResult', similarityScore?: number | null, player?: { __typename?: 'Player', id: string, knownName: string, firstName: string, lastName: string, isWatchedByCurrentUser?: boolean | null, timeDecayedGPR?: number | null, positions?: Array<{ __typename?: 'Position', id: string, name: string, abbreviation?: string | null } | null> | null, team?: { __typename?: 'Team', id: string, name: string } | null, bioData?: { __typename?: 'PlayerBioData', ggPlayerKey: string, fitScore?: number | null, teamStyleFit?: number | null, playerValuation?: number | null, carryingTransGlobalCategoricalScore?: number | null, dribblingTransGlobalCategoricalScore?: number | null, passingTransGlobalCategoricalScore?: number | null, shotLocationTransGlobalCategoricalScore?: number | null, gkPassingTransCategoricalScore?: number | null, gkPositioningTransCategoricalScore?: number | null, gkShotStoppingTransCategoricalScore?: number | null, contractExpires?: string | null, gpr?: number | null } | null } | null };

export type ComparePlayersSimilarPlayerConnectionFragment = { __typename?: 'SimilarPlayerConnection', edges: Array<{ __typename?: 'SimilarPlayerEdge', node: { __typename?: 'SimilarPlayerResult', similarityScore?: number | null, player?: { __typename?: 'Player', id: string, knownName: string, firstName: string, lastName: string, isWatchedByCurrentUser?: boolean | null, timeDecayedGPR?: number | null, positions?: Array<{ __typename?: 'Position', id: string, name: string, abbreviation?: string | null } | null> | null, team?: { __typename?: 'Team', id: string, name: string } | null, bioData?: { __typename?: 'PlayerBioData', ggPlayerKey: string, fitScore?: number | null, teamStyleFit?: number | null, playerValuation?: number | null, carryingTransGlobalCategoricalScore?: number | null, dribblingTransGlobalCategoricalScore?: number | null, passingTransGlobalCategoricalScore?: number | null, shotLocationTransGlobalCategoricalScore?: number | null, gkPassingTransCategoricalScore?: number | null, gkPositioningTransCategoricalScore?: number | null, gkShotStoppingTransCategoricalScore?: number | null, contractExpires?: string | null, gpr?: number | null } | null } | null } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor?: string | null } };

export type ComparePlayersListSimilarPlayersQueryVariables = Exact<{
  playerId: Scalars['ID'];
  first?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  maxValuation?: InputMaybe<Scalars['Float']>;
  maxAge?: InputMaybe<Scalars['Int']>;
  minAge?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<SimilarPlayerSortField>;
  sortOrder?: InputMaybe<SortOrder>;
}>;


export type ComparePlayersListSimilarPlayersQuery = { __typename?: 'Query', listSimilarPlayers: { __typename?: 'SimilarPlayerConnection', edges: Array<{ __typename?: 'SimilarPlayerEdge', node: { __typename?: 'SimilarPlayerResult', similarityScore?: number | null, player?: { __typename?: 'Player', id: string, knownName: string, firstName: string, lastName: string, isWatchedByCurrentUser?: boolean | null, timeDecayedGPR?: number | null, positions?: Array<{ __typename?: 'Position', id: string, name: string, abbreviation?: string | null } | null> | null, team?: { __typename?: 'Team', id: string, name: string } | null, bioData?: { __typename?: 'PlayerBioData', ggPlayerKey: string, fitScore?: number | null, teamStyleFit?: number | null, playerValuation?: number | null, carryingTransGlobalCategoricalScore?: number | null, dribblingTransGlobalCategoricalScore?: number | null, passingTransGlobalCategoricalScore?: number | null, shotLocationTransGlobalCategoricalScore?: number | null, gkPassingTransCategoricalScore?: number | null, gkPositioningTransCategoricalScore?: number | null, gkShotStoppingTransCategoricalScore?: number | null, contractExpires?: string | null, gpr?: number | null } | null } | null } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor?: string | null } } };

export type InvitationsOrganizationConnectionFragment = { __typename?: 'OrganizationConnection', edges: Array<{ __typename?: 'OrganizationEdge', cursor: string, node: { __typename?: 'Organization', id: string, name: string, currencyCode: CurrencyCode, intakeFormUrl?: any | null, sport?: { __typename?: 'Sport', id: string, name: string } | null } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor?: string | null } };

export type InvitationsOrganizationEdgeFragment = { __typename?: 'OrganizationEdge', cursor: string, node: { __typename?: 'Organization', id: string, name: string, currencyCode: CurrencyCode, intakeFormUrl?: any | null, sport?: { __typename?: 'Sport', id: string, name: string } | null } };

export type InvitationsOrganizationFragment = { __typename?: 'Organization', id: string, name: string, currencyCode: CurrencyCode, intakeFormUrl?: any | null, sport?: { __typename?: 'Sport', id: string, name: string } | null };

export type InvitationsRoleConnectionFragment = { __typename?: 'RoleConnection', edges: Array<{ __typename?: 'RoleEdge', cursor: string, node: { __typename?: 'Role', id: string, name: RoleName } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor?: string | null } };

export type InvitationsRoleEdgeFragment = { __typename?: 'RoleEdge', cursor: string, node: { __typename?: 'Role', id: string, name: RoleName } };

export type InvitationsRoleFragment = { __typename?: 'Role', id: string, name: RoleName };

export type InvitationsSportConnectionFragment = { __typename?: 'SportConnection', edges: Array<{ __typename?: 'SportEdge', cursor: string, node: { __typename?: 'Sport', id: string, name: string } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor?: string | null } };

export type InvitationsSportEdgeFragment = { __typename?: 'SportEdge', cursor: string, node: { __typename?: 'Sport', id: string, name: string } };

export type InvitationsSportFragment = { __typename?: 'Sport', id: string, name: string };

export type InvitationsInvitationConnectionFragment = { __typename?: 'InvitationConnection', edges: Array<{ __typename?: 'InvitationEdge', cursor: string, node: { __typename?: 'Invitation', id: string, status: InvitationStatus, phoneNumber: string, receiver?: { __typename?: 'User', id: string, cognitoUser?: { __typename?: 'CognitoUser', Username: string, Attributes?: Array<{ __typename?: 'CognitoUserAttribute', Name: string, Value: string }> | null } | null } | null, user: { __typename?: 'User', id: string, organization?: { __typename?: 'Organization', id: string, name: string } | null, cognitoUser?: { __typename?: 'CognitoUser', Username: string, Attributes?: Array<{ __typename?: 'CognitoUserAttribute', Name: string, Value: string }> | null } | null }, role: { __typename?: 'Role', id: string, name: RoleName } } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor?: string | null } };

export type InvitationsInvitationEdgeFragment = { __typename?: 'InvitationEdge', cursor: string, node: { __typename?: 'Invitation', id: string, status: InvitationStatus, phoneNumber: string, receiver?: { __typename?: 'User', id: string, cognitoUser?: { __typename?: 'CognitoUser', Username: string, Attributes?: Array<{ __typename?: 'CognitoUserAttribute', Name: string, Value: string }> | null } | null } | null, user: { __typename?: 'User', id: string, organization?: { __typename?: 'Organization', id: string, name: string } | null, cognitoUser?: { __typename?: 'CognitoUser', Username: string, Attributes?: Array<{ __typename?: 'CognitoUserAttribute', Name: string, Value: string }> | null } | null }, role: { __typename?: 'Role', id: string, name: RoleName } } };

export type InvitationsInvitationFragment = { __typename?: 'Invitation', id: string, status: InvitationStatus, phoneNumber: string, receiver?: { __typename?: 'User', id: string, cognitoUser?: { __typename?: 'CognitoUser', Username: string, Attributes?: Array<{ __typename?: 'CognitoUserAttribute', Name: string, Value: string }> | null } | null } | null, user: { __typename?: 'User', id: string, organization?: { __typename?: 'Organization', id: string, name: string } | null, cognitoUser?: { __typename?: 'CognitoUser', Username: string, Attributes?: Array<{ __typename?: 'CognitoUserAttribute', Name: string, Value: string }> | null } | null }, role: { __typename?: 'Role', id: string, name: RoleName } };

export type InvitationsOrganizationUserConnectionFragment = { __typename?: 'OrganizationUserConnection', edges: Array<{ __typename?: 'OrganizationUserEdge', cursor: string, node: { __typename?: 'OrganizationUser', id: string, status: OrganizationUserStatus, role?: { __typename?: 'Role', id: string, name: RoleName } | null, user: { __typename?: 'User', id: string, title?: string | null, cognitoUser?: { __typename?: 'CognitoUser', Username: string, Attributes?: Array<{ __typename?: 'CognitoUserAttribute', Name: string, Value: string }> | null } | null } } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor?: string | null } };

export type InvitationsOrganizationUserEdgeFragment = { __typename?: 'OrganizationUserEdge', cursor: string, node: { __typename?: 'OrganizationUser', id: string, status: OrganizationUserStatus, role?: { __typename?: 'Role', id: string, name: RoleName } | null, user: { __typename?: 'User', id: string, title?: string | null, cognitoUser?: { __typename?: 'CognitoUser', Username: string, Attributes?: Array<{ __typename?: 'CognitoUserAttribute', Name: string, Value: string }> | null } | null } } };

export type InvitationsOrganizationUserFragment = { __typename?: 'OrganizationUser', id: string, status: OrganizationUserStatus, role?: { __typename?: 'Role', id: string, name: RoleName } | null, user: { __typename?: 'User', id: string, title?: string | null, cognitoUser?: { __typename?: 'CognitoUser', Username: string, Attributes?: Array<{ __typename?: 'CognitoUserAttribute', Name: string, Value: string }> | null } | null } };

export type InvitationsListMySentInvitationsQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
}>;


export type InvitationsListMySentInvitationsQuery = { __typename?: 'Query', listMySentInvitations: { __typename?: 'InvitationConnection', edges: Array<{ __typename?: 'InvitationEdge', cursor: string, node: { __typename?: 'Invitation', id: string, status: InvitationStatus, phoneNumber: string, receiver?: { __typename?: 'User', id: string, cognitoUser?: { __typename?: 'CognitoUser', Username: string, Attributes?: Array<{ __typename?: 'CognitoUserAttribute', Name: string, Value: string }> | null } | null } | null, user: { __typename?: 'User', id: string, organization?: { __typename?: 'Organization', id: string, name: string } | null, cognitoUser?: { __typename?: 'CognitoUser', Username: string, Attributes?: Array<{ __typename?: 'CognitoUserAttribute', Name: string, Value: string }> | null } | null }, role: { __typename?: 'Role', id: string, name: RoleName } } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor?: string | null } } };

export type InvitationsListMyOrganiationsSentInvitationsQueryVariables = Exact<{
  status?: InputMaybe<InvitationStatus>;
  first?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
}>;


export type InvitationsListMyOrganiationsSentInvitationsQuery = { __typename?: 'Query', listMyOrganizationsSentInvitations: { __typename?: 'InvitationConnection', edges: Array<{ __typename?: 'InvitationEdge', cursor: string, node: { __typename?: 'Invitation', id: string, status: InvitationStatus, phoneNumber: string, receiver?: { __typename?: 'User', id: string, cognitoUser?: { __typename?: 'CognitoUser', Username: string, Attributes?: Array<{ __typename?: 'CognitoUserAttribute', Name: string, Value: string }> | null } | null } | null, user: { __typename?: 'User', id: string, organization?: { __typename?: 'Organization', id: string, name: string } | null, cognitoUser?: { __typename?: 'CognitoUser', Username: string, Attributes?: Array<{ __typename?: 'CognitoUserAttribute', Name: string, Value: string }> | null } | null }, role: { __typename?: 'Role', id: string, name: RoleName } } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor?: string | null } } };

export type InvitationsListMyReceivedInvitationsQueryVariables = Exact<{
  status?: InputMaybe<InvitationStatus>;
  first?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
}>;


export type InvitationsListMyReceivedInvitationsQuery = { __typename?: 'Query', listMyReceivedInvitations: { __typename?: 'InvitationConnection', edges: Array<{ __typename?: 'InvitationEdge', cursor: string, node: { __typename?: 'Invitation', id: string, status: InvitationStatus, phoneNumber: string, receiver?: { __typename?: 'User', id: string, cognitoUser?: { __typename?: 'CognitoUser', Username: string, Attributes?: Array<{ __typename?: 'CognitoUserAttribute', Name: string, Value: string }> | null } | null } | null, user: { __typename?: 'User', id: string, organization?: { __typename?: 'Organization', id: string, name: string } | null, cognitoUser?: { __typename?: 'CognitoUser', Username: string, Attributes?: Array<{ __typename?: 'CognitoUserAttribute', Name: string, Value: string }> | null } | null }, role: { __typename?: 'Role', id: string, name: RoleName } } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor?: string | null } } };

export type InvitationsListMyOrganizationsOrganizationUsersQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
}>;


export type InvitationsListMyOrganizationsOrganizationUsersQuery = { __typename?: 'Query', listMyOrganizationsOrganizationUsers: { __typename?: 'OrganizationUserConnection', edges: Array<{ __typename?: 'OrganizationUserEdge', cursor: string, node: { __typename?: 'OrganizationUser', id: string, status: OrganizationUserStatus, role?: { __typename?: 'Role', id: string, name: RoleName } | null, user: { __typename?: 'User', id: string, title?: string | null, cognitoUser?: { __typename?: 'CognitoUser', Username: string, Attributes?: Array<{ __typename?: 'CognitoUserAttribute', Name: string, Value: string }> | null } | null } } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor?: string | null } } };

export type InvitationsListSportsQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
}>;


export type InvitationsListSportsQuery = { __typename?: 'Query', listSports: { __typename?: 'SportConnection', edges: Array<{ __typename?: 'SportEdge', cursor: string, node: { __typename?: 'Sport', id: string, name: string } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor?: string | null } } };

export type InvitationsListRolesQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
}>;


export type InvitationsListRolesQuery = { __typename?: 'Query', listRoles: { __typename?: 'RoleConnection', edges: Array<{ __typename?: 'RoleEdge', cursor: string, node: { __typename?: 'Role', id: string, name: RoleName } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor?: string | null } } };

export type InvitationsGetOrganizationQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type InvitationsGetOrganizationQuery = { __typename?: 'Query', getOrganization: { __typename?: 'Organization', id: string, name: string, currencyCode: CurrencyCode, intakeFormUrl?: any | null, sport?: { __typename?: 'Sport', id: string, name: string } | null } };

export type InvitationsListOrganizationsQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
}>;


export type InvitationsListOrganizationsQuery = { __typename?: 'Query', listOrganizations: { __typename?: 'OrganizationConnection', edges: Array<{ __typename?: 'OrganizationEdge', cursor: string, node: { __typename?: 'Organization', id: string, name: string, currencyCode: CurrencyCode, intakeFormUrl?: any | null, sport?: { __typename?: 'Sport', id: string, name: string } | null } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor?: string | null } } };

export type InvitationsListMyOrganizationsQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
}>;


export type InvitationsListMyOrganizationsQuery = { __typename?: 'Query', listMyOrganizations: { __typename?: 'OrganizationConnection', edges: Array<{ __typename?: 'OrganizationEdge', cursor: string, node: { __typename?: 'Organization', id: string, name: string, currencyCode: CurrencyCode, intakeFormUrl?: any | null, sport?: { __typename?: 'Sport', id: string, name: string } | null } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor?: string | null } } };

export type InvitationsCreateOrganizationMutationVariables = Exact<{
  input: CreateOrganizationInput;
}>;


export type InvitationsCreateOrganizationMutation = { __typename?: 'Mutation', createOrganization: { __typename?: 'Organization', id: string, name: string, currencyCode: CurrencyCode, intakeFormUrl?: any | null, sport?: { __typename?: 'Sport', id: string, name: string } | null } };

export type InvitationsLogIntoOrganizationMutationVariables = Exact<{
  input: LogIntoOrganizationInput;
}>;


export type InvitationsLogIntoOrganizationMutation = { __typename?: 'Mutation', logIntoOrganization: { __typename?: 'User', id: string, email?: string | null, organizationId?: string | null, phoneNumber: string, isAdmin: boolean, title?: string | null, cognitoUser?: { __typename?: 'CognitoUser', Username: string, Enabled: boolean, UserStatus: CognitoUserStatus, UserAttributes?: Array<{ __typename?: 'CognitoUserAttribute', Name: string, Value: string }> | null, Attributes?: Array<{ __typename?: 'CognitoUserAttribute', Name: string, Value: string }> | null } | null, organization?: { __typename?: 'Organization', id: string, name: string, currencyCode: CurrencyCode, intakeFormUrl?: any | null, sportId?: string | null, organizationTeams: Array<{ __typename?: 'OrganizationTeam', id: string, teamId: string }>, recommendationTypes: Array<{ __typename?: 'RecommendationType', type: string, label: string }> } | null } };

export type InvitationsUpdateOrganizationMutationVariables = Exact<{
  input: UpdateOrganizationInput;
}>;


export type InvitationsUpdateOrganizationMutation = { __typename?: 'Mutation', updateOrganization: { __typename?: 'Organization', id: string, name: string, currencyCode: CurrencyCode, intakeFormUrl?: any | null, sport?: { __typename?: 'Sport', id: string, name: string } | null } };

export type InvitationsCreateInvitationMutationVariables = Exact<{
  input: CreateInvitationInput;
}>;


export type InvitationsCreateInvitationMutation = { __typename?: 'Mutation', createInvitation: { __typename?: 'Invitation', id: string, status: InvitationStatus, phoneNumber: string, receiver?: { __typename?: 'User', id: string, cognitoUser?: { __typename?: 'CognitoUser', Username: string, Attributes?: Array<{ __typename?: 'CognitoUserAttribute', Name: string, Value: string }> | null } | null } | null, user: { __typename?: 'User', id: string, organization?: { __typename?: 'Organization', id: string, name: string } | null, cognitoUser?: { __typename?: 'CognitoUser', Username: string, Attributes?: Array<{ __typename?: 'CognitoUserAttribute', Name: string, Value: string }> | null } | null }, role: { __typename?: 'Role', id: string, name: RoleName } } };

export type InvitationsAcceptInvitationMutationVariables = Exact<{
  input: AcceptInvitationInput;
}>;


export type InvitationsAcceptInvitationMutation = { __typename?: 'Mutation', acceptInvitation: { __typename?: 'Invitation', id: string, status: InvitationStatus, phoneNumber: string, receiver?: { __typename?: 'User', id: string, cognitoUser?: { __typename?: 'CognitoUser', Username: string, Attributes?: Array<{ __typename?: 'CognitoUserAttribute', Name: string, Value: string }> | null } | null } | null, user: { __typename?: 'User', id: string, organization?: { __typename?: 'Organization', id: string, name: string } | null, cognitoUser?: { __typename?: 'CognitoUser', Username: string, Attributes?: Array<{ __typename?: 'CognitoUserAttribute', Name: string, Value: string }> | null } | null }, role: { __typename?: 'Role', id: string, name: RoleName } } };

export type InvitationsResendInvitationMutationVariables = Exact<{
  input: ResendInvitationInput;
}>;


export type InvitationsResendInvitationMutation = { __typename?: 'Mutation', resendInvitation: { __typename?: 'Invitation', id: string, status: InvitationStatus, phoneNumber: string, receiver?: { __typename?: 'User', id: string, cognitoUser?: { __typename?: 'CognitoUser', Username: string, Attributes?: Array<{ __typename?: 'CognitoUserAttribute', Name: string, Value: string }> | null } | null } | null, user: { __typename?: 'User', id: string, organization?: { __typename?: 'Organization', id: string, name: string } | null, cognitoUser?: { __typename?: 'CognitoUser', Username: string, Attributes?: Array<{ __typename?: 'CognitoUserAttribute', Name: string, Value: string }> | null } | null }, role: { __typename?: 'Role', id: string, name: RoleName } } };

export type InvitationsDeleteInvitationMutationVariables = Exact<{
  input: DeleteInvitationInput;
}>;


export type InvitationsDeleteInvitationMutation = { __typename?: 'Mutation', deleteInvitation: { __typename?: 'Invitation', id: string, status: InvitationStatus, phoneNumber: string, receiver?: { __typename?: 'User', id: string, cognitoUser?: { __typename?: 'CognitoUser', Username: string, Attributes?: Array<{ __typename?: 'CognitoUserAttribute', Name: string, Value: string }> | null } | null } | null, user: { __typename?: 'User', id: string, organization?: { __typename?: 'Organization', id: string, name: string } | null, cognitoUser?: { __typename?: 'CognitoUser', Username: string, Attributes?: Array<{ __typename?: 'CognitoUserAttribute', Name: string, Value: string }> | null } | null }, role: { __typename?: 'Role', id: string, name: RoleName } } };

export type InvitationActivateUserMutationVariables = Exact<{
  input: ActivateOrganizationUserInput;
}>;


export type InvitationActivateUserMutation = { __typename?: 'Mutation', activateUser: { __typename?: 'OrganizationUser', id: string, status: OrganizationUserStatus, role?: { __typename?: 'Role', id: string, name: RoleName } | null, user: { __typename?: 'User', id: string, title?: string | null, cognitoUser?: { __typename?: 'CognitoUser', Username: string, Attributes?: Array<{ __typename?: 'CognitoUserAttribute', Name: string, Value: string }> | null } | null } } };

export type InvitationDeactivateUserMutationVariables = Exact<{
  input: DeactivateOrganizationUserInput;
}>;


export type InvitationDeactivateUserMutation = { __typename?: 'Mutation', deactivateUser: { __typename?: 'OrganizationUser', id: string, status: OrganizationUserStatus, role?: { __typename?: 'Role', id: string, name: RoleName } | null, user: { __typename?: 'User', id: string, title?: string | null, cognitoUser?: { __typename?: 'CognitoUser', Username: string, Attributes?: Array<{ __typename?: 'CognitoUserAttribute', Name: string, Value: string }> | null } | null } } };

export type InvitationRejectInvitationMutationVariables = Exact<{
  input: RejectInvitationInput;
}>;


export type InvitationRejectInvitationMutation = { __typename?: 'Mutation', rejectInvitation: { __typename?: 'Invitation', id: string, status: InvitationStatus, phoneNumber: string, receiver?: { __typename?: 'User', id: string, cognitoUser?: { __typename?: 'CognitoUser', Username: string, Attributes?: Array<{ __typename?: 'CognitoUserAttribute', Name: string, Value: string }> | null } | null } | null, user: { __typename?: 'User', id: string, organization?: { __typename?: 'Organization', id: string, name: string } | null, cognitoUser?: { __typename?: 'CognitoUser', Username: string, Attributes?: Array<{ __typename?: 'CognitoUserAttribute', Name: string, Value: string }> | null } | null }, role: { __typename?: 'Role', id: string, name: RoleName } } };

export type NotesNoteFragment = { __typename?: 'Note', id: string, createdAt: string, updatedAt: string, title: string, body: string, isPublic: boolean, playerId: string };

export type NotesGetNoteQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type NotesGetNoteQuery = { __typename?: 'Query', getNote: { __typename?: 'Note', id: string, createdAt: string, updatedAt: string, title: string, body: string, isPublic: boolean, playerId: string } };

export type NotesListNotesByPlayerIdQueryVariables = Exact<{
  playerId: Scalars['ID'];
}>;


export type NotesListNotesByPlayerIdQuery = { __typename?: 'Query', listNotesByPlayerId: { __typename?: 'NoteConnection', edges: Array<{ __typename?: 'NoteEdge', cursor: string, node: { __typename?: 'Note', id: string, createdAt: string, updatedAt: string, title: string, body: string, isPublic: boolean, playerId: string } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor?: string | null } } };

export type NotesCreateNoteMutationVariables = Exact<{
  input: CreateNoteInput;
}>;


export type NotesCreateNoteMutation = { __typename?: 'Mutation', createNote: { __typename?: 'Note', id: string, createdAt: string, updatedAt: string, title: string, body: string, isPublic: boolean, playerId: string } };

export type NotesUpdateNoteMutationVariables = Exact<{
  input: UpdateNoteInput;
}>;


export type NotesUpdateNoteMutation = { __typename?: 'Mutation', updateNote: { __typename?: 'Note', id: string, createdAt: string, updatedAt: string, title: string, body: string, isPublic: boolean, playerId: string } };

export type NotesDeleteNoteMutationVariables = Exact<{
  input: DeleteNoteInput;
}>;


export type NotesDeleteNoteMutation = { __typename?: 'Mutation', deleteNote: { __typename?: 'Note', id: string, createdAt: string, updatedAt: string, title: string, body: string, isPublic: boolean, playerId: string } };

export type PlayerDetailPositionFragment = { __typename?: 'Position', id: string, name: string, abbreviation?: string | null };

export type PlayerDetailTeamFragment = { __typename?: 'Team', id: string, name: string };

export type PlayerDetailNationalityFragment = { __typename?: 'Nationality', id: string, name: string };

export type PlayerDetailPlayerConnectionFragment = { __typename?: 'PlayerConnection', edges: Array<{ __typename?: 'PlayerEdge', cursor: string, node: { __typename?: 'Player', id: string, knownName: string, firstName: string, lastName: string, isWatchedByCurrentUser?: boolean | null, timeDecayedGPR?: number | null, positions?: Array<{ __typename?: 'Position', id: string, name: string, abbreviation?: string | null } | null> | null, nationality?: { __typename?: 'Nationality', id: string, name: string } | null, bioData?: { __typename?: 'PlayerBioData', age?: number | null, archetypeGgPlayerKey?: string | null, roleArchetype?: string | null, contractExpires?: string | null, contractOption?: string | null, currentClub?: string | null, currentLeague?: string | null, dateOfBirth?: string | null, fitScore?: number | null, foot?: string | null, ggPlayerKey: string, gpm?: number | null, gpr?: number | null, height?: number | null, injuredUntil?: string | null, isInjured: boolean, strengths?: Array<string> | null, weaknesses?: Array<string> | null, carryingTransGlobalCategoricalScore?: number | null, dribblingTransGlobalCategoricalScore?: number | null, gkPassingTransCategoricalScore?: number | null, gkPositioningTransCategoricalScore?: number | null, gkShotStoppingTransCategoricalScore?: number | null, passingTransGlobalCategoricalScore?: number | null, shotLocationTransGlobalCategoricalScore?: number | null, playerValuation?: number | null, llmDerivedSummary?: string | null, timeDecayedSeasonalGpm?: number | null, threats?: Array<string> | null, opportunities?: Array<string> | null, timeDecayedVaep?: number | null, timeDecayedZVaep?: number | null, teamStyleFit?: number | null, playerAgent?: string | null, primaryPosition?: string | null, generalPosition?: string | null } | null, team?: { __typename?: 'Team', id: string, name: string } | null, seasonWeightedAvgMetrics?: Array<{ __typename?: 'PlayerSeasonWeightedAvgMetrics', epm?: number | null, seasonalGpm?: number | null, ggUnifiedSeasonKey: number } | null> | null, scoutReports?: Array<{ __typename?: 'PlayerScoutReport', reportId?: string | null, ggPlayerKey: string, scoutName?: string | null, reportDate?: string | null, team?: string | null, opponent?: string | null, ground?: string | null, overallScore?: number | null, qnaText?: string | null, matches?: Array<{ __typename?: 'MatchDetail', team?: string | null, opponent?: string | null, ground?: string | null, matchDate?: string | null } | null> | null } | null> | null, seasonCategoricalScores?: Array<{ __typename?: 'PlayerSeasonCategoricalScore', ggUnifiedSeasonKey: number, carryingTransPositionalCategoricalScore?: number | null, dribblingTransPositionalCategoricalScore?: number | null, gkPassingTransCategoricalScore?: number | null, gkPositioningTransCategoricalScore?: number | null, gkShotStoppingTransCategoricalScore?: number | null, passingTransPositionalCategoricalScore?: number | null, shotLocationTransGlobalCategoricalScore?: number | null, shotLocationTransPositionalCategoricalScore?: number | null } | null> | null } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor?: string | null } };

export type PlayerDetailChartPlayerConectionFragment = { __typename?: 'PlayerConnection', edges: Array<{ __typename?: 'PlayerEdge', cursor: string, node: { __typename?: 'Player', id: string, knownName: string, firstName: string, lastName: string, timeDecayedGPR?: number | null, bioData?: { __typename?: 'PlayerBioData', age?: number | null, archetypeGgPlayerKey?: string | null, roleArchetype?: string | null, contractExpires?: string | null, contractOption?: string | null, currentClub?: string | null, currentLeague?: string | null, dateOfBirth?: string | null, fitScore?: number | null, foot?: string | null, ggPlayerKey: string, gpm?: number | null, gpr?: number | null, height?: number | null, injuredUntil?: string | null, isInjured: boolean, strengths?: Array<string> | null, weaknesses?: Array<string> | null, carryingTransGlobalCategoricalScore?: number | null, dribblingTransGlobalCategoricalScore?: number | null, gkPassingTransCategoricalScore?: number | null, gkPositioningTransCategoricalScore?: number | null, gkShotStoppingTransCategoricalScore?: number | null, passingTransGlobalCategoricalScore?: number | null, shotLocationTransGlobalCategoricalScore?: number | null, playerValuation?: number | null, llmDerivedSummary?: string | null, timeDecayedSeasonalGpm?: number | null, threats?: Array<string> | null, opportunities?: Array<string> | null, timeDecayedVaep?: number | null, timeDecayedZVaep?: number | null, teamStyleFit?: number | null, playerAgent?: string | null, primaryPosition?: string | null, generalPosition?: string | null } | null, seasonWeightedAvgMetrics?: Array<{ __typename?: 'PlayerSeasonWeightedAvgMetrics', epm?: number | null, seasonalGpm?: number | null, ggUnifiedSeasonKey: number } | null> | null, seasonCategoricalScores?: Array<{ __typename?: 'PlayerSeasonCategoricalScore', ggUnifiedSeasonKey: number, carryingTransPositionalCategoricalScore?: number | null, dribblingTransPositionalCategoricalScore?: number | null, gkPassingTransCategoricalScore?: number | null, gkPositioningTransCategoricalScore?: number | null, gkShotStoppingTransCategoricalScore?: number | null, passingTransPositionalCategoricalScore?: number | null, shotLocationTransGlobalCategoricalScore?: number | null, shotLocationTransPositionalCategoricalScore?: number | null } | null> | null } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor?: string | null } };

export type PlayerDetailPlayerBioDataFragment = { __typename?: 'PlayerBioData', age?: number | null, archetypeGgPlayerKey?: string | null, roleArchetype?: string | null, contractExpires?: string | null, contractOption?: string | null, currentClub?: string | null, currentLeague?: string | null, dateOfBirth?: string | null, fitScore?: number | null, foot?: string | null, ggPlayerKey: string, gpm?: number | null, gpr?: number | null, height?: number | null, injuredUntil?: string | null, isInjured: boolean, strengths?: Array<string> | null, weaknesses?: Array<string> | null, carryingTransGlobalCategoricalScore?: number | null, dribblingTransGlobalCategoricalScore?: number | null, gkPassingTransCategoricalScore?: number | null, gkPositioningTransCategoricalScore?: number | null, gkShotStoppingTransCategoricalScore?: number | null, passingTransGlobalCategoricalScore?: number | null, shotLocationTransGlobalCategoricalScore?: number | null, playerValuation?: number | null, llmDerivedSummary?: string | null, timeDecayedSeasonalGpm?: number | null, threats?: Array<string> | null, opportunities?: Array<string> | null, timeDecayedVaep?: number | null, timeDecayedZVaep?: number | null, teamStyleFit?: number | null, playerAgent?: string | null, primaryPosition?: string | null, generalPosition?: string | null };

export type PlayerDetailPlayerSeasonWeightedAvgMetricsFragment = { __typename?: 'PlayerSeasonWeightedAvgMetrics', epm?: number | null, seasonalGpm?: number | null, ggUnifiedSeasonKey: number };

export type PlayerDetailMatchDetailFragment = { __typename?: 'MatchDetail', team?: string | null, opponent?: string | null, ground?: string | null, matchDate?: string | null };

export type PlayerDetailScoutReportsFragment = { __typename?: 'PlayerScoutReport', reportId?: string | null, ggPlayerKey: string, scoutName?: string | null, reportDate?: string | null, team?: string | null, opponent?: string | null, ground?: string | null, overallScore?: number | null, qnaText?: string | null, matches?: Array<{ __typename?: 'MatchDetail', team?: string | null, opponent?: string | null, ground?: string | null, matchDate?: string | null } | null> | null };

export type PlayerDetailSeasonCategoricalScoresFragment = { __typename?: 'PlayerSeasonCategoricalScore', ggUnifiedSeasonKey: number, carryingTransPositionalCategoricalScore?: number | null, dribblingTransPositionalCategoricalScore?: number | null, gkPassingTransCategoricalScore?: number | null, gkPositioningTransCategoricalScore?: number | null, gkShotStoppingTransCategoricalScore?: number | null, passingTransPositionalCategoricalScore?: number | null, shotLocationTransGlobalCategoricalScore?: number | null, shotLocationTransPositionalCategoricalScore?: number | null };

export type PlayerDetailPlayerFragment = { __typename?: 'Player', id: string, knownName: string, firstName: string, lastName: string, isWatchedByCurrentUser?: boolean | null, timeDecayedGPR?: number | null, positions?: Array<{ __typename?: 'Position', id: string, name: string, abbreviation?: string | null } | null> | null, nationality?: { __typename?: 'Nationality', id: string, name: string } | null, bioData?: { __typename?: 'PlayerBioData', age?: number | null, archetypeGgPlayerKey?: string | null, roleArchetype?: string | null, contractExpires?: string | null, contractOption?: string | null, currentClub?: string | null, currentLeague?: string | null, dateOfBirth?: string | null, fitScore?: number | null, foot?: string | null, ggPlayerKey: string, gpm?: number | null, gpr?: number | null, height?: number | null, injuredUntil?: string | null, isInjured: boolean, strengths?: Array<string> | null, weaknesses?: Array<string> | null, carryingTransGlobalCategoricalScore?: number | null, dribblingTransGlobalCategoricalScore?: number | null, gkPassingTransCategoricalScore?: number | null, gkPositioningTransCategoricalScore?: number | null, gkShotStoppingTransCategoricalScore?: number | null, passingTransGlobalCategoricalScore?: number | null, shotLocationTransGlobalCategoricalScore?: number | null, playerValuation?: number | null, llmDerivedSummary?: string | null, timeDecayedSeasonalGpm?: number | null, threats?: Array<string> | null, opportunities?: Array<string> | null, timeDecayedVaep?: number | null, timeDecayedZVaep?: number | null, teamStyleFit?: number | null, playerAgent?: string | null, primaryPosition?: string | null, generalPosition?: string | null } | null, team?: { __typename?: 'Team', id: string, name: string } | null, seasonWeightedAvgMetrics?: Array<{ __typename?: 'PlayerSeasonWeightedAvgMetrics', epm?: number | null, seasonalGpm?: number | null, ggUnifiedSeasonKey: number } | null> | null, scoutReports?: Array<{ __typename?: 'PlayerScoutReport', reportId?: string | null, ggPlayerKey: string, scoutName?: string | null, reportDate?: string | null, team?: string | null, opponent?: string | null, ground?: string | null, overallScore?: number | null, qnaText?: string | null, matches?: Array<{ __typename?: 'MatchDetail', team?: string | null, opponent?: string | null, ground?: string | null, matchDate?: string | null } | null> | null } | null> | null, seasonCategoricalScores?: Array<{ __typename?: 'PlayerSeasonCategoricalScore', ggUnifiedSeasonKey: number, carryingTransPositionalCategoricalScore?: number | null, dribblingTransPositionalCategoricalScore?: number | null, gkPassingTransCategoricalScore?: number | null, gkPositioningTransCategoricalScore?: number | null, gkShotStoppingTransCategoricalScore?: number | null, passingTransPositionalCategoricalScore?: number | null, shotLocationTransGlobalCategoricalScore?: number | null, shotLocationTransPositionalCategoricalScore?: number | null } | null> | null };

export type PlayerDetailChartPlayerFragment = { __typename?: 'Player', id: string, knownName: string, firstName: string, lastName: string, timeDecayedGPR?: number | null, bioData?: { __typename?: 'PlayerBioData', age?: number | null, archetypeGgPlayerKey?: string | null, roleArchetype?: string | null, contractExpires?: string | null, contractOption?: string | null, currentClub?: string | null, currentLeague?: string | null, dateOfBirth?: string | null, fitScore?: number | null, foot?: string | null, ggPlayerKey: string, gpm?: number | null, gpr?: number | null, height?: number | null, injuredUntil?: string | null, isInjured: boolean, strengths?: Array<string> | null, weaknesses?: Array<string> | null, carryingTransGlobalCategoricalScore?: number | null, dribblingTransGlobalCategoricalScore?: number | null, gkPassingTransCategoricalScore?: number | null, gkPositioningTransCategoricalScore?: number | null, gkShotStoppingTransCategoricalScore?: number | null, passingTransGlobalCategoricalScore?: number | null, shotLocationTransGlobalCategoricalScore?: number | null, playerValuation?: number | null, llmDerivedSummary?: string | null, timeDecayedSeasonalGpm?: number | null, threats?: Array<string> | null, opportunities?: Array<string> | null, timeDecayedVaep?: number | null, timeDecayedZVaep?: number | null, teamStyleFit?: number | null, playerAgent?: string | null, primaryPosition?: string | null, generalPosition?: string | null } | null, seasonWeightedAvgMetrics?: Array<{ __typename?: 'PlayerSeasonWeightedAvgMetrics', epm?: number | null, seasonalGpm?: number | null, ggUnifiedSeasonKey: number } | null> | null, seasonCategoricalScores?: Array<{ __typename?: 'PlayerSeasonCategoricalScore', ggUnifiedSeasonKey: number, carryingTransPositionalCategoricalScore?: number | null, dribblingTransPositionalCategoricalScore?: number | null, gkPassingTransCategoricalScore?: number | null, gkPositioningTransCategoricalScore?: number | null, gkShotStoppingTransCategoricalScore?: number | null, passingTransPositionalCategoricalScore?: number | null, shotLocationTransGlobalCategoricalScore?: number | null, shotLocationTransPositionalCategoricalScore?: number | null } | null> | null };

export type PlayerDetailGetPlayerQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type PlayerDetailGetPlayerQuery = { __typename?: 'Query', getPlayer?: { __typename?: 'Player', id: string, knownName: string, firstName: string, lastName: string, isWatchedByCurrentUser?: boolean | null, timeDecayedGPR?: number | null, positions?: Array<{ __typename?: 'Position', id: string, name: string, abbreviation?: string | null } | null> | null, nationality?: { __typename?: 'Nationality', id: string, name: string } | null, bioData?: { __typename?: 'PlayerBioData', age?: number | null, archetypeGgPlayerKey?: string | null, roleArchetype?: string | null, contractExpires?: string | null, contractOption?: string | null, currentClub?: string | null, currentLeague?: string | null, dateOfBirth?: string | null, fitScore?: number | null, foot?: string | null, ggPlayerKey: string, gpm?: number | null, gpr?: number | null, height?: number | null, injuredUntil?: string | null, isInjured: boolean, strengths?: Array<string> | null, weaknesses?: Array<string> | null, carryingTransGlobalCategoricalScore?: number | null, dribblingTransGlobalCategoricalScore?: number | null, gkPassingTransCategoricalScore?: number | null, gkPositioningTransCategoricalScore?: number | null, gkShotStoppingTransCategoricalScore?: number | null, passingTransGlobalCategoricalScore?: number | null, shotLocationTransGlobalCategoricalScore?: number | null, playerValuation?: number | null, llmDerivedSummary?: string | null, timeDecayedSeasonalGpm?: number | null, threats?: Array<string> | null, opportunities?: Array<string> | null, timeDecayedVaep?: number | null, timeDecayedZVaep?: number | null, teamStyleFit?: number | null, playerAgent?: string | null, primaryPosition?: string | null, generalPosition?: string | null } | null, team?: { __typename?: 'Team', id: string, name: string } | null, seasonWeightedAvgMetrics?: Array<{ __typename?: 'PlayerSeasonWeightedAvgMetrics', epm?: number | null, seasonalGpm?: number | null, ggUnifiedSeasonKey: number } | null> | null, scoutReports?: Array<{ __typename?: 'PlayerScoutReport', reportId?: string | null, ggPlayerKey: string, scoutName?: string | null, reportDate?: string | null, team?: string | null, opponent?: string | null, ground?: string | null, overallScore?: number | null, qnaText?: string | null, matches?: Array<{ __typename?: 'MatchDetail', team?: string | null, opponent?: string | null, ground?: string | null, matchDate?: string | null } | null> | null } | null> | null, seasonCategoricalScores?: Array<{ __typename?: 'PlayerSeasonCategoricalScore', ggUnifiedSeasonKey: number, carryingTransPositionalCategoricalScore?: number | null, dribblingTransPositionalCategoricalScore?: number | null, gkPassingTransCategoricalScore?: number | null, gkPositioningTransCategoricalScore?: number | null, gkShotStoppingTransCategoricalScore?: number | null, passingTransPositionalCategoricalScore?: number | null, shotLocationTransGlobalCategoricalScore?: number | null, shotLocationTransPositionalCategoricalScore?: number | null } | null> | null } | null };

export type PlayerDetailGetPlayerBioDataByPlayerIdQueryVariables = Exact<{
  playerId: Scalars['ID'];
}>;


export type PlayerDetailGetPlayerBioDataByPlayerIdQuery = { __typename?: 'Query', getPlayerBioDataByPlayerId?: { __typename?: 'PlayerBioData', age?: number | null, archetypeGgPlayerKey?: string | null, roleArchetype?: string | null, contractExpires?: string | null, contractOption?: string | null, currentClub?: string | null, currentLeague?: string | null, dateOfBirth?: string | null, fitScore?: number | null, foot?: string | null, ggPlayerKey: string, gpm?: number | null, gpr?: number | null, height?: number | null, injuredUntil?: string | null, isInjured: boolean, strengths?: Array<string> | null, weaknesses?: Array<string> | null, carryingTransGlobalCategoricalScore?: number | null, dribblingTransGlobalCategoricalScore?: number | null, gkPassingTransCategoricalScore?: number | null, gkPositioningTransCategoricalScore?: number | null, gkShotStoppingTransCategoricalScore?: number | null, passingTransGlobalCategoricalScore?: number | null, shotLocationTransGlobalCategoricalScore?: number | null, playerValuation?: number | null, llmDerivedSummary?: string | null, timeDecayedSeasonalGpm?: number | null, threats?: Array<string> | null, opportunities?: Array<string> | null, timeDecayedVaep?: number | null, timeDecayedZVaep?: number | null, teamStyleFit?: number | null, playerAgent?: string | null, primaryPosition?: string | null, generalPosition?: string | null } | null };

export type PlayerDetailListPlayerSeasonWeightedAvgMetricsQueryVariables = Exact<{
  playerId: Scalars['ID'];
}>;


export type PlayerDetailListPlayerSeasonWeightedAvgMetricsQuery = { __typename?: 'Query', listPlayerSeasonWeightedAvgMetricsByPlayerId: Array<{ __typename?: 'PlayerSeasonWeightedAvgMetrics', epm?: number | null, seasonalGpm?: number | null, ggUnifiedSeasonKey: number }> };

export type PlayerDetailListPlayersByTeamIdsAndPositionIdsQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  teamIds: Array<Scalars['ID']> | Scalars['ID'];
  positionIds: Array<Scalars['ID']> | Scalars['ID'];
}>;


export type PlayerDetailListPlayersByTeamIdsAndPositionIdsQuery = { __typename?: 'Query', listPlayersByTeamIdsAndPositionIds: { __typename?: 'PlayerConnection', edges: Array<{ __typename?: 'PlayerEdge', cursor: string, node: { __typename?: 'Player', id: string, knownName: string, firstName: string, lastName: string, timeDecayedGPR?: number | null, bioData?: { __typename?: 'PlayerBioData', age?: number | null, archetypeGgPlayerKey?: string | null, roleArchetype?: string | null, contractExpires?: string | null, contractOption?: string | null, currentClub?: string | null, currentLeague?: string | null, dateOfBirth?: string | null, fitScore?: number | null, foot?: string | null, ggPlayerKey: string, gpm?: number | null, gpr?: number | null, height?: number | null, injuredUntil?: string | null, isInjured: boolean, strengths?: Array<string> | null, weaknesses?: Array<string> | null, carryingTransGlobalCategoricalScore?: number | null, dribblingTransGlobalCategoricalScore?: number | null, gkPassingTransCategoricalScore?: number | null, gkPositioningTransCategoricalScore?: number | null, gkShotStoppingTransCategoricalScore?: number | null, passingTransGlobalCategoricalScore?: number | null, shotLocationTransGlobalCategoricalScore?: number | null, playerValuation?: number | null, llmDerivedSummary?: string | null, timeDecayedSeasonalGpm?: number | null, threats?: Array<string> | null, opportunities?: Array<string> | null, timeDecayedVaep?: number | null, timeDecayedZVaep?: number | null, teamStyleFit?: number | null, playerAgent?: string | null, primaryPosition?: string | null, generalPosition?: string | null } | null, seasonWeightedAvgMetrics?: Array<{ __typename?: 'PlayerSeasonWeightedAvgMetrics', epm?: number | null, seasonalGpm?: number | null, ggUnifiedSeasonKey: number } | null> | null, seasonCategoricalScores?: Array<{ __typename?: 'PlayerSeasonCategoricalScore', ggUnifiedSeasonKey: number, carryingTransPositionalCategoricalScore?: number | null, dribblingTransPositionalCategoricalScore?: number | null, gkPassingTransCategoricalScore?: number | null, gkPositioningTransCategoricalScore?: number | null, gkShotStoppingTransCategoricalScore?: number | null, passingTransPositionalCategoricalScore?: number | null, shotLocationTransGlobalCategoricalScore?: number | null, shotLocationTransPositionalCategoricalScore?: number | null } | null> | null } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor?: string | null } } };

export type PlayerDetailPlayerDataSummaryFragment = { __typename?: 'PlayerDataSummary', id: string, openAiThreadId?: string | null, openAiSummary?: string | null };

export type PlayerDetailGetPlayerDataSummaryBylayerIdQueryVariables = Exact<{
  playerId: Scalars['ID'];
}>;


export type PlayerDetailGetPlayerDataSummaryBylayerIdQuery = { __typename?: 'Query', getPlayerDataSummaryByPlayerId: { __typename?: 'PlayerDataSummary', id: string, openAiThreadId?: string | null, openAiSummary?: string | null } };

export type PlayerDetailOpenAiTextContentFragment = { __typename?: 'OpenAiTextContent', value: string };

export type PlayerDetailOpenAiContentFragment = { __typename?: 'OpenAiContent', type: string, refusal?: string | null, text?: { __typename?: 'OpenAiTextContent', value: string } | null };

export type PlayerDetailOpenAiMessageFragment = { __typename?: 'OpenAiMessage', id: string, role: string, content: Array<{ __typename?: 'OpenAiContent', type: string, refusal?: string | null, text?: { __typename?: 'OpenAiTextContent', value: string } | null }> };

export type PlayerDetailOpenAiMessageConnectionFragment = { __typename?: 'OpenAiMessageConnection', edges: Array<{ __typename?: 'OpenAiMessageEdge', cursor: string, node: { __typename?: 'OpenAiMessage', id: string, role: string, content: Array<{ __typename?: 'OpenAiContent', type: string, refusal?: string | null, text?: { __typename?: 'OpenAiTextContent', value: string } | null }> } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor?: string | null } };

export type PlayerDetailListOpenAiMessagesByThreadIdQueryVariables = Exact<{
  threadId: Scalars['ID'];
  first?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
}>;


export type PlayerDetailListOpenAiMessagesByThreadIdQuery = { __typename?: 'Query', listOpenAiMessagesByThreadId: { __typename?: 'OpenAiMessageConnection', edges: Array<{ __typename?: 'OpenAiMessageEdge', cursor: string, node: { __typename?: 'OpenAiMessage', id: string, role: string, content: Array<{ __typename?: 'OpenAiContent', type: string, refusal?: string | null, text?: { __typename?: 'OpenAiTextContent', value: string } | null }> } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor?: string | null } } };

export type PlayerDetailGetSignedUrlForOpenAiFileIdQueryVariables = Exact<{
  fileId: Scalars['String'];
  playerId?: InputMaybe<Scalars['ID']>;
  playerGGID?: InputMaybe<Scalars['ID']>;
}>;


export type PlayerDetailGetSignedUrlForOpenAiFileIdQuery = { __typename?: 'Query', getSignedUrlForOpenAiFileId: string };

export type PlayerSearchTeamFragment = { __typename?: 'Team', id: string, name: string };

export type PlayerSearchPositionFragment = { __typename?: 'Position', id: string, name: string, abbreviation?: string | null };

export type PlayerSearchPlayerBioDataFragment = { __typename?: 'PlayerBioData', ggPlayerKey: string, fitScore?: number | null, teamStyleFit?: number | null, playerValuation?: number | null, carryingTransGlobalCategoricalScore?: number | null, dribblingTransGlobalCategoricalScore?: number | null, passingTransGlobalCategoricalScore?: number | null, shotLocationTransGlobalCategoricalScore?: number | null, gkPassingTransCategoricalScore?: number | null, gkPositioningTransCategoricalScore?: number | null, gkShotStoppingTransCategoricalScore?: number | null, contractExpires?: string | null, gpr?: number | null };

export type PlayerSearchPlayerSeasonWeightedAvgMetricsFragment = { __typename?: 'PlayerSeasonWeightedAvgMetrics', ggPlayerKey: string, ggUnifiedSeasonKey: number, epm?: number | null, rapm?: number | null, spm?: number | null, stdEpm?: number | null, stdEpmTransform?: number | null };

export type PlayerSearchPlayerFragment = { __typename?: 'Player', id: string, knownName: string, firstName: string, lastName: string, isWatchedByCurrentUser?: boolean | null, timeDecayedGPR?: number | null, positions?: Array<{ __typename?: 'Position', id: string, name: string, abbreviation?: string | null } | null> | null, team?: { __typename?: 'Team', id: string, name: string } | null, bioData?: { __typename?: 'PlayerBioData', ggPlayerKey: string, fitScore?: number | null, teamStyleFit?: number | null, playerValuation?: number | null, carryingTransGlobalCategoricalScore?: number | null, dribblingTransGlobalCategoricalScore?: number | null, passingTransGlobalCategoricalScore?: number | null, shotLocationTransGlobalCategoricalScore?: number | null, gkPassingTransCategoricalScore?: number | null, gkPositioningTransCategoricalScore?: number | null, gkShotStoppingTransCategoricalScore?: number | null, contractExpires?: string | null, gpr?: number | null } | null };

export type PlayerSearchPlayerConnectionFragment = { __typename?: 'PlayerConnection', edges: Array<{ __typename?: 'PlayerEdge', cursor: string, node: { __typename?: 'Player', id: string, knownName: string, firstName: string, lastName: string, isWatchedByCurrentUser?: boolean | null, timeDecayedGPR?: number | null, positions?: Array<{ __typename?: 'Position', id: string, name: string, abbreviation?: string | null } | null> | null, team?: { __typename?: 'Team', id: string, name: string } | null, bioData?: { __typename?: 'PlayerBioData', ggPlayerKey: string, fitScore?: number | null, teamStyleFit?: number | null, playerValuation?: number | null, carryingTransGlobalCategoricalScore?: number | null, dribblingTransGlobalCategoricalScore?: number | null, passingTransGlobalCategoricalScore?: number | null, shotLocationTransGlobalCategoricalScore?: number | null, gkPassingTransCategoricalScore?: number | null, gkPositioningTransCategoricalScore?: number | null, gkShotStoppingTransCategoricalScore?: number | null, contractExpires?: string | null, gpr?: number | null } | null } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } };

export type PlayerSearchPlayerEdgeFragment = { __typename?: 'PlayerEdge', cursor: string, node: { __typename?: 'Player', id: string, knownName: string, firstName: string, lastName: string, isWatchedByCurrentUser?: boolean | null, timeDecayedGPR?: number | null, positions?: Array<{ __typename?: 'Position', id: string, name: string, abbreviation?: string | null } | null> | null, team?: { __typename?: 'Team', id: string, name: string } | null, bioData?: { __typename?: 'PlayerBioData', ggPlayerKey: string, fitScore?: number | null, teamStyleFit?: number | null, playerValuation?: number | null, carryingTransGlobalCategoricalScore?: number | null, dribblingTransGlobalCategoricalScore?: number | null, passingTransGlobalCategoricalScore?: number | null, shotLocationTransGlobalCategoricalScore?: number | null, gkPassingTransCategoricalScore?: number | null, gkPositioningTransCategoricalScore?: number | null, gkShotStoppingTransCategoricalScore?: number | null, contractExpires?: string | null, gpr?: number | null } | null } };

export type PlayerSearchWatchlistWithPlayerFragment = { __typename?: 'Watchlist', id: string, name: string, isOnWatchlist: boolean, players: { __typename?: 'PlayerConnection', edges: Array<{ __typename?: 'PlayerEdge', cursor: string, node: { __typename?: 'Player', id: string, knownName: string, firstName: string, lastName: string, timeDecayedGPR?: number | null, isWatchedByCurrentUser?: boolean | null, team?: { __typename?: 'Team', id: string, name: string } | null, positions?: Array<{ __typename?: 'Position', id: string, name: string, abbreviation?: string | null } | null> | null, seasonWeightedAvgMetrics?: Array<{ __typename?: 'PlayerSeasonWeightedAvgMetrics', epm?: number | null, seasonalGpm?: number | null, ggUnifiedSeasonKey: number } | null> | null, bioData?: { __typename?: 'PlayerBioData', ggPlayerKey: string, dateOfBirth?: string | null, age?: number | null, foot?: string | null, roleArchetype?: string | null, isInjured: boolean, contractExpires?: string | null, playerValuation?: number | null, gpm?: number | null, gpr?: number | null, timeDecayedSeasonalGpm?: number | null, timeDecayedZVaep?: number | null, fitScore?: number | null, teamStyleFit?: number | null, passingTransGlobalCategoricalScore?: number | null, shotLocationTransGlobalCategoricalScore?: number | null, dribblingTransGlobalCategoricalScore?: number | null, carryingTransGlobalCategoricalScore?: number | null, gkShotStoppingTransCategoricalScore?: number | null, gkPositioningTransCategoricalScore?: number | null, gkPassingTransCategoricalScore?: number | null, llmDerivedSummary?: string | null } | null, seasonCategoricalScores?: Array<{ __typename?: 'PlayerSeasonCategoricalScore', ggUnifiedSeasonKey: number, carryingTransPositionalCategoricalScore?: number | null, dribblingTransPositionalCategoricalScore?: number | null, gkPassingTransCategoricalScore?: number | null, gkPositioningTransCategoricalScore?: number | null, gkShotStoppingTransCategoricalScore?: number | null, passingTransPositionalCategoricalScore?: number | null, shotLocationTransPositionalCategoricalScore?: number | null } | null> | null } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } };

export type PlayerSearchWatchlistFragment = { __typename?: 'Watchlist', id: string, name: string, players: { __typename?: 'PlayerConnection', edges: Array<{ __typename?: 'PlayerEdge', cursor: string, node: { __typename?: 'Player', id: string, knownName: string, firstName: string, lastName: string, timeDecayedGPR?: number | null, isWatchedByCurrentUser?: boolean | null, team?: { __typename?: 'Team', id: string, name: string } | null, positions?: Array<{ __typename?: 'Position', id: string, name: string, abbreviation?: string | null } | null> | null, seasonWeightedAvgMetrics?: Array<{ __typename?: 'PlayerSeasonWeightedAvgMetrics', epm?: number | null, seasonalGpm?: number | null, ggUnifiedSeasonKey: number } | null> | null, bioData?: { __typename?: 'PlayerBioData', ggPlayerKey: string, dateOfBirth?: string | null, age?: number | null, foot?: string | null, roleArchetype?: string | null, isInjured: boolean, contractExpires?: string | null, playerValuation?: number | null, gpm?: number | null, gpr?: number | null, timeDecayedSeasonalGpm?: number | null, timeDecayedZVaep?: number | null, fitScore?: number | null, teamStyleFit?: number | null, passingTransGlobalCategoricalScore?: number | null, shotLocationTransGlobalCategoricalScore?: number | null, dribblingTransGlobalCategoricalScore?: number | null, carryingTransGlobalCategoricalScore?: number | null, gkShotStoppingTransCategoricalScore?: number | null, gkPositioningTransCategoricalScore?: number | null, gkPassingTransCategoricalScore?: number | null, llmDerivedSummary?: string | null } | null, seasonCategoricalScores?: Array<{ __typename?: 'PlayerSeasonCategoricalScore', ggUnifiedSeasonKey: number, carryingTransPositionalCategoricalScore?: number | null, dribblingTransPositionalCategoricalScore?: number | null, gkPassingTransCategoricalScore?: number | null, gkPositioningTransCategoricalScore?: number | null, gkShotStoppingTransCategoricalScore?: number | null, passingTransPositionalCategoricalScore?: number | null, shotLocationTransPositionalCategoricalScore?: number | null } | null> | null } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } };

export type PlayerSearchWatchlistConnectionFragment = { __typename?: 'WatchlistConnection', edges: Array<{ __typename?: 'WatchlistEdge', cursor: string, node: { __typename?: 'Watchlist', id: string, name: string, players: { __typename?: 'PlayerConnection', edges: Array<{ __typename?: 'PlayerEdge', cursor: string, node: { __typename?: 'Player', id: string, knownName: string, firstName: string, lastName: string, timeDecayedGPR?: number | null, isWatchedByCurrentUser?: boolean | null, team?: { __typename?: 'Team', id: string, name: string } | null, positions?: Array<{ __typename?: 'Position', id: string, name: string, abbreviation?: string | null } | null> | null, seasonWeightedAvgMetrics?: Array<{ __typename?: 'PlayerSeasonWeightedAvgMetrics', epm?: number | null, seasonalGpm?: number | null, ggUnifiedSeasonKey: number } | null> | null, bioData?: { __typename?: 'PlayerBioData', ggPlayerKey: string, dateOfBirth?: string | null, age?: number | null, foot?: string | null, roleArchetype?: string | null, isInjured: boolean, contractExpires?: string | null, playerValuation?: number | null, gpm?: number | null, gpr?: number | null, timeDecayedSeasonalGpm?: number | null, timeDecayedZVaep?: number | null, fitScore?: number | null, teamStyleFit?: number | null, passingTransGlobalCategoricalScore?: number | null, shotLocationTransGlobalCategoricalScore?: number | null, dribblingTransGlobalCategoricalScore?: number | null, carryingTransGlobalCategoricalScore?: number | null, gkShotStoppingTransCategoricalScore?: number | null, gkPositioningTransCategoricalScore?: number | null, gkPassingTransCategoricalScore?: number | null, llmDerivedSummary?: string | null } | null, seasonCategoricalScores?: Array<{ __typename?: 'PlayerSeasonCategoricalScore', ggUnifiedSeasonKey: number, carryingTransPositionalCategoricalScore?: number | null, dribblingTransPositionalCategoricalScore?: number | null, gkPassingTransCategoricalScore?: number | null, gkPositioningTransCategoricalScore?: number | null, gkShotStoppingTransCategoricalScore?: number | null, passingTransPositionalCategoricalScore?: number | null, shotLocationTransPositionalCategoricalScore?: number | null } | null> | null } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor?: string | null } };

export type PlayerSearchWatchlistEdgeFragment = { __typename?: 'WatchlistEdge', cursor: string, node: { __typename?: 'Watchlist', id: string, name: string, players: { __typename?: 'PlayerConnection', edges: Array<{ __typename?: 'PlayerEdge', cursor: string, node: { __typename?: 'Player', id: string, knownName: string, firstName: string, lastName: string, timeDecayedGPR?: number | null, isWatchedByCurrentUser?: boolean | null, team?: { __typename?: 'Team', id: string, name: string } | null, positions?: Array<{ __typename?: 'Position', id: string, name: string, abbreviation?: string | null } | null> | null, seasonWeightedAvgMetrics?: Array<{ __typename?: 'PlayerSeasonWeightedAvgMetrics', epm?: number | null, seasonalGpm?: number | null, ggUnifiedSeasonKey: number } | null> | null, bioData?: { __typename?: 'PlayerBioData', ggPlayerKey: string, dateOfBirth?: string | null, age?: number | null, foot?: string | null, roleArchetype?: string | null, isInjured: boolean, contractExpires?: string | null, playerValuation?: number | null, gpm?: number | null, gpr?: number | null, timeDecayedSeasonalGpm?: number | null, timeDecayedZVaep?: number | null, fitScore?: number | null, teamStyleFit?: number | null, passingTransGlobalCategoricalScore?: number | null, shotLocationTransGlobalCategoricalScore?: number | null, dribblingTransGlobalCategoricalScore?: number | null, carryingTransGlobalCategoricalScore?: number | null, gkShotStoppingTransCategoricalScore?: number | null, gkPositioningTransCategoricalScore?: number | null, gkPassingTransCategoricalScore?: number | null, llmDerivedSummary?: string | null } | null, seasonCategoricalScores?: Array<{ __typename?: 'PlayerSeasonCategoricalScore', ggUnifiedSeasonKey: number, carryingTransPositionalCategoricalScore?: number | null, dribblingTransPositionalCategoricalScore?: number | null, gkPassingTransCategoricalScore?: number | null, gkPositioningTransCategoricalScore?: number | null, gkShotStoppingTransCategoricalScore?: number | null, passingTransPositionalCategoricalScore?: number | null, shotLocationTransPositionalCategoricalScore?: number | null } | null> | null } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } } };

export type PlayerSearchWatchlistConnectionWithPlayerFragment = { __typename?: 'WatchlistConnection', edges: Array<{ __typename?: 'WatchlistEdge', cursor: string, node: { __typename?: 'Watchlist', id: string, name: string, isOnWatchlist: boolean, players: { __typename?: 'PlayerConnection', edges: Array<{ __typename?: 'PlayerEdge', cursor: string, node: { __typename?: 'Player', id: string, knownName: string, firstName: string, lastName: string, timeDecayedGPR?: number | null, isWatchedByCurrentUser?: boolean | null, team?: { __typename?: 'Team', id: string, name: string } | null, positions?: Array<{ __typename?: 'Position', id: string, name: string, abbreviation?: string | null } | null> | null, seasonWeightedAvgMetrics?: Array<{ __typename?: 'PlayerSeasonWeightedAvgMetrics', epm?: number | null, seasonalGpm?: number | null, ggUnifiedSeasonKey: number } | null> | null, bioData?: { __typename?: 'PlayerBioData', ggPlayerKey: string, dateOfBirth?: string | null, age?: number | null, foot?: string | null, roleArchetype?: string | null, isInjured: boolean, contractExpires?: string | null, playerValuation?: number | null, gpm?: number | null, gpr?: number | null, timeDecayedSeasonalGpm?: number | null, timeDecayedZVaep?: number | null, fitScore?: number | null, teamStyleFit?: number | null, passingTransGlobalCategoricalScore?: number | null, shotLocationTransGlobalCategoricalScore?: number | null, dribblingTransGlobalCategoricalScore?: number | null, carryingTransGlobalCategoricalScore?: number | null, gkShotStoppingTransCategoricalScore?: number | null, gkPositioningTransCategoricalScore?: number | null, gkPassingTransCategoricalScore?: number | null, llmDerivedSummary?: string | null } | null, seasonCategoricalScores?: Array<{ __typename?: 'PlayerSeasonCategoricalScore', ggUnifiedSeasonKey: number, carryingTransPositionalCategoricalScore?: number | null, dribblingTransPositionalCategoricalScore?: number | null, gkPassingTransCategoricalScore?: number | null, gkPositioningTransCategoricalScore?: number | null, gkShotStoppingTransCategoricalScore?: number | null, passingTransPositionalCategoricalScore?: number | null, shotLocationTransPositionalCategoricalScore?: number | null } | null> | null } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor?: string | null } };

export type PlayerSearchWatchlistEdgeWithPlayerFragment = { __typename?: 'WatchlistEdge', cursor: string, node: { __typename?: 'Watchlist', id: string, name: string, isOnWatchlist: boolean, players: { __typename?: 'PlayerConnection', edges: Array<{ __typename?: 'PlayerEdge', cursor: string, node: { __typename?: 'Player', id: string, knownName: string, firstName: string, lastName: string, timeDecayedGPR?: number | null, isWatchedByCurrentUser?: boolean | null, team?: { __typename?: 'Team', id: string, name: string } | null, positions?: Array<{ __typename?: 'Position', id: string, name: string, abbreviation?: string | null } | null> | null, seasonWeightedAvgMetrics?: Array<{ __typename?: 'PlayerSeasonWeightedAvgMetrics', epm?: number | null, seasonalGpm?: number | null, ggUnifiedSeasonKey: number } | null> | null, bioData?: { __typename?: 'PlayerBioData', ggPlayerKey: string, dateOfBirth?: string | null, age?: number | null, foot?: string | null, roleArchetype?: string | null, isInjured: boolean, contractExpires?: string | null, playerValuation?: number | null, gpm?: number | null, gpr?: number | null, timeDecayedSeasonalGpm?: number | null, timeDecayedZVaep?: number | null, fitScore?: number | null, teamStyleFit?: number | null, passingTransGlobalCategoricalScore?: number | null, shotLocationTransGlobalCategoricalScore?: number | null, dribblingTransGlobalCategoricalScore?: number | null, carryingTransGlobalCategoricalScore?: number | null, gkShotStoppingTransCategoricalScore?: number | null, gkPositioningTransCategoricalScore?: number | null, gkPassingTransCategoricalScore?: number | null, llmDerivedSummary?: string | null } | null, seasonCategoricalScores?: Array<{ __typename?: 'PlayerSeasonCategoricalScore', ggUnifiedSeasonKey: number, carryingTransPositionalCategoricalScore?: number | null, dribblingTransPositionalCategoricalScore?: number | null, gkPassingTransCategoricalScore?: number | null, gkPositioningTransCategoricalScore?: number | null, gkShotStoppingTransCategoricalScore?: number | null, passingTransPositionalCategoricalScore?: number | null, shotLocationTransPositionalCategoricalScore?: number | null } | null> | null } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } } };

export type PlayerSearchFilterPlayersQueryVariables = Exact<{
  filter: PlayerAdvancedFilterInput;
  first?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  sortBy?: InputMaybe<SortField>;
  sortOrder?: InputMaybe<OrderByDirection>;
}>;


export type PlayerSearchFilterPlayersQuery = { __typename?: 'Query', filterPlayers: { __typename?: 'PlayerConnection', edges: Array<{ __typename?: 'PlayerEdge', cursor: string, node: { __typename?: 'Player', id: string, knownName: string, firstName: string, lastName: string, isWatchedByCurrentUser?: boolean | null, timeDecayedGPR?: number | null, positions?: Array<{ __typename?: 'Position', id: string, name: string, abbreviation?: string | null } | null> | null, team?: { __typename?: 'Team', id: string, name: string } | null, bioData?: { __typename?: 'PlayerBioData', ggPlayerKey: string, fitScore?: number | null, teamStyleFit?: number | null, playerValuation?: number | null, carryingTransGlobalCategoricalScore?: number | null, dribblingTransGlobalCategoricalScore?: number | null, passingTransGlobalCategoricalScore?: number | null, shotLocationTransGlobalCategoricalScore?: number | null, gkPassingTransCategoricalScore?: number | null, gkPositioningTransCategoricalScore?: number | null, gkShotStoppingTransCategoricalScore?: number | null, contractExpires?: string | null, gpr?: number | null } | null } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } };

export type PlayerSearchSearchPlayersQueryVariables = Exact<{
  query: Scalars['String'];
  first?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  sortBy?: InputMaybe<SortField>;
  sortOrder?: InputMaybe<OrderByDirection>;
}>;


export type PlayerSearchSearchPlayersQuery = { __typename?: 'Query', searchPlayers: { __typename?: 'PlayerConnection', edges: Array<{ __typename?: 'PlayerEdge', cursor: string, node: { __typename?: 'Player', id: string, knownName: string, firstName: string, lastName: string, isWatchedByCurrentUser?: boolean | null, timeDecayedGPR?: number | null, positions?: Array<{ __typename?: 'Position', id: string, name: string, abbreviation?: string | null } | null> | null, team?: { __typename?: 'Team', id: string, name: string } | null, bioData?: { __typename?: 'PlayerBioData', ggPlayerKey: string, fitScore?: number | null, teamStyleFit?: number | null, playerValuation?: number | null, carryingTransGlobalCategoricalScore?: number | null, dribblingTransGlobalCategoricalScore?: number | null, passingTransGlobalCategoricalScore?: number | null, shotLocationTransGlobalCategoricalScore?: number | null, gkPassingTransCategoricalScore?: number | null, gkPositioningTransCategoricalScore?: number | null, gkShotStoppingTransCategoricalScore?: number | null, contractExpires?: string | null, gpr?: number | null } | null } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } };

export type PlayerSearchListRoleArchetypesQueryVariables = Exact<{ [key: string]: never; }>;


export type PlayerSearchListRoleArchetypesQuery = { __typename?: 'Query', listRoleArchetypes: Array<string | null> };

export type PlayerSearchAddPlayerToWatchlistMutationVariables = Exact<{
  input: AddPlayerToWatchlistInput;
}>;


export type PlayerSearchAddPlayerToWatchlistMutation = { __typename?: 'Mutation', addPlayerToWatchlist: { __typename?: 'Watchlist', id: string, name: string, players: { __typename?: 'PlayerConnection', edges: Array<{ __typename?: 'PlayerEdge', cursor: string, node: { __typename?: 'Player', id: string, knownName: string, firstName: string, lastName: string, timeDecayedGPR?: number | null, isWatchedByCurrentUser?: boolean | null, team?: { __typename?: 'Team', id: string, name: string } | null, positions?: Array<{ __typename?: 'Position', id: string, name: string, abbreviation?: string | null } | null> | null, seasonWeightedAvgMetrics?: Array<{ __typename?: 'PlayerSeasonWeightedAvgMetrics', epm?: number | null, seasonalGpm?: number | null, ggUnifiedSeasonKey: number } | null> | null, bioData?: { __typename?: 'PlayerBioData', ggPlayerKey: string, dateOfBirth?: string | null, age?: number | null, foot?: string | null, roleArchetype?: string | null, isInjured: boolean, contractExpires?: string | null, playerValuation?: number | null, gpm?: number | null, gpr?: number | null, timeDecayedSeasonalGpm?: number | null, timeDecayedZVaep?: number | null, fitScore?: number | null, teamStyleFit?: number | null, passingTransGlobalCategoricalScore?: number | null, shotLocationTransGlobalCategoricalScore?: number | null, dribblingTransGlobalCategoricalScore?: number | null, carryingTransGlobalCategoricalScore?: number | null, gkShotStoppingTransCategoricalScore?: number | null, gkPositioningTransCategoricalScore?: number | null, gkPassingTransCategoricalScore?: number | null, llmDerivedSummary?: string | null } | null, seasonCategoricalScores?: Array<{ __typename?: 'PlayerSeasonCategoricalScore', ggUnifiedSeasonKey: number, carryingTransPositionalCategoricalScore?: number | null, dribblingTransPositionalCategoricalScore?: number | null, gkPassingTransCategoricalScore?: number | null, gkPositioningTransCategoricalScore?: number | null, gkShotStoppingTransCategoricalScore?: number | null, passingTransPositionalCategoricalScore?: number | null, shotLocationTransPositionalCategoricalScore?: number | null } | null> | null } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } } };

export type PlayerSearchRemovePlayerFromWatchlistMutationVariables = Exact<{
  input: RemovePlayerFromWatchlistInput;
}>;


export type PlayerSearchRemovePlayerFromWatchlistMutation = { __typename?: 'Mutation', removePlayerFromWatchlist: { __typename?: 'Watchlist', id: string, name: string, players: { __typename?: 'PlayerConnection', edges: Array<{ __typename?: 'PlayerEdge', cursor: string, node: { __typename?: 'Player', id: string, knownName: string, firstName: string, lastName: string, timeDecayedGPR?: number | null, isWatchedByCurrentUser?: boolean | null, team?: { __typename?: 'Team', id: string, name: string } | null, positions?: Array<{ __typename?: 'Position', id: string, name: string, abbreviation?: string | null } | null> | null, seasonWeightedAvgMetrics?: Array<{ __typename?: 'PlayerSeasonWeightedAvgMetrics', epm?: number | null, seasonalGpm?: number | null, ggUnifiedSeasonKey: number } | null> | null, bioData?: { __typename?: 'PlayerBioData', ggPlayerKey: string, dateOfBirth?: string | null, age?: number | null, foot?: string | null, roleArchetype?: string | null, isInjured: boolean, contractExpires?: string | null, playerValuation?: number | null, gpm?: number | null, gpr?: number | null, timeDecayedSeasonalGpm?: number | null, timeDecayedZVaep?: number | null, fitScore?: number | null, teamStyleFit?: number | null, passingTransGlobalCategoricalScore?: number | null, shotLocationTransGlobalCategoricalScore?: number | null, dribblingTransGlobalCategoricalScore?: number | null, carryingTransGlobalCategoricalScore?: number | null, gkShotStoppingTransCategoricalScore?: number | null, gkPositioningTransCategoricalScore?: number | null, gkPassingTransCategoricalScore?: number | null, llmDerivedSummary?: string | null } | null, seasonCategoricalScores?: Array<{ __typename?: 'PlayerSeasonCategoricalScore', ggUnifiedSeasonKey: number, carryingTransPositionalCategoricalScore?: number | null, dribblingTransPositionalCategoricalScore?: number | null, gkPassingTransCategoricalScore?: number | null, gkPositioningTransCategoricalScore?: number | null, gkShotStoppingTransCategoricalScore?: number | null, passingTransPositionalCategoricalScore?: number | null, shotLocationTransPositionalCategoricalScore?: number | null } | null> | null } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } } };

export type PlayerSearchCreateWatchlistMutationVariables = Exact<{
  input: CreateWatchlistInput;
}>;


export type PlayerSearchCreateWatchlistMutation = { __typename?: 'Mutation', createWatchlist: { __typename?: 'Watchlist', id: string, name: string, players: { __typename?: 'PlayerConnection', edges: Array<{ __typename?: 'PlayerEdge', cursor: string, node: { __typename?: 'Player', id: string, knownName: string, firstName: string, lastName: string, timeDecayedGPR?: number | null, isWatchedByCurrentUser?: boolean | null, team?: { __typename?: 'Team', id: string, name: string } | null, positions?: Array<{ __typename?: 'Position', id: string, name: string, abbreviation?: string | null } | null> | null, seasonWeightedAvgMetrics?: Array<{ __typename?: 'PlayerSeasonWeightedAvgMetrics', epm?: number | null, seasonalGpm?: number | null, ggUnifiedSeasonKey: number } | null> | null, bioData?: { __typename?: 'PlayerBioData', ggPlayerKey: string, dateOfBirth?: string | null, age?: number | null, foot?: string | null, roleArchetype?: string | null, isInjured: boolean, contractExpires?: string | null, playerValuation?: number | null, gpm?: number | null, gpr?: number | null, timeDecayedSeasonalGpm?: number | null, timeDecayedZVaep?: number | null, fitScore?: number | null, teamStyleFit?: number | null, passingTransGlobalCategoricalScore?: number | null, shotLocationTransGlobalCategoricalScore?: number | null, dribblingTransGlobalCategoricalScore?: number | null, carryingTransGlobalCategoricalScore?: number | null, gkShotStoppingTransCategoricalScore?: number | null, gkPositioningTransCategoricalScore?: number | null, gkPassingTransCategoricalScore?: number | null, llmDerivedSummary?: string | null } | null, seasonCategoricalScores?: Array<{ __typename?: 'PlayerSeasonCategoricalScore', ggUnifiedSeasonKey: number, carryingTransPositionalCategoricalScore?: number | null, dribblingTransPositionalCategoricalScore?: number | null, gkPassingTransCategoricalScore?: number | null, gkPositioningTransCategoricalScore?: number | null, gkShotStoppingTransCategoricalScore?: number | null, passingTransPositionalCategoricalScore?: number | null, shotLocationTransPositionalCategoricalScore?: number | null } | null> | null } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } } };

export type PushNotificationsCreateDeviceMutationVariables = Exact<{
  input: CreateDeviceInput;
}>;


export type PushNotificationsCreateDeviceMutation = { __typename?: 'Mutation', createDevice: { __typename?: 'Device', id: string } };

export type RecommendationsTeamFragment = { __typename?: 'Team', id: string, name: string };

export type RecommendationsPlayerPositionFragment = { __typename?: 'Position', id: string, name: string, abbreviation?: string | null };

export type RecommendationsPlayerRatingTimeSeriesFragment = { __typename?: 'PlayerRatingTimeSeries', ggUnifiedSeasonKey?: number | null, gpr?: number | null, zVaep?: number | null, zGpm?: number | null };

export type RecommendationsPlayerFragment = { __typename?: 'Player', id: string, knownName: string, firstName: string, lastName: string, isWatchedByCurrentUser?: boolean | null, team?: { __typename?: 'Team', id: string, name: string } | null, positions?: Array<{ __typename?: 'Position', id: string, name: string, abbreviation?: string | null } | null> | null, playerRatingTimeSeries?: Array<{ __typename?: 'PlayerRatingTimeSeries', ggUnifiedSeasonKey?: number | null, gpr?: number | null, zVaep?: number | null, zGpm?: number | null }> | null };

export type RecommendationsPlayerRecommendationResultFragment = { __typename?: 'PlayerRecommendationResult', id: string, recommendationScore: number, recommendationType: string, rankChange?: number | null, currentRank: number, previousRank?: number | null, timestamp: string, previousTimestamp?: string | null, player: { __typename?: 'Player', id: string, knownName: string, firstName: string, lastName: string, isWatchedByCurrentUser?: boolean | null, team?: { __typename?: 'Team', id: string, name: string } | null, positions?: Array<{ __typename?: 'Position', id: string, name: string, abbreviation?: string | null } | null> | null, playerRatingTimeSeries?: Array<{ __typename?: 'PlayerRatingTimeSeries', ggUnifiedSeasonKey?: number | null, gpr?: number | null, zVaep?: number | null, zGpm?: number | null }> | null } };

export type RecommendationsListPlayerRecommendationsQueryVariables = Exact<{
  recommendationType: Scalars['String'];
}>;


export type RecommendationsListPlayerRecommendationsQuery = { __typename?: 'Query', listPlayerRecommendations: Array<{ __typename?: 'PlayerRecommendationResult', id: string, recommendationScore: number, recommendationType: string, rankChange?: number | null, currentRank: number, previousRank?: number | null, timestamp: string, previousTimestamp?: string | null, player: { __typename?: 'Player', id: string, knownName: string, firstName: string, lastName: string, isWatchedByCurrentUser?: boolean | null, team?: { __typename?: 'Team', id: string, name: string } | null, positions?: Array<{ __typename?: 'Position', id: string, name: string, abbreviation?: string | null } | null> | null, playerRatingTimeSeries?: Array<{ __typename?: 'PlayerRatingTimeSeries', ggUnifiedSeasonKey?: number | null, gpr?: number | null, zVaep?: number | null, zGpm?: number | null }> | null } }> };

export type RecommendationsRemovePlayerFromRecommendationsMutationVariables = Exact<{
  playerId: Scalars['ID'];
}>;


export type RecommendationsRemovePlayerFromRecommendationsMutation = { __typename?: 'Mutation', removePlayerFromRecommendations?: { __typename?: 'Player', id: string, knownName: string, firstName: string, lastName: string, isWatchedByCurrentUser?: boolean | null, team?: { __typename?: 'Team', id: string, name: string } | null, positions?: Array<{ __typename?: 'Position', id: string, name: string, abbreviation?: string | null } | null> | null, playerRatingTimeSeries?: Array<{ __typename?: 'PlayerRatingTimeSeries', ggUnifiedSeasonKey?: number | null, gpr?: number | null, zVaep?: number | null, zGpm?: number | null }> | null } | null };

export type ReportsPlayerMatchFragment = { __typename?: 'PlayerMatch', id: string, competitionKey: string, seasonKey: string, matchId: string, teamName: string, oppositionName: string, matchDate: string, ground: string, selectBox: string };

export type ReportsListPlayerMatchesQueryVariables = Exact<{
  playerId: Scalars['ID'];
  first?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
}>;


export type ReportsListPlayerMatchesQuery = { __typename?: 'Query', listPlayerMatches: { __typename?: 'PlayerMatchConnection', edges: Array<{ __typename?: 'PlayerMatchEdge', cursor: string, node: { __typename?: 'PlayerMatch', id: string, competitionKey: string, seasonKey: string, matchId: string, teamName: string, oppositionName: string, matchDate: string, ground: string, selectBox: string } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor?: string | null } } };

export type RosterManagementLeagueConnectionFragment = { __typename?: 'LeagueConnection', edges: Array<{ __typename?: 'LeagueEdge', cursor: string, node: { __typename?: 'League', id: string, name: string, isMyOrganizationLeague?: boolean | null, country?: string | null, sport: { __typename?: 'Sport', id: string, name: string } } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor?: string | null } };

export type RosterManagementLeagueEdgeFragment = { __typename?: 'LeagueEdge', cursor: string, node: { __typename?: 'League', id: string, name: string, isMyOrganizationLeague?: boolean | null, country?: string | null, sport: { __typename?: 'Sport', id: string, name: string } } };

export type RosterManagementSportFragment = { __typename?: 'Sport', id: string, name: string };

export type RosterManagementLeagueFragment = { __typename?: 'League', id: string, name: string, isMyOrganizationLeague?: boolean | null, country?: string | null, sport: { __typename?: 'Sport', id: string, name: string } };

export type RosterManagementTeamConnectionFragment = { __typename?: 'TeamConnection', edges: Array<{ __typename?: 'TeamEdge', cursor: string, node: { __typename?: 'Team', id: string, name: string, isMyOrganizationTeam?: boolean | null } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor?: string | null } };

export type RosterManagementTeamEdgeFragment = { __typename?: 'TeamEdge', cursor: string, node: { __typename?: 'Team', id: string, name: string, isMyOrganizationTeam?: boolean | null } };

export type RosterManagementTeamFragment = { __typename?: 'Team', id: string, name: string, isMyOrganizationTeam?: boolean | null };

export type RosterManagmentOrganizationTeamFragment = { __typename?: 'OrganizationTeam', id: string, organizationId: string, teamId: string };

export type RosterManagmentOrganizationLeagueFragment = { __typename?: 'OrganizationLeague', id: string, organizationId: string, leagueId: string };

export type RosterManagementGetOrganizationTeamByOrganizationIdAndTeamIdQueryVariables = Exact<{
  organizationId: Scalars['ID'];
  teamId: Scalars['ID'];
}>;


export type RosterManagementGetOrganizationTeamByOrganizationIdAndTeamIdQuery = { __typename?: 'Query', getOrganizationTeamByOrganizationIdAndTeamId: { __typename?: 'OrganizationTeam', id: string, organizationId: string, teamId: string } };

export type RosterManagementListMyOrganizationsPlayersQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  sortBy?: InputMaybe<SortField>;
  sortOrder?: InputMaybe<OrderByDirection>;
  positionIds?: InputMaybe<Array<Scalars['ID']> | Scalars['ID']>;
}>;


export type RosterManagementListMyOrganizationsPlayersQuery = { __typename?: 'Query', listMyOrganizationsPlayers: { __typename?: 'PlayerConnection', edges: Array<{ __typename?: 'PlayerEdge', cursor: string, node: { __typename?: 'Player', id: string, knownName: string, firstName: string, lastName: string, timeDecayedGPR?: number | null, isWatchedByCurrentUser?: boolean | null, team?: { __typename?: 'Team', id: string, name: string } | null, positions?: Array<{ __typename?: 'Position', id: string, name: string, abbreviation?: string | null } | null> | null, seasonWeightedAvgMetrics?: Array<{ __typename?: 'PlayerSeasonWeightedAvgMetrics', epm?: number | null, seasonalGpm?: number | null, ggUnifiedSeasonKey: number } | null> | null, bioData?: { __typename?: 'PlayerBioData', ggPlayerKey: string, dateOfBirth?: string | null, age?: number | null, foot?: string | null, roleArchetype?: string | null, isInjured: boolean, contractExpires?: string | null, playerValuation?: number | null, gpm?: number | null, gpr?: number | null, timeDecayedSeasonalGpm?: number | null, timeDecayedZVaep?: number | null, fitScore?: number | null, teamStyleFit?: number | null, passingTransGlobalCategoricalScore?: number | null, shotLocationTransGlobalCategoricalScore?: number | null, dribblingTransGlobalCategoricalScore?: number | null, carryingTransGlobalCategoricalScore?: number | null, gkShotStoppingTransCategoricalScore?: number | null, gkPositioningTransCategoricalScore?: number | null, gkPassingTransCategoricalScore?: number | null, llmDerivedSummary?: string | null } | null, seasonCategoricalScores?: Array<{ __typename?: 'PlayerSeasonCategoricalScore', ggUnifiedSeasonKey: number, carryingTransPositionalCategoricalScore?: number | null, dribblingTransPositionalCategoricalScore?: number | null, gkPassingTransCategoricalScore?: number | null, gkPositioningTransCategoricalScore?: number | null, gkShotStoppingTransCategoricalScore?: number | null, passingTransPositionalCategoricalScore?: number | null, shotLocationTransPositionalCategoricalScore?: number | null } | null> | null } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } };

export type RosterManagementListMyOrganizationsTeamsQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
}>;


export type RosterManagementListMyOrganizationsTeamsQuery = { __typename?: 'Query', listMyOrganizationsTeams: { __typename?: 'TeamConnection', edges: Array<{ __typename?: 'TeamEdge', cursor: string, node: { __typename?: 'Team', id: string, name: string, isMyOrganizationTeam?: boolean | null } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor?: string | null } } };

export type RosterManagementListMyOrganizationsLeaguesQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
}>;


export type RosterManagementListMyOrganizationsLeaguesQuery = { __typename?: 'Query', listMyOrganizationsLeagues: { __typename?: 'LeagueConnection', edges: Array<{ __typename?: 'LeagueEdge', cursor: string, node: { __typename?: 'League', id: string, name: string, isMyOrganizationLeague?: boolean | null, country?: string | null, sport: { __typename?: 'Sport', id: string, name: string } } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor?: string | null } } };

export type RosterManagementListMyOrganizationsEligibleTeamsQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
}>;


export type RosterManagementListMyOrganizationsEligibleTeamsQuery = { __typename?: 'Query', listMyOrganizationsEligibleTeams: { __typename?: 'TeamConnection', edges: Array<{ __typename?: 'TeamEdge', cursor: string, node: { __typename?: 'Team', id: string, name: string, isMyOrganizationTeam?: boolean | null } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor?: string | null } } };

export type RosterManagementListLeaguesQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
}>;


export type RosterManagementListLeaguesQuery = { __typename?: 'Query', listLeagues: { __typename?: 'LeagueConnection', edges: Array<{ __typename?: 'LeagueEdge', cursor: string, node: { __typename?: 'League', id: string, name: string, isMyOrganizationLeague?: boolean | null, country?: string | null, sport: { __typename?: 'Sport', id: string, name: string } } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor?: string | null } } };

export type RosterManagementNationalityFragment = { __typename?: 'Nationality', id: string, name: string };

export type RosterManagementNationalityEdgeFragment = { __typename?: 'NationalityEdge', cursor: string, node: { __typename?: 'Nationality', id: string, name: string } };

export type RosterManagementNationalityConnectionFragment = { __typename?: 'NationalityConnection', edges: Array<{ __typename?: 'NationalityEdge', cursor: string, node: { __typename?: 'Nationality', id: string, name: string } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor?: string | null } };

export type RosterManagementListNationalitiesQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
}>;


export type RosterManagementListNationalitiesQuery = { __typename?: 'Query', listNationalities: { __typename?: 'NationalityConnection', edges: Array<{ __typename?: 'NationalityEdge', cursor: string, node: { __typename?: 'Nationality', id: string, name: string } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor?: string | null } } };

export type RosterManagementCreateOrganizationLeagueMutationVariables = Exact<{
  input: CreateOrganizationLeagueInput;
}>;


export type RosterManagementCreateOrganizationLeagueMutation = { __typename?: 'Mutation', createOrganizationLeague: { __typename?: 'OrganizationLeague', id: string, organizationId: string, leagueId: string } };

export type RosterManagementDeleteOrganizationLeagueMutationVariables = Exact<{
  input: DeleteOrganizationLeagueInput;
}>;


export type RosterManagementDeleteOrganizationLeagueMutation = { __typename?: 'Mutation', deleteOrganizationLeague: { __typename?: 'OrganizationLeague', id: string, organizationId: string, leagueId: string } };

export type RosterManagementCreateOrganizationTeamMutationVariables = Exact<{
  input: CreateOrganizationTeamInput;
}>;


export type RosterManagementCreateOrganizationTeamMutation = { __typename?: 'Mutation', createOrganizationTeam: { __typename?: 'OrganizationTeam', id: string, organizationId: string, teamId: string } };

export type RosterManagementDeleteOrganizationTeamMutationVariables = Exact<{
  input: DeleteOrganizationTeamInput;
}>;


export type RosterManagementDeleteOrganizationTeamMutation = { __typename?: 'Mutation', deleteOrganizationTeam: { __typename?: 'OrganizationTeam', id: string, organizationId: string, teamId: string } };

export type ShadowTeamPlayerSearchPlayerFragment = { __typename?: 'Player', id: string, knownName: string, firstName: string, lastName: string, isWatchedByCurrentUser?: boolean | null, timeDecayedGPR?: number | null, isOnShadowTeam?: boolean | null, positions?: Array<{ __typename?: 'Position', id: string, name: string, abbreviation?: string | null } | null> | null, team?: { __typename?: 'Team', id: string, name: string } | null, bioData?: { __typename?: 'PlayerBioData', ggPlayerKey: string, fitScore?: number | null, teamStyleFit?: number | null, playerValuation?: number | null, carryingTransGlobalCategoricalScore?: number | null, dribblingTransGlobalCategoricalScore?: number | null, passingTransGlobalCategoricalScore?: number | null, shotLocationTransGlobalCategoricalScore?: number | null, gkPassingTransCategoricalScore?: number | null, gkPositioningTransCategoricalScore?: number | null, gkShotStoppingTransCategoricalScore?: number | null, contractExpires?: string | null, gpr?: number | null } | null };

export type ShadowTeamPlayerBioDataFragment = { __typename?: 'PlayerBioData', age?: number | null, archetypeGgPlayerKey?: string | null, roleArchetype?: string | null, contractExpires?: string | null, contractOption?: string | null, currentClub?: string | null, currentLeague?: string | null, dateOfBirth?: string | null, fitScore?: number | null, foot?: string | null, ggPlayerKey: string, gpm?: number | null, gpr?: number | null };

export type ShadowTeamPlayerFragment = { __typename?: 'ShadowTeamPlayer', id: string, order?: number | null, position?: number | null, playerId: string, createdAt: string, updatedAt: string, shadowTeamId: string, isManualAdding: boolean, player: { __typename?: 'Player', id: string, knownName: string, firstName: string, lastName: string, isWatchedByCurrentUser?: boolean | null, timeDecayedGPR?: number | null, positions?: Array<{ __typename?: 'Position', id: string, name: string, abbreviation?: string | null } | null> | null, nationality?: { __typename?: 'Nationality', id: string, name: string } | null, bioData?: { __typename?: 'PlayerBioData', age?: number | null, archetypeGgPlayerKey?: string | null, roleArchetype?: string | null, contractExpires?: string | null, contractOption?: string | null, currentClub?: string | null, currentLeague?: string | null, dateOfBirth?: string | null, fitScore?: number | null, foot?: string | null, ggPlayerKey: string, gpm?: number | null, gpr?: number | null, height?: number | null, injuredUntil?: string | null, isInjured: boolean, strengths?: Array<string> | null, weaknesses?: Array<string> | null, carryingTransGlobalCategoricalScore?: number | null, dribblingTransGlobalCategoricalScore?: number | null, gkPassingTransCategoricalScore?: number | null, gkPositioningTransCategoricalScore?: number | null, gkShotStoppingTransCategoricalScore?: number | null, passingTransGlobalCategoricalScore?: number | null, shotLocationTransGlobalCategoricalScore?: number | null, playerValuation?: number | null, llmDerivedSummary?: string | null, timeDecayedSeasonalGpm?: number | null, threats?: Array<string> | null, opportunities?: Array<string> | null, timeDecayedVaep?: number | null, timeDecayedZVaep?: number | null, teamStyleFit?: number | null, playerAgent?: string | null, primaryPosition?: string | null, generalPosition?: string | null } | null, team?: { __typename?: 'Team', id: string, name: string } | null, seasonWeightedAvgMetrics?: Array<{ __typename?: 'PlayerSeasonWeightedAvgMetrics', epm?: number | null, seasonalGpm?: number | null, ggUnifiedSeasonKey: number } | null> | null, scoutReports?: Array<{ __typename?: 'PlayerScoutReport', reportId?: string | null, ggPlayerKey: string, scoutName?: string | null, reportDate?: string | null, team?: string | null, opponent?: string | null, ground?: string | null, overallScore?: number | null, qnaText?: string | null, matches?: Array<{ __typename?: 'MatchDetail', team?: string | null, opponent?: string | null, ground?: string | null, matchDate?: string | null } | null> | null } | null> | null, seasonCategoricalScores?: Array<{ __typename?: 'PlayerSeasonCategoricalScore', ggUnifiedSeasonKey: number, carryingTransPositionalCategoricalScore?: number | null, dribblingTransPositionalCategoricalScore?: number | null, gkPassingTransCategoricalScore?: number | null, gkPositioningTransCategoricalScore?: number | null, gkShotStoppingTransCategoricalScore?: number | null, passingTransPositionalCategoricalScore?: number | null, shotLocationTransGlobalCategoricalScore?: number | null, shotLocationTransPositionalCategoricalScore?: number | null } | null> | null } };

export type ShadowTeamFragment = { __typename?: 'ShadowTeam', id: string, name: string, createdAt: string, updatedAt: string, formation?: ShadowTeamFormation | null, avgTeamGPR: number };

export type ShadowTeamDetailFragment = { __typename?: 'ShadowTeam', id: string, name: string, createdAt: string, updatedAt: string, formation?: ShadowTeamFormation | null, avgTeamGPR: number, assignedPlayers?: Array<{ __typename?: 'ShadowTeamPlayer', id: string, order?: number | null, position?: number | null, playerId: string, createdAt: string, updatedAt: string, shadowTeamId: string, isManualAdding: boolean, player: { __typename?: 'Player', id: string, knownName: string, firstName: string, lastName: string, isWatchedByCurrentUser?: boolean | null, timeDecayedGPR?: number | null, positions?: Array<{ __typename?: 'Position', id: string, name: string, abbreviation?: string | null } | null> | null, nationality?: { __typename?: 'Nationality', id: string, name: string } | null, bioData?: { __typename?: 'PlayerBioData', age?: number | null, archetypeGgPlayerKey?: string | null, roleArchetype?: string | null, contractExpires?: string | null, contractOption?: string | null, currentClub?: string | null, currentLeague?: string | null, dateOfBirth?: string | null, fitScore?: number | null, foot?: string | null, ggPlayerKey: string, gpm?: number | null, gpr?: number | null, height?: number | null, injuredUntil?: string | null, isInjured: boolean, strengths?: Array<string> | null, weaknesses?: Array<string> | null, carryingTransGlobalCategoricalScore?: number | null, dribblingTransGlobalCategoricalScore?: number | null, gkPassingTransCategoricalScore?: number | null, gkPositioningTransCategoricalScore?: number | null, gkShotStoppingTransCategoricalScore?: number | null, passingTransGlobalCategoricalScore?: number | null, shotLocationTransGlobalCategoricalScore?: number | null, playerValuation?: number | null, llmDerivedSummary?: string | null, timeDecayedSeasonalGpm?: number | null, threats?: Array<string> | null, opportunities?: Array<string> | null, timeDecayedVaep?: number | null, timeDecayedZVaep?: number | null, teamStyleFit?: number | null, playerAgent?: string | null, primaryPosition?: string | null, generalPosition?: string | null } | null, team?: { __typename?: 'Team', id: string, name: string } | null, seasonWeightedAvgMetrics?: Array<{ __typename?: 'PlayerSeasonWeightedAvgMetrics', epm?: number | null, seasonalGpm?: number | null, ggUnifiedSeasonKey: number } | null> | null, scoutReports?: Array<{ __typename?: 'PlayerScoutReport', reportId?: string | null, ggPlayerKey: string, scoutName?: string | null, reportDate?: string | null, team?: string | null, opponent?: string | null, ground?: string | null, overallScore?: number | null, qnaText?: string | null, matches?: Array<{ __typename?: 'MatchDetail', team?: string | null, opponent?: string | null, ground?: string | null, matchDate?: string | null } | null> | null } | null> | null, seasonCategoricalScores?: Array<{ __typename?: 'PlayerSeasonCategoricalScore', ggUnifiedSeasonKey: number, carryingTransPositionalCategoricalScore?: number | null, dribblingTransPositionalCategoricalScore?: number | null, gkPassingTransCategoricalScore?: number | null, gkPositioningTransCategoricalScore?: number | null, gkShotStoppingTransCategoricalScore?: number | null, passingTransPositionalCategoricalScore?: number | null, shotLocationTransGlobalCategoricalScore?: number | null, shotLocationTransPositionalCategoricalScore?: number | null } | null> | null } }> | null };

export type ShadowTeamSearchPlayerEdgeFragment = { __typename?: 'PlayerEdge', cursor: string, node: { __typename?: 'Player', id: string, knownName: string, firstName: string, lastName: string, isWatchedByCurrentUser?: boolean | null, timeDecayedGPR?: number | null, isOnShadowTeam?: boolean | null, positions?: Array<{ __typename?: 'Position', id: string, name: string, abbreviation?: string | null } | null> | null, team?: { __typename?: 'Team', id: string, name: string } | null, bioData?: { __typename?: 'PlayerBioData', ggPlayerKey: string, fitScore?: number | null, teamStyleFit?: number | null, playerValuation?: number | null, carryingTransGlobalCategoricalScore?: number | null, dribblingTransGlobalCategoricalScore?: number | null, passingTransGlobalCategoricalScore?: number | null, shotLocationTransGlobalCategoricalScore?: number | null, gkPassingTransCategoricalScore?: number | null, gkPositioningTransCategoricalScore?: number | null, gkShotStoppingTransCategoricalScore?: number | null, contractExpires?: string | null, gpr?: number | null } | null } };

export type ShadowTeamSearchPlayerConnectionFragment = { __typename?: 'PlayerConnection', edges: Array<{ __typename?: 'PlayerEdge', cursor: string, node: { __typename?: 'Player', id: string, knownName: string, firstName: string, lastName: string, isWatchedByCurrentUser?: boolean | null, timeDecayedGPR?: number | null, isOnShadowTeam?: boolean | null, positions?: Array<{ __typename?: 'Position', id: string, name: string, abbreviation?: string | null } | null> | null, team?: { __typename?: 'Team', id: string, name: string } | null, bioData?: { __typename?: 'PlayerBioData', ggPlayerKey: string, fitScore?: number | null, teamStyleFit?: number | null, playerValuation?: number | null, carryingTransGlobalCategoricalScore?: number | null, dribblingTransGlobalCategoricalScore?: number | null, passingTransGlobalCategoricalScore?: number | null, shotLocationTransGlobalCategoricalScore?: number | null, gkPassingTransCategoricalScore?: number | null, gkPositioningTransCategoricalScore?: number | null, gkShotStoppingTransCategoricalScore?: number | null, contractExpires?: string | null, gpr?: number | null } | null } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } };

export type ShadowTeamEdgeFragment = { __typename?: 'ShadowTeamEdge', cursor: string, node: { __typename?: 'ShadowTeam', id: string, name: string, createdAt: string, updatedAt: string, formation?: ShadowTeamFormation | null, avgTeamGPR: number } };

export type ShadowTeamPlayerEdgeFragment = { __typename?: 'ShadowTeamPlayerEdge', cursor: string, node: { __typename?: 'ShadowTeamPlayer', id: string, order?: number | null, position?: number | null, playerId: string, createdAt: string, updatedAt: string, shadowTeamId: string, isManualAdding: boolean, player: { __typename?: 'Player', id: string, knownName: string, firstName: string, lastName: string, isWatchedByCurrentUser?: boolean | null, timeDecayedGPR?: number | null, positions?: Array<{ __typename?: 'Position', id: string, name: string, abbreviation?: string | null } | null> | null, nationality?: { __typename?: 'Nationality', id: string, name: string } | null, bioData?: { __typename?: 'PlayerBioData', age?: number | null, archetypeGgPlayerKey?: string | null, roleArchetype?: string | null, contractExpires?: string | null, contractOption?: string | null, currentClub?: string | null, currentLeague?: string | null, dateOfBirth?: string | null, fitScore?: number | null, foot?: string | null, ggPlayerKey: string, gpm?: number | null, gpr?: number | null, height?: number | null, injuredUntil?: string | null, isInjured: boolean, strengths?: Array<string> | null, weaknesses?: Array<string> | null, carryingTransGlobalCategoricalScore?: number | null, dribblingTransGlobalCategoricalScore?: number | null, gkPassingTransCategoricalScore?: number | null, gkPositioningTransCategoricalScore?: number | null, gkShotStoppingTransCategoricalScore?: number | null, passingTransGlobalCategoricalScore?: number | null, shotLocationTransGlobalCategoricalScore?: number | null, playerValuation?: number | null, llmDerivedSummary?: string | null, timeDecayedSeasonalGpm?: number | null, threats?: Array<string> | null, opportunities?: Array<string> | null, timeDecayedVaep?: number | null, timeDecayedZVaep?: number | null, teamStyleFit?: number | null, playerAgent?: string | null, primaryPosition?: string | null, generalPosition?: string | null } | null, team?: { __typename?: 'Team', id: string, name: string } | null, seasonWeightedAvgMetrics?: Array<{ __typename?: 'PlayerSeasonWeightedAvgMetrics', epm?: number | null, seasonalGpm?: number | null, ggUnifiedSeasonKey: number } | null> | null, scoutReports?: Array<{ __typename?: 'PlayerScoutReport', reportId?: string | null, ggPlayerKey: string, scoutName?: string | null, reportDate?: string | null, team?: string | null, opponent?: string | null, ground?: string | null, overallScore?: number | null, qnaText?: string | null, matches?: Array<{ __typename?: 'MatchDetail', team?: string | null, opponent?: string | null, ground?: string | null, matchDate?: string | null } | null> | null } | null> | null, seasonCategoricalScores?: Array<{ __typename?: 'PlayerSeasonCategoricalScore', ggUnifiedSeasonKey: number, carryingTransPositionalCategoricalScore?: number | null, dribblingTransPositionalCategoricalScore?: number | null, gkPassingTransCategoricalScore?: number | null, gkPositioningTransCategoricalScore?: number | null, gkShotStoppingTransCategoricalScore?: number | null, passingTransPositionalCategoricalScore?: number | null, shotLocationTransGlobalCategoricalScore?: number | null, shotLocationTransPositionalCategoricalScore?: number | null } | null> | null } } };

export type ShadowTeamConnectionFragment = { __typename?: 'ShadowTeamConnection', edges: Array<{ __typename?: 'ShadowTeamEdge', cursor: string, node: { __typename?: 'ShadowTeam', id: string, name: string, createdAt: string, updatedAt: string, formation?: ShadowTeamFormation | null, avgTeamGPR: number } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor?: string | null } };

export type ShadowTeamPlayerConnectionFragment = { __typename?: 'ShadowTeamPlayerConnection', edges: Array<{ __typename?: 'ShadowTeamPlayerEdge', cursor: string, node: { __typename?: 'ShadowTeamPlayer', id: string, order?: number | null, position?: number | null, playerId: string, createdAt: string, updatedAt: string, shadowTeamId: string, isManualAdding: boolean, player: { __typename?: 'Player', id: string, knownName: string, firstName: string, lastName: string, isWatchedByCurrentUser?: boolean | null, timeDecayedGPR?: number | null, positions?: Array<{ __typename?: 'Position', id: string, name: string, abbreviation?: string | null } | null> | null, nationality?: { __typename?: 'Nationality', id: string, name: string } | null, bioData?: { __typename?: 'PlayerBioData', age?: number | null, archetypeGgPlayerKey?: string | null, roleArchetype?: string | null, contractExpires?: string | null, contractOption?: string | null, currentClub?: string | null, currentLeague?: string | null, dateOfBirth?: string | null, fitScore?: number | null, foot?: string | null, ggPlayerKey: string, gpm?: number | null, gpr?: number | null, height?: number | null, injuredUntil?: string | null, isInjured: boolean, strengths?: Array<string> | null, weaknesses?: Array<string> | null, carryingTransGlobalCategoricalScore?: number | null, dribblingTransGlobalCategoricalScore?: number | null, gkPassingTransCategoricalScore?: number | null, gkPositioningTransCategoricalScore?: number | null, gkShotStoppingTransCategoricalScore?: number | null, passingTransGlobalCategoricalScore?: number | null, shotLocationTransGlobalCategoricalScore?: number | null, playerValuation?: number | null, llmDerivedSummary?: string | null, timeDecayedSeasonalGpm?: number | null, threats?: Array<string> | null, opportunities?: Array<string> | null, timeDecayedVaep?: number | null, timeDecayedZVaep?: number | null, teamStyleFit?: number | null, playerAgent?: string | null, primaryPosition?: string | null, generalPosition?: string | null } | null, team?: { __typename?: 'Team', id: string, name: string } | null, seasonWeightedAvgMetrics?: Array<{ __typename?: 'PlayerSeasonWeightedAvgMetrics', epm?: number | null, seasonalGpm?: number | null, ggUnifiedSeasonKey: number } | null> | null, scoutReports?: Array<{ __typename?: 'PlayerScoutReport', reportId?: string | null, ggPlayerKey: string, scoutName?: string | null, reportDate?: string | null, team?: string | null, opponent?: string | null, ground?: string | null, overallScore?: number | null, qnaText?: string | null, matches?: Array<{ __typename?: 'MatchDetail', team?: string | null, opponent?: string | null, ground?: string | null, matchDate?: string | null } | null> | null } | null> | null, seasonCategoricalScores?: Array<{ __typename?: 'PlayerSeasonCategoricalScore', ggUnifiedSeasonKey: number, carryingTransPositionalCategoricalScore?: number | null, dribblingTransPositionalCategoricalScore?: number | null, gkPassingTransCategoricalScore?: number | null, gkPositioningTransCategoricalScore?: number | null, gkShotStoppingTransCategoricalScore?: number | null, passingTransPositionalCategoricalScore?: number | null, shotLocationTransGlobalCategoricalScore?: number | null, shotLocationTransPositionalCategoricalScore?: number | null } | null> | null } } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor?: string | null } };

export type ShadowTeamListShadowTeamsQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  orderBy?: InputMaybe<ListShadowTeamOrderByInput>;
}>;


export type ShadowTeamListShadowTeamsQuery = { __typename?: 'Query', listShadowTeams: { __typename?: 'ShadowTeamConnection', edges: Array<{ __typename?: 'ShadowTeamEdge', cursor: string, node: { __typename?: 'ShadowTeam', id: string, name: string, createdAt: string, updatedAt: string, formation?: ShadowTeamFormation | null, avgTeamGPR: number } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor?: string | null } } };

export type ShadowTeamListShadowTeamPlayersQueryVariables = Exact<{
  shadowTeamId: Scalars['ID'];
  query?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
}>;


export type ShadowTeamListShadowTeamPlayersQuery = { __typename?: 'Query', listShadowTeamPlayers: { __typename?: 'ShadowTeamPlayerConnection', edges: Array<{ __typename?: 'ShadowTeamPlayerEdge', cursor: string, node: { __typename?: 'ShadowTeamPlayer', id: string, order?: number | null, position?: number | null, playerId: string, createdAt: string, updatedAt: string, shadowTeamId: string, isManualAdding: boolean, player: { __typename?: 'Player', id: string, knownName: string, firstName: string, lastName: string, isWatchedByCurrentUser?: boolean | null, timeDecayedGPR?: number | null, positions?: Array<{ __typename?: 'Position', id: string, name: string, abbreviation?: string | null } | null> | null, nationality?: { __typename?: 'Nationality', id: string, name: string } | null, bioData?: { __typename?: 'PlayerBioData', age?: number | null, archetypeGgPlayerKey?: string | null, roleArchetype?: string | null, contractExpires?: string | null, contractOption?: string | null, currentClub?: string | null, currentLeague?: string | null, dateOfBirth?: string | null, fitScore?: number | null, foot?: string | null, ggPlayerKey: string, gpm?: number | null, gpr?: number | null, height?: number | null, injuredUntil?: string | null, isInjured: boolean, strengths?: Array<string> | null, weaknesses?: Array<string> | null, carryingTransGlobalCategoricalScore?: number | null, dribblingTransGlobalCategoricalScore?: number | null, gkPassingTransCategoricalScore?: number | null, gkPositioningTransCategoricalScore?: number | null, gkShotStoppingTransCategoricalScore?: number | null, passingTransGlobalCategoricalScore?: number | null, shotLocationTransGlobalCategoricalScore?: number | null, playerValuation?: number | null, llmDerivedSummary?: string | null, timeDecayedSeasonalGpm?: number | null, threats?: Array<string> | null, opportunities?: Array<string> | null, timeDecayedVaep?: number | null, timeDecayedZVaep?: number | null, teamStyleFit?: number | null, playerAgent?: string | null, primaryPosition?: string | null, generalPosition?: string | null } | null, team?: { __typename?: 'Team', id: string, name: string } | null, seasonWeightedAvgMetrics?: Array<{ __typename?: 'PlayerSeasonWeightedAvgMetrics', epm?: number | null, seasonalGpm?: number | null, ggUnifiedSeasonKey: number } | null> | null, scoutReports?: Array<{ __typename?: 'PlayerScoutReport', reportId?: string | null, ggPlayerKey: string, scoutName?: string | null, reportDate?: string | null, team?: string | null, opponent?: string | null, ground?: string | null, overallScore?: number | null, qnaText?: string | null, matches?: Array<{ __typename?: 'MatchDetail', team?: string | null, opponent?: string | null, ground?: string | null, matchDate?: string | null } | null> | null } | null> | null, seasonCategoricalScores?: Array<{ __typename?: 'PlayerSeasonCategoricalScore', ggUnifiedSeasonKey: number, carryingTransPositionalCategoricalScore?: number | null, dribblingTransPositionalCategoricalScore?: number | null, gkPassingTransCategoricalScore?: number | null, gkPositioningTransCategoricalScore?: number | null, gkShotStoppingTransCategoricalScore?: number | null, passingTransPositionalCategoricalScore?: number | null, shotLocationTransGlobalCategoricalScore?: number | null, shotLocationTransPositionalCategoricalScore?: number | null } | null> | null } } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor?: string | null } } };

export type ShadowTeamGetShadowTeamQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ShadowTeamGetShadowTeamQuery = { __typename?: 'Query', getShadowTeam?: { __typename?: 'ShadowTeam', id: string, name: string, createdAt: string, updatedAt: string, formation?: ShadowTeamFormation | null, avgTeamGPR: number, assignedPlayers?: Array<{ __typename?: 'ShadowTeamPlayer', id: string, order?: number | null, position?: number | null, playerId: string, createdAt: string, updatedAt: string, shadowTeamId: string, isManualAdding: boolean, player: { __typename?: 'Player', id: string, knownName: string, firstName: string, lastName: string, isWatchedByCurrentUser?: boolean | null, timeDecayedGPR?: number | null, positions?: Array<{ __typename?: 'Position', id: string, name: string, abbreviation?: string | null } | null> | null, nationality?: { __typename?: 'Nationality', id: string, name: string } | null, bioData?: { __typename?: 'PlayerBioData', age?: number | null, archetypeGgPlayerKey?: string | null, roleArchetype?: string | null, contractExpires?: string | null, contractOption?: string | null, currentClub?: string | null, currentLeague?: string | null, dateOfBirth?: string | null, fitScore?: number | null, foot?: string | null, ggPlayerKey: string, gpm?: number | null, gpr?: number | null, height?: number | null, injuredUntil?: string | null, isInjured: boolean, strengths?: Array<string> | null, weaknesses?: Array<string> | null, carryingTransGlobalCategoricalScore?: number | null, dribblingTransGlobalCategoricalScore?: number | null, gkPassingTransCategoricalScore?: number | null, gkPositioningTransCategoricalScore?: number | null, gkShotStoppingTransCategoricalScore?: number | null, passingTransGlobalCategoricalScore?: number | null, shotLocationTransGlobalCategoricalScore?: number | null, playerValuation?: number | null, llmDerivedSummary?: string | null, timeDecayedSeasonalGpm?: number | null, threats?: Array<string> | null, opportunities?: Array<string> | null, timeDecayedVaep?: number | null, timeDecayedZVaep?: number | null, teamStyleFit?: number | null, playerAgent?: string | null, primaryPosition?: string | null, generalPosition?: string | null } | null, team?: { __typename?: 'Team', id: string, name: string } | null, seasonWeightedAvgMetrics?: Array<{ __typename?: 'PlayerSeasonWeightedAvgMetrics', epm?: number | null, seasonalGpm?: number | null, ggUnifiedSeasonKey: number } | null> | null, scoutReports?: Array<{ __typename?: 'PlayerScoutReport', reportId?: string | null, ggPlayerKey: string, scoutName?: string | null, reportDate?: string | null, team?: string | null, opponent?: string | null, ground?: string | null, overallScore?: number | null, qnaText?: string | null, matches?: Array<{ __typename?: 'MatchDetail', team?: string | null, opponent?: string | null, ground?: string | null, matchDate?: string | null } | null> | null } | null> | null, seasonCategoricalScores?: Array<{ __typename?: 'PlayerSeasonCategoricalScore', ggUnifiedSeasonKey: number, carryingTransPositionalCategoricalScore?: number | null, dribblingTransPositionalCategoricalScore?: number | null, gkPassingTransCategoricalScore?: number | null, gkPositioningTransCategoricalScore?: number | null, gkShotStoppingTransCategoricalScore?: number | null, passingTransPositionalCategoricalScore?: number | null, shotLocationTransGlobalCategoricalScore?: number | null, shotLocationTransPositionalCategoricalScore?: number | null } | null> | null } }> | null } | null };

export type ShadowTeamSearchAvailablePlayersForShadowTeamQueryVariables = Exact<{
  shadowTeamId: Scalars['ID'];
  query?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
}>;


export type ShadowTeamSearchAvailablePlayersForShadowTeamQuery = { __typename?: 'Query', searchAvailablePlayersForShadowTeam: { __typename?: 'PlayerConnection', edges: Array<{ __typename?: 'PlayerEdge', cursor: string, node: { __typename?: 'Player', id: string, knownName: string, firstName: string, lastName: string, isWatchedByCurrentUser?: boolean | null, timeDecayedGPR?: number | null, positions?: Array<{ __typename?: 'Position', id: string, name: string, abbreviation?: string | null } | null> | null, team?: { __typename?: 'Team', id: string, name: string } | null, bioData?: { __typename?: 'PlayerBioData', ggPlayerKey: string, fitScore?: number | null, teamStyleFit?: number | null, playerValuation?: number | null, carryingTransGlobalCategoricalScore?: number | null, dribblingTransGlobalCategoricalScore?: number | null, passingTransGlobalCategoricalScore?: number | null, shotLocationTransGlobalCategoricalScore?: number | null, gkPassingTransCategoricalScore?: number | null, gkPositioningTransCategoricalScore?: number | null, gkShotStoppingTransCategoricalScore?: number | null, contractExpires?: string | null, gpr?: number | null } | null } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } };

export type ShadowTeamCreateShadowTeamMutationVariables = Exact<{
  input: CreateShadowTeamInput;
}>;


export type ShadowTeamCreateShadowTeamMutation = { __typename?: 'Mutation', createShadowTeam: { __typename?: 'ShadowTeam', id: string, name: string, createdAt: string, updatedAt: string, formation?: ShadowTeamFormation | null, avgTeamGPR: number } };

export type ShadowTeamDeleteShadowTeamMutationVariables = Exact<{
  input: DeleteShadowTeamInput;
}>;


export type ShadowTeamDeleteShadowTeamMutation = { __typename?: 'Mutation', deleteShadowTeam: { __typename?: 'ShadowTeam', id: string, name: string, createdAt: string, updatedAt: string, formation?: ShadowTeamFormation | null, avgTeamGPR: number } };

export type ShadowTeamUpdateShadowTeamMutationVariables = Exact<{
  input: UpdateShadowTeamInput;
}>;


export type ShadowTeamUpdateShadowTeamMutation = { __typename?: 'Mutation', updateShadowTeam: { __typename?: 'ShadowTeam', id: string, name: string, createdAt: string, updatedAt: string, formation?: ShadowTeamFormation | null, avgTeamGPR: number, assignedPlayers?: Array<{ __typename?: 'ShadowTeamPlayer', id: string, order?: number | null, position?: number | null, playerId: string, createdAt: string, updatedAt: string, shadowTeamId: string, isManualAdding: boolean, player: { __typename?: 'Player', id: string, knownName: string, firstName: string, lastName: string, isWatchedByCurrentUser?: boolean | null, timeDecayedGPR?: number | null, positions?: Array<{ __typename?: 'Position', id: string, name: string, abbreviation?: string | null } | null> | null, nationality?: { __typename?: 'Nationality', id: string, name: string } | null, bioData?: { __typename?: 'PlayerBioData', age?: number | null, archetypeGgPlayerKey?: string | null, roleArchetype?: string | null, contractExpires?: string | null, contractOption?: string | null, currentClub?: string | null, currentLeague?: string | null, dateOfBirth?: string | null, fitScore?: number | null, foot?: string | null, ggPlayerKey: string, gpm?: number | null, gpr?: number | null, height?: number | null, injuredUntil?: string | null, isInjured: boolean, strengths?: Array<string> | null, weaknesses?: Array<string> | null, carryingTransGlobalCategoricalScore?: number | null, dribblingTransGlobalCategoricalScore?: number | null, gkPassingTransCategoricalScore?: number | null, gkPositioningTransCategoricalScore?: number | null, gkShotStoppingTransCategoricalScore?: number | null, passingTransGlobalCategoricalScore?: number | null, shotLocationTransGlobalCategoricalScore?: number | null, playerValuation?: number | null, llmDerivedSummary?: string | null, timeDecayedSeasonalGpm?: number | null, threats?: Array<string> | null, opportunities?: Array<string> | null, timeDecayedVaep?: number | null, timeDecayedZVaep?: number | null, teamStyleFit?: number | null, playerAgent?: string | null, primaryPosition?: string | null, generalPosition?: string | null } | null, team?: { __typename?: 'Team', id: string, name: string } | null, seasonWeightedAvgMetrics?: Array<{ __typename?: 'PlayerSeasonWeightedAvgMetrics', epm?: number | null, seasonalGpm?: number | null, ggUnifiedSeasonKey: number } | null> | null, scoutReports?: Array<{ __typename?: 'PlayerScoutReport', reportId?: string | null, ggPlayerKey: string, scoutName?: string | null, reportDate?: string | null, team?: string | null, opponent?: string | null, ground?: string | null, overallScore?: number | null, qnaText?: string | null, matches?: Array<{ __typename?: 'MatchDetail', team?: string | null, opponent?: string | null, ground?: string | null, matchDate?: string | null } | null> | null } | null> | null, seasonCategoricalScores?: Array<{ __typename?: 'PlayerSeasonCategoricalScore', ggUnifiedSeasonKey: number, carryingTransPositionalCategoricalScore?: number | null, dribblingTransPositionalCategoricalScore?: number | null, gkPassingTransCategoricalScore?: number | null, gkPositioningTransCategoricalScore?: number | null, gkShotStoppingTransCategoricalScore?: number | null, passingTransPositionalCategoricalScore?: number | null, shotLocationTransGlobalCategoricalScore?: number | null, shotLocationTransPositionalCategoricalScore?: number | null } | null> | null } }> | null } };

export type ShadowTeamAddShadowTeamPlayersMutationVariables = Exact<{
  input: AddShadowTeamPlayersInput;
}>;


export type ShadowTeamAddShadowTeamPlayersMutation = { __typename?: 'Mutation', addShadowTeamPlayers: Array<{ __typename?: 'ShadowTeamPlayer', id: string, order?: number | null, position?: number | null, playerId: string, createdAt: string, updatedAt: string, shadowTeamId: string, isManualAdding: boolean, player: { __typename?: 'Player', id: string, knownName: string, firstName: string, lastName: string, isWatchedByCurrentUser?: boolean | null, timeDecayedGPR?: number | null, positions?: Array<{ __typename?: 'Position', id: string, name: string, abbreviation?: string | null } | null> | null, nationality?: { __typename?: 'Nationality', id: string, name: string } | null, bioData?: { __typename?: 'PlayerBioData', age?: number | null, archetypeGgPlayerKey?: string | null, roleArchetype?: string | null, contractExpires?: string | null, contractOption?: string | null, currentClub?: string | null, currentLeague?: string | null, dateOfBirth?: string | null, fitScore?: number | null, foot?: string | null, ggPlayerKey: string, gpm?: number | null, gpr?: number | null, height?: number | null, injuredUntil?: string | null, isInjured: boolean, strengths?: Array<string> | null, weaknesses?: Array<string> | null, carryingTransGlobalCategoricalScore?: number | null, dribblingTransGlobalCategoricalScore?: number | null, gkPassingTransCategoricalScore?: number | null, gkPositioningTransCategoricalScore?: number | null, gkShotStoppingTransCategoricalScore?: number | null, passingTransGlobalCategoricalScore?: number | null, shotLocationTransGlobalCategoricalScore?: number | null, playerValuation?: number | null, llmDerivedSummary?: string | null, timeDecayedSeasonalGpm?: number | null, threats?: Array<string> | null, opportunities?: Array<string> | null, timeDecayedVaep?: number | null, timeDecayedZVaep?: number | null, teamStyleFit?: number | null, playerAgent?: string | null, primaryPosition?: string | null, generalPosition?: string | null } | null, team?: { __typename?: 'Team', id: string, name: string } | null, seasonWeightedAvgMetrics?: Array<{ __typename?: 'PlayerSeasonWeightedAvgMetrics', epm?: number | null, seasonalGpm?: number | null, ggUnifiedSeasonKey: number } | null> | null, scoutReports?: Array<{ __typename?: 'PlayerScoutReport', reportId?: string | null, ggPlayerKey: string, scoutName?: string | null, reportDate?: string | null, team?: string | null, opponent?: string | null, ground?: string | null, overallScore?: number | null, qnaText?: string | null, matches?: Array<{ __typename?: 'MatchDetail', team?: string | null, opponent?: string | null, ground?: string | null, matchDate?: string | null } | null> | null } | null> | null, seasonCategoricalScores?: Array<{ __typename?: 'PlayerSeasonCategoricalScore', ggUnifiedSeasonKey: number, carryingTransPositionalCategoricalScore?: number | null, dribblingTransPositionalCategoricalScore?: number | null, gkPassingTransCategoricalScore?: number | null, gkPositioningTransCategoricalScore?: number | null, gkShotStoppingTransCategoricalScore?: number | null, passingTransPositionalCategoricalScore?: number | null, shotLocationTransGlobalCategoricalScore?: number | null, shotLocationTransPositionalCategoricalScore?: number | null } | null> | null } }> };

export type ShadowTeamRemoveShadowTeamPlayerMutationVariables = Exact<{
  input: RemoveShadowTeamPlayerInput;
}>;


export type ShadowTeamRemoveShadowTeamPlayerMutation = { __typename?: 'Mutation', removeShadowTeamPlayer: { __typename?: 'ShadowTeamPlayer', id: string, order?: number | null, position?: number | null, playerId: string, createdAt: string, updatedAt: string, shadowTeamId: string, isManualAdding: boolean, player: { __typename?: 'Player', id: string, knownName: string, firstName: string, lastName: string, isWatchedByCurrentUser?: boolean | null, timeDecayedGPR?: number | null, positions?: Array<{ __typename?: 'Position', id: string, name: string, abbreviation?: string | null } | null> | null, nationality?: { __typename?: 'Nationality', id: string, name: string } | null, bioData?: { __typename?: 'PlayerBioData', age?: number | null, archetypeGgPlayerKey?: string | null, roleArchetype?: string | null, contractExpires?: string | null, contractOption?: string | null, currentClub?: string | null, currentLeague?: string | null, dateOfBirth?: string | null, fitScore?: number | null, foot?: string | null, ggPlayerKey: string, gpm?: number | null, gpr?: number | null, height?: number | null, injuredUntil?: string | null, isInjured: boolean, strengths?: Array<string> | null, weaknesses?: Array<string> | null, carryingTransGlobalCategoricalScore?: number | null, dribblingTransGlobalCategoricalScore?: number | null, gkPassingTransCategoricalScore?: number | null, gkPositioningTransCategoricalScore?: number | null, gkShotStoppingTransCategoricalScore?: number | null, passingTransGlobalCategoricalScore?: number | null, shotLocationTransGlobalCategoricalScore?: number | null, playerValuation?: number | null, llmDerivedSummary?: string | null, timeDecayedSeasonalGpm?: number | null, threats?: Array<string> | null, opportunities?: Array<string> | null, timeDecayedVaep?: number | null, timeDecayedZVaep?: number | null, teamStyleFit?: number | null, playerAgent?: string | null, primaryPosition?: string | null, generalPosition?: string | null } | null, team?: { __typename?: 'Team', id: string, name: string } | null, seasonWeightedAvgMetrics?: Array<{ __typename?: 'PlayerSeasonWeightedAvgMetrics', epm?: number | null, seasonalGpm?: number | null, ggUnifiedSeasonKey: number } | null> | null, scoutReports?: Array<{ __typename?: 'PlayerScoutReport', reportId?: string | null, ggPlayerKey: string, scoutName?: string | null, reportDate?: string | null, team?: string | null, opponent?: string | null, ground?: string | null, overallScore?: number | null, qnaText?: string | null, matches?: Array<{ __typename?: 'MatchDetail', team?: string | null, opponent?: string | null, ground?: string | null, matchDate?: string | null } | null> | null } | null> | null, seasonCategoricalScores?: Array<{ __typename?: 'PlayerSeasonCategoricalScore', ggUnifiedSeasonKey: number, carryingTransPositionalCategoricalScore?: number | null, dribblingTransPositionalCategoricalScore?: number | null, gkPassingTransCategoricalScore?: number | null, gkPositioningTransCategoricalScore?: number | null, gkShotStoppingTransCategoricalScore?: number | null, passingTransPositionalCategoricalScore?: number | null, shotLocationTransGlobalCategoricalScore?: number | null, shotLocationTransPositionalCategoricalScore?: number | null } | null> | null } } };

export type SimilarPlayersPlayerResultFragment = { __typename?: 'SimilarPlayerResult', similarityScore?: number | null, player?: { __typename?: 'Player', id: string, knownName: string, firstName: string, lastName: string, isWatchedByCurrentUser?: boolean | null, timeDecayedGPR?: number | null, positions?: Array<{ __typename?: 'Position', id: string, name: string, abbreviation?: string | null } | null> | null, team?: { __typename?: 'Team', id: string, name: string } | null, bioData?: { __typename?: 'PlayerBioData', ggPlayerKey: string, fitScore?: number | null, teamStyleFit?: number | null, playerValuation?: number | null, carryingTransGlobalCategoricalScore?: number | null, dribblingTransGlobalCategoricalScore?: number | null, passingTransGlobalCategoricalScore?: number | null, shotLocationTransGlobalCategoricalScore?: number | null, gkPassingTransCategoricalScore?: number | null, gkPositioningTransCategoricalScore?: number | null, gkShotStoppingTransCategoricalScore?: number | null, contractExpires?: string | null, gpr?: number | null } | null } | null };

export type SimilarPlayersSimilarPlayerConnectionFragment = { __typename?: 'SimilarPlayerConnection', edges: Array<{ __typename?: 'SimilarPlayerEdge', node: { __typename?: 'SimilarPlayerResult', similarityScore?: number | null, player?: { __typename?: 'Player', id: string, knownName: string, firstName: string, lastName: string, isWatchedByCurrentUser?: boolean | null, timeDecayedGPR?: number | null, positions?: Array<{ __typename?: 'Position', id: string, name: string, abbreviation?: string | null } | null> | null, team?: { __typename?: 'Team', id: string, name: string } | null, bioData?: { __typename?: 'PlayerBioData', ggPlayerKey: string, fitScore?: number | null, teamStyleFit?: number | null, playerValuation?: number | null, carryingTransGlobalCategoricalScore?: number | null, dribblingTransGlobalCategoricalScore?: number | null, passingTransGlobalCategoricalScore?: number | null, shotLocationTransGlobalCategoricalScore?: number | null, gkPassingTransCategoricalScore?: number | null, gkPositioningTransCategoricalScore?: number | null, gkShotStoppingTransCategoricalScore?: number | null, contractExpires?: string | null, gpr?: number | null } | null } | null } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor?: string | null } };

export type SimilarPlayersListSimilarPlayersQueryVariables = Exact<{
  playerId: Scalars['ID'];
  first?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  minValuation?: InputMaybe<Scalars['Float']>;
  maxValuation?: InputMaybe<Scalars['Float']>;
  maxAge?: InputMaybe<Scalars['Int']>;
  minAge?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<SimilarPlayerSortField>;
  sortOrder?: InputMaybe<SortOrder>;
  minMonthsRemaining?: InputMaybe<Scalars['Float']>;
  maxMonthsRemaining?: InputMaybe<Scalars['Float']>;
  leagueIds?: InputMaybe<Array<Scalars['String']> | Scalars['String']>;
}>;


export type SimilarPlayersListSimilarPlayersQuery = { __typename?: 'Query', listSimilarPlayers: { __typename?: 'SimilarPlayerConnection', edges: Array<{ __typename?: 'SimilarPlayerEdge', node: { __typename?: 'SimilarPlayerResult', similarityScore?: number | null, player?: { __typename?: 'Player', id: string, knownName: string, firstName: string, lastName: string, isWatchedByCurrentUser?: boolean | null, timeDecayedGPR?: number | null, positions?: Array<{ __typename?: 'Position', id: string, name: string, abbreviation?: string | null } | null> | null, team?: { __typename?: 'Team', id: string, name: string } | null, bioData?: { __typename?: 'PlayerBioData', ggPlayerKey: string, fitScore?: number | null, teamStyleFit?: number | null, playerValuation?: number | null, carryingTransGlobalCategoricalScore?: number | null, dribblingTransGlobalCategoricalScore?: number | null, passingTransGlobalCategoricalScore?: number | null, shotLocationTransGlobalCategoricalScore?: number | null, gkPassingTransCategoricalScore?: number | null, gkPositioningTransCategoricalScore?: number | null, gkShotStoppingTransCategoricalScore?: number | null, contractExpires?: string | null, gpr?: number | null } | null } | null } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor?: string | null } } };

export type WatchlistTeamFragment = { __typename?: 'Team', id: string, name: string };

export type WatchlistPlayerPositionFragment = { __typename?: 'Position', id: string, name: string, abbreviation?: string | null };

export type WatchlistPlayerBioDataFragment = { __typename?: 'PlayerBioData', ggPlayerKey: string, dateOfBirth?: string | null, age?: number | null, foot?: string | null, roleArchetype?: string | null, isInjured: boolean, contractExpires?: string | null, playerValuation?: number | null, gpm?: number | null, gpr?: number | null, timeDecayedSeasonalGpm?: number | null, timeDecayedZVaep?: number | null, fitScore?: number | null, teamStyleFit?: number | null, passingTransGlobalCategoricalScore?: number | null, shotLocationTransGlobalCategoricalScore?: number | null, dribblingTransGlobalCategoricalScore?: number | null, carryingTransGlobalCategoricalScore?: number | null, gkShotStoppingTransCategoricalScore?: number | null, gkPositioningTransCategoricalScore?: number | null, gkPassingTransCategoricalScore?: number | null, llmDerivedSummary?: string | null };

export type WatchlistPlayerSeasonWeightedAvgMetricsFragment = { __typename?: 'PlayerSeasonWeightedAvgMetrics', epm?: number | null, seasonalGpm?: number | null, ggUnifiedSeasonKey: number };

export type WatchlistPlayerSeasonCategoricalScoreFragment = { __typename?: 'PlayerSeasonCategoricalScore', ggUnifiedSeasonKey: number, carryingTransPositionalCategoricalScore?: number | null, dribblingTransPositionalCategoricalScore?: number | null, gkPassingTransCategoricalScore?: number | null, gkPositioningTransCategoricalScore?: number | null, gkShotStoppingTransCategoricalScore?: number | null, passingTransPositionalCategoricalScore?: number | null, shotLocationTransPositionalCategoricalScore?: number | null };

export type WatchlistPlayerFragment = { __typename?: 'Player', id: string, knownName: string, firstName: string, lastName: string, timeDecayedGPR?: number | null, isWatchedByCurrentUser?: boolean | null, team?: { __typename?: 'Team', id: string, name: string } | null, positions?: Array<{ __typename?: 'Position', id: string, name: string, abbreviation?: string | null } | null> | null, seasonWeightedAvgMetrics?: Array<{ __typename?: 'PlayerSeasonWeightedAvgMetrics', epm?: number | null, seasonalGpm?: number | null, ggUnifiedSeasonKey: number } | null> | null, bioData?: { __typename?: 'PlayerBioData', ggPlayerKey: string, dateOfBirth?: string | null, age?: number | null, foot?: string | null, roleArchetype?: string | null, isInjured: boolean, contractExpires?: string | null, playerValuation?: number | null, gpm?: number | null, gpr?: number | null, timeDecayedSeasonalGpm?: number | null, timeDecayedZVaep?: number | null, fitScore?: number | null, teamStyleFit?: number | null, passingTransGlobalCategoricalScore?: number | null, shotLocationTransGlobalCategoricalScore?: number | null, dribblingTransGlobalCategoricalScore?: number | null, carryingTransGlobalCategoricalScore?: number | null, gkShotStoppingTransCategoricalScore?: number | null, gkPositioningTransCategoricalScore?: number | null, gkPassingTransCategoricalScore?: number | null, llmDerivedSummary?: string | null } | null, seasonCategoricalScores?: Array<{ __typename?: 'PlayerSeasonCategoricalScore', ggUnifiedSeasonKey: number, carryingTransPositionalCategoricalScore?: number | null, dribblingTransPositionalCategoricalScore?: number | null, gkPassingTransCategoricalScore?: number | null, gkPositioningTransCategoricalScore?: number | null, gkShotStoppingTransCategoricalScore?: number | null, passingTransPositionalCategoricalScore?: number | null, shotLocationTransPositionalCategoricalScore?: number | null } | null> | null };

export type WatchlistPlayerConnectionFragment = { __typename?: 'PlayerConnection', edges: Array<{ __typename?: 'PlayerEdge', cursor: string, node: { __typename?: 'Player', id: string, knownName: string, firstName: string, lastName: string, timeDecayedGPR?: number | null, isWatchedByCurrentUser?: boolean | null, team?: { __typename?: 'Team', id: string, name: string } | null, positions?: Array<{ __typename?: 'Position', id: string, name: string, abbreviation?: string | null } | null> | null, seasonWeightedAvgMetrics?: Array<{ __typename?: 'PlayerSeasonWeightedAvgMetrics', epm?: number | null, seasonalGpm?: number | null, ggUnifiedSeasonKey: number } | null> | null, bioData?: { __typename?: 'PlayerBioData', ggPlayerKey: string, dateOfBirth?: string | null, age?: number | null, foot?: string | null, roleArchetype?: string | null, isInjured: boolean, contractExpires?: string | null, playerValuation?: number | null, gpm?: number | null, gpr?: number | null, timeDecayedSeasonalGpm?: number | null, timeDecayedZVaep?: number | null, fitScore?: number | null, teamStyleFit?: number | null, passingTransGlobalCategoricalScore?: number | null, shotLocationTransGlobalCategoricalScore?: number | null, dribblingTransGlobalCategoricalScore?: number | null, carryingTransGlobalCategoricalScore?: number | null, gkShotStoppingTransCategoricalScore?: number | null, gkPositioningTransCategoricalScore?: number | null, gkPassingTransCategoricalScore?: number | null, llmDerivedSummary?: string | null } | null, seasonCategoricalScores?: Array<{ __typename?: 'PlayerSeasonCategoricalScore', ggUnifiedSeasonKey: number, carryingTransPositionalCategoricalScore?: number | null, dribblingTransPositionalCategoricalScore?: number | null, gkPassingTransCategoricalScore?: number | null, gkPositioningTransCategoricalScore?: number | null, gkShotStoppingTransCategoricalScore?: number | null, passingTransPositionalCategoricalScore?: number | null, shotLocationTransPositionalCategoricalScore?: number | null } | null> | null } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } };

export type WatchlistWatchlistFragment = { __typename?: 'Watchlist', id: string, name: string, players: { __typename?: 'PlayerConnection', edges: Array<{ __typename?: 'PlayerEdge', cursor: string, node: { __typename?: 'Player', id: string, knownName: string, firstName: string, lastName: string, timeDecayedGPR?: number | null, isWatchedByCurrentUser?: boolean | null, team?: { __typename?: 'Team', id: string, name: string } | null, positions?: Array<{ __typename?: 'Position', id: string, name: string, abbreviation?: string | null } | null> | null, seasonWeightedAvgMetrics?: Array<{ __typename?: 'PlayerSeasonWeightedAvgMetrics', epm?: number | null, seasonalGpm?: number | null, ggUnifiedSeasonKey: number } | null> | null, bioData?: { __typename?: 'PlayerBioData', ggPlayerKey: string, dateOfBirth?: string | null, age?: number | null, foot?: string | null, roleArchetype?: string | null, isInjured: boolean, contractExpires?: string | null, playerValuation?: number | null, gpm?: number | null, gpr?: number | null, timeDecayedSeasonalGpm?: number | null, timeDecayedZVaep?: number | null, fitScore?: number | null, teamStyleFit?: number | null, passingTransGlobalCategoricalScore?: number | null, shotLocationTransGlobalCategoricalScore?: number | null, dribblingTransGlobalCategoricalScore?: number | null, carryingTransGlobalCategoricalScore?: number | null, gkShotStoppingTransCategoricalScore?: number | null, gkPositioningTransCategoricalScore?: number | null, gkPassingTransCategoricalScore?: number | null, llmDerivedSummary?: string | null } | null, seasonCategoricalScores?: Array<{ __typename?: 'PlayerSeasonCategoricalScore', ggUnifiedSeasonKey: number, carryingTransPositionalCategoricalScore?: number | null, dribblingTransPositionalCategoricalScore?: number | null, gkPassingTransCategoricalScore?: number | null, gkPositioningTransCategoricalScore?: number | null, gkShotStoppingTransCategoricalScore?: number | null, passingTransPositionalCategoricalScore?: number | null, shotLocationTransPositionalCategoricalScore?: number | null } | null> | null } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } };

export type WatchlistWatchlistConnectionFragment = { __typename?: 'WatchlistConnection', edges: Array<{ __typename?: 'WatchlistEdge', cursor: string, node: { __typename?: 'Watchlist', id: string, name: string, players: { __typename?: 'PlayerConnection', edges: Array<{ __typename?: 'PlayerEdge', cursor: string, node: { __typename?: 'Player', id: string, knownName: string, firstName: string, lastName: string, timeDecayedGPR?: number | null, isWatchedByCurrentUser?: boolean | null, team?: { __typename?: 'Team', id: string, name: string } | null, positions?: Array<{ __typename?: 'Position', id: string, name: string, abbreviation?: string | null } | null> | null, seasonWeightedAvgMetrics?: Array<{ __typename?: 'PlayerSeasonWeightedAvgMetrics', epm?: number | null, seasonalGpm?: number | null, ggUnifiedSeasonKey: number } | null> | null, bioData?: { __typename?: 'PlayerBioData', ggPlayerKey: string, dateOfBirth?: string | null, age?: number | null, foot?: string | null, roleArchetype?: string | null, isInjured: boolean, contractExpires?: string | null, playerValuation?: number | null, gpm?: number | null, gpr?: number | null, timeDecayedSeasonalGpm?: number | null, timeDecayedZVaep?: number | null, fitScore?: number | null, teamStyleFit?: number | null, passingTransGlobalCategoricalScore?: number | null, shotLocationTransGlobalCategoricalScore?: number | null, dribblingTransGlobalCategoricalScore?: number | null, carryingTransGlobalCategoricalScore?: number | null, gkShotStoppingTransCategoricalScore?: number | null, gkPositioningTransCategoricalScore?: number | null, gkPassingTransCategoricalScore?: number | null, llmDerivedSummary?: string | null } | null, seasonCategoricalScores?: Array<{ __typename?: 'PlayerSeasonCategoricalScore', ggUnifiedSeasonKey: number, carryingTransPositionalCategoricalScore?: number | null, dribblingTransPositionalCategoricalScore?: number | null, gkPassingTransCategoricalScore?: number | null, gkPositioningTransCategoricalScore?: number | null, gkShotStoppingTransCategoricalScore?: number | null, passingTransPositionalCategoricalScore?: number | null, shotLocationTransPositionalCategoricalScore?: number | null } | null> | null } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor?: string | null } };

export type WatchlistCognitoUserFragment = { __typename?: 'CognitoUser', Username: string, UserAttributes?: Array<{ __typename?: 'CognitoUserAttribute', Name: string, Value: string }> | null, Attributes?: Array<{ __typename?: 'CognitoUserAttribute', Name: string, Value: string }> | null };

export type WatchlistUserFragment = { __typename?: 'User', id: string, title?: string | null, phoneNumber: string, cognitoUser?: { __typename?: 'CognitoUser', Username: string, UserAttributes?: Array<{ __typename?: 'CognitoUserAttribute', Name: string, Value: string }> | null, Attributes?: Array<{ __typename?: 'CognitoUserAttribute', Name: string, Value: string }> | null } | null };

export type WatchlistUserWatchlistFragment = { __typename?: 'UserWatchlist', id: string, role: UserWatchlistRole, user: { __typename?: 'User', id: string, title?: string | null, phoneNumber: string, cognitoUser?: { __typename?: 'CognitoUser', Username: string, UserAttributes?: Array<{ __typename?: 'CognitoUserAttribute', Name: string, Value: string }> | null, Attributes?: Array<{ __typename?: 'CognitoUserAttribute', Name: string, Value: string }> | null } | null } };

export type WatchlistMyUserWatchlistFragment = { __typename?: 'UserWatchlist', id: string, role: UserWatchlistRole, watchlist: { __typename?: 'Watchlist', id: string, name: string, players: { __typename?: 'PlayerConnection', edges: Array<{ __typename?: 'PlayerEdge', cursor: string, node: { __typename?: 'Player', id: string, knownName: string, firstName: string, lastName: string, timeDecayedGPR?: number | null, isWatchedByCurrentUser?: boolean | null, team?: { __typename?: 'Team', id: string, name: string } | null, positions?: Array<{ __typename?: 'Position', id: string, name: string, abbreviation?: string | null } | null> | null, seasonWeightedAvgMetrics?: Array<{ __typename?: 'PlayerSeasonWeightedAvgMetrics', epm?: number | null, seasonalGpm?: number | null, ggUnifiedSeasonKey: number } | null> | null, bioData?: { __typename?: 'PlayerBioData', ggPlayerKey: string, dateOfBirth?: string | null, age?: number | null, foot?: string | null, roleArchetype?: string | null, isInjured: boolean, contractExpires?: string | null, playerValuation?: number | null, gpm?: number | null, gpr?: number | null, timeDecayedSeasonalGpm?: number | null, timeDecayedZVaep?: number | null, fitScore?: number | null, teamStyleFit?: number | null, passingTransGlobalCategoricalScore?: number | null, shotLocationTransGlobalCategoricalScore?: number | null, dribblingTransGlobalCategoricalScore?: number | null, carryingTransGlobalCategoricalScore?: number | null, gkShotStoppingTransCategoricalScore?: number | null, gkPositioningTransCategoricalScore?: number | null, gkPassingTransCategoricalScore?: number | null, llmDerivedSummary?: string | null } | null, seasonCategoricalScores?: Array<{ __typename?: 'PlayerSeasonCategoricalScore', ggUnifiedSeasonKey: number, carryingTransPositionalCategoricalScore?: number | null, dribblingTransPositionalCategoricalScore?: number | null, gkPassingTransCategoricalScore?: number | null, gkPositioningTransCategoricalScore?: number | null, gkShotStoppingTransCategoricalScore?: number | null, passingTransPositionalCategoricalScore?: number | null, shotLocationTransPositionalCategoricalScore?: number | null } | null> | null } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } } };

export type WatchlistUserWatchlistConnectionFragment = { __typename?: 'UserWatchlistConnection', edges: Array<{ __typename?: 'UserWatchlistEdge', cursor: string, node: { __typename?: 'UserWatchlist', id: string, role: UserWatchlistRole, user: { __typename?: 'User', id: string, title?: string | null, phoneNumber: string, cognitoUser?: { __typename?: 'CognitoUser', Username: string, UserAttributes?: Array<{ __typename?: 'CognitoUserAttribute', Name: string, Value: string }> | null, Attributes?: Array<{ __typename?: 'CognitoUserAttribute', Name: string, Value: string }> | null } | null } } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor?: string | null } };

export type WatchlistMyUserWatchlistConnectionFragment = { __typename?: 'UserWatchlistConnection', edges: Array<{ __typename?: 'UserWatchlistEdge', cursor: string, node: { __typename?: 'UserWatchlist', id: string, role: UserWatchlistRole, watchlist: { __typename?: 'Watchlist', id: string, name: string, players: { __typename?: 'PlayerConnection', edges: Array<{ __typename?: 'PlayerEdge', cursor: string, node: { __typename?: 'Player', id: string, knownName: string, firstName: string, lastName: string, timeDecayedGPR?: number | null, isWatchedByCurrentUser?: boolean | null, team?: { __typename?: 'Team', id: string, name: string } | null, positions?: Array<{ __typename?: 'Position', id: string, name: string, abbreviation?: string | null } | null> | null, seasonWeightedAvgMetrics?: Array<{ __typename?: 'PlayerSeasonWeightedAvgMetrics', epm?: number | null, seasonalGpm?: number | null, ggUnifiedSeasonKey: number } | null> | null, bioData?: { __typename?: 'PlayerBioData', ggPlayerKey: string, dateOfBirth?: string | null, age?: number | null, foot?: string | null, roleArchetype?: string | null, isInjured: boolean, contractExpires?: string | null, playerValuation?: number | null, gpm?: number | null, gpr?: number | null, timeDecayedSeasonalGpm?: number | null, timeDecayedZVaep?: number | null, fitScore?: number | null, teamStyleFit?: number | null, passingTransGlobalCategoricalScore?: number | null, shotLocationTransGlobalCategoricalScore?: number | null, dribblingTransGlobalCategoricalScore?: number | null, carryingTransGlobalCategoricalScore?: number | null, gkShotStoppingTransCategoricalScore?: number | null, gkPositioningTransCategoricalScore?: number | null, gkPassingTransCategoricalScore?: number | null, llmDerivedSummary?: string | null } | null, seasonCategoricalScores?: Array<{ __typename?: 'PlayerSeasonCategoricalScore', ggUnifiedSeasonKey: number, carryingTransPositionalCategoricalScore?: number | null, dribblingTransPositionalCategoricalScore?: number | null, gkPassingTransCategoricalScore?: number | null, gkPositioningTransCategoricalScore?: number | null, gkShotStoppingTransCategoricalScore?: number | null, passingTransPositionalCategoricalScore?: number | null, shotLocationTransPositionalCategoricalScore?: number | null } | null> | null } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } } } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor?: string | null } };

export type WatchlistWatchlistEdgeFragment = { __typename?: 'WatchlistEdge', cursor: string, node: { __typename?: 'Watchlist', id: string, name: string, players: { __typename?: 'PlayerConnection', edges: Array<{ __typename?: 'PlayerEdge', cursor: string, node: { __typename?: 'Player', id: string, knownName: string, firstName: string, lastName: string, timeDecayedGPR?: number | null, isWatchedByCurrentUser?: boolean | null, team?: { __typename?: 'Team', id: string, name: string } | null, positions?: Array<{ __typename?: 'Position', id: string, name: string, abbreviation?: string | null } | null> | null, seasonWeightedAvgMetrics?: Array<{ __typename?: 'PlayerSeasonWeightedAvgMetrics', epm?: number | null, seasonalGpm?: number | null, ggUnifiedSeasonKey: number } | null> | null, bioData?: { __typename?: 'PlayerBioData', ggPlayerKey: string, dateOfBirth?: string | null, age?: number | null, foot?: string | null, roleArchetype?: string | null, isInjured: boolean, contractExpires?: string | null, playerValuation?: number | null, gpm?: number | null, gpr?: number | null, timeDecayedSeasonalGpm?: number | null, timeDecayedZVaep?: number | null, fitScore?: number | null, teamStyleFit?: number | null, passingTransGlobalCategoricalScore?: number | null, shotLocationTransGlobalCategoricalScore?: number | null, dribblingTransGlobalCategoricalScore?: number | null, carryingTransGlobalCategoricalScore?: number | null, gkShotStoppingTransCategoricalScore?: number | null, gkPositioningTransCategoricalScore?: number | null, gkPassingTransCategoricalScore?: number | null, llmDerivedSummary?: string | null } | null, seasonCategoricalScores?: Array<{ __typename?: 'PlayerSeasonCategoricalScore', ggUnifiedSeasonKey: number, carryingTransPositionalCategoricalScore?: number | null, dribblingTransPositionalCategoricalScore?: number | null, gkPassingTransCategoricalScore?: number | null, gkPositioningTransCategoricalScore?: number | null, gkShotStoppingTransCategoricalScore?: number | null, passingTransPositionalCategoricalScore?: number | null, shotLocationTransPositionalCategoricalScore?: number | null } | null> | null } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } } };

export type WatchlistOrganizationUserEdgeFragment = { __typename?: 'OrganizationUserEdge', cursor: string, node: { __typename?: 'OrganizationUser', id: string, user: { __typename?: 'User', id: string, title?: string | null, phoneNumber: string, cognitoUser?: { __typename?: 'CognitoUser', Username: string, UserAttributes?: Array<{ __typename?: 'CognitoUserAttribute', Name: string, Value: string }> | null, Attributes?: Array<{ __typename?: 'CognitoUserAttribute', Name: string, Value: string }> | null } | null } } };

export type WatchlistOrganizationUserFragment = { __typename?: 'OrganizationUser', id: string, user: { __typename?: 'User', id: string, title?: string | null, phoneNumber: string, cognitoUser?: { __typename?: 'CognitoUser', Username: string, UserAttributes?: Array<{ __typename?: 'CognitoUserAttribute', Name: string, Value: string }> | null, Attributes?: Array<{ __typename?: 'CognitoUserAttribute', Name: string, Value: string }> | null } | null } };

export type WatchlistOrganizationUserConnectionFragment = { __typename?: 'OrganizationUserConnection', edges: Array<{ __typename?: 'OrganizationUserEdge', cursor: string, node: { __typename?: 'OrganizationUser', id: string, user: { __typename?: 'User', id: string, title?: string | null, phoneNumber: string, cognitoUser?: { __typename?: 'CognitoUser', Username: string, UserAttributes?: Array<{ __typename?: 'CognitoUserAttribute', Name: string, Value: string }> | null, Attributes?: Array<{ __typename?: 'CognitoUserAttribute', Name: string, Value: string }> | null } | null } } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor?: string | null } };

export type WatchlistListMyOrganizationsOrganizationUsersQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
}>;


export type WatchlistListMyOrganizationsOrganizationUsersQuery = { __typename?: 'Query', listMyOrganizationsOrganizationUsers: { __typename?: 'OrganizationUserConnection', edges: Array<{ __typename?: 'OrganizationUserEdge', cursor: string, node: { __typename?: 'OrganizationUser', id: string, user: { __typename?: 'User', id: string, title?: string | null, phoneNumber: string, cognitoUser?: { __typename?: 'CognitoUser', Username: string, UserAttributes?: Array<{ __typename?: 'CognitoUserAttribute', Name: string, Value: string }> | null, Attributes?: Array<{ __typename?: 'CognitoUserAttribute', Name: string, Value: string }> | null } | null } } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor?: string | null } } };

export type WatchlistListUserWatchlistsByWatchlistIdQueryVariables = Exact<{
  watchlistId: Scalars['ID'];
  first?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
}>;


export type WatchlistListUserWatchlistsByWatchlistIdQuery = { __typename?: 'Query', listUserWatchlistsByWatchlistId: { __typename?: 'UserWatchlistConnection', edges: Array<{ __typename?: 'UserWatchlistEdge', cursor: string, node: { __typename?: 'UserWatchlist', id: string, role: UserWatchlistRole, user: { __typename?: 'User', id: string, title?: string | null, phoneNumber: string, cognitoUser?: { __typename?: 'CognitoUser', Username: string, UserAttributes?: Array<{ __typename?: 'CognitoUserAttribute', Name: string, Value: string }> | null, Attributes?: Array<{ __typename?: 'CognitoUserAttribute', Name: string, Value: string }> | null } | null } } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor?: string | null } } };

export type WatchlistListMyUserWatchlistsQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
}>;


export type WatchlistListMyUserWatchlistsQuery = { __typename?: 'Query', listMyUserWatchlists: { __typename?: 'UserWatchlistConnection', edges: Array<{ __typename?: 'UserWatchlistEdge', cursor: string, node: { __typename?: 'UserWatchlist', id: string, role: UserWatchlistRole, watchlist: { __typename?: 'Watchlist', id: string, name: string, players: { __typename?: 'PlayerConnection', edges: Array<{ __typename?: 'PlayerEdge', cursor: string, node: { __typename?: 'Player', id: string, knownName: string, firstName: string, lastName: string, timeDecayedGPR?: number | null, isWatchedByCurrentUser?: boolean | null, team?: { __typename?: 'Team', id: string, name: string } | null, positions?: Array<{ __typename?: 'Position', id: string, name: string, abbreviation?: string | null } | null> | null, seasonWeightedAvgMetrics?: Array<{ __typename?: 'PlayerSeasonWeightedAvgMetrics', epm?: number | null, seasonalGpm?: number | null, ggUnifiedSeasonKey: number } | null> | null, bioData?: { __typename?: 'PlayerBioData', ggPlayerKey: string, dateOfBirth?: string | null, age?: number | null, foot?: string | null, roleArchetype?: string | null, isInjured: boolean, contractExpires?: string | null, playerValuation?: number | null, gpm?: number | null, gpr?: number | null, timeDecayedSeasonalGpm?: number | null, timeDecayedZVaep?: number | null, fitScore?: number | null, teamStyleFit?: number | null, passingTransGlobalCategoricalScore?: number | null, shotLocationTransGlobalCategoricalScore?: number | null, dribblingTransGlobalCategoricalScore?: number | null, carryingTransGlobalCategoricalScore?: number | null, gkShotStoppingTransCategoricalScore?: number | null, gkPositioningTransCategoricalScore?: number | null, gkPassingTransCategoricalScore?: number | null, llmDerivedSummary?: string | null } | null, seasonCategoricalScores?: Array<{ __typename?: 'PlayerSeasonCategoricalScore', ggUnifiedSeasonKey: number, carryingTransPositionalCategoricalScore?: number | null, dribblingTransPositionalCategoricalScore?: number | null, gkPassingTransCategoricalScore?: number | null, gkPositioningTransCategoricalScore?: number | null, gkShotStoppingTransCategoricalScore?: number | null, passingTransPositionalCategoricalScore?: number | null, shotLocationTransPositionalCategoricalScore?: number | null } | null> | null } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } } } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor?: string | null } } };

export type WatchlistGetPlayerBioDataByPlayerIdQueryVariables = Exact<{
  playerId: Scalars['ID'];
}>;


export type WatchlistGetPlayerBioDataByPlayerIdQuery = { __typename?: 'Query', getPlayerBioDataByPlayerId?: { __typename?: 'PlayerBioData', ggPlayerKey: string, dateOfBirth?: string | null, age?: number | null, foot?: string | null, roleArchetype?: string | null, isInjured: boolean, contractExpires?: string | null, playerValuation?: number | null, gpm?: number | null, gpr?: number | null, timeDecayedSeasonalGpm?: number | null, timeDecayedZVaep?: number | null, fitScore?: number | null, teamStyleFit?: number | null, passingTransGlobalCategoricalScore?: number | null, shotLocationTransGlobalCategoricalScore?: number | null, dribblingTransGlobalCategoricalScore?: number | null, carryingTransGlobalCategoricalScore?: number | null, gkShotStoppingTransCategoricalScore?: number | null, gkPositioningTransCategoricalScore?: number | null, gkPassingTransCategoricalScore?: number | null, llmDerivedSummary?: string | null } | null };

export type WatchlistListPlayerSeasonWeightedAvgMetricsQueryVariables = Exact<{
  playerId: Scalars['ID'];
}>;


export type WatchlistListPlayerSeasonWeightedAvgMetricsQuery = { __typename?: 'Query', listPlayerSeasonWeightedAvgMetricsByPlayerId: Array<{ __typename?: 'PlayerSeasonWeightedAvgMetrics', epm?: number | null, seasonalGpm?: number | null, ggUnifiedSeasonKey: number }> };

export type WatchlistListWatchlistPlayersQueryVariables = Exact<{
  watchlistId: Scalars['ID'];
  sortBy?: InputMaybe<SortField>;
  sortOrder?: InputMaybe<OrderByDirection>;
  first?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
}>;


export type WatchlistListWatchlistPlayersQuery = { __typename?: 'Query', listWatchlistPlayers: { __typename?: 'PlayerConnection', edges: Array<{ __typename?: 'PlayerEdge', cursor: string, node: { __typename?: 'Player', id: string, knownName: string, firstName: string, lastName: string, timeDecayedGPR?: number | null, isWatchedByCurrentUser?: boolean | null, team?: { __typename?: 'Team', id: string, name: string } | null, positions?: Array<{ __typename?: 'Position', id: string, name: string, abbreviation?: string | null } | null> | null, seasonWeightedAvgMetrics?: Array<{ __typename?: 'PlayerSeasonWeightedAvgMetrics', epm?: number | null, seasonalGpm?: number | null, ggUnifiedSeasonKey: number } | null> | null, bioData?: { __typename?: 'PlayerBioData', ggPlayerKey: string, dateOfBirth?: string | null, age?: number | null, foot?: string | null, roleArchetype?: string | null, isInjured: boolean, contractExpires?: string | null, playerValuation?: number | null, gpm?: number | null, gpr?: number | null, timeDecayedSeasonalGpm?: number | null, timeDecayedZVaep?: number | null, fitScore?: number | null, teamStyleFit?: number | null, passingTransGlobalCategoricalScore?: number | null, shotLocationTransGlobalCategoricalScore?: number | null, dribblingTransGlobalCategoricalScore?: number | null, carryingTransGlobalCategoricalScore?: number | null, gkShotStoppingTransCategoricalScore?: number | null, gkPositioningTransCategoricalScore?: number | null, gkPassingTransCategoricalScore?: number | null, llmDerivedSummary?: string | null } | null, seasonCategoricalScores?: Array<{ __typename?: 'PlayerSeasonCategoricalScore', ggUnifiedSeasonKey: number, carryingTransPositionalCategoricalScore?: number | null, dribblingTransPositionalCategoricalScore?: number | null, gkPassingTransCategoricalScore?: number | null, gkPositioningTransCategoricalScore?: number | null, gkShotStoppingTransCategoricalScore?: number | null, passingTransPositionalCategoricalScore?: number | null, shotLocationTransPositionalCategoricalScore?: number | null } | null> | null } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } };

export type WatchlistDeleteWatchlistMutationVariables = Exact<{
  input: DeleteWatchlistInput;
}>;


export type WatchlistDeleteWatchlistMutation = { __typename?: 'Mutation', deleteWatchlist: { __typename?: 'Watchlist', id: string, name: string, players: { __typename?: 'PlayerConnection', edges: Array<{ __typename?: 'PlayerEdge', cursor: string, node: { __typename?: 'Player', id: string, knownName: string, firstName: string, lastName: string, timeDecayedGPR?: number | null, isWatchedByCurrentUser?: boolean | null, team?: { __typename?: 'Team', id: string, name: string } | null, positions?: Array<{ __typename?: 'Position', id: string, name: string, abbreviation?: string | null } | null> | null, seasonWeightedAvgMetrics?: Array<{ __typename?: 'PlayerSeasonWeightedAvgMetrics', epm?: number | null, seasonalGpm?: number | null, ggUnifiedSeasonKey: number } | null> | null, bioData?: { __typename?: 'PlayerBioData', ggPlayerKey: string, dateOfBirth?: string | null, age?: number | null, foot?: string | null, roleArchetype?: string | null, isInjured: boolean, contractExpires?: string | null, playerValuation?: number | null, gpm?: number | null, gpr?: number | null, timeDecayedSeasonalGpm?: number | null, timeDecayedZVaep?: number | null, fitScore?: number | null, teamStyleFit?: number | null, passingTransGlobalCategoricalScore?: number | null, shotLocationTransGlobalCategoricalScore?: number | null, dribblingTransGlobalCategoricalScore?: number | null, carryingTransGlobalCategoricalScore?: number | null, gkShotStoppingTransCategoricalScore?: number | null, gkPositioningTransCategoricalScore?: number | null, gkPassingTransCategoricalScore?: number | null, llmDerivedSummary?: string | null } | null, seasonCategoricalScores?: Array<{ __typename?: 'PlayerSeasonCategoricalScore', ggUnifiedSeasonKey: number, carryingTransPositionalCategoricalScore?: number | null, dribblingTransPositionalCategoricalScore?: number | null, gkPassingTransCategoricalScore?: number | null, gkPositioningTransCategoricalScore?: number | null, gkShotStoppingTransCategoricalScore?: number | null, passingTransPositionalCategoricalScore?: number | null, shotLocationTransPositionalCategoricalScore?: number | null } | null> | null } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } } };

export type WatchlistUpdateWatchlistMutationVariables = Exact<{
  input: UpdateWatchlistInput;
}>;


export type WatchlistUpdateWatchlistMutation = { __typename?: 'Mutation', updateWatchlist: { __typename?: 'Watchlist', id: string, name: string, players: { __typename?: 'PlayerConnection', edges: Array<{ __typename?: 'PlayerEdge', cursor: string, node: { __typename?: 'Player', id: string, knownName: string, firstName: string, lastName: string, timeDecayedGPR?: number | null, isWatchedByCurrentUser?: boolean | null, team?: { __typename?: 'Team', id: string, name: string } | null, positions?: Array<{ __typename?: 'Position', id: string, name: string, abbreviation?: string | null } | null> | null, seasonWeightedAvgMetrics?: Array<{ __typename?: 'PlayerSeasonWeightedAvgMetrics', epm?: number | null, seasonalGpm?: number | null, ggUnifiedSeasonKey: number } | null> | null, bioData?: { __typename?: 'PlayerBioData', ggPlayerKey: string, dateOfBirth?: string | null, age?: number | null, foot?: string | null, roleArchetype?: string | null, isInjured: boolean, contractExpires?: string | null, playerValuation?: number | null, gpm?: number | null, gpr?: number | null, timeDecayedSeasonalGpm?: number | null, timeDecayedZVaep?: number | null, fitScore?: number | null, teamStyleFit?: number | null, passingTransGlobalCategoricalScore?: number | null, shotLocationTransGlobalCategoricalScore?: number | null, dribblingTransGlobalCategoricalScore?: number | null, carryingTransGlobalCategoricalScore?: number | null, gkShotStoppingTransCategoricalScore?: number | null, gkPositioningTransCategoricalScore?: number | null, gkPassingTransCategoricalScore?: number | null, llmDerivedSummary?: string | null } | null, seasonCategoricalScores?: Array<{ __typename?: 'PlayerSeasonCategoricalScore', ggUnifiedSeasonKey: number, carryingTransPositionalCategoricalScore?: number | null, dribblingTransPositionalCategoricalScore?: number | null, gkPassingTransCategoricalScore?: number | null, gkPositioningTransCategoricalScore?: number | null, gkShotStoppingTransCategoricalScore?: number | null, passingTransPositionalCategoricalScore?: number | null, shotLocationTransPositionalCategoricalScore?: number | null } | null> | null } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } } };

export type WatchlistRemovePlayerFromWatchlistMutationVariables = Exact<{
  input: RemovePlayerFromWatchlistInput;
}>;


export type WatchlistRemovePlayerFromWatchlistMutation = { __typename?: 'Mutation', removePlayerFromWatchlist: { __typename?: 'Watchlist', id: string, name: string, players: { __typename?: 'PlayerConnection', edges: Array<{ __typename?: 'PlayerEdge', cursor: string, node: { __typename?: 'Player', id: string, knownName: string, firstName: string, lastName: string, timeDecayedGPR?: number | null, isWatchedByCurrentUser?: boolean | null, team?: { __typename?: 'Team', id: string, name: string } | null, positions?: Array<{ __typename?: 'Position', id: string, name: string, abbreviation?: string | null } | null> | null, seasonWeightedAvgMetrics?: Array<{ __typename?: 'PlayerSeasonWeightedAvgMetrics', epm?: number | null, seasonalGpm?: number | null, ggUnifiedSeasonKey: number } | null> | null, bioData?: { __typename?: 'PlayerBioData', ggPlayerKey: string, dateOfBirth?: string | null, age?: number | null, foot?: string | null, roleArchetype?: string | null, isInjured: boolean, contractExpires?: string | null, playerValuation?: number | null, gpm?: number | null, gpr?: number | null, timeDecayedSeasonalGpm?: number | null, timeDecayedZVaep?: number | null, fitScore?: number | null, teamStyleFit?: number | null, passingTransGlobalCategoricalScore?: number | null, shotLocationTransGlobalCategoricalScore?: number | null, dribblingTransGlobalCategoricalScore?: number | null, carryingTransGlobalCategoricalScore?: number | null, gkShotStoppingTransCategoricalScore?: number | null, gkPositioningTransCategoricalScore?: number | null, gkPassingTransCategoricalScore?: number | null, llmDerivedSummary?: string | null } | null, seasonCategoricalScores?: Array<{ __typename?: 'PlayerSeasonCategoricalScore', ggUnifiedSeasonKey: number, carryingTransPositionalCategoricalScore?: number | null, dribblingTransPositionalCategoricalScore?: number | null, gkPassingTransCategoricalScore?: number | null, gkPositioningTransCategoricalScore?: number | null, gkShotStoppingTransCategoricalScore?: number | null, passingTransPositionalCategoricalScore?: number | null, shotLocationTransPositionalCategoricalScore?: number | null } | null> | null } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } } };

export type WatchlistUpdateUserWatchlistPositionMutationVariables = Exact<{
  input: UpdateUserWatchlistPositionInput;
}>;


export type WatchlistUpdateUserWatchlistPositionMutation = { __typename?: 'Mutation', updateUserWatchlistPosition: { __typename?: 'Watchlist', id: string, name: string, players: { __typename?: 'PlayerConnection', edges: Array<{ __typename?: 'PlayerEdge', cursor: string, node: { __typename?: 'Player', id: string, knownName: string, firstName: string, lastName: string, timeDecayedGPR?: number | null, isWatchedByCurrentUser?: boolean | null, team?: { __typename?: 'Team', id: string, name: string } | null, positions?: Array<{ __typename?: 'Position', id: string, name: string, abbreviation?: string | null } | null> | null, seasonWeightedAvgMetrics?: Array<{ __typename?: 'PlayerSeasonWeightedAvgMetrics', epm?: number | null, seasonalGpm?: number | null, ggUnifiedSeasonKey: number } | null> | null, bioData?: { __typename?: 'PlayerBioData', ggPlayerKey: string, dateOfBirth?: string | null, age?: number | null, foot?: string | null, roleArchetype?: string | null, isInjured: boolean, contractExpires?: string | null, playerValuation?: number | null, gpm?: number | null, gpr?: number | null, timeDecayedSeasonalGpm?: number | null, timeDecayedZVaep?: number | null, fitScore?: number | null, teamStyleFit?: number | null, passingTransGlobalCategoricalScore?: number | null, shotLocationTransGlobalCategoricalScore?: number | null, dribblingTransGlobalCategoricalScore?: number | null, carryingTransGlobalCategoricalScore?: number | null, gkShotStoppingTransCategoricalScore?: number | null, gkPositioningTransCategoricalScore?: number | null, gkPassingTransCategoricalScore?: number | null, llmDerivedSummary?: string | null } | null, seasonCategoricalScores?: Array<{ __typename?: 'PlayerSeasonCategoricalScore', ggUnifiedSeasonKey: number, carryingTransPositionalCategoricalScore?: number | null, dribblingTransPositionalCategoricalScore?: number | null, gkPassingTransCategoricalScore?: number | null, gkPositioningTransCategoricalScore?: number | null, gkShotStoppingTransCategoricalScore?: number | null, passingTransPositionalCategoricalScore?: number | null, shotLocationTransPositionalCategoricalScore?: number | null } | null> | null } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } } };

export type WatchlistAddPlayerToWatchlistMutationVariables = Exact<{
  input: AddPlayerToWatchlistInput;
}>;


export type WatchlistAddPlayerToWatchlistMutation = { __typename?: 'Mutation', addPlayerToWatchlist: { __typename?: 'Watchlist', id: string, name: string, players: { __typename?: 'PlayerConnection', edges: Array<{ __typename?: 'PlayerEdge', cursor: string, node: { __typename?: 'Player', id: string, knownName: string, firstName: string, lastName: string, timeDecayedGPR?: number | null, isWatchedByCurrentUser?: boolean | null, team?: { __typename?: 'Team', id: string, name: string } | null, positions?: Array<{ __typename?: 'Position', id: string, name: string, abbreviation?: string | null } | null> | null, seasonWeightedAvgMetrics?: Array<{ __typename?: 'PlayerSeasonWeightedAvgMetrics', epm?: number | null, seasonalGpm?: number | null, ggUnifiedSeasonKey: number } | null> | null, bioData?: { __typename?: 'PlayerBioData', ggPlayerKey: string, dateOfBirth?: string | null, age?: number | null, foot?: string | null, roleArchetype?: string | null, isInjured: boolean, contractExpires?: string | null, playerValuation?: number | null, gpm?: number | null, gpr?: number | null, timeDecayedSeasonalGpm?: number | null, timeDecayedZVaep?: number | null, fitScore?: number | null, teamStyleFit?: number | null, passingTransGlobalCategoricalScore?: number | null, shotLocationTransGlobalCategoricalScore?: number | null, dribblingTransGlobalCategoricalScore?: number | null, carryingTransGlobalCategoricalScore?: number | null, gkShotStoppingTransCategoricalScore?: number | null, gkPositioningTransCategoricalScore?: number | null, gkPassingTransCategoricalScore?: number | null, llmDerivedSummary?: string | null } | null, seasonCategoricalScores?: Array<{ __typename?: 'PlayerSeasonCategoricalScore', ggUnifiedSeasonKey: number, carryingTransPositionalCategoricalScore?: number | null, dribblingTransPositionalCategoricalScore?: number | null, gkPassingTransCategoricalScore?: number | null, gkPositioningTransCategoricalScore?: number | null, gkShotStoppingTransCategoricalScore?: number | null, passingTransPositionalCategoricalScore?: number | null, shotLocationTransPositionalCategoricalScore?: number | null } | null> | null } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } } };

export type WatchlistUpdateWatchlistPlayerPositionMutationVariables = Exact<{
  input: UpdateWatchlistPlayerPositionInput;
}>;


export type WatchlistUpdateWatchlistPlayerPositionMutation = { __typename?: 'Mutation', updateWatchlistPlayerPosition: { __typename?: 'Watchlist', id: string, name: string, players: { __typename?: 'PlayerConnection', edges: Array<{ __typename?: 'PlayerEdge', cursor: string, node: { __typename?: 'Player', id: string, knownName: string, firstName: string, lastName: string, timeDecayedGPR?: number | null, isWatchedByCurrentUser?: boolean | null, team?: { __typename?: 'Team', id: string, name: string } | null, positions?: Array<{ __typename?: 'Position', id: string, name: string, abbreviation?: string | null } | null> | null, seasonWeightedAvgMetrics?: Array<{ __typename?: 'PlayerSeasonWeightedAvgMetrics', epm?: number | null, seasonalGpm?: number | null, ggUnifiedSeasonKey: number } | null> | null, bioData?: { __typename?: 'PlayerBioData', ggPlayerKey: string, dateOfBirth?: string | null, age?: number | null, foot?: string | null, roleArchetype?: string | null, isInjured: boolean, contractExpires?: string | null, playerValuation?: number | null, gpm?: number | null, gpr?: number | null, timeDecayedSeasonalGpm?: number | null, timeDecayedZVaep?: number | null, fitScore?: number | null, teamStyleFit?: number | null, passingTransGlobalCategoricalScore?: number | null, shotLocationTransGlobalCategoricalScore?: number | null, dribblingTransGlobalCategoricalScore?: number | null, carryingTransGlobalCategoricalScore?: number | null, gkShotStoppingTransCategoricalScore?: number | null, gkPositioningTransCategoricalScore?: number | null, gkPassingTransCategoricalScore?: number | null, llmDerivedSummary?: string | null } | null, seasonCategoricalScores?: Array<{ __typename?: 'PlayerSeasonCategoricalScore', ggUnifiedSeasonKey: number, carryingTransPositionalCategoricalScore?: number | null, dribblingTransPositionalCategoricalScore?: number | null, gkPassingTransCategoricalScore?: number | null, gkPositioningTransCategoricalScore?: number | null, gkShotStoppingTransCategoricalScore?: number | null, passingTransPositionalCategoricalScore?: number | null, shotLocationTransPositionalCategoricalScore?: number | null } | null> | null } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } } };

export type WatchListUpdateWatchListPlayerPositionsMutationVariables = Exact<{
  input: UpdateWatchlistPlayerPositionsInput;
}>;


export type WatchListUpdateWatchListPlayerPositionsMutation = { __typename?: 'Mutation', updateWatchlistPlayerPositions: { __typename?: 'Watchlist', id: string, name: string, players: { __typename?: 'PlayerConnection', edges: Array<{ __typename?: 'PlayerEdge', cursor: string, node: { __typename?: 'Player', id: string, knownName: string, firstName: string, lastName: string, timeDecayedGPR?: number | null, isWatchedByCurrentUser?: boolean | null, team?: { __typename?: 'Team', id: string, name: string } | null, positions?: Array<{ __typename?: 'Position', id: string, name: string, abbreviation?: string | null } | null> | null, seasonWeightedAvgMetrics?: Array<{ __typename?: 'PlayerSeasonWeightedAvgMetrics', epm?: number | null, seasonalGpm?: number | null, ggUnifiedSeasonKey: number } | null> | null, bioData?: { __typename?: 'PlayerBioData', ggPlayerKey: string, dateOfBirth?: string | null, age?: number | null, foot?: string | null, roleArchetype?: string | null, isInjured: boolean, contractExpires?: string | null, playerValuation?: number | null, gpm?: number | null, gpr?: number | null, timeDecayedSeasonalGpm?: number | null, timeDecayedZVaep?: number | null, fitScore?: number | null, teamStyleFit?: number | null, passingTransGlobalCategoricalScore?: number | null, shotLocationTransGlobalCategoricalScore?: number | null, dribblingTransGlobalCategoricalScore?: number | null, carryingTransGlobalCategoricalScore?: number | null, gkShotStoppingTransCategoricalScore?: number | null, gkPositioningTransCategoricalScore?: number | null, gkPassingTransCategoricalScore?: number | null, llmDerivedSummary?: string | null } | null, seasonCategoricalScores?: Array<{ __typename?: 'PlayerSeasonCategoricalScore', ggUnifiedSeasonKey: number, carryingTransPositionalCategoricalScore?: number | null, dribblingTransPositionalCategoricalScore?: number | null, gkPassingTransCategoricalScore?: number | null, gkPositioningTransCategoricalScore?: number | null, gkShotStoppingTransCategoricalScore?: number | null, passingTransPositionalCategoricalScore?: number | null, shotLocationTransPositionalCategoricalScore?: number | null } | null> | null } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } } };

export type WatchlistCreateUserWatchlistMutationVariables = Exact<{
  input: CreateUserWatchlistInput;
}>;


export type WatchlistCreateUserWatchlistMutation = { __typename?: 'Mutation', createUserWatchlist: { __typename?: 'UserWatchlist', id: string, role: UserWatchlistRole, user: { __typename?: 'User', id: string, title?: string | null, phoneNumber: string, cognitoUser?: { __typename?: 'CognitoUser', Username: string, UserAttributes?: Array<{ __typename?: 'CognitoUserAttribute', Name: string, Value: string }> | null, Attributes?: Array<{ __typename?: 'CognitoUserAttribute', Name: string, Value: string }> | null } | null } } };

export type WatchlistDeleteUserWatchlistMutationVariables = Exact<{
  input: DeleteUserWatchlistInput;
}>;


export type WatchlistDeleteUserWatchlistMutation = { __typename?: 'Mutation', deleteUserWatchlist: { __typename?: 'UserWatchlist', id: string, role: UserWatchlistRole, user: { __typename?: 'User', id: string, title?: string | null, phoneNumber: string, cognitoUser?: { __typename?: 'CognitoUser', Username: string, UserAttributes?: Array<{ __typename?: 'CognitoUserAttribute', Name: string, Value: string }> | null, Attributes?: Array<{ __typename?: 'CognitoUserAttribute', Name: string, Value: string }> | null } | null } } };

export type ListFeatureFlagsQueryVariables = Exact<{ [key: string]: never; }>;


export type ListFeatureFlagsQuery = { __typename?: 'Query', listFeatureFlags?: Record<string, any> | null };

export const AuthValidationResponseFragmentDoc = gql`
    fragment AuthValidationResponse on ValidationResponse {
  codes
}
    `;
export const MessageFragmentDoc = gql`
    fragment Message on Message {
  message
}
    `;
export const AuthAuthenticationResultFragmentDoc = gql`
    fragment AuthAuthenticationResult on AuthenticationResult {
  accessToken
  expiresIn
  tokenType
  refreshToken
  idToken
}
    `;
export const AuthAuthenticationResultWithMessageFragmentDoc = gql`
    fragment AuthAuthenticationResultWithMessage on AuthenticationResultWithMessage {
  data {
    ...AuthAuthenticationResult
  }
  message
}
    ${AuthAuthenticationResultFragmentDoc}`;
export const AuthChallengeParametersResultFragmentDoc = gql`
    fragment AuthChallengeParametersResult on ChallengeParametersResult {
  USERNAME
  attempts
  attemptsLeft
  email
  maxAttempts
}
    `;
export const AuthChallengeResultFragmentDoc = gql`
    fragment AuthChallengeResult on ChallengeResult {
  ChallengeName
  Session
  ChallengeParameters {
    ...AuthChallengeParametersResult
  }
}
    ${AuthChallengeParametersResultFragmentDoc}`;
export const AuthSignInResultFragmentDoc = gql`
    fragment AuthSignInResult on SignInResult {
  message
  data {
    ...AuthChallengeResult
  }
}
    ${AuthChallengeResultFragmentDoc}`;
export const AuthConfirmSignInResultFragmentDoc = gql`
    fragment AuthConfirmSignInResult on ConfirmSignInResult {
  errorMessage {
    ...Message
  }
  authResult {
    ...AuthAuthenticationResultWithMessage
  }
  signInResult {
    ...AuthSignInResult
  }
}
    ${MessageFragmentDoc}
${AuthAuthenticationResultWithMessageFragmentDoc}
${AuthSignInResultFragmentDoc}`;
export const AuthCognitoUserAttributeFragmentDoc = gql`
    fragment AuthCognitoUserAttribute on CognitoUserAttribute {
  Name
  Value
}
    `;
export const AuthCognitoUserFragmentDoc = gql`
    fragment AuthCognitoUser on CognitoUser {
  Username
  Enabled
  UserStatus
  UserAttributes {
    ...AuthCognitoUserAttribute
  }
  Attributes {
    ...AuthCognitoUserAttribute
  }
}
    ${AuthCognitoUserAttributeFragmentDoc}`;
export const AuthOrganizationFragmentDoc = gql`
    fragment AuthOrganization on Organization {
  id
  name
  currencyCode
  intakeFormUrl
  sportId
  organizationTeams {
    id
    teamId
  }
  recommendationTypes {
    type
    label
  }
}
    `;
export const AuthUserFragmentDoc = gql`
    fragment AuthUser on User {
  id
  email
  organizationId
  phoneNumber
  isAdmin
  title
  cognitoUser {
    ...AuthCognitoUser
  }
  organization {
    ...AuthOrganization
  }
}
    ${AuthCognitoUserFragmentDoc}
${AuthOrganizationFragmentDoc}`;
export const PlayerSearchPositionFragmentDoc = gql`
    fragment PlayerSearchPosition on Position {
  id
  name
  abbreviation
}
    `;
export const PlayerSearchTeamFragmentDoc = gql`
    fragment PlayerSearchTeam on Team {
  id
  name
}
    `;
export const PlayerSearchPlayerBioDataFragmentDoc = gql`
    fragment PlayerSearchPlayerBioData on PlayerBioData {
  ggPlayerKey
  fitScore
  teamStyleFit
  playerValuation
  carryingTransGlobalCategoricalScore
  dribblingTransGlobalCategoricalScore
  passingTransGlobalCategoricalScore
  shotLocationTransGlobalCategoricalScore
  gkPassingTransCategoricalScore
  gkPositioningTransCategoricalScore
  gkShotStoppingTransCategoricalScore
  contractExpires
  gpr
}
    `;
export const PlayerSearchPlayerFragmentDoc = gql`
    fragment PlayerSearchPlayer on Player {
  id
  knownName
  firstName
  lastName
  isWatchedByCurrentUser
  timeDecayedGPR
  positions {
    ...PlayerSearchPosition
  }
  team {
    ...PlayerSearchTeam
  }
  bioData {
    ...PlayerSearchPlayerBioData
  }
}
    ${PlayerSearchPositionFragmentDoc}
${PlayerSearchTeamFragmentDoc}
${PlayerSearchPlayerBioDataFragmentDoc}`;
export const ComparePlayersPlayerResultFragmentDoc = gql`
    fragment ComparePlayersPlayerResult on SimilarPlayerResult {
  player {
    ...PlayerSearchPlayer
  }
  similarityScore
}
    ${PlayerSearchPlayerFragmentDoc}`;
export const ComparePlayersSimilarPlayerConnectionFragmentDoc = gql`
    fragment ComparePlayersSimilarPlayerConnection on SimilarPlayerConnection {
  edges {
    node {
      ...ComparePlayersPlayerResult
    }
  }
  pageInfo {
    hasNextPage
    endCursor
  }
}
    ${ComparePlayersPlayerResultFragmentDoc}`;
export const InvitationsOrganizationFragmentDoc = gql`
    fragment InvitationsOrganization on Organization {
  id
  name
  currencyCode
  intakeFormUrl
  sport {
    id
    name
  }
}
    `;
export const InvitationsOrganizationEdgeFragmentDoc = gql`
    fragment InvitationsOrganizationEdge on OrganizationEdge {
  cursor
  node {
    ...InvitationsOrganization
  }
}
    ${InvitationsOrganizationFragmentDoc}`;
export const InvitationsOrganizationConnectionFragmentDoc = gql`
    fragment InvitationsOrganizationConnection on OrganizationConnection {
  edges {
    ...InvitationsOrganizationEdge
  }
  pageInfo {
    hasNextPage
    endCursor
  }
}
    ${InvitationsOrganizationEdgeFragmentDoc}`;
export const InvitationsRoleFragmentDoc = gql`
    fragment InvitationsRole on Role {
  id
  name
}
    `;
export const InvitationsRoleEdgeFragmentDoc = gql`
    fragment InvitationsRoleEdge on RoleEdge {
  cursor
  node {
    ...InvitationsRole
  }
}
    ${InvitationsRoleFragmentDoc}`;
export const InvitationsRoleConnectionFragmentDoc = gql`
    fragment InvitationsRoleConnection on RoleConnection {
  edges {
    ...InvitationsRoleEdge
  }
  pageInfo {
    hasNextPage
    endCursor
  }
}
    ${InvitationsRoleEdgeFragmentDoc}`;
export const InvitationsSportFragmentDoc = gql`
    fragment InvitationsSport on Sport {
  id
  name
}
    `;
export const InvitationsSportEdgeFragmentDoc = gql`
    fragment InvitationsSportEdge on SportEdge {
  cursor
  node {
    ...InvitationsSport
  }
}
    ${InvitationsSportFragmentDoc}`;
export const InvitationsSportConnectionFragmentDoc = gql`
    fragment InvitationsSportConnection on SportConnection {
  edges {
    ...InvitationsSportEdge
  }
  pageInfo {
    hasNextPage
    endCursor
  }
}
    ${InvitationsSportEdgeFragmentDoc}`;
export const InvitationsInvitationFragmentDoc = gql`
    fragment InvitationsInvitation on Invitation {
  id
  status
  phoneNumber
  receiver {
    id
    cognitoUser {
      Username
      Attributes {
        Name
        Value
      }
    }
  }
  user {
    id
    organization {
      id
      name
    }
    cognitoUser {
      Username
      Attributes {
        Name
        Value
      }
    }
  }
  role {
    id
    name
  }
}
    `;
export const InvitationsInvitationEdgeFragmentDoc = gql`
    fragment InvitationsInvitationEdge on InvitationEdge {
  cursor
  node {
    ...InvitationsInvitation
  }
}
    ${InvitationsInvitationFragmentDoc}`;
export const InvitationsInvitationConnectionFragmentDoc = gql`
    fragment InvitationsInvitationConnection on InvitationConnection {
  edges {
    ...InvitationsInvitationEdge
  }
  pageInfo {
    hasNextPage
    endCursor
  }
}
    ${InvitationsInvitationEdgeFragmentDoc}`;
export const InvitationsOrganizationUserFragmentDoc = gql`
    fragment InvitationsOrganizationUser on OrganizationUser {
  id
  status
  role {
    id
    name
  }
  user {
    id
    title
    cognitoUser {
      Username
      Attributes {
        Name
        Value
      }
    }
  }
}
    `;
export const InvitationsOrganizationUserEdgeFragmentDoc = gql`
    fragment InvitationsOrganizationUserEdge on OrganizationUserEdge {
  cursor
  node {
    ...InvitationsOrganizationUser
  }
}
    ${InvitationsOrganizationUserFragmentDoc}`;
export const InvitationsOrganizationUserConnectionFragmentDoc = gql`
    fragment InvitationsOrganizationUserConnection on OrganizationUserConnection {
  edges {
    ...InvitationsOrganizationUserEdge
  }
  pageInfo {
    hasNextPage
    endCursor
  }
}
    ${InvitationsOrganizationUserEdgeFragmentDoc}`;
export const NotesNoteFragmentDoc = gql`
    fragment NotesNote on Note {
  id
  createdAt
  updatedAt
  title
  body
  isPublic
  playerId
}
    `;
export const PlayerDetailTeamFragmentDoc = gql`
    fragment PlayerDetailTeam on Team {
  id
  name
}
    `;
export const PlayerDetailPositionFragmentDoc = gql`
    fragment PlayerDetailPosition on Position {
  id
  name
  abbreviation
}
    `;
export const PlayerDetailNationalityFragmentDoc = gql`
    fragment PlayerDetailNationality on Nationality {
  id
  name
}
    `;
export const PlayerDetailPlayerBioDataFragmentDoc = gql`
    fragment PlayerDetailPlayerBioData on PlayerBioData {
  age
  archetypeGgPlayerKey
  roleArchetype
  contractExpires
  contractOption
  currentClub
  currentLeague
  dateOfBirth
  fitScore
  foot
  ggPlayerKey
  gpm
  gpr
  height
  injuredUntil
  isInjured
  strengths
  weaknesses
  carryingTransGlobalCategoricalScore
  dribblingTransGlobalCategoricalScore
  gkPassingTransCategoricalScore
  gkPositioningTransCategoricalScore
  gkShotStoppingTransCategoricalScore
  passingTransGlobalCategoricalScore
  shotLocationTransGlobalCategoricalScore
  playerValuation
  llmDerivedSummary
  timeDecayedSeasonalGpm
  weaknesses
  strengths
  threats
  opportunities
  timeDecayedVaep
  timeDecayedZVaep
  teamStyleFit
  playerAgent
  primaryPosition
  generalPosition
}
    `;
export const PlayerDetailPlayerSeasonWeightedAvgMetricsFragmentDoc = gql`
    fragment PlayerDetailPlayerSeasonWeightedAvgMetrics on PlayerSeasonWeightedAvgMetrics {
  epm
  seasonalGpm
  ggUnifiedSeasonKey
}
    `;
export const PlayerDetailMatchDetailFragmentDoc = gql`
    fragment PlayerDetailMatchDetail on MatchDetail {
  team
  opponent
  ground
  matchDate
}
    `;
export const PlayerDetailScoutReportsFragmentDoc = gql`
    fragment PlayerDetailScoutReports on PlayerScoutReport {
  reportId
  ggPlayerKey
  scoutName
  reportDate
  team
  opponent
  ground
  overallScore
  qnaText
  matches {
    ...PlayerDetailMatchDetail
  }
}
    ${PlayerDetailMatchDetailFragmentDoc}`;
export const PlayerDetailSeasonCategoricalScoresFragmentDoc = gql`
    fragment PlayerDetailSeasonCategoricalScores on PlayerSeasonCategoricalScore {
  ggUnifiedSeasonKey
  carryingTransPositionalCategoricalScore
  dribblingTransPositionalCategoricalScore
  gkPassingTransCategoricalScore
  gkPositioningTransCategoricalScore
  gkShotStoppingTransCategoricalScore
  passingTransPositionalCategoricalScore
  shotLocationTransGlobalCategoricalScore
  shotLocationTransPositionalCategoricalScore
}
    `;
export const PlayerDetailPlayerFragmentDoc = gql`
    fragment PlayerDetailPlayer on Player {
  id
  knownName
  firstName
  lastName
  isWatchedByCurrentUser
  timeDecayedGPR
  positions {
    ...PlayerDetailPosition
  }
  nationality {
    ...PlayerDetailNationality
  }
  bioData {
    ...PlayerDetailPlayerBioData
  }
  team {
    ...PlayerSearchTeam
  }
  seasonWeightedAvgMetrics {
    ...PlayerDetailPlayerSeasonWeightedAvgMetrics
  }
  scoutReports {
    ...PlayerDetailScoutReports
  }
  seasonCategoricalScores {
    ...PlayerDetailSeasonCategoricalScores
  }
}
    ${PlayerDetailPositionFragmentDoc}
${PlayerDetailNationalityFragmentDoc}
${PlayerDetailPlayerBioDataFragmentDoc}
${PlayerSearchTeamFragmentDoc}
${PlayerDetailPlayerSeasonWeightedAvgMetricsFragmentDoc}
${PlayerDetailScoutReportsFragmentDoc}
${PlayerDetailSeasonCategoricalScoresFragmentDoc}`;
export const PlayerDetailPlayerConnectionFragmentDoc = gql`
    fragment PlayerDetailPlayerConnection on PlayerConnection {
  edges {
    cursor
    node {
      ...PlayerDetailPlayer
    }
  }
  pageInfo {
    hasNextPage
    endCursor
  }
}
    ${PlayerDetailPlayerFragmentDoc}`;
export const PlayerDetailChartPlayerFragmentDoc = gql`
    fragment PlayerDetailChartPlayer on Player {
  id
  knownName
  firstName
  lastName
  timeDecayedGPR
  bioData {
    ...PlayerDetailPlayerBioData
  }
  seasonWeightedAvgMetrics {
    ...PlayerDetailPlayerSeasonWeightedAvgMetrics
  }
  seasonCategoricalScores {
    ...PlayerDetailSeasonCategoricalScores
  }
}
    ${PlayerDetailPlayerBioDataFragmentDoc}
${PlayerDetailPlayerSeasonWeightedAvgMetricsFragmentDoc}
${PlayerDetailSeasonCategoricalScoresFragmentDoc}`;
export const PlayerDetailChartPlayerConectionFragmentDoc = gql`
    fragment PlayerDetailChartPlayerConection on PlayerConnection {
  edges {
    cursor
    node {
      ...PlayerDetailChartPlayer
    }
  }
  pageInfo {
    hasNextPage
    endCursor
  }
}
    ${PlayerDetailChartPlayerFragmentDoc}`;
export const PlayerDetailPlayerDataSummaryFragmentDoc = gql`
    fragment PlayerDetailPlayerDataSummary on PlayerDataSummary {
  id
  openAiThreadId
  openAiSummary
}
    `;
export const PlayerDetailOpenAiTextContentFragmentDoc = gql`
    fragment PlayerDetailOpenAiTextContent on OpenAiTextContent {
  value
}
    `;
export const PlayerDetailOpenAiContentFragmentDoc = gql`
    fragment PlayerDetailOpenAiContent on OpenAiContent {
  type
  text {
    ...PlayerDetailOpenAiTextContent
  }
  refusal
}
    ${PlayerDetailOpenAiTextContentFragmentDoc}`;
export const PlayerDetailOpenAiMessageFragmentDoc = gql`
    fragment PlayerDetailOpenAiMessage on OpenAiMessage {
  id
  role
  content {
    ...PlayerDetailOpenAiContent
  }
}
    ${PlayerDetailOpenAiContentFragmentDoc}`;
export const PlayerDetailOpenAiMessageConnectionFragmentDoc = gql`
    fragment PlayerDetailOpenAiMessageConnection on OpenAiMessageConnection {
  edges {
    cursor
    node {
      ...PlayerDetailOpenAiMessage
    }
  }
  pageInfo {
    hasNextPage
    endCursor
  }
}
    ${PlayerDetailOpenAiMessageFragmentDoc}`;
export const PlayerSearchPlayerSeasonWeightedAvgMetricsFragmentDoc = gql`
    fragment PlayerSearchPlayerSeasonWeightedAvgMetrics on PlayerSeasonWeightedAvgMetrics {
  ggPlayerKey
  ggUnifiedSeasonKey
  epm
  rapm
  spm
  stdEpm
  stdEpmTransform
}
    `;
export const PlayerSearchPlayerEdgeFragmentDoc = gql`
    fragment PlayerSearchPlayerEdge on PlayerEdge {
  cursor
  node {
    ...PlayerSearchPlayer
  }
}
    ${PlayerSearchPlayerFragmentDoc}`;
export const PlayerSearchPlayerConnectionFragmentDoc = gql`
    fragment PlayerSearchPlayerConnection on PlayerConnection {
  edges {
    ...PlayerSearchPlayerEdge
  }
  pageInfo {
    hasNextPage
    hasPreviousPage
    startCursor
    endCursor
  }
}
    ${PlayerSearchPlayerEdgeFragmentDoc}`;
export const WatchlistTeamFragmentDoc = gql`
    fragment WatchlistTeam on Team {
  id
  name
}
    `;
export const WatchlistPlayerPositionFragmentDoc = gql`
    fragment WatchlistPlayerPosition on Position {
  id
  name
  abbreviation
}
    `;
export const WatchlistPlayerSeasonWeightedAvgMetricsFragmentDoc = gql`
    fragment WatchlistPlayerSeasonWeightedAvgMetrics on PlayerSeasonWeightedAvgMetrics {
  epm
  seasonalGpm
  ggUnifiedSeasonKey
}
    `;
export const WatchlistPlayerBioDataFragmentDoc = gql`
    fragment WatchlistPlayerBioData on PlayerBioData {
  ggPlayerKey
  dateOfBirth
  age
  foot
  roleArchetype
  isInjured
  contractExpires
  playerValuation
  gpm
  gpr
  timeDecayedSeasonalGpm
  timeDecayedZVaep
  fitScore
  teamStyleFit
  passingTransGlobalCategoricalScore
  shotLocationTransGlobalCategoricalScore
  dribblingTransGlobalCategoricalScore
  carryingTransGlobalCategoricalScore
  gkShotStoppingTransCategoricalScore
  gkPositioningTransCategoricalScore
  gkPassingTransCategoricalScore
  llmDerivedSummary
}
    `;
export const WatchlistPlayerSeasonCategoricalScoreFragmentDoc = gql`
    fragment WatchlistPlayerSeasonCategoricalScore on PlayerSeasonCategoricalScore {
  ggUnifiedSeasonKey
  carryingTransPositionalCategoricalScore
  dribblingTransPositionalCategoricalScore
  gkPassingTransCategoricalScore
  gkPositioningTransCategoricalScore
  gkShotStoppingTransCategoricalScore
  passingTransPositionalCategoricalScore
  shotLocationTransPositionalCategoricalScore
}
    `;
export const WatchlistPlayerFragmentDoc = gql`
    fragment WatchlistPlayer on Player {
  id
  knownName
  firstName
  lastName
  timeDecayedGPR
  team {
    ...WatchlistTeam
  }
  isWatchedByCurrentUser
  positions {
    ...WatchlistPlayerPosition
  }
  seasonWeightedAvgMetrics {
    ...WatchlistPlayerSeasonWeightedAvgMetrics
  }
  bioData {
    ...WatchlistPlayerBioData
  }
  seasonCategoricalScores {
    ...WatchlistPlayerSeasonCategoricalScore
  }
}
    ${WatchlistTeamFragmentDoc}
${WatchlistPlayerPositionFragmentDoc}
${WatchlistPlayerSeasonWeightedAvgMetricsFragmentDoc}
${WatchlistPlayerBioDataFragmentDoc}
${WatchlistPlayerSeasonCategoricalScoreFragmentDoc}`;
export const WatchlistPlayerConnectionFragmentDoc = gql`
    fragment WatchlistPlayerConnection on PlayerConnection {
  edges {
    cursor
    node {
      ...WatchlistPlayer
    }
  }
  pageInfo {
    hasNextPage
    hasPreviousPage
    startCursor
    endCursor
  }
}
    ${WatchlistPlayerFragmentDoc}`;
export const PlayerSearchWatchlistFragmentDoc = gql`
    fragment PlayerSearchWatchlist on Watchlist {
  id
  name
  players {
    ...WatchlistPlayerConnection
  }
}
    ${WatchlistPlayerConnectionFragmentDoc}`;
export const PlayerSearchWatchlistEdgeFragmentDoc = gql`
    fragment PlayerSearchWatchlistEdge on WatchlistEdge {
  cursor
  node {
    ...PlayerSearchWatchlist
  }
}
    ${PlayerSearchWatchlistFragmentDoc}`;
export const PlayerSearchWatchlistConnectionFragmentDoc = gql`
    fragment PlayerSearchWatchlistConnection on WatchlistConnection {
  edges {
    ...PlayerSearchWatchlistEdge
  }
  pageInfo {
    hasNextPage
    endCursor
  }
}
    ${PlayerSearchWatchlistEdgeFragmentDoc}`;
export const PlayerSearchWatchlistWithPlayerFragmentDoc = gql`
    fragment PlayerSearchWatchlistWithPlayer on Watchlist {
  id
  name
  players {
    ...WatchlistPlayerConnection
  }
  isOnWatchlist(playerId: $playerId)
}
    ${WatchlistPlayerConnectionFragmentDoc}`;
export const PlayerSearchWatchlistEdgeWithPlayerFragmentDoc = gql`
    fragment PlayerSearchWatchlistEdgeWithPlayer on WatchlistEdge {
  cursor
  node {
    ...PlayerSearchWatchlistWithPlayer
  }
}
    ${PlayerSearchWatchlistWithPlayerFragmentDoc}`;
export const PlayerSearchWatchlistConnectionWithPlayerFragmentDoc = gql`
    fragment PlayerSearchWatchlistConnectionWithPlayer on WatchlistConnection {
  edges {
    ...PlayerSearchWatchlistEdgeWithPlayer
  }
  pageInfo {
    hasNextPage
    endCursor
  }
}
    ${PlayerSearchWatchlistEdgeWithPlayerFragmentDoc}`;
export const RecommendationsTeamFragmentDoc = gql`
    fragment RecommendationsTeam on Team {
  id
  name
}
    `;
export const RecommendationsPlayerPositionFragmentDoc = gql`
    fragment RecommendationsPlayerPosition on Position {
  id
  name
  abbreviation
}
    `;
export const RecommendationsPlayerRatingTimeSeriesFragmentDoc = gql`
    fragment RecommendationsPlayerRatingTimeSeries on PlayerRatingTimeSeries {
  ggUnifiedSeasonKey
  gpr
  zVaep
  zGpm
}
    `;
export const RecommendationsPlayerFragmentDoc = gql`
    fragment RecommendationsPlayer on Player {
  id
  knownName
  firstName
  lastName
  isWatchedByCurrentUser
  team {
    ...RecommendationsTeam
  }
  positions {
    ...RecommendationsPlayerPosition
  }
  playerRatingTimeSeries {
    ...RecommendationsPlayerRatingTimeSeries
  }
}
    ${RecommendationsTeamFragmentDoc}
${RecommendationsPlayerPositionFragmentDoc}
${RecommendationsPlayerRatingTimeSeriesFragmentDoc}`;
export const RecommendationsPlayerRecommendationResultFragmentDoc = gql`
    fragment RecommendationsPlayerRecommendationResult on PlayerRecommendationResult {
  id
  player {
    ...RecommendationsPlayer
  }
  recommendationScore
  recommendationType
  rankChange
  currentRank
  previousRank
  timestamp
  previousTimestamp
}
    ${RecommendationsPlayerFragmentDoc}`;
export const ReportsPlayerMatchFragmentDoc = gql`
    fragment ReportsPlayerMatch on PlayerMatch {
  id
  competitionKey
  seasonKey
  matchId
  teamName
  oppositionName
  matchDate
  ground
  selectBox
}
    `;
export const RosterManagementSportFragmentDoc = gql`
    fragment RosterManagementSport on Sport {
  id
  name
}
    `;
export const RosterManagementLeagueFragmentDoc = gql`
    fragment RosterManagementLeague on League {
  id
  name
  isMyOrganizationLeague
  sport {
    ...RosterManagementSport
  }
  country
}
    ${RosterManagementSportFragmentDoc}`;
export const RosterManagementLeagueEdgeFragmentDoc = gql`
    fragment RosterManagementLeagueEdge on LeagueEdge {
  cursor
  node {
    ...RosterManagementLeague
  }
}
    ${RosterManagementLeagueFragmentDoc}`;
export const RosterManagementLeagueConnectionFragmentDoc = gql`
    fragment RosterManagementLeagueConnection on LeagueConnection {
  edges {
    ...RosterManagementLeagueEdge
  }
  pageInfo {
    hasNextPage
    endCursor
  }
}
    ${RosterManagementLeagueEdgeFragmentDoc}`;
export const RosterManagementTeamFragmentDoc = gql`
    fragment RosterManagementTeam on Team {
  id
  name
  isMyOrganizationTeam
}
    `;
export const RosterManagementTeamEdgeFragmentDoc = gql`
    fragment RosterManagementTeamEdge on TeamEdge {
  cursor
  node {
    ...RosterManagementTeam
  }
}
    ${RosterManagementTeamFragmentDoc}`;
export const RosterManagementTeamConnectionFragmentDoc = gql`
    fragment RosterManagementTeamConnection on TeamConnection {
  edges {
    ...RosterManagementTeamEdge
  }
  pageInfo {
    hasNextPage
    endCursor
  }
}
    ${RosterManagementTeamEdgeFragmentDoc}`;
export const RosterManagmentOrganizationTeamFragmentDoc = gql`
    fragment RosterManagmentOrganizationTeam on OrganizationTeam {
  id
  organizationId
  teamId
}
    `;
export const RosterManagmentOrganizationLeagueFragmentDoc = gql`
    fragment RosterManagmentOrganizationLeague on OrganizationLeague {
  id
  organizationId
  leagueId
}
    `;
export const RosterManagementNationalityFragmentDoc = gql`
    fragment RosterManagementNationality on Nationality {
  id
  name
}
    `;
export const RosterManagementNationalityEdgeFragmentDoc = gql`
    fragment RosterManagementNationalityEdge on NationalityEdge {
  cursor
  node {
    ...RosterManagementNationality
  }
}
    ${RosterManagementNationalityFragmentDoc}`;
export const RosterManagementNationalityConnectionFragmentDoc = gql`
    fragment RosterManagementNationalityConnection on NationalityConnection {
  edges {
    ...RosterManagementNationalityEdge
  }
  pageInfo {
    hasNextPage
    endCursor
  }
}
    ${RosterManagementNationalityEdgeFragmentDoc}`;
export const ShadowTeamPlayerBioDataFragmentDoc = gql`
    fragment ShadowTeamPlayerBioData on PlayerBioData {
  age
  archetypeGgPlayerKey
  roleArchetype
  contractExpires
  contractOption
  currentClub
  currentLeague
  dateOfBirth
  fitScore
  foot
  ggPlayerKey
  gpm
  gpr
}
    `;
export const ShadowTeamPlayerFragmentDoc = gql`
    fragment ShadowTeamPlayer on ShadowTeamPlayer {
  id
  order
  position
  playerId
  createdAt
  updatedAt
  shadowTeamId
  isManualAdding
  player {
    ...PlayerDetailPlayer
  }
}
    ${PlayerDetailPlayerFragmentDoc}`;
export const ShadowTeamDetailFragmentDoc = gql`
    fragment ShadowTeamDetail on ShadowTeam {
  id
  name
  createdAt
  updatedAt
  formation
  avgTeamGPR
  assignedPlayers {
    ...ShadowTeamPlayer
  }
}
    ${ShadowTeamPlayerFragmentDoc}`;
export const ShadowTeamPlayerSearchPlayerFragmentDoc = gql`
    fragment ShadowTeamPlayerSearchPlayer on Player {
  id
  knownName
  firstName
  lastName
  isWatchedByCurrentUser
  timeDecayedGPR
  positions {
    ...PlayerSearchPosition
  }
  team {
    ...PlayerSearchTeam
  }
  bioData {
    ...PlayerSearchPlayerBioData
  }
  isOnShadowTeam(shadowTeamId: $shadowTeamId)
}
    ${PlayerSearchPositionFragmentDoc}
${PlayerSearchTeamFragmentDoc}
${PlayerSearchPlayerBioDataFragmentDoc}`;
export const ShadowTeamSearchPlayerEdgeFragmentDoc = gql`
    fragment ShadowTeamSearchPlayerEdge on PlayerEdge {
  cursor
  node {
    ...ShadowTeamPlayerSearchPlayer
  }
}
    ${ShadowTeamPlayerSearchPlayerFragmentDoc}`;
export const ShadowTeamSearchPlayerConnectionFragmentDoc = gql`
    fragment ShadowTeamSearchPlayerConnection on PlayerConnection {
  edges {
    ...ShadowTeamSearchPlayerEdge
  }
  pageInfo {
    hasNextPage
    hasPreviousPage
    startCursor
    endCursor
  }
}
    ${ShadowTeamSearchPlayerEdgeFragmentDoc}`;
export const ShadowTeamFragmentDoc = gql`
    fragment ShadowTeam on ShadowTeam {
  id
  name
  createdAt
  updatedAt
  formation
  avgTeamGPR
}
    `;
export const ShadowTeamEdgeFragmentDoc = gql`
    fragment ShadowTeamEdge on ShadowTeamEdge {
  cursor
  node {
    ...ShadowTeam
  }
}
    ${ShadowTeamFragmentDoc}`;
export const ShadowTeamConnectionFragmentDoc = gql`
    fragment ShadowTeamConnection on ShadowTeamConnection {
  edges {
    ...ShadowTeamEdge
  }
  pageInfo {
    hasNextPage
    endCursor
  }
}
    ${ShadowTeamEdgeFragmentDoc}`;
export const ShadowTeamPlayerEdgeFragmentDoc = gql`
    fragment ShadowTeamPlayerEdge on ShadowTeamPlayerEdge {
  cursor
  node {
    ...ShadowTeamPlayer
  }
}
    ${ShadowTeamPlayerFragmentDoc}`;
export const ShadowTeamPlayerConnectionFragmentDoc = gql`
    fragment ShadowTeamPlayerConnection on ShadowTeamPlayerConnection {
  edges {
    ...ShadowTeamPlayerEdge
  }
  pageInfo {
    hasNextPage
    endCursor
  }
}
    ${ShadowTeamPlayerEdgeFragmentDoc}`;
export const SimilarPlayersPlayerResultFragmentDoc = gql`
    fragment SimilarPlayersPlayerResult on SimilarPlayerResult {
  player {
    ...PlayerSearchPlayer
  }
  similarityScore
}
    ${PlayerSearchPlayerFragmentDoc}`;
export const SimilarPlayersSimilarPlayerConnectionFragmentDoc = gql`
    fragment SimilarPlayersSimilarPlayerConnection on SimilarPlayerConnection {
  edges {
    node {
      ...SimilarPlayersPlayerResult
    }
  }
  pageInfo {
    hasNextPage
    endCursor
  }
}
    ${SimilarPlayersPlayerResultFragmentDoc}`;
export const WatchlistWatchlistFragmentDoc = gql`
    fragment WatchlistWatchlist on Watchlist {
  id
  name
  players {
    ...WatchlistPlayerConnection
  }
}
    ${WatchlistPlayerConnectionFragmentDoc}`;
export const WatchlistWatchlistConnectionFragmentDoc = gql`
    fragment WatchlistWatchlistConnection on WatchlistConnection {
  edges {
    cursor
    node {
      ...WatchlistWatchlist
    }
  }
  pageInfo {
    hasNextPage
    endCursor
  }
}
    ${WatchlistWatchlistFragmentDoc}`;
export const WatchlistCognitoUserFragmentDoc = gql`
    fragment WatchlistCognitoUser on CognitoUser {
  Username
  UserAttributes {
    ...AuthCognitoUserAttribute
  }
  Attributes {
    ...AuthCognitoUserAttribute
  }
}
    ${AuthCognitoUserAttributeFragmentDoc}`;
export const WatchlistUserFragmentDoc = gql`
    fragment WatchlistUser on User {
  id
  title
  phoneNumber
  cognitoUser {
    ...WatchlistCognitoUser
  }
}
    ${WatchlistCognitoUserFragmentDoc}`;
export const WatchlistUserWatchlistFragmentDoc = gql`
    fragment WatchlistUserWatchlist on UserWatchlist {
  id
  role
  user {
    ...WatchlistUser
  }
}
    ${WatchlistUserFragmentDoc}`;
export const WatchlistUserWatchlistConnectionFragmentDoc = gql`
    fragment WatchlistUserWatchlistConnection on UserWatchlistConnection {
  edges {
    cursor
    node {
      ...WatchlistUserWatchlist
    }
  }
  pageInfo {
    hasNextPage
    endCursor
  }
}
    ${WatchlistUserWatchlistFragmentDoc}`;
export const WatchlistMyUserWatchlistFragmentDoc = gql`
    fragment WatchlistMyUserWatchlist on UserWatchlist {
  id
  role
  watchlist {
    ...WatchlistWatchlist
  }
}
    ${WatchlistWatchlistFragmentDoc}`;
export const WatchlistMyUserWatchlistConnectionFragmentDoc = gql`
    fragment WatchlistMyUserWatchlistConnection on UserWatchlistConnection {
  edges {
    cursor
    node {
      ...WatchlistMyUserWatchlist
    }
  }
  pageInfo {
    hasNextPage
    endCursor
  }
}
    ${WatchlistMyUserWatchlistFragmentDoc}`;
export const WatchlistWatchlistEdgeFragmentDoc = gql`
    fragment WatchlistWatchlistEdge on WatchlistEdge {
  cursor
  node {
    ...WatchlistWatchlist
  }
}
    ${WatchlistWatchlistFragmentDoc}`;
export const WatchlistOrganizationUserFragmentDoc = gql`
    fragment WatchlistOrganizationUser on OrganizationUser {
  id
  user {
    ...WatchlistUser
  }
}
    ${WatchlistUserFragmentDoc}`;
export const WatchlistOrganizationUserEdgeFragmentDoc = gql`
    fragment WatchlistOrganizationUserEdge on OrganizationUserEdge {
  cursor
  node {
    ...WatchlistOrganizationUser
  }
}
    ${WatchlistOrganizationUserFragmentDoc}`;
export const WatchlistOrganizationUserConnectionFragmentDoc = gql`
    fragment WatchlistOrganizationUserConnection on OrganizationUserConnection {
  edges {
    ...WatchlistOrganizationUserEdge
  }
  pageInfo {
    hasNextPage
    endCursor
  }
}
    ${WatchlistOrganizationUserEdgeFragmentDoc}`;
export const AuthGetUserDocument = gql`
    query AuthGetUser {
  me {
    ...AuthUser
  }
}
    ${AuthUserFragmentDoc}`;

/**
 * __useAuthGetUserQuery__
 *
 * To run a query within a React component, call `useAuthGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useAuthGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAuthGetUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useAuthGetUserQuery(baseOptions?: Apollo.QueryHookOptions<AuthGetUserQuery, AuthGetUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AuthGetUserQuery, AuthGetUserQueryVariables>(AuthGetUserDocument, options);
      }
export function useAuthGetUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AuthGetUserQuery, AuthGetUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AuthGetUserQuery, AuthGetUserQueryVariables>(AuthGetUserDocument, options);
        }
export type AuthGetUserQueryHookResult = ReturnType<typeof useAuthGetUserQuery>;
export type AuthGetUserLazyQueryHookResult = ReturnType<typeof useAuthGetUserLazyQuery>;
export type AuthGetUserQueryResult = Apollo.QueryResult<AuthGetUserQuery, AuthGetUserQueryVariables>;
export const AuthRefreshTokenDocument = gql`
    mutation AuthRefreshToken($input: RefreshTokenInput!) {
  refreshToken(input: $input) {
    ...AuthAuthenticationResultWithMessage
  }
}
    ${AuthAuthenticationResultWithMessageFragmentDoc}`;
export type AuthRefreshTokenMutationFn = Apollo.MutationFunction<AuthRefreshTokenMutation, AuthRefreshTokenMutationVariables>;

/**
 * __useAuthRefreshTokenMutation__
 *
 * To run a mutation, you first call `useAuthRefreshTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAuthRefreshTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [authRefreshTokenMutation, { data, loading, error }] = useAuthRefreshTokenMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAuthRefreshTokenMutation(baseOptions?: Apollo.MutationHookOptions<AuthRefreshTokenMutation, AuthRefreshTokenMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AuthRefreshTokenMutation, AuthRefreshTokenMutationVariables>(AuthRefreshTokenDocument, options);
      }
export type AuthRefreshTokenMutationHookResult = ReturnType<typeof useAuthRefreshTokenMutation>;
export type AuthRefreshTokenMutationResult = Apollo.MutationResult<AuthRefreshTokenMutation>;
export type AuthRefreshTokenMutationOptions = Apollo.BaseMutationOptions<AuthRefreshTokenMutation, AuthRefreshTokenMutationVariables>;
export const AuthSignInDocument = gql`
    mutation AuthSignIn($input: SignInInput!) {
  signIn(input: $input) {
    message
    data {
      Session
    }
  }
}
    `;
export type AuthSignInMutationFn = Apollo.MutationFunction<AuthSignInMutation, AuthSignInMutationVariables>;

/**
 * __useAuthSignInMutation__
 *
 * To run a mutation, you first call `useAuthSignInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAuthSignInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [authSignInMutation, { data, loading, error }] = useAuthSignInMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAuthSignInMutation(baseOptions?: Apollo.MutationHookOptions<AuthSignInMutation, AuthSignInMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AuthSignInMutation, AuthSignInMutationVariables>(AuthSignInDocument, options);
      }
export type AuthSignInMutationHookResult = ReturnType<typeof useAuthSignInMutation>;
export type AuthSignInMutationResult = Apollo.MutationResult<AuthSignInMutation>;
export type AuthSignInMutationOptions = Apollo.BaseMutationOptions<AuthSignInMutation, AuthSignInMutationVariables>;
export const AuthResendVerifyIdentifierDocument = gql`
    mutation AuthResendVerifyIdentifier($input: ResendOtpInput!) {
  resendOTP(input: $input) {
    data {
      Session
    }
  }
}
    `;
export type AuthResendVerifyIdentifierMutationFn = Apollo.MutationFunction<AuthResendVerifyIdentifierMutation, AuthResendVerifyIdentifierMutationVariables>;

/**
 * __useAuthResendVerifyIdentifierMutation__
 *
 * To run a mutation, you first call `useAuthResendVerifyIdentifierMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAuthResendVerifyIdentifierMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [authResendVerifyIdentifierMutation, { data, loading, error }] = useAuthResendVerifyIdentifierMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAuthResendVerifyIdentifierMutation(baseOptions?: Apollo.MutationHookOptions<AuthResendVerifyIdentifierMutation, AuthResendVerifyIdentifierMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AuthResendVerifyIdentifierMutation, AuthResendVerifyIdentifierMutationVariables>(AuthResendVerifyIdentifierDocument, options);
      }
export type AuthResendVerifyIdentifierMutationHookResult = ReturnType<typeof useAuthResendVerifyIdentifierMutation>;
export type AuthResendVerifyIdentifierMutationResult = Apollo.MutationResult<AuthResendVerifyIdentifierMutation>;
export type AuthResendVerifyIdentifierMutationOptions = Apollo.BaseMutationOptions<AuthResendVerifyIdentifierMutation, AuthResendVerifyIdentifierMutationVariables>;
export const AuthValidateCurrentUserDocument = gql`
    mutation AuthValidateCurrentUser {
  validateCurrentUser {
    ...AuthValidationResponse
  }
}
    ${AuthValidationResponseFragmentDoc}`;
export type AuthValidateCurrentUserMutationFn = Apollo.MutationFunction<AuthValidateCurrentUserMutation, AuthValidateCurrentUserMutationVariables>;

/**
 * __useAuthValidateCurrentUserMutation__
 *
 * To run a mutation, you first call `useAuthValidateCurrentUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAuthValidateCurrentUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [authValidateCurrentUserMutation, { data, loading, error }] = useAuthValidateCurrentUserMutation({
 *   variables: {
 *   },
 * });
 */
export function useAuthValidateCurrentUserMutation(baseOptions?: Apollo.MutationHookOptions<AuthValidateCurrentUserMutation, AuthValidateCurrentUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AuthValidateCurrentUserMutation, AuthValidateCurrentUserMutationVariables>(AuthValidateCurrentUserDocument, options);
      }
export type AuthValidateCurrentUserMutationHookResult = ReturnType<typeof useAuthValidateCurrentUserMutation>;
export type AuthValidateCurrentUserMutationResult = Apollo.MutationResult<AuthValidateCurrentUserMutation>;
export type AuthValidateCurrentUserMutationOptions = Apollo.BaseMutationOptions<AuthValidateCurrentUserMutation, AuthValidateCurrentUserMutationVariables>;
export const AuthConfirmSignInDocument = gql`
    mutation AuthConfirmSignIn($input: ConfirmSignInInput!) {
  confirmSignIn(input: $input) {
    ...AuthConfirmSignInResult
  }
}
    ${AuthConfirmSignInResultFragmentDoc}`;
export type AuthConfirmSignInMutationFn = Apollo.MutationFunction<AuthConfirmSignInMutation, AuthConfirmSignInMutationVariables>;

/**
 * __useAuthConfirmSignInMutation__
 *
 * To run a mutation, you first call `useAuthConfirmSignInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAuthConfirmSignInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [authConfirmSignInMutation, { data, loading, error }] = useAuthConfirmSignInMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAuthConfirmSignInMutation(baseOptions?: Apollo.MutationHookOptions<AuthConfirmSignInMutation, AuthConfirmSignInMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AuthConfirmSignInMutation, AuthConfirmSignInMutationVariables>(AuthConfirmSignInDocument, options);
      }
export type AuthConfirmSignInMutationHookResult = ReturnType<typeof useAuthConfirmSignInMutation>;
export type AuthConfirmSignInMutationResult = Apollo.MutationResult<AuthConfirmSignInMutation>;
export type AuthConfirmSignInMutationOptions = Apollo.BaseMutationOptions<AuthConfirmSignInMutation, AuthConfirmSignInMutationVariables>;
export const AuthUpdateMyProfileDocument = gql`
    mutation AuthUpdateMyProfile($input: UpdateMyProfileInput!) {
  updateMyProfile(input: $input) {
    ...AuthUser
  }
}
    ${AuthUserFragmentDoc}`;
export type AuthUpdateMyProfileMutationFn = Apollo.MutationFunction<AuthUpdateMyProfileMutation, AuthUpdateMyProfileMutationVariables>;

/**
 * __useAuthUpdateMyProfileMutation__
 *
 * To run a mutation, you first call `useAuthUpdateMyProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAuthUpdateMyProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [authUpdateMyProfileMutation, { data, loading, error }] = useAuthUpdateMyProfileMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAuthUpdateMyProfileMutation(baseOptions?: Apollo.MutationHookOptions<AuthUpdateMyProfileMutation, AuthUpdateMyProfileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AuthUpdateMyProfileMutation, AuthUpdateMyProfileMutationVariables>(AuthUpdateMyProfileDocument, options);
      }
export type AuthUpdateMyProfileMutationHookResult = ReturnType<typeof useAuthUpdateMyProfileMutation>;
export type AuthUpdateMyProfileMutationResult = Apollo.MutationResult<AuthUpdateMyProfileMutation>;
export type AuthUpdateMyProfileMutationOptions = Apollo.BaseMutationOptions<AuthUpdateMyProfileMutation, AuthUpdateMyProfileMutationVariables>;
export const AuthSignOutDocument = gql`
    mutation AuthSignOut {
  signOut {
    message
  }
}
    `;
export type AuthSignOutMutationFn = Apollo.MutationFunction<AuthSignOutMutation, AuthSignOutMutationVariables>;

/**
 * __useAuthSignOutMutation__
 *
 * To run a mutation, you first call `useAuthSignOutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAuthSignOutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [authSignOutMutation, { data, loading, error }] = useAuthSignOutMutation({
 *   variables: {
 *   },
 * });
 */
export function useAuthSignOutMutation(baseOptions?: Apollo.MutationHookOptions<AuthSignOutMutation, AuthSignOutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AuthSignOutMutation, AuthSignOutMutationVariables>(AuthSignOutDocument, options);
      }
export type AuthSignOutMutationHookResult = ReturnType<typeof useAuthSignOutMutation>;
export type AuthSignOutMutationResult = Apollo.MutationResult<AuthSignOutMutation>;
export type AuthSignOutMutationOptions = Apollo.BaseMutationOptions<AuthSignOutMutation, AuthSignOutMutationVariables>;
export const AuthMeDocument = gql`
    query AuthMe {
  me {
    ...AuthUser
  }
}
    ${AuthUserFragmentDoc}`;

/**
 * __useAuthMeQuery__
 *
 * To run a query within a React component, call `useAuthMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useAuthMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAuthMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useAuthMeQuery(baseOptions?: Apollo.QueryHookOptions<AuthMeQuery, AuthMeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AuthMeQuery, AuthMeQueryVariables>(AuthMeDocument, options);
      }
export function useAuthMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AuthMeQuery, AuthMeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AuthMeQuery, AuthMeQueryVariables>(AuthMeDocument, options);
        }
export type AuthMeQueryHookResult = ReturnType<typeof useAuthMeQuery>;
export type AuthMeLazyQueryHookResult = ReturnType<typeof useAuthMeLazyQuery>;
export type AuthMeQueryResult = Apollo.QueryResult<AuthMeQuery, AuthMeQueryVariables>;
export const AuthDeactivateMeDocument = gql`
    mutation AuthDeactivateMe {
  deactivateMe {
    ...AuthUser
  }
}
    ${AuthUserFragmentDoc}`;
export type AuthDeactivateMeMutationFn = Apollo.MutationFunction<AuthDeactivateMeMutation, AuthDeactivateMeMutationVariables>;

/**
 * __useAuthDeactivateMeMutation__
 *
 * To run a mutation, you first call `useAuthDeactivateMeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAuthDeactivateMeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [authDeactivateMeMutation, { data, loading, error }] = useAuthDeactivateMeMutation({
 *   variables: {
 *   },
 * });
 */
export function useAuthDeactivateMeMutation(baseOptions?: Apollo.MutationHookOptions<AuthDeactivateMeMutation, AuthDeactivateMeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AuthDeactivateMeMutation, AuthDeactivateMeMutationVariables>(AuthDeactivateMeDocument, options);
      }
export type AuthDeactivateMeMutationHookResult = ReturnType<typeof useAuthDeactivateMeMutation>;
export type AuthDeactivateMeMutationResult = Apollo.MutationResult<AuthDeactivateMeMutation>;
export type AuthDeactivateMeMutationOptions = Apollo.BaseMutationOptions<AuthDeactivateMeMutation, AuthDeactivateMeMutationVariables>;
export const ComparePlayersListSimilarPlayersDocument = gql`
    query ComparePlayersListSimilarPlayers($playerId: ID!, $first: Int, $after: String, $maxValuation: Float, $maxAge: Int, $minAge: Int, $sortBy: SimilarPlayerSortField, $sortOrder: SortOrder) {
  listSimilarPlayers(
    playerId: $playerId
    maxValuation: $maxValuation
    maxAge: $maxAge
    minAge: $minAge
    sortBy: $sortBy
    sortOrder: $sortOrder
    first: $first
    after: $after
  ) {
    ...ComparePlayersSimilarPlayerConnection
  }
}
    ${ComparePlayersSimilarPlayerConnectionFragmentDoc}`;

/**
 * __useComparePlayersListSimilarPlayersQuery__
 *
 * To run a query within a React component, call `useComparePlayersListSimilarPlayersQuery` and pass it any options that fit your needs.
 * When your component renders, `useComparePlayersListSimilarPlayersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useComparePlayersListSimilarPlayersQuery({
 *   variables: {
 *      playerId: // value for 'playerId'
 *      first: // value for 'first'
 *      after: // value for 'after'
 *      maxValuation: // value for 'maxValuation'
 *      maxAge: // value for 'maxAge'
 *      minAge: // value for 'minAge'
 *      sortBy: // value for 'sortBy'
 *      sortOrder: // value for 'sortOrder'
 *   },
 * });
 */
export function useComparePlayersListSimilarPlayersQuery(baseOptions: Apollo.QueryHookOptions<ComparePlayersListSimilarPlayersQuery, ComparePlayersListSimilarPlayersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ComparePlayersListSimilarPlayersQuery, ComparePlayersListSimilarPlayersQueryVariables>(ComparePlayersListSimilarPlayersDocument, options);
      }
export function useComparePlayersListSimilarPlayersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ComparePlayersListSimilarPlayersQuery, ComparePlayersListSimilarPlayersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ComparePlayersListSimilarPlayersQuery, ComparePlayersListSimilarPlayersQueryVariables>(ComparePlayersListSimilarPlayersDocument, options);
        }
export type ComparePlayersListSimilarPlayersQueryHookResult = ReturnType<typeof useComparePlayersListSimilarPlayersQuery>;
export type ComparePlayersListSimilarPlayersLazyQueryHookResult = ReturnType<typeof useComparePlayersListSimilarPlayersLazyQuery>;
export type ComparePlayersListSimilarPlayersQueryResult = Apollo.QueryResult<ComparePlayersListSimilarPlayersQuery, ComparePlayersListSimilarPlayersQueryVariables>;
export const InvitationsListMySentInvitationsDocument = gql`
    query InvitationsListMySentInvitations($first: Int, $after: String) {
  listMySentInvitations(first: $first, after: $after) {
    ...InvitationsInvitationConnection
  }
}
    ${InvitationsInvitationConnectionFragmentDoc}`;

/**
 * __useInvitationsListMySentInvitationsQuery__
 *
 * To run a query within a React component, call `useInvitationsListMySentInvitationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useInvitationsListMySentInvitationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInvitationsListMySentInvitationsQuery({
 *   variables: {
 *      first: // value for 'first'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useInvitationsListMySentInvitationsQuery(baseOptions?: Apollo.QueryHookOptions<InvitationsListMySentInvitationsQuery, InvitationsListMySentInvitationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<InvitationsListMySentInvitationsQuery, InvitationsListMySentInvitationsQueryVariables>(InvitationsListMySentInvitationsDocument, options);
      }
export function useInvitationsListMySentInvitationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<InvitationsListMySentInvitationsQuery, InvitationsListMySentInvitationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<InvitationsListMySentInvitationsQuery, InvitationsListMySentInvitationsQueryVariables>(InvitationsListMySentInvitationsDocument, options);
        }
export type InvitationsListMySentInvitationsQueryHookResult = ReturnType<typeof useInvitationsListMySentInvitationsQuery>;
export type InvitationsListMySentInvitationsLazyQueryHookResult = ReturnType<typeof useInvitationsListMySentInvitationsLazyQuery>;
export type InvitationsListMySentInvitationsQueryResult = Apollo.QueryResult<InvitationsListMySentInvitationsQuery, InvitationsListMySentInvitationsQueryVariables>;
export const InvitationsListMyOrganiationsSentInvitationsDocument = gql`
    query InvitationsListMyOrganiationsSentInvitations($status: InvitationStatus, $first: Int, $after: String) {
  listMyOrganizationsSentInvitations(
    status: $status
    first: $first
    after: $after
  ) {
    ...InvitationsInvitationConnection
  }
}
    ${InvitationsInvitationConnectionFragmentDoc}`;

/**
 * __useInvitationsListMyOrganiationsSentInvitationsQuery__
 *
 * To run a query within a React component, call `useInvitationsListMyOrganiationsSentInvitationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useInvitationsListMyOrganiationsSentInvitationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInvitationsListMyOrganiationsSentInvitationsQuery({
 *   variables: {
 *      status: // value for 'status'
 *      first: // value for 'first'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useInvitationsListMyOrganiationsSentInvitationsQuery(baseOptions?: Apollo.QueryHookOptions<InvitationsListMyOrganiationsSentInvitationsQuery, InvitationsListMyOrganiationsSentInvitationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<InvitationsListMyOrganiationsSentInvitationsQuery, InvitationsListMyOrganiationsSentInvitationsQueryVariables>(InvitationsListMyOrganiationsSentInvitationsDocument, options);
      }
export function useInvitationsListMyOrganiationsSentInvitationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<InvitationsListMyOrganiationsSentInvitationsQuery, InvitationsListMyOrganiationsSentInvitationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<InvitationsListMyOrganiationsSentInvitationsQuery, InvitationsListMyOrganiationsSentInvitationsQueryVariables>(InvitationsListMyOrganiationsSentInvitationsDocument, options);
        }
export type InvitationsListMyOrganiationsSentInvitationsQueryHookResult = ReturnType<typeof useInvitationsListMyOrganiationsSentInvitationsQuery>;
export type InvitationsListMyOrganiationsSentInvitationsLazyQueryHookResult = ReturnType<typeof useInvitationsListMyOrganiationsSentInvitationsLazyQuery>;
export type InvitationsListMyOrganiationsSentInvitationsQueryResult = Apollo.QueryResult<InvitationsListMyOrganiationsSentInvitationsQuery, InvitationsListMyOrganiationsSentInvitationsQueryVariables>;
export const InvitationsListMyReceivedInvitationsDocument = gql`
    query InvitationsListMyReceivedInvitations($status: InvitationStatus, $first: Int, $after: String) {
  listMyReceivedInvitations(status: $status, first: $first, after: $after) {
    ...InvitationsInvitationConnection
  }
}
    ${InvitationsInvitationConnectionFragmentDoc}`;

/**
 * __useInvitationsListMyReceivedInvitationsQuery__
 *
 * To run a query within a React component, call `useInvitationsListMyReceivedInvitationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useInvitationsListMyReceivedInvitationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInvitationsListMyReceivedInvitationsQuery({
 *   variables: {
 *      status: // value for 'status'
 *      first: // value for 'first'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useInvitationsListMyReceivedInvitationsQuery(baseOptions?: Apollo.QueryHookOptions<InvitationsListMyReceivedInvitationsQuery, InvitationsListMyReceivedInvitationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<InvitationsListMyReceivedInvitationsQuery, InvitationsListMyReceivedInvitationsQueryVariables>(InvitationsListMyReceivedInvitationsDocument, options);
      }
export function useInvitationsListMyReceivedInvitationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<InvitationsListMyReceivedInvitationsQuery, InvitationsListMyReceivedInvitationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<InvitationsListMyReceivedInvitationsQuery, InvitationsListMyReceivedInvitationsQueryVariables>(InvitationsListMyReceivedInvitationsDocument, options);
        }
export type InvitationsListMyReceivedInvitationsQueryHookResult = ReturnType<typeof useInvitationsListMyReceivedInvitationsQuery>;
export type InvitationsListMyReceivedInvitationsLazyQueryHookResult = ReturnType<typeof useInvitationsListMyReceivedInvitationsLazyQuery>;
export type InvitationsListMyReceivedInvitationsQueryResult = Apollo.QueryResult<InvitationsListMyReceivedInvitationsQuery, InvitationsListMyReceivedInvitationsQueryVariables>;
export const InvitationsListMyOrganizationsOrganizationUsersDocument = gql`
    query InvitationsListMyOrganizationsOrganizationUsers($first: Int, $after: String) {
  listMyOrganizationsOrganizationUsers(first: $first, after: $after) {
    ...InvitationsOrganizationUserConnection
  }
}
    ${InvitationsOrganizationUserConnectionFragmentDoc}`;

/**
 * __useInvitationsListMyOrganizationsOrganizationUsersQuery__
 *
 * To run a query within a React component, call `useInvitationsListMyOrganizationsOrganizationUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useInvitationsListMyOrganizationsOrganizationUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInvitationsListMyOrganizationsOrganizationUsersQuery({
 *   variables: {
 *      first: // value for 'first'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useInvitationsListMyOrganizationsOrganizationUsersQuery(baseOptions?: Apollo.QueryHookOptions<InvitationsListMyOrganizationsOrganizationUsersQuery, InvitationsListMyOrganizationsOrganizationUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<InvitationsListMyOrganizationsOrganizationUsersQuery, InvitationsListMyOrganizationsOrganizationUsersQueryVariables>(InvitationsListMyOrganizationsOrganizationUsersDocument, options);
      }
export function useInvitationsListMyOrganizationsOrganizationUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<InvitationsListMyOrganizationsOrganizationUsersQuery, InvitationsListMyOrganizationsOrganizationUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<InvitationsListMyOrganizationsOrganizationUsersQuery, InvitationsListMyOrganizationsOrganizationUsersQueryVariables>(InvitationsListMyOrganizationsOrganizationUsersDocument, options);
        }
export type InvitationsListMyOrganizationsOrganizationUsersQueryHookResult = ReturnType<typeof useInvitationsListMyOrganizationsOrganizationUsersQuery>;
export type InvitationsListMyOrganizationsOrganizationUsersLazyQueryHookResult = ReturnType<typeof useInvitationsListMyOrganizationsOrganizationUsersLazyQuery>;
export type InvitationsListMyOrganizationsOrganizationUsersQueryResult = Apollo.QueryResult<InvitationsListMyOrganizationsOrganizationUsersQuery, InvitationsListMyOrganizationsOrganizationUsersQueryVariables>;
export const InvitationsListSportsDocument = gql`
    query InvitationsListSports($first: Int, $after: String) {
  listSports(first: $first, after: $after) {
    ...InvitationsSportConnection
  }
}
    ${InvitationsSportConnectionFragmentDoc}`;

/**
 * __useInvitationsListSportsQuery__
 *
 * To run a query within a React component, call `useInvitationsListSportsQuery` and pass it any options that fit your needs.
 * When your component renders, `useInvitationsListSportsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInvitationsListSportsQuery({
 *   variables: {
 *      first: // value for 'first'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useInvitationsListSportsQuery(baseOptions?: Apollo.QueryHookOptions<InvitationsListSportsQuery, InvitationsListSportsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<InvitationsListSportsQuery, InvitationsListSportsQueryVariables>(InvitationsListSportsDocument, options);
      }
export function useInvitationsListSportsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<InvitationsListSportsQuery, InvitationsListSportsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<InvitationsListSportsQuery, InvitationsListSportsQueryVariables>(InvitationsListSportsDocument, options);
        }
export type InvitationsListSportsQueryHookResult = ReturnType<typeof useInvitationsListSportsQuery>;
export type InvitationsListSportsLazyQueryHookResult = ReturnType<typeof useInvitationsListSportsLazyQuery>;
export type InvitationsListSportsQueryResult = Apollo.QueryResult<InvitationsListSportsQuery, InvitationsListSportsQueryVariables>;
export const InvitationsListRolesDocument = gql`
    query InvitationsListRoles($first: Int, $after: String) {
  listRoles(first: $first, after: $after) {
    ...InvitationsRoleConnection
  }
}
    ${InvitationsRoleConnectionFragmentDoc}`;

/**
 * __useInvitationsListRolesQuery__
 *
 * To run a query within a React component, call `useInvitationsListRolesQuery` and pass it any options that fit your needs.
 * When your component renders, `useInvitationsListRolesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInvitationsListRolesQuery({
 *   variables: {
 *      first: // value for 'first'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useInvitationsListRolesQuery(baseOptions?: Apollo.QueryHookOptions<InvitationsListRolesQuery, InvitationsListRolesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<InvitationsListRolesQuery, InvitationsListRolesQueryVariables>(InvitationsListRolesDocument, options);
      }
export function useInvitationsListRolesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<InvitationsListRolesQuery, InvitationsListRolesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<InvitationsListRolesQuery, InvitationsListRolesQueryVariables>(InvitationsListRolesDocument, options);
        }
export type InvitationsListRolesQueryHookResult = ReturnType<typeof useInvitationsListRolesQuery>;
export type InvitationsListRolesLazyQueryHookResult = ReturnType<typeof useInvitationsListRolesLazyQuery>;
export type InvitationsListRolesQueryResult = Apollo.QueryResult<InvitationsListRolesQuery, InvitationsListRolesQueryVariables>;
export const InvitationsGetOrganizationDocument = gql`
    query InvitationsGetOrganization($id: ID!) {
  getOrganization(id: $id) {
    ...InvitationsOrganization
  }
}
    ${InvitationsOrganizationFragmentDoc}`;

/**
 * __useInvitationsGetOrganizationQuery__
 *
 * To run a query within a React component, call `useInvitationsGetOrganizationQuery` and pass it any options that fit your needs.
 * When your component renders, `useInvitationsGetOrganizationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInvitationsGetOrganizationQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useInvitationsGetOrganizationQuery(baseOptions: Apollo.QueryHookOptions<InvitationsGetOrganizationQuery, InvitationsGetOrganizationQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<InvitationsGetOrganizationQuery, InvitationsGetOrganizationQueryVariables>(InvitationsGetOrganizationDocument, options);
      }
export function useInvitationsGetOrganizationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<InvitationsGetOrganizationQuery, InvitationsGetOrganizationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<InvitationsGetOrganizationQuery, InvitationsGetOrganizationQueryVariables>(InvitationsGetOrganizationDocument, options);
        }
export type InvitationsGetOrganizationQueryHookResult = ReturnType<typeof useInvitationsGetOrganizationQuery>;
export type InvitationsGetOrganizationLazyQueryHookResult = ReturnType<typeof useInvitationsGetOrganizationLazyQuery>;
export type InvitationsGetOrganizationQueryResult = Apollo.QueryResult<InvitationsGetOrganizationQuery, InvitationsGetOrganizationQueryVariables>;
export const InvitationsListOrganizationsDocument = gql`
    query InvitationsListOrganizations($first: Int, $after: String) {
  listOrganizations(first: $first, after: $after) {
    ...InvitationsOrganizationConnection
  }
}
    ${InvitationsOrganizationConnectionFragmentDoc}`;

/**
 * __useInvitationsListOrganizationsQuery__
 *
 * To run a query within a React component, call `useInvitationsListOrganizationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useInvitationsListOrganizationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInvitationsListOrganizationsQuery({
 *   variables: {
 *      first: // value for 'first'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useInvitationsListOrganizationsQuery(baseOptions?: Apollo.QueryHookOptions<InvitationsListOrganizationsQuery, InvitationsListOrganizationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<InvitationsListOrganizationsQuery, InvitationsListOrganizationsQueryVariables>(InvitationsListOrganizationsDocument, options);
      }
export function useInvitationsListOrganizationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<InvitationsListOrganizationsQuery, InvitationsListOrganizationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<InvitationsListOrganizationsQuery, InvitationsListOrganizationsQueryVariables>(InvitationsListOrganizationsDocument, options);
        }
export type InvitationsListOrganizationsQueryHookResult = ReturnType<typeof useInvitationsListOrganizationsQuery>;
export type InvitationsListOrganizationsLazyQueryHookResult = ReturnType<typeof useInvitationsListOrganizationsLazyQuery>;
export type InvitationsListOrganizationsQueryResult = Apollo.QueryResult<InvitationsListOrganizationsQuery, InvitationsListOrganizationsQueryVariables>;
export const InvitationsListMyOrganizationsDocument = gql`
    query InvitationsListMyOrganizations($first: Int, $after: String) {
  listMyOrganizations(first: $first, after: $after) {
    ...InvitationsOrganizationConnection
  }
}
    ${InvitationsOrganizationConnectionFragmentDoc}`;

/**
 * __useInvitationsListMyOrganizationsQuery__
 *
 * To run a query within a React component, call `useInvitationsListMyOrganizationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useInvitationsListMyOrganizationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInvitationsListMyOrganizationsQuery({
 *   variables: {
 *      first: // value for 'first'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useInvitationsListMyOrganizationsQuery(baseOptions?: Apollo.QueryHookOptions<InvitationsListMyOrganizationsQuery, InvitationsListMyOrganizationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<InvitationsListMyOrganizationsQuery, InvitationsListMyOrganizationsQueryVariables>(InvitationsListMyOrganizationsDocument, options);
      }
export function useInvitationsListMyOrganizationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<InvitationsListMyOrganizationsQuery, InvitationsListMyOrganizationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<InvitationsListMyOrganizationsQuery, InvitationsListMyOrganizationsQueryVariables>(InvitationsListMyOrganizationsDocument, options);
        }
export type InvitationsListMyOrganizationsQueryHookResult = ReturnType<typeof useInvitationsListMyOrganizationsQuery>;
export type InvitationsListMyOrganizationsLazyQueryHookResult = ReturnType<typeof useInvitationsListMyOrganizationsLazyQuery>;
export type InvitationsListMyOrganizationsQueryResult = Apollo.QueryResult<InvitationsListMyOrganizationsQuery, InvitationsListMyOrganizationsQueryVariables>;
export const InvitationsCreateOrganizationDocument = gql`
    mutation InvitationsCreateOrganization($input: CreateOrganizationInput!) {
  createOrganization(input: $input) {
    ...InvitationsOrganization
  }
}
    ${InvitationsOrganizationFragmentDoc}`;
export type InvitationsCreateOrganizationMutationFn = Apollo.MutationFunction<InvitationsCreateOrganizationMutation, InvitationsCreateOrganizationMutationVariables>;

/**
 * __useInvitationsCreateOrganizationMutation__
 *
 * To run a mutation, you first call `useInvitationsCreateOrganizationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInvitationsCreateOrganizationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [invitationsCreateOrganizationMutation, { data, loading, error }] = useInvitationsCreateOrganizationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useInvitationsCreateOrganizationMutation(baseOptions?: Apollo.MutationHookOptions<InvitationsCreateOrganizationMutation, InvitationsCreateOrganizationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InvitationsCreateOrganizationMutation, InvitationsCreateOrganizationMutationVariables>(InvitationsCreateOrganizationDocument, options);
      }
export type InvitationsCreateOrganizationMutationHookResult = ReturnType<typeof useInvitationsCreateOrganizationMutation>;
export type InvitationsCreateOrganizationMutationResult = Apollo.MutationResult<InvitationsCreateOrganizationMutation>;
export type InvitationsCreateOrganizationMutationOptions = Apollo.BaseMutationOptions<InvitationsCreateOrganizationMutation, InvitationsCreateOrganizationMutationVariables>;
export const InvitationsLogIntoOrganizationDocument = gql`
    mutation InvitationsLogIntoOrganization($input: LogIntoOrganizationInput!) {
  logIntoOrganization(input: $input) {
    ...AuthUser
  }
}
    ${AuthUserFragmentDoc}`;
export type InvitationsLogIntoOrganizationMutationFn = Apollo.MutationFunction<InvitationsLogIntoOrganizationMutation, InvitationsLogIntoOrganizationMutationVariables>;

/**
 * __useInvitationsLogIntoOrganizationMutation__
 *
 * To run a mutation, you first call `useInvitationsLogIntoOrganizationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInvitationsLogIntoOrganizationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [invitationsLogIntoOrganizationMutation, { data, loading, error }] = useInvitationsLogIntoOrganizationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useInvitationsLogIntoOrganizationMutation(baseOptions?: Apollo.MutationHookOptions<InvitationsLogIntoOrganizationMutation, InvitationsLogIntoOrganizationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InvitationsLogIntoOrganizationMutation, InvitationsLogIntoOrganizationMutationVariables>(InvitationsLogIntoOrganizationDocument, options);
      }
export type InvitationsLogIntoOrganizationMutationHookResult = ReturnType<typeof useInvitationsLogIntoOrganizationMutation>;
export type InvitationsLogIntoOrganizationMutationResult = Apollo.MutationResult<InvitationsLogIntoOrganizationMutation>;
export type InvitationsLogIntoOrganizationMutationOptions = Apollo.BaseMutationOptions<InvitationsLogIntoOrganizationMutation, InvitationsLogIntoOrganizationMutationVariables>;
export const InvitationsUpdateOrganizationDocument = gql`
    mutation InvitationsUpdateOrganization($input: UpdateOrganizationInput!) {
  updateOrganization(input: $input) {
    ...InvitationsOrganization
  }
}
    ${InvitationsOrganizationFragmentDoc}`;
export type InvitationsUpdateOrganizationMutationFn = Apollo.MutationFunction<InvitationsUpdateOrganizationMutation, InvitationsUpdateOrganizationMutationVariables>;

/**
 * __useInvitationsUpdateOrganizationMutation__
 *
 * To run a mutation, you first call `useInvitationsUpdateOrganizationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInvitationsUpdateOrganizationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [invitationsUpdateOrganizationMutation, { data, loading, error }] = useInvitationsUpdateOrganizationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useInvitationsUpdateOrganizationMutation(baseOptions?: Apollo.MutationHookOptions<InvitationsUpdateOrganizationMutation, InvitationsUpdateOrganizationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InvitationsUpdateOrganizationMutation, InvitationsUpdateOrganizationMutationVariables>(InvitationsUpdateOrganizationDocument, options);
      }
export type InvitationsUpdateOrganizationMutationHookResult = ReturnType<typeof useInvitationsUpdateOrganizationMutation>;
export type InvitationsUpdateOrganizationMutationResult = Apollo.MutationResult<InvitationsUpdateOrganizationMutation>;
export type InvitationsUpdateOrganizationMutationOptions = Apollo.BaseMutationOptions<InvitationsUpdateOrganizationMutation, InvitationsUpdateOrganizationMutationVariables>;
export const InvitationsCreateInvitationDocument = gql`
    mutation InvitationsCreateInvitation($input: CreateInvitationInput!) {
  createInvitation(input: $input) {
    ...InvitationsInvitation
  }
}
    ${InvitationsInvitationFragmentDoc}`;
export type InvitationsCreateInvitationMutationFn = Apollo.MutationFunction<InvitationsCreateInvitationMutation, InvitationsCreateInvitationMutationVariables>;

/**
 * __useInvitationsCreateInvitationMutation__
 *
 * To run a mutation, you first call `useInvitationsCreateInvitationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInvitationsCreateInvitationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [invitationsCreateInvitationMutation, { data, loading, error }] = useInvitationsCreateInvitationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useInvitationsCreateInvitationMutation(baseOptions?: Apollo.MutationHookOptions<InvitationsCreateInvitationMutation, InvitationsCreateInvitationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InvitationsCreateInvitationMutation, InvitationsCreateInvitationMutationVariables>(InvitationsCreateInvitationDocument, options);
      }
export type InvitationsCreateInvitationMutationHookResult = ReturnType<typeof useInvitationsCreateInvitationMutation>;
export type InvitationsCreateInvitationMutationResult = Apollo.MutationResult<InvitationsCreateInvitationMutation>;
export type InvitationsCreateInvitationMutationOptions = Apollo.BaseMutationOptions<InvitationsCreateInvitationMutation, InvitationsCreateInvitationMutationVariables>;
export const InvitationsAcceptInvitationDocument = gql`
    mutation InvitationsAcceptInvitation($input: AcceptInvitationInput!) {
  acceptInvitation(input: $input) {
    ...InvitationsInvitation
  }
}
    ${InvitationsInvitationFragmentDoc}`;
export type InvitationsAcceptInvitationMutationFn = Apollo.MutationFunction<InvitationsAcceptInvitationMutation, InvitationsAcceptInvitationMutationVariables>;

/**
 * __useInvitationsAcceptInvitationMutation__
 *
 * To run a mutation, you first call `useInvitationsAcceptInvitationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInvitationsAcceptInvitationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [invitationsAcceptInvitationMutation, { data, loading, error }] = useInvitationsAcceptInvitationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useInvitationsAcceptInvitationMutation(baseOptions?: Apollo.MutationHookOptions<InvitationsAcceptInvitationMutation, InvitationsAcceptInvitationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InvitationsAcceptInvitationMutation, InvitationsAcceptInvitationMutationVariables>(InvitationsAcceptInvitationDocument, options);
      }
export type InvitationsAcceptInvitationMutationHookResult = ReturnType<typeof useInvitationsAcceptInvitationMutation>;
export type InvitationsAcceptInvitationMutationResult = Apollo.MutationResult<InvitationsAcceptInvitationMutation>;
export type InvitationsAcceptInvitationMutationOptions = Apollo.BaseMutationOptions<InvitationsAcceptInvitationMutation, InvitationsAcceptInvitationMutationVariables>;
export const InvitationsResendInvitationDocument = gql`
    mutation InvitationsResendInvitation($input: ResendInvitationInput!) {
  resendInvitation(input: $input) {
    ...InvitationsInvitation
  }
}
    ${InvitationsInvitationFragmentDoc}`;
export type InvitationsResendInvitationMutationFn = Apollo.MutationFunction<InvitationsResendInvitationMutation, InvitationsResendInvitationMutationVariables>;

/**
 * __useInvitationsResendInvitationMutation__
 *
 * To run a mutation, you first call `useInvitationsResendInvitationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInvitationsResendInvitationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [invitationsResendInvitationMutation, { data, loading, error }] = useInvitationsResendInvitationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useInvitationsResendInvitationMutation(baseOptions?: Apollo.MutationHookOptions<InvitationsResendInvitationMutation, InvitationsResendInvitationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InvitationsResendInvitationMutation, InvitationsResendInvitationMutationVariables>(InvitationsResendInvitationDocument, options);
      }
export type InvitationsResendInvitationMutationHookResult = ReturnType<typeof useInvitationsResendInvitationMutation>;
export type InvitationsResendInvitationMutationResult = Apollo.MutationResult<InvitationsResendInvitationMutation>;
export type InvitationsResendInvitationMutationOptions = Apollo.BaseMutationOptions<InvitationsResendInvitationMutation, InvitationsResendInvitationMutationVariables>;
export const InvitationsDeleteInvitationDocument = gql`
    mutation InvitationsDeleteInvitation($input: DeleteInvitationInput!) {
  deleteInvitation(input: $input) {
    ...InvitationsInvitation
  }
}
    ${InvitationsInvitationFragmentDoc}`;
export type InvitationsDeleteInvitationMutationFn = Apollo.MutationFunction<InvitationsDeleteInvitationMutation, InvitationsDeleteInvitationMutationVariables>;

/**
 * __useInvitationsDeleteInvitationMutation__
 *
 * To run a mutation, you first call `useInvitationsDeleteInvitationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInvitationsDeleteInvitationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [invitationsDeleteInvitationMutation, { data, loading, error }] = useInvitationsDeleteInvitationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useInvitationsDeleteInvitationMutation(baseOptions?: Apollo.MutationHookOptions<InvitationsDeleteInvitationMutation, InvitationsDeleteInvitationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InvitationsDeleteInvitationMutation, InvitationsDeleteInvitationMutationVariables>(InvitationsDeleteInvitationDocument, options);
      }
export type InvitationsDeleteInvitationMutationHookResult = ReturnType<typeof useInvitationsDeleteInvitationMutation>;
export type InvitationsDeleteInvitationMutationResult = Apollo.MutationResult<InvitationsDeleteInvitationMutation>;
export type InvitationsDeleteInvitationMutationOptions = Apollo.BaseMutationOptions<InvitationsDeleteInvitationMutation, InvitationsDeleteInvitationMutationVariables>;
export const InvitationActivateUserDocument = gql`
    mutation InvitationActivateUser($input: ActivateOrganizationUserInput!) {
  activateUser(input: $input) {
    ...InvitationsOrganizationUser
  }
}
    ${InvitationsOrganizationUserFragmentDoc}`;
export type InvitationActivateUserMutationFn = Apollo.MutationFunction<InvitationActivateUserMutation, InvitationActivateUserMutationVariables>;

/**
 * __useInvitationActivateUserMutation__
 *
 * To run a mutation, you first call `useInvitationActivateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInvitationActivateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [invitationActivateUserMutation, { data, loading, error }] = useInvitationActivateUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useInvitationActivateUserMutation(baseOptions?: Apollo.MutationHookOptions<InvitationActivateUserMutation, InvitationActivateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InvitationActivateUserMutation, InvitationActivateUserMutationVariables>(InvitationActivateUserDocument, options);
      }
export type InvitationActivateUserMutationHookResult = ReturnType<typeof useInvitationActivateUserMutation>;
export type InvitationActivateUserMutationResult = Apollo.MutationResult<InvitationActivateUserMutation>;
export type InvitationActivateUserMutationOptions = Apollo.BaseMutationOptions<InvitationActivateUserMutation, InvitationActivateUserMutationVariables>;
export const InvitationDeactivateUserDocument = gql`
    mutation InvitationDeactivateUser($input: DeactivateOrganizationUserInput!) {
  deactivateUser(input: $input) {
    ...InvitationsOrganizationUser
  }
}
    ${InvitationsOrganizationUserFragmentDoc}`;
export type InvitationDeactivateUserMutationFn = Apollo.MutationFunction<InvitationDeactivateUserMutation, InvitationDeactivateUserMutationVariables>;

/**
 * __useInvitationDeactivateUserMutation__
 *
 * To run a mutation, you first call `useInvitationDeactivateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInvitationDeactivateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [invitationDeactivateUserMutation, { data, loading, error }] = useInvitationDeactivateUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useInvitationDeactivateUserMutation(baseOptions?: Apollo.MutationHookOptions<InvitationDeactivateUserMutation, InvitationDeactivateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InvitationDeactivateUserMutation, InvitationDeactivateUserMutationVariables>(InvitationDeactivateUserDocument, options);
      }
export type InvitationDeactivateUserMutationHookResult = ReturnType<typeof useInvitationDeactivateUserMutation>;
export type InvitationDeactivateUserMutationResult = Apollo.MutationResult<InvitationDeactivateUserMutation>;
export type InvitationDeactivateUserMutationOptions = Apollo.BaseMutationOptions<InvitationDeactivateUserMutation, InvitationDeactivateUserMutationVariables>;
export const InvitationRejectInvitationDocument = gql`
    mutation InvitationRejectInvitation($input: RejectInvitationInput!) {
  rejectInvitation(input: $input) {
    ...InvitationsInvitation
  }
}
    ${InvitationsInvitationFragmentDoc}`;
export type InvitationRejectInvitationMutationFn = Apollo.MutationFunction<InvitationRejectInvitationMutation, InvitationRejectInvitationMutationVariables>;

/**
 * __useInvitationRejectInvitationMutation__
 *
 * To run a mutation, you first call `useInvitationRejectInvitationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInvitationRejectInvitationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [invitationRejectInvitationMutation, { data, loading, error }] = useInvitationRejectInvitationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useInvitationRejectInvitationMutation(baseOptions?: Apollo.MutationHookOptions<InvitationRejectInvitationMutation, InvitationRejectInvitationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InvitationRejectInvitationMutation, InvitationRejectInvitationMutationVariables>(InvitationRejectInvitationDocument, options);
      }
export type InvitationRejectInvitationMutationHookResult = ReturnType<typeof useInvitationRejectInvitationMutation>;
export type InvitationRejectInvitationMutationResult = Apollo.MutationResult<InvitationRejectInvitationMutation>;
export type InvitationRejectInvitationMutationOptions = Apollo.BaseMutationOptions<InvitationRejectInvitationMutation, InvitationRejectInvitationMutationVariables>;
export const NotesGetNoteDocument = gql`
    query NotesGetNote($id: ID!) {
  getNote(id: $id) {
    ...NotesNote
  }
}
    ${NotesNoteFragmentDoc}`;

/**
 * __useNotesGetNoteQuery__
 *
 * To run a query within a React component, call `useNotesGetNoteQuery` and pass it any options that fit your needs.
 * When your component renders, `useNotesGetNoteQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNotesGetNoteQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useNotesGetNoteQuery(baseOptions: Apollo.QueryHookOptions<NotesGetNoteQuery, NotesGetNoteQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<NotesGetNoteQuery, NotesGetNoteQueryVariables>(NotesGetNoteDocument, options);
      }
export function useNotesGetNoteLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NotesGetNoteQuery, NotesGetNoteQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<NotesGetNoteQuery, NotesGetNoteQueryVariables>(NotesGetNoteDocument, options);
        }
export type NotesGetNoteQueryHookResult = ReturnType<typeof useNotesGetNoteQuery>;
export type NotesGetNoteLazyQueryHookResult = ReturnType<typeof useNotesGetNoteLazyQuery>;
export type NotesGetNoteQueryResult = Apollo.QueryResult<NotesGetNoteQuery, NotesGetNoteQueryVariables>;
export const NotesListNotesByPlayerIdDocument = gql`
    query NotesListNotesByPlayerId($playerId: ID!) {
  listNotesByPlayerId(playerId: $playerId) {
    edges {
      cursor
      node {
        ...NotesNote
      }
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}
    ${NotesNoteFragmentDoc}`;

/**
 * __useNotesListNotesByPlayerIdQuery__
 *
 * To run a query within a React component, call `useNotesListNotesByPlayerIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useNotesListNotesByPlayerIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNotesListNotesByPlayerIdQuery({
 *   variables: {
 *      playerId: // value for 'playerId'
 *   },
 * });
 */
export function useNotesListNotesByPlayerIdQuery(baseOptions: Apollo.QueryHookOptions<NotesListNotesByPlayerIdQuery, NotesListNotesByPlayerIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<NotesListNotesByPlayerIdQuery, NotesListNotesByPlayerIdQueryVariables>(NotesListNotesByPlayerIdDocument, options);
      }
export function useNotesListNotesByPlayerIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NotesListNotesByPlayerIdQuery, NotesListNotesByPlayerIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<NotesListNotesByPlayerIdQuery, NotesListNotesByPlayerIdQueryVariables>(NotesListNotesByPlayerIdDocument, options);
        }
export type NotesListNotesByPlayerIdQueryHookResult = ReturnType<typeof useNotesListNotesByPlayerIdQuery>;
export type NotesListNotesByPlayerIdLazyQueryHookResult = ReturnType<typeof useNotesListNotesByPlayerIdLazyQuery>;
export type NotesListNotesByPlayerIdQueryResult = Apollo.QueryResult<NotesListNotesByPlayerIdQuery, NotesListNotesByPlayerIdQueryVariables>;
export const NotesCreateNoteDocument = gql`
    mutation NotesCreateNote($input: CreateNoteInput!) {
  createNote(input: $input) {
    ...NotesNote
  }
}
    ${NotesNoteFragmentDoc}`;
export type NotesCreateNoteMutationFn = Apollo.MutationFunction<NotesCreateNoteMutation, NotesCreateNoteMutationVariables>;

/**
 * __useNotesCreateNoteMutation__
 *
 * To run a mutation, you first call `useNotesCreateNoteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useNotesCreateNoteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [notesCreateNoteMutation, { data, loading, error }] = useNotesCreateNoteMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useNotesCreateNoteMutation(baseOptions?: Apollo.MutationHookOptions<NotesCreateNoteMutation, NotesCreateNoteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<NotesCreateNoteMutation, NotesCreateNoteMutationVariables>(NotesCreateNoteDocument, options);
      }
export type NotesCreateNoteMutationHookResult = ReturnType<typeof useNotesCreateNoteMutation>;
export type NotesCreateNoteMutationResult = Apollo.MutationResult<NotesCreateNoteMutation>;
export type NotesCreateNoteMutationOptions = Apollo.BaseMutationOptions<NotesCreateNoteMutation, NotesCreateNoteMutationVariables>;
export const NotesUpdateNoteDocument = gql`
    mutation NotesUpdateNote($input: UpdateNoteInput!) {
  updateNote(input: $input) {
    ...NotesNote
  }
}
    ${NotesNoteFragmentDoc}`;
export type NotesUpdateNoteMutationFn = Apollo.MutationFunction<NotesUpdateNoteMutation, NotesUpdateNoteMutationVariables>;

/**
 * __useNotesUpdateNoteMutation__
 *
 * To run a mutation, you first call `useNotesUpdateNoteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useNotesUpdateNoteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [notesUpdateNoteMutation, { data, loading, error }] = useNotesUpdateNoteMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useNotesUpdateNoteMutation(baseOptions?: Apollo.MutationHookOptions<NotesUpdateNoteMutation, NotesUpdateNoteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<NotesUpdateNoteMutation, NotesUpdateNoteMutationVariables>(NotesUpdateNoteDocument, options);
      }
export type NotesUpdateNoteMutationHookResult = ReturnType<typeof useNotesUpdateNoteMutation>;
export type NotesUpdateNoteMutationResult = Apollo.MutationResult<NotesUpdateNoteMutation>;
export type NotesUpdateNoteMutationOptions = Apollo.BaseMutationOptions<NotesUpdateNoteMutation, NotesUpdateNoteMutationVariables>;
export const NotesDeleteNoteDocument = gql`
    mutation NotesDeleteNote($input: DeleteNoteInput!) {
  deleteNote(input: $input) {
    ...NotesNote
  }
}
    ${NotesNoteFragmentDoc}`;
export type NotesDeleteNoteMutationFn = Apollo.MutationFunction<NotesDeleteNoteMutation, NotesDeleteNoteMutationVariables>;

/**
 * __useNotesDeleteNoteMutation__
 *
 * To run a mutation, you first call `useNotesDeleteNoteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useNotesDeleteNoteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [notesDeleteNoteMutation, { data, loading, error }] = useNotesDeleteNoteMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useNotesDeleteNoteMutation(baseOptions?: Apollo.MutationHookOptions<NotesDeleteNoteMutation, NotesDeleteNoteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<NotesDeleteNoteMutation, NotesDeleteNoteMutationVariables>(NotesDeleteNoteDocument, options);
      }
export type NotesDeleteNoteMutationHookResult = ReturnType<typeof useNotesDeleteNoteMutation>;
export type NotesDeleteNoteMutationResult = Apollo.MutationResult<NotesDeleteNoteMutation>;
export type NotesDeleteNoteMutationOptions = Apollo.BaseMutationOptions<NotesDeleteNoteMutation, NotesDeleteNoteMutationVariables>;
export const PlayerDetailGetPlayerDocument = gql`
    query PlayerDetailGetPlayer($id: ID!) {
  getPlayer(id: $id) {
    ...PlayerDetailPlayer
  }
}
    ${PlayerDetailPlayerFragmentDoc}`;

/**
 * __usePlayerDetailGetPlayerQuery__
 *
 * To run a query within a React component, call `usePlayerDetailGetPlayerQuery` and pass it any options that fit your needs.
 * When your component renders, `usePlayerDetailGetPlayerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePlayerDetailGetPlayerQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function usePlayerDetailGetPlayerQuery(baseOptions: Apollo.QueryHookOptions<PlayerDetailGetPlayerQuery, PlayerDetailGetPlayerQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PlayerDetailGetPlayerQuery, PlayerDetailGetPlayerQueryVariables>(PlayerDetailGetPlayerDocument, options);
      }
export function usePlayerDetailGetPlayerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PlayerDetailGetPlayerQuery, PlayerDetailGetPlayerQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PlayerDetailGetPlayerQuery, PlayerDetailGetPlayerQueryVariables>(PlayerDetailGetPlayerDocument, options);
        }
export type PlayerDetailGetPlayerQueryHookResult = ReturnType<typeof usePlayerDetailGetPlayerQuery>;
export type PlayerDetailGetPlayerLazyQueryHookResult = ReturnType<typeof usePlayerDetailGetPlayerLazyQuery>;
export type PlayerDetailGetPlayerQueryResult = Apollo.QueryResult<PlayerDetailGetPlayerQuery, PlayerDetailGetPlayerQueryVariables>;
export const PlayerDetailGetPlayerBioDataByPlayerIdDocument = gql`
    query PlayerDetailGetPlayerBioDataByPlayerId($playerId: ID!) {
  getPlayerBioDataByPlayerId(playerId: $playerId) {
    ...PlayerDetailPlayerBioData
  }
}
    ${PlayerDetailPlayerBioDataFragmentDoc}`;

/**
 * __usePlayerDetailGetPlayerBioDataByPlayerIdQuery__
 *
 * To run a query within a React component, call `usePlayerDetailGetPlayerBioDataByPlayerIdQuery` and pass it any options that fit your needs.
 * When your component renders, `usePlayerDetailGetPlayerBioDataByPlayerIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePlayerDetailGetPlayerBioDataByPlayerIdQuery({
 *   variables: {
 *      playerId: // value for 'playerId'
 *   },
 * });
 */
export function usePlayerDetailGetPlayerBioDataByPlayerIdQuery(baseOptions: Apollo.QueryHookOptions<PlayerDetailGetPlayerBioDataByPlayerIdQuery, PlayerDetailGetPlayerBioDataByPlayerIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PlayerDetailGetPlayerBioDataByPlayerIdQuery, PlayerDetailGetPlayerBioDataByPlayerIdQueryVariables>(PlayerDetailGetPlayerBioDataByPlayerIdDocument, options);
      }
export function usePlayerDetailGetPlayerBioDataByPlayerIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PlayerDetailGetPlayerBioDataByPlayerIdQuery, PlayerDetailGetPlayerBioDataByPlayerIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PlayerDetailGetPlayerBioDataByPlayerIdQuery, PlayerDetailGetPlayerBioDataByPlayerIdQueryVariables>(PlayerDetailGetPlayerBioDataByPlayerIdDocument, options);
        }
export type PlayerDetailGetPlayerBioDataByPlayerIdQueryHookResult = ReturnType<typeof usePlayerDetailGetPlayerBioDataByPlayerIdQuery>;
export type PlayerDetailGetPlayerBioDataByPlayerIdLazyQueryHookResult = ReturnType<typeof usePlayerDetailGetPlayerBioDataByPlayerIdLazyQuery>;
export type PlayerDetailGetPlayerBioDataByPlayerIdQueryResult = Apollo.QueryResult<PlayerDetailGetPlayerBioDataByPlayerIdQuery, PlayerDetailGetPlayerBioDataByPlayerIdQueryVariables>;
export const PlayerDetailListPlayerSeasonWeightedAvgMetricsDocument = gql`
    query PlayerDetailListPlayerSeasonWeightedAvgMetrics($playerId: ID!) {
  listPlayerSeasonWeightedAvgMetricsByPlayerId(playerId: $playerId) {
    ...PlayerDetailPlayerSeasonWeightedAvgMetrics
  }
}
    ${PlayerDetailPlayerSeasonWeightedAvgMetricsFragmentDoc}`;

/**
 * __usePlayerDetailListPlayerSeasonWeightedAvgMetricsQuery__
 *
 * To run a query within a React component, call `usePlayerDetailListPlayerSeasonWeightedAvgMetricsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePlayerDetailListPlayerSeasonWeightedAvgMetricsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePlayerDetailListPlayerSeasonWeightedAvgMetricsQuery({
 *   variables: {
 *      playerId: // value for 'playerId'
 *   },
 * });
 */
export function usePlayerDetailListPlayerSeasonWeightedAvgMetricsQuery(baseOptions: Apollo.QueryHookOptions<PlayerDetailListPlayerSeasonWeightedAvgMetricsQuery, PlayerDetailListPlayerSeasonWeightedAvgMetricsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PlayerDetailListPlayerSeasonWeightedAvgMetricsQuery, PlayerDetailListPlayerSeasonWeightedAvgMetricsQueryVariables>(PlayerDetailListPlayerSeasonWeightedAvgMetricsDocument, options);
      }
export function usePlayerDetailListPlayerSeasonWeightedAvgMetricsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PlayerDetailListPlayerSeasonWeightedAvgMetricsQuery, PlayerDetailListPlayerSeasonWeightedAvgMetricsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PlayerDetailListPlayerSeasonWeightedAvgMetricsQuery, PlayerDetailListPlayerSeasonWeightedAvgMetricsQueryVariables>(PlayerDetailListPlayerSeasonWeightedAvgMetricsDocument, options);
        }
export type PlayerDetailListPlayerSeasonWeightedAvgMetricsQueryHookResult = ReturnType<typeof usePlayerDetailListPlayerSeasonWeightedAvgMetricsQuery>;
export type PlayerDetailListPlayerSeasonWeightedAvgMetricsLazyQueryHookResult = ReturnType<typeof usePlayerDetailListPlayerSeasonWeightedAvgMetricsLazyQuery>;
export type PlayerDetailListPlayerSeasonWeightedAvgMetricsQueryResult = Apollo.QueryResult<PlayerDetailListPlayerSeasonWeightedAvgMetricsQuery, PlayerDetailListPlayerSeasonWeightedAvgMetricsQueryVariables>;
export const PlayerDetailListPlayersByTeamIdsAndPositionIdsDocument = gql`
    query PlayerDetailListPlayersByTeamIdsAndPositionIds($first: Int, $after: String, $teamIds: [ID!]!, $positionIds: [ID!]!) {
  listPlayersByTeamIdsAndPositionIds(
    first: $first
    after: $after
    teamIds: $teamIds
    positionIds: $positionIds
  ) {
    ...PlayerDetailChartPlayerConection
  }
}
    ${PlayerDetailChartPlayerConectionFragmentDoc}`;

/**
 * __usePlayerDetailListPlayersByTeamIdsAndPositionIdsQuery__
 *
 * To run a query within a React component, call `usePlayerDetailListPlayersByTeamIdsAndPositionIdsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePlayerDetailListPlayersByTeamIdsAndPositionIdsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePlayerDetailListPlayersByTeamIdsAndPositionIdsQuery({
 *   variables: {
 *      first: // value for 'first'
 *      after: // value for 'after'
 *      teamIds: // value for 'teamIds'
 *      positionIds: // value for 'positionIds'
 *   },
 * });
 */
export function usePlayerDetailListPlayersByTeamIdsAndPositionIdsQuery(baseOptions: Apollo.QueryHookOptions<PlayerDetailListPlayersByTeamIdsAndPositionIdsQuery, PlayerDetailListPlayersByTeamIdsAndPositionIdsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PlayerDetailListPlayersByTeamIdsAndPositionIdsQuery, PlayerDetailListPlayersByTeamIdsAndPositionIdsQueryVariables>(PlayerDetailListPlayersByTeamIdsAndPositionIdsDocument, options);
      }
export function usePlayerDetailListPlayersByTeamIdsAndPositionIdsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PlayerDetailListPlayersByTeamIdsAndPositionIdsQuery, PlayerDetailListPlayersByTeamIdsAndPositionIdsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PlayerDetailListPlayersByTeamIdsAndPositionIdsQuery, PlayerDetailListPlayersByTeamIdsAndPositionIdsQueryVariables>(PlayerDetailListPlayersByTeamIdsAndPositionIdsDocument, options);
        }
export type PlayerDetailListPlayersByTeamIdsAndPositionIdsQueryHookResult = ReturnType<typeof usePlayerDetailListPlayersByTeamIdsAndPositionIdsQuery>;
export type PlayerDetailListPlayersByTeamIdsAndPositionIdsLazyQueryHookResult = ReturnType<typeof usePlayerDetailListPlayersByTeamIdsAndPositionIdsLazyQuery>;
export type PlayerDetailListPlayersByTeamIdsAndPositionIdsQueryResult = Apollo.QueryResult<PlayerDetailListPlayersByTeamIdsAndPositionIdsQuery, PlayerDetailListPlayersByTeamIdsAndPositionIdsQueryVariables>;
export const PlayerDetailGetPlayerDataSummaryBylayerIdDocument = gql`
    query PlayerDetailGetPlayerDataSummaryBylayerId($playerId: ID!) {
  getPlayerDataSummaryByPlayerId(playerId: $playerId) {
    ...PlayerDetailPlayerDataSummary
  }
}
    ${PlayerDetailPlayerDataSummaryFragmentDoc}`;

/**
 * __usePlayerDetailGetPlayerDataSummaryBylayerIdQuery__
 *
 * To run a query within a React component, call `usePlayerDetailGetPlayerDataSummaryBylayerIdQuery` and pass it any options that fit your needs.
 * When your component renders, `usePlayerDetailGetPlayerDataSummaryBylayerIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePlayerDetailGetPlayerDataSummaryBylayerIdQuery({
 *   variables: {
 *      playerId: // value for 'playerId'
 *   },
 * });
 */
export function usePlayerDetailGetPlayerDataSummaryBylayerIdQuery(baseOptions: Apollo.QueryHookOptions<PlayerDetailGetPlayerDataSummaryBylayerIdQuery, PlayerDetailGetPlayerDataSummaryBylayerIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PlayerDetailGetPlayerDataSummaryBylayerIdQuery, PlayerDetailGetPlayerDataSummaryBylayerIdQueryVariables>(PlayerDetailGetPlayerDataSummaryBylayerIdDocument, options);
      }
export function usePlayerDetailGetPlayerDataSummaryBylayerIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PlayerDetailGetPlayerDataSummaryBylayerIdQuery, PlayerDetailGetPlayerDataSummaryBylayerIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PlayerDetailGetPlayerDataSummaryBylayerIdQuery, PlayerDetailGetPlayerDataSummaryBylayerIdQueryVariables>(PlayerDetailGetPlayerDataSummaryBylayerIdDocument, options);
        }
export type PlayerDetailGetPlayerDataSummaryBylayerIdQueryHookResult = ReturnType<typeof usePlayerDetailGetPlayerDataSummaryBylayerIdQuery>;
export type PlayerDetailGetPlayerDataSummaryBylayerIdLazyQueryHookResult = ReturnType<typeof usePlayerDetailGetPlayerDataSummaryBylayerIdLazyQuery>;
export type PlayerDetailGetPlayerDataSummaryBylayerIdQueryResult = Apollo.QueryResult<PlayerDetailGetPlayerDataSummaryBylayerIdQuery, PlayerDetailGetPlayerDataSummaryBylayerIdQueryVariables>;
export const PlayerDetailListOpenAiMessagesByThreadIdDocument = gql`
    query PlayerDetailListOpenAiMessagesByThreadId($threadId: ID!, $first: Int, $after: String) {
  listOpenAiMessagesByThreadId(threadId: $threadId, first: $first, after: $after) {
    ...PlayerDetailOpenAiMessageConnection
  }
}
    ${PlayerDetailOpenAiMessageConnectionFragmentDoc}`;

/**
 * __usePlayerDetailListOpenAiMessagesByThreadIdQuery__
 *
 * To run a query within a React component, call `usePlayerDetailListOpenAiMessagesByThreadIdQuery` and pass it any options that fit your needs.
 * When your component renders, `usePlayerDetailListOpenAiMessagesByThreadIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePlayerDetailListOpenAiMessagesByThreadIdQuery({
 *   variables: {
 *      threadId: // value for 'threadId'
 *      first: // value for 'first'
 *      after: // value for 'after'
 *   },
 * });
 */
export function usePlayerDetailListOpenAiMessagesByThreadIdQuery(baseOptions: Apollo.QueryHookOptions<PlayerDetailListOpenAiMessagesByThreadIdQuery, PlayerDetailListOpenAiMessagesByThreadIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PlayerDetailListOpenAiMessagesByThreadIdQuery, PlayerDetailListOpenAiMessagesByThreadIdQueryVariables>(PlayerDetailListOpenAiMessagesByThreadIdDocument, options);
      }
export function usePlayerDetailListOpenAiMessagesByThreadIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PlayerDetailListOpenAiMessagesByThreadIdQuery, PlayerDetailListOpenAiMessagesByThreadIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PlayerDetailListOpenAiMessagesByThreadIdQuery, PlayerDetailListOpenAiMessagesByThreadIdQueryVariables>(PlayerDetailListOpenAiMessagesByThreadIdDocument, options);
        }
export type PlayerDetailListOpenAiMessagesByThreadIdQueryHookResult = ReturnType<typeof usePlayerDetailListOpenAiMessagesByThreadIdQuery>;
export type PlayerDetailListOpenAiMessagesByThreadIdLazyQueryHookResult = ReturnType<typeof usePlayerDetailListOpenAiMessagesByThreadIdLazyQuery>;
export type PlayerDetailListOpenAiMessagesByThreadIdQueryResult = Apollo.QueryResult<PlayerDetailListOpenAiMessagesByThreadIdQuery, PlayerDetailListOpenAiMessagesByThreadIdQueryVariables>;
export const PlayerDetailGetSignedUrlForOpenAiFileIdDocument = gql`
    query PlayerDetailGetSignedUrlForOpenAiFileId($fileId: String!, $playerId: ID, $playerGGID: ID) {
  getSignedUrlForOpenAiFileId(
    fileId: $fileId
    playerId: $playerId
    playerGGID: $playerGGID
  )
}
    `;

/**
 * __usePlayerDetailGetSignedUrlForOpenAiFileIdQuery__
 *
 * To run a query within a React component, call `usePlayerDetailGetSignedUrlForOpenAiFileIdQuery` and pass it any options that fit your needs.
 * When your component renders, `usePlayerDetailGetSignedUrlForOpenAiFileIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePlayerDetailGetSignedUrlForOpenAiFileIdQuery({
 *   variables: {
 *      fileId: // value for 'fileId'
 *      playerId: // value for 'playerId'
 *      playerGGID: // value for 'playerGGID'
 *   },
 * });
 */
export function usePlayerDetailGetSignedUrlForOpenAiFileIdQuery(baseOptions: Apollo.QueryHookOptions<PlayerDetailGetSignedUrlForOpenAiFileIdQuery, PlayerDetailGetSignedUrlForOpenAiFileIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PlayerDetailGetSignedUrlForOpenAiFileIdQuery, PlayerDetailGetSignedUrlForOpenAiFileIdQueryVariables>(PlayerDetailGetSignedUrlForOpenAiFileIdDocument, options);
      }
export function usePlayerDetailGetSignedUrlForOpenAiFileIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PlayerDetailGetSignedUrlForOpenAiFileIdQuery, PlayerDetailGetSignedUrlForOpenAiFileIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PlayerDetailGetSignedUrlForOpenAiFileIdQuery, PlayerDetailGetSignedUrlForOpenAiFileIdQueryVariables>(PlayerDetailGetSignedUrlForOpenAiFileIdDocument, options);
        }
export type PlayerDetailGetSignedUrlForOpenAiFileIdQueryHookResult = ReturnType<typeof usePlayerDetailGetSignedUrlForOpenAiFileIdQuery>;
export type PlayerDetailGetSignedUrlForOpenAiFileIdLazyQueryHookResult = ReturnType<typeof usePlayerDetailGetSignedUrlForOpenAiFileIdLazyQuery>;
export type PlayerDetailGetSignedUrlForOpenAiFileIdQueryResult = Apollo.QueryResult<PlayerDetailGetSignedUrlForOpenAiFileIdQuery, PlayerDetailGetSignedUrlForOpenAiFileIdQueryVariables>;
export const PlayerSearchFilterPlayersDocument = gql`
    query PlayerSearchFilterPlayers($filter: PlayerAdvancedFilterInput!, $first: Int, $after: String, $sortBy: SortField, $sortOrder: OrderByDirection) {
  filterPlayers(
    filter: $filter
    first: $first
    after: $after
    sortBy: $sortBy
    sortOrder: $sortOrder
  ) {
    ...PlayerSearchPlayerConnection
  }
}
    ${PlayerSearchPlayerConnectionFragmentDoc}`;

/**
 * __usePlayerSearchFilterPlayersQuery__
 *
 * To run a query within a React component, call `usePlayerSearchFilterPlayersQuery` and pass it any options that fit your needs.
 * When your component renders, `usePlayerSearchFilterPlayersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePlayerSearchFilterPlayersQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      first: // value for 'first'
 *      after: // value for 'after'
 *      sortBy: // value for 'sortBy'
 *      sortOrder: // value for 'sortOrder'
 *   },
 * });
 */
export function usePlayerSearchFilterPlayersQuery(baseOptions: Apollo.QueryHookOptions<PlayerSearchFilterPlayersQuery, PlayerSearchFilterPlayersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PlayerSearchFilterPlayersQuery, PlayerSearchFilterPlayersQueryVariables>(PlayerSearchFilterPlayersDocument, options);
      }
export function usePlayerSearchFilterPlayersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PlayerSearchFilterPlayersQuery, PlayerSearchFilterPlayersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PlayerSearchFilterPlayersQuery, PlayerSearchFilterPlayersQueryVariables>(PlayerSearchFilterPlayersDocument, options);
        }
export type PlayerSearchFilterPlayersQueryHookResult = ReturnType<typeof usePlayerSearchFilterPlayersQuery>;
export type PlayerSearchFilterPlayersLazyQueryHookResult = ReturnType<typeof usePlayerSearchFilterPlayersLazyQuery>;
export type PlayerSearchFilterPlayersQueryResult = Apollo.QueryResult<PlayerSearchFilterPlayersQuery, PlayerSearchFilterPlayersQueryVariables>;
export const PlayerSearchSearchPlayersDocument = gql`
    query PlayerSearchSearchPlayers($query: String!, $first: Int, $after: String, $sortBy: SortField, $sortOrder: OrderByDirection) {
  searchPlayers(
    query: $query
    first: $first
    after: $after
    sortBy: $sortBy
    sortOrder: $sortOrder
  ) {
    ...PlayerSearchPlayerConnection
  }
}
    ${PlayerSearchPlayerConnectionFragmentDoc}`;

/**
 * __usePlayerSearchSearchPlayersQuery__
 *
 * To run a query within a React component, call `usePlayerSearchSearchPlayersQuery` and pass it any options that fit your needs.
 * When your component renders, `usePlayerSearchSearchPlayersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePlayerSearchSearchPlayersQuery({
 *   variables: {
 *      query: // value for 'query'
 *      first: // value for 'first'
 *      after: // value for 'after'
 *      sortBy: // value for 'sortBy'
 *      sortOrder: // value for 'sortOrder'
 *   },
 * });
 */
export function usePlayerSearchSearchPlayersQuery(baseOptions: Apollo.QueryHookOptions<PlayerSearchSearchPlayersQuery, PlayerSearchSearchPlayersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PlayerSearchSearchPlayersQuery, PlayerSearchSearchPlayersQueryVariables>(PlayerSearchSearchPlayersDocument, options);
      }
export function usePlayerSearchSearchPlayersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PlayerSearchSearchPlayersQuery, PlayerSearchSearchPlayersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PlayerSearchSearchPlayersQuery, PlayerSearchSearchPlayersQueryVariables>(PlayerSearchSearchPlayersDocument, options);
        }
export type PlayerSearchSearchPlayersQueryHookResult = ReturnType<typeof usePlayerSearchSearchPlayersQuery>;
export type PlayerSearchSearchPlayersLazyQueryHookResult = ReturnType<typeof usePlayerSearchSearchPlayersLazyQuery>;
export type PlayerSearchSearchPlayersQueryResult = Apollo.QueryResult<PlayerSearchSearchPlayersQuery, PlayerSearchSearchPlayersQueryVariables>;
export const PlayerSearchListRoleArchetypesDocument = gql`
    query PlayerSearchListRoleArchetypes {
  listRoleArchetypes
}
    `;

/**
 * __usePlayerSearchListRoleArchetypesQuery__
 *
 * To run a query within a React component, call `usePlayerSearchListRoleArchetypesQuery` and pass it any options that fit your needs.
 * When your component renders, `usePlayerSearchListRoleArchetypesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePlayerSearchListRoleArchetypesQuery({
 *   variables: {
 *   },
 * });
 */
export function usePlayerSearchListRoleArchetypesQuery(baseOptions?: Apollo.QueryHookOptions<PlayerSearchListRoleArchetypesQuery, PlayerSearchListRoleArchetypesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PlayerSearchListRoleArchetypesQuery, PlayerSearchListRoleArchetypesQueryVariables>(PlayerSearchListRoleArchetypesDocument, options);
      }
export function usePlayerSearchListRoleArchetypesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PlayerSearchListRoleArchetypesQuery, PlayerSearchListRoleArchetypesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PlayerSearchListRoleArchetypesQuery, PlayerSearchListRoleArchetypesQueryVariables>(PlayerSearchListRoleArchetypesDocument, options);
        }
export type PlayerSearchListRoleArchetypesQueryHookResult = ReturnType<typeof usePlayerSearchListRoleArchetypesQuery>;
export type PlayerSearchListRoleArchetypesLazyQueryHookResult = ReturnType<typeof usePlayerSearchListRoleArchetypesLazyQuery>;
export type PlayerSearchListRoleArchetypesQueryResult = Apollo.QueryResult<PlayerSearchListRoleArchetypesQuery, PlayerSearchListRoleArchetypesQueryVariables>;
export const PlayerSearchAddPlayerToWatchlistDocument = gql`
    mutation PlayerSearchAddPlayerToWatchlist($input: AddPlayerToWatchlistInput!) {
  addPlayerToWatchlist(input: $input) {
    ...PlayerSearchWatchlist
  }
}
    ${PlayerSearchWatchlistFragmentDoc}`;
export type PlayerSearchAddPlayerToWatchlistMutationFn = Apollo.MutationFunction<PlayerSearchAddPlayerToWatchlistMutation, PlayerSearchAddPlayerToWatchlistMutationVariables>;

/**
 * __usePlayerSearchAddPlayerToWatchlistMutation__
 *
 * To run a mutation, you first call `usePlayerSearchAddPlayerToWatchlistMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePlayerSearchAddPlayerToWatchlistMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [playerSearchAddPlayerToWatchlistMutation, { data, loading, error }] = usePlayerSearchAddPlayerToWatchlistMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePlayerSearchAddPlayerToWatchlistMutation(baseOptions?: Apollo.MutationHookOptions<PlayerSearchAddPlayerToWatchlistMutation, PlayerSearchAddPlayerToWatchlistMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PlayerSearchAddPlayerToWatchlistMutation, PlayerSearchAddPlayerToWatchlistMutationVariables>(PlayerSearchAddPlayerToWatchlistDocument, options);
      }
export type PlayerSearchAddPlayerToWatchlistMutationHookResult = ReturnType<typeof usePlayerSearchAddPlayerToWatchlistMutation>;
export type PlayerSearchAddPlayerToWatchlistMutationResult = Apollo.MutationResult<PlayerSearchAddPlayerToWatchlistMutation>;
export type PlayerSearchAddPlayerToWatchlistMutationOptions = Apollo.BaseMutationOptions<PlayerSearchAddPlayerToWatchlistMutation, PlayerSearchAddPlayerToWatchlistMutationVariables>;
export const PlayerSearchRemovePlayerFromWatchlistDocument = gql`
    mutation PlayerSearchRemovePlayerFromWatchlist($input: RemovePlayerFromWatchlistInput!) {
  removePlayerFromWatchlist(input: $input) {
    ...PlayerSearchWatchlist
  }
}
    ${PlayerSearchWatchlistFragmentDoc}`;
export type PlayerSearchRemovePlayerFromWatchlistMutationFn = Apollo.MutationFunction<PlayerSearchRemovePlayerFromWatchlistMutation, PlayerSearchRemovePlayerFromWatchlistMutationVariables>;

/**
 * __usePlayerSearchRemovePlayerFromWatchlistMutation__
 *
 * To run a mutation, you first call `usePlayerSearchRemovePlayerFromWatchlistMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePlayerSearchRemovePlayerFromWatchlistMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [playerSearchRemovePlayerFromWatchlistMutation, { data, loading, error }] = usePlayerSearchRemovePlayerFromWatchlistMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePlayerSearchRemovePlayerFromWatchlistMutation(baseOptions?: Apollo.MutationHookOptions<PlayerSearchRemovePlayerFromWatchlistMutation, PlayerSearchRemovePlayerFromWatchlistMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PlayerSearchRemovePlayerFromWatchlistMutation, PlayerSearchRemovePlayerFromWatchlistMutationVariables>(PlayerSearchRemovePlayerFromWatchlistDocument, options);
      }
export type PlayerSearchRemovePlayerFromWatchlistMutationHookResult = ReturnType<typeof usePlayerSearchRemovePlayerFromWatchlistMutation>;
export type PlayerSearchRemovePlayerFromWatchlistMutationResult = Apollo.MutationResult<PlayerSearchRemovePlayerFromWatchlistMutation>;
export type PlayerSearchRemovePlayerFromWatchlistMutationOptions = Apollo.BaseMutationOptions<PlayerSearchRemovePlayerFromWatchlistMutation, PlayerSearchRemovePlayerFromWatchlistMutationVariables>;
export const PlayerSearchCreateWatchlistDocument = gql`
    mutation PlayerSearchCreateWatchlist($input: CreateWatchlistInput!) {
  createWatchlist(input: $input) {
    ...PlayerSearchWatchlist
  }
}
    ${PlayerSearchWatchlistFragmentDoc}`;
export type PlayerSearchCreateWatchlistMutationFn = Apollo.MutationFunction<PlayerSearchCreateWatchlistMutation, PlayerSearchCreateWatchlistMutationVariables>;

/**
 * __usePlayerSearchCreateWatchlistMutation__
 *
 * To run a mutation, you first call `usePlayerSearchCreateWatchlistMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePlayerSearchCreateWatchlistMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [playerSearchCreateWatchlistMutation, { data, loading, error }] = usePlayerSearchCreateWatchlistMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePlayerSearchCreateWatchlistMutation(baseOptions?: Apollo.MutationHookOptions<PlayerSearchCreateWatchlistMutation, PlayerSearchCreateWatchlistMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PlayerSearchCreateWatchlistMutation, PlayerSearchCreateWatchlistMutationVariables>(PlayerSearchCreateWatchlistDocument, options);
      }
export type PlayerSearchCreateWatchlistMutationHookResult = ReturnType<typeof usePlayerSearchCreateWatchlistMutation>;
export type PlayerSearchCreateWatchlistMutationResult = Apollo.MutationResult<PlayerSearchCreateWatchlistMutation>;
export type PlayerSearchCreateWatchlistMutationOptions = Apollo.BaseMutationOptions<PlayerSearchCreateWatchlistMutation, PlayerSearchCreateWatchlistMutationVariables>;
export const PushNotificationsCreateDeviceDocument = gql`
    mutation PushNotificationsCreateDevice($input: CreateDeviceInput!) {
  createDevice(input: $input) {
    id
  }
}
    `;
export type PushNotificationsCreateDeviceMutationFn = Apollo.MutationFunction<PushNotificationsCreateDeviceMutation, PushNotificationsCreateDeviceMutationVariables>;

/**
 * __usePushNotificationsCreateDeviceMutation__
 *
 * To run a mutation, you first call `usePushNotificationsCreateDeviceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePushNotificationsCreateDeviceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [pushNotificationsCreateDeviceMutation, { data, loading, error }] = usePushNotificationsCreateDeviceMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePushNotificationsCreateDeviceMutation(baseOptions?: Apollo.MutationHookOptions<PushNotificationsCreateDeviceMutation, PushNotificationsCreateDeviceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PushNotificationsCreateDeviceMutation, PushNotificationsCreateDeviceMutationVariables>(PushNotificationsCreateDeviceDocument, options);
      }
export type PushNotificationsCreateDeviceMutationHookResult = ReturnType<typeof usePushNotificationsCreateDeviceMutation>;
export type PushNotificationsCreateDeviceMutationResult = Apollo.MutationResult<PushNotificationsCreateDeviceMutation>;
export type PushNotificationsCreateDeviceMutationOptions = Apollo.BaseMutationOptions<PushNotificationsCreateDeviceMutation, PushNotificationsCreateDeviceMutationVariables>;
export const RecommendationsListPlayerRecommendationsDocument = gql`
    query RecommendationsListPlayerRecommendations($recommendationType: String!) {
  listPlayerRecommendations(recommendationType: $recommendationType) {
    ...RecommendationsPlayerRecommendationResult
  }
}
    ${RecommendationsPlayerRecommendationResultFragmentDoc}`;

/**
 * __useRecommendationsListPlayerRecommendationsQuery__
 *
 * To run a query within a React component, call `useRecommendationsListPlayerRecommendationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useRecommendationsListPlayerRecommendationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRecommendationsListPlayerRecommendationsQuery({
 *   variables: {
 *      recommendationType: // value for 'recommendationType'
 *   },
 * });
 */
export function useRecommendationsListPlayerRecommendationsQuery(baseOptions: Apollo.QueryHookOptions<RecommendationsListPlayerRecommendationsQuery, RecommendationsListPlayerRecommendationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RecommendationsListPlayerRecommendationsQuery, RecommendationsListPlayerRecommendationsQueryVariables>(RecommendationsListPlayerRecommendationsDocument, options);
      }
export function useRecommendationsListPlayerRecommendationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RecommendationsListPlayerRecommendationsQuery, RecommendationsListPlayerRecommendationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RecommendationsListPlayerRecommendationsQuery, RecommendationsListPlayerRecommendationsQueryVariables>(RecommendationsListPlayerRecommendationsDocument, options);
        }
export type RecommendationsListPlayerRecommendationsQueryHookResult = ReturnType<typeof useRecommendationsListPlayerRecommendationsQuery>;
export type RecommendationsListPlayerRecommendationsLazyQueryHookResult = ReturnType<typeof useRecommendationsListPlayerRecommendationsLazyQuery>;
export type RecommendationsListPlayerRecommendationsQueryResult = Apollo.QueryResult<RecommendationsListPlayerRecommendationsQuery, RecommendationsListPlayerRecommendationsQueryVariables>;
export const RecommendationsRemovePlayerFromRecommendationsDocument = gql`
    mutation RecommendationsRemovePlayerFromRecommendations($playerId: ID!) {
  removePlayerFromRecommendations(playerId: $playerId) {
    ...RecommendationsPlayer
  }
}
    ${RecommendationsPlayerFragmentDoc}`;
export type RecommendationsRemovePlayerFromRecommendationsMutationFn = Apollo.MutationFunction<RecommendationsRemovePlayerFromRecommendationsMutation, RecommendationsRemovePlayerFromRecommendationsMutationVariables>;

/**
 * __useRecommendationsRemovePlayerFromRecommendationsMutation__
 *
 * To run a mutation, you first call `useRecommendationsRemovePlayerFromRecommendationsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRecommendationsRemovePlayerFromRecommendationsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [recommendationsRemovePlayerFromRecommendationsMutation, { data, loading, error }] = useRecommendationsRemovePlayerFromRecommendationsMutation({
 *   variables: {
 *      playerId: // value for 'playerId'
 *   },
 * });
 */
export function useRecommendationsRemovePlayerFromRecommendationsMutation(baseOptions?: Apollo.MutationHookOptions<RecommendationsRemovePlayerFromRecommendationsMutation, RecommendationsRemovePlayerFromRecommendationsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RecommendationsRemovePlayerFromRecommendationsMutation, RecommendationsRemovePlayerFromRecommendationsMutationVariables>(RecommendationsRemovePlayerFromRecommendationsDocument, options);
      }
export type RecommendationsRemovePlayerFromRecommendationsMutationHookResult = ReturnType<typeof useRecommendationsRemovePlayerFromRecommendationsMutation>;
export type RecommendationsRemovePlayerFromRecommendationsMutationResult = Apollo.MutationResult<RecommendationsRemovePlayerFromRecommendationsMutation>;
export type RecommendationsRemovePlayerFromRecommendationsMutationOptions = Apollo.BaseMutationOptions<RecommendationsRemovePlayerFromRecommendationsMutation, RecommendationsRemovePlayerFromRecommendationsMutationVariables>;
export const ReportsListPlayerMatchesDocument = gql`
    query ReportsListPlayerMatches($playerId: ID!, $first: Int, $after: String) {
  listPlayerMatches(playerId: $playerId, first: $first, after: $after) {
    edges {
      cursor
      node {
        ...ReportsPlayerMatch
      }
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}
    ${ReportsPlayerMatchFragmentDoc}`;

/**
 * __useReportsListPlayerMatchesQuery__
 *
 * To run a query within a React component, call `useReportsListPlayerMatchesQuery` and pass it any options that fit your needs.
 * When your component renders, `useReportsListPlayerMatchesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReportsListPlayerMatchesQuery({
 *   variables: {
 *      playerId: // value for 'playerId'
 *      first: // value for 'first'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useReportsListPlayerMatchesQuery(baseOptions: Apollo.QueryHookOptions<ReportsListPlayerMatchesQuery, ReportsListPlayerMatchesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ReportsListPlayerMatchesQuery, ReportsListPlayerMatchesQueryVariables>(ReportsListPlayerMatchesDocument, options);
      }
export function useReportsListPlayerMatchesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ReportsListPlayerMatchesQuery, ReportsListPlayerMatchesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ReportsListPlayerMatchesQuery, ReportsListPlayerMatchesQueryVariables>(ReportsListPlayerMatchesDocument, options);
        }
export type ReportsListPlayerMatchesQueryHookResult = ReturnType<typeof useReportsListPlayerMatchesQuery>;
export type ReportsListPlayerMatchesLazyQueryHookResult = ReturnType<typeof useReportsListPlayerMatchesLazyQuery>;
export type ReportsListPlayerMatchesQueryResult = Apollo.QueryResult<ReportsListPlayerMatchesQuery, ReportsListPlayerMatchesQueryVariables>;
export const RosterManagementGetOrganizationTeamByOrganizationIdAndTeamIdDocument = gql`
    query RosterManagementGetOrganizationTeamByOrganizationIdAndTeamId($organizationId: ID!, $teamId: ID!) {
  getOrganizationTeamByOrganizationIdAndTeamId(
    organizationId: $organizationId
    teamId: $teamId
  ) {
    ...RosterManagmentOrganizationTeam
  }
}
    ${RosterManagmentOrganizationTeamFragmentDoc}`;

/**
 * __useRosterManagementGetOrganizationTeamByOrganizationIdAndTeamIdQuery__
 *
 * To run a query within a React component, call `useRosterManagementGetOrganizationTeamByOrganizationIdAndTeamIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useRosterManagementGetOrganizationTeamByOrganizationIdAndTeamIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRosterManagementGetOrganizationTeamByOrganizationIdAndTeamIdQuery({
 *   variables: {
 *      organizationId: // value for 'organizationId'
 *      teamId: // value for 'teamId'
 *   },
 * });
 */
export function useRosterManagementGetOrganizationTeamByOrganizationIdAndTeamIdQuery(baseOptions: Apollo.QueryHookOptions<RosterManagementGetOrganizationTeamByOrganizationIdAndTeamIdQuery, RosterManagementGetOrganizationTeamByOrganizationIdAndTeamIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RosterManagementGetOrganizationTeamByOrganizationIdAndTeamIdQuery, RosterManagementGetOrganizationTeamByOrganizationIdAndTeamIdQueryVariables>(RosterManagementGetOrganizationTeamByOrganizationIdAndTeamIdDocument, options);
      }
export function useRosterManagementGetOrganizationTeamByOrganizationIdAndTeamIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RosterManagementGetOrganizationTeamByOrganizationIdAndTeamIdQuery, RosterManagementGetOrganizationTeamByOrganizationIdAndTeamIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RosterManagementGetOrganizationTeamByOrganizationIdAndTeamIdQuery, RosterManagementGetOrganizationTeamByOrganizationIdAndTeamIdQueryVariables>(RosterManagementGetOrganizationTeamByOrganizationIdAndTeamIdDocument, options);
        }
export type RosterManagementGetOrganizationTeamByOrganizationIdAndTeamIdQueryHookResult = ReturnType<typeof useRosterManagementGetOrganizationTeamByOrganizationIdAndTeamIdQuery>;
export type RosterManagementGetOrganizationTeamByOrganizationIdAndTeamIdLazyQueryHookResult = ReturnType<typeof useRosterManagementGetOrganizationTeamByOrganizationIdAndTeamIdLazyQuery>;
export type RosterManagementGetOrganizationTeamByOrganizationIdAndTeamIdQueryResult = Apollo.QueryResult<RosterManagementGetOrganizationTeamByOrganizationIdAndTeamIdQuery, RosterManagementGetOrganizationTeamByOrganizationIdAndTeamIdQueryVariables>;
export const RosterManagementListMyOrganizationsPlayersDocument = gql`
    query RosterManagementListMyOrganizationsPlayers($first: Int, $after: String, $sortBy: SortField, $sortOrder: OrderByDirection, $positionIds: [ID!]) {
  listMyOrganizationsPlayers(
    first: $first
    after: $after
    sortBy: $sortBy
    sortOrder: $sortOrder
    positionIds: $positionIds
  ) {
    ...WatchlistPlayerConnection
  }
}
    ${WatchlistPlayerConnectionFragmentDoc}`;

/**
 * __useRosterManagementListMyOrganizationsPlayersQuery__
 *
 * To run a query within a React component, call `useRosterManagementListMyOrganizationsPlayersQuery` and pass it any options that fit your needs.
 * When your component renders, `useRosterManagementListMyOrganizationsPlayersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRosterManagementListMyOrganizationsPlayersQuery({
 *   variables: {
 *      first: // value for 'first'
 *      after: // value for 'after'
 *      sortBy: // value for 'sortBy'
 *      sortOrder: // value for 'sortOrder'
 *      positionIds: // value for 'positionIds'
 *   },
 * });
 */
export function useRosterManagementListMyOrganizationsPlayersQuery(baseOptions?: Apollo.QueryHookOptions<RosterManagementListMyOrganizationsPlayersQuery, RosterManagementListMyOrganizationsPlayersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RosterManagementListMyOrganizationsPlayersQuery, RosterManagementListMyOrganizationsPlayersQueryVariables>(RosterManagementListMyOrganizationsPlayersDocument, options);
      }
export function useRosterManagementListMyOrganizationsPlayersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RosterManagementListMyOrganizationsPlayersQuery, RosterManagementListMyOrganizationsPlayersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RosterManagementListMyOrganizationsPlayersQuery, RosterManagementListMyOrganizationsPlayersQueryVariables>(RosterManagementListMyOrganizationsPlayersDocument, options);
        }
export type RosterManagementListMyOrganizationsPlayersQueryHookResult = ReturnType<typeof useRosterManagementListMyOrganizationsPlayersQuery>;
export type RosterManagementListMyOrganizationsPlayersLazyQueryHookResult = ReturnType<typeof useRosterManagementListMyOrganizationsPlayersLazyQuery>;
export type RosterManagementListMyOrganizationsPlayersQueryResult = Apollo.QueryResult<RosterManagementListMyOrganizationsPlayersQuery, RosterManagementListMyOrganizationsPlayersQueryVariables>;
export const RosterManagementListMyOrganizationsTeamsDocument = gql`
    query RosterManagementListMyOrganizationsTeams($first: Int, $after: String) {
  listMyOrganizationsTeams(first: $first, after: $after) {
    ...RosterManagementTeamConnection
  }
}
    ${RosterManagementTeamConnectionFragmentDoc}`;

/**
 * __useRosterManagementListMyOrganizationsTeamsQuery__
 *
 * To run a query within a React component, call `useRosterManagementListMyOrganizationsTeamsQuery` and pass it any options that fit your needs.
 * When your component renders, `useRosterManagementListMyOrganizationsTeamsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRosterManagementListMyOrganizationsTeamsQuery({
 *   variables: {
 *      first: // value for 'first'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useRosterManagementListMyOrganizationsTeamsQuery(baseOptions?: Apollo.QueryHookOptions<RosterManagementListMyOrganizationsTeamsQuery, RosterManagementListMyOrganizationsTeamsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RosterManagementListMyOrganizationsTeamsQuery, RosterManagementListMyOrganizationsTeamsQueryVariables>(RosterManagementListMyOrganizationsTeamsDocument, options);
      }
export function useRosterManagementListMyOrganizationsTeamsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RosterManagementListMyOrganizationsTeamsQuery, RosterManagementListMyOrganizationsTeamsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RosterManagementListMyOrganizationsTeamsQuery, RosterManagementListMyOrganizationsTeamsQueryVariables>(RosterManagementListMyOrganizationsTeamsDocument, options);
        }
export type RosterManagementListMyOrganizationsTeamsQueryHookResult = ReturnType<typeof useRosterManagementListMyOrganizationsTeamsQuery>;
export type RosterManagementListMyOrganizationsTeamsLazyQueryHookResult = ReturnType<typeof useRosterManagementListMyOrganizationsTeamsLazyQuery>;
export type RosterManagementListMyOrganizationsTeamsQueryResult = Apollo.QueryResult<RosterManagementListMyOrganizationsTeamsQuery, RosterManagementListMyOrganizationsTeamsQueryVariables>;
export const RosterManagementListMyOrganizationsLeaguesDocument = gql`
    query RosterManagementListMyOrganizationsLeagues($first: Int, $after: String) {
  listMyOrganizationsLeagues(first: $first, after: $after) {
    ...RosterManagementLeagueConnection
  }
}
    ${RosterManagementLeagueConnectionFragmentDoc}`;

/**
 * __useRosterManagementListMyOrganizationsLeaguesQuery__
 *
 * To run a query within a React component, call `useRosterManagementListMyOrganizationsLeaguesQuery` and pass it any options that fit your needs.
 * When your component renders, `useRosterManagementListMyOrganizationsLeaguesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRosterManagementListMyOrganizationsLeaguesQuery({
 *   variables: {
 *      first: // value for 'first'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useRosterManagementListMyOrganizationsLeaguesQuery(baseOptions?: Apollo.QueryHookOptions<RosterManagementListMyOrganizationsLeaguesQuery, RosterManagementListMyOrganizationsLeaguesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RosterManagementListMyOrganizationsLeaguesQuery, RosterManagementListMyOrganizationsLeaguesQueryVariables>(RosterManagementListMyOrganizationsLeaguesDocument, options);
      }
export function useRosterManagementListMyOrganizationsLeaguesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RosterManagementListMyOrganizationsLeaguesQuery, RosterManagementListMyOrganizationsLeaguesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RosterManagementListMyOrganizationsLeaguesQuery, RosterManagementListMyOrganizationsLeaguesQueryVariables>(RosterManagementListMyOrganizationsLeaguesDocument, options);
        }
export type RosterManagementListMyOrganizationsLeaguesQueryHookResult = ReturnType<typeof useRosterManagementListMyOrganizationsLeaguesQuery>;
export type RosterManagementListMyOrganizationsLeaguesLazyQueryHookResult = ReturnType<typeof useRosterManagementListMyOrganizationsLeaguesLazyQuery>;
export type RosterManagementListMyOrganizationsLeaguesQueryResult = Apollo.QueryResult<RosterManagementListMyOrganizationsLeaguesQuery, RosterManagementListMyOrganizationsLeaguesQueryVariables>;
export const RosterManagementListMyOrganizationsEligibleTeamsDocument = gql`
    query RosterManagementListMyOrganizationsEligibleTeams($first: Int, $after: String, $search: String) {
  listMyOrganizationsEligibleTeams(first: $first, after: $after, search: $search) {
    ...RosterManagementTeamConnection
  }
}
    ${RosterManagementTeamConnectionFragmentDoc}`;

/**
 * __useRosterManagementListMyOrganizationsEligibleTeamsQuery__
 *
 * To run a query within a React component, call `useRosterManagementListMyOrganizationsEligibleTeamsQuery` and pass it any options that fit your needs.
 * When your component renders, `useRosterManagementListMyOrganizationsEligibleTeamsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRosterManagementListMyOrganizationsEligibleTeamsQuery({
 *   variables: {
 *      first: // value for 'first'
 *      after: // value for 'after'
 *      search: // value for 'search'
 *   },
 * });
 */
export function useRosterManagementListMyOrganizationsEligibleTeamsQuery(baseOptions?: Apollo.QueryHookOptions<RosterManagementListMyOrganizationsEligibleTeamsQuery, RosterManagementListMyOrganizationsEligibleTeamsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RosterManagementListMyOrganizationsEligibleTeamsQuery, RosterManagementListMyOrganizationsEligibleTeamsQueryVariables>(RosterManagementListMyOrganizationsEligibleTeamsDocument, options);
      }
export function useRosterManagementListMyOrganizationsEligibleTeamsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RosterManagementListMyOrganizationsEligibleTeamsQuery, RosterManagementListMyOrganizationsEligibleTeamsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RosterManagementListMyOrganizationsEligibleTeamsQuery, RosterManagementListMyOrganizationsEligibleTeamsQueryVariables>(RosterManagementListMyOrganizationsEligibleTeamsDocument, options);
        }
export type RosterManagementListMyOrganizationsEligibleTeamsQueryHookResult = ReturnType<typeof useRosterManagementListMyOrganizationsEligibleTeamsQuery>;
export type RosterManagementListMyOrganizationsEligibleTeamsLazyQueryHookResult = ReturnType<typeof useRosterManagementListMyOrganizationsEligibleTeamsLazyQuery>;
export type RosterManagementListMyOrganizationsEligibleTeamsQueryResult = Apollo.QueryResult<RosterManagementListMyOrganizationsEligibleTeamsQuery, RosterManagementListMyOrganizationsEligibleTeamsQueryVariables>;
export const RosterManagementListLeaguesDocument = gql`
    query RosterManagementListLeagues($first: Int, $after: String, $search: String) {
  listLeagues(first: $first, after: $after, search: $search) {
    ...RosterManagementLeagueConnection
  }
}
    ${RosterManagementLeagueConnectionFragmentDoc}`;

/**
 * __useRosterManagementListLeaguesQuery__
 *
 * To run a query within a React component, call `useRosterManagementListLeaguesQuery` and pass it any options that fit your needs.
 * When your component renders, `useRosterManagementListLeaguesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRosterManagementListLeaguesQuery({
 *   variables: {
 *      first: // value for 'first'
 *      after: // value for 'after'
 *      search: // value for 'search'
 *   },
 * });
 */
export function useRosterManagementListLeaguesQuery(baseOptions?: Apollo.QueryHookOptions<RosterManagementListLeaguesQuery, RosterManagementListLeaguesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RosterManagementListLeaguesQuery, RosterManagementListLeaguesQueryVariables>(RosterManagementListLeaguesDocument, options);
      }
export function useRosterManagementListLeaguesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RosterManagementListLeaguesQuery, RosterManagementListLeaguesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RosterManagementListLeaguesQuery, RosterManagementListLeaguesQueryVariables>(RosterManagementListLeaguesDocument, options);
        }
export type RosterManagementListLeaguesQueryHookResult = ReturnType<typeof useRosterManagementListLeaguesQuery>;
export type RosterManagementListLeaguesLazyQueryHookResult = ReturnType<typeof useRosterManagementListLeaguesLazyQuery>;
export type RosterManagementListLeaguesQueryResult = Apollo.QueryResult<RosterManagementListLeaguesQuery, RosterManagementListLeaguesQueryVariables>;
export const RosterManagementListNationalitiesDocument = gql`
    query RosterManagementListNationalities($first: Int, $after: String) {
  listNationalities(first: $first, after: $after) {
    ...RosterManagementNationalityConnection
  }
}
    ${RosterManagementNationalityConnectionFragmentDoc}`;

/**
 * __useRosterManagementListNationalitiesQuery__
 *
 * To run a query within a React component, call `useRosterManagementListNationalitiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useRosterManagementListNationalitiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRosterManagementListNationalitiesQuery({
 *   variables: {
 *      first: // value for 'first'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useRosterManagementListNationalitiesQuery(baseOptions?: Apollo.QueryHookOptions<RosterManagementListNationalitiesQuery, RosterManagementListNationalitiesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RosterManagementListNationalitiesQuery, RosterManagementListNationalitiesQueryVariables>(RosterManagementListNationalitiesDocument, options);
      }
export function useRosterManagementListNationalitiesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RosterManagementListNationalitiesQuery, RosterManagementListNationalitiesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RosterManagementListNationalitiesQuery, RosterManagementListNationalitiesQueryVariables>(RosterManagementListNationalitiesDocument, options);
        }
export type RosterManagementListNationalitiesQueryHookResult = ReturnType<typeof useRosterManagementListNationalitiesQuery>;
export type RosterManagementListNationalitiesLazyQueryHookResult = ReturnType<typeof useRosterManagementListNationalitiesLazyQuery>;
export type RosterManagementListNationalitiesQueryResult = Apollo.QueryResult<RosterManagementListNationalitiesQuery, RosterManagementListNationalitiesQueryVariables>;
export const RosterManagementCreateOrganizationLeagueDocument = gql`
    mutation RosterManagementCreateOrganizationLeague($input: CreateOrganizationLeagueInput!) {
  createOrganizationLeague(input: $input) {
    ...RosterManagmentOrganizationLeague
  }
}
    ${RosterManagmentOrganizationLeagueFragmentDoc}`;
export type RosterManagementCreateOrganizationLeagueMutationFn = Apollo.MutationFunction<RosterManagementCreateOrganizationLeagueMutation, RosterManagementCreateOrganizationLeagueMutationVariables>;

/**
 * __useRosterManagementCreateOrganizationLeagueMutation__
 *
 * To run a mutation, you first call `useRosterManagementCreateOrganizationLeagueMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRosterManagementCreateOrganizationLeagueMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [rosterManagementCreateOrganizationLeagueMutation, { data, loading, error }] = useRosterManagementCreateOrganizationLeagueMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRosterManagementCreateOrganizationLeagueMutation(baseOptions?: Apollo.MutationHookOptions<RosterManagementCreateOrganizationLeagueMutation, RosterManagementCreateOrganizationLeagueMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RosterManagementCreateOrganizationLeagueMutation, RosterManagementCreateOrganizationLeagueMutationVariables>(RosterManagementCreateOrganizationLeagueDocument, options);
      }
export type RosterManagementCreateOrganizationLeagueMutationHookResult = ReturnType<typeof useRosterManagementCreateOrganizationLeagueMutation>;
export type RosterManagementCreateOrganizationLeagueMutationResult = Apollo.MutationResult<RosterManagementCreateOrganizationLeagueMutation>;
export type RosterManagementCreateOrganizationLeagueMutationOptions = Apollo.BaseMutationOptions<RosterManagementCreateOrganizationLeagueMutation, RosterManagementCreateOrganizationLeagueMutationVariables>;
export const RosterManagementDeleteOrganizationLeagueDocument = gql`
    mutation RosterManagementDeleteOrganizationLeague($input: DeleteOrganizationLeagueInput!) {
  deleteOrganizationLeague(input: $input) {
    ...RosterManagmentOrganizationLeague
  }
}
    ${RosterManagmentOrganizationLeagueFragmentDoc}`;
export type RosterManagementDeleteOrganizationLeagueMutationFn = Apollo.MutationFunction<RosterManagementDeleteOrganizationLeagueMutation, RosterManagementDeleteOrganizationLeagueMutationVariables>;

/**
 * __useRosterManagementDeleteOrganizationLeagueMutation__
 *
 * To run a mutation, you first call `useRosterManagementDeleteOrganizationLeagueMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRosterManagementDeleteOrganizationLeagueMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [rosterManagementDeleteOrganizationLeagueMutation, { data, loading, error }] = useRosterManagementDeleteOrganizationLeagueMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRosterManagementDeleteOrganizationLeagueMutation(baseOptions?: Apollo.MutationHookOptions<RosterManagementDeleteOrganizationLeagueMutation, RosterManagementDeleteOrganizationLeagueMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RosterManagementDeleteOrganizationLeagueMutation, RosterManagementDeleteOrganizationLeagueMutationVariables>(RosterManagementDeleteOrganizationLeagueDocument, options);
      }
export type RosterManagementDeleteOrganizationLeagueMutationHookResult = ReturnType<typeof useRosterManagementDeleteOrganizationLeagueMutation>;
export type RosterManagementDeleteOrganizationLeagueMutationResult = Apollo.MutationResult<RosterManagementDeleteOrganizationLeagueMutation>;
export type RosterManagementDeleteOrganizationLeagueMutationOptions = Apollo.BaseMutationOptions<RosterManagementDeleteOrganizationLeagueMutation, RosterManagementDeleteOrganizationLeagueMutationVariables>;
export const RosterManagementCreateOrganizationTeamDocument = gql`
    mutation RosterManagementCreateOrganizationTeam($input: CreateOrganizationTeamInput!) {
  createOrganizationTeam(input: $input) {
    ...RosterManagmentOrganizationTeam
  }
}
    ${RosterManagmentOrganizationTeamFragmentDoc}`;
export type RosterManagementCreateOrganizationTeamMutationFn = Apollo.MutationFunction<RosterManagementCreateOrganizationTeamMutation, RosterManagementCreateOrganizationTeamMutationVariables>;

/**
 * __useRosterManagementCreateOrganizationTeamMutation__
 *
 * To run a mutation, you first call `useRosterManagementCreateOrganizationTeamMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRosterManagementCreateOrganizationTeamMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [rosterManagementCreateOrganizationTeamMutation, { data, loading, error }] = useRosterManagementCreateOrganizationTeamMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRosterManagementCreateOrganizationTeamMutation(baseOptions?: Apollo.MutationHookOptions<RosterManagementCreateOrganizationTeamMutation, RosterManagementCreateOrganizationTeamMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RosterManagementCreateOrganizationTeamMutation, RosterManagementCreateOrganizationTeamMutationVariables>(RosterManagementCreateOrganizationTeamDocument, options);
      }
export type RosterManagementCreateOrganizationTeamMutationHookResult = ReturnType<typeof useRosterManagementCreateOrganizationTeamMutation>;
export type RosterManagementCreateOrganizationTeamMutationResult = Apollo.MutationResult<RosterManagementCreateOrganizationTeamMutation>;
export type RosterManagementCreateOrganizationTeamMutationOptions = Apollo.BaseMutationOptions<RosterManagementCreateOrganizationTeamMutation, RosterManagementCreateOrganizationTeamMutationVariables>;
export const RosterManagementDeleteOrganizationTeamDocument = gql`
    mutation RosterManagementDeleteOrganizationTeam($input: DeleteOrganizationTeamInput!) {
  deleteOrganizationTeam(input: $input) {
    ...RosterManagmentOrganizationTeam
  }
}
    ${RosterManagmentOrganizationTeamFragmentDoc}`;
export type RosterManagementDeleteOrganizationTeamMutationFn = Apollo.MutationFunction<RosterManagementDeleteOrganizationTeamMutation, RosterManagementDeleteOrganizationTeamMutationVariables>;

/**
 * __useRosterManagementDeleteOrganizationTeamMutation__
 *
 * To run a mutation, you first call `useRosterManagementDeleteOrganizationTeamMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRosterManagementDeleteOrganizationTeamMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [rosterManagementDeleteOrganizationTeamMutation, { data, loading, error }] = useRosterManagementDeleteOrganizationTeamMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRosterManagementDeleteOrganizationTeamMutation(baseOptions?: Apollo.MutationHookOptions<RosterManagementDeleteOrganizationTeamMutation, RosterManagementDeleteOrganizationTeamMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RosterManagementDeleteOrganizationTeamMutation, RosterManagementDeleteOrganizationTeamMutationVariables>(RosterManagementDeleteOrganizationTeamDocument, options);
      }
export type RosterManagementDeleteOrganizationTeamMutationHookResult = ReturnType<typeof useRosterManagementDeleteOrganizationTeamMutation>;
export type RosterManagementDeleteOrganizationTeamMutationResult = Apollo.MutationResult<RosterManagementDeleteOrganizationTeamMutation>;
export type RosterManagementDeleteOrganizationTeamMutationOptions = Apollo.BaseMutationOptions<RosterManagementDeleteOrganizationTeamMutation, RosterManagementDeleteOrganizationTeamMutationVariables>;
export const ShadowTeamListShadowTeamsDocument = gql`
    query ShadowTeamListShadowTeams($first: Int, $after: String, $orderBy: ListShadowTeamOrderByInput) {
  listShadowTeams(first: $first, after: $after, orderBy: $orderBy) {
    ...ShadowTeamConnection
  }
}
    ${ShadowTeamConnectionFragmentDoc}`;

/**
 * __useShadowTeamListShadowTeamsQuery__
 *
 * To run a query within a React component, call `useShadowTeamListShadowTeamsQuery` and pass it any options that fit your needs.
 * When your component renders, `useShadowTeamListShadowTeamsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useShadowTeamListShadowTeamsQuery({
 *   variables: {
 *      first: // value for 'first'
 *      after: // value for 'after'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useShadowTeamListShadowTeamsQuery(baseOptions?: Apollo.QueryHookOptions<ShadowTeamListShadowTeamsQuery, ShadowTeamListShadowTeamsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ShadowTeamListShadowTeamsQuery, ShadowTeamListShadowTeamsQueryVariables>(ShadowTeamListShadowTeamsDocument, options);
      }
export function useShadowTeamListShadowTeamsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ShadowTeamListShadowTeamsQuery, ShadowTeamListShadowTeamsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ShadowTeamListShadowTeamsQuery, ShadowTeamListShadowTeamsQueryVariables>(ShadowTeamListShadowTeamsDocument, options);
        }
export type ShadowTeamListShadowTeamsQueryHookResult = ReturnType<typeof useShadowTeamListShadowTeamsQuery>;
export type ShadowTeamListShadowTeamsLazyQueryHookResult = ReturnType<typeof useShadowTeamListShadowTeamsLazyQuery>;
export type ShadowTeamListShadowTeamsQueryResult = Apollo.QueryResult<ShadowTeamListShadowTeamsQuery, ShadowTeamListShadowTeamsQueryVariables>;
export const ShadowTeamListShadowTeamPlayersDocument = gql`
    query ShadowTeamListShadowTeamPlayers($shadowTeamId: ID!, $query: String, $first: Int, $after: String) {
  listShadowTeamPlayers(
    shadowTeamId: $shadowTeamId
    query: $query
    first: $first
    after: $after
  ) {
    ...ShadowTeamPlayerConnection
  }
}
    ${ShadowTeamPlayerConnectionFragmentDoc}`;

/**
 * __useShadowTeamListShadowTeamPlayersQuery__
 *
 * To run a query within a React component, call `useShadowTeamListShadowTeamPlayersQuery` and pass it any options that fit your needs.
 * When your component renders, `useShadowTeamListShadowTeamPlayersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useShadowTeamListShadowTeamPlayersQuery({
 *   variables: {
 *      shadowTeamId: // value for 'shadowTeamId'
 *      query: // value for 'query'
 *      first: // value for 'first'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useShadowTeamListShadowTeamPlayersQuery(baseOptions: Apollo.QueryHookOptions<ShadowTeamListShadowTeamPlayersQuery, ShadowTeamListShadowTeamPlayersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ShadowTeamListShadowTeamPlayersQuery, ShadowTeamListShadowTeamPlayersQueryVariables>(ShadowTeamListShadowTeamPlayersDocument, options);
      }
export function useShadowTeamListShadowTeamPlayersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ShadowTeamListShadowTeamPlayersQuery, ShadowTeamListShadowTeamPlayersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ShadowTeamListShadowTeamPlayersQuery, ShadowTeamListShadowTeamPlayersQueryVariables>(ShadowTeamListShadowTeamPlayersDocument, options);
        }
export type ShadowTeamListShadowTeamPlayersQueryHookResult = ReturnType<typeof useShadowTeamListShadowTeamPlayersQuery>;
export type ShadowTeamListShadowTeamPlayersLazyQueryHookResult = ReturnType<typeof useShadowTeamListShadowTeamPlayersLazyQuery>;
export type ShadowTeamListShadowTeamPlayersQueryResult = Apollo.QueryResult<ShadowTeamListShadowTeamPlayersQuery, ShadowTeamListShadowTeamPlayersQueryVariables>;
export const ShadowTeamGetShadowTeamDocument = gql`
    query ShadowTeamGetShadowTeam($id: ID!) {
  getShadowTeam(id: $id) {
    ...ShadowTeamDetail
  }
}
    ${ShadowTeamDetailFragmentDoc}`;

/**
 * __useShadowTeamGetShadowTeamQuery__
 *
 * To run a query within a React component, call `useShadowTeamGetShadowTeamQuery` and pass it any options that fit your needs.
 * When your component renders, `useShadowTeamGetShadowTeamQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useShadowTeamGetShadowTeamQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useShadowTeamGetShadowTeamQuery(baseOptions: Apollo.QueryHookOptions<ShadowTeamGetShadowTeamQuery, ShadowTeamGetShadowTeamQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ShadowTeamGetShadowTeamQuery, ShadowTeamGetShadowTeamQueryVariables>(ShadowTeamGetShadowTeamDocument, options);
      }
export function useShadowTeamGetShadowTeamLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ShadowTeamGetShadowTeamQuery, ShadowTeamGetShadowTeamQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ShadowTeamGetShadowTeamQuery, ShadowTeamGetShadowTeamQueryVariables>(ShadowTeamGetShadowTeamDocument, options);
        }
export type ShadowTeamGetShadowTeamQueryHookResult = ReturnType<typeof useShadowTeamGetShadowTeamQuery>;
export type ShadowTeamGetShadowTeamLazyQueryHookResult = ReturnType<typeof useShadowTeamGetShadowTeamLazyQuery>;
export type ShadowTeamGetShadowTeamQueryResult = Apollo.QueryResult<ShadowTeamGetShadowTeamQuery, ShadowTeamGetShadowTeamQueryVariables>;
export const ShadowTeamSearchAvailablePlayersForShadowTeamDocument = gql`
    query ShadowTeamSearchAvailablePlayersForShadowTeam($shadowTeamId: ID!, $query: String, $first: Int, $after: String) {
  searchAvailablePlayersForShadowTeam(
    shadowTeamId: $shadowTeamId
    query: $query
    first: $first
    after: $after
  ) {
    ...PlayerSearchPlayerConnection
  }
}
    ${PlayerSearchPlayerConnectionFragmentDoc}`;

/**
 * __useShadowTeamSearchAvailablePlayersForShadowTeamQuery__
 *
 * To run a query within a React component, call `useShadowTeamSearchAvailablePlayersForShadowTeamQuery` and pass it any options that fit your needs.
 * When your component renders, `useShadowTeamSearchAvailablePlayersForShadowTeamQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useShadowTeamSearchAvailablePlayersForShadowTeamQuery({
 *   variables: {
 *      shadowTeamId: // value for 'shadowTeamId'
 *      query: // value for 'query'
 *      first: // value for 'first'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useShadowTeamSearchAvailablePlayersForShadowTeamQuery(baseOptions: Apollo.QueryHookOptions<ShadowTeamSearchAvailablePlayersForShadowTeamQuery, ShadowTeamSearchAvailablePlayersForShadowTeamQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ShadowTeamSearchAvailablePlayersForShadowTeamQuery, ShadowTeamSearchAvailablePlayersForShadowTeamQueryVariables>(ShadowTeamSearchAvailablePlayersForShadowTeamDocument, options);
      }
export function useShadowTeamSearchAvailablePlayersForShadowTeamLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ShadowTeamSearchAvailablePlayersForShadowTeamQuery, ShadowTeamSearchAvailablePlayersForShadowTeamQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ShadowTeamSearchAvailablePlayersForShadowTeamQuery, ShadowTeamSearchAvailablePlayersForShadowTeamQueryVariables>(ShadowTeamSearchAvailablePlayersForShadowTeamDocument, options);
        }
export type ShadowTeamSearchAvailablePlayersForShadowTeamQueryHookResult = ReturnType<typeof useShadowTeamSearchAvailablePlayersForShadowTeamQuery>;
export type ShadowTeamSearchAvailablePlayersForShadowTeamLazyQueryHookResult = ReturnType<typeof useShadowTeamSearchAvailablePlayersForShadowTeamLazyQuery>;
export type ShadowTeamSearchAvailablePlayersForShadowTeamQueryResult = Apollo.QueryResult<ShadowTeamSearchAvailablePlayersForShadowTeamQuery, ShadowTeamSearchAvailablePlayersForShadowTeamQueryVariables>;
export const ShadowTeamCreateShadowTeamDocument = gql`
    mutation ShadowTeamCreateShadowTeam($input: CreateShadowTeamInput!) {
  createShadowTeam(input: $input) {
    ...ShadowTeam
  }
}
    ${ShadowTeamFragmentDoc}`;
export type ShadowTeamCreateShadowTeamMutationFn = Apollo.MutationFunction<ShadowTeamCreateShadowTeamMutation, ShadowTeamCreateShadowTeamMutationVariables>;

/**
 * __useShadowTeamCreateShadowTeamMutation__
 *
 * To run a mutation, you first call `useShadowTeamCreateShadowTeamMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useShadowTeamCreateShadowTeamMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [shadowTeamCreateShadowTeamMutation, { data, loading, error }] = useShadowTeamCreateShadowTeamMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useShadowTeamCreateShadowTeamMutation(baseOptions?: Apollo.MutationHookOptions<ShadowTeamCreateShadowTeamMutation, ShadowTeamCreateShadowTeamMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ShadowTeamCreateShadowTeamMutation, ShadowTeamCreateShadowTeamMutationVariables>(ShadowTeamCreateShadowTeamDocument, options);
      }
export type ShadowTeamCreateShadowTeamMutationHookResult = ReturnType<typeof useShadowTeamCreateShadowTeamMutation>;
export type ShadowTeamCreateShadowTeamMutationResult = Apollo.MutationResult<ShadowTeamCreateShadowTeamMutation>;
export type ShadowTeamCreateShadowTeamMutationOptions = Apollo.BaseMutationOptions<ShadowTeamCreateShadowTeamMutation, ShadowTeamCreateShadowTeamMutationVariables>;
export const ShadowTeamDeleteShadowTeamDocument = gql`
    mutation ShadowTeamDeleteShadowTeam($input: DeleteShadowTeamInput!) {
  deleteShadowTeam(input: $input) {
    ...ShadowTeam
  }
}
    ${ShadowTeamFragmentDoc}`;
export type ShadowTeamDeleteShadowTeamMutationFn = Apollo.MutationFunction<ShadowTeamDeleteShadowTeamMutation, ShadowTeamDeleteShadowTeamMutationVariables>;

/**
 * __useShadowTeamDeleteShadowTeamMutation__
 *
 * To run a mutation, you first call `useShadowTeamDeleteShadowTeamMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useShadowTeamDeleteShadowTeamMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [shadowTeamDeleteShadowTeamMutation, { data, loading, error }] = useShadowTeamDeleteShadowTeamMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useShadowTeamDeleteShadowTeamMutation(baseOptions?: Apollo.MutationHookOptions<ShadowTeamDeleteShadowTeamMutation, ShadowTeamDeleteShadowTeamMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ShadowTeamDeleteShadowTeamMutation, ShadowTeamDeleteShadowTeamMutationVariables>(ShadowTeamDeleteShadowTeamDocument, options);
      }
export type ShadowTeamDeleteShadowTeamMutationHookResult = ReturnType<typeof useShadowTeamDeleteShadowTeamMutation>;
export type ShadowTeamDeleteShadowTeamMutationResult = Apollo.MutationResult<ShadowTeamDeleteShadowTeamMutation>;
export type ShadowTeamDeleteShadowTeamMutationOptions = Apollo.BaseMutationOptions<ShadowTeamDeleteShadowTeamMutation, ShadowTeamDeleteShadowTeamMutationVariables>;
export const ShadowTeamUpdateShadowTeamDocument = gql`
    mutation ShadowTeamUpdateShadowTeam($input: UpdateShadowTeamInput!) {
  updateShadowTeam(input: $input) {
    assignedPlayers {
      ...ShadowTeamPlayer
    }
    ...ShadowTeam
  }
}
    ${ShadowTeamPlayerFragmentDoc}
${ShadowTeamFragmentDoc}`;
export type ShadowTeamUpdateShadowTeamMutationFn = Apollo.MutationFunction<ShadowTeamUpdateShadowTeamMutation, ShadowTeamUpdateShadowTeamMutationVariables>;

/**
 * __useShadowTeamUpdateShadowTeamMutation__
 *
 * To run a mutation, you first call `useShadowTeamUpdateShadowTeamMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useShadowTeamUpdateShadowTeamMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [shadowTeamUpdateShadowTeamMutation, { data, loading, error }] = useShadowTeamUpdateShadowTeamMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useShadowTeamUpdateShadowTeamMutation(baseOptions?: Apollo.MutationHookOptions<ShadowTeamUpdateShadowTeamMutation, ShadowTeamUpdateShadowTeamMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ShadowTeamUpdateShadowTeamMutation, ShadowTeamUpdateShadowTeamMutationVariables>(ShadowTeamUpdateShadowTeamDocument, options);
      }
export type ShadowTeamUpdateShadowTeamMutationHookResult = ReturnType<typeof useShadowTeamUpdateShadowTeamMutation>;
export type ShadowTeamUpdateShadowTeamMutationResult = Apollo.MutationResult<ShadowTeamUpdateShadowTeamMutation>;
export type ShadowTeamUpdateShadowTeamMutationOptions = Apollo.BaseMutationOptions<ShadowTeamUpdateShadowTeamMutation, ShadowTeamUpdateShadowTeamMutationVariables>;
export const ShadowTeamAddShadowTeamPlayersDocument = gql`
    mutation ShadowTeamAddShadowTeamPlayers($input: AddShadowTeamPlayersInput!) {
  addShadowTeamPlayers(input: $input) {
    ...ShadowTeamPlayer
  }
}
    ${ShadowTeamPlayerFragmentDoc}`;
export type ShadowTeamAddShadowTeamPlayersMutationFn = Apollo.MutationFunction<ShadowTeamAddShadowTeamPlayersMutation, ShadowTeamAddShadowTeamPlayersMutationVariables>;

/**
 * __useShadowTeamAddShadowTeamPlayersMutation__
 *
 * To run a mutation, you first call `useShadowTeamAddShadowTeamPlayersMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useShadowTeamAddShadowTeamPlayersMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [shadowTeamAddShadowTeamPlayersMutation, { data, loading, error }] = useShadowTeamAddShadowTeamPlayersMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useShadowTeamAddShadowTeamPlayersMutation(baseOptions?: Apollo.MutationHookOptions<ShadowTeamAddShadowTeamPlayersMutation, ShadowTeamAddShadowTeamPlayersMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ShadowTeamAddShadowTeamPlayersMutation, ShadowTeamAddShadowTeamPlayersMutationVariables>(ShadowTeamAddShadowTeamPlayersDocument, options);
      }
export type ShadowTeamAddShadowTeamPlayersMutationHookResult = ReturnType<typeof useShadowTeamAddShadowTeamPlayersMutation>;
export type ShadowTeamAddShadowTeamPlayersMutationResult = Apollo.MutationResult<ShadowTeamAddShadowTeamPlayersMutation>;
export type ShadowTeamAddShadowTeamPlayersMutationOptions = Apollo.BaseMutationOptions<ShadowTeamAddShadowTeamPlayersMutation, ShadowTeamAddShadowTeamPlayersMutationVariables>;
export const ShadowTeamRemoveShadowTeamPlayerDocument = gql`
    mutation ShadowTeamRemoveShadowTeamPlayer($input: RemoveShadowTeamPlayerInput!) {
  removeShadowTeamPlayer(input: $input) {
    ...ShadowTeamPlayer
  }
}
    ${ShadowTeamPlayerFragmentDoc}`;
export type ShadowTeamRemoveShadowTeamPlayerMutationFn = Apollo.MutationFunction<ShadowTeamRemoveShadowTeamPlayerMutation, ShadowTeamRemoveShadowTeamPlayerMutationVariables>;

/**
 * __useShadowTeamRemoveShadowTeamPlayerMutation__
 *
 * To run a mutation, you first call `useShadowTeamRemoveShadowTeamPlayerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useShadowTeamRemoveShadowTeamPlayerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [shadowTeamRemoveShadowTeamPlayerMutation, { data, loading, error }] = useShadowTeamRemoveShadowTeamPlayerMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useShadowTeamRemoveShadowTeamPlayerMutation(baseOptions?: Apollo.MutationHookOptions<ShadowTeamRemoveShadowTeamPlayerMutation, ShadowTeamRemoveShadowTeamPlayerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ShadowTeamRemoveShadowTeamPlayerMutation, ShadowTeamRemoveShadowTeamPlayerMutationVariables>(ShadowTeamRemoveShadowTeamPlayerDocument, options);
      }
export type ShadowTeamRemoveShadowTeamPlayerMutationHookResult = ReturnType<typeof useShadowTeamRemoveShadowTeamPlayerMutation>;
export type ShadowTeamRemoveShadowTeamPlayerMutationResult = Apollo.MutationResult<ShadowTeamRemoveShadowTeamPlayerMutation>;
export type ShadowTeamRemoveShadowTeamPlayerMutationOptions = Apollo.BaseMutationOptions<ShadowTeamRemoveShadowTeamPlayerMutation, ShadowTeamRemoveShadowTeamPlayerMutationVariables>;
export const SimilarPlayersListSimilarPlayersDocument = gql`
    query SimilarPlayersListSimilarPlayers($playerId: ID!, $first: Int, $after: String, $minValuation: Float, $maxValuation: Float, $maxAge: Int, $minAge: Int, $sortBy: SimilarPlayerSortField, $sortOrder: SortOrder, $minMonthsRemaining: Float, $maxMonthsRemaining: Float, $leagueIds: [String!]) {
  listSimilarPlayers(
    playerId: $playerId
    minValuation: $minValuation
    maxValuation: $maxValuation
    maxAge: $maxAge
    minAge: $minAge
    sortBy: $sortBy
    sortOrder: $sortOrder
    minMonthsRemaining: $minMonthsRemaining
    maxMonthsRemaining: $maxMonthsRemaining
    leagueIds: $leagueIds
    first: $first
    after: $after
  ) {
    ...SimilarPlayersSimilarPlayerConnection
  }
}
    ${SimilarPlayersSimilarPlayerConnectionFragmentDoc}`;

/**
 * __useSimilarPlayersListSimilarPlayersQuery__
 *
 * To run a query within a React component, call `useSimilarPlayersListSimilarPlayersQuery` and pass it any options that fit your needs.
 * When your component renders, `useSimilarPlayersListSimilarPlayersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSimilarPlayersListSimilarPlayersQuery({
 *   variables: {
 *      playerId: // value for 'playerId'
 *      first: // value for 'first'
 *      after: // value for 'after'
 *      minValuation: // value for 'minValuation'
 *      maxValuation: // value for 'maxValuation'
 *      maxAge: // value for 'maxAge'
 *      minAge: // value for 'minAge'
 *      sortBy: // value for 'sortBy'
 *      sortOrder: // value for 'sortOrder'
 *      minMonthsRemaining: // value for 'minMonthsRemaining'
 *      maxMonthsRemaining: // value for 'maxMonthsRemaining'
 *      leagueIds: // value for 'leagueIds'
 *   },
 * });
 */
export function useSimilarPlayersListSimilarPlayersQuery(baseOptions: Apollo.QueryHookOptions<SimilarPlayersListSimilarPlayersQuery, SimilarPlayersListSimilarPlayersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SimilarPlayersListSimilarPlayersQuery, SimilarPlayersListSimilarPlayersQueryVariables>(SimilarPlayersListSimilarPlayersDocument, options);
      }
export function useSimilarPlayersListSimilarPlayersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SimilarPlayersListSimilarPlayersQuery, SimilarPlayersListSimilarPlayersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SimilarPlayersListSimilarPlayersQuery, SimilarPlayersListSimilarPlayersQueryVariables>(SimilarPlayersListSimilarPlayersDocument, options);
        }
export type SimilarPlayersListSimilarPlayersQueryHookResult = ReturnType<typeof useSimilarPlayersListSimilarPlayersQuery>;
export type SimilarPlayersListSimilarPlayersLazyQueryHookResult = ReturnType<typeof useSimilarPlayersListSimilarPlayersLazyQuery>;
export type SimilarPlayersListSimilarPlayersQueryResult = Apollo.QueryResult<SimilarPlayersListSimilarPlayersQuery, SimilarPlayersListSimilarPlayersQueryVariables>;
export const WatchlistListMyOrganizationsOrganizationUsersDocument = gql`
    query WatchlistListMyOrganizationsOrganizationUsers($first: Int, $after: String) {
  listMyOrganizationsOrganizationUsers(first: $first, after: $after) {
    ...WatchlistOrganizationUserConnection
  }
}
    ${WatchlistOrganizationUserConnectionFragmentDoc}`;

/**
 * __useWatchlistListMyOrganizationsOrganizationUsersQuery__
 *
 * To run a query within a React component, call `useWatchlistListMyOrganizationsOrganizationUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useWatchlistListMyOrganizationsOrganizationUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWatchlistListMyOrganizationsOrganizationUsersQuery({
 *   variables: {
 *      first: // value for 'first'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useWatchlistListMyOrganizationsOrganizationUsersQuery(baseOptions?: Apollo.QueryHookOptions<WatchlistListMyOrganizationsOrganizationUsersQuery, WatchlistListMyOrganizationsOrganizationUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<WatchlistListMyOrganizationsOrganizationUsersQuery, WatchlistListMyOrganizationsOrganizationUsersQueryVariables>(WatchlistListMyOrganizationsOrganizationUsersDocument, options);
      }
export function useWatchlistListMyOrganizationsOrganizationUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WatchlistListMyOrganizationsOrganizationUsersQuery, WatchlistListMyOrganizationsOrganizationUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<WatchlistListMyOrganizationsOrganizationUsersQuery, WatchlistListMyOrganizationsOrganizationUsersQueryVariables>(WatchlistListMyOrganizationsOrganizationUsersDocument, options);
        }
export type WatchlistListMyOrganizationsOrganizationUsersQueryHookResult = ReturnType<typeof useWatchlistListMyOrganizationsOrganizationUsersQuery>;
export type WatchlistListMyOrganizationsOrganizationUsersLazyQueryHookResult = ReturnType<typeof useWatchlistListMyOrganizationsOrganizationUsersLazyQuery>;
export type WatchlistListMyOrganizationsOrganizationUsersQueryResult = Apollo.QueryResult<WatchlistListMyOrganizationsOrganizationUsersQuery, WatchlistListMyOrganizationsOrganizationUsersQueryVariables>;
export const WatchlistListUserWatchlistsByWatchlistIdDocument = gql`
    query WatchlistListUserWatchlistsByWatchlistId($watchlistId: ID!, $first: Int, $after: String) {
  listUserWatchlistsByWatchlistId(
    watchlistId: $watchlistId
    first: $first
    after: $after
  ) {
    ...WatchlistUserWatchlistConnection
  }
}
    ${WatchlistUserWatchlistConnectionFragmentDoc}`;

/**
 * __useWatchlistListUserWatchlistsByWatchlistIdQuery__
 *
 * To run a query within a React component, call `useWatchlistListUserWatchlistsByWatchlistIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useWatchlistListUserWatchlistsByWatchlistIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWatchlistListUserWatchlistsByWatchlistIdQuery({
 *   variables: {
 *      watchlistId: // value for 'watchlistId'
 *      first: // value for 'first'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useWatchlistListUserWatchlistsByWatchlistIdQuery(baseOptions: Apollo.QueryHookOptions<WatchlistListUserWatchlistsByWatchlistIdQuery, WatchlistListUserWatchlistsByWatchlistIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<WatchlistListUserWatchlistsByWatchlistIdQuery, WatchlistListUserWatchlistsByWatchlistIdQueryVariables>(WatchlistListUserWatchlistsByWatchlistIdDocument, options);
      }
export function useWatchlistListUserWatchlistsByWatchlistIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WatchlistListUserWatchlistsByWatchlistIdQuery, WatchlistListUserWatchlistsByWatchlistIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<WatchlistListUserWatchlistsByWatchlistIdQuery, WatchlistListUserWatchlistsByWatchlistIdQueryVariables>(WatchlistListUserWatchlistsByWatchlistIdDocument, options);
        }
export type WatchlistListUserWatchlistsByWatchlistIdQueryHookResult = ReturnType<typeof useWatchlistListUserWatchlistsByWatchlistIdQuery>;
export type WatchlistListUserWatchlistsByWatchlistIdLazyQueryHookResult = ReturnType<typeof useWatchlistListUserWatchlistsByWatchlistIdLazyQuery>;
export type WatchlistListUserWatchlistsByWatchlistIdQueryResult = Apollo.QueryResult<WatchlistListUserWatchlistsByWatchlistIdQuery, WatchlistListUserWatchlistsByWatchlistIdQueryVariables>;
export const WatchlistListMyUserWatchlistsDocument = gql`
    query WatchlistListMyUserWatchlists($first: Int, $after: String) {
  listMyUserWatchlists(first: $first, after: $after) {
    ...WatchlistMyUserWatchlistConnection
  }
}
    ${WatchlistMyUserWatchlistConnectionFragmentDoc}`;

/**
 * __useWatchlistListMyUserWatchlistsQuery__
 *
 * To run a query within a React component, call `useWatchlistListMyUserWatchlistsQuery` and pass it any options that fit your needs.
 * When your component renders, `useWatchlistListMyUserWatchlistsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWatchlistListMyUserWatchlistsQuery({
 *   variables: {
 *      first: // value for 'first'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useWatchlistListMyUserWatchlistsQuery(baseOptions?: Apollo.QueryHookOptions<WatchlistListMyUserWatchlistsQuery, WatchlistListMyUserWatchlistsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<WatchlistListMyUserWatchlistsQuery, WatchlistListMyUserWatchlistsQueryVariables>(WatchlistListMyUserWatchlistsDocument, options);
      }
export function useWatchlistListMyUserWatchlistsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WatchlistListMyUserWatchlistsQuery, WatchlistListMyUserWatchlistsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<WatchlistListMyUserWatchlistsQuery, WatchlistListMyUserWatchlistsQueryVariables>(WatchlistListMyUserWatchlistsDocument, options);
        }
export type WatchlistListMyUserWatchlistsQueryHookResult = ReturnType<typeof useWatchlistListMyUserWatchlistsQuery>;
export type WatchlistListMyUserWatchlistsLazyQueryHookResult = ReturnType<typeof useWatchlistListMyUserWatchlistsLazyQuery>;
export type WatchlistListMyUserWatchlistsQueryResult = Apollo.QueryResult<WatchlistListMyUserWatchlistsQuery, WatchlistListMyUserWatchlistsQueryVariables>;
export const WatchlistGetPlayerBioDataByPlayerIdDocument = gql`
    query WatchlistGetPlayerBioDataByPlayerId($playerId: ID!) {
  getPlayerBioDataByPlayerId(playerId: $playerId) {
    ...WatchlistPlayerBioData
  }
}
    ${WatchlistPlayerBioDataFragmentDoc}`;

/**
 * __useWatchlistGetPlayerBioDataByPlayerIdQuery__
 *
 * To run a query within a React component, call `useWatchlistGetPlayerBioDataByPlayerIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useWatchlistGetPlayerBioDataByPlayerIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWatchlistGetPlayerBioDataByPlayerIdQuery({
 *   variables: {
 *      playerId: // value for 'playerId'
 *   },
 * });
 */
export function useWatchlistGetPlayerBioDataByPlayerIdQuery(baseOptions: Apollo.QueryHookOptions<WatchlistGetPlayerBioDataByPlayerIdQuery, WatchlistGetPlayerBioDataByPlayerIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<WatchlistGetPlayerBioDataByPlayerIdQuery, WatchlistGetPlayerBioDataByPlayerIdQueryVariables>(WatchlistGetPlayerBioDataByPlayerIdDocument, options);
      }
export function useWatchlistGetPlayerBioDataByPlayerIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WatchlistGetPlayerBioDataByPlayerIdQuery, WatchlistGetPlayerBioDataByPlayerIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<WatchlistGetPlayerBioDataByPlayerIdQuery, WatchlistGetPlayerBioDataByPlayerIdQueryVariables>(WatchlistGetPlayerBioDataByPlayerIdDocument, options);
        }
export type WatchlistGetPlayerBioDataByPlayerIdQueryHookResult = ReturnType<typeof useWatchlistGetPlayerBioDataByPlayerIdQuery>;
export type WatchlistGetPlayerBioDataByPlayerIdLazyQueryHookResult = ReturnType<typeof useWatchlistGetPlayerBioDataByPlayerIdLazyQuery>;
export type WatchlistGetPlayerBioDataByPlayerIdQueryResult = Apollo.QueryResult<WatchlistGetPlayerBioDataByPlayerIdQuery, WatchlistGetPlayerBioDataByPlayerIdQueryVariables>;
export const WatchlistListPlayerSeasonWeightedAvgMetricsDocument = gql`
    query WatchlistListPlayerSeasonWeightedAvgMetrics($playerId: ID!) {
  listPlayerSeasonWeightedAvgMetricsByPlayerId(playerId: $playerId) {
    ...WatchlistPlayerSeasonWeightedAvgMetrics
  }
}
    ${WatchlistPlayerSeasonWeightedAvgMetricsFragmentDoc}`;

/**
 * __useWatchlistListPlayerSeasonWeightedAvgMetricsQuery__
 *
 * To run a query within a React component, call `useWatchlistListPlayerSeasonWeightedAvgMetricsQuery` and pass it any options that fit your needs.
 * When your component renders, `useWatchlistListPlayerSeasonWeightedAvgMetricsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWatchlistListPlayerSeasonWeightedAvgMetricsQuery({
 *   variables: {
 *      playerId: // value for 'playerId'
 *   },
 * });
 */
export function useWatchlistListPlayerSeasonWeightedAvgMetricsQuery(baseOptions: Apollo.QueryHookOptions<WatchlistListPlayerSeasonWeightedAvgMetricsQuery, WatchlistListPlayerSeasonWeightedAvgMetricsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<WatchlistListPlayerSeasonWeightedAvgMetricsQuery, WatchlistListPlayerSeasonWeightedAvgMetricsQueryVariables>(WatchlistListPlayerSeasonWeightedAvgMetricsDocument, options);
      }
export function useWatchlistListPlayerSeasonWeightedAvgMetricsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WatchlistListPlayerSeasonWeightedAvgMetricsQuery, WatchlistListPlayerSeasonWeightedAvgMetricsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<WatchlistListPlayerSeasonWeightedAvgMetricsQuery, WatchlistListPlayerSeasonWeightedAvgMetricsQueryVariables>(WatchlistListPlayerSeasonWeightedAvgMetricsDocument, options);
        }
export type WatchlistListPlayerSeasonWeightedAvgMetricsQueryHookResult = ReturnType<typeof useWatchlistListPlayerSeasonWeightedAvgMetricsQuery>;
export type WatchlistListPlayerSeasonWeightedAvgMetricsLazyQueryHookResult = ReturnType<typeof useWatchlistListPlayerSeasonWeightedAvgMetricsLazyQuery>;
export type WatchlistListPlayerSeasonWeightedAvgMetricsQueryResult = Apollo.QueryResult<WatchlistListPlayerSeasonWeightedAvgMetricsQuery, WatchlistListPlayerSeasonWeightedAvgMetricsQueryVariables>;
export const WatchlistListWatchlistPlayersDocument = gql`
    query WatchlistListWatchlistPlayers($watchlistId: ID!, $sortBy: SortField, $sortOrder: OrderByDirection, $first: Int, $after: String) {
  listWatchlistPlayers(
    watchlistId: $watchlistId
    sortBy: $sortBy
    sortOrder: $sortOrder
    first: $first
    after: $after
  ) {
    ...WatchlistPlayerConnection
  }
}
    ${WatchlistPlayerConnectionFragmentDoc}`;

/**
 * __useWatchlistListWatchlistPlayersQuery__
 *
 * To run a query within a React component, call `useWatchlistListWatchlistPlayersQuery` and pass it any options that fit your needs.
 * When your component renders, `useWatchlistListWatchlistPlayersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWatchlistListWatchlistPlayersQuery({
 *   variables: {
 *      watchlistId: // value for 'watchlistId'
 *      sortBy: // value for 'sortBy'
 *      sortOrder: // value for 'sortOrder'
 *      first: // value for 'first'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useWatchlistListWatchlistPlayersQuery(baseOptions: Apollo.QueryHookOptions<WatchlistListWatchlistPlayersQuery, WatchlistListWatchlistPlayersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<WatchlistListWatchlistPlayersQuery, WatchlistListWatchlistPlayersQueryVariables>(WatchlistListWatchlistPlayersDocument, options);
      }
export function useWatchlistListWatchlistPlayersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WatchlistListWatchlistPlayersQuery, WatchlistListWatchlistPlayersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<WatchlistListWatchlistPlayersQuery, WatchlistListWatchlistPlayersQueryVariables>(WatchlistListWatchlistPlayersDocument, options);
        }
export type WatchlistListWatchlistPlayersQueryHookResult = ReturnType<typeof useWatchlistListWatchlistPlayersQuery>;
export type WatchlistListWatchlistPlayersLazyQueryHookResult = ReturnType<typeof useWatchlistListWatchlistPlayersLazyQuery>;
export type WatchlistListWatchlistPlayersQueryResult = Apollo.QueryResult<WatchlistListWatchlistPlayersQuery, WatchlistListWatchlistPlayersQueryVariables>;
export const WatchlistDeleteWatchlistDocument = gql`
    mutation WatchlistDeleteWatchlist($input: DeleteWatchlistInput!) {
  deleteWatchlist(input: $input) {
    ...WatchlistWatchlist
  }
}
    ${WatchlistWatchlistFragmentDoc}`;
export type WatchlistDeleteWatchlistMutationFn = Apollo.MutationFunction<WatchlistDeleteWatchlistMutation, WatchlistDeleteWatchlistMutationVariables>;

/**
 * __useWatchlistDeleteWatchlistMutation__
 *
 * To run a mutation, you first call `useWatchlistDeleteWatchlistMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useWatchlistDeleteWatchlistMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [watchlistDeleteWatchlistMutation, { data, loading, error }] = useWatchlistDeleteWatchlistMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useWatchlistDeleteWatchlistMutation(baseOptions?: Apollo.MutationHookOptions<WatchlistDeleteWatchlistMutation, WatchlistDeleteWatchlistMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<WatchlistDeleteWatchlistMutation, WatchlistDeleteWatchlistMutationVariables>(WatchlistDeleteWatchlistDocument, options);
      }
export type WatchlistDeleteWatchlistMutationHookResult = ReturnType<typeof useWatchlistDeleteWatchlistMutation>;
export type WatchlistDeleteWatchlistMutationResult = Apollo.MutationResult<WatchlistDeleteWatchlistMutation>;
export type WatchlistDeleteWatchlistMutationOptions = Apollo.BaseMutationOptions<WatchlistDeleteWatchlistMutation, WatchlistDeleteWatchlistMutationVariables>;
export const WatchlistUpdateWatchlistDocument = gql`
    mutation WatchlistUpdateWatchlist($input: UpdateWatchlistInput!) {
  updateWatchlist(input: $input) {
    ...WatchlistWatchlist
  }
}
    ${WatchlistWatchlistFragmentDoc}`;
export type WatchlistUpdateWatchlistMutationFn = Apollo.MutationFunction<WatchlistUpdateWatchlistMutation, WatchlistUpdateWatchlistMutationVariables>;

/**
 * __useWatchlistUpdateWatchlistMutation__
 *
 * To run a mutation, you first call `useWatchlistUpdateWatchlistMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useWatchlistUpdateWatchlistMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [watchlistUpdateWatchlistMutation, { data, loading, error }] = useWatchlistUpdateWatchlistMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useWatchlistUpdateWatchlistMutation(baseOptions?: Apollo.MutationHookOptions<WatchlistUpdateWatchlistMutation, WatchlistUpdateWatchlistMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<WatchlistUpdateWatchlistMutation, WatchlistUpdateWatchlistMutationVariables>(WatchlistUpdateWatchlistDocument, options);
      }
export type WatchlistUpdateWatchlistMutationHookResult = ReturnType<typeof useWatchlistUpdateWatchlistMutation>;
export type WatchlistUpdateWatchlistMutationResult = Apollo.MutationResult<WatchlistUpdateWatchlistMutation>;
export type WatchlistUpdateWatchlistMutationOptions = Apollo.BaseMutationOptions<WatchlistUpdateWatchlistMutation, WatchlistUpdateWatchlistMutationVariables>;
export const WatchlistRemovePlayerFromWatchlistDocument = gql`
    mutation WatchlistRemovePlayerFromWatchlist($input: RemovePlayerFromWatchlistInput!) {
  removePlayerFromWatchlist(input: $input) {
    ...WatchlistWatchlist
  }
}
    ${WatchlistWatchlistFragmentDoc}`;
export type WatchlistRemovePlayerFromWatchlistMutationFn = Apollo.MutationFunction<WatchlistRemovePlayerFromWatchlistMutation, WatchlistRemovePlayerFromWatchlistMutationVariables>;

/**
 * __useWatchlistRemovePlayerFromWatchlistMutation__
 *
 * To run a mutation, you first call `useWatchlistRemovePlayerFromWatchlistMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useWatchlistRemovePlayerFromWatchlistMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [watchlistRemovePlayerFromWatchlistMutation, { data, loading, error }] = useWatchlistRemovePlayerFromWatchlistMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useWatchlistRemovePlayerFromWatchlistMutation(baseOptions?: Apollo.MutationHookOptions<WatchlistRemovePlayerFromWatchlistMutation, WatchlistRemovePlayerFromWatchlistMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<WatchlistRemovePlayerFromWatchlistMutation, WatchlistRemovePlayerFromWatchlistMutationVariables>(WatchlistRemovePlayerFromWatchlistDocument, options);
      }
export type WatchlistRemovePlayerFromWatchlistMutationHookResult = ReturnType<typeof useWatchlistRemovePlayerFromWatchlistMutation>;
export type WatchlistRemovePlayerFromWatchlistMutationResult = Apollo.MutationResult<WatchlistRemovePlayerFromWatchlistMutation>;
export type WatchlistRemovePlayerFromWatchlistMutationOptions = Apollo.BaseMutationOptions<WatchlistRemovePlayerFromWatchlistMutation, WatchlistRemovePlayerFromWatchlistMutationVariables>;
export const WatchlistUpdateUserWatchlistPositionDocument = gql`
    mutation WatchlistUpdateUserWatchlistPosition($input: UpdateUserWatchlistPositionInput!) {
  updateUserWatchlistPosition(input: $input) {
    ...WatchlistWatchlist
  }
}
    ${WatchlistWatchlistFragmentDoc}`;
export type WatchlistUpdateUserWatchlistPositionMutationFn = Apollo.MutationFunction<WatchlistUpdateUserWatchlistPositionMutation, WatchlistUpdateUserWatchlistPositionMutationVariables>;

/**
 * __useWatchlistUpdateUserWatchlistPositionMutation__
 *
 * To run a mutation, you first call `useWatchlistUpdateUserWatchlistPositionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useWatchlistUpdateUserWatchlistPositionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [watchlistUpdateUserWatchlistPositionMutation, { data, loading, error }] = useWatchlistUpdateUserWatchlistPositionMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useWatchlistUpdateUserWatchlistPositionMutation(baseOptions?: Apollo.MutationHookOptions<WatchlistUpdateUserWatchlistPositionMutation, WatchlistUpdateUserWatchlistPositionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<WatchlistUpdateUserWatchlistPositionMutation, WatchlistUpdateUserWatchlistPositionMutationVariables>(WatchlistUpdateUserWatchlistPositionDocument, options);
      }
export type WatchlistUpdateUserWatchlistPositionMutationHookResult = ReturnType<typeof useWatchlistUpdateUserWatchlistPositionMutation>;
export type WatchlistUpdateUserWatchlistPositionMutationResult = Apollo.MutationResult<WatchlistUpdateUserWatchlistPositionMutation>;
export type WatchlistUpdateUserWatchlistPositionMutationOptions = Apollo.BaseMutationOptions<WatchlistUpdateUserWatchlistPositionMutation, WatchlistUpdateUserWatchlistPositionMutationVariables>;
export const WatchlistAddPlayerToWatchlistDocument = gql`
    mutation WatchlistAddPlayerToWatchlist($input: AddPlayerToWatchlistInput!) {
  addPlayerToWatchlist(input: $input) {
    ...WatchlistWatchlist
  }
}
    ${WatchlistWatchlistFragmentDoc}`;
export type WatchlistAddPlayerToWatchlistMutationFn = Apollo.MutationFunction<WatchlistAddPlayerToWatchlistMutation, WatchlistAddPlayerToWatchlistMutationVariables>;

/**
 * __useWatchlistAddPlayerToWatchlistMutation__
 *
 * To run a mutation, you first call `useWatchlistAddPlayerToWatchlistMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useWatchlistAddPlayerToWatchlistMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [watchlistAddPlayerToWatchlistMutation, { data, loading, error }] = useWatchlistAddPlayerToWatchlistMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useWatchlistAddPlayerToWatchlistMutation(baseOptions?: Apollo.MutationHookOptions<WatchlistAddPlayerToWatchlistMutation, WatchlistAddPlayerToWatchlistMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<WatchlistAddPlayerToWatchlistMutation, WatchlistAddPlayerToWatchlistMutationVariables>(WatchlistAddPlayerToWatchlistDocument, options);
      }
export type WatchlistAddPlayerToWatchlistMutationHookResult = ReturnType<typeof useWatchlistAddPlayerToWatchlistMutation>;
export type WatchlistAddPlayerToWatchlistMutationResult = Apollo.MutationResult<WatchlistAddPlayerToWatchlistMutation>;
export type WatchlistAddPlayerToWatchlistMutationOptions = Apollo.BaseMutationOptions<WatchlistAddPlayerToWatchlistMutation, WatchlistAddPlayerToWatchlistMutationVariables>;
export const WatchlistUpdateWatchlistPlayerPositionDocument = gql`
    mutation WatchlistUpdateWatchlistPlayerPosition($input: UpdateWatchlistPlayerPositionInput!) {
  updateWatchlistPlayerPosition(input: $input) {
    ...WatchlistWatchlist
  }
}
    ${WatchlistWatchlistFragmentDoc}`;
export type WatchlistUpdateWatchlistPlayerPositionMutationFn = Apollo.MutationFunction<WatchlistUpdateWatchlistPlayerPositionMutation, WatchlistUpdateWatchlistPlayerPositionMutationVariables>;

/**
 * __useWatchlistUpdateWatchlistPlayerPositionMutation__
 *
 * To run a mutation, you first call `useWatchlistUpdateWatchlistPlayerPositionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useWatchlistUpdateWatchlistPlayerPositionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [watchlistUpdateWatchlistPlayerPositionMutation, { data, loading, error }] = useWatchlistUpdateWatchlistPlayerPositionMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useWatchlistUpdateWatchlistPlayerPositionMutation(baseOptions?: Apollo.MutationHookOptions<WatchlistUpdateWatchlistPlayerPositionMutation, WatchlistUpdateWatchlistPlayerPositionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<WatchlistUpdateWatchlistPlayerPositionMutation, WatchlistUpdateWatchlistPlayerPositionMutationVariables>(WatchlistUpdateWatchlistPlayerPositionDocument, options);
      }
export type WatchlistUpdateWatchlistPlayerPositionMutationHookResult = ReturnType<typeof useWatchlistUpdateWatchlistPlayerPositionMutation>;
export type WatchlistUpdateWatchlistPlayerPositionMutationResult = Apollo.MutationResult<WatchlistUpdateWatchlistPlayerPositionMutation>;
export type WatchlistUpdateWatchlistPlayerPositionMutationOptions = Apollo.BaseMutationOptions<WatchlistUpdateWatchlistPlayerPositionMutation, WatchlistUpdateWatchlistPlayerPositionMutationVariables>;
export const WatchListUpdateWatchListPlayerPositionsDocument = gql`
    mutation WatchListUpdateWatchListPlayerPositions($input: UpdateWatchlistPlayerPositionsInput!) {
  updateWatchlistPlayerPositions(input: $input) {
    ...WatchlistWatchlist
  }
}
    ${WatchlistWatchlistFragmentDoc}`;
export type WatchListUpdateWatchListPlayerPositionsMutationFn = Apollo.MutationFunction<WatchListUpdateWatchListPlayerPositionsMutation, WatchListUpdateWatchListPlayerPositionsMutationVariables>;

/**
 * __useWatchListUpdateWatchListPlayerPositionsMutation__
 *
 * To run a mutation, you first call `useWatchListUpdateWatchListPlayerPositionsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useWatchListUpdateWatchListPlayerPositionsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [watchListUpdateWatchListPlayerPositionsMutation, { data, loading, error }] = useWatchListUpdateWatchListPlayerPositionsMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useWatchListUpdateWatchListPlayerPositionsMutation(baseOptions?: Apollo.MutationHookOptions<WatchListUpdateWatchListPlayerPositionsMutation, WatchListUpdateWatchListPlayerPositionsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<WatchListUpdateWatchListPlayerPositionsMutation, WatchListUpdateWatchListPlayerPositionsMutationVariables>(WatchListUpdateWatchListPlayerPositionsDocument, options);
      }
export type WatchListUpdateWatchListPlayerPositionsMutationHookResult = ReturnType<typeof useWatchListUpdateWatchListPlayerPositionsMutation>;
export type WatchListUpdateWatchListPlayerPositionsMutationResult = Apollo.MutationResult<WatchListUpdateWatchListPlayerPositionsMutation>;
export type WatchListUpdateWatchListPlayerPositionsMutationOptions = Apollo.BaseMutationOptions<WatchListUpdateWatchListPlayerPositionsMutation, WatchListUpdateWatchListPlayerPositionsMutationVariables>;
export const WatchlistCreateUserWatchlistDocument = gql`
    mutation WatchlistCreateUserWatchlist($input: CreateUserWatchlistInput!) {
  createUserWatchlist(input: $input) {
    ...WatchlistUserWatchlist
  }
}
    ${WatchlistUserWatchlistFragmentDoc}`;
export type WatchlistCreateUserWatchlistMutationFn = Apollo.MutationFunction<WatchlistCreateUserWatchlistMutation, WatchlistCreateUserWatchlistMutationVariables>;

/**
 * __useWatchlistCreateUserWatchlistMutation__
 *
 * To run a mutation, you first call `useWatchlistCreateUserWatchlistMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useWatchlistCreateUserWatchlistMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [watchlistCreateUserWatchlistMutation, { data, loading, error }] = useWatchlistCreateUserWatchlistMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useWatchlistCreateUserWatchlistMutation(baseOptions?: Apollo.MutationHookOptions<WatchlistCreateUserWatchlistMutation, WatchlistCreateUserWatchlistMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<WatchlistCreateUserWatchlistMutation, WatchlistCreateUserWatchlistMutationVariables>(WatchlistCreateUserWatchlistDocument, options);
      }
export type WatchlistCreateUserWatchlistMutationHookResult = ReturnType<typeof useWatchlistCreateUserWatchlistMutation>;
export type WatchlistCreateUserWatchlistMutationResult = Apollo.MutationResult<WatchlistCreateUserWatchlistMutation>;
export type WatchlistCreateUserWatchlistMutationOptions = Apollo.BaseMutationOptions<WatchlistCreateUserWatchlistMutation, WatchlistCreateUserWatchlistMutationVariables>;
export const WatchlistDeleteUserWatchlistDocument = gql`
    mutation WatchlistDeleteUserWatchlist($input: DeleteUserWatchlistInput!) {
  deleteUserWatchlist(input: $input) {
    ...WatchlistUserWatchlist
  }
}
    ${WatchlistUserWatchlistFragmentDoc}`;
export type WatchlistDeleteUserWatchlistMutationFn = Apollo.MutationFunction<WatchlistDeleteUserWatchlistMutation, WatchlistDeleteUserWatchlistMutationVariables>;

/**
 * __useWatchlistDeleteUserWatchlistMutation__
 *
 * To run a mutation, you first call `useWatchlistDeleteUserWatchlistMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useWatchlistDeleteUserWatchlistMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [watchlistDeleteUserWatchlistMutation, { data, loading, error }] = useWatchlistDeleteUserWatchlistMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useWatchlistDeleteUserWatchlistMutation(baseOptions?: Apollo.MutationHookOptions<WatchlistDeleteUserWatchlistMutation, WatchlistDeleteUserWatchlistMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<WatchlistDeleteUserWatchlistMutation, WatchlistDeleteUserWatchlistMutationVariables>(WatchlistDeleteUserWatchlistDocument, options);
      }
export type WatchlistDeleteUserWatchlistMutationHookResult = ReturnType<typeof useWatchlistDeleteUserWatchlistMutation>;
export type WatchlistDeleteUserWatchlistMutationResult = Apollo.MutationResult<WatchlistDeleteUserWatchlistMutation>;
export type WatchlistDeleteUserWatchlistMutationOptions = Apollo.BaseMutationOptions<WatchlistDeleteUserWatchlistMutation, WatchlistDeleteUserWatchlistMutationVariables>;
export const ListFeatureFlagsDocument = gql`
    query ListFeatureFlags {
  listFeatureFlags
}
    `;

/**
 * __useListFeatureFlagsQuery__
 *
 * To run a query within a React component, call `useListFeatureFlagsQuery` and pass it any options that fit your needs.
 * When your component renders, `useListFeatureFlagsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListFeatureFlagsQuery({
 *   variables: {
 *   },
 * });
 */
export function useListFeatureFlagsQuery(baseOptions?: Apollo.QueryHookOptions<ListFeatureFlagsQuery, ListFeatureFlagsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListFeatureFlagsQuery, ListFeatureFlagsQueryVariables>(ListFeatureFlagsDocument, options);
      }
export function useListFeatureFlagsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListFeatureFlagsQuery, ListFeatureFlagsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListFeatureFlagsQuery, ListFeatureFlagsQueryVariables>(ListFeatureFlagsDocument, options);
        }
export type ListFeatureFlagsQueryHookResult = ReturnType<typeof useListFeatureFlagsQuery>;
export type ListFeatureFlagsLazyQueryHookResult = ReturnType<typeof useListFeatureFlagsLazyQuery>;
export type ListFeatureFlagsQueryResult = Apollo.QueryResult<ListFeatureFlagsQuery, ListFeatureFlagsQueryVariables>;