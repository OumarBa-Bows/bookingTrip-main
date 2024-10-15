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


export const tripForm  = [
  {
    name:'departure',
    label:'Ville de depart',
    type:'select',
    options : [{value : 1 , label : 'Nouakchott'} , {value : 2 , label : 'chott'},{value : 3 , label : 'Nott'}]
  },
  {
    name:'arrival',
    label:'Ville de destination',
    type:'select',
    options : [{value : 1 , label : 'Nouakchott'} , {value : 2 , label : 'chott'},{value : 3 , label : 'Nott'}]
  },
  {
    name: 'price',
    label: 'Prix',
    type: 'number'
     
  },
  {
    name: 'seats',
    label: 'Place disponible',
    type: 'number'
     
  },
  {
    name: 'vehicleType',
    label: 'Type de vehicle',
     
  },
  {
    name: 'approvalType',
    label: 'Type de validation',
    
     
  },
  {
    name: 'driver',
    label: 'Chauffeur',
    
     
  }, {
    name: 'departureDate',
    label: 'Date de depart',
    type: 'date'
     
  },{
    name: 'departureTime',
    label: 'Heure de depart',
    type: 'date'
     
  },
  
  
];