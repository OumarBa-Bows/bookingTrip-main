import { data } from '@/_mock/mockData'
import { Button } from '@/components/ui/button'
 
import RenderTable from '@/helpers/table'
 
 
import { bookingColumns } from '../bookings/bookingsColumn'
import { useNavigate } from 'react-router-dom'
import AppCard from '@/helpers/card'
import SearchComponent from '@/components/shared-components/searchComponent'
import AppSelect from '@/helpers/select'
import AppModal from '@/helpers/modal'
import AddCar from './addCar'

export default function CarManagement() {
  
  return (
    <>
    <AppCard
        title={"Liste des reservation"}
        childrenTitleContent={
          <> 
          <SearchComponent layout='content'/>
          <AppSelect dataList={undefined} placeHolder={"Payment"} textLabel={""} defaultValue={""} />
          <AppSelect dataList={undefined} placeHolder={"Status"} textLabel={""} defaultValue={""} />
          <AppSelect dataList={undefined} placeHolder={"Date"} textLabel={""} defaultValue={""} />
       </>
        }
        ChildrenExtraContent={
          <AppModal textButton={'Ajoute un vehicule'} title={'Ajouter vehicule'} description={''} childrenContent={<AddCar />}   />
        }
        childrenContent={
          <RenderTable
            dataTable={data}
            columnTable={bookingColumns}
            actions={<Button>Edit</Button>}
          />
        }
      />
    </>
    
  )
}
