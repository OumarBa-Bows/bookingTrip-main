import React from 'react';
 // Import the Icon type

interface IconDataComponentProps {
  icon: any; 
  height?:number,
  width?:number// Use the correct type for the icon
}

const IconDataComponent: React.FC<IconDataComponentProps> = ({ icon :  IconComponent , height=4 , width=4 }) => {
  return (
    <div>
      <IconComponent className={`h-${height} w-${width}`} />
    </div>
  );
};

export default IconDataComponent;
