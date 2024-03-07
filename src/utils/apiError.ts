class ApiError extends Error {
    public statusCode: number;
    public status: string;
    public isOperational: boolean;
  
    constructor(message: string, statusCode: number) {
      super(message);
      this.statusCode = statusCode;
      this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
      this.isOperational = true; // This is used to differentiate between operational errors and programming errors
    }
}
  
export default ApiError;
  