export interface SignUpUser {
  firstName: string;
  lastName: string;
  email?: string;
  username: string;
  password: string;
  age: number;
  team?: string;
}

export interface TeamRegister {
  teamName: string;
  memberTeam?: string[];
}
