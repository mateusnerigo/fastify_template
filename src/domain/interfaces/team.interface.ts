import { CompanyId, TeamId } from "../types";

export interface ITeam {
  id?: TeamId,
  name: string,
  company_id: CompanyId,
  created_at?: Date | null,
  updated_at?: Date | null,
  deleted_at?: Date | null,
}

export interface ITeamRepository {
  create(data: ITeam): Promise<ITeam>;
}
