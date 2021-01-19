'use strict';

export function Main(props) {
  return (
    <div>
      <p>min temp: {props.min}</p>
      <p>max temp: {props.max}</p>
      <p>location: {props.location}</p>
    </div>
  );
}
