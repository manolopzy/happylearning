import React from "react";
import { UserProfile } from "../Types";

export const UserContext = React.createContext<UserProfile | null>(null);

