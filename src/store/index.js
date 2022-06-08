import { legacy_createStore as createStore} from 'redux';

// 自定义
import reducer from './reducer';

const store = createStore(reducer);
export default store;