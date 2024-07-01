
import { UserContextProvider } from "./UserContext";

/**
 * This is the application context provider, which provides 
 * global information of the app such as user authentication 
 * details, application theme etc.
 * Multiple contexts are allowed to encapsulate all sub 
 * components that share the global data.
 * @param param0 
 * @returns 
 */
export function AppContextProvider({children}:any){
    return(
        <UserContextProvider>
            {children}
        </UserContextProvider>
    );
}