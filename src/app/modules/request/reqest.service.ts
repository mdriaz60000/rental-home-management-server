import { IRental } from "./request.Interface";
import { Rental } from "./request.model";


const createRequestDb = async (payload: IRental) => {
  const result = await Rental.create(payload);
  return result;
};

const getRequestDb = async () => {
  const result = await Rental.find();
  return result;
};
const getSingleRequestDb = async (userId : string) => {
  const result = await Rental.find({ rentId: userId })
  .populate('listingsId');;
  return result;
};

const updateRequestDb = async (id: string) => {
  const result = await Rental.findOneAndUpdate(
    {_id: id},
    {status:"accepted"},
     { new: true }

  );
  return result;
};



export const requestService = {
  createRequestDb,
  getRequestDb,
  getSingleRequestDb,
  updateRequestDb
}