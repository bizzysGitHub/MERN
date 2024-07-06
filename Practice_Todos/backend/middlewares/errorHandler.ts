
 const errorHandler = (err: { message: String; stack: any; }, req: any, res: { statusCode: any; status: (arg0: any) => void; json: (arg0: { message: any; stack: any; }) => void; }, next: any) => {
    
    const statusCode = res.statusCode ? res.statusCode : 500

    res.status(statusCode);

    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack
    });
}

export default errorHandler