export interface Leave{
    id: string;
    empId: string;
    startDate: string;
    endDate: string;
    description: string;
    leaveBalance: string;
    status: string;
}

export interface LeaveBody{
    employeeId: string;
    startDate: Date;
    endDate: Date;
    leaveBalance: string,
    status : string,
    discription : string
}