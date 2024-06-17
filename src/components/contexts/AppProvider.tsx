
import { UserProvider } from "./UserContext";

export function AppProvider({children}:any){
    return(
        <UserProvider>
            {children}
        </UserProvider>
    );
}