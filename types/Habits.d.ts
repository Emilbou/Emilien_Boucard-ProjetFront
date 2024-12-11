export type PersonalHabit = {
    id: number,
    user_id: number,
    title: string,
    description: string,
    is_global: number,
    created_at: string
    trackings: Tracking[]
}
export type Tracking = {
    date: string,
    completed: number,
    created_at: string
}
export type HabitPayload = {
    habit: PersonalHabit,
    trackings: Tracking[]
}

