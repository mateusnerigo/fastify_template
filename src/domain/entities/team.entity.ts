import { IBaseEntity } from "../interfaces/base.interface";
import { ITeam } from "../interfaces/team.interface";
import { CompanyId, TeamId } from "../types";

class Team implements IBaseEntity {
  id: TeamId;
  name: string;
  company_id: CompanyId;
  created_at?: Date | null;
  updated_at?: Date | null;
  deleted_at?: Date | null;

  constructor({
    id,
    name,
    company_id,
    created_at,
    updated_at,
    deleted_at,
  }: ITeam) {
    this.id = id || null;
    this.name = name;
    this.company_id = company_id
    this.created_at = created_at || null;
    this.updated_at = updated_at || null;
    this.deleted_at = deleted_at || null;

    this.validate();
  }

  validate() {}
}

export { Team }
