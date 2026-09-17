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
    createCar = async (_req: Request, res: Response): Promise<void> => {
        res.status(200).json({success:true,
            data: `dum dum dummy text, car created with name ${_req.body.name}`
        });
    };
    updateCar = async (_req: Request, res: Response): Promise<void> => {
        res.status(200).json({success:true,
            data: `dum dum dummy text, car updated with id ${_req.params.id} and name ${_req.body.name}`
        });
    };
    deleteCar = async (_req: Request, res: Response): Promise<void> => {
        res.status(200).json({success:true,
            data: `dum dum dummy text, car deleted with id ${_req.params.id}`
        });
    };
}