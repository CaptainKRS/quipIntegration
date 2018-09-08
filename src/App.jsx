import MapView from './map/map.jsx'
export default class App extends React.Component {
  state = {
    maps: [],
  };

  componentDidMount() {
    // this.props.record.listen(() => {
        // console.log(this.props.record.getData());
      this.setState(this.props.record.getData());
    // });
  }

  render() {
      if(!this.state.maps.length) return(<div>Loading...</div>)
    console.log("this.props on line 15", this.state)
    return (
      <MapView project={this.state} record={this.props.record} />
    );
  }
}
