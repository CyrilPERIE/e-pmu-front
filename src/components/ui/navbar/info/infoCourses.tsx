import { Alert } from "@mui/material"
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useState } from "react";

import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const InfoCourse = () => {

    const [isToggled, setIsToggled] = useState(false)
    const handleToggle = () => {
        setIsToggled(!isToggled);
    }
    
    return (
        <div className="mt-2">
            <Alert severity="info" variant="outlined" onClick={handleToggle} className="cursor-pointer"> 
                <div className="flex justify-between">
                    <p className="font-semibold text-[#1893D5]">Logos utilisés</p>                
                    {isToggled ?
                            <ExpandMoreIcon />
                        :
                            <ExpandLessIcon />
                    }
                </div>
                {isToggled ? 
                        <div className="pt-2 pb-1 px-3 ">
                            <div><CheckCircleOutlineIcon className="text-accent-color mr-2" />  Pari placé remporté</div>
                            <div><AutorenewIcon className="text-orange-400 mr-2" />  En attente du résultat</div>
                            <div><RemoveCircleOutlineIcon className="text-red-400 mr-2" />  Pari placé perdu</div>
                            <div><MoreHorizIcon className="text-secondary-color-darker mr-2" />  Pas d'estimation</div>
                        </div>
                    :
                    <div></div>
                }
            </Alert>
        </div>
    )
}

export default InfoCourse