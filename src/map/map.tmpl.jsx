import React from 'react';
import { Node } from './';

//makeDraggable should be configured in the parent and pass teh whole thing in and then wouldn't need the whole this in here

function MapTmpl(props) {
  if (!props.project) return <div>Loading...</div>;
  return !props.maps ? (
    <div>
      <Node checkState={props.checkState} />
    </div>
  ) : (
    <div>
      <div>
        {props.maps.map((map, index) => {
          return (
            <Node
              clearPaste={props.clearPaste}
              key={index}
              node={map}
              checkState={props.checkState}
              count={props.count}
              currentCut={props.currentCut}
              pasteOption={props.pasteOption}
            />
          );
        })}
      </div>
    </div>
  );
}

export default MapTmpl;
