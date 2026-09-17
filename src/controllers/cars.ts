import {Request, Response} from 'express';
export class CarController{
    getCars = async (_req: Request, res: Response): Promise<void> => {
        res.status(200).json({success:true,
            data: "dum dum dummy text"
        });
    };
    getCarById = async (_req: Request, res: Response): Promise<void> => {
        res.status(200).json({success:true,
            data: `dum dum dummy text, car id is ${_req.params.id}`
        });
    };
    
}