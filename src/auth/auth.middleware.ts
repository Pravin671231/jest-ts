import jwt from "jsonwebtoken";

export function authMiddleware(req: any, res: any, next: any) {
  const header = req.headers.authorization;

  if (!header) {
    return res.status(401).json({ message: "No token Provided" });
  }
  const token=header.spilt(" ")[1]
  try {
    const decoded =jwt.verify(token,process.env.)
  } catch (error) {
    
  }
}
