
import { createContext, useState } from 'react';
/** 
 * This component is a context component used to maintain the user related 
 * global information.
 * Before the user signs in, the "UserProfile" object is null.
 * After having been authenticated by the server and returned 
 * the user information, an "UserProfile" object will be 
 * created and stored in the "context" storage.
 */

//User profile object definition
export interface UserProfile {
    name: string;
    email: string;
    country?: string;
}


// export interface HappyLearningContext{
//     user: UserProfile;
// }

// export const ContextStore = React.createContext<HappyLearningContext | null>(null);
/** 
 * We'd like to separate the "user" and "setUser" into two 
 * context so that ...
 */
export const UserProfileContext = createContext<UserProfile | null>(null);

export const UserProfileSetContext = createContext<React.Dispatch<React.SetStateAction<UserProfile | null>> | null>(null);

export function UserProvider({ children }: any) {
    //The type of the "user" object: UserProfile | null
    //The type of the "setUser" function: React.Dispatch<React.SetStateAction<UserProfile | null>>
    const [user, setUser] = useState<UserProfile | null>(null);

    return (
        <UserProfileContext.Provider value={user}>
            <UserProfileSetContext.Provider value={setUser}>
                {children}
            </UserProfileSetContext.Provider>
        </UserProfileContext.Provider>
    );
}


