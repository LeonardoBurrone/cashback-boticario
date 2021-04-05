import { runSaga } from 'redux-saga';

export function recordSaga(saga: any, initialAction: any, initialState: any, takeType?: any, takePayload = {}) {
  return new Promise((resolve) => {
    const dispatched: any = [];
    runSaga(
      {
        dispatch: (action) => dispatched.push(action),
        effectMiddlewares: [
          (next) => (effect) => {
            if (effect.type === 'TAKE' && (!takeType || (takeType && effect.payload.pattern === takeType))) {
              Promise.resolve().then(() => {
                const takeResponse = takeType ? takeType : 'PUT_ACTION';
                next({
                  '@@redux-saga/IO': true,
                  payload: {
                    action: { type: takeResponse, payload: takePayload },
                    channel: undefined
                  },
                  type: 'PUT'
                });
              });

              return;
            }

            return next(effect);
          }
        ],
        getState: () => initialState
      },
      saga,
      initialAction
    )
      .toPromise()
      .then((res) => {
        resolve(dispatched);
      });
  });
}
