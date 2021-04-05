import configureMockStore from 'redux-mock-store';
import { signUpAction } from '../Actions';

describe('Test Sign Up Actions', () => {
  const mockStore = configureMockStore();
  const store = mockStore({});

  beforeEach(() => {
    store.clearActions();
  });

  it('Check if "signUpAction" was dispatched', () => {
    store.dispatch(
      signUpAction({
        document: '11122233345',
        email: 'test@test.com',
        name: 'Test Name',
        password: '123456'
      })
    );

    const actions = store.getActions();
    expect(actions).toMatchSnapshot();
  });
});
