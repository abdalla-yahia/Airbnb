export interface AddGuestFormProps {
    Adults: number;
    setAdults: React.Dispatch<React.SetStateAction<number>>;
    Children: number;
    setChildren: React.Dispatch<React.SetStateAction<number>>;
    Infants: number;
    setInfants: React.Dispatch<React.SetStateAction<number>>;
    Pets: number;
    setPets: React.Dispatch<React.SetStateAction<number>>;
    Stay_Experience:boolean
  }

export interface PageDatesProps {
  setStartCheckin: (value: boolean) => void;
  DateCheckin: string;
  setDateCheckin: (value: string) => void;
  DateCheckOut:string,
   setDateCheckOut: (value: string) => void
}