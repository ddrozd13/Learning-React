import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux';
import { getPlaces } from '../../redux/Places/ActionCreators';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const Home: FC = () => {
  const dispatch = useDispatch();
  const  { items } = useSelector((state: RootState) => state.places)
  const COLUMNS: GridColDef[] = [
    {field: 'address', headerName: 'Address', width: 200},
    {field: 'type', headerName: 'Type', width: 200},
    {field: 'capacity', headerName: 'Capacity'},
    {field: 'createdAt', headerName: 'Created At'},
  ];
  const rows = items?.map((place) => {
    return {
      id: place.id,
      address: place.address,
      type: place.type,
      capacity: place.capacity,
      createdAt: place.createdAt
    }
  })
  useEffect(() => {
    dispatch(getPlaces());
  }, [])
  return (
    <div style={{height: 500, width: '100%'}}>
      <DataGrid rows={rows || []} columns={COLUMNS}/>
    </div>
  )
};

export default Home;
