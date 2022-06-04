export interface SquadProps {
  id: number;
  name: string;
}

export interface ShiftProps {
  id: number;
  name: string;
  description: string;
}

export interface BranchProps {
  id: number;
  name: string;
}

export interface ScaleProps {
  id: number;
  date: string;
  squad: SquadProps;
  shift: ShiftProps;
  branch: BranchProps;
}
