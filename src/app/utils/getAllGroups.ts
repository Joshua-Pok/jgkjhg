 import { GroupService } from "../../../testservices";
 export const getAllGroups = async () => {
            try{
                const response = await GroupService.getGroups();
                return response.items || [];
            }catch(err){
               throw err;        
            }
        };