import { Entity, Column, ManyToOne, OneToMany } from "typeorm";
import CommonEntity from "../common/CommonEntity.entity";
import ProgramCycle from "./program-cycle/program.cycle.entity";

@Entity("programs")
export default class Program extends CommonEntity {
  constructor(program?: Partial<Program>) {
    super();
    Object.assign(this, program);
  }
  
  @Column({ nullable: true })
  title: string;

  @Column()
  description: string;

  @OneToMany(() => ProgramCycle, (cycle) => cycle.program)
  programCycles: ProgramCycle[];
}
