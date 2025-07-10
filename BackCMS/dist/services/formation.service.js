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
exports.FormationService = void 0;
const formation_repository_1 = require("../repositories/formation.repository");
class FormationService {
    constructor() {
        this.formationRepository = new formation_repository_1.FormationRepository();
    }
    getAllFormations() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.formationRepository.findAll();
        });
    }
    getFormationById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.formationRepository.findById(id);
        });
    }
    createFormation(formationData) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.formationRepository.create(formationData);
        });
    }
    updateFormation(id, formationData) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.formationRepository.update(id, formationData);
        });
    }
    deleteFormation(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.formationRepository.delete(id);
        });
    }
}
exports.FormationService = FormationService;
