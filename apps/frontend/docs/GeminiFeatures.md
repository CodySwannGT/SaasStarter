# Gemini Features

## Feature: Authentication and Account Management

### Scenario: Successful user sign-in

```gherkin
Given the user enters their phone number
When the user enters the correct OTP
Then the user is successfully signed in
And an account is created if one does not exist
```

### Scenario: OTP error handling

```gherkin
Given the user enters an incorrect OTP
Then the user sees an error message indicating the OTP is incorrect
```

### Scenario: User lockout after three incorrect OTP attempts

```gherkin
Given the user has entered an incorrect OTP two consecutive times
When the user enters a third incorrect OTP
Then the user is locked out for one hour
```

### Scenario: User signs out

```gherkin
Given the user is signed in
When the user chooses to sign out
Then the user is successfully signed out
```

### Scenario: User deactivates their account

```gherkin
Given the user chooses to deactivate their account
When the user confirms deactivation
Then the user is removed from all organizations
And prevented from signing back in
```

### Scenario: Token handling on sign-in

```gherkin
Given the user signs in successfully
Then the app receives idToken, accessToken, and refreshToken
And the id and access tokens are valid for 30 minutes
And the refresh token is valid for one year
```

### Scenario: Automatic token refresh

```gherkin
Given an API call fails due to expired tokens
Then the app automatically uses the refresh token to retrieve new access and id tokens
```

### Scenario: Refresh token failure

```gherkin
Given a token refresh attempt fails
Then the user is automatically logged out
```

## Feature: First-Time User Onboarding

### Scenario: Required onboarding information

```gherkin
Given it is the user's first time signing in
Then the user must enter their name, job function, and email
```

## Feature: Invitations

### Scenario: Auto-accept invitation on first sign-in

```gherkin
Given the user has a pending organization invitation
When the user signs in for the first time
Then the invitation is automatically accepted
And the user joins the organization with the invited role
```

### Scenario: Manual acceptance or rejection of invitation

```gherkin
Given the user receives an organization invitation while signed in
Then the user can manually accept or reject the invitation
```

### Scenario: Viewing sent invitations

```gherkin
Given the user has sent invitations
When viewing sent invitations
Then the user sees a list of invitations they have sent
```

### Scenario: Canceling an invitation

```gherkin
Given the user has sent an invitation that has not been accepted
Then the user can cancel the invitation
```

## Feature: Organization Management

### Scenario: User switches organizations

```gherkin
Given the user belongs to multiple organizations excluding "Default"
Then the user can manually switch organizations
```

### Scenario: Global admin switches organizations

```gherkin
Given the user is a global admin
Then the user can switch to any organization
```

### Scenario: Admin updates organization details

```gherkin
Given the user is an admin
Then the user can update the organization's name, sport, currency, or scouting report URL
```

### Scenario: Selecting relevant leagues and teams

```gherkin
Given the user is part of an organization
Then the user can select leagues and teams relevant to their organization
```

### Scenario: Managing member statuses

```gherkin
Given the user is part of an organization
Then the user can set other members as active or inactive
```

## Feature: Watchlist Management

### Scenario: Default watchlist creation

```gherkin
Given a user joins an organization
Then an empty default watchlist is created
```

### Scenario: Adding a new watchlist

```gherkin
Given a user owns fewer than 20 watchlists
Then the user can create a new watchlist
```

### Scenario: Watchlist creation limit

```gherkin
Given a user owns 20 watchlists
When attempting to create another watchlist
Then an error indicating the watchlist limit is displayed
```

### Scenario: Renaming watchlists

```gherkin
Given the user owns a watchlist
Then the user can rename that watchlist
```

### Scenario: Deleting watchlists

```gherkin
Given the user owns a watchlist
Then the user can delete that watchlist
```

### Scenario: Collaborator permissions

```gherkin
Given the user is a collaborator on a watchlist
Then the user can view but not modify, rename, or delete the watchlist
```

## Feature: Watchlist Player Management

### Scenario: Adding players to a watchlist

```gherkin
Given the user owns a watchlist
Then the user can add players to the watchlist
```

### Scenario: Removing players from a watchlist

```gherkin
Given the user owns a watchlist
Then the user can remove players from the watchlist
```

## Feature: Player Filtering and Sorting

### Scenario: Filtering players

```gherkin
Given the user views players
Then the user can filter players by:
```

- Role/position
- League
- Age range
- Cost range
- Months remaining on contract
- VAEP
- GPM
- Player Style Fit
- Team Style Fit
- GPR
- Carrying, Dribbling, Passing, Shooting
- GK Passing, Positioning, Shot Stopping scores

### Scenario: Sorting players

```gherkin
Given the user views players
Then the user can sort by:
```

- Similarity
- GPR
- Player Style
- Team Style
- Carrying, Dribbling, Passing, Shooting
- GK Passing, Positioning, Shot Stopping
- Transfer Value
- Contract duration

In ascending or descending order

### Scenario: Reset filters

```gherkin
Given filters are applied
Then the user can reset filters to default
```

### Scenario: Viewing active filters summary

```gherkin
Given the user applies filters
Then the user sees a human-readable summary of applied filters
```

## Feature: Player Notes

### Scenario: Leaving notes on players

```gherkin
Given the user views a player
Then the user can leave notes marked private or shared
```

### Scenario: Viewing shared notes

```gherkin
Given a shared note exists for a player
Then other users in the organization can view that note
```

## Feature: Notifications

### Scenario: Player knowledge updates

```gherkin
Given new content is added to a player's knowledge base
Then users with that player on a watchlist receive notifications
```

## Feature: Player Knowledge Base (AI Features)

### Scenario: AI-generated player summaries

```gherkin
Given player data exists in the knowledge base
Then users viewing the player page see an AI-generated summary and suggested questions
```

### Scenario: AI-streamed responses

```gherkin
Given the user selects or types an AI-suggested question
Then the user receives a streamed AI-generated answer
```

### Scenario: Free-typed AI questions

```gherkin
Given the user asks a free-typed question about a player
Then the user receives an AI-generated response
```

## Feature: Player Details and Similar Players

### Scenario: Viewing player stats and charts

```gherkin
Given the user views a player
Then the user sees detailed stats including position, team, nationality, transfer value, contract duration, style scores, performance history, and skill-specific charts
```

### Scenario: Viewing and sorting similar players

```gherkin
Given the user views a player
Then the user can see and sort a list of similar players by criteria listed above
```

## Feature: "New for You" (placeholders)

### Scenario: Viewing upside potential changes

```gherkin
Given the user views the "New for You" screen
Then the user sees players with recent upside potential changes
```

### Scenario: Viewing "Roster upgrades" (placeholder)

```gherkin
Given the user views the "New for You" screen
Then the user sees placeholder content for "Roster upgrades"
```

### Scenario: Viewing "Roster squad depth" (placeholder)

```gherkin
Given the user views the "New for You" screen
Then the user sees placeholder content for "Roster squad depth"
```

## Feature: Developer Integrations

### Scenario: Adding reports via GraphQL API

```gherkin
Given a developer has player data
Then the developer can submit reports through a GraphQL API to update a player's knowledge base
```

### Scenario: Adding scouting reports via form.io

```gherkin
Given a user is part of an organization
Then the user can add a scouting report via form.io to the player's knowledge base
```

## Feature: Player Recommendations ("New for You")

### Scenario: Viewing recommendation workflows

```gherkin
Given the user opens the "New for You" section
Then the user sees selectable recommendation workflows at the top, including:
```

- Upside Potential
- Roster Performance
- Roster Depth

### Scenario: Selecting a recommendation workflow

```gherkin
Given the user selects a recommendation workflow
Then the user sees a ranked list of recommended players for the selected workflow
```

### Scenario: Viewing recommended player's details

```gherkin
Given the user selects a recommended player
Then the user sees that player's detailed page
```

### Scenario: Indicating numeric weekly ranking changes

```gherkin
Given a player's recommendation ranking has changed since last week
Then the player's listing displays the numeric difference and clearly indicates whether the change is positive or negative
```

### Scenario: Adding recommended players to multiple watchlists

```gherkin
Given the user swipes right on a recommended player
Then the user sees a "+" button
When the user taps the "+" button
Then the user can select one or more watchlists to add the player to simultaneously
```

### Scenario: Permanently removing recommended players

```gherkin
Given the user swipes left on a recommended player
Then that player is permanently removed from future recommendation workflows
And immediately replaced by the next highest-ranked player not previously displayed
```
