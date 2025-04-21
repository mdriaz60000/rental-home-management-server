


export interface TProperty {
    _id: string; 
    title: string; 
    images: string; 
    description: string; 
    Amount: number; 
    bedrooms: number; 
    category:  'rent' | 'sale'
    location: string;
    ft: number
    isDeleted: boolean

    
  }
  