import { Column } from "@/models/columnsModels";

export const passengersColumn : Column[] = [ 
    { header :"Date" ,
        accessor: "createdAt", // Key to access the value in data
          isHidden:false
      },
      { header :"Nom complet" ,
        accessor: "fullName", // Key to access the value in data
          isHidden:false
      },
      { header :"Telephone" ,
        accessor: "phoneNumber", // Key to access the value in data
          isHidden:false
      },
      { header :"Payment" ,
        accessor: "paymentMethod", // Key to access the value in data
          isHidden:false
      },
      { header :"Statut" ,
        accessor: "status", // Key to access the value in data
          isHidden:false
      },
      

]