import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from '../../redux';
import { getPlacesDetails } from '../../redux/PlacesDetails/ActionCreators';

const PlaceDetails: FC = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const placeDetails = useSelector((state: RootState) => state.placesDetails);

  useEffect(() => {
    dispatch(getPlacesDetails(id!))
  }, [])
  return (
    <div>
      {placeDetails[id!] && placeDetails[id!]?.description}
    </div>
  )
}

export default PlaceDetails;
