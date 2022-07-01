import {Routes} from './Routes';
import {NavigationContainerRef} from '@react-navigation/native';

export type RootStackParamList = {
  [Routes.Home]: undefined;
  [Routes.LogIn]: undefined;
};

export type NavigationRefType = NavigationContainerRef<RootStackParamList>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
