import { createBrowserHistory } from 'history';
import { RouteChildrenProps } from 'react-router';

declare let window: any;

export const history = createBrowserHistory();

export const checkActivePath = (match: RouteChildrenProps<any, any>['match']): boolean => {
  const currentLocation = window.location.toString();
  const result =
    match && match.isExact && match.path !== '/'
      ? currentLocation.includes(match.path)
      : match && match.path === '/'
      ? currentLocation.lastIndexOf('/') === currentLocation.length - 1
      : false;

  return result;
};

export default { checkActivePath, history };
