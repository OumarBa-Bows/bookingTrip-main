import { Button } from "@/components/ui/button";
import RenderTable from "@/helpers/table";

import { bookingColumns } from "./bookingsColumn";
import { data } from "@/_mock/mockData";
import AppCard from "@/helpers/card";
import SearchComponent from "@/components/shared-components/searchComponent";
import AppSelect from "@/helpers/select";

const BookingsHomePage = () => {
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
        childrenContent={
          <RenderTable
            dataTable={data}
            columnTable={bookingColumns}
            actions={<Button>Edit</Button>}
          />
        }
      />
    </>
  );
};

export default BookingsHomePage;
