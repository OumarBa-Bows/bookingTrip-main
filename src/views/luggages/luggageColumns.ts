import { Column } from "@/models/columnsModels";

export const luggageColumns: Column[] = [
  {
    header: "Date",
    accessor: "createdAt", // Key to access the value in data
    isHidden: false,
  },
  {
    header: "Beneficiaire",
    accessor: "receveurNumber", // Key to access the value in data
    isHidden: false,
  },
  {
    header: "Expediteur",
    accessor: "senderNumber", // Key to access the value in data
    isHidden: false,
  },
  {
    header: "Destination",
    accessor: "destination", // Key to access the value in data
    isHidden: false,
  },
  {
    header: "Prix",
    accessor: "Price", // Key to access the value in data
    isHidden: false,
  },
  {
    header: "Payment",
    accessor: "payment", // Key to access the value in data
    isHidden: false,
  },
  {
    header :"Delivre" ,
        accessor: "delivre", // Key to access the value in data
          isHidden:false
}
];
