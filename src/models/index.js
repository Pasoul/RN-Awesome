import {create} from 'dva-core';
import CountModel from './CountModel';

const app = create();
app.model(CountModel);
// app.model(OtherModel);
app.start();

export default app._store;
