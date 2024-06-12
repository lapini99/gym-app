import { MuscleGroup } from "./interfaces/exercisesResponse"

interface Props {
    muscle: MuscleGroup
}

export const Muscle = ({muscle}:Props) => {

    const {name} = muscle
    
  return (
    <div>Muscle</div>
  )
}
