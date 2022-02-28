import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux';
import { getPlaces } from '../../redux/Places/ActionCreators';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import pluralize from 'pluralize';
import formatDate from '../../utils/formatDate';
import DateFormat from '../../constants/Dateformat';
import { PlaceType } from '../../api/Places';
import { Cabin, DirectionsTransit, Security } from '@mui/icons-material';
import { Tooltip } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home: FC = () => {
  const dispatch = useDispatch();
  const  { items } = useSelector((state: RootState) => state.places);
  const navigate = useNavigate();

  const mapType = (type: PlaceType) => {
     return (
      <Tooltip title={type}>
        <>
          {type === PlaceType.Basement && <Cabin />}
          {type === PlaceType.Bunker && <Security />}
          {type === PlaceType.Metro && <DirectionsTransit />}
        </>
      </Tooltip>
    )
  }
  const COLUMNS: GridColDef[] = [
    {field: 'type', headerName: 'Type', flex: 0.05, renderCell: (params) => mapType(params.value)},
    {field: 'address', headerName: 'Address', flex: 0.40},
    {field: 'capacity', headerName: 'Capacity', flex: 0.15},
    {field: 'createdAt', headerName: 'Created At', flex: 0.20},
  ];

  const rows = items?.map((place) => {
    return {
      id: place.id,
      address: place.address,
      type: place.type,
      capacity: `${place.capacity} ${pluralize('person', place.capacity)}`,
      createdAt: formatDate(place.createdAt, DateFormat.ShortDate)
    }
  })

  const openDetails = (id: string) => {
    navigate(`/places/${id}`)
  }
  useEffect(() => {
    dispatch(getPlaces());
  }, [])
  return (
    <div style={{height: '94vh', width: '100%'}}>
      <DataGrid
        rows={rows || []}
        columns={COLUMNS}
        loading={!rows}
        pageSize={15}
        isRowSelectable={() => false}
        onRowClick={(params) => openDetails(params.id.toString())}
      />
    </div>
  )
};

export default Home;
