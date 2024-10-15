import AppCard from "@/helpers/card";
import AppModal from "@/helpers/modal";
import RenderTable from "@/helpers/table";
import AddLuggage from "./addLuggage";
import { luggageColumns } from "./luggageColumns";
import AppSelect from "@/helpers/select";
import SearchComponent from "@/components/shared-components/searchComponent";

export default function Luggage() {
  return (
    <AppCard
      title={"Gestion des colis"}
      childrenTitleContent={
        <> 
           <SearchComponent layout='content'/>
           <AppSelect dataList={undefined} placeHolder={"Payment"} textLabel={""} defaultValue={""} />
           <AppSelect dataList={undefined} placeHolder={"Status"} textLabel={""} defaultValue={""} />
           <AppSelect dataList={undefined} placeHolder={"Date"} textLabel={""} defaultValue={""} />
        </>
      }
      childrenContent={<RenderTable dataTable={[]} columnTable={luggageColumns} />}
      ChildrenExtraContent ={
        <AppModal textButton={"Ajouter un colis"} title={"Ajouter colis"} description={""} childrenContent={<AddLuggage />} />
      }
    />
  );
}
