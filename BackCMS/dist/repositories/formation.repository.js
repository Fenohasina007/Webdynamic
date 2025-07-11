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
exports.FormationRepository = void 0;
const database_1 = require("../config/database");
const formation_entity_1 = require("../entities/formation.entity");
class FormationRepository {
    constructor() {
        this.repository = database_1.AppDataSource.getRepository(formation_entity_1.Formation);
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.repository.find();
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.repository.findOneBy({ id });
        });
    }
    create(formation) {
        return __awaiter(this, void 0, void 0, function* () {
            const newFormation = this.repository.create(formation);
            return this.repository.save(newFormation);
        });
    }
    update(id, formation) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.repository.update(id, formation);
            return this.repository.findOneBy({ id });
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.repository.delete(id);
        });
    }
}
exports.FormationRepository = FormationRepository;
