import Styles from './App.less';
import { NodeObjectTmpl } from './map';
export default class App extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className={Styles.container}>
        <div className={Styles.hello} />
      </div>
    );
  }
}
