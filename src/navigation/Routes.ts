export enum Routes {
  Home = 'Home',
  LogIn = 'LogIn',
}

export type RootStackParamList = {
  [Routes.Home]: undefined;
  [Routes.LogIn]: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
