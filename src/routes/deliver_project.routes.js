import {Router} from 'express';
import schemaValidator from '../middlewares/schema.validator.js';
import {deliverProject} from '../schemas/project.schema.js';
import DeliverProjectControllers from '../controllers/deliver_project.controllers.js';

const deliver = new DeliverProjectControllers;
const deliverRoutes = Router();

deliverRoutes.post('/projects/deliver', schemaValidator(deliverProject), deliver.create);

export default deliverRoutes;