import { type Request, type Response, type NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { decode } from 'node:punycode';

interface AuthRequest extends Request {
    user?: { id: string; role: string };
}

export function verifyToken(req: AuthRequest, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: "No token provided" });
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string);

        if(!decoded || typeof decoded !== 'string'){
            return res.status(400)
        }

        req.user = decoded as { id: string; role: string };
        next();
    } catch (error) {
        return res.status(401).json({ message: "Invalid or expired token" });
    }
}

export function isAdmin(req: AuthRequest, res: Response, next: NextFunction) {
    if (req.user?.role !== 'admin') {
        return res.status(403).json({ message: "Access denied: admin only" });
    }
    next();
}