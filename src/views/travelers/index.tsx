import CustomCard from "@/helpers/card";
import RenderTable from "@/helpers/table";
import { passengersColumn } from "./passengersColumns";
import AppModal from "@/helpers/modal";
import AddPassanger from "./addPassanger";
import SearchComponent from "@/components/shared-components/searchComponent";
import AppSelect from "@/helpers/select";

export default function ListPassengers() {
  
  return (
    <CustomCard
      title="Liste des passagers"
      childrenTitleContent={
        <> <SearchComponent layout='content'/>
        <AppSelect dataList={undefined} placeHolder={"Payment"} textLabel={""} defaultValue={""} />
        <AppSelect dataList={undefined} placeHolder={"Status"} textLabel={""} defaultValue={""} />
        <AppSelect dataList={undefined} placeHolder={"Date"} textLabel={""} defaultValue={""} /></>
      }
      childrenContent={
        <RenderTable dataTable={[]} columnTable={passengersColumn} />
      }
      ChildrenExtraContent={
        <AppModal
          textButton={"Ajouter passager"}
          title={"Ajouter passager"}
          description={""}
          childrenContent={<AddPassanger />}
        />
      }
    />
  );
}
 