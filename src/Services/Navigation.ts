/* eslint-disable @typescript-eslint/ban-types */
import { history } from './BrowserHistory';

declare type ParamListBase = Record<string, object | undefined>;

declare type StackNavigationProp<ParamList extends ParamListBase> = {
  navigate<RouteName extends keyof ParamList>(
    ...args: ParamList[RouteName] extends undefined | any
      ? [RouteName] | [RouteName, ParamList[RouteName]]
      : [RouteName, ParamList[RouteName]]
  ): void;
};

const CentralNavigationService = <T extends Record<string, object | undefined>>(): StackNavigationProp<T> => {
  return {
    navigate: async (...args: any[]) => {
      const routeName = args[0];
      const params = args.length > 1 ? args[1] : {};

      history.push(`/${routeName}`, params);
    }
  };
};

export default CentralNavigationService;
