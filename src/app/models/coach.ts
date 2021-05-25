import { CoachTopic } from "./coach-topic";

export interface Coach {
    id: string,
    introduction: string,
    availability: string,
    coachTopics: CoachTopic[]
}