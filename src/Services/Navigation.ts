import history from './BrowserHistory';

const CentralNavigationService = {
  navigate: async (routeName: string) => {
    history.push(routeName);
  }
};

export default CentralNavigationService;
