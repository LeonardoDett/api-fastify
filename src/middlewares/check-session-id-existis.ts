import { FastifyReply } from "fastify/types/reply";
import { FastifyRequest } from "fastify/types/request";

export async function checkSessionIdExists(req:FastifyRequest, res:FastifyReply) {

    const sessionId = req.cookies.sessionId

    if (!sessionId) {
        return res.status(401).send({ error: "Session ID is required" });
    }

}