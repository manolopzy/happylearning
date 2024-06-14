import React from "react";

export interface UserProfile {
    name: string;
    email: string;

}


export interface HappyLearningContext{
    user: UserProfile;
}

export const ContextStore = React.createContext<HappyLearningContext | null>(null);

