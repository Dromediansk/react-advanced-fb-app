import Reactotron from "reactotron-react-js";
import { reactotronRedux } from "reactotron-redux";

const reactotron = Reactotron.configure({ name: process.env.REACT_APP_CITY })
    .use(reactotronRedux())
    .connect();

export default reactotron;