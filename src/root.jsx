import quip from 'quip';
import App from './App.jsx';



class RootRecord extends quip.apps.RootRecord {
  static getProperties = () => ({
    maps: 'array',
  });

  static getDefaultProperties = () => ({
    maps: [],
  });
}

quip.apps.registerClass(RootRecord, 'root-record');

quip.apps.initialize({
  initializationCallback: function(rootNode, params) {
    let rootRecord = quip.apps.getRootRecord();
    if (params.isCreation) {
      rootRecord.set('maps', [
        {
          text: 'first node',
          left: 250,
          top: 250,
          children: [],
        },
      ]);
    }
    ReactDOM.render(<App record={rootRecord} />, rootNode);
  },
});
