# Codebase Audit Results

Generated on Thu May 1 16:54:33 EDT 2025

## View Components Not Using Arrow Function Shorthand

Checking for View components that use return statements instead of shorthand syntax:

The following View components may not be using arrow function shorthand syntax:

```
./components/AppleStyleSwipeableRow/AppleStyleSwipeableRowView.tsx:    return (
./components/AppleStyleSwipeableRow/AppleStyleSwipeableRowView.tsx:    return (
./components/AppleStyleSwipeableRow/AppleStyleSwipeableRowView.tsx:    return (
./components/AppleStyleSwipeableRow/AppleStyleSwipeableRowView.tsx:    return count * 100;
./components/Badge/BadgeView.tsx:      return formatCurrencyShort(value, currencyCode ?? CurrencyCode.Eur);
./components/Badge/BadgeView.tsx:    if ((!transformedValue && transformedValue !== 0) || !value) return "NA";
./components/Badge/BadgeView.tsx:    if (type === SortField.FitScore) return `${Math.round(transformedValue)}`;
./components/Badge/BadgeView.tsx:    if (value && type === SortField.FitScore) return value * 100;
./components/Badge/BadgeView.tsx:    return Math.round(transformedValue).toString();
./components/Badge/BadgeView.tsx:    return value;
./components/Badge/BadgeView.tsx:  return (
./components/FilterContent/components/MultiSlider/MultiSliderView.tsx:    return Math.floor(Math.pow(val, 1 / POWER));
./components/FilterContent/components/MultiSlider/MultiSliderView.tsx:    return Math.pow(val, POWER);
./components/FilterContent/components/MultiSlider/MultiSliderView.tsx:  return (
./components/FilterContent/components/MultiSlider/MultiSliderView.tsx:  return (
./components/FilterContent/components/MultiSlider/MultiSliderView.tsx:  return (
./components/FilterContent/components/MultiSlider/MultiSliderView.tsx:  return useLogScale ? (
./components/PlayerDetail/components/RightColumn/RightColumnView.tsx:  return (
./components/elements/Skeleton/components/SkeletonComparePlayer/SkeletonComparePlayerView.tsx:  return (
./components/elements/Skeleton/components/SkeletonPlayerDetail/SkeletonPlayerDetailView.tsx:  return (
./features/compare-players/components/MetricsGrid/MetricsGridView.tsx:        return newItem;
./features/compare-players/components/MetricsGrid/MetricsGridView.tsx:    if (shouldShowColorTransferMetric) return metrics;
./features/compare-players/components/MetricsGrid/MetricsGridView.tsx:    return metrics?.map(metric =>
./features/compare-players/components/MetricsGrid/MetricsGridView.tsx:  return (
./features/notes/components/NotesActionsheet/NotesActionsheetView.tsx:    return (
./features/notes/components/NotesActionsheet/NotesActionsheetView.tsx:  return (
./features/recommendations/components/InfoRecommendation/InfoRecommendationView.tsx:  return (
./features/recommendations/components/RecommendationsBottomSheet/RecommendationsBottomSheetView.tsx:    return (
./features/recommendations/components/RecommendationsBottomSheet/RecommendationsBottomSheetView.tsx:  return (
./features/shadow-team/components/SoccerPlayers/SoccerPlayersView.tsx:                return (
```

## Logic in View Components

Checking for View components that contain conditional logic or variable declarations:

The following View components appear to contain logic that should be in Container components:

```
./components/AddToWatchlistActionsheet/AddToWatchlistActionsheetView.tsx:const AddToWatchlistActionsheetView = ({
./components/AppleStyleSwipeableRow/AppleStyleSwipeableRowView.tsx:    const count = [
./components/AppleStyleSwipeableRow/AppleStyleSwipeableRowView.tsx:    const pressHandler = () => {
./components/AppleStyleSwipeableRow/AppleStyleSwipeableRowView.tsx:    const pressHandler = (text: string) => {
./components/AppleStyleSwipeableRow/AppleStyleSwipeableRowView.tsx:    const trans = progress.interpolate({
./components/AppleStyleSwipeableRow/AppleStyleSwipeableRowView.tsx:    const trans = progress.interpolate({
./components/AppleStyleSwipeableRow/AppleStyleSwipeableRowView.tsx:    const { children, onSwipeableOpenStartDrag, ...swipeableProps } =
./components/AppleStyleSwipeableRow/AppleStyleSwipeableRowView.tsx:    const { setOpen } = this.context as {
./components/AppleStyleSwipeableRow/AppleStyleSwipeableRowView.tsx:    const { setOpen } = this.context as {
./components/AppleStyleSwipeableRow/AppleStyleSwipeableRowView.tsx:/* eslint-disable functional/no-classes */
./components/AppleStyleSwipeableRow/AppleStyleSwipeableRowView.tsx:const styles = StyleSheet.create({
./components/Badge/BadgeView.tsx:    if ((!transformedValue && transformedValue !== 0) || !value) return "NA";
./components/Badge/BadgeView.tsx:  const colorClass = useMemo(
./components/Badge/BadgeView.tsx:  const formattedValue = useMemo(() => {
./components/Badge/BadgeView.tsx:  const transformedValue = useMemo(() => {
./components/Badge/BadgeView.tsx:const BadgeComponent = ({
./components/CompositeMetric/CompositeMetricView.tsx:const CompositeMetricView = ({ formattedValue, label, styles }: Props) => (
./components/DraggableList/DraggableListView.tsx:const DraggableListView = ({
./components/FilterContent/FilterView.tsx:const FilterView = ({
./components/FilterContent/components/MultiSelect/MultiSelectView.tsx:const CustomMultiSelectView = <T extends IFilterOption>({
./components/FilterContent/components/MultiSlider/MultiSliderView.tsx:      const actualValues = values.map(inverseTransformValue);
./components/FilterContent/components/MultiSlider/MultiSliderView.tsx:      const clampedValues = [
./components/FilterContent/components/MultiSlider/MultiSliderView.tsx:      const clampedValues = [
./components/FilterContent/components/MultiSlider/MultiSliderView.tsx:  const getStepSize = (): number => props.step ?? 1;
./components/FilterContent/components/MultiSlider/MultiSliderView.tsx:  const handleValuesChange = useCallback(
./components/FilterContent/components/MultiSlider/MultiSliderView.tsx:  const handleValuesChange = useCallback(
./components/FilterContent/components/MultiSlider/MultiSliderView.tsx:  const inverseTransformValue = (val: number): number => val;
./components/FilterContent/components/MultiSlider/MultiSliderView.tsx:  const inverseTransformValue = useCallback((val: number): number => {
./components/FilterContent/components/MultiSlider/MultiSliderView.tsx:  const markerStyle = useMemo(
./components/FilterContent/components/MultiSlider/MultiSliderView.tsx:  const trackStyle = useMemo(
./components/FilterContent/components/MultiSlider/MultiSliderView.tsx:  const transformValue = (val: number): number => val;
./components/FilterContent/components/MultiSlider/MultiSliderView.tsx:  const transformValue = useCallback((val: number): number => {
./components/FilterContent/components/MultiSlider/MultiSliderView.tsx:  const transformedBounds = useMemo(
./components/FilterContent/components/MultiSlider/MultiSliderView.tsx:  const transformedValues = useMemo(
./components/FilterContent/components/MultiSlider/MultiSliderView.tsx:const BaseMultiSliderView: React.FC<BaseMultiSliderViewProps> = ({
./components/FilterContent/components/MultiSlider/MultiSliderView.tsx:const LinearMultiSliderView: React.FC<
./components/FilterContent/components/MultiSlider/MultiSliderView.tsx:const MultiSliderView: React.FC<MultiSliderViewProps> = ({
./components/FilterContent/components/MultiSlider/MultiSliderView.tsx:const PowerSliderView: React.FC<
./components/FilterContent/components/MultiSlider/MultiSliderView.tsx:const SLIDER_CONSTANTS = {
./components/FilterContent/components/Option/OptionView.tsx:const OptionView = ({
./components/FilterContent/components/Slider/SliderView.tsx:const SliderView = ({
./components/FilterResults/FilterResultsView.tsx:const FilterResultsView = ({
./components/HeaderPopover/HeaderPopoverView.tsx:const HeaderPopoverView = ({
./components/HeaderPopover/HeaderPopoverView.tsx:const RowButton = React.forwardRef(
./components/InfoPlayer/InfoPlayerView.tsx:const InfoPlayerView = ({
./components/Markdown/MarkdownView.tsx:const MarkdownView = ({ value, style }: IProps) => (
./components/ModalFilter/ModalFilterView.tsx:const ModalFilterView = ({ paddingTop, isOpen, onClose, height }: Props) => (
./components/PlayerDetail/PlayerDetailView.tsx:const PlayerDetailView = (props: PlayerDetailViewProps) => (
./components/PlayerDetail/components/CategoryMetricChart/CategoryMetricChartView.tsx:const CategoryMetricChartView = ({
./components/PlayerDetail/components/CategoryMetricChart/CategoryMetricChartView.tsx:const LABEL_COLOR = "#ffffff";
./components/PlayerDetail/components/CategoryMetricChart/CategoryMetricChartView.tsx:const SPACE = 8;
./components/PlayerDetail/components/CenterColumn/CenterColumnView.tsx:const RightColumnView = ({
./components/PlayerDetail/components/Chat/ChatView.tsx:const ChatView = ({
./components/PlayerDetail/components/Header/HeaderView.tsx:const HeaderView = ({
./components/PlayerDetail/components/HeaderPlayer/HeaderPlayerView.tsx:const PlayerHeaderView = ({
./components/PlayerDetail/components/LeftColumn/LeftColumnView.tsx:const LeftColumnView = ({
./components/PlayerDetail/components/ManageActionSheet/ManageActionSheetView.tsx:const ManageActionSheetView = ({
./components/PlayerDetail/components/PopoverMenu/PopoverMenuView.tsx:const PopoverMenuView = ({
./components/PlayerDetail/components/RightColumn/RightColumnView.tsx:  const { recommendationTypes } = useRecommendationTypes();
./components/PlayerDetail/components/RightColumn/RightColumnView.tsx:const RightColumnView = ({
./components/PlayerDetail/components/Share/ShareView.tsx:const ShareView = ({
./components/PlayerDetail/components/WatchlistItem/WatchlistItemView.tsx:const WatchlistItemView = ({
./components/PlayerItem/PlayerItemView.tsx:const PlayerItemView = ({
./components/PlayerList/PlayerListView.tsx:const PlayerListView = ({
./components/ResetButton/ResetButtonView.tsx:const ResetButtonView = ({ onPress }: Props) => (
./components/SearchResultsItem/SearchResultsItemView.tsx:const SearchResultsItemView = ({
./components/Searchbar/SearchbarView.tsx:const SearchbarView = ({
./components/SelectionSortPopover/SelectionSortPopoverView.tsx:        /*NOTE: className doesn't work for SafeAreaView....*/
./components/SelectionSortPopover/SelectionSortPopoverView.tsx:const SelectionSortPopoverView = ({
./components/WatchlistAddRemoveButton/WatchlistAddRemoveButtonView.tsx:const BORDER_WIDTH = 0.4;
./components/WatchlistAddRemoveButton/WatchlistAddRemoveButtonView.tsx:const CHECKBOX_SIZE = ifWeb(16, 20);
./components/WatchlistAddRemoveButton/WatchlistAddRemoveButtonView.tsx:const SearchResultsItemAddRemoveButtonView = ({
./components/WatchlistSelectButton/WatchlistSelectButtonView.tsx:const WatchlistSelectButtonView = ({
./components/elements/CustomHeader/CustomHeaderView.tsx:const CustomHeaderView = ({ firstName, onLogoPress }: Props) => (
./components/elements/CustomPrompt/CustomPromptView.tsx:const CustomPromptView = ({
./components/elements/LoadingPage/LoadingPageView.tsx:const LoadingPageView = React.forwardRef(
./components/elements/Skeleton/SkeletonPlaceholder/SkeletonPlaceholderView.tsx:const SkeletonPlaceholderView: React.FC<SkeletonProps> = ({
./components/elements/Skeleton/components/SkeletonComparePlayer/SkeletonComparePlayerView.tsx:  const numCols = useBreakpointValue({ default: 2, sm: 2, md: 3, lg: 4 });
./components/elements/Skeleton/components/SkeletonComparePlayer/SkeletonComparePlayerView.tsx:  const skeletonMetrics = chunkArrayWithPadding<boolean[]>(
./components/elements/Skeleton/components/SkeletonComparePlayer/SkeletonComparePlayerView.tsx:const SkeletonComparePlayerView = () => {
./components/elements/Skeleton/components/SkeletonComparePlayer/SkeletonComparePlayerView.tsx:const skeletonMetricsChart = [
./components/elements/Skeleton/components/SkeletonFilterRole/SkeletonFilterRoleView.tsx:const SkeletonFilterRoleView = () => (
./components/elements/Skeleton/components/SkeletonFilterRole/SkeletonFilterRoleView.tsx:const skeletonRoles = chunkArrayWithPadding<boolean[]>(
./components/elements/Skeleton/components/SkeletonMember/SkeletonMemberView.tsx:const SkeletonMemberView = () => (
./components/elements/Skeleton/components/SkeletonMetricChart/SkeletonMetricChartView.tsx:const SkeletonMetricChartView = () => (
./components/elements/Skeleton/components/SkeletonModalPlayer/SkeletonModalPlayerView.tsx:const SkeletonModalPlayerView = () => (
./components/elements/Skeleton/components/SkeletonNote/SkeletonNoteView.tsx:const SkeletonNoteView = () => (
./components/elements/Skeleton/components/SkeletonPlayer/SkeletonPlayerView.tsx:const SkeletonPlayerView = () => (
./components/elements/Skeleton/components/SkeletonPlayerDetail/SkeletonPlayerDetailView.tsx:  const numCols = useBreakpointValue({ default: 2, sm: 2, md: 3, lg: 4 });
./components/elements/Skeleton/components/SkeletonPlayerDetail/SkeletonPlayerDetailView.tsx:  const skeletonMetrics = chunkArrayWithPadding<boolean[]>(
./components/elements/Skeleton/components/SkeletonPlayerDetail/SkeletonPlayerDetailView.tsx:const SkeletonPlayerDetailView = () => {
./components/elements/Skeleton/components/SkeletonPlayerDetail/SkeletonPlayerDetailView.tsx:const skeletonMetricsChart = [
./components/elements/Skeleton/components/SkeletonRoster/SkeletonRostersView.tsx:const SkeletonRosterView = () => (
./components/elements/Skeleton/components/SkeletonShadowTeam/SkeletonShadowTeamView.tsx:const SkeletonShadowTeamView = () => (
./components/elements/Skeleton/components/SkeletonWatchlist/SkeletonWatchlistView.tsx:const SkeletonWatchlistView = () => (
./features/auth/components/CountryCodes/CountryCodesView.tsx:const CountryCodesView = memo(() => (
./features/auth/components/CountryCodes/CountryCodesView.tsx:export const countryCodesData: CountryCode[] = [
./features/auth/components/Header/HeaderView.tsx:const HeaderView = ({
./features/auth/components/Screen/ScreenView.tsx:const ScreenView = ({
./features/auth/screens/ConfirmCode/ConfirmCodeView.tsx:const ConfirmCodeView = ({
./features/auth/screens/Register/RegisterView.tsx:const RegisterView = ({
./features/auth/screens/Register/RegisterView.tsx:const options = [
./features/auth/screens/SignIn/SignInView.tsx:const SignInView = ({
./features/auth/screens/SignIn/SignInView.tsx:const options = [
./features/compare-players/components/ChartComparison/ChartComparisonView.tsx:const ChartComparisonView = ({
./features/compare-players/components/ChartComparison/ChartComparisonView.tsx:const LABEL_COLOR = "#ffffff";
./features/compare-players/components/ChartComparison/ChartComparisonView.tsx:const SPACE = 8;
./features/compare-players/components/DropDownPlayer/DropDownPlayerView.tsx:const DropDownPlayerView = ({
./features/compare-players/components/ListPlayerCompare/ListPlayerCompareView.tsx:const ListPlayerCompareView = ({
./features/compare-players/components/MetricsGrid/MetricsGridView.tsx:        const defaultStyle = {
./features/compare-players/components/MetricsGrid/MetricsGridView.tsx:        const newItem =
./features/compare-players/components/MetricsGrid/MetricsGridView.tsx:    if (shouldShowColorTransferMetric) return metrics;
./features/compare-players/components/MetricsGrid/MetricsGridView.tsx:  const updatedMetric = useMemo(() => {
./features/compare-players/components/MetricsGrid/MetricsGridView.tsx:const MetricsGridView = ({
./features/compare-players/screens/Main/MainView.tsx:const MainView = ({
./features/invitations/components/CreateButton/CreateButtonView.tsx:const CreateButtonView = () => (
./features/invitations/components/CreateOrganizationButton/CreateOrganizationButtonView.tsx:const CreateOrganizationButtonView = () => (
./features/invitations/components/InvitationItem/InvitationItemView.tsx:const InvitationItemView = ({
./features/invitations/components/ListEmpty/ListEmptyView.tsx:const ListEmptyView = ({ title, description }: Props) => (
./features/invitations/components/OrganizationForm/OrganizationFormView.tsx:const OrganizationFormView = ({
./features/invitations/components/OrganizationForm/OrganizationFormView.tsx:const currencyCodes = Object.entries(CurrencyCode);
./features/invitations/components/OrganizationItem/OrganizationItemView.tsx:const OrganizationItemView = ({ item, loading, onLogInto, isAdmin }: Props) => (
./features/invitations/components/ReceivedInvitationItem/ReceivedInvitationItemView.tsx:const ReceivedInvitationItemView = ({
./features/invitations/components/UserItem/UserItemItemView.tsx:const UserItemView = ({
./features/invitations/screens/CreateInvitation/CreateInvitationView.tsx:const CreateInvitationView = ({
./features/invitations/screens/CreateInvitation/CreateInvitationView.tsx:const options = [
./features/invitations/screens/Main/MainView.tsx:const MainView = ({
./features/invitations/screens/Organizations/OrganizationsView.tsx:const OrganizationsView = ({
./features/invitations/screens/ReceivedInvitations/ReceivedInvitationsView.tsx:const ReceivedInvitationsView = ({
./features/invitations/screens/Users/UsersView.tsx:const UsersView = ({
./features/notes/components/ButtonSubmit/ButtonSubmitView.tsx:const ButtonSubmitView = ({
./features/notes/components/CheckNote/CheckNoteView.tsx:const CheckNoteView = ({ control, loading, errors }: CheckNoteProps) => (
./features/notes/components/NotesActionsheet/NotesActionsheetView.tsx:              /*NOTE: className doesn't work for indicator....*/
./features/notes/components/NotesActionsheet/NotesActionsheetView.tsx:  if (Platform.OS === "web") {
./features/notes/components/NotesActionsheet/NotesActionsheetView.tsx:const BottomSheetWrapper = ({
./features/notes/components/NotesActionsheet/NotesActionsheetView.tsx:const NotesActionsheetView = ({
./features/notes/components/NotesForm/NotesFormView.tsx:const NotesFormView = ({
./features/notes/components/TextInputField/TextInputFieldView.tsx:const InputFieldView = ({
./features/player-detail/screens/Main/MainView.tsx:const MainView = ({
./features/player-filter/screens/Main/MainView.tsx:const MainView = ({
./features/player-search/screens/Main/MainView.tsx:const MainView = ({
./features/recommendations/components/InfoRecommendation/InfoRecommendationView.tsx:const InfoRecommendationView = ({
./features/recommendations/components/RecommendationList/RecommendationListView.tsx:const RecommendationListView = ({
./features/recommendations/components/RecommendationPlayer/RecommendationPlayerView.tsx:const RecommendationPlayerView = ({
./features/recommendations/components/RecommendationsBottomSheet/RecommendationsBottomSheetView.tsx:  if (Platform.OS === "web") {
./features/recommendations/components/RecommendationsBottomSheet/RecommendationsBottomSheetView.tsx:const BottomSheetWrapper = ({
./features/recommendations/components/RecommendationsBottomSheet/RecommendationsBottomSheetView.tsx:const RecommendationsBottomSheetView = ({
./features/recommendations/components/RecommendationsCategorySelection/RecommendationsCategorySelectionView.tsx:const RecommendationsCategorySelectionView = ({
./features/reports/components/ListEmpty/ListEmptyView.tsx:  description = "We could not find any similar players for this player.",
./features/reports/components/ListEmpty/ListEmptyView.tsx:const ListEmptyView = ({
./features/reports/components/MatchItem/MatchItemView.tsx:const MatchItemView = ({ item, onSelect, selectedMatchIds }: Props) => (
./features/reports/components/ReportItem/ReportItemView.tsx:        /*NOTE: className doesn't work for marginTop....*/
./features/reports/components/ReportItem/ReportItemView.tsx:const ReportItemView = ({
./features/reports/screens/Main/MainView.tsx:const MainView = ({ renderItem, items }: Props) => (
./features/reports/screens/Matches/MatchesView.tsx:const MatchesView = ({
./features/roster-management/components/Header/HeaderView.tsx:const HeaderView = ({ pathname, ...inputProps }: Props) => (
./features/roster-management/components/Header/HeaderView.tsx:const buttonMap = {
./features/roster-management/components/LeagueItem/LeagueItemView.tsx:const LeagueItemView = ({ item, hasSelectedLeague, onChange }: Props) => (
./features/roster-management/components/ListEmpty/ListEmptyView.tsx:const ListEmptyView = () => (
./features/roster-management/components/TeamItem/TeamItemView.tsx:const TeamItemView = ({ item, hasSelectedTeam, onChange }: Props) => (
./features/roster-management/screens/Leagues/LeaguesView.tsx:      There are no eligible leagues for your organization. Please associate
./features/roster-management/screens/Leagues/LeaguesView.tsx:const LeaguesView = ({
./features/roster-management/screens/Leagues/LeaguesView.tsx:const ListEmptyComponent = () => (
./features/roster-management/screens/Teams/TeamsView.tsx:      There are no eligible teams for your organization. Please associate
./features/roster-management/screens/Teams/TeamsView.tsx:const ListEmptyComponent = () => (
./features/roster-management/screens/Teams/TeamsView.tsx:const TeamsView = ({
./features/shadow-team/Main/MainView.tsx:const MainView = ({
./features/shadow-team/components/CenterShadowTeam/CenterShadowTeamView.tsx:const CenterShadowTeamView = ({
./features/shadow-team/components/CreateShadowTeamForm/CreateShadowTeamFormView.tsx:const CreateShadowTeamFormView = ({
./features/shadow-team/components/ItemPlayer/ItemPlayerView.tsx:const ItemPlayerView = ({ player, isSelected, onChangeSelect }: Props) => (
./features/shadow-team/components/LeftShadowTeam/LeftShadowTeamView.tsx:const LeftShadowTeamView = ({
./features/shadow-team/components/ModalMorePlayer/ModalMorePlayerView.tsx:const ModalMorePlayerView = ({
./features/shadow-team/components/ModalPlayer/ModalPlayerView.tsx:const ModalPlayerView = ({
./features/shadow-team/components/ModalSelectPlayer/ModalSelectPlayerView.tsx:const ModalSelectPlayerView = ({
./features/shadow-team/components/MorePlayerItem/MorePlayerItemView.tsx:const selectPlayerItemView = ({
./features/shadow-team/components/PlayerItem/PlayerItemView.tsx:const PlayerItemView = ({
./features/shadow-team/components/RightShadowTeam/RightShadowTeamView.tsx:const RightShadowTeamView = ({
./features/shadow-team/components/SelectPlayerItem/SelectPlayerItemView.tsx:const selectPlayerItemView = ({
./features/shadow-team/components/ShadowTeamItem/ShadowTeamItemView.tsx:const ShadowTeamItemView = ({
./features/shadow-team/components/SoccerPlayers/SoccerPlayersView.tsx:const SoccerPlayersView = ({
./features/similar-players/components/FilterContent/FilterContentView.tsx:const FilterContentView = ({
./features/similar-players/components/FilterContent/FilterContentView.tsx:const MAX_HEIGHT_ACCORDION = Dimensions.get("window").height * 0.5;
./features/similar-players/components/Header/HeaderView.tsx:const HeaderView = ({
./features/similar-players/components/Header/HeaderView.tsx:const MAX_HEIGHT_ACCORDION = Dimensions.get("window").height * 0.5;
./features/similar-players/components/ListEmpty/ListEmptyView.tsx:      We could not find any similar players for this player.
./features/similar-players/components/ListEmpty/ListEmptyView.tsx:const ListEmptyView = () => (
```

## Non-Memoized Objects or Arrays in Props

Checking for inline object or array literals in JSX (should use useMemo):

The following components may be using inline object/array literals (should use useMemo):

```
./app/(root)/_layout.tsx:            name="compare-players/[playerId]"
./app/(root)/_layout.tsx:            name="players/[playerId]/chat"
./app/(root)/_layout.tsx:            name="players/[playerId]/index"
./app/(root)/_layout.tsx:            name="players/[playerId]/matches/[matchId]/intake"
./app/(root)/_layout.tsx:            name="players/[playerId]/matches/index"
./app/(root)/_layout.tsx:            name="players/[playerId]/reports"
./app/(root)/_layout.tsx:            name="similar-players/[playerId]"
./app/(root)/_layout.tsx:        edges={["top"]}
./app/(root)/organizations/_layout.tsx:        name="[organizationId]/edit"
./app/(root)/players/[playerId]/matches/[matchId]/intake.tsx:      originWhitelist={["*"]}
./app/(root)/players/[playerId]/matches/[matchId]/intake.tsx:    }, [navigation])
./app/_layout.tsx:                <CustomPrompt ref={promptRef} />
./app/_layout.tsx:                <LoadingPage ref={loadingPageRef} />
./app/_layout.tsx:              <ThemeProvider value={DarkTheme}>
./app/_layout.tsx:      <Button variant="link" onPress={props.retry}>
./app/_layout.tsx:    <GestureHandlerRootView style={{ flex: 1 }}>
./app/_layout.tsx:    <ToastProvider offsetTop={top + 10} offset={32}>
./app/_layout.tsx:  const [fontsLoaded, fontError] = useFonts({
./app/_layout.tsx:  }, [appReady]);
./app/_layout.tsx:  }, [ref]);
./app/_layout.tsx:LogBox.ignoreLogs(["[Reanimated]", "Sentry"]);
./components/AddToWatchlistActionsheet/AddToWatchlistActionsheetContainer.tsx:      ) ?? [],
./components/AddToWatchlistActionsheet/AddToWatchlistActionsheetContainer.tsx:    [onClose]
./components/AddToWatchlistActionsheet/AddToWatchlistActionsheetContainer.tsx:    [watchlistsData]
./components/AddToWatchlistActionsheet/AddToWatchlistActionsheetView.tsx:                    <Divider className={ifWeb("my-2", "my-4")} />
./components/AddToWatchlistActionsheet/AddToWatchlistActionsheetView.tsx:                  {watchlist.id !== watchlists[0].id && (
./components/AddToWatchlistActionsheet/AddToWatchlistActionsheetView.tsx:            <Button variant="link" onPress={onClose}>
./components/AddToWatchlistActionsheet/AddToWatchlistActionsheetView.tsx:        <VStack className={`my-3 w-full ${ifWeb("gap-2", "gap-4")} pb-8`}>
./components/AddToWatchlistActionsheet/AddToWatchlistActionsheetView.tsx:      <PanGestureHandler onGestureEvent={handleGesture}>
./components/AddToWatchlistActionsheet/AddToWatchlistActionsheetView.tsx:    <CustomPromptContainer ref={promptRef} />
./components/AddToWatchlistActionsheet/AddToWatchlistActionsheetView.tsx:  watchlists: WatchlistWatchlistFragment[];
./components/AppleStyleSwipeableRow/AppleStyleSwipeableRowView.tsx:            <Icon as={CopyIcon} size="xl" />
./components/AppleStyleSwipeableRow/AppleStyleSwipeableRowView.tsx:            <Icon as={SearchIcon} size="xl" />
./components/AppleStyleSwipeableRow/AppleStyleSwipeableRowView.tsx:            <Icon as={TrashIcon} size="xl" />
./components/AppleStyleSwipeableRow/AppleStyleSwipeableRowView.tsx:          style={[styles.leftAction, { backgroundColor: color }]}
./components/AppleStyleSwipeableRow/AppleStyleSwipeableRowView.tsx:          style={[styles.rightAction, { backgroundColor: color }]}
./components/AppleStyleSwipeableRow/AppleStyleSwipeableRowView.tsx:      <Animated.View style={{ transform: [{ translateX: trans }] }}>
./components/AppleStyleSwipeableRow/AppleStyleSwipeableRowView.tsx:      <Animated.View style={{ transform: [{ translateX: trans }] }}>
./components/AppleStyleSwipeableRow/AppleStyleSwipeableRowView.tsx:      inputRange: [0, 1],
./components/AppleStyleSwipeableRow/AppleStyleSwipeableRowView.tsx:      inputRange: [0, 1],
./components/AppleStyleSwipeableRow/AppleStyleSwipeableRowView.tsx:      outputRange: [-x, 0],
./components/AppleStyleSwipeableRow/AppleStyleSwipeableRowView.tsx:      outputRange: [x, 0],
./components/Badge/BadgeView.tsx:      <BadgeText style={{ color: colorClass.text }}>{formattedValue}</BadgeText>
./components/Badge/BadgeView.tsx:    [transformedValue, isDefaultStyle, min, max, isHigherBetter]
./components/Badge/BadgeView.tsx:  }, [transformedValue, value, type, currencyCode]);
./components/Badge/BadgeView.tsx:  }, [type, value]);
./components/CompositeMetric/CompositeMetricContainer.tsx:  return <CompositeMetricView {...props} />;
./components/CompositeMetric/CompositeMetricView.tsx:    <Heading style={{ color: styles.text }}>{formattedValue}</Heading>
./components/CustomSelect/CustomSelectContainer.tsx:    [onChangeValue]
./components/CustomSelect/CustomSelectContainer.tsx:  const [selectedOption, setSelectedOption] = useState<
./components/CustomSelect/CustomSelectContainer.tsx:  }, [defaultValue, isUpdated, options, selectedOption]);
./components/CustomSelect/CustomSelectView.native.tsx:        <SelectIcon className="mr-3" as={ChevronDownIcon} />
./components/DraggableList/DraggableListContainer.tsx:    [activeWatchlist]
./components/DraggableList/DraggableListContainer.tsx:    [loadingPlayers, refreshing, players.length]
./components/DraggableList/DraggableListContainer.tsx:  players: WatchlistPlayerFragment[];
./components/DraggableList/DraggableListView.tsx:        colors={["white"]}
./components/DraggableList/DraggableListView.tsx:  players: WatchlistPlayerFragment[];
./components/FilterContent/FilterContainer.tsx:          max: value[1],
./components/FilterContent/FilterContainer.tsx:          max: value[1],
./components/FilterContent/FilterContainer.tsx:          min: value[0],
./components/FilterContent/FilterContainer.tsx:          min: value[0],
./components/FilterContent/FilterContainer.tsx:        [type]: {
./components/FilterContent/FilterContainer.tsx:        [type]: {
./components/FilterContent/FilterContainer.tsx:      ) ?? [];
./components/FilterContent/FilterContainer.tsx:      .sort((a, b) => a.name.localeCompare(b.name)) ?? [];
./components/FilterContent/FilterContainer.tsx:      leaguesValue={filterValues?.leagues ?? []}
./components/FilterContent/FilterContainer.tsx:      nationalityValue={filterValues?.nationalities ?? []}
./components/FilterContent/FilterContainer.tsx:      })) ?? [],
./components/FilterContent/FilterContainer.tsx:    (type: keyof IFilterValues, value: number[]) => {
./components/FilterContent/FilterContainer.tsx:    []
./components/FilterContent/FilterContainer.tsx:    [roleData]
./components/FilterContent/FilterContainer.tsx:  const [showMoreRoles, setShowMoreRoles] = useState<boolean>(false);
./components/FilterContent/FilterContainer.tsx:  }, []);
./components/FilterContent/FilterContainer.tsx:  }, []);
./components/FilterContent/FilterView.tsx:                  <HStack key={`role_${i.toString()}`} className="gap-3">
./components/FilterContent/FilterView.tsx:              <MultiSlider {...multiSlider} />
./components/FilterContent/FilterView.tsx:    selects: RosterManagementNationalityFragment[]
./components/FilterContent/FilterView.tsx:  groupedLeagues: RosterManagementLeagueFragment[];
./components/FilterContent/FilterView.tsx:  groupedRoles: (IFilterOption | null)[][];
./components/FilterContent/FilterView.tsx:  leaguesValue: RosterManagementLeagueFragment[];
./components/FilterContent/FilterView.tsx:  listMultiSlider: IMultiSlider[];
./components/FilterContent/FilterView.tsx:  nationalities: RosterManagementNationalityFragment[];
./components/FilterContent/FilterView.tsx:  nationalityValue: RosterManagementNationalityFragment[];
./components/FilterContent/FilterView.tsx:  onSelectLeagues?: (selects: RosterManagementLeagueFragment[]) => void;
./components/FilterContent/components/MultiSelect/MultiSelectContainer.tsx:          <Box key={item.id} className="flex-row items-center p-3 pl-2">
./components/FilterContent/components/MultiSelect/MultiSelectContainer.tsx:        <Pressable key={item?.id} onPress={() => handleSelect(item)}>
./components/FilterContent/components/MultiSelect/MultiSelectContainer.tsx:        onSelect?.([...listSelected, value]);
./components/FilterContent/components/MultiSelect/MultiSelectContainer.tsx:    (value: string[]) => setIsOpenDropdown(!!value.length),
./components/FilterContent/components/MultiSelect/MultiSelectContainer.tsx:    []
./components/FilterContent/components/MultiSelect/MultiSelectContainer.tsx:    [handleSelect, listSelected]
./components/FilterContent/components/MultiSelect/MultiSelectContainer.tsx:    [handleUnSelect]
./components/FilterContent/components/MultiSelect/MultiSelectContainer.tsx:    [listSelected, onSelect]
./components/FilterContent/components/MultiSelect/MultiSelectContainer.tsx:    [listSelected, onSelect]
./components/FilterContent/components/MultiSelect/MultiSelectContainer.tsx:    [title]
./components/FilterContent/components/MultiSelect/MultiSelectContainer.tsx:  const [isOpenDropdown, setIsOpenDropdown] = useState<boolean>(false);
./components/FilterContent/components/MultiSelect/MultiSelectContainer.tsx:  data: T[];
./components/FilterContent/components/MultiSelect/MultiSelectContainer.tsx:  listSelected: T[];
./components/FilterContent/components/MultiSelect/MultiSelectContainer.tsx:  onSelect?: (value: T[]) => void;
./components/FilterContent/components/MultiSelect/MultiSelectView.tsx:              <AccordionTrigger className="h-[50px] rounded-lg bg-background-gray p-0 px-3 opacity-100">
./components/FilterContent/components/MultiSelect/MultiSelectView.tsx:        <Box className="h-[50px] w-full rounded-lg bg-stone-800" />
./components/FilterContent/components/MultiSelect/MultiSelectView.tsx:  data: T[];
./components/FilterContent/components/MultiSelect/MultiSelectView.tsx:  listSelected: T[];
./components/FilterContent/components/MultiSelect/MultiSelectView.tsx:  onChangeStatusDropdown?: (value: string[]) => void;
./components/FilterContent/components/MultiSlider/MultiSliderContainer.tsx:    (newValue: [number, number]) => onChange?.(newValue),
./components/FilterContent/components/MultiSlider/MultiSliderContainer.tsx:    <View onLayout={onLayout} className="-mt-6">
./components/FilterContent/components/MultiSlider/MultiSliderContainer.tsx:    []
./components/FilterContent/components/MultiSlider/MultiSliderContainer.tsx:    [isCurrency, isDecimal, useLogScale]
./components/FilterContent/components/MultiSlider/MultiSliderContainer.tsx:    [onChange]
./components/FilterContent/components/MultiSlider/MultiSliderContainer.tsx:  const [width, setWidth] = useState(deviceWidth);
./components/FilterContent/components/MultiSlider/MultiSliderContainer.tsx:  onChange?: (value: [number, number]) => void;
./components/FilterContent/components/MultiSlider/MultiSliderContainer.tsx:  value: number[];
./components/FilterContent/components/MultiSlider/MultiSliderView.tsx:        Math.min(Math.max(actualValues[1], actualValues[0]), props.maxValue),
./components/FilterContent/components/MultiSlider/MultiSliderView.tsx:        Math.min(Math.max(values[1], values[0]), props.maxValue),
./components/FilterContent/components/MultiSlider/MultiSliderView.tsx:        actualValues[0],
./components/FilterContent/components/MultiSlider/MultiSliderView.tsx:        values[0],
./components/FilterContent/components/MultiSlider/MultiSliderView.tsx:      ] as [number, number];
./components/FilterContent/components/MultiSlider/MultiSliderView.tsx:      ] as [number, number];
./components/FilterContent/components/MultiSlider/MultiSliderView.tsx:    (values: number[]) => {
./components/FilterContent/components/MultiSlider/MultiSliderView.tsx:    (values: number[]) => {
./components/FilterContent/components/MultiSlider/MultiSliderView.tsx:    <LinearMultiSliderView {...props} />
./components/FilterContent/components/MultiSlider/MultiSliderView.tsx:    <PowerSliderView {...props} />
./components/FilterContent/components/MultiSlider/MultiSliderView.tsx:    []
./components/FilterContent/components/MultiSlider/MultiSliderView.tsx:    []
./components/FilterContent/components/MultiSlider/MultiSliderView.tsx:    [inverseTransformValue, props]
./components/FilterContent/components/MultiSlider/MultiSliderView.tsx:    [minValue, maxValue, transformValue]
./components/FilterContent/components/MultiSlider/MultiSliderView.tsx:    [props]
./components/FilterContent/components/MultiSlider/MultiSliderView.tsx:    [value, transformValue]
./components/FilterContent/components/MultiSlider/MultiSliderView.tsx:  handleValuesChange: (values: number[]) => void;
./components/FilterContent/components/MultiSlider/MultiSliderView.tsx:  onChange: (value: [number, number]) => void;
./components/FilterContent/components/MultiSlider/MultiSliderView.tsx:  value: number[];
./components/FilterContent/components/MultiSlider/MultiSliderView.tsx:  }, []);
./components/FilterContent/components/MultiSlider/MultiSliderView.tsx:  }, []);
./components/FilterContent/components/Option/OptionContainer.tsx:            ...(filterValuesVar()?.[property] || []),
./components/FilterContent/components/Option/OptionContainer.tsx:        ? filterValuesVar()?.[property]?.filter(option => option.id !== value)
./components/FilterContent/components/Option/OptionContainer.tsx:      [property]: isSelected
./components/FilterContent/components/Option/OptionContainer.tsx:  const isSelected = filterValues?.[property]?.some(
./components/FilterContent/components/Option/OptionContainer.tsx:  }, [isSelected, property, title, value]);
./components/FilterContent/components/Slider/SliderContainer.tsx:  const [valueState, setValueState] = useState<number>(value ?? defaultValue);
./components/FilterContent/components/Slider/SliderContainer.tsx:  }, [defaultValue, value]);
./components/FilterContent/components/Slider/SliderView.tsx:        <SliderFilledTrack className="bg-info-300 data-[focus=true]:bg-info-300 data-[hover=true]:bg-info-300 data-[active=true]:bg-info-300" />
./components/FilterContent/components/Slider/SliderView.tsx:      <SliderThumb className="size-4 flex-1 items-center bg-[#0B8DCD]">
./components/FilterContent/components/SliderCustomLabel/SliderCustomLabel.tsx:      <LabelBase right={0} value={twoMarkerValue.toString()} />
./components/FilterContent/components/SliderCustomLabel/SliderCustomLabel.tsx:    <LabelBase left={0} value={oneMarkerValue.toString()} />
./components/FilterResults/FilterResultsContainer.tsx:    ({ item }) => <SearchResultsItem item={item} />,
./components/FilterResults/FilterResultsContainer.tsx:    []
./components/FilterResults/FilterResultsContainer.tsx:    [loading, isRefreshing, players.length]
./components/FilterResults/FilterResultsContainer.tsx:    [loading]
./components/FilterResults/FilterResultsView.tsx:        colors={["white"]}
./components/FilterResults/FilterResultsView.tsx:    ListHeaderComponent={<Header isShowPopoverFilter={isShowPopoverFilter} />}
./components/FilterResults/FilterResultsView.tsx:  players: PlayerSearchPlayerFragment[];
./components/Head/HeadContainer.web.tsx:  return <HeadView title={pageTitle} />;
./components/HeaderChat/HeaderChatContainer.tsx:        <HStack className={ifWeb("gap-4 pb-3", "gap-4")}>
./components/HeaderChat/HeaderChatContainer.tsx:      <Markdown value={stripBrackets(summary ?? "")} />
./components/HeaderChat/HeaderChatContainer.tsx:    [connectionState, onPressQuestion]
./components/HeaderChat/HeaderChatContainer.tsx:    return [];
./components/HeaderChat/HeaderChatContainer.tsx:  text.replace(/\[[^\\[\]]*?\]/g, "").replace(/【[^【】]*?】/g, "");
./components/HeaderChat/HeaderChatContainer.tsx:): string[] => {
./components/HeaderPopover/HeaderPopoverContainer.tsx:    (invitationData?.listMyReceivedInvitations?.edges ?? []).length > 0;
./components/HeaderPopover/HeaderPopoverContainer.tsx:    [currentUser?.organization?.name]
./components/HeaderPopover/HeaderPopoverContainer.tsx:  const [deactivateMe] = useAuthDeactivateMeMutation({
./components/HeaderPopover/HeaderPopoverContainer.tsx:  const [isOpenFilters, setIsOpenFilters] = useState<boolean>(false);
./components/HeaderPopover/HeaderPopoverContainer.tsx:  const handleCloseFilters = useCallback(() => setIsOpenFilters(false), []);
./components/HeaderPopover/HeaderPopoverContainer.tsx:  const handleOpenFilters = useCallback(() => setIsOpenFilters(true), []);
./components/HeaderPopover/HeaderPopoverContainer.tsx:  const numberOfValidOrganizations = (data?.listMyOrganizations?.edges ?? [])
./components/HeaderPopover/HeaderPopoverContainer.tsx:  }, []);
./components/HeaderPopover/HeaderPopoverContainer.tsx:  }, [auth, client?.client, handleCloseFilters, handleResetVar, router]);
./components/HeaderPopover/HeaderPopoverContainer.tsx:  }, [deactivateMe, handleSignOut]);
./components/HeaderPopover/HeaderPopoverContainer.tsx:  }, [handleCloseFilters, router]);
./components/HeaderPopover/HeaderPopoverView.tsx:                  triggerPropsMenu?.["aria-expanded"]
./components/HeaderPopover/HeaderPopoverView.tsx:          <Icon as={rightIcon} />
./components/HeaderPopover/HeaderPopoverView.tsx:        <ButtonIcon as={EllipsisIcon} className="text-info-500" />
./components/HeaderPopover/HeaderPopoverView.tsx:        <Heading className={ifWeb("text-lg p-3 pl-11 pt-0", "p-4 pl-11 pt-0")}>
./components/HeaderPopover/HeaderPopoverView.tsx:        <Text className={`font-medium ${ifWeb("text-md", "text-lg")}`}>
./components/HeaderPopover/HeaderPopoverView.tsx:      <Box className="w-4">{!!leftIcon && <Icon as={leftIcon} />}</Box>
./components/InfoPlayer/InfoPlayerView.tsx:            item?.positions as Position[],
./components/InfoPlayer/InfoPlayerView.tsx:        <Text className={`shrink font-heading ${ifWeb("text-xl", "text-2xl")}`}>
./components/ModalFilter/ModalFilterContainer.tsx:  }, [focusSelected]);
./components/ModalFilter/ModalFilterView.tsx:  <Actionsheet isOpen={isOpen} onClose={onClose}>
./components/PlayerDetail/PlayerDetailContainer.tsx:  const [showActionSheet, setShowActionSheet] = useState<boolean>(false);
./components/PlayerDetail/PlayerDetailContainer.tsx:  const handleAddPlayer = useCallback(() => setShowActionSheet(true), []);
./components/PlayerDetail/PlayerDetailContainer.tsx:  const handleClose = useCallback(() => setShowActionSheet(false), []);
./components/PlayerDetail/PlayerDetailView.tsx:      <RightColumn type={props.type} playerId={props.playerId} />
./components/PlayerDetail/components/CategoryMetricChart/CategoryMetricChartView.tsx:                          color={colors[key]}
./components/PlayerDetail/components/CategoryMetricChart/CategoryMetricChartView.tsx:                          points={points[key as keyof typeof points]}
./components/PlayerDetail/components/CategoryMetricChart/CategoryMetricChartView.tsx:                        color={colors[key]}
./components/PlayerDetail/components/CategoryMetricChart/CategoryMetricChartView.tsx:                        points={points[key as keyof typeof points]}
./components/PlayerDetail/components/CategoryMetricChart/CategoryMetricChartView.tsx:                yKeys={yKeys as never[]}
./components/PlayerDetail/components/CategoryMetricChart/CategoryMetricChartView.tsx:      <Heading {...ifWeb({ className: "text-base" }, {})}>{title}</Heading>
./components/PlayerDetail/components/CategoryMetricChart/CategoryMetricChartView.tsx:  [x: string]: string | number;
./components/PlayerDetail/components/CategoryMetricChart/CategoryMetricChartView.tsx:  data = [],
./components/PlayerDetail/components/CategoryMetricChart/CategoryMetricChartView.tsx:  data?: Data[];
./components/PlayerDetail/components/CategoryMetricChart/CategoryMetricChartView.tsx:  yKeys = [],
./components/PlayerDetail/components/CategoryMetricChart/CategoryMetricChartView.tsx:  yKeys?: string[];
./components/PlayerDetail/components/CategoryMetrics/CategoryMetricsContainer.tsx:            ([key, value]) => value !== null && key !== "__typename"
./components/PlayerDetail/components/CategoryMetrics/CategoryMetricsContainer.tsx:          <Box key={`${index}`} className="my-2">
./components/PlayerDetail/components/CategoryMetrics/CategoryMetricsContainer.tsx:      (player?.seasonCategoricalScores ?? []).map(obj => {
./components/PlayerDetail/components/CategoryMetrics/CategoryMetricsContainer.tsx:    [player.positions]
./components/PlayerDetail/components/CategoryMetrics/CategoryMetricsContainer.tsx:    [player?.seasonCategoricalScores]
./components/PlayerDetail/components/CenterColumn/CenterColumnContainer.tsx:            .filter(p => !!p) as string[],
./components/PlayerDetail/components/CenterColumn/CenterColumnContainer.tsx:          teamIds: (currentUser?.organization?.organizationTeams ?? []).map(
./components/PlayerDetail/components/CenterColumn/CenterColumnContainer.tsx:        <Heading size={ifWeb("lg", "xl")}>
./components/PlayerDetail/components/CenterColumn/CenterColumnContainer.tsx:    () => player?.scoutReports ?? [],
./components/PlayerDetail/components/CenterColumn/CenterColumnContainer.tsx:    () => processArrayWithCounts(bioData?.strengths ?? []),
./components/PlayerDetail/components/CenterColumn/CenterColumnContainer.tsx:    () => processArrayWithCounts(bioData?.weaknesses ?? []),
./components/PlayerDetail/components/CenterColumn/CenterColumnContainer.tsx:    [bioData, currencyCode]
./components/PlayerDetail/components/CenterColumn/CenterColumnContainer.tsx:    [bioData?.llmDerivedSummary]
./components/PlayerDetail/components/CenterColumn/CenterColumnContainer.tsx:    [bioData]
./components/PlayerDetail/components/CenterColumn/CenterColumnContainer.tsx:    [bioData]
./components/PlayerDetail/components/CenterColumn/CenterColumnContainer.tsx:    [player?.scoutReports]
./components/PlayerDetail/components/CenterColumn/CenterColumnContainer.tsx:    [playerId]
./components/PlayerDetail/components/CenterColumn/CenterColumnContainer.tsx:  const [flagToRenderModalDetail, setFlagToRenderModalDetail] =
./components/PlayerDetail/components/CenterColumn/CenterColumnContainer.tsx:  return Array.from(itemCountMap.entries()).map(([item, count]) =>
./components/PlayerDetail/components/CenterColumn/CenterColumnContainer.tsx:  }, []);
./components/PlayerDetail/components/CenterColumn/CenterColumnContainer.tsx:function processArrayWithCounts(items: string[]): string[] {
./components/PlayerDetail/components/CenterColumn/CenterColumnView.tsx:                      <Icon as={DotIcon} />
./components/PlayerDetail/components/CenterColumn/CenterColumnView.tsx:                      <Icon as={DotIcon} />
./components/PlayerDetail/components/CenterColumn/CenterColumnView.tsx:                      <Text size={ifWeb("md", "lg")}>{strength}</Text>
./components/PlayerDetail/components/CenterColumn/CenterColumnView.tsx:                      <Text size={ifWeb("md", "lg")}>{weakness}</Text>
./components/PlayerDetail/components/CenterColumn/CenterColumnView.tsx:                      className={ifWeb("", "w-[48%]")}
./components/PlayerDetail/components/CenterColumn/CenterColumnView.tsx:                    <HStack key={strength} className="items-center gap-1">
./components/PlayerDetail/components/CenterColumn/CenterColumnView.tsx:                    <HStack key={weakness} className="items-center gap-1">
./components/PlayerDetail/components/CenterColumn/CenterColumnView.tsx:                <ButtonText {...ifWeb({ className: "text-md" }, {})}>
./components/PlayerDetail/components/CenterColumn/CenterColumnView.tsx:            <Link asChild href={`/players/${player.id}/matches`}>
./components/PlayerDetail/components/CenterColumn/CenterColumnView.tsx:          <Heading size={ifWeb("lg", "xl")}>What Our Scouts Say</Heading>
./components/PlayerDetail/components/CenterColumn/CenterColumnView.tsx:          <Link asChild href={`/players/${player.id}/reports`} className="mt-4">
./components/PlayerDetail/components/CenterColumn/CenterColumnView.tsx:          <Text className={`pb-2 ${ifWeb("text-md", "text-lg")}`}>
./components/PlayerDetail/components/CenterColumn/CenterColumnView.tsx:        <VStack className={ifWeb("gap-4 pt-4", "gap-4")}>
./components/PlayerDetail/components/CenterColumn/CenterColumnView.tsx:  playerCompositeMetricsArray: (ICompositeMetric | null)[][];
./components/PlayerDetail/components/CenterColumn/CenterColumnView.tsx:  scoutReports: (PlayerDetailScoutReportsFragment | null)[];
./components/PlayerDetail/components/CenterColumn/CenterColumnView.tsx:  strengths: string[];
./components/PlayerDetail/components/CenterColumn/CenterColumnView.tsx:  weaknesses: string[];
./components/PlayerDetail/components/Chat/ChatContainer.tsx:                          ? data.content?.[0]?.text
./components/PlayerDetail/components/Chat/ChatContainer.tsx:                      ? data.content?.[0]?.text
./components/PlayerDetail/components/Chat/ChatContainer.tsx:        role: (e?.node?.role ?? "user") as IMessage["role"],
./components/PlayerDetail/components/Chat/ChatContainer.tsx:        text: (e?.node?.content ?? []).map(c => c?.text?.value).join(""),
./components/PlayerDetail/components/Chat/ChatContainer.tsx:    [connectionState, onSend, threadId, currentUserId, reset]
./components/PlayerDetail/components/Chat/ChatContainer.tsx:    [doSubmit, reset, setValue]
./components/PlayerDetail/components/Chat/ChatContainer.tsx:    [getSignedUrlForOpenAiFileId, playerId]
./components/PlayerDetail/components/Chat/ChatContainer.tsx:    [handleLinkPress]
./components/PlayerDetail/components/Chat/ChatContainer.tsx:    [openAiMessageData?.listOpenAiMessagesByThreadId.edges]
./components/PlayerDetail/components/Chat/ChatContainer.tsx:    [playerDataSummaryData?.getPlayerDataSummaryByPlayerId]
./components/PlayerDetail/components/Chat/ChatContainer.tsx:  const [getSignedUrlForOpenAiFileId] =
./components/PlayerDetail/components/Chat/ChatContainer.tsx:  const [initialQuestion, setInitialQuestion] = useState<
./components/PlayerDetail/components/Chat/ChatContainer.tsx:  const [isWaitingForResponse, setIsWaitingForResponse] = useState(false);
./components/PlayerDetail/components/Chat/ChatContainer.tsx:  const [messages, setMessages] = useState<IMessage[]>([]);
./components/PlayerDetail/components/Chat/ChatContainer.tsx:  }, [connectionState]);
./components/PlayerDetail/components/Chat/ChatContainer.tsx:  }, [connectionState]);
./components/PlayerDetail/components/Chat/ChatContainer.tsx:  }, [hasMessages, openAiMessages]);
./components/PlayerDetail/components/Chat/ChatContainer.tsx:  }, [router]);
./components/PlayerDetail/components/Chat/ChatView.tsx:              <FormControlErrorIcon as={AlertCircleIcon} />
./components/PlayerDetail/components/Chat/ChatView.tsx:  messages: IMessage[];
./components/PlayerDetail/components/Header/HeaderContainer.tsx:      (data?.listUserWatchlistsByWatchlistId?.edges ?? []).map(
./components/PlayerDetail/components/Header/HeaderContainer.tsx:    [currentUser?.id, isMyWatchlist, userWatchLists]
./components/PlayerDetail/components/Header/HeaderContainer.tsx:    [data?.listUserWatchlistsByWatchlistId?.edges]
./components/PlayerDetail/components/Header/HeaderContainer.tsx:    [pathName]
./components/PlayerDetail/components/Header/HeaderContainer.tsx:    [userWatchLists]
./components/PlayerDetail/components/Header/HeaderContainer.tsx:  const handleClickableShare = useCallback(() => changeShareVar(true), []);
./components/PlayerDetail/components/Header/HeaderContainer.tsx:  watchlists?: WatchlistWatchlistFragment[];
./components/PlayerDetail/components/Header/HeaderContainer.tsx:  }, []);
./components/PlayerDetail/components/Header/HeaderView.tsx:                    <ButtonIcon as={UserPlus} />
./components/PlayerDetail/components/Header/HeaderView.tsx:                  watchlists={watchlists ?? []}
./components/PlayerDetail/components/Header/HeaderView.tsx:          <HStack className={ifWeb("flex-1 pl-2", "flex-1")}>
./components/PlayerDetail/components/Header/HeaderView.tsx:      <Pressable onPress={onClickableShare} className={ifWeb("pl-2", "pl-4")}>
./components/PlayerDetail/components/Header/HeaderView.tsx:    <Searchbar onFocus={onSearchFocus} />
./components/PlayerDetail/components/Header/HeaderView.tsx:  collaborators: WatchlistUserFragment[];
./components/PlayerDetail/components/Header/HeaderView.tsx:  userWatchLists: WatchlistUserWatchlistFragment[];
./components/PlayerDetail/components/Header/HeaderView.tsx:  watchlists?: WatchlistWatchlistFragment[];
./components/PlayerDetail/components/HeaderPlayer/HeaderPlayerContainer.tsx:      : (bioData?.foot?.[0]?.toUpperCase?.() ?? "");
./components/PlayerDetail/components/HeaderPlayer/HeaderPlayerContainer.tsx:      tidbits={tidbits ?? []}
./components/PlayerDetail/components/HeaderPlayer/HeaderPlayerContainer.tsx:  const birthYear = bioData?.dateOfBirth?.split("-")[0]?.slice(2);
./components/PlayerDetail/components/HeaderPlayer/HeaderPlayerContainer.tsx:  }, [deleteRecommendationPlayer, player]);
./components/PlayerDetail/components/HeaderPlayer/HeaderPlayerContainer.tsx:  }, [isGoBack, onCloseUser, router]);
./components/PlayerDetail/components/HeaderPlayer/HeaderPlayerContainer.tsx:  }, [player, deletePlayer, activeWatchList]);
./components/PlayerDetail/components/HeaderPlayer/HeaderPlayerContainer.tsx:  }, [player?.id, router]);
./components/PlayerDetail/components/HeaderPlayer/HeaderPlayerContainer.tsx:  }, [router, player?.id, activeWatchList?.id, activeWatchList?.name]);
./components/PlayerDetail/components/HeaderPlayer/HeaderPlayerView.tsx:              <Text {...ifWeb({ size: "xl" }, {})}>{nationalityFlag}</Text>
./components/PlayerDetail/components/HeaderPlayer/HeaderPlayerView.tsx:              <Text {...ifWeb({ size: "xl" }, {})}>🚩</Text>
./components/PlayerDetail/components/HeaderPlayer/HeaderPlayerView.tsx:            <BadgeText {...ifWeb({ className: "font-bold" }, {})}>
./components/PlayerDetail/components/HeaderPlayer/HeaderPlayerView.tsx:            <ButtonIcon as={PlusIcon} className="text-info-500" />
./components/PlayerDetail/components/HeaderPlayer/HeaderPlayerView.tsx:            <ButtonIcon as={TrashIcon} className="text-info-500" />
./components/PlayerDetail/components/HeaderPlayer/HeaderPlayerView.tsx:            <ButtonIcon as={XIcon} className="text-gray-400" />
./components/PlayerDetail/components/HeaderPlayer/HeaderPlayerView.tsx:            <ButtonIcon size="lg" as={SearchIcon} className="text-info-500" />
./components/PlayerDetail/components/HeaderPlayer/HeaderPlayerView.tsx:          <Text size={ifWeb("md", "xl")}>{tidbit}</Text>
./components/PlayerDetail/components/HeaderPlayer/HeaderPlayerView.tsx:  tidbits: string[];
./components/PlayerDetail/components/LeftColumn/LeftColumnContainer.tsx:            ) || [],
./components/PlayerDetail/components/LeftColumn/LeftColumnContainer.tsx:          players: playerFilters as WatchlistPlayerFragment[],
./components/PlayerDetail/components/LeftColumn/LeftColumnContainer.tsx:    [playerSearch?.searchPlayers?.pageInfo]
./components/PlayerDetail/components/LeftColumn/LeftColumnContainer.tsx:  const [searchValue, setSearchValue] = useState<string>("");
./components/PlayerDetail/components/LeftColumn/LeftColumnContainer.tsx:  players: WatchlistPlayerFragment[];
./components/PlayerDetail/components/LeftColumn/LeftColumnContainer.tsx:  watchlists?: WatchlistWatchlistFragment[];
./components/PlayerDetail/components/LeftColumn/LeftColumnContainer.tsx:  }, [handleDebounceSearch, searchValueVar]);
./components/PlayerDetail/components/LeftColumn/LeftColumnContainer.tsx:  }, [pageInfoSearch, fetchMoreSearch, loadingSearch]);
./components/PlayerDetail/components/LeftColumn/LeftColumnView.tsx:  players: WatchlistPlayerFragment[];
./components/PlayerDetail/components/LeftColumn/LeftColumnView.tsx:  watchlists?: WatchlistWatchlistFragment[];
./components/PlayerDetail/components/ManageActionSheet/ManageActionSheetContainer.tsx:        ?.map(edge => edge?.node.watchlist) ?? [],
./components/PlayerDetail/components/ManageActionSheet/ManageActionSheetContainer.tsx:        refetchQueries: ["WatchlistListMyUserWatchlists"],
./components/PlayerDetail/components/ManageActionSheet/ManageActionSheetContainer.tsx:      [watchlists]
./components/PlayerDetail/components/ManageActionSheet/ManageActionSheetContainer.tsx:      const updatedItem = params.data[params.to];
./components/PlayerDetail/components/ManageActionSheet/ManageActionSheetContainer.tsx:    [data?.listMyUserWatchlists?.edges]
./components/PlayerDetail/components/ManageActionSheet/ManageActionSheetContainer.tsx:    [onClose]
./components/PlayerDetail/components/ManageActionSheet/ManageActionSheetContainer.tsx:    [updateUserWatchlistPosition]
./components/PlayerDetail/components/ManageActionSheet/ManageActionSheetContainer.tsx:  const [reorderedWatchlists, setReorderedWatchlists] = useState(watchlists);
./components/PlayerDetail/components/ManageActionSheet/ManageActionSheetContainer.tsx:  const [updateUserWatchlistPosition] =
./components/PlayerDetail/components/ManageActionSheet/ManageActionSheetContainer.tsx:  }, [watchlists]);
./components/PlayerDetail/components/ManageActionSheet/ManageActionSheetView.tsx:        <PanGestureHandler onGestureEvent={handleGesture}>
./components/PlayerDetail/components/ManageActionSheet/ManageActionSheetView.tsx:      <CustomPromptContainer ref={promptRef} />
./components/PlayerDetail/components/ManageActionSheet/ManageActionSheetView.tsx:    <Actionsheet isOpen={showActionsheet} onClose={onClose} closeOnOverlayClick>
./components/PlayerDetail/components/ManageActionSheet/ManageActionSheetView.tsx:  <GestureHandlerRootView style={{ flex: 1 }}>
./components/PlayerDetail/components/ManageActionSheet/ManageActionSheetView.tsx:  watchlists: PlayerSearchWatchlistFragment[];
./components/PlayerDetail/components/PlusMinusChart/PlusMinusChartContainer.tsx:      (player.seasonWeightedAvgMetrics ?? []) as IScore[],
./components/PlayerDetail/components/PopoverMenu/PopoverMenuContainer.tsx:    []
./components/PlayerDetail/components/PopoverMenu/PopoverMenuContainer.tsx:    [handleClose, onSelect]
./components/PlayerDetail/components/PopoverMenu/PopoverMenuContainer.tsx:  const [isOpen, setIsOpen] = useState(false);
./components/PlayerDetail/components/PopoverMenu/PopoverMenuContainer.tsx:  const [showActionsheet, setShowActionsheet] = useState(false);
./components/PlayerDetail/components/PopoverMenu/PopoverMenuContainer.tsx:  watchlists: WatchlistWatchlistFragment[];
./components/PlayerDetail/components/PopoverMenu/PopoverMenuContainer.tsx:  }, []);
./components/PlayerDetail/components/PopoverMenu/PopoverMenuContainer.tsx:  }, [handleClose]);
./components/PlayerDetail/components/PopoverMenu/PopoverMenuContainer.tsx:  }, [onCallbackOpen]);
./components/PlayerDetail/components/PopoverMenu/PopoverMenuView.tsx:                      <Icon as={CheckIcon} />
./components/PlayerDetail/components/PopoverMenu/PopoverMenuView.tsx:                  <Box className={ifWeb("w-4 mr-2", "w-4")}>
./components/PlayerDetail/components/PopoverMenu/PopoverMenuView.tsx:                  <Icon as={AddIcon} />
./components/PlayerDetail/components/PopoverMenu/PopoverMenuView.tsx:                  <Icon as={SettingsIcon} />
./components/PlayerDetail/components/PopoverMenu/PopoverMenuView.tsx:                  {!selectedWatchlist?.name ? <Icon as={CheckIcon} /> : null}
./components/PlayerDetail/components/PopoverMenu/PopoverMenuView.tsx:            <Pressable disabled={loading} onPress={onAddWatchlistPress}>
./components/PlayerDetail/components/PopoverMenu/PopoverMenuView.tsx:            <Pressable onPress={onActionsheetOpen}>
./components/PlayerDetail/components/PopoverMenu/PopoverMenuView.tsx:            <Pressable onPress={onClose}>
./components/PlayerDetail/components/PopoverMenu/PopoverMenuView.tsx:      <ManageActionSheet show={showActionsheet} onClose={onActionsheetClose} />
./components/PlayerDetail/components/PopoverMenu/PopoverMenuView.tsx:  watchlists: WatchlistWatchlistFragment[];
./components/PlayerDetail/components/RightColumn/RightColumnContainer.tsx:    () => data?.listPlayerRecommendations ?? [],
./components/PlayerDetail/components/RightColumn/RightColumnContainer.tsx:    []
./components/PlayerDetail/components/RightColumn/RightColumnContainer.tsx:    [data?.listPlayerRecommendations]
./components/PlayerDetail/components/RightColumn/RightColumnContainer.tsx:    [loading]
./components/PlayerDetail/components/RightColumn/RightColumnContainer.tsx:    [recommendationsCategorySelected, refetch]
./components/PlayerDetail/components/RightColumn/RightColumnContainer.tsx:  }, [noteState]);
./components/PlayerDetail/components/RightColumn/RightColumnView.tsx:              renderItem={({ item }) => <RecommendationPlayer data={item} />}
./components/PlayerDetail/components/RightColumn/RightColumnView.tsx:            <Heading size="xl" className={`flex-1 ${ifWeb("text-xl", "")}`}>
./components/PlayerDetail/components/RightColumn/RightColumnView.tsx:            <Heading size="xl" {...ifWeb({ className: "text-xl" }, {})}>
./components/PlayerDetail/components/RightColumn/RightColumnView.tsx:            <NotesForm playerId={playerId ?? ""} />
./components/PlayerDetail/components/RightColumn/RightColumnView.tsx:            <NotesList playerId={playerId ?? ""} />
./components/PlayerDetail/components/RightColumn/RightColumnView.tsx:  data: RecommendationsPlayerRecommendationResultFragment[];
./components/PlayerDetail/components/Share/ShareContainer.tsx:      (userData?.listMyOrganizationsOrganizationUsers?.edges ?? []).map(
./components/PlayerDetail/components/Share/ShareContainer.tsx:    [collaborators, currentUser?.id, isMyWatchList, users]
./components/PlayerDetail/components/Share/ShareContainer.tsx:    [loading, isRefreshing, users.length]
./components/PlayerDetail/components/Share/ShareContainer.tsx:    [userData?.listMyOrganizationsOrganizationUsers?.edges]
./components/PlayerDetail/components/Share/ShareContainer.tsx:  collaborators: WatchlistUserFragment[];
./components/PlayerDetail/components/Share/ShareContainer.tsx:  const handleClose = useCallback(() => changeShareVar(false), []);
./components/PlayerDetail/components/Share/ShareContainer.tsx:  const handleRefresh = useCallback(() => refetch().catch(() => {}), [refetch]);
./components/PlayerDetail/components/Share/ShareContainer.tsx:  userWatchLists: WatchlistUserWatchlistFragment[];
./components/PlayerDetail/components/Share/ShareView.tsx:              colors={["white"]}
./components/PlayerDetail/components/Share/ShareView.tsx:          <ButtonIcon size="lg" as={CloseIcon} className="text-info-500" />
./components/PlayerDetail/components/Share/ShareView.tsx:          className={`ml-2 max-w-[300px] ${ifWeb("text-lg", "")}`}
./components/PlayerDetail/components/Share/ShareView.tsx:    snapPoints={Platform.OS !== "web" ? [75] : undefined}
./components/PlayerDetail/components/Share/ShareView.tsx:  users: WatchlistUserFragment[];
./components/PlayerDetail/components/ShareActionItem/ShareActionItemContainer.tsx:              [`listUserWatchlistsByWatchlistId:{"watchlistId":"${watchlistId}"}`](
./components/PlayerDetail/components/ShareActionItem/ShareActionItemContainer.tsx:              [`listUserWatchlistsByWatchlistId:{"watchlistId":"${watchlistId}"}`](
./components/PlayerDetail/components/ShareActionItem/ShareActionItemContainer.tsx:              listMyUserWatchlists(existingUserWatchlists = []) {
./components/PlayerDetail/components/ShareActionItem/ShareActionItemContainer.tsx:            <Icon as={XIcon} size="xl" />
./components/PlayerDetail/components/ShareActionItem/ShareActionItemContainer.tsx:            transform: [{ translateX }, { scaleX: scale }],
./components/PlayerDetail/components/ShareActionItem/ShareActionItemContainer.tsx:        inputRange: [-150, -100, 0],
./components/PlayerDetail/components/ShareActionItem/ShareActionItemContainer.tsx:        inputRange: [0, 1],
./components/PlayerDetail/components/ShareActionItem/ShareActionItemContainer.tsx:        outputRange: [1.5, 0.8, 0],
./components/PlayerDetail/components/ShareActionItem/ShareActionItemContainer.tsx:        outputRange: [Dimensions.get("window").width, 0],
./components/PlayerDetail/components/ShareActionItem/ShareActionItemContainer.tsx:    [handlePressDelete]
./components/PlayerDetail/components/ShareActionItem/ShareActionItemContainer.tsx:    [handleRemoveMeFromWatchlist]
./components/PlayerDetail/components/ShareActionItem/ShareActionItemContainer.tsx:  const [createUserWatchlist, { loading: createLoading }] =
./components/PlayerDetail/components/ShareActionItem/ShareActionItemContainer.tsx:  const [deleteUserWatchlist, { loading: deleteLoading }] =
./components/PlayerDetail/components/ShareActionItem/ShareActionItemContainer.tsx:  }, [createUserWatchlist, deleteUserWatchlist, isAlready]);
./components/PlayerDetail/components/ShareActionItem/ShareActionItemContainer.tsx:  }, [deleteUserWatchlist, onCloseShare, watchlistId]);
./components/PlayerDetail/components/ShareActionItem/ShareActionItemContainer.tsx:  }, [handleRemoveMeFromWatchlist]);
./components/PlayerDetail/components/ShareActionItem/ShareActionItemView.web.tsx:        <ButtonIcon as={TrashIcon} className="text-info-500" />
./components/PlayerDetail/components/WatchlistItem/WatchlistItemContainer.tsx:            listMyUserWatchlists(existingUserWatchlists = []) {
./components/PlayerDetail/components/WatchlistItem/WatchlistItemContainer.tsx:  const [deleteWatchlist] = useWatchlistDeleteWatchlistMutation({
./components/PlayerDetail/components/WatchlistItem/WatchlistItemContainer.tsx:  const [updateWatchList] = useWatchlistUpdateWatchlistMutation({
./components/PlayerDetail/components/WatchlistItem/WatchlistItemContainer.tsx:  }, [canBeDeleted, deleteWatchlist, item]);
./components/PlayerDetail/components/WatchlistItem/WatchlistItemContainer.tsx:  }, [item, promptRef, updateWatchList]);
./components/PlayerDetail/components/WatchlistItem/WatchlistItemView.tsx:            <Button disabled={loading} variant="link" onPress={onRemovePress}>
./components/PlayerDetail/components/WatchlistItem/WatchlistItemView.tsx:            <ButtonIcon as={Pencil} className="text-info-500" />
./components/PlayerItem/PlayerItemContainer.tsx:    [item, watchlist]
./components/PlayerItem/PlayerItemContainer.tsx:  const [removePlayer, { loading }] =
./components/PlayerItem/PlayerItemContainer.tsx:  const [showActionsheet, setShowActionsheet] = useState(false);
./components/PlayerItem/PlayerItemContainer.tsx:  }, []);
./components/PlayerItem/PlayerItemContainer.tsx:  }, []);
./components/PlayerItem/PlayerItemContainer.tsx:  }, [item, removePlayer]);
./components/PlayerItem/PlayerItemContainer.tsx:  }, [item.id, router, watchlist?.id, watchlist?.name]);
./components/PlayerItem/PlayerItemContainer.tsx:  }, [item.id, router]);
./components/PlayerItem/PlayerItemContainer.tsx:  }, [item.id, router]);
./components/PlayerItem/PlayerItemContainer.tsx:  }, [item?.bioData, watchlistShowsSetting]);
./components/PlayerList/PlayerListContainer.tsx:      <PlayerItem isActive={false} item={item} watchlist={activeWatchlist} />
./components/PlayerList/PlayerListContainer.tsx:    [activeWatchlist]
./components/PlayerList/PlayerListContainer.tsx:    [loading, refreshing, players.length]
./components/PlayerList/PlayerListContainer.tsx:  players: WatchlistPlayerFragment[];
./components/PlayerList/PlayerListView.tsx:        colors={["white"]}
./components/PlayerList/PlayerListView.tsx:  players: WatchlistPlayerFragment[];
./components/ResetButton/ResetButtonContainer.tsx:  return <ResetButtonView onPress={handlePress} />;
./components/ResetButton/ResetButtonContainer.tsx:  }, []);
./components/ResetButton/ResetButtonView.tsx:  <Button className="mr-4" variant="link" onPress={onPress}>
./components/SearchResultsItem/SearchResultsItemContainer.tsx:  const [showActionsheet, setShowActionsheet] = useState(false);
./components/SearchResultsItem/SearchResultsItemContainer.tsx:  const handleAddPress = useCallback(() => setShowActionsheet(true), []);
./components/SearchResultsItem/SearchResultsItemContainer.tsx:  const handleClose = useCallback(() => setShowActionsheet(false), []);
./components/SearchResultsItem/SearchResultsItemContainer.tsx:  }, [goToDetailPlayer, item, onPressSimilarPlayer, router]);
./components/SearchResultsItem/SearchResultsItemContainer.tsx:  }, [goToSimilarPlayers, item?.id, router]);
./components/SearchResultsItem/SearchResultsItemView.tsx:              item?.positions as Position[],
./components/SearchResultsItem/SearchResultsItemView.tsx:          className={`mr-2 items-center justify-center rounded-full p-1 ${isPlayerInAnyWatchlist ? "bg-[#0b8dcd]" : "bg-[#26252A]"}`}
./components/SearchResultsItem/SearchResultsItemView.tsx:    <TouchableWithoutFeedback onPress={onPress} disabled={loading}>
./components/Searchbar/SearchbarContainer.tsx:    }, [displayDoneButton])
./components/Searchbar/SearchbarContainer.tsx:  const handleOpenFilter = useCallback(() => showFilterVar(true), []);
./components/Searchbar/SearchbarContainer.tsx:  }, []);
./components/Searchbar/SearchbarContainer.tsx:  }, []);
./components/Searchbar/SearchbarContainer.tsx:  }, [focusValue.type, handleDone, handleFilterDone]);
./components/Searchbar/SearchbarContainer.tsx:  }, [router]);
./components/Searchbar/SearchbarView.tsx:              className="size-[24px] items-center justify-center rounded-full bg-info-500"
./components/Searchbar/SearchbarView.tsx:            <InputIcon as={SearchIcon} size="xl" />
./components/SelectionSortPopover/SelectionSortPopoverContainer.tsx:    [isSortPlayerEnable, type]
./components/SelectionSortPopover/SelectionSortPopoverContainer.tsx:    [type]
./components/SelectionSortPopover/SelectionSortPopoverContainer.tsx:  const [isOpenPopover, setIsOpenPopover] = useState<boolean>(false);
./components/SelectionSortPopover/SelectionSortPopoverContainer.tsx:  const handleClosePopover = useCallback(() => setIsOpenPopover(false), []);
./components/SelectionSortPopover/SelectionSortPopoverContainer.tsx:  const handleOpenPopover = useCallback(() => setIsOpenPopover(true), []);
./components/SelectionSortPopover/SelectionSortPopoverContainer.tsx:  }, [isSortPlayerEnable, similaritySortSetting, type, watchlistSortSetting]);
./components/SelectionSortPopover/SelectionSortPopoverView.tsx:                <Text className={`font-medium ${ifWeb("text-md", "text-lg")}`}>
./components/SelectionSortPopover/SelectionSortPopoverView.tsx:                <Text className={`font-medium ${ifWeb("text-md", "text-lg")}`}>
./components/SelectionSortPopover/SelectionSortPopoverView.tsx:                <Text className={`font-medium ${ifWeb("text-md", "text-lg")}`}>
./components/SelectionSortPopover/SelectionSortPopoverView.tsx:        <ButtonIcon as={buttonIcon} size="md" className="text-info-500" />
./components/SelectionSortPopover/SelectionSortPopoverView.tsx:        edges={["bottom"]}
./components/SelectionSortPopover/SelectionSortPopoverView.tsx:  menuSelectionSortList: IMenuSelection[];
./components/WatchlistAddRemoveButton/WatchlistAddRemoveButtonAddRemoveButtonContainer.tsx:    [watchlist.id]
./components/WatchlistAddRemoveButton/WatchlistAddRemoveButtonAddRemoveButtonContainer.tsx:  const [addPlayer] = usePlayerSearchAddPlayerToWatchlistMutation({
./components/WatchlistAddRemoveButton/WatchlistAddRemoveButtonAddRemoveButtonContainer.tsx:  const [isSelected, setIsSelected] = useState<boolean>(isPlayerSelected);
./components/WatchlistAddRemoveButton/WatchlistAddRemoveButtonAddRemoveButtonContainer.tsx:  const [removePlayer, { loading: removeLoading }] =
./components/WatchlistAddRemoveButton/WatchlistAddRemoveButtonView.tsx:          onPress={() => onChange([watchlist.id])}
./components/WatchlistAddRemoveButton/WatchlistAddRemoveButtonView.tsx:        value={isPlayerSelected ? [watchlist.id] : []}
./components/WatchlistAddRemoveButton/WatchlistAddRemoveButtonView.tsx:    <HStack className={`items-center gap-0 ${ifWeb("px-4", "px-5")}`}>
./components/WatchlistAddRemoveButton/WatchlistAddRemoveButtonView.tsx:    onPress={() => onChange(isPlayerSelected ? [watchlist.id] : [])}
./components/WatchlistAddRemoveButton/WatchlistAddRemoveButtonView.tsx:  onChange: (watchlistIds: string[]) => void;
./components/WatchlistSelectButton/WatchlistSelectButtonView.tsx:      <SelectIcon className="mr-3" as={ChevronDownIcon} />
./components/WatchlistSelectButton/WatchlistSelectButtonView.tsx:  watchlists: WatchlistWatchlistFragment[];
./components/elements/CustomHeader/CustomHeaderContainer.tsx:    <CustomHeaderView firstName={firstName} onLogoPress={handleLogoPress} />
./components/elements/CustomHeader/CustomHeaderContainer.tsx:  }, [router]);
./components/elements/CustomHeader/CustomHeaderView.tsx:            <Icon as={LogoIcon} size="4xl" className="" />
./components/elements/CustomHeader/CustomHeaderView.tsx:            <Icon as={LogoIcon} size={ifWeb("2xl", "4xl")} className="" />
./components/elements/CustomHeader/CustomHeaderView.tsx:          <Pressable onPress={onLogoPress}>
./components/elements/CustomHeader/CustomHeaderView.tsx:          <Pressable onPress={onLogoPress}>
./components/elements/CustomHeader/CustomHeaderView.tsx:        <HStack className={ifWeb("gap-5 items-center py-2", "gap-5")}>
./components/elements/CustomHeader/CustomHeaderView.tsx:  <View className={ifWeb("border-b border-background-200", "mb-6")}>
./components/elements/CustomPrompt/CustomPromptContainer.tsx:      []
./components/elements/CustomPrompt/CustomPromptContainer.tsx:    const [data, setData] = useState<DataProps | undefined>(undefined);
./components/elements/CustomPrompt/CustomPromptContainer.tsx:    const [isOpen, setIsOpen] = useState<boolean>(false);
./components/elements/CustomPrompt/CustomPromptContainer.tsx:    const [valueInput, setValueInput] = useState<string>("");
./components/elements/CustomPrompt/CustomPromptContainer.tsx:    }, []);
./components/elements/CustomPrompt/CustomPromptContainer.tsx:    }, [data, handleClose, valueInput]);
./components/elements/CustomPrompt/CustomPromptContainer.tsx:    }, [handleReset]);
./components/elements/CustomPrompt/CustomPromptContainer.tsx:    }, [isOpen]);
./components/elements/LoadingPage/LoadingPageContainer.tsx:    [handleHideLoading, handleShowLoading, loading]
./components/elements/LoadingPage/LoadingPageContainer.tsx:  const [loading, setLoading] = useState<boolean>(false);
./components/elements/LoadingPage/LoadingPageContainer.tsx:  const handleHideLoading = useCallback(() => setLoading(false), []);
./components/elements/LoadingPage/LoadingPageContainer.tsx:  const handleShowLoading = useCallback(() => setLoading(true), []);
./components/elements/LoadingPage/LoadingPageContainer.tsx:  return <LoadingPageView loading={loading} />;
./components/elements/LoadingPage/LoadingPageView.tsx:    <Modal isOpen={loading} useRNModal={Platform.OS !== "web"}>
./components/elements/Skeleton/SkeletonList/SkeletonListContainer.tsx:        return <SkeletonManage type={type} />;
./components/elements/Skeleton/SkeletonList/SkeletonListContainer.tsx:  }, [type]);
./components/elements/Skeleton/SkeletonPlaceholder/SkeletonPlaceholderContainer.tsx:      [0, 1],
./components/elements/Skeleton/SkeletonPlaceholder/SkeletonPlaceholderContainer.tsx:      [layout ? -layout.width : 0, layout ? layout.width : 0]
./components/elements/Skeleton/SkeletonPlaceholder/SkeletonPlaceholderContainer.tsx:      transform: [{ translateX: x }],
./components/elements/Skeleton/SkeletonPlaceholder/SkeletonPlaceholderContainer.tsx:    []
./components/elements/Skeleton/SkeletonPlaceholder/SkeletonPlaceholderContainer.tsx:    return <View onLayout={handleLayout}>{children}</View>;
./components/elements/Skeleton/SkeletonPlaceholder/SkeletonPlaceholderContainer.tsx:  const [layout, setLayout] = React.useState<LayoutRectangle>();
./components/elements/Skeleton/SkeletonPlaceholder/SkeletonPlaceholderContainer.tsx:  }, [sharedAnimated]);
./components/elements/Skeleton/SkeletonPlaceholder/SkeletonPlaceholderView.tsx:            colors={["transparent", "black", "transparent"]}
./components/elements/Skeleton/SkeletonPlaceholder/SkeletonPlaceholderView.tsx:    <Reanimated.View style={[StyleSheet.absoluteFill, animStyle]}>
./components/elements/Skeleton/components/SkeletonComparePlayer/SkeletonComparePlayerView.tsx:  const skeletonMetrics = chunkArrayWithPadding<boolean[]>(
./components/elements/Skeleton/components/SkeletonFilterRole/SkeletonFilterRoleView.tsx:        <HStack key={`role_${i.toString()}`} className="gap-3">
./components/elements/Skeleton/components/SkeletonFilterRole/SkeletonFilterRoleView.tsx:const skeletonRoles = chunkArrayWithPadding<boolean[]>(
./components/elements/Skeleton/components/SkeletonPlayerDetail/SkeletonPlayerDetailView.tsx:  const skeletonMetrics = chunkArrayWithPadding<boolean[]>(
./components/ui/accordion/index.tsx:      md: "h-[18px] w-[18px]",
./components/ui/accordion/index.tsx:    }, [size, height, width]);
./components/ui/accordion/index.tsx:  base: "w-full py-5 px-5 flex-row justify-between items-center web:outline-none focus:outline-none data-[disabled=true]:opacity-40 data-[disabled=true]:cursor-not-allowed data-[focus-visible=true]:bg-background-50",
./components/ui/actionsheet/index.tsx:      'md': 'w-[18px] h-[18px]',
./components/ui/actionsheet/index.tsx:    }, [size, height, width]);
./components/ui/actionsheet/index.tsx:  base: 'w-full flex-row items-center p-3 rounded-sm data-[disabled=true]:opacity-40 data-[disabled=true]:web:pointer-events-auto data-[disabled=true]:web:cursor-not-allowed hover:bg-background-50 active:bg-background-100 data-[focus=true]:bg-background-100 web:data-[focus-visible=true]:bg-background-100 web:data-[focus-visible=true]:outline-indicator-primary gap-2',
./components/ui/actionsheet/index.tsx:  return <Pressable {...props} ref={ref} />;
./components/ui/alert-dialog/index.tsx:      lg: 'w-[90%] max-w-[640px]',
./components/ui/alert-dialog/index.tsx:      md: 'w-[80%] max-w-[510px]',
./components/ui/alert-dialog/index.tsx:      sm: 'w-[70%] max-w-[420px]',
./components/ui/alert-dialog/index.tsx:      xs: 'w-[60%] max-w-[360px]',
./components/ui/alert-dialog/index.tsx:  base: 'group/alert-dialog-close-button z-10 rounded-sm p-2 data-[focus-visible=true]:bg-background-100 web:cursor-pointer outline-0',
./components/ui/alert/index.tsx:      'md': 'h-[18px] w-[18px]',
./components/ui/alert/index.tsx:    }, [size, height, width]);
./components/ui/alert/index.tsx:  return <PrimitiveIcon {...props} ref={ref} />;
./components/ui/avatar/index.tsx:  base: 'rounded-full justify-center items-center relative bg-primary-600 group-[.avatar-group]/avatar-group:-ml-2.5',
./components/ui/badge/index.tsx:    }, [size, height, width]);
./components/ui/badge/index.tsx:  base: 'flex-row items-center rounded-sm data-[disabled=true]:opacity-50 px-2 py-1',
./components/ui/bottomsheet/index.tsx:          <FocusScope contain={visible} autoFocus={true} restoreFocus={true}>
./components/ui/bottomsheet/index.tsx:    [handleClose]
./components/ui/bottomsheet/index.tsx:  const [visible, setVisible] = useState(false);
./components/ui/bottomsheet/index.tsx:  return <Text {...props} />;
./components/ui/bottomsheet/index.tsx:  snapPoints: string[];
./components/ui/bottomsheet/index.tsx:  }, [handleClose]);
./components/ui/bottomsheet/index.tsx:  }, [onClose]);
./components/ui/bottomsheet/index.tsx:  }, [onOpen, snapToIndex]);
./components/ui/box/index.tsx:      <View ref={ref} {...props} className={boxStyle({ class: className })} />
./components/ui/button/index.tsx:        'bg-error-500 border-error-300 data-[hover=true]:bg-error-600 data-[hover=true]:border-error-400 data-[active=true]:bg-error-700 data-[active=true]:border-error-500 data-[focus-visible=true]:web:ring-indicator-info',
./components/ui/button/index.tsx:        'bg-primary-500 data-[hover=true]:bg-primary-600 data-[active=true]:bg-primary-700 border-primary-300 data-[hover=true]:border-primary-400 data-[active=true]:border-primary-500 data-[focus-visible=true]:web:ring-indicator-info',
./components/ui/button/index.tsx:        'bg-secondary-500 border-secondary-300 data-[hover=true]:bg-secondary-600 data-[hover=true]:border-secondary-400 data-[active=true]:bg-secondary-700 data-[active=true]:border-secondary-500 data-[focus-visible=true]:web:ring-indicator-info',
./components/ui/button/index.tsx:        'bg-success-500 border-success-300 data-[hover=true]:bg-success-600 data-[hover=true]:border-success-400 data-[active=true]:bg-success-700 data-[active=true]:border-success-500 data-[focus-visible=true]:web:ring-indicator-info',
./components/ui/button/index.tsx:        'bg-transparent border data-[hover=true]:bg-background-50 data-[active=true]:bg-transparent',
./components/ui/button/index.tsx:        'bg-transparent data-[hover=true]:bg-background-50 data-[active=true]:bg-transparent',
./components/ui/button/index.tsx:        'bg-transparent data-[hover=true]:bg-background-50 data-[active=true]:bg-transparent',
./components/ui/button/index.tsx:        'bg-transparent data-[hover=true]:bg-background-50 data-[active=true]:bg-transparent',
./components/ui/button/index.tsx:        'bg-transparent data-[hover=true]:bg-background-50 data-[active=true]:bg-transparent',
./components/ui/button/index.tsx:        'bg-transparent data-[hover=true]:bg-background-50 data-[active=true]:bg-transparent',
./components/ui/button/index.tsx:        'px-0 bg-transparent data-[hover=true]:bg-transparent data-[active=true]:bg-transparent',
./components/ui/button/index.tsx:        'px-0 bg-transparent data-[hover=true]:bg-transparent data-[active=true]:bg-transparent',
./components/ui/button/index.tsx:        'px-0 bg-transparent data-[hover=true]:bg-transparent data-[active=true]:bg-transparent',
./components/ui/button/index.tsx:        'px-0 bg-transparent data-[hover=true]:bg-transparent data-[active=true]:bg-transparent',
./components/ui/button/index.tsx:        'text-error-600 data-[hover=true]:text-error-600 data-[active=true]:text-error-700',
./components/ui/button/index.tsx:        'text-error-600 data-[hover=true]:text-error-600 data-[active=true]:text-error-700',
./components/ui/button/index.tsx:        'text-primary-500 data-[hover=true]:text-primary-500 data-[active=true]:text-primary-500',
./components/ui/button/index.tsx:        'text-primary-500 data-[hover=true]:text-primary-500 data-[active=true]:text-primary-500',
./components/ui/button/index.tsx:        'text-primary-500 data-[hover=true]:text-primary-500 data-[active=true]:text-primary-500',
./components/ui/button/index.tsx:        'text-primary-500 data-[hover=true]:text-primary-500 data-[active=true]:text-primary-500',
./components/ui/button/index.tsx:        'text-primary-600 data-[hover=true]:text-primary-600 data-[active=true]:text-primary-700',
./components/ui/button/index.tsx:        'text-primary-600 data-[hover=true]:text-primary-600 data-[active=true]:text-primary-700',
./components/ui/button/index.tsx:        'text-secondary-600 data-[hover=true]:text-secondary-600 data-[active=true]:text-secondary-700',
./components/ui/button/index.tsx:        'text-secondary-600 data-[hover=true]:text-secondary-600 data-[active=true]:text-secondary-700',
./components/ui/button/index.tsx:        'text-success-600 data-[hover=true]:text-success-600 data-[active=true]:text-success-700',
./components/ui/button/index.tsx:        'text-success-600 data-[hover=true]:text-success-600 data-[active=true]:text-success-700',
./components/ui/button/index.tsx:        'text-typography-0 data-[hover=true]:text-typography-0 data-[active=true]:text-typography-0',
./components/ui/button/index.tsx:        'text-typography-0 data-[hover=true]:text-typography-0 data-[active=true]:text-typography-0',
./components/ui/button/index.tsx:        'text-typography-0 data-[hover=true]:text-typography-0 data-[active=true]:text-typography-0',
./components/ui/button/index.tsx:        'text-typography-0 data-[hover=true]:text-typography-0 data-[active=true]:text-typography-0',
./components/ui/button/index.tsx:        'text-typography-0 data-[hover=true]:text-typography-0 data-[active=true]:text-typography-0',
./components/ui/button/index.tsx:        'text-typography-0 data-[hover=true]:text-typography-0 data-[active=true]:text-typography-0',
./components/ui/button/index.tsx:        'text-typography-0 data-[hover=true]:text-typography-0 data-[active=true]:text-typography-0',
./components/ui/button/index.tsx:        'text-typography-0 data-[hover=true]:text-typography-0 data-[active=true]:text-typography-0',
./components/ui/button/index.tsx:        'text-typography-0 data-[hover=true]:text-typography-0 data-[active=true]:text-typography-0',
./components/ui/button/index.tsx:        'text-typography-0 data-[hover=true]:text-typography-0 data-[active=true]:text-typography-0',
./components/ui/button/index.tsx:      lg: 'h-[18px] w-[18px]',
./components/ui/button/index.tsx:      link: 'data-[hover=true]:underline data-[active=true]:underline',
./components/ui/button/index.tsx:      link: 'data-[hover=true]:underline data-[active=true]:underline',
./components/ui/button/index.tsx:      md: 'h-[18px] w-[18px]',
./components/ui/button/index.tsx:    }, [size, height, width]);
./components/ui/button/index.tsx:  base: 'group/button rounded bg-primary-500 flex-row items-center justify-center data-[focus-visible=true]:web:outline-none data-[focus-visible=true]:web:ring-2 data-[disabled=true]:opacity-40',
./components/ui/checkbox/index.tsx:      lg: 'w-6 h-6 border-[3px]',
./components/ui/checkbox/index.tsx:    return <Text {...props} ref={ref} />;
./components/ui/checkbox/index.tsx:    }, [size, height, width]);
./components/ui/checkbox/index.tsx:  base: 'group/checkbox flex-row items-center justify-start web:cursor-pointer data-[disabled=true]:cursor-not-allowed',
./components/ui/checkbox/index.tsx:  base: 'justify-center items-center border-outline-400 bg-transparent rounded web:data-[focus-visible=true]:outline-none web:data-[focus-visible=true]:ring-2 web:data-[focus-visible=true]:ring-indicator-primary data-[checked=true]:bg-primary-600 data-[checked=true]:border-primary-600 data-[hover=true]:data-[checked=false]:border-outline-500 data-[hover=true]:bg-transparent data-[hover=true]:data-[invalid=true]:border-error-700 data-[hover=true]:data-[checked=true]:bg-primary-700 data-[hover=true]:data-[checked=true]:border-primary-700 data-[hover=true]:data-[checked=true]:data-[disabled=true]:border-primary-600 data-[hover=true]:data-[checked=true]:data-[disabled=true]:bg-primary-600 data-[hover=true]:data-[checked=true]:data-[disabled=true]:opacity-40 data-[hover=true]:data-[checked=true]:data-[disabled=true]:data-[invalid=true]:border-error-700 data-[hover=true]:data-[disabled=true]:border-outline-400 data-[hover=true]:data-[disabled=true]:data-[invalid=true]:border-error-700 data-[active=true]:data-[checked=true]:bg-primary-800 data-[active=true]:data-[checked=true]:border-primary-800 data-[invalid=true]:border-error-700 data-[disabled=true]:opacity-40',
./components/ui/checkbox/index.tsx:  base: 'text-typography-600 data-[checked=true]:text-typography-900 data-[hover=true]:text-typography-900 data-[hover=true]:data-[checked=true]:text-typography-900 data-[hover=true]:data-[checked=true]:data-[disabled=true]:text-typography-900 data-[hover=true]:data-[disabled=true]:text-typography-400 data-[active=true]:text-typography-900 data-[active=true]:data-[checked=true]:text-typography-900 data-[disabled=true]:opacity-40 web:select-none',
./components/ui/checkbox/index.tsx:  return <PrimitiveIcon {...props} ref={ref} />;
./components/ui/checkbox/index.tsx:  return <View {...props} ref={ref} />;
./components/ui/fab/index.tsx:      'md': 'w-[18px] h-[18px]',
./components/ui/fab/index.tsx:    }, [size, height, width]);
./components/ui/fab/index.tsx:  base: 'group/fab bg-primary-500 rounded-full z-20 p-4 flex-row items-center justify-center absolute hover:bg-primary-600 active:bg-primary-700 disabled:opacity-40 disabled:pointer-events-all disabled:cursor-not-allowed data-[focus=true]:web:outline-none data-[focus-visible=true]:web:ring-2 data-[focus-visible=true]:web:ring-indicator-info shadow-hard-2',
./components/ui/form-control/index.tsx:      'md': 'h-[18px] w-[18px]',
./components/ui/form-control/index.tsx:    }, [size, height, width]);
./components/ui/gluestack-ui-provider/index.tsx:        config[mode],
./components/ui/gluestack-ui-provider/index.tsx:  style?: ViewProps['style'];
./components/ui/gluestack-ui-provider/index.web.tsx:        let style = head?.querySelector(`[id='${styleTagId}']`);
./components/ui/gluestack-ui-provider/index.web.tsx:    acc += `${cur}:${config[mode][cur]};`;
./components/ui/gluestack-ui-provider/index.web.tsx:    if (config[mode] && typeof document !== "undefined") {
./components/ui/gluestack-ui-provider/index.web.tsx:  const stringcssvars = Object.keys(config[mode]).reduce((acc, cur) => {
./components/ui/gluestack-ui-provider/index.web.tsx:  }, [mode]);
./components/ui/grid/index.tsx:          return itemsPerRow[key].includes(props?.index);
./components/ui/grid/index.tsx:        const rowColsCount = itemsPerRow[row as string].length;
./components/ui/grid/index.tsx:      : [i];
./components/ui/grid/index.tsx:      ? [...rowItemsCount[currentRow], i]
./components/ui/grid/index.tsx:      const prefix = match[1] || 'default';
./components/ui/grid/index.tsx:      const prefix = match[1] || 'default';
./components/ui/grid/index.tsx:      const value = parseInt(match[2], 10);
./components/ui/grid/index.tsx:      const value = parseInt(match[2], 10);
./components/ui/grid/index.tsx:      result[prefix] = value;
./components/ui/grid/index.tsx:      result[prefix] = value;
./components/ui/grid/index.tsx:    [key: number]: number[];
./components/ui/grid/index.tsx:    const [calculatedWidth, setCalculatedWidth] = useState<number | null>(null);
./components/ui/grid/index.tsx:    const [flexBasisValue, setFlexBasisValue] = useState<
./components/ui/grid/index.tsx:    const colSpan = colSpanArr[i];
./components/ui/grid/index.tsx:    rowItemsCount[currentRow] = rowItemsCount[currentRow]
./components/ui/grid/index.tsx:    }, [calculatedWidth, itemsPerRow, responsiveNumColumns, props]);
./components/ui/grid/index.tsx:    }, [responsiveNumColumns, children]);
./components/ui/grid/index.tsx:  childrenArray: React.ReactNode[];
./components/ui/grid/index.tsx:  colSpanArr: number[];
./components/ui/heading/index.tsx:        <MappedHeading className={className} size={size} ref={ref} {...props} />
./components/ui/heading/index.web.tsx:        <MappedHeading className={className} size={size} ref={ref} {...props} />
./components/ui/icon/index.tsx:      md: "h-[18px] w-[18px]",
./components/ui/icon/index.tsx:    }, [size, height, width]);
./components/ui/icon/index.web.tsx:      md: "h-[18px] w-[18px]",
./components/ui/icon/index.web.tsx:    }, [size, height, width]);
./components/ui/icon/index.web.tsx:  const obj = style[0];
./components/ui/icon/index.web.tsx:  return obj[keys[1]];
./components/ui/icon/index.web.tsx:  }, [className, style]);
./components/ui/input/index.tsx:        "rounded border data-[invalid=true]:border-error-700 data-[invalid=true]:hover:border-error-700 data-[invalid=true]:data-[focus=true]:border-error-700 data-[invalid=true]:data-[focus=true]:hover:border-error-700 data-[invalid=true]:data-[disabled=true]:hover:border-error-700 data-[focus=true]:web:ring-1 data-[focus=true]:web:ring-inset data-[focus=true]:web:ring-indicator-primary data-[invalid=true]:web:ring-1 data-[invalid=true]:web:ring-inset data-[invalid=true]:web:ring-indicator-error data-[invalid=true]:data-[focus=true]:hover:web:ring-1 data-[invalid=true]:data-[focus=true]:hover:web:ring-inset data-[invalid=true]:data-[focus=true]:hover:web:ring-indicator-error data-[invalid=true]:data-[disabled=true]:hover:web:ring-1 data-[invalid=true]:data-[disabled=true]:hover:web:ring-inset data-[invalid=true]:data-[disabled=true]:hover:web:ring-indicator-error",
./components/ui/input/index.tsx:        "rounded-full border data-[invalid=true]:border-error-700 data-[invalid=true]:hover:border-error-700 data-[invalid=true]:data-[focus=true]:border-error-700 data-[invalid=true]:data-[focus=true]:hover:border-error-700 data-[invalid=true]:data-[disabled=true]:hover:border-error-700 data-[focus=true]:web:ring-1 data-[focus=true]:web:ring-inset data-[focus=true]:web:ring-indicator-primary data-[invalid=true]:web:ring-1 data-[invalid=true]:web:ring-inset data-[invalid=true]:web:ring-indicator-error data-[invalid=true]:data-[focus=true]:hover:web:ring-1 data-[invalid=true]:data-[focus=true]:hover:web:ring-inset data-[invalid=true]:data-[focus=true]:hover:web:ring-indicator-error data-[invalid=true]:data-[disabled=true]:hover:web:ring-1 data-[invalid=true]:data-[disabled=true]:hover:web:ring-inset data-[invalid=true]:data-[disabled=true]:hover:web:ring-indicator-error",
./components/ui/input/index.tsx:        "rounded-none border-b data-[invalid=true]:border-b-2 data-[invalid=true]:border-error-700 data-[invalid=true]:hover:border-error-700 data-[invalid=true]:data-[focus=true]:border-error-700 data-[invalid=true]:data-[focus=true]:hover:border-error-700 data-[invalid=true]:data-[disabled=true]:hover:border-error-700",
./components/ui/input/index.tsx:      md: "h-[18px] w-[18px]",
./components/ui/input/index.tsx:    }, [size, height, width]);
./components/ui/input/index.tsx:  base: "border-background-300 flex-row overflow-hidden content-center data-[hover=true]:border-outline-400 data-[focus=true]:border-primary-700 data-[focus=true]:hover:border-primary-700 data-[disabled=true]:opacity-40 data-[disabled=true]:hover:border-background-300 items-center",
./components/ui/input/index.tsx:  base: "flex-1 text-typography-900 py-auto px-3 placeholder:text-typography-500 h-full ios:leading-[0px] web:cursor-text web:data-[disabled=true]:cursor-not-allowed",
./components/ui/input/index.tsx:  return <View {...props} ref={ref} />;
./components/ui/link/index.tsx:  base: 'group/link web:outline-0 data-[disabled=true]:web:cursor-not-allowed data-[focus-visible=true]:web:ring-2 data-[focus-visible=true]:web:ring-indicator-primary data-[focus-visible=true]:web:outline-0 data-[disabled=true]:opacity-4 ',
./components/ui/link/index.tsx:  base: 'underline text-info-700 data-[hover=true]:text-info-600 data-[hover=true]:no-underline data-[active=true]:text-info-700 font-normal font-body web:font-sans web:tracking-sm web:my-0 web:bg-transparent web:border-0 web:box-border web:display-inline web:list-none web:margin-0 web:padding-0 web:position-relative web:text-start web:whitespace-pre-wrap web:word-wrap-break-word',
./components/ui/menu/index.tsx:  base: 'min-w-[200px] p-3 flex-row items-center rounded data-[hover=true]:bg-background-50 data-[active=true]:bg-background-100 data-[focus=true]:bg-background-50 data-[focus=true]:web:outline-none data-[focus=true]:web:outline-0 data-[disabled=true]:opacity-40 data-[disabled=true]:web:cursor-not-allowed data-[focus-visible=true]:web:outline-2 data-[focus-visible=true]:web:outline-primary-700 data-[focus-visible=true]:web:outline data-[focus-visible=true]:web:cursor-pointer data-[disabled=true]:data-[focus=true]:bg-transparent',
./components/ui/modal/index.tsx:      lg: 'w-[90%] max-w-[640px]',
./components/ui/modal/index.tsx:      md: 'w-[80%] max-w-[510px]',
./components/ui/modal/index.tsx:      sm: 'w-[70%] max-w-[420px]',
./components/ui/modal/index.tsx:      xs: 'w-[60%] max-w-[360px]',
./components/ui/modal/index.tsx:  base: 'group/modal-close-button z-10 rounded data-[focus-visible=true]:web:bg-background-100 web:outline-0 cursor-pointer',
./components/ui/popover/index.tsx:        'data-[flip=false]:border-b-transparent data-[flip=false]:border-r-transparent data-[flip=true]:border-t-transparent data-[flip=true]:border-l-transparent',
./components/ui/popover/index.tsx:        'data-[flip=false]:border-b-transparent data-[flip=false]:border-r-transparent data-[flip=true]:border-t-transparent data-[flip=true]:border-l-transparent',
./components/ui/popover/index.tsx:        'data-[flip=false]:border-b-transparent data-[flip=false]:border-r-transparent data-[flip=true]:border-t-transparent data-[flip=true]:border-l-transparent',
./components/ui/popover/index.tsx:        'data-[flip=false]:border-l-transparent data-[flip=false]:border-b-transparent data-[flip=true]:border-r-transparent data-[flip=true]:border-t-transparent',
./components/ui/popover/index.tsx:        'data-[flip=false]:border-l-transparent data-[flip=false]:border-b-transparent data-[flip=true]:border-r-transparent data-[flip=true]:border-t-transparent',
./components/ui/popover/index.tsx:        'data-[flip=false]:border-l-transparent data-[flip=false]:border-b-transparent data-[flip=true]:border-r-transparent data-[flip=true]:border-t-transparent',
./components/ui/popover/index.tsx:        'data-[flip=false]:border-r-transparent data-[flip=false]:border-t-transparent data-[flip=true]:border-l-transparent data-[flip=true]:border-b-transparent',
./components/ui/popover/index.tsx:        'data-[flip=false]:border-r-transparent data-[flip=false]:border-t-transparent data-[flip=true]:border-l-transparent data-[flip=true]:border-b-transparent',
./components/ui/popover/index.tsx:        'data-[flip=false]:border-r-transparent data-[flip=false]:border-t-transparent data-[flip=true]:border-l-transparent data-[flip=true]:border-b-transparent',
./components/ui/popover/index.tsx:        'data-[flip=false]:border-t-transparent data-[flip=false]:border-l-transparent data-[flip=true]:border-b-transparent data-[flip=true]:border-r-transparent',
./components/ui/popover/index.tsx:        'data-[flip=false]:border-t-transparent data-[flip=false]:border-l-transparent data-[flip=true]:border-b-transparent data-[flip=true]:border-r-transparent',
./components/ui/popover/index.tsx:        'data-[flip=false]:border-t-transparent data-[flip=false]:border-l-transparent data-[flip=true]:border-b-transparent data-[flip=true]:border-r-transparent',
./components/ui/popover/index.tsx:      lg: 'max-w-[640px] p-5',
./components/ui/popover/index.tsx:      md: 'max-w-[510px] p-[18px]',
./components/ui/popover/index.tsx:      sm: 'max-w-[420px] p-4',
./components/ui/popover/index.tsx:      xs: 'max-w-[360px] p-3.5',
./components/ui/popover/index.tsx:  base: 'bg-background-0 z-[1] border absolute overflow-hidden h-3.5 w-3.5 border-outline-100',
./components/ui/popover/index.tsx:  base: 'group/popover-close-button z-[1] rounded-sm data-[focus-visible=true]:web:bg-background-100 web:outline-0 web:cursor-pointer',
./components/ui/portal/index.tsx:  return <Overlay {...props} ref={ref} />;
./components/ui/pressable/index.tsx:  base: 'data-[focus-visible=true]:outline-none data-[focus-visible=true]:ring-indicator-info data-[focus-visible=true]:ring-2 data-[disabled=true]:opacity-40',
./components/ui/radio/index.tsx:      sm: 'h-[9px] w-[9px]',
./components/ui/radio/index.tsx:    }, [size, height, width]);
./components/ui/radio/index.tsx:  base: 'group/radio flex-row justify-start items-center web:cursor-pointer data-[disabled=true]:web:cursor-not-allowed',
./components/ui/radio/index.tsx:  base: 'justify-center items-center bg-transparent border-outline-400 border-2 rounded-full data-[focus-visible=true]:web:outline-2 data-[focus-visible=true]:web:outline-primary-700 data-[focus-visible=true]:web:outline data-[checked=true]:border-primary-600 data-[checked=true]:bg-transparent data-[hover=true]:border-outline-500 data-[hover=true]:bg-transparent data-[hover=true]:data-[checked=true]:bg-transparent data-[hover=true]:data-[checked=true]:border-primary-700 data-[hover=true]:data-[invalid=true]:border-error-700 data-[hover=true]:data-[disabled=true]:opacity-40 data-[hover=true]:data-[disabled=true]:border-outline-400 data-[hover=true]:data-[disabled=true]:data-[invalid=true]:border-error-400 data-[active=true]:bg-transparent data-[active=true]:border-primary-800 data-[invalid=true]:border-error-700 data-[disabled=true]:opacity-40 data-[disabled=true]:data-[checked=true]:border-outline-400 data-[disabled=true]:data-[checked=true]:bg-transparent data-[disabled=true]:data-[invalid=true]:border-error-400',
./components/ui/radio/index.tsx:  base: 'text-typography-600 data-[checked=true]:text-typography-900 data-[hover=true]:text-typography-900 data-[hover=true]:data-[disabled=true]:text-typography-600 data-[hover=true]:data-[disabled=true]:data-[checked=true]:text-typography-900 data-[active=true]:text-typography-900 data-[active=true]:data-[checked=true]:text-typography-900 data-[disabled=true]:opacity-40 web:select-none',
./components/ui/radio/index.tsx:  return <PrimitiveIcon {...props} ref={ref} />;
./components/ui/radio/index.tsx:  return <Text {...props} ref={ref} />;
./components/ui/radio/index.tsx:  return <View {...props} ref={ref} />;
./components/ui/select/index.tsx:        'border-0 border-b rounded-none data-[hover=true]:border-primary-700 data-[focus=true]:border-primary-700 data-[focus=true]:web:shadow-[inset_0_-1px_0_0] data-[focus=true]:web:shadow-primary-700 data-[invalid=true]:border-error-700 data-[invalid=true]:web:shadow-error-700',
./components/ui/select/index.tsx:        'data-[focus=true]:border-primary-700 data-[focus=true]:web:shadow-[inset_0_0_0_1px] data-[focus=true]:data-[hover=true]:web:shadow-primary-600 data-[invalid=true]:web:shadow-[inset_0_0_0_1px] data-[invalid=true]:border-error-700 data-[invalid=true]:web:shadow-error-700 data-[invalid=true]:data-[hover=true]:border-error-700',
./components/ui/select/index.tsx:        'rounded-full data-[focus=true]:border-primary-700 data-[focus=true]:web:shadow-[inset_0_0_0_1px] data-[focus=true]:web:shadow-primary-700 data-[invalid=true]:border-error-700 data-[invalid=true]:web:shadow-error-700',
./components/ui/select/index.tsx:      'md': 'h-[18px] w-[18px]',
./components/ui/select/index.tsx:    }, [size, height, width]);
./components/ui/select/index.tsx:  base: 'border border-background-300 rounded flex-row items-center overflow-hidden data-[hover=true]:border-outline-400 data-[focus=true]:border-primary-700 data-[disabled=true]:opacity-40 data-[disabled=true]:data-[hover=true]:border-background-300',
./components/ui/select/index.tsx:  base: 'py-auto px-3 placeholder:text-typography-500 web:w-full h-full text-typography-900 pointer-events-none web:outline-none ios:leading-[0px]',
./components/ui/select/index.tsx:  return <Pressable {...props} ref={ref} />;
./components/ui/select/select-actionsheet.tsx:    }, [size, height, width]);
./components/ui/select/select-actionsheet.tsx:  base: 'w-full flex-row items-center p-3 rounded-sm data-[disabled=true]:opacity-40 data-[disabled=true]:web:pointer-events-auto data-[disabled=true]:web:cursor-not-allowed hover:bg-background-50 active:bg-background-100 data-[focus=true]:bg-background-100 web:data-[focus-visible=true]:bg-background-100 data-[checked=true]:bg-background-100',
./components/ui/slider/index.tsx:      class: 'h-[5px] flex-row-reverse',
./components/ui/slider/index.tsx:      class: 'w-[5px] flex-col',
./components/ui/slider/index.tsx:      class: 'w-[5px] flex-col-reverse',
./components/ui/slider/index.tsx:  base: 'bg-primary-500 absolute rounded-full data-[focus=true]:bg-primary-600 data-[active=true]:bg-primary-600 data-[hover=true]:bg-primary-600 data-[disabled=true]:bg-primary-500 web:cursor-pointer web:active:outline-4 web:active:outline web:active:outline-primary-400 data-[focus=true]:web:outline-4 data-[focus=true]:web:outline data-[focus=true]:web:outline-primary-400 shadow-hard-1',
./components/ui/slider/index.tsx:  base: 'bg-primary-500 data-[focus=true]:bg-primary-600 data-[active=true]:bg-primary-600 data-[hover=true]:bg-primary-600',
./components/ui/slider/index.tsx:  base: 'justify-center items-center data-[disabled=true]:web:opacity-40 data-[disabled=true]:web:pointer-events-none',
./components/ui/slider/index.tsx:>((props, ref) => <View ref={ref} {...props} />);
./components/ui/slider/index.tsx:>((props, ref) => <View ref={ref} {...props} />);
./components/ui/switch/index.tsx:  base: 'data-[focus=true]:outline-0 data-[focus=true]:ring-2 data-[focus=true]:ring-indicator-primary web:cursor-pointer disabled:cursor-not-allowed data-[disabled=true]:opacity-40 data-[invalid=true]:border-error-700 data-[invalid=true]:rounded-xl data-[invalid=true]:border-2',
./components/ui/switch/index.tsx:  return <RNSwitch {...props} ref={ref} />;
./components/ui/table/index.tsx:  }, []);
./components/ui/table/index.tsx:  }, []);
./components/ui/table/index.web.tsx:    }, []);
./components/ui/table/index.web.tsx:    }, []);
./components/ui/table/styles.tsx:  base: 'flex-1 px-6 py-[14px] text-left font-bold text-[16px] leading-[22px] text-typography-800 font-roboto',
./components/ui/table/styles.tsx:  base: 'flex-1 px-6 py-[14px] text-left text-[16px] font-medium leading-[22px] text-typography-800 font-roboto',
./components/ui/table/styles.tsx:  base: `${captionTableStyle} px-6 py-[14px] text-[16px] font-normal leading-[22px] text-typography-800 bg-background-50 font-roboto`,
./components/ui/table/styles.tsx:  base: `table border-collapse border-collapse w-[800px]`,
./components/ui/textarea/index.tsx:        'data-[focus=true]:border-primary-700 data-[focus=true]:web:ring-1 data-[focus=true]:web:ring-inset data-[focus=true]:web:ring-indicator-primary data-[invalid=true]:border-error-700 data-[invalid=true]:web:ring-1 data-[invalid=true]:web:ring-inset data-[invalid=true]:web:ring-indicator-error data-[invalid=true]:data-[hover=true]:border-error-700 data-[invalid=true]:data-[focus=true]:data-[hover=true]:border-primary-700 data-[invalid=true]:data-[focus=true]:data-[hover=true]:web:ring-1 data-[invalid=true]:data-[focus=true]:data-[hover=true]:web:ring-inset data-[invalid=true]:data-[focus=true]:data-[hover=true]:web:ring-indicator-primary data-[invalid=true]:data-[disabled=true]:data-[hover=true]:border-error-700 data-[invalid=true]:data-[disabled=true]:data-[hover=true]:web:ring-1 data-[invalid=true]:data-[disabled=true]:data-[hover=true]:web:ring-inset data-[invalid=true]:data-[disabled=true]:data-[hover=true]:web:ring-indicator-error ',
./components/ui/textarea/index.tsx:  base: 'p-2 web:outline-0 web:outline-none flex-1 color-typography-900 align-text-top placeholder:text-typography-500 web:cursor-text web:data-[disabled=true]:cursor-not-allowed',
./components/ui/textarea/index.tsx:  base: 'w-full h-[100px] border border-background-300 rounded data-[hover=true]:border-outline-400 data-[focus=true]:border-primary-700 data-[focus=true]:data-[hover=true]:border-primary-700 data-[disabled=true]:opacity-40 data-[disabled=true]:bg-background-50 data-[disabled=true]:data-[hover=true]:border-background-300',
./components/ui/textarea/index.tsx:  return <View {...props} ref={ref} />;
./features/auth/components/CountryCodes/CountryCodesView.tsx:export const countryCodesData: CountryCode[] = [
./features/auth/components/Header/HeaderView.tsx:          <StandardHeaderBackButton disabled={isDisableButtonBack} />
./features/auth/components/Header/HeaderView.tsx:    <Text className={`text-center font-body ${ifWeb("text-md", "text-lg")}`}>
./features/auth/components/Screen/ScreenView.tsx:          className="-mt-20 py-2 font-bebas text-[9.3rem] text-yellow-500"
./features/auth/components/Screen/ScreenView.tsx:        <Text className="py-2 font-bebas text-10xl tracking-wide text-white web:text-[8.6rem]">
./features/auth/components/Screen/ScreenView.tsx:      <Icon as={LogoIcon} size={ifWeb("4xl", "6xl")} />
./features/auth/providers/Auth.tsx:    [data, initializeAuthData]
./features/auth/providers/Auth.tsx:    [data, initializeAuthData]
./features/auth/providers/Auth.tsx:    [initializeAuthData]
./features/auth/providers/Auth.tsx:    [initializeAuthData]
./features/auth/providers/Auth.tsx:    [initializeAuthData]
./features/auth/providers/Auth.tsx:    [isLoggedIn]
./features/auth/providers/Auth.tsx:  const [data, setData] = React.useState<
./features/auth/providers/Auth.tsx:  const [isLoggedIn, setIsLoggedIn] = React.useState<boolean>(false);
./features/auth/providers/Auth.tsx:  }, [isLoaded, initializeAuthData, isLoggedIn]);
./features/auth/providers/CurrentUser.tsx:  }, [accessToken, refetch]);
./features/auth/providers/CurrentUser.tsx:  }, [data]);
./features/auth/providers/Gate.tsx:  const [isValidated, setIsValidated] = useState(false);
./features/auth/providers/Gate.tsx:  const [validateUser] = useAuthValidateCurrentUserMutation();
./features/auth/providers/Gate.tsx:  }, [currentUser, isOnRegisterScreen, router, validateGoal, validateUser]);
./features/auth/screens/ConfirmCode/ConfirmCodeContainer.tsx:          <Text className={`${ifWeb("text-lg", "text-xl")} text-info-500`}>
./features/auth/screens/ConfirmCode/ConfirmCodeContainer.tsx:      const digit = codeRef.current[index] || "";
./features/auth/screens/ConfirmCode/ConfirmCodeContainer.tsx:    []
./features/auth/screens/ConfirmCode/ConfirmCodeContainer.tsx:    [auth, confirmSignIn, reset, router, toast]
./features/auth/screens/ConfirmCode/ConfirmCodeContainer.tsx:    [doSubmit]
./features/auth/screens/ConfirmCode/ConfirmCodeContainer.tsx:    [positionCursor]
./features/auth/screens/ConfirmCode/ConfirmCodeContainer.tsx:  const [confirmSignIn] = useAuthConfirmSignInMutation({
./features/auth/screens/ConfirmCode/ConfirmCodeContainer.tsx:  const [positionCursor, setPositionCursor] = useState<
./features/auth/screens/ConfirmCode/ConfirmCodeContainer.tsx:  const [resendOTP] = useAuthResendVerifyIdentifierMutation({
./features/auth/screens/ConfirmCode/ConfirmCodeContainer.tsx:  }, []);
./features/auth/screens/ConfirmCode/ConfirmCodeContainer.tsx:  }, []);
./features/auth/screens/ConfirmCode/ConfirmCodeContainer.tsx:  }, [auth, resendOTP, reset, toast]);
./features/auth/screens/ConfirmCode/ConfirmCodeView.tsx:          <TouchableWithoutFeedback onPress={onPress}>
./features/auth/screens/ConfirmCode/ConfirmCodeView.tsx:  boxArray: number[];
./features/auth/screens/Register/RegisterContainer.tsx:        refetchQueries: ["AuthMe"],
./features/auth/screens/Register/RegisterContainer.tsx:    [currentUser, router, updateProfile, userGoal]
./features/auth/screens/Register/RegisterContainer.tsx:  const [updateProfile] = useAuthUpdateMyProfileMutation();
./features/auth/screens/Register/RegisterView.tsx:              <FormControlErrorIcon as={AlertCircleIcon} />
./features/auth/screens/Register/RegisterView.tsx:              <FormControlErrorIcon as={AlertCircleIcon} />
./features/auth/screens/Register/RegisterView.tsx:              <FormControlErrorIcon as={AlertCircleIcon} />
./features/auth/screens/SignIn/SignInContainer.tsx:        ["(", ")", " ", ") ", "-"].includes(currentSymbol)
./features/auth/screens/SignIn/SignInContainer.tsx:    []
./features/auth/screens/SignIn/SignInContainer.tsx:    [getValues, keyPressMobileNumber]
./features/auth/screens/SignIn/SignInContainer.tsx:    [signIn, recordUserGoal, auth, router, toast]
./features/auth/screens/SignIn/SignInContainer.tsx:  const [keyPressMobileNumber, setKeyPressMobileNumber] = useState<string>("");
./features/auth/screens/SignIn/SignInContainer.tsx:  const [signIn] = useAuthSignInMutation();
./features/auth/screens/SignIn/SignInContainer.tsx:  }, [countryCode]);
./features/auth/screens/SignIn/SignInView.tsx:              <FormControlErrorIcon as={AlertCircleIcon} />
./features/compare-players/components/CategoryMetricsComparison/CategoryMetricsComparisonContainer.tsx:          []) as WatchlistPlayerSeasonCategoricalScoreFragment[]
./features/compare-players/components/CategoryMetricsComparison/CategoryMetricsComparisonContainer.tsx:          []) as WatchlistPlayerSeasonCategoricalScoreFragment[]
./features/compare-players/components/CategoryMetricsComparison/CategoryMetricsComparisonContainer.tsx:    [currentPlayer?.seasonCategoricalScores]
./features/compare-players/components/CategoryMetricsComparison/CategoryMetricsComparisonContainer.tsx:    [currentPlayer]
./features/compare-players/components/CategoryMetricsComparison/CategoryMetricsComparisonContainer.tsx:    [selectedPlayer?.seasonCategoricalScores]
./features/compare-players/components/CategoryMetricsComparison/CategoryMetricsComparisonContainer.tsx:    [selectedPlayer]
./features/compare-players/components/ChartComparison/ChartComparisonView.tsx:                      color={colors[key]}
./features/compare-players/components/ChartComparison/ChartComparisonView.tsx:                      points={points[key as keyof typeof points]}
./features/compare-players/components/ChartComparison/ChartComparisonView.tsx:                    color={colors[key]}
./features/compare-players/components/ChartComparison/ChartComparisonView.tsx:                    points={points[key as keyof typeof points]}
./features/compare-players/components/ChartComparison/ChartComparisonView.tsx:            yKeys={yKeys as never[]}
./features/compare-players/components/ChartComparison/ChartComparisonView.tsx:      <Heading {...ifWeb({ className: "text-md" }, {})}>{title}</Heading>
./features/compare-players/components/ChartComparison/ChartComparisonView.tsx:  [x: string]: string | number;
./features/compare-players/components/ChartComparison/ChartComparisonView.tsx:  data = [],
./features/compare-players/components/ChartComparison/ChartComparisonView.tsx:  data?: Data[];
./features/compare-players/components/ChartComparison/ChartComparisonView.tsx:  yKeys = [],
./features/compare-players/components/ChartComparison/ChartComparisonView.tsx:  yKeys?: string[];
./features/compare-players/components/DropDownPlayer/DropDownPlayerContainer.tsx:    [handleClose, onSelectComparisonPlayer]
./features/compare-players/components/DropDownPlayer/DropDownPlayerContainer.tsx:    [selectedComparisonPlayer]
./features/compare-players/components/DropDownPlayer/DropDownPlayerContainer.tsx:  const [isOpen, setIsOpen] = useState<boolean>(false);
./features/compare-players/components/DropDownPlayer/DropDownPlayerContainer.tsx:  const handleClose = useCallback(() => setIsOpen(false), []);
./features/compare-players/components/DropDownPlayer/DropDownPlayerContainer.tsx:  const handleOpen = useCallback(() => setIsOpen(true), []);
./features/compare-players/components/DropDownPlayer/DropDownPlayerContainer.tsx:  myRoster?: WatchlistPlayerFragment[];
./features/compare-players/components/DropDownPlayer/DropDownPlayerContainer.tsx:  watchList?: WatchlistPlayerFragment[];
./features/compare-players/components/DropDownPlayer/DropDownPlayerView.tsx:        <Box className="max-h-[50%] min-h-20">
./features/compare-players/components/DropDownPlayer/DropDownPlayerView.tsx:        <Icon as={ChevronsUpDown} className="text-info-500" />
./features/compare-players/components/DropDownPlayer/DropDownPlayerView.tsx:    <PopoverBackdrop onPress={onClose} />
./features/compare-players/components/DropDownPlayer/DropDownPlayerView.tsx:  listMyRosterPlayers?: WatchlistPlayerFragment[];
./features/compare-players/components/DropDownPlayer/DropDownPlayerView.tsx:  listWatchlistPlayers?: WatchlistPlayerFragment[];
./features/compare-players/components/ListPlayerCompare/ListPlayerCompareContainer.tsx:    [onSelectComparePlayer]
./features/compare-players/components/ListPlayerCompare/ListPlayerCompareContainer.tsx:  data?: WatchlistPlayerFragment[];
./features/compare-players/components/ListPlayerCompare/ListPlayerCompareContainer.tsx:  }, [loading]);
./features/compare-players/components/ListPlayerCompare/ListPlayerCompareContainer.tsx:  }, [loading]);
./features/compare-players/components/ListPlayerCompare/ListPlayerCompareView.tsx:      <Heading className={ifWeb("text-md pb-4", "pb-4")}>{title}</Heading>
./features/compare-players/components/ListPlayerCompare/ListPlayerCompareView.tsx:  data?: WatchlistPlayerFragment[];
./features/compare-players/components/MetricsGrid/MetricsGridView.tsx:                <Box className="flex-1" key={compositeMetric.label}>
./features/compare-players/components/MetricsGrid/MetricsGridView.tsx:  metrics: ICompositeMetric[][] | null;
./features/compare-players/components/MetricsGrid/MetricsGridView.tsx:  }, [metrics, shouldShowColorTransferMetric]);
./features/compare-players/components/PlusMinusChartComparison/PlusMinusChartComparisonContainer.tsx:          currentPlayer?.seasonWeightedAvgMetrics as WatchlistPlayerSeasonWeightedAvgMetricsFragment[],
./features/compare-players/components/PlusMinusChartComparison/PlusMinusChartComparisonContainer.tsx:          selectedPlayer?.seasonWeightedAvgMetrics as WatchlistPlayerSeasonWeightedAvgMetricsFragment[],
./features/compare-players/components/PlusMinusChartComparison/PlusMinusChartComparisonContainer.tsx:        [key]:
./features/compare-players/components/PlusMinusChartComparison/PlusMinusChartComparisonContainer.tsx:      [`epm_${playerId}`]: metric?.seasonalGpm!,
./features/compare-players/components/PlusMinusChartComparison/PlusMinusChartComparisonContainer.tsx:    [currentPlayer]
./features/compare-players/components/PlusMinusChartComparison/PlusMinusChartComparisonContainer.tsx:    [selectedPlayer]
./features/compare-players/components/PlusMinusChartComparison/PlusMinusChartComparisonContainer.tsx:  ).filter(Boolean) as string[];
./features/compare-players/components/PlusMinusChartComparison/PlusMinusChartComparisonContainer.tsx:  data: WatchlistPlayerSeasonWeightedAvgMetricsFragment[],
./features/compare-players/components/PlusMinusChartComparison/PlusMinusChartComparisonContainer.tsx:  return (data ?? [])
./features/compare-players/screens/Main/MainContainer.tsx:            .filter(item => item.id !== playerId) ?? [])
./features/compare-players/screens/Main/MainContainer.tsx:        .filter(item => item.id !== playerId) ?? [],
./features/compare-players/screens/Main/MainContainer.tsx:      data?.getPlayer?.positions?.map(p => p?.id).filter(p => !!p) as string[],
./features/compare-players/screens/Main/MainContainer.tsx:    []
./features/compare-players/screens/Main/MainContainer.tsx:    [currentUser?.organization?.currencyCode, data?.getPlayer?.bioData]
./features/compare-players/screens/Main/MainContainer.tsx:    [currentUser?.organization?.currencyCode, selectedComparisonPlayer]
./features/compare-players/screens/Main/MainContainer.tsx:    [data?.getPlayer?.positions]
./features/compare-players/screens/Main/MainContainer.tsx:    [myRoster?.listMyOrganizationsPlayers?.edges, playerId]
./features/compare-players/screens/Main/MainContainer.tsx:    [playerId, watchlist?.listWatchlistPlayers?.edges, watchlistId]
./features/compare-players/screens/Main/MainContainer.tsx:    [selectedComparisonPlayer]
./features/compare-players/screens/Main/MainContainer.tsx:  const [selectedComparisonPlayer, setSelectedComparisonPlayer] =
./features/compare-players/screens/Main/MainView.tsx:        <VStack className={ifWeb("flex-1 py-6", "flex-1")}>
./features/compare-players/screens/Main/MainView.tsx:  <Box className={ifWeb("flex-1", "flex-1 px-4 pt-6")}>
./features/compare-players/screens/Main/MainView.tsx:  currentPlayerCompositeMetricsArray: ICompositeMetric[][] | null;
./features/compare-players/screens/Main/MainView.tsx:  myRoster?: WatchlistPlayerFragment[];
./features/compare-players/screens/Main/MainView.tsx:  selectedPlayerCompositeMetricsArray: ICompositeMetric[][] | null;
./features/compare-players/screens/Main/MainView.tsx:  watchList?: WatchlistPlayerFragment[];
./features/invitations/components/CreateButton/CreateButtonView.tsx:        <ButtonIcon as={PlusCircleIcon} />
./features/invitations/components/CreateOrganizationButton/CreateOrganizationButtonView.tsx:        <ButtonIcon as={PlusCircleIcon} />
./features/invitations/components/InvitationItem/InvitationItemContainer.tsx:      refetchQueries: [{ query: InvitationsListMySentInvitationsDocument }],
./features/invitations/components/InvitationItem/InvitationItemContainer.tsx:  const [deleteInvitation, { loading: deleteLoading }] =
./features/invitations/components/InvitationItem/InvitationItemContainer.tsx:  const [resendInvitation, { loading: resendLoading }] =
./features/invitations/components/InvitationItem/InvitationItemContainer.tsx:  }, [deleteInvitation]);
./features/invitations/components/InvitationItem/InvitationItemContainer.tsx:  }, [resendInvitation]);
./features/invitations/components/InvitationItem/InvitationItemView.tsx:            <ButtonIcon as={SendIcon} />
./features/invitations/components/InvitationItem/InvitationItemView.tsx:            <ButtonIcon as={TrashIcon} />
./features/invitations/components/InvitationItem/InvitationItemView.tsx:          <Button variant="link" onPress={onDelete} isDisabled={loading}>
./features/invitations/components/InvitationItem/InvitationItemView.tsx:          <Button variant="link" onPress={onResend} isDisabled={loading}>
./features/invitations/components/InvitationItem/InvitationItemView.tsx:        <Text className={`font-heading ${ifWeb("text-xl", "text-2xl")}`}>
./features/invitations/components/InvitationItem/InvitationItemView.tsx:        <Text className={`text-zinc-500 ${ifWeb("text-md", "")}`}>
./features/invitations/components/OrganizationForm/OrganizationFormContainer.tsx:    () => sportsData?.listSports.edges.map(e => e.node) || [],
./features/invitations/components/OrganizationForm/OrganizationFormContainer.tsx:    [sportsData]
./features/invitations/components/OrganizationForm/OrganizationFormContainer.tsx:  const [createOrganization] = useInvitationsCreateOrganizationMutation({
./features/invitations/components/OrganizationForm/OrganizationFormContainer.tsx:  const [updateOrganization] = useInvitationsUpdateOrganizationMutation({
./features/invitations/components/OrganizationForm/OrganizationFormContainer.tsx:const refetchQueries = ["AuthGetUser"];
./features/invitations/components/OrganizationForm/OrganizationFormView.tsx:                <FormControlErrorIcon as={AlertCircleIcon} />
./features/invitations/components/OrganizationForm/OrganizationFormView.tsx:                <FormControlErrorIcon as={AlertCircleIcon} />
./features/invitations/components/OrganizationForm/OrganizationFormView.tsx:                <FormControlErrorIcon as={AlertCircleIcon} />
./features/invitations/components/OrganizationForm/OrganizationFormView.tsx:                <FormControlErrorIcon as={AlertCircleIcon} />
./features/invitations/components/OrganizationForm/OrganizationFormView.tsx:                options={currencyCodes.map(([_, name]) => ({
./features/invitations/components/OrganizationForm/OrganizationFormView.tsx:            <FormControl size="md" isInvalid={!loading && !!errors.name}>
./features/invitations/components/OrganizationForm/OrganizationFormView.tsx:            <FormControl size="md" isInvalid={!loading && !!errors.sportId}>
./features/invitations/components/OrganizationForm/OrganizationFormView.tsx:  sports: InvitationsSportFragment[];
./features/invitations/components/OrganizationItem/OrganizationItemContainer.tsx:  const [login, { loading: loginLoading, client }] =
./features/invitations/components/OrganizationItem/OrganizationItemContainer.tsx:  }, []);
./features/invitations/components/OrganizationItem/OrganizationItemContainer.tsx:  }, [login]);
./features/invitations/components/OrganizationItem/OrganizationItemView.tsx:              <ButtonIcon as={PencilIcon} size={ifWeb("md", "xl")} />
./features/invitations/components/OrganizationItem/OrganizationItemView.tsx:            <Button variant="link" isDisabled={loading}>
./features/invitations/components/OrganizationItem/OrganizationItemView.tsx:          <ButtonIcon as={LogInIcon} size={ifWeb("md", "xl")} />
./features/invitations/components/OrganizationItem/OrganizationItemView.tsx:          <Link asChild href={`/organizations/${item.id}/edit`}>
./features/invitations/components/OrganizationItem/OrganizationItemView.tsx:        <Button variant="link" onPress={onLogInto} isDisabled={loading}>
./features/invitations/components/ReceivedInvitationItem/ReceivedInvitationItemContainer.tsx:      refetchQueries: ["AuthMe"],
./features/invitations/components/ReceivedInvitationItem/ReceivedInvitationItemContainer.tsx:  const [acceptInvitation, { loading: loadingAccept }] =
./features/invitations/components/ReceivedInvitationItem/ReceivedInvitationItemContainer.tsx:  const [rejectInvitation, { loading: loadingReject }] =
./features/invitations/components/ReceivedInvitationItem/ReceivedInvitationItemContainer.tsx:  const [updateUserOrganization, { client }] =
./features/invitations/components/ReceivedInvitationItem/ReceivedInvitationItemContainer.tsx:  }, []);
./features/invitations/components/ReceivedInvitationItem/ReceivedInvitationItemContainer.tsx:  }, [acceptInvitation]);
./features/invitations/components/ReceivedInvitationItem/ReceivedInvitationItemContainer.tsx:  }, [rejectInvitation]);
./features/invitations/components/ReceivedInvitationItem/ReceivedInvitationItemView.tsx:        <Button variant="outline" onPress={onAccept} isDisabled={loading}>
./features/invitations/components/ReceivedInvitationItem/ReceivedInvitationItemView.tsx:        <Button variant="outline" onPress={onDecline} isDisabled={loading}>
./features/invitations/components/UserItem/UserItemContainer.tsx:  const [activate, { loading: activateLoading }] =
./features/invitations/components/UserItem/UserItemContainer.tsx:  const [deactivate, { loading: deactivateLoading }] =
./features/invitations/components/UserItem/UserItemContainer.tsx:  }, [item.status, deactivate, activate]);
./features/invitations/components/UserItem/UserItemItemView.tsx:      <Text className={`font-heading ${ifWeb("text-xl", "text-2xl")}`}>
./features/invitations/components/UserItem/UserItemItemView.tsx:  <HStack className={`items-center gap-3 ${ifWeb("py-3 px-2", "")}`}>
./features/invitations/screens/CreateInvitation/CreateInvitationContainer.tsx:                Attributes: [{ Name: "", Value: "" }],
./features/invitations/screens/CreateInvitation/CreateInvitationContainer.tsx:        refetchQueries: [{ query: InvitationsListMySentInvitationsDocument }],
./features/invitations/screens/CreateInvitation/CreateInvitationContainer.tsx:    () => data?.listRoles?.edges.map(edge => edge.node) ?? [],
./features/invitations/screens/CreateInvitation/CreateInvitationContainer.tsx:    .oneOf(["MEMBER", "MANAGER"], "Must be either MEMBER or MANAGER")
./features/invitations/screens/CreateInvitation/CreateInvitationContainer.tsx:    [createInvitation, currentUser, recordUserGoal, roles, router, toast]
./features/invitations/screens/CreateInvitation/CreateInvitationContainer.tsx:    [data?.listRoles?.edges]
./features/invitations/screens/CreateInvitation/CreateInvitationContainer.tsx:  const [createInvitation] = useInvitationsCreateInvitationMutation();
./features/invitations/screens/CreateInvitation/CreateInvitationView.tsx:                <FormControlErrorIcon as={AlertCircleIcon} />
./features/invitations/screens/CreateInvitation/CreateInvitationView.tsx:                <FormControlErrorIcon as={AlertCircleIcon} />
./features/invitations/screens/CreateInvitation/CreateInvitationView.tsx:                <FormControlErrorIcon as={AlertCircleIcon} />
./features/invitations/screens/CreateOrganization/CreateOrganizationContainer.tsx:    <VStack style={{ width: widthContent, alignSelf: "center" }}>
./features/invitations/screens/Main/MainContainer.tsx:      [],
./features/invitations/screens/Main/MainContainer.tsx:      return <InvitationItem item={item} />;
./features/invitations/screens/Main/MainContainer.tsx:    []
./features/invitations/screens/Main/MainContainer.tsx:    [data?.listMyOrganizationsSentInvitations?.edges]
./features/invitations/screens/Main/MainContainer.tsx:    [loading, isRefreshing, invitations.length]
./features/invitations/screens/Main/MainContainer.tsx:    [networkStatus]
./features/invitations/screens/Main/MainContainer.tsx:  const handleRefresh = useCallback(() => refetch().catch(() => {}), [refetch]);
./features/invitations/screens/Main/MainContainer.tsx:  }, [endCursor, fetchMore, loading]);
./features/invitations/screens/Main/MainView.tsx:        colors={["white"]}
./features/invitations/screens/Main/MainView.tsx:  invitations: InvitationsInvitationFragment[];
./features/invitations/screens/Organizations/OrganizationsContainer.tsx:        : (myData?.listMyOrganizations?.edges.map(edge => edge.node) ?? []),
./features/invitations/screens/Organizations/OrganizationsContainer.tsx:        ? (globalData?.listOrganizations?.edges.map(edge => edge.node) ?? [])
./features/invitations/screens/Organizations/OrganizationsContainer.tsx:    [currentUser?.isAdmin, globalFetchMore, myFetchMore]
./features/invitations/screens/Organizations/OrganizationsContainer.tsx:    [currentUser?.isAdmin, globalNetworkStatus, myNetworkStatus]
./features/invitations/screens/Organizations/OrganizationsContainer.tsx:    [currentUser?.isAdmin, globalRefetch, myRefetch]
./features/invitations/screens/Organizations/OrganizationsContainer.tsx:    [loading, isRefreshing, organizations.length]
./features/invitations/screens/Organizations/OrganizationsContainer.tsx:    [loading]
./features/invitations/screens/Organizations/OrganizationsContainer.tsx:    useCallback(({ item }) => <OrganizationItem item={item} />, []);
./features/invitations/screens/Organizations/OrganizationsContainer.tsx:  const handleRefresh = useCallback(() => refetch().catch(() => {}), [refetch]);
./features/invitations/screens/Organizations/OrganizationsContainer.tsx:  }, [endCursor, fetchMore, loading]);
./features/invitations/screens/Organizations/OrganizationsView.tsx:        colors={["white"]}
./features/invitations/screens/Organizations/OrganizationsView.tsx:  organizations: InvitationsOrganizationFragment[];
./features/invitations/screens/ReceivedInvitations/ReceivedInvitationsContainer.tsx:    () => data?.listMyReceivedInvitations?.edges.map(edge => edge.node) ?? [],
./features/invitations/screens/ReceivedInvitations/ReceivedInvitationsContainer.tsx:    ({ item }) => <ReceivedInvitationsItem item={item} />,
./features/invitations/screens/ReceivedInvitations/ReceivedInvitationsContainer.tsx:    []
./features/invitations/screens/ReceivedInvitations/ReceivedInvitationsContainer.tsx:    [data?.listMyReceivedInvitations?.edges]
./features/invitations/screens/ReceivedInvitations/ReceivedInvitationsContainer.tsx:    [loading, isRefreshing, invitations.length]
./features/invitations/screens/ReceivedInvitations/ReceivedInvitationsContainer.tsx:    [networkStatus]
./features/invitations/screens/ReceivedInvitations/ReceivedInvitationsContainer.tsx:  const handleRefresh = useCallback(() => refetch().catch(() => {}), [refetch]);
./features/invitations/screens/ReceivedInvitations/ReceivedInvitationsContainer.tsx:  }, [endCursor, fetchMore, loading]);
./features/invitations/screens/ReceivedInvitations/ReceivedInvitationsView.tsx:        colors={["white"]}
./features/invitations/screens/ReceivedInvitations/ReceivedInvitationsView.tsx:  invitations: InvitationsInvitationFragment[];
./features/invitations/screens/UpdateOrganization/UpdateOrganizationContainer.tsx:    <OrganizationForm organization={data.getOrganization} />
./features/invitations/screens/Users/UsersContainer.tsx:      ) ?? [],
./features/invitations/screens/Users/UsersContainer.tsx:    [data?.listMyOrganizationsOrganizationUsers?.edges]
./features/invitations/screens/Users/UsersContainer.tsx:    [loading, isRefreshing, organizationUsers.length]
./features/invitations/screens/Users/UsersContainer.tsx:    [loading]
./features/invitations/screens/Users/UsersContainer.tsx:    [networkStatus]
./features/invitations/screens/Users/UsersContainer.tsx:    useCallback(({ item }) => <UserItem item={item} />, []);
./features/invitations/screens/Users/UsersContainer.tsx:  const handleRefresh = useCallback(() => refetch().catch(() => {}), [refetch]);
./features/invitations/screens/Users/UsersContainer.tsx:  }, [endCursor, fetchMore, loading]);
./features/invitations/screens/Users/UsersView.tsx:        colors={["white"]}
./features/invitations/screens/Users/UsersView.tsx:  organizationUsers: InvitationsOrganizationUserFragment[];
./features/notes/components/CheckNote/CheckNoteView.tsx:            <CheckboxIcon as={CheckIcon} />
./features/notes/components/CheckNote/CheckNoteView.tsx:          <CheckboxLabel {...ifWeb({ size: "md" }, {})}>
./features/notes/components/CheckNote/CheckNoteView.tsx:          <FormControlErrorIcon as={AlertCircleIcon} />
./features/notes/components/CheckNote/CheckNoteView.tsx:        <Checkbox value={value.toString()} onChange={onChange} size="md">
./features/notes/components/NotesActionsheet/NotesActionsheetContainer.tsx:    []
./features/notes/components/NotesActionsheet/NotesActionsheetContainer.tsx:    [noteActionsheetState]
./features/notes/components/NotesActionsheet/NotesActionsheetContainer.tsx:  const [snapIndex, setSnapIndex] = useState<number>(0);
./features/notes/components/NotesActionsheet/NotesActionsheetContainer.tsx:  }, [noteActionsheetState, snapIndex]);
./features/notes/components/NotesActionsheet/NotesActionsheetContainer.tsx:  }, [noteActionsheetState]);
./features/notes/components/NotesActionsheet/NotesActionsheetView.tsx:                    <ButtonIcon size="xl" as={NotebookPenIcon} />
./features/notes/components/NotesActionsheet/NotesActionsheetView.tsx:                  <Icon as={ChevronLeftIcon} />
./features/notes/components/NotesActionsheet/NotesActionsheetView.tsx:            <NotesForm playerId={playerId} />
./features/notes/components/NotesActionsheet/NotesActionsheetView.tsx:            <NotesList playerId={playerId} />
./features/notes/components/NotesActionsheet/NotesActionsheetView.tsx:      <BottomSheetView className={className} onTouchStart={onPress}>
./features/notes/components/NotesActionsheet/NotesActionsheetView.tsx:    <BottomSheetContent className={className} onTouchStart={onPress}>
./features/notes/components/NotesActionsheet/NotesActionsheetView.tsx:  children: ReactNode[] | ReactNode;
./features/notes/components/NotesActionsheet/NotesActionsheetView.tsx:  snapPoints: string[];
./features/notes/components/NotesForm/NotesFormContainer.tsx:    [create, recordUserGoal, toast]
./features/notes/components/NotesForm/NotesFormContainer.tsx:  const [create] = useNotesCreateNoteMutation();
./features/notes/components/NotesForm/NotesFormView.tsx:        <CheckNote control={control} errors={errors} loading={loading} />
./features/notes/components/NotesForm/NotesFormView.tsx:        <CheckNote control={control} errors={errors} loading={loading} />
./features/notes/components/NotesForm/NotesFormView.tsx:      <VStack className={`mt-4 flex-1 grow gap-4 ${ifWeb("px-4", "px-2")}`}>
./features/notes/components/NotesItem/NotesItemContainer.tsx:    <NotesItemView note={note} loading={loading} onDelete={handleDeleteNote} />
./features/notes/components/NotesItem/NotesItemContainer.tsx:    [deleteNote, note, recordUserGoal, toast]
./features/notes/components/NotesItem/NotesItemContainer.tsx:  const [deleteNote, { loading }] = useNotesDeleteNoteMutation();
./features/notes/components/NotesItem/NotesItemView.native.tsx:  <AppleStyleSwipeableRow onDelete={loading ? undefined : onDelete}>
./features/notes/components/NotesItem/NotesItemView.web.tsx:      <ButtonIcon as={TrashIcon} className="text-info-500" />
./features/notes/components/NotesList/NotesListContainer.native.tsx:      groupNotesByDate(data?.listNotesByPlayerId.edges.map(e => e.node) ?? []),
./features/notes/components/NotesList/NotesListContainer.native.tsx:    ({ item }) => <NotesItem note={item} />,
./features/notes/components/NotesList/NotesListContainer.native.tsx:    []
./features/notes/components/NotesList/NotesListContainer.native.tsx:    [data]
./features/notes/components/NotesList/NotesListContainer.native.tsx:    [loading]
./features/notes/components/NotesList/NotesListContainer.native.tsx:    [playerId, refetch]
./features/notes/components/NotesList/NotesListContainer.native.tsx:  }, [fetchMore, nextToken]);
./features/notes/components/NotesList/NotesListContainer.web.tsx:      groupNotesByDate(data?.listNotesByPlayerId.edges.map(e => e.node) ?? []),
./features/notes/components/NotesList/NotesListContainer.web.tsx:    ({ item }) => <NotesItem note={item} />,
./features/notes/components/NotesList/NotesListContainer.web.tsx:    []
./features/notes/components/NotesList/NotesListContainer.web.tsx:    [data]
./features/notes/components/NotesList/NotesListContainer.web.tsx:    [loading]
./features/notes/components/NotesList/NotesListContainer.web.tsx:    [playerId, refetch]
./features/notes/components/NotesList/NotesListContainer.web.tsx:  }, [fetchMore, nextToken]);
./features/notes/components/NotesList/NotesListView.native.tsx:        colors={["white"]}
./features/notes/components/NotesList/NotesListView.native.tsx:  notes: Section[];
./features/notes/components/NotesList/NotesListView.web.tsx:        colors={["white"]}
./features/notes/components/NotesList/NotesListView.web.tsx:  notes: Section[];
./features/notes/components/TextInputField/TextInputFieldView.tsx:            className={`ios:leading-[0px] h-full flex-1 px-3 font-body ${ifWeb("text-lg", "text-xl")} text-typography-900 placeholder:text-typography-500 web:cursor-text web:data-[disabled=true]:cursor-not-allowed`}
./features/notes/components/TextInputField/TextInputFieldView.tsx:          <FormControlErrorIcon as={AlertCircleIcon} />
./features/player-detail/screens/Main/MainContainer.tsx:            .filter(p => !!p) as string[],
./features/player-detail/screens/Main/MainContainer.tsx:          teamIds: (currentUser?.organization?.organizationTeams ?? []).map(
./features/player-detail/screens/Main/MainContainer.tsx:  const [getListtPlayersByTeamIdsAndPositionIds] =
./features/player-detail/screens/Main/MainContainer.tsx:  const handleAddPress = useCallback(() => showActionsheetVar(true), []);
./features/player-detail/screens/Main/MainContainer.tsx:  const handleClosePress = useCallback(() => showActionsheetVar(false), []);
./features/player-detail/screens/Main/MainContainer.tsx:  }, [router]);
./features/player-detail/screens/Main/MainView.tsx:    <NotesActionsheet playerId={player.id} />
./features/player-filter/screens/Main/MainView.tsx:                  <HStack key={`role_${i.toString()}`} className="gap-3">
./features/player-filter/screens/Main/MainView.tsx:              <MultiSlider {...multiSlider} />
./features/player-filter/screens/Main/MainView.tsx:    selects: RosterManagementNationalityFragment[]
./features/player-filter/screens/Main/MainView.tsx:  groupedLeagues: RosterManagementLeagueFragment[];
./features/player-filter/screens/Main/MainView.tsx:  groupedRoles: (IFilterOption | null)[][];
./features/player-filter/screens/Main/MainView.tsx:  leaguesValue: RosterManagementLeagueFragment[];
./features/player-filter/screens/Main/MainView.tsx:  listMultiSlider: IMultiSlider[];
./features/player-filter/screens/Main/MainView.tsx:  nationalities: RosterManagementNationalityFragment[];
./features/player-filter/screens/Main/MainView.tsx:  nationalityValue: RosterManagementNationalityFragment[];
./features/player-filter/screens/Main/MainView.tsx:  onSelectLeagues?: (selects: RosterManagementLeagueFragment[]) => void;
./features/player-search/screens/Main/MainContainer.tsx:    () => data?.searchPlayers?.edges.map(edge => edge.node) ?? [],
./features/player-search/screens/Main/MainContainer.tsx:    ({ item }) => <SearchResultsItem item={item} />,
./features/player-search/screens/Main/MainContainer.tsx:    []
./features/player-search/screens/Main/MainContainer.tsx:    [data?.searchPlayers?.edges]
./features/player-search/screens/Main/MainContainer.tsx:    [data?.searchPlayers?.pageInfo.endCursor]
./features/player-search/screens/Main/MainContainer.tsx:    [data?.searchPlayers?.pageInfo.hasNextPage]
./features/player-search/screens/Main/MainContainer.tsx:    [isRefreshing, loading]
./features/player-search/screens/Main/MainContainer.tsx:  const [searchValue, setSearchValue] = useState<string>("");
./features/player-search/screens/Main/MainContainer.tsx:  }, [fetchMore, hasNextPage, next, searchValue]);
./features/player-search/screens/Main/MainContainer.tsx:  }, [handleDebounceSearch, searchValueVar]);
./features/player-search/screens/Main/MainContainer.tsx:  }, [loading, searchValue]);
./features/player-search/screens/Main/MainView.tsx:      <Header isShowPopoverFilter={loading || !!items.length} />
./features/player-search/screens/Main/MainView.tsx:    stickyHeaderIndices={[0]}
./features/player-search/screens/Main/MainView.tsx:  items: PlayerSearchPlayerFragment[];
./features/push-notifications/components/RegisterDevice/RegisterDeviceContainer.tsx:  const [createDevice] = usePushNotificationsCreateDeviceMutation();
./features/push-notifications/components/RegisterDevice/RegisterDeviceContainer.tsx:  }, [createDevice, currentUser]);
./features/push-notifications/components/RespondToNotification/RespondToNotificationContainer.tsx:  }, [navigatorReady, router]);
./features/recommendations/components/InfoRecommendation/InfoRecommendationView.tsx:            className={`mr-2 h-8 items-center justify-center rounded-full p-1 ${isPlayerInAnyWatchList ? "bg-[#0b8dcd]" : "bg-[#26252A]"}`}
./features/recommendations/components/RecommendationList/RecommendationListContainer.tsx:    () => data?.listPlayerRecommendations ?? [],
./features/recommendations/components/RecommendationList/RecommendationListContainer.tsx:    [data?.listPlayerRecommendations]
./features/recommendations/components/RecommendationList/RecommendationListContainer.tsx:    [loading]
./features/recommendations/components/RecommendationList/RecommendationListContainer.tsx:    [recommendationsCategorySelected, refetch]
./features/recommendations/components/RecommendationList/RecommendationListView.tsx:        colors={["white"]}
./features/recommendations/components/RecommendationList/RecommendationListView.tsx:    renderItem={({ item }) => <RecommendationPlayer data={item} />}
./features/recommendations/components/RecommendationList/RecommendationListView.tsx:  data: RecommendationsPlayerRecommendationResultFragment[];
./features/recommendations/components/RecommendationPlayer/RecommendationPlayerContainer.tsx:              [`listPlayerRecommendations({"recommendationType":"${recommendationsCategorySelected}"})`](
./features/recommendations/components/RecommendationPlayer/RecommendationPlayerContainer.tsx:            <Icon as={XIcon} size="xl" />
./features/recommendations/components/RecommendationPlayer/RecommendationPlayerContainer.tsx:            transform: [{ translateX: trans }, { scaleX }],
./features/recommendations/components/RecommendationPlayer/RecommendationPlayerContainer.tsx:        data?.player?.positions as Position[],
./features/recommendations/components/RecommendationPlayer/RecommendationPlayerContainer.tsx:        inputRange: [0, 1],
./features/recommendations/components/RecommendationPlayer/RecommendationPlayerContainer.tsx:        inputRange: [0, 1],
./features/recommendations/components/RecommendationPlayer/RecommendationPlayerContainer.tsx:        outputRange: [0, 1],
./features/recommendations/components/RecommendationPlayer/RecommendationPlayerContainer.tsx:        outputRange: [widthAction, 0],
./features/recommendations/components/RecommendationPlayer/RecommendationPlayerContainer.tsx:      refetchQueries: ["RecommendationsListPlayerRecommendations"],
./features/recommendations/components/RecommendationPlayer/RecommendationPlayerContainer.tsx:    []
./features/recommendations/components/RecommendationPlayer/RecommendationPlayerContainer.tsx:    [data.id, data.player, recommendationsCategorySelected]
./features/recommendations/components/RecommendationPlayer/RecommendationPlayerContainer.tsx:    [data?.player, isDeleting]
./features/recommendations/components/RecommendationPlayer/RecommendationPlayerContainer.tsx:    [data?.player?.isWatchedByCurrentUser]
./features/recommendations/components/RecommendationPlayer/RecommendationPlayerContainer.tsx:    [handleRemovePlayer, widthAction]
./features/recommendations/components/RecommendationPlayer/RecommendationPlayerContainer.tsx:  const [removePlayerFromRecommendations, { loading: isDeleting }] =
./features/recommendations/components/RecommendationPlayer/RecommendationPlayerContainer.tsx:  const [showActionSheet, setShowActionSheet] = useState<boolean>(false);
./features/recommendations/components/RecommendationPlayer/RecommendationPlayerContainer.tsx:  const handleAddPlayer = useCallback(() => setShowActionSheet(true), []);
./features/recommendations/components/RecommendationPlayer/RecommendationPlayerContainer.tsx:  }, [data?.player?.id, router]);
./features/recommendations/components/RecommendationsBottomSheet/RecommendationsBottomSheetContainer.tsx:    []
./features/recommendations/components/RecommendationsBottomSheet/RecommendationsBottomSheetContainer.tsx:  const [snapIndex, setSnapIndex] = useState<number>(0);
./features/recommendations/components/RecommendationsBottomSheet/RecommendationsBottomSheetContainer.tsx:  }, [snapIndex]);
./features/recommendations/components/RecommendationsBottomSheet/RecommendationsBottomSheetView.tsx:      <BottomSheetView className={className} onTouchStart={onPress}>
./features/recommendations/components/RecommendationsBottomSheet/RecommendationsBottomSheetView.tsx:    <BottomSheetContent className={className} onTouchStart={onPress}>
./features/recommendations/components/RecommendationsBottomSheet/RecommendationsBottomSheetView.tsx:  children: ReactNode[] | ReactNode;
./features/recommendations/components/RecommendationsBottomSheet/RecommendationsBottomSheetView.tsx:  snapPoints: string[];
./features/recommendations/components/RecommendationsCategorySelection/RecommendationsCategorySelectionContainer.tsx:      recommendationsCategorySelectedVar(recommendationTypes[0]?.type);
./features/recommendations/components/RecommendationsCategorySelection/RecommendationsCategorySelectionContainer.tsx:    []
./features/recommendations/components/RecommendationsCategorySelection/RecommendationsCategorySelectionContainer.tsx:  }, [recommendationTypes, recommendationsCategorySelected]);
./features/recommendations/components/RecommendationsCategorySelection/RecommendationsCategorySelectionView.tsx:  recommendationTypes: IRecommendationsCategorySelection[];
./features/reports/components/MatchItem/MatchItemContainer.tsx:  selectedMatchIds: string[];
./features/reports/components/MatchItem/MatchItemView.tsx:        <Button variant="link" onPress={onSelect}>
./features/reports/components/MatchItem/MatchItemView.tsx:    <Pressable onPress={onSelect}>
./features/reports/components/MatchItem/MatchItemView.tsx:    {/* <Link asChild href={`/players/${playerId}/matches/${item.matchId}/intake`}> */}
./features/reports/components/MatchItem/MatchItemView.tsx:  selectedMatchIds: string[];
./features/reports/components/ReportItem/ReportItemContainer.tsx:    [item?.reportDate]
./features/reports/components/ReportItem/ReportItemContainer.tsx:  const [isModalOpen, setIsModalOpen] = React.useState(false);
./features/reports/components/ReportItem/ReportItemContainer.tsx:  }, []);
./features/reports/components/ReportItem/ReportItemContainer.tsx:  }, []);
./features/reports/components/ReportItem/ReportItemContainer.tsx:  }, [item?.ground, item?.team]);
./features/reports/components/ReportItem/ReportItemView.tsx:            <Icon as={XIcon} size="lg" className="text-gray-400" />
./features/reports/components/ReportItem/ReportItemView.tsx:          <Markdown value={reportText ?? ""} />
./features/reports/components/ReportItem/ReportItemView.tsx:    <Pressable onPress={onPress}>
./features/reports/screens/Main/MainContainer.tsx:                <ButtonIcon as={CirclePlusIcon} />
./features/reports/screens/Main/MainContainer.tsx:            <Link asChild href={`/players/${playerId}/matches`}>
./features/reports/screens/Main/MainContainer.tsx:      items={scoutReports as PlayerDetailScoutReportsFragment[]}
./features/reports/screens/Main/MainContainer.tsx:    () => data?.getPlayer?.scoutReports ?? [],
./features/reports/screens/Main/MainContainer.tsx:    [data?.getPlayer?.scoutReports]
./features/reports/screens/Main/MainContainer.tsx:    useCallback(({ item }) => <ReportItem item={item} />, []);
./features/reports/screens/Main/MainContainer.tsx:    }, [intakeFormEnabled, isAdmin, navigation, playerId])
./features/reports/screens/Main/MainView.tsx:  items: PlayerDetailScoutReportsFragment[];
./features/reports/screens/Matches/MatchesContainer.tsx:        : [...prev, matchId]
./features/reports/screens/Matches/MatchesContainer.tsx:      [],
./features/reports/screens/Matches/MatchesContainer.tsx:    <VStack style={{ width: widthContent, alignSelf: "center" }}>
./features/reports/screens/Matches/MatchesContainer.tsx:    []
./features/reports/screens/Matches/MatchesContainer.tsx:    [data]
./features/reports/screens/Matches/MatchesContainer.tsx:    [handleSelectMatch, selectedMatchIds]
./features/reports/screens/Matches/MatchesContainer.tsx:  const [selectedMatchIds, setSelectedMatchIds] = useState<string[]>([]);
./features/reports/screens/Matches/MatchesContainer.tsx:  const handleRefresh = useCallback(() => refetch().catch(() => {}), [refetch]);
./features/reports/screens/Matches/MatchesContainer.tsx:  }, []);
./features/reports/screens/Matches/MatchesContainer.tsx:  }, [endCursor, fetchMore, hasNextPage, loading]);
./features/reports/screens/Matches/MatchesView.tsx:        colors={["white"]}
./features/reports/screens/Matches/MatchesView.tsx:  items: ReportsPlayerMatchFragment[];
./features/reports/screens/Matches/MatchesView.tsx:  selectedMatchIds: string[];
./features/roster-management/components/Header/HeaderContainer.tsx:  return <HeaderView pathname={pathname} {...props} />;
./features/roster-management/components/Header/HeaderView.tsx:          <InputIcon as={SearchIcon} size="xl" />
./features/roster-management/components/Header/HeaderView.tsx:        <Link asChild href={path} key={path} replace>
./features/roster-management/components/Header/HeaderView.tsx:      {Object.entries(buttonMap).map(([text, path]) => (
./features/roster-management/components/LeagueItem/LeagueItemContainer.tsx:    [item.isMyOrganizationLeague]
./features/roster-management/components/LeagueItem/LeagueItemContainer.tsx:  const [addLeague] = useRosterManagementCreateOrganizationLeagueMutation({
./features/roster-management/components/LeagueItem/LeagueItemContainer.tsx:  const [removeLeague] = useRosterManagementDeleteOrganizationLeagueMutation({
./features/roster-management/components/LeagueItem/LeagueItemContainer.tsx:  }, [addLeague, hasSelectedLeague, removeLeague]);
./features/roster-management/components/LeagueItem/LeagueItemView.tsx:      <Checkbox aria-label={`${item.name} checkbox`} value={item.id}>
./features/roster-management/components/LeagueItem/LeagueItemView.tsx:      value={hasSelectedLeague ? [item.id] : []}
./features/roster-management/components/LeagueItem/LeagueItemView.tsx:    <Text className={`shrink font-heading ${ifWeb("text-xl", "text-2xl")}`}>
./features/roster-management/components/LeagueItem/LeagueItemView.tsx:  onChange: (leagueIds: string[]) => void;
./features/roster-management/components/TeamItem/TeamItemContainer.tsx:    [item.isMyOrganizationTeam]
./features/roster-management/components/TeamItem/TeamItemContainer.tsx:  const [addTeam] = useRosterManagementCreateOrganizationTeamMutation({
./features/roster-management/components/TeamItem/TeamItemContainer.tsx:  const [removeTeam] = useRosterManagementDeleteOrganizationTeamMutation({
./features/roster-management/components/TeamItem/TeamItemContainer.tsx:  }, [addTeam, hasSelectedTeam, removeTeam]);
./features/roster-management/components/TeamItem/TeamItemView.tsx:      <Checkbox aria-label={`${item.name} checkbox`} value={item.id}>
./features/roster-management/components/TeamItem/TeamItemView.tsx:      value={hasSelectedTeam ? [item.id] : []}
./features/roster-management/components/TeamItem/TeamItemView.tsx:    <Text className={`shrink font-heading ${ifWeb("text-xl", "text-2xl")}`}>
./features/roster-management/components/TeamItem/TeamItemView.tsx:  onChange: (teamIds: string[]) => void;
./features/roster-management/screens/Leagues/LeaguesContainer.tsx:      [currentUser?.organizationId]
./features/roster-management/screens/Leagues/LeaguesContainer.tsx:    () => data?.listLeagues?.edges.map(edge => edge.node) ?? [],
./features/roster-management/screens/Leagues/LeaguesContainer.tsx:    [data?.listLeagues?.edges]
./features/roster-management/screens/Leagues/LeaguesContainer.tsx:    [loading, isRefreshing, leagues.length]
./features/roster-management/screens/Leagues/LeaguesContainer.tsx:    [networkStatus]
./features/roster-management/screens/Leagues/LeaguesContainer.tsx:  const [searchText, setSearchText] = useState<string>("");
./features/roster-management/screens/Leagues/LeaguesContainer.tsx:  const handleRefresh = useCallback(() => refetch().catch(() => {}), [refetch]);
./features/roster-management/screens/Leagues/LeaguesContainer.tsx:  const handleSearch = useCallback((value: string) => setSearchText(value), []);
./features/roster-management/screens/Leagues/LeaguesContainer.tsx:  }, [endCursor, fetchMore, loading]);
./features/roster-management/screens/Leagues/LeaguesView.tsx:        colors={["white"]}
./features/roster-management/screens/Leagues/LeaguesView.tsx:      <Header onChangeText={onSearch} placeholder="Search League" />
./features/roster-management/screens/Leagues/LeaguesView.tsx:    <Text className={ifWeb("text-base text-center", "")}>
./features/roster-management/screens/Leagues/LeaguesView.tsx:  leagues: RosterManagementLeagueFragment[];
./features/roster-management/screens/Main/MainContainer.tsx:      ) ?? [],
./features/roster-management/screens/Main/MainContainer.tsx:      data?.listMyOrganizationsPlayers?.edges?.map(edge => edge?.node) ?? [],
./features/roster-management/screens/Main/MainContainer.tsx:    [data?.listMyOrganizationsPlayers?.edges]
./features/roster-management/screens/Main/MainContainer.tsx:    [data?.listMyOrganizationsPlayers?.pageInfo]
./features/roster-management/screens/Main/MainContainer.tsx:    [watchlistData?.listMyUserWatchlists?.edges]
./features/roster-management/screens/Main/MainContainer.tsx:    }, [isFocusSearchInput])
./features/roster-management/screens/Main/MainContainer.tsx:  const handleRefresh = useCallback(() => refetch().catch(() => {}), [refetch]);
./features/roster-management/screens/Main/MainContainer.tsx:  }, [pageInfo, fetchMore, loading]);
./features/roster-management/screens/Main/MainContainer.tsx:  }, [playerDetail]);
./features/roster-management/screens/Main/MainView.native.tsx:      edges={["bottom"]}
./features/roster-management/screens/Main/MainView.web.tsx:  <SafeAreaView edges={["bottom"]} style={{ flex: 1 }}>
./features/roster-management/screens/Teams/TeamsContainer.tsx:      [],
./features/roster-management/screens/Teams/TeamsContainer.tsx:    [currentUser?.organizationId]
./features/roster-management/screens/Teams/TeamsContainer.tsx:    [data?.listMyOrganizationsEligibleTeams?.edges]
./features/roster-management/screens/Teams/TeamsContainer.tsx:    [loading, isRefreshing, teams.length]
./features/roster-management/screens/Teams/TeamsContainer.tsx:    [networkStatus]
./features/roster-management/screens/Teams/TeamsContainer.tsx:  const [searchText, setSearchText] = useState<string>("");
./features/roster-management/screens/Teams/TeamsContainer.tsx:  const handleRefresh = useCallback(() => refetch().catch(() => {}), [refetch]);
./features/roster-management/screens/Teams/TeamsContainer.tsx:  const handleSearch = useCallback((value: string) => setSearchText(value), []);
./features/roster-management/screens/Teams/TeamsContainer.tsx:  }, [endCursor, fetchMore, loading]);
./features/roster-management/screens/Teams/TeamsView.tsx:        colors={["white"]}
./features/roster-management/screens/Teams/TeamsView.tsx:      <Header onChangeText={onSearch} placeholder="Search Team" />
./features/roster-management/screens/Teams/TeamsView.tsx:    <Text className={ifWeb("text-base text-center", "")}>
./features/roster-management/screens/Teams/TeamsView.tsx:  teams: RosterManagementTeamFragment[];
./features/shadow-team/Main/MainContainer.tsx:      ) ?? [],
./features/shadow-team/Main/MainContainer.tsx:    [data?.getShadowTeam?.assignedPlayers]
./features/shadow-team/Main/MainContainer.tsx:    [data?.getShadowTeam?.avgTeamGPR]
./features/shadow-team/Main/MainContainer.tsx:    [selectedShowTeam, updateFormationShadowTeam]
./features/shadow-team/Main/MainContainer.tsx:  const [formation, setFormation] = useState<ShadowTeamFormation>(
./features/shadow-team/Main/MainContainer.tsx:  }, [data?.getShadowTeam?.assignedPlayers]);
./features/shadow-team/Main/MainContainer.tsx:  }, [selectedShowTeam?.formation]);
./features/shadow-team/Main/MainView.tsx:    <CenterShadowTeam formation={formation} assignedPlayers={assignedPlayers} />
./features/shadow-team/Main/MainView.tsx:  assignedPlayers: IAssignPlayer[];
./features/shadow-team/components/CenterShadowTeam/CenterShadowTeamContainer.tsx:    () => showSelectPlayer?.players?.map(item => item.shadowPlayerId) ?? [],
./features/shadow-team/components/CenterShadowTeam/CenterShadowTeamContainer.tsx:    [showSelectPlayer]
./features/shadow-team/components/CenterShadowTeam/CenterShadowTeamContainer.tsx:  assignedPlayers: IAssignPlayer[];
./features/shadow-team/components/CenterShadowTeam/CenterShadowTeamView.tsx:    <ModalMorePlayer formation={formation} assignedPlayers={assignedPlayers} />
./features/shadow-team/components/CenterShadowTeam/CenterShadowTeamView.tsx:  assignedPlayers: IAssignPlayer[];
./features/shadow-team/components/CenterShadowTeam/CenterShadowTeamView.tsx:  selects: string[];
./features/shadow-team/components/CreateShadowTeamForm/CreateShadowTeamFormContainer.tsx:    [createShadowTeam, handleCancel]
./features/shadow-team/components/CreateShadowTeamForm/CreateShadowTeamFormContainer.tsx:    [handleCancel, editShowTeam?.id, updateShadowTeam]
./features/shadow-team/components/CreateShadowTeamForm/CreateShadowTeamFormContainer.tsx:  const [createShadowTeam] = useShadowTeamCreateShadowTeamMutation({
./features/shadow-team/components/CreateShadowTeamForm/CreateShadowTeamFormContainer.tsx:  const [isShowForm, setIsShowForm] = useState<boolean>(false);
./features/shadow-team/components/CreateShadowTeamForm/CreateShadowTeamFormContainer.tsx:  const [updateShadowTeam] = useShadowTeamUpdateShadowTeamMutation({
./features/shadow-team/components/CreateShadowTeamForm/CreateShadowTeamFormContainer.tsx:  }, [editShowTeam, handleCancel, isShowForm, showAlert]);
./features/shadow-team/components/CreateShadowTeamForm/CreateShadowTeamFormContainer.tsx:  }, [editShowTeam, setValue]);
./features/shadow-team/components/CreateShadowTeamForm/CreateShadowTeamFormContainer.tsx:  }, [reset]);
./features/shadow-team/components/CreateShadowTeamForm/CreateShadowTeamFormView.tsx:                className="flex-1 font-body text-xl text-typography-900 placeholder:text-typography-500 web:cursor-text web:data-[disabled=true]:cursor-not-allowed"
./features/shadow-team/components/CreateShadowTeamForm/CreateShadowTeamFormView.tsx:              <FormControlErrorIcon as={AlertCircleIcon} />
./features/shadow-team/components/CreateShadowTeamForm/CreateShadowTeamFormView.tsx:  <VStack className={ifWeb("my-4 gap-2", "my-4 gap-2")}>
./features/shadow-team/components/DraggableList/DraggableListContainer.tsx:                    <ButtonIcon as={TrashIcon} className="text-info-500" />
./features/shadow-team/components/DraggableList/DraggableListContainer.tsx:                  <ButtonIcon as={GripVertical} className="text-info-500" />
./features/shadow-team/components/DraggableList/DraggableListContainer.tsx:            <Pressable onPress={() => onPressPlayer?.(item.playerId)}>
./features/shadow-team/components/DraggableList/DraggableListContainer.tsx:    <DragListView onDragEnd={onDragEnd} nodeSelector=".drag-item">
./features/shadow-team/components/DraggableList/DraggableListContainer.tsx:  items: IPlayerSoccer[];
./features/shadow-team/components/ItemPlayer/ItemPlayerView.tsx:        className={`mr-2 items-center justify-center rounded-full p-1 ${isSelected ? "bg-[#0b8dcd]" : "bg-[#26252A]"}`}
./features/shadow-team/components/ItemPlayer/ItemPlayerView.tsx:  <Pressable onPress={() => onChangeSelect?.(player, isSelected)}>
./features/shadow-team/components/LeftShadowTeam/LeftShadowTeamContainer.tsx:      const assignedPlayerTeams: IAssignPlayer[] = [
./features/shadow-team/components/LeftShadowTeam/LeftShadowTeamContainer.tsx:    [assignedPlayers, formation, updateAssignPlayer]
./features/shadow-team/components/LeftShadowTeam/LeftShadowTeamContainer.tsx:    [assignedPlayers, formation, updateAssignPlayer]
./features/shadow-team/components/LeftShadowTeam/LeftShadowTeamContainer.tsx:    [data?.listShadowTeamPlayers.edges]
./features/shadow-team/components/LeftShadowTeam/LeftShadowTeamContainer.tsx:    [data?.listShadowTeamPlayers?.pageInfo]
./features/shadow-team/components/LeftShadowTeam/LeftShadowTeamContainer.tsx:    [handleAssignPlayer, handleRemovePlayerAssign, selectedShowTeam?.id]
./features/shadow-team/components/LeftShadowTeam/LeftShadowTeamContainer.tsx:    [loading]
./features/shadow-team/components/LeftShadowTeam/LeftShadowTeamContainer.tsx:  assignedPlayers: IAssignPlayer[];
./features/shadow-team/components/LeftShadowTeam/LeftShadowTeamContainer.tsx:  const [isOpen, setIsOpen] = useState<boolean>(false);
./features/shadow-team/components/LeftShadowTeam/LeftShadowTeamContainer.tsx:  const handleOpenModalPlayer = useCallback(() => setIsOpen(true), []);
./features/shadow-team/components/LeftShadowTeam/LeftShadowTeamContainer.tsx:  }, []);
./features/shadow-team/components/LeftShadowTeam/LeftShadowTeamContainer.tsx:  }, []);
./features/shadow-team/components/LeftShadowTeam/LeftShadowTeamContainer.tsx:  }, [loading, pageInfo]);
./features/shadow-team/components/LeftShadowTeam/LeftShadowTeamContainer.tsx:  }, [pageInfo, fetchMore, isFetchMore]);
./features/shadow-team/components/LeftShadowTeam/LeftShadowTeamView.tsx:          <Heading size={ifWeb("lg", "xl")}>Players</Heading>
./features/shadow-team/components/LeftShadowTeam/LeftShadowTeamView.tsx:        <Icon as={ChevronLeft} size="2xl" />
./features/shadow-team/components/LeftShadowTeam/LeftShadowTeamView.tsx:  players?: ShadowTeamPlayerFragment[];
./features/shadow-team/components/ModalMorePlayer/ModalMorePlayerContainer.tsx:      const newItems = [...players];
./features/shadow-team/components/ModalMorePlayer/ModalMorePlayerContainer.tsx:    []
./features/shadow-team/components/ModalMorePlayer/ModalMorePlayerContainer.tsx:    [players]
./features/shadow-team/components/ModalMorePlayer/ModalMorePlayerContainer.tsx:    [players]
./features/shadow-team/components/ModalMorePlayer/ModalMorePlayerContainer.tsx:    const assignedPlayerTeams: IAssignPlayer[] = [
./features/shadow-team/components/ModalMorePlayer/ModalMorePlayerContainer.tsx:  assignedPlayers: IAssignPlayer[];
./features/shadow-team/components/ModalMorePlayer/ModalMorePlayerContainer.tsx:  const [players, setPlayers] = useState<IPlayerSoccer[]>([]);
./features/shadow-team/components/ModalMorePlayer/ModalMorePlayerContainer.tsx:  }, []);
./features/shadow-team/components/ModalMorePlayer/ModalMorePlayerContainer.tsx:  }, [viewMorePositionPlayer.players]);
./features/shadow-team/components/ModalMorePlayer/ModalMorePlayerView.tsx:            className="stroke-background-400 group-[:active]/modal-close-button:stroke-background-900 group-[:focus-visible]/modal-close-button:stroke-background-900 group-[:hover]/modal-close-button:stroke-background-700"
./features/shadow-team/components/ModalMorePlayer/ModalMorePlayerView.tsx:            className={`font-body ${ifWeb("text-lg", "")} text-info-500 data-[hover=true]:text-info-600`}
./features/shadow-team/components/ModalMorePlayer/ModalMorePlayerView.tsx:          className="mt-2 bg-background-button data-[hover=true]:bg-background-button"
./features/shadow-team/components/ModalMorePlayer/ModalMorePlayerView.tsx:        <HStack className="flex-1" style={{ marginRight: 50 }}>
./features/shadow-team/components/ModalMorePlayer/ModalMorePlayerView.tsx:    <ModalContent style={{ height: height * 0.75 }}>
./features/shadow-team/components/ModalMorePlayer/ModalMorePlayerView.tsx:  <Modal isOpen={isOpen} onClose={onClose} size="lg">
./features/shadow-team/components/ModalMorePlayer/ModalMorePlayerView.tsx:  players: IPlayerSoccer[];
./features/shadow-team/components/ModalPlayer/ModalPlayerContainer.tsx:        setSelected([player.id, ...selected]);
./features/shadow-team/components/ModalPlayer/ModalPlayerContainer.tsx:      playerSelected?.map(playerSelect => playerSelect.playerId) || []
./features/shadow-team/components/ModalPlayer/ModalPlayerContainer.tsx:      })) ?? [],
./features/shadow-team/components/ModalPlayer/ModalPlayerContainer.tsx:    [data?.searchAvailablePlayersForShadowTeam?.edges]
./features/shadow-team/components/ModalPlayer/ModalPlayerContainer.tsx:    [data?.searchAvailablePlayersForShadowTeam?.pageInfo]
./features/shadow-team/components/ModalPlayer/ModalPlayerContainer.tsx:    [handleChangeSelect, selected]
./features/shadow-team/components/ModalPlayer/ModalPlayerContainer.tsx:    [loading]
./features/shadow-team/components/ModalPlayer/ModalPlayerContainer.tsx:    [selected]
./features/shadow-team/components/ModalPlayer/ModalPlayerContainer.tsx:  const [addPlayerShadowTeam, { error }] =
./features/shadow-team/components/ModalPlayer/ModalPlayerContainer.tsx:  const [searchText, setSearchText] = useState<string>("");
./features/shadow-team/components/ModalPlayer/ModalPlayerContainer.tsx:  const [selected, setSelected] = useState<string[]>([]);
./features/shadow-team/components/ModalPlayer/ModalPlayerContainer.tsx:  playerSelected?: ShadowTeamPlayerFragment[];
./features/shadow-team/components/ModalPlayer/ModalPlayerContainer.tsx:  }, [error, toast]);
./features/shadow-team/components/ModalPlayer/ModalPlayerContainer.tsx:  }, [error, toast]);
./features/shadow-team/components/ModalPlayer/ModalPlayerContainer.tsx:  }, [fetchMore, isFetchMore, pageInfo]);
./features/shadow-team/components/ModalPlayer/ModalPlayerContainer.tsx:  }, [handleDebounceSearch, searchTextPlayer]);
./features/shadow-team/components/ModalPlayer/ModalPlayerContainer.tsx:  }, [handleDebounceSearch, searchTextPlayer]);
./features/shadow-team/components/ModalPlayer/ModalPlayerContainer.tsx:  }, [loading, pageInfo]);
./features/shadow-team/components/ModalPlayer/ModalPlayerContainer.tsx:  }, [loading, props.isOpen, refetch, shadowTeamId]);
./features/shadow-team/components/ModalPlayer/ModalPlayerContainer.tsx:  }, [playerSelected]);
./features/shadow-team/components/ModalPlayer/ModalPlayerContainer.tsx:  }, [selected, addPlayerShadowTeam, shadowTeamId, playerSelected]);
./features/shadow-team/components/ModalPlayer/ModalPlayerView.tsx:                <InputIcon as={SearchIcon} size="xl" />
./features/shadow-team/components/ModalPlayer/ModalPlayerView.tsx:              className="stroke-background-400 group-[:active]/modal-close-button:stroke-background-900 group-[:focus-visible]/modal-close-button:stroke-background-900 group-[:hover]/modal-close-button:stroke-background-700"
./features/shadow-team/components/ModalPlayer/ModalPlayerView.tsx:            className={`font-body ${ifWeb("text-lg", "")} text-info-500 data-[hover=true]:text-info-600`}
./features/shadow-team/components/ModalPlayer/ModalPlayerView.tsx:          className="mt-2 bg-background-button data-[hover=true]:bg-background-button"
./features/shadow-team/components/ModalPlayer/ModalPlayerView.tsx:  <Modal isOpen={isOpen} onClose={onClose} size="lg">
./features/shadow-team/components/ModalPlayer/ModalPlayerView.tsx:  players: PlayerSearchPlayerFragment[];
./features/shadow-team/components/ModalSelectPlayer/ModalSelectPlayerContainer.tsx:        .filter(player => !idsToRemove.has(player.shadowPlayerId)) ?? [];
./features/shadow-team/components/ModalSelectPlayer/ModalSelectPlayerContainer.tsx:        setSelected([player.id, ...selected]);
./features/shadow-team/components/ModalSelectPlayer/ModalSelectPlayerContainer.tsx:      [...assignedPlayerTeams, ...assignedPosition],
./features/shadow-team/components/ModalSelectPlayer/ModalSelectPlayerContainer.tsx:    () => data?.listShadowTeamPlayers?.edges.map(edge => edge.node) ?? [],
./features/shadow-team/components/ModalSelectPlayer/ModalSelectPlayerContainer.tsx:    [data?.listShadowTeamPlayers?.edges]
./features/shadow-team/components/ModalSelectPlayer/ModalSelectPlayerContainer.tsx:    [data?.listShadowTeamPlayers?.pageInfo]
./features/shadow-team/components/ModalSelectPlayer/ModalSelectPlayerContainer.tsx:    [handleChangeSelect, selected]
./features/shadow-team/components/ModalSelectPlayer/ModalSelectPlayerContainer.tsx:    [loading]
./features/shadow-team/components/ModalSelectPlayer/ModalSelectPlayerContainer.tsx:    [selected]
./features/shadow-team/components/ModalSelectPlayer/ModalSelectPlayerContainer.tsx:    const assignedPlayerTeams: IAssignPlayer[] =
./features/shadow-team/components/ModalSelectPlayer/ModalSelectPlayerContainer.tsx:    setSelected([]);
./features/shadow-team/components/ModalSelectPlayer/ModalSelectPlayerContainer.tsx:  assignedPlayers: IAssignPlayer[];
./features/shadow-team/components/ModalSelectPlayer/ModalSelectPlayerContainer.tsx:  const [searchText, setSearchText] = useState<string>("");
./features/shadow-team/components/ModalSelectPlayer/ModalSelectPlayerContainer.tsx:  const [selected, setSelected] = useState<string[]>([]);
./features/shadow-team/components/ModalSelectPlayer/ModalSelectPlayerContainer.tsx:  selects: string[];
./features/shadow-team/components/ModalSelectPlayer/ModalSelectPlayerContainer.tsx:  useEffect(() => setSelected(selects), [selects]);
./features/shadow-team/components/ModalSelectPlayer/ModalSelectPlayerContainer.tsx:  }, []);
./features/shadow-team/components/ModalSelectPlayer/ModalSelectPlayerContainer.tsx:  }, [fetchMore, isFetchMore, pageInfo]);
./features/shadow-team/components/ModalSelectPlayer/ModalSelectPlayerContainer.tsx:  }, [handleDebounceSearch, searchTextPlayer]);
./features/shadow-team/components/ModalSelectPlayer/ModalSelectPlayerContainer.tsx:  }, [loading, pageInfo]);
./features/shadow-team/components/ModalSelectPlayer/ModalSelectPlayerView.tsx:                <InputIcon as={SearchIcon} size="xl" />
./features/shadow-team/components/ModalSelectPlayer/ModalSelectPlayerView.tsx:              className="stroke-background-400 group-[:active]/modal-close-button:stroke-background-900 group-[:focus-visible]/modal-close-button:stroke-background-900 group-[:hover]/modal-close-button:stroke-background-700"
./features/shadow-team/components/ModalSelectPlayer/ModalSelectPlayerView.tsx:            className={`font-body ${ifWeb("text-lg", "")} text-info-500 data-[hover=true]:text-info-600`}
./features/shadow-team/components/ModalSelectPlayer/ModalSelectPlayerView.tsx:          className="mt-2 bg-background-button data-[hover=true]:bg-background-button"
./features/shadow-team/components/ModalSelectPlayer/ModalSelectPlayerView.tsx:  <Modal isOpen={isOpen} onClose={onClose} size="lg">
./features/shadow-team/components/ModalSelectPlayer/ModalSelectPlayerView.tsx:  players: ShadowTeamPlayerFragment[];
./features/shadow-team/components/MorePlayerItem/MorePlayerItemView.tsx:          <ButtonIcon as={TrashIcon} className="text-info-500" />
./features/shadow-team/components/MorePlayerItem/MorePlayerItemView.tsx:        <ButtonIcon as={GripVertical} className="text-info-500" />
./features/shadow-team/components/MorePlayerItem/MorePlayerItemView.tsx:      <Button variant="link" onPress={drag}>
./features/shadow-team/components/MorePlayerItem/MorePlayerItemView.tsx:  <Pressable onPress={() => onPressPlayer?.(player.playerId)}>
./features/shadow-team/components/PlayerItem/PlayerItemContainer.tsx:    [onAssignPlayer, player.id]
./features/shadow-team/components/PlayerItem/PlayerItemContainer.tsx:  const [isOpen, setIsOpen] = useState<boolean>(false);
./features/shadow-team/components/PlayerItem/PlayerItemContainer.tsx:  const [removeMemberShadowTeam] = useShadowTeamRemoveShadowTeamPlayerMutation({
./features/shadow-team/components/PlayerItem/PlayerItemContainer.tsx:  const handleClose = useCallback(() => setIsOpen(false), []);
./features/shadow-team/components/PlayerItem/PlayerItemContainer.tsx:  }, []);
./features/shadow-team/components/PlayerItem/PlayerItemContainer.tsx:  }, [onAssignPlayer, player.id, soccerSelectPosition]);
./features/shadow-team/components/PlayerItem/PlayerItemView.tsx:            <ButtonIcon as={TrashIcon} className="text-info-500" />
./features/shadow-team/components/PlayerItem/PlayerItemView.tsx:        <MenuItem key={menuPosition.value} className="p-0">
./features/shadow-team/components/PlayerItem/PlayerItemView.tsx:      trigger={({ ...triggerPropsMenu }) => <VStack {...triggerPropsMenu} />}
./features/shadow-team/components/PlayerItem/PlayerItemView.tsx:  menuPositions: IMenuPosition[];
./features/shadow-team/components/RightShadowTeam/RightShadowTeamContainer.tsx:    [data?.listShadowTeams.edges]
./features/shadow-team/components/RightShadowTeam/RightShadowTeamContainer.tsx:    [data?.listShadowTeams?.pageInfo]
./features/shadow-team/components/RightShadowTeam/RightShadowTeamContainer.tsx:    [deleteShadowTeam, showAlert]
./features/shadow-team/components/RightShadowTeam/RightShadowTeamContainer.tsx:    [handleSelectShadowTeam, handleShowConfirmDelete, selectedShowTeam]
./features/shadow-team/components/RightShadowTeam/RightShadowTeamContainer.tsx:    [loading]
./features/shadow-team/components/RightShadowTeam/RightShadowTeamContainer.tsx:  const [deleteShadowTeam] = useShadowTeamDeleteShadowTeamMutation({
./features/shadow-team/components/RightShadowTeam/RightShadowTeamContainer.tsx:  const handleExportToPdf = useCallback(() => exportToPdfVar(true), []);
./features/shadow-team/components/RightShadowTeam/RightShadowTeamContainer.tsx:  }, []);
./features/shadow-team/components/RightShadowTeam/RightShadowTeamContainer.tsx:  }, [avgGpr, gprTeam]);
./features/shadow-team/components/RightShadowTeam/RightShadowTeamContainer.tsx:  }, [pageInfo, fetchMore, loading]);
./features/shadow-team/components/RightShadowTeam/RightShadowTeamView.tsx:          className={`font-body ${ifWeb("text-lg", "")} text-info-500 data-[hover=true]:text-info-600`}
./features/shadow-team/components/RightShadowTeam/RightShadowTeamView.tsx:        className="mt-4 bg-background-button data-[hover=true]:bg-background-button"
./features/shadow-team/components/RightShadowTeam/RightShadowTeamView.tsx:  shadowTeams?: ShadowTeamFragment[];
./features/shadow-team/components/SelectPlayerItem/SelectPlayerItemView.tsx:        className={`mr-2 items-center justify-center rounded-full p-1 ${isSelected ? "bg-[#0b8dcd]" : "bg-[#26252A]"}`}
./features/shadow-team/components/SelectPlayerItem/SelectPlayerItemView.tsx:  <Pressable onPress={() => onChangeSelect?.(player, isSelected)}>
./features/shadow-team/components/ShadowTeamItem/ShadowTeamItemView.tsx:          <ButtonIcon as={Edit2} className="text-info-500" />
./features/shadow-team/components/ShadowTeamItem/ShadowTeamItemView.tsx:        <ButtonIcon as={TrashIcon} className="text-info-500" />
./features/shadow-team/components/ShadowTeamItem/ShadowTeamItemView.tsx:  <Pressable onPress={() => onSelectShadowTeam?.(shadowTeam)}>
./features/shadow-team/components/SoccerField/SoccerFieldContainer.tsx:                groupedByPosition[tacticalPosition.index] as IPlayerSoccer[]
./features/shadow-team/components/SoccerField/SoccerFieldContainer.tsx:          .filter((_, position: number) => groupedByPosition[position])
./features/shadow-team/components/SoccerField/SoccerFieldContainer.tsx:        `${tacticalPositions[player.position]?.role}`,
./features/shadow-team/components/SoccerField/SoccerFieldContainer.tsx:        acc[pos] = [];
./features/shadow-team/components/SoccerField/SoccerFieldContainer.tsx:      acc[pos].push({
./features/shadow-team/components/SoccerField/SoccerFieldContainer.tsx:      head: [["No", "Name", "Position"]],
./features/shadow-team/components/SoccerField/SoccerFieldContainer.tsx:      if (!acc[pos]) {
./features/shadow-team/components/SoccerField/SoccerFieldContainer.tsx:      players: (groupedByPosition[position] as IPlayerSoccer[]) ?? [],
./features/shadow-team/components/SoccerField/SoccerFieldContainer.tsx:      }[]
./features/shadow-team/components/SoccerField/SoccerFieldContainer.tsx:    [handleOpenModal, selectedShowTeam?.id, tacticalPositions]
./features/shadow-team/components/SoccerField/SoccerFieldContainer.tsx:    [tacticalPositions]
./features/shadow-team/components/SoccerField/SoccerFieldContainer.tsx:    const pdf = new jsPDF("portrait", "px", [canvas.width, canvas.height]);
./features/shadow-team/components/SoccerField/SoccerFieldContainer.tsx:  const [selectedPlayer, setSelectedPlayer] =
./features/shadow-team/components/SoccerField/SoccerFieldContainer.tsx:  }, [exportToPdf, exportFileToPDF]);
./features/shadow-team/components/SoccerPlayers/SoccerPlayersContainer.tsx:  players: IPlayerSoccer[];
./features/shadow-team/components/SoccerPlayers/SoccerPlayersContainer.tsx:  }, [players, position]);
./features/shadow-team/components/SoccerPlayers/SoccerPlayersView.tsx:            className="font-body text-info-500 data-[hover=true]:text-info-600"
./features/shadow-team/components/SoccerPlayers/SoccerPlayersView.tsx:        <Pressable className="mr-2 h-7 justify-center" onPress={onViewMore}>
./features/shadow-team/components/SoccerPlayers/SoccerPlayersView.tsx:  players: IPlayerSoccer[];
./features/similar-players/components/FilterContent/FilterContentView.tsx:  ageValue: number[];
./features/similar-players/components/FilterContent/FilterContentView.tsx:  groupedLeagues: RosterManagementLeagueFragment[];
./features/similar-players/components/FilterContent/FilterContentView.tsx:  leaguesValue: RosterManagementLeagueFragment[];
./features/similar-players/components/FilterContent/FilterContentView.tsx:  monthsRemainingValue: number[];
./features/similar-players/components/FilterContent/FilterContentView.tsx:  onChangeAge?: (value: number[]) => void;
./features/similar-players/components/FilterContent/FilterContentView.tsx:  onChangeMonthsRemaining?: (value: number[]) => void;
./features/similar-players/components/FilterContent/FilterContentView.tsx:  onChangeSalary?: (value: number[]) => void;
./features/similar-players/components/FilterContent/FilterContentView.tsx:  onSelectLeagues?: (value: RosterManagementLeagueFragment[]) => void;
./features/similar-players/components/FilterContent/FilterContentView.tsx:  salaryValue: number[];
./features/similar-players/components/Header/HeaderContainer.tsx:          DEFAULT_MAX_MONTHS_REMAINING === value[1] ? null : value[1],
./features/similar-players/components/Header/HeaderContainer.tsx:          DEFAULT_MIN_MONTHS_REMAINING === value[0] ? null : value[0],
./features/similar-players/components/Header/HeaderContainer.tsx:        maxAge: DEFAULT_MAX_AGE === value[1] ? null : value[1],
./features/similar-players/components/Header/HeaderContainer.tsx:        maxSalary: DEFAULT_MAX_COST === value[1] ? null : value[1],
./features/similar-players/components/Header/HeaderContainer.tsx:        minAge: DEFAULT_MIN_AGE === value[0] ? null : value[0],
./features/similar-players/components/Header/HeaderContainer.tsx:        minSalary: DEFAULT_MIN_COST === value[0] ? null : value[0],
./features/similar-players/components/Header/HeaderContainer.tsx:      ) ?? [];
./features/similar-players/components/Header/HeaderContainer.tsx:      leaguesValue={filterValues?.leagues ?? []}
./features/similar-players/components/Header/HeaderContainer.tsx:    (selectedLeagues: RosterManagementLeagueFragment[]) => {
./features/similar-players/components/Header/HeaderContainer.tsx:    []
./features/similar-players/components/Header/HeaderContainer.tsx:  const handleReset = useCallback(() => filterValuesVar(null), []);
./features/similar-players/components/Header/HeaderContainer.tsx:  const onChangeAge = useCallback((value: number[]) => {
./features/similar-players/components/Header/HeaderContainer.tsx:  const onChangeMonthsRemaining = useCallback((value: number[]) => {
./features/similar-players/components/Header/HeaderContainer.tsx:  const onChangeSalary = useCallback((value: number[]) => {
./features/similar-players/components/Header/HeaderContainer.tsx:  valueAccordion: string[];
./features/similar-players/components/Header/HeaderContainer.tsx:  }, []);
./features/similar-players/components/Header/HeaderContainer.tsx:  }, []);
./features/similar-players/components/Header/HeaderContainer.tsx:  }, []);
./features/similar-players/components/Header/HeaderContainer.tsx:  }, []);
./features/similar-players/components/Header/HeaderView.tsx:                  className="absolute -right-3 -top-5 z-10 size-[22px] items-center justify-center self-end rounded-full bg-info-500"
./features/similar-players/components/Header/HeaderView.tsx:              <Icon as={SlidersHorizontalIcon} className="font-body" />
./features/similar-players/components/Header/HeaderView.tsx:              <Text className={`${ifWeb("text-lg", "text-xl")} font-bold`}>
./features/similar-players/components/Header/HeaderView.tsx:            <Text className={`mr-4 shrink ${ifWeb("text-lg", "text-xl")}`}>
./features/similar-players/components/Header/HeaderView.tsx:          <VStack key="1" className={ifWeb("mt-8 gap-3", "gap-6")}>
./features/similar-players/components/Header/HeaderView.tsx:          <VStack key="2" className={ifWeb("mt-8 gap-3", "mt-4 gap-6")}>
./features/similar-players/components/Header/HeaderView.tsx:          <VStack key="3" className={ifWeb("gap-3 py-8", "mt-4 gap-6 pb-12")}>
./features/similar-players/components/Header/HeaderView.tsx:        <Button variant="link" onPress={onReset} className="my-4 self-end px-6">
./features/similar-players/components/Header/HeaderView.tsx:  ageValue: number[];
./features/similar-players/components/Header/HeaderView.tsx:  groupedLeagues: RosterManagementLeagueFragment[];
./features/similar-players/components/Header/HeaderView.tsx:  leaguesValue: RosterManagementLeagueFragment[];
./features/similar-players/components/Header/HeaderView.tsx:  monthsRemainingValue: number[];
./features/similar-players/components/Header/HeaderView.tsx:  onChangeAge?: (value: number[]) => void;
./features/similar-players/components/Header/HeaderView.tsx:  onChangeMonthsRemaining?: (value: number[]) => void;
./features/similar-players/components/Header/HeaderView.tsx:  onChangeSalary?: (value: number[]) => void;
./features/similar-players/components/Header/HeaderView.tsx:  onSelectLeagues?: (value: RosterManagementLeagueFragment[]) => void;
./features/similar-players/components/Header/HeaderView.tsx:  salaryValue: number[];
./features/similar-players/components/Header/HeaderView.tsx:  valueAccordion?: string[];
./features/similar-players/screens/Main/MainContainer.tsx:      (data?.listSimilarPlayers.edges ?? [])
./features/similar-players/screens/Main/MainContainer.tsx:      [handlePressSimilarPlayer, handleReset]
./features/similar-players/screens/Main/MainContainer.tsx:      setValueAccordion(["filter"]);
./features/similar-players/screens/Main/MainContainer.tsx:      setValueAccordion([]);
./features/similar-players/screens/Main/MainContainer.tsx:      setValueAccordion([]);
./features/similar-players/screens/Main/MainContainer.tsx:      similarPlayerResults={items as SimilarPlayersPlayerResultFragment[]}
./features/similar-players/screens/Main/MainContainer.tsx:    [allDataLoading, isRefreshing, items.length]
./features/similar-players/screens/Main/MainContainer.tsx:    [data?.listSimilarPlayers.edges, playerId]
./features/similar-players/screens/Main/MainContainer.tsx:    [playerData?.getPlayer]
./features/similar-players/screens/Main/MainContainer.tsx:  const [playerDetail, setPlayerDetail] = useState<
./features/similar-players/screens/Main/MainContainer.tsx:  const [showActionSheet, setShowActionSheet] = useState<boolean>(false);
./features/similar-players/screens/Main/MainContainer.tsx:  const [valueAccordion, setValueAccordion] = useState<string[]>([]);
./features/similar-players/screens/Main/MainContainer.tsx:  const handleAddPlayer = useCallback(() => setShowActionSheet(true), []);
./features/similar-players/screens/Main/MainContainer.tsx:  const handleClose = useCallback(() => setShowActionSheet(false), []);
./features/similar-players/screens/Main/MainContainer.tsx:  const handleCloseUser = useCallback(() => setPlayerDetail(undefined), []);
./features/similar-players/screens/Main/MainContainer.tsx:  }, []);
./features/similar-players/screens/Main/MainContainer.tsx:  }, [endCursor, allDataLoading, fetchMore]);
./features/similar-players/screens/Main/MainContainer.tsx:  }, [refetch]);
./features/similar-players/screens/Main/MainContainer.tsx:  }, [valueAccordion.length]);
./features/similar-players/screens/Main/MainContainer.tsx:  }, [valueAccordion.length]);
./features/similar-players/screens/Main/MainView.native.tsx:              colors={["white"]}
./features/similar-players/screens/Main/MainView.native.tsx:      <VStack className={Platform.OS === "web" ? "flex-1" : undefined}>
./features/similar-players/screens/Main/MainView.native.tsx:      <VStack className={Platform.OS === "web" ? "w-1/3" : undefined}>
./features/similar-players/screens/Main/MainView.native.tsx:    <VStack className={Platform.OS === "web" ? "flex-row" : undefined}>
./features/similar-players/screens/Main/MainView.web.tsx:            colors={["white"]}
./features/similar-players/screens/Main/MainView.web.tsx:      <RightColumnContainer type="note" playerId={playerDetail.id} />
./features/watchlist/components/Watchlist/WatchlistContainer.tsx:            value: newPosisions[0].playerId,
./features/watchlist/components/Watchlist/WatchlistContainer.tsx:          data?.listMyUserWatchlists?.edges?.[0]?.node?.watchlist?.id ??
./features/watchlist/components/Watchlist/WatchlistContainer.tsx:        data?.listMyUserWatchlists?.edges?.[0]?.node?.watchlist?.id ??
./features/watchlist/components/Watchlist/WatchlistContainer.tsx:        refetchQueries: ["WatchlistListWatchlistPlayers"],
./features/watchlist/components/Watchlist/WatchlistContainer.tsx:      ) ?? [],
./features/watchlist/components/Watchlist/WatchlistContainer.tsx:      [],
./features/watchlist/components/Watchlist/WatchlistContainer.tsx:    [data?.listMyUserWatchlists?.edges]
./features/watchlist/components/Watchlist/WatchlistContainer.tsx:    [listWatchlistPlayers?.listWatchlistPlayers?.edges]
./features/watchlist/components/Watchlist/WatchlistContainer.tsx:    [listWatchlistPlayers?.listWatchlistPlayers?.pageInfo]
./features/watchlist/components/Watchlist/WatchlistContainer.tsx:    [loadWatchlists, refetchWatchlists]
./features/watchlist/components/Watchlist/WatchlistContainer.tsx:    [recordUpdatePlayerPosition, updatePositions, watchListSelected]
./features/watchlist/components/Watchlist/WatchlistContainer.tsx:    }, [isFocusSearchInput])
./features/watchlist/components/Watchlist/WatchlistContainer.tsx:  const [updatePositions] =
./features/watchlist/components/Watchlist/WatchlistContainer.tsx:  const firstId = watchlists[0]?.id;
./features/watchlist/components/Watchlist/WatchlistContainer.tsx:  const handleRefresh = useCallback(() => refetch().catch(() => {}), [refetch]);
./features/watchlist/components/Watchlist/WatchlistContainer.tsx:  }, [activeWatchlist, firstId, loadWatchlists]);
./features/watchlist/components/Watchlist/WatchlistContainer.tsx:  }, [pageInfo, fetchMore, loadingPlayers]);
./features/watchlist/components/Watchlist/WatchlistContainer.tsx:  }, [playerDetail]);
./features/watchlist/components/Watchlist/WatchlistView.native.tsx:    edges={["bottom"]}
./features/watchlist/components/Watchlist/WatchlistView.web.tsx:    edges={["bottom"]}
./hooks/useToastNotification.tsx:          <Icon as={CloseIcon} size="xl" style={{ color: colors.toast.icon }} />
./hooks/useToastNotification.tsx:        titleStyle: [style.text, style.textMedium],
./hooks/useToastNotification.tsx:    [show]
./hooks/useToastNotification.tsx:    [toast]
./hooks/useToastNotification.tsx:  }, [toast]);
./providers/AlertProvider.tsx:        <AlertDialog isOpen={isOpen} onClose={hideAlert} size="md">
./providers/AlertProvider.tsx:  const [alertOptions, setAlertOptions] = useState<AlertOptions | null>(null);
./providers/AlertProvider.tsx:  const [isOpen, setIsOpen] = useState(false);
./providers/AlertProvider.tsx:  }, []);
./providers/ApolloClient.tsx:                operationQueue.current = [];
./providers/ApolloClient.tsx:              listLeagues: relayStylePagination(["search"]),
./providers/ApolloClient.tsx:              listNotesByPlayerId: relayStylePagination(["playerId"]),
./providers/ApolloClient.tsx:              return ["ggPlayerKey"];
./providers/ApolloClient.tsx:          graphQLErrors?.[0]?.extensions?.code === "UNAUTHORIZED_EXCEPTION") &&
./providers/ApolloClient.tsx:      <ApolloProvider client={client}>{children}</ApolloProvider>
./providers/ApolloClient.tsx:      operationQueue.current = [];
./providers/ApolloClient.tsx:    []
./providers/ApolloClient.tsx:  const operationQueue = useRef<QueuedRequest[]>([]);
./providers/ApolloClient.tsx:  }, []);
./providers/ApolloClient.tsx:  }, [authLink, cache, errorLink]);
./providers/FeatureFlags.tsx:  return flags?.[flag];
./providers/HistoryProvider.tsx:    setPaths(prev => [...prev, pathName]);
./providers/HistoryProvider.tsx:  const [paths, setPaths] = useState<string[]>([]);
./providers/HistoryProvider.tsx:  }, [pathName]);
./providers/HistoryProvider.tsx:const HistoryContext = createContext<string[]>([]);
./providers/NetworkStatus.tsx:      <Modal useRNModal={Platform.OS !== "web"} isOpen={!hasInternetAccess}>
./providers/NetworkStatus.tsx:  const [hasInternetAccess, setHasInternetAccess] = useState<boolean>(true);
./providers/Swipeable.tsx:  }, []);
./providers/Swipeable.tsx:  }, [handleSetOpen]);
```

## Non-Memoized Functions in Props

Checking for inline function definitions in JSX (should use useCallback):

The following components may be using inline functions (should use useCallback):

```
./components/AppleStyleSwipeableRow/AppleStyleSwipeableRowView.tsx:          onPress={() => pressHandler(text)}
./components/AppleStyleSwipeableRow/AppleStyleSwipeableRowView.tsx:        onSwipeableOpenStartDrag={di =>
./components/CustomSelect/CustomSelectView.web.tsx:      onChange={value => onChangeSelect(value as IOptionSelect)}
./components/FilterContent/components/MultiSelect/MultiSelectContainer.tsx:          onPress={() => handleUnSelect(item.id)}
./components/FilterContent/components/MultiSelect/MultiSelectContainer.tsx:        <Pressable key={item?.id} onPress={() => handleSelect(item)}>
./components/HeaderChat/HeaderChatContainer.tsx:              onPress={() => handlePressQuestion(question)}
./components/HeaderPopover/HeaderPopoverView.tsx:              onPress={() =>
./components/HeaderPopover/HeaderPopoverView.tsx:          onPress={() =>
./components/InfoPlayer/InfoPlayerView.tsx:    onLongPress={() => {
./components/InfoPlayer/InfoPlayerView.tsx:    onPress={() => {
./components/PlayerDetail/components/PopoverMenu/PopoverMenuView.tsx:                onPress={() => {
./components/PlayerDetail/components/RightColumn/RightColumnView.tsx:                onPress={() => handleSelectRecommendationsCategory(item.type)}
./components/SearchResultsItem/SearchResultsItemView.tsx:        onStartShouldSetResponder={() => false}
./components/SelectionSortPopover/SelectionSortPopoverView.tsx:              onPress={() => onPressPopoverItem?.(menu)}
./components/SelectionSortPopover/SelectionSortPopoverView.tsx:              onPress={() => onPressSortOrder?.(OrderByDirection.Asc)}
./components/SelectionSortPopover/SelectionSortPopoverView.tsx:              onPress={() => onPressSortOrder?.(OrderByDirection.Desc)}
./components/WatchlistAddRemoveButton/WatchlistAddRemoveButtonView.tsx:          onPress={() => onChange([watchlist.id])}
./components/WatchlistAddRemoveButton/WatchlistAddRemoveButtonView.tsx:    onPress={() => onChange(isPlayerSelected ? [watchlist.id] : [])}
./components/ui/bottomsheet/index.tsx:      onPress={(e) => {
./components/ui/bottomsheet/index.tsx:      onPress={(e) => {
./components/ui/grid/index.tsx:          onLayout={(event: any) => {
./features/auth/screens/ConfirmCode/ConfirmCodeView.tsx:                onChangeText={text => {
./features/auth/screens/SignIn/SignInView.tsx:                onChangeText={(value: string) => {
./features/compare-players/components/ListPlayerCompare/ListPlayerCompareContainer.tsx:        onPress={() => onSelectComparePlayer(item)}
./features/compare-players/components/ListPlayerCompare/ListPlayerCompareView.tsx:    onEndReached={() => onLoadMore?.(keyList)}
./features/notes/components/NotesList/NotesListView.native.tsx:    SectionSeparatorComponent={() => <Box className="h-2" />}
./features/notes/components/NotesList/NotesListView.web.tsx:    SectionSeparatorComponent={() => <Box className="h-2" />}
./features/recommendations/components/RecommendationsCategorySelection/RecommendationsCategorySelectionView.tsx:        onPress={() => handleSelectRecommendationsCategory(item.type)}
./features/reports/screens/Matches/MatchesContainer.tsx:        onSelect={() => handleSelectMatch(item.matchId)}
./features/shadow-team/components/DraggableList/DraggableListContainer.tsx:                    onPress={() => onDeletePlayer(item.shadowPlayerId)}
./features/shadow-team/components/DraggableList/DraggableListContainer.tsx:            <Pressable onPress={() => onPressPlayer?.(item.playerId)}>
./features/shadow-team/components/ItemPlayer/ItemPlayerView.tsx:  <Pressable onPress={() => onChangeSelect?.(player, isSelected)}>
./features/shadow-team/components/MorePlayerItem/MorePlayerItemView.tsx:          onPress={() => onDeletePlayer(player.shadowPlayerId)}
./features/shadow-team/components/MorePlayerItem/MorePlayerItemView.tsx:  <Pressable onPress={() => onPressPlayer?.(player.playerId)}>
./features/shadow-team/components/PlayerItem/PlayerItemView.tsx:            onPress={() => onSelect(menuPosition.value)}
./features/shadow-team/components/PlayerItem/PlayerItemView.tsx:      onClick={() => onSelectPlayer?.(player)}
./features/shadow-team/components/SelectPlayerItem/SelectPlayerItemView.tsx:  <Pressable onPress={() => onChangeSelect?.(player, isSelected)}>
./features/shadow-team/components/ShadowTeamItem/ShadowTeamItemView.tsx:          onPress={() => editShowTeamVar(shadowTeam)}
./features/shadow-team/components/ShadowTeamItem/ShadowTeamItemView.tsx:        onPress={() => onDelete(shadowTeam.id)}
./features/shadow-team/components/ShadowTeamItem/ShadowTeamItemView.tsx:  <Pressable onPress={() => onSelectShadowTeam?.(shadowTeam)}>
./providers/AlertProvider.tsx:                onPress={() => {
./providers/AlertProvider.tsx:                onPress={() => {
```

## Files Exceeding Line Limit

Checking for files exceeding the 200-line limit:

The following files exceed the 200-line limit:

```
./generated/graphql.ts: 7544 lines
./config/constants.ts: 2431 lines
./components/ui/icon/index.tsx: 1645 lines
./components/ui/icon/index.web.tsx: 1642 lines
./components/ui/gluestack-ui-provider/config.ts: 631 lines
./components/ui/actionsheet/index.tsx: 625 lines
./components/ui/select/select-actionsheet.tsx: 598 lines
./components/ui/form-control/index.tsx: 535 lines
./components/ui/button/index.tsx: 487 lines
./features/shadow-team/components/SoccerField/useAction.ts: 439 lines
./components/PlayerDetail/components/Chat/ChatContainer.tsx: 412 lines
./components/ui/accordion/index.tsx: 398 lines
./components/ui/popover/index.tsx: 353 lines
./components/ui/select/index.tsx: 331 lines
./components/ui/grid/index.tsx: 330 lines
./components/ui/alert/index.tsx: 315 lines
./components/ui/bottomsheet/index.tsx: 313 lines
./components/ui/radio/index.tsx: 312 lines
./components/ui/checkbox/index.tsx: 310 lines
./components/HeaderPopover/HeaderPopoverView.tsx: 303 lines
./components/ui/alert-dialog/index.tsx: 295 lines
./components/ui/input/index.tsx: 293 lines
./components/ui/fab/index.tsx: 290 lines
./components/ui/slider/index.tsx: 284 lines
./components/ui/modal/index.tsx: 279 lines
./components/ui/badge/index.tsx: 276 lines
./components/PlayerItem/PlayerItemContainer.tsx: 275 lines
./providers/ApolloClient.tsx: 271 lines
./components/PlayerDetail/components/ShareActionItem/ShareActionItemContainer.tsx: 256 lines
./features/invitations/components/ReceivedInvitationItem/ReceivedInvitationItemContainer.tsx: 254 lines
./components/FilterContent/useFilterValues.ts: 245 lines
./features/auth/components/CountryCodes/CountryCodesView.tsx: 241 lines
./features/auth/screens/ConfirmCode/ConfirmCodeContainer.tsx: 234 lines
./components/SearchResultsItem/SearchResultsItemContainer.tsx: 233 lines
./components/AppleStyleSwipeableRow/AppleStyleSwipeableRowView.tsx: 227 lines
./utils/getPlayerCompositeMetrics.ts: 226 lines
./components/ui/toast/index.tsx: 225 lines
./features/shadow-team/components/SoccerField/SoccerFieldContainer.tsx: 222 lines
./utils/getPlayerInformations.ts: 221 lines
./components/ui/heading/index.tsx: 219 lines
./features/shadow-team/components/ModalPlayer/ModalPlayerContainer.tsx: 215 lines
./features/invitations/components/OrganizationForm/OrganizationFormView.tsx: 215 lines
./features/similar-players/screens/Main/MainContainer.tsx: 214 lines
./features/invitations/components/OrganizationForm/OrganizationFormContainer.tsx: 214 lines
./components/FilterContent/useMultiSlider.ts: 214 lines
./components/ui/menu/index.tsx: 211 lines
./features/auth/screens/Register/RegisterView.tsx: 203 lines
./components/ui/heading/index.web.tsx: 203 lines
./components/PlayerDetail/components/CenterColumn/CenterColumnView.tsx: 203 lines
./components/ui/table/index.tsx: 201 lines
```

## Missing useCallback on Handler Functions

Checking for handler functions without useCallback:

The following handler functions should use useCallback:

```
./components/PlayerDetail/components/Chat/ChatContainer.tsx:    const handleMessage = (data: any) => {
./components/PlayerDetail/components/LeftColumn/LeftColumnContainer.tsx:  const handleDebounceSearch = useDebouncedCallback(setSearchValue, 300);
./components/elements/CustomPrompt/CustomPromptContainer.tsx:    const handlePrompt = (
./features/auth/screens/Register/RegisterContainer.tsx:  const handleDebounceSubmit = useDebouncedCallback(doSubmit, 200);
./features/auth/screens/SignIn/SignInContainer.tsx:  const handleDebounceSubmit = useDebouncedCallback(doSubmit, 200);
./features/player-search/screens/Main/MainContainer.tsx:  const handleDebounceSearch = useDebouncedCallback(setSearchValue, 300);
./features/roster-management/screens/Leagues/LeaguesContainer.tsx:  const handleSearchDebounce = useDebouncedCallback(handleSearch, 300);
./features/roster-management/screens/Teams/TeamsContainer.tsx:  const handleSearchDebounce = useDebouncedCallback(handleSearch, 300);
./features/shadow-team/components/ModalPlayer/ModalPlayerContainer.tsx:  const handleDebounceSearch = useDebouncedCallback(setSearchText, 300);
./features/shadow-team/components/ModalSelectPlayer/ModalSelectPlayerContainer.tsx:  const handleDebounceSearch = useDebouncedCallback(setSearchText, 300);
./features/shadow-team/components/SoccerField/SoccerFieldContainer.tsx:  const handleOpenModal = useDebouncedCallback((position: number) => {
```

## Incorrect className Usage

Checking for files using className prop outside of UI directories:

Found 148 files using className outside of UI directories (should use Tailwind instead):

```
./components/HeaderPopover/HeaderPopoverView.tsx: 29 className occurrences
./components/PlayerDetail/components/PopoverMenu/PopoverMenuView.tsx: 25 className occurrences
./features/similar-players/components/Header/HeaderView.tsx: 19 className occurrences
./features/invitations/screens/CreateInvitation/CreateInvitationView.tsx: 18 className occurrences
./components/elements/Skeleton/components/SkeletonPlayerDetail/SkeletonPlayerDetailView.tsx: 18 className occurrences
./components/PlayerDetail/components/HeaderPlayer/HeaderPlayerView.tsx: 18 className occurrences
./features/invitations/components/OrganizationForm/OrganizationFormView.tsx: 17 className occurrences
./components/SelectionSortPopover/SelectionSortPopoverView.tsx: 17 className occurrences
./components/PlayerDetail/components/CenterColumn/CenterColumnView.tsx: 16 className occurrences
./features/shadow-team/components/ModalSelectPlayer/ModalSelectPlayerView.tsx: 15 className occurrences
./features/player-filter/screens/Main/MainView.tsx: 15 className occurrences
./components/FilterContent/FilterView.tsx: 15 className occurrences
./components/elements/Skeleton/components/SkeletonComparePlayer/SkeletonComparePlayerView.tsx: 14 className occurrences
./components/Searchbar/SearchbarView.tsx: 14 className occurrences
./components/AddToWatchlistActionsheet/AddToWatchlistActionsheetView.tsx: 13 className occurrences
./features/shadow-team/components/LeftShadowTeam/LeftShadowTeamView.tsx: 12 className occurrences
./features/compare-players/screens/Main/MainView.tsx: 12 className occurrences
./components/elements/CustomPrompt/CustomPromptView.tsx: 12 className occurrences
./features/shadow-team/components/ModalPlayer/ModalPlayerView.tsx: 11 className occurrences
./components/PlayerDetail/components/ManageActionSheet/ManageActionSheetView.tsx: 11 className occurrences
./components/FilterContent/components/MultiSelect/MultiSelectView.tsx: 11 className occurrences
./features/reports/components/ReportItem/ReportItemView.tsx: 10 className occurrences
./features/recommendations/components/InfoRecommendation/InfoRecommendationView.tsx: 10 className occurrences
./features/auth/components/Screen/ScreenView.tsx: 10 className occurrences
./features/auth/components/CountryCodes/CountryCodesView.tsx: 10 className occurrences
./components/PlayerDetail/components/WatchlistItem/WatchlistItemView.tsx: 10 className occurrences
./features/shadow-team/components/RightShadowTeam/RightShadowTeamView.tsx: 9 className occurrences
./features/shadow-team/components/CreateShadowTeamForm/CreateShadowTeamFormView.tsx: 9 className occurrences
./features/compare-players/components/ChartComparison/ChartComparisonView.tsx: 9 className occurrences
./features/auth/screens/ConfirmCode/ConfirmCodeView.tsx: 9 className occurrences
./components/elements/CustomHeader/CustomHeaderView.tsx: 9 className occurrences
./components/PlayerDetail/components/RightColumn/RightColumnView.tsx: 9 className occurrences
./components/PlayerDetail/components/CategoryMetricChart/CategoryMetricChartView.tsx: 9 className occurrences
./features/auth/screens/SignIn/SignInView.tsx: 8 className occurrences
./components/SearchResultsItem/SearchResultsItemView.tsx: 8 className occurrences
./components/PlayerDetail/components/Chat/ChatView.tsx: 8 className occurrences
./features/similar-players/components/FilterContent/FilterContentView.tsx: 7 className occurrences
./features/shadow-team/components/SoccerPlayers/SoccerPlayersView.tsx: 7 className occurrences
./features/shadow-team/components/ModalMorePlayer/ModalMorePlayerView.tsx: 7 className occurrences
./features/shadow-team/components/DraggableList/DraggableListContainer.tsx: 7 className occurrences
./features/roster-management/components/Header/HeaderView.tsx: 7 className occurrences
./features/notes/components/NotesList/NotesListContainer.web.tsx: 7 className occurrences
./features/notes/components/NotesList/NotesListContainer.native.tsx: 7 className occurrences
./features/notes/components/NotesActionsheet/NotesActionsheetView.tsx: 7 className occurrences
./features/auth/screens/Register/RegisterView.tsx: 7 className occurrences
./components/elements/Skeleton/components/SkeletonManage/SkeletonManageView.tsx: 7 className occurrences
./components/FilterContent/components/MultiSelect/MultiSelectContainer.tsx: 7 className occurrences
./features/shadow-team/components/ShadowTeamItem/ShadowTeamItemView.tsx: 6 className occurrences
./features/shadow-team/components/PlayerItem/PlayerItemView.tsx: 6 className occurrences
./features/shadow-team/components/MorePlayerItem/MorePlayerItemView.tsx: 6 className occurrences
./features/recommendations/components/RecommendationsBottomSheet/RecommendationsBottomSheetView.tsx: 6 className occurrences
./features/invitations/components/UserItem/UserItemItemView.tsx: 6 className occurrences
./features/invitations/components/ReceivedInvitationItem/ReceivedInvitationItemView.tsx: 6 className occurrences
./features/invitations/components/InvitationItem/InvitationItemView.tsx: 6 className occurrences
./features/compare-players/components/DropDownPlayer/DropDownPlayerView.tsx: 6 className occurrences
./components/PlayerDetail/components/ShareActionItem/ShareActionItemView.web.tsx: 6 className occurrences
./components/PlayerDetail/components/Share/ShareView.tsx: 6 className occurrences
./components/PlayerDetail/components/Header/HeaderView.tsx: 6 className occurrences
./features/shadow-team/components/SelectPlayerItem/SelectPlayerItemView.tsx: 5 className occurrences
./features/shadow-team/components/ItemPlayer/ItemPlayerView.tsx: 5 className occurrences
./features/compare-players/components/ListPlayerCompare/ListPlayerCompareContainer.tsx: 5 className occurrences
./features/auth/components/Header/HeaderView.tsx: 5 className occurrences
./components/elements/Skeleton/components/SkeletonPlayer/SkeletonPlayerView.tsx: 5 className occurrences
./components/InfoPlayer/InfoPlayerView.tsx: 5 className occurrences
./components/FilterContent/components/Slider/SliderView.tsx: 5 className occurrences
./components/CustomSelect/CustomSelectView.native.tsx: 5 className occurrences
./providers/NetworkStatus.tsx: 4 className occurrences
./features/similar-players/screens/Main/MainView.native.tsx: 4 className occurrences
./features/notes/components/NotesList/NotesListView.web.tsx: 4 className occurrences
./features/notes/components/NotesList/NotesListView.native.tsx: 4 className occurrences
./features/notes/components/NotesItem/NotesItemView.web.tsx: 4 className occurrences
./features/invitations/components/OrganizationItem/OrganizationItemView.tsx: 4 className occurrences
./components/elements/Skeleton/components/SkeletonWatchlist/SkeletonWatchlistView.tsx: 4 className occurrences
./components/elements/Skeleton/components/SkeletonNote/SkeletonNoteView.tsx: 4 className occurrences
./components/elements/Skeleton/components/SkeletonMetricChart/SkeletonMetricChartView.tsx: 4 className occurrences
./components/PlayerDetail/components/ShareActionItem/ShareActionItemView.native.tsx: 4 className occurrences
./components/HeaderChat/HeaderChatContainer.tsx: 4 className occurrences
./features/similar-players/components/ListEmpty/ListEmptyView.tsx: 3 className occurrences
./features/shadow-team/components/LeftShadowTeam/LeftShadowTeamContainer.tsx: 3 className occurrences
./features/roster-management/screens/Teams/TeamsView.tsx: 3 className occurrences
./features/roster-management/screens/Leagues/LeaguesView.tsx: 3 className occurrences
./features/roster-management/components/TeamItem/TeamItemView.tsx: 3 className occurrences
./features/roster-management/components/ListEmpty/ListEmptyView.tsx: 3 className occurrences
./features/roster-management/components/LeagueItem/LeagueItemView.tsx: 3 className occurrences
./features/reports/components/MatchItem/MatchItemView.tsx: 3 className occurrences
./features/reports/components/ListEmpty/ListEmptyView.tsx: 3 className occurrences
./features/recommendations/components/RecommendationsCategorySelection/RecommendationsCategorySelectionView.tsx: 3 className occurrences
./features/notes/components/ButtonSubmit/ButtonSubmitView.tsx: 3 className occurrences
./features/invitations/components/ListEmpty/ListEmptyView.tsx: 3 className occurrences
./features/compare-players/components/MetricsGrid/MetricsGridView.tsx: 3 className occurrences
./components/elements/Skeleton/components/SkeletonShadowTeam/SkeletonShadowTeamView.tsx: 3 className occurrences
./components/elements/Skeleton/components/SkeletonRoster/SkeletonRostersView.tsx: 3 className occurrences
./components/elements/Skeleton/components/SkeletonModalPlayer/SkeletonModalPlayerView.tsx: 3 className occurrences
./components/elements/Skeleton/components/SkeletonMember/SkeletonMemberView.tsx: 3 className occurrences
./components/elements/Skeleton/components/SkeletonFilterRole/SkeletonFilterRoleView.tsx: 3 className occurrences
./components/PlayerDetail/components/ListEmpty/ListEmptyView.tsx: 3 className occurrences
./components/PlayerDetail/components/LeftColumn/LeftColumnView.tsx: 3 className occurrences
./components/PlayerDetail/components/CenterColumn/CenterColumnContainer.tsx: 3 className occurrences
./components/ModalFilter/ModalFilterView.tsx: 3 className occurrences
./components/FilterResults/FilterResultsContainer.tsx: 3 className occurrences
./components/FilterContent/components/SliderCustomLabel/SliderCustomLabel.tsx: 3 className occurrences
./components/FilterContent/components/Option/OptionView.tsx: 3 className occurrences
./providers/AlertProvider.tsx: 2 className occurrences
./features/similar-players/screens/Main/MainView.web.tsx: 2 className occurrences
./features/shadow-team/components/RightShadowTeam/RightShadowTeamContainer.tsx: 2 className occurrences
./features/shadow-team/components/ModalSelectPlayer/ModalSelectPlayerContainer.tsx: 2 className occurrences
./features/shadow-team/components/ModalPlayer/ModalPlayerContainer.tsx: 2 className occurrences
./features/recommendations/components/RecommendationList/RecommendationListContainer.tsx: 2 className occurrences
./features/notes/components/TextInputField/TextInputFieldView.tsx: 2 className occurrences
./features/notes/components/NotesForm/NotesFormView.tsx: 2 className occurrences
./features/compare-players/components/ListPlayerCompare/ListPlayerCompareView.tsx: 2 className occurrences
./features/auth/screens/ConfirmCode/ConfirmCodeContainer.tsx: 2 className occurrences
./components/elements/StandardHeaderBackButton.tsx: 2 className occurrences
./components/elements/Skeleton/SkeletonPlaceholder/SkeletonPlaceholderView.tsx: 2 className occurrences
./components/WatchlistAddRemoveButton/WatchlistAddRemoveButtonView.tsx: 2 className occurrences
./components/ResetButton/ResetButtonView.tsx: 2 className occurrences
./components/PlayerItem/PlayerItemView.tsx: 2 className occurrences
./components/PlayerDetail/components/RightColumn/RightColumnContainer.tsx: 2 className occurrences
./components/PlayerDetail/PlayerDetailView.tsx: 2 className occurrences
./components/CompositeMetric/CompositeMetricView.tsx: 2 className occurrences
./features/watchlist/components/Watchlist/WatchlistView.web.tsx: 1 className occurrences
./features/watchlist/components/Watchlist/WatchlistView.native.tsx: 1 className occurrences
./features/shadow-team/components/SoccerField/SoccerFieldContainer.tsx: 1 className occurrences
./features/shadow-team/components/CenterShadowTeam/CenterShadowTeamView.tsx: 1 className occurrences
./features/roster-management/screens/Main/MainView.web.tsx: 1 className occurrences
./features/reports/screens/Matches/MatchesView.tsx: 1 className occurrences
./features/reports/screens/Main/MainView.tsx: 1 className occurrences
./features/reports/screens/Main/MainContainer.tsx: 1 className occurrences
./features/recommendations/components/RecommendationPlayer/RecommendationPlayerContainer.tsx: 1 className occurrences
./features/recommendations/components/RecommendationList/RecommendationListView.tsx: 1 className occurrences
./features/notes/components/NotesItem/NotesItemView.native.tsx: 1 className occurrences
./features/invitations/screens/Users/UsersView.tsx: 1 className occurrences
./features/invitations/screens/Organizations/OrganizationsView.tsx: 1 className occurrences
./features/invitations/screens/Main/MainView.tsx: 1 className occurrences
./features/invitations/components/CreateOrganizationButton/CreateOrganizationButtonView.tsx: 1 className occurrences
./features/invitations/components/CreateButton/CreateButtonView.tsx: 1 className occurrences
./components/elements/Skeleton/SkeletonList/SkeletonListContainer.tsx: 1 className occurrences
./components/elements/LoadingPage/LoadingPageView.tsx: 1 className occurrences
./components/elements/ItemSeperatorComponent.tsx: 1 className occurrences
./components/WatchlistSelectButton/WatchlistSelectButtonView.tsx: 1 className occurrences
./components/PlayerList/PlayerListView.tsx: 1 className occurrences
./components/PlayerDetail/components/ShareActionItem/ShareActionItemContainer.tsx: 1 className occurrences
./components/PlayerDetail/components/Chat/ChatContainer.tsx: 1 className occurrences
./components/PlayerDetail/components/CategoryMetrics/CategoryMetricsContainer.tsx: 1 className occurrences
./components/FilterResults/FilterResultsView.tsx: 1 className occurrences
./components/FilterContent/components/MultiSlider/MultiSliderContainer.tsx: 1 className occurrences
./components/Badge/BadgeView.tsx: 1 className occurrences
./app/_layout.tsx: 1 className occurrences
```

## Summary

This audit was generated automatically and may include false positives.
Manual review is recommended for each identified issue.
