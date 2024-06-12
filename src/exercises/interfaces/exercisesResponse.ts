export interface ExercisesResponse {
    muscle_groups: MuscleGroup[];
}

export interface MuscleGroup {
    name:      string;
    exercises: Exercise[];
}

export interface Exercise {
    exercise_name: string;
    image_url:     string;
}
