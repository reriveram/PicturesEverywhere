import {LocationType} from '../components/Location/type';

export function getLocationText(location: LocationType) {
  return `${location.latitude.toFixed(4)}, ${location.longitude.toFixed(4)}`;
}
