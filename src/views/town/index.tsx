import { data } from "@/_mock/mockData";
import SearchComponent from "@/components/shared-components/searchComponent";
import AppCard from "@/helpers/card";
import AppModal from "@/helpers/modal";
import AppSelect from "@/helpers/select";
import RenderTable from "@/helpers/table";
import { Button } from "react-day-picker";
import { bookingColumns } from "../bookings/bookingsColumn";
import AddTown from "./addTown";

export default function Town() {
  return (
    <>
      <AppCard
        title={"Liste des reservation"}
        childrenTitleContent={
          <>
            <SearchComponent layout="content" />
            <AppSelect
              dataList={undefined}
              placeHolder={"Payment"}
              textLabel={""}
              defaultValue={""}
            />
            <AppSelect
              dataList={undefined}
              placeHolder={"Status"}
              textLabel={""}
              defaultValue={""}
            />
            <AppSelect
              dataList={undefined}
              placeHolder={"Date"}
              textLabel={""}
              defaultValue={""}
            />
          </>
        }
        ChildrenExtraContent={
          <AppModal
            textButton={"Ajoute une ville"}
            title={"Ajouter ville"}
            description={""}
            childrenContent={<AddTown />}
          />
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
}
