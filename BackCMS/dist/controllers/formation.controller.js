"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormationController = void 0;
const formation_service_1 = require("../services/formation.service");
class FormationController {
    constructor() {
        this.formationService = new formation_service_1.FormationService();
    }
    getAllFormations(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const formations = yield this.formationService.getAllFormations();
                res.status(200).json(formations);
            }
            catch (error) {
                res.status(500).json({ message: 'Error fetching formations', error });
            }
        });
    }
    getFormationById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                const formation = yield this.formationService.getFormationById(id);
                if (!formation) {
                    res.status(404).json({ message: 'Formation not found' });
                    return;
                }
                res.status(200).json(formation);
            }
            catch (error) {
                res.status(500).json({ message: 'Error fetching formation', error });
            }
        });
    }
    createFormation(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const formationData = req.body;
                const newFormation = yield this.formationService.createFormation(formationData);
                res.status(201).json(newFormation);
            }
            catch (error) {
                res.status(500).json({ message: 'Error creating formation', error });
            }
        });
    }
    updateFormation(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                const formationData = req.body;
                const updatedFormation = yield this.formationService.updateFormation(id, formationData);
                if (!updatedFormation) {
                    res.status(404).json({ message: 'Formation not found' });
                    return;
                }
                res.status(200).json(updatedFormation);
            }
            catch (error) {
                res.status(500).json({ message: 'Error updating formation', error });
            }
        });
    }
    deleteFormation(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                yield this.formationService.deleteFormation(id);
                res.status(204).send();
            }
            catch (error) {
                res.status(500).json({ message: 'Error deleting formation', error });
            }
        });
    }
}
exports.FormationController = FormationController;
