export interface UserProps {
  id: number;
  name: string;
  email: string;
  gender: string;
  status: string;
  img?: string;
  job?: string;
}

export type SingleUser = {
  id: number;
  name: string;
  last_name: string;
  e_mail: string;
  online: boolean;
  archived?: boolean; //TODO
  img?:string
};
