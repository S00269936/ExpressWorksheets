import { connectDB } from "../../src/config/database";

beforeAll(async () => {
    console.log('Run once before tests');
   await connectDB();

});
