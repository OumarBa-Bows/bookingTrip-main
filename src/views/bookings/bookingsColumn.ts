 
import { Column } from "@/models/columnsModels";

export const bookingColumns :Column[] = [
    { header :"Date" ,
      accessor: "createdAt", // Key to access the value in data
        isHidden:false
    },
    { header :"Nom du client" ,
        accessor: "clientName", // Key to access the value in data
          isHidden:false
      },
      { header :"Numero de telephone" ,
        accessor: "clientPhone", // Key to access the value in data
          isHidden:false
      },
      { header :"Depart" ,
        accessor: "departure", // Key to access the value in data
          isHidden:false
      },
      { header :"Arrivee" ,
        accessor: "arrival", // Key to access the value in data
          isHidden:false
      },
      { header :"Prix" ,
        accessor: "price", // Key to access the value in data
          isHidden:false
      },
      { header :"Status" ,
        accessor: "status", // Key to access the value in data
          isHidden:false
      },

    ]
; 
