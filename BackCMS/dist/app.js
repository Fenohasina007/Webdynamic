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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeApp = exports.app = void 0;
const express_1 = __importDefault(require("express"));
const database_1 = require("./config/database");
const formation_routes_1 = __importDefault(require("./routes/formation.routes"));
const app = (0, express_1.default)();
exports.app = app;
app.use(express_1.default.json());
app.use('/api/formations', formation_routes_1.default);
const initializeApp = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield database_1.AppDataSource.initialize();
        console.log('Database connected successfully');
    }
    catch (error) {
        console.error('Error connecting to database:', error);
        process.exit(1);
    }
});
exports.initializeApp = initializeApp;
