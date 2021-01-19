'use strict';

import { weatherInstance } from './CityCardInstance';

export function CityCard() {
  return <div>{weatherInstance}</div>;
}
