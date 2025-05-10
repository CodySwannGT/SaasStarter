# Lint Issues To Be Fixed

This checklist represents all the files with linting issues that need to be fixed. This is a transition step to gradually clean up the codebase.

## Common Issues

The following common issues have been temporarily set to warnings:

- `react-perf/jsx-no-new-object-as-prop`: Objects created in JSX props cause unnecessary re-renders
- `react-perf/jsx-no-new-array-as-prop`: Arrays created in JSX props cause unnecessary re-renders
- `react-perf/jsx-no-new-function-as-prop`: Functions created in JSX props cause unnecessary re-renders
- `@typescript-eslint/naming-convention`: Variable/parameter names must follow conventions
- `eslint-comments/*`: Issues with eslint disable comments
- `sonarjs/*`: Code quality issues
- `max-lines`: Files exceeding the 200 line limit

## Files To Fix

### App Directory

- [ ] app/\_layout.tsx
- [ ] app/(root)/\_layout.tsx
- [ ] app/(root)/invitations/\_layout.tsx
- [ ] app/(root)/organizations/\_layout.tsx
- [ ] app/(root)/player-roster/\_layout.tsx
- [ ] app/(root)/players/[playerId]/matches/[matchId]/intake.tsx
- [ ] app/(root)/received-invitations/\_layout.tsx
- [ ] app/(root)/users/\_layout.tsx

### Components Directory

- [ ] components/AppleStyleSwipeableRow/AppleStyleSwipeableRowView.tsx
- [ ] components/Badge/BadgeView.tsx
- [ ] components/CompositeMetric/CompositeMetricView.tsx
- [ ] components/CustomSelect/CustomSelectView.web.tsx
- [ ] components/DraggableList/DraggableListView.tsx
- [ ] components/FilterContent/FilterContainer.tsx
- [ ] components/FilterContent/FilterView.tsx
- [ ] components/FilterContent/components/MultiSelect/MultiSelectContainer.tsx
- [ ] components/FilterContent/components/MultiSelect/MultiSelectView.tsx
- [ ] components/FilterContent/components/MultiSlider/MultiSliderView.tsx
- [ ] components/FilterContent/components/Slider/SliderView.tsx
- [ ] components/FilterContent/components/SliderCustomLabel/SliderCustomLabel.tsx
- [ ] components/FilterContent/useFilterValues.ts
- [ ] components/FilterContent/useMultiSlider.ts
- [ ] components/FilterResults/FilterResultsView.tsx
- [ ] components/HeaderChat/HeaderChatContainer.tsx
- [ ] components/HeaderPopover/HeaderPopoverContainer.tsx
- [ ] components/HeaderPopover/HeaderPopoverView.tsx
- [ ] components/InfoPlayer/InfoPlayerView.tsx
- [ ] components/Markdown/MarkdownView.tsx
- [ ] components/ModalFilter/ModalFilterView.tsx
- [ ] components/PlayerDetail/PlayerDetailView.tsx
- [ ] components/PlayerDetail/components/CategoryMetricChart/CategoryMetricChartView.tsx
- [ ] components/PlayerDetail/components/CenterColumn/CenterColumnContainer.tsx
- [ ] components/PlayerDetail/components/Chat/ChatContainer.tsx
- [ ] components/PlayerDetail/components/Chat/ChatView.tsx
- [ ] components/PlayerDetail/components/Header/HeaderView.tsx
- [ ] components/PlayerDetail/components/HeaderPlayer/HeaderPlayerContainer.tsx
- [ ] components/PlayerDetail/components/LeftColumn/LeftColumnView.tsx
- [ ] components/PlayerDetail/components/ManageActionSheet/ManageActionSheetView.tsx
- [ ] components/PlayerDetail/components/PopoverMenu/PopoverMenuView.tsx
- [ ] components/PlayerDetail/components/RightColumn/RightColumnContainer.tsx
- [ ] components/PlayerDetail/components/RightColumn/RightColumnView.tsx
- [ ] components/PlayerDetail/components/Share/ShareView.tsx
- [ ] components/PlayerDetail/components/ShareActionItem/ShareActionItemContainer.tsx
- [ ] components/PlayerDetail/components/ShareActionItem/ShareActionItemView.native.tsx
- [ ] components/PlayerDetail/components/ShareActionItem/ShareActionItemView.web.tsx
- [ ] components/PlayerDetail/components/WatchlistItem/WatchlistItemContainer.tsx
- [ ] components/PlayerDetail/utils/handleAnnotatedTextAsMarkdown.ts
- [ ] components/PlayerItem/PlayerItemContainer.tsx
- [ ] components/PlayerItem/PlayerItemView.tsx
- [ ] components/PlayerList/PlayerListView.tsx
- [ ] components/SearchResultsItem/SearchResultsItemContainer.tsx
- [ ] components/SearchResultsItem/SearchResultsItemView.tsx
- [ ] components/Searchbar/SearchbarView.tsx
- [ ] components/SelectionSortPopover/SelectionSortPopoverView.tsx
- [ ] components/WatchlistAddRemoveButton/WatchlistAddRemoveButtonView.tsx
- [ ] components/elements/CustomHeader/CustomHeaderContainer.tsx
- [ ] components/elements/Skeleton/SkeletonList/SkeletonListContainer.tsx
- [ ] components/elements/Skeleton/SkeletonPlaceholder/SkeletonPlaceholderView.tsx
- [ ] components/elements/Skeleton/components/SkeletonFilterRole/SkeletonFilterRoleView.tsx
- [ ] components/elements/StandardHeaderBackButton.tsx

### Config Directory

- [ ] config/WebsocketService.ts
- [ ] config/constants.ts

### Features Directory

- [ ] features/auth/components/CountryCodes/CountryCodesView.tsx
- [ ] features/auth/components/Screen/ScreenView.tsx
- [ ] features/auth/hooks/useIsAdmin.ts
- [ ] features/auth/providers/Auth.tsx
- [ ] features/auth/providers/Gate.tsx
- [ ] features/auth/screens/ConfirmCode/ConfirmCodeContainer.tsx
- [ ] features/auth/screens/ConfirmCode/ConfirmCodeView.tsx
- [ ] features/auth/screens/Register/RegisterContainer.tsx
- [ ] features/auth/screens/Register/RegisterView.tsx
- [ ] features/auth/screens/SignIn/SignInContainer.tsx
- [ ] features/auth/screens/SignIn/SignInView.tsx
- [ ] features/compare-players/components/ChartComparison/ChartComparisonView.tsx
- [ ] features/compare-players/components/DropDownPlayer/DropDownPlayerView.tsx
- [ ] features/compare-players/components/ListPlayerCompare/ListPlayerCompareContainer.tsx
- [ ] features/compare-players/components/ListPlayerCompare/ListPlayerCompareView.tsx
- [ ] features/compare-players/components/MetricsGrid/MetricsGridView.tsx
- [ ] features/compare-players/screens/Main/MainContainer.tsx
- [ ] features/invitations/components/OrganizationForm/OrganizationFormContainer.tsx
- [ ] features/invitations/components/OrganizationForm/OrganizationFormView.tsx
- [ ] features/invitations/components/ReceivedInvitationItem/ReceivedInvitationItemContainer.tsx
- [ ] features/invitations/components/UserItem/UserItemContainer.tsx
- [ ] features/invitations/screens/CreateInvitation/CreateInvitationContainer.tsx
- [ ] features/invitations/screens/CreateInvitation/CreateInvitationView.tsx
- [ ] features/invitations/screens/CreateOrganization/CreateOrganizationContainer.tsx
- [ ] features/invitations/screens/Main/MainView.tsx
- [ ] features/invitations/screens/Organizations/OrganizationsView.tsx
- [ ] features/invitations/screens/ReceivedInvitations/ReceivedInvitationsView.tsx
- [ ] features/invitations/screens/Users/UsersView.tsx
- [ ] features/notes/components/ButtonSubmit/ButtonSubmitView.tsx
- [ ] features/notes/components/CheckNote/CheckNoteView.tsx
- [ ] features/notes/components/NotesActionsheet/NotesActionsheetContainer.tsx
- [ ] features/notes/components/NotesActionsheet/NotesActionsheetView.tsx
- [ ] features/notes/components/NotesForm/NotesFormContainer.tsx
- [ ] features/notes/components/NotesList/NotesListContainer.native.tsx
- [ ] features/notes/components/NotesList/NotesListContainer.web.tsx
- [ ] features/notes/components/NotesList/NotesListView.native.tsx
- [ ] features/notes/components/NotesList/NotesListView.web.tsx
- [ ] features/notes/components/TextInputField/TextInputFieldView.tsx
- [ ] features/player-detail/screens/Main/MainContainer.tsx
- [ ] features/player-filter/screens/Main/MainView.tsx
- [ ] features/player-search/screens/Main/MainView.tsx
- [ ] features/recommendations/components/InfoRecommendation/InfoRecommendationView.tsx
- [ ] features/recommendations/components/RecommendationList/RecommendationListView.tsx
- [ ] features/recommendations/components/RecommendationPlayer/RecommendationPlayerContainer.tsx
- [ ] features/recommendations/components/RecommendationsBottomSheet/RecommendationsBottomSheetView.tsx
- [ ] features/recommendations/components/RecommendationsCategorySelection/RecommendationsCategorySelectionContainer.tsx
- [ ] features/recommendations/components/RecommendationsCategorySelection/RecommendationsCategorySelectionView.tsx
- [ ] features/reports/components/ReportItem/ReportItemView.tsx
- [ ] features/reports/screens/Main/MainView.tsx
- [ ] features/reports/screens/Matches/MatchesContainer.tsx
- [ ] features/reports/screens/Matches/MatchesView.tsx
- [ ] features/roster-management/components/LeagueItem/LeagueItemView.tsx
- [ ] features/roster-management/components/TeamItem/TeamItemView.tsx
- [ ] features/roster-management/screens/Leagues/LeaguesContainer.tsx
- [ ] features/roster-management/screens/Leagues/LeaguesView.tsx
- [ ] features/roster-management/screens/Main/MainContainer.tsx
- [ ] features/roster-management/screens/Main/MainView.native.tsx
- [ ] features/roster-management/screens/Main/MainView.web.tsx
- [ ] features/roster-management/screens/Teams/TeamsContainer.tsx
- [ ] features/roster-management/screens/Teams/TeamsView.tsx
- [ ] features/shadow-team/components/CreateShadowTeamForm/CreateShadowTeamFormView.tsx
- [ ] features/shadow-team/components/DraggableList/DraggableListContainer.tsx
- [ ] features/shadow-team/components/ItemPlayer/ItemPlayerView.tsx
- [ ] features/shadow-team/components/ModalMorePlayer/ModalMorePlayerView.tsx
- [ ] features/shadow-team/components/ModalPlayer/ModalPlayerView.tsx
- [ ] features/shadow-team/components/ModalSelectPlayer/ModalSelectPlayerView.tsx
- [ ] features/shadow-team/components/MorePlayerItem/MorePlayerItemView.tsx
- [ ] features/shadow-team/components/PlayerItem/PlayerItemView.tsx
- [ ] features/shadow-team/components/RightShadowTeam/RightShadowTeamView.tsx
- [ ] features/shadow-team/components/SelectPlayerItem/SelectPlayerItemView.tsx
- [ ] features/shadow-team/components/ShadowTeamItem/ShadowTeamItemView.tsx
- [ ] features/shadow-team/components/SoccerField/SoccerFieldContainer.tsx
- [ ] features/shadow-team/components/SoccerField/useAction.ts
- [ ] features/shadow-team/components/SoccerPlayers/SoccerPlayersView.tsx
- [ ] features/similar-players/components/FilterContent/FilterContentView.tsx
- [ ] features/similar-players/components/Header/HeaderContainer.tsx
- [ ] features/similar-players/components/Header/HeaderView.tsx
- [ ] features/similar-players/components/ListEmpty/ListEmptyView.tsx
- [ ] features/similar-players/screens/Main/MainView.native.tsx
- [ ] features/similar-players/screens/Main/MainView.web.tsx
- [ ] features/watchlist/components/Watchlist/WatchlistView.native.tsx
- [ ] features/watchlist/components/Watchlist/WatchlistView.web.tsx

### Hooks and Utils Directory

- [ ] hooks/useCreateWatchlistActions.ts
- [ ] hooks/useToastNotification.tsx
- [ ] hooks/useWebSocket.ts
- [ ] providers/AlertProvider.tsx
- [ ] providers/ApolloClient.tsx
- [ ] tailwind.config.js
- [ ] utils/chunkWithPadding.ts
- [ ] utils/formatPhoneNumber.ts
- [ ] utils/getPlayerCompositeMetrics.ts
- [ ] utils/getPlayerInformations.ts
- [ ] utils/openUrl.ts

## Issues By Type

### Max-Lines (File too long)

Files exceeding the 200 line limit need to be split into smaller components or simplified:

- [ ] components/AppleStyleSwipeableRow/AppleStyleSwipeableRowView.tsx
- [ ] components/FilterContent/useFilterValues.ts
- [ ] components/FilterContent/useMultiSlider.ts
- [ ] components/PlayerDetail/components/ShareActionItem/ShareActionItemContainer.tsx
- [ ] components/SearchResultsItem/SearchResultsItemContainer.tsx
- [ ] features/auth/components/CountryCodes/CountryCodesView.tsx
- [ ] features/auth/screens/ConfirmCode/ConfirmCodeContainer.tsx
- [ ] features/invitations/components/OrganizationForm/OrganizationFormContainer.tsx
- [ ] features/invitations/components/ReceivedInvitationItem/ReceivedInvitationItemContainer.tsx
- [ ] features/shadow-team/components/SoccerField/SoccerFieldContainer.tsx
- [ ] tailwind.config.js
- [ ] utils/getPlayerCompositeMetrics.ts
- [ ] utils/getPlayerInformations.ts

### React Performance Issues

Objects, arrays, and functions created in JSX props cause unnecessary re-renders:

- [ ] All files with `jsx-no-new-object-as-prop`, `jsx-no-new-array-as-prop`, or `jsx-no-new-function-as-prop` errors

### Naming Convention Issues

All variable names should follow camelCase, PascalCase, or UPPER_CASE depending on their type:

- [ ] app/\_layout.tsx (`unstable_settings`)
- [ ] components/PlayerDetail/utils/handleAnnotatedTextAsMarkdown.ts (`start_index`, `end_index`, `file_citation`)
- [ ] components/PlayerDetail/components/ShareActionItem/ShareActionItemView.native.tsx (`IconActionSheet`)
- [ ] components/PlayerDetail/components/ShareActionItem/ShareActionItemView.web.tsx (`IconActionSheet`)
- [ ] components/elements/CustomHeader/CustomHeaderContainer.tsx (`Name`)
- [ ] components/elements/Skeleton/SkeletonList/SkeletonListContainer.tsx (`ItemSeparatorComponentDefault`)
- [ ] features/notes/components/TextInputField/TextInputFieldView.tsx (`InputTextField`)

### ESLint Comment Issues

ESLint comment directives need to be fixed:

- [ ] All files with `eslint-comments/require-description`, `eslint-comments/disable-enable-pair`, or `eslint-comments/no-unlimited-disable` errors

### SonarJS Issues

Code quality issues detected by SonarJS:

- [ ] All files with `sonarjs/` related errors
