"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prismaCilent = void 0;
const client_1 = require("@prisma/client");
exports.prismaCilent = new client_1.PrismaClient({ log: ["quires"]
});
